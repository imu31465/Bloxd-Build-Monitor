export const id = 273;
export const ids = [273];
export const modules = {
  40028: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => cT
    });
    var VB = dB(40033),
      yB = dB(40073),
      pB = dB(40078),
      lB = dB(62),
      JB = dB(72),
      YB = dB(40096),
      gB = dB(40104),
      oB = dB(4147),
      kB = dB(40107),
      LB = dB(1657),
      OB = dB(40115),
      DB = dB(40136),
      uB = dB.n(DB),
      HB = dB(40084),
      EB = dB(40092),
      vB = dB(1225),
      mB = dB(35823),
      iB = dB(1117),
      NB = dB(35832),
      tB = dB(35721),
      fB = dB(1317),
      sB = dB(572),
      MB = dB(1126),
      zB = dB(40187),
      wB = dB(40036),
      UB = dB(40040),
      FB = dB(1679),
      KB = dB(3249),
      rB = dB(24),
      IB = dB(1020);
    const cB = 1e4,
      SB = 250,
      PB = 250;
    var QB = dB(40060);
    const RB = 50,
      aB = 100;
    const ZB = 2e3,
      XB = wB.x.define(),
      WB = wB.x.define(),
      hB = wB.x.define();
    class CB extends UB.p {
      constructor(BB, TB, dB) {
        super(), this.colour = BB, this.playerName = TB, this.showName = dB
      }
      toDOM() {
        const BB = document.createElement("span");
        BB.className = "cm-remote-cursor-wrapper", BB.style.borderLeftColor = this.colour;
        const TB = document.createElement("span");
        if (TB.className = "cm-remote-cursor", TB.style.borderLeftColor = this.colour, BB.appendChild(TB), this.showName) {
          const TB = document.createElement("span");
          TB.className = "cm-remote-cursor-name", TB.style.backgroundColor = this.colour, TB.textContent = this.playerName, BB.appendChild(TB)
        }
        return BB
      }
      eq(BB) {
        return this.colour === BB.colour && this.playerName === BB.playerName && this.showName === BB.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function GB(BB, TB) {
      const dB = [],
        VB = [];
      for (const [, lB] of BB) {
        const BB = TB - lB.lastMoved < ZB;
        if (dB.push({
            pos: lB.head,
            decoration: UB.c.widget({
              widget: new CB(lB.colour, lB.playerName, BB),
              side: 1
            })
          }), lB.anchor !== lB.head) {
          const BB = Math.min(lB.anchor, lB.head),
            TB = Math.max(lB.anchor, lB.head);
          VB.push({
            from: BB,
            to: TB,
            decoration: UB.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${lB.colour}33`
              }
            })
          })
        }
      }
      const yB = new wB.t,
        pB = [];
      for (const lB of dB) pB.push({
        bias: 1,
        deco: lB.decoration,
        from: lB.pos,
        to: lB.pos
      });
      for (const lB of VB) pB.push({
        bias: 0,
        deco: lB.decoration,
        from: lB.from,
        to: lB.to
      });
      pB.sort(((BB, TB) => BB.from - TB.from || BB.deco.startSide - TB.deco.startSide || BB.bias - TB.bias));
      for (const lB of pB) yB.add(lB.from, lB.to, lB.deco);
      return yB.finish()
    }
    const qB = wB.A.define({
      create: () => ({
        cursors: new Map,
        QB: UB.c.none
      }),
      update(BB, TB) {
        let dB = BB.cursors,
          VB = !1;
        if (TB.docChanged) {
          const BB = new Map;
          for (const [VB, yB] of dB) BB.set(VB, {
            ...yB,
            anchor: TB.changes.mapPos(yB.anchor, 1),
            head: TB.changes.mapPos(yB.head, 1)
          });
          dB = BB, VB = !0
        }
        for (const yB of TB.effects)
          if (yB.is(XB)) {
            if (!Number.isInteger(yB.value.anchor) || !Number.isInteger(yB.value.head)) {
              console.warn(`Code Editor: ignored player ${yB.value.playerId}'s cursor at ${yB.value.anchor}-${yB.value.head}`);
              continue
            }
            const pB = TB.state.doc.length,
              lB = {
                ...yB.value,
                anchor: Math.min(yB.value.anchor, pB),
                head: Math.min(yB.value.head, pB)
              };
            dB === BB.cursors && (dB = new Map(dB)), dB.set(lB.playerId, lB), VB = !0
          } else yB.is(WB) ? dB.has(yB.value) && (dB === BB.cursors && (dB = new Map(dB)), dB.delete(yB.value), VB = !0) : yB.is(hB) && (VB = !0);
        return VB ? {
          cursors: dB,
          QB: GB(dB, Date.now())
        } : BB
      },
      provide: BB => UB.i.QB.from(BB, (BB => BB.QB))
    });
    var xB = dB(40069);
    const jB = "#e45649",
      AB = "#383a42",
      bB = "#696c77",
      nB = "#986801",
      eB = "#e5e5e6",
      BT = "#fafafa",
      TT = "#eaeaeb",
      dT = "#526fff",
      VT = UB.i.theme({
        "&": {
          color: AB,
          backgroundColor: BT
        },
        ".cm-content": {
          caretColor: dT
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: dT
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: AB
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
          backgroundColor: BT,
          color: bB,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: eB
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: TT
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: TT,
          borderBottomColor: TT
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: eB,
            color: AB
          }
        }
      }, {
        dark: !1
      }),
      yT = QB.b.define([{
        tag: xB.h.keyword,
        color: "#a626a4"
      }, {
        tag: [xB.h.name, xB.h.deleted, xB.h.character, xB.h.propertyName, xB.h.macroName],
        color: jB
      }, {
        tag: [xB.h.function(xB.h.variableName), xB.h.labelName],
        color: "#4078f2"
      }, {
        tag: [xB.h.color, xB.h.constant(xB.h.name), xB.h.standard(xB.h.name)],
        color: nB
      }, {
        tag: [xB.h.definition(xB.h.name), xB.h.separator],
        color: AB
      }, {
        tag: [xB.h.typeName, xB.h.className, xB.h.number, xB.h.changed, xB.h.annotation, xB.h.modifier, xB.h.self, xB.h.namespace],
        color: "#c18401"
      }, {
        tag: [xB.h.operator, xB.h.operatorKeyword, xB.h.url, xB.h.escape, xB.h.regexp, xB.h.link, xB.h.special(xB.h.string)],
        color: "#0184bc"
      }, {
        tag: [xB.h.meta, xB.h.comment],
        color: bB
      }, {
        tag: xB.h.strong,
        fontWeight: "bold"
      }, {
        tag: xB.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: xB.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: xB.h.link,
        color: bB,
        textDecoration: "underline"
      }, {
        tag: xB.h.heading,
        fontWeight: "bold",
        color: jB
      }, {
        tag: [xB.h.atom, xB.h.bool, xB.h.special(xB.h.variableName)],
        color: nB
      }, {
        tag: [xB.h.processingInstruction, xB.h.string, xB.h.inserted],
        color: "#50a14f"
      }, {
        tag: xB.h.invalid,
        color: "#000000"
      }]),
      pT = [VT, (0, QB.cb)(yT)];
    var lT = dB(35873),
      JT = dB(40193);
    const YT = pB.f.define(),
      gT = pB.g.define({
        create: () => !1,
        update(BB, TB) {
          for (const dB of TB.effects) dB.is(YT) && (BB = dB.value);
          return BB
        }
      }),
      oT = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function kT(BB, TB) {
      return [gT, pB.k.fromClass(class {
        constructor(BB) {
          this.view = BB, this.onDown = BB => {
            const TB = BB.target instanceof Element && null !== BB.target.closest(".cm-tooltip");
            0 !== BB.button || TB || this.view.state.field(gT) || this.view.dispatch({
              effects: YT.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(gT) && this.view.dispatch({
              effects: YT.of(!1)
            })
          }, BB.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), pB.r.compute(["selection", gT], (dB => function(BB, TB, dB) {
        const VB = BB.selection.main;
        return VB.empty || BB.field(gT) || BB.sliceDoc(VB.from, VB.to).trim().length < 2 ? null : {
          pos: VB.from,
          above: !0,
          create: BB => {
            const VB = document.createElement("div");
            VB.className = "CodeSelectionActions", VB.setAttribute("role", "toolbar"), VB.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: yB,
                label: pB
              }
              of oT) {
              if (!dB && "explain" !== yB) continue;
              const lB = document.createElement("button");
              lB.type = "button", lB.textContent = pB, "change" !== yB && (lB.title = JT.e, lB.dataset.asksAi = "true"), lB.addEventListener("mousedown", (BB => {
                BB.preventDefault()
              })), lB.addEventListener("click", (() => {
                const dB = BB.state.selection.main;
                if (dB.empty) return;
                const VB = {
                  action: yB,
                  path: TB,
                  fromLine: BB.state.doc.lineAt(dB.from).number,
                  toLine: BB.state.doc.lineAt(dB.to > dB.from && BB.state.doc.lineAt(dB.to).from === dB.to ? dB.to - 1 : dB.to).number,
                  text: BB.state.sliceDoc(dB.from, dB.to)
                };
                rB.h.yH("WorldCodeAiSelection", VB), BB.dispatch({
                  selection: {
                    anchor: dB.to
                  }
                })
              })), VB.appendChild(lB)
            }
            return {
              dom: VB
            }
          }
        }
      }(dB, BB, TB)))]
    }
    var LT = dB(980);
    const OT = new Set(["(", "{", "[", "<"]),
      DT = new Set([")", "}", "]", ">"]),
      uT = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function HT(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function dB(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = [];
        for (const yB of BB) {
          let BB;
          BB = "punctuation" === yB.kind ? uT.text : "parameterName" === yB.kind ? uT.parameterName : TB, VB.push({
            str: yB.text,
            style: {
              color: BB,
              opacity: dB ? .5 : void 0
            }
          })
        }
        return VB
      }
      const VB = [];
      if (VB.push(...dB(BB.prefixDisplayParts, uT.text)), BB.parameters.length > 0) {
        VB.push("\n");
        for (let yB = 0; yB < BB.parameters.length; yB++) {
          const pB = BB.parameters[yB];
          VB.push("\t"), VB.push(...dB(pB.displayParts, uT.parameter, null !== TB && yB !== TB)), VB.push("\n")
        }
      }
      return VB.push(...dB(BB.suffixDisplayParts, uT.suffix)), BB.documentation && (VB.push("\n\n"), VB.push(...dB(BB.documentation, uT.docs))), VB
    }
    var ET = function(BB) {
      return BB[BB.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", BB[BB.DuplicateIdentifier = 2300] = "DuplicateIdentifier", BB
    }(ET || {});
    const vT = new Set([ET.DuplicateIdentifier]),
      mT = new Set([ET.VariableDefinedElsewhere]),
      iT = new Set([]),
      NT = "/index.js";

    function tT(BB) {
      return "/" + BB
    }

    function fT(BB, TB, dB) {
      BB.getSourceFile(TB) && BB.deleteFile(TB), BB.createFile(TB, dB)
    }

    function sT(BB) {
      return !!BB && ((0, NB.s)(BB) || (0, NB.p)(BB))
    }

    function MT(BB, TB, dB) {
      return () => {
        let VB = [...TB.languageService.getSemanticDiagnostics(dB), ...TB.languageService.getSyntacticDiagnostics(dB)];
        return VB = VB.filter((BB => !(0, sB.M)(BB.start) && !(0, sB.M)(BB.length) && !vT.has(BB.code))), BB || (VB = VB.filter((BB => !mT.has(BB.code)))), VB.map((BB => ({
          from: BB.start,
          to: BB.start + BB.length,
          message: "string" === typeof BB.messageText ? BB.messageText : BB.messageText.messageText,
          severity: iT.has(BB.code) ? "warning" : "error"
        })))
      }
    }

    function zT(BB, TB) {
      return dB => {
        var VB, yB;
        const pB = BB.languageService.getCompletionsAtPosition(TB, dB.pos, {});
        if (!pB) return {
          from: dB.pos,
          options: []
        };
        let lB = null !== (VB = null === (yB = pB.optionalReplacementSpan) || void 0 === yB ? void 0 : yB.start) && void 0 !== VB ? VB : dB.pos;
        if (!pB.optionalReplacementSpan) {
          const BB = dB.state.doc.sliceString(0, dB.pos);
          for (; lB > 0 && /[\w$]/.test(BB[lB - 1]);) lB--
        }
        return pB.entries = pB.entries.filter((BB => BB.kind !== uB().ScriptElementKind.warning)), {
          from: lB,
          options: pB.entries.map((VB => {
            var yB, pB, JB, YB;
            const gB = BB.languageService.getCompletionEntryDetails(TB, dB.pos, VB.name, {}, VB.source, {}, VB.data),
              oB = null !== (yB = null === (pB = VB.replacementSpan) || void 0 === pB ? void 0 : pB.start) && void 0 !== yB ? yB : lB,
              kB = VB.replacementSpan ? VB.replacementSpan.start + VB.replacementSpan.length : dB.pos,
              LB = null !== (JB = VB.insertText) && void 0 !== JB ? JB : VB.name;
            return {
              label: VB.name,
              detail: null === gB || void 0 === gB ? void 0 : gB.displayParts.map((BB => BB.text)).join(""),
              info: null === gB || void 0 === gB || null === (YB = gB.documentation) || void 0 === YB ? void 0 : YB.map((BB => BB.text)).join(""),
              apply: BB => {
                BB.dispatch({
                  changes: {
                    from: oB,
                    to: kB,
                    insert: LB
                  },
                  selection: {
                    anchor: oB + LB.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function wT(BB) {
      return TB => {
        const dB = document.createElement("div");
        dB.className = "CodeEditorTooltip";
        let VB = !1;
        return queueMicrotask((() => {
          VB || (JB.render((0, LT.jsx)(LB.e, {
            text: BB
          }), dB), TB.requestMeasure())
        })), {
          dom: dB,
          destroy() {
            VB = !0, queueMicrotask((() => {
              JB.unmountComponentAtNode(dB)
            }))
          }
        }
      }
    }

    function UT(BB, TB, dB) {
      return VB => {
        var yB;
        if (!TB) return [];
        const pB = null === (yB = VB.selection.ek[0]) || void 0 === yB ? void 0 : yB.head;
        if (void 0 === pB) return [];
        const lB = BB.languageService.getSignatureHelpItems(dB, pB, {});
        if (!lB || !lB.items.length) return [];
        const JB = lB.applicableSpan.start - lB.items[0].prefixDisplayParts.map((BB => BB.text)).join("").length,
          YB = lB.applicableSpan.start,
          gB = VB.doc.lineAt(pB),
          oB = gB.from,
          kB = Math.min(gB.to, pB);
        let LB, OB;
        return JB < oB ? (LB = oB, OB = kB) : (LB = JB, OB = YB), [{
          pos: LB,
          end: OB,
          above: !1,
          create: wT(HT(lB.items[0], lB.argumentIndex))
        }]
      }
    }

    function FT(BB, TB) {
      return (dB, VB, yB) => {
        const pB = BB.languageService.getQuickInfoAtPosition(TB, VB);
        if (!pB) return [];
        const lB = pB.textSpan.start,
          JB = pB.textSpan.start + pB.textSpan.length;
        if (VB < lB || VB >= JB) return [];
        if (pB.kind === uB().ScriptElementKind.memberFunctionElement || pB.kind === uB().ScriptElementKind.variableElement && "declare" === pB.kindModifiers) {
          const BB = pB.displayParts.findIndex((BB => "space" === BB.kind)); - 1 !== BB && (pB.displayParts = pB.displayParts.slice(BB));
          const TB = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            dB = pB.displayParts.findIndex((BB => "punctuation" === BB.kind && "(" === BB.text)); - 1 !== dB && (TB.prefixDisplayParts = pB.displayParts.slice(0, dB + 1), pB.displayParts = pB.displayParts.slice(dB + 1));
          const VB = pB.displayParts.findLastIndex((BB => "punctuation" === BB.kind && ")" === BB.text)); - 1 !== VB && (TB.suffixDisplayParts = pB.displayParts.slice(VB), pB.displayParts = pB.displayParts.slice(0, VB));
          let yB = 0,
            YB = [];
          for (const lB of pB.displayParts)
            if (OT.has(lB.text) ? yB++ : DT.has(lB.text) && yB--, "lineBreak" !== lB.kind) {
              if ("space" === lB.kind) {
                if (0 === YB.length) continue;
                YB.push({
                  kind: "space",
                  text: " "
                })
              } else YB.push(lB);
              0 === yB && "," === lB.text && (TB.parameters.push({
                displayParts: YB
              }), YB = [])
            } return YB.length > 0 && TB.parameters.push({
            displayParts: YB
          }), TB.documentation = pB.documentation, [{
            pos: lB,
            end: JB,
            above: !0,
            create: wT(HT(TB))
          }]
        }
        const YB = [];
        for (const BB of pB.displayParts) YB.push({
          str: BB.text,
          style: {
            color: uT.text
          }
        });
        if (pB.documentation) {
          YB.push("\n\n");
          for (const BB of pB.documentation) YB.push({
            str: BB.text,
            style: {
              color: uT.docs
            }
          })
        }
        return [{
          pos: lB,
          end: JB,
          above: !0,
          create: wT(YB)
        }]
      }
    }
    const KT = {
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
      semicolons: uB().SemicolonPreference.Insert
    };
    const rT = pB.f.define(),
      IT = {
        lineNumbers: !0,
        tabSize: 4
      };

    function cT(BB) {
      let {
        isLobbyCode: TB,
        code: dB,
        onChange: JB,
        canEditCode: LB,
        setTemporaryMessage: DB,
        close: sB,
        showTooltips: CB,
        lightMode: GB,
        collabState: xB,
        onRemoteDocChange: jB,
        files: AB,
        activePath: bB,
        pluginName: nB,
        pluginFile: eB,
        pluginSource: BT,
        setActiveDocReplacer: TT,
        showAiHints: dT,
        canAiChangeCode: VT = LB
      } = BB;
      const [yT, JT] = (0, lB.useState)(null), YT = null === xB || void 0 === xB ? void 0 : xB.version, gT = null === xB || void 0 === xB ? void 0 : xB.clientID, oT = (0, lB.useRef)({
        isLobbyCode: TB,
        files: AB,
        code: dB,
        activePath: bB
      }), OT = (0, lB.useRef)(jB);
      OT.current = jB;
      const DT = (0, lB.useRef)(null),
        uT = (0, lB.useRef)(xB);
      uT.current = xB;
      const HT = (0, lB.useRef)(null),
        ET = (0, lB.useRef)(null),
        vT = (0, lB.useRef)(null),
        mT = (0, lB.useRef)(sB);
      mT.current = sB;
      const iT = (0, lB.useRef)(dB);
      iT.current = dB;
      const wT = (0, lB.useRef)(BT);
      wT.current = BT;
      const cT = function(BB, TB, dB, VB) {
        return dB ? `/plugin-preview/${dB}/${null!==VB&&void 0!==VB?VB:"index.ts"}` : BB ? tT(null !== TB && void 0 !== TB ? TB : iB.f) : NT
      }(TB, bB, nB, eB);
      (0, lB.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: BB,
            files: TB,
            code: dB,
            activePath: VB
          } = oT.current, yB = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: uB().ModuleKind.ESNext,
            moduleResolution: uB().ModuleResolutionKind.Bundler,
            target: uB().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(mB.f).map((BB => [BB.specifier, [BB.typesVfsPath]])))
            }
          }, pB = new Map, lB = [];
          if (BB) {
            const BB = null !== TB && void 0 !== TB ? TB : {
              [iB.f]: dB || "\n"
            };
            for (const [TB, dB] of Object.entries(BB)) {
              const BB = tT(TB);
              pB.set(BB, dB || "\n"), lB.push(BB)
            }
            const yB = tT(null !== VB && void 0 !== VB ? VB : iB.f);
            pB.has(yB) ? pB.set(yB, dB || "\n") : (pB.set(yB, dB || "\n"), lB.push(yB)), pB.set("/node_modules/@bloxd/index.d.ts", oB.default), lB.push("/node_modules/@bloxd/index.d.ts");
            for (const TB of Object.values(mB.f)) {
              pB.set(TB.typesVfsPath, TB.types), lB.push(TB.typesVfsPath);
              for (const [BB, dB] of Object.entries(TB.files)) {
                const VB = `/plugin-preview/${TB.name}/${BB}`;
                pB.set(VB, dB || "\n"), lB.push(VB)
              }
            }
          } else pB.set(NT, dB || "\n"), lB.push(NT);
          pB.set("/globals.d.ts", BB ? gB.c : YB.e), pB.set("/lib.d.ts", kB.c), lB.push("/globals.d.ts", "/lib.d.ts");
          const JB = OB.d(pB),
            LB = OB.f(JB, lB, uB(), yB);
          JT({
            GL: LB,
            fsMap: pB
          })
        }()
      }), []), (0, lB.useEffect)((() => {
        var BB, VB;
        if (!yT || !TB) return;
        const {
          GL: yB,
          fsMap: pB
        } = yT;
        if (function(BB, TB, dB) {
            const VB = new Set;
            for (const [yB, pB] of Object.entries(dB)) {
              const dB = tT(yB);
              VB.add(dB);
              const lB = pB || "\n";
              TB.get(dB) !== lB && (TB.set(dB, lB), fT(BB, dB, lB))
            }
            for (const yB of [...TB.keys()]) "/globals.d.ts" === yB || "/lib.d.ts" === yB || yB.startsWith("/node_modules/") || yB.startsWith("/plugin-preview/") || VB.has(yB) || (TB.delete(yB), BB.getSourceFile(yB) && BB.deleteFile(yB))
          }(yB, pB, null !== AB && void 0 !== AB ? AB : {
            [iB.f]: dB || "\n"
          }), nB) return void fT(yB, cT, BT || "\n");
        const lB = null !== (BB = null === (VB = DT.current) || void 0 === VB ? void 0 : VB.state.doc.toString()) && void 0 !== BB ? BB : dB;
        fT(yB, cT, lB || "\n")
      }), [AB, bB, yT, nB, BT, cT, dB, TB]), (0, lB.useEffect)((() => {
        if (!yT) return;
        const {
          GL: BB
        } = yT;
        fT(BB, cT, (nB ? BT : dB) || "\n")
      }), [dB, nB, BT, cT, yT]), (0, lB.useEffect)((() => () => {
        ET.current && (ET.current(), ET.current = null)
      }), []), (0, lB.useEffect)((() => (TT(((BB, TB) => {
        if (nB) return !1;
        const dB = DT.current,
          VB = uT.current,
          yB = VB ? (0, NB.A)(VB.docKey) : null;
        if (!dB || !VB || HT.current !== VB.clientID || BB !== yB) return !1;
        const pB = dB.state.doc.toString();
        return pB !== TB && dB.dispatch({
          changes: {
            from: 0,
            to: pB.length,
            insert: TB
          }
        }), !0
      })), () => {
        DT.current = null, HT.current = null, TT(null)
      })), [TT, nB]);
      const ST = TB ? nB ? null : null !== bB && void 0 !== bB ? bB : iB.f : lT.c,
        PT = function(BB, TB) {
          const dB = (0, lB.useRef)(null);
          (0, lB.useEffect)((() => {
            var BB;
            (null === (BB = dB.current) || void 0 === BB ? void 0 : BB.path) !== TB && (dB.current = null)
          }), [TB]);
          const VB = BB => {
            const VB = dB.current;
            if (null === BB || void 0 === BB || !BB.dom.isConnected || !VB || VB.path !== TB) return;
            dB.current = null;
            const {
              doc: yB
            } = BB.state, {
              from: lB
            } = yB.line(Math.min(Math.max(VB.line, 1), yB.lines));
            BB.dispatch({
              selection: {
                anchor: lB
              },
              effects: pB.c.scrollIntoView(lB, {
                y: "center"
              })
            }), BB.focus()
          };
          return (0, fB.e)("CodeEditorGoToLine", (TB => {
            dB.current = TB, VB(BB.current)
          })), VB
        }(DT, ST);
      (0, fB.e)("FormatCode", (() => {
        if (!yT || !DT.current || nB) return;
        const {
          GL: BB,
          fsMap: dB
        } = yT, VB = BB.getSourceFile(cT).getFullText();
        let yB = 0;
        if (TB && AB)
          for (const [TB, JB] of Object.entries(AB)) TB !== (null !== bB && void 0 !== bB ? bB : iB.f) && (yB += JB.length);
        const pB = function(BB, TB, dB, VB, yB) {
          const pB = BB.languageService.getFormattingEditsForDocument(VB, KT);
          if (!pB.length) return MB.d.error("Code is already formatted.");
          pB.sort(((BB, TB) => TB.span.start - BB.span.start));
          let lB = BB.getSourceFile(VB).getFullText();
          for (const JB of pB) lB = lB.slice(0, JB.span.start) + JB.og + lB.slice(JB.span.start + JB.span.length);
          return lB !== (dB ? (0, tB.i)(lB, yB) : (0, tB.g)(lB)) ? MB.d.error("Formatting the code will go beyond the character limit.") : MB.d.value(lB)
        }(BB, 0, TB, cT, yB);
        if (pB.isError()) return void DB({
          message: pB.asError().message,
          type: "warning"
        });
        const lB = pB.getValue();
        lB && (DT.current.dispatch({
          changes: {
            from: 0,
            to: VB.length,
            insert: lB
          },
          selection: {
            anchor: lB.length
          }
        }), fT(BB, cT, lB), JB(lB))
      }));
      const QT = (0, lB.useMemo)((() => {
        if (!yT) return [];
        const {
          GL: BB,
          fsMap: dB
        } = yT;
        ! function(BB, TB, dB, VB) {
          if (BB.getSourceFile(dB)) return;
          const yB = VB || "\n";
          TB.set(dB, yB), BB.createFile(dB, yB)
        }(BB, dB, cT, (nB ? wT.current : iT.current) || "\n");
        const lB = TB && sT(nB ? null !== eB && void 0 !== eB ? eB : "index.ts" : bB),
          JB = [(0, yB.d)({
            jsx: !1,
            typescript: lB
          }), pB.d.highest(pB.c.domEventHandlers({
            keydown: BB => "Escape" === BB.key ? (mT.current(), BB.stopPropagation(), !0) : (BB.stopPropagation(), !1)
          })), (0, VB.e)({
            override: [zT(BB, cT)]
          }), UB.n.fromClass(class {
            constructor(BB) {
              this.view = BB, this.timeout = null, this.scheduleParse()
            }
            update(BB) {
              (BB.docChanged || BB.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const BB = this.view.viewport.to;
                (0, QB.gb)(this.view.state, BB) || (0, QB.I)(this.view, BB, RB) || this.scheduleParse()
              }), aB))
            }
          }), pB.c.lineWrapping, pB.g.define({
            create: UT(BB, CB, cT),
            update(TB, dB) {
              const VB = dB.effects.some((BB => BB.is(rT)));
              return dB.docChanged || dB.selection || VB ? (fT(BB, cT, dB.state.doc.toString() || " "), UT(BB, CB, cT)(dB.state)) : TB
            },
            provide: BB => pB.r.computeN([BB], (TB => TB.field(BB)))
          }), (0, pB.p)(FT(BB, cT)), (0, EB.h)(MT(TB, BB, cT)), pB.k.fromClass(class {
            constructor(BB) {
              this.view = BB, this.searchPanel = null
            }
            update(BB) {
              const TB = BB.view.dom.querySelector(".cm-search");
              if (TB !== this.searchPanel) {
                if (this.searchPanel = TB, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (BB => {
                  "Escape" === BB.key && (0, HB.d)(this.view), BB.stopPropagation()
                }))
              }
            }
          })];
        dT && !nB && JB.push(kT(TB ? null !== bB && void 0 !== bB ? bB : iB.f : lT.c, VT));
        const YB = uT.current;
        if (YB && !nB) {
          JB.push(... function(BB, TB, dB, VB, yB) {
            let pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const lB = (0, NB.A)(dB),
              JB = UB.n.fromClass(class {
                constructor(BB) {
                  this.view = BB, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = rB.h.subscribe("codeCollab", (BB => {
                    BB.docKey === lB && BB.type === NB.g.Updates && (BB.updates ? this.applyUpdates(BB.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(BB) {
                  const TB = JSON.parse(BB).map((BB => ({
                    clientID: BB.clientID,
                    changes: wB.ChangeSet.fromJSON(BB.changes)
                  })));
                  TB.length > 0 && (this.view.dispatch((0, zB.m)(this.view.state, TB)), yB && yB(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(BB) {
                  pB && (BB.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const BB = (0, zB.o)(this.view.state);
                  if (this.pushing || !BB.length) return;
                  const TB = Date.now() - this.lastPushTime;
                  if (TB < PB) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), PB - TB)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), cB);
                  const dB = (0, zB.i)(this.view.state),
                    yB = BB.map((BB => ({
                      clientID: BB.clientID,
                      changes: BB.changes.toJSON()
                    }))),
                    pB = JSON.stringify(yB);
                  pB.length <= NB.i ? FB.gameBridge.send("sendCodeCollab", {
                    Vp: NB.d.Push,
                    yp: lB,
                    lp: dB,
                    kp: pB
                  }) : (0, IB.postJsonWithMetricsCookiesAndJsonResponse)(`${VB.gsUrl}/code/collab-push`, KB.m["collab-push"].toBuffer({
                    gameNameWithVariation: VB.gameNameWithVariation,
                    lobbyName: VB.lobbyName,
                    docKey: lB,
                    version: dB,
                    updates: pB
                  }), {
                    retries: 0
                  }).catch((BB => {
                    console.error("[CodeCollab] HTTP push failed", BB)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const BB = (0, zB.i)(this.view.state);
                  (0, IB.postJsonWithMetricsCookiesAndJsonResponse)(`${VB.gsUrl}/code/collab-pull`, KB.m["collab-pull"].toBuffer({
                    gameNameWithVariation: VB.gameNameWithVariation,
                    lobbyName: VB.lobbyName,
                    docKey: lB,
                    fromVersion: BB
                  }), {
                    retries: 1
                  }).then((BB => {
                    this.destroyed || (BB.fullDoc ? rB.h.yH("codeCollabRejoin", {
                      docKey: lB,
                      doc: BB.fullDoc,
                      version: BB.version
                    }) : this.applyUpdates(BB.updates))
                  })).catch((BB => {
                    console.error("[CodeCollab] Pull failed", BB)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const BB = Date.now();
                  if (BB - this.lastCursorSent < SB) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), SB)));
                  this.lastCursorSent = BB;
                  const TB = this.view.state.selection.main;
                  FB.gameBridge.send("sendCodeCollab", {
                    Vp: NB.d.Cursor,
                    yp: lB,
                    Hp: TB.anchor,
                    Ep: TB.head
                  })
                }
                destroy() {
                  this.destroyed = !0, rB.h.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, zB.e)({
              startVersion: BB,
              clientID: TB
            }), JB]
          }(YT, gT, YB.docKey, YB.httpConfig, (BB => {
            var TB;
            null === (TB = OT.current) || void 0 === TB || TB.call(OT, BB)
          }), LB));
          const BB = function(BB, TB) {
            const dB = (0, NB.A)(BB);
            return {
              extensions: [qB],
              connect(BB) {
                if (TB) {
                  const dB = TB.map((BB => XB.of({
                    playerId: BB.playerId,
                    playerName: BB.playerName,
                    colour: BB.colour,
                    anchor: BB.anchor,
                    head: BB.head,
                    lastMoved: Date.now()
                  })));
                  dB.length > 0 && BB.dispatch({
                    effects: dB
                  })
                }
                const VB = rB.h.subscribe("codeCollab", (TB => {
                    if (TB.docKey === dB)
                      if (TB.type === NB.g.RemoteCursor) BB.dispatch({
                        effects: XB.of({
                          playerId: TB.playerId,
                          playerName: TB.playerName,
                          colour: TB.colour,
                          anchor: TB.anchor,
                          head: TB.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (TB.type === NB.g.Presence) {
                      const dB = JSON.parse(TB.peers),
                        VB = new Set(dB.map((BB => BB.playerId))),
                        yB = BB.state.field(qB),
                        pB = [];
                      for (const [BB] of yB.cursors) VB.has(BB) || pB.push(WB.of(BB));
                      pB.length > 0 && BB.dispatch({
                        effects: pB
                      })
                    }
                  })),
                  yB = setInterval((() => {
                    BB.dom.isConnected ? BB.dispatch({
                      effects: hB.of(Date.now())
                    }) : clearInterval(yB)
                  }), ZB);
                return () => {
                  rB.h.unsubscribe(VB), clearInterval(yB)
                }
              }
            }
          }(YB.docKey, YB.existingCursors);
          JB.push(...BB.extensions), vT.current = BB.connect
        } else vT.current = null;
        return JB
      }), [TB, yT, CB, YT, gT, cT, bB, nB, eB, LB, dT, VT]);
      if (!yT || !xB && !nB) return (0, LT.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, LT.jsx)(vB.b, {})
      });
      const RT = nB ? `plugin-${nB}-${null!==eB&&void 0!==eB?eB:"index.ts"}` : xB ? `collab-${xB.clientID}` : `local-${TB}`;
      return (0, LT.jsx)(pB.o, {
        value: nB ? null !== BT && void 0 !== BT ? BT : "" : dB,
        onChange: JB,
        extensions: QT,
        className: "CodeEditorContent",
        theme: GB ? pT : "dark",
        editable: LB && !nB,
        basicSetup: IT,
        onCreateEditor: BB => {
          var TB;
          DT.current = BB, HT.current = null !== (TB = null === xB || void 0 === xB ? void 0 : xB.clientID) && void 0 !== TB ? TB : null, DT.current.focus(), PT(BB), ET.current && ET.current(), vT.current && (ET.current = vT.current(BB))
        }
      }, RT)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);