export const id = 284;
export const ids = [284];
export const modules = {
  41261: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => uJ
    });
    var pd = kd(41267),
      Nd = kd(41321),
      Wd = kd(41324),
      Pd = kd(56),
      Zd = kd(72),
      gd = kd(41340),
      Cd = kd(41347),
      Kd = kd(4636),
      od = kd(41351),
      ld = kd(1904),
      Qd = kd(41359),
      Ld = kd(41373),
      Od = kd.n(Ld),
      ed = kd(41330),
      Rd = kd(41337),
      Id = kd(1359),
      Gd = kd(37030),
      vd = kd(1260),
      xd = kd(37041),
      qd = kd(36919),
      Bd = kd(1459),
      sd = kd(610),
      ad = kd(1266),
      Md = kd(41424),
      Fd = kd(41273),
      Yd = kd(41282),
      md = kd(1932),
      bd = kd(3624),
      Sd = kd(29),
      jd = kd(1147);
    const Xd = 1e4,
      fd = 250,
      nd = 250;
    var Ud = kd(41303);
    const yd = 50,
      Dd = 100;
    const Td = 2e3,
      Ed = Fd.C.define(),
      cd = Fd.C.define(),
      hd = Fd.C.define();
    class rd extends Yd.s {
      constructor(dd, Jd, kd) {
        super(), this.colour = dd, this.playerName = Jd, this.showName = kd
      }
      toDOM() {
        const dd = document.createElement("span");
        dd.className = "cm-remote-cursor-wrapper", dd.style.borderLeftColor = this.colour;
        const Jd = document.createElement("span");
        if (Jd.className = "cm-remote-cursor", Jd.style.borderLeftColor = this.colour, dd.appendChild(Jd), this.showName) {
          const Jd = document.createElement("span");
          Jd.className = "cm-remote-cursor-name", Jd.style.backgroundColor = this.colour, Jd.textContent = this.playerName, dd.appendChild(Jd)
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

    function ud(dd, Jd) {
      const kd = [],
        pd = [];
      for (const [, Pd] of dd) {
        const dd = Jd - Pd.lastMoved < Td;
        if (kd.push({
            pos: Pd.head,
            decoration: Yd.b.widget({
              widget: new rd(Pd.colour, Pd.playerName, dd),
              side: 1
            })
          }), Pd.anchor !== Pd.head) {
          const dd = Math.min(Pd.anchor, Pd.head),
            Jd = Math.max(Pd.anchor, Pd.head);
          pd.push({
            from: dd,
            to: Jd,
            decoration: Yd.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Pd.colour}33`
              }
            })
          })
        }
      }
      const Nd = new Fd.v,
        Wd = [];
      for (const Pd of kd) Wd.push({
        bias: 1,
        deco: Pd.decoration,
        from: Pd.pos,
        to: Pd.pos
      });
      for (const Pd of pd) Wd.push({
        bias: 0,
        deco: Pd.decoration,
        from: Pd.from,
        to: Pd.to
      });
      Wd.sort(((dd, Jd) => dd.from - Jd.from || dd.deco.startSide - Jd.deco.startSide || dd.bias - Jd.bias));
      for (const Pd of Wd) Nd.add(Pd.from, Pd.to, Pd.deco);
      return Nd.finish()
    }
    const td = Fd.E.define({
      create: () => ({
        cursors: new Map,
        RW: Yd.b.none
      }),
      update(dd, Jd) {
        let kd = dd.cursors,
          pd = !1;
        if (Jd.docChanged) {
          const dd = new Map;
          for (const [pd, Nd] of kd) dd.set(pd, {
            ...Nd,
            anchor: Jd.changes.mapPos(Nd.anchor, 1),
            head: Jd.changes.mapPos(Nd.head, 1)
          });
          kd = dd, pd = !0
        }
        for (const Nd of Jd.effects)
          if (Nd.is(Ed)) {
            if (!Number.isInteger(Nd.value.anchor) || !Number.isInteger(Nd.value.head)) {
              console.warn(`Code Editor: ignored player ${Nd.value.playerId}'s cursor at ${Nd.value.anchor}-${Nd.value.head}`);
              continue
            }
            const Wd = Jd.state.doc.length,
              Pd = {
                ...Nd.value,
                anchor: Math.min(Nd.value.anchor, Wd),
                head: Math.min(Nd.value.head, Wd)
              };
            kd === dd.cursors && (kd = new Map(kd)), kd.set(Pd.playerId, Pd), pd = !0
          } else Nd.is(cd) ? kd.has(Nd.value) && (kd === dd.cursors && (kd = new Map(kd)), kd.delete(Nd.value), pd = !0) : Nd.is(hd) && (pd = !0);
        return pd ? {
          cursors: kd,
          RW: ud(kd, Date.now())
        } : dd
      },
      provide: dd => Yd.i.RW.from(dd, (dd => dd.RW))
    });
    const Vd = Fd.C.define(),
      zd = Yd.b.mark({
        class: "CodeInsertFlash"
      }),
      Hd = Fd.E.define({
        create: () => Yd.b.none,
        update(dd, Jd) {
          let kd = dd.map(Jd.changes);
          for (const pd of Jd.effects) pd.is(Vd) && (kd = pd.value ? Yd.b.set(zd.range(pd.value.from, pd.value.to)) : Yd.b.none);
          return kd
        },
        provide: dd => Yd.i.RW.from(dd)
      }),
      wd = Fd.E.define({
        create: () => !1,
        update: (dd, Jd) => dd || void 0 !== Jd.annotation(Fd.J.userEvent) && !Jd.annotation(Fd.J.remote)
      }),
      Ad = [Hd, wd];

    function dJ(dd) {
      return dd.field(wd)
    }
    const JJ = 3e4;

    function kJ(dd, Jd) {
      const kd = (0, Pd.useRef)(null);
      (0, Pd.useEffect)((() => {
        var dd;
        (null === (dd = kd.current) || void 0 === dd ? void 0 : dd.path) !== Jd && (kd.current = null)
      }), [Jd]);
      const pd = dd => {
        var pd;
        const Nd = kd.current;
        if (null === dd || void 0 === dd || !dd.dom.isConnected || !Nd || Nd.path !== Jd) return;
        kd.current = null;
        const {
          qQ: Pd
        } = Nd;
        if (Pd && null !== Pd.text && performance.now() - Pd.at < JJ) {
          const Jd = function(dd, Jd) {
            if (dd === Jd) return null;
            const kd = Math.min(dd.length, Jd.length);
            let pd = 0;
            for (; pd < kd && dd[pd] === Jd[pd];) pd++;
            let Nd = 0;
            for (; Nd < kd - pd && dd[dd.length - 1 - Nd] === Jd[Jd.length - 1 - Nd];) Nd++;
            return {
              from: pd,
              to: dd.length - Nd,
              insert: Jd.slice(pd, Jd.length - Nd)
            }
          }(dd.state.doc.toString(), Pd.text);
          null !== Jd && dd.dispatch({
            changes: Jd,
            userEvent: Pd.placed ? "input" : void 0
          })
        }
        const {
          doc: Zd
        } = dd.state, gd = Zd.line(Math.min(Math.max(Nd.line, 1), Zd.lines)), Cd = gd.from + Math.min(null !== (pd = Nd.column) && void 0 !== pd ? pd : 0, gd.length);
        dd.dispatch({
          selection: {
            anchor: Cd
          },
          effects: Wd.b.scrollIntoView(Cd, {
            y: "center"
          }),
          userEvent: null !== Pd && void 0 !== Pd && Pd.placed ? "select" : void 0
        }), !1 !== (null === Pd || void 0 === Pd ? void 0 : Pd.focused) && dd.focus()
      };
      return (0, Bd.h)("CodeEditorGoToLine", (Jd => {
        kd.current = Jd, pd(dd.current)
      })), (0, Bd.h)("CodeEditorKeepEdits", (() => {
        const pd = dd.current;
        if (null === pd || !pd.dom.isConnected || null === Jd) return;
        const {
          doc: Nd,
          selection: Wd
        } = pd.state, {
          head: Pd
        } = Wd.main, Zd = Nd.lineAt(Pd), gd = {
          text: (0, Md.h)(pd.state).length > 0 ? Nd.toString() : null,
          at: performance.now(),
          focused: pd.hasFocus,
          placed: dJ(pd.state)
        };
        kd.current = {
          path: Jd,
          line: Zd.number,
          column: Pd - Zd.from,
          qQ: gd
        }
      })), dd => {
        var Nd;
        const Wd = kd.current;
        !1 === (null === Wd || void 0 === Wd || null === (Nd = Wd.qQ) || void 0 === Nd ? void 0 : Nd.focused) && Wd.path === Jd || dd.focus(), pd(dd)
      }
    }
    var pJ = kd(4195),
      NJ = kd(1211);

    function WJ(dd, Jd) {
      const {
        t: kd
      } = (0, NJ.B)();
      (0, Bd.h)("CodeEditorInsertText", (pd => {
        let {
          text: Nd,
          focus: Wd
        } = pd;
        const Pd = dd.current,
          Zd = null !== Pd && void 0 !== Pd && Pd.dom.isConnected ? function(dd, Jd) {
            if (!dJ(dd)) return null;
            const {
              from: kd,
              to: pd
            } = dd.selection.main, Nd = kd + Jd.length;
            return {
              changes: {
                from: kd,
                to: pd,
                insert: Jd
              },
              selection: {
                anchor: Nd
              },
              effects: [Yd.i.scrollIntoView(Nd, {
                y: "center"
              }), Vd.of({
                from: kd,
                to: Nd
              })],
              userEvent: "input"
            }
          }(Pd.state, Nd) : null;
        null !== Pd && null !== Zd ? (Pd.dispatch(Zd), Wd && Pd.focus(), setTimeout((() => {
          Pd.dom.isConnected && Pd.dispatch({
            effects: Vd.of(null)
          })
        }), 1500)) : (0, pJ.d)(Nd).then((() => {
          Jd({
            message: kd("codeEditorWorld:pickCopied", {
              coords: Nd
            }),
            type: "success"
          })
        }), (dd => {
          console.error("Pick could not copy the coordinates", dd), Jd({
            message: kd("codeEditorWorld:pickPlaceCursor", {
              coords: Nd
            }),
            type: "warning"
          })
        }))
      }))
    }
    var PJ = kd(41314);
    const ZJ = "#e45649",
      gJ = "#383a42",
      CJ = "#696c77",
      KJ = "#986801",
      oJ = "#e5e5e6",
      lJ = "#fafafa",
      QJ = "#eaeaeb",
      LJ = "#526fff",
      OJ = Yd.i.theme({
        "&": {
          color: gJ,
          backgroundColor: lJ
        },
        ".cm-content": {
          caretColor: LJ
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: LJ
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: gJ
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
          backgroundColor: lJ,
          color: CJ,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: oJ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: QJ
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: QJ,
          borderBottomColor: QJ
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: oJ,
            color: gJ
          }
        }
      }, {
        dark: !1
      }),
      eJ = Ud.c.define([{
        tag: PJ.m.keyword,
        color: "#a626a4"
      }, {
        tag: [PJ.m.name, PJ.m.deleted, PJ.m.character, PJ.m.propertyName, PJ.m.macroName],
        color: ZJ
      }, {
        tag: [PJ.m.function(PJ.m.variableName), PJ.m.labelName],
        color: "#4078f2"
      }, {
        tag: [PJ.m.color, PJ.m.constant(PJ.m.name), PJ.m.standard(PJ.m.name)],
        color: KJ
      }, {
        tag: [PJ.m.definition(PJ.m.name), PJ.m.separator],
        color: gJ
      }, {
        tag: [PJ.m.typeName, PJ.m.className, PJ.m.number, PJ.m.changed, PJ.m.annotation, PJ.m.modifier, PJ.m.self, PJ.m.namespace],
        color: "#c18401"
      }, {
        tag: [PJ.m.operator, PJ.m.operatorKeyword, PJ.m.url, PJ.m.escape, PJ.m.regexp, PJ.m.link, PJ.m.special(PJ.m.string)],
        color: "#0184bc"
      }, {
        tag: [PJ.m.meta, PJ.m.comment],
        color: CJ
      }, {
        tag: PJ.m.strong,
        fontWeight: "bold"
      }, {
        tag: PJ.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: PJ.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: PJ.m.link,
        color: CJ,
        textDecoration: "underline"
      }, {
        tag: PJ.m.heading,
        fontWeight: "bold",
        color: ZJ
      }, {
        tag: [PJ.m.atom, PJ.m.bool, PJ.m.special(PJ.m.variableName)],
        color: KJ
      }, {
        tag: [PJ.m.processingInstruction, PJ.m.string, PJ.m.inserted],
        color: "#50a14f"
      }, {
        tag: PJ.m.invalid,
        color: "#000000"
      }]),
      RJ = [OJ, (0, Ud.db)(eJ)];
    var IJ = kd(37080),
      GJ = kd(41432);
    const vJ = Wd.h.define(),
      xJ = Wd.i.define({
        create: () => !1,
        update(dd, Jd) {
          for (const kd of Jd.effects) kd.is(vJ) && (dd = kd.value);
          return dd
        }
      }),
      qJ = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function BJ(dd, Jd) {
      return [xJ, Wd.m.fromClass(class {
        constructor(dd) {
          this.view = dd, this.onDown = dd => {
            const Jd = dd.target instanceof Element && null !== dd.target.closest(".cm-tooltip");
            0 !== dd.button || Jd || this.view.state.field(xJ) || this.view.dispatch({
              effects: vJ.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(xJ) && this.view.dispatch({
              effects: vJ.of(!1)
            })
          }, dd.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Wd.v.compute(["selection", xJ], (kd => function(dd, Jd, kd) {
        const pd = dd.selection.main;
        return pd.empty || dd.field(xJ) || dd.sliceDoc(pd.from, pd.to).trim().length < 2 ? null : {
          pos: pd.from,
          above: !0,
          create: dd => {
            const pd = document.createElement("div");
            pd.className = "CodeSelectionActions", pd.setAttribute("role", "toolbar"), pd.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Nd,
                label: Wd
              }
              of qJ) {
              if (!kd && "explain" !== Nd) continue;
              const Pd = document.createElement("button");
              Pd.type = "button", Pd.textContent = Wd, "change" !== Nd && (Pd.title = GJ.c, Pd.dataset.asksAi = "true"), Pd.addEventListener("mousedown", (dd => {
                dd.preventDefault()
              })), Pd.addEventListener("click", (() => {
                const kd = dd.state.selection.main;
                if (kd.empty) return;
                const pd = {
                  action: Nd,
                  path: Jd,
                  fromLine: dd.state.doc.lineAt(kd.from).number,
                  toLine: dd.state.doc.lineAt(kd.to > kd.from && dd.state.doc.lineAt(kd.to).from === kd.to ? kd.to - 1 : kd.to).number,
                  text: dd.state.sliceDoc(kd.from, kd.to)
                };
                Sd.j.nO("WorldCodeAiSelection", pd), dd.dispatch({
                  selection: {
                    anchor: kd.to
                  }
                })
              })), pd.appendChild(Pd)
            }
            return {
              dom: pd
            }
          }
        }
      }(kd, dd, Jd)))]
    }
    var sJ = kd(1103);
    const iJ = new Set(["(", "{", "[", "<"]),
      aJ = new Set([")", "}", "]", ">"]),
      MJ = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function FJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function kd(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = [];
        for (const Nd of dd) {
          let dd;
          dd = "punctuation" === Nd.kind ? MJ.text : "parameterName" === Nd.kind ? MJ.parameterName : Jd, pd.push({
            str: Nd.text,
            style: {
              color: dd,
              opacity: kd ? .5 : void 0
            }
          })
        }
        return pd
      }
      const pd = [];
      if (pd.push(...kd(dd.prefixDisplayParts, MJ.text)), dd.parameters.length > 0) {
        pd.push("\n");
        for (let Nd = 0; Nd < dd.parameters.length; Nd++) {
          const Wd = dd.parameters[Nd];
          pd.push("\t"), pd.push(...kd(Wd.displayParts, MJ.parameter, null !== Jd && Nd !== Jd)), pd.push("\n")
        }
      }
      return pd.push(...kd(dd.suffixDisplayParts, MJ.suffix)), dd.documentation && (pd.push("\n\n"), pd.push(...kd(dd.documentation, MJ.docs))), pd
    }
    var YJ = function(dd) {
      return dd[dd.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", dd[dd.DuplicateIdentifier = 2300] = "DuplicateIdentifier", dd
    }(YJ || {});
    const mJ = new Set([YJ.DuplicateIdentifier]),
      bJ = new Set([YJ.VariableDefinedElsewhere]),
      SJ = new Set([]),
      jJ = "/index.js";

    function XJ(dd) {
      return "/" + dd
    }

    function fJ(dd, Jd, kd) {
      dd.getSourceFile(Jd) && dd.deleteFile(Jd), dd.createFile(Jd, kd)
    }

    function nJ(dd) {
      return !!dd && ((0, xd.n)(dd) || (0, xd.j)(dd))
    }

    function UJ(dd, Jd, kd) {
      return () => {
        let pd = [...Jd.languageService.getSemanticDiagnostics(kd), ...Jd.languageService.getSyntacticDiagnostics(kd)];
        return pd = pd.filter((dd => !(0, sd.I)(dd.start) && !(0, sd.I)(dd.length) && !mJ.has(dd.code))), dd || (pd = pd.filter((dd => !bJ.has(dd.code)))), pd.map((dd => ({
          from: dd.start,
          to: dd.start + dd.length,
          message: "string" === typeof dd.messageText ? dd.messageText : dd.messageText.messageText,
          severity: SJ.has(dd.code) ? "warning" : "error"
        })))
      }
    }

    function yJ(dd, Jd) {
      return kd => {
        var pd, Nd;
        const Wd = dd.languageService.getCompletionsAtPosition(Jd, kd.pos, {});
        if (!Wd) return {
          from: kd.pos,
          options: []
        };
        let Pd = null !== (pd = null === (Nd = Wd.optionalReplacementSpan) || void 0 === Nd ? void 0 : Nd.start) && void 0 !== pd ? pd : kd.pos;
        if (!Wd.optionalReplacementSpan) {
          const dd = kd.state.doc.sliceString(0, kd.pos);
          for (; Pd > 0 && /[\w$]/.test(dd[Pd - 1]);) Pd--
        }
        return Wd.entries = Wd.entries.filter((dd => dd.kind !== Od().ScriptElementKind.warning)), {
          from: Pd,
          options: Wd.entries.map((pd => {
            var Nd, Wd, Zd, gd;
            const Cd = dd.languageService.getCompletionEntryDetails(Jd, kd.pos, pd.name, {}, pd.source, {}, pd.data),
              Kd = null !== (Nd = null === (Wd = pd.replacementSpan) || void 0 === Wd ? void 0 : Wd.start) && void 0 !== Nd ? Nd : Pd,
              od = pd.replacementSpan ? pd.replacementSpan.start + pd.replacementSpan.length : kd.pos,
              ld = null !== (Zd = pd.insertText) && void 0 !== Zd ? Zd : pd.name;
            return {
              label: pd.name,
              detail: null === Cd || void 0 === Cd ? void 0 : Cd.displayParts.map((dd => dd.text)).join(""),
              info: null === Cd || void 0 === Cd || null === (gd = Cd.documentation) || void 0 === gd ? void 0 : gd.map((dd => dd.text)).join(""),
              apply: dd => {
                dd.dispatch({
                  changes: {
                    from: Kd,
                    to: od,
                    insert: ld
                  },
                  selection: {
                    anchor: Kd + ld.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function DJ(dd) {
      return Jd => {
        const kd = document.createElement("div");
        kd.className = "CodeEditorTooltip";
        let pd = !1;
        return queueMicrotask((() => {
          pd || (Zd.render((0, sJ.jsx)(ld.c, {
            text: dd
          }), kd), Jd.requestMeasure())
        })), {
          dom: kd,
          destroy() {
            pd = !0, queueMicrotask((() => {
              Zd.unmountComponentAtNode(kd)
            }))
          }
        }
      }
    }

    function TJ(dd, Jd, kd) {
      return pd => {
        var Nd;
        if (!Jd) return [];
        const Wd = null === (Nd = pd.selection.UO[0]) || void 0 === Nd ? void 0 : Nd.head;
        if (void 0 === Wd) return [];
        const Pd = dd.languageService.getSignatureHelpItems(kd, Wd, {});
        if (!Pd || !Pd.items.length) return [];
        const Zd = Pd.applicableSpan.start - Pd.items[0].prefixDisplayParts.map((dd => dd.text)).join("").length,
          gd = Pd.applicableSpan.start,
          Cd = pd.doc.lineAt(Wd),
          Kd = Cd.from,
          od = Math.min(Cd.to, Wd);
        let ld, Qd;
        return Zd < Kd ? (ld = Kd, Qd = od) : (ld = Zd, Qd = gd), [{
          pos: ld,
          end: Qd,
          above: !1,
          create: DJ(FJ(Pd.items[0], Pd.argumentIndex))
        }]
      }
    }

    function EJ(dd, Jd) {
      return (kd, pd, Nd) => {
        const Wd = dd.languageService.getQuickInfoAtPosition(Jd, pd);
        if (!Wd) return [];
        const Pd = Wd.textSpan.start,
          Zd = Wd.textSpan.start + Wd.textSpan.length;
        if (pd < Pd || pd >= Zd) return [];
        if (Wd.kind === Od().ScriptElementKind.memberFunctionElement || Wd.kind === Od().ScriptElementKind.variableElement && "declare" === Wd.kindModifiers) {
          const dd = Wd.displayParts.findIndex((dd => "space" === dd.kind)); - 1 !== dd && (Wd.displayParts = Wd.displayParts.slice(dd));
          const Jd = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            kd = Wd.displayParts.findIndex((dd => "punctuation" === dd.kind && "(" === dd.text)); - 1 !== kd && (Jd.prefixDisplayParts = Wd.displayParts.slice(0, kd + 1), Wd.displayParts = Wd.displayParts.slice(kd + 1));
          const pd = Wd.displayParts.findLastIndex((dd => "punctuation" === dd.kind && ")" === dd.text)); - 1 !== pd && (Jd.suffixDisplayParts = Wd.displayParts.slice(pd), Wd.displayParts = Wd.displayParts.slice(0, pd));
          let Nd = 0,
            gd = [];
          for (const Pd of Wd.displayParts)
            if (iJ.has(Pd.text) ? Nd++ : aJ.has(Pd.text) && Nd--, "lineBreak" !== Pd.kind) {
              if ("space" === Pd.kind) {
                if (0 === gd.length) continue;
                gd.push({
                  kind: "space",
                  text: " "
                })
              } else gd.push(Pd);
              0 === Nd && "," === Pd.text && (Jd.parameters.push({
                displayParts: gd
              }), gd = [])
            } return gd.length > 0 && Jd.parameters.push({
            displayParts: gd
          }), Jd.documentation = Wd.documentation, [{
            pos: Pd,
            end: Zd,
            above: !0,
            create: DJ(FJ(Jd))
          }]
        }
        const gd = [];
        for (const dd of Wd.displayParts) gd.push({
          str: dd.text,
          style: {
            color: MJ.text
          }
        });
        if (Wd.documentation) {
          gd.push("\n\n");
          for (const dd of Wd.documentation) gd.push({
            str: dd.text,
            style: {
              color: MJ.docs
            }
          })
        }
        return [{
          pos: Pd,
          end: Zd,
          above: !0,
          create: DJ(gd)
        }]
      }
    }
    const cJ = {
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
      semicolons: Od().SemicolonPreference.Insert
    };
    const hJ = Wd.h.define(),
      rJ = {
        lineNumbers: !0,
        tabSize: 4
      };

    function uJ(dd) {
      let {
        isLobbyCode: Jd,
        code: kd,
        onChange: Zd,
        canEditCode: ld,
        setTemporaryMessage: Ld,
        close: sd,
        showTooltips: rd,
        lightMode: ud,
        collabState: Vd,
        onRemoteDocChange: zd,
        files: Hd,
        activePath: wd,
        pluginName: dJ,
        pluginFile: JJ,
        pluginSource: pJ,
        setActiveDocReplacer: NJ,
        showAiHints: PJ,
        canAiChangeCode: ZJ = ld
      } = dd;
      const [gJ, CJ] = (0, Pd.useState)(null), KJ = null === Vd || void 0 === Vd ? void 0 : Vd.version, oJ = null === Vd || void 0 === Vd ? void 0 : Vd.clientID, lJ = (0, Pd.useRef)({
        isLobbyCode: Jd,
        files: Hd,
        code: kd,
        activePath: wd
      }), QJ = (0, Pd.useRef)(zd);
      QJ.current = zd;
      const LJ = (0, Pd.useRef)(null),
        OJ = (0, Pd.useRef)(Vd);
      OJ.current = Vd;
      const eJ = (0, Pd.useRef)(null),
        GJ = (0, Pd.useRef)(null),
        vJ = (0, Pd.useRef)(null),
        xJ = (0, Pd.useRef)(sd);
      xJ.current = sd;
      const qJ = (0, Pd.useRef)(kd);
      qJ.current = kd;
      const iJ = (0, Pd.useRef)(pJ);
      iJ.current = pJ;
      const aJ = function(dd, Jd, kd, pd) {
        return kd ? `/plugin-preview/${kd}/${null!==pd&&void 0!==pd?pd:"index.ts"}` : dd ? XJ(null !== Jd && void 0 !== Jd ? Jd : vd.h) : jJ
      }(Jd, wd, dJ, JJ);
      (0, Pd.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: dd,
            files: Jd,
            code: kd,
            activePath: pd
          } = lJ.current, Nd = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Od().ModuleKind.ESNext,
            moduleResolution: Od().ModuleResolutionKind.Bundler,
            target: Od().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Gd.g).map((dd => [dd.specifier, [dd.typesVfsPath]])))
            }
          }, Wd = new Map, Pd = [];
          if (dd) {
            const dd = null !== Jd && void 0 !== Jd ? Jd : {
              [vd.h]: kd || "\n"
            };
            for (const [Jd, kd] of Object.entries(dd)) {
              const dd = XJ(Jd);
              Wd.set(dd, kd || "\n"), Pd.push(dd)
            }
            const Nd = XJ(null !== pd && void 0 !== pd ? pd : vd.h);
            Wd.has(Nd) ? Wd.set(Nd, kd || "\n") : (Wd.set(Nd, kd || "\n"), Pd.push(Nd)), Wd.set("/node_modules/@bloxd/index.d.ts", Kd.default), Pd.push("/node_modules/@bloxd/index.d.ts");
            for (const Jd of Object.values(Gd.g)) {
              Wd.set(Jd.typesVfsPath, Jd.types), Pd.push(Jd.typesVfsPath);
              for (const [dd, kd] of Object.entries(Jd.files)) {
                const pd = `/plugin-preview/${Jd.name}/${dd}`;
                Wd.set(pd, kd || "\n"), Pd.push(pd)
              }
            }
          } else Wd.set(jJ, kd || "\n"), Pd.push(jJ);
          Wd.set("/globals.d.ts", dd ? Cd.b : gd.b), Wd.set("/lib.d.ts", od.c), Pd.push("/globals.d.ts", "/lib.d.ts");
          const Zd = Qd.b(Wd),
            ld = Qd.d(Zd, Pd, Od(), Nd);
          CJ({
            yO: ld,
            fsMap: Wd
          })
        }()
      }), []), (0, Pd.useEffect)((() => {
        var dd, pd;
        if (!gJ || !Jd) return;
        const {
          yO: Nd,
          fsMap: Wd
        } = gJ;
        if (function(dd, Jd, kd) {
            const pd = new Set;
            for (const [Nd, Wd] of Object.entries(kd)) {
              const kd = XJ(Nd);
              pd.add(kd);
              const Pd = Wd || "\n";
              Jd.get(kd) !== Pd && (Jd.set(kd, Pd), fJ(dd, kd, Pd))
            }
            for (const Nd of [...Jd.keys()]) "/globals.d.ts" === Nd || "/lib.d.ts" === Nd || Nd.startsWith("/node_modules/") || Nd.startsWith("/plugin-preview/") || pd.has(Nd) || (Jd.delete(Nd), dd.getSourceFile(Nd) && dd.deleteFile(Nd))
          }(Nd, Wd, null !== Hd && void 0 !== Hd ? Hd : {
            [vd.h]: kd || "\n"
          }), dJ) return void fJ(Nd, aJ, pJ || "\n");
        const Pd = null !== (dd = null === (pd = LJ.current) || void 0 === pd ? void 0 : pd.state.doc.toString()) && void 0 !== dd ? dd : kd;
        fJ(Nd, aJ, Pd || "\n")
      }), [Hd, wd, gJ, dJ, pJ, aJ, kd, Jd]), (0, Pd.useEffect)((() => {
        if (!gJ) return;
        const {
          yO: dd
        } = gJ;
        fJ(dd, aJ, (dJ ? pJ : kd) || "\n")
      }), [kd, dJ, pJ, aJ, gJ]), (0, Pd.useEffect)((() => () => {
        GJ.current && (GJ.current(), GJ.current = null)
      }), []), (0, Pd.useEffect)((() => (NJ(((dd, Jd) => {
        if (dJ) return !1;
        const kd = LJ.current,
          pd = OJ.current,
          Nd = pd ? (0, xd.v)(pd.docKey) : null;
        if (!kd || !pd || eJ.current !== pd.clientID || dd !== Nd) return !1;
        const Wd = kd.state.doc.toString();
        return Wd !== Jd && kd.dispatch({
          changes: {
            from: 0,
            to: Wd.length,
            insert: Jd
          }
        }), !0
      })), () => {
        LJ.current = null, eJ.current = null, NJ(null)
      })), [NJ, dJ]);
      const MJ = Jd ? dJ ? null : null !== wd && void 0 !== wd ? wd : vd.h : IJ.c,
        FJ = kJ(LJ, MJ);
      WJ(LJ, Ld), (0, Bd.h)("FormatCode", (() => {
        if (!gJ || !LJ.current || dJ) return;
        const {
          yO: dd,
          fsMap: kd
        } = gJ, pd = dd.getSourceFile(aJ).getFullText();
        let Nd = 0;
        if (Jd && Hd)
          for (const [Jd, Zd] of Object.entries(Hd)) Jd !== (null !== wd && void 0 !== wd ? wd : vd.h) && (Nd += Zd.length);
        const Wd = function(dd, Jd, kd, pd, Nd) {
          const Wd = dd.languageService.getFormattingEditsForDocument(pd, cJ);
          if (!Wd.length) return ad.b.error("Code is already formatted.");
          Wd.sort(((dd, Jd) => Jd.span.start - dd.span.start));
          let Pd = dd.getSourceFile(pd).getFullText();
          for (const Zd of Wd) Pd = Pd.slice(0, Zd.span.start) + Zd.ZK + Pd.slice(Zd.span.start + Zd.span.length);
          return Pd !== (kd ? (0, qd.l)(Pd, Nd) : (0, qd.i)(Pd)) ? ad.b.error("Formatting the code will go beyond the character limit.") : ad.b.value(Pd)
        }(dd, 0, Jd, aJ, Nd);
        if (Wd.isError()) return void Ld({
          message: Wd.asError().message,
          type: "warning"
        });
        const Pd = Wd.getValue();
        Pd && (LJ.current.dispatch({
          changes: {
            from: 0,
            to: pd.length,
            insert: Pd
          },
          selection: {
            anchor: Pd.length
          }
        }), fJ(dd, aJ, Pd), Zd(Pd))
      }));
      const YJ = (0, Pd.useMemo)((() => {
        if (!gJ) return [];
        const {
          yO: dd,
          fsMap: kd
        } = gJ;
        ! function(dd, Jd, kd, pd) {
          if (dd.getSourceFile(kd)) return;
          const Nd = pd || "\n";
          Jd.set(kd, Nd), dd.createFile(kd, Nd)
        }(dd, kd, aJ, (dJ ? iJ.current : qJ.current) || "\n");
        const Pd = Jd && nJ(dJ ? null !== JJ && void 0 !== JJ ? JJ : "index.ts" : wd),
          Zd = [(0, Nd.d)({
            jsx: !1,
            typescript: Pd
          }), Wd.d.highest(Wd.b.domEventHandlers({
            keydown: dd => "Escape" === dd.key ? (xJ.current(), dd.stopPropagation(), !0) : (dd.stopPropagation(), !1)
          })), (0, pd.c)({
            override: [yJ(dd, aJ)]
          }), Yd.p.fromClass(class {
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
                (0, Ud.eb)(this.view.state, dd) || (0, Ud.J)(this.view, dd, yd) || this.scheduleParse()
              }), Dd))
            }
          }), ...Ad, Wd.b.lineWrapping, Wd.i.define({
            create: TJ(dd, rd, aJ),
            update(Jd, kd) {
              const pd = kd.effects.some((dd => dd.is(hJ)));
              return kd.docChanged || kd.selection || pd ? (fJ(dd, aJ, kd.state.doc.toString() || " "), TJ(dd, rd, aJ)(kd.state)) : Jd
            },
            provide: dd => Wd.v.computeN([dd], (Jd => Jd.field(dd)))
          }), (0, Wd.u)(EJ(dd, aJ)), (0, Rd.g)(UJ(Jd, dd, aJ)), Wd.m.fromClass(class {
            constructor(dd) {
              this.view = dd, this.searchPanel = null
            }
            update(dd) {
              const Jd = dd.view.dom.querySelector(".cm-search");
              if (Jd !== this.searchPanel) {
                if (this.searchPanel = Jd, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (dd => {
                  "Escape" === dd.key && (0, ed.d)(this.view), dd.stopPropagation()
                }))
              }
            }
          })];
        PJ && !dJ && Zd.push(BJ(Jd ? null !== wd && void 0 !== wd ? wd : vd.h : IJ.c, ZJ));
        const gd = OJ.current;
        if (gd && !dJ) {
          Zd.push(... function(dd, Jd, kd, pd, Nd) {
            let Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Pd = (0, xd.v)(kd),
              Zd = Yd.p.fromClass(class {
                constructor(dd) {
                  this.view = dd, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Sd.j.subscribe("codeCollab", (dd => {
                    dd.docKey === Pd && dd.type === xd.d.Updates && (dd.updates ? this.applyUpdates(dd.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(dd) {
                  const Jd = JSON.parse(dd).map((dd => ({
                    clientID: dd.clientID,
                    changes: Fd.ChangeSet.fromJSON(dd.changes)
                  })));
                  Jd.length > 0 && (this.view.dispatch((0, Md.g)(this.view.state, Jd)), Nd && Nd(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(dd) {
                  Wd && (dd.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const dd = (0, Md.h)(this.view.state);
                  if (this.pushing || !dd.length) return;
                  const Jd = Date.now() - this.lastPushTime;
                  if (Jd < nd) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), nd - Jd)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Xd);
                  const kd = (0, Md.f)(this.view.state),
                    Nd = dd.map((dd => ({
                      clientID: dd.clientID,
                      changes: dd.changes.toJSON()
                    }))),
                    Wd = JSON.stringify(Nd);
                  Wd.length <= xd.e ? md.gameBridge.send("sendCodeCollab", {
                    SJ: xd.c.Push,
                    jJ: Pd,
                    XJ: kd,
                    UJ: Wd
                  }) : (0, jd.postJsonWithMetricsCookiesAndJsonResponse)(`${pd.gsUrl}/code/collab-push`, bd.r["collab-push"].toBuffer({
                    gameNameWithVariation: pd.gameNameWithVariation,
                    lobbyName: pd.lobbyName,
                    docKey: Pd,
                    version: kd,
                    updates: Wd
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
                  const dd = (0, Md.f)(this.view.state);
                  (0, jd.postJsonWithMetricsCookiesAndJsonResponse)(`${pd.gsUrl}/code/collab-pull`, bd.r["collab-pull"].toBuffer({
                    gameNameWithVariation: pd.gameNameWithVariation,
                    lobbyName: pd.lobbyName,
                    docKey: Pd,
                    fromVersion: dd
                  }), {
                    retries: 1
                  }).then((dd => {
                    this.destroyed || (dd.fullDoc ? Sd.j.nO("codeCollabRejoin", {
                      docKey: Pd,
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
                  if (dd - this.lastCursorSent < fd) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), fd)));
                  this.lastCursorSent = dd;
                  const Jd = this.view.state.selection.main;
                  md.gameBridge.send("sendCodeCollab", {
                    SJ: xd.c.Cursor,
                    jJ: Pd,
                    EJ: Jd.anchor,
                    cJ: Jd.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Sd.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Md.e)({
              startVersion: dd,
              clientID: Jd
            }), Zd]
          }(KJ, oJ, gd.docKey, gd.httpConfig, (dd => {
            var Jd;
            null === (Jd = QJ.current) || void 0 === Jd || Jd.call(QJ, dd)
          }), ld));
          const dd = function(dd, Jd) {
            const kd = (0, xd.v)(dd);
            return {
              extensions: [td],
              connect(dd) {
                if (Jd) {
                  const kd = Jd.map((dd => Ed.of({
                    playerId: dd.playerId,
                    playerName: dd.playerName,
                    colour: dd.colour,
                    anchor: dd.anchor,
                    head: dd.head,
                    lastMoved: Date.now()
                  })));
                  kd.length > 0 && dd.dispatch({
                    effects: kd
                  })
                }
                const pd = Sd.j.subscribe("codeCollab", (Jd => {
                    if (Jd.docKey === kd)
                      if (Jd.type === xd.d.RemoteCursor) dd.dispatch({
                        effects: Ed.of({
                          playerId: Jd.playerId,
                          playerName: Jd.playerName,
                          colour: Jd.colour,
                          anchor: Jd.anchor,
                          head: Jd.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Jd.type === xd.d.Presence) {
                      const kd = JSON.parse(Jd.peers),
                        pd = new Set(kd.map((dd => dd.playerId))),
                        Nd = dd.state.field(td),
                        Wd = [];
                      for (const [dd] of Nd.cursors) pd.has(dd) || Wd.push(cd.of(dd));
                      Wd.length > 0 && dd.dispatch({
                        effects: Wd
                      })
                    }
                  })),
                  Nd = setInterval((() => {
                    dd.dom.isConnected ? dd.dispatch({
                      effects: hd.of(Date.now())
                    }) : clearInterval(Nd)
                  }), Td);
                return () => {
                  Sd.j.unsubscribe(pd), clearInterval(Nd)
                }
              }
            }
          }(gd.docKey, gd.existingCursors);
          Zd.push(...dd.extensions), vJ.current = dd.connect
        } else vJ.current = null;
        return Zd
      }), [Jd, gJ, rd, KJ, oJ, aJ, wd, dJ, JJ, ld, PJ, ZJ]);
      if (!gJ || !Vd && !dJ) return (0, sJ.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, sJ.jsx)(Id.b, {})
      });
      const mJ = dJ ? `plugin-${dJ}-${null!==JJ&&void 0!==JJ?JJ:"index.ts"}` : Vd ? `collab-${Vd.clientID}` : `local-${Jd}`;
      return (0, sJ.jsx)(Wd.q, {
        value: dJ ? null !== pJ && void 0 !== pJ ? pJ : "" : kd,
        onChange: Zd,
        extensions: YJ,
        className: "CodeEditorContent",
        theme: ud ? RJ : "dark",
        editable: ld && !dJ,
        basicSetup: rJ,
        onCreateEditor: dd => {
          var Jd;
          LJ.current = dd, eJ.current = null !== (Jd = null === Vd || void 0 === Vd ? void 0 : Vd.clientID) && void 0 !== Jd ? Jd : null, FJ(dd), GJ.current && GJ.current(), vJ.current && (GJ.current = vJ.current(dd))
        }
      }, mJ)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);