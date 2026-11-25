export const id = 301;
export const ids = [301];
export const modules = {
  41536: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => xW
    });
    var wQ = XQ(41545),
      qQ = XQ(41577),
      TQ = XQ(41586),
      zQ = XQ(61),
      sQ = XQ(78),
      FQ = XQ(41603),
      PQ = XQ(41611),
      gQ = XQ(5085),
      JQ = XQ(41613),
      rQ = XQ(1975),
      IQ = XQ(41615),
      jQ = XQ(41631),
      BQ = XQ.n(jQ),
      yQ = XQ(41592),
      VQ = XQ(41598),
      DQ = XQ(1391),
      pQ = XQ(37152),
      GQ = XQ(1273),
      UQ = XQ(2531),
      bQ = XQ(37041),
      vQ = XQ(1498),
      dQ = XQ(663),
      HQ = XQ(1280),
      aQ = XQ(41685),
      lQ = XQ(41550),
      hQ = XQ(41555),
      iQ = XQ(2003),
      cQ = XQ(3984),
      AQ = XQ(31),
      RQ = XQ(1165);
    const EQ = 1e4,
      CQ = 250,
      uQ = 250;
    var LQ = XQ(41566);
    const kQ = 50,
      fQ = 100;
    const SQ = 2e3,
      tQ = lQ.G.define(),
      oQ = lQ.G.define(),
      eQ = lQ.G.define();
    class nQ extends hQ.u {
      constructor(QQ, WQ, XQ) {
        super(), this.colour = QQ, this.playerName = WQ, this.showName = XQ
      }
      toDOM() {
        const QQ = document.createElement("span");
        QQ.className = "cm-remote-cursor-wrapper", QQ.style.borderLeftColor = this.colour;
        const WQ = document.createElement("span");
        if (WQ.className = "cm-remote-cursor", WQ.style.borderLeftColor = this.colour, QQ.appendChild(WQ), this.showName) {
          const WQ = document.createElement("span");
          WQ.className = "cm-remote-cursor-name", WQ.style.backgroundColor = this.colour, WQ.textContent = this.playerName, QQ.appendChild(WQ)
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

    function xQ(QQ, WQ) {
      const XQ = [],
        wQ = [];
      for (const [, zQ] of QQ) {
        const QQ = WQ - zQ.lastMoved < SQ;
        if (XQ.push({
            pos: zQ.head,
            decoration: hQ.e.widget({
              widget: new nQ(zQ.colour, zQ.playerName, QQ),
              side: 1
            })
          }), zQ.anchor !== zQ.head) {
          const QQ = Math.min(zQ.anchor, zQ.head),
            WQ = Math.max(zQ.anchor, zQ.head);
          wQ.push({
            from: QQ,
            to: WQ,
            decoration: hQ.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${zQ.colour}33`
              }
            })
          })
        }
      }
      const qQ = new lQ.x,
        TQ = [];
      for (const zQ of XQ) TQ.push({
        bias: 1,
        deco: zQ.decoration,
        from: zQ.pos,
        to: zQ.pos
      });
      for (const zQ of wQ) TQ.push({
        bias: 0,
        deco: zQ.decoration,
        from: zQ.from,
        to: zQ.to
      });
      TQ.sort(((QQ, WQ) => QQ.from - WQ.from || QQ.deco.startSide - WQ.deco.startSide || QQ.bias - WQ.bias));
      for (const zQ of TQ) qQ.add(zQ.from, zQ.to, zQ.deco);
      return qQ.finish()
    }
    const YQ = lQ.I.define({
      create: () => ({
        cursors: new Map,
        Tw: hQ.e.none
      }),
      update(QQ, WQ) {
        let XQ = QQ.cursors,
          wQ = !1;
        if (WQ.docChanged) {
          const QQ = new Map;
          for (const [wQ, qQ] of XQ) QQ.set(wQ, {
            ...qQ,
            anchor: WQ.changes.mapPos(qQ.anchor, 1),
            head: WQ.changes.mapPos(qQ.head, 1)
          });
          XQ = QQ, wQ = !0
        }
        for (const qQ of WQ.effects)
          if (qQ.is(tQ)) {
            if (!Number.isInteger(qQ.value.anchor) || !Number.isInteger(qQ.value.head)) {
              console.warn(`Code Editor: ignored player ${qQ.value.playerId}'s cursor at ${qQ.value.anchor}-${qQ.value.head}`);
              continue
            }
            const TQ = WQ.state.doc.length,
              zQ = {
                ...qQ.value,
                anchor: Math.min(qQ.value.anchor, TQ),
                head: Math.min(qQ.value.head, TQ)
              };
            XQ === QQ.cursors && (XQ = new Map(XQ)), XQ.set(zQ.playerId, zQ), wQ = !0
          } else qQ.is(oQ) ? XQ.has(qQ.value) && (XQ === QQ.cursors && (XQ = new Map(XQ)), XQ.delete(qQ.value), wQ = !0) : qQ.is(eQ) && (wQ = !0);
        return wQ ? {
          cursors: XQ,
          Tw: xQ(XQ, Date.now())
        } : QQ
      },
      provide: QQ => hQ.k.Tw.from(QQ, (QQ => QQ.Tw))
    });
    const NQ = lQ.G.define(),
      ZQ = hQ.e.mark({
        class: "CodeInsertFlash"
      }),
      OQ = lQ.I.define({
        create: () => hQ.e.none,
        update(QQ, WQ) {
          let XQ = QQ.map(WQ.changes);
          for (const wQ of WQ.effects) wQ.is(NQ) && (XQ = wQ.value ? hQ.e.set(ZQ.range(wQ.value.from, wQ.value.to)) : hQ.e.none);
          return XQ
        },
        provide: QQ => hQ.k.Tw.from(QQ)
      }),
      KQ = lQ.I.define({
        create: () => !1,
        update: (QQ, WQ) => QQ || void 0 !== WQ.annotation(lQ.O.userEvent) && !WQ.annotation(lQ.O.remote)
      }),
      mQ = [OQ, KQ];

    function MQ(QQ) {
      return QQ.field(KQ)
    }
    const QW = 3e4;

    function WW(QQ, WQ) {
      const XQ = (0, zQ.useRef)(null);
      (0, zQ.useEffect)((() => {
        var QQ;
        (null === (QQ = XQ.current) || void 0 === QQ ? void 0 : QQ.path) !== WQ && (XQ.current = null)
      }), [WQ]);
      const wQ = QQ => {
        var wQ;
        const qQ = XQ.current;
        if (null === QQ || void 0 === QQ || !QQ.dom.isConnected || !qQ || qQ.path !== WQ) return;
        XQ.current = null;
        const {
          HI: zQ
        } = qQ;
        if (zQ && null !== zQ.text && performance.now() - zQ.at < QW) {
          const WQ = function(QQ, WQ) {
            if (QQ === WQ) return null;
            const XQ = Math.min(QQ.length, WQ.length);
            let wQ = 0;
            for (; wQ < XQ && QQ[wQ] === WQ[wQ];) wQ++;
            let qQ = 0;
            for (; qQ < XQ - wQ && QQ[QQ.length - 1 - qQ] === WQ[WQ.length - 1 - qQ];) qQ++;
            return {
              from: wQ,
              to: QQ.length - qQ,
              insert: WQ.slice(wQ, WQ.length - qQ)
            }
          }(QQ.state.doc.toString(), zQ.text);
          null !== WQ && QQ.dispatch({
            changes: WQ,
            userEvent: zQ.placed ? "input" : void 0
          })
        }
        const {
          doc: sQ
        } = QQ.state, FQ = sQ.line(Math.min(Math.max(qQ.line, 1), sQ.lines)), PQ = FQ.from + Math.min(null !== (wQ = qQ.column) && void 0 !== wQ ? wQ : 0, FQ.length);
        QQ.dispatch({
          selection: {
            anchor: PQ
          },
          effects: TQ.d.scrollIntoView(PQ, {
            y: "center"
          }),
          userEvent: null !== zQ && void 0 !== zQ && zQ.placed ? "select" : void 0
        }), !1 !== (null === zQ || void 0 === zQ ? void 0 : zQ.focused) && QQ.focus()
      };
      return (0, vQ.f)("CodeEditorGoToLine", (WQ => {
        XQ.current = WQ, wQ(QQ.current)
      })), (0, vQ.f)("CodeEditorKeepEdits", (() => {
        const wQ = QQ.current;
        if (null === wQ || !wQ.dom.isConnected || null === WQ) return;
        const {
          doc: qQ,
          selection: TQ
        } = wQ.state, {
          head: zQ
        } = TQ.main, sQ = qQ.lineAt(zQ), FQ = {
          text: (0, aQ.i)(wQ.state).length > 0 ? qQ.toString() : null,
          at: performance.now(),
          focused: wQ.hasFocus,
          placed: MQ(wQ.state)
        };
        XQ.current = {
          path: WQ,
          line: sQ.number,
          column: zQ - sQ.from,
          HI: FQ
        }
      })), QQ => {
        var qQ;
        const TQ = XQ.current;
        !1 === (null === TQ || void 0 === TQ || null === (qQ = TQ.HI) || void 0 === qQ ? void 0 : qQ.focused) && TQ.path === WQ || QQ.focus(), wQ(QQ)
      }
    }
    var XW = XQ(4671),
      wW = XQ(1226);

    function qW(QQ, WQ) {
      const {
        t: XQ
      } = (0, wW.C)();
      (0, vQ.f)("CodeEditorInsertText", (wQ => {
        let {
          text: qQ,
          focus: TQ
        } = wQ;
        const zQ = QQ.current,
          sQ = null !== zQ && void 0 !== zQ && zQ.dom.isConnected ? function(QQ, WQ) {
            if (!MQ(QQ)) return null;
            const {
              from: XQ,
              to: wQ
            } = QQ.selection.main, qQ = XQ + WQ.length;
            return {
              changes: {
                from: XQ,
                to: wQ,
                insert: WQ
              },
              selection: {
                anchor: qQ
              },
              effects: [hQ.k.scrollIntoView(qQ, {
                y: "center"
              }), NQ.of({
                from: XQ,
                to: qQ
              })],
              userEvent: "input"
            }
          }(zQ.state, qQ) : null;
        null !== zQ && null !== sQ ? (zQ.dispatch(sQ), TQ && zQ.focus(), setTimeout((() => {
          zQ.dom.isConnected && zQ.dispatch({
            effects: NQ.of(null)
          })
        }), 1500)) : (0, XW.e)(qQ).then((() => {
          WQ({
            message: XQ("codeEditorWorld:pickCopied", {
              coords: qQ
            }),
            type: "success"
          })
        }), (QQ => {
          console.error("Pick could not copy the coordinates", QQ), WQ({
            message: XQ("codeEditorWorld:pickPlaceCursor", {
              coords: qQ
            }),
            type: "warning"
          })
        }))
      }))
    }
    var TW = XQ(41575);
    const zW = "#e45649",
      sW = "#383a42",
      FW = "#696c77",
      PW = "#986801",
      gW = "#e5e5e6",
      JW = "#fafafa",
      rW = "#eaeaeb",
      IW = "#526fff",
      jW = hQ.k.theme({
        "&": {
          color: sW,
          backgroundColor: JW
        },
        ".cm-content": {
          caretColor: IW
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: IW
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: sW
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
          backgroundColor: JW,
          color: FW,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: gW
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: rW
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: rW,
          borderBottomColor: rW
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: gW,
            color: sW
          }
        }
      }, {
        dark: !1
      }),
      BW = LQ.b.define([{
        tag: TW.h.keyword,
        color: "#a626a4"
      }, {
        tag: [TW.h.name, TW.h.deleted, TW.h.character, TW.h.propertyName, TW.h.macroName],
        color: zW
      }, {
        tag: [TW.h.function(TW.h.variableName), TW.h.labelName],
        color: "#4078f2"
      }, {
        tag: [TW.h.color, TW.h.constant(TW.h.name), TW.h.standard(TW.h.name)],
        color: PW
      }, {
        tag: [TW.h.definition(TW.h.name), TW.h.separator],
        color: sW
      }, {
        tag: [TW.h.typeName, TW.h.className, TW.h.number, TW.h.changed, TW.h.annotation, TW.h.modifier, TW.h.self, TW.h.namespace],
        color: "#c18401"
      }, {
        tag: [TW.h.operator, TW.h.operatorKeyword, TW.h.url, TW.h.escape, TW.h.regexp, TW.h.link, TW.h.special(TW.h.string)],
        color: "#0184bc"
      }, {
        tag: [TW.h.meta, TW.h.comment],
        color: FW
      }, {
        tag: TW.h.strong,
        fontWeight: "bold"
      }, {
        tag: TW.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: TW.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: TW.h.link,
        color: FW,
        textDecoration: "underline"
      }, {
        tag: TW.h.heading,
        fontWeight: "bold",
        color: zW
      }, {
        tag: [TW.h.atom, TW.h.bool, TW.h.special(TW.h.variableName)],
        color: PW
      }, {
        tag: [TW.h.processingInstruction, TW.h.string, TW.h.inserted],
        color: "#50a14f"
      }, {
        tag: TW.h.invalid,
        color: "#000000"
      }]),
      yW = [jW, (0, LQ.ab)(BW)];
    var VW = XQ(37189),
      DW = XQ(41694);
    const pW = TQ.h.define(),
      GW = TQ.l.define({
        create: () => !1,
        update(QQ, WQ) {
          for (const XQ of WQ.effects) XQ.is(pW) && (QQ = XQ.value);
          return QQ
        }
      }),
      UW = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function bW(QQ, WQ) {
      return [GW, TQ.n.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.onDown = QQ => {
            const WQ = QQ.target instanceof Element && null !== QQ.target.closest(".cm-tooltip");
            0 !== QQ.button || WQ || this.view.state.field(GW) || this.view.dispatch({
              effects: pW.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(GW) && this.view.dispatch({
              effects: pW.of(!1)
            })
          }, QQ.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), TQ.t.compute(["selection", GW], (XQ => function(QQ, WQ, XQ) {
        const wQ = QQ.selection.main;
        return wQ.empty || QQ.field(GW) || QQ.sliceDoc(wQ.from, wQ.to).trim().length < 2 ? null : {
          pos: wQ.from,
          above: !0,
          create: QQ => {
            const wQ = document.createElement("div");
            wQ.className = "CodeSelectionActions", wQ.setAttribute("role", "toolbar"), wQ.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: qQ,
                label: TQ
              }
              of UW) {
              if (!XQ && "explain" !== qQ) continue;
              const zQ = document.createElement("button");
              zQ.type = "button", zQ.textContent = TQ, "change" !== qQ && (zQ.title = DW.e, zQ.dataset.asksAi = "true"), zQ.addEventListener("mousedown", (QQ => {
                QQ.preventDefault()
              })), zQ.addEventListener("click", (() => {
                const XQ = QQ.state.selection.main;
                if (XQ.empty) return;
                const wQ = {
                  action: qQ,
                  path: WQ,
                  fromLine: QQ.state.doc.lineAt(XQ.from).number,
                  toLine: QQ.state.doc.lineAt(XQ.to > XQ.from && QQ.state.doc.lineAt(XQ.to).from === XQ.to ? XQ.to - 1 : XQ.to).number,
                  text: QQ.state.sliceDoc(XQ.from, XQ.to)
                };
                AQ.k.mB("WorldCodeAiSelection", wQ), QQ.dispatch({
                  selection: {
                    anchor: XQ.to
                  }
                })
              })), wQ.appendChild(zQ)
            }
            return {
              dom: wQ
            }
          }
        }
      }(XQ, QQ, WQ)))]
    }
    var vW = XQ(1145);
    const dW = new Set(["(", "{", "[", "<"]),
      HW = new Set([")", "}", "]", ">"]),
      aW = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function lW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function XQ(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = [];
        for (const qQ of QQ) {
          let QQ;
          QQ = "punctuation" === qQ.kind ? aW.text : "parameterName" === qQ.kind ? aW.parameterName : WQ, wQ.push({
            str: qQ.text,
            style: {
              color: QQ,
              opacity: XQ ? .5 : void 0
            }
          })
        }
        return wQ
      }
      const wQ = [];
      if (wQ.push(...XQ(QQ.prefixDisplayParts, aW.text)), QQ.parameters.length > 0) {
        wQ.push("\n");
        for (let qQ = 0; qQ < QQ.parameters.length; qQ++) {
          const TQ = QQ.parameters[qQ];
          wQ.push("\t"), wQ.push(...XQ(TQ.displayParts, aW.parameter, null !== WQ && qQ !== WQ)), wQ.push("\n")
        }
      }
      return wQ.push(...XQ(QQ.suffixDisplayParts, aW.suffix)), QQ.documentation && (wQ.push("\n\n"), wQ.push(...XQ(QQ.documentation, aW.docs))), wQ
    }
    var hW = function(QQ) {
      return QQ[QQ.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", QQ[QQ.DuplicateIdentifier = 2300] = "DuplicateIdentifier", QQ
    }(hW || {});
    const iW = new Set([hW.DuplicateIdentifier]),
      cW = new Set([hW.VariableDefinedElsewhere]),
      AW = new Set([]),
      RW = "/index.js";

    function EW(QQ) {
      return "/" + QQ
    }

    function CW(QQ, WQ, XQ) {
      QQ.getSourceFile(WQ) && QQ.deleteFile(WQ), QQ.createFile(WQ, XQ)
    }

    function uW(QQ) {
      return !!QQ && ((0, UQ.p)(QQ) || (0, UQ.l)(QQ))
    }

    function LW(QQ, WQ, XQ) {
      return () => {
        let wQ = [...WQ.languageService.getSemanticDiagnostics(XQ), ...WQ.languageService.getSyntacticDiagnostics(XQ)];
        return wQ = wQ.filter((QQ => !(0, dQ.G)(QQ.start) && !(0, dQ.G)(QQ.length) && !iW.has(QQ.code))), QQ || (wQ = wQ.filter((QQ => !cW.has(QQ.code)))), wQ.map((QQ => ({
          from: QQ.start,
          to: QQ.start + QQ.length,
          message: "string" === typeof QQ.messageText ? QQ.messageText : QQ.messageText.messageText,
          severity: AW.has(QQ.code) ? "warning" : "error"
        })))
      }
    }

    function kW(QQ, WQ) {
      return XQ => {
        var wQ, qQ;
        const TQ = QQ.languageService.getCompletionsAtPosition(WQ, XQ.pos, {});
        if (!TQ) return {
          from: XQ.pos,
          options: []
        };
        let zQ = null !== (wQ = null === (qQ = TQ.optionalReplacementSpan) || void 0 === qQ ? void 0 : qQ.start) && void 0 !== wQ ? wQ : XQ.pos;
        if (!TQ.optionalReplacementSpan) {
          const QQ = XQ.state.doc.sliceString(0, XQ.pos);
          for (; zQ > 0 && /[\w$]/.test(QQ[zQ - 1]);) zQ--
        }
        return TQ.entries = TQ.entries.filter((QQ => QQ.kind !== BQ().ScriptElementKind.warning)), {
          from: zQ,
          options: TQ.entries.map((wQ => {
            var qQ, TQ, sQ, FQ;
            const PQ = QQ.languageService.getCompletionEntryDetails(WQ, XQ.pos, wQ.name, {}, wQ.source, {}, wQ.data),
              gQ = null !== (qQ = null === (TQ = wQ.replacementSpan) || void 0 === TQ ? void 0 : TQ.start) && void 0 !== qQ ? qQ : zQ,
              JQ = wQ.replacementSpan ? wQ.replacementSpan.start + wQ.replacementSpan.length : XQ.pos,
              rQ = null !== (sQ = wQ.insertText) && void 0 !== sQ ? sQ : wQ.name;
            return {
              label: wQ.name,
              detail: null === PQ || void 0 === PQ ? void 0 : PQ.displayParts.map((QQ => QQ.text)).join(""),
              info: null === PQ || void 0 === PQ || null === (FQ = PQ.documentation) || void 0 === FQ ? void 0 : FQ.map((QQ => QQ.text)).join(""),
              apply: QQ => {
                QQ.dispatch({
                  changes: {
                    from: gQ,
                    to: JQ,
                    insert: rQ
                  },
                  selection: {
                    anchor: gQ + rQ.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function fW(QQ) {
      return WQ => {
        const XQ = document.createElement("div");
        XQ.className = "CodeEditorTooltip";
        let wQ = !1;
        return queueMicrotask((() => {
          wQ || (sQ.render((0, vW.jsx)(rQ.e, {
            text: QQ
          }), XQ), WQ.requestMeasure())
        })), {
          dom: XQ,
          destroy() {
            wQ = !0, queueMicrotask((() => {
              sQ.unmountComponentAtNode(XQ)
            }))
          }
        }
      }
    }

    function SW(QQ, WQ, XQ) {
      return wQ => {
        var qQ;
        if (!WQ) return [];
        const TQ = null === (qQ = wQ.selection.Qy[0]) || void 0 === qQ ? void 0 : qQ.head;
        if (void 0 === TQ) return [];
        const zQ = QQ.languageService.getSignatureHelpItems(XQ, TQ, {});
        if (!zQ || !zQ.items.length) return [];
        const sQ = zQ.applicableSpan.start - zQ.items[0].prefixDisplayParts.map((QQ => QQ.text)).join("").length,
          FQ = zQ.applicableSpan.start,
          PQ = wQ.doc.lineAt(TQ),
          gQ = PQ.from,
          JQ = Math.min(PQ.to, TQ);
        let rQ, IQ;
        return sQ < gQ ? (rQ = gQ, IQ = JQ) : (rQ = sQ, IQ = FQ), [{
          pos: rQ,
          end: IQ,
          above: !1,
          create: fW(lW(zQ.items[0], zQ.argumentIndex))
        }]
      }
    }

    function tW(QQ, WQ) {
      return (XQ, wQ, qQ) => {
        const TQ = QQ.languageService.getQuickInfoAtPosition(WQ, wQ);
        if (!TQ) return [];
        const zQ = TQ.textSpan.start,
          sQ = TQ.textSpan.start + TQ.textSpan.length;
        if (wQ < zQ || wQ >= sQ) return [];
        if (TQ.kind === BQ().ScriptElementKind.memberFunctionElement || TQ.kind === BQ().ScriptElementKind.variableElement && "declare" === TQ.kindModifiers) {
          const QQ = TQ.displayParts.findIndex((QQ => "space" === QQ.kind)); - 1 !== QQ && (TQ.displayParts = TQ.displayParts.slice(QQ));
          const WQ = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            XQ = TQ.displayParts.findIndex((QQ => "punctuation" === QQ.kind && "(" === QQ.text)); - 1 !== XQ && (WQ.prefixDisplayParts = TQ.displayParts.slice(0, XQ + 1), TQ.displayParts = TQ.displayParts.slice(XQ + 1));
          const wQ = TQ.displayParts.findLastIndex((QQ => "punctuation" === QQ.kind && ")" === QQ.text)); - 1 !== wQ && (WQ.suffixDisplayParts = TQ.displayParts.slice(wQ), TQ.displayParts = TQ.displayParts.slice(0, wQ));
          let qQ = 0,
            FQ = [];
          for (const zQ of TQ.displayParts)
            if (dW.has(zQ.text) ? qQ++ : HW.has(zQ.text) && qQ--, "lineBreak" !== zQ.kind) {
              if ("space" === zQ.kind) {
                if (0 === FQ.length) continue;
                FQ.push({
                  kind: "space",
                  text: " "
                })
              } else FQ.push(zQ);
              0 === qQ && "," === zQ.text && (WQ.parameters.push({
                displayParts: FQ
              }), FQ = [])
            } return FQ.length > 0 && WQ.parameters.push({
            displayParts: FQ
          }), WQ.documentation = TQ.documentation, [{
            pos: zQ,
            end: sQ,
            above: !0,
            create: fW(lW(WQ))
          }]
        }
        const FQ = [];
        for (const QQ of TQ.displayParts) FQ.push({
          str: QQ.text,
          style: {
            color: aW.text
          }
        });
        if (TQ.documentation) {
          FQ.push("\n\n");
          for (const QQ of TQ.documentation) FQ.push({
            str: QQ.text,
            style: {
              color: aW.docs
            }
          })
        }
        return [{
          pos: zQ,
          end: sQ,
          above: !0,
          create: fW(FQ)
        }]
      }
    }
    const oW = {
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
      semicolons: BQ().SemicolonPreference.Insert
    };
    const eW = TQ.h.define(),
      nW = {
        lineNumbers: !0,
        tabSize: 4
      };

    function xW(QQ) {
      let {
        isLobbyCode: WQ,
        code: XQ,
        onChange: sQ,
        canEditCode: rQ,
        setTemporaryMessage: jQ,
        close: dQ,
        showTooltips: nQ,
        lightMode: xQ,
        collabState: NQ,
        onRemoteDocChange: ZQ,
        files: OQ,
        activePath: KQ,
        pluginName: MQ,
        pluginFile: QW,
        pluginSource: XW,
        setActiveDocReplacer: wW,
        showAiHints: TW,
        canAiChangeCode: zW = rQ
      } = QQ;
      const [sW, FW] = (0, zQ.useState)(null), PW = null === NQ || void 0 === NQ ? void 0 : NQ.version, gW = null === NQ || void 0 === NQ ? void 0 : NQ.clientID, JW = (0, zQ.useRef)({
        isLobbyCode: WQ,
        files: OQ,
        code: XQ,
        activePath: KQ
      }), rW = (0, zQ.useRef)(ZQ);
      rW.current = ZQ;
      const IW = (0, zQ.useRef)(null),
        jW = (0, zQ.useRef)(NQ);
      jW.current = NQ;
      const BW = (0, zQ.useRef)(null),
        DW = (0, zQ.useRef)(null),
        pW = (0, zQ.useRef)(null),
        GW = (0, zQ.useRef)(dQ);
      GW.current = dQ;
      const UW = (0, zQ.useRef)(XQ);
      UW.current = XQ;
      const dW = (0, zQ.useRef)(XW);
      dW.current = XW;
      const HW = function(QQ, WQ, XQ, wQ) {
        return XQ ? `/plugin-preview/${XQ}/${null!==wQ&&void 0!==wQ?wQ:"index.ts"}` : QQ ? EW(null !== WQ && void 0 !== WQ ? WQ : GQ.j) : RW
      }(WQ, KQ, MQ, QW);
      (0, zQ.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: QQ,
            files: WQ,
            code: XQ,
            activePath: wQ
          } = JW.current, qQ = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: BQ().ModuleKind.ESNext,
            moduleResolution: BQ().ModuleResolutionKind.Bundler,
            target: BQ().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(pQ.f).map((QQ => [QQ.specifier, [QQ.typesVfsPath]])))
            }
          }, TQ = new Map, zQ = [];
          if (QQ) {
            const QQ = null !== WQ && void 0 !== WQ ? WQ : {
              [GQ.j]: XQ || "\n"
            };
            for (const [WQ, XQ] of Object.entries(QQ)) {
              const QQ = EW(WQ);
              TQ.set(QQ, XQ || "\n"), zQ.push(QQ)
            }
            const qQ = EW(null !== wQ && void 0 !== wQ ? wQ : GQ.j);
            TQ.has(qQ) ? TQ.set(qQ, XQ || "\n") : (TQ.set(qQ, XQ || "\n"), zQ.push(qQ)), TQ.set("/node_modules/@bloxd/index.d.ts", gQ.default), zQ.push("/node_modules/@bloxd/index.d.ts");
            for (const WQ of Object.values(pQ.f)) {
              TQ.set(WQ.typesVfsPath, WQ.types), zQ.push(WQ.typesVfsPath);
              for (const [QQ, XQ] of Object.entries(WQ.files)) {
                const wQ = `/plugin-preview/${WQ.name}/${QQ}`;
                TQ.set(wQ, XQ || "\n"), zQ.push(wQ)
              }
            }
          } else TQ.set(RW, XQ || "\n"), zQ.push(RW);
          TQ.set("/globals.d.ts", QQ ? PQ.b : FQ.e), TQ.set("/lib.d.ts", JQ.c), zQ.push("/globals.d.ts", "/lib.d.ts");
          const sQ = IQ.c(TQ),
            rQ = IQ.g(sQ, zQ, BQ(), qQ);
          FW({
            Wy: rQ,
            fsMap: TQ
          })
        }()
      }), []), (0, zQ.useEffect)((() => {
        var QQ, wQ;
        if (!sW || !WQ) return;
        const {
          Wy: qQ,
          fsMap: TQ
        } = sW;
        if (function(QQ, WQ, XQ) {
            const wQ = new Set;
            for (const [qQ, TQ] of Object.entries(XQ)) {
              const XQ = EW(qQ);
              wQ.add(XQ);
              const zQ = TQ || "\n";
              WQ.get(XQ) !== zQ && (WQ.set(XQ, zQ), CW(QQ, XQ, zQ))
            }
            for (const qQ of [...WQ.keys()]) "/globals.d.ts" === qQ || "/lib.d.ts" === qQ || qQ.startsWith("/node_modules/") || qQ.startsWith("/plugin-preview/") || wQ.has(qQ) || (WQ.delete(qQ), QQ.getSourceFile(qQ) && QQ.deleteFile(qQ))
          }(qQ, TQ, null !== OQ && void 0 !== OQ ? OQ : {
            [GQ.j]: XQ || "\n"
          }), MQ) return void CW(qQ, HW, XW || "\n");
        const zQ = null !== (QQ = null === (wQ = IW.current) || void 0 === wQ ? void 0 : wQ.state.doc.toString()) && void 0 !== QQ ? QQ : XQ;
        CW(qQ, HW, zQ || "\n")
      }), [OQ, KQ, sW, MQ, XW, HW, XQ, WQ]), (0, zQ.useEffect)((() => {
        if (!sW) return;
        const {
          Wy: QQ
        } = sW;
        CW(QQ, HW, (MQ ? XW : XQ) || "\n")
      }), [XQ, MQ, XW, HW, sW]), (0, zQ.useEffect)((() => () => {
        DW.current && (DW.current(), DW.current = null)
      }), []), (0, zQ.useEffect)((() => (wW(((QQ, WQ) => {
        if (MQ) return !1;
        const XQ = IW.current,
          wQ = jW.current,
          qQ = wQ ? (0, UQ.y)(wQ.docKey) : null;
        if (!XQ || !wQ || BW.current !== wQ.clientID || QQ !== qQ) return !1;
        const TQ = XQ.state.doc.toString();
        return TQ !== WQ && XQ.dispatch({
          changes: {
            from: 0,
            to: TQ.length,
            insert: WQ
          }
        }), !0
      })), () => {
        IW.current = null, BW.current = null, wW(null)
      })), [wW, MQ]);
      const aW = WQ ? MQ ? null : null !== KQ && void 0 !== KQ ? KQ : GQ.j : VW.c,
        lW = WW(IW, aW);
      qW(IW, jQ), (0, vQ.f)("FormatCode", (() => {
        if (!sW || !IW.current || MQ) return;
        const {
          Wy: QQ,
          fsMap: XQ
        } = sW, wQ = QQ.getSourceFile(HW).getFullText();
        let qQ = 0;
        if (WQ && OQ)
          for (const [WQ, sQ] of Object.entries(OQ)) WQ !== (null !== KQ && void 0 !== KQ ? KQ : GQ.j) && (qQ += sQ.length);
        const TQ = function(QQ, WQ, XQ, wQ, qQ) {
          const TQ = QQ.languageService.getFormattingEditsForDocument(wQ, oW);
          if (!TQ.length) return HQ.e.error("Code is already formatted.");
          TQ.sort(((QQ, WQ) => WQ.span.start - QQ.span.start));
          let zQ = QQ.getSourceFile(wQ).getFullText();
          for (const sQ of TQ) zQ = zQ.slice(0, sQ.span.start) + sQ.bF + zQ.slice(sQ.span.start + sQ.span.length);
          return zQ !== (XQ ? (0, bQ.m)(zQ, qQ) : (0, bQ.j)(zQ)) ? HQ.e.error("Formatting the code will go beyond the character limit.") : HQ.e.value(zQ)
        }(QQ, 0, WQ, HW, qQ);
        if (TQ.isError()) return void jQ({
          message: TQ.asError().message,
          type: "warning"
        });
        const zQ = TQ.getValue();
        zQ && (IW.current.dispatch({
          changes: {
            from: 0,
            to: wQ.length,
            insert: zQ
          },
          selection: {
            anchor: zQ.length
          }
        }), CW(QQ, HW, zQ), sQ(zQ))
      }));
      const hW = (0, zQ.useMemo)((() => {
        if (!sW) return [];
        const {
          Wy: QQ,
          fsMap: XQ
        } = sW;
        ! function(QQ, WQ, XQ, wQ) {
          if (QQ.getSourceFile(XQ)) return;
          const qQ = wQ || "\n";
          WQ.set(XQ, qQ), QQ.createFile(XQ, qQ)
        }(QQ, XQ, HW, (MQ ? dW.current : UW.current) || "\n");
        const zQ = WQ && uW(MQ ? null !== QW && void 0 !== QW ? QW : "index.ts" : KQ),
          sQ = [(0, qQ.c)({
            jsx: !1,
            typescript: zQ
          }), TQ.g.highest(TQ.d.domEventHandlers({
            keydown: QQ => "Escape" === QQ.key ? (GW.current(), QQ.stopPropagation(), !0) : (QQ.stopPropagation(), !1)
          })), (0, wQ.b)({
            override: [kW(QQ, HW)]
          }), hQ.q.fromClass(class {
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
                (0, LQ.bb)(this.view.state, QQ) || (0, LQ.H)(this.view, QQ, kQ) || this.scheduleParse()
              }), fQ))
            }
          }), ...mQ, TQ.d.lineWrapping, TQ.l.define({
            create: SW(QQ, nQ, HW),
            update(WQ, XQ) {
              const wQ = XQ.effects.some((QQ => QQ.is(eW)));
              return XQ.docChanged || XQ.selection || wQ ? (CW(QQ, HW, XQ.state.doc.toString() || " "), SW(QQ, nQ, HW)(XQ.state)) : WQ
            },
            provide: QQ => TQ.t.computeN([QQ], (WQ => WQ.field(QQ)))
          }), (0, TQ.q)(tW(QQ, HW)), (0, VQ.h)(LW(WQ, QQ, HW)), TQ.n.fromClass(class {
            constructor(QQ) {
              this.view = QQ, this.searchPanel = null
            }
            update(QQ) {
              const WQ = QQ.view.dom.querySelector(".cm-search");
              if (WQ !== this.searchPanel) {
                if (this.searchPanel = WQ, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (QQ => {
                  "Escape" === QQ.key && (0, yQ.c)(this.view), QQ.stopPropagation()
                }))
              }
            }
          })];
        TW && !MQ && sQ.push(bW(WQ ? null !== KQ && void 0 !== KQ ? KQ : GQ.j : VW.c, zW));
        const FQ = jW.current;
        if (FQ && !MQ) {
          sQ.push(... function(QQ, WQ, XQ, wQ, qQ) {
            let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const zQ = (0, UQ.y)(XQ),
              sQ = hQ.q.fromClass(class {
                constructor(QQ) {
                  this.view = QQ, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = AQ.k.subscribe("codeCollab", (QQ => {
                    QQ.docKey === zQ && QQ.type === UQ.f.Updates && (QQ.updates ? this.applyUpdates(QQ.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(QQ) {
                  const WQ = JSON.parse(QQ).map((QQ => ({
                    clientID: QQ.clientID,
                    changes: lQ.ChangeSet.fromJSON(QQ.changes)
                  })));
                  WQ.length > 0 && (this.view.dispatch((0, aQ.e)(this.view.state, WQ)), qQ && qQ(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(QQ) {
                  TQ && (QQ.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const QQ = (0, aQ.i)(this.view.state);
                  if (this.pushing || !QQ.length) return;
                  const WQ = Date.now() - this.lastPushTime;
                  if (WQ < uQ) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), uQ - WQ)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), EQ);
                  const XQ = (0, aQ.d)(this.view.state),
                    qQ = QQ.map((QQ => ({
                      clientID: QQ.clientID,
                      changes: QQ.changes.toJSON()
                    }))),
                    TQ = JSON.stringify(qQ);
                  TQ.length <= UQ.h ? iQ.gameBridge.send("sendCodeCollab", {
                    Zq: UQ.e.Push,
                    Oq: zQ,
                    Kq: XQ,
                    QT: TQ
                  }) : (0, RQ.postJsonWithMetricsCookiesAndJsonResponse)(`${wQ.gsUrl}/code/collab-push`, cQ.q["collab-push"].toBuffer({
                    gameNameWithVariation: wQ.gameNameWithVariation,
                    lobbyName: wQ.lobbyName,
                    docKey: zQ,
                    version: XQ,
                    updates: TQ
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
                  const QQ = (0, aQ.d)(this.view.state);
                  (0, RQ.postJsonWithMetricsCookiesAndJsonResponse)(`${wQ.gsUrl}/code/collab-pull`, cQ.q["collab-pull"].toBuffer({
                    gameNameWithVariation: wQ.gameNameWithVariation,
                    lobbyName: wQ.lobbyName,
                    docKey: zQ,
                    fromVersion: QQ
                  }), {
                    retries: 1
                  }).then((QQ => {
                    this.destroyed || (QQ.fullDoc ? AQ.k.mB("codeCollabRejoin", {
                      docKey: zQ,
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
                  if (QQ - this.lastCursorSent < CQ) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), CQ)));
                  this.lastCursorSent = QQ;
                  const WQ = this.view.state.selection.main;
                  iQ.gameBridge.send("sendCodeCollab", {
                    Zq: UQ.e.Cursor,
                    Oq: zQ,
                    qT: WQ.anchor,
                    TT: WQ.head
                  })
                }
                destroy() {
                  this.destroyed = !0, AQ.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, aQ.c)({
              startVersion: QQ,
              clientID: WQ
            }), sQ]
          }(PW, gW, FQ.docKey, FQ.httpConfig, (QQ => {
            var WQ;
            null === (WQ = rW.current) || void 0 === WQ || WQ.call(rW, QQ)
          }), rQ));
          const QQ = function(QQ, WQ) {
            const XQ = (0, UQ.y)(QQ);
            return {
              extensions: [YQ],
              connect(QQ) {
                if (WQ) {
                  const XQ = WQ.map((QQ => tQ.of({
                    playerId: QQ.playerId,
                    playerName: QQ.playerName,
                    colour: QQ.colour,
                    anchor: QQ.anchor,
                    head: QQ.head,
                    lastMoved: Date.now()
                  })));
                  XQ.length > 0 && QQ.dispatch({
                    effects: XQ
                  })
                }
                const wQ = AQ.k.subscribe("codeCollab", (WQ => {
                    if (WQ.docKey === XQ)
                      if (WQ.type === UQ.f.RemoteCursor) QQ.dispatch({
                        effects: tQ.of({
                          playerId: WQ.playerId,
                          playerName: WQ.playerName,
                          colour: WQ.colour,
                          anchor: WQ.anchor,
                          head: WQ.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (WQ.type === UQ.f.Presence) {
                      const XQ = JSON.parse(WQ.peers),
                        wQ = new Set(XQ.map((QQ => QQ.playerId))),
                        qQ = QQ.state.field(YQ),
                        TQ = [];
                      for (const [QQ] of qQ.cursors) wQ.has(QQ) || TQ.push(oQ.of(QQ));
                      TQ.length > 0 && QQ.dispatch({
                        effects: TQ
                      })
                    }
                  })),
                  qQ = setInterval((() => {
                    QQ.dom.isConnected ? QQ.dispatch({
                      effects: eQ.of(Date.now())
                    }) : clearInterval(qQ)
                  }), SQ);
                return () => {
                  AQ.k.unsubscribe(wQ), clearInterval(qQ)
                }
              }
            }
          }(FQ.docKey, FQ.existingCursors);
          sQ.push(...QQ.extensions), pW.current = QQ.connect
        } else pW.current = null;
        return sQ
      }), [WQ, sW, nQ, PW, gW, HW, KQ, MQ, QW, rQ, TW, zW]);
      if (!sW || !NQ && !MQ) return (0, vW.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, vW.jsx)(DQ.e, {})
      });
      const iW = MQ ? `plugin-${MQ}-${null!==QW&&void 0!==QW?QW:"index.ts"}` : NQ ? `collab-${NQ.clientID}` : `local-${WQ}`;
      return (0, vW.jsx)(TQ.p, {
        value: MQ ? null !== XW && void 0 !== XW ? XW : "" : XQ,
        onChange: sQ,
        extensions: hW,
        className: "CodeEditorContent",
        theme: xQ ? yW : "dark",
        editable: rQ && !MQ,
        basicSetup: nW,
        onCreateEditor: QQ => {
          var WQ;
          IW.current = QQ, BW.current = null !== (WQ = null === NQ || void 0 === NQ ? void 0 : NQ.clientID) && void 0 !== WQ ? WQ : null, lW(QQ), DW.current && DW.current(), pW.current && (DW.current = pW.current(QQ))
        }
      }, iW)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);