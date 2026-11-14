export const id = 263;
export const ids = [263];
export const modules = {
  38774: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => pR
    });
    var wW = MW(38776),
      CW = MW(38820),
      zR = MW(38828),
      AW = MW(75),
      bR = MW(93),
      yR = MW(38842),
      NW = MW(38844),
      eW = MW(3729),
      BW = MW(38853),
      tR = MW(1523),
      TW = MW(38861),
      gR = MW(38872),
      iR = MW.n(gR),
      YW = MW(38836),
      JW = MW(38840),
      PW = MW(1157),
      IW = MW(35036),
      oW = MW(1066),
      lW = MW(35047),
      FW = MW(34950),
      fW = MW(1253),
      QW = MW(564),
      rR = MW(1072),
      cR = MW(38924),
      XW = MW(38778),
      jR = MW(38784),
      kR = MW(1544),
      aR = MW(2826),
      sW = MW(33),
      dW = MW(975);
    const pW = 1e4,
      hW = 250,
      UW = 250;
    var EW = MW(38800);
    const VW = 50,
      mR = 100;
    const xR = 2e3,
      vR = XW.A.define(),
      KW = XW.A.define(),
      uW = XW.A.define();
    class OW extends jR.r {
      constructor(WW, RW, MW) {
        super(), this.colour = WW, this.playerName = RW, this.showName = MW
      }
      toDOM() {
        const WW = document.createElement("span");
        WW.className = "cm-remote-cursor-wrapper", WW.style.borderLeftColor = this.colour;
        const RW = document.createElement("span");
        if (RW.className = "cm-remote-cursor", RW.style.borderLeftColor = this.colour, WW.appendChild(RW), this.showName) {
          const RW = document.createElement("span");
          RW.className = "cm-remote-cursor-name", RW.style.backgroundColor = this.colour, RW.textContent = this.playerName, WW.appendChild(RW)
        }
        return WW
      }
      eq(WW) {
        return this.colour === WW.colour && this.playerName === WW.playerName && this.showName === WW.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function nW(WW, RW) {
      const MW = [],
        wW = [];
      for (const [, AW] of WW) {
        const WW = RW - AW.lastMoved < xR;
        if (MW.push({
            pos: AW.head,
            decoration: jR.c.widget({
              widget: new OW(AW.colour, AW.playerName, WW),
              side: 1
            })
          }), AW.anchor !== AW.head) {
          const WW = Math.min(AW.anchor, AW.head),
            RW = Math.max(AW.anchor, AW.head);
          wW.push({
            from: WW,
            to: RW,
            decoration: jR.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${AW.colour}33`
              }
            })
          })
        }
      }
      const CW = new XW.q,
        zR = [];
      for (const AW of MW) zR.push({
        bias: 1,
        deco: AW.decoration,
        from: AW.pos,
        to: AW.pos
      });
      for (const AW of wW) zR.push({
        bias: 0,
        deco: AW.decoration,
        from: AW.from,
        to: AW.to
      });
      zR.sort(((WW, RW) => WW.from - RW.from || WW.deco.startSide - RW.deco.startSide || WW.bias - RW.bias));
      for (const AW of zR) CW.add(AW.from, AW.to, AW.deco);
      return CW.finish()
    }
    const GW = XW.C.define({
      create: () => ({
        cursors: new Map,
        vA: jR.c.none
      }),
      update(WW, RW) {
        let MW = WW.cursors,
          wW = !1;
        if (RW.docChanged) {
          const WW = RW.startState.doc.length,
            CW = new Map;
          for (const [wW, zR] of MW) try {
            const MW = RW.changes.mapPos(Math.min(zR.anchor, WW), 1),
              AW = RW.changes.mapPos(Math.min(zR.head, WW), 1);
            CW.set(wW, {
              ...zR,
              anchor: MW,
              head: AW
            })
          } catch {}
          MW = CW, wW = !0
        }
        for (const CW of RW.effects)
          if (CW.is(vR)) {
            const RW = CW.value;
            MW === WW.cursors && (MW = new Map(MW)), MW.set(RW.playerId, RW), wW = !0
          } else CW.is(KW) ? MW.has(CW.value) && (MW === WW.cursors && (MW = new Map(MW)), MW.delete(CW.value), wW = !0) : CW.is(uW) && (wW = !0);
        return wW ? {
          cursors: MW,
          vA: nW(MW, Date.now())
        } : WW
      },
      provide: WW => jR.g.vA.from(WW, (WW => WW.vA))
    });
    var LW = MW(38816);
    const HW = "#e45649",
      DW = "#383a42",
      qR = "#696c77",
      ZW = "#986801",
      SW = "#e5e5e6",
      WR = "#fafafa",
      RR = "#eaeaeb",
      MR = "#526fff",
      wR = jR.g.theme({
        "&": {
          color: DW,
          backgroundColor: WR
        },
        ".cm-content": {
          caretColor: MR
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: MR
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: DW
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
          backgroundColor: WR,
          color: qR,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: SW
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: RR
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: RR,
          borderBottomColor: RR
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: SW,
            color: DW
          }
        }
      }, {
        dark: !1
      }),
      CR = EW.c.define([{
        tag: LW.n.keyword,
        color: "#a626a4"
      }, {
        tag: [LW.n.name, LW.n.deleted, LW.n.character, LW.n.propertyName, LW.n.macroName],
        color: HW
      }, {
        tag: [LW.n.function(LW.n.variableName), LW.n.labelName],
        color: "#4078f2"
      }, {
        tag: [LW.n.color, LW.n.constant(LW.n.name), LW.n.standard(LW.n.name)],
        color: ZW
      }, {
        tag: [LW.n.definition(LW.n.name), LW.n.separator],
        color: DW
      }, {
        tag: [LW.n.typeName, LW.n.className, LW.n.number, LW.n.changed, LW.n.annotation, LW.n.modifier, LW.n.self, LW.n.namespace],
        color: "#c18401"
      }, {
        tag: [LW.n.operator, LW.n.operatorKeyword, LW.n.url, LW.n.escape, LW.n.regexp, LW.n.link, LW.n.special(LW.n.string)],
        color: "#0184bc"
      }, {
        tag: [LW.n.meta, LW.n.comment],
        color: qR
      }, {
        tag: LW.n.strong,
        fontWeight: "bold"
      }, {
        tag: LW.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: LW.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: LW.n.link,
        color: qR,
        textDecoration: "underline"
      }, {
        tag: LW.n.heading,
        fontWeight: "bold",
        color: HW
      }, {
        tag: [LW.n.atom, LW.n.bool, LW.n.special(LW.n.variableName)],
        color: ZW
      }, {
        tag: [LW.n.processingInstruction, LW.n.string, LW.n.inserted],
        color: "#50a14f"
      }, {
        tag: LW.n.invalid,
        color: "#000000"
      }]),
      zM = [wR, (0, EW.hb)(CR)];
    var AR = MW(35077),
      bM = MW(38933);
    const yM = zR.j.define(),
      NR = zR.m.define({
        create: () => !1,
        update(WW, RW) {
          for (const MW of RW.effects) MW.is(yM) && (WW = MW.value);
          return WW
        }
      }),
      eR = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function BR(WW, RW) {
      return [NR, zR.p.fromClass(class {
        constructor(WW) {
          this.view = WW, this.onDown = WW => {
            const RW = WW.target instanceof Element && null !== WW.target.closest(".cm-tooltip");
            0 !== WW.button || RW || this.view.state.field(NR) || this.view.dispatch({
              effects: yM.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(NR) && this.view.dispatch({
              effects: yM.of(!1)
            })
          }, WW.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), zR.x.compute(["selection", NR], (MW => function(WW, RW, MW) {
        const wW = WW.selection.main;
        return wW.empty || WW.field(NR) || WW.sliceDoc(wW.from, wW.to).trim().length < 2 ? null : {
          pos: wW.from,
          above: !0,
          create: WW => {
            const wW = document.createElement("div");
            wW.className = "CodeSelectionActions", wW.setAttribute("role", "toolbar"), wW.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: CW,
                label: zR
              }
              of eR) {
              if (!MW && "explain" !== CW) continue;
              const AW = document.createElement("button");
              AW.type = "button", AW.textContent = zR, "change" !== CW && (AW.title = bM.d, AW.dataset.asksAi = "true"), AW.addEventListener("mousedown", (WW => {
                WW.preventDefault()
              })), AW.addEventListener("click", (() => {
                const MW = WW.state.selection.main;
                if (MW.empty) return;
                const wW = {
                  action: CW,
                  path: RW,
                  fromLine: WW.state.doc.lineAt(MW.from).number,
                  toLine: WW.state.doc.lineAt(MW.to > MW.from && WW.state.doc.lineAt(MW.to).from === MW.to ? MW.to - 1 : MW.to).number,
                  text: WW.state.sliceDoc(MW.from, MW.to)
                };
                sW.k.Sz("WorldCodeAiSelection", wW), WW.dispatch({
                  selection: {
                    anchor: MW.to
                  }
                })
              })), wW.appendChild(AW)
            }
            return {
              dom: wW
            }
          }
        }
      }(MW, WW, RW)))]
    }
    var tM = MW(940);
    const TR = new Set(["(", "{", "[", "<"]),
      gM = new Set([")", "}", "]", ">"]),
      iM = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function YR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function MW(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = [];
        for (const CW of WW) {
          let WW;
          WW = "punctuation" === CW.kind ? iM.text : "parameterName" === CW.kind ? iM.parameterName : RW, wW.push({
            str: CW.text,
            style: {
              color: WW,
              opacity: MW ? .5 : void 0
            }
          })
        }
        return wW
      }
      const wW = [];
      if (wW.push(...MW(WW.prefixDisplayParts, iM.text)), WW.parameters.length > 0) {
        wW.push("\n");
        for (let CW = 0; CW < WW.parameters.length; CW++) {
          const zR = WW.parameters[CW];
          wW.push("\t"), wW.push(...MW(zR.displayParts, iM.parameter, null !== RW && CW !== RW)), wW.push("\n")
        }
      }
      return wW.push(...MW(WW.suffixDisplayParts, iM.suffix)), WW.documentation && (wW.push("\n\n"), wW.push(...MW(WW.documentation, iM.docs))), wW
    }
    var JR = function(WW) {
      return WW[WW.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", WW[WW.DuplicateIdentifier = 2300] = "DuplicateIdentifier", WW
    }(JR || {});
    const PR = new Set([JR.DuplicateIdentifier]),
      IR = new Set([JR.VariableDefinedElsewhere]),
      oR = new Set([]),
      lR = "/index.js";

    function FR(WW) {
      return "/" + WW
    }

    function fR(WW, RW, MW) {
      WW.getSourceFile(RW) && WW.deleteFile(RW), WW.createFile(RW, MW)
    }

    function QR(WW) {
      return !!WW && ((0, lW.m)(WW) || (0, lW.l)(WW))
    }

    function rM(WW, RW, MW) {
      return () => {
        let wW = [...RW.languageService.getSemanticDiagnostics(MW), ...RW.languageService.getSyntacticDiagnostics(MW)];
        return wW = wW.filter((WW => !(0, QW.S)(WW.start) && !(0, QW.S)(WW.length) && !PR.has(WW.code))), WW || (wW = wW.filter((WW => !IR.has(WW.code)))), wW.map((WW => ({
          from: WW.start,
          to: WW.start + WW.length,
          message: "string" === typeof WW.messageText ? WW.messageText : WW.messageText.messageText,
          severity: oR.has(WW.code) ? "warning" : "error"
        })))
      }
    }

    function cM(WW, RW) {
      return MW => {
        var wW, CW;
        const zR = WW.languageService.getCompletionsAtPosition(RW, MW.pos, {});
        if (!zR) return {
          from: MW.pos,
          options: []
        };
        let AW = null !== (wW = null === (CW = zR.optionalReplacementSpan) || void 0 === CW ? void 0 : CW.start) && void 0 !== wW ? wW : MW.pos;
        if (!zR.optionalReplacementSpan) {
          const WW = MW.state.doc.sliceString(0, MW.pos);
          for (; AW > 0 && /[\w$]/.test(WW[AW - 1]);) AW--
        }
        return zR.entries = zR.entries.filter((WW => WW.kind !== iR().ScriptElementKind.warning)), {
          from: AW,
          options: zR.entries.map((wW => {
            var CW, zR, bR, yR;
            const NW = WW.languageService.getCompletionEntryDetails(RW, MW.pos, wW.name, {}, wW.source, {}, wW.data),
              eW = null !== (CW = null === (zR = wW.replacementSpan) || void 0 === zR ? void 0 : zR.start) && void 0 !== CW ? CW : AW,
              BW = wW.replacementSpan ? wW.replacementSpan.start + wW.replacementSpan.length : MW.pos,
              tR = null !== (bR = wW.insertText) && void 0 !== bR ? bR : wW.name;
            return {
              label: wW.name,
              detail: null === NW || void 0 === NW ? void 0 : NW.displayParts.map((WW => WW.text)).join(""),
              info: null === NW || void 0 === NW || null === (yR = NW.documentation) || void 0 === yR ? void 0 : yR.map((WW => WW.text)).join(""),
              apply: WW => {
                WW.dispatch({
                  changes: {
                    from: eW,
                    to: BW,
                    insert: tR
                  },
                  selection: {
                    anchor: eW + tR.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function XR(WW) {
      return RW => {
        const MW = document.createElement("div");
        MW.className = "CodeEditorTooltip";
        let wW = !1;
        return queueMicrotask((() => {
          wW || (bR.render((0, tM.jsx)(tR.c, {
            text: WW
          }), MW), RW.requestMeasure())
        })), {
          dom: MW,
          destroy() {
            wW = !0, queueMicrotask((() => {
              bR.unmountComponentAtNode(MW)
            }))
          }
        }
      }
    }

    function jM(WW, RW, MW) {
      return wW => {
        var CW;
        if (!RW) return [];
        const zR = null === (CW = wW.selection.WA[0]) || void 0 === CW ? void 0 : CW.head;
        if (void 0 === zR) return [];
        const AW = WW.languageService.getSignatureHelpItems(MW, zR, {});
        if (!AW || !AW.items.length) return [];
        const bR = AW.applicableSpan.start - AW.items[0].prefixDisplayParts.map((WW => WW.text)).join("").length,
          yR = AW.applicableSpan.start,
          NW = wW.doc.lineAt(zR),
          eW = NW.from,
          BW = Math.min(NW.to, zR);
        let tR, TW;
        return bR < eW ? (tR = eW, TW = BW) : (tR = bR, TW = yR), [{
          pos: tR,
          end: TW,
          above: !1,
          create: XR(YR(AW.items[0], AW.argumentIndex))
        }]
      }
    }

    function kM(WW, RW) {
      return (MW, wW, CW) => {
        const zR = WW.languageService.getQuickInfoAtPosition(RW, wW);
        if (!zR) return [];
        const AW = zR.textSpan.start,
          bR = zR.textSpan.start + zR.textSpan.length;
        if (wW < AW || wW >= bR) return [];
        if (zR.kind === iR().ScriptElementKind.memberFunctionElement || zR.kind === iR().ScriptElementKind.variableElement && "declare" === zR.kindModifiers) {
          const WW = zR.displayParts.findIndex((WW => "space" === WW.kind)); - 1 !== WW && (zR.displayParts = zR.displayParts.slice(WW));
          const RW = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            MW = zR.displayParts.findIndex((WW => "punctuation" === WW.kind && "(" === WW.text)); - 1 !== MW && (RW.prefixDisplayParts = zR.displayParts.slice(0, MW + 1), zR.displayParts = zR.displayParts.slice(MW + 1));
          const wW = zR.displayParts.findLastIndex((WW => "punctuation" === WW.kind && ")" === WW.text)); - 1 !== wW && (RW.suffixDisplayParts = zR.displayParts.slice(wW), zR.displayParts = zR.displayParts.slice(0, wW));
          let CW = 0,
            yR = [];
          for (const AW of zR.displayParts)
            if (TR.has(AW.text) ? CW++ : gM.has(AW.text) && CW--, "lineBreak" !== AW.kind) {
              if ("space" === AW.kind) {
                if (0 === yR.length) continue;
                yR.push({
                  kind: "space",
                  text: " "
                })
              } else yR.push(AW);
              0 === CW && "," === AW.text && (RW.parameters.push({
                displayParts: yR
              }), yR = [])
            } return yR.length > 0 && RW.parameters.push({
            displayParts: yR
          }), RW.documentation = zR.documentation, [{
            pos: AW,
            end: bR,
            above: !0,
            create: XR(YR(RW))
          }]
        }
        const yR = [];
        for (const WW of zR.displayParts) yR.push({
          str: WW.text,
          style: {
            color: iM.text
          }
        });
        if (zR.documentation) {
          yR.push("\n\n");
          for (const WW of zR.documentation) yR.push({
            str: WW.text,
            style: {
              color: iM.docs
            }
          })
        }
        return [{
          pos: AW,
          end: bR,
          above: !0,
          create: XR(yR)
        }]
      }
    }
    const aM = {
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
      semicolons: iR().SemicolonPreference.Insert
    };
    const sR = zR.j.define(),
      dR = {
        lineNumbers: !0,
        tabSize: 4
      };

    function pR(WW) {
      let {
        isLobbyCode: RW,
        code: MW,
        onChange: bR,
        canEditCode: tR,
        setTemporaryMessage: gR,
        close: QW,
        showTooltips: OW,
        lightMode: nW,
        collabState: LW,
        onRemoteDocChange: HW,
        files: DW,
        activePath: qR,
        pluginName: ZW,
        pluginFile: SW,
        pluginSource: WR,
        setActiveDocReplacer: RR,
        showAiHints: MR,
        canAiChangeCode: wR = tR
      } = WW;
      const [CR, bM] = (0, AW.useState)(null), yM = null === LW || void 0 === LW ? void 0 : LW.version, NR = null === LW || void 0 === LW ? void 0 : LW.clientID, eR = (0, AW.useRef)({
        isLobbyCode: RW,
        files: DW,
        code: MW,
        activePath: qR
      }), TR = (0, AW.useRef)(HW);
      TR.current = HW;
      const gM = (0, AW.useRef)(null),
        iM = (0, AW.useRef)(LW);
      iM.current = LW;
      const YR = (0, AW.useRef)(null),
        JR = (0, AW.useRef)(null),
        PR = (0, AW.useRef)(null),
        IR = (0, AW.useRef)(QW);
      IR.current = QW;
      const oR = (0, AW.useRef)(MW);
      oR.current = MW;
      const XR = (0, AW.useRef)(WR);
      XR.current = WR;
      const pR = function(WW, RW, MW, wW) {
        return MW ? `/plugin-preview/${MW}/${null!==wW&&void 0!==wW?wW:"index.ts"}` : WW ? FR(null !== RW && void 0 !== RW ? RW : oW.k) : lR
      }(RW, qR, ZW, SW);
      (0, AW.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: WW,
            files: RW,
            code: MW,
            activePath: wW
          } = eR.current, CW = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: iR().ModuleKind.ESNext,
            moduleResolution: iR().ModuleResolutionKind.Bundler,
            target: iR().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(IW.d).map((WW => [WW.specifier, [WW.typesVfsPath]])))
            }
          }, zR = new Map, AW = [];
          if (WW) {
            const WW = null !== RW && void 0 !== RW ? RW : {
              [oW.k]: MW || "\n"
            };
            for (const [RW, MW] of Object.entries(WW)) {
              const WW = FR(RW);
              zR.set(WW, MW || "\n"), AW.push(WW)
            }
            const CW = FR(null !== wW && void 0 !== wW ? wW : oW.k);
            zR.has(CW) ? zR.set(CW, MW || "\n") : (zR.set(CW, MW || "\n"), AW.push(CW)), zR.set("/node_modules/@bloxd/index.d.ts", eW.default), AW.push("/node_modules/@bloxd/index.d.ts");
            for (const RW of Object.values(IW.d)) {
              zR.set(RW.typesVfsPath, RW.types), AW.push(RW.typesVfsPath);
              for (const [WW, MW] of Object.entries(RW.files)) {
                const wW = `/plugin-preview/${RW.name}/${WW}`;
                zR.set(wW, MW || "\n"), AW.push(wW)
              }
            }
          } else zR.set(lR, MW || "\n"), AW.push(lR);
          zR.set("/globals.d.ts", WW ? NW.e : yR.d), zR.set("/lib.d.ts", BW.b), AW.push("/globals.d.ts", "/lib.d.ts");
          const bR = TW.e(zR),
            tR = TW.h(bR, AW, iR(), CW);
          bM({
            BA: tR,
            fsMap: zR
          })
        }()
      }), []), (0, AW.useEffect)((() => {
        var WW, wW;
        if (!CR || !RW) return;
        const {
          BA: CW,
          fsMap: zR
        } = CR;
        if (function(WW, RW, MW) {
            const wW = new Set;
            for (const [CW, zR] of Object.entries(MW)) {
              const MW = FR(CW);
              wW.add(MW);
              const AW = zR || "\n";
              RW.get(MW) !== AW && (RW.set(MW, AW), fR(WW, MW, AW))
            }
            for (const CW of [...RW.keys()]) "/globals.d.ts" === CW || "/lib.d.ts" === CW || CW.startsWith("/node_modules/") || CW.startsWith("/plugin-preview/") || wW.has(CW) || (RW.delete(CW), WW.getSourceFile(CW) && WW.deleteFile(CW))
          }(CW, zR, null !== DW && void 0 !== DW ? DW : {
            [oW.k]: MW || "\n"
          }), ZW) return void fR(CW, pR, WR || "\n");
        const AW = null !== (WW = null === (wW = gM.current) || void 0 === wW ? void 0 : wW.state.doc.toString()) && void 0 !== WW ? WW : MW;
        fR(CW, pR, AW || "\n")
      }), [DW, qR, CR, ZW, WR, pR, MW, RW]), (0, AW.useEffect)((() => {
        if (!CR) return;
        const {
          BA: WW
        } = CR;
        fR(WW, pR, (ZW ? WR : MW) || "\n")
      }), [MW, ZW, WR, pR, CR]), (0, AW.useEffect)((() => () => {
        JR.current && (JR.current(), JR.current = null)
      }), []), (0, AW.useEffect)((() => (RR(((WW, RW) => {
        if (ZW) return !1;
        const MW = gM.current,
          wW = iM.current,
          CW = wW ? (0, lW.u)(wW.docKey) : null;
        if (!MW || !wW || YR.current !== wW.clientID || WW !== CW) return !1;
        const zR = MW.state.doc.toString();
        return zR !== RW && MW.dispatch({
          changes: {
            from: 0,
            to: zR.length,
            insert: RW
          }
        }), !0
      })), () => {
        gM.current = null, YR.current = null, RR(null)
      })), [RR, ZW]);
      const hR = RW ? ZW ? null : null !== qR && void 0 !== qR ? qR : oW.k : AR.e,
        UR = function(WW, RW) {
          const MW = (0, AW.useRef)(null);
          (0, AW.useEffect)((() => {
            var WW;
            (null === (WW = MW.current) || void 0 === WW ? void 0 : WW.path) !== RW && (MW.current = null)
          }), [RW]);
          const wW = WW => {
            const wW = MW.current;
            if (null === WW || void 0 === WW || !WW.dom.isConnected || !wW || wW.path !== RW) return;
            MW.current = null;
            const {
              doc: CW
            } = WW.state, {
              from: AW
            } = CW.line(Math.min(Math.max(wW.line, 1), CW.lines));
            WW.dispatch({
              selection: {
                anchor: AW
              },
              effects: zR.e.scrollIntoView(AW, {
                y: "center"
              })
            }), WW.focus()
          };
          return (0, fW.f)("CodeEditorGoToLine", (RW => {
            MW.current = RW, wW(WW.current)
          })), wW
        }(gM, hR);
      (0, fW.f)("FormatCode", (() => {
        if (!CR || !gM.current || ZW) return;
        const {
          BA: WW,
          fsMap: MW
        } = CR, wW = WW.getSourceFile(pR).getFullText();
        let CW = 0;
        if (RW && DW)
          for (const [RW, bR] of Object.entries(DW)) RW !== (null !== qR && void 0 !== qR ? qR : oW.k) && (CW += bR.length);
        const zR = function(WW, RW, MW, wW, CW) {
          const zR = WW.languageService.getFormattingEditsForDocument(wW, aM);
          if (!zR.length) return rR.e.error("Code is already formatted.");
          zR.sort(((WW, RW) => RW.span.start - WW.span.start));
          let AW = WW.getSourceFile(wW).getFullText();
          for (const bR of zR) AW = AW.slice(0, bR.span.start) + bR.nG + AW.slice(bR.span.start + bR.span.length);
          return AW !== (MW ? (0, FW.p)(AW, CW) : (0, FW.l)(AW)) ? rR.e.error("Formatting the code will go beyond the character limit.") : rR.e.value(AW)
        }(WW, 0, RW, pR, CW);
        if (zR.isError()) return void gR({
          message: zR.asError().message,
          type: "warning"
        });
        const AW = zR.getValue();
        AW && (gM.current.dispatch({
          changes: {
            from: 0,
            to: wW.length,
            insert: AW
          },
          selection: {
            anchor: AW.length
          }
        }), fR(WW, pR, AW), bR(AW))
      }));
      const ER = (0, AW.useMemo)((() => {
        if (!CR) return [];
        const {
          BA: WW,
          fsMap: MW
        } = CR;
        ! function(WW, RW, MW, wW) {
          if (WW.getSourceFile(MW)) return;
          const CW = wW || "\n";
          RW.set(MW, CW), WW.createFile(MW, CW)
        }(WW, MW, pR, (ZW ? XR.current : oR.current) || "\n");
        const AW = RW && QR(ZW ? null !== SW && void 0 !== SW ? SW : "index.ts" : qR),
          bR = [(0, CW.d)({
            jsx: !1,
            typescript: AW
          }), zR.h.highest(zR.e.domEventHandlers({
            keydown: WW => "Escape" === WW.key ? (IR.current(), WW.stopPropagation(), !0) : (WW.stopPropagation(), !1)
          })), (0, wW.d)({
            override: [cM(WW, pR)]
          }), jR.n.fromClass(class {
            constructor(WW) {
              this.view = WW, this.timeout = null, this.scheduleParse()
            }
            update(WW) {
              (WW.docChanged || WW.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const WW = this.view.viewport.to;
                (0, EW.lb)(this.view.state, WW) || (0, EW.P)(this.view, WW, VW) || this.scheduleParse()
              }), mR))
            }
          }), zR.e.lineWrapping, zR.m.define({
            create: jM(WW, OW, pR),
            update(RW, MW) {
              const wW = MW.effects.some((WW => WW.is(sR)));
              return MW.docChanged || MW.selection || wW ? (fR(WW, pR, MW.state.doc.toString() || " "), jM(WW, OW, pR)(MW.state)) : RW
            },
            provide: WW => zR.x.computeN([WW], (RW => RW.field(WW)))
          }), (0, zR.u)(kM(WW, pR)), (0, JW.c)(rM(RW, WW, pR)), zR.p.fromClass(class {
            constructor(WW) {
              this.view = WW, this.searchPanel = null
            }
            update(WW) {
              const RW = WW.view.dom.querySelector(".cm-search");
              if (RW !== this.searchPanel) {
                if (this.searchPanel = RW, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (WW => {
                  "Escape" === WW.key && (0, YW.d)(this.view), WW.stopPropagation()
                }))
              }
            }
          })];
        MR && !ZW && bR.push(BR(RW ? null !== qR && void 0 !== qR ? qR : oW.k : AR.e, wR));
        const yR = iM.current;
        if (yR && !ZW) {
          bR.push(... function(WW, RW, MW, wW, CW) {
            let zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const AW = (0, lW.u)(MW),
              bR = jR.n.fromClass(class {
                constructor(WW) {
                  this.view = WW, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.subToken = void 0, this.subToken = sW.k.subscribe("codeCollab", (WW => {
                    WW.docKey === AW && WW.type === lW.e.Updates && (WW.updates ? this.applyUpdates(WW.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(WW) {
                  const RW = JSON.parse(WW).map((WW => ({
                    clientID: WW.clientID,
                    changes: XW.ChangeSet.fromJSON(WW.changes)
                  })));
                  RW.length > 0 && (this.view.dispatch((0, cR.h)(this.view.state, RW)), CW && CW(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(WW) {
                  zR && (WW.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const WW = (0, cR.j)(this.view.state);
                  if (this.pushing || !WW.length) return;
                  const RW = Date.now() - this.lastPushTime;
                  if (RW < UW) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), UW - RW)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), pW);
                  const MW = (0, cR.g)(this.view.state),
                    CW = WW.map((WW => ({
                      clientID: WW.clientID,
                      changes: WW.changes.toJSON()
                    }))),
                    zR = JSON.stringify(CW);
                  zR.length <= lW.h ? kR.gameBridge.send("sendCodeCollab", {
                    yV: lW.d.Push,
                    tV: AW,
                    iV: MW,
                    lE: zR
                  }) : (0, dW.postJsonWithMetricsCookiesAndJsonResponse)(`${wW.gsUrl}/code/collab-push`, aR.h["collab-push"].toBuffer({
                    gameNameWithVariation: wW.gameNameWithVariation,
                    lobbyName: wW.lobbyName,
                    docKey: AW,
                    version: MW,
                    updates: zR
                  }), {
                    retries: 0
                  }).catch((WW => {
                    console.error("[CodeCollab] HTTP push failed", WW)
                  }))
                }
                pull() {
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const WW = (0, cR.g)(this.view.state);
                  (0, dW.postJsonWithMetricsCookiesAndJsonResponse)(`${wW.gsUrl}/code/collab-pull`, aR.h["collab-pull"].toBuffer({
                    gameNameWithVariation: wW.gameNameWithVariation,
                    lobbyName: wW.lobbyName,
                    docKey: AW,
                    fromVersion: WW
                  }), {
                    retries: 1
                  }).then((WW => {
                    if (WW.fullDoc) return void sW.k.Sz("codeCollabRejoin", {
                      docKey: AW,
                      doc: WW.fullDoc,
                      version: WW.version
                    });
                    const RW = JSON.parse(WW.updates).map((WW => ({
                      clientID: WW.clientID,
                      changes: XW.ChangeSet.fromJSON(WW.changes)
                    })));
                    RW.length > 0 && (this.view.dispatch((0, cR.h)(this.view.state, RW)), CW && CW(this.view.state.doc.toString())), this.clearPushState(), this.push()
                  })).catch((WW => {
                    console.error("[CodeCollab] Pull failed", WW)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const WW = Date.now();
                  if (WW - this.lastCursorSent < hW) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), hW)));
                  this.lastCursorSent = WW;
                  const RW = this.view.state.selection.main;
                  kR.gameBridge.send("sendCodeCollab", {
                    yV: lW.d.Cursor,
                    tV: AW,
                    FE: RW.anchor,
                    QE: RW.head
                  })
                }
                destroy() {
                  sW.k.unsubscribe(this.subToken), this.pushTimeout && clearTimeout(this.pushTimeout), this.pushDelayTimeout && clearTimeout(this.pushDelayTimeout), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, cR.e)({
              startVersion: WW,
              clientID: RW
            }), bR]
          }(yM, NR, yR.docKey, yR.httpConfig, (WW => {
            var RW;
            null === (RW = TR.current) || void 0 === RW || RW.call(TR, WW)
          }), tR));
          const WW = function(WW, RW) {
            const MW = (0, lW.u)(WW);
            return {
              extensions: [GW],
              connect(WW) {
                if (RW) {
                  const MW = RW.map((WW => vR.of({
                    playerId: WW.playerId,
                    playerName: WW.playerName,
                    colour: WW.colour,
                    anchor: WW.anchor,
                    head: WW.head,
                    lastMoved: Date.now()
                  })));
                  MW.length > 0 && WW.dispatch({
                    effects: MW
                  })
                }
                const wW = sW.k.subscribe("codeCollab", (RW => {
                    if (RW.docKey === MW)
                      if (RW.type === lW.e.RemoteCursor) WW.dispatch({
                        effects: vR.of({
                          playerId: RW.playerId,
                          playerName: RW.playerName,
                          colour: RW.colour,
                          anchor: RW.anchor,
                          head: RW.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (RW.type === lW.e.Presence) {
                      const MW = JSON.parse(RW.peers),
                        wW = new Set(MW.map((WW => WW.playerId))),
                        CW = WW.state.field(GW),
                        zR = [];
                      for (const [WW] of CW.cursors) wW.has(WW) || zR.push(KW.of(WW));
                      zR.length > 0 && WW.dispatch({
                        effects: zR
                      })
                    }
                  })),
                  CW = setInterval((() => {
                    WW.dom.isConnected ? WW.dispatch({
                      effects: uW.of(Date.now())
                    }) : clearInterval(CW)
                  }), xR);
                return () => {
                  sW.k.unsubscribe(wW), clearInterval(CW)
                }
              }
            }
          }(yR.docKey, yR.existingCursors);
          bR.push(...WW.extensions), PR.current = WW.connect
        } else PR.current = null;
        return bR
      }), [RW, CR, OW, yM, NR, pR, qR, ZW, SW, tR, MR, wR]);
      if (!CR || !LW && !ZW) return (0, tM.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, tM.jsx)(PW.d, {})
      });
      const VR = ZW ? `plugin-${ZW}-${null!==SW&&void 0!==SW?SW:"index.ts"}` : LW ? `collab-${LW.clientID}` : `local-${RW}`;
      return (0, tM.jsx)(zR.r, {
        value: ZW ? null !== WR && void 0 !== WR ? WR : "" : MW,
        onChange: bR,
        extensions: ER,
        className: "CodeEditorContent",
        theme: nW ? zM : "dark",
        editable: tR && !ZW,
        basicSetup: dR,
        onCreateEditor: WW => {
          var RW;
          gM.current = WW, YR.current = null !== (RW = null === LW || void 0 === LW ? void 0 : LW.clientID) && void 0 !== RW ? RW : null, gM.current.focus(), UR(WW), JR.current && JR.current(), PR.current && (JR.current = PR.current(WW))
        }
      }, VR)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);