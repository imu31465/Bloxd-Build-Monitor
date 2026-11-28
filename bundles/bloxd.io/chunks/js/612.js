export const id = 612;
export const ids = [612];
export const modules = {
  53748: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => lO
    });
    var Wd = md(53757),
      Fd = md(53809),
      Rd = md(53812),
      Xd = md(66),
      Kd = md(86),
      hd = md(53827),
      vd = md(53832),
      Qd = md(5534),
      td = md(53841),
      od = md(2060),
      Nd = md(53845),
      qd = md(53856),
      Hd = md.n(qd),
      yd = md(53814),
      bd = md(53821),
      Td = md(1436),
      pd = md(38404),
      Yd = md(1300),
      gd = md(3401),
      wd = md(37819),
      Ed = md(1566),
      Jd = md(701),
      Ud = md(1304),
      xd = md(53911),
      Bd = md(53759),
      Sd = md(53768),
      sd = md(2092),
      ud = md(2497),
      Vd = md(32),
      Ad = md(1189);
    const rd = 1e4,
      Gd = 250,
      nd = 250;
    var Ld = md(53793);
    const Pd = 50,
      zd = 100;
    const cd = 2e3,
      jd = Bd.I.define(),
      Dd = Bd.I.define(),
      ed = Bd.I.define();
    class Id extends Sd.o {
      constructor(dd, Od, md) {
        super(), this.colour = dd, this.playerName = Od, this.showName = md
      }
      toDOM() {
        const dd = document.createElement("span");
        dd.className = "cm-remote-cursor-wrapper", dd.style.borderLeftColor = this.colour;
        const Od = document.createElement("span");
        if (Od.className = "cm-remote-cursor", Od.style.borderLeftColor = this.colour, dd.appendChild(Od), this.showName) {
          const Od = document.createElement("span");
          Od.className = "cm-remote-cursor-name", Od.style.backgroundColor = this.colour, Od.textContent = this.playerName, dd.appendChild(Od)
        }
        return dd
      }
      eq(dd) {
        return this.colour === dd.colour && this.playerName === dd.playerName && this.showName === dd.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function ld(dd, Od) {
      const md = [],
        Wd = [];
      for (const [, Xd] of dd) {
        const dd = Od - Xd.lastMoved < cd;
        if (md.push({
            pos: Xd.head,
            decoration: Sd.d.widget({
              widget: new Id(Xd.colour, Xd.playerName, dd),
              side: 1
            })
          }), Xd.anchor !== Xd.head) {
          const dd = Math.min(Xd.anchor, Xd.head),
            Od = Math.max(Xd.anchor, Xd.head);
          Wd.push({
            from: dd,
            to: Od,
            decoration: Sd.d.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Xd.colour}33`
              }
            })
          })
        }
      }
      const Fd = new Bd.z,
        Rd = [];
      for (const Xd of md) Rd.push({
        bias: 1,
        deco: Xd.decoration,
        from: Xd.pos,
        to: Xd.pos
      });
      for (const Xd of Wd) Rd.push({
        bias: 0,
        deco: Xd.decoration,
        from: Xd.from,
        to: Xd.to
      });
      Rd.sort(((dd, Od) => dd.from - Od.from || dd.deco.startSide - Od.deco.startSide || dd.bias - Od.bias));
      for (const Xd of Rd) Fd.add(Xd.from, Xd.to, Xd.deco);
      return Fd.finish()
    }
    const Cd = Bd.M.define({
      create: () => ({
        cursors: new Map,
        aW: Sd.d.none
      }),
      update(dd, Od) {
        let md = dd.cursors,
          Wd = !1;
        if (Od.docChanged) {
          const dd = new Map;
          for (const [Wd, Fd] of md) dd.set(Wd, {
            ...Fd,
            anchor: Od.changes.mapPos(Fd.anchor, 1),
            head: Od.changes.mapPos(Fd.head, 1)
          });
          md = dd, Wd = !0
        }
        for (const Fd of Od.effects)
          if (Fd.is(jd)) {
            if (!Number.isInteger(Fd.value.anchor) || !Number.isInteger(Fd.value.head)) {
              console.warn(`Code Editor: ignored player ${Fd.value.playerId}'s cursor at ${Fd.value.anchor}-${Fd.value.head}`);
              continue
            }
            const Rd = Od.state.doc.length,
              Xd = {
                ...Fd.value,
                anchor: Math.min(Fd.value.anchor, Rd),
                head: Math.min(Fd.value.head, Rd)
              };
            md === dd.cursors && (md = new Map(md)), md.set(Xd.playerId, Xd), Wd = !0
          } else Fd.is(Dd) ? md.has(Fd.value) && (md === dd.cursors && (md = new Map(md)), md.delete(Fd.value), Wd = !0) : Fd.is(ed) && (Wd = !0);
        return Wd ? {
          cursors: md,
          aW: ld(md, Date.now())
        } : dd
      },
      provide: dd => Sd.h.aW.from(dd, (dd => dd.aW))
    });
    const Zd = Bd.I.define(),
      kd = Sd.d.mark({
        class: "CodeInsertFlash"
      }),
      fd = Bd.M.define({
        create: () => Sd.d.none,
        update(dd, Od) {
          let md = dd.map(Od.changes);
          for (const Wd of Od.effects) Wd.is(Zd) && (md = Wd.value ? Sd.d.set(kd.range(Wd.value.from, Wd.value.to)) : Sd.d.none);
          return md
        },
        provide: dd => Sd.h.aW.from(dd)
      }),
      Md = Bd.M.define({
        create: () => !1,
        update: (dd, Od) => dd || void 0 !== Od.annotation(Bd.Q.userEvent) && !Od.annotation(Bd.Q.remote)
      }),
      dO = [fd, Md];

    function OO(dd) {
      return dd.field(Md)
    }
    const mO = 3e4;

    function WO(dd, Od) {
      const md = (0, Xd.useRef)(null);
      (0, Xd.useEffect)((() => {
        var dd;
        (null === (dd = md.current) || void 0 === dd ? void 0 : dd.path) !== Od && (md.current = null)
      }), [Od]);
      const Wd = dd => {
        var Wd;
        const Fd = md.current;
        if (null === dd || void 0 === dd || !dd.dom.isConnected || !Fd || Fd.path !== Od) return;
        md.current = null;
        const {
          kQ: Xd
        } = Fd;
        if (Xd && null !== Xd.text && performance.now() - Xd.at < mO) {
          const Od = function(dd, Od) {
            if (dd === Od) return null;
            const md = Math.min(dd.length, Od.length);
            let Wd = 0;
            for (; Wd < md && dd[Wd] === Od[Wd];) Wd++;
            let Fd = 0;
            for (; Fd < md - Wd && dd[dd.length - 1 - Fd] === Od[Od.length - 1 - Fd];) Fd++;
            return {
              from: Wd,
              to: dd.length - Fd,
              insert: Od.slice(Wd, Od.length - Fd)
            }
          }(dd.state.doc.toString(), Xd.text);
          null !== Od && dd.dispatch({
            changes: Od,
            userEvent: Xd.placed ? "input" : void 0
          })
        }
        const {
          doc: Kd
        } = dd.state, hd = Kd.line(Math.min(Math.max(Fd.line, 1), Kd.lines)), vd = hd.from + Math.min(null !== (Wd = Fd.column) && void 0 !== Wd ? Wd : 0, hd.length);
        dd.dispatch({
          selection: {
            anchor: vd
          },
          effects: Rd.b.scrollIntoView(vd, {
            y: "center"
          }),
          userEvent: null !== Xd && void 0 !== Xd && Xd.placed ? "select" : void 0
        }), !1 !== (null === Xd || void 0 === Xd ? void 0 : Xd.focused) && dd.focus()
      };
      return (0, Ed.f)("CodeEditorGoToLine", (Od => {
        md.current = Od, Wd(dd.current)
      })), (0, Ed.f)("CodeEditorKeepEdits", (() => {
        const Wd = dd.current;
        if (null === Wd || !Wd.dom.isConnected || null === Od) return;
        const {
          doc: Fd,
          selection: Rd
        } = Wd.state, {
          head: Xd
        } = Rd.main, Kd = Fd.lineAt(Xd), hd = {
          text: (0, xd.j)(Wd.state).length > 0 ? Fd.toString() : null,
          at: performance.now(),
          focused: Wd.hasFocus,
          placed: OO(Wd.state)
        };
        md.current = {
          path: Od,
          line: Kd.number,
          column: Xd - Kd.from,
          kQ: hd
        }
      })), dd => {
        var Fd;
        const Rd = md.current;
        !1 === (null === Rd || void 0 === Rd || null === (Fd = Rd.kQ) || void 0 === Fd ? void 0 : Fd.focused) && Rd.path === Od || dd.focus(), Wd(dd)
      }
    }
    var FO = md(4998),
      RO = md(1238);

    function XO(dd, Od) {
      const {
        t: md
      } = (0, RO.G)();
      (0, Ed.f)("CodeEditorInsertText", (Wd => {
        let {
          text: Fd,
          focus: Rd
        } = Wd;
        const Xd = dd.current,
          Kd = null !== Xd && void 0 !== Xd && Xd.dom.isConnected ? function(dd, Od) {
            if (!OO(dd)) return null;
            const {
              from: md,
              to: Wd
            } = dd.selection.main, Fd = md + Od.length;
            return {
              changes: {
                from: md,
                to: Wd,
                insert: Od
              },
              selection: {
                anchor: Fd
              },
              effects: [Sd.h.scrollIntoView(Fd, {
                y: "center"
              }), Zd.of({
                from: md,
                to: Fd
              })],
              userEvent: "input"
            }
          }(Xd.state, Fd) : null;
        null !== Xd && null !== Kd ? (Xd.dispatch(Kd), Rd && Xd.focus(), setTimeout((() => {
          Xd.dom.isConnected && Xd.dispatch({
            effects: Zd.of(null)
          })
        }), 1500)) : (0, FO.e)(Fd).then((() => {
          Od({
            message: md("codeEditorWorld:pickCopied", {
              coords: Fd
            }),
            type: "success"
          })
        }), (dd => {
          console.error("Pick could not copy the coordinates", dd), Od({
            message: md("codeEditorWorld:pickPlaceCursor", {
              coords: Fd
            }),
            type: "warning"
          })
        }))
      }))
    }
    var KO = md(53805);
    const hO = "#e45649",
      vO = "#383a42",
      QO = "#696c77",
      tO = "#986801",
      oO = "#e5e5e6",
      NO = "#fafafa",
      qO = "#eaeaeb",
      HO = "#526fff",
      yO = Sd.h.theme({
        "&": {
          color: vO,
          backgroundColor: NO
        },
        ".cm-content": {
          caretColor: HO
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: HO
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: vO
        },
        ".cm-panels.cm-panels-top": {
          borderBottom: "2px solid #d4d4d6"
        },
        ".cm-panels.cm-panels-bottom": {
          borderTop: "2px solid #d4d4d6"
        },
        ".cm-searchMatch": {
          backgroundColor: "#72a1ff40",
          outline: "1px solid #457dff"
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
          backgroundColor: "#6199ff2f"
        },
        ".cm-activeLine": {
          backgroundColor: "#383a420a"
        },
        ".cm-selectionMatch": {
          backgroundColor: "#50a14f26"
        },
        "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#4078f233"
        },
        ".cm-gutters": {
          backgroundColor: NO,
          color: QO,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: oO
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: qO
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: qO,
          borderBottomColor: qO
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: oO,
            color: vO
          }
        }
      }, {
        dark: !1
      }),
      bO = Ld.e.define([{
        tag: KO.k.keyword,
        color: "#a626a4"
      }, {
        tag: [KO.k.name, KO.k.deleted, KO.k.character, KO.k.propertyName, KO.k.macroName],
        color: hO
      }, {
        tag: [KO.k.function(KO.k.variableName), KO.k.labelName],
        color: "#4078f2"
      }, {
        tag: [KO.k.color, KO.k.constant(KO.k.name), KO.k.standard(KO.k.name)],
        color: tO
      }, {
        tag: [KO.k.definition(KO.k.name), KO.k.separator],
        color: vO
      }, {
        tag: [KO.k.typeName, KO.k.className, KO.k.number, KO.k.changed, KO.k.annotation, KO.k.modifier, KO.k.self, KO.k.namespace],
        color: "#c18401"
      }, {
        tag: [KO.k.operator, KO.k.operatorKeyword, KO.k.url, KO.k.escape, KO.k.regexp, KO.k.link, KO.k.special(KO.k.string)],
        color: "#0184bc"
      }, {
        tag: [KO.k.meta, KO.k.comment],
        color: QO
      }, {
        tag: KO.k.strong,
        fontWeight: "bold"
      }, {
        tag: KO.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: KO.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: KO.k.link,
        color: QO,
        textDecoration: "underline"
      }, {
        tag: KO.k.heading,
        fontWeight: "bold",
        color: hO
      }, {
        tag: [KO.k.atom, KO.k.bool, KO.k.special(KO.k.variableName)],
        color: tO
      }, {
        tag: [KO.k.processingInstruction, KO.k.string, KO.k.inserted],
        color: "#50a14f"
      }, {
        tag: KO.k.invalid,
        color: "#000000"
      }]),
      TO = [yO, (0, Ld.lb)(bO)];
    var pO = md(38452),
      YO = md(53918);
    const gO = Rd.g.define(),
      wO = Rd.i.define({
        create: () => !1,
        update(dd, Od) {
          for (const md of Od.effects) md.is(gO) && (dd = md.value);
          return dd
        }
      }),
      aO = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function EO(dd, Od) {
      return [wO, Rd.l.fromClass(class {
        constructor(dd) {
          this.view = dd, this.onDown = dd => {
            const Od = dd.target instanceof Element && null !== dd.target.closest(".cm-tooltip");
            0 !== dd.button || Od || this.view.state.field(wO) || this.view.dispatch({
              effects: gO.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(wO) && this.view.dispatch({
              effects: gO.of(!1)
            })
          }, dd.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Rd.r.compute(["selection", wO], (md => function(dd, Od, md) {
        const Wd = dd.selection.main;
        return Wd.empty || dd.field(wO) || dd.sliceDoc(Wd.from, Wd.to).trim().length < 2 ? null : {
          pos: Wd.from,
          above: !0,
          create: dd => {
            const Wd = document.createElement("div");
            Wd.className = "CodeSelectionActions", Wd.setAttribute("role", "toolbar"), Wd.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Fd,
                label: Rd
              }
              of aO) {
              if (!md && "explain" !== Fd) continue;
              const Xd = document.createElement("button");
              Xd.type = "button", Xd.textContent = Rd, "change" !== Fd && (Xd.title = YO.d, Xd.dataset.asksAi = "true"), Xd.addEventListener("mousedown", (dd => {
                dd.preventDefault()
              })), Xd.addEventListener("click", (() => {
                const md = dd.state.selection.main;
                if (md.empty) return;
                const Wd = {
                  action: Fd,
                  path: Od,
                  fromLine: dd.state.doc.lineAt(md.from).number,
                  toLine: dd.state.doc.lineAt(md.to > md.from && dd.state.doc.lineAt(md.to).from === md.to ? md.to - 1 : md.to).number,
                  text: dd.state.sliceDoc(md.from, md.to)
                };
                Vd.j.lQ("WorldCodeAiSelection", Wd), dd.dispatch({
                  selection: {
                    anchor: md.to
                  }
                })
              })), Wd.appendChild(Xd)
            }
            return {
              dom: Wd
            }
          }
        }
      }(md, dd, Od)))]
    }
    var JO = md(1341);
    const UO = new Set(["(", "{", "[", "<"]),
      xO = new Set([")", "}", "]", ">"]),
      BO = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function SO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function md(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = [];
        for (const Fd of dd) {
          let dd;
          dd = "punctuation" === Fd.kind ? BO.text : "parameterName" === Fd.kind ? BO.parameterName : Od, Wd.push({
            str: Fd.text,
            style: {
              color: dd,
              opacity: md ? .5 : void 0
            }
          })
        }
        return Wd
      }
      const Wd = [];
      if (Wd.push(...md(dd.prefixDisplayParts, BO.text)), dd.parameters.length > 0) {
        Wd.push("\n");
        for (let Fd = 0; Fd < dd.parameters.length; Fd++) {
          const Rd = dd.parameters[Fd];
          Wd.push("\t"), Wd.push(...md(Rd.displayParts, BO.parameter, null !== Od && Fd !== Od)), Wd.push("\n")
        }
      }
      return Wd.push(...md(dd.suffixDisplayParts, BO.suffix)), dd.documentation && (Wd.push("\n\n"), Wd.push(...md(dd.documentation, BO.docs))), Wd
    }
    var sO = function(dd) {
      return dd[dd.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", dd[dd.DuplicateIdentifier = 2300] = "DuplicateIdentifier", dd
    }(sO || {});
    const uO = new Set([sO.DuplicateIdentifier]),
      VO = new Set([sO.VariableDefinedElsewhere]),
      iO = new Set([]),
      AO = "/index.js";

    function rO(dd) {
      return "/" + dd
    }

    function GO(dd, Od, md) {
      dd.getSourceFile(Od) && dd.deleteFile(Od), dd.createFile(Od, md)
    }

    function nO(dd) {
      return !!dd && ((0, gd.m)(dd) || (0, gd.k)(dd))
    }

    function LO(dd, Od, md) {
      return () => {
        let Wd = [...Od.languageService.getSemanticDiagnostics(md), ...Od.languageService.getSyntacticDiagnostics(md)];
        return Wd = Wd.filter((dd => !(0, Jd.O)(dd.start) && !(0, Jd.O)(dd.length) && !uO.has(dd.code))), dd || (Wd = Wd.filter((dd => !VO.has(dd.code)))), Wd.map((dd => ({
          from: dd.start,
          to: dd.start + dd.length,
          message: "string" === typeof dd.messageText ? dd.messageText : dd.messageText.messageText,
          severity: iO.has(dd.code) ? "warning" : "error"
        })))
      }
    }

    function PO(dd, Od) {
      return md => {
        var Wd, Fd;
        const Rd = dd.languageService.getCompletionsAtPosition(Od, md.pos, {});
        if (!Rd) return {
          from: md.pos,
          options: []
        };
        let Xd = null !== (Wd = null === (Fd = Rd.optionalReplacementSpan) || void 0 === Fd ? void 0 : Fd.start) && void 0 !== Wd ? Wd : md.pos;
        if (!Rd.optionalReplacementSpan) {
          const dd = md.state.doc.sliceString(0, md.pos);
          for (; Xd > 0 && /[\w$]/.test(dd[Xd - 1]);) Xd--
        }
        return Rd.entries = Rd.entries.filter((dd => dd.kind !== Hd().ScriptElementKind.warning)), {
          from: Xd,
          options: Rd.entries.map((Wd => {
            var Fd, Rd, Kd, hd;
            const vd = dd.languageService.getCompletionEntryDetails(Od, md.pos, Wd.name, {}, Wd.source, {}, Wd.data),
              Qd = null !== (Fd = null === (Rd = Wd.replacementSpan) || void 0 === Rd ? void 0 : Rd.start) && void 0 !== Fd ? Fd : Xd,
              td = Wd.replacementSpan ? Wd.replacementSpan.start + Wd.replacementSpan.length : md.pos,
              od = null !== (Kd = Wd.insertText) && void 0 !== Kd ? Kd : Wd.name;
            return {
              label: Wd.name,
              detail: null === vd || void 0 === vd ? void 0 : vd.displayParts.map((dd => dd.text)).join(""),
              info: null === vd || void 0 === vd || null === (hd = vd.documentation) || void 0 === hd ? void 0 : hd.map((dd => dd.text)).join(""),
              apply: dd => {
                dd.dispatch({
                  changes: {
                    from: Qd,
                    to: td,
                    insert: od
                  },
                  selection: {
                    anchor: Qd + od.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function zO(dd) {
      return Od => {
        const md = document.createElement("div");
        md.className = "CodeEditorTooltip";
        let Wd = !1;
        return queueMicrotask((() => {
          Wd || (Kd.render((0, JO.jsx)(od.d, {
            text: dd
          }), md), Od.requestMeasure())
        })), {
          dom: md,
          destroy() {
            Wd = !0, queueMicrotask((() => {
              Kd.unmountComponentAtNode(md)
            }))
          }
        }
      }
    }

    function cO(dd, Od, md) {
      return Wd => {
        var Fd;
        if (!Od) return [];
        const Rd = null === (Fd = Wd.selection.By[0]) || void 0 === Fd ? void 0 : Fd.head;
        if (void 0 === Rd) return [];
        const Xd = dd.languageService.getSignatureHelpItems(md, Rd, {});
        if (!Xd || !Xd.items.length) return [];
        const Kd = Xd.applicableSpan.start - Xd.items[0].prefixDisplayParts.map((dd => dd.text)).join("").length,
          hd = Xd.applicableSpan.start,
          vd = Wd.doc.lineAt(Rd),
          Qd = vd.from,
          td = Math.min(vd.to, Rd);
        let od, Nd;
        return Kd < Qd ? (od = Qd, Nd = td) : (od = Kd, Nd = hd), [{
          pos: od,
          end: Nd,
          above: !1,
          create: zO(SO(Xd.items[0], Xd.argumentIndex))
        }]
      }
    }

    function jO(dd, Od) {
      return (md, Wd, Fd) => {
        const Rd = dd.languageService.getQuickInfoAtPosition(Od, Wd);
        if (!Rd) return [];
        const Xd = Rd.textSpan.start,
          Kd = Rd.textSpan.start + Rd.textSpan.length;
        if (Wd < Xd || Wd >= Kd) return [];
        if (Rd.kind === Hd().ScriptElementKind.memberFunctionElement || Rd.kind === Hd().ScriptElementKind.variableElement && "declare" === Rd.kindModifiers) {
          const dd = Rd.displayParts.findIndex((dd => "space" === dd.kind)); - 1 !== dd && (Rd.displayParts = Rd.displayParts.slice(dd));
          const Od = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            md = Rd.displayParts.findIndex((dd => "punctuation" === dd.kind && "(" === dd.text)); - 1 !== md && (Od.prefixDisplayParts = Rd.displayParts.slice(0, md + 1), Rd.displayParts = Rd.displayParts.slice(md + 1));
          const Wd = Rd.displayParts.findLastIndex((dd => "punctuation" === dd.kind && ")" === dd.text)); - 1 !== Wd && (Od.suffixDisplayParts = Rd.displayParts.slice(Wd), Rd.displayParts = Rd.displayParts.slice(0, Wd));
          let Fd = 0,
            hd = [];
          for (const Xd of Rd.displayParts)
            if (UO.has(Xd.text) ? Fd++ : xO.has(Xd.text) && Fd--, "lineBreak" !== Xd.kind) {
              if ("space" === Xd.kind) {
                if (0 === hd.length) continue;
                hd.push({
                  kind: "space",
                  text: " "
                })
              } else hd.push(Xd);
              0 === Fd && "," === Xd.text && (Od.parameters.push({
                displayParts: hd
              }), hd = [])
            } return hd.length > 0 && Od.parameters.push({
            displayParts: hd
          }), Od.documentation = Rd.documentation, [{
            pos: Xd,
            end: Kd,
            above: !0,
            create: zO(SO(Od))
          }]
        }
        const hd = [];
        for (const dd of Rd.displayParts) hd.push({
          str: dd.text,
          style: {
            color: BO.text
          }
        });
        if (Rd.documentation) {
          hd.push("\n\n");
          for (const dd of Rd.documentation) hd.push({
            str: dd.text,
            style: {
              color: BO.docs
            }
          })
        }
        return [{
          pos: Xd,
          end: Kd,
          above: !0,
          create: zO(hd)
        }]
      }
    }
    const DO = {
      indentSize: 4,
      tabSize: 4,
      newLineCharacter: "\n",
      convertTabsToSpaces: !0,
      insertSpaceAfterCommaDelimiter: !0,
      insertSpaceAfterSemicolonInForStatements: !0,
      insertSpaceBeforeAndAfterBinaryOperators: !0,
      insertSpaceAfterKeywordsInControlFlowStatements: !0,
      insertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
      insertSpaceBeforeFunctionParenthesis: !1,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: !0,
      insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
      insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: !1,
      insertSpaceAfterTypeAssertion: !1,
      placeOpenBraceOnNewLineForFunctions: !1,
      placeOpenBraceOnNewLineForControlBlocks: !1,
      semicolons: Hd().SemicolonPreference.Insert
    };
    const eO = Rd.g.define(),
      IO = {
        lineNumbers: !0,
        tabSize: 4
      };

    function lO(dd) {
      let {
        isLobbyCode: Od,
        code: md,
        onChange: Kd,
        canEditCode: od,
        setTemporaryMessage: qd,
        close: Jd,
        showTooltips: Id,
        lightMode: ld,
        collabState: Zd,
        onRemoteDocChange: kd,
        files: fd,
        activePath: Md,
        pluginName: OO,
        pluginFile: mO,
        pluginSource: FO,
        setActiveDocReplacer: RO,
        showAiHints: KO,
        canAiChangeCode: hO = od
      } = dd;
      const [vO, QO] = (0, Xd.useState)(null), tO = null === Zd || void 0 === Zd ? void 0 : Zd.version, oO = null === Zd || void 0 === Zd ? void 0 : Zd.clientID, NO = (0, Xd.useRef)({
        isLobbyCode: Od,
        files: fd,
        code: md,
        activePath: Md
      }), qO = (0, Xd.useRef)(kd);
      qO.current = kd;
      const HO = (0, Xd.useRef)(null),
        yO = (0, Xd.useRef)(Zd);
      yO.current = Zd;
      const bO = (0, Xd.useRef)(null),
        YO = (0, Xd.useRef)(null),
        gO = (0, Xd.useRef)(null),
        wO = (0, Xd.useRef)(Jd);
      wO.current = Jd;
      const aO = (0, Xd.useRef)(md);
      aO.current = md;
      const UO = (0, Xd.useRef)(FO);
      UO.current = FO;
      const xO = function(dd, Od, md, Wd) {
        return md ? `/plugin-preview/${md}/${null!==Wd&&void 0!==Wd?Wd:"index.ts"}` : dd ? rO(null !== Od && void 0 !== Od ? Od : Yd.g) : AO
      }(Od, Md, OO, mO);
      (0, Xd.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: dd,
            files: Od,
            code: md,
            activePath: Wd
          } = NO.current, Fd = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Hd().ModuleKind.ESNext,
            moduleResolution: Hd().ModuleResolutionKind.Bundler,
            target: Hd().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(pd.f).map((dd => [dd.specifier, [dd.typesVfsPath]])))
            }
          }, Rd = new Map, Xd = [];
          if (dd) {
            const dd = null !== Od && void 0 !== Od ? Od : {
              [Yd.g]: md || "\n"
            };
            for (const [Od, md] of Object.entries(dd)) {
              const dd = rO(Od);
              Rd.set(dd, md || "\n"), Xd.push(dd)
            }
            const Fd = rO(null !== Wd && void 0 !== Wd ? Wd : Yd.g);
            Rd.has(Fd) ? Rd.set(Fd, md || "\n") : (Rd.set(Fd, md || "\n"), Xd.push(Fd)), Rd.set("/node_modules/@bloxd/index.d.ts", Qd.default), Xd.push("/node_modules/@bloxd/index.d.ts");
            for (const Od of Object.values(pd.f)) {
              Rd.set(Od.typesVfsPath, Od.types), Xd.push(Od.typesVfsPath);
              for (const [dd, md] of Object.entries(Od.files)) {
                const Wd = `/plugin-preview/${Od.name}/${dd}`;
                Rd.set(Wd, md || "\n"), Xd.push(Wd)
              }
            }
          } else Rd.set(AO, md || "\n"), Xd.push(AO);
          Rd.set("/globals.d.ts", dd ? vd.c : hd.b), Rd.set("/lib.d.ts", td.d), Xd.push("/globals.d.ts", "/lib.d.ts");
          const Kd = Nd.e(Rd),
            od = Nd.h(Kd, Xd, Hd(), Fd);
          QO({
            Ht: od,
            fsMap: Rd
          })
        }()
      }), []), (0, Xd.useEffect)((() => {
        var dd, Wd;
        if (!vO || !Od) return;
        const {
          Ht: Fd,
          fsMap: Rd
        } = vO;
        if (function(dd, Od, md) {
            const Wd = new Set;
            for (const [Fd, Rd] of Object.entries(md)) {
              const md = rO(Fd);
              Wd.add(md);
              const Xd = Rd || "\n";
              Od.get(md) !== Xd && (Od.set(md, Xd), GO(dd, md, Xd))
            }
            for (const Fd of [...Od.keys()]) "/globals.d.ts" === Fd || "/lib.d.ts" === Fd || Fd.startsWith("/node_modules/") || Fd.startsWith("/plugin-preview/") || Wd.has(Fd) || (Od.delete(Fd), dd.getSourceFile(Fd) && dd.deleteFile(Fd))
          }(Fd, Rd, null !== fd && void 0 !== fd ? fd : {
            [Yd.g]: md || "\n"
          }), OO) return void GO(Fd, xO, FO || "\n");
        const Xd = null !== (dd = null === (Wd = HO.current) || void 0 === Wd ? void 0 : Wd.state.doc.toString()) && void 0 !== dd ? dd : md;
        GO(Fd, xO, Xd || "\n")
      }), [fd, Md, vO, OO, FO, xO, md, Od]), (0, Xd.useEffect)((() => {
        if (!vO) return;
        const {
          Ht: dd
        } = vO;
        GO(dd, xO, (OO ? FO : md) || "\n")
      }), [md, OO, FO, xO, vO]), (0, Xd.useEffect)((() => () => {
        YO.current && (YO.current(), YO.current = null)
      }), []), (0, Xd.useEffect)((() => (RO(((dd, Od) => {
        if (OO) return !1;
        const md = HO.current,
          Wd = yO.current,
          Fd = Wd ? (0, gd.t)(Wd.docKey) : null;
        if (!md || !Wd || bO.current !== Wd.clientID || dd !== Fd) return !1;
        const Rd = md.state.doc.toString();
        return Rd !== Od && md.dispatch({
          changes: {
            from: 0,
            to: Rd.length,
            insert: Od
          }
        }), !0
      })), () => {
        HO.current = null, bO.current = null, RO(null)
      })), [RO, OO]);
      const BO = Od ? OO ? null : null !== Md && void 0 !== Md ? Md : Yd.g : pO.d,
        SO = WO(HO, BO);
      XO(HO, qd), (0, Ed.f)("FormatCode", (() => {
        if (!vO || !HO.current || OO) return;
        const {
          Ht: dd,
          fsMap: md
        } = vO, Wd = dd.getSourceFile(xO).getFullText();
        let Fd = 0;
        if (Od && fd)
          for (const [Od, Kd] of Object.entries(fd)) Od !== (null !== Md && void 0 !== Md ? Md : Yd.g) && (Fd += Kd.length);
        const Rd = function(dd, Od, md, Wd, Fd) {
          const Rd = dd.languageService.getFormattingEditsForDocument(Wd, DO);
          if (!Rd.length) return Ud.e.error("Code is already formatted.");
          Rd.sort(((dd, Od) => Od.span.start - dd.span.start));
          let Xd = dd.getSourceFile(Wd).getFullText();
          for (const Kd of Rd) Xd = Xd.slice(0, Kd.span.start) + Kd.dh + Xd.slice(Kd.span.start + Kd.span.length);
          return Xd !== (md ? (0, wd.o)(Xd, Fd) : (0, wd.k)(Xd)) ? Ud.e.error("Formatting the code will go beyond the character limit.") : Ud.e.value(Xd)
        }(dd, 0, Od, xO, Fd);
        if (Rd.isError()) return void qd({
          message: Rd.asError().message,
          type: "warning"
        });
        const Xd = Rd.getValue();
        Xd && (HO.current.dispatch({
          changes: {
            from: 0,
            to: Wd.length,
            insert: Xd
          },
          selection: {
            anchor: Xd.length
          }
        }), GO(dd, xO, Xd), Kd(Xd))
      }));
      const sO = (0, Xd.useMemo)((() => {
        if (!vO) return [];
        const {
          Ht: dd,
          fsMap: md
        } = vO;
        ! function(dd, Od, md, Wd) {
          if (dd.getSourceFile(md)) return;
          const Fd = Wd || "\n";
          Od.set(md, Fd), dd.createFile(md, Fd)
        }(dd, md, xO, (OO ? UO.current : aO.current) || "\n");
        const Xd = Od && nO(OO ? null !== mO && void 0 !== mO ? mO : "index.ts" : Md),
          Kd = [(0, Fd.e)({
            jsx: !1,
            typescript: Xd
          }), Rd.e.highest(Rd.b.domEventHandlers({
            keydown: dd => "Escape" === dd.key ? (wO.current(), dd.stopPropagation(), !0) : (dd.stopPropagation(), !1)
          })), (0, Wd.c)({
            override: [PO(dd, xO)]
          }), Sd.l.fromClass(class {
            constructor(dd) {
              this.view = dd, this.timeout = null, this.scheduleParse()
            }
            update(dd) {
              (dd.docChanged || dd.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const dd = this.view.viewport.to;
                (0, Ld.ob)(this.view.state, dd) || (0, Ld.S)(this.view, dd, Pd) || this.scheduleParse()
              }), zd))
            }
          }), ...dO, Rd.b.lineWrapping, Rd.i.define({
            create: cO(dd, Id, xO),
            update(Od, md) {
              const Wd = md.effects.some((dd => dd.is(eO)));
              return md.docChanged || md.selection || Wd ? (GO(dd, xO, md.state.doc.toString() || " "), cO(dd, Id, xO)(md.state)) : Od
            },
            provide: dd => Rd.r.computeN([dd], (Od => Od.field(dd)))
          }), (0, Rd.p)(jO(dd, xO)), (0, bd.h)(LO(Od, dd, xO)), Rd.l.fromClass(class {
            constructor(dd) {
              this.view = dd, this.searchPanel = null
            }
            update(dd) {
              const Od = dd.view.dom.querySelector(".cm-search");
              if (Od !== this.searchPanel) {
                if (this.searchPanel = Od, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (dd => {
                  "Escape" === dd.key && (0, yd.d)(this.view), dd.stopPropagation()
                }))
              }
            }
          })];
        KO && !OO && Kd.push(EO(Od ? null !== Md && void 0 !== Md ? Md : Yd.g : pO.d, hO));
        const hd = yO.current;
        if (hd && !OO) {
          Kd.push(... function(dd, Od, md, Wd, Fd) {
            let Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Xd = (0, gd.t)(md),
              Kd = Sd.l.fromClass(class {
                constructor(dd) {
                  this.view = dd, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Vd.j.subscribe("codeCollab", (dd => {
                    dd.docKey === Xd && dd.type === gd.e.Updates && (dd.updates ? this.applyUpdates(dd.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(dd) {
                  const Od = JSON.parse(dd).map((dd => ({
                    clientID: dd.clientID,
                    changes: Bd.ChangeSet.fromJSON(dd.changes)
                  })));
                  Od.length > 0 && (this.view.dispatch((0, xd.f)(this.view.state, Od)), Fd && Fd(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(dd) {
                  Rd && (dd.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const dd = (0, xd.j)(this.view.state);
                  if (this.pushing || !dd.length) return;
                  const Od = Date.now() - this.lastPushTime;
                  if (Od < nd) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), nd - Od)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), rd);
                  const md = (0, xd.c)(this.view.state),
                    Fd = dd.map((dd => ({
                      clientID: dd.clientID,
                      changes: dd.changes.toJSON()
                    }))),
                    Rd = JSON.stringify(Fd);
                  Rd.length <= gd.h ? sd.gameBridge.send("sendCodeCollab", {
                    Vm: gd.c.Push,
                    im: Xd,
                    Am: md,
                    nm: Rd
                  }) : (0, Ad.postJsonWithMetricsCookiesAndJsonResponse)(`${Wd.gsUrl}/code/collab-push`, ud.o["collab-push"].toBuffer({
                    gameNameWithVariation: Wd.gameNameWithVariation,
                    lobbyName: Wd.lobbyName,
                    docKey: Xd,
                    version: md,
                    updates: Rd
                  }), {
                    retries: 0
                  }).catch((dd => {
                    console.error("[CodeCollab] HTTP push failed", dd)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const dd = (0, xd.c)(this.view.state);
                  (0, Ad.postJsonWithMetricsCookiesAndJsonResponse)(`${Wd.gsUrl}/code/collab-pull`, ud.o["collab-pull"].toBuffer({
                    gameNameWithVariation: Wd.gameNameWithVariation,
                    lobbyName: Wd.lobbyName,
                    docKey: Xd,
                    fromVersion: dd
                  }), {
                    retries: 1
                  }).then((dd => {
                    this.destroyed || (dd.fullDoc ? Vd.j.lQ("codeCollabRejoin", {
                      docKey: Xd,
                      doc: dd.fullDoc,
                      version: dd.version
                    }) : this.applyUpdates(dd.updates))
                  })).catch((dd => {
                    console.error("[CodeCollab] Pull failed", dd)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const dd = Date.now();
                  if (dd - this.lastCursorSent < Gd) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Gd)));
                  this.lastCursorSent = dd;
                  const Od = this.view.state.selection.main;
                  sd.gameBridge.send("sendCodeCollab", {
                    Vm: gd.c.Cursor,
                    im: Xd,
                    jm: Od.anchor,
                    Dm: Od.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Vd.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, xd.b)({
              startVersion: dd,
              clientID: Od
            }), Kd]
          }(tO, oO, hd.docKey, hd.httpConfig, (dd => {
            var Od;
            null === (Od = qO.current) || void 0 === Od || Od.call(qO, dd)
          }), od));
          const dd = function(dd, Od) {
            const md = (0, gd.t)(dd);
            return {
              extensions: [Cd],
              connect(dd) {
                if (Od) {
                  const md = Od.map((dd => jd.of({
                    playerId: dd.playerId,
                    playerName: dd.playerName,
                    colour: dd.colour,
                    anchor: dd.anchor,
                    head: dd.head,
                    lastMoved: Date.now()
                  })));
                  md.length > 0 && dd.dispatch({
                    effects: md
                  })
                }
                const Wd = Vd.j.subscribe("codeCollab", (Od => {
                    if (Od.docKey === md)
                      if (Od.type === gd.e.RemoteCursor) dd.dispatch({
                        effects: jd.of({
                          playerId: Od.playerId,
                          playerName: Od.playerName,
                          colour: Od.colour,
                          anchor: Od.anchor,
                          head: Od.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Od.type === gd.e.Presence) {
                      const md = JSON.parse(Od.peers),
                        Wd = new Set(md.map((dd => dd.playerId))),
                        Fd = dd.state.field(Cd),
                        Rd = [];
                      for (const [dd] of Fd.cursors) Wd.has(dd) || Rd.push(Dd.of(dd));
                      Rd.length > 0 && dd.dispatch({
                        effects: Rd
                      })
                    }
                  })),
                  Fd = setInterval((() => {
                    dd.dom.isConnected ? dd.dispatch({
                      effects: ed.of(Date.now())
                    }) : clearInterval(Fd)
                  }), cd);
                return () => {
                  Vd.j.unsubscribe(Wd), clearInterval(Fd)
                }
              }
            }
          }(hd.docKey, hd.existingCursors);
          Kd.push(...dd.extensions), gO.current = dd.connect
        } else gO.current = null;
        return Kd
      }), [Od, vO, Id, tO, oO, xO, Md, OO, mO, od, KO, hO]);
      if (!vO || !Zd && !OO) return (0, JO.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, JO.jsx)(Td.c, {})
      });
      const uO = OO ? `plugin-${OO}-${null!==mO&&void 0!==mO?mO:"index.ts"}` : Zd ? `collab-${Zd.clientID}` : `local-${Od}`;
      return (0, JO.jsx)(Rd.n, {
        value: OO ? null !== FO && void 0 !== FO ? FO : "" : md,
        onChange: Kd,
        extensions: sO,
        className: "CodeEditorContent",
        theme: ld ? TO : "dark",
        editable: od && !OO,
        basicSetup: IO,
        onCreateEditor: dd => {
          var Od;
          HO.current = dd, bO.current = null !== (Od = null === Zd || void 0 === Zd ? void 0 : Zd.clientID) && void 0 !== Od ? Od : null, SO(dd), YO.current && YO.current(), gO.current && (YO.current = gO.current(dd))
        }
      }, uO)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);