export const id = 297;
export const ids = [297];
export const modules = {
  41331: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => tI
    });
    var TB = ZB(41339),
      JB = ZB(41385),
      oB = ZB(41392),
      GB = ZB(63),
      vB = ZB(82),
      kB = ZB(41405),
      cB = ZB(41409),
      nB = ZB(4937),
      hB = ZB(41417),
      zB = ZB(1960),
      FB = ZB(41421),
      NB = ZB(41435),
      gB = ZB.n(NB),
      qB = ZB(41394),
      yB = ZB(41397),
      UB = ZB(1397),
      WB = ZB(36878),
      dB = ZB(1300),
      CB = ZB(2518),
      QB = ZB(36771),
      sB = ZB(1507),
      wB = ZB(665),
      OB = ZB(1305),
      YB = ZB(41486),
      iB = ZB(41342),
      pB = ZB(41349),
      aB = ZB(1995),
      HB = ZB(3911),
      MB = ZB(24),
      jB = ZB(1186);
    const PB = 1e4,
      RB = 250,
      rB = 250;
    var mB = ZB(41371);
    const XB = 50,
      LB = 100;
    const eB = 2e3,
      uB = iB.K.define(),
      fB = iB.K.define(),
      lB = iB.K.define();
    class AB extends pB.o {
      constructor(BB, IB, ZB) {
        super(), this.colour = BB, this.playerName = IB, this.showName = ZB
      }
      toDOM() {
        const BB = document.createElement("span");
        BB.className = "cm-remote-cursor-wrapper", BB.style.borderLeftColor = this.colour;
        const IB = document.createElement("span");
        if (IB.className = "cm-remote-cursor", IB.style.borderLeftColor = this.colour, BB.appendChild(IB), this.showName) {
          const IB = document.createElement("span");
          IB.className = "cm-remote-cursor-name", IB.style.backgroundColor = this.colour, IB.textContent = this.playerName, BB.appendChild(IB)
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

    function tB(BB, IB) {
      const ZB = [],
        TB = [];
      for (const [, GB] of BB) {
        const BB = IB - GB.lastMoved < eB;
        if (ZB.push({
            pos: GB.head,
            decoration: pB.d.widget({
              widget: new AB(GB.colour, GB.playerName, BB),
              side: 1
            })
          }), GB.anchor !== GB.head) {
          const BB = Math.min(GB.anchor, GB.head),
            IB = Math.max(GB.anchor, GB.head);
          TB.push({
            from: BB,
            to: IB,
            decoration: pB.d.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${GB.colour}33`
              }
            })
          })
        }
      }
      const JB = new iB.B,
        oB = [];
      for (const GB of ZB) oB.push({
        bias: 1,
        deco: GB.decoration,
        from: GB.pos,
        to: GB.pos
      });
      for (const GB of TB) oB.push({
        bias: 0,
        deco: GB.decoration,
        from: GB.from,
        to: GB.to
      });
      oB.sort(((BB, IB) => BB.from - IB.from || BB.deco.startSide - IB.deco.startSide || BB.bias - IB.bias));
      for (const GB of oB) JB.add(GB.from, GB.to, GB.deco);
      return JB.finish()
    }
    const bB = iB.L.define({
      create: () => ({
        cursors: new Map,
        vT: pB.d.none
      }),
      update(BB, IB) {
        let ZB = BB.cursors,
          TB = !1;
        if (IB.docChanged) {
          const BB = new Map;
          for (const [TB, JB] of ZB) BB.set(TB, {
            ...JB,
            anchor: IB.changes.mapPos(JB.anchor, 1),
            head: IB.changes.mapPos(JB.head, 1)
          });
          ZB = BB, TB = !0
        }
        for (const JB of IB.effects)
          if (JB.is(uB)) {
            if (!Number.isInteger(JB.value.anchor) || !Number.isInteger(JB.value.head)) {
              console.warn(`Code Editor: ignored player ${JB.value.playerId}'s cursor at ${JB.value.anchor}-${JB.value.head}`);
              continue
            }
            const oB = IB.state.doc.length,
              GB = {
                ...JB.value,
                anchor: Math.min(JB.value.anchor, oB),
                head: Math.min(JB.value.head, oB)
              };
            ZB === BB.cursors && (ZB = new Map(ZB)), ZB.set(GB.playerId, GB), TB = !0
          } else JB.is(fB) ? ZB.has(JB.value) && (ZB === BB.cursors && (ZB = new Map(ZB)), ZB.delete(JB.value), TB = !0) : JB.is(lB) && (TB = !0);
        return TB ? {
          cursors: ZB,
          vT: tB(ZB, Date.now())
        } : BB
      },
      provide: BB => pB.i.vT.from(BB, (BB => BB.vT))
    });
    const xB = iB.K.define(),
      EB = pB.d.mark({
        class: "CodeInsertFlash"
      }),
      DB = iB.L.define({
        create: () => pB.d.none,
        update(BB, IB) {
          let ZB = BB.map(IB.changes);
          for (const TB of IB.effects) TB.is(xB) && (ZB = TB.value ? pB.d.set(EB.range(TB.value.from, TB.value.to)) : pB.d.none);
          return ZB
        },
        provide: BB => pB.i.vT.from(BB)
      }),
      KB = iB.L.define({
        create: () => !1,
        update: (BB, IB) => BB || void 0 !== IB.annotation(iB.P.userEvent) && !IB.annotation(iB.P.remote)
      }),
      VB = [DB, KB];

    function SB(BB) {
      return BB.field(KB)
    }
    const BI = 3e4;

    function II(BB, IB) {
      const ZB = (0, GB.useRef)(null);
      (0, GB.useEffect)((() => {
        var BB;
        (null === (BB = ZB.current) || void 0 === BB ? void 0 : BB.path) !== IB && (ZB.current = null)
      }), [IB]);
      const TB = BB => {
        var TB;
        const JB = ZB.current;
        if (null === BB || void 0 === BB || !BB.dom.isConnected || !JB || JB.path !== IB) return;
        ZB.current = null;
        const {
          XF: GB
        } = JB;
        if (GB && null !== GB.text && performance.now() - GB.at < BI) {
          const IB = function(BB, IB) {
            if (BB === IB) return null;
            const ZB = Math.min(BB.length, IB.length);
            let TB = 0;
            for (; TB < ZB && BB[TB] === IB[TB];) TB++;
            let JB = 0;
            for (; JB < ZB - TB && BB[BB.length - 1 - JB] === IB[IB.length - 1 - JB];) JB++;
            return {
              from: TB,
              to: BB.length - JB,
              insert: IB.slice(TB, IB.length - JB)
            }
          }(BB.state.doc.toString(), GB.text);
          null !== IB && BB.dispatch({
            changes: IB,
            userEvent: GB.placed ? "input" : void 0
          })
        }
        const {
          doc: vB
        } = BB.state, kB = vB.line(Math.min(Math.max(JB.line, 1), vB.lines)), cB = kB.from + Math.min(null !== (TB = JB.column) && void 0 !== TB ? TB : 0, kB.length);
        BB.dispatch({
          selection: {
            anchor: cB
          },
          effects: oB.b.scrollIntoView(cB, {
            y: "center"
          }),
          userEvent: null !== GB && void 0 !== GB && GB.placed ? "select" : void 0
        }), !1 !== (null === GB || void 0 === GB ? void 0 : GB.focused) && BB.focus()
      };
      return (0, sB.d)("CodeEditorGoToLine", (IB => {
        ZB.current = IB, TB(BB.current)
      })), (0, sB.d)("CodeEditorKeepEdits", (() => {
        const TB = BB.current;
        if (null === TB || !TB.dom.isConnected || null === IB) return;
        const {
          doc: JB,
          selection: oB
        } = TB.state, {
          head: GB
        } = oB.main, vB = JB.lineAt(GB), kB = {
          text: (0, YB.j)(TB.state).length > 0 ? JB.toString() : null,
          at: performance.now(),
          focused: TB.hasFocus,
          placed: SB(TB.state)
        };
        ZB.current = {
          path: IB,
          line: vB.number,
          column: GB - vB.from,
          XF: kB
        }
      })), BB => {
        var JB;
        const oB = ZB.current;
        !1 === (null === oB || void 0 === oB || null === (JB = oB.XF) || void 0 === JB ? void 0 : JB.focused) && oB.path === IB || BB.focus(), TB(BB)
      }
    }
    var ZI = ZB(4542),
      TI = ZB(1248);

    function JI(BB, IB) {
      const {
        t: ZB
      } = (0, TI.G)();
      (0, sB.d)("CodeEditorInsertText", (TB => {
        let {
          text: JB,
          focus: oB
        } = TB;
        const GB = BB.current,
          vB = null !== GB && void 0 !== GB && GB.dom.isConnected ? function(BB, IB) {
            if (!SB(BB)) return null;
            const {
              from: ZB,
              to: TB
            } = BB.selection.main, JB = ZB + IB.length;
            return {
              changes: {
                from: ZB,
                to: TB,
                insert: IB
              },
              selection: {
                anchor: JB
              },
              effects: [pB.i.scrollIntoView(JB, {
                y: "center"
              }), xB.of({
                from: ZB,
                to: JB
              })],
              userEvent: "input"
            }
          }(GB.state, JB) : null;
        null !== GB && null !== vB ? (GB.dispatch(vB), oB && GB.focus(), setTimeout((() => {
          GB.dom.isConnected && GB.dispatch({
            effects: xB.of(null)
          })
        }), 1500)) : (0, ZI.e)(JB).then((() => {
          IB({
            message: ZB("codeEditorWorld:pickCopied", {
              coords: JB
            }),
            type: "success"
          })
        }), (BB => {
          console.error("Pick could not copy the coordinates", BB), IB({
            message: ZB("codeEditorWorld:pickPlaceCursor", {
              coords: JB
            }),
            type: "warning"
          })
        }))
      }))
    }
    var oI = ZB(41379);
    const GI = "#e45649",
      vI = "#383a42",
      kI = "#696c77",
      cI = "#986801",
      nI = "#e5e5e6",
      hI = "#fafafa",
      zI = "#eaeaeb",
      FI = "#526fff",
      NI = pB.i.theme({
        "&": {
          color: vI,
          backgroundColor: hI
        },
        ".cm-content": {
          caretColor: FI
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: FI
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: vI
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
          backgroundColor: hI,
          color: kI,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: nI
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: zI
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: zI,
          borderBottomColor: zI
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: nI,
            color: vI
          }
        }
      }, {
        dark: !1
      }),
      gI = mB.c.define([{
        tag: oI.l.keyword,
        color: "#a626a4"
      }, {
        tag: [oI.l.name, oI.l.deleted, oI.l.character, oI.l.propertyName, oI.l.macroName],
        color: GI
      }, {
        tag: [oI.l.function(oI.l.variableName), oI.l.labelName],
        color: "#4078f2"
      }, {
        tag: [oI.l.color, oI.l.constant(oI.l.name), oI.l.standard(oI.l.name)],
        color: cI
      }, {
        tag: [oI.l.definition(oI.l.name), oI.l.separator],
        color: vI
      }, {
        tag: [oI.l.typeName, oI.l.className, oI.l.number, oI.l.changed, oI.l.annotation, oI.l.modifier, oI.l.self, oI.l.namespace],
        color: "#c18401"
      }, {
        tag: [oI.l.operator, oI.l.operatorKeyword, oI.l.url, oI.l.escape, oI.l.regexp, oI.l.link, oI.l.special(oI.l.string)],
        color: "#0184bc"
      }, {
        tag: [oI.l.meta, oI.l.comment],
        color: kI
      }, {
        tag: oI.l.strong,
        fontWeight: "bold"
      }, {
        tag: oI.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: oI.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: oI.l.link,
        color: kI,
        textDecoration: "underline"
      }, {
        tag: oI.l.heading,
        fontWeight: "bold",
        color: GI
      }, {
        tag: [oI.l.atom, oI.l.bool, oI.l.special(oI.l.variableName)],
        color: cI
      }, {
        tag: [oI.l.processingInstruction, oI.l.string, oI.l.inserted],
        color: "#50a14f"
      }, {
        tag: oI.l.invalid,
        color: "#000000"
      }]),
      qI = [NI, (0, mB.gb)(gI)];
    var yI = ZB(36935),
      UI = ZB(41488);
    const WI = oB.g.define(),
      dI = oB.h.define({
        create: () => !1,
        update(BB, IB) {
          for (const ZB of IB.effects) ZB.is(WI) && (BB = ZB.value);
          return BB
        }
      }),
      CI = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function QI(BB, IB) {
      return [dI, oB.i.fromClass(class {
        constructor(BB) {
          this.view = BB, this.onDown = BB => {
            const IB = BB.target instanceof Element && null !== BB.target.closest(".cm-tooltip");
            0 !== BB.button || IB || this.view.state.field(dI) || this.view.dispatch({
              effects: WI.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(dI) && this.view.dispatch({
              effects: WI.of(!1)
            })
          }, BB.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), oB.u.compute(["selection", dI], (ZB => function(BB, IB, ZB) {
        const TB = BB.selection.main;
        return TB.empty || BB.field(dI) || BB.sliceDoc(TB.from, TB.to).trim().length < 2 ? null : {
          pos: TB.from,
          above: !0,
          create: BB => {
            const TB = document.createElement("div");
            TB.className = "CodeSelectionActions", TB.setAttribute("role", "toolbar"), TB.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: JB,
                label: oB
              }
              of CI) {
              if (!ZB && "explain" !== JB) continue;
              const GB = document.createElement("button");
              GB.type = "button", GB.textContent = oB, "change" !== JB && (GB.title = UI.b, GB.dataset.asksAi = "true"), GB.addEventListener("mousedown", (BB => {
                BB.preventDefault()
              })), GB.addEventListener("click", (() => {
                const ZB = BB.state.selection.main;
                if (ZB.empty) return;
                const TB = {
                  action: JB,
                  path: IB,
                  fromLine: BB.state.doc.lineAt(ZB.from).number,
                  toLine: BB.state.doc.lineAt(ZB.to > ZB.from && BB.state.doc.lineAt(ZB.to).from === ZB.to ? ZB.to - 1 : ZB.to).number,
                  text: BB.state.sliceDoc(ZB.from, ZB.to)
                };
                MB.l.Gq("WorldCodeAiSelection", TB), BB.dispatch({
                  selection: {
                    anchor: ZB.to
                  }
                })
              })), TB.appendChild(GB)
            }
            return {
              dom: TB
            }
          }
        }
      }(ZB, BB, IB)))]
    }
    var sI = ZB(1153);
    const wI = new Set(["(", "{", "[", "<"]),
      OI = new Set([")", "}", "]", ">"]),
      YI = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function iI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function ZB(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = [];
        for (const JB of BB) {
          let BB;
          BB = "punctuation" === JB.kind ? YI.text : "parameterName" === JB.kind ? YI.parameterName : IB, TB.push({
            str: JB.text,
            style: {
              color: BB,
              opacity: ZB ? .5 : void 0
            }
          })
        }
        return TB
      }
      const TB = [];
      if (TB.push(...ZB(BB.prefixDisplayParts, YI.text)), BB.parameters.length > 0) {
        TB.push("\n");
        for (let JB = 0; JB < BB.parameters.length; JB++) {
          const oB = BB.parameters[JB];
          TB.push("\t"), TB.push(...ZB(oB.displayParts, YI.parameter, null !== IB && JB !== IB)), TB.push("\n")
        }
      }
      return TB.push(...ZB(BB.suffixDisplayParts, YI.suffix)), BB.documentation && (TB.push("\n\n"), TB.push(...ZB(BB.documentation, YI.docs))), TB
    }
    var pI = function(BB) {
      return BB[BB.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", BB[BB.DuplicateIdentifier = 2300] = "DuplicateIdentifier", BB
    }(pI || {});
    const aI = new Set([pI.DuplicateIdentifier]),
      HI = new Set([pI.VariableDefinedElsewhere]),
      MI = new Set([]),
      jI = "/index.js";

    function PI(BB) {
      return "/" + BB
    }

    function RI(BB, IB, ZB) {
      BB.getSourceFile(IB) && BB.deleteFile(IB), BB.createFile(IB, ZB)
    }

    function rI(BB) {
      return !!BB && ((0, CB.s)(BB) || (0, CB.o)(BB))
    }

    function mI(BB, IB, ZB) {
      return () => {
        let TB = [...IB.languageService.getSemanticDiagnostics(ZB), ...IB.languageService.getSyntacticDiagnostics(ZB)];
        return TB = TB.filter((BB => !(0, wB.L)(BB.start) && !(0, wB.L)(BB.length) && !aI.has(BB.code))), BB || (TB = TB.filter((BB => !HI.has(BB.code)))), TB.map((BB => ({
          from: BB.start,
          to: BB.start + BB.length,
          message: "string" === typeof BB.messageText ? BB.messageText : BB.messageText.messageText,
          severity: MI.has(BB.code) ? "warning" : "error"
        })))
      }
    }

    function XI(BB, IB) {
      return ZB => {
        var TB, JB;
        const oB = BB.languageService.getCompletionsAtPosition(IB, ZB.pos, {});
        if (!oB) return {
          from: ZB.pos,
          options: []
        };
        let GB = null !== (TB = null === (JB = oB.optionalReplacementSpan) || void 0 === JB ? void 0 : JB.start) && void 0 !== TB ? TB : ZB.pos;
        if (!oB.optionalReplacementSpan) {
          const BB = ZB.state.doc.sliceString(0, ZB.pos);
          for (; GB > 0 && /[\w$]/.test(BB[GB - 1]);) GB--
        }
        return oB.entries = oB.entries.filter((BB => BB.kind !== gB().ScriptElementKind.warning)), {
          from: GB,
          options: oB.entries.map((TB => {
            var JB, oB, vB, kB;
            const cB = BB.languageService.getCompletionEntryDetails(IB, ZB.pos, TB.name, {}, TB.source, {}, TB.data),
              nB = null !== (JB = null === (oB = TB.replacementSpan) || void 0 === oB ? void 0 : oB.start) && void 0 !== JB ? JB : GB,
              hB = TB.replacementSpan ? TB.replacementSpan.start + TB.replacementSpan.length : ZB.pos,
              zB = null !== (vB = TB.insertText) && void 0 !== vB ? vB : TB.name;
            return {
              label: TB.name,
              detail: null === cB || void 0 === cB ? void 0 : cB.displayParts.map((BB => BB.text)).join(""),
              info: null === cB || void 0 === cB || null === (kB = cB.documentation) || void 0 === kB ? void 0 : kB.map((BB => BB.text)).join(""),
              apply: BB => {
                BB.dispatch({
                  changes: {
                    from: nB,
                    to: hB,
                    insert: zB
                  },
                  selection: {
                    anchor: nB + zB.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function LI(BB) {
      return IB => {
        const ZB = document.createElement("div");
        ZB.className = "CodeEditorTooltip";
        let TB = !1;
        return queueMicrotask((() => {
          TB || (vB.render((0, sI.jsx)(zB.e, {
            text: BB
          }), ZB), IB.requestMeasure())
        })), {
          dom: ZB,
          destroy() {
            TB = !0, queueMicrotask((() => {
              vB.unmountComponentAtNode(ZB)
            }))
          }
        }
      }
    }

    function eI(BB, IB, ZB) {
      return TB => {
        var JB;
        if (!IB) return [];
        const oB = null === (JB = TB.selection.vq[0]) || void 0 === JB ? void 0 : JB.head;
        if (void 0 === oB) return [];
        const GB = BB.languageService.getSignatureHelpItems(ZB, oB, {});
        if (!GB || !GB.items.length) return [];
        const vB = GB.applicableSpan.start - GB.items[0].prefixDisplayParts.map((BB => BB.text)).join("").length,
          kB = GB.applicableSpan.start,
          cB = TB.doc.lineAt(oB),
          nB = cB.from,
          hB = Math.min(cB.to, oB);
        let zB, FB;
        return vB < nB ? (zB = nB, FB = hB) : (zB = vB, FB = kB), [{
          pos: zB,
          end: FB,
          above: !1,
          create: LI(iI(GB.items[0], GB.argumentIndex))
        }]
      }
    }

    function uI(BB, IB) {
      return (ZB, TB, JB) => {
        const oB = BB.languageService.getQuickInfoAtPosition(IB, TB);
        if (!oB) return [];
        const GB = oB.textSpan.start,
          vB = oB.textSpan.start + oB.textSpan.length;
        if (TB < GB || TB >= vB) return [];
        if (oB.kind === gB().ScriptElementKind.memberFunctionElement || oB.kind === gB().ScriptElementKind.variableElement && "declare" === oB.kindModifiers) {
          const BB = oB.displayParts.findIndex((BB => "space" === BB.kind)); - 1 !== BB && (oB.displayParts = oB.displayParts.slice(BB));
          const IB = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            ZB = oB.displayParts.findIndex((BB => "punctuation" === BB.kind && "(" === BB.text)); - 1 !== ZB && (IB.prefixDisplayParts = oB.displayParts.slice(0, ZB + 1), oB.displayParts = oB.displayParts.slice(ZB + 1));
          const TB = oB.displayParts.findLastIndex((BB => "punctuation" === BB.kind && ")" === BB.text)); - 1 !== TB && (IB.suffixDisplayParts = oB.displayParts.slice(TB), oB.displayParts = oB.displayParts.slice(0, TB));
          let JB = 0,
            kB = [];
          for (const GB of oB.displayParts)
            if (wI.has(GB.text) ? JB++ : OI.has(GB.text) && JB--, "lineBreak" !== GB.kind) {
              if ("space" === GB.kind) {
                if (0 === kB.length) continue;
                kB.push({
                  kind: "space",
                  text: " "
                })
              } else kB.push(GB);
              0 === JB && "," === GB.text && (IB.parameters.push({
                displayParts: kB
              }), kB = [])
            } return kB.length > 0 && IB.parameters.push({
            displayParts: kB
          }), IB.documentation = oB.documentation, [{
            pos: GB,
            end: vB,
            above: !0,
            create: LI(iI(IB))
          }]
        }
        const kB = [];
        for (const BB of oB.displayParts) kB.push({
          str: BB.text,
          style: {
            color: YI.text
          }
        });
        if (oB.documentation) {
          kB.push("\n\n");
          for (const BB of oB.documentation) kB.push({
            str: BB.text,
            style: {
              color: YI.docs
            }
          })
        }
        return [{
          pos: GB,
          end: vB,
          above: !0,
          create: LI(kB)
        }]
      }
    }
    const fI = {
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
      semicolons: gB().SemicolonPreference.Insert
    };
    const lI = oB.g.define(),
      AI = {
        lineNumbers: !0,
        tabSize: 4
      };

    function tI(BB) {
      let {
        isLobbyCode: IB,
        code: ZB,
        onChange: vB,
        canEditCode: zB,
        setTemporaryMessage: NB,
        close: wB,
        showTooltips: AB,
        lightMode: tB,
        collabState: xB,
        onRemoteDocChange: EB,
        files: DB,
        activePath: KB,
        pluginName: SB,
        pluginFile: BI,
        pluginSource: ZI,
        setActiveDocReplacer: TI,
        showAiHints: oI,
        canAiChangeCode: GI = zB
      } = BB;
      const [vI, kI] = (0, GB.useState)(null), cI = null === xB || void 0 === xB ? void 0 : xB.version, nI = null === xB || void 0 === xB ? void 0 : xB.clientID, hI = (0, GB.useRef)({
        isLobbyCode: IB,
        files: DB,
        code: ZB,
        activePath: KB
      }), zI = (0, GB.useRef)(EB);
      zI.current = EB;
      const FI = (0, GB.useRef)(null),
        NI = (0, GB.useRef)(xB);
      NI.current = xB;
      const gI = (0, GB.useRef)(null),
        UI = (0, GB.useRef)(null),
        WI = (0, GB.useRef)(null),
        dI = (0, GB.useRef)(wB);
      dI.current = wB;
      const CI = (0, GB.useRef)(ZB);
      CI.current = ZB;
      const wI = (0, GB.useRef)(ZI);
      wI.current = ZI;
      const OI = function(BB, IB, ZB, TB) {
        return ZB ? `/plugin-preview/${ZB}/${null!==TB&&void 0!==TB?TB:"index.ts"}` : BB ? PI(null !== IB && void 0 !== IB ? IB : dB.i) : jI
      }(IB, KB, SB, BI);
      (0, GB.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: BB,
            files: IB,
            code: ZB,
            activePath: TB
          } = hI.current, JB = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: gB().ModuleKind.ESNext,
            moduleResolution: gB().ModuleResolutionKind.Bundler,
            target: gB().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(WB.e).map((BB => [BB.specifier, [BB.typesVfsPath]])))
            }
          }, oB = new Map, GB = [];
          if (BB) {
            const BB = null !== IB && void 0 !== IB ? IB : {
              [dB.i]: ZB || "\n"
            };
            for (const [IB, ZB] of Object.entries(BB)) {
              const BB = PI(IB);
              oB.set(BB, ZB || "\n"), GB.push(BB)
            }
            const JB = PI(null !== TB && void 0 !== TB ? TB : dB.i);
            oB.has(JB) ? oB.set(JB, ZB || "\n") : (oB.set(JB, ZB || "\n"), GB.push(JB)), oB.set("/node_modules/@bloxd/index.d.ts", nB.default), GB.push("/node_modules/@bloxd/index.d.ts");
            for (const IB of Object.values(WB.e)) {
              oB.set(IB.typesVfsPath, IB.types), GB.push(IB.typesVfsPath);
              for (const [BB, ZB] of Object.entries(IB.files)) {
                const TB = `/plugin-preview/${IB.name}/${BB}`;
                oB.set(TB, ZB || "\n"), GB.push(TB)
              }
            }
          } else oB.set(jI, ZB || "\n"), GB.push(jI);
          oB.set("/globals.d.ts", BB ? cB.d : kB.b), oB.set("/lib.d.ts", hB.b), GB.push("/globals.d.ts", "/lib.d.ts");
          const vB = FB.d(oB),
            zB = FB.h(vB, GB, gB(), JB);
          kI({
            kq: zB,
            fsMap: oB
          })
        }()
      }), []), (0, GB.useEffect)((() => {
        var BB, TB;
        if (!vI || !IB) return;
        const {
          kq: JB,
          fsMap: oB
        } = vI;
        if (function(BB, IB, ZB) {
            const TB = new Set;
            for (const [JB, oB] of Object.entries(ZB)) {
              const ZB = PI(JB);
              TB.add(ZB);
              const GB = oB || "\n";
              IB.get(ZB) !== GB && (IB.set(ZB, GB), RI(BB, ZB, GB))
            }
            for (const JB of [...IB.keys()]) "/globals.d.ts" === JB || "/lib.d.ts" === JB || JB.startsWith("/node_modules/") || JB.startsWith("/plugin-preview/") || TB.has(JB) || (IB.delete(JB), BB.getSourceFile(JB) && BB.deleteFile(JB))
          }(JB, oB, null !== DB && void 0 !== DB ? DB : {
            [dB.i]: ZB || "\n"
          }), SB) return void RI(JB, OI, ZI || "\n");
        const GB = null !== (BB = null === (TB = FI.current) || void 0 === TB ? void 0 : TB.state.doc.toString()) && void 0 !== BB ? BB : ZB;
        RI(JB, OI, GB || "\n")
      }), [DB, KB, vI, SB, ZI, OI, ZB, IB]), (0, GB.useEffect)((() => {
        if (!vI) return;
        const {
          kq: BB
        } = vI;
        RI(BB, OI, (SB ? ZI : ZB) || "\n")
      }), [ZB, SB, ZI, OI, vI]), (0, GB.useEffect)((() => () => {
        UI.current && (UI.current(), UI.current = null)
      }), []), (0, GB.useEffect)((() => (TI(((BB, IB) => {
        if (SB) return !1;
        const ZB = FI.current,
          TB = NI.current,
          JB = TB ? (0, CB.z)(TB.docKey) : null;
        if (!ZB || !TB || gI.current !== TB.clientID || BB !== JB) return !1;
        const oB = ZB.state.doc.toString();
        return oB !== IB && ZB.dispatch({
          changes: {
            from: 0,
            to: oB.length,
            insert: IB
          }
        }), !0
      })), () => {
        FI.current = null, gI.current = null, TI(null)
      })), [TI, SB]);
      const YI = IB ? SB ? null : null !== KB && void 0 !== KB ? KB : dB.i : yI.b,
        iI = II(FI, YI);
      JI(FI, NB), (0, sB.d)("FormatCode", (() => {
        if (!vI || !FI.current || SB) return;
        const {
          kq: BB,
          fsMap: ZB
        } = vI, TB = BB.getSourceFile(OI).getFullText();
        let JB = 0;
        if (IB && DB)
          for (const [IB, vB] of Object.entries(DB)) IB !== (null !== KB && void 0 !== KB ? KB : dB.i) && (JB += vB.length);
        const oB = function(BB, IB, ZB, TB, JB) {
          const oB = BB.languageService.getFormattingEditsForDocument(TB, fI);
          if (!oB.length) return OB.b.error("Code is already formatted.");
          oB.sort(((BB, IB) => IB.span.start - BB.span.start));
          let GB = BB.getSourceFile(TB).getFullText();
          for (const vB of oB) GB = GB.slice(0, vB.span.start) + vB.Ck + GB.slice(vB.span.start + vB.span.length);
          return GB !== (ZB ? (0, QB.l)(GB, JB) : (0, QB.k)(GB)) ? OB.b.error("Formatting the code will go beyond the character limit.") : OB.b.value(GB)
        }(BB, 0, IB, OI, JB);
        if (oB.isError()) return void NB({
          message: oB.asError().message,
          type: "warning"
        });
        const GB = oB.getValue();
        GB && (FI.current.dispatch({
          changes: {
            from: 0,
            to: TB.length,
            insert: GB
          },
          selection: {
            anchor: GB.length
          }
        }), RI(BB, OI, GB), vB(GB))
      }));
      const pI = (0, GB.useMemo)((() => {
        if (!vI) return [];
        const {
          kq: BB,
          fsMap: ZB
        } = vI;
        ! function(BB, IB, ZB, TB) {
          if (BB.getSourceFile(ZB)) return;
          const JB = TB || "\n";
          IB.set(ZB, JB), BB.createFile(ZB, JB)
        }(BB, ZB, OI, (SB ? wI.current : CI.current) || "\n");
        const GB = IB && rI(SB ? null !== BI && void 0 !== BI ? BI : "index.ts" : KB),
          vB = [(0, JB.d)({
            jsx: !1,
            typescript: GB
          }), oB.c.highest(oB.b.domEventHandlers({
            keydown: BB => "Escape" === BB.key ? (dI.current(), BB.stopPropagation(), !0) : (BB.stopPropagation(), !1)
          })), (0, TB.b)({
            override: [XI(BB, OI)]
          }), pB.m.fromClass(class {
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
                (0, mB.ib)(this.view.state, BB) || (0, mB.N)(this.view, BB, XB) || this.scheduleParse()
              }), LB))
            }
          }), ...VB, oB.b.lineWrapping, oB.h.define({
            create: eI(BB, AB, OI),
            update(IB, ZB) {
              const TB = ZB.effects.some((BB => BB.is(lI)));
              return ZB.docChanged || ZB.selection || TB ? (RI(BB, OI, ZB.state.doc.toString() || " "), eI(BB, AB, OI)(ZB.state)) : IB
            },
            provide: BB => oB.u.computeN([BB], (IB => IB.field(BB)))
          }), (0, oB.q)(uI(BB, OI)), (0, yB.e)(mI(IB, BB, OI)), oB.i.fromClass(class {
            constructor(BB) {
              this.view = BB, this.searchPanel = null
            }
            update(BB) {
              const IB = BB.view.dom.querySelector(".cm-search");
              if (IB !== this.searchPanel) {
                if (this.searchPanel = IB, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (BB => {
                  "Escape" === BB.key && (0, qB.b)(this.view), BB.stopPropagation()
                }))
              }
            }
          })];
        oI && !SB && vB.push(QI(IB ? null !== KB && void 0 !== KB ? KB : dB.i : yI.b, GI));
        const kB = NI.current;
        if (kB && !SB) {
          vB.push(... function(BB, IB, ZB, TB, JB) {
            let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const GB = (0, CB.z)(ZB),
              vB = pB.m.fromClass(class {
                constructor(BB) {
                  this.view = BB, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = MB.l.subscribe("codeCollab", (BB => {
                    BB.docKey === GB && BB.type === CB.g.Updates && (BB.updates ? this.applyUpdates(BB.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(BB) {
                  const IB = JSON.parse(BB).map((BB => ({
                    clientID: BB.clientID,
                    changes: iB.ChangeSet.fromJSON(BB.changes)
                  })));
                  IB.length > 0 && (this.view.dispatch((0, YB.i)(this.view.state, IB)), JB && JB(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(BB) {
                  oB && (BB.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const BB = (0, YB.j)(this.view.state);
                  if (this.pushing || !BB.length) return;
                  const IB = Date.now() - this.lastPushTime;
                  if (IB < rB) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), rB - IB)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), PB);
                  const ZB = (0, YB.h)(this.view.state),
                    JB = BB.map((BB => ({
                      clientID: BB.clientID,
                      changes: BB.changes.toJSON()
                    }))),
                    oB = JSON.stringify(JB);
                  oB.length <= CB.i ? aB.gameBridge.send("sendCodeCollab", {
                    bJ: CB.d.Push,
                    xJ: GB,
                    EJ: ZB,
                    VJ: oB
                  }) : (0, jB.postJsonWithMetricsCookiesAndJsonResponse)(`${TB.gsUrl}/code/collab-push`, HB.s["collab-push"].toBuffer({
                    gameNameWithVariation: TB.gameNameWithVariation,
                    lobbyName: TB.lobbyName,
                    docKey: GB,
                    version: ZB,
                    updates: oB
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
                  const BB = (0, YB.h)(this.view.state);
                  (0, jB.postJsonWithMetricsCookiesAndJsonResponse)(`${TB.gsUrl}/code/collab-pull`, HB.s["collab-pull"].toBuffer({
                    gameNameWithVariation: TB.gameNameWithVariation,
                    lobbyName: TB.lobbyName,
                    docKey: GB,
                    fromVersion: BB
                  }), {
                    retries: 1
                  }).then((BB => {
                    this.destroyed || (BB.fullDoc ? MB.l.Gq("codeCollabRejoin", {
                      docKey: GB,
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
                  if (BB - this.lastCursorSent < RB) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), RB)));
                  this.lastCursorSent = BB;
                  const IB = this.view.state.selection.main;
                  aB.gameBridge.send("sendCodeCollab", {
                    bJ: CB.d.Cursor,
                    xJ: GB,
                    Zo: IB.anchor,
                    Jo: IB.head
                  })
                }
                destroy() {
                  this.destroyed = !0, MB.l.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, YB.d)({
              startVersion: BB,
              clientID: IB
            }), vB]
          }(cI, nI, kB.docKey, kB.httpConfig, (BB => {
            var IB;
            null === (IB = zI.current) || void 0 === IB || IB.call(zI, BB)
          }), zB));
          const BB = function(BB, IB) {
            const ZB = (0, CB.z)(BB);
            return {
              extensions: [bB],
              connect(BB) {
                if (IB) {
                  const ZB = IB.map((BB => uB.of({
                    playerId: BB.playerId,
                    playerName: BB.playerName,
                    colour: BB.colour,
                    anchor: BB.anchor,
                    head: BB.head,
                    lastMoved: Date.now()
                  })));
                  ZB.length > 0 && BB.dispatch({
                    effects: ZB
                  })
                }
                const TB = MB.l.subscribe("codeCollab", (IB => {
                    if (IB.docKey === ZB)
                      if (IB.type === CB.g.RemoteCursor) BB.dispatch({
                        effects: uB.of({
                          playerId: IB.playerId,
                          playerName: IB.playerName,
                          colour: IB.colour,
                          anchor: IB.anchor,
                          head: IB.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (IB.type === CB.g.Presence) {
                      const ZB = JSON.parse(IB.peers),
                        TB = new Set(ZB.map((BB => BB.playerId))),
                        JB = BB.state.field(bB),
                        oB = [];
                      for (const [BB] of JB.cursors) TB.has(BB) || oB.push(fB.of(BB));
                      oB.length > 0 && BB.dispatch({
                        effects: oB
                      })
                    }
                  })),
                  JB = setInterval((() => {
                    BB.dom.isConnected ? BB.dispatch({
                      effects: lB.of(Date.now())
                    }) : clearInterval(JB)
                  }), eB);
                return () => {
                  MB.l.unsubscribe(TB), clearInterval(JB)
                }
              }
            }
          }(kB.docKey, kB.existingCursors);
          vB.push(...BB.extensions), WI.current = BB.connect
        } else WI.current = null;
        return vB
      }), [IB, vI, AB, cI, nI, OI, KB, SB, BI, zB, oI, GI]);
      if (!vI || !xB && !SB) return (0, sI.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, sI.jsx)(UB.d, {})
      });
      const aI = SB ? `plugin-${SB}-${null!==BI&&void 0!==BI?BI:"index.ts"}` : xB ? `collab-${xB.clientID}` : `local-${IB}`;
      return (0, sI.jsx)(oB.m, {
        value: SB ? null !== ZI && void 0 !== ZI ? ZI : "" : ZB,
        onChange: vB,
        extensions: pI,
        className: "CodeEditorContent",
        theme: tB ? qI : "dark",
        editable: zB && !SB,
        basicSetup: AI,
        onCreateEditor: BB => {
          var IB;
          FI.current = BB, gI.current = null !== (IB = null === xB || void 0 === xB ? void 0 : xB.clientID) && void 0 !== IB ? IB : null, iI(BB), UI.current && UI.current(), WI.current && (UI.current = WI.current(BB))
        }
      }, aI)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);