export const id = 602;
export const ids = [602];
export const modules = {
  44461: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => TO
    });
    var YB = GB(44467),
      DB = GB(44500),
      QB = GB(44508),
      oB = GB(56),
      jB = GB(70),
      yB = GB(44523),
      JB = GB(44529),
      MB = GB(5253),
      PB = GB(44535),
      zB = GB(2e3),
      lB = GB(44538),
      pB = GB(44559),
      qB = GB.n(pB),
      ZB = GB(44514),
      NB = GB(44517),
      RB = GB(1375),
      WB = GB(37541),
      AB = GB(1238),
      VB = GB(2646),
      SB = GB(36977),
      nB = GB(1480),
      UB = GB(641),
      fB = GB(1246),
      kB = GB(44612),
      dB = GB(44470),
      KB = GB(44474),
      uB = GB(2023),
      mB = GB(4166),
      IB = GB(25),
      FB = GB(1121);
    const iB = 1e4,
      LB = 250,
      gB = 250;
    var rB = GB(44485);
    const XB = 50,
      wB = 100;
    const EB = 2e3,
      cB = dB.D.define(),
      hB = dB.D.define(),
      aB = dB.D.define();
    class eB extends KB.o {
      constructor(BB, OB, GB) {
        super(), this.colour = BB, this.playerName = OB, this.showName = GB
      }
      toDOM() {
        const BB = document.createElement("span");
        BB.className = "cm-remote-cursor-wrapper", BB.style.borderLeftColor = this.colour;
        const OB = document.createElement("span");
        if (OB.className = "cm-remote-cursor", OB.style.borderLeftColor = this.colour, BB.appendChild(OB), this.showName) {
          const OB = document.createElement("span");
          OB.className = "cm-remote-cursor-name", OB.style.backgroundColor = this.colour, OB.textContent = this.playerName, BB.appendChild(OB)
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

    function TB(BB, OB) {
      const GB = [],
        YB = [];
      for (const [, oB] of BB) {
        const BB = OB - oB.lastMoved < EB;
        if (GB.push({
            pos: oB.head,
            decoration: KB.c.widget({
              widget: new eB(oB.colour, oB.playerName, BB),
              side: 1
            })
          }), oB.anchor !== oB.head) {
          const BB = Math.min(oB.anchor, oB.head),
            OB = Math.max(oB.anchor, oB.head);
          YB.push({
            from: BB,
            to: OB,
            decoration: KB.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${oB.colour}33`
              }
            })
          })
        }
      }
      const DB = new dB.v,
        QB = [];
      for (const oB of GB) QB.push({
        bias: 1,
        deco: oB.decoration,
        from: oB.pos,
        to: oB.pos
      });
      for (const oB of YB) QB.push({
        bias: 0,
        deco: oB.decoration,
        from: oB.from,
        to: oB.to
      });
      QB.sort(((BB, OB) => BB.from - OB.from || BB.deco.startSide - OB.deco.startSide || BB.bias - OB.bias));
      for (const oB of QB) DB.add(oB.from, oB.to, oB.deco);
      return DB.finish()
    }
    const bB = dB.G.define({
      create: () => ({
        cursors: new Map,
        TD: KB.c.none
      }),
      update(BB, OB) {
        let GB = BB.cursors,
          YB = !1;
        if (OB.docChanged) {
          const BB = new Map;
          for (const [YB, DB] of GB) BB.set(YB, {
            ...DB,
            anchor: OB.changes.mapPos(DB.anchor, 1),
            head: OB.changes.mapPos(DB.head, 1)
          });
          GB = BB, YB = !0
        }
        for (const DB of OB.effects)
          if (DB.is(cB)) {
            if (!Number.isInteger(DB.value.anchor) || !Number.isInteger(DB.value.head)) {
              console.warn(`Code Editor: ignored player ${DB.value.playerId}'s cursor at ${DB.value.anchor}-${DB.value.head}`);
              continue
            }
            const QB = OB.state.doc.length,
              oB = {
                ...DB.value,
                anchor: Math.min(DB.value.anchor, QB),
                head: Math.min(DB.value.head, QB)
              };
            GB === BB.cursors && (GB = new Map(GB)), GB.set(oB.playerId, oB), YB = !0
          } else DB.is(hB) ? GB.has(DB.value) && (GB === BB.cursors && (GB = new Map(GB)), GB.delete(DB.value), YB = !0) : DB.is(aB) && (YB = !0);
        return YB ? {
          cursors: GB,
          TD: TB(GB, Date.now())
        } : BB
      },
      provide: BB => KB.h.TD.from(BB, (BB => BB.TD))
    });
    const CB = dB.D.define(),
      HB = KB.c.mark({
        class: "CodeInsertFlash"
      }),
      vB = dB.G.define({
        create: () => KB.c.none,
        update(BB, OB) {
          let GB = BB.map(OB.changes);
          for (const YB of OB.effects) YB.is(CB) && (GB = YB.value ? KB.c.set(HB.range(YB.value.from, YB.value.to)) : KB.c.none);
          return GB
        },
        provide: BB => KB.h.TD.from(BB)
      }),
      sB = dB.G.define({
        create: () => !1,
        update: (BB, OB) => BB || void 0 !== OB.annotation(dB.L.userEvent) && !OB.annotation(dB.L.remote)
      }),
      xB = [vB, sB];

    function tB(BB) {
      return BB.field(sB)
    }
    const BO = 3e4;

    function OO(BB, OB) {
      const GB = (0, oB.useRef)(null);
      (0, oB.useEffect)((() => {
        var BB;
        (null === (BB = GB.current) || void 0 === BB ? void 0 : BB.path) !== OB && (GB.current = null)
      }), [OB]);
      const YB = BB => {
        var YB;
        const DB = GB.current;
        if (null === BB || void 0 === BB || !BB.dom.isConnected || !DB || DB.path !== OB) return;
        GB.current = null;
        const {
          GP: oB
        } = DB;
        if (oB && null !== oB.text && performance.now() - oB.at < BO) {
          const OB = function(BB, OB) {
            if (BB === OB) return null;
            const GB = Math.min(BB.length, OB.length);
            let YB = 0;
            for (; YB < GB && BB[YB] === OB[YB];) YB++;
            let DB = 0;
            for (; DB < GB - YB && BB[BB.length - 1 - DB] === OB[OB.length - 1 - DB];) DB++;
            return {
              from: YB,
              to: BB.length - DB,
              insert: OB.slice(YB, OB.length - DB)
            }
          }(BB.state.doc.toString(), oB.text);
          null !== OB && BB.dispatch({
            changes: OB,
            userEvent: oB.placed ? "input" : void 0
          })
        }
        const {
          doc: jB
        } = BB.state, yB = jB.line(Math.min(Math.max(DB.line, 1), jB.lines)), JB = yB.from + Math.min(null !== (YB = DB.column) && void 0 !== YB ? YB : 0, yB.length);
        BB.dispatch({
          selection: {
            anchor: JB
          },
          effects: QB.d.scrollIntoView(JB, {
            y: "center"
          }),
          userEvent: null !== oB && void 0 !== oB && oB.placed ? "select" : void 0
        }), !1 !== (null === oB || void 0 === oB ? void 0 : oB.focused) && BB.focus()
      };
      return (0, nB.f)("CodeEditorGoToLine", (OB => {
        GB.current = OB, YB(BB.current)
      })), (0, nB.f)("CodeEditorKeepEdits", (() => {
        const YB = BB.current;
        if (null === YB || !YB.dom.isConnected || null === OB) return;
        const {
          doc: DB,
          selection: QB
        } = YB.state, {
          head: oB
        } = QB.main, jB = DB.lineAt(oB), yB = {
          text: (0, kB.m)(YB.state).length > 0 ? DB.toString() : null,
          at: performance.now(),
          focused: YB.hasFocus,
          placed: tB(YB.state)
        };
        GB.current = {
          path: OB,
          line: jB.number,
          column: oB - jB.from,
          GP: yB
        }
      })), BB => {
        var DB;
        const QB = GB.current;
        !1 === (null === QB || void 0 === QB || null === (DB = QB.GP) || void 0 === DB ? void 0 : DB.focused) && QB.path === OB || BB.focus(), YB(BB)
      }
    }
    var GO = GB(4773),
      YO = GB(1175);

    function DO(BB, OB) {
      const {
        t: GB
      } = (0, YO.H)();
      (0, nB.f)("CodeEditorInsertText", (YB => {
        let {
          text: DB,
          focus: QB
        } = YB;
        const oB = BB.current,
          jB = null !== oB && void 0 !== oB && oB.dom.isConnected ? function(BB, OB) {
            if (!tB(BB)) return null;
            const {
              from: GB,
              to: YB
            } = BB.selection.main, DB = GB + OB.length;
            return {
              changes: {
                from: GB,
                to: YB,
                insert: OB
              },
              selection: {
                anchor: DB
              },
              effects: [KB.h.scrollIntoView(DB, {
                y: "center"
              }), CB.of({
                from: GB,
                to: DB
              })],
              userEvent: "input"
            }
          }(oB.state, DB) : null;
        null !== oB && null !== jB ? (oB.dispatch(jB), QB && oB.focus(), setTimeout((() => {
          oB.dom.isConnected && oB.dispatch({
            effects: CB.of(null)
          })
        }), 1500)) : (0, GO.b)(DB).then((() => {
          OB({
            message: GB("codeEditorWorld:pickCopied", {
              coords: DB
            }),
            type: "success"
          })
        }), (BB => {
          console.error("Pick could not copy the coordinates", BB), OB({
            message: GB("codeEditorWorld:pickPlaceCursor", {
              coords: DB
            }),
            type: "warning"
          })
        }))
      }))
    }
    var QO = GB(44493);
    const oO = "#e45649",
      jO = "#383a42",
      yO = "#696c77",
      JO = "#986801",
      MO = "#e5e5e6",
      PO = "#fafafa",
      zO = "#eaeaeb",
      lO = "#526fff",
      pO = KB.h.theme({
        "&": {
          color: jO,
          backgroundColor: PO
        },
        ".cm-content": {
          caretColor: lO
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: lO
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: jO
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
          backgroundColor: PO,
          color: yO,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: MO
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: zO
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: zO,
          borderBottomColor: zO
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: MO,
            color: jO
          }
        }
      }, {
        dark: !1
      }),
      qO = rB.c.define([{
        tag: QO.i.keyword,
        color: "#a626a4"
      }, {
        tag: [QO.i.name, QO.i.deleted, QO.i.character, QO.i.propertyName, QO.i.macroName],
        color: oO
      }, {
        tag: [QO.i.function(QO.i.variableName), QO.i.labelName],
        color: "#4078f2"
      }, {
        tag: [QO.i.color, QO.i.constant(QO.i.name), QO.i.standard(QO.i.name)],
        color: JO
      }, {
        tag: [QO.i.definition(QO.i.name), QO.i.separator],
        color: jO
      }, {
        tag: [QO.i.typeName, QO.i.className, QO.i.number, QO.i.changed, QO.i.annotation, QO.i.modifier, QO.i.self, QO.i.namespace],
        color: "#c18401"
      }, {
        tag: [QO.i.operator, QO.i.operatorKeyword, QO.i.url, QO.i.escape, QO.i.regexp, QO.i.link, QO.i.special(QO.i.string)],
        color: "#0184bc"
      }, {
        tag: [QO.i.meta, QO.i.comment],
        color: yO
      }, {
        tag: QO.i.strong,
        fontWeight: "bold"
      }, {
        tag: QO.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: QO.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: QO.i.link,
        color: yO,
        textDecoration: "underline"
      }, {
        tag: QO.i.heading,
        fontWeight: "bold",
        color: oO
      }, {
        tag: [QO.i.atom, QO.i.bool, QO.i.special(QO.i.variableName)],
        color: JO
      }, {
        tag: [QO.i.processingInstruction, QO.i.string, QO.i.inserted],
        color: "#50a14f"
      }, {
        tag: QO.i.invalid,
        color: "#000000"
      }]),
      ZO = [pO, (0, rB.kb)(qO)];
    var NO = GB(37601),
      RO = GB(44618);
    const WO = QB.k.define(),
      AO = QB.m.define({
        create: () => !1,
        update(BB, OB) {
          for (const GB of OB.effects) GB.is(WO) && (BB = GB.value);
          return BB
        }
      }),
      VO = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function SO(BB, OB) {
      return [AO, QB.p.fromClass(class {
        constructor(BB) {
          this.view = BB, this.onDown = BB => {
            const OB = BB.target instanceof Element && null !== BB.target.closest(".cm-tooltip");
            0 !== BB.button || OB || this.view.state.field(AO) || this.view.dispatch({
              effects: WO.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(AO) && this.view.dispatch({
              effects: WO.of(!1)
            })
          }, BB.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), QB.w.compute(["selection", AO], (GB => function(BB, OB, GB) {
        const YB = BB.selection.main;
        return YB.empty || BB.field(AO) || BB.sliceDoc(YB.from, YB.to).trim().length < 2 ? null : {
          pos: YB.from,
          above: !0,
          create: BB => {
            const YB = document.createElement("div");
            YB.className = "CodeSelectionActions", YB.setAttribute("role", "toolbar"), YB.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: DB,
                label: QB
              }
              of VO) {
              if (!GB && "explain" !== DB) continue;
              const oB = document.createElement("button");
              oB.type = "button", oB.textContent = QB, "change" !== DB && (oB.title = RO.e, oB.dataset.asksAi = "true"), oB.addEventListener("mousedown", (BB => {
                BB.preventDefault()
              })), oB.addEventListener("click", (() => {
                const GB = BB.state.selection.main;
                if (GB.empty) return;
                const YB = {
                  action: DB,
                  path: OB,
                  fromLine: BB.state.doc.lineAt(GB.from).number,
                  toLine: BB.state.doc.lineAt(GB.to > GB.from && BB.state.doc.lineAt(GB.to).from === GB.to ? GB.to - 1 : GB.to).number,
                  text: BB.state.sliceDoc(GB.from, GB.to)
                };
                IB.o.tM("WorldCodeAiSelection", YB), BB.dispatch({
                  selection: {
                    anchor: GB.to
                  }
                })
              })), YB.appendChild(oB)
            }
            return {
              dom: YB
            }
          }
        }
      }(GB, BB, OB)))]
    }
    var nO = GB(1282);
    const UO = new Set(["(", "{", "[", "<"]),
      fO = new Set([")", "}", "]", ">"]),
      kO = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function dO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function GB(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = [];
        for (const DB of BB) {
          let BB;
          BB = "punctuation" === DB.kind ? kO.text : "parameterName" === DB.kind ? kO.parameterName : OB, YB.push({
            str: DB.text,
            style: {
              color: BB,
              opacity: GB ? .5 : void 0
            }
          })
        }
        return YB
      }
      const YB = [];
      if (YB.push(...GB(BB.prefixDisplayParts, kO.text)), BB.parameters.length > 0) {
        YB.push("\n");
        for (let DB = 0; DB < BB.parameters.length; DB++) {
          const QB = BB.parameters[DB];
          YB.push("\t"), YB.push(...GB(QB.displayParts, kO.parameter, null !== OB && DB !== OB)), YB.push("\n")
        }
      }
      return YB.push(...GB(BB.suffixDisplayParts, kO.suffix)), BB.documentation && (YB.push("\n\n"), YB.push(...GB(BB.documentation, kO.docs))), YB
    }
    var KO = function(BB) {
      return BB[BB.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", BB[BB.DuplicateIdentifier = 2300] = "DuplicateIdentifier", BB
    }(KO || {});
    const uO = new Set([KO.DuplicateIdentifier]),
      mO = new Set([KO.VariableDefinedElsewhere]),
      IO = new Set([]),
      FO = "/index.js";

    function iO(BB) {
      return "/" + BB
    }

    function LO(BB, OB, GB) {
      BB.getSourceFile(OB) && BB.deleteFile(OB), BB.createFile(OB, GB)
    }

    function gO(BB) {
      return !!BB && ((0, VB.o)(BB) || (0, VB.k)(BB))
    }

    function rO(BB, OB, GB) {
      return () => {
        let YB = [...OB.languageService.getSemanticDiagnostics(GB), ...OB.languageService.getSyntacticDiagnostics(GB)];
        return YB = YB.filter((BB => !(0, UB.Q)(BB.start) && !(0, UB.Q)(BB.length) && !uO.has(BB.code))), BB || (YB = YB.filter((BB => !mO.has(BB.code)))), YB.map((BB => ({
          from: BB.start,
          to: BB.start + BB.length,
          message: "string" === typeof BB.messageText ? BB.messageText : BB.messageText.messageText,
          severity: IO.has(BB.code) ? "warning" : "error"
        })))
      }
    }

    function XO(BB, OB) {
      return GB => {
        var YB, DB;
        const QB = BB.languageService.getCompletionsAtPosition(OB, GB.pos, {});
        if (!QB) return {
          from: GB.pos,
          options: []
        };
        let oB = null !== (YB = null === (DB = QB.optionalReplacementSpan) || void 0 === DB ? void 0 : DB.start) && void 0 !== YB ? YB : GB.pos;
        if (!QB.optionalReplacementSpan) {
          const BB = GB.state.doc.sliceString(0, GB.pos);
          for (; oB > 0 && /[\w$]/.test(BB[oB - 1]);) oB--
        }
        return QB.entries = QB.entries.filter((BB => BB.kind !== qB().ScriptElementKind.warning)), {
          from: oB,
          options: QB.entries.map((YB => {
            var DB, QB, jB, yB;
            const JB = BB.languageService.getCompletionEntryDetails(OB, GB.pos, YB.name, {}, YB.source, {}, YB.data),
              MB = null !== (DB = null === (QB = YB.replacementSpan) || void 0 === QB ? void 0 : QB.start) && void 0 !== DB ? DB : oB,
              PB = YB.replacementSpan ? YB.replacementSpan.start + YB.replacementSpan.length : GB.pos,
              zB = null !== (jB = YB.insertText) && void 0 !== jB ? jB : YB.name;
            return {
              label: YB.name,
              detail: null === JB || void 0 === JB ? void 0 : JB.displayParts.map((BB => BB.text)).join(""),
              info: null === JB || void 0 === JB || null === (yB = JB.documentation) || void 0 === yB ? void 0 : yB.map((BB => BB.text)).join(""),
              apply: BB => {
                BB.dispatch({
                  changes: {
                    from: MB,
                    to: PB,
                    insert: zB
                  },
                  selection: {
                    anchor: MB + zB.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function wO(BB) {
      return OB => {
        const GB = document.createElement("div");
        GB.className = "CodeEditorTooltip";
        let YB = !1;
        return queueMicrotask((() => {
          YB || (jB.render((0, nO.jsx)(zB.b, {
            text: BB
          }), GB), OB.requestMeasure())
        })), {
          dom: GB,
          destroy() {
            YB = !0, queueMicrotask((() => {
              jB.unmountComponentAtNode(GB)
            }))
          }
        }
      }
    }

    function EO(BB, OB, GB) {
      return YB => {
        var DB;
        if (!OB) return [];
        const QB = null === (DB = YB.selection.JZ[0]) || void 0 === DB ? void 0 : DB.head;
        if (void 0 === QB) return [];
        const oB = BB.languageService.getSignatureHelpItems(GB, QB, {});
        if (!oB || !oB.items.length) return [];
        const jB = oB.applicableSpan.start - oB.items[0].prefixDisplayParts.map((BB => BB.text)).join("").length,
          yB = oB.applicableSpan.start,
          JB = YB.doc.lineAt(QB),
          MB = JB.from,
          PB = Math.min(JB.to, QB);
        let zB, lB;
        return jB < MB ? (zB = MB, lB = PB) : (zB = jB, lB = yB), [{
          pos: zB,
          end: lB,
          above: !1,
          create: wO(dO(oB.items[0], oB.argumentIndex))
        }]
      }
    }

    function cO(BB, OB) {
      return (GB, YB, DB) => {
        const QB = BB.languageService.getQuickInfoAtPosition(OB, YB);
        if (!QB) return [];
        const oB = QB.textSpan.start,
          jB = QB.textSpan.start + QB.textSpan.length;
        if (YB < oB || YB >= jB) return [];
        if (QB.kind === qB().ScriptElementKind.memberFunctionElement || QB.kind === qB().ScriptElementKind.variableElement && "declare" === QB.kindModifiers) {
          const BB = QB.displayParts.findIndex((BB => "space" === BB.kind)); - 1 !== BB && (QB.displayParts = QB.displayParts.slice(BB));
          const OB = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            GB = QB.displayParts.findIndex((BB => "punctuation" === BB.kind && "(" === BB.text)); - 1 !== GB && (OB.prefixDisplayParts = QB.displayParts.slice(0, GB + 1), QB.displayParts = QB.displayParts.slice(GB + 1));
          const YB = QB.displayParts.findLastIndex((BB => "punctuation" === BB.kind && ")" === BB.text)); - 1 !== YB && (OB.suffixDisplayParts = QB.displayParts.slice(YB), QB.displayParts = QB.displayParts.slice(0, YB));
          let DB = 0,
            yB = [];
          for (const oB of QB.displayParts)
            if (UO.has(oB.text) ? DB++ : fO.has(oB.text) && DB--, "lineBreak" !== oB.kind) {
              if ("space" === oB.kind) {
                if (0 === yB.length) continue;
                yB.push({
                  kind: "space",
                  text: " "
                })
              } else yB.push(oB);
              0 === DB && "," === oB.text && (OB.parameters.push({
                displayParts: yB
              }), yB = [])
            } return yB.length > 0 && OB.parameters.push({
            displayParts: yB
          }), OB.documentation = QB.documentation, [{
            pos: oB,
            end: jB,
            above: !0,
            create: wO(dO(OB))
          }]
        }
        const yB = [];
        for (const BB of QB.displayParts) yB.push({
          str: BB.text,
          style: {
            color: kO.text
          }
        });
        if (QB.documentation) {
          yB.push("\n\n");
          for (const BB of QB.documentation) yB.push({
            str: BB.text,
            style: {
              color: kO.docs
            }
          })
        }
        return [{
          pos: oB,
          end: jB,
          above: !0,
          create: wO(yB)
        }]
      }
    }
    const hO = {
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
      semicolons: qB().SemicolonPreference.Insert
    };
    const aO = QB.k.define(),
      eO = {
        lineNumbers: !0,
        tabSize: 4
      };

    function TO(BB) {
      let {
        isLobbyCode: OB,
        code: GB,
        onChange: jB,
        canEditCode: zB,
        setTemporaryMessage: pB,
        close: UB,
        showTooltips: eB,
        lightMode: TB,
        collabState: CB,
        onRemoteDocChange: HB,
        files: vB,
        activePath: sB,
        pluginName: tB,
        pluginFile: BO,
        pluginSource: GO,
        setActiveDocReplacer: YO,
        showAiHints: QO,
        canAiChangeCode: oO = zB
      } = BB;
      const [jO, yO] = (0, oB.useState)(null), JO = null === CB || void 0 === CB ? void 0 : CB.version, MO = null === CB || void 0 === CB ? void 0 : CB.clientID, PO = (0, oB.useRef)({
        isLobbyCode: OB,
        files: vB,
        code: GB,
        activePath: sB
      }), zO = (0, oB.useRef)(HB);
      zO.current = HB;
      const lO = (0, oB.useRef)(null),
        pO = (0, oB.useRef)(CB);
      pO.current = CB;
      const qO = (0, oB.useRef)(null),
        RO = (0, oB.useRef)(null),
        WO = (0, oB.useRef)(null),
        AO = (0, oB.useRef)(UB);
      AO.current = UB;
      const VO = (0, oB.useRef)(GB);
      VO.current = GB;
      const UO = (0, oB.useRef)(GO);
      UO.current = GO;
      const fO = function(BB, OB, GB, YB) {
        return GB ? `/plugin-preview/${GB}/${null!==YB&&void 0!==YB?YB:"index.ts"}` : BB ? iO(null !== OB && void 0 !== OB ? OB : AB.f) : FO
      }(OB, sB, tB, BO);
      (0, oB.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: BB,
            files: OB,
            code: GB,
            activePath: YB
          } = PO.current, DB = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: qB().ModuleKind.ESNext,
            moduleResolution: qB().ModuleResolutionKind.Bundler,
            target: qB().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(WB.f).map((BB => [BB.specifier, [BB.typesVfsPath]])))
            }
          }, QB = new Map, oB = [];
          if (BB) {
            const BB = null !== OB && void 0 !== OB ? OB : {
              [AB.f]: GB || "\n"
            };
            for (const [OB, GB] of Object.entries(BB)) {
              const BB = iO(OB);
              QB.set(BB, GB || "\n"), oB.push(BB)
            }
            const DB = iO(null !== YB && void 0 !== YB ? YB : AB.f);
            QB.has(DB) ? QB.set(DB, GB || "\n") : (QB.set(DB, GB || "\n"), oB.push(DB)), QB.set("/node_modules/@bloxd/index.d.ts", MB.default), oB.push("/node_modules/@bloxd/index.d.ts");
            for (const OB of Object.values(WB.f)) {
              QB.set(OB.typesVfsPath, OB.types), oB.push(OB.typesVfsPath);
              for (const [BB, GB] of Object.entries(OB.files)) {
                const YB = `/plugin-preview/${OB.name}/${BB}`;
                QB.set(YB, GB || "\n"), oB.push(YB)
              }
            }
          } else QB.set(FO, GB || "\n"), oB.push(FO);
          QB.set("/globals.d.ts", BB ? JB.d : yB.e), QB.set("/lib.d.ts", PB.c), oB.push("/globals.d.ts", "/lib.d.ts");
          const jB = lB.e(QB),
            zB = lB.h(jB, oB, qB(), DB);
          yO({
            RP: zB,
            fsMap: QB
          })
        }()
      }), []), (0, oB.useEffect)((() => {
        var BB, YB;
        if (!jO || !OB) return;
        const {
          RP: DB,
          fsMap: QB
        } = jO;
        if (function(BB, OB, GB) {
            const YB = new Set;
            for (const [DB, QB] of Object.entries(GB)) {
              const GB = iO(DB);
              YB.add(GB);
              const oB = QB || "\n";
              OB.get(GB) !== oB && (OB.set(GB, oB), LO(BB, GB, oB))
            }
            for (const DB of [...OB.keys()]) "/globals.d.ts" === DB || "/lib.d.ts" === DB || DB.startsWith("/node_modules/") || DB.startsWith("/plugin-preview/") || YB.has(DB) || (OB.delete(DB), BB.getSourceFile(DB) && BB.deleteFile(DB))
          }(DB, QB, null !== vB && void 0 !== vB ? vB : {
            [AB.f]: GB || "\n"
          }), tB) return void LO(DB, fO, GO || "\n");
        const oB = null !== (BB = null === (YB = lO.current) || void 0 === YB ? void 0 : YB.state.doc.toString()) && void 0 !== BB ? BB : GB;
        LO(DB, fO, oB || "\n")
      }), [vB, sB, jO, tB, GO, fO, GB, OB]), (0, oB.useEffect)((() => {
        if (!jO) return;
        const {
          RP: BB
        } = jO;
        LO(BB, fO, (tB ? GO : GB) || "\n")
      }), [GB, tB, GO, fO, jO]), (0, oB.useEffect)((() => () => {
        RO.current && (RO.current(), RO.current = null)
      }), []), (0, oB.useEffect)((() => (YO(((BB, OB) => {
        if (tB) return !1;
        const GB = lO.current,
          YB = pO.current,
          DB = YB ? (0, VB.w)(YB.docKey) : null;
        if (!GB || !YB || qO.current !== YB.clientID || BB !== DB) return !1;
        const QB = GB.state.doc.toString();
        return QB !== OB && GB.dispatch({
          changes: {
            from: 0,
            to: QB.length,
            insert: OB
          }
        }), !0
      })), () => {
        lO.current = null, qO.current = null, YO(null)
      })), [YO, tB]);
      const kO = OB ? tB ? null : null !== sB && void 0 !== sB ? sB : AB.f : NO.c,
        dO = OO(lO, kO);
      DO(lO, pB), (0, nB.f)("FormatCode", (() => {
        if (!jO || !lO.current || tB) return;
        const {
          RP: BB,
          fsMap: GB
        } = jO, YB = BB.getSourceFile(fO).getFullText();
        let DB = 0;
        if (OB && vB)
          for (const [OB, jB] of Object.entries(vB)) OB !== (null !== sB && void 0 !== sB ? sB : AB.f) && (DB += jB.length);
        const QB = function(BB, OB, GB, YB, DB) {
          const QB = BB.languageService.getFormattingEditsForDocument(YB, hO);
          if (!QB.length) return fB.c.error("Code is already formatted.");
          QB.sort(((BB, OB) => OB.span.start - BB.span.start));
          let oB = BB.getSourceFile(YB).getFullText();
          for (const jB of QB) oB = oB.slice(0, jB.span.start) + jB.MJ + oB.slice(jB.span.start + jB.span.length);
          return oB !== (GB ? (0, SB.i)(oB, DB) : (0, SB.h)(oB)) ? fB.c.error("Formatting the code will go beyond the character limit.") : fB.c.value(oB)
        }(BB, 0, OB, fO, DB);
        if (QB.isError()) return void pB({
          message: QB.asError().message,
          type: "warning"
        });
        const oB = QB.getValue();
        oB && (lO.current.dispatch({
          changes: {
            from: 0,
            to: YB.length,
            insert: oB
          },
          selection: {
            anchor: oB.length
          }
        }), LO(BB, fO, oB), jB(oB))
      }));
      const KO = (0, oB.useMemo)((() => {
        if (!jO) return [];
        const {
          RP: BB,
          fsMap: GB
        } = jO;
        ! function(BB, OB, GB, YB) {
          if (BB.getSourceFile(GB)) return;
          const DB = YB || "\n";
          OB.set(GB, DB), BB.createFile(GB, DB)
        }(BB, GB, fO, (tB ? UO.current : VO.current) || "\n");
        const oB = OB && gO(tB ? null !== BO && void 0 !== BO ? BO : "index.ts" : sB),
          jB = [(0, DB.b)({
            jsx: !1,
            typescript: oB
          }), QB.h.highest(QB.d.domEventHandlers({
            keydown: BB => "Escape" === BB.key ? (AO.current(), BB.stopPropagation(), !0) : (BB.stopPropagation(), !1)
          })), (0, YB.d)({
            override: [XO(BB, fO)]
          }), KB.l.fromClass(class {
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
                (0, rB.lb)(this.view.state, BB) || (0, rB.T)(this.view, BB, XB) || this.scheduleParse()
              }), wB))
            }
          }), ...xB, QB.d.lineWrapping, QB.m.define({
            create: EO(BB, eB, fO),
            update(OB, GB) {
              const YB = GB.effects.some((BB => BB.is(aO)));
              return GB.docChanged || GB.selection || YB ? (LO(BB, fO, GB.state.doc.toString() || " "), EO(BB, eB, fO)(GB.state)) : OB
            },
            provide: BB => QB.w.computeN([BB], (OB => OB.field(BB)))
          }), (0, QB.u)(cO(BB, fO)), (0, NB.e)(rO(OB, BB, fO)), QB.p.fromClass(class {
            constructor(BB) {
              this.view = BB, this.searchPanel = null
            }
            update(BB) {
              const OB = BB.view.dom.querySelector(".cm-search");
              if (OB !== this.searchPanel) {
                if (this.searchPanel = OB, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (BB => {
                  "Escape" === BB.key && (0, ZB.b)(this.view), BB.stopPropagation()
                }))
              }
            }
          })];
        QO && !tB && jB.push(SO(OB ? null !== sB && void 0 !== sB ? sB : AB.f : NO.c, oO));
        const yB = pO.current;
        if (yB && !tB) {
          jB.push(... function(BB, OB, GB, YB, DB) {
            let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const oB = (0, VB.w)(GB),
              jB = KB.l.fromClass(class {
                constructor(BB) {
                  this.view = BB, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = IB.o.subscribe("codeCollab", (BB => {
                    BB.docKey === oB && BB.type === VB.f.Updates && (BB.updates ? this.applyUpdates(BB.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(BB) {
                  const OB = JSON.parse(BB).map((BB => ({
                    clientID: BB.clientID,
                    changes: dB.ChangeSet.fromJSON(BB.changes)
                  })));
                  OB.length > 0 && (this.view.dispatch((0, kB.j)(this.view.state, OB)), DB && DB(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(BB) {
                  QB && (BB.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const BB = (0, kB.m)(this.view.state);
                  if (this.pushing || !BB.length) return;
                  const OB = Date.now() - this.lastPushTime;
                  if (OB < gB) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), gB - OB)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), iB);
                  const GB = (0, kB.h)(this.view.state),
                    DB = BB.map((BB => ({
                      clientID: BB.clientID,
                      changes: BB.changes.toJSON()
                    }))),
                    QB = JSON.stringify(DB);
                  QB.length <= VB.g ? uB.gameBridge.send("sendCodeCollab", {
                    XB: VB.c.Push,
                    wB: oB,
                    EB: GB,
                    aB: QB
                  }) : (0, FB.postJsonWithMetricsCookiesAndJsonResponse)(`${YB.gsUrl}/code/collab-push`, mB.r["collab-push"].toBuffer({
                    gameNameWithVariation: YB.gameNameWithVariation,
                    lobbyName: YB.lobbyName,
                    docKey: oB,
                    version: GB,
                    updates: QB
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
                  const BB = (0, kB.h)(this.view.state);
                  (0, FB.postJsonWithMetricsCookiesAndJsonResponse)(`${YB.gsUrl}/code/collab-pull`, mB.r["collab-pull"].toBuffer({
                    gameNameWithVariation: YB.gameNameWithVariation,
                    lobbyName: YB.lobbyName,
                    docKey: oB,
                    fromVersion: BB
                  }), {
                    retries: 1
                  }).then((BB => {
                    this.destroyed || (BB.fullDoc ? IB.o.tM("codeCollabRejoin", {
                      docKey: oB,
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
                  if (BB - this.lastCursorSent < LB) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), LB)));
                  this.lastCursorSent = BB;
                  const OB = this.view.state.selection.main;
                  uB.gameBridge.send("sendCodeCollab", {
                    XB: VB.c.Cursor,
                    wB: oB,
                    CB: OB.anchor,
                    HB: OB.head
                  })
                }
                destroy() {
                  this.destroyed = !0, IB.o.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, kB.e)({
              startVersion: BB,
              clientID: OB
            }), jB]
          }(JO, MO, yB.docKey, yB.httpConfig, (BB => {
            var OB;
            null === (OB = zO.current) || void 0 === OB || OB.call(zO, BB)
          }), zB));
          const BB = function(BB, OB) {
            const GB = (0, VB.w)(BB);
            return {
              extensions: [bB],
              connect(BB) {
                if (OB) {
                  const GB = OB.map((BB => cB.of({
                    playerId: BB.playerId,
                    playerName: BB.playerName,
                    colour: BB.colour,
                    anchor: BB.anchor,
                    head: BB.head,
                    lastMoved: Date.now()
                  })));
                  GB.length > 0 && BB.dispatch({
                    effects: GB
                  })
                }
                const YB = IB.o.subscribe("codeCollab", (OB => {
                    if (OB.docKey === GB)
                      if (OB.type === VB.f.RemoteCursor) BB.dispatch({
                        effects: cB.of({
                          playerId: OB.playerId,
                          playerName: OB.playerName,
                          colour: OB.colour,
                          anchor: OB.anchor,
                          head: OB.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (OB.type === VB.f.Presence) {
                      const GB = JSON.parse(OB.peers),
                        YB = new Set(GB.map((BB => BB.playerId))),
                        DB = BB.state.field(bB),
                        QB = [];
                      for (const [BB] of DB.cursors) YB.has(BB) || QB.push(hB.of(BB));
                      QB.length > 0 && BB.dispatch({
                        effects: QB
                      })
                    }
                  })),
                  DB = setInterval((() => {
                    BB.dom.isConnected ? BB.dispatch({
                      effects: aB.of(Date.now())
                    }) : clearInterval(DB)
                  }), EB);
                return () => {
                  IB.o.unsubscribe(YB), clearInterval(DB)
                }
              }
            }
          }(yB.docKey, yB.existingCursors);
          jB.push(...BB.extensions), WO.current = BB.connect
        } else WO.current = null;
        return jB
      }), [OB, jO, eB, JO, MO, fO, sB, tB, BO, zB, QO, oO]);
      if (!jO || !CB && !tB) return (0, nO.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, nO.jsx)(RB.b, {})
      });
      const uO = tB ? `plugin-${tB}-${null!==BO&&void 0!==BO?BO:"index.ts"}` : CB ? `collab-${CB.clientID}` : `local-${OB}`;
      return (0, nO.jsx)(QB.s, {
        value: tB ? null !== GO && void 0 !== GO ? GO : "" : GB,
        onChange: jB,
        extensions: KO,
        className: "CodeEditorContent",
        theme: TB ? ZO : "dark",
        editable: zB && !tB,
        basicSetup: eO,
        onCreateEditor: BB => {
          var OB;
          lO.current = BB, qO.current = null !== (OB = null === CB || void 0 === CB ? void 0 : CB.clientID) && void 0 !== OB ? OB : null, dO(BB), RO.current && RO.current(), WO.current && (RO.current = WO.current(BB))
        }
      }, uO)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);