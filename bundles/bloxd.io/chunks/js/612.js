export const id = 612;
export const ids = [612];
export const modules = {
  53853: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => FS
    });
    var Zr = Qr(53855),
      Wr = Qr(53902),
      ar = Qr(53908),
      jr = Qr(72),
      Ir = Qr(92),
      fr = Qr(53928),
      Er = Qr(53933),
      pr = Qr(5577),
      xr = Qr(53935),
      mr = Qr(2057),
      Nr = Qr(53943),
      Ur = Qr(53957),
      tr = Qr.n(Ur),
      hr = Qr(53915),
      zr = Qr(53919),
      Yr = Qr(1444),
      nr = Qr(38327),
      er = Qr(1287),
      Kr = Qr(3396),
      yr = Qr(37701),
      Br = Qr(1573),
      Tr = Qr(688),
      vr = Qr(1295),
      Or = Qr(54016),
      Lr = Qr(53864),
      lr = Qr(53872),
      Xr = Qr(2089),
      Pr = Qr(2484),
      Hr = Qr(34),
      qr = Qr(1187);
    const Rr = 1e4,
      gr = 250,
      Cr = 250;
    var Mr = Qr(53892);
    const Gr = 50,
      kr = 100;
    const Ar = 2e3,
      Vr = Lr.P.define(),
      ir = Lr.P.define(),
      wr = Lr.P.define();
    class cr extends lr.q {
      constructor(rr, Sr, Qr) {
        super(), this.colour = rr, this.playerName = Sr, this.showName = Qr
      }
      toDOM() {
        const rr = document.createElement("span");
        rr.className = "cm-remote-cursor-wrapper", rr.style.borderLeftColor = this.colour;
        const Sr = document.createElement("span");
        if (Sr.className = "cm-remote-cursor", Sr.style.borderLeftColor = this.colour, rr.appendChild(Sr), this.showName) {
          const Sr = document.createElement("span");
          Sr.className = "cm-remote-cursor-name", Sr.style.backgroundColor = this.colour, Sr.textContent = this.playerName, rr.appendChild(Sr)
        }
        return rr
      }
      eq(rr) {
        return this.colour === rr.colour && this.playerName === rr.playerName && this.showName === rr.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function Fr(rr, Sr) {
      const Qr = [],
        Zr = [];
      for (const [, jr] of rr) {
        const rr = Sr - jr.lastMoved < Ar;
        if (Qr.push({
            pos: jr.head,
            decoration: lr.c.widget({
              widget: new cr(jr.colour, jr.playerName, rr),
              side: 1
            })
          }), jr.anchor !== jr.head) {
          const rr = Math.min(jr.anchor, jr.head),
            Sr = Math.max(jr.anchor, jr.head);
          Zr.push({
            from: rr,
            to: Sr,
            decoration: lr.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${jr.colour}33`
              }
            })
          })
        }
      }
      const Wr = new Lr.E,
        ar = [];
      for (const jr of Qr) ar.push({
        bias: 1,
        deco: jr.decoration,
        from: jr.pos,
        to: jr.pos
      });
      for (const jr of Zr) ar.push({
        bias: 0,
        deco: jr.decoration,
        from: jr.from,
        to: jr.to
      });
      ar.sort(((rr, Sr) => rr.from - Sr.from || rr.deco.startSide - Sr.deco.startSide || rr.bias - Sr.bias));
      for (const jr of ar) Wr.add(jr.from, jr.to, jr.deco);
      return Wr.finish()
    }
    const or = Lr.T.define({
      create: () => ({
        cursors: new Map,
        OZ: lr.c.none
      }),
      update(rr, Sr) {
        let Qr = rr.cursors,
          Zr = !1;
        if (Sr.docChanged) {
          const rr = new Map;
          for (const [Zr, Wr] of Qr) rr.set(Zr, {
            ...Wr,
            anchor: Sr.changes.mapPos(Wr.anchor, 1),
            head: Sr.changes.mapPos(Wr.head, 1)
          });
          Qr = rr, Zr = !0
        }
        for (const Wr of Sr.effects)
          if (Wr.is(Vr)) {
            if (!Number.isInteger(Wr.value.anchor) || !Number.isInteger(Wr.value.head)) {
              console.warn(`Code Editor: ignored player ${Wr.value.playerId}'s cursor at ${Wr.value.anchor}-${Wr.value.head}`);
              continue
            }
            const ar = Sr.state.doc.length,
              jr = {
                ...Wr.value,
                anchor: Math.min(Wr.value.anchor, ar),
                head: Math.min(Wr.value.head, ar)
              };
            Qr === rr.cursors && (Qr = new Map(Qr)), Qr.set(jr.playerId, jr), Zr = !0
          } else Wr.is(ir) ? Qr.has(Wr.value) && (Qr === rr.cursors && (Qr = new Map(Qr)), Qr.delete(Wr.value), Zr = !0) : Wr.is(wr) && (Zr = !0);
        return Zr ? {
          cursors: Qr,
          OZ: Fr(Qr, Date.now())
        } : rr
      },
      provide: rr => lr.i.OZ.from(rr, (rr => rr.OZ))
    });
    const br = Lr.P.define(),
      Jr = lr.c.mark({
        class: "CodeInsertFlash"
      }),
      Dr = Lr.T.define({
        create: () => lr.c.none,
        update(rr, Sr) {
          let Qr = rr.map(Sr.changes);
          for (const Zr of Sr.effects) Zr.is(br) && (Qr = Zr.value ? lr.c.set(Jr.range(Zr.value.from, Zr.value.to)) : lr.c.none);
          return Qr
        },
        provide: rr => lr.i.OZ.from(rr)
      }),
      dr = Lr.T.define({
        create: () => !1,
        update: (rr, Sr) => rr || void 0 !== Sr.annotation(Lr.Y.userEvent) && !Sr.annotation(Lr.Y.remote)
      }),
      sr = [Dr, dr];

    function ur(rr) {
      return rr.field(dr)
    }
    const rS = 3e4;

    function SS(rr, Sr) {
      const Qr = (0, jr.useRef)(null);
      (0, jr.useEffect)((() => {
        var rr;
        (null === (rr = Qr.current) || void 0 === rr ? void 0 : rr.path) !== Sr && (Qr.current = null)
      }), [Sr]);
      const Zr = rr => {
        var Zr;
        const Wr = Qr.current;
        if (null === rr || void 0 === rr || !rr.dom.isConnected || !Wr || Wr.path !== Sr) return;
        Qr.current = null;
        const {
          sp: jr
        } = Wr;
        if (jr && null !== jr.text && performance.now() - jr.at < rS) {
          const Sr = function(rr, Sr) {
            if (rr === Sr) return null;
            const Qr = Math.min(rr.length, Sr.length);
            let Zr = 0;
            for (; Zr < Qr && rr[Zr] === Sr[Zr];) Zr++;
            let Wr = 0;
            for (; Wr < Qr - Zr && rr[rr.length - 1 - Wr] === Sr[Sr.length - 1 - Wr];) Wr++;
            return {
              from: Zr,
              to: rr.length - Wr,
              insert: Sr.slice(Zr, Sr.length - Wr)
            }
          }(rr.state.doc.toString(), jr.text);
          null !== Sr && rr.dispatch({
            changes: Sr,
            userEvent: jr.placed ? "input" : void 0
          })
        }
        const {
          doc: Ir
        } = rr.state, fr = Ir.line(Math.min(Math.max(Wr.line, 1), Ir.lines)), Er = fr.from + Math.min(null !== (Zr = Wr.column) && void 0 !== Zr ? Zr : 0, fr.length);
        rr.dispatch({
          selection: {
            anchor: Er
          },
          effects: ar.b.scrollIntoView(Er, {
            y: "center"
          }),
          userEvent: null !== jr && void 0 !== jr && jr.placed ? "select" : void 0
        }), !1 !== (null === jr || void 0 === jr ? void 0 : jr.focused) && rr.focus()
      };
      return (0, Br.c)("CodeEditorGoToLine", (Sr => {
        Qr.current = Sr, Zr(rr.current)
      })), (0, Br.c)("CodeEditorKeepEdits", (() => {
        const Zr = rr.current;
        if (null === Zr || !Zr.dom.isConnected || null === Sr) return;
        const {
          doc: Wr,
          selection: ar
        } = Zr.state, {
          head: jr
        } = ar.main, Ir = Wr.lineAt(jr), fr = {
          text: (0, Or.h)(Zr.state).length > 0 ? Wr.toString() : null,
          at: performance.now(),
          focused: Zr.hasFocus,
          placed: ur(Zr.state)
        };
        Qr.current = {
          path: Sr,
          line: Ir.number,
          column: jr - Ir.from,
          sp: fr
        }
      })), rr => {
        var Wr;
        const ar = Qr.current;
        !1 === (null === ar || void 0 === ar || null === (Wr = ar.sp) || void 0 === Wr ? void 0 : Wr.focused) && ar.path === Sr || rr.focus(), Zr(rr)
      }
    }
    var QS = Qr(5063),
      ZS = Qr(1251);

    function WS(rr, Sr) {
      const {
        t: Qr
      } = (0, ZS.E)();
      (0, Br.c)("CodeEditorInsertText", (Zr => {
        let {
          text: Wr,
          focus: ar
        } = Zr;
        const jr = rr.current,
          Ir = null !== jr && void 0 !== jr && jr.dom.isConnected ? function(rr, Sr) {
            if (!ur(rr)) return null;
            const {
              from: Qr,
              to: Zr
            } = rr.selection.main, Wr = Qr + Sr.length;
            return {
              changes: {
                from: Qr,
                to: Zr,
                insert: Sr
              },
              selection: {
                anchor: Wr
              },
              effects: [lr.i.scrollIntoView(Wr, {
                y: "center"
              }), br.of({
                from: Qr,
                to: Wr
              })],
              userEvent: "input"
            }
          }(jr.state, Wr) : null;
        null !== jr && null !== Ir ? (jr.dispatch(Ir), ar && jr.focus(), setTimeout((() => {
          jr.dom.isConnected && jr.dispatch({
            effects: br.of(null)
          })
        }), 1500)) : (0, QS.b)(Wr).then((() => {
          Sr({
            message: Qr("codeEditorWorld:pickCopied", {
              coords: Wr
            }),
            type: "success"
          })
        }), (rr => {
          console.error("Pick could not copy the coordinates", rr), Sr({
            message: Qr("codeEditorWorld:pickPlaceCursor", {
              coords: Wr
            }),
            type: "warning"
          })
        }))
      }))
    }
    var aS = Qr(53897);
    const jS = "#e45649",
      IS = "#383a42",
      fS = "#696c77",
      ES = "#986801",
      pS = "#e5e5e6",
      xS = "#fafafa",
      mS = "#eaeaeb",
      NS = "#526fff",
      US = lr.i.theme({
        "&": {
          color: IS,
          backgroundColor: xS
        },
        ".cm-content": {
          caretColor: NS
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: NS
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: IS
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
          backgroundColor: xS,
          color: fS,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: pS
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: mS
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: mS,
          borderBottomColor: mS
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: pS,
            color: IS
          }
        }
      }, {
        dark: !1
      }),
      tS = Mr.b.define([{
        tag: aS.m.keyword,
        color: "#a626a4"
      }, {
        tag: [aS.m.name, aS.m.deleted, aS.m.character, aS.m.propertyName, aS.m.macroName],
        color: jS
      }, {
        tag: [aS.m.function(aS.m.variableName), aS.m.labelName],
        color: "#4078f2"
      }, {
        tag: [aS.m.color, aS.m.constant(aS.m.name), aS.m.standard(aS.m.name)],
        color: ES
      }, {
        tag: [aS.m.definition(aS.m.name), aS.m.separator],
        color: IS
      }, {
        tag: [aS.m.typeName, aS.m.className, aS.m.number, aS.m.changed, aS.m.annotation, aS.m.modifier, aS.m.self, aS.m.namespace],
        color: "#c18401"
      }, {
        tag: [aS.m.operator, aS.m.operatorKeyword, aS.m.url, aS.m.escape, aS.m.regexp, aS.m.link, aS.m.special(aS.m.string)],
        color: "#0184bc"
      }, {
        tag: [aS.m.meta, aS.m.comment],
        color: fS
      }, {
        tag: aS.m.strong,
        fontWeight: "bold"
      }, {
        tag: aS.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: aS.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: aS.m.link,
        color: fS,
        textDecoration: "underline"
      }, {
        tag: aS.m.heading,
        fontWeight: "bold",
        color: jS
      }, {
        tag: [aS.m.atom, aS.m.bool, aS.m.special(aS.m.variableName)],
        color: ES
      }, {
        tag: [aS.m.processingInstruction, aS.m.string, aS.m.inserted],
        color: "#50a14f"
      }, {
        tag: aS.m.invalid,
        color: "#000000"
      }]),
      hS = [US, (0, Mr.qb)(tS)];
    var zS = Qr(38374),
      YS = Qr(54025);
    const nS = ar.f.define(),
      eS = ar.i.define({
        create: () => !1,
        update(rr, Sr) {
          for (const Qr of Sr.effects) Qr.is(nS) && (rr = Qr.value);
          return rr
        }
      }),
      KS = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function yS(rr, Sr) {
      return [eS, ar.m.fromClass(class {
        constructor(rr) {
          this.view = rr, this.onDown = rr => {
            const Sr = rr.target instanceof Element && null !== rr.target.closest(".cm-tooltip");
            0 !== rr.button || Sr || this.view.state.field(eS) || this.view.dispatch({
              effects: nS.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(eS) && this.view.dispatch({
              effects: nS.of(!1)
            })
          }, rr.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), ar.t.compute(["selection", eS], (Qr => function(rr, Sr, Qr) {
        const Zr = rr.selection.main;
        return Zr.empty || rr.field(eS) || rr.sliceDoc(Zr.from, Zr.to).trim().length < 2 ? null : {
          pos: Zr.from,
          above: !0,
          create: rr => {
            const Zr = document.createElement("div");
            Zr.className = "CodeSelectionActions", Zr.setAttribute("role", "toolbar"), Zr.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Wr,
                label: ar
              }
              of KS) {
              if (!Qr && "explain" !== Wr) continue;
              const jr = document.createElement("button");
              jr.type = "button", jr.textContent = ar, "change" !== Wr && (jr.title = YS.e, jr.dataset.asksAi = "true"), jr.addEventListener("mousedown", (rr => {
                rr.preventDefault()
              })), jr.addEventListener("click", (() => {
                const Qr = rr.state.selection.main;
                if (Qr.empty) return;
                const Zr = {
                  action: Wr,
                  path: Sr,
                  fromLine: rr.state.doc.lineAt(Qr.from).number,
                  toLine: rr.state.doc.lineAt(Qr.to > Qr.from && rr.state.doc.lineAt(Qr.to).from === Qr.to ? Qr.to - 1 : Qr.to).number,
                  text: rr.state.sliceDoc(Qr.from, Qr.to)
                };
                Hr.i.Jp("WorldCodeAiSelection", Zr), rr.dispatch({
                  selection: {
                    anchor: Qr.to
                  }
                })
              })), Zr.appendChild(jr)
            }
            return {
              dom: Zr
            }
          }
        }
      }(Qr, rr, Sr)))]
    }
    var BS = Qr(1338);
    const TS = new Set(["(", "{", "[", "<"]),
      vS = new Set([")", "}", "]", ">"]),
      OS = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function LS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Qr(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = [];
        for (const Wr of rr) {
          let rr;
          rr = "punctuation" === Wr.kind ? OS.text : "parameterName" === Wr.kind ? OS.parameterName : Sr, Zr.push({
            str: Wr.text,
            style: {
              color: rr,
              opacity: Qr ? .5 : void 0
            }
          })
        }
        return Zr
      }
      const Zr = [];
      if (Zr.push(...Qr(rr.prefixDisplayParts, OS.text)), rr.parameters.length > 0) {
        Zr.push("\n");
        for (let Wr = 0; Wr < rr.parameters.length; Wr++) {
          const ar = rr.parameters[Wr];
          Zr.push("\t"), Zr.push(...Qr(ar.displayParts, OS.parameter, null !== Sr && Wr !== Sr)), Zr.push("\n")
        }
      }
      return Zr.push(...Qr(rr.suffixDisplayParts, OS.suffix)), rr.documentation && (Zr.push("\n\n"), Zr.push(...Qr(rr.documentation, OS.docs))), Zr
    }
    var lS = function(rr) {
      return rr[rr.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", rr[rr.DuplicateIdentifier = 2300] = "DuplicateIdentifier", rr
    }(lS || {});
    const XS = new Set([lS.DuplicateIdentifier]),
      PS = new Set([lS.VariableDefinedElsewhere]),
      HS = new Set([]),
      qS = "/index.js";

    function RS(rr) {
      return "/" + rr
    }

    function gS(rr, Sr, Qr) {
      rr.getSourceFile(Sr) && rr.deleteFile(Sr), rr.createFile(Sr, Qr)
    }

    function CS(rr) {
      return !!rr && ((0, Kr.o)(rr) || (0, Kr.n)(rr))
    }

    function MS(rr, Sr, Qr) {
      return () => {
        let Zr = [...Sr.languageService.getSemanticDiagnostics(Qr), ...Sr.languageService.getSyntacticDiagnostics(Qr)];
        return Zr = Zr.filter((rr => !(0, Tr.L)(rr.start) && !(0, Tr.L)(rr.length) && !XS.has(rr.code))), rr || (Zr = Zr.filter((rr => !PS.has(rr.code)))), Zr.map((rr => ({
          from: rr.start,
          to: rr.start + rr.length,
          message: "string" === typeof rr.messageText ? rr.messageText : rr.messageText.messageText,
          severity: HS.has(rr.code) ? "warning" : "error"
        })))
      }
    }

    function GS(rr, Sr) {
      return Qr => {
        var Zr, Wr;
        const ar = rr.languageService.getCompletionsAtPosition(Sr, Qr.pos, {});
        if (!ar) return {
          from: Qr.pos,
          options: []
        };
        let jr = null !== (Zr = null === (Wr = ar.optionalReplacementSpan) || void 0 === Wr ? void 0 : Wr.start) && void 0 !== Zr ? Zr : Qr.pos;
        if (!ar.optionalReplacementSpan) {
          const rr = Qr.state.doc.sliceString(0, Qr.pos);
          for (; jr > 0 && /[\w$]/.test(rr[jr - 1]);) jr--
        }
        return ar.entries = ar.entries.filter((rr => rr.kind !== tr().ScriptElementKind.warning)), {
          from: jr,
          options: ar.entries.map((Zr => {
            var Wr, ar, Ir, fr;
            const Er = rr.languageService.getCompletionEntryDetails(Sr, Qr.pos, Zr.name, {}, Zr.source, {}, Zr.data),
              pr = null !== (Wr = null === (ar = Zr.replacementSpan) || void 0 === ar ? void 0 : ar.start) && void 0 !== Wr ? Wr : jr,
              xr = Zr.replacementSpan ? Zr.replacementSpan.start + Zr.replacementSpan.length : Qr.pos,
              mr = null !== (Ir = Zr.insertText) && void 0 !== Ir ? Ir : Zr.name;
            return {
              label: Zr.name,
              detail: null === Er || void 0 === Er ? void 0 : Er.displayParts.map((rr => rr.text)).join(""),
              info: null === Er || void 0 === Er || null === (fr = Er.documentation) || void 0 === fr ? void 0 : fr.map((rr => rr.text)).join(""),
              apply: rr => {
                rr.dispatch({
                  changes: {
                    from: pr,
                    to: xr,
                    insert: mr
                  },
                  selection: {
                    anchor: pr + mr.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function kS(rr) {
      return Sr => {
        const Qr = document.createElement("div");
        Qr.className = "CodeEditorTooltip";
        let Zr = !1;
        return queueMicrotask((() => {
          Zr || (Ir.render((0, BS.jsx)(mr.c, {
            text: rr
          }), Qr), Sr.requestMeasure())
        })), {
          dom: Qr,
          destroy() {
            Zr = !0, queueMicrotask((() => {
              Ir.unmountComponentAtNode(Qr)
            }))
          }
        }
      }
    }

    function AS(rr, Sr, Qr) {
      return Zr => {
        var Wr;
        if (!Sr) return [];
        const ar = null === (Wr = Zr.selection.yh[0]) || void 0 === Wr ? void 0 : Wr.head;
        if (void 0 === ar) return [];
        const jr = rr.languageService.getSignatureHelpItems(Qr, ar, {});
        if (!jr || !jr.items.length) return [];
        const Ir = jr.applicableSpan.start - jr.items[0].prefixDisplayParts.map((rr => rr.text)).join("").length,
          fr = jr.applicableSpan.start,
          Er = Zr.doc.lineAt(ar),
          pr = Er.from,
          xr = Math.min(Er.to, ar);
        let mr, Nr;
        return Ir < pr ? (mr = pr, Nr = xr) : (mr = Ir, Nr = fr), [{
          pos: mr,
          end: Nr,
          above: !1,
          create: kS(LS(jr.items[0], jr.argumentIndex))
        }]
      }
    }

    function VS(rr, Sr) {
      return (Qr, Zr, Wr) => {
        const ar = rr.languageService.getQuickInfoAtPosition(Sr, Zr);
        if (!ar) return [];
        const jr = ar.textSpan.start,
          Ir = ar.textSpan.start + ar.textSpan.length;
        if (Zr < jr || Zr >= Ir) return [];
        if (ar.kind === tr().ScriptElementKind.memberFunctionElement || ar.kind === tr().ScriptElementKind.variableElement && "declare" === ar.kindModifiers) {
          const rr = ar.displayParts.findIndex((rr => "space" === rr.kind)); - 1 !== rr && (ar.displayParts = ar.displayParts.slice(rr));
          const Sr = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Qr = ar.displayParts.findIndex((rr => "punctuation" === rr.kind && "(" === rr.text)); - 1 !== Qr && (Sr.prefixDisplayParts = ar.displayParts.slice(0, Qr + 1), ar.displayParts = ar.displayParts.slice(Qr + 1));
          const Zr = ar.displayParts.findLastIndex((rr => "punctuation" === rr.kind && ")" === rr.text)); - 1 !== Zr && (Sr.suffixDisplayParts = ar.displayParts.slice(Zr), ar.displayParts = ar.displayParts.slice(0, Zr));
          let Wr = 0,
            fr = [];
          for (const jr of ar.displayParts)
            if (TS.has(jr.text) ? Wr++ : vS.has(jr.text) && Wr--, "lineBreak" !== jr.kind) {
              if ("space" === jr.kind) {
                if (0 === fr.length) continue;
                fr.push({
                  kind: "space",
                  text: " "
                })
              } else fr.push(jr);
              0 === Wr && "," === jr.text && (Sr.parameters.push({
                displayParts: fr
              }), fr = [])
            } return fr.length > 0 && Sr.parameters.push({
            displayParts: fr
          }), Sr.documentation = ar.documentation, [{
            pos: jr,
            end: Ir,
            above: !0,
            create: kS(LS(Sr))
          }]
        }
        const fr = [];
        for (const rr of ar.displayParts) fr.push({
          str: rr.text,
          style: {
            color: OS.text
          }
        });
        if (ar.documentation) {
          fr.push("\n\n");
          for (const rr of ar.documentation) fr.push({
            str: rr.text,
            style: {
              color: OS.docs
            }
          })
        }
        return [{
          pos: jr,
          end: Ir,
          above: !0,
          create: kS(fr)
        }]
      }
    }
    const iS = {
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
      semicolons: tr().SemicolonPreference.Insert
    };
    const wS = ar.f.define(),
      cS = {
        lineNumbers: !0,
        tabSize: 4
      };

    function FS(rr) {
      let {
        isLobbyCode: Sr,
        code: Qr,
        onChange: Ir,
        canEditCode: mr,
        setTemporaryMessage: Ur,
        close: Tr,
        showTooltips: cr,
        lightMode: Fr,
        collabState: br,
        onRemoteDocChange: Jr,
        files: Dr,
        activePath: dr,
        pluginName: ur,
        pluginFile: rS,
        pluginSource: QS,
        setActiveDocReplacer: ZS,
        showAiHints: aS,
        canAiChangeCode: jS = mr
      } = rr;
      const [IS, fS] = (0, jr.useState)(null), ES = null === br || void 0 === br ? void 0 : br.version, pS = null === br || void 0 === br ? void 0 : br.clientID, xS = (0, jr.useRef)({
        isLobbyCode: Sr,
        files: Dr,
        code: Qr,
        activePath: dr
      }), mS = (0, jr.useRef)(Jr);
      mS.current = Jr;
      const NS = (0, jr.useRef)(null),
        US = (0, jr.useRef)(br);
      US.current = br;
      const tS = (0, jr.useRef)(null),
        YS = (0, jr.useRef)(null),
        nS = (0, jr.useRef)(null),
        eS = (0, jr.useRef)(Tr);
      eS.current = Tr;
      const KS = (0, jr.useRef)(Qr);
      KS.current = Qr;
      const TS = (0, jr.useRef)(QS);
      TS.current = QS;
      const vS = function(rr, Sr, Qr, Zr) {
        return Qr ? `/plugin-preview/${Qr}/${null!==Zr&&void 0!==Zr?Zr:"index.ts"}` : rr ? RS(null !== Sr && void 0 !== Sr ? Sr : er.j) : qS
      }(Sr, dr, ur, rS);
      (0, jr.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: rr,
            files: Sr,
            code: Qr,
            activePath: Zr
          } = xS.current, Wr = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: tr().ModuleKind.ESNext,
            moduleResolution: tr().ModuleResolutionKind.Bundler,
            target: tr().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(nr.e).map((rr => [rr.specifier, [rr.typesVfsPath]])))
            }
          }, ar = new Map, jr = [];
          if (rr) {
            const rr = null !== Sr && void 0 !== Sr ? Sr : {
              [er.j]: Qr || "\n"
            };
            for (const [Sr, Qr] of Object.entries(rr)) {
              const rr = RS(Sr);
              ar.set(rr, Qr || "\n"), jr.push(rr)
            }
            const Wr = RS(null !== Zr && void 0 !== Zr ? Zr : er.j);
            ar.has(Wr) ? ar.set(Wr, Qr || "\n") : (ar.set(Wr, Qr || "\n"), jr.push(Wr)), ar.set("/node_modules/@bloxd/index.d.ts", pr.default), jr.push("/node_modules/@bloxd/index.d.ts");
            for (const Sr of Object.values(nr.e)) {
              ar.set(Sr.typesVfsPath, Sr.types), jr.push(Sr.typesVfsPath);
              for (const [rr, Qr] of Object.entries(Sr.files)) {
                const Zr = `/plugin-preview/${Sr.name}/${rr}`;
                ar.set(Zr, Qr || "\n"), jr.push(Zr)
              }
            }
          } else ar.set(qS, Qr || "\n"), jr.push(qS);
          ar.set("/globals.d.ts", rr ? Er.d : fr.b), ar.set("/lib.d.ts", xr.c), jr.push("/globals.d.ts", "/lib.d.ts");
          const Ir = Nr.e(ar),
            mr = Nr.h(Ir, jr, tr(), Wr);
          fS({
            Kx: mr,
            fsMap: ar
          })
        }()
      }), []), (0, jr.useEffect)((() => {
        var rr, Zr;
        if (!IS || !Sr) return;
        const {
          Kx: Wr,
          fsMap: ar
        } = IS;
        if (function(rr, Sr, Qr) {
            const Zr = new Set;
            for (const [Wr, ar] of Object.entries(Qr)) {
              const Qr = RS(Wr);
              Zr.add(Qr);
              const jr = ar || "\n";
              Sr.get(Qr) !== jr && (Sr.set(Qr, jr), gS(rr, Qr, jr))
            }
            for (const Wr of [...Sr.keys()]) "/globals.d.ts" === Wr || "/lib.d.ts" === Wr || Wr.startsWith("/node_modules/") || Wr.startsWith("/plugin-preview/") || Zr.has(Wr) || (Sr.delete(Wr), rr.getSourceFile(Wr) && rr.deleteFile(Wr))
          }(Wr, ar, null !== Dr && void 0 !== Dr ? Dr : {
            [er.j]: Qr || "\n"
          }), ur) return void gS(Wr, vS, QS || "\n");
        const jr = null !== (rr = null === (Zr = NS.current) || void 0 === Zr ? void 0 : Zr.state.doc.toString()) && void 0 !== rr ? rr : Qr;
        gS(Wr, vS, jr || "\n")
      }), [Dr, dr, IS, ur, QS, vS, Qr, Sr]), (0, jr.useEffect)((() => {
        if (!IS) return;
        const {
          Kx: rr
        } = IS;
        gS(rr, vS, (ur ? QS : Qr) || "\n")
      }), [Qr, ur, QS, vS, IS]), (0, jr.useEffect)((() => () => {
        YS.current && (YS.current(), YS.current = null)
      }), []), (0, jr.useEffect)((() => (ZS(((rr, Sr) => {
        if (ur) return !1;
        const Qr = NS.current,
          Zr = US.current,
          Wr = Zr ? (0, Kr.u)(Zr.docKey) : null;
        if (!Qr || !Zr || tS.current !== Zr.clientID || rr !== Wr) return !1;
        const ar = Qr.state.doc.toString();
        return ar !== Sr && Qr.dispatch({
          changes: {
            from: 0,
            to: ar.length,
            insert: Sr
          }
        }), !0
      })), () => {
        NS.current = null, tS.current = null, ZS(null)
      })), [ZS, ur]);
      const OS = Sr ? ur ? null : null !== dr && void 0 !== dr ? dr : er.j : zS.d,
        LS = SS(NS, OS);
      WS(NS, Ur), (0, Br.c)("FormatCode", (() => {
        if (!IS || !NS.current || ur) return;
        const {
          Kx: rr,
          fsMap: Qr
        } = IS, Zr = rr.getSourceFile(vS).getFullText();
        let Wr = 0;
        if (Sr && Dr)
          for (const [Sr, Ir] of Object.entries(Dr)) Sr !== (null !== dr && void 0 !== dr ? dr : er.j) && (Wr += Ir.length);
        const ar = function(rr, Sr, Qr, Zr, Wr) {
          const ar = rr.languageService.getFormattingEditsForDocument(Zr, iS);
          if (!ar.length) return vr.e.error("Code is already formatted.");
          ar.sort(((rr, Sr) => Sr.span.start - rr.span.start));
          let jr = rr.getSourceFile(Zr).getFullText();
          for (const Ir of ar) jr = jr.slice(0, Ir.span.start) + Ir.rf + jr.slice(Ir.span.start + Ir.span.length);
          return jr !== (Qr ? (0, yr.k)(jr, Wr) : (0, yr.h)(jr)) ? vr.e.error("Formatting the code will go beyond the character limit.") : vr.e.value(jr)
        }(rr, 0, Sr, vS, Wr);
        if (ar.isError()) return void Ur({
          message: ar.asError().message,
          type: "warning"
        });
        const jr = ar.getValue();
        jr && (NS.current.dispatch({
          changes: {
            from: 0,
            to: Zr.length,
            insert: jr
          },
          selection: {
            anchor: jr.length
          }
        }), gS(rr, vS, jr), Ir(jr))
      }));
      const lS = (0, jr.useMemo)((() => {
        if (!IS) return [];
        const {
          Kx: rr,
          fsMap: Qr
        } = IS;
        ! function(rr, Sr, Qr, Zr) {
          if (rr.getSourceFile(Qr)) return;
          const Wr = Zr || "\n";
          Sr.set(Qr, Wr), rr.createFile(Qr, Wr)
        }(rr, Qr, vS, (ur ? TS.current : KS.current) || "\n");
        const jr = Sr && CS(ur ? null !== rS && void 0 !== rS ? rS : "index.ts" : dr),
          Ir = [(0, Wr.d)({
            jsx: !1,
            typescript: jr
          }), ar.d.highest(ar.b.domEventHandlers({
            keydown: rr => "Escape" === rr.key ? (eS.current(), rr.stopPropagation(), !0) : (rr.stopPropagation(), !1)
          })), (0, Zr.c)({
            override: [GS(rr, vS)]
          }), lr.m.fromClass(class {
            constructor(rr) {
              this.view = rr, this.timeout = null, this.scheduleParse()
            }
            update(rr) {
              (rr.docChanged || rr.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const rr = this.view.viewport.to;
                (0, Mr.ub)(this.view.state, rr) || (0, Mr.P)(this.view, rr, Gr) || this.scheduleParse()
              }), kr))
            }
          }), ...sr, ar.b.lineWrapping, ar.i.define({
            create: AS(rr, cr, vS),
            update(Sr, Qr) {
              const Zr = Qr.effects.some((rr => rr.is(wS)));
              return Qr.docChanged || Qr.selection || Zr ? (gS(rr, vS, Qr.state.doc.toString() || " "), AS(rr, cr, vS)(Qr.state)) : Sr
            },
            provide: rr => ar.t.computeN([rr], (Sr => Sr.field(rr)))
          }), (0, ar.p)(VS(rr, vS)), (0, zr.c)(MS(Sr, rr, vS)), ar.m.fromClass(class {
            constructor(rr) {
              this.view = rr, this.searchPanel = null
            }
            update(rr) {
              const Sr = rr.view.dom.querySelector(".cm-search");
              if (Sr !== this.searchPanel) {
                if (this.searchPanel = Sr, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (rr => {
                  "Escape" === rr.key && (0, hr.b)(this.view), rr.stopPropagation()
                }))
              }
            }
          })];
        aS && !ur && Ir.push(yS(Sr ? null !== dr && void 0 !== dr ? dr : er.j : zS.d, jS));
        const fr = US.current;
        if (fr && !ur) {
          Ir.push(... function(rr, Sr, Qr, Zr, Wr) {
            let ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const jr = (0, Kr.u)(Qr),
              Ir = lr.m.fromClass(class {
                constructor(rr) {
                  this.view = rr, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Hr.i.subscribe("codeCollab", (rr => {
                    rr.docKey === jr && rr.type === Kr.g.Updates && (rr.updates ? this.applyUpdates(rr.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(rr) {
                  const Sr = JSON.parse(rr).map((rr => ({
                    clientID: rr.clientID,
                    changes: Lr.ChangeSet.fromJSON(rr.changes)
                  })));
                  Sr.length > 0 && (this.view.dispatch((0, Or.f)(this.view.state, Sr)), Wr && Wr(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(rr) {
                  ar && (rr.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const rr = (0, Or.h)(this.view.state);
                  if (this.pushing || !rr.length) return;
                  const Sr = Date.now() - this.lastPushTime;
                  if (Sr < Cr) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Cr - Sr)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Rr);
                  const Qr = (0, Or.e)(this.view.state),
                    Wr = rr.map((rr => ({
                      clientID: rr.clientID,
                      changes: rr.changes.toJSON()
                    }))),
                    ar = JSON.stringify(Wr);
                  ar.length <= Kr.h ? Xr.gameBridge.send("sendCodeCollab", {
                    GQ: Kr.c.Push,
                    kQ: jr,
                    AQ: Qr,
                    wQ: ar
                  }) : (0, qr.postJsonWithMetricsCookiesAndJsonResponse)(`${Zr.gsUrl}/code/collab-push`, Pr.s["collab-push"].toBuffer({
                    gameNameWithVariation: Zr.gameNameWithVariation,
                    lobbyName: Zr.lobbyName,
                    docKey: jr,
                    version: Qr,
                    updates: ar
                  }), {
                    retries: 0
                  }).catch((rr => {
                    console.error("[CodeCollab] HTTP push failed", rr)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const rr = (0, Or.e)(this.view.state);
                  (0, qr.postJsonWithMetricsCookiesAndJsonResponse)(`${Zr.gsUrl}/code/collab-pull`, Pr.s["collab-pull"].toBuffer({
                    gameNameWithVariation: Zr.gameNameWithVariation,
                    lobbyName: Zr.lobbyName,
                    docKey: jr,
                    fromVersion: rr
                  }), {
                    retries: 1
                  }).then((rr => {
                    this.destroyed || (rr.fullDoc ? Hr.i.Jp("codeCollabRejoin", {
                      docKey: jr,
                      doc: rr.fullDoc,
                      version: rr.version
                    }) : this.applyUpdates(rr.updates))
                  })).catch((rr => {
                    console.error("[CodeCollab] Pull failed", rr)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const rr = Date.now();
                  if (rr - this.lastCursorSent < gr) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), gr)));
                  this.lastCursorSent = rr;
                  const Sr = this.view.state.selection.main;
                  Xr.gameBridge.send("sendCodeCollab", {
                    GQ: Kr.c.Cursor,
                    kQ: jr,
                    bQ: Sr.anchor,
                    JQ: Sr.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Hr.i.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Or.c)({
              startVersion: rr,
              clientID: Sr
            }), Ir]
          }(ES, pS, fr.docKey, fr.httpConfig, (rr => {
            var Sr;
            null === (Sr = mS.current) || void 0 === Sr || Sr.call(mS, rr)
          }), mr));
          const rr = function(rr, Sr) {
            const Qr = (0, Kr.u)(rr);
            return {
              extensions: [or],
              connect(rr) {
                if (Sr) {
                  const Qr = Sr.map((rr => Vr.of({
                    playerId: rr.playerId,
                    playerName: rr.playerName,
                    colour: rr.colour,
                    anchor: rr.anchor,
                    head: rr.head,
                    lastMoved: Date.now()
                  })));
                  Qr.length > 0 && rr.dispatch({
                    effects: Qr
                  })
                }
                const Zr = Hr.i.subscribe("codeCollab", (Sr => {
                    if (Sr.docKey === Qr)
                      if (Sr.type === Kr.g.RemoteCursor) rr.dispatch({
                        effects: Vr.of({
                          playerId: Sr.playerId,
                          playerName: Sr.playerName,
                          colour: Sr.colour,
                          anchor: Sr.anchor,
                          head: Sr.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Sr.type === Kr.g.Presence) {
                      const Qr = JSON.parse(Sr.peers),
                        Zr = new Set(Qr.map((rr => rr.playerId))),
                        Wr = rr.state.field(or),
                        ar = [];
                      for (const [rr] of Wr.cursors) Zr.has(rr) || ar.push(ir.of(rr));
                      ar.length > 0 && rr.dispatch({
                        effects: ar
                      })
                    }
                  })),
                  Wr = setInterval((() => {
                    rr.dom.isConnected ? rr.dispatch({
                      effects: wr.of(Date.now())
                    }) : clearInterval(Wr)
                  }), Ar);
                return () => {
                  Hr.i.unsubscribe(Zr), clearInterval(Wr)
                }
              }
            }
          }(fr.docKey, fr.existingCursors);
          Ir.push(...rr.extensions), nS.current = rr.connect
        } else nS.current = null;
        return Ir
      }), [Sr, IS, cr, ES, pS, vS, dr, ur, rS, mr, aS, jS]);
      if (!IS || !br && !ur) return (0, BS.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, BS.jsx)(Yr.c, {})
      });
      const XS = ur ? `plugin-${ur}-${null!==rS&&void 0!==rS?rS:"index.ts"}` : br ? `collab-${br.clientID}` : `local-${Sr}`;
      return (0, BS.jsx)(ar.o, {
        value: ur ? null !== QS && void 0 !== QS ? QS : "" : Qr,
        onChange: Ir,
        extensions: lS,
        className: "CodeEditorContent",
        theme: Fr ? hS : "dark",
        editable: mr && !ur,
        basicSetup: cS,
        onCreateEditor: rr => {
          var Sr;
          NS.current = rr, tS.current = null !== (Sr = null === br || void 0 === br ? void 0 : br.clientID) && void 0 !== Sr ? Sr : null, LS(rr), YS.current && YS.current(), nS.current && (YS.current = nS.current(rr))
        }
      }, XS)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);