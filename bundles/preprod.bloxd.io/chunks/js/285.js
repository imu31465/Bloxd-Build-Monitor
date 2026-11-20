export const id = 285;
export const ids = [285];
export const modules = {
  41037: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => ME,
      e: () => rE,
      g: () => HE,
      i: () => Aq,
      k: () => TE,
      m: () => cq,
      q: () => WE
    });
    var Yq = gq(41044),
      lq = gq(41053),
      Oq = gq(41070);
    class mq {
      constructor(qq, Eq, gq, Yq) {
        this.state = qq, this.pos = Eq, this.explicit = gq, this.view = Yq, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(qq) {
        let Eq = (0, Oq.gb)(this.state).resolveInner(this.pos, -1);
        for (; Eq && qq.indexOf(Eq.name) < 0;) Eq = Eq.parent;
        return Eq ? {
          from: Eq.from,
          to: this.pos,
          text: this.state.sliceDoc(Eq.from, this.pos),
          type: Eq.type
        } : null
      }
      matchBefore(qq) {
        let Eq = this.state.doc.lineAt(this.pos),
          gq = Math.max(Eq.from, this.pos - 250),
          Yq = Eq.text.slice(gq - Eq.from, this.pos - Eq.from),
          lq = Yq.search(Wq(qq, !1));
        return lq < 0 ? null : {
          from: gq + lq,
          to: this.pos,
          text: Yq.slice(lq)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(qq, Eq, gq) {
        "abort" == qq && this.abortListeners && (this.abortListeners.push(Eq), gq && gq.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function xq(qq) {
      let Eq = Object.keys(qq).join(""),
        gq = /\w/.test(Eq);
      return gq && (Eq = Eq.replace(/\w/g, "")), `[${gq?"\\w":""}${Eq.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Aq(qq) {
      let Eq = qq.map((qq => "string" == typeof qq ? {
          label: qq
        } : qq)),
        [gq, Yq] = Eq.every((qq => /^\w+$/.test(qq.label))) ? [/\w*$/, /\w+$/] : function(qq) {
          let Eq = Object.create(null),
            gq = Object.create(null);
          for (let {
              label: lq
            }
            of qq) {
            Eq[lq[0]] = !0;
            for (let qq = 1; qq < lq.length; qq++) gq[lq[qq]] = !0
          }
          let Yq = xq(Eq) + xq(gq) + "*$";
          return [new RegExp("^" + Yq), new RegExp(Yq)]
        }(Eq);
      return qq => {
        let lq = qq.matchBefore(Yq);
        return lq || qq.explicit ? {
          from: lq ? lq.from : qq.pos,
          options: Eq,
          validFor: gq
        } : null
      }
    }

    function cq(qq, Eq) {
      return gq => {
        for (let Eq = (0, Oq.gb)(gq.state).resolveInner(gq.pos, -1); Eq; Eq = Eq.parent) {
          if (qq.indexOf(Eq.name) > -1) return null;
          if (Eq.type.isTop) break
        }
        return Eq(gq)
      }
    }
    class uq {
      constructor(qq, Eq, gq, Yq) {
        this.completion = qq, this.source = Eq, this.match = gq, this.score = Yq
      }
    }

    function Bq(qq) {
      return qq.selection.main.from
    }

    function Wq(qq, Eq) {
      var gq;
      let {
        source: Yq
      } = qq, lq = Eq && "^" != Yq[0], Oq = "$" != Yq[Yq.length - 1];
      return lq || Oq ? new RegExp(`${lq?"^":""}(?:${Yq})${Oq?"$":""}`, null !== (gq = qq.flags) && void 0 !== gq ? gq : qq.ignoreCase ? "i" : "") : qq
    }
    const Nq = Yq.e.define();

    function aq(qq, Eq, gq, lq) {
      let {
        main: Oq
      } = qq.selection, mq = gq - Oq.from, xq = lq - Oq.from;
      return {
        ...qq.changeByRange((Aq => {
          if (Aq != Oq && gq != lq && qq.sliceDoc(Aq.from + mq, Aq.from + xq) != qq.sliceDoc(gq, lq)) return {
            range: Aq
          };
          let cq = qq.toText(Eq);
          return {
            changes: {
              from: Aq.from + mq,
              to: lq == Oq.from ? Aq.to : Aq.from + xq,
              insert: cq
            },
            range: Yq.q.cursor(Aq.from + mq + cq.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Vq = new WeakMap;

    function dq(qq) {
      if (!Array.isArray(qq)) return qq;
      let Eq = Vq.get(qq);
      return Eq || Vq.set(qq, Eq = Aq(qq)), Eq
    }
    const jq = Yq.J.define(),
      Hq = Yq.J.define();
    class oq {
      constructor(qq) {
        this.pattern = qq, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Eq = 0; Eq < qq.length;) {
          let gq = (0, Yq.U)(qq, Eq),
            lq = (0, Yq.V)(gq);
          this.chars.push(gq);
          let Oq = qq.slice(Eq, Eq + lq),
            mq = Oq.toUpperCase();
          this.folded.push((0, Yq.U)(mq == Oq ? Oq.toLowerCase() : mq, 0)), Eq += lq
        }
        this.astral = qq.length != this.chars.length
      }
      ret(qq, Eq) {
        return this.score = qq, this.matched = Eq, this
      }
      match(qq) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (qq.length < this.pattern.length) return null;
        let {
          chars: Eq,
          folded: gq,
          any: lq,
          precise: Oq,
          byWord: mq
        } = this;
        if (1 == Eq.length) {
          let lq = (0, Yq.U)(qq, 0),
            Oq = (0, Yq.V)(lq),
            mq = Oq == qq.length ? 0 : -100;
          if (lq == Eq[0]);
          else {
            if (lq != gq[0]) return null;
            mq += -200
          }
          return this.ret(mq, [0, Oq])
        }
        let xq = qq.indexOf(this.pattern);
        if (0 == xq) return this.ret(qq.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Aq = Eq.length,
          cq = 0;
        if (xq < 0) {
          for (let Oq = 0, mq = Math.min(qq.length, 200); Oq < mq && cq < Aq;) {
            let mq = (0, Yq.U)(qq, Oq);
            mq != Eq[cq] && mq != gq[cq] || (lq[cq++] = Oq), Oq += (0, Yq.V)(mq)
          }
          if (cq < Aq) return null
        }
        let uq = 0,
          Bq = 0,
          Wq = !1,
          Nq = 0,
          aq = -1,
          Vq = -1,
          dq = /[a-z]/.test(qq),
          jq = !0;
        for (let Hq = 0, oq = Math.min(qq.length, 200), Pq = 0; Hq < oq && Bq < Aq;) {
          let lq = (0, Yq.U)(qq, Hq);
          xq < 0 && (uq < Aq && lq == Eq[uq] && (Oq[uq++] = Hq), Nq < Aq && (lq == Eq[Nq] || lq == gq[Nq] ? (0 == Nq && (aq = Hq), Vq = Hq + 1, Nq++) : Nq = 0));
          let cq, oq = lq < 255 ? lq >= 48 && lq <= 57 || lq >= 97 && lq <= 122 ? 2 : lq >= 65 && lq <= 90 ? 1 : 0 : (cq = (0, Yq.cb)(lq)) != cq.toLowerCase() ? 1 : cq != cq.toUpperCase() ? 2 : 0;
          (!Hq || 1 == oq && dq || 0 == Pq && 0 != oq) && (Eq[Bq] == lq || gq[Bq] == lq && (Wq = !0) ? mq[Bq++] = Hq : mq.length && (jq = !1)), Pq = oq, Hq += (0, Yq.V)(lq)
        }
        return Bq == Aq && 0 == mq[0] && jq ? this.result((Wq ? -200 : 0) - 100, mq, qq) : Nq == Aq && 0 == aq ? this.ret(-200 - qq.length + (Vq == qq.length ? 0 : -100), [0, Vq]) : xq > -1 ? this.ret(-700 - qq.length, [xq, xq + this.pattern.length]) : Nq == Aq ? this.ret(-900 - qq.length, [aq, Vq]) : Bq == Aq ? this.result((Wq ? -200 : 0) - 100 - 700 + (jq ? 0 : -1100), mq, qq) : 2 == Eq.length ? null : this.result((lq[0] ? -700 : 0) - 200 - 1100, lq, qq)
      }
      result(qq, Eq, gq) {
        let lq = [],
          Oq = 0;
        for (let mq of Eq) {
          let qq = mq + (this.astral ? (0, Yq.V)((0, Yq.U)(gq, mq)) : 1);
          Oq && lq[Oq - 1] == mq ? lq[Oq - 1] = qq : (lq[Oq++] = mq, lq[Oq++] = qq)
        }
        return this.ret(qq - gq.length, lq)
      }
    }
    class Pq {
      constructor(qq) {
        this.pattern = qq, this.matched = [], this.score = 0, this.folded = qq.toLowerCase()
      }
      match(qq) {
        if (qq.length < this.pattern.length) return null;
        let Eq = qq.slice(0, this.pattern.length),
          gq = Eq == this.pattern ? 0 : Eq.toLowerCase() == this.folded ? -200 : null;
        return null == gq ? null : (this.matched = [0, Eq.length], this.score = gq + (qq.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Qq = Yq.x.define({
      combine: qq => (0, Yq.Y)(qq, {
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
        positionInfo: tq,
        filterStrict: !1,
        compareCompletions: (qq, Eq) => (qq.sortText || qq.label).localeCompare(Eq.sortText || Eq.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (qq, Eq) => qq && Eq,
        closeOnBlur: (qq, Eq) => qq && Eq,
        icons: (qq, Eq) => qq && Eq,
        tooltipClass: (qq, Eq) => gq => yq(qq(gq), Eq(gq)),
        optionClass: (qq, Eq) => gq => yq(qq(gq), Eq(gq)),
        addToOptions: (qq, Eq) => qq.concat(Eq),
        filterStrict: (qq, Eq) => qq || Eq
      })
    });

    function yq(qq, Eq) {
      return qq ? Eq ? qq + " " + Eq : qq : Eq
    }

    function tq(qq, Eq, gq, Yq, Oq, mq) {
      let xq, Aq, cq = qq.textDirection == lq.e.RTL,
        uq = cq,
        Bq = !1,
        Wq = "top",
        Nq = Eq.left - Oq.left,
        aq = Oq.right - Eq.right,
        Vq = Yq.right - Yq.left,
        dq = Yq.bottom - Yq.top;
      if (uq && Nq < Math.min(Vq, aq) ? uq = !1 : !uq && aq < Math.min(Vq, Nq) && (uq = !0), Vq <= (uq ? Nq : aq)) xq = Math.max(Oq.top, Math.min(gq.top, Oq.bottom - dq)) - Eq.top, Aq = Math.min(400, uq ? Nq : aq);
      else {
        Bq = !0, Aq = Math.min(400, (cq ? Eq.right : Oq.right - Eq.left) - 30);
        let qq = Oq.bottom - Eq.bottom;
        qq >= dq || qq > Eq.top ? xq = gq.bottom - Eq.top : (Wq = "bottom", xq = Eq.bottom - gq.top)
      }
      return {
        style: `${Wq}: ${xq/((Eq.bottom-Eq.top)/mq.offsetHeight)}px; max-width: ${Aq/((Eq.right-Eq.left)/mq.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Bq ? cq ? "left-narrow" : "right-narrow" : uq ? "left" : "right")
      }
    }
    const rq = Yq.J.define();

    function vq(qq, Eq, gq) {
      if (qq <= gq) return {
        from: 0,
        to: qq
      };
      if (Eq < 0 && (Eq = 0), Eq <= qq >> 1) {
        let qq = Math.floor(Eq / gq);
        return {
          from: qq * gq,
          to: (qq + 1) * gq
        }
      }
      let Yq = Math.floor((qq - Eq) / gq);
      return {
        from: qq - (Yq + 1) * gq,
        to: qq - Yq * gq
      }
    }
    class hq {
      constructor(qq, Eq, gq) {
        this.view = qq, this.stateField = Eq, this.applyCompletion = gq, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: qq => this.placeInfo(qq),
          key: this
        }, this.space = null, this.currentClass = "";
        let Yq = qq.state.field(Eq),
          {
            options: lq,
            selected: Oq
          } = Yq.open,
          mq = qq.state.facet(Qq);
        this.optionContent = function(qq) {
          let Eq = qq.addToOptions.slice();
          return qq.icons && Eq.push({
            render(qq) {
              let Eq = document.createElement("div");
              return Eq.classList.add("cm-completionIcon"), qq.type && Eq.classList.add(...qq.type.split(/\s+/g).map((qq => "cm-completionIcon-" + qq))), Eq.setAttribute("aria-hidden", "true"), Eq
            },
            position: 20
          }), Eq.push({
            render(qq, Eq, gq, Yq) {
              let lq = document.createElement("span");
              lq.className = "cm-completionLabel";
              let Oq = qq.displayLabel || qq.label,
                mq = 0;
              for (let xq = 0; xq < Yq.length;) {
                let qq = Yq[xq++],
                  Eq = Yq[xq++];
                qq > mq && lq.appendChild(document.createTextNode(Oq.slice(mq, qq)));
                let gq = lq.appendChild(document.createElement("span"));
                gq.appendChild(document.createTextNode(Oq.slice(qq, Eq))), gq.className = "cm-completionMatchedText", mq = Eq
              }
              return mq < Oq.length && lq.appendChild(document.createTextNode(Oq.slice(mq))), lq
            },
            position: 50
          }, {
            render(qq) {
              if (!qq.detail) return null;
              let Eq = document.createElement("span");
              return Eq.className = "cm-completionDetail", Eq.textContent = qq.detail, Eq
            },
            position: 80
          }), Eq.sort(((qq, Eq) => qq.position - Eq.position)).map((qq => qq.render))
        }(mq), this.optionClass = mq.optionClass, this.tooltipClass = mq.tooltipClass, this.range = vq(lq.length, Oq, mq.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(qq.state), this.dom.addEventListener("mousedown", (gq => {
          let {
            options: Yq
          } = qq.state.field(Eq).open;
          for (let Eq, lq = gq.target; lq && lq != this.dom; lq = lq.parentNode)
            if ("LI" == lq.nodeName && (Eq = /-(\d+)$/.exec(lq.id)) && +Eq[1] < Yq.length) return this.applyCompletion(qq, Yq[+Eq[1]]), void gq.preventDefault();
          if (gq.target == this.list) {
            let Eq = this.list.classList.contains("cm-completionListIncompleteTop") && gq.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && gq.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Eq && (qq.dispatch({
              effects: rq.of(Eq)
            }), gq.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Eq => {
          let gq = qq.state.field(this.stateField, !1);
          gq && gq.tooltip && qq.state.facet(Qq).closeOnBlur && Eq.relatedTarget != qq.contentDOM && qq.dispatch({
            effects: Hq.of(null)
          })
        })), this.showOptions(lq, Yq.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(qq, Eq) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(qq, Eq, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(qq) {
        var Eq;
        let gq = qq.state.field(this.stateField),
          Yq = qq.startState.field(this.stateField);
        if (this.updateTooltipClass(qq.state), gq != Yq) {
          let {
            options: lq,
            selected: Oq,
            disabled: mq
          } = gq.open;
          Yq.open && Yq.open.options == lq || (this.range = vq(lq.length, Oq, qq.state.facet(Qq).maxRenderedOptions), this.showOptions(lq, gq.id)), this.updateSel(), mq != (null === (Eq = Yq.open) || void 0 === Eq ? void 0 : Eq.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!mq)
        }
      }
      updateTooltipClass(qq) {
        let Eq = this.tooltipClass(qq);
        if (Eq != this.currentClass) {
          for (let qq of this.currentClass.split(" ")) qq && this.dom.classList.remove(qq);
          for (let qq of Eq.split(" ")) qq && this.dom.classList.add(qq);
          this.currentClass = Eq
        }
      }
      positioned(qq) {
        this.space = qq, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let qq = this.view.state.field(this.stateField),
          Eq = qq.open;
        (Eq.selected > -1 && Eq.selected < this.range.from || Eq.selected >= this.range.to) && (this.range = vq(Eq.options.length, Eq.selected, this.view.state.facet(Qq).maxRenderedOptions), this.showOptions(Eq.options, qq.id));
        let gq = this.updateSelectedOption(Eq.selected);
        if (gq) {
          this.destroyInfo();
          let {
            completion: Yq
          } = Eq.options[Eq.selected], {
            info: Oq
          } = Yq;
          if (!Oq) return;
          let mq = "string" === typeof Oq ? document.createTextNode(Oq) : Oq(Yq);
          if (!mq) return;
          "then" in mq ? mq.then((Eq => {
            Eq && this.view.state.field(this.stateField, !1) == qq && this.addInfoPane(Eq, Yq)
          })).catch((qq => (0, lq.R)(this.view.state, qq, "completion info"))) : (this.addInfoPane(mq, Yq), gq.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(qq, Eq) {
        this.destroyInfo();
        let gq = this.info = document.createElement("div");
        if (gq.className = "cm-tooltip cm-completionInfo", gq.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != qq.nodeType) gq.appendChild(qq), this.infoDestroy = null;
        else {
          let {
            dom: Eq,
            destroy: Yq
          } = qq;
          gq.appendChild(Eq), this.infoDestroy = Yq || null
        }
        this.dom.appendChild(gq), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(qq) {
        let Eq = null;
        for (let gq = this.list.firstChild, Yq = this.range.from; gq; gq = gq.nextSibling, Yq++) "LI" == gq.nodeName && gq.id ? Yq == qq ? gq.hasAttribute("aria-selected") || (gq.setAttribute("aria-selected", "true"), Eq = gq) : gq.hasAttribute("aria-selected") && (gq.removeAttribute("aria-selected"), gq.removeAttribute("aria-describedby")) : Yq--;
        return Eq && function(qq, Eq) {
          let gq = qq.getBoundingClientRect(),
            Yq = Eq.getBoundingClientRect(),
            lq = gq.height / qq.offsetHeight;
          Yq.top < gq.top ? qq.scrollTop -= (gq.top - Yq.top) / lq : Yq.bottom > gq.bottom && (qq.scrollTop += (Yq.bottom - gq.bottom) / lq)
        }(this.list, Eq), Eq
      }
      measureInfo() {
        let qq = this.dom.querySelector("[aria-selected]");
        if (!qq || !this.info) return null;
        let Eq = this.dom.getBoundingClientRect(),
          gq = this.info.getBoundingClientRect(),
          Yq = qq.getBoundingClientRect(),
          lq = this.space;
        if (!lq) {
          let qq = this.dom.ownerDocument.documentElement;
          lq = {
            left: 0,
            top: 0,
            right: qq.clientWidth,
            bottom: qq.clientHeight
          }
        }
        return Yq.top > Math.min(lq.bottom, Eq.bottom) - 10 || Yq.bottom < Math.max(lq.top, Eq.top) + 10 ? null : this.view.state.facet(Qq).positionInfo(this.view, Eq, Yq, gq, lq, this.dom)
      }
      placeInfo(qq) {
        this.info && (qq ? (qq.style && (this.info.style.cssText = qq.style), this.info.className = "cm-tooltip cm-completionInfo " + (qq.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(qq, Eq, gq) {
        const Yq = document.createElement("ul");
        Yq.id = Eq, Yq.setAttribute("role", "listbox"), Yq.setAttribute("aria-expanded", "true"), Yq.setAttribute("aria-label", this.view.state.phrase("Completions")), Yq.addEventListener("mousedown", (qq => {
          qq.target == Yq && qq.preventDefault()
        }));
        let lq = null;
        for (let Oq = gq.from; Oq < gq.to; Oq++) {
          let {
            completion: mq,
            match: xq
          } = qq[Oq], {
            section: Aq
          } = mq;
          if (Aq) {
            let qq = "string" == typeof Aq ? Aq : Aq.name;
            if (qq != lq && (Oq > gq.from || 0 == gq.from))
              if (lq = qq, "string" != typeof Aq && Aq.header) Yq.appendChild(Aq.header(Aq));
              else {
                Yq.appendChild(document.createElement("completion-section")).textContent = qq
              }
          }
          const cq = Yq.appendChild(document.createElement("li"));
          cq.id = Eq + "-" + Oq, cq.setAttribute("role", "option");
          let uq = this.optionClass(mq);
          uq && (cq.className = uq);
          for (let qq of this.optionContent) {
            let Eq = qq(mq, this.view.state, this.view, xq);
            Eq && cq.appendChild(Eq)
          }
        }
        return gq.from && Yq.classList.add("cm-completionListIncompleteTop"), gq.to < qq.length && Yq.classList.add("cm-completionListIncompleteBottom"), Yq
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function nq(qq, Eq) {
      return gq => new hq(gq, qq, Eq)
    }

    function bq(qq) {
      return 100 * (qq.boost || 0) + (qq.apply ? 10 : 0) + (qq.info ? 5 : 0) + (qq.type ? 1 : 0)
    }
    class iq {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.options = qq, this.attrs = Eq, this.tooltip = gq, this.timestamp = Yq, this.selected = lq, this.disabled = Oq
      }
      setSelected(qq, Eq) {
        return qq == this.selected || qq >= this.options.length ? this : new iq(this.options, Tq(Eq, qq), this.tooltip, this.timestamp, qq, this.disabled)
      }
      static build(qq, Eq, gq, Yq, lq, Oq) {
        if (Yq && !Oq && qq.some((qq => qq.isPending))) return Yq.setDisabled();
        let mq = function(qq, Eq) {
          let gq = [],
            Yq = null,
            lq = null,
            Oq = qq => {
              gq.push(qq);
              let {
                section: Eq
              } = qq.completion;
              if (Eq) {
                Yq || (Yq = []);
                let qq = "string" == typeof Eq ? Eq : Eq.name;
                Yq.some((Eq => Eq.name == qq)) || Yq.push("string" == typeof Eq ? {
                  name: qq
                } : Eq)
              }
            },
            mq = Eq.facet(Qq);
          for (let Bq of qq)
            if (Bq.hasResult()) {
              let qq = Bq.result.getMatch;
              if (!1 === Bq.result.filter)
                for (let Eq of Bq.result.options) Oq(new uq(Eq, Bq.source, qq ? qq(Eq) : [], 1e9 - gq.length));
              else {
                let gq, Yq = Eq.sliceDoc(Bq.from, Bq.to),
                  xq = mq.filterStrict ? new Pq(Yq) : new oq(Yq);
                for (let Eq of Bq.result.options)
                  if (gq = xq.match(Eq.label)) {
                    let Yq = Eq.displayLabel ? qq ? qq(Eq, gq.matched) : [] : gq.matched,
                      mq = gq.score + (Eq.boost || 0);
                    if (Oq(new uq(Eq, Bq.source, Yq, mq)), "object" == typeof Eq.section && "dynamic" === Eq.section.rank) {
                      let {
                        name: qq
                      } = Eq.section;
                      lq || (lq = Object.create(null)), lq[qq] = Math.max(mq, lq[qq] || -1e9)
                    }
                  }
              }
            } if (Yq) {
            let qq = Object.create(null),
              Eq = 0,
              Oq = (qq, Eq) => ("dynamic" === qq.rank && "dynamic" === Eq.rank ? lq[Eq.name] - lq[qq.name] : 0) || ("number" == typeof qq.rank ? qq.rank : 1e9) - ("number" == typeof Eq.rank ? Eq.rank : 1e9) || (qq.name < Eq.name ? -1 : 1);
            for (let gq of Yq.sort(Oq)) Eq -= 1e5, qq[gq.name] = Eq;
            for (let Yq of gq) {
              let {
                section: Eq
              } = Yq.completion;
              Eq && (Yq.score += qq["string" == typeof Eq ? Eq : Eq.name])
            }
          }
          let xq = [],
            Aq = null,
            cq = mq.compareCompletions;
          for (let uq of gq.sort(((qq, Eq) => Eq.score - qq.score || cq(qq.completion, Eq.completion)))) {
            let qq = uq.completion;
            !Aq || Aq.label != qq.label || Aq.detail != qq.detail || null != Aq.type && null != qq.type && Aq.type != qq.type || Aq.apply != qq.apply || Aq.boost != qq.boost ? xq.push(uq) : bq(uq.completion) > bq(Aq) && (xq[xq.length - 1] = uq), Aq = uq.completion
          }
          return xq
        }(qq, Eq);
        if (!mq.length) return Yq && qq.some((qq => qq.isPending)) ? Yq.setDisabled() : null;
        let xq = Eq.facet(Qq).selectOnOpen ? 0 : -1;
        if (Yq && Yq.selected != xq && -1 != Yq.selected) {
          let qq = Yq.options[Yq.selected].completion;
          for (let Eq = 0; Eq < mq.length; Eq++)
            if (mq[Eq].completion == qq) {
              xq = Eq;
              break
            }
        }
        return new iq(mq, Tq(gq, xq), {
          pos: qq.reduce(((qq, Eq) => Eq.hasResult() ? Math.min(qq, Eq.from) : qq), 1e8),
          create: Rq,
          above: lq.aboveCursor
        }, Yq ? Yq.timestamp : Date.now(), xq, !1)
      }
      map(qq) {
        return new iq(this.options, this.attrs, {
          ...this.tooltip,
          pos: qq.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new iq(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Zq {
      constructor(qq, Eq, gq) {
        this.active = qq, this.id = Eq, this.open = gq
      }
      static start() {
        return new Zq(zq, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(qq) {
        let {
          state: Eq
        } = qq, gq = Eq.facet(Qq), Yq = (gq.override || Eq.languageDataAt("autocomplete", Bq(Eq)).map(dq)).map((Eq => (this.active.find((qq => qq.source == Eq)) || new pq(Eq, this.active.some((qq => 0 != qq.state)) ? 1 : 0)).update(qq, gq)));
        Yq.length == this.active.length && Yq.every(((qq, Eq) => qq == this.active[Eq])) && (Yq = this.active);
        let lq = this.open,
          Oq = qq.effects.some((qq => qq.is(Lq)));
        lq && qq.docChanged && (lq = lq.map(qq.changes)), qq.selection || Yq.some((Eq => Eq.hasResult() && qq.changes.touchesRange(Eq.from, Eq.to))) || ! function(qq, Eq) {
          if (qq == Eq) return !0;
          for (let gq = 0, Yq = 0;;) {
            for (; gq < qq.length && !qq[gq].hasResult();) gq++;
            for (; Yq < Eq.length && !Eq[Yq].hasResult();) Yq++;
            let lq = gq == qq.length,
              Oq = Yq == Eq.length;
            if (lq || Oq) return lq == Oq;
            if (qq[gq++].result != Eq[Yq++].result) return !1
          }
        }(Yq, this.active) || Oq ? lq = iq.build(Yq, Eq, this.id, lq, gq, Oq) : lq && lq.disabled && !Yq.some((qq => qq.isPending)) && (lq = null), !lq && Yq.every((qq => !qq.isPending)) && Yq.some((qq => qq.hasResult())) && (Yq = Yq.map((qq => qq.hasResult() ? new pq(qq.source, 0) : qq)));
        for (let mq of qq.effects) mq.is(rq) && (lq = lq && lq.setSelected(mq.value, this.id));
        return Yq == this.active && lq == this.open ? this : new Zq(Yq, this.id, lq)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? fq : Mq
      }
    }
    const fq = {
        "aria-autocomplete": "list"
      },
      Mq = {};

    function Tq(qq, Eq) {
      let gq = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": qq
      };
      return Eq > -1 && (gq["aria-activedescendant"] = qq + "-" + Eq), gq
    }
    const zq = [];

    function Sq(qq, Eq) {
      if (qq.isUserEvent("input.complete")) {
        let gq = qq.annotation(Nq);
        if (gq && Eq.activateOnCompletion(gq)) return 12
      }
      let gq = qq.isUserEvent("input.type");
      return gq && Eq.activateOnTyping ? 5 : gq ? 1 : qq.isUserEvent("delete.backward") ? 2 : qq.selection ? 8 : qq.docChanged ? 16 : 0
    }
    class pq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = qq, this.state = Eq, this.explicit = gq
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(qq, Eq) {
        let gq = Sq(qq, Eq),
          Yq = this;
        (8 & gq || 16 & gq && this.touches(qq)) && (Yq = new pq(Yq.source, 0)), 4 & gq && 0 == Yq.state && (Yq = new pq(this.source, 1)), Yq = Yq.updateFor(qq, gq);
        for (let lq of qq.effects)
          if (lq.is(jq)) Yq = new pq(Yq.source, 1, lq.value);
          else if (lq.is(Hq)) Yq = new pq(Yq.source, 0);
        else if (lq.is(Lq))
          for (let qq of lq.value) qq.source == Yq.source && (Yq = qq);
        return Yq
      }
      updateFor(qq, Eq) {
        return this.map(qq.changes)
      }
      map(qq) {
        return this
      }
      touches(qq) {
        return qq.changes.touchesRange(Bq(qq.state))
      }
    }
    class Gq extends pq {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        super(qq, 3, Eq), this.limit = gq, this.result = Yq, this.from = lq, this.to = Oq
      }
      hasResult() {
        return !0
      }
      updateFor(qq, Eq) {
        var gq;
        if (!(3 & Eq)) return this.map(qq.changes);
        let Yq = this.result;
        Yq.map && !qq.changes.empty && (Yq = Yq.map(Yq, qq.changes));
        let lq = qq.changes.mapPos(this.from),
          Oq = qq.changes.mapPos(this.to, 1),
          xq = Bq(qq.state);
        if (xq > Oq || !Yq || 2 & Eq && (Bq(qq.startState) == this.from || xq < this.limit)) return new pq(this.source, 4 & Eq ? 1 : 0);
        let Aq = qq.changes.mapPos(this.limit);
        return function(qq, Eq, gq, Yq) {
          if (!qq) return !1;
          let lq = Eq.sliceDoc(gq, Yq);
          return "function" == typeof qq ? qq(lq, gq, Yq, Eq) : Wq(qq, !0).test(lq)
        }(Yq.validFor, qq.state, lq, Oq) ? new Gq(this.source, this.explicit, Aq, Yq, lq, Oq) : Yq.update && (Yq = Yq.update(Yq, lq, Oq, new mq(qq.state, xq, !1))) ? new Gq(this.source, this.explicit, Aq, Yq, Yq.from, null !== (gq = Yq.to) && void 0 !== gq ? gq : Bq(qq.state)) : new pq(this.source, 1, this.explicit)
      }
      map(qq) {
        if (qq.empty) return this;
        return (this.result.map ? this.result.map(this.result, qq) : this.result) ? new Gq(this.source, this.explicit, qq.mapPos(this.limit), this.result, qq.mapPos(this.from), qq.mapPos(this.to, 1)) : new pq(this.source, 0)
      }
      touches(qq) {
        return qq.changes.touchesRange(this.from, this.to)
      }
    }
    const Lq = Yq.J.define({
        map: (qq, Eq) => qq.map((qq => qq.map(Eq)))
      }),
      Jq = Yq.L.define({
        create: () => Zq.start(),
        update: (qq, Eq) => qq.update(Eq),
        provide: qq => [lq.fb.from(qq, (qq => qq.tooltip)), lq.g.contentAttributes.from(qq, (qq => qq.attrs))]
      });

    function kq(qq, Eq) {
      const gq = Eq.completion.apply || Eq.completion.label;
      let Yq = qq.state.field(Jq).active.find((qq => qq.source == Eq.source));
      return Yq instanceof Gq && ("string" == typeof gq ? qq.dispatch({
        ...aq(qq.state, gq, Yq.from, Yq.to),
        annotations: Nq.of(Eq.completion)
      }) : gq(qq, Eq.completion, Yq.from, Yq.to), !0)
    }
    const Rq = nq(Jq, kq);

    function Uq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return gq => {
        let Yq = gq.state.field(Jq, !1);
        if (!Yq || !Yq.open || Yq.open.disabled || Date.now() - Yq.open.timestamp < gq.state.facet(Qq).interactionDelay) return !1;
        let Oq, mq = 1;
        "page" == Eq && (Oq = (0, lq.x)(gq, Yq.open.tooltip)) && (mq = Math.max(2, Math.floor(Oq.dom.offsetHeight / Oq.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: xq
        } = Yq.open.options, Aq = Yq.open.selected > -1 ? Yq.open.selected + mq * (qq ? 1 : -1) : qq ? 0 : xq - 1;
        return Aq < 0 ? Aq = "page" == Eq ? 0 : xq - 1 : Aq >= xq && (Aq = "page" == Eq ? xq - 1 : 0), gq.dispatch({
          effects: rq.of(Aq)
        }), !0
      }
    }
    const Fq = qq => !!qq.state.field(Jq, !1) && (qq.dispatch({
      effects: jq.of(!0)
    }), !0);
    class sq {
      constructor(qq, Eq) {
        this.active = qq, this.context = Eq, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Xq = lq.l.fromClass(class {
        constructor(qq) {
          this.view = qq, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Eq of qq.state.field(Jq).active) Eq.isPending && this.startQuery(Eq)
        }
        update(qq) {
          let Eq = qq.state.field(Jq),
            gq = qq.state.facet(Qq);
          if (!qq.selectionSet && !qq.docChanged && qq.startState.field(Jq) == Eq) return;
          let Yq = qq.transactions.some((qq => {
            let Eq = Sq(qq, gq);
            return 8 & Eq || (qq.selection || qq.docChanged) && !(3 & Eq)
          }));
          for (let xq = 0; xq < this.running.length; xq++) {
            let Eq = this.running[xq];
            if (Yq || Eq.context.abortOnDocChange && qq.docChanged || Eq.updates.length + qq.transactions.length > 50 && Date.now() - Eq.time > 1e3) {
              for (let qq of Eq.context.abortListeners) try {
                qq()
              } catch (mq) {
                (0, lq.R)(this.view.state, mq)
              }
              Eq.context.abortListeners = null, this.running.splice(xq--, 1)
            } else Eq.updates.push(...qq.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), qq.transactions.some((qq => qq.effects.some((qq => qq.is(jq))))) && (this.pendingStart = !0);
          let Oq = this.pendingStart ? 50 : gq.activateOnTypingDelay;
          if (this.debounceUpdate = Eq.active.some((qq => qq.isPending && !this.running.some((Eq => Eq.active.source == qq.source)))) ? setTimeout((() => this.startUpdate()), Oq) : -1, 0 != this.composing)
            for (let lq of qq.transactions) lq.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && lq.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: qq
          } = this.view, Eq = qq.field(Jq);
          for (let gq of Eq.active) gq.isPending && !this.running.some((qq => qq.active.source == gq.source)) && this.startQuery(gq);
          this.running.length && Eq.open && Eq.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Qq).updateSyncTime))
        }
        startQuery(qq) {
          let {
            state: Eq
          } = this.view, gq = Bq(Eq), Yq = new mq(Eq, gq, qq.explicit, this.view), Oq = new sq(qq, Yq);
          this.running.push(Oq), Promise.resolve(qq.source(Yq)).then((qq => {
            Oq.context.aborted || (Oq.done = qq || null, this.scheduleAccept())
          }), (qq => {
            this.view.dispatch({
              effects: Hq.of(null)
            }), (0, lq.R)(this.view.state, qq)
          }))
        }
        scheduleAccept() {
          this.running.every((qq => void 0 !== qq.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Qq).updateSyncTime))
        }
        accept() {
          var qq;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Eq = [],
            gq = this.view.state.facet(Qq),
            Yq = this.view.state.field(Jq);
          for (let lq = 0; lq < this.running.length; lq++) {
            let Oq = this.running[lq];
            if (void 0 === Oq.done) continue;
            if (this.running.splice(lq--, 1), Oq.done) {
              let Yq = Bq(Oq.updates.length ? Oq.updates[0].startState : this.view.state),
                lq = Math.min(Yq, Oq.done.from + (Oq.active.explicit ? 0 : 1)),
                mq = new Gq(Oq.active.source, Oq.active.explicit, lq, Oq.done, Oq.done.from, null !== (qq = Oq.done.to) && void 0 !== qq ? qq : Yq);
              for (let qq of Oq.updates) mq = mq.update(qq, gq);
              if (mq.hasResult()) {
                Eq.push(mq);
                continue
              }
            }
            let mq = Yq.active.find((qq => qq.source == Oq.active.source));
            if (mq && mq.isPending)
              if (null == Oq.done) {
                let qq = new pq(Oq.active.source, 0);
                for (let Eq of Oq.updates) qq = qq.update(Eq, gq);
                qq.isPending || Eq.push(qq)
              } else this.startQuery(mq)
          }(Eq.length || Yq.open && Yq.open.disabled) && this.view.dispatch({
            effects: Lq.of(Eq)
          })
        }
      }, {
        eventHandlers: {
          blur(qq) {
            let Eq = this.view.state.field(Jq, !1);
            if (Eq && Eq.tooltip && this.view.state.facet(Qq).closeOnBlur) {
              let gq = Eq.open && (0, lq.x)(this.view, Eq.open.tooltip);
              gq && gq.dom.contains(qq.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Hq.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: jq.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      wq = "object" == typeof navigator && /Win/.test(navigator.platform),
      Kq = Yq.C.highest(lq.g.domEventHandlers({
        keydown(qq, Eq) {
          let gq = Eq.state.field(Jq, !1);
          if (!gq || !gq.open || gq.open.disabled || gq.open.selected < 0 || qq.key.length > 1 || qq.ctrlKey && (!wq || !qq.altKey) || qq.metaKey) return !1;
          let Yq = gq.open.options[gq.open.selected],
            lq = gq.active.find((qq => qq.source == Yq.source)),
            Oq = Yq.completion.commitCharacters || lq.result.commitCharacters;
          return Oq && Oq.indexOf(qq.key) > -1 && kq(Eq, Yq), !1
        }
      })),
      Cq = lq.g.baseTheme({
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
    class Iq {
      constructor(qq, Eq, gq, Yq) {
        this.field = qq, this.line = Eq, this.from = gq, this.to = Yq
      }
    }
    class eq {
      constructor(qq, Eq, gq) {
        this.field = qq, this.from = Eq, this.to = gq
      }
      map(qq) {
        let Eq = qq.mapPos(this.from, -1, Yq.B.TrackDel),
          gq = qq.mapPos(this.to, 1, Yq.B.TrackDel);
        return null == Eq || null == gq ? null : new eq(this.field, Eq, gq)
      }
    }
    class Dq {
      constructor(qq, Eq) {
        this.lines = qq, this.fieldPositions = Eq
      }
      instantiate(qq, Eq) {
        let gq = [],
          Yq = [Eq],
          lq = qq.doc.lineAt(Eq),
          mq = /^\s*/.exec(lq.text)[0];
        for (let Aq of this.lines) {
          if (gq.length) {
            let gq = mq,
              lq = /^\t*/.exec(Aq)[0].length;
            for (let Eq = 0; Eq < lq; Eq++) gq += qq.facet(Oq.V);
            Yq.push(Eq + gq.length - lq), Aq = gq + Aq.slice(lq)
          }
          gq.push(Aq), Eq += Aq.length + 1
        }
        let xq = this.fieldPositions.map((qq => new eq(qq.field, Yq[qq.line] + qq.from, Yq[qq.line] + qq.to)));
        return {
          text: gq,
          zV: xq
        }
      }
      static parse(qq) {
        let Eq, gq = [],
          Yq = [],
          lq = [];
        for (let Oq of qq.split(/\r\n?|\n/)) {
          for (; Eq = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Oq);) {
            let qq = Eq[1] ? +Eq[1] : null,
              mq = Eq[2] || Eq[3] || "",
              xq = -1,
              Aq = mq.replace(/\\[{}]/g, (qq => qq[1]));
            for (let Eq = 0; Eq < gq.length; Eq++)(null != qq ? gq[Eq].seq == qq : Aq && gq[Eq].name == Aq) && (xq = Eq);
            if (xq < 0) {
              let Eq = 0;
              for (; Eq < gq.length && (null == qq || null != gq[Eq].seq && gq[Eq].seq < qq);) Eq++;
              gq.splice(Eq, 0, {
                seq: qq,
                name: Aq
              }), xq = Eq;
              for (let qq of lq) qq.field >= xq && qq.field++
            }
            for (let gq of lq)
              if (gq.line == Yq.length && gq.from > Eq.index) {
                let qq = Eq[2] ? 3 + (Eq[1] || "").length : 2;
                gq.from -= qq, gq.to -= qq
              } lq.push(new Iq(xq, Yq.length, Eq.index, Eq.index + Aq.length)), Oq = Oq.slice(0, Eq.index) + mq + Oq.slice(Eq.index + Eq[0].length)
          }
          Oq = Oq.replace(/\\([{}])/g, ((qq, Eq, gq) => {
            for (let Oq of lq) Oq.line == Yq.length && Oq.from > gq && (Oq.from--, Oq.to--);
            return Eq
          })), Yq.push(Oq)
        }
        return new Dq(Yq, lq)
      }
    }
    let qE = lq.c.widget({
        widget: new class extends lq.m {
          toDOM() {
            let qq = document.createElement("span");
            return qq.className = "cm-snippetFieldPosition", qq
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      EE = lq.c.mark({
        class: "cm-snippetField"
      });
    class gE {
      constructor(qq, Eq) {
        this.zV = qq, this.active = Eq, this.deco = lq.c.set(qq.map((qq => (qq.from == qq.to ? qE : EE).range(qq.from, qq.to))), !0)
      }
      map(qq) {
        let Eq = [];
        for (let gq of this.zV) {
          let Yq = gq.map(qq);
          if (!Yq) return null;
          Eq.push(Yq)
        }
        return new gE(Eq, this.active)
      }
      selectionInsideField(qq) {
        return qq.zV.every((qq => this.zV.some((Eq => Eq.field == this.active && Eq.from <= qq.from && Eq.to >= qq.to))))
      }
    }
    const YE = Yq.J.define({
        map: (qq, Eq) => qq && qq.map(Eq)
      }),
      lE = Yq.J.define(),
      OE = Yq.L.define({
        create: () => null,
        update(qq, Eq) {
          for (let gq of Eq.effects) {
            if (gq.is(YE)) return gq.value;
            if (gq.is(lE) && qq) return new gE(qq.zV, gq.value)
          }
          return qq && Eq.docChanged && (qq = qq.map(Eq.changes)), qq && Eq.selection && !qq.selectionInsideField(Eq.selection) && (qq = null), qq
        },
        provide: qq => lq.g.YO.from(qq, (qq => qq ? qq.deco : lq.c.none))
      });

    function mE(qq, Eq) {
      return Yq.q.create(qq.filter((qq => qq.field == Eq)).map((qq => Yq.q.range(qq.from, qq.to))))
    }

    function xE(qq) {
      let Eq = Dq.parse(qq);
      return (qq, gq, lq, Oq) => {
        let {
          text: mq,
          zV: xq
        } = Eq.instantiate(qq.state, lq), {
          main: Aq
        } = qq.state.selection, cq = {
          changes: {
            from: lq,
            to: Oq == Aq.from ? Aq.to : Oq,
            insert: Yq.O.of(mq)
          },
          scrollIntoView: !0,
          annotations: gq ? [Nq.of(gq), Yq.Q.userEvent.of("input.complete")] : void 0
        };
        if (xq.length && (cq.selection = mE(xq, 0)), xq.some((qq => qq.field > 0))) {
          let Eq = new gE(xq, 0),
            gq = cq.effects = [YE.of(Eq)];
          void 0 === qq.state.field(OE, !1) && gq.push(Yq.J.appendConfig.of([OE, BE, NE, Cq]))
        }
        qq.dispatch(qq.state.update(cq))
      }
    }

    function AE(qq) {
      return Eq => {
        let {
          state: gq,
          dispatch: Yq
        } = Eq, lq = gq.field(OE, !1);
        if (!lq || qq < 0 && 0 == lq.active) return !1;
        let Oq = lq.active + qq,
          mq = qq > 0 && !lq.zV.some((Eq => Eq.field == Oq + qq));
        return Yq(gq.update({
          selection: mE(lq.zV, Oq),
          effects: YE.of(mq ? null : new gE(lq.zV, Oq)),
          scrollIntoView: !0
        })), !0
      }
    }
    const cE = [{
        key: "Tab",
        run: AE(1),
        shift: AE(-1)
      }, {
        key: "Escape",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          return !!Eq.field(OE, !1) && (gq(Eq.update({
            effects: YE.of(null)
          })), !0)
        }
      }],
      uE = Yq.x.define({
        combine: qq => qq.length ? qq[0] : cE
      }),
      BE = Yq.C.highest(lq.P.compute([uE], (qq => qq.facet(uE))));

    function WE(qq, Eq) {
      return {
        ...Eq,
        apply: xE(qq)
      }
    }
    const NE = lq.g.domEventHandlers({
      mousedown(qq, Eq) {
        let gq, Yq = Eq.state.field(OE, !1);
        if (!Yq || null == (gq = Eq.posAtCoords({
            x: qq.clientX,
            y: qq.clientY
          }))) return !1;
        let lq = Yq.zV.find((qq => qq.from <= gq && qq.to >= gq));
        return !(!lq || lq.field == Yq.active) && (Eq.dispatch({
          selection: mE(Yq.zV, lq.field),
          effects: YE.of(Yq.zV.some((qq => qq.field > lq.field)) ? new gE(Yq.zV, lq.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const aE = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      VE = Yq.J.define({
        map(qq, Eq) {
          let gq = Eq.mapPos(qq, -1, Yq.B.TrackAfter);
          return null == gq ? void 0 : gq
        }
      }),
      dE = new class extends Yq.I {};
    dE.startSide = 1, dE.endSide = -1;
    const jE = Yq.L.define({
      create: () => Yq.G.empty,
      update(qq, Eq) {
        if (qq = qq.map(Eq.changes), Eq.selection) {
          let gq = Eq.state.doc.lineAt(Eq.selection.main.head);
          qq = qq.update({
            filter: qq => qq >= gq.from && qq <= gq.to
          })
        }
        for (let gq of Eq.effects) gq.is(VE) && (qq = qq.update({
          add: [dE.range(gq.value, gq.value + 1)]
        }));
        return qq
      }
    });

    function HE() {
      return [tE, jE]
    }
    const oE = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function PE(qq) {
      for (let Eq = 0; Eq < 16; Eq += 2)
        if (oE.charCodeAt(Eq) == qq) return oE.charAt(Eq + 1);
      return (0, Yq.cb)(qq < 128 ? qq : qq + 1)
    }

    function QE(qq, Eq) {
      return qq.languageDataAt("closeBrackets", Eq)[0] || aE
    }
    const yE = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      tE = lq.g.inputHandler.of(((qq, Eq, gq, lq) => {
        if ((yE ? qq.composing : qq.compositionStarted) || qq.state.readOnly) return !1;
        let Oq = qq.state.selection.main;
        if (lq.length > 2 || 2 == lq.length && 1 == (0, Yq.V)((0, Yq.U)(lq, 0)) || Eq != Oq.from || gq != Oq.to) return !1;
        let mq = function(qq, Eq) {
          let gq = QE(qq, qq.selection.main.head),
            lq = gq.brackets || aE.brackets;
          for (let Oq of lq) {
            let mq = PE((0, Yq.U)(Oq, 0));
            if (Eq == Oq) return mq == Oq ? iE(qq, Oq, lq.indexOf(Oq + Oq + Oq) > -1, gq) : nE(qq, Oq, mq, gq.before || aE.before);
            if (Eq == mq && vE(qq, qq.selection.main.from)) return bE(qq, Oq, mq)
          }
          return null
        }(qq.state, lq);
        return !!mq && (qq.dispatch(mq), !0)
      })),
      rE = [{
        key: "Backspace",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          if (Eq.readOnly) return !1;
          let lq = QE(Eq, Eq.selection.main.head).brackets || aE.brackets,
            Oq = null,
            mq = Eq.changeByRange((qq => {
              if (qq.empty) {
                let gq = function(qq, Eq) {
                  let gq = qq.sliceString(Eq - 2, Eq);
                  return (0, Yq.V)((0, Yq.U)(gq, 0)) == gq.length ? gq : gq.slice(1)
                }(Eq.doc, qq.head);
                for (let Oq of lq)
                  if (Oq == gq && hE(Eq.doc, qq.head) == PE((0, Yq.U)(Oq, 0))) return {
                    changes: {
                      from: qq.head - Oq.length,
                      to: qq.head + Oq.length
                    },
                    range: Yq.q.cursor(qq.head - Oq.length)
                  }
              }
              return {
                range: Oq = qq
              }
            }));
          return Oq || gq(Eq.update(mq, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Oq
        }
      }];

    function vE(qq, Eq) {
      let gq = !1;
      return qq.field(jE).between(0, qq.doc.length, (qq => {
        qq == Eq && (gq = !0)
      })), gq
    }

    function hE(qq, Eq) {
      let gq = qq.sliceString(Eq, Eq + 2);
      return gq.slice(0, (0, Yq.V)((0, Yq.U)(gq, 0)))
    }

    function nE(qq, Eq, gq, lq) {
      let Oq = null,
        mq = qq.changeByRange((mq => {
          if (!mq.empty) return {
            changes: [{
              insert: Eq,
              from: mq.from
            }, {
              insert: gq,
              from: mq.to
            }],
            effects: VE.of(mq.to + Eq.length),
            range: Yq.q.range(mq.anchor + Eq.length, mq.head + Eq.length)
          };
          let xq = hE(qq.doc, mq.head);
          return !xq || /\s/.test(xq) || lq.indexOf(xq) > -1 ? {
            changes: {
              insert: Eq + gq,
              from: mq.head
            },
            effects: VE.of(mq.head + Eq.length),
            range: Yq.q.cursor(mq.head + Eq.length)
          } : {
            range: Oq = mq
          }
        }));
      return Oq ? null : qq.update(mq, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function bE(qq, Eq, gq) {
      let lq = null,
        Oq = qq.changeByRange((Eq => Eq.empty && hE(qq.doc, Eq.head) == gq ? {
          changes: {
            from: Eq.head,
            to: Eq.head + gq.length,
            insert: gq
          },
          range: Yq.q.cursor(Eq.head + gq.length)
        } : lq = {
          range: Eq
        }));
      return lq ? null : qq.update(Oq, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function iE(qq, Eq, gq, lq) {
      let mq = lq.stringPrefixes || aE.stringPrefixes,
        xq = null,
        Aq = qq.changeByRange((lq => {
          if (!lq.empty) return {
            changes: [{
              insert: Eq,
              from: lq.from
            }, {
              insert: Eq,
              from: lq.to
            }],
            effects: VE.of(lq.to + Eq.length),
            range: Yq.q.range(lq.anchor + Eq.length, lq.head + Eq.length)
          };
          let Aq, cq = lq.head,
            uq = hE(qq.doc, cq);
          if (uq == Eq) {
            if (ZE(qq, cq)) return {
              changes: {
                insert: Eq + Eq,
                from: cq
              },
              effects: VE.of(cq + Eq.length),
              range: Yq.q.cursor(cq + Eq.length)
            };
            if (vE(qq, cq)) {
              let lq = gq && qq.sliceDoc(cq, cq + 3 * Eq.length) == Eq + Eq + Eq ? Eq + Eq + Eq : Eq;
              return {
                changes: {
                  from: cq,
                  to: cq + lq.length,
                  insert: lq
                },
                range: Yq.q.cursor(cq + lq.length)
              }
            }
          } else {
            if (gq && qq.sliceDoc(cq - 2 * Eq.length, cq) == Eq + Eq && (Aq = fE(qq, cq - 2 * Eq.length, mq)) > -1 && ZE(qq, Aq)) return {
              changes: {
                insert: Eq + Eq + Eq + Eq,
                from: cq
              },
              effects: VE.of(cq + Eq.length),
              range: Yq.q.cursor(cq + Eq.length)
            };
            if (qq.charCategorizer(cq)(uq) != Yq.m.Word && fE(qq, cq, mq) > -1 && ! function(qq, Eq, gq, Yq) {
                let lq = (0, Oq.gb)(qq).resolveInner(Eq, -1),
                  mq = Yq.reduce(((qq, Eq) => Math.max(qq, Eq.length)), 0);
                for (let Oq = 0; Oq < 5; Oq++) {
                  let Oq = qq.sliceDoc(lq.from, Math.min(lq.to, lq.from + gq.length + mq)),
                    xq = Oq.indexOf(gq);
                  if (!xq || xq > -1 && Yq.indexOf(Oq.slice(0, xq)) > -1) {
                    let Eq = lq.firstChild;
                    for (; Eq && Eq.from == lq.from && Eq.to - Eq.from > gq.length + xq;) {
                      if (qq.sliceDoc(Eq.to - gq.length, Eq.to) == gq) return !1;
                      Eq = Eq.firstChild
                    }
                    return !0
                  }
                  let Aq = lq.to == Eq && lq.parent;
                  if (!Aq) break;
                  lq = Aq
                }
                return !1
              }(qq, cq, Eq, mq)) return {
              changes: {
                insert: Eq + Eq,
                from: cq
              },
              effects: VE.of(cq + Eq.length),
              range: Yq.q.cursor(cq + Eq.length)
            }
          }
          return {
            range: xq = lq
          }
        }));
      return xq ? null : qq.update(Aq, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ZE(qq, Eq) {
      let gq = (0, Oq.gb)(qq).resolveInner(Eq + 1);
      return gq.parent && gq.from == Eq
    }

    function fE(qq, Eq, gq) {
      let lq = qq.charCategorizer(Eq);
      if (lq(qq.sliceDoc(Eq - 1, Eq)) != Yq.m.Word) return Eq;
      for (let Oq of gq) {
        let gq = Eq - Oq.length;
        if (qq.sliceDoc(gq, Eq) == Oq && lq(qq.sliceDoc(gq - 1, gq)) != Yq.m.Word) return gq
      }
      return -1
    }

    function ME() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Kq, Jq, Qq.of(qq), Xq, zE, Cq]
    }
    const TE = [{
        key: "Ctrl-Space",
        run: Fq
      }, {
        mac: "Alt-`",
        run: Fq
      }, {
        mac: "Alt-i",
        run: Fq
      }, {
        key: "Escape",
        run: qq => {
          let Eq = qq.state.field(Jq, !1);
          return !(!Eq || !Eq.active.some((qq => 0 != qq.state))) && (qq.dispatch({
            effects: Hq.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Uq(!0)
      }, {
        key: "ArrowUp",
        run: Uq(!1)
      }, {
        key: "PageDown",
        run: Uq(!0, "page")
      }, {
        key: "PageUp",
        run: Uq(!1, "page")
      }, {
        key: "Enter",
        run: qq => {
          let Eq = qq.state.field(Jq, !1);
          return !(qq.state.readOnly || !Eq || !Eq.open || Eq.open.selected < 0 || Eq.open.disabled || Date.now() - Eq.open.timestamp < qq.state.facet(Qq).interactionDelay) && kq(qq, Eq.open.options[Eq.open.selected])
        }
      }],
      zE = Yq.C.highest(lq.P.computeN([Qq], (qq => qq.facet(Qq).defaultKeymap ? [TE] : [])))
  },
  41201: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      f: () => Wq,
      i: () => uq,
      l: () => Bq
    });
    var Yq = gq(41044);
    class lq {
      constructor(qq, Eq, gq, Yq) {
        this.origin = qq, this.changes = Eq, this.effects = gq, this.clientID = Yq
      }
    }
    class Oq {
      constructor(qq, Eq) {
        this.version = qq, this.unconfirmed = Eq
      }
    }
    const mq = Yq.x.define({
        combine(qq) {
          let Eq = (0, Yq.Y)(qq, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: qq => qq
          });
          return null == Eq.clientID && (Eq.clientID = qq.length && qq[0].generatedID || ""), Eq
        }
      }),
      xq = Yq.e.define(),
      Aq = Yq.L.define({
        create: qq => new Oq(qq.facet(mq).startVersion, []),
        update(qq, Eq) {
          let gq = Eq.annotation(xq);
          if (gq) return gq;
          let {
            sharedEffects: Yq,
            clientID: Aq
          } = Eq.startState.facet(mq), cq = Yq(Eq);
          return cq.length || !Eq.changes.empty ? new Oq(qq.version, qq.unconfirmed.concat(new lq(Eq, Eq.changes, cq, Aq))) : qq
        }
      });

    function cq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Aq, mq.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, qq))]
    }

    function uq(qq, Eq) {
      let {
        version: gq,
        unconfirmed: cq
      } = qq.field(Aq), {
        clientID: uq
      } = qq.facet(mq);
      gq += Eq.length;
      let Bq = [],
        Wq = null,
        Nq = 0;
      for (let lq of Eq) {
        let qq = Nq < cq.length ? cq[Nq] : null;
        qq && qq.clientID == lq.clientID ? (Wq && (Wq = Wq.map(qq.changes, !0)), Bq = Yq.J.mapEffects(Bq, lq.changes), Nq++) : (Bq = Yq.J.mapEffects(Bq, lq.changes), lq.effects && (Bq = Bq.concat(lq.effects)), Wq = Wq ? Wq.compose(lq.changes) : lq.changes)
      }
      if (Nq && (cq = cq.slice(Nq)), cq.length && (Wq && (cq = cq.map((qq => {
          let Eq = qq.changes.map(Wq);
          return Wq = Wq.map(qq.changes, !0), new lq(qq.origin, Eq, Yq.J.mapEffects(qq.effects, Wq), uq)
        }))), Bq.length)) {
        let qq = cq.reduce(((qq, Eq) => qq.compose(Eq.changes)), Yq.ChangeSet.empty(cq[0].changes.length));
        Bq = Yq.J.mapEffects(Bq, qq)
      }
      return Wq ? qq.update({
        changes: Wq,
        effects: Bq,
        annotations: [Yq.Q.addToHistory.of(!1), Yq.Q.remote.of(!0), xq.of(new Oq(gq, cq))],
        filter: !1
      }) : qq.update({
        annotations: [xq.of(new Oq(gq, cq))]
      })
    }

    function Bq(qq) {
      return qq.field(Aq).unconfirmed
    }

    function Wq(qq) {
      return qq.field(Aq).version
    }
  },
  41082: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => VE
    });
    var Yq = gq(41073);
    class lq {
      constructor(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        let cq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          uq = arguments.length > 10 ? arguments[10] : void 0;
        this.p = qq, this.stack = Eq, this.state = gq, this.reducePos = Yq, this.pos = lq, this.score = Oq, this.buffer = mq, this.bufferBase = xq, this.curContext = Aq, this.lookAhead = cq, this.parent = uq
      }
      toString() {
        return `[${this.stack.filter(((qq,Eq)=>Eq%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = qq.parser.context;
        return new lq(qq, [], Eq, gq, gq, 0, [], 0, Yq ? new Oq(Yq, Yq.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(qq, Eq) {
        this.stack.push(this.state, Eq, this.bufferBase + this.buffer.length), this.state = qq
      }
      reduce(qq) {
        var Eq;
        let gq = qq >> 19,
          Yq = 65535 & qq,
          {
            parser: lq
          } = this.p,
          Oq = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          mq = lq.dynamicPrecedence(Yq);
        if (mq && (this.score += mq), 0 == gq) return this.pushState(lq.getGoto(this.state, Yq, !0), this.reducePos), Yq < lq.minRepeatTerm && this.storeNode(Yq, this.reducePos, this.reducePos, Oq ? 8 : 4, !0), void this.reduceContext(Yq, this.reducePos);
        let xq = this.stack.length - 3 * (gq - 1) - (262144 & qq ? 6 : 0),
          Aq = xq ? this.stack[xq - 2] : this.p.zV[0].from,
          cq = this.reducePos - Aq;
        cq >= 2e3 && !(null === (Eq = this.p.parser.nodeSet.types[Yq]) || void 0 === Eq ? void 0 : Eq.isAnonymous) && (Aq == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = cq) : this.p.lastBigReductionSize < cq && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Aq, this.p.lastBigReductionSize = cq));
        let uq = xq ? this.stack[xq - 1] : 0,
          Bq = this.bufferBase + this.buffer.length - uq;
        if (Yq < lq.minRepeatTerm || 131072 & qq) {
          let qq = lq.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Yq, Aq, qq, Bq + 4, !0)
        }
        if (262144 & qq) this.state = this.stack[xq];
        else {
          let qq = this.stack[xq - 3];
          this.state = lq.getGoto(qq, Yq, !0)
        }
        for (; this.stack.length > xq;) this.stack.pop();
        this.reduceContext(Yq, Aq)
      }
      storeNode(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == qq && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let qq = this,
            Yq = this.buffer.length;
          if (0 == Yq && qq.parent && (Yq = qq.bufferBase - qq.parent.bufferBase, qq = qq.parent), Yq > 0 && 0 == qq.buffer[Yq - 4] && qq.buffer[Yq - 1] > -1) {
            if (Eq == gq) return;
            if (qq.buffer[Yq - 2] >= Eq) return void(qq.buffer[Yq - 2] = gq)
          }
        }
        if (lq && this.pos != gq) {
          let lq = this.buffer.length;
          if (lq > 0 && (0 != this.buffer[lq - 4] || this.buffer[lq - 1] < 0)) {
            let qq = !1;
            for (let Eq = lq; Eq > 0 && this.buffer[Eq - 2] > gq; Eq -= 4)
              if (this.buffer[Eq - 1] >= 0) {
                qq = !0;
                break
              } if (qq)
              for (; lq > 0 && this.buffer[lq - 2] > gq;) this.buffer[lq] = this.buffer[lq - 4], this.buffer[lq + 1] = this.buffer[lq - 3], this.buffer[lq + 2] = this.buffer[lq - 2], this.buffer[lq + 3] = this.buffer[lq - 1], lq -= 4, Yq > 4 && (Yq -= 4)
          }
          this.buffer[lq] = qq, this.buffer[lq + 1] = Eq, this.buffer[lq + 2] = gq, this.buffer[lq + 3] = Yq
        } else this.buffer.push(qq, Eq, gq, Yq)
      }
      shift(qq, Eq, gq, Yq) {
        if (131072 & qq) this.pushState(65535 & qq, this.pos);
        else if (0 == (262144 & qq)) {
          let lq = qq,
            {
              parser: Oq
            } = this.p;
          this.pos = Yq;
          let mq = Oq.stateFlag(lq, 1);
          !mq && (Yq > gq || Eq <= Oq.maxNode) && (this.reducePos = Yq), this.pushState(lq, mq ? gq : Math.min(gq, this.reducePos)), this.shiftContext(Eq, gq), Eq <= Oq.maxNode && this.buffer.push(Eq, gq, Yq, 4)
        } else this.pos = Yq, this.shiftContext(Eq, gq), Eq <= this.p.parser.maxNode && this.buffer.push(Eq, gq, Yq, 4)
      }
      apply(qq, Eq, gq, Yq) {
        65536 & qq ? this.reduce(qq) : this.shift(qq, Eq, gq, Yq)
      }
      useNode(qq, Eq) {
        let gq = this.p.reused.length - 1;
        (gq < 0 || this.p.reused[gq] != qq) && (this.p.reused.push(qq), gq++);
        let Yq = this.pos;
        this.reducePos = this.pos = Yq + qq.length, this.pushState(Eq, Yq), this.buffer.push(gq, Yq, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, qq, this, this.p.stream.reset(this.pos - qq.length)))
      }
      split() {
        let qq = this,
          Eq = qq.buffer.length;
        for (; Eq > 0 && qq.buffer[Eq - 2] > qq.reducePos;) Eq -= 4;
        let gq = qq.buffer.slice(Eq),
          Yq = qq.bufferBase + Eq;
        for (; qq && Yq == qq.bufferBase;) qq = qq.parent;
        return new lq(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, gq, Yq, this.curContext, this.lookAhead, qq)
      }
      recoverByDelete(qq, Eq) {
        let gq = qq <= this.p.parser.maxNode;
        gq && this.storeNode(qq, this.pos, Eq, 4), this.storeNode(0, this.pos, Eq, gq ? 8 : 4), this.pos = this.reducePos = Eq, this.score -= 190
      }
      canShift(qq) {
        for (let Eq = new mq(this);;) {
          let gq = this.p.parser.stateSlot(Eq.state, 4) || this.p.parser.hasAction(Eq.state, qq);
          if (0 == gq) return !1;
          if (0 == (65536 & gq)) return !0;
          Eq.reduce(gq)
        }
      }
      recoverByInsert(qq) {
        if (this.stack.length >= 300) return [];
        let Eq = this.p.parser.nextStates(this.state);
        if (Eq.length > 8 || this.stack.length >= 120) {
          let gq = [];
          for (let Yq, lq = 0; lq < Eq.length; lq += 2)(Yq = Eq[lq + 1]) != this.state && this.p.parser.hasAction(Yq, qq) && gq.push(Eq[lq], Yq);
          if (this.stack.length < 120)
            for (let qq = 0; gq.length < 8 && qq < Eq.length; qq += 2) {
              let Yq = Eq[qq + 1];
              gq.some(((qq, Eq) => 1 & Eq && qq == Yq)) || gq.push(Eq[qq], Yq)
            }
          Eq = gq
        }
        let gq = [];
        for (let Yq = 0; Yq < Eq.length && gq.length < 4; Yq += 2) {
          let qq = Eq[Yq + 1];
          if (qq == this.state) continue;
          let lq = this.split();
          lq.pushState(qq, this.pos), lq.storeNode(0, lq.pos, lq.pos, 4, !0), lq.shiftContext(Eq[Yq], this.pos), lq.reducePos = this.pos, lq.score -= 200, gq.push(lq)
        }
        return gq
      }
      forceReduce() {
        let {
          parser: qq
        } = this.p, Eq = qq.stateSlot(this.state, 5);
        if (0 == (65536 & Eq)) return !1;
        if (!qq.validAction(this.state, Eq)) {
          let gq = Eq >> 19,
            Yq = 65535 & Eq,
            lq = this.stack.length - 3 * gq;
          if (lq < 0 || qq.getGoto(this.stack[lq], Yq, !1) < 0) {
            let qq = this.findForcedReduction();
            if (null == qq) return !1;
            Eq = qq
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Eq), !0
      }
      findForcedReduction() {
        let {
          parser: qq
        } = this.p, Eq = [], gq = (Yq, lq) => {
          if (!Eq.includes(Yq)) return Eq.push(Yq), qq.allActions(Yq, (Eq => {
            if (393216 & Eq);
            else if (65536 & Eq) {
              let gq = (Eq >> 19) - lq;
              if (gq > 1) {
                let Yq = 65535 & Eq,
                  lq = this.stack.length - 3 * gq;
                if (lq >= 0 && qq.getGoto(this.stack[lq], Yq, !1) >= 0) return gq << 19 | 65536 | Yq
              }
            } else {
              let qq = gq(Eq, lq + 1);
              if (null != qq) return qq
            }
          }))
        };
        return gq(this.state, 0)
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
          parser: qq
        } = this.p;
        return 65535 == qq.data[qq.stateSlot(this.state, 1)] && !qq.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(qq) {
        if (this.state != qq.state || this.stack.length != qq.stack.length) return !1;
        for (let Eq = 0; Eq < this.stack.length; Eq += 3)
          if (this.stack[Eq] != qq.stack[Eq]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(qq) {
        return this.p.parser.dialect.flags[qq]
      }
      shiftContext(qq, Eq) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, qq, this, this.p.stream.reset(Eq)))
      }
      reduceContext(qq, Eq) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, qq, this, this.p.stream.reset(Eq)))
      }
      emitContext() {
        let qq = this.buffer.length - 1;
        (qq < 0 || -3 != this.buffer[qq]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let qq = this.buffer.length - 1;
        (qq < 0 || -4 != this.buffer[qq]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(qq) {
        if (qq != this.curContext.context) {
          let Eq = new Oq(this.curContext.tracker, qq);
          Eq.hash != this.curContext.hash && this.emitContext(), this.curContext = Eq
        }
      }
      setLookAhead(qq) {
        return !(qq <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = qq, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Oq {
      constructor(qq, Eq) {
        this.tracker = qq, this.context = Eq, this.hash = qq.strict ? qq.hash(Eq) : 0
      }
    }
    class mq {
      constructor(qq) {
        this.start = qq, this.state = qq.state, this.stack = qq.stack, this.base = this.stack.length
      }
      reduce(qq) {
        let Eq = 65535 & qq,
          gq = qq >> 19;
        0 == gq ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (gq - 1);
        let Yq = this.start.p.parser.getGoto(this.stack[this.base - 3], Eq, !0);
        this.state = Yq
      }
    }
    class xq {
      constructor(qq, Eq, gq) {
        this.stack = qq, this.pos = Eq, this.index = gq, this.buffer = qq.buffer, 0 == this.index && this.maybeNext()
      }
      static create(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq.bufferBase + qq.buffer.length;
        return new xq(qq, Eq, Eq - qq.bufferBase)
      }
      maybeNext() {
        let qq = this.stack.parent;
        null != qq && (this.index = this.stack.bufferBase - qq.bufferBase, this.stack = qq, this.buffer = qq.buffer)
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
        return new xq(this.stack, this.pos, this.index)
      }
    }

    function Aq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof qq) return qq;
      let gq = null;
      for (let Yq = 0, lq = 0; Yq < qq.length;) {
        let Oq = 0;
        for (;;) {
          let Eq = qq.charCodeAt(Yq++),
            gq = !1;
          if (126 == Eq) {
            Oq = 65535;
            break
          }
          Eq >= 92 && Eq--, Eq >= 34 && Eq--;
          let lq = Eq - 32;
          if (lq >= 46 && (lq -= 46, gq = !0), Oq += lq, gq) break;
          Oq *= 46
        }
        gq ? gq[lq++] = Oq : gq = new Eq(Oq)
      }
      return gq
    }
    class cq {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const uq = new cq;
    class Bq {
      constructor(qq, Eq) {
        this.input = qq, this.zV = Eq, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = uq, this.rangeIndex = 0, this.pos = this.chunkPos = Eq[0].from, this.range = Eq[0], this.end = Eq[Eq.length - 1].to, this.readNext()
      }
      resolveOffset(qq, Eq) {
        let gq = this.range,
          Yq = this.rangeIndex,
          lq = this.pos + qq;
        for (; lq < gq.from;) {
          if (!Yq) return null;
          let qq = this.zV[--Yq];
          lq -= gq.from - qq.to, gq = qq
        }
        for (; Eq < 0 ? lq > gq.to : lq >= gq.to;) {
          if (Yq == this.zV.length - 1) return null;
          let qq = this.zV[++Yq];
          lq += qq.from - gq.to, gq = qq
        }
        return lq
      }
      clipPos(qq) {
        if (qq >= this.range.from && qq < this.range.to) return qq;
        for (let Eq of this.zV)
          if (Eq.to > qq) return Math.max(qq, Eq.from);
        return this.end
      }
      peek(qq) {
        let Eq, gq, Yq = this.chunkOff + qq;
        if (Yq >= 0 && Yq < this.chunk.length) Eq = this.pos + qq, gq = this.chunk.charCodeAt(Yq);
        else {
          let Yq = this.resolveOffset(qq, 1);
          if (null == Yq) return -1;
          if (Eq = Yq, Eq >= this.chunk2Pos && Eq < this.chunk2Pos + this.chunk2.length) gq = this.chunk2.charCodeAt(Eq - this.chunk2Pos);
          else {
            let qq = this.rangeIndex,
              Yq = this.range;
            for (; Yq.to <= Eq;) Yq = this.zV[++qq];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Eq), Eq + this.chunk2.length > Yq.to && (this.chunk2 = this.chunk2.slice(0, Yq.to - Eq)), gq = this.chunk2.charCodeAt(0)
          }
        }
        return Eq >= this.token.lookAhead && (this.token.lookAhead = Eq + 1), gq
      }
      acceptToken(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = Eq ? this.resolveOffset(Eq, -1) : this.pos;
        if (null == gq || gq < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = qq, this.token.end = gq
      }
      acceptTokenTo(qq, Eq) {
        this.token.value = qq, this.token.end = Eq
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: qq,
            chunkPos: Eq
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = qq, this.chunk2Pos = Eq, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let qq = this.input.chunk(this.pos),
            Eq = this.pos + qq.length;
          this.chunk = Eq > this.range.to ? qq.slice(0, this.range.to - this.pos) : qq, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += qq; this.pos + qq >= this.range.to;) {
          if (this.rangeIndex == this.zV.length - 1) return this.setDone();
          qq -= this.range.to - this.pos, this.range = this.zV[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += qq, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.zV[this.rangeIndex = this.zV.length - 1], this.chunk = "", this.next = -1
      }
      reset(qq, Eq) {
        if (Eq ? (this.token = Eq, Eq.start = qq, Eq.lookAhead = qq + 1, Eq.value = Eq.extended = -1) : this.token = uq, this.pos != qq) {
          if (this.pos = qq, qq == this.end) return this.setDone(), this;
          for (; qq < this.range.from;) this.range = this.zV[--this.rangeIndex];
          for (; qq >= this.range.to;) this.range = this.zV[++this.rangeIndex];
          qq >= this.chunkPos && qq < this.chunkPos + this.chunk.length ? this.chunkOff = qq - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(qq, Eq) {
        if (qq >= this.chunkPos && Eq <= this.chunkPos + this.chunk.length) return this.chunk.slice(qq - this.chunkPos, Eq - this.chunkPos);
        if (qq >= this.chunk2Pos && Eq <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(qq - this.chunk2Pos, Eq - this.chunk2Pos);
        if (qq >= this.range.from && Eq <= this.range.to) return this.input.read(qq, Eq);
        let gq = "";
        for (let Yq of this.zV) {
          if (Yq.from >= Eq) break;
          Yq.to > qq && (gq += this.input.read(Math.max(Yq.from, qq), Math.min(Yq.to, Eq)))
        }
        return gq
      }
    }
    class Wq {
      constructor(qq, Eq) {
        this.data = qq, this.id = Eq
      }
      token(qq, Eq) {
        let {
          parser: gq
        } = Eq.p;
        Vq(this.data, qq, Eq, this.id, gq.data, gq.tokenPrecTable)
      }
    }
    Wq.prototype.contextual = Wq.prototype.fallback = Wq.prototype.extend = !1;
    class Nq {
      constructor(qq, Eq, gq) {
        this.precTable = Eq, this.elseToken = gq, this.data = "string" == typeof qq ? Aq(qq) : qq
      }
      token(qq, Eq) {
        let gq = qq.pos,
          Yq = 0;
        for (;;) {
          let gq = qq.next < 0,
            lq = qq.resolveOffset(1, 1);
          if (Vq(this.data, qq, Eq, 0, this.data, this.precTable), qq.token.value > -1) break;
          if (null == this.elseToken) return;
          if (gq || Yq++, null == lq) break;
          qq.reset(lq, qq.token)
        }
        Yq && (qq.reset(gq, qq.token), qq.acceptToken(this.elseToken, Yq))
      }
    }
    Nq.prototype.contextual = Wq.prototype.fallback = Wq.prototype.extend = !1;
    class aq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = qq, this.contextual = !!Eq.contextual, this.fallback = !!Eq.fallback, this.extend = !!Eq.extend
      }
    }

    function Vq(qq, Eq, gq, Yq, lq, Oq) {
      let mq = 0,
        xq = 1 << Yq,
        {
          dialect: Aq
        } = gq.p.parser;
      qq: for (; 0 != (xq & qq[mq]);) {
        let gq = qq[mq + 1];
        for (let Bq = mq + 3; Bq < gq; Bq += 2)
          if ((qq[Bq + 1] & xq) > 0) {
            let gq = qq[Bq];
            if (Aq.allows(gq) && (-1 == Eq.token.value || Eq.token.value == gq || jq(gq, Eq.token.value, lq, Oq))) {
              Eq.acceptToken(gq);
              break
            }
          } let Yq = Eq.next,
          cq = 0,
          uq = qq[mq + 2];
        if (!(Eq.next < 0 && uq > cq && 65535 == qq[gq + 3 * uq - 3])) {
          for (; cq < uq;) {
            let lq = cq + uq >> 1,
              Oq = gq + lq + (lq << 1),
              xq = qq[Oq],
              Aq = qq[Oq + 1] || 65536;
            if (Yq < xq) uq = lq;
            else {
              if (!(Yq >= Aq)) {
                mq = qq[Oq + 2], Eq.advance();
                continue qq
              }
              cq = lq + 1
            }
          }
          break
        }
        mq = qq[gq + 3 * uq - 1]
      }
    }

    function dq(qq, Eq, gq) {
      for (let Yq, lq = Eq; 65535 != (Yq = qq[lq]); lq++)
        if (Yq == gq) return lq - Eq;
      return -1
    }

    function jq(qq, Eq, gq, Yq) {
      let lq = dq(gq, Yq, Eq);
      return lq < 0 || dq(gq, Yq, qq) < lq
    }
    const Hq = "undefined" != typeof process && {
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
    let oq = null;

    function Pq(qq, Eq, gq) {
      let lq = qq.cursor(Yq.f.IncludeAnonymous);
      for (lq.moveTo(Eq);;)
        if (!(gq < 0 ? lq.childBefore(Eq) : lq.childAfter(Eq)))
          for (;;) {
            if ((gq < 0 ? lq.to < Eq : lq.from > Eq) && !lq.type.isError) return gq < 0 ? Math.max(0, Math.min(lq.to - 1, Eq - 25)) : Math.min(qq.length, Math.max(lq.from + 1, Eq + 25));
            if (gq < 0 ? lq.prevSibling() : lq.nextSibling()) break;
            if (!lq.parent()) return gq < 0 ? 0 : qq.length
          }
    }
    class Qq {
      constructor(qq, Eq) {
        this.fragments = qq, this.nodeSet = Eq, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let qq = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (qq) {
          for (this.safeFrom = qq.openStart ? Pq(qq.tree, qq.from + qq.offset, 1) - qq.offset : qq.from, this.safeTo = qq.openEnd ? Pq(qq.tree, qq.to + qq.offset, -1) - qq.offset : qq.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(qq.tree), this.start.push(-qq.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(qq) {
        if (qq < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= qq;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Eq = this.trees.length - 1;
          if (Eq < 0) return this.nextFragment(), null;
          let gq = this.trees[Eq],
            lq = this.index[Eq];
          if (lq == gq.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Oq = gq.children[lq],
            mq = this.start[Eq] + gq.positions[lq];
          if (mq > qq) return this.nextStart = mq, null;
          if (Oq instanceof Yq.B) {
            if (mq == qq) {
              if (mq < this.safeFrom) return null;
              let qq = mq + Oq.length;
              if (qq <= this.safeTo) {
                let Eq = Oq.prop(Yq.h.lookAhead);
                if (!Eq || qq + Eq < this.fragment.to) return Oq
              }
            }
            this.index[Eq]++, mq + Oq.length >= Math.max(this.safeFrom, qq) && (this.trees.push(Oq), this.start.push(mq), this.index.push(0))
          } else this.index[Eq]++, this.nextStart = mq + Oq.length
        }
      }
    }
    class yq {
      constructor(qq, Eq) {
        this.stream = Eq, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = qq.tokenizers.map((qq => new cq))
      }
      getActions(qq) {
        let Eq = 0,
          gq = null,
          {
            parser: Yq
          } = qq.p,
          {
            tokenizers: lq
          } = Yq,
          Oq = Yq.stateSlot(qq.state, 3),
          mq = qq.curContext ? qq.curContext.hash : 0,
          xq = 0;
        for (let Aq = 0; Aq < lq.length; Aq++) {
          if (0 == (1 << Aq & Oq)) continue;
          let Yq = lq[Aq],
            cq = this.tokens[Aq];
          if ((!gq || Yq.fallback) && ((Yq.contextual || cq.start != qq.pos || cq.mask != Oq || cq.context != mq) && (this.updateCachedToken(cq, Yq, qq), cq.mask = Oq, cq.context = mq), cq.lookAhead > cq.end + 25 && (xq = Math.max(cq.lookAhead, xq)), 0 != cq.value)) {
            let lq = Eq;
            if (cq.extended > -1 && (Eq = this.addActions(qq, cq.extended, cq.end, Eq)), Eq = this.addActions(qq, cq.value, cq.end, Eq), !Yq.extend && (gq = cq, Eq > lq)) break
          }
        }
        for (; this.actions.length > Eq;) this.actions.pop();
        return xq && qq.setLookAhead(xq), gq || qq.pos != this.stream.end || (gq = new cq, gq.value = qq.p.parser.eofTerm, gq.start = gq.end = qq.pos, Eq = this.addActions(qq, gq.value, gq.end, Eq)), this.mainToken = gq, this.actions
      }
      getMainToken(qq) {
        if (this.mainToken) return this.mainToken;
        let Eq = new cq,
          {
            pos: gq,
            p: Yq
          } = qq;
        return Eq.start = gq, Eq.end = Math.min(gq + 1, Yq.stream.end), Eq.value = gq == Yq.stream.end ? Yq.parser.eofTerm : 0, Eq
      }
      updateCachedToken(qq, Eq, gq) {
        let Yq = this.stream.clipPos(gq.pos);
        if (Eq.token(this.stream.reset(Yq, qq), gq), qq.value > -1) {
          let {
            parser: Eq
          } = gq.p;
          for (let Yq = 0; Yq < Eq.specialized.length; Yq++)
            if (Eq.specialized[Yq] == qq.value) {
              let lq = Eq.specializers[Yq](this.stream.read(qq.start, qq.end), gq);
              if (lq >= 0 && gq.p.parser.dialect.allows(lq >> 1)) {
                0 == (1 & lq) ? qq.value = lq >> 1 : qq.extended = lq >> 1;
                break
              }
            }
        } else qq.value = 0, qq.end = this.stream.clipPos(Yq + 1)
      }
      putAction(qq, Eq, gq, Yq) {
        for (let lq = 0; lq < Yq; lq += 3)
          if (this.actions[lq] == qq) return Yq;
        return this.actions[Yq++] = qq, this.actions[Yq++] = Eq, this.actions[Yq++] = gq, Yq
      }
      addActions(qq, Eq, gq, Yq) {
        let {
          state: lq
        } = qq, {
          parser: Oq
        } = qq.p, {
          data: mq
        } = Oq;
        for (let xq = 0; xq < 2; xq++)
          for (let qq = Oq.stateSlot(lq, xq ? 2 : 1);; qq += 3) {
            if (65535 == mq[qq]) {
              if (1 != mq[qq + 1]) {
                0 == Yq && 2 == mq[qq + 1] && (Yq = this.putAction(bq(mq, qq + 2), Eq, gq, Yq));
                break
              }
              qq = bq(mq, qq + 2)
            }
            mq[qq] == Eq && (Yq = this.putAction(bq(mq, qq + 1), Eq, gq, Yq))
          }
        return Yq
      }
    }
    class tq {
      constructor(qq, Eq, gq, Yq) {
        this.parser = qq, this.input = Eq, this.zV = Yq, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Bq(Eq, Yq), this.tokens = new yq(qq, this.stream), this.topTerm = qq.top[1];
        let {
          from: Oq
        } = Yq[0];
        this.stacks = [lq.start(this, qq.top[0], Oq)], this.fragments = gq.length && this.stream.end - Oq > 4 * qq.bufferLength ? new Qq(gq, qq.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let qq, Eq, gq = this.stacks,
          Yq = this.minStackPos,
          lq = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == gq.length) {
          let [qq] = gq;
          for (; qq.forceReduce() && qq.stack.length && qq.stack[qq.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Oq = 0; Oq < gq.length; Oq++) {
          let mq = gq[Oq];
          for (;;) {
            if (this.tokens.mainToken = null, mq.pos > Yq) lq.push(mq);
            else {
              if (this.advanceStack(mq, lq, gq)) continue;
              {
                qq || (qq = [], Eq = []), qq.push(mq);
                let gq = this.tokens.getMainToken(mq);
                Eq.push(gq.value, gq.end)
              }
            }
            break
          }
        }
        if (!lq.length) {
          let Eq = qq && function(qq) {
            let Eq = null;
            for (let gq of qq) {
              let qq = gq.p.stoppedAt;
              (gq.pos == gq.p.stream.end || null != qq && gq.pos > qq) && gq.p.parser.stateFlag(gq.state, 2) && (!Eq || Eq.score < gq.score) && (Eq = gq)
            }
            return Eq
          }(qq);
          if (Eq) return Hq && console.log("Finish with " + this.stackID(Eq)), this.stackToTree(Eq);
          if (this.parser.strict) throw Hq && qq && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Yq);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && qq) {
          let gq = null != this.stoppedAt && qq[0].pos > this.stoppedAt ? qq[0] : this.runRecovery(qq, Eq, lq);
          if (gq) return Hq && console.log("Force-finish " + this.stackID(gq)), this.stackToTree(gq.forceAll())
        }
        if (this.recovering) {
          let qq = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (lq.length > qq)
            for (lq.sort(((qq, Eq) => Eq.score - qq.score)); lq.length > qq;) lq.pop();
          lq.some((qq => qq.reducePos > Yq)) && this.recovering--
        } else if (lq.length > 1) {
          qq: for (let qq = 0; qq < lq.length - 1; qq++) {
            let Eq = lq[qq];
            for (let gq = qq + 1; gq < lq.length; gq++) {
              let Yq = lq[gq];
              if (Eq.sameState(Yq) || Eq.buffer.length > 500 && Yq.buffer.length > 500) {
                if (!((Eq.score - Yq.score || Eq.buffer.length - Yq.buffer.length) > 0)) {
                  lq.splice(qq--, 1);
                  continue qq
                }
                lq.splice(gq--, 1)
              }
            }
          }
          lq.length > 12 && (lq.sort(((qq, Eq) => Eq.score - qq.score)), lq.splice(12, lq.length - 12))
        }
        this.minStackPos = lq[0].pos;
        for (let Oq = 1; Oq < lq.length; Oq++) lq[Oq].pos < this.minStackPos && (this.minStackPos = lq[Oq].pos);
        return null
      }
      stopAt(qq) {
        if (null != this.stoppedAt && this.stoppedAt < qq) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = qq
      }
      advanceStack(qq, Eq, gq) {
        let lq = qq.pos,
          {
            parser: Oq
          } = this,
          mq = Hq ? this.stackID(qq) + " -> " : "";
        if (null != this.stoppedAt && lq > this.stoppedAt) return qq.forceReduce() ? qq : null;
        if (this.fragments) {
          let Eq = qq.curContext && qq.curContext.tracker.strict,
            gq = Eq ? qq.curContext.hash : 0;
          for (let xq = this.fragments.nodeAt(lq); xq;) {
            let lq = this.parser.nodeSet.types[xq.type.id] == xq.type ? Oq.getGoto(qq.state, xq.type.id) : -1;
            if (lq > -1 && xq.length && (!Eq || (xq.prop(Yq.h.contextHash) || 0) == gq)) return qq.useNode(xq, lq), Hq && console.log(mq + this.stackID(qq) + ` (via reuse of ${Oq.getName(xq.type.id)})`), !0;
            if (!(xq instanceof Yq.B) || 0 == xq.children.length || xq.positions[0] > 0) break;
            let Aq = xq.children[0];
            if (!(Aq instanceof Yq.B && 0 == xq.positions[0])) break;
            xq = Aq
          }
        }
        let xq = Oq.stateSlot(qq.state, 4);
        if (xq > 0) return qq.reduce(xq), Hq && console.log(mq + this.stackID(qq) + ` (via always-reduce ${Oq.getName(65535&xq)})`), !0;
        if (qq.stack.length >= 8400)
          for (; qq.stack.length > 6e3 && qq.forceReduce(););
        let Aq = this.tokens.getActions(qq);
        for (let Yq = 0; Yq < Aq.length;) {
          let xq = Aq[Yq++],
            cq = Aq[Yq++],
            uq = Aq[Yq++],
            Bq = Yq == Aq.length || !gq,
            Wq = Bq ? qq : qq.split(),
            Nq = this.tokens.mainToken;
          if (Wq.apply(xq, cq, Nq ? Nq.start : Wq.pos, uq), Hq && console.log(mq + this.stackID(Wq) + ` (via ${0==(65536&xq)?"shift":`reduce of ${Oq.getName(65535&xq)}`} for ${Oq.getName(cq)} @ ${lq}${Wq==qq?"":", split"})`), Bq) return !0;
          Wq.pos > lq ? Eq.push(Wq) : gq.push(Wq)
        }
        return !1
      }
      advanceFully(qq, Eq) {
        let gq = qq.pos;
        for (;;) {
          if (!this.advanceStack(qq, null, null)) return !1;
          if (qq.pos > gq) return rq(qq, Eq), !0
        }
      }
      runRecovery(qq, Eq, gq) {
        let Yq = null,
          lq = !1;
        for (let Oq = 0; Oq < qq.length; Oq++) {
          let mq = qq[Oq],
            xq = Eq[Oq << 1],
            Aq = Eq[1 + (Oq << 1)],
            cq = Hq ? this.stackID(mq) + " -> " : "";
          if (mq.deadEnd) {
            if (lq) continue;
            if (lq = !0, mq.restart(), Hq && console.log(cq + this.stackID(mq) + " (restarted)"), this.advanceFully(mq, gq)) continue
          }
          let uq = mq.split(),
            Bq = cq;
          for (let qq = 0; qq < 10 && uq.forceReduce(); qq++) {
            if (Hq && console.log(Bq + this.stackID(uq) + " (via force-reduce)"), this.advanceFully(uq, gq)) break;
            Hq && (Bq = this.stackID(uq) + " -> ")
          }
          for (let qq of mq.recoverByInsert(xq)) Hq && console.log(cq + this.stackID(qq) + " (via recover-insert)"), this.advanceFully(qq, gq);
          this.stream.end > mq.pos ? (Aq == mq.pos && (Aq++, xq = 0), mq.recoverByDelete(xq, Aq), Hq && console.log(cq + this.stackID(mq) + ` (via recover-delete ${this.parser.getName(xq)})`), rq(mq, gq)) : (!Yq || Yq.score < uq.score) && (Yq = uq)
        }
        return Yq
      }
      stackToTree(qq) {
        return qq.close(), Yq.B.build({
          buffer: xq.create(qq),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.zV[0].from,
          length: qq.pos - this.zV[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(qq) {
        let Eq = (oq || (oq = new WeakMap)).get(qq);
        return Eq || oq.set(qq, Eq = String.fromCodePoint(this.nextStackID++)), Eq + qq
      }
    }

    function rq(qq, Eq) {
      for (let gq = 0; gq < Eq.length; gq++) {
        let Yq = Eq[gq];
        if (Yq.pos == qq.pos && Yq.sameState(qq)) return void(Eq[gq].score < qq.score && (Eq[gq] = qq))
      }
      Eq.push(qq)
    }
    class vq {
      constructor(qq, Eq, gq) {
        this.source = qq, this.flags = Eq, this.disabled = gq
      }
      allows(qq) {
        return !this.disabled || 0 == this.disabled[qq]
      }
    }
    const hq = qq => qq;
    class nq extends Yq.u {
      constructor(qq) {
        if (super(), this.wrappers = [], 14 != qq.version) throw new RangeError(`Parser version (${qq.version}) doesn't match runtime version (14)`);
        let Eq = qq.nodeNames.split(" ");
        this.minRepeatTerm = Eq.length;
        for (let Yq = 0; Yq < qq.repeatNodeCount; Yq++) Eq.push("");
        let gq = Object.keys(qq.topRules).map((Eq => qq.topRules[Eq][1])),
          lq = [];
        for (let Yq = 0; Yq < Eq.length; Yq++) lq.push([]);

        function Oq(qq, Eq, gq) {
          lq[qq].push([Eq, Eq.deserialize(String(gq))])
        }
        if (qq.nodeProps)
          for (let xq of qq.nodeProps) {
            let qq = xq[0];
            "string" == typeof qq && (qq = Yq.h[qq]);
            for (let Eq = 1; Eq < xq.length;) {
              let gq = xq[Eq++];
              if (gq >= 0) Oq(gq, qq, xq[Eq++]);
              else {
                let Yq = xq[Eq + -gq];
                for (let lq = -gq; lq > 0; lq--) Oq(xq[Eq++], qq, Yq);
                Eq++
              }
            }
          }
        this.nodeSet = new Yq.k(Eq.map(((Eq, Oq) => Yq.m.define({
          name: Oq >= this.minRepeatTerm ? void 0 : Eq,
          id: Oq,
          props: lq[Oq],
          top: gq.indexOf(Oq) > -1,
          error: 0 == Oq,
          skipped: qq.skippedNodes && qq.skippedNodes.indexOf(Oq) > -1
        })))), qq.propSources && (this.nodeSet = this.nodeSet.extend(...qq.propSources)), this.strict = !1, this.bufferLength = Yq.c;
        let mq = Aq(qq.tokenData);
        this.context = qq.context, this.specializerSpecs = qq.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Yq = 0; Yq < this.specializerSpecs.length; Yq++) this.specialized[Yq] = this.specializerSpecs[Yq].term;
        this.specializers = this.specializerSpecs.map(iq), this.states = Aq(qq.states, Uint32Array), this.data = Aq(qq.stateData), this.goto = Aq(qq.goto), this.maxTerm = qq.maxTerm, this.tokenizers = qq.tokenizers.map((qq => "number" == typeof qq ? new Wq(mq, qq) : qq)), this.topRules = qq.topRules, this.dialects = qq.dialects || {}, this.dynamicPrecedences = qq.dynamicPrecedences || null, this.tokenPrecTable = qq.tokenPrec, this.termNames = qq.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(qq, Eq, gq) {
        let Yq = new tq(this, qq, Eq, gq);
        for (let lq of this.wrappers) Yq = lq(Yq, qq, Eq, gq);
        return Yq
      }
      getGoto(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = this.goto;
        if (Eq >= Yq[0]) return -1;
        for (let lq = Yq[Eq + 1];;) {
          let Eq = Yq[lq++],
            Oq = 1 & Eq,
            mq = Yq[lq++];
          if (Oq && gq) return mq;
          for (let gq = lq + (Eq >> 1); lq < gq; lq++)
            if (Yq[lq] == qq) return mq;
          if (Oq) return -1
        }
      }
      hasAction(qq, Eq) {
        let gq = this.data;
        for (let Yq = 0; Yq < 2; Yq++)
          for (let lq, Oq = this.stateSlot(qq, Yq ? 2 : 1);; Oq += 3) {
            if (65535 == (lq = gq[Oq])) {
              if (1 != gq[Oq + 1]) {
                if (2 == gq[Oq + 1]) return bq(gq, Oq + 2);
                break
              }
              lq = gq[Oq = bq(gq, Oq + 2)]
            }
            if (lq == Eq || 0 == lq) return bq(gq, Oq + 1)
          }
        return 0
      }
      stateSlot(qq, Eq) {
        return this.states[6 * qq + Eq]
      }
      stateFlag(qq, Eq) {
        return (this.stateSlot(qq, 0) & Eq) > 0
      }
      validAction(qq, Eq) {
        return !!this.allActions(qq, (qq => qq == Eq || null))
      }
      allActions(qq, Eq) {
        let gq = this.stateSlot(qq, 4),
          Yq = gq ? Eq(gq) : void 0;
        for (let lq = this.stateSlot(qq, 1); null == Yq; lq += 3) {
          if (65535 == this.data[lq]) {
            if (1 != this.data[lq + 1]) break;
            lq = bq(this.data, lq + 2)
          }
          Yq = Eq(bq(this.data, lq + 1))
        }
        return Yq
      }
      nextStates(qq) {
        let Eq = [];
        for (let gq = this.stateSlot(qq, 1);; gq += 3) {
          if (65535 == this.data[gq]) {
            if (1 != this.data[gq + 1]) break;
            gq = bq(this.data, gq + 2)
          }
          if (0 == (1 & this.data[gq + 2])) {
            let qq = this.data[gq + 1];
            Eq.some(((Eq, gq) => 1 & gq && Eq == qq)) || Eq.push(this.data[gq], qq)
          }
        }
        return Eq
      }
      configure(qq) {
        let Eq = Object.assign(Object.create(nq.prototype), this);
        if (qq.props && (Eq.nodeSet = this.nodeSet.extend(...qq.props)), qq.top) {
          let gq = this.topRules[qq.top];
          if (!gq) throw new RangeError(`Invalid top rule name ${qq.top}`);
          Eq.top = gq
        }
        return qq.tokenizers && (Eq.tokenizers = this.tokenizers.map((Eq => {
          let gq = qq.tokenizers.find((qq => qq.from == Eq));
          return gq ? gq.to : Eq
        }))), qq.specializers && (Eq.specializers = this.specializers.slice(), Eq.specializerSpecs = this.specializerSpecs.map(((gq, Yq) => {
          let lq = qq.specializers.find((qq => qq.from == gq.external));
          if (!lq) return gq;
          let Oq = Object.assign(Object.assign({}, gq), {
            external: lq.to
          });
          return Eq.specializers[Yq] = iq(Oq), Oq
        }))), qq.contextTracker && (Eq.context = qq.contextTracker), qq.dialect && (Eq.dialect = this.parseDialect(qq.dialect)), null != qq.strict && (Eq.strict = qq.strict), qq.wrap && (Eq.wrappers = Eq.wrappers.concat(qq.wrap)), null != qq.bufferLength && (Eq.bufferLength = qq.bufferLength), Eq
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(qq) {
        return this.termNames ? this.termNames[qq] : String(qq <= this.maxNode && this.nodeSet.types[qq].name || qq)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(qq) {
        let Eq = this.dynamicPrecedences;
        return null == Eq ? 0 : Eq[qq] || 0
      }
      parseDialect(qq) {
        let Eq = Object.keys(this.dialects),
          gq = Eq.map((() => !1));
        if (qq)
          for (let lq of qq.split(" ")) {
            let qq = Eq.indexOf(lq);
            qq >= 0 && (gq[qq] = !0)
          }
        let Yq = null;
        for (let lq = 0; lq < Eq.length; lq++)
          if (!gq[lq])
            for (let qq, gq = this.dialects[Eq[lq]]; 65535 != (qq = this.data[gq++]);)(Yq || (Yq = new Uint8Array(this.maxTerm + 1)))[qq] = 1;
        return new vq(qq, gq, Yq)
      }
      static deserialize(qq) {
        return new nq(qq)
      }
    }

    function bq(qq, Eq) {
      return qq[Eq] | qq[Eq + 1] << 16
    }

    function iq(qq) {
      if (qq.external) {
        let Eq = qq.extend ? 1 : 0;
        return (gq, Yq) => qq.external(gq, Yq) << 1 | Eq
      }
      return qq.get
    }
    var Zq = gq(41075);
    const fq = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Mq = new class {
        constructor(qq) {
          this.start = qq.start, this.shift = qq.shift || hq, this.reduce = qq.reduce || hq, this.reuse = qq.reuse || hq, this.hash = qq.hash || (() => 0), this.strict = !1 !== qq.strict
        }
      }({
        start: !1,
        shift: (qq, Eq) => 5 == Eq || 6 == Eq || 320 == Eq ? qq : 321 == Eq,
        strict: !1
      }),
      Tq = new aq(((qq, Eq) => {
        let {
          next: gq
        } = qq;
        (125 == gq || -1 == gq || Eq.context) && qq.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      zq = new aq(((qq, Eq) => {
        let gq, {
          next: Yq
        } = qq;
        fq.indexOf(Yq) > -1 || (47 != Yq || 47 != (gq = qq.peek(1)) && 42 != gq) && (125 == Yq || 59 == Yq || -1 == Yq || Eq.context || qq.acceptToken(316))
      }), {
        contextual: !0
      }),
      Sq = new aq(((qq, Eq) => {
        91 != qq.next || Eq.context || qq.acceptToken(317)
      }), {
        contextual: !0
      }),
      pq = new aq(((qq, Eq) => {
        let {
          next: gq
        } = qq;
        if (43 == gq || 45 == gq) {
          if (qq.advance(), gq == qq.next) {
            qq.advance();
            let gq = !Eq.context && Eq.canShift(1);
            qq.acceptToken(gq ? 1 : 2)
          }
        } else 63 == gq && 46 == qq.peek(1) && (qq.advance(), qq.advance(), (qq.next < 48 || qq.next > 57) && qq.acceptToken(3))
      }), {
        contextual: !0
      });

    function Gq(qq, Eq) {
      return qq >= 65 && qq <= 90 || qq >= 97 && qq <= 122 || 95 == qq || qq >= 192 || !Eq && qq >= 48 && qq <= 57
    }
    const Lq = new aq(((qq, Eq) => {
        if (60 != qq.next || !Eq.dialectEnabled(0)) return;
        if (qq.advance(), 47 == qq.next) return;
        let gq = 0;
        for (; fq.indexOf(qq.next) > -1;) qq.advance(), gq++;
        if (Gq(qq.next, !0)) {
          for (qq.advance(), gq++; Gq(qq.next, !1);) qq.advance(), gq++;
          for (; fq.indexOf(qq.next) > -1;) qq.advance(), gq++;
          if (44 == qq.next) return;
          for (let Eq = 0;; Eq++) {
            if (7 == Eq) {
              if (!Gq(qq.next, !0)) return;
              break
            }
            if (qq.next != "extends".charCodeAt(Eq)) break;
            qq.advance(), gq++
          }
        }
        qq.acceptToken(4, -gq)
      })),
      Jq = (0, Zq.e)({
        "get set async static": Zq.i.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Zq.i.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Zq.i.operatorKeyword,
        "let var const using function class extends": Zq.i.definitionKeyword,
        "import export from": Zq.i.moduleKeyword,
        "with debugger new": Zq.i.keyword,
        TemplateString: Zq.i.special(Zq.i.string),
        super: Zq.i.atom,
        BooleanLiteral: Zq.i.bool,
        this: Zq.i.self,
        null: Zq.i.null,
        Star: Zq.i.modifier,
        VariableName: Zq.i.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Zq.i.function(Zq.i.variableName),
        VariableDefinition: Zq.i.definition(Zq.i.variableName),
        Label: Zq.i.labelName,
        PropertyName: Zq.i.propertyName,
        PrivatePropertyName: Zq.i.special(Zq.i.propertyName),
        "CallExpression/MemberExpression/PropertyName": Zq.i.function(Zq.i.propertyName),
        "FunctionDeclaration/VariableDefinition": Zq.i.function(Zq.i.definition(Zq.i.variableName)),
        "ClassDeclaration/VariableDefinition": Zq.i.definition(Zq.i.className),
        "NewExpression/VariableName": Zq.i.className,
        PropertyDefinition: Zq.i.definition(Zq.i.propertyName),
        PrivatePropertyDefinition: Zq.i.definition(Zq.i.special(Zq.i.propertyName)),
        UpdateOp: Zq.i.updateOperator,
        "LineComment Hashbang": Zq.i.lineComment,
        BlockComment: Zq.i.blockComment,
        Number: Zq.i.number,
        String: Zq.i.string,
        Escape: Zq.i.escape,
        ArithOp: Zq.i.arithmeticOperator,
        LogicOp: Zq.i.logicOperator,
        BitOp: Zq.i.bitwiseOperator,
        CompareOp: Zq.i.compareOperator,
        RegExp: Zq.i.regexp,
        Equals: Zq.i.definitionOperator,
        Arrow: Zq.i.function(Zq.i.punctuation),
        ": Spread": Zq.i.punctuation,
        "( )": Zq.i.paren,
        "[ ]": Zq.i.squareBracket,
        "{ }": Zq.i.brace,
        "InterpolationStart InterpolationEnd": Zq.i.special(Zq.i.brace),
        ".": Zq.i.derefOperator,
        ", ;": Zq.i.separator,
        "@": Zq.i.meta,
        TypeName: Zq.i.typeName,
        TypeDefinition: Zq.i.definition(Zq.i.typeName),
        "type enum interface implements namespace module declare": Zq.i.definitionKeyword,
        "abstract global Privacy readonly override": Zq.i.modifier,
        "is keyof unique infer asserts": Zq.i.operatorKeyword,
        JSXAttributeValue: Zq.i.attributeValue,
        JSXText: Zq.i.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Zq.i.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Zq.i.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Zq.i.attributeName,
        "JSXBuiltin/JSXIdentifier": Zq.i.standard(Zq.i.tagName)
      }),
      kq = {
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
      Rq = {
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
      Uq = {
        __proto__: null,
        "<": 193
      },
      Fq = nq.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Mq,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Jq],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [zq, Sq, pq, Lq, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Tq, new Nq("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Nq("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: qq => kq[qq] || -1
        }, {
          term: 343,
          get: qq => Rq[qq] || -1
        }, {
          term: 95,
          get: qq => Uq[qq] || -1
        }],
        tokenPrec: 15201
      });
    var sq = gq(41070),
      Xq = gq(41044),
      wq = gq(41053),
      Kq = gq(41037);
    const Cq = [(0, Kq.q)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Kq.q)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Kq.q)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Kq.q)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Kq.q)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Kq.q)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Kq.q)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Kq.q)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Kq.q)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Kq.q)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Kq.q)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Iq = Cq.concat([(0, Kq.q)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Kq.q)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Kq.q)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      eq = new Yq.q,
      Dq = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function qE(qq) {
      return (Eq, gq) => {
        let Yq = Eq.node.getChild("VariableDefinition");
        return Yq && gq(Yq, qq), !0
      }
    }
    const EE = ["FunctionDeclaration"],
      gE = {
        FunctionDeclaration: qE("function"),
        ClassDeclaration: qE("class"),
        ClassExpression: () => !0,
        EnumDeclaration: qE("constant"),
        TypeAliasDeclaration: qE("type"),
        NamespaceDeclaration: qE("namespace"),
        VariableDefinition(qq, Eq) {
          qq.matchContext(EE) || Eq(qq, "variable")
        },
        TypeDefinition(qq, Eq) {
          Eq(qq, "type")
        },
        __proto__: null
      };

    function YE(qq, Eq) {
      let gq = eq.get(Eq);
      if (gq) return gq;
      let lq = [],
        Oq = !0;

      function mq(Eq, gq) {
        let Yq = qq.sliceString(Eq.from, Eq.to);
        lq.push({
          label: Yq,
          type: gq
        })
      }
      return Eq.cursor(Yq.f.IncludeAnonymous).iterate((Eq => {
        if (Oq) Oq = !1;
        else if (Eq.name) {
          let qq = gE[Eq.name];
          if (qq && qq(Eq, mq) || Dq.has(Eq.name)) return !1
        } else if (Eq.to - Eq.from > 8192) {
          for (let gq of YE(qq, Eq.node)) lq.push(gq);
          return !1
        }
      })), eq.set(Eq, lq), lq
    }
    const lE = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      OE = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function mE(qq) {
      let Eq = (0, sq.gb)(qq.state).resolveInner(qq.pos, -1);
      if (OE.indexOf(Eq.name) > -1) return null;
      let gq = "VariableName" == Eq.name || Eq.to - Eq.from < 20 && lE.test(qq.state.sliceDoc(Eq.from, Eq.to));
      if (!gq && !qq.explicit) return null;
      let Yq = [];
      for (let lq = Eq; lq; lq = lq.parent) Dq.has(lq.name) && (Yq = Yq.concat(YE(qq.state.doc, lq)));
      return {
        options: Yq,
        from: gq ? Eq.from : qq.pos,
        validFor: lE
      }
    }
    const xE = sq.g.define({
        name: "javascript",
        parser: Fq.configure({
          props: [sq.N.add({
            IfStatement: (0, sq.n)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, sq.n)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: sq.y,
            SwitchBody: qq => {
              let Eq = qq.textAfter,
                gq = /^\s*\}/.test(Eq),
                Yq = /^\s*(case|default)\b/.test(Eq);
              return qq.baseIndent + (gq ? 0 : Yq ? 1 : 2) * qq.unit
            },
            Block: (0, sq.w)({
              closing: "}"
            }),
            ArrowFunction: qq => qq.baseIndent + qq.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, sq.n)({
              except: /^\s*{/
            }),
            JSXElement(qq) {
              let Eq = /^\s*<\//.test(qq.textAfter);
              return qq.lineIndent(qq.node.from) + (Eq ? 0 : qq.unit)
            },
            JSXEscape(qq) {
              let Eq = /\s*\}/.test(qq.textAfter);
              return qq.lineIndent(qq.node.from) + (Eq ? 0 : qq.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": qq => qq.column(qq.node.from) + qq.unit
          }), sq.F.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": sq.B,
            BlockComment: qq => ({
              from: qq.from + 2,
              to: qq.to - 2
            }),
            JSXElement(qq) {
              let Eq = qq.firstChild;
              if (!Eq || "JSXSelfClosingTag" == Eq.name) return null;
              let gq = qq.lastChild;
              return {
                from: Eq.to,
                to: gq.type.isError ? qq.to : gq.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(qq) {
              var Eq;
              let gq = null === (Eq = qq.firstChild) || void 0 === Eq ? void 0 : Eq.nextSibling,
                Yq = qq.lastChild;
              return !gq || gq.type.isError ? null : {
                from: gq.to,
                to: Yq.type.isError ? qq.to : Yq.from
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
      AE = {
        test: qq => /^JSX/.test(qq.name),
        facet: (0, sq.s)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      cE = xE.configure({
        dialect: "ts"
      }, "typescript"),
      uE = xE.configure({
        dialect: "jsx",
        props: [sq.$.add((qq => qq.isTop ? [AE] : void 0))]
      }),
      BE = xE.configure({
        dialect: "jsx ts",
        props: [sq.$.add((qq => qq.isTop ? [AE] : void 0))]
      }, "typescript");
    let WE = qq => ({
      label: qq,
      type: "keyword"
    });
    const NE = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(WE),
      aE = NE.concat(["declare", "implements", "private", "protected", "public"].map(WE));

    function VE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Eq = qq.jsx ? qq.typescript ? BE : uE : qq.typescript ? cE : xE,
        gq = qq.typescript ? Iq.concat(aE) : Cq.concat(NE);
      return new sq.h(Eq, [xE.data.of({
        autocomplete: (0, Kq.m)(OE, (0, Kq.i)(gq))
      }), xE.data.of({
        autocomplete: mE
      }), qq.jsx ? HE : []])
    }

    function dE(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qq.length;
      for (let Yq = null === Eq || void 0 === Eq ? void 0 : Eq.firstChild; Yq; Yq = Yq.nextSibling)
        if ("JSXIdentifier" == Yq.name || "JSXBuiltin" == Yq.name || "JSXNamespacedName" == Yq.name || "JSXMemberExpression" == Yq.name) return qq.sliceString(Yq.from, Math.min(Yq.to, gq));
      return ""
    }
    const jE = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      HE = wq.g.inputHandler.of(((qq, Eq, gq, Yq, lq) => {
        if ((jE ? qq.composing : qq.compositionStarted) || qq.state.readOnly || Eq != gq || ">" != Yq && "/" != Yq || !xE.isActiveAt(qq.state, Eq, -1)) return !1;
        let Oq = lq(),
          {
            state: mq
          } = Oq,
          xq = mq.changeByRange((qq => {
            var Eq;
            let gq, {
                head: lq
              } = qq,
              Oq = (0, sq.gb)(mq).resolveInner(lq - 1, -1);
            if ("JSXStartTag" == Oq.name && (Oq = Oq.parent), mq.doc.sliceString(lq - 1, lq) != Yq || "JSXAttributeValue" == Oq.name && Oq.to > lq);
            else {
              if (">" == Yq && "JSXFragmentTag" == Oq.name) return {
                range: qq,
                changes: {
                  from: lq,
                  insert: "</>"
                }
              };
              if ("/" == Yq && "JSXStartCloseTag" == Oq.name) {
                let qq = Oq.parent,
                  Yq = qq.parent;
                if (Yq && qq.from == lq - 2 && ((gq = dE(mq.doc, Yq.firstChild, lq)) || "JSXFragmentTag" == (null === (Eq = Yq.firstChild) || void 0 === Eq ? void 0 : Eq.name))) {
                  let qq = `${gq}>`;
                  return {
                    range: Xq.q.cursor(lq + qq.length, -1),
                    changes: {
                      from: lq,
                      insert: qq
                    }
                  }
                }
              } else if (">" == Yq) {
                let Eq = function(qq) {
                  for (;;) {
                    if ("JSXOpenTag" == qq.name || "JSXSelfClosingTag" == qq.name || "JSXFragmentTag" == qq.name) return qq;
                    if ("JSXEscape" == qq.name || !qq.parent) return null;
                    qq = qq.parent
                  }
                }(Oq);
                if (Eq && "JSXOpenTag" == Eq.name && !/^\/?>|^<\//.test(mq.doc.sliceString(lq, lq + 2)) && (gq = dE(mq.doc, Eq, lq))) return {
                  range: qq,
                  changes: {
                    from: lq,
                    insert: `</${gq}>`
                  }
                }
              }
            }
            return {
              range: qq
            }
          }));
        return !xq.changes.empty && (qq.dispatch([Oq, mq.update(xq, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41070: (qq, Eq, gq) => {
    gq.d(Eq, {
      $: () => Bq,
      B: () => Cq,
      C: () => cE,
      F: () => Kq,
      G: () => jq,
      K: () => Zq,
      M: () => Mq,
      N: () => zq,
      Q: () => Xq,
      S: () => fq,
      V: () => iq,
      X: () => RE,
      c: () => PE,
      cb: () => rE,
      d: () => Tq,
      db: () => dq,
      g: () => aq,
      gb: () => Vq,
      h: () => nq,
      l: () => GE,
      n: () => Fq,
      q: () => nE,
      s: () => uq,
      w: () => kq,
      y: () => Uq,
      z: () => HE
    });
    var Yq, lq = gq(41073),
      Oq = gq(41044),
      mq = gq(41053),
      xq = gq(41075),
      Aq = gq(41061);
    const cq = new lq.h;

    function uq(qq) {
      return Oq.x.define({
        combine: qq ? Eq => Eq.concat(qq) : void 0
      })
    }
    const Bq = new lq.h;
    class Wq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = qq, this.name = Yq, Oq.u.prototype.hasOwnProperty("tree") || Object.defineProperty(Oq.u.prototype, "tree", {
          get() {
            return Vq(this)
          }
        }), this.parser = Eq, this.extension = [hq.of(this), Oq.u.languageData.of(((qq, Eq, gq) => {
          let Yq = Nq(qq, Eq, gq),
            lq = Yq.type.prop(cq);
          if (!lq) return [];
          let Oq = qq.facet(lq),
            mq = Yq.type.prop(Bq);
          if (mq) {
            let lq = Yq.resolve(Eq - Yq.from, gq);
            for (let Eq of mq)
              if (Eq.test(lq, qq)) {
                let gq = qq.facet(Eq.facet);
                return "replace" == Eq.type ? gq : gq.concat(Oq)
              }
          }
          return Oq
        }))].concat(gq)
      }
      isActiveAt(qq, Eq) {
        return Nq(qq, Eq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(cq) == this.data
      }
      findRegions(qq) {
        let Eq = qq.facet(hq);
        if ((null === Eq || void 0 === Eq ? void 0 : Eq.data) == this.data) return [{
          from: 0,
          to: qq.doc.length
        }];
        if (!Eq || !Eq.allowsNesting) return [];
        let gq = [],
          Yq = (qq, Eq) => {
            if (qq.prop(cq) == this.data) return void gq.push({
              from: Eq,
              to: Eq + qq.length
            });
            let Oq = qq.prop(lq.h.mounted);
            if (Oq) {
              if (Oq.tree.prop(cq) == this.data) {
                if (Oq.overlay)
                  for (let qq of Oq.overlay) gq.push({
                    from: qq.from + Eq,
                    to: qq.to + Eq
                  });
                else gq.push({
                  from: Eq,
                  to: Eq + qq.length
                });
                return
              }
              if (Oq.overlay) {
                let qq = gq.length;
                if (Yq(Oq.tree, Oq.overlay[0].from + Eq), gq.length > qq) return
              }
            }
            for (let gq = 0; gq < qq.children.length; gq++) {
              let Oq = qq.children[gq];
              Oq instanceof lq.B && Yq(Oq, qq.positions[gq] + Eq)
            }
          };
        return Yq(Vq(qq), 0), gq
      }
      get allowsNesting() {
        return !0
      }
    }

    function Nq(qq, Eq, gq) {
      let Yq = qq.facet(hq),
        Oq = Vq(qq).topNode;
      if (!Yq || Yq.allowsNesting)
        for (let mq = Oq; mq; mq = mq.enter(Eq, gq, lq.f.ExcludeBuffers | lq.f.EnterBracketed)) mq.type.isTop && (Oq = mq);
      return Oq
    }
    Wq.setState = Oq.J.define();
    class aq extends Wq {
      constructor(qq, Eq, gq) {
        super(qq, Eq, [], gq), this.parser = Eq
      }
      static define(qq) {
        let Eq = uq(qq.languageData);
        return new aq(Eq, qq.parser.configure({
          props: [cq.add((qq => qq.isTop ? Eq : void 0))]
        }), qq.name)
      }
      configure(qq, Eq) {
        return new aq(this.data, this.parser.configure(qq), Eq || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Vq(qq) {
      let Eq = qq.field(Wq.state, !1);
      return Eq ? Eq.tree : lq.B.empty
    }

    function dq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq.doc.length;
      var gq;
      return (null === (gq = qq.field(Wq.state, !1)) || void 0 === gq ? void 0 : gq.context.isDone(Eq)) || !1
    }

    function jq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq.viewport.to,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Yq = function(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Yq;
          let lq = null === (Yq = qq.field(Wq.state, !1)) || void 0 === Yq ? void 0 : Yq.context;
          if (!lq) return null;
          let Oq = lq.viewport;
          lq.updateViewport({
            from: 0,
            to: Eq
          });
          let mq = lq.isDone(Eq) || lq.work(gq, Eq) ? lq.tree : null;
          return lq.updateViewport(Oq), mq
        }(qq.state, Eq, gq);
      return Yq != Vq(qq.state) && qq.dispatch({}), !!Yq
    }
    class Hq {
      constructor(qq) {
        this.doc = qq, this.cursorPos = 0, this.string = "", this.cursor = qq.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(qq) {
        return this.string = this.cursor.next(qq - this.cursorPos).value, this.cursorPos = qq + this.string.length, this.cursorPos - this.string.length
      }
      chunk(qq) {
        return this.syncTo(qq), this.string
      }
      get lineChunks() {
        return !0
      }
      read(qq, Eq) {
        let gq = this.cursorPos - this.string.length;
        return qq < gq || Eq >= this.cursorPos ? this.doc.sliceString(qq, Eq) : this.string.slice(qq - gq, Eq - gq)
      }
    }
    let oq = null;
    class Pq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0,
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = qq, this.state = Eq, this.fragments = gq, this.tree = Yq, this.treeLen = lq, this.viewport = Oq, this.skipped = mq, this.scheduleOn = xq, this.parse = null, this.tempSkipped = []
      }
      static create(qq, Eq, gq) {
        return new Pq(qq, Eq, [], lq.B.empty, 0, gq, [], null)
      }
      startParse() {
        return this.parser.startParse(new Hq(this.state.doc), this.fragments)
      }
      work(qq, Eq) {
        return null != Eq && Eq >= this.state.doc.length && (Eq = void 0), this.tree != lq.B.empty && this.isDone(null !== Eq && void 0 !== Eq ? Eq : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var gq;
          if ("number" == typeof qq) {
            let Eq = Date.now() + qq;
            qq = () => Date.now() > Eq
          }
          for (this.parse || (this.parse = this.startParse()), null != Eq && (null == this.parse.stoppedAt || this.parse.stoppedAt > Eq) && Eq < this.state.doc.length && this.parse.stopAt(Eq);;) {
            let Yq = this.parse.advance();
            if (Yq) {
              if (this.fragments = this.withoutTempSkipped(lq.x.addTree(Yq, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (gq = this.parse.stoppedAt) && void 0 !== gq ? gq : this.state.doc.length, this.tree = Yq, this.parse = null, !(this.treeLen < (null !== Eq && void 0 !== Eq ? Eq : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (qq()) return !1
          }
        }))
      }
      takeTree() {
        let qq, Eq;
        this.parse && (qq = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > qq) && this.parse.stopAt(qq), this.withContext((() => {
          for (; !(Eq = this.parse.advance()););
        })), this.treeLen = qq, this.tree = Eq, this.fragments = this.withoutTempSkipped(lq.x.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(qq) {
        let Eq = oq;
        oq = this;
        try {
          return qq()
        } finally {
          oq = Eq
        }
      }
      withoutTempSkipped(qq) {
        for (let Eq; Eq = this.tempSkipped.pop();) qq = Qq(qq, Eq.from, Eq.to);
        return qq
      }
      changes(qq, Eq) {
        let {
          fragments: gq,
          tree: Yq,
          treeLen: Oq,
          viewport: mq,
          skipped: xq
        } = this;
        if (this.takeTree(), !qq.empty) {
          let Eq = [];
          if (qq.iterChangedRanges(((qq, gq, Yq, lq) => Eq.push({
              fromA: qq,
              toA: gq,
              fromB: Yq,
              toB: lq
            }))), gq = lq.x.applyChanges(gq, Eq), Yq = lq.B.empty, Oq = 0, mq = {
              from: qq.mapPos(mq.from, -1),
              to: qq.mapPos(mq.to, 1)
            }, this.skipped.length) {
            xq = [];
            for (let Eq of this.skipped) {
              let gq = qq.mapPos(Eq.from, 1),
                Yq = qq.mapPos(Eq.to, -1);
              gq < Yq && xq.push({
                from: gq,
                to: Yq
              })
            }
          }
        }
        return new Pq(this.parser, Eq, gq, Yq, Oq, mq, xq, this.scheduleOn)
      }
      updateViewport(qq) {
        if (this.viewport.from == qq.from && this.viewport.to == qq.to) return !1;
        this.viewport = qq;
        let Eq = this.skipped.length;
        for (let gq = 0; gq < this.skipped.length; gq++) {
          let {
            from: Eq,
            to: Yq
          } = this.skipped[gq];
          Eq < qq.to && Yq > qq.from && (this.fragments = Qq(this.fragments, Eq, Yq), this.skipped.splice(gq--, 1))
        }
        return !(this.skipped.length >= Eq) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(qq, Eq) {
        this.skipped.push({
          from: qq,
          to: Eq
        })
      }
      static getSkippingParser(qq) {
        return new class extends lq.u {
          createParse(Eq, gq, Yq) {
            let Oq = Yq[0].from,
              mq = Yq[Yq.length - 1].to;
            return {
              parsedPos: Oq,
              advance() {
                let Eq = oq;
                if (Eq) {
                  for (let qq of Yq) Eq.tempSkipped.push(qq);
                  qq && (Eq.scheduleOn = Eq.scheduleOn ? Promise.all([Eq.scheduleOn, qq]) : qq)
                }
                return this.parsedPos = mq, new lq.B(lq.m.none, [], [], mq - Oq)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(qq) {
        qq = Math.min(qq, this.state.doc.length);
        let Eq = this.fragments;
        return this.treeLen >= qq && Eq.length && 0 == Eq[0].from && Eq[0].to >= qq
      }
      static get() {
        return oq
      }
    }

    function Qq(qq, Eq, gq) {
      return lq.x.applyChanges(qq, [{
        fromA: Eq,
        toA: gq,
        fromB: Eq,
        toB: gq
      }])
    }
    class yq {
      constructor(qq) {
        this.context = qq, this.tree = qq.tree
      }
      apply(qq) {
        if (!qq.docChanged && this.tree == this.context.tree) return this;
        let Eq = this.context.changes(qq.changes, qq.state),
          gq = this.context.treeLen == qq.startState.doc.length ? void 0 : Math.max(qq.changes.mapPos(this.context.treeLen), Eq.viewport.to);
        return Eq.work(20, gq) || Eq.takeTree(), new yq(Eq)
      }
      static init(qq) {
        let Eq = Math.min(3e3, qq.doc.length),
          gq = Pq.create(qq.facet(hq).parser, qq, {
            from: 0,
            to: Eq
          });
        return gq.work(20, Eq) || gq.takeTree(), new yq(gq)
      }
    }
    Wq.state = Oq.L.define({
      create: yq.init,
      update(qq, Eq) {
        for (let gq of Eq.effects)
          if (gq.is(Wq.setState)) return gq.value;
        return Eq.startState.facet(hq) != Eq.state.facet(hq) ? yq.init(Eq.state) : qq.apply(Eq)
      }
    });
    let tq = qq => {
      let Eq = setTimeout((() => qq()), 500);
      return () => clearTimeout(Eq)
    };
    "undefined" != typeof requestIdleCallback && (tq = qq => {
      let Eq = -1,
        gq = setTimeout((() => {
          Eq = requestIdleCallback(qq, {
            timeout: 400
          })
        }), 100);
      return () => Eq < 0 ? clearTimeout(gq) : cancelIdleCallback(Eq)
    });
    const rq = "undefined" != typeof navigator && (null === (Yq = navigator.scheduling) || void 0 === Yq ? void 0 : Yq.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      vq = mq.l.fromClass(class {
        constructor(qq) {
          this.view = qq, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(qq) {
          let Eq = this.view.state.field(Wq.state).context;
          (Eq.updateViewport(qq.view.viewport) || this.view.viewport.to > Eq.treeLen) && this.scheduleWork(), (qq.docChanged || qq.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Eq)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: qq
          } = this.view, Eq = qq.field(Wq.state);
          Eq.tree == Eq.context.tree && Eq.context.isDone(qq.doc.length) || (this.working = tq(this.work))
        }
        work(qq) {
          this.working = null;
          let Eq = Date.now();
          if (this.chunkEnd < Eq && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Eq + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: gq,
            viewport: {
              to: Yq
            }
          } = this.view, lq = gq.field(Wq.state);
          if (lq.tree == lq.context.tree && lq.context.isDone(Yq + 1e5)) return;
          let Oq = Date.now() + Math.min(this.chunkBudget, 100, qq && !rq ? Math.max(25, qq.timeRemaining() - 5) : 1e9),
            mq = lq.context.treeLen < Yq && gq.doc.length > Yq + 1e3,
            xq = lq.context.work((() => rq && rq() || Date.now() > Oq), Yq + (mq ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Eq, (xq || this.chunkBudget <= 0) && (lq.context.takeTree(), this.view.dispatch({
            effects: Wq.setState.of(new yq(lq.context))
          })), this.chunkBudget > 0 && (!xq || mq) && this.scheduleWork(), this.checkAsyncSchedule(lq.context)
        }
        checkAsyncSchedule(qq) {
          qq.scheduleOn && (this.workScheduled++, qq.scheduleOn.then((() => this.scheduleWork())).catch((qq => (0, mq.R)(this.view.state, qq))).then((() => this.workScheduled--)), qq.scheduleOn = null)
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
      hq = Oq.x.define({
        combine: qq => qq.length ? qq[0] : null,
        enables: qq => [Wq.state, vq, mq.g.contentAttributes.compute([qq], (Eq => {
          let gq = Eq.facet(qq);
          return gq && gq.name ? {
            "data-language": gq.name
          } : {}
        }))]
      });
    class nq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = qq, this.support = Eq, this.extension = [qq, Eq]
      }
    }
    const bq = Oq.x.define(),
      iq = Oq.x.define({
        combine: qq => {
          if (!qq.length) return "  ";
          let Eq = qq[0];
          if (!Eq || /\S/.test(Eq) || Array.from(Eq).some((qq => qq != Eq[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(qq[0]));
          return Eq
        }
      });

    function Zq(qq) {
      let Eq = qq.facet(iq);
      return 9 == Eq.charCodeAt(0) ? qq.tabSize * Eq.length : Eq.length
    }

    function fq(qq, Eq) {
      let gq = "",
        Yq = qq.tabSize,
        lq = qq.facet(iq)[0];
      if ("\t" == lq) {
        for (; Eq >= Yq;) gq += "\t", Eq -= Yq;
        lq = " "
      }
      for (let Oq = 0; Oq < Eq; Oq++) gq += lq;
      return gq
    }

    function Mq(qq, Eq) {
      qq instanceof Oq.u && (qq = new Tq(qq));
      for (let Yq of qq.state.facet(bq)) {
        let gq = Yq(qq, Eq);
        if (void 0 !== gq) return gq
      }
      let gq = Vq(qq.state);
      return gq.length >= Eq ? function(qq, Eq, gq) {
        let Yq = Eq.resolveStack(gq),
          lq = Eq.resolveInner(gq, -1).resolve(gq, 0).enterUnfinishedNodesBefore(gq);
        if (lq != Yq.node) {
          let qq = [];
          for (let Eq = lq; Eq && !(Eq.from < Yq.node.from || Eq.to > Yq.node.to || Eq.from == Yq.node.from && Eq.type == Yq.node.type); Eq = Eq.parent) qq.push(Eq);
          for (let Eq = qq.length - 1; Eq >= 0; Eq--) Yq = {
            node: qq[Eq],
            next: Yq
          }
        }
        return Sq(Yq, qq, gq)
      }(qq, gq, Eq) : null
    }
    class Tq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = qq, this.options = Eq, this.unit = Zq(qq)
      }
      lineAt(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = this.state.doc.lineAt(qq),
          {
            simulateBreak: Yq,
            simulateDoubleBreak: lq
          } = this.options;
        return null != Yq && Yq >= gq.from && Yq <= gq.to ? lq && Yq == qq ? {
          text: "",
          from: qq
        } : (Eq < 0 ? Yq < qq : Yq <= qq) ? {
          text: gq.text.slice(Yq - gq.from),
          from: Yq
        } : {
          text: gq.text.slice(0, Yq - gq.from),
          from: gq.from
        } : gq
      }
      textAfterPos(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && qq == this.options.simulateBreak) return "";
        let {
          text: gq,
          from: Yq
        } = this.lineAt(qq, Eq);
        return gq.slice(qq - Yq, Math.min(gq.length, qq + 100 - Yq))
      }
      column(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: gq,
            from: Yq
          } = this.lineAt(qq, Eq),
          lq = this.countColumn(gq, qq - Yq),
          Oq = this.options.overrideIndentation ? this.options.overrideIndentation(Yq) : -1;
        return Oq > -1 && (lq += Oq - this.countColumn(gq, gq.search(/\S|$/))), lq
      }
      countColumn(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq.length;
        return (0, Oq.Z)(qq, this.state.tabSize, Eq)
      }
      lineIndent(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: gq,
            from: Yq
          } = this.lineAt(qq, Eq),
          lq = this.options.overrideIndentation;
        if (lq) {
          let qq = lq(Yq);
          if (qq > -1) return qq
        }
        return this.countColumn(gq, gq.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const zq = new lq.h;

    function Sq(qq, Eq, gq) {
      for (let Yq = qq; Yq; Yq = Yq.next) {
        let qq = pq(Yq.node);
        if (qq) return qq(Lq.create(Eq, gq, Yq))
      }
      return 0
    }

    function pq(qq) {
      let Eq = qq.type.prop(zq);
      if (Eq) return Eq;
      let gq, Yq = qq.firstChild;
      if (Yq && (gq = Yq.type.prop(lq.h.closedBy))) {
        let Eq = qq.lastChild,
          Yq = Eq && gq.indexOf(Eq.name) > -1;
        return qq => Rq(qq, !0, 1, void 0, Yq && ! function(qq) {
          return qq.pos == qq.options.simulateBreak && qq.options.simulateDoubleBreak
        }(qq) ? Eq.from : void 0)
      }
      return null == qq.parent ? Gq : null
    }

    function Gq() {
      return 0
    }
    class Lq extends Tq {
      constructor(qq, Eq, gq) {
        super(qq.state, qq.options), this.base = qq, this.pos = Eq, this.context = gq
      }
      get node() {
        return this.context.node
      }
      static create(qq, Eq, gq) {
        return new Lq(qq, Eq, gq)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(qq) {
        let Eq = this.state.doc.lineAt(qq.from);
        for (;;) {
          let gq = qq.resolve(Eq.from);
          for (; gq.parent && gq.parent.from == gq.from;) gq = gq.parent;
          if (Jq(gq, qq)) break;
          Eq = this.state.doc.lineAt(gq.from)
        }
        return this.lineIndent(Eq.from)
      }
      continue () {
        return Sq(this.context.next, this.base, this.pos)
      }
    }

    function Jq(qq, Eq) {
      for (let gq = Eq; gq; gq = gq.parent)
        if (qq == gq) return !0;
      return !1
    }

    function kq(qq) {
      let {
        closing: Eq,
        align: gq = !0,
        units: Yq = 1
      } = qq;
      return qq => Rq(qq, gq, Yq, Eq)
    }

    function Rq(qq, Eq, gq, Yq, lq) {
      let Oq = qq.textAfter,
        mq = Oq.match(/^\s*/)[0].length,
        xq = Yq && Oq.slice(mq, mq + Yq.length) == Yq || lq == qq.pos + mq,
        Aq = Eq ? function(qq) {
          let Eq = qq.node,
            gq = Eq.childAfter(Eq.from),
            Yq = Eq.lastChild;
          if (!gq) return null;
          let lq = qq.options.simulateBreak,
            Oq = qq.state.doc.lineAt(gq.from),
            mq = null == lq || lq <= Oq.from ? Oq.to : Math.min(Oq.to, lq);
          for (let xq = gq.to;;) {
            let qq = Eq.childAfter(xq);
            if (!qq || qq == Yq) return null;
            if (!qq.type.isSkipped) {
              if (qq.from >= mq) return null;
              let Eq = /^ */.exec(Oq.text.slice(gq.to - Oq.from))[0].length;
              return {
                from: gq.from,
                to: gq.to + Eq
              }
            }
            xq = qq.to
          }
        }(qq) : null;
      return Aq ? xq ? qq.column(Aq.from) : qq.column(Aq.to) : qq.baseIndent + (xq ? 0 : qq.unit * gq)
    }
    const Uq = qq => qq.baseIndent;

    function Fq() {
      let {
        except: qq,
        units: Eq = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return gq => {
        let Yq = qq && qq.test(gq.textAfter);
        return gq.baseIndent + (Yq ? 0 : Eq * gq.unit)
      }
    }
    const sq = 200;

    function Xq() {
      return Oq.u.transactionFilter.of((qq => {
        if (!qq.docChanged || !qq.isUserEvent("input.type") && !qq.isUserEvent("input.complete")) return qq;
        let Eq = qq.startState.languageDataAt("indentOnInput", qq.startState.selection.main.head);
        if (!Eq.length) return qq;
        let gq = qq.newDoc,
          {
            head: Yq
          } = qq.newSelection.main,
          lq = gq.lineAt(Yq);
        if (Yq > lq.from + sq) return qq;
        let Oq = gq.sliceString(lq.from, Yq);
        if (!Eq.some((qq => qq.test(Oq)))) return qq;
        let {
          state: mq
        } = qq, xq = -1, Aq = [];
        for (let {
            head: cq
          }
          of mq.selection.zV) {
          let qq = mq.doc.lineAt(cq);
          if (qq.from == xq) continue;
          xq = qq.from;
          let Eq = Mq(mq, qq.from);
          if (null == Eq) continue;
          let gq = /^\s*/.exec(qq.text)[0],
            Yq = fq(mq, Eq);
          gq != Yq && Aq.push({
            from: qq.from,
            to: qq.from + gq.length,
            insert: Yq
          })
        }
        return Aq.length ? [qq, {
          changes: Aq,
          sequential: !0
        }] : qq
      }))
    }
    const wq = Oq.x.define(),
      Kq = new lq.h;

    function Cq(qq) {
      let Eq = qq.firstChild,
        gq = qq.lastChild;
      return Eq && Eq.to < gq.from ? {
        from: Eq.to,
        to: gq.type.isError ? qq.to : gq.from
      } : null
    }

    function Iq(qq) {
      let Eq = qq.lastChild;
      return Eq && Eq.to == qq.to && Eq.type.isError
    }

    function eq(qq, Eq, gq) {
      for (let Yq of qq.facet(wq)) {
        let lq = Yq(qq, Eq, gq);
        if (lq) return lq
      }
      return function(qq, Eq, gq) {
        let Yq = Vq(qq);
        if (Yq.length < gq) return null;
        let lq = null;
        for (let Oq = Yq.resolveStack(gq, 1); Oq; Oq = Oq.next) {
          let mq = Oq.node;
          if (mq.to <= gq || mq.from > gq) continue;
          if (lq && mq.from < Eq) break;
          let xq = mq.type.prop(Kq);
          if (xq && (mq.to < Yq.length - 50 || Yq.length == qq.doc.length || !Iq(mq))) {
            let Yq = xq(mq, qq);
            Yq && Yq.from <= gq && Yq.from >= Eq && Yq.to > gq && (lq = Yq)
          }
        }
        return lq
      }(qq, Eq, gq)
    }

    function Dq(qq, Eq) {
      let gq = Eq.mapPos(qq.from, 1),
        Yq = Eq.mapPos(qq.to, -1);
      return gq >= Yq ? void 0 : {
        from: gq,
        to: Yq
      }
    }
    const qE = Oq.J.define({
        map: Dq
      }),
      EE = Oq.J.define({
        map: Dq
      });

    function gE(qq) {
      let Eq = [];
      for (let {
          head: gq
        }
        of qq.state.selection.zV) Eq.some((qq => qq.from <= gq && qq.to >= gq)) || Eq.push(qq.lineBlockAt(gq));
      return Eq
    }
    const YE = Oq.L.define({
      create: () => mq.c.none,
      update(qq, Eq) {
        Eq.isUserEvent("delete") && Eq.changes.iterChangedRanges(((Eq, gq) => qq = lE(qq, Eq, gq))), qq = qq.map(Eq.changes);
        for (let gq of Eq.effects)
          if (gq.is(qE) && !mE(qq, gq.value.from, gq.value.to)) {
            let {
              preparePlaceholder: Yq
            } = Eq.state.facet(BE), lq = Yq ? mq.c.replace({
              widget: new VE(Yq(Eq.state, gq.value))
            }) : aE;
            qq = qq.update({
              add: [lq.range(gq.value.from, gq.value.to)]
            })
          } else gq.is(EE) && (qq = qq.update({
            filter: (qq, Eq) => gq.value.from != qq || gq.value.to != Eq,
            filterFrom: gq.value.from,
            filterTo: gq.value.to
          }));
        return Eq.selection && (qq = lE(qq, Eq.selection.main.head)), qq
      },
      provide: qq => mq.g.YO.from(qq),
      toJSON(qq, Eq) {
        let gq = [];
        return qq.between(0, Eq.doc.length, ((qq, Eq) => {
          gq.push(qq, Eq)
        })), gq
      },
      fromJSON(qq) {
        if (!Array.isArray(qq) || qq.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Eq = [];
        for (let gq = 0; gq < qq.length;) {
          let Yq = qq[gq++],
            lq = qq[gq++];
          if ("number" != typeof Yq || "number" != typeof lq) throw new RangeError("Invalid JSON for fold state");
          Eq.push(aE.range(Yq, lq))
        }
        return mq.c.set(Eq, !0)
      }
    });

    function lE(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq,
        Yq = !1;
      return qq.between(Eq, gq, ((qq, lq) => {
        qq < gq && lq > Eq && (Yq = !0)
      })), Yq ? qq.update({
        filterFrom: Eq,
        filterTo: gq,
        filter: (qq, Yq) => qq >= gq || Yq <= Eq
      }) : qq
    }

    function OE(qq, Eq, gq) {
      var Yq;
      let lq = null;
      return null === (Yq = qq.field(YE, !1)) || void 0 === Yq || Yq.between(Eq, gq, ((qq, Eq) => {
        (!lq || lq.from > qq) && (lq = {
          from: qq,
          to: Eq
        })
      })), lq
    }

    function mE(qq, Eq, gq) {
      let Yq = !1;
      return qq.between(Eq, Eq, ((qq, lq) => {
        qq == Eq && lq == gq && (Yq = !0)
      })), Yq
    }

    function xE(qq, Eq) {
      return qq.field(YE, !1) ? Eq : Eq.concat(Oq.J.appendConfig.of(WE()))
    }

    function AE(qq, Eq) {
      let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Yq = qq.state.doc.lineAt(Eq.from).number,
        lq = qq.state.doc.lineAt(Eq.to).number;
      return mq.g.announce.of(`${qq.state.phrase(gq?"Folded lines":"Unfolded lines")} ${Yq} ${qq.state.phrase("to")} ${lq}.`)
    }
    const cE = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: qq => {
          for (let Eq of gE(qq)) {
            let gq = eq(qq.state, Eq.from, Eq.to);
            if (gq) return qq.dispatch({
              effects: xE(qq.state, [qE.of(gq), AE(qq, gq)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: qq => {
          if (!qq.state.field(YE, !1)) return !1;
          let Eq = [];
          for (let gq of gE(qq)) {
            let Yq = OE(qq.state, gq.from, gq.to);
            Yq && Eq.push(EE.of(Yq), AE(qq, Yq, !1))
          }
          return Eq.length && qq.dispatch({
            effects: Eq
          }), Eq.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: qq => {
          let {
            state: Eq
          } = qq, gq = [];
          for (let Yq = 0; Yq < Eq.doc.length;) {
            let lq = qq.lineBlockAt(Yq),
              Oq = eq(Eq, lq.from, lq.to);
            Oq && gq.push(qE.of(Oq)), Yq = (Oq ? qq.lineBlockAt(Oq.to) : lq).to + 1
          }
          return gq.length && qq.dispatch({
            effects: xE(qq.state, gq)
          }), !!gq.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: qq => {
          let Eq = qq.state.field(YE, !1);
          if (!Eq || !Eq.size) return !1;
          let gq = [];
          return Eq.between(0, qq.state.doc.length, ((qq, Eq) => {
            gq.push(EE.of({
              from: qq,
              to: Eq
            }))
          })), qq.dispatch({
            effects: gq
          }), !0
        }
      }],
      uE = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      BE = Oq.x.define({
        combine: qq => (0, Oq.Y)(qq, uE)
      });

    function WE(qq) {
      let Eq = [YE, oE];
      return qq && Eq.push(BE.of(qq)), Eq
    }

    function NE(qq, Eq) {
      let {
        state: gq
      } = qq, Yq = gq.facet(BE), lq = Eq => {
        let gq = qq.lineBlockAt(qq.posAtDOM(Eq.target)),
          Yq = OE(qq.state, gq.from, gq.to);
        Yq && qq.dispatch({
          effects: EE.of(Yq)
        }), Eq.preventDefault()
      };
      if (Yq.placeholderDOM) return Yq.placeholderDOM(qq, lq, Eq);
      let Oq = document.createElement("span");
      return Oq.textContent = Yq.placeholderText, Oq.setAttribute("aria-label", gq.phrase("folded code")), Oq.title = gq.phrase("unfold"), Oq.className = "cm-foldPlaceholder", Oq.onclick = lq, Oq
    }
    const aE = mq.c.replace({
      widget: new class extends mq.m {
        toDOM(qq) {
          return NE(qq, null)
        }
      }
    });
    class VE extends mq.m {
      constructor(qq) {
        super(), this.value = qq
      }
      eq(qq) {
        return this.value == qq.value
      }
      toDOM(qq) {
        return NE(qq, this.value)
      }
    }
    const dE = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class jE extends mq.j {
      constructor(qq, Eq) {
        super(), this.config = qq, this.open = Eq
      }
      eq(qq) {
        return this.config == qq.config && this.open == qq.open
      }
      toDOM(qq) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Eq = document.createElement("span");
        return Eq.textContent = this.open ? this.config.openText : this.config.closedText, Eq.title = qq.state.phrase(this.open ? "Fold line" : "Unfold line"), Eq
      }
    }

    function HE() {
      let qq = {
          ...dE,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Eq = new jE(qq, !0),
        gq = new jE(qq, !1),
        Yq = mq.l.fromClass(class {
          constructor(qq) {
            this.from = qq.viewport.from, this.markers = this.buildMarkers(qq)
          }
          update(Eq) {
            (Eq.docChanged || Eq.viewportChanged || Eq.startState.facet(hq) != Eq.state.facet(hq) || Eq.startState.field(YE, !1) != Eq.state.field(YE, !1) || Vq(Eq.startState) != Vq(Eq.state) || qq.foldingChanged(Eq)) && (this.markers = this.buildMarkers(Eq.view))
          }
          buildMarkers(qq) {
            let Yq = new Oq.E;
            for (let lq of qq.viewportLineBlocks) {
              let Oq = OE(qq.state, lq.from, lq.to) ? gq : eq(qq.state, lq.from, lq.to) ? Eq : null;
              Oq && Yq.add(lq.from, lq.from, Oq)
            }
            return Yq.finish()
          }
        }),
        {
          domEventHandlers: lq
        } = qq;
      return [Yq, (0, mq.B)({
        class: "cm-foldGutter",
        markers(qq) {
          var Eq;
          return (null === (Eq = qq.plugin(Yq)) || void 0 === Eq ? void 0 : Eq.markers) || Oq.G.empty
        },
        initialSpacer: () => new jE(qq, !1),
        domEventHandlers: {
          ...lq,
          click: (qq, Eq, gq) => {
            if (lq.click && lq.click(qq, Eq, gq)) return !0;
            let Yq = OE(qq.state, Eq.from, Eq.to);
            if (Yq) return qq.dispatch({
              effects: EE.of(Yq)
            }), !0;
            let Oq = eq(qq.state, Eq.from, Eq.to);
            return !!Oq && (qq.dispatch({
              effects: qE.of(Oq)
            }), !0)
          }
        }
      }), WE()]
    }
    const oE = mq.g.baseTheme({
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
    class PE {
      constructor(qq, Eq) {
        let gq;

        function Yq(qq) {
          let Eq = Aq.d.newName();
          return (gq || (gq = Object.create(null)))["." + Eq] = qq, Eq
        }
        this.specs = qq;
        const lq = "string" == typeof Eq.all ? Eq.all : Eq.all ? Yq(Eq.all) : void 0,
          Oq = Eq.scope;
        this.scope = Oq instanceof Wq ? qq => qq.prop(cq) == Oq.data : Oq ? qq => qq == Oq : void 0, this.style = (0, xq.g)(qq.map((qq => ({
          tag: qq.tag,
          class: qq.class || Yq(Object.assign({}, qq, {
            tag: null
          }))
        }))), {
          all: lq
        }).style, this.module = gq ? new Aq.d(gq) : null, this.themeType = Eq.themeType
      }
      static define(qq, Eq) {
        return new PE(qq, Eq || {})
      }
    }
    const QE = Oq.x.define(),
      yE = Oq.x.define({
        combine: qq => qq.length ? [qq[0]] : null
      });

    function tE(qq) {
      let Eq = qq.facet(QE);
      return Eq.length ? Eq : qq.facet(yE)
    }

    function rE(qq, Eq) {
      let gq, Yq = [hE];
      return qq instanceof PE && (qq.module && Yq.push(mq.g.styleModule.of(qq.module)), gq = qq.themeType), (null === Eq || void 0 === Eq ? void 0 : Eq.fallback) ? Yq.push(yE.of(qq)) : gq ? Yq.push(QE.computeN([mq.g.darkTheme], (Eq => Eq.facet(mq.g.darkTheme) == ("dark" == gq) ? [qq] : []))) : Yq.push(QE.of(qq)), Yq
    }
    class vE {
      constructor(qq) {
        this.markCache = Object.create(null), this.tree = Vq(qq.state), this.YO = this.buildDeco(qq, tE(qq.state)), this.decoratedTo = qq.viewport.to
      }
      update(qq) {
        let Eq = Vq(qq.state),
          gq = tE(qq.state),
          Yq = gq != tE(qq.startState),
          {
            viewport: lq
          } = qq.view,
          Oq = qq.changes.mapPos(this.decoratedTo, 1);
        Eq.length < lq.to && !Yq && Eq.type == this.tree.type && Oq >= lq.to ? (this.YO = this.YO.map(qq.changes), this.decoratedTo = Oq) : (Eq != this.tree || qq.viewportChanged || Yq) && (this.tree = Eq, this.YO = this.buildDeco(qq.view, gq), this.decoratedTo = lq.to)
      }
      buildDeco(qq, Eq) {
        if (!Eq || !this.tree.length) return mq.c.none;
        let gq = new Oq.E;
        for (let {
            from: Yq,
            to: lq
          }
          of qq.xqq)(0, xq.d)(this.tree, Eq, ((qq, Eq, Yq) => {
          gq.add(qq, Eq, this.markCache[Yq] || (this.markCache[Yq] = mq.c.mark({
            class: Yq
          })))
        }), Yq, lq);
        return gq.finish()
      }
    }
    const hE = Oq.C.high(mq.l.fromClass(vE, {
        YO: qq => qq.YO
      })),
      nE = PE.define([{
        tag: xq.i.meta,
        color: "#404740"
      }, {
        tag: xq.i.link,
        textDecoration: "underline"
      }, {
        tag: xq.i.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: xq.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: xq.i.strong,
        fontWeight: "bold"
      }, {
        tag: xq.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: xq.i.keyword,
        color: "#708"
      }, {
        tag: [xq.i.atom, xq.i.bool, xq.i.url, xq.i.contentSeparator, xq.i.labelName],
        color: "#219"
      }, {
        tag: [xq.i.literal, xq.i.inserted],
        color: "#164"
      }, {
        tag: [xq.i.string, xq.i.deleted],
        color: "#a11"
      }, {
        tag: [xq.i.regexp, xq.i.escape, xq.i.special(xq.i.string)],
        color: "#e40"
      }, {
        tag: xq.i.definition(xq.i.variableName),
        color: "#00f"
      }, {
        tag: xq.i.local(xq.i.variableName),
        color: "#30a"
      }, {
        tag: [xq.i.typeName, xq.i.namespace],
        color: "#085"
      }, {
        tag: xq.i.className,
        color: "#167"
      }, {
        tag: [xq.i.special(xq.i.variableName), xq.i.macroName],
        color: "#256"
      }, {
        tag: xq.i.definition(xq.i.propertyName),
        color: "#00c"
      }, {
        tag: xq.i.comment,
        color: "#940"
      }, {
        tag: xq.i.invalid,
        color: "#f00"
      }]),
      bE = mq.g.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      iE = 1e4,
      ZE = "()[]{}",
      fE = Oq.x.define({
        combine: qq => (0, Oq.Y)(qq, {
          afterCursor: !0,
          brackets: ZE,
          maxScanDistance: iE,
          renderMatch: zE
        })
      }),
      ME = mq.c.mark({
        class: "cm-matchingBracket"
      }),
      TE = mq.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function zE(qq) {
      let Eq = [],
        gq = qq.matched ? ME : TE;
      return Eq.push(gq.range(qq.start.from, qq.start.to)), qq.end && Eq.push(gq.range(qq.end.from, qq.end.to)), Eq
    }

    function SE(qq) {
      let Eq = [],
        gq = qq.facet(fE);
      for (let Yq of qq.selection.zV) {
        if (!Yq.empty) continue;
        let lq = RE(qq, Yq.head, -1, gq) || Yq.head > 0 && RE(qq, Yq.head - 1, 1, gq) || gq.afterCursor && (RE(qq, Yq.head, 1, gq) || Yq.head < qq.doc.length && RE(qq, Yq.head + 1, -1, gq));
        lq && (Eq = Eq.concat(gq.renderMatch(lq, qq)))
      }
      return mq.c.set(Eq, !0)
    }
    const pE = [mq.l.fromClass(class {
      constructor(qq) {
        this.paused = !1, this.YO = SE(qq.state)
      }
      update(qq) {
        (qq.docChanged || qq.selectionSet || this.paused) && (qq.view.composing ? (this.YO = this.YO.map(qq.changes), this.paused = !0) : (this.YO = SE(qq.state), this.paused = !1))
      }
    }, {
      YO: qq => qq.YO
    }), bE];

    function GE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fE.of(qq), pE]
    }
    const LE = new lq.h;

    function JE(qq, Eq, gq) {
      let Yq = qq.prop(Eq < 0 ? lq.h.openedBy : lq.h.closedBy);
      if (Yq) return Yq;
      if (1 == qq.name.length) {
        let Yq = gq.indexOf(qq.name);
        if (Yq > -1 && Yq % 2 == (Eq < 0 ? 1 : 0)) return [gq[Yq + Eq]]
      }
      return null
    }

    function kE(qq) {
      let Eq = qq.type.prop(LE);
      return Eq ? Eq(qq.node) : qq
    }

    function RE(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        lq = Yq.maxScanDistance || iE,
        Oq = Yq.brackets || ZE,
        mq = Vq(qq),
        xq = mq.resolveInner(Eq, gq);
      for (let Aq = xq; Aq; Aq = Aq.parent) {
        let Yq = JE(Aq.type, gq, Oq);
        if (Yq && Aq.from < Aq.to) {
          let lq = kE(Aq);
          if (lq && (gq > 0 ? Eq >= lq.from && Eq < lq.to : Eq > lq.from && Eq <= lq.to)) return UE(qq, Eq, gq, Aq, lq, Yq, Oq)
        }
      }
      return function(qq, Eq, gq, Yq, lq, Oq, mq) {
        if (gq < 0 ? !Eq : Eq == qq.doc.length) return null;
        let xq = gq < 0 ? qq.sliceDoc(Eq - 1, Eq) : qq.sliceDoc(Eq, Eq + 1),
          Aq = mq.indexOf(xq);
        if (Aq < 0 || Aq % 2 == 0 != gq > 0) return null;
        let cq = {
            from: gq < 0 ? Eq - 1 : Eq,
            to: gq > 0 ? Eq + 1 : Eq
          },
          uq = qq.doc.iterRange(Eq, gq > 0 ? qq.doc.length : 0),
          Bq = 0;
        for (let Wq = 0; !uq.next().done && Wq <= Oq;) {
          let qq = uq.value;
          gq < 0 && (Wq += qq.length);
          let Oq = Eq + Wq * gq;
          for (let Eq = gq > 0 ? 0 : qq.length - 1, xq = gq > 0 ? qq.length : -1; Eq != xq; Eq += gq) {
            let xq = mq.indexOf(qq[Eq]);
            if (!(xq < 0 || Yq.resolveInner(Oq + Eq, 1).type != lq))
              if (xq % 2 == 0 == gq > 0) Bq++;
              else {
                if (1 == Bq) return {
                  start: cq,
                  end: {
                    from: Oq + Eq,
                    to: Oq + Eq + 1
                  },
                  matched: xq >> 1 == Aq >> 1
                };
                Bq--
              }
          }
          gq > 0 && (Wq += qq.length)
        }
        return uq.done ? {
          start: cq,
          matched: !1
        } : null
      }(qq, Eq, gq, mq, xq.type, lq, Oq)
    }

    function UE(qq, Eq, gq, Yq, lq, Oq, mq) {
      let xq = Yq.parent,
        Aq = {
          from: lq.from,
          to: lq.to
        },
        cq = 0,
        uq = null === xq || void 0 === xq ? void 0 : xq.cursor();
      if (uq && (gq < 0 ? uq.childBefore(Yq.from) : uq.childAfter(Yq.to)))
        do {
          if (gq < 0 ? uq.to <= Yq.from : uq.from >= Yq.to) {
            if (0 == cq && Oq.indexOf(uq.type.name) > -1 && uq.from < uq.to) {
              let qq = kE(uq);
              return {
                start: Aq,
                end: qq ? {
                  from: qq.from,
                  to: qq.to
                } : void 0,
                matched: !0
              }
            }
            if (JE(uq.type, gq, mq)) cq++;
            else if (JE(uq.type, -gq, mq)) {
              if (0 == cq) {
                let qq = kE(uq);
                return {
                  start: Aq,
                  end: qq && qq.from < qq.to ? {
                    from: qq.from,
                    to: qq.to
                  } : void 0,
                  matched: !1
                }
              }
              cq--
            }
          }
        } while (gq < 0 ? uq.prevSibling() : uq.nextSibling());
      return {
        start: Aq,
        matched: !1
      }
    }
    const FE = Object.create(null),
      sE = [lq.m.none],
      XE = [],
      wE = Object.create(null),
      KE = Object.create(null);
    for (let [eE, DE] of [
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
      ]) KE[eE] = IE(FE, DE);

    function CE(qq, Eq) {
      XE.indexOf(qq) > -1 || (XE.push(qq), console.warn(Eq))
    }

    function IE(qq, Eq) {
      let gq = [];
      for (let lq of Eq.split(" ")) {
        let Eq = [];
        for (let gq of lq.split(".")) {
          let Yq = qq[gq] || xq.i[gq];
          Yq ? "function" == typeof Yq ? Eq.length ? Eq = Eq.map(Yq) : CE(gq, `Modifier ${gq} used at start of tag`) : Eq.length ? CE(gq, `Tag ${gq} used as modifier`) : Eq = Array.isArray(Yq) ? Yq : [Yq] : CE(gq, `Unknown highlighting tag ${gq}`)
        }
        for (let qq of Eq) gq.push(qq)
      }
      if (!gq.length) return 0;
      let Yq = Eq.replace(/ /g, "_"),
        Oq = Yq + " " + gq.map((qq => qq.id)),
        mq = wE[Oq];
      if (mq) return mq.id;
      let Aq = wE[Oq] = lq.m.define({
        id: sE.length,
        name: Yq,
        props: [(0, xq.e)({
          [Yq]: gq
        })]
      });
      return sE.push(Aq), Aq.id
    }
    mq.e.RTL, mq.e.LTR
  },
  41106: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => oq,
      e: () => tq
    });
    var Yq = gq(41053),
      lq = gq(41044),
      Oq = gq(41068);
    class mq {
      constructor(qq, Eq, gq) {
        this.from = qq, this.to = Eq, this.diagnostic = gq
      }
    }
    class xq {
      constructor(qq, Eq, gq) {
        this.diagnostics = qq, this.panel = Eq, this.selected = gq
      }
      static init(qq, Eq, gq) {
        let Oq = gq.facet(Qq).markerFilter;
        Oq && (qq = Oq(qq, gq));
        let mq = qq.slice().sort(((qq, Eq) => qq.from - Eq.from || qq.to - Eq.to)),
          cq = new lq.E,
          uq = [],
          Bq = 0,
          Wq = gq.doc.iter(),
          Nq = 0,
          aq = gq.doc.length;
        for (let lq = 0;;) {
          let qq, Eq, gq = lq == mq.length ? null : mq[lq];
          if (!gq && !uq.length) break;
          if (uq.length) qq = Bq, Eq = uq.reduce(((qq, Eq) => Math.min(qq, Eq.to)), gq && gq.from > qq ? gq.from : 1e8);
          else {
            if (qq = gq.from, qq > aq) break;
            Eq = gq.to, uq.push(gq), lq++
          }
          for (; lq < mq.length;) {
            let gq = mq[lq];
            if (gq.from != qq || !(gq.to > gq.from || gq.to == qq)) {
              Eq = Math.min(gq.from, Eq);
              break
            }
            uq.push(gq), lq++, Eq = Math.min(gq.to, Eq)
          }
          Eq = Math.min(Eq, aq);
          let Oq = !1;
          if (uq.some((gq => gq.from == qq && (gq.to == Eq || Eq == aq))) && (Oq = qq == Eq, !Oq && Eq - qq < 10)) {
            let gq = qq - (Nq + Wq.value.length);
            gq > 0 && (Wq.next(gq), Nq = qq);
            for (let Yq = qq;;) {
              if (Yq >= Eq) {
                Oq = !0;
                break
              }
              if (!Wq.lineBreak && Nq + Wq.value.length > Yq) break;
              Yq = Nq + Wq.value.length, Nq += Wq.value.length, Wq.next()
            }
          }
          let xq = Tq(uq);
          if (Oq) cq.add(qq, qq, Yq.c.widget({
            widget: new hq(xq),
            diagnostics: uq.slice()
          }));
          else {
            let gq = uq.reduce(((qq, Eq) => Eq.markClass ? qq + " " + Eq.markClass : qq), "");
            cq.add(qq, Eq, Yq.c.mark({
              class: "cm-lintRange cm-lintRange-" + xq + gq,
              diagnostics: uq.slice(),
              inclusiveEnd: uq.some((qq => qq.to > Eq))
            }))
          }
          if (Bq = Eq, Bq == aq) break;
          for (let Yq = 0; Yq < uq.length; Yq++) uq[Yq].to <= Bq && uq.splice(Yq--, 1)
        }
        let Vq = cq.finish();
        return new xq(Vq, Eq, Aq(Vq))
      }
    }

    function Aq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Yq = null;
      return qq.between(gq, 1e9, ((qq, gq, lq) => {
        let {
          spec: Oq
        } = lq;
        if (!(Eq && Oq.diagnostics.indexOf(Eq) < 0))
          if (Yq) {
            if (Oq.diagnostics.indexOf(Yq.diagnostic) < 0) return !1;
            Yq = new mq(Yq.from, gq, Yq.diagnostic)
          } else Yq = new mq(qq, gq, Eq || Oq.diagnostics[0])
      })), Yq
    }

    function cq(qq, Eq) {
      let gq = Eq.pos,
        Yq = Eq.end || gq,
        lq = qq.state.facet(Qq).hideOn(qq, gq, Yq);
      if (null != lq) return lq;
      let Oq = qq.startState.doc.lineAt(Eq.pos);
      return !(!qq.effects.some((qq => qq.is(Bq))) && !qq.changes.touchesRange(Oq.from, Math.max(Oq.to, Yq)))
    }

    function uq(qq, Eq) {
      return qq.field(aq, !1) ? Eq : Eq.concat(lq.J.appendConfig.of(zq))
    }
    const Bq = lq.J.define(),
      Wq = lq.J.define(),
      Nq = lq.J.define(),
      aq = lq.L.define({
        create: () => new xq(Yq.c.none, null, null),
        update(qq, Eq) {
          if (Eq.docChanged && qq.diagnostics.size) {
            let gq = qq.diagnostics.map(Eq.changes),
              Yq = null,
              lq = qq.panel;
            if (qq.selected) {
              let lq = Eq.changes.mapPos(qq.selected.from, 1);
              Yq = Aq(gq, qq.selected.diagnostic, lq) || Aq(gq, null, lq)
            }!gq.size && lq && Eq.state.facet(Qq).autoPanel && (lq = null), qq = new xq(gq, lq, Yq)
          }
          for (let gq of Eq.effects)
            if (gq.is(Bq)) {
              let Yq = Eq.state.facet(Qq).autoPanel ? gq.value.length ? bq.open : null : qq.panel;
              qq = xq.init(gq.value, Yq, Eq.state)
            } else gq.is(Wq) ? qq = new xq(qq.diagnostics, gq.value ? bq.open : null, qq.selected) : gq.is(Nq) && (qq = new xq(qq.diagnostics, qq.panel, gq.value));
          return qq
        },
        provide: qq => [Yq.eb.from(qq, (qq => qq.panel)), Yq.g.YO.from(qq, (qq => qq.diagnostics))]
      });
    const Vq = Yq.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function dq(qq, Eq, gq) {
      let Yq, {
          diagnostics: lq
        } = qq.state.field(aq),
        Oq = -1,
        mq = -1;
      lq.between(Eq - (gq < 0 ? 1 : 0), Eq + (gq > 0 ? 1 : 0), ((qq, lq, xq) => {
        let {
          spec: Aq
        } = xq;
        if (Eq >= qq && Eq <= lq && (qq == lq || (Eq > qq || gq > 0) && (Eq < lq || gq < 0))) return Yq = Aq.diagnostics, Oq = qq, mq = lq, !1
      }));
      let xq = qq.state.facet(Qq).tooltipFilter;
      return Yq && xq && (Yq = xq(Yq, qq.state)), Yq ? {
        pos: Oq,
        end: mq,
        above: qq.state.doc.lineAt(Oq).to < mq,
        create: () => ({
          dom: jq(qq, Yq)
        })
      } : null
    }

    function jq(qq, Eq) {
      return (0, Oq.c)("ul", {
        class: "cm-tooltip-lint"
      }, Eq.map((Eq => vq(qq, Eq, !1))))
    }
    const Hq = qq => {
        let Eq = qq.state.field(aq, !1);
        return !(!Eq || !Eq.panel) && (qq.dispatch({
          effects: Wq.of(!1)
        }), !0)
      },
      oq = [{
        key: "Mod-Shift-m",
        run: qq => {
          let Eq = qq.state.field(aq, !1);
          Eq && Eq.panel || qq.dispatch({
            effects: uq(qq.state, [Wq.of(!0)])
          });
          let gq = (0, Yq.t)(qq, bq.open);
          return gq && gq.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: qq => {
          let Eq = qq.state.field(aq, !1);
          if (!Eq) return !1;
          let gq = qq.state.selection.main,
            Yq = Aq(Eq.diagnostics, null, gq.to + 1);
          return !(!Yq && (Yq = Aq(Eq.diagnostics, null, 0), !Yq || Yq.from == gq.from && Yq.to == gq.to)) && (qq.dispatch({
            selection: {
              anchor: Yq.from,
              head: Yq.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Pq = Yq.l.fromClass(class {
        constructor(qq) {
          this.view = qq, this.timeout = -1, this.set = !0;
          let {
            delay: Eq
          } = qq.state.facet(Qq);
          this.lintTime = Date.now() + Eq, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Eq)
        }
        run() {
          clearTimeout(this.timeout);
          let qq = Date.now();
          if (qq < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - qq);
          else {
            this.set = !1;
            let {
              state: qq
            } = this.view, {
              sources: Eq
            } = qq.facet(Qq);
            Eq.length && function(qq, Eq, gq) {
              let Yq = [],
                lq = -1;
              for (let Oq of qq) Oq.then((gq => {
                Yq.push(gq), clearTimeout(lq), Yq.length == qq.length ? Eq(Yq) : lq = setTimeout((() => Eq(Yq)), 200)
              }), gq)
            }(Eq.map((qq => Promise.resolve(qq(this.view)))), (Eq => {
              this.view.state.doc == qq.doc && this.view.dispatch(function(qq, Eq) {
                return {
                  effects: uq(qq, [Bq.of(Eq)])
                }
              }(this.view.state, Eq.reduce(((qq, Eq) => qq.concat(Eq)))))
            }), (qq => {
              (0, Yq.R)(this.view.state, qq)
            }))
          }
        }
        update(qq) {
          let Eq = qq.state.facet(Qq);
          (qq.docChanged || Eq != qq.startState.facet(Qq) || Eq.needsRefresh && Eq.needsRefresh(qq)) && (this.lintTime = Date.now() + Eq.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Eq.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Qq = lq.x.define({
      combine: qq => ({
        sources: qq.map((qq => qq.source)).filter((qq => null != qq)),
        ...(0, lq.Y)(qq.map((qq => qq.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: yq,
          tooltipFilter: yq,
          needsRefresh: (qq, Eq) => qq ? Eq ? gq => qq(gq) || Eq(gq) : qq : Eq,
          hideOn: (qq, Eq) => qq ? Eq ? (gq, Yq, lq) => qq(gq, Yq, lq) || Eq(gq, Yq, lq) : qq : Eq,
          autoPanel: (qq, Eq) => qq || Eq
        })
      })
    });

    function yq(qq, Eq) {
      return qq ? Eq ? (gq, Yq) => Eq(qq(gq, Yq), Yq) : qq : Eq
    }

    function tq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Qq.of({
        source: qq,
        config: Eq
      }), Pq, zq]
    }

    function rq(qq) {
      let Eq = [];
      if (qq) qq: for (let {
          name: gq
        }
        of qq) {
        for (let qq = 0; qq < gq.length; qq++) {
          let Yq = gq[qq];
          if (/[a-zA-Z]/.test(Yq) && !Eq.some((qq => qq.toLowerCase() == Yq.toLowerCase()))) {
            Eq.push(Yq);
            continue qq
          }
        }
        Eq.push("")
      }
      return Eq
    }

    function vq(qq, Eq, gq) {
      var Yq;
      let lq = gq ? rq(Eq.actions) : [];
      return (0, Oq.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Eq.severity
      }, (0, Oq.c)("span", {
        class: "cm-diagnosticText"
      }, Eq.renderMessage ? Eq.renderMessage(qq) : Eq.message), null === (Yq = Eq.actions) || void 0 === Yq ? void 0 : Yq.map(((gq, Yq) => {
        let mq = !1,
          xq = Yq => {
            if (Yq.preventDefault(), mq) return;
            mq = !0;
            let lq = Aq(qq.state.field(aq).diagnostics, Eq);
            lq && gq.apply(qq, lq.from, lq.to)
          },
          {
            name: cq
          } = gq,
          uq = lq[Yq] ? cq.indexOf(lq[Yq]) : -1,
          Bq = uq < 0 ? cq : [cq.slice(0, uq), (0, Oq.c)("u", cq.slice(uq, uq + 1)), cq.slice(uq + 1)],
          Wq = gq.markClass ? " " + gq.markClass : "";
        return (0, Oq.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Wq,
          onclick: xq,
          onmousedown: xq,
          "aria-label": ` Action: ${cq}${uq<0?"":` (access key "${lq[Yq]})"`}.`
        }, Bq)
      })), Eq.source && (0, Oq.c)("div", {
        class: "cm-diagnosticSource"
      }, Eq.source))
    }
    class hq extends Yq.m {
      constructor(qq) {
        super(), this.sev = qq
      }
      eq(qq) {
        return qq.sev == this.sev
      }
      toDOM() {
        return (0, Oq.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class nq {
      constructor(qq, Eq) {
        this.diagnostic = Eq, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = vq(qq, Eq, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class bq {
      constructor(qq) {
        this.view = qq, this.items = [];
        this.list = (0, Oq.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Eq => {
            if (!(Eq.ctrlKey || Eq.altKey || Eq.metaKey)) {
              if (27 == Eq.keyCode) Hq(this.view), this.view.focus();
              else if (38 == Eq.keyCode || 33 == Eq.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Eq.keyCode || 34 == Eq.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Eq.keyCode) this.moveSelection(0);
              else if (35 == Eq.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Eq.keyCode) this.view.focus();
              else {
                if (!(Eq.keyCode >= 65 && Eq.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: gq
                  } = this.items[this.selectedIndex], Yq = rq(gq.actions);
                  for (let lq = 0; lq < Yq.length; lq++)
                    if (Yq[lq].toUpperCase().charCodeAt(0) == Eq.keyCode) {
                      let Eq = Aq(this.view.state.field(aq).diagnostics, gq);
                      Eq && gq.actions[lq].apply(qq, Eq.from, Eq.to)
                    }
                }
              }
              Eq.preventDefault()
            }
          },
          onclick: qq => {
            for (let Eq = 0; Eq < this.items.length; Eq++) this.items[Eq].dom.contains(qq.target) && this.moveSelection(Eq)
          }
        }), this.dom = (0, Oq.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Oq.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Hq(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let qq = this.view.state.field(aq).selected;
        if (!qq) return -1;
        for (let Eq = 0; Eq < this.items.length; Eq++)
          if (this.items[Eq].diagnostic == qq.diagnostic) return Eq;
        return -1
      }
      update() {
        let {
          diagnostics: qq,
          selected: Eq
        } = this.view.state.field(aq), gq = 0, Yq = !1, lq = null, Oq = new Set;
        for (qq.between(0, this.view.state.doc.length, ((qq, mq, xq) => {
            let {
              spec: Aq
            } = xq;
            for (let cq of Aq.diagnostics) {
              if (Oq.has(cq)) continue;
              Oq.add(cq);
              let qq, mq = -1;
              for (let Eq = gq; Eq < this.items.length; Eq++)
                if (this.items[Eq].diagnostic == cq) {
                  mq = Eq;
                  break
                } mq < 0 ? (qq = new nq(this.view, cq), this.items.splice(gq, 0, qq), Yq = !0) : (qq = this.items[mq], mq > gq && (this.items.splice(gq, mq - gq), Yq = !0)), Eq && qq.diagnostic == Eq.diagnostic ? qq.dom.hasAttribute("aria-selected") || (qq.dom.setAttribute("aria-selected", "true"), lq = qq) : qq.dom.hasAttribute("aria-selected") && qq.dom.removeAttribute("aria-selected"), gq++
            }
          })); gq < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Yq = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new nq(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Yq = !0), lq ? (this.list.setAttribute("aria-activedescendant", lq.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: lq.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: qq => {
            let {
              sel: Eq,
              panel: gq
            } = qq, Yq = gq.height / this.list.offsetHeight;
            Eq.top < gq.top ? this.list.scrollTop -= (gq.top - Eq.top) / Yq : Eq.bottom > gq.bottom && (this.list.scrollTop += (Eq.bottom - gq.bottom) / Yq)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Yq && this.sync()
      }
      sync() {
        let qq = this.list.firstChild;

        function Eq() {
          let Eq = qq;
          qq = Eq.nextSibling, Eq.remove()
        }
        for (let gq of this.items)
          if (gq.dom.parentNode == this.list) {
            for (; qq != gq.dom;) Eq();
            qq = gq.dom.nextSibling
          } else this.list.insertBefore(gq.dom, qq);
        for (; qq;) Eq()
      }
      moveSelection(qq) {
        if (this.selectedIndex < 0) return;
        let Eq = Aq(this.view.state.field(aq).diagnostics, this.items[qq].diagnostic);
        Eq && this.view.dispatch({
          selection: {
            anchor: Eq.from,
            head: Eq.to
          },
          scrollIntoView: !0,
          effects: Nq.of(Eq)
        })
      }
      static open(qq) {
        return new bq(qq)
      }
    }

    function iq(qq) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(qq)}</svg>')`
    }

    function Zq(qq) {
      return iq(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${qq}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const fq = Yq.g.baseTheme({
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
        backgroundImage: Zq("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Zq("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Zq("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Zq("#66d")
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

    function Mq(qq) {
      return "error" == qq ? 4 : "warning" == qq ? 3 : "info" == qq ? 2 : 1
    }

    function Tq(qq) {
      let Eq = "hint",
        gq = 1;
      for (let Yq of qq) {
        let qq = Mq(Yq.severity);
        qq > gq && (gq = qq, Eq = Yq.severity)
      }
      return Eq
    }
    Yq.j;
    const zq = [aq, Yq.g.YO.compute([aq], (qq => {
      let {
        selected: Eq,
        panel: gq
      } = qq.field(aq);
      return Eq && gq && Eq.from != Eq.to ? Yq.c.set([Vq.range(Eq.from, Eq.to)]) : Yq.c.none
    })), (0, Yq.N)(dq, {
      hideOn: cq
    }), fq]
  },
  41100: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => eq,
      g: () => jq,
      k: () => Dq
    });
    var Yq = gq(41053),
      lq = gq(41044),
      Oq = gq(41068);
    const mq = "function" == typeof String.prototype.normalize ? qq => qq.normalize("NFKD") : qq => qq;
    class xq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.length,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Oq, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = qq.iterRange(gq, Yq), this.bufferStart = gq, this.normalize = lq ? qq => lq(mq(qq)) : mq, this.query = this.normalize(Eq)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, lq.U)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let qq = this.peek();
          if (qq < 0) return this.done = !0, this;
          let Eq = (0, lq.cb)(qq),
            gq = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, lq.V)(qq);
          let Yq = this.normalize(Eq);
          if (Yq.length)
            for (let lq = 0, Oq = gq;; lq++) {
              let qq = Yq.charCodeAt(lq),
                mq = this.match(qq, Oq, this.bufferPos + this.bufferStart);
              if (lq == Yq.length - 1) {
                if (mq) return this.value = mq, this;
                break
              }
              Oq == gq && lq < Eq.length && Eq.charCodeAt(lq) == qq && Oq++
            }
        }
      }
      match(qq, Eq, gq) {
        let Yq = null;
        for (let lq = 0; lq < this.matches.length; lq += 2) {
          let Eq = this.matches[lq],
            Oq = !1;
          this.query.charCodeAt(Eq) == qq && (Eq == this.query.length - 1 ? Yq = {
            from: this.matches[lq + 1],
            to: gq
          } : (this.matches[lq]++, Oq = !0)), Oq || (this.matches.splice(lq, 2), lq -= 2)
        }
        return this.query.charCodeAt(0) == qq && (1 == this.query.length ? Yq = {
          from: Eq,
          to: gq
        } : this.matches.push(1, Eq)), Yq && this.test && !this.test(Yq.from, Yq.to, this.buffer, this.bufferStart) && (Yq = null), Yq
      }
    }
    "undefined" != typeof Symbol && (xq.prototype[Symbol.iterator] = function() {
      return this
    });
    const Aq = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      cq = "gm" + (null == /x/.unicode ? "" : "u");
    class uq {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qq.length;
        if (this.text = qq, this.to = lq, this.curLine = "", this.done = !1, this.value = Aq, /\\[sWDnr]|\n|\r|\[\^/.test(Eq)) return new Nq(qq, Eq, gq, Yq, lq);
        this.re = new RegExp(Eq, cq + ((null === gq || void 0 === gq ? void 0 : gq.ignoreCase) ? "i" : "")), this.test = null === gq || void 0 === gq ? void 0 : gq.test, this.iter = qq.iter();
        let Oq = qq.lineAt(Yq);
        this.curLineStart = Oq.from, this.matchPos = aq(qq, Yq), this.getLine(this.curLineStart)
      }
      getLine(qq) {
        this.iter.next(qq), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let qq = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = qq;
          let Eq = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Eq) {
            let gq = this.curLineStart + Eq.index,
              Yq = gq + Eq[0].length;
            if (this.matchPos = aq(this.text, Yq + (gq == Yq ? 1 : 0)), gq == this.curLineStart + this.curLine.length && this.nextLine(), (gq < Yq || gq > this.value.to) && (!this.test || this.test(gq, Yq, Eq))) return this.value = {
              from: gq,
              to: Yq,
              match: Eq
            }, this;
            qq = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), qq = 0
          }
        }
      }
    }
    const Bq = new WeakMap;
    class Wq {
      constructor(qq, Eq) {
        this.from = qq, this.text = Eq
      }
      get to() {
        return this.from + this.text.length
      }
      static get(qq, Eq, gq) {
        let Yq = Bq.get(qq);
        if (!Yq || Yq.from >= gq || Yq.to <= Eq) {
          let Yq = new Wq(Eq, qq.sliceString(Eq, gq));
          return Bq.set(qq, Yq), Yq
        }
        if (Yq.from == Eq && Yq.to == gq) return Yq;
        let {
          text: lq,
          from: Oq
        } = Yq;
        return Oq > Eq && (lq = qq.sliceString(Eq, Oq) + lq, Oq = Eq), Yq.to < gq && (lq += qq.sliceString(Yq.to, gq)), Bq.set(qq, new Wq(Oq, lq)), new Wq(Eq, lq.slice(Eq - Oq, gq - Oq))
      }
    }
    class Nq {
      constructor(qq, Eq, gq, Yq, lq) {
        this.text = qq, this.to = lq, this.done = !1, this.value = Aq, this.matchPos = aq(qq, Yq), this.re = new RegExp(Eq, cq + ((null === gq || void 0 === gq ? void 0 : gq.ignoreCase) ? "i" : "")), this.test = null === gq || void 0 === gq ? void 0 : gq.test, this.flat = Wq.get(qq, Yq, this.chunkEnd(Yq + 5e3))
      }
      chunkEnd(qq) {
        return qq >= this.to ? this.to : this.text.lineAt(qq).to
      }
      next() {
        for (;;) {
          let qq = this.re.lastIndex = this.matchPos - this.flat.from,
            Eq = this.re.exec(this.flat.text);
          if (Eq && !Eq[0] && Eq.index == qq && (this.re.lastIndex = qq + 1, Eq = this.re.exec(this.flat.text)), Eq) {
            let qq = this.flat.from + Eq.index,
              gq = qq + Eq[0].length;
            if ((this.flat.to >= this.to || Eq.index + Eq[0].length <= this.flat.text.length - 10) && (!this.test || this.test(qq, gq, Eq))) return this.value = {
              from: qq,
              to: gq,
              match: Eq
            }, this.matchPos = aq(this.text, gq + (qq == gq ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Wq.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function aq(qq, Eq) {
      if (Eq >= qq.length) return Eq;
      let gq, Yq = qq.lineAt(Eq);
      for (; Eq < Yq.to && (gq = Yq.text.charCodeAt(Eq - Yq.from)) >= 56320 && gq < 57344;) Eq++;
      return Eq
    }
    "undefined" != typeof Symbol && (uq.prototype[Symbol.iterator] = Nq.prototype[Symbol.iterator] = function() {
      return this
    });
    const Vq = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      dq = lq.x.define({
        combine: qq => (0, lq.Y)(qq, Vq, {
          highlightWordAroundCursor: (qq, Eq) => qq || Eq,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function jq(qq) {
      let Eq = [yq, Qq];
      return qq && Eq.push(dq.of(qq)), Eq
    }
    const Hq = Yq.c.mark({
        class: "cm-selectionMatch"
      }),
      oq = Yq.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Pq(qq, Eq, gq, Yq) {
      return (0 == gq || qq(Eq.sliceDoc(gq - 1, gq)) != lq.m.Word) && (Yq == Eq.doc.length || qq(Eq.sliceDoc(Yq, Yq + 1)) != lq.m.Word)
    }
    const Qq = Yq.l.fromClass(class {
        constructor(qq) {
          this.YO = this.getDeco(qq)
        }
        update(qq) {
          (qq.selectionSet || qq.docChanged || qq.viewportChanged) && (this.YO = this.getDeco(qq.view))
        }
        getDeco(qq) {
          let Eq = qq.state.facet(dq),
            {
              state: gq
            } = qq,
            Oq = gq.selection;
          if (Oq.zV.length > 1) return Yq.c.none;
          let mq, Aq = Oq.main,
            cq = null;
          if (Aq.empty) {
            if (!Eq.highlightWordAroundCursor) return Yq.c.none;
            let qq = gq.wordAt(Aq.head);
            if (!qq) return Yq.c.none;
            cq = gq.charCategorizer(Aq.head), mq = gq.sliceDoc(qq.from, qq.to)
          } else {
            let qq = Aq.to - Aq.from;
            if (qq < Eq.minSelectionLength || qq > 200) return Yq.c.none;
            if (Eq.wholeWords) {
              if (mq = gq.sliceDoc(Aq.from, Aq.to), cq = gq.charCategorizer(Aq.head), !Pq(cq, gq, Aq.from, Aq.to) || ! function(qq, Eq, gq, Yq) {
                  return qq(Eq.sliceDoc(gq, gq + 1)) == lq.m.Word && qq(Eq.sliceDoc(Yq - 1, Yq)) == lq.m.Word
                }(cq, gq, Aq.from, Aq.to)) return Yq.c.none
            } else if (mq = gq.sliceDoc(Aq.from, Aq.to), !mq) return Yq.c.none
          }
          let uq = [];
          for (let lq of qq.xqq) {
            let qq = new xq(gq.doc, mq, lq.from, lq.to);
            for (; !qq.next().done;) {
              let {
                from: lq,
                to: Oq
              } = qq.value;
              if ((!cq || Pq(cq, gq, lq, Oq)) && (Aq.empty && lq <= Aq.from && Oq >= Aq.to ? uq.push(oq.range(lq, Oq)) : (lq >= Aq.to || Oq <= Aq.from) && uq.push(Hq.range(lq, Oq)), uq.length > Eq.maxMatches)) return Yq.c.none
            }
          }
          return Yq.c.set(uq)
        }
      }, {
        YO: qq => qq.YO
      }),
      yq = Yq.g.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const tq = lq.x.define({
      combine: qq => (0, lq.Y)(qq, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: qq => new qE(qq),
        scrollToMatch: qq => Yq.g.scrollIntoView(qq)
      })
    });
    class rq {
      constructor(qq) {
        this.search = qq.search, this.caseSensitive = !!qq.caseSensitive, this.literal = !!qq.literal, this.regexp = !!qq.regexp, this.replace = qq.replace || "", this.valid = !!this.search && (!this.regexp || function(qq) {
          try {
            return new RegExp(qq, cq), !0
          } catch (Eq) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!qq.wholeWord, this.test = qq.test
      }
      unquote(qq) {
        return this.literal ? qq : qq.replace(/\\([nrt\\])/g, ((qq, Eq) => "n" == Eq ? "\n" : "r" == Eq ? "\r" : "t" == Eq ? "\t" : "\\"))
      }
      eq(qq) {
        return this.search == qq.search && this.replace == qq.replace && this.caseSensitive == qq.caseSensitive && this.regexp == qq.regexp && this.wholeWord == qq.wholeWord && this.test == qq.test
      }
      create() {
        return this.regexp ? new fq(this) : new nq(this)
      }
      getCursor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = qq.doc ? qq : lq.u.create({
            doc: qq
          });
        return null == gq && (gq = Yq.doc.length), this.regexp ? bq(this, Yq, Eq, gq) : hq(this, Yq, Eq, gq)
      }
    }
    class vq {
      constructor(qq) {
        this.spec = qq
      }
    }

    function hq(qq, Eq, gq, Yq) {
      let Oq;
      var mq, Aq;
      return qq.wholeWord && (mq = Eq.doc, Aq = Eq.charCategorizer(Eq.selection.main.head), Oq = (qq, Eq, gq, Yq) => ((Yq > qq || Yq + gq.length < Eq) && (Yq = Math.max(0, qq - 2), gq = mq.sliceString(Yq, Math.min(mq.length, Eq + 2))), (Aq(iq(gq, qq - Yq)) != lq.m.Word || Aq(Zq(gq, qq - Yq)) != lq.m.Word) && (Aq(Zq(gq, Eq - Yq)) != lq.m.Word || Aq(iq(gq, Eq - Yq)) != lq.m.Word))), qq.test && (Oq = function(qq, Eq, gq) {
        return (Yq, lq, Oq, mq) => {
          if (gq && !gq(Yq, lq, Oq, mq)) return !1;
          let xq = Yq >= mq && lq <= mq + Oq.length ? Oq.slice(Yq - mq, lq - mq) : Eq.doc.sliceString(Yq, lq);
          return qq(xq, Eq, Yq, lq)
        }
      }(qq.test, Eq, Oq)), new xq(Eq.doc, qq.unquoted, gq, Yq, qq.caseSensitive ? void 0 : qq => qq.toLowerCase(), Oq)
    }
    class nq extends vq {
      constructor(qq) {
        super(qq)
      }
      nextMatch(qq, Eq, gq) {
        let Yq = hq(this.spec, qq, gq, qq.doc.length).nextOverlapping();
        if (Yq.done) {
          let gq = Math.min(qq.doc.length, Eq + this.spec.unquoted.length);
          Yq = hq(this.spec, qq, 0, gq).nextOverlapping()
        }
        return Yq.done || Yq.value.from == Eq && Yq.value.to == gq ? null : Yq.value
      }
      prevMatchInRange(qq, Eq, gq) {
        for (let Yq = gq;;) {
          let gq = Math.max(Eq, Yq - 1e4 - this.spec.unquoted.length),
            lq = hq(this.spec, qq, gq, Yq),
            Oq = null;
          for (; !lq.nextOverlapping().done;) Oq = lq.value;
          if (Oq) return Oq;
          if (gq == Eq) return null;
          Yq -= 1e4
        }
      }
      prevMatch(qq, Eq, gq) {
        let Yq = this.prevMatchInRange(qq, 0, Eq);
        return Yq || (Yq = this.prevMatchInRange(qq, Math.max(0, gq - this.spec.unquoted.length), qq.doc.length)), !Yq || Yq.from == Eq && Yq.to == gq ? null : Yq
      }
      getReplacement(qq) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(qq, Eq) {
        let gq = hq(this.spec, qq, 0, qq.doc.length),
          Yq = [];
        for (; !gq.next().done;) {
          if (Yq.length >= Eq) return null;
          Yq.push(gq.value)
        }
        return Yq
      }
      highlight(qq, Eq, gq, Yq) {
        let lq = hq(this.spec, qq, Math.max(0, Eq - this.spec.unquoted.length), Math.min(gq + this.spec.unquoted.length, qq.doc.length));
        for (; !lq.next().done;) Yq(lq.value.from, lq.value.to)
      }
    }

    function bq(qq, Eq, gq, Yq) {
      let Oq;
      var mq;
      return qq.wholeWord && (mq = Eq.charCategorizer(Eq.selection.main.head), Oq = (qq, Eq, gq) => !gq[0].length || (mq(iq(gq.input, gq.index)) != lq.m.Word || mq(Zq(gq.input, gq.index)) != lq.m.Word) && (mq(Zq(gq.input, gq.index + gq[0].length)) != lq.m.Word || mq(iq(gq.input, gq.index + gq[0].length)) != lq.m.Word)), qq.test && (Oq = function(qq, Eq, gq) {
        return (Yq, lq, Oq) => (!gq || gq(Yq, lq, Oq)) && qq(Oq[0], Eq, Yq, lq)
      }(qq.test, Eq, Oq)), new uq(Eq.doc, qq.search, {
        ignoreCase: !qq.caseSensitive,
        test: Oq
      }, gq, Yq)
    }

    function iq(qq, Eq) {
      return qq.slice((0, lq.$)(qq, Eq, !1), Eq)
    }

    function Zq(qq, Eq) {
      return qq.slice(Eq, (0, lq.$)(qq, Eq))
    }
    class fq extends vq {
      nextMatch(qq, Eq, gq) {
        let Yq = bq(this.spec, qq, gq, qq.doc.length).next();
        return Yq.done && (Yq = bq(this.spec, qq, 0, Eq).next()), Yq.done ? null : Yq.value
      }
      prevMatchInRange(qq, Eq, gq) {
        for (let Yq = 1;; Yq++) {
          let lq = Math.max(Eq, gq - 1e4 * Yq),
            Oq = bq(this.spec, qq, lq, gq),
            mq = null;
          for (; !Oq.next().done;) mq = Oq.value;
          if (mq && (lq == Eq || mq.from > lq + 10)) return mq;
          if (lq == Eq) return null
        }
      }
      prevMatch(qq, Eq, gq) {
        return this.prevMatchInRange(qq, 0, Eq) || this.prevMatchInRange(qq, gq, qq.doc.length)
      }
      getReplacement(qq) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Eq, gq) => {
          if ("&" == gq) return qq.match[0];
          if ("$" == gq) return "$";
          for (let Yq = gq.length; Yq > 0; Yq--) {
            let Eq = +gq.slice(0, Yq);
            if (Eq > 0 && Eq < qq.match.length) return qq.match[Eq] + gq.slice(Yq)
          }
          return Eq
        }))
      }
      matchAll(qq, Eq) {
        let gq = bq(this.spec, qq, 0, qq.doc.length),
          Yq = [];
        for (; !gq.next().done;) {
          if (Yq.length >= Eq) return null;
          Yq.push(gq.value)
        }
        return Yq
      }
      highlight(qq, Eq, gq, Yq) {
        let lq = bq(this.spec, qq, Math.max(0, Eq - 250), Math.min(gq + 250, qq.doc.length));
        for (; !lq.next().done;) Yq(lq.value.from, lq.value.to)
      }
    }
    const Mq = lq.J.define(),
      Tq = lq.J.define(),
      zq = lq.L.define({
        create: qq => new Sq(wq(qq).create(), null),
        update(qq, Eq) {
          for (let gq of Eq.effects) gq.is(Mq) ? qq = new Sq(gq.value.create(), qq.panel) : gq.is(Tq) && (qq = new Sq(qq.query, gq.value ? Xq : null));
          return qq
        },
        provide: qq => Yq.eb.from(qq, (qq => qq.panel))
      });
    class Sq {
      constructor(qq, Eq) {
        this.query = qq, this.panel = Eq
      }
    }
    const pq = Yq.c.mark({
        class: "cm-searchMatch"
      }),
      Gq = Yq.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Lq = Yq.l.fromClass(class {
        constructor(qq) {
          this.view = qq, this.YO = this.highlight(qq.state.field(zq))
        }
        update(qq) {
          let Eq = qq.state.field(zq);
          (Eq != qq.startState.field(zq) || qq.docChanged || qq.selectionSet || qq.viewportChanged) && (this.YO = this.highlight(Eq))
        }
        highlight(qq) {
          let {
            query: Eq,
            panel: gq
          } = qq;
          if (!gq || !Eq.spec.valid) return Yq.c.none;
          let {
            view: Oq
          } = this, mq = new lq.E;
          for (let Yq = 0, lq = Oq.xqq, xq = lq.length; Yq < xq; Yq++) {
            let {
              from: qq,
              to: gq
            } = lq[Yq];
            for (; Yq < xq - 1 && gq > lq[Yq + 1].from - 500;) gq = lq[++Yq].to;
            Eq.highlight(Oq.state, qq, gq, ((qq, Eq) => {
              let gq = Oq.state.selection.zV.some((gq => gq.from == qq && gq.to == Eq));
              mq.add(qq, Eq, gq ? Gq : pq)
            }))
          }
          return mq.finish()
        }
      }, {
        YO: qq => qq.YO
      });

    function Jq(qq) {
      return Eq => {
        let gq = Eq.state.field(zq, !1);
        return gq && gq.query.spec.valid ? qq(Eq, gq) : Iq(Eq)
      }
    }
    const kq = Jq(((qq, Eq) => {
        let {
          query: gq
        } = Eq, {
          to: Yq
        } = qq.state.selection.main, Oq = gq.nextMatch(qq.state, Yq, Yq);
        if (!Oq) return !1;
        let mq = lq.q.single(Oq.from, Oq.to),
          xq = qq.state.facet(tq);
        return qq.dispatch({
          selection: mq,
          effects: [lE(qq, Oq), xq.scrollToMatch(mq.main, qq)],
          userEvent: "select.search"
        }), Cq(qq), !0
      })),
      Rq = Jq(((qq, Eq) => {
        let {
          query: gq
        } = Eq, {
          state: Yq
        } = qq, {
          from: Oq
        } = Yq.selection.main, mq = gq.prevMatch(Yq, Oq, Oq);
        if (!mq) return !1;
        let xq = lq.q.single(mq.from, mq.to),
          Aq = qq.state.facet(tq);
        return qq.dispatch({
          selection: xq,
          effects: [lE(qq, mq), Aq.scrollToMatch(xq.main, qq)],
          userEvent: "select.search"
        }), Cq(qq), !0
      })),
      Uq = Jq(((qq, Eq) => {
        let {
          query: gq
        } = Eq, Yq = gq.matchAll(qq.state, 1e3);
        return !(!Yq || !Yq.length) && (qq.dispatch({
          selection: lq.q.create(Yq.map((qq => lq.q.range(qq.from, qq.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Fq = Jq(((qq, Eq) => {
        let {
          query: gq
        } = Eq, {
          state: Oq
        } = qq, {
          from: mq,
          to: xq
        } = Oq.selection.main;
        if (Oq.readOnly) return !1;
        let Aq = gq.nextMatch(Oq, mq, mq);
        if (!Aq) return !1;
        let cq, uq, Bq = Aq,
          Wq = [],
          Nq = [];
        Bq.from == mq && Bq.to == xq && (uq = Oq.toText(gq.getReplacement(Bq)), Wq.push({
          from: Bq.from,
          to: Bq.to,
          insert: uq
        }), Bq = gq.nextMatch(Oq, Bq.from, Bq.to), Nq.push(Yq.g.announce.of(Oq.phrase("replaced match on line $", Oq.doc.lineAt(mq).number) + ".")));
        let aq = qq.state.changes(Wq);
        return Bq && (cq = lq.q.single(Bq.from, Bq.to).map(aq), Nq.push(lE(qq, Bq)), Nq.push(Oq.facet(tq).scrollToMatch(cq.main, qq))), qq.dispatch({
          changes: aq,
          selection: cq,
          effects: Nq,
          userEvent: "input.replace"
        }), !0
      })),
      sq = Jq(((qq, Eq) => {
        let {
          query: gq
        } = Eq;
        if (qq.state.readOnly) return !1;
        let lq = gq.matchAll(qq.state, 1e9).map((qq => {
          let {
            from: Eq,
            to: Yq
          } = qq;
          return {
            from: Eq,
            to: Yq,
            insert: gq.getReplacement(qq)
          }
        }));
        if (!lq.length) return !1;
        let Oq = qq.state.phrase("replaced $ matches", lq.length) + ".";
        return qq.dispatch({
          changes: lq,
          effects: Yq.g.announce.of(Oq),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Xq(qq) {
      return qq.state.facet(tq).createPanel(qq)
    }

    function wq(qq, Eq) {
      var gq, Yq, lq, Oq, mq;
      let xq = qq.selection.main,
        Aq = xq.empty || xq.to > xq.from + 100 ? "" : qq.sliceDoc(xq.from, xq.to);
      if (Eq && !Aq) return Eq;
      let cq = qq.facet(tq);
      return new rq({
        search: (null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.literal) && void 0 !== gq ? gq : cq.literal) ? Aq : Aq.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Yq = null === Eq || void 0 === Eq ? void 0 : Eq.caseSensitive) && void 0 !== Yq ? Yq : cq.caseSensitive,
        literal: null !== (lq = null === Eq || void 0 === Eq ? void 0 : Eq.literal) && void 0 !== lq ? lq : cq.literal,
        regexp: null !== (Oq = null === Eq || void 0 === Eq ? void 0 : Eq.regexp) && void 0 !== Oq ? Oq : cq.regexp,
        wholeWord: null !== (mq = null === Eq || void 0 === Eq ? void 0 : Eq.wholeWord) && void 0 !== mq ? mq : cq.wholeWord
      })
    }

    function Kq(qq) {
      let Eq = (0, Yq.t)(qq, Xq);
      return Eq && Eq.dom.querySelector("[main-field]")
    }

    function Cq(qq) {
      let Eq = Kq(qq);
      Eq && Eq == qq.root.activeElement && Eq.select()
    }
    const Iq = qq => {
        let Eq = qq.state.field(zq, !1);
        if (Eq && Eq.panel) {
          let gq = Kq(qq);
          if (gq && gq != qq.root.activeElement) {
            let Yq = wq(qq.state, Eq.query.spec);
            Yq.valid && qq.dispatch({
              effects: Mq.of(Yq)
            }), gq.focus(), gq.select()
          }
        } else qq.dispatch({
          effects: [Tq.of(!0), Eq ? Mq.of(wq(qq.state, Eq.query.spec)) : lq.J.appendConfig.of(mE)]
        });
        return !0
      },
      eq = qq => {
        let Eq = qq.state.field(zq, !1);
        if (!Eq || !Eq.panel) return !1;
        let gq = (0, Yq.t)(qq, Xq);
        return gq && gq.dom.contains(qq.root.activeElement) && qq.focus(), qq.dispatch({
          effects: Tq.of(!1)
        }), !0
      },
      Dq = [{
        key: "Mod-f",
        run: Iq,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: kq,
        shift: Rq,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: kq,
        shift: Rq,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: eq,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq, Yq = Eq.selection;
          if (Yq.zV.length > 1 || Yq.main.empty) return !1;
          let {
            from: Oq,
            to: mq
          } = Yq.main, Aq = [], cq = 0;
          for (let uq = new xq(Eq.doc, Eq.sliceDoc(Oq, mq)); !uq.next().done;) {
            if (Aq.length > 1e3) return !1;
            uq.value.from == Oq && (cq = Aq.length), Aq.push(lq.q.range(uq.value.from, uq.value.to))
          }
          return gq(Eq.update({
            selection: lq.q.create(Aq, cq),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: qq => {
          let {
            state: Eq
          } = qq, gq = String(Eq.doc.lineAt(qq.state.selection.main.head).number), {
            close: Oq,
            result: mq
          } = (0, Yq.ab)(qq, {
            label: Eq.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: gq
            },
            focus: !0,
            submitLabel: Eq.phrase("go")
          });
          return mq.then((gq => {
            let mq = gq && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(gq.elements.line.value);
            if (!mq) return void qq.dispatch({
              effects: Oq
            });
            let xq = Eq.doc.lineAt(Eq.selection.main.head),
              [, Aq, cq, uq, Bq] = mq,
              Wq = uq ? +uq.slice(1) : 0,
              Nq = cq ? +cq : xq.number;
            if (cq && Bq) {
              let qq = Nq / 100;
              Aq && (qq = qq * ("-" == Aq ? -1 : 1) + xq.number / Eq.doc.lines), Nq = Math.round(Eq.doc.lines * qq)
            } else cq && Aq && (Nq = Nq * ("-" == Aq ? -1 : 1) + xq.number);
            let aq = Eq.doc.line(Math.max(1, Math.min(Eq.doc.lines, Nq))),
              Vq = lq.q.cursor(aq.from + Math.max(0, Math.min(Wq, aq.length)));
            qq.dispatch({
              effects: [Oq, Yq.g.scrollIntoView(Vq.from, {
                y: "center"
              })],
              selection: Vq
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq, {
            zV: Oq
          } = Eq.selection;
          if (Oq.some((qq => qq.from === qq.to))) return (qq => {
            let {
              state: Eq,
              dispatch: gq
            } = qq, {
              selection: Yq
            } = Eq, Oq = lq.q.create(Yq.zV.map((qq => Eq.wordAt(qq.head) || lq.q.cursor(qq.head))), Yq.mainIndex);
            return !Oq.eq(Yq) && (gq(Eq.update({
              selection: Oq
            })), !0)
          })({
            state: Eq,
            dispatch: gq
          });
          let mq = Eq.sliceDoc(Oq[0].from, Oq[0].to);
          if (Eq.selection.zV.some((qq => Eq.sliceDoc(qq.from, qq.to) != mq))) return !1;
          let Aq = function(qq, Eq) {
            let {
              main: gq,
              zV: Yq
            } = qq.selection, lq = qq.wordAt(gq.head), Oq = lq && lq.from == gq.from && lq.to == gq.to;
            for (let mq = !1, Aq = new xq(qq.doc, Eq, Yq[Yq.length - 1].to);;) {
              if (Aq.next(), !Aq.done) {
                if (mq && Yq.some((qq => qq.from == Aq.value.from))) continue;
                if (Oq) {
                  let Eq = qq.wordAt(Aq.value.from);
                  if (!Eq || Eq.from != Aq.value.from || Eq.to != Aq.value.to) continue
                }
                return Aq.value
              }
              if (mq) return null;
              Aq = new xq(qq.doc, Eq, 0, Math.max(0, Yq[Yq.length - 1].from - 1)), mq = !0
            }
          }(Eq, mq);
          return !!Aq && (gq(Eq.update({
            selection: Eq.selection.addRange(lq.q.range(Aq.from, Aq.to), !1),
            effects: Yq.g.scrollIntoView(Aq.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class qE {
      constructor(qq) {
        this.view = qq;
        let Eq = this.query = qq.state.field(zq).query.spec;

        function gq(qq, Eq, gq) {
          return (0, Oq.c)("button", {
            class: "cm-button",
            name: qq,
            onclick: Eq,
            type: "button"
          }, gq)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Oq.c)("input", {
          value: Eq.search,
          placeholder: EE(qq, "Find"),
          "aria-label": EE(qq, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Oq.c)("input", {
          value: Eq.replace,
          placeholder: EE(qq, "Replace"),
          "aria-label": EE(qq, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Oq.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Eq.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Oq.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Eq.regexp,
          onchange: this.commit
        }), this.wordField = (0, Oq.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Eq.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Oq.c)("div", {
          onkeydown: qq => this.keydown(qq),
          class: "cm-search"
        }, [this.searchField, gq("next", (() => kq(qq)), [EE(qq, "next")]), gq("prev", (() => Rq(qq)), [EE(qq, "previous")]), gq("select", (() => Uq(qq)), [EE(qq, "all")]), (0, Oq.c)("label", null, [this.caseField, EE(qq, "match case")]), (0, Oq.c)("label", null, [this.reField, EE(qq, "regexp")]), (0, Oq.c)("label", null, [this.wordField, EE(qq, "by word")]), ...qq.state.readOnly ? [] : [(0, Oq.c)("br"), this.replaceField, gq("replace", (() => Fq(qq)), [EE(qq, "replace")]), gq("replaceAll", (() => sq(qq)), [EE(qq, "replace all")])], (0, Oq.c)("button", {
          name: "close",
          onclick: () => eq(qq),
          "aria-label": EE(qq, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let qq = new rq({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        qq.eq(this.query) || (this.query = qq, this.view.dispatch({
          effects: Mq.of(qq)
        }))
      }
      keydown(qq) {
        (0, Yq._)(this.view, qq, "search-panel") ? qq.preventDefault(): 13 == qq.keyCode && qq.target == this.searchField ? (qq.preventDefault(), (qq.shiftKey ? Rq : kq)(this.view)) : 13 == qq.keyCode && qq.target == this.replaceField && (qq.preventDefault(), Fq(this.view))
      }
      update(qq) {
        for (let Eq of qq.transactions)
          for (let qq of Eq.effects) qq.is(Mq) && !qq.value.eq(this.query) && this.setQuery(qq.value)
      }
      setQuery(qq) {
        this.query = qq, this.searchField.value = qq.search, this.replaceField.value = qq.replace, this.caseField.checked = qq.caseSensitive, this.reField.checked = qq.regexp, this.wordField.checked = qq.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(tq).top
      }
    }

    function EE(qq, Eq) {
      return qq.state.phrase(Eq)
    }
    const gE = 30,
      YE = /[\s\.,:;?!]/;

    function lE(qq, Eq) {
      let {
        from: gq,
        to: lq
      } = Eq, Oq = qq.state.doc.lineAt(gq), mq = qq.state.doc.lineAt(lq).to, xq = Math.max(Oq.from, gq - gE), Aq = Math.min(mq, lq + gE), cq = qq.state.sliceDoc(xq, Aq);
      if (xq != Oq.from)
        for (let Yq = 0; Yq < gE; Yq++)
          if (!YE.test(cq[Yq + 1]) && YE.test(cq[Yq])) {
            cq = cq.slice(Yq);
            break
          } if (Aq != mq)
        for (let Yq = cq.length - 1; Yq > cq.length - gE; Yq--)
          if (!YE.test(cq[Yq - 1]) && YE.test(cq[Yq])) {
            cq = cq.slice(0, Yq);
            break
          } return Yq.g.announce.of(`${qq.state.phrase("current match")}. ${cq} ${qq.state.phrase("on line")} ${Oq.number}.`)
    }
    const OE = Yq.g.baseTheme({
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
      mE = [zq, lq.C.low(Lq), OE]
  },
  41053: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => fq,
      e: () => cE,
      g: () => vl,
      j: () => Om,
      l: () => CE,
      m: () => iq,
      n: () => bO,
      o: () => Cl,
      s: () => OO,
      t: () => CO,
      x: () => XO,
      B: () => um,
      G: () => jO,
      D: () => Zm,
      J: () => NO,
      N: () => sO,
      P: () => Tl,
      Q: () => hm,
      R: () => sE,
      T: () => QO,
      X: () => vO,
      _: () => pl,
      ab: () => Em,
      eb: () => qm,
      fb: () => LO
    });
    for (var Yq = gq(41044), lq = gq(41061), Oq = {
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
      }, mq = {
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
      }, xq = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Aq = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), cq = 0; cq < 10; cq++) Oq[48 + cq] = Oq[96 + cq] = String(cq);
    for (cq = 1; cq <= 24; cq++) Oq[cq + 111] = "F" + cq;
    for (cq = 65; cq <= 90; cq++) Oq[cq] = String.fromCharCode(cq + 32), mq[cq] = String.fromCharCode(cq);
    for (var uq in Oq) mq.hasOwnProperty(uq) || (mq[uq] = Oq[uq]);
    var Bq = gq(41068);
    let Wq = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Nq = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const aq = /Edge\/(\d+)/.exec(Wq.userAgent),
      Vq = /MSIE \d/.test(Wq.userAgent),
      dq = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Wq.userAgent),
      jq = !!(Vq || dq || aq),
      Hq = !jq && /gecko\/(\d+)/i.test(Wq.userAgent),
      oq = !jq && /Chrome\/(\d+)/.exec(Wq.userAgent),
      Pq = "webkitFontSmoothing" in Nq.documentElement.style,
      Qq = !jq && /Apple Computer/.test(Wq.vendor),
      yq = Qq && (/Mobile\/\w+/.test(Wq.userAgent) || Wq.maxTouchPoints > 2);
    var tq = {
      mac: yq || /Mac/.test(Wq.platform),
      windows: /Win/.test(Wq.platform),
      linux: /Linux|X11/.test(Wq.platform),
      ie: jq,
      ie_version: Vq ? Nq.documentMode || 6 : dq ? +dq[1] : aq ? +aq[1] : 0,
      gecko: Hq,
      gecko_version: Hq ? +(/Firefox\/(\d+)/.exec(Wq.userAgent) || [0, 0])[1] : 0,
      chrome: !!oq,
      chrome_version: oq ? +oq[1] : 0,
      ios: yq,
      android: /Android\b/.test(Wq.userAgent),
      webkit: Pq,
      webkit_version: Pq ? +(/\bAppleWebKit\/(\d+)/.exec(Wq.userAgent) || [0, 0])[1] : 0,
      safari: Qq,
      safari_version: Qq ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Wq.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Nq.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function rq(qq, Eq) {
      for (let gq in qq) "class" == gq && Eq.class ? Eq.class += " " + qq.class : "style" == gq && Eq.style ? Eq.style += ";" + qq.style : Eq[gq] = qq[gq];
      return Eq
    }
    const vq = Object.create(null);

    function hq(qq, Eq, gq) {
      if (qq == Eq) return !0;
      qq || (qq = vq), Eq || (Eq = vq);
      let Yq = Object.keys(qq),
        lq = Object.keys(Eq);
      if (Yq.length - (gq && Yq.indexOf(gq) > -1 ? 1 : 0) != lq.length - (gq && lq.indexOf(gq) > -1 ? 1 : 0)) return !1;
      for (let Oq of Yq)
        if (Oq != gq && (-1 == lq.indexOf(Oq) || qq[Oq] !== Eq[Oq])) return !1;
      return !0
    }

    function nq(qq, Eq, gq) {
      let Yq = !1;
      if (Eq)
        for (let lq in Eq) gq && lq in gq || (Yq = !0, "style" == lq ? qq.style.cssText = "" : qq.removeAttribute(lq));
      if (gq)
        for (let lq in gq) Eq && Eq[lq] == gq[lq] || (Yq = !0, "style" == lq ? qq.style.cssText = gq[lq] : qq.setAttribute(lq, gq[lq]));
      return Yq
    }

    function bq(qq) {
      let Eq = Object.create(null);
      for (let gq = 0; gq < qq.attributes.length; gq++) {
        let Yq = qq.attributes[gq];
        Eq[Yq.name] = Yq.value
      }
      return Eq
    }
    class iq {
      eq(qq) {
        return !1
      }
      updateDOM(qq, Eq, gq) {
        return !1
      }
      compare(qq) {
        return this == qq || this.constructor == qq.constructor && this.eq(qq)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(qq) {
        return !0
      }
      coordsAt(qq, Eq, gq) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(qq) {}
    }
    var Zq = function(qq) {
      return qq[qq.Text = 0] = "Text", qq[qq.WidgetBefore = 1] = "WidgetBefore", qq[qq.WidgetAfter = 2] = "WidgetAfter", qq[qq.WidgetRange = 3] = "WidgetRange", qq
    }(Zq || (Zq = {}));
    class fq extends Yq.I {
      constructor(qq, Eq, gq, Yq) {
        super(), this.startSide = qq, this.endSide = Eq, this.widget = gq, this.spec = Yq
      }
      get heightRelevant() {
        return !1
      }
      static mark(qq) {
        return new Mq(qq)
      }
      static widget(qq) {
        let Eq = Math.max(-1e4, Math.min(1e4, qq.side || 0)),
          gq = !!qq.block;
        return Eq += gq && !qq.inlineOrder ? Eq > 0 ? 3e8 : -4e8 : Eq > 0 ? 1e8 : -1e8, new zq(qq, Eq, Eq, gq, qq.widget || null, !1)
      }
      static replace(qq) {
        let Eq, gq, Yq = !!qq.block;
        if (qq.isBlockGap) Eq = -5e8, gq = 4e8;
        else {
          let {
            start: lq,
            end: Oq
          } = Sq(qq, Yq);
          Eq = (lq ? Yq ? -3e8 : -1 : 5e8) - 1, gq = 1 + (Oq ? Yq ? 2e8 : 1 : -6e8)
        }
        return new zq(qq, Eq, gq, Yq, qq.widget || null, !0)
      }
      static line(qq) {
        return new Tq(qq)
      }
      static set(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Yq.G.of(qq, Eq)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    fq.none = Yq.G.empty;
    class Mq extends fq {
      constructor(qq) {
        let {
          start: Eq,
          end: gq
        } = Sq(qq);
        super(Eq ? -1 : 5e8, gq ? 1 : -6e8, null, qq), this.tagName = qq.tagName || "span", this.attrs = qq.class && qq.attributes ? rq(qq.attributes, {
          class: qq.class
        }) : qq.class ? {
          class: qq.class
        } : qq.attributes || vq
      }
      eq(qq) {
        return this == qq || qq instanceof Mq && this.tagName == qq.tagName && hq(this.attrs, qq.attrs)
      }
      range(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
        if (qq >= Eq) throw new RangeError("Mark decorations may not be empty");
        return super.range(qq, Eq)
      }
    }
    Mq.prototype.point = !1;
    class Tq extends fq {
      constructor(qq) {
        super(-2e8, -2e8, null, qq)
      }
      eq(qq) {
        return qq instanceof Tq && this.spec.class == qq.spec.class && hq(this.spec.attributes, qq.spec.attributes)
      }
      range(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
        if (Eq != qq) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(qq, Eq)
      }
    }
    Tq.prototype.mapMode = Yq.B.TrackBefore, Tq.prototype.point = !0;
    class zq extends fq {
      constructor(qq, Eq, gq, lq, Oq, mq) {
        super(Eq, gq, Oq, qq), this.block = lq, this.isReplace = mq, this.mapMode = lq ? Eq <= 0 ? Yq.B.TrackBefore : Yq.B.TrackAfter : Yq.B.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Zq.WidgetRange : this.startSide <= 0 ? Zq.WidgetBefore : Zq.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(qq) {
        return qq instanceof zq && (Eq = this.widget, gq = qq.widget, Eq == gq || !!(Eq && gq && Eq.compare(gq))) && this.block == qq.block && this.startSide == qq.startSide && this.endSide == qq.endSide;
        var Eq, gq
      }
      range(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
        if (this.isReplace && (qq > Eq || qq == Eq && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Eq != qq) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(qq, Eq)
      }
    }

    function Sq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: gq,
          inclusiveEnd: Yq
        } = qq;
      return null == gq && (gq = qq.inclusive), null == Yq && (Yq = qq.inclusive), {
        start: null !== gq && void 0 !== gq ? gq : Eq,
        end: null !== Yq && void 0 !== Yq ? Yq : Eq
      }
    }

    function pq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        lq = gq.length - 1;
      lq >= 0 && gq[lq] + Yq >= qq ? gq[lq] = Math.max(gq[lq], Eq) : gq.push(qq, Eq)
    }
    zq.prototype.point = !0;
    class Gq extends Yq.I {
      constructor(qq, Eq) {
        super(), this.tagName = qq, this.attributes = Eq
      }
      eq(qq) {
        return qq == this || qq instanceof Gq && this.tagName == qq.tagName && hq(this.attributes, qq.attributes)
      }
      static create(qq) {
        return new Gq(qq.tagName, qq.attributes || vq)
      }
      static set(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Yq.G.of(qq, Eq)
      }
    }

    function Lq(qq) {
      let Eq;
      return Eq = 11 == qq.nodeType ? qq.getSelection ? qq : qq.ownerDocument : qq, Eq.getSelection()
    }

    function Jq(qq, Eq) {
      return !!Eq && (qq == Eq || qq.contains(1 != Eq.nodeType ? Eq.parentNode : Eq))
    }

    function kq(qq, Eq) {
      if (!Eq.anchorNode) return !1;
      try {
        return Jq(qq, Eq.anchorNode)
      } catch (gq) {
        return !1
      }
    }

    function Rq(qq) {
      return 3 == qq.nodeType ? YE(qq, 0, qq.nodeValue.length).getClientRects() : 1 == qq.nodeType ? qq.getClientRects() : []
    }

    function Uq(qq, Eq, gq, Yq) {
      return !!gq && (Xq(qq, Eq, gq, Yq, -1) || Xq(qq, Eq, gq, Yq, 1))
    }

    function Fq(qq) {
      for (var Eq = 0;; Eq++)
        if (!(qq = qq.previousSibling)) return Eq
    }

    function sq(qq) {
      return 1 == qq.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(qq.nodeName)
    }

    function Xq(qq, Eq, gq, Yq, lq) {
      for (;;) {
        if (qq == gq && Eq == Yq) return !0;
        if (Eq == (lq < 0 ? 0 : wq(qq))) {
          if ("DIV" == qq.nodeName) return !1;
          let gq = qq.parentNode;
          if (!gq || 1 != gq.nodeType) return !1;
          Eq = Fq(qq) + (lq < 0 ? 0 : 1), qq = gq
        } else {
          if (1 != qq.nodeType) return !1;
          if (1 == (qq = qq.childNodes[Eq + (lq < 0 ? -1 : 0)]).nodeType && "false" == qq.contentEditable) return !1;
          Eq = lq < 0 ? wq(qq) : 0
        }
      }
    }

    function wq(qq) {
      return 3 == qq.nodeType ? qq.nodeValue.length : qq.childNodes.length
    }

    function Kq(qq, Eq) {
      let gq = Eq ? qq.left : qq.right;
      return {
        left: gq,
        right: gq,
        top: qq.top,
        bottom: qq.bottom
      }
    }

    function Cq(qq) {
      let Eq = qq.visualViewport;
      return Eq ? {
        left: 0,
        right: Eq.width,
        top: 0,
        bottom: Eq.height
      } : {
        left: 0,
        right: qq.innerWidth,
        top: 0,
        bottom: qq.innerHeight
      }
    }

    function Iq(qq, Eq) {
      let gq = Eq.width / qq.offsetWidth,
        Yq = Eq.height / qq.offsetHeight;
      return (gq > .995 && gq < 1.005 || !isFinite(gq) || Math.abs(Eq.width - qq.offsetWidth) < 1) && (gq = 1), (Yq > .995 && Yq < 1.005 || !isFinite(Yq) || Math.abs(Eq.height - qq.offsetHeight) < 1) && (Yq = 1), {
        scaleX: gq,
        scaleY: Yq
      }
    }

    function eq(qq) {
      let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        gq = qq.ownerDocument,
        Yq = null,
        lq = null;
      for (let Oq = qq.parentNode; Oq && (Oq != gq.body && (Eq && !Yq || !lq));)
        if (1 == Oq.nodeType) !lq && Oq.scrollHeight > Oq.clientHeight && (lq = Oq), Eq && !Yq && Oq.scrollWidth > Oq.clientWidth && (Yq = Oq), Oq = Oq.assignedSlot || Oq.parentNode;
        else {
          if (11 != Oq.nodeType) break;
          Oq = Oq.host
        } return {
        x: Yq,
        y: lq
      }
    }
    Gq.prototype.startSide = Gq.prototype.endSide = -1;
    class Dq {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(qq) {
        return this.anchorNode == qq.anchorNode && this.anchorOffset == qq.anchorOffset && this.focusNode == qq.focusNode && this.focusOffset == qq.focusOffset
      }
      setRange(qq) {
        let {
          anchorNode: Eq,
          focusNode: gq
        } = qq;
        this.set(Eq, Math.min(qq.anchorOffset, Eq ? wq(Eq) : 0), gq, Math.min(qq.focusOffset, gq ? wq(gq) : 0))
      }
      set(qq, Eq, gq, Yq) {
        this.anchorNode = qq, this.anchorOffset = Eq, this.focusNode = gq, this.focusOffset = Yq
      }
    }
    let qE, EE = null;

    function gE(qq) {
      if (qq.setActive) return qq.setActive();
      if (EE) return qq.focus(EE);
      let Eq = [];
      for (let gq = qq; gq && (Eq.push(gq, gq.scrollTop, gq.scrollLeft), gq != gq.ownerDocument); gq = gq.parentNode);
      if (qq.focus(null == EE ? {
          get preventScroll() {
            return EE = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !EE) {
        EE = !1;
        for (let qq = 0; qq < Eq.length;) {
          let gq = Eq[qq++],
            Yq = Eq[qq++],
            lq = Eq[qq++];
          gq.scrollTop != Yq && (gq.scrollTop = Yq), gq.scrollLeft != lq && (gq.scrollLeft = lq)
        }
      }
    }

    function YE(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq,
        Yq = qE || (qE = document.createRange());
      return Yq.setEnd(qq, gq), Yq.setStart(qq, Eq), Yq
    }

    function lE(qq, Eq, gq, Yq) {
      let lq = {
        key: Eq,
        code: Eq,
        keyCode: gq,
        which: gq,
        cancelable: !0
      };
      Yq && ({
        altKey: lq.altKey,
        ctrlKey: lq.ctrlKey,
        shiftKey: lq.shiftKey,
        metaKey: lq.metaKey
      } = Yq);
      let Oq = new KeyboardEvent("keydown", lq);
      Oq.synthetic = !0, qq.dispatchEvent(Oq);
      let mq = new KeyboardEvent("keyup", lq);
      return mq.synthetic = !0, qq.dispatchEvent(mq), Oq.defaultPrevented || mq.defaultPrevented
    }

    function OE(qq) {
      return qq instanceof Window ? qq.pageYOffset > Math.max(0, qq.document.documentElement.scrollHeight - qq.innerHeight - 4) : qq.scrollTop > Math.max(1, qq.scrollHeight - qq.clientHeight - 4)
    }

    function mE(qq, Eq) {
      for (let gq = qq, Yq = Eq;;) {
        if (3 == gq.nodeType && Yq > 0) return {
          node: gq,
          offset: Yq
        };
        if (1 == gq.nodeType && Yq > 0) {
          if ("false" == gq.contentEditable) return null;
          gq = gq.childNodes[Yq - 1], Yq = wq(gq)
        } else {
          if (!gq.parentNode || sq(gq)) return null;
          Yq = Fq(gq), gq = gq.parentNode
        }
      }
    }

    function xE(qq, Eq) {
      for (let gq = qq, Yq = Eq;;) {
        if (3 == gq.nodeType && Yq < gq.nodeValue.length) return {
          node: gq,
          offset: Yq
        };
        if (1 == gq.nodeType && Yq < gq.childNodes.length) {
          if ("false" == gq.contentEditable) return null;
          gq = gq.childNodes[Yq], Yq = 0
        } else {
          if (!gq.parentNode || sq(gq)) return null;
          Yq = Fq(gq) + 1, gq = gq.parentNode
        }
      }
    }
    tq.safari && tq.safari_version >= 26 && (EE = !1);
    class AE {
      constructor(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = qq, this.offset = Eq, this.precise = gq
      }
      static before(qq, Eq) {
        return new AE(qq.parentNode, Fq(qq), Eq)
      }
      static after(qq, Eq) {
        return new AE(qq.parentNode, Fq(qq) + 1, Eq)
      }
    }
    var cE = function(qq) {
      return qq[qq.LTR = 0] = "LTR", qq[qq.RTL = 1] = "RTL", qq
    }(cE || (cE = {}));
    const uE = cE.LTR,
      BE = cE.RTL;

    function WE(qq) {
      let Eq = [];
      for (let gq = 0; gq < qq.length; gq++) Eq.push(1 << +qq[gq]);
      return Eq
    }
    const NE = WE("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      aE = WE("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      VE = Object.create(null),
      dE = [];
    for (let fm of ["()", "[]", "{}"]) {
      let qq = fm.charCodeAt(0),
        Eq = fm.charCodeAt(1);
      VE[qq] = Eq, VE[Eq] = -qq
    }

    function jE(qq) {
      return qq <= 247 ? NE[qq] : 1424 <= qq && qq <= 1524 ? 2 : 1536 <= qq && qq <= 1785 ? aE[qq - 1536] : 1774 <= qq && qq <= 2220 ? 4 : 8192 <= qq && qq <= 8204 ? 256 : 64336 <= qq && qq <= 65023 ? 4 : 1
    }
    const HE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class oE {
      get dir() {
        return this.level % 2 ? BE : uE
      }
      constructor(qq, Eq, gq) {
        this.from = qq, this.to = Eq, this.level = gq
      }
      side(qq, Eq) {
        return this.dir == Eq == qq ? this.to : this.from
      }
      forward(qq, Eq) {
        return qq == (this.dir == Eq)
      }
      static find(qq, Eq, gq, Yq) {
        let lq = -1;
        for (let Oq = 0; Oq < qq.length; Oq++) {
          let mq = qq[Oq];
          if (mq.from <= Eq && mq.to >= Eq) {
            if (mq.level == gq) return Oq;
            (lq < 0 || (0 != Yq ? Yq < 0 ? mq.from < Eq : mq.to > Eq : qq[lq].level > mq.level)) && (lq = Oq)
          }
        }
        if (lq < 0) throw new RangeError("Index out of range");
        return lq
      }
    }

    function PE(qq, Eq) {
      if (qq.length != Eq.length) return !1;
      for (let gq = 0; gq < qq.length; gq++) {
        let Yq = qq[gq],
          lq = Eq[gq];
        if (Yq.from != lq.from || Yq.to != lq.to || Yq.direction != lq.direction || !PE(Yq.inner, lq.inner)) return !1
      }
      return !0
    }
    const QE = [];

    function yE(qq, Eq, gq, Yq, lq, Oq, mq) {
      let xq = Yq % 2 ? 2 : 1;
      if (Yq % 2 == lq % 2)
        for (let Aq = Eq, cq = 0; Aq < gq;) {
          let Eq = !0,
            uq = !1;
          if (cq == Oq.length || Aq < Oq[cq].from) {
            let qq = QE[Aq];
            qq != xq && (Eq = !1, uq = 16 == qq)
          }
          let Bq = Eq || 1 != xq ? null : [],
            Wq = Eq ? Yq : Yq + 1,
            Nq = Aq;
          qq: for (;;)
            if (cq < Oq.length && Nq == Oq[cq].from) {
              if (uq) break qq;
              let aq = Oq[cq];
              if (!Eq)
                for (let qq = aq.to, Eq = cq + 1;;) {
                  if (qq == gq) break qq;
                  if (!(Eq < Oq.length && Oq[Eq].from == qq)) {
                    if (QE[qq] == xq) break qq;
                    break
                  }
                  qq = Oq[Eq++].to
                }
              if (cq++, Bq) Bq.push(aq);
              else {
                aq.from > Aq && mq.push(new oE(Aq, aq.from, Wq)), tE(qq, aq.direction == uE != !(Wq % 2) ? Yq + 1 : Yq, lq, aq.inner, aq.from, aq.to, mq), Aq = aq.to
              }
              Nq = aq.to
            } else {
              if (Nq == gq || (Eq ? QE[Nq] != xq : QE[Nq] == xq)) break;
              Nq++
            } Bq ? yE(qq, Aq, Nq, Yq + 1, lq, Bq, mq) : Aq < Nq && mq.push(new oE(Aq, Nq, Wq)), Aq = Nq
        } else
          for (let Aq = gq, cq = Oq.length; Aq > Eq;) {
            let gq = !0,
              uq = !1;
            if (!cq || Aq > Oq[cq - 1].to) {
              let qq = QE[Aq - 1];
              qq != xq && (gq = !1, uq = 16 == qq)
            }
            let Bq = gq || 1 != xq ? null : [],
              Wq = gq ? Yq : Yq + 1,
              Nq = Aq;
            qq: for (;;)
              if (cq && Nq == Oq[cq - 1].to) {
                if (uq) break qq;
                let aq = Oq[--cq];
                if (!gq)
                  for (let qq = aq.from, gq = cq;;) {
                    if (qq == Eq) break qq;
                    if (!gq || Oq[gq - 1].to != qq) {
                      if (QE[qq - 1] == xq) break qq;
                      break
                    }
                    qq = Oq[--gq].from
                  }
                if (Bq) Bq.push(aq);
                else {
                  aq.to < Aq && mq.push(new oE(aq.to, Aq, Wq)), tE(qq, aq.direction == uE != !(Wq % 2) ? Yq + 1 : Yq, lq, aq.inner, aq.from, aq.to, mq), Aq = aq.from
                }
                Nq = aq.from
              } else {
                if (Nq == Eq || (gq ? QE[Nq - 1] != xq : QE[Nq - 1] == xq)) break;
                Nq--
              } Bq ? yE(qq, Nq, Aq, Yq + 1, lq, Bq, mq) : Nq < Aq && mq.push(new oE(Nq, Aq, Wq)), Aq = Nq
          }
    }

    function tE(qq, Eq, gq, Yq, lq, Oq, mq) {
      let xq = Eq % 2 ? 2 : 1;
      ! function(qq, Eq, gq, Yq, lq) {
        for (let Oq = 0; Oq <= Yq.length; Oq++) {
          let mq = Oq ? Yq[Oq - 1].to : Eq,
            xq = Oq < Yq.length ? Yq[Oq].from : gq,
            Aq = Oq ? 256 : lq;
          for (let Eq = mq, gq = Aq, Yq = Aq; Eq < xq; Eq++) {
            let lq = jE(qq.charCodeAt(Eq));
            512 == lq ? lq = gq : 8 == lq && 4 == Yq && (lq = 16), QE[Eq] = 4 == lq ? 2 : lq, 7 & lq && (Yq = lq), gq = lq
          }
          for (let qq = mq, Eq = Aq, Yq = Aq; qq < xq; qq++) {
            let lq = QE[qq];
            if (128 == lq) qq < xq - 1 && Eq == QE[qq + 1] && 24 & Eq ? lq = QE[qq] = Eq : QE[qq] = 256;
            else if (64 == lq) {
              let lq = qq + 1;
              for (; lq < xq && 64 == QE[lq];) lq++;
              let Oq = qq && 8 == Eq || lq < gq && 8 == QE[lq] ? 1 == Yq ? 1 : 8 : 256;
              for (let Eq = qq; Eq < lq; Eq++) QE[Eq] = Oq;
              qq = lq - 1
            } else 8 == lq && 1 == Yq && (QE[qq] = 1);
            Eq = lq, 7 & lq && (Yq = lq)
          }
        }
      }(qq, lq, Oq, Yq, xq),
      function(qq, Eq, gq, Yq, lq) {
        let Oq = 1 == lq ? 2 : 1;
        for (let mq = 0, xq = 0, Aq = 0; mq <= Yq.length; mq++) {
          let cq = mq ? Yq[mq - 1].to : Eq,
            uq = mq < Yq.length ? Yq[mq].from : gq;
          for (let Eq, gq, Yq, mq = cq; mq < uq; mq++)
            if (gq = VE[Eq = qq.charCodeAt(mq)])
              if (gq < 0) {
                for (let qq = xq - 3; qq >= 0; qq -= 3)
                  if (dE[qq + 1] == -gq) {
                    let Eq = dE[qq + 2],
                      gq = 2 & Eq ? lq : 4 & Eq ? 1 & Eq ? Oq : lq : 0;
                    gq && (QE[mq] = QE[dE[qq]] = gq), xq = qq;
                    break
                  }
              } else {
                if (189 == dE.length) break;
                dE[xq++] = mq, dE[xq++] = Eq, dE[xq++] = Aq
              }
          else if (2 == (Yq = QE[mq]) || 1 == Yq) {
            let qq = Yq == lq;
            Aq = qq ? 0 : 1;
            for (let Eq = xq - 3; Eq >= 0; Eq -= 3) {
              let gq = dE[Eq + 2];
              if (2 & gq) break;
              if (qq) dE[Eq + 2] |= 2;
              else {
                if (4 & gq) break;
                dE[Eq + 2] |= 4
              }
            }
          }
        }
      }(qq, lq, Oq, Yq, xq),
      function(qq, Eq, gq, Yq) {
        for (let lq = 0, Oq = Yq; lq <= gq.length; lq++) {
          let mq = lq ? gq[lq - 1].to : qq,
            xq = lq < gq.length ? gq[lq].from : Eq;
          for (let Aq = mq; Aq < xq;) {
            let mq = QE[Aq];
            if (256 == mq) {
              let mq = Aq + 1;
              for (;;)
                if (mq == xq) {
                  if (lq == gq.length) break;
                  mq = gq[lq++].to, xq = lq < gq.length ? gq[lq].from : Eq
                } else {
                  if (256 != QE[mq]) break;
                  mq++
                } let cq = 1 == Oq,
                uq = cq == (1 == (mq < Eq ? QE[mq] : Yq)) ? cq ? 1 : 2 : Yq;
              for (let Eq = mq, Yq = lq, Oq = Yq ? gq[Yq - 1].to : qq; Eq > Aq;) Eq == Oq && (Eq = gq[--Yq].from, Oq = Yq ? gq[Yq - 1].to : qq), QE[--Eq] = uq;
              Aq = mq
            } else Oq = mq, Aq++
          }
        }
      }(lq, Oq, Yq, xq), yE(qq, lq, Oq, Eq, gq, Yq, mq)
    }

    function rE(qq, Eq, gq) {
      if (!qq) return [new oE(0, 0, Eq == BE ? 1 : 0)];
      if (Eq == uE && !gq.length && !HE.test(qq)) return vE(qq.length);
      if (gq.length)
        for (; qq.length > QE.length;) QE[QE.length] = 256;
      let Yq = [],
        lq = Eq == uE ? 0 : 1;
      return tE(qq, lq, lq, gq, 0, qq.length, Yq), Yq
    }

    function vE(qq) {
      return [new oE(0, qq, 0)]
    }
    let hE = "";

    function nE(qq, Eq, gq, lq, Oq) {
      var mq;
      let xq = lq.head - qq.from,
        Aq = oE.find(Eq, xq, null !== (mq = lq.bidiLevel) && void 0 !== mq ? mq : -1, lq.assoc),
        cq = Eq[Aq],
        uq = cq.side(Oq, gq);
      if (xq == uq) {
        let qq = Aq += Oq ? 1 : -1;
        if (qq < 0 || qq >= Eq.length) return null;
        cq = Eq[Aq = qq], xq = cq.side(!Oq, gq), uq = cq.side(Oq, gq)
      }
      let Bq = (0, Yq.$)(qq.text, xq, cq.forward(Oq, gq));
      (Bq < cq.from || Bq > cq.to) && (Bq = uq), hE = qq.text.slice(Math.min(xq, Bq), Math.max(xq, Bq));
      let Wq = Aq == (Oq ? Eq.length - 1 : 0) ? null : Eq[Aq + (Oq ? 1 : -1)];
      return Wq && Bq == uq && Wq.level + (Oq ? 0 : 1) < cq.level ? Yq.q.cursor(Wq.side(!Oq, gq) + qq.from, Wq.forward(Oq, gq) ? 1 : -1, Wq.level) : Yq.q.cursor(Bq + qq.from, cq.forward(Oq, gq) ? -1 : 1, cq.level)
    }

    function bE(qq, Eq, gq) {
      for (let Yq = Eq; Yq < gq; Yq++) {
        let Eq = jE(qq.charCodeAt(Yq));
        if (1 == Eq) return uE;
        if (2 == Eq || 4 == Eq) return BE
      }
      return uE
    }
    const iE = Yq.x.define(),
      ZE = Yq.x.define(),
      fE = Yq.x.define(),
      ME = Yq.x.define(),
      TE = Yq.x.define(),
      zE = Yq.x.define(),
      SE = Yq.x.define(),
      pE = Yq.x.define(),
      GE = Yq.x.define(),
      LE = Yq.x.define({
        combine: qq => qq.some((qq => qq))
      }),
      JE = Yq.x.define({
        combine: qq => qq.some((qq => qq))
      }),
      kE = Yq.x.define();
    class RE {
      constructor(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = qq, this.y = Eq, this.x = gq, this.yMargin = Yq, this.xMargin = lq, this.isSnapshot = Oq
      }
      map(qq) {
        return qq.empty ? this : new RE(this.range.map(qq), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(qq) {
        return this.range.to <= qq.doc.length ? this : new RE(Yq.q.cursor(qq.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const UE = Yq.J.define({
        map: (qq, Eq) => qq.map(Eq)
      }),
      FE = Yq.J.define();

    function sE(qq, Eq, gq) {
      let Yq = qq.facet(ME);
      Yq.length ? Yq[0](Eq) : window.onerror && window.onerror(String(Eq), gq, void 0, void 0, Eq) || (gq ? console.error(gq + ":", Eq) : console.error(Eq))
    }
    const XE = Yq.x.define({
      combine: qq => !qq.length || qq[0]
    });
    let wE = 0;
    const KE = Yq.x.define({
      combine: qq => qq.filter(((Eq, gq) => {
        for (let Yq = 0; Yq < gq; Yq++)
          if (qq[Yq].plugin == Eq.plugin) return !1;
        return !0
      }))
    });
    class CE {
      constructor(qq, Eq, gq, Yq, lq) {
        this.id = qq, this.create = Eq, this.domEventHandlers = gq, this.domEventObservers = Yq, this.baseExtensions = lq(this), this.extension = this.baseExtensions.concat(KE.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(qq) {
        return this.baseExtensions.concat(KE.of({
          plugin: this,
          arg: qq
        }))
      }
      static define(qq, Eq) {
        const {
          eventHandlers: gq,
          eventObservers: Yq,
          provide: lq,
          YO: Oq
        } = Eq || {};
        return new CE(wE++, qq, gq, Yq, (qq => {
          let Eq = [];
          return Oq && Eq.push(qg.of((Eq => {
            let gq = Eq.plugin(qq);
            return gq ? Oq(gq) : fq.none
          }))), lq && Eq.push(lq(qq)), Eq
        }))
      }
      static fromClass(qq, Eq) {
        return CE.define(((Eq, gq) => new qq(Eq, gq)), Eq)
      }
    }
    class IE {
      constructor(qq) {
        this.spec = qq, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(qq) {
        if (this.value) {
          if (this.mustUpdate) {
            let qq = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(qq)
            } catch (Eq) {
              if (sE(qq.state, Eq, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (gq) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(qq, this.spec.arg)
        } catch (Eq) {
          sE(qq.state, Eq, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(qq) {
        var Eq;
        if (null === (Eq = this.value) || void 0 === Eq ? void 0 : Eq.destroy) try {
          this.value.destroy()
        } catch (gq) {
          sE(qq.state, gq, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const eE = Yq.x.define(),
      DE = Yq.x.define(),
      qg = Yq.x.define(),
      Eg = Yq.x.define(),
      gg = Yq.x.define(),
      Yg = Yq.x.define(),
      lg = Yq.x.define();

    function Og(qq, Eq) {
      let gq = qq.state.facet(lg);
      if (!gq.length) return gq;
      let lq = gq.map((Eq => Eq instanceof Function ? Eq(qq) : Eq)),
        Oq = [];
      return Yq.G.spans(lq, Eq.from, Eq.to, {
        point() {},
        span(qq, gq, Yq, lq) {
          let mq = qq - Eq.from,
            xq = gq - Eq.from,
            Aq = Oq;
          for (let Oq = Yq.length - 1; Oq >= 0; Oq--, lq--) {
            let qq, gq = Yq[Oq].spec.bidiIsolate;
            if (null == gq && (gq = bE(Eq.text, mq, xq)), lq > 0 && Aq.length && (qq = Aq[Aq.length - 1]).to == mq && qq.direction == gq) qq.to = xq, Aq = qq.inner;
            else {
              let qq = {
                from: mq,
                to: xq,
                direction: gq,
                inner: []
              };
              Aq.push(qq), Aq = qq.inner
            }
          }
        }
      }), Oq
    }
    const mg = Yq.x.define();

    function xg(qq) {
      let Eq = 0,
        gq = 0,
        Yq = 0,
        lq = 0;
      for (let Oq of qq.state.facet(mg)) {
        let mq = Oq(qq);
        mq && (null != mq.left && (Eq = Math.max(Eq, mq.left)), null != mq.right && (gq = Math.max(gq, mq.right)), null != mq.top && (Yq = Math.max(Yq, mq.top)), null != mq.bottom && (lq = Math.max(lq, mq.bottom)))
      }
      return {
        left: Eq,
        right: gq,
        top: Yq,
        bottom: lq
      }
    }
    const Ag = Yq.x.define();
    class cg {
      constructor(qq, Eq, gq, Yq) {
        this.fromA = qq, this.toA = Eq, this.fromB = gq, this.toB = Yq
      }
      join(qq) {
        return new cg(Math.min(this.fromA, qq.fromA), Math.max(this.toA, qq.toA), Math.min(this.fromB, qq.fromB), Math.max(this.toB, qq.toB))
      }
      addToSet(qq) {
        let Eq = qq.length,
          gq = this;
        for (; Eq > 0; Eq--) {
          let Yq = qq[Eq - 1];
          if (!(Yq.fromA > gq.toA)) {
            if (Yq.toA < gq.fromA) break;
            gq = gq.join(Yq), qq.splice(Eq - 1, 1)
          }
        }
        return qq.splice(Eq, 0, gq), qq
      }
      static extendWithRanges(qq, Eq) {
        if (0 == Eq.length) return qq;
        let gq = [];
        for (let Yq = 0, lq = 0, Oq = 0;;) {
          let mq = Yq < qq.length ? qq[Yq].fromB : 1e9,
            xq = lq < Eq.length ? Eq[lq] : 1e9,
            Aq = Math.min(mq, xq);
          if (1e9 == Aq) break;
          let cq = Aq + Oq,
            uq = Aq,
            Bq = cq;
          for (;;)
            if (lq < Eq.length && Eq[lq] <= uq) {
              let gq = Eq[lq + 1];
              lq += 2, uq = Math.max(uq, gq);
              for (let Eq = Yq; Eq < qq.length && qq[Eq].fromB <= uq; Eq++) Oq = qq[Eq].toA - qq[Eq].toB;
              Bq = Math.max(Bq, gq + Oq)
            } else {
              if (!(Yq < qq.length && qq[Yq].fromB <= uq)) break;
              {
                let Eq = qq[Yq++];
                uq = Math.max(uq, Eq.toB), Bq = Math.max(Bq, Eq.toA), Oq = Eq.toA - Eq.toB
              }
            } gq.push(new cg(cq, Bq, Aq, uq))
        }
        return gq
      }
    }
    class ug {
      constructor(qq, Eq, gq) {
        this.view = qq, this.state = Eq, this.transactions = gq, this.flags = 0, this.startState = qq.state, this.changes = Yq.ChangeSet.empty(this.startState.doc.length);
        for (let Yq of gq) this.changes = this.changes.compose(Yq.changes);
        let lq = [];
        this.changes.iterChangedRanges(((qq, Eq, gq, Yq) => lq.push(new cg(qq, Eq, gq, Yq)))), this.changedRanges = lq
      }
      static create(qq, Eq, gq) {
        return new ug(qq, Eq, gq)
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
        return this.transactions.some((qq => qq.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Bg = [];
    class Wg {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = qq, this.length = Eq, this.flags = gq, this.parent = null, qq.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Bg
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
      sync(qq) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let qq = this.domAttrs;
          qq && function(qq, Eq) {
            for (let gq = qq.attributes.length - 1; gq >= 0; gq--) {
              let Yq = qq.attributes[gq].name;
              null == Eq[Yq] && qq.removeAttribute(Yq)
            }
            for (let gq in Eq) {
              let Yq = Eq[gq];
              "style" == gq ? qq.style.cssText = Yq : qq.getAttribute(gq) != Yq && qq.setAttribute(gq, Yq)
            }
          }(this.dom, qq)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(qq) {
        this.dom = qq, qq.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let gq of this.children) {
          if (gq == qq) return Eq;
          Eq += gq.length + gq.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(qq) {
        return this.posBefore(qq) + qq.length
      }
      covers(qq) {
        return !0
      }
      coordsIn(qq, Eq) {
        return null
      }
      domPosFor(qq, Eq) {
        let gq = Fq(this.dom),
          Yq = this.length ? qq > 0 : Eq > 0;
        return new AE(this.parent.dom, gq + (Yq ? 1 : 0), 0 == qq || qq == this.length)
      }
      markDirty(qq) {
        this.flags &= -3, qq && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let qq = this; qq; qq = qq.parent)
          if (qq instanceof Vg) return qq;
        return null
      }
      static get(qq) {
        return qq.cmTile
      }
    }
    class Ng extends Wg {
      constructor(qq) {
        super(qq, 0), this._children = []
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
      append(qq) {
        this.children.push(qq), qq.parent = this
      }
      sync(qq) {
        if (2 & this.flags) return;
        super.sync(qq);
        let Eq, gq = this.dom,
          Yq = null,
          lq = (null === qq || void 0 === qq ? void 0 : qq.node) == gq ? qq : null,
          Oq = 0;
        for (let mq of this.children) {
          if (mq.sync(qq), Oq += mq.length + mq.breakAfter, Eq = Yq ? Yq.nextSibling : gq.firstChild, lq && Eq != mq.dom && (lq.written = !0), mq.dom.parentNode == gq)
            for (; Eq && Eq != mq.dom;) Eq = ag(Eq);
          else gq.insertBefore(mq.dom, Eq);
          Yq = mq.dom
        }
        for (Eq = Yq ? Yq.nextSibling : gq.firstChild, lq && Eq && (lq.written = !0); Eq;) Eq = ag(Eq);
        this.length = Oq
      }
    }

    function ag(qq) {
      let Eq = qq.nextSibling;
      return qq.parentNode.removeChild(qq), Eq
    }
    class Vg extends Ng {
      constructor(qq, Eq) {
        super(Eq), this.view = qq
      }
      owns(qq) {
        for (; qq; qq = qq.parent)
          if (qq == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(qq) {
        for (;;) {
          if (!qq) return null;
          let Eq = Wg.get(qq);
          if (Eq && this.owns(Eq)) return Eq;
          qq = qq.parentNode
        }
      }
      blockTiles(qq) {
        for (let Eq = [], gq = this, Yq = 0, lq = 0;;)
          if (Yq == gq.children.length) {
            if (!Eq.length) return;
            gq = gq.parent, gq.breakAfter && lq++, Yq = Eq.pop()
          } else {
            let Oq = gq.children[Yq++];
            if (Oq instanceof dg) Eq.push(Yq), gq = Oq, Yq = 0;
            else {
              let Eq = lq + Oq.length,
                gq = qq(Oq, lq);
              if (void 0 !== gq) return gq;
              lq = Eq + Oq.breakAfter
            }
          }
      }
      resolveBlock(qq, Eq) {
        let gq, Yq, lq = -1,
          Oq = -1;
        if (this.blockTiles(((mq, xq) => {
            let Aq = xq + mq.length;
            if (qq >= xq && qq <= Aq) {
              if (mq.isWidget() && Eq >= -1 && Eq <= 1) {
                if (32 & mq.flags) return !0;
                16 & mq.flags && (gq = void 0)
              }(xq < qq || qq == Aq && (Eq < -1 ? mq.length : mq.covers(1))) && (!gq || !mq.isWidget() && gq.isWidget()) && (gq = mq, lq = qq - xq), (Aq > qq || qq == xq && (Eq > 1 ? mq.length : mq.covers(-1))) && (!Yq || !mq.isWidget() && Yq.isWidget()) && (Yq = mq, Oq = qq - xq)
            }
          })), !gq && !Yq) throw new Error("No tile at position " + qq);
        return gq && Eq < 0 || !Yq ? {
          tile: gq,
          offset: lq
        } : {
          tile: Yq,
          offset: Oq
        }
      }
    }
    class dg extends Ng {
      constructor(qq, Eq) {
        super(qq), this.wrapper = Eq
      }
      isBlock() {
        return !0
      }
      covers(qq) {
        return !!this.children.length && (qq < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (qq, Eq) {
        let gq = new dg(Eq || document.createElement(qq.tagName), qq);
        return Eq || (gq.flags |= 4), gq
      }
    }
    class jg extends Ng {
      constructor(qq, Eq) {
        super(qq), this.attrs = Eq
      }
      isLine() {
        return !0
      }
      static start(qq, Eq, gq) {
        let Yq = new jg(Eq || document.createElement("div"), qq);
        return Eq && gq || (Yq.flags |= 4), Yq
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(qq, Eq, gq) {
        let Yq = null,
          lq = -1,
          Oq = null,
          mq = -1;
        ! function qq(xq, Aq) {
          for (let cq = 0, uq = 0; cq < xq.children.length && uq <= Aq; cq++) {
            let Bq = xq.children[cq],
              Wq = uq + Bq.length;
            Wq >= Aq && (Bq.isComposite() ? qq(Bq, Aq - uq) : (!Oq || Oq.isHidden && (Eq > 0 || gq && Hg(Oq, Bq))) && (Wq > Aq || 32 & Bq.flags) ? (Oq = Bq, mq = Aq - uq) : (uq < Aq || 16 & Bq.flags && !Bq.isHidden) && (Yq = Bq, lq = Aq - uq)), uq = Wq
          }
        }(this, qq);
        let xq = (Eq < 0 ? Yq : Oq) || Yq || Oq;
        return xq ? {
          tile: xq,
          offset: xq == Yq ? lq : mq
        } : null
      }
      coordsIn(qq, Eq) {
        let gq = this.resolveInline(qq, Eq, !0);
        return gq ? gq.tile.coordsIn(Math.max(0, gq.offset), Eq) : function(qq) {
          let Eq = qq.dom.lastChild;
          if (!Eq) return qq.dom.getBoundingClientRect();
          let gq = Rq(Eq);
          return gq[gq.length - 1] || null
        }(this)
      }
      domIn(qq, Eq) {
        let gq = this.resolveInline(qq, Eq);
        if (gq) {
          let {
            tile: qq,
            offset: Yq
          } = gq;
          if (this.dom.contains(qq.dom)) return qq.isText() ? new AE(qq.dom, Math.min(qq.dom.nodeValue.length, Yq)) : qq.domPosFor(Yq, 16 & qq.flags ? 1 : 32 & qq.flags ? -1 : Eq);
          let lq = gq.tile.parent,
            Oq = !1;
          for (let Eq of lq.children) {
            if (Oq) return new AE(Eq.dom, 0);
            Eq == gq.tile && (Oq = !0)
          }
        }
        return new AE(this.dom, 0)
      }
    }

    function Hg(qq, Eq) {
      let gq = qq.coordsIn(0, 1),
        Yq = Eq.coordsIn(0, 1);
      return gq && Yq && Yq.top < gq.bottom
    }
    class og extends Ng {
      constructor(qq, Eq) {
        super(qq), this.mark = Eq
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (qq, Eq) {
        let gq = new og(Eq || document.createElement(qq.tagName), qq);
        return Eq || (gq.flags |= 4), gq
      }
    }
    class Pg extends Wg {
      constructor(qq, Eq) {
        super(qq, Eq.length), this.text = Eq
      }
      sync(qq) {
        2 & this.flags || (super.sync(qq), this.dom.nodeValue != this.text && (qq && qq.node == this.dom && (qq.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(qq, Eq) {
        let gq = this.dom.nodeValue.length;
        qq > gq && (qq = gq);
        let Yq = qq,
          lq = qq,
          Oq = 0;
        0 == qq && Eq < 0 || qq == gq && Eq >= 0 ? tq.chrome || tq.gecko || (qq ? (Yq--, Oq = 1) : lq < gq && (lq++, Oq = -1)) : Eq < 0 ? Yq-- : lq < gq && lq++;
        let mq = YE(this.dom, Yq, lq).getClientRects();
        if (!mq.length) return null;
        let xq = mq[(Oq ? Oq < 0 : Eq >= 0) ? 0 : mq.length - 1];
        return tq.safari && !Oq && 0 == xq.width && (xq = Array.prototype.find.call(mq, (qq => qq.width)) || xq), Oq ? Kq(xq, Oq < 0) : xq || null
      }
      static of (qq, Eq) {
        let gq = new Pg(Eq || document.createTextNode(qq), qq);
        return Eq || (gq.flags |= 2), gq
      }
    }
    class Qg extends Wg {
      constructor(qq, Eq, gq, Yq) {
        super(qq, Eq, Yq), this.widget = gq
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(qq) {
        return !(48 & this.flags) && (this.flags & (qq < 0 ? 64 : 128)) > 0
      }
      coordsIn(qq, Eq) {
        return this.coordsInWidget(qq, Eq, !1)
      }
      coordsInWidget(qq, Eq, gq) {
        let Yq = this.widget.coordsAt(this.dom, qq, Eq);
        if (Yq) return Yq;
        if (gq) return Kq(this.dom.getBoundingClientRect(), this.length ? 0 == qq : Eq <= 0);
        {
          let Eq = this.dom.getClientRects(),
            gq = null;
          if (!Eq.length) return null;
          let Yq = !!(16 & this.flags) || !(32 & this.flags) && qq > 0;
          for (let lq = Yq ? Eq.length - 1 : 0; gq = Eq[lq], !(qq > 0 ? 0 == lq : lq == Eq.length - 1 || gq.top < gq.bottom); lq += Yq ? -1 : 1);
          return Kq(gq, !Yq)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Yq.O.empty;
        let {
          root: qq
        } = this;
        if (!qq) return Yq.O.empty;
        let Eq = this.posAtStart;
        return qq.view.state.doc.slice(Eq, Eq + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (qq, Eq, gq, Yq, lq) {
        return lq || (lq = qq.toDOM(Eq), qq.editable || (lq.contentEditable = "false")), new Qg(lq, gq, qq, Yq)
      }
    }
    class yg extends Wg {
      constructor(qq) {
        let Eq = document.createElement("img");
        Eq.className = "cm-widgetBuffer", Eq.setAttribute("aria-hidden", "true"), super(Eq, 0, qq)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Yq.O.empty
      }
      coordsIn(qq) {
        return this.dom.getBoundingClientRect()
      }
    }
    class tg {
      constructor(qq) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = qq
      }
      advance(qq, Eq, gq) {
        let {
          tile: Yq,
          index: lq,
          beforeBreak: Oq,
          parents: mq
        } = this;
        for (; qq || Eq > 0;)
          if (Yq.isComposite())
            if (Oq) {
              if (!qq) break;
              gq && gq.break(), qq--, Oq = !1
            } else if (lq == Yq.children.length) {
          if (!qq && !mq.length) break;
          gq && gq.leave(Yq), Oq = !!Yq.breakAfter, ({
            tile: Yq,
            index: lq
          } = mq.pop()), lq++
        } else {
          let xq = Yq.children[lq],
            Aq = xq.breakAfter;
          !(Eq > 0 ? xq.length <= qq : xq.length < qq) || gq && !1 === gq.skip(xq, 0, xq.length) && xq.isComposite ? (mq.push({
            tile: Yq,
            index: lq
          }), Yq = xq, lq = 0, gq && xq.isComposite() && gq.enter(xq)) : (Oq = !!Aq, lq++, qq -= xq.length)
        } else if (lq == Yq.length) Oq = !!Yq.breakAfter, ({
          tile: Yq,
          index: lq
        } = mq.pop()), lq++;
        else {
          if (!qq) break;
          {
            let Eq = Math.min(qq, Yq.length - lq);
            gq && gq.skip(Yq, lq, lq + Eq), qq -= Eq, lq += Eq
          }
        }
        return this.tile = Yq, this.index = lq, this.beforeBreak = Oq, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class rg {
      constructor(qq, Eq, gq, Yq) {
        this.from = qq, this.to = Eq, this.wrapper = gq, this.rank = Yq
      }
    }
    class vg {
      constructor(qq, Eq, gq) {
        this.cache = qq, this.root = Eq, this.blockWrappers = gq, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(qq, Eq, gq, Yq) {
        var lq;
        this.flushBuffer();
        let Oq = this.ensureMarks(Eq, gq),
          mq = Oq.lastChild;
        if (mq && mq.isText() && !(8 & mq.flags) && mq.length + qq.length < 512) {
          this.cache.reused.set(mq, 2), (Oq.children[Oq.children.length - 1] = new Pg(mq.dom, mq.text + qq)).parent = Oq
        } else Oq.append(Yq || Pg.of(qq, null === (lq = this.cache.find(Pg)) || void 0 === lq ? void 0 : lq.dom));
        this.pos += qq.length, this.afterWidget = null
      }
      addComposition(qq, Eq) {
        let gq = this.curLine;
        gq.dom != Eq.line.dom && (gq.setDOM(this.cache.reused.has(Eq.line) ? Mg(Eq.line.dom) : Eq.line.dom), this.cache.reused.set(Eq.line, 2));
        let Yq = gq;
        for (let mq = Eq.marks.length - 1; mq >= 0; mq--) {
          let qq = Eq.marks[mq],
            gq = Yq.lastChild;
          if (gq instanceof og && gq.mark.eq(qq.mark)) gq.dom != qq.dom && gq.setDOM(Mg(qq.dom)), Yq = gq;
          else {
            if (this.cache.reused.get(qq)) {
              let Eq = Wg.get(qq.dom);
              Eq && Eq.setDOM(Mg(qq.dom))
            }
            let Eq = og.of(qq.mark, qq.dom);
            Yq.append(Eq), Yq = Eq
          }
          this.cache.reused.set(qq, 2)
        }
        let lq = Wg.get(qq.text);
        lq && this.cache.reused.set(lq, 2);
        let Oq = new Pg(qq.text, qq.text.nodeValue);
        Oq.flags |= 8, Yq.append(Oq)
      }
      addInlineWidget(qq, Eq, gq) {
        let Yq = this.afterWidget && 48 & qq.flags && (48 & this.afterWidget.flags) == (48 & qq.flags);
        Yq || this.flushBuffer();
        let lq = this.ensureMarks(Eq, gq);
        Yq || 16 & qq.flags || lq.append(this.getBuffer(1)), lq.append(qq), this.pos += qq.length, this.afterWidget = qq
      }
      addMark(qq, Eq, gq) {
        this.flushBuffer(), this.ensureMarks(Eq, gq).append(qq), this.pos += qq.length, this.afterWidget = null
      }
      addBlockWidget(qq) {
        this.getBlockPos().append(qq), this.pos += qq.length, this.lastBlock = qq, this.endLine()
      }
      continueWidget(qq) {
        (this.afterWidget || this.lastBlock).length += qq, this.pos += qq
      }
      addLineStart(qq, Eq) {
        var gq;
        qq || (qq = fg);
        let Yq = jg.start(qq, Eq || (null === (gq = this.cache.find(jg)) || void 0 === gq ? void 0 : gq.dom), !!Eq);
        this.getBlockPos().append(this.lastBlock = this.curLine = Yq)
      }
      addLine(qq) {
        this.getBlockPos().append(qq), this.pos += qq.length, this.lastBlock = qq, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(qq) {
        this.blockPosCovered() || this.addLineStart(qq)
      }
      ensureLine(qq) {
        this.curLine || this.addLineStart(qq)
      }
      ensureMarks(qq, Eq) {
        var gq;
        let Yq = this.curLine;
        for (let lq = qq.length - 1; lq >= 0; lq--) {
          let Oq, mq = qq[lq];
          if (Eq > 0 && (Oq = Yq.lastChild) && Oq instanceof og && Oq.mark.eq(mq)) Yq = Oq, Eq--;
          else {
            let qq = og.of(mq, null === (gq = this.cache.find(og, (qq => qq.mark.eq(mq)))) || void 0 === gq ? void 0 : gq.dom);
            Yq.append(qq), Yq = qq, Eq = 0
          }
        }
        return Yq
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let qq = this.curLine.lastChild;
          qq && Zg(this.curLine, !1) && ("BR" == qq.dom.nodeName || !qq.isWidget() || tq.ios && Zg(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(zg, 0, 32) || new Qg(zg.toDOM(), 0, zg, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let qq = this.wrappers.length - 1; qq >= 0; qq--) this.wrappers[qq].to < this.pos && this.wrappers.splice(qq, 1);
        for (let qq = this.blockWrappers; qq.value && qq.from <= this.pos; qq.next())
          if (qq.to >= this.pos) {
            let Eq = new rg(qq.from, qq.to, qq.value, qq.rank),
              gq = this.wrappers.length;
            for (; gq > 0 && (this.wrappers[gq - 1].rank - Eq.rank || this.wrappers[gq - 1].to - Eq.to) < 0;) gq--;
            this.wrappers.splice(gq, 0, Eq)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var qq;
        this.updateBlockWrappers();
        let Eq = this.root;
        for (let gq of this.wrappers) {
          let Yq = Eq.lastChild;
          if (gq.from < this.pos && Yq instanceof dg && Yq.wrapper.eq(gq.wrapper)) Eq = Yq;
          else {
            let Yq = dg.of(gq.wrapper, null === (qq = this.cache.find(dg, (qq => qq.wrapper.eq(gq.wrapper)))) || void 0 === qq ? void 0 : qq.dom);
            Eq.append(Yq), Eq = Yq
          }
        }
        return Eq
      }
      blockPosCovered() {
        let qq = this.lastBlock;
        return null != qq && !qq.breakAfter && (!qq.isWidget() || (160 & qq.flags) > 0)
      }
      getBuffer(qq) {
        let Eq = 2 | (qq < 0 ? 16 : 32),
          gq = this.cache.find(yg, void 0, 1);
        return gq && (gq.flags = Eq), gq || new yg(Eq)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class hg {
      constructor(qq) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = qq.iter()
      }
      skip(qq) {
        this.textOff + qq <= this.text.length ? this.textOff += qq : (this.skipCount += qq - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(qq) {
        if (this.textOff == this.text.length) {
          let {
            value: Eq,
            lineBreak: gq,
            done: Yq
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Yq) throw new Error("Ran out of text content when drawing inline views");
          this.text = Eq;
          let lq = this.textOff = Math.min(qq, Eq.length);
          return gq ? null : Eq.slice(0, lq)
        }
        let Eq = Math.min(this.text.length, this.textOff + qq),
          gq = this.text.slice(this.textOff, Eq);
        return this.textOff = Eq, gq
      }
    }
    const ng = [Qg, jg, Pg, og, yg, dg, Vg];
    for (let fm = 0; fm < ng.length; fm++) ng[fm].bucket = fm;
    class bg {
      constructor(qq) {
        this.view = qq, this.buckets = ng.map((() => [])), this.index = ng.map((() => 0)), this.reused = new Map
      }
      add(qq) {
        let Eq = qq.constructor.bucket,
          gq = this.buckets[Eq];
        gq.length < 6 ? gq.push(qq) : gq[this.index[Eq] = (this.index[Eq] + 1) % 6] = qq
      }
      find(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Yq = qq.bucket,
          lq = this.buckets[Yq],
          Oq = this.index[Yq];
        for (let mq = lq.length - 1; mq >= 0; mq--) {
          let qq = (mq + Oq) % lq.length,
            xq = lq[qq];
          if ((!Eq || Eq(xq)) && !this.reused.has(xq)) return lq.splice(qq, 1), qq < Oq && this.index[Yq]--, this.reused.set(xq, gq), xq
        }
        return null
      }
      findWidget(qq, Eq, gq) {
        let Yq = this.buckets[0];
        if (Yq.length)
          for (let lq = 0, Oq = 0;; lq++) {
            if (lq == Yq.length) {
              if (Oq) return null;
              Oq = 1, lq = 0
            }
            let mq = Yq[lq];
            if (!this.reused.has(mq) && (0 == Oq ? mq.widget.compare(qq) : mq.widget.constructor == qq.constructor && qq.updateDOM(mq.dom, this.view, mq.widget))) return Yq.splice(lq, 1), lq < this.index[0] && this.index[0]--, mq.widget == qq && mq.length == Eq && (497 & mq.flags) == gq ? (this.reused.set(mq, 1), mq) : (this.reused.set(mq, 2), new Qg(mq.dom, Eq, qq, -498 & mq.flags | gq))
          }
      }
      reuse(qq) {
        return this.reused.set(qq, 1), qq
      }
      maybeReuse(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(qq)) return this.reused.set(qq, Eq), qq.dom
      }
      clear() {
        for (let qq = 0; qq < this.buckets.length; qq++) this.buckets[qq].length = this.index[qq] = 0
      }
    }
    class ig {
      constructor(qq, Eq, gq, lq, Oq) {
        this.view = qq, this.YO = lq, this.disallowBlockEffectsFor = Oq, this.openWidget = !1, this.openMarks = 0, this.cache = new bg(qq), this.text = new hg(qq.state.doc), this.builder = new vg(this.cache, new Vg(qq, qq.contentDOM), Yq.G.iter(gq)), this.cache.reused.set(Eq, 2), this.old = new tg(Eq), this.reuseWalker = {
          skip: (qq, Eq, gq) => {
            if (this.cache.add(qq), qq.isComposite()) return !1
          },
          enter: qq => this.cache.add(qq),
          leave: () => {},
          break: () => {}
        }
      }
      run(qq, Eq) {
        let gq = Eq && this.getCompositionContext(Eq.text);
        for (let Yq = 0, lq = 0, Oq = 0;;) {
          let mq = Oq < qq.length ? qq[Oq++] : null,
            xq = mq ? mq.fromA : this.old.root.length;
          if (xq > Yq) {
            let qq = xq - Yq;
            this.preserve(qq, !Oq, !mq), Yq = xq, lq += qq
          }
          if (!mq) break;
          Eq && mq.fromA <= Eq.range.fromA && mq.toA >= Eq.range.toA ? (this.forward(mq.fromA, Eq.range.fromA, Eq.range.fromA < Eq.range.toA ? 1 : -1), this.emit(lq, Eq.range.fromB), this.cache.clear(), this.builder.addComposition(Eq, gq), this.text.skip(Eq.range.toB - Eq.range.fromB), this.forward(Eq.range.fromA, mq.toA), this.emit(Eq.range.toB, mq.toB)) : (this.forward(mq.fromA, mq.toA), this.emit(lq, mq.toB)), lq = mq.toB, Yq = mq.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(qq, Eq, gq) {
        let Yq = function(qq) {
            let Eq = [];
            for (let gq = qq.parents.length; gq > 1; gq--) {
              let Yq = gq == qq.parents.length ? qq.tile : qq.parents[gq].tile;
              Yq instanceof og && Eq.push(Yq.mark)
            }
            return Eq
          }(this.old),
          lq = this.openMarks;
        this.old.advance(qq, gq ? 1 : -1, {
          skip: (qq, Eq, gq) => {
            if (qq.isWidget())
              if (this.openWidget) this.builder.continueWidget(gq - Eq);
              else {
                let Oq = gq > 0 || Eq < qq.length ? Qg.of(qq.widget, this.view, gq - Eq, 496 & qq.flags, this.cache.maybeReuse(qq)) : this.cache.reuse(qq);
                256 & Oq.flags ? (Oq.flags &= -2, this.builder.addBlockWidget(Oq)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Oq, Yq, lq), lq = Yq.length)
              }
            else if (qq.isText()) this.builder.ensureLine(null), Eq || gq != qq.length || this.cache.reused.has(qq) ? (this.cache.add(qq), this.builder.addText(qq.text.slice(Eq, gq), Yq, lq)) : this.builder.addText(qq.text, Yq, lq, this.cache.reuse(qq)), lq = Yq.length;
            else if (qq.isLine()) qq.flags &= -2, this.cache.reused.set(qq, 1), this.builder.addLine(qq);
            else if (qq instanceof yg) this.cache.add(qq);
            else {
              if (!(qq instanceof og)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(qq, Yq, lq), this.cache.reused.set(qq, 1), lq = Yq.length
            }
            this.openWidget = !1
          },
          enter: qq => {
            qq.isLine() ? this.builder.addLineStart(qq.attrs, this.cache.maybeReuse(qq)) : (this.cache.add(qq), qq instanceof og && Yq.unshift(qq.mark)), this.openWidget = !1
          },
          leave: qq => {
            qq.isLine() ? Yq.length && (Yq.length = lq = 0) : qq instanceof og && (Yq.shift(), lq = Math.min(lq, Yq.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(qq)
      }
      emit(qq, Eq) {
        let gq = null,
          lq = this.builder,
          Oq = 0,
          mq = Yq.G.spans(this.YO, qq, Eq, {
            point: (qq, Eq, Yq, mq, xq, Aq) => {
              if (Yq instanceof zq) {
                if (this.disallowBlockEffectsFor[Aq]) {
                  if (Yq.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Eq > this.view.state.doc.lineAt(qq).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Oq = mq.length, xq > mq.length) lq.continueWidget(Eq - qq);
                else {
                  let Oq = Yq.widget || (Yq.block ? Tg.block : Tg.inline),
                    Aq = function(qq) {
                      let Eq = qq.isReplace ? (qq.startSide < 0 ? 64 : 0) | (qq.endSide > 0 ? 128 : 0) : qq.startSide > 0 ? 32 : 16;
                      qq.block && (Eq |= 256);
                      return Eq
                    }(Yq),
                    cq = this.cache.findWidget(Oq, Eq - qq, Aq) || Qg.of(Oq, this.view, Eq - qq, Aq);
                  Yq.block ? (Yq.startSide > 0 && lq.addLineStartIfNotCovered(gq), lq.addBlockWidget(cq)) : (lq.ensureLine(gq), lq.addInlineWidget(cq, mq, xq))
                }
                gq = null
              } else gq = function(qq, Eq) {
                let gq = Eq.spec.attributes,
                  Yq = Eq.spec.class;
                if (!gq && !Yq) return qq;
                qq || (qq = {
                  class: "cm-line"
                });
                gq && rq(gq, qq);
                Yq && (qq.class += " " + Yq);
                return qq
              }(gq, Yq);
              Eq > qq && this.text.skip(Eq - qq)
            },
            span: (qq, Eq, Yq, Oq) => {
              for (let mq = qq; mq < Eq;) {
                let xq = this.text.next(Math.min(512, Eq - mq));
                null == xq ? (lq.addLineStartIfNotCovered(gq), lq.addBreak(), mq++) : (lq.ensureLine(gq), lq.addText(xq, Yq, mq == qq ? Oq : Yq.length), mq += xq.length), gq = null
              }
            }
          });
        lq.addLineStartIfNotCovered(gq), this.openWidget = mq > Oq, this.openMarks = mq
      }
      forward(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Eq - qq <= 10 ? this.old.advance(Eq - qq, gq, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Eq - qq - 10, -1), this.old.advance(5, gq, this.reuseWalker))
      }
      getCompositionContext(qq) {
        let Eq = [],
          gq = null;
        for (let Yq = qq.parentNode;; Yq = Yq.parentNode) {
          let qq = Wg.get(Yq);
          if (Yq == this.view.contentDOM) break;
          qq instanceof og ? Eq.push(qq) : (null === qq || void 0 === qq ? void 0 : qq.isLine()) ? gq = qq : qq instanceof dg || ("DIV" != Yq.nodeName || gq || Yq == this.view.contentDOM ? gq || Eq.push(og.of(new Mq({
            tagName: Yq.nodeName.toLowerCase(),
            attributes: bq(Yq)
          }), Yq)) : gq = new jg(Yq, fg))
        }
        return {
          line: gq,
          marks: Eq
        }
      }
    }

    function Zg(qq, Eq) {
      let gq = qq => {
        for (let Yq of qq.children)
          if ((Eq ? Yq.isText() : Yq.length) || gq(Yq)) return !0;
        return !1
      };
      return gq(qq)
    }
    const fg = {
      class: "cm-line"
    };

    function Mg(qq) {
      let Eq = Wg.get(qq);
      return Eq && Eq.setDOM(qq.cloneNode()), qq
    }
    class Tg extends iq {
      constructor(qq) {
        super(), this.tag = qq
      }
      eq(qq) {
        return qq.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(qq) {
        return qq.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Tg.inline = new Tg("span"), Tg.block = new Tg("div");
    const zg = new class extends iq {
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
    class Sg {
      constructor(qq) {
        this.view = qq, this.YO = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = fq.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Vg(qq, qq.contentDOM), this.updateInner([new cg(0, 0, 0, qq.state.doc.length)], null)
      }
      update(qq) {
        var Eq;
        let gq = qq.changedRanges;
        this.minWidth > 0 && gq.length && (gq.every((qq => {
          let {
            fromA: Eq,
            toA: gq
          } = qq;
          return gq < this.minWidthFrom || Eq > this.minWidthTo
        })) ? (this.minWidthFrom = qq.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = qq.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(qq);
        let lq = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Eq = this.domChanged) || void 0 === Eq ? void 0 : Eq.newSel) ? lq = this.domChanged.newSel.head : function(qq, Eq) {
          let gq = !1;
          Eq && qq.iterChangedRanges(((qq, Yq) => {
            qq < Eq.to && Yq > Eq.from && (gq = !0)
          }));
          return gq
        }(qq.changes, this.hasComposition) || qq.selectionSet || (lq = qq.state.selection.main.head));
        let Oq = lq > -1 ? function(qq, Eq, gq) {
          let Yq = Gg(qq, gq);
          if (!Yq) return null;
          let {
            node: lq,
            from: Oq,
            to: mq
          } = Yq, xq = lq.nodeValue;
          if (/[\n\r]/.test(xq)) return null;
          if (qq.state.doc.sliceString(Yq.from, Yq.to) != xq) return null;
          let Aq = Eq.invertedDesc;
          return {
            range: new cg(Aq.mapPos(Oq), Aq.mapPos(mq), Oq, mq),
            text: lq
          }
        }(this.view, qq.changes, lq) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Eq,
            to: Yq
          } = this.hasComposition;
          gq = new cg(Eq, Yq, qq.changes.mapPos(Eq, -1), qq.changes.mapPos(Yq, 1)).addToSet(gq.slice())
        }
        this.hasComposition = Oq ? {
          from: Oq.range.fromB,
          to: Oq.range.toB
        } : null, (tq.ie || tq.chrome) && !Oq && qq && qq.state.doc.lines != qq.startState.doc.lines && (this.forceSelection = !0);
        let mq = this.YO,
          xq = this.blockWrappers;
        this.updateDeco();
        let Aq = function(qq, Eq, gq) {
          let lq = new Lg;
          return Yq.G.compare(qq, Eq, gq, lq), lq.changes
        }(mq, this.YO, qq.changes);
        Aq.length && (gq = cg.extendWithRanges(gq, Aq));
        let cq = function(qq, Eq, gq) {
          let lq = new Jg;
          return Yq.G.compare(qq, Eq, gq, lq), lq.changes
        }(xq, this.blockWrappers, qq.changes);
        return cq.length && (gq = cg.extendWithRanges(gq, cq)), Oq && !gq.some((qq => qq.fromA <= Oq.range.fromA && qq.toA >= Oq.range.toA)) && (gq = Oq.range.addToSet(gq.slice())), !(2 & this.tile.flags && 0 == gq.length) && (this.updateInner(gq, Oq), qq.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(qq, Eq) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: gq
        } = this.view;
        gq.ignore((() => {
          if (Eq || qq.length) {
            let gq = this.tile,
              Yq = new ig(this.view, gq, this.blockWrappers, this.YO, this.dynamicDecorationMap);
            Eq && Wg.get(Eq.text) && Yq.cache.reused.set(Wg.get(Eq.text), 2), this.tile = Yq.run(qq, Eq), pg(gq, Yq.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Yq = tq.chrome || tq.ios ? {
            node: gq.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Yq), !Yq || !Yq.written && gq.selectionRange.focusNode == Yq.node && this.tile.dom.contains(Yq.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Yq = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let lq of this.tile.children) lq.isWidget() && lq.widget instanceof kg && Yq.push(lq.dom);
        gq.updateGaps(Yq)
      }
      updateEditContextFormatting(qq) {
        this.editContextFormatting = this.editContextFormatting.map(qq.changes);
        for (let Eq of qq.transactions)
          for (let qq of Eq.effects) qq.is(FE) && (this.editContextFormatting = qq.value)
      }
      updateSelection() {
        let qq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Eq
        } = this.tile, gq = this.view.root.activeElement, Yq = gq == Eq, lq = !Yq && !(this.view.state.facet(XE) || Eq.tabIndex > -1) && kq(Eq, this.view.observer.selectionRange) && !(gq && Eq.contains(gq));
        if (!(Yq || qq || lq)) return;
        let Oq = this.forceSelection;
        this.forceSelection = !1;
        let mq, xq, Aq = this.view.state.selection.main;
        if (Aq.empty ? xq = mq = this.inlineDOMNearPos(Aq.anchor, Aq.assoc || 1) : (xq = this.inlineDOMNearPos(Aq.head, Aq.head == Aq.from ? 1 : -1), mq = this.inlineDOMNearPos(Aq.anchor, Aq.anchor == Aq.from ? 1 : -1)), tq.gecko && Aq.empty && !this.hasComposition && (1 == (cq = mq).node.nodeType && cq.node.firstChild && (0 == cq.offset || "false" == cq.node.childNodes[cq.offset - 1].contentEditable) && (cq.offset == cq.node.childNodes.length || "false" == cq.node.childNodes[cq.offset].contentEditable))) {
          let qq = document.createTextNode("");
          this.view.observer.ignore((() => mq.node.insertBefore(qq, mq.node.childNodes[mq.offset] || null))), mq = xq = new AE(qq, 0), Oq = !0
        }
        var cq;
        let uq = this.view.observer.selectionRange;
        !Oq && uq.focusNode && (Uq(mq.node, mq.offset, uq.anchorNode, uq.anchorOffset) && Uq(xq.node, xq.offset, uq.focusNode, uq.focusOffset) || this.suppressWidgetCursorChange(uq, Aq)) || (this.view.observer.ignore((() => {
          tq.android && tq.chrome && Eq.contains(uq.focusNode) && function(qq, Eq) {
            for (let gq = qq; gq && gq != Eq; gq = gq.assignedSlot || gq.parentNode)
              if (1 == gq.nodeType && "false" == gq.contentEditable) return !0;
            return !1
          }(uq.focusNode, Eq) && (Eq.blur(), Eq.focus({
            preventScroll: !0
          }));
          let qq = Lq(this.view.root);
          if (qq)
            if (Aq.empty) {
              if (tq.gecko) {
                let qq = (Yq = mq.node, Oq = mq.offset, 1 != Yq.nodeType ? 0 : (Oq && "false" == Yq.childNodes[Oq - 1].contentEditable ? 1 : 0) | (Oq < Yq.childNodes.length && "false" == Yq.childNodes[Oq].contentEditable ? 2 : 0));
                if (qq && 3 != qq) {
                  let Eq = (1 == qq ? mE : xE)(mq.node, mq.offset);
                  Eq && (mq = new AE(Eq.node, Eq.offset))
                }
              }
              qq.collapse(mq.node, mq.offset), null != Aq.bidiLevel && void 0 !== qq.caretBidiLevel && (qq.caretBidiLevel = Aq.bidiLevel)
            } else if (qq.extend) {
            qq.collapse(mq.node, mq.offset);
            try {
              qq.extend(xq.node, xq.offset)
            } catch (cq) {}
          } else {
            let Eq = document.createRange();
            Aq.anchor > Aq.head && ([mq, xq] = [xq, mq]), Eq.setEnd(xq.node, xq.offset), Eq.setStart(mq.node, mq.offset), qq.removeAllRanges(), qq.addRange(Eq)
          } else;
          var Yq, Oq;
          lq && this.view.root.activeElement == Eq && (Eq.blur(), gq && gq.focus())
        })), this.view.observer.setSelectionRange(mq, xq)), this.impreciseAnchor = mq.precise ? null : new AE(uq.anchorNode, uq.anchorOffset), this.impreciseHead = xq.precise ? null : new AE(uq.focusNode, uq.focusOffset)
      }
      suppressWidgetCursorChange(qq, Eq) {
        return this.hasComposition && Eq.empty && Uq(qq.focusNode, qq.focusOffset, qq.anchorNode, qq.anchorOffset) && this.posFromDOM(qq.focusNode, qq.focusOffset) == Eq.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: qq
        } = this, Eq = qq.state.selection.main, gq = Lq(qq.root), {
          anchorNode: Yq,
          anchorOffset: lq
        } = qq.observer.selectionRange;
        if (!gq || !Eq.empty || !Eq.assoc || !gq.modify) return;
        let Oq = this.lineAt(Eq.head, Eq.assoc);
        if (!Oq) return;
        let mq = Oq.posAtStart;
        if (Eq.head == mq || Eq.head == mq + Oq.length) return;
        let xq = this.coordsAt(Eq.head, -1),
          Aq = this.coordsAt(Eq.head, 1);
        if (!xq || !Aq || xq.bottom > Aq.top) return;
        let cq = this.domAtPos(Eq.head + Eq.assoc, Eq.assoc);
        gq.collapse(cq.node, cq.offset), gq.modify("move", Eq.assoc < 0 ? "forward" : "backward", "lineboundary"), qq.observer.readSelectionRange();
        let uq = qq.observer.selectionRange;
        qq.docView.posFromDOM(uq.anchorNode, uq.anchorOffset) != Eq.from && gq.collapse(Yq, lq)
      }
      posFromDOM(qq, Eq) {
        let gq = this.tile.nearest(qq);
        if (!gq) return 2 & this.tile.dom.compareDocumentPosition(qq) ? 0 : this.view.state.doc.length;
        let Yq = gq.posAtStart;
        if (!gq.isComposite()) return gq.isText() ? qq == gq.dom ? Yq + Eq : Yq + (Eq ? gq.length : 0) : Yq;
        {
          let lq;
          if (qq == gq.dom) lq = gq.dom.childNodes[Eq];
          else {
            let Yq = 0 == wq(qq) ? 0 : 0 == Eq ? -1 : 1;
            for (;;) {
              let Eq = qq.parentNode;
              if (Eq == gq.dom) break;
              0 == Yq && Eq.firstChild != Eq.lastChild && (Yq = qq == Eq.firstChild ? -1 : 1), qq = Eq
            }
            lq = Yq < 0 ? qq : qq.nextSibling
          }
          if (lq == gq.dom.firstChild) return Yq;
          for (; lq && !Wg.get(lq);) lq = lq.nextSibling;
          if (!lq) return Yq + gq.length;
          for (let qq = 0, Eq = Yq;; qq++) {
            let Yq = gq.children[qq];
            if (Yq.dom == lq) return Eq;
            Eq += Yq.length + Yq.breakAfter
          }
        }
      }
      domAtPos(qq, Eq) {
        let {
          tile: gq,
          offset: Yq
        } = this.tile.resolveBlock(qq, Eq);
        return gq.isWidget() ? gq.domPosFor(qq, Eq) : gq.domIn(Yq, Eq)
      }
      inlineDOMNearPos(qq, Eq) {
        let gq, Yq, lq = -1,
          Oq = !1,
          mq = -1,
          xq = !1;
        return this.tile.blockTiles(((Eq, Aq) => {
          if (Eq.isWidget()) {
            if (32 & Eq.flags && Aq >= qq) return !0;
            16 & Eq.flags && (Oq = !0)
          } else {
            let cq = Aq + Eq.length;
            if (Aq <= qq && (gq = Eq, lq = qq - Aq, Oq = cq < qq), cq >= qq && !Yq && (Yq = Eq, mq = qq - Aq, xq = Aq > qq), Aq > qq && Yq) return !0
          }
        })), gq || Yq ? (Oq && Yq ? gq = null : xq && gq && (Yq = null), gq && Eq < 0 || !Yq ? gq.domIn(lq, Eq) : Yq.domIn(mq, Eq)) : this.domAtPos(qq, Eq)
      }
      coordsAt(qq, Eq) {
        let {
          tile: gq,
          offset: Yq
        } = this.tile.resolveBlock(qq, Eq);
        return gq.isWidget() ? gq.widget instanceof kg ? null : gq.coordsInWidget(Yq, Eq, !0) : gq.coordsIn(Yq, Eq)
      }
      lineAt(qq, Eq) {
        let {
          tile: gq
        } = this.tile.resolveBlock(qq, Eq);
        return gq.isLine() ? gq : null
      }
      coordsForChar(qq) {
        let {
          tile: Eq,
          offset: gq
        } = this.tile.resolveBlock(qq, 1);
        if (!Eq.isLine()) return null;
        return function qq(Eq, gq) {
          if (Eq.isComposite())
            for (let Yq of Eq.children) {
              if (Yq.length >= gq) {
                let Eq = qq(Yq, gq);
                if (Eq) return Eq
              }
              if ((gq -= Yq.length) < 0) break
            } else if (Eq.isText() && gq < Eq.length) {
              let qq = (0, Yq.$)(Eq.text, gq);
              if (qq == gq) return null;
              let lq = YE(Eq.dom, gq, qq).getClientRects();
              for (let Eq = 0; Eq < lq.length; Eq++) {
                let qq = lq[Eq];
                if (Eq == lq.length - 1 || qq.top < qq.bottom && qq.left < qq.right) return qq
              }
            } return null
        }(Eq, gq)
      }
      measureVisibleLineHeights(qq) {
        let Eq = [],
          {
            from: gq,
            to: Yq
          } = qq,
          lq = this.view.contentDOM.clientWidth,
          Oq = lq > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          mq = -1,
          xq = this.view.textDirection == cE.LTR,
          Aq = 0,
          cq = (qq, uq, Bq) => {
            for (let Wq = 0; Wq < qq.children.length && !(uq > Yq); Wq++) {
              let Yq = qq.children[Wq],
                Nq = uq + Yq.length,
                aq = Yq.dom.getBoundingClientRect(),
                {
                  height: Vq
                } = aq;
              if (Bq && !Wq && (Aq += aq.top - Bq.top), Yq instanceof dg) Nq > gq && cq(Yq, uq, aq);
              else if (uq >= gq && (Aq > 0 && Eq.push(-Aq), Eq.push(Vq + Aq), Aq = 0, Oq)) {
                let qq = Yq.dom.lastChild,
                  Eq = qq ? Rq(qq) : [];
                if (Eq.length) {
                  let qq = Eq[Eq.length - 1],
                    gq = xq ? qq.right - aq.left : aq.right - qq.left;
                  gq > mq && (mq = gq, this.minWidth = lq, this.minWidthFrom = uq, this.minWidthTo = Nq)
                }
              }
              Bq && Wq == qq.children.length - 1 && (Aq += Bq.bottom - aq.bottom), uq = Nq + Yq.breakAfter
            }
          };
        return cq(this.tile, 0, null), Eq
      }
      textDirectionAt(qq) {
        let {
          tile: Eq
        } = this.tile.resolveBlock(qq, 1);
        return "rtl" == getComputedStyle(Eq.dom).direction ? cE.RTL : cE.LTR
      }
      measureTextSize() {
        let qq = this.tile.blockTiles((qq => {
          if (qq.isLine() && qq.children.length && qq.length <= 20) {
            let Eq, gq = 0;
            for (let Yq of qq.children) {
              if (!Yq.isText() || /[^ -~]/.test(Yq.text)) return;
              let qq = Rq(Yq.dom);
              if (1 != qq.length) return;
              gq += qq[0].width, Eq = qq[0].height
            }
            if (gq) return {
              lineHeight: qq.dom.getBoundingClientRect().height,
              charWidth: gq / qq.length,
              textHeight: Eq
            }
          }
        }));
        if (qq) return qq;
        let Eq, gq, Yq, lq = document.createElement("div");
        return lq.className = "cm-line", lq.style.width = "99999px", lq.style.position = "absolute", lq.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(lq);
          let qq = Rq(lq.firstChild)[0];
          Eq = lq.getBoundingClientRect().height, gq = qq && qq.width ? qq.width / 27 : 7, Yq = qq && qq.height ? qq.height : Eq, lq.remove()
        })), {
          lineHeight: Eq,
          charWidth: gq,
          textHeight: Yq
        }
      }
      computeBlockGapDeco() {
        let qq = [],
          Eq = this.view.viewState;
        for (let gq = 0, Yq = 0;; Yq++) {
          let lq = Yq == Eq.viewports.length ? null : Eq.viewports[Yq],
            Oq = lq ? lq.from - 1 : this.view.state.doc.length;
          if (Oq > gq) {
            let Yq = (Eq.lineBlockAt(Oq).bottom - Eq.lineBlockAt(gq).top) / this.view.scaleY;
            qq.push(fq.replace({
              widget: new kg(Yq),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(gq, Oq))
          }
          if (!lq) break;
          gq = lq.to + 1
        }
        return fq.set(qq)
      }
      updateDeco() {
        let qq = 1,
          Eq = this.view.state.facet(qg).map((Eq => (this.dynamicDecorationMap[qq++] = "function" == typeof Eq) ? Eq(this.view) : Eq)),
          gq = !1,
          lq = this.view.state.facet(gg).map(((qq, Eq) => {
            let Yq = "function" == typeof qq;
            return Yq && (gq = !0), Yq ? qq(this.view) : qq
          }));
        for (lq.length && (this.dynamicDecorationMap[qq++] = gq, Eq.push(Yq.G.join(lq))), this.YO = [this.editContextFormatting, ...Eq, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; qq < this.YO.length;) this.dynamicDecorationMap[qq++] = !1;
        this.blockWrappers = this.view.state.facet(Eg).map((qq => "function" == typeof qq ? qq(this.view) : qq))
      }
      scrollIntoView(qq) {
        var Eq;
        if (qq.isSnapshot) {
          let Eq = this.view.viewState.lineBlockAt(qq.range.head);
          return this.view.scrollDOM.scrollTop = Eq.top - qq.yMargin, void(this.view.scrollDOM.scrollLeft = qq.xMargin)
        }
        for (let uq of this.view.state.facet(kE)) try {
          if (uq(this.view, qq.range, qq)) return !0
        } catch (cq) {
          sE(this.view.state, cq, "scroll handler")
        }
        let gq, {
            range: Yq
          } = qq,
          lq = this.coordsAt(Yq.head, null !== (Eq = Yq.assoc) && void 0 !== Eq ? Eq : Yq.empty ? 0 : Yq.head > Yq.anchor ? -1 : 1);
        if (!lq) return;
        !Yq.empty && (gq = this.coordsAt(Yq.anchor, Yq.anchor > Yq.head ? -1 : 1)) && (lq = {
          left: Math.min(lq.left, gq.left),
          top: Math.min(lq.top, gq.top),
          right: Math.max(lq.right, gq.right),
          bottom: Math.max(lq.bottom, gq.bottom)
        });
        let Oq = xg(this.view),
          mq = {
            left: lq.left - Oq.left,
            top: lq.top - Oq.top,
            right: lq.right + Oq.right,
            bottom: lq.bottom + Oq.bottom
          },
          {
            offsetWidth: xq,
            offsetHeight: Aq
          } = this.view.scrollDOM;
        if (function(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
            let Aq = qq.ownerDocument,
              cq = Aq.defaultView || window;
            for (let uq = qq, Bq = !1; uq && !Bq;)
              if (1 == uq.nodeType) {
                let qq, Wq = uq == Aq.body,
                  Nq = 1,
                  aq = 1;
                if (Wq) qq = Cq(cq);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(uq).position) && (Bq = !0), uq.scrollHeight <= uq.clientHeight && uq.scrollWidth <= uq.clientWidth) {
                    uq = uq.assignedSlot || uq.parentNode;
                    continue
                  }
                  let Eq = uq.getBoundingClientRect();
                  ({
                    scaleX: Nq,
                    scaleY: aq
                  } = Iq(uq, Eq)), qq = {
                    left: Eq.left,
                    right: Eq.left + uq.clientWidth * Nq,
                    top: Eq.top,
                    bottom: Eq.top + uq.clientHeight * aq
                  }
                }
                let Vq = 0,
                  dq = 0;
                if ("nearest" == lq) Eq.top < qq.top + mq ? (dq = Eq.top - (qq.top + mq), gq > 0 && Eq.bottom > qq.bottom + dq && (dq = Eq.bottom - qq.bottom + mq)) : Eq.bottom > qq.bottom - mq && (dq = Eq.bottom - qq.bottom + mq, gq < 0 && Eq.top - dq < qq.top && (dq = Eq.top - (qq.top + mq)));
                else {
                  let Yq = Eq.bottom - Eq.top,
                    Oq = qq.bottom - qq.top;
                  dq = ("center" == lq && Yq <= Oq ? Eq.top + Yq / 2 - Oq / 2 : "start" == lq || "center" == lq && gq < 0 ? Eq.top - mq : Eq.bottom - Oq + mq) - qq.top
                }
                if ("nearest" == Yq ? Eq.left < qq.left + Oq ? (Vq = Eq.left - (qq.left + Oq), gq > 0 && Eq.right > qq.right + Vq && (Vq = Eq.right - qq.right + Oq)) : Eq.right > qq.right - Oq && (Vq = Eq.right - qq.right + Oq, gq < 0 && Eq.left < qq.left + Vq && (Vq = Eq.left - (qq.left + Oq))) : Vq = ("center" == Yq ? Eq.left + (Eq.right - Eq.left) / 2 - (qq.right - qq.left) / 2 : "start" == Yq == xq ? Eq.left - Oq : Eq.right - (qq.right - qq.left) + Oq) - qq.left, Vq || dq)
                  if (Wq) cq.scrollBy(Vq, dq);
                  else {
                    let qq = 0,
                      gq = 0;
                    if (dq) {
                      let qq = uq.scrollTop;
                      uq.scrollTop += dq / aq, gq = (uq.scrollTop - qq) * aq
                    }
                    if (Vq) {
                      let Eq = uq.scrollLeft;
                      uq.scrollLeft += Vq / Nq, qq = (uq.scrollLeft - Eq) * Nq
                    }
                    Eq = {
                      left: Eq.left - qq,
                      top: Eq.top - gq,
                      right: Eq.right - qq,
                      bottom: Eq.bottom - gq
                    }, qq && Math.abs(qq - Vq) < 1 && (Yq = "nearest"), gq && Math.abs(gq - dq) < 1 && (lq = "nearest")
                  } if (Wq) break;
                (Eq.top < qq.top || Eq.bottom > qq.bottom || Eq.left < qq.left || Eq.right > qq.right) && (Eq = {
                  left: Math.max(Eq.left, qq.left),
                  right: Math.min(Eq.right, qq.right),
                  top: Math.max(Eq.top, qq.top),
                  bottom: Math.min(Eq.bottom, qq.bottom)
                }), uq = uq.assignedSlot || uq.parentNode
              } else {
                if (11 != uq.nodeType) break;
                uq = uq.host
              }
          }(this.view.scrollDOM, mq, Yq.head < Yq.anchor ? -1 : 1, qq.x, qq.y, Math.max(Math.min(qq.xMargin, xq), -xq), Math.max(Math.min(qq.yMargin, Aq), -Aq), this.view.textDirection == cE.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (lq.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || lq.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let qq = this.view.docView.lineAt(Yq.head, 1);
          qq && qq.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(qq) {
        let Eq = qq => qq.isWidget() || qq.children.some(Eq);
        return Eq(this.tile.resolveBlock(qq, 1).tile)
      }
      destroy() {
        pg(this.tile)
      }
    }

    function pg(qq, Eq) {
      let gq = null === Eq || void 0 === Eq ? void 0 : Eq.get(qq);
      if (1 != gq) {
        null == gq && qq.destroy();
        for (let gq of qq.children) pg(gq, Eq)
      }
    }

    function Gg(qq, Eq) {
      let gq = qq.observer.selectionRange;
      if (!gq.focusNode) return null;
      let Yq = mE(gq.focusNode, gq.focusOffset),
        lq = xE(gq.focusNode, gq.focusOffset),
        Oq = Yq || lq;
      if (lq && Yq && lq.node != Yq.node) {
        let Eq = Wg.get(lq.node);
        if (!Eq || Eq.isText() && Eq.text != lq.node.nodeValue) Oq = lq;
        else if (qq.docView.lastCompositionAfterCursor) {
          let qq = Wg.get(Yq.node);
          !qq || qq.isText() && qq.text != Yq.node.nodeValue || (Oq = lq)
        }
      }
      if (qq.docView.lastCompositionAfterCursor = Oq != Yq, !Oq) return null;
      let mq = Eq - Oq.offset;
      return {
        from: mq,
        to: mq + Oq.node.nodeValue.length,
        node: Oq.node
      }
    }
    let Lg = class {
      constructor() {
        this.changes = []
      }
      compareRange(qq, Eq) {
        pq(qq, Eq, this.changes)
      }
      comparePoint(qq, Eq) {
        pq(qq, Eq, this.changes)
      }
      boundChange(qq) {
        pq(qq, qq, this.changes)
      }
    };
    class Jg {
      constructor() {
        this.changes = []
      }
      compareRange(qq, Eq) {
        pq(qq, Eq, this.changes)
      }
      comparePoint() {}
      boundChange(qq) {
        pq(qq, qq, this.changes)
      }
    }
    class kg extends iq {
      constructor(qq) {
        super(), this.height = qq
      }
      toDOM() {
        let qq = document.createElement("div");
        return qq.className = "cm-gap", this.updateDOM(qq), qq
      }
      eq(qq) {
        return qq.height == this.height
      }
      updateDOM(qq) {
        return qq.style.height = this.height + "px", !0
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

    function Rg(qq, Eq, gq) {
      let Yq = qq.lineBlockAt(Eq);
      if (Array.isArray(Yq.type)) {
        let qq;
        for (let lq of Yq.type) {
          if (lq.from > Eq) break;
          if (!(lq.to < Eq)) {
            if (lq.from < Eq && lq.to > Eq) return lq;
            qq && (lq.type != Zq.Text || qq.type == lq.type && !(gq < 0 ? lq.from < Eq : lq.to > Eq)) || (qq = lq)
          }
        }
        return qq || Yq
      }
      return Yq
    }

    function Ug(qq, Eq, gq, Yq) {
      let lq = qq.state.doc.lineAt(Eq.head),
        Oq = qq.bidiSpans(lq),
        mq = qq.textDirectionAt(lq.from);
      for (let xq = Eq, Aq = null;;) {
        let Eq = nE(lq, Oq, mq, xq, gq),
          cq = hE;
        if (!Eq) {
          if (lq.number == (gq ? qq.state.doc.lines : 1)) return xq;
          cq = "\n", lq = qq.state.doc.line(lq.number + (gq ? 1 : -1)), Oq = qq.bidiSpans(lq), Eq = qq.visualLineSide(lq, !gq)
        }
        if (Aq) {
          if (!Aq(cq)) return xq
        } else {
          if (!Yq) return Eq;
          Aq = Yq(cq)
        }
        xq = Eq
      }
    }

    function Fg(qq, Eq, gq) {
      for (;;) {
        let Yq = 0;
        for (let lq of qq) lq.between(Eq - 1, Eq + 1, ((qq, lq, Oq) => {
          if (Eq > qq && Eq < lq) {
            let Oq = Yq || gq || (Eq - qq < lq - Eq ? -1 : 1);
            Eq = Oq < 0 ? qq : lq, Yq = Oq
          }
        }));
        if (!Yq) return Eq
      }
    }

    function sg(qq, Eq) {
      let gq = null;
      for (let lq = 0; lq < Eq.zV.length; lq++) {
        let Oq = Eq.zV[lq],
          mq = null;
        if (Oq.empty) {
          let Eq = Fg(qq, Oq.from, 0);
          Eq != Oq.from && (mq = Yq.q.cursor(Eq, -1))
        } else {
          let Eq = Fg(qq, Oq.from, -1),
            gq = Fg(qq, Oq.to, 1);
          Eq == Oq.from && gq == Oq.to || (mq = Yq.q.range(Oq.from == Oq.anchor ? Eq : gq, Oq.from == Oq.head ? Eq : gq))
        }
        mq && (gq || (gq = Eq.zV.slice()), gq[lq] = mq)
      }
      return gq ? Yq.q.create(gq, Eq.mainIndex) : Eq
    }

    function Xg(qq, Eq, gq) {
      let lq = Fg(qq.state.facet(Yg).map((Eq => Eq(qq))), gq.from, Eq.head > gq.from ? -1 : 1);
      return lq == gq.from ? gq : Yq.q.cursor(lq, lq < gq.from ? 1 : -1)
    }
    class wg {
      constructor(qq, Eq) {
        this.pos = qq, this.assoc = Eq
      }
    }

    function Kg(qq, Eq, gq, lq) {
      let Oq, mq = qq.contentDOM.getBoundingClientRect(),
        xq = mq.top + qq.viewState.paddingTop,
        {
          x: Aq,
          y: cq
        } = Eq,
        uq = cq - xq;
      for (;;) {
        if (uq < 0) return new wg(0, 1);
        if (uq > qq.viewState.docHeight) return new wg(qq.state.doc.length, -1);
        if (Oq = qq.elementAtHeight(uq), null == lq) break;
        if (Oq.type == Zq.Text) {
          if (lq < 0 ? Oq.to < qq.viewport.from : Oq.from > qq.viewport.to) break;
          let Eq = qq.docView.coordsAt(lq < 0 ? Oq.from : Oq.to, lq > 0 ? -1 : 1);
          if (Eq && (lq < 0 ? Eq.top <= uq + xq : Eq.bottom >= uq + xq)) break
        }
        let Eq = qq.viewState.heightOracle.textHeight / 2;
        uq = lq > 0 ? Oq.bottom + Eq : Oq.top - Eq
      }
      if (qq.viewport.from >= Oq.to || qq.viewport.to <= Oq.from) {
        if (gq) return null;
        if (Oq.type == Zq.Text) {
          let Eq = function(qq, Eq, gq, lq, Oq) {
            let mq = Math.round((lq - Eq.left) * qq.defaultCharacterWidth);
            if (qq.lineWrapping && gq.height > 1.5 * qq.defaultLineHeight) {
              let Eq = qq.viewState.heightOracle.textHeight;
              mq += Math.floor((Oq - gq.top - .5 * (qq.defaultLineHeight - Eq)) / Eq) * qq.viewState.heightOracle.lineLength
            }
            let xq = qq.state.sliceDoc(gq.from, gq.to);
            return gq.from + (0, Yq.bb)(xq, mq, qq.state.tabSize)
          }(qq, mq, Oq, Aq, cq);
          return new wg(Eq, Eq == Oq.from ? 1 : -1)
        }
      }
      if (Oq.type != Zq.Text) return uq < (Oq.top + Oq.bottom) / 2 ? new wg(Oq.from, 1) : new wg(Oq.to, -1);
      let Bq = qq.docView.lineAt(Oq.from, 2);
      return Bq && Bq.length == Oq.length || (Bq = qq.docView.lineAt(Oq.from, -2)), new Cg(qq, Aq, cq, qq.textDirectionAt(Oq.from)).scanTile(Bq, Oq.from)
    }
    class Cg {
      constructor(qq, Eq, gq, Yq) {
        this.view = qq, this.x = Eq, this.y = gq, this.baseDir = Yq, this.line = null, this.spans = null
      }
      bidiSpansAt(qq) {
        return (!this.line || this.line.from > qq || this.line.to < qq) && (this.line = this.view.state.doc.lineAt(qq), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(qq, Eq) {
        let {
          line: gq,
          spans: Yq
        } = this.bidiSpansAt(qq);
        return Yq[oE.find(Yq, qq - gq.from, -1, Eq)].level == this.baseDir
      }
      dirAt(qq, Eq) {
        let {
          line: gq,
          spans: Yq
        } = this.bidiSpansAt(qq);
        return Yq[oE.find(Yq, qq - gq.from, -1, Eq)].dir
      }
      bidiIn(qq, Eq) {
        let {
          spans: gq,
          line: Yq
        } = this.bidiSpansAt(qq);
        return gq.length > 1 || gq.length && (gq[0].level != this.baseDir || gq[0].to + Yq.from < Eq)
      }
      scan(qq, Eq) {
        let gq, Yq, lq, Oq = 0,
          mq = qq.length - 1,
          xq = new Set,
          Aq = this.bidiIn(qq[0], qq[mq]),
          cq = -1,
          uq = 1e9;
        qq: for (; Oq < mq;) {
          let Bq = mq - Oq,
            Wq = Oq + mq >> 1;
          Eq: if (xq.has(Wq)) {
            let qq = Oq + Math.floor(Math.random() * Bq);
            for (let Eq = 0; Eq < Bq; Eq++) {
              if (!xq.has(qq)) {
                Wq = qq;
                break Eq
              }
              qq++, qq == mq && (qq = Oq)
            }
            break qq
          } xq.add(Wq);
          let Nq = Eq(Wq);
          if (Nq)
            for (let Eq = 0; Eq < Nq.length; Eq++) {
              let xq = Nq[Eq],
                Bq = 0;
              if (!(0 == xq.width && Nq.length > 1)) {
                if (xq.bottom < this.y)(!gq || gq.bottom < xq.bottom) && (gq = xq), Bq = 1;
                else if (xq.top > this.y)(!Yq || Yq.top > xq.top) && (Yq = xq), Bq = -1;
                else {
                  let qq = xq.left > this.x ? this.x - xq.left : xq.right < this.x ? this.x - xq.right : 0,
                    Eq = Math.abs(qq);
                  Eq < uq && (cq = Wq, uq = Eq, lq = xq), qq && (Bq = qq < 0 == (this.baseDir == cE.LTR) ? -1 : 1)
                } - 1 != Bq || Aq && !this.baseDirAt(qq[Wq], 1) ? 1 != Bq || Aq && !this.baseDirAt(qq[Wq + 1], -1) || (Oq = Wq + 1) : mq = Wq
              }
            }
        }
        if (!lq) {
          let lq = gq && (!Yq || this.y - gq.bottom < Yq.top - this.y) ? gq : Yq;
          return this.y = (lq.top + lq.bottom) / 2, this.scan(qq, Eq)
        }
        if (uq) {
          if (gq && gq.bottom > lq.top) return this.y = gq.bottom - 1, this.scan(qq, Eq);
          if (Yq && Yq.top < lq.bottom) return this.y = Yq.top + 1, this.scan(qq, Eq)
        }
        let Bq = (Aq ? this.dirAt(qq[cq], 1) : this.baseDir) == cE.LTR;
        return {
          i: cq,
          after: this.x > (lq.left + lq.right) / 2 == Bq
        }
      }
      scanText(qq, Eq) {
        let gq = [];
        for (let Oq = 0; Oq < qq.length; Oq = (0, Yq.$)(qq.text, Oq)) gq.push(Eq + Oq);
        gq.push(Eq + qq.length);
        let lq = this.scan(gq, (Yq => {
          let lq = gq[Yq] - Eq,
            Oq = gq[Yq + 1] - Eq;
          return YE(qq.dom, lq, Oq).getClientRects()
        }));
        return lq.after ? new wg(gq[lq.i + 1], -1) : new wg(gq[lq.i], 1)
      }
      scanTile(qq, Eq) {
        if (!qq.length) return new wg(Eq, 1);
        if (1 == qq.children.length) {
          let gq = qq.children[0];
          if (gq.isText()) return this.scanText(gq, Eq);
          if (gq.isComposite()) return this.scanTile(gq, Eq)
        }
        let gq = [Eq];
        for (let mq = 0, xq = Eq; mq < qq.children.length; mq++) gq.push(xq += qq.children[mq].length);
        let Yq = this.scan(gq, (Eq => {
            let gq = qq.children[Eq];
            return 48 & gq.flags ? null : (1 == gq.dom.nodeType ? gq.dom : YE(gq.dom, 0, gq.length)).getClientRects()
          })),
          lq = qq.children[Yq.i],
          Oq = gq[Yq.i];
        return lq.isText() ? this.scanText(lq, Oq) : lq.isComposite() ? this.scanTile(lq, Oq) : Yq.after ? new wg(gq[Yq.i + 1], -1) : new wg(Oq, 1)
      }
    }
    const Ig = "\uffff";
    class eg {
      constructor(qq, Eq) {
        this.points = qq, this.view = Eq, this.text = "", this.lineSeparator = Eq.state.facet(Yq.u.lineSeparator)
      }
      append(qq) {
        this.text += qq
      }
      lineBreak() {
        this.text += Ig
      }
      readRange(qq, Eq) {
        if (!qq) return this;
        let gq = qq.parentNode;
        for (let Yq = qq;;) {
          this.findPointBefore(gq, Yq);
          let qq = this.text.length;
          this.readNode(Yq);
          let lq = Wg.get(Yq),
            Oq = Yq.nextSibling;
          if (Oq == Eq) {
            (null === lq || void 0 === lq ? void 0 : lq.breakAfter) && !Oq && gq != this.view.contentDOM && this.lineBreak();
            break
          }
          let mq = Wg.get(Oq);
          (lq && mq ? lq.breakAfter : (lq ? lq.breakAfter : sq(Yq)) || sq(Oq) && ("BR" != Yq.nodeName || (null === lq || void 0 === lq ? void 0 : lq.isWidget())) && this.text.length > qq) && !qY(Oq, Eq) && this.lineBreak(), Yq = Oq
        }
        return this.findPointBefore(gq, Eq), this
      }
      readTextNode(qq) {
        let Eq = qq.nodeValue;
        for (let gq of this.points) gq.node == qq && (gq.pos = this.text.length + Math.min(gq.offset, Eq.length));
        for (let gq = 0, Yq = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let lq, Oq = -1,
            mq = 1;
          if (this.lineSeparator ? (Oq = Eq.indexOf(this.lineSeparator, gq), mq = this.lineSeparator.length) : (lq = Yq.exec(Eq)) && (Oq = lq.index, mq = lq[0].length), this.append(Eq.slice(gq, Oq < 0 ? Eq.length : Oq)), Oq < 0) break;
          if (this.lineBreak(), mq > 1)
            for (let Eq of this.points) Eq.node == qq && Eq.pos > this.text.length && (Eq.pos -= mq - 1);
          gq = Oq + mq
        }
      }
      readNode(qq) {
        let Eq = Wg.get(qq),
          gq = Eq && Eq.overrideDOMText;
        if (null != gq) {
          this.findPointInside(qq, gq.length);
          for (let qq = gq.iter(); !qq.next().done;) qq.lineBreak ? this.lineBreak() : this.append(qq.value)
        } else 3 == qq.nodeType ? this.readTextNode(qq) : "BR" == qq.nodeName ? qq.nextSibling && this.lineBreak() : 1 == qq.nodeType && this.readRange(qq.firstChild, null)
      }
      findPointBefore(qq, Eq) {
        for (let gq of this.points) gq.node == qq && qq.childNodes[gq.offset] == Eq && (gq.pos = this.text.length)
      }
      findPointInside(qq, Eq) {
        for (let gq of this.points)(3 == qq.nodeType ? gq.node == qq : qq.contains(gq.node)) && (gq.pos = this.text.length + (Dg(qq, gq.node, gq.offset) ? Eq : 0))
      }
    }

    function Dg(qq, Eq, gq) {
      for (;;) {
        if (!Eq || gq < wq(Eq)) return !1;
        if (Eq == qq) return !0;
        gq = Fq(Eq) + 1, Eq = Eq.parentNode
      }
    }

    function qY(qq, Eq) {
      let gq;
      for (; qq != Eq && qq; qq = qq.nextSibling) {
        let Eq = Wg.get(qq);
        if (!(null === Eq || void 0 === Eq ? void 0 : Eq.isWidget())) return !1;
        Eq && (gq || (gq = [])).push(Eq)
      }
      if (gq)
        for (let Yq of gq) {
          let qq = Yq.overrideDOMText;
          if (null === qq || void 0 === qq ? void 0 : qq.length) return !1
        }
      return !0
    }
    class EY {
      constructor(qq, Eq) {
        this.node = qq, this.offset = Eq, this.pos = -1
      }
    }
    class gY {
      constructor(qq, Eq, gq, lq) {
        this.typeOver = lq, this.bounds = null, this.text = "", this.domChanged = Eq > -1;
        let {
          impreciseHead: Oq,
          impreciseAnchor: mq
        } = qq.docView, xq = qq.state.selection;
        if (qq.state.readOnly && Eq > -1) this.newSel = null;
        else if (Eq > -1 && (this.bounds = YY(qq.docView.tile, Eq, gq, 0))) {
          let Eq = Oq || mq ? [] : function(qq) {
              let Eq = [];
              if (qq.root.activeElement != qq.contentDOM) return Eq;
              let {
                anchorNode: gq,
                anchorOffset: Yq,
                focusNode: lq,
                focusOffset: Oq
              } = qq.observer.selectionRange;
              gq && (Eq.push(new EY(gq, Yq)), lq == gq && Oq == Yq || Eq.push(new EY(lq, Oq)));
              return Eq
            }(qq),
            gq = new eg(Eq, qq);
          gq.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = gq.text, this.newSel = function(qq, Eq) {
            if (0 == qq.length) return null;
            let gq = qq[0].pos,
              lq = 2 == qq.length ? qq[1].pos : gq;
            return gq > -1 && lq > -1 ? Yq.q.single(gq + Eq, lq + Eq) : null
          }(Eq, this.bounds.from)
        } else {
          let Eq = qq.observer.selectionRange,
            gq = Oq && Oq.node == Eq.focusNode && Oq.offset == Eq.focusOffset || !Jq(qq.contentDOM, Eq.focusNode) ? xq.main.head : qq.docView.posFromDOM(Eq.focusNode, Eq.focusOffset),
            lq = mq && mq.node == Eq.anchorNode && mq.offset == Eq.anchorOffset || !Jq(qq.contentDOM, Eq.anchorNode) ? xq.main.anchor : qq.docView.posFromDOM(Eq.anchorNode, Eq.anchorOffset),
            Aq = qq.viewport;
          if ((tq.ios || tq.chrome) && xq.main.empty && gq != lq && (Aq.from > 0 || Aq.to < qq.state.doc.length)) {
            let Eq = Math.min(gq, lq),
              Yq = Math.max(gq, lq),
              Oq = Aq.from - Eq,
              mq = Aq.to - Yq;
            0 != Oq && 1 != Oq && 0 != Eq || 0 != mq && -1 != mq && Yq != qq.state.doc.length || (gq = 0, lq = qq.state.doc.length)
          }
          if (qq.inputState.composing > -1 && xq.zV.length > 1) this.newSel = xq.replaceRange(Yq.q.range(lq, gq));
          else if (qq.lineWrapping && lq == gq && (!xq.main.empty || xq.main.head != gq) && qq.inputState.lastTouchTime > Date.now() - 100) {
            let Eq = qq.coordsAtPos(gq, -1),
              lq = 0;
            Eq && (lq = qq.inputState.lastTouchY <= Eq.bottom ? -1 : 1), this.newSel = Yq.q.create([Yq.q.cursor(gq, lq)])
          } else this.newSel = Yq.q.single(lq, gq)
        }
      }
    }

    function YY(qq, Eq, gq, Yq) {
      if (qq.isComposite()) {
        let lq = -1,
          Oq = -1,
          mq = -1,
          xq = -1;
        for (let Aq = 0, cq = Yq, uq = Yq; Aq < qq.children.length; Aq++) {
          let Yq = qq.children[Aq],
            Bq = cq + Yq.length;
          if (cq < Eq && Bq > gq) return YY(Yq, Eq, gq, cq);
          if (Bq >= Eq && -1 == lq && (lq = Aq, Oq = cq), cq > gq && Yq.dom.parentNode == qq.dom) {
            mq = Aq, xq = uq;
            break
          }
          uq = Bq, cq = Bq + Yq.breakAfter
        }
        return {
          from: Oq,
          to: xq < 0 ? Yq + qq.length : xq,
          startDOM: (lq ? qq.children[lq - 1].dom.nextSibling : null) || qq.dom.firstChild,
          endDOM: mq < qq.children.length && mq >= 0 ? qq.children[mq].dom : null
        }
      }
      return qq.isText() ? {
        from: Yq,
        to: Yq + qq.length,
        startDOM: qq.dom,
        endDOM: qq.dom.nextSibling
      } : null
    }

    function lY(qq, Eq) {
      let gq, {
          newSel: lq
        } = Eq,
        {
          state: Oq
        } = qq,
        mq = Oq.selection.main,
        xq = qq.inputState.lastKeyTime > Date.now() - 100 ? qq.inputState.lastKeyCode : -1;
      if (Eq.bounds) {
        let {
          from: qq,
          to: lq
        } = Eq.bounds, Aq = mq.from, cq = null;
        (8 === xq || tq.android && Eq.text.length < lq - qq) && (Aq = mq.to, cq = "end");
        let uq, Bq, Wq = Oq.doc.sliceString(qq, lq, Ig);
        !mq.empty && mq.from >= qq && mq.to <= lq && (Eq.typeOver || Wq != Eq.text) && Wq.slice(0, mq.from - qq) == Eq.text.slice(0, mq.from - qq) && Wq.slice(mq.to - qq) == Eq.text.slice(uq = Eq.text.length - (Wq.length - (mq.to - qq))) ? gq = {
          from: mq.from,
          to: mq.to,
          insert: Yq.O.of(Eq.text.slice(mq.from - qq, uq).split(Ig))
        } : (Bq = mY(Wq, Eq.text, Aq - qq, cq)) && (tq.chrome && 13 == xq && Bq.toB == Bq.from + 2 && Eq.text.slice(Bq.from, Bq.toB) == Ig + Ig && Bq.toB--, gq = {
          from: qq + Bq.from,
          to: qq + Bq.toA,
          insert: Yq.O.of(Eq.text.slice(Bq.from, Bq.toB).split(Ig))
        })
      } else lq && (!qq.hasFocus && Oq.facet(XE) || xY(lq, mq)) && (lq = null);
      if (!gq && !lq) return !1;
      if ((tq.mac || tq.android) && gq && gq.from == gq.to && gq.from == mq.head - 1 && /^\. ?$/.test(gq.insert.toString()) && "off" == qq.contentDOM.getAttribute("autocorrect") ? (lq && 2 == gq.insert.length && (lq = Yq.q.single(lq.main.anchor - 1, lq.main.head - 1)), gq = {
          from: gq.from,
          to: gq.to,
          insert: Yq.O.of([gq.insert.toString().replace(".", " ")])
        }) : Oq.doc.lineAt(mq.from).to < mq.to && qq.docView.lineHasWidget(mq.to) && qq.inputState.insertingTextAt > Date.now() - 50 ? gq = {
          from: mq.from,
          to: mq.to,
          insert: Oq.toText(qq.inputState.insertingText)
        } : tq.chrome && gq && gq.from == gq.to && gq.from == mq.head && "\n " == gq.insert.toString() && qq.lineWrapping && (lq && (lq = Yq.q.single(lq.main.anchor - 1, lq.main.head - 1)), gq = {
          from: mq.from,
          to: mq.to,
          insert: Yq.O.of([" "])
        }), gq) return OY(qq, gq, lq, xq);
      if (lq && !xY(lq, mq)) {
        let Eq = !1,
          gq = "select";
        return qq.inputState.lastSelectionTime > Date.now() - 50 && ("select" == qq.inputState.lastSelectionOrigin && (Eq = !0), gq = qq.inputState.lastSelectionOrigin, "select.pointer" == gq && (lq = sg(Oq.facet(Yg).map((Eq => Eq(qq))), lq))), qq.dispatch({
          selection: lq,
          scrollIntoView: Eq,
          userEvent: gq
        }), !0
      }
      return !1
    }

    function OY(qq, Eq, gq) {
      let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (tq.ios && qq.inputState.flushIOSKey(Eq)) return !0;
      let Oq = qq.state.selection.main;
      if (tq.android && (Eq.to == Oq.to && (Eq.from == Oq.from || Eq.from == Oq.from - 1 && " " == qq.state.sliceDoc(Eq.from, Oq.from)) && 1 == Eq.insert.length && 2 == Eq.insert.lines && lE(qq.contentDOM, "Enter", 13) || (Eq.from == Oq.from - 1 && Eq.to == Oq.to && 0 == Eq.insert.length || 8 == lq && Eq.insert.length < Eq.to - Eq.from && Eq.to > Oq.head) && lE(qq.contentDOM, "Backspace", 8) || Eq.from == Oq.from && Eq.to == Oq.to + 1 && 0 == Eq.insert.length && lE(qq.contentDOM, "Delete", 46))) return !0;
      let mq, xq = Eq.insert.toString();
      qq.inputState.composing >= 0 && qq.inputState.composing++;
      let Aq = () => mq || (mq = function(qq, Eq, gq) {
        let lq, Oq = qq.state,
          mq = Oq.selection.main,
          xq = -1;
        if (Eq.from == Eq.to && Eq.from < mq.from || Eq.from > mq.to) {
          let gq = Eq.from < mq.from ? -1 : 1,
            Yq = gq < 0 ? mq.from : mq.to,
            lq = Fg(Oq.facet(Yg).map((Eq => Eq(qq))), Yq, gq);
          Eq.from == lq && (xq = lq)
        }
        if (xq > -1) lq = {
          changes: Eq,
          selection: Yq.q.cursor(Eq.from + Eq.insert.length, -1)
        };
        else if (Eq.from >= mq.from && Eq.to <= mq.to && Eq.to - Eq.from >= (mq.to - mq.from) / 3 && (!gq || gq.main.empty && gq.main.from == Eq.from + Eq.insert.length) && qq.inputState.composing < 0) {
          let gq = mq.from < Eq.from ? Oq.sliceDoc(mq.from, Eq.from) : "",
            Yq = mq.to > Eq.to ? Oq.sliceDoc(Eq.to, mq.to) : "";
          lq = Oq.replaceSelection(qq.state.toText(gq + Eq.insert.sliceString(0, void 0, qq.state.lineBreak) + Yq))
        } else {
          let xq = Oq.changes(Eq),
            Aq = gq && gq.main.to <= xq.newLength ? gq.main : void 0;
          if (Oq.selection.zV.length > 1 && (qq.inputState.composing >= 0 || qq.inputState.compositionPendingChange) && Eq.to <= mq.to + 10 && Eq.to >= mq.to - 10) {
            let cq, uq = qq.state.sliceDoc(Eq.from, Eq.to),
              Bq = gq && Gg(qq, gq.main.head);
            if (Bq) {
              let qq = Eq.insert.length - (Eq.to - Eq.from);
              cq = {
                from: Bq.from,
                to: Bq.to - qq
              }
            } else cq = qq.state.doc.lineAt(mq.head);
            let Wq = mq.to - Eq.to;
            lq = Oq.changeByRange((gq => {
              if (gq.from == mq.from && gq.to == mq.to) return {
                changes: xq,
                range: Aq || gq.map(xq)
              };
              let lq = gq.to - Wq,
                Bq = lq - uq.length;
              if (qq.state.sliceDoc(Bq, lq) != uq || lq >= cq.from && Bq <= cq.to) return {
                range: gq
              };
              let Nq = Oq.changes({
                  from: Bq,
                  to: lq,
                  insert: Eq.insert
                }),
                aq = gq.to - mq.to;
              return {
                changes: Nq,
                range: Aq ? Yq.q.range(Math.max(0, Aq.anchor + aq), Math.max(0, Aq.head + aq)) : gq.map(Nq)
              }
            }))
          } else lq = {
            changes: xq,
            selection: Aq && Oq.selection.replaceRange(Aq)
          }
        }
        let Aq = "input.type";
        (qq.composing || qq.inputState.compositionPendingChange && qq.inputState.compositionEndedAt > Date.now() - 50) && (qq.inputState.compositionPendingChange = !1, Aq += ".compose", qq.inputState.compositionFirstChange && (Aq += ".start", qq.inputState.compositionFirstChange = !1));
        return Oq.update(lq, {
          userEvent: Aq,
          scrollIntoView: !0
        })
      }(qq, Eq, gq));
      return qq.state.facet(zE).some((gq => gq(qq, Eq.from, Eq.to, xq, Aq))) || qq.dispatch(Aq()), !0
    }

    function mY(qq, Eq, gq, Yq) {
      let lq = Math.min(qq.length, Eq.length),
        Oq = 0;
      for (; Oq < lq && qq.charCodeAt(Oq) == Eq.charCodeAt(Oq);) Oq++;
      if (Oq == lq && qq.length == Eq.length) return null;
      let mq = qq.length,
        xq = Eq.length;
      for (; mq > 0 && xq > 0 && qq.charCodeAt(mq - 1) == Eq.charCodeAt(xq - 1);) mq--, xq--;
      if ("end" == Yq) {
        gq -= mq + Math.max(0, Oq - Math.min(mq, xq)) - Oq
      }
      if (mq < Oq && qq.length < Eq.length) {
        Oq -= gq <= Oq && gq >= mq ? Oq - gq : 0, xq = Oq + (xq - mq), mq = Oq
      } else if (xq < Oq) {
        Oq -= gq <= Oq && gq >= xq ? Oq - gq : 0, mq = Oq + (mq - xq), xq = Oq
      }
      return {
        from: Oq,
        toA: mq,
        toB: xq
      }
    }

    function xY(qq, Eq) {
      return Eq.head == qq.main.head && Eq.anchor == qq.main.anchor
    }
    class AY {
      setSelectionOrigin(qq) {
        this.lastSelectionOrigin = qq, this.lastSelectionTime = Date.now()
      }
      constructor(qq) {
        this.view = qq, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = qq.hasFocus, tq.safari && qq.contentDOM.addEventListener("input", (() => null)), tq.gecko && function(qq) {
          MY.has(qq) || (MY.add(qq), qq.addEventListener("copy", (() => {})), qq.addEventListener("cut", (() => {})))
        }(qq.contentDOM.ownerDocument)
      }
      handleEvent(qq) {
        (function(qq, Eq) {
          if (!Eq.bubbles) return !0;
          if (Eq.defaultPrevented) return !1;
          for (let gq, Yq = Eq.target; Yq != qq.contentDOM; Yq = Yq.parentNode)
            if (!Yq || 11 == Yq.nodeType || (gq = Wg.get(Yq)) && gq.isWidget() && !gq.isHidden && gq.widget.ignoreEvent(Eq)) return !1;
          return !0
        })(this.view, qq) && !this.ignoreDuringComposition(qq) && ("keydown" == qq.type && this.keydown(qq) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(qq.type, qq))) : this.runHandlers(qq.type, qq)))
      }
      runHandlers(qq, Eq) {
        let gq = this.handlers[qq];
        if (gq) {
          for (let qq of gq.observers) qq(this.view, Eq);
          for (let qq of gq.handlers) {
            if (Eq.defaultPrevented) break;
            if (qq(this.view, Eq)) {
              Eq.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(qq) {
        let Eq = uY(qq),
          gq = this.handlers,
          Yq = this.view.contentDOM;
        for (let lq in Eq)
          if ("scroll" != lq) {
            let qq = !Eq[lq].handlers.length,
              Oq = gq[lq];
            Oq && qq != !Oq.handlers.length && (Yq.removeEventListener(lq, this.handleEvent), Oq = null), Oq || Yq.addEventListener(lq, this.handleEvent, {
              passive: qq
            })
          } for (let lq in gq) "scroll" == lq || Eq[lq] || Yq.removeEventListener(lq, this.handleEvent);
        this.handlers = Eq
      }
      keydown(qq) {
        if (this.lastKeyCode = qq.keyCode, this.lastKeyTime = Date.now(), 9 == qq.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != qq.keyCode && NY.indexOf(qq.keyCode) < 0 && (this.tabFocusMode = -1), tq.android && tq.chrome && !qq.synthetic && (13 == qq.keyCode || 8 == qq.keyCode)) return this.view.observer.delayAndroidKey(qq.key, qq.keyCode), !0;
        let Eq;
        return !tq.ios || qq.synthetic || qq.altKey || qq.metaKey || qq.shiftKey || !((Eq = BY.find((Eq => Eq.keyCode == qq.keyCode))) && !qq.ctrlKey || WY.indexOf(qq.key) > -1 && qq.ctrlKey) ? (229 != qq.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Eq || qq, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(qq) {
        let Eq = this.pendingIOSKey;
        return !!Eq && (!("Enter" == Eq.key && qq && qq.from < qq.to && /^\S+$/.test(qq.insert.toString())) && (this.pendingIOSKey = void 0, lE(this.view.contentDOM, Eq.key, Eq.keyCode, Eq instanceof KeyboardEvent ? Eq : void 0)))
      }
      ignoreDuringComposition(qq) {
        return !(!/^key/.test(qq.type) || qq.synthetic) && (this.composing > 0 || !!(tq.safari && !tq.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(qq) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = qq
      }
      update(qq) {
        this.view.observer.update(qq), this.mouseSelection && this.mouseSelection.update(qq), this.draggedContent && qq.docChanged && (this.draggedContent = this.draggedContent.map(qq.changes)), qq.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function cY(qq, Eq) {
      return (gq, Yq) => {
        try {
          return Eq.call(qq, Yq, gq)
        } catch (lq) {
          sE(gq.state, lq)
        }
      }
    }

    function uY(qq) {
      let Eq = Object.create(null);

      function gq(qq) {
        return Eq[qq] || (Eq[qq] = {
          observers: [],
          handlers: []
        })
      }
      for (let Yq of qq) {
        let qq = Yq.spec,
          Eq = qq && qq.plugin.domEventHandlers,
          lq = qq && qq.plugin.domEventObservers;
        if (Eq)
          for (let Oq in Eq) {
            let qq = Eq[Oq];
            qq && gq(Oq).handlers.push(cY(Yq.value, qq))
          }
        if (lq)
          for (let Oq in lq) {
            let qq = lq[Oq];
            qq && gq(Oq).observers.push(cY(Yq.value, qq))
          }
      }
      for (let Yq in dY) gq(Yq).handlers.push(dY[Yq]);
      for (let Yq in jY) gq(Yq).observers.push(jY[Yq]);
      return Eq
    }
    const BY = [{
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
      WY = "dthko",
      NY = [16, 17, 18, 20, 91, 92, 224, 225];

    function aY(qq) {
      return .7 * Math.max(0, qq) + 8
    }
    class VY {
      constructor(qq, Eq, gq, lq) {
        this.view = qq, this.startEvent = Eq, this.style = gq, this.mustSelect = lq, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Eq, this.scrollParents = eq(qq.contentDOM), this.atoms = qq.state.facet(Yg).map((Eq => Eq(qq)));
        let Oq = qq.contentDOM.ownerDocument;
        Oq.addEventListener("mousemove", this.move = this.move.bind(this)), Oq.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Eq.shiftKey, this.multiple = qq.state.facet(Yq.u.allowMultipleSelections) && function(qq, Eq) {
          let gq = qq.state.facet(iE);
          return gq.length ? gq[0](Eq) : tq.mac ? Eq.metaKey : Eq.ctrlKey
        }(qq, Eq), this.dragging = !(! function(qq, Eq) {
          let {
            main: gq
          } = qq.state.selection;
          if (gq.empty) return !1;
          let Yq = Lq(qq.root);
          if (!Yq || 0 == Yq.rangeCount) return !0;
          let lq = Yq.getRangeAt(0).getClientRects();
          for (let Oq = 0; Oq < lq.length; Oq++) {
            let qq = lq[Oq];
            if (qq.left <= Eq.clientX && qq.right >= Eq.clientX && qq.top <= Eq.clientY && qq.bottom >= Eq.clientY) return !0
          }
          return !1
        }(qq, Eq) || 1 != hY(Eq)) && null
      }
      start(qq) {
        !1 === this.dragging && this.select(qq)
      }
      move(qq) {
        if (0 == qq.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Eq = this.startEvent, gq = qq, Math.max(Math.abs(Eq.clientX - gq.clientX), Math.abs(Eq.clientY - gq.clientY)) < 10)) return;
        var Eq, gq;
        this.select(this.lastEvent = qq);
        let Yq = 0,
          lq = 0,
          Oq = 0,
          mq = 0,
          xq = this.view.win.innerWidth,
          Aq = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Oq,
          right: xq
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: mq,
          bottom: Aq
        } = this.scrollParents.y.getBoundingClientRect());
        let cq = xg(this.view);
        qq.clientX - cq.left <= Oq + 6 ? Yq = -aY(Oq - qq.clientX) : qq.clientX + cq.right >= xq - 6 && (Yq = aY(qq.clientX - xq)), qq.clientY - cq.top <= mq + 6 ? lq = -aY(mq - qq.clientY) : qq.clientY + cq.bottom >= Aq - 6 && (lq = aY(qq.clientY - Aq)), this.setScrollSpeed(Yq, lq)
      }
      up(qq) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || qq.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let qq = this.view.contentDOM.ownerDocument;
        qq.removeEventListener("mousemove", this.move), qq.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(qq, Eq) {
        this.scrollSpeed = {
          x: qq,
          y: Eq
        }, qq || Eq ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: qq,
          y: Eq
        } = this.scrollSpeed;
        qq && this.scrollParents.x && (this.scrollParents.x.scrollLeft += qq, qq = 0), Eq && this.scrollParents.y && (this.scrollParents.y.scrollTop += Eq, Eq = 0), (qq || Eq) && this.view.win.scrollBy(qq, Eq), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(qq) {
        let {
          view: Eq
        } = this, gq = sg(this.atoms, this.style.get(qq, this.extend, this.multiple));
        !this.mustSelect && gq.eq(Eq.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: gq,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(qq) {
        qq.transactions.some((qq => qq.isUserEvent("input.type"))) ? this.destroy() : this.style.update(qq) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const dY = Object.create(null),
      jY = Object.create(null),
      HY = tq.ie && tq.ie_version < 15 || tq.ios && tq.webkit_version < 604;

    function oY(qq, Eq, gq) {
      for (let Yq of qq.facet(Eq)) gq = Yq(gq, qq);
      return gq
    }

    function PY(qq, Eq) {
      Eq = oY(qq.state, pE, Eq);
      let gq, {
          state: lq
        } = qq,
        Oq = 1,
        mq = lq.toText(Eq),
        xq = mq.lines == lq.selection.zV.length;
      if (null != bY && lq.selection.zV.every((qq => qq.empty)) && bY == mq.toString()) {
        let qq = -1;
        gq = lq.changeByRange((gq => {
          let Aq = lq.doc.lineAt(gq.from);
          if (Aq.from == qq) return {
            range: gq
          };
          qq = Aq.from;
          let cq = lq.toText((xq ? mq.line(Oq++).text : Eq) + lq.lineBreak);
          return {
            changes: {
              from: Aq.from,
              insert: cq
            },
            range: Yq.q.cursor(gq.from + cq.length)
          }
        }))
      } else gq = xq ? lq.changeByRange((qq => {
        let Eq = mq.line(Oq++);
        return {
          changes: {
            from: qq.from,
            to: qq.to,
            insert: Eq.text
          },
          range: Yq.q.cursor(qq.from + Eq.length)
        }
      })) : lq.replaceSelection(mq);
      qq.dispatch(gq, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function QY(qq, Eq, gq, lq) {
      if (1 == lq) return Yq.q.cursor(Eq, gq);
      if (2 == lq) return function(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          lq = qq.charCategorizer(Eq),
          Oq = qq.doc.lineAt(Eq),
          mq = Eq - Oq.from;
        if (0 == Oq.length) return Yq.q.cursor(Eq);
        0 == mq ? gq = 1 : mq == Oq.length && (gq = -1);
        let xq = mq,
          Aq = mq;
        gq < 0 ? xq = (0, Yq.$)(Oq.text, mq, !1) : Aq = (0, Yq.$)(Oq.text, mq);
        let cq = lq(Oq.text.slice(xq, Aq));
        for (; xq > 0;) {
          let qq = (0, Yq.$)(Oq.text, xq, !1);
          if (lq(Oq.text.slice(qq, xq)) != cq) break;
          xq = qq
        }
        for (; Aq < Oq.length;) {
          let qq = (0, Yq.$)(Oq.text, Aq);
          if (lq(Oq.text.slice(Aq, qq)) != cq) break;
          Aq = qq
        }
        return Yq.q.range(xq + Oq.from, Aq + Oq.from)
      }(qq.state, Eq, gq);
      {
        let lq = qq.docView.lineAt(Eq, gq),
          Oq = qq.state.doc.lineAt(lq ? lq.posAtEnd : Eq),
          mq = lq ? lq.posAtStart : Oq.from,
          xq = lq ? lq.posAtEnd : Oq.to;
        return xq < qq.state.doc.length && xq == Oq.to && xq++, Yq.q.range(mq, xq)
      }
    }
    jY.scroll = qq => {
      qq.inputState.lastScrollTop = qq.scrollDOM.scrollTop, qq.inputState.lastScrollLeft = qq.scrollDOM.scrollLeft
    }, jY.wheel = jY.mousewheel = qq => {
      qq.inputState.lastWheelEvent = Date.now()
    }, dY.keydown = (qq, Eq) => (qq.inputState.setSelectionOrigin("select"), 27 == Eq.keyCode && 0 != qq.inputState.tabFocusMode && (qq.inputState.tabFocusMode = Date.now() + 2e3), !1), jY.touchstart = (qq, Eq) => {
      let gq = qq.inputState,
        Yq = Eq.targetTouches[0];
      gq.lastTouchTime = Date.now(), Yq && (gq.lastTouchX = Yq.clientX, gq.lastTouchY = Yq.clientY), gq.setSelectionOrigin("select.pointer")
    }, jY.touchmove = qq => {
      qq.inputState.setSelectionOrigin("select.pointer")
    }, dY.mousedown = (qq, Eq) => {
      if (qq.observer.flush(), qq.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let gq = null;
      for (let Yq of qq.state.facet(fE))
        if (gq = Yq(qq, Eq), gq) break;
      if (gq || 0 != Eq.button || (gq = function(qq, Eq) {
          let gq = qq.posAndSideAtCoords({
              x: Eq.clientX,
              y: Eq.clientY
            }, !1),
            lq = hY(Eq),
            Oq = qq.state.selection;
          return {
            update(qq) {
              qq.docChanged && (gq.pos = qq.changes.mapPos(gq.pos), Oq = Oq.map(qq.changes))
            },
            get(Eq, mq, xq) {
              let Aq, cq = qq.posAndSideAtCoords({
                  x: Eq.clientX,
                  y: Eq.clientY
                }, !1),
                uq = QY(qq, cq.pos, cq.assoc, lq);
              if (gq.pos != cq.pos && !mq) {
                let Eq = QY(qq, gq.pos, gq.assoc, lq),
                  Oq = Math.min(Eq.from, uq.from),
                  mq = Math.max(Eq.to, uq.to);
                uq = Oq < uq.from ? Yq.q.range(Oq, mq, uq.assoc) : Yq.q.range(mq, Oq, uq.assoc)
              }
              return mq ? Oq.replaceRange(Oq.main.extend(uq.from, uq.to, uq.assoc)) : xq && 1 == lq && Oq.zV.length > 1 && (Aq = function(qq, Eq) {
                for (let gq = 0; gq < qq.zV.length; gq++) {
                  let {
                    from: lq,
                    to: Oq
                  } = qq.zV[gq];
                  if (lq <= Eq && Oq >= Eq) return Yq.q.create(qq.zV.slice(0, gq).concat(qq.zV.slice(gq + 1)), qq.mainIndex == gq ? 0 : qq.mainIndex - (qq.mainIndex > gq ? 1 : 0))
                }
                return null
              }(Oq, cq.pos)) ? Aq : xq ? Oq.addRange(uq) : Yq.q.create([uq])
            }
          }
        }(qq, Eq)), gq) {
        let Yq = !qq.hasFocus;
        qq.inputState.startMouseSelection(new VY(qq, Eq, gq, Yq)), Yq && qq.observer.ignore((() => {
          gE(qq.contentDOM);
          let Eq = qq.root.activeElement;
          Eq && !Eq.contains(qq.contentDOM) && Eq.blur()
        }));
        let lq = qq.inputState.mouseSelection;
        if (lq) return lq.start(Eq), !1 === lq.dragging
      } else qq.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const yY = tq.ie && tq.ie_version <= 11;
    let tY = null,
      rY = 0,
      vY = 0;

    function hY(qq) {
      if (!yY) return qq.detail;
      let Eq = tY,
        gq = vY;
      return tY = qq, vY = Date.now(), rY = !Eq || gq > Date.now() - 400 && Math.abs(Eq.clientX - qq.clientX) < 2 && Math.abs(Eq.clientY - qq.clientY) < 2 ? (rY + 1) % 3 : 1
    }

    function nY(qq, Eq, gq, Yq) {
      if (!(gq = oY(qq.state, pE, gq))) return;
      let lq = qq.posAtCoords({
          x: Eq.clientX,
          y: Eq.clientY
        }, !1),
        {
          draggedContent: Oq
        } = qq.inputState,
        mq = Yq && Oq && function(qq, Eq) {
          let gq = qq.state.facet(ZE);
          return gq.length ? gq[0](Eq) : tq.mac ? !Eq.altKey : !Eq.ctrlKey
        }(qq, Eq) ? {
          from: Oq.from,
          to: Oq.to
        } : null,
        xq = {
          from: lq,
          insert: gq
        },
        Aq = qq.state.changes(mq ? [mq, xq] : xq);
      qq.focus(), qq.dispatch({
        changes: Aq,
        selection: {
          anchor: Aq.mapPos(lq, -1),
          head: Aq.mapPos(lq, 1)
        },
        userEvent: mq ? "move.drop" : "input.drop"
      }), qq.inputState.draggedContent = null
    }
    dY.dragstart = (qq, Eq) => {
      let {
        selection: {
          main: gq
        }
      } = qq.state;
      if (Eq.target.draggable) {
        let lq = qq.docView.tile.nearest(Eq.target);
        if (lq && lq.isWidget()) {
          let qq = lq.posAtStart,
            Eq = qq + lq.length;
          (qq >= gq.to || Eq <= gq.from) && (gq = Yq.q.range(qq, Eq))
        }
      }
      let {
        inputState: lq
      } = qq;
      return lq.mouseSelection && (lq.mouseSelection.dragging = !0), lq.draggedContent = gq, Eq.dataTransfer && (Eq.dataTransfer.setData("Text", oY(qq.state, GE, qq.state.sliceDoc(gq.from, gq.to))), Eq.dataTransfer.effectAllowed = "copyMove"), !1
    }, dY.dragend = qq => (qq.inputState.draggedContent = null, !1), dY.drop = (qq, Eq) => {
      if (!Eq.dataTransfer) return !1;
      if (qq.state.readOnly) return !0;
      let gq = Eq.dataTransfer.files;
      if (gq && gq.length) {
        let Yq = Array(gq.length),
          lq = 0,
          Oq = () => {
            ++lq == gq.length && nY(qq, Eq, Yq.filter((qq => null != qq)).join(qq.state.lineBreak), !1)
          };
        for (let qq = 0; qq < gq.length; qq++) {
          let Eq = new FileReader;
          Eq.onerror = Oq, Eq.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Eq.result) || (Yq[qq] = Eq.result), Oq()
          }, Eq.readAsText(gq[qq])
        }
        return !0
      } {
        let gq = Eq.dataTransfer.getData("Text");
        if (gq) return nY(qq, Eq, gq, !0), !0
      }
      return !1
    }, dY.paste = (qq, Eq) => {
      if (qq.state.readOnly) return !0;
      qq.observer.flush();
      let gq = HY ? null : Eq.clipboardData;
      return gq ? (PY(qq, gq.getData("text/plain") || gq.getData("text/uri-list")), !0) : (function(qq) {
        let Eq = qq.dom.parentNode;
        if (!Eq) return;
        let gq = Eq.appendChild(document.createElement("textarea"));
        gq.style.cssText = "position: fixed; left: -10000px; top: 10px", gq.focus(), setTimeout((() => {
          qq.focus(), gq.remove(), PY(qq, gq.value)
        }), 50)
      }(qq), !1)
    };
    let bY = null;
    dY.copy = dY.cut = (qq, Eq) => {
      if (!kq(qq.contentDOM, qq.observer.selectionRange)) return !1;
      let {
        text: gq,
        zV: Yq,
        linewise: lq
      } = function(qq) {
        let Eq = [],
          gq = [],
          Yq = !1;
        for (let lq of qq.selection.zV) lq.empty || (Eq.push(qq.sliceDoc(lq.from, lq.to)), gq.push(lq));
        if (!Eq.length) {
          let lq = -1;
          for (let {
              from: Yq
            }
            of qq.selection.zV) {
            let Oq = qq.doc.lineAt(Yq);
            Oq.number > lq && (Eq.push(Oq.text), gq.push({
              from: Oq.from,
              to: Math.min(qq.doc.length, Oq.to + 1)
            })), lq = Oq.number
          }
          Yq = !0
        }
        return {
          text: oY(qq, GE, Eq.join(qq.lineBreak)),
          zV: gq,
          linewise: Yq
        }
      }(qq.state);
      if (!gq && !lq) return !1;
      bY = lq ? gq : null, "cut" != Eq.type || qq.state.readOnly || qq.dispatch({
        changes: Yq,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Oq = HY ? null : Eq.clipboardData;
      return Oq ? (Oq.clearData(), Oq.setData("text/plain", gq), !0) : (function(qq, Eq) {
        let gq = qq.dom.parentNode;
        if (!gq) return;
        let Yq = gq.appendChild(document.createElement("textarea"));
        Yq.style.cssText = "position: fixed; left: -10000px; top: 10px", Yq.value = Eq, Yq.focus(), Yq.selectionEnd = Eq.length, Yq.selectionStart = 0, setTimeout((() => {
          Yq.remove(), qq.focus()
        }), 50)
      }(qq, gq), !1)
    };
    const iY = Yq.e.define();

    function ZY(qq, Eq) {
      let gq = [];
      for (let Yq of qq.facet(SE)) {
        let lq = Yq(qq, Eq);
        lq && gq.push(lq)
      }
      return gq.length ? qq.update({
        effects: gq,
        annotations: iY.of(!0)
      }) : null
    }

    function fY(qq) {
      setTimeout((() => {
        let Eq = qq.hasFocus;
        if (Eq != qq.inputState.notifiedFocused) {
          let gq = ZY(qq.state, Eq);
          gq ? qq.dispatch(gq) : qq.update([])
        }
      }), 10)
    }
    jY.focus = qq => {
      qq.inputState.lastFocusTime = Date.now(), qq.scrollDOM.scrollTop || !qq.inputState.lastScrollTop && !qq.inputState.lastScrollLeft || (qq.scrollDOM.scrollTop = qq.inputState.lastScrollTop, qq.scrollDOM.scrollLeft = qq.inputState.lastScrollLeft), fY(qq)
    }, jY.blur = qq => {
      qq.observer.clearSelectionRange(), fY(qq)
    }, jY.compositionstart = jY.compositionupdate = qq => {
      qq.observer.editContext || (null == qq.inputState.compositionFirstChange && (qq.inputState.compositionFirstChange = !0), qq.inputState.composing < 0 && (qq.inputState.composing = 0))
    }, jY.compositionend = qq => {
      qq.observer.editContext || (qq.inputState.composing = -1, qq.inputState.compositionEndedAt = Date.now(), qq.inputState.compositionPendingKey = !0, qq.inputState.compositionPendingChange = qq.observer.pendingRecords().length > 0, qq.inputState.compositionFirstChange = null, tq.chrome && tq.android ? qq.observer.flushSoon() : qq.inputState.compositionPendingChange ? Promise.resolve().then((() => qq.observer.flush())) : setTimeout((() => {
        qq.inputState.composing < 0 && qq.docView.hasComposition && qq.update([])
      }), 50))
    }, jY.contextmenu = qq => {
      qq.inputState.lastContextMenu = Date.now()
    }, dY.beforeinput = (qq, Eq) => {
      var gq, Yq;
      if ("insertText" != Eq.inputType && "insertCompositionText" != Eq.inputType || (qq.inputState.insertingText = Eq.data, qq.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Eq.inputType && qq.observer.editContext) {
        let Yq = null === (gq = Eq.dataTransfer) || void 0 === gq ? void 0 : gq.getData("text/plain"),
          lq = Eq.getTargetRanges();
        if (Yq && lq.length) {
          let Eq = lq[0],
            gq = qq.posAtDOM(Eq.startContainer, Eq.startOffset),
            Oq = qq.posAtDOM(Eq.endContainer, Eq.endOffset);
          return OY(qq, {
            from: gq,
            to: Oq,
            insert: qq.state.toText(Yq)
          }, null), !0
        }
      }
      let lq;
      if (tq.chrome && tq.android && (lq = BY.find((qq => qq.inputType == Eq.inputType))) && (qq.observer.delayAndroidKey(lq.key, lq.keyCode), "Backspace" == lq.key || "Delete" == lq.key)) {
        let Eq = (null === (Yq = window.visualViewport) || void 0 === Yq ? void 0 : Yq.height) || 0;
        setTimeout((() => {
          var gq;
          ((null === (gq = window.visualViewport) || void 0 === gq ? void 0 : gq.height) || 0) > Eq + 10 && qq.hasFocus && (qq.contentDOM.blur(), qq.focus())
        }), 100)
      }
      return tq.ios && "deleteContentForward" == Eq.inputType && qq.observer.flushSoon(), tq.safari && "insertText" == Eq.inputType && qq.inputState.composing >= 0 && setTimeout((() => jY.compositionend(qq, Eq)), 20), !1
    };
    const MY = new Set;
    const TY = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let zY = !1;

    function SY() {
      zY = !1
    }
    class pY {
      constructor(qq) {
        this.lineWrapping = qq, this.doc = Yq.O.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(qq, Eq) {
        let gq = this.doc.lineAt(Eq).number - this.doc.lineAt(qq).number + 1;
        return this.lineWrapping && (gq += Math.max(0, Math.ceil((Eq - qq - gq * this.lineLength * .5) / this.lineLength))), this.lineHeight * gq
      }
      heightForLine(qq) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((qq - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(qq) {
        return this.doc = qq, this
      }
      mustRefreshForWrapping(qq) {
        return TY.indexOf(qq) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(qq) {
        let Eq = !1;
        for (let gq = 0; gq < qq.length; gq++) {
          let Yq = qq[gq];
          Yq < 0 ? gq++ : this.heightSamples[Math.floor(10 * Yq)] || (Eq = !0, this.heightSamples[Math.floor(10 * Yq)] = !0)
        }
        return Eq
      }
      refresh(qq, Eq, gq, Yq, lq, Oq) {
        let mq = TY.indexOf(qq) > -1,
          xq = Math.abs(Eq - this.lineHeight) > .3 || this.lineWrapping != mq || Math.abs(gq - this.charWidth) > .1;
        if (this.lineWrapping = mq, this.lineHeight = Eq, this.charWidth = gq, this.textHeight = Yq, this.lineLength = lq, xq) {
          this.heightSamples = {};
          for (let qq = 0; qq < Oq.length; qq++) {
            let Eq = Oq[qq];
            Eq < 0 ? qq++ : this.heightSamples[Math.floor(10 * Eq)] = !0
          }
        }
        return xq
      }
    }
    class GY {
      constructor(qq, Eq) {
        this.from = qq, this.heights = Eq, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class LY {
      constructor(qq, Eq, gq, Yq, lq) {
        this.from = qq, this.length = Eq, this.top = gq, this.height = Yq, this._content = lq
      }
      get type() {
        return "number" == typeof this._content ? Zq.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof zq ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(qq) {
        let Eq = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(qq._content) ? qq._content : [qq]);
        return new LY(this.from, this.length + qq.length, this.top, this.height + qq.height, Eq)
      }
    }
    var JY = function(qq) {
      return qq[qq.ByPos = 0] = "ByPos", qq[qq.ByHeight = 1] = "ByHeight", qq[qq.ByPosNoHeight = 2] = "ByPosNoHeight", qq
    }(JY || (JY = {}));
    const kY = .001;
    class RY {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = qq, this.height = Eq, this.flags = gq
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(qq) {
        this.flags = (qq ? 2 : 0) | -3 & this.flags
      }
      setHeight(qq) {
        this.height != qq && (Math.abs(this.height - qq) > kY && (zY = !0), this.height = qq)
      }
      replace(qq, Eq, gq) {
        return RY.of(gq)
      }
      decomposeLeft(qq, Eq) {
        Eq.push(this)
      }
      decomposeRight(qq, Eq) {
        Eq.push(this)
      }
      applyChanges(qq, Eq, gq, Yq) {
        let lq = this,
          Oq = gq.doc;
        for (let mq = Yq.length - 1; mq >= 0; mq--) {
          let {
            fromA: xq,
            toA: Aq,
            fromB: cq,
            toB: uq
          } = Yq[mq], Bq = lq.lineAt(xq, JY.ByPosNoHeight, gq.setDoc(Eq), 0, 0), Wq = Bq.to >= Aq ? Bq : lq.lineAt(Aq, JY.ByPosNoHeight, gq, 0, 0);
          for (uq += Wq.to - Aq, Aq = Wq.to; mq > 0 && Bq.from <= Yq[mq - 1].toA;) xq = Yq[mq - 1].fromA, cq = Yq[mq - 1].fromB, mq--, xq < Bq.from && (Bq = lq.lineAt(xq, JY.ByPosNoHeight, gq, 0, 0));
          cq += Bq.from - xq, xq = Bq.from;
          let Nq = IY.build(gq.setDoc(Oq), qq, cq, uq);
          lq = UY(lq, lq.replace(xq, Aq, Nq))
        }
        return lq.updateHeight(gq, 0)
      }
      static empty() {
        return new XY(0, 0, 0)
      }
      static of (qq) {
        if (1 == qq.length) return qq[0];
        let Eq = 0,
          gq = qq.length,
          Yq = 0,
          lq = 0;
        for (;;)
          if (Eq == gq)
            if (Yq > 2 * lq) {
              let lq = qq[Eq - 1];
              lq.break ? qq.splice(--Eq, 1, lq.left, null, lq.right) : qq.splice(--Eq, 1, lq.left, lq.right), gq += 1 + lq.break, Yq -= lq.size
            } else {
              if (!(lq > 2 * Yq)) break;
              {
                let Eq = qq[gq];
                Eq.break ? qq.splice(gq, 1, Eq.left, null, Eq.right) : qq.splice(gq, 1, Eq.left, Eq.right), gq += 2 + Eq.break, lq -= Eq.size
              }
            }
        else if (Yq < lq) {
          let gq = qq[Eq++];
          gq && (Yq += gq.size)
        } else {
          let Eq = qq[--gq];
          Eq && (lq += Eq.size)
        }
        let Oq = 0;
        return null == qq[Eq - 1] ? (Oq = 1, Eq--) : null == qq[Eq] && (Oq = 1, gq++), new KY(RY.of(qq.slice(0, Eq)), Oq, RY.of(qq.slice(gq)))
      }
    }

    function UY(qq, Eq) {
      return qq == Eq ? qq : (qq.constructor != Eq.constructor && (zY = !0), Eq)
    }
    RY.prototype.size = 1;
    const FY = fq.replace({});
    class sY extends RY {
      constructor(qq, Eq, gq) {
        super(qq, Eq), this.deco = gq, this.spaceAbove = 0
      }
      mainBlock(qq, Eq) {
        return new LY(Eq, this.length, qq + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(qq, Eq, gq, Yq) {
        return this.spaceAbove && qq < gq + this.spaceAbove ? new LY(Yq, 0, gq, this.spaceAbove, FY) : this.mainBlock(gq, Yq)
      }
      lineAt(qq, Eq, gq, Yq, lq) {
        let Oq = this.mainBlock(Yq, lq);
        return this.spaceAbove ? this.blockAt(0, gq, Yq, lq).join(Oq) : Oq
      }
      forEachLine(qq, Eq, gq, Yq, lq, Oq) {
        qq <= lq + this.length && Eq >= lq && Oq(this.lineAt(0, JY.ByPos, gq, Yq, lq))
      }
      setMeasuredHeight(qq) {
        let Eq = qq.heights[qq.index++];
        Eq < 0 ? (this.spaceAbove = -Eq, Eq = qq.heights[qq.index++]) : this.spaceAbove = 0, this.setHeight(Eq)
      }
      updateHeight(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 3 ? arguments[3] : void 0;
        return gq && gq.from <= Eq && gq.more && this.setMeasuredHeight(gq), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class XY extends sY {
      constructor(qq, Eq, gq) {
        super(qq, Eq, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = gq
      }
      mainBlock(qq, Eq) {
        return new LY(Eq, this.length, qq + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(qq, Eq, gq) {
        let Yq = gq[0];
        return 1 == gq.length && (Yq instanceof XY || Yq instanceof wY && 4 & Yq.flags) && Math.abs(this.length - Yq.length) < 10 ? (Yq instanceof wY ? Yq = new XY(Yq.length, this.height, this.spaceAbove) : Yq.height = this.height, this.outdated || (Yq.outdated = !1), Yq) : RY.of(gq)
      }
      updateHeight(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        return Yq && Yq.from <= Eq && Yq.more ? this.setMeasuredHeight(Yq) : (gq || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, qq.heightForLine(this.length - this.collapsed)) + this.breaks * qq.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class wY extends RY {
      constructor(qq) {
        super(qq, 0)
      }
      heightMetrics(qq, Eq) {
        let gq, Yq = qq.doc.lineAt(Eq).number,
          lq = qq.doc.lineAt(Eq + this.length).number,
          Oq = lq - Yq + 1,
          mq = 0;
        if (qq.lineWrapping) {
          let Eq = Math.min(this.height, qq.lineHeight * Oq);
          gq = Eq / Oq, this.length > Oq + 1 && (mq = (this.height - Eq) / (this.length - Oq - 1))
        } else gq = this.height / Oq;
        return {
          firstLine: Yq,
          lastLine: lq,
          perLine: gq,
          perChar: mq
        }
      }
      blockAt(qq, Eq, gq, Yq) {
        let {
          firstLine: lq,
          lastLine: Oq,
          perLine: mq,
          perChar: xq
        } = this.heightMetrics(Eq, Yq);
        if (Eq.lineWrapping) {
          let lq = Yq + (qq < Eq.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (qq - gq) / this.height)) * this.length)),
            Oq = Eq.doc.lineAt(lq),
            Aq = mq + Oq.length * xq,
            cq = Math.max(gq, qq - Aq / 2);
          return new LY(Oq.from, Oq.length, cq, Aq, 0)
        } {
          let Yq = Math.max(0, Math.min(Oq - lq, Math.floor((qq - gq) / mq))),
            {
              from: xq,
              length: Aq
            } = Eq.doc.line(lq + Yq);
          return new LY(xq, Aq, gq + mq * Yq, mq, 0)
        }
      }
      lineAt(qq, Eq, gq, Yq, lq) {
        if (Eq == JY.ByHeight) return this.blockAt(qq, gq, Yq, lq);
        if (Eq == JY.ByPosNoHeight) {
          let {
            from: Eq,
            to: Yq
          } = gq.doc.lineAt(qq);
          return new LY(Eq, Yq - Eq, 0, 0, 0)
        }
        let {
          firstLine: Oq,
          perLine: mq,
          perChar: xq
        } = this.heightMetrics(gq, lq), Aq = gq.doc.lineAt(qq), cq = mq + Aq.length * xq, uq = Aq.number - Oq, Bq = Yq + mq * uq + xq * (Aq.from - lq - uq);
        return new LY(Aq.from, Aq.length, Math.max(Yq, Math.min(Bq, Yq + this.height - cq)), cq, 0)
      }
      forEachLine(qq, Eq, gq, Yq, lq, Oq) {
        qq = Math.max(qq, lq), Eq = Math.min(Eq, lq + this.length);
        let {
          firstLine: mq,
          perLine: xq,
          perChar: Aq
        } = this.heightMetrics(gq, lq);
        for (let cq = qq, uq = Yq; cq <= Eq;) {
          let Eq = gq.doc.lineAt(cq);
          if (cq == qq) {
            let gq = Eq.number - mq;
            uq += xq * gq + Aq * (qq - lq - gq)
          }
          let Yq = xq + Aq * Eq.length;
          Oq(new LY(Eq.from, Eq.length, uq, Yq, 0)), uq += Yq, cq = Eq.to + 1
        }
      }
      replace(qq, Eq, gq) {
        let Yq = this.length - Eq;
        if (Yq > 0) {
          let qq = gq[gq.length - 1];
          qq instanceof wY ? gq[gq.length - 1] = new wY(qq.length + Yq) : gq.push(null, new wY(Yq - 1))
        }
        if (qq > 0) {
          let Eq = gq[0];
          Eq instanceof wY ? gq[0] = new wY(qq + Eq.length) : gq.unshift(new wY(qq - 1), null)
        }
        return RY.of(gq)
      }
      decomposeLeft(qq, Eq) {
        Eq.push(new wY(qq - 1), null)
      }
      decomposeRight(qq, Eq) {
        Eq.push(null, new wY(this.length - qq - 1))
      }
      updateHeight(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = Eq + this.length;
        if (Yq && Yq.from <= Eq + this.length && Yq.more) {
          let gq = [],
            Oq = Math.max(Eq, Yq.from),
            mq = -1;
          for (Yq.from > Eq && gq.push(new wY(Yq.from - Eq - 1).updateHeight(qq, Eq)); Oq <= lq && Yq.more;) {
            let Eq = qq.doc.lineAt(Oq).length;
            gq.length && gq.push(null);
            let lq = Yq.heights[Yq.index++],
              xq = 0;
            lq < 0 && (xq = -lq, lq = Yq.heights[Yq.index++]), -1 == mq ? mq = lq : Math.abs(lq - mq) >= kY && (mq = -2);
            let Aq = new XY(Eq, lq, xq);
            Aq.outdated = !1, gq.push(Aq), Oq += Eq + 1
          }
          Oq <= lq && gq.push(null, new wY(lq - Oq).updateHeight(qq, Oq));
          let xq = RY.of(gq);
          return (mq < 0 || Math.abs(xq.height - this.height) >= kY || Math.abs(mq - this.heightMetrics(qq, Eq).perLine) >= kY) && (zY = !0), UY(this, xq)
        }
        return (gq || this.outdated) && (this.setHeight(qq.heightForGap(Eq, Eq + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class KY extends RY {
      constructor(qq, Eq, gq) {
        super(qq.length + Eq + gq.length, qq.height + gq.height, Eq | (qq.outdated || gq.outdated ? 2 : 0)), this.left = qq, this.right = gq, this.size = qq.size + gq.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(qq, Eq, gq, Yq) {
        let lq = gq + this.left.height;
        return qq < lq ? this.left.blockAt(qq, Eq, gq, Yq) : this.right.blockAt(qq, Eq, lq, Yq + this.left.length + this.break)
      }
      lineAt(qq, Eq, gq, Yq, lq) {
        let Oq = Yq + this.left.height,
          mq = lq + this.left.length + this.break,
          xq = Eq == JY.ByHeight ? qq < Oq : qq < mq,
          Aq = xq ? this.left.lineAt(qq, Eq, gq, Yq, lq) : this.right.lineAt(qq, Eq, gq, Oq, mq);
        if (this.break || (xq ? Aq.to < mq : Aq.from > mq)) return Aq;
        let cq = Eq == JY.ByPosNoHeight ? JY.ByPosNoHeight : JY.ByPos;
        return xq ? Aq.join(this.right.lineAt(mq, cq, gq, Oq, mq)) : this.left.lineAt(mq, cq, gq, Yq, lq).join(Aq)
      }
      forEachLine(qq, Eq, gq, Yq, lq, Oq) {
        let mq = Yq + this.left.height,
          xq = lq + this.left.length + this.break;
        if (this.break) qq < xq && this.left.forEachLine(qq, Eq, gq, Yq, lq, Oq), Eq >= xq && this.right.forEachLine(qq, Eq, gq, mq, xq, Oq);
        else {
          let Aq = this.lineAt(xq, JY.ByPos, gq, Yq, lq);
          qq < Aq.from && this.left.forEachLine(qq, Aq.from - 1, gq, Yq, lq, Oq), Aq.to >= qq && Aq.from <= Eq && Oq(Aq), Eq > Aq.to && this.right.forEachLine(Aq.to + 1, Eq, gq, mq, xq, Oq)
        }
      }
      replace(qq, Eq, gq) {
        let Yq = this.left.length + this.break;
        if (Eq < Yq) return this.balanced(this.left.replace(qq, Eq, gq), this.right);
        if (qq > this.left.length) return this.balanced(this.left, this.right.replace(qq - Yq, Eq - Yq, gq));
        let lq = [];
        qq > 0 && this.decomposeLeft(qq, lq);
        let Oq = lq.length;
        for (let mq of gq) lq.push(mq);
        if (qq > 0 && CY(lq, Oq - 1), Eq < this.length) {
          let qq = lq.length;
          this.decomposeRight(Eq, lq), CY(lq, qq)
        }
        return RY.of(lq)
      }
      decomposeLeft(qq, Eq) {
        let gq = this.left.length;
        if (qq <= gq) return this.left.decomposeLeft(qq, Eq);
        Eq.push(this.left), this.break && (gq++, qq >= gq && Eq.push(null)), qq > gq && this.right.decomposeLeft(qq - gq, Eq)
      }
      decomposeRight(qq, Eq) {
        let gq = this.left.length,
          Yq = gq + this.break;
        if (qq >= Yq) return this.right.decomposeRight(qq - Yq, Eq);
        qq < gq && this.left.decomposeRight(qq, Eq), this.break && qq < Yq && Eq.push(null), Eq.push(this.right)
      }
      balanced(qq, Eq) {
        return qq.size > 2 * Eq.size || Eq.size > 2 * qq.size ? RY.of(this.break ? [qq, null, Eq] : [qq, Eq]) : (this.left = UY(this.left, qq), this.right = UY(this.right, Eq), this.setHeight(qq.height + Eq.height), this.outdated = qq.outdated || Eq.outdated, this.size = qq.size + Eq.size, this.length = qq.length + this.break+Eq.length, this)
      }
      updateHeight(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: lq,
            right: Oq
          } = this,
          mq = Eq + lq.length + this.break,
          xq = null;
        return Yq && Yq.from <= Eq + lq.length && Yq.more ? xq = lq = lq.updateHeight(qq, Eq, gq, Yq) : lq.updateHeight(qq, Eq, gq), Yq && Yq.from <= mq + Oq.length && Yq.more ? xq = Oq = Oq.updateHeight(qq, mq, gq, Yq) : Oq.updateHeight(qq, mq, gq), xq ? this.balanced(lq, Oq) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function CY(qq, Eq) {
      let gq, Yq;
      null == qq[Eq] && (gq = qq[Eq - 1]) instanceof wY && (Yq = qq[Eq + 1]) instanceof wY && qq.splice(Eq - 1, 3, new wY(gq.length + 1 + Yq.length))
    }
    class IY {
      constructor(qq, Eq) {
        this.pos = qq, this.oracle = Eq, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = qq
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(qq, Eq) {
        if (this.lineStart > -1) {
          let qq = Math.min(Eq, this.lineEnd),
            gq = this.nodes[this.nodes.length - 1];
          gq instanceof XY ? gq.length += qq - this.pos : (qq > this.pos || !this.isCovered) && this.nodes.push(new XY(qq - this.pos, -1, 0)), this.writtenTo = qq, Eq > qq && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Eq
      }
      point(qq, Eq, gq) {
        if (qq < Eq || gq.heightRelevant) {
          let Yq = gq.widget ? gq.widget.estimatedHeight : 0,
            lq = gq.widget ? gq.widget.lineBreaks : 0;
          Yq < 0 && (Yq = this.oracle.lineHeight);
          let Oq = Eq - qq;
          gq.block ? this.fEq(new sY(Oq, Yq, gq)) : (Oq || lq || Yq >= 5) && this.addLineDeco(Yq, lq, Oq)
        } else Eq > qq && this.span(qq, Eq);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: qq,
          to: Eq
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = qq, this.lineEnd = Eq, this.writtenTo < qq && ((this.writtenTo < qq - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, qq - 1)), this.nodes.push(null)), this.pos > qq && this.nodes.push(new XY(this.pos - qq, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(qq, Eq) {
        let gq = new wY(Eq - qq);
        return this.oracle.doc.lineAt(qq).to == Eq && (gq.flags |= 4), gq
      }
      ensureLine() {
        this.enterLine();
        let qq = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (qq instanceof XY) return qq;
        let Eq = new XY(0, -1, 0);
        return this.nodes.push(Eq), Eq
      }
      fEq(qq) {
        this.enterLine();
        let Eq = qq.deco;
        Eq && Eq.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(qq), this.writtenTo = this.pos = this.pos + qq.length, Eq && Eq.endSide > 0 && (this.covering = qq)
      }
      addLineDeco(qq, Eq, gq) {
        let Yq = this.ensureLine();
        Yq.length += gq, Yq.collapsed += gq, Yq.widgetHeight = Math.max(Yq.widgetHeight, qq), Yq.breaks += Eq, this.writtenTo = this.pos = this.pos + gq
      }
      finish(qq) {
        let Eq = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Eq instanceof XY || this.isCovered ? (this.writtenTo < this.pos || null == Eq) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new XY(0, -1, 0));
        let gq = qq;
        for (let Yq of this.nodes) Yq instanceof XY && Yq.updateHeight(this.oracle, gq), gq += Yq ? Yq.length : 1;
        return this.nodes
      }
      static build(qq, Eq, gq, lq) {
        let Oq = new IY(gq, qq);
        return Yq.G.spans(Eq, gq, lq, Oq, 0), Oq.finish(gq)
      }
    }
    class eY {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(qq, Eq, gq, Yq) {
        (qq < Eq || gq && gq.heightRelevant || Yq && Yq.heightRelevant) && pq(qq, Eq, this.changes, 5)
      }
    }

    function DY(qq, Eq) {
      let gq = qq.getBoundingClientRect(),
        Yq = qq.ownerDocument,
        lq = Yq.defaultView || window,
        Oq = Math.max(0, gq.left),
        mq = Math.min(lq.innerWidth, gq.right),
        xq = Math.max(0, gq.top),
        Aq = Math.min(lq.innerHeight, gq.bottom);
      for (let cq = qq.parentNode; cq && cq != Yq.body;)
        if (1 == cq.nodeType) {
          let Eq = cq,
            gq = window.getComputedStyle(Eq);
          if ((Eq.scrollHeight > Eq.clientHeight || Eq.scrollWidth > Eq.clientWidth) && "visible" != gq.overflow) {
            let gq = Eq.getBoundingClientRect();
            Oq = Math.max(Oq, gq.left), mq = Math.min(mq, gq.right), xq = Math.max(xq, gq.top), Aq = Math.min(cq == qq.parentNode ? lq.innerHeight : Aq, gq.bottom)
          }
          cq = "absolute" == gq.position || "fixed" == gq.position ? Eq.offsetParent : Eq.parentNode
        } else {
          if (11 != cq.nodeType) break;
          cq = cq.host
        } return {
        left: Oq - gq.left,
        right: Math.max(Oq, mq) - gq.left,
        top: xq - (gq.top + Eq),
        bottom: Math.max(xq, Aq) - (gq.top + Eq)
      }
    }

    function ql(qq, Eq) {
      let gq = qq.getBoundingClientRect();
      return {
        left: 0,
        right: gq.right - gq.left,
        top: Eq,
        bottom: gq.bottom - (gq.top + Eq)
      }
    }
    class El {
      constructor(qq, Eq, gq, Yq) {
        this.from = qq, this.to = Eq, this.size = gq, this.displaySize = Yq
      }
      static same(qq, Eq) {
        if (qq.length != Eq.length) return !1;
        for (let gq = 0; gq < qq.length; gq++) {
          let Yq = qq[gq],
            lq = Eq[gq];
          if (Yq.from != lq.from || Yq.to != lq.to || Yq.size != lq.size) return !1
        }
        return !0
      }
      draw(qq, Eq) {
        return fq.replace({
          widget: new gl(this.displaySize * (Eq ? qq.scaleY : qq.scaleX), Eq)
        }).range(this.from, this.to)
      }
    }
    class gl extends iq {
      constructor(qq, Eq) {
        super(), this.size = qq, this.vertical = Eq
      }
      eq(qq) {
        return qq.size == this.size && qq.vertical == this.vertical
      }
      toDOM() {
        let qq = document.createElement("div");
        return this.vertical ? qq.style.height = this.size + "px" : (qq.style.width = this.size + "px", qq.style.height = "2px", qq.style.display = "inline-block"), qq
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class Yl {
      constructor(qq, Eq) {
        this.view = qq, this.state = Eq, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = xl, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = cE.LTR, this.xqq = [], this.mustEnforceCursorAssoc = !1;
        let gq = Eq.facet(DE).some((qq => "function" != typeof qq && "cm-lineWrapping" == qq.class));
        this.heightOracle = new pY(gq), this.stateDeco = Al(Eq), this.heightMap = RY.empty().applyChanges(this.stateDeco, Yq.O.empty, this.heightOracle.setDoc(Eq.doc), [new cg(0, 0, 0, Eq.doc.length)]);
        for (let Yq = 0; Yq < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Yq++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = fq.set(this.lineGaps.map((qq => qq.draw(this, !1)))), this.scrollParent = qq.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let qq = [this.viewport],
          {
            main: Eq
          } = this.state.selection;
        for (let gq = 0; gq <= 1; gq++) {
          let Yq = gq ? Eq.head : Eq.anchor;
          if (!qq.some((qq => {
              let {
                from: Eq,
                to: gq
              } = qq;
              return Yq >= Eq && Yq <= gq
            }))) {
            let {
              from: Eq,
              to: gq
            } = this.lineBlockAt(Yq);
            qq.push(new ll(Eq, gq))
          }
        }
        return this.viewports = qq.sort(((qq, Eq) => qq.from - Eq.from)), this.updateScaler()
      }
      updateScaler() {
        let qq = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? xl : new cl(this.heightOracle, this.heightMap, this.viewports), qq.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (qq => {
          this.viewportLines.push(ul(qq, this.scaler))
        }))
      }
      update(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = qq.state;
        let gq = this.stateDeco;
        this.stateDeco = Al(this.state);
        let lq = qq.changedRanges,
          Oq = cg.extendWithRanges(lq, function(qq, Eq, gq) {
            let lq = new eY;
            return Yq.G.compare(qq, Eq, gq, lq, 0), lq.changes
          }(gq, this.stateDeco, qq ? qq.changes : Yq.ChangeSet.empty(this.state.doc.length))),
          mq = this.heightMap.height,
          xq = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        SY(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, qq.startState.doc, this.heightOracle.setDoc(this.state.doc), Oq), (this.heightMap.height != mq || zY) && (qq.flags |= 2), xq ? (this.scrollAnchorPos = qq.changes.mapPos(xq.from, -1), this.scrollAnchorHeight = xq.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = mq);
        let Aq = Oq.length ? this.mapViewport(this.viewport, qq.changes) : this.viewport;
        (Eq && (Eq.range.head < Aq.from || Eq.range.head > Aq.to) || !this.viewportIsAppropriate(Aq)) && (Aq = this.getViewport(0, Eq));
        let cq = Aq.from != this.viewport.from || Aq.to != this.viewport.to;
        this.viewport = Aq, qq.flags |= this.updateForViewport(), (cq || !qq.changes.empty || 2 & qq.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, qq.changes))), qq.flags |= this.computeVisibleRanges(qq.changes), Eq && (this.scrollTarget = Eq), !this.mustEnforceCursorAssoc && (qq.selectionSet || qq.focusChanged) && qq.view.lineWrapping && qq.state.selection.main.empty && qq.state.selection.main.assoc && !qq.state.facet(JE) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: qq
        } = this, Eq = qq.contentDOM, gq = window.getComputedStyle(Eq), lq = this.heightOracle, Oq = gq.whiteSpace;
        this.defaultTextDirection = "rtl" == gq.direction ? cE.RTL : cE.LTR;
        let mq = this.heightOracle.mustRefreshForWrapping(Oq) || "refresh" === this.mustMeasureContent,
          xq = Eq.getBoundingClientRect(),
          Aq = mq || this.mustMeasureContent || this.contentDOMHeight != xq.height;
        this.contentDOMHeight = xq.height, this.mustMeasureContent = !1;
        let cq = 0,
          uq = 0;
        if (xq.width && xq.height) {
          let {
            scaleX: qq,
            scaleY: gq
          } = Iq(Eq, xq);
          (qq > .005 && Math.abs(this.scaleX - qq) > .005 || gq > .005 && Math.abs(this.scaleY - gq) > .005) && (this.scaleX = qq, this.scaleY = gq, cq |= 16, mq = Aq = !0)
        }
        let Bq = (parseInt(gq.paddingTop) || 0) * this.scaleY,
          Wq = (parseInt(gq.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Bq && this.paddingBottom == Wq || (this.paddingTop = Bq, this.paddingBottom = Wq, cq |= 18), this.editorWidth != qq.scrollDOM.clientWidth && (lq.lineWrapping && (Aq = !0), this.editorWidth = qq.scrollDOM.clientWidth, cq |= 16);
        let Nq = eq(this.view.contentDOM, !1).y;
        Nq != this.scrollParent && (this.scrollParent = Nq, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let aq = this.getScrollOffset();
        this.scrollOffset != aq && (this.scrollAnchorHeight = -1, this.scrollOffset = aq), this.scrolledToBottom = OE(this.scrollParent || qq.win);
        let Vq = (this.printing ? ql : DY)(Eq, this.paddingTop),
          dq = Vq.top - this.pixelViewport.top,
          jq = Vq.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Vq;
        let Hq = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Hq != this.inView && (this.inView = Hq, Hq && (Aq = !0)), !this.inView && !this.scrollTarget && ! function(qq) {
            let Eq = qq.getBoundingClientRect(),
              gq = qq.ownerDocument.defaultView || window;
            return Eq.left < gq.innerWidth && Eq.right > 0 && Eq.top < gq.innerHeight && Eq.bottom > 0
          }(qq.dom)) return 0;
        let oq = xq.width;
        if (this.contentDOMWidth == oq && this.editorHeight == qq.scrollDOM.clientHeight || (this.contentDOMWidth = xq.width, this.editorHeight = qq.scrollDOM.clientHeight, cq |= 16), Aq) {
          let Eq = qq.docView.measureVisibleLineHeights(this.viewport);
          if (lq.mustRefreshForHeights(Eq) && (mq = !0), mq || lq.lineWrapping && Math.abs(oq - this.contentDOMWidth) > lq.charWidth) {
            let {
              lineHeight: gq,
              charWidth: Yq,
              textHeight: xq
            } = qq.docView.measureTextSize();
            mq = gq > 0 && lq.refresh(Oq, gq, Yq, xq, Math.max(5, oq / Yq), Eq), mq && (qq.docView.minWidth = 0, cq |= 16)
          }
          dq > 0 && jq > 0 ? uq = Math.max(dq, jq) : dq < 0 && jq < 0 && (uq = Math.min(dq, jq)), SY();
          for (let gq of this.viewports) {
            let Oq = gq.from == this.viewport.from ? Eq : qq.docView.measureVisibleLineHeights(gq);
            this.heightMap = (mq ? RY.empty().applyChanges(this.stateDeco, Yq.O.empty, this.heightOracle, [new cg(0, 0, 0, qq.state.doc.length)]) : this.heightMap).updateHeight(lq, 0, mq, new GY(gq.from, Oq))
          }
          zY && (cq |= 2)
        }
        let Pq = !this.viewportIsAppropriate(this.viewport, uq) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Pq && (2 & cq && (cq |= this.updateScaler()), this.viewport = this.getViewport(uq, this.scrollTarget), cq |= this.updateForViewport()), (2 & cq || Pq) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(mq ? [] : this.lineGaps, qq)), cq |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, qq.docView.enforceCursorAssoc()), cq
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(qq, Eq) {
        let gq = .5 - Math.max(-.5, Math.min(.5, qq / 1e3 / 2)),
          Yq = this.heightMap,
          lq = this.heightOracle,
          {
            visibleTop: Oq,
            visibleBottom: mq
          } = this,
          xq = new ll(Yq.lineAt(Oq - 1e3 * gq, JY.ByHeight, lq, 0, 0).from, Yq.lineAt(mq + 1e3 * (1 - gq), JY.ByHeight, lq, 0, 0).to);
        if (Eq) {
          let {
            head: qq
          } = Eq.range;
          if (qq < xq.from || qq > xq.to) {
            let gq, Oq = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              mq = Yq.lineAt(qq, JY.ByPos, lq, 0, 0);
            gq = "center" == Eq.y ? (mq.top + mq.bottom) / 2 - Oq / 2 : "start" == Eq.y || "nearest" == Eq.y && qq < xq.from ? mq.top : mq.bottom - Oq, xq = new ll(Yq.lineAt(gq - 500, JY.ByHeight, lq, 0, 0).from, Yq.lineAt(gq + Oq + 500, JY.ByHeight, lq, 0, 0).to)
          }
        }
        return xq
      }
      mapViewport(qq, Eq) {
        let gq = Eq.mapPos(qq.from, -1),
          Yq = Eq.mapPos(qq.to, 1);
        return new ll(this.heightMap.lineAt(gq, JY.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Yq, JY.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(qq) {
        let {
          from: Eq,
          to: gq
        } = qq, Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: lq
        } = this.heightMap.lineAt(Eq, JY.ByPos, this.heightOracle, 0, 0), {
          bottom: Oq
        } = this.heightMap.lineAt(gq, JY.ByPos, this.heightOracle, 0, 0), {
          visibleTop: mq,
          visibleBottom: xq
        } = this;
        return (0 == Eq || lq <= mq - Math.max(10, Math.min(-Yq, 250))) && (gq == this.state.doc.length || Oq >= xq + Math.max(10, Math.min(Yq, 250))) && lq > mq - 2e3 && Oq < xq + 2e3
      }
      mapLineGaps(qq, Eq) {
        if (!qq.length || Eq.empty) return qq;
        let gq = [];
        for (let Yq of qq) Eq.touchesRange(Yq.from, Yq.to) || gq.push(new El(Eq.mapPos(Yq.from), Eq.mapPos(Yq.to), Yq.size, Yq.displaySize));
        return gq
      }
      ensureLineGaps(qq, Eq) {
        let gq = this.heightOracle.lineWrapping,
          lq = gq ? 1e4 : 2e3,
          Oq = lq >> 1,
          mq = lq << 1;
        if (this.defaultTextDirection != cE.LTR && !gq) return [];
        let xq = [],
          Aq = (lq, mq, cq, uq) => {
            if (mq - lq < Oq) return;
            let Bq = this.state.selection.main,
              Wq = [Bq.from];
            Bq.empty || Wq.push(Bq.to);
            for (let qq of Wq)
              if (qq > lq && qq < mq) return Aq(lq, qq - 10, cq, uq), void Aq(qq + 10, mq, cq, uq);
            let Nq = function(qq, Eq) {
              for (let gq of qq)
                if (Eq(gq)) return gq;
              return
            }(qq, (qq => qq.from >= cq.from && qq.to <= cq.to && Math.abs(qq.from - lq) < Oq && Math.abs(qq.to - mq) < Oq && !Wq.some((Eq => qq.from < Eq && qq.to > Eq))));
            if (!Nq) {
              if (mq < cq.to && Eq && gq && Eq.xqq.some((qq => qq.from <= mq && qq.to >= mq))) {
                let qq = Eq.moveToLineBoundary(Yq.q.cursor(mq), !1, !0).head;
                qq > lq && (mq = qq)
              }
              let qq = this.gapSize(cq, lq, mq, uq);
              Nq = new El(lq, mq, qq, gq || qq < 2e6 ? qq : 2e6)
            }
            xq.push(Nq)
          },
          cq = Eq => {
            if (Eq.length < mq || Eq.type != Zq.Text) return;
            let Oq = function(qq, Eq, gq) {
              let lq = [],
                Oq = qq,
                mq = 0;
              Yq.G.spans(gq, qq, Eq, {
                span() {},
                point(qq, Eq) {
                  qq > Oq && (lq.push({
                    from: Oq,
                    to: qq
                  }), mq += qq - Oq), Oq = Eq
                }
              }, 20), Oq < Eq && (lq.push({
                from: Oq,
                to: Eq
              }), mq += Eq - Oq);
              return {
                total: mq,
                zV: lq
              }
            }(Eq.from, Eq.to, this.stateDeco);
            if (Oq.total < mq) return;
            let xq, cq, uq = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (gq) {
              let qq, gq, Yq = lq / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != uq) {
                let lq = ml(Oq, uq),
                  mq = ((this.visibleBottom - this.visibleTop) / 2 + Yq) / Eq.height;
                qq = lq - mq, gq = lq + mq
              } else qq = (this.visibleTop - Eq.top - Yq) / Eq.height, gq = (this.visibleBottom - Eq.top + Yq) / Eq.height;
              xq = Ol(Oq, qq), cq = Ol(Oq, gq)
            } else {
              let gq = Oq.total * this.heightOracle.charWidth,
                Yq = lq * this.heightOracle.charWidth,
                mq = 0;
              if (gq > 2e6)
                for (let lq of qq) lq.from >= Eq.from && lq.from < Eq.to && lq.size != lq.displaySize && lq.from * this.heightOracle.charWidth + mq < this.pixelViewport.left && (mq = lq.size - lq.displaySize);
              let Aq, Bq, Wq = this.pixelViewport.left + mq,
                Nq = this.pixelViewport.right + mq;
              if (null != uq) {
                let qq = ml(Oq, uq),
                  Eq = ((Nq - Wq) / 2 + Yq) / gq;
                Aq = qq - Eq, Bq = qq + Eq
              } else Aq = (Wq - Yq) / gq, Bq = (Nq + Yq) / gq;
              xq = Ol(Oq, Aq), cq = Ol(Oq, Bq)
            }
            xq > Eq.from && Aq(Eq.from, xq, Eq, Oq), cq < Eq.to && Aq(cq, Eq.to, Eq, Oq)
          };
        for (let Yq of this.viewportLines) Array.isArray(Yq.type) ? Yq.type.forEach(cq) : cq(Yq);
        return xq
      }
      gapSize(qq, Eq, gq, Yq) {
        let lq = ml(Yq, gq) - ml(Yq, Eq);
        return this.heightOracle.lineWrapping ? qq.height * lq : Yq.total * this.heightOracle.charWidth * lq
      }
      updateLineGaps(qq) {
        El.same(qq, this.lineGaps) || (this.lineGaps = qq, this.lineGapDeco = fq.set(qq.map((qq => qq.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(qq) {
        let Eq = this.stateDeco;
        this.lineGaps.length && (Eq = Eq.concat(this.lineGapDeco));
        let gq = [];
        Yq.G.spans(Eq, this.viewport.from, this.viewport.to, {
          span(qq, Eq) {
            gq.push({
              from: qq,
              to: Eq
            })
          },
          point() {}
        }, 20);
        let lq = 0;
        if (gq.length != this.xqq.length) lq = 12;
        else
          for (let Yq = 0; Yq < gq.length && !(8 & lq); Yq++) {
            let Eq = this.xqq[Yq],
              Oq = gq[Yq];
            Eq.from == Oq.from && Eq.to == Oq.to || (lq |= 4, qq && qq.mapPos(Eq.from, -1) == Oq.from && qq.mapPos(Eq.to, 1) == Oq.to || (lq |= 8))
          }
        return this.xqq = gq, lq
      }
      lineBlockAt(qq) {
        return qq >= this.viewport.from && qq <= this.viewport.to && this.viewportLines.find((Eq => Eq.from <= qq && Eq.to >= qq)) || ul(this.heightMap.lineAt(qq, JY.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(qq) {
        return qq >= this.viewportLines[0].top && qq <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Eq => Eq.top <= qq && Eq.bottom >= qq)) || ul(this.heightMap.lineAt(this.scaler.fromDOM(qq), JY.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(qq) {
        let Eq = this.lineBlockAtHeight(qq + 8);
        return Eq.from >= this.viewport.from || this.viewportLines[0].top - qq > 200 ? Eq : this.viewportLines[0]
      }
      elementAtHeight(qq) {
        return ul(this.heightMap.blockAt(this.scaler.fromDOM(qq), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class ll {
      constructor(qq, Eq) {
        this.from = qq, this.to = Eq
      }
    }

    function Ol(qq, Eq) {
      let {
        total: gq,
        zV: Yq
      } = qq;
      if (Eq <= 0) return Yq[0].from;
      if (Eq >= 1) return Yq[Yq.length - 1].to;
      let lq = Math.floor(gq * Eq);
      for (let Oq = 0;; Oq++) {
        let {
          from: qq,
          to: Eq
        } = Yq[Oq], gq = Eq - qq;
        if (lq <= gq) return qq + lq;
        lq -= gq
      }
    }

    function ml(qq, Eq) {
      let gq = 0;
      for (let {
          from: Yq,
          to: lq
        }
        of qq.zV) {
        if (Eq <= lq) {
          gq += Eq - Yq;
          break
        }
        gq += lq - Yq
      }
      return gq / qq.total
    }
    const xl = {
      toDOM: qq => qq,
      fromDOM: qq => qq,
      scale: 1,
      eq(qq) {
        return qq == this
      }
    };

    function Al(qq) {
      let Eq = qq.facet(qg).filter((qq => "function" != typeof qq)),
        gq = qq.facet(gg).filter((qq => "function" != typeof qq));
      return gq.length && Eq.push(Yq.G.join(gq)), Eq
    }
    class cl {
      constructor(qq, Eq, gq) {
        let Yq = 0,
          lq = 0,
          Oq = 0;
        this.viewports = gq.map((gq => {
          let {
            from: lq,
            to: Oq
          } = gq, mq = Eq.lineAt(lq, JY.ByPos, qq, 0, 0).top, xq = Eq.lineAt(Oq, JY.ByPos, qq, 0, 0).bottom;
          return Yq += xq - mq, {
            from: lq,
            to: Oq,
            top: mq,
            bottom: xq,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Yq) / (Eq.height - Yq);
        for (let mq of this.viewports) mq.domTop = Oq + (mq.top - lq) * this.scale, Oq = mq.domBottom = mq.domTop + (mq.bottom - mq.top), lq = mq.bottom
      }
      toDOM(qq) {
        for (let Eq = 0, gq = 0, Yq = 0;; Eq++) {
          let lq = Eq < this.viewports.length ? this.viewports[Eq] : null;
          if (!lq || qq < lq.top) return Yq + (qq - gq) * this.scale;
          if (qq <= lq.bottom) return lq.domTop + (qq - lq.top);
          gq = lq.bottom, Yq = lq.domBottom
        }
      }
      fromDOM(qq) {
        for (let Eq = 0, gq = 0, Yq = 0;; Eq++) {
          let lq = Eq < this.viewports.length ? this.viewports[Eq] : null;
          if (!lq || qq < lq.domTop) return gq + (qq - Yq) / this.scale;
          if (qq <= lq.domBottom) return lq.top + (qq - lq.domTop);
          gq = lq.bottom, Yq = lq.domBottom
        }
      }
      eq(qq) {
        return qq instanceof cl && (this.scale == qq.scale && this.viewports.length == qq.viewports.length && this.viewports.every(((Eq, gq) => Eq.from == qq.viewports[gq].from && Eq.to == qq.viewports[gq].to)))
      }
    }

    function ul(qq, Eq) {
      if (1 == Eq.scale) return qq;
      let gq = Eq.toDOM(qq.top),
        Yq = Eq.toDOM(qq.bottom);
      return new LY(qq.from, qq.length, gq, Yq - gq, Array.isArray(qq._content) ? qq._content.map((qq => ul(qq, Eq))) : qq._content)
    }
    const Bl = Yq.x.define({
        combine: qq => qq.join(" ")
      }),
      Wl = Yq.x.define({
        combine: qq => qq.indexOf(!0) > -1
      }),
      Nl = lq.d.newName(),
      al = lq.d.newName(),
      Vl = lq.d.newName(),
      dl = {
        "&light": "." + al,
        "&dark": "." + Vl
      };

    function jl(qq, Eq, gq) {
      return new lq.d(Eq, {
        finish: Eq => /&/.test(Eq) ? Eq.replace(/&\w*/, (Eq => {
          if ("&" == Eq) return qq;
          if (!gq || !gq[Eq]) throw new RangeError(`Unsupported selector: ${Eq}`);
          return gq[Eq]
        })) : qq + " " + Eq
      })
    }
    const Hl = jl("." + Nl, {
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
      }, dl),
      ol = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Pl = tq.ie && tq.ie_version <= 11;
    class Ql {
      constructor(qq) {
        this.view = qq, this.active = !1, this.editContext = null, this.selectionRange = new Dq, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = qq.contentDOM, this.observer = new MutationObserver((Eq => {
          for (let qq of Eq) this.queue.push(qq);
          (tq.ie && tq.ie_version <= 11 || tq.ios && qq.composing) && Eq.some((qq => "childList" == qq.type && qq.removedNodes.length || "characterData" == qq.type && qq.oldValue.length > qq.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !tq.android || !1 === qq.constructor.EDIT_CONTEXT || tq.chrome && tq.chrome_version < 126 || (this.editContext = new rl(qq), qq.state.facet(XE) && (qq.contentDOM.editContext = this.editContext.editContext)), Pl && (this.onCharData = qq => {
          this.queue.push({
            target: qq.target,
            type: "characterData",
            oldValue: qq.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.EQ = this.EQ.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var qq;
          (null === (qq = this.view.docView) || void 0 === qq ? void 0 : qq.lastUpdate) < Date.now() - 75 && this.EQ()
        })), this.resizeScroll.observe(qq.scrollDOM)), this.addWindowListeners(this.win = qq.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((qq => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), qq.length > 0 && qq[qq.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((qq => {
          qq.length > 0 && qq[qq.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(qq) {
        this.view.inputState.runHandlers("scroll", qq), this.intersecting && this.view.measure()
      }
      onScroll(qq) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(qq)
      }
      EQ() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(qq) {
        ("change" != qq.type && qq.type || qq.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(qq) {
        if (this.gapIntersection && (qq.length != this.gaps.length || this.gaps.some(((Eq, gq) => Eq != qq[gq])))) {
          this.gapIntersection.disconnect();
          for (let Eq of qq) this.gapIntersection.observe(Eq);
          this.gaps = qq
        }
      }
      onSelectionChange(qq) {
        let Eq = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: gq
        } = this, Yq = this.selectionRange;
        if (gq.state.facet(XE) ? gq.root.activeElement != this.dom : !kq(this.dom, Yq)) return;
        let lq = Yq.anchorNode && gq.docView.tile.nearest(Yq.anchorNode);
        lq && lq.isWidget() && lq.widget.ignoreEvent(qq) ? Eq || (this.selectionChanged = !1) : (tq.ie && tq.ie_version <= 11 || tq.android && tq.chrome) && !gq.state.selection.main.empty && Yq.focusNode && Uq(Yq.focusNode, Yq.focusOffset, Yq.anchorNode, Yq.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: qq
        } = this, Eq = Lq(qq.root);
        if (!Eq) return !1;
        let gq = tq.safari && 11 == qq.root.nodeType && qq.root.activeElement == this.dom && function(qq, Eq) {
          if (Eq.getComposedRanges) {
            let gq = Eq.getComposedRanges(qq.root)[0];
            if (gq) return tl(qq, gq)
          }
          let gq = null;

          function Yq(qq) {
            qq.preventDefault(), qq.stopImmediatePropagation(), gq = qq.getTargetRanges()[0]
          }
          return qq.contentDOM.addEventListener("beforeinput", Yq, !0), qq.dom.ownerDocument.execCommand("indent"), qq.contentDOM.removeEventListener("beforeinput", Yq, !0), gq ? tl(qq, gq) : null
        }(this.view, Eq) || Eq;
        if (!gq || this.selectionRange.eq(gq)) return !1;
        let Yq = kq(this.dom, gq);
        return Yq && !this.selectionChanged && qq.inputState.lastFocusTime > Date.now() - 200 && qq.inputState.lastTouchTime < Date.now() - 300 && function(qq, Eq) {
          let gq = Eq.focusNode,
            Yq = Eq.focusOffset;
          if (!gq || Eq.anchorNode != gq || Eq.anchorOffset != Yq) return !1;
          for (Yq = Math.min(Yq, wq(gq));;)
            if (Yq) {
              if (1 != gq.nodeType) return !1;
              let qq = gq.childNodes[Yq - 1];
              "false" == qq.contentEditable ? Yq-- : (gq = qq, Yq = wq(gq))
            } else {
              if (gq == qq) return !0;
              Yq = Fq(gq), gq = gq.parentNode
            }
        }(this.dom, gq) ? (this.view.inputState.lastFocusTime = 0, qq.docView.updateSelection(), !1) : (this.selectionRange.setRange(gq), Yq && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(qq, Eq) {
        this.selectionRange.set(qq.node, qq.offset, Eq.node, Eq.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let qq = 0,
          Eq = null;
        for (let gq = this.dom; gq;)
          if (1 == gq.nodeType) !Eq && qq < this.scrollTargets.length && this.scrollTargets[qq] == gq ? qq++ : Eq || (Eq = this.scrollTargets.slice(0, qq)), Eq && Eq.push(gq), gq = gq.assignedSlot || gq.parentNode;
          else {
            if (11 != gq.nodeType) break;
            gq = gq.host
          } if (qq < this.scrollTargets.length && !Eq && (Eq = this.scrollTargets.slice(0, qq)), Eq) {
          for (let qq of this.scrollTargets) qq.removeEventListener("scroll", this.onScroll);
          for (let qq of this.scrollTargets = Eq) qq.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(qq) {
        if (!this.active) return qq();
        try {
          return this.stop(), qq()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, ol), Pl && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Pl && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(qq, Eq) {
        var gq;
        if (!this.delayedAndroidKey) {
          let qq = () => {
            let qq = this.delayedAndroidKey;
            if (qq) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = qq.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && qq.force && lE(this.dom, qq.key, qq.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(qq)
        }
        this.delayedAndroidKey && "Enter" != qq || (this.delayedAndroidKey = {
          key: qq,
          keyCode: Eq,
          force: this.lastChange < Date.now() - 50 || !!(null === (gq = this.delayedAndroidKey) || void 0 === gq ? void 0 : gq.force)
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
        for (let qq of this.observer.takeRecords()) this.queue.push(qq);
        return this.queue
      }
      processRecords() {
        let qq = this.pendingRecords();
        qq.length && (this.queue = []);
        let Eq = -1,
          gq = -1,
          Yq = !1;
        for (let lq of qq) {
          let qq = this.readMutation(lq);
          qq && (qq.typeOver && (Yq = !0), -1 == Eq ? ({
            from: Eq,
            to: gq
          } = qq) : (Eq = Math.min(qq.from, Eq), gq = Math.max(qq.to, gq)))
        }
        return {
          from: Eq,
          to: gq,
          typeOver: Yq
        }
      }
      readChange() {
        let {
          from: qq,
          to: Eq,
          typeOver: gq
        } = this.processRecords(), Yq = this.selectionChanged && kq(this.dom, this.selectionRange);
        if (qq < 0 && !Yq) return null;
        qq > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let lq = new gY(this.view, qq, Eq, gq);
        return this.view.docView.domChanged = {
          newSel: lq.newSel ? lq.newSel.main : null
        }, lq
      }
      flush() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        qq && this.readSelectionRange();
        let Eq = this.readChange();
        if (!Eq) return this.view.requestMeasure(), !1;
        let gq = this.view.state,
          Yq = lY(this.view, Eq);
        return this.view.state == gq && (Eq.domChanged || Eq.newSel && !xY(this.view.state.selection, Eq.newSel.main)) && this.view.update([]), Yq
      }
      readMutation(qq) {
        let Eq = this.view.docView.tile.nearest(qq.target);
        if (!Eq || Eq.isWidget()) return null;
        if (Eq.markDirty("attributes" == qq.type), "childList" == qq.type) {
          let gq = yl(Eq, qq.previousSibling || qq.target.previousSibling, -1),
            Yq = yl(Eq, qq.nextSibling || qq.target.nextSibling, 1);
          return {
            from: gq ? Eq.posAfter(gq) : Eq.posAtStart,
            to: Yq ? Eq.posBefore(Yq) : Eq.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == qq.type ? {
          from: Eq.posAtStart,
          to: Eq.posAtEnd,
          typeOver: qq.target.nodeValue == qq.oldValue
        } : null
      }
      setWindow(qq) {
        qq != this.win && (this.removeWindowListeners(this.win), this.win = qq, this.addWindowListeners(this.win))
      }
      addWindowListeners(qq) {
        qq.addEventListener("resize", this.EQ), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : qq.addEventListener("beforeprint", this.onPrint), qq.addEventListener("scroll", this.onScroll), qq.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(qq) {
        qq.removeEventListener("scroll", this.onScroll), qq.removeEventListener("resize", this.EQ), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : qq.removeEventListener("beforeprint", this.onPrint), qq.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(qq) {
        this.editContext && (this.editContext.update(qq), qq.startState.facet(XE) != qq.state.facet(XE) && (qq.view.contentDOM.editContext = qq.state.facet(XE) ? this.editContext.editContext : null))
      }
      destroy() {
        var qq, Eq, gq;
        this.stop(), null === (qq = this.intersection) || void 0 === qq || qq.disconnect(), null === (Eq = this.gapIntersection) || void 0 === Eq || Eq.disconnect(), null === (gq = this.resizeScroll) || void 0 === gq || gq.disconnect();
        for (let Yq of this.scrollTargets) Yq.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function yl(qq, Eq, gq) {
      for (; Eq;) {
        let Yq = Wg.get(Eq);
        if (Yq && Yq.parent == qq) return Yq;
        let lq = Eq.parentNode;
        Eq = lq != qq.dom ? lq : gq > 0 ? Eq.nextSibling : Eq.previousSibling
      }
      return null
    }

    function tl(qq, Eq) {
      let gq = Eq.startContainer,
        Yq = Eq.startOffset,
        lq = Eq.endContainer,
        Oq = Eq.endOffset,
        mq = qq.docView.domAtPos(qq.state.selection.main.anchor, 1);
      return Uq(mq.node, mq.offset, lq, Oq) && ([gq, Yq, lq, Oq] = [lq, Oq, gq, Yq]), {
        anchorNode: gq,
        anchorOffset: Yq,
        focusNode: lq,
        focusOffset: Oq
      }
    }
    class rl {
      constructor(qq) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(qq.state);
        let Eq = this.editContext = new window.EditContext({
          text: qq.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, qq.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(qq.state.selection.main.head)
        });
        this.handlers.textupdate = gq => {
          let lq = qq.state.selection.main,
            {
              anchor: Oq,
              head: mq
            } = lq,
            xq = this.toEditorPos(gq.updateRangeStart),
            Aq = this.toEditorPos(gq.updateRangeEnd);
          qq.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: gq.updateRangeStart,
            editorBase: xq,
            drifted: !1
          });
          let cq = Aq - xq > gq.text.length;
          xq == this.from && Oq < this.from ? xq = Oq : Aq == this.to && Oq > this.to && (Aq = Oq);
          let uq = mY(qq.state.sliceDoc(xq, Aq), gq.text, (cq ? lq.from : lq.to) - xq, cq ? "end" : null);
          if (!uq) {
            let Eq = Yq.q.single(this.toEditorPos(gq.selectionStart), this.toEditorPos(gq.selectionEnd));
            return void(xY(Eq, lq) || qq.dispatch({
              selection: Eq,
              userEvent: "select"
            }))
          }
          let Bq = {
            from: uq.from + xq,
            to: uq.toA + xq,
            insert: Yq.O.of(gq.text.slice(uq.from, uq.toB).split("\n"))
          };
          if ((tq.mac || tq.android) && Bq.from == mq - 1 && /^\. ?$/.test(gq.text) && "off" == qq.contentDOM.getAttribute("autocorrect") && (Bq = {
              from: xq,
              to: Aq,
              insert: Yq.O.of([gq.text.replace(".", " ")])
            }), this.pendingContextChange = Bq, !qq.state.readOnly) {
            let Eq = this.to - this.from + (Bq.to - Bq.from + Bq.insert.length);
            OY(qq, Bq, Yq.q.single(this.toEditorPos(gq.selectionStart, Eq), this.toEditorPos(gq.selectionEnd, Eq)))
          }
          this.pendingContextChange && (this.revertPending(qq.state), this.setSelection(qq.state)), Bq.from < Bq.to && !Bq.insert.length && qq.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Eq.text.slice(Math.max(0, gq.updateRangeStart - 1), Math.min(Eq.text.length, gq.updateRangeStart + 1))) && this.handlers.compositionend(gq)
        }, this.handlers.characterboundsupdate = gq => {
          let Yq = [],
            lq = null;
          for (let Eq = this.toEditorPos(gq.rangeStart), Oq = this.toEditorPos(gq.rangeEnd); Eq < Oq; Eq++) {
            let gq = qq.coordsForChar(Eq);
            lq = gq && new DOMRect(gq.left, gq.top, gq.right - gq.left, gq.bottom - gq.top) || lq || new DOMRect, Yq.push(lq)
          }
          Eq.updateCharacterBounds(gq.rangeStart, Yq)
        }, this.handlers.textformatupdate = Eq => {
          let gq = [];
          for (let qq of Eq.getTextFormats()) {
            let Eq = qq.underlineStyle,
              Yq = qq.underlineThickness;
            if (!/none/i.test(Eq) && !/none/i.test(Yq)) {
              let lq = this.toEditorPos(qq.rangeStart),
                Oq = this.toEditorPos(qq.rangeEnd);
              if (lq < Oq) {
                let qq = `text-decoration: underline ${/^[a-z]/.test(Eq)?Eq+" ":"Dashed"==Eq?"dashed ":"Squiggle"==Eq?"wavy ":""}${/thin/i.test(Yq)?1:2}px`;
                gq.push(fq.mark({
                  attributes: {
                    style: qq
                  }
                }).range(lq, Oq))
              }
            }
          }
          qq.dispatch({
            effects: FE.of(fq.set(gq))
          })
        }, this.handlers.compositionstart = () => {
          qq.inputState.composing < 0 && (qq.inputState.composing = 0, qq.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (qq.inputState.composing = -1, qq.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Eq
            } = this.composing;
            this.composing = null, Eq && this.reset(qq.state)
          }
        };
        for (let gq in this.handlers) Eq.addEventListener(gq, this.handlers[gq]);
        this.measureReq = {
          read: qq => {
            this.editContext.updateControlBounds(qq.contentDOM.getBoundingClientRect());
            let Eq = Lq(qq.root);
            Eq && Eq.rangeCount && this.editContext.updateSelectionBounds(Eq.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(qq) {
        let Eq = 0,
          gq = !1,
          Yq = this.pendingContextChange;
        return qq.changes.iterChanges(((lq, Oq, mq, xq, Aq) => {
          if (gq) return;
          let cq = Aq.length - (Oq - lq);
          if (Yq && Oq >= Yq.to) {
            if (Yq.from == lq && Yq.to == Oq && Yq.insert.eq(Aq)) return Yq = this.pendingContextChange = null, Eq += cq, void(this.to += cq);
            Yq = null, this.revertPending(qq.state)
          }
          if (lq += Eq, (Oq += Eq) <= this.from) this.from += cq, this.to += cq;
          else if (lq < this.to) {
            if (lq < this.from || Oq > this.to || this.to - this.from + Aq.length > 3e4) return void(gq = !0);
            this.editContext.updateText(this.toContextPos(lq), this.toContextPos(Oq), Aq.toString()), this.to += cq
          }
          Eq += cq
        })), Yq && !gq && this.revertPending(qq.state), !gq
      }
      update(qq) {
        let Eq = this.pendingContextChange,
          gq = qq.startState.selection.main;
        this.composing && (this.composing.drifted || !qq.changes.touchesRange(gq.from, gq.to) && qq.transactions.some((qq => !qq.isUserEvent("input.type") && qq.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = qq.changes.mapPos(this.composing.editorBase)) : this.applyEdits(qq) && this.rangeIsValid(qq.state) ? (qq.docChanged || qq.selectionSet || Eq) && this.setSelection(qq.state) : (this.pendingContextChange = null, this.reset(qq.state)), (qq.geometryChanged || qq.docChanged || qq.selectionSet) && qq.view.requestMeasure(this.measureReq)
      }
      resetRange(qq) {
        let {
          head: Eq
        } = qq.selection.main;
        this.from = Math.max(0, Eq - 1e4), this.to = Math.min(qq.doc.length, Eq + 1e4)
      }
      reset(qq) {
        this.resetRange(qq), this.editContext.updateText(0, this.editContext.text.length, qq.doc.sliceString(this.from, this.to)), this.setSelection(qq)
      }
      revertPending(qq) {
        let Eq = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Eq.from), this.toContextPos(Eq.from + Eq.insert.length), qq.doc.sliceString(Eq.from, Eq.to))
      }
      setSelection(qq) {
        let {
          main: Eq
        } = qq.selection, gq = this.toContextPos(Math.max(this.from, Math.min(this.to, Eq.anchor))), Yq = this.toContextPos(Eq.head);
        this.editContext.selectionStart == gq && this.editContext.selectionEnd == Yq || this.editContext.updateSelection(gq, Yq)
      }
      rangeIsValid(qq) {
        let {
          head: Eq
        } = qq.selection.main;
        return !(this.from > 0 && Eq - this.from < 500 || this.to < qq.doc.length && this.to - Eq < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        qq = Math.min(qq, Eq);
        let gq = this.composing;
        return gq && gq.drifted ? gq.editorBase + (qq - gq.contextBase) : qq + this.from
      }
      toContextPos(qq) {
        let Eq = this.composing;
        return Eq && Eq.drifted ? Eq.contextBase + (qq - Eq.editorBase) : qq - this.from
      }
      destroy() {
        for (let qq in this.handlers) this.editContext.removeEventListener(qq, this.handlers[qq])
      }
    }
    class vl {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get xqq() {
        return this.viewState.xqq
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
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Eq;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), qq.parent && qq.parent.appendChild(this.dom);
        let {
          dispatch: gq
        } = qq;
        this.dispatchTransactions = qq.dispatchTransactions || gq && (qq => qq.forEach((qq => gq(qq, this)))) || (qq => this.update(qq)), this.dispatch = this.dispatch.bind(this), this._root = qq.root || function(qq) {
          for (; qq;) {
            if (qq && (9 == qq.nodeType || 11 == qq.nodeType && qq.host)) return qq;
            qq = qq.assignedSlot || qq.parentNode
          }
          return null
        }(qq.parent) || document, this.viewState = new Yl(this, qq.state || Yq.u.create(qq)), qq.scrollTo && qq.scrollTo.is(UE) && (this.viewState.scrollTarget = qq.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(KE).map((qq => new IE(qq)));
        for (let Yq of this.plugins) Yq.update(this);
        this.observer = new Ql(this), this.inputState = new AY(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Sg(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Eq = document.fonts) || void 0 === Eq ? void 0 : Eq.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        let lq = 1 == Eq.length && Eq[0] instanceof Yq.Q ? Eq : 1 == Eq.length && Array.isArray(Eq[0]) ? Eq[0] : [this.state.update(...Eq)];
        this.dispatchTransactions(lq, this)
      }
      update(qq) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Eq, gq = !1,
          lq = !1,
          Oq = this.state;
        for (let Yq of qq) {
          if (Yq.startState != Oq) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Oq = Yq.state
        }
        if (this.destroyed) return void(this.viewState.state = Oq);
        let mq = this.hasFocus,
          xq = 0,
          Aq = null;
        qq.some((qq => qq.annotation(iY))) ? (this.inputState.notifiedFocused = mq, xq = 1) : mq != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = mq, Aq = ZY(Oq, mq), Aq || (xq = 1));
        let cq = this.observer.delayedAndroidKey,
          uq = null;
        if (cq ? (this.observer.clearDelayedAndroidKey(), uq = this.observer.readChange(), (uq && !this.state.doc.eq(Oq.doc) || !this.state.selection.eq(Oq.selection)) && (uq = null)) : this.observer.clear(), Oq.facet(Yq.u.phrases) != this.state.facet(Yq.u.phrases)) return this.setState(Oq);
        Eq = ug.create(this, Oq, qq), Eq.flags |= xq;
        let Bq = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Eq of qq) {
            if (Bq && (Bq = Bq.map(Eq.changes)), Eq.scrollIntoView) {
              let {
                main: qq
              } = Eq.state.selection, {
                x: gq,
                y: lq
              } = this.state.facet(vl.cursorScrollMargin);
              Bq = new RE(qq.empty ? qq : Yq.q.cursor(qq.head, qq.head > qq.anchor ? -1 : 1), "nearest", "nearest", lq, gq)
            }
            for (let qq of Eq.effects) qq.is(UE) && (Bq = qq.value.clip(this.state))
          }
          this.viewState.update(Eq, Bq), this.bidiCache = bl.update(this.bidiCache, Eq.changes), Eq.empty || (this.updatePlugins(Eq), this.inputState.update(Eq)), gq = this.docView.update(Eq), this.state.facet(Ag) != this.styleModules && this.mountStyles(), lq = this.updateAttrs(), this.showAnnouncements(qq), this.docView.updateSelection(gq, qq.some((qq => qq.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Eq.startState.facet(Bl) != Eq.state.facet(Bl) && (this.viewState.mustMeasureContent = !0), (gq || lq || Bq || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), gq && this.docViewUpdate(), !Eq.empty)
          for (let Yq of this.state.facet(TE)) try {
            Yq(Eq)
          } catch (Wq) {
            sE(this.state, Wq, "update listener")
          }(Aq || uq) && Promise.resolve().then((() => {
            Aq && this.state == Aq.startState && this.dispatch(Aq), uq && !lY(this, uq) && cq.force && lE(this.contentDOM, cq.key, cq.keyCode)
          }))
      }
      setState(qq) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = qq);
        this.updateState = 2;
        let Eq = this.hasFocus;
        try {
          for (let qq of this.plugins) qq.destroy(this);
          this.viewState = new Yl(this, qq), this.plugins = qq.facet(KE).map((qq => new IE(qq))), this.pluginMap.clear();
          for (let qq of this.plugins) qq.update(this);
          this.docView.destroy(), this.docView = new Sg(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Eq && this.focus(), this.requestMeasure()
      }
      updatePlugins(qq) {
        let Eq = qq.startState.facet(KE),
          gq = qq.state.facet(KE);
        if (Eq != gq) {
          let Yq = [];
          for (let lq of gq) {
            let gq = Eq.indexOf(lq);
            if (gq < 0) Yq.push(new IE(lq));
            else {
              let Eq = this.plugins[gq];
              Eq.mustUpdate = qq, Yq.push(Eq)
            }
          }
          for (let Eq of this.plugins) Eq.mustUpdate != qq && Eq.destroy(this);
          this.plugins = Yq, this.pluginMap.clear()
        } else
          for (let Yq of this.plugins) Yq.mustUpdate = qq;
        for (let Yq = 0; Yq < this.plugins.length; Yq++) this.plugins[Yq].update(this);
        Eq != gq && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Eq of this.plugins) {
          let gq = Eq.value;
          if (gq && gq.docViewUpdate) try {
            gq.docViewUpdate(this)
          } catch (qq) {
            sE(this.state, qq, "doc view update listener")
          }
        }
      }
      measure() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, qq && this.observer.forceFlush();
        let Eq = null,
          gq = this.viewState.scrollParent,
          Yq = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: lq,
            scrollAnchorHeight: Oq
          } = this.viewState;
        Math.abs(Yq - this.viewState.scrollOffset) > 1 && (Oq = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let qq = 0;; qq++) {
            if (Oq < 0)
              if (OE(gq || this.win)) lq = -1, Oq = this.viewState.heightMap.height;
              else {
                let qq = this.viewState.scrollAnchorAt(Yq);
                lq = qq.from, Oq = qq.top
              } this.updateState = 1;
            let xq = this.viewState.measure();
            if (!xq && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (qq > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Aq = [];
            4 & xq || ([this.measureRequests, Aq] = [Aq, this.measureRequests]);
            let cq = Aq.map((qq => {
                try {
                  return qq.read(this)
                } catch (Eq) {
                  return sE(this.state, Eq), nl
                }
              })),
              uq = ug.create(this, this.state, []),
              Bq = !1;
            uq.flags |= xq, Eq ? Eq.flags |= xq : Eq = uq, this.updateState = 2, uq.empty || (this.updatePlugins(uq), this.inputState.update(uq), this.updateAttrs(), Bq = this.docView.update(uq), Bq && this.docViewUpdate());
            for (let qq = 0; qq < Aq.length; qq++)
              if (cq[qq] != nl) try {
                let Eq = Aq[qq];
                Eq.write && Eq.write(cq[qq], this)
              } catch (mq) {
                sE(this.state, mq)
              }
            if (Bq && this.docView.updateSelection(!0), !uq.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Oq = -1;
                  continue
                } {
                  let qq = ((lq < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(lq).top) - Oq) / this.scaleY;
                  if ((qq > 1 || qq < -1) && (gq == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Yq += qq, gq ? gq.scrollTop += qq : this.win.scrollBy(0, qq), Oq = -1;
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
        if (Eq && !Eq.empty)
          for (let xq of this.state.facet(TE)) xq(Eq)
      }
      get themeClasses() {
        return Nl + " " + (this.state.facet(Wl) ? Vl : al) + " " + this.state.facet(Bl)
      }
      updateAttrs() {
        let qq = il(this, eE, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Eq = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(XE) ? "true" : "false",
            class: "cm-content",
            style: `${tq.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Eq["aria-readonly"] = "true"), il(this, DE, Eq);
        let gq = this.observer.ignore((() => {
          let gq = nq(this.contentDOM, this.contentAttrs, Eq),
            Yq = nq(this.dom, this.editorAttrs, qq);
          return gq || Yq
        }));
        return this.editorAttrs = qq, this.contentAttrs = Eq, gq
      }
      showAnnouncements(qq) {
        let Eq = !0;
        for (let gq of qq)
          for (let qq of gq.effects)
            if (qq.is(vl.announce)) {
              Eq && (this.announceDOM.textContent = ""), Eq = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = qq.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Ag);
        let qq = this.state.facet(vl.cspNonce);
        lq.d.mount(this.root, this.styleModules.concat(Hl).reverse(), qq ? {
          nonce: qq
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(qq) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), qq) {
          if (this.measureRequests.indexOf(qq) > -1) return;
          if (null != qq.key)
            for (let Eq = 0; Eq < this.measureRequests.length; Eq++)
              if (this.measureRequests[Eq].key === qq.key) return void(this.measureRequests[Eq] = qq);
          this.measureRequests.push(qq)
        }
      }
      plugin(qq) {
        let Eq = this.pluginMap.get(qq);
        return (void 0 === Eq || Eq && Eq.plugin != qq) && this.pluginMap.set(qq, Eq = this.plugins.find((Eq => Eq.plugin == qq)) || null), Eq && Eq.update(this).value
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
      elementAtHeight(qq) {
        return this.readMeasured(), this.viewState.elementAtHeight(qq)
      }
      lineBlockAtHeight(qq) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(qq)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(qq) {
        return this.viewState.lineBlockAt(qq)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(qq, Eq, gq) {
        return Xg(this, qq, Ug(this, qq, Eq, gq))
      }
      moveByGroup(qq, Eq) {
        return Xg(this, qq, Ug(this, qq, Eq, (Eq => function(qq, Eq, gq) {
          let lq = qq.state.charCategorizer(Eq),
            Oq = lq(gq);
          return qq => {
            let Eq = lq(qq);
            return Oq == Yq.m.Space && (Oq = Eq), Oq == Eq
          }
        }(this, qq.head, Eq))))
      }
      visualLineSide(qq, Eq) {
        let gq = this.bidiSpans(qq),
          lq = this.textDirectionAt(qq.from),
          Oq = gq[Eq ? gq.length - 1 : 0];
        return Yq.q.cursor(Oq.side(Eq, lq) + qq.from, Oq.forward(!Eq, lq) ? 1 : -1)
      }
      moveToLineBoundary(qq, Eq) {
        return function(qq, Eq, gq, lq) {
          let Oq = Rg(qq, Eq.head, Eq.assoc || -1),
            mq = lq && Oq.type == Zq.Text && (qq.lineWrapping || Oq.widgetLineBreaks) ? qq.coordsAtPos(Eq.assoc < 0 && Eq.head > Oq.from ? Eq.head - 1 : Eq.head) : null;
          if (mq) {
            let Eq = qq.dom.getBoundingClientRect(),
              lq = qq.textDirectionAt(Oq.from),
              xq = qq.posAtCoords({
                x: gq == (lq == cE.LTR) ? Eq.right - 1 : Eq.left + 1,
                y: (mq.top + mq.bottom) / 2
              });
            if (null != xq) return Yq.q.cursor(xq, gq ? -1 : 1)
          }
          return Yq.q.cursor(gq ? Oq.to : Oq.from, gq ? -1 : 1)
        }(this, qq, Eq, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(qq, Eq, gq) {
        return Xg(this, qq, function(qq, Eq, gq, lq) {
          let Oq = Eq.head,
            mq = gq ? 1 : -1;
          if (Oq == (gq ? qq.state.doc.length : 0)) return Yq.q.cursor(Oq, Eq.assoc);
          let xq, Aq = Eq.goalColumn,
            cq = qq.contentDOM.getBoundingClientRect(),
            uq = qq.coordsAtPos(Oq, Eq.assoc || ((Eq.empty ? gq : Eq.head == Eq.from) ? 1 : -1)),
            Bq = qq.documentTop;
          if (uq) null == Aq && (Aq = uq.left - cq.left), xq = mq < 0 ? uq.top : uq.bottom;
          else {
            let Eq = qq.viewState.lineBlockAt(Oq);
            null == Aq && (Aq = Math.min(cq.right - cq.left, qq.defaultCharacterWidth * (Oq - Eq.from))), xq = (mq < 0 ? Eq.top : Eq.bottom) + Bq
          }
          let Wq = cq.left + Aq,
            Nq = qq.viewState.heightOracle.textHeight >> 1,
            aq = null !== lq && void 0 !== lq ? lq : Nq;
          for (let Vq = 0;; Vq += Nq) {
            let Eq = xq + (aq + Vq) * mq,
              lq = Kg(qq, {
                x: Wq,
                y: Eq
              }, !1, mq);
            if (gq ? Eq > cq.bottom : Eq < cq.top) return Yq.q.cursor(lq.pos, lq.assoc);
            let Oq = qq.coordsAtPos(lq.pos, lq.assoc),
              uq = Oq ? (Oq.top + Oq.bottom) / 2 : 0;
            if (!Oq || (gq ? uq > xq : uq < xq)) return Yq.q.cursor(lq.pos, lq.assoc, void 0, Aq)
          }
        }(this, qq, Eq, gq))
      }
      domAtPos(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(qq, Eq)
      }
      posAtDOM(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(qq, Eq)
      }
      posAtCoords(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let gq = Kg(this, qq, Eq);
        return gq && gq.pos
      }
      posAndSideAtCoords(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Kg(this, qq, Eq)
      }
      coordsAtPos(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let gq = this.docView.coordsAt(qq, Eq);
        if (!gq || gq.left == gq.right) return gq;
        let Yq = this.state.doc.lineAt(qq),
          lq = this.bidiSpans(Yq);
        return Kq(gq, lq[oE.find(lq, qq - Yq.from, -1, Eq)].dir == cE.LTR == Eq > 0)
      }
      coordsForChar(qq) {
        return this.readMeasured(), this.docView.coordsForChar(qq)
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
      textDirectionAt(qq) {
        return !this.state.facet(LE) || qq < this.viewport.from || qq > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(qq))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(qq) {
        if (qq.length > hl) return vE(qq.length);
        let Eq, gq = this.textDirectionAt(qq.from);
        for (let lq of this.bidiCache)
          if (lq.from == qq.from && lq.dir == gq && (lq.fresh || PE(lq.isolates, Eq = Og(this, qq)))) return lq.order;
        Eq || (Eq = Og(this, qq));
        let Yq = rE(qq.text, gq, Eq);
        return this.bidiCache.push(new bl(qq.from, qq.to, gq, Eq, !0, Yq)), Yq
      }
      get hasFocus() {
        var qq;
        return (this.dom.ownerDocument.hasFocus() || tq.safari && (null === (qq = this.inputState) || void 0 === qq ? void 0 : qq.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          gE(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(qq) {
        this._root != qq && (this._root = qq, this.observer.setWindow((9 == qq.nodeType ? qq : qq.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let qq of this.plugins) qq.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var gq, lq, Oq, mq;
        return UE.of(new RE("number" == typeof qq ? Yq.q.cursor(qq) : qq, null !== (gq = Eq.y) && void 0 !== gq ? gq : "nearest", null !== (lq = Eq.x) && void 0 !== lq ? lq : "nearest", null !== (Oq = Eq.yMargin) && void 0 !== Oq ? Oq : 5, null !== (mq = Eq.xMargin) && void 0 !== mq ? mq : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: qq,
          scrollLeft: Eq
        } = this.scrollDOM, gq = this.viewState.scrollAnchorAt(qq);
        return UE.of(new RE(Yq.q.cursor(gq.from), "start", "start", gq.top - qq, Eq, !0))
      }
      setTabFocusMode(qq) {
        null == qq ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof qq ? this.inputState.tabFocusMode = qq ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + qq)
      }
      static domEventHandlers(qq) {
        return CE.define((() => ({})), {
          eventHandlers: qq
        })
      }
      static domEventObservers(qq) {
        return CE.define((() => ({})), {
          eventObservers: qq
        })
      }
      static theme(qq, Eq) {
        let gq = lq.d.newName(),
          Yq = [Bl.of(gq), Ag.of(jl(`.${gq}`, qq))];
        return Eq && Eq.dark && Yq.push(Wl.of(!0)), Yq
      }
      static baseTheme(qq) {
        return Yq.C.lowest(Ag.of(jl("." + Nl, qq, dl)))
      }
      static findFromDOM(qq) {
        var Eq;
        let gq = qq.querySelector(".cm-content"),
          Yq = gq && Wg.get(gq) || Wg.get(qq);
        return (null === (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.root) || void 0 === Eq ? void 0 : Eq.view) || null
      }
    }
    vl.styleModule = Ag, vl.inputHandler = zE, vl.clipboardInputFilter = pE, vl.clipboardOutputFilter = GE, vl.scrollHandler = kE, vl.focusChangeEffect = SE, vl.perLineTextDirection = LE, vl.exceptionSink = ME, vl.updateListener = TE, vl.editable = XE, vl.mouseSelectionStyle = fE, vl.dragMovesSelection = ZE, vl.clickAddsSelectionRange = iE, vl.YO = qg, vl.blockWrappers = Eg, vl.outerDecorations = gg, vl.atomicRanges = Yg, vl.bidiIsolatedRanges = lg, vl.cursorScrollMargin = Yq.x.define({
      combine: qq => {
        let Eq = 5,
          gq = 5;
        for (let Yq of qq) "number" == typeof Yq ? Eq = gq = Yq : ({
          x: Eq,
          y: gq
        } = Yq);
        return {
          x: Eq,
          y: gq
        }
      }
    }), vl.scrollMargins = mg, vl.darkTheme = Wl, vl.cspNonce = Yq.x.define({
      combine: qq => qq.length ? qq[0] : ""
    }), vl.contentAttributes = DE, vl.editorAttributes = eE, vl.lineWrapping = vl.contentAttributes.of({
      class: "cm-lineWrapping"
    }), vl.announce = Yq.J.define();
    const hl = 4096,
      nl = {};
    class bl {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.from = qq, this.to = Eq, this.dir = gq, this.isolates = Yq, this.fresh = lq, this.order = Oq
      }
      static update(qq, Eq) {
        if (Eq.empty && !qq.some((qq => qq.fresh))) return qq;
        let gq = [],
          Yq = qq.length ? qq[qq.length - 1].dir : cE.LTR;
        for (let lq = Math.max(0, qq.length - 10); lq < qq.length; lq++) {
          let Oq = qq[lq];
          Oq.dir != Yq || Eq.touchesRange(Oq.from, Oq.to) || gq.push(new bl(Eq.mapPos(Oq.from, 1), Eq.mapPos(Oq.to, -1), Oq.dir, Oq.isolates, !1, Oq.order))
        }
        return gq
      }
    }

    function il(qq, Eq, gq) {
      for (let Yq = qq.state.facet(Eq), lq = Yq.length - 1; lq >= 0; lq--) {
        let Eq = Yq[lq],
          Oq = "function" == typeof Eq ? Eq(qq) : Eq;
        Oq && rq(Oq, gq)
      }
      return gq
    }
    const Zl = tq.mac ? "mac" : tq.windows ? "win" : tq.linux ? "linux" : "key";

    function fl(qq, Eq, gq) {
      return Eq.altKey && (qq = "Alt-" + qq), Eq.ctrlKey && (qq = "Ctrl-" + qq), Eq.metaKey && (qq = "Meta-" + qq), !1 !== gq && Eq.shiftKey && (qq = "Shift-" + qq), qq
    }
    const Ml = Yq.C.default(vl.domEventHandlers({
        keydown: (qq, Eq) => kl(Sl(Eq.state), qq, Eq, "editor")
      })),
      Tl = Yq.x.define({
        enables: Ml
      }),
      zl = new WeakMap;

    function Sl(qq) {
      let Eq = qq.facet(Tl),
        gq = zl.get(Eq);
      return gq || zl.set(Eq, gq = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zl,
          gq = Object.create(null),
          Yq = Object.create(null),
          lq = (qq, Eq) => {
            let gq = Yq[qq];
            if (null == gq) Yq[qq] = Eq;
            else if (gq != Eq) throw new Error("Key binding " + qq + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Oq = (qq, Yq, Oq, mq, xq) => {
            var Aq, cq;
            let uq = gq[qq] || (gq[qq] = Object.create(null)),
              Bq = Yq.split(/ (?!$)/).map((qq => function(qq, Eq) {
                const gq = qq.split(/-(?!$)/);
                let Yq, lq, Oq, mq, xq = gq[gq.length - 1];
                "Space" == xq && (xq = " ");
                for (let Aq = 0; Aq < gq.length - 1; ++Aq) {
                  const qq = gq[Aq];
                  if (/^(cmd|meta|m)$/i.test(qq)) mq = !0;
                  else if (/^a(lt)?$/i.test(qq)) Yq = !0;
                  else if (/^(c|ctrl|control)$/i.test(qq)) lq = !0;
                  else if (/^s(hift)?$/i.test(qq)) Oq = !0;
                  else {
                    if (!/^mod$/i.test(qq)) throw new Error("Unrecognized modifier name: " + qq);
                    "mac" == Eq ? mq = !0 : lq = !0
                  }
                }
                return Yq && (xq = "Alt-" + xq), lq && (xq = "Ctrl-" + xq), mq && (xq = "Meta-" + xq), Oq && (xq = "Shift-" + xq), xq
              }(qq, Eq)));
            for (let Eq = 1; Eq < Bq.length; Eq++) {
              let gq = Bq.slice(0, Eq).join(" ");
              lq(gq, !0), uq[gq] || (uq[gq] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Eq => {
                  let Yq = Gl = {
                    view: Eq,
                    prefix: gq,
                    scope: qq
                  };
                  return setTimeout((() => {
                    Gl == Yq && (Gl = null)
                  }), Ll), !0
                }]
              })
            }
            let Wq = Bq.join(" ");
            lq(Wq, !1);
            let Nq = uq[Wq] || (uq[Wq] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (cq = null === (Aq = uq._any) || void 0 === Aq ? void 0 : Aq.run) || void 0 === cq ? void 0 : cq.slice()) || []
            });
            Oq && Nq.run.push(Oq), mq && (Nq.preventDefault = !0), xq && (Nq.stopPropagation = !0)
          };
        for (let mq of qq) {
          let qq = mq.scope ? mq.scope.split(" ") : ["editor"];
          if (mq.any)
            for (let Eq of qq) {
              let qq = gq[Eq] || (gq[Eq] = Object.create(null));
              qq._any || (qq._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Yq
              } = mq;
              for (let Eq in qq) qq[Eq].run.push((qq => Yq(qq, Jl)))
            }
          let Yq = mq[Eq] || mq.key;
          if (Yq)
            for (let Eq of qq) Oq(Eq, Yq, mq.run, mq.preventDefault, mq.stopPropagation), mq.shift && Oq(Eq, "Shift-" + Yq, mq.shift, mq.preventDefault, mq.stopPropagation)
        }
        return gq
      }(Eq.reduce(((qq, Eq) => qq.concat(Eq)), []))), gq
    }

    function pl(qq, Eq, gq) {
      return kl(Sl(qq.state), Eq, qq, gq)
    }
    let Gl = null;
    const Ll = 4e3;
    let Jl = null;

    function kl(qq, Eq, gq, lq) {
      Jl = Eq;
      let cq = function(qq) {
          var Eq = !(xq && qq.metaKey && qq.shiftKey && !qq.ctrlKey && !qq.altKey || Aq && qq.shiftKey && qq.key && 1 == qq.key.length || "Unidentified" == qq.key) && qq.key || (qq.shiftKey ? mq : Oq)[qq.keyCode] || qq.key || "Unidentified";
          return "Esc" == Eq && (Eq = "Escape"), "Del" == Eq && (Eq = "Delete"), "Left" == Eq && (Eq = "ArrowLeft"), "Up" == Eq && (Eq = "ArrowUp"), "Right" == Eq && (Eq = "ArrowRight"), "Down" == Eq && (Eq = "ArrowDown"), Eq
        }(Eq),
        uq = (0, Yq.U)(cq, 0),
        Bq = (0, Yq.V)(uq) == cq.length && " " != cq,
        Wq = "",
        Nq = !1,
        aq = !1,
        Vq = !1;
      Gl && Gl.view == gq && Gl.scope == lq && (Wq = Gl.prefix + " ", NY.indexOf(Eq.keyCode) < 0 && (aq = !0, Gl = null));
      let dq, jq, Hq = new Set,
        oq = qq => {
          if (qq) {
            for (let Eq of qq.run)
              if (!Hq.has(Eq) && (Hq.add(Eq), Eq(gq))) return qq.stopPropagation && (Vq = !0), !0;
            qq.preventDefault && (qq.stopPropagation && (Vq = !0), aq = !0)
          }
          return !1
        },
        Pq = qq[lq];
      return Pq && (oq(Pq[Wq + fl(cq, Eq, !Bq)]) ? Nq = !0 : !Bq || !(Eq.altKey || Eq.metaKey || Eq.ctrlKey) || tq.windows && Eq.ctrlKey && Eq.altKey || tq.mac && Eq.altKey && !Eq.ctrlKey && !Eq.metaKey || !(dq = Oq[Eq.keyCode]) || dq == cq ? Bq && Eq.shiftKey && oq(Pq[Wq + fl(cq, Eq, !0)]) && (Nq = !0) : (oq(Pq[Wq + fl(dq, Eq, !0)]) || Eq.shiftKey && (jq = mq[Eq.keyCode]) != cq && jq != dq && oq(Pq[Wq + fl(jq, Eq, !1)])) && (Nq = !0), !Nq && oq(Pq._any) && (Nq = !0)), aq && (Nq = !0), Nq && Vq && Eq.stopPropagation(), Jl = null, Nq
    }
    class Rl {
      constructor(qq, Eq, gq, Yq, lq) {
        this.className = qq, this.left = Eq, this.top = gq, this.width = Yq, this.height = lq
      }
      draw() {
        let qq = document.createElement("div");
        return qq.className = this.className, this.adjust(qq), qq
      }
      update(qq, Eq) {
        return Eq.className == this.className && (this.adjust(qq), !0)
      }
      adjust(qq) {
        qq.style.left = this.left + "px", qq.style.top = this.top + "px", null != this.width && (qq.style.width = this.width + "px"), qq.style.height = this.height + "px"
      }
      eq(qq) {
        return this.left == qq.left && this.top == qq.top && this.width == qq.width && this.height == qq.height && this.className == qq.className
      }
      static forRange(qq, Eq, gq) {
        if (gq.empty) {
          let Yq = qq.coordsAtPos(gq.head, gq.assoc || 1);
          if (!Yq) return [];
          let lq = Ul(qq);
          return [new Rl(Eq, Yq.left - lq.left, Yq.top - lq.top, null, Yq.bottom - Yq.top)]
        }
        return function(qq, Eq, gq) {
          if (gq.to <= qq.viewport.from || gq.from >= qq.viewport.to) return [];
          let Yq = Math.max(gq.from, qq.viewport.from),
            lq = Math.min(gq.to, qq.viewport.to),
            Oq = qq.textDirection == cE.LTR,
            mq = qq.contentDOM,
            xq = mq.getBoundingClientRect(),
            Aq = Ul(qq),
            cq = mq.querySelector(".cm-line"),
            uq = cq && window.getComputedStyle(cq),
            Bq = xq.left + (uq ? parseInt(uq.paddingLeft) + Math.min(0, parseInt(uq.textIndent)) : 0),
            Wq = xq.right - (uq ? parseInt(uq.paddingRight) : 0),
            Nq = Rg(qq, Yq, 1),
            aq = Rg(qq, lq, -1),
            Vq = Nq.type == Zq.Text ? Nq : null,
            dq = aq.type == Zq.Text ? aq : null;
          Vq && (qq.lineWrapping || Nq.widgetLineBreaks) && (Vq = Fl(qq, Yq, 1, Vq));
          dq && (qq.lineWrapping || aq.widgetLineBreaks) && (dq = Fl(qq, lq, -1, dq));
          if (Vq && dq && Vq.from == dq.from && Vq.to == dq.to) return Hq(oq(gq.from, gq.to, Vq));
          {
            let Eq = Vq ? oq(gq.from, null, Vq) : Pq(Nq, !1),
              Yq = dq ? oq(null, gq.to, dq) : Pq(aq, !0),
              lq = [];
            return (Vq || Nq).to < (dq || aq).from - (Vq && dq ? 1 : 0) || Nq.widgetLineBreaks > 1 && Eq.bottom + qq.defaultLineHeight / 2 < Yq.top ? lq.push(jq(Bq, Eq.bottom, Wq, Yq.top)) : Eq.bottom < Yq.top && qq.elementAtHeight((Eq.bottom + Yq.top) / 2).type == Zq.Text && (Eq.bottom = Yq.top = (Eq.bottom + Yq.top) / 2), Hq(Eq).concat(lq).concat(Hq(Yq))
          }

          function jq(qq, gq, Yq, lq) {
            return new Rl(Eq, qq - Aq.left, gq - Aq.top, Math.max(0, Yq - qq), lq - gq)
          }

          function Hq(qq) {
            let {
              top: Eq,
              bottom: gq,
              horizontal: Yq
            } = qq, lq = [];
            for (let Oq = 0; Oq < Yq.length; Oq += 2) lq.push(jq(Yq[Oq], Eq, Yq[Oq + 1], gq));
            return lq
          }

          function oq(Eq, gq, Yq) {
            let lq = 1e9,
              mq = -1e9,
              xq = [];

            function Aq(Eq, gq, Aq, cq, uq) {
              let Nq = qq.coordsAtPos(Eq, Eq == Yq.to ? -2 : 2),
                aq = qq.coordsAtPos(Aq, Aq == Yq.from ? 2 : -2);
              Nq && aq && (lq = Math.min(Nq.top, aq.top, lq), mq = Math.max(Nq.bottom, aq.bottom, mq), uq == cE.LTR ? xq.push(Oq && gq ? Bq : Nq.left, Oq && cq ? Wq : aq.right) : xq.push(!Oq && cq ? Bq : aq.left, !Oq && gq ? Wq : Nq.right))
            }
            let cq = null !== Eq && void 0 !== Eq ? Eq : Yq.from,
              uq = null !== gq && void 0 !== gq ? gq : Yq.to;
            for (let Oq of qq.xqq)
              if (Oq.to > cq && Oq.from < uq)
                for (let Yq = Math.max(Oq.from, cq), lq = Math.min(Oq.to, uq);;) {
                  let Oq = qq.state.doc.lineAt(Yq);
                  for (let mq of qq.bidiSpans(Oq)) {
                    let qq = mq.from + Oq.from,
                      xq = mq.to + Oq.from;
                    if (qq >= lq) break;
                    xq > Yq && Aq(Math.max(qq, Yq), null == Eq && qq <= cq, Math.min(xq, lq), null == gq && xq >= uq, mq.dir)
                  }
                  if (Yq = Oq.to + 1, Yq >= lq) break
                }
            return 0 == xq.length && Aq(cq, null == Eq, uq, null == gq, qq.textDirection), {
              top: lq,
              bottom: mq,
              horizontal: xq
            }
          }

          function Pq(qq, Eq) {
            let gq = xq.top + (Eq ? qq.top : qq.bottom);
            return {
              top: gq,
              bottom: gq,
              horizontal: []
            }
          }
        }(qq, Eq, gq)
      }
    }

    function Ul(qq) {
      let Eq = qq.scrollDOM.getBoundingClientRect();
      return {
        left: (qq.textDirection == cE.LTR ? Eq.left : Eq.right - qq.scrollDOM.clientWidth * qq.scaleX) - qq.scrollDOM.scrollLeft * qq.scaleX,
        top: Eq.top - qq.scrollDOM.scrollTop * qq.scaleY
      }
    }

    function Fl(qq, Eq, gq, Yq) {
      let lq = qq.coordsAtPos(Eq, 2 * gq);
      if (!lq) return Yq;
      let Oq = qq.dom.getBoundingClientRect(),
        mq = (lq.top + lq.bottom) / 2,
        xq = qq.posAtCoords({
          x: Oq.left + 1,
          y: mq
        }),
        Aq = qq.posAtCoords({
          x: Oq.right - 1,
          y: mq
        });
      return null == xq || null == Aq ? Yq : {
        from: Math.max(Yq.from, Math.min(xq, Aq)),
        to: Math.min(Yq.to, Math.max(xq, Aq))
      }
    }
    class sl {
      constructor(qq, Eq) {
        this.view = qq, this.layer = Eq, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = qq.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Eq.above && this.dom.classList.add("cm-layer-above"), Eq.class && this.dom.classList.add(Eq.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(qq.state), qq.requestMeasure(this.measureReq), Eq.mount && Eq.mount(this.dom, qq)
      }
      update(qq) {
        qq.startState.facet(Xl) != qq.state.facet(Xl) && this.setOrder(qq.state), (this.layer.update(qq, this.dom) || qq.geometryChanged) && (this.scale(), qq.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(qq) {
        !1 !== this.layer.updateOnDocViewUpdate && qq.requestMeasure(this.measureReq)
      }
      setOrder(qq) {
        let Eq = 0,
          gq = qq.facet(Xl);
        for (; Eq < gq.length && gq[Eq] != this.layer;) Eq++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Eq)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: qq,
          scaleY: Eq
        } = this.view;
        qq == this.scaleX && Eq == this.scaleY || (this.scaleX = qq, this.scaleY = Eq, this.dom.style.transform = `scale(${1/qq}, ${1/Eq})`)
      }
      draw(qq) {
        if (qq.length != this.drawn.length || qq.some(((qq, Eq) => {
            return gq = qq, Yq = this.drawn[Eq], !(gq.constructor == Yq.constructor && gq.eq(Yq));
            var gq, Yq
          }))) {
          let Eq = this.dom.firstChild,
            gq = 0;
          for (let Yq of qq) Yq.update && Eq && Yq.constructor && this.drawn[gq].constructor && Yq.update(Eq, this.drawn[gq]) ? (Eq = Eq.nextSibling, gq++) : this.dom.insertBefore(Yq.draw(), Eq);
          for (; Eq;) {
            let qq = Eq.nextSibling;
            Eq.remove(), Eq = qq
          }
          this.drawn = qq, tq.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Xl = Yq.x.define();

    function wl(qq) {
      return [CE.define((Eq => new sl(Eq, qq))), Xl.of(qq)]
    }
    const Kl = Yq.x.define({
      combine: qq => (0, Yq.Y)(qq, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (qq, Eq) => Math.min(qq, Eq),
        drawRangeCursor: (qq, Eq) => qq || Eq
      })
    });

    function Cl() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Kl.of(qq), el, qO, EO, JE.of(!0)]
    }

    function Il(qq) {
      return qq.startState.facet(Kl) != qq.state.facet(Kl)
    }
    const el = wl({
      above: !0,
      markers(qq) {
        let {
          state: Eq
        } = qq, gq = Eq.facet(Kl), lq = [];
        for (let Oq of Eq.selection.zV) {
          let mq = Oq == Eq.selection.main;
          if (Oq.empty || gq.drawRangeCursor && !(mq && tq.ios && gq.iosSelectionHandles)) {
            let Eq = mq ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              gq = Oq.empty ? Oq : Yq.q.cursor(Oq.head, Oq.assoc);
            for (let Yq of Rl.forRange(qq, Eq, gq)) lq.push(Yq)
          }
        }
        return lq
      },
      update(qq, Eq) {
        qq.transactions.some((qq => qq.selection)) && (Eq.style.animationName = "cm-blink" == Eq.style.animationName ? "cm-blink2" : "cm-blink");
        let gq = Il(qq);
        return gq && Dl(qq.state, Eq), qq.docChanged || qq.selectionSet || gq
      },
      mount(qq, Eq) {
        Dl(Eq.state, qq)
      },
      class: "cm-cursorLayer"
    });

    function Dl(qq, Eq) {
      Eq.style.animationDuration = qq.facet(Kl).cursorBlinkRate + "ms"
    }
    const qO = wl({
        above: !1,
        markers(qq) {
          let Eq = [],
            {
              main: gq,
              zV: lq
            } = qq.state.selection;
          for (let Yq of lq)
            if (!Yq.empty)
              for (let gq of Rl.forRange(qq, "cm-selectionBackground", Yq)) Eq.push(gq);
          if (tq.ios && !gq.empty && qq.state.facet(Kl).iosSelectionHandles) {
            for (let lq of Rl.forRange(qq, "cm-selectionHandle cm-selectionHandle-start", Yq.q.cursor(gq.from, 1))) Eq.push(lq);
            for (let lq of Rl.forRange(qq, "cm-selectionHandle cm-selectionHandle-end", Yq.q.cursor(gq.to, 1))) Eq.push(lq)
          }
          return Eq
        },
        update: (qq, Eq) => qq.docChanged || qq.selectionSet || qq.viewportChanged || Il(qq),
        class: "cm-selectionLayer"
      }),
      EO = Yq.C.highest(vl.theme({
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
      gO = Yq.J.define({
        map: (qq, Eq) => null == qq ? null : Eq.mapPos(qq)
      }),
      YO = Yq.L.define({
        create: () => null,
        update: (qq, Eq) => (null != qq && (qq = Eq.changes.mapPos(qq)), Eq.effects.reduce(((qq, Eq) => Eq.is(gO) ? Eq.value : qq), qq))
      }),
      lO = CE.fromClass(class {
        constructor(qq) {
          this.view = qq, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(qq) {
          var Eq;
          let gq = qq.state.field(YO);
          null == gq ? null != this.cursor && (null === (Eq = this.cursor) || void 0 === Eq || Eq.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (qq.startState.field(YO) != gq || qq.docChanged || qq.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: qq
          } = this, Eq = qq.state.field(YO), gq = null != Eq && qq.coordsAtPos(Eq);
          if (!gq) return null;
          let Yq = qq.scrollDOM.getBoundingClientRect();
          return {
            left: gq.left - Yq.left + qq.scrollDOM.scrollLeft * qq.scaleX,
            top: gq.top - Yq.top + qq.scrollDOM.scrollTop * qq.scaleY,
            height: gq.bottom - gq.top
          }
        }
        drawCursor(qq) {
          if (this.cursor) {
            let {
              scaleX: Eq,
              scaleY: gq
            } = this.view;
            qq ? (this.cursor.style.left = qq.left / Eq + "px", this.cursor.style.top = qq.top / gq + "px", this.cursor.style.height = qq.height / gq + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(qq) {
          this.view.state.field(YO) != qq && this.view.dispatch({
            effects: gO.of(qq)
          })
        }
      }, {
        eventObservers: {
          dragover(qq) {
            this.setDropPos(this.view.posAtCoords({
              x: qq.clientX,
              y: qq.clientY
            }))
          },
          dragleave(qq) {
            qq.target != this.view.contentDOM && this.view.contentDOM.contains(qq.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function OO() {
      return [YO, lO]
    }

    function mO(qq, Eq, gq, Yq, lq) {
      Eq.lastIndex = 0;
      for (let Oq, mq = qq.iterRange(gq, Yq), xq = gq; !mq.next().done; xq += mq.value.length)
        if (!mq.lineBreak)
          for (; Oq = Eq.exec(mq.value);) lq(xq + Oq.index, Oq)
    }
    class xO {
      constructor(qq) {
        const {
          regexp: Eq,
          decoration: gq,
          decorate: Yq,
          boundary: lq,
          maxLength: Oq = 1e3
        } = qq;
        if (!Eq.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Eq, Yq) this.addMatch = (qq, Eq, gq, lq) => Yq(lq, gq, gq + qq[0].length, qq, Eq);
        else if ("function" == typeof gq) this.addMatch = (qq, Eq, Yq, lq) => {
          let Oq = gq(qq, Eq, Yq);
          Oq && lq(Yq, Yq + qq[0].length, Oq)
        };
        else {
          if (!gq) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (qq, Eq, Yq, lq) => lq(Yq, Yq + qq[0].length, gq)
        }
        this.boundary = lq, this.maxLength = Oq
      }
      createDeco(qq) {
        let Eq = new Yq.E,
          gq = Eq.add.bind(Eq);
        for (let {
            from: Yq,
            to: lq
          }
          of
          function(qq, Eq) {
            let gq = qq.xqq;
            if (1 == gq.length && gq[0].from == qq.viewport.from && gq[0].to == qq.viewport.to) return gq;
            let Yq = [];
            for (let {
                from: lq,
                to: Oq
              }
              of gq) lq = Math.max(qq.state.doc.lineAt(lq).from, lq - Eq), Oq = Math.min(qq.state.doc.lineAt(Oq).to, Oq + Eq), Yq.length && Yq[Yq.length - 1].to >= lq ? Yq[Yq.length - 1].to = Oq : Yq.push({
              from: lq,
              to: Oq
            });
            return Yq
          }(qq, this.maxLength)) mO(qq.state.doc, this.regexp, Yq, lq, ((Eq, Yq) => this.addMatch(Yq, qq, Eq, gq)));
        return Eq.finish()
      }
      updateDeco(qq, Eq) {
        let gq = 1e9,
          Yq = -1;
        return qq.docChanged && qq.changes.iterChanges(((Eq, lq, Oq, mq) => {
          mq >= qq.view.viewport.from && Oq <= qq.view.viewport.to && (gq = Math.min(Oq, gq), Yq = Math.max(mq, Yq))
        })), qq.viewportMoved || Yq - gq > 1e3 ? this.createDeco(qq.view) : Yq > -1 ? this.updateRange(qq.view, Eq.map(qq.changes), gq, Yq) : Eq
      }
      updateRange(qq, Eq, gq, Yq) {
        for (let lq of qq.xqq) {
          let Oq = Math.max(lq.from, gq),
            mq = Math.min(lq.to, Yq);
          if (mq >= Oq) {
            let gq = qq.state.doc.lineAt(Oq),
              Yq = gq.to < mq ? qq.state.doc.lineAt(mq) : gq,
              xq = Math.max(lq.from, gq.from),
              Aq = Math.min(lq.to, Yq.to);
            if (this.boundary) {
              for (; Oq > gq.from; Oq--)
                if (this.boundary.test(gq.text[Oq - 1 - gq.from])) {
                  xq = Oq;
                  break
                } for (; mq < Yq.to; mq++)
                if (this.boundary.test(Yq.text[mq - Yq.from])) {
                  Aq = mq;
                  break
                }
            }
            let cq, uq = [],
              Bq = (qq, Eq, gq) => uq.push(gq.range(qq, Eq));
            if (gq == Yq)
              for (this.regexp.lastIndex = xq - gq.from;
                (cq = this.regexp.exec(gq.text)) && cq.index < Aq - gq.from;) this.addMatch(cq, qq, cq.index + gq.from, Bq);
            else mO(qq.state.doc, this.regexp, xq, Aq, ((Eq, gq) => this.addMatch(gq, qq, Eq, Bq)));
            Eq = Eq.update({
              filterFrom: xq,
              filterTo: Aq,
              filter: (qq, Eq) => qq < xq || Eq > Aq,
              add: uq
            })
          }
        }
        return Eq
      }
    }
    const AO = null != /x/.unicode ? "gu" : "g",
      cO = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", AO),
      uO = {
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
    let BO = null;
    const WO = Yq.x.define({
      combine(qq) {
        let Eq = (0, Yq.Y)(qq, {
          render: null,
          specialChars: cO,
          addSpecialChars: null
        });
        return (Eq.replaceTabs = ! function() {
          var qq;
          if (null == BO && "undefined" != typeof document && document.body) {
            let Eq = document.body.style;
            BO = null != (null !== (qq = Eq.tabSize) && void 0 !== qq ? qq : Eq.MozTabSize)
          }
          return BO || !1
        }()) && (Eq.specialChars = new RegExp("\t|" + Eq.specialChars.source, AO)), Eq.addSpecialChars && (Eq.specialChars = new RegExp(Eq.specialChars.source + "|" + Eq.addSpecialChars.source, AO)), Eq
      }
    });

    function NO() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [WO.of(qq), aO || (aO = CE.fromClass(class {
        constructor(qq) {
          this.view = qq, this.YO = fq.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(qq.state.facet(WO)), this.YO = this.decorator.createDeco(qq)
        }
        makeDecorator(qq) {
          return new xO({
            regexp: qq.specialChars,
            decoration: (Eq, gq, lq) => {
              let {
                doc: Oq
              } = gq.state, mq = (0, Yq.U)(Eq[0], 0);
              if (9 == mq) {
                let qq = Oq.lineAt(lq),
                  Eq = gq.state.tabSize,
                  mq = (0, Yq.Z)(qq.text, Eq, lq - qq.from);
                return fq.replace({
                  widget: new dO((Eq - mq % Eq) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[mq] || (this.decorationCache[mq] = fq.replace({
                widget: new VO(qq, mq)
              }))
            },
            boundary: qq.replaceTabs ? void 0 : /[^]/
          })
        }
        update(qq) {
          let Eq = qq.state.facet(WO);
          qq.startState.facet(WO) != Eq ? (this.decorator = this.makeDecorator(Eq), this.YO = this.decorator.createDeco(qq.view)) : this.YO = this.decorator.updateDeco(qq, this.YO)
        }
      }, {
        YO: qq => qq.YO
      }))]
    }
    let aO = null;
    class VO extends iq {
      constructor(qq, Eq) {
        super(), this.options = qq, this.code = Eq
      }
      eq(qq) {
        return qq.code == this.code
      }
      toDOM(qq) {
        let Eq = function(qq) {
            return qq >= 32 ? "\u2022" : 10 == qq ? "\u2424" : String.fromCharCode(9216 + qq)
          }(this.code),
          gq = qq.state.phrase("Control character") + " " + (uO[this.code] || "0x" + this.code.toString(16)),
          Yq = this.options.render && this.options.render(this.code, gq, Eq);
        if (Yq) return Yq;
        let lq = document.createElement("span");
        return lq.textContent = Eq, lq.title = gq, lq.setAttribute("aria-label", gq), lq.className = "cm-specialChar", lq
      }
      ignoreEvent() {
        return !1
      }
    }
    class dO extends iq {
      constructor(qq) {
        super(), this.width = qq
      }
      eq(qq) {
        return qq.width == this.width
      }
      toDOM() {
        let qq = document.createElement("span");
        return qq.textContent = "\t", qq.className = "cm-tab", qq.style.width = this.width + "px", qq
      }
      ignoreEvent() {
        return !1
      }
    }

    function jO() {
      return oO
    }
    const HO = fq.line({
        class: "cm-activeLine"
      }),
      oO = CE.fromClass(class {
        constructor(qq) {
          this.YO = this.getDeco(qq)
        }
        update(qq) {
          (qq.docChanged || qq.selectionSet) && (this.YO = this.getDeco(qq.view))
        }
        getDeco(qq) {
          let Eq = -1,
            gq = [];
          for (let Yq of qq.state.selection.zV) {
            let lq = qq.lineBlockAt(Yq.head);
            lq.from > Eq && (gq.push(HO.range(lq.from)), Eq = lq.from)
          }
          return fq.set(gq)
        }
      }, {
        YO: qq => qq.YO
      });
    class PO extends iq {
      constructor(qq) {
        super(), this.content = qq
      }
      toDOM(qq) {
        let Eq = document.createElement("span");
        return Eq.className = "cm-placeholder", Eq.style.pointerEvents = "none", Eq.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(qq) : this.content.cloneNode(!0)), Eq.setAttribute("aria-hidden", "true"), Eq
      }
      coordsAt(qq) {
        let Eq = qq.firstChild ? Rq(qq.firstChild) : [];
        if (!Eq.length) return null;
        let gq = window.getComputedStyle(qq.parentNode),
          Yq = Kq(Eq[0], "rtl" != gq.direction),
          lq = parseInt(gq.lineHeight);
        return Yq.bottom - Yq.top > 1.5 * lq ? {
          left: Yq.left,
          right: Yq.right,
          top: Yq.top,
          bottom: Yq.top + lq
        } : Yq
      }
      ignoreEvent() {
        return !1
      }
    }

    function QO(qq) {
      let Eq = CE.fromClass(class {
        constructor(Eq) {
          this.view = Eq, this.placeholder = qq ? fq.set([fq.widget({
            widget: new PO(qq),
            side: 1
          }).range(0)]) : fq.none
        }
        get YO() {
          return this.view.state.doc.length ? fq.none : this.placeholder
        }
      }, {
        YO: qq => qq.YO
      });
      return "string" == typeof qq ? [Eq, vl.contentAttributes.of({
        "aria-placeholder": qq
      })] : Eq
    }
    const yO = 2e3;

    function tO(qq, Eq) {
      let gq = qq.posAtCoords({
          x: Eq.clientX,
          y: Eq.clientY
        }, !1),
        lq = qq.state.doc.lineAt(gq),
        Oq = gq - lq.from,
        mq = Oq > yO ? -1 : Oq == lq.length ? function(qq, Eq) {
          let gq = qq.coordsAtPos(qq.viewport.from);
          return gq ? Math.round(Math.abs((gq.left - Eq) / qq.defaultCharacterWidth)) : -1
        }(qq, Eq.clientX) : (0, Yq.Z)(lq.text, qq.state.tabSize, gq - lq.from);
      return {
        line: lq.number,
        col: mq,
        off: Oq
      }
    }

    function rO(qq, Eq) {
      let gq = tO(qq, Eq),
        lq = qq.state.selection;
      return gq ? {
        update(qq) {
          if (qq.docChanged) {
            let Eq = qq.changes.mapPos(qq.startState.doc.line(gq.line).from),
              Yq = qq.state.doc.lineAt(Eq);
            gq = {
              line: Yq.number,
              col: gq.col,
              off: Math.min(gq.off, Yq.length)
            }, lq = lq.map(qq.changes)
          }
        },
        get(Eq, Oq, mq) {
          let xq = tO(qq, Eq);
          if (!xq) return lq;
          let Aq = function(qq, Eq, gq) {
            let lq = Math.min(Eq.line, gq.line),
              Oq = Math.max(Eq.line, gq.line),
              mq = [];
            if (Eq.off > yO || gq.off > yO || Eq.col < 0 || gq.col < 0) {
              let xq = Math.min(Eq.off, gq.off),
                Aq = Math.max(Eq.off, gq.off);
              for (let Eq = lq; Eq <= Oq; Eq++) {
                let gq = qq.doc.line(Eq);
                gq.length <= Aq && mq.push(Yq.q.range(gq.from + xq, gq.to + Aq))
              }
            } else {
              let xq = Math.min(Eq.col, gq.col),
                Aq = Math.max(Eq.col, gq.col);
              for (let Eq = lq; Eq <= Oq; Eq++) {
                let gq = qq.doc.line(Eq),
                  lq = (0, Yq.bb)(gq.text, xq, qq.tabSize, !0);
                if (lq < 0) mq.push(Yq.q.cursor(gq.to));
                else {
                  let Eq = (0, Yq.bb)(gq.text, Aq, qq.tabSize);
                  mq.push(Yq.q.range(gq.from + lq, gq.from + Eq))
                }
              }
            }
            return mq
          }(qq.state, gq, xq);
          return Aq.length ? mq ? Yq.q.create(Aq.concat(lq.zV)) : Yq.q.create(Aq) : lq
        }
      } : null
    }

    function vO(qq) {
      let Eq = (null === qq || void 0 === qq ? void 0 : qq.eventFilter) || (qq => qq.altKey && 0 == qq.button);
      return vl.mouseSelectionStyle.of(((qq, gq) => Eq(gq) ? rO(qq, gq) : null))
    }
    const hO = {
        Alt: [18, qq => !!qq.altKey],
        Control: [17, qq => !!qq.ctrlKey],
        Shift: [16, qq => !!qq.shiftKey],
        Meta: [91, qq => !!qq.metaKey]
      },
      nO = {
        style: "cursor: crosshair"
      };

    function bO() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Eq, gq] = hO[qq.key || "Alt"],
        Yq = CE.fromClass(class {
          constructor(qq) {
            this.view = qq, this.isDown = !1
          }
          set(qq) {
            this.isDown != qq && (this.isDown = qq, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(qq) {
              this.set(qq.keyCode == Eq || gq(qq))
            },
            keyup(qq) {
              qq.keyCode != Eq && gq(qq) || this.set(!1)
            },
            mousemove(qq) {
              this.set(gq(qq))
            }
          }
        });
      return [Yq, vl.contentAttributes.of((qq => {
        var Eq;
        return (null === (Eq = qq.plugin(Yq)) || void 0 === Eq ? void 0 : Eq.isDown) ? nO : null
      }))]
    }
    const iO = "-10000px";
    class ZO {
      constructor(qq, Eq, gq, Yq) {
        this.facet = Eq, this.createTooltipView = gq, this.removeTooltipView = Yq, this.input = qq.state.facet(Eq), this.tooltips = this.input.filter((qq => qq));
        let lq = null;
        this.tooltipViews = this.tooltips.map((qq => lq = gq(qq, lq)))
      }
      update(qq, Eq) {
        var gq;
        let Yq = qq.state.facet(this.facet),
          lq = Yq.filter((qq => qq));
        if (Yq === this.input) {
          for (let Eq of this.tooltipViews) Eq.update && Eq.update(qq);
          return !1
        }
        let Oq = [],
          mq = Eq ? [] : null;
        for (let xq = 0; xq < lq.length; xq++) {
          let gq = lq[xq],
            Yq = -1;
          if (gq) {
            for (let qq = 0; qq < this.tooltips.length; qq++) {
              let Eq = this.tooltips[qq];
              Eq && Eq.create == gq.create && (Yq = qq)
            }
            if (Yq < 0) Oq[xq] = this.createTooltipView(gq, xq ? Oq[xq - 1] : null), mq && (mq[xq] = !!gq.above);
            else {
              let gq = Oq[xq] = this.tooltipViews[Yq];
              mq && (mq[xq] = Eq[Yq]), gq.update && gq.update(qq)
            }
          }
        }
        for (let xq of this.tooltipViews) Oq.indexOf(xq) < 0 && (this.removeTooltipView(xq), null === (gq = xq.destroy) || void 0 === gq || gq.call(xq));
        return Eq && (mq.forEach(((qq, gq) => Eq[gq] = qq)), Eq.length = mq.length), this.input = Yq, this.tooltips = lq, this.tooltipViews = Oq, !0
      }
    }

    function fO(qq) {
      let Eq = qq.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Eq.clientHeight,
        right: Eq.clientWidth
      }
    }
    const MO = Yq.x.define({
        combine: qq => {
          var Eq, gq, Yq;
          return {
            position: tq.ios ? "absolute" : (null === (Eq = qq.find((qq => qq.position))) || void 0 === Eq ? void 0 : Eq.position) || "fixed",
            parent: (null === (gq = qq.find((qq => qq.parent))) || void 0 === gq ? void 0 : gq.parent) || null,
            tooltipSpace: (null === (Yq = qq.find((qq => qq.tooltipSpace))) || void 0 === Yq ? void 0 : Yq.tooltipSpace) || fO
          }
        }
      }),
      TO = new WeakMap,
      zO = CE.fromClass(class {
        constructor(qq) {
          this.view = qq, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Eq = qq.state.facet(MO);
          this.position = Eq.position, this.parent = Eq.parent, this.classes = qq.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new ZO(qq, LO, ((qq, Eq) => this.createTooltip(qq, Eq)), (qq => {
            this.resizeObserver && this.resizeObserver.unobserve(qq.dom), qq.dom.remove()
          })), this.above = this.manager.tooltips.map((qq => !!qq.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((qq => {
            Date.now() > this.lastTransaction - 50 && qq.length > 0 && qq[qq.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), qq.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let qq of this.manager.tooltipViews) this.intersectionObserver.observe(qq.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(qq) {
          qq.transactions.length && (this.lastTransaction = Date.now());
          let Eq = this.manager.update(qq, this.above);
          Eq && this.observeIntersection();
          let gq = Eq || qq.geometryChanged,
            Yq = qq.state.facet(MO);
          if (Yq.position != this.position && !this.madeAbsolute) {
            this.position = Yq.position;
            for (let qq of this.manager.tooltipViews) qq.dom.style.position = this.position;
            gq = !0
          }
          if (Yq.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Yq.parent, this.createContainer();
            for (let qq of this.manager.tooltipViews) this.container.appendChild(qq.dom);
            gq = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          gq && this.maybeMeasure()
        }
        createTooltip(qq, Eq) {
          let gq = qq.create(this.view),
            Yq = Eq ? Eq.dom : null;
          if (gq.dom.classList.add("cm-tooltip"), qq.arrow && !gq.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let qq = document.createElement("div");
            qq.className = "cm-tooltip-arrow", gq.dom.appendChild(qq)
          }
          return gq.dom.style.position = this.position, gq.dom.style.top = iO, gq.dom.style.left = "0px", this.container.insertBefore(gq.dom, Yq), gq.mount && gq.mount(this.view), this.resizeObserver && this.resizeObserver.observe(gq.dom), gq
        }
        destroy() {
          var qq, Eq, gq;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Yq of this.manager.tooltipViews) Yq.dom.remove(), null === (qq = Yq.destroy) || void 0 === qq || qq.call(Yq);
          this.parent && this.container.remove(), null === (Eq = this.resizeObserver) || void 0 === Eq || Eq.disconnect(), null === (gq = this.intersectionObserver) || void 0 === gq || gq.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let qq = 1,
            Eq = 1,
            gq = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: qq
            } = this.manager.tooltipViews[0];
            if (tq.safari) {
              let Eq = qq.getBoundingClientRect();
              gq = Math.abs(Eq.top + 1e4) > 1 || Math.abs(Eq.left) > 1
            } else gq = !!qq.offsetParent && qq.offsetParent != this.container.ownerDocument.body
          }
          if (gq || "absolute" == this.position)
            if (this.parent) {
              let gq = this.parent.getBoundingClientRect();
              gq.width && gq.height && (qq = gq.width / this.parent.offsetWidth, Eq = gq.height / this.parent.offsetHeight)
            } else({
              scaleX: qq,
              scaleY: Eq
            } = this.view.viewState);
          let Yq = this.view.scrollDOM.getBoundingClientRect(),
            lq = xg(this.view);
          return {
            visible: {
              left: Yq.left + lq.left,
              top: Yq.top + lq.top,
              right: Yq.right - lq.right,
              bottom: Yq.bottom - lq.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((qq, Eq) => {
              let gq = this.manager.tooltipViews[Eq];
              return gq.getCoords ? gq.getCoords(qq.pos) : this.view.coordsAtPos(qq.pos)
            })),
            size: this.manager.tooltipViews.map((qq => {
              let {
                dom: Eq
              } = qq;
              return Eq.getBoundingClientRect()
            })),
            space: this.view.state.facet(MO).tooltipSpace(this.view),
            scaleX: qq,
            scaleY: Eq,
            makeAbsolute: gq
          }
        }
        writeMeasure(qq) {
          var Eq;
          if (qq.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let qq of this.manager.tooltipViews) qq.dom.style.position = "absolute"
          }
          let {
            visible: gq,
            space: Yq,
            scaleX: lq,
            scaleY: Oq
          } = qq, mq = [];
          for (let xq = 0; xq < this.manager.tooltips.length; xq++) {
            let Aq = this.manager.tooltips[xq],
              cq = this.manager.tooltipViews[xq],
              {
                dom: uq
              } = cq,
              Bq = qq.pos[xq],
              Wq = qq.size[xq];
            if (!Bq || !1 !== Aq.clip && (Bq.bottom <= Math.max(gq.top, Yq.top) || Bq.top >= Math.min(gq.bottom, Yq.bottom) || Bq.right < Math.max(gq.left, Yq.left) - .1 || Bq.left > Math.min(gq.right, Yq.right) + .1)) {
              uq.style.top = iO;
              continue
            }
            let Nq = Aq.arrow ? cq.dom.querySelector(".cm-tooltip-arrow") : null,
              aq = Nq ? 7 : 0,
              Vq = Wq.right - Wq.left,
              dq = null !== (Eq = TO.get(cq)) && void 0 !== Eq ? Eq : Wq.bottom - Wq.top,
              jq = cq.offset || GO,
              Hq = this.view.textDirection == cE.LTR,
              oq = Wq.width > Yq.right - Yq.left ? Hq ? Yq.left : Yq.right - Wq.width : Hq ? Math.max(Yq.left, Math.min(Bq.left - (Nq ? 14 : 0) + jq.x, Yq.right - Vq)) : Math.min(Math.max(Yq.left, Bq.left - Vq + (Nq ? 14 : 0) - jq.x), Yq.right - Vq),
              Pq = this.above[xq];
            !Aq.strictSide && (Pq ? Bq.top - dq - aq - jq.y < Yq.top : Bq.bottom + dq + aq + jq.y > Yq.bottom) && Pq == Yq.bottom - Bq.bottom > Bq.top - Yq.top && (Pq = this.above[xq] = !Pq);
            let Qq = (Pq ? Bq.top - Yq.top : Yq.bottom - Bq.bottom) - aq;
            if (Qq < dq && !1 !== cq.resize) {
              if (Qq < this.view.defaultLineHeight) {
                uq.style.top = iO;
                continue
              }
              TO.set(cq, dq), uq.style.height = (dq = Qq) / Oq + "px"
            } else uq.style.height && (uq.style.height = "");
            let yq = Pq ? Bq.top - dq - aq - jq.y : Bq.bottom + aq + jq.y,
              tq = oq + Vq;
            if (!0 !== cq.overlap)
              for (let qq of mq) qq.left < tq && qq.right > oq && qq.top < yq + dq && qq.bottom > yq && (yq = Pq ? qq.top - dq - 2 - aq : qq.bottom + aq + 2);
            if ("absolute" == this.position ? (uq.style.top = (yq - qq.parent.top) / Oq + "px", SO(uq, (oq - qq.parent.left) / lq)) : (uq.style.top = yq / Oq + "px", SO(uq, oq / lq)), Nq) {
              let qq = Bq.left + (Hq ? jq.x : -jq.x) - (oq + 14 - 7);
              Nq.style.left = qq / lq + "px"
            }!0 !== cq.overlap && mq.push({
              left: oq,
              top: yq,
              right: tq,
              bottom: yq + dq
            }), uq.classList.toggle("cm-tooltip-above", Pq), uq.classList.toggle("cm-tooltip-below", !Pq), cq.positioned && cq.positioned(qq.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let qq of this.manager.tooltipViews) qq.dom.style.top = iO
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function SO(qq, Eq) {
      let gq = parseInt(qq.style.left, 10);
      (isNaN(gq) || Math.abs(Eq - gq) > 1) && (qq.style.left = Eq + "px")
    }
    const pO = vl.baseTheme({
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
      GO = {
        x: 0,
        y: 0
      },
      LO = Yq.x.define({
        enables: [zO, pO]
      }),
      JO = Yq.x.define({
        combine: qq => qq.reduce(((qq, Eq) => qq.concat(Eq)), [])
      });
    class kO {
      static create(qq) {
        return new kO(qq)
      }
      constructor(qq) {
        this.view = qq, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ZO(qq, JO, ((qq, Eq) => this.createHostedView(qq, Eq)), (qq => qq.dom.remove()))
      }
      createHostedView(qq, Eq) {
        let gq = qq.create(this.view);
        return gq.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(gq.dom, Eq ? Eq.dom.nextSibling : this.dom.firstChild), this.mounted && gq.mount && gq.mount(this.view), gq
      }
      mount(qq) {
        for (let Eq of this.manager.tooltipViews) Eq.mount && Eq.mount(qq);
        this.mounted = !0
      }
      positioned(qq) {
        for (let Eq of this.manager.tooltipViews) Eq.positioned && Eq.positioned(qq)
      }
      update(qq) {
        this.manager.update(qq)
      }
      destroy() {
        var qq;
        for (let Eq of this.manager.tooltipViews) null === (qq = Eq.destroy) || void 0 === qq || qq.call(Eq)
      }
      passProp(qq) {
        let Eq;
        for (let gq of this.manager.tooltipViews) {
          let Yq = gq[qq];
          if (void 0 !== Yq)
            if (void 0 === Eq) Eq = Yq;
            else if (Eq !== Yq) return
        }
        return Eq
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
    const RO = LO.compute([JO], (qq => {
      let Eq = qq.facet(JO);
      return 0 === Eq.length ? null : {
        pos: Math.min(...Eq.map((qq => qq.pos))),
        end: Math.max(...Eq.map((qq => {
          var Eq;
          return null !== (Eq = qq.end) && void 0 !== Eq ? Eq : qq.pos
        }))),
        create: kO.create,
        above: Eq[0].above,
        arrow: Eq.some((qq => qq.arrow))
      }
    }));
    class UO {
      constructor(qq, Eq, gq, Yq, lq) {
        this.view = qq, this.source = Eq, this.field = gq, this.setHover = Yq, this.hoverTime = lq, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: qq.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), qq.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), qq.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let qq = Date.now() - this.lastMove.time;
        qq < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - qq) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: qq,
          lastMove: Eq
        } = this, gq = qq.docView.tile.nearest(Eq.target);
        if (!gq) return;
        let Yq, lq = 1;
        if (gq.isWidget()) Yq = gq.posAtStart;
        else {
          if (Yq = qq.posAtCoords(Eq), null == Yq) return;
          let gq = qq.coordsAtPos(Yq);
          if (!gq || Eq.y < gq.top || Eq.y > gq.bottom || Eq.x < gq.left - qq.defaultCharacterWidth || Eq.x > gq.right + qq.defaultCharacterWidth) return;
          let Oq = qq.bidiSpans(qq.state.doc.lineAt(Yq)).find((qq => qq.from <= Yq && qq.to >= Yq)),
            mq = Oq && Oq.dir == cE.RTL ? -1 : 1;
          lq = Eq.x < gq.left ? -mq : mq
        }
        let Oq = this.source(qq, Yq, lq);
        if (null === Oq || void 0 === Oq ? void 0 : Oq.then) {
          let Eq = this.pending = {
            pos: Yq
          };
          Oq.then((gq => {
            this.pending == Eq && (this.pending = null, !gq || Array.isArray(gq) && !gq.length || qq.dispatch({
              effects: this.setHover.of(Array.isArray(gq) ? gq : [gq])
            }))
          }), (Eq => sE(qq.state, Eq, "hover tooltip")))
        } else !Oq || Array.isArray(Oq) && !Oq.length || qq.dispatch({
          effects: this.setHover.of(Array.isArray(Oq) ? Oq : [Oq])
        })
      }
      get tooltip() {
        let qq = this.view.plugin(zO),
          Eq = qq ? qq.manager.tooltips.findIndex((qq => qq.create == kO.create)) : -1;
        return Eq > -1 ? qq.manager.tooltipViews[Eq] : null
      }
      mousemove(qq) {
        var Eq, gq;
        this.lastMove = {
          x: qq.clientX,
          y: qq.clientY,
          target: qq.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Yq,
          tooltip: lq
        } = this;
        if (Yq.length && lq && ! function(qq, Eq) {
            let gq, {
              left: Yq,
              right: lq,
              top: Oq,
              bottom: mq
            } = qq.getBoundingClientRect();
            if (gq = qq.querySelector(".cm-tooltip-arrow")) {
              let qq = gq.getBoundingClientRect();
              Oq = Math.min(qq.top, Oq), mq = Math.max(qq.bottom, mq)
            }
            return Eq.clientX >= Yq - FO && Eq.clientX <= lq + FO && Eq.clientY >= Oq - FO && Eq.clientY <= mq + FO
          }(lq.dom, qq) || this.pending) {
          let {
            pos: lq
          } = Yq[0] || this.pending, Oq = null !== (gq = null === (Eq = Yq[0]) || void 0 === Eq ? void 0 : Eq.end) && void 0 !== gq ? gq : lq;
          (lq == Oq ? this.view.posAtCoords(this.lastMove) == lq : function(qq, Eq, gq, Yq, lq) {
            let Oq = qq.scrollDOM.getBoundingClientRect(),
              mq = qq.documentTop + qq.documentPadding.top + qq.contentHeight;
            if (Oq.left > Yq || Oq.right < Yq || Oq.top > lq || Math.min(Oq.bottom, mq) < lq) return !1;
            let xq = qq.posAtCoords({
              x: Yq,
              y: lq
            }, !1);
            return xq >= Eq && xq <= gq
          }(this.view, lq, Oq, qq.clientX, qq.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(qq) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Eq
        } = this;
        if (Eq.length) {
          let {
            tooltip: Eq
          } = this;
          Eq && Eq.dom.contains(qq.relatedTarget) ? this.watchTooltipLeave(Eq.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(qq) {
        let Eq = gq => {
          qq.removeEventListener("mouseleave", Eq), this.active.length && !this.view.dom.contains(gq.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        qq.addEventListener("mouseleave", Eq)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const FO = 4;

    function sO(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gq = Yq.J.define(),
        lq = Yq.L.define({
          create: () => [],
          update(qq, lq) {
            if (qq.length && (Eq.hideOnChange && (lq.docChanged || lq.selection) ? qq = [] : Eq.hideOn && (qq = qq.filter((qq => !Eq.hideOn(lq, qq)))), lq.docChanged)) {
              let Eq = [];
              for (let gq of qq) {
                let qq = lq.changes.mapPos(gq.pos, -1, Yq.B.TrackDel);
                if (null != qq) {
                  let Yq = Object.assign(Object.create(null), gq);
                  Yq.pos = qq, null != Yq.end && (Yq.end = lq.changes.mapPos(Yq.end)), Eq.push(Yq)
                }
              }
              qq = Eq
            }
            for (let Eq of lq.effects) Eq.is(gq) && (qq = Eq.value), Eq.is(wO) && (qq = []);
            return qq
          },
          provide: qq => JO.from(qq)
        });
      return {
        active: lq,
        extension: [lq, CE.define((Yq => new UO(Yq, qq, lq, gq, Eq.hoverTime || 300))), RO]
      }
    }

    function XO(qq, Eq) {
      let gq = qq.plugin(zO);
      if (!gq) return null;
      let Yq = gq.manager.tooltips.indexOf(Eq);
      return Yq < 0 ? null : gq.manager.tooltipViews[Yq]
    }
    const wO = Yq.J.define();
    const KO = Yq.x.define({
      combine(qq) {
        let Eq, gq;
        for (let Yq of qq) Eq = Eq || Yq.topContainer, gq = gq || Yq.bottomContainer;
        return {
          topContainer: Eq,
          bottomContainer: gq
        }
      }
    });

    function CO(qq, Eq) {
      let gq = qq.plugin(IO),
        Yq = gq ? gq.specs.indexOf(Eq) : -1;
      return Yq > -1 ? gq.panels[Yq] : null
    }
    const IO = CE.fromClass(class {
      constructor(qq) {
        this.input = qq.state.facet(qm), this.specs = this.input.filter((qq => qq)), this.panels = this.specs.map((Eq => Eq(qq)));
        let Eq = qq.state.facet(KO);
        this.top = new eO(qq, !0, Eq.topContainer), this.bottom = new eO(qq, !1, Eq.bottomContainer), this.top.sync(this.panels.filter((qq => qq.top))), this.bottom.sync(this.panels.filter((qq => !qq.top)));
        for (let gq of this.panels) gq.dom.classList.add("cm-panel"), gq.mount && gq.mount()
      }
      update(qq) {
        let Eq = qq.state.facet(KO);
        this.top.container != Eq.topContainer && (this.top.sync([]), this.top = new eO(qq.view, !0, Eq.topContainer)), this.bottom.container != Eq.bottomContainer && (this.bottom.sync([]), this.bottom = new eO(qq.view, !1, Eq.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let gq = qq.state.facet(qm);
        if (gq != this.input) {
          let Eq = gq.filter((qq => qq)),
            Yq = [],
            lq = [],
            Oq = [],
            mq = [];
          for (let gq of Eq) {
            let Eq, xq = this.specs.indexOf(gq);
            xq < 0 ? (Eq = gq(qq.view), mq.push(Eq)) : (Eq = this.panels[xq], Eq.update && Eq.update(qq)), Yq.push(Eq), (Eq.top ? lq : Oq).push(Eq)
          }
          this.specs = Eq, this.panels = Yq, this.top.sync(lq), this.bottom.sync(Oq);
          for (let qq of mq) qq.dom.classList.add("cm-panel"), qq.mount && qq.mount()
        } else
          for (let Yq of this.panels) Yq.update && Yq.update(qq)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: qq => vl.scrollMargins.of((Eq => {
        let gq = Eq.plugin(qq);
        return gq && {
          top: gq.top.scrollMargin(),
          bottom: gq.bottom.scrollMargin()
        }
      }))
    });
    class eO {
      constructor(qq, Eq, gq) {
        this.view = qq, this.top = Eq, this.container = gq, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(qq) {
        for (let Eq of this.panels) Eq.destroy && qq.indexOf(Eq) < 0 && Eq.destroy();
        this.panels = qq, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let qq = this.container || this.view.dom;
          qq.insertBefore(this.dom, this.top ? qq.firstChild : null)
        }
        let qq = this.dom.firstChild;
        for (let Eq of this.panels)
          if (Eq.dom.parentNode == this.dom) {
            for (; qq != Eq.dom;) qq = DO(qq);
            qq = qq.nextSibling
          } else this.dom.insertBefore(Eq.dom, qq);
        for (; qq;) qq = DO(qq)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let qq of this.classes.split(" ")) qq && this.container.classList.remove(qq);
          for (let qq of (this.classes = this.view.themeClasses).split(" ")) qq && this.container.classList.add(qq)
        }
      }
    }

    function DO(qq) {
      let Eq = qq.nextSibling;
      return qq.remove(), Eq
    }
    const qm = Yq.x.define({
      enables: IO
    });

    function Em(qq, Eq) {
      let gq, lq = new Promise((qq => gq = qq)),
        Oq = qq => function(qq, Eq, gq) {
          let Yq = Eq.content ? Eq.content(qq, (() => mq(null))) : null;
          if (!Yq) {
            if (Yq = (0, Bq.c)("form"), Eq.input) {
              let qq = (0, Bq.c)("input", Eq.input);
              /^(text|password|number|email|tel|url)$/.test(qq.type) && qq.classList.add("cm-textfield"), qq.name || (qq.name = "input"), Yq.appendChild((0, Bq.c)("label", (Eq.label || "") + ": ", qq))
            } else Yq.appendChild(document.createTextNode(Eq.label || ""));
            Yq.appendChild(document.createTextNode(" ")), Yq.appendChild((0, Bq.c)("button", {
              class: "cm-button",
              type: "submit"
            }, Eq.submitLabel || "OK"))
          }
          let lq = "FORM" == Yq.nodeName ? [Yq] : Yq.querySelectorAll("form");
          for (let xq = 0; xq < lq.length; xq++) {
            let qq = lq[xq];
            qq.addEventListener("keydown", (Eq => {
              27 == Eq.keyCode ? (Eq.preventDefault(), mq(null)) : 13 == Eq.keyCode && (Eq.preventDefault(), mq(qq))
            })), qq.addEventListener("submit", (Eq => {
              Eq.preventDefault(), mq(qq)
            }))
          }
          let Oq = (0, Bq.c)("div", Yq, (0, Bq.c)("button", {
            onclick: () => mq(null),
            "aria-label": qq.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Eq.class && (Oq.className = Eq.class);

          function mq(Eq) {
            Oq.contains(Oq.ownerDocument.activeElement) && qq.focus(), gq(Eq)
          }
          return Oq.classList.add("cm-dialog"), {
            dom: Oq,
            top: Eq.top,
            mount: () => {
              if (Eq.focus) {
                let qq;
                qq = "string" == typeof Eq.focus ? Yq.querySelector(Eq.focus) : Yq.querySelector("input") || Yq.querySelector("button"), qq && "select" in qq ? qq.select() : qq && "focus" in qq && qq.focus()
              }
            }
          }
        }(qq, Eq, gq);
      qq.state.field(gm, !1) ? qq.dispatch({
        effects: Ym.of(Oq)
      }) : qq.dispatch({
        effects: Yq.J.appendConfig.of(gm.init((() => [Oq])))
      });
      let mq = lm.of(Oq);
      return {
        close: mq,
        result: lq.then((Eq => ((qq.win.queueMicrotask || (Eq => qq.win.setTimeout(Eq, 10)))((() => {
          qq.state.field(gm).indexOf(Oq) > -1 && qq.dispatch({
            effects: mq
          })
        })), Eq)))
      }
    }
    const gm = Yq.L.define({
        create: () => [],
        update(qq, Eq) {
          for (let gq of Eq.effects) gq.is(Ym) ? qq = [gq.value].concat(qq) : gq.is(lm) && (qq = qq.filter((qq => qq != gq.value)));
          return qq
        },
        provide: qq => qm.computeN([qq], (Eq => Eq.field(qq)))
      }),
      Ym = Yq.J.define(),
      lm = Yq.J.define();
    class Om extends Yq.I {
      compare(qq) {
        return this == qq || this.constructor == qq.constructor && this.eq(qq)
      }
      eq(qq) {
        return !1
      }
      destroy(qq) {}
    }
    Om.prototype.elementClass = "", Om.prototype.toDOM = void 0, Om.prototype.mapMode = Yq.B.TrackBefore, Om.prototype.startSide = Om.prototype.endSide = -1, Om.prototype.point = !0;
    const mm = Yq.x.define(),
      xm = Yq.x.define(),
      Am = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Yq.G.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      cm = Yq.x.define();

    function um(qq) {
      return [Wm(), cm.of({
        ...Am,
        ...qq
      })]
    }
    const Bm = Yq.x.define({
      combine: qq => qq.some((qq => qq))
    });

    function Wm(qq) {
      let Eq = [Nm];
      return qq && !1 === qq.fixed && Eq.push(Bm.of(!0)), Eq
    }
    const Nm = CE.fromClass(class {
      constructor(qq) {
        this.view = qq, this.domAfter = null, this.prevViewport = qq.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = qq.state.facet(cm).map((Eq => new jm(qq, Eq))), this.fixed = !qq.state.facet(Bm);
        for (let Eq of this.gutters) "after" == Eq.config.side ? this.getDOMAfter().appendChild(Eq.dom) : this.dom.appendChild(Eq.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), qq.scrollDOM.insertBefore(this.dom, qq.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(qq) {
        if (this.updateGutters(qq)) {
          let Eq = this.prevViewport,
            gq = qq.view.viewport,
            Yq = Math.min(Eq.to, gq.to) - Math.max(Eq.from, gq.from);
          this.syncGutters(Yq < .8 * (gq.to - gq.from))
        }
        if (qq.geometryChanged) {
          let qq = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = qq, this.domAfter && (this.domAfter.style.minHeight = qq)
        }
        this.view.state.facet(Bm) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = qq.view.viewport
      }
      syncGutters(qq) {
        let Eq = this.dom.nextSibling;
        qq && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let gq = Yq.G.iter(this.view.state.facet(mm), this.view.viewport.from),
          lq = [],
          Oq = this.gutters.map((qq => new dm(qq, this.view.viewport, -this.view.documentPadding.top)));
        for (let Yq of this.view.viewportLineBlocks)
          if (lq.length && (lq = []), Array.isArray(Yq.type)) {
            let qq = !0;
            for (let Eq of Yq.type)
              if (Eq.type == Zq.Text && qq) {
                Vm(gq, lq, Eq.from);
                for (let qq of Oq) qq.line(this.view, Eq, lq);
                qq = !1
              } else if (Eq.widget)
              for (let qq of Oq) qq.widget(this.view, Eq)
          } else if (Yq.type == Zq.Text) {
          Vm(gq, lq, Yq.from);
          for (let qq of Oq) qq.line(this.view, Yq, lq)
        } else if (Yq.widget)
          for (let qq of Oq) qq.widget(this.view, Yq);
        for (let Yq of Oq) Yq.finish();
        qq && (this.view.scrollDOM.insertBefore(this.dom, Eq), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(qq) {
        let Eq = qq.startState.facet(cm),
          gq = qq.state.facet(cm),
          lq = qq.docChanged || qq.heightChanged || qq.viewportChanged || !Yq.G.eq(qq.startState.facet(mm), qq.state.facet(mm), qq.view.viewport.from, qq.view.viewport.to);
        if (Eq == gq)
          for (let Yq of this.gutters) Yq.update(qq) && (lq = !0);
        else {
          lq = !0;
          let Yq = [];
          for (let lq of gq) {
            let gq = Eq.indexOf(lq);
            gq < 0 ? Yq.push(new jm(this.view, lq)) : (this.gutters[gq].update(qq), Yq.push(this.gutters[gq]))
          }
          for (let qq of this.gutters) qq.dom.remove(), Yq.indexOf(qq) < 0 && qq.destroy();
          for (let qq of Yq) "after" == qq.config.side ? this.getDOMAfter().appendChild(qq.dom) : this.dom.appendChild(qq.dom);
          this.gutters = Yq
        }
        return lq
      }
      destroy() {
        for (let qq of this.gutters) qq.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: qq => vl.scrollMargins.of((Eq => {
        let gq = Eq.plugin(qq);
        if (!gq || 0 == gq.gutters.length || !gq.fixed) return null;
        let Yq = gq.dom.offsetWidth * Eq.scaleX,
          lq = gq.domAfter ? gq.domAfter.offsetWidth * Eq.scaleX : 0;
        return Eq.textDirection == cE.LTR ? {
          left: Yq,
          right: lq
        } : {
          right: Yq,
          left: lq
        }
      }))
    });

    function am(qq) {
      return Array.isArray(qq) ? qq : [qq]
    }

    function Vm(qq, Eq, gq) {
      for (; qq.value && qq.from <= gq;) qq.from == gq && Eq.push(qq.value), qq.next()
    }
    class dm {
      constructor(qq, Eq, gq) {
        this.gutter = qq, this.height = gq, this.i = 0, this.cursor = Yq.G.iter(qq.markers, Eq.from)
      }
      addElement(qq, Eq, gq) {
        let {
          gutter: Yq
        } = this, lq = (Eq.top - this.height) / qq.scaleY, Oq = Eq.height / qq.scaleY;
        if (this.i == Yq.elements.length) {
          let Eq = new Hm(qq, Oq, lq, gq);
          Yq.elements.push(Eq), Yq.dom.appendChild(Eq.dom)
        } else Yq.elements[this.i].update(qq, Oq, lq, gq);
        this.height = Eq.bottom, this.i++
      }
      line(qq, Eq, gq) {
        let Yq = [];
        Vm(this.cursor, Yq, Eq.from), gq.length && (Yq = Yq.concat(gq));
        let lq = this.gutter.config.lineMarker(qq, Eq, Yq);
        lq && Yq.unshift(lq);
        let Oq = this.gutter;
        (0 != Yq.length || Oq.config.renderEmptyElements) && this.addElement(qq, Eq, Yq)
      }
      widget(qq, Eq) {
        let gq = this.gutter.config.widgetMarker(qq, Eq.widget, Eq),
          Yq = gq ? [gq] : null;
        for (let lq of qq.state.facet(xm)) {
          let gq = lq(qq, Eq.widget, Eq);
          gq && (Yq || (Yq = [])).push(gq)
        }
        Yq && this.addElement(qq, Eq, Yq)
      }
      finish() {
        let qq = this.gutter;
        for (; qq.elements.length > this.i;) {
          let Eq = qq.elements.pop();
          qq.dom.removeChild(Eq.dom), Eq.destroy()
        }
      }
    }
    class jm {
      constructor(qq, Eq) {
        this.view = qq, this.config = Eq, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let gq in Eq.domEventHandlers) this.dom.addEventListener(gq, (Yq => {
          let lq, Oq = Yq.target;
          if (Oq != this.dom && this.dom.contains(Oq)) {
            for (; Oq.parentNode != this.dom;) Oq = Oq.parentNode;
            let qq = Oq.getBoundingClientRect();
            lq = (qq.top + qq.bottom) / 2
          } else lq = Yq.clientY;
          let mq = qq.lineBlockAtHeight(lq - qq.documentTop);
          Eq.domEventHandlers[gq](qq, mq, Yq) && Yq.preventDefault()
        }));
        this.markers = am(Eq.markers(qq)), Eq.initialSpacer && (this.spacer = new Hm(qq, 0, 0, [Eq.initialSpacer(qq)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(qq) {
        let Eq = this.markers;
        if (this.markers = am(this.config.markers(qq.view)), this.spacer && this.config.updateSpacer) {
          let Eq = this.config.updateSpacer(this.spacer.markers[0], qq);
          Eq != this.spacer.markers[0] && this.spacer.update(qq.view, 0, 0, [Eq])
        }
        let gq = qq.view.viewport;
        return !Yq.G.eq(this.markers, Eq, gq.from, gq.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(qq)
      }
      destroy() {
        for (let qq of this.elements) qq.destroy()
      }
    }
    class Hm {
      constructor(qq, Eq, gq, Yq) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(qq, Eq, gq, Yq)
      }
      update(qq, Eq, gq, Yq) {
        this.height != Eq && (this.height = Eq, this.dom.style.height = Eq + "px"), this.above != gq && (this.dom.style.marginTop = (this.above = gq) ? gq + "px" : ""),
          function(qq, Eq) {
            if (qq.length != Eq.length) return !1;
            for (let gq = 0; gq < qq.length; gq++)
              if (!qq[gq].compare(Eq[gq])) return !1;
            return !0
          }(this.markers, Yq) || this.setMarkers(qq, Yq)
      }
      setMarkers(qq, Eq) {
        let gq = "cm-gutterElement",
          Yq = this.dom.firstChild;
        for (let lq = 0, Oq = 0;;) {
          let mq = Oq,
            xq = lq < Eq.length ? Eq[lq++] : null,
            Aq = !1;
          if (xq) {
            let qq = xq.elementClass;
            qq && (gq += " " + qq);
            for (let Eq = Oq; Eq < this.markers.length; Eq++)
              if (this.markers[Eq].compare(xq)) {
                mq = Eq, Aq = !0;
                break
              }
          } else mq = this.markers.length;
          for (; Oq < mq;) {
            let qq = this.markers[Oq++];
            if (qq.toDOM) {
              qq.destroy(Yq);
              let Eq = Yq.nextSibling;
              Yq.remove(), Yq = Eq
            }
          }
          if (!xq) break;
          xq.toDOM && (Aq ? Yq = Yq.nextSibling : this.dom.insertBefore(xq.toDOM(qq), Yq)), Aq && Oq++
        }
        this.dom.className = gq, this.markers = Eq
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const om = Yq.x.define(),
      Pm = Yq.x.define(),
      Qm = Yq.x.define({
        combine: qq => (0, Yq.Y)(qq, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(qq, Eq) {
            let gq = Object.assign({}, qq);
            for (let Yq in Eq) {
              let qq = gq[Yq],
                lq = Eq[Yq];
              gq[Yq] = qq ? (Eq, gq, Yq) => qq(Eq, gq, Yq) || lq(Eq, gq, Yq) : lq
            }
            return gq
          }
        })
      });
    class ym extends Om {
      constructor(qq) {
        super(), this.number = qq
      }
      eq(qq) {
        return this.number == qq.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function tm(qq, Eq) {
      return qq.state.facet(Qm).formatNumber(Eq, qq.state)
    }
    const rm = cm.compute([Qm], (qq => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: qq => qq.state.facet(om),
      lineMarker: (qq, Eq, gq) => gq.some((qq => qq.toDOM)) ? null : new ym(tm(qq, qq.state.doc.lineAt(Eq.from).number)),
      widgetMarker: (qq, Eq, gq) => {
        for (let Yq of qq.state.facet(Pm)) {
          let lq = Yq(qq, Eq, gq);
          if (lq) return lq
        }
        return null
      },
      lineMarkerChange: qq => qq.startState.facet(Qm) != qq.state.facet(Qm),
      initialSpacer: qq => new ym(tm(qq, nm(qq.state.doc.lines))),
      updateSpacer(qq, Eq) {
        let gq = tm(Eq.view, nm(Eq.view.state.doc.lines));
        return gq == qq.number ? qq : new ym(gq)
      },
      domEventHandlers: qq.facet(Qm).domEventHandlers,
      side: "before"
    })));

    function hm() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Qm.of(qq), Wm(), rm]
    }

    function nm(qq) {
      let Eq = 9;
      for (; Eq < qq;) Eq = 10 * Eq + 9;
      return Eq
    }
    const bm = new class extends Om {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      im = mm.compute(["selection"], (qq => {
        let Eq = [],
          gq = -1;
        for (let Yq of qq.selection.zV) {
          let lq = qq.doc.lineAt(Yq.head).from;
          lq > gq && (gq = lq, Eq.push(bm.range(lq)))
        }
        return Yq.G.of(Eq)
      }));

    function Zm() {
      return im
    }
  },
  41073: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => aq,
      c: () => Yq,
      f: () => Nq,
      h: () => mq,
      k: () => uq,
      m: () => cq,
      q: () => Mq,
      u: () => zq,
      x: () => Tq
    });
    const Yq = 1024;
    let lq = 0;
    class Oq {
      constructor(qq, Eq) {
        this.from = qq, this.to = Eq
      }
    }
    class mq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = lq++, this.perNode = !!qq.perNode, this.deserialize = qq.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = qq.combine || null
      }
      add(qq) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof qq && (qq = cq.match(qq)), Eq => {
          let gq = qq(Eq);
          return void 0 === gq ? null : [this, gq]
        }
      }
    }
    mq.closedBy = new mq({
      deserialize: qq => qq.split(" ")
    }), mq.openedBy = new mq({
      deserialize: qq => qq.split(" ")
    }), mq.group = new mq({
      deserialize: qq => qq.split(" ")
    }), mq.isolate = new mq({
      deserialize: qq => {
        if (qq && "rtl" != qq && "ltr" != qq && "auto" != qq) throw new RangeError("Invalid value for isolate: " + qq);
        return qq || "auto"
      }
    }), mq.contextHash = new mq({
      perNode: !0
    }), mq.lookAhead = new mq({
      perNode: !0
    }), mq.mounted = new mq({
      perNode: !0
    });
    class xq {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = qq, this.overlay = Eq, this.parser = gq, this.bracketed = Yq
      }
      static get(qq) {
        return qq && qq.props && qq.props[mq.mounted.id]
      }
    }
    const Aq = Object.create(null);
    class cq {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = qq, this.props = Eq, this.id = gq, this.flags = Yq
      }
      static define(qq) {
        let Eq = qq.props && qq.props.length ? Object.create(null) : Aq,
          gq = (qq.top ? 1 : 0) | (qq.skipped ? 2 : 0) | (qq.error ? 4 : 0) | (null == qq.name ? 8 : 0),
          Yq = new cq(qq.name || "", Eq, qq.id, gq);
        if (qq.props)
          for (let lq of qq.props)
            if (Array.isArray(lq) || (lq = lq(Yq)), lq) {
              if (lq[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Eq[lq[0].id] = lq[1]
            } return Yq
      }
      prop(qq) {
        return this.props[qq.id]
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
      is(qq) {
        if ("string" == typeof qq) {
          if (this.name == qq) return !0;
          let Eq = this.prop(mq.group);
          return !!Eq && Eq.indexOf(qq) > -1
        }
        return this.id == qq
      }
      static match(qq) {
        let Eq = Object.create(null);
        for (let gq in qq)
          for (let Yq of gq.split(" ")) Eq[Yq] = qq[gq];
        return qq => {
          for (let gq = qq.prop(mq.group), Yq = -1; Yq < (gq ? gq.length : 0); Yq++) {
            let lq = Eq[Yq < 0 ? qq.name : gq[Yq]];
            if (lq) return lq
          }
        }
      }
    }
    cq.none = new cq("", Object.create(null), 0, 8);
    class uq {
      constructor(qq) {
        this.types = qq;
        for (let Eq = 0; Eq < qq.length; Eq++)
          if (qq[Eq].id != Eq) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let qq = [];
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        for (let lq of this.types) {
          let Eq = null;
          for (let qq of gq) {
            let gq = qq(lq);
            if (gq) {
              Eq || (Eq = Object.assign({}, lq.props));
              let qq = gq[1],
                Yq = gq[0];
              Yq.combine && Yq.id in Eq && (qq = Yq.combine(Eq[Yq.id], qq)), Eq[Yq.id] = qq
            }
          }
          qq.push(Eq ? new cq(lq.name, Eq, lq.id, lq.flags) : lq)
        }
        return new uq(qq)
      }
    }
    const Bq = new WeakMap,
      Wq = new WeakMap;
    var Nq;
    ! function(qq) {
      qq[qq.ExcludeBuffers = 1] = "ExcludeBuffers", qq[qq.IncludeAnonymous = 2] = "IncludeAnonymous", qq[qq.IgnoreMounts = 4] = "IgnoreMounts", qq[qq.IgnoreOverlays = 8] = "IgnoreOverlays", qq[qq.EnterBracketed = 16] = "EnterBracketed"
    }(Nq || (Nq = {}));
    class aq {
      constructor(qq, Eq, gq, Yq, lq) {
        if (this.type = qq, this.children = Eq, this.positions = gq, this.length = Yq, this.props = null, lq && lq.length) {
          this.props = Object.create(null);
          for (let [qq, Eq] of lq) this.props["number" == typeof qq ? qq : qq.id] = Eq
        }
      }
      toString() {
        let qq = xq.get(this);
        if (qq && !qq.overlay) return qq.tree.toString();
        let Eq = "";
        for (let gq of this.children) {
          let qq = gq.toString();
          qq && (Eq && (Eq += ","), Eq += qq)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Eq.length ? "(" + Eq + ")" : "") : Eq
      }
      cursor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new nq(this.topNode, qq)
      }
      cursorAt(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = Bq.get(this) || this.topNode,
          Yq = new nq(gq);
        return Yq.moveTo(qq, Eq), Bq.set(this, Yq._tree), Yq
      }
      get topNode() {
        return new Pq(this, 0, 0, null)
      }
      resolve(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = Hq(Bq.get(this) || this.topNode, qq, Eq, !1);
        return Bq.set(this, gq), gq
      }
      resolveInner(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = Hq(Wq.get(this) || this.topNode, qq, Eq, !0);
        return Wq.set(this, gq), gq
      }
      resolveStack(qq) {
        return function(qq, Eq, gq) {
          let Yq = qq.resolveInner(Eq, gq),
            lq = null;
          for (let Oq = Yq instanceof Pq ? Yq : Yq.context.parent; Oq; Oq = Oq.parent)
            if (Oq.index < 0) {
              let qq = Oq.parent;
              (lq || (lq = [Yq])).push(qq.resolve(Eq, gq)), Oq = qq
            } else {
              let qq = xq.get(Oq.tree);
              if (qq && qq.overlay && qq.overlay[0].from <= Eq && qq.overlay[qq.overlay.length - 1].to >= Eq) {
                let mq = new Pq(qq.tree, qq.overlay[0].from + Oq.from, -1, Oq);
                (lq || (lq = [Yq])).push(Hq(mq, Eq, gq, !1))
              }
            } return lq ? vq(lq) : Yq
        }(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(qq) {
        let {
          enter: Eq,
          leave: gq,
          from: Yq = 0,
          to: lq = this.length
        } = qq, Oq = qq.mode || 0, mq = (Oq & Nq.IncludeAnonymous) > 0;
        for (let xq = this.cursor(Oq | Nq.IncludeAnonymous);;) {
          let qq = !1;
          if (xq.from <= lq && xq.to >= Yq && (!mq && xq.type.isAnonymous || !1 !== Eq(xq))) {
            if (xq.firstChild()) continue;
            qq = !0
          }
          for (; qq && gq && (mq || !xq.type.isAnonymous) && gq(xq), !xq.nextSibling();) {
            if (!xq.parent()) return;
            qq = !0
          }
        }
      }
      prop(qq) {
        return qq.perNode ? this.props ? this.props[qq.id] : void 0 : this.type.prop(qq)
      }
      get propValues() {
        let qq = [];
        if (this.props)
          for (let Eq in this.props) qq.push([+Eq, this.props[Eq]]);
        return qq
      }
      balance() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : fq(cq.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((qq, Eq, gq) => new aq(this.type, qq, Eq, gq, this.propValues)), qq.makeTree || ((qq, Eq, gq) => new aq(cq.none, qq, Eq, gq)))
      }
      static build(qq) {
        return function(qq) {
          var Eq;
          let {
            buffer: gq,
            nodeSet: lq,
            maxBufferLength: Oq = Yq,
            reused: xq = [],
            minRepeatType: Aq = lq.types.length
          } = qq, cq = Array.isArray(gq) ? new Vq(gq, gq.length) : gq, uq = lq.types, Bq = 0, Wq = 0;

          function Nq(qq, Eq, gq, Yq, mq, aq) {
            let {
              id: Vq,
              start: tq,
              end: rq,
              size: vq
            } = cq, hq = Wq, nq = Bq;
            if (vq < 0) {
              if (cq.next(), -1 == vq) {
                let Eq = xq[Vq];
                return gq.push(Eq), void Yq.push(tq - qq)
              }
              if (-3 == vq) return void(Bq = Vq);
              if (-4 == vq) return void(Wq = Vq);
              throw new RangeError(`Unrecognized record size: ${vq}`)
            }
            let bq, iq, Zq = uq[Vq],
              Mq = tq - qq;
            if (rq - tq <= Oq && (iq = Qq(cq.pos - Eq, mq))) {
              let Eq = new Uint16Array(iq.size - iq.skip),
                gq = cq.pos - iq.size,
                Yq = Eq.length;
              for (; cq.pos > gq;) Yq = yq(iq.start, Eq, Yq);
              bq = new dq(Eq, rq - iq.start, lq), Mq = iq.start - qq
            } else {
              let qq = cq.pos - vq;
              cq.next();
              let Eq = [],
                gq = [],
                Yq = Vq >= Aq ? Vq : -1,
                lq = 0,
                mq = rq;
              for (; cq.pos > qq;) Yq >= 0 && cq.id == Yq && cq.size >= 0 ? (cq.end <= mq - Oq && (oq(Eq, gq, tq, lq, cq.end, mq, Yq, hq, nq), lq = Eq.length, mq = cq.end), cq.next()) : aq > 2500 ? jq(tq, qq, Eq, gq) : Nq(tq, qq, Eq, gq, Yq, aq + 1);
              if (Yq >= 0 && lq > 0 && lq < Eq.length && oq(Eq, gq, tq, lq, tq, mq, Yq, hq, nq), Eq.reverse(), gq.reverse(), Yq > -1 && lq > 0) {
                let qq = Hq(Zq, nq);
                bq = fq(Zq, Eq, gq, 0, Eq.length, 0, rq - tq, qq, qq)
              } else bq = Pq(Zq, Eq, gq, rq - tq, hq - rq, nq)
            }
            gq.push(bq), Yq.push(Mq)
          }

          function jq(qq, Eq, gq, Yq) {
            let mq = [],
              xq = 0,
              Aq = -1;
            for (; cq.pos > Eq;) {
              let {
                id: qq,
                start: Eq,
                end: gq,
                size: Yq
              } = cq;
              if (Yq > 4) cq.next();
              else {
                if (Aq > -1 && Eq < Aq) break;
                Aq < 0 && (Aq = gq - Oq), mq.push(qq, Eq, gq), xq++, cq.next()
              }
            }
            if (xq) {
              let Eq = new Uint16Array(4 * xq),
                Oq = mq[mq.length - 2];
              for (let qq = mq.length - 3, gq = 0; qq >= 0; qq -= 3) Eq[gq++] = mq[qq], Eq[gq++] = mq[qq + 1] - Oq, Eq[gq++] = mq[qq + 2] - Oq, Eq[gq++] = gq;
              gq.push(new dq(Eq, mq[2] - Oq, lq)), Yq.push(Oq - qq)
            }
          }

          function Hq(qq, Eq) {
            return (gq, Yq, lq) => {
              let Oq, xq, Aq = 0,
                cq = gq.length - 1;
              if (cq >= 0 && (Oq = gq[cq]) instanceof aq) {
                if (!cq && Oq.type == qq && Oq.length == lq) return Oq;
                (xq = Oq.prop(mq.lookAhead)) && (Aq = Yq[cq] + Oq.length + xq)
              }
              return Pq(qq, gq, Yq, lq, Aq, Eq)
            }
          }

          function oq(qq, Eq, gq, Yq, Oq, mq, xq, Aq, cq) {
            let uq = [],
              Bq = [];
            for (; qq.length > Yq;) uq.push(qq.pop()), Bq.push(Eq.pop() + gq - Oq);
            qq.push(Pq(lq.types[xq], uq, Bq, mq - Oq, Aq - mq, cq)), Eq.push(Oq - gq)
          }

          function Pq(qq, Eq, gq, Yq, lq, Oq, xq) {
            if (Oq) {
              let qq = [mq.contextHash, Oq];
              xq = xq ? [qq].concat(xq) : [qq]
            }
            if (lq > 25) {
              let qq = [mq.lookAhead, lq];
              xq = xq ? [qq].concat(xq) : [qq]
            }
            return new aq(qq, Eq, gq, Yq, xq)
          }

          function Qq(qq, Eq) {
            let gq = cq.fork(),
              Yq = 0,
              lq = 0,
              mq = 0,
              xq = gq.end - Oq,
              uq = {
                size: 0,
                start: 0,
                skip: 0
              };
            qq: for (let Oq = gq.pos - qq; gq.pos > Oq;) {
              let qq = gq.size;
              if (gq.id == Eq && qq >= 0) {
                uq.size = Yq, uq.start = lq, uq.skip = mq, mq += 4, Yq += 4, gq.next();
                continue
              }
              let cq = gq.pos - qq;
              if (qq < 0 || cq < Oq || gq.start < xq) break;
              let Bq = gq.id >= Aq ? 4 : 0,
                Wq = gq.start;
              for (gq.next(); gq.pos > cq;) {
                if (gq.size < 0) {
                  if (-3 != gq.size && -4 != gq.size) break qq;
                  Bq += 4
                } else gq.id >= Aq && (Bq += 4);
                gq.next()
              }
              lq = Wq, Yq += qq, mq += Bq
            }
            return (Eq < 0 || Yq == qq) && (uq.size = Yq, uq.start = lq, uq.skip = mq), uq.size > 4 ? uq : void 0
          }

          function yq(qq, Eq, gq) {
            let {
              id: Yq,
              start: lq,
              end: Oq,
              size: mq
            } = cq;
            if (cq.next(), mq >= 0 && Yq < Aq) {
              let xq = gq;
              if (mq > 4) {
                let Yq = cq.pos - (mq - 4);
                for (; cq.pos > Yq;) gq = yq(qq, Eq, gq)
              }
              Eq[--gq] = xq, Eq[--gq] = Oq - qq, Eq[--gq] = lq - qq, Eq[--gq] = Yq
            } else - 3 == mq ? Bq = Yq : -4 == mq && (Wq = Yq);
            return gq
          }
          let tq = [],
            rq = [];
          for (; cq.pos > 0;) Nq(qq.start || 0, qq.bufferStart || 0, tq, rq, -1, 0);
          let vq = null !== (Eq = qq.length) && void 0 !== Eq ? Eq : tq.length ? rq[0] + tq[0].length : 0;
          return new aq(uq[qq.topID], tq.reverse(), rq.reverse(), vq)
        }(qq)
      }
    }
    aq.empty = new aq(cq.none, [], [], 0);
    class Vq {
      constructor(qq, Eq) {
        this.buffer = qq, this.index = Eq
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
        return new Vq(this.buffer, this.index)
      }
    }
    class dq {
      constructor(qq, Eq, gq) {
        this.buffer = qq, this.length = Eq, this.set = gq
      }
      get type() {
        return cq.none
      }
      toString() {
        let qq = [];
        for (let Eq = 0; Eq < this.buffer.length;) qq.push(this.childString(Eq)), Eq = this.buffer[Eq + 3];
        return qq.join(",")
      }
      childString(qq) {
        let Eq = this.buffer[qq],
          gq = this.buffer[qq + 3],
          Yq = this.set.types[Eq],
          lq = Yq.name;
        if (/\W/.test(lq) && !Yq.isError && (lq = JSON.stringify(lq)), gq == (qq += 4)) return lq;
        let Oq = [];
        for (; qq < gq;) Oq.push(this.childString(qq)), qq = this.buffer[qq + 3];
        return lq + "(" + Oq.join(",") + ")"
      }
      findChild(qq, Eq, gq, Yq, lq) {
        let {
          buffer: Oq
        } = this, mq = -1;
        for (let xq = qq; xq != Eq && !(jq(lq, Yq, Oq[xq + 1], Oq[xq + 2]) && (mq = xq, gq > 0)); xq = Oq[xq + 3]);
        return mq
      }
      slice(qq, Eq, gq) {
        let Yq = this.buffer,
          lq = new Uint16Array(Eq - qq),
          Oq = 0;
        for (let mq = qq, xq = 0; mq < Eq;) {
          lq[xq++] = Yq[mq++], lq[xq++] = Yq[mq++] - gq;
          let Eq = lq[xq++] = Yq[mq++] - gq;
          lq[xq++] = Yq[mq++] - qq, Oq = Math.max(Oq, Eq)
        }
        return new dq(lq, Oq, this.set)
      }
    }

    function jq(qq, Eq, gq, Yq) {
      switch (qq) {
        case -2:
          return gq < Eq;
        case -1:
          return Yq >= Eq && gq < Eq;
        case 0:
          return gq < Eq && Yq > Eq;
        case 1:
          return gq <= Eq && Yq > Eq;
        case 2:
          return Yq > Eq;
        case 4:
          return !0
      }
    }

    function Hq(qq, Eq, gq, Yq) {
      for (var lq; qq.from == qq.to || (gq < 1 ? qq.from >= Eq : qq.from > Eq) || (gq > -1 ? qq.to <= Eq : qq.to < Eq);) {
        let Eq = !Yq && qq instanceof Pq && qq.index < 0 ? null : qq.parent;
        if (!Eq) return qq;
        qq = Eq
      }
      let Oq = Yq ? 0 : Nq.IgnoreOverlays;
      if (Yq)
        for (let mq = qq, xq = mq.parent; xq; mq = xq, xq = mq.parent) mq instanceof Pq && mq.index < 0 && (null === (lq = xq.enter(Eq, gq, Oq)) || void 0 === lq ? void 0 : lq.from) != mq.from && (qq = xq);
      for (;;) {
        let Yq = qq.enter(Eq, gq, Oq);
        if (!Yq) return qq;
        qq = Yq
      }
    }
    class oq {
      cursor() {
        return new nq(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(qq) {
        let Eq = Qq(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Eq.length ? Eq[0] : null
      }
      getChildren(qq) {
        return Qq(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(qq) {
        return Hq(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(qq) {
        return Hq(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(qq) {
        return yq(this.parent, qq)
      }
      enterUnfinishedNodesBefore(qq) {
        let Eq = this.childBefore(qq),
          gq = this;
        for (; Eq;) {
          let qq = Eq.lastChild;
          if (!qq || qq.to != Eq.to) break;
          qq.type.isError && qq.from == qq.to ? (gq = Eq, Eq = qq.prevSibling) : Eq = qq
        }
        return gq
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Pq extends oq {
      constructor(qq, Eq, gq, Yq) {
        super(), this._tree = qq, this.from = Eq, this.index = gq, this._parent = Yq
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
      nextChild(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Oq = this;;) {
          for (let {
              children: mq,
              positions: Aq
            } = Oq._tree, cq = Eq > 0 ? mq.length : -1; qq != cq; qq += Eq) {
            let cq, uq = mq[qq],
              Bq = Aq[qq] + Oq.from;
            if (lq & Nq.EnterBracketed && uq instanceof aq && (cq = xq.get(uq)) && !cq.overlay && cq.bracketed && gq >= Bq && gq <= Bq + uq.length || jq(Yq, gq, Bq, Bq + uq.length))
              if (uq instanceof dq) {
                if (lq & Nq.ExcludeBuffers) continue;
                let mq = uq.findChild(0, uq.buffer.length, Eq, gq - Bq, Yq);
                if (mq > -1) return new rq(new tq(Oq, uq, qq, Bq), null, mq)
              } else if (lq & Nq.IncludeAnonymous || !uq.type.isAnonymous || bq(uq)) {
              let mq;
              if (!(lq & Nq.IgnoreMounts) && (mq = xq.get(uq)) && !mq.overlay) return new Pq(mq.tree, Bq, qq, Oq);
              let Aq = new Pq(uq, Bq, qq, Oq);
              return lq & Nq.IncludeAnonymous || !Aq.type.isAnonymous ? Aq : Aq.nextChild(Eq < 0 ? uq.children.length - 1 : 0, Eq, gq, Yq, lq)
            }
          }
          if (lq & Nq.IncludeAnonymous || !Oq.type.isAnonymous) return null;
          if (qq = Oq.index >= 0 ? Oq.index + Eq : Eq < 0 ? -1 : Oq._parent._tree.children.length, Oq = Oq._parent, !Oq) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(qq) {
        return this.nextChild(0, 1, qq, 2)
      }
      childBefore(qq) {
        return this.nextChild(this._tree.children.length - 1, -1, qq, -2)
      }
      prop(qq) {
        return this._tree.prop(qq)
      }
      enter(qq, Eq) {
        let gq, Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Yq & Nq.IgnoreOverlays) && (gq = xq.get(this._tree)) && gq.overlay) {
          let lq = qq - this.from,
            Oq = Yq & Nq.EnterBracketed && gq.bracketed;
          for (let {
              from: qq,
              to: Yq
            }
            of gq.overlay)
            if ((Eq > 0 || Oq ? qq <= lq : qq < lq) && (Eq < 0 || Oq ? Yq >= lq : Yq > lq)) return new Pq(gq.tree, gq.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, qq, Eq, Yq)
      }
      nextSignificantParent() {
        let qq = this;
        for (; qq.type.isAnonymous && qq._parent;) qq = qq._parent;
        return qq
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

    function Qq(qq, Eq, gq, Yq) {
      let lq = qq.cursor(),
        Oq = [];
      if (!lq.firstChild()) return Oq;
      if (null != gq)
        for (let mq = !1; !mq;)
          if (mq = lq.type.is(gq), !lq.nextSibling()) return Oq;
      for (;;) {
        if (null != Yq && lq.type.is(Yq)) return Oq;
        if (lq.type.is(Eq) && Oq.push(lq.node), !lq.nextSibling()) return null == Yq ? Oq : []
      }
    }

    function yq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq.length - 1;
      for (let Yq = qq; gq >= 0; Yq = Yq.parent) {
        if (!Yq) return !1;
        if (!Yq.type.isAnonymous) {
          if (Eq[gq] && Eq[gq] != Yq.name) return !1;
          gq--
        }
      }
      return !0
    }
    class tq {
      constructor(qq, Eq, gq, Yq) {
        this.parent = qq, this.buffer = Eq, this.index = gq, this.start = Yq
      }
    }
    class rq extends oq {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(qq, Eq, gq) {
        super(), this.context = qq, this._parent = Eq, this.index = gq, this.type = qq.buffer.set.types[qq.buffer.buffer[gq]]
      }
      child(qq, Eq, gq) {
        let {
          buffer: Yq
        } = this.context, lq = Yq.findChild(this.index + 4, Yq.buffer[this.index + 3], qq, Eq - this.context.start, gq);
        return lq < 0 ? null : new rq(this.context, this, lq)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(qq) {
        return this.child(1, qq, 2)
      }
      childBefore(qq) {
        return this.child(-1, qq, -2)
      }
      prop(qq) {
        return this.type.prop(qq)
      }
      enter(qq, Eq) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Nq.ExcludeBuffers) return null;
        let {
          buffer: gq
        } = this.context, Yq = gq.findChild(this.index + 4, gq.buffer[this.index + 3], Eq > 0 ? 1 : -1, qq - this.context.start, Eq);
        return Yq < 0 ? null : new rq(this.context, this, Yq)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(qq) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + qq, qq, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: qq
        } = this.context, Eq = qq.buffer[this.index + 3];
        return Eq < (this._parent ? qq.buffer[this._parent.index + 3] : qq.buffer.length) ? new rq(this.context, this._parent, Eq) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: qq
        } = this.context, Eq = this._parent ? this._parent.index + 4 : 0;
        return this.index == Eq ? this.externalSibling(-1) : new rq(this.context, this._parent, qq.findChild(Eq, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let qq = [],
          Eq = [],
          {
            buffer: gq
          } = this.context,
          Yq = this.index + 4,
          lq = gq.buffer[this.index + 3];
        if (lq > Yq) {
          let Oq = gq.buffer[this.index + 1];
          qq.push(gq.slice(Yq, lq, Oq)), Eq.push(0)
        }
        return new aq(this.type, qq, Eq, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function vq(qq) {
      if (!qq.length) return null;
      let Eq = 0,
        gq = qq[0];
      for (let Oq = 1; Oq < qq.length; Oq++) {
        let Yq = qq[Oq];
        (Yq.from > gq.from || Yq.to < gq.to) && (gq = Yq, Eq = Oq)
      }
      let Yq = gq instanceof Pq && gq.index < 0 ? null : gq.parent,
        lq = qq.slice();
      return Yq ? lq[Eq] = Yq : lq.splice(Eq, 1), new hq(lq, gq)
    }
    class hq {
      constructor(qq, Eq) {
        this.heads = qq, this.node = Eq
      }
      get next() {
        return vq(this.heads)
      }
    }
    class nq {
      get name() {
        return this.type.name
      }
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Eq & ~Nq.EnterBracketed, qq instanceof Pq) this.yieldNode(qq);
        else {
          this._tree = qq.context.parent, this.buffer = qq.context;
          for (let Eq = qq._parent; Eq; Eq = Eq._parent) this.stack.unshift(Eq.index);
          this.bufferNode = qq, this.yieldBuf(qq.index)
        }
      }
      yieldNode(qq) {
        return !!qq && (this._tree = qq, this.type = qq.type, this.from = qq.from, this.to = qq.to, !0)
      }
      yieldBuf(qq, Eq) {
        this.index = qq;
        let {
          start: gq,
          buffer: Yq
        } = this.buffer;
        return this.type = Eq || Yq.set.types[Yq.buffer[qq]], this.from = gq + Yq.buffer[qq + 1], this.to = gq + Yq.buffer[qq + 2], !0
      }
      yield(qq) {
        return !!qq && (qq instanceof Pq ? (this.buffer = null, this.yieldNode(qq)) : (this.buffer = qq.context, this.yieldBuf(qq.index, qq.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(qq, Eq, gq) {
        if (!this.buffer) return this.yield(this._tree.nextChild(qq < 0 ? this._tree._tree.children.length - 1 : 0, qq, Eq, gq, this.mode));
        let {
          buffer: Yq
        } = this.buffer, lq = Yq.findChild(this.index + 4, Yq.buffer[this.index + 3], qq, Eq - this.buffer.start, gq);
        return !(lq < 0) && (this.stack.push(this.index), this.yieldBuf(lq))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(qq) {
        return this.enterChild(1, qq, 2)
      }
      childBefore(qq) {
        return this.enterChild(-1, qq, -2)
      }
      enter(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(gq & Nq.ExcludeBuffers) && this.enterChild(1, qq, Eq) : this.yield(this._tree.enter(qq, Eq, gq))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Nq.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let qq = this.mode & Nq.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(qq)
      }
      sibling(qq) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + qq, qq, 0, 4, this.mode));
        let {
          buffer: Eq
        } = this.buffer, gq = this.stack.length - 1;
        if (qq < 0) {
          let qq = gq < 0 ? 0 : this.stack[gq] + 4;
          if (this.index != qq) return this.yieldBuf(Eq.findChild(qq, this.index, -1, 0, 4))
        } else {
          let qq = Eq.buffer[this.index + 3];
          if (qq < (gq < 0 ? Eq.buffer.length : Eq.buffer[this.stack[gq] + 3])) return this.yieldBuf(qq)
        }
        return gq < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + qq, qq, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(qq) {
        let Eq, gq, {
          buffer: Yq
        } = this;
        if (Yq) {
          if (qq > 0) {
            if (this.index < Yq.buffer.buffer.length) return !1
          } else
            for (let qq = 0; qq < this.index; qq++)
              if (Yq.buffer.buffer[qq + 3] < this.index) return !1;
          ({
            index: Eq,
            parent: gq
          } = Yq)
        } else({
          index: Eq,
          _parent: gq
        } = this._tree);
        for (; gq;
          ({
            index: Eq,
            _parent: gq
          } = gq))
          if (Eq > -1)
            for (let Yq = Eq + qq, lq = qq < 0 ? -1 : gq._tree.children.length; Yq != lq; Yq += qq) {
              let qq = gq._tree.children[Yq];
              if (this.mode & Nq.IncludeAnonymous || qq instanceof dq || !qq.type.isAnonymous || bq(qq)) return !1
            }
        return !0
      }
      move(qq, Eq) {
        if (Eq && this.enterChild(qq, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(qq)) return !0;
          if (this.atLastNode(qq) || !this.parent()) return !1
        }
      }
      next() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, qq)
      }
      prev() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, qq)
      }
      moveTo(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Eq < 1 ? this.from >= qq : this.from > qq) || (Eq > -1 ? this.to <= qq : this.to < qq)) && this.parent(););
        for (; this.enterChild(1, qq, Eq););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let qq = this.bufferNode,
          Eq = null,
          gq = 0;
        if (qq && qq.context == this.buffer) qq: for (let Yq = this.index, lq = this.stack.length; lq >= 0;) {
          for (let Oq = qq; Oq; Oq = Oq._parent)
            if (Oq.index == Yq) {
              if (Yq == this.index) return Oq;
              Eq = Oq, gq = lq + 1;
              break qq
            } Yq = this.stack[--lq]
        }
        for (let Yq = gq; Yq < this.stack.length; Yq++) Eq = new rq(this.buffer, Eq, this.stack[Yq]);
        return this.bufferNode = new rq(this.buffer, Eq, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(qq, Eq) {
        for (let gq = 0;;) {
          let Yq = !1;
          if (this.type.isAnonymous || !1 !== qq(this)) {
            if (this.firstChild()) {
              gq++;
              continue
            }
            this.type.isAnonymous || (Yq = !0)
          }
          for (;;) {
            if (Yq && Eq && Eq(this), Yq = this.type.isAnonymous, !gq) return;
            if (this.nextSibling()) break;
            this.parent(), gq--, Yq = !0
          }
        }
      }
      matchContext(qq) {
        if (!this.buffer) return yq(this.node.parent, qq);
        let {
          buffer: Eq
        } = this.buffer, {
          types: gq
        } = Eq.set;
        for (let Yq = qq.length - 1, lq = this.stack.length - 1; Yq >= 0; lq--) {
          if (lq < 0) return yq(this._tree, qq, Yq);
          let Oq = gq[Eq.buffer[this.stack[lq]]];
          if (!Oq.isAnonymous) {
            if (qq[Yq] && qq[Yq] != Oq.name) return !1;
            Yq--
          }
        }
        return !0
      }
    }

    function bq(qq) {
      return qq.children.some((qq => qq instanceof dq || !qq.type.isAnonymous || bq(qq)))
    }
    const iq = new WeakMap;

    function Zq(qq, Eq) {
      if (!qq.isAnonymous || Eq instanceof dq || Eq.type != qq) return 1;
      let gq = iq.get(Eq);
      if (null == gq) {
        gq = 1;
        for (let Yq of Eq.children) {
          if (Yq.type != qq || !(Yq instanceof aq)) {
            gq = 1;
            break
          }
          gq += Zq(qq, Yq)
        }
        iq.set(Eq, gq)
      }
      return gq
    }

    function fq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
      let cq = 0;
      for (let Nq = Yq; Nq < lq; Nq++) cq += Zq(qq, Eq[Nq]);
      let uq = Math.ceil(1.5 * cq / 8),
        Bq = [],
        Wq = [];
      return function Eq(gq, Yq, lq, mq, xq) {
        for (let cq = lq; cq < mq;) {
          let lq = cq,
            Nq = Yq[cq],
            aq = Zq(qq, gq[cq]);
          for (cq++; cq < mq; cq++) {
            let Eq = Zq(qq, gq[cq]);
            if (aq + Eq >= uq) break;
            aq += Eq
          }
          if (cq == lq + 1) {
            if (aq > uq) {
              let qq = gq[lq];
              Eq(qq.children, qq.positions, 0, qq.children.length, Yq[lq] + xq);
              continue
            }
            Bq.push(gq[lq])
          } else {
            let Eq = Yq[cq - 1] + gq[cq - 1].length - Nq;
            Bq.push(fq(qq, gq, Yq, lq, cq, Nq, Eq, null, Aq))
          }
          Wq.push(Nq + xq - Oq)
        }
      }(Eq, gq, Yq, lq, 0), (xq || Aq)(Bq, Wq, mq)
    }
    class Mq {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(qq, Eq, gq) {
        let Yq = this.map.get(qq);
        Yq || this.map.set(qq, Yq = new Map), Yq.set(Eq, gq)
      }
      getBuffer(qq, Eq) {
        let gq = this.map.get(qq);
        return gq && gq.get(Eq)
      }
      set(qq, Eq) {
        qq instanceof rq ? this.setBuffer(qq.context.buffer, qq.index, Eq) : qq instanceof Pq && this.map.set(qq.tree, Eq)
      }
      get(qq) {
        return qq instanceof rq ? this.getBuffer(qq.context.buffer, qq.index) : qq instanceof Pq ? this.map.get(qq.tree) : void 0
      }
      cursorSet(qq, Eq) {
        qq.buffer ? this.setBuffer(qq.buffer.buffer, qq.index, Eq) : this.map.set(qq.tree, Eq)
      }
      cursorGet(qq) {
        return qq.buffer ? this.getBuffer(qq.buffer.buffer, qq.index) : this.map.get(qq.tree)
      }
    }
    class Tq {
      constructor(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = qq, this.to = Eq, this.tree = gq, this.offset = Yq, this.open = (lq ? 1 : 0) | (Oq ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = [new Tq(0, qq.length, qq, 0, !1, gq)];
        for (let lq of Eq) lq.to > qq.length && Yq.push(lq);
        return Yq
      }
      static applyChanges(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Eq.length) return qq;
        let Yq = [],
          lq = 1,
          Oq = qq.length ? qq[0] : null;
        for (let mq = 0, xq = 0, Aq = 0;; mq++) {
          let cq = mq < Eq.length ? Eq[mq] : null,
            uq = cq ? cq.fromA : 1e9;
          if (uq - xq >= gq)
            for (; Oq && Oq.from < uq;) {
              let Eq = Oq;
              if (xq >= Eq.from || uq <= Eq.to || Aq) {
                let qq = Math.max(Eq.from, xq) - Aq,
                  gq = Math.min(Eq.to, uq) - Aq;
                Eq = qq >= gq ? null : new Tq(qq, gq, Eq.tree, Eq.offset + Aq, mq > 0, !!cq)
              }
              if (Eq && Yq.push(Eq), Oq.to > uq) break;
              Oq = lq < qq.length ? qq[lq++] : null
            }
          if (!cq) break;
          xq = cq.toA, Aq = cq.toA - cq.toB
        }
        return Yq
      }
    }
    class zq {
      startParse(qq, Eq, gq) {
        return "string" == typeof qq && (qq = new Sq(qq)), gq = gq ? gq.length ? gq.map((qq => new Oq(qq.from, qq.to))) : [new Oq(0, 0)] : [new Oq(0, qq.length)], this.createParse(qq, Eq || [], gq)
      }
      parse(qq, Eq, gq) {
        let Yq = this.startParse(qq, Eq, gq);
        for (;;) {
          let qq = Yq.advance();
          if (qq) return qq
        }
      }
    }
    class Sq {
      constructor(qq) {
        this.string = qq
      }
      get length() {
        return this.string.length
      }
      chunk(qq) {
        return this.string.slice(qq)
      }
      get lineChunks() {
        return !1
      }
      read(qq, Eq) {
        return this.string.slice(qq, Eq)
      }
    }
    new mq({
      perNode: !0
    })
  },
  41075: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Wq,
      e: () => Aq,
      g: () => Bq,
      i: () => iq
    });
    var Yq = gq(41073);
    let lq = 0;
    class Oq {
      constructor(qq, Eq, gq, Yq) {
        this.name = qq, this.set = Eq, this.base = gq, this.modified = Yq, this.id = lq++
      }
      toString() {
        let {
          name: qq
        } = this;
        for (let Eq of this.modified) Eq.name && (qq = `${Eq.name}(${qq})`);
        return qq
      }
      static define(qq, Eq) {
        let gq = "string" == typeof qq ? qq : "?";
        if (qq instanceof Oq && (Eq = qq), null === Eq || void 0 === Eq ? void 0 : Eq.base) throw new Error("Can not derive from a modified tag");
        let Yq = new Oq(gq, [], null, []);
        if (Yq.set.push(Yq), Eq)
          for (let lq of Eq.set) Yq.set.push(lq);
        return Yq
      }
      static defineModifier(qq) {
        let Eq = new xq(qq);
        return qq => qq.modified.indexOf(Eq) > -1 ? qq : xq.get(qq.base || qq, qq.modified.concat(Eq).sort(((qq, Eq) => qq.id - Eq.id)))
      }
    }
    let mq = 0;
    class xq {
      constructor(qq) {
        this.name = qq, this.instances = [], this.id = mq++
      }
      static get(qq, Eq) {
        if (!Eq.length) return qq;
        let gq = Eq[0].instances.find((gq => {
          return gq.base == qq && (Yq = Eq, lq = gq.modified, Yq.length == lq.length && Yq.every(((qq, Eq) => qq == lq[Eq])));
          var Yq, lq
        }));
        if (gq) return gq;
        let Yq = [],
          lq = new Oq(qq.name, Yq, qq, Eq);
        for (let Oq of Eq) Oq.instances.push(lq);
        let mq = function(qq) {
          let Eq = [
            []
          ];
          for (let gq = 0; gq < qq.length; gq++)
            for (let Yq = 0, lq = Eq.length; Yq < lq; Yq++) Eq.push(Eq[Yq].concat(qq[gq]));
          return Eq.sort(((qq, Eq) => Eq.length - qq.length))
        }(Eq);
        for (let Oq of qq.set)
          if (!Oq.modified.length)
            for (let qq of mq) Yq.push(xq.get(Oq, qq));
        return lq
      }
    }

    function Aq(qq) {
      let Eq = Object.create(null);
      for (let gq in qq) {
        let Yq = qq[gq];
        Array.isArray(Yq) || (Yq = [Yq]);
        for (let qq of gq.split(" "))
          if (qq) {
            let gq = [],
              lq = 2,
              Oq = qq;
            for (let Eq = 0;;) {
              if ("..." == Oq && Eq > 0 && Eq + 3 == qq.length) {
                lq = 1;
                break
              }
              let Yq = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Oq);
              if (!Yq) throw new RangeError("Invalid path: " + qq);
              if (gq.push("*" == Yq[0] ? "" : '"' == Yq[0][0] ? JSON.parse(Yq[0]) : Yq[0]), Eq += Yq[0].length, Eq == qq.length) break;
              let mq = qq[Eq++];
              if (Eq == qq.length && "!" == mq) {
                lq = 0;
                break
              }
              if ("/" != mq) throw new RangeError("Invalid path: " + qq);
              Oq = qq.slice(Eq)
            }
            let mq = gq.length - 1,
              xq = gq[mq];
            if (!xq) throw new RangeError("Invalid path: " + qq);
            let Aq = new uq(Yq, lq, mq > 0 ? gq.slice(0, mq) : null);
            Eq[xq] = Aq.sort(Eq[xq])
          }
      }
      return cq.add(Eq)
    }
    const cq = new Yq.h({
      combine(qq, Eq) {
        let gq, Yq, lq;
        for (; qq || Eq;) {
          if (!qq || Eq && qq.depth >= Eq.depth ? (lq = Eq, Eq = Eq.next) : (lq = qq, qq = qq.next), gq && gq.mode == lq.mode && !lq.context && !gq.context) continue;
          let Oq = new uq(lq.tags, lq.mode, lq.context);
          gq ? gq.next = Oq : Yq = Oq, gq = Oq
        }
        return Yq
      }
    });
    class uq {
      constructor(qq, Eq, gq, Yq) {
        this.tags = qq, this.mode = Eq, this.context = gq, this.next = Yq
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(qq) {
        return !qq || qq.depth < this.depth ? (this.next = qq, this) : (qq.next = this.sort(qq.next), qq)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Bq(qq, Eq) {
      let gq = Object.create(null);
      for (let Oq of qq)
        if (Array.isArray(Oq.tag))
          for (let qq of Oq.tag) gq[qq.id] = Oq.class;
        else gq[Oq.tag.id] = Oq.class;
      let {
        scope: Yq,
        all: lq = null
      } = Eq || {};
      return {
        style: qq => {
          let Eq = lq;
          for (let Yq of qq)
            for (let qq of Yq.set) {
              let Yq = gq[qq.id];
              if (Yq) {
                Eq = Eq ? Eq + " " + Yq : Yq;
                break
              }
            }
          return Eq
        },
        scope: Yq
      }
    }

    function Wq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qq.length,
        Oq = new Nq(Yq, Array.isArray(Eq) ? Eq : [Eq], gq);
      Oq.highlightRange(qq.cursor(), Yq, lq, "", Oq.highlighters), Oq.flush(lq)
    }
    uq.empty = new uq([], 2, null);
    class Nq {
      constructor(qq, Eq, gq) {
        this.at = qq, this.highlighters = Eq, this.span = gq, this.class = ""
      }
      startSpan(qq, Eq) {
        Eq != this.class && (this.flush(qq), qq > this.at && (this.at = qq), this.class = Eq)
      }
      flush(qq) {
        qq > this.at && this.class && this.span(this.at, qq, this.class)
      }
      highlightRange(qq, Eq, gq, lq, Oq) {
        let {
          type: mq,
          from: xq,
          to: Aq
        } = qq;
        if (xq >= gq || Aq <= Eq) return;
        mq.isTop && (Oq = this.highlighters.filter((qq => !qq.scope || qq.scope(mq))));
        let Bq = lq,
          Wq = function(qq) {
            let Eq = qq.type.prop(cq);
            for (; Eq && Eq.context && !qq.matchContext(Eq.context);) Eq = Eq.next;
            return Eq || null
          }(qq) || uq.empty,
          Nq = function(qq, Eq) {
            let gq = null;
            for (let Yq of qq) {
              let qq = Yq.style(Eq);
              qq && (gq = gq ? gq + " " + qq : qq)
            }
            return gq
          }(Oq, Wq.tags);
        if (Nq && (Bq && (Bq += " "), Bq += Nq, 1 == Wq.mode && (lq += (lq ? " " : "") + Nq)), this.startSpan(Math.max(Eq, xq), Bq), Wq.opaque) return;
        let aq = qq.tree && qq.tree.prop(Yq.h.mounted);
        if (aq && aq.overlay) {
          let Yq = qq.node.enter(aq.overlay[0].from + xq, 1),
            mq = this.highlighters.filter((qq => !qq.scope || qq.scope(aq.tree.type))),
            cq = qq.firstChild();
          for (let uq = 0, Wq = xq;; uq++) {
            let Nq = uq < aq.overlay.length ? aq.overlay[uq] : null,
              Vq = Nq ? Nq.from + xq : Aq,
              dq = Math.max(Eq, Wq),
              jq = Math.min(gq, Vq);
            if (dq < jq && cq)
              for (; qq.from < jq && (this.highlightRange(qq, dq, jq, lq, Oq), this.startSpan(Math.min(jq, qq.to), Bq), !(qq.to >= Vq) && qq.nextSibling()););
            if (!Nq || Vq > gq) break;
            Wq = Nq.to + xq, Wq > Eq && (this.highlightRange(Yq.cursor(), Math.max(Eq, Nq.from + xq), Math.min(gq, Wq), "", mq), this.startSpan(Math.min(gq, Wq), Bq))
          }
          cq && qq.parent()
        } else if (qq.firstChild()) {
          aq && (lq = "");
          do {
            if (!(qq.to <= Eq)) {
              if (qq.from >= gq) break;
              this.highlightRange(qq, Eq, gq, lq, Oq), this.startSpan(Math.min(gq, qq.to), Bq)
            }
          } while (qq.nextSibling());
          qq.parent()
        }
      }
    }
    const aq = Oq.define,
      Vq = aq(),
      dq = aq(),
      jq = aq(dq),
      Hq = aq(dq),
      oq = aq(),
      Pq = aq(oq),
      Qq = aq(oq),
      yq = aq(),
      tq = aq(yq),
      rq = aq(),
      vq = aq(),
      hq = aq(),
      nq = aq(hq),
      bq = aq(),
      iq = {
        comment: Vq,
        lineComment: aq(Vq),
        blockComment: aq(Vq),
        docComment: aq(Vq),
        name: dq,
        variableName: aq(dq),
        typeName: jq,
        tagName: aq(jq),
        propertyName: Hq,
        attributeName: aq(Hq),
        className: aq(dq),
        labelName: aq(dq),
        namespace: aq(dq),
        macroName: aq(dq),
        literal: oq,
        string: Pq,
        docString: aq(Pq),
        character: aq(Pq),
        attributeValue: aq(Pq),
        number: Qq,
        integer: aq(Qq),
        float: aq(Qq),
        bool: aq(oq),
        regexp: aq(oq),
        escape: aq(oq),
        color: aq(oq),
        url: aq(oq),
        keyword: rq,
        self: aq(rq),
        null: aq(rq),
        atom: aq(rq),
        unit: aq(rq),
        modifier: aq(rq),
        operatorKeyword: aq(rq),
        controlKeyword: aq(rq),
        definitionKeyword: aq(rq),
        moduleKeyword: aq(rq),
        operator: vq,
        derefOperator: aq(vq),
        arithmeticOperator: aq(vq),
        logicOperator: aq(vq),
        bitwiseOperator: aq(vq),
        compareOperator: aq(vq),
        updateOperator: aq(vq),
        definitionOperator: aq(vq),
        typeOperator: aq(vq),
        controlOperator: aq(vq),
        punctuation: hq,
        separator: aq(hq),
        bracket: nq,
        angleBracket: aq(nq),
        squareBracket: aq(nq),
        paren: aq(nq),
        brace: aq(nq),
        content: yq,
        heading: tq,
        heading1: aq(tq),
        heading2: aq(tq),
        heading3: aq(tq),
        heading4: aq(tq),
        heading5: aq(tq),
        heading6: aq(tq),
        contentSeparator: aq(yq),
        list: aq(yq),
        quote: aq(yq),
        emphasis: aq(yq),
        strong: aq(yq),
        link: aq(yq),
        monospace: aq(yq),
        strikethrough: aq(yq),
        inserted: aq(),
        deleted: aq(),
        changed: aq(),
        invalid: aq(),
        meta: bq,
        documentMeta: aq(bq),
        annotation: aq(bq),
        processingInstruction: aq(bq),
        definition: Oq.defineModifier("definition"),
        constant: Oq.defineModifier("constant"),
        function: Oq.defineModifier("function"),
        standard: Oq.defineModifier("standard"),
        local: Oq.defineModifier("local"),
        special: Oq.defineModifier("special")
      };
    for (let Zq in iq) {
      let qq = iq[Zq];
      qq instanceof Oq && (qq.name = Zq)
    }
    Bq([{
      tag: iq.link,
      class: "tok-link"
    }, {
      tag: iq.heading,
      class: "tok-heading"
    }, {
      tag: iq.emphasis,
      class: "tok-emphasis"
    }, {
      tag: iq.strong,
      class: "tok-strong"
    }, {
      tag: iq.keyword,
      class: "tok-keyword"
    }, {
      tag: iq.atom,
      class: "tok-atom"
    }, {
      tag: iq.bool,
      class: "tok-bool"
    }, {
      tag: iq.url,
      class: "tok-url"
    }, {
      tag: iq.labelName,
      class: "tok-labelName"
    }, {
      tag: iq.inserted,
      class: "tok-inserted"
    }, {
      tag: iq.deleted,
      class: "tok-deleted"
    }, {
      tag: iq.literal,
      class: "tok-literal"
    }, {
      tag: iq.string,
      class: "tok-string"
    }, {
      tag: iq.number,
      class: "tok-number"
    }, {
      tag: [iq.regexp, iq.escape, iq.special(iq.string)],
      class: "tok-string2"
    }, {
      tag: iq.variableName,
      class: "tok-variableName"
    }, {
      tag: iq.local(iq.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: iq.definition(iq.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: iq.special(iq.variableName),
      class: "tok-variableName2"
    }, {
      tag: iq.definition(iq.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: iq.typeName,
      class: "tok-typeName"
    }, {
      tag: iq.namespace,
      class: "tok-namespace"
    }, {
      tag: iq.className,
      class: "tok-className"
    }, {
      tag: iq.macroName,
      class: "tok-macroName"
    }, {
      tag: iq.propertyName,
      class: "tok-propertyName"
    }, {
      tag: iq.operator,
      class: "tok-operator"
    }, {
      tag: iq.comment,
      class: "tok-comment"
    }, {
      tag: iq.meta,
      class: "tok-meta"
    }, {
      tag: iq.invalid,
      class: "tok-invalid"
    }, {
      tag: iq.punctuation,
      class: "tok-punctuation"
    }])
  },
  41091: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq.g,
      f: () => mq.C,
      j: () => mq.J,
      k: () => mq.L,
      l: () => xq.l,
      o: () => tg,
      p: () => xq.N,
      s: () => xq.fb
    });
    var Yq = gq(1357),
      lq = gq(1350),
      Oq = gq(57),
      mq = gq(41044),
      xq = gq(41053),
      Aq = gq(41070),
      cq = gq(41073);

    function uq(qq, Eq) {
      return gq => {
        let {
          state: Yq,
          dispatch: lq
        } = gq;
        if (Yq.readOnly) return !1;
        let Oq = qq(Eq, Yq);
        return !!Oq && (lq(Yq.update(Oq)), !0)
      }
    }
    const Bq = uq(jq, 0),
      Wq = uq(dq, 0),
      Nq = uq(((qq, Eq) => dq(qq, Eq, function(qq) {
        let Eq = [];
        for (let gq of qq.selection.zV) {
          let Yq = qq.doc.lineAt(gq.from),
            lq = gq.to <= Yq.to ? Yq : qq.doc.lineAt(gq.to);
          lq.from > Yq.from && lq.from == gq.to && (lq = gq.to == Yq.to + 1 ? Yq : qq.doc.lineAt(gq.to - 1));
          let Oq = Eq.length - 1;
          Oq >= 0 && Eq[Oq].to > Yq.from ? Eq[Oq].to = lq.to : Eq.push({
            from: Yq.from + /^\s*/.exec(Yq.text)[0].length,
            to: lq.to
          })
        }
        return Eq
      }(Eq))), 0);

    function aq(qq, Eq) {
      let gq = qq.languageDataAt("commentTokens", Eq, 1);
      return gq.length ? gq[0] : {}
    }
    const Vq = 50;

    function dq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq.selection.zV,
        Yq = gq.map((qq => aq(Eq, qq.from).block));
      if (!Yq.every((qq => qq))) return null;
      let lq = gq.map(((qq, gq) => function(qq, Eq, gq, Yq) {
        let lq, Oq, {
            open: mq,
            close: xq
          } = Eq,
          Aq = qq.sliceDoc(gq - Vq, gq),
          cq = qq.sliceDoc(Yq, Yq + Vq),
          uq = /\s*$/.exec(Aq)[0].length,
          Bq = /^\s*/.exec(cq)[0].length,
          Wq = Aq.length - uq;
        if (Aq.slice(Wq - mq.length, Wq) == mq && cq.slice(Bq, Bq + xq.length) == xq) return {
          open: {
            pos: gq - uq,
            margin: uq && 1
          },
          close: {
            pos: Yq + Bq,
            margin: Bq && 1
          }
        };
        Yq - gq <= 2 * Vq ? lq = Oq = qq.sliceDoc(gq, Yq) : (lq = qq.sliceDoc(gq, gq + Vq), Oq = qq.sliceDoc(Yq - Vq, Yq));
        let Nq = /^\s*/.exec(lq)[0].length,
          aq = /\s*$/.exec(Oq)[0].length,
          dq = Oq.length - aq - xq.length;
        return lq.slice(Nq, Nq + mq.length) == mq && Oq.slice(dq, dq + xq.length) == xq ? {
          open: {
            pos: gq + Nq + mq.length,
            margin: /\s/.test(lq.charAt(Nq + mq.length)) ? 1 : 0
          },
          close: {
            pos: Yq - aq - xq.length,
            margin: /\s/.test(Oq.charAt(dq - 1)) ? 1 : 0
          }
        } : null
      }(Eq, Yq[gq], qq.from, qq.to)));
      if (2 != qq && !lq.every((qq => qq))) return {
        changes: Eq.changes(gq.map(((qq, Eq) => lq[Eq] ? [] : [{
          from: qq.from,
          insert: Yq[Eq].open + " "
        }, {
          from: qq.to,
          insert: " " + Yq[Eq].close
        }])))
      };
      if (1 != qq && lq.some((qq => qq))) {
        let qq = [];
        for (let Eq, gq = 0; gq < lq.length; gq++)
          if (Eq = lq[gq]) {
            let lq = Yq[gq],
              {
                open: Oq,
                close: mq
              } = Eq;
            qq.push({
              from: Oq.pos - lq.open.length,
              to: Oq.pos + Oq.margin
            }, {
              from: mq.pos - mq.margin,
              to: mq.pos + lq.close.length
            })
          } return {
          changes: qq
        }
      }
      return null
    }

    function jq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq.selection.zV,
        Yq = [],
        lq = -1;
      qq: for (let {
          from: Oq,
          to: mq
        }
        of gq) {
        let qq, gq = Yq.length,
          xq = 1e9;
        for (let Aq = Oq; Aq <= mq;) {
          let gq = Eq.doc.lineAt(Aq);
          if (void 0 == qq && (qq = aq(Eq, gq.from).line, !qq)) continue qq;
          if (gq.from > lq && (Oq == mq || mq > gq.from)) {
            lq = gq.from;
            let Eq = /^\s*/.exec(gq.text)[0].length,
              Oq = Eq == gq.length,
              mq = gq.text.slice(Eq, Eq + qq.length) == qq ? Eq : -1;
            Eq < gq.text.length && Eq < xq && (xq = Eq), Yq.push({
              line: gq,
              comment: mq,
              token: qq,
              indent: Eq,
              empty: Oq,
              single: !1
            })
          }
          Aq = gq.to + 1
        }
        if (xq < 1e9)
          for (let Eq = gq; Eq < Yq.length; Eq++) Yq[Eq].indent < Yq[Eq].line.text.length && (Yq[Eq].indent = xq);
        Yq.length == gq + 1 && (Yq[gq].single = !0)
      }
      if (2 != qq && Yq.some((qq => qq.comment < 0 && (!qq.empty || qq.single)))) {
        let qq = [];
        for (let {
            line: Eq,
            token: lq,
            indent: Oq,
            empty: mq,
            single: xq
          }
          of Yq) !xq && mq || qq.push({
          from: Eq.from + Oq,
          insert: lq + " "
        });
        let gq = Eq.changes(qq);
        return {
          changes: gq,
          selection: Eq.selection.map(gq, 1)
        }
      }
      if (1 != qq && Yq.some((qq => qq.comment >= 0))) {
        let qq = [];
        for (let {
            line: Eq,
            comment: gq,
            token: lq
          }
          of Yq)
          if (gq >= 0) {
            let Yq = Eq.from + gq,
              Oq = Yq + lq.length;
            " " == Eq.text[Oq - Eq.from] && Oq++, qq.push({
              from: Yq,
              to: Oq
            })
          } return {
          changes: qq
        }
      }
      return null
    }
    const Hq = mq.e.define(),
      oq = mq.e.define(),
      Pq = mq.x.define(),
      Qq = mq.x.define({
        combine: qq => (0, mq.Y)(qq, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (qq, Eq) => Eq
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (qq, Eq) => (gq, Yq) => qq(gq, Yq) || Eq(gq, Yq)
        })
      }),
      yq = mq.L.define({
        create: () => Lq.empty,
        update(qq, Eq) {
          let gq = Eq.state.facet(Qq),
            Yq = Eq.annotation(Hq);
          if (Yq) {
            let lq = bq.fromTransaction(Eq, Yq.selection),
              Oq = Yq.side,
              mq = 0 == Oq ? qq.undone : qq.done;
            return mq = lq ? iq(mq, mq.length, gq.minDepth, lq) : Tq(mq, Eq.startState.selection), new Lq(0 == Oq ? Yq.rest : mq, 0 == Oq ? mq : Yq.rest)
          }
          let lq = Eq.annotation(oq);
          if ("full" != lq && "before" != lq || (qq = qq.isolate()), !1 === Eq.annotation(mq.Q.addToHistory)) return Eq.changes.empty ? qq : qq.addMapping(Eq.changes.desc);
          let Oq = bq.fromTransaction(Eq),
            xq = Eq.annotation(mq.Q.time),
            Aq = Eq.annotation(mq.Q.userEvent);
          return Oq ? qq = qq.addChanges(Oq, xq, Aq, gq, Eq) : Eq.selection && (qq = qq.addSelection(Eq.startState.selection, xq, Aq, gq.newGroupDelay)), "full" != lq && "after" != lq || (qq = qq.isolate()), qq
        },
        toJSON: qq => ({
          done: qq.done.map((qq => qq.toJSON())),
          undone: qq.undone.map((qq => qq.toJSON()))
        }),
        fromJSON: qq => new Lq(qq.done.map(bq.fromJSON), qq.undone.map(bq.fromJSON))
      });

    function tq(qq, Eq) {
      return function(gq) {
        let {
          state: Yq,
          dispatch: lq
        } = gq;
        if (!Eq && Yq.readOnly) return !1;
        let Oq = Yq.field(yq, !1);
        if (!Oq) return !1;
        let mq = Oq.pop(qq, Yq, Eq);
        return !!mq && (lq(mq), !0)
      }
    }
    const rq = tq(0, !1),
      vq = tq(1, !1),
      hq = tq(0, !0),
      nq = tq(1, !0);
    class bq {
      constructor(qq, Eq, gq, Yq, lq) {
        this.changes = qq, this.effects = Eq, this.mapped = gq, this.startSelection = Yq, this.selectionsAfter = lq
      }
      setSelAfter(qq) {
        return new bq(this.changes, this.effects, this.mapped, this.startSelection, qq)
      }
      toJSON() {
        var qq, Eq, gq;
        return {
          changes: null === (qq = this.changes) || void 0 === qq ? void 0 : qq.toJSON(),
          mapped: null === (Eq = this.mapped) || void 0 === Eq ? void 0 : Eq.toJSON(),
          startSelection: null === (gq = this.startSelection) || void 0 === gq ? void 0 : gq.toJSON(),
          selectionsAfter: this.selectionsAfter.map((qq => qq.toJSON()))
        }
      }
      static fromJSON(qq) {
        return new bq(qq.changes && mq.ChangeSet.fromJSON(qq.changes), [], qq.mapped && mq.i.fromJSON(qq.mapped), qq.startSelection && mq.q.fromJSON(qq.startSelection), qq.selectionsAfter.map(mq.q.fromJSON))
      }
      static fromTransaction(qq, Eq) {
        let gq = fq;
        for (let Yq of qq.startState.facet(Pq)) {
          let Eq = Yq(qq);
          Eq.length && (gq = gq.concat(Eq))
        }
        return !gq.length && qq.changes.empty ? null : new bq(qq.changes.invert(qq.startState.doc), gq, void 0, Eq || qq.startState.selection, fq)
      }
      static selection(qq) {
        return new bq(void 0, fq, void 0, void 0, qq)
      }
    }

    function iq(qq, Eq, gq, Yq) {
      let lq = Eq + 1 > gq + 20 ? Eq - gq - 1 : 0,
        Oq = qq.slice(lq, Eq);
      return Oq.push(Yq), Oq
    }

    function Zq(qq, Eq) {
      return qq.length ? Eq.length ? qq.concat(Eq) : qq : Eq
    }
    const fq = [],
      Mq = 200;

    function Tq(qq, Eq) {
      if (qq.length) {
        let gq = qq[qq.length - 1],
          Yq = gq.selectionsAfter.slice(Math.max(0, gq.selectionsAfter.length - Mq));
        return Yq.length && Yq[Yq.length - 1].eq(Eq) ? qq : (Yq.push(Eq), iq(qq, qq.length - 1, 1e9, gq.setSelAfter(Yq)))
      }
      return [bq.selection([Eq])]
    }

    function zq(qq) {
      let Eq = qq[qq.length - 1],
        gq = qq.slice();
      return gq[qq.length - 1] = Eq.setSelAfter(Eq.selectionsAfter.slice(0, Eq.selectionsAfter.length - 1)), gq
    }

    function Sq(qq, Eq) {
      if (!qq.length) return qq;
      let gq = qq.length,
        Yq = fq;
      for (; gq;) {
        let lq = pq(qq[gq - 1], Eq, Yq);
        if (lq.changes && !lq.changes.empty || lq.effects.length) {
          let Eq = qq.slice(0, gq);
          return Eq[gq - 1] = lq, Eq
        }
        Eq = lq.mapped, gq--, Yq = lq.selectionsAfter
      }
      return Yq.length ? [bq.selection(Yq)] : fq
    }

    function pq(qq, Eq, gq) {
      let Yq = Zq(qq.selectionsAfter.length ? qq.selectionsAfter.map((qq => qq.map(Eq))) : fq, gq);
      if (!qq.changes) return bq.selection(Yq);
      let lq = qq.changes.map(Eq),
        Oq = Eq.mapDesc(qq.changes, !0),
        xq = qq.mapped ? qq.mapped.composeDesc(Oq) : Oq;
      return new bq(lq, mq.J.mapEffects(qq.effects, Eq), xq, qq.startSelection.map(Oq), Yq)
    }
    const Gq = /^(input\.type|delete)($|\.)/;
    class Lq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = qq, this.undone = Eq, this.prevTime = gq, this.prevUserEvent = Yq
      }
      isolate() {
        return this.prevTime ? new Lq(this.done, this.undone) : this
      }
      addChanges(qq, Eq, gq, Yq, lq) {
        let Oq = this.done,
          xq = Oq[Oq.length - 1];
        return Oq = xq && xq.changes && !xq.changes.empty && qq.changes && (!gq || Gq.test(gq)) && (!xq.selectionsAfter.length && Eq - this.prevTime < Yq.newGroupDelay && Yq.joinToEvent(lq, function(qq, Eq) {
          let gq = [],
            Yq = !1;
          return qq.iterChangedRanges(((qq, Eq) => gq.push(qq, Eq))), Eq.iterChangedRanges(((qq, Eq, lq, Oq) => {
            for (let mq = 0; mq < gq.length;) {
              let qq = gq[mq++],
                Eq = gq[mq++];
              Oq >= qq && lq <= Eq && (Yq = !0)
            }
          })), Yq
        }(xq.changes, qq.changes)) || "input.type.compose" == gq) ? iq(Oq, Oq.length - 1, Yq.minDepth, new bq(qq.changes.compose(xq.changes), Zq(mq.J.mapEffects(qq.effects, xq.changes), xq.effects), xq.mapped, xq.startSelection, fq)) : iq(Oq, Oq.length, Yq.minDepth, qq), new Lq(Oq, fq, Eq, gq)
      }
      addSelection(qq, Eq, gq, Yq) {
        let lq = this.done.length ? this.done[this.done.length - 1].selectionsAfter : fq;
        return lq.length > 0 && Eq - this.prevTime < Yq && gq == this.prevUserEvent && gq && /^select($|\.)/.test(gq) && (Oq = lq[lq.length - 1], mq = qq, Oq.zV.length == mq.zV.length && 0 === Oq.zV.filter(((qq, Eq) => qq.empty != mq.zV[Eq].empty)).length) ? this : new Lq(Tq(this.done, qq), this.undone, Eq, gq);
        var Oq, mq
      }
      addMapping(qq) {
        return new Lq(Sq(this.done, qq), Sq(this.undone, qq), this.prevTime, this.prevUserEvent)
      }
      pop(qq, Eq, gq) {
        let Yq = 0 == qq ? this.done : this.undone;
        if (0 == Yq.length) return null;
        let lq = Yq[Yq.length - 1],
          Oq = lq.selectionsAfter[0] || (lq.startSelection ? lq.startSelection.map(lq.changes.invertedDesc, 1) : Eq.selection);
        if (gq && lq.selectionsAfter.length) return Eq.update({
          selection: lq.selectionsAfter[lq.selectionsAfter.length - 1],
          annotations: Hq.of({
            side: qq,
            rest: zq(Yq),
            selection: Oq
          }),
          userEvent: 0 == qq ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (lq.changes) {
          let gq = 1 == Yq.length ? fq : Yq.slice(0, Yq.length - 1);
          return lq.mapped && (gq = Sq(gq, lq.mapped)), Eq.update({
            changes: lq.changes,
            selection: lq.startSelection,
            effects: lq.effects,
            annotations: Hq.of({
              side: qq,
              rest: gq,
              selection: Oq
            }),
            filter: !1,
            userEvent: 0 == qq ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Lq.empty = new Lq(fq, fq);
    const Jq = [{
      key: "Mod-z",
      run: rq,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: vq,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: vq,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: hq,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: nq,
      preventDefault: !0
    }];

    function kq(qq, Eq) {
      return mq.q.create(qq.zV.map(Eq), qq.mainIndex)
    }

    function Rq(qq, Eq) {
      return qq.update({
        selection: Eq,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Uq(qq, Eq) {
      let {
        state: gq,
        dispatch: Yq
      } = qq, lq = kq(gq.selection, Eq);
      return !lq.eq(gq.selection, !0) && (Yq(Rq(gq, lq)), !0)
    }

    function Fq(qq, Eq) {
      return mq.q.cursor(Eq ? qq.to : qq.from)
    }

    function sq(qq, Eq) {
      return Uq(qq, (gq => gq.empty ? qq.moveByChar(gq, Eq) : Fq(gq, Eq)))
    }

    function Xq(qq) {
      return qq.textDirectionAt(qq.state.selection.main.head) == xq.e.LTR
    }
    const wq = qq => sq(qq, !Xq(qq)),
      Kq = qq => sq(qq, Xq(qq));

    function Cq(qq, Eq) {
      return Uq(qq, (gq => gq.empty ? qq.moveByGroup(gq, Eq) : Fq(gq, Eq)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Iq(qq, Eq, gq) {
      if (Eq.type.prop(gq)) return !0;
      let Yq = Eq.to - Eq.from;
      return Yq && (Yq > 2 || /[^\s,.;:]/.test(qq.sliceDoc(Eq.from, Eq.to))) || Eq.firstChild
    }

    function eq(qq, Eq, gq) {
      let Yq, lq, Oq = (0, Aq.gb)(qq).resolveInner(Eq.head),
        xq = gq ? cq.h.closedBy : cq.h.openedBy;
      for (let mq = Eq.head;;) {
        let Eq = gq ? Oq.childAfter(mq) : Oq.childBefore(mq);
        if (!Eq) break;
        Iq(qq, Eq, xq) ? Oq = Eq : mq = gq ? Eq.to : Eq.from
      }
      return lq = Oq.type.prop(xq) && (Yq = gq ? (0, Aq.X)(qq, Oq.from, 1) : (0, Aq.X)(qq, Oq.to, -1)) && Yq.matched ? gq ? Yq.end.to : Yq.end.from : gq ? Oq.to : Oq.from, mq.q.cursor(lq, gq ? -1 : 1)
    }

    function Dq(qq, Eq) {
      return Uq(qq, (gq => {
        if (!gq.empty) return Fq(gq, Eq);
        let Yq = qq.moveVertically(gq, Eq);
        return Yq.head != gq.head ? Yq : qq.moveToLineBoundary(gq, Eq)
      }))
    }
    const qE = qq => Dq(qq, !1),
      EE = qq => Dq(qq, !0);

    function gE(qq) {
      let Eq, gq = qq.scrollDOM.clientHeight < qq.scrollDOM.scrollHeight - 2,
        Yq = 0,
        lq = 0;
      if (gq) {
        for (let Eq of qq.state.facet(xq.g.scrollMargins)) {
          let gq = Eq(qq);
          (null === gq || void 0 === gq ? void 0 : gq.top) && (Yq = Math.max(null === gq || void 0 === gq ? void 0 : gq.top, Yq)), (null === gq || void 0 === gq ? void 0 : gq.bottom) && (lq = Math.max(null === gq || void 0 === gq ? void 0 : gq.bottom, lq))
        }
        Eq = qq.scrollDOM.clientHeight - Yq - lq
      } else Eq = (qq.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Yq,
        marginBottom: lq,
        selfScroll: gq,
        height: Math.max(qq.defaultLineHeight, Eq - 5)
      }
    }

    function YE(qq, Eq) {
      let gq, Yq = gE(qq),
        {
          state: lq
        } = qq,
        Oq = kq(lq.selection, (gq => gq.empty ? qq.moveVertically(gq, Eq, Yq.height) : Fq(gq, Eq)));
      if (Oq.eq(lq.selection)) return !1;
      if (Yq.selfScroll) {
        let Eq = qq.coordsAtPos(lq.selection.main.head),
          mq = qq.scrollDOM.getBoundingClientRect(),
          Aq = mq.top + Yq.marginTop,
          cq = mq.bottom - Yq.marginBottom;
        Eq && Eq.top > Aq && Eq.bottom < cq && (gq = xq.g.scrollIntoView(Oq.main.head, {
          y: "start",
          yMargin: Eq.top - Aq
        }))
      }
      return qq.dispatch(Rq(lq, Oq), {
        effects: gq
      }), !0
    }
    const lE = qq => YE(qq, !1),
      OE = qq => YE(qq, !0);

    function mE(qq, Eq, gq) {
      let Yq = qq.lineBlockAt(Eq.head),
        lq = qq.moveToLineBoundary(Eq, gq);
      if (lq.head == Eq.head && lq.head != (gq ? Yq.to : Yq.from) && (lq = qq.moveToLineBoundary(Eq, gq, !1)), !gq && lq.head == Yq.from && Yq.length) {
        let gq = /^\s*/.exec(qq.state.sliceDoc(Yq.from, Math.min(Yq.from + 100, Yq.to)))[0].length;
        gq && Eq.head != Yq.from + gq && (lq = mq.q.cursor(Yq.from + gq))
      }
      return lq
    }

    function xE(qq, Eq, gq) {
      let Yq = !1,
        lq = kq(qq.selection, (Eq => {
          let lq = (0, Aq.X)(qq, Eq.head, -1) || (0, Aq.X)(qq, Eq.head, 1) || Eq.head > 0 && (0, Aq.X)(qq, Eq.head - 1, 1) || Eq.head < qq.doc.length && (0, Aq.X)(qq, Eq.head + 1, -1);
          if (!lq || !lq.end) return Eq;
          Yq = !0;
          let Oq = lq.start.from == Eq.head ? lq.end.to : lq.end.from;
          return gq ? mq.q.range(Eq.anchor, Oq) : mq.q.cursor(Oq)
        }));
      return !!Yq && (Eq(Rq(qq, lq)), !0)
    }

    function AE(qq, Eq) {
      let gq = kq(qq.state.selection, (qq => {
        let gq = Eq(qq);
        return mq.q.range(qq.anchor, gq.head, gq.goalColumn, gq.bidiLevel || void 0, gq.assoc)
      }));
      return !gq.eq(qq.state.selection) && (qq.dispatch(Rq(qq.state, gq)), !0)
    }

    function cE(qq, Eq) {
      return AE(qq, (gq => qq.moveByChar(gq, Eq)))
    }
    const uE = qq => cE(qq, !Xq(qq)),
      BE = qq => cE(qq, Xq(qq));

    function WE(qq, Eq) {
      return AE(qq, (gq => qq.moveByGroup(gq, Eq)))
    }

    function NE(qq, Eq) {
      return AE(qq, (gq => qq.moveVertically(gq, Eq)))
    }
    const aE = qq => NE(qq, !1),
      VE = qq => NE(qq, !0);

    function dE(qq, Eq) {
      return AE(qq, (gq => qq.moveVertically(gq, Eq, gE(qq).height)))
    }
    const jE = qq => dE(qq, !1),
      HE = qq => dE(qq, !0),
      oE = qq => {
        let {
          state: Eq,
          dispatch: gq
        } = qq;
        return gq(Rq(Eq, {
          anchor: 0
        })), !0
      },
      PE = qq => {
        let {
          state: Eq,
          dispatch: gq
        } = qq;
        return gq(Rq(Eq, {
          anchor: Eq.doc.length
        })), !0
      },
      QE = qq => {
        let {
          state: Eq,
          dispatch: gq
        } = qq;
        return gq(Rq(Eq, {
          anchor: Eq.selection.main.anchor,
          head: 0
        })), !0
      },
      yE = qq => {
        let {
          state: Eq,
          dispatch: gq
        } = qq;
        return gq(Rq(Eq, {
          anchor: Eq.selection.main.anchor,
          head: Eq.doc.length
        })), !0
      };

    function tE(qq, Eq) {
      let {
        state: gq
      } = qq, Yq = gq.selection, lq = gq.selection.zV.slice();
      for (let Oq of gq.selection.zV) {
        let Yq = gq.doc.lineAt(Oq.head);
        if (Eq ? Yq.to < qq.state.doc.length : Yq.from > 0)
          for (let gq = Oq;;) {
            let Oq = qq.moveVertically(gq, Eq);
            if (Oq.head < Yq.from || Oq.head > Yq.to) {
              lq.some((qq => qq.head == Oq.head)) || lq.push(Oq);
              break
            }
            if (Oq.head == gq.head) break;
            gq = Oq
          }
      }
      return lq.length != Yq.zV.length && (qq.dispatch(Rq(gq, mq.q.create(lq, lq.length - 1))), !0)
    }

    function rE(qq, Eq) {
      if (qq.state.readOnly) return !1;
      let gq = "delete.selection",
        {
          state: Yq
        } = qq,
        lq = Yq.changeByRange((Yq => {
          let {
            from: lq,
            to: Oq
          } = Yq;
          if (lq == Oq) {
            let mq = Eq(Yq);
            mq < lq ? (gq = "delete.backward", mq = vE(qq, mq, !1)) : mq > lq && (gq = "delete.forward", mq = vE(qq, mq, !0)), lq = Math.min(lq, mq), Oq = Math.max(Oq, mq)
          } else lq = vE(qq, lq, !1), Oq = vE(qq, Oq, !0);
          return lq == Oq ? {
            range: Yq
          } : {
            changes: {
              from: lq,
              to: Oq
            },
            range: mq.q.cursor(lq, lq < Yq.head ? -1 : 1)
          }
        }));
      return !lq.changes.empty && (qq.dispatch(Yq.update(lq, {
        scrollIntoView: !0,
        userEvent: gq,
        effects: "delete.selection" == gq ? xq.g.announce.of(Yq.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function vE(qq, Eq, gq) {
      if (qq instanceof xq.g)
        for (let Yq of qq.state.facet(xq.g.atomicRanges).map((Eq => Eq(qq)))) Yq.between(Eq, Eq, ((qq, Yq) => {
          qq < Eq && Yq > Eq && (Eq = gq ? Yq : qq)
        }));
      return Eq
    }
    const hE = (qq, Eq, gq) => rE(qq, (Yq => {
        let lq, Oq, xq = Yq.from,
          {
            state: cq
          } = qq,
          uq = cq.doc.lineAt(xq);
        if (gq && !Eq && xq > uq.from && xq < uq.from + 200 && !/[^ \t]/.test(lq = uq.text.slice(0, xq - uq.from))) {
          if ("\t" == lq[lq.length - 1]) return xq - 1;
          let qq = (0, mq.Z)(lq, cq.tabSize) % (0, Aq.K)(cq) || (0, Aq.K)(cq);
          for (let Eq = 0; Eq < qq && " " == lq[lq.length - 1 - Eq]; Eq++) xq--;
          Oq = xq
        } else Oq = (0, mq.$)(uq.text, xq - uq.from, Eq, Eq) + uq.from, Oq == xq && uq.number != (Eq ? cq.doc.lines : 1) ? Oq += Eq ? 1 : -1 : !Eq && /[\ufe00-\ufe0f]/.test(uq.text.slice(Oq - uq.from, xq - uq.from)) && (Oq = (0, mq.$)(uq.text, Oq - uq.from, !1, !1) + uq.from);
        return Oq
      })),
      nE = qq => hE(qq, !1, !0),
      bE = qq => hE(qq, !0, !1),
      iE = (qq, Eq) => rE(qq, (gq => {
        let Yq = gq.head,
          {
            state: lq
          } = qq,
          Oq = lq.doc.lineAt(Yq),
          xq = lq.charCategorizer(Yq);
        for (let qq = null;;) {
          if (Yq == (Eq ? Oq.to : Oq.from)) {
            Yq == gq.head && Oq.number != (Eq ? lq.doc.lines : 1) && (Yq += Eq ? 1 : -1);
            break
          }
          let Aq = (0, mq.$)(Oq.text, Yq - Oq.from, Eq) + Oq.from,
            cq = Oq.text.slice(Math.min(Yq, Aq) - Oq.from, Math.max(Yq, Aq) - Oq.from),
            uq = xq(cq);
          if (null != qq && uq != qq) break;
          " " == cq && Yq == gq.head || (qq = uq), Yq = Aq
        }
        return Yq
      })),
      ZE = qq => iE(qq, !1);

    function fE(qq) {
      let Eq = [],
        gq = -1;
      for (let Yq of qq.selection.zV) {
        let lq = qq.doc.lineAt(Yq.from),
          Oq = qq.doc.lineAt(Yq.to);
        if (Yq.empty || Yq.to != Oq.from || (Oq = qq.doc.lineAt(Yq.to - 1)), gq >= lq.number) {
          let qq = Eq[Eq.length - 1];
          qq.to = Oq.to, qq.zV.push(Yq)
        } else Eq.push({
          from: lq.from,
          to: Oq.to,
          zV: [Yq]
        });
        gq = Oq.number + 1
      }
      return Eq
    }

    function ME(qq, Eq, gq) {
      if (qq.readOnly) return !1;
      let Yq = [],
        lq = [];
      for (let Oq of fE(qq)) {
        if (gq ? Oq.to == qq.doc.length : 0 == Oq.from) continue;
        let Eq = qq.doc.lineAt(gq ? Oq.to + 1 : Oq.from - 1),
          xq = Eq.length + 1;
        if (gq) {
          Yq.push({
            from: Oq.to,
            to: Eq.to
          }, {
            from: Oq.from,
            insert: Eq.text + qq.lineBreak
          });
          for (let Eq of Oq.zV) lq.push(mq.q.range(Math.min(qq.doc.length, Eq.anchor + xq), Math.min(qq.doc.length, Eq.head + xq)))
        } else {
          Yq.push({
            from: Eq.from,
            to: Oq.from
          }, {
            from: Oq.to,
            insert: qq.lineBreak + Eq.text
          });
          for (let qq of Oq.zV) lq.push(mq.q.range(qq.anchor - xq, qq.head - xq))
        }
      }
      return !!Yq.length && (Eq(qq.update({
        changes: Yq,
        scrollIntoView: !0,
        selection: mq.q.create(lq, qq.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function TE(qq, Eq, gq) {
      if (qq.readOnly) return !1;
      let Yq = [];
      for (let Oq of fE(qq)) gq ? Yq.push({
        from: Oq.from,
        insert: qq.doc.slice(Oq.from, Oq.to) + qq.lineBreak
      }) : Yq.push({
        from: Oq.to,
        insert: qq.lineBreak + qq.doc.slice(Oq.from, Oq.to)
      });
      let lq = qq.changes(Yq);
      return Eq(qq.update({
        changes: lq,
        selection: qq.selection.map(lq, gq ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const zE = SE(!1);

    function SE(qq) {
      return Eq => {
        let {
          state: gq,
          dispatch: Yq
        } = Eq;
        if (gq.readOnly) return !1;
        let lq = gq.changeByRange((Eq => {
          let {
            from: Yq,
            to: lq
          } = Eq, Oq = gq.doc.lineAt(Yq), xq = !qq && Yq == lq && function(qq, Eq) {
            if (/\(\)|\[\]|\{\}/.test(qq.sliceDoc(Eq - 1, Eq + 1))) return {
              from: Eq,
              to: Eq
            };
            let gq, Yq = (0, Aq.gb)(qq).resolveInner(Eq),
              lq = Yq.childBefore(Eq),
              Oq = Yq.childAfter(Eq);
            return lq && Oq && lq.to <= Eq && Oq.from >= Eq && (gq = lq.type.prop(cq.h.closedBy)) && gq.indexOf(Oq.name) > -1 && qq.doc.lineAt(lq.to).from == qq.doc.lineAt(Oq.from).from && !/\S/.test(qq.sliceDoc(lq.to, Oq.from)) ? {
              from: lq.to,
              to: Oq.from
            } : null
          }(gq, Yq);
          qq && (Yq = lq = (lq <= Oq.to ? Oq : gq.doc.lineAt(lq)).to);
          let uq = new Aq.d(gq, {
              simulateBreak: Yq,
              simulateDoubleBreak: !!xq
            }),
            Bq = (0, Aq.M)(uq, Yq);
          for (null == Bq && (Bq = (0, mq.Z)(/^\s*/.exec(gq.doc.lineAt(Yq).text)[0], gq.tabSize)); lq < Oq.to && /\s/.test(Oq.text[lq - Oq.from]);) lq++;
          xq ? ({
            from: Yq,
            to: lq
          } = xq) : Yq > Oq.from && Yq < Oq.from + 100 && !/\S/.test(Oq.text.slice(0, Yq)) && (Yq = Oq.from);
          let Wq = ["", (0, Aq.S)(gq, Bq)];
          return xq && Wq.push((0, Aq.S)(gq, uq.lineIndent(Oq.from, -1))), {
            changes: {
              from: Yq,
              to: lq,
              insert: mq.O.of(Wq)
            },
            range: mq.q.cursor(Yq + 1 + Wq[1].length)
          }
        }));
        return Yq(gq.update(lq, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function pE(qq, Eq) {
      let gq = -1;
      return qq.changeByRange((Yq => {
        let lq = [];
        for (let mq = Yq.from; mq <= Yq.to;) {
          let Oq = qq.doc.lineAt(mq);
          Oq.number > gq && (Yq.empty || Yq.to > Oq.from) && (Eq(Oq, lq, Yq), gq = Oq.number), mq = Oq.to + 1
        }
        let Oq = qq.changes(lq);
        return {
          changes: lq,
          range: mq.q.range(Oq.mapPos(Yq.anchor, 1), Oq.mapPos(Yq.head, 1))
        }
      }))
    }
    const GE = qq => {
        let {
          state: Eq,
          dispatch: gq
        } = qq;
        return !Eq.readOnly && (gq(Eq.update(pE(Eq, ((qq, gq) => {
          gq.push({
            from: qq.from,
            insert: Eq.facet(Aq.V)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      LE = qq => {
        let {
          state: Eq,
          dispatch: gq
        } = qq;
        return !Eq.readOnly && (gq(Eq.update(pE(Eq, ((qq, gq) => {
          let Yq = /^\s*/.exec(qq.text)[0];
          if (!Yq) return;
          let lq = (0, mq.Z)(Yq, Eq.tabSize),
            Oq = 0,
            xq = (0, Aq.S)(Eq, Math.max(0, lq - (0, Aq.K)(Eq)));
          for (; Oq < Yq.length && Oq < xq.length && Yq.charCodeAt(Oq) == xq.charCodeAt(Oq);) Oq++;
          gq.push({
            from: qq.from + Oq,
            to: qq.from + Yq.length,
            insert: xq.slice(Oq)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      JE = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: qq => Uq(qq, (Eq => eq(qq.state, Eq, !Xq(qq)))),
        shift: qq => AE(qq, (Eq => eq(qq.state, Eq, !Xq(qq))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: qq => Uq(qq, (Eq => eq(qq.state, Eq, Xq(qq)))),
        shift: qq => AE(qq, (Eq => eq(qq.state, Eq, Xq(qq))))
      }, {
        key: "Alt-ArrowUp",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          return ME(Eq, gq, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          return TE(Eq, gq, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          return ME(Eq, gq, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          return TE(Eq, gq, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: qq => tE(qq, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: qq => tE(qq, !0)
      }, {
        key: "Escape",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq, Yq = Eq.selection, lq = null;
          return Yq.zV.length > 1 ? lq = mq.q.create([Yq.main]) : Yq.main.empty || (lq = mq.q.create([mq.q.cursor(Yq.main.head)])), !!lq && (gq(Rq(Eq, lq)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: SE(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq, Yq = fE(Eq).map((qq => {
            let {
              from: gq,
              to: Yq
            } = qq;
            return mq.q.range(gq, Math.min(Yq + 1, Eq.doc.length))
          }));
          return gq(Eq.update({
            selection: mq.q.create(Yq),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq, Yq = kq(Eq.selection, (qq => {
            let gq = (0, Aq.gb)(Eq),
              Yq = gq.resolveStack(qq.from, 1);
            if (qq.empty) {
              let Eq = gq.resolveStack(qq.from, -1);
              Eq.node.from >= Yq.node.from && Eq.node.to <= Yq.node.to && (Yq = Eq)
            }
            for (let Eq = Yq; Eq; Eq = Eq.next) {
              let {
                node: gq
              } = Eq;
              if ((gq.from < qq.from && gq.to >= qq.to || gq.to > qq.to && gq.from <= qq.from) && Eq.next) return mq.q.range(gq.to, gq.from)
            }
            return qq
          }));
          return !Yq.eq(Eq.selection) && (gq(Rq(Eq, Yq)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: LE
      }, {
        key: "Mod-]",
        run: GE
      }, {
        key: "Mod-Alt-\\",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          if (Eq.readOnly) return !1;
          let Yq = Object.create(null),
            lq = new Aq.d(Eq, {
              overrideIndentation: qq => {
                let Eq = Yq[qq];
                return null == Eq ? -1 : Eq
              }
            }),
            Oq = pE(Eq, ((qq, gq, Oq) => {
              let mq = (0, Aq.M)(lq, qq.from);
              if (null == mq) return;
              /\S/.test(qq.text) || (mq = 0);
              let xq = /^\s*/.exec(qq.text)[0],
                cq = (0, Aq.S)(Eq, mq);
              (xq != cq || Oq.from < qq.from + xq.length) && (Yq[qq.from] = mq, gq.push({
                from: qq.from,
                to: qq.from + xq.length,
                insert: cq
              }))
            }));
          return Oq.changes.empty || gq(Eq.update(Oq, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: qq => {
          if (qq.state.readOnly) return !1;
          let {
            state: Eq
          } = qq, gq = Eq.changes(fE(Eq).map((qq => {
            let {
              from: gq,
              to: Yq
            } = qq;
            return gq > 0 ? gq-- : Yq < Eq.doc.length && Yq++, {
              from: gq,
              to: Yq
            }
          }))), Yq = kq(Eq.selection, (Eq => {
            let gq;
            if (qq.lineWrapping) {
              let Yq = qq.lineBlockAt(Eq.head),
                lq = qq.coordsAtPos(Eq.head, Eq.assoc || 1);
              lq && (gq = Yq.bottom + qq.documentTop - lq.bottom + qq.defaultLineHeight / 2)
            }
            return qq.moveVertically(Eq, !0, gq)
          })).map(gq);
          return qq.dispatch({
            changes: gq,
            selection: Yq,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          return xE(Eq, gq, !1)
        }
      }, {
        key: "Mod-/",
        run: qq => {
          let {
            state: Eq
          } = qq, gq = Eq.doc.lineAt(Eq.selection.main.from), Yq = aq(qq.state, gq.from);
          return Yq.line ? Bq(qq) : !!Yq.block && Nq(qq)
        }
      }, {
        key: "Alt-A",
        run: Wq
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: qq => (qq.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: wq,
        shift: uE,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: qq => Cq(qq, !Xq(qq)),
        shift: qq => WE(qq, !Xq(qq)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: qq => Uq(qq, (Eq => mE(qq, Eq, !Xq(qq)))),
        shift: qq => AE(qq, (Eq => mE(qq, Eq, !Xq(qq)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Kq,
        shift: BE,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: qq => Cq(qq, Xq(qq)),
        shift: qq => WE(qq, Xq(qq)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: qq => Uq(qq, (Eq => mE(qq, Eq, Xq(qq)))),
        shift: qq => AE(qq, (Eq => mE(qq, Eq, Xq(qq)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: qE,
        shift: aE,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: oE,
        shift: QE
      }, {
        mac: "Ctrl-ArrowUp",
        run: lE,
        shift: jE
      }, {
        key: "ArrowDown",
        run: EE,
        shift: VE,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: PE,
        shift: yE
      }, {
        mac: "Ctrl-ArrowDown",
        run: OE,
        shift: HE
      }, {
        key: "PageUp",
        run: lE,
        shift: jE
      }, {
        key: "PageDown",
        run: OE,
        shift: HE
      }, {
        key: "Home",
        run: qq => Uq(qq, (Eq => mE(qq, Eq, !1))),
        shift: qq => AE(qq, (Eq => mE(qq, Eq, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: oE,
        shift: QE
      }, {
        key: "End",
        run: qq => Uq(qq, (Eq => mE(qq, Eq, !0))),
        shift: qq => AE(qq, (Eq => mE(qq, Eq, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: PE,
        shift: yE
      }, {
        key: "Enter",
        run: zE,
        shift: zE
      }, {
        key: "Mod-a",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          return gq(Eq.update({
            selection: {
              anchor: 0,
              head: Eq.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: nE,
        shift: nE,
        preventDefault: !0
      }, {
        key: "Delete",
        run: bE,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: ZE,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: qq => iE(qq, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: qq => rE(qq, (Eq => {
          let gq = qq.moveToLineBoundary(Eq, !1).head;
          return Eq.head > gq ? gq : Math.max(0, Eq.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: qq => rE(qq, (Eq => {
          let gq = qq.moveToLineBoundary(Eq, !0).head;
          return Eq.head < gq ? gq : Math.min(qq.state.doc.length, Eq.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: wq,
        shift: uE,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Kq,
        shift: BE
      }, {
        key: "Ctrl-p",
        run: qE,
        shift: aE
      }, {
        key: "Ctrl-n",
        run: EE,
        shift: VE
      }, {
        key: "Ctrl-a",
        run: qq => Uq(qq, (Eq => mq.q.cursor(qq.lineBlockAt(Eq.head).from, 1))),
        shift: qq => AE(qq, (Eq => mq.q.cursor(qq.lineBlockAt(Eq.head).from)))
      }, {
        key: "Ctrl-e",
        run: qq => Uq(qq, (Eq => mq.q.cursor(qq.lineBlockAt(Eq.head).to, -1))),
        shift: qq => AE(qq, (Eq => mq.q.cursor(qq.lineBlockAt(Eq.head).to)))
      }, {
        key: "Ctrl-d",
        run: bE
      }, {
        key: "Ctrl-h",
        run: nE
      }, {
        key: "Ctrl-k",
        run: qq => rE(qq, (Eq => {
          let gq = qq.lineBlockAt(Eq.head).to;
          return Eq.head < gq ? gq : Math.min(qq.state.doc.length, Eq.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: ZE
      }, {
        key: "Ctrl-o",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          if (Eq.readOnly) return !1;
          let Yq = Eq.changeByRange((qq => ({
            changes: {
              from: qq.from,
              to: qq.to,
              insert: mq.O.of(["", ""])
            },
            range: mq.q.cursor(qq.from)
          })));
          return gq(Eq.update(Yq, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: qq => {
          let {
            state: Eq,
            dispatch: gq
          } = qq;
          if (Eq.readOnly) return !1;
          let Yq = Eq.changeByRange((qq => {
            if (!qq.empty || 0 == qq.from || qq.from == Eq.doc.length) return {
              range: qq
            };
            let gq = qq.from,
              Yq = Eq.doc.lineAt(gq),
              lq = gq == Yq.from ? gq - 1 : (0, mq.$)(Yq.text, gq - Yq.from, !1) + Yq.from,
              Oq = gq == Yq.to ? gq + 1 : (0, mq.$)(Yq.text, gq - Yq.from, !0) + Yq.from;
            return {
              changes: {
                from: lq,
                to: Oq,
                insert: Eq.doc.slice(gq, Oq).append(Eq.doc.slice(lq, gq))
              },
              range: mq.q.cursor(Oq)
            }
          }));
          return !Yq.changes.empty && (gq(Eq.update(Yq, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: OE
      }].map((qq => ({
        mac: qq.key,
        run: qq.run,
        shift: qq.shift
      }))))),
      kE = {
        key: "Tab",
        run: GE,
        shift: LE
      };
    var RE = gq(41100),
      UE = gq(41037),
      FE = gq(41106),
      sE = function(qq) {
        void 0 === qq && (qq = {});
        var {
          crosshairCursor: Eq = !1
        } = qq, gq = [];
        !1 !== qq.closeBracketsKeymap && (gq = gq.concat(UE.e)), !1 !== qq.defaultKeymap && (gq = gq.concat(JE)), !1 !== qq.searchKeymap && (gq = gq.concat(RE.k)), !1 !== qq.historyKeymap && (gq = gq.concat(Jq)), !1 !== qq.foldKeymap && (gq = gq.concat(Aq.C)), !1 !== qq.completionKeymap && (gq = gq.concat(UE.k)), !1 !== qq.lintKeymap && (gq = gq.concat(FE.b));
        var Yq = [];
        return !1 !== qq.lineNumbers && Yq.push((0, xq.Q)()), !1 !== qq.highlightActiveLineGutter && Yq.push((0, xq.D)()), !1 !== qq.highlightSpecialChars && Yq.push((0, xq.J)()), !1 !== qq.history && Yq.push(function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [yq, Qq.of(qq), xq.g.domEventHandlers({
            beforeinput(qq, Eq) {
              let gq = "historyUndo" == qq.inputType ? rq : "historyRedo" == qq.inputType ? vq : null;
              return !!gq && (qq.preventDefault(), gq(Eq))
            }
          })]
        }()), !1 !== qq.foldGutter && Yq.push((0, Aq.z)()), !1 !== qq.drawSelection && Yq.push((0, xq.o)()), !1 !== qq.dropCursor && Yq.push((0, xq.s)()), !1 !== qq.allowMultipleSelections && Yq.push(mq.u.allowMultipleSelections.of(!0)), !1 !== qq.indentOnInput && Yq.push((0, Aq.Q)()), !1 !== qq.syntaxHighlighting && Yq.push((0, Aq.cb)(Aq.q, {
          fallback: !0
        })), !1 !== qq.bracketMatching && Yq.push((0, Aq.l)()), !1 !== qq.closeBrackets && Yq.push((0, UE.g)()), !1 !== qq.autocompletion && Yq.push((0, UE.d)()), !1 !== qq.rectangularSelection && Yq.push((0, xq.X)()), !1 !== Eq && Yq.push((0, xq.n)()), !1 !== qq.highlightActiveLine && Yq.push((0, xq.G)()), !1 !== qq.highlightSelectionMatches && Yq.push((0, RE.g)()), qq.tabSize && "number" === typeof qq.tabSize && Yq.push(Aq.V.of(" ".repeat(qq.tabSize))), Yq.concat([xq.P.of(gq.flat())]).filter(Boolean)
      },
      XE = gq(41075);
    const wE = "#e5c07b",
      KE = "#e06c75",
      CE = "#56b6c2",
      IE = "#ffffff",
      eE = "#abb2bf",
      DE = "#7d8799",
      qg = "#61afef",
      Eg = "#98c379",
      gg = "#d19a66",
      Yg = "#c678dd",
      lg = "#21252b",
      Og = "#2c313a",
      mg = "#282c34",
      xg = "#353a42",
      Ag = "#3E4451",
      cg = "#528bff",
      ug = xq.g.theme({
        "&": {
          color: eE,
          backgroundColor: mg
        },
        ".cm-content": {
          caretColor: cg
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: cg
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Ag
        },
        ".cm-panels": {
          backgroundColor: lg,
          color: eE
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
          backgroundColor: mg,
          color: DE,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Og
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: xg
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: xg,
          borderBottomColor: xg
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Og,
            color: eE
          }
        }
      }, {
        dark: !0
      }),
      Bg = Aq.c.define([{
        tag: XE.i.keyword,
        color: Yg
      }, {
        tag: [XE.i.name, XE.i.deleted, XE.i.character, XE.i.propertyName, XE.i.macroName],
        color: KE
      }, {
        tag: [XE.i.function(XE.i.variableName), XE.i.labelName],
        color: qg
      }, {
        tag: [XE.i.color, XE.i.constant(XE.i.name), XE.i.standard(XE.i.name)],
        color: gg
      }, {
        tag: [XE.i.definition(XE.i.name), XE.i.separator],
        color: eE
      }, {
        tag: [XE.i.typeName, XE.i.className, XE.i.number, XE.i.changed, XE.i.annotation, XE.i.modifier, XE.i.self, XE.i.namespace],
        color: wE
      }, {
        tag: [XE.i.operator, XE.i.operatorKeyword, XE.i.url, XE.i.escape, XE.i.regexp, XE.i.link, XE.i.special(XE.i.string)],
        color: CE
      }, {
        tag: [XE.i.meta, XE.i.comment],
        color: DE
      }, {
        tag: XE.i.strong,
        fontWeight: "bold"
      }, {
        tag: XE.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: XE.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: XE.i.link,
        color: DE,
        textDecoration: "underline"
      }, {
        tag: XE.i.heading,
        fontWeight: "bold",
        color: KE
      }, {
        tag: [XE.i.atom, XE.i.bool, XE.i.special(XE.i.variableName)],
        color: gg
      }, {
        tag: [XE.i.processingInstruction, XE.i.string, XE.i.inserted],
        color: Eg
      }, {
        tag: XE.i.invalid,
        color: IE
      }]),
      Wg = [ug, (0, Aq.cb)(Bg)];
    var Ng = xq.g.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class ag {
      constructor(qq, Eq) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Eq, this.timeoutMS = Eq, this.callbacks.push(qq)
      }
      SB() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var qq = this.callbacks.slice();
          this.callbacks.length = 0, qq.forEach((qq => {
            try {
              qq()
            } catch (Eq) {
              console.error("TimeoutLatch callback error:", Eq)
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
    class Vg {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(qq) {
        this.latches.add(qq), this.start()
      }
      remove(qq) {
        this.latches.delete(qq), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((qq => {
            qq.SB(), qq.isDone && this.remove(qq)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var dg = null,
      jg = mq.e.define(),
      Hg = [];

    function og(qq) {
      var {
        value: Eq,
        selection: gq,
        onChange: Yq,
        onStatistics: lq,
        onCreateEditor: Aq,
        onUpdate: cq,
        extensions: uq = Hg,
        autoFocus: Bq,
        theme: Wq = "light",
        height: Nq = null,
        minHeight: aq = null,
        maxHeight: Vq = null,
        width: dq = null,
        minWidth: jq = null,
        maxWidth: Hq = null,
        placeholder: oq = "",
        editable: Pq = !0,
        readOnly: Qq = !1,
        indentWithTab: yq = !0,
        basicSetup: tq = !0,
        root: rq,
        initialState: vq
      } = qq, [hq, nq] = (0, Oq.useState)(), [bq, iq] = (0, Oq.useState)(), [Zq, fq] = (0, Oq.useState)(), Mq = (0, Oq.useState)((() => ({
        current: null
      })))[0], Tq = (0, Oq.useState)((() => ({
        current: null
      })))[0], zq = xq.g.theme({
        "&": {
          height: Nq,
          minHeight: aq,
          maxHeight: Vq,
          width: dq,
          minWidth: jq,
          maxWidth: Hq
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Sq = xq.g.updateListener.of((qq => {
        if (qq.docChanged && "function" === typeof Yq && !qq.transactions.some((qq => qq.annotation(jg)))) {
          Mq.current ? Mq.current.reset() : (Mq.current = new ag((() => {
            if (Tq.current) {
              var qq = Tq.current;
              Tq.current = null, qq()
            }
            Mq.current = null
          }), 200), ("undefined" === typeof window ? new Vg : (dg || (dg = new Vg), dg)).add(Mq.current));
          var Eq = qq.state.doc.toString();
          Yq(Eq, qq)
        }
        lq && lq((qq => ({
          line: qq.state.doc.lineAt(qq.state.selection.main.from),
          lineCount: qq.state.doc.lines,
          lineBreak: qq.state.lineBreak,
          length: qq.state.doc.length,
          readOnly: qq.state.readOnly,
          tabSize: qq.state.tabSize,
          selection: qq.state.selection,
          selectionAsSingle: qq.state.selection.asSingle().main,
          zV: qq.state.selection.zV,
          selectionCode: qq.state.sliceDoc(qq.state.selection.main.from, qq.state.selection.main.to),
          selections: qq.state.selection.zV.map((Eq => qq.state.sliceDoc(Eq.from, Eq.to))),
          selectedText: qq.state.selection.zV.some((qq => !qq.empty))
        }))(qq))
      })), pq = function(qq) {
        void 0 === qq && (qq = {});
        var {
          indentWithTab: Eq = !0,
          editable: gq = !0,
          readOnly: Yq = !1,
          theme: lq = "light",
          placeholder: Oq = "",
          basicSetup: Aq = !0
        } = qq, cq = [];
        switch (Eq && cq.unshift(xq.P.of([kE])), Aq && ("boolean" === typeof Aq ? cq.unshift(sE()) : cq.unshift(sE(Aq))), Oq && cq.unshift((0, xq.T)(Oq)), lq) {
          case "light":
            cq.push(Ng);
            break;
          case "dark":
            cq.push(Wg);
            break;
          case "none":
            break;
          default:
            cq.push(lq)
        }
        return !1 === gq && cq.push(xq.g.editable.of(!1)), Yq && cq.push(mq.u.readOnly.of(!0)), [...cq]
      }({
        theme: Wq,
        editable: Pq,
        readOnly: Qq,
        placeholder: oq,
        indentWithTab: yq,
        basicSetup: tq
      }), Gq = [Sq, zq, ...pq];
      return cq && "function" === typeof cq && Gq.push(xq.g.updateListener.of(cq)), Gq = Gq.concat(uq), (0, Oq.useLayoutEffect)((() => {
        if (hq && !Zq) {
          var qq = {
              doc: Eq,
              selection: gq,
              extensions: Gq
            },
            Yq = vq ? mq.u.fromJSON(vq.json, qq, vq.fields) : mq.u.create(qq);
          if (fq(Yq), !bq) {
            var lq = new xq.g({
              state: Yq,
              parent: hq,
              root: rq
            });
            iq(lq), Aq && Aq(lq, Yq)
          }
        }
        return () => {
          bq && (fq(void 0), iq(void 0))
        }
      }), [hq, Zq]), (0, Oq.useEffect)((() => {
        qq.container && nq(qq.container)
      }), [qq.container]), (0, Oq.useEffect)((() => () => {
        bq && (bq.destroy(), iq(void 0)), Mq.current && (Mq.current.cancel(), Mq.current = null)
      }), [bq]), (0, Oq.useEffect)((() => {
        Bq && bq && bq.focus()
      }), [Bq, bq]), (0, Oq.useEffect)((() => {
        bq && bq.dispatch({
          effects: mq.J.reconfigure.of(Gq)
        })
      }), [Wq, uq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, Yq, cq]), (0, Oq.useEffect)((() => {
        if (void 0 !== Eq) {
          var qq = bq ? bq.state.doc.toString() : "";
          if (bq && Eq !== qq) {
            var gq = () => {
              bq && Eq !== bq.state.doc.toString() && bq.dispatch({
                changes: {
                  from: 0,
                  to: bq.state.doc.toString().length,
                  insert: Eq || ""
                },
                annotations: [jg.of(!0)]
              })
            };
            Mq.current && !Mq.current.isDone ? Tq.current = gq : gq()
          }
        }
      }), [Eq, bq]), {
        state: Zq,
        setState: fq,
        view: bq,
        setView: iq,
        container: hq,
        setContainer: nq
      }
    }
    var Pg = gq(1070),
      Qg = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      yg = (0, Oq.forwardRef)(((qq, Eq) => {
        var {
          className: gq,
          value: mq = "",
          selection: xq,
          extensions: Aq = [],
          onChange: cq,
          onStatistics: uq,
          onCreateEditor: Bq,
          onUpdate: Wq,
          autoFocus: Nq,
          theme: aq = "light",
          height: Vq,
          minHeight: dq,
          maxHeight: jq,
          width: Hq,
          minWidth: oq,
          maxWidth: Pq,
          basicSetup: Qq,
          placeholder: yq,
          indentWithTab: tq,
          editable: rq,
          readOnly: vq,
          root: hq,
          initialState: nq
        } = qq, bq = (0, lq.e)(qq, Qg), iq = (0, Oq.useRef)(null), {
          state: Zq,
          view: fq,
          container: Mq,
          setContainer: Tq
        } = og({
          root: hq,
          value: mq,
          autoFocus: Nq,
          theme: aq,
          height: Vq,
          minHeight: dq,
          maxHeight: jq,
          width: Hq,
          minWidth: oq,
          maxWidth: Pq,
          basicSetup: Qq,
          placeholder: yq,
          indentWithTab: tq,
          editable: rq,
          readOnly: vq,
          selection: xq,
          onChange: cq,
          onStatistics: uq,
          onCreateEditor: Bq,
          onUpdate: Wq,
          extensions: Aq,
          initialState: nq
        });
        (0, Oq.useImperativeHandle)(Eq, (() => ({
          editor: iq.current,
          state: Zq,
          view: fq
        })), [iq, Mq, Zq, fq]);
        var zq = (0, Oq.useCallback)((qq => {
          iq.current = qq, Tq(qq)
        }), [Tq]);
        if ("string" !== typeof mq) throw new Error("value must be typeof string but got " + typeof mq);
        var Sq = "string" === typeof aq ? "cm-theme-" + aq : "cm-theme";
        return (0, Pg.jsx)("div", (0, Yq.c)({
          ref: zq,
          className: Sq + (gq ? " " + gq : "")
        }, bq))
      }));
    yg.displayName = "CodeMirror";
    const tg = yg
  },
  41068: (qq, Eq, gq) => {
    function Yq() {
      var qq = arguments[0];
      "string" == typeof qq && (qq = document.createElement(qq));
      var Eq = 1,
        gq = arguments[1];
      if (gq && "object" == typeof gq && null == gq.nodeType && !Array.isArray(gq)) {
        for (var Yq in gq)
          if (Object.prototype.hasOwnProperty.call(gq, Yq)) {
            var Oq = gq[Yq];
            "string" == typeof Oq ? qq.setAttribute(Yq, Oq) : null != Oq && (qq[Yq] = Oq)
          } Eq++
      }
      for (; Eq < arguments.length; Eq++) lq(qq, arguments[Eq]);
      return qq
    }

    function lq(qq, Eq) {
      if ("string" == typeof Eq) qq.appendChild(document.createTextNode(Eq));
      else if (null == Eq);
      else if (null != Eq.nodeType) qq.appendChild(Eq);
      else {
        if (!Array.isArray(Eq)) throw new RangeError("Unsupported child node: " + Eq);
        for (var gq = 0; gq < Eq.length; gq++) lq(qq, Eq[gq])
      }
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  41061: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    const Yq = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      lq = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Oq = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class mq {
      constructor(qq, Eq) {
        this.rules = [];
        let {
          finish: gq
        } = Eq || {};

        function Yq(qq) {
          return /^@/.test(qq) ? [qq] : qq.split(/,\s*/)
        }

        function lq(qq, Eq, Oq, mq) {
          let xq = [],
            Aq = /^@(\w+)\b/.exec(qq[0]),
            cq = Aq && "keyframes" == Aq[1];
          if (Aq && null == Eq) return Oq.push(qq[0] + ";");
          for (let gq in Eq) {
            let mq = Eq[gq];
            if (/&/.test(gq)) lq(gq.split(/,\s*/).map((Eq => qq.map((qq => Eq.replace(/&/, qq))))).reduce(((qq, Eq) => qq.concat(Eq))), mq, Oq);
            else if (mq && "object" == typeof mq) {
              if (!Aq) throw new RangeError("The value of a property (" + gq + ") should be a primitive value.");
              lq(Yq(gq), mq, xq, cq)
            } else null != mq && xq.push(gq.replace(/_.*/, "").replace(/[A-Z]/g, (qq => "-" + qq.toLowerCase())) + ": " + mq + ";")
          }(xq.length || cq) && Oq.push((!gq || Aq || mq ? qq : qq.map(gq)).join(", ") + " {" + xq.join(" ") + "}")
        }
        for (let Oq in qq) lq(Yq(Oq), qq[Oq], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let qq = Oq[Yq] || 1;
        return Oq[Yq] = qq + 1, "\u037c" + qq.toString(36)
      }
      static mount(qq, Eq, gq) {
        let Yq = qq[lq],
          Oq = gq && gq.nonce;
        Yq ? Oq && Yq.setNonce(Oq) : Yq = new Aq(qq, Oq), Yq.mount(Array.isArray(Eq) ? Eq : [Eq], qq)
      }
    }
    let xq = new Map;
    class Aq {
      constructor(qq, Eq) {
        let gq = qq.ownerDocument || qq,
          Yq = gq.defaultView;
        if (!qq.head && qq.adoptedStyleSheets && Yq.CSSStyleSheet) {
          let Eq = xq.get(gq);
          if (Eq) return qq[lq] = Eq;
          this.sheet = new Yq.CSSStyleSheet, xq.set(gq, this)
        } else this.styleTag = gq.createElement("style"), Eq && this.styleTag.setAttribute("nonce", Eq);
        this.modules = [], qq[lq] = this
      }
      mount(qq, Eq) {
        let gq = this.sheet,
          Yq = 0,
          lq = 0;
        for (let Oq = 0; Oq < qq.length; Oq++) {
          let Eq = qq[Oq],
            mq = this.modules.indexOf(Eq);
          if (mq < lq && mq > -1 && (this.modules.splice(mq, 1), lq--, mq = -1), -1 == mq) {
            if (this.modules.splice(lq++, 0, Eq), gq)
              for (let qq = 0; qq < Eq.rules.length; qq++) gq.insertRule(Eq.rules[qq], Yq++)
          } else {
            for (; lq < mq;) Yq += this.modules[lq++].rules.length;
            Yq += Eq.rules.length, lq++
          }
        }
        if (gq) Eq.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Eq.adoptedStyleSheets = [this.sheet, ...Eq.adoptedStyleSheets]);
        else {
          let qq = "";
          for (let Eq = 0; Eq < this.modules.length; Eq++) qq += this.modules[Eq].getRules() + "\n";
          this.styleTag.textContent = qq;
          let gq = Eq.head || Eq;
          this.styleTag.parentNode != gq && gq.insertBefore(this.styleTag, gq.firstChild)
        }
      }
      setNonce(qq) {
        this.styleTag && this.styleTag.getAttribute("nonce") != qq && this.styleTag.setAttribute("nonce", qq)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);