export const id = 273;
export const ids = [273];
export const modules = {
  40047: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => Hc
    });
    var FJ = ZJ(40052),
      UJ = ZJ(40090),
      eJ = ZJ(40092),
      XJ = ZJ(47),
      AJ = ZJ(60),
      qJ = ZJ(40103),
      jJ = ZJ(40107),
      YJ = ZJ(4153),
      hJ = ZJ(40111),
      DJ = ZJ(1675),
      sJ = ZJ(40118),
      nJ = ZJ(40138),
      GJ = ZJ.n(nJ),
      fJ = ZJ(40094),
      xJ = ZJ(40097),
      rJ = ZJ(1232),
      vJ = ZJ(35877),
      mJ = ZJ(1137),
      QJ = ZJ(35886),
      EJ = ZJ(35781),
      VJ = ZJ(1326),
      KJ = ZJ(535),
      yJ = ZJ(1144),
      SJ = ZJ(40189),
      IJ = ZJ(40060),
      MJ = ZJ(40065),
      bJ = ZJ(1703),
      wJ = ZJ(3242),
      WJ = ZJ(17),
      gJ = ZJ(1028);
    const HJ = 1e4,
      PJ = 250,
      kJ = 250;
    var pJ = ZJ(40078);
    const dJ = 50,
      zJ = 100;
    const NJ = 2e3,
      OJ = IJ.A.define(),
      TJ = IJ.A.define(),
      CJ = IJ.A.define();
    class uJ extends MJ.l {
      constructor(JJ, cJ, ZJ) {
        super(), this.colour = JJ, this.playerName = cJ, this.showName = ZJ
      }
      toDOM() {
        const JJ = document.createElement("span");
        JJ.className = "cm-remote-cursor-wrapper", JJ.style.borderLeftColor = this.colour;
        const cJ = document.createElement("span");
        if (cJ.className = "cm-remote-cursor", cJ.style.borderLeftColor = this.colour, JJ.appendChild(cJ), this.showName) {
          const cJ = document.createElement("span");
          cJ.className = "cm-remote-cursor-name", cJ.style.backgroundColor = this.colour, cJ.textContent = this.playerName, JJ.appendChild(cJ)
        }
        return JJ
      }
      eq(JJ) {
        return this.colour === JJ.colour && this.playerName === JJ.playerName && this.showName === JJ.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function iJ(JJ, cJ) {
      const ZJ = [],
        FJ = [];
      for (const [, XJ] of JJ) {
        const JJ = cJ - XJ.lastMoved < NJ;
        if (ZJ.push({
            pos: XJ.head,
            decoration: MJ.c.widget({
              widget: new uJ(XJ.colour, XJ.playerName, JJ),
              side: 1
            })
          }), XJ.anchor !== XJ.head) {
          const JJ = Math.min(XJ.anchor, XJ.head),
            cJ = Math.max(XJ.anchor, XJ.head);
          FJ.push({
            from: JJ,
            to: cJ,
            decoration: MJ.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${XJ.colour}33`
              }
            })
          })
        }
      }
      const UJ = new IJ.u,
        eJ = [];
      for (const XJ of ZJ) eJ.push({
        bias: 1,
        deco: XJ.decoration,
        from: XJ.pos,
        to: XJ.pos
      });
      for (const XJ of FJ) eJ.push({
        bias: 0,
        deco: XJ.decoration,
        from: XJ.from,
        to: XJ.to
      });
      eJ.sort(((JJ, cJ) => JJ.from - cJ.from || JJ.deco.startSide - cJ.deco.startSide || JJ.bias - cJ.bias));
      for (const XJ of eJ) UJ.add(XJ.from, XJ.to, XJ.deco);
      return UJ.finish()
    }
    const RJ = IJ.E.define({
      create: () => ({
        cursors: new Map,
        je: MJ.c.none
      }),
      update(JJ, cJ) {
        let ZJ = JJ.cursors,
          FJ = !1;
        if (cJ.docChanged) {
          const JJ = new Map;
          for (const [FJ, UJ] of ZJ) JJ.set(FJ, {
            ...UJ,
            anchor: cJ.changes.mapPos(UJ.anchor, 1),
            head: cJ.changes.mapPos(UJ.head, 1)
          });
          ZJ = JJ, FJ = !0
        }
        for (const UJ of cJ.effects)
          if (UJ.is(OJ)) {
            if (!Number.isInteger(UJ.value.anchor) || !Number.isInteger(UJ.value.head)) {
              console.warn(`Code Editor: ignored player ${UJ.value.playerId}'s cursor at ${UJ.value.anchor}-${UJ.value.head}`);
              continue
            }
            const eJ = cJ.state.doc.length,
              XJ = {
                ...UJ.value,
                anchor: Math.min(UJ.value.anchor, eJ),
                head: Math.min(UJ.value.head, eJ)
              };
            ZJ === JJ.cursors && (ZJ = new Map(ZJ)), ZJ.set(XJ.playerId, XJ), FJ = !0
          } else UJ.is(TJ) ? ZJ.has(UJ.value) && (ZJ === JJ.cursors && (ZJ = new Map(ZJ)), ZJ.delete(UJ.value), FJ = !0) : UJ.is(CJ) && (FJ = !0);
        return FJ ? {
          cursors: ZJ,
          je: iJ(ZJ, Date.now())
        } : JJ
      },
      provide: JJ => MJ.f.je.from(JJ, (JJ => JJ.je))
    });
    var LJ = ZJ(40084);
    const aJ = "#e45649",
      BJ = "#383a42",
      tJ = "#696c77",
      oJ = "#986801",
      lJ = "#e5e5e6",
      Jc = "#fafafa",
      cc = "#eaeaeb",
      Zc = "#526fff",
      Fc = MJ.f.theme({
        "&": {
          color: BJ,
          backgroundColor: Jc
        },
        ".cm-content": {
          caretColor: Zc
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Zc
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: BJ
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
          backgroundColor: Jc,
          color: tJ,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: lJ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: cc
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: cc,
          borderBottomColor: cc
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: lJ,
            color: BJ
          }
        }
      }, {
        dark: !1
      }),
      Uc = pJ.c.define([{
        tag: LJ.j.keyword,
        color: "#a626a4"
      }, {
        tag: [LJ.j.name, LJ.j.deleted, LJ.j.character, LJ.j.propertyName, LJ.j.macroName],
        color: aJ
      }, {
        tag: [LJ.j.function(LJ.j.variableName), LJ.j.labelName],
        color: "#4078f2"
      }, {
        tag: [LJ.j.color, LJ.j.constant(LJ.j.name), LJ.j.standard(LJ.j.name)],
        color: oJ
      }, {
        tag: [LJ.j.definition(LJ.j.name), LJ.j.separator],
        color: BJ
      }, {
        tag: [LJ.j.typeName, LJ.j.className, LJ.j.number, LJ.j.changed, LJ.j.annotation, LJ.j.modifier, LJ.j.self, LJ.j.namespace],
        color: "#c18401"
      }, {
        tag: [LJ.j.operator, LJ.j.operatorKeyword, LJ.j.url, LJ.j.escape, LJ.j.regexp, LJ.j.link, LJ.j.special(LJ.j.string)],
        color: "#0184bc"
      }, {
        tag: [LJ.j.meta, LJ.j.comment],
        color: tJ
      }, {
        tag: LJ.j.strong,
        fontWeight: "bold"
      }, {
        tag: LJ.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: LJ.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: LJ.j.link,
        color: tJ,
        textDecoration: "underline"
      }, {
        tag: LJ.j.heading,
        fontWeight: "bold",
        color: aJ
      }, {
        tag: [LJ.j.atom, LJ.j.bool, LJ.j.special(LJ.j.variableName)],
        color: oJ
      }, {
        tag: [LJ.j.processingInstruction, LJ.j.string, LJ.j.inserted],
        color: "#50a14f"
      }, {
        tag: LJ.j.invalid,
        color: "#000000"
      }]),
      ec = [Fc, (0, pJ.nb)(Uc)];
    var Xc = ZJ(35915),
      Ac = ZJ(40197);
    const qc = eJ.h.define(),
      jc = eJ.k.define({
        create: () => !1,
        update(JJ, cJ) {
          for (const ZJ of cJ.effects) ZJ.is(qc) && (JJ = ZJ.value);
          return JJ
        }
      }),
      Yc = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function hc(JJ, cJ) {
      return [jc, eJ.n.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.onDown = JJ => {
            const cJ = JJ.target instanceof Element && null !== JJ.target.closest(".cm-tooltip");
            0 !== JJ.button || cJ || this.view.state.field(jc) || this.view.dispatch({
              effects: qc.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(jc) && this.view.dispatch({
              effects: qc.of(!1)
            })
          }, JJ.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), eJ.t.compute(["selection", jc], (ZJ => function(JJ, cJ, ZJ) {
        const FJ = JJ.selection.main;
        return FJ.empty || JJ.field(jc) || JJ.sliceDoc(FJ.from, FJ.to).trim().length < 2 ? null : {
          pos: FJ.from,
          above: !0,
          create: JJ => {
            const FJ = document.createElement("div");
            FJ.className = "CodeSelectionActions", FJ.setAttribute("role", "toolbar"), FJ.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: UJ,
                label: eJ
              }
              of Yc) {
              if (!ZJ && "explain" !== UJ) continue;
              const XJ = document.createElement("button");
              XJ.type = "button", XJ.textContent = eJ, "change" !== UJ && (XJ.title = Ac.c, XJ.dataset.asksAi = "true"), XJ.addEventListener("mousedown", (JJ => {
                JJ.preventDefault()
              })), XJ.addEventListener("click", (() => {
                const ZJ = JJ.state.selection.main;
                if (ZJ.empty) return;
                const FJ = {
                  action: UJ,
                  path: cJ,
                  fromLine: JJ.state.doc.lineAt(ZJ.from).number,
                  toLine: JJ.state.doc.lineAt(ZJ.to > ZJ.from && JJ.state.doc.lineAt(ZJ.to).from === ZJ.to ? ZJ.to - 1 : ZJ.to).number,
                  text: JJ.state.sliceDoc(ZJ.from, ZJ.to)
                };
                WJ.i.Uf("WorldCodeAiSelection", FJ), JJ.dispatch({
                  selection: {
                    anchor: ZJ.to
                  }
                })
              })), FJ.appendChild(XJ)
            }
            return {
              dom: FJ
            }
          }
        }
      }(ZJ, JJ, cJ)))]
    }
    var Dc = ZJ(990);
    const sc = new Set(["(", "{", "[", "<"]),
      nc = new Set([")", "}", "]", ">"]),
      Gc = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function fc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function ZJ(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = [];
        for (const UJ of JJ) {
          let JJ;
          JJ = "punctuation" === UJ.kind ? Gc.text : "parameterName" === UJ.kind ? Gc.parameterName : cJ, FJ.push({
            str: UJ.text,
            style: {
              color: JJ,
              opacity: ZJ ? .5 : void 0
            }
          })
        }
        return FJ
      }
      const FJ = [];
      if (FJ.push(...ZJ(JJ.prefixDisplayParts, Gc.text)), JJ.parameters.length > 0) {
        FJ.push("\n");
        for (let UJ = 0; UJ < JJ.parameters.length; UJ++) {
          const eJ = JJ.parameters[UJ];
          FJ.push("\t"), FJ.push(...ZJ(eJ.displayParts, Gc.parameter, null !== cJ && UJ !== cJ)), FJ.push("\n")
        }
      }
      return FJ.push(...ZJ(JJ.suffixDisplayParts, Gc.suffix)), JJ.documentation && (FJ.push("\n\n"), FJ.push(...ZJ(JJ.documentation, Gc.docs))), FJ
    }
    var xc = function(JJ) {
      return JJ[JJ.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", JJ[JJ.DuplicateIdentifier = 2300] = "DuplicateIdentifier", JJ
    }(xc || {});
    const rc = new Set([xc.DuplicateIdentifier]),
      vc = new Set([xc.VariableDefinedElsewhere]),
      mc = new Set([]),
      Qc = "/index.js";

    function Ec(JJ) {
      return "/" + JJ
    }

    function Vc(JJ, cJ, ZJ) {
      JJ.getSourceFile(cJ) && JJ.deleteFile(cJ), JJ.createFile(cJ, ZJ)
    }

    function Kc(JJ) {
      return !!JJ && ((0, QJ.r)(JJ) || (0, QJ.p)(JJ))
    }

    function yc(JJ, cJ, ZJ) {
      return () => {
        let FJ = [...cJ.languageService.getSemanticDiagnostics(ZJ), ...cJ.languageService.getSyntacticDiagnostics(ZJ)];
        return FJ = FJ.filter((JJ => !(0, KJ.P)(JJ.start) && !(0, KJ.P)(JJ.length) && !rc.has(JJ.code))), JJ || (FJ = FJ.filter((JJ => !vc.has(JJ.code)))), FJ.map((JJ => ({
          from: JJ.start,
          to: JJ.start + JJ.length,
          message: "string" === typeof JJ.messageText ? JJ.messageText : JJ.messageText.messageText,
          severity: mc.has(JJ.code) ? "warning" : "error"
        })))
      }
    }

    function Sc(JJ, cJ) {
      return ZJ => {
        var FJ, UJ;
        const eJ = JJ.languageService.getCompletionsAtPosition(cJ, ZJ.pos, {});
        if (!eJ) return {
          from: ZJ.pos,
          options: []
        };
        let XJ = null !== (FJ = null === (UJ = eJ.optionalReplacementSpan) || void 0 === UJ ? void 0 : UJ.start) && void 0 !== FJ ? FJ : ZJ.pos;
        if (!eJ.optionalReplacementSpan) {
          const JJ = ZJ.state.doc.sliceString(0, ZJ.pos);
          for (; XJ > 0 && /[\w$]/.test(JJ[XJ - 1]);) XJ--
        }
        return eJ.entries = eJ.entries.filter((JJ => JJ.kind !== GJ().ScriptElementKind.warning)), {
          from: XJ,
          options: eJ.entries.map((FJ => {
            var UJ, eJ, AJ, qJ;
            const jJ = JJ.languageService.getCompletionEntryDetails(cJ, ZJ.pos, FJ.name, {}, FJ.source, {}, FJ.data),
              YJ = null !== (UJ = null === (eJ = FJ.replacementSpan) || void 0 === eJ ? void 0 : eJ.start) && void 0 !== UJ ? UJ : XJ,
              hJ = FJ.replacementSpan ? FJ.replacementSpan.start + FJ.replacementSpan.length : ZJ.pos,
              DJ = null !== (AJ = FJ.insertText) && void 0 !== AJ ? AJ : FJ.name;
            return {
              label: FJ.name,
              detail: null === jJ || void 0 === jJ ? void 0 : jJ.displayParts.map((JJ => JJ.text)).join(""),
              info: null === jJ || void 0 === jJ || null === (qJ = jJ.documentation) || void 0 === qJ ? void 0 : qJ.map((JJ => JJ.text)).join(""),
              apply: JJ => {
                JJ.dispatch({
                  changes: {
                    from: YJ,
                    to: hJ,
                    insert: DJ
                  },
                  selection: {
                    anchor: YJ + DJ.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Ic(JJ) {
      return cJ => {
        const ZJ = document.createElement("div");
        ZJ.className = "CodeEditorTooltip";
        let FJ = !1;
        return queueMicrotask((() => {
          FJ || (AJ.render((0, Dc.jsx)(DJ.d, {
            text: JJ
          }), ZJ), cJ.requestMeasure())
        })), {
          dom: ZJ,
          destroy() {
            FJ = !0, queueMicrotask((() => {
              AJ.unmountComponentAtNode(ZJ)
            }))
          }
        }
      }
    }

    function Mc(JJ, cJ, ZJ) {
      return FJ => {
        var UJ;
        if (!cJ) return [];
        const eJ = null === (UJ = FJ.selection.ws[0]) || void 0 === UJ ? void 0 : UJ.head;
        if (void 0 === eJ) return [];
        const XJ = JJ.languageService.getSignatureHelpItems(ZJ, eJ, {});
        if (!XJ || !XJ.items.length) return [];
        const AJ = XJ.applicableSpan.start - XJ.items[0].prefixDisplayParts.map((JJ => JJ.text)).join("").length,
          qJ = XJ.applicableSpan.start,
          jJ = FJ.doc.lineAt(eJ),
          YJ = jJ.from,
          hJ = Math.min(jJ.to, eJ);
        let DJ, sJ;
        return AJ < YJ ? (DJ = YJ, sJ = hJ) : (DJ = AJ, sJ = qJ), [{
          pos: DJ,
          end: sJ,
          above: !1,
          create: Ic(fc(XJ.items[0], XJ.argumentIndex))
        }]
      }
    }

    function bc(JJ, cJ) {
      return (ZJ, FJ, UJ) => {
        const eJ = JJ.languageService.getQuickInfoAtPosition(cJ, FJ);
        if (!eJ) return [];
        const XJ = eJ.textSpan.start,
          AJ = eJ.textSpan.start + eJ.textSpan.length;
        if (FJ < XJ || FJ >= AJ) return [];
        if (eJ.kind === GJ().ScriptElementKind.memberFunctionElement || eJ.kind === GJ().ScriptElementKind.variableElement && "declare" === eJ.kindModifiers) {
          const JJ = eJ.displayParts.findIndex((JJ => "space" === JJ.kind)); - 1 !== JJ && (eJ.displayParts = eJ.displayParts.slice(JJ));
          const cJ = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            ZJ = eJ.displayParts.findIndex((JJ => "punctuation" === JJ.kind && "(" === JJ.text)); - 1 !== ZJ && (cJ.prefixDisplayParts = eJ.displayParts.slice(0, ZJ + 1), eJ.displayParts = eJ.displayParts.slice(ZJ + 1));
          const FJ = eJ.displayParts.findLastIndex((JJ => "punctuation" === JJ.kind && ")" === JJ.text)); - 1 !== FJ && (cJ.suffixDisplayParts = eJ.displayParts.slice(FJ), eJ.displayParts = eJ.displayParts.slice(0, FJ));
          let UJ = 0,
            qJ = [];
          for (const XJ of eJ.displayParts)
            if (sc.has(XJ.text) ? UJ++ : nc.has(XJ.text) && UJ--, "lineBreak" !== XJ.kind) {
              if ("space" === XJ.kind) {
                if (0 === qJ.length) continue;
                qJ.push({
                  kind: "space",
                  text: " "
                })
              } else qJ.push(XJ);
              0 === UJ && "," === XJ.text && (cJ.parameters.push({
                displayParts: qJ
              }), qJ = [])
            } return qJ.length > 0 && cJ.parameters.push({
            displayParts: qJ
          }), cJ.documentation = eJ.documentation, [{
            pos: XJ,
            end: AJ,
            above: !0,
            create: Ic(fc(cJ))
          }]
        }
        const qJ = [];
        for (const JJ of eJ.displayParts) qJ.push({
          str: JJ.text,
          style: {
            color: Gc.text
          }
        });
        if (eJ.documentation) {
          qJ.push("\n\n");
          for (const JJ of eJ.documentation) qJ.push({
            str: JJ.text,
            style: {
              color: Gc.docs
            }
          })
        }
        return [{
          pos: XJ,
          end: AJ,
          above: !0,
          create: Ic(qJ)
        }]
      }
    }
    const wc = {
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
      semicolons: GJ().SemicolonPreference.Insert
    };
    const Wc = eJ.h.define(),
      gc = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Hc(JJ) {
      let {
        isLobbyCode: cJ,
        code: ZJ,
        onChange: AJ,
        canEditCode: DJ,
        setTemporaryMessage: nJ,
        close: KJ,
        showTooltips: uJ,
        lightMode: iJ,
        collabState: LJ,
        onRemoteDocChange: aJ,
        files: BJ,
        activePath: tJ,
        pluginName: oJ,
        pluginFile: lJ,
        pluginSource: Jc,
        setActiveDocReplacer: cc,
        showAiHints: Zc,
        canAiChangeCode: Fc = DJ
      } = JJ;
      const [Uc, Ac] = (0, XJ.useState)(null), qc = null === LJ || void 0 === LJ ? void 0 : LJ.version, jc = null === LJ || void 0 === LJ ? void 0 : LJ.clientID, Yc = (0, XJ.useRef)({
        isLobbyCode: cJ,
        files: BJ,
        code: ZJ,
        activePath: tJ
      }), sc = (0, XJ.useRef)(aJ);
      sc.current = aJ;
      const nc = (0, XJ.useRef)(null),
        Gc = (0, XJ.useRef)(LJ);
      Gc.current = LJ;
      const fc = (0, XJ.useRef)(null),
        xc = (0, XJ.useRef)(null),
        rc = (0, XJ.useRef)(null),
        vc = (0, XJ.useRef)(KJ);
      vc.current = KJ;
      const mc = (0, XJ.useRef)(ZJ);
      mc.current = ZJ;
      const Ic = (0, XJ.useRef)(Jc);
      Ic.current = Jc;
      const Hc = function(JJ, cJ, ZJ, FJ) {
        return ZJ ? `/plugin-preview/${ZJ}/${null!==FJ&&void 0!==FJ?FJ:"index.ts"}` : JJ ? Ec(null !== cJ && void 0 !== cJ ? cJ : mJ.g) : Qc
      }(cJ, tJ, oJ, lJ);
      (0, XJ.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: JJ,
            files: cJ,
            code: ZJ,
            activePath: FJ
          } = Yc.current, UJ = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: GJ().ModuleKind.ESNext,
            moduleResolution: GJ().ModuleResolutionKind.Bundler,
            target: GJ().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(vJ.g).map((JJ => [JJ.specifier, [JJ.typesVfsPath]])))
            }
          }, eJ = new Map, XJ = [];
          if (JJ) {
            const JJ = null !== cJ && void 0 !== cJ ? cJ : {
              [mJ.g]: ZJ || "\n"
            };
            for (const [cJ, ZJ] of Object.entries(JJ)) {
              const JJ = Ec(cJ);
              eJ.set(JJ, ZJ || "\n"), XJ.push(JJ)
            }
            const UJ = Ec(null !== FJ && void 0 !== FJ ? FJ : mJ.g);
            eJ.has(UJ) ? eJ.set(UJ, ZJ || "\n") : (eJ.set(UJ, ZJ || "\n"), XJ.push(UJ)), eJ.set("/node_modules/@bloxd/index.d.ts", YJ.default), XJ.push("/node_modules/@bloxd/index.d.ts");
            for (const cJ of Object.values(vJ.g)) {
              eJ.set(cJ.typesVfsPath, cJ.types), XJ.push(cJ.typesVfsPath);
              for (const [JJ, ZJ] of Object.entries(cJ.files)) {
                const FJ = `/plugin-preview/${cJ.name}/${JJ}`;
                eJ.set(FJ, ZJ || "\n"), XJ.push(FJ)
              }
            }
          } else eJ.set(Qc, ZJ || "\n"), XJ.push(Qc);
          eJ.set("/globals.d.ts", JJ ? jJ.e : qJ.c), eJ.set("/lib.d.ts", hJ.e), XJ.push("/globals.d.ts", "/lib.d.ts");
          const AJ = sJ.b(eJ),
            DJ = sJ.c(AJ, XJ, GJ(), UJ);
          Ac({
            ef: DJ,
            fsMap: eJ
          })
        }()
      }), []), (0, XJ.useEffect)((() => {
        var JJ, FJ;
        if (!Uc || !cJ) return;
        const {
          ef: UJ,
          fsMap: eJ
        } = Uc;
        if (function(JJ, cJ, ZJ) {
            const FJ = new Set;
            for (const [UJ, eJ] of Object.entries(ZJ)) {
              const ZJ = Ec(UJ);
              FJ.add(ZJ);
              const XJ = eJ || "\n";
              cJ.get(ZJ) !== XJ && (cJ.set(ZJ, XJ), Vc(JJ, ZJ, XJ))
            }
            for (const UJ of [...cJ.keys()]) "/globals.d.ts" === UJ || "/lib.d.ts" === UJ || UJ.startsWith("/node_modules/") || UJ.startsWith("/plugin-preview/") || FJ.has(UJ) || (cJ.delete(UJ), JJ.getSourceFile(UJ) && JJ.deleteFile(UJ))
          }(UJ, eJ, null !== BJ && void 0 !== BJ ? BJ : {
            [mJ.g]: ZJ || "\n"
          }), oJ) return void Vc(UJ, Hc, Jc || "\n");
        const XJ = null !== (JJ = null === (FJ = nc.current) || void 0 === FJ ? void 0 : FJ.state.doc.toString()) && void 0 !== JJ ? JJ : ZJ;
        Vc(UJ, Hc, XJ || "\n")
      }), [BJ, tJ, Uc, oJ, Jc, Hc, ZJ, cJ]), (0, XJ.useEffect)((() => {
        if (!Uc) return;
        const {
          ef: JJ
        } = Uc;
        Vc(JJ, Hc, (oJ ? Jc : ZJ) || "\n")
      }), [ZJ, oJ, Jc, Hc, Uc]), (0, XJ.useEffect)((() => () => {
        xc.current && (xc.current(), xc.current = null)
      }), []), (0, XJ.useEffect)((() => (cc(((JJ, cJ) => {
        if (oJ) return !1;
        const ZJ = nc.current,
          FJ = Gc.current,
          UJ = FJ ? (0, QJ.x)(FJ.docKey) : null;
        if (!ZJ || !FJ || fc.current !== FJ.clientID || JJ !== UJ) return !1;
        const eJ = ZJ.state.doc.toString();
        return eJ !== cJ && ZJ.dispatch({
          changes: {
            from: 0,
            to: eJ.length,
            insert: cJ
          }
        }), !0
      })), () => {
        nc.current = null, fc.current = null, cc(null)
      })), [cc, oJ]);
      const Pc = cJ ? oJ ? null : null !== tJ && void 0 !== tJ ? tJ : mJ.g : Xc.d,
        kc = function(JJ, cJ) {
          const ZJ = (0, XJ.useRef)(null);
          (0, XJ.useEffect)((() => {
            var JJ;
            (null === (JJ = ZJ.current) || void 0 === JJ ? void 0 : JJ.path) !== cJ && (ZJ.current = null)
          }), [cJ]);
          const FJ = JJ => {
            const FJ = ZJ.current;
            if (null === JJ || void 0 === JJ || !JJ.dom.isConnected || !FJ || FJ.path !== cJ) return;
            ZJ.current = null;
            const {
              doc: UJ
            } = JJ.state, {
              from: XJ
            } = UJ.line(Math.min(Math.max(FJ.line, 1), UJ.lines));
            JJ.dispatch({
              selection: {
                anchor: XJ
              },
              effects: eJ.b.scrollIntoView(XJ, {
                y: "center"
              })
            }), JJ.focus()
          };
          return (0, VJ.i)("CodeEditorGoToLine", (cJ => {
            ZJ.current = cJ, FJ(JJ.current)
          })), FJ
        }(nc, Pc);
      (0, VJ.i)("FormatCode", (() => {
        if (!Uc || !nc.current || oJ) return;
        const {
          ef: JJ,
          fsMap: ZJ
        } = Uc, FJ = JJ.getSourceFile(Hc).getFullText();
        let UJ = 0;
        if (cJ && BJ)
          for (const [cJ, AJ] of Object.entries(BJ)) cJ !== (null !== tJ && void 0 !== tJ ? tJ : mJ.g) && (UJ += AJ.length);
        const eJ = function(JJ, cJ, ZJ, FJ, UJ) {
          const eJ = JJ.languageService.getFormattingEditsForDocument(FJ, wc);
          if (!eJ.length) return yJ.b.error("Code is already formatted.");
          eJ.sort(((JJ, cJ) => cJ.span.start - JJ.span.start));
          let XJ = JJ.getSourceFile(FJ).getFullText();
          for (const AJ of eJ) XJ = XJ.slice(0, AJ.span.start) + AJ.Cj + XJ.slice(AJ.span.start + AJ.span.length);
          return XJ !== (ZJ ? (0, EJ.j)(XJ, UJ) : (0, EJ.f)(XJ)) ? yJ.b.error("Formatting the code will go beyond the character limit.") : yJ.b.value(XJ)
        }(JJ, 0, cJ, Hc, UJ);
        if (eJ.isError()) return void nJ({
          message: eJ.asError().message,
          type: "warning"
        });
        const XJ = eJ.getValue();
        XJ && (nc.current.dispatch({
          changes: {
            from: 0,
            to: FJ.length,
            insert: XJ
          },
          selection: {
            anchor: XJ.length
          }
        }), Vc(JJ, Hc, XJ), AJ(XJ))
      }));
      const pc = (0, XJ.useMemo)((() => {
        if (!Uc) return [];
        const {
          ef: JJ,
          fsMap: ZJ
        } = Uc;
        ! function(JJ, cJ, ZJ, FJ) {
          if (JJ.getSourceFile(ZJ)) return;
          const UJ = FJ || "\n";
          cJ.set(ZJ, UJ), JJ.createFile(ZJ, UJ)
        }(JJ, ZJ, Hc, (oJ ? Ic.current : mc.current) || "\n");
        const XJ = cJ && Kc(oJ ? null !== lJ && void 0 !== lJ ? lJ : "index.ts" : tJ),
          AJ = [(0, UJ.c)({
            jsx: !1,
            typescript: XJ
          }), eJ.e.highest(eJ.b.domEventHandlers({
            keydown: JJ => "Escape" === JJ.key ? (vc.current(), JJ.stopPropagation(), !0) : (JJ.stopPropagation(), !1)
          })), (0, FJ.e)({
            override: [Sc(JJ, Hc)]
          }), MJ.k.fromClass(class {
            constructor(JJ) {
              this.view = JJ, this.timeout = null, this.scheduleParse()
            }
            update(JJ) {
              (JJ.docChanged || JJ.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const JJ = this.view.viewport.to;
                (0, pJ.qb)(this.view.state, JJ) || (0, pJ.P)(this.view, JJ, dJ) || this.scheduleParse()
              }), zJ))
            }
          }), eJ.b.lineWrapping, eJ.k.define({
            create: Mc(JJ, uJ, Hc),
            update(cJ, ZJ) {
              const FJ = ZJ.effects.some((JJ => JJ.is(Wc)));
              return ZJ.docChanged || ZJ.selection || FJ ? (Vc(JJ, Hc, ZJ.state.doc.toString() || " "), Mc(JJ, uJ, Hc)(ZJ.state)) : cJ
            },
            provide: JJ => eJ.t.computeN([JJ], (cJ => cJ.field(JJ)))
          }), (0, eJ.s)(bc(JJ, Hc)), (0, xJ.e)(yc(cJ, JJ, Hc)), eJ.n.fromClass(class {
            constructor(JJ) {
              this.view = JJ, this.searchPanel = null
            }
            update(JJ) {
              const cJ = JJ.view.dom.querySelector(".cm-search");
              if (cJ !== this.searchPanel) {
                if (this.searchPanel = cJ, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (JJ => {
                  "Escape" === JJ.key && (0, fJ.c)(this.view), JJ.stopPropagation()
                }))
              }
            }
          })];
        Zc && !oJ && AJ.push(hc(cJ ? null !== tJ && void 0 !== tJ ? tJ : mJ.g : Xc.d, Fc));
        const qJ = Gc.current;
        if (qJ && !oJ) {
          AJ.push(... function(JJ, cJ, ZJ, FJ, UJ) {
            let eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const XJ = (0, QJ.x)(ZJ),
              AJ = MJ.k.fromClass(class {
                constructor(JJ) {
                  this.view = JJ, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = WJ.i.subscribe("codeCollab", (JJ => {
                    JJ.docKey === XJ && JJ.type === QJ.g.Updates && (JJ.updates ? this.applyUpdates(JJ.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(JJ) {
                  const cJ = JSON.parse(JJ).map((JJ => ({
                    clientID: JJ.clientID,
                    changes: IJ.ChangeSet.fromJSON(JJ.changes)
                  })));
                  cJ.length > 0 && (this.view.dispatch((0, SJ.f)(this.view.state, cJ)), UJ && UJ(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(JJ) {
                  eJ && (JJ.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const JJ = (0, SJ.i)(this.view.state);
                  if (this.pushing || !JJ.length) return;
                  const cJ = Date.now() - this.lastPushTime;
                  if (cJ < kJ) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), kJ - cJ)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), HJ);
                  const ZJ = (0, SJ.d)(this.view.state),
                    UJ = JJ.map((JJ => ({
                      clientID: JJ.clientID,
                      changes: JJ.changes.toJSON()
                    }))),
                    eJ = JSON.stringify(UJ);
                  eJ.length <= QJ.k ? bJ.gameBridge.send("sendCodeCollab", {
                    JJ: QJ.e.Push,
                    cJ: XJ,
                    ZJ: ZJ,
                    eJ: eJ
                  }) : (0, gJ.postJsonWithMetricsCookiesAndJsonResponse)(`${FJ.gsUrl}/code/collab-push`, wJ.l["collab-push"].toBuffer({
                    gameNameWithVariation: FJ.gameNameWithVariation,
                    lobbyName: FJ.lobbyName,
                    docKey: XJ,
                    version: ZJ,
                    updates: eJ
                  }), {
                    retries: 0
                  }).catch((JJ => {
                    console.error("[CodeCollab] HTTP push failed", JJ)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const JJ = (0, SJ.d)(this.view.state);
                  (0, gJ.postJsonWithMetricsCookiesAndJsonResponse)(`${FJ.gsUrl}/code/collab-pull`, wJ.l["collab-pull"].toBuffer({
                    gameNameWithVariation: FJ.gameNameWithVariation,
                    lobbyName: FJ.lobbyName,
                    docKey: XJ,
                    fromVersion: JJ
                  }), {
                    retries: 1
                  }).then((JJ => {
                    this.destroyed || (JJ.fullDoc ? WJ.i.Uf("codeCollabRejoin", {
                      docKey: XJ,
                      doc: JJ.fullDoc,
                      version: JJ.version
                    }) : this.applyUpdates(JJ.updates))
                  })).catch((JJ => {
                    console.error("[CodeCollab] Pull failed", JJ)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const JJ = Date.now();
                  if (JJ - this.lastCursorSent < PJ) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), PJ)));
                  this.lastCursorSent = JJ;
                  const cJ = this.view.state.selection.main;
                  bJ.gameBridge.send("sendCodeCollab", {
                    JJ: QJ.e.Cursor,
                    cJ: XJ,
                    jJ: cJ.anchor,
                    YJ: cJ.head
                  })
                }
                destroy() {
                  this.destroyed = !0, WJ.i.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, SJ.b)({
              startVersion: JJ,
              clientID: cJ
            }), AJ]
          }(qc, jc, qJ.docKey, qJ.httpConfig, (JJ => {
            var cJ;
            null === (cJ = sc.current) || void 0 === cJ || cJ.call(sc, JJ)
          }), DJ));
          const JJ = function(JJ, cJ) {
            const ZJ = (0, QJ.x)(JJ);
            return {
              extensions: [RJ],
              connect(JJ) {
                if (cJ) {
                  const ZJ = cJ.map((JJ => OJ.of({
                    playerId: JJ.playerId,
                    playerName: JJ.playerName,
                    colour: JJ.colour,
                    anchor: JJ.anchor,
                    head: JJ.head,
                    lastMoved: Date.now()
                  })));
                  ZJ.length > 0 && JJ.dispatch({
                    effects: ZJ
                  })
                }
                const FJ = WJ.i.subscribe("codeCollab", (cJ => {
                    if (cJ.docKey === ZJ)
                      if (cJ.type === QJ.g.RemoteCursor) JJ.dispatch({
                        effects: OJ.of({
                          playerId: cJ.playerId,
                          playerName: cJ.playerName,
                          colour: cJ.colour,
                          anchor: cJ.anchor,
                          head: cJ.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (cJ.type === QJ.g.Presence) {
                      const ZJ = JSON.parse(cJ.peers),
                        FJ = new Set(ZJ.map((JJ => JJ.playerId))),
                        UJ = JJ.state.field(RJ),
                        eJ = [];
                      for (const [JJ] of UJ.cursors) FJ.has(JJ) || eJ.push(TJ.of(JJ));
                      eJ.length > 0 && JJ.dispatch({
                        effects: eJ
                      })
                    }
                  })),
                  UJ = setInterval((() => {
                    JJ.dom.isConnected ? JJ.dispatch({
                      effects: CJ.of(Date.now())
                    }) : clearInterval(UJ)
                  }), NJ);
                return () => {
                  WJ.i.unsubscribe(FJ), clearInterval(UJ)
                }
              }
            }
          }(qJ.docKey, qJ.existingCursors);
          AJ.push(...JJ.extensions), rc.current = JJ.connect
        } else rc.current = null;
        return AJ
      }), [cJ, Uc, uJ, qc, jc, Hc, tJ, oJ, lJ, DJ, Zc, Fc]);
      if (!Uc || !LJ && !oJ) return (0, Dc.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Dc.jsx)(rJ.c, {})
      });
      const dc = oJ ? `plugin-${oJ}-${null!==lJ&&void 0!==lJ?lJ:"index.ts"}` : LJ ? `collab-${LJ.clientID}` : `local-${cJ}`;
      return (0, Dc.jsx)(eJ.q, {
        value: oJ ? null !== Jc && void 0 !== Jc ? Jc : "" : ZJ,
        onChange: AJ,
        extensions: pc,
        className: "CodeEditorContent",
        theme: iJ ? ec : "dark",
        editable: DJ && !oJ,
        basicSetup: gc,
        onCreateEditor: JJ => {
          var cJ;
          nc.current = JJ, fc.current = null !== (cJ = null === LJ || void 0 === LJ ? void 0 : LJ.clientID) && void 0 !== cJ ? cJ : null, nc.current.focus(), kc(JJ), xc.current && xc.current(), rc.current && (xc.current = rc.current(JJ))
        }
      }, dc)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);