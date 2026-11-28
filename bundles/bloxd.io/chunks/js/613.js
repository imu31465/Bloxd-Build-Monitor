export const id = 613;
export const ids = [613];
export const modules = {
  53757: (dd, Od, md) => {
    md.d(Od, {
      c: () => AO,
      g: () => UO,
      j: () => YO,
      m: () => hd,
      p: () => rO,
      t: () => vd,
      w: () => qO
    });
    var Wd = md(53759),
      Fd = md(53768),
      Rd = md(53793);
    class Xd {
      constructor(dd, Od, md, Wd) {
        this.state = dd, this.pos = Od, this.explicit = md, this.view = Wd, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(dd) {
        let Od = (0, Rd.sb)(this.state).resolveInner(this.pos, -1);
        for (; Od && dd.indexOf(Od.name) < 0;) Od = Od.parent;
        return Od ? {
          from: Od.from,
          to: this.pos,
          text: this.state.sliceDoc(Od.from, this.pos),
          type: Od.type
        } : null
      }
      matchBefore(dd) {
        let Od = this.state.doc.lineAt(this.pos),
          md = Math.max(Od.from, this.pos - 250),
          Wd = Od.text.slice(md - Od.from, this.pos - Od.from),
          Fd = Wd.search(od(dd, !1));
        return Fd < 0 ? null : {
          from: md + Fd,
          to: this.pos,
          text: Wd.slice(Fd)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(dd, Od, md) {
        "abort" == dd && this.abortListeners && (this.abortListeners.push(Od), md && md.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Kd(dd) {
      let Od = Object.keys(dd).join(""),
        md = /\w/.test(Od);
      return md && (Od = Od.replace(/\w/g, "")), `[${md?"\\w":""}${Od.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function hd(dd) {
      let Od = dd.map((dd => "string" == typeof dd ? {
          label: dd
        } : dd)),
        [md, Wd] = Od.every((dd => /^\w+$/.test(dd.label))) ? [/\w*$/, /\w+$/] : function(dd) {
          let Od = Object.create(null),
            md = Object.create(null);
          for (let {
              label: Fd
            }
            of dd) {
            Od[Fd[0]] = !0;
            for (let dd = 1; dd < Fd.length; dd++) md[Fd[dd]] = !0
          }
          let Wd = Kd(Od) + Kd(md) + "*$";
          return [new RegExp("^" + Wd), new RegExp(Wd)]
        }(Od);
      return dd => {
        let Fd = dd.matchBefore(Wd);
        return Fd || dd.explicit ? {
          from: Fd ? Fd.from : dd.pos,
          options: Od,
          validFor: md
        } : null
      }
    }

    function vd(dd, Od) {
      return md => {
        for (let Od = (0, Rd.sb)(md.state).resolveInner(md.pos, -1); Od; Od = Od.parent) {
          if (dd.indexOf(Od.name) > -1) return null;
          if (Od.type.isTop) break
        }
        return Od(md)
      }
    }
    class Qd {
      constructor(dd, Od, md, Wd) {
        this.completion = dd, this.source = Od, this.match = md, this.score = Wd
      }
    }

    function td(dd) {
      return dd.selection.main.from
    }

    function od(dd, Od) {
      var md;
      let {
        source: Wd
      } = dd, Fd = Od && "^" != Wd[0], Rd = "$" != Wd[Wd.length - 1];
      return Fd || Rd ? new RegExp(`${Fd?"^":""}(?:${Wd})${Rd?"$":""}`, null !== (md = dd.flags) && void 0 !== md ? md : dd.ignoreCase ? "i" : "") : dd
    }
    const Nd = Wd.c.define();

    function qd(dd, Od, md, Fd) {
      let {
        main: Rd
      } = dd.selection, Xd = md - Rd.from, Kd = Fd - Rd.from;
      return {
        ...dd.changeByRange((hd => {
          if (hd != Rd && md != Fd && dd.sliceDoc(hd.from + Xd, hd.from + Kd) != dd.sliceDoc(md, Fd)) return {
            range: hd
          };
          let vd = dd.toText(Od);
          return {
            changes: {
              from: hd.from + Xd,
              to: Fd == Rd.from ? hd.to : hd.from + Kd,
              insert: vd
            },
            range: Wd.j.cursor(hd.from + Xd + vd.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Hd = new WeakMap;

    function yd(dd) {
      if (!Array.isArray(dd)) return dd;
      let Od = Hd.get(dd);
      return Od || Hd.set(dd, Od = hd(dd)), Od
    }
    const bd = Wd.I.define(),
      Td = Wd.I.define();
    class pd {
      constructor(dd) {
        this.pattern = dd, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Od = 0; Od < dd.length;) {
          let md = (0, Wd.S)(dd, Od),
            Fd = (0, Wd.T)(md);
          this.chars.push(md);
          let Rd = dd.slice(Od, Od + Fd),
            Xd = Rd.toUpperCase();
          this.folded.push((0, Wd.S)(Xd == Rd ? Rd.toLowerCase() : Xd, 0)), Od += Fd
        }
        this.astral = dd.length != this.chars.length
      }
      ret(dd, Od) {
        return this.score = dd, this.matched = Od, this
      }
      match(dd) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (dd.length < this.pattern.length) return null;
        let {
          chars: Od,
          folded: md,
          any: Fd,
          precise: Rd,
          byWord: Xd
        } = this;
        if (1 == Od.length) {
          let Fd = (0, Wd.S)(dd, 0),
            Rd = (0, Wd.T)(Fd),
            Xd = Rd == dd.length ? 0 : -100;
          if (Fd == Od[0]);
          else {
            if (Fd != md[0]) return null;
            Xd += -200
          }
          return this.ret(Xd, [0, Rd])
        }
        let Kd = dd.indexOf(this.pattern);
        if (0 == Kd) return this.ret(dd.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let hd = Od.length,
          vd = 0;
        if (Kd < 0) {
          for (let Rd = 0, Xd = Math.min(dd.length, 200); Rd < Xd && vd < hd;) {
            let Xd = (0, Wd.S)(dd, Rd);
            Xd != Od[vd] && Xd != md[vd] || (Fd[vd++] = Rd), Rd += (0, Wd.T)(Xd)
          }
          if (vd < hd) return null
        }
        let Qd = 0,
          td = 0,
          od = !1,
          Nd = 0,
          qd = -1,
          Hd = -1,
          yd = /[a-z]/.test(dd),
          bd = !0;
        for (let Td = 0, pd = Math.min(dd.length, 200), Yd = 0; Td < pd && td < hd;) {
          let Fd = (0, Wd.S)(dd, Td);
          Kd < 0 && (Qd < hd && Fd == Od[Qd] && (Rd[Qd++] = Td), Nd < hd && (Fd == Od[Nd] || Fd == md[Nd] ? (0 == Nd && (qd = Td), Hd = Td + 1, Nd++) : Nd = 0));
          let vd, pd = Fd < 255 ? Fd >= 48 && Fd <= 57 || Fd >= 97 && Fd <= 122 ? 2 : Fd >= 65 && Fd <= 90 ? 1 : 0 : (vd = (0, Wd.eb)(Fd)) != vd.toLowerCase() ? 1 : vd != vd.toUpperCase() ? 2 : 0;
          (!Td || 1 == pd && yd || 0 == Yd && 0 != pd) && (Od[td] == Fd || md[td] == Fd && (od = !0) ? Xd[td++] = Td : Xd.length && (bd = !1)), Yd = pd, Td += (0, Wd.T)(Fd)
        }
        return td == hd && 0 == Xd[0] && bd ? this.result((od ? -200 : 0) - 100, Xd, dd) : Nd == hd && 0 == qd ? this.ret(-200 - dd.length + (Hd == dd.length ? 0 : -100), [0, Hd]) : Kd > -1 ? this.ret(-700 - dd.length, [Kd, Kd + this.pattern.length]) : Nd == hd ? this.ret(-900 - dd.length, [qd, Hd]) : td == hd ? this.result((od ? -200 : 0) - 100 - 700 + (bd ? 0 : -1100), Xd, dd) : 2 == Od.length ? null : this.result((Fd[0] ? -700 : 0) - 200 - 1100, Fd, dd)
      }
      result(dd, Od, md) {
        let Fd = [],
          Rd = 0;
        for (let Xd of Od) {
          let dd = Xd + (this.astral ? (0, Wd.T)((0, Wd.S)(md, Xd)) : 1);
          Rd && Fd[Rd - 1] == Xd ? Fd[Rd - 1] = dd : (Fd[Rd++] = Xd, Fd[Rd++] = dd)
        }
        return this.ret(dd - md.length, Fd)
      }
    }
    class Yd {
      constructor(dd) {
        this.pattern = dd, this.matched = [], this.score = 0, this.folded = dd.toLowerCase()
      }
      match(dd) {
        if (dd.length < this.pattern.length) return null;
        let Od = dd.slice(0, this.pattern.length),
          md = Od == this.pattern ? 0 : Od.toLowerCase() == this.folded ? -200 : null;
        return null == md ? null : (this.matched = [0, Od.length], this.score = md + (dd.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const gd = Wd.p.define({
      combine: dd => (0, Wd.W)(dd, {
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
        positionInfo: Ed,
        filterStrict: !1,
        compareCompletions: (dd, Od) => (dd.sortText || dd.label).localeCompare(Od.sortText || Od.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (dd, Od) => dd && Od,
        closeOnBlur: (dd, Od) => dd && Od,
        icons: (dd, Od) => dd && Od,
        tooltipClass: (dd, Od) => md => wd(dd(md), Od(md)),
        optionClass: (dd, Od) => md => wd(dd(md), Od(md)),
        addToOptions: (dd, Od) => dd.concat(Od),
        filterStrict: (dd, Od) => dd || Od
      })
    });

    function wd(dd, Od) {
      return dd ? Od ? dd + " " + Od : dd : Od
    }

    function Ed(dd, Od, md, Wd, Rd, Xd) {
      let Kd, hd, vd = dd.textDirection == Fd.e.RTL,
        Qd = vd,
        td = !1,
        od = "top",
        Nd = Od.left - Rd.left,
        qd = Rd.right - Od.right,
        Hd = Wd.right - Wd.left,
        yd = Wd.bottom - Wd.top;
      if (Qd && Nd < Math.min(Hd, qd) ? Qd = !1 : !Qd && qd < Math.min(Hd, Nd) && (Qd = !0), Hd <= (Qd ? Nd : qd)) Kd = Math.max(Rd.top, Math.min(md.top, Rd.bottom - yd)) - Od.top, hd = Math.min(400, Qd ? Nd : qd);
      else {
        td = !0, hd = Math.min(400, (vd ? Od.right : Rd.right - Od.left) - 30);
        let dd = Rd.bottom - Od.bottom;
        dd >= yd || dd > Od.top ? Kd = md.bottom - Od.top : (od = "bottom", Kd = Od.bottom - md.top)
      }
      return {
        style: `${od}: ${Kd/((Od.bottom-Od.top)/Xd.offsetHeight)}px; max-width: ${hd/((Od.right-Od.left)/Xd.offsetWidth)}px`,
        class: "cm-completionInfo-" + (td ? vd ? "left-narrow" : "right-narrow" : Qd ? "left" : "right")
      }
    }
    const Jd = Wd.I.define();

    function Ud(dd, Od, md) {
      if (dd <= md) return {
        from: 0,
        to: dd
      };
      if (Od < 0 && (Od = 0), Od <= dd >> 1) {
        let dd = Math.floor(Od / md);
        return {
          from: dd * md,
          to: (dd + 1) * md
        }
      }
      let Wd = Math.floor((dd - Od) / md);
      return {
        from: dd - (Wd + 1) * md,
        to: dd - Wd * md
      }
    }
    class xd {
      constructor(dd, Od, md) {
        this.view = dd, this.stateField = Od, this.applyCompletion = md, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: dd => this.placeInfo(dd),
          key: this
        }, this.space = null, this.currentClass = "";
        let Wd = dd.state.field(Od),
          {
            options: Fd,
            selected: Rd
          } = Wd.open,
          Xd = dd.state.facet(gd);
        this.optionContent = function(dd) {
          let Od = dd.addToOptions.slice();
          return dd.icons && Od.push({
            render(dd) {
              let Od = document.createElement("div");
              return Od.classList.add("cm-completionIcon"), dd.type && Od.classList.add(...dd.type.split(/\s+/g).map((dd => "cm-completionIcon-" + dd))), Od.setAttribute("aria-hidden", "true"), Od
            },
            position: 20
          }), Od.push({
            render(dd, Od, md, Wd) {
              let Fd = document.createElement("span");
              Fd.className = "cm-completionLabel";
              let Rd = dd.displayLabel || dd.label,
                Xd = 0;
              for (let Kd = 0; Kd < Wd.length;) {
                let dd = Wd[Kd++],
                  Od = Wd[Kd++];
                dd > Xd && Fd.appendChild(document.createTextNode(Rd.slice(Xd, dd)));
                let md = Fd.appendChild(document.createElement("span"));
                md.appendChild(document.createTextNode(Rd.slice(dd, Od))), md.className = "cm-completionMatchedText", Xd = Od
              }
              return Xd < Rd.length && Fd.appendChild(document.createTextNode(Rd.slice(Xd))), Fd
            },
            position: 50
          }, {
            render(dd) {
              if (!dd.detail) return null;
              let Od = document.createElement("span");
              return Od.className = "cm-completionDetail", Od.textContent = dd.detail, Od
            },
            position: 80
          }), Od.sort(((dd, Od) => dd.position - Od.position)).map((dd => dd.render))
        }(Xd), this.optionClass = Xd.optionClass, this.tooltipClass = Xd.tooltipClass, this.range = Ud(Fd.length, Rd, Xd.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(dd.state), this.dom.addEventListener("mousedown", (md => {
          let {
            options: Wd
          } = dd.state.field(Od).open;
          for (let Od, Fd = md.target; Fd && Fd != this.dom; Fd = Fd.parentNode)
            if ("LI" == Fd.nodeName && (Od = /-(\d+)$/.exec(Fd.id)) && +Od[1] < Wd.length) return this.applyCompletion(dd, Wd[+Od[1]]), void md.preventDefault();
          if (md.target == this.list) {
            let Od = this.list.classList.contains("cm-completionListIncompleteTop") && md.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && md.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Od && (dd.dispatch({
              effects: Jd.of(Od)
            }), md.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Od => {
          let md = dd.state.field(this.stateField, !1);
          md && md.tooltip && dd.state.facet(gd).closeOnBlur && Od.relatedTarget != dd.contentDOM && dd.dispatch({
            effects: Td.of(null)
          })
        })), this.showOptions(Fd, Wd.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(dd, Od) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(dd, Od, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(dd) {
        var Od;
        let md = dd.state.field(this.stateField),
          Wd = dd.startState.field(this.stateField);
        if (this.updateTooltipClass(dd.state), md != Wd) {
          let {
            options: Fd,
            selected: Rd,
            disabled: Xd
          } = md.open;
          Wd.open && Wd.open.options == Fd || (this.range = Ud(Fd.length, Rd, dd.state.facet(gd).maxRenderedOptions), this.showOptions(Fd, md.id)), this.updateSel(), Xd != (null === (Od = Wd.open) || void 0 === Od ? void 0 : Od.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Xd)
        }
      }
      updateTooltipClass(dd) {
        let Od = this.tooltipClass(dd);
        if (Od != this.currentClass) {
          for (let dd of this.currentClass.split(" ")) dd && this.dom.classList.remove(dd);
          for (let dd of Od.split(" ")) dd && this.dom.classList.add(dd);
          this.currentClass = Od
        }
      }
      positioned(dd) {
        this.space = dd, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let dd = this.view.state.field(this.stateField),
          Od = dd.open;
        (Od.selected > -1 && Od.selected < this.range.from || Od.selected >= this.range.to) && (this.range = Ud(Od.options.length, Od.selected, this.view.state.facet(gd).maxRenderedOptions), this.showOptions(Od.options, dd.id));
        let md = this.updateSelectedOption(Od.selected);
        if (md) {
          this.destroyInfo();
          let {
            completion: Wd
          } = Od.options[Od.selected], {
            info: Rd
          } = Wd;
          if (!Rd) return;
          let Xd = "string" === typeof Rd ? document.createTextNode(Rd) : Rd(Wd);
          if (!Xd) return;
          "then" in Xd ? Xd.then((Od => {
            Od && this.view.state.field(this.stateField, !1) == dd && this.addInfoPane(Od, Wd)
          })).catch((dd => (0, Fd.U)(this.view.state, dd, "completion info"))) : (this.addInfoPane(Xd, Wd), md.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(dd, Od) {
        this.destroyInfo();
        let md = this.info = document.createElement("div");
        if (md.className = "cm-tooltip cm-completionInfo", md.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != dd.nodeType) md.appendChild(dd), this.infoDestroy = null;
        else {
          let {
            dom: Od,
            destroy: Wd
          } = dd;
          md.appendChild(Od), this.infoDestroy = Wd || null
        }
        this.dom.appendChild(md), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(dd) {
        let Od = null;
        for (let md = this.list.firstChild, Wd = this.range.from; md; md = md.nextSibling, Wd++) "LI" == md.nodeName && md.id ? Wd == dd ? md.hasAttribute("aria-selected") || (md.setAttribute("aria-selected", "true"), Od = md) : md.hasAttribute("aria-selected") && (md.removeAttribute("aria-selected"), md.removeAttribute("aria-describedby")) : Wd--;
        return Od && function(dd, Od) {
          let md = dd.getBoundingClientRect(),
            Wd = Od.getBoundingClientRect(),
            Fd = md.height / dd.offsetHeight;
          Wd.top < md.top ? dd.scrollTop -= (md.top - Wd.top) / Fd : Wd.bottom > md.bottom && (dd.scrollTop += (Wd.bottom - md.bottom) / Fd)
        }(this.list, Od), Od
      }
      measureInfo() {
        let dd = this.dom.querySelector("[aria-selected]");
        if (!dd || !this.info) return null;
        let Od = this.dom.getBoundingClientRect(),
          md = this.info.getBoundingClientRect(),
          Wd = dd.getBoundingClientRect(),
          Fd = this.space;
        if (!Fd) {
          let dd = this.dom.ownerDocument.documentElement;
          Fd = {
            left: 0,
            top: 0,
            right: dd.clientWidth,
            bottom: dd.clientHeight
          }
        }
        return Wd.top > Math.min(Fd.bottom, Od.bottom) - 10 || Wd.bottom < Math.max(Fd.top, Od.top) + 10 ? null : this.view.state.facet(gd).positionInfo(this.view, Od, Wd, md, Fd, this.dom)
      }
      placeInfo(dd) {
        this.info && (dd ? (dd.style && (this.info.style.cssText = dd.style), this.info.className = "cm-tooltip cm-completionInfo " + (dd.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(dd, Od, md) {
        const Wd = document.createElement("ul");
        Wd.id = Od, Wd.setAttribute("role", "listbox"), Wd.setAttribute("aria-expanded", "true"), Wd.setAttribute("aria-label", this.view.state.phrase("Completions")), Wd.addEventListener("mousedown", (dd => {
          dd.target == Wd && dd.preventDefault()
        }));
        let Fd = null;
        for (let Rd = md.from; Rd < md.to; Rd++) {
          let {
            completion: Xd,
            match: Kd
          } = dd[Rd], {
            section: hd
          } = Xd;
          if (hd) {
            let dd = "string" == typeof hd ? hd : hd.name;
            if (dd != Fd && (Rd > md.from || 0 == md.from))
              if (Fd = dd, "string" != typeof hd && hd.header) Wd.appendChild(hd.header(hd));
              else {
                Wd.appendChild(document.createElement("completion-section")).textContent = dd
              }
          }
          const vd = Wd.appendChild(document.createElement("li"));
          vd.id = Od + "-" + Rd, vd.setAttribute("role", "option");
          let Qd = this.optionClass(Xd);
          Qd && (vd.className = Qd);
          for (let dd of this.optionContent) {
            let Od = dd(Xd, this.view.state, this.view, Kd);
            Od && vd.appendChild(Od)
          }
        }
        return md.from && Wd.classList.add("cm-completionListIncompleteTop"), md.to < dd.length && Wd.classList.add("cm-completionListIncompleteBottom"), Wd
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Bd(dd, Od) {
      return md => new xd(md, dd, Od)
    }

    function Sd(dd) {
      return 100 * (dd.boost || 0) + (dd.apply ? 10 : 0) + (dd.info ? 5 : 0) + (dd.type ? 1 : 0)
    }
    class sd {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.options = dd, this.attrs = Od, this.tooltip = md, this.timestamp = Wd, this.selected = Fd, this.disabled = Rd
      }
      setSelected(dd, Od) {
        return dd == this.selected || dd >= this.options.length ? this : new sd(this.options, rd(Od, dd), this.tooltip, this.timestamp, dd, this.disabled)
      }
      static build(dd, Od, md, Wd, Fd, Rd) {
        if (Wd && !Rd && dd.some((dd => dd.isPending))) return Wd.setDisabled();
        let Xd = function(dd, Od) {
          let md = [],
            Wd = null,
            Fd = null,
            Rd = dd => {
              md.push(dd);
              let {
                section: Od
              } = dd.completion;
              if (Od) {
                Wd || (Wd = []);
                let dd = "string" == typeof Od ? Od : Od.name;
                Wd.some((Od => Od.name == dd)) || Wd.push("string" == typeof Od ? {
                  name: dd
                } : Od)
              }
            },
            Xd = Od.facet(gd);
          for (let td of dd)
            if (td.hasResult()) {
              let dd = td.result.getMatch;
              if (!1 === td.result.filter)
                for (let Od of td.result.options) Rd(new Qd(Od, td.source, dd ? dd(Od) : [], 1e9 - md.length));
              else {
                let md, Wd = Od.sliceDoc(td.from, td.to),
                  Kd = Xd.filterStrict ? new Yd(Wd) : new pd(Wd);
                for (let Od of td.result.options)
                  if (md = Kd.match(Od.label)) {
                    let Wd = Od.displayLabel ? dd ? dd(Od, md.matched) : [] : md.matched,
                      Xd = md.score + (Od.boost || 0);
                    if (Rd(new Qd(Od, td.source, Wd, Xd)), "object" == typeof Od.section && "dynamic" === Od.section.rank) {
                      let {
                        name: dd
                      } = Od.section;
                      Fd || (Fd = Object.create(null)), Fd[dd] = Math.max(Xd, Fd[dd] || -1e9)
                    }
                  }
              }
            } if (Wd) {
            let dd = Object.create(null),
              Od = 0,
              Rd = (dd, Od) => ("dynamic" === dd.rank && "dynamic" === Od.rank ? Fd[Od.name] - Fd[dd.name] : 0) || ("number" == typeof dd.rank ? dd.rank : 1e9) - ("number" == typeof Od.rank ? Od.rank : 1e9) || (dd.name < Od.name ? -1 : 1);
            for (let md of Wd.sort(Rd)) Od -= 1e5, dd[md.name] = Od;
            for (let Wd of md) {
              let {
                section: Od
              } = Wd.completion;
              Od && (Wd.score += dd["string" == typeof Od ? Od : Od.name])
            }
          }
          let Kd = [],
            hd = null,
            vd = Xd.compareCompletions;
          for (let Qd of md.sort(((dd, Od) => Od.score - dd.score || vd(dd.completion, Od.completion)))) {
            let dd = Qd.completion;
            !hd || hd.label != dd.label || hd.detail != dd.detail || null != hd.type && null != dd.type && hd.type != dd.type || hd.apply != dd.apply || hd.boost != dd.boost ? Kd.push(Qd) : Sd(Qd.completion) > Sd(hd) && (Kd[Kd.length - 1] = Qd), hd = Qd.completion
          }
          return Kd
        }(dd, Od);
        if (!Xd.length) return Wd && dd.some((dd => dd.isPending)) ? Wd.setDisabled() : null;
        let Kd = Od.facet(gd).selectOnOpen ? 0 : -1;
        if (Wd && Wd.selected != Kd && -1 != Wd.selected) {
          let dd = Wd.options[Wd.selected].completion;
          for (let Od = 0; Od < Xd.length; Od++)
            if (Xd[Od].completion == dd) {
              Kd = Od;
              break
            }
        }
        return new sd(Xd, rd(md, Kd), {
          pos: dd.reduce(((dd, Od) => Od.hasResult() ? Math.min(dd, Od.from) : dd), 1e8),
          create: Dd,
          above: Fd.aboveCursor
        }, Wd ? Wd.timestamp : Date.now(), Kd, !1)
      }
      map(dd) {
        return new sd(this.options, this.attrs, {
          ...this.tooltip,
          pos: dd.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new sd(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class ud {
      constructor(dd, Od, md) {
        this.active = dd, this.id = Od, this.open = md
      }
      static start() {
        return new ud(Gd, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(dd) {
        let {
          state: Od
        } = dd, md = Od.facet(gd), Wd = (md.override || Od.languageDataAt("autocomplete", td(Od)).map(yd)).map((Od => (this.active.find((dd => dd.source == Od)) || new Ld(Od, this.active.some((dd => 0 != dd.state)) ? 1 : 0)).update(dd, md)));
        Wd.length == this.active.length && Wd.every(((dd, Od) => dd == this.active[Od])) && (Wd = this.active);
        let Fd = this.open,
          Rd = dd.effects.some((dd => dd.is(zd)));
        Fd && dd.docChanged && (Fd = Fd.map(dd.changes)), dd.selection || Wd.some((Od => Od.hasResult() && dd.changes.touchesRange(Od.from, Od.to))) || ! function(dd, Od) {
          if (dd == Od) return !0;
          for (let md = 0, Wd = 0;;) {
            for (; md < dd.length && !dd[md].hasResult();) md++;
            for (; Wd < Od.length && !Od[Wd].hasResult();) Wd++;
            let Fd = md == dd.length,
              Rd = Wd == Od.length;
            if (Fd || Rd) return Fd == Rd;
            if (dd[md++].result != Od[Wd++].result) return !1
          }
        }(Wd, this.active) || Rd ? Fd = sd.build(Wd, Od, this.id, Fd, md, Rd) : Fd && Fd.disabled && !Wd.some((dd => dd.isPending)) && (Fd = null), !Fd && Wd.every((dd => !dd.isPending)) && Wd.some((dd => dd.hasResult())) && (Wd = Wd.map((dd => dd.hasResult() ? new Ld(dd.source, 0) : dd)));
        for (let Xd of dd.effects) Xd.is(Jd) && (Fd = Fd && Fd.setSelected(Xd.value, this.id));
        return Wd == this.active && Fd == this.open ? this : new ud(Wd, this.id, Fd)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Vd : Ad
      }
    }
    const Vd = {
        "aria-autocomplete": "list"
      },
      Ad = {};

    function rd(dd, Od) {
      let md = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": dd
      };
      return Od > -1 && (md["aria-activedescendant"] = dd + "-" + Od), md
    }
    const Gd = [];

    function nd(dd, Od) {
      if (dd.isUserEvent("input.complete")) {
        let md = dd.annotation(Nd);
        if (md && Od.activateOnCompletion(md)) return 12
      }
      let md = dd.isUserEvent("input.type");
      return md && Od.activateOnTyping ? 5 : md ? 1 : dd.isUserEvent("delete.backward") ? 2 : dd.selection ? 8 : dd.docChanged ? 16 : 0
    }
    class Ld {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = dd, this.state = Od, this.explicit = md
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(dd, Od) {
        let md = nd(dd, Od),
          Wd = this;
        (8 & md || 16 & md && this.touches(dd)) && (Wd = new Ld(Wd.source, 0)), 4 & md && 0 == Wd.state && (Wd = new Ld(this.source, 1)), Wd = Wd.updateFor(dd, md);
        for (let Fd of dd.effects)
          if (Fd.is(bd)) Wd = new Ld(Wd.source, 1, Fd.value);
          else if (Fd.is(Td)) Wd = new Ld(Wd.source, 0);
        else if (Fd.is(zd))
          for (let dd of Fd.value) dd.source == Wd.source && (Wd = dd);
        return Wd
      }
      updateFor(dd, Od) {
        return this.map(dd.changes)
      }
      map(dd) {
        return this
      }
      touches(dd) {
        return dd.changes.touchesRange(td(dd.state))
      }
    }
    class Pd extends Ld {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        super(dd, 3, Od), this.limit = md, this.result = Wd, this.from = Fd, this.to = Rd
      }
      hasResult() {
        return !0
      }
      updateFor(dd, Od) {
        var md;
        if (!(3 & Od)) return this.map(dd.changes);
        let Wd = this.result;
        Wd.map && !dd.changes.empty && (Wd = Wd.map(Wd, dd.changes));
        let Fd = dd.changes.mapPos(this.from),
          Rd = dd.changes.mapPos(this.to, 1),
          Kd = td(dd.state);
        if (Kd > Rd || !Wd || 2 & Od && (td(dd.startState) == this.from || Kd < this.limit)) return new Ld(this.source, 4 & Od ? 1 : 0);
        let hd = dd.changes.mapPos(this.limit);
        return function(dd, Od, md, Wd) {
          if (!dd) return !1;
          let Fd = Od.sliceDoc(md, Wd);
          return "function" == typeof dd ? dd(Fd, md, Wd, Od) : od(dd, !0).test(Fd)
        }(Wd.validFor, dd.state, Fd, Rd) ? new Pd(this.source, this.explicit, hd, Wd, Fd, Rd) : Wd.update && (Wd = Wd.update(Wd, Fd, Rd, new Xd(dd.state, Kd, !1))) ? new Pd(this.source, this.explicit, hd, Wd, Wd.from, null !== (md = Wd.to) && void 0 !== md ? md : td(dd.state)) : new Ld(this.source, 1, this.explicit)
      }
      map(dd) {
        if (dd.empty) return this;
        return (this.result.map ? this.result.map(this.result, dd) : this.result) ? new Pd(this.source, this.explicit, dd.mapPos(this.limit), this.result, dd.mapPos(this.from), dd.mapPos(this.to, 1)) : new Ld(this.source, 0)
      }
      touches(dd) {
        return dd.changes.touchesRange(this.from, this.to)
      }
    }
    const zd = Wd.I.define({
        map: (dd, Od) => dd.map((dd => dd.map(Od)))
      }),
      cd = Wd.M.define({
        create: () => ud.start(),
        update: (dd, Od) => dd.update(Od),
        provide: dd => [Fd.eb.from(dd, (dd => dd.tooltip)), Fd.h.contentAttributes.from(dd, (dd => dd.attrs))]
      });

    function jd(dd, Od) {
      const md = Od.completion.apply || Od.completion.label;
      let Wd = dd.state.field(cd).active.find((dd => dd.source == Od.source));
      return Wd instanceof Pd && ("string" == typeof md ? dd.dispatch({
        ...qd(dd.state, md, Wd.from, Wd.to),
        annotations: Nd.of(Od.completion)
      }) : md(dd, Od.completion, Wd.from, Wd.to), !0)
    }
    const Dd = Bd(cd, jd);

    function ed(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return md => {
        let Wd = md.state.field(cd, !1);
        if (!Wd || !Wd.open || Wd.open.disabled || Date.now() - Wd.open.timestamp < md.state.facet(gd).interactionDelay) return !1;
        let Rd, Xd = 1;
        "page" == Od && (Rd = (0, Fd.B)(md, Wd.open.tooltip)) && (Xd = Math.max(2, Math.floor(Rd.dom.offsetHeight / Rd.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Kd
        } = Wd.open.options, hd = Wd.open.selected > -1 ? Wd.open.selected + Xd * (dd ? 1 : -1) : dd ? 0 : Kd - 1;
        return hd < 0 ? hd = "page" == Od ? 0 : Kd - 1 : hd >= Kd && (hd = "page" == Od ? Kd - 1 : 0), md.dispatch({
          effects: Jd.of(hd)
        }), !0
      }
    }
    const Id = dd => !!dd.state.field(cd, !1) && (dd.dispatch({
      effects: bd.of(!0)
    }), !0);
    class ld {
      constructor(dd, Od) {
        this.active = dd, this.context = Od, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Cd = Fd.l.fromClass(class {
        constructor(dd) {
          this.view = dd, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Od of dd.state.field(cd).active) Od.isPending && this.startQuery(Od)
        }
        update(dd) {
          let Od = dd.state.field(cd),
            md = dd.state.facet(gd);
          if (!dd.selectionSet && !dd.docChanged && dd.startState.field(cd) == Od) return;
          let Wd = dd.transactions.some((dd => {
            let Od = nd(dd, md);
            return 8 & Od || (dd.selection || dd.docChanged) && !(3 & Od)
          }));
          for (let Kd = 0; Kd < this.running.length; Kd++) {
            let Od = this.running[Kd];
            if (Wd || Od.context.abortOnDocChange && dd.docChanged || Od.updates.length + dd.transactions.length > 50 && Date.now() - Od.time > 1e3) {
              for (let dd of Od.context.abortListeners) try {
                dd()
              } catch (Xd) {
                (0, Fd.U)(this.view.state, Xd)
              }
              Od.context.abortListeners = null, this.running.splice(Kd--, 1)
            } else Od.updates.push(...dd.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), dd.transactions.some((dd => dd.effects.some((dd => dd.is(bd))))) && (this.pendingStart = !0);
          let Rd = this.pendingStart ? 50 : md.activateOnTypingDelay;
          if (this.debounceUpdate = Od.active.some((dd => dd.isPending && !this.running.some((Od => Od.active.source == dd.source)))) ? setTimeout((() => this.startUpdate()), Rd) : -1, 0 != this.composing)
            for (let Fd of dd.transactions) Fd.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Fd.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: dd
          } = this.view, Od = dd.field(cd);
          for (let md of Od.active) md.isPending && !this.running.some((dd => dd.active.source == md.source)) && this.startQuery(md);
          this.running.length && Od.open && Od.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(gd).updateSyncTime))
        }
        startQuery(dd) {
          let {
            state: Od
          } = this.view, md = td(Od), Wd = new Xd(Od, md, dd.explicit, this.view), Rd = new ld(dd, Wd);
          this.running.push(Rd), Promise.resolve(dd.source(Wd)).then((dd => {
            Rd.context.aborted || (Rd.done = dd || null, this.scheduleAccept())
          }), (dd => {
            this.view.dispatch({
              effects: Td.of(null)
            }), (0, Fd.U)(this.view.state, dd)
          }))
        }
        scheduleAccept() {
          this.running.every((dd => void 0 !== dd.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(gd).updateSyncTime))
        }
        accept() {
          var dd;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Od = [],
            md = this.view.state.facet(gd),
            Wd = this.view.state.field(cd);
          for (let Fd = 0; Fd < this.running.length; Fd++) {
            let Rd = this.running[Fd];
            if (void 0 === Rd.done) continue;
            if (this.running.splice(Fd--, 1), Rd.done) {
              let Wd = td(Rd.updates.length ? Rd.updates[0].startState : this.view.state),
                Fd = Math.min(Wd, Rd.done.from + (Rd.active.explicit ? 0 : 1)),
                Xd = new Pd(Rd.active.source, Rd.active.explicit, Fd, Rd.done, Rd.done.from, null !== (dd = Rd.done.to) && void 0 !== dd ? dd : Wd);
              for (let dd of Rd.updates) Xd = Xd.update(dd, md);
              if (Xd.hasResult()) {
                Od.push(Xd);
                continue
              }
            }
            let Xd = Wd.active.find((dd => dd.source == Rd.active.source));
            if (Xd && Xd.isPending)
              if (null == Rd.done) {
                let dd = new Ld(Rd.active.source, 0);
                for (let Od of Rd.updates) dd = dd.update(Od, md);
                dd.isPending || Od.push(dd)
              } else this.startQuery(Xd)
          }(Od.length || Wd.open && Wd.open.disabled) && this.view.dispatch({
            effects: zd.of(Od)
          })
        }
      }, {
        eventHandlers: {
          blur(dd) {
            let Od = this.view.state.field(cd, !1);
            if (Od && Od.tooltip && this.view.state.facet(gd).closeOnBlur) {
              let md = Od.open && (0, Fd.B)(this.view, Od.open.tooltip);
              md && md.dom.contains(dd.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Td.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: bd.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Zd = "object" == typeof navigator && /Win/.test(navigator.platform),
      kd = Wd.v.highest(Fd.h.domEventHandlers({
        keydown(dd, Od) {
          let md = Od.state.field(cd, !1);
          if (!md || !md.open || md.open.disabled || md.open.selected < 0 || dd.key.length > 1 || dd.ctrlKey && (!Zd || !dd.altKey) || dd.metaKey) return !1;
          let Wd = md.open.options[md.open.selected],
            Fd = md.active.find((dd => dd.source == Wd.source)),
            Rd = Wd.completion.commitCharacters || Fd.result.commitCharacters;
          return Rd && Rd.indexOf(dd.key) > -1 && jd(Od, Wd), !1
        }
      })),
      fd = Fd.h.baseTheme({
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
    class Md {
      constructor(dd, Od, md, Wd) {
        this.field = dd, this.line = Od, this.from = md, this.to = Wd
      }
    }
    class dO {
      constructor(dd, Od, md) {
        this.field = dd, this.from = Od, this.to = md
      }
      map(dd) {
        let Od = dd.mapPos(this.from, -1, Wd.t.TrackDel),
          md = dd.mapPos(this.to, 1, Wd.t.TrackDel);
        return null == Od || null == md ? null : new dO(this.field, Od, md)
      }
    }
    class OO {
      constructor(dd, Od) {
        this.lines = dd, this.fieldPositions = Od
      }
      instantiate(dd, Od) {
        let md = [],
          Wd = [Od],
          Fd = dd.doc.lineAt(Od),
          Xd = /^\s*/.exec(Fd.text)[0];
        for (let hd of this.lines) {
          if (md.length) {
            let md = Xd,
              Fd = /^\t*/.exec(hd)[0].length;
            for (let Od = 0; Od < Fd; Od++) md += dd.facet(Rd.eb);
            Wd.push(Od + md.length - Fd), hd = md + hd.slice(Fd)
          }
          md.push(hd), Od += hd.length + 1
        }
        let Kd = this.fieldPositions.map((dd => new dO(dd.field, Wd[dd.line] + dd.from, Wd[dd.line] + dd.to)));
        return {
          text: md,
          By: Kd
        }
      }
      static parse(dd) {
        let Od, md = [],
          Wd = [],
          Fd = [];
        for (let Rd of dd.split(/\r\n?|\n/)) {
          for (; Od = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Rd);) {
            let dd = Od[1] ? +Od[1] : null,
              Xd = Od[2] || Od[3] || "",
              Kd = -1,
              hd = Xd.replace(/\\[{}]/g, (dd => dd[1]));
            for (let Od = 0; Od < md.length; Od++)(null != dd ? md[Od].seq == dd : hd && md[Od].name == hd) && (Kd = Od);
            if (Kd < 0) {
              let Od = 0;
              for (; Od < md.length && (null == dd || null != md[Od].seq && md[Od].seq < dd);) Od++;
              md.splice(Od, 0, {
                seq: dd,
                name: hd
              }), Kd = Od;
              for (let dd of Fd) dd.field >= Kd && dd.field++
            }
            for (let md of Fd)
              if (md.line == Wd.length && md.from > Od.index) {
                let dd = Od[2] ? 3 + (Od[1] || "").length : 2;
                md.from -= dd, md.to -= dd
              } Fd.push(new Md(Kd, Wd.length, Od.index, Od.index + hd.length)), Rd = Rd.slice(0, Od.index) + Xd + Rd.slice(Od.index + Od[0].length)
          }
          Rd = Rd.replace(/\\([{}])/g, ((dd, Od, md) => {
            for (let Rd of Fd) Rd.line == Wd.length && Rd.from > md && (Rd.from--, Rd.to--);
            return Od
          })), Wd.push(Rd)
        }
        return new OO(Wd, Fd)
      }
    }
    let mO = Fd.d.widget({
        widget: new class extends Fd.o {
          toDOM() {
            let dd = document.createElement("span");
            return dd.className = "cm-snippetFieldPosition", dd
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      WO = Fd.d.mark({
        class: "cm-snippetField"
      });
    class FO {
      constructor(dd, Od) {
        this.By = dd, this.active = Od, this.deco = Fd.d.set(dd.map((dd => (dd.from == dd.to ? mO : WO).range(dd.from, dd.to))), !0)
      }
      map(dd) {
        let Od = [];
        for (let md of this.By) {
          let Wd = md.map(dd);
          if (!Wd) return null;
          Od.push(Wd)
        }
        return new FO(Od, this.active)
      }
      selectionInsideField(dd) {
        return dd.By.every((dd => this.By.some((Od => Od.field == this.active && Od.from <= dd.from && Od.to >= dd.to))))
      }
    }
    const RO = Wd.I.define({
        map: (dd, Od) => dd && dd.map(Od)
      }),
      XO = Wd.I.define(),
      KO = Wd.M.define({
        create: () => null,
        update(dd, Od) {
          for (let md of Od.effects) {
            if (md.is(RO)) return md.value;
            if (md.is(XO) && dd) return new FO(dd.By, md.value)
          }
          return dd && Od.docChanged && (dd = dd.map(Od.changes)), dd && Od.selection && !dd.selectionInsideField(Od.selection) && (dd = null), dd
        },
        provide: dd => Fd.h.aW.from(dd, (dd => dd ? dd.deco : Fd.d.none))
      });

    function hO(dd, Od) {
      return Wd.j.create(dd.filter((dd => dd.field == Od)).map((dd => Wd.j.range(dd.from, dd.to))))
    }

    function vO(dd) {
      let Od = OO.parse(dd);
      return (dd, md, Fd, Rd) => {
        let {
          text: Xd,
          By: Kd
        } = Od.instantiate(dd.state, Fd), {
          main: hd
        } = dd.state.selection, vd = {
          changes: {
            from: Fd,
            to: Rd == hd.from ? hd.to : Rd,
            insert: Wd.N.of(Xd)
          },
          scrollIntoView: !0,
          annotations: md ? [Nd.of(md), Wd.Q.userEvent.of("input.complete")] : void 0
        };
        if (Kd.length && (vd.selection = hO(Kd, 0)), Kd.some((dd => dd.field > 0))) {
          let Od = new FO(Kd, 0),
            md = vd.effects = [RO.of(Od)];
          void 0 === dd.state.field(KO, !1) && md.push(Wd.I.appendConfig.of([KO, NO, HO, fd]))
        }
        dd.dispatch(dd.state.update(vd))
      }
    }

    function QO(dd) {
      return Od => {
        let {
          state: md,
          dispatch: Wd
        } = Od, Fd = md.field(KO, !1);
        if (!Fd || dd < 0 && 0 == Fd.active) return !1;
        let Rd = Fd.active + dd,
          Xd = dd > 0 && !Fd.By.some((Od => Od.field == Rd + dd));
        return Wd(md.update({
          selection: hO(Fd.By, Rd),
          effects: RO.of(Xd ? null : new FO(Fd.By, Rd)),
          scrollIntoView: !0
        })), !0
      }
    }
    const tO = [{
        key: "Tab",
        run: QO(1),
        shift: QO(-1)
      }, {
        key: "Escape",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          return !!Od.field(KO, !1) && (md(Od.update({
            effects: RO.of(null)
          })), !0)
        }
      }],
      oO = Wd.p.define({
        combine: dd => dd.length ? dd[0] : tO
      }),
      NO = Wd.v.highest(Fd.O.compute([oO], (dd => dd.facet(oO))));

    function qO(dd, Od) {
      return {
        ...Od,
        apply: vO(dd)
      }
    }
    const HO = Fd.h.domEventHandlers({
      mousedown(dd, Od) {
        let md, Wd = Od.state.field(KO, !1);
        if (!Wd || null == (md = Od.posAtCoords({
            x: dd.clientX,
            y: dd.clientY
          }))) return !1;
        let Fd = Wd.By.find((dd => dd.from <= md && dd.to >= md));
        return !(!Fd || Fd.field == Wd.active) && (Od.dispatch({
          selection: hO(Wd.By, Fd.field),
          effects: RO.of(Wd.By.some((dd => dd.field > Fd.field)) ? new FO(Wd.By, Fd.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const yO = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      bO = Wd.I.define({
        map(dd, Od) {
          let md = Od.mapPos(dd, -1, Wd.t.TrackAfter);
          return null == md ? void 0 : md
        }
      }),
      TO = new class extends Wd.F {};
    TO.startSide = 1, TO.endSide = -1;
    const pO = Wd.M.define({
      create: () => Wd.B.empty,
      update(dd, Od) {
        if (dd = dd.map(Od.changes), Od.selection) {
          let md = Od.state.doc.lineAt(Od.selection.main.head);
          dd = dd.update({
            filter: dd => dd >= md.from && dd <= md.to
          })
        }
        for (let md of Od.effects) md.is(bO) && (dd = dd.update({
          add: [TO.range(md.value, md.value + 1)]
        }));
        return dd
      }
    });

    function YO() {
      return [JO, pO]
    }
    const gO = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function wO(dd) {
      for (let Od = 0; Od < 16; Od += 2)
        if (gO.charCodeAt(Od) == dd) return gO.charAt(Od + 1);
      return (0, Wd.eb)(dd < 128 ? dd : dd + 1)
    }

    function aO(dd, Od) {
      return dd.languageDataAt("closeBrackets", Od)[0] || yO
    }
    const EO = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      JO = Fd.h.inputHandler.of(((dd, Od, md, Fd) => {
        if ((EO ? dd.composing : dd.compositionStarted) || dd.state.readOnly) return !1;
        let Rd = dd.state.selection.main;
        if (Fd.length > 2 || 2 == Fd.length && 1 == (0, Wd.T)((0, Wd.S)(Fd, 0)) || Od != Rd.from || md != Rd.to) return !1;
        let Xd = function(dd, Od) {
          let md = aO(dd, dd.selection.main.head),
            Fd = md.brackets || yO.brackets;
          for (let Rd of Fd) {
            let Xd = wO((0, Wd.S)(Rd, 0));
            if (Od == Rd) return Xd == Rd ? uO(dd, Rd, Fd.indexOf(Rd + Rd + Rd) > -1, md) : SO(dd, Rd, Xd, md.before || yO.before);
            if (Od == Xd && xO(dd, dd.selection.main.from)) return sO(dd, Rd, Xd)
          }
          return null
        }(dd.state, Fd);
        return !!Xd && (dd.dispatch(Xd), !0)
      })),
      UO = [{
        key: "Backspace",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          if (Od.readOnly) return !1;
          let Fd = aO(Od, Od.selection.main.head).brackets || yO.brackets,
            Rd = null,
            Xd = Od.changeByRange((dd => {
              if (dd.empty) {
                let md = function(dd, Od) {
                  let md = dd.sliceString(Od - 2, Od);
                  return (0, Wd.T)((0, Wd.S)(md, 0)) == md.length ? md : md.slice(1)
                }(Od.doc, dd.head);
                for (let Rd of Fd)
                  if (Rd == md && BO(Od.doc, dd.head) == wO((0, Wd.S)(Rd, 0))) return {
                    changes: {
                      from: dd.head - Rd.length,
                      to: dd.head + Rd.length
                    },
                    range: Wd.j.cursor(dd.head - Rd.length)
                  }
              }
              return {
                range: Rd = dd
              }
            }));
          return Rd || md(Od.update(Xd, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Rd
        }
      }];

    function xO(dd, Od) {
      let md = !1;
      return dd.field(pO).between(0, dd.doc.length, (dd => {
        dd == Od && (md = !0)
      })), md
    }

    function BO(dd, Od) {
      let md = dd.sliceString(Od, Od + 2);
      return md.slice(0, (0, Wd.T)((0, Wd.S)(md, 0)))
    }

    function SO(dd, Od, md, Fd) {
      let Rd = null,
        Xd = dd.changeByRange((Xd => {
          if (!Xd.empty) return {
            changes: [{
              insert: Od,
              from: Xd.from
            }, {
              insert: md,
              from: Xd.to
            }],
            effects: bO.of(Xd.to + Od.length),
            range: Wd.j.range(Xd.anchor + Od.length, Xd.head + Od.length)
          };
          let Kd = BO(dd.doc, Xd.head);
          return !Kd || /\s/.test(Kd) || Fd.indexOf(Kd) > -1 ? {
            changes: {
              insert: Od + md,
              from: Xd.head
            },
            effects: bO.of(Xd.head + Od.length),
            range: Wd.j.cursor(Xd.head + Od.length)
          } : {
            range: Rd = Xd
          }
        }));
      return Rd ? null : dd.update(Xd, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function sO(dd, Od, md) {
      let Fd = null,
        Rd = dd.changeByRange((Od => Od.empty && BO(dd.doc, Od.head) == md ? {
          changes: {
            from: Od.head,
            to: Od.head + md.length,
            insert: md
          },
          range: Wd.j.cursor(Od.head + md.length)
        } : Fd = {
          range: Od
        }));
      return Fd ? null : dd.update(Rd, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function uO(dd, Od, md, Fd) {
      let Xd = Fd.stringPrefixes || yO.stringPrefixes,
        Kd = null,
        hd = dd.changeByRange((Fd => {
          if (!Fd.empty) return {
            changes: [{
              insert: Od,
              from: Fd.from
            }, {
              insert: Od,
              from: Fd.to
            }],
            effects: bO.of(Fd.to + Od.length),
            range: Wd.j.range(Fd.anchor + Od.length, Fd.head + Od.length)
          };
          let hd, vd = Fd.head,
            Qd = BO(dd.doc, vd);
          if (Qd == Od) {
            if (VO(dd, vd)) return {
              changes: {
                insert: Od + Od,
                from: vd
              },
              effects: bO.of(vd + Od.length),
              range: Wd.j.cursor(vd + Od.length)
            };
            if (xO(dd, vd)) {
              let Fd = md && dd.sliceDoc(vd, vd + 3 * Od.length) == Od + Od + Od ? Od + Od + Od : Od;
              return {
                changes: {
                  from: vd,
                  to: vd + Fd.length,
                  insert: Fd
                },
                range: Wd.j.cursor(vd + Fd.length)
              }
            }
          } else {
            if (md && dd.sliceDoc(vd - 2 * Od.length, vd) == Od + Od && (hd = iO(dd, vd - 2 * Od.length, Xd)) > -1 && VO(dd, hd)) return {
              changes: {
                insert: Od + Od + Od + Od,
                from: vd
              },
              effects: bO.of(vd + Od.length),
              range: Wd.j.cursor(vd + Od.length)
            };
            if (dd.charCategorizer(vd)(Qd) != Wd.i.Word && iO(dd, vd, Xd) > -1 && ! function(dd, Od, md, Wd) {
                let Fd = (0, Rd.sb)(dd).resolveInner(Od, -1),
                  Xd = Wd.reduce(((dd, Od) => Math.max(dd, Od.length)), 0);
                for (let Rd = 0; Rd < 5; Rd++) {
                  let Rd = dd.sliceDoc(Fd.from, Math.min(Fd.to, Fd.from + md.length + Xd)),
                    Kd = Rd.indexOf(md);
                  if (!Kd || Kd > -1 && Wd.indexOf(Rd.slice(0, Kd)) > -1) {
                    let Od = Fd.firstChild;
                    for (; Od && Od.from == Fd.from && Od.to - Od.from > md.length + Kd;) {
                      if (dd.sliceDoc(Od.to - md.length, Od.to) == md) return !1;
                      Od = Od.firstChild
                    }
                    return !0
                  }
                  let hd = Fd.to == Od && Fd.parent;
                  if (!hd) break;
                  Fd = hd
                }
                return !1
              }(dd, vd, Od, Xd)) return {
              changes: {
                insert: Od + Od,
                from: vd
              },
              effects: bO.of(vd + Od.length),
              range: Wd.j.cursor(vd + Od.length)
            }
          }
          return {
            range: Kd = Fd
          }
        }));
      return Kd ? null : dd.update(hd, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function VO(dd, Od) {
      let md = (0, Rd.sb)(dd).resolveInner(Od + 1);
      return md.parent && md.from == Od
    }

    function iO(dd, Od, md) {
      let Fd = dd.charCategorizer(Od);
      if (Fd(dd.sliceDoc(Od - 1, Od)) != Wd.i.Word) return Od;
      for (let Rd of md) {
        let md = Od - Rd.length;
        if (dd.sliceDoc(md, Od) == Rd && Fd(dd.sliceDoc(md - 1, md)) != Wd.i.Word) return md
      }
      return -1
    }

    function AO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [kd, cd, gd.of(dd), Cd, GO, fd]
    }
    const rO = [{
        key: "Ctrl-Space",
        run: Id
      }, {
        mac: "Alt-`",
        run: Id
      }, {
        mac: "Alt-i",
        run: Id
      }, {
        key: "Escape",
        run: dd => {
          let Od = dd.state.field(cd, !1);
          return !(!Od || !Od.active.some((dd => 0 != dd.state))) && (dd.dispatch({
            effects: Td.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: ed(!0)
      }, {
        key: "ArrowUp",
        run: ed(!1)
      }, {
        key: "PageDown",
        run: ed(!0, "page")
      }, {
        key: "PageUp",
        run: ed(!1, "page")
      }, {
        key: "Enter",
        run: dd => {
          let Od = dd.state.field(cd, !1);
          return !(dd.state.readOnly || !Od || !Od.open || Od.open.selected < 0 || Od.open.disabled || Date.now() - Od.open.timestamp < dd.state.facet(gd).interactionDelay) && jd(dd, Od.open.options[Od.open.selected])
        }
      }],
      GO = Wd.v.highest(Fd.O.computeN([gd], (dd => dd.facet(gd).defaultKeymap ? [rO] : [])))
  },
  53911: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd,
      c: () => od,
      f: () => Qd,
      j: () => td
    });
    var Wd = md(53759);
    class Fd {
      constructor(dd, Od, md, Wd) {
        this.origin = dd, this.changes = Od, this.effects = md, this.clientID = Wd
      }
    }
    class Rd {
      constructor(dd, Od) {
        this.version = dd, this.unconfirmed = Od
      }
    }
    const Xd = Wd.p.define({
        combine(dd) {
          let Od = (0, Wd.W)(dd, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: dd => dd
          });
          return null == Od.clientID && (Od.clientID = dd.length && dd[0].generatedID || ""), Od
        }
      }),
      Kd = Wd.c.define(),
      hd = Wd.M.define({
        create: dd => new Rd(dd.facet(Xd).startVersion, []),
        update(dd, Od) {
          let md = Od.annotation(Kd);
          if (md) return md;
          let {
            sharedEffects: Wd,
            clientID: hd
          } = Od.startState.facet(Xd), vd = Wd(Od);
          return vd.length || !Od.changes.empty ? new Rd(dd.version, dd.unconfirmed.concat(new Fd(Od, Od.changes, vd, hd))) : dd
        }
      });

    function vd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [hd, Xd.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, dd))]
    }

    function Qd(dd, Od) {
      let {
        version: md,
        unconfirmed: vd
      } = dd.field(hd), {
        clientID: Qd
      } = dd.facet(Xd);
      md += Od.length;
      let td = [],
        od = null,
        Nd = 0;
      for (let Fd of Od) {
        let dd = Nd < vd.length ? vd[Nd] : null;
        dd && dd.clientID == Fd.clientID ? (od && (od = od.map(dd.changes, !0)), td = Wd.I.mapEffects(td, Fd.changes), Nd++) : (td = Wd.I.mapEffects(td, Fd.changes), Fd.effects && (td = td.concat(Fd.effects)), od = od ? od.compose(Fd.changes) : Fd.changes)
      }
      if (Nd && (vd = vd.slice(Nd)), vd.length && (od && (vd = vd.map((dd => {
          let Od = dd.changes.map(od);
          return od = od.map(dd.changes, !0), new Fd(dd.origin, Od, Wd.I.mapEffects(dd.effects, od), Qd)
        }))), td.length)) {
        let dd = vd.reduce(((dd, Od) => dd.compose(Od.changes)), Wd.ChangeSet.empty(vd[0].changes.length));
        td = Wd.I.mapEffects(td, dd)
      }
      return od ? dd.update({
        changes: od,
        effects: td,
        annotations: [Wd.Q.addToHistory.of(!1), Wd.Q.remote.of(!0), Kd.of(new Rd(md, vd))],
        filter: !1
      }) : dd.update({
        annotations: [Kd.of(new Rd(md, vd))]
      })
    }

    function td(dd) {
      return dd.field(hd).unconfirmed
    }

    function od(dd) {
      return dd.field(hd).version
    }
  },
  53809: (dd, Od, md) => {
    md.d(Od, {
      e: () => bO
    });
    var Wd = md(53798);
    class Fd {
      constructor(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        let vd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Qd = arguments.length > 10 ? arguments[10] : void 0;
        this.p = dd, this.stack = Od, this.state = md, this.reducePos = Wd, this.pos = Fd, this.score = Rd, this.buffer = Xd, this.bufferBase = Kd, this.curContext = hd, this.lookAhead = vd, this.parent = Qd
      }
      toString() {
        return `[${this.stack.filter(((dd,Od)=>Od%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = dd.parser.context;
        return new Fd(dd, [], Od, md, md, 0, [], 0, Wd ? new Rd(Wd, Wd.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(dd, Od) {
        this.stack.push(this.state, Od, this.bufferBase + this.buffer.length), this.state = dd
      }
      reduce(dd) {
        var Od;
        let md = dd >> 19,
          Wd = 65535 & dd,
          {
            parser: Fd
          } = this.p,
          Rd = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Xd = Fd.dynamicPrecedence(Wd);
        if (Xd && (this.score += Xd), 0 == md) return this.pushState(Fd.getGoto(this.state, Wd, !0), this.reducePos), Wd < Fd.minRepeatTerm && this.storeNode(Wd, this.reducePos, this.reducePos, Rd ? 8 : 4, !0), void this.reduceContext(Wd, this.reducePos);
        let Kd = this.stack.length - 3 * (md - 1) - (262144 & dd ? 6 : 0),
          hd = Kd ? this.stack[Kd - 2] : this.p.By[0].from,
          vd = this.reducePos - hd;
        vd >= 2e3 && !(null === (Od = this.p.parser.nodeSet.types[Wd]) || void 0 === Od ? void 0 : Od.isAnonymous) && (hd == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = vd) : this.p.lastBigReductionSize < vd && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = hd, this.p.lastBigReductionSize = vd));
        let Qd = Kd ? this.stack[Kd - 1] : 0,
          td = this.bufferBase + this.buffer.length - Qd;
        if (Wd < Fd.minRepeatTerm || 131072 & dd) {
          let dd = Fd.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Wd, hd, dd, td + 4, !0)
        }
        if (262144 & dd) this.state = this.stack[Kd];
        else {
          let dd = this.stack[Kd - 3];
          this.state = Fd.getGoto(dd, Wd, !0)
        }
        for (; this.stack.length > Kd;) this.stack.pop();
        this.reduceContext(Wd, hd)
      }
      storeNode(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == dd && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let dd = this,
            Wd = this.buffer.length;
          if (0 == Wd && dd.parent && (Wd = dd.bufferBase - dd.parent.bufferBase, dd = dd.parent), Wd > 0 && 0 == dd.buffer[Wd - 4] && dd.buffer[Wd - 1] > -1) {
            if (Od == md) return;
            if (dd.buffer[Wd - 2] >= Od) return void(dd.buffer[Wd - 2] = md)
          }
        }
        if (Fd && this.pos != md) {
          let Fd = this.buffer.length;
          if (Fd > 0 && (0 != this.buffer[Fd - 4] || this.buffer[Fd - 1] < 0)) {
            let dd = !1;
            for (let Od = Fd; Od > 0 && this.buffer[Od - 2] > md; Od -= 4)
              if (this.buffer[Od - 1] >= 0) {
                dd = !0;
                break
              } if (dd)
              for (; Fd > 0 && this.buffer[Fd - 2] > md;) this.buffer[Fd] = this.buffer[Fd - 4], this.buffer[Fd + 1] = this.buffer[Fd - 3], this.buffer[Fd + 2] = this.buffer[Fd - 2], this.buffer[Fd + 3] = this.buffer[Fd - 1], Fd -= 4, Wd > 4 && (Wd -= 4)
          }
          this.buffer[Fd] = dd, this.buffer[Fd + 1] = Od, this.buffer[Fd + 2] = md, this.buffer[Fd + 3] = Wd
        } else this.buffer.push(dd, Od, md, Wd)
      }
      shift(dd, Od, md, Wd) {
        if (131072 & dd) this.pushState(65535 & dd, this.pos);
        else if (0 == (262144 & dd)) {
          let Fd = dd,
            {
              parser: Rd
            } = this.p;
          this.pos = Wd;
          let Xd = Rd.stateFlag(Fd, 1);
          !Xd && (Wd > md || Od <= Rd.maxNode) && (this.reducePos = Wd), this.pushState(Fd, Xd ? md : Math.min(md, this.reducePos)), this.shiftContext(Od, md), Od <= Rd.maxNode && this.buffer.push(Od, md, Wd, 4)
        } else this.pos = Wd, this.shiftContext(Od, md), Od <= this.p.parser.maxNode && this.buffer.push(Od, md, Wd, 4)
      }
      apply(dd, Od, md, Wd) {
        65536 & dd ? this.reduce(dd) : this.shift(dd, Od, md, Wd)
      }
      useNode(dd, Od) {
        let md = this.p.reused.length - 1;
        (md < 0 || this.p.reused[md] != dd) && (this.p.reused.push(dd), md++);
        let Wd = this.pos;
        this.reducePos = this.pos = Wd + dd.length, this.pushState(Od, Wd), this.buffer.push(md, Wd, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, dd, this, this.p.stream.reset(this.pos - dd.length)))
      }
      split() {
        let dd = this,
          Od = dd.buffer.length;
        for (; Od > 0 && dd.buffer[Od - 2] > dd.reducePos;) Od -= 4;
        let md = dd.buffer.slice(Od),
          Wd = dd.bufferBase + Od;
        for (; dd && Wd == dd.bufferBase;) dd = dd.parent;
        return new Fd(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, md, Wd, this.curContext, this.lookAhead, dd)
      }
      recoverByDelete(dd, Od) {
        let md = dd <= this.p.parser.maxNode;
        md && this.storeNode(dd, this.pos, Od, 4), this.storeNode(0, this.pos, Od, md ? 8 : 4), this.pos = this.reducePos = Od, this.score -= 190
      }
      canShift(dd) {
        for (let Od = new Xd(this);;) {
          let md = this.p.parser.stateSlot(Od.state, 4) || this.p.parser.hasAction(Od.state, dd);
          if (0 == md) return !1;
          if (0 == (65536 & md)) return !0;
          Od.reduce(md)
        }
      }
      recoverByInsert(dd) {
        if (this.stack.length >= 300) return [];
        let Od = this.p.parser.nextStates(this.state);
        if (Od.length > 8 || this.stack.length >= 120) {
          let md = [];
          for (let Wd, Fd = 0; Fd < Od.length; Fd += 2)(Wd = Od[Fd + 1]) != this.state && this.p.parser.hasAction(Wd, dd) && md.push(Od[Fd], Wd);
          if (this.stack.length < 120)
            for (let dd = 0; md.length < 8 && dd < Od.length; dd += 2) {
              let Wd = Od[dd + 1];
              md.some(((dd, Od) => 1 & Od && dd == Wd)) || md.push(Od[dd], Wd)
            }
          Od = md
        }
        let md = [];
        for (let Wd = 0; Wd < Od.length && md.length < 4; Wd += 2) {
          let dd = Od[Wd + 1];
          if (dd == this.state) continue;
          let Fd = this.split();
          Fd.pushState(dd, this.pos), Fd.storeNode(0, Fd.pos, Fd.pos, 4, !0), Fd.shiftContext(Od[Wd], this.pos), Fd.reducePos = this.pos, Fd.score -= 200, md.push(Fd)
        }
        return md
      }
      forceReduce() {
        let {
          parser: dd
        } = this.p, Od = dd.stateSlot(this.state, 5);
        if (0 == (65536 & Od)) return !1;
        if (!dd.validAction(this.state, Od)) {
          let md = Od >> 19,
            Wd = 65535 & Od,
            Fd = this.stack.length - 3 * md;
          if (Fd < 0 || dd.getGoto(this.stack[Fd], Wd, !1) < 0) {
            let dd = this.findForcedReduction();
            if (null == dd) return !1;
            Od = dd
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Od), !0
      }
      findForcedReduction() {
        let {
          parser: dd
        } = this.p, Od = [], md = (Wd, Fd) => {
          if (!Od.includes(Wd)) return Od.push(Wd), dd.allActions(Wd, (Od => {
            if (393216 & Od);
            else if (65536 & Od) {
              let md = (Od >> 19) - Fd;
              if (md > 1) {
                let Wd = 65535 & Od,
                  Fd = this.stack.length - 3 * md;
                if (Fd >= 0 && dd.getGoto(this.stack[Fd], Wd, !1) >= 0) return md << 19 | 65536 | Wd
              }
            } else {
              let dd = md(Od, Fd + 1);
              if (null != dd) return dd
            }
          }))
        };
        return md(this.state, 0)
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
        for (let Od = 0; Od < this.stack.length; Od += 3)
          if (this.stack[Od] != dd.stack[Od]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(dd) {
        return this.p.parser.dialect.flags[dd]
      }
      shiftContext(dd, Od) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, dd, this, this.p.stream.reset(Od)))
      }
      reduceContext(dd, Od) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, dd, this, this.p.stream.reset(Od)))
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
          let Od = new Rd(this.curContext.tracker, dd);
          Od.hash != this.curContext.hash && this.emitContext(), this.curContext = Od
        }
      }
      setLookAhead(dd) {
        return !(dd <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = dd, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Rd {
      constructor(dd, Od) {
        this.tracker = dd, this.context = Od, this.hash = dd.strict ? dd.hash(Od) : 0
      }
    }
    class Xd {
      constructor(dd) {
        this.start = dd, this.state = dd.state, this.stack = dd.stack, this.base = this.stack.length
      }
      reduce(dd) {
        let Od = 65535 & dd,
          md = dd >> 19;
        0 == md ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (md - 1);
        let Wd = this.start.p.parser.getGoto(this.stack[this.base - 3], Od, !0);
        this.state = Wd
      }
    }
    class Kd {
      constructor(dd, Od, md) {
        this.stack = dd, this.pos = Od, this.index = md, this.buffer = dd.buffer, 0 == this.index && this.maybeNext()
      }
      static create(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.bufferBase + dd.buffer.length;
        return new Kd(dd, Od, Od - dd.bufferBase)
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
        return new Kd(this.stack, this.pos, this.index)
      }
    }

    function hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof dd) return dd;
      let md = null;
      for (let Wd = 0, Fd = 0; Wd < dd.length;) {
        let Rd = 0;
        for (;;) {
          let Od = dd.charCodeAt(Wd++),
            md = !1;
          if (126 == Od) {
            Rd = 65535;
            break
          }
          Od >= 92 && Od--, Od >= 34 && Od--;
          let Fd = Od - 32;
          if (Fd >= 46 && (Fd -= 46, md = !0), Rd += Fd, md) break;
          Rd *= 46
        }
        md ? md[Fd++] = Rd : md = new Od(Rd)
      }
      return md
    }
    class vd {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Qd = new vd;
    class td {
      constructor(dd, Od) {
        this.input = dd, this.By = Od, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Qd, this.rangeIndex = 0, this.pos = this.chunkPos = Od[0].from, this.range = Od[0], this.end = Od[Od.length - 1].to, this.readNext()
      }
      resolveOffset(dd, Od) {
        let md = this.range,
          Wd = this.rangeIndex,
          Fd = this.pos + dd;
        for (; Fd < md.from;) {
          if (!Wd) return null;
          let dd = this.By[--Wd];
          Fd -= md.from - dd.to, md = dd
        }
        for (; Od < 0 ? Fd > md.to : Fd >= md.to;) {
          if (Wd == this.By.length - 1) return null;
          let dd = this.By[++Wd];
          Fd += dd.from - md.to, md = dd
        }
        return Fd
      }
      clipPos(dd) {
        if (dd >= this.range.from && dd < this.range.to) return dd;
        for (let Od of this.By)
          if (Od.to > dd) return Math.max(dd, Od.from);
        return this.end
      }
      peek(dd) {
        let Od, md, Wd = this.chunkOff + dd;
        if (Wd >= 0 && Wd < this.chunk.length) Od = this.pos + dd, md = this.chunk.charCodeAt(Wd);
        else {
          let Wd = this.resolveOffset(dd, 1);
          if (null == Wd) return -1;
          if (Od = Wd, Od >= this.chunk2Pos && Od < this.chunk2Pos + this.chunk2.length) md = this.chunk2.charCodeAt(Od - this.chunk2Pos);
          else {
            let dd = this.rangeIndex,
              Wd = this.range;
            for (; Wd.to <= Od;) Wd = this.By[++dd];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Od), Od + this.chunk2.length > Wd.to && (this.chunk2 = this.chunk2.slice(0, Wd.to - Od)), md = this.chunk2.charCodeAt(0)
          }
        }
        return Od >= this.token.lookAhead && (this.token.lookAhead = Od + 1), md
      }
      acceptToken(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = Od ? this.resolveOffset(Od, -1) : this.pos;
        if (null == md || md < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = dd, this.token.end = md
      }
      acceptTokenTo(dd, Od) {
        this.token.value = dd, this.token.end = Od
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: dd,
            chunkPos: Od
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = dd, this.chunk2Pos = Od, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let dd = this.input.chunk(this.pos),
            Od = this.pos + dd.length;
          this.chunk = Od > this.range.to ? dd.slice(0, this.range.to - this.pos) : dd, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += dd; this.pos + dd >= this.range.to;) {
          if (this.rangeIndex == this.By.length - 1) return this.setDone();
          dd -= this.range.to - this.pos, this.range = this.By[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += dd, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.By[this.rangeIndex = this.By.length - 1], this.chunk = "", this.next = -1
      }
      reset(dd, Od) {
        if (Od ? (this.token = Od, Od.start = dd, Od.lookAhead = dd + 1, Od.value = Od.extended = -1) : this.token = Qd, this.pos != dd) {
          if (this.pos = dd, dd == this.end) return this.setDone(), this;
          for (; dd < this.range.from;) this.range = this.By[--this.rangeIndex];
          for (; dd >= this.range.to;) this.range = this.By[++this.rangeIndex];
          dd >= this.chunkPos && dd < this.chunkPos + this.chunk.length ? this.chunkOff = dd - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(dd, Od) {
        if (dd >= this.chunkPos && Od <= this.chunkPos + this.chunk.length) return this.chunk.slice(dd - this.chunkPos, Od - this.chunkPos);
        if (dd >= this.chunk2Pos && Od <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(dd - this.chunk2Pos, Od - this.chunk2Pos);
        if (dd >= this.range.from && Od <= this.range.to) return this.input.read(dd, Od);
        let md = "";
        for (let Wd of this.By) {
          if (Wd.from >= Od) break;
          Wd.to > dd && (md += this.input.read(Math.max(Wd.from, dd), Math.min(Wd.to, Od)))
        }
        return md
      }
    }
    class od {
      constructor(dd, Od) {
        this.data = dd, this.id = Od
      }
      token(dd, Od) {
        let {
          parser: md
        } = Od.p;
        Hd(this.data, dd, Od, this.id, md.data, md.tokenPrecTable)
      }
    }
    od.prototype.contextual = od.prototype.fallback = od.prototype.extend = !1;
    class Nd {
      constructor(dd, Od, md) {
        this.precTable = Od, this.elseToken = md, this.data = "string" == typeof dd ? hd(dd) : dd
      }
      token(dd, Od) {
        let md = dd.pos,
          Wd = 0;
        for (;;) {
          let md = dd.next < 0,
            Fd = dd.resolveOffset(1, 1);
          if (Hd(this.data, dd, Od, 0, this.data, this.precTable), dd.token.value > -1) break;
          if (null == this.elseToken) return;
          if (md || Wd++, null == Fd) break;
          dd.reset(Fd, dd.token)
        }
        Wd && (dd.reset(md, dd.token), dd.acceptToken(this.elseToken, Wd))
      }
    }
    Nd.prototype.contextual = od.prototype.fallback = od.prototype.extend = !1;
    class qd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = dd, this.contextual = !!Od.contextual, this.fallback = !!Od.fallback, this.extend = !!Od.extend
      }
    }

    function Hd(dd, Od, md, Wd, Fd, Rd) {
      let Xd = 0,
        Kd = 1 << Wd,
        {
          dialect: hd
        } = md.p.parser;
      dd: for (; 0 != (Kd & dd[Xd]);) {
        let md = dd[Xd + 1];
        for (let td = Xd + 3; td < md; td += 2)
          if ((dd[td + 1] & Kd) > 0) {
            let md = dd[td];
            if (hd.allows(md) && (-1 == Od.token.value || Od.token.value == md || bd(md, Od.token.value, Fd, Rd))) {
              Od.acceptToken(md);
              break
            }
          } let Wd = Od.next,
          vd = 0,
          Qd = dd[Xd + 2];
        if (!(Od.next < 0 && Qd > vd && 65535 == dd[md + 3 * Qd - 3])) {
          for (; vd < Qd;) {
            let Fd = vd + Qd >> 1,
              Rd = md + Fd + (Fd << 1),
              Kd = dd[Rd],
              hd = dd[Rd + 1] || 65536;
            if (Wd < Kd) Qd = Fd;
            else {
              if (!(Wd >= hd)) {
                Xd = dd[Rd + 2], Od.advance();
                continue dd
              }
              vd = Fd + 1
            }
          }
          break
        }
        Xd = dd[md + 3 * Qd - 1]
      }
    }

    function yd(dd, Od, md) {
      for (let Wd, Fd = Od; 65535 != (Wd = dd[Fd]); Fd++)
        if (Wd == md) return Fd - Od;
      return -1
    }

    function bd(dd, Od, md, Wd) {
      let Fd = yd(md, Wd, Od);
      return Fd < 0 || yd(md, Wd, dd) < Fd
    }
    const Td = "undefined" != typeof process && {
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
    let pd = null;

    function Yd(dd, Od, md) {
      let Fd = dd.cursor(Wd.d.IncludeAnonymous);
      for (Fd.moveTo(Od);;)
        if (!(md < 0 ? Fd.childBefore(Od) : Fd.childAfter(Od)))
          for (;;) {
            if ((md < 0 ? Fd.to < Od : Fd.from > Od) && !Fd.type.isError) return md < 0 ? Math.max(0, Math.min(Fd.to - 1, Od - 25)) : Math.min(dd.length, Math.max(Fd.from + 1, Od + 25));
            if (md < 0 ? Fd.prevSibling() : Fd.nextSibling()) break;
            if (!Fd.parent()) return md < 0 ? 0 : dd.length
          }
    }
    class gd {
      constructor(dd, Od) {
        this.fragments = dd, this.nodeSet = Od, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let dd = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (dd) {
          for (this.safeFrom = dd.openStart ? Yd(dd.tree, dd.from + dd.offset, 1) - dd.offset : dd.from, this.safeTo = dd.openEnd ? Yd(dd.tree, dd.to + dd.offset, -1) - dd.offset : dd.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(dd.tree), this.start.push(-dd.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(dd) {
        if (dd < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= dd;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Od = this.trees.length - 1;
          if (Od < 0) return this.nextFragment(), null;
          let md = this.trees[Od],
            Fd = this.index[Od];
          if (Fd == md.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Rd = md.children[Fd],
            Xd = this.start[Od] + md.positions[Fd];
          if (Xd > dd) return this.nextStart = Xd, null;
          if (Rd instanceof Wd.y) {
            if (Xd == dd) {
              if (Xd < this.safeFrom) return null;
              let dd = Xd + Rd.length;
              if (dd <= this.safeTo) {
                let Od = Rd.prop(Wd.h.lookAhead);
                if (!Od || dd + Od < this.fragment.to) return Rd
              }
            }
            this.index[Od]++, Xd + Rd.length >= Math.max(this.safeFrom, dd) && (this.trees.push(Rd), this.start.push(Xd), this.index.push(0))
          } else this.index[Od]++, this.nextStart = Xd + Rd.length
        }
      }
    }
    class wd {
      constructor(dd, Od) {
        this.stream = Od, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = dd.tokenizers.map((dd => new vd))
      }
      getActions(dd) {
        let Od = 0,
          md = null,
          {
            parser: Wd
          } = dd.p,
          {
            tokenizers: Fd
          } = Wd,
          Rd = Wd.stateSlot(dd.state, 3),
          Xd = dd.curContext ? dd.curContext.hash : 0,
          Kd = 0;
        for (let hd = 0; hd < Fd.length; hd++) {
          if (0 == (1 << hd & Rd)) continue;
          let Wd = Fd[hd],
            vd = this.tokens[hd];
          if ((!md || Wd.fallback) && ((Wd.contextual || vd.start != dd.pos || vd.mask != Rd || vd.context != Xd) && (this.updateCachedToken(vd, Wd, dd), vd.mask = Rd, vd.context = Xd), vd.lookAhead > vd.end + 25 && (Kd = Math.max(vd.lookAhead, Kd)), 0 != vd.value)) {
            let Fd = Od;
            if (vd.extended > -1 && (Od = this.addActions(dd, vd.extended, vd.end, Od)), Od = this.addActions(dd, vd.value, vd.end, Od), !Wd.extend && (md = vd, Od > Fd)) break
          }
        }
        for (; this.actions.length > Od;) this.actions.pop();
        return Kd && dd.setLookAhead(Kd), md || dd.pos != this.stream.end || (md = new vd, md.value = dd.p.parser.eofTerm, md.start = md.end = dd.pos, Od = this.addActions(dd, md.value, md.end, Od)), this.mainToken = md, this.actions
      }
      getMainToken(dd) {
        if (this.mainToken) return this.mainToken;
        let Od = new vd,
          {
            pos: md,
            p: Wd
          } = dd;
        return Od.start = md, Od.end = Math.min(md + 1, Wd.stream.end), Od.value = md == Wd.stream.end ? Wd.parser.eofTerm : 0, Od
      }
      updateCachedToken(dd, Od, md) {
        let Wd = this.stream.clipPos(md.pos);
        if (Od.token(this.stream.reset(Wd, dd), md), dd.value > -1) {
          let {
            parser: Od
          } = md.p;
          for (let Wd = 0; Wd < Od.specialized.length; Wd++)
            if (Od.specialized[Wd] == dd.value) {
              let Fd = Od.specializers[Wd](this.stream.read(dd.start, dd.end), md);
              if (Fd >= 0 && md.p.parser.dialect.allows(Fd >> 1)) {
                0 == (1 & Fd) ? dd.value = Fd >> 1 : dd.extended = Fd >> 1;
                break
              }
            }
        } else dd.value = 0, dd.end = this.stream.clipPos(Wd + 1)
      }
      putAction(dd, Od, md, Wd) {
        for (let Fd = 0; Fd < Wd; Fd += 3)
          if (this.actions[Fd] == dd) return Wd;
        return this.actions[Wd++] = dd, this.actions[Wd++] = Od, this.actions[Wd++] = md, Wd
      }
      addActions(dd, Od, md, Wd) {
        let {
          state: Fd
        } = dd, {
          parser: Rd
        } = dd.p, {
          data: Xd
        } = Rd;
        for (let Kd = 0; Kd < 2; Kd++)
          for (let dd = Rd.stateSlot(Fd, Kd ? 2 : 1);; dd += 3) {
            if (65535 == Xd[dd]) {
              if (1 != Xd[dd + 1]) {
                0 == Wd && 2 == Xd[dd + 1] && (Wd = this.putAction(Sd(Xd, dd + 2), Od, md, Wd));
                break
              }
              dd = Sd(Xd, dd + 2)
            }
            Xd[dd] == Od && (Wd = this.putAction(Sd(Xd, dd + 1), Od, md, Wd))
          }
        return Wd
      }
    }
    class Ed {
      constructor(dd, Od, md, Wd) {
        this.parser = dd, this.input = Od, this.By = Wd, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new td(Od, Wd), this.tokens = new wd(dd, this.stream), this.topTerm = dd.top[1];
        let {
          from: Rd
        } = Wd[0];
        this.stacks = [Fd.start(this, dd.top[0], Rd)], this.fragments = md.length && this.stream.end - Rd > 4 * dd.bufferLength ? new gd(md, dd.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let dd, Od, md = this.stacks,
          Wd = this.minStackPos,
          Fd = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == md.length) {
          let [dd] = md;
          for (; dd.forceReduce() && dd.stack.length && dd.stack[dd.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Rd = 0; Rd < md.length; Rd++) {
          let Xd = md[Rd];
          for (;;) {
            if (this.tokens.mainToken = null, Xd.pos > Wd) Fd.push(Xd);
            else {
              if (this.advanceStack(Xd, Fd, md)) continue;
              {
                dd || (dd = [], Od = []), dd.push(Xd);
                let md = this.tokens.getMainToken(Xd);
                Od.push(md.value, md.end)
              }
            }
            break
          }
        }
        if (!Fd.length) {
          let Od = dd && function(dd) {
            let Od = null;
            for (let md of dd) {
              let dd = md.p.stoppedAt;
              (md.pos == md.p.stream.end || null != dd && md.pos > dd) && md.p.parser.stateFlag(md.state, 2) && (!Od || Od.score < md.score) && (Od = md)
            }
            return Od
          }(dd);
          if (Od) return Td && console.log("Finish with " + this.stackID(Od)), this.stackToTree(Od);
          if (this.parser.strict) throw Td && dd && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Wd);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && dd) {
          let md = null != this.stoppedAt && dd[0].pos > this.stoppedAt ? dd[0] : this.runRecovery(dd, Od, Fd);
          if (md) return Td && console.log("Force-finish " + this.stackID(md)), this.stackToTree(md.forceAll())
        }
        if (this.recovering) {
          let dd = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Fd.length > dd)
            for (Fd.sort(((dd, Od) => Od.score - dd.score)); Fd.length > dd;) Fd.pop();
          Fd.some((dd => dd.reducePos > Wd)) && this.recovering--
        } else if (Fd.length > 1) {
          dd: for (let dd = 0; dd < Fd.length - 1; dd++) {
            let Od = Fd[dd];
            for (let md = dd + 1; md < Fd.length; md++) {
              let Wd = Fd[md];
              if (Od.sameState(Wd) || Od.buffer.length > 500 && Wd.buffer.length > 500) {
                if (!((Od.score - Wd.score || Od.buffer.length - Wd.buffer.length) > 0)) {
                  Fd.splice(dd--, 1);
                  continue dd
                }
                Fd.splice(md--, 1)
              }
            }
          }
          Fd.length > 12 && (Fd.sort(((dd, Od) => Od.score - dd.score)), Fd.splice(12, Fd.length - 12))
        }
        this.minStackPos = Fd[0].pos;
        for (let Rd = 1; Rd < Fd.length; Rd++) Fd[Rd].pos < this.minStackPos && (this.minStackPos = Fd[Rd].pos);
        return null
      }
      stopAt(dd) {
        if (null != this.stoppedAt && this.stoppedAt < dd) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = dd
      }
      advanceStack(dd, Od, md) {
        let Fd = dd.pos,
          {
            parser: Rd
          } = this,
          Xd = Td ? this.stackID(dd) + " -> " : "";
        if (null != this.stoppedAt && Fd > this.stoppedAt) return dd.forceReduce() ? dd : null;
        if (this.fragments) {
          let Od = dd.curContext && dd.curContext.tracker.strict,
            md = Od ? dd.curContext.hash : 0;
          for (let Kd = this.fragments.nodeAt(Fd); Kd;) {
            let Fd = this.parser.nodeSet.types[Kd.type.id] == Kd.type ? Rd.getGoto(dd.state, Kd.type.id) : -1;
            if (Fd > -1 && Kd.length && (!Od || (Kd.prop(Wd.h.contextHash) || 0) == md)) return dd.useNode(Kd, Fd), Td && console.log(Xd + this.stackID(dd) + ` (via reuse of ${Rd.getName(Kd.type.id)})`), !0;
            if (!(Kd instanceof Wd.y) || 0 == Kd.children.length || Kd.positions[0] > 0) break;
            let hd = Kd.children[0];
            if (!(hd instanceof Wd.y && 0 == Kd.positions[0])) break;
            Kd = hd
          }
        }
        let Kd = Rd.stateSlot(dd.state, 4);
        if (Kd > 0) return dd.reduce(Kd), Td && console.log(Xd + this.stackID(dd) + ` (via always-reduce ${Rd.getName(65535&Kd)})`), !0;
        if (dd.stack.length >= 8400)
          for (; dd.stack.length > 6e3 && dd.forceReduce(););
        let hd = this.tokens.getActions(dd);
        for (let Wd = 0; Wd < hd.length;) {
          let Kd = hd[Wd++],
            vd = hd[Wd++],
            Qd = hd[Wd++],
            td = Wd == hd.length || !md,
            od = td ? dd : dd.split(),
            Nd = this.tokens.mainToken;
          if (od.apply(Kd, vd, Nd ? Nd.start : od.pos, Qd), Td && console.log(Xd + this.stackID(od) + ` (via ${0==(65536&Kd)?"shift":`reduce of ${Rd.getName(65535&Kd)}`} for ${Rd.getName(vd)} @ ${Fd}${od==dd?"":", split"})`), td) return !0;
          od.pos > Fd ? Od.push(od) : md.push(od)
        }
        return !1
      }
      advanceFully(dd, Od) {
        let md = dd.pos;
        for (;;) {
          if (!this.advanceStack(dd, null, null)) return !1;
          if (dd.pos > md) return Jd(dd, Od), !0
        }
      }
      runRecovery(dd, Od, md) {
        let Wd = null,
          Fd = !1;
        for (let Rd = 0; Rd < dd.length; Rd++) {
          let Xd = dd[Rd],
            Kd = Od[Rd << 1],
            hd = Od[1 + (Rd << 1)],
            vd = Td ? this.stackID(Xd) + " -> " : "";
          if (Xd.deadEnd) {
            if (Fd) continue;
            if (Fd = !0, Xd.restart(), Td && console.log(vd + this.stackID(Xd) + " (restarted)"), this.advanceFully(Xd, md)) continue
          }
          let Qd = Xd.split(),
            td = vd;
          for (let dd = 0; dd < 10 && Qd.forceReduce(); dd++) {
            if (Td && console.log(td + this.stackID(Qd) + " (via force-reduce)"), this.advanceFully(Qd, md)) break;
            Td && (td = this.stackID(Qd) + " -> ")
          }
          for (let dd of Xd.recoverByInsert(Kd)) Td && console.log(vd + this.stackID(dd) + " (via recover-insert)"), this.advanceFully(dd, md);
          this.stream.end > Xd.pos ? (hd == Xd.pos && (hd++, Kd = 0), Xd.recoverByDelete(Kd, hd), Td && console.log(vd + this.stackID(Xd) + ` (via recover-delete ${this.parser.getName(Kd)})`), Jd(Xd, md)) : (!Wd || Wd.score < Qd.score) && (Wd = Qd)
        }
        return Wd
      }
      stackToTree(dd) {
        return dd.close(), Wd.y.build({
          buffer: Kd.create(dd),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.By[0].from,
          length: dd.pos - this.By[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(dd) {
        let Od = (pd || (pd = new WeakMap)).get(dd);
        return Od || pd.set(dd, Od = String.fromCodePoint(this.nextStackID++)), Od + dd
      }
    }

    function Jd(dd, Od) {
      for (let md = 0; md < Od.length; md++) {
        let Wd = Od[md];
        if (Wd.pos == dd.pos && Wd.sameState(dd)) return void(Od[md].score < dd.score && (Od[md] = dd))
      }
      Od.push(dd)
    }
    class Ud {
      constructor(dd, Od, md) {
        this.source = dd, this.flags = Od, this.disabled = md
      }
      allows(dd) {
        return !this.disabled || 0 == this.disabled[dd]
      }
    }
    const xd = dd => dd;
    class Bd extends Wd.s {
      constructor(dd) {
        if (super(), this.wrappers = [], 14 != dd.version) throw new RangeError(`Parser version (${dd.version}) doesn't match runtime version (14)`);
        let Od = dd.nodeNames.split(" ");
        this.minRepeatTerm = Od.length;
        for (let Wd = 0; Wd < dd.repeatNodeCount; Wd++) Od.push("");
        let md = Object.keys(dd.topRules).map((Od => dd.topRules[Od][1])),
          Fd = [];
        for (let Wd = 0; Wd < Od.length; Wd++) Fd.push([]);

        function Rd(dd, Od, md) {
          Fd[dd].push([Od, Od.deserialize(String(md))])
        }
        if (dd.nodeProps)
          for (let Kd of dd.nodeProps) {
            let dd = Kd[0];
            "string" == typeof dd && (dd = Wd.h[dd]);
            for (let Od = 1; Od < Kd.length;) {
              let md = Kd[Od++];
              if (md >= 0) Rd(md, dd, Kd[Od++]);
              else {
                let Wd = Kd[Od + -md];
                for (let Fd = -md; Fd > 0; Fd--) Rd(Kd[Od++], dd, Wd);
                Od++
              }
            }
          }
        this.nodeSet = new Wd.k(Od.map(((Od, Rd) => Wd.m.define({
          name: Rd >= this.minRepeatTerm ? void 0 : Od,
          id: Rd,
          props: Fd[Rd],
          top: md.indexOf(Rd) > -1,
          error: 0 == Rd,
          skipped: dd.skippedNodes && dd.skippedNodes.indexOf(Rd) > -1
        })))), dd.propSources && (this.nodeSet = this.nodeSet.extend(...dd.propSources)), this.strict = !1, this.bufferLength = Wd.b;
        let Xd = hd(dd.tokenData);
        this.context = dd.context, this.specializerSpecs = dd.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Wd = 0; Wd < this.specializerSpecs.length; Wd++) this.specialized[Wd] = this.specializerSpecs[Wd].term;
        this.specializers = this.specializerSpecs.map(sd), this.states = hd(dd.states, Uint32Array), this.data = hd(dd.stateData), this.goto = hd(dd.goto), this.maxTerm = dd.maxTerm, this.tokenizers = dd.tokenizers.map((dd => "number" == typeof dd ? new od(Xd, dd) : dd)), this.topRules = dd.topRules, this.dialects = dd.dialects || {}, this.dynamicPrecedences = dd.dynamicPrecedences || null, this.tokenPrecTable = dd.tokenPrec, this.termNames = dd.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(dd, Od, md) {
        let Wd = new Ed(this, dd, Od, md);
        for (let Fd of this.wrappers) Wd = Fd(Wd, dd, Od, md);
        return Wd
      }
      getGoto(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = this.goto;
        if (Od >= Wd[0]) return -1;
        for (let Fd = Wd[Od + 1];;) {
          let Od = Wd[Fd++],
            Rd = 1 & Od,
            Xd = Wd[Fd++];
          if (Rd && md) return Xd;
          for (let md = Fd + (Od >> 1); Fd < md; Fd++)
            if (Wd[Fd] == dd) return Xd;
          if (Rd) return -1
        }
      }
      hasAction(dd, Od) {
        let md = this.data;
        for (let Wd = 0; Wd < 2; Wd++)
          for (let Fd, Rd = this.stateSlot(dd, Wd ? 2 : 1);; Rd += 3) {
            if (65535 == (Fd = md[Rd])) {
              if (1 != md[Rd + 1]) {
                if (2 == md[Rd + 1]) return Sd(md, Rd + 2);
                break
              }
              Fd = md[Rd = Sd(md, Rd + 2)]
            }
            if (Fd == Od || 0 == Fd) return Sd(md, Rd + 1)
          }
        return 0
      }
      stateSlot(dd, Od) {
        return this.states[6 * dd + Od]
      }
      stateFlag(dd, Od) {
        return (this.stateSlot(dd, 0) & Od) > 0
      }
      validAction(dd, Od) {
        return !!this.allActions(dd, (dd => dd == Od || null))
      }
      allActions(dd, Od) {
        let md = this.stateSlot(dd, 4),
          Wd = md ? Od(md) : void 0;
        for (let Fd = this.stateSlot(dd, 1); null == Wd; Fd += 3) {
          if (65535 == this.data[Fd]) {
            if (1 != this.data[Fd + 1]) break;
            Fd = Sd(this.data, Fd + 2)
          }
          Wd = Od(Sd(this.data, Fd + 1))
        }
        return Wd
      }
      nextStates(dd) {
        let Od = [];
        for (let md = this.stateSlot(dd, 1);; md += 3) {
          if (65535 == this.data[md]) {
            if (1 != this.data[md + 1]) break;
            md = Sd(this.data, md + 2)
          }
          if (0 == (1 & this.data[md + 2])) {
            let dd = this.data[md + 1];
            Od.some(((Od, md) => 1 & md && Od == dd)) || Od.push(this.data[md], dd)
          }
        }
        return Od
      }
      configure(dd) {
        let Od = Object.assign(Object.create(Bd.prototype), this);
        if (dd.props && (Od.nodeSet = this.nodeSet.extend(...dd.props)), dd.top) {
          let md = this.topRules[dd.top];
          if (!md) throw new RangeError(`Invalid top rule name ${dd.top}`);
          Od.top = md
        }
        return dd.tokenizers && (Od.tokenizers = this.tokenizers.map((Od => {
          let md = dd.tokenizers.find((dd => dd.from == Od));
          return md ? md.to : Od
        }))), dd.specializers && (Od.specializers = this.specializers.slice(), Od.specializerSpecs = this.specializerSpecs.map(((md, Wd) => {
          let Fd = dd.specializers.find((dd => dd.from == md.external));
          if (!Fd) return md;
          let Rd = Object.assign(Object.assign({}, md), {
            external: Fd.to
          });
          return Od.specializers[Wd] = sd(Rd), Rd
        }))), dd.contextTracker && (Od.context = dd.contextTracker), dd.dialect && (Od.dialect = this.parseDialect(dd.dialect)), null != dd.strict && (Od.strict = dd.strict), dd.wrap && (Od.wrappers = Od.wrappers.concat(dd.wrap)), null != dd.bufferLength && (Od.bufferLength = dd.bufferLength), Od
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
        let Od = this.dynamicPrecedences;
        return null == Od ? 0 : Od[dd] || 0
      }
      parseDialect(dd) {
        let Od = Object.keys(this.dialects),
          md = Od.map((() => !1));
        if (dd)
          for (let Fd of dd.split(" ")) {
            let dd = Od.indexOf(Fd);
            dd >= 0 && (md[dd] = !0)
          }
        let Wd = null;
        for (let Fd = 0; Fd < Od.length; Fd++)
          if (!md[Fd])
            for (let dd, md = this.dialects[Od[Fd]]; 65535 != (dd = this.data[md++]);)(Wd || (Wd = new Uint8Array(this.maxTerm + 1)))[dd] = 1;
        return new Ud(dd, md, Wd)
      }
      static deserialize(dd) {
        return new Bd(dd)
      }
    }

    function Sd(dd, Od) {
      return dd[Od] | dd[Od + 1] << 16
    }

    function sd(dd) {
      if (dd.external) {
        let Od = dd.extend ? 1 : 0;
        return (md, Wd) => dd.external(md, Wd) << 1 | Od
      }
      return dd.get
    }
    var ud = md(53805);
    const Vd = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Ad = new class {
        constructor(dd) {
          this.start = dd.start, this.shift = dd.shift || xd, this.reduce = dd.reduce || xd, this.reuse = dd.reuse || xd, this.hash = dd.hash || (() => 0), this.strict = !1 !== dd.strict
        }
      }({
        start: !1,
        shift: (dd, Od) => 5 == Od || 6 == Od || 320 == Od ? dd : 321 == Od,
        strict: !1
      }),
      rd = new qd(((dd, Od) => {
        let {
          next: md
        } = dd;
        (125 == md || -1 == md || Od.context) && dd.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Gd = new qd(((dd, Od) => {
        let md, {
          next: Wd
        } = dd;
        Vd.indexOf(Wd) > -1 || (47 != Wd || 47 != (md = dd.peek(1)) && 42 != md) && (125 == Wd || 59 == Wd || -1 == Wd || Od.context || dd.acceptToken(316))
      }), {
        contextual: !0
      }),
      nd = new qd(((dd, Od) => {
        91 != dd.next || Od.context || dd.acceptToken(317)
      }), {
        contextual: !0
      }),
      Ld = new qd(((dd, Od) => {
        let {
          next: md
        } = dd;
        if (43 == md || 45 == md) {
          if (dd.advance(), md == dd.next) {
            dd.advance();
            let md = !Od.context && Od.canShift(1);
            dd.acceptToken(md ? 1 : 2)
          }
        } else 63 == md && 46 == dd.peek(1) && (dd.advance(), dd.advance(), (dd.next < 48 || dd.next > 57) && dd.acceptToken(3))
      }), {
        contextual: !0
      });

    function Pd(dd, Od) {
      return dd >= 65 && dd <= 90 || dd >= 97 && dd <= 122 || 95 == dd || dd >= 192 || !Od && dd >= 48 && dd <= 57
    }
    const zd = new qd(((dd, Od) => {
        if (60 != dd.next || !Od.dialectEnabled(0)) return;
        if (dd.advance(), 47 == dd.next) return;
        let md = 0;
        for (; Vd.indexOf(dd.next) > -1;) dd.advance(), md++;
        if (Pd(dd.next, !0)) {
          for (dd.advance(), md++; Pd(dd.next, !1);) dd.advance(), md++;
          for (; Vd.indexOf(dd.next) > -1;) dd.advance(), md++;
          if (44 == dd.next) return;
          for (let Od = 0;; Od++) {
            if (7 == Od) {
              if (!Pd(dd.next, !0)) return;
              break
            }
            if (dd.next != "extends".charCodeAt(Od)) break;
            dd.advance(), md++
          }
        }
        dd.acceptToken(4, -md)
      })),
      cd = (0, ud.e)({
        "get set async static": ud.k.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": ud.k.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": ud.k.operatorKeyword,
        "let var const using function class extends": ud.k.definitionKeyword,
        "import export from": ud.k.moduleKeyword,
        "with debugger new": ud.k.keyword,
        TemplateString: ud.k.special(ud.k.string),
        super: ud.k.atom,
        BooleanLiteral: ud.k.bool,
        this: ud.k.self,
        null: ud.k.null,
        Star: ud.k.modifier,
        VariableName: ud.k.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": ud.k.function(ud.k.variableName),
        VariableDefinition: ud.k.definition(ud.k.variableName),
        Label: ud.k.labelName,
        PropertyName: ud.k.propertyName,
        PrivatePropertyName: ud.k.special(ud.k.propertyName),
        "CallExpression/MemberExpression/PropertyName": ud.k.function(ud.k.propertyName),
        "FunctionDeclaration/VariableDefinition": ud.k.function(ud.k.definition(ud.k.variableName)),
        "ClassDeclaration/VariableDefinition": ud.k.definition(ud.k.className),
        "NewExpression/VariableName": ud.k.className,
        PropertyDefinition: ud.k.definition(ud.k.propertyName),
        PrivatePropertyDefinition: ud.k.definition(ud.k.special(ud.k.propertyName)),
        UpdateOp: ud.k.updateOperator,
        "LineComment Hashbang": ud.k.lineComment,
        BlockComment: ud.k.blockComment,
        Number: ud.k.number,
        String: ud.k.string,
        Escape: ud.k.escape,
        ArithOp: ud.k.arithmeticOperator,
        LogicOp: ud.k.logicOperator,
        BitOp: ud.k.bitwiseOperator,
        CompareOp: ud.k.compareOperator,
        RegExp: ud.k.regexp,
        Equals: ud.k.definitionOperator,
        Arrow: ud.k.function(ud.k.punctuation),
        ": Spread": ud.k.punctuation,
        "( )": ud.k.paren,
        "[ ]": ud.k.squareBracket,
        "{ }": ud.k.brace,
        "InterpolationStart InterpolationEnd": ud.k.special(ud.k.brace),
        ".": ud.k.derefOperator,
        ", ;": ud.k.separator,
        "@": ud.k.meta,
        TypeName: ud.k.typeName,
        TypeDefinition: ud.k.definition(ud.k.typeName),
        "type enum interface implements namespace module declare": ud.k.definitionKeyword,
        "abstract global Privacy readonly override": ud.k.modifier,
        "is keyof unique infer asserts": ud.k.operatorKeyword,
        JSXAttributeValue: ud.k.attributeValue,
        JSXText: ud.k.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": ud.k.angleBracket,
        "JSXIdentifier JSXNameSpacedName": ud.k.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": ud.k.attributeName,
        "JSXBuiltin/JSXIdentifier": ud.k.standard(ud.k.tagName)
      }),
      jd = {
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
      Dd = {
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
      ed = {
        __proto__: null,
        "<": 193
      },
      Id = Bd.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Ad,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [cd],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Gd, nd, Ld, zd, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, rd, new Nd("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Nd("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: dd => jd[dd] || -1
        }, {
          term: 343,
          get: dd => Dd[dd] || -1
        }, {
          term: 95,
          get: dd => ed[dd] || -1
        }],
        tokenPrec: 15201
      });
    var ld = md(53793),
      Cd = md(53759),
      Zd = md(53768),
      kd = md(53757);
    const fd = [(0, kd.w)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, kd.w)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, kd.w)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, kd.w)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, kd.w)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, kd.w)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, kd.w)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, kd.w)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, kd.w)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, kd.w)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, kd.w)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Md = fd.concat([(0, kd.w)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, kd.w)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, kd.w)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      dO = new Wd.p,
      OO = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function mO(dd) {
      return (Od, md) => {
        let Wd = Od.node.getChild("VariableDefinition");
        return Wd && md(Wd, dd), !0
      }
    }
    const WO = ["FunctionDeclaration"],
      FO = {
        FunctionDeclaration: mO("function"),
        ClassDeclaration: mO("class"),
        ClassExpression: () => !0,
        EnumDeclaration: mO("constant"),
        TypeAliasDeclaration: mO("type"),
        NamespaceDeclaration: mO("namespace"),
        VariableDefinition(dd, Od) {
          dd.matchContext(WO) || Od(dd, "variable")
        },
        TypeDefinition(dd, Od) {
          Od(dd, "type")
        },
        __proto__: null
      };

    function RO(dd, Od) {
      let md = dO.get(Od);
      if (md) return md;
      let Fd = [],
        Rd = !0;

      function Xd(Od, md) {
        let Wd = dd.sliceString(Od.from, Od.to);
        Fd.push({
          label: Wd,
          type: md
        })
      }
      return Od.cursor(Wd.d.IncludeAnonymous).iterate((Od => {
        if (Rd) Rd = !1;
        else if (Od.name) {
          let dd = FO[Od.name];
          if (dd && dd(Od, Xd) || OO.has(Od.name)) return !1
        } else if (Od.to - Od.from > 8192) {
          for (let md of RO(dd, Od.node)) Fd.push(md);
          return !1
        }
      })), dO.set(Od, Fd), Fd
    }
    const XO = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      KO = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function hO(dd) {
      let Od = (0, ld.sb)(dd.state).resolveInner(dd.pos, -1);
      if (KO.indexOf(Od.name) > -1) return null;
      let md = "VariableName" == Od.name || Od.to - Od.from < 20 && XO.test(dd.state.sliceDoc(Od.from, Od.to));
      if (!md && !dd.explicit) return null;
      let Wd = [];
      for (let Fd = Od; Fd; Fd = Fd.parent) OO.has(Fd.name) && (Wd = Wd.concat(RO(dd.state.doc, Fd)));
      return {
        options: Wd,
        from: md ? Od.from : dd.pos,
        validFor: XO
      }
    }
    const vO = ld.l.define({
        name: "javascript",
        parser: Id.configure({
          props: [ld._.add({
            IfStatement: (0, ld.s)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, ld.s)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: ld.E,
            SwitchBody: dd => {
              let Od = dd.textAfter,
                md = /^\s*\}/.test(Od),
                Wd = /^\s*(case|default)\b/.test(Od);
              return dd.baseIndent + (md ? 0 : Wd ? 1 : 2) * dd.unit
            },
            Block: (0, ld.A)({
              closing: "}"
            }),
            ArrowFunction: dd => dd.baseIndent + dd.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, ld.s)({
              except: /^\s*{/
            }),
            JSXElement(dd) {
              let Od = /^\s*<\//.test(dd.textAfter);
              return dd.lineIndent(dd.node.from) + (Od ? 0 : dd.unit)
            },
            JSXEscape(dd) {
              let Od = /\s*\}/.test(dd.textAfter);
              return dd.lineIndent(dd.node.from) + (Od ? 0 : dd.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": dd => dd.column(dd.node.from) + dd.unit
          }), ld.P.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ld.L,
            BlockComment: dd => ({
              from: dd.from + 2,
              to: dd.to - 2
            }),
            JSXElement(dd) {
              let Od = dd.firstChild;
              if (!Od || "JSXSelfClosingTag" == Od.name) return null;
              let md = dd.lastChild;
              return {
                from: Od.to,
                to: md.type.isError ? dd.to : md.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(dd) {
              var Od;
              let md = null === (Od = dd.firstChild) || void 0 === Od ? void 0 : Od.nextSibling,
                Wd = dd.lastChild;
              return !md || md.type.isError ? null : {
                from: md.to,
                to: Wd.type.isError ? dd.to : Wd.from
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
      QO = {
        test: dd => /^JSX/.test(dd.name),
        facet: (0, ld.z)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      tO = vO.configure({
        dialect: "ts"
      }, "typescript"),
      oO = vO.configure({
        dialect: "jsx",
        props: [ld.kb.add((dd => dd.isTop ? [QO] : void 0))]
      }),
      NO = vO.configure({
        dialect: "jsx ts",
        props: [ld.kb.add((dd => dd.isTop ? [QO] : void 0))]
      }, "typescript");
    let qO = dd => ({
      label: dd,
      type: "keyword"
    });
    const HO = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(qO),
      yO = HO.concat(["declare", "implements", "private", "protected", "public"].map(qO));

    function bO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Od = dd.jsx ? dd.typescript ? NO : oO : dd.typescript ? tO : vO,
        md = dd.typescript ? Md.concat(yO) : fd.concat(HO);
      return new ld.o(Od, [vO.data.of({
        autocomplete: (0, kd.t)(KO, (0, kd.m)(md))
      }), vO.data.of({
        autocomplete: hO
      }), dd.jsx ? YO : []])
    }

    function TO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.length;
      for (let Wd = null === Od || void 0 === Od ? void 0 : Od.firstChild; Wd; Wd = Wd.nextSibling)
        if ("JSXIdentifier" == Wd.name || "JSXBuiltin" == Wd.name || "JSXNamespacedName" == Wd.name || "JSXMemberExpression" == Wd.name) return dd.sliceString(Wd.from, Math.min(Wd.to, md));
      return ""
    }
    const pO = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      YO = Zd.h.inputHandler.of(((dd, Od, md, Wd, Fd) => {
        if ((pO ? dd.composing : dd.compositionStarted) || dd.state.readOnly || Od != md || ">" != Wd && "/" != Wd || !vO.isActiveAt(dd.state, Od, -1)) return !1;
        let Rd = Fd(),
          {
            state: Xd
          } = Rd,
          Kd = Xd.changeByRange((dd => {
            var Od;
            let md, {
                head: Fd
              } = dd,
              Rd = (0, ld.sb)(Xd).resolveInner(Fd - 1, -1);
            if ("JSXStartTag" == Rd.name && (Rd = Rd.parent), Xd.doc.sliceString(Fd - 1, Fd) != Wd || "JSXAttributeValue" == Rd.name && Rd.to > Fd);
            else {
              if (">" == Wd && "JSXFragmentTag" == Rd.name) return {
                range: dd,
                changes: {
                  from: Fd,
                  insert: "</>"
                }
              };
              if ("/" == Wd && "JSXStartCloseTag" == Rd.name) {
                let dd = Rd.parent,
                  Wd = dd.parent;
                if (Wd && dd.from == Fd - 2 && ((md = TO(Xd.doc, Wd.firstChild, Fd)) || "JSXFragmentTag" == (null === (Od = Wd.firstChild) || void 0 === Od ? void 0 : Od.name))) {
                  let dd = `${md}>`;
                  return {
                    range: Cd.j.cursor(Fd + dd.length, -1),
                    changes: {
                      from: Fd,
                      insert: dd
                    }
                  }
                }
              } else if (">" == Wd) {
                let Od = function(dd) {
                  for (;;) {
                    if ("JSXOpenTag" == dd.name || "JSXSelfClosingTag" == dd.name || "JSXFragmentTag" == dd.name) return dd;
                    if ("JSXEscape" == dd.name || !dd.parent) return null;
                    dd = dd.parent
                  }
                }(Rd);
                if (Od && "JSXOpenTag" == Od.name && !/^\/?>|^<\//.test(Xd.doc.sliceString(Fd, Fd + 2)) && (md = TO(Xd.doc, Od, Fd))) return {
                  range: dd,
                  changes: {
                    from: Fd,
                    insert: `</${md}>`
                  }
                }
              }
            }
            return {
              range: dd
            }
          }));
        return !Kd.changes.empty && (dd.dispatch([Rd, Xd.update(Kd, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  53793: (dd, Od, md) => {
    md.d(Od, {
      A: () => jd,
      E: () => ed,
      H: () => YO,
      L: () => fd,
      N: () => tO,
      P: () => kd,
      S: () => bd,
      T: () => ud,
      W: () => Ad,
      _: () => Gd,
      bb: () => Cd,
      cb: () => Vd,
      e: () => wO,
      eb: () => sd,
      gb: () => DO,
      i: () => rd,
      kb: () => td,
      l: () => qd,
      lb: () => UO,
      o: () => Bd,
      ob: () => yd,
      r: () => PO,
      s: () => Id,
      sb: () => Hd,
      w: () => SO,
      z: () => Qd
    });
    var Wd, Fd = md(53798),
      Rd = md(53759),
      Xd = md(53768),
      Kd = md(53805),
      hd = md(53775);
    const vd = new Fd.h;

    function Qd(dd) {
      return Rd.p.define({
        combine: dd ? Od => Od.concat(dd) : void 0
      })
    }
    const td = new Fd.h;
    class od {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = dd, this.name = Wd, Rd.m.prototype.hasOwnProperty("tree") || Object.defineProperty(Rd.m.prototype, "tree", {
          get() {
            return Hd(this)
          }
        }), this.parser = Od, this.extension = [xd.of(this), Rd.m.languageData.of(((dd, Od, md) => {
          let Wd = Nd(dd, Od, md),
            Fd = Wd.type.prop(vd);
          if (!Fd) return [];
          let Rd = dd.facet(Fd),
            Xd = Wd.type.prop(td);
          if (Xd) {
            let Fd = Wd.resolve(Od - Wd.from, md);
            for (let Od of Xd)
              if (Od.test(Fd, dd)) {
                let md = dd.facet(Od.facet);
                return "replace" == Od.type ? md : md.concat(Rd)
              }
          }
          return Rd
        }))].concat(md)
      }
      isActiveAt(dd, Od) {
        return Nd(dd, Od, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(vd) == this.data
      }
      findRegions(dd) {
        let Od = dd.facet(xd);
        if ((null === Od || void 0 === Od ? void 0 : Od.data) == this.data) return [{
          from: 0,
          to: dd.doc.length
        }];
        if (!Od || !Od.allowsNesting) return [];
        let md = [],
          Wd = (dd, Od) => {
            if (dd.prop(vd) == this.data) return void md.push({
              from: Od,
              to: Od + dd.length
            });
            let Rd = dd.prop(Fd.h.mounted);
            if (Rd) {
              if (Rd.tree.prop(vd) == this.data) {
                if (Rd.overlay)
                  for (let dd of Rd.overlay) md.push({
                    from: dd.from + Od,
                    to: dd.to + Od
                  });
                else md.push({
                  from: Od,
                  to: Od + dd.length
                });
                return
              }
              if (Rd.overlay) {
                let dd = md.length;
                if (Wd(Rd.tree, Rd.overlay[0].from + Od), md.length > dd) return
              }
            }
            for (let md = 0; md < dd.children.length; md++) {
              let Rd = dd.children[md];
              Rd instanceof Fd.y && Wd(Rd, dd.positions[md] + Od)
            }
          };
        return Wd(Hd(dd), 0), md
      }
      get allowsNesting() {
        return !0
      }
    }

    function Nd(dd, Od, md) {
      let Wd = dd.facet(xd),
        Rd = Hd(dd).topNode;
      if (!Wd || Wd.allowsNesting)
        for (let Xd = Rd; Xd; Xd = Xd.enter(Od, md, Fd.d.ExcludeBuffers | Fd.d.EnterBracketed)) Xd.type.isTop && (Rd = Xd);
      return Rd
    }
    od.setState = Rd.I.define();
    class qd extends od {
      constructor(dd, Od, md) {
        super(dd, Od, [], md), this.parser = Od
      }
      static define(dd) {
        let Od = Qd(dd.languageData);
        return new qd(Od, dd.parser.configure({
          props: [vd.add((dd => dd.isTop ? Od : void 0))]
        }), dd.name)
      }
      configure(dd, Od) {
        return new qd(this.data, this.parser.configure(dd), Od || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Hd(dd) {
      let Od = dd.field(od.state, !1);
      return Od ? Od.tree : Fd.y.empty
    }

    function yd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.doc.length;
      var md;
      return (null === (md = dd.field(od.state, !1)) || void 0 === md ? void 0 : md.context.isDone(Od)) || !1
    }

    function bd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.viewport.to,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Wd = function(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Wd;
          let Fd = null === (Wd = dd.field(od.state, !1)) || void 0 === Wd ? void 0 : Wd.context;
          if (!Fd) return null;
          let Rd = Fd.viewport;
          Fd.updateViewport({
            from: 0,
            to: Od
          });
          let Xd = Fd.isDone(Od) || Fd.work(md, Od) ? Fd.tree : null;
          return Fd.updateViewport(Rd), Xd
        }(dd.state, Od, md);
      return Wd != Hd(dd.state) && dd.dispatch({}), !!Wd
    }
    class Td {
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
      read(dd, Od) {
        let md = this.cursorPos - this.string.length;
        return dd < md || Od >= this.cursorPos ? this.doc.sliceString(dd, Od) : this.string.slice(dd - md, Od - md)
      }
    }
    let pd = null;
    class Yd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0,
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = dd, this.state = Od, this.fragments = md, this.tree = Wd, this.treeLen = Fd, this.viewport = Rd, this.skipped = Xd, this.scheduleOn = Kd, this.parse = null, this.tempSkipped = []
      }
      static create(dd, Od, md) {
        return new Yd(dd, Od, [], Fd.y.empty, 0, md, [], null)
      }
      startParse() {
        return this.parser.startParse(new Td(this.state.doc), this.fragments)
      }
      work(dd, Od) {
        return null != Od && Od >= this.state.doc.length && (Od = void 0), this.tree != Fd.y.empty && this.isDone(null !== Od && void 0 !== Od ? Od : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var md;
          if ("number" == typeof dd) {
            let Od = Date.now() + dd;
            dd = () => Date.now() > Od
          }
          for (this.parse || (this.parse = this.startParse()), null != Od && (null == this.parse.stoppedAt || this.parse.stoppedAt > Od) && Od < this.state.doc.length && this.parse.stopAt(Od);;) {
            let Wd = this.parse.advance();
            if (Wd) {
              if (this.fragments = this.withoutTempSkipped(Fd.w.addTree(Wd, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (md = this.parse.stoppedAt) && void 0 !== md ? md : this.state.doc.length, this.tree = Wd, this.parse = null, !(this.treeLen < (null !== Od && void 0 !== Od ? Od : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (dd()) return !1
          }
        }))
      }
      takeTree() {
        let dd, Od;
        this.parse && (dd = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > dd) && this.parse.stopAt(dd), this.withContext((() => {
          for (; !(Od = this.parse.advance()););
        })), this.treeLen = dd, this.tree = Od, this.fragments = this.withoutTempSkipped(Fd.w.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(dd) {
        let Od = pd;
        pd = this;
        try {
          return dd()
        } finally {
          pd = Od
        }
      }
      withoutTempSkipped(dd) {
        for (let Od; Od = this.tempSkipped.pop();) dd = gd(dd, Od.from, Od.to);
        return dd
      }
      changes(dd, Od) {
        let {
          fragments: md,
          tree: Wd,
          treeLen: Rd,
          viewport: Xd,
          skipped: Kd
        } = this;
        if (this.takeTree(), !dd.empty) {
          let Od = [];
          if (dd.iterChangedRanges(((dd, md, Wd, Fd) => Od.push({
              fromA: dd,
              toA: md,
              fromB: Wd,
              toB: Fd
            }))), md = Fd.w.applyChanges(md, Od), Wd = Fd.y.empty, Rd = 0, Xd = {
              from: dd.mapPos(Xd.from, -1),
              to: dd.mapPos(Xd.to, 1)
            }, this.skipped.length) {
            Kd = [];
            for (let Od of this.skipped) {
              let md = dd.mapPos(Od.from, 1),
                Wd = dd.mapPos(Od.to, -1);
              md < Wd && Kd.push({
                from: md,
                to: Wd
              })
            }
          }
        }
        return new Yd(this.parser, Od, md, Wd, Rd, Xd, Kd, this.scheduleOn)
      }
      updateViewport(dd) {
        if (this.viewport.from == dd.from && this.viewport.to == dd.to) return !1;
        this.viewport = dd;
        let Od = this.skipped.length;
        for (let md = 0; md < this.skipped.length; md++) {
          let {
            from: Od,
            to: Wd
          } = this.skipped[md];
          Od < dd.to && Wd > dd.from && (this.fragments = gd(this.fragments, Od, Wd), this.skipped.splice(md--, 1))
        }
        return !(this.skipped.length >= Od) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(dd, Od) {
        this.skipped.push({
          from: dd,
          to: Od
        })
      }
      static getSkippingParser(dd) {
        return new class extends Fd.s {
          createParse(Od, md, Wd) {
            let Rd = Wd[0].from,
              Xd = Wd[Wd.length - 1].to;
            return {
              parsedPos: Rd,
              advance() {
                let Od = pd;
                if (Od) {
                  for (let dd of Wd) Od.tempSkipped.push(dd);
                  dd && (Od.scheduleOn = Od.scheduleOn ? Promise.all([Od.scheduleOn, dd]) : dd)
                }
                return this.parsedPos = Xd, new Fd.y(Fd.m.none, [], [], Xd - Rd)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(dd) {
        dd = Math.min(dd, this.state.doc.length);
        let Od = this.fragments;
        return this.treeLen >= dd && Od.length && 0 == Od[0].from && Od[0].to >= dd
      }
      static get() {
        return pd
      }
    }

    function gd(dd, Od, md) {
      return Fd.w.applyChanges(dd, [{
        fromA: Od,
        toA: md,
        fromB: Od,
        toB: md
      }])
    }
    class wd {
      constructor(dd) {
        this.context = dd, this.tree = dd.tree
      }
      apply(dd) {
        if (!dd.docChanged && this.tree == this.context.tree) return this;
        let Od = this.context.changes(dd.changes, dd.state),
          md = this.context.treeLen == dd.startState.doc.length ? void 0 : Math.max(dd.changes.mapPos(this.context.treeLen), Od.viewport.to);
        return Od.work(20, md) || Od.takeTree(), new wd(Od)
      }
      static init(dd) {
        let Od = Math.min(3e3, dd.doc.length),
          md = Yd.create(dd.facet(xd).parser, dd, {
            from: 0,
            to: Od
          });
        return md.work(20, Od) || md.takeTree(), new wd(md)
      }
    }
    od.state = Rd.M.define({
      create: wd.init,
      update(dd, Od) {
        for (let md of Od.effects)
          if (md.is(od.setState)) return md.value;
        return Od.startState.facet(xd) != Od.state.facet(xd) ? wd.init(Od.state) : dd.apply(Od)
      }
    });
    let Ed = dd => {
      let Od = setTimeout((() => dd()), 500);
      return () => clearTimeout(Od)
    };
    "undefined" != typeof requestIdleCallback && (Ed = dd => {
      let Od = -1,
        md = setTimeout((() => {
          Od = requestIdleCallback(dd, {
            timeout: 400
          })
        }), 100);
      return () => Od < 0 ? clearTimeout(md) : cancelIdleCallback(Od)
    });
    const Jd = "undefined" != typeof navigator && (null === (Wd = navigator.scheduling) || void 0 === Wd ? void 0 : Wd.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Ud = Xd.l.fromClass(class {
        constructor(dd) {
          this.view = dd, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(dd) {
          let Od = this.view.state.field(od.state).context;
          (Od.updateViewport(dd.view.viewport) || this.view.viewport.to > Od.treeLen) && this.scheduleWork(), (dd.docChanged || dd.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Od)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: dd
          } = this.view, Od = dd.field(od.state);
          Od.tree == Od.context.tree && Od.context.isDone(dd.doc.length) || (this.working = Ed(this.work))
        }
        work(dd) {
          this.working = null;
          let Od = Date.now();
          if (this.chunkEnd < Od && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Od + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: md,
            viewport: {
              to: Wd
            }
          } = this.view, Fd = md.field(od.state);
          if (Fd.tree == Fd.context.tree && Fd.context.isDone(Wd + 1e5)) return;
          let Rd = Date.now() + Math.min(this.chunkBudget, 100, dd && !Jd ? Math.max(25, dd.timeRemaining() - 5) : 1e9),
            Xd = Fd.context.treeLen < Wd && md.doc.length > Wd + 1e3,
            Kd = Fd.context.work((() => Jd && Jd() || Date.now() > Rd), Wd + (Xd ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Od, (Kd || this.chunkBudget <= 0) && (Fd.context.takeTree(), this.view.dispatch({
            effects: od.setState.of(new wd(Fd.context))
          })), this.chunkBudget > 0 && (!Kd || Xd) && this.scheduleWork(), this.checkAsyncSchedule(Fd.context)
        }
        checkAsyncSchedule(dd) {
          dd.scheduleOn && (this.workScheduled++, dd.scheduleOn.then((() => this.scheduleWork())).catch((dd => (0, Xd.U)(this.view.state, dd))).then((() => this.workScheduled--)), dd.scheduleOn = null)
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
      xd = Rd.p.define({
        combine: dd => dd.length ? dd[0] : null,
        enables: dd => [od.state, Ud, Xd.h.contentAttributes.compute([dd], (Od => {
          let md = Od.facet(dd);
          return md && md.name ? {
            "data-language": md.name
          } : {}
        }))]
      });
    class Bd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = dd, this.support = Od, this.extension = [dd, Od]
      }
    }
    const Sd = Rd.p.define(),
      sd = Rd.p.define({
        combine: dd => {
          if (!dd.length) return "  ";
          let Od = dd[0];
          if (!Od || /\S/.test(Od) || Array.from(Od).some((dd => dd != Od[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(dd[0]));
          return Od
        }
      });

    function ud(dd) {
      let Od = dd.facet(sd);
      return 9 == Od.charCodeAt(0) ? dd.tabSize * Od.length : Od.length
    }

    function Vd(dd, Od) {
      let md = "",
        Wd = dd.tabSize,
        Fd = dd.facet(sd)[0];
      if ("\t" == Fd) {
        for (; Od >= Wd;) md += "\t", Od -= Wd;
        Fd = " "
      }
      for (let Rd = 0; Rd < Od; Rd++) md += Fd;
      return md
    }

    function Ad(dd, Od) {
      dd instanceof Rd.m && (dd = new rd(dd));
      for (let Wd of dd.state.facet(Sd)) {
        let md = Wd(dd, Od);
        if (void 0 !== md) return md
      }
      let md = Hd(dd.state);
      return md.length >= Od ? function(dd, Od, md) {
        let Wd = Od.resolveStack(md),
          Fd = Od.resolveInner(md, -1).resolve(md, 0).enterUnfinishedNodesBefore(md);
        if (Fd != Wd.node) {
          let dd = [];
          for (let Od = Fd; Od && !(Od.from < Wd.node.from || Od.to > Wd.node.to || Od.from == Wd.node.from && Od.type == Wd.node.type); Od = Od.parent) dd.push(Od);
          for (let Od = dd.length - 1; Od >= 0; Od--) Wd = {
            node: dd[Od],
            next: Wd
          }
        }
        return nd(Wd, dd, md)
      }(dd, md, Od) : null
    }
    class rd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = dd, this.options = Od, this.unit = ud(dd)
      }
      lineAt(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = this.state.doc.lineAt(dd),
          {
            simulateBreak: Wd,
            simulateDoubleBreak: Fd
          } = this.options;
        return null != Wd && Wd >= md.from && Wd <= md.to ? Fd && Wd == dd ? {
          text: "",
          from: dd
        } : (Od < 0 ? Wd < dd : Wd <= dd) ? {
          text: md.text.slice(Wd - md.from),
          from: Wd
        } : {
          text: md.text.slice(0, Wd - md.from),
          from: md.from
        } : md
      }
      textAfterPos(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && dd == this.options.simulateBreak) return "";
        let {
          text: md,
          from: Wd
        } = this.lineAt(dd, Od);
        return md.slice(dd - Wd, Math.min(md.length, dd + 100 - Wd))
      }
      column(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: md,
            from: Wd
          } = this.lineAt(dd, Od),
          Fd = this.countColumn(md, dd - Wd),
          Rd = this.options.overrideIndentation ? this.options.overrideIndentation(Wd) : -1;
        return Rd > -1 && (Fd += Rd - this.countColumn(md, md.search(/\S|$/))), Fd
      }
      countColumn(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.length;
        return (0, Rd.Y)(dd, this.state.tabSize, Od)
      }
      lineIndent(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: md,
            from: Wd
          } = this.lineAt(dd, Od),
          Fd = this.options.overrideIndentation;
        if (Fd) {
          let dd = Fd(Wd);
          if (dd > -1) return dd
        }
        return this.countColumn(md, md.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Gd = new Fd.h;

    function nd(dd, Od, md) {
      for (let Wd = dd; Wd; Wd = Wd.next) {
        let dd = Ld(Wd.node);
        if (dd) return dd(zd.create(Od, md, Wd))
      }
      return 0
    }

    function Ld(dd) {
      let Od = dd.type.prop(Gd);
      if (Od) return Od;
      let md, Wd = dd.firstChild;
      if (Wd && (md = Wd.type.prop(Fd.h.closedBy))) {
        let Od = dd.lastChild,
          Wd = Od && md.indexOf(Od.name) > -1;
        return dd => Dd(dd, !0, 1, void 0, Wd && ! function(dd) {
          return dd.pos == dd.options.simulateBreak && dd.options.simulateDoubleBreak
        }(dd) ? Od.from : void 0)
      }
      return null == dd.parent ? Pd : null
    }

    function Pd() {
      return 0
    }
    class zd extends rd {
      constructor(dd, Od, md) {
        super(dd.state, dd.options), this.base = dd, this.pos = Od, this.context = md
      }
      get node() {
        return this.context.node
      }
      static create(dd, Od, md) {
        return new zd(dd, Od, md)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(dd) {
        let Od = this.state.doc.lineAt(dd.from);
        for (;;) {
          let md = dd.resolve(Od.from);
          for (; md.parent && md.parent.from == md.from;) md = md.parent;
          if (cd(md, dd)) break;
          Od = this.state.doc.lineAt(md.from)
        }
        return this.lineIndent(Od.from)
      }
      continue () {
        return nd(this.context.next, this.base, this.pos)
      }
    }

    function cd(dd, Od) {
      for (let md = Od; md; md = md.parent)
        if (dd == md) return !0;
      return !1
    }

    function jd(dd) {
      let {
        closing: Od,
        align: md = !0,
        units: Wd = 1
      } = dd;
      return dd => Dd(dd, md, Wd, Od)
    }

    function Dd(dd, Od, md, Wd, Fd) {
      let Rd = dd.textAfter,
        Xd = Rd.match(/^\s*/)[0].length,
        Kd = Wd && Rd.slice(Xd, Xd + Wd.length) == Wd || Fd == dd.pos + Xd,
        hd = Od ? function(dd) {
          let Od = dd.node,
            md = Od.childAfter(Od.from),
            Wd = Od.lastChild;
          if (!md) return null;
          let Fd = dd.options.simulateBreak,
            Rd = dd.state.doc.lineAt(md.from),
            Xd = null == Fd || Fd <= Rd.from ? Rd.to : Math.min(Rd.to, Fd);
          for (let Kd = md.to;;) {
            let dd = Od.childAfter(Kd);
            if (!dd || dd == Wd) return null;
            if (!dd.type.isSkipped) {
              if (dd.from >= Xd) return null;
              let Od = /^ */.exec(Rd.text.slice(md.to - Rd.from))[0].length;
              return {
                from: md.from,
                to: md.to + Od
              }
            }
            Kd = dd.to
          }
        }(dd) : null;
      return hd ? Kd ? dd.column(hd.from) : dd.column(hd.to) : dd.baseIndent + (Kd ? 0 : dd.unit * md)
    }
    const ed = dd => dd.baseIndent;

    function Id() {
      let {
        except: dd,
        units: Od = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return md => {
        let Wd = dd && dd.test(md.textAfter);
        return md.baseIndent + (Wd ? 0 : Od * md.unit)
      }
    }
    const ld = 200;

    function Cd() {
      return Rd.m.transactionFilter.of((dd => {
        if (!dd.docChanged || !dd.isUserEvent("input.type") && !dd.isUserEvent("input.complete")) return dd;
        let Od = dd.startState.languageDataAt("indentOnInput", dd.startState.selection.main.head);
        if (!Od.length) return dd;
        let md = dd.newDoc,
          {
            head: Wd
          } = dd.newSelection.main,
          Fd = md.lineAt(Wd);
        if (Wd > Fd.from + ld) return dd;
        let Rd = md.sliceString(Fd.from, Wd);
        if (!Od.some((dd => dd.test(Rd)))) return dd;
        let {
          state: Xd
        } = dd, Kd = -1, hd = [];
        for (let {
            head: vd
          }
          of Xd.selection.By) {
          let dd = Xd.doc.lineAt(vd);
          if (dd.from == Kd) continue;
          Kd = dd.from;
          let Od = Ad(Xd, dd.from);
          if (null == Od) continue;
          let md = /^\s*/.exec(dd.text)[0],
            Wd = Vd(Xd, Od);
          md != Wd && hd.push({
            from: dd.from,
            to: dd.from + md.length,
            insert: Wd
          })
        }
        return hd.length ? [dd, {
          changes: hd,
          sequential: !0
        }] : dd
      }))
    }
    const Zd = Rd.p.define(),
      kd = new Fd.h;

    function fd(dd) {
      let Od = dd.firstChild,
        md = dd.lastChild;
      return Od && Od.to < md.from ? {
        from: Od.to,
        to: md.type.isError ? dd.to : md.from
      } : null
    }

    function Md(dd) {
      let Od = dd.lastChild;
      return Od && Od.to == dd.to && Od.type.isError
    }

    function dO(dd, Od, md) {
      for (let Wd of dd.facet(Zd)) {
        let Fd = Wd(dd, Od, md);
        if (Fd) return Fd
      }
      return function(dd, Od, md) {
        let Wd = Hd(dd);
        if (Wd.length < md) return null;
        let Fd = null;
        for (let Rd = Wd.resolveStack(md, 1); Rd; Rd = Rd.next) {
          let Xd = Rd.node;
          if (Xd.to <= md || Xd.from > md) continue;
          if (Fd && Xd.from < Od) break;
          let Kd = Xd.type.prop(kd);
          if (Kd && (Xd.to < Wd.length - 50 || Wd.length == dd.doc.length || !Md(Xd))) {
            let Wd = Kd(Xd, dd);
            Wd && Wd.from <= md && Wd.from >= Od && Wd.to > md && (Fd = Wd)
          }
        }
        return Fd
      }(dd, Od, md)
    }

    function OO(dd, Od) {
      let md = Od.mapPos(dd.from, 1),
        Wd = Od.mapPos(dd.to, -1);
      return md >= Wd ? void 0 : {
        from: md,
        to: Wd
      }
    }
    const mO = Rd.I.define({
        map: OO
      }),
      WO = Rd.I.define({
        map: OO
      });

    function FO(dd) {
      let Od = [];
      for (let {
          head: md
        }
        of dd.state.selection.By) Od.some((dd => dd.from <= md && dd.to >= md)) || Od.push(dd.lineBlockAt(md));
      return Od
    }
    const RO = Rd.M.define({
      create: () => Xd.d.none,
      update(dd, Od) {
        Od.isUserEvent("delete") && Od.changes.iterChangedRanges(((Od, md) => dd = XO(dd, Od, md))), dd = dd.map(Od.changes);
        for (let md of Od.effects)
          if (md.is(mO) && !hO(dd, md.value.from, md.value.to)) {
            let {
              preparePlaceholder: Wd
            } = Od.state.facet(NO), Fd = Wd ? Xd.d.replace({
              widget: new bO(Wd(Od.state, md.value))
            }) : yO;
            dd = dd.update({
              add: [Fd.range(md.value.from, md.value.to)]
            })
          } else md.is(WO) && (dd = dd.update({
            filter: (dd, Od) => md.value.from != dd || md.value.to != Od,
            filterFrom: md.value.from,
            filterTo: md.value.to
          }));
        return Od.selection && (dd = XO(dd, Od.selection.main.head)), dd
      },
      provide: dd => Xd.h.aW.from(dd),
      toJSON(dd, Od) {
        let md = [];
        return dd.between(0, Od.doc.length, ((dd, Od) => {
          md.push(dd, Od)
        })), md
      },
      fromJSON(dd) {
        if (!Array.isArray(dd) || dd.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Od = [];
        for (let md = 0; md < dd.length;) {
          let Wd = dd[md++],
            Fd = dd[md++];
          if ("number" != typeof Wd || "number" != typeof Fd) throw new RangeError("Invalid JSON for fold state");
          Od.push(yO.range(Wd, Fd))
        }
        return Xd.d.set(Od, !0)
      }
    });

    function XO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od,
        Wd = !1;
      return dd.between(Od, md, ((dd, Fd) => {
        dd < md && Fd > Od && (Wd = !0)
      })), Wd ? dd.update({
        filterFrom: Od,
        filterTo: md,
        filter: (dd, Wd) => dd >= md || Wd <= Od
      }) : dd
    }

    function KO(dd, Od, md) {
      var Wd;
      let Fd = null;
      return null === (Wd = dd.field(RO, !1)) || void 0 === Wd || Wd.between(Od, md, ((dd, Od) => {
        (!Fd || Fd.from > dd) && (Fd = {
          from: dd,
          to: Od
        })
      })), Fd
    }

    function hO(dd, Od, md) {
      let Wd = !1;
      return dd.between(Od, Od, ((dd, Fd) => {
        dd == Od && Fd == md && (Wd = !0)
      })), Wd
    }

    function vO(dd, Od) {
      return dd.field(RO, !1) ? Od : Od.concat(Rd.I.appendConfig.of(qO()))
    }

    function QO(dd, Od) {
      let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Wd = dd.state.doc.lineAt(Od.from).number,
        Fd = dd.state.doc.lineAt(Od.to).number;
      return Xd.h.announce.of(`${dd.state.phrase(md?"Folded lines":"Unfolded lines")} ${Wd} ${dd.state.phrase("to")} ${Fd}.`)
    }
    const tO = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: dd => {
          for (let Od of FO(dd)) {
            let md = dO(dd.state, Od.from, Od.to);
            if (md) return dd.dispatch({
              effects: vO(dd.state, [mO.of(md), QO(dd, md)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: dd => {
          if (!dd.state.field(RO, !1)) return !1;
          let Od = [];
          for (let md of FO(dd)) {
            let Wd = KO(dd.state, md.from, md.to);
            Wd && Od.push(WO.of(Wd), QO(dd, Wd, !1))
          }
          return Od.length && dd.dispatch({
            effects: Od
          }), Od.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: dd => {
          let {
            state: Od
          } = dd, md = [];
          for (let Wd = 0; Wd < Od.doc.length;) {
            let Fd = dd.lineBlockAt(Wd),
              Rd = dO(Od, Fd.from, Fd.to);
            Rd && md.push(mO.of(Rd)), Wd = (Rd ? dd.lineBlockAt(Rd.to) : Fd).to + 1
          }
          return md.length && dd.dispatch({
            effects: vO(dd.state, md)
          }), !!md.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: dd => {
          let Od = dd.state.field(RO, !1);
          if (!Od || !Od.size) return !1;
          let md = [];
          return Od.between(0, dd.state.doc.length, ((dd, Od) => {
            md.push(WO.of({
              from: dd,
              to: Od
            }))
          })), dd.dispatch({
            effects: md
          }), !0
        }
      }],
      oO = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      NO = Rd.p.define({
        combine: dd => (0, Rd.W)(dd, oO)
      });

    function qO(dd) {
      let Od = [RO, gO];
      return dd && Od.push(NO.of(dd)), Od
    }

    function HO(dd, Od) {
      let {
        state: md
      } = dd, Wd = md.facet(NO), Fd = Od => {
        let md = dd.lineBlockAt(dd.posAtDOM(Od.target)),
          Wd = KO(dd.state, md.from, md.to);
        Wd && dd.dispatch({
          effects: WO.of(Wd)
        }), Od.preventDefault()
      };
      if (Wd.placeholderDOM) return Wd.placeholderDOM(dd, Fd, Od);
      let Rd = document.createElement("span");
      return Rd.textContent = Wd.placeholderText, Rd.setAttribute("aria-label", md.phrase("folded code")), Rd.title = md.phrase("unfold"), Rd.className = "cm-foldPlaceholder", Rd.onclick = Fd, Rd
    }
    const yO = Xd.d.replace({
      widget: new class extends Xd.o {
        toDOM(dd) {
          return HO(dd, null)
        }
      }
    });
    class bO extends Xd.o {
      constructor(dd) {
        super(), this.value = dd
      }
      eq(dd) {
        return this.value == dd.value
      }
      toDOM(dd) {
        return HO(dd, this.value)
      }
    }
    const TO = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class pO extends Xd.k {
      constructor(dd, Od) {
        super(), this.config = dd, this.open = Od
      }
      eq(dd) {
        return this.config == dd.config && this.open == dd.open
      }
      toDOM(dd) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Od = document.createElement("span");
        return Od.textContent = this.open ? this.config.openText : this.config.closedText, Od.title = dd.state.phrase(this.open ? "Fold line" : "Unfold line"), Od
      }
    }

    function YO() {
      let dd = {
          ...TO,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Od = new pO(dd, !0),
        md = new pO(dd, !1),
        Wd = Xd.l.fromClass(class {
          constructor(dd) {
            this.from = dd.viewport.from, this.markers = this.buildMarkers(dd)
          }
          update(Od) {
            (Od.docChanged || Od.viewportChanged || Od.startState.facet(xd) != Od.state.facet(xd) || Od.startState.field(RO, !1) != Od.state.field(RO, !1) || Hd(Od.startState) != Hd(Od.state) || dd.foldingChanged(Od)) && (this.markers = this.buildMarkers(Od.view))
          }
          buildMarkers(dd) {
            let Wd = new Rd.z;
            for (let Fd of dd.viewportLineBlocks) {
              let Rd = KO(dd.state, Fd.from, Fd.to) ? md : dO(dd.state, Fd.from, Fd.to) ? Od : null;
              Rd && Wd.add(Fd.from, Fd.from, Rd)
            }
            return Wd.finish()
          }
        }),
        {
          domEventHandlers: Fd
        } = dd;
      return [Wd, (0, Xd.C)({
        class: "cm-foldGutter",
        markers(dd) {
          var Od;
          return (null === (Od = dd.plugin(Wd)) || void 0 === Od ? void 0 : Od.markers) || Rd.B.empty
        },
        initialSpacer: () => new pO(dd, !1),
        domEventHandlers: {
          ...Fd,
          click: (dd, Od, md) => {
            if (Fd.click && Fd.click(dd, Od, md)) return !0;
            let Wd = KO(dd.state, Od.from, Od.to);
            if (Wd) return dd.dispatch({
              effects: WO.of(Wd)
            }), !0;
            let Rd = dO(dd.state, Od.from, Od.to);
            return !!Rd && (dd.dispatch({
              effects: mO.of(Rd)
            }), !0)
          }
        }
      }), qO()]
    }
    const gO = Xd.h.baseTheme({
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
    class wO {
      constructor(dd, Od) {
        let md;

        function Wd(dd) {
          let Od = hd.b.newName();
          return (md || (md = Object.create(null)))["." + Od] = dd, Od
        }
        this.specs = dd;
        const Fd = "string" == typeof Od.all ? Od.all : Od.all ? Wd(Od.all) : void 0,
          Rd = Od.scope;
        this.scope = Rd instanceof od ? dd => dd.prop(vd) == Rd.data : Rd ? dd => dd == Rd : void 0, this.style = (0, Kd.h)(dd.map((dd => ({
          tag: dd.tag,
          class: dd.class || Wd(Object.assign({}, dd, {
            tag: null
          }))
        }))), {
          all: Fd
        }).style, this.module = md ? new hd.b(md) : null, this.themeType = Od.themeType
      }
      static define(dd, Od) {
        return new wO(dd, Od || {})
      }
    }
    const aO = Rd.p.define(),
      EO = Rd.p.define({
        combine: dd => dd.length ? [dd[0]] : null
      });

    function JO(dd) {
      let Od = dd.facet(aO);
      return Od.length ? Od : dd.facet(EO)
    }

    function UO(dd, Od) {
      let md, Wd = [BO];
      return dd instanceof wO && (dd.module && Wd.push(Xd.h.styleModule.of(dd.module)), md = dd.themeType), (null === Od || void 0 === Od ? void 0 : Od.fallback) ? Wd.push(EO.of(dd)) : md ? Wd.push(aO.computeN([Xd.h.darkTheme], (Od => Od.facet(Xd.h.darkTheme) == ("dark" == md) ? [dd] : []))) : Wd.push(aO.of(dd)), Wd
    }
    class xO {
      constructor(dd) {
        this.markCache = Object.create(null), this.tree = Hd(dd.state), this.aW = this.buildDeco(dd, JO(dd.state)), this.decoratedTo = dd.viewport.to
      }
      update(dd) {
        let Od = Hd(dd.state),
          md = JO(dd.state),
          Wd = md != JO(dd.startState),
          {
            viewport: Fd
          } = dd.view,
          Rd = dd.changes.mapPos(this.decoratedTo, 1);
        Od.length < Fd.to && !Wd && Od.type == this.tree.type && Rd >= Fd.to ? (this.aW = this.aW.map(dd.changes), this.decoratedTo = Rd) : (Od != this.tree || dd.viewportChanged || Wd) && (this.tree = Od, this.aW = this.buildDeco(dd.view, md), this.decoratedTo = Fd.to)
      }
      buildDeco(dd, Od) {
        if (!Od || !this.tree.length) return Xd.d.none;
        let md = new Rd.z;
        for (let {
            from: Wd,
            to: Fd
          }
          of dd.Mdd)(0, Kd.d)(this.tree, Od, ((dd, Od, Wd) => {
          md.add(dd, Od, this.markCache[Wd] || (this.markCache[Wd] = Xd.d.mark({
            class: Wd
          })))
        }), Wd, Fd);
        return md.finish()
      }
    }
    const BO = Rd.v.high(Xd.l.fromClass(xO, {
        aW: dd => dd.aW
      })),
      SO = wO.define([{
        tag: Kd.k.meta,
        color: "#404740"
      }, {
        tag: Kd.k.link,
        textDecoration: "underline"
      }, {
        tag: Kd.k.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Kd.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: Kd.k.strong,
        fontWeight: "bold"
      }, {
        tag: Kd.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Kd.k.keyword,
        color: "#708"
      }, {
        tag: [Kd.k.atom, Kd.k.bool, Kd.k.url, Kd.k.contentSeparator, Kd.k.labelName],
        color: "#219"
      }, {
        tag: [Kd.k.literal, Kd.k.inserted],
        color: "#164"
      }, {
        tag: [Kd.k.string, Kd.k.deleted],
        color: "#a11"
      }, {
        tag: [Kd.k.regexp, Kd.k.escape, Kd.k.special(Kd.k.string)],
        color: "#e40"
      }, {
        tag: Kd.k.definition(Kd.k.variableName),
        color: "#00f"
      }, {
        tag: Kd.k.local(Kd.k.variableName),
        color: "#30a"
      }, {
        tag: [Kd.k.typeName, Kd.k.namespace],
        color: "#085"
      }, {
        tag: Kd.k.className,
        color: "#167"
      }, {
        tag: [Kd.k.special(Kd.k.variableName), Kd.k.macroName],
        color: "#256"
      }, {
        tag: Kd.k.definition(Kd.k.propertyName),
        color: "#00c"
      }, {
        tag: Kd.k.comment,
        color: "#940"
      }, {
        tag: Kd.k.invalid,
        color: "#f00"
      }]),
      sO = Xd.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      uO = 1e4,
      VO = "()[]{}",
      iO = Rd.p.define({
        combine: dd => (0, Rd.W)(dd, {
          afterCursor: !0,
          brackets: VO,
          maxScanDistance: uO,
          renderMatch: GO
        })
      }),
      AO = Xd.d.mark({
        class: "cm-matchingBracket"
      }),
      rO = Xd.d.mark({
        class: "cm-nonmatchingBracket"
      });

    function GO(dd) {
      let Od = [],
        md = dd.matched ? AO : rO;
      return Od.push(md.range(dd.start.from, dd.start.to)), dd.end && Od.push(md.range(dd.end.from, dd.end.to)), Od
    }

    function nO(dd) {
      let Od = [],
        md = dd.facet(iO);
      for (let Wd of dd.selection.By) {
        if (!Wd.empty) continue;
        let Fd = DO(dd, Wd.head, -1, md) || Wd.head > 0 && DO(dd, Wd.head - 1, 1, md) || md.afterCursor && (DO(dd, Wd.head, 1, md) || Wd.head < dd.doc.length && DO(dd, Wd.head + 1, -1, md));
        Fd && (Od = Od.concat(md.renderMatch(Fd, dd)))
      }
      return Xd.d.set(Od, !0)
    }
    const LO = [Xd.l.fromClass(class {
      constructor(dd) {
        this.paused = !1, this.aW = nO(dd.state)
      }
      update(dd) {
        (dd.docChanged || dd.selectionSet || this.paused) && (dd.view.composing ? (this.aW = this.aW.map(dd.changes), this.paused = !0) : (this.aW = nO(dd.state), this.paused = !1))
      }
    }, {
      aW: dd => dd.aW
    }), sO];

    function PO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [iO.of(dd), LO]
    }
    const zO = new Fd.h;

    function cO(dd, Od, md) {
      let Wd = dd.prop(Od < 0 ? Fd.h.openedBy : Fd.h.closedBy);
      if (Wd) return Wd;
      if (1 == dd.name.length) {
        let Wd = md.indexOf(dd.name);
        if (Wd > -1 && Wd % 2 == (Od < 0 ? 1 : 0)) return [md[Wd + Od]]
      }
      return null
    }

    function jO(dd) {
      let Od = dd.type.prop(zO);
      return Od ? Od(dd.node) : dd
    }

    function DO(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Fd = Wd.maxScanDistance || uO,
        Rd = Wd.brackets || VO,
        Xd = Hd(dd),
        Kd = Xd.resolveInner(Od, md);
      for (let hd = Kd; hd; hd = hd.parent) {
        let Wd = cO(hd.type, md, Rd);
        if (Wd && hd.from < hd.to) {
          let Fd = jO(hd);
          if (Fd && (md > 0 ? Od >= Fd.from && Od < Fd.to : Od > Fd.from && Od <= Fd.to)) return eO(dd, Od, md, hd, Fd, Wd, Rd)
        }
      }
      return function(dd, Od, md, Wd, Fd, Rd, Xd) {
        if (md < 0 ? !Od : Od == dd.doc.length) return null;
        let Kd = md < 0 ? dd.sliceDoc(Od - 1, Od) : dd.sliceDoc(Od, Od + 1),
          hd = Xd.indexOf(Kd);
        if (hd < 0 || hd % 2 == 0 != md > 0) return null;
        let vd = {
            from: md < 0 ? Od - 1 : Od,
            to: md > 0 ? Od + 1 : Od
          },
          Qd = dd.doc.iterRange(Od, md > 0 ? dd.doc.length : 0),
          td = 0;
        for (let od = 0; !Qd.next().done && od <= Rd;) {
          let dd = Qd.value;
          md < 0 && (od += dd.length);
          let Rd = Od + od * md;
          for (let Od = md > 0 ? 0 : dd.length - 1, Kd = md > 0 ? dd.length : -1; Od != Kd; Od += md) {
            let Kd = Xd.indexOf(dd[Od]);
            if (!(Kd < 0 || Wd.resolveInner(Rd + Od, 1).type != Fd))
              if (Kd % 2 == 0 == md > 0) td++;
              else {
                if (1 == td) return {
                  start: vd,
                  end: {
                    from: Rd + Od,
                    to: Rd + Od + 1
                  },
                  matched: Kd >> 1 == hd >> 1
                };
                td--
              }
          }
          md > 0 && (od += dd.length)
        }
        return Qd.done ? {
          start: vd,
          matched: !1
        } : null
      }(dd, Od, md, Xd, Kd.type, Fd, Rd)
    }

    function eO(dd, Od, md, Wd, Fd, Rd, Xd) {
      let Kd = Wd.parent,
        hd = {
          from: Fd.from,
          to: Fd.to
        },
        vd = 0,
        Qd = null === Kd || void 0 === Kd ? void 0 : Kd.cursor();
      if (Qd && (md < 0 ? Qd.childBefore(Wd.from) : Qd.childAfter(Wd.to)))
        do {
          if (md < 0 ? Qd.to <= Wd.from : Qd.from >= Wd.to) {
            if (0 == vd && Rd.indexOf(Qd.type.name) > -1 && Qd.from < Qd.to) {
              let dd = jO(Qd);
              return {
                start: hd,
                end: dd ? {
                  from: dd.from,
                  to: dd.to
                } : void 0,
                matched: !0
              }
            }
            if (cO(Qd.type, md, Xd)) vd++;
            else if (cO(Qd.type, -md, Xd)) {
              if (0 == vd) {
                let dd = jO(Qd);
                return {
                  start: hd,
                  end: dd && dd.from < dd.to ? {
                    from: dd.from,
                    to: dd.to
                  } : void 0,
                  matched: !1
                }
              }
              vd--
            }
          }
        } while (md < 0 ? Qd.prevSibling() : Qd.nextSibling());
      return {
        start: hd,
        matched: !1
      }
    }
    const IO = Object.create(null),
      lO = [Fd.m.none],
      CO = [],
      ZO = Object.create(null),
      kO = Object.create(null);
    for (let [dm, Om] of [
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
      ]) kO[dm] = MO(IO, Om);

    function fO(dd, Od) {
      CO.indexOf(dd) > -1 || (CO.push(dd), console.warn(Od))
    }

    function MO(dd, Od) {
      let md = [];
      for (let Fd of Od.split(" ")) {
        let Od = [];
        for (let md of Fd.split(".")) {
          let Wd = dd[md] || Kd.k[md];
          Wd ? "function" == typeof Wd ? Od.length ? Od = Od.map(Wd) : fO(md, `Modifier ${md} used at start of tag`) : Od.length ? fO(md, `Tag ${md} used as modifier`) : Od = Array.isArray(Wd) ? Wd : [Wd] : fO(md, `Unknown highlighting tag ${md}`)
        }
        for (let dd of Od) md.push(dd)
      }
      if (!md.length) return 0;
      let Wd = Od.replace(/ /g, "_"),
        Rd = Wd + " " + md.map((dd => dd.id)),
        Xd = ZO[Rd];
      if (Xd) return Xd.id;
      let hd = ZO[Rd] = Fd.m.define({
        id: lO.length,
        name: Wd,
        props: [(0, Kd.e)({
          [Wd]: md
        })]
      });
      return lO.push(hd), hd.id
    }
    Xd.e.RTL, Xd.e.LTR
  },
  53821: (dd, Od, md) => {
    md.d(Od, {
      d: () => pd,
      h: () => Ed
    });
    var Wd = md(53768),
      Fd = md(53759),
      Rd = md(53784);
    class Xd {
      constructor(dd, Od, md) {
        this.from = dd, this.to = Od, this.diagnostic = md
      }
    }
    class Kd {
      constructor(dd, Od, md) {
        this.diagnostics = dd, this.panel = Od, this.selected = md
      }
      static init(dd, Od, md) {
        let Rd = md.facet(gd).markerFilter;
        Rd && (dd = Rd(dd, md));
        let Xd = dd.slice().sort(((dd, Od) => dd.from - Od.from || dd.to - Od.to)),
          vd = new Fd.z,
          Qd = [],
          td = 0,
          od = md.doc.iter(),
          Nd = 0,
          qd = md.doc.length;
        for (let Fd = 0;;) {
          let dd, Od, md = Fd == Xd.length ? null : Xd[Fd];
          if (!md && !Qd.length) break;
          if (Qd.length) dd = td, Od = Qd.reduce(((dd, Od) => Math.min(dd, Od.to)), md && md.from > dd ? md.from : 1e8);
          else {
            if (dd = md.from, dd > qd) break;
            Od = md.to, Qd.push(md), Fd++
          }
          for (; Fd < Xd.length;) {
            let md = Xd[Fd];
            if (md.from != dd || !(md.to > md.from || md.to == dd)) {
              Od = Math.min(md.from, Od);
              break
            }
            Qd.push(md), Fd++, Od = Math.min(md.to, Od)
          }
          Od = Math.min(Od, qd);
          let Rd = !1;
          if (Qd.some((md => md.from == dd && (md.to == Od || Od == qd))) && (Rd = dd == Od, !Rd && Od - dd < 10)) {
            let md = dd - (Nd + od.value.length);
            md > 0 && (od.next(md), Nd = dd);
            for (let Wd = dd;;) {
              if (Wd >= Od) {
                Rd = !0;
                break
              }
              if (!od.lineBreak && Nd + od.value.length > Wd) break;
              Wd = Nd + od.value.length, Nd += od.value.length, od.next()
            }
          }
          let Kd = rd(Qd);
          if (Rd) vd.add(dd, dd, Wd.d.widget({
            widget: new xd(Kd),
            diagnostics: Qd.slice()
          }));
          else {
            let md = Qd.reduce(((dd, Od) => Od.markClass ? dd + " " + Od.markClass : dd), "");
            vd.add(dd, Od, Wd.d.mark({
              class: "cm-lintRange cm-lintRange-" + Kd + md,
              diagnostics: Qd.slice(),
              inclusiveEnd: Qd.some((dd => dd.to > Od))
            }))
          }
          if (td = Od, td == qd) break;
          for (let Wd = 0; Wd < Qd.length; Wd++) Qd[Wd].to <= td && Qd.splice(Wd--, 1)
        }
        let Hd = vd.finish();
        return new Kd(Hd, Od, hd(Hd))
      }
    }

    function hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Wd = null;
      return dd.between(md, 1e9, ((dd, md, Fd) => {
        let {
          spec: Rd
        } = Fd;
        if (!(Od && Rd.diagnostics.indexOf(Od) < 0))
          if (Wd) {
            if (Rd.diagnostics.indexOf(Wd.diagnostic) < 0) return !1;
            Wd = new Xd(Wd.from, md, Wd.diagnostic)
          } else Wd = new Xd(dd, md, Od || Rd.diagnostics[0])
      })), Wd
    }

    function vd(dd, Od) {
      let md = Od.pos,
        Wd = Od.end || md,
        Fd = dd.state.facet(gd).hideOn(dd, md, Wd);
      if (null != Fd) return Fd;
      let Rd = dd.startState.doc.lineAt(Od.pos);
      return !(!dd.effects.some((dd => dd.is(td))) && !dd.changes.touchesRange(Rd.from, Math.max(Rd.to, Wd)))
    }

    function Qd(dd, Od) {
      return dd.field(qd, !1) ? Od : Od.concat(Fd.I.appendConfig.of(Gd))
    }
    const td = Fd.I.define(),
      od = Fd.I.define(),
      Nd = Fd.I.define(),
      qd = Fd.M.define({
        create: () => new Kd(Wd.d.none, null, null),
        update(dd, Od) {
          if (Od.docChanged && dd.diagnostics.size) {
            let md = dd.diagnostics.map(Od.changes),
              Wd = null,
              Fd = dd.panel;
            if (dd.selected) {
              let Fd = Od.changes.mapPos(dd.selected.from, 1);
              Wd = hd(md, dd.selected.diagnostic, Fd) || hd(md, null, Fd)
            }!md.size && Fd && Od.state.facet(gd).autoPanel && (Fd = null), dd = new Kd(md, Fd, Wd)
          }
          for (let md of Od.effects)
            if (md.is(td)) {
              let Wd = Od.state.facet(gd).autoPanel ? md.value.length ? Sd.open : null : dd.panel;
              dd = Kd.init(md.value, Wd, Od.state)
            } else md.is(od) ? dd = new Kd(dd.diagnostics, md.value ? Sd.open : null, dd.selected) : md.is(Nd) && (dd = new Kd(dd.diagnostics, dd.panel, md.value));
          return dd
        },
        provide: dd => [Wd.db.from(dd, (dd => dd.panel)), Wd.h.aW.from(dd, (dd => dd.diagnostics))]
      });
    const Hd = Wd.d.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function yd(dd, Od, md) {
      let Wd, {
          diagnostics: Fd
        } = dd.state.field(qd),
        Rd = -1,
        Xd = -1;
      Fd.between(Od - (md < 0 ? 1 : 0), Od + (md > 0 ? 1 : 0), ((dd, Fd, Kd) => {
        let {
          spec: hd
        } = Kd;
        if (Od >= dd && Od <= Fd && (dd == Fd || (Od > dd || md > 0) && (Od < Fd || md < 0))) return Wd = hd.diagnostics, Rd = dd, Xd = Fd, !1
      }));
      let Kd = dd.state.facet(gd).tooltipFilter;
      return Wd && Kd && (Wd = Kd(Wd, dd.state)), Wd ? {
        pos: Rd,
        end: Xd,
        above: dd.state.doc.lineAt(Rd).to < Xd,
        create: () => ({
          dom: bd(dd, Wd)
        })
      } : null
    }

    function bd(dd, Od) {
      return (0, Rd.d)("ul", {
        class: "cm-tooltip-lint"
      }, Od.map((Od => Ud(dd, Od, !1))))
    }
    const Td = dd => {
        let Od = dd.state.field(qd, !1);
        return !(!Od || !Od.panel) && (dd.dispatch({
          effects: od.of(!1)
        }), !0)
      },
      pd = [{
        key: "Mod-Shift-m",
        run: dd => {
          let Od = dd.state.field(qd, !1);
          Od && Od.panel || dd.dispatch({
            effects: Qd(dd.state, [od.of(!0)])
          });
          let md = (0, Wd.A)(dd, Sd.open);
          return md && md.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: dd => {
          let Od = dd.state.field(qd, !1);
          if (!Od) return !1;
          let md = dd.state.selection.main,
            Wd = hd(Od.diagnostics, null, md.to + 1);
          return !(!Wd && (Wd = hd(Od.diagnostics, null, 0), !Wd || Wd.from == md.from && Wd.to == md.to)) && (dd.dispatch({
            selection: {
              anchor: Wd.from,
              head: Wd.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Yd = Wd.l.fromClass(class {
        constructor(dd) {
          this.view = dd, this.timeout = -1, this.set = !0;
          let {
            delay: Od
          } = dd.state.facet(gd);
          this.lintTime = Date.now() + Od, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Od)
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
              sources: Od
            } = dd.facet(gd);
            Od.length && function(dd, Od, md) {
              let Wd = [],
                Fd = -1;
              for (let Rd of dd) Rd.then((md => {
                Wd.push(md), clearTimeout(Fd), Wd.length == dd.length ? Od(Wd) : Fd = setTimeout((() => Od(Wd)), 200)
              }), md)
            }(Od.map((dd => Promise.resolve(dd(this.view)))), (Od => {
              this.view.state.doc == dd.doc && this.view.dispatch(function(dd, Od) {
                return {
                  effects: Qd(dd, [td.of(Od)])
                }
              }(this.view.state, Od.reduce(((dd, Od) => dd.concat(Od)))))
            }), (dd => {
              (0, Wd.U)(this.view.state, dd)
            }))
          }
        }
        update(dd) {
          let Od = dd.state.facet(gd);
          (dd.docChanged || Od != dd.startState.facet(gd) || Od.needsRefresh && Od.needsRefresh(dd)) && (this.lintTime = Date.now() + Od.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Od.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const gd = Fd.p.define({
      combine: dd => ({
        sources: dd.map((dd => dd.source)).filter((dd => null != dd)),
        ...(0, Fd.W)(dd.map((dd => dd.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: wd,
          tooltipFilter: wd,
          needsRefresh: (dd, Od) => dd ? Od ? md => dd(md) || Od(md) : dd : Od,
          hideOn: (dd, Od) => dd ? Od ? (md, Wd, Fd) => dd(md, Wd, Fd) || Od(md, Wd, Fd) : dd : Od,
          autoPanel: (dd, Od) => dd || Od
        })
      })
    });

    function wd(dd, Od) {
      return dd ? Od ? (md, Wd) => Od(dd(md, Wd), Wd) : dd : Od
    }

    function Ed(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [gd.of({
        source: dd,
        config: Od
      }), Yd, Gd]
    }

    function Jd(dd) {
      let Od = [];
      if (dd) dd: for (let {
          name: md
        }
        of dd) {
        for (let dd = 0; dd < md.length; dd++) {
          let Wd = md[dd];
          if (/[a-zA-Z]/.test(Wd) && !Od.some((dd => dd.toLowerCase() == Wd.toLowerCase()))) {
            Od.push(Wd);
            continue dd
          }
        }
        Od.push("")
      }
      return Od
    }

    function Ud(dd, Od, md) {
      var Wd;
      let Fd = md ? Jd(Od.actions) : [];
      return (0, Rd.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Od.severity
      }, (0, Rd.d)("span", {
        class: "cm-diagnosticText"
      }, Od.renderMessage ? Od.renderMessage(dd) : Od.message), null === (Wd = Od.actions) || void 0 === Wd ? void 0 : Wd.map(((md, Wd) => {
        let Xd = !1,
          Kd = Wd => {
            if (Wd.preventDefault(), Xd) return;
            Xd = !0;
            let Fd = hd(dd.state.field(qd).diagnostics, Od);
            Fd && md.apply(dd, Fd.from, Fd.to)
          },
          {
            name: vd
          } = md,
          Qd = Fd[Wd] ? vd.indexOf(Fd[Wd]) : -1,
          td = Qd < 0 ? vd : [vd.slice(0, Qd), (0, Rd.d)("u", vd.slice(Qd, Qd + 1)), vd.slice(Qd + 1)],
          od = md.markClass ? " " + md.markClass : "";
        return (0, Rd.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + od,
          onclick: Kd,
          onmousedown: Kd,
          "aria-label": ` Action: ${vd}${Qd<0?"":` (access key "${Fd[Wd]})"`}.`
        }, td)
      })), Od.source && (0, Rd.d)("div", {
        class: "cm-diagnosticSource"
      }, Od.source))
    }
    class xd extends Wd.o {
      constructor(dd) {
        super(), this.sev = dd
      }
      eq(dd) {
        return dd.sev == this.sev
      }
      toDOM() {
        return (0, Rd.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Bd {
      constructor(dd, Od) {
        this.diagnostic = Od, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Ud(dd, Od, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Sd {
      constructor(dd) {
        this.view = dd, this.items = [];
        this.list = (0, Rd.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Od => {
            if (!(Od.ctrlKey || Od.altKey || Od.metaKey)) {
              if (27 == Od.keyCode) Td(this.view), this.view.focus();
              else if (38 == Od.keyCode || 33 == Od.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Od.keyCode || 34 == Od.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Od.keyCode) this.moveSelection(0);
              else if (35 == Od.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Od.keyCode) this.view.focus();
              else {
                if (!(Od.keyCode >= 65 && Od.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: md
                  } = this.items[this.selectedIndex], Wd = Jd(md.actions);
                  for (let Fd = 0; Fd < Wd.length; Fd++)
                    if (Wd[Fd].toUpperCase().charCodeAt(0) == Od.keyCode) {
                      let Od = hd(this.view.state.field(qd).diagnostics, md);
                      Od && md.actions[Fd].apply(dd, Od.from, Od.to)
                    }
                }
              }
              Od.preventDefault()
            }
          },
          onclick: dd => {
            for (let Od = 0; Od < this.items.length; Od++) this.items[Od].dom.contains(dd.target) && this.moveSelection(Od)
          }
        }), this.dom = (0, Rd.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Rd.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Td(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let dd = this.view.state.field(qd).selected;
        if (!dd) return -1;
        for (let Od = 0; Od < this.items.length; Od++)
          if (this.items[Od].diagnostic == dd.diagnostic) return Od;
        return -1
      }
      update() {
        let {
          diagnostics: dd,
          selected: Od
        } = this.view.state.field(qd), md = 0, Wd = !1, Fd = null, Rd = new Set;
        for (dd.between(0, this.view.state.doc.length, ((dd, Xd, Kd) => {
            let {
              spec: hd
            } = Kd;
            for (let vd of hd.diagnostics) {
              if (Rd.has(vd)) continue;
              Rd.add(vd);
              let dd, Xd = -1;
              for (let Od = md; Od < this.items.length; Od++)
                if (this.items[Od].diagnostic == vd) {
                  Xd = Od;
                  break
                } Xd < 0 ? (dd = new Bd(this.view, vd), this.items.splice(md, 0, dd), Wd = !0) : (dd = this.items[Xd], Xd > md && (this.items.splice(md, Xd - md), Wd = !0)), Od && dd.diagnostic == Od.diagnostic ? dd.dom.hasAttribute("aria-selected") || (dd.dom.setAttribute("aria-selected", "true"), Fd = dd) : dd.dom.hasAttribute("aria-selected") && dd.dom.removeAttribute("aria-selected"), md++
            }
          })); md < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Wd = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Bd(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Wd = !0), Fd ? (this.list.setAttribute("aria-activedescendant", Fd.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Fd.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: dd => {
            let {
              sel: Od,
              panel: md
            } = dd, Wd = md.height / this.list.offsetHeight;
            Od.top < md.top ? this.list.scrollTop -= (md.top - Od.top) / Wd : Od.bottom > md.bottom && (this.list.scrollTop += (Od.bottom - md.bottom) / Wd)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Wd && this.sync()
      }
      sync() {
        let dd = this.list.firstChild;

        function Od() {
          let Od = dd;
          dd = Od.nextSibling, Od.remove()
        }
        for (let md of this.items)
          if (md.dom.parentNode == this.list) {
            for (; dd != md.dom;) Od();
            dd = md.dom.nextSibling
          } else this.list.insertBefore(md.dom, dd);
        for (; dd;) Od()
      }
      moveSelection(dd) {
        if (this.selectedIndex < 0) return;
        let Od = hd(this.view.state.field(qd).diagnostics, this.items[dd].diagnostic);
        Od && this.view.dispatch({
          selection: {
            anchor: Od.from,
            head: Od.to
          },
          scrollIntoView: !0,
          effects: Nd.of(Od)
        })
      }
      static open(dd) {
        return new Sd(dd)
      }
    }

    function sd(dd) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(dd)}</svg>')`
    }

    function ud(dd) {
      return sd(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${dd}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Vd = Wd.h.baseTheme({
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
        backgroundImage: ud("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: ud("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: ud("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: ud("#66d")
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

    function Ad(dd) {
      return "error" == dd ? 4 : "warning" == dd ? 3 : "info" == dd ? 2 : 1
    }

    function rd(dd) {
      let Od = "hint",
        md = 1;
      for (let Wd of dd) {
        let dd = Ad(Wd.severity);
        dd > md && (md = dd, Od = Wd.severity)
      }
      return Od
    }
    Wd.k;
    const Gd = [qd, Wd.h.aW.compute([qd], (dd => {
      let {
        selected: Od,
        panel: md
      } = dd.field(qd);
      return Od && md && Od.from != Od.to ? Wd.d.set([Hd.range(Od.from, Od.to)]) : Wd.d.none
    })), (0, Wd.L)(yd, {
      hideOn: vd
    }), Vd]
  },
  53814: (dd, Od, md) => {
    md.d(Od, {
      d: () => dO,
      f: () => bd,
      j: () => OO
    });
    var Wd = md(53768),
      Fd = md(53759),
      Rd = md(53784);
    const Xd = "function" == typeof String.prototype.normalize ? dd => dd.normalize("NFKD") : dd => dd;
    class Kd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Rd, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = dd.iterRange(md, Wd), this.bufferStart = md, this.normalize = Fd ? dd => Fd(Xd(dd)) : Xd, this.query = this.normalize(Od)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Fd.S)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let dd = this.peek();
          if (dd < 0) return this.done = !0, this;
          let Od = (0, Fd.eb)(dd),
            md = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Fd.T)(dd);
          let Wd = this.normalize(Od);
          if (Wd.length)
            for (let Fd = 0, Rd = md;; Fd++) {
              let dd = Wd.charCodeAt(Fd),
                Xd = this.match(dd, Rd, this.bufferPos + this.bufferStart);
              if (Fd == Wd.length - 1) {
                if (Xd) return this.value = Xd, this;
                break
              }
              Rd == md && Fd < Od.length && Od.charCodeAt(Fd) == dd && Rd++
            }
        }
      }
      match(dd, Od, md) {
        let Wd = null;
        for (let Fd = 0; Fd < this.matches.length; Fd += 2) {
          let Od = this.matches[Fd],
            Rd = !1;
          this.query.charCodeAt(Od) == dd && (Od == this.query.length - 1 ? Wd = {
            from: this.matches[Fd + 1],
            to: md
          } : (this.matches[Fd]++, Rd = !0)), Rd || (this.matches.splice(Fd, 2), Fd -= 2)
        }
        return this.query.charCodeAt(0) == dd && (1 == this.query.length ? Wd = {
          from: Od,
          to: md
        } : this.matches.push(1, Od)), Wd && this.test && !this.test(Wd.from, Wd.to, this.buffer, this.bufferStart) && (Wd = null), Wd
      }
    }
    "undefined" != typeof Symbol && (Kd.prototype[Symbol.iterator] = function() {
      return this
    });
    const hd = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      vd = "gm" + (null == /x/.unicode ? "" : "u");
    class Qd {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.length;
        if (this.text = dd, this.to = Fd, this.curLine = "", this.done = !1, this.value = hd, /\\[sWDnr]|\n|\r|\[\^/.test(Od)) return new Nd(dd, Od, md, Wd, Fd);
        this.re = new RegExp(Od, vd + ((null === md || void 0 === md ? void 0 : md.ignoreCase) ? "i" : "")), this.test = null === md || void 0 === md ? void 0 : md.test, this.iter = dd.iter();
        let Rd = dd.lineAt(Wd);
        this.curLineStart = Rd.from, this.matchPos = qd(dd, Wd), this.getLine(this.curLineStart)
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
          let Od = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Od) {
            let md = this.curLineStart + Od.index,
              Wd = md + Od[0].length;
            if (this.matchPos = qd(this.text, Wd + (md == Wd ? 1 : 0)), md == this.curLineStart + this.curLine.length && this.nextLine(), (md < Wd || md > this.value.to) && (!this.test || this.test(md, Wd, Od))) return this.value = {
              from: md,
              to: Wd,
              match: Od
            }, this;
            dd = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), dd = 0
          }
        }
      }
    }
    const td = new WeakMap;
    class od {
      constructor(dd, Od) {
        this.from = dd, this.text = Od
      }
      get to() {
        return this.from + this.text.length
      }
      static get(dd, Od, md) {
        let Wd = td.get(dd);
        if (!Wd || Wd.from >= md || Wd.to <= Od) {
          let Wd = new od(Od, dd.sliceString(Od, md));
          return td.set(dd, Wd), Wd
        }
        if (Wd.from == Od && Wd.to == md) return Wd;
        let {
          text: Fd,
          from: Rd
        } = Wd;
        return Rd > Od && (Fd = dd.sliceString(Od, Rd) + Fd, Rd = Od), Wd.to < md && (Fd += dd.sliceString(Wd.to, md)), td.set(dd, new od(Rd, Fd)), new od(Od, Fd.slice(Od - Rd, md - Rd))
      }
    }
    class Nd {
      constructor(dd, Od, md, Wd, Fd) {
        this.text = dd, this.to = Fd, this.done = !1, this.value = hd, this.matchPos = qd(dd, Wd), this.re = new RegExp(Od, vd + ((null === md || void 0 === md ? void 0 : md.ignoreCase) ? "i" : "")), this.test = null === md || void 0 === md ? void 0 : md.test, this.flat = od.get(dd, Wd, this.chunkEnd(Wd + 5e3))
      }
      chunkEnd(dd) {
        return dd >= this.to ? this.to : this.text.lineAt(dd).to
      }
      next() {
        for (;;) {
          let dd = this.re.lastIndex = this.matchPos - this.flat.from,
            Od = this.re.exec(this.flat.text);
          if (Od && !Od[0] && Od.index == dd && (this.re.lastIndex = dd + 1, Od = this.re.exec(this.flat.text)), Od) {
            let dd = this.flat.from + Od.index,
              md = dd + Od[0].length;
            if ((this.flat.to >= this.to || Od.index + Od[0].length <= this.flat.text.length - 10) && (!this.test || this.test(dd, md, Od))) return this.value = {
              from: dd,
              to: md,
              match: Od
            }, this.matchPos = qd(this.text, md + (dd == md ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = od.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function qd(dd, Od) {
      if (Od >= dd.length) return Od;
      let md, Wd = dd.lineAt(Od);
      for (; Od < Wd.to && (md = Wd.text.charCodeAt(Od - Wd.from)) >= 56320 && md < 57344;) Od++;
      return Od
    }
    "undefined" != typeof Symbol && (Qd.prototype[Symbol.iterator] = Nd.prototype[Symbol.iterator] = function() {
      return this
    });
    const Hd = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      yd = Fd.p.define({
        combine: dd => (0, Fd.W)(dd, Hd, {
          highlightWordAroundCursor: (dd, Od) => dd || Od,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function bd(dd) {
      let Od = [wd, gd];
      return dd && Od.push(yd.of(dd)), Od
    }
    const Td = Wd.d.mark({
        class: "cm-selectionMatch"
      }),
      pd = Wd.d.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Yd(dd, Od, md, Wd) {
      return (0 == md || dd(Od.sliceDoc(md - 1, md)) != Fd.i.Word) && (Wd == Od.doc.length || dd(Od.sliceDoc(Wd, Wd + 1)) != Fd.i.Word)
    }
    const gd = Wd.l.fromClass(class {
        constructor(dd) {
          this.aW = this.getDeco(dd)
        }
        update(dd) {
          (dd.selectionSet || dd.docChanged || dd.viewportChanged) && (this.aW = this.getDeco(dd.view))
        }
        getDeco(dd) {
          let Od = dd.state.facet(yd),
            {
              state: md
            } = dd,
            Rd = md.selection;
          if (Rd.By.length > 1) return Wd.d.none;
          let Xd, hd = Rd.main,
            vd = null;
          if (hd.empty) {
            if (!Od.highlightWordAroundCursor) return Wd.d.none;
            let dd = md.wordAt(hd.head);
            if (!dd) return Wd.d.none;
            vd = md.charCategorizer(hd.head), Xd = md.sliceDoc(dd.from, dd.to)
          } else {
            let dd = hd.to - hd.from;
            if (dd < Od.minSelectionLength || dd > 200) return Wd.d.none;
            if (Od.wholeWords) {
              if (Xd = md.sliceDoc(hd.from, hd.to), vd = md.charCategorizer(hd.head), !Yd(vd, md, hd.from, hd.to) || ! function(dd, Od, md, Wd) {
                  return dd(Od.sliceDoc(md, md + 1)) == Fd.i.Word && dd(Od.sliceDoc(Wd - 1, Wd)) == Fd.i.Word
                }(vd, md, hd.from, hd.to)) return Wd.d.none
            } else if (Xd = md.sliceDoc(hd.from, hd.to), !Xd) return Wd.d.none
          }
          let Qd = [];
          for (let Fd of dd.Mdd) {
            let dd = new Kd(md.doc, Xd, Fd.from, Fd.to);
            for (; !dd.next().done;) {
              let {
                from: Fd,
                to: Rd
              } = dd.value;
              if ((!vd || Yd(vd, md, Fd, Rd)) && (hd.empty && Fd <= hd.from && Rd >= hd.to ? Qd.push(pd.range(Fd, Rd)) : (Fd >= hd.to || Rd <= hd.from) && Qd.push(Td.range(Fd, Rd)), Qd.length > Od.maxMatches)) return Wd.d.none
            }
          }
          return Wd.d.set(Qd)
        }
      }, {
        aW: dd => dd.aW
      }),
      wd = Wd.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Ed = Fd.p.define({
      combine: dd => (0, Fd.W)(dd, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: dd => new mO(dd),
        scrollToMatch: dd => Wd.h.scrollIntoView(dd)
      })
    });
    class Jd {
      constructor(dd) {
        this.search = dd.search, this.caseSensitive = !!dd.caseSensitive, this.literal = !!dd.literal, this.regexp = !!dd.regexp, this.replace = dd.replace || "", this.valid = !!this.search && (!this.regexp || function(dd) {
          try {
            return new RegExp(dd, vd), !0
          } catch (Od) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!dd.wholeWord, this.test = dd.test
      }
      unquote(dd) {
        return this.literal ? dd : dd.replace(/\\([nrt\\])/g, ((dd, Od) => "n" == Od ? "\n" : "r" == Od ? "\r" : "t" == Od ? "\t" : "\\"))
      }
      eq(dd) {
        return this.search == dd.search && this.replace == dd.replace && this.caseSensitive == dd.caseSensitive && this.regexp == dd.regexp && this.wholeWord == dd.wholeWord && this.test == dd.test
      }
      create() {
        return this.regexp ? new Vd(this) : new Bd(this)
      }
      getCursor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = dd.doc ? dd : Fd.m.create({
            doc: dd
          });
        return null == md && (md = Wd.doc.length), this.regexp ? Sd(this, Wd, Od, md) : xd(this, Wd, Od, md)
      }
    }
    class Ud {
      constructor(dd) {
        this.spec = dd
      }
    }

    function xd(dd, Od, md, Wd) {
      let Rd;
      var Xd, hd;
      return dd.wholeWord && (Xd = Od.doc, hd = Od.charCategorizer(Od.selection.main.head), Rd = (dd, Od, md, Wd) => ((Wd > dd || Wd + md.length < Od) && (Wd = Math.max(0, dd - 2), md = Xd.sliceString(Wd, Math.min(Xd.length, Od + 2))), (hd(sd(md, dd - Wd)) != Fd.i.Word || hd(ud(md, dd - Wd)) != Fd.i.Word) && (hd(ud(md, Od - Wd)) != Fd.i.Word || hd(sd(md, Od - Wd)) != Fd.i.Word))), dd.test && (Rd = function(dd, Od, md) {
        return (Wd, Fd, Rd, Xd) => {
          if (md && !md(Wd, Fd, Rd, Xd)) return !1;
          let Kd = Wd >= Xd && Fd <= Xd + Rd.length ? Rd.slice(Wd - Xd, Fd - Xd) : Od.doc.sliceString(Wd, Fd);
          return dd(Kd, Od, Wd, Fd)
        }
      }(dd.test, Od, Rd)), new Kd(Od.doc, dd.unquoted, md, Wd, dd.caseSensitive ? void 0 : dd => dd.toLowerCase(), Rd)
    }
    class Bd extends Ud {
      constructor(dd) {
        super(dd)
      }
      nextMatch(dd, Od, md) {
        let Wd = xd(this.spec, dd, md, dd.doc.length).nextOverlapping();
        if (Wd.done) {
          let md = Math.min(dd.doc.length, Od + this.spec.unquoted.length);
          Wd = xd(this.spec, dd, 0, md).nextOverlapping()
        }
        return Wd.done || Wd.value.from == Od && Wd.value.to == md ? null : Wd.value
      }
      prevMatchInRange(dd, Od, md) {
        for (let Wd = md;;) {
          let md = Math.max(Od, Wd - 1e4 - this.spec.unquoted.length),
            Fd = xd(this.spec, dd, md, Wd),
            Rd = null;
          for (; !Fd.nextOverlapping().done;) Rd = Fd.value;
          if (Rd) return Rd;
          if (md == Od) return null;
          Wd -= 1e4
        }
      }
      prevMatch(dd, Od, md) {
        let Wd = this.prevMatchInRange(dd, 0, Od);
        return Wd || (Wd = this.prevMatchInRange(dd, Math.max(0, md - this.spec.unquoted.length), dd.doc.length)), !Wd || Wd.from == Od && Wd.to == md ? null : Wd
      }
      getReplacement(dd) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(dd, Od) {
        let md = xd(this.spec, dd, 0, dd.doc.length),
          Wd = [];
        for (; !md.next().done;) {
          if (Wd.length >= Od) return null;
          Wd.push(md.value)
        }
        return Wd
      }
      highlight(dd, Od, md, Wd) {
        let Fd = xd(this.spec, dd, Math.max(0, Od - this.spec.unquoted.length), Math.min(md + this.spec.unquoted.length, dd.doc.length));
        for (; !Fd.next().done;) Wd(Fd.value.from, Fd.value.to)
      }
    }

    function Sd(dd, Od, md, Wd) {
      let Rd;
      var Xd;
      return dd.wholeWord && (Xd = Od.charCategorizer(Od.selection.main.head), Rd = (dd, Od, md) => !md[0].length || (Xd(sd(md.input, md.index)) != Fd.i.Word || Xd(ud(md.input, md.index)) != Fd.i.Word) && (Xd(ud(md.input, md.index + md[0].length)) != Fd.i.Word || Xd(sd(md.input, md.index + md[0].length)) != Fd.i.Word)), dd.test && (Rd = function(dd, Od, md) {
        return (Wd, Fd, Rd) => (!md || md(Wd, Fd, Rd)) && dd(Rd[0], Od, Wd, Fd)
      }(dd.test, Od, Rd)), new Qd(Od.doc, dd.search, {
        ignoreCase: !dd.caseSensitive,
        test: Rd
      }, md, Wd)
    }

    function sd(dd, Od) {
      return dd.slice((0, Fd.ab)(dd, Od, !1), Od)
    }

    function ud(dd, Od) {
      return dd.slice(Od, (0, Fd.ab)(dd, Od))
    }
    class Vd extends Ud {
      nextMatch(dd, Od, md) {
        let Wd = Sd(this.spec, dd, md, dd.doc.length).next();
        return Wd.done && (Wd = Sd(this.spec, dd, 0, Od).next()), Wd.done ? null : Wd.value
      }
      prevMatchInRange(dd, Od, md) {
        for (let Wd = 1;; Wd++) {
          let Fd = Math.max(Od, md - 1e4 * Wd),
            Rd = Sd(this.spec, dd, Fd, md),
            Xd = null;
          for (; !Rd.next().done;) Xd = Rd.value;
          if (Xd && (Fd == Od || Xd.from > Fd + 10)) return Xd;
          if (Fd == Od) return null
        }
      }
      prevMatch(dd, Od, md) {
        return this.prevMatchInRange(dd, 0, Od) || this.prevMatchInRange(dd, md, dd.doc.length)
      }
      getReplacement(dd) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Od, md) => {
          if ("&" == md) return dd.match[0];
          if ("$" == md) return "$";
          for (let Wd = md.length; Wd > 0; Wd--) {
            let Od = +md.slice(0, Wd);
            if (Od > 0 && Od < dd.match.length) return dd.match[Od] + md.slice(Wd)
          }
          return Od
        }))
      }
      matchAll(dd, Od) {
        let md = Sd(this.spec, dd, 0, dd.doc.length),
          Wd = [];
        for (; !md.next().done;) {
          if (Wd.length >= Od) return null;
          Wd.push(md.value)
        }
        return Wd
      }
      highlight(dd, Od, md, Wd) {
        let Fd = Sd(this.spec, dd, Math.max(0, Od - 250), Math.min(md + 250, dd.doc.length));
        for (; !Fd.next().done;) Wd(Fd.value.from, Fd.value.to)
      }
    }
    const Ad = Fd.I.define(),
      rd = Fd.I.define(),
      Gd = Fd.M.define({
        create: dd => new nd(Zd(dd).create(), null),
        update(dd, Od) {
          for (let md of Od.effects) md.is(Ad) ? dd = new nd(md.value.create(), dd.panel) : md.is(rd) && (dd = new nd(dd.query, md.value ? Cd : null));
          return dd
        },
        provide: dd => Wd.db.from(dd, (dd => dd.panel))
      });
    class nd {
      constructor(dd, Od) {
        this.query = dd, this.panel = Od
      }
    }
    const Ld = Wd.d.mark({
        class: "cm-searchMatch"
      }),
      Pd = Wd.d.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      zd = Wd.l.fromClass(class {
        constructor(dd) {
          this.view = dd, this.aW = this.highlight(dd.state.field(Gd))
        }
        update(dd) {
          let Od = dd.state.field(Gd);
          (Od != dd.startState.field(Gd) || dd.docChanged || dd.selectionSet || dd.viewportChanged) && (this.aW = this.highlight(Od))
        }
        highlight(dd) {
          let {
            query: Od,
            panel: md
          } = dd;
          if (!md || !Od.spec.valid) return Wd.d.none;
          let {
            view: Rd
          } = this, Xd = new Fd.z;
          for (let Wd = 0, Fd = Rd.Mdd, Kd = Fd.length; Wd < Kd; Wd++) {
            let {
              from: dd,
              to: md
            } = Fd[Wd];
            for (; Wd < Kd - 1 && md > Fd[Wd + 1].from - 500;) md = Fd[++Wd].to;
            Od.highlight(Rd.state, dd, md, ((dd, Od) => {
              let md = Rd.state.selection.By.some((md => md.from == dd && md.to == Od));
              Xd.add(dd, Od, md ? Pd : Ld)
            }))
          }
          return Xd.finish()
        }
      }, {
        aW: dd => dd.aW
      });

    function cd(dd) {
      return Od => {
        let md = Od.state.field(Gd, !1);
        return md && md.query.spec.valid ? dd(Od, md) : Md(Od)
      }
    }
    const jd = cd(((dd, Od) => {
        let {
          query: md
        } = Od, {
          to: Wd
        } = dd.state.selection.main, Rd = md.nextMatch(dd.state, Wd, Wd);
        if (!Rd) return !1;
        let Xd = Fd.j.single(Rd.from, Rd.to),
          Kd = dd.state.facet(Ed);
        return dd.dispatch({
          selection: Xd,
          effects: [XO(dd, Rd), Kd.scrollToMatch(Xd.main, dd)],
          userEvent: "select.search"
        }), fd(dd), !0
      })),
      Dd = cd(((dd, Od) => {
        let {
          query: md
        } = Od, {
          state: Wd
        } = dd, {
          from: Rd
        } = Wd.selection.main, Xd = md.prevMatch(Wd, Rd, Rd);
        if (!Xd) return !1;
        let Kd = Fd.j.single(Xd.from, Xd.to),
          hd = dd.state.facet(Ed);
        return dd.dispatch({
          selection: Kd,
          effects: [XO(dd, Xd), hd.scrollToMatch(Kd.main, dd)],
          userEvent: "select.search"
        }), fd(dd), !0
      })),
      ed = cd(((dd, Od) => {
        let {
          query: md
        } = Od, Wd = md.matchAll(dd.state, 1e3);
        return !(!Wd || !Wd.length) && (dd.dispatch({
          selection: Fd.j.create(Wd.map((dd => Fd.j.range(dd.from, dd.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Id = cd(((dd, Od) => {
        let {
          query: md
        } = Od, {
          state: Rd
        } = dd, {
          from: Xd,
          to: Kd
        } = Rd.selection.main;
        if (Rd.readOnly) return !1;
        let hd = md.nextMatch(Rd, Xd, Xd);
        if (!hd) return !1;
        let vd, Qd, td = hd,
          od = [],
          Nd = [];
        td.from == Xd && td.to == Kd && (Qd = Rd.toText(md.getReplacement(td)), od.push({
          from: td.from,
          to: td.to,
          insert: Qd
        }), td = md.nextMatch(Rd, td.from, td.to), Nd.push(Wd.h.announce.of(Rd.phrase("replaced match on line $", Rd.doc.lineAt(Xd).number) + ".")));
        let qd = dd.state.changes(od);
        return td && (vd = Fd.j.single(td.from, td.to).map(qd), Nd.push(XO(dd, td)), Nd.push(Rd.facet(Ed).scrollToMatch(vd.main, dd))), dd.dispatch({
          changes: qd,
          selection: vd,
          effects: Nd,
          userEvent: "input.replace"
        }), !0
      })),
      ld = cd(((dd, Od) => {
        let {
          query: md
        } = Od;
        if (dd.state.readOnly) return !1;
        let Fd = md.matchAll(dd.state, 1e9).map((dd => {
          let {
            from: Od,
            to: Wd
          } = dd;
          return {
            from: Od,
            to: Wd,
            insert: md.getReplacement(dd)
          }
        }));
        if (!Fd.length) return !1;
        let Rd = dd.state.phrase("replaced $ matches", Fd.length) + ".";
        return dd.dispatch({
          changes: Fd,
          effects: Wd.h.announce.of(Rd),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Cd(dd) {
      return dd.state.facet(Ed).createPanel(dd)
    }

    function Zd(dd, Od) {
      var md, Wd, Fd, Rd, Xd;
      let Kd = dd.selection.main,
        hd = Kd.empty || Kd.to > Kd.from + 100 ? "" : dd.sliceDoc(Kd.from, Kd.to);
      if (Od && !hd) return Od;
      let vd = dd.facet(Ed);
      return new Jd({
        search: (null !== (md = null === Od || void 0 === Od ? void 0 : Od.literal) && void 0 !== md ? md : vd.literal) ? hd : hd.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Wd = null === Od || void 0 === Od ? void 0 : Od.caseSensitive) && void 0 !== Wd ? Wd : vd.caseSensitive,
        literal: null !== (Fd = null === Od || void 0 === Od ? void 0 : Od.literal) && void 0 !== Fd ? Fd : vd.literal,
        regexp: null !== (Rd = null === Od || void 0 === Od ? void 0 : Od.regexp) && void 0 !== Rd ? Rd : vd.regexp,
        wholeWord: null !== (Xd = null === Od || void 0 === Od ? void 0 : Od.wholeWord) && void 0 !== Xd ? Xd : vd.wholeWord
      })
    }

    function kd(dd) {
      let Od = (0, Wd.A)(dd, Cd);
      return Od && Od.dom.querySelector("[main-field]")
    }

    function fd(dd) {
      let Od = kd(dd);
      Od && Od == dd.root.activeElement && Od.select()
    }
    const Md = dd => {
        let Od = dd.state.field(Gd, !1);
        if (Od && Od.panel) {
          let md = kd(dd);
          if (md && md != dd.root.activeElement) {
            let Wd = Zd(dd.state, Od.query.spec);
            Wd.valid && dd.dispatch({
              effects: Ad.of(Wd)
            }), md.focus(), md.select()
          }
        } else dd.dispatch({
          effects: [rd.of(!0), Od ? Ad.of(Zd(dd.state, Od.query.spec)) : Fd.I.appendConfig.of(hO)]
        });
        return !0
      },
      dO = dd => {
        let Od = dd.state.field(Gd, !1);
        if (!Od || !Od.panel) return !1;
        let md = (0, Wd.A)(dd, Cd);
        return md && md.dom.contains(dd.root.activeElement) && dd.focus(), dd.dispatch({
          effects: rd.of(!1)
        }), !0
      },
      OO = [{
        key: "Mod-f",
        run: Md,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: jd,
        shift: Dd,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: jd,
        shift: Dd,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: dO,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd, Wd = Od.selection;
          if (Wd.By.length > 1 || Wd.main.empty) return !1;
          let {
            from: Rd,
            to: Xd
          } = Wd.main, hd = [], vd = 0;
          for (let Qd = new Kd(Od.doc, Od.sliceDoc(Rd, Xd)); !Qd.next().done;) {
            if (hd.length > 1e3) return !1;
            Qd.value.from == Rd && (vd = hd.length), hd.push(Fd.j.range(Qd.value.from, Qd.value.to))
          }
          return md(Od.update({
            selection: Fd.j.create(hd, vd),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: dd => {
          let {
            state: Od
          } = dd, md = String(Od.doc.lineAt(dd.state.selection.main.head).number), {
            close: Rd,
            result: Xd
          } = (0, Wd.ab)(dd, {
            label: Od.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: md
            },
            focus: !0,
            submitLabel: Od.phrase("go")
          });
          return Xd.then((md => {
            let Xd = md && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(md.elements.line.value);
            if (!Xd) return void dd.dispatch({
              effects: Rd
            });
            let Kd = Od.doc.lineAt(Od.selection.main.head),
              [, hd, vd, Qd, td] = Xd,
              od = Qd ? +Qd.slice(1) : 0,
              Nd = vd ? +vd : Kd.number;
            if (vd && td) {
              let dd = Nd / 100;
              hd && (dd = dd * ("-" == hd ? -1 : 1) + Kd.number / Od.doc.lines), Nd = Math.round(Od.doc.lines * dd)
            } else vd && hd && (Nd = Nd * ("-" == hd ? -1 : 1) + Kd.number);
            let qd = Od.doc.line(Math.max(1, Math.min(Od.doc.lines, Nd))),
              Hd = Fd.j.cursor(qd.from + Math.max(0, Math.min(od, qd.length)));
            dd.dispatch({
              effects: [Rd, Wd.h.scrollIntoView(Hd.from, {
                y: "center"
              })],
              selection: Hd
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd, {
            By: Rd
          } = Od.selection;
          if (Rd.some((dd => dd.from === dd.to))) return (dd => {
            let {
              state: Od,
              dispatch: md
            } = dd, {
              selection: Wd
            } = Od, Rd = Fd.j.create(Wd.By.map((dd => Od.wordAt(dd.head) || Fd.j.cursor(dd.head))), Wd.mainIndex);
            return !Rd.eq(Wd) && (md(Od.update({
              selection: Rd
            })), !0)
          })({
            state: Od,
            dispatch: md
          });
          let Xd = Od.sliceDoc(Rd[0].from, Rd[0].to);
          if (Od.selection.By.some((dd => Od.sliceDoc(dd.from, dd.to) != Xd))) return !1;
          let hd = function(dd, Od) {
            let {
              main: md,
              By: Wd
            } = dd.selection, Fd = dd.wordAt(md.head), Rd = Fd && Fd.from == md.from && Fd.to == md.to;
            for (let Xd = !1, hd = new Kd(dd.doc, Od, Wd[Wd.length - 1].to);;) {
              if (hd.next(), !hd.done) {
                if (Xd && Wd.some((dd => dd.from == hd.value.from))) continue;
                if (Rd) {
                  let Od = dd.wordAt(hd.value.from);
                  if (!Od || Od.from != hd.value.from || Od.to != hd.value.to) continue
                }
                return hd.value
              }
              if (Xd) return null;
              hd = new Kd(dd.doc, Od, 0, Math.max(0, Wd[Wd.length - 1].from - 1)), Xd = !0
            }
          }(Od, Xd);
          return !!hd && (md(Od.update({
            selection: Od.selection.addRange(Fd.j.range(hd.from, hd.to), !1),
            effects: Wd.h.scrollIntoView(hd.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class mO {
      constructor(dd) {
        this.view = dd;
        let Od = this.query = dd.state.field(Gd).query.spec;

        function md(dd, Od, md) {
          return (0, Rd.d)("button", {
            class: "cm-button",
            name: dd,
            onclick: Od,
            type: "button"
          }, md)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Rd.d)("input", {
          value: Od.search,
          placeholder: WO(dd, "Find"),
          "aria-label": WO(dd, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Rd.d)("input", {
          value: Od.replace,
          placeholder: WO(dd, "Replace"),
          "aria-label": WO(dd, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Rd.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Od.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Rd.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Od.regexp,
          onchange: this.commit
        }), this.wordField = (0, Rd.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Od.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Rd.d)("div", {
          onkeydown: dd => this.keydown(dd),
          class: "cm-search"
        }, [this.searchField, md("next", (() => jd(dd)), [WO(dd, "next")]), md("prev", (() => Dd(dd)), [WO(dd, "previous")]), md("select", (() => ed(dd)), [WO(dd, "all")]), (0, Rd.d)("label", null, [this.caseField, WO(dd, "match case")]), (0, Rd.d)("label", null, [this.reField, WO(dd, "regexp")]), (0, Rd.d)("label", null, [this.wordField, WO(dd, "by word")]), ...dd.state.readOnly ? [] : [(0, Rd.d)("br"), this.replaceField, md("replace", (() => Id(dd)), [WO(dd, "replace")]), md("replaceAll", (() => ld(dd)), [WO(dd, "replace all")])], (0, Rd.d)("button", {
          name: "close",
          onclick: () => dO(dd),
          "aria-label": WO(dd, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let dd = new Jd({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        dd.eq(this.query) || (this.query = dd, this.view.dispatch({
          effects: Ad.of(dd)
        }))
      }
      keydown(dd) {
        (0, Wd.$)(this.view, dd, "search-panel") ? dd.preventDefault(): 13 == dd.keyCode && dd.target == this.searchField ? (dd.preventDefault(), (dd.shiftKey ? Dd : jd)(this.view)) : 13 == dd.keyCode && dd.target == this.replaceField && (dd.preventDefault(), Id(this.view))
      }
      update(dd) {
        for (let Od of dd.transactions)
          for (let dd of Od.effects) dd.is(Ad) && !dd.value.eq(this.query) && this.setQuery(dd.value)
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
        return this.view.state.facet(Ed).top
      }
    }

    function WO(dd, Od) {
      return dd.state.phrase(Od)
    }
    const FO = 30,
      RO = /[\s\.,:;?!]/;

    function XO(dd, Od) {
      let {
        from: md,
        to: Fd
      } = Od, Rd = dd.state.doc.lineAt(md), Xd = dd.state.doc.lineAt(Fd).to, Kd = Math.max(Rd.from, md - FO), hd = Math.min(Xd, Fd + FO), vd = dd.state.sliceDoc(Kd, hd);
      if (Kd != Rd.from)
        for (let Wd = 0; Wd < FO; Wd++)
          if (!RO.test(vd[Wd + 1]) && RO.test(vd[Wd])) {
            vd = vd.slice(Wd);
            break
          } if (hd != Xd)
        for (let Wd = vd.length - 1; Wd > vd.length - FO; Wd--)
          if (!RO.test(vd[Wd - 1]) && RO.test(vd[Wd])) {
            vd = vd.slice(0, Wd);
            break
          } return Wd.h.announce.of(`${dd.state.phrase("current match")}. ${vd} ${dd.state.phrase("on line")} ${Rd.number}.`)
    }
    const KO = Wd.h.baseTheme({
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
      hO = [Gd, Fd.v.low(zd), KO]
  },
  53768: (dd, Od, md) => {
    md.d(Od, {
      d: () => Vd,
      e: () => tO,
      h: () => BF,
      k: () => hX,
      l: () => fO,
      o: () => sd,
      s: () => uR,
      u: () => MF,
      y: () => hR,
      A: () => MR,
      B: () => ZR,
      C: () => NX,
      F: () => YR,
      E: () => VX,
      H: () => yR,
      L: () => CR,
      O: () => GF,
      R: () => BX,
      U: () => lO,
      W: () => ER,
      Y: () => BR,
      $: () => PF,
      ab: () => FX,
      db: () => WX,
      eb: () => cR
    });
    for (var Wd = md(53759), Fd = md(53775), Rd = {
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
      }, Xd = {
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
      }, Kd = "undefined" != typeof navigator && /Mac/.test(navigator.platform), hd = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), vd = 0; vd < 10; vd++) Rd[48 + vd] = Rd[96 + vd] = String(vd);
    for (vd = 1; vd <= 24; vd++) Rd[vd + 111] = "F" + vd;
    for (vd = 65; vd <= 90; vd++) Rd[vd] = String.fromCharCode(vd + 32), Xd[vd] = String.fromCharCode(vd);
    for (var Qd in Rd) Xd.hasOwnProperty(Qd) || (Xd[Qd] = Rd[Qd]);
    var td = md(53784);
    let od = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Nd = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const qd = /Edge\/(\d+)/.exec(od.userAgent),
      Hd = /MSIE \d/.test(od.userAgent),
      yd = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(od.userAgent),
      bd = !!(Hd || yd || qd),
      Td = !bd && /gecko\/(\d+)/i.test(od.userAgent),
      pd = !bd && /Chrome\/(\d+)/.exec(od.userAgent),
      Yd = "webkitFontSmoothing" in Nd.documentElement.style,
      gd = !bd && /Apple Computer/.test(od.vendor),
      wd = gd && (/Mobile\/\w+/.test(od.userAgent) || od.maxTouchPoints > 2);
    var Ed = {
      mac: wd || /Mac/.test(od.platform),
      windows: /Win/.test(od.platform),
      linux: /Linux|X11/.test(od.platform),
      ie: bd,
      ie_version: Hd ? Nd.documentMode || 6 : yd ? +yd[1] : qd ? +qd[1] : 0,
      gecko: Td,
      gecko_version: Td ? +(/Firefox\/(\d+)/.exec(od.userAgent) || [0, 0])[1] : 0,
      chrome: !!pd,
      chrome_version: pd ? +pd[1] : 0,
      ios: wd,
      android: /Android\b/.test(od.userAgent),
      webkit: Yd,
      webkit_version: Yd ? +(/\bAppleWebKit\/(\d+)/.exec(od.userAgent) || [0, 0])[1] : 0,
      safari: gd,
      safari_version: gd ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(od.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Nd.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Jd(dd, Od) {
      for (let md in dd) "class" == md && Od.class ? Od.class += " " + dd.class : "style" == md && Od.style ? Od.style += ";" + dd.style : Od[md] = dd[md];
      return Od
    }
    const Ud = Object.create(null);

    function xd(dd, Od, md) {
      if (dd == Od) return !0;
      dd || (dd = Ud), Od || (Od = Ud);
      let Wd = Object.keys(dd),
        Fd = Object.keys(Od);
      if (Wd.length - (md && Wd.indexOf(md) > -1 ? 1 : 0) != Fd.length - (md && Fd.indexOf(md) > -1 ? 1 : 0)) return !1;
      for (let Rd of Wd)
        if (Rd != md && (-1 == Fd.indexOf(Rd) || dd[Rd] !== Od[Rd])) return !1;
      return !0
    }

    function Bd(dd, Od, md) {
      let Wd = !1;
      if (Od)
        for (let Fd in Od) md && Fd in md || (Wd = !0, "style" == Fd ? dd.style.cssText = "" : dd.removeAttribute(Fd));
      if (md)
        for (let Fd in md) Od && Od[Fd] == md[Fd] || (Wd = !0, "style" == Fd ? dd.style.cssText = md[Fd] : dd.setAttribute(Fd, md[Fd]));
      return Wd
    }

    function Sd(dd) {
      let Od = Object.create(null);
      for (let md = 0; md < dd.attributes.length; md++) {
        let Wd = dd.attributes[md];
        Od[Wd.name] = Wd.value
      }
      return Od
    }
    class sd {
      eq(dd) {
        return !1
      }
      updateDOM(dd, Od, md) {
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
      coordsAt(dd, Od, md) {
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
    var ud = function(dd) {
      return dd[dd.Text = 0] = "Text", dd[dd.WidgetBefore = 1] = "WidgetBefore", dd[dd.WidgetAfter = 2] = "WidgetAfter", dd[dd.WidgetRange = 3] = "WidgetRange", dd
    }(ud || (ud = {}));
    class Vd extends Wd.F {
      constructor(dd, Od, md, Wd) {
        super(), this.startSide = dd, this.endSide = Od, this.widget = md, this.spec = Wd
      }
      get heightRelevant() {
        return !1
      }
      static mark(dd) {
        return new Ad(dd)
      }
      static widget(dd) {
        let Od = Math.max(-1e4, Math.min(1e4, dd.side || 0)),
          md = !!dd.block;
        return Od += md && !dd.inlineOrder ? Od > 0 ? 3e8 : -4e8 : Od > 0 ? 1e8 : -1e8, new Gd(dd, Od, Od, md, dd.widget || null, !1)
      }
      static replace(dd) {
        let Od, md, Wd = !!dd.block;
        if (dd.isBlockGap) Od = -5e8, md = 4e8;
        else {
          let {
            start: Fd,
            end: Rd
          } = nd(dd, Wd);
          Od = (Fd ? Wd ? -3e8 : -1 : 5e8) - 1, md = 1 + (Rd ? Wd ? 2e8 : 1 : -6e8)
        }
        return new Gd(dd, Od, md, Wd, dd.widget || null, !0)
      }
      static line(dd) {
        return new rd(dd)
      }
      static set(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Wd.B.of(dd, Od)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Vd.none = Wd.B.empty;
    class Ad extends Vd {
      constructor(dd) {
        let {
          start: Od,
          end: md
        } = nd(dd);
        super(Od ? -1 : 5e8, md ? 1 : -6e8, null, dd), this.tagName = dd.tagName || "span", this.attrs = dd.class && dd.attributes ? Jd(dd.attributes, {
          class: dd.class
        }) : dd.class ? {
          class: dd.class
        } : dd.attributes || Ud
      }
      eq(dd) {
        return this == dd || dd instanceof Ad && this.tagName == dd.tagName && xd(this.attrs, dd.attrs)
      }
      range(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        if (dd >= Od) throw new RangeError("Mark decorations may not be empty");
        return super.range(dd, Od)
      }
    }
    Ad.prototype.point = !1;
    class rd extends Vd {
      constructor(dd) {
        super(-2e8, -2e8, null, dd)
      }
      eq(dd) {
        return dd instanceof rd && this.spec.class == dd.spec.class && xd(this.spec.attributes, dd.spec.attributes)
      }
      range(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        if (Od != dd) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(dd, Od)
      }
    }
    rd.prototype.mapMode = Wd.t.TrackBefore, rd.prototype.point = !0;
    class Gd extends Vd {
      constructor(dd, Od, md, Fd, Rd, Xd) {
        super(Od, md, Rd, dd), this.block = Fd, this.isReplace = Xd, this.mapMode = Fd ? Od <= 0 ? Wd.t.TrackBefore : Wd.t.TrackAfter : Wd.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? ud.WidgetRange : this.startSide <= 0 ? ud.WidgetBefore : ud.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(dd) {
        return dd instanceof Gd && (Od = this.widget, md = dd.widget, Od == md || !!(Od && md && Od.compare(md))) && this.block == dd.block && this.startSide == dd.startSide && this.endSide == dd.endSide;
        var Od, md
      }
      range(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        if (this.isReplace && (dd > Od || dd == Od && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Od != dd) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(dd, Od)
      }
    }

    function nd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: md,
          inclusiveEnd: Wd
        } = dd;
      return null == md && (md = dd.inclusive), null == Wd && (Wd = dd.inclusive), {
        start: null !== md && void 0 !== md ? md : Od,
        end: null !== Wd && void 0 !== Wd ? Wd : Od
      }
    }

    function Ld(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Fd = md.length - 1;
      Fd >= 0 && md[Fd] + Wd >= dd ? md[Fd] = Math.max(md[Fd], Od) : md.push(dd, Od)
    }
    Gd.prototype.point = !0;
    class Pd extends Wd.F {
      constructor(dd, Od) {
        super(), this.tagName = dd, this.attributes = Od
      }
      eq(dd) {
        return dd == this || dd instanceof Pd && this.tagName == dd.tagName && xd(this.attributes, dd.attributes)
      }
      static create(dd) {
        return new Pd(dd.tagName, dd.attributes || Ud)
      }
      static set(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Wd.B.of(dd, Od)
      }
    }

    function zd(dd) {
      let Od;
      return Od = 11 == dd.nodeType ? dd.getSelection ? dd : dd.ownerDocument : dd, Od.getSelection()
    }

    function cd(dd, Od) {
      return !!Od && (dd == Od || dd.contains(1 != Od.nodeType ? Od.parentNode : Od))
    }

    function jd(dd, Od) {
      if (!Od.anchorNode) return !1;
      try {
        return cd(dd, Od.anchorNode)
      } catch (md) {
        return !1
      }
    }

    function Dd(dd) {
      return 3 == dd.nodeType ? RO(dd, 0, dd.nodeValue.length).getClientRects() : 1 == dd.nodeType ? dd.getClientRects() : []
    }

    function ed(dd, Od, md, Wd) {
      return !!md && (Cd(dd, Od, md, Wd, -1) || Cd(dd, Od, md, Wd, 1))
    }

    function Id(dd) {
      for (var Od = 0;; Od++)
        if (!(dd = dd.previousSibling)) return Od
    }

    function ld(dd) {
      return 1 == dd.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(dd.nodeName)
    }

    function Cd(dd, Od, md, Wd, Fd) {
      for (;;) {
        if (dd == md && Od == Wd) return !0;
        if (Od == (Fd < 0 ? 0 : Zd(dd))) {
          if ("DIV" == dd.nodeName) return !1;
          let md = dd.parentNode;
          if (!md || 1 != md.nodeType) return !1;
          Od = Id(dd) + (Fd < 0 ? 0 : 1), dd = md
        } else {
          if (1 != dd.nodeType) return !1;
          if (1 == (dd = dd.childNodes[Od + (Fd < 0 ? -1 : 0)]).nodeType && "false" == dd.contentEditable) return !1;
          Od = Fd < 0 ? Zd(dd) : 0
        }
      }
    }

    function Zd(dd) {
      return 3 == dd.nodeType ? dd.nodeValue.length : dd.childNodes.length
    }

    function kd(dd, Od) {
      let md = Od ? dd.left : dd.right;
      return {
        left: md,
        right: md,
        top: dd.top,
        bottom: dd.bottom
      }
    }

    function fd(dd) {
      let Od = dd.visualViewport;
      return Od ? {
        left: 0,
        right: Od.width,
        top: 0,
        bottom: Od.height
      } : {
        left: 0,
        right: dd.innerWidth,
        top: 0,
        bottom: dd.innerHeight
      }
    }

    function Md(dd, Od) {
      let md = Od.width / dd.offsetWidth,
        Wd = Od.height / dd.offsetHeight;
      return (md > .995 && md < 1.005 || !isFinite(md) || Math.abs(Od.width - dd.offsetWidth) < 1) && (md = 1), (Wd > .995 && Wd < 1.005 || !isFinite(Wd) || Math.abs(Od.height - dd.offsetHeight) < 1) && (Wd = 1), {
        scaleX: md,
        scaleY: Wd
      }
    }

    function dO(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        md = dd.ownerDocument,
        Wd = null,
        Fd = null;
      for (let Rd = dd.parentNode; Rd && (Rd != md.body && (Od && !Wd || !Fd));)
        if (1 == Rd.nodeType) !Fd && Rd.scrollHeight > Rd.clientHeight && (Fd = Rd), Od && !Wd && Rd.scrollWidth > Rd.clientWidth && (Wd = Rd), Rd = Rd.assignedSlot || Rd.parentNode;
        else {
          if (11 != Rd.nodeType) break;
          Rd = Rd.host
        } return {
        x: Wd,
        y: Fd
      }
    }
    Pd.prototype.startSide = Pd.prototype.endSide = -1;
    class OO {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(dd) {
        return this.anchorNode == dd.anchorNode && this.anchorOffset == dd.anchorOffset && this.focusNode == dd.focusNode && this.focusOffset == dd.focusOffset
      }
      setRange(dd) {
        let {
          anchorNode: Od,
          focusNode: md
        } = dd;
        this.set(Od, Math.min(dd.anchorOffset, Od ? Zd(Od) : 0), md, Math.min(dd.focusOffset, md ? Zd(md) : 0))
      }
      set(dd, Od, md, Wd) {
        this.anchorNode = dd, this.anchorOffset = Od, this.focusNode = md, this.focusOffset = Wd
      }
    }
    let mO, WO = null;

    function FO(dd) {
      if (dd.setActive) return dd.setActive();
      if (WO) return dd.focus(WO);
      let Od = [];
      for (let md = dd; md && (Od.push(md, md.scrollTop, md.scrollLeft), md != md.ownerDocument); md = md.parentNode);
      if (dd.focus(null == WO ? {
          get preventScroll() {
            return WO = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !WO) {
        WO = !1;
        for (let dd = 0; dd < Od.length;) {
          let md = Od[dd++],
            Wd = Od[dd++],
            Fd = Od[dd++];
          md.scrollTop != Wd && (md.scrollTop = Wd), md.scrollLeft != Fd && (md.scrollLeft = Fd)
        }
      }
    }

    function RO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od,
        Wd = mO || (mO = document.createRange());
      return Wd.setEnd(dd, md), Wd.setStart(dd, Od), Wd
    }

    function XO(dd, Od, md, Wd) {
      let Fd = {
        key: Od,
        code: Od,
        keyCode: md,
        which: md,
        cancelable: !0
      };
      Wd && ({
        altKey: Fd.altKey,
        ctrlKey: Fd.ctrlKey,
        shiftKey: Fd.shiftKey,
        metaKey: Fd.metaKey
      } = Wd);
      let Rd = new KeyboardEvent("keydown", Fd);
      Rd.synthetic = !0, dd.dispatchEvent(Rd);
      let Xd = new KeyboardEvent("keyup", Fd);
      return Xd.synthetic = !0, dd.dispatchEvent(Xd), Rd.defaultPrevented || Xd.defaultPrevented
    }

    function KO(dd) {
      return dd instanceof Window ? dd.pageYOffset > Math.max(0, dd.document.documentElement.scrollHeight - dd.innerHeight - 4) : dd.scrollTop > Math.max(1, dd.scrollHeight - dd.clientHeight - 4)
    }

    function hO(dd, Od) {
      for (let md = dd, Wd = Od;;) {
        if (3 == md.nodeType && Wd > 0) return {
          node: md,
          offset: Wd
        };
        if (1 == md.nodeType && Wd > 0) {
          if ("false" == md.contentEditable) return null;
          md = md.childNodes[Wd - 1], Wd = Zd(md)
        } else {
          if (!md.parentNode || ld(md)) return null;
          Wd = Id(md), md = md.parentNode
        }
      }
    }

    function vO(dd, Od) {
      for (let md = dd, Wd = Od;;) {
        if (3 == md.nodeType && Wd < md.nodeValue.length) return {
          node: md,
          offset: Wd
        };
        if (1 == md.nodeType && Wd < md.childNodes.length) {
          if ("false" == md.contentEditable) return null;
          md = md.childNodes[Wd], Wd = 0
        } else {
          if (!md.parentNode || ld(md)) return null;
          Wd = Id(md) + 1, md = md.parentNode
        }
      }
    }
    Ed.safari && Ed.safari_version >= 26 && (WO = !1);
    class QO {
      constructor(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = dd, this.offset = Od, this.precise = md
      }
      static before(dd, Od) {
        return new QO(dd.parentNode, Id(dd), Od)
      }
      static after(dd, Od) {
        return new QO(dd.parentNode, Id(dd) + 1, Od)
      }
    }
    var tO = function(dd) {
      return dd[dd.LTR = 0] = "LTR", dd[dd.RTL = 1] = "RTL", dd
    }(tO || (tO = {}));
    const oO = tO.LTR,
      NO = tO.RTL;

    function qO(dd) {
      let Od = [];
      for (let md = 0; md < dd.length; md++) Od.push(1 << +dd[md]);
      return Od
    }
    const HO = qO("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      yO = qO("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      bO = Object.create(null),
      TO = [];
    for (let iX of ["()", "[]", "{}"]) {
      let dd = iX.charCodeAt(0),
        Od = iX.charCodeAt(1);
      bO[dd] = Od, bO[Od] = -dd
    }

    function pO(dd) {
      return dd <= 247 ? HO[dd] : 1424 <= dd && dd <= 1524 ? 2 : 1536 <= dd && dd <= 1785 ? yO[dd - 1536] : 1774 <= dd && dd <= 2220 ? 4 : 8192 <= dd && dd <= 8204 ? 256 : 64336 <= dd && dd <= 65023 ? 4 : 1
    }
    const YO = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class gO {
      get dir() {
        return this.level % 2 ? NO : oO
      }
      constructor(dd, Od, md) {
        this.from = dd, this.to = Od, this.level = md
      }
      side(dd, Od) {
        return this.dir == Od == dd ? this.to : this.from
      }
      forward(dd, Od) {
        return dd == (this.dir == Od)
      }
      static find(dd, Od, md, Wd) {
        let Fd = -1;
        for (let Rd = 0; Rd < dd.length; Rd++) {
          let Xd = dd[Rd];
          if (Xd.from <= Od && Xd.to >= Od) {
            if (Xd.level == md) return Rd;
            (Fd < 0 || (0 != Wd ? Wd < 0 ? Xd.from < Od : Xd.to > Od : dd[Fd].level > Xd.level)) && (Fd = Rd)
          }
        }
        if (Fd < 0) throw new RangeError("Index out of range");
        return Fd
      }
    }

    function wO(dd, Od) {
      if (dd.length != Od.length) return !1;
      for (let md = 0; md < dd.length; md++) {
        let Wd = dd[md],
          Fd = Od[md];
        if (Wd.from != Fd.from || Wd.to != Fd.to || Wd.direction != Fd.direction || !wO(Wd.inner, Fd.inner)) return !1
      }
      return !0
    }
    const aO = [];

    function EO(dd, Od, md, Wd, Fd, Rd, Xd) {
      let Kd = Wd % 2 ? 2 : 1;
      if (Wd % 2 == Fd % 2)
        for (let hd = Od, vd = 0; hd < md;) {
          let Od = !0,
            Qd = !1;
          if (vd == Rd.length || hd < Rd[vd].from) {
            let dd = aO[hd];
            dd != Kd && (Od = !1, Qd = 16 == dd)
          }
          let td = Od || 1 != Kd ? null : [],
            od = Od ? Wd : Wd + 1,
            Nd = hd;
          dd: for (;;)
            if (vd < Rd.length && Nd == Rd[vd].from) {
              if (Qd) break dd;
              let qd = Rd[vd];
              if (!Od)
                for (let dd = qd.to, Od = vd + 1;;) {
                  if (dd == md) break dd;
                  if (!(Od < Rd.length && Rd[Od].from == dd)) {
                    if (aO[dd] == Kd) break dd;
                    break
                  }
                  dd = Rd[Od++].to
                }
              if (vd++, td) td.push(qd);
              else {
                qd.from > hd && Xd.push(new gO(hd, qd.from, od)), JO(dd, qd.direction == oO != !(od % 2) ? Wd + 1 : Wd, Fd, qd.inner, qd.from, qd.to, Xd), hd = qd.to
              }
              Nd = qd.to
            } else {
              if (Nd == md || (Od ? aO[Nd] != Kd : aO[Nd] == Kd)) break;
              Nd++
            } td ? EO(dd, hd, Nd, Wd + 1, Fd, td, Xd) : hd < Nd && Xd.push(new gO(hd, Nd, od)), hd = Nd
        } else
          for (let hd = md, vd = Rd.length; hd > Od;) {
            let md = !0,
              Qd = !1;
            if (!vd || hd > Rd[vd - 1].to) {
              let dd = aO[hd - 1];
              dd != Kd && (md = !1, Qd = 16 == dd)
            }
            let td = md || 1 != Kd ? null : [],
              od = md ? Wd : Wd + 1,
              Nd = hd;
            dd: for (;;)
              if (vd && Nd == Rd[vd - 1].to) {
                if (Qd) break dd;
                let qd = Rd[--vd];
                if (!md)
                  for (let dd = qd.from, md = vd;;) {
                    if (dd == Od) break dd;
                    if (!md || Rd[md - 1].to != dd) {
                      if (aO[dd - 1] == Kd) break dd;
                      break
                    }
                    dd = Rd[--md].from
                  }
                if (td) td.push(qd);
                else {
                  qd.to < hd && Xd.push(new gO(qd.to, hd, od)), JO(dd, qd.direction == oO != !(od % 2) ? Wd + 1 : Wd, Fd, qd.inner, qd.from, qd.to, Xd), hd = qd.from
                }
                Nd = qd.from
              } else {
                if (Nd == Od || (md ? aO[Nd - 1] != Kd : aO[Nd - 1] == Kd)) break;
                Nd--
              } td ? EO(dd, Nd, hd, Wd + 1, Fd, td, Xd) : Nd < hd && Xd.push(new gO(Nd, hd, od)), hd = Nd
          }
    }

    function JO(dd, Od, md, Wd, Fd, Rd, Xd) {
      let Kd = Od % 2 ? 2 : 1;
      ! function(dd, Od, md, Wd, Fd) {
        for (let Rd = 0; Rd <= Wd.length; Rd++) {
          let Xd = Rd ? Wd[Rd - 1].to : Od,
            Kd = Rd < Wd.length ? Wd[Rd].from : md,
            hd = Rd ? 256 : Fd;
          for (let Od = Xd, md = hd, Wd = hd; Od < Kd; Od++) {
            let Fd = pO(dd.charCodeAt(Od));
            512 == Fd ? Fd = md : 8 == Fd && 4 == Wd && (Fd = 16), aO[Od] = 4 == Fd ? 2 : Fd, 7 & Fd && (Wd = Fd), md = Fd
          }
          for (let dd = Xd, Od = hd, Wd = hd; dd < Kd; dd++) {
            let Fd = aO[dd];
            if (128 == Fd) dd < Kd - 1 && Od == aO[dd + 1] && 24 & Od ? Fd = aO[dd] = Od : aO[dd] = 256;
            else if (64 == Fd) {
              let Fd = dd + 1;
              for (; Fd < Kd && 64 == aO[Fd];) Fd++;
              let Rd = dd && 8 == Od || Fd < md && 8 == aO[Fd] ? 1 == Wd ? 1 : 8 : 256;
              for (let Od = dd; Od < Fd; Od++) aO[Od] = Rd;
              dd = Fd - 1
            } else 8 == Fd && 1 == Wd && (aO[dd] = 1);
            Od = Fd, 7 & Fd && (Wd = Fd)
          }
        }
      }(dd, Fd, Rd, Wd, Kd),
      function(dd, Od, md, Wd, Fd) {
        let Rd = 1 == Fd ? 2 : 1;
        for (let Xd = 0, Kd = 0, hd = 0; Xd <= Wd.length; Xd++) {
          let vd = Xd ? Wd[Xd - 1].to : Od,
            Qd = Xd < Wd.length ? Wd[Xd].from : md;
          for (let Od, md, Wd, Xd = vd; Xd < Qd; Xd++)
            if (md = bO[Od = dd.charCodeAt(Xd)])
              if (md < 0) {
                for (let dd = Kd - 3; dd >= 0; dd -= 3)
                  if (TO[dd + 1] == -md) {
                    let Od = TO[dd + 2],
                      md = 2 & Od ? Fd : 4 & Od ? 1 & Od ? Rd : Fd : 0;
                    md && (aO[Xd] = aO[TO[dd]] = md), Kd = dd;
                    break
                  }
              } else {
                if (189 == TO.length) break;
                TO[Kd++] = Xd, TO[Kd++] = Od, TO[Kd++] = hd
              }
          else if (2 == (Wd = aO[Xd]) || 1 == Wd) {
            let dd = Wd == Fd;
            hd = dd ? 0 : 1;
            for (let Od = Kd - 3; Od >= 0; Od -= 3) {
              let md = TO[Od + 2];
              if (2 & md) break;
              if (dd) TO[Od + 2] |= 2;
              else {
                if (4 & md) break;
                TO[Od + 2] |= 4
              }
            }
          }
        }
      }(dd, Fd, Rd, Wd, Kd),
      function(dd, Od, md, Wd) {
        for (let Fd = 0, Rd = Wd; Fd <= md.length; Fd++) {
          let Xd = Fd ? md[Fd - 1].to : dd,
            Kd = Fd < md.length ? md[Fd].from : Od;
          for (let hd = Xd; hd < Kd;) {
            let Xd = aO[hd];
            if (256 == Xd) {
              let Xd = hd + 1;
              for (;;)
                if (Xd == Kd) {
                  if (Fd == md.length) break;
                  Xd = md[Fd++].to, Kd = Fd < md.length ? md[Fd].from : Od
                } else {
                  if (256 != aO[Xd]) break;
                  Xd++
                } let vd = 1 == Rd,
                Qd = vd == (1 == (Xd < Od ? aO[Xd] : Wd)) ? vd ? 1 : 2 : Wd;
              for (let Od = Xd, Wd = Fd, Rd = Wd ? md[Wd - 1].to : dd; Od > hd;) Od == Rd && (Od = md[--Wd].from, Rd = Wd ? md[Wd - 1].to : dd), aO[--Od] = Qd;
              hd = Xd
            } else Rd = Xd, hd++
          }
        }
      }(Fd, Rd, Wd, Kd), EO(dd, Fd, Rd, Od, md, Wd, Xd)
    }

    function UO(dd, Od, md) {
      if (!dd) return [new gO(0, 0, Od == NO ? 1 : 0)];
      if (Od == oO && !md.length && !YO.test(dd)) return xO(dd.length);
      if (md.length)
        for (; dd.length > aO.length;) aO[aO.length] = 256;
      let Wd = [],
        Fd = Od == oO ? 0 : 1;
      return JO(dd, Fd, Fd, md, 0, dd.length, Wd), Wd
    }

    function xO(dd) {
      return [new gO(0, dd, 0)]
    }
    let BO = "";

    function SO(dd, Od, md, Fd, Rd) {
      var Xd;
      let Kd = Fd.head - dd.from,
        hd = gO.find(Od, Kd, null !== (Xd = Fd.bidiLevel) && void 0 !== Xd ? Xd : -1, Fd.assoc),
        vd = Od[hd],
        Qd = vd.side(Rd, md);
      if (Kd == Qd) {
        let dd = hd += Rd ? 1 : -1;
        if (dd < 0 || dd >= Od.length) return null;
        vd = Od[hd = dd], Kd = vd.side(!Rd, md), Qd = vd.side(Rd, md)
      }
      let td = (0, Wd.ab)(dd.text, Kd, vd.forward(Rd, md));
      (td < vd.from || td > vd.to) && (td = Qd), BO = dd.text.slice(Math.min(Kd, td), Math.max(Kd, td));
      let od = hd == (Rd ? Od.length - 1 : 0) ? null : Od[hd + (Rd ? 1 : -1)];
      return od && td == Qd && od.level + (Rd ? 0 : 1) < vd.level ? Wd.j.cursor(od.side(!Rd, md) + dd.from, od.forward(Rd, md) ? 1 : -1, od.level) : Wd.j.cursor(td + dd.from, vd.forward(Rd, md) ? -1 : 1, vd.level)
    }

    function sO(dd, Od, md) {
      for (let Wd = Od; Wd < md; Wd++) {
        let Od = pO(dd.charCodeAt(Wd));
        if (1 == Od) return oO;
        if (2 == Od || 4 == Od) return NO
      }
      return oO
    }
    const uO = Wd.p.define(),
      VO = Wd.p.define(),
      iO = Wd.p.define(),
      AO = Wd.p.define(),
      rO = Wd.p.define(),
      GO = Wd.p.define(),
      nO = Wd.p.define(),
      LO = Wd.p.define(),
      PO = Wd.p.define(),
      zO = Wd.p.define({
        combine: dd => dd.some((dd => dd))
      }),
      cO = Wd.p.define({
        combine: dd => dd.some((dd => dd))
      }),
      jO = Wd.p.define();
    class DO {
      constructor(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = dd, this.y = Od, this.x = md, this.yMargin = Wd, this.xMargin = Fd, this.isSnapshot = Rd
      }
      map(dd) {
        return dd.empty ? this : new DO(this.range.map(dd), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(dd) {
        return this.range.to <= dd.doc.length ? this : new DO(Wd.j.cursor(dd.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const eO = Wd.I.define({
        map: (dd, Od) => dd.map(Od)
      }),
      IO = Wd.I.define();

    function lO(dd, Od, md) {
      let Wd = dd.facet(AO);
      Wd.length ? Wd[0](Od) : window.onerror && window.onerror(String(Od), md, void 0, void 0, Od) || (md ? console.error(md + ":", Od) : console.error(Od))
    }
    const CO = Wd.p.define({
      combine: dd => !dd.length || dd[0]
    });
    let ZO = 0;
    const kO = Wd.p.define({
      combine: dd => dd.filter(((Od, md) => {
        for (let Wd = 0; Wd < md; Wd++)
          if (dd[Wd].plugin == Od.plugin) return !1;
        return !0
      }))
    });
    class fO {
      constructor(dd, Od, md, Wd, Fd) {
        this.id = dd, this.create = Od, this.domEventHandlers = md, this.domEventObservers = Wd, this.baseExtensions = Fd(this), this.extension = this.baseExtensions.concat(kO.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(dd) {
        return this.baseExtensions.concat(kO.of({
          plugin: this,
          arg: dd
        }))
      }
      static define(dd, Od) {
        const {
          eventHandlers: md,
          eventObservers: Wd,
          provide: Fd,
          aW: Rd
        } = Od || {};
        return new fO(ZO++, dd, md, Wd, (dd => {
          let Od = [];
          return Rd && Od.push(mm.of((Od => {
            let md = Od.plugin(dd);
            return md ? Rd(md) : Vd.none
          }))), Fd && Od.push(Fd(dd)), Od
        }))
      }
      static fromClass(dd, Od) {
        return fO.define(((Od, md) => new dd(Od, md)), Od)
      }
    }
    class MO {
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
            } catch (Od) {
              if (lO(dd.state, Od, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (md) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(dd, this.spec.arg)
        } catch (Od) {
          lO(dd.state, Od, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(dd) {
        var Od;
        if (null === (Od = this.value) || void 0 === Od ? void 0 : Od.destroy) try {
          this.value.destroy()
        } catch (md) {
          lO(dd.state, md, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const dm = Wd.p.define(),
      Om = Wd.p.define(),
      mm = Wd.p.define(),
      Wm = Wd.p.define(),
      Fm = Wd.p.define(),
      Rm = Wd.p.define(),
      Xm = Wd.p.define();

    function Km(dd, Od) {
      let md = dd.state.facet(Xm);
      if (!md.length) return md;
      let Fd = md.map((Od => Od instanceof Function ? Od(dd) : Od)),
        Rd = [];
      return Wd.B.spans(Fd, Od.from, Od.to, {
        point() {},
        span(dd, md, Wd, Fd) {
          let Xd = dd - Od.from,
            Kd = md - Od.from,
            hd = Rd;
          for (let Rd = Wd.length - 1; Rd >= 0; Rd--, Fd--) {
            let dd, md = Wd[Rd].spec.bidiIsolate;
            if (null == md && (md = sO(Od.text, Xd, Kd)), Fd > 0 && hd.length && (dd = hd[hd.length - 1]).to == Xd && dd.direction == md) dd.to = Kd, hd = dd.inner;
            else {
              let dd = {
                from: Xd,
                to: Kd,
                direction: md,
                inner: []
              };
              hd.push(dd), hd = dd.inner
            }
          }
        }
      }), Rd
    }
    const hm = Wd.p.define();

    function Qm(dd) {
      let Od = 0,
        md = 0,
        Wd = 0,
        Fd = 0;
      for (let Rd of dd.state.facet(hm)) {
        let Xd = Rd(dd);
        Xd && (null != Xd.left && (Od = Math.max(Od, Xd.left)), null != Xd.right && (md = Math.max(md, Xd.right)), null != Xd.top && (Wd = Math.max(Wd, Xd.top)), null != Xd.bottom && (Fd = Math.max(Fd, Xd.bottom)))
      }
      return {
        left: Od,
        right: md,
        top: Wd,
        bottom: Fd
      }
    }
    const tm = Wd.p.define();
    class om {
      constructor(dd, Od, md, Wd) {
        this.fromA = dd, this.toA = Od, this.fromB = md, this.toB = Wd
      }
      join(dd) {
        return new om(Math.min(this.fromA, dd.fromA), Math.max(this.toA, dd.toA), Math.min(this.fromB, dd.fromB), Math.max(this.toB, dd.toB))
      }
      addToSet(dd) {
        let Od = dd.length,
          md = this;
        for (; Od > 0; Od--) {
          let Wd = dd[Od - 1];
          if (!(Wd.fromA > md.toA)) {
            if (Wd.toA < md.fromA) break;
            md = md.join(Wd), dd.splice(Od - 1, 1)
          }
        }
        return dd.splice(Od, 0, md), dd
      }
      static extendWithRanges(dd, Od) {
        if (0 == Od.length) return dd;
        let md = [];
        for (let Wd = 0, Fd = 0, Rd = 0;;) {
          let Xd = Wd < dd.length ? dd[Wd].fromB : 1e9,
            Kd = Fd < Od.length ? Od[Fd] : 1e9,
            hd = Math.min(Xd, Kd);
          if (1e9 == hd) break;
          let vd = hd + Rd,
            Qd = hd,
            td = vd;
          for (;;)
            if (Fd < Od.length && Od[Fd] <= Qd) {
              let md = Od[Fd + 1];
              Fd += 2, Qd = Math.max(Qd, md);
              for (let Od = Wd; Od < dd.length && dd[Od].fromB <= Qd; Od++) Rd = dd[Od].toA - dd[Od].toB;
              td = Math.max(td, md + Rd)
            } else {
              if (!(Wd < dd.length && dd[Wd].fromB <= Qd)) break;
              {
                let Od = dd[Wd++];
                Qd = Math.max(Qd, Od.toB), td = Math.max(td, Od.toA), Rd = Od.toA - Od.toB
              }
            } md.push(new om(vd, td, hd, Qd))
        }
        return md
      }
    }
    class Nm {
      constructor(dd, Od, md) {
        this.view = dd, this.state = Od, this.transactions = md, this.flags = 0, this.startState = dd.state, this.changes = Wd.ChangeSet.empty(this.startState.doc.length);
        for (let Wd of md) this.changes = this.changes.compose(Wd.changes);
        let Fd = [];
        this.changes.iterChangedRanges(((dd, Od, md, Wd) => Fd.push(new om(dd, Od, md, Wd)))), this.changedRanges = Fd
      }
      static create(dd, Od, md) {
        return new Nm(dd, Od, md)
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
    const qm = [];
    class Hm {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = dd, this.length = Od, this.flags = md, this.parent = null, dd.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return qm
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
          dd && function(dd, Od) {
            for (let md = dd.attributes.length - 1; md >= 0; md--) {
              let Wd = dd.attributes[md].name;
              null == Od[Wd] && dd.removeAttribute(Wd)
            }
            for (let md in Od) {
              let Wd = Od[md];
              "style" == md ? dd.style.cssText = Wd : dd.getAttribute(md) != Wd && dd.setAttribute(md, Wd)
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let md of this.children) {
          if (md == dd) return Od;
          Od += md.length + md.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(dd) {
        return this.posBefore(dd) + dd.length
      }
      covers(dd) {
        return !0
      }
      coordsIn(dd, Od) {
        return null
      }
      domPosFor(dd, Od) {
        let md = Id(this.dom),
          Wd = this.length ? dd > 0 : Od > 0;
        return new QO(this.parent.dom, md + (Wd ? 1 : 0), 0 == dd || dd == this.length)
      }
      markDirty(dd) {
        this.flags &= -3, dd && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let dd = this; dd; dd = dd.parent)
          if (dd instanceof Tm) return dd;
        return null
      }
      static get(dd) {
        return dd.cmTile
      }
    }
    class ym extends Hm {
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
        let Od, md = this.dom,
          Wd = null,
          Fd = (null === dd || void 0 === dd ? void 0 : dd.node) == md ? dd : null,
          Rd = 0;
        for (let Xd of this.children) {
          if (Xd.sync(dd), Rd += Xd.length + Xd.breakAfter, Od = Wd ? Wd.nextSibling : md.firstChild, Fd && Od != Xd.dom && (Fd.written = !0), Xd.dom.parentNode == md)
            for (; Od && Od != Xd.dom;) Od = bm(Od);
          else md.insertBefore(Xd.dom, Od);
          Wd = Xd.dom
        }
        for (Od = Wd ? Wd.nextSibling : md.firstChild, Fd && Od && (Fd.written = !0); Od;) Od = bm(Od);
        this.length = Rd
      }
    }

    function bm(dd) {
      let Od = dd.nextSibling;
      return dd.parentNode.removeChild(dd), Od
    }
    class Tm extends ym {
      constructor(dd, Od) {
        super(Od), this.view = dd
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
          let Od = Hm.get(dd);
          if (Od && this.owns(Od)) return Od;
          dd = dd.parentNode
        }
      }
      blockTiles(dd) {
        for (let Od = [], md = this, Wd = 0, Fd = 0;;)
          if (Wd == md.children.length) {
            if (!Od.length) return;
            md = md.parent, md.breakAfter && Fd++, Wd = Od.pop()
          } else {
            let Rd = md.children[Wd++];
            if (Rd instanceof pm) Od.push(Wd), md = Rd, Wd = 0;
            else {
              let Od = Fd + Rd.length,
                md = dd(Rd, Fd);
              if (void 0 !== md) return md;
              Fd = Od + Rd.breakAfter
            }
          }
      }
      resolveBlock(dd, Od) {
        let md, Wd, Fd = -1,
          Rd = -1;
        if (this.blockTiles(((Xd, Kd) => {
            let hd = Kd + Xd.length;
            if (dd >= Kd && dd <= hd) {
              if (Xd.isWidget() && Od >= -1 && Od <= 1) {
                if (32 & Xd.flags) return !0;
                16 & Xd.flags && (md = void 0)
              }(Kd < dd || dd == hd && (Od < -1 ? Xd.length : Xd.covers(1))) && (!md || !Xd.isWidget() && md.isWidget()) && (md = Xd, Fd = dd - Kd), (hd > dd || dd == Kd && (Od > 1 ? Xd.length : Xd.covers(-1))) && (!Wd || !Xd.isWidget() && Wd.isWidget()) && (Wd = Xd, Rd = dd - Kd)
            }
          })), !md && !Wd) throw new Error("No tile at position " + dd);
        return md && Od < 0 || !Wd ? {
          tile: md,
          offset: Fd
        } : {
          tile: Wd,
          offset: Rd
        }
      }
    }
    class pm extends ym {
      constructor(dd, Od) {
        super(dd), this.wrapper = Od
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
      static of (dd, Od) {
        let md = new pm(Od || document.createElement(dd.tagName), dd);
        return Od || (md.flags |= 4), md
      }
    }
    class Ym extends ym {
      constructor(dd, Od) {
        super(dd), this.attrs = Od
      }
      isLine() {
        return !0
      }
      static start(dd, Od, md) {
        let Wd = new Ym(Od || document.createElement("div"), dd);
        return Od && md || (Wd.flags |= 4), Wd
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(dd, Od, md) {
        let Wd = null,
          Fd = -1,
          Rd = null,
          Xd = -1;
        ! function dd(Kd, hd) {
          for (let vd = 0, Qd = 0; vd < Kd.children.length && Qd <= hd; vd++) {
            let td = Kd.children[vd],
              od = Qd + td.length;
            od >= hd && (td.isComposite() ? dd(td, hd - Qd) : (!Rd || Rd.isHidden && (Od > 0 || md && gm(Rd, td))) && (od > hd || 32 & td.flags) ? (Rd = td, Xd = hd - Qd) : (Qd < hd || 16 & td.flags && !td.isHidden) && (Wd = td, Fd = hd - Qd)), Qd = od
          }
        }(this, dd);
        let Kd = (Od < 0 ? Wd : Rd) || Wd || Rd;
        return Kd ? {
          tile: Kd,
          offset: Kd == Wd ? Fd : Xd
        } : null
      }
      coordsIn(dd, Od) {
        let md = this.resolveInline(dd, Od, !0);
        return md ? md.tile.coordsIn(Math.max(0, md.offset), Od) : function(dd) {
          let Od = dd.dom.lastChild;
          if (!Od) return dd.dom.getBoundingClientRect();
          let md = Dd(Od);
          return md[md.length - 1] || null
        }(this)
      }
      domIn(dd, Od) {
        let md = this.resolveInline(dd, Od);
        if (md) {
          let {
            tile: dd,
            offset: Wd
          } = md;
          if (this.dom.contains(dd.dom)) return dd.isText() ? new QO(dd.dom, Math.min(dd.dom.nodeValue.length, Wd)) : dd.domPosFor(Wd, 16 & dd.flags ? 1 : 32 & dd.flags ? -1 : Od);
          let Fd = md.tile.parent,
            Rd = !1;
          for (let Od of Fd.children) {
            if (Rd) return new QO(Od.dom, 0);
            Od == md.tile && (Rd = !0)
          }
        }
        return new QO(this.dom, 0)
      }
    }

    function gm(dd, Od) {
      let md = dd.coordsIn(0, 1),
        Wd = Od.coordsIn(0, 1);
      return md && Wd && Wd.top < md.bottom
    }
    class wm extends ym {
      constructor(dd, Od) {
        super(dd), this.mark = Od
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (dd, Od) {
        let md = new wm(Od || document.createElement(dd.tagName), dd);
        return Od || (md.flags |= 4), md
      }
    }
    class am extends Hm {
      constructor(dd, Od) {
        super(dd, Od.length), this.text = Od
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
      coordsIn(dd, Od) {
        let md = this.dom.nodeValue.length;
        dd > md && (dd = md);
        let Wd = dd,
          Fd = dd,
          Rd = 0;
        0 == dd && Od < 0 || dd == md && Od >= 0 ? Ed.chrome || Ed.gecko || (dd ? (Wd--, Rd = 1) : Fd < md && (Fd++, Rd = -1)) : Od < 0 ? Wd-- : Fd < md && Fd++;
        let Xd = RO(this.dom, Wd, Fd).getClientRects();
        if (!Xd.length) return null;
        let Kd = Xd[(Rd ? Rd < 0 : Od >= 0) ? 0 : Xd.length - 1];
        return Ed.safari && !Rd && 0 == Kd.width && (Kd = Array.prototype.find.call(Xd, (dd => dd.width)) || Kd), Rd ? kd(Kd, Rd < 0) : Kd || null
      }
      static of (dd, Od) {
        let md = new am(Od || document.createTextNode(dd), dd);
        return Od || (md.flags |= 2), md
      }
    }
    class Em extends Hm {
      constructor(dd, Od, md, Wd) {
        super(dd, Od, Wd), this.widget = md
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
      coordsIn(dd, Od) {
        return this.coordsInWidget(dd, Od, !1)
      }
      coordsInWidget(dd, Od, md) {
        let Wd = this.widget.coordsAt(this.dom, dd, Od);
        if (Wd) return Wd;
        if (md) return kd(this.dom.getBoundingClientRect(), this.length ? 0 == dd : Od <= 0);
        {
          let Od = this.dom.getClientRects(),
            md = null;
          if (!Od.length) return null;
          let Wd = !!(16 & this.flags) || !(32 & this.flags) && dd > 0;
          for (let Fd = Wd ? Od.length - 1 : 0; md = Od[Fd], !(dd > 0 ? 0 == Fd : Fd == Od.length - 1 || md.top < md.bottom); Fd += Wd ? -1 : 1);
          return kd(md, !Wd)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Wd.N.empty;
        let {
          root: dd
        } = this;
        if (!dd) return Wd.N.empty;
        let Od = this.posAtStart;
        return dd.view.state.doc.slice(Od, Od + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (dd, Od, md, Wd, Fd) {
        return Fd || (Fd = dd.toDOM(Od), dd.editable || (Fd.contentEditable = "false")), new Em(Fd, md, dd, Wd)
      }
    }
    class Jm extends Hm {
      constructor(dd) {
        let Od = document.createElement("img");
        Od.className = "cm-widgetBuffer", Od.setAttribute("aria-hidden", "true"), super(Od, 0, dd)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Wd.N.empty
      }
      coordsIn(dd) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Um {
      constructor(dd) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = dd
      }
      advance(dd, Od, md) {
        let {
          tile: Wd,
          index: Fd,
          beforeBreak: Rd,
          parents: Xd
        } = this;
        for (; dd || Od > 0;)
          if (Wd.isComposite())
            if (Rd) {
              if (!dd) break;
              md && md.break(), dd--, Rd = !1
            } else if (Fd == Wd.children.length) {
          if (!dd && !Xd.length) break;
          md && md.leave(Wd), Rd = !!Wd.breakAfter, ({
            tile: Wd,
            index: Fd
          } = Xd.pop()), Fd++
        } else {
          let Kd = Wd.children[Fd],
            hd = Kd.breakAfter;
          !(Od > 0 ? Kd.length <= dd : Kd.length < dd) || md && !1 === md.skip(Kd, 0, Kd.length) && Kd.isComposite ? (Xd.push({
            tile: Wd,
            index: Fd
          }), Wd = Kd, Fd = 0, md && Kd.isComposite() && md.enter(Kd)) : (Rd = !!hd, Fd++, dd -= Kd.length)
        } else if (Fd == Wd.length) Rd = !!Wd.breakAfter, ({
          tile: Wd,
          index: Fd
        } = Xd.pop()), Fd++;
        else {
          if (!dd) break;
          {
            let Od = Math.min(dd, Wd.length - Fd);
            md && md.skip(Wd, Fd, Fd + Od), dd -= Od, Fd += Od
          }
        }
        return this.tile = Wd, this.index = Fd, this.beforeBreak = Rd, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class xm {
      constructor(dd, Od, md, Wd) {
        this.from = dd, this.to = Od, this.wrapper = md, this.rank = Wd
      }
    }
    class Bm {
      constructor(dd, Od, md) {
        this.cache = dd, this.root = Od, this.blockWrappers = md, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(dd, Od, md, Wd) {
        var Fd;
        this.flushBuffer();
        let Rd = this.ensureMarks(Od, md),
          Xd = Rd.lastChild;
        if (Xd && Xd.isText() && !(8 & Xd.flags) && Xd.length + dd.length < 512) {
          this.cache.reused.set(Xd, 2), (Rd.children[Rd.children.length - 1] = new am(Xd.dom, Xd.text + dd)).parent = Rd
        } else Rd.append(Wd || am.of(dd, null === (Fd = this.cache.find(am)) || void 0 === Fd ? void 0 : Fd.dom));
        this.pos += dd.length, this.afterWidget = null
      }
      addComposition(dd, Od) {
        let md = this.curLine;
        md.dom != Od.line.dom && (md.setDOM(this.cache.reused.has(Od.line) ? rm(Od.line.dom) : Od.line.dom), this.cache.reused.set(Od.line, 2));
        let Wd = md;
        for (let Xd = Od.marks.length - 1; Xd >= 0; Xd--) {
          let dd = Od.marks[Xd],
            md = Wd.lastChild;
          if (md instanceof wm && md.mark.eq(dd.mark)) md.dom != dd.dom && md.setDOM(rm(dd.dom)), Wd = md;
          else {
            if (this.cache.reused.get(dd)) {
              let Od = Hm.get(dd.dom);
              Od && Od.setDOM(rm(dd.dom))
            }
            let Od = wm.of(dd.mark, dd.dom);
            Wd.append(Od), Wd = Od
          }
          this.cache.reused.set(dd, 2)
        }
        let Fd = Hm.get(dd.text);
        Fd && this.cache.reused.set(Fd, 2);
        let Rd = new am(dd.text, dd.text.nodeValue);
        Rd.flags |= 8, Wd.append(Rd)
      }
      addInlineWidget(dd, Od, md) {
        let Wd = this.afterWidget && 48 & dd.flags && (48 & this.afterWidget.flags) == (48 & dd.flags);
        Wd || this.flushBuffer();
        let Fd = this.ensureMarks(Od, md);
        Wd || 16 & dd.flags || Fd.append(this.getBuffer(1)), Fd.append(dd), this.pos += dd.length, this.afterWidget = dd
      }
      addMark(dd, Od, md) {
        this.flushBuffer(), this.ensureMarks(Od, md).append(dd), this.pos += dd.length, this.afterWidget = null
      }
      addBlockWidget(dd) {
        this.getBlockPos().append(dd), this.pos += dd.length, this.lastBlock = dd, this.endLine()
      }
      continueWidget(dd) {
        (this.afterWidget || this.lastBlock).length += dd, this.pos += dd
      }
      addLineStart(dd, Od) {
        var md;
        dd || (dd = Am);
        let Wd = Ym.start(dd, Od || (null === (md = this.cache.find(Ym)) || void 0 === md ? void 0 : md.dom), !!Od);
        this.getBlockPos().append(this.lastBlock = this.curLine = Wd)
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
      ensureMarks(dd, Od) {
        var md;
        let Wd = this.curLine;
        for (let Fd = dd.length - 1; Fd >= 0; Fd--) {
          let Rd, Xd = dd[Fd];
          if (Od > 0 && (Rd = Wd.lastChild) && Rd instanceof wm && Rd.mark.eq(Xd)) Wd = Rd, Od--;
          else {
            let dd = wm.of(Xd, null === (md = this.cache.find(wm, (dd => dd.mark.eq(Xd)))) || void 0 === md ? void 0 : md.dom);
            Wd.append(dd), Wd = dd, Od = 0
          }
        }
        return Wd
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let dd = this.curLine.lastChild;
          dd && im(this.curLine, !1) && ("BR" == dd.dom.nodeName || !dd.isWidget() || Ed.ios && im(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(nm, 0, 32) || new Em(nm.toDOM(), 0, nm, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let dd = this.wrappers.length - 1; dd >= 0; dd--) this.wrappers[dd].to < this.pos && this.wrappers.splice(dd, 1);
        for (let dd = this.blockWrappers; dd.value && dd.from <= this.pos; dd.next())
          if (dd.to >= this.pos) {
            let Od = new xm(dd.from, dd.to, dd.value, dd.rank),
              md = this.wrappers.length;
            for (; md > 0 && (this.wrappers[md - 1].rank - Od.rank || this.wrappers[md - 1].to - Od.to) < 0;) md--;
            this.wrappers.splice(md, 0, Od)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var dd;
        this.updateBlockWrappers();
        let Od = this.root;
        for (let md of this.wrappers) {
          let Wd = Od.lastChild;
          if (md.from < this.pos && Wd instanceof pm && Wd.wrapper.eq(md.wrapper)) Od = Wd;
          else {
            let Wd = pm.of(md.wrapper, null === (dd = this.cache.find(pm, (dd => dd.wrapper.eq(md.wrapper)))) || void 0 === dd ? void 0 : dd.dom);
            Od.append(Wd), Od = Wd
          }
        }
        return Od
      }
      blockPosCovered() {
        let dd = this.lastBlock;
        return null != dd && !dd.breakAfter && (!dd.isWidget() || (160 & dd.flags) > 0)
      }
      getBuffer(dd) {
        let Od = 2 | (dd < 0 ? 16 : 32),
          md = this.cache.find(Jm, void 0, 1);
        return md && (md.flags = Od), md || new Jm(Od)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Sm {
      constructor(dd) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = dd.iter()
      }
      skip(dd) {
        this.textOff + dd <= this.text.length ? this.textOff += dd : (this.skipCount += dd - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(dd) {
        if (this.textOff == this.text.length) {
          let {
            value: Od,
            lineBreak: md,
            done: Wd
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Wd) throw new Error("Ran out of text content when drawing inline views");
          this.text = Od;
          let Fd = this.textOff = Math.min(dd, Od.length);
          return md ? null : Od.slice(0, Fd)
        }
        let Od = Math.min(this.text.length, this.textOff + dd),
          md = this.text.slice(this.textOff, Od);
        return this.textOff = Od, md
      }
    }
    const sm = [Em, Ym, am, wm, Jm, pm, Tm];
    for (let iX = 0; iX < sm.length; iX++) sm[iX].bucket = iX;
    class um {
      constructor(dd) {
        this.view = dd, this.buckets = sm.map((() => [])), this.index = sm.map((() => 0)), this.reused = new Map
      }
      add(dd) {
        let Od = dd.constructor.bucket,
          md = this.buckets[Od];
        md.length < 6 ? md.push(dd) : md[this.index[Od] = (this.index[Od] + 1) % 6] = dd
      }
      find(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Wd = dd.bucket,
          Fd = this.buckets[Wd],
          Rd = this.index[Wd];
        for (let Xd = Fd.length - 1; Xd >= 0; Xd--) {
          let dd = (Xd + Rd) % Fd.length,
            Kd = Fd[dd];
          if ((!Od || Od(Kd)) && !this.reused.has(Kd)) return Fd.splice(dd, 1), dd < Rd && this.index[Wd]--, this.reused.set(Kd, md), Kd
        }
        return null
      }
      findWidget(dd, Od, md) {
        let Wd = this.buckets[0];
        if (Wd.length)
          for (let Fd = 0, Rd = 0;; Fd++) {
            if (Fd == Wd.length) {
              if (Rd) return null;
              Rd = 1, Fd = 0
            }
            let Xd = Wd[Fd];
            if (!this.reused.has(Xd) && (0 == Rd ? Xd.widget.compare(dd) : Xd.widget.constructor == dd.constructor && dd.updateDOM(Xd.dom, this.view, Xd.widget))) return Wd.splice(Fd, 1), Fd < this.index[0] && this.index[0]--, Xd.widget == dd && Xd.length == Od && (497 & Xd.flags) == md ? (this.reused.set(Xd, 1), Xd) : (this.reused.set(Xd, 2), new Em(Xd.dom, Od, dd, -498 & Xd.flags | md))
          }
      }
      reuse(dd) {
        return this.reused.set(dd, 1), dd
      }
      maybeReuse(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(dd)) return this.reused.set(dd, Od), dd.dom
      }
      clear() {
        for (let dd = 0; dd < this.buckets.length; dd++) this.buckets[dd].length = this.index[dd] = 0
      }
    }
    class Vm {
      constructor(dd, Od, md, Fd, Rd) {
        this.view = dd, this.aW = Fd, this.disallowBlockEffectsFor = Rd, this.openWidget = !1, this.openMarks = 0, this.cache = new um(dd), this.text = new Sm(dd.state.doc), this.builder = new Bm(this.cache, new Tm(dd, dd.contentDOM), Wd.B.iter(md)), this.cache.reused.set(Od, 2), this.old = new Um(Od), this.reuseWalker = {
          skip: (dd, Od, md) => {
            if (this.cache.add(dd), dd.isComposite()) return !1
          },
          enter: dd => this.cache.add(dd),
          leave: () => {},
          break: () => {}
        }
      }
      run(dd, Od) {
        let md = Od && this.getCompositionContext(Od.text);
        for (let Wd = 0, Fd = 0, Rd = 0;;) {
          let Xd = Rd < dd.length ? dd[Rd++] : null,
            Kd = Xd ? Xd.fromA : this.old.root.length;
          if (Kd > Wd) {
            let dd = Kd - Wd;
            this.preserve(dd, !Rd, !Xd), Wd = Kd, Fd += dd
          }
          if (!Xd) break;
          Od && Xd.fromA <= Od.range.fromA && Xd.toA >= Od.range.toA ? (this.forward(Xd.fromA, Od.range.fromA, Od.range.fromA < Od.range.toA ? 1 : -1), this.emit(Fd, Od.range.fromB), this.cache.clear(), this.builder.addComposition(Od, md), this.text.skip(Od.range.toB - Od.range.fromB), this.forward(Od.range.fromA, Xd.toA), this.emit(Od.range.toB, Xd.toB)) : (this.forward(Xd.fromA, Xd.toA), this.emit(Fd, Xd.toB)), Fd = Xd.toB, Wd = Xd.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(dd, Od, md) {
        let Wd = function(dd) {
            let Od = [];
            for (let md = dd.parents.length; md > 1; md--) {
              let Wd = md == dd.parents.length ? dd.tile : dd.parents[md].tile;
              Wd instanceof wm && Od.push(Wd.mark)
            }
            return Od
          }(this.old),
          Fd = this.openMarks;
        this.old.advance(dd, md ? 1 : -1, {
          skip: (dd, Od, md) => {
            if (dd.isWidget())
              if (this.openWidget) this.builder.continueWidget(md - Od);
              else {
                let Rd = md > 0 || Od < dd.length ? Em.of(dd.widget, this.view, md - Od, 496 & dd.flags, this.cache.maybeReuse(dd)) : this.cache.reuse(dd);
                256 & Rd.flags ? (Rd.flags &= -2, this.builder.addBlockWidget(Rd)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Rd, Wd, Fd), Fd = Wd.length)
              }
            else if (dd.isText()) this.builder.ensureLine(null), Od || md != dd.length || this.cache.reused.has(dd) ? (this.cache.add(dd), this.builder.addText(dd.text.slice(Od, md), Wd, Fd)) : this.builder.addText(dd.text, Wd, Fd, this.cache.reuse(dd)), Fd = Wd.length;
            else if (dd.isLine()) dd.flags &= -2, this.cache.reused.set(dd, 1), this.builder.addLine(dd);
            else if (dd instanceof Jm) this.cache.add(dd);
            else {
              if (!(dd instanceof wm)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(dd, Wd, Fd), this.cache.reused.set(dd, 1), Fd = Wd.length
            }
            this.openWidget = !1
          },
          enter: dd => {
            dd.isLine() ? this.builder.addLineStart(dd.attrs, this.cache.maybeReuse(dd)) : (this.cache.add(dd), dd instanceof wm && Wd.unshift(dd.mark)), this.openWidget = !1
          },
          leave: dd => {
            dd.isLine() ? Wd.length && (Wd.length = Fd = 0) : dd instanceof wm && (Wd.shift(), Fd = Math.min(Fd, Wd.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(dd)
      }
      emit(dd, Od) {
        let md = null,
          Fd = this.builder,
          Rd = 0,
          Xd = Wd.B.spans(this.aW, dd, Od, {
            point: (dd, Od, Wd, Xd, Kd, hd) => {
              if (Wd instanceof Gd) {
                if (this.disallowBlockEffectsFor[hd]) {
                  if (Wd.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Od > this.view.state.doc.lineAt(dd).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Rd = Xd.length, Kd > Xd.length) Fd.continueWidget(Od - dd);
                else {
                  let Rd = Wd.widget || (Wd.block ? Gm.block : Gm.inline),
                    hd = function(dd) {
                      let Od = dd.isReplace ? (dd.startSide < 0 ? 64 : 0) | (dd.endSide > 0 ? 128 : 0) : dd.startSide > 0 ? 32 : 16;
                      dd.block && (Od |= 256);
                      return Od
                    }(Wd),
                    vd = this.cache.findWidget(Rd, Od - dd, hd) || Em.of(Rd, this.view, Od - dd, hd);
                  Wd.block ? (Wd.startSide > 0 && Fd.addLineStartIfNotCovered(md), Fd.addBlockWidget(vd)) : (Fd.ensureLine(md), Fd.addInlineWidget(vd, Xd, Kd))
                }
                md = null
              } else md = function(dd, Od) {
                let md = Od.spec.attributes,
                  Wd = Od.spec.class;
                if (!md && !Wd) return dd;
                dd || (dd = {
                  class: "cm-line"
                });
                md && Jd(md, dd);
                Wd && (dd.class += " " + Wd);
                return dd
              }(md, Wd);
              Od > dd && this.text.skip(Od - dd)
            },
            span: (dd, Od, Wd, Rd) => {
              for (let Xd = dd; Xd < Od;) {
                let Kd = this.text.next(Math.min(512, Od - Xd));
                null == Kd ? (Fd.addLineStartIfNotCovered(md), Fd.addBreak(), Xd++) : (Fd.ensureLine(md), Fd.addText(Kd, Wd, Xd == dd ? Rd : Wd.length), Xd += Kd.length), md = null
              }
            }
          });
        Fd.addLineStartIfNotCovered(md), this.openWidget = Xd > Rd, this.openMarks = Xd
      }
      forward(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Od - dd <= 10 ? this.old.advance(Od - dd, md, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Od - dd - 10, -1), this.old.advance(5, md, this.reuseWalker))
      }
      getCompositionContext(dd) {
        let Od = [],
          md = null;
        for (let Wd = dd.parentNode;; Wd = Wd.parentNode) {
          let dd = Hm.get(Wd);
          if (Wd == this.view.contentDOM) break;
          dd instanceof wm ? Od.push(dd) : (null === dd || void 0 === dd ? void 0 : dd.isLine()) ? md = dd : dd instanceof pm || ("DIV" != Wd.nodeName || md || Wd == this.view.contentDOM ? md || Od.push(wm.of(new Ad({
            tagName: Wd.nodeName.toLowerCase(),
            attributes: Sd(Wd)
          }), Wd)) : md = new Ym(Wd, Am))
        }
        return {
          line: md,
          marks: Od
        }
      }
    }

    function im(dd, Od) {
      let md = dd => {
        for (let Wd of dd.children)
          if ((Od ? Wd.isText() : Wd.length) || md(Wd)) return !0;
        return !1
      };
      return md(dd)
    }
    const Am = {
      class: "cm-line"
    };

    function rm(dd) {
      let Od = Hm.get(dd);
      return Od && Od.setDOM(dd.cloneNode()), dd
    }
    class Gm extends sd {
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
    Gm.inline = new Gm("span"), Gm.block = new Gm("div");
    const nm = new class extends sd {
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
    class Lm {
      constructor(dd) {
        this.view = dd, this.aW = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Vd.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Tm(dd, dd.contentDOM), this.updateInner([new om(0, 0, 0, dd.state.doc.length)], null)
      }
      update(dd) {
        var Od;
        let md = dd.changedRanges;
        this.minWidth > 0 && md.length && (md.every((dd => {
          let {
            fromA: Od,
            toA: md
          } = dd;
          return md < this.minWidthFrom || Od > this.minWidthTo
        })) ? (this.minWidthFrom = dd.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = dd.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(dd);
        let Fd = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Od = this.domChanged) || void 0 === Od ? void 0 : Od.newSel) ? Fd = this.domChanged.newSel.head : function(dd, Od) {
          let md = !1;
          Od && dd.iterChangedRanges(((dd, Wd) => {
            dd < Od.to && Wd > Od.from && (md = !0)
          }));
          return md
        }(dd.changes, this.hasComposition) || dd.selectionSet || (Fd = dd.state.selection.main.head));
        let Rd = Fd > -1 ? function(dd, Od, md) {
          let Wd = zm(dd, md);
          if (!Wd) return null;
          let {
            node: Fd,
            from: Rd,
            to: Xd
          } = Wd, Kd = Fd.nodeValue;
          if (/[\n\r]/.test(Kd)) return null;
          if (dd.state.doc.sliceString(Wd.from, Wd.to) != Kd) return null;
          let hd = Od.invertedDesc;
          return {
            range: new om(hd.mapPos(Rd), hd.mapPos(Xd), Rd, Xd),
            text: Fd
          }
        }(this.view, dd.changes, Fd) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Od,
            to: Wd
          } = this.hasComposition;
          md = new om(Od, Wd, dd.changes.mapPos(Od, -1), dd.changes.mapPos(Wd, 1)).addToSet(md.slice())
        }
        this.hasComposition = Rd ? {
          from: Rd.range.fromB,
          to: Rd.range.toB
        } : null, (Ed.ie || Ed.chrome) && !Rd && dd && dd.state.doc.lines != dd.startState.doc.lines && (this.forceSelection = !0);
        let Xd = this.aW,
          Kd = this.blockWrappers;
        this.updateDeco();
        let hd = function(dd, Od, md) {
          let Fd = new cm;
          return Wd.B.compare(dd, Od, md, Fd), Fd.changes
        }(Xd, this.aW, dd.changes);
        hd.length && (md = om.extendWithRanges(md, hd));
        let vd = function(dd, Od, md) {
          let Fd = new jm;
          return Wd.B.compare(dd, Od, md, Fd), Fd.changes
        }(Kd, this.blockWrappers, dd.changes);
        return vd.length && (md = om.extendWithRanges(md, vd)), Rd && !md.some((dd => dd.fromA <= Rd.range.fromA && dd.toA >= Rd.range.toA)) && (md = Rd.range.addToSet(md.slice())), !(2 & this.tile.flags && 0 == md.length) && (this.updateInner(md, Rd), dd.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(dd, Od) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: md
        } = this.view;
        md.ignore((() => {
          if (Od || dd.length) {
            let md = this.tile,
              Wd = new Vm(this.view, md, this.blockWrappers, this.aW, this.dynamicDecorationMap);
            Od && Hm.get(Od.text) && Wd.cache.reused.set(Hm.get(Od.text), 2), this.tile = Wd.run(dd, Od), Pm(md, Wd.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Wd = Ed.chrome || Ed.ios ? {
            node: md.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Wd), !Wd || !Wd.written && md.selectionRange.focusNode == Wd.node && this.tile.dom.contains(Wd.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Wd = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Fd of this.tile.children) Fd.isWidget() && Fd.widget instanceof Dm && Wd.push(Fd.dom);
        md.updateGaps(Wd)
      }
      updateEditContextFormatting(dd) {
        this.editContextFormatting = this.editContextFormatting.map(dd.changes);
        for (let Od of dd.transactions)
          for (let dd of Od.effects) dd.is(IO) && (this.editContextFormatting = dd.value)
      }
      updateSelection() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Od
        } = this.tile, md = this.view.root.activeElement, Wd = md == Od, Fd = !Wd && !(this.view.state.facet(CO) || Od.tabIndex > -1) && jd(Od, this.view.observer.selectionRange) && !(md && Od.contains(md));
        if (!(Wd || dd || Fd)) return;
        let Rd = this.forceSelection;
        this.forceSelection = !1;
        let Xd, Kd, hd = this.view.state.selection.main;
        if (hd.empty ? Kd = Xd = this.inlineDOMNearPos(hd.anchor, hd.assoc || 1) : (Kd = this.inlineDOMNearPos(hd.head, hd.head == hd.from ? 1 : -1), Xd = this.inlineDOMNearPos(hd.anchor, hd.anchor == hd.from ? 1 : -1)), Ed.gecko && hd.empty && !this.hasComposition && (1 == (vd = Xd).node.nodeType && vd.node.firstChild && (0 == vd.offset || "false" == vd.node.childNodes[vd.offset - 1].contentEditable) && (vd.offset == vd.node.childNodes.length || "false" == vd.node.childNodes[vd.offset].contentEditable))) {
          let dd = document.createTextNode("");
          this.view.observer.ignore((() => Xd.node.insertBefore(dd, Xd.node.childNodes[Xd.offset] || null))), Xd = Kd = new QO(dd, 0), Rd = !0
        }
        var vd;
        let Qd = this.view.observer.selectionRange;
        !Rd && Qd.focusNode && (ed(Xd.node, Xd.offset, Qd.anchorNode, Qd.anchorOffset) && ed(Kd.node, Kd.offset, Qd.focusNode, Qd.focusOffset) || this.suppressWidgetCursorChange(Qd, hd)) || (this.view.observer.ignore((() => {
          Ed.android && Ed.chrome && Od.contains(Qd.focusNode) && function(dd, Od) {
            for (let md = dd; md && md != Od; md = md.assignedSlot || md.parentNode)
              if (1 == md.nodeType && "false" == md.contentEditable) return !0;
            return !1
          }(Qd.focusNode, Od) && (Od.blur(), Od.focus({
            preventScroll: !0
          }));
          let dd = zd(this.view.root);
          if (dd)
            if (hd.empty) {
              if (Ed.gecko) {
                let dd = (Wd = Xd.node, Rd = Xd.offset, 1 != Wd.nodeType ? 0 : (Rd && "false" == Wd.childNodes[Rd - 1].contentEditable ? 1 : 0) | (Rd < Wd.childNodes.length && "false" == Wd.childNodes[Rd].contentEditable ? 2 : 0));
                if (dd && 3 != dd) {
                  let Od = (1 == dd ? hO : vO)(Xd.node, Xd.offset);
                  Od && (Xd = new QO(Od.node, Od.offset))
                }
              }
              dd.collapse(Xd.node, Xd.offset), null != hd.bidiLevel && void 0 !== dd.caretBidiLevel && (dd.caretBidiLevel = hd.bidiLevel)
            } else if (dd.extend) {
            dd.collapse(Xd.node, Xd.offset);
            try {
              dd.extend(Kd.node, Kd.offset)
            } catch (vd) {}
          } else {
            let Od = document.createRange();
            hd.anchor > hd.head && ([Xd, Kd] = [Kd, Xd]), Od.setEnd(Kd.node, Kd.offset), Od.setStart(Xd.node, Xd.offset), dd.removeAllRanges(), dd.addRange(Od)
          } else;
          var Wd, Rd;
          Fd && this.view.root.activeElement == Od && (Od.blur(), md && md.focus())
        })), this.view.observer.setSelectionRange(Xd, Kd)), this.impreciseAnchor = Xd.precise ? null : new QO(Qd.anchorNode, Qd.anchorOffset), this.impreciseHead = Kd.precise ? null : new QO(Qd.focusNode, Qd.focusOffset)
      }
      suppressWidgetCursorChange(dd, Od) {
        return this.hasComposition && Od.empty && ed(dd.focusNode, dd.focusOffset, dd.anchorNode, dd.anchorOffset) && this.posFromDOM(dd.focusNode, dd.focusOffset) == Od.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: dd
        } = this, Od = dd.state.selection.main, md = zd(dd.root), {
          anchorNode: Wd,
          anchorOffset: Fd
        } = dd.observer.selectionRange;
        if (!md || !Od.empty || !Od.assoc || !md.modify) return;
        let Rd = this.lineAt(Od.head, Od.assoc);
        if (!Rd) return;
        let Xd = Rd.posAtStart;
        if (Od.head == Xd || Od.head == Xd + Rd.length) return;
        let Kd = this.coordsAt(Od.head, -1),
          hd = this.coordsAt(Od.head, 1);
        if (!Kd || !hd || Kd.bottom > hd.top) return;
        let vd = this.domAtPos(Od.head + Od.assoc, Od.assoc);
        md.collapse(vd.node, vd.offset), md.modify("move", Od.assoc < 0 ? "forward" : "backward", "lineboundary"), dd.observer.readSelectionRange();
        let Qd = dd.observer.selectionRange;
        dd.docView.posFromDOM(Qd.anchorNode, Qd.anchorOffset) != Od.from && md.collapse(Wd, Fd)
      }
      posFromDOM(dd, Od) {
        let md = this.tile.nearest(dd);
        if (!md) return 2 & this.tile.dom.compareDocumentPosition(dd) ? 0 : this.view.state.doc.length;
        let Wd = md.posAtStart;
        if (!md.isComposite()) return md.isText() ? dd == md.dom ? Wd + Od : Wd + (Od ? md.length : 0) : Wd;
        {
          let Fd;
          if (dd == md.dom) Fd = md.dom.childNodes[Od];
          else {
            let Wd = 0 == Zd(dd) ? 0 : 0 == Od ? -1 : 1;
            for (;;) {
              let Od = dd.parentNode;
              if (Od == md.dom) break;
              0 == Wd && Od.firstChild != Od.lastChild && (Wd = dd == Od.firstChild ? -1 : 1), dd = Od
            }
            Fd = Wd < 0 ? dd : dd.nextSibling
          }
          if (Fd == md.dom.firstChild) return Wd;
          for (; Fd && !Hm.get(Fd);) Fd = Fd.nextSibling;
          if (!Fd) return Wd + md.length;
          for (let dd = 0, Od = Wd;; dd++) {
            let Wd = md.children[dd];
            if (Wd.dom == Fd) return Od;
            Od += Wd.length + Wd.breakAfter
          }
        }
      }
      domAtPos(dd, Od) {
        let {
          tile: md,
          offset: Wd
        } = this.tile.resolveBlock(dd, Od);
        return md.isWidget() ? md.domPosFor(dd, Od) : md.domIn(Wd, Od)
      }
      inlineDOMNearPos(dd, Od) {
        let md, Wd, Fd = -1,
          Rd = !1,
          Xd = -1,
          Kd = !1;
        return this.tile.blockTiles(((Od, hd) => {
          if (Od.isWidget()) {
            if (32 & Od.flags && hd >= dd) return !0;
            16 & Od.flags && (Rd = !0)
          } else {
            let vd = hd + Od.length;
            if (hd <= dd && (md = Od, Fd = dd - hd, Rd = vd < dd), vd >= dd && !Wd && (Wd = Od, Xd = dd - hd, Kd = hd > dd), hd > dd && Wd) return !0
          }
        })), md || Wd ? (Rd && Wd ? md = null : Kd && md && (Wd = null), md && Od < 0 || !Wd ? md.domIn(Fd, Od) : Wd.domIn(Xd, Od)) : this.domAtPos(dd, Od)
      }
      coordsAt(dd, Od) {
        let {
          tile: md,
          offset: Wd
        } = this.tile.resolveBlock(dd, Od);
        return md.isWidget() ? md.widget instanceof Dm ? null : md.coordsInWidget(Wd, Od, !0) : md.coordsIn(Wd, Od)
      }
      lineAt(dd, Od) {
        let {
          tile: md
        } = this.tile.resolveBlock(dd, Od);
        return md.isLine() ? md : null
      }
      coordsForChar(dd) {
        let {
          tile: Od,
          offset: md
        } = this.tile.resolveBlock(dd, 1);
        if (!Od.isLine()) return null;
        return function dd(Od, md) {
          if (Od.isComposite())
            for (let Wd of Od.children) {
              if (Wd.length >= md) {
                let Od = dd(Wd, md);
                if (Od) return Od
              }
              if ((md -= Wd.length) < 0) break
            } else if (Od.isText() && md < Od.length) {
              let dd = (0, Wd.ab)(Od.text, md);
              if (dd == md) return null;
              let Fd = RO(Od.dom, md, dd).getClientRects();
              for (let Od = 0; Od < Fd.length; Od++) {
                let dd = Fd[Od];
                if (Od == Fd.length - 1 || dd.top < dd.bottom && dd.left < dd.right) return dd
              }
            } return null
        }(Od, md)
      }
      measureVisibleLineHeights(dd) {
        let Od = [],
          {
            from: md,
            to: Wd
          } = dd,
          Fd = this.view.contentDOM.clientWidth,
          Rd = Fd > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Xd = -1,
          Kd = this.view.textDirection == tO.LTR,
          hd = 0,
          vd = (dd, Qd, td) => {
            for (let od = 0; od < dd.children.length && !(Qd > Wd); od++) {
              let Wd = dd.children[od],
                Nd = Qd + Wd.length,
                qd = Wd.dom.getBoundingClientRect(),
                {
                  height: Hd
                } = qd;
              if (td && !od && (hd += qd.top - td.top), Wd instanceof pm) Nd > md && vd(Wd, Qd, qd);
              else if (Qd >= md && (hd > 0 && Od.push(-hd), Od.push(Hd + hd), hd = 0, Rd)) {
                let dd = Wd.dom.lastChild,
                  Od = dd ? Dd(dd) : [];
                if (Od.length) {
                  let dd = Od[Od.length - 1],
                    md = Kd ? dd.right - qd.left : qd.right - dd.left;
                  md > Xd && (Xd = md, this.minWidth = Fd, this.minWidthFrom = Qd, this.minWidthTo = Nd)
                }
              }
              td && od == dd.children.length - 1 && (hd += td.bottom - qd.bottom), Qd = Nd + Wd.breakAfter
            }
          };
        return vd(this.tile, 0, null), Od
      }
      textDirectionAt(dd) {
        let {
          tile: Od
        } = this.tile.resolveBlock(dd, 1);
        return "rtl" == getComputedStyle(Od.dom).direction ? tO.RTL : tO.LTR
      }
      measureTextSize() {
        let dd = this.tile.blockTiles((dd => {
          if (dd.isLine() && dd.children.length && dd.length <= 20) {
            let Od, md = 0;
            for (let Wd of dd.children) {
              if (!Wd.isText() || /[^ -~]/.test(Wd.text)) return;
              let dd = Dd(Wd.dom);
              if (1 != dd.length) return;
              md += dd[0].width, Od = dd[0].height
            }
            if (md) return {
              lineHeight: dd.dom.getBoundingClientRect().height,
              charWidth: md / dd.length,
              textHeight: Od
            }
          }
        }));
        if (dd) return dd;
        let Od, md, Wd, Fd = document.createElement("div");
        return Fd.className = "cm-line", Fd.style.width = "99999px", Fd.style.position = "absolute", Fd.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Fd);
          let dd = Dd(Fd.firstChild)[0];
          Od = Fd.getBoundingClientRect().height, md = dd && dd.width ? dd.width / 27 : 7, Wd = dd && dd.height ? dd.height : Od, Fd.remove()
        })), {
          lineHeight: Od,
          charWidth: md,
          textHeight: Wd
        }
      }
      computeBlockGapDeco() {
        let dd = [],
          Od = this.view.viewState;
        for (let md = 0, Wd = 0;; Wd++) {
          let Fd = Wd == Od.viewports.length ? null : Od.viewports[Wd],
            Rd = Fd ? Fd.from - 1 : this.view.state.doc.length;
          if (Rd > md) {
            let Wd = (Od.lineBlockAt(Rd).bottom - Od.lineBlockAt(md).top) / this.view.scaleY;
            dd.push(Vd.replace({
              widget: new Dm(Wd),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(md, Rd))
          }
          if (!Fd) break;
          md = Fd.to + 1
        }
        return Vd.set(dd)
      }
      updateDeco() {
        let dd = 1,
          Od = this.view.state.facet(mm).map((Od => (this.dynamicDecorationMap[dd++] = "function" == typeof Od) ? Od(this.view) : Od)),
          md = !1,
          Fd = this.view.state.facet(Fm).map(((dd, Od) => {
            let Wd = "function" == typeof dd;
            return Wd && (md = !0), Wd ? dd(this.view) : dd
          }));
        for (Fd.length && (this.dynamicDecorationMap[dd++] = md, Od.push(Wd.B.join(Fd))), this.aW = [this.editContextFormatting, ...Od, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; dd < this.aW.length;) this.dynamicDecorationMap[dd++] = !1;
        this.blockWrappers = this.view.state.facet(Wm).map((dd => "function" == typeof dd ? dd(this.view) : dd))
      }
      scrollIntoView(dd) {
        var Od;
        if (dd.isSnapshot) {
          let Od = this.view.viewState.lineBlockAt(dd.range.head);
          return this.view.scrollDOM.scrollTop = Od.top - dd.yMargin, void(this.view.scrollDOM.scrollLeft = dd.xMargin)
        }
        for (let Qd of this.view.state.facet(jO)) try {
          if (Qd(this.view, dd.range, dd)) return !0
        } catch (vd) {
          lO(this.view.state, vd, "scroll handler")
        }
        let md, {
            range: Wd
          } = dd,
          Fd = this.coordsAt(Wd.head, null !== (Od = Wd.assoc) && void 0 !== Od ? Od : Wd.empty ? 0 : Wd.head > Wd.anchor ? -1 : 1);
        if (!Fd) return;
        !Wd.empty && (md = this.coordsAt(Wd.anchor, Wd.anchor > Wd.head ? -1 : 1)) && (Fd = {
          left: Math.min(Fd.left, md.left),
          top: Math.min(Fd.top, md.top),
          right: Math.max(Fd.right, md.right),
          bottom: Math.max(Fd.bottom, md.bottom)
        });
        let Rd = Qm(this.view),
          Xd = {
            left: Fd.left - Rd.left,
            top: Fd.top - Rd.top,
            right: Fd.right + Rd.right,
            bottom: Fd.bottom + Rd.bottom
          },
          {
            offsetWidth: Kd,
            offsetHeight: hd
          } = this.view.scrollDOM;
        if (function(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
            let hd = dd.ownerDocument,
              vd = hd.defaultView || window;
            for (let Qd = dd, td = !1; Qd && !td;)
              if (1 == Qd.nodeType) {
                let dd, od = Qd == hd.body,
                  Nd = 1,
                  qd = 1;
                if (od) dd = fd(vd);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Qd).position) && (td = !0), Qd.scrollHeight <= Qd.clientHeight && Qd.scrollWidth <= Qd.clientWidth) {
                    Qd = Qd.assignedSlot || Qd.parentNode;
                    continue
                  }
                  let Od = Qd.getBoundingClientRect();
                  ({
                    scaleX: Nd,
                    scaleY: qd
                  } = Md(Qd, Od)), dd = {
                    left: Od.left,
                    right: Od.left + Qd.clientWidth * Nd,
                    top: Od.top,
                    bottom: Od.top + Qd.clientHeight * qd
                  }
                }
                let Hd = 0,
                  yd = 0;
                if ("nearest" == Fd) Od.top < dd.top + Xd ? (yd = Od.top - (dd.top + Xd), md > 0 && Od.bottom > dd.bottom + yd && (yd = Od.bottom - dd.bottom + Xd)) : Od.bottom > dd.bottom - Xd && (yd = Od.bottom - dd.bottom + Xd, md < 0 && Od.top - yd < dd.top && (yd = Od.top - (dd.top + Xd)));
                else {
                  let Wd = Od.bottom - Od.top,
                    Rd = dd.bottom - dd.top;
                  yd = ("center" == Fd && Wd <= Rd ? Od.top + Wd / 2 - Rd / 2 : "start" == Fd || "center" == Fd && md < 0 ? Od.top - Xd : Od.bottom - Rd + Xd) - dd.top
                }
                if ("nearest" == Wd ? Od.left < dd.left + Rd ? (Hd = Od.left - (dd.left + Rd), md > 0 && Od.right > dd.right + Hd && (Hd = Od.right - dd.right + Rd)) : Od.right > dd.right - Rd && (Hd = Od.right - dd.right + Rd, md < 0 && Od.left < dd.left + Hd && (Hd = Od.left - (dd.left + Rd))) : Hd = ("center" == Wd ? Od.left + (Od.right - Od.left) / 2 - (dd.right - dd.left) / 2 : "start" == Wd == Kd ? Od.left - Rd : Od.right - (dd.right - dd.left) + Rd) - dd.left, Hd || yd)
                  if (od) vd.scrollBy(Hd, yd);
                  else {
                    let dd = 0,
                      md = 0;
                    if (yd) {
                      let dd = Qd.scrollTop;
                      Qd.scrollTop += yd / qd, md = (Qd.scrollTop - dd) * qd
                    }
                    if (Hd) {
                      let Od = Qd.scrollLeft;
                      Qd.scrollLeft += Hd / Nd, dd = (Qd.scrollLeft - Od) * Nd
                    }
                    Od = {
                      left: Od.left - dd,
                      top: Od.top - md,
                      right: Od.right - dd,
                      bottom: Od.bottom - md
                    }, dd && Math.abs(dd - Hd) < 1 && (Wd = "nearest"), md && Math.abs(md - yd) < 1 && (Fd = "nearest")
                  } if (od) break;
                (Od.top < dd.top || Od.bottom > dd.bottom || Od.left < dd.left || Od.right > dd.right) && (Od = {
                  left: Math.max(Od.left, dd.left),
                  right: Math.min(Od.right, dd.right),
                  top: Math.max(Od.top, dd.top),
                  bottom: Math.min(Od.bottom, dd.bottom)
                }), Qd = Qd.assignedSlot || Qd.parentNode
              } else {
                if (11 != Qd.nodeType) break;
                Qd = Qd.host
              }
          }(this.view.scrollDOM, Xd, Wd.head < Wd.anchor ? -1 : 1, dd.x, dd.y, Math.max(Math.min(dd.xMargin, Kd), -Kd), Math.max(Math.min(dd.yMargin, hd), -hd), this.view.textDirection == tO.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Fd.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Fd.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let dd = this.view.docView.lineAt(Wd.head, 1);
          dd && dd.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(dd) {
        let Od = dd => dd.isWidget() || dd.children.some(Od);
        return Od(this.tile.resolveBlock(dd, 1).tile)
      }
      destroy() {
        Pm(this.tile)
      }
    }

    function Pm(dd, Od) {
      let md = null === Od || void 0 === Od ? void 0 : Od.get(dd);
      if (1 != md) {
        null == md && dd.destroy();
        for (let md of dd.children) Pm(md, Od)
      }
    }

    function zm(dd, Od) {
      let md = dd.observer.selectionRange;
      if (!md.focusNode) return null;
      let Wd = hO(md.focusNode, md.focusOffset),
        Fd = vO(md.focusNode, md.focusOffset),
        Rd = Wd || Fd;
      if (Fd && Wd && Fd.node != Wd.node) {
        let Od = Hm.get(Fd.node);
        if (!Od || Od.isText() && Od.text != Fd.node.nodeValue) Rd = Fd;
        else if (dd.docView.lastCompositionAfterCursor) {
          let dd = Hm.get(Wd.node);
          !dd || dd.isText() && dd.text != Wd.node.nodeValue || (Rd = Fd)
        }
      }
      if (dd.docView.lastCompositionAfterCursor = Rd != Wd, !Rd) return null;
      let Xd = Od - Rd.offset;
      return {
        from: Xd,
        to: Xd + Rd.node.nodeValue.length,
        node: Rd.node
      }
    }
    let cm = class {
      constructor() {
        this.changes = []
      }
      compareRange(dd, Od) {
        Ld(dd, Od, this.changes)
      }
      comparePoint(dd, Od) {
        Ld(dd, Od, this.changes)
      }
      boundChange(dd) {
        Ld(dd, dd, this.changes)
      }
    };
    class jm {
      constructor() {
        this.changes = []
      }
      compareRange(dd, Od) {
        Ld(dd, Od, this.changes)
      }
      comparePoint() {}
      boundChange(dd) {
        Ld(dd, dd, this.changes)
      }
    }
    class Dm extends sd {
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

    function em(dd, Od, md) {
      let Wd = dd.lineBlockAt(Od);
      if (Array.isArray(Wd.type)) {
        let dd;
        for (let Fd of Wd.type) {
          if (Fd.from > Od) break;
          if (!(Fd.to < Od)) {
            if (Fd.from < Od && Fd.to > Od) return Fd;
            dd && (Fd.type != ud.Text || dd.type == Fd.type && !(md < 0 ? Fd.from < Od : Fd.to > Od)) || (dd = Fd)
          }
        }
        return dd || Wd
      }
      return Wd
    }

    function Im(dd, Od, md, Wd) {
      let Fd = dd.state.doc.lineAt(Od.head),
        Rd = dd.bidiSpans(Fd),
        Xd = dd.textDirectionAt(Fd.from);
      for (let Kd = Od, hd = null;;) {
        let Od = SO(Fd, Rd, Xd, Kd, md),
          vd = BO;
        if (!Od) {
          if (Fd.number == (md ? dd.state.doc.lines : 1)) return Kd;
          vd = "\n", Fd = dd.state.doc.line(Fd.number + (md ? 1 : -1)), Rd = dd.bidiSpans(Fd), Od = dd.visualLineSide(Fd, !md)
        }
        if (hd) {
          if (!hd(vd)) return Kd
        } else {
          if (!Wd) return Od;
          hd = Wd(vd)
        }
        Kd = Od
      }
    }

    function lm(dd, Od, md) {
      for (;;) {
        let Wd = 0;
        for (let Fd of dd) Fd.between(Od - 1, Od + 1, ((dd, Fd, Rd) => {
          if (Od > dd && Od < Fd) {
            let Rd = Wd || md || (Od - dd < Fd - Od ? -1 : 1);
            Od = Rd < 0 ? dd : Fd, Wd = Rd
          }
        }));
        if (!Wd) return Od
      }
    }

    function Cm(dd, Od) {
      let md = null;
      for (let Fd = 0; Fd < Od.By.length; Fd++) {
        let Rd = Od.By[Fd],
          Xd = null;
        if (Rd.empty) {
          let Od = lm(dd, Rd.from, 0);
          Od != Rd.from && (Xd = Wd.j.cursor(Od, -1))
        } else {
          let Od = lm(dd, Rd.from, -1),
            md = lm(dd, Rd.to, 1);
          Od == Rd.from && md == Rd.to || (Xd = Wd.j.range(Rd.from == Rd.anchor ? Od : md, Rd.from == Rd.head ? Od : md))
        }
        Xd && (md || (md = Od.By.slice()), md[Fd] = Xd)
      }
      return md ? Wd.j.create(md, Od.mainIndex) : Od
    }

    function Zm(dd, Od, md) {
      let Fd = lm(dd.state.facet(Rm).map((Od => Od(dd))), md.from, Od.head > md.from ? -1 : 1);
      return Fd == md.from ? md : Wd.j.cursor(Fd, Fd < md.from ? 1 : -1)
    }
    class km {
      constructor(dd, Od) {
        this.pos = dd, this.assoc = Od
      }
    }

    function fm(dd, Od, md, Fd) {
      let Rd, Xd = dd.contentDOM.getBoundingClientRect(),
        Kd = Xd.top + dd.viewState.paddingTop,
        {
          x: hd,
          y: vd
        } = Od,
        Qd = vd - Kd;
      for (;;) {
        if (Qd < 0) return new km(0, 1);
        if (Qd > dd.viewState.docHeight) return new km(dd.state.doc.length, -1);
        if (Rd = dd.elementAtHeight(Qd), null == Fd) break;
        if (Rd.type == ud.Text) {
          if (Fd < 0 ? Rd.to < dd.viewport.from : Rd.from > dd.viewport.to) break;
          let Od = dd.docView.coordsAt(Fd < 0 ? Rd.from : Rd.to, Fd > 0 ? -1 : 1);
          if (Od && (Fd < 0 ? Od.top <= Qd + Kd : Od.bottom >= Qd + Kd)) break
        }
        let Od = dd.viewState.heightOracle.textHeight / 2;
        Qd = Fd > 0 ? Rd.bottom + Od : Rd.top - Od
      }
      if (dd.viewport.from >= Rd.to || dd.viewport.to <= Rd.from) {
        if (md) return null;
        if (Rd.type == ud.Text) {
          let Od = function(dd, Od, md, Fd, Rd) {
            let Xd = Math.round((Fd - Od.left) * dd.defaultCharacterWidth);
            if (dd.lineWrapping && md.height > 1.5 * dd.defaultLineHeight) {
              let Od = dd.viewState.heightOracle.textHeight;
              Xd += Math.floor((Rd - md.top - .5 * (dd.defaultLineHeight - Od)) / Od) * dd.viewState.heightOracle.lineLength
            }
            let Kd = dd.state.sliceDoc(md.from, md.to);
            return md.from + (0, Wd.bb)(Kd, Xd, dd.state.tabSize)
          }(dd, Xd, Rd, hd, vd);
          return new km(Od, Od == Rd.from ? 1 : -1)
        }
      }
      if (Rd.type != ud.Text) return Qd < (Rd.top + Rd.bottom) / 2 ? new km(Rd.from, 1) : new km(Rd.to, -1);
      let td = dd.docView.lineAt(Rd.from, 2);
      return td && td.length == Rd.length || (td = dd.docView.lineAt(Rd.from, -2)), new Mm(dd, hd, vd, dd.textDirectionAt(Rd.from)).scanTile(td, Rd.from)
    }
    class Mm {
      constructor(dd, Od, md, Wd) {
        this.view = dd, this.x = Od, this.y = md, this.baseDir = Wd, this.line = null, this.spans = null
      }
      bidiSpansAt(dd) {
        return (!this.line || this.line.from > dd || this.line.to < dd) && (this.line = this.view.state.doc.lineAt(dd), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(dd, Od) {
        let {
          line: md,
          spans: Wd
        } = this.bidiSpansAt(dd);
        return Wd[gO.find(Wd, dd - md.from, -1, Od)].level == this.baseDir
      }
      dirAt(dd, Od) {
        let {
          line: md,
          spans: Wd
        } = this.bidiSpansAt(dd);
        return Wd[gO.find(Wd, dd - md.from, -1, Od)].dir
      }
      bidiIn(dd, Od) {
        let {
          spans: md,
          line: Wd
        } = this.bidiSpansAt(dd);
        return md.length > 1 || md.length && (md[0].level != this.baseDir || md[0].to + Wd.from < Od)
      }
      scan(dd, Od) {
        let md, Wd, Fd, Rd = 0,
          Xd = dd.length - 1,
          Kd = new Set,
          hd = this.bidiIn(dd[0], dd[Xd]),
          vd = -1,
          Qd = 1e9;
        dd: for (; Rd < Xd;) {
          let td = Xd - Rd,
            od = Rd + Xd >> 1;
          Od: if (Kd.has(od)) {
            let dd = Rd + Math.floor(Math.random() * td);
            for (let Od = 0; Od < td; Od++) {
              if (!Kd.has(dd)) {
                od = dd;
                break Od
              }
              dd++, dd == Xd && (dd = Rd)
            }
            break dd
          } Kd.add(od);
          let Nd = Od(od);
          if (Nd)
            for (let Od = 0; Od < Nd.length; Od++) {
              let Kd = Nd[Od],
                td = 0;
              if (!(0 == Kd.width && Nd.length > 1)) {
                if (Kd.bottom < this.y)(!md || md.bottom < Kd.bottom) && (md = Kd), td = 1;
                else if (Kd.top > this.y)(!Wd || Wd.top > Kd.top) && (Wd = Kd), td = -1;
                else {
                  let dd = Kd.left > this.x ? this.x - Kd.left : Kd.right < this.x ? this.x - Kd.right : 0,
                    Od = Math.abs(dd);
                  Od < Qd && (vd = od, Qd = Od, Fd = Kd), dd && (td = dd < 0 == (this.baseDir == tO.LTR) ? -1 : 1)
                } - 1 != td || hd && !this.baseDirAt(dd[od], 1) ? 1 != td || hd && !this.baseDirAt(dd[od + 1], -1) || (Rd = od + 1) : Xd = od
              }
            }
        }
        if (!Fd) {
          let Fd = md && (!Wd || this.y - md.bottom < Wd.top - this.y) ? md : Wd;
          return this.y = (Fd.top + Fd.bottom) / 2, this.scan(dd, Od)
        }
        if (Qd) {
          if (md && md.bottom > Fd.top) return this.y = md.bottom - 1, this.scan(dd, Od);
          if (Wd && Wd.top < Fd.bottom) return this.y = Wd.top + 1, this.scan(dd, Od)
        }
        let td = (hd ? this.dirAt(dd[vd], 1) : this.baseDir) == tO.LTR;
        return {
          i: vd,
          after: this.x > (Fd.left + Fd.right) / 2 == td
        }
      }
      scanText(dd, Od) {
        let md = [];
        for (let Rd = 0; Rd < dd.length; Rd = (0, Wd.ab)(dd.text, Rd)) md.push(Od + Rd);
        md.push(Od + dd.length);
        let Fd = this.scan(md, (Wd => {
          let Fd = md[Wd] - Od,
            Rd = md[Wd + 1] - Od;
          return RO(dd.dom, Fd, Rd).getClientRects()
        }));
        return Fd.after ? new km(md[Fd.i + 1], -1) : new km(md[Fd.i], 1)
      }
      scanTile(dd, Od) {
        if (!dd.length) return new km(Od, 1);
        if (1 == dd.children.length) {
          let md = dd.children[0];
          if (md.isText()) return this.scanText(md, Od);
          if (md.isComposite()) return this.scanTile(md, Od)
        }
        let md = [Od];
        for (let Xd = 0, Kd = Od; Xd < dd.children.length; Xd++) md.push(Kd += dd.children[Xd].length);
        let Wd = this.scan(md, (Od => {
            let md = dd.children[Od];
            return 48 & md.flags ? null : (1 == md.dom.nodeType ? md.dom : RO(md.dom, 0, md.length)).getClientRects()
          })),
          Fd = dd.children[Wd.i],
          Rd = md[Wd.i];
        return Fd.isText() ? this.scanText(Fd, Rd) : Fd.isComposite() ? this.scanTile(Fd, Rd) : Wd.after ? new km(md[Wd.i + 1], -1) : new km(Rd, 1)
      }
    }
    const dW = "\uffff";
    class OW {
      constructor(dd, Od) {
        this.points = dd, this.view = Od, this.text = "", this.lineSeparator = Od.state.facet(Wd.m.lineSeparator)
      }
      append(dd) {
        this.text += dd
      }
      lineBreak() {
        this.text += dW
      }
      readRange(dd, Od) {
        if (!dd) return this;
        let md = dd.parentNode;
        for (let Wd = dd;;) {
          this.findPointBefore(md, Wd);
          let dd = this.text.length;
          this.readNode(Wd);
          let Fd = Hm.get(Wd),
            Rd = Wd.nextSibling;
          if (Rd == Od) {
            (null === Fd || void 0 === Fd ? void 0 : Fd.breakAfter) && !Rd && md != this.view.contentDOM && this.lineBreak();
            break
          }
          let Xd = Hm.get(Rd);
          (Fd && Xd ? Fd.breakAfter : (Fd ? Fd.breakAfter : ld(Wd)) || ld(Rd) && ("BR" != Wd.nodeName || (null === Fd || void 0 === Fd ? void 0 : Fd.isWidget())) && this.text.length > dd) && !WW(Rd, Od) && this.lineBreak(), Wd = Rd
        }
        return this.findPointBefore(md, Od), this
      }
      readTextNode(dd) {
        let Od = dd.nodeValue;
        for (let md of this.points) md.node == dd && (md.pos = this.text.length + Math.min(md.offset, Od.length));
        for (let md = 0, Wd = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Fd, Rd = -1,
            Xd = 1;
          if (this.lineSeparator ? (Rd = Od.indexOf(this.lineSeparator, md), Xd = this.lineSeparator.length) : (Fd = Wd.exec(Od)) && (Rd = Fd.index, Xd = Fd[0].length), this.append(Od.slice(md, Rd < 0 ? Od.length : Rd)), Rd < 0) break;
          if (this.lineBreak(), Xd > 1)
            for (let Od of this.points) Od.node == dd && Od.pos > this.text.length && (Od.pos -= Xd - 1);
          md = Rd + Xd
        }
      }
      readNode(dd) {
        let Od = Hm.get(dd),
          md = Od && Od.overrideDOMText;
        if (null != md) {
          this.findPointInside(dd, md.length);
          for (let dd = md.iter(); !dd.next().done;) dd.lineBreak ? this.lineBreak() : this.append(dd.value)
        } else 3 == dd.nodeType ? this.readTextNode(dd) : "BR" == dd.nodeName ? dd.nextSibling && this.lineBreak() : 1 == dd.nodeType && this.readRange(dd.firstChild, null)
      }
      findPointBefore(dd, Od) {
        for (let md of this.points) md.node == dd && dd.childNodes[md.offset] == Od && (md.pos = this.text.length)
      }
      findPointInside(dd, Od) {
        for (let md of this.points)(3 == dd.nodeType ? md.node == dd : dd.contains(md.node)) && (md.pos = this.text.length + (mW(dd, md.node, md.offset) ? Od : 0))
      }
    }

    function mW(dd, Od, md) {
      for (;;) {
        if (!Od || md < Zd(Od)) return !1;
        if (Od == dd) return !0;
        md = Id(Od) + 1, Od = Od.parentNode
      }
    }

    function WW(dd, Od) {
      let md;
      for (; dd != Od && dd; dd = dd.nextSibling) {
        let Od = Hm.get(dd);
        if (!(null === Od || void 0 === Od ? void 0 : Od.isWidget())) return !1;
        Od && (md || (md = [])).push(Od)
      }
      if (md)
        for (let Wd of md) {
          let dd = Wd.overrideDOMText;
          if (null === dd || void 0 === dd ? void 0 : dd.length) return !1
        }
      return !0
    }
    class FW {
      constructor(dd, Od) {
        this.node = dd, this.offset = Od, this.pos = -1
      }
    }
    class RW {
      constructor(dd, Od, md, Fd) {
        this.typeOver = Fd, this.bounds = null, this.text = "", this.domChanged = Od > -1;
        let {
          impreciseHead: Rd,
          impreciseAnchor: Xd
        } = dd.docView, Kd = dd.state.selection;
        if (dd.state.readOnly && Od > -1) this.newSel = null;
        else if (Od > -1 && (this.bounds = XW(dd.docView.tile, Od, md, 0))) {
          let Od = Rd || Xd ? [] : function(dd) {
              let Od = [];
              if (dd.root.activeElement != dd.contentDOM) return Od;
              let {
                anchorNode: md,
                anchorOffset: Wd,
                focusNode: Fd,
                focusOffset: Rd
              } = dd.observer.selectionRange;
              md && (Od.push(new FW(md, Wd)), Fd == md && Rd == Wd || Od.push(new FW(Fd, Rd)));
              return Od
            }(dd),
            md = new OW(Od, dd);
          md.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = md.text, this.newSel = function(dd, Od) {
            if (0 == dd.length) return null;
            let md = dd[0].pos,
              Fd = 2 == dd.length ? dd[1].pos : md;
            return md > -1 && Fd > -1 ? Wd.j.single(md + Od, Fd + Od) : null
          }(Od, this.bounds.from)
        } else {
          let Od = dd.observer.selectionRange,
            md = Rd && Rd.node == Od.focusNode && Rd.offset == Od.focusOffset || !cd(dd.contentDOM, Od.focusNode) ? Kd.main.head : dd.docView.posFromDOM(Od.focusNode, Od.focusOffset),
            Fd = Xd && Xd.node == Od.anchorNode && Xd.offset == Od.anchorOffset || !cd(dd.contentDOM, Od.anchorNode) ? Kd.main.anchor : dd.docView.posFromDOM(Od.anchorNode, Od.anchorOffset),
            hd = dd.viewport;
          if ((Ed.ios || Ed.chrome) && Kd.main.empty && md != Fd && (hd.from > 0 || hd.to < dd.state.doc.length)) {
            let Od = Math.min(md, Fd),
              Wd = Math.max(md, Fd),
              Rd = hd.from - Od,
              Xd = hd.to - Wd;
            0 != Rd && 1 != Rd && 0 != Od || 0 != Xd && -1 != Xd && Wd != dd.state.doc.length || (md = 0, Fd = dd.state.doc.length)
          }
          if (dd.inputState.composing > -1 && Kd.By.length > 1) this.newSel = Kd.replaceRange(Wd.j.range(Fd, md));
          else if (dd.lineWrapping && Fd == md && (!Kd.main.empty || Kd.main.head != md) && dd.inputState.lastTouchTime > Date.now() - 100) {
            let Od = dd.coordsAtPos(md, -1),
              Fd = 0;
            Od && (Fd = dd.inputState.lastTouchY <= Od.bottom ? -1 : 1), this.newSel = Wd.j.create([Wd.j.cursor(md, Fd)])
          } else this.newSel = Wd.j.single(Fd, md)
        }
      }
    }

    function XW(dd, Od, md, Wd) {
      if (dd.isComposite()) {
        let Fd = -1,
          Rd = -1,
          Xd = -1,
          Kd = -1;
        for (let hd = 0, vd = Wd, Qd = Wd; hd < dd.children.length; hd++) {
          let Wd = dd.children[hd],
            td = vd + Wd.length;
          if (vd < Od && td > md) return XW(Wd, Od, md, vd);
          if (td >= Od && -1 == Fd && (Fd = hd, Rd = vd), vd > md && Wd.dom.parentNode == dd.dom) {
            Xd = hd, Kd = Qd;
            break
          }
          Qd = td, vd = td + Wd.breakAfter
        }
        return {
          from: Rd,
          to: Kd < 0 ? Wd + dd.length : Kd,
          startDOM: (Fd ? dd.children[Fd - 1].dom.nextSibling : null) || dd.dom.firstChild,
          endDOM: Xd < dd.children.length && Xd >= 0 ? dd.children[Xd].dom : null
        }
      }
      return dd.isText() ? {
        from: Wd,
        to: Wd + dd.length,
        startDOM: dd.dom,
        endDOM: dd.dom.nextSibling
      } : null
    }

    function KW(dd, Od) {
      let md, {
          newSel: Fd
        } = Od,
        {
          state: Rd
        } = dd,
        Xd = Rd.selection.main,
        Kd = dd.inputState.lastKeyTime > Date.now() - 100 ? dd.inputState.lastKeyCode : -1;
      if (Od.bounds) {
        let {
          from: dd,
          to: Fd
        } = Od.bounds, hd = Xd.from, vd = null;
        (8 === Kd || Ed.android && Od.text.length < Fd - dd) && (hd = Xd.to, vd = "end");
        let Qd, td, od = Rd.doc.sliceString(dd, Fd, dW);
        !Xd.empty && Xd.from >= dd && Xd.to <= Fd && (Od.typeOver || od != Od.text) && od.slice(0, Xd.from - dd) == Od.text.slice(0, Xd.from - dd) && od.slice(Xd.to - dd) == Od.text.slice(Qd = Od.text.length - (od.length - (Xd.to - dd))) ? md = {
          from: Xd.from,
          to: Xd.to,
          insert: Wd.N.of(Od.text.slice(Xd.from - dd, Qd).split(dW))
        } : (td = vW(od, Od.text, hd - dd, vd)) && (Ed.chrome && 13 == Kd && td.toB == td.from + 2 && Od.text.slice(td.from, td.toB) == dW + dW && td.toB--, md = {
          from: dd + td.from,
          to: dd + td.toA,
          insert: Wd.N.of(Od.text.slice(td.from, td.toB).split(dW))
        })
      } else Fd && (!dd.hasFocus && Rd.facet(CO) || QW(Fd, Xd)) && (Fd = null);
      if (!md && !Fd) return !1;
      if ((Ed.mac || Ed.android) && md && md.from == md.to && md.from == Xd.head - 1 && /^\. ?$/.test(md.insert.toString()) && "off" == dd.contentDOM.getAttribute("autocorrect") ? (Fd && 2 == md.insert.length && (Fd = Wd.j.single(Fd.main.anchor - 1, Fd.main.head - 1)), md = {
          from: md.from,
          to: md.to,
          insert: Wd.N.of([md.insert.toString().replace(".", " ")])
        }) : Rd.doc.lineAt(Xd.from).to < Xd.to && dd.docView.lineHasWidget(Xd.to) && dd.inputState.insertingTextAt > Date.now() - 50 ? md = {
          from: Xd.from,
          to: Xd.to,
          insert: Rd.toText(dd.inputState.insertingText)
        } : Ed.chrome && md && md.from == md.to && md.from == Xd.head && "\n " == md.insert.toString() && dd.lineWrapping && (Fd && (Fd = Wd.j.single(Fd.main.anchor - 1, Fd.main.head - 1)), md = {
          from: Xd.from,
          to: Xd.to,
          insert: Wd.N.of([" "])
        }), md) return hW(dd, md, Fd, Kd);
      if (Fd && !QW(Fd, Xd)) {
        let Od = !1,
          md = "select";
        return dd.inputState.lastSelectionTime > Date.now() - 50 && ("select" == dd.inputState.lastSelectionOrigin && (Od = !0), md = dd.inputState.lastSelectionOrigin, "select.pointer" == md && (Fd = Cm(Rd.facet(Rm).map((Od => Od(dd))), Fd))), dd.dispatch({
          selection: Fd,
          scrollIntoView: Od,
          userEvent: md
        }), !0
      }
      return !1
    }

    function hW(dd, Od, md) {
      let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Ed.ios && dd.inputState.flushIOSKey(Od)) return !0;
      let Rd = dd.state.selection.main;
      if (Ed.android && (Od.to == Rd.to && (Od.from == Rd.from || Od.from == Rd.from - 1 && " " == dd.state.sliceDoc(Od.from, Rd.from)) && 1 == Od.insert.length && 2 == Od.insert.lines && XO(dd.contentDOM, "Enter", 13) || (Od.from == Rd.from - 1 && Od.to == Rd.to && 0 == Od.insert.length || 8 == Fd && Od.insert.length < Od.to - Od.from && Od.to > Rd.head) && XO(dd.contentDOM, "Backspace", 8) || Od.from == Rd.from && Od.to == Rd.to + 1 && 0 == Od.insert.length && XO(dd.contentDOM, "Delete", 46))) return !0;
      let Xd, Kd = Od.insert.toString();
      dd.inputState.composing >= 0 && dd.inputState.composing++;
      let hd = () => Xd || (Xd = function(dd, Od, md) {
        let Fd, Rd = dd.state,
          Xd = Rd.selection.main,
          Kd = -1;
        if (Od.from == Od.to && Od.from < Xd.from || Od.from > Xd.to) {
          let md = Od.from < Xd.from ? -1 : 1,
            Wd = md < 0 ? Xd.from : Xd.to,
            Fd = lm(Rd.facet(Rm).map((Od => Od(dd))), Wd, md);
          Od.from == Fd && (Kd = Fd)
        }
        if (Kd > -1) Fd = {
          changes: Od,
          selection: Wd.j.cursor(Od.from + Od.insert.length, -1)
        };
        else if (Od.from >= Xd.from && Od.to <= Xd.to && Od.to - Od.from >= (Xd.to - Xd.from) / 3 && (!md || md.main.empty && md.main.from == Od.from + Od.insert.length) && dd.inputState.composing < 0) {
          let md = Xd.from < Od.from ? Rd.sliceDoc(Xd.from, Od.from) : "",
            Wd = Xd.to > Od.to ? Rd.sliceDoc(Od.to, Xd.to) : "";
          Fd = Rd.replaceSelection(dd.state.toText(md + Od.insert.sliceString(0, void 0, dd.state.lineBreak) + Wd))
        } else {
          let Kd = Rd.changes(Od),
            hd = md && md.main.to <= Kd.newLength ? md.main : void 0;
          if (Rd.selection.By.length > 1 && (dd.inputState.composing >= 0 || dd.inputState.compositionPendingChange) && Od.to <= Xd.to + 10 && Od.to >= Xd.to - 10) {
            let vd, Qd = dd.state.sliceDoc(Od.from, Od.to),
              td = md && zm(dd, md.main.head);
            if (td) {
              let dd = Od.insert.length - (Od.to - Od.from);
              vd = {
                from: td.from,
                to: td.to - dd
              }
            } else vd = dd.state.doc.lineAt(Xd.head);
            let od = Xd.to - Od.to;
            Fd = Rd.changeByRange((md => {
              if (md.from == Xd.from && md.to == Xd.to) return {
                changes: Kd,
                range: hd || md.map(Kd)
              };
              let Fd = md.to - od,
                td = Fd - Qd.length;
              if (dd.state.sliceDoc(td, Fd) != Qd || Fd >= vd.from && td <= vd.to) return {
                range: md
              };
              let Nd = Rd.changes({
                  from: td,
                  to: Fd,
                  insert: Od.insert
                }),
                qd = md.to - Xd.to;
              return {
                changes: Nd,
                range: hd ? Wd.j.range(Math.max(0, hd.anchor + qd), Math.max(0, hd.head + qd)) : md.map(Nd)
              }
            }))
          } else Fd = {
            changes: Kd,
            selection: hd && Rd.selection.replaceRange(hd)
          }
        }
        let hd = "input.type";
        (dd.composing || dd.inputState.compositionPendingChange && dd.inputState.compositionEndedAt > Date.now() - 50) && (dd.inputState.compositionPendingChange = !1, hd += ".compose", dd.inputState.compositionFirstChange && (hd += ".start", dd.inputState.compositionFirstChange = !1));
        return Rd.update(Fd, {
          userEvent: hd,
          scrollIntoView: !0
        })
      }(dd, Od, md));
      return dd.state.facet(GO).some((md => md(dd, Od.from, Od.to, Kd, hd))) || dd.dispatch(hd()), !0
    }

    function vW(dd, Od, md, Wd) {
      let Fd = Math.min(dd.length, Od.length),
        Rd = 0;
      for (; Rd < Fd && dd.charCodeAt(Rd) == Od.charCodeAt(Rd);) Rd++;
      if (Rd == Fd && dd.length == Od.length) return null;
      let Xd = dd.length,
        Kd = Od.length;
      for (; Xd > 0 && Kd > 0 && dd.charCodeAt(Xd - 1) == Od.charCodeAt(Kd - 1);) Xd--, Kd--;
      if ("end" == Wd) {
        md -= Xd + Math.max(0, Rd - Math.min(Xd, Kd)) - Rd
      }
      if (Xd < Rd && dd.length < Od.length) {
        Rd -= md <= Rd && md >= Xd ? Rd - md : 0, Kd = Rd + (Kd - Xd), Xd = Rd
      } else if (Kd < Rd) {
        Rd -= md <= Rd && md >= Kd ? Rd - md : 0, Xd = Rd + (Xd - Kd), Kd = Rd
      }
      return {
        from: Rd,
        toA: Xd,
        toB: Kd
      }
    }

    function QW(dd, Od) {
      return Od.head == dd.main.head && Od.anchor == dd.main.anchor
    }
    class tW {
      setSelectionOrigin(dd) {
        this.lastSelectionOrigin = dd, this.lastSelectionTime = Date.now()
      }
      constructor(dd) {
        this.view = dd, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = dd.hasFocus, Ed.safari && dd.contentDOM.addEventListener("input", (() => null)), Ed.gecko && function(dd) {
          rW.has(dd) || (rW.add(dd), dd.addEventListener("copy", (() => {})), dd.addEventListener("cut", (() => {})))
        }(dd.contentDOM.ownerDocument)
      }
      handleEvent(dd) {
        (function(dd, Od) {
          if (!Od.bubbles) return !0;
          if (Od.defaultPrevented) return !1;
          for (let md, Wd = Od.target; Wd != dd.contentDOM; Wd = Wd.parentNode)
            if (!Wd || 11 == Wd.nodeType || (md = Hm.get(Wd)) && md.isWidget() && !md.isHidden && md.widget.ignoreEvent(Od)) return !1;
          return !0
        })(this.view, dd) && !this.ignoreDuringComposition(dd) && ("keydown" == dd.type && this.keydown(dd) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(dd.type, dd))) : this.runHandlers(dd.type, dd)))
      }
      runHandlers(dd, Od) {
        let md = this.handlers[dd];
        if (md) {
          for (let dd of md.observers) dd(this.view, Od);
          for (let dd of md.handlers) {
            if (Od.defaultPrevented) break;
            if (dd(this.view, Od)) {
              Od.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(dd) {
        let Od = NW(dd),
          md = this.handlers,
          Wd = this.view.contentDOM;
        for (let Fd in Od)
          if ("scroll" != Fd) {
            let dd = !Od[Fd].handlers.length,
              Rd = md[Fd];
            Rd && dd != !Rd.handlers.length && (Wd.removeEventListener(Fd, this.handleEvent), Rd = null), Rd || Wd.addEventListener(Fd, this.handleEvent, {
              passive: dd
            })
          } for (let Fd in md) "scroll" == Fd || Od[Fd] || Wd.removeEventListener(Fd, this.handleEvent);
        this.handlers = Od
      }
      keydown(dd) {
        if (this.lastKeyCode = dd.keyCode, this.lastKeyTime = Date.now(), 9 == dd.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != dd.keyCode && yW.indexOf(dd.keyCode) < 0 && (this.tabFocusMode = -1), Ed.android && Ed.chrome && !dd.synthetic && (13 == dd.keyCode || 8 == dd.keyCode)) return this.view.observer.delayAndroidKey(dd.key, dd.keyCode), !0;
        let Od;
        return !Ed.ios || dd.synthetic || dd.altKey || dd.metaKey || dd.shiftKey || !((Od = qW.find((Od => Od.keyCode == dd.keyCode))) && !dd.ctrlKey || HW.indexOf(dd.key) > -1 && dd.ctrlKey) ? (229 != dd.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Od || dd, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(dd) {
        let Od = this.pendingIOSKey;
        return !!Od && (!("Enter" == Od.key && dd && dd.from < dd.to && /^\S+$/.test(dd.insert.toString())) && (this.pendingIOSKey = void 0, XO(this.view.contentDOM, Od.key, Od.keyCode, Od instanceof KeyboardEvent ? Od : void 0)))
      }
      ignoreDuringComposition(dd) {
        return !(!/^key/.test(dd.type) || dd.synthetic) && (this.composing > 0 || !!(Ed.safari && !Ed.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function oW(dd, Od) {
      return (md, Wd) => {
        try {
          return Od.call(dd, Wd, md)
        } catch (Fd) {
          lO(md.state, Fd)
        }
      }
    }

    function NW(dd) {
      let Od = Object.create(null);

      function md(dd) {
        return Od[dd] || (Od[dd] = {
          observers: [],
          handlers: []
        })
      }
      for (let Wd of dd) {
        let dd = Wd.spec,
          Od = dd && dd.plugin.domEventHandlers,
          Fd = dd && dd.plugin.domEventObservers;
        if (Od)
          for (let Rd in Od) {
            let dd = Od[Rd];
            dd && md(Rd).handlers.push(oW(Wd.value, dd))
          }
        if (Fd)
          for (let Rd in Fd) {
            let dd = Fd[Rd];
            dd && md(Rd).observers.push(oW(Wd.value, dd))
          }
      }
      for (let Wd in pW) md(Wd).handlers.push(pW[Wd]);
      for (let Wd in YW) md(Wd).observers.push(YW[Wd]);
      return Od
    }
    const qW = [{
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
      HW = "dthko",
      yW = [16, 17, 18, 20, 91, 92, 224, 225];

    function bW(dd) {
      return .7 * Math.max(0, dd) + 8
    }
    class TW {
      constructor(dd, Od, md, Fd) {
        this.view = dd, this.startEvent = Od, this.style = md, this.mustSelect = Fd, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Od, this.scrollParents = dO(dd.contentDOM), this.atoms = dd.state.facet(Rm).map((Od => Od(dd)));
        let Rd = dd.contentDOM.ownerDocument;
        Rd.addEventListener("mousemove", this.move = this.move.bind(this)), Rd.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Od.shiftKey, this.multiple = dd.state.facet(Wd.m.allowMultipleSelections) && function(dd, Od) {
          let md = dd.state.facet(uO);
          return md.length ? md[0](Od) : Ed.mac ? Od.metaKey : Od.ctrlKey
        }(dd, Od), this.dragging = !(! function(dd, Od) {
          let {
            main: md
          } = dd.state.selection;
          if (md.empty) return !1;
          let Wd = zd(dd.root);
          if (!Wd || 0 == Wd.rangeCount) return !0;
          let Fd = Wd.getRangeAt(0).getClientRects();
          for (let Rd = 0; Rd < Fd.length; Rd++) {
            let dd = Fd[Rd];
            if (dd.left <= Od.clientX && dd.right >= Od.clientX && dd.top <= Od.clientY && dd.bottom >= Od.clientY) return !0
          }
          return !1
        }(dd, Od) || 1 != SW(Od)) && null
      }
      start(dd) {
        !1 === this.dragging && this.select(dd)
      }
      move(dd) {
        if (0 == dd.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Od = this.startEvent, md = dd, Math.max(Math.abs(Od.clientX - md.clientX), Math.abs(Od.clientY - md.clientY)) < 10)) return;
        var Od, md;
        this.select(this.lastEvent = dd);
        let Wd = 0,
          Fd = 0,
          Rd = 0,
          Xd = 0,
          Kd = this.view.win.innerWidth,
          hd = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Rd,
          right: Kd
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Xd,
          bottom: hd
        } = this.scrollParents.y.getBoundingClientRect());
        let vd = Qm(this.view);
        dd.clientX - vd.left <= Rd + 6 ? Wd = -bW(Rd - dd.clientX) : dd.clientX + vd.right >= Kd - 6 && (Wd = bW(dd.clientX - Kd)), dd.clientY - vd.top <= Xd + 6 ? Fd = -bW(Xd - dd.clientY) : dd.clientY + vd.bottom >= hd - 6 && (Fd = bW(dd.clientY - hd)), this.setScrollSpeed(Wd, Fd)
      }
      up(dd) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || dd.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let dd = this.view.contentDOM.ownerDocument;
        dd.removeEventListener("mousemove", this.move), dd.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(dd, Od) {
        this.scrollSpeed = {
          x: dd,
          y: Od
        }, dd || Od ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: dd,
          y: Od
        } = this.scrollSpeed;
        dd && this.scrollParents.x && (this.scrollParents.x.scrollLeft += dd, dd = 0), Od && this.scrollParents.y && (this.scrollParents.y.scrollTop += Od, Od = 0), (dd || Od) && this.view.win.scrollBy(dd, Od), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(dd) {
        let {
          view: Od
        } = this, md = Cm(this.atoms, this.style.get(dd, this.extend, this.multiple));
        !this.mustSelect && md.eq(Od.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: md,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(dd) {
        dd.transactions.some((dd => dd.isUserEvent("input.type"))) ? this.destroy() : this.style.update(dd) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const pW = Object.create(null),
      YW = Object.create(null),
      gW = Ed.ie && Ed.ie_version < 15 || Ed.ios && Ed.webkit_version < 604;

    function wW(dd, Od, md) {
      for (let Wd of dd.facet(Od)) md = Wd(md, dd);
      return md
    }

    function aW(dd, Od) {
      Od = wW(dd.state, LO, Od);
      let md, {
          state: Fd
        } = dd,
        Rd = 1,
        Xd = Fd.toText(Od),
        Kd = Xd.lines == Fd.selection.By.length;
      if (null != uW && Fd.selection.By.every((dd => dd.empty)) && uW == Xd.toString()) {
        let dd = -1;
        md = Fd.changeByRange((md => {
          let hd = Fd.doc.lineAt(md.from);
          if (hd.from == dd) return {
            range: md
          };
          dd = hd.from;
          let vd = Fd.toText((Kd ? Xd.line(Rd++).text : Od) + Fd.lineBreak);
          return {
            changes: {
              from: hd.from,
              insert: vd
            },
            range: Wd.j.cursor(md.from + vd.length)
          }
        }))
      } else md = Kd ? Fd.changeByRange((dd => {
        let Od = Xd.line(Rd++);
        return {
          changes: {
            from: dd.from,
            to: dd.to,
            insert: Od.text
          },
          range: Wd.j.cursor(dd.from + Od.length)
        }
      })) : Fd.replaceSelection(Xd);
      dd.dispatch(md, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function EW(dd, Od, md, Fd) {
      if (1 == Fd) return Wd.j.cursor(Od, md);
      if (2 == Fd) return function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Fd = dd.charCategorizer(Od),
          Rd = dd.doc.lineAt(Od),
          Xd = Od - Rd.from;
        if (0 == Rd.length) return Wd.j.cursor(Od);
        0 == Xd ? md = 1 : Xd == Rd.length && (md = -1);
        let Kd = Xd,
          hd = Xd;
        md < 0 ? Kd = (0, Wd.ab)(Rd.text, Xd, !1) : hd = (0, Wd.ab)(Rd.text, Xd);
        let vd = Fd(Rd.text.slice(Kd, hd));
        for (; Kd > 0;) {
          let dd = (0, Wd.ab)(Rd.text, Kd, !1);
          if (Fd(Rd.text.slice(dd, Kd)) != vd) break;
          Kd = dd
        }
        for (; hd < Rd.length;) {
          let dd = (0, Wd.ab)(Rd.text, hd);
          if (Fd(Rd.text.slice(hd, dd)) != vd) break;
          hd = dd
        }
        return Wd.j.range(Kd + Rd.from, hd + Rd.from)
      }(dd.state, Od, md);
      {
        let Fd = dd.docView.lineAt(Od, md),
          Rd = dd.state.doc.lineAt(Fd ? Fd.posAtEnd : Od),
          Xd = Fd ? Fd.posAtStart : Rd.from,
          Kd = Fd ? Fd.posAtEnd : Rd.to;
        return Kd < dd.state.doc.length && Kd == Rd.to && Kd++, Wd.j.range(Xd, Kd)
      }
    }
    YW.scroll = dd => {
      dd.inputState.lastScrollTop = dd.scrollDOM.scrollTop, dd.inputState.lastScrollLeft = dd.scrollDOM.scrollLeft
    }, YW.wheel = YW.mousewheel = dd => {
      dd.inputState.lastWheelEvent = Date.now()
    }, pW.keydown = (dd, Od) => (dd.inputState.setSelectionOrigin("select"), 27 == Od.keyCode && 0 != dd.inputState.tabFocusMode && (dd.inputState.tabFocusMode = Date.now() + 2e3), !1), YW.touchstart = (dd, Od) => {
      let md = dd.inputState,
        Wd = Od.targetTouches[0];
      md.lastTouchTime = Date.now(), Wd && (md.lastTouchX = Wd.clientX, md.lastTouchY = Wd.clientY), md.setSelectionOrigin("select.pointer")
    }, YW.touchmove = dd => {
      dd.inputState.setSelectionOrigin("select.pointer")
    }, pW.mousedown = (dd, Od) => {
      if (dd.observer.flush(), dd.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let md = null;
      for (let Wd of dd.state.facet(iO))
        if (md = Wd(dd, Od), md) break;
      if (md || 0 != Od.button || (md = function(dd, Od) {
          let md = dd.posAndSideAtCoords({
              x: Od.clientX,
              y: Od.clientY
            }, !1),
            Fd = SW(Od),
            Rd = dd.state.selection;
          return {
            update(dd) {
              dd.docChanged && (md.pos = dd.changes.mapPos(md.pos), Rd = Rd.map(dd.changes))
            },
            get(Od, Xd, Kd) {
              let hd, vd = dd.posAndSideAtCoords({
                  x: Od.clientX,
                  y: Od.clientY
                }, !1),
                Qd = EW(dd, vd.pos, vd.assoc, Fd);
              if (md.pos != vd.pos && !Xd) {
                let Od = EW(dd, md.pos, md.assoc, Fd),
                  Rd = Math.min(Od.from, Qd.from),
                  Xd = Math.max(Od.to, Qd.to);
                Qd = Rd < Qd.from ? Wd.j.range(Rd, Xd, Qd.assoc) : Wd.j.range(Xd, Rd, Qd.assoc)
              }
              return Xd ? Rd.replaceRange(Rd.main.extend(Qd.from, Qd.to, Qd.assoc)) : Kd && 1 == Fd && Rd.By.length > 1 && (hd = function(dd, Od) {
                for (let md = 0; md < dd.By.length; md++) {
                  let {
                    from: Fd,
                    to: Rd
                  } = dd.By[md];
                  if (Fd <= Od && Rd >= Od) return Wd.j.create(dd.By.slice(0, md).concat(dd.By.slice(md + 1)), dd.mainIndex == md ? 0 : dd.mainIndex - (dd.mainIndex > md ? 1 : 0))
                }
                return null
              }(Rd, vd.pos)) ? hd : Kd ? Rd.addRange(Qd) : Wd.j.create([Qd])
            }
          }
        }(dd, Od)), md) {
        let Wd = !dd.hasFocus;
        dd.inputState.startMouseSelection(new TW(dd, Od, md, Wd)), Wd && dd.observer.ignore((() => {
          FO(dd.contentDOM);
          let Od = dd.root.activeElement;
          Od && !Od.contains(dd.contentDOM) && Od.blur()
        }));
        let Fd = dd.inputState.mouseSelection;
        if (Fd) return Fd.start(Od), !1 === Fd.dragging
      } else dd.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const JW = Ed.ie && Ed.ie_version <= 11;
    let UW = null,
      xW = 0,
      BW = 0;

    function SW(dd) {
      if (!JW) return dd.detail;
      let Od = UW,
        md = BW;
      return UW = dd, BW = Date.now(), xW = !Od || md > Date.now() - 400 && Math.abs(Od.clientX - dd.clientX) < 2 && Math.abs(Od.clientY - dd.clientY) < 2 ? (xW + 1) % 3 : 1
    }

    function sW(dd, Od, md, Wd) {
      if (!(md = wW(dd.state, LO, md))) return;
      let Fd = dd.posAtCoords({
          x: Od.clientX,
          y: Od.clientY
        }, !1),
        {
          draggedContent: Rd
        } = dd.inputState,
        Xd = Wd && Rd && function(dd, Od) {
          let md = dd.state.facet(VO);
          return md.length ? md[0](Od) : Ed.mac ? !Od.altKey : !Od.ctrlKey
        }(dd, Od) ? {
          from: Rd.from,
          to: Rd.to
        } : null,
        Kd = {
          from: Fd,
          insert: md
        },
        hd = dd.state.changes(Xd ? [Xd, Kd] : Kd);
      dd.focus(), dd.dispatch({
        changes: hd,
        selection: {
          anchor: hd.mapPos(Fd, -1),
          head: hd.mapPos(Fd, 1)
        },
        userEvent: Xd ? "move.drop" : "input.drop"
      }), dd.inputState.draggedContent = null
    }
    pW.dragstart = (dd, Od) => {
      let {
        selection: {
          main: md
        }
      } = dd.state;
      if (Od.target.draggable) {
        let Fd = dd.docView.tile.nearest(Od.target);
        if (Fd && Fd.isWidget()) {
          let dd = Fd.posAtStart,
            Od = dd + Fd.length;
          (dd >= md.to || Od <= md.from) && (md = Wd.j.range(dd, Od))
        }
      }
      let {
        inputState: Fd
      } = dd;
      return Fd.mouseSelection && (Fd.mouseSelection.dragging = !0), Fd.draggedContent = md, Od.dataTransfer && (Od.dataTransfer.setData("Text", wW(dd.state, PO, dd.state.sliceDoc(md.from, md.to))), Od.dataTransfer.effectAllowed = "copyMove"), !1
    }, pW.dragend = dd => (dd.inputState.draggedContent = null, !1), pW.drop = (dd, Od) => {
      if (!Od.dataTransfer) return !1;
      if (dd.state.readOnly) return !0;
      let md = Od.dataTransfer.files;
      if (md && md.length) {
        let Wd = Array(md.length),
          Fd = 0,
          Rd = () => {
            ++Fd == md.length && sW(dd, Od, Wd.filter((dd => null != dd)).join(dd.state.lineBreak), !1)
          };
        for (let dd = 0; dd < md.length; dd++) {
          let Od = new FileReader;
          Od.onerror = Rd, Od.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Od.result) || (Wd[dd] = Od.result), Rd()
          }, Od.readAsText(md[dd])
        }
        return !0
      } {
        let md = Od.dataTransfer.getData("Text");
        if (md) return sW(dd, Od, md, !0), !0
      }
      return !1
    }, pW.paste = (dd, Od) => {
      if (dd.state.readOnly) return !0;
      dd.observer.flush();
      let md = gW ? null : Od.clipboardData;
      return md ? (aW(dd, md.getData("text/plain") || md.getData("text/uri-list")), !0) : (function(dd) {
        let Od = dd.dom.parentNode;
        if (!Od) return;
        let md = Od.appendChild(document.createElement("textarea"));
        md.style.cssText = "position: fixed; left: -10000px; top: 10px", md.focus(), setTimeout((() => {
          dd.focus(), md.remove(), aW(dd, md.value)
        }), 50)
      }(dd), !1)
    };
    let uW = null;
    pW.copy = pW.cut = (dd, Od) => {
      if (!jd(dd.contentDOM, dd.observer.selectionRange)) return !1;
      let {
        text: md,
        By: Wd,
        linewise: Fd
      } = function(dd) {
        let Od = [],
          md = [],
          Wd = !1;
        for (let Fd of dd.selection.By) Fd.empty || (Od.push(dd.sliceDoc(Fd.from, Fd.to)), md.push(Fd));
        if (!Od.length) {
          let Fd = -1;
          for (let {
              from: Wd
            }
            of dd.selection.By) {
            let Rd = dd.doc.lineAt(Wd);
            Rd.number > Fd && (Od.push(Rd.text), md.push({
              from: Rd.from,
              to: Math.min(dd.doc.length, Rd.to + 1)
            })), Fd = Rd.number
          }
          Wd = !0
        }
        return {
          text: wW(dd, PO, Od.join(dd.lineBreak)),
          By: md,
          linewise: Wd
        }
      }(dd.state);
      if (!md && !Fd) return !1;
      uW = Fd ? md : null, "cut" != Od.type || dd.state.readOnly || dd.dispatch({
        changes: Wd,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Rd = gW ? null : Od.clipboardData;
      return Rd ? (Rd.clearData(), Rd.setData("text/plain", md), !0) : (function(dd, Od) {
        let md = dd.dom.parentNode;
        if (!md) return;
        let Wd = md.appendChild(document.createElement("textarea"));
        Wd.style.cssText = "position: fixed; left: -10000px; top: 10px", Wd.value = Od, Wd.focus(), Wd.selectionEnd = Od.length, Wd.selectionStart = 0, setTimeout((() => {
          Wd.remove(), dd.focus()
        }), 50)
      }(dd, md), !1)
    };
    const VW = Wd.c.define();

    function iW(dd, Od) {
      let md = [];
      for (let Wd of dd.facet(nO)) {
        let Fd = Wd(dd, Od);
        Fd && md.push(Fd)
      }
      return md.length ? dd.update({
        effects: md,
        annotations: VW.of(!0)
      }) : null
    }

    function AW(dd) {
      setTimeout((() => {
        let Od = dd.hasFocus;
        if (Od != dd.inputState.notifiedFocused) {
          let md = iW(dd.state, Od);
          md ? dd.dispatch(md) : dd.update([])
        }
      }), 10)
    }
    YW.focus = dd => {
      dd.inputState.lastFocusTime = Date.now(), dd.scrollDOM.scrollTop || !dd.inputState.lastScrollTop && !dd.inputState.lastScrollLeft || (dd.scrollDOM.scrollTop = dd.inputState.lastScrollTop, dd.scrollDOM.scrollLeft = dd.inputState.lastScrollLeft), AW(dd)
    }, YW.blur = dd => {
      dd.observer.clearSelectionRange(), AW(dd)
    }, YW.compositionstart = YW.compositionupdate = dd => {
      dd.observer.editContext || (null == dd.inputState.compositionFirstChange && (dd.inputState.compositionFirstChange = !0), dd.inputState.composing < 0 && (dd.inputState.composing = 0))
    }, YW.compositionend = dd => {
      dd.observer.editContext || (dd.inputState.composing = -1, dd.inputState.compositionEndedAt = Date.now(), dd.inputState.compositionPendingKey = !0, dd.inputState.compositionPendingChange = dd.observer.pendingRecords().length > 0, dd.inputState.compositionFirstChange = null, Ed.chrome && Ed.android ? dd.observer.flushSoon() : dd.inputState.compositionPendingChange ? Promise.resolve().then((() => dd.observer.flush())) : setTimeout((() => {
        dd.inputState.composing < 0 && dd.docView.hasComposition && dd.update([])
      }), 50))
    }, YW.contextmenu = dd => {
      dd.inputState.lastContextMenu = Date.now()
    }, pW.beforeinput = (dd, Od) => {
      var md, Wd;
      if ("insertText" != Od.inputType && "insertCompositionText" != Od.inputType || (dd.inputState.insertingText = Od.data, dd.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Od.inputType && dd.observer.editContext) {
        let Wd = null === (md = Od.dataTransfer) || void 0 === md ? void 0 : md.getData("text/plain"),
          Fd = Od.getTargetRanges();
        if (Wd && Fd.length) {
          let Od = Fd[0],
            md = dd.posAtDOM(Od.startContainer, Od.startOffset),
            Rd = dd.posAtDOM(Od.endContainer, Od.endOffset);
          return hW(dd, {
            from: md,
            to: Rd,
            insert: dd.state.toText(Wd)
          }, null), !0
        }
      }
      let Fd;
      if (Ed.chrome && Ed.android && (Fd = qW.find((dd => dd.inputType == Od.inputType))) && (dd.observer.delayAndroidKey(Fd.key, Fd.keyCode), "Backspace" == Fd.key || "Delete" == Fd.key)) {
        let Od = (null === (Wd = window.visualViewport) || void 0 === Wd ? void 0 : Wd.height) || 0;
        setTimeout((() => {
          var md;
          ((null === (md = window.visualViewport) || void 0 === md ? void 0 : md.height) || 0) > Od + 10 && dd.hasFocus && (dd.contentDOM.blur(), dd.focus())
        }), 100)
      }
      return Ed.ios && "deleteContentForward" == Od.inputType && dd.observer.flushSoon(), Ed.safari && "insertText" == Od.inputType && dd.inputState.composing >= 0 && setTimeout((() => YW.compositionend(dd, Od)), 20), !1
    };
    const rW = new Set;
    const GW = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let nW = !1;

    function LW() {
      nW = !1
    }
    class PW {
      constructor(dd) {
        this.lineWrapping = dd, this.doc = Wd.N.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(dd, Od) {
        let md = this.doc.lineAt(Od).number - this.doc.lineAt(dd).number + 1;
        return this.lineWrapping && (md += Math.max(0, Math.ceil((Od - dd - md * this.lineLength * .5) / this.lineLength))), this.lineHeight * md
      }
      heightForLine(dd) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((dd - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(dd) {
        return this.doc = dd, this
      }
      mustRefreshForWrapping(dd) {
        return GW.indexOf(dd) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(dd) {
        let Od = !1;
        for (let md = 0; md < dd.length; md++) {
          let Wd = dd[md];
          Wd < 0 ? md++ : this.heightSamples[Math.floor(10 * Wd)] || (Od = !0, this.heightSamples[Math.floor(10 * Wd)] = !0)
        }
        return Od
      }
      refresh(dd, Od, md, Wd, Fd, Rd) {
        let Xd = GW.indexOf(dd) > -1,
          Kd = Math.abs(Od - this.lineHeight) > .3 || this.lineWrapping != Xd || Math.abs(md - this.charWidth) > .1;
        if (this.lineWrapping = Xd, this.lineHeight = Od, this.charWidth = md, this.textHeight = Wd, this.lineLength = Fd, Kd) {
          this.heightSamples = {};
          for (let dd = 0; dd < Rd.length; dd++) {
            let Od = Rd[dd];
            Od < 0 ? dd++ : this.heightSamples[Math.floor(10 * Od)] = !0
          }
        }
        return Kd
      }
    }
    class zW {
      constructor(dd, Od) {
        this.from = dd, this.heights = Od, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class cW {
      constructor(dd, Od, md, Wd, Fd) {
        this.from = dd, this.length = Od, this.top = md, this.height = Wd, this._content = Fd
      }
      get type() {
        return "number" == typeof this._content ? ud.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Gd ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(dd) {
        let Od = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(dd._content) ? dd._content : [dd]);
        return new cW(this.from, this.length + dd.length, this.top, this.height + dd.height, Od)
      }
    }
    var jW = function(dd) {
      return dd[dd.ByPos = 0] = "ByPos", dd[dd.ByHeight = 1] = "ByHeight", dd[dd.ByPosNoHeight = 2] = "ByPosNoHeight", dd
    }(jW || (jW = {}));
    const DW = .001;
    class eW {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = dd, this.height = Od, this.flags = md
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(dd) {
        this.flags = (dd ? 2 : 0) | -3 & this.flags
      }
      setHeight(dd) {
        this.height != dd && (Math.abs(this.height - dd) > DW && (nW = !0), this.height = dd)
      }
      replace(dd, Od, md) {
        return eW.of(md)
      }
      decomposeLeft(dd, Od) {
        Od.push(this)
      }
      decomposeRight(dd, Od) {
        Od.push(this)
      }
      applyChanges(dd, Od, md, Wd) {
        let Fd = this,
          Rd = md.doc;
        for (let Xd = Wd.length - 1; Xd >= 0; Xd--) {
          let {
            fromA: Kd,
            toA: hd,
            fromB: vd,
            toB: Qd
          } = Wd[Xd], td = Fd.lineAt(Kd, jW.ByPosNoHeight, md.setDoc(Od), 0, 0), od = td.to >= hd ? td : Fd.lineAt(hd, jW.ByPosNoHeight, md, 0, 0);
          for (Qd += od.to - hd, hd = od.to; Xd > 0 && td.from <= Wd[Xd - 1].toA;) Kd = Wd[Xd - 1].fromA, vd = Wd[Xd - 1].fromB, Xd--, Kd < td.from && (td = Fd.lineAt(Kd, jW.ByPosNoHeight, md, 0, 0));
          vd += td.from - Kd, Kd = td.from;
          let Nd = dF.build(md.setDoc(Rd), dd, vd, Qd);
          Fd = IW(Fd, Fd.replace(Kd, hd, Nd))
        }
        return Fd.updateHeight(md, 0)
      }
      static empty() {
        return new ZW(0, 0, 0)
      }
      static of (dd) {
        if (1 == dd.length) return dd[0];
        let Od = 0,
          md = dd.length,
          Wd = 0,
          Fd = 0;
        for (;;)
          if (Od == md)
            if (Wd > 2 * Fd) {
              let Fd = dd[Od - 1];
              Fd.break ? dd.splice(--Od, 1, Fd.left, null, Fd.right) : dd.splice(--Od, 1, Fd.left, Fd.right), md += 1 + Fd.break, Wd -= Fd.size
            } else {
              if (!(Fd > 2 * Wd)) break;
              {
                let Od = dd[md];
                Od.break ? dd.splice(md, 1, Od.left, null, Od.right) : dd.splice(md, 1, Od.left, Od.right), md += 2 + Od.break, Fd -= Od.size
              }
            }
        else if (Wd < Fd) {
          let md = dd[Od++];
          md && (Wd += md.size)
        } else {
          let Od = dd[--md];
          Od && (Fd += Od.size)
        }
        let Rd = 0;
        return null == dd[Od - 1] ? (Rd = 1, Od--) : null == dd[Od] && (Rd = 1, md++), new fW(eW.of(dd.slice(0, Od)), Rd, eW.of(dd.slice(md)))
      }
    }

    function IW(dd, Od) {
      return dd == Od ? dd : (dd.constructor != Od.constructor && (nW = !0), Od)
    }
    eW.prototype.size = 1;
    const lW = Vd.replace({});
    class CW extends eW {
      constructor(dd, Od, md) {
        super(dd, Od), this.deco = md, this.spaceAbove = 0
      }
      mainBlock(dd, Od) {
        return new cW(Od, this.length, dd + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(dd, Od, md, Wd) {
        return this.spaceAbove && dd < md + this.spaceAbove ? new cW(Wd, 0, md, this.spaceAbove, lW) : this.mainBlock(md, Wd)
      }
      lineAt(dd, Od, md, Wd, Fd) {
        let Rd = this.mainBlock(Wd, Fd);
        return this.spaceAbove ? this.blockAt(0, md, Wd, Fd).join(Rd) : Rd
      }
      forEachLine(dd, Od, md, Wd, Fd, Rd) {
        dd <= Fd + this.length && Od >= Fd && Rd(this.lineAt(0, jW.ByPos, md, Wd, Fd))
      }
      setMeasuredHeight(dd) {
        let Od = dd.heights[dd.index++];
        Od < 0 ? (this.spaceAbove = -Od, Od = dd.heights[dd.index++]) : this.spaceAbove = 0, this.setHeight(Od)
      }
      updateHeight(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 3 ? arguments[3] : void 0;
        return md && md.from <= Od && md.more && this.setMeasuredHeight(md), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class ZW extends CW {
      constructor(dd, Od, md) {
        super(dd, Od, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = md
      }
      mainBlock(dd, Od) {
        return new cW(Od, this.length, dd + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(dd, Od, md) {
        let Wd = md[0];
        return 1 == md.length && (Wd instanceof ZW || Wd instanceof kW && 4 & Wd.flags) && Math.abs(this.length - Wd.length) < 10 ? (Wd instanceof kW ? Wd = new ZW(Wd.length, this.height, this.spaceAbove) : Wd.height = this.height, this.outdated || (Wd.outdated = !1), Wd) : eW.of(md)
      }
      updateHeight(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        return Wd && Wd.from <= Od && Wd.more ? this.setMeasuredHeight(Wd) : (md || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, dd.heightForLine(this.length - this.collapsed)) + this.breaks * dd.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class kW extends eW {
      constructor(dd) {
        super(dd, 0)
      }
      heightMetrics(dd, Od) {
        let md, Wd = dd.doc.lineAt(Od).number,
          Fd = dd.doc.lineAt(Od + this.length).number,
          Rd = Fd - Wd + 1,
          Xd = 0;
        if (dd.lineWrapping) {
          let Od = Math.min(this.height, dd.lineHeight * Rd);
          md = Od / Rd, this.length > Rd + 1 && (Xd = (this.height - Od) / (this.length - Rd - 1))
        } else md = this.height / Rd;
        return {
          firstLine: Wd,
          lastLine: Fd,
          perLine: md,
          perChar: Xd
        }
      }
      blockAt(dd, Od, md, Wd) {
        let {
          firstLine: Fd,
          lastLine: Rd,
          perLine: Xd,
          perChar: Kd
        } = this.heightMetrics(Od, Wd);
        if (Od.lineWrapping) {
          let Fd = Wd + (dd < Od.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (dd - md) / this.height)) * this.length)),
            Rd = Od.doc.lineAt(Fd),
            hd = Xd + Rd.length * Kd,
            vd = Math.max(md, dd - hd / 2);
          return new cW(Rd.from, Rd.length, vd, hd, 0)
        } {
          let Wd = Math.max(0, Math.min(Rd - Fd, Math.floor((dd - md) / Xd))),
            {
              from: Kd,
              length: hd
            } = Od.doc.line(Fd + Wd);
          return new cW(Kd, hd, md + Xd * Wd, Xd, 0)
        }
      }
      lineAt(dd, Od, md, Wd, Fd) {
        if (Od == jW.ByHeight) return this.blockAt(dd, md, Wd, Fd);
        if (Od == jW.ByPosNoHeight) {
          let {
            from: Od,
            to: Wd
          } = md.doc.lineAt(dd);
          return new cW(Od, Wd - Od, 0, 0, 0)
        }
        let {
          firstLine: Rd,
          perLine: Xd,
          perChar: Kd
        } = this.heightMetrics(md, Fd), hd = md.doc.lineAt(dd), vd = Xd + hd.length * Kd, Qd = hd.number - Rd, td = Wd + Xd * Qd + Kd * (hd.from - Fd - Qd);
        return new cW(hd.from, hd.length, Math.max(Wd, Math.min(td, Wd + this.height - vd)), vd, 0)
      }
      forEachLine(dd, Od, md, Wd, Fd, Rd) {
        dd = Math.max(dd, Fd), Od = Math.min(Od, Fd + this.length);
        let {
          firstLine: Xd,
          perLine: Kd,
          perChar: hd
        } = this.heightMetrics(md, Fd);
        for (let vd = dd, Qd = Wd; vd <= Od;) {
          let Od = md.doc.lineAt(vd);
          if (vd == dd) {
            let md = Od.number - Xd;
            Qd += Kd * md + hd * (dd - Fd - md)
          }
          let Wd = Kd + hd * Od.length;
          Rd(new cW(Od.from, Od.length, Qd, Wd, 0)), Qd += Wd, vd = Od.to + 1
        }
      }
      replace(dd, Od, md) {
        let Wd = this.length - Od;
        if (Wd > 0) {
          let dd = md[md.length - 1];
          dd instanceof kW ? md[md.length - 1] = new kW(dd.length + Wd) : md.push(null, new kW(Wd - 1))
        }
        if (dd > 0) {
          let Od = md[0];
          Od instanceof kW ? md[0] = new kW(dd + Od.length) : md.unshift(new kW(dd - 1), null)
        }
        return eW.of(md)
      }
      decomposeLeft(dd, Od) {
        Od.push(new kW(dd - 1), null)
      }
      decomposeRight(dd, Od) {
        Od.push(null, new kW(this.length - dd - 1))
      }
      updateHeight(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = Od + this.length;
        if (Wd && Wd.from <= Od + this.length && Wd.more) {
          let md = [],
            Rd = Math.max(Od, Wd.from),
            Xd = -1;
          for (Wd.from > Od && md.push(new kW(Wd.from - Od - 1).updateHeight(dd, Od)); Rd <= Fd && Wd.more;) {
            let Od = dd.doc.lineAt(Rd).length;
            md.length && md.push(null);
            let Fd = Wd.heights[Wd.index++],
              Kd = 0;
            Fd < 0 && (Kd = -Fd, Fd = Wd.heights[Wd.index++]), -1 == Xd ? Xd = Fd : Math.abs(Fd - Xd) >= DW && (Xd = -2);
            let hd = new ZW(Od, Fd, Kd);
            hd.outdated = !1, md.push(hd), Rd += Od + 1
          }
          Rd <= Fd && md.push(null, new kW(Fd - Rd).updateHeight(dd, Rd));
          let Kd = eW.of(md);
          return (Xd < 0 || Math.abs(Kd.height - this.height) >= DW || Math.abs(Xd - this.heightMetrics(dd, Od).perLine) >= DW) && (nW = !0), IW(this, Kd)
        }
        return (md || this.outdated) && (this.setHeight(dd.heightForGap(Od, Od + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class fW extends eW {
      constructor(dd, Od, md) {
        super(dd.length + Od + md.length, dd.height + md.height, Od | (dd.outdated || md.outdated ? 2 : 0)), this.left = dd, this.right = md, this.size = dd.size + md.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(dd, Od, md, Wd) {
        let Fd = md + this.left.height;
        return dd < Fd ? this.left.blockAt(dd, Od, md, Wd) : this.right.blockAt(dd, Od, Fd, Wd + this.left.length + this.break)
      }
      lineAt(dd, Od, md, Wd, Fd) {
        let Rd = Wd + this.left.height,
          Xd = Fd + this.left.length + this.break,
          Kd = Od == jW.ByHeight ? dd < Rd : dd < Xd,
          hd = Kd ? this.left.lineAt(dd, Od, md, Wd, Fd) : this.right.lineAt(dd, Od, md, Rd, Xd);
        if (this.break || (Kd ? hd.to < Xd : hd.from > Xd)) return hd;
        let vd = Od == jW.ByPosNoHeight ? jW.ByPosNoHeight : jW.ByPos;
        return Kd ? hd.join(this.right.lineAt(Xd, vd, md, Rd, Xd)) : this.left.lineAt(Xd, vd, md, Wd, Fd).join(hd)
      }
      forEachLine(dd, Od, md, Wd, Fd, Rd) {
        let Xd = Wd + this.left.height,
          Kd = Fd + this.left.length + this.break;
        if (this.break) dd < Kd && this.left.forEachLine(dd, Od, md, Wd, Fd, Rd), Od >= Kd && this.right.forEachLine(dd, Od, md, Xd, Kd, Rd);
        else {
          let hd = this.lineAt(Kd, jW.ByPos, md, Wd, Fd);
          dd < hd.from && this.left.forEachLine(dd, hd.from - 1, md, Wd, Fd, Rd), hd.to >= dd && hd.from <= Od && Rd(hd), Od > hd.to && this.right.forEachLine(hd.to + 1, Od, md, Xd, Kd, Rd)
        }
      }
      replace(dd, Od, md) {
        let Wd = this.left.length + this.break;
        if (Od < Wd) return this.balanced(this.left.replace(dd, Od, md), this.right);
        if (dd > this.left.length) return this.balanced(this.left, this.right.replace(dd - Wd, Od - Wd, md));
        let Fd = [];
        dd > 0 && this.decomposeLeft(dd, Fd);
        let Rd = Fd.length;
        for (let Xd of md) Fd.push(Xd);
        if (dd > 0 && MW(Fd, Rd - 1), Od < this.length) {
          let dd = Fd.length;
          this.decomposeRight(Od, Fd), MW(Fd, dd)
        }
        return eW.of(Fd)
      }
      decomposeLeft(dd, Od) {
        let md = this.left.length;
        if (dd <= md) return this.left.decomposeLeft(dd, Od);
        Od.push(this.left), this.break && (md++, dd >= md && Od.push(null)), dd > md && this.right.decomposeLeft(dd - md, Od)
      }
      decomposeRight(dd, Od) {
        let md = this.left.length,
          Wd = md + this.break;
        if (dd >= Wd) return this.right.decomposeRight(dd - Wd, Od);
        dd < md && this.left.decomposeRight(dd, Od), this.break && dd < Wd && Od.push(null), Od.push(this.right)
      }
      balanced(dd, Od) {
        return dd.size > 2 * Od.size || Od.size > 2 * dd.size ? eW.of(this.break ? [dd, null, Od] : [dd, Od]) : (this.left = IW(this.left, dd), this.right = IW(this.right, Od), this.setHeight(dd.height + Od.height), this.outdated = dd.outdated || Od.outdated, this.size = dd.size + Od.size, this.length = dd.length + this.break+Od.length, this)
      }
      updateHeight(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Fd,
            right: Rd
          } = this,
          Xd = Od + Fd.length + this.break,
          Kd = null;
        return Wd && Wd.from <= Od + Fd.length && Wd.more ? Kd = Fd = Fd.updateHeight(dd, Od, md, Wd) : Fd.updateHeight(dd, Od, md), Wd && Wd.from <= Xd + Rd.length && Wd.more ? Kd = Rd = Rd.updateHeight(dd, Xd, md, Wd) : Rd.updateHeight(dd, Xd, md), Kd ? this.balanced(Fd, Rd) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function MW(dd, Od) {
      let md, Wd;
      null == dd[Od] && (md = dd[Od - 1]) instanceof kW && (Wd = dd[Od + 1]) instanceof kW && dd.splice(Od - 1, 3, new kW(md.length + 1 + Wd.length))
    }
    class dF {
      constructor(dd, Od) {
        this.pos = dd, this.oracle = Od, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = dd
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(dd, Od) {
        if (this.lineStart > -1) {
          let dd = Math.min(Od, this.lineEnd),
            md = this.nodes[this.nodes.length - 1];
          md instanceof ZW ? md.length += dd - this.pos : (dd > this.pos || !this.isCovered) && this.nodes.push(new ZW(dd - this.pos, -1, 0)), this.writtenTo = dd, Od > dd && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Od
      }
      point(dd, Od, md) {
        if (dd < Od || md.heightRelevant) {
          let Wd = md.widget ? md.widget.estimatedHeight : 0,
            Fd = md.widget ? md.widget.lineBreaks : 0;
          Wd < 0 && (Wd = this.oracle.lineHeight);
          let Rd = Od - dd;
          md.block ? this.xmd(new CW(Rd, Wd, md)) : (Rd || Fd || Wd >= 5) && this.addLineDeco(Wd, Fd, Rd)
        } else Od > dd && this.span(dd, Od);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: dd,
          to: Od
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = dd, this.lineEnd = Od, this.writtenTo < dd && ((this.writtenTo < dd - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, dd - 1)), this.nodes.push(null)), this.pos > dd && this.nodes.push(new ZW(this.pos - dd, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(dd, Od) {
        let md = new kW(Od - dd);
        return this.oracle.doc.lineAt(dd).to == Od && (md.flags |= 4), md
      }
      ensureLine() {
        this.enterLine();
        let dd = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (dd instanceof ZW) return dd;
        let Od = new ZW(0, -1, 0);
        return this.nodes.push(Od), Od
      }
      xmd(dd) {
        this.enterLine();
        let Od = dd.deco;
        Od && Od.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(dd), this.writtenTo = this.pos = this.pos + dd.length, Od && Od.endSide > 0 && (this.covering = dd)
      }
      addLineDeco(dd, Od, md) {
        let Wd = this.ensureLine();
        Wd.length += md, Wd.collapsed += md, Wd.widgetHeight = Math.max(Wd.widgetHeight, dd), Wd.breaks += Od, this.writtenTo = this.pos = this.pos + md
      }
      finish(dd) {
        let Od = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Od instanceof ZW || this.isCovered ? (this.writtenTo < this.pos || null == Od) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new ZW(0, -1, 0));
        let md = dd;
        for (let Wd of this.nodes) Wd instanceof ZW && Wd.updateHeight(this.oracle, md), md += Wd ? Wd.length : 1;
        return this.nodes
      }
      static build(dd, Od, md, Fd) {
        let Rd = new dF(md, dd);
        return Wd.B.spans(Od, md, Fd, Rd, 0), Rd.finish(md)
      }
    }
    class OF {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(dd, Od, md, Wd) {
        (dd < Od || md && md.heightRelevant || Wd && Wd.heightRelevant) && Ld(dd, Od, this.changes, 5)
      }
    }

    function mF(dd, Od) {
      let md = dd.getBoundingClientRect(),
        Wd = dd.ownerDocument,
        Fd = Wd.defaultView || window,
        Rd = Math.max(0, md.left),
        Xd = Math.min(Fd.innerWidth, md.right),
        Kd = Math.max(0, md.top),
        hd = Math.min(Fd.innerHeight, md.bottom);
      for (let vd = dd.parentNode; vd && vd != Wd.body;)
        if (1 == vd.nodeType) {
          let Od = vd,
            md = window.getComputedStyle(Od);
          if ((Od.scrollHeight > Od.clientHeight || Od.scrollWidth > Od.clientWidth) && "visible" != md.overflow) {
            let md = Od.getBoundingClientRect();
            Rd = Math.max(Rd, md.left), Xd = Math.min(Xd, md.right), Kd = Math.max(Kd, md.top), hd = Math.min(vd == dd.parentNode ? Fd.innerHeight : hd, md.bottom)
          }
          vd = "absolute" == md.position || "fixed" == md.position ? Od.offsetParent : Od.parentNode
        } else {
          if (11 != vd.nodeType) break;
          vd = vd.host
        } return {
        left: Rd - md.left,
        right: Math.max(Rd, Xd) - md.left,
        top: Kd - (md.top + Od),
        bottom: Math.max(Kd, hd) - (md.top + Od)
      }
    }

    function WF(dd, Od) {
      let md = dd.getBoundingClientRect();
      return {
        left: 0,
        right: md.right - md.left,
        top: Od,
        bottom: md.bottom - (md.top + Od)
      }
    }
    class FF {
      constructor(dd, Od, md, Wd) {
        this.from = dd, this.to = Od, this.size = md, this.displaySize = Wd
      }
      static same(dd, Od) {
        if (dd.length != Od.length) return !1;
        for (let md = 0; md < dd.length; md++) {
          let Wd = dd[md],
            Fd = Od[md];
          if (Wd.from != Fd.from || Wd.to != Fd.to || Wd.size != Fd.size) return !1
        }
        return !0
      }
      draw(dd, Od) {
        return Vd.replace({
          widget: new RF(this.displaySize * (Od ? dd.scaleY : dd.scaleX), Od)
        }).range(this.from, this.to)
      }
    }
    class RF extends sd {
      constructor(dd, Od) {
        super(), this.size = dd, this.vertical = Od
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
    class XF {
      constructor(dd, Od) {
        this.view = dd, this.state = Od, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = QF, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = tO.LTR, this.Mdd = [], this.mustEnforceCursorAssoc = !1;
        let md = Od.facet(Om).some((dd => "function" != typeof dd && "cm-lineWrapping" == dd.class));
        this.heightOracle = new PW(md), this.stateDeco = tF(Od), this.heightMap = eW.empty().applyChanges(this.stateDeco, Wd.N.empty, this.heightOracle.setDoc(Od.doc), [new om(0, 0, 0, Od.doc.length)]);
        for (let Wd = 0; Wd < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Wd++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Vd.set(this.lineGaps.map((dd => dd.draw(this, !1)))), this.scrollParent = dd.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let dd = [this.viewport],
          {
            main: Od
          } = this.state.selection;
        for (let md = 0; md <= 1; md++) {
          let Wd = md ? Od.head : Od.anchor;
          if (!dd.some((dd => {
              let {
                from: Od,
                to: md
              } = dd;
              return Wd >= Od && Wd <= md
            }))) {
            let {
              from: Od,
              to: md
            } = this.lineBlockAt(Wd);
            dd.push(new KF(Od, md))
          }
        }
        return this.viewports = dd.sort(((dd, Od) => dd.from - Od.from)), this.updateScaler()
      }
      updateScaler() {
        let dd = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? QF : new oF(this.heightOracle, this.heightMap, this.viewports), dd.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (dd => {
          this.viewportLines.push(NF(dd, this.scaler))
        }))
      }
      update(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = dd.state;
        let md = this.stateDeco;
        this.stateDeco = tF(this.state);
        let Fd = dd.changedRanges,
          Rd = om.extendWithRanges(Fd, function(dd, Od, md) {
            let Fd = new OF;
            return Wd.B.compare(dd, Od, md, Fd, 0), Fd.changes
          }(md, this.stateDeco, dd ? dd.changes : Wd.ChangeSet.empty(this.state.doc.length))),
          Xd = this.heightMap.height,
          Kd = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        LW(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, dd.startState.doc, this.heightOracle.setDoc(this.state.doc), Rd), (this.heightMap.height != Xd || nW) && (dd.flags |= 2), Kd ? (this.scrollAnchorPos = dd.changes.mapPos(Kd.from, -1), this.scrollAnchorHeight = Kd.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Xd);
        let hd = Rd.length ? this.mapViewport(this.viewport, dd.changes) : this.viewport;
        (Od && (Od.range.head < hd.from || Od.range.head > hd.to) || !this.viewportIsAppropriate(hd)) && (hd = this.getViewport(0, Od));
        let vd = hd.from != this.viewport.from || hd.to != this.viewport.to;
        this.viewport = hd, dd.flags |= this.updateForViewport(), (vd || !dd.changes.empty || 2 & dd.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, dd.changes))), dd.flags |= this.computeVisibleRanges(dd.changes), Od && (this.scrollTarget = Od), !this.mustEnforceCursorAssoc && (dd.selectionSet || dd.focusChanged) && dd.view.lineWrapping && dd.state.selection.main.empty && dd.state.selection.main.assoc && !dd.state.facet(cO) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: dd
        } = this, Od = dd.contentDOM, md = window.getComputedStyle(Od), Fd = this.heightOracle, Rd = md.whiteSpace;
        this.defaultTextDirection = "rtl" == md.direction ? tO.RTL : tO.LTR;
        let Xd = this.heightOracle.mustRefreshForWrapping(Rd) || "refresh" === this.mustMeasureContent,
          Kd = Od.getBoundingClientRect(),
          hd = Xd || this.mustMeasureContent || this.contentDOMHeight != Kd.height;
        this.contentDOMHeight = Kd.height, this.mustMeasureContent = !1;
        let vd = 0,
          Qd = 0;
        if (Kd.width && Kd.height) {
          let {
            scaleX: dd,
            scaleY: md
          } = Md(Od, Kd);
          (dd > .005 && Math.abs(this.scaleX - dd) > .005 || md > .005 && Math.abs(this.scaleY - md) > .005) && (this.scaleX = dd, this.scaleY = md, vd |= 16, Xd = hd = !0)
        }
        let td = (parseInt(md.paddingTop) || 0) * this.scaleY,
          od = (parseInt(md.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == td && this.paddingBottom == od || (this.paddingTop = td, this.paddingBottom = od, vd |= 18), this.editorWidth != dd.scrollDOM.clientWidth && (Fd.lineWrapping && (hd = !0), this.editorWidth = dd.scrollDOM.clientWidth, vd |= 16);
        let Nd = dO(this.view.contentDOM, !1).y;
        Nd != this.scrollParent && (this.scrollParent = Nd, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let qd = this.getScrollOffset();
        this.scrollOffset != qd && (this.scrollAnchorHeight = -1, this.scrollOffset = qd), this.scrolledToBottom = KO(this.scrollParent || dd.win);
        let Hd = (this.printing ? WF : mF)(Od, this.paddingTop),
          yd = Hd.top - this.pixelViewport.top,
          bd = Hd.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Hd;
        let Td = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Td != this.inView && (this.inView = Td, Td && (hd = !0)), !this.inView && !this.scrollTarget && ! function(dd) {
            let Od = dd.getBoundingClientRect(),
              md = dd.ownerDocument.defaultView || window;
            return Od.left < md.innerWidth && Od.right > 0 && Od.top < md.innerHeight && Od.bottom > 0
          }(dd.dom)) return 0;
        let pd = Kd.width;
        if (this.contentDOMWidth == pd && this.editorHeight == dd.scrollDOM.clientHeight || (this.contentDOMWidth = Kd.width, this.editorHeight = dd.scrollDOM.clientHeight, vd |= 16), hd) {
          let Od = dd.docView.measureVisibleLineHeights(this.viewport);
          if (Fd.mustRefreshForHeights(Od) && (Xd = !0), Xd || Fd.lineWrapping && Math.abs(pd - this.contentDOMWidth) > Fd.charWidth) {
            let {
              lineHeight: md,
              charWidth: Wd,
              textHeight: Kd
            } = dd.docView.measureTextSize();
            Xd = md > 0 && Fd.refresh(Rd, md, Wd, Kd, Math.max(5, pd / Wd), Od), Xd && (dd.docView.minWidth = 0, vd |= 16)
          }
          yd > 0 && bd > 0 ? Qd = Math.max(yd, bd) : yd < 0 && bd < 0 && (Qd = Math.min(yd, bd)), LW();
          for (let md of this.viewports) {
            let Rd = md.from == this.viewport.from ? Od : dd.docView.measureVisibleLineHeights(md);
            this.heightMap = (Xd ? eW.empty().applyChanges(this.stateDeco, Wd.N.empty, this.heightOracle, [new om(0, 0, 0, dd.state.doc.length)]) : this.heightMap).updateHeight(Fd, 0, Xd, new zW(md.from, Rd))
          }
          nW && (vd |= 2)
        }
        let Yd = !this.viewportIsAppropriate(this.viewport, Qd) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Yd && (2 & vd && (vd |= this.updateScaler()), this.viewport = this.getViewport(Qd, this.scrollTarget), vd |= this.updateForViewport()), (2 & vd || Yd) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Xd ? [] : this.lineGaps, dd)), vd |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, dd.docView.enforceCursorAssoc()), vd
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(dd, Od) {
        let md = .5 - Math.max(-.5, Math.min(.5, dd / 1e3 / 2)),
          Wd = this.heightMap,
          Fd = this.heightOracle,
          {
            visibleTop: Rd,
            visibleBottom: Xd
          } = this,
          Kd = new KF(Wd.lineAt(Rd - 1e3 * md, jW.ByHeight, Fd, 0, 0).from, Wd.lineAt(Xd + 1e3 * (1 - md), jW.ByHeight, Fd, 0, 0).to);
        if (Od) {
          let {
            head: dd
          } = Od.range;
          if (dd < Kd.from || dd > Kd.to) {
            let md, Rd = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Xd = Wd.lineAt(dd, jW.ByPos, Fd, 0, 0);
            md = "center" == Od.y ? (Xd.top + Xd.bottom) / 2 - Rd / 2 : "start" == Od.y || "nearest" == Od.y && dd < Kd.from ? Xd.top : Xd.bottom - Rd, Kd = new KF(Wd.lineAt(md - 500, jW.ByHeight, Fd, 0, 0).from, Wd.lineAt(md + Rd + 500, jW.ByHeight, Fd, 0, 0).to)
          }
        }
        return Kd
      }
      mapViewport(dd, Od) {
        let md = Od.mapPos(dd.from, -1),
          Wd = Od.mapPos(dd.to, 1);
        return new KF(this.heightMap.lineAt(md, jW.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Wd, jW.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(dd) {
        let {
          from: Od,
          to: md
        } = dd, Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Fd
        } = this.heightMap.lineAt(Od, jW.ByPos, this.heightOracle, 0, 0), {
          bottom: Rd
        } = this.heightMap.lineAt(md, jW.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Xd,
          visibleBottom: Kd
        } = this;
        return (0 == Od || Fd <= Xd - Math.max(10, Math.min(-Wd, 250))) && (md == this.state.doc.length || Rd >= Kd + Math.max(10, Math.min(Wd, 250))) && Fd > Xd - 2e3 && Rd < Kd + 2e3
      }
      mapLineGaps(dd, Od) {
        if (!dd.length || Od.empty) return dd;
        let md = [];
        for (let Wd of dd) Od.touchesRange(Wd.from, Wd.to) || md.push(new FF(Od.mapPos(Wd.from), Od.mapPos(Wd.to), Wd.size, Wd.displaySize));
        return md
      }
      ensureLineGaps(dd, Od) {
        let md = this.heightOracle.lineWrapping,
          Fd = md ? 1e4 : 2e3,
          Rd = Fd >> 1,
          Xd = Fd << 1;
        if (this.defaultTextDirection != tO.LTR && !md) return [];
        let Kd = [],
          hd = (Fd, Xd, vd, Qd) => {
            if (Xd - Fd < Rd) return;
            let td = this.state.selection.main,
              od = [td.from];
            td.empty || od.push(td.to);
            for (let dd of od)
              if (dd > Fd && dd < Xd) return hd(Fd, dd - 10, vd, Qd), void hd(dd + 10, Xd, vd, Qd);
            let Nd = function(dd, Od) {
              for (let md of dd)
                if (Od(md)) return md;
              return
            }(dd, (dd => dd.from >= vd.from && dd.to <= vd.to && Math.abs(dd.from - Fd) < Rd && Math.abs(dd.to - Xd) < Rd && !od.some((Od => dd.from < Od && dd.to > Od))));
            if (!Nd) {
              if (Xd < vd.to && Od && md && Od.Mdd.some((dd => dd.from <= Xd && dd.to >= Xd))) {
                let dd = Od.moveToLineBoundary(Wd.j.cursor(Xd), !1, !0).head;
                dd > Fd && (Xd = dd)
              }
              let dd = this.gapSize(vd, Fd, Xd, Qd);
              Nd = new FF(Fd, Xd, dd, md || dd < 2e6 ? dd : 2e6)
            }
            Kd.push(Nd)
          },
          vd = Od => {
            if (Od.length < Xd || Od.type != ud.Text) return;
            let Rd = function(dd, Od, md) {
              let Fd = [],
                Rd = dd,
                Xd = 0;
              Wd.B.spans(md, dd, Od, {
                span() {},
                point(dd, Od) {
                  dd > Rd && (Fd.push({
                    from: Rd,
                    to: dd
                  }), Xd += dd - Rd), Rd = Od
                }
              }, 20), Rd < Od && (Fd.push({
                from: Rd,
                to: Od
              }), Xd += Od - Rd);
              return {
                total: Xd,
                By: Fd
              }
            }(Od.from, Od.to, this.stateDeco);
            if (Rd.total < Xd) return;
            let Kd, vd, Qd = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (md) {
              let dd, md, Wd = Fd / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Qd) {
                let Fd = vF(Rd, Qd),
                  Xd = ((this.visibleBottom - this.visibleTop) / 2 + Wd) / Od.height;
                dd = Fd - Xd, md = Fd + Xd
              } else dd = (this.visibleTop - Od.top - Wd) / Od.height, md = (this.visibleBottom - Od.top + Wd) / Od.height;
              Kd = hF(Rd, dd), vd = hF(Rd, md)
            } else {
              let md = Rd.total * this.heightOracle.charWidth,
                Wd = Fd * this.heightOracle.charWidth,
                Xd = 0;
              if (md > 2e6)
                for (let Fd of dd) Fd.from >= Od.from && Fd.from < Od.to && Fd.size != Fd.displaySize && Fd.from * this.heightOracle.charWidth + Xd < this.pixelViewport.left && (Xd = Fd.size - Fd.displaySize);
              let hd, td, od = this.pixelViewport.left + Xd,
                Nd = this.pixelViewport.right + Xd;
              if (null != Qd) {
                let dd = vF(Rd, Qd),
                  Od = ((Nd - od) / 2 + Wd) / md;
                hd = dd - Od, td = dd + Od
              } else hd = (od - Wd) / md, td = (Nd + Wd) / md;
              Kd = hF(Rd, hd), vd = hF(Rd, td)
            }
            Kd > Od.from && hd(Od.from, Kd, Od, Rd), vd < Od.to && hd(vd, Od.to, Od, Rd)
          };
        for (let Wd of this.viewportLines) Array.isArray(Wd.type) ? Wd.type.forEach(vd) : vd(Wd);
        return Kd
      }
      gapSize(dd, Od, md, Wd) {
        let Fd = vF(Wd, md) - vF(Wd, Od);
        return this.heightOracle.lineWrapping ? dd.height * Fd : Wd.total * this.heightOracle.charWidth * Fd
      }
      updateLineGaps(dd) {
        FF.same(dd, this.lineGaps) || (this.lineGaps = dd, this.lineGapDeco = Vd.set(dd.map((dd => dd.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(dd) {
        let Od = this.stateDeco;
        this.lineGaps.length && (Od = Od.concat(this.lineGapDeco));
        let md = [];
        Wd.B.spans(Od, this.viewport.from, this.viewport.to, {
          span(dd, Od) {
            md.push({
              from: dd,
              to: Od
            })
          },
          point() {}
        }, 20);
        let Fd = 0;
        if (md.length != this.Mdd.length) Fd = 12;
        else
          for (let Wd = 0; Wd < md.length && !(8 & Fd); Wd++) {
            let Od = this.Mdd[Wd],
              Rd = md[Wd];
            Od.from == Rd.from && Od.to == Rd.to || (Fd |= 4, dd && dd.mapPos(Od.from, -1) == Rd.from && dd.mapPos(Od.to, 1) == Rd.to || (Fd |= 8))
          }
        return this.Mdd = md, Fd
      }
      lineBlockAt(dd) {
        return dd >= this.viewport.from && dd <= this.viewport.to && this.viewportLines.find((Od => Od.from <= dd && Od.to >= dd)) || NF(this.heightMap.lineAt(dd, jW.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(dd) {
        return dd >= this.viewportLines[0].top && dd <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Od => Od.top <= dd && Od.bottom >= dd)) || NF(this.heightMap.lineAt(this.scaler.fromDOM(dd), jW.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(dd) {
        let Od = this.lineBlockAtHeight(dd + 8);
        return Od.from >= this.viewport.from || this.viewportLines[0].top - dd > 200 ? Od : this.viewportLines[0]
      }
      elementAtHeight(dd) {
        return NF(this.heightMap.blockAt(this.scaler.fromDOM(dd), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class KF {
      constructor(dd, Od) {
        this.from = dd, this.to = Od
      }
    }

    function hF(dd, Od) {
      let {
        total: md,
        By: Wd
      } = dd;
      if (Od <= 0) return Wd[0].from;
      if (Od >= 1) return Wd[Wd.length - 1].to;
      let Fd = Math.floor(md * Od);
      for (let Rd = 0;; Rd++) {
        let {
          from: dd,
          to: Od
        } = Wd[Rd], md = Od - dd;
        if (Fd <= md) return dd + Fd;
        Fd -= md
      }
    }

    function vF(dd, Od) {
      let md = 0;
      for (let {
          from: Wd,
          to: Fd
        }
        of dd.By) {
        if (Od <= Fd) {
          md += Od - Wd;
          break
        }
        md += Fd - Wd
      }
      return md / dd.total
    }
    const QF = {
      toDOM: dd => dd,
      fromDOM: dd => dd,
      scale: 1,
      eq(dd) {
        return dd == this
      }
    };

    function tF(dd) {
      let Od = dd.facet(mm).filter((dd => "function" != typeof dd)),
        md = dd.facet(Fm).filter((dd => "function" != typeof dd));
      return md.length && Od.push(Wd.B.join(md)), Od
    }
    class oF {
      constructor(dd, Od, md) {
        let Wd = 0,
          Fd = 0,
          Rd = 0;
        this.viewports = md.map((md => {
          let {
            from: Fd,
            to: Rd
          } = md, Xd = Od.lineAt(Fd, jW.ByPos, dd, 0, 0).top, Kd = Od.lineAt(Rd, jW.ByPos, dd, 0, 0).bottom;
          return Wd += Kd - Xd, {
            from: Fd,
            to: Rd,
            top: Xd,
            bottom: Kd,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Wd) / (Od.height - Wd);
        for (let Xd of this.viewports) Xd.domTop = Rd + (Xd.top - Fd) * this.scale, Rd = Xd.domBottom = Xd.domTop + (Xd.bottom - Xd.top), Fd = Xd.bottom
      }
      toDOM(dd) {
        for (let Od = 0, md = 0, Wd = 0;; Od++) {
          let Fd = Od < this.viewports.length ? this.viewports[Od] : null;
          if (!Fd || dd < Fd.top) return Wd + (dd - md) * this.scale;
          if (dd <= Fd.bottom) return Fd.domTop + (dd - Fd.top);
          md = Fd.bottom, Wd = Fd.domBottom
        }
      }
      fromDOM(dd) {
        for (let Od = 0, md = 0, Wd = 0;; Od++) {
          let Fd = Od < this.viewports.length ? this.viewports[Od] : null;
          if (!Fd || dd < Fd.domTop) return md + (dd - Wd) / this.scale;
          if (dd <= Fd.domBottom) return Fd.top + (dd - Fd.domTop);
          md = Fd.bottom, Wd = Fd.domBottom
        }
      }
      eq(dd) {
        return dd instanceof oF && (this.scale == dd.scale && this.viewports.length == dd.viewports.length && this.viewports.every(((Od, md) => Od.from == dd.viewports[md].from && Od.to == dd.viewports[md].to)))
      }
    }

    function NF(dd, Od) {
      if (1 == Od.scale) return dd;
      let md = Od.toDOM(dd.top),
        Wd = Od.toDOM(dd.bottom);
      return new cW(dd.from, dd.length, md, Wd - md, Array.isArray(dd._content) ? dd._content.map((dd => NF(dd, Od))) : dd._content)
    }
    const qF = Wd.p.define({
        combine: dd => dd.join(" ")
      }),
      HF = Wd.p.define({
        combine: dd => dd.indexOf(!0) > -1
      }),
      yF = Fd.b.newName(),
      bF = Fd.b.newName(),
      TF = Fd.b.newName(),
      pF = {
        "&light": "." + bF,
        "&dark": "." + TF
      };

    function YF(dd, Od, md) {
      return new Fd.b(Od, {
        finish: Od => /&/.test(Od) ? Od.replace(/&\w*/, (Od => {
          if ("&" == Od) return dd;
          if (!md || !md[Od]) throw new RangeError(`Unsupported selector: ${Od}`);
          return md[Od]
        })) : dd + " " + Od
      })
    }
    const gF = YF("." + yF, {
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
      }, pF),
      wF = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      aF = Ed.ie && Ed.ie_version <= 11;
    class EF {
      constructor(dd) {
        this.view = dd, this.active = !1, this.editContext = null, this.selectionRange = new OO, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = dd.contentDOM, this.observer = new MutationObserver((Od => {
          for (let dd of Od) this.queue.push(dd);
          (Ed.ie && Ed.ie_version <= 11 || Ed.ios && dd.composing) && Od.some((dd => "childList" == dd.type && dd.removedNodes.length || "characterData" == dd.type && dd.oldValue.length > dd.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Ed.android || !1 === dd.constructor.EDIT_CONTEXT || Ed.chrome && Ed.chrome_version < 126 || (this.editContext = new xF(dd), dd.state.facet(CO) && (dd.contentDOM.editContext = this.editContext.editContext)), aF && (this.onCharData = dd => {
          this.queue.push({
            target: dd.target,
            type: "characterData",
            oldValue: dd.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Ip = this.Ip.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var dd;
          (null === (dd = this.view.docView) || void 0 === dd ? void 0 : dd.lastUpdate) < Date.now() - 75 && this.Ip()
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
      Ip() {
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
        if (this.gapIntersection && (dd.length != this.gaps.length || this.gaps.some(((Od, md) => Od != dd[md])))) {
          this.gapIntersection.disconnect();
          for (let Od of dd) this.gapIntersection.observe(Od);
          this.gaps = dd
        }
      }
      onSelectionChange(dd) {
        let Od = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: md
        } = this, Wd = this.selectionRange;
        if (md.state.facet(CO) ? md.root.activeElement != this.dom : !jd(this.dom, Wd)) return;
        let Fd = Wd.anchorNode && md.docView.tile.nearest(Wd.anchorNode);
        Fd && Fd.isWidget() && Fd.widget.ignoreEvent(dd) ? Od || (this.selectionChanged = !1) : (Ed.ie && Ed.ie_version <= 11 || Ed.android && Ed.chrome) && !md.state.selection.main.empty && Wd.focusNode && ed(Wd.focusNode, Wd.focusOffset, Wd.anchorNode, Wd.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: dd
        } = this, Od = zd(dd.root);
        if (!Od) return !1;
        let md = Ed.safari && 11 == dd.root.nodeType && dd.root.activeElement == this.dom && function(dd, Od) {
          if (Od.getComposedRanges) {
            let md = Od.getComposedRanges(dd.root)[0];
            if (md) return UF(dd, md)
          }
          let md = null;

          function Wd(dd) {
            dd.preventDefault(), dd.stopImmediatePropagation(), md = dd.getTargetRanges()[0]
          }
          return dd.contentDOM.addEventListener("beforeinput", Wd, !0), dd.dom.ownerDocument.execCommand("indent"), dd.contentDOM.removeEventListener("beforeinput", Wd, !0), md ? UF(dd, md) : null
        }(this.view, Od) || Od;
        if (!md || this.selectionRange.eq(md)) return !1;
        let Wd = jd(this.dom, md);
        return Wd && !this.selectionChanged && dd.inputState.lastFocusTime > Date.now() - 200 && dd.inputState.lastTouchTime < Date.now() - 300 && function(dd, Od) {
          let md = Od.focusNode,
            Wd = Od.focusOffset;
          if (!md || Od.anchorNode != md || Od.anchorOffset != Wd) return !1;
          for (Wd = Math.min(Wd, Zd(md));;)
            if (Wd) {
              if (1 != md.nodeType) return !1;
              let dd = md.childNodes[Wd - 1];
              "false" == dd.contentEditable ? Wd-- : (md = dd, Wd = Zd(md))
            } else {
              if (md == dd) return !0;
              Wd = Id(md), md = md.parentNode
            }
        }(this.dom, md) ? (this.view.inputState.lastFocusTime = 0, dd.docView.updateSelection(), !1) : (this.selectionRange.setRange(md), Wd && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(dd, Od) {
        this.selectionRange.set(dd.node, dd.offset, Od.node, Od.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let dd = 0,
          Od = null;
        for (let md = this.dom; md;)
          if (1 == md.nodeType) !Od && dd < this.scrollTargets.length && this.scrollTargets[dd] == md ? dd++ : Od || (Od = this.scrollTargets.slice(0, dd)), Od && Od.push(md), md = md.assignedSlot || md.parentNode;
          else {
            if (11 != md.nodeType) break;
            md = md.host
          } if (dd < this.scrollTargets.length && !Od && (Od = this.scrollTargets.slice(0, dd)), Od) {
          for (let dd of this.scrollTargets) dd.removeEventListener("scroll", this.onScroll);
          for (let dd of this.scrollTargets = Od) dd.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, wF), aF && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), aF && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(dd, Od) {
        var md;
        if (!this.delayedAndroidKey) {
          let dd = () => {
            let dd = this.delayedAndroidKey;
            if (dd) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = dd.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && dd.force && XO(this.dom, dd.key, dd.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(dd)
        }
        this.delayedAndroidKey && "Enter" != dd || (this.delayedAndroidKey = {
          key: dd,
          keyCode: Od,
          force: this.lastChange < Date.now() - 50 || !!(null === (md = this.delayedAndroidKey) || void 0 === md ? void 0 : md.force)
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
        let Od = -1,
          md = -1,
          Wd = !1;
        for (let Fd of dd) {
          let dd = this.readMutation(Fd);
          dd && (dd.typeOver && (Wd = !0), -1 == Od ? ({
            from: Od,
            to: md
          } = dd) : (Od = Math.min(dd.from, Od), md = Math.max(dd.to, md)))
        }
        return {
          from: Od,
          to: md,
          typeOver: Wd
        }
      }
      readChange() {
        let {
          from: dd,
          to: Od,
          typeOver: md
        } = this.processRecords(), Wd = this.selectionChanged && jd(this.dom, this.selectionRange);
        if (dd < 0 && !Wd) return null;
        dd > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Fd = new RW(this.view, dd, Od, md);
        return this.view.docView.domChanged = {
          newSel: Fd.newSel ? Fd.newSel.main : null
        }, Fd
      }
      flush() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        dd && this.readSelectionRange();
        let Od = this.readChange();
        if (!Od) return this.view.requestMeasure(), !1;
        let md = this.view.state,
          Wd = KW(this.view, Od);
        return this.view.state == md && (Od.domChanged || Od.newSel && !QW(this.view.state.selection, Od.newSel.main)) && this.view.update([]), Wd
      }
      readMutation(dd) {
        let Od = this.view.docView.tile.nearest(dd.target);
        if (!Od || Od.isWidget()) return null;
        if (Od.markDirty("attributes" == dd.type), "childList" == dd.type) {
          let md = JF(Od, dd.previousSibling || dd.target.previousSibling, -1),
            Wd = JF(Od, dd.nextSibling || dd.target.nextSibling, 1);
          return {
            from: md ? Od.posAfter(md) : Od.posAtStart,
            to: Wd ? Od.posBefore(Wd) : Od.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == dd.type ? {
          from: Od.posAtStart,
          to: Od.posAtEnd,
          typeOver: dd.target.nodeValue == dd.oldValue
        } : null
      }
      setWindow(dd) {
        dd != this.win && (this.removeWindowListeners(this.win), this.win = dd, this.addWindowListeners(this.win))
      }
      addWindowListeners(dd) {
        dd.addEventListener("resize", this.Ip), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : dd.addEventListener("beforeprint", this.onPrint), dd.addEventListener("scroll", this.onScroll), dd.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(dd) {
        dd.removeEventListener("scroll", this.onScroll), dd.removeEventListener("resize", this.Ip), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : dd.removeEventListener("beforeprint", this.onPrint), dd.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(dd) {
        this.editContext && (this.editContext.update(dd), dd.startState.facet(CO) != dd.state.facet(CO) && (dd.view.contentDOM.editContext = dd.state.facet(CO) ? this.editContext.editContext : null))
      }
      destroy() {
        var dd, Od, md;
        this.stop(), null === (dd = this.intersection) || void 0 === dd || dd.disconnect(), null === (Od = this.gapIntersection) || void 0 === Od || Od.disconnect(), null === (md = this.resizeScroll) || void 0 === md || md.disconnect();
        for (let Wd of this.scrollTargets) Wd.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function JF(dd, Od, md) {
      for (; Od;) {
        let Wd = Hm.get(Od);
        if (Wd && Wd.parent == dd) return Wd;
        let Fd = Od.parentNode;
        Od = Fd != dd.dom ? Fd : md > 0 ? Od.nextSibling : Od.previousSibling
      }
      return null
    }

    function UF(dd, Od) {
      let md = Od.startContainer,
        Wd = Od.startOffset,
        Fd = Od.endContainer,
        Rd = Od.endOffset,
        Xd = dd.docView.domAtPos(dd.state.selection.main.anchor, 1);
      return ed(Xd.node, Xd.offset, Fd, Rd) && ([md, Wd, Fd, Rd] = [Fd, Rd, md, Wd]), {
        anchorNode: md,
        anchorOffset: Wd,
        focusNode: Fd,
        focusOffset: Rd
      }
    }
    class xF {
      constructor(dd) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(dd.state);
        let Od = this.editContext = new window.EditContext({
          text: dd.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, dd.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(dd.state.selection.main.head)
        });
        this.handlers.textupdate = md => {
          let Fd = dd.state.selection.main,
            {
              anchor: Rd,
              head: Xd
            } = Fd,
            Kd = this.toEditorPos(md.updateRangeStart),
            hd = this.toEditorPos(md.updateRangeEnd);
          dd.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: md.updateRangeStart,
            editorBase: Kd,
            drifted: !1
          });
          let vd = hd - Kd > md.text.length;
          Kd == this.from && Rd < this.from ? Kd = Rd : hd == this.to && Rd > this.to && (hd = Rd);
          let Qd = vW(dd.state.sliceDoc(Kd, hd), md.text, (vd ? Fd.from : Fd.to) - Kd, vd ? "end" : null);
          if (!Qd) {
            let Od = Wd.j.single(this.toEditorPos(md.selectionStart), this.toEditorPos(md.selectionEnd));
            return void(QW(Od, Fd) || dd.dispatch({
              selection: Od,
              userEvent: "select"
            }))
          }
          let td = {
            from: Qd.from + Kd,
            to: Qd.toA + Kd,
            insert: Wd.N.of(md.text.slice(Qd.from, Qd.toB).split("\n"))
          };
          if ((Ed.mac || Ed.android) && td.from == Xd - 1 && /^\. ?$/.test(md.text) && "off" == dd.contentDOM.getAttribute("autocorrect") && (td = {
              from: Kd,
              to: hd,
              insert: Wd.N.of([md.text.replace(".", " ")])
            }), this.pendingContextChange = td, !dd.state.readOnly) {
            let Od = this.to - this.from + (td.to - td.from + td.insert.length);
            hW(dd, td, Wd.j.single(this.toEditorPos(md.selectionStart, Od), this.toEditorPos(md.selectionEnd, Od)))
          }
          this.pendingContextChange && (this.revertPending(dd.state), this.setSelection(dd.state)), td.from < td.to && !td.insert.length && dd.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Od.text.slice(Math.max(0, md.updateRangeStart - 1), Math.min(Od.text.length, md.updateRangeStart + 1))) && this.handlers.compositionend(md)
        }, this.handlers.characterboundsupdate = md => {
          let Wd = [],
            Fd = null;
          for (let Od = this.toEditorPos(md.rangeStart), Rd = this.toEditorPos(md.rangeEnd); Od < Rd; Od++) {
            let md = dd.coordsForChar(Od);
            Fd = md && new DOMRect(md.left, md.top, md.right - md.left, md.bottom - md.top) || Fd || new DOMRect, Wd.push(Fd)
          }
          Od.updateCharacterBounds(md.rangeStart, Wd)
        }, this.handlers.textformatupdate = Od => {
          let md = [];
          for (let dd of Od.getTextFormats()) {
            let Od = dd.underlineStyle,
              Wd = dd.underlineThickness;
            if (!/none/i.test(Od) && !/none/i.test(Wd)) {
              let Fd = this.toEditorPos(dd.rangeStart),
                Rd = this.toEditorPos(dd.rangeEnd);
              if (Fd < Rd) {
                let dd = `text-decoration: underline ${/^[a-z]/.test(Od)?Od+" ":"Dashed"==Od?"dashed ":"Squiggle"==Od?"wavy ":""}${/thin/i.test(Wd)?1:2}px`;
                md.push(Vd.mark({
                  attributes: {
                    style: dd
                  }
                }).range(Fd, Rd))
              }
            }
          }
          dd.dispatch({
            effects: IO.of(Vd.set(md))
          })
        }, this.handlers.compositionstart = () => {
          dd.inputState.composing < 0 && (dd.inputState.composing = 0, dd.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (dd.inputState.composing = -1, dd.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Od
            } = this.composing;
            this.composing = null, Od && this.reset(dd.state)
          }
        };
        for (let md in this.handlers) Od.addEventListener(md, this.handlers[md]);
        this.measureReq = {
          read: dd => {
            this.editContext.updateControlBounds(dd.contentDOM.getBoundingClientRect());
            let Od = zd(dd.root);
            Od && Od.rangeCount && this.editContext.updateSelectionBounds(Od.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(dd) {
        let Od = 0,
          md = !1,
          Wd = this.pendingContextChange;
        return dd.changes.iterChanges(((Fd, Rd, Xd, Kd, hd) => {
          if (md) return;
          let vd = hd.length - (Rd - Fd);
          if (Wd && Rd >= Wd.to) {
            if (Wd.from == Fd && Wd.to == Rd && Wd.insert.eq(hd)) return Wd = this.pendingContextChange = null, Od += vd, void(this.to += vd);
            Wd = null, this.revertPending(dd.state)
          }
          if (Fd += Od, (Rd += Od) <= this.from) this.from += vd, this.to += vd;
          else if (Fd < this.to) {
            if (Fd < this.from || Rd > this.to || this.to - this.from + hd.length > 3e4) return void(md = !0);
            this.editContext.updateText(this.toContextPos(Fd), this.toContextPos(Rd), hd.toString()), this.to += vd
          }
          Od += vd
        })), Wd && !md && this.revertPending(dd.state), !md
      }
      update(dd) {
        let Od = this.pendingContextChange,
          md = dd.startState.selection.main;
        this.composing && (this.composing.drifted || !dd.changes.touchesRange(md.from, md.to) && dd.transactions.some((dd => !dd.isUserEvent("input.type") && dd.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = dd.changes.mapPos(this.composing.editorBase)) : this.applyEdits(dd) && this.rangeIsValid(dd.state) ? (dd.docChanged || dd.selectionSet || Od) && this.setSelection(dd.state) : (this.pendingContextChange = null, this.reset(dd.state)), (dd.geometryChanged || dd.docChanged || dd.selectionSet) && dd.view.requestMeasure(this.measureReq)
      }
      resetRange(dd) {
        let {
          head: Od
        } = dd.selection.main;
        this.from = Math.max(0, Od - 1e4), this.to = Math.min(dd.doc.length, Od + 1e4)
      }
      reset(dd) {
        this.resetRange(dd), this.editContext.updateText(0, this.editContext.text.length, dd.doc.sliceString(this.from, this.to)), this.setSelection(dd)
      }
      revertPending(dd) {
        let Od = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Od.from), this.toContextPos(Od.from + Od.insert.length), dd.doc.sliceString(Od.from, Od.to))
      }
      setSelection(dd) {
        let {
          main: Od
        } = dd.selection, md = this.toContextPos(Math.max(this.from, Math.min(this.to, Od.anchor))), Wd = this.toContextPos(Od.head);
        this.editContext.selectionStart == md && this.editContext.selectionEnd == Wd || this.editContext.updateSelection(md, Wd)
      }
      rangeIsValid(dd) {
        let {
          head: Od
        } = dd.selection.main;
        return !(this.from > 0 && Od - this.from < 500 || this.to < dd.doc.length && this.to - Od < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        dd = Math.min(dd, Od);
        let md = this.composing;
        return md && md.drifted ? md.editorBase + (dd - md.contextBase) : dd + this.from
      }
      toContextPos(dd) {
        let Od = this.composing;
        return Od && Od.drifted ? Od.contextBase + (dd - Od.editorBase) : dd - this.from
      }
      destroy() {
        for (let dd in this.handlers) this.editContext.removeEventListener(dd, this.handlers[dd])
      }
    }
    class BF {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Mdd() {
        return this.viewState.Mdd
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
        var Od;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), dd.parent && dd.parent.appendChild(this.dom);
        let {
          dispatch: md
        } = dd;
        this.dispatchTransactions = dd.dispatchTransactions || md && (dd => dd.forEach((dd => md(dd, this)))) || (dd => this.update(dd)), this.dispatch = this.dispatch.bind(this), this._root = dd.root || function(dd) {
          for (; dd;) {
            if (dd && (9 == dd.nodeType || 11 == dd.nodeType && dd.host)) return dd;
            dd = dd.assignedSlot || dd.parentNode
          }
          return null
        }(dd.parent) || document, this.viewState = new XF(this, dd.state || Wd.m.create(dd)), dd.scrollTo && dd.scrollTo.is(eO) && (this.viewState.scrollTarget = dd.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(kO).map((dd => new MO(dd)));
        for (let Wd of this.plugins) Wd.update(this);
        this.observer = new EF(this), this.inputState = new tW(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Lm(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Od = document.fonts) || void 0 === Od ? void 0 : Od.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        let Fd = 1 == Od.length && Od[0] instanceof Wd.Q ? Od : 1 == Od.length && Array.isArray(Od[0]) ? Od[0] : [this.state.update(...Od)];
        this.dispatchTransactions(Fd, this)
      }
      update(dd) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Od, md = !1,
          Fd = !1,
          Rd = this.state;
        for (let Wd of dd) {
          if (Wd.startState != Rd) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Rd = Wd.state
        }
        if (this.destroyed) return void(this.viewState.state = Rd);
        let Xd = this.hasFocus,
          Kd = 0,
          hd = null;
        dd.some((dd => dd.annotation(VW))) ? (this.inputState.notifiedFocused = Xd, Kd = 1) : Xd != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Xd, hd = iW(Rd, Xd), hd || (Kd = 1));
        let vd = this.observer.delayedAndroidKey,
          Qd = null;
        if (vd ? (this.observer.clearDelayedAndroidKey(), Qd = this.observer.readChange(), (Qd && !this.state.doc.eq(Rd.doc) || !this.state.selection.eq(Rd.selection)) && (Qd = null)) : this.observer.clear(), Rd.facet(Wd.m.phrases) != this.state.facet(Wd.m.phrases)) return this.setState(Rd);
        Od = Nm.create(this, Rd, dd), Od.flags |= Kd;
        let td = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Od of dd) {
            if (td && (td = td.map(Od.changes)), Od.scrollIntoView) {
              let {
                main: dd
              } = Od.state.selection, {
                x: md,
                y: Fd
              } = this.state.facet(BF.cursorScrollMargin);
              td = new DO(dd.empty ? dd : Wd.j.cursor(dd.head, dd.head > dd.anchor ? -1 : 1), "nearest", "nearest", Fd, md)
            }
            for (let dd of Od.effects) dd.is(eO) && (td = dd.value.clip(this.state))
          }
          this.viewState.update(Od, td), this.bidiCache = uF.update(this.bidiCache, Od.changes), Od.empty || (this.updatePlugins(Od), this.inputState.update(Od)), md = this.docView.update(Od), this.state.facet(tm) != this.styleModules && this.mountStyles(), Fd = this.updateAttrs(), this.showAnnouncements(dd), this.docView.updateSelection(md, dd.some((dd => dd.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Od.startState.facet(qF) != Od.state.facet(qF) && (this.viewState.mustMeasureContent = !0), (md || Fd || td || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), md && this.docViewUpdate(), !Od.empty)
          for (let Wd of this.state.facet(rO)) try {
            Wd(Od)
          } catch (od) {
            lO(this.state, od, "update listener")
          }(hd || Qd) && Promise.resolve().then((() => {
            hd && this.state == hd.startState && this.dispatch(hd), Qd && !KW(this, Qd) && vd.force && XO(this.contentDOM, vd.key, vd.keyCode)
          }))
      }
      setState(dd) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = dd);
        this.updateState = 2;
        let Od = this.hasFocus;
        try {
          for (let dd of this.plugins) dd.destroy(this);
          this.viewState = new XF(this, dd), this.plugins = dd.facet(kO).map((dd => new MO(dd))), this.pluginMap.clear();
          for (let dd of this.plugins) dd.update(this);
          this.docView.destroy(), this.docView = new Lm(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Od && this.focus(), this.requestMeasure()
      }
      updatePlugins(dd) {
        let Od = dd.startState.facet(kO),
          md = dd.state.facet(kO);
        if (Od != md) {
          let Wd = [];
          for (let Fd of md) {
            let md = Od.indexOf(Fd);
            if (md < 0) Wd.push(new MO(Fd));
            else {
              let Od = this.plugins[md];
              Od.mustUpdate = dd, Wd.push(Od)
            }
          }
          for (let Od of this.plugins) Od.mustUpdate != dd && Od.destroy(this);
          this.plugins = Wd, this.pluginMap.clear()
        } else
          for (let Wd of this.plugins) Wd.mustUpdate = dd;
        for (let Wd = 0; Wd < this.plugins.length; Wd++) this.plugins[Wd].update(this);
        Od != md && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Od of this.plugins) {
          let md = Od.value;
          if (md && md.docViewUpdate) try {
            md.docViewUpdate(this)
          } catch (dd) {
            lO(this.state, dd, "doc view update listener")
          }
        }
      }
      measure() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, dd && this.observer.forceFlush();
        let Od = null,
          md = this.viewState.scrollParent,
          Wd = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Fd,
            scrollAnchorHeight: Rd
          } = this.viewState;
        Math.abs(Wd - this.viewState.scrollOffset) > 1 && (Rd = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let dd = 0;; dd++) {
            if (Rd < 0)
              if (KO(md || this.win)) Fd = -1, Rd = this.viewState.heightMap.height;
              else {
                let dd = this.viewState.scrollAnchorAt(Wd);
                Fd = dd.from, Rd = dd.top
              } this.updateState = 1;
            let Kd = this.viewState.measure();
            if (!Kd && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (dd > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let hd = [];
            4 & Kd || ([this.measureRequests, hd] = [hd, this.measureRequests]);
            let vd = hd.map((dd => {
                try {
                  return dd.read(this)
                } catch (Od) {
                  return lO(this.state, Od), sF
                }
              })),
              Qd = Nm.create(this, this.state, []),
              td = !1;
            Qd.flags |= Kd, Od ? Od.flags |= Kd : Od = Qd, this.updateState = 2, Qd.empty || (this.updatePlugins(Qd), this.inputState.update(Qd), this.updateAttrs(), td = this.docView.update(Qd), td && this.docViewUpdate());
            for (let dd = 0; dd < hd.length; dd++)
              if (vd[dd] != sF) try {
                let Od = hd[dd];
                Od.write && Od.write(vd[dd], this)
              } catch (Xd) {
                lO(this.state, Xd)
              }
            if (td && this.docView.updateSelection(!0), !Qd.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Rd = -1;
                  continue
                } {
                  let dd = ((Fd < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Fd).top) - Rd) / this.scaleY;
                  if ((dd > 1 || dd < -1) && (md == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Wd += dd, md ? md.scrollTop += dd : this.win.scrollBy(0, dd), Rd = -1;
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
        if (Od && !Od.empty)
          for (let Kd of this.state.facet(rO)) Kd(Od)
      }
      get themeClasses() {
        return yF + " " + (this.state.facet(HF) ? TF : bF) + " " + this.state.facet(qF)
      }
      updateAttrs() {
        let dd = VF(this, dm, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Od = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(CO) ? "true" : "false",
            class: "cm-content",
            style: `${Ed.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Od["aria-readonly"] = "true"), VF(this, Om, Od);
        let md = this.observer.ignore((() => {
          let md = Bd(this.contentDOM, this.contentAttrs, Od),
            Wd = Bd(this.dom, this.editorAttrs, dd);
          return md || Wd
        }));
        return this.editorAttrs = dd, this.contentAttrs = Od, md
      }
      showAnnouncements(dd) {
        let Od = !0;
        for (let md of dd)
          for (let dd of md.effects)
            if (dd.is(BF.announce)) {
              Od && (this.announceDOM.textContent = ""), Od = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = dd.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(tm);
        let dd = this.state.facet(BF.cspNonce);
        Fd.b.mount(this.root, this.styleModules.concat(gF).reverse(), dd ? {
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
            for (let Od = 0; Od < this.measureRequests.length; Od++)
              if (this.measureRequests[Od].key === dd.key) return void(this.measureRequests[Od] = dd);
          this.measureRequests.push(dd)
        }
      }
      plugin(dd) {
        let Od = this.pluginMap.get(dd);
        return (void 0 === Od || Od && Od.plugin != dd) && this.pluginMap.set(dd, Od = this.plugins.find((Od => Od.plugin == dd)) || null), Od && Od.update(this).value
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
      moveByChar(dd, Od, md) {
        return Zm(this, dd, Im(this, dd, Od, md))
      }
      moveByGroup(dd, Od) {
        return Zm(this, dd, Im(this, dd, Od, (Od => function(dd, Od, md) {
          let Fd = dd.state.charCategorizer(Od),
            Rd = Fd(md);
          return dd => {
            let Od = Fd(dd);
            return Rd == Wd.i.Space && (Rd = Od), Rd == Od
          }
        }(this, dd.head, Od))))
      }
      visualLineSide(dd, Od) {
        let md = this.bidiSpans(dd),
          Fd = this.textDirectionAt(dd.from),
          Rd = md[Od ? md.length - 1 : 0];
        return Wd.j.cursor(Rd.side(Od, Fd) + dd.from, Rd.forward(!Od, Fd) ? 1 : -1)
      }
      moveToLineBoundary(dd, Od) {
        return function(dd, Od, md, Fd) {
          let Rd = em(dd, Od.head, Od.assoc || -1),
            Xd = Fd && Rd.type == ud.Text && (dd.lineWrapping || Rd.widgetLineBreaks) ? dd.coordsAtPos(Od.assoc < 0 && Od.head > Rd.from ? Od.head - 1 : Od.head) : null;
          if (Xd) {
            let Od = dd.dom.getBoundingClientRect(),
              Fd = dd.textDirectionAt(Rd.from),
              Kd = dd.posAtCoords({
                x: md == (Fd == tO.LTR) ? Od.right - 1 : Od.left + 1,
                y: (Xd.top + Xd.bottom) / 2
              });
            if (null != Kd) return Wd.j.cursor(Kd, md ? -1 : 1)
          }
          return Wd.j.cursor(md ? Rd.to : Rd.from, md ? -1 : 1)
        }(this, dd, Od, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(dd, Od, md) {
        return Zm(this, dd, function(dd, Od, md, Fd) {
          let Rd = Od.head,
            Xd = md ? 1 : -1;
          if (Rd == (md ? dd.state.doc.length : 0)) return Wd.j.cursor(Rd, Od.assoc);
          let Kd, hd = Od.goalColumn,
            vd = dd.contentDOM.getBoundingClientRect(),
            Qd = dd.coordsAtPos(Rd, Od.assoc || ((Od.empty ? md : Od.head == Od.from) ? 1 : -1)),
            td = dd.documentTop;
          if (Qd) null == hd && (hd = Qd.left - vd.left), Kd = Xd < 0 ? Qd.top : Qd.bottom;
          else {
            let Od = dd.viewState.lineBlockAt(Rd);
            null == hd && (hd = Math.min(vd.right - vd.left, dd.defaultCharacterWidth * (Rd - Od.from))), Kd = (Xd < 0 ? Od.top : Od.bottom) + td
          }
          let od = vd.left + hd,
            Nd = dd.viewState.heightOracle.textHeight >> 1,
            qd = null !== Fd && void 0 !== Fd ? Fd : Nd;
          for (let Hd = 0;; Hd += Nd) {
            let Od = Kd + (qd + Hd) * Xd,
              Fd = fm(dd, {
                x: od,
                y: Od
              }, !1, Xd);
            if (md ? Od > vd.bottom : Od < vd.top) return Wd.j.cursor(Fd.pos, Fd.assoc);
            let Rd = dd.coordsAtPos(Fd.pos, Fd.assoc),
              Qd = Rd ? (Rd.top + Rd.bottom) / 2 : 0;
            if (!Rd || (md ? Qd > Kd : Qd < Kd)) return Wd.j.cursor(Fd.pos, Fd.assoc, void 0, hd)
          }
        }(this, dd, Od, md))
      }
      domAtPos(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(dd, Od)
      }
      posAtDOM(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(dd, Od)
      }
      posAtCoords(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let md = fm(this, dd, Od);
        return md && md.pos
      }
      posAndSideAtCoords(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), fm(this, dd, Od)
      }
      coordsAtPos(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let md = this.docView.coordsAt(dd, Od);
        if (!md || md.left == md.right) return md;
        let Wd = this.state.doc.lineAt(dd),
          Fd = this.bidiSpans(Wd);
        return kd(md, Fd[gO.find(Fd, dd - Wd.from, -1, Od)].dir == tO.LTR == Od > 0)
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
        return !this.state.facet(zO) || dd < this.viewport.from || dd > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(dd))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(dd) {
        if (dd.length > SF) return xO(dd.length);
        let Od, md = this.textDirectionAt(dd.from);
        for (let Fd of this.bidiCache)
          if (Fd.from == dd.from && Fd.dir == md && (Fd.fresh || wO(Fd.isolates, Od = Km(this, dd)))) return Fd.order;
        Od || (Od = Km(this, dd));
        let Wd = UO(dd.text, md, Od);
        return this.bidiCache.push(new uF(dd.from, dd.to, md, Od, !0, Wd)), Wd
      }
      get hasFocus() {
        var dd;
        return (this.dom.ownerDocument.hasFocus() || Ed.safari && (null === (dd = this.inputState) || void 0 === dd ? void 0 : dd.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          FO(this.contentDOM), this.docView.updateSelection()
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var md, Fd, Rd, Xd;
        return eO.of(new DO("number" == typeof dd ? Wd.j.cursor(dd) : dd, null !== (md = Od.y) && void 0 !== md ? md : "nearest", null !== (Fd = Od.x) && void 0 !== Fd ? Fd : "nearest", null !== (Rd = Od.yMargin) && void 0 !== Rd ? Rd : 5, null !== (Xd = Od.xMargin) && void 0 !== Xd ? Xd : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: dd,
          scrollLeft: Od
        } = this.scrollDOM, md = this.viewState.scrollAnchorAt(dd);
        return eO.of(new DO(Wd.j.cursor(md.from), "start", "start", md.top - dd, Od, !0))
      }
      setTabFocusMode(dd) {
        null == dd ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof dd ? this.inputState.tabFocusMode = dd ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + dd)
      }
      static domEventHandlers(dd) {
        return fO.define((() => ({})), {
          eventHandlers: dd
        })
      }
      static domEventObservers(dd) {
        return fO.define((() => ({})), {
          eventObservers: dd
        })
      }
      static theme(dd, Od) {
        let md = Fd.b.newName(),
          Wd = [qF.of(md), tm.of(YF(`.${md}`, dd))];
        return Od && Od.dark && Wd.push(HF.of(!0)), Wd
      }
      static baseTheme(dd) {
        return Wd.v.lowest(tm.of(YF("." + yF, dd, pF)))
      }
      static findFromDOM(dd) {
        var Od;
        let md = dd.querySelector(".cm-content"),
          Wd = md && Hm.get(md) || Hm.get(dd);
        return (null === (Od = null === Wd || void 0 === Wd ? void 0 : Wd.root) || void 0 === Od ? void 0 : Od.view) || null
      }
    }
    BF.styleModule = tm, BF.inputHandler = GO, BF.clipboardInputFilter = LO, BF.clipboardOutputFilter = PO, BF.scrollHandler = jO, BF.focusChangeEffect = nO, BF.perLineTextDirection = zO, BF.exceptionSink = AO, BF.updateListener = rO, BF.editable = CO, BF.mouseSelectionStyle = iO, BF.dragMovesSelection = VO, BF.clickAddsSelectionRange = uO, BF.aW = mm, BF.blockWrappers = Wm, BF.outerDecorations = Fm, BF.atomicRanges = Rm, BF.bidiIsolatedRanges = Xm, BF.cursorScrollMargin = Wd.p.define({
      combine: dd => {
        let Od = 5,
          md = 5;
        for (let Wd of dd) "number" == typeof Wd ? Od = md = Wd : ({
          x: Od,
          y: md
        } = Wd);
        return {
          x: Od,
          y: md
        }
      }
    }), BF.scrollMargins = hm, BF.darkTheme = HF, BF.cspNonce = Wd.p.define({
      combine: dd => dd.length ? dd[0] : ""
    }), BF.contentAttributes = Om, BF.editorAttributes = dm, BF.lineWrapping = BF.contentAttributes.of({
      class: "cm-lineWrapping"
    }), BF.announce = Wd.I.define();
    const SF = 4096,
      sF = {};
    class uF {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.from = dd, this.to = Od, this.dir = md, this.isolates = Wd, this.fresh = Fd, this.order = Rd
      }
      static update(dd, Od) {
        if (Od.empty && !dd.some((dd => dd.fresh))) return dd;
        let md = [],
          Wd = dd.length ? dd[dd.length - 1].dir : tO.LTR;
        for (let Fd = Math.max(0, dd.length - 10); Fd < dd.length; Fd++) {
          let Rd = dd[Fd];
          Rd.dir != Wd || Od.touchesRange(Rd.from, Rd.to) || md.push(new uF(Od.mapPos(Rd.from, 1), Od.mapPos(Rd.to, -1), Rd.dir, Rd.isolates, !1, Rd.order))
        }
        return md
      }
    }

    function VF(dd, Od, md) {
      for (let Wd = dd.state.facet(Od), Fd = Wd.length - 1; Fd >= 0; Fd--) {
        let Od = Wd[Fd],
          Rd = "function" == typeof Od ? Od(dd) : Od;
        Rd && Jd(Rd, md)
      }
      return md
    }
    const iF = Ed.mac ? "mac" : Ed.windows ? "win" : Ed.linux ? "linux" : "key";

    function AF(dd, Od, md) {
      return Od.altKey && (dd = "Alt-" + dd), Od.ctrlKey && (dd = "Ctrl-" + dd), Od.metaKey && (dd = "Meta-" + dd), !1 !== md && Od.shiftKey && (dd = "Shift-" + dd), dd
    }
    const rF = Wd.v.default(BF.domEventHandlers({
        keydown: (dd, Od) => DF(LF(Od.state), dd, Od, "editor")
      })),
      GF = Wd.p.define({
        enables: rF
      }),
      nF = new WeakMap;

    function LF(dd) {
      let Od = dd.facet(GF),
        md = nF.get(Od);
      return md || nF.set(Od, md = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iF,
          md = Object.create(null),
          Wd = Object.create(null),
          Fd = (dd, Od) => {
            let md = Wd[dd];
            if (null == md) Wd[dd] = Od;
            else if (md != Od) throw new Error("Key binding " + dd + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Rd = (dd, Wd, Rd, Xd, Kd) => {
            var hd, vd;
            let Qd = md[dd] || (md[dd] = Object.create(null)),
              td = Wd.split(/ (?!$)/).map((dd => function(dd, Od) {
                const md = dd.split(/-(?!$)/);
                let Wd, Fd, Rd, Xd, Kd = md[md.length - 1];
                "Space" == Kd && (Kd = " ");
                for (let hd = 0; hd < md.length - 1; ++hd) {
                  const dd = md[hd];
                  if (/^(cmd|meta|m)$/i.test(dd)) Xd = !0;
                  else if (/^a(lt)?$/i.test(dd)) Wd = !0;
                  else if (/^(c|ctrl|control)$/i.test(dd)) Fd = !0;
                  else if (/^s(hift)?$/i.test(dd)) Rd = !0;
                  else {
                    if (!/^mod$/i.test(dd)) throw new Error("Unrecognized modifier name: " + dd);
                    "mac" == Od ? Xd = !0 : Fd = !0
                  }
                }
                return Wd && (Kd = "Alt-" + Kd), Fd && (Kd = "Ctrl-" + Kd), Xd && (Kd = "Meta-" + Kd), Rd && (Kd = "Shift-" + Kd), Kd
              }(dd, Od)));
            for (let Od = 1; Od < td.length; Od++) {
              let md = td.slice(0, Od).join(" ");
              Fd(md, !0), Qd[md] || (Qd[md] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Od => {
                  let Wd = zF = {
                    view: Od,
                    prefix: md,
                    scope: dd
                  };
                  return setTimeout((() => {
                    zF == Wd && (zF = null)
                  }), cF), !0
                }]
              })
            }
            let od = td.join(" ");
            Fd(od, !1);
            let Nd = Qd[od] || (Qd[od] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (vd = null === (hd = Qd._any) || void 0 === hd ? void 0 : hd.run) || void 0 === vd ? void 0 : vd.slice()) || []
            });
            Rd && Nd.run.push(Rd), Xd && (Nd.preventDefault = !0), Kd && (Nd.stopPropagation = !0)
          };
        for (let Xd of dd) {
          let dd = Xd.scope ? Xd.scope.split(" ") : ["editor"];
          if (Xd.any)
            for (let Od of dd) {
              let dd = md[Od] || (md[Od] = Object.create(null));
              dd._any || (dd._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Wd
              } = Xd;
              for (let Od in dd) dd[Od].run.push((dd => Wd(dd, jF)))
            }
          let Wd = Xd[Od] || Xd.key;
          if (Wd)
            for (let Od of dd) Rd(Od, Wd, Xd.run, Xd.preventDefault, Xd.stopPropagation), Xd.shift && Rd(Od, "Shift-" + Wd, Xd.shift, Xd.preventDefault, Xd.stopPropagation)
        }
        return md
      }(Od.reduce(((dd, Od) => dd.concat(Od)), []))), md
    }

    function PF(dd, Od, md) {
      return DF(LF(dd.state), Od, dd, md)
    }
    let zF = null;
    const cF = 4e3;
    let jF = null;

    function DF(dd, Od, md, Fd) {
      jF = Od;
      let vd = function(dd) {
          var Od = !(Kd && dd.metaKey && dd.shiftKey && !dd.ctrlKey && !dd.altKey || hd && dd.shiftKey && dd.key && 1 == dd.key.length || "Unidentified" == dd.key) && dd.key || (dd.shiftKey ? Xd : Rd)[dd.keyCode] || dd.key || "Unidentified";
          return "Esc" == Od && (Od = "Escape"), "Del" == Od && (Od = "Delete"), "Left" == Od && (Od = "ArrowLeft"), "Up" == Od && (Od = "ArrowUp"), "Right" == Od && (Od = "ArrowRight"), "Down" == Od && (Od = "ArrowDown"), Od
        }(Od),
        Qd = (0, Wd.S)(vd, 0),
        td = (0, Wd.T)(Qd) == vd.length && " " != vd,
        od = "",
        Nd = !1,
        qd = !1,
        Hd = !1;
      zF && zF.view == md && zF.scope == Fd && (od = zF.prefix + " ", yW.indexOf(Od.keyCode) < 0 && (qd = !0, zF = null));
      let yd, bd, Td = new Set,
        pd = dd => {
          if (dd) {
            for (let Od of dd.run)
              if (!Td.has(Od) && (Td.add(Od), Od(md))) return dd.stopPropagation && (Hd = !0), !0;
            dd.preventDefault && (dd.stopPropagation && (Hd = !0), qd = !0)
          }
          return !1
        },
        Yd = dd[Fd];
      return Yd && (pd(Yd[od + AF(vd, Od, !td)]) ? Nd = !0 : !td || !(Od.altKey || Od.metaKey || Od.ctrlKey) || Ed.windows && Od.ctrlKey && Od.altKey || Ed.mac && Od.altKey && !Od.ctrlKey && !Od.metaKey || !(yd = Rd[Od.keyCode]) || yd == vd ? td && Od.shiftKey && pd(Yd[od + AF(vd, Od, !0)]) && (Nd = !0) : (pd(Yd[od + AF(yd, Od, !0)]) || Od.shiftKey && (bd = Xd[Od.keyCode]) != vd && bd != yd && pd(Yd[od + AF(bd, Od, !1)])) && (Nd = !0), !Nd && pd(Yd._any) && (Nd = !0)), qd && (Nd = !0), Nd && Hd && Od.stopPropagation(), jF = null, Nd
    }
    class eF {
      constructor(dd, Od, md, Wd, Fd) {
        this.className = dd, this.left = Od, this.top = md, this.width = Wd, this.height = Fd
      }
      draw() {
        let dd = document.createElement("div");
        return dd.className = this.className, this.adjust(dd), dd
      }
      update(dd, Od) {
        return Od.className == this.className && (this.adjust(dd), !0)
      }
      adjust(dd) {
        dd.style.left = this.left + "px", dd.style.top = this.top + "px", null != this.width && (dd.style.width = this.width + "px"), dd.style.height = this.height + "px"
      }
      eq(dd) {
        return this.left == dd.left && this.top == dd.top && this.width == dd.width && this.height == dd.height && this.className == dd.className
      }
      static forRange(dd, Od, md) {
        if (md.empty) {
          let Wd = dd.coordsAtPos(md.head, md.assoc || 1);
          if (!Wd) return [];
          let Fd = IF(dd);
          return [new eF(Od, Wd.left - Fd.left, Wd.top - Fd.top, null, Wd.bottom - Wd.top)]
        }
        return function(dd, Od, md) {
          if (md.to <= dd.viewport.from || md.from >= dd.viewport.to) return [];
          let Wd = Math.max(md.from, dd.viewport.from),
            Fd = Math.min(md.to, dd.viewport.to),
            Rd = dd.textDirection == tO.LTR,
            Xd = dd.contentDOM,
            Kd = Xd.getBoundingClientRect(),
            hd = IF(dd),
            vd = Xd.querySelector(".cm-line"),
            Qd = vd && window.getComputedStyle(vd),
            td = Kd.left + (Qd ? parseInt(Qd.paddingLeft) + Math.min(0, parseInt(Qd.textIndent)) : 0),
            od = Kd.right - (Qd ? parseInt(Qd.paddingRight) : 0),
            Nd = em(dd, Wd, 1),
            qd = em(dd, Fd, -1),
            Hd = Nd.type == ud.Text ? Nd : null,
            yd = qd.type == ud.Text ? qd : null;
          Hd && (dd.lineWrapping || Nd.widgetLineBreaks) && (Hd = lF(dd, Wd, 1, Hd));
          yd && (dd.lineWrapping || qd.widgetLineBreaks) && (yd = lF(dd, Fd, -1, yd));
          if (Hd && yd && Hd.from == yd.from && Hd.to == yd.to) return Td(pd(md.from, md.to, Hd));
          {
            let Od = Hd ? pd(md.from, null, Hd) : Yd(Nd, !1),
              Wd = yd ? pd(null, md.to, yd) : Yd(qd, !0),
              Fd = [];
            return (Hd || Nd).to < (yd || qd).from - (Hd && yd ? 1 : 0) || Nd.widgetLineBreaks > 1 && Od.bottom + dd.defaultLineHeight / 2 < Wd.top ? Fd.push(bd(td, Od.bottom, od, Wd.top)) : Od.bottom < Wd.top && dd.elementAtHeight((Od.bottom + Wd.top) / 2).type == ud.Text && (Od.bottom = Wd.top = (Od.bottom + Wd.top) / 2), Td(Od).concat(Fd).concat(Td(Wd))
          }

          function bd(dd, md, Wd, Fd) {
            return new eF(Od, dd - hd.left, md - hd.top, Math.max(0, Wd - dd), Fd - md)
          }

          function Td(dd) {
            let {
              top: Od,
              bottom: md,
              horizontal: Wd
            } = dd, Fd = [];
            for (let Rd = 0; Rd < Wd.length; Rd += 2) Fd.push(bd(Wd[Rd], Od, Wd[Rd + 1], md));
            return Fd
          }

          function pd(Od, md, Wd) {
            let Fd = 1e9,
              Xd = -1e9,
              Kd = [];

            function hd(Od, md, hd, vd, Qd) {
              let Nd = dd.coordsAtPos(Od, Od == Wd.to ? -2 : 2),
                qd = dd.coordsAtPos(hd, hd == Wd.from ? 2 : -2);
              Nd && qd && (Fd = Math.min(Nd.top, qd.top, Fd), Xd = Math.max(Nd.bottom, qd.bottom, Xd), Qd == tO.LTR ? Kd.push(Rd && md ? td : Nd.left, Rd && vd ? od : qd.right) : Kd.push(!Rd && vd ? td : qd.left, !Rd && md ? od : Nd.right))
            }
            let vd = null !== Od && void 0 !== Od ? Od : Wd.from,
              Qd = null !== md && void 0 !== md ? md : Wd.to;
            for (let Rd of dd.Mdd)
              if (Rd.to > vd && Rd.from < Qd)
                for (let Wd = Math.max(Rd.from, vd), Fd = Math.min(Rd.to, Qd);;) {
                  let Rd = dd.state.doc.lineAt(Wd);
                  for (let Xd of dd.bidiSpans(Rd)) {
                    let dd = Xd.from + Rd.from,
                      Kd = Xd.to + Rd.from;
                    if (dd >= Fd) break;
                    Kd > Wd && hd(Math.max(dd, Wd), null == Od && dd <= vd, Math.min(Kd, Fd), null == md && Kd >= Qd, Xd.dir)
                  }
                  if (Wd = Rd.to + 1, Wd >= Fd) break
                }
            return 0 == Kd.length && hd(vd, null == Od, Qd, null == md, dd.textDirection), {
              top: Fd,
              bottom: Xd,
              horizontal: Kd
            }
          }

          function Yd(dd, Od) {
            let md = Kd.top + (Od ? dd.top : dd.bottom);
            return {
              top: md,
              bottom: md,
              horizontal: []
            }
          }
        }(dd, Od, md)
      }
    }

    function IF(dd) {
      let Od = dd.scrollDOM.getBoundingClientRect();
      return {
        left: (dd.textDirection == tO.LTR ? Od.left : Od.right - dd.scrollDOM.clientWidth * dd.scaleX) - dd.scrollDOM.scrollLeft * dd.scaleX,
        top: Od.top - dd.scrollDOM.scrollTop * dd.scaleY
      }
    }

    function lF(dd, Od, md, Wd) {
      let Fd = dd.coordsAtPos(Od, 2 * md);
      if (!Fd) return Wd;
      let Rd = dd.dom.getBoundingClientRect(),
        Xd = (Fd.top + Fd.bottom) / 2,
        Kd = dd.posAtCoords({
          x: Rd.left + 1,
          y: Xd
        }),
        hd = dd.posAtCoords({
          x: Rd.right - 1,
          y: Xd
        });
      return null == Kd || null == hd ? Wd : {
        from: Math.max(Wd.from, Math.min(Kd, hd)),
        to: Math.min(Wd.to, Math.max(Kd, hd))
      }
    }
    class CF {
      constructor(dd, Od) {
        this.view = dd, this.layer = Od, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = dd.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Od.above && this.dom.classList.add("cm-layer-above"), Od.class && this.dom.classList.add(Od.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(dd.state), dd.requestMeasure(this.measureReq), Od.mount && Od.mount(this.dom, dd)
      }
      update(dd) {
        dd.startState.facet(ZF) != dd.state.facet(ZF) && this.setOrder(dd.state), (this.layer.update(dd, this.dom) || dd.geometryChanged) && (this.scale(), dd.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(dd) {
        !1 !== this.layer.updateOnDocViewUpdate && dd.requestMeasure(this.measureReq)
      }
      setOrder(dd) {
        let Od = 0,
          md = dd.facet(ZF);
        for (; Od < md.length && md[Od] != this.layer;) Od++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Od)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: dd,
          scaleY: Od
        } = this.view;
        dd == this.scaleX && Od == this.scaleY || (this.scaleX = dd, this.scaleY = Od, this.dom.style.transform = `scale(${1/dd}, ${1/Od})`)
      }
      draw(dd) {
        if (dd.length != this.drawn.length || dd.some(((dd, Od) => {
            return md = dd, Wd = this.drawn[Od], !(md.constructor == Wd.constructor && md.eq(Wd));
            var md, Wd
          }))) {
          let Od = this.dom.firstChild,
            md = 0;
          for (let Wd of dd) Wd.update && Od && Wd.constructor && this.drawn[md].constructor && Wd.update(Od, this.drawn[md]) ? (Od = Od.nextSibling, md++) : this.dom.insertBefore(Wd.draw(), Od);
          for (; Od;) {
            let dd = Od.nextSibling;
            Od.remove(), Od = dd
          }
          this.drawn = dd, Ed.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const ZF = Wd.p.define();

    function kF(dd) {
      return [fO.define((Od => new CF(Od, dd))), ZF.of(dd)]
    }
    const fF = Wd.p.define({
      combine: dd => (0, Wd.W)(dd, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (dd, Od) => Math.min(dd, Od),
        drawRangeCursor: (dd, Od) => dd || Od
      })
    });

    function MF() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fF.of(dd), OR, WR, FR, cO.of(!0)]
    }

    function dR(dd) {
      return dd.startState.facet(fF) != dd.state.facet(fF)
    }
    const OR = kF({
      above: !0,
      markers(dd) {
        let {
          state: Od
        } = dd, md = Od.facet(fF), Fd = [];
        for (let Rd of Od.selection.By) {
          let Xd = Rd == Od.selection.main;
          if (Rd.empty || md.drawRangeCursor && !(Xd && Ed.ios && md.iosSelectionHandles)) {
            let Od = Xd ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              md = Rd.empty ? Rd : Wd.j.cursor(Rd.head, Rd.assoc);
            for (let Wd of eF.forRange(dd, Od, md)) Fd.push(Wd)
          }
        }
        return Fd
      },
      update(dd, Od) {
        dd.transactions.some((dd => dd.selection)) && (Od.style.animationName = "cm-blink" == Od.style.animationName ? "cm-blink2" : "cm-blink");
        let md = dR(dd);
        return md && mR(dd.state, Od), dd.docChanged || dd.selectionSet || md
      },
      mount(dd, Od) {
        mR(Od.state, dd)
      },
      class: "cm-cursorLayer"
    });

    function mR(dd, Od) {
      Od.style.animationDuration = dd.facet(fF).cursorBlinkRate + "ms"
    }
    const WR = kF({
        above: !1,
        markers(dd) {
          let Od = [],
            {
              main: md,
              By: Fd
            } = dd.state.selection;
          for (let Wd of Fd)
            if (!Wd.empty)
              for (let md of eF.forRange(dd, "cm-selectionBackground", Wd)) Od.push(md);
          if (Ed.ios && !md.empty && dd.state.facet(fF).iosSelectionHandles) {
            for (let Fd of eF.forRange(dd, "cm-selectionHandle cm-selectionHandle-start", Wd.j.cursor(md.from, 1))) Od.push(Fd);
            for (let Fd of eF.forRange(dd, "cm-selectionHandle cm-selectionHandle-end", Wd.j.cursor(md.to, 1))) Od.push(Fd)
          }
          return Od
        },
        update: (dd, Od) => dd.docChanged || dd.selectionSet || dd.viewportChanged || dR(dd),
        class: "cm-selectionLayer"
      }),
      FR = Wd.v.highest(BF.theme({
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
      RR = Wd.I.define({
        map: (dd, Od) => null == dd ? null : Od.mapPos(dd)
      }),
      XR = Wd.M.define({
        create: () => null,
        update: (dd, Od) => (null != dd && (dd = Od.changes.mapPos(dd)), Od.effects.reduce(((dd, Od) => Od.is(RR) ? Od.value : dd), dd))
      }),
      KR = fO.fromClass(class {
        constructor(dd) {
          this.view = dd, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(dd) {
          var Od;
          let md = dd.state.field(XR);
          null == md ? null != this.cursor && (null === (Od = this.cursor) || void 0 === Od || Od.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (dd.startState.field(XR) != md || dd.docChanged || dd.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: dd
          } = this, Od = dd.state.field(XR), md = null != Od && dd.coordsAtPos(Od);
          if (!md) return null;
          let Wd = dd.scrollDOM.getBoundingClientRect();
          return {
            left: md.left - Wd.left + dd.scrollDOM.scrollLeft * dd.scaleX,
            top: md.top - Wd.top + dd.scrollDOM.scrollTop * dd.scaleY,
            height: md.bottom - md.top
          }
        }
        drawCursor(dd) {
          if (this.cursor) {
            let {
              scaleX: Od,
              scaleY: md
            } = this.view;
            dd ? (this.cursor.style.left = dd.left / Od + "px", this.cursor.style.top = dd.top / md + "px", this.cursor.style.height = dd.height / md + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(dd) {
          this.view.state.field(XR) != dd && this.view.dispatch({
            effects: RR.of(dd)
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

    function hR() {
      return [XR, KR]
    }

    function vR(dd, Od, md, Wd, Fd) {
      Od.lastIndex = 0;
      for (let Rd, Xd = dd.iterRange(md, Wd), Kd = md; !Xd.next().done; Kd += Xd.value.length)
        if (!Xd.lineBreak)
          for (; Rd = Od.exec(Xd.value);) Fd(Kd + Rd.index, Rd)
    }
    class QR {
      constructor(dd) {
        const {
          regexp: Od,
          decoration: md,
          decorate: Wd,
          boundary: Fd,
          maxLength: Rd = 1e3
        } = dd;
        if (!Od.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Od, Wd) this.addMatch = (dd, Od, md, Fd) => Wd(Fd, md, md + dd[0].length, dd, Od);
        else if ("function" == typeof md) this.addMatch = (dd, Od, Wd, Fd) => {
          let Rd = md(dd, Od, Wd);
          Rd && Fd(Wd, Wd + dd[0].length, Rd)
        };
        else {
          if (!md) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (dd, Od, Wd, Fd) => Fd(Wd, Wd + dd[0].length, md)
        }
        this.boundary = Fd, this.maxLength = Rd
      }
      createDeco(dd) {
        let Od = new Wd.z,
          md = Od.add.bind(Od);
        for (let {
            from: Wd,
            to: Fd
          }
          of
          function(dd, Od) {
            let md = dd.Mdd;
            if (1 == md.length && md[0].from == dd.viewport.from && md[0].to == dd.viewport.to) return md;
            let Wd = [];
            for (let {
                from: Fd,
                to: Rd
              }
              of md) Fd = Math.max(dd.state.doc.lineAt(Fd).from, Fd - Od), Rd = Math.min(dd.state.doc.lineAt(Rd).to, Rd + Od), Wd.length && Wd[Wd.length - 1].to >= Fd ? Wd[Wd.length - 1].to = Rd : Wd.push({
              from: Fd,
              to: Rd
            });
            return Wd
          }(dd, this.maxLength)) vR(dd.state.doc, this.regexp, Wd, Fd, ((Od, Wd) => this.addMatch(Wd, dd, Od, md)));
        return Od.finish()
      }
      updateDeco(dd, Od) {
        let md = 1e9,
          Wd = -1;
        return dd.docChanged && dd.changes.iterChanges(((Od, Fd, Rd, Xd) => {
          Xd >= dd.view.viewport.from && Rd <= dd.view.viewport.to && (md = Math.min(Rd, md), Wd = Math.max(Xd, Wd))
        })), dd.viewportMoved || Wd - md > 1e3 ? this.createDeco(dd.view) : Wd > -1 ? this.updateRange(dd.view, Od.map(dd.changes), md, Wd) : Od
      }
      updateRange(dd, Od, md, Wd) {
        for (let Fd of dd.Mdd) {
          let Rd = Math.max(Fd.from, md),
            Xd = Math.min(Fd.to, Wd);
          if (Xd >= Rd) {
            let md = dd.state.doc.lineAt(Rd),
              Wd = md.to < Xd ? dd.state.doc.lineAt(Xd) : md,
              Kd = Math.max(Fd.from, md.from),
              hd = Math.min(Fd.to, Wd.to);
            if (this.boundary) {
              for (; Rd > md.from; Rd--)
                if (this.boundary.test(md.text[Rd - 1 - md.from])) {
                  Kd = Rd;
                  break
                } for (; Xd < Wd.to; Xd++)
                if (this.boundary.test(Wd.text[Xd - Wd.from])) {
                  hd = Xd;
                  break
                }
            }
            let vd, Qd = [],
              td = (dd, Od, md) => Qd.push(md.range(dd, Od));
            if (md == Wd)
              for (this.regexp.lastIndex = Kd - md.from;
                (vd = this.regexp.exec(md.text)) && vd.index < hd - md.from;) this.addMatch(vd, dd, vd.index + md.from, td);
            else vR(dd.state.doc, this.regexp, Kd, hd, ((Od, md) => this.addMatch(md, dd, Od, td)));
            Od = Od.update({
              filterFrom: Kd,
              filterTo: hd,
              filter: (dd, Od) => dd < Kd || Od > hd,
              add: Qd
            })
          }
        }
        return Od
      }
    }
    const tR = null != /x/.unicode ? "gu" : "g",
      oR = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", tR),
      NR = {
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
    let qR = null;
    const HR = Wd.p.define({
      combine(dd) {
        let Od = (0, Wd.W)(dd, {
          render: null,
          specialChars: oR,
          addSpecialChars: null
        });
        return (Od.replaceTabs = ! function() {
          var dd;
          if (null == qR && "undefined" != typeof document && document.body) {
            let Od = document.body.style;
            qR = null != (null !== (dd = Od.tabSize) && void 0 !== dd ? dd : Od.MozTabSize)
          }
          return qR || !1
        }()) && (Od.specialChars = new RegExp("\t|" + Od.specialChars.source, tR)), Od.addSpecialChars && (Od.specialChars = new RegExp(Od.specialChars.source + "|" + Od.addSpecialChars.source, tR)), Od
      }
    });

    function yR() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [HR.of(dd), bR || (bR = fO.fromClass(class {
        constructor(dd) {
          this.view = dd, this.aW = Vd.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(dd.state.facet(HR)), this.aW = this.decorator.createDeco(dd)
        }
        makeDecorator(dd) {
          return new QR({
            regexp: dd.specialChars,
            decoration: (Od, md, Fd) => {
              let {
                doc: Rd
              } = md.state, Xd = (0, Wd.S)(Od[0], 0);
              if (9 == Xd) {
                let dd = Rd.lineAt(Fd),
                  Od = md.state.tabSize,
                  Xd = (0, Wd.Y)(dd.text, Od, Fd - dd.from);
                return Vd.replace({
                  widget: new pR((Od - Xd % Od) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Xd] || (this.decorationCache[Xd] = Vd.replace({
                widget: new TR(dd, Xd)
              }))
            },
            boundary: dd.replaceTabs ? void 0 : /[^]/
          })
        }
        update(dd) {
          let Od = dd.state.facet(HR);
          dd.startState.facet(HR) != Od ? (this.decorator = this.makeDecorator(Od), this.aW = this.decorator.createDeco(dd.view)) : this.aW = this.decorator.updateDeco(dd, this.aW)
        }
      }, {
        aW: dd => dd.aW
      }))]
    }
    let bR = null;
    class TR extends sd {
      constructor(dd, Od) {
        super(), this.options = dd, this.code = Od
      }
      eq(dd) {
        return dd.code == this.code
      }
      toDOM(dd) {
        let Od = function(dd) {
            return dd >= 32 ? "\u2022" : 10 == dd ? "\u2424" : String.fromCharCode(9216 + dd)
          }(this.code),
          md = dd.state.phrase("Control character") + " " + (NR[this.code] || "0x" + this.code.toString(16)),
          Wd = this.options.render && this.options.render(this.code, md, Od);
        if (Wd) return Wd;
        let Fd = document.createElement("span");
        return Fd.textContent = Od, Fd.title = md, Fd.setAttribute("aria-label", md), Fd.className = "cm-specialChar", Fd
      }
      ignoreEvent() {
        return !1
      }
    }
    class pR extends sd {
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

    function YR() {
      return wR
    }
    const gR = Vd.line({
        class: "cm-activeLine"
      }),
      wR = fO.fromClass(class {
        constructor(dd) {
          this.aW = this.getDeco(dd)
        }
        update(dd) {
          (dd.docChanged || dd.selectionSet) && (this.aW = this.getDeco(dd.view))
        }
        getDeco(dd) {
          let Od = -1,
            md = [];
          for (let Wd of dd.state.selection.By) {
            let Fd = dd.lineBlockAt(Wd.head);
            Fd.from > Od && (md.push(gR.range(Fd.from)), Od = Fd.from)
          }
          return Vd.set(md)
        }
      }, {
        aW: dd => dd.aW
      });
    class aR extends sd {
      constructor(dd) {
        super(), this.content = dd
      }
      toDOM(dd) {
        let Od = document.createElement("span");
        return Od.className = "cm-placeholder", Od.style.pointerEvents = "none", Od.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(dd) : this.content.cloneNode(!0)), Od.setAttribute("aria-hidden", "true"), Od
      }
      coordsAt(dd) {
        let Od = dd.firstChild ? Dd(dd.firstChild) : [];
        if (!Od.length) return null;
        let md = window.getComputedStyle(dd.parentNode),
          Wd = kd(Od[0], "rtl" != md.direction),
          Fd = parseInt(md.lineHeight);
        return Wd.bottom - Wd.top > 1.5 * Fd ? {
          left: Wd.left,
          right: Wd.right,
          top: Wd.top,
          bottom: Wd.top + Fd
        } : Wd
      }
      ignoreEvent() {
        return !1
      }
    }

    function ER(dd) {
      let Od = fO.fromClass(class {
        constructor(Od) {
          this.view = Od, this.placeholder = dd ? Vd.set([Vd.widget({
            widget: new aR(dd),
            side: 1
          }).range(0)]) : Vd.none
        }
        get aW() {
          return this.view.state.doc.length ? Vd.none : this.placeholder
        }
      }, {
        aW: dd => dd.aW
      });
      return "string" == typeof dd ? [Od, BF.contentAttributes.of({
        "aria-placeholder": dd
      })] : Od
    }
    const JR = 2e3;

    function UR(dd, Od) {
      let md = dd.posAtCoords({
          x: Od.clientX,
          y: Od.clientY
        }, !1),
        Fd = dd.state.doc.lineAt(md),
        Rd = md - Fd.from,
        Xd = Rd > JR ? -1 : Rd == Fd.length ? function(dd, Od) {
          let md = dd.coordsAtPos(dd.viewport.from);
          return md ? Math.round(Math.abs((md.left - Od) / dd.defaultCharacterWidth)) : -1
        }(dd, Od.clientX) : (0, Wd.Y)(Fd.text, dd.state.tabSize, md - Fd.from);
      return {
        line: Fd.number,
        col: Xd,
        off: Rd
      }
    }

    function xR(dd, Od) {
      let md = UR(dd, Od),
        Fd = dd.state.selection;
      return md ? {
        update(dd) {
          if (dd.docChanged) {
            let Od = dd.changes.mapPos(dd.startState.doc.line(md.line).from),
              Wd = dd.state.doc.lineAt(Od);
            md = {
              line: Wd.number,
              col: md.col,
              off: Math.min(md.off, Wd.length)
            }, Fd = Fd.map(dd.changes)
          }
        },
        get(Od, Rd, Xd) {
          let Kd = UR(dd, Od);
          if (!Kd) return Fd;
          let hd = function(dd, Od, md) {
            let Fd = Math.min(Od.line, md.line),
              Rd = Math.max(Od.line, md.line),
              Xd = [];
            if (Od.off > JR || md.off > JR || Od.col < 0 || md.col < 0) {
              let Kd = Math.min(Od.off, md.off),
                hd = Math.max(Od.off, md.off);
              for (let Od = Fd; Od <= Rd; Od++) {
                let md = dd.doc.line(Od);
                md.length <= hd && Xd.push(Wd.j.range(md.from + Kd, md.to + hd))
              }
            } else {
              let Kd = Math.min(Od.col, md.col),
                hd = Math.max(Od.col, md.col);
              for (let Od = Fd; Od <= Rd; Od++) {
                let md = dd.doc.line(Od),
                  Fd = (0, Wd.bb)(md.text, Kd, dd.tabSize, !0);
                if (Fd < 0) Xd.push(Wd.j.cursor(md.to));
                else {
                  let Od = (0, Wd.bb)(md.text, hd, dd.tabSize);
                  Xd.push(Wd.j.range(md.from + Fd, md.from + Od))
                }
              }
            }
            return Xd
          }(dd.state, md, Kd);
          return hd.length ? Xd ? Wd.j.create(hd.concat(Fd.By)) : Wd.j.create(hd) : Fd
        }
      } : null
    }

    function BR(dd) {
      let Od = (null === dd || void 0 === dd ? void 0 : dd.eventFilter) || (dd => dd.altKey && 0 == dd.button);
      return BF.mouseSelectionStyle.of(((dd, md) => Od(md) ? xR(dd, md) : null))
    }
    const SR = {
        Alt: [18, dd => !!dd.altKey],
        Control: [17, dd => !!dd.ctrlKey],
        Shift: [16, dd => !!dd.shiftKey],
        Meta: [91, dd => !!dd.metaKey]
      },
      sR = {
        style: "cursor: crosshair"
      };

    function uR() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Od, md] = SR[dd.key || "Alt"],
        Wd = fO.fromClass(class {
          constructor(dd) {
            this.view = dd, this.isDown = !1
          }
          set(dd) {
            this.isDown != dd && (this.isDown = dd, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(dd) {
              this.set(dd.keyCode == Od || md(dd))
            },
            keyup(dd) {
              dd.keyCode != Od && md(dd) || this.set(!1)
            },
            mousemove(dd) {
              this.set(md(dd))
            }
          }
        });
      return [Wd, BF.contentAttributes.of((dd => {
        var Od;
        return (null === (Od = dd.plugin(Wd)) || void 0 === Od ? void 0 : Od.isDown) ? sR : null
      }))]
    }
    const VR = "-10000px";
    class iR {
      constructor(dd, Od, md, Wd) {
        this.facet = Od, this.createTooltipView = md, this.removeTooltipView = Wd, this.input = dd.state.facet(Od), this.tooltips = this.input.filter((dd => dd));
        let Fd = null;
        this.tooltipViews = this.tooltips.map((dd => Fd = md(dd, Fd)))
      }
      update(dd, Od) {
        var md;
        let Wd = dd.state.facet(this.facet),
          Fd = Wd.filter((dd => dd));
        if (Wd === this.input) {
          for (let Od of this.tooltipViews) Od.update && Od.update(dd);
          return !1
        }
        let Rd = [],
          Xd = Od ? [] : null;
        for (let Kd = 0; Kd < Fd.length; Kd++) {
          let md = Fd[Kd],
            Wd = -1;
          if (md) {
            for (let dd = 0; dd < this.tooltips.length; dd++) {
              let Od = this.tooltips[dd];
              Od && Od.create == md.create && (Wd = dd)
            }
            if (Wd < 0) Rd[Kd] = this.createTooltipView(md, Kd ? Rd[Kd - 1] : null), Xd && (Xd[Kd] = !!md.above);
            else {
              let md = Rd[Kd] = this.tooltipViews[Wd];
              Xd && (Xd[Kd] = Od[Wd]), md.update && md.update(dd)
            }
          }
        }
        for (let Kd of this.tooltipViews) Rd.indexOf(Kd) < 0 && (this.removeTooltipView(Kd), null === (md = Kd.destroy) || void 0 === md || md.call(Kd));
        return Od && (Xd.forEach(((dd, md) => Od[md] = dd)), Od.length = Xd.length), this.input = Wd, this.tooltips = Fd, this.tooltipViews = Rd, !0
      }
    }

    function AR(dd) {
      let Od = dd.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Od.clientHeight,
        right: Od.clientWidth
      }
    }
    const rR = Wd.p.define({
        combine: dd => {
          var Od, md, Wd;
          return {
            position: Ed.ios ? "absolute" : (null === (Od = dd.find((dd => dd.position))) || void 0 === Od ? void 0 : Od.position) || "fixed",
            parent: (null === (md = dd.find((dd => dd.parent))) || void 0 === md ? void 0 : md.parent) || null,
            tooltipSpace: (null === (Wd = dd.find((dd => dd.tooltipSpace))) || void 0 === Wd ? void 0 : Wd.tooltipSpace) || AR
          }
        }
      }),
      GR = new WeakMap,
      nR = fO.fromClass(class {
        constructor(dd) {
          this.view = dd, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Od = dd.state.facet(rR);
          this.position = Od.position, this.parent = Od.parent, this.classes = dd.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new iR(dd, cR, ((dd, Od) => this.createTooltip(dd, Od)), (dd => {
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
          let Od = this.manager.update(dd, this.above);
          Od && this.observeIntersection();
          let md = Od || dd.geometryChanged,
            Wd = dd.state.facet(rR);
          if (Wd.position != this.position && !this.madeAbsolute) {
            this.position = Wd.position;
            for (let dd of this.manager.tooltipViews) dd.dom.style.position = this.position;
            md = !0
          }
          if (Wd.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Wd.parent, this.createContainer();
            for (let dd of this.manager.tooltipViews) this.container.appendChild(dd.dom);
            md = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          md && this.maybeMeasure()
        }
        createTooltip(dd, Od) {
          let md = dd.create(this.view),
            Wd = Od ? Od.dom : null;
          if (md.dom.classList.add("cm-tooltip"), dd.arrow && !md.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let dd = document.createElement("div");
            dd.className = "cm-tooltip-arrow", md.dom.appendChild(dd)
          }
          return md.dom.style.position = this.position, md.dom.style.top = VR, md.dom.style.left = "0px", this.container.insertBefore(md.dom, Wd), md.mount && md.mount(this.view), this.resizeObserver && this.resizeObserver.observe(md.dom), md
        }
        destroy() {
          var dd, Od, md;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Wd of this.manager.tooltipViews) Wd.dom.remove(), null === (dd = Wd.destroy) || void 0 === dd || dd.call(Wd);
          this.parent && this.container.remove(), null === (Od = this.resizeObserver) || void 0 === Od || Od.disconnect(), null === (md = this.intersectionObserver) || void 0 === md || md.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let dd = 1,
            Od = 1,
            md = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: dd
            } = this.manager.tooltipViews[0];
            if (Ed.safari) {
              let Od = dd.getBoundingClientRect();
              md = Math.abs(Od.top + 1e4) > 1 || Math.abs(Od.left) > 1
            } else md = !!dd.offsetParent && dd.offsetParent != this.container.ownerDocument.body
          }
          if (md || "absolute" == this.position)
            if (this.parent) {
              let md = this.parent.getBoundingClientRect();
              md.width && md.height && (dd = md.width / this.parent.offsetWidth, Od = md.height / this.parent.offsetHeight)
            } else({
              scaleX: dd,
              scaleY: Od
            } = this.view.viewState);
          let Wd = this.view.scrollDOM.getBoundingClientRect(),
            Fd = Qm(this.view);
          return {
            visible: {
              left: Wd.left + Fd.left,
              top: Wd.top + Fd.top,
              right: Wd.right - Fd.right,
              bottom: Wd.bottom - Fd.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((dd, Od) => {
              let md = this.manager.tooltipViews[Od];
              return md.getCoords ? md.getCoords(dd.pos) : this.view.coordsAtPos(dd.pos)
            })),
            size: this.manager.tooltipViews.map((dd => {
              let {
                dom: Od
              } = dd;
              return Od.getBoundingClientRect()
            })),
            space: this.view.state.facet(rR).tooltipSpace(this.view),
            scaleX: dd,
            scaleY: Od,
            makeAbsolute: md
          }
        }
        writeMeasure(dd) {
          var Od;
          if (dd.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let dd of this.manager.tooltipViews) dd.dom.style.position = "absolute"
          }
          let {
            visible: md,
            space: Wd,
            scaleX: Fd,
            scaleY: Rd
          } = dd, Xd = [];
          for (let Kd = 0; Kd < this.manager.tooltips.length; Kd++) {
            let hd = this.manager.tooltips[Kd],
              vd = this.manager.tooltipViews[Kd],
              {
                dom: Qd
              } = vd,
              td = dd.pos[Kd],
              od = dd.size[Kd];
            if (!td || !1 !== hd.clip && (td.bottom <= Math.max(md.top, Wd.top) || td.top >= Math.min(md.bottom, Wd.bottom) || td.right < Math.max(md.left, Wd.left) - .1 || td.left > Math.min(md.right, Wd.right) + .1)) {
              Qd.style.top = VR;
              continue
            }
            let Nd = hd.arrow ? vd.dom.querySelector(".cm-tooltip-arrow") : null,
              qd = Nd ? 7 : 0,
              Hd = od.right - od.left,
              yd = null !== (Od = GR.get(vd)) && void 0 !== Od ? Od : od.bottom - od.top,
              bd = vd.offset || zR,
              Td = this.view.textDirection == tO.LTR,
              pd = od.width > Wd.right - Wd.left ? Td ? Wd.left : Wd.right - od.width : Td ? Math.max(Wd.left, Math.min(td.left - (Nd ? 14 : 0) + bd.x, Wd.right - Hd)) : Math.min(Math.max(Wd.left, td.left - Hd + (Nd ? 14 : 0) - bd.x), Wd.right - Hd),
              Yd = this.above[Kd];
            !hd.strictSide && (Yd ? td.top - yd - qd - bd.y < Wd.top : td.bottom + yd + qd + bd.y > Wd.bottom) && Yd == Wd.bottom - td.bottom > td.top - Wd.top && (Yd = this.above[Kd] = !Yd);
            let gd = (Yd ? td.top - Wd.top : Wd.bottom - td.bottom) - qd;
            if (gd < yd && !1 !== vd.resize) {
              if (gd < this.view.defaultLineHeight) {
                Qd.style.top = VR;
                continue
              }
              GR.set(vd, yd), Qd.style.height = (yd = gd) / Rd + "px"
            } else Qd.style.height && (Qd.style.height = "");
            let wd = Yd ? td.top - yd - qd - bd.y : td.bottom + qd + bd.y,
              Ed = pd + Hd;
            if (!0 !== vd.overlap)
              for (let dd of Xd) dd.left < Ed && dd.right > pd && dd.top < wd + yd && dd.bottom > wd && (wd = Yd ? dd.top - yd - 2 - qd : dd.bottom + qd + 2);
            if ("absolute" == this.position ? (Qd.style.top = (wd - dd.parent.top) / Rd + "px", LR(Qd, (pd - dd.parent.left) / Fd)) : (Qd.style.top = wd / Rd + "px", LR(Qd, pd / Fd)), Nd) {
              let dd = td.left + (Td ? bd.x : -bd.x) - (pd + 14 - 7);
              Nd.style.left = dd / Fd + "px"
            }!0 !== vd.overlap && Xd.push({
              left: pd,
              top: wd,
              right: Ed,
              bottom: wd + yd
            }), Qd.classList.toggle("cm-tooltip-above", Yd), Qd.classList.toggle("cm-tooltip-below", !Yd), vd.positioned && vd.positioned(dd.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let dd of this.manager.tooltipViews) dd.dom.style.top = VR
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function LR(dd, Od) {
      let md = parseInt(dd.style.left, 10);
      (isNaN(md) || Math.abs(Od - md) > 1) && (dd.style.left = Od + "px")
    }
    const PR = BF.baseTheme({
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
      zR = {
        x: 0,
        y: 0
      },
      cR = Wd.p.define({
        enables: [nR, PR]
      }),
      jR = Wd.p.define({
        combine: dd => dd.reduce(((dd, Od) => dd.concat(Od)), [])
      });
    class DR {
      static create(dd) {
        return new DR(dd)
      }
      constructor(dd) {
        this.view = dd, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new iR(dd, jR, ((dd, Od) => this.createHostedView(dd, Od)), (dd => dd.dom.remove()))
      }
      createHostedView(dd, Od) {
        let md = dd.create(this.view);
        return md.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(md.dom, Od ? Od.dom.nextSibling : this.dom.firstChild), this.mounted && md.mount && md.mount(this.view), md
      }
      mount(dd) {
        for (let Od of this.manager.tooltipViews) Od.mount && Od.mount(dd);
        this.mounted = !0
      }
      positioned(dd) {
        for (let Od of this.manager.tooltipViews) Od.positioned && Od.positioned(dd)
      }
      update(dd) {
        this.manager.update(dd)
      }
      destroy() {
        var dd;
        for (let Od of this.manager.tooltipViews) null === (dd = Od.destroy) || void 0 === dd || dd.call(Od)
      }
      passProp(dd) {
        let Od;
        for (let md of this.manager.tooltipViews) {
          let Wd = md[dd];
          if (void 0 !== Wd)
            if (void 0 === Od) Od = Wd;
            else if (Od !== Wd) return
        }
        return Od
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
    const eR = cR.compute([jR], (dd => {
      let Od = dd.facet(jR);
      return 0 === Od.length ? null : {
        pos: Math.min(...Od.map((dd => dd.pos))),
        end: Math.max(...Od.map((dd => {
          var Od;
          return null !== (Od = dd.end) && void 0 !== Od ? Od : dd.pos
        }))),
        create: DR.create,
        above: Od[0].above,
        arrow: Od.some((dd => dd.arrow))
      }
    }));
    class IR {
      constructor(dd, Od, md, Wd, Fd) {
        this.view = dd, this.source = Od, this.field = md, this.setHover = Wd, this.hoverTime = Fd, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: Od
        } = this, md = dd.docView.tile.nearest(Od.target);
        if (!md) return;
        let Wd, Fd = 1;
        if (md.isWidget()) Wd = md.posAtStart;
        else {
          if (Wd = dd.posAtCoords(Od), null == Wd) return;
          let md = dd.coordsAtPos(Wd);
          if (!md || Od.y < md.top || Od.y > md.bottom || Od.x < md.left - dd.defaultCharacterWidth || Od.x > md.right + dd.defaultCharacterWidth) return;
          let Rd = dd.bidiSpans(dd.state.doc.lineAt(Wd)).find((dd => dd.from <= Wd && dd.to >= Wd)),
            Xd = Rd && Rd.dir == tO.RTL ? -1 : 1;
          Fd = Od.x < md.left ? -Xd : Xd
        }
        let Rd = this.source(dd, Wd, Fd);
        if (null === Rd || void 0 === Rd ? void 0 : Rd.then) {
          let Od = this.pending = {
            pos: Wd
          };
          Rd.then((md => {
            this.pending == Od && (this.pending = null, !md || Array.isArray(md) && !md.length || dd.dispatch({
              effects: this.setHover.of(Array.isArray(md) ? md : [md])
            }))
          }), (Od => lO(dd.state, Od, "hover tooltip")))
        } else !Rd || Array.isArray(Rd) && !Rd.length || dd.dispatch({
          effects: this.setHover.of(Array.isArray(Rd) ? Rd : [Rd])
        })
      }
      get tooltip() {
        let dd = this.view.plugin(nR),
          Od = dd ? dd.manager.tooltips.findIndex((dd => dd.create == DR.create)) : -1;
        return Od > -1 ? dd.manager.tooltipViews[Od] : null
      }
      mousemove(dd) {
        var Od, md;
        this.lastMove = {
          x: dd.clientX,
          y: dd.clientY,
          target: dd.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Wd,
          tooltip: Fd
        } = this;
        if (Wd.length && Fd && ! function(dd, Od) {
            let md, {
              left: Wd,
              right: Fd,
              top: Rd,
              bottom: Xd
            } = dd.getBoundingClientRect();
            if (md = dd.querySelector(".cm-tooltip-arrow")) {
              let dd = md.getBoundingClientRect();
              Rd = Math.min(dd.top, Rd), Xd = Math.max(dd.bottom, Xd)
            }
            return Od.clientX >= Wd - lR && Od.clientX <= Fd + lR && Od.clientY >= Rd - lR && Od.clientY <= Xd + lR
          }(Fd.dom, dd) || this.pending) {
          let {
            pos: Fd
          } = Wd[0] || this.pending, Rd = null !== (md = null === (Od = Wd[0]) || void 0 === Od ? void 0 : Od.end) && void 0 !== md ? md : Fd;
          (Fd == Rd ? this.view.posAtCoords(this.lastMove) == Fd : function(dd, Od, md, Wd, Fd) {
            let Rd = dd.scrollDOM.getBoundingClientRect(),
              Xd = dd.documentTop + dd.documentPadding.top + dd.contentHeight;
            if (Rd.left > Wd || Rd.right < Wd || Rd.top > Fd || Math.min(Rd.bottom, Xd) < Fd) return !1;
            let Kd = dd.posAtCoords({
              x: Wd,
              y: Fd
            }, !1);
            return Kd >= Od && Kd <= md
          }(this.view, Fd, Rd, dd.clientX, dd.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(dd) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Od
        } = this;
        if (Od.length) {
          let {
            tooltip: Od
          } = this;
          Od && Od.dom.contains(dd.relatedTarget) ? this.watchTooltipLeave(Od.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(dd) {
        let Od = md => {
          dd.removeEventListener("mouseleave", Od), this.active.length && !this.view.dom.contains(md.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        dd.addEventListener("mouseleave", Od)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const lR = 4;

    function CR(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        md = Wd.I.define(),
        Fd = Wd.M.define({
          create: () => [],
          update(dd, Fd) {
            if (dd.length && (Od.hideOnChange && (Fd.docChanged || Fd.selection) ? dd = [] : Od.hideOn && (dd = dd.filter((dd => !Od.hideOn(Fd, dd)))), Fd.docChanged)) {
              let Od = [];
              for (let md of dd) {
                let dd = Fd.changes.mapPos(md.pos, -1, Wd.t.TrackDel);
                if (null != dd) {
                  let Wd = Object.assign(Object.create(null), md);
                  Wd.pos = dd, null != Wd.end && (Wd.end = Fd.changes.mapPos(Wd.end)), Od.push(Wd)
                }
              }
              dd = Od
            }
            for (let Od of Fd.effects) Od.is(md) && (dd = Od.value), Od.is(kR) && (dd = []);
            return dd
          },
          provide: dd => jR.from(dd)
        });
      return {
        active: Fd,
        extension: [Fd, fO.define((Wd => new IR(Wd, dd, Fd, md, Od.hoverTime || 300))), eR]
      }
    }

    function ZR(dd, Od) {
      let md = dd.plugin(nR);
      if (!md) return null;
      let Wd = md.manager.tooltips.indexOf(Od);
      return Wd < 0 ? null : md.manager.tooltipViews[Wd]
    }
    const kR = Wd.I.define();
    const fR = Wd.p.define({
      combine(dd) {
        let Od, md;
        for (let Wd of dd) Od = Od || Wd.topContainer, md = md || Wd.bottomContainer;
        return {
          topContainer: Od,
          bottomContainer: md
        }
      }
    });

    function MR(dd, Od) {
      let md = dd.plugin(dX),
        Wd = md ? md.specs.indexOf(Od) : -1;
      return Wd > -1 ? md.panels[Wd] : null
    }
    const dX = fO.fromClass(class {
      constructor(dd) {
        this.input = dd.state.facet(WX), this.specs = this.input.filter((dd => dd)), this.panels = this.specs.map((Od => Od(dd)));
        let Od = dd.state.facet(fR);
        this.top = new OX(dd, !0, Od.topContainer), this.bottom = new OX(dd, !1, Od.bottomContainer), this.top.sync(this.panels.filter((dd => dd.top))), this.bottom.sync(this.panels.filter((dd => !dd.top)));
        for (let md of this.panels) md.dom.classList.add("cm-panel"), md.mount && md.mount()
      }
      update(dd) {
        let Od = dd.state.facet(fR);
        this.top.container != Od.topContainer && (this.top.sync([]), this.top = new OX(dd.view, !0, Od.topContainer)), this.bottom.container != Od.bottomContainer && (this.bottom.sync([]), this.bottom = new OX(dd.view, !1, Od.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let md = dd.state.facet(WX);
        if (md != this.input) {
          let Od = md.filter((dd => dd)),
            Wd = [],
            Fd = [],
            Rd = [],
            Xd = [];
          for (let md of Od) {
            let Od, Kd = this.specs.indexOf(md);
            Kd < 0 ? (Od = md(dd.view), Xd.push(Od)) : (Od = this.panels[Kd], Od.update && Od.update(dd)), Wd.push(Od), (Od.top ? Fd : Rd).push(Od)
          }
          this.specs = Od, this.panels = Wd, this.top.sync(Fd), this.bottom.sync(Rd);
          for (let dd of Xd) dd.dom.classList.add("cm-panel"), dd.mount && dd.mount()
        } else
          for (let Wd of this.panels) Wd.update && Wd.update(dd)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: dd => BF.scrollMargins.of((Od => {
        let md = Od.plugin(dd);
        return md && {
          top: md.top.scrollMargin(),
          bottom: md.bottom.scrollMargin()
        }
      }))
    });
    class OX {
      constructor(dd, Od, md) {
        this.view = dd, this.top = Od, this.container = md, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(dd) {
        for (let Od of this.panels) Od.destroy && dd.indexOf(Od) < 0 && Od.destroy();
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
        for (let Od of this.panels)
          if (Od.dom.parentNode == this.dom) {
            for (; dd != Od.dom;) dd = mX(dd);
            dd = dd.nextSibling
          } else this.dom.insertBefore(Od.dom, dd);
        for (; dd;) dd = mX(dd)
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

    function mX(dd) {
      let Od = dd.nextSibling;
      return dd.remove(), Od
    }
    const WX = Wd.p.define({
      enables: dX
    });

    function FX(dd, Od) {
      let md, Fd = new Promise((dd => md = dd)),
        Rd = dd => function(dd, Od, md) {
          let Wd = Od.content ? Od.content(dd, (() => Xd(null))) : null;
          if (!Wd) {
            if (Wd = (0, td.d)("form"), Od.input) {
              let dd = (0, td.d)("input", Od.input);
              /^(text|password|number|email|tel|url)$/.test(dd.type) && dd.classList.add("cm-textfield"), dd.name || (dd.name = "input"), Wd.appendChild((0, td.d)("label", (Od.label || "") + ": ", dd))
            } else Wd.appendChild(document.createTextNode(Od.label || ""));
            Wd.appendChild(document.createTextNode(" ")), Wd.appendChild((0, td.d)("button", {
              class: "cm-button",
              type: "submit"
            }, Od.submitLabel || "OK"))
          }
          let Fd = "FORM" == Wd.nodeName ? [Wd] : Wd.querySelectorAll("form");
          for (let Kd = 0; Kd < Fd.length; Kd++) {
            let dd = Fd[Kd];
            dd.addEventListener("keydown", (Od => {
              27 == Od.keyCode ? (Od.preventDefault(), Xd(null)) : 13 == Od.keyCode && (Od.preventDefault(), Xd(dd))
            })), dd.addEventListener("submit", (Od => {
              Od.preventDefault(), Xd(dd)
            }))
          }
          let Rd = (0, td.d)("div", Wd, (0, td.d)("button", {
            onclick: () => Xd(null),
            "aria-label": dd.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Od.class && (Rd.className = Od.class);

          function Xd(Od) {
            Rd.contains(Rd.ownerDocument.activeElement) && dd.focus(), md(Od)
          }
          return Rd.classList.add("cm-dialog"), {
            dom: Rd,
            top: Od.top,
            mount: () => {
              if (Od.focus) {
                let dd;
                dd = "string" == typeof Od.focus ? Wd.querySelector(Od.focus) : Wd.querySelector("input") || Wd.querySelector("button"), dd && "select" in dd ? dd.select() : dd && "focus" in dd && dd.focus()
              }
            }
          }
        }(dd, Od, md);
      dd.state.field(RX, !1) ? dd.dispatch({
        effects: XX.of(Rd)
      }) : dd.dispatch({
        effects: Wd.I.appendConfig.of(RX.init((() => [Rd])))
      });
      let Xd = KX.of(Rd);
      return {
        close: Xd,
        result: Fd.then((Od => ((dd.win.queueMicrotask || (Od => dd.win.setTimeout(Od, 10)))((() => {
          dd.state.field(RX).indexOf(Rd) > -1 && dd.dispatch({
            effects: Xd
          })
        })), Od)))
      }
    }
    const RX = Wd.M.define({
        create: () => [],
        update(dd, Od) {
          for (let md of Od.effects) md.is(XX) ? dd = [md.value].concat(dd) : md.is(KX) && (dd = dd.filter((dd => dd != md.value)));
          return dd
        },
        provide: dd => WX.computeN([dd], (Od => Od.field(dd)))
      }),
      XX = Wd.I.define(),
      KX = Wd.I.define();
    class hX extends Wd.F {
      compare(dd) {
        return this == dd || this.constructor == dd.constructor && this.eq(dd)
      }
      eq(dd) {
        return !1
      }
      destroy(dd) {}
    }
    hX.prototype.elementClass = "", hX.prototype.toDOM = void 0, hX.prototype.mapMode = Wd.t.TrackBefore, hX.prototype.startSide = hX.prototype.endSide = -1, hX.prototype.point = !0;
    const vX = Wd.p.define(),
      QX = Wd.p.define(),
      tX = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Wd.B.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      oX = Wd.p.define();

    function NX(dd) {
      return [HX(), oX.of({
        ...tX,
        ...dd
      })]
    }
    const qX = Wd.p.define({
      combine: dd => dd.some((dd => dd))
    });

    function HX(dd) {
      let Od = [yX];
      return dd && !1 === dd.fixed && Od.push(qX.of(!0)), Od
    }
    const yX = fO.fromClass(class {
      constructor(dd) {
        this.view = dd, this.domAfter = null, this.prevViewport = dd.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = dd.state.facet(oX).map((Od => new YX(dd, Od))), this.fixed = !dd.state.facet(qX);
        for (let Od of this.gutters) "after" == Od.config.side ? this.getDOMAfter().appendChild(Od.dom) : this.dom.appendChild(Od.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), dd.scrollDOM.insertBefore(this.dom, dd.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(dd) {
        if (this.updateGutters(dd)) {
          let Od = this.prevViewport,
            md = dd.view.viewport,
            Wd = Math.min(Od.to, md.to) - Math.max(Od.from, md.from);
          this.syncGutters(Wd < .8 * (md.to - md.from))
        }
        if (dd.geometryChanged) {
          let dd = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = dd, this.domAfter && (this.domAfter.style.minHeight = dd)
        }
        this.view.state.facet(qX) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = dd.view.viewport
      }
      syncGutters(dd) {
        let Od = this.dom.nextSibling;
        dd && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let md = Wd.B.iter(this.view.state.facet(vX), this.view.viewport.from),
          Fd = [],
          Rd = this.gutters.map((dd => new pX(dd, this.view.viewport, -this.view.documentPadding.top)));
        for (let Wd of this.view.viewportLineBlocks)
          if (Fd.length && (Fd = []), Array.isArray(Wd.type)) {
            let dd = !0;
            for (let Od of Wd.type)
              if (Od.type == ud.Text && dd) {
                TX(md, Fd, Od.from);
                for (let dd of Rd) dd.line(this.view, Od, Fd);
                dd = !1
              } else if (Od.widget)
              for (let dd of Rd) dd.widget(this.view, Od)
          } else if (Wd.type == ud.Text) {
          TX(md, Fd, Wd.from);
          for (let dd of Rd) dd.line(this.view, Wd, Fd)
        } else if (Wd.widget)
          for (let dd of Rd) dd.widget(this.view, Wd);
        for (let Wd of Rd) Wd.finish();
        dd && (this.view.scrollDOM.insertBefore(this.dom, Od), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(dd) {
        let Od = dd.startState.facet(oX),
          md = dd.state.facet(oX),
          Fd = dd.docChanged || dd.heightChanged || dd.viewportChanged || !Wd.B.eq(dd.startState.facet(vX), dd.state.facet(vX), dd.view.viewport.from, dd.view.viewport.to);
        if (Od == md)
          for (let Wd of this.gutters) Wd.update(dd) && (Fd = !0);
        else {
          Fd = !0;
          let Wd = [];
          for (let Fd of md) {
            let md = Od.indexOf(Fd);
            md < 0 ? Wd.push(new YX(this.view, Fd)) : (this.gutters[md].update(dd), Wd.push(this.gutters[md]))
          }
          for (let dd of this.gutters) dd.dom.remove(), Wd.indexOf(dd) < 0 && dd.destroy();
          for (let dd of Wd) "after" == dd.config.side ? this.getDOMAfter().appendChild(dd.dom) : this.dom.appendChild(dd.dom);
          this.gutters = Wd
        }
        return Fd
      }
      destroy() {
        for (let dd of this.gutters) dd.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: dd => BF.scrollMargins.of((Od => {
        let md = Od.plugin(dd);
        if (!md || 0 == md.gutters.length || !md.fixed) return null;
        let Wd = md.dom.offsetWidth * Od.scaleX,
          Fd = md.domAfter ? md.domAfter.offsetWidth * Od.scaleX : 0;
        return Od.textDirection == tO.LTR ? {
          left: Wd,
          right: Fd
        } : {
          right: Wd,
          left: Fd
        }
      }))
    });

    function bX(dd) {
      return Array.isArray(dd) ? dd : [dd]
    }

    function TX(dd, Od, md) {
      for (; dd.value && dd.from <= md;) dd.from == md && Od.push(dd.value), dd.next()
    }
    class pX {
      constructor(dd, Od, md) {
        this.gutter = dd, this.height = md, this.i = 0, this.cursor = Wd.B.iter(dd.markers, Od.from)
      }
      addElement(dd, Od, md) {
        let {
          gutter: Wd
        } = this, Fd = (Od.top - this.height) / dd.scaleY, Rd = Od.height / dd.scaleY;
        if (this.i == Wd.elements.length) {
          let Od = new gX(dd, Rd, Fd, md);
          Wd.elements.push(Od), Wd.dom.appendChild(Od.dom)
        } else Wd.elements[this.i].update(dd, Rd, Fd, md);
        this.height = Od.bottom, this.i++
      }
      line(dd, Od, md) {
        let Wd = [];
        TX(this.cursor, Wd, Od.from), md.length && (Wd = Wd.concat(md));
        let Fd = this.gutter.config.lineMarker(dd, Od, Wd);
        Fd && Wd.unshift(Fd);
        let Rd = this.gutter;
        (0 != Wd.length || Rd.config.renderEmptyElements) && this.addElement(dd, Od, Wd)
      }
      widget(dd, Od) {
        let md = this.gutter.config.widgetMarker(dd, Od.widget, Od),
          Wd = md ? [md] : null;
        for (let Fd of dd.state.facet(QX)) {
          let md = Fd(dd, Od.widget, Od);
          md && (Wd || (Wd = [])).push(md)
        }
        Wd && this.addElement(dd, Od, Wd)
      }
      finish() {
        let dd = this.gutter;
        for (; dd.elements.length > this.i;) {
          let Od = dd.elements.pop();
          dd.dom.removeChild(Od.dom), Od.destroy()
        }
      }
    }
    class YX {
      constructor(dd, Od) {
        this.view = dd, this.config = Od, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let md in Od.domEventHandlers) this.dom.addEventListener(md, (Wd => {
          let Fd, Rd = Wd.target;
          if (Rd != this.dom && this.dom.contains(Rd)) {
            for (; Rd.parentNode != this.dom;) Rd = Rd.parentNode;
            let dd = Rd.getBoundingClientRect();
            Fd = (dd.top + dd.bottom) / 2
          } else Fd = Wd.clientY;
          let Xd = dd.lineBlockAtHeight(Fd - dd.documentTop);
          Od.domEventHandlers[md](dd, Xd, Wd) && Wd.preventDefault()
        }));
        this.markers = bX(Od.markers(dd)), Od.initialSpacer && (this.spacer = new gX(dd, 0, 0, [Od.initialSpacer(dd)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(dd) {
        let Od = this.markers;
        if (this.markers = bX(this.config.markers(dd.view)), this.spacer && this.config.updateSpacer) {
          let Od = this.config.updateSpacer(this.spacer.markers[0], dd);
          Od != this.spacer.markers[0] && this.spacer.update(dd.view, 0, 0, [Od])
        }
        let md = dd.view.viewport;
        return !Wd.B.eq(this.markers, Od, md.from, md.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(dd)
      }
      destroy() {
        for (let dd of this.elements) dd.destroy()
      }
    }
    class gX {
      constructor(dd, Od, md, Wd) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(dd, Od, md, Wd)
      }
      update(dd, Od, md, Wd) {
        this.height != Od && (this.height = Od, this.dom.style.height = Od + "px"), this.above != md && (this.dom.style.marginTop = (this.above = md) ? md + "px" : ""),
          function(dd, Od) {
            if (dd.length != Od.length) return !1;
            for (let md = 0; md < dd.length; md++)
              if (!dd[md].compare(Od[md])) return !1;
            return !0
          }(this.markers, Wd) || this.setMarkers(dd, Wd)
      }
      setMarkers(dd, Od) {
        let md = "cm-gutterElement",
          Wd = this.dom.firstChild;
        for (let Fd = 0, Rd = 0;;) {
          let Xd = Rd,
            Kd = Fd < Od.length ? Od[Fd++] : null,
            hd = !1;
          if (Kd) {
            let dd = Kd.elementClass;
            dd && (md += " " + dd);
            for (let Od = Rd; Od < this.markers.length; Od++)
              if (this.markers[Od].compare(Kd)) {
                Xd = Od, hd = !0;
                break
              }
          } else Xd = this.markers.length;
          for (; Rd < Xd;) {
            let dd = this.markers[Rd++];
            if (dd.toDOM) {
              dd.destroy(Wd);
              let Od = Wd.nextSibling;
              Wd.remove(), Wd = Od
            }
          }
          if (!Kd) break;
          Kd.toDOM && (hd ? Wd = Wd.nextSibling : this.dom.insertBefore(Kd.toDOM(dd), Wd)), hd && Rd++
        }
        this.dom.className = md, this.markers = Od
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const wX = Wd.p.define(),
      aX = Wd.p.define(),
      EX = Wd.p.define({
        combine: dd => (0, Wd.W)(dd, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(dd, Od) {
            let md = Object.assign({}, dd);
            for (let Wd in Od) {
              let dd = md[Wd],
                Fd = Od[Wd];
              md[Wd] = dd ? (Od, md, Wd) => dd(Od, md, Wd) || Fd(Od, md, Wd) : Fd
            }
            return md
          }
        })
      });
    class JX extends hX {
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

    function UX(dd, Od) {
      return dd.state.facet(EX).formatNumber(Od, dd.state)
    }
    const xX = oX.compute([EX], (dd => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: dd => dd.state.facet(wX),
      lineMarker: (dd, Od, md) => md.some((dd => dd.toDOM)) ? null : new JX(UX(dd, dd.state.doc.lineAt(Od.from).number)),
      widgetMarker: (dd, Od, md) => {
        for (let Wd of dd.state.facet(aX)) {
          let Fd = Wd(dd, Od, md);
          if (Fd) return Fd
        }
        return null
      },
      lineMarkerChange: dd => dd.startState.facet(EX) != dd.state.facet(EX),
      initialSpacer: dd => new JX(UX(dd, SX(dd.state.doc.lines))),
      updateSpacer(dd, Od) {
        let md = UX(Od.view, SX(Od.view.state.doc.lines));
        return md == dd.number ? dd : new JX(md)
      },
      domEventHandlers: dd.facet(EX).domEventHandlers,
      side: "before"
    })));

    function BX() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [EX.of(dd), HX(), xX]
    }

    function SX(dd) {
      let Od = 9;
      for (; Od < dd;) Od = 10 * Od + 9;
      return Od
    }
    const sX = new class extends hX {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      uX = vX.compute(["selection"], (dd => {
        let Od = [],
          md = -1;
        for (let Wd of dd.selection.By) {
          let Fd = dd.doc.lineAt(Wd.head).from;
          Fd > md && (md = Fd, Od.push(sX.range(Fd)))
        }
        return Wd.B.of(Od)
      }));

    function VX() {
      return uX
    }
  },
  53798: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Nd,
      h: () => Xd,
      k: () => Qd,
      m: () => vd,
      p: () => Ad,
      s: () => Gd,
      w: () => rd,
      y: () => qd
    });
    const Wd = 1024;
    let Fd = 0;
    class Rd {
      constructor(dd, Od) {
        this.from = dd, this.to = Od
      }
    }
    class Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Fd++, this.perNode = !!dd.perNode, this.deserialize = dd.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = dd.combine || null
      }
      add(dd) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof dd && (dd = vd.match(dd)), Od => {
          let md = dd(Od);
          return void 0 === md ? null : [this, md]
        }
      }
    }
    Xd.closedBy = new Xd({
      deserialize: dd => dd.split(" ")
    }), Xd.openedBy = new Xd({
      deserialize: dd => dd.split(" ")
    }), Xd.group = new Xd({
      deserialize: dd => dd.split(" ")
    }), Xd.isolate = new Xd({
      deserialize: dd => {
        if (dd && "rtl" != dd && "ltr" != dd && "auto" != dd) throw new RangeError("Invalid value for isolate: " + dd);
        return dd || "auto"
      }
    }), Xd.contextHash = new Xd({
      perNode: !0
    }), Xd.lookAhead = new Xd({
      perNode: !0
    }), Xd.mounted = new Xd({
      perNode: !0
    });
    class Kd {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = dd, this.overlay = Od, this.parser = md, this.bracketed = Wd
      }
      static get(dd) {
        return dd && dd.props && dd.props[Xd.mounted.id]
      }
    }
    const hd = Object.create(null);
    class vd {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = dd, this.props = Od, this.id = md, this.flags = Wd
      }
      static define(dd) {
        let Od = dd.props && dd.props.length ? Object.create(null) : hd,
          md = (dd.top ? 1 : 0) | (dd.skipped ? 2 : 0) | (dd.error ? 4 : 0) | (null == dd.name ? 8 : 0),
          Wd = new vd(dd.name || "", Od, dd.id, md);
        if (dd.props)
          for (let Fd of dd.props)
            if (Array.isArray(Fd) || (Fd = Fd(Wd)), Fd) {
              if (Fd[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Od[Fd[0].id] = Fd[1]
            } return Wd
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
          let Od = this.prop(Xd.group);
          return !!Od && Od.indexOf(dd) > -1
        }
        return this.id == dd
      }
      static match(dd) {
        let Od = Object.create(null);
        for (let md in dd)
          for (let Wd of md.split(" ")) Od[Wd] = dd[md];
        return dd => {
          for (let md = dd.prop(Xd.group), Wd = -1; Wd < (md ? md.length : 0); Wd++) {
            let Fd = Od[Wd < 0 ? dd.name : md[Wd]];
            if (Fd) return Fd
          }
        }
      }
    }
    vd.none = new vd("", Object.create(null), 0, 8);
    class Qd {
      constructor(dd) {
        this.types = dd;
        for (let Od = 0; Od < dd.length; Od++)
          if (dd[Od].id != Od) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let dd = [];
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        for (let Fd of this.types) {
          let Od = null;
          for (let dd of md) {
            let md = dd(Fd);
            if (md) {
              Od || (Od = Object.assign({}, Fd.props));
              let dd = md[1],
                Wd = md[0];
              Wd.combine && Wd.id in Od && (dd = Wd.combine(Od[Wd.id], dd)), Od[Wd.id] = dd
            }
          }
          dd.push(Od ? new vd(Fd.name, Od, Fd.id, Fd.flags) : Fd)
        }
        return new Qd(dd)
      }
    }
    const td = new WeakMap,
      od = new WeakMap;
    var Nd;
    ! function(dd) {
      dd[dd.ExcludeBuffers = 1] = "ExcludeBuffers", dd[dd.IncludeAnonymous = 2] = "IncludeAnonymous", dd[dd.IgnoreMounts = 4] = "IgnoreMounts", dd[dd.IgnoreOverlays = 8] = "IgnoreOverlays", dd[dd.EnterBracketed = 16] = "EnterBracketed"
    }(Nd || (Nd = {}));
    class qd {
      constructor(dd, Od, md, Wd, Fd) {
        if (this.type = dd, this.children = Od, this.positions = md, this.length = Wd, this.props = null, Fd && Fd.length) {
          this.props = Object.create(null);
          for (let [dd, Od] of Fd) this.props["number" == typeof dd ? dd : dd.id] = Od
        }
      }
      toString() {
        let dd = Kd.get(this);
        if (dd && !dd.overlay) return dd.tree.toString();
        let Od = "";
        for (let md of this.children) {
          let dd = md.toString();
          dd && (Od && (Od += ","), Od += dd)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Od.length ? "(" + Od + ")" : "") : Od
      }
      cursor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Bd(this.topNode, dd)
      }
      cursorAt(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = td.get(this) || this.topNode,
          Wd = new Bd(md);
        return Wd.moveTo(dd, Od), td.set(this, Wd._tree), Wd
      }
      get topNode() {
        return new Yd(this, 0, 0, null)
      }
      resolve(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = Td(td.get(this) || this.topNode, dd, Od, !1);
        return td.set(this, md), md
      }
      resolveInner(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = Td(od.get(this) || this.topNode, dd, Od, !0);
        return od.set(this, md), md
      }
      resolveStack(dd) {
        return function(dd, Od, md) {
          let Wd = dd.resolveInner(Od, md),
            Fd = null;
          for (let Rd = Wd instanceof Yd ? Wd : Wd.context.parent; Rd; Rd = Rd.parent)
            if (Rd.index < 0) {
              let dd = Rd.parent;
              (Fd || (Fd = [Wd])).push(dd.resolve(Od, md)), Rd = dd
            } else {
              let dd = Kd.get(Rd.tree);
              if (dd && dd.overlay && dd.overlay[0].from <= Od && dd.overlay[dd.overlay.length - 1].to >= Od) {
                let Xd = new Yd(dd.tree, dd.overlay[0].from + Rd.from, -1, Rd);
                (Fd || (Fd = [Wd])).push(Td(Xd, Od, md, !1))
              }
            } return Fd ? Ud(Fd) : Wd
        }(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(dd) {
        let {
          enter: Od,
          leave: md,
          from: Wd = 0,
          to: Fd = this.length
        } = dd, Rd = dd.mode || 0, Xd = (Rd & Nd.IncludeAnonymous) > 0;
        for (let Kd = this.cursor(Rd | Nd.IncludeAnonymous);;) {
          let dd = !1;
          if (Kd.from <= Fd && Kd.to >= Wd && (!Xd && Kd.type.isAnonymous || !1 !== Od(Kd))) {
            if (Kd.firstChild()) continue;
            dd = !0
          }
          for (; dd && md && (Xd || !Kd.type.isAnonymous) && md(Kd), !Kd.nextSibling();) {
            if (!Kd.parent()) return;
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
          for (let Od in this.props) dd.push([+Od, this.props[Od]]);
        return dd
      }
      balance() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Vd(vd.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((dd, Od, md) => new qd(this.type, dd, Od, md, this.propValues)), dd.makeTree || ((dd, Od, md) => new qd(vd.none, dd, Od, md)))
      }
      static build(dd) {
        return function(dd) {
          var Od;
          let {
            buffer: md,
            nodeSet: Fd,
            maxBufferLength: Rd = Wd,
            reused: Kd = [],
            minRepeatType: hd = Fd.types.length
          } = dd, vd = Array.isArray(md) ? new Hd(md, md.length) : md, Qd = Fd.types, td = 0, od = 0;

          function Nd(dd, Od, md, Wd, Xd, qd) {
            let {
              id: Hd,
              start: Ed,
              end: Jd,
              size: Ud
            } = vd, xd = od, Bd = td;
            if (Ud < 0) {
              if (vd.next(), -1 == Ud) {
                let Od = Kd[Hd];
                return md.push(Od), void Wd.push(Ed - dd)
              }
              if (-3 == Ud) return void(td = Hd);
              if (-4 == Ud) return void(od = Hd);
              throw new RangeError(`Unrecognized record size: ${Ud}`)
            }
            let Sd, sd, ud = Qd[Hd],
              Ad = Ed - dd;
            if (Jd - Ed <= Rd && (sd = gd(vd.pos - Od, Xd))) {
              let Od = new Uint16Array(sd.size - sd.skip),
                md = vd.pos - sd.size,
                Wd = Od.length;
              for (; vd.pos > md;) Wd = wd(sd.start, Od, Wd);
              Sd = new yd(Od, Jd - sd.start, Fd), Ad = sd.start - dd
            } else {
              let dd = vd.pos - Ud;
              vd.next();
              let Od = [],
                md = [],
                Wd = Hd >= hd ? Hd : -1,
                Fd = 0,
                Xd = Jd;
              for (; vd.pos > dd;) Wd >= 0 && vd.id == Wd && vd.size >= 0 ? (vd.end <= Xd - Rd && (pd(Od, md, Ed, Fd, vd.end, Xd, Wd, xd, Bd), Fd = Od.length, Xd = vd.end), vd.next()) : qd > 2500 ? bd(Ed, dd, Od, md) : Nd(Ed, dd, Od, md, Wd, qd + 1);
              if (Wd >= 0 && Fd > 0 && Fd < Od.length && pd(Od, md, Ed, Fd, Ed, Xd, Wd, xd, Bd), Od.reverse(), md.reverse(), Wd > -1 && Fd > 0) {
                let dd = Td(ud, Bd);
                Sd = Vd(ud, Od, md, 0, Od.length, 0, Jd - Ed, dd, dd)
              } else Sd = Yd(ud, Od, md, Jd - Ed, xd - Jd, Bd)
            }
            md.push(Sd), Wd.push(Ad)
          }

          function bd(dd, Od, md, Wd) {
            let Xd = [],
              Kd = 0,
              hd = -1;
            for (; vd.pos > Od;) {
              let {
                id: dd,
                start: Od,
                end: md,
                size: Wd
              } = vd;
              if (Wd > 4) vd.next();
              else {
                if (hd > -1 && Od < hd) break;
                hd < 0 && (hd = md - Rd), Xd.push(dd, Od, md), Kd++, vd.next()
              }
            }
            if (Kd) {
              let Od = new Uint16Array(4 * Kd),
                Rd = Xd[Xd.length - 2];
              for (let dd = Xd.length - 3, md = 0; dd >= 0; dd -= 3) Od[md++] = Xd[dd], Od[md++] = Xd[dd + 1] - Rd, Od[md++] = Xd[dd + 2] - Rd, Od[md++] = md;
              md.push(new yd(Od, Xd[2] - Rd, Fd)), Wd.push(Rd - dd)
            }
          }

          function Td(dd, Od) {
            return (md, Wd, Fd) => {
              let Rd, Kd, hd = 0,
                vd = md.length - 1;
              if (vd >= 0 && (Rd = md[vd]) instanceof qd) {
                if (!vd && Rd.type == dd && Rd.length == Fd) return Rd;
                (Kd = Rd.prop(Xd.lookAhead)) && (hd = Wd[vd] + Rd.length + Kd)
              }
              return Yd(dd, md, Wd, Fd, hd, Od)
            }
          }

          function pd(dd, Od, md, Wd, Rd, Xd, Kd, hd, vd) {
            let Qd = [],
              td = [];
            for (; dd.length > Wd;) Qd.push(dd.pop()), td.push(Od.pop() + md - Rd);
            dd.push(Yd(Fd.types[Kd], Qd, td, Xd - Rd, hd - Xd, vd)), Od.push(Rd - md)
          }

          function Yd(dd, Od, md, Wd, Fd, Rd, Kd) {
            if (Rd) {
              let dd = [Xd.contextHash, Rd];
              Kd = Kd ? [dd].concat(Kd) : [dd]
            }
            if (Fd > 25) {
              let dd = [Xd.lookAhead, Fd];
              Kd = Kd ? [dd].concat(Kd) : [dd]
            }
            return new qd(dd, Od, md, Wd, Kd)
          }

          function gd(dd, Od) {
            let md = vd.fork(),
              Wd = 0,
              Fd = 0,
              Xd = 0,
              Kd = md.end - Rd,
              Qd = {
                size: 0,
                start: 0,
                skip: 0
              };
            dd: for (let Rd = md.pos - dd; md.pos > Rd;) {
              let dd = md.size;
              if (md.id == Od && dd >= 0) {
                Qd.size = Wd, Qd.start = Fd, Qd.skip = Xd, Xd += 4, Wd += 4, md.next();
                continue
              }
              let vd = md.pos - dd;
              if (dd < 0 || vd < Rd || md.start < Kd) break;
              let td = md.id >= hd ? 4 : 0,
                od = md.start;
              for (md.next(); md.pos > vd;) {
                if (md.size < 0) {
                  if (-3 != md.size && -4 != md.size) break dd;
                  td += 4
                } else md.id >= hd && (td += 4);
                md.next()
              }
              Fd = od, Wd += dd, Xd += td
            }
            return (Od < 0 || Wd == dd) && (Qd.size = Wd, Qd.start = Fd, Qd.skip = Xd), Qd.size > 4 ? Qd : void 0
          }

          function wd(dd, Od, md) {
            let {
              id: Wd,
              start: Fd,
              end: Rd,
              size: Xd
            } = vd;
            if (vd.next(), Xd >= 0 && Wd < hd) {
              let Kd = md;
              if (Xd > 4) {
                let Wd = vd.pos - (Xd - 4);
                for (; vd.pos > Wd;) md = wd(dd, Od, md)
              }
              Od[--md] = Kd, Od[--md] = Rd - dd, Od[--md] = Fd - dd, Od[--md] = Wd
            } else - 3 == Xd ? td = Wd : -4 == Xd && (od = Wd);
            return md
          }
          let Ed = [],
            Jd = [];
          for (; vd.pos > 0;) Nd(dd.start || 0, dd.bufferStart || 0, Ed, Jd, -1, 0);
          let Ud = null !== (Od = dd.length) && void 0 !== Od ? Od : Ed.length ? Jd[0] + Ed[0].length : 0;
          return new qd(Qd[dd.topID], Ed.reverse(), Jd.reverse(), Ud)
        }(dd)
      }
    }
    qd.empty = new qd(vd.none, [], [], 0);
    class Hd {
      constructor(dd, Od) {
        this.buffer = dd, this.index = Od
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
        return new Hd(this.buffer, this.index)
      }
    }
    class yd {
      constructor(dd, Od, md) {
        this.buffer = dd, this.length = Od, this.set = md
      }
      get type() {
        return vd.none
      }
      toString() {
        let dd = [];
        for (let Od = 0; Od < this.buffer.length;) dd.push(this.childString(Od)), Od = this.buffer[Od + 3];
        return dd.join(",")
      }
      childString(dd) {
        let Od = this.buffer[dd],
          md = this.buffer[dd + 3],
          Wd = this.set.types[Od],
          Fd = Wd.name;
        if (/\W/.test(Fd) && !Wd.isError && (Fd = JSON.stringify(Fd)), md == (dd += 4)) return Fd;
        let Rd = [];
        for (; dd < md;) Rd.push(this.childString(dd)), dd = this.buffer[dd + 3];
        return Fd + "(" + Rd.join(",") + ")"
      }
      findChild(dd, Od, md, Wd, Fd) {
        let {
          buffer: Rd
        } = this, Xd = -1;
        for (let Kd = dd; Kd != Od && !(bd(Fd, Wd, Rd[Kd + 1], Rd[Kd + 2]) && (Xd = Kd, md > 0)); Kd = Rd[Kd + 3]);
        return Xd
      }
      slice(dd, Od, md) {
        let Wd = this.buffer,
          Fd = new Uint16Array(Od - dd),
          Rd = 0;
        for (let Xd = dd, Kd = 0; Xd < Od;) {
          Fd[Kd++] = Wd[Xd++], Fd[Kd++] = Wd[Xd++] - md;
          let Od = Fd[Kd++] = Wd[Xd++] - md;
          Fd[Kd++] = Wd[Xd++] - dd, Rd = Math.max(Rd, Od)
        }
        return new yd(Fd, Rd, this.set)
      }
    }

    function bd(dd, Od, md, Wd) {
      switch (dd) {
        case -2:
          return md < Od;
        case -1:
          return Wd >= Od && md < Od;
        case 0:
          return md < Od && Wd > Od;
        case 1:
          return md <= Od && Wd > Od;
        case 2:
          return Wd > Od;
        case 4:
          return !0
      }
    }

    function Td(dd, Od, md, Wd) {
      for (var Fd; dd.from == dd.to || (md < 1 ? dd.from >= Od : dd.from > Od) || (md > -1 ? dd.to <= Od : dd.to < Od);) {
        let Od = !Wd && dd instanceof Yd && dd.index < 0 ? null : dd.parent;
        if (!Od) return dd;
        dd = Od
      }
      let Rd = Wd ? 0 : Nd.IgnoreOverlays;
      if (Wd)
        for (let Xd = dd, Kd = Xd.parent; Kd; Xd = Kd, Kd = Xd.parent) Xd instanceof Yd && Xd.index < 0 && (null === (Fd = Kd.enter(Od, md, Rd)) || void 0 === Fd ? void 0 : Fd.from) != Xd.from && (dd = Kd);
      for (;;) {
        let Wd = dd.enter(Od, md, Rd);
        if (!Wd) return dd;
        dd = Wd
      }
    }
    class pd {
      cursor() {
        return new Bd(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(dd) {
        let Od = gd(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Od.length ? Od[0] : null
      }
      getChildren(dd) {
        return gd(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(dd) {
        return Td(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(dd) {
        return Td(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(dd) {
        return wd(this.parent, dd)
      }
      enterUnfinishedNodesBefore(dd) {
        let Od = this.childBefore(dd),
          md = this;
        for (; Od;) {
          let dd = Od.lastChild;
          if (!dd || dd.to != Od.to) break;
          dd.type.isError && dd.from == dd.to ? (md = Od, Od = dd.prevSibling) : Od = dd
        }
        return md
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Yd extends pd {
      constructor(dd, Od, md, Wd) {
        super(), this._tree = dd, this.from = Od, this.index = md, this._parent = Wd
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
      nextChild(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Rd = this;;) {
          for (let {
              children: Xd,
              positions: hd
            } = Rd._tree, vd = Od > 0 ? Xd.length : -1; dd != vd; dd += Od) {
            let vd, Qd = Xd[dd],
              td = hd[dd] + Rd.from;
            if (Fd & Nd.EnterBracketed && Qd instanceof qd && (vd = Kd.get(Qd)) && !vd.overlay && vd.bracketed && md >= td && md <= td + Qd.length || bd(Wd, md, td, td + Qd.length))
              if (Qd instanceof yd) {
                if (Fd & Nd.ExcludeBuffers) continue;
                let Xd = Qd.findChild(0, Qd.buffer.length, Od, md - td, Wd);
                if (Xd > -1) return new Jd(new Ed(Rd, Qd, dd, td), null, Xd)
              } else if (Fd & Nd.IncludeAnonymous || !Qd.type.isAnonymous || Sd(Qd)) {
              let Xd;
              if (!(Fd & Nd.IgnoreMounts) && (Xd = Kd.get(Qd)) && !Xd.overlay) return new Yd(Xd.tree, td, dd, Rd);
              let hd = new Yd(Qd, td, dd, Rd);
              return Fd & Nd.IncludeAnonymous || !hd.type.isAnonymous ? hd : hd.nextChild(Od < 0 ? Qd.children.length - 1 : 0, Od, md, Wd, Fd)
            }
          }
          if (Fd & Nd.IncludeAnonymous || !Rd.type.isAnonymous) return null;
          if (dd = Rd.index >= 0 ? Rd.index + Od : Od < 0 ? -1 : Rd._parent._tree.children.length, Rd = Rd._parent, !Rd) return null
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
      enter(dd, Od) {
        let md, Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Wd & Nd.IgnoreOverlays) && (md = Kd.get(this._tree)) && md.overlay) {
          let Fd = dd - this.from,
            Rd = Wd & Nd.EnterBracketed && md.bracketed;
          for (let {
              from: dd,
              to: Wd
            }
            of md.overlay)
            if ((Od > 0 || Rd ? dd <= Fd : dd < Fd) && (Od < 0 || Rd ? Wd >= Fd : Wd > Fd)) return new Yd(md.tree, md.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, dd, Od, Wd)
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

    function gd(dd, Od, md, Wd) {
      let Fd = dd.cursor(),
        Rd = [];
      if (!Fd.firstChild()) return Rd;
      if (null != md)
        for (let Xd = !1; !Xd;)
          if (Xd = Fd.type.is(md), !Fd.nextSibling()) return Rd;
      for (;;) {
        if (null != Wd && Fd.type.is(Wd)) return Rd;
        if (Fd.type.is(Od) && Rd.push(Fd.node), !Fd.nextSibling()) return null == Wd ? Rd : []
      }
    }

    function wd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od.length - 1;
      for (let Wd = dd; md >= 0; Wd = Wd.parent) {
        if (!Wd) return !1;
        if (!Wd.type.isAnonymous) {
          if (Od[md] && Od[md] != Wd.name) return !1;
          md--
        }
      }
      return !0
    }
    class Ed {
      constructor(dd, Od, md, Wd) {
        this.parent = dd, this.buffer = Od, this.index = md, this.start = Wd
      }
    }
    class Jd extends pd {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(dd, Od, md) {
        super(), this.context = dd, this._parent = Od, this.index = md, this.type = dd.buffer.set.types[dd.buffer.buffer[md]]
      }
      child(dd, Od, md) {
        let {
          buffer: Wd
        } = this.context, Fd = Wd.findChild(this.index + 4, Wd.buffer[this.index + 3], dd, Od - this.context.start, md);
        return Fd < 0 ? null : new Jd(this.context, this, Fd)
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
      enter(dd, Od) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Nd.ExcludeBuffers) return null;
        let {
          buffer: md
        } = this.context, Wd = md.findChild(this.index + 4, md.buffer[this.index + 3], Od > 0 ? 1 : -1, dd - this.context.start, Od);
        return Wd < 0 ? null : new Jd(this.context, this, Wd)
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
        } = this.context, Od = dd.buffer[this.index + 3];
        return Od < (this._parent ? dd.buffer[this._parent.index + 3] : dd.buffer.length) ? new Jd(this.context, this._parent, Od) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: dd
        } = this.context, Od = this._parent ? this._parent.index + 4 : 0;
        return this.index == Od ? this.externalSibling(-1) : new Jd(this.context, this._parent, dd.findChild(Od, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let dd = [],
          Od = [],
          {
            buffer: md
          } = this.context,
          Wd = this.index + 4,
          Fd = md.buffer[this.index + 3];
        if (Fd > Wd) {
          let Rd = md.buffer[this.index + 1];
          dd.push(md.slice(Wd, Fd, Rd)), Od.push(0)
        }
        return new qd(this.type, dd, Od, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Ud(dd) {
      if (!dd.length) return null;
      let Od = 0,
        md = dd[0];
      for (let Rd = 1; Rd < dd.length; Rd++) {
        let Wd = dd[Rd];
        (Wd.from > md.from || Wd.to < md.to) && (md = Wd, Od = Rd)
      }
      let Wd = md instanceof Yd && md.index < 0 ? null : md.parent,
        Fd = dd.slice();
      return Wd ? Fd[Od] = Wd : Fd.splice(Od, 1), new xd(Fd, md)
    }
    class xd {
      constructor(dd, Od) {
        this.heads = dd, this.node = Od
      }
      get next() {
        return Ud(this.heads)
      }
    }
    class Bd {
      get name() {
        return this.type.name
      }
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Od & ~Nd.EnterBracketed, dd instanceof Yd) this.yieldNode(dd);
        else {
          this._tree = dd.context.parent, this.buffer = dd.context;
          for (let Od = dd._parent; Od; Od = Od._parent) this.stack.unshift(Od.index);
          this.bufferNode = dd, this.yieldBuf(dd.index)
        }
      }
      yieldNode(dd) {
        return !!dd && (this._tree = dd, this.type = dd.type, this.from = dd.from, this.to = dd.to, !0)
      }
      yieldBuf(dd, Od) {
        this.index = dd;
        let {
          start: md,
          buffer: Wd
        } = this.buffer;
        return this.type = Od || Wd.set.types[Wd.buffer[dd]], this.from = md + Wd.buffer[dd + 1], this.to = md + Wd.buffer[dd + 2], !0
      }
      yield(dd) {
        return !!dd && (dd instanceof Yd ? (this.buffer = null, this.yieldNode(dd)) : (this.buffer = dd.context, this.yieldBuf(dd.index, dd.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(dd, Od, md) {
        if (!this.buffer) return this.yield(this._tree.nextChild(dd < 0 ? this._tree._tree.children.length - 1 : 0, dd, Od, md, this.mode));
        let {
          buffer: Wd
        } = this.buffer, Fd = Wd.findChild(this.index + 4, Wd.buffer[this.index + 3], dd, Od - this.buffer.start, md);
        return !(Fd < 0) && (this.stack.push(this.index), this.yieldBuf(Fd))
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
      enter(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(md & Nd.ExcludeBuffers) && this.enterChild(1, dd, Od) : this.yield(this._tree.enter(dd, Od, md))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Nd.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let dd = this.mode & Nd.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(dd)
      }
      sibling(dd) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + dd, dd, 0, 4, this.mode));
        let {
          buffer: Od
        } = this.buffer, md = this.stack.length - 1;
        if (dd < 0) {
          let dd = md < 0 ? 0 : this.stack[md] + 4;
          if (this.index != dd) return this.yieldBuf(Od.findChild(dd, this.index, -1, 0, 4))
        } else {
          let dd = Od.buffer[this.index + 3];
          if (dd < (md < 0 ? Od.buffer.length : Od.buffer[this.stack[md] + 3])) return this.yieldBuf(dd)
        }
        return md < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + dd, dd, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(dd) {
        let Od, md, {
          buffer: Wd
        } = this;
        if (Wd) {
          if (dd > 0) {
            if (this.index < Wd.buffer.buffer.length) return !1
          } else
            for (let dd = 0; dd < this.index; dd++)
              if (Wd.buffer.buffer[dd + 3] < this.index) return !1;
          ({
            index: Od,
            parent: md
          } = Wd)
        } else({
          index: Od,
          _parent: md
        } = this._tree);
        for (; md;
          ({
            index: Od,
            _parent: md
          } = md))
          if (Od > -1)
            for (let Wd = Od + dd, Fd = dd < 0 ? -1 : md._tree.children.length; Wd != Fd; Wd += dd) {
              let dd = md._tree.children[Wd];
              if (this.mode & Nd.IncludeAnonymous || dd instanceof yd || !dd.type.isAnonymous || Sd(dd)) return !1
            }
        return !0
      }
      move(dd, Od) {
        if (Od && this.enterChild(dd, 0, 4)) return !0;
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Od < 1 ? this.from >= dd : this.from > dd) || (Od > -1 ? this.to <= dd : this.to < dd)) && this.parent(););
        for (; this.enterChild(1, dd, Od););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let dd = this.bufferNode,
          Od = null,
          md = 0;
        if (dd && dd.context == this.buffer) dd: for (let Wd = this.index, Fd = this.stack.length; Fd >= 0;) {
          for (let Rd = dd; Rd; Rd = Rd._parent)
            if (Rd.index == Wd) {
              if (Wd == this.index) return Rd;
              Od = Rd, md = Fd + 1;
              break dd
            } Wd = this.stack[--Fd]
        }
        for (let Wd = md; Wd < this.stack.length; Wd++) Od = new Jd(this.buffer, Od, this.stack[Wd]);
        return this.bufferNode = new Jd(this.buffer, Od, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(dd, Od) {
        for (let md = 0;;) {
          let Wd = !1;
          if (this.type.isAnonymous || !1 !== dd(this)) {
            if (this.firstChild()) {
              md++;
              continue
            }
            this.type.isAnonymous || (Wd = !0)
          }
          for (;;) {
            if (Wd && Od && Od(this), Wd = this.type.isAnonymous, !md) return;
            if (this.nextSibling()) break;
            this.parent(), md--, Wd = !0
          }
        }
      }
      matchContext(dd) {
        if (!this.buffer) return wd(this.node.parent, dd);
        let {
          buffer: Od
        } = this.buffer, {
          types: md
        } = Od.set;
        for (let Wd = dd.length - 1, Fd = this.stack.length - 1; Wd >= 0; Fd--) {
          if (Fd < 0) return wd(this._tree, dd, Wd);
          let Rd = md[Od.buffer[this.stack[Fd]]];
          if (!Rd.isAnonymous) {
            if (dd[Wd] && dd[Wd] != Rd.name) return !1;
            Wd--
          }
        }
        return !0
      }
    }

    function Sd(dd) {
      return dd.children.some((dd => dd instanceof yd || !dd.type.isAnonymous || Sd(dd)))
    }
    const sd = new WeakMap;

    function ud(dd, Od) {
      if (!dd.isAnonymous || Od instanceof yd || Od.type != dd) return 1;
      let md = sd.get(Od);
      if (null == md) {
        md = 1;
        for (let Wd of Od.children) {
          if (Wd.type != dd || !(Wd instanceof qd)) {
            md = 1;
            break
          }
          md += ud(dd, Wd)
        }
        sd.set(Od, md)
      }
      return md
    }

    function Vd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
      let vd = 0;
      for (let Nd = Wd; Nd < Fd; Nd++) vd += ud(dd, Od[Nd]);
      let Qd = Math.ceil(1.5 * vd / 8),
        td = [],
        od = [];
      return function Od(md, Wd, Fd, Xd, Kd) {
        for (let vd = Fd; vd < Xd;) {
          let Fd = vd,
            Nd = Wd[vd],
            qd = ud(dd, md[vd]);
          for (vd++; vd < Xd; vd++) {
            let Od = ud(dd, md[vd]);
            if (qd + Od >= Qd) break;
            qd += Od
          }
          if (vd == Fd + 1) {
            if (qd > Qd) {
              let dd = md[Fd];
              Od(dd.children, dd.positions, 0, dd.children.length, Wd[Fd] + Kd);
              continue
            }
            td.push(md[Fd])
          } else {
            let Od = Wd[vd - 1] + md[vd - 1].length - Nd;
            td.push(Vd(dd, md, Wd, Fd, vd, Nd, Od, null, hd))
          }
          od.push(Nd + Kd - Rd)
        }
      }(Od, md, Wd, Fd, 0), (Kd || hd)(td, od, Xd)
    }
    class Ad {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(dd, Od, md) {
        let Wd = this.map.get(dd);
        Wd || this.map.set(dd, Wd = new Map), Wd.set(Od, md)
      }
      getBuffer(dd, Od) {
        let md = this.map.get(dd);
        return md && md.get(Od)
      }
      set(dd, Od) {
        dd instanceof Jd ? this.setBuffer(dd.context.buffer, dd.index, Od) : dd instanceof Yd && this.map.set(dd.tree, Od)
      }
      get(dd) {
        return dd instanceof Jd ? this.getBuffer(dd.context.buffer, dd.index) : dd instanceof Yd ? this.map.get(dd.tree) : void 0
      }
      cursorSet(dd, Od) {
        dd.buffer ? this.setBuffer(dd.buffer.buffer, dd.index, Od) : this.map.set(dd.tree, Od)
      }
      cursorGet(dd) {
        return dd.buffer ? this.getBuffer(dd.buffer.buffer, dd.index) : this.map.get(dd.tree)
      }
    }
    class rd {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = dd, this.to = Od, this.tree = md, this.offset = Wd, this.open = (Fd ? 1 : 0) | (Rd ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = [new rd(0, dd.length, dd, 0, !1, md)];
        for (let Fd of Od) Fd.to > dd.length && Wd.push(Fd);
        return Wd
      }
      static applyChanges(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Od.length) return dd;
        let Wd = [],
          Fd = 1,
          Rd = dd.length ? dd[0] : null;
        for (let Xd = 0, Kd = 0, hd = 0;; Xd++) {
          let vd = Xd < Od.length ? Od[Xd] : null,
            Qd = vd ? vd.fromA : 1e9;
          if (Qd - Kd >= md)
            for (; Rd && Rd.from < Qd;) {
              let Od = Rd;
              if (Kd >= Od.from || Qd <= Od.to || hd) {
                let dd = Math.max(Od.from, Kd) - hd,
                  md = Math.min(Od.to, Qd) - hd;
                Od = dd >= md ? null : new rd(dd, md, Od.tree, Od.offset + hd, Xd > 0, !!vd)
              }
              if (Od && Wd.push(Od), Rd.to > Qd) break;
              Rd = Fd < dd.length ? dd[Fd++] : null
            }
          if (!vd) break;
          Kd = vd.toA, hd = vd.toA - vd.toB
        }
        return Wd
      }
    }
    class Gd {
      startParse(dd, Od, md) {
        return "string" == typeof dd && (dd = new nd(dd)), md = md ? md.length ? md.map((dd => new Rd(dd.from, dd.to))) : [new Rd(0, 0)] : [new Rd(0, dd.length)], this.createParse(dd, Od || [], md)
      }
      parse(dd, Od, md) {
        let Wd = this.startParse(dd, Od, md);
        for (;;) {
          let dd = Wd.advance();
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
      read(dd, Od) {
        return this.string.slice(dd, Od)
      }
    }
    new Xd({
      perNode: !0
    })
  },
  53805: (dd, Od, md) => {
    md.d(Od, {
      d: () => od,
      e: () => hd,
      h: () => td,
      k: () => sd
    });
    var Wd = md(53798);
    let Fd = 0;
    class Rd {
      constructor(dd, Od, md, Wd) {
        this.name = dd, this.set = Od, this.base = md, this.modified = Wd, this.id = Fd++
      }
      toString() {
        let {
          name: dd
        } = this;
        for (let Od of this.modified) Od.name && (dd = `${Od.name}(${dd})`);
        return dd
      }
      static define(dd, Od) {
        let md = "string" == typeof dd ? dd : "?";
        if (dd instanceof Rd && (Od = dd), null === Od || void 0 === Od ? void 0 : Od.base) throw new Error("Can not derive from a modified tag");
        let Wd = new Rd(md, [], null, []);
        if (Wd.set.push(Wd), Od)
          for (let Fd of Od.set) Wd.set.push(Fd);
        return Wd
      }
      static defineModifier(dd) {
        let Od = new Kd(dd);
        return dd => dd.modified.indexOf(Od) > -1 ? dd : Kd.get(dd.base || dd, dd.modified.concat(Od).sort(((dd, Od) => dd.id - Od.id)))
      }
    }
    let Xd = 0;
    class Kd {
      constructor(dd) {
        this.name = dd, this.instances = [], this.id = Xd++
      }
      static get(dd, Od) {
        if (!Od.length) return dd;
        let md = Od[0].instances.find((md => {
          return md.base == dd && (Wd = Od, Fd = md.modified, Wd.length == Fd.length && Wd.every(((dd, Od) => dd == Fd[Od])));
          var Wd, Fd
        }));
        if (md) return md;
        let Wd = [],
          Fd = new Rd(dd.name, Wd, dd, Od);
        for (let Rd of Od) Rd.instances.push(Fd);
        let Xd = function(dd) {
          let Od = [
            []
          ];
          for (let md = 0; md < dd.length; md++)
            for (let Wd = 0, Fd = Od.length; Wd < Fd; Wd++) Od.push(Od[Wd].concat(dd[md]));
          return Od.sort(((dd, Od) => Od.length - dd.length))
        }(Od);
        for (let Rd of dd.set)
          if (!Rd.modified.length)
            for (let dd of Xd) Wd.push(Kd.get(Rd, dd));
        return Fd
      }
    }

    function hd(dd) {
      let Od = Object.create(null);
      for (let md in dd) {
        let Wd = dd[md];
        Array.isArray(Wd) || (Wd = [Wd]);
        for (let dd of md.split(" "))
          if (dd) {
            let md = [],
              Fd = 2,
              Rd = dd;
            for (let Od = 0;;) {
              if ("..." == Rd && Od > 0 && Od + 3 == dd.length) {
                Fd = 1;
                break
              }
              let Wd = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Rd);
              if (!Wd) throw new RangeError("Invalid path: " + dd);
              if (md.push("*" == Wd[0] ? "" : '"' == Wd[0][0] ? JSON.parse(Wd[0]) : Wd[0]), Od += Wd[0].length, Od == dd.length) break;
              let Xd = dd[Od++];
              if (Od == dd.length && "!" == Xd) {
                Fd = 0;
                break
              }
              if ("/" != Xd) throw new RangeError("Invalid path: " + dd);
              Rd = dd.slice(Od)
            }
            let Xd = md.length - 1,
              Kd = md[Xd];
            if (!Kd) throw new RangeError("Invalid path: " + dd);
            let hd = new Qd(Wd, Fd, Xd > 0 ? md.slice(0, Xd) : null);
            Od[Kd] = hd.sort(Od[Kd])
          }
      }
      return vd.add(Od)
    }
    const vd = new Wd.h({
      combine(dd, Od) {
        let md, Wd, Fd;
        for (; dd || Od;) {
          if (!dd || Od && dd.depth >= Od.depth ? (Fd = Od, Od = Od.next) : (Fd = dd, dd = dd.next), md && md.mode == Fd.mode && !Fd.context && !md.context) continue;
          let Rd = new Qd(Fd.tags, Fd.mode, Fd.context);
          md ? md.next = Rd : Wd = Rd, md = Rd
        }
        return Wd
      }
    });
    class Qd {
      constructor(dd, Od, md, Wd) {
        this.tags = dd, this.mode = Od, this.context = md, this.next = Wd
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

    function td(dd, Od) {
      let md = Object.create(null);
      for (let Rd of dd)
        if (Array.isArray(Rd.tag))
          for (let dd of Rd.tag) md[dd.id] = Rd.class;
        else md[Rd.tag.id] = Rd.class;
      let {
        scope: Wd,
        all: Fd = null
      } = Od || {};
      return {
        style: dd => {
          let Od = Fd;
          for (let Wd of dd)
            for (let dd of Wd.set) {
              let Wd = md[dd.id];
              if (Wd) {
                Od = Od ? Od + " " + Wd : Wd;
                break
              }
            }
          return Od
        },
        scope: Wd
      }
    }

    function od(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.length,
        Rd = new Nd(Wd, Array.isArray(Od) ? Od : [Od], md);
      Rd.highlightRange(dd.cursor(), Wd, Fd, "", Rd.highlighters), Rd.flush(Fd)
    }
    Qd.empty = new Qd([], 2, null);
    class Nd {
      constructor(dd, Od, md) {
        this.at = dd, this.highlighters = Od, this.span = md, this.class = ""
      }
      startSpan(dd, Od) {
        Od != this.class && (this.flush(dd), dd > this.at && (this.at = dd), this.class = Od)
      }
      flush(dd) {
        dd > this.at && this.class && this.span(this.at, dd, this.class)
      }
      highlightRange(dd, Od, md, Fd, Rd) {
        let {
          type: Xd,
          from: Kd,
          to: hd
        } = dd;
        if (Kd >= md || hd <= Od) return;
        Xd.isTop && (Rd = this.highlighters.filter((dd => !dd.scope || dd.scope(Xd))));
        let td = Fd,
          od = function(dd) {
            let Od = dd.type.prop(vd);
            for (; Od && Od.context && !dd.matchContext(Od.context);) Od = Od.next;
            return Od || null
          }(dd) || Qd.empty,
          Nd = function(dd, Od) {
            let md = null;
            for (let Wd of dd) {
              let dd = Wd.style(Od);
              dd && (md = md ? md + " " + dd : dd)
            }
            return md
          }(Rd, od.tags);
        if (Nd && (td && (td += " "), td += Nd, 1 == od.mode && (Fd += (Fd ? " " : "") + Nd)), this.startSpan(Math.max(Od, Kd), td), od.opaque) return;
        let qd = dd.tree && dd.tree.prop(Wd.h.mounted);
        if (qd && qd.overlay) {
          let Wd = dd.node.enter(qd.overlay[0].from + Kd, 1),
            Xd = this.highlighters.filter((dd => !dd.scope || dd.scope(qd.tree.type))),
            vd = dd.firstChild();
          for (let Qd = 0, od = Kd;; Qd++) {
            let Nd = Qd < qd.overlay.length ? qd.overlay[Qd] : null,
              Hd = Nd ? Nd.from + Kd : hd,
              yd = Math.max(Od, od),
              bd = Math.min(md, Hd);
            if (yd < bd && vd)
              for (; dd.from < bd && (this.highlightRange(dd, yd, bd, Fd, Rd), this.startSpan(Math.min(bd, dd.to), td), !(dd.to >= Hd) && dd.nextSibling()););
            if (!Nd || Hd > md) break;
            od = Nd.to + Kd, od > Od && (this.highlightRange(Wd.cursor(), Math.max(Od, Nd.from + Kd), Math.min(md, od), "", Xd), this.startSpan(Math.min(md, od), td))
          }
          vd && dd.parent()
        } else if (dd.firstChild()) {
          qd && (Fd = "");
          do {
            if (!(dd.to <= Od)) {
              if (dd.from >= md) break;
              this.highlightRange(dd, Od, md, Fd, Rd), this.startSpan(Math.min(md, dd.to), td)
            }
          } while (dd.nextSibling());
          dd.parent()
        }
      }
    }
    const qd = Rd.define,
      Hd = qd(),
      yd = qd(),
      bd = qd(yd),
      Td = qd(yd),
      pd = qd(),
      Yd = qd(pd),
      gd = qd(pd),
      wd = qd(),
      Ed = qd(wd),
      Jd = qd(),
      Ud = qd(),
      xd = qd(),
      Bd = qd(xd),
      Sd = qd(),
      sd = {
        comment: Hd,
        lineComment: qd(Hd),
        blockComment: qd(Hd),
        docComment: qd(Hd),
        name: yd,
        variableName: qd(yd),
        typeName: bd,
        tagName: qd(bd),
        propertyName: Td,
        attributeName: qd(Td),
        className: qd(yd),
        labelName: qd(yd),
        namespace: qd(yd),
        macroName: qd(yd),
        literal: pd,
        string: Yd,
        docString: qd(Yd),
        character: qd(Yd),
        attributeValue: qd(Yd),
        number: gd,
        integer: qd(gd),
        float: qd(gd),
        bool: qd(pd),
        regexp: qd(pd),
        escape: qd(pd),
        color: qd(pd),
        url: qd(pd),
        keyword: Jd,
        self: qd(Jd),
        null: qd(Jd),
        atom: qd(Jd),
        unit: qd(Jd),
        modifier: qd(Jd),
        operatorKeyword: qd(Jd),
        controlKeyword: qd(Jd),
        definitionKeyword: qd(Jd),
        moduleKeyword: qd(Jd),
        operator: Ud,
        derefOperator: qd(Ud),
        arithmeticOperator: qd(Ud),
        logicOperator: qd(Ud),
        bitwiseOperator: qd(Ud),
        compareOperator: qd(Ud),
        updateOperator: qd(Ud),
        definitionOperator: qd(Ud),
        typeOperator: qd(Ud),
        controlOperator: qd(Ud),
        punctuation: xd,
        separator: qd(xd),
        bracket: Bd,
        angleBracket: qd(Bd),
        squareBracket: qd(Bd),
        paren: qd(Bd),
        brace: qd(Bd),
        content: wd,
        heading: Ed,
        heading1: qd(Ed),
        heading2: qd(Ed),
        heading3: qd(Ed),
        heading4: qd(Ed),
        heading5: qd(Ed),
        heading6: qd(Ed),
        contentSeparator: qd(wd),
        list: qd(wd),
        quote: qd(wd),
        emphasis: qd(wd),
        strong: qd(wd),
        link: qd(wd),
        monospace: qd(wd),
        strikethrough: qd(wd),
        inserted: qd(),
        deleted: qd(),
        changed: qd(),
        invalid: qd(),
        meta: Sd,
        documentMeta: qd(Sd),
        annotation: qd(Sd),
        processingInstruction: qd(Sd),
        definition: Rd.defineModifier("definition"),
        constant: Rd.defineModifier("constant"),
        function: Rd.defineModifier("function"),
        standard: Rd.defineModifier("standard"),
        local: Rd.defineModifier("local"),
        special: Rd.defineModifier("special")
      };
    for (let ud in sd) {
      let dd = sd[ud];
      dd instanceof Rd && (dd.name = ud)
    }
    td([{
      tag: sd.link,
      class: "tok-link"
    }, {
      tag: sd.heading,
      class: "tok-heading"
    }, {
      tag: sd.emphasis,
      class: "tok-emphasis"
    }, {
      tag: sd.strong,
      class: "tok-strong"
    }, {
      tag: sd.keyword,
      class: "tok-keyword"
    }, {
      tag: sd.atom,
      class: "tok-atom"
    }, {
      tag: sd.bool,
      class: "tok-bool"
    }, {
      tag: sd.url,
      class: "tok-url"
    }, {
      tag: sd.labelName,
      class: "tok-labelName"
    }, {
      tag: sd.inserted,
      class: "tok-inserted"
    }, {
      tag: sd.deleted,
      class: "tok-deleted"
    }, {
      tag: sd.literal,
      class: "tok-literal"
    }, {
      tag: sd.string,
      class: "tok-string"
    }, {
      tag: sd.number,
      class: "tok-number"
    }, {
      tag: [sd.regexp, sd.escape, sd.special(sd.string)],
      class: "tok-string2"
    }, {
      tag: sd.variableName,
      class: "tok-variableName"
    }, {
      tag: sd.local(sd.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: sd.definition(sd.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: sd.special(sd.variableName),
      class: "tok-variableName2"
    }, {
      tag: sd.definition(sd.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: sd.typeName,
      class: "tok-typeName"
    }, {
      tag: sd.namespace,
      class: "tok-namespace"
    }, {
      tag: sd.className,
      class: "tok-className"
    }, {
      tag: sd.macroName,
      class: "tok-macroName"
    }, {
      tag: sd.propertyName,
      class: "tok-propertyName"
    }, {
      tag: sd.operator,
      class: "tok-operator"
    }, {
      tag: sd.comment,
      class: "tok-comment"
    }, {
      tag: sd.meta,
      class: "tok-meta"
    }, {
      tag: sd.invalid,
      class: "tok-invalid"
    }, {
      tag: sd.punctuation,
      class: "tok-punctuation"
    }])
  },
  53812: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd.h,
      e: () => Xd.v,
      g: () => Xd.I,
      i: () => Xd.M,
      l: () => Kd.l,
      n: () => Um,
      p: () => Kd.L,
      r: () => Kd.eb
    });
    var Wd = md(1487),
      Fd = md(1482),
      Rd = md(66),
      Xd = md(53759),
      Kd = md(53768),
      hd = md(53793),
      vd = md(53798);

    function Qd(dd, Od) {
      return md => {
        let {
          state: Wd,
          dispatch: Fd
        } = md;
        if (Wd.readOnly) return !1;
        let Rd = dd(Od, Wd);
        return !!Rd && (Fd(Wd.update(Rd)), !0)
      }
    }
    const td = Qd(bd, 0),
      od = Qd(yd, 0),
      Nd = Qd(((dd, Od) => yd(dd, Od, function(dd) {
        let Od = [];
        for (let md of dd.selection.By) {
          let Wd = dd.doc.lineAt(md.from),
            Fd = md.to <= Wd.to ? Wd : dd.doc.lineAt(md.to);
          Fd.from > Wd.from && Fd.from == md.to && (Fd = md.to == Wd.to + 1 ? Wd : dd.doc.lineAt(md.to - 1));
          let Rd = Od.length - 1;
          Rd >= 0 && Od[Rd].to > Wd.from ? Od[Rd].to = Fd.to : Od.push({
            from: Wd.from + /^\s*/.exec(Wd.text)[0].length,
            to: Fd.to
          })
        }
        return Od
      }(Od))), 0);

    function qd(dd, Od) {
      let md = dd.languageDataAt("commentTokens", Od, 1);
      return md.length ? md[0] : {}
    }
    const Hd = 50;

    function yd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od.selection.By,
        Wd = md.map((dd => qd(Od, dd.from).block));
      if (!Wd.every((dd => dd))) return null;
      let Fd = md.map(((dd, md) => function(dd, Od, md, Wd) {
        let Fd, Rd, {
            open: Xd,
            close: Kd
          } = Od,
          hd = dd.sliceDoc(md - Hd, md),
          vd = dd.sliceDoc(Wd, Wd + Hd),
          Qd = /\s*$/.exec(hd)[0].length,
          td = /^\s*/.exec(vd)[0].length,
          od = hd.length - Qd;
        if (hd.slice(od - Xd.length, od) == Xd && vd.slice(td, td + Kd.length) == Kd) return {
          open: {
            pos: md - Qd,
            margin: Qd && 1
          },
          close: {
            pos: Wd + td,
            margin: td && 1
          }
        };
        Wd - md <= 2 * Hd ? Fd = Rd = dd.sliceDoc(md, Wd) : (Fd = dd.sliceDoc(md, md + Hd), Rd = dd.sliceDoc(Wd - Hd, Wd));
        let Nd = /^\s*/.exec(Fd)[0].length,
          qd = /\s*$/.exec(Rd)[0].length,
          yd = Rd.length - qd - Kd.length;
        return Fd.slice(Nd, Nd + Xd.length) == Xd && Rd.slice(yd, yd + Kd.length) == Kd ? {
          open: {
            pos: md + Nd + Xd.length,
            margin: /\s/.test(Fd.charAt(Nd + Xd.length)) ? 1 : 0
          },
          close: {
            pos: Wd - qd - Kd.length,
            margin: /\s/.test(Rd.charAt(yd - 1)) ? 1 : 0
          }
        } : null
      }(Od, Wd[md], dd.from, dd.to)));
      if (2 != dd && !Fd.every((dd => dd))) return {
        changes: Od.changes(md.map(((dd, Od) => Fd[Od] ? [] : [{
          from: dd.from,
          insert: Wd[Od].open + " "
        }, {
          from: dd.to,
          insert: " " + Wd[Od].close
        }])))
      };
      if (1 != dd && Fd.some((dd => dd))) {
        let dd = [];
        for (let Od, md = 0; md < Fd.length; md++)
          if (Od = Fd[md]) {
            let Fd = Wd[md],
              {
                open: Rd,
                close: Xd
              } = Od;
            dd.push({
              from: Rd.pos - Fd.open.length,
              to: Rd.pos + Rd.margin
            }, {
              from: Xd.pos - Xd.margin,
              to: Xd.pos + Fd.close.length
            })
          } return {
          changes: dd
        }
      }
      return null
    }

    function bd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od.selection.By,
        Wd = [],
        Fd = -1;
      dd: for (let {
          from: Rd,
          to: Xd
        }
        of md) {
        let dd, md = Wd.length,
          Kd = 1e9;
        for (let hd = Rd; hd <= Xd;) {
          let md = Od.doc.lineAt(hd);
          if (void 0 == dd && (dd = qd(Od, md.from).line, !dd)) continue dd;
          if (md.from > Fd && (Rd == Xd || Xd > md.from)) {
            Fd = md.from;
            let Od = /^\s*/.exec(md.text)[0].length,
              Rd = Od == md.length,
              Xd = md.text.slice(Od, Od + dd.length) == dd ? Od : -1;
            Od < md.text.length && Od < Kd && (Kd = Od), Wd.push({
              line: md,
              comment: Xd,
              token: dd,
              indent: Od,
              empty: Rd,
              single: !1
            })
          }
          hd = md.to + 1
        }
        if (Kd < 1e9)
          for (let Od = md; Od < Wd.length; Od++) Wd[Od].indent < Wd[Od].line.text.length && (Wd[Od].indent = Kd);
        Wd.length == md + 1 && (Wd[md].single = !0)
      }
      if (2 != dd && Wd.some((dd => dd.comment < 0 && (!dd.empty || dd.single)))) {
        let dd = [];
        for (let {
            line: Od,
            token: Fd,
            indent: Rd,
            empty: Xd,
            single: Kd
          }
          of Wd) !Kd && Xd || dd.push({
          from: Od.from + Rd,
          insert: Fd + " "
        });
        let md = Od.changes(dd);
        return {
          changes: md,
          selection: Od.selection.map(md, 1)
        }
      }
      if (1 != dd && Wd.some((dd => dd.comment >= 0))) {
        let dd = [];
        for (let {
            line: Od,
            comment: md,
            token: Fd
          }
          of Wd)
          if (md >= 0) {
            let Wd = Od.from + md,
              Rd = Wd + Fd.length;
            " " == Od.text[Rd - Od.from] && Rd++, dd.push({
              from: Wd,
              to: Rd
            })
          } return {
          changes: dd
        }
      }
      return null
    }
    const Td = Xd.c.define(),
      pd = Xd.c.define(),
      Yd = Xd.p.define(),
      gd = Xd.p.define({
        combine: dd => (0, Xd.W)(dd, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (dd, Od) => Od
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (dd, Od) => (md, Wd) => dd(md, Wd) || Od(md, Wd)
        })
      }),
      wd = Xd.M.define({
        create: () => zd.empty,
        update(dd, Od) {
          let md = Od.state.facet(gd),
            Wd = Od.annotation(Td);
          if (Wd) {
            let Fd = Sd.fromTransaction(Od, Wd.selection),
              Rd = Wd.side,
              Xd = 0 == Rd ? dd.undone : dd.done;
            return Xd = Fd ? sd(Xd, Xd.length, md.minDepth, Fd) : rd(Xd, Od.startState.selection), new zd(0 == Rd ? Wd.rest : Xd, 0 == Rd ? Xd : Wd.rest)
          }
          let Fd = Od.annotation(pd);
          if ("full" != Fd && "before" != Fd || (dd = dd.isolate()), !1 === Od.annotation(Xd.Q.addToHistory)) return Od.changes.empty ? dd : dd.addMapping(Od.changes.desc);
          let Rd = Sd.fromTransaction(Od),
            Kd = Od.annotation(Xd.Q.time),
            hd = Od.annotation(Xd.Q.userEvent);
          return Rd ? dd = dd.addChanges(Rd, Kd, hd, md, Od) : Od.selection && (dd = dd.addSelection(Od.startState.selection, Kd, hd, md.newGroupDelay)), "full" != Fd && "after" != Fd || (dd = dd.isolate()), dd
        },
        toJSON: dd => ({
          done: dd.done.map((dd => dd.toJSON())),
          undone: dd.undone.map((dd => dd.toJSON()))
        }),
        fromJSON: dd => new zd(dd.done.map(Sd.fromJSON), dd.undone.map(Sd.fromJSON))
      });

    function Ed(dd, Od) {
      return function(md) {
        let {
          state: Wd,
          dispatch: Fd
        } = md;
        if (!Od && Wd.readOnly) return !1;
        let Rd = Wd.field(wd, !1);
        if (!Rd) return !1;
        let Xd = Rd.pop(dd, Wd, Od);
        return !!Xd && (Fd(Xd), !0)
      }
    }
    const Jd = Ed(0, !1),
      Ud = Ed(1, !1),
      xd = Ed(0, !0),
      Bd = Ed(1, !0);
    class Sd {
      constructor(dd, Od, md, Wd, Fd) {
        this.changes = dd, this.effects = Od, this.mapped = md, this.startSelection = Wd, this.selectionsAfter = Fd
      }
      setSelAfter(dd) {
        return new Sd(this.changes, this.effects, this.mapped, this.startSelection, dd)
      }
      toJSON() {
        var dd, Od, md;
        return {
          changes: null === (dd = this.changes) || void 0 === dd ? void 0 : dd.toJSON(),
          mapped: null === (Od = this.mapped) || void 0 === Od ? void 0 : Od.toJSON(),
          startSelection: null === (md = this.startSelection) || void 0 === md ? void 0 : md.toJSON(),
          selectionsAfter: this.selectionsAfter.map((dd => dd.toJSON()))
        }
      }
      static fromJSON(dd) {
        return new Sd(dd.changes && Xd.ChangeSet.fromJSON(dd.changes), [], dd.mapped && Xd.f.fromJSON(dd.mapped), dd.startSelection && Xd.j.fromJSON(dd.startSelection), dd.selectionsAfter.map(Xd.j.fromJSON))
      }
      static fromTransaction(dd, Od) {
        let md = Vd;
        for (let Wd of dd.startState.facet(Yd)) {
          let Od = Wd(dd);
          Od.length && (md = md.concat(Od))
        }
        return !md.length && dd.changes.empty ? null : new Sd(dd.changes.invert(dd.startState.doc), md, void 0, Od || dd.startState.selection, Vd)
      }
      static selection(dd) {
        return new Sd(void 0, Vd, void 0, void 0, dd)
      }
    }

    function sd(dd, Od, md, Wd) {
      let Fd = Od + 1 > md + 20 ? Od - md - 1 : 0,
        Rd = dd.slice(Fd, Od);
      return Rd.push(Wd), Rd
    }

    function ud(dd, Od) {
      return dd.length ? Od.length ? dd.concat(Od) : dd : Od
    }
    const Vd = [],
      Ad = 200;

    function rd(dd, Od) {
      if (dd.length) {
        let md = dd[dd.length - 1],
          Wd = md.selectionsAfter.slice(Math.max(0, md.selectionsAfter.length - Ad));
        return Wd.length && Wd[Wd.length - 1].eq(Od) ? dd : (Wd.push(Od), sd(dd, dd.length - 1, 1e9, md.setSelAfter(Wd)))
      }
      return [Sd.selection([Od])]
    }

    function Gd(dd) {
      let Od = dd[dd.length - 1],
        md = dd.slice();
      return md[dd.length - 1] = Od.setSelAfter(Od.selectionsAfter.slice(0, Od.selectionsAfter.length - 1)), md
    }

    function nd(dd, Od) {
      if (!dd.length) return dd;
      let md = dd.length,
        Wd = Vd;
      for (; md;) {
        let Fd = Ld(dd[md - 1], Od, Wd);
        if (Fd.changes && !Fd.changes.empty || Fd.effects.length) {
          let Od = dd.slice(0, md);
          return Od[md - 1] = Fd, Od
        }
        Od = Fd.mapped, md--, Wd = Fd.selectionsAfter
      }
      return Wd.length ? [Sd.selection(Wd)] : Vd
    }

    function Ld(dd, Od, md) {
      let Wd = ud(dd.selectionsAfter.length ? dd.selectionsAfter.map((dd => dd.map(Od))) : Vd, md);
      if (!dd.changes) return Sd.selection(Wd);
      let Fd = dd.changes.map(Od),
        Rd = Od.mapDesc(dd.changes, !0),
        Kd = dd.mapped ? dd.mapped.composeDesc(Rd) : Rd;
      return new Sd(Fd, Xd.I.mapEffects(dd.effects, Od), Kd, dd.startSelection.map(Rd), Wd)
    }
    const Pd = /^(input\.type|delete)($|\.)/;
    class zd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = dd, this.undone = Od, this.prevTime = md, this.prevUserEvent = Wd
      }
      isolate() {
        return this.prevTime ? new zd(this.done, this.undone) : this
      }
      addChanges(dd, Od, md, Wd, Fd) {
        let Rd = this.done,
          Kd = Rd[Rd.length - 1];
        return Rd = Kd && Kd.changes && !Kd.changes.empty && dd.changes && (!md || Pd.test(md)) && (!Kd.selectionsAfter.length && Od - this.prevTime < Wd.newGroupDelay && Wd.joinToEvent(Fd, function(dd, Od) {
          let md = [],
            Wd = !1;
          return dd.iterChangedRanges(((dd, Od) => md.push(dd, Od))), Od.iterChangedRanges(((dd, Od, Fd, Rd) => {
            for (let Xd = 0; Xd < md.length;) {
              let dd = md[Xd++],
                Od = md[Xd++];
              Rd >= dd && Fd <= Od && (Wd = !0)
            }
          })), Wd
        }(Kd.changes, dd.changes)) || "input.type.compose" == md) ? sd(Rd, Rd.length - 1, Wd.minDepth, new Sd(dd.changes.compose(Kd.changes), ud(Xd.I.mapEffects(dd.effects, Kd.changes), Kd.effects), Kd.mapped, Kd.startSelection, Vd)) : sd(Rd, Rd.length, Wd.minDepth, dd), new zd(Rd, Vd, Od, md)
      }
      addSelection(dd, Od, md, Wd) {
        let Fd = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Vd;
        return Fd.length > 0 && Od - this.prevTime < Wd && md == this.prevUserEvent && md && /^select($|\.)/.test(md) && (Rd = Fd[Fd.length - 1], Xd = dd, Rd.By.length == Xd.By.length && 0 === Rd.By.filter(((dd, Od) => dd.empty != Xd.By[Od].empty)).length) ? this : new zd(rd(this.done, dd), this.undone, Od, md);
        var Rd, Xd
      }
      addMapping(dd) {
        return new zd(nd(this.done, dd), nd(this.undone, dd), this.prevTime, this.prevUserEvent)
      }
      pop(dd, Od, md) {
        let Wd = 0 == dd ? this.done : this.undone;
        if (0 == Wd.length) return null;
        let Fd = Wd[Wd.length - 1],
          Rd = Fd.selectionsAfter[0] || (Fd.startSelection ? Fd.startSelection.map(Fd.changes.invertedDesc, 1) : Od.selection);
        if (md && Fd.selectionsAfter.length) return Od.update({
          selection: Fd.selectionsAfter[Fd.selectionsAfter.length - 1],
          annotations: Td.of({
            side: dd,
            rest: Gd(Wd),
            selection: Rd
          }),
          userEvent: 0 == dd ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Fd.changes) {
          let md = 1 == Wd.length ? Vd : Wd.slice(0, Wd.length - 1);
          return Fd.mapped && (md = nd(md, Fd.mapped)), Od.update({
            changes: Fd.changes,
            selection: Fd.startSelection,
            effects: Fd.effects,
            annotations: Td.of({
              side: dd,
              rest: md,
              selection: Rd
            }),
            filter: !1,
            userEvent: 0 == dd ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    zd.empty = new zd(Vd, Vd);
    const cd = [{
      key: "Mod-z",
      run: Jd,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Ud,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Ud,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: xd,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Bd,
      preventDefault: !0
    }];

    function jd(dd, Od) {
      return Xd.j.create(dd.By.map(Od), dd.mainIndex)
    }

    function Dd(dd, Od) {
      return dd.update({
        selection: Od,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function ed(dd, Od) {
      let {
        state: md,
        dispatch: Wd
      } = dd, Fd = jd(md.selection, Od);
      return !Fd.eq(md.selection, !0) && (Wd(Dd(md, Fd)), !0)
    }

    function Id(dd, Od) {
      return Xd.j.cursor(Od ? dd.to : dd.from)
    }

    function ld(dd, Od) {
      return ed(dd, (md => md.empty ? dd.moveByChar(md, Od) : Id(md, Od)))
    }

    function Cd(dd) {
      return dd.textDirectionAt(dd.state.selection.main.head) == Kd.e.LTR
    }
    const Zd = dd => ld(dd, !Cd(dd)),
      kd = dd => ld(dd, Cd(dd));

    function fd(dd, Od) {
      return ed(dd, (md => md.empty ? dd.moveByGroup(md, Od) : Id(md, Od)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Md(dd, Od, md) {
      if (Od.type.prop(md)) return !0;
      let Wd = Od.to - Od.from;
      return Wd && (Wd > 2 || /[^\s,.;:]/.test(dd.sliceDoc(Od.from, Od.to))) || Od.firstChild
    }

    function dO(dd, Od, md) {
      let Wd, Fd, Rd = (0, hd.sb)(dd).resolveInner(Od.head),
        Kd = md ? vd.h.closedBy : vd.h.openedBy;
      for (let Xd = Od.head;;) {
        let Od = md ? Rd.childAfter(Xd) : Rd.childBefore(Xd);
        if (!Od) break;
        Md(dd, Od, Kd) ? Rd = Od : Xd = md ? Od.to : Od.from
      }
      return Fd = Rd.type.prop(Kd) && (Wd = md ? (0, hd.gb)(dd, Rd.from, 1) : (0, hd.gb)(dd, Rd.to, -1)) && Wd.matched ? md ? Wd.end.to : Wd.end.from : md ? Rd.to : Rd.from, Xd.j.cursor(Fd, md ? -1 : 1)
    }

    function OO(dd, Od) {
      return ed(dd, (md => {
        if (!md.empty) return Id(md, Od);
        let Wd = dd.moveVertically(md, Od);
        return Wd.head != md.head ? Wd : dd.moveToLineBoundary(md, Od)
      }))
    }
    const mO = dd => OO(dd, !1),
      WO = dd => OO(dd, !0);

    function FO(dd) {
      let Od, md = dd.scrollDOM.clientHeight < dd.scrollDOM.scrollHeight - 2,
        Wd = 0,
        Fd = 0;
      if (md) {
        for (let Od of dd.state.facet(Kd.h.scrollMargins)) {
          let md = Od(dd);
          (null === md || void 0 === md ? void 0 : md.top) && (Wd = Math.max(null === md || void 0 === md ? void 0 : md.top, Wd)), (null === md || void 0 === md ? void 0 : md.bottom) && (Fd = Math.max(null === md || void 0 === md ? void 0 : md.bottom, Fd))
        }
        Od = dd.scrollDOM.clientHeight - Wd - Fd
      } else Od = (dd.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Wd,
        marginBottom: Fd,
        selfScroll: md,
        height: Math.max(dd.defaultLineHeight, Od - 5)
      }
    }

    function RO(dd, Od) {
      let md, Wd = FO(dd),
        {
          state: Fd
        } = dd,
        Rd = jd(Fd.selection, (md => md.empty ? dd.moveVertically(md, Od, Wd.height) : Id(md, Od)));
      if (Rd.eq(Fd.selection)) return !1;
      if (Wd.selfScroll) {
        let Od = dd.coordsAtPos(Fd.selection.main.head),
          Xd = dd.scrollDOM.getBoundingClientRect(),
          hd = Xd.top + Wd.marginTop,
          vd = Xd.bottom - Wd.marginBottom;
        Od && Od.top > hd && Od.bottom < vd && (md = Kd.h.scrollIntoView(Rd.main.head, {
          y: "start",
          yMargin: Od.top - hd
        }))
      }
      return dd.dispatch(Dd(Fd, Rd), {
        effects: md
      }), !0
    }
    const XO = dd => RO(dd, !1),
      KO = dd => RO(dd, !0);

    function hO(dd, Od, md) {
      let Wd = dd.lineBlockAt(Od.head),
        Fd = dd.moveToLineBoundary(Od, md);
      if (Fd.head == Od.head && Fd.head != (md ? Wd.to : Wd.from) && (Fd = dd.moveToLineBoundary(Od, md, !1)), !md && Fd.head == Wd.from && Wd.length) {
        let md = /^\s*/.exec(dd.state.sliceDoc(Wd.from, Math.min(Wd.from + 100, Wd.to)))[0].length;
        md && Od.head != Wd.from + md && (Fd = Xd.j.cursor(Wd.from + md))
      }
      return Fd
    }

    function vO(dd, Od, md) {
      let Wd = !1,
        Fd = jd(dd.selection, (Od => {
          let Fd = (0, hd.gb)(dd, Od.head, -1) || (0, hd.gb)(dd, Od.head, 1) || Od.head > 0 && (0, hd.gb)(dd, Od.head - 1, 1) || Od.head < dd.doc.length && (0, hd.gb)(dd, Od.head + 1, -1);
          if (!Fd || !Fd.end) return Od;
          Wd = !0;
          let Rd = Fd.start.from == Od.head ? Fd.end.to : Fd.end.from;
          return md ? Xd.j.range(Od.anchor, Rd) : Xd.j.cursor(Rd)
        }));
      return !!Wd && (Od(Dd(dd, Fd)), !0)
    }

    function QO(dd, Od) {
      let md = jd(dd.state.selection, (dd => {
        let md = Od(dd);
        return Xd.j.range(dd.anchor, md.head, md.goalColumn, md.bidiLevel || void 0, md.assoc)
      }));
      return !md.eq(dd.state.selection) && (dd.dispatch(Dd(dd.state, md)), !0)
    }

    function tO(dd, Od) {
      return QO(dd, (md => dd.moveByChar(md, Od)))
    }
    const oO = dd => tO(dd, !Cd(dd)),
      NO = dd => tO(dd, Cd(dd));

    function qO(dd, Od) {
      return QO(dd, (md => dd.moveByGroup(md, Od)))
    }

    function HO(dd, Od) {
      return QO(dd, (md => dd.moveVertically(md, Od)))
    }
    const yO = dd => HO(dd, !1),
      bO = dd => HO(dd, !0);

    function TO(dd, Od) {
      return QO(dd, (md => dd.moveVertically(md, Od, FO(dd).height)))
    }
    const pO = dd => TO(dd, !1),
      YO = dd => TO(dd, !0),
      gO = dd => {
        let {
          state: Od,
          dispatch: md
        } = dd;
        return md(Dd(Od, {
          anchor: 0
        })), !0
      },
      wO = dd => {
        let {
          state: Od,
          dispatch: md
        } = dd;
        return md(Dd(Od, {
          anchor: Od.doc.length
        })), !0
      },
      aO = dd => {
        let {
          state: Od,
          dispatch: md
        } = dd;
        return md(Dd(Od, {
          anchor: Od.selection.main.anchor,
          head: 0
        })), !0
      },
      EO = dd => {
        let {
          state: Od,
          dispatch: md
        } = dd;
        return md(Dd(Od, {
          anchor: Od.selection.main.anchor,
          head: Od.doc.length
        })), !0
      };

    function JO(dd, Od) {
      let {
        state: md
      } = dd, Wd = md.selection, Fd = md.selection.By.slice();
      for (let Rd of md.selection.By) {
        let Wd = md.doc.lineAt(Rd.head);
        if (Od ? Wd.to < dd.state.doc.length : Wd.from > 0)
          for (let md = Rd;;) {
            let Rd = dd.moveVertically(md, Od);
            if (Rd.head < Wd.from || Rd.head > Wd.to) {
              Fd.some((dd => dd.head == Rd.head)) || Fd.push(Rd);
              break
            }
            if (Rd.head == md.head) break;
            md = Rd
          }
      }
      return Fd.length != Wd.By.length && (dd.dispatch(Dd(md, Xd.j.create(Fd, Fd.length - 1))), !0)
    }

    function UO(dd, Od) {
      if (dd.state.readOnly) return !1;
      let md = "delete.selection",
        {
          state: Wd
        } = dd,
        Fd = Wd.changeByRange((Wd => {
          let {
            from: Fd,
            to: Rd
          } = Wd;
          if (Fd == Rd) {
            let Xd = Od(Wd);
            Xd < Fd ? (md = "delete.backward", Xd = xO(dd, Xd, !1)) : Xd > Fd && (md = "delete.forward", Xd = xO(dd, Xd, !0)), Fd = Math.min(Fd, Xd), Rd = Math.max(Rd, Xd)
          } else Fd = xO(dd, Fd, !1), Rd = xO(dd, Rd, !0);
          return Fd == Rd ? {
            range: Wd
          } : {
            changes: {
              from: Fd,
              to: Rd
            },
            range: Xd.j.cursor(Fd, Fd < Wd.head ? -1 : 1)
          }
        }));
      return !Fd.changes.empty && (dd.dispatch(Wd.update(Fd, {
        scrollIntoView: !0,
        userEvent: md,
        effects: "delete.selection" == md ? Kd.h.announce.of(Wd.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function xO(dd, Od, md) {
      if (dd instanceof Kd.h)
        for (let Wd of dd.state.facet(Kd.h.atomicRanges).map((Od => Od(dd)))) Wd.between(Od, Od, ((dd, Wd) => {
          dd < Od && Wd > Od && (Od = md ? Wd : dd)
        }));
      return Od
    }
    const BO = (dd, Od, md) => UO(dd, (Wd => {
        let Fd, Rd, Kd = Wd.from,
          {
            state: vd
          } = dd,
          Qd = vd.doc.lineAt(Kd);
        if (md && !Od && Kd > Qd.from && Kd < Qd.from + 200 && !/[^ \t]/.test(Fd = Qd.text.slice(0, Kd - Qd.from))) {
          if ("\t" == Fd[Fd.length - 1]) return Kd - 1;
          let dd = (0, Xd.Y)(Fd, vd.tabSize) % (0, hd.T)(vd) || (0, hd.T)(vd);
          for (let Od = 0; Od < dd && " " == Fd[Fd.length - 1 - Od]; Od++) Kd--;
          Rd = Kd
        } else Rd = (0, Xd.ab)(Qd.text, Kd - Qd.from, Od, Od) + Qd.from, Rd == Kd && Qd.number != (Od ? vd.doc.lines : 1) ? Rd += Od ? 1 : -1 : !Od && /[\ufe00-\ufe0f]/.test(Qd.text.slice(Rd - Qd.from, Kd - Qd.from)) && (Rd = (0, Xd.ab)(Qd.text, Rd - Qd.from, !1, !1) + Qd.from);
        return Rd
      })),
      SO = dd => BO(dd, !1, !0),
      sO = dd => BO(dd, !0, !1),
      uO = (dd, Od) => UO(dd, (md => {
        let Wd = md.head,
          {
            state: Fd
          } = dd,
          Rd = Fd.doc.lineAt(Wd),
          Kd = Fd.charCategorizer(Wd);
        for (let dd = null;;) {
          if (Wd == (Od ? Rd.to : Rd.from)) {
            Wd == md.head && Rd.number != (Od ? Fd.doc.lines : 1) && (Wd += Od ? 1 : -1);
            break
          }
          let hd = (0, Xd.ab)(Rd.text, Wd - Rd.from, Od) + Rd.from,
            vd = Rd.text.slice(Math.min(Wd, hd) - Rd.from, Math.max(Wd, hd) - Rd.from),
            Qd = Kd(vd);
          if (null != dd && Qd != dd) break;
          " " == vd && Wd == md.head || (dd = Qd), Wd = hd
        }
        return Wd
      })),
      VO = dd => uO(dd, !1);

    function iO(dd) {
      let Od = [],
        md = -1;
      for (let Wd of dd.selection.By) {
        let Fd = dd.doc.lineAt(Wd.from),
          Rd = dd.doc.lineAt(Wd.to);
        if (Wd.empty || Wd.to != Rd.from || (Rd = dd.doc.lineAt(Wd.to - 1)), md >= Fd.number) {
          let dd = Od[Od.length - 1];
          dd.to = Rd.to, dd.By.push(Wd)
        } else Od.push({
          from: Fd.from,
          to: Rd.to,
          By: [Wd]
        });
        md = Rd.number + 1
      }
      return Od
    }

    function AO(dd, Od, md) {
      if (dd.readOnly) return !1;
      let Wd = [],
        Fd = [];
      for (let Rd of iO(dd)) {
        if (md ? Rd.to == dd.doc.length : 0 == Rd.from) continue;
        let Od = dd.doc.lineAt(md ? Rd.to + 1 : Rd.from - 1),
          Kd = Od.length + 1;
        if (md) {
          Wd.push({
            from: Rd.to,
            to: Od.to
          }, {
            from: Rd.from,
            insert: Od.text + dd.lineBreak
          });
          for (let Od of Rd.By) Fd.push(Xd.j.range(Math.min(dd.doc.length, Od.anchor + Kd), Math.min(dd.doc.length, Od.head + Kd)))
        } else {
          Wd.push({
            from: Od.from,
            to: Rd.from
          }, {
            from: Rd.to,
            insert: dd.lineBreak + Od.text
          });
          for (let dd of Rd.By) Fd.push(Xd.j.range(dd.anchor - Kd, dd.head - Kd))
        }
      }
      return !!Wd.length && (Od(dd.update({
        changes: Wd,
        scrollIntoView: !0,
        selection: Xd.j.create(Fd, dd.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function rO(dd, Od, md) {
      if (dd.readOnly) return !1;
      let Wd = [];
      for (let Rd of iO(dd)) md ? Wd.push({
        from: Rd.from,
        insert: dd.doc.slice(Rd.from, Rd.to) + dd.lineBreak
      }) : Wd.push({
        from: Rd.to,
        insert: dd.lineBreak + dd.doc.slice(Rd.from, Rd.to)
      });
      let Fd = dd.changes(Wd);
      return Od(dd.update({
        changes: Fd,
        selection: dd.selection.map(Fd, md ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const GO = nO(!1);

    function nO(dd) {
      return Od => {
        let {
          state: md,
          dispatch: Wd
        } = Od;
        if (md.readOnly) return !1;
        let Fd = md.changeByRange((Od => {
          let {
            from: Wd,
            to: Fd
          } = Od, Rd = md.doc.lineAt(Wd), Kd = !dd && Wd == Fd && function(dd, Od) {
            if (/\(\)|\[\]|\{\}/.test(dd.sliceDoc(Od - 1, Od + 1))) return {
              from: Od,
              to: Od
            };
            let md, Wd = (0, hd.sb)(dd).resolveInner(Od),
              Fd = Wd.childBefore(Od),
              Rd = Wd.childAfter(Od);
            return Fd && Rd && Fd.to <= Od && Rd.from >= Od && (md = Fd.type.prop(vd.h.closedBy)) && md.indexOf(Rd.name) > -1 && dd.doc.lineAt(Fd.to).from == dd.doc.lineAt(Rd.from).from && !/\S/.test(dd.sliceDoc(Fd.to, Rd.from)) ? {
              from: Fd.to,
              to: Rd.from
            } : null
          }(md, Wd);
          dd && (Wd = Fd = (Fd <= Rd.to ? Rd : md.doc.lineAt(Fd)).to);
          let Qd = new hd.i(md, {
              simulateBreak: Wd,
              simulateDoubleBreak: !!Kd
            }),
            td = (0, hd.W)(Qd, Wd);
          for (null == td && (td = (0, Xd.Y)(/^\s*/.exec(md.doc.lineAt(Wd).text)[0], md.tabSize)); Fd < Rd.to && /\s/.test(Rd.text[Fd - Rd.from]);) Fd++;
          Kd ? ({
            from: Wd,
            to: Fd
          } = Kd) : Wd > Rd.from && Wd < Rd.from + 100 && !/\S/.test(Rd.text.slice(0, Wd)) && (Wd = Rd.from);
          let od = ["", (0, hd.cb)(md, td)];
          return Kd && od.push((0, hd.cb)(md, Qd.lineIndent(Rd.from, -1))), {
            changes: {
              from: Wd,
              to: Fd,
              insert: Xd.N.of(od)
            },
            range: Xd.j.cursor(Wd + 1 + od[1].length)
          }
        }));
        return Wd(md.update(Fd, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function LO(dd, Od) {
      let md = -1;
      return dd.changeByRange((Wd => {
        let Fd = [];
        for (let Xd = Wd.from; Xd <= Wd.to;) {
          let Rd = dd.doc.lineAt(Xd);
          Rd.number > md && (Wd.empty || Wd.to > Rd.from) && (Od(Rd, Fd, Wd), md = Rd.number), Xd = Rd.to + 1
        }
        let Rd = dd.changes(Fd);
        return {
          changes: Fd,
          range: Xd.j.range(Rd.mapPos(Wd.anchor, 1), Rd.mapPos(Wd.head, 1))
        }
      }))
    }
    const PO = dd => {
        let {
          state: Od,
          dispatch: md
        } = dd;
        return !Od.readOnly && (md(Od.update(LO(Od, ((dd, md) => {
          md.push({
            from: dd.from,
            insert: Od.facet(hd.eb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      zO = dd => {
        let {
          state: Od,
          dispatch: md
        } = dd;
        return !Od.readOnly && (md(Od.update(LO(Od, ((dd, md) => {
          let Wd = /^\s*/.exec(dd.text)[0];
          if (!Wd) return;
          let Fd = (0, Xd.Y)(Wd, Od.tabSize),
            Rd = 0,
            Kd = (0, hd.cb)(Od, Math.max(0, Fd - (0, hd.T)(Od)));
          for (; Rd < Wd.length && Rd < Kd.length && Wd.charCodeAt(Rd) == Kd.charCodeAt(Rd);) Rd++;
          md.push({
            from: dd.from + Rd,
            to: dd.from + Wd.length,
            insert: Kd.slice(Rd)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      cO = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: dd => ed(dd, (Od => dO(dd.state, Od, !Cd(dd)))),
        shift: dd => QO(dd, (Od => dO(dd.state, Od, !Cd(dd))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: dd => ed(dd, (Od => dO(dd.state, Od, Cd(dd)))),
        shift: dd => QO(dd, (Od => dO(dd.state, Od, Cd(dd))))
      }, {
        key: "Alt-ArrowUp",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          return AO(Od, md, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          return rO(Od, md, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          return AO(Od, md, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          return rO(Od, md, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: dd => JO(dd, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: dd => JO(dd, !0)
      }, {
        key: "Escape",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd, Wd = Od.selection, Fd = null;
          return Wd.By.length > 1 ? Fd = Xd.j.create([Wd.main]) : Wd.main.empty || (Fd = Xd.j.create([Xd.j.cursor(Wd.main.head)])), !!Fd && (md(Dd(Od, Fd)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: nO(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd, Wd = iO(Od).map((dd => {
            let {
              from: md,
              to: Wd
            } = dd;
            return Xd.j.range(md, Math.min(Wd + 1, Od.doc.length))
          }));
          return md(Od.update({
            selection: Xd.j.create(Wd),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd, Wd = jd(Od.selection, (dd => {
            let md = (0, hd.sb)(Od),
              Wd = md.resolveStack(dd.from, 1);
            if (dd.empty) {
              let Od = md.resolveStack(dd.from, -1);
              Od.node.from >= Wd.node.from && Od.node.to <= Wd.node.to && (Wd = Od)
            }
            for (let Od = Wd; Od; Od = Od.next) {
              let {
                node: md
              } = Od;
              if ((md.from < dd.from && md.to >= dd.to || md.to > dd.to && md.from <= dd.from) && Od.next) return Xd.j.range(md.to, md.from)
            }
            return dd
          }));
          return !Wd.eq(Od.selection) && (md(Dd(Od, Wd)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: zO
      }, {
        key: "Mod-]",
        run: PO
      }, {
        key: "Mod-Alt-\\",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          if (Od.readOnly) return !1;
          let Wd = Object.create(null),
            Fd = new hd.i(Od, {
              overrideIndentation: dd => {
                let Od = Wd[dd];
                return null == Od ? -1 : Od
              }
            }),
            Rd = LO(Od, ((dd, md, Rd) => {
              let Xd = (0, hd.W)(Fd, dd.from);
              if (null == Xd) return;
              /\S/.test(dd.text) || (Xd = 0);
              let Kd = /^\s*/.exec(dd.text)[0],
                vd = (0, hd.cb)(Od, Xd);
              (Kd != vd || Rd.from < dd.from + Kd.length) && (Wd[dd.from] = Xd, md.push({
                from: dd.from,
                to: dd.from + Kd.length,
                insert: vd
              }))
            }));
          return Rd.changes.empty || md(Od.update(Rd, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: dd => {
          if (dd.state.readOnly) return !1;
          let {
            state: Od
          } = dd, md = Od.changes(iO(Od).map((dd => {
            let {
              from: md,
              to: Wd
            } = dd;
            return md > 0 ? md-- : Wd < Od.doc.length && Wd++, {
              from: md,
              to: Wd
            }
          }))), Wd = jd(Od.selection, (Od => {
            let md;
            if (dd.lineWrapping) {
              let Wd = dd.lineBlockAt(Od.head),
                Fd = dd.coordsAtPos(Od.head, Od.assoc || 1);
              Fd && (md = Wd.bottom + dd.documentTop - Fd.bottom + dd.defaultLineHeight / 2)
            }
            return dd.moveVertically(Od, !0, md)
          })).map(md);
          return dd.dispatch({
            changes: md,
            selection: Wd,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          return vO(Od, md, !1)
        }
      }, {
        key: "Mod-/",
        run: dd => {
          let {
            state: Od
          } = dd, md = Od.doc.lineAt(Od.selection.main.from), Wd = qd(dd.state, md.from);
          return Wd.line ? td(dd) : !!Wd.block && Nd(dd)
        }
      }, {
        key: "Alt-A",
        run: od
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: dd => (dd.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Zd,
        shift: oO,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: dd => fd(dd, !Cd(dd)),
        shift: dd => qO(dd, !Cd(dd)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: dd => ed(dd, (Od => hO(dd, Od, !Cd(dd)))),
        shift: dd => QO(dd, (Od => hO(dd, Od, !Cd(dd)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: kd,
        shift: NO,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: dd => fd(dd, Cd(dd)),
        shift: dd => qO(dd, Cd(dd)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: dd => ed(dd, (Od => hO(dd, Od, Cd(dd)))),
        shift: dd => QO(dd, (Od => hO(dd, Od, Cd(dd)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: mO,
        shift: yO,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: gO,
        shift: aO
      }, {
        mac: "Ctrl-ArrowUp",
        run: XO,
        shift: pO
      }, {
        key: "ArrowDown",
        run: WO,
        shift: bO,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: wO,
        shift: EO
      }, {
        mac: "Ctrl-ArrowDown",
        run: KO,
        shift: YO
      }, {
        key: "PageUp",
        run: XO,
        shift: pO
      }, {
        key: "PageDown",
        run: KO,
        shift: YO
      }, {
        key: "Home",
        run: dd => ed(dd, (Od => hO(dd, Od, !1))),
        shift: dd => QO(dd, (Od => hO(dd, Od, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: gO,
        shift: aO
      }, {
        key: "End",
        run: dd => ed(dd, (Od => hO(dd, Od, !0))),
        shift: dd => QO(dd, (Od => hO(dd, Od, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: wO,
        shift: EO
      }, {
        key: "Enter",
        run: GO,
        shift: GO
      }, {
        key: "Mod-a",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          return md(Od.update({
            selection: {
              anchor: 0,
              head: Od.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: SO,
        shift: SO,
        preventDefault: !0
      }, {
        key: "Delete",
        run: sO,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: VO,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: dd => uO(dd, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: dd => UO(dd, (Od => {
          let md = dd.moveToLineBoundary(Od, !1).head;
          return Od.head > md ? md : Math.max(0, Od.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: dd => UO(dd, (Od => {
          let md = dd.moveToLineBoundary(Od, !0).head;
          return Od.head < md ? md : Math.min(dd.state.doc.length, Od.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Zd,
        shift: oO,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: kd,
        shift: NO
      }, {
        key: "Ctrl-p",
        run: mO,
        shift: yO
      }, {
        key: "Ctrl-n",
        run: WO,
        shift: bO
      }, {
        key: "Ctrl-a",
        run: dd => ed(dd, (Od => Xd.j.cursor(dd.lineBlockAt(Od.head).from, 1))),
        shift: dd => QO(dd, (Od => Xd.j.cursor(dd.lineBlockAt(Od.head).from)))
      }, {
        key: "Ctrl-e",
        run: dd => ed(dd, (Od => Xd.j.cursor(dd.lineBlockAt(Od.head).to, -1))),
        shift: dd => QO(dd, (Od => Xd.j.cursor(dd.lineBlockAt(Od.head).to)))
      }, {
        key: "Ctrl-d",
        run: sO
      }, {
        key: "Ctrl-h",
        run: SO
      }, {
        key: "Ctrl-k",
        run: dd => UO(dd, (Od => {
          let md = dd.lineBlockAt(Od.head).to;
          return Od.head < md ? md : Math.min(dd.state.doc.length, Od.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: VO
      }, {
        key: "Ctrl-o",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          if (Od.readOnly) return !1;
          let Wd = Od.changeByRange((dd => ({
            changes: {
              from: dd.from,
              to: dd.to,
              insert: Xd.N.of(["", ""])
            },
            range: Xd.j.cursor(dd.from)
          })));
          return md(Od.update(Wd, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: dd => {
          let {
            state: Od,
            dispatch: md
          } = dd;
          if (Od.readOnly) return !1;
          let Wd = Od.changeByRange((dd => {
            if (!dd.empty || 0 == dd.from || dd.from == Od.doc.length) return {
              range: dd
            };
            let md = dd.from,
              Wd = Od.doc.lineAt(md),
              Fd = md == Wd.from ? md - 1 : (0, Xd.ab)(Wd.text, md - Wd.from, !1) + Wd.from,
              Rd = md == Wd.to ? md + 1 : (0, Xd.ab)(Wd.text, md - Wd.from, !0) + Wd.from;
            return {
              changes: {
                from: Fd,
                to: Rd,
                insert: Od.doc.slice(md, Rd).append(Od.doc.slice(Fd, md))
              },
              range: Xd.j.cursor(Rd)
            }
          }));
          return !Wd.changes.empty && (md(Od.update(Wd, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: KO
      }].map((dd => ({
        mac: dd.key,
        run: dd.run,
        shift: dd.shift
      }))))),
      jO = {
        key: "Tab",
        run: PO,
        shift: zO
      };
    var DO = md(53814),
      eO = md(53757),
      IO = md(53821),
      lO = function(dd) {
        void 0 === dd && (dd = {});
        var {
          crosshairCursor: Od = !1
        } = dd, md = [];
        !1 !== dd.closeBracketsKeymap && (md = md.concat(eO.g)), !1 !== dd.defaultKeymap && (md = md.concat(cO)), !1 !== dd.searchKeymap && (md = md.concat(DO.j)), !1 !== dd.historyKeymap && (md = md.concat(cd)), !1 !== dd.foldKeymap && (md = md.concat(hd.N)), !1 !== dd.completionKeymap && (md = md.concat(eO.p)), !1 !== dd.lintKeymap && (md = md.concat(IO.d));
        var Wd = [];
        return !1 !== dd.lineNumbers && Wd.push((0, Kd.R)()), !1 !== dd.highlightActiveLineGutter && Wd.push((0, Kd.E)()), !1 !== dd.highlightSpecialChars && Wd.push((0, Kd.H)()), !1 !== dd.history && Wd.push(function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [wd, gd.of(dd), Kd.h.domEventHandlers({
            beforeinput(dd, Od) {
              let md = "historyUndo" == dd.inputType ? Jd : "historyRedo" == dd.inputType ? Ud : null;
              return !!md && (dd.preventDefault(), md(Od))
            }
          })]
        }()), !1 !== dd.foldGutter && Wd.push((0, hd.H)()), !1 !== dd.drawSelection && Wd.push((0, Kd.u)()), !1 !== dd.dropCursor && Wd.push((0, Kd.y)()), !1 !== dd.allowMultipleSelections && Wd.push(Xd.m.allowMultipleSelections.of(!0)), !1 !== dd.indentOnInput && Wd.push((0, hd.bb)()), !1 !== dd.syntaxHighlighting && Wd.push((0, hd.lb)(hd.w, {
          fallback: !0
        })), !1 !== dd.bracketMatching && Wd.push((0, hd.r)()), !1 !== dd.closeBrackets && Wd.push((0, eO.j)()), !1 !== dd.autocompletion && Wd.push((0, eO.c)()), !1 !== dd.rectangularSelection && Wd.push((0, Kd.Y)()), !1 !== Od && Wd.push((0, Kd.s)()), !1 !== dd.highlightActiveLine && Wd.push((0, Kd.F)()), !1 !== dd.highlightSelectionMatches && Wd.push((0, DO.f)()), dd.tabSize && "number" === typeof dd.tabSize && Wd.push(hd.eb.of(" ".repeat(dd.tabSize))), Wd.concat([Kd.O.of(md.flat())]).filter(Boolean)
      },
      CO = md(53805);
    const ZO = "#e5c07b",
      kO = "#e06c75",
      fO = "#56b6c2",
      MO = "#ffffff",
      dm = "#abb2bf",
      Om = "#7d8799",
      mm = "#61afef",
      Wm = "#98c379",
      Fm = "#d19a66",
      Rm = "#c678dd",
      Xm = "#21252b",
      Km = "#2c313a",
      hm = "#282c34",
      Qm = "#353a42",
      tm = "#3E4451",
      om = "#528bff",
      Nm = Kd.h.theme({
        "&": {
          color: dm,
          backgroundColor: hm
        },
        ".cm-content": {
          caretColor: om
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: om
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: tm
        },
        ".cm-panels": {
          backgroundColor: Xm,
          color: dm
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
          backgroundColor: hm,
          color: Om,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Km
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Qm
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Qm,
          borderBottomColor: Qm
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Km,
            color: dm
          }
        }
      }, {
        dark: !0
      }),
      qm = hd.e.define([{
        tag: CO.k.keyword,
        color: Rm
      }, {
        tag: [CO.k.name, CO.k.deleted, CO.k.character, CO.k.propertyName, CO.k.macroName],
        color: kO
      }, {
        tag: [CO.k.function(CO.k.variableName), CO.k.labelName],
        color: mm
      }, {
        tag: [CO.k.color, CO.k.constant(CO.k.name), CO.k.standard(CO.k.name)],
        color: Fm
      }, {
        tag: [CO.k.definition(CO.k.name), CO.k.separator],
        color: dm
      }, {
        tag: [CO.k.typeName, CO.k.className, CO.k.number, CO.k.changed, CO.k.annotation, CO.k.modifier, CO.k.self, CO.k.namespace],
        color: ZO
      }, {
        tag: [CO.k.operator, CO.k.operatorKeyword, CO.k.url, CO.k.escape, CO.k.regexp, CO.k.link, CO.k.special(CO.k.string)],
        color: fO
      }, {
        tag: [CO.k.meta, CO.k.comment],
        color: Om
      }, {
        tag: CO.k.strong,
        fontWeight: "bold"
      }, {
        tag: CO.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: CO.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: CO.k.link,
        color: Om,
        textDecoration: "underline"
      }, {
        tag: CO.k.heading,
        fontWeight: "bold",
        color: kO
      }, {
        tag: [CO.k.atom, CO.k.bool, CO.k.special(CO.k.variableName)],
        color: Fm
      }, {
        tag: [CO.k.processingInstruction, CO.k.string, CO.k.inserted],
        color: Wm
      }, {
        tag: CO.k.invalid,
        color: MO
      }]),
      Hm = [Nm, (0, hd.lb)(qm)];
    var ym = Kd.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class bm {
      constructor(dd, Od) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Od, this.timeoutMS = Od, this.callbacks.push(dd)
      }
      Et() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var dd = this.callbacks.slice();
          this.callbacks.length = 0, dd.forEach((dd => {
            try {
              dd()
            } catch (Od) {
              console.error("TimeoutLatch callback error:", Od)
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
    class Tm {
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
            dd.Et(), dd.isDone && this.remove(dd)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var pm = null,
      Ym = Xd.c.define(),
      gm = [];

    function wm(dd) {
      var {
        value: Od,
        selection: md,
        onChange: Wd,
        onStatistics: Fd,
        onCreateEditor: hd,
        onUpdate: vd,
        extensions: Qd = gm,
        autoFocus: td,
        theme: od = "light",
        height: Nd = null,
        minHeight: qd = null,
        maxHeight: Hd = null,
        width: yd = null,
        minWidth: bd = null,
        maxWidth: Td = null,
        placeholder: pd = "",
        editable: Yd = !0,
        readOnly: gd = !1,
        indentWithTab: wd = !0,
        basicSetup: Ed = !0,
        root: Jd,
        initialState: Ud
      } = dd, [xd, Bd] = (0, Rd.useState)(), [Sd, sd] = (0, Rd.useState)(), [ud, Vd] = (0, Rd.useState)(), Ad = (0, Rd.useState)((() => ({
        current: null
      })))[0], rd = (0, Rd.useState)((() => ({
        current: null
      })))[0], Gd = Kd.h.theme({
        "&": {
          height: Nd,
          minHeight: qd,
          maxHeight: Hd,
          width: yd,
          minWidth: bd,
          maxWidth: Td
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), nd = Kd.h.updateListener.of((dd => {
        if (dd.docChanged && "function" === typeof Wd && !dd.transactions.some((dd => dd.annotation(Ym)))) {
          Ad.current ? Ad.current.reset() : (Ad.current = new bm((() => {
            if (rd.current) {
              var dd = rd.current;
              rd.current = null, dd()
            }
            Ad.current = null
          }), 200), ("undefined" === typeof window ? new Tm : (pm || (pm = new Tm), pm)).add(Ad.current));
          var Od = dd.state.doc.toString();
          Wd(Od, dd)
        }
        Fd && Fd((dd => ({
          line: dd.state.doc.lineAt(dd.state.selection.main.from),
          lineCount: dd.state.doc.lines,
          lineBreak: dd.state.lineBreak,
          length: dd.state.doc.length,
          readOnly: dd.state.readOnly,
          tabSize: dd.state.tabSize,
          selection: dd.state.selection,
          selectionAsSingle: dd.state.selection.asSingle().main,
          By: dd.state.selection.By,
          selectionCode: dd.state.sliceDoc(dd.state.selection.main.from, dd.state.selection.main.to),
          selections: dd.state.selection.By.map((Od => dd.state.sliceDoc(Od.from, Od.to))),
          selectedText: dd.state.selection.By.some((dd => !dd.empty))
        }))(dd))
      })), Ld = function(dd) {
        void 0 === dd && (dd = {});
        var {
          indentWithTab: Od = !0,
          editable: md = !0,
          readOnly: Wd = !1,
          theme: Fd = "light",
          placeholder: Rd = "",
          basicSetup: hd = !0
        } = dd, vd = [];
        switch (Od && vd.unshift(Kd.O.of([jO])), hd && ("boolean" === typeof hd ? vd.unshift(lO()) : vd.unshift(lO(hd))), Rd && vd.unshift((0, Kd.W)(Rd)), Fd) {
          case "light":
            vd.push(ym);
            break;
          case "dark":
            vd.push(Hm);
            break;
          case "none":
            break;
          default:
            vd.push(Fd)
        }
        return !1 === md && vd.push(Kd.h.editable.of(!1)), Wd && vd.push(Xd.m.readOnly.of(!0)), [...vd]
      }({
        theme: od,
        editable: Yd,
        readOnly: gd,
        placeholder: pd,
        indentWithTab: wd,
        basicSetup: Ed
      }), Pd = [nd, Gd, ...Ld];
      return vd && "function" === typeof vd && Pd.push(Kd.h.updateListener.of(vd)), Pd = Pd.concat(Qd), (0, Rd.useLayoutEffect)((() => {
        if (xd && !ud) {
          var dd = {
              doc: Od,
              selection: md,
              extensions: Pd
            },
            Wd = Ud ? Xd.m.fromJSON(Ud.json, dd, Ud.fields) : Xd.m.create(dd);
          if (Vd(Wd), !Sd) {
            var Fd = new Kd.h({
              state: Wd,
              parent: xd,
              root: Jd
            });
            sd(Fd), hd && hd(Fd, Wd)
          }
        }
        return () => {
          Sd && (Vd(void 0), sd(void 0))
        }
      }), [xd, ud]), (0, Rd.useEffect)((() => {
        dd.container && Bd(dd.container)
      }), [dd.container]), (0, Rd.useEffect)((() => () => {
        Sd && (Sd.destroy(), sd(void 0)), Ad.current && (Ad.current.cancel(), Ad.current = null)
      }), [Sd]), (0, Rd.useEffect)((() => {
        td && Sd && Sd.focus()
      }), [td, Sd]), (0, Rd.useEffect)((() => {
        Sd && Sd.dispatch({
          effects: Xd.I.reconfigure.of(Pd)
        })
      }), [od, Qd, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Wd, vd]), (0, Rd.useEffect)((() => {
        if (void 0 !== Od) {
          var dd = Sd ? Sd.state.doc.toString() : "";
          if (Sd && Od !== dd) {
            var md = () => {
              Sd && Od !== Sd.state.doc.toString() && Sd.dispatch({
                changes: {
                  from: 0,
                  to: Sd.state.doc.toString().length,
                  insert: Od || ""
                },
                annotations: [Ym.of(!0)]
              })
            };
            Ad.current && !Ad.current.isDone ? rd.current = md : md()
          }
        }
      }), [Od, Sd]), {
        state: ud,
        setState: Vd,
        view: Sd,
        setView: sd,
        container: xd,
        setContainer: Bd
      }
    }
    var am = md(1341),
      Em = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Jm = (0, Rd.forwardRef)(((dd, Od) => {
        var {
          className: md,
          value: Xd = "",
          selection: Kd,
          extensions: hd = [],
          onChange: vd,
          onStatistics: Qd,
          onCreateEditor: td,
          onUpdate: od,
          autoFocus: Nd,
          theme: qd = "light",
          height: Hd,
          minHeight: yd,
          maxHeight: bd,
          width: Td,
          minWidth: pd,
          maxWidth: Yd,
          basicSetup: gd,
          placeholder: wd,
          indentWithTab: Ed,
          editable: Jd,
          readOnly: Ud,
          root: xd,
          initialState: Bd
        } = dd, Sd = (0, Fd.e)(dd, Em), sd = (0, Rd.useRef)(null), {
          state: ud,
          view: Vd,
          container: Ad,
          setContainer: rd
        } = wm({
          root: xd,
          value: Xd,
          autoFocus: Nd,
          theme: qd,
          height: Hd,
          minHeight: yd,
          maxHeight: bd,
          width: Td,
          minWidth: pd,
          maxWidth: Yd,
          basicSetup: gd,
          placeholder: wd,
          indentWithTab: Ed,
          editable: Jd,
          readOnly: Ud,
          selection: Kd,
          onChange: vd,
          onStatistics: Qd,
          onCreateEditor: td,
          onUpdate: od,
          extensions: hd,
          initialState: Bd
        });
        (0, Rd.useImperativeHandle)(Od, (() => ({
          editor: sd.current,
          state: ud,
          view: Vd
        })), [sd, Ad, ud, Vd]);
        var Gd = (0, Rd.useCallback)((dd => {
          sd.current = dd, rd(dd)
        }), [rd]);
        if ("string" !== typeof Xd) throw new Error("value must be typeof string but got " + typeof Xd);
        var nd = "string" === typeof qd ? "cm-theme-" + qd : "cm-theme";
        return (0, am.jsx)("div", (0, Wd.b)({
          ref: Gd,
          className: nd + (md ? " " + md : "")
        }, Sd))
      }));
    Jm.displayName = "CodeMirror";
    const Um = Jm
  },
  53784: (dd, Od, md) => {
    function Wd() {
      var dd = arguments[0];
      "string" == typeof dd && (dd = document.createElement(dd));
      var Od = 1,
        md = arguments[1];
      if (md && "object" == typeof md && null == md.nodeType && !Array.isArray(md)) {
        for (var Wd in md)
          if (Object.prototype.hasOwnProperty.call(md, Wd)) {
            var Rd = md[Wd];
            "string" == typeof Rd ? dd.setAttribute(Wd, Rd) : null != Rd && (dd[Wd] = Rd)
          } Od++
      }
      for (; Od < arguments.length; Od++) Fd(dd, arguments[Od]);
      return dd
    }

    function Fd(dd, Od) {
      if ("string" == typeof Od) dd.appendChild(document.createTextNode(Od));
      else if (null == Od);
      else if (null != Od.nodeType) dd.appendChild(Od);
      else {
        if (!Array.isArray(Od)) throw new RangeError("Unsupported child node: " + Od);
        for (var md = 0; md < Od.length; md++) Fd(dd, Od[md])
      }
    }
    md.d(Od, {
      d: () => Wd
    })
  },
  53775: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    const Wd = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Fd = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Rd = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Xd {
      constructor(dd, Od) {
        this.rules = [];
        let {
          finish: md
        } = Od || {};

        function Wd(dd) {
          return /^@/.test(dd) ? [dd] : dd.split(/,\s*/)
        }

        function Fd(dd, Od, Rd, Xd) {
          let Kd = [],
            hd = /^@(\w+)\b/.exec(dd[0]),
            vd = hd && "keyframes" == hd[1];
          if (hd && null == Od) return Rd.push(dd[0] + ";");
          for (let md in Od) {
            let Xd = Od[md];
            if (/&/.test(md)) Fd(md.split(/,\s*/).map((Od => dd.map((dd => Od.replace(/&/, dd))))).reduce(((dd, Od) => dd.concat(Od))), Xd, Rd);
            else if (Xd && "object" == typeof Xd) {
              if (!hd) throw new RangeError("The value of a property (" + md + ") should be a primitive value.");
              Fd(Wd(md), Xd, Kd, vd)
            } else null != Xd && Kd.push(md.replace(/_.*/, "").replace(/[A-Z]/g, (dd => "-" + dd.toLowerCase())) + ": " + Xd + ";")
          }(Kd.length || vd) && Rd.push((!md || hd || Xd ? dd : dd.map(md)).join(", ") + " {" + Kd.join(" ") + "}")
        }
        for (let Rd in dd) Fd(Wd(Rd), dd[Rd], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let dd = Rd[Wd] || 1;
        return Rd[Wd] = dd + 1, "\u037c" + dd.toString(36)
      }
      static mount(dd, Od, md) {
        let Wd = dd[Fd],
          Rd = md && md.nonce;
        Wd ? Rd && Wd.setNonce(Rd) : Wd = new hd(dd, Rd), Wd.mount(Array.isArray(Od) ? Od : [Od], dd)
      }
    }
    let Kd = new Map;
    class hd {
      constructor(dd, Od) {
        let md = dd.ownerDocument || dd,
          Wd = md.defaultView;
        if (!dd.head && dd.adoptedStyleSheets && Wd.CSSStyleSheet) {
          let Od = Kd.get(md);
          if (Od) return dd[Fd] = Od;
          this.sheet = new Wd.CSSStyleSheet, Kd.set(md, this)
        } else this.styleTag = md.createElement("style"), Od && this.styleTag.setAttribute("nonce", Od);
        this.modules = [], dd[Fd] = this
      }
      mount(dd, Od) {
        let md = this.sheet,
          Wd = 0,
          Fd = 0;
        for (let Rd = 0; Rd < dd.length; Rd++) {
          let Od = dd[Rd],
            Xd = this.modules.indexOf(Od);
          if (Xd < Fd && Xd > -1 && (this.modules.splice(Xd, 1), Fd--, Xd = -1), -1 == Xd) {
            if (this.modules.splice(Fd++, 0, Od), md)
              for (let dd = 0; dd < Od.rules.length; dd++) md.insertRule(Od.rules[dd], Wd++)
          } else {
            for (; Fd < Xd;) Wd += this.modules[Fd++].rules.length;
            Wd += Od.rules.length, Fd++
          }
        }
        if (md) Od.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Od.adoptedStyleSheets = [this.sheet, ...Od.adoptedStyleSheets]);
        else {
          let dd = "";
          for (let Od = 0; Od < this.modules.length; Od++) dd += this.modules[Od].getRules() + "\n";
          this.styleTag.textContent = dd;
          let md = Od.head || Od;
          this.styleTag.parentNode != md && md.insertBefore(this.styleTag, md.firstChild)
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