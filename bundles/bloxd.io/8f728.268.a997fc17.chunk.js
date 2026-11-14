export const id = 268;
export const ids = [268];
export const modules = {
  39268: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => DB
    });
    var Vc = nc(39274),
      Ic = nc(39315),
      rB = nc(39321),
      uc = nc(73),
      sc = nc(83),
      Mc = nc(39345),
      Pc = nc(39347),
      qB = nc(3802),
      Oc = nc(39350),
      Tc = nc(1536),
      fc = nc(39353),
      mB = nc(39363),
      ec = nc.n(mB),
      tB = nc(39330),
      Sc = nc(39336),
      yB = nc(1188),
      zB = nc(35471),
      pc = nc(1108),
      hc = nc(35484),
      aB = nc(35361),
      lc = nc(1252),
      Yc = nc(569),
      Lc = nc(1114),
      gB = nc(39421),
      Uc = nc(39279),
      bB = nc(39285),
      Zc = nc(1566),
      Qc = nc(2903),
      Cc = nc(35),
      vB = nc(988);
    const Dc = 1e4,
      Nc = 250,
      Ec = 250;
    var oc = nc(39303);
    const Wc = 50,
      wc = 100;
    const kB = 2e3,
      Xc = Uc.F.define(),
      Hc = Uc.F.define(),
      Fc = Uc.F.define();
    class Jc extends bB.r {
      constructor(cB, Bc, nc) {
        super(), this.colour = cB, this.playerName = Bc, this.showName = nc
      }
      toDOM() {
        const cB = document.createElement("span");
        cB.className = "cm-remote-cursor-wrapper", cB.style.borderLeftColor = this.colour;
        const Bc = document.createElement("span");
        if (Bc.className = "cm-remote-cursor", Bc.style.borderLeftColor = this.colour, cB.appendChild(Bc), this.showName) {
          const Bc = document.createElement("span");
          Bc.className = "cm-remote-cursor-name", Bc.style.backgroundColor = this.colour, Bc.textContent = this.playerName, cB.appendChild(Bc)
        }
        return cB
      }
      eq(cB) {
        return this.colour === cB.colour && this.playerName === cB.playerName && this.showName === cB.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function jB(cB, Bc) {
      const nc = [],
        Vc = [];
      for (const [, uc] of cB) {
        const cB = Bc - uc.lastMoved < kB;
        if (nc.push({
            pos: uc.head,
            decoration: bB.c.widget({
              widget: new Jc(uc.colour, uc.playerName, cB),
              side: 1
            })
          }), uc.anchor !== uc.head) {
          const cB = Math.min(uc.anchor, uc.head),
            Bc = Math.max(uc.anchor, uc.head);
          Vc.push({
            from: cB,
            to: Bc,
            decoration: bB.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${uc.colour}33`
              }
            })
          })
        }
      }
      const Ic = new Uc.x,
        rB = [];
      for (const uc of nc) rB.push({
        bias: 1,
        deco: uc.decoration,
        from: uc.pos,
        to: uc.pos
      });
      for (const uc of Vc) rB.push({
        bias: 0,
        deco: uc.decoration,
        from: uc.from,
        to: uc.to
      });
      rB.sort(((cB, Bc) => cB.from - Bc.from || cB.deco.startSide - Bc.deco.startSide || cB.bias - Bc.bias));
      for (const uc of rB) Ic.add(uc.from, uc.to, uc.deco);
      return Ic.finish()
    }
    const Rc = Uc.J.define({
      create: () => ({
        cursors: new Map,
        iu: bB.c.none
      }),
      update(cB, Bc) {
        let nc = cB.cursors,
          Vc = !1;
        if (Bc.docChanged) {
          const cB = Bc.startState.doc.length,
            Ic = new Map;
          for (const [Vc, rB] of nc) try {
            const nc = Bc.changes.mapPos(Math.min(rB.anchor, cB), 1),
              uc = Bc.changes.mapPos(Math.min(rB.head, cB), 1);
            Ic.set(Vc, {
              ...rB,
              anchor: nc,
              head: uc
            })
          } catch {}
          nc = Ic, Vc = !0
        }
        for (const Ic of Bc.effects)
          if (Ic.is(Xc)) {
            const Bc = Ic.value;
            nc === cB.cursors && (nc = new Map(nc)), nc.set(Bc.playerId, Bc), Vc = !0
          } else Ic.is(Hc) ? nc.has(Ic.value) && (nc === cB.cursors && (nc = new Map(nc)), nc.delete(Ic.value), Vc = !0) : Ic.is(Fc) && (Vc = !0);
        return Vc ? {
          cursors: nc,
          iu: jB(nc, Date.now())
        } : cB
      },
      provide: cB => bB.i.iu.from(cB, (cB => cB.iu))
    });
    var iB = nc(39310);
    const Kc = "#e45649",
      xB = "#383a42",
      dc = "#696c77",
      Ac = "#986801",
      Gc = "#e5e5e6",
      cn = "#fafafa",
      BB = "#eaeaeb",
      nB = "#526fff",
      VB = bB.i.theme({
        "&": {
          color: xB,
          backgroundColor: cn
        },
        ".cm-content": {
          caretColor: nB
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: nB
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: xB
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
          backgroundColor: cn,
          color: dc,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Gc
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: BB
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: BB,
          borderBottomColor: BB
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Gc,
            color: xB
          }
        }
      }, {
        dark: !1
      }),
      IB = oc.c.define([{
        tag: iB.j.keyword,
        color: "#a626a4"
      }, {
        tag: [iB.j.name, iB.j.deleted, iB.j.character, iB.j.propertyName, iB.j.macroName],
        color: Kc
      }, {
        tag: [iB.j.function(iB.j.variableName), iB.j.labelName],
        color: "#4078f2"
      }, {
        tag: [iB.j.color, iB.j.constant(iB.j.name), iB.j.standard(iB.j.name)],
        color: Ac
      }, {
        tag: [iB.j.definition(iB.j.name), iB.j.separator],
        color: xB
      }, {
        tag: [iB.j.typeName, iB.j.className, iB.j.number, iB.j.changed, iB.j.annotation, iB.j.modifier, iB.j.self, iB.j.namespace],
        color: "#c18401"
      }, {
        tag: [iB.j.operator, iB.j.operatorKeyword, iB.j.url, iB.j.escape, iB.j.regexp, iB.j.link, iB.j.special(iB.j.string)],
        color: "#0184bc"
      }, {
        tag: [iB.j.meta, iB.j.comment],
        color: dc
      }, {
        tag: iB.j.strong,
        fontWeight: "bold"
      }, {
        tag: iB.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: iB.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: iB.j.link,
        color: dc,
        textDecoration: "underline"
      }, {
        tag: iB.j.heading,
        fontWeight: "bold",
        color: Kc
      }, {
        tag: [iB.j.atom, iB.j.bool, iB.j.special(iB.j.variableName)],
        color: Ac
      }, {
        tag: [iB.j.processingInstruction, iB.j.string, iB.j.inserted],
        color: "#50a14f"
      }, {
        tag: iB.j.invalid,
        color: "#000000"
      }]),
      rn = [VB, (0, oc.eb)(IB)];
    var uB = nc(35516),
      sB = nc(39423);
    const MB = rB.k.define(),
      PB = rB.l.define({
        create: () => !1,
        update(cB, Bc) {
          for (const nc of Bc.effects) nc.is(MB) && (cB = nc.value);
          return cB
        }
      }),
      qn = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function OB(cB, Bc) {
      return [PB, rB.p.fromClass(class {
        constructor(cB) {
          this.view = cB, this.onDown = cB => {
            const Bc = cB.target instanceof Element && null !== cB.target.closest(".cm-tooltip");
            0 !== cB.button || Bc || this.view.state.field(PB) || this.view.dispatch({
              effects: MB.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(PB) && this.view.dispatch({
              effects: MB.of(!1)
            })
          }, cB.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), rB.x.compute(["selection", PB], (nc => function(cB, Bc, nc) {
        const Vc = cB.selection.main;
        return Vc.empty || cB.field(PB) || cB.sliceDoc(Vc.from, Vc.to).trim().length < 2 ? null : {
          pos: Vc.from,
          above: !0,
          create: cB => {
            const Vc = document.createElement("div");
            Vc.className = "CodeSelectionActions", Vc.setAttribute("role", "toolbar"), Vc.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Ic,
                label: rB
              }
              of qn) {
              if (!nc && "explain" !== Ic) continue;
              const uc = document.createElement("button");
              uc.type = "button", uc.textContent = rB, "change" !== Ic && (uc.title = sB.b, uc.dataset.asksAi = "true"), uc.addEventListener("mousedown", (cB => {
                cB.preventDefault()
              })), uc.addEventListener("click", (() => {
                const nc = cB.state.selection.main;
                if (nc.empty) return;
                const Vc = {
                  action: Ic,
                  path: Bc,
                  fromLine: cB.state.doc.lineAt(nc.from).number,
                  toLine: cB.state.doc.lineAt(nc.to > nc.from && cB.state.doc.lineAt(nc.to).from === nc.to ? nc.to - 1 : nc.to).number,
                  text: cB.state.sliceDoc(nc.from, nc.to)
                };
                Cc.i.Vu("WorldCodeAiSelection", Vc), cB.dispatch({
                  selection: {
                    anchor: nc.to
                  }
                })
              })), Vc.appendChild(uc)
            }
            return {
              dom: Vc
            }
          }
        }
      }(nc, cB, Bc)))]
    }
    var TB = nc(957);
    const fB = new Set(["(", "{", "[", "<"]),
      mn = new Set([")", "}", "]", ">"]),
      eB = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function tn(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function nc(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = [];
        for (const Ic of cB) {
          let cB;
          cB = "punctuation" === Ic.kind ? eB.text : "parameterName" === Ic.kind ? eB.parameterName : Bc, Vc.push({
            str: Ic.text,
            style: {
              color: cB,
              opacity: nc ? .5 : void 0
            }
          })
        }
        return Vc
      }
      const Vc = [];
      if (Vc.push(...nc(cB.prefixDisplayParts, eB.text)), cB.parameters.length > 0) {
        Vc.push("\n");
        for (let Ic = 0; Ic < cB.parameters.length; Ic++) {
          const rB = cB.parameters[Ic];
          Vc.push("\t"), Vc.push(...nc(rB.displayParts, eB.parameter, null !== Bc && Ic !== Bc)), Vc.push("\n")
        }
      }
      return Vc.push(...nc(cB.suffixDisplayParts, eB.suffix)), cB.documentation && (Vc.push("\n\n"), Vc.push(...nc(cB.documentation, eB.docs))), Vc
    }
    var SB = function(cB) {
      return cB[cB.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", cB[cB.DuplicateIdentifier = 2300] = "DuplicateIdentifier", cB
    }(SB || {});
    const yn = new Set([SB.DuplicateIdentifier]),
      zn = new Set([SB.VariableDefinedElsewhere]),
      pB = new Set([]),
      hB = "/index.js";

    function an(cB) {
      return "/" + cB
    }

    function lB(cB, Bc, nc) {
      cB.getSourceFile(Bc) && cB.deleteFile(Bc), cB.createFile(Bc, nc)
    }

    function YB(cB) {
      return !!cB && ((0, hc.m)(cB) || (0, hc.j)(cB))
    }

    function LB(cB, Bc, nc) {
      return () => {
        let Vc = [...Bc.languageService.getSemanticDiagnostics(nc), ...Bc.languageService.getSyntacticDiagnostics(nc)];
        return Vc = Vc.filter((cB => !(0, Yc.E)(cB.start) && !(0, Yc.E)(cB.length) && !yn.has(cB.code))), cB || (Vc = Vc.filter((cB => !zn.has(cB.code)))), Vc.map((cB => ({
          from: cB.start,
          to: cB.start + cB.length,
          message: "string" === typeof cB.messageText ? cB.messageText : cB.messageText.messageText,
          severity: pB.has(cB.code) ? "warning" : "error"
        })))
      }
    }

    function gn(cB, Bc) {
      return nc => {
        var Vc, Ic;
        const rB = cB.languageService.getCompletionsAtPosition(Bc, nc.pos, {});
        if (!rB) return {
          from: nc.pos,
          options: []
        };
        let uc = null !== (Vc = null === (Ic = rB.optionalReplacementSpan) || void 0 === Ic ? void 0 : Ic.start) && void 0 !== Vc ? Vc : nc.pos;
        if (!rB.optionalReplacementSpan) {
          const cB = nc.state.doc.sliceString(0, nc.pos);
          for (; uc > 0 && /[\w$]/.test(cB[uc - 1]);) uc--
        }
        return rB.entries = rB.entries.filter((cB => cB.kind !== ec().ScriptElementKind.warning)), {
          from: uc,
          options: rB.entries.map((Vc => {
            var Ic, rB, sc, Mc;
            const Pc = cB.languageService.getCompletionEntryDetails(Bc, nc.pos, Vc.name, {}, Vc.source, {}, Vc.data),
              qB = null !== (Ic = null === (rB = Vc.replacementSpan) || void 0 === rB ? void 0 : rB.start) && void 0 !== Ic ? Ic : uc,
              Oc = Vc.replacementSpan ? Vc.replacementSpan.start + Vc.replacementSpan.length : nc.pos,
              Tc = null !== (sc = Vc.insertText) && void 0 !== sc ? sc : Vc.name;
            return {
              label: Vc.name,
              detail: null === Pc || void 0 === Pc ? void 0 : Pc.displayParts.map((cB => cB.text)).join(""),
              info: null === Pc || void 0 === Pc || null === (Mc = Pc.documentation) || void 0 === Mc ? void 0 : Mc.map((cB => cB.text)).join(""),
              apply: cB => {
                cB.dispatch({
                  changes: {
                    from: qB,
                    to: Oc,
                    insert: Tc
                  },
                  selection: {
                    anchor: qB + Tc.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function UB(cB) {
      return Bc => {
        const nc = document.createElement("div");
        nc.className = "CodeEditorTooltip";
        let Vc = !1;
        return queueMicrotask((() => {
          Vc || (sc.render((0, TB.jsx)(Tc.e, {
            text: cB
          }), nc), Bc.requestMeasure())
        })), {
          dom: nc,
          destroy() {
            Vc = !0, queueMicrotask((() => {
              sc.unmountComponentAtNode(nc)
            }))
          }
        }
      }
    }

    function bn(cB, Bc, nc) {
      return Vc => {
        var Ic;
        if (!Bc) return [];
        const rB = null === (Ic = Vc.selection.Iu[0]) || void 0 === Ic ? void 0 : Ic.head;
        if (void 0 === rB) return [];
        const uc = cB.languageService.getSignatureHelpItems(nc, rB, {});
        if (!uc || !uc.items.length) return [];
        const sc = uc.applicableSpan.start - uc.items[0].prefixDisplayParts.map((cB => cB.text)).join("").length,
          Mc = uc.applicableSpan.start,
          Pc = Vc.doc.lineAt(rB),
          qB = Pc.from,
          Oc = Math.min(Pc.to, rB);
        let Tc, fc;
        return sc < qB ? (Tc = qB, fc = Oc) : (Tc = sc, fc = Mc), [{
          pos: Tc,
          end: fc,
          above: !1,
          create: UB(tn(uc.items[0], uc.argumentIndex))
        }]
      }
    }

    function ZB(cB, Bc) {
      return (nc, Vc, Ic) => {
        const rB = cB.languageService.getQuickInfoAtPosition(Bc, Vc);
        if (!rB) return [];
        const uc = rB.textSpan.start,
          sc = rB.textSpan.start + rB.textSpan.length;
        if (Vc < uc || Vc >= sc) return [];
        if (rB.kind === ec().ScriptElementKind.memberFunctionElement || rB.kind === ec().ScriptElementKind.variableElement && "declare" === rB.kindModifiers) {
          const cB = rB.displayParts.findIndex((cB => "space" === cB.kind)); - 1 !== cB && (rB.displayParts = rB.displayParts.slice(cB));
          const Bc = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            nc = rB.displayParts.findIndex((cB => "punctuation" === cB.kind && "(" === cB.text)); - 1 !== nc && (Bc.prefixDisplayParts = rB.displayParts.slice(0, nc + 1), rB.displayParts = rB.displayParts.slice(nc + 1));
          const Vc = rB.displayParts.findLastIndex((cB => "punctuation" === cB.kind && ")" === cB.text)); - 1 !== Vc && (Bc.suffixDisplayParts = rB.displayParts.slice(Vc), rB.displayParts = rB.displayParts.slice(0, Vc));
          let Ic = 0,
            Mc = [];
          for (const uc of rB.displayParts)
            if (fB.has(uc.text) ? Ic++ : mn.has(uc.text) && Ic--, "lineBreak" !== uc.kind) {
              if ("space" === uc.kind) {
                if (0 === Mc.length) continue;
                Mc.push({
                  kind: "space",
                  text: " "
                })
              } else Mc.push(uc);
              0 === Ic && "," === uc.text && (Bc.parameters.push({
                displayParts: Mc
              }), Mc = [])
            } return Mc.length > 0 && Bc.parameters.push({
            displayParts: Mc
          }), Bc.documentation = rB.documentation, [{
            pos: uc,
            end: sc,
            above: !0,
            create: UB(tn(Bc))
          }]
        }
        const Mc = [];
        for (const cB of rB.displayParts) Mc.push({
          str: cB.text,
          style: {
            color: eB.text
          }
        });
        if (rB.documentation) {
          Mc.push("\n\n");
          for (const cB of rB.documentation) Mc.push({
            str: cB.text,
            style: {
              color: eB.docs
            }
          })
        }
        return [{
          pos: uc,
          end: sc,
          above: !0,
          create: UB(Mc)
        }]
      }
    }
    const QB = {
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
      semicolons: ec().SemicolonPreference.Insert
    };
    const CB = rB.k.define(),
      vn = {
        lineNumbers: !0,
        tabSize: 4
      };

    function DB(cB) {
      let {
        isLobbyCode: Bc,
        code: nc,
        onChange: sc,
        canEditCode: Tc,
        setTemporaryMessage: mB,
        close: Yc,
        showTooltips: Jc,
        lightMode: jB,
        collabState: iB,
        onRemoteDocChange: Kc,
        files: xB,
        activePath: dc,
        pluginName: Ac,
        pluginFile: Gc,
        pluginSource: cn,
        setActiveDocReplacer: BB,
        showAiHints: nB,
        canAiChangeCode: VB = Tc
      } = cB;
      const [IB, sB] = (0, uc.useState)(null), MB = null === iB || void 0 === iB ? void 0 : iB.version, PB = null === iB || void 0 === iB ? void 0 : iB.clientID, qn = (0, uc.useRef)({
        isLobbyCode: Bc,
        files: xB,
        code: nc,
        activePath: dc
      }), fB = (0, uc.useRef)(Kc);
      fB.current = Kc;
      const mn = (0, uc.useRef)(null),
        eB = (0, uc.useRef)(iB);
      eB.current = iB;
      const tn = (0, uc.useRef)(null),
        SB = (0, uc.useRef)(null),
        yn = (0, uc.useRef)(null),
        zn = (0, uc.useRef)(Yc);
      zn.current = Yc;
      const pB = (0, uc.useRef)(nc);
      pB.current = nc;
      const UB = (0, uc.useRef)(cn);
      UB.current = cn;
      const DB = function(cB, Bc, nc, Vc) {
        return nc ? `/plugin-preview/${nc}/${null!==Vc&&void 0!==Vc?Vc:"index.ts"}` : cB ? an(null !== Bc && void 0 !== Bc ? Bc : pc.g) : hB
      }(Bc, dc, Ac, Gc);
      (0, uc.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: cB,
            files: Bc,
            code: nc,
            activePath: Vc
          } = qn.current, Ic = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: ec().ModuleKind.ESNext,
            moduleResolution: ec().ModuleResolutionKind.Bundler,
            target: ec().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(zB.e).map((cB => [cB.specifier, [cB.typesVfsPath]])))
            }
          }, rB = new Map, uc = [];
          if (cB) {
            const cB = null !== Bc && void 0 !== Bc ? Bc : {
              [pc.g]: nc || "\n"
            };
            for (const [Bc, nc] of Object.entries(cB)) {
              const cB = an(Bc);
              rB.set(cB, nc || "\n"), uc.push(cB)
            }
            const Ic = an(null !== Vc && void 0 !== Vc ? Vc : pc.g);
            rB.has(Ic) ? rB.set(Ic, nc || "\n") : (rB.set(Ic, nc || "\n"), uc.push(Ic)), rB.set("/node_modules/@bloxd/index.d.ts", qB.default), uc.push("/node_modules/@bloxd/index.d.ts");
            for (const Bc of Object.values(zB.e)) {
              rB.set(Bc.typesVfsPath, Bc.types), uc.push(Bc.typesVfsPath);
              for (const [cB, nc] of Object.entries(Bc.files)) {
                const Vc = `/plugin-preview/${Bc.name}/${cB}`;
                rB.set(Vc, nc || "\n"), uc.push(Vc)
              }
            }
          } else rB.set(hB, nc || "\n"), uc.push(hB);
          rB.set("/globals.d.ts", cB ? Pc.b : Mc.c), rB.set("/lib.d.ts", Oc.c), uc.push("/globals.d.ts", "/lib.d.ts");
          const sc = fc.c(rB),
            Tc = fc.g(sc, uc, ec(), Ic);
          sB({
            zs: Tc,
            fsMap: rB
          })
        }()
      }), []), (0, uc.useEffect)((() => {
        var cB, Vc;
        if (!IB || !Bc) return;
        const {
          zs: Ic,
          fsMap: rB
        } = IB;
        if (function(cB, Bc, nc) {
            const Vc = new Set;
            for (const [Ic, rB] of Object.entries(nc)) {
              const nc = an(Ic);
              Vc.add(nc);
              const uc = rB || "\n";
              Bc.get(nc) !== uc && (Bc.set(nc, uc), lB(cB, nc, uc))
            }
            for (const Ic of [...Bc.keys()]) "/globals.d.ts" === Ic || "/lib.d.ts" === Ic || Ic.startsWith("/node_modules/") || Ic.startsWith("/plugin-preview/") || Vc.has(Ic) || (Bc.delete(Ic), cB.getSourceFile(Ic) && cB.deleteFile(Ic))
          }(Ic, rB, null !== xB && void 0 !== xB ? xB : {
            [pc.g]: nc || "\n"
          }), Ac) return void lB(Ic, DB, cn || "\n");
        const uc = null !== (cB = null === (Vc = mn.current) || void 0 === Vc ? void 0 : Vc.state.doc.toString()) && void 0 !== cB ? cB : nc;
        lB(Ic, DB, uc || "\n")
      }), [xB, dc, IB, Ac, cn, DB, nc, Bc]), (0, uc.useEffect)((() => {
        if (!IB) return;
        const {
          zs: cB
        } = IB;
        lB(cB, DB, (Ac ? cn : nc) || "\n")
      }), [nc, Ac, cn, DB, IB]), (0, uc.useEffect)((() => () => {
        SB.current && (SB.current(), SB.current = null)
      }), []), (0, uc.useEffect)((() => (BB(((cB, Bc) => {
        if (Ac) return !1;
        const nc = mn.current,
          Vc = eB.current,
          Ic = Vc ? (0, hc.s)(Vc.docKey) : null;
        if (!nc || !Vc || tn.current !== Vc.clientID || cB !== Ic) return !1;
        const rB = nc.state.doc.toString();
        return rB !== Bc && nc.dispatch({
          changes: {
            from: 0,
            to: rB.length,
            insert: Bc
          }
        }), !0
      })), () => {
        mn.current = null, tn.current = null, BB(null)
      })), [BB, Ac]);
      const NB = Bc ? Ac ? null : null !== dc && void 0 !== dc ? dc : pc.g : uB.e,
        EB = function(cB, Bc) {
          const nc = (0, uc.useRef)(null);
          (0, uc.useEffect)((() => {
            var cB;
            (null === (cB = nc.current) || void 0 === cB ? void 0 : cB.path) !== Bc && (nc.current = null)
          }), [Bc]);
          const Vc = cB => {
            const Vc = nc.current;
            if (null === cB || void 0 === cB || !cB.dom.isConnected || !Vc || Vc.path !== Bc) return;
            nc.current = null;
            const {
              doc: Ic
            } = cB.state, {
              from: uc
            } = Ic.line(Math.min(Math.max(Vc.line, 1), Ic.lines));
            cB.dispatch({
              selection: {
                anchor: uc
              },
              effects: rB.d.scrollIntoView(uc, {
                y: "center"
              })
            }), cB.focus()
          };
          return (0, lc.f)("CodeEditorGoToLine", (Bc => {
            nc.current = Bc, Vc(cB.current)
          })), Vc
        }(mn, NB);
      (0, lc.f)("FormatCode", (() => {
        if (!IB || !mn.current || Ac) return;
        const {
          zs: cB,
          fsMap: nc
        } = IB, Vc = cB.getSourceFile(DB).getFullText();
        let Ic = 0;
        if (Bc && xB)
          for (const [Bc, sc] of Object.entries(xB)) Bc !== (null !== dc && void 0 !== dc ? dc : pc.g) && (Ic += sc.length);
        const rB = function(cB, Bc, nc, Vc, Ic) {
          const rB = cB.languageService.getFormattingEditsForDocument(Vc, QB);
          if (!rB.length) return Lc.d.error("Code is already formatted.");
          rB.sort(((cB, Bc) => Bc.span.start - cB.span.start));
          let uc = cB.getSourceFile(Vc).getFullText();
          for (const sc of rB) uc = uc.slice(0, sc.span.start) + sc.bJ + uc.slice(sc.span.start + sc.span.length);
          return uc !== (nc ? (0, aB.h)(uc, Ic) : (0, aB.f)(uc)) ? Lc.d.error("Formatting the code will go beyond the character limit.") : Lc.d.value(uc)
        }(cB, 0, Bc, DB, Ic);
        if (rB.isError()) return void mB({
          message: rB.asError().message,
          type: "warning"
        });
        const uc = rB.getValue();
        uc && (mn.current.dispatch({
          changes: {
            from: 0,
            to: Vc.length,
            insert: uc
          },
          selection: {
            anchor: uc.length
          }
        }), lB(cB, DB, uc), sc(uc))
      }));
      const oB = (0, uc.useMemo)((() => {
        if (!IB) return [];
        const {
          zs: cB,
          fsMap: nc
        } = IB;
        ! function(cB, Bc, nc, Vc) {
          if (cB.getSourceFile(nc)) return;
          const Ic = Vc || "\n";
          Bc.set(nc, Ic), cB.createFile(nc, Ic)
        }(cB, nc, DB, (Ac ? UB.current : pB.current) || "\n");
        const uc = Bc && YB(Ac ? null !== Gc && void 0 !== Gc ? Gc : "index.ts" : dc),
          sc = [(0, Ic.d)({
            jsx: !1,
            typescript: uc
          }), rB.g.highest(rB.d.domEventHandlers({
            keydown: cB => "Escape" === cB.key ? (zn.current(), cB.stopPropagation(), !0) : (cB.stopPropagation(), !1)
          })), (0, Vc.d)({
            override: [gn(cB, DB)]
          }), bB.o.fromClass(class {
            constructor(cB) {
              this.view = cB, this.timeout = null, this.scheduleParse()
            }
            update(cB) {
              (cB.docChanged || cB.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const cB = this.view.viewport.to;
                (0, oc.hb)(this.view.state, cB) || (0, oc.N)(this.view, cB, Wc) || this.scheduleParse()
              }), wc))
            }
          }), rB.d.lineWrapping, rB.l.define({
            create: bn(cB, Jc, DB),
            update(Bc, nc) {
              const Vc = nc.effects.some((cB => cB.is(CB)));
              return nc.docChanged || nc.selection || Vc ? (lB(cB, DB, nc.state.doc.toString() || " "), bn(cB, Jc, DB)(nc.state)) : Bc
            },
            provide: cB => rB.x.computeN([cB], (Bc => Bc.field(cB)))
          }), (0, rB.u)(ZB(cB, DB)), (0, Sc.f)(LB(Bc, cB, DB)), rB.p.fromClass(class {
            constructor(cB) {
              this.view = cB, this.searchPanel = null
            }
            update(cB) {
              const Bc = cB.view.dom.querySelector(".cm-search");
              if (Bc !== this.searchPanel) {
                if (this.searchPanel = Bc, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (cB => {
                  "Escape" === cB.key && (0, tB.e)(this.view), cB.stopPropagation()
                }))
              }
            }
          })];
        nB && !Ac && sc.push(OB(Bc ? null !== dc && void 0 !== dc ? dc : pc.g : uB.e, VB));
        const Mc = eB.current;
        if (Mc && !Ac) {
          sc.push(... function(cB, Bc, nc, Vc, Ic) {
            let rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const uc = (0, hc.s)(nc),
              sc = bB.o.fromClass(class {
                constructor(cB) {
                  this.view = cB, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.subToken = void 0, this.subToken = Cc.i.subscribe("codeCollab", (cB => {
                    cB.docKey === uc && cB.type === hc.d.Updates && (cB.updates ? this.applyUpdates(cB.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(cB) {
                  const Bc = JSON.parse(cB).map((cB => ({
                    clientID: cB.clientID,
                    changes: Uc.ChangeSet.fromJSON(cB.changes)
                  })));
                  Bc.length > 0 && (this.view.dispatch((0, gB.g)(this.view.state, Bc)), Ic && Ic(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(cB) {
                  rB && (cB.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const cB = (0, gB.h)(this.view.state);
                  if (this.pushing || !cB.length) return;
                  const Bc = Date.now() - this.lastPushTime;
                  if (Bc < Ec) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Ec - Bc)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Dc);
                  const nc = (0, gB.e)(this.view.state),
                    Ic = cB.map((cB => ({
                      clientID: cB.clientID,
                      changes: cB.changes.toJSON()
                    }))),
                    rB = JSON.stringify(Ic);
                  rB.length <= hc.e ? Zc.gameBridge.send("sendCodeCollab", {
                    oN: hc.b.Push,
                    kE: uc,
                    XN: nc,
                    uE: rB
                  }) : (0, vB.postJsonWithMetricsCookiesAndJsonResponse)(`${Vc.gsUrl}/code/collab-push`, Qc.n["collab-push"].toBuffer({
                    gameNameWithVariation: Vc.gameNameWithVariation,
                    lobbyName: Vc.lobbyName,
                    docKey: uc,
                    version: nc,
                    updates: rB
                  }), {
                    retries: 0
                  }).catch((cB => {
                    console.error("[CodeCollab] HTTP push failed", cB)
                  }))
                }
                pull() {
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const cB = (0, gB.e)(this.view.state);
                  (0, vB.postJsonWithMetricsCookiesAndJsonResponse)(`${Vc.gsUrl}/code/collab-pull`, Qc.n["collab-pull"].toBuffer({
                    gameNameWithVariation: Vc.gameNameWithVariation,
                    lobbyName: Vc.lobbyName,
                    docKey: uc,
                    fromVersion: cB
                  }), {
                    retries: 1
                  }).then((cB => {
                    if (cB.fullDoc) return void Cc.i.Vu("codeCollabRejoin", {
                      docKey: uc,
                      doc: cB.fullDoc,
                      version: cB.version
                    });
                    const Bc = JSON.parse(cB.updates).map((cB => ({
                      clientID: cB.clientID,
                      changes: Uc.ChangeSet.fromJSON(cB.changes)
                    })));
                    Bc.length > 0 && (this.view.dispatch((0, gB.g)(this.view.state, Bc)), Ic && Ic(this.view.state.doc.toString())), this.clearPushState(), this.push()
                  })).catch((cB => {
                    console.error("[CodeCollab] Pull failed", cB)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const cB = Date.now();
                  if (cB - this.lastCursorSent < Nc) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Nc)));
                  this.lastCursorSent = cB;
                  const Bc = this.view.state.selection.main;
                  Zc.gameBridge.send("sendCodeCollab", {
                    oN: hc.b.Cursor,
                    kE: uc,
                    sE: Bc.anchor,
                    OE: Bc.head
                  })
                }
                destroy() {
                  Cc.i.unsubscribe(this.subToken), this.pushTimeout && clearTimeout(this.pushTimeout), this.pushDelayTimeout && clearTimeout(this.pushDelayTimeout), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, gB.d)({
              startVersion: cB,
              clientID: Bc
            }), sc]
          }(MB, PB, Mc.docKey, Mc.httpConfig, (cB => {
            var Bc;
            null === (Bc = fB.current) || void 0 === Bc || Bc.call(fB, cB)
          }), Tc));
          const cB = function(cB, Bc) {
            const nc = (0, hc.s)(cB);
            return {
              extensions: [Rc],
              connect(cB) {
                if (Bc) {
                  const nc = Bc.map((cB => Xc.of({
                    playerId: cB.playerId,
                    playerName: cB.playerName,
                    colour: cB.colour,
                    anchor: cB.anchor,
                    head: cB.head,
                    lastMoved: Date.now()
                  })));
                  nc.length > 0 && cB.dispatch({
                    effects: nc
                  })
                }
                const Vc = Cc.i.subscribe("codeCollab", (Bc => {
                    if (Bc.docKey === nc)
                      if (Bc.type === hc.d.RemoteCursor) cB.dispatch({
                        effects: Xc.of({
                          playerId: Bc.playerId,
                          playerName: Bc.playerName,
                          colour: Bc.colour,
                          anchor: Bc.anchor,
                          head: Bc.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Bc.type === hc.d.Presence) {
                      const nc = JSON.parse(Bc.peers),
                        Vc = new Set(nc.map((cB => cB.playerId))),
                        Ic = cB.state.field(Rc),
                        rB = [];
                      for (const [cB] of Ic.cursors) Vc.has(cB) || rB.push(Hc.of(cB));
                      rB.length > 0 && cB.dispatch({
                        effects: rB
                      })
                    }
                  })),
                  Ic = setInterval((() => {
                    cB.dom.isConnected ? cB.dispatch({
                      effects: Fc.of(Date.now())
                    }) : clearInterval(Ic)
                  }), kB);
                return () => {
                  Cc.i.unsubscribe(Vc), clearInterval(Ic)
                }
              }
            }
          }(Mc.docKey, Mc.existingCursors);
          sc.push(...cB.extensions), yn.current = cB.connect
        } else yn.current = null;
        return sc
      }), [Bc, IB, Jc, MB, PB, DB, dc, Ac, Gc, Tc, nB, VB]);
      if (!IB || !iB && !Ac) return (0, TB.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, TB.jsx)(yB.e, {})
      });
      const WB = Ac ? `plugin-${Ac}-${null!==Gc&&void 0!==Gc?Gc:"index.ts"}` : iB ? `collab-${iB.clientID}` : `local-${Bc}`;
      return (0, TB.jsx)(rB.r, {
        value: Ac ? null !== cn && void 0 !== cn ? cn : "" : nc,
        onChange: sc,
        extensions: oB,
        className: "CodeEditorContent",
        theme: jB ? rn : "dark",
        editable: Tc && !Ac,
        basicSetup: vn,
        onCreateEditor: cB => {
          var Bc;
          mn.current = cB, tn.current = null !== (Bc = null === iB || void 0 === iB ? void 0 : iB.clientID) && void 0 !== Bc ? Bc : null, mn.current.focus(), EB(cB), SB.current && SB.current(), yn.current && (SB.current = yn.current(cB))
        }
      }, WB)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);