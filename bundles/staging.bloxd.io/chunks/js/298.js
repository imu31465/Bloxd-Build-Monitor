export const id = 298;
export const ids = [298];
export const modules = {
  41541: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ji,
      g: () => Ri,
      h: () => di,
      l: () => Lp,
      o: () => Bi,
      r: () => Yp,
      u: () => yi
    });
    var Op = cp(41548),
      op = cp(41556),
      Ip = cp(41566);
    class Sp {
      constructor(pp, ip, cp, Op) {
        this.state = pp, this.pos = ip, this.explicit = cp, this.view = Op, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(pp) {
        let ip = (0, Ip.kb)(this.state).resolveInner(this.pos, -1);
        for (; ip && pp.indexOf(ip.name) < 0;) ip = ip.parent;
        return ip ? {
          from: ip.from,
          to: this.pos,
          text: this.state.sliceDoc(ip.from, this.pos),
          type: ip.type
        } : null
      }
      matchBefore(pp) {
        let ip = this.state.doc.lineAt(this.pos),
          cp = Math.max(ip.from, this.pos - 250),
          Op = ip.text.slice(cp - ip.from, this.pos - ip.from),
          op = Op.search(Pp(pp, !1));
        return op < 0 ? null : {
          from: cp + op,
          to: this.pos,
          text: Op.slice(op)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(pp, ip, cp) {
        "abort" == pp && this.abortListeners && (this.abortListeners.push(ip), cp && cp.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function xp(pp) {
      let ip = Object.keys(pp).join(""),
        cp = /\w/.test(ip);
      return cp && (ip = ip.replace(/\w/g, "")), `[${cp?"\\w":""}${ip.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Lp(pp) {
      let ip = pp.map((pp => "string" == typeof pp ? {
          label: pp
        } : pp)),
        [cp, Op] = ip.every((pp => /^\w+$/.test(pp.label))) ? [/\w*$/, /\w+$/] : function(pp) {
          let ip = Object.create(null),
            cp = Object.create(null);
          for (let {
              label: op
            }
            of pp) {
            ip[op[0]] = !0;
            for (let pp = 1; pp < op.length; pp++) cp[op[pp]] = !0
          }
          let Op = xp(ip) + xp(cp) + "*$";
          return [new RegExp("^" + Op), new RegExp(Op)]
        }(ip);
      return pp => {
        let op = pp.matchBefore(Op);
        return op || pp.explicit ? {
          from: op ? op.from : pp.pos,
          options: ip,
          validFor: cp
        } : null
      }
    }

    function Yp(pp, ip) {
      return cp => {
        for (let ip = (0, Ip.kb)(cp.state).resolveInner(cp.pos, -1); ip; ip = ip.parent) {
          if (pp.indexOf(ip.name) > -1) return null;
          if (ip.type.isTop) break
        }
        return ip(cp)
      }
    }
    class Dp {
      constructor(pp, ip, cp, Op) {
        this.completion = pp, this.source = ip, this.match = cp, this.score = Op
      }
    }

    function Ap(pp) {
      return pp.selection.main.from
    }

    function Pp(pp, ip) {
      var cp;
      let {
        source: Op
      } = pp, op = ip && "^" != Op[0], Ip = "$" != Op[Op.length - 1];
      return op || Ip ? new RegExp(`${op?"^":""}(?:${Op})${Ip?"$":""}`, null !== (cp = pp.flags) && void 0 !== cp ? cp : pp.ignoreCase ? "i" : "") : pp
    }
    const Wp = Op.c.define();

    function yp(pp, ip, cp, op) {
      let {
        main: Ip
      } = pp.selection, Sp = cp - Ip.from, xp = op - Ip.from;
      return {
        ...pp.changeByRange((Lp => {
          if (Lp != Ip && cp != op && pp.sliceDoc(Lp.from + Sp, Lp.from + xp) != pp.sliceDoc(cp, op)) return {
            range: Lp
          };
          let Yp = pp.toText(ip);
          return {
            changes: {
              from: Lp.from + Sp,
              to: op == Ip.from ? Lp.to : Lp.from + xp,
              insert: Yp
            },
            range: Op.l.cursor(Lp.from + Sp + Yp.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Up = new WeakMap;

    function wp(pp) {
      if (!Array.isArray(pp)) return pp;
      let ip = Up.get(pp);
      return ip || Up.set(pp, ip = Lp(pp)), ip
    }
    const vp = Op.C.define(),
      tp = Op.C.define();
    class Hp {
      constructor(pp) {
        this.pattern = pp, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let ip = 0; ip < pp.length;) {
          let cp = (0, Op.J)(pp, ip),
            op = (0, Op.N)(cp);
          this.chars.push(cp);
          let Ip = pp.slice(ip, ip + op),
            Sp = Ip.toUpperCase();
          this.folded.push((0, Op.J)(Sp == Ip ? Ip.toLowerCase() : Sp, 0)), ip += op
        }
        this.astral = pp.length != this.chars.length
      }
      ret(pp, ip) {
        return this.score = pp, this.matched = ip, this
      }
      match(pp) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (pp.length < this.pattern.length) return null;
        let {
          chars: ip,
          folded: cp,
          any: op,
          precise: Ip,
          byWord: Sp
        } = this;
        if (1 == ip.length) {
          let op = (0, Op.J)(pp, 0),
            Ip = (0, Op.N)(op),
            Sp = Ip == pp.length ? 0 : -100;
          if (op == ip[0]);
          else {
            if (op != cp[0]) return null;
            Sp += -200
          }
          return this.ret(Sp, [0, Ip])
        }
        let xp = pp.indexOf(this.pattern);
        if (0 == xp) return this.ret(pp.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Lp = ip.length,
          Yp = 0;
        if (xp < 0) {
          for (let Ip = 0, Sp = Math.min(pp.length, 200); Ip < Sp && Yp < Lp;) {
            let Sp = (0, Op.J)(pp, Ip);
            Sp != ip[Yp] && Sp != cp[Yp] || (op[Yp++] = Ip), Ip += (0, Op.N)(Sp)
          }
          if (Yp < Lp) return null
        }
        let Dp = 0,
          Ap = 0,
          Pp = !1,
          Wp = 0,
          yp = -1,
          Up = -1,
          wp = /[a-z]/.test(pp),
          vp = !0;
        for (let tp = 0, Hp = Math.min(pp.length, 200), dp = 0; tp < Hp && Ap < Lp;) {
          let op = (0, Op.J)(pp, tp);
          xp < 0 && (Dp < Lp && op == ip[Dp] && (Ip[Dp++] = tp), Wp < Lp && (op == ip[Wp] || op == cp[Wp] ? (0 == Wp && (yp = tp), Up = tp + 1, Wp++) : Wp = 0));
          let Yp, Hp = op < 255 ? op >= 48 && op <= 57 || op >= 97 && op <= 122 ? 2 : op >= 65 && op <= 90 ? 1 : 0 : (Yp = (0, Op.W)(op)) != Yp.toLowerCase() ? 1 : Yp != Yp.toUpperCase() ? 2 : 0;
          (!tp || 1 == Hp && wp || 0 == dp && 0 != Hp) && (ip[Ap] == op || cp[Ap] == op && (Pp = !0) ? Sp[Ap++] = tp : Sp.length && (vp = !1)), dp = Hp, tp += (0, Op.N)(op)
        }
        return Ap == Lp && 0 == Sp[0] && vp ? this.result((Pp ? -200 : 0) - 100, Sp, pp) : Wp == Lp && 0 == yp ? this.ret(-200 - pp.length + (Up == pp.length ? 0 : -100), [0, Up]) : xp > -1 ? this.ret(-700 - pp.length, [xp, xp + this.pattern.length]) : Wp == Lp ? this.ret(-900 - pp.length, [yp, Up]) : Ap == Lp ? this.result((Pp ? -200 : 0) - 100 - 700 + (vp ? 0 : -1100), Sp, pp) : 2 == ip.length ? null : this.result((op[0] ? -700 : 0) - 200 - 1100, op, pp)
      }
      result(pp, ip, cp) {
        let op = [],
          Ip = 0;
        for (let Sp of ip) {
          let pp = Sp + (this.astral ? (0, Op.N)((0, Op.J)(cp, Sp)) : 1);
          Ip && op[Ip - 1] == Sp ? op[Ip - 1] = pp : (op[Ip++] = Sp, op[Ip++] = pp)
        }
        return this.ret(pp - cp.length, op)
      }
    }
    class dp {
      constructor(pp) {
        this.pattern = pp, this.matched = [], this.score = 0, this.folded = pp.toLowerCase()
      }
      match(pp) {
        if (pp.length < this.pattern.length) return null;
        let ip = pp.slice(0, this.pattern.length),
          cp = ip == this.pattern ? 0 : ip.toLowerCase() == this.folded ? -200 : null;
        return null == cp ? null : (this.matched = [0, ip.length], this.score = cp + (pp.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const ep = Op.o.define({
      combine: pp => (0, Op.P)(pp, {
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
        positionInfo: kp,
        filterStrict: !1,
        compareCompletions: (pp, ip) => (pp.sortText || pp.label).localeCompare(ip.sortText || ip.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (pp, ip) => pp && ip,
        closeOnBlur: (pp, ip) => pp && ip,
        icons: (pp, ip) => pp && ip,
        tooltipClass: (pp, ip) => cp => jp(pp(cp), ip(cp)),
        optionClass: (pp, ip) => cp => jp(pp(cp), ip(cp)),
        addToOptions: (pp, ip) => pp.concat(ip),
        filterStrict: (pp, ip) => pp || ip
      })
    });

    function jp(pp, ip) {
      return pp ? ip ? pp + " " + ip : pp : ip
    }

    function kp(pp, ip, cp, Op, Ip, Sp) {
      let xp, Lp, Yp = pp.textDirection == op.e.RTL,
        Dp = Yp,
        Ap = !1,
        Pp = "top",
        Wp = ip.left - Ip.left,
        yp = Ip.right - ip.right,
        Up = Op.right - Op.left,
        wp = Op.bottom - Op.top;
      if (Dp && Wp < Math.min(Up, yp) ? Dp = !1 : !Dp && yp < Math.min(Up, Wp) && (Dp = !0), Up <= (Dp ? Wp : yp)) xp = Math.max(Ip.top, Math.min(cp.top, Ip.bottom - wp)) - ip.top, Lp = Math.min(400, Dp ? Wp : yp);
      else {
        Ap = !0, Lp = Math.min(400, (Yp ? ip.right : Ip.right - ip.left) - 30);
        let pp = Ip.bottom - ip.bottom;
        pp >= wp || pp > ip.top ? xp = cp.bottom - ip.top : (Pp = "bottom", xp = ip.bottom - cp.top)
      }
      return {
        style: `${Pp}: ${xp/((ip.bottom-ip.top)/Sp.offsetHeight)}px; max-width: ${Lp/((ip.right-ip.left)/Sp.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Ap ? Yp ? "left-narrow" : "right-narrow" : Dp ? "left" : "right")
      }
    }
    const mp = Op.C.define();

    function Rp(pp, ip, cp) {
      if (pp <= cp) return {
        from: 0,
        to: pp
      };
      if (ip < 0 && (ip = 0), ip <= pp >> 1) {
        let pp = Math.floor(ip / cp);
        return {
          from: pp * cp,
          to: (pp + 1) * cp
        }
      }
      let Op = Math.floor((pp - ip) / cp);
      return {
        from: pp - (Op + 1) * cp,
        to: pp - Op * cp
      }
    }
    class qp {
      constructor(pp, ip, cp) {
        this.view = pp, this.stateField = ip, this.applyCompletion = cp, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: pp => this.placeInfo(pp),
          key: this
        }, this.space = null, this.currentClass = "";
        let Op = pp.state.field(ip),
          {
            options: op,
            selected: Ip
          } = Op.open,
          Sp = pp.state.facet(ep);
        this.optionContent = function(pp) {
          let ip = pp.addToOptions.slice();
          return pp.icons && ip.push({
            render(pp) {
              let ip = document.createElement("div");
              return ip.classList.add("cm-completionIcon"), pp.type && ip.classList.add(...pp.type.split(/\s+/g).map((pp => "cm-completionIcon-" + pp))), ip.setAttribute("aria-hidden", "true"), ip
            },
            position: 20
          }), ip.push({
            render(pp, ip, cp, Op) {
              let op = document.createElement("span");
              op.className = "cm-completionLabel";
              let Ip = pp.displayLabel || pp.label,
                Sp = 0;
              for (let xp = 0; xp < Op.length;) {
                let pp = Op[xp++],
                  ip = Op[xp++];
                pp > Sp && op.appendChild(document.createTextNode(Ip.slice(Sp, pp)));
                let cp = op.appendChild(document.createElement("span"));
                cp.appendChild(document.createTextNode(Ip.slice(pp, ip))), cp.className = "cm-completionMatchedText", Sp = ip
              }
              return Sp < Ip.length && op.appendChild(document.createTextNode(Ip.slice(Sp))), op
            },
            position: 50
          }, {
            render(pp) {
              if (!pp.detail) return null;
              let ip = document.createElement("span");
              return ip.className = "cm-completionDetail", ip.textContent = pp.detail, ip
            },
            position: 80
          }), ip.sort(((pp, ip) => pp.position - ip.position)).map((pp => pp.render))
        }(Sp), this.optionClass = Sp.optionClass, this.tooltipClass = Sp.tooltipClass, this.range = Rp(op.length, Ip, Sp.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(pp.state), this.dom.addEventListener("mousedown", (cp => {
          let {
            options: Op
          } = pp.state.field(ip).open;
          for (let ip, op = cp.target; op && op != this.dom; op = op.parentNode)
            if ("LI" == op.nodeName && (ip = /-(\d+)$/.exec(op.id)) && +ip[1] < Op.length) return this.applyCompletion(pp, Op[+ip[1]]), void cp.preventDefault();
          if (cp.target == this.list) {
            let ip = this.list.classList.contains("cm-completionListIncompleteTop") && cp.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && cp.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != ip && (pp.dispatch({
              effects: mp.of(ip)
            }), cp.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (ip => {
          let cp = pp.state.field(this.stateField, !1);
          cp && cp.tooltip && pp.state.facet(ep).closeOnBlur && ip.relatedTarget != pp.contentDOM && pp.dispatch({
            effects: tp.of(null)
          })
        })), this.showOptions(op, Op.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(pp, ip) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(pp, ip, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(pp) {
        var ip;
        let cp = pp.state.field(this.stateField),
          Op = pp.startState.field(this.stateField);
        if (this.updateTooltipClass(pp.state), cp != Op) {
          let {
            options: op,
            selected: Ip,
            disabled: Sp
          } = cp.open;
          Op.open && Op.open.options == op || (this.range = Rp(op.length, Ip, pp.state.facet(ep).maxRenderedOptions), this.showOptions(op, cp.id)), this.updateSel(), Sp != (null === (ip = Op.open) || void 0 === ip ? void 0 : ip.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Sp)
        }
      }
      updateTooltipClass(pp) {
        let ip = this.tooltipClass(pp);
        if (ip != this.currentClass) {
          for (let pp of this.currentClass.split(" ")) pp && this.dom.classList.remove(pp);
          for (let pp of ip.split(" ")) pp && this.dom.classList.add(pp);
          this.currentClass = ip
        }
      }
      positioned(pp) {
        this.space = pp, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let pp = this.view.state.field(this.stateField),
          ip = pp.open;
        (ip.selected > -1 && ip.selected < this.range.from || ip.selected >= this.range.to) && (this.range = Rp(ip.options.length, ip.selected, this.view.state.facet(ep).maxRenderedOptions), this.showOptions(ip.options, pp.id));
        let cp = this.updateSelectedOption(ip.selected);
        if (cp) {
          this.destroyInfo();
          let {
            completion: Op
          } = ip.options[ip.selected], {
            info: Ip
          } = Op;
          if (!Ip) return;
          let Sp = "string" === typeof Ip ? document.createTextNode(Ip) : Ip(Op);
          if (!Sp) return;
          "then" in Sp ? Sp.then((ip => {
            ip && this.view.state.field(this.stateField, !1) == pp && this.addInfoPane(ip, Op)
          })).catch((pp => (0, op._)(this.view.state, pp, "completion info"))) : (this.addInfoPane(Sp, Op), cp.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(pp, ip) {
        this.destroyInfo();
        let cp = this.info = document.createElement("div");
        if (cp.className = "cm-tooltip cm-completionInfo", cp.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != pp.nodeType) cp.appendChild(pp), this.infoDestroy = null;
        else {
          let {
            dom: ip,
            destroy: Op
          } = pp;
          cp.appendChild(ip), this.infoDestroy = Op || null
        }
        this.dom.appendChild(cp), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(pp) {
        let ip = null;
        for (let cp = this.list.firstChild, Op = this.range.from; cp; cp = cp.nextSibling, Op++) "LI" == cp.nodeName && cp.id ? Op == pp ? cp.hasAttribute("aria-selected") || (cp.setAttribute("aria-selected", "true"), ip = cp) : cp.hasAttribute("aria-selected") && (cp.removeAttribute("aria-selected"), cp.removeAttribute("aria-describedby")) : Op--;
        return ip && function(pp, ip) {
          let cp = pp.getBoundingClientRect(),
            Op = ip.getBoundingClientRect(),
            op = cp.height / pp.offsetHeight;
          Op.top < cp.top ? pp.scrollTop -= (cp.top - Op.top) / op : Op.bottom > cp.bottom && (pp.scrollTop += (Op.bottom - cp.bottom) / op)
        }(this.list, ip), ip
      }
      measureInfo() {
        let pp = this.dom.querySelector("[aria-selected]");
        if (!pp || !this.info) return null;
        let ip = this.dom.getBoundingClientRect(),
          cp = this.info.getBoundingClientRect(),
          Op = pp.getBoundingClientRect(),
          op = this.space;
        if (!op) {
          let pp = this.dom.ownerDocument.documentElement;
          op = {
            left: 0,
            top: 0,
            right: pp.clientWidth,
            bottom: pp.clientHeight
          }
        }
        return Op.top > Math.min(op.bottom, ip.bottom) - 10 || Op.bottom < Math.max(op.top, ip.top) + 10 ? null : this.view.state.facet(ep).positionInfo(this.view, ip, Op, cp, op, this.dom)
      }
      placeInfo(pp) {
        this.info && (pp ? (pp.style && (this.info.style.cssText = pp.style), this.info.className = "cm-tooltip cm-completionInfo " + (pp.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(pp, ip, cp) {
        const Op = document.createElement("ul");
        Op.id = ip, Op.setAttribute("role", "listbox"), Op.setAttribute("aria-expanded", "true"), Op.setAttribute("aria-label", this.view.state.phrase("Completions")), Op.addEventListener("mousedown", (pp => {
          pp.target == Op && pp.preventDefault()
        }));
        let op = null;
        for (let Ip = cp.from; Ip < cp.to; Ip++) {
          let {
            completion: Sp,
            match: xp
          } = pp[Ip], {
            section: Lp
          } = Sp;
          if (Lp) {
            let pp = "string" == typeof Lp ? Lp : Lp.name;
            if (pp != op && (Ip > cp.from || 0 == cp.from))
              if (op = pp, "string" != typeof Lp && Lp.header) Op.appendChild(Lp.header(Lp));
              else {
                Op.appendChild(document.createElement("completion-section")).textContent = pp
              }
          }
          const Yp = Op.appendChild(document.createElement("li"));
          Yp.id = ip + "-" + Ip, Yp.setAttribute("role", "option");
          let Dp = this.optionClass(Sp);
          Dp && (Yp.className = Dp);
          for (let pp of this.optionContent) {
            let ip = pp(Sp, this.view.state, this.view, xp);
            ip && Yp.appendChild(ip)
          }
        }
        return cp.from && Op.classList.add("cm-completionListIncompleteTop"), cp.to < pp.length && Op.classList.add("cm-completionListIncompleteBottom"), Op
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Mp(pp, ip) {
      return cp => new qp(cp, pp, ip)
    }

    function Cp(pp) {
      return 100 * (pp.boost || 0) + (pp.apply ? 10 : 0) + (pp.info ? 5 : 0) + (pp.type ? 1 : 0)
    }
    class Ep {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.options = pp, this.attrs = ip, this.tooltip = cp, this.timestamp = Op, this.selected = op, this.disabled = Ip
      }
      setSelected(pp, ip) {
        return pp == this.selected || pp >= this.options.length ? this : new Ep(this.options, Jp(ip, pp), this.tooltip, this.timestamp, pp, this.disabled)
      }
      static build(pp, ip, cp, Op, op, Ip) {
        if (Op && !Ip && pp.some((pp => pp.isPending))) return Op.setDisabled();
        let Sp = function(pp, ip) {
          let cp = [],
            Op = null,
            op = null,
            Ip = pp => {
              cp.push(pp);
              let {
                section: ip
              } = pp.completion;
              if (ip) {
                Op || (Op = []);
                let pp = "string" == typeof ip ? ip : ip.name;
                Op.some((ip => ip.name == pp)) || Op.push("string" == typeof ip ? {
                  name: pp
                } : ip)
              }
            },
            Sp = ip.facet(ep);
          for (let Ap of pp)
            if (Ap.hasResult()) {
              let pp = Ap.result.getMatch;
              if (!1 === Ap.result.filter)
                for (let ip of Ap.result.options) Ip(new Dp(ip, Ap.source, pp ? pp(ip) : [], 1e9 - cp.length));
              else {
                let cp, Op = ip.sliceDoc(Ap.from, Ap.to),
                  xp = Sp.filterStrict ? new dp(Op) : new Hp(Op);
                for (let ip of Ap.result.options)
                  if (cp = xp.match(ip.label)) {
                    let Op = ip.displayLabel ? pp ? pp(ip, cp.matched) : [] : cp.matched,
                      Sp = cp.score + (ip.boost || 0);
                    if (Ip(new Dp(ip, Ap.source, Op, Sp)), "object" == typeof ip.section && "dynamic" === ip.section.rank) {
                      let {
                        name: pp
                      } = ip.section;
                      op || (op = Object.create(null)), op[pp] = Math.max(Sp, op[pp] || -1e9)
                    }
                  }
              }
            } if (Op) {
            let pp = Object.create(null),
              ip = 0,
              Ip = (pp, ip) => ("dynamic" === pp.rank && "dynamic" === ip.rank ? op[ip.name] - op[pp.name] : 0) || ("number" == typeof pp.rank ? pp.rank : 1e9) - ("number" == typeof ip.rank ? ip.rank : 1e9) || (pp.name < ip.name ? -1 : 1);
            for (let cp of Op.sort(Ip)) ip -= 1e5, pp[cp.name] = ip;
            for (let Op of cp) {
              let {
                section: ip
              } = Op.completion;
              ip && (Op.score += pp["string" == typeof ip ? ip : ip.name])
            }
          }
          let xp = [],
            Lp = null,
            Yp = Sp.compareCompletions;
          for (let Dp of cp.sort(((pp, ip) => ip.score - pp.score || Yp(pp.completion, ip.completion)))) {
            let pp = Dp.completion;
            !Lp || Lp.label != pp.label || Lp.detail != pp.detail || null != Lp.type && null != pp.type && Lp.type != pp.type || Lp.apply != pp.apply || Lp.boost != pp.boost ? xp.push(Dp) : Cp(Dp.completion) > Cp(Lp) && (xp[xp.length - 1] = Dp), Lp = Dp.completion
          }
          return xp
        }(pp, ip);
        if (!Sp.length) return Op && pp.some((pp => pp.isPending)) ? Op.setDisabled() : null;
        let xp = ip.facet(ep).selectOnOpen ? 0 : -1;
        if (Op && Op.selected != xp && -1 != Op.selected) {
          let pp = Op.options[Op.selected].completion;
          for (let ip = 0; ip < Sp.length; ip++)
            if (Sp[ip].completion == pp) {
              xp = ip;
              break
            }
        }
        return new Ep(Sp, Jp(cp, xp), {
          pos: pp.reduce(((pp, ip) => ip.hasResult() ? Math.min(pp, ip.from) : pp), 1e8),
          create: np,
          above: op.aboveCursor
        }, Op ? Op.timestamp : Date.now(), xp, !1)
      }
      map(pp) {
        return new Ep(this.options, this.attrs, {
          ...this.tooltip,
          pos: pp.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Ep(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Xp {
      constructor(pp, ip, cp) {
        this.active = pp, this.id = ip, this.open = cp
      }
      static start() {
        return new Xp(Bp, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(pp) {
        let {
          state: ip
        } = pp, cp = ip.facet(ep), Op = (cp.override || ip.languageDataAt("autocomplete", Ap(ip)).map(wp)).map((ip => (this.active.find((pp => pp.source == ip)) || new Tp(ip, this.active.some((pp => 0 != pp.state)) ? 1 : 0)).update(pp, cp)));
        Op.length == this.active.length && Op.every(((pp, ip) => pp == this.active[ip])) && (Op = this.active);
        let op = this.open,
          Ip = pp.effects.some((pp => pp.is(bp)));
        op && pp.docChanged && (op = op.map(pp.changes)), pp.selection || Op.some((ip => ip.hasResult() && pp.changes.touchesRange(ip.from, ip.to))) || ! function(pp, ip) {
          if (pp == ip) return !0;
          for (let cp = 0, Op = 0;;) {
            for (; cp < pp.length && !pp[cp].hasResult();) cp++;
            for (; Op < ip.length && !ip[Op].hasResult();) Op++;
            let op = cp == pp.length,
              Ip = Op == ip.length;
            if (op || Ip) return op == Ip;
            if (pp[cp++].result != ip[Op++].result) return !1
          }
        }(Op, this.active) || Ip ? op = Ep.build(Op, ip, this.id, op, cp, Ip) : op && op.disabled && !Op.some((pp => pp.isPending)) && (op = null), !op && Op.every((pp => !pp.isPending)) && Op.some((pp => pp.hasResult())) && (Op = Op.map((pp => pp.hasResult() ? new Tp(pp.source, 0) : pp)));
        for (let Sp of pp.effects) Sp.is(mp) && (op = op && op.setSelected(Sp.value, this.id));
        return Op == this.active && op == this.open ? this : new Xp(Op, this.id, op)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? lp : Qp
      }
    }
    const lp = {
        "aria-autocomplete": "list"
      },
      Qp = {};

    function Jp(pp, ip) {
      let cp = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": pp
      };
      return ip > -1 && (cp["aria-activedescendant"] = pp + "-" + ip), cp
    }
    const Bp = [];

    function Np(pp, ip) {
      if (pp.isUserEvent("input.complete")) {
        let cp = pp.annotation(Wp);
        if (cp && ip.activateOnCompletion(cp)) return 12
      }
      let cp = pp.isUserEvent("input.type");
      return cp && ip.activateOnTyping ? 5 : cp ? 1 : pp.isUserEvent("delete.backward") ? 2 : pp.selection ? 8 : pp.docChanged ? 16 : 0
    }
    class Tp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = pp, this.state = ip, this.explicit = cp
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(pp, ip) {
        let cp = Np(pp, ip),
          Op = this;
        (8 & cp || 16 & cp && this.touches(pp)) && (Op = new Tp(Op.source, 0)), 4 & cp && 0 == Op.state && (Op = new Tp(this.source, 1)), Op = Op.updateFor(pp, cp);
        for (let op of pp.effects)
          if (op.is(vp)) Op = new Tp(Op.source, 1, op.value);
          else if (op.is(tp)) Op = new Tp(Op.source, 0);
        else if (op.is(bp))
          for (let pp of op.value) pp.source == Op.source && (Op = pp);
        return Op
      }
      updateFor(pp, ip) {
        return this.map(pp.changes)
      }
      map(pp) {
        return this
      }
      touches(pp) {
        return pp.changes.touchesRange(Ap(pp.state))
      }
    }
    class fp extends Tp {
      constructor(pp, ip, cp, Op, op, Ip) {
        super(pp, 3, ip), this.limit = cp, this.result = Op, this.from = op, this.to = Ip
      }
      hasResult() {
        return !0
      }
      updateFor(pp, ip) {
        var cp;
        if (!(3 & ip)) return this.map(pp.changes);
        let Op = this.result;
        Op.map && !pp.changes.empty && (Op = Op.map(Op, pp.changes));
        let op = pp.changes.mapPos(this.from),
          Ip = pp.changes.mapPos(this.to, 1),
          xp = Ap(pp.state);
        if (xp > Ip || !Op || 2 & ip && (Ap(pp.startState) == this.from || xp < this.limit)) return new Tp(this.source, 4 & ip ? 1 : 0);
        let Lp = pp.changes.mapPos(this.limit);
        return function(pp, ip, cp, Op) {
          if (!pp) return !1;
          let op = ip.sliceDoc(cp, Op);
          return "function" == typeof pp ? pp(op, cp, Op, ip) : Pp(pp, !0).test(op)
        }(Op.validFor, pp.state, op, Ip) ? new fp(this.source, this.explicit, Lp, Op, op, Ip) : Op.update && (Op = Op.update(Op, op, Ip, new Sp(pp.state, xp, !1))) ? new fp(this.source, this.explicit, Lp, Op, Op.from, null !== (cp = Op.to) && void 0 !== cp ? cp : Ap(pp.state)) : new Tp(this.source, 1, this.explicit)
      }
      map(pp) {
        if (pp.empty) return this;
        return (this.result.map ? this.result.map(this.result, pp) : this.result) ? new fp(this.source, this.explicit, pp.mapPos(this.limit), this.result, pp.mapPos(this.from), pp.mapPos(this.to, 1)) : new Tp(this.source, 0)
      }
      touches(pp) {
        return pp.changes.touchesRange(this.from, this.to)
      }
    }
    const bp = Op.C.define({
        map: (pp, ip) => pp.map((pp => pp.map(ip)))
      }),
      hp = Op.E.define({
        create: () => Xp.start(),
        update: (pp, ip) => pp.update(ip),
        provide: pp => [op.qb.from(pp, (pp => pp.tooltip)), op.f.contentAttributes.from(pp, (pp => pp.attrs))]
      });

    function ap(pp, ip) {
      const cp = ip.completion.apply || ip.completion.label;
      let Op = pp.state.field(hp).active.find((pp => pp.source == ip.source));
      return Op instanceof fp && ("string" == typeof cp ? pp.dispatch({
        ...yp(pp.state, cp, Op.from, Op.to),
        annotations: Wp.of(ip.completion)
      }) : cp(pp, ip.completion, Op.from, Op.to), !0)
    }
    const np = Mp(hp, ap);

    function Fp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return cp => {
        let Op = cp.state.field(hp, !1);
        if (!Op || !Op.open || Op.open.disabled || Date.now() - Op.open.timestamp < cp.state.facet(ep).interactionDelay) return !1;
        let Ip, Sp = 1;
        "page" == ip && (Ip = (0, op.y)(cp, Op.open.tooltip)) && (Sp = Math.max(2, Math.floor(Ip.dom.offsetHeight / Ip.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: xp
        } = Op.open.options, Lp = Op.open.selected > -1 ? Op.open.selected + Sp * (pp ? 1 : -1) : pp ? 0 : xp - 1;
        return Lp < 0 ? Lp = "page" == ip ? 0 : xp - 1 : Lp >= xp && (Lp = "page" == ip ? xp - 1 : 0), cp.dispatch({
          effects: mp.of(Lp)
        }), !0
      }
    }
    const gp = pp => !!pp.state.field(hp, !1) && (pp.dispatch({
      effects: vp.of(!0)
    }), !0);
    class Gp {
      constructor(pp, ip) {
        this.active = pp, this.context = ip, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const rp = op.k.fromClass(class {
        constructor(pp) {
          this.view = pp, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let ip of pp.state.field(hp).active) ip.isPending && this.startQuery(ip)
        }
        update(pp) {
          let ip = pp.state.field(hp),
            cp = pp.state.facet(ep);
          if (!pp.selectionSet && !pp.docChanged && pp.startState.field(hp) == ip) return;
          let Op = pp.transactions.some((pp => {
            let ip = Np(pp, cp);
            return 8 & ip || (pp.selection || pp.docChanged) && !(3 & ip)
          }));
          for (let xp = 0; xp < this.running.length; xp++) {
            let ip = this.running[xp];
            if (Op || ip.context.abortOnDocChange && pp.docChanged || ip.updates.length + pp.transactions.length > 50 && Date.now() - ip.time > 1e3) {
              for (let pp of ip.context.abortListeners) try {
                pp()
              } catch (Sp) {
                (0, op._)(this.view.state, Sp)
              }
              ip.context.abortListeners = null, this.running.splice(xp--, 1)
            } else ip.updates.push(...pp.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), pp.transactions.some((pp => pp.effects.some((pp => pp.is(vp))))) && (this.pendingStart = !0);
          let Ip = this.pendingStart ? 50 : cp.activateOnTypingDelay;
          if (this.debounceUpdate = ip.active.some((pp => pp.isPending && !this.running.some((ip => ip.active.source == pp.source)))) ? setTimeout((() => this.startUpdate()), Ip) : -1, 0 != this.composing)
            for (let op of pp.transactions) op.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && op.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: pp
          } = this.view, ip = pp.field(hp);
          for (let cp of ip.active) cp.isPending && !this.running.some((pp => pp.active.source == cp.source)) && this.startQuery(cp);
          this.running.length && ip.open && ip.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(ep).updateSyncTime))
        }
        startQuery(pp) {
          let {
            state: ip
          } = this.view, cp = Ap(ip), Op = new Sp(ip, cp, pp.explicit, this.view), Ip = new Gp(pp, Op);
          this.running.push(Ip), Promise.resolve(pp.source(Op)).then((pp => {
            Ip.context.aborted || (Ip.done = pp || null, this.scheduleAccept())
          }), (pp => {
            this.view.dispatch({
              effects: tp.of(null)
            }), (0, op._)(this.view.state, pp)
          }))
        }
        scheduleAccept() {
          this.running.every((pp => void 0 !== pp.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(ep).updateSyncTime))
        }
        accept() {
          var pp;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let ip = [],
            cp = this.view.state.facet(ep),
            Op = this.view.state.field(hp);
          for (let op = 0; op < this.running.length; op++) {
            let Ip = this.running[op];
            if (void 0 === Ip.done) continue;
            if (this.running.splice(op--, 1), Ip.done) {
              let Op = Ap(Ip.updates.length ? Ip.updates[0].startState : this.view.state),
                op = Math.min(Op, Ip.done.from + (Ip.active.explicit ? 0 : 1)),
                Sp = new fp(Ip.active.source, Ip.active.explicit, op, Ip.done, Ip.done.from, null !== (pp = Ip.done.to) && void 0 !== pp ? pp : Op);
              for (let pp of Ip.updates) Sp = Sp.update(pp, cp);
              if (Sp.hasResult()) {
                ip.push(Sp);
                continue
              }
            }
            let Sp = Op.active.find((pp => pp.source == Ip.active.source));
            if (Sp && Sp.isPending)
              if (null == Ip.done) {
                let pp = new Tp(Ip.active.source, 0);
                for (let ip of Ip.updates) pp = pp.update(ip, cp);
                pp.isPending || ip.push(pp)
              } else this.startQuery(Sp)
          }(ip.length || Op.open && Op.open.disabled) && this.view.dispatch({
            effects: bp.of(ip)
          })
        }
      }, {
        eventHandlers: {
          blur(pp) {
            let ip = this.view.state.field(hp, !1);
            if (ip && ip.tooltip && this.view.state.facet(ep).closeOnBlur) {
              let cp = ip.open && (0, op.y)(this.view, ip.open.tooltip);
              cp && cp.dom.contains(pp.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: tp.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: vp.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Zp = "object" == typeof navigator && /Win/.test(navigator.platform),
      zp = Op.u.highest(op.f.domEventHandlers({
        keydown(pp, ip) {
          let cp = ip.state.field(hp, !1);
          if (!cp || !cp.open || cp.open.disabled || cp.open.selected < 0 || pp.key.length > 1 || pp.ctrlKey && (!Zp || !pp.altKey) || pp.metaKey) return !1;
          let Op = cp.open.options[cp.open.selected],
            op = cp.active.find((pp => pp.source == Op.source)),
            Ip = Op.completion.commitCharacters || op.result.commitCharacters;
          return Ip && Ip.indexOf(pp.key) > -1 && ap(ip, Op), !1
        }
      })),
      sp = op.f.baseTheme({
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
    class Kp {
      constructor(pp, ip, cp, Op) {
        this.field = pp, this.line = ip, this.from = cp, this.to = Op
      }
    }
    class Vp {
      constructor(pp, ip, cp) {
        this.field = pp, this.from = ip, this.to = cp
      }
      map(pp) {
        let ip = pp.mapPos(this.from, -1, Op.r.TrackDel),
          cp = pp.mapPos(this.to, 1, Op.r.TrackDel);
        return null == ip || null == cp ? null : new Vp(this.field, ip, cp)
      }
    }
    class ii {
      constructor(pp, ip) {
        this.lines = pp, this.fieldPositions = ip
      }
      instantiate(pp, ip) {
        let cp = [],
          Op = [ip],
          op = pp.doc.lineAt(ip),
          Sp = /^\s*/.exec(op.text)[0];
        for (let Lp of this.lines) {
          if (cp.length) {
            let cp = Sp,
              op = /^\t*/.exec(Lp)[0].length;
            for (let ip = 0; ip < op; ip++) cp += pp.facet(Ip.W);
            Op.push(ip + cp.length - op), Lp = cp + Lp.slice(op)
          }
          cp.push(Lp), ip += Lp.length + 1
        }
        let xp = this.fieldPositions.map((pp => new Vp(pp.field, Op[pp.line] + pp.from, Op[pp.line] + pp.to)));
        return {
          text: cp,
          By: xp
        }
      }
      static parse(pp) {
        let ip, cp = [],
          Op = [],
          op = [];
        for (let Ip of pp.split(/\r\n?|\n/)) {
          for (; ip = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Ip);) {
            let pp = ip[1] ? +ip[1] : null,
              Sp = ip[2] || ip[3] || "",
              xp = -1,
              Lp = Sp.replace(/\\[{}]/g, (pp => pp[1]));
            for (let ip = 0; ip < cp.length; ip++)(null != pp ? cp[ip].seq == pp : Lp && cp[ip].name == Lp) && (xp = ip);
            if (xp < 0) {
              let ip = 0;
              for (; ip < cp.length && (null == pp || null != cp[ip].seq && cp[ip].seq < pp);) ip++;
              cp.splice(ip, 0, {
                seq: pp,
                name: Lp
              }), xp = ip;
              for (let pp of op) pp.field >= xp && pp.field++
            }
            for (let cp of op)
              if (cp.line == Op.length && cp.from > ip.index) {
                let pp = ip[2] ? 3 + (ip[1] || "").length : 2;
                cp.from -= pp, cp.to -= pp
              } op.push(new Kp(xp, Op.length, ip.index, ip.index + Lp.length)), Ip = Ip.slice(0, ip.index) + Sp + Ip.slice(ip.index + ip[0].length)
          }
          Ip = Ip.replace(/\\([{}])/g, ((pp, ip, cp) => {
            for (let Ip of op) Ip.line == Op.length && Ip.from > cp && (Ip.from--, Ip.to--);
            return ip
          })), Op.push(Ip)
        }
        return new ii(Op, op)
      }
    }
    let ci = op.c.widget({
        widget: new class extends op.l {
          toDOM() {
            let pp = document.createElement("span");
            return pp.className = "cm-snippetFieldPosition", pp
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      Oi = op.c.mark({
        class: "cm-snippetField"
      });
    class oi {
      constructor(pp, ip) {
        this.By = pp, this.active = ip, this.deco = op.c.set(pp.map((pp => (pp.from == pp.to ? ci : Oi).range(pp.from, pp.to))), !0)
      }
      map(pp) {
        let ip = [];
        for (let cp of this.By) {
          let Op = cp.map(pp);
          if (!Op) return null;
          ip.push(Op)
        }
        return new oi(ip, this.active)
      }
      selectionInsideField(pp) {
        return pp.By.every((pp => this.By.some((ip => ip.field == this.active && ip.from <= pp.from && ip.to >= pp.to))))
      }
    }
    const Ii = Op.C.define({
        map: (pp, ip) => pp && pp.map(ip)
      }),
      Si = Op.C.define(),
      xi = Op.E.define({
        create: () => null,
        update(pp, ip) {
          for (let cp of ip.effects) {
            if (cp.is(Ii)) return cp.value;
            if (cp.is(Si) && pp) return new oi(pp.By, cp.value)
          }
          return pp && ip.docChanged && (pp = pp.map(ip.changes)), pp && ip.selection && !pp.selectionInsideField(ip.selection) && (pp = null), pp
        },
        provide: pp => op.f.uO.from(pp, (pp => pp ? pp.deco : op.c.none))
      });

    function Li(pp, ip) {
      return Op.l.create(pp.filter((pp => pp.field == ip)).map((pp => Op.l.range(pp.from, pp.to))))
    }

    function Yi(pp) {
      let ip = ii.parse(pp);
      return (pp, cp, op, Ip) => {
        let {
          text: Sp,
          By: xp
        } = ip.instantiate(pp.state, op), {
          main: Lp
        } = pp.state.selection, Yp = {
          changes: {
            from: op,
            to: Ip == Lp.from ? Lp.to : Ip,
            insert: Op.F.of(Sp)
          },
          scrollIntoView: !0,
          annotations: cp ? [Wp.of(cp), Op.I.userEvent.of("input.complete")] : void 0
        };
        if (xp.length && (Yp.selection = Li(xp, 0)), xp.some((pp => pp.field > 0))) {
          let ip = new oi(xp, 0),
            cp = Yp.effects = [Ii.of(ip)];
          void 0 === pp.state.field(xi, !1) && cp.push(Op.C.appendConfig.of([xi, Wi, Ui, sp]))
        }
        pp.dispatch(pp.state.update(Yp))
      }
    }

    function Di(pp) {
      return ip => {
        let {
          state: cp,
          dispatch: Op
        } = ip, op = cp.field(xi, !1);
        if (!op || pp < 0 && 0 == op.active) return !1;
        let Ip = op.active + pp,
          Sp = pp > 0 && !op.By.some((ip => ip.field == Ip + pp));
        return Op(cp.update({
          selection: Li(op.By, Ip),
          effects: Ii.of(Sp ? null : new oi(op.By, Ip)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Ai = [{
        key: "Tab",
        run: Di(1),
        shift: Di(-1)
      }, {
        key: "Escape",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          return !!ip.field(xi, !1) && (cp(ip.update({
            effects: Ii.of(null)
          })), !0)
        }
      }],
      Pi = Op.o.define({
        combine: pp => pp.length ? pp[0] : Ai
      }),
      Wi = Op.u.highest(op.U.compute([Pi], (pp => pp.facet(Pi))));

    function yi(pp, ip) {
      return {
        ...ip,
        apply: Yi(pp)
      }
    }
    const Ui = op.f.domEventHandlers({
      mousedown(pp, ip) {
        let cp, Op = ip.state.field(xi, !1);
        if (!Op || null == (cp = ip.posAtCoords({
            x: pp.clientX,
            y: pp.clientY
          }))) return !1;
        let op = Op.By.find((pp => pp.from <= cp && pp.to >= cp));
        return !(!op || op.field == Op.active) && (ip.dispatch({
          selection: Li(Op.By, op.field),
          effects: Ii.of(Op.By.some((pp => pp.field > op.field)) ? new oi(Op.By, op.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const wi = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      vi = Op.C.define({
        map(pp, ip) {
          let cp = ip.mapPos(pp, -1, Op.r.TrackAfter);
          return null == cp ? void 0 : cp
        }
      }),
      ti = new class extends Op.B {};
    ti.startSide = 1, ti.endSide = -1;
    const Hi = Op.E.define({
      create: () => Op.A.empty,
      update(pp, ip) {
        if (pp = pp.map(ip.changes), ip.selection) {
          let cp = ip.state.doc.lineAt(ip.selection.main.head);
          pp = pp.update({
            filter: pp => pp >= cp.from && pp <= cp.to
          })
        }
        for (let cp of ip.effects) cp.is(vi) && (pp = pp.update({
          add: [ti.range(cp.value, cp.value + 1)]
        }));
        return pp
      }
    });

    function di() {
      return [mi, Hi]
    }
    const ei = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function ui(pp) {
      for (let ip = 0; ip < 16; ip += 2)
        if (ei.charCodeAt(ip) == pp) return ei.charAt(ip + 1);
      return (0, Op.W)(pp < 128 ? pp : pp + 1)
    }

    function ji(pp, ip) {
      return pp.languageDataAt("closeBrackets", ip)[0] || wi
    }
    const ki = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      mi = op.f.inputHandler.of(((pp, ip, cp, op) => {
        if ((ki ? pp.composing : pp.compositionStarted) || pp.state.readOnly) return !1;
        let Ip = pp.state.selection.main;
        if (op.length > 2 || 2 == op.length && 1 == (0, Op.N)((0, Op.J)(op, 0)) || ip != Ip.from || cp != Ip.to) return !1;
        let Sp = function(pp, ip) {
          let cp = ji(pp, pp.selection.main.head),
            op = cp.brackets || wi.brackets;
          for (let Ip of op) {
            let Sp = ui((0, Op.J)(Ip, 0));
            if (ip == Ip) return Sp == Ip ? Xi(pp, Ip, op.indexOf(Ip + Ip + Ip) > -1, cp) : Ci(pp, Ip, Sp, cp.before || wi.before);
            if (ip == Sp && qi(pp, pp.selection.main.from)) return Ei(pp, Ip, Sp)
          }
          return null
        }(pp.state, op);
        return !!Sp && (pp.dispatch(Sp), !0)
      })),
      Ri = [{
        key: "Backspace",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          if (ip.readOnly) return !1;
          let op = ji(ip, ip.selection.main.head).brackets || wi.brackets,
            Ip = null,
            Sp = ip.changeByRange((pp => {
              if (pp.empty) {
                let cp = function(pp, ip) {
                  let cp = pp.sliceString(ip - 2, ip);
                  return (0, Op.N)((0, Op.J)(cp, 0)) == cp.length ? cp : cp.slice(1)
                }(ip.doc, pp.head);
                for (let Ip of op)
                  if (Ip == cp && Mi(ip.doc, pp.head) == ui((0, Op.J)(Ip, 0))) return {
                    changes: {
                      from: pp.head - Ip.length,
                      to: pp.head + Ip.length
                    },
                    range: Op.l.cursor(pp.head - Ip.length)
                  }
              }
              return {
                range: Ip = pp
              }
            }));
          return Ip || cp(ip.update(Sp, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Ip
        }
      }];

    function qi(pp, ip) {
      let cp = !1;
      return pp.field(Hi).between(0, pp.doc.length, (pp => {
        pp == ip && (cp = !0)
      })), cp
    }

    function Mi(pp, ip) {
      let cp = pp.sliceString(ip, ip + 2);
      return cp.slice(0, (0, Op.N)((0, Op.J)(cp, 0)))
    }

    function Ci(pp, ip, cp, op) {
      let Ip = null,
        Sp = pp.changeByRange((Sp => {
          if (!Sp.empty) return {
            changes: [{
              insert: ip,
              from: Sp.from
            }, {
              insert: cp,
              from: Sp.to
            }],
            effects: vi.of(Sp.to + ip.length),
            range: Op.l.range(Sp.anchor + ip.length, Sp.head + ip.length)
          };
          let xp = Mi(pp.doc, Sp.head);
          return !xp || /\s/.test(xp) || op.indexOf(xp) > -1 ? {
            changes: {
              insert: ip + cp,
              from: Sp.head
            },
            effects: vi.of(Sp.head + ip.length),
            range: Op.l.cursor(Sp.head + ip.length)
          } : {
            range: Ip = Sp
          }
        }));
      return Ip ? null : pp.update(Sp, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ei(pp, ip, cp) {
      let op = null,
        Ip = pp.changeByRange((ip => ip.empty && Mi(pp.doc, ip.head) == cp ? {
          changes: {
            from: ip.head,
            to: ip.head + cp.length,
            insert: cp
          },
          range: Op.l.cursor(ip.head + cp.length)
        } : op = {
          range: ip
        }));
      return op ? null : pp.update(Ip, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Xi(pp, ip, cp, op) {
      let Sp = op.stringPrefixes || wi.stringPrefixes,
        xp = null,
        Lp = pp.changeByRange((op => {
          if (!op.empty) return {
            changes: [{
              insert: ip,
              from: op.from
            }, {
              insert: ip,
              from: op.to
            }],
            effects: vi.of(op.to + ip.length),
            range: Op.l.range(op.anchor + ip.length, op.head + ip.length)
          };
          let Lp, Yp = op.head,
            Dp = Mi(pp.doc, Yp);
          if (Dp == ip) {
            if (li(pp, Yp)) return {
              changes: {
                insert: ip + ip,
                from: Yp
              },
              effects: vi.of(Yp + ip.length),
              range: Op.l.cursor(Yp + ip.length)
            };
            if (qi(pp, Yp)) {
              let op = cp && pp.sliceDoc(Yp, Yp + 3 * ip.length) == ip + ip + ip ? ip + ip + ip : ip;
              return {
                changes: {
                  from: Yp,
                  to: Yp + op.length,
                  insert: op
                },
                range: Op.l.cursor(Yp + op.length)
              }
            }
          } else {
            if (cp && pp.sliceDoc(Yp - 2 * ip.length, Yp) == ip + ip && (Lp = Qi(pp, Yp - 2 * ip.length, Sp)) > -1 && li(pp, Lp)) return {
              changes: {
                insert: ip + ip + ip + ip,
                from: Yp
              },
              effects: vi.of(Yp + ip.length),
              range: Op.l.cursor(Yp + ip.length)
            };
            if (pp.charCategorizer(Yp)(Dp) != Op.i.Word && Qi(pp, Yp, Sp) > -1 && ! function(pp, ip, cp, Op) {
                let op = (0, Ip.kb)(pp).resolveInner(ip, -1),
                  Sp = Op.reduce(((pp, ip) => Math.max(pp, ip.length)), 0);
                for (let Ip = 0; Ip < 5; Ip++) {
                  let Ip = pp.sliceDoc(op.from, Math.min(op.to, op.from + cp.length + Sp)),
                    xp = Ip.indexOf(cp);
                  if (!xp || xp > -1 && Op.indexOf(Ip.slice(0, xp)) > -1) {
                    let ip = op.firstChild;
                    for (; ip && ip.from == op.from && ip.to - ip.from > cp.length + xp;) {
                      if (pp.sliceDoc(ip.to - cp.length, ip.to) == cp) return !1;
                      ip = ip.firstChild
                    }
                    return !0
                  }
                  let Lp = op.to == ip && op.parent;
                  if (!Lp) break;
                  op = Lp
                }
                return !1
              }(pp, Yp, ip, Sp)) return {
              changes: {
                insert: ip + ip,
                from: Yp
              },
              effects: vi.of(Yp + ip.length),
              range: Op.l.cursor(Yp + ip.length)
            }
          }
          return {
            range: xp = op
          }
        }));
      return xp ? null : pp.update(Lp, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function li(pp, ip) {
      let cp = (0, Ip.kb)(pp).resolveInner(ip + 1);
      return cp.parent && cp.from == ip
    }

    function Qi(pp, ip, cp) {
      let op = pp.charCategorizer(ip);
      if (op(pp.sliceDoc(ip - 1, ip)) != Op.i.Word) return ip;
      for (let Ip of cp) {
        let cp = ip - Ip.length;
        if (pp.sliceDoc(cp, ip) == Ip && op(pp.sliceDoc(cp - 1, cp)) != Op.i.Word) return cp
      }
      return -1
    }

    function Ji() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [zp, hp, ep.of(pp), rp, Ni, sp]
    }
    const Bi = [{
        key: "Ctrl-Space",
        run: gp
      }, {
        mac: "Alt-`",
        run: gp
      }, {
        mac: "Alt-i",
        run: gp
      }, {
        key: "Escape",
        run: pp => {
          let ip = pp.state.field(hp, !1);
          return !(!ip || !ip.active.some((pp => 0 != pp.state))) && (pp.dispatch({
            effects: tp.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Fp(!0)
      }, {
        key: "ArrowUp",
        run: Fp(!1)
      }, {
        key: "PageDown",
        run: Fp(!0, "page")
      }, {
        key: "PageUp",
        run: Fp(!1, "page")
      }, {
        key: "Enter",
        run: pp => {
          let ip = pp.state.field(hp, !1);
          return !(pp.state.readOnly || !ip || !ip.open || ip.open.selected < 0 || ip.open.disabled || Date.now() - ip.open.timestamp < pp.state.facet(ep).interactionDelay) && ap(pp, ip.open.options[ip.open.selected])
        }
      }],
      Ni = Op.u.highest(op.U.computeN([ep], (pp => pp.facet(ep).defaultKeymap ? [Bi] : [])))
  },
  41702: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp,
      d: () => Pp,
      e: () => Dp,
      g: () => Ap
    });
    var Op = cp(41548);
    class op {
      constructor(pp, ip, cp, Op) {
        this.origin = pp, this.changes = ip, this.effects = cp, this.clientID = Op
      }
    }
    class Ip {
      constructor(pp, ip) {
        this.version = pp, this.unconfirmed = ip
      }
    }
    const Sp = Op.o.define({
        combine(pp) {
          let ip = (0, Op.P)(pp, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: pp => pp
          });
          return null == ip.clientID && (ip.clientID = pp.length && pp[0].generatedID || ""), ip
        }
      }),
      xp = Op.c.define(),
      Lp = Op.E.define({
        create: pp => new Ip(pp.facet(Sp).startVersion, []),
        update(pp, ip) {
          let cp = ip.annotation(xp);
          if (cp) return cp;
          let {
            sharedEffects: Op,
            clientID: Lp
          } = ip.startState.facet(Sp), Yp = Op(ip);
          return Yp.length || !ip.changes.empty ? new Ip(pp.version, pp.unconfirmed.concat(new op(ip, ip.changes, Yp, Lp))) : pp
        }
      });

    function Yp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Lp, Sp.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, pp))]
    }

    function Dp(pp, ip) {
      let {
        version: cp,
        unconfirmed: Yp
      } = pp.field(Lp), {
        clientID: Dp
      } = pp.facet(Sp);
      cp += ip.length;
      let Ap = [],
        Pp = null,
        Wp = 0;
      for (let op of ip) {
        let pp = Wp < Yp.length ? Yp[Wp] : null;
        pp && pp.clientID == op.clientID ? (Pp && (Pp = Pp.map(pp.changes, !0)), Ap = Op.C.mapEffects(Ap, op.changes), Wp++) : (Ap = Op.C.mapEffects(Ap, op.changes), op.effects && (Ap = Ap.concat(op.effects)), Pp = Pp ? Pp.compose(op.changes) : op.changes)
      }
      if (Wp && (Yp = Yp.slice(Wp)), Yp.length && (Pp && (Yp = Yp.map((pp => {
          let ip = pp.changes.map(Pp);
          return Pp = Pp.map(pp.changes, !0), new op(pp.origin, ip, Op.C.mapEffects(pp.effects, Pp), Dp)
        }))), Ap.length)) {
        let pp = Yp.reduce(((pp, ip) => pp.compose(ip.changes)), Op.ChangeSet.empty(Yp[0].changes.length));
        Ap = Op.C.mapEffects(Ap, pp)
      }
      return Pp ? pp.update({
        changes: Pp,
        effects: Ap,
        annotations: [Op.I.addToHistory.of(!1), Op.I.remote.of(!0), xp.of(new Ip(cp, Yp))],
        filter: !1
      }) : pp.update({
        annotations: [xp.of(new Ip(cp, Yp))]
      })
    }

    function Ap(pp) {
      return pp.field(Lp).unconfirmed
    }

    function Pp(pp) {
      return pp.field(Lp).version
    }
  },
  41591: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => vi
    });
    var Op = cp(41575);
    class op {
      constructor(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        let Yp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Dp = arguments.length > 10 ? arguments[10] : void 0;
        this.p = pp, this.stack = ip, this.state = cp, this.reducePos = Op, this.pos = op, this.score = Ip, this.buffer = Sp, this.bufferBase = xp, this.curContext = Lp, this.lookAhead = Yp, this.parent = Dp
      }
      toString() {
        return `[${this.stack.filter(((pp,ip)=>ip%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = pp.parser.context;
        return new op(pp, [], ip, cp, cp, 0, [], 0, Op ? new Ip(Op, Op.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(pp, ip) {
        this.stack.push(this.state, ip, this.bufferBase + this.buffer.length), this.state = pp
      }
      reduce(pp) {
        var ip;
        let cp = pp >> 19,
          Op = 65535 & pp,
          {
            parser: op
          } = this.p,
          Ip = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Sp = op.dynamicPrecedence(Op);
        if (Sp && (this.score += Sp), 0 == cp) return this.pushState(op.getGoto(this.state, Op, !0), this.reducePos), Op < op.minRepeatTerm && this.storeNode(Op, this.reducePos, this.reducePos, Ip ? 8 : 4, !0), void this.reduceContext(Op, this.reducePos);
        let xp = this.stack.length - 3 * (cp - 1) - (262144 & pp ? 6 : 0),
          Lp = xp ? this.stack[xp - 2] : this.p.By[0].from,
          Yp = this.reducePos - Lp;
        Yp >= 2e3 && !(null === (ip = this.p.parser.nodeSet.types[Op]) || void 0 === ip ? void 0 : ip.isAnonymous) && (Lp == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Yp) : this.p.lastBigReductionSize < Yp && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Lp, this.p.lastBigReductionSize = Yp));
        let Dp = xp ? this.stack[xp - 1] : 0,
          Ap = this.bufferBase + this.buffer.length - Dp;
        if (Op < op.minRepeatTerm || 131072 & pp) {
          let pp = op.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Op, Lp, pp, Ap + 4, !0)
        }
        if (262144 & pp) this.state = this.stack[xp];
        else {
          let pp = this.stack[xp - 3];
          this.state = op.getGoto(pp, Op, !0)
        }
        for (; this.stack.length > xp;) this.stack.pop();
        this.reduceContext(Op, Lp)
      }
      storeNode(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == pp && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let pp = this,
            Op = this.buffer.length;
          if (0 == Op && pp.parent && (Op = pp.bufferBase - pp.parent.bufferBase, pp = pp.parent), Op > 0 && 0 == pp.buffer[Op - 4] && pp.buffer[Op - 1] > -1) {
            if (ip == cp) return;
            if (pp.buffer[Op - 2] >= ip) return void(pp.buffer[Op - 2] = cp)
          }
        }
        if (op && this.pos != cp) {
          let op = this.buffer.length;
          if (op > 0 && (0 != this.buffer[op - 4] || this.buffer[op - 1] < 0)) {
            let pp = !1;
            for (let ip = op; ip > 0 && this.buffer[ip - 2] > cp; ip -= 4)
              if (this.buffer[ip - 1] >= 0) {
                pp = !0;
                break
              } if (pp)
              for (; op > 0 && this.buffer[op - 2] > cp;) this.buffer[op] = this.buffer[op - 4], this.buffer[op + 1] = this.buffer[op - 3], this.buffer[op + 2] = this.buffer[op - 2], this.buffer[op + 3] = this.buffer[op - 1], op -= 4, Op > 4 && (Op -= 4)
          }
          this.buffer[op] = pp, this.buffer[op + 1] = ip, this.buffer[op + 2] = cp, this.buffer[op + 3] = Op
        } else this.buffer.push(pp, ip, cp, Op)
      }
      shift(pp, ip, cp, Op) {
        if (131072 & pp) this.pushState(65535 & pp, this.pos);
        else if (0 == (262144 & pp)) {
          let op = pp,
            {
              parser: Ip
            } = this.p;
          this.pos = Op;
          let Sp = Ip.stateFlag(op, 1);
          !Sp && (Op > cp || ip <= Ip.maxNode) && (this.reducePos = Op), this.pushState(op, Sp ? cp : Math.min(cp, this.reducePos)), this.shiftContext(ip, cp), ip <= Ip.maxNode && this.buffer.push(ip, cp, Op, 4)
        } else this.pos = Op, this.shiftContext(ip, cp), ip <= this.p.parser.maxNode && this.buffer.push(ip, cp, Op, 4)
      }
      apply(pp, ip, cp, Op) {
        65536 & pp ? this.reduce(pp) : this.shift(pp, ip, cp, Op)
      }
      useNode(pp, ip) {
        let cp = this.p.reused.length - 1;
        (cp < 0 || this.p.reused[cp] != pp) && (this.p.reused.push(pp), cp++);
        let Op = this.pos;
        this.reducePos = this.pos = Op + pp.length, this.pushState(ip, Op), this.buffer.push(cp, Op, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, pp, this, this.p.stream.reset(this.pos - pp.length)))
      }
      split() {
        let pp = this,
          ip = pp.buffer.length;
        for (; ip > 0 && pp.buffer[ip - 2] > pp.reducePos;) ip -= 4;
        let cp = pp.buffer.slice(ip),
          Op = pp.bufferBase + ip;
        for (; pp && Op == pp.bufferBase;) pp = pp.parent;
        return new op(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, cp, Op, this.curContext, this.lookAhead, pp)
      }
      recoverByDelete(pp, ip) {
        let cp = pp <= this.p.parser.maxNode;
        cp && this.storeNode(pp, this.pos, ip, 4), this.storeNode(0, this.pos, ip, cp ? 8 : 4), this.pos = this.reducePos = ip, this.score -= 190
      }
      canShift(pp) {
        for (let ip = new Sp(this);;) {
          let cp = this.p.parser.stateSlot(ip.state, 4) || this.p.parser.hasAction(ip.state, pp);
          if (0 == cp) return !1;
          if (0 == (65536 & cp)) return !0;
          ip.reduce(cp)
        }
      }
      recoverByInsert(pp) {
        if (this.stack.length >= 300) return [];
        let ip = this.p.parser.nextStates(this.state);
        if (ip.length > 8 || this.stack.length >= 120) {
          let cp = [];
          for (let Op, op = 0; op < ip.length; op += 2)(Op = ip[op + 1]) != this.state && this.p.parser.hasAction(Op, pp) && cp.push(ip[op], Op);
          if (this.stack.length < 120)
            for (let pp = 0; cp.length < 8 && pp < ip.length; pp += 2) {
              let Op = ip[pp + 1];
              cp.some(((pp, ip) => 1 & ip && pp == Op)) || cp.push(ip[pp], Op)
            }
          ip = cp
        }
        let cp = [];
        for (let Op = 0; Op < ip.length && cp.length < 4; Op += 2) {
          let pp = ip[Op + 1];
          if (pp == this.state) continue;
          let op = this.split();
          op.pushState(pp, this.pos), op.storeNode(0, op.pos, op.pos, 4, !0), op.shiftContext(ip[Op], this.pos), op.reducePos = this.pos, op.score -= 200, cp.push(op)
        }
        return cp
      }
      forceReduce() {
        let {
          parser: pp
        } = this.p, ip = pp.stateSlot(this.state, 5);
        if (0 == (65536 & ip)) return !1;
        if (!pp.validAction(this.state, ip)) {
          let cp = ip >> 19,
            Op = 65535 & ip,
            op = this.stack.length - 3 * cp;
          if (op < 0 || pp.getGoto(this.stack[op], Op, !1) < 0) {
            let pp = this.findForcedReduction();
            if (null == pp) return !1;
            ip = pp
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(ip), !0
      }
      findForcedReduction() {
        let {
          parser: pp
        } = this.p, ip = [], cp = (Op, op) => {
          if (!ip.includes(Op)) return ip.push(Op), pp.allActions(Op, (ip => {
            if (393216 & ip);
            else if (65536 & ip) {
              let cp = (ip >> 19) - op;
              if (cp > 1) {
                let Op = 65535 & ip,
                  op = this.stack.length - 3 * cp;
                if (op >= 0 && pp.getGoto(this.stack[op], Op, !1) >= 0) return cp << 19 | 65536 | Op
              }
            } else {
              let pp = cp(ip, op + 1);
              if (null != pp) return pp
            }
          }))
        };
        return cp(this.state, 0)
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
          parser: pp
        } = this.p;
        return 65535 == pp.data[pp.stateSlot(this.state, 1)] && !pp.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(pp) {
        if (this.state != pp.state || this.stack.length != pp.stack.length) return !1;
        for (let ip = 0; ip < this.stack.length; ip += 3)
          if (this.stack[ip] != pp.stack[ip]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(pp) {
        return this.p.parser.dialect.flags[pp]
      }
      shiftContext(pp, ip) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, pp, this, this.p.stream.reset(ip)))
      }
      reduceContext(pp, ip) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, pp, this, this.p.stream.reset(ip)))
      }
      emitContext() {
        let pp = this.buffer.length - 1;
        (pp < 0 || -3 != this.buffer[pp]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let pp = this.buffer.length - 1;
        (pp < 0 || -4 != this.buffer[pp]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(pp) {
        if (pp != this.curContext.context) {
          let ip = new Ip(this.curContext.tracker, pp);
          ip.hash != this.curContext.hash && this.emitContext(), this.curContext = ip
        }
      }
      setLookAhead(pp) {
        return !(pp <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = pp, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Ip {
      constructor(pp, ip) {
        this.tracker = pp, this.context = ip, this.hash = pp.strict ? pp.hash(ip) : 0
      }
    }
    class Sp {
      constructor(pp) {
        this.start = pp, this.state = pp.state, this.stack = pp.stack, this.base = this.stack.length
      }
      reduce(pp) {
        let ip = 65535 & pp,
          cp = pp >> 19;
        0 == cp ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (cp - 1);
        let Op = this.start.p.parser.getGoto(this.stack[this.base - 3], ip, !0);
        this.state = Op
      }
    }
    class xp {
      constructor(pp, ip, cp) {
        this.stack = pp, this.pos = ip, this.index = cp, this.buffer = pp.buffer, 0 == this.index && this.maybeNext()
      }
      static create(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.bufferBase + pp.buffer.length;
        return new xp(pp, ip, ip - pp.bufferBase)
      }
      maybeNext() {
        let pp = this.stack.parent;
        null != pp && (this.index = this.stack.bufferBase - pp.bufferBase, this.stack = pp, this.buffer = pp.buffer)
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
        return new xp(this.stack, this.pos, this.index)
      }
    }

    function Lp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof pp) return pp;
      let cp = null;
      for (let Op = 0, op = 0; Op < pp.length;) {
        let Ip = 0;
        for (;;) {
          let ip = pp.charCodeAt(Op++),
            cp = !1;
          if (126 == ip) {
            Ip = 65535;
            break
          }
          ip >= 92 && ip--, ip >= 34 && ip--;
          let op = ip - 32;
          if (op >= 46 && (op -= 46, cp = !0), Ip += op, cp) break;
          Ip *= 46
        }
        cp ? cp[op++] = Ip : cp = new ip(Ip)
      }
      return cp
    }
    class Yp {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Dp = new Yp;
    class Ap {
      constructor(pp, ip) {
        this.input = pp, this.By = ip, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Dp, this.rangeIndex = 0, this.pos = this.chunkPos = ip[0].from, this.range = ip[0], this.end = ip[ip.length - 1].to, this.readNext()
      }
      resolveOffset(pp, ip) {
        let cp = this.range,
          Op = this.rangeIndex,
          op = this.pos + pp;
        for (; op < cp.from;) {
          if (!Op) return null;
          let pp = this.By[--Op];
          op -= cp.from - pp.to, cp = pp
        }
        for (; ip < 0 ? op > cp.to : op >= cp.to;) {
          if (Op == this.By.length - 1) return null;
          let pp = this.By[++Op];
          op += pp.from - cp.to, cp = pp
        }
        return op
      }
      clipPos(pp) {
        if (pp >= this.range.from && pp < this.range.to) return pp;
        for (let ip of this.By)
          if (ip.to > pp) return Math.max(pp, ip.from);
        return this.end
      }
      peek(pp) {
        let ip, cp, Op = this.chunkOff + pp;
        if (Op >= 0 && Op < this.chunk.length) ip = this.pos + pp, cp = this.chunk.charCodeAt(Op);
        else {
          let Op = this.resolveOffset(pp, 1);
          if (null == Op) return -1;
          if (ip = Op, ip >= this.chunk2Pos && ip < this.chunk2Pos + this.chunk2.length) cp = this.chunk2.charCodeAt(ip - this.chunk2Pos);
          else {
            let pp = this.rangeIndex,
              Op = this.range;
            for (; Op.to <= ip;) Op = this.By[++pp];
            this.chunk2 = this.input.chunk(this.chunk2Pos = ip), ip + this.chunk2.length > Op.to && (this.chunk2 = this.chunk2.slice(0, Op.to - ip)), cp = this.chunk2.charCodeAt(0)
          }
        }
        return ip >= this.token.lookAhead && (this.token.lookAhead = ip + 1), cp
      }
      acceptToken(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = ip ? this.resolveOffset(ip, -1) : this.pos;
        if (null == cp || cp < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = pp, this.token.end = cp
      }
      acceptTokenTo(pp, ip) {
        this.token.value = pp, this.token.end = ip
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: pp,
            chunkPos: ip
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = pp, this.chunk2Pos = ip, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let pp = this.input.chunk(this.pos),
            ip = this.pos + pp.length;
          this.chunk = ip > this.range.to ? pp.slice(0, this.range.to - this.pos) : pp, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += pp; this.pos + pp >= this.range.to;) {
          if (this.rangeIndex == this.By.length - 1) return this.setDone();
          pp -= this.range.to - this.pos, this.range = this.By[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += pp, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.By[this.rangeIndex = this.By.length - 1], this.chunk = "", this.next = -1
      }
      reset(pp, ip) {
        if (ip ? (this.token = ip, ip.start = pp, ip.lookAhead = pp + 1, ip.value = ip.extended = -1) : this.token = Dp, this.pos != pp) {
          if (this.pos = pp, pp == this.end) return this.setDone(), this;
          for (; pp < this.range.from;) this.range = this.By[--this.rangeIndex];
          for (; pp >= this.range.to;) this.range = this.By[++this.rangeIndex];
          pp >= this.chunkPos && pp < this.chunkPos + this.chunk.length ? this.chunkOff = pp - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(pp, ip) {
        if (pp >= this.chunkPos && ip <= this.chunkPos + this.chunk.length) return this.chunk.slice(pp - this.chunkPos, ip - this.chunkPos);
        if (pp >= this.chunk2Pos && ip <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(pp - this.chunk2Pos, ip - this.chunk2Pos);
        if (pp >= this.range.from && ip <= this.range.to) return this.input.read(pp, ip);
        let cp = "";
        for (let Op of this.By) {
          if (Op.from >= ip) break;
          Op.to > pp && (cp += this.input.read(Math.max(Op.from, pp), Math.min(Op.to, ip)))
        }
        return cp
      }
    }
    class Pp {
      constructor(pp, ip) {
        this.data = pp, this.id = ip
      }
      token(pp, ip) {
        let {
          parser: cp
        } = ip.p;
        Up(this.data, pp, ip, this.id, cp.data, cp.tokenPrecTable)
      }
    }
    Pp.prototype.contextual = Pp.prototype.fallback = Pp.prototype.extend = !1;
    class Wp {
      constructor(pp, ip, cp) {
        this.precTable = ip, this.elseToken = cp, this.data = "string" == typeof pp ? Lp(pp) : pp
      }
      token(pp, ip) {
        let cp = pp.pos,
          Op = 0;
        for (;;) {
          let cp = pp.next < 0,
            op = pp.resolveOffset(1, 1);
          if (Up(this.data, pp, ip, 0, this.data, this.precTable), pp.token.value > -1) break;
          if (null == this.elseToken) return;
          if (cp || Op++, null == op) break;
          pp.reset(op, pp.token)
        }
        Op && (pp.reset(cp, pp.token), pp.acceptToken(this.elseToken, Op))
      }
    }
    Wp.prototype.contextual = Pp.prototype.fallback = Pp.prototype.extend = !1;
    class yp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = pp, this.contextual = !!ip.contextual, this.fallback = !!ip.fallback, this.extend = !!ip.extend
      }
    }

    function Up(pp, ip, cp, Op, op, Ip) {
      let Sp = 0,
        xp = 1 << Op,
        {
          dialect: Lp
        } = cp.p.parser;
      pp: for (; 0 != (xp & pp[Sp]);) {
        let cp = pp[Sp + 1];
        for (let Ap = Sp + 3; Ap < cp; Ap += 2)
          if ((pp[Ap + 1] & xp) > 0) {
            let cp = pp[Ap];
            if (Lp.allows(cp) && (-1 == ip.token.value || ip.token.value == cp || vp(cp, ip.token.value, op, Ip))) {
              ip.acceptToken(cp);
              break
            }
          } let Op = ip.next,
          Yp = 0,
          Dp = pp[Sp + 2];
        if (!(ip.next < 0 && Dp > Yp && 65535 == pp[cp + 3 * Dp - 3])) {
          for (; Yp < Dp;) {
            let op = Yp + Dp >> 1,
              Ip = cp + op + (op << 1),
              xp = pp[Ip],
              Lp = pp[Ip + 1] || 65536;
            if (Op < xp) Dp = op;
            else {
              if (!(Op >= Lp)) {
                Sp = pp[Ip + 2], ip.advance();
                continue pp
              }
              Yp = op + 1
            }
          }
          break
        }
        Sp = pp[cp + 3 * Dp - 1]
      }
    }

    function wp(pp, ip, cp) {
      for (let Op, op = ip; 65535 != (Op = pp[op]); op++)
        if (Op == cp) return op - ip;
      return -1
    }

    function vp(pp, ip, cp, Op) {
      let op = wp(cp, Op, ip);
      return op < 0 || wp(cp, Op, pp) < op
    }
    const tp = "undefined" != typeof process && {
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
    let Hp = null;

    function dp(pp, ip, cp) {
      let op = pp.cursor(Op.h.IncludeAnonymous);
      for (op.moveTo(ip);;)
        if (!(cp < 0 ? op.childBefore(ip) : op.childAfter(ip)))
          for (;;) {
            if ((cp < 0 ? op.to < ip : op.from > ip) && !op.type.isError) return cp < 0 ? Math.max(0, Math.min(op.to - 1, ip - 25)) : Math.min(pp.length, Math.max(op.from + 1, ip + 25));
            if (cp < 0 ? op.prevSibling() : op.nextSibling()) break;
            if (!op.parent()) return cp < 0 ? 0 : pp.length
          }
    }
    class ep {
      constructor(pp, ip) {
        this.fragments = pp, this.nodeSet = ip, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let pp = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (pp) {
          for (this.safeFrom = pp.openStart ? dp(pp.tree, pp.from + pp.offset, 1) - pp.offset : pp.from, this.safeTo = pp.openEnd ? dp(pp.tree, pp.to + pp.offset, -1) - pp.offset : pp.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(pp.tree), this.start.push(-pp.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(pp) {
        if (pp < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= pp;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let ip = this.trees.length - 1;
          if (ip < 0) return this.nextFragment(), null;
          let cp = this.trees[ip],
            op = this.index[ip];
          if (op == cp.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Ip = cp.children[op],
            Sp = this.start[ip] + cp.positions[op];
          if (Sp > pp) return this.nextStart = Sp, null;
          if (Ip instanceof Op.w) {
            if (Sp == pp) {
              if (Sp < this.safeFrom) return null;
              let pp = Sp + Ip.length;
              if (pp <= this.safeTo) {
                let ip = Ip.prop(Op.j.lookAhead);
                if (!ip || pp + ip < this.fragment.to) return Ip
              }
            }
            this.index[ip]++, Sp + Ip.length >= Math.max(this.safeFrom, pp) && (this.trees.push(Ip), this.start.push(Sp), this.index.push(0))
          } else this.index[ip]++, this.nextStart = Sp + Ip.length
        }
      }
    }
    class jp {
      constructor(pp, ip) {
        this.stream = ip, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = pp.tokenizers.map((pp => new Yp))
      }
      getActions(pp) {
        let ip = 0,
          cp = null,
          {
            parser: Op
          } = pp.p,
          {
            tokenizers: op
          } = Op,
          Ip = Op.stateSlot(pp.state, 3),
          Sp = pp.curContext ? pp.curContext.hash : 0,
          xp = 0;
        for (let Lp = 0; Lp < op.length; Lp++) {
          if (0 == (1 << Lp & Ip)) continue;
          let Op = op[Lp],
            Yp = this.tokens[Lp];
          if ((!cp || Op.fallback) && ((Op.contextual || Yp.start != pp.pos || Yp.mask != Ip || Yp.context != Sp) && (this.updateCachedToken(Yp, Op, pp), Yp.mask = Ip, Yp.context = Sp), Yp.lookAhead > Yp.end + 25 && (xp = Math.max(Yp.lookAhead, xp)), 0 != Yp.value)) {
            let op = ip;
            if (Yp.extended > -1 && (ip = this.addActions(pp, Yp.extended, Yp.end, ip)), ip = this.addActions(pp, Yp.value, Yp.end, ip), !Op.extend && (cp = Yp, ip > op)) break
          }
        }
        for (; this.actions.length > ip;) this.actions.pop();
        return xp && pp.setLookAhead(xp), cp || pp.pos != this.stream.end || (cp = new Yp, cp.value = pp.p.parser.eofTerm, cp.start = cp.end = pp.pos, ip = this.addActions(pp, cp.value, cp.end, ip)), this.mainToken = cp, this.actions
      }
      getMainToken(pp) {
        if (this.mainToken) return this.mainToken;
        let ip = new Yp,
          {
            pos: cp,
            p: Op
          } = pp;
        return ip.start = cp, ip.end = Math.min(cp + 1, Op.stream.end), ip.value = cp == Op.stream.end ? Op.parser.eofTerm : 0, ip
      }
      updateCachedToken(pp, ip, cp) {
        let Op = this.stream.clipPos(cp.pos);
        if (ip.token(this.stream.reset(Op, pp), cp), pp.value > -1) {
          let {
            parser: ip
          } = cp.p;
          for (let Op = 0; Op < ip.specialized.length; Op++)
            if (ip.specialized[Op] == pp.value) {
              let op = ip.specializers[Op](this.stream.read(pp.start, pp.end), cp);
              if (op >= 0 && cp.p.parser.dialect.allows(op >> 1)) {
                0 == (1 & op) ? pp.value = op >> 1 : pp.extended = op >> 1;
                break
              }
            }
        } else pp.value = 0, pp.end = this.stream.clipPos(Op + 1)
      }
      putAction(pp, ip, cp, Op) {
        for (let op = 0; op < Op; op += 3)
          if (this.actions[op] == pp) return Op;
        return this.actions[Op++] = pp, this.actions[Op++] = ip, this.actions[Op++] = cp, Op
      }
      addActions(pp, ip, cp, Op) {
        let {
          state: op
        } = pp, {
          parser: Ip
        } = pp.p, {
          data: Sp
        } = Ip;
        for (let xp = 0; xp < 2; xp++)
          for (let pp = Ip.stateSlot(op, xp ? 2 : 1);; pp += 3) {
            if (65535 == Sp[pp]) {
              if (1 != Sp[pp + 1]) {
                0 == Op && 2 == Sp[pp + 1] && (Op = this.putAction(Cp(Sp, pp + 2), ip, cp, Op));
                break
              }
              pp = Cp(Sp, pp + 2)
            }
            Sp[pp] == ip && (Op = this.putAction(Cp(Sp, pp + 1), ip, cp, Op))
          }
        return Op
      }
    }
    class kp {
      constructor(pp, ip, cp, Op) {
        this.parser = pp, this.input = ip, this.By = Op, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Ap(ip, Op), this.tokens = new jp(pp, this.stream), this.topTerm = pp.top[1];
        let {
          from: Ip
        } = Op[0];
        this.stacks = [op.start(this, pp.top[0], Ip)], this.fragments = cp.length && this.stream.end - Ip > 4 * pp.bufferLength ? new ep(cp, pp.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let pp, ip, cp = this.stacks,
          Op = this.minStackPos,
          op = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == cp.length) {
          let [pp] = cp;
          for (; pp.forceReduce() && pp.stack.length && pp.stack[pp.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Ip = 0; Ip < cp.length; Ip++) {
          let Sp = cp[Ip];
          for (;;) {
            if (this.tokens.mainToken = null, Sp.pos > Op) op.push(Sp);
            else {
              if (this.advanceStack(Sp, op, cp)) continue;
              {
                pp || (pp = [], ip = []), pp.push(Sp);
                let cp = this.tokens.getMainToken(Sp);
                ip.push(cp.value, cp.end)
              }
            }
            break
          }
        }
        if (!op.length) {
          let ip = pp && function(pp) {
            let ip = null;
            for (let cp of pp) {
              let pp = cp.p.stoppedAt;
              (cp.pos == cp.p.stream.end || null != pp && cp.pos > pp) && cp.p.parser.stateFlag(cp.state, 2) && (!ip || ip.score < cp.score) && (ip = cp)
            }
            return ip
          }(pp);
          if (ip) return tp && console.log("Finish with " + this.stackID(ip)), this.stackToTree(ip);
          if (this.parser.strict) throw tp && pp && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Op);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && pp) {
          let cp = null != this.stoppedAt && pp[0].pos > this.stoppedAt ? pp[0] : this.runRecovery(pp, ip, op);
          if (cp) return tp && console.log("Force-finish " + this.stackID(cp)), this.stackToTree(cp.forceAll())
        }
        if (this.recovering) {
          let pp = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (op.length > pp)
            for (op.sort(((pp, ip) => ip.score - pp.score)); op.length > pp;) op.pop();
          op.some((pp => pp.reducePos > Op)) && this.recovering--
        } else if (op.length > 1) {
          pp: for (let pp = 0; pp < op.length - 1; pp++) {
            let ip = op[pp];
            for (let cp = pp + 1; cp < op.length; cp++) {
              let Op = op[cp];
              if (ip.sameState(Op) || ip.buffer.length > 500 && Op.buffer.length > 500) {
                if (!((ip.score - Op.score || ip.buffer.length - Op.buffer.length) > 0)) {
                  op.splice(pp--, 1);
                  continue pp
                }
                op.splice(cp--, 1)
              }
            }
          }
          op.length > 12 && (op.sort(((pp, ip) => ip.score - pp.score)), op.splice(12, op.length - 12))
        }
        this.minStackPos = op[0].pos;
        for (let Ip = 1; Ip < op.length; Ip++) op[Ip].pos < this.minStackPos && (this.minStackPos = op[Ip].pos);
        return null
      }
      stopAt(pp) {
        if (null != this.stoppedAt && this.stoppedAt < pp) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = pp
      }
      advanceStack(pp, ip, cp) {
        let op = pp.pos,
          {
            parser: Ip
          } = this,
          Sp = tp ? this.stackID(pp) + " -> " : "";
        if (null != this.stoppedAt && op > this.stoppedAt) return pp.forceReduce() ? pp : null;
        if (this.fragments) {
          let ip = pp.curContext && pp.curContext.tracker.strict,
            cp = ip ? pp.curContext.hash : 0;
          for (let xp = this.fragments.nodeAt(op); xp;) {
            let op = this.parser.nodeSet.types[xp.type.id] == xp.type ? Ip.getGoto(pp.state, xp.type.id) : -1;
            if (op > -1 && xp.length && (!ip || (xp.prop(Op.j.contextHash) || 0) == cp)) return pp.useNode(xp, op), tp && console.log(Sp + this.stackID(pp) + ` (via reuse of ${Ip.getName(xp.type.id)})`), !0;
            if (!(xp instanceof Op.w) || 0 == xp.children.length || xp.positions[0] > 0) break;
            let Lp = xp.children[0];
            if (!(Lp instanceof Op.w && 0 == xp.positions[0])) break;
            xp = Lp
          }
        }
        let xp = Ip.stateSlot(pp.state, 4);
        if (xp > 0) return pp.reduce(xp), tp && console.log(Sp + this.stackID(pp) + ` (via always-reduce ${Ip.getName(65535&xp)})`), !0;
        if (pp.stack.length >= 8400)
          for (; pp.stack.length > 6e3 && pp.forceReduce(););
        let Lp = this.tokens.getActions(pp);
        for (let Op = 0; Op < Lp.length;) {
          let xp = Lp[Op++],
            Yp = Lp[Op++],
            Dp = Lp[Op++],
            Ap = Op == Lp.length || !cp,
            Pp = Ap ? pp : pp.split(),
            Wp = this.tokens.mainToken;
          if (Pp.apply(xp, Yp, Wp ? Wp.start : Pp.pos, Dp), tp && console.log(Sp + this.stackID(Pp) + ` (via ${0==(65536&xp)?"shift":`reduce of ${Ip.getName(65535&xp)}`} for ${Ip.getName(Yp)} @ ${op}${Pp==pp?"":", split"})`), Ap) return !0;
          Pp.pos > op ? ip.push(Pp) : cp.push(Pp)
        }
        return !1
      }
      advanceFully(pp, ip) {
        let cp = pp.pos;
        for (;;) {
          if (!this.advanceStack(pp, null, null)) return !1;
          if (pp.pos > cp) return mp(pp, ip), !0
        }
      }
      runRecovery(pp, ip, cp) {
        let Op = null,
          op = !1;
        for (let Ip = 0; Ip < pp.length; Ip++) {
          let Sp = pp[Ip],
            xp = ip[Ip << 1],
            Lp = ip[1 + (Ip << 1)],
            Yp = tp ? this.stackID(Sp) + " -> " : "";
          if (Sp.deadEnd) {
            if (op) continue;
            if (op = !0, Sp.restart(), tp && console.log(Yp + this.stackID(Sp) + " (restarted)"), this.advanceFully(Sp, cp)) continue
          }
          let Dp = Sp.split(),
            Ap = Yp;
          for (let pp = 0; pp < 10 && Dp.forceReduce(); pp++) {
            if (tp && console.log(Ap + this.stackID(Dp) + " (via force-reduce)"), this.advanceFully(Dp, cp)) break;
            tp && (Ap = this.stackID(Dp) + " -> ")
          }
          for (let pp of Sp.recoverByInsert(xp)) tp && console.log(Yp + this.stackID(pp) + " (via recover-insert)"), this.advanceFully(pp, cp);
          this.stream.end > Sp.pos ? (Lp == Sp.pos && (Lp++, xp = 0), Sp.recoverByDelete(xp, Lp), tp && console.log(Yp + this.stackID(Sp) + ` (via recover-delete ${this.parser.getName(xp)})`), mp(Sp, cp)) : (!Op || Op.score < Dp.score) && (Op = Dp)
        }
        return Op
      }
      stackToTree(pp) {
        return pp.close(), Op.w.build({
          buffer: xp.create(pp),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.By[0].from,
          length: pp.pos - this.By[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(pp) {
        let ip = (Hp || (Hp = new WeakMap)).get(pp);
        return ip || Hp.set(pp, ip = String.fromCodePoint(this.nextStackID++)), ip + pp
      }
    }

    function mp(pp, ip) {
      for (let cp = 0; cp < ip.length; cp++) {
        let Op = ip[cp];
        if (Op.pos == pp.pos && Op.sameState(pp)) return void(ip[cp].score < pp.score && (ip[cp] = pp))
      }
      ip.push(pp)
    }
    class Rp {
      constructor(pp, ip, cp) {
        this.source = pp, this.flags = ip, this.disabled = cp
      }
      allows(pp) {
        return !this.disabled || 0 == this.disabled[pp]
      }
    }
    const qp = pp => pp;
    class Mp extends Op.s {
      constructor(pp) {
        if (super(), this.wrappers = [], 14 != pp.version) throw new RangeError(`Parser version (${pp.version}) doesn't match runtime version (14)`);
        let ip = pp.nodeNames.split(" ");
        this.minRepeatTerm = ip.length;
        for (let Op = 0; Op < pp.repeatNodeCount; Op++) ip.push("");
        let cp = Object.keys(pp.topRules).map((ip => pp.topRules[ip][1])),
          op = [];
        for (let Op = 0; Op < ip.length; Op++) op.push([]);

        function Ip(pp, ip, cp) {
          op[pp].push([ip, ip.deserialize(String(cp))])
        }
        if (pp.nodeProps)
          for (let xp of pp.nodeProps) {
            let pp = xp[0];
            "string" == typeof pp && (pp = Op.j[pp]);
            for (let ip = 1; ip < xp.length;) {
              let cp = xp[ip++];
              if (cp >= 0) Ip(cp, pp, xp[ip++]);
              else {
                let Op = xp[ip + -cp];
                for (let op = -cp; op > 0; op--) Ip(xp[ip++], pp, Op);
                ip++
              }
            }
          }
        this.nodeSet = new Op.m(ip.map(((ip, Ip) => Op.p.define({
          name: Ip >= this.minRepeatTerm ? void 0 : ip,
          id: Ip,
          props: op[Ip],
          top: cp.indexOf(Ip) > -1,
          error: 0 == Ip,
          skipped: pp.skippedNodes && pp.skippedNodes.indexOf(Ip) > -1
        })))), pp.propSources && (this.nodeSet = this.nodeSet.extend(...pp.propSources)), this.strict = !1, this.bufferLength = Op.e;
        let Sp = Lp(pp.tokenData);
        this.context = pp.context, this.specializerSpecs = pp.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Op = 0; Op < this.specializerSpecs.length; Op++) this.specialized[Op] = this.specializerSpecs[Op].term;
        this.specializers = this.specializerSpecs.map(Ep), this.states = Lp(pp.states, Uint32Array), this.data = Lp(pp.stateData), this.goto = Lp(pp.goto), this.maxTerm = pp.maxTerm, this.tokenizers = pp.tokenizers.map((pp => "number" == typeof pp ? new Pp(Sp, pp) : pp)), this.topRules = pp.topRules, this.dialects = pp.dialects || {}, this.dynamicPrecedences = pp.dynamicPrecedences || null, this.tokenPrecTable = pp.tokenPrec, this.termNames = pp.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(pp, ip, cp) {
        let Op = new kp(this, pp, ip, cp);
        for (let op of this.wrappers) Op = op(Op, pp, ip, cp);
        return Op
      }
      getGoto(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = this.goto;
        if (ip >= Op[0]) return -1;
        for (let op = Op[ip + 1];;) {
          let ip = Op[op++],
            Ip = 1 & ip,
            Sp = Op[op++];
          if (Ip && cp) return Sp;
          for (let cp = op + (ip >> 1); op < cp; op++)
            if (Op[op] == pp) return Sp;
          if (Ip) return -1
        }
      }
      hasAction(pp, ip) {
        let cp = this.data;
        for (let Op = 0; Op < 2; Op++)
          for (let op, Ip = this.stateSlot(pp, Op ? 2 : 1);; Ip += 3) {
            if (65535 == (op = cp[Ip])) {
              if (1 != cp[Ip + 1]) {
                if (2 == cp[Ip + 1]) return Cp(cp, Ip + 2);
                break
              }
              op = cp[Ip = Cp(cp, Ip + 2)]
            }
            if (op == ip || 0 == op) return Cp(cp, Ip + 1)
          }
        return 0
      }
      stateSlot(pp, ip) {
        return this.states[6 * pp + ip]
      }
      stateFlag(pp, ip) {
        return (this.stateSlot(pp, 0) & ip) > 0
      }
      validAction(pp, ip) {
        return !!this.allActions(pp, (pp => pp == ip || null))
      }
      allActions(pp, ip) {
        let cp = this.stateSlot(pp, 4),
          Op = cp ? ip(cp) : void 0;
        for (let op = this.stateSlot(pp, 1); null == Op; op += 3) {
          if (65535 == this.data[op]) {
            if (1 != this.data[op + 1]) break;
            op = Cp(this.data, op + 2)
          }
          Op = ip(Cp(this.data, op + 1))
        }
        return Op
      }
      nextStates(pp) {
        let ip = [];
        for (let cp = this.stateSlot(pp, 1);; cp += 3) {
          if (65535 == this.data[cp]) {
            if (1 != this.data[cp + 1]) break;
            cp = Cp(this.data, cp + 2)
          }
          if (0 == (1 & this.data[cp + 2])) {
            let pp = this.data[cp + 1];
            ip.some(((ip, cp) => 1 & cp && ip == pp)) || ip.push(this.data[cp], pp)
          }
        }
        return ip
      }
      configure(pp) {
        let ip = Object.assign(Object.create(Mp.prototype), this);
        if (pp.props && (ip.nodeSet = this.nodeSet.extend(...pp.props)), pp.top) {
          let cp = this.topRules[pp.top];
          if (!cp) throw new RangeError(`Invalid top rule name ${pp.top}`);
          ip.top = cp
        }
        return pp.tokenizers && (ip.tokenizers = this.tokenizers.map((ip => {
          let cp = pp.tokenizers.find((pp => pp.from == ip));
          return cp ? cp.to : ip
        }))), pp.specializers && (ip.specializers = this.specializers.slice(), ip.specializerSpecs = this.specializerSpecs.map(((cp, Op) => {
          let op = pp.specializers.find((pp => pp.from == cp.external));
          if (!op) return cp;
          let Ip = Object.assign(Object.assign({}, cp), {
            external: op.to
          });
          return ip.specializers[Op] = Ep(Ip), Ip
        }))), pp.contextTracker && (ip.context = pp.contextTracker), pp.dialect && (ip.dialect = this.parseDialect(pp.dialect)), null != pp.strict && (ip.strict = pp.strict), pp.wrap && (ip.wrappers = ip.wrappers.concat(pp.wrap)), null != pp.bufferLength && (ip.bufferLength = pp.bufferLength), ip
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(pp) {
        return this.termNames ? this.termNames[pp] : String(pp <= this.maxNode && this.nodeSet.types[pp].name || pp)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(pp) {
        let ip = this.dynamicPrecedences;
        return null == ip ? 0 : ip[pp] || 0
      }
      parseDialect(pp) {
        let ip = Object.keys(this.dialects),
          cp = ip.map((() => !1));
        if (pp)
          for (let op of pp.split(" ")) {
            let pp = ip.indexOf(op);
            pp >= 0 && (cp[pp] = !0)
          }
        let Op = null;
        for (let op = 0; op < ip.length; op++)
          if (!cp[op])
            for (let pp, cp = this.dialects[ip[op]]; 65535 != (pp = this.data[cp++]);)(Op || (Op = new Uint8Array(this.maxTerm + 1)))[pp] = 1;
        return new Rp(pp, cp, Op)
      }
      static deserialize(pp) {
        return new Mp(pp)
      }
    }

    function Cp(pp, ip) {
      return pp[ip] | pp[ip + 1] << 16
    }

    function Ep(pp) {
      if (pp.external) {
        let ip = pp.extend ? 1 : 0;
        return (cp, Op) => pp.external(cp, Op) << 1 | ip
      }
      return pp.get
    }
    var Xp = cp(41583);
    const lp = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Qp = new class {
        constructor(pp) {
          this.start = pp.start, this.shift = pp.shift || qp, this.reduce = pp.reduce || qp, this.reuse = pp.reuse || qp, this.hash = pp.hash || (() => 0), this.strict = !1 !== pp.strict
        }
      }({
        start: !1,
        shift: (pp, ip) => 5 == ip || 6 == ip || 320 == ip ? pp : 321 == ip,
        strict: !1
      }),
      Jp = new yp(((pp, ip) => {
        let {
          next: cp
        } = pp;
        (125 == cp || -1 == cp || ip.context) && pp.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Bp = new yp(((pp, ip) => {
        let cp, {
          next: Op
        } = pp;
        lp.indexOf(Op) > -1 || (47 != Op || 47 != (cp = pp.peek(1)) && 42 != cp) && (125 == Op || 59 == Op || -1 == Op || ip.context || pp.acceptToken(316))
      }), {
        contextual: !0
      }),
      Np = new yp(((pp, ip) => {
        91 != pp.next || ip.context || pp.acceptToken(317)
      }), {
        contextual: !0
      }),
      Tp = new yp(((pp, ip) => {
        let {
          next: cp
        } = pp;
        if (43 == cp || 45 == cp) {
          if (pp.advance(), cp == pp.next) {
            pp.advance();
            let cp = !ip.context && ip.canShift(1);
            pp.acceptToken(cp ? 1 : 2)
          }
        } else 63 == cp && 46 == pp.peek(1) && (pp.advance(), pp.advance(), (pp.next < 48 || pp.next > 57) && pp.acceptToken(3))
      }), {
        contextual: !0
      });

    function fp(pp, ip) {
      return pp >= 65 && pp <= 90 || pp >= 97 && pp <= 122 || 95 == pp || pp >= 192 || !ip && pp >= 48 && pp <= 57
    }
    const bp = new yp(((pp, ip) => {
        if (60 != pp.next || !ip.dialectEnabled(0)) return;
        if (pp.advance(), 47 == pp.next) return;
        let cp = 0;
        for (; lp.indexOf(pp.next) > -1;) pp.advance(), cp++;
        if (fp(pp.next, !0)) {
          for (pp.advance(), cp++; fp(pp.next, !1);) pp.advance(), cp++;
          for (; lp.indexOf(pp.next) > -1;) pp.advance(), cp++;
          if (44 == pp.next) return;
          for (let ip = 0;; ip++) {
            if (7 == ip) {
              if (!fp(pp.next, !0)) return;
              break
            }
            if (pp.next != "extends".charCodeAt(ip)) break;
            pp.advance(), cp++
          }
        }
        pp.acceptToken(4, -cp)
      })),
      hp = (0, Xp.e)({
        "get set async static": Xp.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Xp.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Xp.l.operatorKeyword,
        "let var const using function class extends": Xp.l.definitionKeyword,
        "import export from": Xp.l.moduleKeyword,
        "with debugger new": Xp.l.keyword,
        TemplateString: Xp.l.special(Xp.l.string),
        super: Xp.l.atom,
        BooleanLiteral: Xp.l.bool,
        this: Xp.l.self,
        null: Xp.l.null,
        Star: Xp.l.modifier,
        VariableName: Xp.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Xp.l.function(Xp.l.variableName),
        VariableDefinition: Xp.l.definition(Xp.l.variableName),
        Label: Xp.l.labelName,
        PropertyName: Xp.l.propertyName,
        PrivatePropertyName: Xp.l.special(Xp.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": Xp.l.function(Xp.l.propertyName),
        "FunctionDeclaration/VariableDefinition": Xp.l.function(Xp.l.definition(Xp.l.variableName)),
        "ClassDeclaration/VariableDefinition": Xp.l.definition(Xp.l.className),
        "NewExpression/VariableName": Xp.l.className,
        PropertyDefinition: Xp.l.definition(Xp.l.propertyName),
        PrivatePropertyDefinition: Xp.l.definition(Xp.l.special(Xp.l.propertyName)),
        UpdateOp: Xp.l.updateOperator,
        "LineComment Hashbang": Xp.l.lineComment,
        BlockComment: Xp.l.blockComment,
        Number: Xp.l.number,
        String: Xp.l.string,
        Escape: Xp.l.escape,
        ArithOp: Xp.l.arithmeticOperator,
        LogicOp: Xp.l.logicOperator,
        BitOp: Xp.l.bitwiseOperator,
        CompareOp: Xp.l.compareOperator,
        RegExp: Xp.l.regexp,
        Equals: Xp.l.definitionOperator,
        Arrow: Xp.l.function(Xp.l.punctuation),
        ": Spread": Xp.l.punctuation,
        "( )": Xp.l.paren,
        "[ ]": Xp.l.squareBracket,
        "{ }": Xp.l.brace,
        "InterpolationStart InterpolationEnd": Xp.l.special(Xp.l.brace),
        ".": Xp.l.derefOperator,
        ", ;": Xp.l.separator,
        "@": Xp.l.meta,
        TypeName: Xp.l.typeName,
        TypeDefinition: Xp.l.definition(Xp.l.typeName),
        "type enum interface implements namespace module declare": Xp.l.definitionKeyword,
        "abstract global Privacy readonly override": Xp.l.modifier,
        "is keyof unique infer asserts": Xp.l.operatorKeyword,
        JSXAttributeValue: Xp.l.attributeValue,
        JSXText: Xp.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Xp.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Xp.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Xp.l.attributeName,
        "JSXBuiltin/JSXIdentifier": Xp.l.standard(Xp.l.tagName)
      }),
      ap = {
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
      np = {
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
      Fp = {
        __proto__: null,
        "<": 193
      },
      gp = Mp.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Qp,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [hp],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Bp, Np, Tp, bp, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Jp, new Wp("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Wp("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: pp => ap[pp] || -1
        }, {
          term: 343,
          get: pp => np[pp] || -1
        }, {
          term: 95,
          get: pp => Fp[pp] || -1
        }],
        tokenPrec: 15201
      });
    var Gp = cp(41566),
      rp = cp(41548),
      Zp = cp(41556),
      zp = cp(41541);
    const sp = [(0, zp.u)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, zp.u)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, zp.u)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, zp.u)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, zp.u)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, zp.u)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, zp.u)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, zp.u)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, zp.u)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, zp.u)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, zp.u)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Kp = sp.concat([(0, zp.u)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, zp.u)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, zp.u)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Vp = new Op.r,
      ii = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function ci(pp) {
      return (ip, cp) => {
        let Op = ip.node.getChild("VariableDefinition");
        return Op && cp(Op, pp), !0
      }
    }
    const Oi = ["FunctionDeclaration"],
      oi = {
        FunctionDeclaration: ci("function"),
        ClassDeclaration: ci("class"),
        ClassExpression: () => !0,
        EnumDeclaration: ci("constant"),
        TypeAliasDeclaration: ci("type"),
        NamespaceDeclaration: ci("namespace"),
        VariableDefinition(pp, ip) {
          pp.matchContext(Oi) || ip(pp, "variable")
        },
        TypeDefinition(pp, ip) {
          ip(pp, "type")
        },
        __proto__: null
      };

    function Ii(pp, ip) {
      let cp = Vp.get(ip);
      if (cp) return cp;
      let op = [],
        Ip = !0;

      function Sp(ip, cp) {
        let Op = pp.sliceString(ip.from, ip.to);
        op.push({
          label: Op,
          type: cp
        })
      }
      return ip.cursor(Op.h.IncludeAnonymous).iterate((ip => {
        if (Ip) Ip = !1;
        else if (ip.name) {
          let pp = oi[ip.name];
          if (pp && pp(ip, Sp) || ii.has(ip.name)) return !1
        } else if (ip.to - ip.from > 8192) {
          for (let cp of Ii(pp, ip.node)) op.push(cp);
          return !1
        }
      })), Vp.set(ip, op), op
    }
    const Si = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      xi = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Li(pp) {
      let ip = (0, Gp.kb)(pp.state).resolveInner(pp.pos, -1);
      if (xi.indexOf(ip.name) > -1) return null;
      let cp = "VariableName" == ip.name || ip.to - ip.from < 20 && Si.test(pp.state.sliceDoc(ip.from, ip.to));
      if (!cp && !pp.explicit) return null;
      let Op = [];
      for (let op = ip; op; op = op.parent) ii.has(op.name) && (Op = Op.concat(Ii(pp.state.doc, op)));
      return {
        options: Op,
        from: cp ? ip.from : pp.pos,
        validFor: Si
      }
    }
    const Yi = Gp.h.define({
        name: "javascript",
        parser: gp.configure({
          props: [Gp.N.add({
            IfStatement: (0, Gp.l)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Gp.l)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Gp.t,
            SwitchBody: pp => {
              let ip = pp.textAfter,
                cp = /^\s*\}/.test(ip),
                Op = /^\s*(case|default)\b/.test(ip);
              return pp.baseIndent + (cp ? 0 : Op ? 1 : 2) * pp.unit
            },
            Block: (0, Gp.r)({
              closing: "}"
            }),
            ArrowFunction: pp => pp.baseIndent + pp.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Gp.l)({
              except: /^\s*{/
            }),
            JSXElement(pp) {
              let ip = /^\s*<\//.test(pp.textAfter);
              return pp.lineIndent(pp.node.from) + (ip ? 0 : pp.unit)
            },
            JSXEscape(pp) {
              let ip = /\s*\}/.test(pp.textAfter);
              return pp.lineIndent(pp.node.from) + (ip ? 0 : pp.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": pp => pp.column(pp.node.from) + pp.unit
          }), Gp.G.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Gp.A,
            BlockComment: pp => ({
              from: pp.from + 2,
              to: pp.to - 2
            }),
            JSXElement(pp) {
              let ip = pp.firstChild;
              if (!ip || "JSXSelfClosingTag" == ip.name) return null;
              let cp = pp.lastChild;
              return {
                from: ip.to,
                to: cp.type.isError ? pp.to : cp.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(pp) {
              var ip;
              let cp = null === (ip = pp.firstChild) || void 0 === ip ? void 0 : ip.nextSibling,
                Op = pp.lastChild;
              return !cp || cp.type.isError ? null : {
                from: cp.to,
                to: Op.type.isError ? pp.to : Op.from
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
      Di = {
        test: pp => /^JSX/.test(pp.name),
        facet: (0, Gp.o)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Ai = Yi.configure({
        dialect: "ts"
      }, "typescript"),
      Pi = Yi.configure({
        dialect: "jsx",
        props: [Gp.cb.add((pp => pp.isTop ? [Di] : void 0))]
      }),
      Wi = Yi.configure({
        dialect: "jsx ts",
        props: [Gp.cb.add((pp => pp.isTop ? [Di] : void 0))]
      }, "typescript");
    let yi = pp => ({
      label: pp,
      type: "keyword"
    });
    const Ui = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(yi),
      wi = Ui.concat(["declare", "implements", "private", "protected", "public"].map(yi));

    function vi() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ip = pp.jsx ? pp.typescript ? Wi : Pi : pp.typescript ? Ai : Yi,
        cp = pp.typescript ? Kp.concat(wi) : sp.concat(Ui);
      return new Gp.j(ip, [Yi.data.of({
        autocomplete: (0, zp.r)(xi, (0, zp.l)(cp))
      }), Yi.data.of({
        autocomplete: Li
      }), pp.jsx ? di : []])
    }

    function ti(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.length;
      for (let Op = null === ip || void 0 === ip ? void 0 : ip.firstChild; Op; Op = Op.nextSibling)
        if ("JSXIdentifier" == Op.name || "JSXBuiltin" == Op.name || "JSXNamespacedName" == Op.name || "JSXMemberExpression" == Op.name) return pp.sliceString(Op.from, Math.min(Op.to, cp));
      return ""
    }
    const Hi = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      di = Zp.f.inputHandler.of(((pp, ip, cp, Op, op) => {
        if ((Hi ? pp.composing : pp.compositionStarted) || pp.state.readOnly || ip != cp || ">" != Op && "/" != Op || !Yi.isActiveAt(pp.state, ip, -1)) return !1;
        let Ip = op(),
          {
            state: Sp
          } = Ip,
          xp = Sp.changeByRange((pp => {
            var ip;
            let cp, {
                head: op
              } = pp,
              Ip = (0, Gp.kb)(Sp).resolveInner(op - 1, -1);
            if ("JSXStartTag" == Ip.name && (Ip = Ip.parent), Sp.doc.sliceString(op - 1, op) != Op || "JSXAttributeValue" == Ip.name && Ip.to > op);
            else {
              if (">" == Op && "JSXFragmentTag" == Ip.name) return {
                range: pp,
                changes: {
                  from: op,
                  insert: "</>"
                }
              };
              if ("/" == Op && "JSXStartCloseTag" == Ip.name) {
                let pp = Ip.parent,
                  Op = pp.parent;
                if (Op && pp.from == op - 2 && ((cp = ti(Sp.doc, Op.firstChild, op)) || "JSXFragmentTag" == (null === (ip = Op.firstChild) || void 0 === ip ? void 0 : ip.name))) {
                  let pp = `${cp}>`;
                  return {
                    range: rp.l.cursor(op + pp.length, -1),
                    changes: {
                      from: op,
                      insert: pp
                    }
                  }
                }
              } else if (">" == Op) {
                let ip = function(pp) {
                  for (;;) {
                    if ("JSXOpenTag" == pp.name || "JSXSelfClosingTag" == pp.name || "JSXFragmentTag" == pp.name) return pp;
                    if ("JSXEscape" == pp.name || !pp.parent) return null;
                    pp = pp.parent
                  }
                }(Ip);
                if (ip && "JSXOpenTag" == ip.name && !/^\/?>|^<\//.test(Sp.doc.sliceString(op, op + 2)) && (cp = ti(Sp.doc, ip, op))) return {
                  range: pp,
                  changes: {
                    from: op,
                    insert: `</${cp}>`
                  }
                }
              }
            }
            return {
              range: pp
            }
          }));
        return !xp.changes.empty && (pp.dispatch([Ip, Sp.update(xp, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41566: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => sp,
      D: () => Ai,
      G: () => zp,
      H: () => vp,
      I: () => Xp,
      J: () => Qp,
      N: () => Bp,
      P: () => rp,
      T: () => lp,
      W: () => Ep,
      _: () => gi,
      c: () => ui,
      cb: () => Ap,
      d: () => Jp,
      eb: () => Ri,
      h: () => yp,
      ib: () => wp,
      j: () => Mp,
      k: () => bi,
      kb: () => Up,
      l: () => gp,
      n: () => Ci,
      o: () => Dp,
      r: () => ap,
      t: () => Fp,
      x: () => di
    });
    var Op, op = cp(41575),
      Ip = cp(41548),
      Sp = cp(41556),
      xp = cp(41583),
      Lp = cp(41560);
    const Yp = new op.j;

    function Dp(pp) {
      return Ip.o.define({
        combine: pp ? ip => ip.concat(pp) : void 0
      })
    }
    const Ap = new op.j;
    class Pp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = pp, this.name = Op, Ip.n.prototype.hasOwnProperty("tree") || Object.defineProperty(Ip.n.prototype, "tree", {
          get() {
            return Up(this)
          }
        }), this.parser = ip, this.extension = [qp.of(this), Ip.n.languageData.of(((pp, ip, cp) => {
          let Op = Wp(pp, ip, cp),
            op = Op.type.prop(Yp);
          if (!op) return [];
          let Ip = pp.facet(op),
            Sp = Op.type.prop(Ap);
          if (Sp) {
            let op = Op.resolve(ip - Op.from, cp);
            for (let ip of Sp)
              if (ip.test(op, pp)) {
                let cp = pp.facet(ip.facet);
                return "replace" == ip.type ? cp : cp.concat(Ip)
              }
          }
          return Ip
        }))].concat(cp)
      }
      isActiveAt(pp, ip) {
        return Wp(pp, ip, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Yp) == this.data
      }
      findRegions(pp) {
        let ip = pp.facet(qp);
        if ((null === ip || void 0 === ip ? void 0 : ip.data) == this.data) return [{
          from: 0,
          to: pp.doc.length
        }];
        if (!ip || !ip.allowsNesting) return [];
        let cp = [],
          Op = (pp, ip) => {
            if (pp.prop(Yp) == this.data) return void cp.push({
              from: ip,
              to: ip + pp.length
            });
            let Ip = pp.prop(op.j.mounted);
            if (Ip) {
              if (Ip.tree.prop(Yp) == this.data) {
                if (Ip.overlay)
                  for (let pp of Ip.overlay) cp.push({
                    from: pp.from + ip,
                    to: pp.to + ip
                  });
                else cp.push({
                  from: ip,
                  to: ip + pp.length
                });
                return
              }
              if (Ip.overlay) {
                let pp = cp.length;
                if (Op(Ip.tree, Ip.overlay[0].from + ip), cp.length > pp) return
              }
            }
            for (let cp = 0; cp < pp.children.length; cp++) {
              let Ip = pp.children[cp];
              Ip instanceof op.w && Op(Ip, pp.positions[cp] + ip)
            }
          };
        return Op(Up(pp), 0), cp
      }
      get allowsNesting() {
        return !0
      }
    }

    function Wp(pp, ip, cp) {
      let Op = pp.facet(qp),
        Ip = Up(pp).topNode;
      if (!Op || Op.allowsNesting)
        for (let Sp = Ip; Sp; Sp = Sp.enter(ip, cp, op.h.ExcludeBuffers | op.h.EnterBracketed)) Sp.type.isTop && (Ip = Sp);
      return Ip
    }
    Pp.setState = Ip.C.define();
    class yp extends Pp {
      constructor(pp, ip, cp) {
        super(pp, ip, [], cp), this.parser = ip
      }
      static define(pp) {
        let ip = Dp(pp.languageData);
        return new yp(ip, pp.parser.configure({
          props: [Yp.add((pp => pp.isTop ? ip : void 0))]
        }), pp.name)
      }
      configure(pp, ip) {
        return new yp(this.data, this.parser.configure(pp), ip || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Up(pp) {
      let ip = pp.field(Pp.state, !1);
      return ip ? ip.tree : op.w.empty
    }

    function wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.doc.length;
      var cp;
      return (null === (cp = pp.field(Pp.state, !1)) || void 0 === cp ? void 0 : cp.context.isDone(ip)) || !1
    }

    function vp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.viewport.to,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Op = function(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Op;
          let op = null === (Op = pp.field(Pp.state, !1)) || void 0 === Op ? void 0 : Op.context;
          if (!op) return null;
          let Ip = op.viewport;
          op.updateViewport({
            from: 0,
            to: ip
          });
          let Sp = op.isDone(ip) || op.work(cp, ip) ? op.tree : null;
          return op.updateViewport(Ip), Sp
        }(pp.state, ip, cp);
      return Op != Up(pp.state) && pp.dispatch({}), !!Op
    }
    class tp {
      constructor(pp) {
        this.doc = pp, this.cursorPos = 0, this.string = "", this.cursor = pp.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(pp) {
        return this.string = this.cursor.next(pp - this.cursorPos).value, this.cursorPos = pp + this.string.length, this.cursorPos - this.string.length
      }
      chunk(pp) {
        return this.syncTo(pp), this.string
      }
      get lineChunks() {
        return !0
      }
      read(pp, ip) {
        let cp = this.cursorPos - this.string.length;
        return pp < cp || ip >= this.cursorPos ? this.doc.sliceString(pp, ip) : this.string.slice(pp - cp, ip - cp)
      }
    }
    let Hp = null;
    class dp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0,
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = pp, this.state = ip, this.fragments = cp, this.tree = Op, this.treeLen = op, this.viewport = Ip, this.skipped = Sp, this.scheduleOn = xp, this.parse = null, this.tempSkipped = []
      }
      static create(pp, ip, cp) {
        return new dp(pp, ip, [], op.w.empty, 0, cp, [], null)
      }
      startParse() {
        return this.parser.startParse(new tp(this.state.doc), this.fragments)
      }
      work(pp, ip) {
        return null != ip && ip >= this.state.doc.length && (ip = void 0), this.tree != op.w.empty && this.isDone(null !== ip && void 0 !== ip ? ip : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var cp;
          if ("number" == typeof pp) {
            let ip = Date.now() + pp;
            pp = () => Date.now() > ip
          }
          for (this.parse || (this.parse = this.startParse()), null != ip && (null == this.parse.stoppedAt || this.parse.stoppedAt > ip) && ip < this.state.doc.length && this.parse.stopAt(ip);;) {
            let Op = this.parse.advance();
            if (Op) {
              if (this.fragments = this.withoutTempSkipped(op.u.addTree(Op, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (cp = this.parse.stoppedAt) && void 0 !== cp ? cp : this.state.doc.length, this.tree = Op, this.parse = null, !(this.treeLen < (null !== ip && void 0 !== ip ? ip : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (pp()) return !1
          }
        }))
      }
      takeTree() {
        let pp, ip;
        this.parse && (pp = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > pp) && this.parse.stopAt(pp), this.withContext((() => {
          for (; !(ip = this.parse.advance()););
        })), this.treeLen = pp, this.tree = ip, this.fragments = this.withoutTempSkipped(op.u.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(pp) {
        let ip = Hp;
        Hp = this;
        try {
          return pp()
        } finally {
          Hp = ip
        }
      }
      withoutTempSkipped(pp) {
        for (let ip; ip = this.tempSkipped.pop();) pp = ep(pp, ip.from, ip.to);
        return pp
      }
      changes(pp, ip) {
        let {
          fragments: cp,
          tree: Op,
          treeLen: Ip,
          viewport: Sp,
          skipped: xp
        } = this;
        if (this.takeTree(), !pp.empty) {
          let ip = [];
          if (pp.iterChangedRanges(((pp, cp, Op, op) => ip.push({
              fromA: pp,
              toA: cp,
              fromB: Op,
              toB: op
            }))), cp = op.u.applyChanges(cp, ip), Op = op.w.empty, Ip = 0, Sp = {
              from: pp.mapPos(Sp.from, -1),
              to: pp.mapPos(Sp.to, 1)
            }, this.skipped.length) {
            xp = [];
            for (let ip of this.skipped) {
              let cp = pp.mapPos(ip.from, 1),
                Op = pp.mapPos(ip.to, -1);
              cp < Op && xp.push({
                from: cp,
                to: Op
              })
            }
          }
        }
        return new dp(this.parser, ip, cp, Op, Ip, Sp, xp, this.scheduleOn)
      }
      updateViewport(pp) {
        if (this.viewport.from == pp.from && this.viewport.to == pp.to) return !1;
        this.viewport = pp;
        let ip = this.skipped.length;
        for (let cp = 0; cp < this.skipped.length; cp++) {
          let {
            from: ip,
            to: Op
          } = this.skipped[cp];
          ip < pp.to && Op > pp.from && (this.fragments = ep(this.fragments, ip, Op), this.skipped.splice(cp--, 1))
        }
        return !(this.skipped.length >= ip) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(pp, ip) {
        this.skipped.push({
          from: pp,
          to: ip
        })
      }
      static getSkippingParser(pp) {
        return new class extends op.s {
          createParse(ip, cp, Op) {
            let Ip = Op[0].from,
              Sp = Op[Op.length - 1].to;
            return {
              parsedPos: Ip,
              advance() {
                let ip = Hp;
                if (ip) {
                  for (let pp of Op) ip.tempSkipped.push(pp);
                  pp && (ip.scheduleOn = ip.scheduleOn ? Promise.all([ip.scheduleOn, pp]) : pp)
                }
                return this.parsedPos = Sp, new op.w(op.p.none, [], [], Sp - Ip)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(pp) {
        pp = Math.min(pp, this.state.doc.length);
        let ip = this.fragments;
        return this.treeLen >= pp && ip.length && 0 == ip[0].from && ip[0].to >= pp
      }
      static get() {
        return Hp
      }
    }

    function ep(pp, ip, cp) {
      return op.u.applyChanges(pp, [{
        fromA: ip,
        toA: cp,
        fromB: ip,
        toB: cp
      }])
    }
    class jp {
      constructor(pp) {
        this.context = pp, this.tree = pp.tree
      }
      apply(pp) {
        if (!pp.docChanged && this.tree == this.context.tree) return this;
        let ip = this.context.changes(pp.changes, pp.state),
          cp = this.context.treeLen == pp.startState.doc.length ? void 0 : Math.max(pp.changes.mapPos(this.context.treeLen), ip.viewport.to);
        return ip.work(20, cp) || ip.takeTree(), new jp(ip)
      }
      static init(pp) {
        let ip = Math.min(3e3, pp.doc.length),
          cp = dp.create(pp.facet(qp).parser, pp, {
            from: 0,
            to: ip
          });
        return cp.work(20, ip) || cp.takeTree(), new jp(cp)
      }
    }
    Pp.state = Ip.E.define({
      create: jp.init,
      update(pp, ip) {
        for (let cp of ip.effects)
          if (cp.is(Pp.setState)) return cp.value;
        return ip.startState.facet(qp) != ip.state.facet(qp) ? jp.init(ip.state) : pp.apply(ip)
      }
    });
    let kp = pp => {
      let ip = setTimeout((() => pp()), 500);
      return () => clearTimeout(ip)
    };
    "undefined" != typeof requestIdleCallback && (kp = pp => {
      let ip = -1,
        cp = setTimeout((() => {
          ip = requestIdleCallback(pp, {
            timeout: 400
          })
        }), 100);
      return () => ip < 0 ? clearTimeout(cp) : cancelIdleCallback(ip)
    });
    const mp = "undefined" != typeof navigator && (null === (Op = navigator.scheduling) || void 0 === Op ? void 0 : Op.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Rp = Sp.k.fromClass(class {
        constructor(pp) {
          this.view = pp, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(pp) {
          let ip = this.view.state.field(Pp.state).context;
          (ip.updateViewport(pp.view.viewport) || this.view.viewport.to > ip.treeLen) && this.scheduleWork(), (pp.docChanged || pp.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(ip)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: pp
          } = this.view, ip = pp.field(Pp.state);
          ip.tree == ip.context.tree && ip.context.isDone(pp.doc.length) || (this.working = kp(this.work))
        }
        work(pp) {
          this.working = null;
          let ip = Date.now();
          if (this.chunkEnd < ip && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = ip + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: cp,
            viewport: {
              to: Op
            }
          } = this.view, op = cp.field(Pp.state);
          if (op.tree == op.context.tree && op.context.isDone(Op + 1e5)) return;
          let Ip = Date.now() + Math.min(this.chunkBudget, 100, pp && !mp ? Math.max(25, pp.timeRemaining() - 5) : 1e9),
            Sp = op.context.treeLen < Op && cp.doc.length > Op + 1e3,
            xp = op.context.work((() => mp && mp() || Date.now() > Ip), Op + (Sp ? 0 : 1e5));
          this.chunkBudget -= Date.now() - ip, (xp || this.chunkBudget <= 0) && (op.context.takeTree(), this.view.dispatch({
            effects: Pp.setState.of(new jp(op.context))
          })), this.chunkBudget > 0 && (!xp || Sp) && this.scheduleWork(), this.checkAsyncSchedule(op.context)
        }
        checkAsyncSchedule(pp) {
          pp.scheduleOn && (this.workScheduled++, pp.scheduleOn.then((() => this.scheduleWork())).catch((pp => (0, Sp._)(this.view.state, pp))).then((() => this.workScheduled--)), pp.scheduleOn = null)
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
      qp = Ip.o.define({
        combine: pp => pp.length ? pp[0] : null,
        enables: pp => [Pp.state, Rp, Sp.f.contentAttributes.compute([pp], (ip => {
          let cp = ip.facet(pp);
          return cp && cp.name ? {
            "data-language": cp.name
          } : {}
        }))]
      });
    class Mp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = pp, this.support = ip, this.extension = [pp, ip]
      }
    }
    const Cp = Ip.o.define(),
      Ep = Ip.o.define({
        combine: pp => {
          if (!pp.length) return "  ";
          let ip = pp[0];
          if (!ip || /\S/.test(ip) || Array.from(ip).some((pp => pp != ip[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(pp[0]));
          return ip
        }
      });

    function Xp(pp) {
      let ip = pp.facet(Ep);
      return 9 == ip.charCodeAt(0) ? pp.tabSize * ip.length : ip.length
    }

    function lp(pp, ip) {
      let cp = "",
        Op = pp.tabSize,
        op = pp.facet(Ep)[0];
      if ("\t" == op) {
        for (; ip >= Op;) cp += "\t", ip -= Op;
        op = " "
      }
      for (let Ip = 0; Ip < ip; Ip++) cp += op;
      return cp
    }

    function Qp(pp, ip) {
      pp instanceof Ip.n && (pp = new Jp(pp));
      for (let Op of pp.state.facet(Cp)) {
        let cp = Op(pp, ip);
        if (void 0 !== cp) return cp
      }
      let cp = Up(pp.state);
      return cp.length >= ip ? function(pp, ip, cp) {
        let Op = ip.resolveStack(cp),
          op = ip.resolveInner(cp, -1).resolve(cp, 0).enterUnfinishedNodesBefore(cp);
        if (op != Op.node) {
          let pp = [];
          for (let ip = op; ip && !(ip.from < Op.node.from || ip.to > Op.node.to || ip.from == Op.node.from && ip.type == Op.node.type); ip = ip.parent) pp.push(ip);
          for (let ip = pp.length - 1; ip >= 0; ip--) Op = {
            node: pp[ip],
            next: Op
          }
        }
        return Np(Op, pp, cp)
      }(pp, cp, ip) : null
    }
    class Jp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = pp, this.options = ip, this.unit = Xp(pp)
      }
      lineAt(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = this.state.doc.lineAt(pp),
          {
            simulateBreak: Op,
            simulateDoubleBreak: op
          } = this.options;
        return null != Op && Op >= cp.from && Op <= cp.to ? op && Op == pp ? {
          text: "",
          from: pp
        } : (ip < 0 ? Op < pp : Op <= pp) ? {
          text: cp.text.slice(Op - cp.from),
          from: Op
        } : {
          text: cp.text.slice(0, Op - cp.from),
          from: cp.from
        } : cp
      }
      textAfterPos(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && pp == this.options.simulateBreak) return "";
        let {
          text: cp,
          from: Op
        } = this.lineAt(pp, ip);
        return cp.slice(pp - Op, Math.min(cp.length, pp + 100 - Op))
      }
      column(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: cp,
            from: Op
          } = this.lineAt(pp, ip),
          op = this.countColumn(cp, pp - Op),
          Ip = this.options.overrideIndentation ? this.options.overrideIndentation(Op) : -1;
        return Ip > -1 && (op += Ip - this.countColumn(cp, cp.search(/\S|$/))), op
      }
      countColumn(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.length;
        return (0, Ip.Q)(pp, this.state.tabSize, ip)
      }
      lineIndent(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: cp,
            from: Op
          } = this.lineAt(pp, ip),
          op = this.options.overrideIndentation;
        if (op) {
          let pp = op(Op);
          if (pp > -1) return pp
        }
        return this.countColumn(cp, cp.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Bp = new op.j;

    function Np(pp, ip, cp) {
      for (let Op = pp; Op; Op = Op.next) {
        let pp = Tp(Op.node);
        if (pp) return pp(bp.create(ip, cp, Op))
      }
      return 0
    }

    function Tp(pp) {
      let ip = pp.type.prop(Bp);
      if (ip) return ip;
      let cp, Op = pp.firstChild;
      if (Op && (cp = Op.type.prop(op.j.closedBy))) {
        let ip = pp.lastChild,
          Op = ip && cp.indexOf(ip.name) > -1;
        return pp => np(pp, !0, 1, void 0, Op && ! function(pp) {
          return pp.pos == pp.options.simulateBreak && pp.options.simulateDoubleBreak
        }(pp) ? ip.from : void 0)
      }
      return null == pp.parent ? fp : null
    }

    function fp() {
      return 0
    }
    class bp extends Jp {
      constructor(pp, ip, cp) {
        super(pp.state, pp.options), this.base = pp, this.pos = ip, this.context = cp
      }
      get node() {
        return this.context.node
      }
      static create(pp, ip, cp) {
        return new bp(pp, ip, cp)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(pp) {
        let ip = this.state.doc.lineAt(pp.from);
        for (;;) {
          let cp = pp.resolve(ip.from);
          for (; cp.parent && cp.parent.from == cp.from;) cp = cp.parent;
          if (hp(cp, pp)) break;
          ip = this.state.doc.lineAt(cp.from)
        }
        return this.lineIndent(ip.from)
      }
      continue () {
        return Np(this.context.next, this.base, this.pos)
      }
    }

    function hp(pp, ip) {
      for (let cp = ip; cp; cp = cp.parent)
        if (pp == cp) return !0;
      return !1
    }

    function ap(pp) {
      let {
        closing: ip,
        align: cp = !0,
        units: Op = 1
      } = pp;
      return pp => np(pp, cp, Op, ip)
    }

    function np(pp, ip, cp, Op, op) {
      let Ip = pp.textAfter,
        Sp = Ip.match(/^\s*/)[0].length,
        xp = Op && Ip.slice(Sp, Sp + Op.length) == Op || op == pp.pos + Sp,
        Lp = ip ? function(pp) {
          let ip = pp.node,
            cp = ip.childAfter(ip.from),
            Op = ip.lastChild;
          if (!cp) return null;
          let op = pp.options.simulateBreak,
            Ip = pp.state.doc.lineAt(cp.from),
            Sp = null == op || op <= Ip.from ? Ip.to : Math.min(Ip.to, op);
          for (let xp = cp.to;;) {
            let pp = ip.childAfter(xp);
            if (!pp || pp == Op) return null;
            if (!pp.type.isSkipped) {
              if (pp.from >= Sp) return null;
              let ip = /^ */.exec(Ip.text.slice(cp.to - Ip.from))[0].length;
              return {
                from: cp.from,
                to: cp.to + ip
              }
            }
            xp = pp.to
          }
        }(pp) : null;
      return Lp ? xp ? pp.column(Lp.from) : pp.column(Lp.to) : pp.baseIndent + (xp ? 0 : pp.unit * cp)
    }
    const Fp = pp => pp.baseIndent;

    function gp() {
      let {
        except: pp,
        units: ip = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return cp => {
        let Op = pp && pp.test(cp.textAfter);
        return cp.baseIndent + (Op ? 0 : ip * cp.unit)
      }
    }
    const Gp = 200;

    function rp() {
      return Ip.n.transactionFilter.of((pp => {
        if (!pp.docChanged || !pp.isUserEvent("input.type") && !pp.isUserEvent("input.complete")) return pp;
        let ip = pp.startState.languageDataAt("indentOnInput", pp.startState.selection.main.head);
        if (!ip.length) return pp;
        let cp = pp.newDoc,
          {
            head: Op
          } = pp.newSelection.main,
          op = cp.lineAt(Op);
        if (Op > op.from + Gp) return pp;
        let Ip = cp.sliceString(op.from, Op);
        if (!ip.some((pp => pp.test(Ip)))) return pp;
        let {
          state: Sp
        } = pp, xp = -1, Lp = [];
        for (let {
            head: Yp
          }
          of Sp.selection.By) {
          let pp = Sp.doc.lineAt(Yp);
          if (pp.from == xp) continue;
          xp = pp.from;
          let ip = Qp(Sp, pp.from);
          if (null == ip) continue;
          let cp = /^\s*/.exec(pp.text)[0],
            Op = lp(Sp, ip);
          cp != Op && Lp.push({
            from: pp.from,
            to: pp.from + cp.length,
            insert: Op
          })
        }
        return Lp.length ? [pp, {
          changes: Lp,
          sequential: !0
        }] : pp
      }))
    }
    const Zp = Ip.o.define(),
      zp = new op.j;

    function sp(pp) {
      let ip = pp.firstChild,
        cp = pp.lastChild;
      return ip && ip.to < cp.from ? {
        from: ip.to,
        to: cp.type.isError ? pp.to : cp.from
      } : null
    }

    function Kp(pp) {
      let ip = pp.lastChild;
      return ip && ip.to == pp.to && ip.type.isError
    }

    function Vp(pp, ip, cp) {
      for (let Op of pp.facet(Zp)) {
        let op = Op(pp, ip, cp);
        if (op) return op
      }
      return function(pp, ip, cp) {
        let Op = Up(pp);
        if (Op.length < cp) return null;
        let op = null;
        for (let Ip = Op.resolveStack(cp, 1); Ip; Ip = Ip.next) {
          let Sp = Ip.node;
          if (Sp.to <= cp || Sp.from > cp) continue;
          if (op && Sp.from < ip) break;
          let xp = Sp.type.prop(zp);
          if (xp && (Sp.to < Op.length - 50 || Op.length == pp.doc.length || !Kp(Sp))) {
            let Op = xp(Sp, pp);
            Op && Op.from <= cp && Op.from >= ip && Op.to > cp && (op = Op)
          }
        }
        return op
      }(pp, ip, cp)
    }

    function ii(pp, ip) {
      let cp = ip.mapPos(pp.from, 1),
        Op = ip.mapPos(pp.to, -1);
      return cp >= Op ? void 0 : {
        from: cp,
        to: Op
      }
    }
    const ci = Ip.C.define({
        map: ii
      }),
      Oi = Ip.C.define({
        map: ii
      });

    function oi(pp) {
      let ip = [];
      for (let {
          head: cp
        }
        of pp.state.selection.By) ip.some((pp => pp.from <= cp && pp.to >= cp)) || ip.push(pp.lineBlockAt(cp));
      return ip
    }
    const Ii = Ip.E.define({
      create: () => Sp.c.none,
      update(pp, ip) {
        ip.isUserEvent("delete") && ip.changes.iterChangedRanges(((ip, cp) => pp = Si(pp, ip, cp))), pp = pp.map(ip.changes);
        for (let cp of ip.effects)
          if (cp.is(ci) && !Li(pp, cp.value.from, cp.value.to)) {
            let {
              preparePlaceholder: Op
            } = ip.state.facet(Wi), op = Op ? Sp.c.replace({
              widget: new vi(Op(ip.state, cp.value))
            }) : wi;
            pp = pp.update({
              add: [op.range(cp.value.from, cp.value.to)]
            })
          } else cp.is(Oi) && (pp = pp.update({
            filter: (pp, ip) => cp.value.from != pp || cp.value.to != ip,
            filterFrom: cp.value.from,
            filterTo: cp.value.to
          }));
        return ip.selection && (pp = Si(pp, ip.selection.main.head)), pp
      },
      provide: pp => Sp.f.uO.from(pp),
      toJSON(pp, ip) {
        let cp = [];
        return pp.between(0, ip.doc.length, ((pp, ip) => {
          cp.push(pp, ip)
        })), cp
      },
      fromJSON(pp) {
        if (!Array.isArray(pp) || pp.length % 2) throw new RangeError("Invalid JSON for fold state");
        let ip = [];
        for (let cp = 0; cp < pp.length;) {
          let Op = pp[cp++],
            op = pp[cp++];
          if ("number" != typeof Op || "number" != typeof op) throw new RangeError("Invalid JSON for fold state");
          ip.push(wi.range(Op, op))
        }
        return Sp.c.set(ip, !0)
      }
    });

    function Si(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip,
        Op = !1;
      return pp.between(ip, cp, ((pp, op) => {
        pp < cp && op > ip && (Op = !0)
      })), Op ? pp.update({
        filterFrom: ip,
        filterTo: cp,
        filter: (pp, Op) => pp >= cp || Op <= ip
      }) : pp
    }

    function xi(pp, ip, cp) {
      var Op;
      let op = null;
      return null === (Op = pp.field(Ii, !1)) || void 0 === Op || Op.between(ip, cp, ((pp, ip) => {
        (!op || op.from > pp) && (op = {
          from: pp,
          to: ip
        })
      })), op
    }

    function Li(pp, ip, cp) {
      let Op = !1;
      return pp.between(ip, ip, ((pp, op) => {
        pp == ip && op == cp && (Op = !0)
      })), Op
    }

    function Yi(pp, ip) {
      return pp.field(Ii, !1) ? ip : ip.concat(Ip.C.appendConfig.of(yi()))
    }

    function Di(pp, ip) {
      let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Op = pp.state.doc.lineAt(ip.from).number,
        op = pp.state.doc.lineAt(ip.to).number;
      return Sp.f.announce.of(`${pp.state.phrase(cp?"Folded lines":"Unfolded lines")} ${Op} ${pp.state.phrase("to")} ${op}.`)
    }
    const Ai = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: pp => {
          for (let ip of oi(pp)) {
            let cp = Vp(pp.state, ip.from, ip.to);
            if (cp) return pp.dispatch({
              effects: Yi(pp.state, [ci.of(cp), Di(pp, cp)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: pp => {
          if (!pp.state.field(Ii, !1)) return !1;
          let ip = [];
          for (let cp of oi(pp)) {
            let Op = xi(pp.state, cp.from, cp.to);
            Op && ip.push(Oi.of(Op), Di(pp, Op, !1))
          }
          return ip.length && pp.dispatch({
            effects: ip
          }), ip.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: pp => {
          let {
            state: ip
          } = pp, cp = [];
          for (let Op = 0; Op < ip.doc.length;) {
            let op = pp.lineBlockAt(Op),
              Ip = Vp(ip, op.from, op.to);
            Ip && cp.push(ci.of(Ip)), Op = (Ip ? pp.lineBlockAt(Ip.to) : op).to + 1
          }
          return cp.length && pp.dispatch({
            effects: Yi(pp.state, cp)
          }), !!cp.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: pp => {
          let ip = pp.state.field(Ii, !1);
          if (!ip || !ip.size) return !1;
          let cp = [];
          return ip.between(0, pp.state.doc.length, ((pp, ip) => {
            cp.push(Oi.of({
              from: pp,
              to: ip
            }))
          })), pp.dispatch({
            effects: cp
          }), !0
        }
      }],
      Pi = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Wi = Ip.o.define({
        combine: pp => (0, Ip.P)(pp, Pi)
      });

    function yi(pp) {
      let ip = [Ii, ei];
      return pp && ip.push(Wi.of(pp)), ip
    }

    function Ui(pp, ip) {
      let {
        state: cp
      } = pp, Op = cp.facet(Wi), op = ip => {
        let cp = pp.lineBlockAt(pp.posAtDOM(ip.target)),
          Op = xi(pp.state, cp.from, cp.to);
        Op && pp.dispatch({
          effects: Oi.of(Op)
        }), ip.preventDefault()
      };
      if (Op.placeholderDOM) return Op.placeholderDOM(pp, op, ip);
      let Ip = document.createElement("span");
      return Ip.textContent = Op.placeholderText, Ip.setAttribute("aria-label", cp.phrase("folded code")), Ip.title = cp.phrase("unfold"), Ip.className = "cm-foldPlaceholder", Ip.onclick = op, Ip
    }
    const wi = Sp.c.replace({
      widget: new class extends Sp.l {
        toDOM(pp) {
          return Ui(pp, null)
        }
      }
    });
    class vi extends Sp.l {
      constructor(pp) {
        super(), this.value = pp
      }
      eq(pp) {
        return this.value == pp.value
      }
      toDOM(pp) {
        return Ui(pp, this.value)
      }
    }
    const ti = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Hi extends Sp.j {
      constructor(pp, ip) {
        super(), this.config = pp, this.open = ip
      }
      eq(pp) {
        return this.config == pp.config && this.open == pp.open
      }
      toDOM(pp) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let ip = document.createElement("span");
        return ip.textContent = this.open ? this.config.openText : this.config.closedText, ip.title = pp.state.phrase(this.open ? "Fold line" : "Unfold line"), ip
      }
    }

    function di() {
      let pp = {
          ...ti,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        ip = new Hi(pp, !0),
        cp = new Hi(pp, !1),
        Op = Sp.k.fromClass(class {
          constructor(pp) {
            this.from = pp.viewport.from, this.markers = this.buildMarkers(pp)
          }
          update(ip) {
            (ip.docChanged || ip.viewportChanged || ip.startState.facet(qp) != ip.state.facet(qp) || ip.startState.field(Ii, !1) != ip.state.field(Ii, !1) || Up(ip.startState) != Up(ip.state) || pp.foldingChanged(ip)) && (this.markers = this.buildMarkers(ip.view))
          }
          buildMarkers(pp) {
            let Op = new Ip.w;
            for (let op of pp.viewportLineBlocks) {
              let Ip = xi(pp.state, op.from, op.to) ? cp : Vp(pp.state, op.from, op.to) ? ip : null;
              Ip && Op.add(op.from, op.from, Ip)
            }
            return Op.finish()
          }
        }),
        {
          domEventHandlers: op
        } = pp;
      return [Op, (0, Sp.C)({
        class: "cm-foldGutter",
        markers(pp) {
          var ip;
          return (null === (ip = pp.plugin(Op)) || void 0 === ip ? void 0 : ip.markers) || Ip.A.empty
        },
        initialSpacer: () => new Hi(pp, !1),
        domEventHandlers: {
          ...op,
          click: (pp, ip, cp) => {
            if (op.click && op.click(pp, ip, cp)) return !0;
            let Op = xi(pp.state, ip.from, ip.to);
            if (Op) return pp.dispatch({
              effects: Oi.of(Op)
            }), !0;
            let Ip = Vp(pp.state, ip.from, ip.to);
            return !!Ip && (pp.dispatch({
              effects: ci.of(Ip)
            }), !0)
          }
        }
      }), yi()]
    }
    const ei = Sp.f.baseTheme({
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
    class ui {
      constructor(pp, ip) {
        let cp;

        function Op(pp) {
          let ip = Lp.b.newName();
          return (cp || (cp = Object.create(null)))["." + ip] = pp, ip
        }
        this.specs = pp;
        const op = "string" == typeof ip.all ? ip.all : ip.all ? Op(ip.all) : void 0,
          Ip = ip.scope;
        this.scope = Ip instanceof Pp ? pp => pp.prop(Yp) == Ip.data : Ip ? pp => pp == Ip : void 0, this.style = (0, xp.i)(pp.map((pp => ({
          tag: pp.tag,
          class: pp.class || Op(Object.assign({}, pp, {
            tag: null
          }))
        }))), {
          all: op
        }).style, this.module = cp ? new Lp.b(cp) : null, this.themeType = ip.themeType
      }
      static define(pp, ip) {
        return new ui(pp, ip || {})
      }
    }
    const ji = Ip.o.define(),
      ki = Ip.o.define({
        combine: pp => pp.length ? [pp[0]] : null
      });

    function mi(pp) {
      let ip = pp.facet(ji);
      return ip.length ? ip : pp.facet(ki)
    }

    function Ri(pp, ip) {
      let cp, Op = [Mi];
      return pp instanceof ui && (pp.module && Op.push(Sp.f.styleModule.of(pp.module)), cp = pp.themeType), (null === ip || void 0 === ip ? void 0 : ip.fallback) ? Op.push(ki.of(pp)) : cp ? Op.push(ji.computeN([Sp.f.darkTheme], (ip => ip.facet(Sp.f.darkTheme) == ("dark" == cp) ? [pp] : []))) : Op.push(ji.of(pp)), Op
    }
    class qi {
      constructor(pp) {
        this.markCache = Object.create(null), this.tree = Up(pp.state), this.uO = this.buildDeco(pp, mi(pp.state)), this.decoratedTo = pp.viewport.to
      }
      update(pp) {
        let ip = Up(pp.state),
          cp = mi(pp.state),
          Op = cp != mi(pp.startState),
          {
            viewport: op
          } = pp.view,
          Ip = pp.changes.mapPos(this.decoratedTo, 1);
        ip.length < op.to && !Op && ip.type == this.tree.type && Ip >= op.to ? (this.uO = this.uO.map(pp.changes), this.decoratedTo = Ip) : (ip != this.tree || pp.viewportChanged || Op) && (this.tree = ip, this.uO = this.buildDeco(pp.view, cp), this.decoratedTo = op.to)
      }
      buildDeco(pp, ip) {
        if (!ip || !this.tree.length) return Sp.c.none;
        let cp = new Ip.w;
        for (let {
            from: Op,
            to: op
          }
          of pp.Z2)(0, xp.b)(this.tree, ip, ((pp, ip, Op) => {
          cp.add(pp, ip, this.markCache[Op] || (this.markCache[Op] = Sp.c.mark({
            class: Op
          })))
        }), Op, op);
        return cp.finish()
      }
    }
    const Mi = Ip.u.high(Sp.k.fromClass(qi, {
        uO: pp => pp.uO
      })),
      Ci = ui.define([{
        tag: xp.l.meta,
        color: "#404740"
      }, {
        tag: xp.l.link,
        textDecoration: "underline"
      }, {
        tag: xp.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: xp.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: xp.l.strong,
        fontWeight: "bold"
      }, {
        tag: xp.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: xp.l.keyword,
        color: "#708"
      }, {
        tag: [xp.l.atom, xp.l.bool, xp.l.url, xp.l.contentSeparator, xp.l.labelName],
        color: "#219"
      }, {
        tag: [xp.l.literal, xp.l.inserted],
        color: "#164"
      }, {
        tag: [xp.l.string, xp.l.deleted],
        color: "#a11"
      }, {
        tag: [xp.l.regexp, xp.l.escape, xp.l.special(xp.l.string)],
        color: "#e40"
      }, {
        tag: xp.l.definition(xp.l.variableName),
        color: "#00f"
      }, {
        tag: xp.l.local(xp.l.variableName),
        color: "#30a"
      }, {
        tag: [xp.l.typeName, xp.l.namespace],
        color: "#085"
      }, {
        tag: xp.l.className,
        color: "#167"
      }, {
        tag: [xp.l.special(xp.l.variableName), xp.l.macroName],
        color: "#256"
      }, {
        tag: xp.l.definition(xp.l.propertyName),
        color: "#00c"
      }, {
        tag: xp.l.comment,
        color: "#940"
      }, {
        tag: xp.l.invalid,
        color: "#f00"
      }]),
      Ei = Sp.f.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Xi = 1e4,
      li = "()[]{}",
      Qi = Ip.o.define({
        combine: pp => (0, Ip.P)(pp, {
          afterCursor: !0,
          brackets: li,
          maxScanDistance: Xi,
          renderMatch: Ni
        })
      }),
      Ji = Sp.c.mark({
        class: "cm-matchingBracket"
      }),
      Bi = Sp.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function Ni(pp) {
      let ip = [],
        cp = pp.matched ? Ji : Bi;
      return ip.push(cp.range(pp.start.from, pp.start.to)), pp.end && ip.push(cp.range(pp.end.from, pp.end.to)), ip
    }

    function Ti(pp) {
      let ip = [],
        cp = pp.facet(Qi);
      for (let Op of pp.selection.By) {
        if (!Op.empty) continue;
        let op = gi(pp, Op.head, -1, cp) || Op.head > 0 && gi(pp, Op.head - 1, 1, cp) || cp.afterCursor && (gi(pp, Op.head, 1, cp) || Op.head < pp.doc.length && gi(pp, Op.head + 1, -1, cp));
        op && (ip = ip.concat(cp.renderMatch(op, pp)))
      }
      return Sp.c.set(ip, !0)
    }
    const fi = [Sp.k.fromClass(class {
      constructor(pp) {
        this.paused = !1, this.uO = Ti(pp.state)
      }
      update(pp) {
        (pp.docChanged || pp.selectionSet || this.paused) && (pp.view.composing ? (this.uO = this.uO.map(pp.changes), this.paused = !0) : (this.uO = Ti(pp.state), this.paused = !1))
      }
    }, {
      uO: pp => pp.uO
    }), Ei];

    function bi() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Qi.of(pp), fi]
    }
    const ai = new op.j;

    function ni(pp, ip, cp) {
      let Op = pp.prop(ip < 0 ? op.j.openedBy : op.j.closedBy);
      if (Op) return Op;
      if (1 == pp.name.length) {
        let Op = cp.indexOf(pp.name);
        if (Op > -1 && Op % 2 == (ip < 0 ? 1 : 0)) return [cp[Op + ip]]
      }
      return null
    }

    function Fi(pp) {
      let ip = pp.type.prop(ai);
      return ip ? ip(pp.node) : pp
    }

    function gi(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        op = Op.maxScanDistance || Xi,
        Ip = Op.brackets || li,
        Sp = Up(pp),
        xp = Sp.resolveInner(ip, cp);
      for (let Lp = xp; Lp; Lp = Lp.parent) {
        let Op = ni(Lp.type, cp, Ip);
        if (Op && Lp.from < Lp.to) {
          let op = Fi(Lp);
          if (op && (cp > 0 ? ip >= op.from && ip < op.to : ip > op.from && ip <= op.to)) return Gi(pp, ip, cp, Lp, op, Op, Ip)
        }
      }
      return function(pp, ip, cp, Op, op, Ip, Sp) {
        if (cp < 0 ? !ip : ip == pp.doc.length) return null;
        let xp = cp < 0 ? pp.sliceDoc(ip - 1, ip) : pp.sliceDoc(ip, ip + 1),
          Lp = Sp.indexOf(xp);
        if (Lp < 0 || Lp % 2 == 0 != cp > 0) return null;
        let Yp = {
            from: cp < 0 ? ip - 1 : ip,
            to: cp > 0 ? ip + 1 : ip
          },
          Dp = pp.doc.iterRange(ip, cp > 0 ? pp.doc.length : 0),
          Ap = 0;
        for (let Pp = 0; !Dp.next().done && Pp <= Ip;) {
          let pp = Dp.value;
          cp < 0 && (Pp += pp.length);
          let Ip = ip + Pp * cp;
          for (let ip = cp > 0 ? 0 : pp.length - 1, xp = cp > 0 ? pp.length : -1; ip != xp; ip += cp) {
            let xp = Sp.indexOf(pp[ip]);
            if (!(xp < 0 || Op.resolveInner(Ip + ip, 1).type != op))
              if (xp % 2 == 0 == cp > 0) Ap++;
              else {
                if (1 == Ap) return {
                  start: Yp,
                  end: {
                    from: Ip + ip,
                    to: Ip + ip + 1
                  },
                  matched: xp >> 1 == Lp >> 1
                };
                Ap--
              }
          }
          cp > 0 && (Pp += pp.length)
        }
        return Dp.done ? {
          start: Yp,
          matched: !1
        } : null
      }(pp, ip, cp, Sp, xp.type, op, Ip)
    }

    function Gi(pp, ip, cp, Op, op, Ip, Sp) {
      let xp = Op.parent,
        Lp = {
          from: op.from,
          to: op.to
        },
        Yp = 0,
        Dp = null === xp || void 0 === xp ? void 0 : xp.cursor();
      if (Dp && (cp < 0 ? Dp.childBefore(Op.from) : Dp.childAfter(Op.to)))
        do {
          if (cp < 0 ? Dp.to <= Op.from : Dp.from >= Op.to) {
            if (0 == Yp && Ip.indexOf(Dp.type.name) > -1 && Dp.from < Dp.to) {
              let pp = Fi(Dp);
              return {
                start: Lp,
                end: pp ? {
                  from: pp.from,
                  to: pp.to
                } : void 0,
                matched: !0
              }
            }
            if (ni(Dp.type, cp, Sp)) Yp++;
            else if (ni(Dp.type, -cp, Sp)) {
              if (0 == Yp) {
                let pp = Fi(Dp);
                return {
                  start: Lp,
                  end: pp && pp.from < pp.to ? {
                    from: pp.from,
                    to: pp.to
                  } : void 0,
                  matched: !1
                }
              }
              Yp--
            }
          }
        } while (cp < 0 ? Dp.prevSibling() : Dp.nextSibling());
      return {
        start: Lp,
        matched: !1
      }
    }
    const ri = Object.create(null),
      Zi = [op.p.none],
      zi = [],
      si = Object.create(null),
      Ki = Object.create(null);
    for (let [ic, cc] of [
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
      ]) Ki[ic] = pc(ri, cc);

    function Vi(pp, ip) {
      zi.indexOf(pp) > -1 || (zi.push(pp), console.warn(ip))
    }

    function pc(pp, ip) {
      let cp = [];
      for (let op of ip.split(" ")) {
        let ip = [];
        for (let cp of op.split(".")) {
          let Op = pp[cp] || xp.l[cp];
          Op ? "function" == typeof Op ? ip.length ? ip = ip.map(Op) : Vi(cp, `Modifier ${cp} used at start of tag`) : ip.length ? Vi(cp, `Tag ${cp} used as modifier`) : ip = Array.isArray(Op) ? Op : [Op] : Vi(cp, `Unknown highlighting tag ${cp}`)
        }
        for (let pp of ip) cp.push(pp)
      }
      if (!cp.length) return 0;
      let Op = ip.replace(/ /g, "_"),
        Ip = Op + " " + cp.map((pp => pp.id)),
        Sp = si[Ip];
      if (Sp) return Sp.id;
      let Lp = si[Ip] = op.p.define({
        id: Zi.length,
        name: Op,
        props: [(0, xp.e)({
          [Op]: cp
        })]
      });
      return Zi.push(Lp), Lp.id
    }
    Sp.e.RTL, Sp.e.LTR
  },
  41603: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Hp,
      c: () => kp
    });
    var Op = cp(41556),
      op = cp(41548),
      Ip = cp(41562);
    class Sp {
      constructor(pp, ip, cp) {
        this.from = pp, this.to = ip, this.diagnostic = cp
      }
    }
    class xp {
      constructor(pp, ip, cp) {
        this.diagnostics = pp, this.panel = ip, this.selected = cp
      }
      static init(pp, ip, cp) {
        let Ip = cp.facet(ep).markerFilter;
        Ip && (pp = Ip(pp, cp));
        let Sp = pp.slice().sort(((pp, ip) => pp.from - ip.from || pp.to - ip.to)),
          Yp = new op.w,
          Dp = [],
          Ap = 0,
          Pp = cp.doc.iter(),
          Wp = 0,
          yp = cp.doc.length;
        for (let op = 0;;) {
          let pp, ip, cp = op == Sp.length ? null : Sp[op];
          if (!cp && !Dp.length) break;
          if (Dp.length) pp = Ap, ip = Dp.reduce(((pp, ip) => Math.min(pp, ip.to)), cp && cp.from > pp ? cp.from : 1e8);
          else {
            if (pp = cp.from, pp > yp) break;
            ip = cp.to, Dp.push(cp), op++
          }
          for (; op < Sp.length;) {
            let cp = Sp[op];
            if (cp.from != pp || !(cp.to > cp.from || cp.to == pp)) {
              ip = Math.min(cp.from, ip);
              break
            }
            Dp.push(cp), op++, ip = Math.min(cp.to, ip)
          }
          ip = Math.min(ip, yp);
          let Ip = !1;
          if (Dp.some((cp => cp.from == pp && (cp.to == ip || ip == yp))) && (Ip = pp == ip, !Ip && ip - pp < 10)) {
            let cp = pp - (Wp + Pp.value.length);
            cp > 0 && (Pp.next(cp), Wp = pp);
            for (let Op = pp;;) {
              if (Op >= ip) {
                Ip = !0;
                break
              }
              if (!Pp.lineBreak && Wp + Pp.value.length > Op) break;
              Op = Wp + Pp.value.length, Wp += Pp.value.length, Pp.next()
            }
          }
          let xp = Jp(Dp);
          if (Ip) Yp.add(pp, pp, Op.c.widget({
            widget: new qp(xp),
            diagnostics: Dp.slice()
          }));
          else {
            let cp = Dp.reduce(((pp, ip) => ip.markClass ? pp + " " + ip.markClass : pp), "");
            Yp.add(pp, ip, Op.c.mark({
              class: "cm-lintRange cm-lintRange-" + xp + cp,
              diagnostics: Dp.slice(),
              inclusiveEnd: Dp.some((pp => pp.to > ip))
            }))
          }
          if (Ap = ip, Ap == yp) break;
          for (let Op = 0; Op < Dp.length; Op++) Dp[Op].to <= Ap && Dp.splice(Op--, 1)
        }
        let Up = Yp.finish();
        return new xp(Up, ip, Lp(Up))
      }
    }

    function Lp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Op = null;
      return pp.between(cp, 1e9, ((pp, cp, op) => {
        let {
          spec: Ip
        } = op;
        if (!(ip && Ip.diagnostics.indexOf(ip) < 0))
          if (Op) {
            if (Ip.diagnostics.indexOf(Op.diagnostic) < 0) return !1;
            Op = new Sp(Op.from, cp, Op.diagnostic)
          } else Op = new Sp(pp, cp, ip || Ip.diagnostics[0])
      })), Op
    }

    function Yp(pp, ip) {
      let cp = ip.pos,
        Op = ip.end || cp,
        op = pp.state.facet(ep).hideOn(pp, cp, Op);
      if (null != op) return op;
      let Ip = pp.startState.doc.lineAt(ip.pos);
      return !(!pp.effects.some((pp => pp.is(Ap))) && !pp.changes.touchesRange(Ip.from, Math.max(Ip.to, Op)))
    }

    function Dp(pp, ip) {
      return pp.field(yp, !1) ? ip : ip.concat(op.C.appendConfig.of(Bp))
    }
    const Ap = op.C.define(),
      Pp = op.C.define(),
      Wp = op.C.define(),
      yp = op.E.define({
        create: () => new xp(Op.c.none, null, null),
        update(pp, ip) {
          if (ip.docChanged && pp.diagnostics.size) {
            let cp = pp.diagnostics.map(ip.changes),
              Op = null,
              op = pp.panel;
            if (pp.selected) {
              let op = ip.changes.mapPos(pp.selected.from, 1);
              Op = Lp(cp, pp.selected.diagnostic, op) || Lp(cp, null, op)
            }!cp.size && op && ip.state.facet(ep).autoPanel && (op = null), pp = new xp(cp, op, Op)
          }
          for (let cp of ip.effects)
            if (cp.is(Ap)) {
              let Op = ip.state.facet(ep).autoPanel ? cp.value.length ? Cp.open : null : pp.panel;
              pp = xp.init(cp.value, Op, ip.state)
            } else cp.is(Pp) ? pp = new xp(pp.diagnostics, cp.value ? Cp.open : null, pp.selected) : cp.is(Wp) && (pp = new xp(pp.diagnostics, pp.panel, cp.value));
          return pp
        },
        provide: pp => [Op.ob.from(pp, (pp => pp.panel)), Op.f.uO.from(pp, (pp => pp.diagnostics))]
      });
    const Up = Op.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function wp(pp, ip, cp) {
      let Op, {
          diagnostics: op
        } = pp.state.field(yp),
        Ip = -1,
        Sp = -1;
      op.between(ip - (cp < 0 ? 1 : 0), ip + (cp > 0 ? 1 : 0), ((pp, op, xp) => {
        let {
          spec: Lp
        } = xp;
        if (ip >= pp && ip <= op && (pp == op || (ip > pp || cp > 0) && (ip < op || cp < 0))) return Op = Lp.diagnostics, Ip = pp, Sp = op, !1
      }));
      let xp = pp.state.facet(ep).tooltipFilter;
      return Op && xp && (Op = xp(Op, pp.state)), Op ? {
        pos: Ip,
        end: Sp,
        above: pp.state.doc.lineAt(Ip).to < Sp,
        create: () => ({
          dom: vp(pp, Op)
        })
      } : null
    }

    function vp(pp, ip) {
      return (0, Ip.d)("ul", {
        class: "cm-tooltip-lint"
      }, ip.map((ip => Rp(pp, ip, !1))))
    }
    const tp = pp => {
        let ip = pp.state.field(yp, !1);
        return !(!ip || !ip.panel) && (pp.dispatch({
          effects: Pp.of(!1)
        }), !0)
      },
      Hp = [{
        key: "Mod-Shift-m",
        run: pp => {
          let ip = pp.state.field(yp, !1);
          ip && ip.panel || pp.dispatch({
            effects: Dp(pp.state, [Pp.of(!0)])
          });
          let cp = (0, Op.x)(pp, Cp.open);
          return cp && cp.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: pp => {
          let ip = pp.state.field(yp, !1);
          if (!ip) return !1;
          let cp = pp.state.selection.main,
            Op = Lp(ip.diagnostics, null, cp.to + 1);
          return !(!Op && (Op = Lp(ip.diagnostics, null, 0), !Op || Op.from == cp.from && Op.to == cp.to)) && (pp.dispatch({
            selection: {
              anchor: Op.from,
              head: Op.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      dp = Op.k.fromClass(class {
        constructor(pp) {
          this.view = pp, this.timeout = -1, this.set = !0;
          let {
            delay: ip
          } = pp.state.facet(ep);
          this.lintTime = Date.now() + ip, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, ip)
        }
        run() {
          clearTimeout(this.timeout);
          let pp = Date.now();
          if (pp < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - pp);
          else {
            this.set = !1;
            let {
              state: pp
            } = this.view, {
              sources: ip
            } = pp.facet(ep);
            ip.length && function(pp, ip, cp) {
              let Op = [],
                op = -1;
              for (let Ip of pp) Ip.then((cp => {
                Op.push(cp), clearTimeout(op), Op.length == pp.length ? ip(Op) : op = setTimeout((() => ip(Op)), 200)
              }), cp)
            }(ip.map((pp => Promise.resolve(pp(this.view)))), (ip => {
              this.view.state.doc == pp.doc && this.view.dispatch(function(pp, ip) {
                return {
                  effects: Dp(pp, [Ap.of(ip)])
                }
              }(this.view.state, ip.reduce(((pp, ip) => pp.concat(ip)))))
            }), (pp => {
              (0, Op._)(this.view.state, pp)
            }))
          }
        }
        update(pp) {
          let ip = pp.state.facet(ep);
          (pp.docChanged || ip != pp.startState.facet(ep) || ip.needsRefresh && ip.needsRefresh(pp)) && (this.lintTime = Date.now() + ip.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, ip.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const ep = op.o.define({
      combine: pp => ({
        sources: pp.map((pp => pp.source)).filter((pp => null != pp)),
        ...(0, op.P)(pp.map((pp => pp.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: jp,
          tooltipFilter: jp,
          needsRefresh: (pp, ip) => pp ? ip ? cp => pp(cp) || ip(cp) : pp : ip,
          hideOn: (pp, ip) => pp ? ip ? (cp, Op, op) => pp(cp, Op, op) || ip(cp, Op, op) : pp : ip,
          autoPanel: (pp, ip) => pp || ip
        })
      })
    });

    function jp(pp, ip) {
      return pp ? ip ? (cp, Op) => ip(pp(cp, Op), Op) : pp : ip
    }

    function kp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [ep.of({
        source: pp,
        config: ip
      }), dp, Bp]
    }

    function mp(pp) {
      let ip = [];
      if (pp) pp: for (let {
          name: cp
        }
        of pp) {
        for (let pp = 0; pp < cp.length; pp++) {
          let Op = cp[pp];
          if (/[a-zA-Z]/.test(Op) && !ip.some((pp => pp.toLowerCase() == Op.toLowerCase()))) {
            ip.push(Op);
            continue pp
          }
        }
        ip.push("")
      }
      return ip
    }

    function Rp(pp, ip, cp) {
      var Op;
      let op = cp ? mp(ip.actions) : [];
      return (0, Ip.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + ip.severity
      }, (0, Ip.d)("span", {
        class: "cm-diagnosticText"
      }, ip.renderMessage ? ip.renderMessage(pp) : ip.message), null === (Op = ip.actions) || void 0 === Op ? void 0 : Op.map(((cp, Op) => {
        let Sp = !1,
          xp = Op => {
            if (Op.preventDefault(), Sp) return;
            Sp = !0;
            let op = Lp(pp.state.field(yp).diagnostics, ip);
            op && cp.apply(pp, op.from, op.to)
          },
          {
            name: Yp
          } = cp,
          Dp = op[Op] ? Yp.indexOf(op[Op]) : -1,
          Ap = Dp < 0 ? Yp : [Yp.slice(0, Dp), (0, Ip.d)("u", Yp.slice(Dp, Dp + 1)), Yp.slice(Dp + 1)],
          Pp = cp.markClass ? " " + cp.markClass : "";
        return (0, Ip.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Pp,
          onclick: xp,
          onmousedown: xp,
          "aria-label": ` Action: ${Yp}${Dp<0?"":` (access key "${op[Op]})"`}.`
        }, Ap)
      })), ip.source && (0, Ip.d)("div", {
        class: "cm-diagnosticSource"
      }, ip.source))
    }
    class qp extends Op.l {
      constructor(pp) {
        super(), this.sev = pp
      }
      eq(pp) {
        return pp.sev == this.sev
      }
      toDOM() {
        return (0, Ip.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Mp {
      constructor(pp, ip) {
        this.diagnostic = ip, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Rp(pp, ip, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Cp {
      constructor(pp) {
        this.view = pp, this.items = [];
        this.list = (0, Ip.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: ip => {
            if (!(ip.ctrlKey || ip.altKey || ip.metaKey)) {
              if (27 == ip.keyCode) tp(this.view), this.view.focus();
              else if (38 == ip.keyCode || 33 == ip.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == ip.keyCode || 34 == ip.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == ip.keyCode) this.moveSelection(0);
              else if (35 == ip.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == ip.keyCode) this.view.focus();
              else {
                if (!(ip.keyCode >= 65 && ip.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: cp
                  } = this.items[this.selectedIndex], Op = mp(cp.actions);
                  for (let op = 0; op < Op.length; op++)
                    if (Op[op].toUpperCase().charCodeAt(0) == ip.keyCode) {
                      let ip = Lp(this.view.state.field(yp).diagnostics, cp);
                      ip && cp.actions[op].apply(pp, ip.from, ip.to)
                    }
                }
              }
              ip.preventDefault()
            }
          },
          onclick: pp => {
            for (let ip = 0; ip < this.items.length; ip++) this.items[ip].dom.contains(pp.target) && this.moveSelection(ip)
          }
        }), this.dom = (0, Ip.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Ip.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => tp(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let pp = this.view.state.field(yp).selected;
        if (!pp) return -1;
        for (let ip = 0; ip < this.items.length; ip++)
          if (this.items[ip].diagnostic == pp.diagnostic) return ip;
        return -1
      }
      update() {
        let {
          diagnostics: pp,
          selected: ip
        } = this.view.state.field(yp), cp = 0, Op = !1, op = null, Ip = new Set;
        for (pp.between(0, this.view.state.doc.length, ((pp, Sp, xp) => {
            let {
              spec: Lp
            } = xp;
            for (let Yp of Lp.diagnostics) {
              if (Ip.has(Yp)) continue;
              Ip.add(Yp);
              let pp, Sp = -1;
              for (let ip = cp; ip < this.items.length; ip++)
                if (this.items[ip].diagnostic == Yp) {
                  Sp = ip;
                  break
                } Sp < 0 ? (pp = new Mp(this.view, Yp), this.items.splice(cp, 0, pp), Op = !0) : (pp = this.items[Sp], Sp > cp && (this.items.splice(cp, Sp - cp), Op = !0)), ip && pp.diagnostic == ip.diagnostic ? pp.dom.hasAttribute("aria-selected") || (pp.dom.setAttribute("aria-selected", "true"), op = pp) : pp.dom.hasAttribute("aria-selected") && pp.dom.removeAttribute("aria-selected"), cp++
            }
          })); cp < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Op = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Mp(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Op = !0), op ? (this.list.setAttribute("aria-activedescendant", op.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: op.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: pp => {
            let {
              sel: ip,
              panel: cp
            } = pp, Op = cp.height / this.list.offsetHeight;
            ip.top < cp.top ? this.list.scrollTop -= (cp.top - ip.top) / Op : ip.bottom > cp.bottom && (this.list.scrollTop += (ip.bottom - cp.bottom) / Op)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Op && this.sync()
      }
      sync() {
        let pp = this.list.firstChild;

        function ip() {
          let ip = pp;
          pp = ip.nextSibling, ip.remove()
        }
        for (let cp of this.items)
          if (cp.dom.parentNode == this.list) {
            for (; pp != cp.dom;) ip();
            pp = cp.dom.nextSibling
          } else this.list.insertBefore(cp.dom, pp);
        for (; pp;) ip()
      }
      moveSelection(pp) {
        if (this.selectedIndex < 0) return;
        let ip = Lp(this.view.state.field(yp).diagnostics, this.items[pp].diagnostic);
        ip && this.view.dispatch({
          selection: {
            anchor: ip.from,
            head: ip.to
          },
          scrollIntoView: !0,
          effects: Wp.of(ip)
        })
      }
      static open(pp) {
        return new Cp(pp)
      }
    }

    function Ep(pp) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(pp)}</svg>')`
    }

    function Xp(pp) {
      return Ep(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${pp}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const lp = Op.f.baseTheme({
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
        backgroundImage: Xp("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Xp("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Xp("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Xp("#66d")
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

    function Qp(pp) {
      return "error" == pp ? 4 : "warning" == pp ? 3 : "info" == pp ? 2 : 1
    }

    function Jp(pp) {
      let ip = "hint",
        cp = 1;
      for (let Op of pp) {
        let pp = Qp(Op.severity);
        pp > cp && (cp = pp, ip = Op.severity)
      }
      return ip
    }
    Op.j;
    const Bp = [yp, Op.f.uO.compute([yp], (pp => {
      let {
        selected: ip,
        panel: cp
      } = pp.field(yp);
      return ip && cp && ip.from != ip.to ? Op.c.set([Up.range(ip.from, ip.to)]) : Op.c.none
    })), (0, Op.Q)(wp, {
      hideOn: Yp
    }), lp]
  },
  41597: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Vp,
      d: () => vp,
      e: () => ii
    });
    var Op = cp(41556),
      op = cp(41548),
      Ip = cp(41562);
    const Sp = "function" == typeof String.prototype.normalize ? pp => pp.normalize("NFKD") : pp => pp;
    class xp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Ip, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = pp.iterRange(cp, Op), this.bufferStart = cp, this.normalize = op ? pp => op(Sp(pp)) : Sp, this.query = this.normalize(ip)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, op.J)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let pp = this.peek();
          if (pp < 0) return this.done = !0, this;
          let ip = (0, op.W)(pp),
            cp = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, op.N)(pp);
          let Op = this.normalize(ip);
          if (Op.length)
            for (let op = 0, Ip = cp;; op++) {
              let pp = Op.charCodeAt(op),
                Sp = this.match(pp, Ip, this.bufferPos + this.bufferStart);
              if (op == Op.length - 1) {
                if (Sp) return this.value = Sp, this;
                break
              }
              Ip == cp && op < ip.length && ip.charCodeAt(op) == pp && Ip++
            }
        }
      }
      match(pp, ip, cp) {
        let Op = null;
        for (let op = 0; op < this.matches.length; op += 2) {
          let ip = this.matches[op],
            Ip = !1;
          this.query.charCodeAt(ip) == pp && (ip == this.query.length - 1 ? Op = {
            from: this.matches[op + 1],
            to: cp
          } : (this.matches[op]++, Ip = !0)), Ip || (this.matches.splice(op, 2), op -= 2)
        }
        return this.query.charCodeAt(0) == pp && (1 == this.query.length ? Op = {
          from: ip,
          to: cp
        } : this.matches.push(1, ip)), Op && this.test && !this.test(Op.from, Op.to, this.buffer, this.bufferStart) && (Op = null), Op
      }
    }
    "undefined" != typeof Symbol && (xp.prototype[Symbol.iterator] = function() {
      return this
    });
    const Lp = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Yp = "gm" + (null == /x/.unicode ? "" : "u");
    class Dp {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pp.length;
        if (this.text = pp, this.to = op, this.curLine = "", this.done = !1, this.value = Lp, /\\[sWDnr]|\n|\r|\[\^/.test(ip)) return new Wp(pp, ip, cp, Op, op);
        this.re = new RegExp(ip, Yp + ((null === cp || void 0 === cp ? void 0 : cp.ignoreCase) ? "i" : "")), this.test = null === cp || void 0 === cp ? void 0 : cp.test, this.iter = pp.iter();
        let Ip = pp.lineAt(Op);
        this.curLineStart = Ip.from, this.matchPos = yp(pp, Op), this.getLine(this.curLineStart)
      }
      getLine(pp) {
        this.iter.next(pp), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let pp = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = pp;
          let ip = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (ip) {
            let cp = this.curLineStart + ip.index,
              Op = cp + ip[0].length;
            if (this.matchPos = yp(this.text, Op + (cp == Op ? 1 : 0)), cp == this.curLineStart + this.curLine.length && this.nextLine(), (cp < Op || cp > this.value.to) && (!this.test || this.test(cp, Op, ip))) return this.value = {
              from: cp,
              to: Op,
              match: ip
            }, this;
            pp = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), pp = 0
          }
        }
      }
    }
    const Ap = new WeakMap;
    class Pp {
      constructor(pp, ip) {
        this.from = pp, this.text = ip
      }
      get to() {
        return this.from + this.text.length
      }
      static get(pp, ip, cp) {
        let Op = Ap.get(pp);
        if (!Op || Op.from >= cp || Op.to <= ip) {
          let Op = new Pp(ip, pp.sliceString(ip, cp));
          return Ap.set(pp, Op), Op
        }
        if (Op.from == ip && Op.to == cp) return Op;
        let {
          text: op,
          from: Ip
        } = Op;
        return Ip > ip && (op = pp.sliceString(ip, Ip) + op, Ip = ip), Op.to < cp && (op += pp.sliceString(Op.to, cp)), Ap.set(pp, new Pp(Ip, op)), new Pp(ip, op.slice(ip - Ip, cp - Ip))
      }
    }
    class Wp {
      constructor(pp, ip, cp, Op, op) {
        this.text = pp, this.to = op, this.done = !1, this.value = Lp, this.matchPos = yp(pp, Op), this.re = new RegExp(ip, Yp + ((null === cp || void 0 === cp ? void 0 : cp.ignoreCase) ? "i" : "")), this.test = null === cp || void 0 === cp ? void 0 : cp.test, this.flat = Pp.get(pp, Op, this.chunkEnd(Op + 5e3))
      }
      chunkEnd(pp) {
        return pp >= this.to ? this.to : this.text.lineAt(pp).to
      }
      next() {
        for (;;) {
          let pp = this.re.lastIndex = this.matchPos - this.flat.from,
            ip = this.re.exec(this.flat.text);
          if (ip && !ip[0] && ip.index == pp && (this.re.lastIndex = pp + 1, ip = this.re.exec(this.flat.text)), ip) {
            let pp = this.flat.from + ip.index,
              cp = pp + ip[0].length;
            if ((this.flat.to >= this.to || ip.index + ip[0].length <= this.flat.text.length - 10) && (!this.test || this.test(pp, cp, ip))) return this.value = {
              from: pp,
              to: cp,
              match: ip
            }, this.matchPos = yp(this.text, cp + (pp == cp ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Pp.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function yp(pp, ip) {
      if (ip >= pp.length) return ip;
      let cp, Op = pp.lineAt(ip);
      for (; ip < Op.to && (cp = Op.text.charCodeAt(ip - Op.from)) >= 56320 && cp < 57344;) ip++;
      return ip
    }
    "undefined" != typeof Symbol && (Dp.prototype[Symbol.iterator] = Wp.prototype[Symbol.iterator] = function() {
      return this
    });
    const Up = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      wp = op.o.define({
        combine: pp => (0, op.P)(pp, Up, {
          highlightWordAroundCursor: (pp, ip) => pp || ip,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function vp(pp) {
      let ip = [jp, ep];
      return pp && ip.push(wp.of(pp)), ip
    }
    const tp = Op.c.mark({
        class: "cm-selectionMatch"
      }),
      Hp = Op.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function dp(pp, ip, cp, Op) {
      return (0 == cp || pp(ip.sliceDoc(cp - 1, cp)) != op.i.Word) && (Op == ip.doc.length || pp(ip.sliceDoc(Op, Op + 1)) != op.i.Word)
    }
    const ep = Op.k.fromClass(class {
        constructor(pp) {
          this.uO = this.getDeco(pp)
        }
        update(pp) {
          (pp.selectionSet || pp.docChanged || pp.viewportChanged) && (this.uO = this.getDeco(pp.view))
        }
        getDeco(pp) {
          let ip = pp.state.facet(wp),
            {
              state: cp
            } = pp,
            Ip = cp.selection;
          if (Ip.By.length > 1) return Op.c.none;
          let Sp, Lp = Ip.main,
            Yp = null;
          if (Lp.empty) {
            if (!ip.highlightWordAroundCursor) return Op.c.none;
            let pp = cp.wordAt(Lp.head);
            if (!pp) return Op.c.none;
            Yp = cp.charCategorizer(Lp.head), Sp = cp.sliceDoc(pp.from, pp.to)
          } else {
            let pp = Lp.to - Lp.from;
            if (pp < ip.minSelectionLength || pp > 200) return Op.c.none;
            if (ip.wholeWords) {
              if (Sp = cp.sliceDoc(Lp.from, Lp.to), Yp = cp.charCategorizer(Lp.head), !dp(Yp, cp, Lp.from, Lp.to) || ! function(pp, ip, cp, Op) {
                  return pp(ip.sliceDoc(cp, cp + 1)) == op.i.Word && pp(ip.sliceDoc(Op - 1, Op)) == op.i.Word
                }(Yp, cp, Lp.from, Lp.to)) return Op.c.none
            } else if (Sp = cp.sliceDoc(Lp.from, Lp.to), !Sp) return Op.c.none
          }
          let Dp = [];
          for (let op of pp.Z2) {
            let pp = new xp(cp.doc, Sp, op.from, op.to);
            for (; !pp.next().done;) {
              let {
                from: op,
                to: Ip
              } = pp.value;
              if ((!Yp || dp(Yp, cp, op, Ip)) && (Lp.empty && op <= Lp.from && Ip >= Lp.to ? Dp.push(Hp.range(op, Ip)) : (op >= Lp.to || Ip <= Lp.from) && Dp.push(tp.range(op, Ip)), Dp.length > ip.maxMatches)) return Op.c.none
            }
          }
          return Op.c.set(Dp)
        }
      }, {
        uO: pp => pp.uO
      }),
      jp = Op.f.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const kp = op.o.define({
      combine: pp => (0, op.P)(pp, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: pp => new ci(pp),
        scrollToMatch: pp => Op.f.scrollIntoView(pp)
      })
    });
    class mp {
      constructor(pp) {
        this.search = pp.search, this.caseSensitive = !!pp.caseSensitive, this.literal = !!pp.literal, this.regexp = !!pp.regexp, this.replace = pp.replace || "", this.valid = !!this.search && (!this.regexp || function(pp) {
          try {
            return new RegExp(pp, Yp), !0
          } catch (ip) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!pp.wholeWord, this.test = pp.test
      }
      unquote(pp) {
        return this.literal ? pp : pp.replace(/\\([nrt\\])/g, ((pp, ip) => "n" == ip ? "\n" : "r" == ip ? "\r" : "t" == ip ? "\t" : "\\"))
      }
      eq(pp) {
        return this.search == pp.search && this.replace == pp.replace && this.caseSensitive == pp.caseSensitive && this.regexp == pp.regexp && this.wholeWord == pp.wholeWord && this.test == pp.test
      }
      create() {
        return this.regexp ? new lp(this) : new Mp(this)
      }
      getCursor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = pp.doc ? pp : op.n.create({
            doc: pp
          });
        return null == cp && (cp = Op.doc.length), this.regexp ? Cp(this, Op, ip, cp) : qp(this, Op, ip, cp)
      }
    }
    class Rp {
      constructor(pp) {
        this.spec = pp
      }
    }

    function qp(pp, ip, cp, Op) {
      let Ip;
      var Sp, Lp;
      return pp.wholeWord && (Sp = ip.doc, Lp = ip.charCategorizer(ip.selection.main.head), Ip = (pp, ip, cp, Op) => ((Op > pp || Op + cp.length < ip) && (Op = Math.max(0, pp - 2), cp = Sp.sliceString(Op, Math.min(Sp.length, ip + 2))), (Lp(Ep(cp, pp - Op)) != op.i.Word || Lp(Xp(cp, pp - Op)) != op.i.Word) && (Lp(Xp(cp, ip - Op)) != op.i.Word || Lp(Ep(cp, ip - Op)) != op.i.Word))), pp.test && (Ip = function(pp, ip, cp) {
        return (Op, op, Ip, Sp) => {
          if (cp && !cp(Op, op, Ip, Sp)) return !1;
          let xp = Op >= Sp && op <= Sp + Ip.length ? Ip.slice(Op - Sp, op - Sp) : ip.doc.sliceString(Op, op);
          return pp(xp, ip, Op, op)
        }
      }(pp.test, ip, Ip)), new xp(ip.doc, pp.unquoted, cp, Op, pp.caseSensitive ? void 0 : pp => pp.toLowerCase(), Ip)
    }
    class Mp extends Rp {
      constructor(pp) {
        super(pp)
      }
      nextMatch(pp, ip, cp) {
        let Op = qp(this.spec, pp, cp, pp.doc.length).nextOverlapping();
        if (Op.done) {
          let cp = Math.min(pp.doc.length, ip + this.spec.unquoted.length);
          Op = qp(this.spec, pp, 0, cp).nextOverlapping()
        }
        return Op.done || Op.value.from == ip && Op.value.to == cp ? null : Op.value
      }
      prevMatchInRange(pp, ip, cp) {
        for (let Op = cp;;) {
          let cp = Math.max(ip, Op - 1e4 - this.spec.unquoted.length),
            op = qp(this.spec, pp, cp, Op),
            Ip = null;
          for (; !op.nextOverlapping().done;) Ip = op.value;
          if (Ip) return Ip;
          if (cp == ip) return null;
          Op -= 1e4
        }
      }
      prevMatch(pp, ip, cp) {
        let Op = this.prevMatchInRange(pp, 0, ip);
        return Op || (Op = this.prevMatchInRange(pp, Math.max(0, cp - this.spec.unquoted.length), pp.doc.length)), !Op || Op.from == ip && Op.to == cp ? null : Op
      }
      getReplacement(pp) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(pp, ip) {
        let cp = qp(this.spec, pp, 0, pp.doc.length),
          Op = [];
        for (; !cp.next().done;) {
          if (Op.length >= ip) return null;
          Op.push(cp.value)
        }
        return Op
      }
      highlight(pp, ip, cp, Op) {
        let op = qp(this.spec, pp, Math.max(0, ip - this.spec.unquoted.length), Math.min(cp + this.spec.unquoted.length, pp.doc.length));
        for (; !op.next().done;) Op(op.value.from, op.value.to)
      }
    }

    function Cp(pp, ip, cp, Op) {
      let Ip;
      var Sp;
      return pp.wholeWord && (Sp = ip.charCategorizer(ip.selection.main.head), Ip = (pp, ip, cp) => !cp[0].length || (Sp(Ep(cp.input, cp.index)) != op.i.Word || Sp(Xp(cp.input, cp.index)) != op.i.Word) && (Sp(Xp(cp.input, cp.index + cp[0].length)) != op.i.Word || Sp(Ep(cp.input, cp.index + cp[0].length)) != op.i.Word)), pp.test && (Ip = function(pp, ip, cp) {
        return (Op, op, Ip) => (!cp || cp(Op, op, Ip)) && pp(Ip[0], ip, Op, op)
      }(pp.test, ip, Ip)), new Dp(ip.doc, pp.search, {
        ignoreCase: !pp.caseSensitive,
        test: Ip
      }, cp, Op)
    }

    function Ep(pp, ip) {
      return pp.slice((0, op.S)(pp, ip, !1), ip)
    }

    function Xp(pp, ip) {
      return pp.slice(ip, (0, op.S)(pp, ip))
    }
    class lp extends Rp {
      nextMatch(pp, ip, cp) {
        let Op = Cp(this.spec, pp, cp, pp.doc.length).next();
        return Op.done && (Op = Cp(this.spec, pp, 0, ip).next()), Op.done ? null : Op.value
      }
      prevMatchInRange(pp, ip, cp) {
        for (let Op = 1;; Op++) {
          let op = Math.max(ip, cp - 1e4 * Op),
            Ip = Cp(this.spec, pp, op, cp),
            Sp = null;
          for (; !Ip.next().done;) Sp = Ip.value;
          if (Sp && (op == ip || Sp.from > op + 10)) return Sp;
          if (op == ip) return null
        }
      }
      prevMatch(pp, ip, cp) {
        return this.prevMatchInRange(pp, 0, ip) || this.prevMatchInRange(pp, cp, pp.doc.length)
      }
      getReplacement(pp) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((ip, cp) => {
          if ("&" == cp) return pp.match[0];
          if ("$" == cp) return "$";
          for (let Op = cp.length; Op > 0; Op--) {
            let ip = +cp.slice(0, Op);
            if (ip > 0 && ip < pp.match.length) return pp.match[ip] + cp.slice(Op)
          }
          return ip
        }))
      }
      matchAll(pp, ip) {
        let cp = Cp(this.spec, pp, 0, pp.doc.length),
          Op = [];
        for (; !cp.next().done;) {
          if (Op.length >= ip) return null;
          Op.push(cp.value)
        }
        return Op
      }
      highlight(pp, ip, cp, Op) {
        let op = Cp(this.spec, pp, Math.max(0, ip - 250), Math.min(cp + 250, pp.doc.length));
        for (; !op.next().done;) Op(op.value.from, op.value.to)
      }
    }
    const Qp = op.C.define(),
      Jp = op.C.define(),
      Bp = op.E.define({
        create: pp => new Np(Zp(pp).create(), null),
        update(pp, ip) {
          for (let cp of ip.effects) cp.is(Qp) ? pp = new Np(cp.value.create(), pp.panel) : cp.is(Jp) && (pp = new Np(pp.query, cp.value ? rp : null));
          return pp
        },
        provide: pp => Op.ob.from(pp, (pp => pp.panel))
      });
    class Np {
      constructor(pp, ip) {
        this.query = pp, this.panel = ip
      }
    }
    const Tp = Op.c.mark({
        class: "cm-searchMatch"
      }),
      fp = Op.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      bp = Op.k.fromClass(class {
        constructor(pp) {
          this.view = pp, this.uO = this.highlight(pp.state.field(Bp))
        }
        update(pp) {
          let ip = pp.state.field(Bp);
          (ip != pp.startState.field(Bp) || pp.docChanged || pp.selectionSet || pp.viewportChanged) && (this.uO = this.highlight(ip))
        }
        highlight(pp) {
          let {
            query: ip,
            panel: cp
          } = pp;
          if (!cp || !ip.spec.valid) return Op.c.none;
          let {
            view: Ip
          } = this, Sp = new op.w;
          for (let Op = 0, op = Ip.Z2, xp = op.length; Op < xp; Op++) {
            let {
              from: pp,
              to: cp
            } = op[Op];
            for (; Op < xp - 1 && cp > op[Op + 1].from - 500;) cp = op[++Op].to;
            ip.highlight(Ip.state, pp, cp, ((pp, ip) => {
              let cp = Ip.state.selection.By.some((cp => cp.from == pp && cp.to == ip));
              Sp.add(pp, ip, cp ? fp : Tp)
            }))
          }
          return Sp.finish()
        }
      }, {
        uO: pp => pp.uO
      });

    function hp(pp) {
      return ip => {
        let cp = ip.state.field(Bp, !1);
        return cp && cp.query.spec.valid ? pp(ip, cp) : Kp(ip)
      }
    }
    const ap = hp(((pp, ip) => {
        let {
          query: cp
        } = ip, {
          to: Op
        } = pp.state.selection.main, Ip = cp.nextMatch(pp.state, Op, Op);
        if (!Ip) return !1;
        let Sp = op.l.single(Ip.from, Ip.to),
          xp = pp.state.facet(kp);
        return pp.dispatch({
          selection: Sp,
          effects: [Si(pp, Ip), xp.scrollToMatch(Sp.main, pp)],
          userEvent: "select.search"
        }), sp(pp), !0
      })),
      np = hp(((pp, ip) => {
        let {
          query: cp
        } = ip, {
          state: Op
        } = pp, {
          from: Ip
        } = Op.selection.main, Sp = cp.prevMatch(Op, Ip, Ip);
        if (!Sp) return !1;
        let xp = op.l.single(Sp.from, Sp.to),
          Lp = pp.state.facet(kp);
        return pp.dispatch({
          selection: xp,
          effects: [Si(pp, Sp), Lp.scrollToMatch(xp.main, pp)],
          userEvent: "select.search"
        }), sp(pp), !0
      })),
      Fp = hp(((pp, ip) => {
        let {
          query: cp
        } = ip, Op = cp.matchAll(pp.state, 1e3);
        return !(!Op || !Op.length) && (pp.dispatch({
          selection: op.l.create(Op.map((pp => op.l.range(pp.from, pp.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      gp = hp(((pp, ip) => {
        let {
          query: cp
        } = ip, {
          state: Ip
        } = pp, {
          from: Sp,
          to: xp
        } = Ip.selection.main;
        if (Ip.readOnly) return !1;
        let Lp = cp.nextMatch(Ip, Sp, Sp);
        if (!Lp) return !1;
        let Yp, Dp, Ap = Lp,
          Pp = [],
          Wp = [];
        Ap.from == Sp && Ap.to == xp && (Dp = Ip.toText(cp.getReplacement(Ap)), Pp.push({
          from: Ap.from,
          to: Ap.to,
          insert: Dp
        }), Ap = cp.nextMatch(Ip, Ap.from, Ap.to), Wp.push(Op.f.announce.of(Ip.phrase("replaced match on line $", Ip.doc.lineAt(Sp).number) + ".")));
        let yp = pp.state.changes(Pp);
        return Ap && (Yp = op.l.single(Ap.from, Ap.to).map(yp), Wp.push(Si(pp, Ap)), Wp.push(Ip.facet(kp).scrollToMatch(Yp.main, pp))), pp.dispatch({
          changes: yp,
          selection: Yp,
          effects: Wp,
          userEvent: "input.replace"
        }), !0
      })),
      Gp = hp(((pp, ip) => {
        let {
          query: cp
        } = ip;
        if (pp.state.readOnly) return !1;
        let op = cp.matchAll(pp.state, 1e9).map((pp => {
          let {
            from: ip,
            to: Op
          } = pp;
          return {
            from: ip,
            to: Op,
            insert: cp.getReplacement(pp)
          }
        }));
        if (!op.length) return !1;
        let Ip = pp.state.phrase("replaced $ matches", op.length) + ".";
        return pp.dispatch({
          changes: op,
          effects: Op.f.announce.of(Ip),
          userEvent: "input.replace.all"
        }), !0
      }));

    function rp(pp) {
      return pp.state.facet(kp).createPanel(pp)
    }

    function Zp(pp, ip) {
      var cp, Op, op, Ip, Sp;
      let xp = pp.selection.main,
        Lp = xp.empty || xp.to > xp.from + 100 ? "" : pp.sliceDoc(xp.from, xp.to);
      if (ip && !Lp) return ip;
      let Yp = pp.facet(kp);
      return new mp({
        search: (null !== (cp = null === ip || void 0 === ip ? void 0 : ip.literal) && void 0 !== cp ? cp : Yp.literal) ? Lp : Lp.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Op = null === ip || void 0 === ip ? void 0 : ip.caseSensitive) && void 0 !== Op ? Op : Yp.caseSensitive,
        literal: null !== (op = null === ip || void 0 === ip ? void 0 : ip.literal) && void 0 !== op ? op : Yp.literal,
        regexp: null !== (Ip = null === ip || void 0 === ip ? void 0 : ip.regexp) && void 0 !== Ip ? Ip : Yp.regexp,
        wholeWord: null !== (Sp = null === ip || void 0 === ip ? void 0 : ip.wholeWord) && void 0 !== Sp ? Sp : Yp.wholeWord
      })
    }

    function zp(pp) {
      let ip = (0, Op.x)(pp, rp);
      return ip && ip.dom.querySelector("[main-field]")
    }

    function sp(pp) {
      let ip = zp(pp);
      ip && ip == pp.root.activeElement && ip.select()
    }
    const Kp = pp => {
        let ip = pp.state.field(Bp, !1);
        if (ip && ip.panel) {
          let cp = zp(pp);
          if (cp && cp != pp.root.activeElement) {
            let Op = Zp(pp.state, ip.query.spec);
            Op.valid && pp.dispatch({
              effects: Qp.of(Op)
            }), cp.focus(), cp.select()
          }
        } else pp.dispatch({
          effects: [Jp.of(!0), ip ? Qp.of(Zp(pp.state, ip.query.spec)) : op.C.appendConfig.of(Li)]
        });
        return !0
      },
      Vp = pp => {
        let ip = pp.state.field(Bp, !1);
        if (!ip || !ip.panel) return !1;
        let cp = (0, Op.x)(pp, rp);
        return cp && cp.dom.contains(pp.root.activeElement) && pp.focus(), pp.dispatch({
          effects: Jp.of(!1)
        }), !0
      },
      ii = [{
        key: "Mod-f",
        run: Kp,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: ap,
        shift: np,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: ap,
        shift: np,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Vp,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp, Op = ip.selection;
          if (Op.By.length > 1 || Op.main.empty) return !1;
          let {
            from: Ip,
            to: Sp
          } = Op.main, Lp = [], Yp = 0;
          for (let Dp = new xp(ip.doc, ip.sliceDoc(Ip, Sp)); !Dp.next().done;) {
            if (Lp.length > 1e3) return !1;
            Dp.value.from == Ip && (Yp = Lp.length), Lp.push(op.l.range(Dp.value.from, Dp.value.to))
          }
          return cp(ip.update({
            selection: op.l.create(Lp, Yp),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: pp => {
          let {
            state: ip
          } = pp, cp = String(ip.doc.lineAt(pp.state.selection.main.head).number), {
            close: Ip,
            result: Sp
          } = (0, Op.lb)(pp, {
            label: ip.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: cp
            },
            focus: !0,
            submitLabel: ip.phrase("go")
          });
          return Sp.then((cp => {
            let Sp = cp && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(cp.elements.line.value);
            if (!Sp) return void pp.dispatch({
              effects: Ip
            });
            let xp = ip.doc.lineAt(ip.selection.main.head),
              [, Lp, Yp, Dp, Ap] = Sp,
              Pp = Dp ? +Dp.slice(1) : 0,
              Wp = Yp ? +Yp : xp.number;
            if (Yp && Ap) {
              let pp = Wp / 100;
              Lp && (pp = pp * ("-" == Lp ? -1 : 1) + xp.number / ip.doc.lines), Wp = Math.round(ip.doc.lines * pp)
            } else Yp && Lp && (Wp = Wp * ("-" == Lp ? -1 : 1) + xp.number);
            let yp = ip.doc.line(Math.max(1, Math.min(ip.doc.lines, Wp))),
              Up = op.l.cursor(yp.from + Math.max(0, Math.min(Pp, yp.length)));
            pp.dispatch({
              effects: [Ip, Op.f.scrollIntoView(Up.from, {
                y: "center"
              })],
              selection: Up
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp, {
            By: Ip
          } = ip.selection;
          if (Ip.some((pp => pp.from === pp.to))) return (pp => {
            let {
              state: ip,
              dispatch: cp
            } = pp, {
              selection: Op
            } = ip, Ip = op.l.create(Op.By.map((pp => ip.wordAt(pp.head) || op.l.cursor(pp.head))), Op.mainIndex);
            return !Ip.eq(Op) && (cp(ip.update({
              selection: Ip
            })), !0)
          })({
            state: ip,
            dispatch: cp
          });
          let Sp = ip.sliceDoc(Ip[0].from, Ip[0].to);
          if (ip.selection.By.some((pp => ip.sliceDoc(pp.from, pp.to) != Sp))) return !1;
          let Lp = function(pp, ip) {
            let {
              main: cp,
              By: Op
            } = pp.selection, op = pp.wordAt(cp.head), Ip = op && op.from == cp.from && op.to == cp.to;
            for (let Sp = !1, Lp = new xp(pp.doc, ip, Op[Op.length - 1].to);;) {
              if (Lp.next(), !Lp.done) {
                if (Sp && Op.some((pp => pp.from == Lp.value.from))) continue;
                if (Ip) {
                  let ip = pp.wordAt(Lp.value.from);
                  if (!ip || ip.from != Lp.value.from || ip.to != Lp.value.to) continue
                }
                return Lp.value
              }
              if (Sp) return null;
              Lp = new xp(pp.doc, ip, 0, Math.max(0, Op[Op.length - 1].from - 1)), Sp = !0
            }
          }(ip, Sp);
          return !!Lp && (cp(ip.update({
            selection: ip.selection.addRange(op.l.range(Lp.from, Lp.to), !1),
            effects: Op.f.scrollIntoView(Lp.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class ci {
      constructor(pp) {
        this.view = pp;
        let ip = this.query = pp.state.field(Bp).query.spec;

        function cp(pp, ip, cp) {
          return (0, Ip.d)("button", {
            class: "cm-button",
            name: pp,
            onclick: ip,
            type: "button"
          }, cp)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Ip.d)("input", {
          value: ip.search,
          placeholder: Oi(pp, "Find"),
          "aria-label": Oi(pp, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Ip.d)("input", {
          value: ip.replace,
          placeholder: Oi(pp, "Replace"),
          "aria-label": Oi(pp, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Ip.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: ip.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Ip.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: ip.regexp,
          onchange: this.commit
        }), this.wordField = (0, Ip.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: ip.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Ip.d)("div", {
          onkeydown: pp => this.keydown(pp),
          class: "cm-search"
        }, [this.searchField, cp("next", (() => ap(pp)), [Oi(pp, "next")]), cp("prev", (() => np(pp)), [Oi(pp, "previous")]), cp("select", (() => Fp(pp)), [Oi(pp, "all")]), (0, Ip.d)("label", null, [this.caseField, Oi(pp, "match case")]), (0, Ip.d)("label", null, [this.reField, Oi(pp, "regexp")]), (0, Ip.d)("label", null, [this.wordField, Oi(pp, "by word")]), ...pp.state.readOnly ? [] : [(0, Ip.d)("br"), this.replaceField, cp("replace", (() => gp(pp)), [Oi(pp, "replace")]), cp("replaceAll", (() => Gp(pp)), [Oi(pp, "replace all")])], (0, Ip.d)("button", {
          name: "close",
          onclick: () => Vp(pp),
          "aria-label": Oi(pp, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let pp = new mp({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        pp.eq(this.query) || (this.query = pp, this.view.dispatch({
          effects: Qp.of(pp)
        }))
      }
      keydown(pp) {
        (0, Op.hb)(this.view, pp, "search-panel") ? pp.preventDefault(): 13 == pp.keyCode && pp.target == this.searchField ? (pp.preventDefault(), (pp.shiftKey ? np : ap)(this.view)) : 13 == pp.keyCode && pp.target == this.replaceField && (pp.preventDefault(), gp(this.view))
      }
      update(pp) {
        for (let ip of pp.transactions)
          for (let pp of ip.effects) pp.is(Qp) && !pp.value.eq(this.query) && this.setQuery(pp.value)
      }
      setQuery(pp) {
        this.query = pp, this.searchField.value = pp.search, this.replaceField.value = pp.replace, this.caseField.checked = pp.caseSensitive, this.reField.checked = pp.regexp, this.wordField.checked = pp.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(kp).top
      }
    }

    function Oi(pp, ip) {
      return pp.state.phrase(ip)
    }
    const oi = 30,
      Ii = /[\s\.,:;?!]/;

    function Si(pp, ip) {
      let {
        from: cp,
        to: op
      } = ip, Ip = pp.state.doc.lineAt(cp), Sp = pp.state.doc.lineAt(op).to, xp = Math.max(Ip.from, cp - oi), Lp = Math.min(Sp, op + oi), Yp = pp.state.sliceDoc(xp, Lp);
      if (xp != Ip.from)
        for (let Op = 0; Op < oi; Op++)
          if (!Ii.test(Yp[Op + 1]) && Ii.test(Yp[Op])) {
            Yp = Yp.slice(Op);
            break
          } if (Lp != Sp)
        for (let Op = Yp.length - 1; Op > Yp.length - oi; Op--)
          if (!Ii.test(Yp[Op - 1]) && Ii.test(Yp[Op])) {
            Yp = Yp.slice(0, Op);
            break
          } return Op.f.announce.of(`${pp.state.phrase("current match")}. ${Yp} ${pp.state.phrase("on line")} ${Ip.number}.`)
    }
    const xi = Op.f.baseTheme({
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
      Li = [Bp, op.u.low(bp), xi]
  },
  41556: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => lp,
      e: () => Ai,
      f: () => Co,
      j: () => DS,
      k: () => Vi,
      l: () => Ep,
      p: () => QI,
      q: () => iI,
      u: () => DI,
      x: () => iS,
      y: () => KI,
      C: () => US,
      J: () => uI,
      F: () => JS,
      N: () => tI,
      Q: () => sI,
      U: () => fo,
      Y: () => ES,
      _: () => Zi,
      $: () => RI,
      db: () => EI,
      hb: () => ao,
      lb: () => SS,
      ob: () => IS,
      qb: () => FI
    });
    for (var Op = cp(41548), op = cp(41560), Ip = {
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
      }, Sp = {
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
      }, xp = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Lp = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Yp = 0; Yp < 10; Yp++) Ip[48 + Yp] = Ip[96 + Yp] = String(Yp);
    for (Yp = 1; Yp <= 24; Yp++) Ip[Yp + 111] = "F" + Yp;
    for (Yp = 65; Yp <= 90; Yp++) Ip[Yp] = String.fromCharCode(Yp + 32), Sp[Yp] = String.fromCharCode(Yp);
    for (var Dp in Ip) Sp.hasOwnProperty(Dp) || (Sp[Dp] = Ip[Dp]);
    var Ap = cp(41562);
    let Pp = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Wp = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const yp = /Edge\/(\d+)/.exec(Pp.userAgent),
      Up = /MSIE \d/.test(Pp.userAgent),
      wp = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Pp.userAgent),
      vp = !!(Up || wp || yp),
      tp = !vp && /gecko\/(\d+)/i.test(Pp.userAgent),
      Hp = !vp && /Chrome\/(\d+)/.exec(Pp.userAgent),
      dp = "webkitFontSmoothing" in Wp.documentElement.style,
      ep = !vp && /Apple Computer/.test(Pp.vendor),
      jp = ep && (/Mobile\/\w+/.test(Pp.userAgent) || Pp.maxTouchPoints > 2);
    var kp = {
      mac: jp || /Mac/.test(Pp.platform),
      windows: /Win/.test(Pp.platform),
      linux: /Linux|X11/.test(Pp.platform),
      ie: vp,
      ie_version: Up ? Wp.documentMode || 6 : wp ? +wp[1] : yp ? +yp[1] : 0,
      gecko: tp,
      gecko_version: tp ? +(/Firefox\/(\d+)/.exec(Pp.userAgent) || [0, 0])[1] : 0,
      chrome: !!Hp,
      chrome_version: Hp ? +Hp[1] : 0,
      ios: jp,
      android: /Android\b/.test(Pp.userAgent),
      webkit: dp,
      webkit_version: dp ? +(/\bAppleWebKit\/(\d+)/.exec(Pp.userAgent) || [0, 0])[1] : 0,
      safari: ep,
      safari_version: ep ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Pp.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Wp.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function mp(pp, ip) {
      for (let cp in pp) "class" == cp && ip.class ? ip.class += " " + pp.class : "style" == cp && ip.style ? ip.style += ";" + pp.style : ip[cp] = pp[cp];
      return ip
    }
    const Rp = Object.create(null);

    function qp(pp, ip, cp) {
      if (pp == ip) return !0;
      pp || (pp = Rp), ip || (ip = Rp);
      let Op = Object.keys(pp),
        op = Object.keys(ip);
      if (Op.length - (cp && Op.indexOf(cp) > -1 ? 1 : 0) != op.length - (cp && op.indexOf(cp) > -1 ? 1 : 0)) return !1;
      for (let Ip of Op)
        if (Ip != cp && (-1 == op.indexOf(Ip) || pp[Ip] !== ip[Ip])) return !1;
      return !0
    }

    function Mp(pp, ip, cp) {
      let Op = !1;
      if (ip)
        for (let op in ip) cp && op in cp || (Op = !0, "style" == op ? pp.style.cssText = "" : pp.removeAttribute(op));
      if (cp)
        for (let op in cp) ip && ip[op] == cp[op] || (Op = !0, "style" == op ? pp.style.cssText = cp[op] : pp.setAttribute(op, cp[op]));
      return Op
    }

    function Cp(pp) {
      let ip = Object.create(null);
      for (let cp = 0; cp < pp.attributes.length; cp++) {
        let Op = pp.attributes[cp];
        ip[Op.name] = Op.value
      }
      return ip
    }
    class Ep {
      eq(pp) {
        return !1
      }
      updateDOM(pp, ip, cp) {
        return !1
      }
      compare(pp) {
        return this == pp || this.constructor == pp.constructor && this.eq(pp)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(pp) {
        return !0
      }
      coordsAt(pp, ip, cp) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(pp) {}
    }
    var Xp = function(pp) {
      return pp[pp.Text = 0] = "Text", pp[pp.WidgetBefore = 1] = "WidgetBefore", pp[pp.WidgetAfter = 2] = "WidgetAfter", pp[pp.WidgetRange = 3] = "WidgetRange", pp
    }(Xp || (Xp = {}));
    class lp extends Op.B {
      constructor(pp, ip, cp, Op) {
        super(), this.startSide = pp, this.endSide = ip, this.widget = cp, this.spec = Op
      }
      get heightRelevant() {
        return !1
      }
      static mark(pp) {
        return new Qp(pp)
      }
      static widget(pp) {
        let ip = Math.max(-1e4, Math.min(1e4, pp.side || 0)),
          cp = !!pp.block;
        return ip += cp && !pp.inlineOrder ? ip > 0 ? 3e8 : -4e8 : ip > 0 ? 1e8 : -1e8, new Bp(pp, ip, ip, cp, pp.widget || null, !1)
      }
      static replace(pp) {
        let ip, cp, Op = !!pp.block;
        if (pp.isBlockGap) ip = -5e8, cp = 4e8;
        else {
          let {
            start: op,
            end: Ip
          } = Np(pp, Op);
          ip = (op ? Op ? -3e8 : -1 : 5e8) - 1, cp = 1 + (Ip ? Op ? 2e8 : 1 : -6e8)
        }
        return new Bp(pp, ip, cp, Op, pp.widget || null, !0)
      }
      static line(pp) {
        return new Jp(pp)
      }
      static set(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Op.A.of(pp, ip)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    lp.none = Op.A.empty;
    class Qp extends lp {
      constructor(pp) {
        let {
          start: ip,
          end: cp
        } = Np(pp);
        super(ip ? -1 : 5e8, cp ? 1 : -6e8, null, pp), this.tagName = pp.tagName || "span", this.attrs = pp.class && pp.attributes ? mp(pp.attributes, {
          class: pp.class
        }) : pp.class ? {
          class: pp.class
        } : pp.attributes || Rp
      }
      eq(pp) {
        return this == pp || pp instanceof Qp && this.tagName == pp.tagName && qp(this.attrs, pp.attrs)
      }
      range(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
        if (pp >= ip) throw new RangeError("Mark decorations may not be empty");
        return super.range(pp, ip)
      }
    }
    Qp.prototype.point = !1;
    class Jp extends lp {
      constructor(pp) {
        super(-2e8, -2e8, null, pp)
      }
      eq(pp) {
        return pp instanceof Jp && this.spec.class == pp.spec.class && qp(this.spec.attributes, pp.spec.attributes)
      }
      range(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
        if (ip != pp) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(pp, ip)
      }
    }
    Jp.prototype.mapMode = Op.r.TrackBefore, Jp.prototype.point = !0;
    class Bp extends lp {
      constructor(pp, ip, cp, op, Ip, Sp) {
        super(ip, cp, Ip, pp), this.block = op, this.isReplace = Sp, this.mapMode = op ? ip <= 0 ? Op.r.TrackBefore : Op.r.TrackAfter : Op.r.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Xp.WidgetRange : this.startSide <= 0 ? Xp.WidgetBefore : Xp.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(pp) {
        return pp instanceof Bp && (ip = this.widget, cp = pp.widget, ip == cp || !!(ip && cp && ip.compare(cp))) && this.block == pp.block && this.startSide == pp.startSide && this.endSide == pp.endSide;
        var ip, cp
      }
      range(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
        if (this.isReplace && (pp > ip || pp == ip && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && ip != pp) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(pp, ip)
      }
    }

    function Np(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: cp,
          inclusiveEnd: Op
        } = pp;
      return null == cp && (cp = pp.inclusive), null == Op && (Op = pp.inclusive), {
        start: null !== cp && void 0 !== cp ? cp : ip,
        end: null !== Op && void 0 !== Op ? Op : ip
      }
    }

    function Tp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        op = cp.length - 1;
      op >= 0 && cp[op] + Op >= pp ? cp[op] = Math.max(cp[op], ip) : cp.push(pp, ip)
    }
    Bp.prototype.point = !0;
    class fp extends Op.B {
      constructor(pp, ip) {
        super(), this.tagName = pp, this.attributes = ip
      }
      eq(pp) {
        return pp == this || pp instanceof fp && this.tagName == pp.tagName && qp(this.attributes, pp.attributes)
      }
      static create(pp) {
        return new fp(pp.tagName, pp.attributes || Rp)
      }
      static set(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Op.A.of(pp, ip)
      }
    }

    function bp(pp) {
      let ip;
      return ip = 11 == pp.nodeType ? pp.getSelection ? pp : pp.ownerDocument : pp, ip.getSelection()
    }

    function hp(pp, ip) {
      return !!ip && (pp == ip || pp.contains(1 != ip.nodeType ? ip.parentNode : ip))
    }

    function ap(pp, ip) {
      if (!ip.anchorNode) return !1;
      try {
        return hp(pp, ip.anchorNode)
      } catch (cp) {
        return !1
      }
    }

    function np(pp) {
      return 3 == pp.nodeType ? Ii(pp, 0, pp.nodeValue.length).getClientRects() : 1 == pp.nodeType ? pp.getClientRects() : []
    }

    function Fp(pp, ip, cp, Op) {
      return !!cp && (rp(pp, ip, cp, Op, -1) || rp(pp, ip, cp, Op, 1))
    }

    function gp(pp) {
      for (var ip = 0;; ip++)
        if (!(pp = pp.previousSibling)) return ip
    }

    function Gp(pp) {
      return 1 == pp.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(pp.nodeName)
    }

    function rp(pp, ip, cp, Op, op) {
      for (;;) {
        if (pp == cp && ip == Op) return !0;
        if (ip == (op < 0 ? 0 : Zp(pp))) {
          if ("DIV" == pp.nodeName) return !1;
          let cp = pp.parentNode;
          if (!cp || 1 != cp.nodeType) return !1;
          ip = gp(pp) + (op < 0 ? 0 : 1), pp = cp
        } else {
          if (1 != pp.nodeType) return !1;
          if (1 == (pp = pp.childNodes[ip + (op < 0 ? -1 : 0)]).nodeType && "false" == pp.contentEditable) return !1;
          ip = op < 0 ? Zp(pp) : 0
        }
      }
    }

    function Zp(pp) {
      return 3 == pp.nodeType ? pp.nodeValue.length : pp.childNodes.length
    }

    function zp(pp, ip) {
      let cp = ip ? pp.left : pp.right;
      return {
        left: cp,
        right: cp,
        top: pp.top,
        bottom: pp.bottom
      }
    }

    function sp(pp) {
      let ip = pp.visualViewport;
      return ip ? {
        left: 0,
        right: ip.width,
        top: 0,
        bottom: ip.height
      } : {
        left: 0,
        right: pp.innerWidth,
        top: 0,
        bottom: pp.innerHeight
      }
    }

    function Kp(pp, ip) {
      let cp = ip.width / pp.offsetWidth,
        Op = ip.height / pp.offsetHeight;
      return (cp > .995 && cp < 1.005 || !isFinite(cp) || Math.abs(ip.width - pp.offsetWidth) < 1) && (cp = 1), (Op > .995 && Op < 1.005 || !isFinite(Op) || Math.abs(ip.height - pp.offsetHeight) < 1) && (Op = 1), {
        scaleX: cp,
        scaleY: Op
      }
    }

    function Vp(pp) {
      let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        cp = pp.ownerDocument,
        Op = null,
        op = null;
      for (let Ip = pp.parentNode; Ip && (Ip != cp.body && (ip && !Op || !op));)
        if (1 == Ip.nodeType) !op && Ip.scrollHeight > Ip.clientHeight && (op = Ip), ip && !Op && Ip.scrollWidth > Ip.clientWidth && (Op = Ip), Ip = Ip.assignedSlot || Ip.parentNode;
        else {
          if (11 != Ip.nodeType) break;
          Ip = Ip.host
        } return {
        x: Op,
        y: op
      }
    }
    fp.prototype.startSide = fp.prototype.endSide = -1;
    class ii {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(pp) {
        return this.anchorNode == pp.anchorNode && this.anchorOffset == pp.anchorOffset && this.focusNode == pp.focusNode && this.focusOffset == pp.focusOffset
      }
      setRange(pp) {
        let {
          anchorNode: ip,
          focusNode: cp
        } = pp;
        this.set(ip, Math.min(pp.anchorOffset, ip ? Zp(ip) : 0), cp, Math.min(pp.focusOffset, cp ? Zp(cp) : 0))
      }
      set(pp, ip, cp, Op) {
        this.anchorNode = pp, this.anchorOffset = ip, this.focusNode = cp, this.focusOffset = Op
      }
    }
    let ci, Oi = null;

    function oi(pp) {
      if (pp.setActive) return pp.setActive();
      if (Oi) return pp.focus(Oi);
      let ip = [];
      for (let cp = pp; cp && (ip.push(cp, cp.scrollTop, cp.scrollLeft), cp != cp.ownerDocument); cp = cp.parentNode);
      if (pp.focus(null == Oi ? {
          get preventScroll() {
            return Oi = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !Oi) {
        Oi = !1;
        for (let pp = 0; pp < ip.length;) {
          let cp = ip[pp++],
            Op = ip[pp++],
            op = ip[pp++];
          cp.scrollTop != Op && (cp.scrollTop = Op), cp.scrollLeft != op && (cp.scrollLeft = op)
        }
      }
    }

    function Ii(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip,
        Op = ci || (ci = document.createRange());
      return Op.setEnd(pp, cp), Op.setStart(pp, ip), Op
    }

    function Si(pp, ip, cp, Op) {
      let op = {
        key: ip,
        code: ip,
        keyCode: cp,
        which: cp,
        cancelable: !0
      };
      Op && ({
        altKey: op.altKey,
        ctrlKey: op.ctrlKey,
        shiftKey: op.shiftKey,
        metaKey: op.metaKey
      } = Op);
      let Ip = new KeyboardEvent("keydown", op);
      Ip.synthetic = !0, pp.dispatchEvent(Ip);
      let Sp = new KeyboardEvent("keyup", op);
      return Sp.synthetic = !0, pp.dispatchEvent(Sp), Ip.defaultPrevented || Sp.defaultPrevented
    }

    function xi(pp) {
      return pp instanceof Window ? pp.pageYOffset > Math.max(0, pp.document.documentElement.scrollHeight - pp.innerHeight - 4) : pp.scrollTop > Math.max(1, pp.scrollHeight - pp.clientHeight - 4)
    }

    function Li(pp, ip) {
      for (let cp = pp, Op = ip;;) {
        if (3 == cp.nodeType && Op > 0) return {
          node: cp,
          offset: Op
        };
        if (1 == cp.nodeType && Op > 0) {
          if ("false" == cp.contentEditable) return null;
          cp = cp.childNodes[Op - 1], Op = Zp(cp)
        } else {
          if (!cp.parentNode || Gp(cp)) return null;
          Op = gp(cp), cp = cp.parentNode
        }
      }
    }

    function Yi(pp, ip) {
      for (let cp = pp, Op = ip;;) {
        if (3 == cp.nodeType && Op < cp.nodeValue.length) return {
          node: cp,
          offset: Op
        };
        if (1 == cp.nodeType && Op < cp.childNodes.length) {
          if ("false" == cp.contentEditable) return null;
          cp = cp.childNodes[Op], Op = 0
        } else {
          if (!cp.parentNode || Gp(cp)) return null;
          Op = gp(cp) + 1, cp = cp.parentNode
        }
      }
    }
    kp.safari && kp.safari_version >= 26 && (Oi = !1);
    class Di {
      constructor(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = pp, this.offset = ip, this.precise = cp
      }
      static before(pp, ip) {
        return new Di(pp.parentNode, gp(pp), ip)
      }
      static after(pp, ip) {
        return new Di(pp.parentNode, gp(pp) + 1, ip)
      }
    }
    var Ai = function(pp) {
      return pp[pp.LTR = 0] = "LTR", pp[pp.RTL = 1] = "RTL", pp
    }(Ai || (Ai = {}));
    const Pi = Ai.LTR,
      Wi = Ai.RTL;

    function yi(pp) {
      let ip = [];
      for (let cp = 0; cp < pp.length; cp++) ip.push(1 << +pp[cp]);
      return ip
    }
    const Ui = yi("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      wi = yi("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      vi = Object.create(null),
      ti = [];
    for (let BS of ["()", "[]", "{}"]) {
      let pp = BS.charCodeAt(0),
        ip = BS.charCodeAt(1);
      vi[pp] = ip, vi[ip] = -pp
    }

    function Hi(pp) {
      return pp <= 247 ? Ui[pp] : 1424 <= pp && pp <= 1524 ? 2 : 1536 <= pp && pp <= 1785 ? wi[pp - 1536] : 1774 <= pp && pp <= 2220 ? 4 : 8192 <= pp && pp <= 8204 ? 256 : 64336 <= pp && pp <= 65023 ? 4 : 1
    }
    const di = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class ei {
      get dir() {
        return this.level % 2 ? Wi : Pi
      }
      constructor(pp, ip, cp) {
        this.from = pp, this.to = ip, this.level = cp
      }
      side(pp, ip) {
        return this.dir == ip == pp ? this.to : this.from
      }
      forward(pp, ip) {
        return pp == (this.dir == ip)
      }
      static find(pp, ip, cp, Op) {
        let op = -1;
        for (let Ip = 0; Ip < pp.length; Ip++) {
          let Sp = pp[Ip];
          if (Sp.from <= ip && Sp.to >= ip) {
            if (Sp.level == cp) return Ip;
            (op < 0 || (0 != Op ? Op < 0 ? Sp.from < ip : Sp.to > ip : pp[op].level > Sp.level)) && (op = Ip)
          }
        }
        if (op < 0) throw new RangeError("Index out of range");
        return op
      }
    }

    function ui(pp, ip) {
      if (pp.length != ip.length) return !1;
      for (let cp = 0; cp < pp.length; cp++) {
        let Op = pp[cp],
          op = ip[cp];
        if (Op.from != op.from || Op.to != op.to || Op.direction != op.direction || !ui(Op.inner, op.inner)) return !1
      }
      return !0
    }
    const ji = [];

    function ki(pp, ip, cp, Op, op, Ip, Sp) {
      let xp = Op % 2 ? 2 : 1;
      if (Op % 2 == op % 2)
        for (let Lp = ip, Yp = 0; Lp < cp;) {
          let ip = !0,
            Dp = !1;
          if (Yp == Ip.length || Lp < Ip[Yp].from) {
            let pp = ji[Lp];
            pp != xp && (ip = !1, Dp = 16 == pp)
          }
          let Ap = ip || 1 != xp ? null : [],
            Pp = ip ? Op : Op + 1,
            Wp = Lp;
          pp: for (;;)
            if (Yp < Ip.length && Wp == Ip[Yp].from) {
              if (Dp) break pp;
              let yp = Ip[Yp];
              if (!ip)
                for (let pp = yp.to, ip = Yp + 1;;) {
                  if (pp == cp) break pp;
                  if (!(ip < Ip.length && Ip[ip].from == pp)) {
                    if (ji[pp] == xp) break pp;
                    break
                  }
                  pp = Ip[ip++].to
                }
              if (Yp++, Ap) Ap.push(yp);
              else {
                yp.from > Lp && Sp.push(new ei(Lp, yp.from, Pp)), mi(pp, yp.direction == Pi != !(Pp % 2) ? Op + 1 : Op, op, yp.inner, yp.from, yp.to, Sp), Lp = yp.to
              }
              Wp = yp.to
            } else {
              if (Wp == cp || (ip ? ji[Wp] != xp : ji[Wp] == xp)) break;
              Wp++
            } Ap ? ki(pp, Lp, Wp, Op + 1, op, Ap, Sp) : Lp < Wp && Sp.push(new ei(Lp, Wp, Pp)), Lp = Wp
        } else
          for (let Lp = cp, Yp = Ip.length; Lp > ip;) {
            let cp = !0,
              Dp = !1;
            if (!Yp || Lp > Ip[Yp - 1].to) {
              let pp = ji[Lp - 1];
              pp != xp && (cp = !1, Dp = 16 == pp)
            }
            let Ap = cp || 1 != xp ? null : [],
              Pp = cp ? Op : Op + 1,
              Wp = Lp;
            pp: for (;;)
              if (Yp && Wp == Ip[Yp - 1].to) {
                if (Dp) break pp;
                let yp = Ip[--Yp];
                if (!cp)
                  for (let pp = yp.from, cp = Yp;;) {
                    if (pp == ip) break pp;
                    if (!cp || Ip[cp - 1].to != pp) {
                      if (ji[pp - 1] == xp) break pp;
                      break
                    }
                    pp = Ip[--cp].from
                  }
                if (Ap) Ap.push(yp);
                else {
                  yp.to < Lp && Sp.push(new ei(yp.to, Lp, Pp)), mi(pp, yp.direction == Pi != !(Pp % 2) ? Op + 1 : Op, op, yp.inner, yp.from, yp.to, Sp), Lp = yp.from
                }
                Wp = yp.from
              } else {
                if (Wp == ip || (cp ? ji[Wp - 1] != xp : ji[Wp - 1] == xp)) break;
                Wp--
              } Ap ? ki(pp, Wp, Lp, Op + 1, op, Ap, Sp) : Wp < Lp && Sp.push(new ei(Wp, Lp, Pp)), Lp = Wp
          }
    }

    function mi(pp, ip, cp, Op, op, Ip, Sp) {
      let xp = ip % 2 ? 2 : 1;
      ! function(pp, ip, cp, Op, op) {
        for (let Ip = 0; Ip <= Op.length; Ip++) {
          let Sp = Ip ? Op[Ip - 1].to : ip,
            xp = Ip < Op.length ? Op[Ip].from : cp,
            Lp = Ip ? 256 : op;
          for (let ip = Sp, cp = Lp, Op = Lp; ip < xp; ip++) {
            let op = Hi(pp.charCodeAt(ip));
            512 == op ? op = cp : 8 == op && 4 == Op && (op = 16), ji[ip] = 4 == op ? 2 : op, 7 & op && (Op = op), cp = op
          }
          for (let pp = Sp, ip = Lp, Op = Lp; pp < xp; pp++) {
            let op = ji[pp];
            if (128 == op) pp < xp - 1 && ip == ji[pp + 1] && 24 & ip ? op = ji[pp] = ip : ji[pp] = 256;
            else if (64 == op) {
              let op = pp + 1;
              for (; op < xp && 64 == ji[op];) op++;
              let Ip = pp && 8 == ip || op < cp && 8 == ji[op] ? 1 == Op ? 1 : 8 : 256;
              for (let ip = pp; ip < op; ip++) ji[ip] = Ip;
              pp = op - 1
            } else 8 == op && 1 == Op && (ji[pp] = 1);
            ip = op, 7 & op && (Op = op)
          }
        }
      }(pp, op, Ip, Op, xp),
      function(pp, ip, cp, Op, op) {
        let Ip = 1 == op ? 2 : 1;
        for (let Sp = 0, xp = 0, Lp = 0; Sp <= Op.length; Sp++) {
          let Yp = Sp ? Op[Sp - 1].to : ip,
            Dp = Sp < Op.length ? Op[Sp].from : cp;
          for (let ip, cp, Op, Sp = Yp; Sp < Dp; Sp++)
            if (cp = vi[ip = pp.charCodeAt(Sp)])
              if (cp < 0) {
                for (let pp = xp - 3; pp >= 0; pp -= 3)
                  if (ti[pp + 1] == -cp) {
                    let ip = ti[pp + 2],
                      cp = 2 & ip ? op : 4 & ip ? 1 & ip ? Ip : op : 0;
                    cp && (ji[Sp] = ji[ti[pp]] = cp), xp = pp;
                    break
                  }
              } else {
                if (189 == ti.length) break;
                ti[xp++] = Sp, ti[xp++] = ip, ti[xp++] = Lp
              }
          else if (2 == (Op = ji[Sp]) || 1 == Op) {
            let pp = Op == op;
            Lp = pp ? 0 : 1;
            for (let ip = xp - 3; ip >= 0; ip -= 3) {
              let cp = ti[ip + 2];
              if (2 & cp) break;
              if (pp) ti[ip + 2] |= 2;
              else {
                if (4 & cp) break;
                ti[ip + 2] |= 4
              }
            }
          }
        }
      }(pp, op, Ip, Op, xp),
      function(pp, ip, cp, Op) {
        for (let op = 0, Ip = Op; op <= cp.length; op++) {
          let Sp = op ? cp[op - 1].to : pp,
            xp = op < cp.length ? cp[op].from : ip;
          for (let Lp = Sp; Lp < xp;) {
            let Sp = ji[Lp];
            if (256 == Sp) {
              let Sp = Lp + 1;
              for (;;)
                if (Sp == xp) {
                  if (op == cp.length) break;
                  Sp = cp[op++].to, xp = op < cp.length ? cp[op].from : ip
                } else {
                  if (256 != ji[Sp]) break;
                  Sp++
                } let Yp = 1 == Ip,
                Dp = Yp == (1 == (Sp < ip ? ji[Sp] : Op)) ? Yp ? 1 : 2 : Op;
              for (let ip = Sp, Op = op, Ip = Op ? cp[Op - 1].to : pp; ip > Lp;) ip == Ip && (ip = cp[--Op].from, Ip = Op ? cp[Op - 1].to : pp), ji[--ip] = Dp;
              Lp = Sp
            } else Ip = Sp, Lp++
          }
        }
      }(op, Ip, Op, xp), ki(pp, op, Ip, ip, cp, Op, Sp)
    }

    function Ri(pp, ip, cp) {
      if (!pp) return [new ei(0, 0, ip == Wi ? 1 : 0)];
      if (ip == Pi && !cp.length && !di.test(pp)) return qi(pp.length);
      if (cp.length)
        for (; pp.length > ji.length;) ji[ji.length] = 256;
      let Op = [],
        op = ip == Pi ? 0 : 1;
      return mi(pp, op, op, cp, 0, pp.length, Op), Op
    }

    function qi(pp) {
      return [new ei(0, pp, 0)]
    }
    let Mi = "";

    function Ci(pp, ip, cp, op, Ip) {
      var Sp;
      let xp = op.head - pp.from,
        Lp = ei.find(ip, xp, null !== (Sp = op.bidiLevel) && void 0 !== Sp ? Sp : -1, op.assoc),
        Yp = ip[Lp],
        Dp = Yp.side(Ip, cp);
      if (xp == Dp) {
        let pp = Lp += Ip ? 1 : -1;
        if (pp < 0 || pp >= ip.length) return null;
        Yp = ip[Lp = pp], xp = Yp.side(!Ip, cp), Dp = Yp.side(Ip, cp)
      }
      let Ap = (0, Op.S)(pp.text, xp, Yp.forward(Ip, cp));
      (Ap < Yp.from || Ap > Yp.to) && (Ap = Dp), Mi = pp.text.slice(Math.min(xp, Ap), Math.max(xp, Ap));
      let Pp = Lp == (Ip ? ip.length - 1 : 0) ? null : ip[Lp + (Ip ? 1 : -1)];
      return Pp && Ap == Dp && Pp.level + (Ip ? 0 : 1) < Yp.level ? Op.l.cursor(Pp.side(!Ip, cp) + pp.from, Pp.forward(Ip, cp) ? 1 : -1, Pp.level) : Op.l.cursor(Ap + pp.from, Yp.forward(Ip, cp) ? -1 : 1, Yp.level)
    }

    function Ei(pp, ip, cp) {
      for (let Op = ip; Op < cp; Op++) {
        let ip = Hi(pp.charCodeAt(Op));
        if (1 == ip) return Pi;
        if (2 == ip || 4 == ip) return Wi
      }
      return Pi
    }
    const Xi = Op.o.define(),
      li = Op.o.define(),
      Qi = Op.o.define(),
      Ji = Op.o.define(),
      Bi = Op.o.define(),
      Ni = Op.o.define(),
      Ti = Op.o.define(),
      fi = Op.o.define(),
      bi = Op.o.define(),
      ai = Op.o.define({
        combine: pp => pp.some((pp => pp))
      }),
      ni = Op.o.define({
        combine: pp => pp.some((pp => pp))
      }),
      Fi = Op.o.define();
    class gi {
      constructor(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = pp, this.y = ip, this.x = cp, this.yMargin = Op, this.xMargin = op, this.isSnapshot = Ip
      }
      map(pp) {
        return pp.empty ? this : new gi(this.range.map(pp), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(pp) {
        return this.range.to <= pp.doc.length ? this : new gi(Op.l.cursor(pp.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Gi = Op.C.define({
        map: (pp, ip) => pp.map(ip)
      }),
      ri = Op.C.define();

    function Zi(pp, ip, cp) {
      let Op = pp.facet(Ji);
      Op.length ? Op[0](ip) : window.onerror && window.onerror(String(ip), cp, void 0, void 0, ip) || (cp ? console.error(cp + ":", ip) : console.error(ip))
    }
    const zi = Op.o.define({
      combine: pp => !pp.length || pp[0]
    });
    let si = 0;
    const Ki = Op.o.define({
      combine: pp => pp.filter(((ip, cp) => {
        for (let Op = 0; Op < cp; Op++)
          if (pp[Op].plugin == ip.plugin) return !1;
        return !0
      }))
    });
    class Vi {
      constructor(pp, ip, cp, Op, op) {
        this.id = pp, this.create = ip, this.domEventHandlers = cp, this.domEventObservers = Op, this.baseExtensions = op(this), this.extension = this.baseExtensions.concat(Ki.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(pp) {
        return this.baseExtensions.concat(Ki.of({
          plugin: this,
          arg: pp
        }))
      }
      static define(pp, ip) {
        const {
          eventHandlers: cp,
          eventObservers: Op,
          provide: op,
          uO: Ip
        } = ip || {};
        return new Vi(si++, pp, cp, Op, (pp => {
          let ip = [];
          return Ip && ip.push(Oc.of((ip => {
            let cp = ip.plugin(pp);
            return cp ? Ip(cp) : lp.none
          }))), op && ip.push(op(pp)), ip
        }))
      }
      static fromClass(pp, ip) {
        return Vi.define(((ip, cp) => new pp(ip, cp)), ip)
      }
    }
    class pc {
      constructor(pp) {
        this.spec = pp, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(pp) {
        if (this.value) {
          if (this.mustUpdate) {
            let pp = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(pp)
            } catch (ip) {
              if (Zi(pp.state, ip, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (cp) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(pp, this.spec.arg)
        } catch (ip) {
          Zi(pp.state, ip, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(pp) {
        var ip;
        if (null === (ip = this.value) || void 0 === ip ? void 0 : ip.destroy) try {
          this.value.destroy()
        } catch (cp) {
          Zi(pp.state, cp, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const ic = Op.o.define(),
      cc = Op.o.define(),
      Oc = Op.o.define(),
      oc = Op.o.define(),
      Ic = Op.o.define(),
      Sc = Op.o.define(),
      xc = Op.o.define();

    function Lc(pp, ip) {
      let cp = pp.state.facet(xc);
      if (!cp.length) return cp;
      let op = cp.map((ip => ip instanceof Function ? ip(pp) : ip)),
        Ip = [];
      return Op.A.spans(op, ip.from, ip.to, {
        point() {},
        span(pp, cp, Op, op) {
          let Sp = pp - ip.from,
            xp = cp - ip.from,
            Lp = Ip;
          for (let Ip = Op.length - 1; Ip >= 0; Ip--, op--) {
            let pp, cp = Op[Ip].spec.bidiIsolate;
            if (null == cp && (cp = Ei(ip.text, Sp, xp)), op > 0 && Lp.length && (pp = Lp[Lp.length - 1]).to == Sp && pp.direction == cp) pp.to = xp, Lp = pp.inner;
            else {
              let pp = {
                from: Sp,
                to: xp,
                direction: cp,
                inner: []
              };
              Lp.push(pp), Lp = pp.inner
            }
          }
        }
      }), Ip
    }
    const Yc = Op.o.define();

    function Dc(pp) {
      let ip = 0,
        cp = 0,
        Op = 0,
        op = 0;
      for (let Ip of pp.state.facet(Yc)) {
        let Sp = Ip(pp);
        Sp && (null != Sp.left && (ip = Math.max(ip, Sp.left)), null != Sp.right && (cp = Math.max(cp, Sp.right)), null != Sp.top && (Op = Math.max(Op, Sp.top)), null != Sp.bottom && (op = Math.max(op, Sp.bottom)))
      }
      return {
        left: ip,
        right: cp,
        top: Op,
        bottom: op
      }
    }
    const Ac = Op.o.define();
    class Pc {
      constructor(pp, ip, cp, Op) {
        this.fromA = pp, this.toA = ip, this.fromB = cp, this.toB = Op
      }
      join(pp) {
        return new Pc(Math.min(this.fromA, pp.fromA), Math.max(this.toA, pp.toA), Math.min(this.fromB, pp.fromB), Math.max(this.toB, pp.toB))
      }
      addToSet(pp) {
        let ip = pp.length,
          cp = this;
        for (; ip > 0; ip--) {
          let Op = pp[ip - 1];
          if (!(Op.fromA > cp.toA)) {
            if (Op.toA < cp.fromA) break;
            cp = cp.join(Op), pp.splice(ip - 1, 1)
          }
        }
        return pp.splice(ip, 0, cp), pp
      }
      static extendWithRanges(pp, ip) {
        if (0 == ip.length) return pp;
        let cp = [];
        for (let Op = 0, op = 0, Ip = 0;;) {
          let Sp = Op < pp.length ? pp[Op].fromB : 1e9,
            xp = op < ip.length ? ip[op] : 1e9,
            Lp = Math.min(Sp, xp);
          if (1e9 == Lp) break;
          let Yp = Lp + Ip,
            Dp = Lp,
            Ap = Yp;
          for (;;)
            if (op < ip.length && ip[op] <= Dp) {
              let cp = ip[op + 1];
              op += 2, Dp = Math.max(Dp, cp);
              for (let ip = Op; ip < pp.length && pp[ip].fromB <= Dp; ip++) Ip = pp[ip].toA - pp[ip].toB;
              Ap = Math.max(Ap, cp + Ip)
            } else {
              if (!(Op < pp.length && pp[Op].fromB <= Dp)) break;
              {
                let ip = pp[Op++];
                Dp = Math.max(Dp, ip.toB), Ap = Math.max(Ap, ip.toA), Ip = ip.toA - ip.toB
              }
            } cp.push(new Pc(Yp, Ap, Lp, Dp))
        }
        return cp
      }
    }
    class Wc {
      constructor(pp, ip, cp) {
        this.view = pp, this.state = ip, this.transactions = cp, this.flags = 0, this.startState = pp.state, this.changes = Op.ChangeSet.empty(this.startState.doc.length);
        for (let Op of cp) this.changes = this.changes.compose(Op.changes);
        let op = [];
        this.changes.iterChangedRanges(((pp, ip, cp, Op) => op.push(new Pc(pp, ip, cp, Op)))), this.changedRanges = op
      }
      static create(pp, ip, cp) {
        return new Wc(pp, ip, cp)
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
        return this.transactions.some((pp => pp.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const yc = [];
    class Uc {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = pp, this.length = ip, this.flags = cp, this.parent = null, pp.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return yc
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
      sync(pp) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let pp = this.domAttrs;
          pp && function(pp, ip) {
            for (let cp = pp.attributes.length - 1; cp >= 0; cp--) {
              let Op = pp.attributes[cp].name;
              null == ip[Op] && pp.removeAttribute(Op)
            }
            for (let cp in ip) {
              let Op = ip[cp];
              "style" == cp ? pp.style.cssText = Op : pp.getAttribute(cp) != Op && pp.setAttribute(cp, Op)
            }
          }(this.dom, pp)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(pp) {
        this.dom = pp, pp.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let cp of this.children) {
          if (cp == pp) return ip;
          ip += cp.length + cp.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(pp) {
        return this.posBefore(pp) + pp.length
      }
      covers(pp) {
        return !0
      }
      coordsIn(pp, ip) {
        return null
      }
      domPosFor(pp, ip) {
        let cp = gp(this.dom),
          Op = this.length ? pp > 0 : ip > 0;
        return new Di(this.parent.dom, cp + (Op ? 1 : 0), 0 == pp || pp == this.length)
      }
      markDirty(pp) {
        this.flags &= -3, pp && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let pp = this; pp; pp = pp.parent)
          if (pp instanceof tc) return pp;
        return null
      }
      static get(pp) {
        return pp.cmTile
      }
    }
    class wc extends Uc {
      constructor(pp) {
        super(pp, 0), this._children = []
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
      append(pp) {
        this.children.push(pp), pp.parent = this
      }
      sync(pp) {
        if (2 & this.flags) return;
        super.sync(pp);
        let ip, cp = this.dom,
          Op = null,
          op = (null === pp || void 0 === pp ? void 0 : pp.node) == cp ? pp : null,
          Ip = 0;
        for (let Sp of this.children) {
          if (Sp.sync(pp), Ip += Sp.length + Sp.breakAfter, ip = Op ? Op.nextSibling : cp.firstChild, op && ip != Sp.dom && (op.written = !0), Sp.dom.parentNode == cp)
            for (; ip && ip != Sp.dom;) ip = vc(ip);
          else cp.insertBefore(Sp.dom, ip);
          Op = Sp.dom
        }
        for (ip = Op ? Op.nextSibling : cp.firstChild, op && ip && (op.written = !0); ip;) ip = vc(ip);
        this.length = Ip
      }
    }

    function vc(pp) {
      let ip = pp.nextSibling;
      return pp.parentNode.removeChild(pp), ip
    }
    class tc extends wc {
      constructor(pp, ip) {
        super(ip), this.view = pp
      }
      owns(pp) {
        for (; pp; pp = pp.parent)
          if (pp == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(pp) {
        for (;;) {
          if (!pp) return null;
          let ip = Uc.get(pp);
          if (ip && this.owns(ip)) return ip;
          pp = pp.parentNode
        }
      }
      blockTiles(pp) {
        for (let ip = [], cp = this, Op = 0, op = 0;;)
          if (Op == cp.children.length) {
            if (!ip.length) return;
            cp = cp.parent, cp.breakAfter && op++, Op = ip.pop()
          } else {
            let Ip = cp.children[Op++];
            if (Ip instanceof Hc) ip.push(Op), cp = Ip, Op = 0;
            else {
              let ip = op + Ip.length,
                cp = pp(Ip, op);
              if (void 0 !== cp) return cp;
              op = ip + Ip.breakAfter
            }
          }
      }
      resolveBlock(pp, ip) {
        let cp, Op, op = -1,
          Ip = -1;
        if (this.blockTiles(((Sp, xp) => {
            let Lp = xp + Sp.length;
            if (pp >= xp && pp <= Lp) {
              if (Sp.isWidget() && ip >= -1 && ip <= 1) {
                if (32 & Sp.flags) return !0;
                16 & Sp.flags && (cp = void 0)
              }(xp < pp || pp == Lp && (ip < -1 ? Sp.length : Sp.covers(1))) && (!cp || !Sp.isWidget() && cp.isWidget()) && (cp = Sp, op = pp - xp), (Lp > pp || pp == xp && (ip > 1 ? Sp.length : Sp.covers(-1))) && (!Op || !Sp.isWidget() && Op.isWidget()) && (Op = Sp, Ip = pp - xp)
            }
          })), !cp && !Op) throw new Error("No tile at position " + pp);
        return cp && ip < 0 || !Op ? {
          tile: cp,
          offset: op
        } : {
          tile: Op,
          offset: Ip
        }
      }
    }
    class Hc extends wc {
      constructor(pp, ip) {
        super(pp), this.wrapper = ip
      }
      isBlock() {
        return !0
      }
      covers(pp) {
        return !!this.children.length && (pp < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (pp, ip) {
        let cp = new Hc(ip || document.createElement(pp.tagName), pp);
        return ip || (cp.flags |= 4), cp
      }
    }
    class dc extends wc {
      constructor(pp, ip) {
        super(pp), this.attrs = ip
      }
      isLine() {
        return !0
      }
      static start(pp, ip, cp) {
        let Op = new dc(ip || document.createElement("div"), pp);
        return ip && cp || (Op.flags |= 4), Op
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(pp, ip, cp) {
        let Op = null,
          op = -1,
          Ip = null,
          Sp = -1;
        ! function pp(xp, Lp) {
          for (let Yp = 0, Dp = 0; Yp < xp.children.length && Dp <= Lp; Yp++) {
            let Ap = xp.children[Yp],
              Pp = Dp + Ap.length;
            Pp >= Lp && (Ap.isComposite() ? pp(Ap, Lp - Dp) : (!Ip || Ip.isHidden && (ip > 0 || cp && ec(Ip, Ap))) && (Pp > Lp || 32 & Ap.flags) ? (Ip = Ap, Sp = Lp - Dp) : (Dp < Lp || 16 & Ap.flags && !Ap.isHidden) && (Op = Ap, op = Lp - Dp)), Dp = Pp
          }
        }(this, pp);
        let xp = (ip < 0 ? Op : Ip) || Op || Ip;
        return xp ? {
          tile: xp,
          offset: xp == Op ? op : Sp
        } : null
      }
      coordsIn(pp, ip) {
        let cp = this.resolveInline(pp, ip, !0);
        return cp ? cp.tile.coordsIn(Math.max(0, cp.offset), ip) : function(pp) {
          let ip = pp.dom.lastChild;
          if (!ip) return pp.dom.getBoundingClientRect();
          let cp = np(ip);
          return cp[cp.length - 1] || null
        }(this)
      }
      domIn(pp, ip) {
        let cp = this.resolveInline(pp, ip);
        if (cp) {
          let {
            tile: pp,
            offset: Op
          } = cp;
          if (this.dom.contains(pp.dom)) return pp.isText() ? new Di(pp.dom, Math.min(pp.dom.nodeValue.length, Op)) : pp.domPosFor(Op, 16 & pp.flags ? 1 : 32 & pp.flags ? -1 : ip);
          let op = cp.tile.parent,
            Ip = !1;
          for (let ip of op.children) {
            if (Ip) return new Di(ip.dom, 0);
            ip == cp.tile && (Ip = !0)
          }
        }
        return new Di(this.dom, 0)
      }
    }

    function ec(pp, ip) {
      let cp = pp.coordsIn(0, 1),
        Op = ip.coordsIn(0, 1);
      return cp && Op && Op.top < cp.bottom
    }
    class uc extends wc {
      constructor(pp, ip) {
        super(pp), this.mark = ip
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (pp, ip) {
        let cp = new uc(ip || document.createElement(pp.tagName), pp);
        return ip || (cp.flags |= 4), cp
      }
    }
    class jc extends Uc {
      constructor(pp, ip) {
        super(pp, ip.length), this.text = ip
      }
      sync(pp) {
        2 & this.flags || (super.sync(pp), this.dom.nodeValue != this.text && (pp && pp.node == this.dom && (pp.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(pp, ip) {
        let cp = this.dom.nodeValue.length;
        pp > cp && (pp = cp);
        let Op = pp,
          op = pp,
          Ip = 0;
        0 == pp && ip < 0 || pp == cp && ip >= 0 ? kp.chrome || kp.gecko || (pp ? (Op--, Ip = 1) : op < cp && (op++, Ip = -1)) : ip < 0 ? Op-- : op < cp && op++;
        let Sp = Ii(this.dom, Op, op).getClientRects();
        if (!Sp.length) return null;
        let xp = Sp[(Ip ? Ip < 0 : ip >= 0) ? 0 : Sp.length - 1];
        return kp.safari && !Ip && 0 == xp.width && (xp = Array.prototype.find.call(Sp, (pp => pp.width)) || xp), Ip ? zp(xp, Ip < 0) : xp || null
      }
      static of (pp, ip) {
        let cp = new jc(ip || document.createTextNode(pp), pp);
        return ip || (cp.flags |= 2), cp
      }
    }
    class kc extends Uc {
      constructor(pp, ip, cp, Op) {
        super(pp, ip, Op), this.widget = cp
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(pp) {
        return !(48 & this.flags) && (this.flags & (pp < 0 ? 64 : 128)) > 0
      }
      coordsIn(pp, ip) {
        return this.coordsInWidget(pp, ip, !1)
      }
      coordsInWidget(pp, ip, cp) {
        let Op = this.widget.coordsAt(this.dom, pp, ip);
        if (Op) return Op;
        if (cp) return zp(this.dom.getBoundingClientRect(), this.length ? 0 == pp : ip <= 0);
        {
          let ip = this.dom.getClientRects(),
            cp = null;
          if (!ip.length) return null;
          let Op = !!(16 & this.flags) || !(32 & this.flags) && pp > 0;
          for (let op = Op ? ip.length - 1 : 0; cp = ip[op], !(pp > 0 ? 0 == op : op == ip.length - 1 || cp.top < cp.bottom); op += Op ? -1 : 1);
          return zp(cp, !Op)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Op.F.empty;
        let {
          root: pp
        } = this;
        if (!pp) return Op.F.empty;
        let ip = this.posAtStart;
        return pp.view.state.doc.slice(ip, ip + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (pp, ip, cp, Op, op) {
        return op || (op = pp.toDOM(ip), pp.editable || (op.contentEditable = "false")), new kc(op, cp, pp, Op)
      }
    }
    class mc extends Uc {
      constructor(pp) {
        let ip = document.createElement("img");
        ip.className = "cm-widgetBuffer", ip.setAttribute("aria-hidden", "true"), super(ip, 0, pp)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Op.F.empty
      }
      coordsIn(pp) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Rc {
      constructor(pp) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = pp
      }
      advance(pp, ip, cp) {
        let {
          tile: Op,
          index: op,
          beforeBreak: Ip,
          parents: Sp
        } = this;
        for (; pp || ip > 0;)
          if (Op.isComposite())
            if (Ip) {
              if (!pp) break;
              cp && cp.break(), pp--, Ip = !1
            } else if (op == Op.children.length) {
          if (!pp && !Sp.length) break;
          cp && cp.leave(Op), Ip = !!Op.breakAfter, ({
            tile: Op,
            index: op
          } = Sp.pop()), op++
        } else {
          let xp = Op.children[op],
            Lp = xp.breakAfter;
          !(ip > 0 ? xp.length <= pp : xp.length < pp) || cp && !1 === cp.skip(xp, 0, xp.length) && xp.isComposite ? (Sp.push({
            tile: Op,
            index: op
          }), Op = xp, op = 0, cp && xp.isComposite() && cp.enter(xp)) : (Ip = !!Lp, op++, pp -= xp.length)
        } else if (op == Op.length) Ip = !!Op.breakAfter, ({
          tile: Op,
          index: op
        } = Sp.pop()), op++;
        else {
          if (!pp) break;
          {
            let ip = Math.min(pp, Op.length - op);
            cp && cp.skip(Op, op, op + ip), pp -= ip, op += ip
          }
        }
        return this.tile = Op, this.index = op, this.beforeBreak = Ip, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class qc {
      constructor(pp, ip, cp, Op) {
        this.from = pp, this.to = ip, this.wrapper = cp, this.rank = Op
      }
    }
    class Mc {
      constructor(pp, ip, cp) {
        this.cache = pp, this.root = ip, this.blockWrappers = cp, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(pp, ip, cp, Op) {
        var op;
        this.flushBuffer();
        let Ip = this.ensureMarks(ip, cp),
          Sp = Ip.lastChild;
        if (Sp && Sp.isText() && !(8 & Sp.flags) && Sp.length + pp.length < 512) {
          this.cache.reused.set(Sp, 2), (Ip.children[Ip.children.length - 1] = new jc(Sp.dom, Sp.text + pp)).parent = Ip
        } else Ip.append(Op || jc.of(pp, null === (op = this.cache.find(jc)) || void 0 === op ? void 0 : op.dom));
        this.pos += pp.length, this.afterWidget = null
      }
      addComposition(pp, ip) {
        let cp = this.curLine;
        cp.dom != ip.line.dom && (cp.setDOM(this.cache.reused.has(ip.line) ? Bc(ip.line.dom) : ip.line.dom), this.cache.reused.set(ip.line, 2));
        let Op = cp;
        for (let Sp = ip.marks.length - 1; Sp >= 0; Sp--) {
          let pp = ip.marks[Sp],
            cp = Op.lastChild;
          if (cp instanceof uc && cp.mark.eq(pp.mark)) cp.dom != pp.dom && cp.setDOM(Bc(pp.dom)), Op = cp;
          else {
            if (this.cache.reused.get(pp)) {
              let ip = Uc.get(pp.dom);
              ip && ip.setDOM(Bc(pp.dom))
            }
            let ip = uc.of(pp.mark, pp.dom);
            Op.append(ip), Op = ip
          }
          this.cache.reused.set(pp, 2)
        }
        let op = Uc.get(pp.text);
        op && this.cache.reused.set(op, 2);
        let Ip = new jc(pp.text, pp.text.nodeValue);
        Ip.flags |= 8, Op.append(Ip)
      }
      addInlineWidget(pp, ip, cp) {
        let Op = this.afterWidget && 48 & pp.flags && (48 & this.afterWidget.flags) == (48 & pp.flags);
        Op || this.flushBuffer();
        let op = this.ensureMarks(ip, cp);
        Op || 16 & pp.flags || op.append(this.getBuffer(1)), op.append(pp), this.pos += pp.length, this.afterWidget = pp
      }
      addMark(pp, ip, cp) {
        this.flushBuffer(), this.ensureMarks(ip, cp).append(pp), this.pos += pp.length, this.afterWidget = null
      }
      addBlockWidget(pp) {
        this.getBlockPos().append(pp), this.pos += pp.length, this.lastBlock = pp, this.endLine()
      }
      continueWidget(pp) {
        (this.afterWidget || this.lastBlock).length += pp, this.pos += pp
      }
      addLineStart(pp, ip) {
        var cp;
        pp || (pp = Jc);
        let Op = dc.start(pp, ip || (null === (cp = this.cache.find(dc)) || void 0 === cp ? void 0 : cp.dom), !!ip);
        this.getBlockPos().append(this.lastBlock = this.curLine = Op)
      }
      addLine(pp) {
        this.getBlockPos().append(pp), this.pos += pp.length, this.lastBlock = pp, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(pp) {
        this.blockPosCovered() || this.addLineStart(pp)
      }
      ensureLine(pp) {
        this.curLine || this.addLineStart(pp)
      }
      ensureMarks(pp, ip) {
        var cp;
        let Op = this.curLine;
        for (let op = pp.length - 1; op >= 0; op--) {
          let Ip, Sp = pp[op];
          if (ip > 0 && (Ip = Op.lastChild) && Ip instanceof uc && Ip.mark.eq(Sp)) Op = Ip, ip--;
          else {
            let pp = uc.of(Sp, null === (cp = this.cache.find(uc, (pp => pp.mark.eq(Sp)))) || void 0 === cp ? void 0 : cp.dom);
            Op.append(pp), Op = pp, ip = 0
          }
        }
        return Op
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let pp = this.curLine.lastChild;
          pp && Qc(this.curLine, !1) && ("BR" == pp.dom.nodeName || !pp.isWidget() || kp.ios && Qc(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Tc, 0, 32) || new kc(Tc.toDOM(), 0, Tc, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let pp = this.wrappers.length - 1; pp >= 0; pp--) this.wrappers[pp].to < this.pos && this.wrappers.splice(pp, 1);
        for (let pp = this.blockWrappers; pp.value && pp.from <= this.pos; pp.next())
          if (pp.to >= this.pos) {
            let ip = new qc(pp.from, pp.to, pp.value, pp.rank),
              cp = this.wrappers.length;
            for (; cp > 0 && (this.wrappers[cp - 1].rank - ip.rank || this.wrappers[cp - 1].to - ip.to) < 0;) cp--;
            this.wrappers.splice(cp, 0, ip)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var pp;
        this.updateBlockWrappers();
        let ip = this.root;
        for (let cp of this.wrappers) {
          let Op = ip.lastChild;
          if (cp.from < this.pos && Op instanceof Hc && Op.wrapper.eq(cp.wrapper)) ip = Op;
          else {
            let Op = Hc.of(cp.wrapper, null === (pp = this.cache.find(Hc, (pp => pp.wrapper.eq(cp.wrapper)))) || void 0 === pp ? void 0 : pp.dom);
            ip.append(Op), ip = Op
          }
        }
        return ip
      }
      blockPosCovered() {
        let pp = this.lastBlock;
        return null != pp && !pp.breakAfter && (!pp.isWidget() || (160 & pp.flags) > 0)
      }
      getBuffer(pp) {
        let ip = 2 | (pp < 0 ? 16 : 32),
          cp = this.cache.find(mc, void 0, 1);
        return cp && (cp.flags = ip), cp || new mc(ip)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Cc {
      constructor(pp) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = pp.iter()
      }
      skip(pp) {
        this.textOff + pp <= this.text.length ? this.textOff += pp : (this.skipCount += pp - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(pp) {
        if (this.textOff == this.text.length) {
          let {
            value: ip,
            lineBreak: cp,
            done: Op
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Op) throw new Error("Ran out of text content when drawing inline views");
          this.text = ip;
          let op = this.textOff = Math.min(pp, ip.length);
          return cp ? null : ip.slice(0, op)
        }
        let ip = Math.min(this.text.length, this.textOff + pp),
          cp = this.text.slice(this.textOff, ip);
        return this.textOff = ip, cp
      }
    }
    const Ec = [kc, dc, jc, uc, mc, Hc, tc];
    for (let BS = 0; BS < Ec.length; BS++) Ec[BS].bucket = BS;
    class Xc {
      constructor(pp) {
        this.view = pp, this.buckets = Ec.map((() => [])), this.index = Ec.map((() => 0)), this.reused = new Map
      }
      add(pp) {
        let ip = pp.constructor.bucket,
          cp = this.buckets[ip];
        cp.length < 6 ? cp.push(pp) : cp[this.index[ip] = (this.index[ip] + 1) % 6] = pp
      }
      find(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Op = pp.bucket,
          op = this.buckets[Op],
          Ip = this.index[Op];
        for (let Sp = op.length - 1; Sp >= 0; Sp--) {
          let pp = (Sp + Ip) % op.length,
            xp = op[pp];
          if ((!ip || ip(xp)) && !this.reused.has(xp)) return op.splice(pp, 1), pp < Ip && this.index[Op]--, this.reused.set(xp, cp), xp
        }
        return null
      }
      findWidget(pp, ip, cp) {
        let Op = this.buckets[0];
        if (Op.length)
          for (let op = 0, Ip = 0;; op++) {
            if (op == Op.length) {
              if (Ip) return null;
              Ip = 1, op = 0
            }
            let Sp = Op[op];
            if (!this.reused.has(Sp) && (0 == Ip ? Sp.widget.compare(pp) : Sp.widget.constructor == pp.constructor && pp.updateDOM(Sp.dom, this.view, Sp.widget))) return Op.splice(op, 1), op < this.index[0] && this.index[0]--, Sp.widget == pp && Sp.length == ip && (497 & Sp.flags) == cp ? (this.reused.set(Sp, 1), Sp) : (this.reused.set(Sp, 2), new kc(Sp.dom, ip, pp, -498 & Sp.flags | cp))
          }
      }
      reuse(pp) {
        return this.reused.set(pp, 1), pp
      }
      maybeReuse(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(pp)) return this.reused.set(pp, ip), pp.dom
      }
      clear() {
        for (let pp = 0; pp < this.buckets.length; pp++) this.buckets[pp].length = this.index[pp] = 0
      }
    }
    class lc {
      constructor(pp, ip, cp, op, Ip) {
        this.view = pp, this.uO = op, this.disallowBlockEffectsFor = Ip, this.openWidget = !1, this.openMarks = 0, this.cache = new Xc(pp), this.text = new Cc(pp.state.doc), this.builder = new Mc(this.cache, new tc(pp, pp.contentDOM), Op.A.iter(cp)), this.cache.reused.set(ip, 2), this.old = new Rc(ip), this.reuseWalker = {
          skip: (pp, ip, cp) => {
            if (this.cache.add(pp), pp.isComposite()) return !1
          },
          enter: pp => this.cache.add(pp),
          leave: () => {},
          break: () => {}
        }
      }
      run(pp, ip) {
        let cp = ip && this.getCompositionContext(ip.text);
        for (let Op = 0, op = 0, Ip = 0;;) {
          let Sp = Ip < pp.length ? pp[Ip++] : null,
            xp = Sp ? Sp.fromA : this.old.root.length;
          if (xp > Op) {
            let pp = xp - Op;
            this.preserve(pp, !Ip, !Sp), Op = xp, op += pp
          }
          if (!Sp) break;
          ip && Sp.fromA <= ip.range.fromA && Sp.toA >= ip.range.toA ? (this.forward(Sp.fromA, ip.range.fromA, ip.range.fromA < ip.range.toA ? 1 : -1), this.emit(op, ip.range.fromB), this.cache.clear(), this.builder.addComposition(ip, cp), this.text.skip(ip.range.toB - ip.range.fromB), this.forward(ip.range.fromA, Sp.toA), this.emit(ip.range.toB, Sp.toB)) : (this.forward(Sp.fromA, Sp.toA), this.emit(op, Sp.toB)), op = Sp.toB, Op = Sp.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(pp, ip, cp) {
        let Op = function(pp) {
            let ip = [];
            for (let cp = pp.parents.length; cp > 1; cp--) {
              let Op = cp == pp.parents.length ? pp.tile : pp.parents[cp].tile;
              Op instanceof uc && ip.push(Op.mark)
            }
            return ip
          }(this.old),
          op = this.openMarks;
        this.old.advance(pp, cp ? 1 : -1, {
          skip: (pp, ip, cp) => {
            if (pp.isWidget())
              if (this.openWidget) this.builder.continueWidget(cp - ip);
              else {
                let Ip = cp > 0 || ip < pp.length ? kc.of(pp.widget, this.view, cp - ip, 496 & pp.flags, this.cache.maybeReuse(pp)) : this.cache.reuse(pp);
                256 & Ip.flags ? (Ip.flags &= -2, this.builder.addBlockWidget(Ip)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Ip, Op, op), op = Op.length)
              }
            else if (pp.isText()) this.builder.ensureLine(null), ip || cp != pp.length || this.cache.reused.has(pp) ? (this.cache.add(pp), this.builder.addText(pp.text.slice(ip, cp), Op, op)) : this.builder.addText(pp.text, Op, op, this.cache.reuse(pp)), op = Op.length;
            else if (pp.isLine()) pp.flags &= -2, this.cache.reused.set(pp, 1), this.builder.addLine(pp);
            else if (pp instanceof mc) this.cache.add(pp);
            else {
              if (!(pp instanceof uc)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(pp, Op, op), this.cache.reused.set(pp, 1), op = Op.length
            }
            this.openWidget = !1
          },
          enter: pp => {
            pp.isLine() ? this.builder.addLineStart(pp.attrs, this.cache.maybeReuse(pp)) : (this.cache.add(pp), pp instanceof uc && Op.unshift(pp.mark)), this.openWidget = !1
          },
          leave: pp => {
            pp.isLine() ? Op.length && (Op.length = op = 0) : pp instanceof uc && (Op.shift(), op = Math.min(op, Op.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(pp)
      }
      emit(pp, ip) {
        let cp = null,
          op = this.builder,
          Ip = 0,
          Sp = Op.A.spans(this.uO, pp, ip, {
            point: (pp, ip, Op, Sp, xp, Lp) => {
              if (Op instanceof Bp) {
                if (this.disallowBlockEffectsFor[Lp]) {
                  if (Op.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (ip > this.view.state.doc.lineAt(pp).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Ip = Sp.length, xp > Sp.length) op.continueWidget(ip - pp);
                else {
                  let Ip = Op.widget || (Op.block ? Nc.block : Nc.inline),
                    Lp = function(pp) {
                      let ip = pp.isReplace ? (pp.startSide < 0 ? 64 : 0) | (pp.endSide > 0 ? 128 : 0) : pp.startSide > 0 ? 32 : 16;
                      pp.block && (ip |= 256);
                      return ip
                    }(Op),
                    Yp = this.cache.findWidget(Ip, ip - pp, Lp) || kc.of(Ip, this.view, ip - pp, Lp);
                  Op.block ? (Op.startSide > 0 && op.addLineStartIfNotCovered(cp), op.addBlockWidget(Yp)) : (op.ensureLine(cp), op.addInlineWidget(Yp, Sp, xp))
                }
                cp = null
              } else cp = function(pp, ip) {
                let cp = ip.spec.attributes,
                  Op = ip.spec.class;
                if (!cp && !Op) return pp;
                pp || (pp = {
                  class: "cm-line"
                });
                cp && mp(cp, pp);
                Op && (pp.class += " " + Op);
                return pp
              }(cp, Op);
              ip > pp && this.text.skip(ip - pp)
            },
            span: (pp, ip, Op, Ip) => {
              for (let Sp = pp; Sp < ip;) {
                let xp = this.text.next(Math.min(512, ip - Sp));
                null == xp ? (op.addLineStartIfNotCovered(cp), op.addBreak(), Sp++) : (op.ensureLine(cp), op.addText(xp, Op, Sp == pp ? Ip : Op.length), Sp += xp.length), cp = null
              }
            }
          });
        op.addLineStartIfNotCovered(cp), this.openWidget = Sp > Ip, this.openMarks = Sp
      }
      forward(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        ip - pp <= 10 ? this.old.advance(ip - pp, cp, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(ip - pp - 10, -1), this.old.advance(5, cp, this.reuseWalker))
      }
      getCompositionContext(pp) {
        let ip = [],
          cp = null;
        for (let Op = pp.parentNode;; Op = Op.parentNode) {
          let pp = Uc.get(Op);
          if (Op == this.view.contentDOM) break;
          pp instanceof uc ? ip.push(pp) : (null === pp || void 0 === pp ? void 0 : pp.isLine()) ? cp = pp : pp instanceof Hc || ("DIV" != Op.nodeName || cp || Op == this.view.contentDOM ? cp || ip.push(uc.of(new Qp({
            tagName: Op.nodeName.toLowerCase(),
            attributes: Cp(Op)
          }), Op)) : cp = new dc(Op, Jc))
        }
        return {
          line: cp,
          marks: ip
        }
      }
    }

    function Qc(pp, ip) {
      let cp = pp => {
        for (let Op of pp.children)
          if ((ip ? Op.isText() : Op.length) || cp(Op)) return !0;
        return !1
      };
      return cp(pp)
    }
    const Jc = {
      class: "cm-line"
    };

    function Bc(pp) {
      let ip = Uc.get(pp);
      return ip && ip.setDOM(pp.cloneNode()), pp
    }
    class Nc extends Ep {
      constructor(pp) {
        super(), this.tag = pp
      }
      eq(pp) {
        return pp.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(pp) {
        return pp.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Nc.inline = new Nc("span"), Nc.block = new Nc("div");
    const Tc = new class extends Ep {
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
    class fc {
      constructor(pp) {
        this.view = pp, this.uO = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = lp.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new tc(pp, pp.contentDOM), this.updateInner([new Pc(0, 0, 0, pp.state.doc.length)], null)
      }
      update(pp) {
        var ip;
        let cp = pp.changedRanges;
        this.minWidth > 0 && cp.length && (cp.every((pp => {
          let {
            fromA: ip,
            toA: cp
          } = pp;
          return cp < this.minWidthFrom || ip > this.minWidthTo
        })) ? (this.minWidthFrom = pp.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = pp.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(pp);
        let op = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (ip = this.domChanged) || void 0 === ip ? void 0 : ip.newSel) ? op = this.domChanged.newSel.head : function(pp, ip) {
          let cp = !1;
          ip && pp.iterChangedRanges(((pp, Op) => {
            pp < ip.to && Op > ip.from && (cp = !0)
          }));
          return cp
        }(pp.changes, this.hasComposition) || pp.selectionSet || (op = pp.state.selection.main.head));
        let Ip = op > -1 ? function(pp, ip, cp) {
          let Op = hc(pp, cp);
          if (!Op) return null;
          let {
            node: op,
            from: Ip,
            to: Sp
          } = Op, xp = op.nodeValue;
          if (/[\n\r]/.test(xp)) return null;
          if (pp.state.doc.sliceString(Op.from, Op.to) != xp) return null;
          let Lp = ip.invertedDesc;
          return {
            range: new Pc(Lp.mapPos(Ip), Lp.mapPos(Sp), Ip, Sp),
            text: op
          }
        }(this.view, pp.changes, op) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: ip,
            to: Op
          } = this.hasComposition;
          cp = new Pc(ip, Op, pp.changes.mapPos(ip, -1), pp.changes.mapPos(Op, 1)).addToSet(cp.slice())
        }
        this.hasComposition = Ip ? {
          from: Ip.range.fromB,
          to: Ip.range.toB
        } : null, (kp.ie || kp.chrome) && !Ip && pp && pp.state.doc.lines != pp.startState.doc.lines && (this.forceSelection = !0);
        let Sp = this.uO,
          xp = this.blockWrappers;
        this.updateDeco();
        let Lp = function(pp, ip, cp) {
          let op = new ac;
          return Op.A.compare(pp, ip, cp, op), op.changes
        }(Sp, this.uO, pp.changes);
        Lp.length && (cp = Pc.extendWithRanges(cp, Lp));
        let Yp = function(pp, ip, cp) {
          let op = new nc;
          return Op.A.compare(pp, ip, cp, op), op.changes
        }(xp, this.blockWrappers, pp.changes);
        return Yp.length && (cp = Pc.extendWithRanges(cp, Yp)), Ip && !cp.some((pp => pp.fromA <= Ip.range.fromA && pp.toA >= Ip.range.toA)) && (cp = Ip.range.addToSet(cp.slice())), !(2 & this.tile.flags && 0 == cp.length) && (this.updateInner(cp, Ip), pp.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(pp, ip) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: cp
        } = this.view;
        cp.ignore((() => {
          if (ip || pp.length) {
            let cp = this.tile,
              Op = new lc(this.view, cp, this.blockWrappers, this.uO, this.dynamicDecorationMap);
            ip && Uc.get(ip.text) && Op.cache.reused.set(Uc.get(ip.text), 2), this.tile = Op.run(pp, ip), bc(cp, Op.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Op = kp.chrome || kp.ios ? {
            node: cp.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Op), !Op || !Op.written && cp.selectionRange.focusNode == Op.node && this.tile.dom.contains(Op.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Op = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let op of this.tile.children) op.isWidget() && op.widget instanceof Fc && Op.push(op.dom);
        cp.updateGaps(Op)
      }
      updateEditContextFormatting(pp) {
        this.editContextFormatting = this.editContextFormatting.map(pp.changes);
        for (let ip of pp.transactions)
          for (let pp of ip.effects) pp.is(ri) && (this.editContextFormatting = pp.value)
      }
      updateSelection() {
        let pp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: ip
        } = this.tile, cp = this.view.root.activeElement, Op = cp == ip, op = !Op && !(this.view.state.facet(zi) || ip.tabIndex > -1) && ap(ip, this.view.observer.selectionRange) && !(cp && ip.contains(cp));
        if (!(Op || pp || op)) return;
        let Ip = this.forceSelection;
        this.forceSelection = !1;
        let Sp, xp, Lp = this.view.state.selection.main;
        if (Lp.empty ? xp = Sp = this.inlineDOMNearPos(Lp.anchor, Lp.assoc || 1) : (xp = this.inlineDOMNearPos(Lp.head, Lp.head == Lp.from ? 1 : -1), Sp = this.inlineDOMNearPos(Lp.anchor, Lp.anchor == Lp.from ? 1 : -1)), kp.gecko && Lp.empty && !this.hasComposition && (1 == (Yp = Sp).node.nodeType && Yp.node.firstChild && (0 == Yp.offset || "false" == Yp.node.childNodes[Yp.offset - 1].contentEditable) && (Yp.offset == Yp.node.childNodes.length || "false" == Yp.node.childNodes[Yp.offset].contentEditable))) {
          let pp = document.createTextNode("");
          this.view.observer.ignore((() => Sp.node.insertBefore(pp, Sp.node.childNodes[Sp.offset] || null))), Sp = xp = new Di(pp, 0), Ip = !0
        }
        var Yp;
        let Dp = this.view.observer.selectionRange;
        !Ip && Dp.focusNode && (Fp(Sp.node, Sp.offset, Dp.anchorNode, Dp.anchorOffset) && Fp(xp.node, xp.offset, Dp.focusNode, Dp.focusOffset) || this.suppressWidgetCursorChange(Dp, Lp)) || (this.view.observer.ignore((() => {
          kp.android && kp.chrome && ip.contains(Dp.focusNode) && function(pp, ip) {
            for (let cp = pp; cp && cp != ip; cp = cp.assignedSlot || cp.parentNode)
              if (1 == cp.nodeType && "false" == cp.contentEditable) return !0;
            return !1
          }(Dp.focusNode, ip) && (ip.blur(), ip.focus({
            preventScroll: !0
          }));
          let pp = bp(this.view.root);
          if (pp)
            if (Lp.empty) {
              if (kp.gecko) {
                let pp = (Op = Sp.node, Ip = Sp.offset, 1 != Op.nodeType ? 0 : (Ip && "false" == Op.childNodes[Ip - 1].contentEditable ? 1 : 0) | (Ip < Op.childNodes.length && "false" == Op.childNodes[Ip].contentEditable ? 2 : 0));
                if (pp && 3 != pp) {
                  let ip = (1 == pp ? Li : Yi)(Sp.node, Sp.offset);
                  ip && (Sp = new Di(ip.node, ip.offset))
                }
              }
              pp.collapse(Sp.node, Sp.offset), null != Lp.bidiLevel && void 0 !== pp.caretBidiLevel && (pp.caretBidiLevel = Lp.bidiLevel)
            } else if (pp.extend) {
            pp.collapse(Sp.node, Sp.offset);
            try {
              pp.extend(xp.node, xp.offset)
            } catch (Yp) {}
          } else {
            let ip = document.createRange();
            Lp.anchor > Lp.head && ([Sp, xp] = [xp, Sp]), ip.setEnd(xp.node, xp.offset), ip.setStart(Sp.node, Sp.offset), pp.removeAllRanges(), pp.addRange(ip)
          } else;
          var Op, Ip;
          op && this.view.root.activeElement == ip && (ip.blur(), cp && cp.focus())
        })), this.view.observer.setSelectionRange(Sp, xp)), this.impreciseAnchor = Sp.precise ? null : new Di(Dp.anchorNode, Dp.anchorOffset), this.impreciseHead = xp.precise ? null : new Di(Dp.focusNode, Dp.focusOffset)
      }
      suppressWidgetCursorChange(pp, ip) {
        return this.hasComposition && ip.empty && Fp(pp.focusNode, pp.focusOffset, pp.anchorNode, pp.anchorOffset) && this.posFromDOM(pp.focusNode, pp.focusOffset) == ip.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: pp
        } = this, ip = pp.state.selection.main, cp = bp(pp.root), {
          anchorNode: Op,
          anchorOffset: op
        } = pp.observer.selectionRange;
        if (!cp || !ip.empty || !ip.assoc || !cp.modify) return;
        let Ip = this.lineAt(ip.head, ip.assoc);
        if (!Ip) return;
        let Sp = Ip.posAtStart;
        if (ip.head == Sp || ip.head == Sp + Ip.length) return;
        let xp = this.coordsAt(ip.head, -1),
          Lp = this.coordsAt(ip.head, 1);
        if (!xp || !Lp || xp.bottom > Lp.top) return;
        let Yp = this.domAtPos(ip.head + ip.assoc, ip.assoc);
        cp.collapse(Yp.node, Yp.offset), cp.modify("move", ip.assoc < 0 ? "forward" : "backward", "lineboundary"), pp.observer.readSelectionRange();
        let Dp = pp.observer.selectionRange;
        pp.docView.posFromDOM(Dp.anchorNode, Dp.anchorOffset) != ip.from && cp.collapse(Op, op)
      }
      posFromDOM(pp, ip) {
        let cp = this.tile.nearest(pp);
        if (!cp) return 2 & this.tile.dom.compareDocumentPosition(pp) ? 0 : this.view.state.doc.length;
        let Op = cp.posAtStart;
        if (!cp.isComposite()) return cp.isText() ? pp == cp.dom ? Op + ip : Op + (ip ? cp.length : 0) : Op;
        {
          let op;
          if (pp == cp.dom) op = cp.dom.childNodes[ip];
          else {
            let Op = 0 == Zp(pp) ? 0 : 0 == ip ? -1 : 1;
            for (;;) {
              let ip = pp.parentNode;
              if (ip == cp.dom) break;
              0 == Op && ip.firstChild != ip.lastChild && (Op = pp == ip.firstChild ? -1 : 1), pp = ip
            }
            op = Op < 0 ? pp : pp.nextSibling
          }
          if (op == cp.dom.firstChild) return Op;
          for (; op && !Uc.get(op);) op = op.nextSibling;
          if (!op) return Op + cp.length;
          for (let pp = 0, ip = Op;; pp++) {
            let Op = cp.children[pp];
            if (Op.dom == op) return ip;
            ip += Op.length + Op.breakAfter
          }
        }
      }
      domAtPos(pp, ip) {
        let {
          tile: cp,
          offset: Op
        } = this.tile.resolveBlock(pp, ip);
        return cp.isWidget() ? cp.domPosFor(pp, ip) : cp.domIn(Op, ip)
      }
      inlineDOMNearPos(pp, ip) {
        let cp, Op, op = -1,
          Ip = !1,
          Sp = -1,
          xp = !1;
        return this.tile.blockTiles(((ip, Lp) => {
          if (ip.isWidget()) {
            if (32 & ip.flags && Lp >= pp) return !0;
            16 & ip.flags && (Ip = !0)
          } else {
            let Yp = Lp + ip.length;
            if (Lp <= pp && (cp = ip, op = pp - Lp, Ip = Yp < pp), Yp >= pp && !Op && (Op = ip, Sp = pp - Lp, xp = Lp > pp), Lp > pp && Op) return !0
          }
        })), cp || Op ? (Ip && Op ? cp = null : xp && cp && (Op = null), cp && ip < 0 || !Op ? cp.domIn(op, ip) : Op.domIn(Sp, ip)) : this.domAtPos(pp, ip)
      }
      coordsAt(pp, ip) {
        let {
          tile: cp,
          offset: Op
        } = this.tile.resolveBlock(pp, ip);
        return cp.isWidget() ? cp.widget instanceof Fc ? null : cp.coordsInWidget(Op, ip, !0) : cp.coordsIn(Op, ip)
      }
      lineAt(pp, ip) {
        let {
          tile: cp
        } = this.tile.resolveBlock(pp, ip);
        return cp.isLine() ? cp : null
      }
      coordsForChar(pp) {
        let {
          tile: ip,
          offset: cp
        } = this.tile.resolveBlock(pp, 1);
        if (!ip.isLine()) return null;
        return function pp(ip, cp) {
          if (ip.isComposite())
            for (let Op of ip.children) {
              if (Op.length >= cp) {
                let ip = pp(Op, cp);
                if (ip) return ip
              }
              if ((cp -= Op.length) < 0) break
            } else if (ip.isText() && cp < ip.length) {
              let pp = (0, Op.S)(ip.text, cp);
              if (pp == cp) return null;
              let op = Ii(ip.dom, cp, pp).getClientRects();
              for (let ip = 0; ip < op.length; ip++) {
                let pp = op[ip];
                if (ip == op.length - 1 || pp.top < pp.bottom && pp.left < pp.right) return pp
              }
            } return null
        }(ip, cp)
      }
      measureVisibleLineHeights(pp) {
        let ip = [],
          {
            from: cp,
            to: Op
          } = pp,
          op = this.view.contentDOM.clientWidth,
          Ip = op > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Sp = -1,
          xp = this.view.textDirection == Ai.LTR,
          Lp = 0,
          Yp = (pp, Dp, Ap) => {
            for (let Pp = 0; Pp < pp.children.length && !(Dp > Op); Pp++) {
              let Op = pp.children[Pp],
                Wp = Dp + Op.length,
                yp = Op.dom.getBoundingClientRect(),
                {
                  height: Up
                } = yp;
              if (Ap && !Pp && (Lp += yp.top - Ap.top), Op instanceof Hc) Wp > cp && Yp(Op, Dp, yp);
              else if (Dp >= cp && (Lp > 0 && ip.push(-Lp), ip.push(Up + Lp), Lp = 0, Ip)) {
                let pp = Op.dom.lastChild,
                  ip = pp ? np(pp) : [];
                if (ip.length) {
                  let pp = ip[ip.length - 1],
                    cp = xp ? pp.right - yp.left : yp.right - pp.left;
                  cp > Sp && (Sp = cp, this.minWidth = op, this.minWidthFrom = Dp, this.minWidthTo = Wp)
                }
              }
              Ap && Pp == pp.children.length - 1 && (Lp += Ap.bottom - yp.bottom), Dp = Wp + Op.breakAfter
            }
          };
        return Yp(this.tile, 0, null), ip
      }
      textDirectionAt(pp) {
        let {
          tile: ip
        } = this.tile.resolveBlock(pp, 1);
        return "rtl" == getComputedStyle(ip.dom).direction ? Ai.RTL : Ai.LTR
      }
      measureTextSize() {
        let pp = this.tile.blockTiles((pp => {
          if (pp.isLine() && pp.children.length && pp.length <= 20) {
            let ip, cp = 0;
            for (let Op of pp.children) {
              if (!Op.isText() || /[^ -~]/.test(Op.text)) return;
              let pp = np(Op.dom);
              if (1 != pp.length) return;
              cp += pp[0].width, ip = pp[0].height
            }
            if (cp) return {
              lineHeight: pp.dom.getBoundingClientRect().height,
              charWidth: cp / pp.length,
              textHeight: ip
            }
          }
        }));
        if (pp) return pp;
        let ip, cp, Op, op = document.createElement("div");
        return op.className = "cm-line", op.style.width = "99999px", op.style.position = "absolute", op.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(op);
          let pp = np(op.firstChild)[0];
          ip = op.getBoundingClientRect().height, cp = pp && pp.width ? pp.width / 27 : 7, Op = pp && pp.height ? pp.height : ip, op.remove()
        })), {
          lineHeight: ip,
          charWidth: cp,
          textHeight: Op
        }
      }
      computeBlockGapDeco() {
        let pp = [],
          ip = this.view.viewState;
        for (let cp = 0, Op = 0;; Op++) {
          let op = Op == ip.viewports.length ? null : ip.viewports[Op],
            Ip = op ? op.from - 1 : this.view.state.doc.length;
          if (Ip > cp) {
            let Op = (ip.lineBlockAt(Ip).bottom - ip.lineBlockAt(cp).top) / this.view.scaleY;
            pp.push(lp.replace({
              widget: new Fc(Op),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(cp, Ip))
          }
          if (!op) break;
          cp = op.to + 1
        }
        return lp.set(pp)
      }
      updateDeco() {
        let pp = 1,
          ip = this.view.state.facet(Oc).map((ip => (this.dynamicDecorationMap[pp++] = "function" == typeof ip) ? ip(this.view) : ip)),
          cp = !1,
          op = this.view.state.facet(Ic).map(((pp, ip) => {
            let Op = "function" == typeof pp;
            return Op && (cp = !0), Op ? pp(this.view) : pp
          }));
        for (op.length && (this.dynamicDecorationMap[pp++] = cp, ip.push(Op.A.join(op))), this.uO = [this.editContextFormatting, ...ip, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; pp < this.uO.length;) this.dynamicDecorationMap[pp++] = !1;
        this.blockWrappers = this.view.state.facet(oc).map((pp => "function" == typeof pp ? pp(this.view) : pp))
      }
      scrollIntoView(pp) {
        var ip;
        if (pp.isSnapshot) {
          let ip = this.view.viewState.lineBlockAt(pp.range.head);
          return this.view.scrollDOM.scrollTop = ip.top - pp.yMargin, void(this.view.scrollDOM.scrollLeft = pp.xMargin)
        }
        for (let Dp of this.view.state.facet(Fi)) try {
          if (Dp(this.view, pp.range, pp)) return !0
        } catch (Yp) {
          Zi(this.view.state, Yp, "scroll handler")
        }
        let cp, {
            range: Op
          } = pp,
          op = this.coordsAt(Op.head, null !== (ip = Op.assoc) && void 0 !== ip ? ip : Op.empty ? 0 : Op.head > Op.anchor ? -1 : 1);
        if (!op) return;
        !Op.empty && (cp = this.coordsAt(Op.anchor, Op.anchor > Op.head ? -1 : 1)) && (op = {
          left: Math.min(op.left, cp.left),
          top: Math.min(op.top, cp.top),
          right: Math.max(op.right, cp.right),
          bottom: Math.max(op.bottom, cp.bottom)
        });
        let Ip = Dc(this.view),
          Sp = {
            left: op.left - Ip.left,
            top: op.top - Ip.top,
            right: op.right + Ip.right,
            bottom: op.bottom + Ip.bottom
          },
          {
            offsetWidth: xp,
            offsetHeight: Lp
          } = this.view.scrollDOM;
        if (function(pp, ip, cp, Op, op, Ip, Sp, xp) {
            let Lp = pp.ownerDocument,
              Yp = Lp.defaultView || window;
            for (let Dp = pp, Ap = !1; Dp && !Ap;)
              if (1 == Dp.nodeType) {
                let pp, Pp = Dp == Lp.body,
                  Wp = 1,
                  yp = 1;
                if (Pp) pp = sp(Yp);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Dp).position) && (Ap = !0), Dp.scrollHeight <= Dp.clientHeight && Dp.scrollWidth <= Dp.clientWidth) {
                    Dp = Dp.assignedSlot || Dp.parentNode;
                    continue
                  }
                  let ip = Dp.getBoundingClientRect();
                  ({
                    scaleX: Wp,
                    scaleY: yp
                  } = Kp(Dp, ip)), pp = {
                    left: ip.left,
                    right: ip.left + Dp.clientWidth * Wp,
                    top: ip.top,
                    bottom: ip.top + Dp.clientHeight * yp
                  }
                }
                let Up = 0,
                  wp = 0;
                if ("nearest" == op) ip.top < pp.top + Sp ? (wp = ip.top - (pp.top + Sp), cp > 0 && ip.bottom > pp.bottom + wp && (wp = ip.bottom - pp.bottom + Sp)) : ip.bottom > pp.bottom - Sp && (wp = ip.bottom - pp.bottom + Sp, cp < 0 && ip.top - wp < pp.top && (wp = ip.top - (pp.top + Sp)));
                else {
                  let Op = ip.bottom - ip.top,
                    Ip = pp.bottom - pp.top;
                  wp = ("center" == op && Op <= Ip ? ip.top + Op / 2 - Ip / 2 : "start" == op || "center" == op && cp < 0 ? ip.top - Sp : ip.bottom - Ip + Sp) - pp.top
                }
                if ("nearest" == Op ? ip.left < pp.left + Ip ? (Up = ip.left - (pp.left + Ip), cp > 0 && ip.right > pp.right + Up && (Up = ip.right - pp.right + Ip)) : ip.right > pp.right - Ip && (Up = ip.right - pp.right + Ip, cp < 0 && ip.left < pp.left + Up && (Up = ip.left - (pp.left + Ip))) : Up = ("center" == Op ? ip.left + (ip.right - ip.left) / 2 - (pp.right - pp.left) / 2 : "start" == Op == xp ? ip.left - Ip : ip.right - (pp.right - pp.left) + Ip) - pp.left, Up || wp)
                  if (Pp) Yp.scrollBy(Up, wp);
                  else {
                    let pp = 0,
                      cp = 0;
                    if (wp) {
                      let pp = Dp.scrollTop;
                      Dp.scrollTop += wp / yp, cp = (Dp.scrollTop - pp) * yp
                    }
                    if (Up) {
                      let ip = Dp.scrollLeft;
                      Dp.scrollLeft += Up / Wp, pp = (Dp.scrollLeft - ip) * Wp
                    }
                    ip = {
                      left: ip.left - pp,
                      top: ip.top - cp,
                      right: ip.right - pp,
                      bottom: ip.bottom - cp
                    }, pp && Math.abs(pp - Up) < 1 && (Op = "nearest"), cp && Math.abs(cp - wp) < 1 && (op = "nearest")
                  } if (Pp) break;
                (ip.top < pp.top || ip.bottom > pp.bottom || ip.left < pp.left || ip.right > pp.right) && (ip = {
                  left: Math.max(ip.left, pp.left),
                  right: Math.min(ip.right, pp.right),
                  top: Math.max(ip.top, pp.top),
                  bottom: Math.min(ip.bottom, pp.bottom)
                }), Dp = Dp.assignedSlot || Dp.parentNode
              } else {
                if (11 != Dp.nodeType) break;
                Dp = Dp.host
              }
          }(this.view.scrollDOM, Sp, Op.head < Op.anchor ? -1 : 1, pp.x, pp.y, Math.max(Math.min(pp.xMargin, xp), -xp), Math.max(Math.min(pp.yMargin, Lp), -Lp), this.view.textDirection == Ai.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (op.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || op.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let pp = this.view.docView.lineAt(Op.head, 1);
          pp && pp.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(pp) {
        let ip = pp => pp.isWidget() || pp.children.some(ip);
        return ip(this.tile.resolveBlock(pp, 1).tile)
      }
      destroy() {
        bc(this.tile)
      }
    }

    function bc(pp, ip) {
      let cp = null === ip || void 0 === ip ? void 0 : ip.get(pp);
      if (1 != cp) {
        null == cp && pp.destroy();
        for (let cp of pp.children) bc(cp, ip)
      }
    }

    function hc(pp, ip) {
      let cp = pp.observer.selectionRange;
      if (!cp.focusNode) return null;
      let Op = Li(cp.focusNode, cp.focusOffset),
        op = Yi(cp.focusNode, cp.focusOffset),
        Ip = Op || op;
      if (op && Op && op.node != Op.node) {
        let ip = Uc.get(op.node);
        if (!ip || ip.isText() && ip.text != op.node.nodeValue) Ip = op;
        else if (pp.docView.lastCompositionAfterCursor) {
          let pp = Uc.get(Op.node);
          !pp || pp.isText() && pp.text != Op.node.nodeValue || (Ip = op)
        }
      }
      if (pp.docView.lastCompositionAfterCursor = Ip != Op, !Ip) return null;
      let Sp = ip - Ip.offset;
      return {
        from: Sp,
        to: Sp + Ip.node.nodeValue.length,
        node: Ip.node
      }
    }
    let ac = class {
      constructor() {
        this.changes = []
      }
      compareRange(pp, ip) {
        Tp(pp, ip, this.changes)
      }
      comparePoint(pp, ip) {
        Tp(pp, ip, this.changes)
      }
      boundChange(pp) {
        Tp(pp, pp, this.changes)
      }
    };
    class nc {
      constructor() {
        this.changes = []
      }
      compareRange(pp, ip) {
        Tp(pp, ip, this.changes)
      }
      comparePoint() {}
      boundChange(pp) {
        Tp(pp, pp, this.changes)
      }
    }
    class Fc extends Ep {
      constructor(pp) {
        super(), this.height = pp
      }
      toDOM() {
        let pp = document.createElement("div");
        return pp.className = "cm-gap", this.updateDOM(pp), pp
      }
      eq(pp) {
        return pp.height == this.height
      }
      updateDOM(pp) {
        return pp.style.height = this.height + "px", !0
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

    function gc(pp, ip, cp) {
      let Op = pp.lineBlockAt(ip);
      if (Array.isArray(Op.type)) {
        let pp;
        for (let op of Op.type) {
          if (op.from > ip) break;
          if (!(op.to < ip)) {
            if (op.from < ip && op.to > ip) return op;
            pp && (op.type != Xp.Text || pp.type == op.type && !(cp < 0 ? op.from < ip : op.to > ip)) || (pp = op)
          }
        }
        return pp || Op
      }
      return Op
    }

    function Gc(pp, ip, cp, Op) {
      let op = pp.state.doc.lineAt(ip.head),
        Ip = pp.bidiSpans(op),
        Sp = pp.textDirectionAt(op.from);
      for (let xp = ip, Lp = null;;) {
        let ip = Ci(op, Ip, Sp, xp, cp),
          Yp = Mi;
        if (!ip) {
          if (op.number == (cp ? pp.state.doc.lines : 1)) return xp;
          Yp = "\n", op = pp.state.doc.line(op.number + (cp ? 1 : -1)), Ip = pp.bidiSpans(op), ip = pp.visualLineSide(op, !cp)
        }
        if (Lp) {
          if (!Lp(Yp)) return xp
        } else {
          if (!Op) return ip;
          Lp = Op(Yp)
        }
        xp = ip
      }
    }

    function rc(pp, ip, cp) {
      for (;;) {
        let Op = 0;
        for (let op of pp) op.between(ip - 1, ip + 1, ((pp, op, Ip) => {
          if (ip > pp && ip < op) {
            let Ip = Op || cp || (ip - pp < op - ip ? -1 : 1);
            ip = Ip < 0 ? pp : op, Op = Ip
          }
        }));
        if (!Op) return ip
      }
    }

    function Zc(pp, ip) {
      let cp = null;
      for (let op = 0; op < ip.By.length; op++) {
        let Ip = ip.By[op],
          Sp = null;
        if (Ip.empty) {
          let ip = rc(pp, Ip.from, 0);
          ip != Ip.from && (Sp = Op.l.cursor(ip, -1))
        } else {
          let ip = rc(pp, Ip.from, -1),
            cp = rc(pp, Ip.to, 1);
          ip == Ip.from && cp == Ip.to || (Sp = Op.l.range(Ip.from == Ip.anchor ? ip : cp, Ip.from == Ip.head ? ip : cp))
        }
        Sp && (cp || (cp = ip.By.slice()), cp[op] = Sp)
      }
      return cp ? Op.l.create(cp, ip.mainIndex) : ip
    }

    function zc(pp, ip, cp) {
      let op = rc(pp.state.facet(Sc).map((ip => ip(pp))), cp.from, ip.head > cp.from ? -1 : 1);
      return op == cp.from ? cp : Op.l.cursor(op, op < cp.from ? 1 : -1)
    }
    class sc {
      constructor(pp, ip) {
        this.pos = pp, this.assoc = ip
      }
    }

    function Kc(pp, ip, cp, op) {
      let Ip, Sp = pp.contentDOM.getBoundingClientRect(),
        xp = Sp.top + pp.viewState.paddingTop,
        {
          x: Lp,
          y: Yp
        } = ip,
        Dp = Yp - xp;
      for (;;) {
        if (Dp < 0) return new sc(0, 1);
        if (Dp > pp.viewState.docHeight) return new sc(pp.state.doc.length, -1);
        if (Ip = pp.elementAtHeight(Dp), null == op) break;
        if (Ip.type == Xp.Text) {
          if (op < 0 ? Ip.to < pp.viewport.from : Ip.from > pp.viewport.to) break;
          let ip = pp.docView.coordsAt(op < 0 ? Ip.from : Ip.to, op > 0 ? -1 : 1);
          if (ip && (op < 0 ? ip.top <= Dp + xp : ip.bottom >= Dp + xp)) break
        }
        let ip = pp.viewState.heightOracle.textHeight / 2;
        Dp = op > 0 ? Ip.bottom + ip : Ip.top - ip
      }
      if (pp.viewport.from >= Ip.to || pp.viewport.to <= Ip.from) {
        if (cp) return null;
        if (Ip.type == Xp.Text) {
          let ip = function(pp, ip, cp, op, Ip) {
            let Sp = Math.round((op - ip.left) * pp.defaultCharacterWidth);
            if (pp.lineWrapping && cp.height > 1.5 * pp.defaultLineHeight) {
              let ip = pp.viewState.heightOracle.textHeight;
              Sp += Math.floor((Ip - cp.top - .5 * (pp.defaultLineHeight - ip)) / ip) * pp.viewState.heightOracle.lineLength
            }
            let xp = pp.state.sliceDoc(cp.from, cp.to);
            return cp.from + (0, Op.T)(xp, Sp, pp.state.tabSize)
          }(pp, Sp, Ip, Lp, Yp);
          return new sc(ip, ip == Ip.from ? 1 : -1)
        }
      }
      if (Ip.type != Xp.Text) return Dp < (Ip.top + Ip.bottom) / 2 ? new sc(Ip.from, 1) : new sc(Ip.to, -1);
      let Ap = pp.docView.lineAt(Ip.from, 2);
      return Ap && Ap.length == Ip.length || (Ap = pp.docView.lineAt(Ip.from, -2)), new Vc(pp, Lp, Yp, pp.textDirectionAt(Ip.from)).scanTile(Ap, Ip.from)
    }
    class Vc {
      constructor(pp, ip, cp, Op) {
        this.view = pp, this.x = ip, this.y = cp, this.baseDir = Op, this.line = null, this.spans = null
      }
      bidiSpansAt(pp) {
        return (!this.line || this.line.from > pp || this.line.to < pp) && (this.line = this.view.state.doc.lineAt(pp), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(pp, ip) {
        let {
          line: cp,
          spans: Op
        } = this.bidiSpansAt(pp);
        return Op[ei.find(Op, pp - cp.from, -1, ip)].level == this.baseDir
      }
      dirAt(pp, ip) {
        let {
          line: cp,
          spans: Op
        } = this.bidiSpansAt(pp);
        return Op[ei.find(Op, pp - cp.from, -1, ip)].dir
      }
      bidiIn(pp, ip) {
        let {
          spans: cp,
          line: Op
        } = this.bidiSpansAt(pp);
        return cp.length > 1 || cp.length && (cp[0].level != this.baseDir || cp[0].to + Op.from < ip)
      }
      scan(pp, ip) {
        let cp, Op, op, Ip = 0,
          Sp = pp.length - 1,
          xp = new Set,
          Lp = this.bidiIn(pp[0], pp[Sp]),
          Yp = -1,
          Dp = 1e9;
        pp: for (; Ip < Sp;) {
          let Ap = Sp - Ip,
            Pp = Ip + Sp >> 1;
          ip: if (xp.has(Pp)) {
            let pp = Ip + Math.floor(Math.random() * Ap);
            for (let ip = 0; ip < Ap; ip++) {
              if (!xp.has(pp)) {
                Pp = pp;
                break ip
              }
              pp++, pp == Sp && (pp = Ip)
            }
            break pp
          } xp.add(Pp);
          let Wp = ip(Pp);
          if (Wp)
            for (let ip = 0; ip < Wp.length; ip++) {
              let xp = Wp[ip],
                Ap = 0;
              if (!(0 == xp.width && Wp.length > 1)) {
                if (xp.bottom < this.y)(!cp || cp.bottom < xp.bottom) && (cp = xp), Ap = 1;
                else if (xp.top > this.y)(!Op || Op.top > xp.top) && (Op = xp), Ap = -1;
                else {
                  let pp = xp.left > this.x ? this.x - xp.left : xp.right < this.x ? this.x - xp.right : 0,
                    ip = Math.abs(pp);
                  ip < Dp && (Yp = Pp, Dp = ip, op = xp), pp && (Ap = pp < 0 == (this.baseDir == Ai.LTR) ? -1 : 1)
                } - 1 != Ap || Lp && !this.baseDirAt(pp[Pp], 1) ? 1 != Ap || Lp && !this.baseDirAt(pp[Pp + 1], -1) || (Ip = Pp + 1) : Sp = Pp
              }
            }
        }
        if (!op) {
          let op = cp && (!Op || this.y - cp.bottom < Op.top - this.y) ? cp : Op;
          return this.y = (op.top + op.bottom) / 2, this.scan(pp, ip)
        }
        if (Dp) {
          if (cp && cp.bottom > op.top) return this.y = cp.bottom - 1, this.scan(pp, ip);
          if (Op && Op.top < op.bottom) return this.y = Op.top + 1, this.scan(pp, ip)
        }
        let Ap = (Lp ? this.dirAt(pp[Yp], 1) : this.baseDir) == Ai.LTR;
        return {
          i: Yp,
          after: this.x > (op.left + op.right) / 2 == Ap
        }
      }
      scanText(pp, ip) {
        let cp = [];
        for (let Ip = 0; Ip < pp.length; Ip = (0, Op.S)(pp.text, Ip)) cp.push(ip + Ip);
        cp.push(ip + pp.length);
        let op = this.scan(cp, (Op => {
          let op = cp[Op] - ip,
            Ip = cp[Op + 1] - ip;
          return Ii(pp.dom, op, Ip).getClientRects()
        }));
        return op.after ? new sc(cp[op.i + 1], -1) : new sc(cp[op.i], 1)
      }
      scanTile(pp, ip) {
        if (!pp.length) return new sc(ip, 1);
        if (1 == pp.children.length) {
          let cp = pp.children[0];
          if (cp.isText()) return this.scanText(cp, ip);
          if (cp.isComposite()) return this.scanTile(cp, ip)
        }
        let cp = [ip];
        for (let Sp = 0, xp = ip; Sp < pp.children.length; Sp++) cp.push(xp += pp.children[Sp].length);
        let Op = this.scan(cp, (ip => {
            let cp = pp.children[ip];
            return 48 & cp.flags ? null : (1 == cp.dom.nodeType ? cp.dom : Ii(cp.dom, 0, cp.length)).getClientRects()
          })),
          op = pp.children[Op.i],
          Ip = cp[Op.i];
        return op.isText() ? this.scanText(op, Ip) : op.isComposite() ? this.scanTile(op, Ip) : Op.after ? new sc(cp[Op.i + 1], -1) : new sc(Ip, 1)
      }
    }
    const pO = "\uffff";
    class iO {
      constructor(pp, ip) {
        this.points = pp, this.view = ip, this.text = "", this.lineSeparator = ip.state.facet(Op.n.lineSeparator)
      }
      append(pp) {
        this.text += pp
      }
      lineBreak() {
        this.text += pO
      }
      readRange(pp, ip) {
        if (!pp) return this;
        let cp = pp.parentNode;
        for (let Op = pp;;) {
          this.findPointBefore(cp, Op);
          let pp = this.text.length;
          this.readNode(Op);
          let op = Uc.get(Op),
            Ip = Op.nextSibling;
          if (Ip == ip) {
            (null === op || void 0 === op ? void 0 : op.breakAfter) && !Ip && cp != this.view.contentDOM && this.lineBreak();
            break
          }
          let Sp = Uc.get(Ip);
          (op && Sp ? op.breakAfter : (op ? op.breakAfter : Gp(Op)) || Gp(Ip) && ("BR" != Op.nodeName || (null === op || void 0 === op ? void 0 : op.isWidget())) && this.text.length > pp) && !OO(Ip, ip) && this.lineBreak(), Op = Ip
        }
        return this.findPointBefore(cp, ip), this
      }
      readTextNode(pp) {
        let ip = pp.nodeValue;
        for (let cp of this.points) cp.node == pp && (cp.pos = this.text.length + Math.min(cp.offset, ip.length));
        for (let cp = 0, Op = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let op, Ip = -1,
            Sp = 1;
          if (this.lineSeparator ? (Ip = ip.indexOf(this.lineSeparator, cp), Sp = this.lineSeparator.length) : (op = Op.exec(ip)) && (Ip = op.index, Sp = op[0].length), this.append(ip.slice(cp, Ip < 0 ? ip.length : Ip)), Ip < 0) break;
          if (this.lineBreak(), Sp > 1)
            for (let ip of this.points) ip.node == pp && ip.pos > this.text.length && (ip.pos -= Sp - 1);
          cp = Ip + Sp
        }
      }
      readNode(pp) {
        let ip = Uc.get(pp),
          cp = ip && ip.overrideDOMText;
        if (null != cp) {
          this.findPointInside(pp, cp.length);
          for (let pp = cp.iter(); !pp.next().done;) pp.lineBreak ? this.lineBreak() : this.append(pp.value)
        } else 3 == pp.nodeType ? this.readTextNode(pp) : "BR" == pp.nodeName ? pp.nextSibling && this.lineBreak() : 1 == pp.nodeType && this.readRange(pp.firstChild, null)
      }
      findPointBefore(pp, ip) {
        for (let cp of this.points) cp.node == pp && pp.childNodes[cp.offset] == ip && (cp.pos = this.text.length)
      }
      findPointInside(pp, ip) {
        for (let cp of this.points)(3 == pp.nodeType ? cp.node == pp : pp.contains(cp.node)) && (cp.pos = this.text.length + (cO(pp, cp.node, cp.offset) ? ip : 0))
      }
    }

    function cO(pp, ip, cp) {
      for (;;) {
        if (!ip || cp < Zp(ip)) return !1;
        if (ip == pp) return !0;
        cp = gp(ip) + 1, ip = ip.parentNode
      }
    }

    function OO(pp, ip) {
      let cp;
      for (; pp != ip && pp; pp = pp.nextSibling) {
        let ip = Uc.get(pp);
        if (!(null === ip || void 0 === ip ? void 0 : ip.isWidget())) return !1;
        ip && (cp || (cp = [])).push(ip)
      }
      if (cp)
        for (let Op of cp) {
          let pp = Op.overrideDOMText;
          if (null === pp || void 0 === pp ? void 0 : pp.length) return !1
        }
      return !0
    }
    class oO {
      constructor(pp, ip) {
        this.node = pp, this.offset = ip, this.pos = -1
      }
    }
    class IO {
      constructor(pp, ip, cp, op) {
        this.typeOver = op, this.bounds = null, this.text = "", this.domChanged = ip > -1;
        let {
          impreciseHead: Ip,
          impreciseAnchor: Sp
        } = pp.docView, xp = pp.state.selection;
        if (pp.state.readOnly && ip > -1) this.newSel = null;
        else if (ip > -1 && (this.bounds = SO(pp.docView.tile, ip, cp, 0))) {
          let ip = Ip || Sp ? [] : function(pp) {
              let ip = [];
              if (pp.root.activeElement != pp.contentDOM) return ip;
              let {
                anchorNode: cp,
                anchorOffset: Op,
                focusNode: op,
                focusOffset: Ip
              } = pp.observer.selectionRange;
              cp && (ip.push(new oO(cp, Op)), op == cp && Ip == Op || ip.push(new oO(op, Ip)));
              return ip
            }(pp),
            cp = new iO(ip, pp);
          cp.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = cp.text, this.newSel = function(pp, ip) {
            if (0 == pp.length) return null;
            let cp = pp[0].pos,
              op = 2 == pp.length ? pp[1].pos : cp;
            return cp > -1 && op > -1 ? Op.l.single(cp + ip, op + ip) : null
          }(ip, this.bounds.from)
        } else {
          let ip = pp.observer.selectionRange,
            cp = Ip && Ip.node == ip.focusNode && Ip.offset == ip.focusOffset || !hp(pp.contentDOM, ip.focusNode) ? xp.main.head : pp.docView.posFromDOM(ip.focusNode, ip.focusOffset),
            op = Sp && Sp.node == ip.anchorNode && Sp.offset == ip.anchorOffset || !hp(pp.contentDOM, ip.anchorNode) ? xp.main.anchor : pp.docView.posFromDOM(ip.anchorNode, ip.anchorOffset),
            Lp = pp.viewport;
          if ((kp.ios || kp.chrome) && xp.main.empty && cp != op && (Lp.from > 0 || Lp.to < pp.state.doc.length)) {
            let ip = Math.min(cp, op),
              Op = Math.max(cp, op),
              Ip = Lp.from - ip,
              Sp = Lp.to - Op;
            0 != Ip && 1 != Ip && 0 != ip || 0 != Sp && -1 != Sp && Op != pp.state.doc.length || (cp = 0, op = pp.state.doc.length)
          }
          if (pp.inputState.composing > -1 && xp.By.length > 1) this.newSel = xp.replaceRange(Op.l.range(op, cp));
          else if (pp.lineWrapping && op == cp && (!xp.main.empty || xp.main.head != cp) && pp.inputState.lastTouchTime > Date.now() - 100) {
            let ip = pp.coordsAtPos(cp, -1),
              op = 0;
            ip && (op = pp.inputState.lastTouchY <= ip.bottom ? -1 : 1), this.newSel = Op.l.create([Op.l.cursor(cp, op)])
          } else this.newSel = Op.l.single(op, cp)
        }
      }
    }

    function SO(pp, ip, cp, Op) {
      if (pp.isComposite()) {
        let op = -1,
          Ip = -1,
          Sp = -1,
          xp = -1;
        for (let Lp = 0, Yp = Op, Dp = Op; Lp < pp.children.length; Lp++) {
          let Op = pp.children[Lp],
            Ap = Yp + Op.length;
          if (Yp < ip && Ap > cp) return SO(Op, ip, cp, Yp);
          if (Ap >= ip && -1 == op && (op = Lp, Ip = Yp), Yp > cp && Op.dom.parentNode == pp.dom) {
            Sp = Lp, xp = Dp;
            break
          }
          Dp = Ap, Yp = Ap + Op.breakAfter
        }
        return {
          from: Ip,
          to: xp < 0 ? Op + pp.length : xp,
          startDOM: (op ? pp.children[op - 1].dom.nextSibling : null) || pp.dom.firstChild,
          endDOM: Sp < pp.children.length && Sp >= 0 ? pp.children[Sp].dom : null
        }
      }
      return pp.isText() ? {
        from: Op,
        to: Op + pp.length,
        startDOM: pp.dom,
        endDOM: pp.dom.nextSibling
      } : null
    }

    function xO(pp, ip) {
      let cp, {
          newSel: op
        } = ip,
        {
          state: Ip
        } = pp,
        Sp = Ip.selection.main,
        xp = pp.inputState.lastKeyTime > Date.now() - 100 ? pp.inputState.lastKeyCode : -1;
      if (ip.bounds) {
        let {
          from: pp,
          to: op
        } = ip.bounds, Lp = Sp.from, Yp = null;
        (8 === xp || kp.android && ip.text.length < op - pp) && (Lp = Sp.to, Yp = "end");
        let Dp, Ap, Pp = Ip.doc.sliceString(pp, op, pO);
        !Sp.empty && Sp.from >= pp && Sp.to <= op && (ip.typeOver || Pp != ip.text) && Pp.slice(0, Sp.from - pp) == ip.text.slice(0, Sp.from - pp) && Pp.slice(Sp.to - pp) == ip.text.slice(Dp = ip.text.length - (Pp.length - (Sp.to - pp))) ? cp = {
          from: Sp.from,
          to: Sp.to,
          insert: Op.F.of(ip.text.slice(Sp.from - pp, Dp).split(pO))
        } : (Ap = YO(Pp, ip.text, Lp - pp, Yp)) && (kp.chrome && 13 == xp && Ap.toB == Ap.from + 2 && ip.text.slice(Ap.from, Ap.toB) == pO + pO && Ap.toB--, cp = {
          from: pp + Ap.from,
          to: pp + Ap.toA,
          insert: Op.F.of(ip.text.slice(Ap.from, Ap.toB).split(pO))
        })
      } else op && (!pp.hasFocus && Ip.facet(zi) || DO(op, Sp)) && (op = null);
      if (!cp && !op) return !1;
      if ((kp.mac || kp.android) && cp && cp.from == cp.to && cp.from == Sp.head - 1 && /^\. ?$/.test(cp.insert.toString()) && "off" == pp.contentDOM.getAttribute("autocorrect") ? (op && 2 == cp.insert.length && (op = Op.l.single(op.main.anchor - 1, op.main.head - 1)), cp = {
          from: cp.from,
          to: cp.to,
          insert: Op.F.of([cp.insert.toString().replace(".", " ")])
        }) : Ip.doc.lineAt(Sp.from).to < Sp.to && pp.docView.lineHasWidget(Sp.to) && pp.inputState.insertingTextAt > Date.now() - 50 ? cp = {
          from: Sp.from,
          to: Sp.to,
          insert: Ip.toText(pp.inputState.insertingText)
        } : kp.chrome && cp && cp.from == cp.to && cp.from == Sp.head && "\n " == cp.insert.toString() && pp.lineWrapping && (op && (op = Op.l.single(op.main.anchor - 1, op.main.head - 1)), cp = {
          from: Sp.from,
          to: Sp.to,
          insert: Op.F.of([" "])
        }), cp) return LO(pp, cp, op, xp);
      if (op && !DO(op, Sp)) {
        let ip = !1,
          cp = "select";
        return pp.inputState.lastSelectionTime > Date.now() - 50 && ("select" == pp.inputState.lastSelectionOrigin && (ip = !0), cp = pp.inputState.lastSelectionOrigin, "select.pointer" == cp && (op = Zc(Ip.facet(Sc).map((ip => ip(pp))), op))), pp.dispatch({
          selection: op,
          scrollIntoView: ip,
          userEvent: cp
        }), !0
      }
      return !1
    }

    function LO(pp, ip, cp) {
      let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (kp.ios && pp.inputState.flushIOSKey(ip)) return !0;
      let Ip = pp.state.selection.main;
      if (kp.android && (ip.to == Ip.to && (ip.from == Ip.from || ip.from == Ip.from - 1 && " " == pp.state.sliceDoc(ip.from, Ip.from)) && 1 == ip.insert.length && 2 == ip.insert.lines && Si(pp.contentDOM, "Enter", 13) || (ip.from == Ip.from - 1 && ip.to == Ip.to && 0 == ip.insert.length || 8 == op && ip.insert.length < ip.to - ip.from && ip.to > Ip.head) && Si(pp.contentDOM, "Backspace", 8) || ip.from == Ip.from && ip.to == Ip.to + 1 && 0 == ip.insert.length && Si(pp.contentDOM, "Delete", 46))) return !0;
      let Sp, xp = ip.insert.toString();
      pp.inputState.composing >= 0 && pp.inputState.composing++;
      let Lp = () => Sp || (Sp = function(pp, ip, cp) {
        let op, Ip = pp.state,
          Sp = Ip.selection.main,
          xp = -1;
        if (ip.from == ip.to && ip.from < Sp.from || ip.from > Sp.to) {
          let cp = ip.from < Sp.from ? -1 : 1,
            Op = cp < 0 ? Sp.from : Sp.to,
            op = rc(Ip.facet(Sc).map((ip => ip(pp))), Op, cp);
          ip.from == op && (xp = op)
        }
        if (xp > -1) op = {
          changes: ip,
          selection: Op.l.cursor(ip.from + ip.insert.length, -1)
        };
        else if (ip.from >= Sp.from && ip.to <= Sp.to && ip.to - ip.from >= (Sp.to - Sp.from) / 3 && (!cp || cp.main.empty && cp.main.from == ip.from + ip.insert.length) && pp.inputState.composing < 0) {
          let cp = Sp.from < ip.from ? Ip.sliceDoc(Sp.from, ip.from) : "",
            Op = Sp.to > ip.to ? Ip.sliceDoc(ip.to, Sp.to) : "";
          op = Ip.replaceSelection(pp.state.toText(cp + ip.insert.sliceString(0, void 0, pp.state.lineBreak) + Op))
        } else {
          let xp = Ip.changes(ip),
            Lp = cp && cp.main.to <= xp.newLength ? cp.main : void 0;
          if (Ip.selection.By.length > 1 && (pp.inputState.composing >= 0 || pp.inputState.compositionPendingChange) && ip.to <= Sp.to + 10 && ip.to >= Sp.to - 10) {
            let Yp, Dp = pp.state.sliceDoc(ip.from, ip.to),
              Ap = cp && hc(pp, cp.main.head);
            if (Ap) {
              let pp = ip.insert.length - (ip.to - ip.from);
              Yp = {
                from: Ap.from,
                to: Ap.to - pp
              }
            } else Yp = pp.state.doc.lineAt(Sp.head);
            let Pp = Sp.to - ip.to;
            op = Ip.changeByRange((cp => {
              if (cp.from == Sp.from && cp.to == Sp.to) return {
                changes: xp,
                range: Lp || cp.map(xp)
              };
              let op = cp.to - Pp,
                Ap = op - Dp.length;
              if (pp.state.sliceDoc(Ap, op) != Dp || op >= Yp.from && Ap <= Yp.to) return {
                range: cp
              };
              let Wp = Ip.changes({
                  from: Ap,
                  to: op,
                  insert: ip.insert
                }),
                yp = cp.to - Sp.to;
              return {
                changes: Wp,
                range: Lp ? Op.l.range(Math.max(0, Lp.anchor + yp), Math.max(0, Lp.head + yp)) : cp.map(Wp)
              }
            }))
          } else op = {
            changes: xp,
            selection: Lp && Ip.selection.replaceRange(Lp)
          }
        }
        let Lp = "input.type";
        (pp.composing || pp.inputState.compositionPendingChange && pp.inputState.compositionEndedAt > Date.now() - 50) && (pp.inputState.compositionPendingChange = !1, Lp += ".compose", pp.inputState.compositionFirstChange && (Lp += ".start", pp.inputState.compositionFirstChange = !1));
        return Ip.update(op, {
          userEvent: Lp,
          scrollIntoView: !0
        })
      }(pp, ip, cp));
      return pp.state.facet(Ni).some((cp => cp(pp, ip.from, ip.to, xp, Lp))) || pp.dispatch(Lp()), !0
    }

    function YO(pp, ip, cp, Op) {
      let op = Math.min(pp.length, ip.length),
        Ip = 0;
      for (; Ip < op && pp.charCodeAt(Ip) == ip.charCodeAt(Ip);) Ip++;
      if (Ip == op && pp.length == ip.length) return null;
      let Sp = pp.length,
        xp = ip.length;
      for (; Sp > 0 && xp > 0 && pp.charCodeAt(Sp - 1) == ip.charCodeAt(xp - 1);) Sp--, xp--;
      if ("end" == Op) {
        cp -= Sp + Math.max(0, Ip - Math.min(Sp, xp)) - Ip
      }
      if (Sp < Ip && pp.length < ip.length) {
        Ip -= cp <= Ip && cp >= Sp ? Ip - cp : 0, xp = Ip + (xp - Sp), Sp = Ip
      } else if (xp < Ip) {
        Ip -= cp <= Ip && cp >= xp ? Ip - cp : 0, Sp = Ip + (Sp - xp), xp = Ip
      }
      return {
        from: Ip,
        toA: Sp,
        toB: xp
      }
    }

    function DO(pp, ip) {
      return ip.head == pp.main.head && ip.anchor == pp.main.anchor
    }
    class AO {
      setSelectionOrigin(pp) {
        this.lastSelectionOrigin = pp, this.lastSelectionTime = Date.now()
      }
      constructor(pp) {
        this.view = pp, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = pp.hasFocus, kp.safari && pp.contentDOM.addEventListener("input", (() => null)), kp.gecko && function(pp) {
          BO.has(pp) || (BO.add(pp), pp.addEventListener("copy", (() => {})), pp.addEventListener("cut", (() => {})))
        }(pp.contentDOM.ownerDocument)
      }
      handleEvent(pp) {
        (function(pp, ip) {
          if (!ip.bubbles) return !0;
          if (ip.defaultPrevented) return !1;
          for (let cp, Op = ip.target; Op != pp.contentDOM; Op = Op.parentNode)
            if (!Op || 11 == Op.nodeType || (cp = Uc.get(Op)) && cp.isWidget() && !cp.isHidden && cp.widget.ignoreEvent(ip)) return !1;
          return !0
        })(this.view, pp) && !this.ignoreDuringComposition(pp) && ("keydown" == pp.type && this.keydown(pp) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(pp.type, pp))) : this.runHandlers(pp.type, pp)))
      }
      runHandlers(pp, ip) {
        let cp = this.handlers[pp];
        if (cp) {
          for (let pp of cp.observers) pp(this.view, ip);
          for (let pp of cp.handlers) {
            if (ip.defaultPrevented) break;
            if (pp(this.view, ip)) {
              ip.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(pp) {
        let ip = WO(pp),
          cp = this.handlers,
          Op = this.view.contentDOM;
        for (let op in ip)
          if ("scroll" != op) {
            let pp = !ip[op].handlers.length,
              Ip = cp[op];
            Ip && pp != !Ip.handlers.length && (Op.removeEventListener(op, this.handleEvent), Ip = null), Ip || Op.addEventListener(op, this.handleEvent, {
              passive: pp
            })
          } for (let op in cp) "scroll" == op || ip[op] || Op.removeEventListener(op, this.handleEvent);
        this.handlers = ip
      }
      keydown(pp) {
        if (this.lastKeyCode = pp.keyCode, this.lastKeyTime = Date.now(), 9 == pp.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != pp.keyCode && wO.indexOf(pp.keyCode) < 0 && (this.tabFocusMode = -1), kp.android && kp.chrome && !pp.synthetic && (13 == pp.keyCode || 8 == pp.keyCode)) return this.view.observer.delayAndroidKey(pp.key, pp.keyCode), !0;
        let ip;
        return !kp.ios || pp.synthetic || pp.altKey || pp.metaKey || pp.shiftKey || !((ip = yO.find((ip => ip.keyCode == pp.keyCode))) && !pp.ctrlKey || UO.indexOf(pp.key) > -1 && pp.ctrlKey) ? (229 != pp.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = ip || pp, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(pp) {
        let ip = this.pendingIOSKey;
        return !!ip && (!("Enter" == ip.key && pp && pp.from < pp.to && /^\S+$/.test(pp.insert.toString())) && (this.pendingIOSKey = void 0, Si(this.view.contentDOM, ip.key, ip.keyCode, ip instanceof KeyboardEvent ? ip : void 0)))
      }
      ignoreDuringComposition(pp) {
        return !(!/^key/.test(pp.type) || pp.synthetic) && (this.composing > 0 || !!(kp.safari && !kp.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(pp) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = pp
      }
      update(pp) {
        this.view.observer.update(pp), this.mouseSelection && this.mouseSelection.update(pp), this.draggedContent && pp.docChanged && (this.draggedContent = this.draggedContent.map(pp.changes)), pp.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function PO(pp, ip) {
      return (cp, Op) => {
        try {
          return ip.call(pp, Op, cp)
        } catch (op) {
          Zi(cp.state, op)
        }
      }
    }

    function WO(pp) {
      let ip = Object.create(null);

      function cp(pp) {
        return ip[pp] || (ip[pp] = {
          observers: [],
          handlers: []
        })
      }
      for (let Op of pp) {
        let pp = Op.spec,
          ip = pp && pp.plugin.domEventHandlers,
          op = pp && pp.plugin.domEventObservers;
        if (ip)
          for (let Ip in ip) {
            let pp = ip[Ip];
            pp && cp(Ip).handlers.push(PO(Op.value, pp))
          }
        if (op)
          for (let Ip in op) {
            let pp = op[Ip];
            pp && cp(Ip).observers.push(PO(Op.value, pp))
          }
      }
      for (let Op in HO) cp(Op).handlers.push(HO[Op]);
      for (let Op in dO) cp(Op).observers.push(dO[Op]);
      return ip
    }
    const yO = [{
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
      UO = "dthko",
      wO = [16, 17, 18, 20, 91, 92, 224, 225];

    function vO(pp) {
      return .7 * Math.max(0, pp) + 8
    }
    class tO {
      constructor(pp, ip, cp, op) {
        this.view = pp, this.startEvent = ip, this.style = cp, this.mustSelect = op, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = ip, this.scrollParents = Vp(pp.contentDOM), this.atoms = pp.state.facet(Sc).map((ip => ip(pp)));
        let Ip = pp.contentDOM.ownerDocument;
        Ip.addEventListener("mousemove", this.move = this.move.bind(this)), Ip.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = ip.shiftKey, this.multiple = pp.state.facet(Op.n.allowMultipleSelections) && function(pp, ip) {
          let cp = pp.state.facet(Xi);
          return cp.length ? cp[0](ip) : kp.mac ? ip.metaKey : ip.ctrlKey
        }(pp, ip), this.dragging = !(! function(pp, ip) {
          let {
            main: cp
          } = pp.state.selection;
          if (cp.empty) return !1;
          let Op = bp(pp.root);
          if (!Op || 0 == Op.rangeCount) return !0;
          let op = Op.getRangeAt(0).getClientRects();
          for (let Ip = 0; Ip < op.length; Ip++) {
            let pp = op[Ip];
            if (pp.left <= ip.clientX && pp.right >= ip.clientX && pp.top <= ip.clientY && pp.bottom >= ip.clientY) return !0
          }
          return !1
        }(pp, ip) || 1 != CO(ip)) && null
      }
      start(pp) {
        !1 === this.dragging && this.select(pp)
      }
      move(pp) {
        if (0 == pp.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (ip = this.startEvent, cp = pp, Math.max(Math.abs(ip.clientX - cp.clientX), Math.abs(ip.clientY - cp.clientY)) < 10)) return;
        var ip, cp;
        this.select(this.lastEvent = pp);
        let Op = 0,
          op = 0,
          Ip = 0,
          Sp = 0,
          xp = this.view.win.innerWidth,
          Lp = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Ip,
          right: xp
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Sp,
          bottom: Lp
        } = this.scrollParents.y.getBoundingClientRect());
        let Yp = Dc(this.view);
        pp.clientX - Yp.left <= Ip + 6 ? Op = -vO(Ip - pp.clientX) : pp.clientX + Yp.right >= xp - 6 && (Op = vO(pp.clientX - xp)), pp.clientY - Yp.top <= Sp + 6 ? op = -vO(Sp - pp.clientY) : pp.clientY + Yp.bottom >= Lp - 6 && (op = vO(pp.clientY - Lp)), this.setScrollSpeed(Op, op)
      }
      up(pp) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || pp.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let pp = this.view.contentDOM.ownerDocument;
        pp.removeEventListener("mousemove", this.move), pp.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(pp, ip) {
        this.scrollSpeed = {
          x: pp,
          y: ip
        }, pp || ip ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: pp,
          y: ip
        } = this.scrollSpeed;
        pp && this.scrollParents.x && (this.scrollParents.x.scrollLeft += pp, pp = 0), ip && this.scrollParents.y && (this.scrollParents.y.scrollTop += ip, ip = 0), (pp || ip) && this.view.win.scrollBy(pp, ip), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(pp) {
        let {
          view: ip
        } = this, cp = Zc(this.atoms, this.style.get(pp, this.extend, this.multiple));
        !this.mustSelect && cp.eq(ip.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: cp,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(pp) {
        pp.transactions.some((pp => pp.isUserEvent("input.type"))) ? this.destroy() : this.style.update(pp) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const HO = Object.create(null),
      dO = Object.create(null),
      eO = kp.ie && kp.ie_version < 15 || kp.ios && kp.webkit_version < 604;

    function uO(pp, ip, cp) {
      for (let Op of pp.facet(ip)) cp = Op(cp, pp);
      return cp
    }

    function jO(pp, ip) {
      ip = uO(pp.state, fi, ip);
      let cp, {
          state: op
        } = pp,
        Ip = 1,
        Sp = op.toText(ip),
        xp = Sp.lines == op.selection.By.length;
      if (null != XO && op.selection.By.every((pp => pp.empty)) && XO == Sp.toString()) {
        let pp = -1;
        cp = op.changeByRange((cp => {
          let Lp = op.doc.lineAt(cp.from);
          if (Lp.from == pp) return {
            range: cp
          };
          pp = Lp.from;
          let Yp = op.toText((xp ? Sp.line(Ip++).text : ip) + op.lineBreak);
          return {
            changes: {
              from: Lp.from,
              insert: Yp
            },
            range: Op.l.cursor(cp.from + Yp.length)
          }
        }))
      } else cp = xp ? op.changeByRange((pp => {
        let ip = Sp.line(Ip++);
        return {
          changes: {
            from: pp.from,
            to: pp.to,
            insert: ip.text
          },
          range: Op.l.cursor(pp.from + ip.length)
        }
      })) : op.replaceSelection(Sp);
      pp.dispatch(cp, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function kO(pp, ip, cp, op) {
      if (1 == op) return Op.l.cursor(ip, cp);
      if (2 == op) return function(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          op = pp.charCategorizer(ip),
          Ip = pp.doc.lineAt(ip),
          Sp = ip - Ip.from;
        if (0 == Ip.length) return Op.l.cursor(ip);
        0 == Sp ? cp = 1 : Sp == Ip.length && (cp = -1);
        let xp = Sp,
          Lp = Sp;
        cp < 0 ? xp = (0, Op.S)(Ip.text, Sp, !1) : Lp = (0, Op.S)(Ip.text, Sp);
        let Yp = op(Ip.text.slice(xp, Lp));
        for (; xp > 0;) {
          let pp = (0, Op.S)(Ip.text, xp, !1);
          if (op(Ip.text.slice(pp, xp)) != Yp) break;
          xp = pp
        }
        for (; Lp < Ip.length;) {
          let pp = (0, Op.S)(Ip.text, Lp);
          if (op(Ip.text.slice(Lp, pp)) != Yp) break;
          Lp = pp
        }
        return Op.l.range(xp + Ip.from, Lp + Ip.from)
      }(pp.state, ip, cp);
      {
        let op = pp.docView.lineAt(ip, cp),
          Ip = pp.state.doc.lineAt(op ? op.posAtEnd : ip),
          Sp = op ? op.posAtStart : Ip.from,
          xp = op ? op.posAtEnd : Ip.to;
        return xp < pp.state.doc.length && xp == Ip.to && xp++, Op.l.range(Sp, xp)
      }
    }
    dO.scroll = pp => {
      pp.inputState.lastScrollTop = pp.scrollDOM.scrollTop, pp.inputState.lastScrollLeft = pp.scrollDOM.scrollLeft
    }, dO.wheel = dO.mousewheel = pp => {
      pp.inputState.lastWheelEvent = Date.now()
    }, HO.keydown = (pp, ip) => (pp.inputState.setSelectionOrigin("select"), 27 == ip.keyCode && 0 != pp.inputState.tabFocusMode && (pp.inputState.tabFocusMode = Date.now() + 2e3), !1), dO.touchstart = (pp, ip) => {
      let cp = pp.inputState,
        Op = ip.targetTouches[0];
      cp.lastTouchTime = Date.now(), Op && (cp.lastTouchX = Op.clientX, cp.lastTouchY = Op.clientY), cp.setSelectionOrigin("select.pointer")
    }, dO.touchmove = pp => {
      pp.inputState.setSelectionOrigin("select.pointer")
    }, HO.mousedown = (pp, ip) => {
      if (pp.observer.flush(), pp.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let cp = null;
      for (let Op of pp.state.facet(Qi))
        if (cp = Op(pp, ip), cp) break;
      if (cp || 0 != ip.button || (cp = function(pp, ip) {
          let cp = pp.posAndSideAtCoords({
              x: ip.clientX,
              y: ip.clientY
            }, !1),
            op = CO(ip),
            Ip = pp.state.selection;
          return {
            update(pp) {
              pp.docChanged && (cp.pos = pp.changes.mapPos(cp.pos), Ip = Ip.map(pp.changes))
            },
            get(ip, Sp, xp) {
              let Lp, Yp = pp.posAndSideAtCoords({
                  x: ip.clientX,
                  y: ip.clientY
                }, !1),
                Dp = kO(pp, Yp.pos, Yp.assoc, op);
              if (cp.pos != Yp.pos && !Sp) {
                let ip = kO(pp, cp.pos, cp.assoc, op),
                  Ip = Math.min(ip.from, Dp.from),
                  Sp = Math.max(ip.to, Dp.to);
                Dp = Ip < Dp.from ? Op.l.range(Ip, Sp, Dp.assoc) : Op.l.range(Sp, Ip, Dp.assoc)
              }
              return Sp ? Ip.replaceRange(Ip.main.extend(Dp.from, Dp.to, Dp.assoc)) : xp && 1 == op && Ip.By.length > 1 && (Lp = function(pp, ip) {
                for (let cp = 0; cp < pp.By.length; cp++) {
                  let {
                    from: op,
                    to: Ip
                  } = pp.By[cp];
                  if (op <= ip && Ip >= ip) return Op.l.create(pp.By.slice(0, cp).concat(pp.By.slice(cp + 1)), pp.mainIndex == cp ? 0 : pp.mainIndex - (pp.mainIndex > cp ? 1 : 0))
                }
                return null
              }(Ip, Yp.pos)) ? Lp : xp ? Ip.addRange(Dp) : Op.l.create([Dp])
            }
          }
        }(pp, ip)), cp) {
        let Op = !pp.hasFocus;
        pp.inputState.startMouseSelection(new tO(pp, ip, cp, Op)), Op && pp.observer.ignore((() => {
          oi(pp.contentDOM);
          let ip = pp.root.activeElement;
          ip && !ip.contains(pp.contentDOM) && ip.blur()
        }));
        let op = pp.inputState.mouseSelection;
        if (op) return op.start(ip), !1 === op.dragging
      } else pp.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const mO = kp.ie && kp.ie_version <= 11;
    let RO = null,
      qO = 0,
      MO = 0;

    function CO(pp) {
      if (!mO) return pp.detail;
      let ip = RO,
        cp = MO;
      return RO = pp, MO = Date.now(), qO = !ip || cp > Date.now() - 400 && Math.abs(ip.clientX - pp.clientX) < 2 && Math.abs(ip.clientY - pp.clientY) < 2 ? (qO + 1) % 3 : 1
    }

    function EO(pp, ip, cp, Op) {
      if (!(cp = uO(pp.state, fi, cp))) return;
      let op = pp.posAtCoords({
          x: ip.clientX,
          y: ip.clientY
        }, !1),
        {
          draggedContent: Ip
        } = pp.inputState,
        Sp = Op && Ip && function(pp, ip) {
          let cp = pp.state.facet(li);
          return cp.length ? cp[0](ip) : kp.mac ? !ip.altKey : !ip.ctrlKey
        }(pp, ip) ? {
          from: Ip.from,
          to: Ip.to
        } : null,
        xp = {
          from: op,
          insert: cp
        },
        Lp = pp.state.changes(Sp ? [Sp, xp] : xp);
      pp.focus(), pp.dispatch({
        changes: Lp,
        selection: {
          anchor: Lp.mapPos(op, -1),
          head: Lp.mapPos(op, 1)
        },
        userEvent: Sp ? "move.drop" : "input.drop"
      }), pp.inputState.draggedContent = null
    }
    HO.dragstart = (pp, ip) => {
      let {
        selection: {
          main: cp
        }
      } = pp.state;
      if (ip.target.draggable) {
        let op = pp.docView.tile.nearest(ip.target);
        if (op && op.isWidget()) {
          let pp = op.posAtStart,
            ip = pp + op.length;
          (pp >= cp.to || ip <= cp.from) && (cp = Op.l.range(pp, ip))
        }
      }
      let {
        inputState: op
      } = pp;
      return op.mouseSelection && (op.mouseSelection.dragging = !0), op.draggedContent = cp, ip.dataTransfer && (ip.dataTransfer.setData("Text", uO(pp.state, bi, pp.state.sliceDoc(cp.from, cp.to))), ip.dataTransfer.effectAllowed = "copyMove"), !1
    }, HO.dragend = pp => (pp.inputState.draggedContent = null, !1), HO.drop = (pp, ip) => {
      if (!ip.dataTransfer) return !1;
      if (pp.state.readOnly) return !0;
      let cp = ip.dataTransfer.files;
      if (cp && cp.length) {
        let Op = Array(cp.length),
          op = 0,
          Ip = () => {
            ++op == cp.length && EO(pp, ip, Op.filter((pp => null != pp)).join(pp.state.lineBreak), !1)
          };
        for (let pp = 0; pp < cp.length; pp++) {
          let ip = new FileReader;
          ip.onerror = Ip, ip.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(ip.result) || (Op[pp] = ip.result), Ip()
          }, ip.readAsText(cp[pp])
        }
        return !0
      } {
        let cp = ip.dataTransfer.getData("Text");
        if (cp) return EO(pp, ip, cp, !0), !0
      }
      return !1
    }, HO.paste = (pp, ip) => {
      if (pp.state.readOnly) return !0;
      pp.observer.flush();
      let cp = eO ? null : ip.clipboardData;
      return cp ? (jO(pp, cp.getData("text/plain") || cp.getData("text/uri-list")), !0) : (function(pp) {
        let ip = pp.dom.parentNode;
        if (!ip) return;
        let cp = ip.appendChild(document.createElement("textarea"));
        cp.style.cssText = "position: fixed; left: -10000px; top: 10px", cp.focus(), setTimeout((() => {
          pp.focus(), cp.remove(), jO(pp, cp.value)
        }), 50)
      }(pp), !1)
    };
    let XO = null;
    HO.copy = HO.cut = (pp, ip) => {
      if (!ap(pp.contentDOM, pp.observer.selectionRange)) return !1;
      let {
        text: cp,
        By: Op,
        linewise: op
      } = function(pp) {
        let ip = [],
          cp = [],
          Op = !1;
        for (let op of pp.selection.By) op.empty || (ip.push(pp.sliceDoc(op.from, op.to)), cp.push(op));
        if (!ip.length) {
          let op = -1;
          for (let {
              from: Op
            }
            of pp.selection.By) {
            let Ip = pp.doc.lineAt(Op);
            Ip.number > op && (ip.push(Ip.text), cp.push({
              from: Ip.from,
              to: Math.min(pp.doc.length, Ip.to + 1)
            })), op = Ip.number
          }
          Op = !0
        }
        return {
          text: uO(pp, bi, ip.join(pp.lineBreak)),
          By: cp,
          linewise: Op
        }
      }(pp.state);
      if (!cp && !op) return !1;
      XO = op ? cp : null, "cut" != ip.type || pp.state.readOnly || pp.dispatch({
        changes: Op,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Ip = eO ? null : ip.clipboardData;
      return Ip ? (Ip.clearData(), Ip.setData("text/plain", cp), !0) : (function(pp, ip) {
        let cp = pp.dom.parentNode;
        if (!cp) return;
        let Op = cp.appendChild(document.createElement("textarea"));
        Op.style.cssText = "position: fixed; left: -10000px; top: 10px", Op.value = ip, Op.focus(), Op.selectionEnd = ip.length, Op.selectionStart = 0, setTimeout((() => {
          Op.remove(), pp.focus()
        }), 50)
      }(pp, cp), !1)
    };
    const lO = Op.c.define();

    function QO(pp, ip) {
      let cp = [];
      for (let Op of pp.facet(Ti)) {
        let op = Op(pp, ip);
        op && cp.push(op)
      }
      return cp.length ? pp.update({
        effects: cp,
        annotations: lO.of(!0)
      }) : null
    }

    function JO(pp) {
      setTimeout((() => {
        let ip = pp.hasFocus;
        if (ip != pp.inputState.notifiedFocused) {
          let cp = QO(pp.state, ip);
          cp ? pp.dispatch(cp) : pp.update([])
        }
      }), 10)
    }
    dO.focus = pp => {
      pp.inputState.lastFocusTime = Date.now(), pp.scrollDOM.scrollTop || !pp.inputState.lastScrollTop && !pp.inputState.lastScrollLeft || (pp.scrollDOM.scrollTop = pp.inputState.lastScrollTop, pp.scrollDOM.scrollLeft = pp.inputState.lastScrollLeft), JO(pp)
    }, dO.blur = pp => {
      pp.observer.clearSelectionRange(), JO(pp)
    }, dO.compositionstart = dO.compositionupdate = pp => {
      pp.observer.editContext || (null == pp.inputState.compositionFirstChange && (pp.inputState.compositionFirstChange = !0), pp.inputState.composing < 0 && (pp.inputState.composing = 0))
    }, dO.compositionend = pp => {
      pp.observer.editContext || (pp.inputState.composing = -1, pp.inputState.compositionEndedAt = Date.now(), pp.inputState.compositionPendingKey = !0, pp.inputState.compositionPendingChange = pp.observer.pendingRecords().length > 0, pp.inputState.compositionFirstChange = null, kp.chrome && kp.android ? pp.observer.flushSoon() : pp.inputState.compositionPendingChange ? Promise.resolve().then((() => pp.observer.flush())) : setTimeout((() => {
        pp.inputState.composing < 0 && pp.docView.hasComposition && pp.update([])
      }), 50))
    }, dO.contextmenu = pp => {
      pp.inputState.lastContextMenu = Date.now()
    }, HO.beforeinput = (pp, ip) => {
      var cp, Op;
      if ("insertText" != ip.inputType && "insertCompositionText" != ip.inputType || (pp.inputState.insertingText = ip.data, pp.inputState.insertingTextAt = Date.now()), "insertReplacementText" == ip.inputType && pp.observer.editContext) {
        let Op = null === (cp = ip.dataTransfer) || void 0 === cp ? void 0 : cp.getData("text/plain"),
          op = ip.getTargetRanges();
        if (Op && op.length) {
          let ip = op[0],
            cp = pp.posAtDOM(ip.startContainer, ip.startOffset),
            Ip = pp.posAtDOM(ip.endContainer, ip.endOffset);
          return LO(pp, {
            from: cp,
            to: Ip,
            insert: pp.state.toText(Op)
          }, null), !0
        }
      }
      let op;
      if (kp.chrome && kp.android && (op = yO.find((pp => pp.inputType == ip.inputType))) && (pp.observer.delayAndroidKey(op.key, op.keyCode), "Backspace" == op.key || "Delete" == op.key)) {
        let ip = (null === (Op = window.visualViewport) || void 0 === Op ? void 0 : Op.height) || 0;
        setTimeout((() => {
          var cp;
          ((null === (cp = window.visualViewport) || void 0 === cp ? void 0 : cp.height) || 0) > ip + 10 && pp.hasFocus && (pp.contentDOM.blur(), pp.focus())
        }), 100)
      }
      return kp.ios && "deleteContentForward" == ip.inputType && pp.observer.flushSoon(), kp.safari && "insertText" == ip.inputType && pp.inputState.composing >= 0 && setTimeout((() => dO.compositionend(pp, ip)), 20), !1
    };
    const BO = new Set;
    const NO = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let TO = !1;

    function fO() {
      TO = !1
    }
    class bO {
      constructor(pp) {
        this.lineWrapping = pp, this.doc = Op.F.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(pp, ip) {
        let cp = this.doc.lineAt(ip).number - this.doc.lineAt(pp).number + 1;
        return this.lineWrapping && (cp += Math.max(0, Math.ceil((ip - pp - cp * this.lineLength * .5) / this.lineLength))), this.lineHeight * cp
      }
      heightForLine(pp) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((pp - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(pp) {
        return this.doc = pp, this
      }
      mustRefreshForWrapping(pp) {
        return NO.indexOf(pp) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(pp) {
        let ip = !1;
        for (let cp = 0; cp < pp.length; cp++) {
          let Op = pp[cp];
          Op < 0 ? cp++ : this.heightSamples[Math.floor(10 * Op)] || (ip = !0, this.heightSamples[Math.floor(10 * Op)] = !0)
        }
        return ip
      }
      refresh(pp, ip, cp, Op, op, Ip) {
        let Sp = NO.indexOf(pp) > -1,
          xp = Math.abs(ip - this.lineHeight) > .3 || this.lineWrapping != Sp || Math.abs(cp - this.charWidth) > .1;
        if (this.lineWrapping = Sp, this.lineHeight = ip, this.charWidth = cp, this.textHeight = Op, this.lineLength = op, xp) {
          this.heightSamples = {};
          for (let pp = 0; pp < Ip.length; pp++) {
            let ip = Ip[pp];
            ip < 0 ? pp++ : this.heightSamples[Math.floor(10 * ip)] = !0
          }
        }
        return xp
      }
    }
    class hO {
      constructor(pp, ip) {
        this.from = pp, this.heights = ip, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class aO {
      constructor(pp, ip, cp, Op, op) {
        this.from = pp, this.length = ip, this.top = cp, this.height = Op, this._content = op
      }
      get type() {
        return "number" == typeof this._content ? Xp.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Bp ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(pp) {
        let ip = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(pp._content) ? pp._content : [pp]);
        return new aO(this.from, this.length + pp.length, this.top, this.height + pp.height, ip)
      }
    }
    var nO = function(pp) {
      return pp[pp.ByPos = 0] = "ByPos", pp[pp.ByHeight = 1] = "ByHeight", pp[pp.ByPosNoHeight = 2] = "ByPosNoHeight", pp
    }(nO || (nO = {}));
    const FO = .001;
    class gO {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = pp, this.height = ip, this.flags = cp
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(pp) {
        this.flags = (pp ? 2 : 0) | -3 & this.flags
      }
      setHeight(pp) {
        this.height != pp && (Math.abs(this.height - pp) > FO && (TO = !0), this.height = pp)
      }
      replace(pp, ip, cp) {
        return gO.of(cp)
      }
      decomposeLeft(pp, ip) {
        ip.push(this)
      }
      decomposeRight(pp, ip) {
        ip.push(this)
      }
      applyChanges(pp, ip, cp, Op) {
        let op = this,
          Ip = cp.doc;
        for (let Sp = Op.length - 1; Sp >= 0; Sp--) {
          let {
            fromA: xp,
            toA: Lp,
            fromB: Yp,
            toB: Dp
          } = Op[Sp], Ap = op.lineAt(xp, nO.ByPosNoHeight, cp.setDoc(ip), 0, 0), Pp = Ap.to >= Lp ? Ap : op.lineAt(Lp, nO.ByPosNoHeight, cp, 0, 0);
          for (Dp += Pp.to - Lp, Lp = Pp.to; Sp > 0 && Ap.from <= Op[Sp - 1].toA;) xp = Op[Sp - 1].fromA, Yp = Op[Sp - 1].fromB, Sp--, xp < Ap.from && (Ap = op.lineAt(xp, nO.ByPosNoHeight, cp, 0, 0));
          Yp += Ap.from - xp, xp = Ap.from;
          let Wp = po.build(cp.setDoc(Ip), pp, Yp, Dp);
          op = GO(op, op.replace(xp, Lp, Wp))
        }
        return op.updateHeight(cp, 0)
      }
      static empty() {
        return new zO(0, 0, 0)
      }
      static of (pp) {
        if (1 == pp.length) return pp[0];
        let ip = 0,
          cp = pp.length,
          Op = 0,
          op = 0;
        for (;;)
          if (ip == cp)
            if (Op > 2 * op) {
              let op = pp[ip - 1];
              op.break ? pp.splice(--ip, 1, op.left, null, op.right) : pp.splice(--ip, 1, op.left, op.right), cp += 1 + op.break, Op -= op.size
            } else {
              if (!(op > 2 * Op)) break;
              {
                let ip = pp[cp];
                ip.break ? pp.splice(cp, 1, ip.left, null, ip.right) : pp.splice(cp, 1, ip.left, ip.right), cp += 2 + ip.break, op -= ip.size
              }
            }
        else if (Op < op) {
          let cp = pp[ip++];
          cp && (Op += cp.size)
        } else {
          let ip = pp[--cp];
          ip && (op += ip.size)
        }
        let Ip = 0;
        return null == pp[ip - 1] ? (Ip = 1, ip--) : null == pp[ip] && (Ip = 1, cp++), new KO(gO.of(pp.slice(0, ip)), Ip, gO.of(pp.slice(cp)))
      }
    }

    function GO(pp, ip) {
      return pp == ip ? pp : (pp.constructor != ip.constructor && (TO = !0), ip)
    }
    gO.prototype.size = 1;
    const rO = lp.replace({});
    class ZO extends gO {
      constructor(pp, ip, cp) {
        super(pp, ip), this.deco = cp, this.spaceAbove = 0
      }
      mainBlock(pp, ip) {
        return new aO(ip, this.length, pp + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(pp, ip, cp, Op) {
        return this.spaceAbove && pp < cp + this.spaceAbove ? new aO(Op, 0, cp, this.spaceAbove, rO) : this.mainBlock(cp, Op)
      }
      lineAt(pp, ip, cp, Op, op) {
        let Ip = this.mainBlock(Op, op);
        return this.spaceAbove ? this.blockAt(0, cp, Op, op).join(Ip) : Ip
      }
      forEachLine(pp, ip, cp, Op, op, Ip) {
        pp <= op + this.length && ip >= op && Ip(this.lineAt(0, nO.ByPos, cp, Op, op))
      }
      setMeasuredHeight(pp) {
        let ip = pp.heights[pp.index++];
        ip < 0 ? (this.spaceAbove = -ip, ip = pp.heights[pp.index++]) : this.spaceAbove = 0, this.setHeight(ip)
      }
      updateHeight(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 3 ? arguments[3] : void 0;
        return cp && cp.from <= ip && cp.more && this.setMeasuredHeight(cp), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class zO extends ZO {
      constructor(pp, ip, cp) {
        super(pp, ip, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = cp
      }
      mainBlock(pp, ip) {
        return new aO(ip, this.length, pp + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(pp, ip, cp) {
        let Op = cp[0];
        return 1 == cp.length && (Op instanceof zO || Op instanceof sO && 4 & Op.flags) && Math.abs(this.length - Op.length) < 10 ? (Op instanceof sO ? Op = new zO(Op.length, this.height, this.spaceAbove) : Op.height = this.height, this.outdated || (Op.outdated = !1), Op) : gO.of(cp)
      }
      updateHeight(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 ? arguments[3] : void 0;
        return Op && Op.from <= ip && Op.more ? this.setMeasuredHeight(Op) : (cp || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, pp.heightForLine(this.length - this.collapsed)) + this.breaks * pp.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class sO extends gO {
      constructor(pp) {
        super(pp, 0)
      }
      heightMetrics(pp, ip) {
        let cp, Op = pp.doc.lineAt(ip).number,
          op = pp.doc.lineAt(ip + this.length).number,
          Ip = op - Op + 1,
          Sp = 0;
        if (pp.lineWrapping) {
          let ip = Math.min(this.height, pp.lineHeight * Ip);
          cp = ip / Ip, this.length > Ip + 1 && (Sp = (this.height - ip) / (this.length - Ip - 1))
        } else cp = this.height / Ip;
        return {
          firstLine: Op,
          lastLine: op,
          perLine: cp,
          perChar: Sp
        }
      }
      blockAt(pp, ip, cp, Op) {
        let {
          firstLine: op,
          lastLine: Ip,
          perLine: Sp,
          perChar: xp
        } = this.heightMetrics(ip, Op);
        if (ip.lineWrapping) {
          let op = Op + (pp < ip.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (pp - cp) / this.height)) * this.length)),
            Ip = ip.doc.lineAt(op),
            Lp = Sp + Ip.length * xp,
            Yp = Math.max(cp, pp - Lp / 2);
          return new aO(Ip.from, Ip.length, Yp, Lp, 0)
        } {
          let Op = Math.max(0, Math.min(Ip - op, Math.floor((pp - cp) / Sp))),
            {
              from: xp,
              length: Lp
            } = ip.doc.line(op + Op);
          return new aO(xp, Lp, cp + Sp * Op, Sp, 0)
        }
      }
      lineAt(pp, ip, cp, Op, op) {
        if (ip == nO.ByHeight) return this.blockAt(pp, cp, Op, op);
        if (ip == nO.ByPosNoHeight) {
          let {
            from: ip,
            to: Op
          } = cp.doc.lineAt(pp);
          return new aO(ip, Op - ip, 0, 0, 0)
        }
        let {
          firstLine: Ip,
          perLine: Sp,
          perChar: xp
        } = this.heightMetrics(cp, op), Lp = cp.doc.lineAt(pp), Yp = Sp + Lp.length * xp, Dp = Lp.number - Ip, Ap = Op + Sp * Dp + xp * (Lp.from - op - Dp);
        return new aO(Lp.from, Lp.length, Math.max(Op, Math.min(Ap, Op + this.height - Yp)), Yp, 0)
      }
      forEachLine(pp, ip, cp, Op, op, Ip) {
        pp = Math.max(pp, op), ip = Math.min(ip, op + this.length);
        let {
          firstLine: Sp,
          perLine: xp,
          perChar: Lp
        } = this.heightMetrics(cp, op);
        for (let Yp = pp, Dp = Op; Yp <= ip;) {
          let ip = cp.doc.lineAt(Yp);
          if (Yp == pp) {
            let cp = ip.number - Sp;
            Dp += xp * cp + Lp * (pp - op - cp)
          }
          let Op = xp + Lp * ip.length;
          Ip(new aO(ip.from, ip.length, Dp, Op, 0)), Dp += Op, Yp = ip.to + 1
        }
      }
      replace(pp, ip, cp) {
        let Op = this.length - ip;
        if (Op > 0) {
          let pp = cp[cp.length - 1];
          pp instanceof sO ? cp[cp.length - 1] = new sO(pp.length + Op) : cp.push(null, new sO(Op - 1))
        }
        if (pp > 0) {
          let ip = cp[0];
          ip instanceof sO ? cp[0] = new sO(pp + ip.length) : cp.unshift(new sO(pp - 1), null)
        }
        return gO.of(cp)
      }
      decomposeLeft(pp, ip) {
        ip.push(new sO(pp - 1), null)
      }
      decomposeRight(pp, ip) {
        ip.push(null, new sO(this.length - pp - 1))
      }
      updateHeight(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = ip + this.length;
        if (Op && Op.from <= ip + this.length && Op.more) {
          let cp = [],
            Ip = Math.max(ip, Op.from),
            Sp = -1;
          for (Op.from > ip && cp.push(new sO(Op.from - ip - 1).updateHeight(pp, ip)); Ip <= op && Op.more;) {
            let ip = pp.doc.lineAt(Ip).length;
            cp.length && cp.push(null);
            let op = Op.heights[Op.index++],
              xp = 0;
            op < 0 && (xp = -op, op = Op.heights[Op.index++]), -1 == Sp ? Sp = op : Math.abs(op - Sp) >= FO && (Sp = -2);
            let Lp = new zO(ip, op, xp);
            Lp.outdated = !1, cp.push(Lp), Ip += ip + 1
          }
          Ip <= op && cp.push(null, new sO(op - Ip).updateHeight(pp, Ip));
          let xp = gO.of(cp);
          return (Sp < 0 || Math.abs(xp.height - this.height) >= FO || Math.abs(Sp - this.heightMetrics(pp, ip).perLine) >= FO) && (TO = !0), GO(this, xp)
        }
        return (cp || this.outdated) && (this.setHeight(pp.heightForGap(ip, ip + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class KO extends gO {
      constructor(pp, ip, cp) {
        super(pp.length + ip + cp.length, pp.height + cp.height, ip | (pp.outdated || cp.outdated ? 2 : 0)), this.left = pp, this.right = cp, this.size = pp.size + cp.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(pp, ip, cp, Op) {
        let op = cp + this.left.height;
        return pp < op ? this.left.blockAt(pp, ip, cp, Op) : this.right.blockAt(pp, ip, op, Op + this.left.length + this.break)
      }
      lineAt(pp, ip, cp, Op, op) {
        let Ip = Op + this.left.height,
          Sp = op + this.left.length + this.break,
          xp = ip == nO.ByHeight ? pp < Ip : pp < Sp,
          Lp = xp ? this.left.lineAt(pp, ip, cp, Op, op) : this.right.lineAt(pp, ip, cp, Ip, Sp);
        if (this.break || (xp ? Lp.to < Sp : Lp.from > Sp)) return Lp;
        let Yp = ip == nO.ByPosNoHeight ? nO.ByPosNoHeight : nO.ByPos;
        return xp ? Lp.join(this.right.lineAt(Sp, Yp, cp, Ip, Sp)) : this.left.lineAt(Sp, Yp, cp, Op, op).join(Lp)
      }
      forEachLine(pp, ip, cp, Op, op, Ip) {
        let Sp = Op + this.left.height,
          xp = op + this.left.length + this.break;
        if (this.break) pp < xp && this.left.forEachLine(pp, ip, cp, Op, op, Ip), ip >= xp && this.right.forEachLine(pp, ip, cp, Sp, xp, Ip);
        else {
          let Lp = this.lineAt(xp, nO.ByPos, cp, Op, op);
          pp < Lp.from && this.left.forEachLine(pp, Lp.from - 1, cp, Op, op, Ip), Lp.to >= pp && Lp.from <= ip && Ip(Lp), ip > Lp.to && this.right.forEachLine(Lp.to + 1, ip, cp, Sp, xp, Ip)
        }
      }
      replace(pp, ip, cp) {
        let Op = this.left.length + this.break;
        if (ip < Op) return this.balanced(this.left.replace(pp, ip, cp), this.right);
        if (pp > this.left.length) return this.balanced(this.left, this.right.replace(pp - Op, ip - Op, cp));
        let op = [];
        pp > 0 && this.decomposeLeft(pp, op);
        let Ip = op.length;
        for (let Sp of cp) op.push(Sp);
        if (pp > 0 && VO(op, Ip - 1), ip < this.length) {
          let pp = op.length;
          this.decomposeRight(ip, op), VO(op, pp)
        }
        return gO.of(op)
      }
      decomposeLeft(pp, ip) {
        let cp = this.left.length;
        if (pp <= cp) return this.left.decomposeLeft(pp, ip);
        ip.push(this.left), this.break && (cp++, pp >= cp && ip.push(null)), pp > cp && this.right.decomposeLeft(pp - cp, ip)
      }
      decomposeRight(pp, ip) {
        let cp = this.left.length,
          Op = cp + this.break;
        if (pp >= Op) return this.right.decomposeRight(pp - Op, ip);
        pp < cp && this.left.decomposeRight(pp, ip), this.break && pp < Op && ip.push(null), ip.push(this.right)
      }
      balanced(pp, ip) {
        return pp.size > 2 * ip.size || ip.size > 2 * pp.size ? gO.of(this.break ? [pp, null, ip] : [pp, ip]) : (this.left = GO(this.left, pp), this.right = GO(this.right, ip), this.setHeight(pp.height + ip.height), this.outdated = pp.outdated || ip.outdated, this.size = pp.size + ip.size, this.length = pp.length + this.break+ip.length, this)
      }
      updateHeight(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: op,
            right: Ip
          } = this,
          Sp = ip + op.length + this.break,
          xp = null;
        return Op && Op.from <= ip + op.length && Op.more ? xp = op = op.updateHeight(pp, ip, cp, Op) : op.updateHeight(pp, ip, cp), Op && Op.from <= Sp + Ip.length && Op.more ? xp = Ip = Ip.updateHeight(pp, Sp, cp, Op) : Ip.updateHeight(pp, Sp, cp), xp ? this.balanced(op, Ip) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function VO(pp, ip) {
      let cp, Op;
      null == pp[ip] && (cp = pp[ip - 1]) instanceof sO && (Op = pp[ip + 1]) instanceof sO && pp.splice(ip - 1, 3, new sO(cp.length + 1 + Op.length))
    }
    class po {
      constructor(pp, ip) {
        this.pos = pp, this.oracle = ip, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = pp
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(pp, ip) {
        if (this.lineStart > -1) {
          let pp = Math.min(ip, this.lineEnd),
            cp = this.nodes[this.nodes.length - 1];
          cp instanceof zO ? cp.length += pp - this.pos : (pp > this.pos || !this.isCovered) && this.nodes.push(new zO(pp - this.pos, -1, 0)), this.writtenTo = pp, ip > pp && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = ip
      }
      point(pp, ip, cp) {
        if (pp < ip || cp.heightRelevant) {
          let Op = cp.widget ? cp.widget.estimatedHeight : 0,
            op = cp.widget ? cp.widget.lineBreaks : 0;
          Op < 0 && (Op = this.oracle.lineHeight);
          let Ip = ip - pp;
          cp.block ? this.Hip(new ZO(Ip, Op, cp)) : (Ip || op || Op >= 5) && this.addLineDeco(Op, op, Ip)
        } else ip > pp && this.span(pp, ip);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: pp,
          to: ip
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = pp, this.lineEnd = ip, this.writtenTo < pp && ((this.writtenTo < pp - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, pp - 1)), this.nodes.push(null)), this.pos > pp && this.nodes.push(new zO(this.pos - pp, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(pp, ip) {
        let cp = new sO(ip - pp);
        return this.oracle.doc.lineAt(pp).to == ip && (cp.flags |= 4), cp
      }
      ensureLine() {
        this.enterLine();
        let pp = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (pp instanceof zO) return pp;
        let ip = new zO(0, -1, 0);
        return this.nodes.push(ip), ip
      }
      Hip(pp) {
        this.enterLine();
        let ip = pp.deco;
        ip && ip.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(pp), this.writtenTo = this.pos = this.pos + pp.length, ip && ip.endSide > 0 && (this.covering = pp)
      }
      addLineDeco(pp, ip, cp) {
        let Op = this.ensureLine();
        Op.length += cp, Op.collapsed += cp, Op.widgetHeight = Math.max(Op.widgetHeight, pp), Op.breaks += ip, this.writtenTo = this.pos = this.pos + cp
      }
      finish(pp) {
        let ip = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || ip instanceof zO || this.isCovered ? (this.writtenTo < this.pos || null == ip) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new zO(0, -1, 0));
        let cp = pp;
        for (let Op of this.nodes) Op instanceof zO && Op.updateHeight(this.oracle, cp), cp += Op ? Op.length : 1;
        return this.nodes
      }
      static build(pp, ip, cp, op) {
        let Ip = new po(cp, pp);
        return Op.A.spans(ip, cp, op, Ip, 0), Ip.finish(cp)
      }
    }
    class io {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(pp, ip, cp, Op) {
        (pp < ip || cp && cp.heightRelevant || Op && Op.heightRelevant) && Tp(pp, ip, this.changes, 5)
      }
    }

    function co(pp, ip) {
      let cp = pp.getBoundingClientRect(),
        Op = pp.ownerDocument,
        op = Op.defaultView || window,
        Ip = Math.max(0, cp.left),
        Sp = Math.min(op.innerWidth, cp.right),
        xp = Math.max(0, cp.top),
        Lp = Math.min(op.innerHeight, cp.bottom);
      for (let Yp = pp.parentNode; Yp && Yp != Op.body;)
        if (1 == Yp.nodeType) {
          let ip = Yp,
            cp = window.getComputedStyle(ip);
          if ((ip.scrollHeight > ip.clientHeight || ip.scrollWidth > ip.clientWidth) && "visible" != cp.overflow) {
            let cp = ip.getBoundingClientRect();
            Ip = Math.max(Ip, cp.left), Sp = Math.min(Sp, cp.right), xp = Math.max(xp, cp.top), Lp = Math.min(Yp == pp.parentNode ? op.innerHeight : Lp, cp.bottom)
          }
          Yp = "absolute" == cp.position || "fixed" == cp.position ? ip.offsetParent : ip.parentNode
        } else {
          if (11 != Yp.nodeType) break;
          Yp = Yp.host
        } return {
        left: Ip - cp.left,
        right: Math.max(Ip, Sp) - cp.left,
        top: xp - (cp.top + ip),
        bottom: Math.max(xp, Lp) - (cp.top + ip)
      }
    }

    function Oo(pp, ip) {
      let cp = pp.getBoundingClientRect();
      return {
        left: 0,
        right: cp.right - cp.left,
        top: ip,
        bottom: cp.bottom - (cp.top + ip)
      }
    }
    class oo {
      constructor(pp, ip, cp, Op) {
        this.from = pp, this.to = ip, this.size = cp, this.displaySize = Op
      }
      static same(pp, ip) {
        if (pp.length != ip.length) return !1;
        for (let cp = 0; cp < pp.length; cp++) {
          let Op = pp[cp],
            op = ip[cp];
          if (Op.from != op.from || Op.to != op.to || Op.size != op.size) return !1
        }
        return !0
      }
      draw(pp, ip) {
        return lp.replace({
          widget: new Io(this.displaySize * (ip ? pp.scaleY : pp.scaleX), ip)
        }).range(this.from, this.to)
      }
    }
    class Io extends Ep {
      constructor(pp, ip) {
        super(), this.size = pp, this.vertical = ip
      }
      eq(pp) {
        return pp.size == this.size && pp.vertical == this.vertical
      }
      toDOM() {
        let pp = document.createElement("div");
        return this.vertical ? pp.style.height = this.size + "px" : (pp.style.width = this.size + "px", pp.style.height = "2px", pp.style.display = "inline-block"), pp
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class So {
      constructor(pp, ip) {
        this.view = pp, this.state = ip, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Do, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Ai.LTR, this.Z2 = [], this.mustEnforceCursorAssoc = !1;
        let cp = ip.facet(cc).some((pp => "function" != typeof pp && "cm-lineWrapping" == pp.class));
        this.heightOracle = new bO(cp), this.stateDeco = Ao(ip), this.heightMap = gO.empty().applyChanges(this.stateDeco, Op.F.empty, this.heightOracle.setDoc(ip.doc), [new Pc(0, 0, 0, ip.doc.length)]);
        for (let Op = 0; Op < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Op++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = lp.set(this.lineGaps.map((pp => pp.draw(this, !1)))), this.scrollParent = pp.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let pp = [this.viewport],
          {
            main: ip
          } = this.state.selection;
        for (let cp = 0; cp <= 1; cp++) {
          let Op = cp ? ip.head : ip.anchor;
          if (!pp.some((pp => {
              let {
                from: ip,
                to: cp
              } = pp;
              return Op >= ip && Op <= cp
            }))) {
            let {
              from: ip,
              to: cp
            } = this.lineBlockAt(Op);
            pp.push(new xo(ip, cp))
          }
        }
        return this.viewports = pp.sort(((pp, ip) => pp.from - ip.from)), this.updateScaler()
      }
      updateScaler() {
        let pp = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Do : new Po(this.heightOracle, this.heightMap, this.viewports), pp.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (pp => {
          this.viewportLines.push(Wo(pp, this.scaler))
        }))
      }
      update(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = pp.state;
        let cp = this.stateDeco;
        this.stateDeco = Ao(this.state);
        let op = pp.changedRanges,
          Ip = Pc.extendWithRanges(op, function(pp, ip, cp) {
            let op = new io;
            return Op.A.compare(pp, ip, cp, op, 0), op.changes
          }(cp, this.stateDeco, pp ? pp.changes : Op.ChangeSet.empty(this.state.doc.length))),
          Sp = this.heightMap.height,
          xp = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        fO(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, pp.startState.doc, this.heightOracle.setDoc(this.state.doc), Ip), (this.heightMap.height != Sp || TO) && (pp.flags |= 2), xp ? (this.scrollAnchorPos = pp.changes.mapPos(xp.from, -1), this.scrollAnchorHeight = xp.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Sp);
        let Lp = Ip.length ? this.mapViewport(this.viewport, pp.changes) : this.viewport;
        (ip && (ip.range.head < Lp.from || ip.range.head > Lp.to) || !this.viewportIsAppropriate(Lp)) && (Lp = this.getViewport(0, ip));
        let Yp = Lp.from != this.viewport.from || Lp.to != this.viewport.to;
        this.viewport = Lp, pp.flags |= this.updateForViewport(), (Yp || !pp.changes.empty || 2 & pp.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, pp.changes))), pp.flags |= this.computeVisibleRanges(pp.changes), ip && (this.scrollTarget = ip), !this.mustEnforceCursorAssoc && (pp.selectionSet || pp.focusChanged) && pp.view.lineWrapping && pp.state.selection.main.empty && pp.state.selection.main.assoc && !pp.state.facet(ni) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: pp
        } = this, ip = pp.contentDOM, cp = window.getComputedStyle(ip), op = this.heightOracle, Ip = cp.whiteSpace;
        this.defaultTextDirection = "rtl" == cp.direction ? Ai.RTL : Ai.LTR;
        let Sp = this.heightOracle.mustRefreshForWrapping(Ip) || "refresh" === this.mustMeasureContent,
          xp = ip.getBoundingClientRect(),
          Lp = Sp || this.mustMeasureContent || this.contentDOMHeight != xp.height;
        this.contentDOMHeight = xp.height, this.mustMeasureContent = !1;
        let Yp = 0,
          Dp = 0;
        if (xp.width && xp.height) {
          let {
            scaleX: pp,
            scaleY: cp
          } = Kp(ip, xp);
          (pp > .005 && Math.abs(this.scaleX - pp) > .005 || cp > .005 && Math.abs(this.scaleY - cp) > .005) && (this.scaleX = pp, this.scaleY = cp, Yp |= 16, Sp = Lp = !0)
        }
        let Ap = (parseInt(cp.paddingTop) || 0) * this.scaleY,
          Pp = (parseInt(cp.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Ap && this.paddingBottom == Pp || (this.paddingTop = Ap, this.paddingBottom = Pp, Yp |= 18), this.editorWidth != pp.scrollDOM.clientWidth && (op.lineWrapping && (Lp = !0), this.editorWidth = pp.scrollDOM.clientWidth, Yp |= 16);
        let Wp = Vp(this.view.contentDOM, !1).y;
        Wp != this.scrollParent && (this.scrollParent = Wp, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let yp = this.getScrollOffset();
        this.scrollOffset != yp && (this.scrollAnchorHeight = -1, this.scrollOffset = yp), this.scrolledToBottom = xi(this.scrollParent || pp.win);
        let Up = (this.printing ? Oo : co)(ip, this.paddingTop),
          wp = Up.top - this.pixelViewport.top,
          vp = Up.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Up;
        let tp = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (tp != this.inView && (this.inView = tp, tp && (Lp = !0)), !this.inView && !this.scrollTarget && ! function(pp) {
            let ip = pp.getBoundingClientRect(),
              cp = pp.ownerDocument.defaultView || window;
            return ip.left < cp.innerWidth && ip.right > 0 && ip.top < cp.innerHeight && ip.bottom > 0
          }(pp.dom)) return 0;
        let Hp = xp.width;
        if (this.contentDOMWidth == Hp && this.editorHeight == pp.scrollDOM.clientHeight || (this.contentDOMWidth = xp.width, this.editorHeight = pp.scrollDOM.clientHeight, Yp |= 16), Lp) {
          let ip = pp.docView.measureVisibleLineHeights(this.viewport);
          if (op.mustRefreshForHeights(ip) && (Sp = !0), Sp || op.lineWrapping && Math.abs(Hp - this.contentDOMWidth) > op.charWidth) {
            let {
              lineHeight: cp,
              charWidth: Op,
              textHeight: xp
            } = pp.docView.measureTextSize();
            Sp = cp > 0 && op.refresh(Ip, cp, Op, xp, Math.max(5, Hp / Op), ip), Sp && (pp.docView.minWidth = 0, Yp |= 16)
          }
          wp > 0 && vp > 0 ? Dp = Math.max(wp, vp) : wp < 0 && vp < 0 && (Dp = Math.min(wp, vp)), fO();
          for (let cp of this.viewports) {
            let Ip = cp.from == this.viewport.from ? ip : pp.docView.measureVisibleLineHeights(cp);
            this.heightMap = (Sp ? gO.empty().applyChanges(this.stateDeco, Op.F.empty, this.heightOracle, [new Pc(0, 0, 0, pp.state.doc.length)]) : this.heightMap).updateHeight(op, 0, Sp, new hO(cp.from, Ip))
          }
          TO && (Yp |= 2)
        }
        let dp = !this.viewportIsAppropriate(this.viewport, Dp) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return dp && (2 & Yp && (Yp |= this.updateScaler()), this.viewport = this.getViewport(Dp, this.scrollTarget), Yp |= this.updateForViewport()), (2 & Yp || dp) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Sp ? [] : this.lineGaps, pp)), Yp |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, pp.docView.enforceCursorAssoc()), Yp
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(pp, ip) {
        let cp = .5 - Math.max(-.5, Math.min(.5, pp / 1e3 / 2)),
          Op = this.heightMap,
          op = this.heightOracle,
          {
            visibleTop: Ip,
            visibleBottom: Sp
          } = this,
          xp = new xo(Op.lineAt(Ip - 1e3 * cp, nO.ByHeight, op, 0, 0).from, Op.lineAt(Sp + 1e3 * (1 - cp), nO.ByHeight, op, 0, 0).to);
        if (ip) {
          let {
            head: pp
          } = ip.range;
          if (pp < xp.from || pp > xp.to) {
            let cp, Ip = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Sp = Op.lineAt(pp, nO.ByPos, op, 0, 0);
            cp = "center" == ip.y ? (Sp.top + Sp.bottom) / 2 - Ip / 2 : "start" == ip.y || "nearest" == ip.y && pp < xp.from ? Sp.top : Sp.bottom - Ip, xp = new xo(Op.lineAt(cp - 500, nO.ByHeight, op, 0, 0).from, Op.lineAt(cp + Ip + 500, nO.ByHeight, op, 0, 0).to)
          }
        }
        return xp
      }
      mapViewport(pp, ip) {
        let cp = ip.mapPos(pp.from, -1),
          Op = ip.mapPos(pp.to, 1);
        return new xo(this.heightMap.lineAt(cp, nO.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Op, nO.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(pp) {
        let {
          from: ip,
          to: cp
        } = pp, Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: op
        } = this.heightMap.lineAt(ip, nO.ByPos, this.heightOracle, 0, 0), {
          bottom: Ip
        } = this.heightMap.lineAt(cp, nO.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Sp,
          visibleBottom: xp
        } = this;
        return (0 == ip || op <= Sp - Math.max(10, Math.min(-Op, 250))) && (cp == this.state.doc.length || Ip >= xp + Math.max(10, Math.min(Op, 250))) && op > Sp - 2e3 && Ip < xp + 2e3
      }
      mapLineGaps(pp, ip) {
        if (!pp.length || ip.empty) return pp;
        let cp = [];
        for (let Op of pp) ip.touchesRange(Op.from, Op.to) || cp.push(new oo(ip.mapPos(Op.from), ip.mapPos(Op.to), Op.size, Op.displaySize));
        return cp
      }
      ensureLineGaps(pp, ip) {
        let cp = this.heightOracle.lineWrapping,
          op = cp ? 1e4 : 2e3,
          Ip = op >> 1,
          Sp = op << 1;
        if (this.defaultTextDirection != Ai.LTR && !cp) return [];
        let xp = [],
          Lp = (op, Sp, Yp, Dp) => {
            if (Sp - op < Ip) return;
            let Ap = this.state.selection.main,
              Pp = [Ap.from];
            Ap.empty || Pp.push(Ap.to);
            for (let pp of Pp)
              if (pp > op && pp < Sp) return Lp(op, pp - 10, Yp, Dp), void Lp(pp + 10, Sp, Yp, Dp);
            let Wp = function(pp, ip) {
              for (let cp of pp)
                if (ip(cp)) return cp;
              return
            }(pp, (pp => pp.from >= Yp.from && pp.to <= Yp.to && Math.abs(pp.from - op) < Ip && Math.abs(pp.to - Sp) < Ip && !Pp.some((ip => pp.from < ip && pp.to > ip))));
            if (!Wp) {
              if (Sp < Yp.to && ip && cp && ip.Z2.some((pp => pp.from <= Sp && pp.to >= Sp))) {
                let pp = ip.moveToLineBoundary(Op.l.cursor(Sp), !1, !0).head;
                pp > op && (Sp = pp)
              }
              let pp = this.gapSize(Yp, op, Sp, Dp);
              Wp = new oo(op, Sp, pp, cp || pp < 2e6 ? pp : 2e6)
            }
            xp.push(Wp)
          },
          Yp = ip => {
            if (ip.length < Sp || ip.type != Xp.Text) return;
            let Ip = function(pp, ip, cp) {
              let op = [],
                Ip = pp,
                Sp = 0;
              Op.A.spans(cp, pp, ip, {
                span() {},
                point(pp, ip) {
                  pp > Ip && (op.push({
                    from: Ip,
                    to: pp
                  }), Sp += pp - Ip), Ip = ip
                }
              }, 20), Ip < ip && (op.push({
                from: Ip,
                to: ip
              }), Sp += ip - Ip);
              return {
                total: Sp,
                By: op
              }
            }(ip.from, ip.to, this.stateDeco);
            if (Ip.total < Sp) return;
            let xp, Yp, Dp = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (cp) {
              let pp, cp, Op = op / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Dp) {
                let op = Yo(Ip, Dp),
                  Sp = ((this.visibleBottom - this.visibleTop) / 2 + Op) / ip.height;
                pp = op - Sp, cp = op + Sp
              } else pp = (this.visibleTop - ip.top - Op) / ip.height, cp = (this.visibleBottom - ip.top + Op) / ip.height;
              xp = Lo(Ip, pp), Yp = Lo(Ip, cp)
            } else {
              let cp = Ip.total * this.heightOracle.charWidth,
                Op = op * this.heightOracle.charWidth,
                Sp = 0;
              if (cp > 2e6)
                for (let op of pp) op.from >= ip.from && op.from < ip.to && op.size != op.displaySize && op.from * this.heightOracle.charWidth + Sp < this.pixelViewport.left && (Sp = op.size - op.displaySize);
              let Lp, Ap, Pp = this.pixelViewport.left + Sp,
                Wp = this.pixelViewport.right + Sp;
              if (null != Dp) {
                let pp = Yo(Ip, Dp),
                  ip = ((Wp - Pp) / 2 + Op) / cp;
                Lp = pp - ip, Ap = pp + ip
              } else Lp = (Pp - Op) / cp, Ap = (Wp + Op) / cp;
              xp = Lo(Ip, Lp), Yp = Lo(Ip, Ap)
            }
            xp > ip.from && Lp(ip.from, xp, ip, Ip), Yp < ip.to && Lp(Yp, ip.to, ip, Ip)
          };
        for (let Op of this.viewportLines) Array.isArray(Op.type) ? Op.type.forEach(Yp) : Yp(Op);
        return xp
      }
      gapSize(pp, ip, cp, Op) {
        let op = Yo(Op, cp) - Yo(Op, ip);
        return this.heightOracle.lineWrapping ? pp.height * op : Op.total * this.heightOracle.charWidth * op
      }
      updateLineGaps(pp) {
        oo.same(pp, this.lineGaps) || (this.lineGaps = pp, this.lineGapDeco = lp.set(pp.map((pp => pp.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(pp) {
        let ip = this.stateDeco;
        this.lineGaps.length && (ip = ip.concat(this.lineGapDeco));
        let cp = [];
        Op.A.spans(ip, this.viewport.from, this.viewport.to, {
          span(pp, ip) {
            cp.push({
              from: pp,
              to: ip
            })
          },
          point() {}
        }, 20);
        let op = 0;
        if (cp.length != this.Z2.length) op = 12;
        else
          for (let Op = 0; Op < cp.length && !(8 & op); Op++) {
            let ip = this.Z2[Op],
              Ip = cp[Op];
            ip.from == Ip.from && ip.to == Ip.to || (op |= 4, pp && pp.mapPos(ip.from, -1) == Ip.from && pp.mapPos(ip.to, 1) == Ip.to || (op |= 8))
          }
        return this.Z2 = cp, op
      }
      lineBlockAt(pp) {
        return pp >= this.viewport.from && pp <= this.viewport.to && this.viewportLines.find((ip => ip.from <= pp && ip.to >= pp)) || Wo(this.heightMap.lineAt(pp, nO.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(pp) {
        return pp >= this.viewportLines[0].top && pp <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((ip => ip.top <= pp && ip.bottom >= pp)) || Wo(this.heightMap.lineAt(this.scaler.fromDOM(pp), nO.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(pp) {
        let ip = this.lineBlockAtHeight(pp + 8);
        return ip.from >= this.viewport.from || this.viewportLines[0].top - pp > 200 ? ip : this.viewportLines[0]
      }
      elementAtHeight(pp) {
        return Wo(this.heightMap.blockAt(this.scaler.fromDOM(pp), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class xo {
      constructor(pp, ip) {
        this.from = pp, this.to = ip
      }
    }

    function Lo(pp, ip) {
      let {
        total: cp,
        By: Op
      } = pp;
      if (ip <= 0) return Op[0].from;
      if (ip >= 1) return Op[Op.length - 1].to;
      let op = Math.floor(cp * ip);
      for (let Ip = 0;; Ip++) {
        let {
          from: pp,
          to: ip
        } = Op[Ip], cp = ip - pp;
        if (op <= cp) return pp + op;
        op -= cp
      }
    }

    function Yo(pp, ip) {
      let cp = 0;
      for (let {
          from: Op,
          to: op
        }
        of pp.By) {
        if (ip <= op) {
          cp += ip - Op;
          break
        }
        cp += op - Op
      }
      return cp / pp.total
    }
    const Do = {
      toDOM: pp => pp,
      fromDOM: pp => pp,
      scale: 1,
      eq(pp) {
        return pp == this
      }
    };

    function Ao(pp) {
      let ip = pp.facet(Oc).filter((pp => "function" != typeof pp)),
        cp = pp.facet(Ic).filter((pp => "function" != typeof pp));
      return cp.length && ip.push(Op.A.join(cp)), ip
    }
    class Po {
      constructor(pp, ip, cp) {
        let Op = 0,
          op = 0,
          Ip = 0;
        this.viewports = cp.map((cp => {
          let {
            from: op,
            to: Ip
          } = cp, Sp = ip.lineAt(op, nO.ByPos, pp, 0, 0).top, xp = ip.lineAt(Ip, nO.ByPos, pp, 0, 0).bottom;
          return Op += xp - Sp, {
            from: op,
            to: Ip,
            top: Sp,
            bottom: xp,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Op) / (ip.height - Op);
        for (let Sp of this.viewports) Sp.domTop = Ip + (Sp.top - op) * this.scale, Ip = Sp.domBottom = Sp.domTop + (Sp.bottom - Sp.top), op = Sp.bottom
      }
      toDOM(pp) {
        for (let ip = 0, cp = 0, Op = 0;; ip++) {
          let op = ip < this.viewports.length ? this.viewports[ip] : null;
          if (!op || pp < op.top) return Op + (pp - cp) * this.scale;
          if (pp <= op.bottom) return op.domTop + (pp - op.top);
          cp = op.bottom, Op = op.domBottom
        }
      }
      fromDOM(pp) {
        for (let ip = 0, cp = 0, Op = 0;; ip++) {
          let op = ip < this.viewports.length ? this.viewports[ip] : null;
          if (!op || pp < op.domTop) return cp + (pp - Op) / this.scale;
          if (pp <= op.domBottom) return op.top + (pp - op.domTop);
          cp = op.bottom, Op = op.domBottom
        }
      }
      eq(pp) {
        return pp instanceof Po && (this.scale == pp.scale && this.viewports.length == pp.viewports.length && this.viewports.every(((ip, cp) => ip.from == pp.viewports[cp].from && ip.to == pp.viewports[cp].to)))
      }
    }

    function Wo(pp, ip) {
      if (1 == ip.scale) return pp;
      let cp = ip.toDOM(pp.top),
        Op = ip.toDOM(pp.bottom);
      return new aO(pp.from, pp.length, cp, Op - cp, Array.isArray(pp._content) ? pp._content.map((pp => Wo(pp, ip))) : pp._content)
    }
    const yo = Op.o.define({
        combine: pp => pp.join(" ")
      }),
      Uo = Op.o.define({
        combine: pp => pp.indexOf(!0) > -1
      }),
      wo = op.b.newName(),
      vo = op.b.newName(),
      to = op.b.newName(),
      Ho = {
        "&light": "." + vo,
        "&dark": "." + to
      };

    function eo(pp, ip, cp) {
      return new op.b(ip, {
        finish: ip => /&/.test(ip) ? ip.replace(/&\w*/, (ip => {
          if ("&" == ip) return pp;
          if (!cp || !cp[ip]) throw new RangeError(`Unsupported selector: ${ip}`);
          return cp[ip]
        })) : pp + " " + ip
      })
    }
    const uo = eo("." + wo, {
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
      }, Ho),
      jo = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      ko = kp.ie && kp.ie_version <= 11;
    class mo {
      constructor(pp) {
        this.view = pp, this.active = !1, this.editContext = null, this.selectionRange = new ii, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = pp.contentDOM, this.observer = new MutationObserver((ip => {
          for (let pp of ip) this.queue.push(pp);
          (kp.ie && kp.ie_version <= 11 || kp.ios && pp.composing) && ip.some((pp => "childList" == pp.type && pp.removedNodes.length || "characterData" == pp.type && pp.oldValue.length > pp.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !kp.android || !1 === pp.constructor.EDIT_CONTEXT || kp.chrome && kp.chrome_version < 126 || (this.editContext = new Mo(pp), pp.state.facet(zi) && (pp.contentDOM.editContext = this.editContext.editContext)), ko && (this.onCharData = pp => {
          this.queue.push({
            target: pp.target,
            type: "characterData",
            oldValue: pp.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.mH = this.mH.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var pp;
          (null === (pp = this.view.docView) || void 0 === pp ? void 0 : pp.lastUpdate) < Date.now() - 75 && this.mH()
        })), this.resizeScroll.observe(pp.scrollDOM)), this.addWindowListeners(this.win = pp.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((pp => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), pp.length > 0 && pp[pp.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((pp => {
          pp.length > 0 && pp[pp.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(pp) {
        this.view.inputState.runHandlers("scroll", pp), this.intersecting && this.view.measure()
      }
      onScroll(pp) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(pp)
      }
      mH() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(pp) {
        ("change" != pp.type && pp.type || pp.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(pp) {
        if (this.gapIntersection && (pp.length != this.gaps.length || this.gaps.some(((ip, cp) => ip != pp[cp])))) {
          this.gapIntersection.disconnect();
          for (let ip of pp) this.gapIntersection.observe(ip);
          this.gaps = pp
        }
      }
      onSelectionChange(pp) {
        let ip = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: cp
        } = this, Op = this.selectionRange;
        if (cp.state.facet(zi) ? cp.root.activeElement != this.dom : !ap(this.dom, Op)) return;
        let op = Op.anchorNode && cp.docView.tile.nearest(Op.anchorNode);
        op && op.isWidget() && op.widget.ignoreEvent(pp) ? ip || (this.selectionChanged = !1) : (kp.ie && kp.ie_version <= 11 || kp.android && kp.chrome) && !cp.state.selection.main.empty && Op.focusNode && Fp(Op.focusNode, Op.focusOffset, Op.anchorNode, Op.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: pp
        } = this, ip = bp(pp.root);
        if (!ip) return !1;
        let cp = kp.safari && 11 == pp.root.nodeType && pp.root.activeElement == this.dom && function(pp, ip) {
          if (ip.getComposedRanges) {
            let cp = ip.getComposedRanges(pp.root)[0];
            if (cp) return qo(pp, cp)
          }
          let cp = null;

          function Op(pp) {
            pp.preventDefault(), pp.stopImmediatePropagation(), cp = pp.getTargetRanges()[0]
          }
          return pp.contentDOM.addEventListener("beforeinput", Op, !0), pp.dom.ownerDocument.execCommand("indent"), pp.contentDOM.removeEventListener("beforeinput", Op, !0), cp ? qo(pp, cp) : null
        }(this.view, ip) || ip;
        if (!cp || this.selectionRange.eq(cp)) return !1;
        let Op = ap(this.dom, cp);
        return Op && !this.selectionChanged && pp.inputState.lastFocusTime > Date.now() - 200 && pp.inputState.lastTouchTime < Date.now() - 300 && function(pp, ip) {
          let cp = ip.focusNode,
            Op = ip.focusOffset;
          if (!cp || ip.anchorNode != cp || ip.anchorOffset != Op) return !1;
          for (Op = Math.min(Op, Zp(cp));;)
            if (Op) {
              if (1 != cp.nodeType) return !1;
              let pp = cp.childNodes[Op - 1];
              "false" == pp.contentEditable ? Op-- : (cp = pp, Op = Zp(cp))
            } else {
              if (cp == pp) return !0;
              Op = gp(cp), cp = cp.parentNode
            }
        }(this.dom, cp) ? (this.view.inputState.lastFocusTime = 0, pp.docView.updateSelection(), !1) : (this.selectionRange.setRange(cp), Op && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(pp, ip) {
        this.selectionRange.set(pp.node, pp.offset, ip.node, ip.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let pp = 0,
          ip = null;
        for (let cp = this.dom; cp;)
          if (1 == cp.nodeType) !ip && pp < this.scrollTargets.length && this.scrollTargets[pp] == cp ? pp++ : ip || (ip = this.scrollTargets.slice(0, pp)), ip && ip.push(cp), cp = cp.assignedSlot || cp.parentNode;
          else {
            if (11 != cp.nodeType) break;
            cp = cp.host
          } if (pp < this.scrollTargets.length && !ip && (ip = this.scrollTargets.slice(0, pp)), ip) {
          for (let pp of this.scrollTargets) pp.removeEventListener("scroll", this.onScroll);
          for (let pp of this.scrollTargets = ip) pp.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(pp) {
        if (!this.active) return pp();
        try {
          return this.stop(), pp()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, jo), ko && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), ko && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(pp, ip) {
        var cp;
        if (!this.delayedAndroidKey) {
          let pp = () => {
            let pp = this.delayedAndroidKey;
            if (pp) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = pp.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && pp.force && Si(this.dom, pp.key, pp.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(pp)
        }
        this.delayedAndroidKey && "Enter" != pp || (this.delayedAndroidKey = {
          key: pp,
          keyCode: ip,
          force: this.lastChange < Date.now() - 50 || !!(null === (cp = this.delayedAndroidKey) || void 0 === cp ? void 0 : cp.force)
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
        for (let pp of this.observer.takeRecords()) this.queue.push(pp);
        return this.queue
      }
      processRecords() {
        let pp = this.pendingRecords();
        pp.length && (this.queue = []);
        let ip = -1,
          cp = -1,
          Op = !1;
        for (let op of pp) {
          let pp = this.readMutation(op);
          pp && (pp.typeOver && (Op = !0), -1 == ip ? ({
            from: ip,
            to: cp
          } = pp) : (ip = Math.min(pp.from, ip), cp = Math.max(pp.to, cp)))
        }
        return {
          from: ip,
          to: cp,
          typeOver: Op
        }
      }
      readChange() {
        let {
          from: pp,
          to: ip,
          typeOver: cp
        } = this.processRecords(), Op = this.selectionChanged && ap(this.dom, this.selectionRange);
        if (pp < 0 && !Op) return null;
        pp > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let op = new IO(this.view, pp, ip, cp);
        return this.view.docView.domChanged = {
          newSel: op.newSel ? op.newSel.main : null
        }, op
      }
      flush() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        pp && this.readSelectionRange();
        let ip = this.readChange();
        if (!ip) return this.view.requestMeasure(), !1;
        let cp = this.view.state,
          Op = xO(this.view, ip);
        return this.view.state == cp && (ip.domChanged || ip.newSel && !DO(this.view.state.selection, ip.newSel.main)) && this.view.update([]), Op
      }
      readMutation(pp) {
        let ip = this.view.docView.tile.nearest(pp.target);
        if (!ip || ip.isWidget()) return null;
        if (ip.markDirty("attributes" == pp.type), "childList" == pp.type) {
          let cp = Ro(ip, pp.previousSibling || pp.target.previousSibling, -1),
            Op = Ro(ip, pp.nextSibling || pp.target.nextSibling, 1);
          return {
            from: cp ? ip.posAfter(cp) : ip.posAtStart,
            to: Op ? ip.posBefore(Op) : ip.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == pp.type ? {
          from: ip.posAtStart,
          to: ip.posAtEnd,
          typeOver: pp.target.nodeValue == pp.oldValue
        } : null
      }
      setWindow(pp) {
        pp != this.win && (this.removeWindowListeners(this.win), this.win = pp, this.addWindowListeners(this.win))
      }
      addWindowListeners(pp) {
        pp.addEventListener("resize", this.mH), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : pp.addEventListener("beforeprint", this.onPrint), pp.addEventListener("scroll", this.onScroll), pp.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(pp) {
        pp.removeEventListener("scroll", this.onScroll), pp.removeEventListener("resize", this.mH), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : pp.removeEventListener("beforeprint", this.onPrint), pp.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(pp) {
        this.editContext && (this.editContext.update(pp), pp.startState.facet(zi) != pp.state.facet(zi) && (pp.view.contentDOM.editContext = pp.state.facet(zi) ? this.editContext.editContext : null))
      }
      destroy() {
        var pp, ip, cp;
        this.stop(), null === (pp = this.intersection) || void 0 === pp || pp.disconnect(), null === (ip = this.gapIntersection) || void 0 === ip || ip.disconnect(), null === (cp = this.resizeScroll) || void 0 === cp || cp.disconnect();
        for (let Op of this.scrollTargets) Op.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Ro(pp, ip, cp) {
      for (; ip;) {
        let Op = Uc.get(ip);
        if (Op && Op.parent == pp) return Op;
        let op = ip.parentNode;
        ip = op != pp.dom ? op : cp > 0 ? ip.nextSibling : ip.previousSibling
      }
      return null
    }

    function qo(pp, ip) {
      let cp = ip.startContainer,
        Op = ip.startOffset,
        op = ip.endContainer,
        Ip = ip.endOffset,
        Sp = pp.docView.domAtPos(pp.state.selection.main.anchor, 1);
      return Fp(Sp.node, Sp.offset, op, Ip) && ([cp, Op, op, Ip] = [op, Ip, cp, Op]), {
        anchorNode: cp,
        anchorOffset: Op,
        focusNode: op,
        focusOffset: Ip
      }
    }
    class Mo {
      constructor(pp) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(pp.state);
        let ip = this.editContext = new window.EditContext({
          text: pp.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, pp.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(pp.state.selection.main.head)
        });
        this.handlers.textupdate = cp => {
          let op = pp.state.selection.main,
            {
              anchor: Ip,
              head: Sp
            } = op,
            xp = this.toEditorPos(cp.updateRangeStart),
            Lp = this.toEditorPos(cp.updateRangeEnd);
          pp.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: cp.updateRangeStart,
            editorBase: xp,
            drifted: !1
          });
          let Yp = Lp - xp > cp.text.length;
          xp == this.from && Ip < this.from ? xp = Ip : Lp == this.to && Ip > this.to && (Lp = Ip);
          let Dp = YO(pp.state.sliceDoc(xp, Lp), cp.text, (Yp ? op.from : op.to) - xp, Yp ? "end" : null);
          if (!Dp) {
            let ip = Op.l.single(this.toEditorPos(cp.selectionStart), this.toEditorPos(cp.selectionEnd));
            return void(DO(ip, op) || pp.dispatch({
              selection: ip,
              userEvent: "select"
            }))
          }
          let Ap = {
            from: Dp.from + xp,
            to: Dp.toA + xp,
            insert: Op.F.of(cp.text.slice(Dp.from, Dp.toB).split("\n"))
          };
          if ((kp.mac || kp.android) && Ap.from == Sp - 1 && /^\. ?$/.test(cp.text) && "off" == pp.contentDOM.getAttribute("autocorrect") && (Ap = {
              from: xp,
              to: Lp,
              insert: Op.F.of([cp.text.replace(".", " ")])
            }), this.pendingContextChange = Ap, !pp.state.readOnly) {
            let ip = this.to - this.from + (Ap.to - Ap.from + Ap.insert.length);
            LO(pp, Ap, Op.l.single(this.toEditorPos(cp.selectionStart, ip), this.toEditorPos(cp.selectionEnd, ip)))
          }
          this.pendingContextChange && (this.revertPending(pp.state), this.setSelection(pp.state)), Ap.from < Ap.to && !Ap.insert.length && pp.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(ip.text.slice(Math.max(0, cp.updateRangeStart - 1), Math.min(ip.text.length, cp.updateRangeStart + 1))) && this.handlers.compositionend(cp)
        }, this.handlers.characterboundsupdate = cp => {
          let Op = [],
            op = null;
          for (let ip = this.toEditorPos(cp.rangeStart), Ip = this.toEditorPos(cp.rangeEnd); ip < Ip; ip++) {
            let cp = pp.coordsForChar(ip);
            op = cp && new DOMRect(cp.left, cp.top, cp.right - cp.left, cp.bottom - cp.top) || op || new DOMRect, Op.push(op)
          }
          ip.updateCharacterBounds(cp.rangeStart, Op)
        }, this.handlers.textformatupdate = ip => {
          let cp = [];
          for (let pp of ip.getTextFormats()) {
            let ip = pp.underlineStyle,
              Op = pp.underlineThickness;
            if (!/none/i.test(ip) && !/none/i.test(Op)) {
              let op = this.toEditorPos(pp.rangeStart),
                Ip = this.toEditorPos(pp.rangeEnd);
              if (op < Ip) {
                let pp = `text-decoration: underline ${/^[a-z]/.test(ip)?ip+" ":"Dashed"==ip?"dashed ":"Squiggle"==ip?"wavy ":""}${/thin/i.test(Op)?1:2}px`;
                cp.push(lp.mark({
                  attributes: {
                    style: pp
                  }
                }).range(op, Ip))
              }
            }
          }
          pp.dispatch({
            effects: ri.of(lp.set(cp))
          })
        }, this.handlers.compositionstart = () => {
          pp.inputState.composing < 0 && (pp.inputState.composing = 0, pp.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (pp.inputState.composing = -1, pp.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: ip
            } = this.composing;
            this.composing = null, ip && this.reset(pp.state)
          }
        };
        for (let cp in this.handlers) ip.addEventListener(cp, this.handlers[cp]);
        this.measureReq = {
          read: pp => {
            this.editContext.updateControlBounds(pp.contentDOM.getBoundingClientRect());
            let ip = bp(pp.root);
            ip && ip.rangeCount && this.editContext.updateSelectionBounds(ip.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(pp) {
        let ip = 0,
          cp = !1,
          Op = this.pendingContextChange;
        return pp.changes.iterChanges(((op, Ip, Sp, xp, Lp) => {
          if (cp) return;
          let Yp = Lp.length - (Ip - op);
          if (Op && Ip >= Op.to) {
            if (Op.from == op && Op.to == Ip && Op.insert.eq(Lp)) return Op = this.pendingContextChange = null, ip += Yp, void(this.to += Yp);
            Op = null, this.revertPending(pp.state)
          }
          if (op += ip, (Ip += ip) <= this.from) this.from += Yp, this.to += Yp;
          else if (op < this.to) {
            if (op < this.from || Ip > this.to || this.to - this.from + Lp.length > 3e4) return void(cp = !0);
            this.editContext.updateText(this.toContextPos(op), this.toContextPos(Ip), Lp.toString()), this.to += Yp
          }
          ip += Yp
        })), Op && !cp && this.revertPending(pp.state), !cp
      }
      update(pp) {
        let ip = this.pendingContextChange,
          cp = pp.startState.selection.main;
        this.composing && (this.composing.drifted || !pp.changes.touchesRange(cp.from, cp.to) && pp.transactions.some((pp => !pp.isUserEvent("input.type") && pp.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = pp.changes.mapPos(this.composing.editorBase)) : this.applyEdits(pp) && this.rangeIsValid(pp.state) ? (pp.docChanged || pp.selectionSet || ip) && this.setSelection(pp.state) : (this.pendingContextChange = null, this.reset(pp.state)), (pp.geometryChanged || pp.docChanged || pp.selectionSet) && pp.view.requestMeasure(this.measureReq)
      }
      resetRange(pp) {
        let {
          head: ip
        } = pp.selection.main;
        this.from = Math.max(0, ip - 1e4), this.to = Math.min(pp.doc.length, ip + 1e4)
      }
      reset(pp) {
        this.resetRange(pp), this.editContext.updateText(0, this.editContext.text.length, pp.doc.sliceString(this.from, this.to)), this.setSelection(pp)
      }
      revertPending(pp) {
        let ip = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(ip.from), this.toContextPos(ip.from + ip.insert.length), pp.doc.sliceString(ip.from, ip.to))
      }
      setSelection(pp) {
        let {
          main: ip
        } = pp.selection, cp = this.toContextPos(Math.max(this.from, Math.min(this.to, ip.anchor))), Op = this.toContextPos(ip.head);
        this.editContext.selectionStart == cp && this.editContext.selectionEnd == Op || this.editContext.updateSelection(cp, Op)
      }
      rangeIsValid(pp) {
        let {
          head: ip
        } = pp.selection.main;
        return !(this.from > 0 && ip - this.from < 500 || this.to < pp.doc.length && this.to - ip < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        pp = Math.min(pp, ip);
        let cp = this.composing;
        return cp && cp.drifted ? cp.editorBase + (pp - cp.contextBase) : pp + this.from
      }
      toContextPos(pp) {
        let ip = this.composing;
        return ip && ip.drifted ? ip.contextBase + (pp - ip.editorBase) : pp - this.from
      }
      destroy() {
        for (let pp in this.handlers) this.editContext.removeEventListener(pp, this.handlers[pp])
      }
    }
    class Co {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Z2() {
        return this.viewState.Z2
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
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var ip;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), pp.parent && pp.parent.appendChild(this.dom);
        let {
          dispatch: cp
        } = pp;
        this.dispatchTransactions = pp.dispatchTransactions || cp && (pp => pp.forEach((pp => cp(pp, this)))) || (pp => this.update(pp)), this.dispatch = this.dispatch.bind(this), this._root = pp.root || function(pp) {
          for (; pp;) {
            if (pp && (9 == pp.nodeType || 11 == pp.nodeType && pp.host)) return pp;
            pp = pp.assignedSlot || pp.parentNode
          }
          return null
        }(pp.parent) || document, this.viewState = new So(this, pp.state || Op.n.create(pp)), pp.scrollTo && pp.scrollTo.is(Gi) && (this.viewState.scrollTarget = pp.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ki).map((pp => new pc(pp)));
        for (let Op of this.plugins) Op.update(this);
        this.observer = new mo(this), this.inputState = new AO(this), this.inputState.ensureHandlers(this.plugins), this.docView = new fc(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (ip = document.fonts) || void 0 === ip ? void 0 : ip.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        let op = 1 == ip.length && ip[0] instanceof Op.I ? ip : 1 == ip.length && Array.isArray(ip[0]) ? ip[0] : [this.state.update(...ip)];
        this.dispatchTransactions(op, this)
      }
      update(pp) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let ip, cp = !1,
          op = !1,
          Ip = this.state;
        for (let Op of pp) {
          if (Op.startState != Ip) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Ip = Op.state
        }
        if (this.destroyed) return void(this.viewState.state = Ip);
        let Sp = this.hasFocus,
          xp = 0,
          Lp = null;
        pp.some((pp => pp.annotation(lO))) ? (this.inputState.notifiedFocused = Sp, xp = 1) : Sp != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Sp, Lp = QO(Ip, Sp), Lp || (xp = 1));
        let Yp = this.observer.delayedAndroidKey,
          Dp = null;
        if (Yp ? (this.observer.clearDelayedAndroidKey(), Dp = this.observer.readChange(), (Dp && !this.state.doc.eq(Ip.doc) || !this.state.selection.eq(Ip.selection)) && (Dp = null)) : this.observer.clear(), Ip.facet(Op.n.phrases) != this.state.facet(Op.n.phrases)) return this.setState(Ip);
        ip = Wc.create(this, Ip, pp), ip.flags |= xp;
        let Ap = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let ip of pp) {
            if (Ap && (Ap = Ap.map(ip.changes)), ip.scrollIntoView) {
              let {
                main: pp
              } = ip.state.selection, {
                x: cp,
                y: op
              } = this.state.facet(Co.cursorScrollMargin);
              Ap = new gi(pp.empty ? pp : Op.l.cursor(pp.head, pp.head > pp.anchor ? -1 : 1), "nearest", "nearest", op, cp)
            }
            for (let pp of ip.effects) pp.is(Gi) && (Ap = pp.value.clip(this.state))
          }
          this.viewState.update(ip, Ap), this.bidiCache = Qo.update(this.bidiCache, ip.changes), ip.empty || (this.updatePlugins(ip), this.inputState.update(ip)), cp = this.docView.update(ip), this.state.facet(Ac) != this.styleModules && this.mountStyles(), op = this.updateAttrs(), this.showAnnouncements(pp), this.docView.updateSelection(cp, pp.some((pp => pp.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (ip.startState.facet(yo) != ip.state.facet(yo) && (this.viewState.mustMeasureContent = !0), (cp || op || Ap || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), cp && this.docViewUpdate(), !ip.empty)
          for (let Op of this.state.facet(Bi)) try {
            Op(ip)
          } catch (Pp) {
            Zi(this.state, Pp, "update listener")
          }(Lp || Dp) && Promise.resolve().then((() => {
            Lp && this.state == Lp.startState && this.dispatch(Lp), Dp && !xO(this, Dp) && Yp.force && Si(this.contentDOM, Yp.key, Yp.keyCode)
          }))
      }
      setState(pp) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = pp);
        this.updateState = 2;
        let ip = this.hasFocus;
        try {
          for (let pp of this.plugins) pp.destroy(this);
          this.viewState = new So(this, pp), this.plugins = pp.facet(Ki).map((pp => new pc(pp))), this.pluginMap.clear();
          for (let pp of this.plugins) pp.update(this);
          this.docView.destroy(), this.docView = new fc(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        ip && this.focus(), this.requestMeasure()
      }
      updatePlugins(pp) {
        let ip = pp.startState.facet(Ki),
          cp = pp.state.facet(Ki);
        if (ip != cp) {
          let Op = [];
          for (let op of cp) {
            let cp = ip.indexOf(op);
            if (cp < 0) Op.push(new pc(op));
            else {
              let ip = this.plugins[cp];
              ip.mustUpdate = pp, Op.push(ip)
            }
          }
          for (let ip of this.plugins) ip.mustUpdate != pp && ip.destroy(this);
          this.plugins = Op, this.pluginMap.clear()
        } else
          for (let Op of this.plugins) Op.mustUpdate = pp;
        for (let Op = 0; Op < this.plugins.length; Op++) this.plugins[Op].update(this);
        ip != cp && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let ip of this.plugins) {
          let cp = ip.value;
          if (cp && cp.docViewUpdate) try {
            cp.docViewUpdate(this)
          } catch (pp) {
            Zi(this.state, pp, "doc view update listener")
          }
        }
      }
      measure() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, pp && this.observer.forceFlush();
        let ip = null,
          cp = this.viewState.scrollParent,
          Op = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: op,
            scrollAnchorHeight: Ip
          } = this.viewState;
        Math.abs(Op - this.viewState.scrollOffset) > 1 && (Ip = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let pp = 0;; pp++) {
            if (Ip < 0)
              if (xi(cp || this.win)) op = -1, Ip = this.viewState.heightMap.height;
              else {
                let pp = this.viewState.scrollAnchorAt(Op);
                op = pp.from, Ip = pp.top
              } this.updateState = 1;
            let xp = this.viewState.measure();
            if (!xp && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (pp > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Lp = [];
            4 & xp || ([this.measureRequests, Lp] = [Lp, this.measureRequests]);
            let Yp = Lp.map((pp => {
                try {
                  return pp.read(this)
                } catch (ip) {
                  return Zi(this.state, ip), Xo
                }
              })),
              Dp = Wc.create(this, this.state, []),
              Ap = !1;
            Dp.flags |= xp, ip ? ip.flags |= xp : ip = Dp, this.updateState = 2, Dp.empty || (this.updatePlugins(Dp), this.inputState.update(Dp), this.updateAttrs(), Ap = this.docView.update(Dp), Ap && this.docViewUpdate());
            for (let pp = 0; pp < Lp.length; pp++)
              if (Yp[pp] != Xo) try {
                let ip = Lp[pp];
                ip.write && ip.write(Yp[pp], this)
              } catch (Sp) {
                Zi(this.state, Sp)
              }
            if (Ap && this.docView.updateSelection(!0), !Dp.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Ip = -1;
                  continue
                } {
                  let pp = ((op < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(op).top) - Ip) / this.scaleY;
                  if ((pp > 1 || pp < -1) && (cp == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Op += pp, cp ? cp.scrollTop += pp : this.win.scrollBy(0, pp), Ip = -1;
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
        if (ip && !ip.empty)
          for (let xp of this.state.facet(Bi)) xp(ip)
      }
      get themeClasses() {
        return wo + " " + (this.state.facet(Uo) ? to : vo) + " " + this.state.facet(yo)
      }
      updateAttrs() {
        let pp = Jo(this, ic, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          ip = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(zi) ? "true" : "false",
            class: "cm-content",
            style: `${kp.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (ip["aria-readonly"] = "true"), Jo(this, cc, ip);
        let cp = this.observer.ignore((() => {
          let cp = Mp(this.contentDOM, this.contentAttrs, ip),
            Op = Mp(this.dom, this.editorAttrs, pp);
          return cp || Op
        }));
        return this.editorAttrs = pp, this.contentAttrs = ip, cp
      }
      showAnnouncements(pp) {
        let ip = !0;
        for (let cp of pp)
          for (let pp of cp.effects)
            if (pp.is(Co.announce)) {
              ip && (this.announceDOM.textContent = ""), ip = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = pp.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Ac);
        let pp = this.state.facet(Co.cspNonce);
        op.b.mount(this.root, this.styleModules.concat(uo).reverse(), pp ? {
          nonce: pp
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(pp) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), pp) {
          if (this.measureRequests.indexOf(pp) > -1) return;
          if (null != pp.key)
            for (let ip = 0; ip < this.measureRequests.length; ip++)
              if (this.measureRequests[ip].key === pp.key) return void(this.measureRequests[ip] = pp);
          this.measureRequests.push(pp)
        }
      }
      plugin(pp) {
        let ip = this.pluginMap.get(pp);
        return (void 0 === ip || ip && ip.plugin != pp) && this.pluginMap.set(pp, ip = this.plugins.find((ip => ip.plugin == pp)) || null), ip && ip.update(this).value
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
      elementAtHeight(pp) {
        return this.readMeasured(), this.viewState.elementAtHeight(pp)
      }
      lineBlockAtHeight(pp) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(pp)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(pp) {
        return this.viewState.lineBlockAt(pp)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(pp, ip, cp) {
        return zc(this, pp, Gc(this, pp, ip, cp))
      }
      moveByGroup(pp, ip) {
        return zc(this, pp, Gc(this, pp, ip, (ip => function(pp, ip, cp) {
          let op = pp.state.charCategorizer(ip),
            Ip = op(cp);
          return pp => {
            let ip = op(pp);
            return Ip == Op.i.Space && (Ip = ip), Ip == ip
          }
        }(this, pp.head, ip))))
      }
      visualLineSide(pp, ip) {
        let cp = this.bidiSpans(pp),
          op = this.textDirectionAt(pp.from),
          Ip = cp[ip ? cp.length - 1 : 0];
        return Op.l.cursor(Ip.side(ip, op) + pp.from, Ip.forward(!ip, op) ? 1 : -1)
      }
      moveToLineBoundary(pp, ip) {
        return function(pp, ip, cp, op) {
          let Ip = gc(pp, ip.head, ip.assoc || -1),
            Sp = op && Ip.type == Xp.Text && (pp.lineWrapping || Ip.widgetLineBreaks) ? pp.coordsAtPos(ip.assoc < 0 && ip.head > Ip.from ? ip.head - 1 : ip.head) : null;
          if (Sp) {
            let ip = pp.dom.getBoundingClientRect(),
              op = pp.textDirectionAt(Ip.from),
              xp = pp.posAtCoords({
                x: cp == (op == Ai.LTR) ? ip.right - 1 : ip.left + 1,
                y: (Sp.top + Sp.bottom) / 2
              });
            if (null != xp) return Op.l.cursor(xp, cp ? -1 : 1)
          }
          return Op.l.cursor(cp ? Ip.to : Ip.from, cp ? -1 : 1)
        }(this, pp, ip, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(pp, ip, cp) {
        return zc(this, pp, function(pp, ip, cp, op) {
          let Ip = ip.head,
            Sp = cp ? 1 : -1;
          if (Ip == (cp ? pp.state.doc.length : 0)) return Op.l.cursor(Ip, ip.assoc);
          let xp, Lp = ip.goalColumn,
            Yp = pp.contentDOM.getBoundingClientRect(),
            Dp = pp.coordsAtPos(Ip, ip.assoc || ((ip.empty ? cp : ip.head == ip.from) ? 1 : -1)),
            Ap = pp.documentTop;
          if (Dp) null == Lp && (Lp = Dp.left - Yp.left), xp = Sp < 0 ? Dp.top : Dp.bottom;
          else {
            let ip = pp.viewState.lineBlockAt(Ip);
            null == Lp && (Lp = Math.min(Yp.right - Yp.left, pp.defaultCharacterWidth * (Ip - ip.from))), xp = (Sp < 0 ? ip.top : ip.bottom) + Ap
          }
          let Pp = Yp.left + Lp,
            Wp = pp.viewState.heightOracle.textHeight >> 1,
            yp = null !== op && void 0 !== op ? op : Wp;
          for (let Up = 0;; Up += Wp) {
            let ip = xp + (yp + Up) * Sp,
              op = Kc(pp, {
                x: Pp,
                y: ip
              }, !1, Sp);
            if (cp ? ip > Yp.bottom : ip < Yp.top) return Op.l.cursor(op.pos, op.assoc);
            let Ip = pp.coordsAtPos(op.pos, op.assoc),
              Dp = Ip ? (Ip.top + Ip.bottom) / 2 : 0;
            if (!Ip || (cp ? Dp > xp : Dp < xp)) return Op.l.cursor(op.pos, op.assoc, void 0, Lp)
          }
        }(this, pp, ip, cp))
      }
      domAtPos(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(pp, ip)
      }
      posAtDOM(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(pp, ip)
      }
      posAtCoords(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let cp = Kc(this, pp, ip);
        return cp && cp.pos
      }
      posAndSideAtCoords(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Kc(this, pp, ip)
      }
      coordsAtPos(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let cp = this.docView.coordsAt(pp, ip);
        if (!cp || cp.left == cp.right) return cp;
        let Op = this.state.doc.lineAt(pp),
          op = this.bidiSpans(Op);
        return zp(cp, op[ei.find(op, pp - Op.from, -1, ip)].dir == Ai.LTR == ip > 0)
      }
      coordsForChar(pp) {
        return this.readMeasured(), this.docView.coordsForChar(pp)
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
      textDirectionAt(pp) {
        return !this.state.facet(ai) || pp < this.viewport.from || pp > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(pp))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(pp) {
        if (pp.length > Eo) return qi(pp.length);
        let ip, cp = this.textDirectionAt(pp.from);
        for (let op of this.bidiCache)
          if (op.from == pp.from && op.dir == cp && (op.fresh || ui(op.isolates, ip = Lc(this, pp)))) return op.order;
        ip || (ip = Lc(this, pp));
        let Op = Ri(pp.text, cp, ip);
        return this.bidiCache.push(new Qo(pp.from, pp.to, cp, ip, !0, Op)), Op
      }
      get hasFocus() {
        var pp;
        return (this.dom.ownerDocument.hasFocus() || kp.safari && (null === (pp = this.inputState) || void 0 === pp ? void 0 : pp.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          oi(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(pp) {
        this._root != pp && (this._root = pp, this.observer.setWindow((9 == pp.nodeType ? pp : pp.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let pp of this.plugins) pp.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var cp, op, Ip, Sp;
        return Gi.of(new gi("number" == typeof pp ? Op.l.cursor(pp) : pp, null !== (cp = ip.y) && void 0 !== cp ? cp : "nearest", null !== (op = ip.x) && void 0 !== op ? op : "nearest", null !== (Ip = ip.yMargin) && void 0 !== Ip ? Ip : 5, null !== (Sp = ip.xMargin) && void 0 !== Sp ? Sp : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: pp,
          scrollLeft: ip
        } = this.scrollDOM, cp = this.viewState.scrollAnchorAt(pp);
        return Gi.of(new gi(Op.l.cursor(cp.from), "start", "start", cp.top - pp, ip, !0))
      }
      setTabFocusMode(pp) {
        null == pp ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof pp ? this.inputState.tabFocusMode = pp ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + pp)
      }
      static domEventHandlers(pp) {
        return Vi.define((() => ({})), {
          eventHandlers: pp
        })
      }
      static domEventObservers(pp) {
        return Vi.define((() => ({})), {
          eventObservers: pp
        })
      }
      static theme(pp, ip) {
        let cp = op.b.newName(),
          Op = [yo.of(cp), Ac.of(eo(`.${cp}`, pp))];
        return ip && ip.dark && Op.push(Uo.of(!0)), Op
      }
      static baseTheme(pp) {
        return Op.u.lowest(Ac.of(eo("." + wo, pp, Ho)))
      }
      static findFromDOM(pp) {
        var ip;
        let cp = pp.querySelector(".cm-content"),
          Op = cp && Uc.get(cp) || Uc.get(pp);
        return (null === (ip = null === Op || void 0 === Op ? void 0 : Op.root) || void 0 === ip ? void 0 : ip.view) || null
      }
    }
    Co.styleModule = Ac, Co.inputHandler = Ni, Co.clipboardInputFilter = fi, Co.clipboardOutputFilter = bi, Co.scrollHandler = Fi, Co.focusChangeEffect = Ti, Co.perLineTextDirection = ai, Co.exceptionSink = Ji, Co.updateListener = Bi, Co.editable = zi, Co.mouseSelectionStyle = Qi, Co.dragMovesSelection = li, Co.clickAddsSelectionRange = Xi, Co.uO = Oc, Co.blockWrappers = oc, Co.outerDecorations = Ic, Co.atomicRanges = Sc, Co.bidiIsolatedRanges = xc, Co.cursorScrollMargin = Op.o.define({
      combine: pp => {
        let ip = 5,
          cp = 5;
        for (let Op of pp) "number" == typeof Op ? ip = cp = Op : ({
          x: ip,
          y: cp
        } = Op);
        return {
          x: ip,
          y: cp
        }
      }
    }), Co.scrollMargins = Yc, Co.darkTheme = Uo, Co.cspNonce = Op.o.define({
      combine: pp => pp.length ? pp[0] : ""
    }), Co.contentAttributes = cc, Co.editorAttributes = ic, Co.lineWrapping = Co.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Co.announce = Op.C.define();
    const Eo = 4096,
      Xo = {};
    class Qo {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.from = pp, this.to = ip, this.dir = cp, this.isolates = Op, this.fresh = op, this.order = Ip
      }
      static update(pp, ip) {
        if (ip.empty && !pp.some((pp => pp.fresh))) return pp;
        let cp = [],
          Op = pp.length ? pp[pp.length - 1].dir : Ai.LTR;
        for (let op = Math.max(0, pp.length - 10); op < pp.length; op++) {
          let Ip = pp[op];
          Ip.dir != Op || ip.touchesRange(Ip.from, Ip.to) || cp.push(new Qo(ip.mapPos(Ip.from, 1), ip.mapPos(Ip.to, -1), Ip.dir, Ip.isolates, !1, Ip.order))
        }
        return cp
      }
    }

    function Jo(pp, ip, cp) {
      for (let Op = pp.state.facet(ip), op = Op.length - 1; op >= 0; op--) {
        let ip = Op[op],
          Ip = "function" == typeof ip ? ip(pp) : ip;
        Ip && mp(Ip, cp)
      }
      return cp
    }
    const Bo = kp.mac ? "mac" : kp.windows ? "win" : kp.linux ? "linux" : "key";

    function No(pp, ip, cp) {
      return ip.altKey && (pp = "Alt-" + pp), ip.ctrlKey && (pp = "Ctrl-" + pp), ip.metaKey && (pp = "Meta-" + pp), !1 !== cp && ip.shiftKey && (pp = "Shift-" + pp), pp
    }
    const To = Op.u.default(Co.domEventHandlers({
        keydown: (pp, ip) => Go(ho(ip.state), pp, ip, "editor")
      })),
      fo = Op.o.define({
        enables: To
      }),
      bo = new WeakMap;

    function ho(pp) {
      let ip = pp.facet(fo),
        cp = bo.get(ip);
      return cp || bo.set(ip, cp = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bo,
          cp = Object.create(null),
          Op = Object.create(null),
          op = (pp, ip) => {
            let cp = Op[pp];
            if (null == cp) Op[pp] = ip;
            else if (cp != ip) throw new Error("Key binding " + pp + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Ip = (pp, Op, Ip, Sp, xp) => {
            var Lp, Yp;
            let Dp = cp[pp] || (cp[pp] = Object.create(null)),
              Ap = Op.split(/ (?!$)/).map((pp => function(pp, ip) {
                const cp = pp.split(/-(?!$)/);
                let Op, op, Ip, Sp, xp = cp[cp.length - 1];
                "Space" == xp && (xp = " ");
                for (let Lp = 0; Lp < cp.length - 1; ++Lp) {
                  const pp = cp[Lp];
                  if (/^(cmd|meta|m)$/i.test(pp)) Sp = !0;
                  else if (/^a(lt)?$/i.test(pp)) Op = !0;
                  else if (/^(c|ctrl|control)$/i.test(pp)) op = !0;
                  else if (/^s(hift)?$/i.test(pp)) Ip = !0;
                  else {
                    if (!/^mod$/i.test(pp)) throw new Error("Unrecognized modifier name: " + pp);
                    "mac" == ip ? Sp = !0 : op = !0
                  }
                }
                return Op && (xp = "Alt-" + xp), op && (xp = "Ctrl-" + xp), Sp && (xp = "Meta-" + xp), Ip && (xp = "Shift-" + xp), xp
              }(pp, ip)));
            for (let ip = 1; ip < Ap.length; ip++) {
              let cp = Ap.slice(0, ip).join(" ");
              op(cp, !0), Dp[cp] || (Dp[cp] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [ip => {
                  let Op = no = {
                    view: ip,
                    prefix: cp,
                    scope: pp
                  };
                  return setTimeout((() => {
                    no == Op && (no = null)
                  }), Fo), !0
                }]
              })
            }
            let Pp = Ap.join(" ");
            op(Pp, !1);
            let Wp = Dp[Pp] || (Dp[Pp] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Yp = null === (Lp = Dp._any) || void 0 === Lp ? void 0 : Lp.run) || void 0 === Yp ? void 0 : Yp.slice()) || []
            });
            Ip && Wp.run.push(Ip), Sp && (Wp.preventDefault = !0), xp && (Wp.stopPropagation = !0)
          };
        for (let Sp of pp) {
          let pp = Sp.scope ? Sp.scope.split(" ") : ["editor"];
          if (Sp.any)
            for (let ip of pp) {
              let pp = cp[ip] || (cp[ip] = Object.create(null));
              pp._any || (pp._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Op
              } = Sp;
              for (let ip in pp) pp[ip].run.push((pp => Op(pp, go)))
            }
          let Op = Sp[ip] || Sp.key;
          if (Op)
            for (let ip of pp) Ip(ip, Op, Sp.run, Sp.preventDefault, Sp.stopPropagation), Sp.shift && Ip(ip, "Shift-" + Op, Sp.shift, Sp.preventDefault, Sp.stopPropagation)
        }
        return cp
      }(ip.reduce(((pp, ip) => pp.concat(ip)), []))), cp
    }

    function ao(pp, ip, cp) {
      return Go(ho(pp.state), ip, pp, cp)
    }
    let no = null;
    const Fo = 4e3;
    let go = null;

    function Go(pp, ip, cp, op) {
      go = ip;
      let Yp = function(pp) {
          var ip = !(xp && pp.metaKey && pp.shiftKey && !pp.ctrlKey && !pp.altKey || Lp && pp.shiftKey && pp.key && 1 == pp.key.length || "Unidentified" == pp.key) && pp.key || (pp.shiftKey ? Sp : Ip)[pp.keyCode] || pp.key || "Unidentified";
          return "Esc" == ip && (ip = "Escape"), "Del" == ip && (ip = "Delete"), "Left" == ip && (ip = "ArrowLeft"), "Up" == ip && (ip = "ArrowUp"), "Right" == ip && (ip = "ArrowRight"), "Down" == ip && (ip = "ArrowDown"), ip
        }(ip),
        Dp = (0, Op.J)(Yp, 0),
        Ap = (0, Op.N)(Dp) == Yp.length && " " != Yp,
        Pp = "",
        Wp = !1,
        yp = !1,
        Up = !1;
      no && no.view == cp && no.scope == op && (Pp = no.prefix + " ", wO.indexOf(ip.keyCode) < 0 && (yp = !0, no = null));
      let wp, vp, tp = new Set,
        Hp = pp => {
          if (pp) {
            for (let ip of pp.run)
              if (!tp.has(ip) && (tp.add(ip), ip(cp))) return pp.stopPropagation && (Up = !0), !0;
            pp.preventDefault && (pp.stopPropagation && (Up = !0), yp = !0)
          }
          return !1
        },
        dp = pp[op];
      return dp && (Hp(dp[Pp + No(Yp, ip, !Ap)]) ? Wp = !0 : !Ap || !(ip.altKey || ip.metaKey || ip.ctrlKey) || kp.windows && ip.ctrlKey && ip.altKey || kp.mac && ip.altKey && !ip.ctrlKey && !ip.metaKey || !(wp = Ip[ip.keyCode]) || wp == Yp ? Ap && ip.shiftKey && Hp(dp[Pp + No(Yp, ip, !0)]) && (Wp = !0) : (Hp(dp[Pp + No(wp, ip, !0)]) || ip.shiftKey && (vp = Sp[ip.keyCode]) != Yp && vp != wp && Hp(dp[Pp + No(vp, ip, !1)])) && (Wp = !0), !Wp && Hp(dp._any) && (Wp = !0)), yp && (Wp = !0), Wp && Up && ip.stopPropagation(), go = null, Wp
    }
    class ro {
      constructor(pp, ip, cp, Op, op) {
        this.className = pp, this.left = ip, this.top = cp, this.width = Op, this.height = op
      }
      draw() {
        let pp = document.createElement("div");
        return pp.className = this.className, this.adjust(pp), pp
      }
      update(pp, ip) {
        return ip.className == this.className && (this.adjust(pp), !0)
      }
      adjust(pp) {
        pp.style.left = this.left + "px", pp.style.top = this.top + "px", null != this.width && (pp.style.width = this.width + "px"), pp.style.height = this.height + "px"
      }
      eq(pp) {
        return this.left == pp.left && this.top == pp.top && this.width == pp.width && this.height == pp.height && this.className == pp.className
      }
      static forRange(pp, ip, cp) {
        if (cp.empty) {
          let Op = pp.coordsAtPos(cp.head, cp.assoc || 1);
          if (!Op) return [];
          let op = Zo(pp);
          return [new ro(ip, Op.left - op.left, Op.top - op.top, null, Op.bottom - Op.top)]
        }
        return function(pp, ip, cp) {
          if (cp.to <= pp.viewport.from || cp.from >= pp.viewport.to) return [];
          let Op = Math.max(cp.from, pp.viewport.from),
            op = Math.min(cp.to, pp.viewport.to),
            Ip = pp.textDirection == Ai.LTR,
            Sp = pp.contentDOM,
            xp = Sp.getBoundingClientRect(),
            Lp = Zo(pp),
            Yp = Sp.querySelector(".cm-line"),
            Dp = Yp && window.getComputedStyle(Yp),
            Ap = xp.left + (Dp ? parseInt(Dp.paddingLeft) + Math.min(0, parseInt(Dp.textIndent)) : 0),
            Pp = xp.right - (Dp ? parseInt(Dp.paddingRight) : 0),
            Wp = gc(pp, Op, 1),
            yp = gc(pp, op, -1),
            Up = Wp.type == Xp.Text ? Wp : null,
            wp = yp.type == Xp.Text ? yp : null;
          Up && (pp.lineWrapping || Wp.widgetLineBreaks) && (Up = zo(pp, Op, 1, Up));
          wp && (pp.lineWrapping || yp.widgetLineBreaks) && (wp = zo(pp, op, -1, wp));
          if (Up && wp && Up.from == wp.from && Up.to == wp.to) return tp(Hp(cp.from, cp.to, Up));
          {
            let ip = Up ? Hp(cp.from, null, Up) : dp(Wp, !1),
              Op = wp ? Hp(null, cp.to, wp) : dp(yp, !0),
              op = [];
            return (Up || Wp).to < (wp || yp).from - (Up && wp ? 1 : 0) || Wp.widgetLineBreaks > 1 && ip.bottom + pp.defaultLineHeight / 2 < Op.top ? op.push(vp(Ap, ip.bottom, Pp, Op.top)) : ip.bottom < Op.top && pp.elementAtHeight((ip.bottom + Op.top) / 2).type == Xp.Text && (ip.bottom = Op.top = (ip.bottom + Op.top) / 2), tp(ip).concat(op).concat(tp(Op))
          }

          function vp(pp, cp, Op, op) {
            return new ro(ip, pp - Lp.left, cp - Lp.top, Math.max(0, Op - pp), op - cp)
          }

          function tp(pp) {
            let {
              top: ip,
              bottom: cp,
              horizontal: Op
            } = pp, op = [];
            for (let Ip = 0; Ip < Op.length; Ip += 2) op.push(vp(Op[Ip], ip, Op[Ip + 1], cp));
            return op
          }

          function Hp(ip, cp, Op) {
            let op = 1e9,
              Sp = -1e9,
              xp = [];

            function Lp(ip, cp, Lp, Yp, Dp) {
              let Wp = pp.coordsAtPos(ip, ip == Op.to ? -2 : 2),
                yp = pp.coordsAtPos(Lp, Lp == Op.from ? 2 : -2);
              Wp && yp && (op = Math.min(Wp.top, yp.top, op), Sp = Math.max(Wp.bottom, yp.bottom, Sp), Dp == Ai.LTR ? xp.push(Ip && cp ? Ap : Wp.left, Ip && Yp ? Pp : yp.right) : xp.push(!Ip && Yp ? Ap : yp.left, !Ip && cp ? Pp : Wp.right))
            }
            let Yp = null !== ip && void 0 !== ip ? ip : Op.from,
              Dp = null !== cp && void 0 !== cp ? cp : Op.to;
            for (let Ip of pp.Z2)
              if (Ip.to > Yp && Ip.from < Dp)
                for (let Op = Math.max(Ip.from, Yp), op = Math.min(Ip.to, Dp);;) {
                  let Ip = pp.state.doc.lineAt(Op);
                  for (let Sp of pp.bidiSpans(Ip)) {
                    let pp = Sp.from + Ip.from,
                      xp = Sp.to + Ip.from;
                    if (pp >= op) break;
                    xp > Op && Lp(Math.max(pp, Op), null == ip && pp <= Yp, Math.min(xp, op), null == cp && xp >= Dp, Sp.dir)
                  }
                  if (Op = Ip.to + 1, Op >= op) break
                }
            return 0 == xp.length && Lp(Yp, null == ip, Dp, null == cp, pp.textDirection), {
              top: op,
              bottom: Sp,
              horizontal: xp
            }
          }

          function dp(pp, ip) {
            let cp = xp.top + (ip ? pp.top : pp.bottom);
            return {
              top: cp,
              bottom: cp,
              horizontal: []
            }
          }
        }(pp, ip, cp)
      }
    }

    function Zo(pp) {
      let ip = pp.scrollDOM.getBoundingClientRect();
      return {
        left: (pp.textDirection == Ai.LTR ? ip.left : ip.right - pp.scrollDOM.clientWidth * pp.scaleX) - pp.scrollDOM.scrollLeft * pp.scaleX,
        top: ip.top - pp.scrollDOM.scrollTop * pp.scaleY
      }
    }

    function zo(pp, ip, cp, Op) {
      let op = pp.coordsAtPos(ip, 2 * cp);
      if (!op) return Op;
      let Ip = pp.dom.getBoundingClientRect(),
        Sp = (op.top + op.bottom) / 2,
        xp = pp.posAtCoords({
          x: Ip.left + 1,
          y: Sp
        }),
        Lp = pp.posAtCoords({
          x: Ip.right - 1,
          y: Sp
        });
      return null == xp || null == Lp ? Op : {
        from: Math.max(Op.from, Math.min(xp, Lp)),
        to: Math.min(Op.to, Math.max(xp, Lp))
      }
    }
    class so {
      constructor(pp, ip) {
        this.view = pp, this.layer = ip, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = pp.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), ip.above && this.dom.classList.add("cm-layer-above"), ip.class && this.dom.classList.add(ip.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(pp.state), pp.requestMeasure(this.measureReq), ip.mount && ip.mount(this.dom, pp)
      }
      update(pp) {
        pp.startState.facet(Ko) != pp.state.facet(Ko) && this.setOrder(pp.state), (this.layer.update(pp, this.dom) || pp.geometryChanged) && (this.scale(), pp.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(pp) {
        !1 !== this.layer.updateOnDocViewUpdate && pp.requestMeasure(this.measureReq)
      }
      setOrder(pp) {
        let ip = 0,
          cp = pp.facet(Ko);
        for (; ip < cp.length && cp[ip] != this.layer;) ip++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - ip)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: pp,
          scaleY: ip
        } = this.view;
        pp == this.scaleX && ip == this.scaleY || (this.scaleX = pp, this.scaleY = ip, this.dom.style.transform = `scale(${1/pp}, ${1/ip})`)
      }
      draw(pp) {
        if (pp.length != this.drawn.length || pp.some(((pp, ip) => {
            return cp = pp, Op = this.drawn[ip], !(cp.constructor == Op.constructor && cp.eq(Op));
            var cp, Op
          }))) {
          let ip = this.dom.firstChild,
            cp = 0;
          for (let Op of pp) Op.update && ip && Op.constructor && this.drawn[cp].constructor && Op.update(ip, this.drawn[cp]) ? (ip = ip.nextSibling, cp++) : this.dom.insertBefore(Op.draw(), ip);
          for (; ip;) {
            let pp = ip.nextSibling;
            ip.remove(), ip = pp
          }
          this.drawn = pp, kp.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Ko = Op.o.define();

    function Vo(pp) {
      return [Vi.define((ip => new so(ip, pp))), Ko.of(pp)]
    }
    const pI = Op.o.define({
      combine: pp => (0, Op.P)(pp, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (pp, ip) => Math.min(pp, ip),
        drawRangeCursor: (pp, ip) => pp || ip
      })
    });

    function iI() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [pI.of(pp), OI, II, SI, ni.of(!0)]
    }

    function cI(pp) {
      return pp.startState.facet(pI) != pp.state.facet(pI)
    }
    const OI = Vo({
      above: !0,
      markers(pp) {
        let {
          state: ip
        } = pp, cp = ip.facet(pI), op = [];
        for (let Ip of ip.selection.By) {
          let Sp = Ip == ip.selection.main;
          if (Ip.empty || cp.drawRangeCursor && !(Sp && kp.ios && cp.iosSelectionHandles)) {
            let ip = Sp ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              cp = Ip.empty ? Ip : Op.l.cursor(Ip.head, Ip.assoc);
            for (let Op of ro.forRange(pp, ip, cp)) op.push(Op)
          }
        }
        return op
      },
      update(pp, ip) {
        pp.transactions.some((pp => pp.selection)) && (ip.style.animationName = "cm-blink" == ip.style.animationName ? "cm-blink2" : "cm-blink");
        let cp = cI(pp);
        return cp && oI(pp.state, ip), pp.docChanged || pp.selectionSet || cp
      },
      mount(pp, ip) {
        oI(ip.state, pp)
      },
      class: "cm-cursorLayer"
    });

    function oI(pp, ip) {
      ip.style.animationDuration = pp.facet(pI).cursorBlinkRate + "ms"
    }
    const II = Vo({
        above: !1,
        markers(pp) {
          let ip = [],
            {
              main: cp,
              By: op
            } = pp.state.selection;
          for (let Op of op)
            if (!Op.empty)
              for (let cp of ro.forRange(pp, "cm-selectionBackground", Op)) ip.push(cp);
          if (kp.ios && !cp.empty && pp.state.facet(pI).iosSelectionHandles) {
            for (let op of ro.forRange(pp, "cm-selectionHandle cm-selectionHandle-start", Op.l.cursor(cp.from, 1))) ip.push(op);
            for (let op of ro.forRange(pp, "cm-selectionHandle cm-selectionHandle-end", Op.l.cursor(cp.to, 1))) ip.push(op)
          }
          return ip
        },
        update: (pp, ip) => pp.docChanged || pp.selectionSet || pp.viewportChanged || cI(pp),
        class: "cm-selectionLayer"
      }),
      SI = Op.u.highest(Co.theme({
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
      xI = Op.C.define({
        map: (pp, ip) => null == pp ? null : ip.mapPos(pp)
      }),
      LI = Op.E.define({
        create: () => null,
        update: (pp, ip) => (null != pp && (pp = ip.changes.mapPos(pp)), ip.effects.reduce(((pp, ip) => ip.is(xI) ? ip.value : pp), pp))
      }),
      YI = Vi.fromClass(class {
        constructor(pp) {
          this.view = pp, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(pp) {
          var ip;
          let cp = pp.state.field(LI);
          null == cp ? null != this.cursor && (null === (ip = this.cursor) || void 0 === ip || ip.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (pp.startState.field(LI) != cp || pp.docChanged || pp.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: pp
          } = this, ip = pp.state.field(LI), cp = null != ip && pp.coordsAtPos(ip);
          if (!cp) return null;
          let Op = pp.scrollDOM.getBoundingClientRect();
          return {
            left: cp.left - Op.left + pp.scrollDOM.scrollLeft * pp.scaleX,
            top: cp.top - Op.top + pp.scrollDOM.scrollTop * pp.scaleY,
            height: cp.bottom - cp.top
          }
        }
        drawCursor(pp) {
          if (this.cursor) {
            let {
              scaleX: ip,
              scaleY: cp
            } = this.view;
            pp ? (this.cursor.style.left = pp.left / ip + "px", this.cursor.style.top = pp.top / cp + "px", this.cursor.style.height = pp.height / cp + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(pp) {
          this.view.state.field(LI) != pp && this.view.dispatch({
            effects: xI.of(pp)
          })
        }
      }, {
        eventObservers: {
          dragover(pp) {
            this.setDropPos(this.view.posAtCoords({
              x: pp.clientX,
              y: pp.clientY
            }))
          },
          dragleave(pp) {
            pp.target != this.view.contentDOM && this.view.contentDOM.contains(pp.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function DI() {
      return [LI, YI]
    }

    function AI(pp, ip, cp, Op, op) {
      ip.lastIndex = 0;
      for (let Ip, Sp = pp.iterRange(cp, Op), xp = cp; !Sp.next().done; xp += Sp.value.length)
        if (!Sp.lineBreak)
          for (; Ip = ip.exec(Sp.value);) op(xp + Ip.index, Ip)
    }
    class PI {
      constructor(pp) {
        const {
          regexp: ip,
          decoration: cp,
          decorate: Op,
          boundary: op,
          maxLength: Ip = 1e3
        } = pp;
        if (!ip.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = ip, Op) this.addMatch = (pp, ip, cp, op) => Op(op, cp, cp + pp[0].length, pp, ip);
        else if ("function" == typeof cp) this.addMatch = (pp, ip, Op, op) => {
          let Ip = cp(pp, ip, Op);
          Ip && op(Op, Op + pp[0].length, Ip)
        };
        else {
          if (!cp) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (pp, ip, Op, op) => op(Op, Op + pp[0].length, cp)
        }
        this.boundary = op, this.maxLength = Ip
      }
      createDeco(pp) {
        let ip = new Op.w,
          cp = ip.add.bind(ip);
        for (let {
            from: Op,
            to: op
          }
          of
          function(pp, ip) {
            let cp = pp.Z2;
            if (1 == cp.length && cp[0].from == pp.viewport.from && cp[0].to == pp.viewport.to) return cp;
            let Op = [];
            for (let {
                from: op,
                to: Ip
              }
              of cp) op = Math.max(pp.state.doc.lineAt(op).from, op - ip), Ip = Math.min(pp.state.doc.lineAt(Ip).to, Ip + ip), Op.length && Op[Op.length - 1].to >= op ? Op[Op.length - 1].to = Ip : Op.push({
              from: op,
              to: Ip
            });
            return Op
          }(pp, this.maxLength)) AI(pp.state.doc, this.regexp, Op, op, ((ip, Op) => this.addMatch(Op, pp, ip, cp)));
        return ip.finish()
      }
      updateDeco(pp, ip) {
        let cp = 1e9,
          Op = -1;
        return pp.docChanged && pp.changes.iterChanges(((ip, op, Ip, Sp) => {
          Sp >= pp.view.viewport.from && Ip <= pp.view.viewport.to && (cp = Math.min(Ip, cp), Op = Math.max(Sp, Op))
        })), pp.viewportMoved || Op - cp > 1e3 ? this.createDeco(pp.view) : Op > -1 ? this.updateRange(pp.view, ip.map(pp.changes), cp, Op) : ip
      }
      updateRange(pp, ip, cp, Op) {
        for (let op of pp.Z2) {
          let Ip = Math.max(op.from, cp),
            Sp = Math.min(op.to, Op);
          if (Sp >= Ip) {
            let cp = pp.state.doc.lineAt(Ip),
              Op = cp.to < Sp ? pp.state.doc.lineAt(Sp) : cp,
              xp = Math.max(op.from, cp.from),
              Lp = Math.min(op.to, Op.to);
            if (this.boundary) {
              for (; Ip > cp.from; Ip--)
                if (this.boundary.test(cp.text[Ip - 1 - cp.from])) {
                  xp = Ip;
                  break
                } for (; Sp < Op.to; Sp++)
                if (this.boundary.test(Op.text[Sp - Op.from])) {
                  Lp = Sp;
                  break
                }
            }
            let Yp, Dp = [],
              Ap = (pp, ip, cp) => Dp.push(cp.range(pp, ip));
            if (cp == Op)
              for (this.regexp.lastIndex = xp - cp.from;
                (Yp = this.regexp.exec(cp.text)) && Yp.index < Lp - cp.from;) this.addMatch(Yp, pp, Yp.index + cp.from, Ap);
            else AI(pp.state.doc, this.regexp, xp, Lp, ((ip, cp) => this.addMatch(cp, pp, ip, Ap)));
            ip = ip.update({
              filterFrom: xp,
              filterTo: Lp,
              filter: (pp, ip) => pp < xp || ip > Lp,
              add: Dp
            })
          }
        }
        return ip
      }
    }
    const WI = null != /x/.unicode ? "gu" : "g",
      yI = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", WI),
      UI = {
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
    let wI = null;
    const vI = Op.o.define({
      combine(pp) {
        let ip = (0, Op.P)(pp, {
          render: null,
          specialChars: yI,
          addSpecialChars: null
        });
        return (ip.replaceTabs = ! function() {
          var pp;
          if (null == wI && "undefined" != typeof document && document.body) {
            let ip = document.body.style;
            wI = null != (null !== (pp = ip.tabSize) && void 0 !== pp ? pp : ip.MozTabSize)
          }
          return wI || !1
        }()) && (ip.specialChars = new RegExp("\t|" + ip.specialChars.source, WI)), ip.addSpecialChars && (ip.specialChars = new RegExp(ip.specialChars.source + "|" + ip.addSpecialChars.source, WI)), ip
      }
    });

    function tI() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vI.of(pp), HI || (HI = Vi.fromClass(class {
        constructor(pp) {
          this.view = pp, this.uO = lp.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(pp.state.facet(vI)), this.uO = this.decorator.createDeco(pp)
        }
        makeDecorator(pp) {
          return new PI({
            regexp: pp.specialChars,
            decoration: (ip, cp, op) => {
              let {
                doc: Ip
              } = cp.state, Sp = (0, Op.J)(ip[0], 0);
              if (9 == Sp) {
                let pp = Ip.lineAt(op),
                  ip = cp.state.tabSize,
                  Sp = (0, Op.Q)(pp.text, ip, op - pp.from);
                return lp.replace({
                  widget: new eI((ip - Sp % ip) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Sp] || (this.decorationCache[Sp] = lp.replace({
                widget: new dI(pp, Sp)
              }))
            },
            boundary: pp.replaceTabs ? void 0 : /[^]/
          })
        }
        update(pp) {
          let ip = pp.state.facet(vI);
          pp.startState.facet(vI) != ip ? (this.decorator = this.makeDecorator(ip), this.uO = this.decorator.createDeco(pp.view)) : this.uO = this.decorator.updateDeco(pp, this.uO)
        }
      }, {
        uO: pp => pp.uO
      }))]
    }
    let HI = null;
    class dI extends Ep {
      constructor(pp, ip) {
        super(), this.options = pp, this.code = ip
      }
      eq(pp) {
        return pp.code == this.code
      }
      toDOM(pp) {
        let ip = function(pp) {
            return pp >= 32 ? "\u2022" : 10 == pp ? "\u2424" : String.fromCharCode(9216 + pp)
          }(this.code),
          cp = pp.state.phrase("Control character") + " " + (UI[this.code] || "0x" + this.code.toString(16)),
          Op = this.options.render && this.options.render(this.code, cp, ip);
        if (Op) return Op;
        let op = document.createElement("span");
        return op.textContent = ip, op.title = cp, op.setAttribute("aria-label", cp), op.className = "cm-specialChar", op
      }
      ignoreEvent() {
        return !1
      }
    }
    class eI extends Ep {
      constructor(pp) {
        super(), this.width = pp
      }
      eq(pp) {
        return pp.width == this.width
      }
      toDOM() {
        let pp = document.createElement("span");
        return pp.textContent = "\t", pp.className = "cm-tab", pp.style.width = this.width + "px", pp
      }
      ignoreEvent() {
        return !1
      }
    }

    function uI() {
      return kI
    }
    const jI = lp.line({
        class: "cm-activeLine"
      }),
      kI = Vi.fromClass(class {
        constructor(pp) {
          this.uO = this.getDeco(pp)
        }
        update(pp) {
          (pp.docChanged || pp.selectionSet) && (this.uO = this.getDeco(pp.view))
        }
        getDeco(pp) {
          let ip = -1,
            cp = [];
          for (let Op of pp.state.selection.By) {
            let op = pp.lineBlockAt(Op.head);
            op.from > ip && (cp.push(jI.range(op.from)), ip = op.from)
          }
          return lp.set(cp)
        }
      }, {
        uO: pp => pp.uO
      });
    class mI extends Ep {
      constructor(pp) {
        super(), this.content = pp
      }
      toDOM(pp) {
        let ip = document.createElement("span");
        return ip.className = "cm-placeholder", ip.style.pointerEvents = "none", ip.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(pp) : this.content.cloneNode(!0)), ip.setAttribute("aria-hidden", "true"), ip
      }
      coordsAt(pp) {
        let ip = pp.firstChild ? np(pp.firstChild) : [];
        if (!ip.length) return null;
        let cp = window.getComputedStyle(pp.parentNode),
          Op = zp(ip[0], "rtl" != cp.direction),
          op = parseInt(cp.lineHeight);
        return Op.bottom - Op.top > 1.5 * op ? {
          left: Op.left,
          right: Op.right,
          top: Op.top,
          bottom: Op.top + op
        } : Op
      }
      ignoreEvent() {
        return !1
      }
    }

    function RI(pp) {
      let ip = Vi.fromClass(class {
        constructor(ip) {
          this.view = ip, this.placeholder = pp ? lp.set([lp.widget({
            widget: new mI(pp),
            side: 1
          }).range(0)]) : lp.none
        }
        get uO() {
          return this.view.state.doc.length ? lp.none : this.placeholder
        }
      }, {
        uO: pp => pp.uO
      });
      return "string" == typeof pp ? [ip, Co.contentAttributes.of({
        "aria-placeholder": pp
      })] : ip
    }
    const qI = 2e3;

    function MI(pp, ip) {
      let cp = pp.posAtCoords({
          x: ip.clientX,
          y: ip.clientY
        }, !1),
        op = pp.state.doc.lineAt(cp),
        Ip = cp - op.from,
        Sp = Ip > qI ? -1 : Ip == op.length ? function(pp, ip) {
          let cp = pp.coordsAtPos(pp.viewport.from);
          return cp ? Math.round(Math.abs((cp.left - ip) / pp.defaultCharacterWidth)) : -1
        }(pp, ip.clientX) : (0, Op.Q)(op.text, pp.state.tabSize, cp - op.from);
      return {
        line: op.number,
        col: Sp,
        off: Ip
      }
    }

    function CI(pp, ip) {
      let cp = MI(pp, ip),
        op = pp.state.selection;
      return cp ? {
        update(pp) {
          if (pp.docChanged) {
            let ip = pp.changes.mapPos(pp.startState.doc.line(cp.line).from),
              Op = pp.state.doc.lineAt(ip);
            cp = {
              line: Op.number,
              col: cp.col,
              off: Math.min(cp.off, Op.length)
            }, op = op.map(pp.changes)
          }
        },
        get(ip, Ip, Sp) {
          let xp = MI(pp, ip);
          if (!xp) return op;
          let Lp = function(pp, ip, cp) {
            let op = Math.min(ip.line, cp.line),
              Ip = Math.max(ip.line, cp.line),
              Sp = [];
            if (ip.off > qI || cp.off > qI || ip.col < 0 || cp.col < 0) {
              let xp = Math.min(ip.off, cp.off),
                Lp = Math.max(ip.off, cp.off);
              for (let ip = op; ip <= Ip; ip++) {
                let cp = pp.doc.line(ip);
                cp.length <= Lp && Sp.push(Op.l.range(cp.from + xp, cp.to + Lp))
              }
            } else {
              let xp = Math.min(ip.col, cp.col),
                Lp = Math.max(ip.col, cp.col);
              for (let ip = op; ip <= Ip; ip++) {
                let cp = pp.doc.line(ip),
                  op = (0, Op.T)(cp.text, xp, pp.tabSize, !0);
                if (op < 0) Sp.push(Op.l.cursor(cp.to));
                else {
                  let ip = (0, Op.T)(cp.text, Lp, pp.tabSize);
                  Sp.push(Op.l.range(cp.from + op, cp.from + ip))
                }
              }
            }
            return Sp
          }(pp.state, cp, xp);
          return Lp.length ? Sp ? Op.l.create(Lp.concat(op.By)) : Op.l.create(Lp) : op
        }
      } : null
    }

    function EI(pp) {
      let ip = (null === pp || void 0 === pp ? void 0 : pp.eventFilter) || (pp => pp.altKey && 0 == pp.button);
      return Co.mouseSelectionStyle.of(((pp, cp) => ip(cp) ? CI(pp, cp) : null))
    }
    const XI = {
        Alt: [18, pp => !!pp.altKey],
        Control: [17, pp => !!pp.ctrlKey],
        Shift: [16, pp => !!pp.shiftKey],
        Meta: [91, pp => !!pp.metaKey]
      },
      lI = {
        style: "cursor: crosshair"
      };

    function QI() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [ip, cp] = XI[pp.key || "Alt"],
        Op = Vi.fromClass(class {
          constructor(pp) {
            this.view = pp, this.isDown = !1
          }
          set(pp) {
            this.isDown != pp && (this.isDown = pp, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(pp) {
              this.set(pp.keyCode == ip || cp(pp))
            },
            keyup(pp) {
              pp.keyCode != ip && cp(pp) || this.set(!1)
            },
            mousemove(pp) {
              this.set(cp(pp))
            }
          }
        });
      return [Op, Co.contentAttributes.of((pp => {
        var ip;
        return (null === (ip = pp.plugin(Op)) || void 0 === ip ? void 0 : ip.isDown) ? lI : null
      }))]
    }
    const JI = "-10000px";
    class BI {
      constructor(pp, ip, cp, Op) {
        this.facet = ip, this.createTooltipView = cp, this.removeTooltipView = Op, this.input = pp.state.facet(ip), this.tooltips = this.input.filter((pp => pp));
        let op = null;
        this.tooltipViews = this.tooltips.map((pp => op = cp(pp, op)))
      }
      update(pp, ip) {
        var cp;
        let Op = pp.state.facet(this.facet),
          op = Op.filter((pp => pp));
        if (Op === this.input) {
          for (let ip of this.tooltipViews) ip.update && ip.update(pp);
          return !1
        }
        let Ip = [],
          Sp = ip ? [] : null;
        for (let xp = 0; xp < op.length; xp++) {
          let cp = op[xp],
            Op = -1;
          if (cp) {
            for (let pp = 0; pp < this.tooltips.length; pp++) {
              let ip = this.tooltips[pp];
              ip && ip.create == cp.create && (Op = pp)
            }
            if (Op < 0) Ip[xp] = this.createTooltipView(cp, xp ? Ip[xp - 1] : null), Sp && (Sp[xp] = !!cp.above);
            else {
              let cp = Ip[xp] = this.tooltipViews[Op];
              Sp && (Sp[xp] = ip[Op]), cp.update && cp.update(pp)
            }
          }
        }
        for (let xp of this.tooltipViews) Ip.indexOf(xp) < 0 && (this.removeTooltipView(xp), null === (cp = xp.destroy) || void 0 === cp || cp.call(xp));
        return ip && (Sp.forEach(((pp, cp) => ip[cp] = pp)), ip.length = Sp.length), this.input = Op, this.tooltips = op, this.tooltipViews = Ip, !0
      }
    }

    function NI(pp) {
      let ip = pp.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: ip.clientHeight,
        right: ip.clientWidth
      }
    }
    const TI = Op.o.define({
        combine: pp => {
          var ip, cp, Op;
          return {
            position: kp.ios ? "absolute" : (null === (ip = pp.find((pp => pp.position))) || void 0 === ip ? void 0 : ip.position) || "fixed",
            parent: (null === (cp = pp.find((pp => pp.parent))) || void 0 === cp ? void 0 : cp.parent) || null,
            tooltipSpace: (null === (Op = pp.find((pp => pp.tooltipSpace))) || void 0 === Op ? void 0 : Op.tooltipSpace) || NI
          }
        }
      }),
      fI = new WeakMap,
      bI = Vi.fromClass(class {
        constructor(pp) {
          this.view = pp, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let ip = pp.state.facet(TI);
          this.position = ip.position, this.parent = ip.parent, this.classes = pp.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new BI(pp, FI, ((pp, ip) => this.createTooltip(pp, ip)), (pp => {
            this.resizeObserver && this.resizeObserver.unobserve(pp.dom), pp.dom.remove()
          })), this.above = this.manager.tooltips.map((pp => !!pp.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((pp => {
            Date.now() > this.lastTransaction - 50 && pp.length > 0 && pp[pp.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), pp.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let pp of this.manager.tooltipViews) this.intersectionObserver.observe(pp.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(pp) {
          pp.transactions.length && (this.lastTransaction = Date.now());
          let ip = this.manager.update(pp, this.above);
          ip && this.observeIntersection();
          let cp = ip || pp.geometryChanged,
            Op = pp.state.facet(TI);
          if (Op.position != this.position && !this.madeAbsolute) {
            this.position = Op.position;
            for (let pp of this.manager.tooltipViews) pp.dom.style.position = this.position;
            cp = !0
          }
          if (Op.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Op.parent, this.createContainer();
            for (let pp of this.manager.tooltipViews) this.container.appendChild(pp.dom);
            cp = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          cp && this.maybeMeasure()
        }
        createTooltip(pp, ip) {
          let cp = pp.create(this.view),
            Op = ip ? ip.dom : null;
          if (cp.dom.classList.add("cm-tooltip"), pp.arrow && !cp.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let pp = document.createElement("div");
            pp.className = "cm-tooltip-arrow", cp.dom.appendChild(pp)
          }
          return cp.dom.style.position = this.position, cp.dom.style.top = JI, cp.dom.style.left = "0px", this.container.insertBefore(cp.dom, Op), cp.mount && cp.mount(this.view), this.resizeObserver && this.resizeObserver.observe(cp.dom), cp
        }
        destroy() {
          var pp, ip, cp;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Op of this.manager.tooltipViews) Op.dom.remove(), null === (pp = Op.destroy) || void 0 === pp || pp.call(Op);
          this.parent && this.container.remove(), null === (ip = this.resizeObserver) || void 0 === ip || ip.disconnect(), null === (cp = this.intersectionObserver) || void 0 === cp || cp.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let pp = 1,
            ip = 1,
            cp = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: pp
            } = this.manager.tooltipViews[0];
            if (kp.safari) {
              let ip = pp.getBoundingClientRect();
              cp = Math.abs(ip.top + 1e4) > 1 || Math.abs(ip.left) > 1
            } else cp = !!pp.offsetParent && pp.offsetParent != this.container.ownerDocument.body
          }
          if (cp || "absolute" == this.position)
            if (this.parent) {
              let cp = this.parent.getBoundingClientRect();
              cp.width && cp.height && (pp = cp.width / this.parent.offsetWidth, ip = cp.height / this.parent.offsetHeight)
            } else({
              scaleX: pp,
              scaleY: ip
            } = this.view.viewState);
          let Op = this.view.scrollDOM.getBoundingClientRect(),
            op = Dc(this.view);
          return {
            visible: {
              left: Op.left + op.left,
              top: Op.top + op.top,
              right: Op.right - op.right,
              bottom: Op.bottom - op.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((pp, ip) => {
              let cp = this.manager.tooltipViews[ip];
              return cp.getCoords ? cp.getCoords(pp.pos) : this.view.coordsAtPos(pp.pos)
            })),
            size: this.manager.tooltipViews.map((pp => {
              let {
                dom: ip
              } = pp;
              return ip.getBoundingClientRect()
            })),
            space: this.view.state.facet(TI).tooltipSpace(this.view),
            scaleX: pp,
            scaleY: ip,
            makeAbsolute: cp
          }
        }
        writeMeasure(pp) {
          var ip;
          if (pp.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let pp of this.manager.tooltipViews) pp.dom.style.position = "absolute"
          }
          let {
            visible: cp,
            space: Op,
            scaleX: op,
            scaleY: Ip
          } = pp, Sp = [];
          for (let xp = 0; xp < this.manager.tooltips.length; xp++) {
            let Lp = this.manager.tooltips[xp],
              Yp = this.manager.tooltipViews[xp],
              {
                dom: Dp
              } = Yp,
              Ap = pp.pos[xp],
              Pp = pp.size[xp];
            if (!Ap || !1 !== Lp.clip && (Ap.bottom <= Math.max(cp.top, Op.top) || Ap.top >= Math.min(cp.bottom, Op.bottom) || Ap.right < Math.max(cp.left, Op.left) - .1 || Ap.left > Math.min(cp.right, Op.right) + .1)) {
              Dp.style.top = JI;
              continue
            }
            let Wp = Lp.arrow ? Yp.dom.querySelector(".cm-tooltip-arrow") : null,
              yp = Wp ? 7 : 0,
              Up = Pp.right - Pp.left,
              wp = null !== (ip = fI.get(Yp)) && void 0 !== ip ? ip : Pp.bottom - Pp.top,
              vp = Yp.offset || nI,
              tp = this.view.textDirection == Ai.LTR,
              Hp = Pp.width > Op.right - Op.left ? tp ? Op.left : Op.right - Pp.width : tp ? Math.max(Op.left, Math.min(Ap.left - (Wp ? 14 : 0) + vp.x, Op.right - Up)) : Math.min(Math.max(Op.left, Ap.left - Up + (Wp ? 14 : 0) - vp.x), Op.right - Up),
              dp = this.above[xp];
            !Lp.strictSide && (dp ? Ap.top - wp - yp - vp.y < Op.top : Ap.bottom + wp + yp + vp.y > Op.bottom) && dp == Op.bottom - Ap.bottom > Ap.top - Op.top && (dp = this.above[xp] = !dp);
            let ep = (dp ? Ap.top - Op.top : Op.bottom - Ap.bottom) - yp;
            if (ep < wp && !1 !== Yp.resize) {
              if (ep < this.view.defaultLineHeight) {
                Dp.style.top = JI;
                continue
              }
              fI.set(Yp, wp), Dp.style.height = (wp = ep) / Ip + "px"
            } else Dp.style.height && (Dp.style.height = "");
            let jp = dp ? Ap.top - wp - yp - vp.y : Ap.bottom + yp + vp.y,
              kp = Hp + Up;
            if (!0 !== Yp.overlap)
              for (let pp of Sp) pp.left < kp && pp.right > Hp && pp.top < jp + wp && pp.bottom > jp && (jp = dp ? pp.top - wp - 2 - yp : pp.bottom + yp + 2);
            if ("absolute" == this.position ? (Dp.style.top = (jp - pp.parent.top) / Ip + "px", hI(Dp, (Hp - pp.parent.left) / op)) : (Dp.style.top = jp / Ip + "px", hI(Dp, Hp / op)), Wp) {
              let pp = Ap.left + (tp ? vp.x : -vp.x) - (Hp + 14 - 7);
              Wp.style.left = pp / op + "px"
            }!0 !== Yp.overlap && Sp.push({
              left: Hp,
              top: jp,
              right: kp,
              bottom: jp + wp
            }), Dp.classList.toggle("cm-tooltip-above", dp), Dp.classList.toggle("cm-tooltip-below", !dp), Yp.positioned && Yp.positioned(pp.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let pp of this.manager.tooltipViews) pp.dom.style.top = JI
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function hI(pp, ip) {
      let cp = parseInt(pp.style.left, 10);
      (isNaN(cp) || Math.abs(ip - cp) > 1) && (pp.style.left = ip + "px")
    }
    const aI = Co.baseTheme({
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
      nI = {
        x: 0,
        y: 0
      },
      FI = Op.o.define({
        enables: [bI, aI]
      }),
      gI = Op.o.define({
        combine: pp => pp.reduce(((pp, ip) => pp.concat(ip)), [])
      });
    class GI {
      static create(pp) {
        return new GI(pp)
      }
      constructor(pp) {
        this.view = pp, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new BI(pp, gI, ((pp, ip) => this.createHostedView(pp, ip)), (pp => pp.dom.remove()))
      }
      createHostedView(pp, ip) {
        let cp = pp.create(this.view);
        return cp.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(cp.dom, ip ? ip.dom.nextSibling : this.dom.firstChild), this.mounted && cp.mount && cp.mount(this.view), cp
      }
      mount(pp) {
        for (let ip of this.manager.tooltipViews) ip.mount && ip.mount(pp);
        this.mounted = !0
      }
      positioned(pp) {
        for (let ip of this.manager.tooltipViews) ip.positioned && ip.positioned(pp)
      }
      update(pp) {
        this.manager.update(pp)
      }
      destroy() {
        var pp;
        for (let ip of this.manager.tooltipViews) null === (pp = ip.destroy) || void 0 === pp || pp.call(ip)
      }
      passProp(pp) {
        let ip;
        for (let cp of this.manager.tooltipViews) {
          let Op = cp[pp];
          if (void 0 !== Op)
            if (void 0 === ip) ip = Op;
            else if (ip !== Op) return
        }
        return ip
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
    const rI = FI.compute([gI], (pp => {
      let ip = pp.facet(gI);
      return 0 === ip.length ? null : {
        pos: Math.min(...ip.map((pp => pp.pos))),
        end: Math.max(...ip.map((pp => {
          var ip;
          return null !== (ip = pp.end) && void 0 !== ip ? ip : pp.pos
        }))),
        create: GI.create,
        above: ip[0].above,
        arrow: ip.some((pp => pp.arrow))
      }
    }));
    class ZI {
      constructor(pp, ip, cp, Op, op) {
        this.view = pp, this.source = ip, this.field = cp, this.setHover = Op, this.hoverTime = op, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: pp.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), pp.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), pp.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let pp = Date.now() - this.lastMove.time;
        pp < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - pp) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: pp,
          lastMove: ip
        } = this, cp = pp.docView.tile.nearest(ip.target);
        if (!cp) return;
        let Op, op = 1;
        if (cp.isWidget()) Op = cp.posAtStart;
        else {
          if (Op = pp.posAtCoords(ip), null == Op) return;
          let cp = pp.coordsAtPos(Op);
          if (!cp || ip.y < cp.top || ip.y > cp.bottom || ip.x < cp.left - pp.defaultCharacterWidth || ip.x > cp.right + pp.defaultCharacterWidth) return;
          let Ip = pp.bidiSpans(pp.state.doc.lineAt(Op)).find((pp => pp.from <= Op && pp.to >= Op)),
            Sp = Ip && Ip.dir == Ai.RTL ? -1 : 1;
          op = ip.x < cp.left ? -Sp : Sp
        }
        let Ip = this.source(pp, Op, op);
        if (null === Ip || void 0 === Ip ? void 0 : Ip.then) {
          let ip = this.pending = {
            pos: Op
          };
          Ip.then((cp => {
            this.pending == ip && (this.pending = null, !cp || Array.isArray(cp) && !cp.length || pp.dispatch({
              effects: this.setHover.of(Array.isArray(cp) ? cp : [cp])
            }))
          }), (ip => Zi(pp.state, ip, "hover tooltip")))
        } else !Ip || Array.isArray(Ip) && !Ip.length || pp.dispatch({
          effects: this.setHover.of(Array.isArray(Ip) ? Ip : [Ip])
        })
      }
      get tooltip() {
        let pp = this.view.plugin(bI),
          ip = pp ? pp.manager.tooltips.findIndex((pp => pp.create == GI.create)) : -1;
        return ip > -1 ? pp.manager.tooltipViews[ip] : null
      }
      mousemove(pp) {
        var ip, cp;
        this.lastMove = {
          x: pp.clientX,
          y: pp.clientY,
          target: pp.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Op,
          tooltip: op
        } = this;
        if (Op.length && op && ! function(pp, ip) {
            let cp, {
              left: Op,
              right: op,
              top: Ip,
              bottom: Sp
            } = pp.getBoundingClientRect();
            if (cp = pp.querySelector(".cm-tooltip-arrow")) {
              let pp = cp.getBoundingClientRect();
              Ip = Math.min(pp.top, Ip), Sp = Math.max(pp.bottom, Sp)
            }
            return ip.clientX >= Op - zI && ip.clientX <= op + zI && ip.clientY >= Ip - zI && ip.clientY <= Sp + zI
          }(op.dom, pp) || this.pending) {
          let {
            pos: op
          } = Op[0] || this.pending, Ip = null !== (cp = null === (ip = Op[0]) || void 0 === ip ? void 0 : ip.end) && void 0 !== cp ? cp : op;
          (op == Ip ? this.view.posAtCoords(this.lastMove) == op : function(pp, ip, cp, Op, op) {
            let Ip = pp.scrollDOM.getBoundingClientRect(),
              Sp = pp.documentTop + pp.documentPadding.top + pp.contentHeight;
            if (Ip.left > Op || Ip.right < Op || Ip.top > op || Math.min(Ip.bottom, Sp) < op) return !1;
            let xp = pp.posAtCoords({
              x: Op,
              y: op
            }, !1);
            return xp >= ip && xp <= cp
          }(this.view, op, Ip, pp.clientX, pp.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(pp) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: ip
        } = this;
        if (ip.length) {
          let {
            tooltip: ip
          } = this;
          ip && ip.dom.contains(pp.relatedTarget) ? this.watchTooltipLeave(ip.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(pp) {
        let ip = cp => {
          pp.removeEventListener("mouseleave", ip), this.active.length && !this.view.dom.contains(cp.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        pp.addEventListener("mouseleave", ip)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const zI = 4;

    function sI(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cp = Op.C.define(),
        op = Op.E.define({
          create: () => [],
          update(pp, op) {
            if (pp.length && (ip.hideOnChange && (op.docChanged || op.selection) ? pp = [] : ip.hideOn && (pp = pp.filter((pp => !ip.hideOn(op, pp)))), op.docChanged)) {
              let ip = [];
              for (let cp of pp) {
                let pp = op.changes.mapPos(cp.pos, -1, Op.r.TrackDel);
                if (null != pp) {
                  let Op = Object.assign(Object.create(null), cp);
                  Op.pos = pp, null != Op.end && (Op.end = op.changes.mapPos(Op.end)), ip.push(Op)
                }
              }
              pp = ip
            }
            for (let ip of op.effects) ip.is(cp) && (pp = ip.value), ip.is(VI) && (pp = []);
            return pp
          },
          provide: pp => gI.from(pp)
        });
      return {
        active: op,
        extension: [op, Vi.define((Op => new ZI(Op, pp, op, cp, ip.hoverTime || 300))), rI]
      }
    }

    function KI(pp, ip) {
      let cp = pp.plugin(bI);
      if (!cp) return null;
      let Op = cp.manager.tooltips.indexOf(ip);
      return Op < 0 ? null : cp.manager.tooltipViews[Op]
    }
    const VI = Op.C.define();
    const pS = Op.o.define({
      combine(pp) {
        let ip, cp;
        for (let Op of pp) ip = ip || Op.topContainer, cp = cp || Op.bottomContainer;
        return {
          topContainer: ip,
          bottomContainer: cp
        }
      }
    });

    function iS(pp, ip) {
      let cp = pp.plugin(cS),
        Op = cp ? cp.specs.indexOf(ip) : -1;
      return Op > -1 ? cp.panels[Op] : null
    }
    const cS = Vi.fromClass(class {
      constructor(pp) {
        this.input = pp.state.facet(IS), this.specs = this.input.filter((pp => pp)), this.panels = this.specs.map((ip => ip(pp)));
        let ip = pp.state.facet(pS);
        this.top = new OS(pp, !0, ip.topContainer), this.bottom = new OS(pp, !1, ip.bottomContainer), this.top.sync(this.panels.filter((pp => pp.top))), this.bottom.sync(this.panels.filter((pp => !pp.top)));
        for (let cp of this.panels) cp.dom.classList.add("cm-panel"), cp.mount && cp.mount()
      }
      update(pp) {
        let ip = pp.state.facet(pS);
        this.top.container != ip.topContainer && (this.top.sync([]), this.top = new OS(pp.view, !0, ip.topContainer)), this.bottom.container != ip.bottomContainer && (this.bottom.sync([]), this.bottom = new OS(pp.view, !1, ip.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let cp = pp.state.facet(IS);
        if (cp != this.input) {
          let ip = cp.filter((pp => pp)),
            Op = [],
            op = [],
            Ip = [],
            Sp = [];
          for (let cp of ip) {
            let ip, xp = this.specs.indexOf(cp);
            xp < 0 ? (ip = cp(pp.view), Sp.push(ip)) : (ip = this.panels[xp], ip.update && ip.update(pp)), Op.push(ip), (ip.top ? op : Ip).push(ip)
          }
          this.specs = ip, this.panels = Op, this.top.sync(op), this.bottom.sync(Ip);
          for (let pp of Sp) pp.dom.classList.add("cm-panel"), pp.mount && pp.mount()
        } else
          for (let Op of this.panels) Op.update && Op.update(pp)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: pp => Co.scrollMargins.of((ip => {
        let cp = ip.plugin(pp);
        return cp && {
          top: cp.top.scrollMargin(),
          bottom: cp.bottom.scrollMargin()
        }
      }))
    });
    class OS {
      constructor(pp, ip, cp) {
        this.view = pp, this.top = ip, this.container = cp, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(pp) {
        for (let ip of this.panels) ip.destroy && pp.indexOf(ip) < 0 && ip.destroy();
        this.panels = pp, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let pp = this.container || this.view.dom;
          pp.insertBefore(this.dom, this.top ? pp.firstChild : null)
        }
        let pp = this.dom.firstChild;
        for (let ip of this.panels)
          if (ip.dom.parentNode == this.dom) {
            for (; pp != ip.dom;) pp = oS(pp);
            pp = pp.nextSibling
          } else this.dom.insertBefore(ip.dom, pp);
        for (; pp;) pp = oS(pp)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let pp of this.classes.split(" ")) pp && this.container.classList.remove(pp);
          for (let pp of (this.classes = this.view.themeClasses).split(" ")) pp && this.container.classList.add(pp)
        }
      }
    }

    function oS(pp) {
      let ip = pp.nextSibling;
      return pp.remove(), ip
    }
    const IS = Op.o.define({
      enables: cS
    });

    function SS(pp, ip) {
      let cp, op = new Promise((pp => cp = pp)),
        Ip = pp => function(pp, ip, cp) {
          let Op = ip.content ? ip.content(pp, (() => Sp(null))) : null;
          if (!Op) {
            if (Op = (0, Ap.d)("form"), ip.input) {
              let pp = (0, Ap.d)("input", ip.input);
              /^(text|password|number|email|tel|url)$/.test(pp.type) && pp.classList.add("cm-textfield"), pp.name || (pp.name = "input"), Op.appendChild((0, Ap.d)("label", (ip.label || "") + ": ", pp))
            } else Op.appendChild(document.createTextNode(ip.label || ""));
            Op.appendChild(document.createTextNode(" ")), Op.appendChild((0, Ap.d)("button", {
              class: "cm-button",
              type: "submit"
            }, ip.submitLabel || "OK"))
          }
          let op = "FORM" == Op.nodeName ? [Op] : Op.querySelectorAll("form");
          for (let xp = 0; xp < op.length; xp++) {
            let pp = op[xp];
            pp.addEventListener("keydown", (ip => {
              27 == ip.keyCode ? (ip.preventDefault(), Sp(null)) : 13 == ip.keyCode && (ip.preventDefault(), Sp(pp))
            })), pp.addEventListener("submit", (ip => {
              ip.preventDefault(), Sp(pp)
            }))
          }
          let Ip = (0, Ap.d)("div", Op, (0, Ap.d)("button", {
            onclick: () => Sp(null),
            "aria-label": pp.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          ip.class && (Ip.className = ip.class);

          function Sp(ip) {
            Ip.contains(Ip.ownerDocument.activeElement) && pp.focus(), cp(ip)
          }
          return Ip.classList.add("cm-dialog"), {
            dom: Ip,
            top: ip.top,
            mount: () => {
              if (ip.focus) {
                let pp;
                pp = "string" == typeof ip.focus ? Op.querySelector(ip.focus) : Op.querySelector("input") || Op.querySelector("button"), pp && "select" in pp ? pp.select() : pp && "focus" in pp && pp.focus()
              }
            }
          }
        }(pp, ip, cp);
      pp.state.field(xS, !1) ? pp.dispatch({
        effects: LS.of(Ip)
      }) : pp.dispatch({
        effects: Op.C.appendConfig.of(xS.init((() => [Ip])))
      });
      let Sp = YS.of(Ip);
      return {
        close: Sp,
        result: op.then((ip => ((pp.win.queueMicrotask || (ip => pp.win.setTimeout(ip, 10)))((() => {
          pp.state.field(xS).indexOf(Ip) > -1 && pp.dispatch({
            effects: Sp
          })
        })), ip)))
      }
    }
    const xS = Op.E.define({
        create: () => [],
        update(pp, ip) {
          for (let cp of ip.effects) cp.is(LS) ? pp = [cp.value].concat(pp) : cp.is(YS) && (pp = pp.filter((pp => pp != cp.value)));
          return pp
        },
        provide: pp => IS.computeN([pp], (ip => ip.field(pp)))
      }),
      LS = Op.C.define(),
      YS = Op.C.define();
    class DS extends Op.B {
      compare(pp) {
        return this == pp || this.constructor == pp.constructor && this.eq(pp)
      }
      eq(pp) {
        return !1
      }
      destroy(pp) {}
    }
    DS.prototype.elementClass = "", DS.prototype.toDOM = void 0, DS.prototype.mapMode = Op.r.TrackBefore, DS.prototype.startSide = DS.prototype.endSide = -1, DS.prototype.point = !0;
    const AS = Op.o.define(),
      PS = Op.o.define(),
      WS = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Op.A.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      yS = Op.o.define();

    function US(pp) {
      return [vS(), yS.of({
        ...WS,
        ...pp
      })]
    }
    const wS = Op.o.define({
      combine: pp => pp.some((pp => pp))
    });

    function vS(pp) {
      let ip = [tS];
      return pp && !1 === pp.fixed && ip.push(wS.of(!0)), ip
    }
    const tS = Vi.fromClass(class {
      constructor(pp) {
        this.view = pp, this.domAfter = null, this.prevViewport = pp.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = pp.state.facet(yS).map((ip => new uS(pp, ip))), this.fixed = !pp.state.facet(wS);
        for (let ip of this.gutters) "after" == ip.config.side ? this.getDOMAfter().appendChild(ip.dom) : this.dom.appendChild(ip.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), pp.scrollDOM.insertBefore(this.dom, pp.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(pp) {
        if (this.updateGutters(pp)) {
          let ip = this.prevViewport,
            cp = pp.view.viewport,
            Op = Math.min(ip.to, cp.to) - Math.max(ip.from, cp.from);
          this.syncGutters(Op < .8 * (cp.to - cp.from))
        }
        if (pp.geometryChanged) {
          let pp = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = pp, this.domAfter && (this.domAfter.style.minHeight = pp)
        }
        this.view.state.facet(wS) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = pp.view.viewport
      }
      syncGutters(pp) {
        let ip = this.dom.nextSibling;
        pp && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let cp = Op.A.iter(this.view.state.facet(AS), this.view.viewport.from),
          op = [],
          Ip = this.gutters.map((pp => new eS(pp, this.view.viewport, -this.view.documentPadding.top)));
        for (let Op of this.view.viewportLineBlocks)
          if (op.length && (op = []), Array.isArray(Op.type)) {
            let pp = !0;
            for (let ip of Op.type)
              if (ip.type == Xp.Text && pp) {
                dS(cp, op, ip.from);
                for (let pp of Ip) pp.line(this.view, ip, op);
                pp = !1
              } else if (ip.widget)
              for (let pp of Ip) pp.widget(this.view, ip)
          } else if (Op.type == Xp.Text) {
          dS(cp, op, Op.from);
          for (let pp of Ip) pp.line(this.view, Op, op)
        } else if (Op.widget)
          for (let pp of Ip) pp.widget(this.view, Op);
        for (let Op of Ip) Op.finish();
        pp && (this.view.scrollDOM.insertBefore(this.dom, ip), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(pp) {
        let ip = pp.startState.facet(yS),
          cp = pp.state.facet(yS),
          op = pp.docChanged || pp.heightChanged || pp.viewportChanged || !Op.A.eq(pp.startState.facet(AS), pp.state.facet(AS), pp.view.viewport.from, pp.view.viewport.to);
        if (ip == cp)
          for (let Op of this.gutters) Op.update(pp) && (op = !0);
        else {
          op = !0;
          let Op = [];
          for (let op of cp) {
            let cp = ip.indexOf(op);
            cp < 0 ? Op.push(new uS(this.view, op)) : (this.gutters[cp].update(pp), Op.push(this.gutters[cp]))
          }
          for (let pp of this.gutters) pp.dom.remove(), Op.indexOf(pp) < 0 && pp.destroy();
          for (let pp of Op) "after" == pp.config.side ? this.getDOMAfter().appendChild(pp.dom) : this.dom.appendChild(pp.dom);
          this.gutters = Op
        }
        return op
      }
      destroy() {
        for (let pp of this.gutters) pp.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: pp => Co.scrollMargins.of((ip => {
        let cp = ip.plugin(pp);
        if (!cp || 0 == cp.gutters.length || !cp.fixed) return null;
        let Op = cp.dom.offsetWidth * ip.scaleX,
          op = cp.domAfter ? cp.domAfter.offsetWidth * ip.scaleX : 0;
        return ip.textDirection == Ai.LTR ? {
          left: Op,
          right: op
        } : {
          right: Op,
          left: op
        }
      }))
    });

    function HS(pp) {
      return Array.isArray(pp) ? pp : [pp]
    }

    function dS(pp, ip, cp) {
      for (; pp.value && pp.from <= cp;) pp.from == cp && ip.push(pp.value), pp.next()
    }
    class eS {
      constructor(pp, ip, cp) {
        this.gutter = pp, this.height = cp, this.i = 0, this.cursor = Op.A.iter(pp.markers, ip.from)
      }
      addElement(pp, ip, cp) {
        let {
          gutter: Op
        } = this, op = (ip.top - this.height) / pp.scaleY, Ip = ip.height / pp.scaleY;
        if (this.i == Op.elements.length) {
          let ip = new jS(pp, Ip, op, cp);
          Op.elements.push(ip), Op.dom.appendChild(ip.dom)
        } else Op.elements[this.i].update(pp, Ip, op, cp);
        this.height = ip.bottom, this.i++
      }
      line(pp, ip, cp) {
        let Op = [];
        dS(this.cursor, Op, ip.from), cp.length && (Op = Op.concat(cp));
        let op = this.gutter.config.lineMarker(pp, ip, Op);
        op && Op.unshift(op);
        let Ip = this.gutter;
        (0 != Op.length || Ip.config.renderEmptyElements) && this.addElement(pp, ip, Op)
      }
      widget(pp, ip) {
        let cp = this.gutter.config.widgetMarker(pp, ip.widget, ip),
          Op = cp ? [cp] : null;
        for (let op of pp.state.facet(PS)) {
          let cp = op(pp, ip.widget, ip);
          cp && (Op || (Op = [])).push(cp)
        }
        Op && this.addElement(pp, ip, Op)
      }
      finish() {
        let pp = this.gutter;
        for (; pp.elements.length > this.i;) {
          let ip = pp.elements.pop();
          pp.dom.removeChild(ip.dom), ip.destroy()
        }
      }
    }
    class uS {
      constructor(pp, ip) {
        this.view = pp, this.config = ip, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let cp in ip.domEventHandlers) this.dom.addEventListener(cp, (Op => {
          let op, Ip = Op.target;
          if (Ip != this.dom && this.dom.contains(Ip)) {
            for (; Ip.parentNode != this.dom;) Ip = Ip.parentNode;
            let pp = Ip.getBoundingClientRect();
            op = (pp.top + pp.bottom) / 2
          } else op = Op.clientY;
          let Sp = pp.lineBlockAtHeight(op - pp.documentTop);
          ip.domEventHandlers[cp](pp, Sp, Op) && Op.preventDefault()
        }));
        this.markers = HS(ip.markers(pp)), ip.initialSpacer && (this.spacer = new jS(pp, 0, 0, [ip.initialSpacer(pp)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(pp) {
        let ip = this.markers;
        if (this.markers = HS(this.config.markers(pp.view)), this.spacer && this.config.updateSpacer) {
          let ip = this.config.updateSpacer(this.spacer.markers[0], pp);
          ip != this.spacer.markers[0] && this.spacer.update(pp.view, 0, 0, [ip])
        }
        let cp = pp.view.viewport;
        return !Op.A.eq(this.markers, ip, cp.from, cp.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(pp)
      }
      destroy() {
        for (let pp of this.elements) pp.destroy()
      }
    }
    class jS {
      constructor(pp, ip, cp, Op) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(pp, ip, cp, Op)
      }
      update(pp, ip, cp, Op) {
        this.height != ip && (this.height = ip, this.dom.style.height = ip + "px"), this.above != cp && (this.dom.style.marginTop = (this.above = cp) ? cp + "px" : ""),
          function(pp, ip) {
            if (pp.length != ip.length) return !1;
            for (let cp = 0; cp < pp.length; cp++)
              if (!pp[cp].compare(ip[cp])) return !1;
            return !0
          }(this.markers, Op) || this.setMarkers(pp, Op)
      }
      setMarkers(pp, ip) {
        let cp = "cm-gutterElement",
          Op = this.dom.firstChild;
        for (let op = 0, Ip = 0;;) {
          let Sp = Ip,
            xp = op < ip.length ? ip[op++] : null,
            Lp = !1;
          if (xp) {
            let pp = xp.elementClass;
            pp && (cp += " " + pp);
            for (let ip = Ip; ip < this.markers.length; ip++)
              if (this.markers[ip].compare(xp)) {
                Sp = ip, Lp = !0;
                break
              }
          } else Sp = this.markers.length;
          for (; Ip < Sp;) {
            let pp = this.markers[Ip++];
            if (pp.toDOM) {
              pp.destroy(Op);
              let ip = Op.nextSibling;
              Op.remove(), Op = ip
            }
          }
          if (!xp) break;
          xp.toDOM && (Lp ? Op = Op.nextSibling : this.dom.insertBefore(xp.toDOM(pp), Op)), Lp && Ip++
        }
        this.dom.className = cp, this.markers = ip
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const kS = Op.o.define(),
      mS = Op.o.define(),
      RS = Op.o.define({
        combine: pp => (0, Op.P)(pp, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(pp, ip) {
            let cp = Object.assign({}, pp);
            for (let Op in ip) {
              let pp = cp[Op],
                op = ip[Op];
              cp[Op] = pp ? (ip, cp, Op) => pp(ip, cp, Op) || op(ip, cp, Op) : op
            }
            return cp
          }
        })
      });
    class qS extends DS {
      constructor(pp) {
        super(), this.number = pp
      }
      eq(pp) {
        return this.number == pp.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function MS(pp, ip) {
      return pp.state.facet(RS).formatNumber(ip, pp.state)
    }
    const CS = yS.compute([RS], (pp => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: pp => pp.state.facet(kS),
      lineMarker: (pp, ip, cp) => cp.some((pp => pp.toDOM)) ? null : new qS(MS(pp, pp.state.doc.lineAt(ip.from).number)),
      widgetMarker: (pp, ip, cp) => {
        for (let Op of pp.state.facet(mS)) {
          let op = Op(pp, ip, cp);
          if (op) return op
        }
        return null
      },
      lineMarkerChange: pp => pp.startState.facet(RS) != pp.state.facet(RS),
      initialSpacer: pp => new qS(MS(pp, XS(pp.state.doc.lines))),
      updateSpacer(pp, ip) {
        let cp = MS(ip.view, XS(ip.view.state.doc.lines));
        return cp == pp.number ? pp : new qS(cp)
      },
      domEventHandlers: pp.facet(RS).domEventHandlers,
      side: "before"
    })));

    function ES() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [RS.of(pp), vS(), CS]
    }

    function XS(pp) {
      let ip = 9;
      for (; ip < pp;) ip = 10 * ip + 9;
      return ip
    }
    const lS = new class extends DS {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      QS = AS.compute(["selection"], (pp => {
        let ip = [],
          cp = -1;
        for (let Op of pp.selection.By) {
          let op = pp.doc.lineAt(Op.head).from;
          op > cp && (cp = op, ip.push(lS.range(op)))
        }
        return Op.A.of(ip)
      }));

    function JS() {
      return QS
    }
  },
  41575: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      h: () => Wp,
      j: () => Sp,
      m: () => Dp,
      p: () => Yp,
      r: () => Qp,
      s: () => Bp,
      u: () => Jp,
      w: () => yp
    });
    const Op = 1024;
    let op = 0;
    class Ip {
      constructor(pp, ip) {
        this.from = pp, this.to = ip
      }
    }
    class Sp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = op++, this.perNode = !!pp.perNode, this.deserialize = pp.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = pp.combine || null
      }
      add(pp) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof pp && (pp = Yp.match(pp)), ip => {
          let cp = pp(ip);
          return void 0 === cp ? null : [this, cp]
        }
      }
    }
    Sp.closedBy = new Sp({
      deserialize: pp => pp.split(" ")
    }), Sp.openedBy = new Sp({
      deserialize: pp => pp.split(" ")
    }), Sp.group = new Sp({
      deserialize: pp => pp.split(" ")
    }), Sp.isolate = new Sp({
      deserialize: pp => {
        if (pp && "rtl" != pp && "ltr" != pp && "auto" != pp) throw new RangeError("Invalid value for isolate: " + pp);
        return pp || "auto"
      }
    }), Sp.contextHash = new Sp({
      perNode: !0
    }), Sp.lookAhead = new Sp({
      perNode: !0
    }), Sp.mounted = new Sp({
      perNode: !0
    });
    class xp {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = pp, this.overlay = ip, this.parser = cp, this.bracketed = Op
      }
      static get(pp) {
        return pp && pp.props && pp.props[Sp.mounted.id]
      }
    }
    const Lp = Object.create(null);
    class Yp {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = pp, this.props = ip, this.id = cp, this.flags = Op
      }
      static define(pp) {
        let ip = pp.props && pp.props.length ? Object.create(null) : Lp,
          cp = (pp.top ? 1 : 0) | (pp.skipped ? 2 : 0) | (pp.error ? 4 : 0) | (null == pp.name ? 8 : 0),
          Op = new Yp(pp.name || "", ip, pp.id, cp);
        if (pp.props)
          for (let op of pp.props)
            if (Array.isArray(op) || (op = op(Op)), op) {
              if (op[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              ip[op[0].id] = op[1]
            } return Op
      }
      prop(pp) {
        return this.props[pp.id]
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
      is(pp) {
        if ("string" == typeof pp) {
          if (this.name == pp) return !0;
          let ip = this.prop(Sp.group);
          return !!ip && ip.indexOf(pp) > -1
        }
        return this.id == pp
      }
      static match(pp) {
        let ip = Object.create(null);
        for (let cp in pp)
          for (let Op of cp.split(" ")) ip[Op] = pp[cp];
        return pp => {
          for (let cp = pp.prop(Sp.group), Op = -1; Op < (cp ? cp.length : 0); Op++) {
            let op = ip[Op < 0 ? pp.name : cp[Op]];
            if (op) return op
          }
        }
      }
    }
    Yp.none = new Yp("", Object.create(null), 0, 8);
    class Dp {
      constructor(pp) {
        this.types = pp;
        for (let ip = 0; ip < pp.length; ip++)
          if (pp[ip].id != ip) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let pp = [];
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        for (let op of this.types) {
          let ip = null;
          for (let pp of cp) {
            let cp = pp(op);
            if (cp) {
              ip || (ip = Object.assign({}, op.props));
              let pp = cp[1],
                Op = cp[0];
              Op.combine && Op.id in ip && (pp = Op.combine(ip[Op.id], pp)), ip[Op.id] = pp
            }
          }
          pp.push(ip ? new Yp(op.name, ip, op.id, op.flags) : op)
        }
        return new Dp(pp)
      }
    }
    const Ap = new WeakMap,
      Pp = new WeakMap;
    var Wp;
    ! function(pp) {
      pp[pp.ExcludeBuffers = 1] = "ExcludeBuffers", pp[pp.IncludeAnonymous = 2] = "IncludeAnonymous", pp[pp.IgnoreMounts = 4] = "IgnoreMounts", pp[pp.IgnoreOverlays = 8] = "IgnoreOverlays", pp[pp.EnterBracketed = 16] = "EnterBracketed"
    }(Wp || (Wp = {}));
    class yp {
      constructor(pp, ip, cp, Op, op) {
        if (this.type = pp, this.children = ip, this.positions = cp, this.length = Op, this.props = null, op && op.length) {
          this.props = Object.create(null);
          for (let [pp, ip] of op) this.props["number" == typeof pp ? pp : pp.id] = ip
        }
      }
      toString() {
        let pp = xp.get(this);
        if (pp && !pp.overlay) return pp.tree.toString();
        let ip = "";
        for (let cp of this.children) {
          let pp = cp.toString();
          pp && (ip && (ip += ","), ip += pp)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (ip.length ? "(" + ip + ")" : "") : ip
      }
      cursor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Mp(this.topNode, pp)
      }
      cursorAt(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = Ap.get(this) || this.topNode,
          Op = new Mp(cp);
        return Op.moveTo(pp, ip), Ap.set(this, Op._tree), Op
      }
      get topNode() {
        return new dp(this, 0, 0, null)
      }
      resolve(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = tp(Ap.get(this) || this.topNode, pp, ip, !1);
        return Ap.set(this, cp), cp
      }
      resolveInner(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = tp(Pp.get(this) || this.topNode, pp, ip, !0);
        return Pp.set(this, cp), cp
      }
      resolveStack(pp) {
        return function(pp, ip, cp) {
          let Op = pp.resolveInner(ip, cp),
            op = null;
          for (let Ip = Op instanceof dp ? Op : Op.context.parent; Ip; Ip = Ip.parent)
            if (Ip.index < 0) {
              let pp = Ip.parent;
              (op || (op = [Op])).push(pp.resolve(ip, cp)), Ip = pp
            } else {
              let pp = xp.get(Ip.tree);
              if (pp && pp.overlay && pp.overlay[0].from <= ip && pp.overlay[pp.overlay.length - 1].to >= ip) {
                let Sp = new dp(pp.tree, pp.overlay[0].from + Ip.from, -1, Ip);
                (op || (op = [Op])).push(tp(Sp, ip, cp, !1))
              }
            } return op ? Rp(op) : Op
        }(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(pp) {
        let {
          enter: ip,
          leave: cp,
          from: Op = 0,
          to: op = this.length
        } = pp, Ip = pp.mode || 0, Sp = (Ip & Wp.IncludeAnonymous) > 0;
        for (let xp = this.cursor(Ip | Wp.IncludeAnonymous);;) {
          let pp = !1;
          if (xp.from <= op && xp.to >= Op && (!Sp && xp.type.isAnonymous || !1 !== ip(xp))) {
            if (xp.firstChild()) continue;
            pp = !0
          }
          for (; pp && cp && (Sp || !xp.type.isAnonymous) && cp(xp), !xp.nextSibling();) {
            if (!xp.parent()) return;
            pp = !0
          }
        }
      }
      prop(pp) {
        return pp.perNode ? this.props ? this.props[pp.id] : void 0 : this.type.prop(pp)
      }
      get propValues() {
        let pp = [];
        if (this.props)
          for (let ip in this.props) pp.push([+ip, this.props[ip]]);
        return pp
      }
      balance() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : lp(Yp.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((pp, ip, cp) => new yp(this.type, pp, ip, cp, this.propValues)), pp.makeTree || ((pp, ip, cp) => new yp(Yp.none, pp, ip, cp)))
      }
      static build(pp) {
        return function(pp) {
          var ip;
          let {
            buffer: cp,
            nodeSet: op,
            maxBufferLength: Ip = Op,
            reused: xp = [],
            minRepeatType: Lp = op.types.length
          } = pp, Yp = Array.isArray(cp) ? new Up(cp, cp.length) : cp, Dp = op.types, Ap = 0, Pp = 0;

          function Wp(pp, ip, cp, Op, Sp, yp) {
            let {
              id: Up,
              start: kp,
              end: mp,
              size: Rp
            } = Yp, qp = Pp, Mp = Ap;
            if (Rp < 0) {
              if (Yp.next(), -1 == Rp) {
                let ip = xp[Up];
                return cp.push(ip), void Op.push(kp - pp)
              }
              if (-3 == Rp) return void(Ap = Up);
              if (-4 == Rp) return void(Pp = Up);
              throw new RangeError(`Unrecognized record size: ${Rp}`)
            }
            let Cp, Ep, Xp = Dp[Up],
              Qp = kp - pp;
            if (mp - kp <= Ip && (Ep = ep(Yp.pos - ip, Sp))) {
              let ip = new Uint16Array(Ep.size - Ep.skip),
                cp = Yp.pos - Ep.size,
                Op = ip.length;
              for (; Yp.pos > cp;) Op = jp(Ep.start, ip, Op);
              Cp = new wp(ip, mp - Ep.start, op), Qp = Ep.start - pp
            } else {
              let pp = Yp.pos - Rp;
              Yp.next();
              let ip = [],
                cp = [],
                Op = Up >= Lp ? Up : -1,
                op = 0,
                Sp = mp;
              for (; Yp.pos > pp;) Op >= 0 && Yp.id == Op && Yp.size >= 0 ? (Yp.end <= Sp - Ip && (Hp(ip, cp, kp, op, Yp.end, Sp, Op, qp, Mp), op = ip.length, Sp = Yp.end), Yp.next()) : yp > 2500 ? vp(kp, pp, ip, cp) : Wp(kp, pp, ip, cp, Op, yp + 1);
              if (Op >= 0 && op > 0 && op < ip.length && Hp(ip, cp, kp, op, kp, Sp, Op, qp, Mp), ip.reverse(), cp.reverse(), Op > -1 && op > 0) {
                let pp = tp(Xp, Mp);
                Cp = lp(Xp, ip, cp, 0, ip.length, 0, mp - kp, pp, pp)
              } else Cp = dp(Xp, ip, cp, mp - kp, qp - mp, Mp)
            }
            cp.push(Cp), Op.push(Qp)
          }

          function vp(pp, ip, cp, Op) {
            let Sp = [],
              xp = 0,
              Lp = -1;
            for (; Yp.pos > ip;) {
              let {
                id: pp,
                start: ip,
                end: cp,
                size: Op
              } = Yp;
              if (Op > 4) Yp.next();
              else {
                if (Lp > -1 && ip < Lp) break;
                Lp < 0 && (Lp = cp - Ip), Sp.push(pp, ip, cp), xp++, Yp.next()
              }
            }
            if (xp) {
              let ip = new Uint16Array(4 * xp),
                Ip = Sp[Sp.length - 2];
              for (let pp = Sp.length - 3, cp = 0; pp >= 0; pp -= 3) ip[cp++] = Sp[pp], ip[cp++] = Sp[pp + 1] - Ip, ip[cp++] = Sp[pp + 2] - Ip, ip[cp++] = cp;
              cp.push(new wp(ip, Sp[2] - Ip, op)), Op.push(Ip - pp)
            }
          }

          function tp(pp, ip) {
            return (cp, Op, op) => {
              let Ip, xp, Lp = 0,
                Yp = cp.length - 1;
              if (Yp >= 0 && (Ip = cp[Yp]) instanceof yp) {
                if (!Yp && Ip.type == pp && Ip.length == op) return Ip;
                (xp = Ip.prop(Sp.lookAhead)) && (Lp = Op[Yp] + Ip.length + xp)
              }
              return dp(pp, cp, Op, op, Lp, ip)
            }
          }

          function Hp(pp, ip, cp, Op, Ip, Sp, xp, Lp, Yp) {
            let Dp = [],
              Ap = [];
            for (; pp.length > Op;) Dp.push(pp.pop()), Ap.push(ip.pop() + cp - Ip);
            pp.push(dp(op.types[xp], Dp, Ap, Sp - Ip, Lp - Sp, Yp)), ip.push(Ip - cp)
          }

          function dp(pp, ip, cp, Op, op, Ip, xp) {
            if (Ip) {
              let pp = [Sp.contextHash, Ip];
              xp = xp ? [pp].concat(xp) : [pp]
            }
            if (op > 25) {
              let pp = [Sp.lookAhead, op];
              xp = xp ? [pp].concat(xp) : [pp]
            }
            return new yp(pp, ip, cp, Op, xp)
          }

          function ep(pp, ip) {
            let cp = Yp.fork(),
              Op = 0,
              op = 0,
              Sp = 0,
              xp = cp.end - Ip,
              Dp = {
                size: 0,
                start: 0,
                skip: 0
              };
            pp: for (let Ip = cp.pos - pp; cp.pos > Ip;) {
              let pp = cp.size;
              if (cp.id == ip && pp >= 0) {
                Dp.size = Op, Dp.start = op, Dp.skip = Sp, Sp += 4, Op += 4, cp.next();
                continue
              }
              let Yp = cp.pos - pp;
              if (pp < 0 || Yp < Ip || cp.start < xp) break;
              let Ap = cp.id >= Lp ? 4 : 0,
                Pp = cp.start;
              for (cp.next(); cp.pos > Yp;) {
                if (cp.size < 0) {
                  if (-3 != cp.size && -4 != cp.size) break pp;
                  Ap += 4
                } else cp.id >= Lp && (Ap += 4);
                cp.next()
              }
              op = Pp, Op += pp, Sp += Ap
            }
            return (ip < 0 || Op == pp) && (Dp.size = Op, Dp.start = op, Dp.skip = Sp), Dp.size > 4 ? Dp : void 0
          }

          function jp(pp, ip, cp) {
            let {
              id: Op,
              start: op,
              end: Ip,
              size: Sp
            } = Yp;
            if (Yp.next(), Sp >= 0 && Op < Lp) {
              let xp = cp;
              if (Sp > 4) {
                let Op = Yp.pos - (Sp - 4);
                for (; Yp.pos > Op;) cp = jp(pp, ip, cp)
              }
              ip[--cp] = xp, ip[--cp] = Ip - pp, ip[--cp] = op - pp, ip[--cp] = Op
            } else - 3 == Sp ? Ap = Op : -4 == Sp && (Pp = Op);
            return cp
          }
          let kp = [],
            mp = [];
          for (; Yp.pos > 0;) Wp(pp.start || 0, pp.bufferStart || 0, kp, mp, -1, 0);
          let Rp = null !== (ip = pp.length) && void 0 !== ip ? ip : kp.length ? mp[0] + kp[0].length : 0;
          return new yp(Dp[pp.topID], kp.reverse(), mp.reverse(), Rp)
        }(pp)
      }
    }
    yp.empty = new yp(Yp.none, [], [], 0);
    class Up {
      constructor(pp, ip) {
        this.buffer = pp, this.index = ip
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
        return new Up(this.buffer, this.index)
      }
    }
    class wp {
      constructor(pp, ip, cp) {
        this.buffer = pp, this.length = ip, this.set = cp
      }
      get type() {
        return Yp.none
      }
      toString() {
        let pp = [];
        for (let ip = 0; ip < this.buffer.length;) pp.push(this.childString(ip)), ip = this.buffer[ip + 3];
        return pp.join(",")
      }
      childString(pp) {
        let ip = this.buffer[pp],
          cp = this.buffer[pp + 3],
          Op = this.set.types[ip],
          op = Op.name;
        if (/\W/.test(op) && !Op.isError && (op = JSON.stringify(op)), cp == (pp += 4)) return op;
        let Ip = [];
        for (; pp < cp;) Ip.push(this.childString(pp)), pp = this.buffer[pp + 3];
        return op + "(" + Ip.join(",") + ")"
      }
      findChild(pp, ip, cp, Op, op) {
        let {
          buffer: Ip
        } = this, Sp = -1;
        for (let xp = pp; xp != ip && !(vp(op, Op, Ip[xp + 1], Ip[xp + 2]) && (Sp = xp, cp > 0)); xp = Ip[xp + 3]);
        return Sp
      }
      slice(pp, ip, cp) {
        let Op = this.buffer,
          op = new Uint16Array(ip - pp),
          Ip = 0;
        for (let Sp = pp, xp = 0; Sp < ip;) {
          op[xp++] = Op[Sp++], op[xp++] = Op[Sp++] - cp;
          let ip = op[xp++] = Op[Sp++] - cp;
          op[xp++] = Op[Sp++] - pp, Ip = Math.max(Ip, ip)
        }
        return new wp(op, Ip, this.set)
      }
    }

    function vp(pp, ip, cp, Op) {
      switch (pp) {
        case -2:
          return cp < ip;
        case -1:
          return Op >= ip && cp < ip;
        case 0:
          return cp < ip && Op > ip;
        case 1:
          return cp <= ip && Op > ip;
        case 2:
          return Op > ip;
        case 4:
          return !0
      }
    }

    function tp(pp, ip, cp, Op) {
      for (var op; pp.from == pp.to || (cp < 1 ? pp.from >= ip : pp.from > ip) || (cp > -1 ? pp.to <= ip : pp.to < ip);) {
        let ip = !Op && pp instanceof dp && pp.index < 0 ? null : pp.parent;
        if (!ip) return pp;
        pp = ip
      }
      let Ip = Op ? 0 : Wp.IgnoreOverlays;
      if (Op)
        for (let Sp = pp, xp = Sp.parent; xp; Sp = xp, xp = Sp.parent) Sp instanceof dp && Sp.index < 0 && (null === (op = xp.enter(ip, cp, Ip)) || void 0 === op ? void 0 : op.from) != Sp.from && (pp = xp);
      for (;;) {
        let Op = pp.enter(ip, cp, Ip);
        if (!Op) return pp;
        pp = Op
      }
    }
    class Hp {
      cursor() {
        return new Mp(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(pp) {
        let ip = ep(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return ip.length ? ip[0] : null
      }
      getChildren(pp) {
        return ep(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(pp) {
        return tp(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(pp) {
        return tp(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(pp) {
        return jp(this.parent, pp)
      }
      enterUnfinishedNodesBefore(pp) {
        let ip = this.childBefore(pp),
          cp = this;
        for (; ip;) {
          let pp = ip.lastChild;
          if (!pp || pp.to != ip.to) break;
          pp.type.isError && pp.from == pp.to ? (cp = ip, ip = pp.prevSibling) : ip = pp
        }
        return cp
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class dp extends Hp {
      constructor(pp, ip, cp, Op) {
        super(), this._tree = pp, this.from = ip, this.index = cp, this._parent = Op
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
      nextChild(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Ip = this;;) {
          for (let {
              children: Sp,
              positions: Lp
            } = Ip._tree, Yp = ip > 0 ? Sp.length : -1; pp != Yp; pp += ip) {
            let Yp, Dp = Sp[pp],
              Ap = Lp[pp] + Ip.from;
            if (op & Wp.EnterBracketed && Dp instanceof yp && (Yp = xp.get(Dp)) && !Yp.overlay && Yp.bracketed && cp >= Ap && cp <= Ap + Dp.length || vp(Op, cp, Ap, Ap + Dp.length))
              if (Dp instanceof wp) {
                if (op & Wp.ExcludeBuffers) continue;
                let Sp = Dp.findChild(0, Dp.buffer.length, ip, cp - Ap, Op);
                if (Sp > -1) return new mp(new kp(Ip, Dp, pp, Ap), null, Sp)
              } else if (op & Wp.IncludeAnonymous || !Dp.type.isAnonymous || Cp(Dp)) {
              let Sp;
              if (!(op & Wp.IgnoreMounts) && (Sp = xp.get(Dp)) && !Sp.overlay) return new dp(Sp.tree, Ap, pp, Ip);
              let Lp = new dp(Dp, Ap, pp, Ip);
              return op & Wp.IncludeAnonymous || !Lp.type.isAnonymous ? Lp : Lp.nextChild(ip < 0 ? Dp.children.length - 1 : 0, ip, cp, Op, op)
            }
          }
          if (op & Wp.IncludeAnonymous || !Ip.type.isAnonymous) return null;
          if (pp = Ip.index >= 0 ? Ip.index + ip : ip < 0 ? -1 : Ip._parent._tree.children.length, Ip = Ip._parent, !Ip) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(pp) {
        return this.nextChild(0, 1, pp, 2)
      }
      childBefore(pp) {
        return this.nextChild(this._tree.children.length - 1, -1, pp, -2)
      }
      prop(pp) {
        return this._tree.prop(pp)
      }
      enter(pp, ip) {
        let cp, Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Op & Wp.IgnoreOverlays) && (cp = xp.get(this._tree)) && cp.overlay) {
          let op = pp - this.from,
            Ip = Op & Wp.EnterBracketed && cp.bracketed;
          for (let {
              from: pp,
              to: Op
            }
            of cp.overlay)
            if ((ip > 0 || Ip ? pp <= op : pp < op) && (ip < 0 || Ip ? Op >= op : Op > op)) return new dp(cp.tree, cp.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, pp, ip, Op)
      }
      nextSignificantParent() {
        let pp = this;
        for (; pp.type.isAnonymous && pp._parent;) pp = pp._parent;
        return pp
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

    function ep(pp, ip, cp, Op) {
      let op = pp.cursor(),
        Ip = [];
      if (!op.firstChild()) return Ip;
      if (null != cp)
        for (let Sp = !1; !Sp;)
          if (Sp = op.type.is(cp), !op.nextSibling()) return Ip;
      for (;;) {
        if (null != Op && op.type.is(Op)) return Ip;
        if (op.type.is(ip) && Ip.push(op.node), !op.nextSibling()) return null == Op ? Ip : []
      }
    }

    function jp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.length - 1;
      for (let Op = pp; cp >= 0; Op = Op.parent) {
        if (!Op) return !1;
        if (!Op.type.isAnonymous) {
          if (ip[cp] && ip[cp] != Op.name) return !1;
          cp--
        }
      }
      return !0
    }
    class kp {
      constructor(pp, ip, cp, Op) {
        this.parent = pp, this.buffer = ip, this.index = cp, this.start = Op
      }
    }
    class mp extends Hp {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(pp, ip, cp) {
        super(), this.context = pp, this._parent = ip, this.index = cp, this.type = pp.buffer.set.types[pp.buffer.buffer[cp]]
      }
      child(pp, ip, cp) {
        let {
          buffer: Op
        } = this.context, op = Op.findChild(this.index + 4, Op.buffer[this.index + 3], pp, ip - this.context.start, cp);
        return op < 0 ? null : new mp(this.context, this, op)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(pp) {
        return this.child(1, pp, 2)
      }
      childBefore(pp) {
        return this.child(-1, pp, -2)
      }
      prop(pp) {
        return this.type.prop(pp)
      }
      enter(pp, ip) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Wp.ExcludeBuffers) return null;
        let {
          buffer: cp
        } = this.context, Op = cp.findChild(this.index + 4, cp.buffer[this.index + 3], ip > 0 ? 1 : -1, pp - this.context.start, ip);
        return Op < 0 ? null : new mp(this.context, this, Op)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(pp) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + pp, pp, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: pp
        } = this.context, ip = pp.buffer[this.index + 3];
        return ip < (this._parent ? pp.buffer[this._parent.index + 3] : pp.buffer.length) ? new mp(this.context, this._parent, ip) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: pp
        } = this.context, ip = this._parent ? this._parent.index + 4 : 0;
        return this.index == ip ? this.externalSibling(-1) : new mp(this.context, this._parent, pp.findChild(ip, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let pp = [],
          ip = [],
          {
            buffer: cp
          } = this.context,
          Op = this.index + 4,
          op = cp.buffer[this.index + 3];
        if (op > Op) {
          let Ip = cp.buffer[this.index + 1];
          pp.push(cp.slice(Op, op, Ip)), ip.push(0)
        }
        return new yp(this.type, pp, ip, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Rp(pp) {
      if (!pp.length) return null;
      let ip = 0,
        cp = pp[0];
      for (let Ip = 1; Ip < pp.length; Ip++) {
        let Op = pp[Ip];
        (Op.from > cp.from || Op.to < cp.to) && (cp = Op, ip = Ip)
      }
      let Op = cp instanceof dp && cp.index < 0 ? null : cp.parent,
        op = pp.slice();
      return Op ? op[ip] = Op : op.splice(ip, 1), new qp(op, cp)
    }
    class qp {
      constructor(pp, ip) {
        this.heads = pp, this.node = ip
      }
      get next() {
        return Rp(this.heads)
      }
    }
    class Mp {
      get name() {
        return this.type.name
      }
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = ip & ~Wp.EnterBracketed, pp instanceof dp) this.yieldNode(pp);
        else {
          this._tree = pp.context.parent, this.buffer = pp.context;
          for (let ip = pp._parent; ip; ip = ip._parent) this.stack.unshift(ip.index);
          this.bufferNode = pp, this.yieldBuf(pp.index)
        }
      }
      yieldNode(pp) {
        return !!pp && (this._tree = pp, this.type = pp.type, this.from = pp.from, this.to = pp.to, !0)
      }
      yieldBuf(pp, ip) {
        this.index = pp;
        let {
          start: cp,
          buffer: Op
        } = this.buffer;
        return this.type = ip || Op.set.types[Op.buffer[pp]], this.from = cp + Op.buffer[pp + 1], this.to = cp + Op.buffer[pp + 2], !0
      }
      yield(pp) {
        return !!pp && (pp instanceof dp ? (this.buffer = null, this.yieldNode(pp)) : (this.buffer = pp.context, this.yieldBuf(pp.index, pp.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(pp, ip, cp) {
        if (!this.buffer) return this.yield(this._tree.nextChild(pp < 0 ? this._tree._tree.children.length - 1 : 0, pp, ip, cp, this.mode));
        let {
          buffer: Op
        } = this.buffer, op = Op.findChild(this.index + 4, Op.buffer[this.index + 3], pp, ip - this.buffer.start, cp);
        return !(op < 0) && (this.stack.push(this.index), this.yieldBuf(op))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(pp) {
        return this.enterChild(1, pp, 2)
      }
      childBefore(pp) {
        return this.enterChild(-1, pp, -2)
      }
      enter(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(cp & Wp.ExcludeBuffers) && this.enterChild(1, pp, ip) : this.yield(this._tree.enter(pp, ip, cp))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Wp.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let pp = this.mode & Wp.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(pp)
      }
      sibling(pp) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + pp, pp, 0, 4, this.mode));
        let {
          buffer: ip
        } = this.buffer, cp = this.stack.length - 1;
        if (pp < 0) {
          let pp = cp < 0 ? 0 : this.stack[cp] + 4;
          if (this.index != pp) return this.yieldBuf(ip.findChild(pp, this.index, -1, 0, 4))
        } else {
          let pp = ip.buffer[this.index + 3];
          if (pp < (cp < 0 ? ip.buffer.length : ip.buffer[this.stack[cp] + 3])) return this.yieldBuf(pp)
        }
        return cp < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + pp, pp, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(pp) {
        let ip, cp, {
          buffer: Op
        } = this;
        if (Op) {
          if (pp > 0) {
            if (this.index < Op.buffer.buffer.length) return !1
          } else
            for (let pp = 0; pp < this.index; pp++)
              if (Op.buffer.buffer[pp + 3] < this.index) return !1;
          ({
            index: ip,
            parent: cp
          } = Op)
        } else({
          index: ip,
          _parent: cp
        } = this._tree);
        for (; cp;
          ({
            index: ip,
            _parent: cp
          } = cp))
          if (ip > -1)
            for (let Op = ip + pp, op = pp < 0 ? -1 : cp._tree.children.length; Op != op; Op += pp) {
              let pp = cp._tree.children[Op];
              if (this.mode & Wp.IncludeAnonymous || pp instanceof wp || !pp.type.isAnonymous || Cp(pp)) return !1
            }
        return !0
      }
      move(pp, ip) {
        if (ip && this.enterChild(pp, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(pp)) return !0;
          if (this.atLastNode(pp) || !this.parent()) return !1
        }
      }
      next() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, pp)
      }
      prev() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, pp)
      }
      moveTo(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (ip < 1 ? this.from >= pp : this.from > pp) || (ip > -1 ? this.to <= pp : this.to < pp)) && this.parent(););
        for (; this.enterChild(1, pp, ip););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let pp = this.bufferNode,
          ip = null,
          cp = 0;
        if (pp && pp.context == this.buffer) pp: for (let Op = this.index, op = this.stack.length; op >= 0;) {
          for (let Ip = pp; Ip; Ip = Ip._parent)
            if (Ip.index == Op) {
              if (Op == this.index) return Ip;
              ip = Ip, cp = op + 1;
              break pp
            } Op = this.stack[--op]
        }
        for (let Op = cp; Op < this.stack.length; Op++) ip = new mp(this.buffer, ip, this.stack[Op]);
        return this.bufferNode = new mp(this.buffer, ip, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(pp, ip) {
        for (let cp = 0;;) {
          let Op = !1;
          if (this.type.isAnonymous || !1 !== pp(this)) {
            if (this.firstChild()) {
              cp++;
              continue
            }
            this.type.isAnonymous || (Op = !0)
          }
          for (;;) {
            if (Op && ip && ip(this), Op = this.type.isAnonymous, !cp) return;
            if (this.nextSibling()) break;
            this.parent(), cp--, Op = !0
          }
        }
      }
      matchContext(pp) {
        if (!this.buffer) return jp(this.node.parent, pp);
        let {
          buffer: ip
        } = this.buffer, {
          types: cp
        } = ip.set;
        for (let Op = pp.length - 1, op = this.stack.length - 1; Op >= 0; op--) {
          if (op < 0) return jp(this._tree, pp, Op);
          let Ip = cp[ip.buffer[this.stack[op]]];
          if (!Ip.isAnonymous) {
            if (pp[Op] && pp[Op] != Ip.name) return !1;
            Op--
          }
        }
        return !0
      }
    }

    function Cp(pp) {
      return pp.children.some((pp => pp instanceof wp || !pp.type.isAnonymous || Cp(pp)))
    }
    const Ep = new WeakMap;

    function Xp(pp, ip) {
      if (!pp.isAnonymous || ip instanceof wp || ip.type != pp) return 1;
      let cp = Ep.get(ip);
      if (null == cp) {
        cp = 1;
        for (let Op of ip.children) {
          if (Op.type != pp || !(Op instanceof yp)) {
            cp = 1;
            break
          }
          cp += Xp(pp, Op)
        }
        Ep.set(ip, cp)
      }
      return cp
    }

    function lp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
      let Yp = 0;
      for (let Wp = Op; Wp < op; Wp++) Yp += Xp(pp, ip[Wp]);
      let Dp = Math.ceil(1.5 * Yp / 8),
        Ap = [],
        Pp = [];
      return function ip(cp, Op, op, Sp, xp) {
        for (let Yp = op; Yp < Sp;) {
          let op = Yp,
            Wp = Op[Yp],
            yp = Xp(pp, cp[Yp]);
          for (Yp++; Yp < Sp; Yp++) {
            let ip = Xp(pp, cp[Yp]);
            if (yp + ip >= Dp) break;
            yp += ip
          }
          if (Yp == op + 1) {
            if (yp > Dp) {
              let pp = cp[op];
              ip(pp.children, pp.positions, 0, pp.children.length, Op[op] + xp);
              continue
            }
            Ap.push(cp[op])
          } else {
            let ip = Op[Yp - 1] + cp[Yp - 1].length - Wp;
            Ap.push(lp(pp, cp, Op, op, Yp, Wp, ip, null, Lp))
          }
          Pp.push(Wp + xp - Ip)
        }
      }(ip, cp, Op, op, 0), (xp || Lp)(Ap, Pp, Sp)
    }
    class Qp {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(pp, ip, cp) {
        let Op = this.map.get(pp);
        Op || this.map.set(pp, Op = new Map), Op.set(ip, cp)
      }
      getBuffer(pp, ip) {
        let cp = this.map.get(pp);
        return cp && cp.get(ip)
      }
      set(pp, ip) {
        pp instanceof mp ? this.setBuffer(pp.context.buffer, pp.index, ip) : pp instanceof dp && this.map.set(pp.tree, ip)
      }
      get(pp) {
        return pp instanceof mp ? this.getBuffer(pp.context.buffer, pp.index) : pp instanceof dp ? this.map.get(pp.tree) : void 0
      }
      cursorSet(pp, ip) {
        pp.buffer ? this.setBuffer(pp.buffer.buffer, pp.index, ip) : this.map.set(pp.tree, ip)
      }
      cursorGet(pp) {
        return pp.buffer ? this.getBuffer(pp.buffer.buffer, pp.index) : this.map.get(pp.tree)
      }
    }
    class Jp {
      constructor(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = pp, this.to = ip, this.tree = cp, this.offset = Op, this.open = (op ? 1 : 0) | (Ip ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = [new Jp(0, pp.length, pp, 0, !1, cp)];
        for (let op of ip) op.to > pp.length && Op.push(op);
        return Op
      }
      static applyChanges(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!ip.length) return pp;
        let Op = [],
          op = 1,
          Ip = pp.length ? pp[0] : null;
        for (let Sp = 0, xp = 0, Lp = 0;; Sp++) {
          let Yp = Sp < ip.length ? ip[Sp] : null,
            Dp = Yp ? Yp.fromA : 1e9;
          if (Dp - xp >= cp)
            for (; Ip && Ip.from < Dp;) {
              let ip = Ip;
              if (xp >= ip.from || Dp <= ip.to || Lp) {
                let pp = Math.max(ip.from, xp) - Lp,
                  cp = Math.min(ip.to, Dp) - Lp;
                ip = pp >= cp ? null : new Jp(pp, cp, ip.tree, ip.offset + Lp, Sp > 0, !!Yp)
              }
              if (ip && Op.push(ip), Ip.to > Dp) break;
              Ip = op < pp.length ? pp[op++] : null
            }
          if (!Yp) break;
          xp = Yp.toA, Lp = Yp.toA - Yp.toB
        }
        return Op
      }
    }
    class Bp {
      startParse(pp, ip, cp) {
        return "string" == typeof pp && (pp = new Np(pp)), cp = cp ? cp.length ? cp.map((pp => new Ip(pp.from, pp.to))) : [new Ip(0, 0)] : [new Ip(0, pp.length)], this.createParse(pp, ip || [], cp)
      }
      parse(pp, ip, cp) {
        let Op = this.startParse(pp, ip, cp);
        for (;;) {
          let pp = Op.advance();
          if (pp) return pp
        }
      }
    }
    class Np {
      constructor(pp) {
        this.string = pp
      }
      get length() {
        return this.string.length
      }
      chunk(pp) {
        return this.string.slice(pp)
      }
      get lineChunks() {
        return !1
      }
      read(pp, ip) {
        return this.string.slice(pp, ip)
      }
    }
    new Sp({
      perNode: !0
    })
  },
  41583: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp,
      e: () => Lp,
      i: () => Ap,
      l: () => Ep
    });
    var Op = cp(41575);
    let op = 0;
    class Ip {
      constructor(pp, ip, cp, Op) {
        this.name = pp, this.set = ip, this.base = cp, this.modified = Op, this.id = op++
      }
      toString() {
        let {
          name: pp
        } = this;
        for (let ip of this.modified) ip.name && (pp = `${ip.name}(${pp})`);
        return pp
      }
      static define(pp, ip) {
        let cp = "string" == typeof pp ? pp : "?";
        if (pp instanceof Ip && (ip = pp), null === ip || void 0 === ip ? void 0 : ip.base) throw new Error("Can not derive from a modified tag");
        let Op = new Ip(cp, [], null, []);
        if (Op.set.push(Op), ip)
          for (let op of ip.set) Op.set.push(op);
        return Op
      }
      static defineModifier(pp) {
        let ip = new xp(pp);
        return pp => pp.modified.indexOf(ip) > -1 ? pp : xp.get(pp.base || pp, pp.modified.concat(ip).sort(((pp, ip) => pp.id - ip.id)))
      }
    }
    let Sp = 0;
    class xp {
      constructor(pp) {
        this.name = pp, this.instances = [], this.id = Sp++
      }
      static get(pp, ip) {
        if (!ip.length) return pp;
        let cp = ip[0].instances.find((cp => {
          return cp.base == pp && (Op = ip, op = cp.modified, Op.length == op.length && Op.every(((pp, ip) => pp == op[ip])));
          var Op, op
        }));
        if (cp) return cp;
        let Op = [],
          op = new Ip(pp.name, Op, pp, ip);
        for (let Ip of ip) Ip.instances.push(op);
        let Sp = function(pp) {
          let ip = [
            []
          ];
          for (let cp = 0; cp < pp.length; cp++)
            for (let Op = 0, op = ip.length; Op < op; Op++) ip.push(ip[Op].concat(pp[cp]));
          return ip.sort(((pp, ip) => ip.length - pp.length))
        }(ip);
        for (let Ip of pp.set)
          if (!Ip.modified.length)
            for (let pp of Sp) Op.push(xp.get(Ip, pp));
        return op
      }
    }

    function Lp(pp) {
      let ip = Object.create(null);
      for (let cp in pp) {
        let Op = pp[cp];
        Array.isArray(Op) || (Op = [Op]);
        for (let pp of cp.split(" "))
          if (pp) {
            let cp = [],
              op = 2,
              Ip = pp;
            for (let ip = 0;;) {
              if ("..." == Ip && ip > 0 && ip + 3 == pp.length) {
                op = 1;
                break
              }
              let Op = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Ip);
              if (!Op) throw new RangeError("Invalid path: " + pp);
              if (cp.push("*" == Op[0] ? "" : '"' == Op[0][0] ? JSON.parse(Op[0]) : Op[0]), ip += Op[0].length, ip == pp.length) break;
              let Sp = pp[ip++];
              if (ip == pp.length && "!" == Sp) {
                op = 0;
                break
              }
              if ("/" != Sp) throw new RangeError("Invalid path: " + pp);
              Ip = pp.slice(ip)
            }
            let Sp = cp.length - 1,
              xp = cp[Sp];
            if (!xp) throw new RangeError("Invalid path: " + pp);
            let Lp = new Dp(Op, op, Sp > 0 ? cp.slice(0, Sp) : null);
            ip[xp] = Lp.sort(ip[xp])
          }
      }
      return Yp.add(ip)
    }
    const Yp = new Op.j({
      combine(pp, ip) {
        let cp, Op, op;
        for (; pp || ip;) {
          if (!pp || ip && pp.depth >= ip.depth ? (op = ip, ip = ip.next) : (op = pp, pp = pp.next), cp && cp.mode == op.mode && !op.context && !cp.context) continue;
          let Ip = new Dp(op.tags, op.mode, op.context);
          cp ? cp.next = Ip : Op = Ip, cp = Ip
        }
        return Op
      }
    });
    class Dp {
      constructor(pp, ip, cp, Op) {
        this.tags = pp, this.mode = ip, this.context = cp, this.next = Op
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(pp) {
        return !pp || pp.depth < this.depth ? (this.next = pp, this) : (pp.next = this.sort(pp.next), pp)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Ap(pp, ip) {
      let cp = Object.create(null);
      for (let Ip of pp)
        if (Array.isArray(Ip.tag))
          for (let pp of Ip.tag) cp[pp.id] = Ip.class;
        else cp[Ip.tag.id] = Ip.class;
      let {
        scope: Op,
        all: op = null
      } = ip || {};
      return {
        style: pp => {
          let ip = op;
          for (let Op of pp)
            for (let pp of Op.set) {
              let Op = cp[pp.id];
              if (Op) {
                ip = ip ? ip + " " + Op : Op;
                break
              }
            }
          return ip
        },
        scope: Op
      }
    }

    function Pp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pp.length,
        Ip = new Wp(Op, Array.isArray(ip) ? ip : [ip], cp);
      Ip.highlightRange(pp.cursor(), Op, op, "", Ip.highlighters), Ip.flush(op)
    }
    Dp.empty = new Dp([], 2, null);
    class Wp {
      constructor(pp, ip, cp) {
        this.at = pp, this.highlighters = ip, this.span = cp, this.class = ""
      }
      startSpan(pp, ip) {
        ip != this.class && (this.flush(pp), pp > this.at && (this.at = pp), this.class = ip)
      }
      flush(pp) {
        pp > this.at && this.class && this.span(this.at, pp, this.class)
      }
      highlightRange(pp, ip, cp, op, Ip) {
        let {
          type: Sp,
          from: xp,
          to: Lp
        } = pp;
        if (xp >= cp || Lp <= ip) return;
        Sp.isTop && (Ip = this.highlighters.filter((pp => !pp.scope || pp.scope(Sp))));
        let Ap = op,
          Pp = function(pp) {
            let ip = pp.type.prop(Yp);
            for (; ip && ip.context && !pp.matchContext(ip.context);) ip = ip.next;
            return ip || null
          }(pp) || Dp.empty,
          Wp = function(pp, ip) {
            let cp = null;
            for (let Op of pp) {
              let pp = Op.style(ip);
              pp && (cp = cp ? cp + " " + pp : pp)
            }
            return cp
          }(Ip, Pp.tags);
        if (Wp && (Ap && (Ap += " "), Ap += Wp, 1 == Pp.mode && (op += (op ? " " : "") + Wp)), this.startSpan(Math.max(ip, xp), Ap), Pp.opaque) return;
        let yp = pp.tree && pp.tree.prop(Op.j.mounted);
        if (yp && yp.overlay) {
          let Op = pp.node.enter(yp.overlay[0].from + xp, 1),
            Sp = this.highlighters.filter((pp => !pp.scope || pp.scope(yp.tree.type))),
            Yp = pp.firstChild();
          for (let Dp = 0, Pp = xp;; Dp++) {
            let Wp = Dp < yp.overlay.length ? yp.overlay[Dp] : null,
              Up = Wp ? Wp.from + xp : Lp,
              wp = Math.max(ip, Pp),
              vp = Math.min(cp, Up);
            if (wp < vp && Yp)
              for (; pp.from < vp && (this.highlightRange(pp, wp, vp, op, Ip), this.startSpan(Math.min(vp, pp.to), Ap), !(pp.to >= Up) && pp.nextSibling()););
            if (!Wp || Up > cp) break;
            Pp = Wp.to + xp, Pp > ip && (this.highlightRange(Op.cursor(), Math.max(ip, Wp.from + xp), Math.min(cp, Pp), "", Sp), this.startSpan(Math.min(cp, Pp), Ap))
          }
          Yp && pp.parent()
        } else if (pp.firstChild()) {
          yp && (op = "");
          do {
            if (!(pp.to <= ip)) {
              if (pp.from >= cp) break;
              this.highlightRange(pp, ip, cp, op, Ip), this.startSpan(Math.min(cp, pp.to), Ap)
            }
          } while (pp.nextSibling());
          pp.parent()
        }
      }
    }
    const yp = Ip.define,
      Up = yp(),
      wp = yp(),
      vp = yp(wp),
      tp = yp(wp),
      Hp = yp(),
      dp = yp(Hp),
      ep = yp(Hp),
      jp = yp(),
      kp = yp(jp),
      mp = yp(),
      Rp = yp(),
      qp = yp(),
      Mp = yp(qp),
      Cp = yp(),
      Ep = {
        comment: Up,
        lineComment: yp(Up),
        blockComment: yp(Up),
        docComment: yp(Up),
        name: wp,
        variableName: yp(wp),
        typeName: vp,
        tagName: yp(vp),
        propertyName: tp,
        attributeName: yp(tp),
        className: yp(wp),
        labelName: yp(wp),
        namespace: yp(wp),
        macroName: yp(wp),
        literal: Hp,
        string: dp,
        docString: yp(dp),
        character: yp(dp),
        attributeValue: yp(dp),
        number: ep,
        integer: yp(ep),
        float: yp(ep),
        bool: yp(Hp),
        regexp: yp(Hp),
        escape: yp(Hp),
        color: yp(Hp),
        url: yp(Hp),
        keyword: mp,
        self: yp(mp),
        null: yp(mp),
        atom: yp(mp),
        unit: yp(mp),
        modifier: yp(mp),
        operatorKeyword: yp(mp),
        controlKeyword: yp(mp),
        definitionKeyword: yp(mp),
        moduleKeyword: yp(mp),
        operator: Rp,
        derefOperator: yp(Rp),
        arithmeticOperator: yp(Rp),
        logicOperator: yp(Rp),
        bitwiseOperator: yp(Rp),
        compareOperator: yp(Rp),
        updateOperator: yp(Rp),
        definitionOperator: yp(Rp),
        typeOperator: yp(Rp),
        controlOperator: yp(Rp),
        punctuation: qp,
        separator: yp(qp),
        bracket: Mp,
        angleBracket: yp(Mp),
        squareBracket: yp(Mp),
        paren: yp(Mp),
        brace: yp(Mp),
        content: jp,
        heading: kp,
        heading1: yp(kp),
        heading2: yp(kp),
        heading3: yp(kp),
        heading4: yp(kp),
        heading5: yp(kp),
        heading6: yp(kp),
        contentSeparator: yp(jp),
        list: yp(jp),
        quote: yp(jp),
        emphasis: yp(jp),
        strong: yp(jp),
        link: yp(jp),
        monospace: yp(jp),
        strikethrough: yp(jp),
        inserted: yp(),
        deleted: yp(),
        changed: yp(),
        invalid: yp(),
        meta: Cp,
        documentMeta: yp(Cp),
        annotation: yp(Cp),
        processingInstruction: yp(Cp),
        definition: Ip.defineModifier("definition"),
        constant: Ip.defineModifier("constant"),
        function: Ip.defineModifier("function"),
        standard: Ip.defineModifier("standard"),
        local: Ip.defineModifier("local"),
        special: Ip.defineModifier("special")
      };
    for (let Xp in Ep) {
      let pp = Ep[Xp];
      pp instanceof Ip && (pp.name = Xp)
    }
    Ap([{
      tag: Ep.link,
      class: "tok-link"
    }, {
      tag: Ep.heading,
      class: "tok-heading"
    }, {
      tag: Ep.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Ep.strong,
      class: "tok-strong"
    }, {
      tag: Ep.keyword,
      class: "tok-keyword"
    }, {
      tag: Ep.atom,
      class: "tok-atom"
    }, {
      tag: Ep.bool,
      class: "tok-bool"
    }, {
      tag: Ep.url,
      class: "tok-url"
    }, {
      tag: Ep.labelName,
      class: "tok-labelName"
    }, {
      tag: Ep.inserted,
      class: "tok-inserted"
    }, {
      tag: Ep.deleted,
      class: "tok-deleted"
    }, {
      tag: Ep.literal,
      class: "tok-literal"
    }, {
      tag: Ep.string,
      class: "tok-string"
    }, {
      tag: Ep.number,
      class: "tok-number"
    }, {
      tag: [Ep.regexp, Ep.escape, Ep.special(Ep.string)],
      class: "tok-string2"
    }, {
      tag: Ep.variableName,
      class: "tok-variableName"
    }, {
      tag: Ep.local(Ep.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Ep.definition(Ep.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Ep.special(Ep.variableName),
      class: "tok-variableName2"
    }, {
      tag: Ep.definition(Ep.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Ep.typeName,
      class: "tok-typeName"
    }, {
      tag: Ep.namespace,
      class: "tok-namespace"
    }, {
      tag: Ep.className,
      class: "tok-className"
    }, {
      tag: Ep.macroName,
      class: "tok-macroName"
    }, {
      tag: Ep.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Ep.operator,
      class: "tok-operator"
    }, {
      tag: Ep.comment,
      class: "tok-comment"
    }, {
      tag: Ep.meta,
      class: "tok-meta"
    }, {
      tag: Ep.invalid,
      class: "tok-invalid"
    }, {
      tag: Ep.punctuation,
      class: "tok-punctuation"
    }])
  },
  41595: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp.f,
      g: () => Sp.u,
      h: () => Sp.C,
      j: () => Sp.E,
      m: () => xp.k,
      n: () => Rc,
      p: () => xp.Q,
      q: () => xp.qb
    });
    var Op = cp(1405),
      op = cp(1400),
      Ip = cp(62),
      Sp = cp(41548),
      xp = cp(41556),
      Lp = cp(41566),
      Yp = cp(41575);

    function Dp(pp, ip) {
      return cp => {
        let {
          state: Op,
          dispatch: op
        } = cp;
        if (Op.readOnly) return !1;
        let Ip = pp(ip, Op);
        return !!Ip && (op(Op.update(Ip)), !0)
      }
    }
    const Ap = Dp(vp, 0),
      Pp = Dp(wp, 0),
      Wp = Dp(((pp, ip) => wp(pp, ip, function(pp) {
        let ip = [];
        for (let cp of pp.selection.By) {
          let Op = pp.doc.lineAt(cp.from),
            op = cp.to <= Op.to ? Op : pp.doc.lineAt(cp.to);
          op.from > Op.from && op.from == cp.to && (op = cp.to == Op.to + 1 ? Op : pp.doc.lineAt(cp.to - 1));
          let Ip = ip.length - 1;
          Ip >= 0 && ip[Ip].to > Op.from ? ip[Ip].to = op.to : ip.push({
            from: Op.from + /^\s*/.exec(Op.text)[0].length,
            to: op.to
          })
        }
        return ip
      }(ip))), 0);

    function yp(pp, ip) {
      let cp = pp.languageDataAt("commentTokens", ip, 1);
      return cp.length ? cp[0] : {}
    }
    const Up = 50;

    function wp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.selection.By,
        Op = cp.map((pp => yp(ip, pp.from).block));
      if (!Op.every((pp => pp))) return null;
      let op = cp.map(((pp, cp) => function(pp, ip, cp, Op) {
        let op, Ip, {
            open: Sp,
            close: xp
          } = ip,
          Lp = pp.sliceDoc(cp - Up, cp),
          Yp = pp.sliceDoc(Op, Op + Up),
          Dp = /\s*$/.exec(Lp)[0].length,
          Ap = /^\s*/.exec(Yp)[0].length,
          Pp = Lp.length - Dp;
        if (Lp.slice(Pp - Sp.length, Pp) == Sp && Yp.slice(Ap, Ap + xp.length) == xp) return {
          open: {
            pos: cp - Dp,
            margin: Dp && 1
          },
          close: {
            pos: Op + Ap,
            margin: Ap && 1
          }
        };
        Op - cp <= 2 * Up ? op = Ip = pp.sliceDoc(cp, Op) : (op = pp.sliceDoc(cp, cp + Up), Ip = pp.sliceDoc(Op - Up, Op));
        let Wp = /^\s*/.exec(op)[0].length,
          yp = /\s*$/.exec(Ip)[0].length,
          wp = Ip.length - yp - xp.length;
        return op.slice(Wp, Wp + Sp.length) == Sp && Ip.slice(wp, wp + xp.length) == xp ? {
          open: {
            pos: cp + Wp + Sp.length,
            margin: /\s/.test(op.charAt(Wp + Sp.length)) ? 1 : 0
          },
          close: {
            pos: Op - yp - xp.length,
            margin: /\s/.test(Ip.charAt(wp - 1)) ? 1 : 0
          }
        } : null
      }(ip, Op[cp], pp.from, pp.to)));
      if (2 != pp && !op.every((pp => pp))) return {
        changes: ip.changes(cp.map(((pp, ip) => op[ip] ? [] : [{
          from: pp.from,
          insert: Op[ip].open + " "
        }, {
          from: pp.to,
          insert: " " + Op[ip].close
        }])))
      };
      if (1 != pp && op.some((pp => pp))) {
        let pp = [];
        for (let ip, cp = 0; cp < op.length; cp++)
          if (ip = op[cp]) {
            let op = Op[cp],
              {
                open: Ip,
                close: Sp
              } = ip;
            pp.push({
              from: Ip.pos - op.open.length,
              to: Ip.pos + Ip.margin
            }, {
              from: Sp.pos - Sp.margin,
              to: Sp.pos + op.close.length
            })
          } return {
          changes: pp
        }
      }
      return null
    }

    function vp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.selection.By,
        Op = [],
        op = -1;
      pp: for (let {
          from: Ip,
          to: Sp
        }
        of cp) {
        let pp, cp = Op.length,
          xp = 1e9;
        for (let Lp = Ip; Lp <= Sp;) {
          let cp = ip.doc.lineAt(Lp);
          if (void 0 == pp && (pp = yp(ip, cp.from).line, !pp)) continue pp;
          if (cp.from > op && (Ip == Sp || Sp > cp.from)) {
            op = cp.from;
            let ip = /^\s*/.exec(cp.text)[0].length,
              Ip = ip == cp.length,
              Sp = cp.text.slice(ip, ip + pp.length) == pp ? ip : -1;
            ip < cp.text.length && ip < xp && (xp = ip), Op.push({
              line: cp,
              comment: Sp,
              token: pp,
              indent: ip,
              empty: Ip,
              single: !1
            })
          }
          Lp = cp.to + 1
        }
        if (xp < 1e9)
          for (let ip = cp; ip < Op.length; ip++) Op[ip].indent < Op[ip].line.text.length && (Op[ip].indent = xp);
        Op.length == cp + 1 && (Op[cp].single = !0)
      }
      if (2 != pp && Op.some((pp => pp.comment < 0 && (!pp.empty || pp.single)))) {
        let pp = [];
        for (let {
            line: ip,
            token: op,
            indent: Ip,
            empty: Sp,
            single: xp
          }
          of Op) !xp && Sp || pp.push({
          from: ip.from + Ip,
          insert: op + " "
        });
        let cp = ip.changes(pp);
        return {
          changes: cp,
          selection: ip.selection.map(cp, 1)
        }
      }
      if (1 != pp && Op.some((pp => pp.comment >= 0))) {
        let pp = [];
        for (let {
            line: ip,
            comment: cp,
            token: op
          }
          of Op)
          if (cp >= 0) {
            let Op = ip.from + cp,
              Ip = Op + op.length;
            " " == ip.text[Ip - ip.from] && Ip++, pp.push({
              from: Op,
              to: Ip
            })
          } return {
          changes: pp
        }
      }
      return null
    }
    const tp = Sp.c.define(),
      Hp = Sp.c.define(),
      dp = Sp.o.define(),
      ep = Sp.o.define({
        combine: pp => (0, Sp.P)(pp, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (pp, ip) => ip
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (pp, ip) => (cp, Op) => pp(cp, Op) || ip(cp, Op)
        })
      }),
      jp = Sp.E.define({
        create: () => bp.empty,
        update(pp, ip) {
          let cp = ip.state.facet(ep),
            Op = ip.annotation(tp);
          if (Op) {
            let op = Cp.fromTransaction(ip, Op.selection),
              Ip = Op.side,
              Sp = 0 == Ip ? pp.undone : pp.done;
            return Sp = op ? Ep(Sp, Sp.length, cp.minDepth, op) : Jp(Sp, ip.startState.selection), new bp(0 == Ip ? Op.rest : Sp, 0 == Ip ? Sp : Op.rest)
          }
          let op = ip.annotation(Hp);
          if ("full" != op && "before" != op || (pp = pp.isolate()), !1 === ip.annotation(Sp.I.addToHistory)) return ip.changes.empty ? pp : pp.addMapping(ip.changes.desc);
          let Ip = Cp.fromTransaction(ip),
            xp = ip.annotation(Sp.I.time),
            Lp = ip.annotation(Sp.I.userEvent);
          return Ip ? pp = pp.addChanges(Ip, xp, Lp, cp, ip) : ip.selection && (pp = pp.addSelection(ip.startState.selection, xp, Lp, cp.newGroupDelay)), "full" != op && "after" != op || (pp = pp.isolate()), pp
        },
        toJSON: pp => ({
          done: pp.done.map((pp => pp.toJSON())),
          undone: pp.undone.map((pp => pp.toJSON()))
        }),
        fromJSON: pp => new bp(pp.done.map(Cp.fromJSON), pp.undone.map(Cp.fromJSON))
      });

    function kp(pp, ip) {
      return function(cp) {
        let {
          state: Op,
          dispatch: op
        } = cp;
        if (!ip && Op.readOnly) return !1;
        let Ip = Op.field(jp, !1);
        if (!Ip) return !1;
        let Sp = Ip.pop(pp, Op, ip);
        return !!Sp && (op(Sp), !0)
      }
    }
    const mp = kp(0, !1),
      Rp = kp(1, !1),
      qp = kp(0, !0),
      Mp = kp(1, !0);
    class Cp {
      constructor(pp, ip, cp, Op, op) {
        this.changes = pp, this.effects = ip, this.mapped = cp, this.startSelection = Op, this.selectionsAfter = op
      }
      setSelAfter(pp) {
        return new Cp(this.changes, this.effects, this.mapped, this.startSelection, pp)
      }
      toJSON() {
        var pp, ip, cp;
        return {
          changes: null === (pp = this.changes) || void 0 === pp ? void 0 : pp.toJSON(),
          mapped: null === (ip = this.mapped) || void 0 === ip ? void 0 : ip.toJSON(),
          startSelection: null === (cp = this.startSelection) || void 0 === cp ? void 0 : cp.toJSON(),
          selectionsAfter: this.selectionsAfter.map((pp => pp.toJSON()))
        }
      }
      static fromJSON(pp) {
        return new Cp(pp.changes && Sp.ChangeSet.fromJSON(pp.changes), [], pp.mapped && Sp.f.fromJSON(pp.mapped), pp.startSelection && Sp.l.fromJSON(pp.startSelection), pp.selectionsAfter.map(Sp.l.fromJSON))
      }
      static fromTransaction(pp, ip) {
        let cp = lp;
        for (let Op of pp.startState.facet(dp)) {
          let ip = Op(pp);
          ip.length && (cp = cp.concat(ip))
        }
        return !cp.length && pp.changes.empty ? null : new Cp(pp.changes.invert(pp.startState.doc), cp, void 0, ip || pp.startState.selection, lp)
      }
      static selection(pp) {
        return new Cp(void 0, lp, void 0, void 0, pp)
      }
    }

    function Ep(pp, ip, cp, Op) {
      let op = ip + 1 > cp + 20 ? ip - cp - 1 : 0,
        Ip = pp.slice(op, ip);
      return Ip.push(Op), Ip
    }

    function Xp(pp, ip) {
      return pp.length ? ip.length ? pp.concat(ip) : pp : ip
    }
    const lp = [],
      Qp = 200;

    function Jp(pp, ip) {
      if (pp.length) {
        let cp = pp[pp.length - 1],
          Op = cp.selectionsAfter.slice(Math.max(0, cp.selectionsAfter.length - Qp));
        return Op.length && Op[Op.length - 1].eq(ip) ? pp : (Op.push(ip), Ep(pp, pp.length - 1, 1e9, cp.setSelAfter(Op)))
      }
      return [Cp.selection([ip])]
    }

    function Bp(pp) {
      let ip = pp[pp.length - 1],
        cp = pp.slice();
      return cp[pp.length - 1] = ip.setSelAfter(ip.selectionsAfter.slice(0, ip.selectionsAfter.length - 1)), cp
    }

    function Np(pp, ip) {
      if (!pp.length) return pp;
      let cp = pp.length,
        Op = lp;
      for (; cp;) {
        let op = Tp(pp[cp - 1], ip, Op);
        if (op.changes && !op.changes.empty || op.effects.length) {
          let ip = pp.slice(0, cp);
          return ip[cp - 1] = op, ip
        }
        ip = op.mapped, cp--, Op = op.selectionsAfter
      }
      return Op.length ? [Cp.selection(Op)] : lp
    }

    function Tp(pp, ip, cp) {
      let Op = Xp(pp.selectionsAfter.length ? pp.selectionsAfter.map((pp => pp.map(ip))) : lp, cp);
      if (!pp.changes) return Cp.selection(Op);
      let op = pp.changes.map(ip),
        Ip = ip.mapDesc(pp.changes, !0),
        xp = pp.mapped ? pp.mapped.composeDesc(Ip) : Ip;
      return new Cp(op, Sp.C.mapEffects(pp.effects, ip), xp, pp.startSelection.map(Ip), Op)
    }
    const fp = /^(input\.type|delete)($|\.)/;
    class bp {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = pp, this.undone = ip, this.prevTime = cp, this.prevUserEvent = Op
      }
      isolate() {
        return this.prevTime ? new bp(this.done, this.undone) : this
      }
      addChanges(pp, ip, cp, Op, op) {
        let Ip = this.done,
          xp = Ip[Ip.length - 1];
        return Ip = xp && xp.changes && !xp.changes.empty && pp.changes && (!cp || fp.test(cp)) && (!xp.selectionsAfter.length && ip - this.prevTime < Op.newGroupDelay && Op.joinToEvent(op, function(pp, ip) {
          let cp = [],
            Op = !1;
          return pp.iterChangedRanges(((pp, ip) => cp.push(pp, ip))), ip.iterChangedRanges(((pp, ip, op, Ip) => {
            for (let Sp = 0; Sp < cp.length;) {
              let pp = cp[Sp++],
                ip = cp[Sp++];
              Ip >= pp && op <= ip && (Op = !0)
            }
          })), Op
        }(xp.changes, pp.changes)) || "input.type.compose" == cp) ? Ep(Ip, Ip.length - 1, Op.minDepth, new Cp(pp.changes.compose(xp.changes), Xp(Sp.C.mapEffects(pp.effects, xp.changes), xp.effects), xp.mapped, xp.startSelection, lp)) : Ep(Ip, Ip.length, Op.minDepth, pp), new bp(Ip, lp, ip, cp)
      }
      addSelection(pp, ip, cp, Op) {
        let op = this.done.length ? this.done[this.done.length - 1].selectionsAfter : lp;
        return op.length > 0 && ip - this.prevTime < Op && cp == this.prevUserEvent && cp && /^select($|\.)/.test(cp) && (Ip = op[op.length - 1], Sp = pp, Ip.By.length == Sp.By.length && 0 === Ip.By.filter(((pp, ip) => pp.empty != Sp.By[ip].empty)).length) ? this : new bp(Jp(this.done, pp), this.undone, ip, cp);
        var Ip, Sp
      }
      addMapping(pp) {
        return new bp(Np(this.done, pp), Np(this.undone, pp), this.prevTime, this.prevUserEvent)
      }
      pop(pp, ip, cp) {
        let Op = 0 == pp ? this.done : this.undone;
        if (0 == Op.length) return null;
        let op = Op[Op.length - 1],
          Ip = op.selectionsAfter[0] || (op.startSelection ? op.startSelection.map(op.changes.invertedDesc, 1) : ip.selection);
        if (cp && op.selectionsAfter.length) return ip.update({
          selection: op.selectionsAfter[op.selectionsAfter.length - 1],
          annotations: tp.of({
            side: pp,
            rest: Bp(Op),
            selection: Ip
          }),
          userEvent: 0 == pp ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (op.changes) {
          let cp = 1 == Op.length ? lp : Op.slice(0, Op.length - 1);
          return op.mapped && (cp = Np(cp, op.mapped)), ip.update({
            changes: op.changes,
            selection: op.startSelection,
            effects: op.effects,
            annotations: tp.of({
              side: pp,
              rest: cp,
              selection: Ip
            }),
            filter: !1,
            userEvent: 0 == pp ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    bp.empty = new bp(lp, lp);
    const hp = [{
      key: "Mod-z",
      run: mp,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Rp,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Rp,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: qp,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Mp,
      preventDefault: !0
    }];

    function ap(pp, ip) {
      return Sp.l.create(pp.By.map(ip), pp.mainIndex)
    }

    function np(pp, ip) {
      return pp.update({
        selection: ip,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Fp(pp, ip) {
      let {
        state: cp,
        dispatch: Op
      } = pp, op = ap(cp.selection, ip);
      return !op.eq(cp.selection, !0) && (Op(np(cp, op)), !0)
    }

    function gp(pp, ip) {
      return Sp.l.cursor(ip ? pp.to : pp.from)
    }

    function Gp(pp, ip) {
      return Fp(pp, (cp => cp.empty ? pp.moveByChar(cp, ip) : gp(cp, ip)))
    }

    function rp(pp) {
      return pp.textDirectionAt(pp.state.selection.main.head) == xp.e.LTR
    }
    const Zp = pp => Gp(pp, !rp(pp)),
      zp = pp => Gp(pp, rp(pp));

    function sp(pp, ip) {
      return Fp(pp, (cp => cp.empty ? pp.moveByGroup(cp, ip) : gp(cp, ip)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Kp(pp, ip, cp) {
      if (ip.type.prop(cp)) return !0;
      let Op = ip.to - ip.from;
      return Op && (Op > 2 || /[^\s,.;:]/.test(pp.sliceDoc(ip.from, ip.to))) || ip.firstChild
    }

    function Vp(pp, ip, cp) {
      let Op, op, Ip = (0, Lp.kb)(pp).resolveInner(ip.head),
        xp = cp ? Yp.j.closedBy : Yp.j.openedBy;
      for (let Sp = ip.head;;) {
        let ip = cp ? Ip.childAfter(Sp) : Ip.childBefore(Sp);
        if (!ip) break;
        Kp(pp, ip, xp) ? Ip = ip : Sp = cp ? ip.to : ip.from
      }
      return op = Ip.type.prop(xp) && (Op = cp ? (0, Lp._)(pp, Ip.from, 1) : (0, Lp._)(pp, Ip.to, -1)) && Op.matched ? cp ? Op.end.to : Op.end.from : cp ? Ip.to : Ip.from, Sp.l.cursor(op, cp ? -1 : 1)
    }

    function ii(pp, ip) {
      return Fp(pp, (cp => {
        if (!cp.empty) return gp(cp, ip);
        let Op = pp.moveVertically(cp, ip);
        return Op.head != cp.head ? Op : pp.moveToLineBoundary(cp, ip)
      }))
    }
    const ci = pp => ii(pp, !1),
      Oi = pp => ii(pp, !0);

    function oi(pp) {
      let ip, cp = pp.scrollDOM.clientHeight < pp.scrollDOM.scrollHeight - 2,
        Op = 0,
        op = 0;
      if (cp) {
        for (let ip of pp.state.facet(xp.f.scrollMargins)) {
          let cp = ip(pp);
          (null === cp || void 0 === cp ? void 0 : cp.top) && (Op = Math.max(null === cp || void 0 === cp ? void 0 : cp.top, Op)), (null === cp || void 0 === cp ? void 0 : cp.bottom) && (op = Math.max(null === cp || void 0 === cp ? void 0 : cp.bottom, op))
        }
        ip = pp.scrollDOM.clientHeight - Op - op
      } else ip = (pp.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Op,
        marginBottom: op,
        selfScroll: cp,
        height: Math.max(pp.defaultLineHeight, ip - 5)
      }
    }

    function Ii(pp, ip) {
      let cp, Op = oi(pp),
        {
          state: op
        } = pp,
        Ip = ap(op.selection, (cp => cp.empty ? pp.moveVertically(cp, ip, Op.height) : gp(cp, ip)));
      if (Ip.eq(op.selection)) return !1;
      if (Op.selfScroll) {
        let ip = pp.coordsAtPos(op.selection.main.head),
          Sp = pp.scrollDOM.getBoundingClientRect(),
          Lp = Sp.top + Op.marginTop,
          Yp = Sp.bottom - Op.marginBottom;
        ip && ip.top > Lp && ip.bottom < Yp && (cp = xp.f.scrollIntoView(Ip.main.head, {
          y: "start",
          yMargin: ip.top - Lp
        }))
      }
      return pp.dispatch(np(op, Ip), {
        effects: cp
      }), !0
    }
    const Si = pp => Ii(pp, !1),
      xi = pp => Ii(pp, !0);

    function Li(pp, ip, cp) {
      let Op = pp.lineBlockAt(ip.head),
        op = pp.moveToLineBoundary(ip, cp);
      if (op.head == ip.head && op.head != (cp ? Op.to : Op.from) && (op = pp.moveToLineBoundary(ip, cp, !1)), !cp && op.head == Op.from && Op.length) {
        let cp = /^\s*/.exec(pp.state.sliceDoc(Op.from, Math.min(Op.from + 100, Op.to)))[0].length;
        cp && ip.head != Op.from + cp && (op = Sp.l.cursor(Op.from + cp))
      }
      return op
    }

    function Yi(pp, ip, cp) {
      let Op = !1,
        op = ap(pp.selection, (ip => {
          let op = (0, Lp._)(pp, ip.head, -1) || (0, Lp._)(pp, ip.head, 1) || ip.head > 0 && (0, Lp._)(pp, ip.head - 1, 1) || ip.head < pp.doc.length && (0, Lp._)(pp, ip.head + 1, -1);
          if (!op || !op.end) return ip;
          Op = !0;
          let Ip = op.start.from == ip.head ? op.end.to : op.end.from;
          return cp ? Sp.l.range(ip.anchor, Ip) : Sp.l.cursor(Ip)
        }));
      return !!Op && (ip(np(pp, op)), !0)
    }

    function Di(pp, ip) {
      let cp = ap(pp.state.selection, (pp => {
        let cp = ip(pp);
        return Sp.l.range(pp.anchor, cp.head, cp.goalColumn, cp.bidiLevel || void 0, cp.assoc)
      }));
      return !cp.eq(pp.state.selection) && (pp.dispatch(np(pp.state, cp)), !0)
    }

    function Ai(pp, ip) {
      return Di(pp, (cp => pp.moveByChar(cp, ip)))
    }
    const Pi = pp => Ai(pp, !rp(pp)),
      Wi = pp => Ai(pp, rp(pp));

    function yi(pp, ip) {
      return Di(pp, (cp => pp.moveByGroup(cp, ip)))
    }

    function Ui(pp, ip) {
      return Di(pp, (cp => pp.moveVertically(cp, ip)))
    }
    const wi = pp => Ui(pp, !1),
      vi = pp => Ui(pp, !0);

    function ti(pp, ip) {
      return Di(pp, (cp => pp.moveVertically(cp, ip, oi(pp).height)))
    }
    const Hi = pp => ti(pp, !1),
      di = pp => ti(pp, !0),
      ei = pp => {
        let {
          state: ip,
          dispatch: cp
        } = pp;
        return cp(np(ip, {
          anchor: 0
        })), !0
      },
      ui = pp => {
        let {
          state: ip,
          dispatch: cp
        } = pp;
        return cp(np(ip, {
          anchor: ip.doc.length
        })), !0
      },
      ji = pp => {
        let {
          state: ip,
          dispatch: cp
        } = pp;
        return cp(np(ip, {
          anchor: ip.selection.main.anchor,
          head: 0
        })), !0
      },
      ki = pp => {
        let {
          state: ip,
          dispatch: cp
        } = pp;
        return cp(np(ip, {
          anchor: ip.selection.main.anchor,
          head: ip.doc.length
        })), !0
      };

    function mi(pp, ip) {
      let {
        state: cp
      } = pp, Op = cp.selection, op = cp.selection.By.slice();
      for (let Ip of cp.selection.By) {
        let Op = cp.doc.lineAt(Ip.head);
        if (ip ? Op.to < pp.state.doc.length : Op.from > 0)
          for (let cp = Ip;;) {
            let Ip = pp.moveVertically(cp, ip);
            if (Ip.head < Op.from || Ip.head > Op.to) {
              op.some((pp => pp.head == Ip.head)) || op.push(Ip);
              break
            }
            if (Ip.head == cp.head) break;
            cp = Ip
          }
      }
      return op.length != Op.By.length && (pp.dispatch(np(cp, Sp.l.create(op, op.length - 1))), !0)
    }

    function Ri(pp, ip) {
      if (pp.state.readOnly) return !1;
      let cp = "delete.selection",
        {
          state: Op
        } = pp,
        op = Op.changeByRange((Op => {
          let {
            from: op,
            to: Ip
          } = Op;
          if (op == Ip) {
            let Sp = ip(Op);
            Sp < op ? (cp = "delete.backward", Sp = qi(pp, Sp, !1)) : Sp > op && (cp = "delete.forward", Sp = qi(pp, Sp, !0)), op = Math.min(op, Sp), Ip = Math.max(Ip, Sp)
          } else op = qi(pp, op, !1), Ip = qi(pp, Ip, !0);
          return op == Ip ? {
            range: Op
          } : {
            changes: {
              from: op,
              to: Ip
            },
            range: Sp.l.cursor(op, op < Op.head ? -1 : 1)
          }
        }));
      return !op.changes.empty && (pp.dispatch(Op.update(op, {
        scrollIntoView: !0,
        userEvent: cp,
        effects: "delete.selection" == cp ? xp.f.announce.of(Op.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function qi(pp, ip, cp) {
      if (pp instanceof xp.f)
        for (let Op of pp.state.facet(xp.f.atomicRanges).map((ip => ip(pp)))) Op.between(ip, ip, ((pp, Op) => {
          pp < ip && Op > ip && (ip = cp ? Op : pp)
        }));
      return ip
    }
    const Mi = (pp, ip, cp) => Ri(pp, (Op => {
        let op, Ip, xp = Op.from,
          {
            state: Yp
          } = pp,
          Dp = Yp.doc.lineAt(xp);
        if (cp && !ip && xp > Dp.from && xp < Dp.from + 200 && !/[^ \t]/.test(op = Dp.text.slice(0, xp - Dp.from))) {
          if ("\t" == op[op.length - 1]) return xp - 1;
          let pp = (0, Sp.Q)(op, Yp.tabSize) % (0, Lp.I)(Yp) || (0, Lp.I)(Yp);
          for (let ip = 0; ip < pp && " " == op[op.length - 1 - ip]; ip++) xp--;
          Ip = xp
        } else Ip = (0, Sp.S)(Dp.text, xp - Dp.from, ip, ip) + Dp.from, Ip == xp && Dp.number != (ip ? Yp.doc.lines : 1) ? Ip += ip ? 1 : -1 : !ip && /[\ufe00-\ufe0f]/.test(Dp.text.slice(Ip - Dp.from, xp - Dp.from)) && (Ip = (0, Sp.S)(Dp.text, Ip - Dp.from, !1, !1) + Dp.from);
        return Ip
      })),
      Ci = pp => Mi(pp, !1, !0),
      Ei = pp => Mi(pp, !0, !1),
      Xi = (pp, ip) => Ri(pp, (cp => {
        let Op = cp.head,
          {
            state: op
          } = pp,
          Ip = op.doc.lineAt(Op),
          xp = op.charCategorizer(Op);
        for (let pp = null;;) {
          if (Op == (ip ? Ip.to : Ip.from)) {
            Op == cp.head && Ip.number != (ip ? op.doc.lines : 1) && (Op += ip ? 1 : -1);
            break
          }
          let Lp = (0, Sp.S)(Ip.text, Op - Ip.from, ip) + Ip.from,
            Yp = Ip.text.slice(Math.min(Op, Lp) - Ip.from, Math.max(Op, Lp) - Ip.from),
            Dp = xp(Yp);
          if (null != pp && Dp != pp) break;
          " " == Yp && Op == cp.head || (pp = Dp), Op = Lp
        }
        return Op
      })),
      li = pp => Xi(pp, !1);

    function Qi(pp) {
      let ip = [],
        cp = -1;
      for (let Op of pp.selection.By) {
        let op = pp.doc.lineAt(Op.from),
          Ip = pp.doc.lineAt(Op.to);
        if (Op.empty || Op.to != Ip.from || (Ip = pp.doc.lineAt(Op.to - 1)), cp >= op.number) {
          let pp = ip[ip.length - 1];
          pp.to = Ip.to, pp.By.push(Op)
        } else ip.push({
          from: op.from,
          to: Ip.to,
          By: [Op]
        });
        cp = Ip.number + 1
      }
      return ip
    }

    function Ji(pp, ip, cp) {
      if (pp.readOnly) return !1;
      let Op = [],
        op = [];
      for (let Ip of Qi(pp)) {
        if (cp ? Ip.to == pp.doc.length : 0 == Ip.from) continue;
        let ip = pp.doc.lineAt(cp ? Ip.to + 1 : Ip.from - 1),
          xp = ip.length + 1;
        if (cp) {
          Op.push({
            from: Ip.to,
            to: ip.to
          }, {
            from: Ip.from,
            insert: ip.text + pp.lineBreak
          });
          for (let ip of Ip.By) op.push(Sp.l.range(Math.min(pp.doc.length, ip.anchor + xp), Math.min(pp.doc.length, ip.head + xp)))
        } else {
          Op.push({
            from: ip.from,
            to: Ip.from
          }, {
            from: Ip.to,
            insert: pp.lineBreak + ip.text
          });
          for (let pp of Ip.By) op.push(Sp.l.range(pp.anchor - xp, pp.head - xp))
        }
      }
      return !!Op.length && (ip(pp.update({
        changes: Op,
        scrollIntoView: !0,
        selection: Sp.l.create(op, pp.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Bi(pp, ip, cp) {
      if (pp.readOnly) return !1;
      let Op = [];
      for (let Ip of Qi(pp)) cp ? Op.push({
        from: Ip.from,
        insert: pp.doc.slice(Ip.from, Ip.to) + pp.lineBreak
      }) : Op.push({
        from: Ip.to,
        insert: pp.lineBreak + pp.doc.slice(Ip.from, Ip.to)
      });
      let op = pp.changes(Op);
      return ip(pp.update({
        changes: op,
        selection: pp.selection.map(op, cp ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Ni = Ti(!1);

    function Ti(pp) {
      return ip => {
        let {
          state: cp,
          dispatch: Op
        } = ip;
        if (cp.readOnly) return !1;
        let op = cp.changeByRange((ip => {
          let {
            from: Op,
            to: op
          } = ip, Ip = cp.doc.lineAt(Op), xp = !pp && Op == op && function(pp, ip) {
            if (/\(\)|\[\]|\{\}/.test(pp.sliceDoc(ip - 1, ip + 1))) return {
              from: ip,
              to: ip
            };
            let cp, Op = (0, Lp.kb)(pp).resolveInner(ip),
              op = Op.childBefore(ip),
              Ip = Op.childAfter(ip);
            return op && Ip && op.to <= ip && Ip.from >= ip && (cp = op.type.prop(Yp.j.closedBy)) && cp.indexOf(Ip.name) > -1 && pp.doc.lineAt(op.to).from == pp.doc.lineAt(Ip.from).from && !/\S/.test(pp.sliceDoc(op.to, Ip.from)) ? {
              from: op.to,
              to: Ip.from
            } : null
          }(cp, Op);
          pp && (Op = op = (op <= Ip.to ? Ip : cp.doc.lineAt(op)).to);
          let Dp = new Lp.d(cp, {
              simulateBreak: Op,
              simulateDoubleBreak: !!xp
            }),
            Ap = (0, Lp.J)(Dp, Op);
          for (null == Ap && (Ap = (0, Sp.Q)(/^\s*/.exec(cp.doc.lineAt(Op).text)[0], cp.tabSize)); op < Ip.to && /\s/.test(Ip.text[op - Ip.from]);) op++;
          xp ? ({
            from: Op,
            to: op
          } = xp) : Op > Ip.from && Op < Ip.from + 100 && !/\S/.test(Ip.text.slice(0, Op)) && (Op = Ip.from);
          let Pp = ["", (0, Lp.T)(cp, Ap)];
          return xp && Pp.push((0, Lp.T)(cp, Dp.lineIndent(Ip.from, -1))), {
            changes: {
              from: Op,
              to: op,
              insert: Sp.F.of(Pp)
            },
            range: Sp.l.cursor(Op + 1 + Pp[1].length)
          }
        }));
        return Op(cp.update(op, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function fi(pp, ip) {
      let cp = -1;
      return pp.changeByRange((Op => {
        let op = [];
        for (let Sp = Op.from; Sp <= Op.to;) {
          let Ip = pp.doc.lineAt(Sp);
          Ip.number > cp && (Op.empty || Op.to > Ip.from) && (ip(Ip, op, Op), cp = Ip.number), Sp = Ip.to + 1
        }
        let Ip = pp.changes(op);
        return {
          changes: op,
          range: Sp.l.range(Ip.mapPos(Op.anchor, 1), Ip.mapPos(Op.head, 1))
        }
      }))
    }
    const bi = pp => {
        let {
          state: ip,
          dispatch: cp
        } = pp;
        return !ip.readOnly && (cp(ip.update(fi(ip, ((pp, cp) => {
          cp.push({
            from: pp.from,
            insert: ip.facet(Lp.W)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      ai = pp => {
        let {
          state: ip,
          dispatch: cp
        } = pp;
        return !ip.readOnly && (cp(ip.update(fi(ip, ((pp, cp) => {
          let Op = /^\s*/.exec(pp.text)[0];
          if (!Op) return;
          let op = (0, Sp.Q)(Op, ip.tabSize),
            Ip = 0,
            xp = (0, Lp.T)(ip, Math.max(0, op - (0, Lp.I)(ip)));
          for (; Ip < Op.length && Ip < xp.length && Op.charCodeAt(Ip) == xp.charCodeAt(Ip);) Ip++;
          cp.push({
            from: pp.from + Ip,
            to: pp.from + Op.length,
            insert: xp.slice(Ip)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      ni = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: pp => Fp(pp, (ip => Vp(pp.state, ip, !rp(pp)))),
        shift: pp => Di(pp, (ip => Vp(pp.state, ip, !rp(pp))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: pp => Fp(pp, (ip => Vp(pp.state, ip, rp(pp)))),
        shift: pp => Di(pp, (ip => Vp(pp.state, ip, rp(pp))))
      }, {
        key: "Alt-ArrowUp",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          return Ji(ip, cp, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          return Bi(ip, cp, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          return Ji(ip, cp, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          return Bi(ip, cp, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: pp => mi(pp, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: pp => mi(pp, !0)
      }, {
        key: "Escape",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp, Op = ip.selection, op = null;
          return Op.By.length > 1 ? op = Sp.l.create([Op.main]) : Op.main.empty || (op = Sp.l.create([Sp.l.cursor(Op.main.head)])), !!op && (cp(np(ip, op)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Ti(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp, Op = Qi(ip).map((pp => {
            let {
              from: cp,
              to: Op
            } = pp;
            return Sp.l.range(cp, Math.min(Op + 1, ip.doc.length))
          }));
          return cp(ip.update({
            selection: Sp.l.create(Op),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp, Op = ap(ip.selection, (pp => {
            let cp = (0, Lp.kb)(ip),
              Op = cp.resolveStack(pp.from, 1);
            if (pp.empty) {
              let ip = cp.resolveStack(pp.from, -1);
              ip.node.from >= Op.node.from && ip.node.to <= Op.node.to && (Op = ip)
            }
            for (let ip = Op; ip; ip = ip.next) {
              let {
                node: cp
              } = ip;
              if ((cp.from < pp.from && cp.to >= pp.to || cp.to > pp.to && cp.from <= pp.from) && ip.next) return Sp.l.range(cp.to, cp.from)
            }
            return pp
          }));
          return !Op.eq(ip.selection) && (cp(np(ip, Op)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: ai
      }, {
        key: "Mod-]",
        run: bi
      }, {
        key: "Mod-Alt-\\",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          if (ip.readOnly) return !1;
          let Op = Object.create(null),
            op = new Lp.d(ip, {
              overrideIndentation: pp => {
                let ip = Op[pp];
                return null == ip ? -1 : ip
              }
            }),
            Ip = fi(ip, ((pp, cp, Ip) => {
              let Sp = (0, Lp.J)(op, pp.from);
              if (null == Sp) return;
              /\S/.test(pp.text) || (Sp = 0);
              let xp = /^\s*/.exec(pp.text)[0],
                Yp = (0, Lp.T)(ip, Sp);
              (xp != Yp || Ip.from < pp.from + xp.length) && (Op[pp.from] = Sp, cp.push({
                from: pp.from,
                to: pp.from + xp.length,
                insert: Yp
              }))
            }));
          return Ip.changes.empty || cp(ip.update(Ip, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: pp => {
          if (pp.state.readOnly) return !1;
          let {
            state: ip
          } = pp, cp = ip.changes(Qi(ip).map((pp => {
            let {
              from: cp,
              to: Op
            } = pp;
            return cp > 0 ? cp-- : Op < ip.doc.length && Op++, {
              from: cp,
              to: Op
            }
          }))), Op = ap(ip.selection, (ip => {
            let cp;
            if (pp.lineWrapping) {
              let Op = pp.lineBlockAt(ip.head),
                op = pp.coordsAtPos(ip.head, ip.assoc || 1);
              op && (cp = Op.bottom + pp.documentTop - op.bottom + pp.defaultLineHeight / 2)
            }
            return pp.moveVertically(ip, !0, cp)
          })).map(cp);
          return pp.dispatch({
            changes: cp,
            selection: Op,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          return Yi(ip, cp, !1)
        }
      }, {
        key: "Mod-/",
        run: pp => {
          let {
            state: ip
          } = pp, cp = ip.doc.lineAt(ip.selection.main.from), Op = yp(pp.state, cp.from);
          return Op.line ? Ap(pp) : !!Op.block && Wp(pp)
        }
      }, {
        key: "Alt-A",
        run: Pp
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: pp => (pp.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Zp,
        shift: Pi,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: pp => sp(pp, !rp(pp)),
        shift: pp => yi(pp, !rp(pp)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: pp => Fp(pp, (ip => Li(pp, ip, !rp(pp)))),
        shift: pp => Di(pp, (ip => Li(pp, ip, !rp(pp)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: zp,
        shift: Wi,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: pp => sp(pp, rp(pp)),
        shift: pp => yi(pp, rp(pp)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: pp => Fp(pp, (ip => Li(pp, ip, rp(pp)))),
        shift: pp => Di(pp, (ip => Li(pp, ip, rp(pp)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: ci,
        shift: wi,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: ei,
        shift: ji
      }, {
        mac: "Ctrl-ArrowUp",
        run: Si,
        shift: Hi
      }, {
        key: "ArrowDown",
        run: Oi,
        shift: vi,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: ui,
        shift: ki
      }, {
        mac: "Ctrl-ArrowDown",
        run: xi,
        shift: di
      }, {
        key: "PageUp",
        run: Si,
        shift: Hi
      }, {
        key: "PageDown",
        run: xi,
        shift: di
      }, {
        key: "Home",
        run: pp => Fp(pp, (ip => Li(pp, ip, !1))),
        shift: pp => Di(pp, (ip => Li(pp, ip, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: ei,
        shift: ji
      }, {
        key: "End",
        run: pp => Fp(pp, (ip => Li(pp, ip, !0))),
        shift: pp => Di(pp, (ip => Li(pp, ip, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: ui,
        shift: ki
      }, {
        key: "Enter",
        run: Ni,
        shift: Ni
      }, {
        key: "Mod-a",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          return cp(ip.update({
            selection: {
              anchor: 0,
              head: ip.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Ci,
        shift: Ci,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Ei,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: li,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: pp => Xi(pp, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: pp => Ri(pp, (ip => {
          let cp = pp.moveToLineBoundary(ip, !1).head;
          return ip.head > cp ? cp : Math.max(0, ip.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: pp => Ri(pp, (ip => {
          let cp = pp.moveToLineBoundary(ip, !0).head;
          return ip.head < cp ? cp : Math.min(pp.state.doc.length, ip.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Zp,
        shift: Pi,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: zp,
        shift: Wi
      }, {
        key: "Ctrl-p",
        run: ci,
        shift: wi
      }, {
        key: "Ctrl-n",
        run: Oi,
        shift: vi
      }, {
        key: "Ctrl-a",
        run: pp => Fp(pp, (ip => Sp.l.cursor(pp.lineBlockAt(ip.head).from, 1))),
        shift: pp => Di(pp, (ip => Sp.l.cursor(pp.lineBlockAt(ip.head).from)))
      }, {
        key: "Ctrl-e",
        run: pp => Fp(pp, (ip => Sp.l.cursor(pp.lineBlockAt(ip.head).to, -1))),
        shift: pp => Di(pp, (ip => Sp.l.cursor(pp.lineBlockAt(ip.head).to)))
      }, {
        key: "Ctrl-d",
        run: Ei
      }, {
        key: "Ctrl-h",
        run: Ci
      }, {
        key: "Ctrl-k",
        run: pp => Ri(pp, (ip => {
          let cp = pp.lineBlockAt(ip.head).to;
          return ip.head < cp ? cp : Math.min(pp.state.doc.length, ip.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: li
      }, {
        key: "Ctrl-o",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          if (ip.readOnly) return !1;
          let Op = ip.changeByRange((pp => ({
            changes: {
              from: pp.from,
              to: pp.to,
              insert: Sp.F.of(["", ""])
            },
            range: Sp.l.cursor(pp.from)
          })));
          return cp(ip.update(Op, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: pp => {
          let {
            state: ip,
            dispatch: cp
          } = pp;
          if (ip.readOnly) return !1;
          let Op = ip.changeByRange((pp => {
            if (!pp.empty || 0 == pp.from || pp.from == ip.doc.length) return {
              range: pp
            };
            let cp = pp.from,
              Op = ip.doc.lineAt(cp),
              op = cp == Op.from ? cp - 1 : (0, Sp.S)(Op.text, cp - Op.from, !1) + Op.from,
              Ip = cp == Op.to ? cp + 1 : (0, Sp.S)(Op.text, cp - Op.from, !0) + Op.from;
            return {
              changes: {
                from: op,
                to: Ip,
                insert: ip.doc.slice(cp, Ip).append(ip.doc.slice(op, cp))
              },
              range: Sp.l.cursor(Ip)
            }
          }));
          return !Op.changes.empty && (cp(ip.update(Op, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: xi
      }].map((pp => ({
        mac: pp.key,
        run: pp.run,
        shift: pp.shift
      }))))),
      Fi = {
        key: "Tab",
        run: bi,
        shift: ai
      };
    var gi = cp(41597),
      Gi = cp(41541),
      ri = cp(41603),
      Zi = function(pp) {
        void 0 === pp && (pp = {});
        var {
          crosshairCursor: ip = !1
        } = pp, cp = [];
        !1 !== pp.closeBracketsKeymap && (cp = cp.concat(Gi.g)), !1 !== pp.defaultKeymap && (cp = cp.concat(ni)), !1 !== pp.searchKeymap && (cp = cp.concat(gi.e)), !1 !== pp.historyKeymap && (cp = cp.concat(hp)), !1 !== pp.foldKeymap && (cp = cp.concat(Lp.D)), !1 !== pp.completionKeymap && (cp = cp.concat(Gi.o)), !1 !== pp.lintKeymap && (cp = cp.concat(ri.b));
        var Op = [];
        return !1 !== pp.lineNumbers && Op.push((0, xp.Y)()), !1 !== pp.highlightActiveLineGutter && Op.push((0, xp.F)()), !1 !== pp.highlightSpecialChars && Op.push((0, xp.N)()), !1 !== pp.history && Op.push(function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [jp, ep.of(pp), xp.f.domEventHandlers({
            beforeinput(pp, ip) {
              let cp = "historyUndo" == pp.inputType ? mp : "historyRedo" == pp.inputType ? Rp : null;
              return !!cp && (pp.preventDefault(), cp(ip))
            }
          })]
        }()), !1 !== pp.foldGutter && Op.push((0, Lp.x)()), !1 !== pp.drawSelection && Op.push((0, xp.q)()), !1 !== pp.dropCursor && Op.push((0, xp.u)()), !1 !== pp.allowMultipleSelections && Op.push(Sp.n.allowMultipleSelections.of(!0)), !1 !== pp.indentOnInput && Op.push((0, Lp.P)()), !1 !== pp.syntaxHighlighting && Op.push((0, Lp.eb)(Lp.n, {
          fallback: !0
        })), !1 !== pp.bracketMatching && Op.push((0, Lp.k)()), !1 !== pp.closeBrackets && Op.push((0, Gi.h)()), !1 !== pp.autocompletion && Op.push((0, Gi.c)()), !1 !== pp.rectangularSelection && Op.push((0, xp.db)()), !1 !== ip && Op.push((0, xp.p)()), !1 !== pp.highlightActiveLine && Op.push((0, xp.J)()), !1 !== pp.highlightSelectionMatches && Op.push((0, gi.d)()), pp.tabSize && "number" === typeof pp.tabSize && Op.push(Lp.W.of(" ".repeat(pp.tabSize))), Op.concat([xp.U.of(cp.flat())]).filter(Boolean)
      },
      zi = cp(41583);
    const si = "#e5c07b",
      Ki = "#e06c75",
      Vi = "#56b6c2",
      pc = "#ffffff",
      ic = "#abb2bf",
      cc = "#7d8799",
      Oc = "#61afef",
      oc = "#98c379",
      Ic = "#d19a66",
      Sc = "#c678dd",
      xc = "#21252b",
      Lc = "#2c313a",
      Yc = "#282c34",
      Dc = "#353a42",
      Ac = "#3E4451",
      Pc = "#528bff",
      Wc = xp.f.theme({
        "&": {
          color: ic,
          backgroundColor: Yc
        },
        ".cm-content": {
          caretColor: Pc
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Pc
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Ac
        },
        ".cm-panels": {
          backgroundColor: xc,
          color: ic
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
          backgroundColor: Yc,
          color: cc,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Lc
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Dc
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Dc,
          borderBottomColor: Dc
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Lc,
            color: ic
          }
        }
      }, {
        dark: !0
      }),
      yc = Lp.c.define([{
        tag: zi.l.keyword,
        color: Sc
      }, {
        tag: [zi.l.name, zi.l.deleted, zi.l.character, zi.l.propertyName, zi.l.macroName],
        color: Ki
      }, {
        tag: [zi.l.function(zi.l.variableName), zi.l.labelName],
        color: Oc
      }, {
        tag: [zi.l.color, zi.l.constant(zi.l.name), zi.l.standard(zi.l.name)],
        color: Ic
      }, {
        tag: [zi.l.definition(zi.l.name), zi.l.separator],
        color: ic
      }, {
        tag: [zi.l.typeName, zi.l.className, zi.l.number, zi.l.changed, zi.l.annotation, zi.l.modifier, zi.l.self, zi.l.namespace],
        color: si
      }, {
        tag: [zi.l.operator, zi.l.operatorKeyword, zi.l.url, zi.l.escape, zi.l.regexp, zi.l.link, zi.l.special(zi.l.string)],
        color: Vi
      }, {
        tag: [zi.l.meta, zi.l.comment],
        color: cc
      }, {
        tag: zi.l.strong,
        fontWeight: "bold"
      }, {
        tag: zi.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: zi.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: zi.l.link,
        color: cc,
        textDecoration: "underline"
      }, {
        tag: zi.l.heading,
        fontWeight: "bold",
        color: Ki
      }, {
        tag: [zi.l.atom, zi.l.bool, zi.l.special(zi.l.variableName)],
        color: Ic
      }, {
        tag: [zi.l.processingInstruction, zi.l.string, zi.l.inserted],
        color: oc
      }, {
        tag: zi.l.invalid,
        color: pc
      }]),
      Uc = [Wc, (0, Lp.eb)(yc)];
    var wc = xp.f.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class vc {
      constructor(pp, ip) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = ip, this.timeoutMS = ip, this.callbacks.push(pp)
      }
      LP() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var pp = this.callbacks.slice();
          this.callbacks.length = 0, pp.forEach((pp => {
            try {
              pp()
            } catch (ip) {
              console.error("TimeoutLatch callback error:", ip)
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
    class tc {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(pp) {
        this.latches.add(pp), this.start()
      }
      remove(pp) {
        this.latches.delete(pp), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((pp => {
            pp.LP(), pp.isDone && this.remove(pp)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Hc = null,
      dc = Sp.c.define(),
      ec = [];

    function uc(pp) {
      var {
        value: ip,
        selection: cp,
        onChange: Op,
        onStatistics: op,
        onCreateEditor: Lp,
        onUpdate: Yp,
        extensions: Dp = ec,
        autoFocus: Ap,
        theme: Pp = "light",
        height: Wp = null,
        minHeight: yp = null,
        maxHeight: Up = null,
        width: wp = null,
        minWidth: vp = null,
        maxWidth: tp = null,
        placeholder: Hp = "",
        editable: dp = !0,
        readOnly: ep = !1,
        indentWithTab: jp = !0,
        basicSetup: kp = !0,
        root: mp,
        initialState: Rp
      } = pp, [qp, Mp] = (0, Ip.useState)(), [Cp, Ep] = (0, Ip.useState)(), [Xp, lp] = (0, Ip.useState)(), Qp = (0, Ip.useState)((() => ({
        current: null
      })))[0], Jp = (0, Ip.useState)((() => ({
        current: null
      })))[0], Bp = xp.f.theme({
        "&": {
          height: Wp,
          minHeight: yp,
          maxHeight: Up,
          width: wp,
          minWidth: vp,
          maxWidth: tp
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Np = xp.f.updateListener.of((pp => {
        if (pp.docChanged && "function" === typeof Op && !pp.transactions.some((pp => pp.annotation(dc)))) {
          Qp.current ? Qp.current.reset() : (Qp.current = new vc((() => {
            if (Jp.current) {
              var pp = Jp.current;
              Jp.current = null, pp()
            }
            Qp.current = null
          }), 200), ("undefined" === typeof window ? new tc : (Hc || (Hc = new tc), Hc)).add(Qp.current));
          var ip = pp.state.doc.toString();
          Op(ip, pp)
        }
        op && op((pp => ({
          line: pp.state.doc.lineAt(pp.state.selection.main.from),
          lineCount: pp.state.doc.lines,
          lineBreak: pp.state.lineBreak,
          length: pp.state.doc.length,
          readOnly: pp.state.readOnly,
          tabSize: pp.state.tabSize,
          selection: pp.state.selection,
          selectionAsSingle: pp.state.selection.asSingle().main,
          By: pp.state.selection.By,
          selectionCode: pp.state.sliceDoc(pp.state.selection.main.from, pp.state.selection.main.to),
          selections: pp.state.selection.By.map((ip => pp.state.sliceDoc(ip.from, ip.to))),
          selectedText: pp.state.selection.By.some((pp => !pp.empty))
        }))(pp))
      })), Tp = function(pp) {
        void 0 === pp && (pp = {});
        var {
          indentWithTab: ip = !0,
          editable: cp = !0,
          readOnly: Op = !1,
          theme: op = "light",
          placeholder: Ip = "",
          basicSetup: Lp = !0
        } = pp, Yp = [];
        switch (ip && Yp.unshift(xp.U.of([Fi])), Lp && ("boolean" === typeof Lp ? Yp.unshift(Zi()) : Yp.unshift(Zi(Lp))), Ip && Yp.unshift((0, xp.$)(Ip)), op) {
          case "light":
            Yp.push(wc);
            break;
          case "dark":
            Yp.push(Uc);
            break;
          case "none":
            break;
          default:
            Yp.push(op)
        }
        return !1 === cp && Yp.push(xp.f.editable.of(!1)), Op && Yp.push(Sp.n.readOnly.of(!0)), [...Yp]
      }({
        theme: Pp,
        editable: dp,
        readOnly: ep,
        placeholder: Hp,
        indentWithTab: jp,
        basicSetup: kp
      }), fp = [Np, Bp, ...Tp];
      return Yp && "function" === typeof Yp && fp.push(xp.f.updateListener.of(Yp)), fp = fp.concat(Dp), (0, Ip.useLayoutEffect)((() => {
        if (qp && !Xp) {
          var pp = {
              doc: ip,
              selection: cp,
              extensions: fp
            },
            Op = Rp ? Sp.n.fromJSON(Rp.json, pp, Rp.fields) : Sp.n.create(pp);
          if (lp(Op), !Cp) {
            var op = new xp.f({
              state: Op,
              parent: qp,
              root: mp
            });
            Ep(op), Lp && Lp(op, Op)
          }
        }
        return () => {
          Cp && (lp(void 0), Ep(void 0))
        }
      }), [qp, Xp]), (0, Ip.useEffect)((() => {
        pp.container && Mp(pp.container)
      }), [pp.container]), (0, Ip.useEffect)((() => () => {
        Cp && (Cp.destroy(), Ep(void 0)), Qp.current && (Qp.current.cancel(), Qp.current = null)
      }), [Cp]), (0, Ip.useEffect)((() => {
        Ap && Cp && Cp.focus()
      }), [Ap, Cp]), (0, Ip.useEffect)((() => {
        Cp && Cp.dispatch({
          effects: Sp.C.reconfigure.of(fp)
        })
      }), [Pp, Dp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, Op, Yp]), (0, Ip.useEffect)((() => {
        if (void 0 !== ip) {
          var pp = Cp ? Cp.state.doc.toString() : "";
          if (Cp && ip !== pp) {
            var cp = () => {
              Cp && ip !== Cp.state.doc.toString() && Cp.dispatch({
                changes: {
                  from: 0,
                  to: Cp.state.doc.toString().length,
                  insert: ip || ""
                },
                annotations: [dc.of(!0)]
              })
            };
            Qp.current && !Qp.current.isDone ? Jp.current = cp : cp()
          }
        }
      }), [ip, Cp]), {
        state: Xp,
        setState: lp,
        view: Cp,
        setView: Ep,
        container: qp,
        setContainer: Mp
      }
    }
    var jc = cp(1112),
      kc = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      mc = (0, Ip.forwardRef)(((pp, ip) => {
        var {
          className: cp,
          value: Sp = "",
          selection: xp,
          extensions: Lp = [],
          onChange: Yp,
          onStatistics: Dp,
          onCreateEditor: Ap,
          onUpdate: Pp,
          autoFocus: Wp,
          theme: yp = "light",
          height: Up,
          minHeight: wp,
          maxHeight: vp,
          width: tp,
          minWidth: Hp,
          maxWidth: dp,
          basicSetup: ep,
          placeholder: jp,
          indentWithTab: kp,
          editable: mp,
          readOnly: Rp,
          root: qp,
          initialState: Mp
        } = pp, Cp = (0, op.c)(pp, kc), Ep = (0, Ip.useRef)(null), {
          state: Xp,
          view: lp,
          container: Qp,
          setContainer: Jp
        } = uc({
          root: qp,
          value: Sp,
          autoFocus: Wp,
          theme: yp,
          height: Up,
          minHeight: wp,
          maxHeight: vp,
          width: tp,
          minWidth: Hp,
          maxWidth: dp,
          basicSetup: ep,
          placeholder: jp,
          indentWithTab: kp,
          editable: mp,
          readOnly: Rp,
          selection: xp,
          onChange: Yp,
          onStatistics: Dp,
          onCreateEditor: Ap,
          onUpdate: Pp,
          extensions: Lp,
          initialState: Mp
        });
        (0, Ip.useImperativeHandle)(ip, (() => ({
          editor: Ep.current,
          state: Xp,
          view: lp
        })), [Ep, Qp, Xp, lp]);
        var Bp = (0, Ip.useCallback)((pp => {
          Ep.current = pp, Jp(pp)
        }), [Jp]);
        if ("string" !== typeof Sp) throw new Error("value must be typeof string but got " + typeof Sp);
        var Np = "string" === typeof yp ? "cm-theme-" + yp : "cm-theme";
        return (0, jc.jsx)("div", (0, Op.c)({
          ref: Bp,
          className: Np + (cp ? " " + cp : "")
        }, Cp))
      }));
    mc.displayName = "CodeMirror";
    const Rc = mc
  },
  41562: (pp, ip, cp) => {
    function Op() {
      var pp = arguments[0];
      "string" == typeof pp && (pp = document.createElement(pp));
      var ip = 1,
        cp = arguments[1];
      if (cp && "object" == typeof cp && null == cp.nodeType && !Array.isArray(cp)) {
        for (var Op in cp)
          if (Object.prototype.hasOwnProperty.call(cp, Op)) {
            var Ip = cp[Op];
            "string" == typeof Ip ? pp.setAttribute(Op, Ip) : null != Ip && (pp[Op] = Ip)
          } ip++
      }
      for (; ip < arguments.length; ip++) op(pp, arguments[ip]);
      return pp
    }

    function op(pp, ip) {
      if ("string" == typeof ip) pp.appendChild(document.createTextNode(ip));
      else if (null == ip);
      else if (null != ip.nodeType) pp.appendChild(ip);
      else {
        if (!Array.isArray(ip)) throw new RangeError("Unsupported child node: " + ip);
        for (var cp = 0; cp < ip.length; cp++) op(pp, ip[cp])
      }
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  41560: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    const Op = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      op = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Ip = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Sp {
      constructor(pp, ip) {
        this.rules = [];
        let {
          finish: cp
        } = ip || {};

        function Op(pp) {
          return /^@/.test(pp) ? [pp] : pp.split(/,\s*/)
        }

        function op(pp, ip, Ip, Sp) {
          let xp = [],
            Lp = /^@(\w+)\b/.exec(pp[0]),
            Yp = Lp && "keyframes" == Lp[1];
          if (Lp && null == ip) return Ip.push(pp[0] + ";");
          for (let cp in ip) {
            let Sp = ip[cp];
            if (/&/.test(cp)) op(cp.split(/,\s*/).map((ip => pp.map((pp => ip.replace(/&/, pp))))).reduce(((pp, ip) => pp.concat(ip))), Sp, Ip);
            else if (Sp && "object" == typeof Sp) {
              if (!Lp) throw new RangeError("The value of a property (" + cp + ") should be a primitive value.");
              op(Op(cp), Sp, xp, Yp)
            } else null != Sp && xp.push(cp.replace(/_.*/, "").replace(/[A-Z]/g, (pp => "-" + pp.toLowerCase())) + ": " + Sp + ";")
          }(xp.length || Yp) && Ip.push((!cp || Lp || Sp ? pp : pp.map(cp)).join(", ") + " {" + xp.join(" ") + "}")
        }
        for (let Ip in pp) op(Op(Ip), pp[Ip], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let pp = Ip[Op] || 1;
        return Ip[Op] = pp + 1, "\u037c" + pp.toString(36)
      }
      static mount(pp, ip, cp) {
        let Op = pp[op],
          Ip = cp && cp.nonce;
        Op ? Ip && Op.setNonce(Ip) : Op = new Lp(pp, Ip), Op.mount(Array.isArray(ip) ? ip : [ip], pp)
      }
    }
    let xp = new Map;
    class Lp {
      constructor(pp, ip) {
        let cp = pp.ownerDocument || pp,
          Op = cp.defaultView;
        if (!pp.head && pp.adoptedStyleSheets && Op.CSSStyleSheet) {
          let ip = xp.get(cp);
          if (ip) return pp[op] = ip;
          this.sheet = new Op.CSSStyleSheet, xp.set(cp, this)
        } else this.styleTag = cp.createElement("style"), ip && this.styleTag.setAttribute("nonce", ip);
        this.modules = [], pp[op] = this
      }
      mount(pp, ip) {
        let cp = this.sheet,
          Op = 0,
          op = 0;
        for (let Ip = 0; Ip < pp.length; Ip++) {
          let ip = pp[Ip],
            Sp = this.modules.indexOf(ip);
          if (Sp < op && Sp > -1 && (this.modules.splice(Sp, 1), op--, Sp = -1), -1 == Sp) {
            if (this.modules.splice(op++, 0, ip), cp)
              for (let pp = 0; pp < ip.rules.length; pp++) cp.insertRule(ip.rules[pp], Op++)
          } else {
            for (; op < Sp;) Op += this.modules[op++].rules.length;
            Op += ip.rules.length, op++
          }
        }
        if (cp) ip.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ip.adoptedStyleSheets = [this.sheet, ...ip.adoptedStyleSheets]);
        else {
          let pp = "";
          for (let ip = 0; ip < this.modules.length; ip++) pp += this.modules[ip].getRules() + "\n";
          this.styleTag.textContent = pp;
          let cp = ip.head || ip;
          this.styleTag.parentNode != cp && cp.insertBefore(this.styleTag, cp.firstChild)
        }
      }
      setNonce(pp) {
        this.styleTag && this.styleTag.getAttribute("nonce") != pp && this.styleTag.setAttribute("nonce", pp)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);