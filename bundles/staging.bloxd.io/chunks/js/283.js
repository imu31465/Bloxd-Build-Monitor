export const id = 283;
export const ids = [283];
export const modules = {
  40895: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => iR
    });
    var Eu = yu(40904),
      Ku = yu(40947),
      Qu = yu(40949),
      mu = yu(64),
      Ju = yu(80),
      Nu = yu(40970),
      Xu = yu(40979),
      Vu = yu(4532),
      ru = yu(40982),
      Bu = yu(1825),
      xu = yu(40991),
      Su = yu(41006),
      pu = yu.n(Su),
      Tu = yu(40953),
      Wu = yu(40961),
      ju = yu(1300),
      Hu = yu(36619),
      du = yu(1215),
      bu = yu(36632),
      Cu = yu(36541),
      ku = yu(1400),
      eu = yu(610),
      Au = yu(1217),
      Du = yu(41052),
      Mu = yu(40909),
      Iu = yu(40913),
      Gu = yu(1855),
      Uu = yu(3574),
      nu = yu(34),
      su = yu(1110);
    const tu = 1e4,
      lu = 250,
      gu = 250;
    var cu = yu(40930);
    const Lu = 50,
      zu = 100;
    const Fu = 2e3,
      wu = Mu.B.define(),
      Zu = Mu.B.define(),
      hu = Mu.B.define();
    class Pu extends Iu.n {
      constructor(uu, Ru, yu) {
        super(), this.colour = uu, this.playerName = Ru, this.showName = yu
      }
      toDOM() {
        const uu = document.createElement("span");
        uu.className = "cm-remote-cursor-wrapper", uu.style.borderLeftColor = this.colour;
        const Ru = document.createElement("span");
        if (Ru.className = "cm-remote-cursor", Ru.style.borderLeftColor = this.colour, uu.appendChild(Ru), this.showName) {
          const Ru = document.createElement("span");
          Ru.className = "cm-remote-cursor-name", Ru.style.backgroundColor = this.colour, Ru.textContent = this.playerName, uu.appendChild(Ru)
        }
        return uu
      }
      eq(uu) {
        return this.colour === uu.colour && this.playerName === uu.playerName && this.showName === uu.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function iu(uu, Ru) {
      const yu = [],
        Eu = [];
      for (const [, mu] of uu) {
        const uu = Ru - mu.lastMoved < Fu;
        if (yu.push({
            pos: mu.head,
            decoration: Iu.c.widget({
              widget: new Pu(mu.colour, mu.playerName, uu),
              side: 1
            })
          }), mu.anchor !== mu.head) {
          const uu = Math.min(mu.anchor, mu.head),
            Ru = Math.max(mu.anchor, mu.head);
          Eu.push({
            from: uu,
            to: Ru,
            decoration: Iu.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${mu.colour}33`
              }
            })
          })
        }
      }
      const Ku = new Mu.w,
        Qu = [];
      for (const mu of yu) Qu.push({
        bias: 1,
        deco: mu.decoration,
        from: mu.pos,
        to: mu.pos
      });
      for (const mu of Eu) Qu.push({
        bias: 0,
        deco: mu.decoration,
        from: mu.from,
        to: mu.to
      });
      Qu.sort(((uu, Ru) => uu.from - Ru.from || uu.deco.startSide - Ru.deco.startSide || uu.bias - Ru.bias));
      for (const mu of Qu) Ku.add(mu.from, mu.to, mu.deco);
      return Ku.finish()
    }
    const Yu = Mu.E.define({
      create: () => ({
        cursors: new Map,
        lE: Iu.c.none
      }),
      update(uu, Ru) {
        let yu = uu.cursors,
          Eu = !1;
        if (Ru.docChanged) {
          const uu = new Map;
          for (const [Eu, Ku] of yu) uu.set(Eu, {
            ...Ku,
            anchor: Ru.changes.mapPos(Ku.anchor, 1),
            head: Ru.changes.mapPos(Ku.head, 1)
          });
          yu = uu, Eu = !0
        }
        for (const Ku of Ru.effects)
          if (Ku.is(wu)) {
            if (!Number.isInteger(Ku.value.anchor) || !Number.isInteger(Ku.value.head)) {
              console.warn(`Code Editor: ignored player ${Ku.value.playerId}'s cursor at ${Ku.value.anchor}-${Ku.value.head}`);
              continue
            }
            const Qu = Ru.state.doc.length,
              mu = {
                ...Ku.value,
                anchor: Math.min(Ku.value.anchor, Qu),
                head: Math.min(Ku.value.head, Qu)
              };
            yu === uu.cursors && (yu = new Map(yu)), yu.set(mu.playerId, mu), Eu = !0
          } else Ku.is(Zu) ? yu.has(Ku.value) && (yu === uu.cursors && (yu = new Map(yu)), yu.delete(Ku.value), Eu = !0) : Ku.is(hu) && (Eu = !0);
        return Eu ? {
          cursors: yu,
          lE: iu(yu, Date.now())
        } : uu
      },
      provide: uu => Iu.f.lE.from(uu, (uu => uu.lE))
    });
    const ou = Mu.B.define(),
      qu = Iu.c.mark({
        class: "CodeInsertFlash"
      }),
      Ou = Mu.E.define({
        create: () => Iu.c.none,
        update(uu, Ru) {
          let yu = uu.map(Ru.changes);
          for (const Eu of Ru.effects) Eu.is(ou) && (yu = Eu.value ? Iu.c.set(qu.range(Eu.value.from, Eu.value.to)) : Iu.c.none);
          return yu
        },
        provide: uu => Iu.f.lE.from(uu)
      }),
      vu = Mu.E.define({
        create: () => !1,
        update: (uu, Ru) => uu || void 0 !== Ru.annotation(Mu.J.userEvent) && !Ru.annotation(Mu.J.remote)
      }),
      au = [Ou, vu];

    function fu(uu) {
      return uu.field(vu)
    }
    const uR = 3e4;

    function RR(uu, Ru) {
      const yu = (0, mu.useRef)(null);
      (0, mu.useEffect)((() => {
        var uu;
        (null === (uu = yu.current) || void 0 === uu ? void 0 : uu.path) !== Ru && (yu.current = null)
      }), [Ru]);
      const Eu = uu => {
        var Eu;
        const Ku = yu.current;
        if (null === uu || void 0 === uu || !uu.dom.isConnected || !Ku || Ku.path !== Ru) return;
        yu.current = null;
        const {
          kx: mu
        } = Ku;
        if (mu && null !== mu.text && performance.now() - mu.at < uR) {
          const Ru = function(uu, Ru) {
            if (uu === Ru) return null;
            const yu = Math.min(uu.length, Ru.length);
            let Eu = 0;
            for (; Eu < yu && uu[Eu] === Ru[Eu];) Eu++;
            let Ku = 0;
            for (; Ku < yu - Eu && uu[uu.length - 1 - Ku] === Ru[Ru.length - 1 - Ku];) Ku++;
            return {
              from: Eu,
              to: uu.length - Ku,
              insert: Ru.slice(Eu, Ru.length - Ku)
            }
          }(uu.state.doc.toString(), mu.text);
          null !== Ru && uu.dispatch({
            changes: Ru,
            userEvent: mu.placed ? "input" : void 0
          })
        }
        const {
          doc: Ju
        } = uu.state, Nu = Ju.line(Math.min(Math.max(Ku.line, 1), Ju.lines)), Xu = Nu.from + Math.min(null !== (Eu = Ku.column) && void 0 !== Eu ? Eu : 0, Nu.length);
        uu.dispatch({
          selection: {
            anchor: Xu
          },
          effects: Qu.e.scrollIntoView(Xu, {
            y: "center"
          }),
          userEvent: null !== mu && void 0 !== mu && mu.placed ? "select" : void 0
        }), !1 !== (null === mu || void 0 === mu ? void 0 : mu.focused) && uu.focus()
      };
      return (0, ku.e)("CodeEditorGoToLine", (Ru => {
        yu.current = Ru, Eu(uu.current)
      })), (0, ku.e)("CodeEditorKeepEdits", (() => {
        const Eu = uu.current;
        if (null === Eu || !Eu.dom.isConnected || null === Ru) return;
        const {
          doc: Ku,
          selection: Qu
        } = Eu.state, {
          head: mu
        } = Qu.main, Ju = Ku.lineAt(mu), Nu = {
          text: (0, Du.n)(Eu.state).length > 0 ? Ku.toString() : null,
          at: performance.now(),
          focused: Eu.hasFocus,
          placed: fu(Eu.state)
        };
        yu.current = {
          path: Ru,
          line: Ju.number,
          column: mu - Ju.from,
          kx: Nu
        }
      })), uu => {
        var Ku;
        const Qu = yu.current;
        !1 === (null === Qu || void 0 === Qu || null === (Ku = Qu.kx) || void 0 === Ku ? void 0 : Ku.focused) && Qu.path === Ru || uu.focus(), Eu(uu)
      }
    }
    var yR = yu(4134),
      ER = yu(1170);

    function KR(uu, Ru) {
      const {
        t: yu
      } = (0, ER.E)();
      (0, ku.e)("CodeEditorInsertText", (Eu => {
        let {
          text: Ku,
          focus: Qu
        } = Eu;
        const mu = uu.current,
          Ju = null !== mu && void 0 !== mu && mu.dom.isConnected ? function(uu, Ru) {
            if (!fu(uu)) return null;
            const {
              from: yu,
              to: Eu
            } = uu.selection.main, Ku = yu + Ru.length;
            return {
              changes: {
                from: yu,
                to: Eu,
                insert: Ru
              },
              selection: {
                anchor: Ku
              },
              effects: [Iu.f.scrollIntoView(Ku, {
                y: "center"
              }), ou.of({
                from: yu,
                to: Ku
              })],
              userEvent: "input"
            }
          }(mu.state, Ku) : null;
        null !== mu && null !== Ju ? (mu.dispatch(Ju), Qu && mu.focus(), setTimeout((() => {
          mu.dom.isConnected && mu.dispatch({
            effects: ou.of(null)
          })
        }), 1500)) : (0, yR.c)(Ku).then((() => {
          Ru({
            message: yu("codeEditorWorld:pickCopied", {
              coords: Ku
            }),
            type: "success"
          })
        }), (uu => {
          console.error("Pick could not copy the coordinates", uu), Ru({
            message: yu("codeEditorWorld:pickPlaceCursor", {
              coords: Ku
            }),
            type: "warning"
          })
        }))
      }))
    }
    var QR = yu(40940);
    const mR = "#e45649",
      JR = "#383a42",
      NR = "#696c77",
      XR = "#986801",
      VR = "#e5e5e6",
      rR = "#fafafa",
      BR = "#eaeaeb",
      xR = "#526fff",
      SR = Iu.f.theme({
        "&": {
          color: JR,
          backgroundColor: rR
        },
        ".cm-content": {
          caretColor: xR
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: xR
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: JR
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
          backgroundColor: rR,
          color: NR,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: VR
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: BR
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: BR,
          borderBottomColor: BR
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: VR,
            color: JR
          }
        }
      }, {
        dark: !1
      }),
      pR = cu.d.define([{
        tag: QR.p.keyword,
        color: "#a626a4"
      }, {
        tag: [QR.p.name, QR.p.deleted, QR.p.character, QR.p.propertyName, QR.p.macroName],
        color: mR
      }, {
        tag: [QR.p.function(QR.p.variableName), QR.p.labelName],
        color: "#4078f2"
      }, {
        tag: [QR.p.color, QR.p.constant(QR.p.name), QR.p.standard(QR.p.name)],
        color: XR
      }, {
        tag: [QR.p.definition(QR.p.name), QR.p.separator],
        color: JR
      }, {
        tag: [QR.p.typeName, QR.p.className, QR.p.number, QR.p.changed, QR.p.annotation, QR.p.modifier, QR.p.self, QR.p.namespace],
        color: "#c18401"
      }, {
        tag: [QR.p.operator, QR.p.operatorKeyword, QR.p.url, QR.p.escape, QR.p.regexp, QR.p.link, QR.p.special(QR.p.string)],
        color: "#0184bc"
      }, {
        tag: [QR.p.meta, QR.p.comment],
        color: NR
      }, {
        tag: QR.p.strong,
        fontWeight: "bold"
      }, {
        tag: QR.p.emphasis,
        fontStyle: "italic"
      }, {
        tag: QR.p.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: QR.p.link,
        color: NR,
        textDecoration: "underline"
      }, {
        tag: QR.p.heading,
        fontWeight: "bold",
        color: mR
      }, {
        tag: [QR.p.atom, QR.p.bool, QR.p.special(QR.p.variableName)],
        color: XR
      }, {
        tag: [QR.p.processingInstruction, QR.p.string, QR.p.inserted],
        color: "#50a14f"
      }, {
        tag: QR.p.invalid,
        color: "#000000"
      }]),
      TR = [SR, (0, cu.gb)(pR)];
    var WR = yu(36681),
      jR = yu(41060);
    const HR = Qu.i.define(),
      dR = Qu.j.define({
        create: () => !1,
        update(uu, Ru) {
          for (const yu of Ru.effects) yu.is(HR) && (uu = yu.value);
          return uu
        }
      }),
      bR = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function CR(uu, Ru) {
      return [dR, Qu.k.fromClass(class {
        constructor(uu) {
          this.view = uu, this.onDown = uu => {
            const Ru = uu.target instanceof Element && null !== uu.target.closest(".cm-tooltip");
            0 !== uu.button || Ru || this.view.state.field(dR) || this.view.dispatch({
              effects: HR.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(dR) && this.view.dispatch({
              effects: HR.of(!1)
            })
          }, uu.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Qu.q.compute(["selection", dR], (yu => function(uu, Ru, yu) {
        const Eu = uu.selection.main;
        return Eu.empty || uu.field(dR) || uu.sliceDoc(Eu.from, Eu.to).trim().length < 2 ? null : {
          pos: Eu.from,
          above: !0,
          create: uu => {
            const Eu = document.createElement("div");
            Eu.className = "CodeSelectionActions", Eu.setAttribute("role", "toolbar"), Eu.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Ku,
                label: Qu
              }
              of bR) {
              if (!yu && "explain" !== Ku) continue;
              const mu = document.createElement("button");
              mu.type = "button", mu.textContent = Qu, "change" !== Ku && (mu.title = jR.c, mu.dataset.asksAi = "true"), mu.addEventListener("mousedown", (uu => {
                uu.preventDefault()
              })), mu.addEventListener("click", (() => {
                const yu = uu.state.selection.main;
                if (yu.empty) return;
                const Eu = {
                  action: Ku,
                  path: Ru,
                  fromLine: uu.state.doc.lineAt(yu.from).number,
                  toLine: uu.state.doc.lineAt(yu.to > yu.from && uu.state.doc.lineAt(yu.to).from === yu.to ? yu.to - 1 : yu.to).number,
                  text: uu.state.sliceDoc(yu.from, yu.to)
                };
                nu.k.Op("WorldCodeAiSelection", Eu), uu.dispatch({
                  selection: {
                    anchor: yu.to
                  }
                })
              })), Eu.appendChild(mu)
            }
            return {
              dom: Eu
            }
          }
        }
      }(yu, uu, Ru)))]
    }
    var kR = yu(1079);
    const eR = new Set(["(", "{", "[", "<"]),
      AR = new Set([")", "}", "]", ">"]),
      DR = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function MR(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function yu(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = [];
        for (const Ku of uu) {
          let uu;
          uu = "punctuation" === Ku.kind ? DR.text : "parameterName" === Ku.kind ? DR.parameterName : Ru, Eu.push({
            str: Ku.text,
            style: {
              color: uu,
              opacity: yu ? .5 : void 0
            }
          })
        }
        return Eu
      }
      const Eu = [];
      if (Eu.push(...yu(uu.prefixDisplayParts, DR.text)), uu.parameters.length > 0) {
        Eu.push("\n");
        for (let Ku = 0; Ku < uu.parameters.length; Ku++) {
          const Qu = uu.parameters[Ku];
          Eu.push("\t"), Eu.push(...yu(Qu.displayParts, DR.parameter, null !== Ru && Ku !== Ru)), Eu.push("\n")
        }
      }
      return Eu.push(...yu(uu.suffixDisplayParts, DR.suffix)), uu.documentation && (Eu.push("\n\n"), Eu.push(...yu(uu.documentation, DR.docs))), Eu
    }
    var IR = function(uu) {
      return uu[uu.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", uu[uu.DuplicateIdentifier = 2300] = "DuplicateIdentifier", uu
    }(IR || {});
    const GR = new Set([IR.DuplicateIdentifier]),
      UR = new Set([IR.VariableDefinedElsewhere]),
      nR = new Set([]),
      sR = "/index.js";

    function tR(uu) {
      return "/" + uu
    }

    function lR(uu, Ru, yu) {
      uu.getSourceFile(Ru) && uu.deleteFile(Ru), uu.createFile(Ru, yu)
    }

    function gR(uu) {
      return !!uu && ((0, bu.s)(uu) || (0, bu.p)(uu))
    }

    function cR(uu, Ru, yu) {
      return () => {
        let Eu = [...Ru.languageService.getSemanticDiagnostics(yu), ...Ru.languageService.getSyntacticDiagnostics(yu)];
        return Eu = Eu.filter((uu => !(0, eu.E)(uu.start) && !(0, eu.E)(uu.length) && !GR.has(uu.code))), uu || (Eu = Eu.filter((uu => !UR.has(uu.code)))), Eu.map((uu => ({
          from: uu.start,
          to: uu.start + uu.length,
          message: "string" === typeof uu.messageText ? uu.messageText : uu.messageText.messageText,
          severity: nR.has(uu.code) ? "warning" : "error"
        })))
      }
    }

    function LR(uu, Ru) {
      return yu => {
        var Eu, Ku;
        const Qu = uu.languageService.getCompletionsAtPosition(Ru, yu.pos, {});
        if (!Qu) return {
          from: yu.pos,
          options: []
        };
        let mu = null !== (Eu = null === (Ku = Qu.optionalReplacementSpan) || void 0 === Ku ? void 0 : Ku.start) && void 0 !== Eu ? Eu : yu.pos;
        if (!Qu.optionalReplacementSpan) {
          const uu = yu.state.doc.sliceString(0, yu.pos);
          for (; mu > 0 && /[\w$]/.test(uu[mu - 1]);) mu--
        }
        return Qu.entries = Qu.entries.filter((uu => uu.kind !== pu().ScriptElementKind.warning)), {
          from: mu,
          options: Qu.entries.map((Eu => {
            var Ku, Qu, Ju, Nu;
            const Xu = uu.languageService.getCompletionEntryDetails(Ru, yu.pos, Eu.name, {}, Eu.source, {}, Eu.data),
              Vu = null !== (Ku = null === (Qu = Eu.replacementSpan) || void 0 === Qu ? void 0 : Qu.start) && void 0 !== Ku ? Ku : mu,
              ru = Eu.replacementSpan ? Eu.replacementSpan.start + Eu.replacementSpan.length : yu.pos,
              Bu = null !== (Ju = Eu.insertText) && void 0 !== Ju ? Ju : Eu.name;
            return {
              label: Eu.name,
              detail: null === Xu || void 0 === Xu ? void 0 : Xu.displayParts.map((uu => uu.text)).join(""),
              info: null === Xu || void 0 === Xu || null === (Nu = Xu.documentation) || void 0 === Nu ? void 0 : Nu.map((uu => uu.text)).join(""),
              apply: uu => {
                uu.dispatch({
                  changes: {
                    from: Vu,
                    to: ru,
                    insert: Bu
                  },
                  selection: {
                    anchor: Vu + Bu.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function zR(uu) {
      return Ru => {
        const yu = document.createElement("div");
        yu.className = "CodeEditorTooltip";
        let Eu = !1;
        return queueMicrotask((() => {
          Eu || (Ju.render((0, kR.jsx)(Bu.d, {
            text: uu
          }), yu), Ru.requestMeasure())
        })), {
          dom: yu,
          destroy() {
            Eu = !0, queueMicrotask((() => {
              Ju.unmountComponentAtNode(yu)
            }))
          }
        }
      }
    }

    function FR(uu, Ru, yu) {
      return Eu => {
        var Ku;
        if (!Ru) return [];
        const Qu = null === (Ku = Eu.selection.yT[0]) || void 0 === Ku ? void 0 : Ku.head;
        if (void 0 === Qu) return [];
        const mu = uu.languageService.getSignatureHelpItems(yu, Qu, {});
        if (!mu || !mu.items.length) return [];
        const Ju = mu.applicableSpan.start - mu.items[0].prefixDisplayParts.map((uu => uu.text)).join("").length,
          Nu = mu.applicableSpan.start,
          Xu = Eu.doc.lineAt(Qu),
          Vu = Xu.from,
          ru = Math.min(Xu.to, Qu);
        let Bu, xu;
        return Ju < Vu ? (Bu = Vu, xu = ru) : (Bu = Ju, xu = Nu), [{
          pos: Bu,
          end: xu,
          above: !1,
          create: zR(MR(mu.items[0], mu.argumentIndex))
        }]
      }
    }

    function wR(uu, Ru) {
      return (yu, Eu, Ku) => {
        const Qu = uu.languageService.getQuickInfoAtPosition(Ru, Eu);
        if (!Qu) return [];
        const mu = Qu.textSpan.start,
          Ju = Qu.textSpan.start + Qu.textSpan.length;
        if (Eu < mu || Eu >= Ju) return [];
        if (Qu.kind === pu().ScriptElementKind.memberFunctionElement || Qu.kind === pu().ScriptElementKind.variableElement && "declare" === Qu.kindModifiers) {
          const uu = Qu.displayParts.findIndex((uu => "space" === uu.kind)); - 1 !== uu && (Qu.displayParts = Qu.displayParts.slice(uu));
          const Ru = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            yu = Qu.displayParts.findIndex((uu => "punctuation" === uu.kind && "(" === uu.text)); - 1 !== yu && (Ru.prefixDisplayParts = Qu.displayParts.slice(0, yu + 1), Qu.displayParts = Qu.displayParts.slice(yu + 1));
          const Eu = Qu.displayParts.findLastIndex((uu => "punctuation" === uu.kind && ")" === uu.text)); - 1 !== Eu && (Ru.suffixDisplayParts = Qu.displayParts.slice(Eu), Qu.displayParts = Qu.displayParts.slice(0, Eu));
          let Ku = 0,
            Nu = [];
          for (const mu of Qu.displayParts)
            if (eR.has(mu.text) ? Ku++ : AR.has(mu.text) && Ku--, "lineBreak" !== mu.kind) {
              if ("space" === mu.kind) {
                if (0 === Nu.length) continue;
                Nu.push({
                  kind: "space",
                  text: " "
                })
              } else Nu.push(mu);
              0 === Ku && "," === mu.text && (Ru.parameters.push({
                displayParts: Nu
              }), Nu = [])
            } return Nu.length > 0 && Ru.parameters.push({
            displayParts: Nu
          }), Ru.documentation = Qu.documentation, [{
            pos: mu,
            end: Ju,
            above: !0,
            create: zR(MR(Ru))
          }]
        }
        const Nu = [];
        for (const uu of Qu.displayParts) Nu.push({
          str: uu.text,
          style: {
            color: DR.text
          }
        });
        if (Qu.documentation) {
          Nu.push("\n\n");
          for (const uu of Qu.documentation) Nu.push({
            str: uu.text,
            style: {
              color: DR.docs
            }
          })
        }
        return [{
          pos: mu,
          end: Ju,
          above: !0,
          create: zR(Nu)
        }]
      }
    }
    const ZR = {
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
      semicolons: pu().SemicolonPreference.Insert
    };
    const hR = Qu.i.define(),
      PR = {
        lineNumbers: !0,
        tabSize: 4
      };

    function iR(uu) {
      let {
        isLobbyCode: Ru,
        code: yu,
        onChange: Ju,
        canEditCode: Bu,
        setTemporaryMessage: Su,
        close: eu,
        showTooltips: Pu,
        lightMode: iu,
        collabState: ou,
        onRemoteDocChange: qu,
        files: Ou,
        activePath: vu,
        pluginName: fu,
        pluginFile: uR,
        pluginSource: yR,
        setActiveDocReplacer: ER,
        showAiHints: QR,
        canAiChangeCode: mR = Bu
      } = uu;
      const [JR, NR] = (0, mu.useState)(null), XR = null === ou || void 0 === ou ? void 0 : ou.version, VR = null === ou || void 0 === ou ? void 0 : ou.clientID, rR = (0, mu.useRef)({
        isLobbyCode: Ru,
        files: Ou,
        code: yu,
        activePath: vu
      }), BR = (0, mu.useRef)(qu);
      BR.current = qu;
      const xR = (0, mu.useRef)(null),
        SR = (0, mu.useRef)(ou);
      SR.current = ou;
      const pR = (0, mu.useRef)(null),
        jR = (0, mu.useRef)(null),
        HR = (0, mu.useRef)(null),
        dR = (0, mu.useRef)(eu);
      dR.current = eu;
      const bR = (0, mu.useRef)(yu);
      bR.current = yu;
      const eR = (0, mu.useRef)(yR);
      eR.current = yR;
      const AR = function(uu, Ru, yu, Eu) {
        return yu ? `/plugin-preview/${yu}/${null!==Eu&&void 0!==Eu?Eu:"index.ts"}` : uu ? tR(null !== Ru && void 0 !== Ru ? Ru : du.k) : sR
      }(Ru, vu, fu, uR);
      (0, mu.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: uu,
            files: Ru,
            code: yu,
            activePath: Eu
          } = rR.current, Ku = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: pu().ModuleKind.ESNext,
            moduleResolution: pu().ModuleResolutionKind.Bundler,
            target: pu().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Hu.h).map((uu => [uu.specifier, [uu.typesVfsPath]])))
            }
          }, Qu = new Map, mu = [];
          if (uu) {
            const uu = null !== Ru && void 0 !== Ru ? Ru : {
              [du.k]: yu || "\n"
            };
            for (const [Ru, yu] of Object.entries(uu)) {
              const uu = tR(Ru);
              Qu.set(uu, yu || "\n"), mu.push(uu)
            }
            const Ku = tR(null !== Eu && void 0 !== Eu ? Eu : du.k);
            Qu.has(Ku) ? Qu.set(Ku, yu || "\n") : (Qu.set(Ku, yu || "\n"), mu.push(Ku)), Qu.set("/node_modules/@bloxd/index.d.ts", Vu.default), mu.push("/node_modules/@bloxd/index.d.ts");
            for (const Ru of Object.values(Hu.h)) {
              Qu.set(Ru.typesVfsPath, Ru.types), mu.push(Ru.typesVfsPath);
              for (const [uu, yu] of Object.entries(Ru.files)) {
                const Eu = `/plugin-preview/${Ru.name}/${uu}`;
                Qu.set(Eu, yu || "\n"), mu.push(Eu)
              }
            }
          } else Qu.set(sR, yu || "\n"), mu.push(sR);
          Qu.set("/globals.d.ts", uu ? Xu.d : Nu.d), Qu.set("/lib.d.ts", ru.c), mu.push("/globals.d.ts", "/lib.d.ts");
          const Ju = xu.e(Qu),
            Bu = xu.f(Ju, mu, pu(), Ku);
          NR({
            ET: Bu,
            fsMap: Qu
          })
        }()
      }), []), (0, mu.useEffect)((() => {
        var uu, Eu;
        if (!JR || !Ru) return;
        const {
          ET: Ku,
          fsMap: Qu
        } = JR;
        if (function(uu, Ru, yu) {
            const Eu = new Set;
            for (const [Ku, Qu] of Object.entries(yu)) {
              const yu = tR(Ku);
              Eu.add(yu);
              const mu = Qu || "\n";
              Ru.get(yu) !== mu && (Ru.set(yu, mu), lR(uu, yu, mu))
            }
            for (const Ku of [...Ru.keys()]) "/globals.d.ts" === Ku || "/lib.d.ts" === Ku || Ku.startsWith("/node_modules/") || Ku.startsWith("/plugin-preview/") || Eu.has(Ku) || (Ru.delete(Ku), uu.getSourceFile(Ku) && uu.deleteFile(Ku))
          }(Ku, Qu, null !== Ou && void 0 !== Ou ? Ou : {
            [du.k]: yu || "\n"
          }), fu) return void lR(Ku, AR, yR || "\n");
        const mu = null !== (uu = null === (Eu = xR.current) || void 0 === Eu ? void 0 : Eu.state.doc.toString()) && void 0 !== uu ? uu : yu;
        lR(Ku, AR, mu || "\n")
      }), [Ou, vu, JR, fu, yR, AR, yu, Ru]), (0, mu.useEffect)((() => {
        if (!JR) return;
        const {
          ET: uu
        } = JR;
        lR(uu, AR, (fu ? yR : yu) || "\n")
      }), [yu, fu, yR, AR, JR]), (0, mu.useEffect)((() => () => {
        jR.current && (jR.current(), jR.current = null)
      }), []), (0, mu.useEffect)((() => (ER(((uu, Ru) => {
        if (fu) return !1;
        const yu = xR.current,
          Eu = SR.current,
          Ku = Eu ? (0, bu.B)(Eu.docKey) : null;
        if (!yu || !Eu || pR.current !== Eu.clientID || uu !== Ku) return !1;
        const Qu = yu.state.doc.toString();
        return Qu !== Ru && yu.dispatch({
          changes: {
            from: 0,
            to: Qu.length,
            insert: Ru
          }
        }), !0
      })), () => {
        xR.current = null, pR.current = null, ER(null)
      })), [ER, fu]);
      const DR = Ru ? fu ? null : null !== vu && void 0 !== vu ? vu : du.k : WR.d,
        MR = RR(xR, DR);
      KR(xR, Su), (0, ku.e)("FormatCode", (() => {
        if (!JR || !xR.current || fu) return;
        const {
          ET: uu,
          fsMap: yu
        } = JR, Eu = uu.getSourceFile(AR).getFullText();
        let Ku = 0;
        if (Ru && Ou)
          for (const [Ru, Ju] of Object.entries(Ou)) Ru !== (null !== vu && void 0 !== vu ? vu : du.k) && (Ku += Ju.length);
        const Qu = function(uu, Ru, yu, Eu, Ku) {
          const Qu = uu.languageService.getFormattingEditsForDocument(Eu, ZR);
          if (!Qu.length) return Au.c.error("Code is already formatted.");
          Qu.sort(((uu, Ru) => Ru.span.start - uu.span.start));
          let mu = uu.getSourceFile(Eu).getFullText();
          for (const Ju of Qu) mu = mu.slice(0, Ju.span.start) + Ju.Xm + mu.slice(Ju.span.start + Ju.span.length);
          return mu !== (yu ? (0, Cu.n)(mu, Ku) : (0, Cu.j)(mu)) ? Au.c.error("Formatting the code will go beyond the character limit.") : Au.c.value(mu)
        }(uu, 0, Ru, AR, Ku);
        if (Qu.isError()) return void Su({
          message: Qu.asError().message,
          type: "warning"
        });
        const mu = Qu.getValue();
        mu && (xR.current.dispatch({
          changes: {
            from: 0,
            to: Eu.length,
            insert: mu
          },
          selection: {
            anchor: mu.length
          }
        }), lR(uu, AR, mu), Ju(mu))
      }));
      const IR = (0, mu.useMemo)((() => {
        if (!JR) return [];
        const {
          ET: uu,
          fsMap: yu
        } = JR;
        ! function(uu, Ru, yu, Eu) {
          if (uu.getSourceFile(yu)) return;
          const Ku = Eu || "\n";
          Ru.set(yu, Ku), uu.createFile(yu, Ku)
        }(uu, yu, AR, (fu ? eR.current : bR.current) || "\n");
        const mu = Ru && gR(fu ? null !== uR && void 0 !== uR ? uR : "index.ts" : vu),
          Ju = [(0, Ku.e)({
            jsx: !1,
            typescript: mu
          }), Qu.f.highest(Qu.e.domEventHandlers({
            keydown: uu => "Escape" === uu.key ? (dR.current(), uu.stopPropagation(), !0) : (uu.stopPropagation(), !1)
          })), (0, Eu.c)({
            override: [LR(uu, AR)]
          }), Iu.k.fromClass(class {
            constructor(uu) {
              this.view = uu, this.timeout = null, this.scheduleParse()
            }
            update(uu) {
              (uu.docChanged || uu.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const uu = this.view.viewport.to;
                (0, cu.kb)(this.view.state, uu) || (0, cu.K)(this.view, uu, Lu) || this.scheduleParse()
              }), zu))
            }
          }), ...au, Qu.e.lineWrapping, Qu.j.define({
            create: FR(uu, Pu, AR),
            update(Ru, yu) {
              const Eu = yu.effects.some((uu => uu.is(hR)));
              return yu.docChanged || yu.selection || Eu ? (lR(uu, AR, yu.state.doc.toString() || " "), FR(uu, Pu, AR)(yu.state)) : Ru
            },
            provide: uu => Qu.q.computeN([uu], (Ru => Ru.field(uu)))
          }), (0, Qu.p)(wR(uu, AR)), (0, Wu.e)(cR(Ru, uu, AR)), Qu.k.fromClass(class {
            constructor(uu) {
              this.view = uu, this.searchPanel = null
            }
            update(uu) {
              const Ru = uu.view.dom.querySelector(".cm-search");
              if (Ru !== this.searchPanel) {
                if (this.searchPanel = Ru, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (uu => {
                  "Escape" === uu.key && (0, Tu.b)(this.view), uu.stopPropagation()
                }))
              }
            }
          })];
        QR && !fu && Ju.push(CR(Ru ? null !== vu && void 0 !== vu ? vu : du.k : WR.d, mR));
        const Nu = SR.current;
        if (Nu && !fu) {
          Ju.push(... function(uu, Ru, yu, Eu, Ku) {
            let Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const mu = (0, bu.B)(yu),
              Ju = Iu.k.fromClass(class {
                constructor(uu) {
                  this.view = uu, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = nu.k.subscribe("codeCollab", (uu => {
                    uu.docKey === mu && uu.type === bu.f.Updates && (uu.updates ? this.applyUpdates(uu.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(uu) {
                  const Ru = JSON.parse(uu).map((uu => ({
                    clientID: uu.clientID,
                    changes: Mu.ChangeSet.fromJSON(uu.changes)
                  })));
                  Ru.length > 0 && (this.view.dispatch((0, Du.j)(this.view.state, Ru)), Ku && Ku(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(uu) {
                  Qu && (uu.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const uu = (0, Du.n)(this.view.state);
                  if (this.pushing || !uu.length) return;
                  const Ru = Date.now() - this.lastPushTime;
                  if (Ru < gu) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), gu - Ru)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), tu);
                  const yu = (0, Du.i)(this.view.state),
                    Ku = uu.map((uu => ({
                      clientID: uu.clientID,
                      changes: uu.changes.toJSON()
                    }))),
                    Qu = JSON.stringify(Ku);
                  Qu.length <= bu.j ? Gu.gameBridge.send("sendCodeCollab", {
                    WR: bu.e.Push,
                    jR: mu,
                    HR: yu,
                    CR: Qu
                  }) : (0, su.postJsonWithMetricsCookiesAndJsonResponse)(`${Eu.gsUrl}/code/collab-push`, Uu.n["collab-push"].toBuffer({
                    gameNameWithVariation: Eu.gameNameWithVariation,
                    lobbyName: Eu.lobbyName,
                    docKey: mu,
                    version: yu,
                    updates: Qu
                  }), {
                    retries: 0
                  }).catch((uu => {
                    console.error("[CodeCollab] HTTP push failed", uu)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const uu = (0, Du.i)(this.view.state);
                  (0, su.postJsonWithMetricsCookiesAndJsonResponse)(`${Eu.gsUrl}/code/collab-pull`, Uu.n["collab-pull"].toBuffer({
                    gameNameWithVariation: Eu.gameNameWithVariation,
                    lobbyName: Eu.lobbyName,
                    docKey: mu,
                    fromVersion: uu
                  }), {
                    retries: 1
                  }).then((uu => {
                    this.destroyed || (uu.fullDoc ? nu.k.Op("codeCollabRejoin", {
                      docKey: mu,
                      doc: uu.fullDoc,
                      version: uu.version
                    }) : this.applyUpdates(uu.updates))
                  })).catch((uu => {
                    console.error("[CodeCollab] Pull failed", uu)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const uu = Date.now();
                  if (uu - this.lastCursorSent < lu) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), lu)));
                  this.lastCursorSent = uu;
                  const Ru = this.view.state.selection.main;
                  Gu.gameBridge.send("sendCodeCollab", {
                    WR: bu.e.Cursor,
                    jR: mu,
                    DR: Ru.anchor,
                    MR: Ru.head
                  })
                }
                destroy() {
                  this.destroyed = !0, nu.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Du.e)({
              startVersion: uu,
              clientID: Ru
            }), Ju]
          }(XR, VR, Nu.docKey, Nu.httpConfig, (uu => {
            var Ru;
            null === (Ru = BR.current) || void 0 === Ru || Ru.call(BR, uu)
          }), Bu));
          const uu = function(uu, Ru) {
            const yu = (0, bu.B)(uu);
            return {
              extensions: [Yu],
              connect(uu) {
                if (Ru) {
                  const yu = Ru.map((uu => wu.of({
                    playerId: uu.playerId,
                    playerName: uu.playerName,
                    colour: uu.colour,
                    anchor: uu.anchor,
                    head: uu.head,
                    lastMoved: Date.now()
                  })));
                  yu.length > 0 && uu.dispatch({
                    effects: yu
                  })
                }
                const Eu = nu.k.subscribe("codeCollab", (Ru => {
                    if (Ru.docKey === yu)
                      if (Ru.type === bu.f.RemoteCursor) uu.dispatch({
                        effects: wu.of({
                          playerId: Ru.playerId,
                          playerName: Ru.playerName,
                          colour: Ru.colour,
                          anchor: Ru.anchor,
                          head: Ru.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Ru.type === bu.f.Presence) {
                      const yu = JSON.parse(Ru.peers),
                        Eu = new Set(yu.map((uu => uu.playerId))),
                        Ku = uu.state.field(Yu),
                        Qu = [];
                      for (const [uu] of Ku.cursors) Eu.has(uu) || Qu.push(Zu.of(uu));
                      Qu.length > 0 && uu.dispatch({
                        effects: Qu
                      })
                    }
                  })),
                  Ku = setInterval((() => {
                    uu.dom.isConnected ? uu.dispatch({
                      effects: hu.of(Date.now())
                    }) : clearInterval(Ku)
                  }), Fu);
                return () => {
                  nu.k.unsubscribe(Eu), clearInterval(Ku)
                }
              }
            }
          }(Nu.docKey, Nu.existingCursors);
          Ju.push(...uu.extensions), HR.current = uu.connect
        } else HR.current = null;
        return Ju
      }), [Ru, JR, Pu, XR, VR, AR, vu, fu, uR, Bu, QR, mR]);
      if (!JR || !ou && !fu) return (0, kR.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, kR.jsx)(ju.b, {})
      });
      const GR = fu ? `plugin-${fu}-${null!==uR&&void 0!==uR?uR:"index.ts"}` : ou ? `collab-${ou.clientID}` : `local-${Ru}`;
      return (0, kR.jsx)(Qu.n, {
        value: fu ? null !== yR && void 0 !== yR ? yR : "" : yu,
        onChange: Ju,
        extensions: IR,
        className: "CodeEditorContent",
        theme: iu ? TR : "dark",
        editable: Bu && !fu,
        basicSetup: PR,
        onCreateEditor: uu => {
          var Ru;
          xR.current = uu, pR.current = null !== (Ru = null === ou || void 0 === ou ? void 0 : ou.clientID) && void 0 !== Ru ? Ru : null, MR(uu), jR.current && jR.current(), HR.current && (jR.current = HR.current(uu))
        }
      }, GR)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);