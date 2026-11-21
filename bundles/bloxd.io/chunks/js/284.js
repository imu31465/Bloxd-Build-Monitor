export const id = 284;
export const ids = [284];
export const modules = {
  40679: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => EF
    });
    var LQ = wQ(40688),
      qQ = wQ(40732),
      oQ = wQ(40736),
      DQ = wQ(53),
      kQ = wQ(71),
      vQ = wQ(40759),
      mQ = wQ(40764),
      uQ = wQ(4610),
      HQ = wQ(40770),
      bQ = wQ(1873),
      YQ = wQ(40778),
      xQ = wQ(40792),
      AQ = wQ.n(xQ),
      tQ = wQ(40743),
      eQ = wQ(40751),
      MQ = wQ(1348),
      GQ = wQ(36472),
      pQ = wQ(1254),
      cQ = wQ(36483),
      CQ = wQ(36378),
      SQ = wQ(1447),
      iQ = wQ(619),
      WQ = wQ(1257),
      RQ = wQ(40846),
      OQ = wQ(40695),
      sQ = wQ(40702),
      rQ = wQ(1897),
      IQ = wQ(3621),
      UQ = wQ(22),
      NQ = wQ(1147);
    const TQ = 1e4,
      KQ = 250,
      zQ = 250;
    var lQ = wQ(40718);
    const jQ = 50,
      aQ = 100;
    const XQ = 2e3,
      fQ = OQ.H.define(),
      VQ = OQ.H.define(),
      hQ = OQ.H.define();
    class JQ extends sQ.l {
      constructor(QQ, FQ, wQ) {
        super(), this.colour = QQ, this.playerName = FQ, this.showName = wQ
      }
      toDOM() {
        const QQ = document.createElement("span");
        QQ.className = "cm-remote-cursor-wrapper", QQ.style.borderLeftColor = this.colour;
        const FQ = document.createElement("span");
        if (FQ.className = "cm-remote-cursor", FQ.style.borderLeftColor = this.colour, QQ.appendChild(FQ), this.showName) {
          const FQ = document.createElement("span");
          FQ.className = "cm-remote-cursor-name", FQ.style.backgroundColor = this.colour, FQ.textContent = this.playerName, QQ.appendChild(FQ)
        }
        return QQ
      }
      eq(QQ) {
        return this.colour === QQ.colour && this.playerName === QQ.playerName && this.showName === QQ.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function EQ(QQ, FQ) {
      const wQ = [],
        LQ = [];
      for (const [, DQ] of QQ) {
        const QQ = FQ - DQ.lastMoved < XQ;
        if (wQ.push({
            pos: DQ.head,
            decoration: sQ.c.widget({
              widget: new JQ(DQ.colour, DQ.playerName, QQ),
              side: 1
            })
          }), DQ.anchor !== DQ.head) {
          const QQ = Math.min(DQ.anchor, DQ.head),
            FQ = Math.max(DQ.anchor, DQ.head);
          LQ.push({
            from: QQ,
            to: FQ,
            decoration: sQ.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${DQ.colour}33`
              }
            })
          })
        }
      }
      const qQ = new OQ.z,
        oQ = [];
      for (const DQ of wQ) oQ.push({
        bias: 1,
        deco: DQ.decoration,
        from: DQ.pos,
        to: DQ.pos
      });
      for (const DQ of LQ) oQ.push({
        bias: 0,
        deco: DQ.decoration,
        from: DQ.from,
        to: DQ.to
      });
      oQ.sort(((QQ, FQ) => QQ.from - FQ.from || QQ.deco.startSide - FQ.deco.startSide || QQ.bias - FQ.bias));
      for (const DQ of oQ) qQ.add(DQ.from, DQ.to, DQ.deco);
      return qQ.finish()
    }
    const nQ = OQ.L.define({
      create: () => ({
        cursors: new Map,
        qo: sQ.c.none
      }),
      update(QQ, FQ) {
        let wQ = QQ.cursors,
          LQ = !1;
        if (FQ.docChanged) {
          const QQ = new Map;
          for (const [LQ, qQ] of wQ) QQ.set(LQ, {
            ...qQ,
            anchor: FQ.changes.mapPos(qQ.anchor, 1),
            head: FQ.changes.mapPos(qQ.head, 1)
          });
          wQ = QQ, LQ = !0
        }
        for (const qQ of FQ.effects)
          if (qQ.is(fQ)) {
            if (!Number.isInteger(qQ.value.anchor) || !Number.isInteger(qQ.value.head)) {
              console.warn(`Code Editor: ignored player ${qQ.value.playerId}'s cursor at ${qQ.value.anchor}-${qQ.value.head}`);
              continue
            }
            const oQ = FQ.state.doc.length,
              DQ = {
                ...qQ.value,
                anchor: Math.min(qQ.value.anchor, oQ),
                head: Math.min(qQ.value.head, oQ)
              };
            wQ === QQ.cursors && (wQ = new Map(wQ)), wQ.set(DQ.playerId, DQ), LQ = !0
          } else qQ.is(VQ) ? wQ.has(qQ.value) && (wQ === QQ.cursors && (wQ = new Map(wQ)), wQ.delete(qQ.value), LQ = !0) : qQ.is(hQ) && (LQ = !0);
        return LQ ? {
          cursors: wQ,
          qo: EQ(wQ, Date.now())
        } : QQ
      },
      provide: QQ => sQ.f.qo.from(QQ, (QQ => QQ.qo))
    });
    const gQ = OQ.H.define(),
      PQ = sQ.c.mark({
        class: "CodeInsertFlash"
      }),
      ZQ = OQ.L.define({
        create: () => sQ.c.none,
        update(QQ, FQ) {
          let wQ = QQ.map(FQ.changes);
          for (const LQ of FQ.effects) LQ.is(gQ) && (wQ = LQ.value ? sQ.c.set(PQ.range(LQ.value.from, LQ.value.to)) : sQ.c.none);
          return wQ
        },
        provide: QQ => sQ.f.qo.from(QQ)
      }),
      yQ = OQ.L.define({
        create: () => !1,
        update: (QQ, FQ) => QQ || void 0 !== FQ.annotation(OQ.S.userEvent) && !FQ.annotation(OQ.S.remote)
      }),
      BQ = [ZQ, yQ];

    function dQ(QQ) {
      return QQ.field(yQ)
    }
    const QF = 3e4;

    function FF(QQ, FQ) {
      const wQ = (0, DQ.useRef)(null);
      (0, DQ.useEffect)((() => {
        var QQ;
        (null === (QQ = wQ.current) || void 0 === QQ ? void 0 : QQ.path) !== FQ && (wQ.current = null)
      }), [FQ]);
      const LQ = QQ => {
        var LQ;
        const qQ = wQ.current;
        if (null === QQ || void 0 === QQ || !QQ.dom.isConnected || !qQ || qQ.path !== FQ) return;
        wQ.current = null;
        const {
          iY: DQ
        } = qQ;
        if (DQ && null !== DQ.text && performance.now() - DQ.at < QF) {
          const FQ = function(QQ, FQ) {
            if (QQ === FQ) return null;
            const wQ = Math.min(QQ.length, FQ.length);
            let LQ = 0;
            for (; LQ < wQ && QQ[LQ] === FQ[LQ];) LQ++;
            let qQ = 0;
            for (; qQ < wQ - LQ && QQ[QQ.length - 1 - qQ] === FQ[FQ.length - 1 - qQ];) qQ++;
            return {
              from: LQ,
              to: QQ.length - qQ,
              insert: FQ.slice(LQ, FQ.length - qQ)
            }
          }(QQ.state.doc.toString(), DQ.text);
          null !== FQ && QQ.dispatch({
            changes: FQ,
            userEvent: DQ.placed ? "input" : void 0
          })
        }
        const {
          doc: kQ
        } = QQ.state, vQ = kQ.line(Math.min(Math.max(qQ.line, 1), kQ.lines)), mQ = vQ.from + Math.min(null !== (LQ = qQ.column) && void 0 !== LQ ? LQ : 0, vQ.length);
        QQ.dispatch({
          selection: {
            anchor: mQ
          },
          effects: oQ.d.scrollIntoView(mQ, {
            y: "center"
          }),
          userEvent: null !== DQ && void 0 !== DQ && DQ.placed ? "select" : void 0
        }), !1 !== (null === DQ || void 0 === DQ ? void 0 : DQ.focused) && QQ.focus()
      };
      return (0, SQ.g)("CodeEditorGoToLine", (FQ => {
        wQ.current = FQ, LQ(QQ.current)
      })), (0, SQ.g)("CodeEditorKeepEdits", (() => {
        const LQ = QQ.current;
        if (null === LQ || !LQ.dom.isConnected || null === FQ) return;
        const {
          doc: qQ,
          selection: oQ
        } = LQ.state, {
          head: DQ
        } = oQ.main, kQ = qQ.lineAt(DQ), vQ = {
          text: (0, RQ.h)(LQ.state).length > 0 ? qQ.toString() : null,
          at: performance.now(),
          focused: LQ.hasFocus,
          placed: dQ(LQ.state)
        };
        wQ.current = {
          path: FQ,
          line: kQ.number,
          column: DQ - kQ.from,
          iY: vQ
        }
      })), QQ => {
        var qQ;
        const oQ = wQ.current;
        !1 === (null === oQ || void 0 === oQ || null === (qQ = oQ.iY) || void 0 === qQ ? void 0 : qQ.focused) && oQ.path === FQ || QQ.focus(), LQ(QQ)
      }
    }
    var wF = wQ(4226),
      LF = wQ(1207);

    function qF(QQ, FQ) {
      const {
        t: wQ
      } = (0, LF.y)();
      (0, SQ.g)("CodeEditorInsertText", (LQ => {
        let {
          text: qQ,
          focus: oQ
        } = LQ;
        const DQ = QQ.current,
          kQ = null !== DQ && void 0 !== DQ && DQ.dom.isConnected ? function(QQ, FQ) {
            if (!dQ(QQ)) return null;
            const {
              from: wQ,
              to: LQ
            } = QQ.selection.main, qQ = wQ + FQ.length;
            return {
              changes: {
                from: wQ,
                to: LQ,
                insert: FQ
              },
              selection: {
                anchor: qQ
              },
              effects: [sQ.f.scrollIntoView(qQ, {
                y: "center"
              }), gQ.of({
                from: wQ,
                to: qQ
              })],
              userEvent: "input"
            }
          }(DQ.state, qQ) : null;
        null !== DQ && null !== kQ ? (DQ.dispatch(kQ), oQ && DQ.focus(), setTimeout((() => {
          DQ.dom.isConnected && DQ.dispatch({
            effects: gQ.of(null)
          })
        }), 1500)) : (0, wF.d)(qQ).then((() => {
          FQ({
            message: wQ("codeEditorWorld:pickCopied", {
              coords: qQ
            }),
            type: "success"
          })
        }), (QQ => {
          console.error("Pick could not copy the coordinates", QQ), FQ({
            message: wQ("codeEditorWorld:pickPlaceCursor", {
              coords: qQ
            }),
            type: "warning"
          })
        }))
      }))
    }
    var oF = wQ(40727);
    const DF = "#e45649",
      kF = "#383a42",
      vF = "#696c77",
      mF = "#986801",
      uF = "#e5e5e6",
      HF = "#fafafa",
      bF = "#eaeaeb",
      YF = "#526fff",
      xF = sQ.f.theme({
        "&": {
          color: kF,
          backgroundColor: HF
        },
        ".cm-content": {
          caretColor: YF
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: YF
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: kF
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
          backgroundColor: HF,
          color: vF,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: uF
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: bF
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: bF,
          borderBottomColor: bF
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: uF,
            color: kF
          }
        }
      }, {
        dark: !1
      }),
      AF = lQ.c.define([{
        tag: oF.q.keyword,
        color: "#a626a4"
      }, {
        tag: [oF.q.name, oF.q.deleted, oF.q.character, oF.q.propertyName, oF.q.macroName],
        color: DF
      }, {
        tag: [oF.q.function(oF.q.variableName), oF.q.labelName],
        color: "#4078f2"
      }, {
        tag: [oF.q.color, oF.q.constant(oF.q.name), oF.q.standard(oF.q.name)],
        color: mF
      }, {
        tag: [oF.q.definition(oF.q.name), oF.q.separator],
        color: kF
      }, {
        tag: [oF.q.typeName, oF.q.className, oF.q.number, oF.q.changed, oF.q.annotation, oF.q.modifier, oF.q.self, oF.q.namespace],
        color: "#c18401"
      }, {
        tag: [oF.q.operator, oF.q.operatorKeyword, oF.q.url, oF.q.escape, oF.q.regexp, oF.q.link, oF.q.special(oF.q.string)],
        color: "#0184bc"
      }, {
        tag: [oF.q.meta, oF.q.comment],
        color: vF
      }, {
        tag: oF.q.strong,
        fontWeight: "bold"
      }, {
        tag: oF.q.emphasis,
        fontStyle: "italic"
      }, {
        tag: oF.q.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: oF.q.link,
        color: vF,
        textDecoration: "underline"
      }, {
        tag: oF.q.heading,
        fontWeight: "bold",
        color: DF
      }, {
        tag: [oF.q.atom, oF.q.bool, oF.q.special(oF.q.variableName)],
        color: mF
      }, {
        tag: [oF.q.processingInstruction, oF.q.string, oF.q.inserted],
        color: "#50a14f"
      }, {
        tag: oF.q.invalid,
        color: "#000000"
      }]),
      tF = [xF, (0, lQ.ib)(AF)];
    var eF = wQ(36535),
      MF = wQ(40855);
    const GF = oQ.h.define(),
      pF = oQ.l.define({
        create: () => !1,
        update(QQ, FQ) {
          for (const wQ of FQ.effects) wQ.is(GF) && (QQ = wQ.value);
          return QQ
        }
      }),
      cF = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function CF(QQ, FQ) {
      return [pF, oQ.n.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.onDown = QQ => {
            const FQ = QQ.target instanceof Element && null !== QQ.target.closest(".cm-tooltip");
            0 !== QQ.button || FQ || this.view.state.field(pF) || this.view.dispatch({
              effects: GF.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(pF) && this.view.dispatch({
              effects: GF.of(!1)
            })
          }, QQ.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), oQ.w.compute(["selection", pF], (wQ => function(QQ, FQ, wQ) {
        const LQ = QQ.selection.main;
        return LQ.empty || QQ.field(pF) || QQ.sliceDoc(LQ.from, LQ.to).trim().length < 2 ? null : {
          pos: LQ.from,
          above: !0,
          create: QQ => {
            const LQ = document.createElement("div");
            LQ.className = "CodeSelectionActions", LQ.setAttribute("role", "toolbar"), LQ.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: qQ,
                label: oQ
              }
              of cF) {
              if (!wQ && "explain" !== qQ) continue;
              const DQ = document.createElement("button");
              DQ.type = "button", DQ.textContent = oQ, "change" !== qQ && (DQ.title = MF.e, DQ.dataset.asksAi = "true"), DQ.addEventListener("mousedown", (QQ => {
                QQ.preventDefault()
              })), DQ.addEventListener("click", (() => {
                const wQ = QQ.state.selection.main;
                if (wQ.empty) return;
                const LQ = {
                  action: qQ,
                  path: FQ,
                  fromLine: QQ.state.doc.lineAt(wQ.from).number,
                  toLine: QQ.state.doc.lineAt(wQ.to > wQ.from && QQ.state.doc.lineAt(wQ.to).from === wQ.to ? wQ.to - 1 : wQ.to).number,
                  text: QQ.state.sliceDoc(wQ.from, wQ.to)
                };
                UQ.l.GA("WorldCodeAiSelection", LQ), QQ.dispatch({
                  selection: {
                    anchor: wQ.to
                  }
                })
              })), LQ.appendChild(DQ)
            }
            return {
              dom: LQ
            }
          }
        }
      }(wQ, QQ, FQ)))]
    }
    var SF = wQ(1107);
    const iF = new Set(["(", "{", "[", "<"]),
      WF = new Set([")", "}", "]", ">"]),
      RF = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function OF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function wQ(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = [];
        for (const qQ of QQ) {
          let QQ;
          QQ = "punctuation" === qQ.kind ? RF.text : "parameterName" === qQ.kind ? RF.parameterName : FQ, LQ.push({
            str: qQ.text,
            style: {
              color: QQ,
              opacity: wQ ? .5 : void 0
            }
          })
        }
        return LQ
      }
      const LQ = [];
      if (LQ.push(...wQ(QQ.prefixDisplayParts, RF.text)), QQ.parameters.length > 0) {
        LQ.push("\n");
        for (let qQ = 0; qQ < QQ.parameters.length; qQ++) {
          const oQ = QQ.parameters[qQ];
          LQ.push("\t"), LQ.push(...wQ(oQ.displayParts, RF.parameter, null !== FQ && qQ !== FQ)), LQ.push("\n")
        }
      }
      return LQ.push(...wQ(QQ.suffixDisplayParts, RF.suffix)), QQ.documentation && (LQ.push("\n\n"), LQ.push(...wQ(QQ.documentation, RF.docs))), LQ
    }
    var sF = function(QQ) {
      return QQ[QQ.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", QQ[QQ.DuplicateIdentifier = 2300] = "DuplicateIdentifier", QQ
    }(sF || {});
    const rF = new Set([sF.DuplicateIdentifier]),
      IF = new Set([sF.VariableDefinedElsewhere]),
      UF = new Set([]),
      NF = "/index.js";

    function TF(QQ) {
      return "/" + QQ
    }

    function KF(QQ, FQ, wQ) {
      QQ.getSourceFile(FQ) && QQ.deleteFile(FQ), QQ.createFile(FQ, wQ)
    }

    function zF(QQ) {
      return !!QQ && ((0, cQ.o)(QQ) || (0, cQ.n)(QQ))
    }

    function lF(QQ, FQ, wQ) {
      return () => {
        let LQ = [...FQ.languageService.getSemanticDiagnostics(wQ), ...FQ.languageService.getSyntacticDiagnostics(wQ)];
        return LQ = LQ.filter((QQ => !(0, iQ.F)(QQ.start) && !(0, iQ.F)(QQ.length) && !rF.has(QQ.code))), QQ || (LQ = LQ.filter((QQ => !IF.has(QQ.code)))), LQ.map((QQ => ({
          from: QQ.start,
          to: QQ.start + QQ.length,
          message: "string" === typeof QQ.messageText ? QQ.messageText : QQ.messageText.messageText,
          severity: UF.has(QQ.code) ? "warning" : "error"
        })))
      }
    }

    function jF(QQ, FQ) {
      return wQ => {
        var LQ, qQ;
        const oQ = QQ.languageService.getCompletionsAtPosition(FQ, wQ.pos, {});
        if (!oQ) return {
          from: wQ.pos,
          options: []
        };
        let DQ = null !== (LQ = null === (qQ = oQ.optionalReplacementSpan) || void 0 === qQ ? void 0 : qQ.start) && void 0 !== LQ ? LQ : wQ.pos;
        if (!oQ.optionalReplacementSpan) {
          const QQ = wQ.state.doc.sliceString(0, wQ.pos);
          for (; DQ > 0 && /[\w$]/.test(QQ[DQ - 1]);) DQ--
        }
        return oQ.entries = oQ.entries.filter((QQ => QQ.kind !== AQ().ScriptElementKind.warning)), {
          from: DQ,
          options: oQ.entries.map((LQ => {
            var qQ, oQ, kQ, vQ;
            const mQ = QQ.languageService.getCompletionEntryDetails(FQ, wQ.pos, LQ.name, {}, LQ.source, {}, LQ.data),
              uQ = null !== (qQ = null === (oQ = LQ.replacementSpan) || void 0 === oQ ? void 0 : oQ.start) && void 0 !== qQ ? qQ : DQ,
              HQ = LQ.replacementSpan ? LQ.replacementSpan.start + LQ.replacementSpan.length : wQ.pos,
              bQ = null !== (kQ = LQ.insertText) && void 0 !== kQ ? kQ : LQ.name;
            return {
              label: LQ.name,
              detail: null === mQ || void 0 === mQ ? void 0 : mQ.displayParts.map((QQ => QQ.text)).join(""),
              info: null === mQ || void 0 === mQ || null === (vQ = mQ.documentation) || void 0 === vQ ? void 0 : vQ.map((QQ => QQ.text)).join(""),
              apply: QQ => {
                QQ.dispatch({
                  changes: {
                    from: uQ,
                    to: HQ,
                    insert: bQ
                  },
                  selection: {
                    anchor: uQ + bQ.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function aF(QQ) {
      return FQ => {
        const wQ = document.createElement("div");
        wQ.className = "CodeEditorTooltip";
        let LQ = !1;
        return queueMicrotask((() => {
          LQ || (kQ.render((0, SF.jsx)(bQ.e, {
            text: QQ
          }), wQ), FQ.requestMeasure())
        })), {
          dom: wQ,
          destroy() {
            LQ = !0, queueMicrotask((() => {
              kQ.unmountComponentAtNode(wQ)
            }))
          }
        }
      }
    }

    function XF(QQ, FQ, wQ) {
      return LQ => {
        var qQ;
        if (!FQ) return [];
        const oQ = null === (qQ = LQ.selection.PA[0]) || void 0 === qQ ? void 0 : qQ.head;
        if (void 0 === oQ) return [];
        const DQ = QQ.languageService.getSignatureHelpItems(wQ, oQ, {});
        if (!DQ || !DQ.items.length) return [];
        const kQ = DQ.applicableSpan.start - DQ.items[0].prefixDisplayParts.map((QQ => QQ.text)).join("").length,
          vQ = DQ.applicableSpan.start,
          mQ = LQ.doc.lineAt(oQ),
          uQ = mQ.from,
          HQ = Math.min(mQ.to, oQ);
        let bQ, YQ;
        return kQ < uQ ? (bQ = uQ, YQ = HQ) : (bQ = kQ, YQ = vQ), [{
          pos: bQ,
          end: YQ,
          above: !1,
          create: aF(OF(DQ.items[0], DQ.argumentIndex))
        }]
      }
    }

    function fF(QQ, FQ) {
      return (wQ, LQ, qQ) => {
        const oQ = QQ.languageService.getQuickInfoAtPosition(FQ, LQ);
        if (!oQ) return [];
        const DQ = oQ.textSpan.start,
          kQ = oQ.textSpan.start + oQ.textSpan.length;
        if (LQ < DQ || LQ >= kQ) return [];
        if (oQ.kind === AQ().ScriptElementKind.memberFunctionElement || oQ.kind === AQ().ScriptElementKind.variableElement && "declare" === oQ.kindModifiers) {
          const QQ = oQ.displayParts.findIndex((QQ => "space" === QQ.kind)); - 1 !== QQ && (oQ.displayParts = oQ.displayParts.slice(QQ));
          const FQ = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            wQ = oQ.displayParts.findIndex((QQ => "punctuation" === QQ.kind && "(" === QQ.text)); - 1 !== wQ && (FQ.prefixDisplayParts = oQ.displayParts.slice(0, wQ + 1), oQ.displayParts = oQ.displayParts.slice(wQ + 1));
          const LQ = oQ.displayParts.findLastIndex((QQ => "punctuation" === QQ.kind && ")" === QQ.text)); - 1 !== LQ && (FQ.suffixDisplayParts = oQ.displayParts.slice(LQ), oQ.displayParts = oQ.displayParts.slice(0, LQ));
          let qQ = 0,
            vQ = [];
          for (const DQ of oQ.displayParts)
            if (iF.has(DQ.text) ? qQ++ : WF.has(DQ.text) && qQ--, "lineBreak" !== DQ.kind) {
              if ("space" === DQ.kind) {
                if (0 === vQ.length) continue;
                vQ.push({
                  kind: "space",
                  text: " "
                })
              } else vQ.push(DQ);
              0 === qQ && "," === DQ.text && (FQ.parameters.push({
                displayParts: vQ
              }), vQ = [])
            } return vQ.length > 0 && FQ.parameters.push({
            displayParts: vQ
          }), FQ.documentation = oQ.documentation, [{
            pos: DQ,
            end: kQ,
            above: !0,
            create: aF(OF(FQ))
          }]
        }
        const vQ = [];
        for (const QQ of oQ.displayParts) vQ.push({
          str: QQ.text,
          style: {
            color: RF.text
          }
        });
        if (oQ.documentation) {
          vQ.push("\n\n");
          for (const QQ of oQ.documentation) vQ.push({
            str: QQ.text,
            style: {
              color: RF.docs
            }
          })
        }
        return [{
          pos: DQ,
          end: kQ,
          above: !0,
          create: aF(vQ)
        }]
      }
    }
    const VF = {
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
      semicolons: AQ().SemicolonPreference.Insert
    };
    const hF = oQ.h.define(),
      JF = {
        lineNumbers: !0,
        tabSize: 4
      };

    function EF(QQ) {
      let {
        isLobbyCode: FQ,
        code: wQ,
        onChange: kQ,
        canEditCode: bQ,
        setTemporaryMessage: xQ,
        close: iQ,
        showTooltips: JQ,
        lightMode: EQ,
        collabState: gQ,
        onRemoteDocChange: PQ,
        files: ZQ,
        activePath: yQ,
        pluginName: dQ,
        pluginFile: QF,
        pluginSource: wF,
        setActiveDocReplacer: LF,
        showAiHints: oF,
        canAiChangeCode: DF = bQ
      } = QQ;
      const [kF, vF] = (0, DQ.useState)(null), mF = null === gQ || void 0 === gQ ? void 0 : gQ.version, uF = null === gQ || void 0 === gQ ? void 0 : gQ.clientID, HF = (0, DQ.useRef)({
        isLobbyCode: FQ,
        files: ZQ,
        code: wQ,
        activePath: yQ
      }), bF = (0, DQ.useRef)(PQ);
      bF.current = PQ;
      const YF = (0, DQ.useRef)(null),
        xF = (0, DQ.useRef)(gQ);
      xF.current = gQ;
      const AF = (0, DQ.useRef)(null),
        MF = (0, DQ.useRef)(null),
        GF = (0, DQ.useRef)(null),
        pF = (0, DQ.useRef)(iQ);
      pF.current = iQ;
      const cF = (0, DQ.useRef)(wQ);
      cF.current = wQ;
      const iF = (0, DQ.useRef)(wF);
      iF.current = wF;
      const WF = function(QQ, FQ, wQ, LQ) {
        return wQ ? `/plugin-preview/${wQ}/${null!==LQ&&void 0!==LQ?LQ:"index.ts"}` : QQ ? TF(null !== FQ && void 0 !== FQ ? FQ : pQ.i) : NF
      }(FQ, yQ, dQ, QF);
      (0, DQ.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: QQ,
            files: FQ,
            code: wQ,
            activePath: LQ
          } = HF.current, qQ = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: AQ().ModuleKind.ESNext,
            moduleResolution: AQ().ModuleResolutionKind.Bundler,
            target: AQ().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(GQ.e).map((QQ => [QQ.specifier, [QQ.typesVfsPath]])))
            }
          }, oQ = new Map, DQ = [];
          if (QQ) {
            const QQ = null !== FQ && void 0 !== FQ ? FQ : {
              [pQ.i]: wQ || "\n"
            };
            for (const [FQ, wQ] of Object.entries(QQ)) {
              const QQ = TF(FQ);
              oQ.set(QQ, wQ || "\n"), DQ.push(QQ)
            }
            const qQ = TF(null !== LQ && void 0 !== LQ ? LQ : pQ.i);
            oQ.has(qQ) ? oQ.set(qQ, wQ || "\n") : (oQ.set(qQ, wQ || "\n"), DQ.push(qQ)), oQ.set("/node_modules/@bloxd/index.d.ts", uQ.default), DQ.push("/node_modules/@bloxd/index.d.ts");
            for (const FQ of Object.values(GQ.e)) {
              oQ.set(FQ.typesVfsPath, FQ.types), DQ.push(FQ.typesVfsPath);
              for (const [QQ, wQ] of Object.entries(FQ.files)) {
                const LQ = `/plugin-preview/${FQ.name}/${QQ}`;
                oQ.set(LQ, wQ || "\n"), DQ.push(LQ)
              }
            }
          } else oQ.set(NF, wQ || "\n"), DQ.push(NF);
          oQ.set("/globals.d.ts", QQ ? mQ.b : vQ.d), oQ.set("/lib.d.ts", HQ.c), DQ.push("/globals.d.ts", "/lib.d.ts");
          const kQ = YQ.d(oQ),
            bQ = YQ.h(kQ, DQ, AQ(), qQ);
          vF({
            ZA: bQ,
            fsMap: oQ
          })
        }()
      }), []), (0, DQ.useEffect)((() => {
        var QQ, LQ;
        if (!kF || !FQ) return;
        const {
          ZA: qQ,
          fsMap: oQ
        } = kF;
        if (function(QQ, FQ, wQ) {
            const LQ = new Set;
            for (const [qQ, oQ] of Object.entries(wQ)) {
              const wQ = TF(qQ);
              LQ.add(wQ);
              const DQ = oQ || "\n";
              FQ.get(wQ) !== DQ && (FQ.set(wQ, DQ), KF(QQ, wQ, DQ))
            }
            for (const qQ of [...FQ.keys()]) "/globals.d.ts" === qQ || "/lib.d.ts" === qQ || qQ.startsWith("/node_modules/") || qQ.startsWith("/plugin-preview/") || LQ.has(qQ) || (FQ.delete(qQ), QQ.getSourceFile(qQ) && QQ.deleteFile(qQ))
          }(qQ, oQ, null !== ZQ && void 0 !== ZQ ? ZQ : {
            [pQ.i]: wQ || "\n"
          }), dQ) return void KF(qQ, WF, wF || "\n");
        const DQ = null !== (QQ = null === (LQ = YF.current) || void 0 === LQ ? void 0 : LQ.state.doc.toString()) && void 0 !== QQ ? QQ : wQ;
        KF(qQ, WF, DQ || "\n")
      }), [ZQ, yQ, kF, dQ, wF, WF, wQ, FQ]), (0, DQ.useEffect)((() => {
        if (!kF) return;
        const {
          ZA: QQ
        } = kF;
        KF(QQ, WF, (dQ ? wF : wQ) || "\n")
      }), [wQ, dQ, wF, WF, kF]), (0, DQ.useEffect)((() => () => {
        MF.current && (MF.current(), MF.current = null)
      }), []), (0, DQ.useEffect)((() => (LF(((QQ, FQ) => {
        if (dQ) return !1;
        const wQ = YF.current,
          LQ = xF.current,
          qQ = LQ ? (0, cQ.w)(LQ.docKey) : null;
        if (!wQ || !LQ || AF.current !== LQ.clientID || QQ !== qQ) return !1;
        const oQ = wQ.state.doc.toString();
        return oQ !== FQ && wQ.dispatch({
          changes: {
            from: 0,
            to: oQ.length,
            insert: FQ
          }
        }), !0
      })), () => {
        YF.current = null, AF.current = null, LF(null)
      })), [LF, dQ]);
      const RF = FQ ? dQ ? null : null !== yQ && void 0 !== yQ ? yQ : pQ.i : eF.e,
        OF = FF(YF, RF);
      qF(YF, xQ), (0, SQ.g)("FormatCode", (() => {
        if (!kF || !YF.current || dQ) return;
        const {
          ZA: QQ,
          fsMap: wQ
        } = kF, LQ = QQ.getSourceFile(WF).getFullText();
        let qQ = 0;
        if (FQ && ZQ)
          for (const [FQ, kQ] of Object.entries(ZQ)) FQ !== (null !== yQ && void 0 !== yQ ? yQ : pQ.i) && (qQ += kQ.length);
        const oQ = function(QQ, FQ, wQ, LQ, qQ) {
          const oQ = QQ.languageService.getFormattingEditsForDocument(LQ, VF);
          if (!oQ.length) return WQ.d.error("Code is already formatted.");
          oQ.sort(((QQ, FQ) => FQ.span.start - QQ.span.start));
          let DQ = QQ.getSourceFile(LQ).getFullText();
          for (const kQ of oQ) DQ = DQ.slice(0, kQ.span.start) + kQ.tu + DQ.slice(kQ.span.start + kQ.span.length);
          return DQ !== (wQ ? (0, CQ.l)(DQ, qQ) : (0, CQ.i)(DQ)) ? WQ.d.error("Formatting the code will go beyond the character limit.") : WQ.d.value(DQ)
        }(QQ, 0, FQ, WF, qQ);
        if (oQ.isError()) return void xQ({
          message: oQ.asError().message,
          type: "warning"
        });
        const DQ = oQ.getValue();
        DQ && (YF.current.dispatch({
          changes: {
            from: 0,
            to: LQ.length,
            insert: DQ
          },
          selection: {
            anchor: DQ.length
          }
        }), KF(QQ, WF, DQ), kQ(DQ))
      }));
      const sF = (0, DQ.useMemo)((() => {
        if (!kF) return [];
        const {
          ZA: QQ,
          fsMap: wQ
        } = kF;
        ! function(QQ, FQ, wQ, LQ) {
          if (QQ.getSourceFile(wQ)) return;
          const qQ = LQ || "\n";
          FQ.set(wQ, qQ), QQ.createFile(wQ, qQ)
        }(QQ, wQ, WF, (dQ ? iF.current : cF.current) || "\n");
        const DQ = FQ && zF(dQ ? null !== QF && void 0 !== QF ? QF : "index.ts" : yQ),
          kQ = [(0, qQ.c)({
            jsx: !1,
            typescript: DQ
          }), oQ.g.highest(oQ.d.domEventHandlers({
            keydown: QQ => "Escape" === QQ.key ? (pF.current(), QQ.stopPropagation(), !0) : (QQ.stopPropagation(), !1)
          })), (0, LQ.c)({
            override: [jF(QQ, WF)]
          }), sQ.h.fromClass(class {
            constructor(QQ) {
              this.view = QQ, this.timeout = null, this.scheduleParse()
            }
            update(QQ) {
              (QQ.docChanged || QQ.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const QQ = this.view.viewport.to;
                (0, lQ.kb)(this.view.state, QQ) || (0, lQ.O)(this.view, QQ, jQ) || this.scheduleParse()
              }), aQ))
            }
          }), ...BQ, oQ.d.lineWrapping, oQ.l.define({
            create: XF(QQ, JQ, WF),
            update(FQ, wQ) {
              const LQ = wQ.effects.some((QQ => QQ.is(hF)));
              return wQ.docChanged || wQ.selection || LQ ? (KF(QQ, WF, wQ.state.doc.toString() || " "), XF(QQ, JQ, WF)(wQ.state)) : FQ
            },
            provide: QQ => oQ.w.computeN([QQ], (FQ => FQ.field(QQ)))
          }), (0, oQ.u)(fF(QQ, WF)), (0, eQ.g)(lF(FQ, QQ, WF)), oQ.n.fromClass(class {
            constructor(QQ) {
              this.view = QQ, this.searchPanel = null
            }
            update(QQ) {
              const FQ = QQ.view.dom.querySelector(".cm-search");
              if (FQ !== this.searchPanel) {
                if (this.searchPanel = FQ, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (QQ => {
                  "Escape" === QQ.key && (0, tQ.e)(this.view), QQ.stopPropagation()
                }))
              }
            }
          })];
        oF && !dQ && kQ.push(CF(FQ ? null !== yQ && void 0 !== yQ ? yQ : pQ.i : eF.e, DF));
        const vQ = xF.current;
        if (vQ && !dQ) {
          kQ.push(... function(QQ, FQ, wQ, LQ, qQ) {
            let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const DQ = (0, cQ.w)(wQ),
              kQ = sQ.h.fromClass(class {
                constructor(QQ) {
                  this.view = QQ, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = UQ.l.subscribe("codeCollab", (QQ => {
                    QQ.docKey === DQ && QQ.type === cQ.h.Updates && (QQ.updates ? this.applyUpdates(QQ.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(QQ) {
                  const FQ = JSON.parse(QQ).map((QQ => ({
                    clientID: QQ.clientID,
                    changes: OQ.ChangeSet.fromJSON(QQ.changes)
                  })));
                  FQ.length > 0 && (this.view.dispatch((0, RQ.d)(this.view.state, FQ)), qQ && qQ(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(QQ) {
                  oQ && (QQ.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const QQ = (0, RQ.h)(this.view.state);
                  if (this.pushing || !QQ.length) return;
                  const FQ = Date.now() - this.lastPushTime;
                  if (FQ < zQ) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), zQ - FQ)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), TQ);
                  const wQ = (0, RQ.c)(this.view.state),
                    qQ = QQ.map((QQ => ({
                      clientID: QQ.clientID,
                      changes: QQ.changes.toJSON()
                    }))),
                    oQ = JSON.stringify(qQ);
                  oQ.length <= cQ.k ? rQ.gameBridge.send("sendCodeCollab", {
                    RF: cQ.d.Push,
                    OF: DQ,
                    sF: wQ,
                    UF: oQ
                  }) : (0, NQ.postJsonWithMetricsCookiesAndJsonResponse)(`${LQ.gsUrl}/code/collab-push`, IQ.m["collab-push"].toBuffer({
                    gameNameWithVariation: LQ.gameNameWithVariation,
                    lobbyName: LQ.lobbyName,
                    docKey: DQ,
                    version: wQ,
                    updates: oQ
                  }), {
                    retries: 0
                  }).catch((QQ => {
                    console.error("[CodeCollab] HTTP push failed", QQ)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const QQ = (0, RQ.c)(this.view.state);
                  (0, NQ.postJsonWithMetricsCookiesAndJsonResponse)(`${LQ.gsUrl}/code/collab-pull`, IQ.m["collab-pull"].toBuffer({
                    gameNameWithVariation: LQ.gameNameWithVariation,
                    lobbyName: LQ.lobbyName,
                    docKey: DQ,
                    fromVersion: QQ
                  }), {
                    retries: 1
                  }).then((QQ => {
                    this.destroyed || (QQ.fullDoc ? UQ.l.GA("codeCollabRejoin", {
                      docKey: DQ,
                      doc: QQ.fullDoc,
                      version: QQ.version
                    }) : this.applyUpdates(QQ.updates))
                  })).catch((QQ => {
                    console.error("[CodeCollab] Pull failed", QQ)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const QQ = Date.now();
                  if (QQ - this.lastCursorSent < KQ) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), KQ)));
                  this.lastCursorSent = QQ;
                  const FQ = this.view.state.selection.main;
                  rQ.gameBridge.send("sendCodeCollab", {
                    RF: cQ.d.Cursor,
                    OF: DQ,
                    zF: FQ.anchor,
                    lF: FQ.head
                  })
                }
                destroy() {
                  this.destroyed = !0, UQ.l.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, RQ.b)({
              startVersion: QQ,
              clientID: FQ
            }), kQ]
          }(mF, uF, vQ.docKey, vQ.httpConfig, (QQ => {
            var FQ;
            null === (FQ = bF.current) || void 0 === FQ || FQ.call(bF, QQ)
          }), bQ));
          const QQ = function(QQ, FQ) {
            const wQ = (0, cQ.w)(QQ);
            return {
              extensions: [nQ],
              connect(QQ) {
                if (FQ) {
                  const wQ = FQ.map((QQ => fQ.of({
                    playerId: QQ.playerId,
                    playerName: QQ.playerName,
                    colour: QQ.colour,
                    anchor: QQ.anchor,
                    head: QQ.head,
                    lastMoved: Date.now()
                  })));
                  wQ.length > 0 && QQ.dispatch({
                    effects: wQ
                  })
                }
                const LQ = UQ.l.subscribe("codeCollab", (FQ => {
                    if (FQ.docKey === wQ)
                      if (FQ.type === cQ.h.RemoteCursor) QQ.dispatch({
                        effects: fQ.of({
                          playerId: FQ.playerId,
                          playerName: FQ.playerName,
                          colour: FQ.colour,
                          anchor: FQ.anchor,
                          head: FQ.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (FQ.type === cQ.h.Presence) {
                      const wQ = JSON.parse(FQ.peers),
                        LQ = new Set(wQ.map((QQ => QQ.playerId))),
                        qQ = QQ.state.field(nQ),
                        oQ = [];
                      for (const [QQ] of qQ.cursors) LQ.has(QQ) || oQ.push(VQ.of(QQ));
                      oQ.length > 0 && QQ.dispatch({
                        effects: oQ
                      })
                    }
                  })),
                  qQ = setInterval((() => {
                    QQ.dom.isConnected ? QQ.dispatch({
                      effects: hQ.of(Date.now())
                    }) : clearInterval(qQ)
                  }), XQ);
                return () => {
                  UQ.l.unsubscribe(LQ), clearInterval(qQ)
                }
              }
            }
          }(vQ.docKey, vQ.existingCursors);
          kQ.push(...QQ.extensions), GF.current = QQ.connect
        } else GF.current = null;
        return kQ
      }), [FQ, kF, JQ, mF, uF, WF, yQ, dQ, QF, bQ, oF, DF]);
      if (!kF || !gQ && !dQ) return (0, SF.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, SF.jsx)(MQ.c, {})
      });
      const rF = dQ ? `plugin-${dQ}-${null!==QF&&void 0!==QF?QF:"index.ts"}` : gQ ? `collab-${gQ.clientID}` : `local-${FQ}`;
      return (0, SF.jsx)(oQ.q, {
        value: dQ ? null !== wF && void 0 !== wF ? wF : "" : wQ,
        onChange: kQ,
        extensions: sF,
        className: "CodeEditorContent",
        theme: EQ ? tF : "dark",
        editable: bQ && !dQ,
        basicSetup: JF,
        onCreateEditor: QQ => {
          var FQ;
          YF.current = QQ, AF.current = null !== (FQ = null === gQ || void 0 === gQ ? void 0 : gQ.clientID) && void 0 !== FQ ? FQ : null, OF(QQ), MF.current && MF.current(), GF.current && (MF.current = GF.current(QQ))
        }
      }, rF)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);