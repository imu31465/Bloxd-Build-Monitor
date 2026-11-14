export const id = 263;
export const ids = [263];
export const modules = {
  39143: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => cS
    });
    var CF = SF(39146),
      AF = SF(39195),
      uF = SF(39202),
      hF = SF(46),
      bW = SF(61),
      dF = SF(39223),
      PF = SF(39226),
      RF = SF(3750),
      iW = SF(39234),
      eF = SF(1546),
      EF = SF(39242),
      QF = SF(39263),
      rW = SF.n(QF),
      gW = SF(39211),
      tW = SF(39215),
      TF = SF(1186),
      aW = SF(35339),
      kW = SF(1101),
      qW = SF(35350),
      VF = SF(35236),
      NF = SF(1262),
      DF = SF(568),
      LF = SF(1110),
      mW = SF(39312),
      OF = SF(39153),
      xW = SF(39162),
      ZF = SF(1576),
      oF = SF(2940),
      YF = SF(20),
      MF = SF(1001);
    const cW = 1e4,
      GF = 250,
      zW = 250;
    var IF = SF(39170);
    const fF = 50,
      yW = 100;
    const sF = 2e3,
      nF = OF.H.define(),
      HF = OF.H.define(),
      KF = OF.H.define();
    class wF extends xW.s {
      constructor(FF, WF, SF) {
        super(), this.colour = FF, this.playerName = WF, this.showName = SF
      }
      toDOM() {
        const FF = document.createElement("span");
        FF.className = "cm-remote-cursor-wrapper", FF.style.borderLeftColor = this.colour;
        const WF = document.createElement("span");
        if (WF.className = "cm-remote-cursor", WF.style.borderLeftColor = this.colour, FF.appendChild(WF), this.showName) {
          const WF = document.createElement("span");
          WF.className = "cm-remote-cursor-name", WF.style.backgroundColor = this.colour, WF.textContent = this.playerName, FF.appendChild(WF)
        }
        return FF
      }
      eq(FF) {
        return this.colour === FF.colour && this.playerName === FF.playerName && this.showName === FF.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function XF(FF, WF) {
      const SF = [],
        CF = [];
      for (const [, hF] of FF) {
        const FF = WF - hF.lastMoved < sF;
        if (SF.push({
            pos: hF.head,
            decoration: xW.e.widget({
              widget: new wF(hF.colour, hF.playerName, FF),
              side: 1
            })
          }), hF.anchor !== hF.head) {
          const FF = Math.min(hF.anchor, hF.head),
            WF = Math.max(hF.anchor, hF.head);
          CF.push({
            from: FF,
            to: WF,
            decoration: xW.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${hF.colour}33`
              }
            })
          })
        }
      }
      const AF = new OF.A,
        uF = [];
      for (const hF of SF) uF.push({
        bias: 1,
        deco: hF.decoration,
        from: hF.pos,
        to: hF.pos
      });
      for (const hF of CF) uF.push({
        bias: 0,
        deco: hF.decoration,
        from: hF.from,
        to: hF.to
      });
      uF.sort(((FF, WF) => FF.from - WF.from || FF.deco.startSide - WF.deco.startSide || FF.bias - WF.bias));
      for (const hF of uF) AF.add(hF.from, hF.to, hF.deco);
      return AF.finish()
    }
    const UF = OF.J.define({
      create: () => ({
        cursors: new Map,
        Iu: xW.e.none
      }),
      update(FF, WF) {
        let SF = FF.cursors,
          CF = !1;
        if (WF.docChanged) {
          const FF = WF.startState.doc.length,
            AF = new Map;
          for (const [CF, uF] of SF) try {
            const SF = WF.changes.mapPos(Math.min(uF.anchor, FF), 1),
              hF = WF.changes.mapPos(Math.min(uF.head, FF), 1);
            AF.set(CF, {
              ...uF,
              anchor: SF,
              head: hF
            })
          } catch {}
          SF = AF, CF = !0
        }
        for (const AF of WF.effects)
          if (AF.is(nF)) {
            const WF = AF.value;
            SF === FF.cursors && (SF = new Map(SF)), SF.set(WF.playerId, WF), CF = !0
          } else AF.is(HF) ? SF.has(AF.value) && (SF === FF.cursors && (SF = new Map(SF)), SF.delete(AF.value), CF = !0) : AF.is(KF) && (CF = !0);
        return CF ? {
          cursors: SF,
          Iu: XF(SF, Date.now())
        } : FF
      },
      provide: FF => xW.k.Iu.from(FF, (FF => FF.Iu))
    });
    var BF = SF(39188);
    const jW = "#e45649",
      vW = "#383a42",
      JF = "#696c77",
      pF = "#986801",
      lF = "#e5e5e6",
      FW = "#fafafa",
      WW = "#eaeaeb",
      SW = "#526fff",
      CW = xW.k.theme({
        "&": {
          color: vW,
          backgroundColor: FW
        },
        ".cm-content": {
          caretColor: SW
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: SW
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: vW
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
          backgroundColor: FW,
          color: JF,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: lF
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: WW
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: WW,
          borderBottomColor: WW
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: lF,
            color: vW
          }
        }
      }, {
        dark: !1
      }),
      AW = IF.e.define([{
        tag: BF.k.keyword,
        color: "#a626a4"
      }, {
        tag: [BF.k.name, BF.k.deleted, BF.k.character, BF.k.propertyName, BF.k.macroName],
        color: jW
      }, {
        tag: [BF.k.function(BF.k.variableName), BF.k.labelName],
        color: "#4078f2"
      }, {
        tag: [BF.k.color, BF.k.constant(BF.k.name), BF.k.standard(BF.k.name)],
        color: pF
      }, {
        tag: [BF.k.definition(BF.k.name), BF.k.separator],
        color: vW
      }, {
        tag: [BF.k.typeName, BF.k.className, BF.k.number, BF.k.changed, BF.k.annotation, BF.k.modifier, BF.k.self, BF.k.namespace],
        color: "#c18401"
      }, {
        tag: [BF.k.operator, BF.k.operatorKeyword, BF.k.url, BF.k.escape, BF.k.regexp, BF.k.link, BF.k.special(BF.k.string)],
        color: "#0184bc"
      }, {
        tag: [BF.k.meta, BF.k.comment],
        color: JF
      }, {
        tag: BF.k.strong,
        fontWeight: "bold"
      }, {
        tag: BF.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: BF.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: BF.k.link,
        color: JF,
        textDecoration: "underline"
      }, {
        tag: BF.k.heading,
        fontWeight: "bold",
        color: jW
      }, {
        tag: [BF.k.atom, BF.k.bool, BF.k.special(BF.k.variableName)],
        color: pF
      }, {
        tag: [BF.k.processingInstruction, BF.k.string, BF.k.inserted],
        color: "#50a14f"
      }, {
        tag: BF.k.invalid,
        color: "#000000"
      }]),
      uW = [CW, (0, IF.db)(AW)];
    var hW = SF(35371),
      bS = SF(39321);
    const dW = uF.g.define(),
      PW = uF.k.define({
        create: () => !1,
        update(FF, WF) {
          for (const SF of WF.effects) SF.is(dW) && (FF = SF.value);
          return FF
        }
      }),
      RW = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function iS(FF, WF) {
      return [PW, uF.o.fromClass(class {
        constructor(FF) {
          this.view = FF, this.onDown = FF => {
            const WF = FF.target instanceof Element && null !== FF.target.closest(".cm-tooltip");
            0 !== FF.button || WF || this.view.state.field(PW) || this.view.dispatch({
              effects: dW.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(PW) && this.view.dispatch({
              effects: dW.of(!1)
            })
          }, FF.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), uF.y.compute(["selection", PW], (SF => function(FF, WF, SF) {
        const CF = FF.selection.main;
        return CF.empty || FF.field(PW) || FF.sliceDoc(CF.from, CF.to).trim().length < 2 ? null : {
          pos: CF.from,
          above: !0,
          create: FF => {
            const CF = document.createElement("div");
            CF.className = "CodeSelectionActions", CF.setAttribute("role", "toolbar"), CF.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: AF,
                label: uF
              }
              of RW) {
              if (!SF && "explain" !== AF) continue;
              const hF = document.createElement("button");
              hF.type = "button", hF.textContent = uF, "change" !== AF && (hF.title = bS.e, hF.dataset.asksAi = "true"), hF.addEventListener("mousedown", (FF => {
                FF.preventDefault()
              })), hF.addEventListener("click", (() => {
                const SF = FF.state.selection.main;
                if (SF.empty) return;
                const CF = {
                  action: AF,
                  path: WF,
                  fromLine: FF.state.doc.lineAt(SF.from).number,
                  toLine: FF.state.doc.lineAt(SF.to > SF.from && FF.state.doc.lineAt(SF.to).from === SF.to ? SF.to - 1 : SF.to).number,
                  text: FF.state.sliceDoc(SF.from, SF.to)
                };
                YF.j.Uu("WorldCodeAiSelection", CF), FF.dispatch({
                  selection: {
                    anchor: SF.to
                  }
                })
              })), CF.appendChild(hF)
            }
            return {
              dom: CF
            }
          }
        }
      }(SF, FF, WF)))]
    }
    var eW = SF(971);
    const EW = new Set(["(", "{", "[", "<"]),
      QW = new Set([")", "}", "]", ">"]),
      rS = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function gS(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function SF(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = [];
        for (const AF of FF) {
          let FF;
          FF = "punctuation" === AF.kind ? rS.text : "parameterName" === AF.kind ? rS.parameterName : WF, CF.push({
            str: AF.text,
            style: {
              color: FF,
              opacity: SF ? .5 : void 0
            }
          })
        }
        return CF
      }
      const CF = [];
      if (CF.push(...SF(FF.prefixDisplayParts, rS.text)), FF.parameters.length > 0) {
        CF.push("\n");
        for (let AF = 0; AF < FF.parameters.length; AF++) {
          const uF = FF.parameters[AF];
          CF.push("\t"), CF.push(...SF(uF.displayParts, rS.parameter, null !== WF && AF !== WF)), CF.push("\n")
        }
      }
      return CF.push(...SF(FF.suffixDisplayParts, rS.suffix)), FF.documentation && (CF.push("\n\n"), CF.push(...SF(FF.documentation, rS.docs))), CF
    }
    var tS = function(FF) {
      return FF[FF.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", FF[FF.DuplicateIdentifier = 2300] = "DuplicateIdentifier", FF
    }(tS || {});
    const TW = new Set([tS.DuplicateIdentifier]),
      aS = new Set([tS.VariableDefinedElsewhere]),
      kS = new Set([]),
      qS = "/index.js";

    function VW(FF) {
      return "/" + FF
    }

    function NW(FF, WF, SF) {
      FF.getSourceFile(WF) && FF.deleteFile(WF), FF.createFile(WF, SF)
    }

    function DW(FF) {
      return !!FF && ((0, qW.m)(FF) || (0, qW.j)(FF))
    }

    function LW(FF, WF, SF) {
      return () => {
        let CF = [...WF.languageService.getSemanticDiagnostics(SF), ...WF.languageService.getSyntacticDiagnostics(SF)];
        return CF = CF.filter((FF => !(0, DF.Q)(FF.start) && !(0, DF.Q)(FF.length) && !TW.has(FF.code))), FF || (CF = CF.filter((FF => !aS.has(FF.code)))), CF.map((FF => ({
          from: FF.start,
          to: FF.start + FF.length,
          message: "string" === typeof FF.messageText ? FF.messageText : FF.messageText.messageText,
          severity: kS.has(FF.code) ? "warning" : "error"
        })))
      }
    }

    function mS(FF, WF) {
      return SF => {
        var CF, AF;
        const uF = FF.languageService.getCompletionsAtPosition(WF, SF.pos, {});
        if (!uF) return {
          from: SF.pos,
          options: []
        };
        let hF = null !== (CF = null === (AF = uF.optionalReplacementSpan) || void 0 === AF ? void 0 : AF.start) && void 0 !== CF ? CF : SF.pos;
        if (!uF.optionalReplacementSpan) {
          const FF = SF.state.doc.sliceString(0, SF.pos);
          for (; hF > 0 && /[\w$]/.test(FF[hF - 1]);) hF--
        }
        return uF.entries = uF.entries.filter((FF => FF.kind !== rW().ScriptElementKind.warning)), {
          from: hF,
          options: uF.entries.map((CF => {
            var AF, uF, bW, dF;
            const PF = FF.languageService.getCompletionEntryDetails(WF, SF.pos, CF.name, {}, CF.source, {}, CF.data),
              RF = null !== (AF = null === (uF = CF.replacementSpan) || void 0 === uF ? void 0 : uF.start) && void 0 !== AF ? AF : hF,
              iW = CF.replacementSpan ? CF.replacementSpan.start + CF.replacementSpan.length : SF.pos,
              eF = null !== (bW = CF.insertText) && void 0 !== bW ? bW : CF.name;
            return {
              label: CF.name,
              detail: null === PF || void 0 === PF ? void 0 : PF.displayParts.map((FF => FF.text)).join(""),
              info: null === PF || void 0 === PF || null === (dF = PF.documentation) || void 0 === dF ? void 0 : dF.map((FF => FF.text)).join(""),
              apply: FF => {
                FF.dispatch({
                  changes: {
                    from: RF,
                    to: iW,
                    insert: eF
                  },
                  selection: {
                    anchor: RF + eF.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function OW(FF) {
      return WF => {
        const SF = document.createElement("div");
        SF.className = "CodeEditorTooltip";
        let CF = !1;
        return queueMicrotask((() => {
          CF || (bW.render((0, eW.jsx)(eF.d, {
            text: FF
          }), SF), WF.requestMeasure())
        })), {
          dom: SF,
          destroy() {
            CF = !0, queueMicrotask((() => {
              bW.unmountComponentAtNode(SF)
            }))
          }
        }
      }
    }

    function xS(FF, WF, SF) {
      return CF => {
        var AF;
        if (!WF) return [];
        const uF = null === (AF = CF.selection.Bu[0]) || void 0 === AF ? void 0 : AF.head;
        if (void 0 === uF) return [];
        const hF = FF.languageService.getSignatureHelpItems(SF, uF, {});
        if (!hF || !hF.items.length) return [];
        const bW = hF.applicableSpan.start - hF.items[0].prefixDisplayParts.map((FF => FF.text)).join("").length,
          dF = hF.applicableSpan.start,
          PF = CF.doc.lineAt(uF),
          RF = PF.from,
          iW = Math.min(PF.to, uF);
        let eF, EF;
        return bW < RF ? (eF = RF, EF = iW) : (eF = bW, EF = dF), [{
          pos: eF,
          end: EF,
          above: !1,
          create: OW(gS(hF.items[0], hF.argumentIndex))
        }]
      }
    }

    function ZW(FF, WF) {
      return (SF, CF, AF) => {
        const uF = FF.languageService.getQuickInfoAtPosition(WF, CF);
        if (!uF) return [];
        const hF = uF.textSpan.start,
          bW = uF.textSpan.start + uF.textSpan.length;
        if (CF < hF || CF >= bW) return [];
        if (uF.kind === rW().ScriptElementKind.memberFunctionElement || uF.kind === rW().ScriptElementKind.variableElement && "declare" === uF.kindModifiers) {
          const FF = uF.displayParts.findIndex((FF => "space" === FF.kind)); - 1 !== FF && (uF.displayParts = uF.displayParts.slice(FF));
          const WF = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            SF = uF.displayParts.findIndex((FF => "punctuation" === FF.kind && "(" === FF.text)); - 1 !== SF && (WF.prefixDisplayParts = uF.displayParts.slice(0, SF + 1), uF.displayParts = uF.displayParts.slice(SF + 1));
          const CF = uF.displayParts.findLastIndex((FF => "punctuation" === FF.kind && ")" === FF.text)); - 1 !== CF && (WF.suffixDisplayParts = uF.displayParts.slice(CF), uF.displayParts = uF.displayParts.slice(0, CF));
          let AF = 0,
            dF = [];
          for (const hF of uF.displayParts)
            if (EW.has(hF.text) ? AF++ : QW.has(hF.text) && AF--, "lineBreak" !== hF.kind) {
              if ("space" === hF.kind) {
                if (0 === dF.length) continue;
                dF.push({
                  kind: "space",
                  text: " "
                })
              } else dF.push(hF);
              0 === AF && "," === hF.text && (WF.parameters.push({
                displayParts: dF
              }), dF = [])
            } return dF.length > 0 && WF.parameters.push({
            displayParts: dF
          }), WF.documentation = uF.documentation, [{
            pos: hF,
            end: bW,
            above: !0,
            create: OW(gS(WF))
          }]
        }
        const dF = [];
        for (const FF of uF.displayParts) dF.push({
          str: FF.text,
          style: {
            color: rS.text
          }
        });
        if (uF.documentation) {
          dF.push("\n\n");
          for (const FF of uF.documentation) dF.push({
            str: FF.text,
            style: {
              color: rS.docs
            }
          })
        }
        return [{
          pos: hF,
          end: bW,
          above: !0,
          create: OW(dF)
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
      semicolons: rW().SemicolonPreference.Insert
    };
    const YW = uF.g.define(),
      MW = {
        lineNumbers: !0,
        tabSize: 4
      };

    function cS(FF) {
      let {
        isLobbyCode: WF,
        code: SF,
        onChange: bW,
        canEditCode: eF,
        setTemporaryMessage: QF,
        close: DF,
        showTooltips: wF,
        lightMode: XF,
        collabState: BF,
        onRemoteDocChange: jW,
        files: vW,
        activePath: JF,
        pluginName: pF,
        pluginFile: lF,
        pluginSource: FW,
        setActiveDocReplacer: WW,
        showAiHints: SW,
        canAiChangeCode: CW = eF
      } = FF;
      const [AW, bS] = (0, hF.useState)(null), dW = null === BF || void 0 === BF ? void 0 : BF.version, PW = null === BF || void 0 === BF ? void 0 : BF.clientID, RW = (0, hF.useRef)({
        isLobbyCode: WF,
        files: vW,
        code: SF,
        activePath: JF
      }), EW = (0, hF.useRef)(jW);
      EW.current = jW;
      const QW = (0, hF.useRef)(null),
        rS = (0, hF.useRef)(BF);
      rS.current = BF;
      const gS = (0, hF.useRef)(null),
        tS = (0, hF.useRef)(null),
        TW = (0, hF.useRef)(null),
        aS = (0, hF.useRef)(DF);
      aS.current = DF;
      const kS = (0, hF.useRef)(SF);
      kS.current = SF;
      const OW = (0, hF.useRef)(FW);
      OW.current = FW;
      const cS = function(FF, WF, SF, CF) {
        return SF ? `/plugin-preview/${SF}/${null!==CF&&void 0!==CF?CF:"index.ts"}` : FF ? VW(null !== WF && void 0 !== WF ? WF : kW.h) : qS
      }(WF, JF, pF, lF);
      (0, hF.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: FF,
            files: WF,
            code: SF,
            activePath: CF
          } = RW.current, AF = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: rW().ModuleKind.ESNext,
            moduleResolution: rW().ModuleResolutionKind.Bundler,
            target: rW().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(aW.f).map((FF => [FF.specifier, [FF.typesVfsPath]])))
            }
          }, uF = new Map, hF = [];
          if (FF) {
            const FF = null !== WF && void 0 !== WF ? WF : {
              [kW.h]: SF || "\n"
            };
            for (const [WF, SF] of Object.entries(FF)) {
              const FF = VW(WF);
              uF.set(FF, SF || "\n"), hF.push(FF)
            }
            const AF = VW(null !== CF && void 0 !== CF ? CF : kW.h);
            uF.has(AF) ? uF.set(AF, SF || "\n") : (uF.set(AF, SF || "\n"), hF.push(AF)), uF.set("/node_modules/@bloxd/index.d.ts", RF.default), hF.push("/node_modules/@bloxd/index.d.ts");
            for (const WF of Object.values(aW.f)) {
              uF.set(WF.typesVfsPath, WF.types), hF.push(WF.typesVfsPath);
              for (const [FF, SF] of Object.entries(WF.files)) {
                const CF = `/plugin-preview/${WF.name}/${FF}`;
                uF.set(CF, SF || "\n"), hF.push(CF)
              }
            }
          } else uF.set(qS, SF || "\n"), hF.push(qS);
          uF.set("/globals.d.ts", FF ? PF.c : dF.c), uF.set("/lib.d.ts", iW.c), hF.push("/globals.d.ts", "/lib.d.ts");
          const bW = EF.b(uF),
            eF = EF.c(bW, hF, rW(), AF);
          bS({
            dh: eF,
            fsMap: uF
          })
        }()
      }), []), (0, hF.useEffect)((() => {
        var FF, CF;
        if (!AW || !WF) return;
        const {
          dh: AF,
          fsMap: uF
        } = AW;
        if (function(FF, WF, SF) {
            const CF = new Set;
            for (const [AF, uF] of Object.entries(SF)) {
              const SF = VW(AF);
              CF.add(SF);
              const hF = uF || "\n";
              WF.get(SF) !== hF && (WF.set(SF, hF), NW(FF, SF, hF))
            }
            for (const AF of [...WF.keys()]) "/globals.d.ts" === AF || "/lib.d.ts" === AF || AF.startsWith("/node_modules/") || AF.startsWith("/plugin-preview/") || CF.has(AF) || (WF.delete(AF), FF.getSourceFile(AF) && FF.deleteFile(AF))
          }(AF, uF, null !== vW && void 0 !== vW ? vW : {
            [kW.h]: SF || "\n"
          }), pF) return void NW(AF, cS, FW || "\n");
        const hF = null !== (FF = null === (CF = QW.current) || void 0 === CF ? void 0 : CF.state.doc.toString()) && void 0 !== FF ? FF : SF;
        NW(AF, cS, hF || "\n")
      }), [vW, JF, AW, pF, FW, cS, SF, WF]), (0, hF.useEffect)((() => {
        if (!AW) return;
        const {
          dh: FF
        } = AW;
        NW(FF, cS, (pF ? FW : SF) || "\n")
      }), [SF, pF, FW, cS, AW]), (0, hF.useEffect)((() => () => {
        tS.current && (tS.current(), tS.current = null)
      }), []), (0, hF.useEffect)((() => (WW(((FF, WF) => {
        if (pF) return !1;
        const SF = QW.current,
          CF = rS.current,
          AF = CF ? (0, qW.s)(CF.docKey) : null;
        if (!SF || !CF || gS.current !== CF.clientID || FF !== AF) return !1;
        const uF = SF.state.doc.toString();
        return uF !== WF && SF.dispatch({
          changes: {
            from: 0,
            to: uF.length,
            insert: WF
          }
        }), !0
      })), () => {
        QW.current = null, gS.current = null, WW(null)
      })), [WW, pF]);
      const GW = WF ? pF ? null : null !== JF && void 0 !== JF ? JF : kW.h : hW.b,
        zS = function(FF, WF) {
          const SF = (0, hF.useRef)(null);
          (0, hF.useEffect)((() => {
            var FF;
            (null === (FF = SF.current) || void 0 === FF ? void 0 : FF.path) !== WF && (SF.current = null)
          }), [WF]);
          const CF = FF => {
            const CF = SF.current;
            if (null === FF || void 0 === FF || !FF.dom.isConnected || !CF || CF.path !== WF) return;
            SF.current = null;
            const {
              doc: AF
            } = FF.state, {
              from: hF
            } = AF.line(Math.min(Math.max(CF.line, 1), AF.lines));
            FF.dispatch({
              selection: {
                anchor: hF
              },
              effects: uF.e.scrollIntoView(hF, {
                y: "center"
              })
            }), FF.focus()
          };
          return (0, NF.e)("CodeEditorGoToLine", (WF => {
            SF.current = WF, CF(FF.current)
          })), CF
        }(QW, GW);
      (0, NF.e)("FormatCode", (() => {
        if (!AW || !QW.current || pF) return;
        const {
          dh: FF,
          fsMap: SF
        } = AW, CF = FF.getSourceFile(cS).getFullText();
        let AF = 0;
        if (WF && vW)
          for (const [WF, bW] of Object.entries(vW)) WF !== (null !== JF && void 0 !== JF ? JF : kW.h) && (AF += bW.length);
        const uF = function(FF, WF, SF, CF, AF) {
          const uF = FF.languageService.getFormattingEditsForDocument(CF, oW);
          if (!uF.length) return LF.d.error("Code is already formatted.");
          uF.sort(((FF, WF) => WF.span.start - FF.span.start));
          let hF = FF.getSourceFile(CF).getFullText();
          for (const bW of uF) hF = hF.slice(0, bW.span.start) + bW.HI + hF.slice(bW.span.start + bW.span.length);
          return hF !== (SF ? (0, VF.l)(hF, AF) : (0, VF.k)(hF)) ? LF.d.error("Formatting the code will go beyond the character limit.") : LF.d.value(hF)
        }(FF, 0, WF, cS, AF);
        if (uF.isError()) return void QF({
          message: uF.asError().message,
          type: "warning"
        });
        const hF = uF.getValue();
        hF && (QW.current.dispatch({
          changes: {
            from: 0,
            to: CF.length,
            insert: hF
          },
          selection: {
            anchor: hF.length
          }
        }), NW(FF, cS, hF), bW(hF))
      }));
      const IW = (0, hF.useMemo)((() => {
        if (!AW) return [];
        const {
          dh: FF,
          fsMap: SF
        } = AW;
        ! function(FF, WF, SF, CF) {
          if (FF.getSourceFile(SF)) return;
          const AF = CF || "\n";
          WF.set(SF, AF), FF.createFile(SF, AF)
        }(FF, SF, cS, (pF ? OW.current : kS.current) || "\n");
        const hF = WF && DW(pF ? null !== lF && void 0 !== lF ? lF : "index.ts" : JF),
          bW = [(0, AF.b)({
            jsx: !1,
            typescript: hF
          }), uF.f.highest(uF.e.domEventHandlers({
            keydown: FF => "Escape" === FF.key ? (aS.current(), FF.stopPropagation(), !0) : (FF.stopPropagation(), !1)
          })), (0, CF.d)({
            override: [mS(FF, cS)]
          }), xW.o.fromClass(class {
            constructor(FF) {
              this.view = FF, this.timeout = null, this.scheduleParse()
            }
            update(FF) {
              (FF.docChanged || FF.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const FF = this.view.viewport.to;
                (0, IF.eb)(this.view.state, FF) || (0, IF.L)(this.view, FF, fF) || this.scheduleParse()
              }), yW))
            }
          }), uF.e.lineWrapping, uF.k.define({
            create: xS(FF, wF, cS),
            update(WF, SF) {
              const CF = SF.effects.some((FF => FF.is(YW)));
              return SF.docChanged || SF.selection || CF ? (NW(FF, cS, SF.state.doc.toString() || " "), xS(FF, wF, cS)(SF.state)) : WF
            },
            provide: FF => uF.y.computeN([FF], (WF => WF.field(FF)))
          }), (0, uF.u)(ZW(FF, cS)), (0, tW.d)(LW(WF, FF, cS)), uF.o.fromClass(class {
            constructor(FF) {
              this.view = FF, this.searchPanel = null
            }
            update(FF) {
              const WF = FF.view.dom.querySelector(".cm-search");
              if (WF !== this.searchPanel) {
                if (this.searchPanel = WF, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (FF => {
                  "Escape" === FF.key && (0, gW.b)(this.view), FF.stopPropagation()
                }))
              }
            }
          })];
        SW && !pF && bW.push(iS(WF ? null !== JF && void 0 !== JF ? JF : kW.h : hW.b, CW));
        const dF = rS.current;
        if (dF && !pF) {
          bW.push(... function(FF, WF, SF, CF, AF) {
            let uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const hF = (0, qW.s)(SF),
              bW = xW.o.fromClass(class {
                constructor(FF) {
                  this.view = FF, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.subToken = void 0, this.subToken = YF.j.subscribe("codeCollab", (FF => {
                    FF.docKey === hF && FF.type === qW.f.Updates && (FF.updates ? this.applyUpdates(FF.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(FF) {
                  const WF = JSON.parse(FF).map((FF => ({
                    clientID: FF.clientID,
                    changes: OF.ChangeSet.fromJSON(FF.changes)
                  })));
                  WF.length > 0 && (this.view.dispatch((0, mW.j)(this.view.state, WF)), AF && AF(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(FF) {
                  uF && (FF.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const FF = (0, mW.n)(this.view.state);
                  if (this.pushing || !FF.length) return;
                  const WF = Date.now() - this.lastPushTime;
                  if (WF < zW) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), zW - WF)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), cW);
                  const SF = (0, mW.h)(this.view.state),
                    AF = FF.map((FF => ({
                      clientID: FF.clientID,
                      changes: FF.changes.toJSON()
                    }))),
                    uF = JSON.stringify(AF);
                  uF.length <= qW.h ? ZF.gameBridge.send("sendCodeCollab", {
                    rM: qW.b.Push,
                    gM: hF,
                    VY: SF,
                    ZY: uF
                  }) : (0, MF.postJsonWithMetricsCookiesAndJsonResponse)(`${CF.gsUrl}/code/collab-push`, oF.l["collab-push"].toBuffer({
                    gameNameWithVariation: CF.gameNameWithVariation,
                    lobbyName: CF.lobbyName,
                    docKey: hF,
                    version: SF,
                    updates: uF
                  }), {
                    retries: 0
                  }).catch((FF => {
                    console.error("[CodeCollab] HTTP push failed", FF)
                  }))
                }
                pull() {
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const FF = (0, mW.h)(this.view.state);
                  (0, MF.postJsonWithMetricsCookiesAndJsonResponse)(`${CF.gsUrl}/code/collab-pull`, oF.l["collab-pull"].toBuffer({
                    gameNameWithVariation: CF.gameNameWithVariation,
                    lobbyName: CF.lobbyName,
                    docKey: hF,
                    fromVersion: FF
                  }), {
                    retries: 1
                  }).then((FF => {
                    if (FF.fullDoc) return void YF.j.Uu("codeCollabRejoin", {
                      docKey: hF,
                      doc: FF.fullDoc,
                      version: FF.version
                    });
                    const WF = JSON.parse(FF.updates).map((FF => ({
                      clientID: FF.clientID,
                      changes: OF.ChangeSet.fromJSON(FF.changes)
                    })));
                    WF.length > 0 && (this.view.dispatch((0, mW.j)(this.view.state, WF)), AF && AF(this.view.state.doc.toString())), this.clearPushState(), this.push()
                  })).catch((FF => {
                    console.error("[CodeCollab] Pull failed", FF)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const FF = Date.now();
                  if (FF - this.lastCursorSent < GF) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), GF)));
                  this.lastCursorSent = FF;
                  const WF = this.view.state.selection.main;
                  ZF.gameBridge.send("sendCodeCollab", {
                    rM: qW.b.Cursor,
                    gM: hF,
                    fY: WF.anchor,
                    wY: WF.head
                  })
                }
                destroy() {
                  YF.j.unsubscribe(this.subToken), this.pushTimeout && clearTimeout(this.pushTimeout), this.pushDelayTimeout && clearTimeout(this.pushDelayTimeout), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, mW.e)({
              startVersion: FF,
              clientID: WF
            }), bW]
          }(dW, PW, dF.docKey, dF.httpConfig, (FF => {
            var WF;
            null === (WF = EW.current) || void 0 === WF || WF.call(EW, FF)
          }), eF));
          const FF = function(FF, WF) {
            const SF = (0, qW.s)(FF);
            return {
              extensions: [UF],
              connect(FF) {
                if (WF) {
                  const SF = WF.map((FF => nF.of({
                    playerId: FF.playerId,
                    playerName: FF.playerName,
                    colour: FF.colour,
                    anchor: FF.anchor,
                    head: FF.head,
                    lastMoved: Date.now()
                  })));
                  SF.length > 0 && FF.dispatch({
                    effects: SF
                  })
                }
                const CF = YF.j.subscribe("codeCollab", (WF => {
                    if (WF.docKey === SF)
                      if (WF.type === qW.f.RemoteCursor) FF.dispatch({
                        effects: nF.of({
                          playerId: WF.playerId,
                          playerName: WF.playerName,
                          colour: WF.colour,
                          anchor: WF.anchor,
                          head: WF.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (WF.type === qW.f.Presence) {
                      const SF = JSON.parse(WF.peers),
                        CF = new Set(SF.map((FF => FF.playerId))),
                        AF = FF.state.field(UF),
                        uF = [];
                      for (const [FF] of AF.cursors) CF.has(FF) || uF.push(HF.of(FF));
                      uF.length > 0 && FF.dispatch({
                        effects: uF
                      })
                    }
                  })),
                  AF = setInterval((() => {
                    FF.dom.isConnected ? FF.dispatch({
                      effects: KF.of(Date.now())
                    }) : clearInterval(AF)
                  }), sF);
                return () => {
                  YF.j.unsubscribe(CF), clearInterval(AF)
                }
              }
            }
          }(dF.docKey, dF.existingCursors);
          bW.push(...FF.extensions), TW.current = FF.connect
        } else TW.current = null;
        return bW
      }), [WF, AW, wF, dW, PW, cS, JF, pF, lF, eF, SW, CW]);
      if (!AW || !BF && !pF) return (0, eW.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, eW.jsx)(TF.c, {})
      });
      const fW = pF ? `plugin-${pF}-${null!==lF&&void 0!==lF?lF:"index.ts"}` : BF ? `collab-${BF.clientID}` : `local-${WF}`;
      return (0, eW.jsx)(uF.r, {
        value: pF ? null !== FW && void 0 !== FW ? FW : "" : SF,
        onChange: bW,
        extensions: IW,
        className: "CodeEditorContent",
        theme: XF ? uW : "dark",
        editable: eF && !pF,
        basicSetup: MW,
        onCreateEditor: FF => {
          var WF;
          QW.current = FF, gS.current = null !== (WF = null === BF || void 0 === BF ? void 0 : BF.clientID) && void 0 !== WF ? WF : null, QW.current.focus(), zS(FF), tS.current && tS.current(), TW.current && (tS.current = TW.current(FF))
        }
      }, fW)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);