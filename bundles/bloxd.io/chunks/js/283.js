export const id = 283;
export const ids = [283];
export const modules = {
  40685: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => AR
    });
    var tU = gU(40691),
      pU = gU(40748),
      EU = gU(40751),
      PU = gU(56),
      TU = gU(74),
      qU = gU(40771),
      KU = gU(40774),
      cU = gU(4417),
      GU = gU(40779),
      jU = gU(1777),
      uU = gU(40788),
      CU = gU(40803),
      hU = gU.n(CU),
      QU = gU(40754),
      eU = gU(40763),
      WU = gU(1326),
      fU = gU(36397),
      xU = gU(1238),
      mU = gU(36413),
      IU = gU(36299),
      JU = gU(1410),
      wU = gU(581),
      nU = gU(1240),
      bU = gU(40853),
      oU = gU(40700),
      ZU = gU(40707),
      aU = gU(1800),
      YU = gU(3420),
      BU = gU(24),
      VU = gU(1120);
    const rU = 1e4,
      XU = 250,
      vU = 250;
    var dU = gU(40728);
    const HU = 50,
      SU = 100;
    const sU = 2e3,
      yU = oU.A.define(),
      kU = oU.A.define(),
      FU = oU.A.define();
    class iU extends ZU.o {
      constructor(UU, RU, gU) {
        super(), this.colour = UU, this.playerName = RU, this.showName = gU
      }
      toDOM() {
        const UU = document.createElement("span");
        UU.className = "cm-remote-cursor-wrapper", UU.style.borderLeftColor = this.colour;
        const RU = document.createElement("span");
        if (RU.className = "cm-remote-cursor", RU.style.borderLeftColor = this.colour, UU.appendChild(RU), this.showName) {
          const RU = document.createElement("span");
          RU.className = "cm-remote-cursor-name", RU.style.backgroundColor = this.colour, RU.textContent = this.playerName, UU.appendChild(RU)
        }
        return UU
      }
      eq(UU) {
        return this.colour === UU.colour && this.playerName === UU.playerName && this.showName === UU.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function AU(UU, RU) {
      const gU = [],
        tU = [];
      for (const [, PU] of UU) {
        const UU = RU - PU.lastMoved < sU;
        if (gU.push({
            pos: PU.head,
            decoration: ZU.b.widget({
              widget: new iU(PU.colour, PU.playerName, UU),
              side: 1
            })
          }), PU.anchor !== PU.head) {
          const UU = Math.min(PU.anchor, PU.head),
            RU = Math.max(PU.anchor, PU.head);
          tU.push({
            from: UU,
            to: RU,
            decoration: ZU.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${PU.colour}33`
              }
            })
          })
        }
      }
      const pU = new oU.t,
        EU = [];
      for (const PU of gU) EU.push({
        bias: 1,
        deco: PU.decoration,
        from: PU.pos,
        to: PU.pos
      });
      for (const PU of tU) EU.push({
        bias: 0,
        deco: PU.decoration,
        from: PU.from,
        to: PU.to
      });
      EU.sort(((UU, RU) => UU.from - RU.from || UU.deco.startSide - RU.deco.startSide || UU.bias - RU.bias));
      for (const PU of EU) pU.add(PU.from, PU.to, PU.deco);
      return pU.finish()
    }
    const zU = oU.C.define({
      create: () => ({
        cursors: new Map,
        Yt: ZU.b.none
      }),
      update(UU, RU) {
        let gU = UU.cursors,
          tU = !1;
        if (RU.docChanged) {
          const UU = new Map;
          for (const [tU, pU] of gU) UU.set(tU, {
            ...pU,
            anchor: RU.changes.mapPos(pU.anchor, 1),
            head: RU.changes.mapPos(pU.head, 1)
          });
          gU = UU, tU = !0
        }
        for (const pU of RU.effects)
          if (pU.is(yU)) {
            if (!Number.isInteger(pU.value.anchor) || !Number.isInteger(pU.value.head)) {
              console.warn(`Code Editor: ignored player ${pU.value.playerId}'s cursor at ${pU.value.anchor}-${pU.value.head}`);
              continue
            }
            const EU = RU.state.doc.length,
              PU = {
                ...pU.value,
                anchor: Math.min(pU.value.anchor, EU),
                head: Math.min(pU.value.head, EU)
              };
            gU === UU.cursors && (gU = new Map(gU)), gU.set(PU.playerId, PU), tU = !0
          } else pU.is(kU) ? gU.has(pU.value) && (gU === UU.cursors && (gU = new Map(gU)), gU.delete(pU.value), tU = !0) : pU.is(FU) && (tU = !0);
        return tU ? {
          cursors: gU,
          Yt: AU(gU, Date.now())
        } : UU
      },
      provide: UU => ZU.h.Yt.from(UU, (UU => UU.Yt))
    });
    const MU = oU.A.define(),
      DU = ZU.b.mark({
        class: "CodeInsertFlash"
      }),
      LU = oU.C.define({
        create: () => ZU.b.none,
        update(UU, RU) {
          let gU = UU.map(RU.changes);
          for (const tU of RU.effects) tU.is(MU) && (gU = tU.value ? ZU.b.set(DU.range(tU.value.from, tU.value.to)) : ZU.b.none);
          return gU
        },
        provide: UU => ZU.h.Yt.from(UU)
      }),
      NU = oU.C.define({
        create: () => !1,
        update: (UU, RU) => UU || void 0 !== RU.annotation(oU.G.userEvent) && !RU.annotation(oU.G.remote)
      }),
      lU = [LU, NU];

    function OU(UU) {
      return UU.field(NU)
    }
    const UR = 3e4;

    function RR(UU, RU) {
      const gU = (0, PU.useRef)(null);
      (0, PU.useEffect)((() => {
        var UU;
        (null === (UU = gU.current) || void 0 === UU ? void 0 : UU.path) !== RU && (gU.current = null)
      }), [RU]);
      const tU = UU => {
        var tU;
        const pU = gU.current;
        if (null === UU || void 0 === UU || !UU.dom.isConnected || !pU || pU.path !== RU) return;
        gU.current = null;
        const {
          xu: PU
        } = pU;
        if (PU && null !== PU.text && performance.now() - PU.at < UR) {
          const RU = function(UU, RU) {
            if (UU === RU) return null;
            const gU = Math.min(UU.length, RU.length);
            let tU = 0;
            for (; tU < gU && UU[tU] === RU[tU];) tU++;
            let pU = 0;
            for (; pU < gU - tU && UU[UU.length - 1 - pU] === RU[RU.length - 1 - pU];) pU++;
            return {
              from: tU,
              to: UU.length - pU,
              insert: RU.slice(tU, RU.length - pU)
            }
          }(UU.state.doc.toString(), PU.text);
          null !== RU && UU.dispatch({
            changes: RU,
            userEvent: PU.placed ? "input" : void 0
          })
        }
        const {
          doc: TU
        } = UU.state, qU = TU.line(Math.min(Math.max(pU.line, 1), TU.lines)), KU = qU.from + Math.min(null !== (tU = pU.column) && void 0 !== tU ? tU : 0, qU.length);
        UU.dispatch({
          selection: {
            anchor: KU
          },
          effects: EU.d.scrollIntoView(KU, {
            y: "center"
          }),
          userEvent: null !== PU && void 0 !== PU && PU.placed ? "select" : void 0
        }), !1 !== (null === PU || void 0 === PU ? void 0 : PU.focused) && UU.focus()
      };
      return (0, JU.e)("CodeEditorGoToLine", (RU => {
        gU.current = RU, tU(UU.current)
      })), (0, JU.e)("CodeEditorKeepEdits", (() => {
        const tU = UU.current;
        if (null === tU || !tU.dom.isConnected || null === RU) return;
        const {
          doc: pU,
          selection: EU
        } = tU.state, {
          head: PU
        } = EU.main, TU = pU.lineAt(PU), qU = {
          text: (0, bU.l)(tU.state).length > 0 ? pU.toString() : null,
          at: performance.now(),
          focused: tU.hasFocus,
          placed: OU(tU.state)
        };
        gU.current = {
          path: RU,
          line: TU.number,
          column: PU - TU.from,
          xu: qU
        }
      })), UU => {
        var pU;
        const EU = gU.current;
        !1 === (null === EU || void 0 === EU || null === (pU = EU.xu) || void 0 === pU ? void 0 : pU.focused) && EU.path === RU || UU.focus(), tU(UU)
      }
    }
    var gR = gU(4037),
      tR = gU(1181);

    function pR(UU, RU) {
      const {
        t: gU
      } = (0, tR.B)();
      (0, JU.e)("CodeEditorInsertText", (tU => {
        let {
          text: pU,
          focus: EU
        } = tU;
        const PU = UU.current,
          TU = null !== PU && void 0 !== PU && PU.dom.isConnected ? function(UU, RU) {
            if (!OU(UU)) return null;
            const {
              from: gU,
              to: tU
            } = UU.selection.main, pU = gU + RU.length;
            return {
              changes: {
                from: gU,
                to: tU,
                insert: RU
              },
              selection: {
                anchor: pU
              },
              effects: [ZU.h.scrollIntoView(pU, {
                y: "center"
              }), MU.of({
                from: gU,
                to: pU
              })],
              userEvent: "input"
            }
          }(PU.state, pU) : null;
        null !== PU && null !== TU ? (PU.dispatch(TU), EU && PU.focus(), setTimeout((() => {
          PU.dom.isConnected && PU.dispatch({
            effects: MU.of(null)
          })
        }), 1500)) : (0, gR.e)(pU).then((() => {
          RU({
            message: gU("codeEditorWorld:pickCopied", {
              coords: pU
            }),
            type: "success"
          })
        }), (UU => {
          console.error("Pick could not copy the coordinates", UU), RU({
            message: gU("codeEditorWorld:pickPlaceCursor", {
              coords: pU
            }),
            type: "warning"
          })
        }))
      }))
    }
    var ER = gU(40739);
    const PR = "#e45649",
      TR = "#383a42",
      qR = "#696c77",
      KR = "#986801",
      cR = "#e5e5e6",
      GR = "#fafafa",
      jR = "#eaeaeb",
      uR = "#526fff",
      CR = ZU.h.theme({
        "&": {
          color: TR,
          backgroundColor: GR
        },
        ".cm-content": {
          caretColor: uR
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: uR
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: TR
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
          backgroundColor: GR,
          color: qR,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: cR
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: jR
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: jR,
          borderBottomColor: jR
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: cR,
            color: TR
          }
        }
      }, {
        dark: !1
      }),
      hR = dU.d.define([{
        tag: ER.j.keyword,
        color: "#a626a4"
      }, {
        tag: [ER.j.name, ER.j.deleted, ER.j.character, ER.j.propertyName, ER.j.macroName],
        color: PR
      }, {
        tag: [ER.j.function(ER.j.variableName), ER.j.labelName],
        color: "#4078f2"
      }, {
        tag: [ER.j.color, ER.j.constant(ER.j.name), ER.j.standard(ER.j.name)],
        color: KR
      }, {
        tag: [ER.j.definition(ER.j.name), ER.j.separator],
        color: TR
      }, {
        tag: [ER.j.typeName, ER.j.className, ER.j.number, ER.j.changed, ER.j.annotation, ER.j.modifier, ER.j.self, ER.j.namespace],
        color: "#c18401"
      }, {
        tag: [ER.j.operator, ER.j.operatorKeyword, ER.j.url, ER.j.escape, ER.j.regexp, ER.j.link, ER.j.special(ER.j.string)],
        color: "#0184bc"
      }, {
        tag: [ER.j.meta, ER.j.comment],
        color: qR
      }, {
        tag: ER.j.strong,
        fontWeight: "bold"
      }, {
        tag: ER.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: ER.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: ER.j.link,
        color: qR,
        textDecoration: "underline"
      }, {
        tag: ER.j.heading,
        fontWeight: "bold",
        color: PR
      }, {
        tag: [ER.j.atom, ER.j.bool, ER.j.special(ER.j.variableName)],
        color: KR
      }, {
        tag: [ER.j.processingInstruction, ER.j.string, ER.j.inserted],
        color: "#50a14f"
      }, {
        tag: ER.j.invalid,
        color: "#000000"
      }]),
      QR = [CR, (0, dU.nb)(hR)];
    var eR = gU(36446),
      WR = gU(40862);
    const fR = EU.j.define(),
      xR = EU.m.define({
        create: () => !1,
        update(UU, RU) {
          for (const gU of RU.effects) gU.is(fR) && (UU = gU.value);
          return UU
        }
      }),
      mR = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function IR(UU, RU) {
      return [xR, EU.q.fromClass(class {
        constructor(UU) {
          this.view = UU, this.onDown = UU => {
            const RU = UU.target instanceof Element && null !== UU.target.closest(".cm-tooltip");
            0 !== UU.button || RU || this.view.state.field(xR) || this.view.dispatch({
              effects: fR.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(xR) && this.view.dispatch({
              effects: fR.of(!1)
            })
          }, UU.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), EU.w.compute(["selection", xR], (gU => function(UU, RU, gU) {
        const tU = UU.selection.main;
        return tU.empty || UU.field(xR) || UU.sliceDoc(tU.from, tU.to).trim().length < 2 ? null : {
          pos: tU.from,
          above: !0,
          create: UU => {
            const tU = document.createElement("div");
            tU.className = "CodeSelectionActions", tU.setAttribute("role", "toolbar"), tU.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: pU,
                label: EU
              }
              of mR) {
              if (!gU && "explain" !== pU) continue;
              const PU = document.createElement("button");
              PU.type = "button", PU.textContent = EU, "change" !== pU && (PU.title = WR.c, PU.dataset.asksAi = "true"), PU.addEventListener("mousedown", (UU => {
                UU.preventDefault()
              })), PU.addEventListener("click", (() => {
                const gU = UU.state.selection.main;
                if (gU.empty) return;
                const tU = {
                  action: pU,
                  path: RU,
                  fromLine: UU.state.doc.lineAt(gU.from).number,
                  toLine: UU.state.doc.lineAt(gU.to > gU.from && UU.state.doc.lineAt(gU.to).from === gU.to ? gU.to - 1 : gU.to).number,
                  text: UU.state.sliceDoc(gU.from, gU.to)
                };
                BU.p.yh("WorldCodeAiSelection", tU), UU.dispatch({
                  selection: {
                    anchor: gU.to
                  }
                })
              })), tU.appendChild(PU)
            }
            return {
              dom: tU
            }
          }
        }
      }(gU, UU, RU)))]
    }
    var JR = gU(1090);
    const wR = new Set(["(", "{", "[", "<"]),
      nR = new Set([")", "}", "]", ">"]),
      bR = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function oR(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function gU(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = [];
        for (const pU of UU) {
          let UU;
          UU = "punctuation" === pU.kind ? bR.text : "parameterName" === pU.kind ? bR.parameterName : RU, tU.push({
            str: pU.text,
            style: {
              color: UU,
              opacity: gU ? .5 : void 0
            }
          })
        }
        return tU
      }
      const tU = [];
      if (tU.push(...gU(UU.prefixDisplayParts, bR.text)), UU.parameters.length > 0) {
        tU.push("\n");
        for (let pU = 0; pU < UU.parameters.length; pU++) {
          const EU = UU.parameters[pU];
          tU.push("\t"), tU.push(...gU(EU.displayParts, bR.parameter, null !== RU && pU !== RU)), tU.push("\n")
        }
      }
      return tU.push(...gU(UU.suffixDisplayParts, bR.suffix)), UU.documentation && (tU.push("\n\n"), tU.push(...gU(UU.documentation, bR.docs))), tU
    }
    var ZR = function(UU) {
      return UU[UU.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", UU[UU.DuplicateIdentifier = 2300] = "DuplicateIdentifier", UU
    }(ZR || {});
    const aR = new Set([ZR.DuplicateIdentifier]),
      YR = new Set([ZR.VariableDefinedElsewhere]),
      BR = new Set([]),
      VR = "/index.js";

    function rR(UU) {
      return "/" + UU
    }

    function XR(UU, RU, gU) {
      UU.getSourceFile(RU) && UU.deleteFile(RU), UU.createFile(RU, gU)
    }

    function vR(UU) {
      return !!UU && ((0, mU.j)(UU) || (0, mU.h)(UU))
    }

    function dR(UU, RU, gU) {
      return () => {
        let tU = [...RU.languageService.getSemanticDiagnostics(gU), ...RU.languageService.getSyntacticDiagnostics(gU)];
        return tU = tU.filter((UU => !(0, wU.E)(UU.start) && !(0, wU.E)(UU.length) && !aR.has(UU.code))), UU || (tU = tU.filter((UU => !YR.has(UU.code)))), tU.map((UU => ({
          from: UU.start,
          to: UU.start + UU.length,
          message: "string" === typeof UU.messageText ? UU.messageText : UU.messageText.messageText,
          severity: BR.has(UU.code) ? "warning" : "error"
        })))
      }
    }

    function HR(UU, RU) {
      return gU => {
        var tU, pU;
        const EU = UU.languageService.getCompletionsAtPosition(RU, gU.pos, {});
        if (!EU) return {
          from: gU.pos,
          options: []
        };
        let PU = null !== (tU = null === (pU = EU.optionalReplacementSpan) || void 0 === pU ? void 0 : pU.start) && void 0 !== tU ? tU : gU.pos;
        if (!EU.optionalReplacementSpan) {
          const UU = gU.state.doc.sliceString(0, gU.pos);
          for (; PU > 0 && /[\w$]/.test(UU[PU - 1]);) PU--
        }
        return EU.entries = EU.entries.filter((UU => UU.kind !== hU().ScriptElementKind.warning)), {
          from: PU,
          options: EU.entries.map((tU => {
            var pU, EU, TU, qU;
            const KU = UU.languageService.getCompletionEntryDetails(RU, gU.pos, tU.name, {}, tU.source, {}, tU.data),
              cU = null !== (pU = null === (EU = tU.replacementSpan) || void 0 === EU ? void 0 : EU.start) && void 0 !== pU ? pU : PU,
              GU = tU.replacementSpan ? tU.replacementSpan.start + tU.replacementSpan.length : gU.pos,
              jU = null !== (TU = tU.insertText) && void 0 !== TU ? TU : tU.name;
            return {
              label: tU.name,
              detail: null === KU || void 0 === KU ? void 0 : KU.displayParts.map((UU => UU.text)).join(""),
              info: null === KU || void 0 === KU || null === (qU = KU.documentation) || void 0 === qU ? void 0 : qU.map((UU => UU.text)).join(""),
              apply: UU => {
                UU.dispatch({
                  changes: {
                    from: cU,
                    to: GU,
                    insert: jU
                  },
                  selection: {
                    anchor: cU + jU.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function SR(UU) {
      return RU => {
        const gU = document.createElement("div");
        gU.className = "CodeEditorTooltip";
        let tU = !1;
        return queueMicrotask((() => {
          tU || (TU.render((0, JR.jsx)(jU.e, {
            text: UU
          }), gU), RU.requestMeasure())
        })), {
          dom: gU,
          destroy() {
            tU = !0, queueMicrotask((() => {
              TU.unmountComponentAtNode(gU)
            }))
          }
        }
      }
    }

    function sR(UU, RU, gU) {
      return tU => {
        var pU;
        if (!RU) return [];
        const EU = null === (pU = tU.selection.hu[0]) || void 0 === pU ? void 0 : pU.head;
        if (void 0 === EU) return [];
        const PU = UU.languageService.getSignatureHelpItems(gU, EU, {});
        if (!PU || !PU.items.length) return [];
        const TU = PU.applicableSpan.start - PU.items[0].prefixDisplayParts.map((UU => UU.text)).join("").length,
          qU = PU.applicableSpan.start,
          KU = tU.doc.lineAt(EU),
          cU = KU.from,
          GU = Math.min(KU.to, EU);
        let jU, uU;
        return TU < cU ? (jU = cU, uU = GU) : (jU = TU, uU = qU), [{
          pos: jU,
          end: uU,
          above: !1,
          create: SR(oR(PU.items[0], PU.argumentIndex))
        }]
      }
    }

    function yR(UU, RU) {
      return (gU, tU, pU) => {
        const EU = UU.languageService.getQuickInfoAtPosition(RU, tU);
        if (!EU) return [];
        const PU = EU.textSpan.start,
          TU = EU.textSpan.start + EU.textSpan.length;
        if (tU < PU || tU >= TU) return [];
        if (EU.kind === hU().ScriptElementKind.memberFunctionElement || EU.kind === hU().ScriptElementKind.variableElement && "declare" === EU.kindModifiers) {
          const UU = EU.displayParts.findIndex((UU => "space" === UU.kind)); - 1 !== UU && (EU.displayParts = EU.displayParts.slice(UU));
          const RU = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            gU = EU.displayParts.findIndex((UU => "punctuation" === UU.kind && "(" === UU.text)); - 1 !== gU && (RU.prefixDisplayParts = EU.displayParts.slice(0, gU + 1), EU.displayParts = EU.displayParts.slice(gU + 1));
          const tU = EU.displayParts.findLastIndex((UU => "punctuation" === UU.kind && ")" === UU.text)); - 1 !== tU && (RU.suffixDisplayParts = EU.displayParts.slice(tU), EU.displayParts = EU.displayParts.slice(0, tU));
          let pU = 0,
            qU = [];
          for (const PU of EU.displayParts)
            if (wR.has(PU.text) ? pU++ : nR.has(PU.text) && pU--, "lineBreak" !== PU.kind) {
              if ("space" === PU.kind) {
                if (0 === qU.length) continue;
                qU.push({
                  kind: "space",
                  text: " "
                })
              } else qU.push(PU);
              0 === pU && "," === PU.text && (RU.parameters.push({
                displayParts: qU
              }), qU = [])
            } return qU.length > 0 && RU.parameters.push({
            displayParts: qU
          }), RU.documentation = EU.documentation, [{
            pos: PU,
            end: TU,
            above: !0,
            create: SR(oR(RU))
          }]
        }
        const qU = [];
        for (const UU of EU.displayParts) qU.push({
          str: UU.text,
          style: {
            color: bR.text
          }
        });
        if (EU.documentation) {
          qU.push("\n\n");
          for (const UU of EU.documentation) qU.push({
            str: UU.text,
            style: {
              color: bR.docs
            }
          })
        }
        return [{
          pos: PU,
          end: TU,
          above: !0,
          create: SR(qU)
        }]
      }
    }
    const kR = {
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
      semicolons: hU().SemicolonPreference.Insert
    };
    const FR = EU.j.define(),
      iR = {
        lineNumbers: !0,
        tabSize: 4
      };

    function AR(UU) {
      let {
        isLobbyCode: RU,
        code: gU,
        onChange: TU,
        canEditCode: jU,
        setTemporaryMessage: CU,
        close: wU,
        showTooltips: iU,
        lightMode: AU,
        collabState: MU,
        onRemoteDocChange: DU,
        files: LU,
        activePath: NU,
        pluginName: OU,
        pluginFile: UR,
        pluginSource: gR,
        setActiveDocReplacer: tR,
        showAiHints: ER,
        canAiChangeCode: PR = jU
      } = UU;
      const [TR, qR] = (0, PU.useState)(null), KR = null === MU || void 0 === MU ? void 0 : MU.version, cR = null === MU || void 0 === MU ? void 0 : MU.clientID, GR = (0, PU.useRef)({
        isLobbyCode: RU,
        files: LU,
        code: gU,
        activePath: NU
      }), jR = (0, PU.useRef)(DU);
      jR.current = DU;
      const uR = (0, PU.useRef)(null),
        CR = (0, PU.useRef)(MU);
      CR.current = MU;
      const hR = (0, PU.useRef)(null),
        WR = (0, PU.useRef)(null),
        fR = (0, PU.useRef)(null),
        xR = (0, PU.useRef)(wU);
      xR.current = wU;
      const mR = (0, PU.useRef)(gU);
      mR.current = gU;
      const wR = (0, PU.useRef)(gR);
      wR.current = gR;
      const nR = function(UU, RU, gU, tU) {
        return gU ? `/plugin-preview/${gU}/${null!==tU&&void 0!==tU?tU:"index.ts"}` : UU ? rR(null !== RU && void 0 !== RU ? RU : xU.d) : VR
      }(RU, NU, OU, UR);
      (0, PU.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: UU,
            files: RU,
            code: gU,
            activePath: tU
          } = GR.current, pU = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: hU().ModuleKind.ESNext,
            moduleResolution: hU().ModuleResolutionKind.Bundler,
            target: hU().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(fU.f).map((UU => [UU.specifier, [UU.typesVfsPath]])))
            }
          }, EU = new Map, PU = [];
          if (UU) {
            const UU = null !== RU && void 0 !== RU ? RU : {
              [xU.d]: gU || "\n"
            };
            for (const [RU, gU] of Object.entries(UU)) {
              const UU = rR(RU);
              EU.set(UU, gU || "\n"), PU.push(UU)
            }
            const pU = rR(null !== tU && void 0 !== tU ? tU : xU.d);
            EU.has(pU) ? EU.set(pU, gU || "\n") : (EU.set(pU, gU || "\n"), PU.push(pU)), EU.set("/node_modules/@bloxd/index.d.ts", cU.default), PU.push("/node_modules/@bloxd/index.d.ts");
            for (const RU of Object.values(fU.f)) {
              EU.set(RU.typesVfsPath, RU.types), PU.push(RU.typesVfsPath);
              for (const [UU, gU] of Object.entries(RU.files)) {
                const tU = `/plugin-preview/${RU.name}/${UU}`;
                EU.set(tU, gU || "\n"), PU.push(tU)
              }
            }
          } else EU.set(VR, gU || "\n"), PU.push(VR);
          EU.set("/globals.d.ts", UU ? KU.c : qU.c), EU.set("/lib.d.ts", GU.c), PU.push("/globals.d.ts", "/lib.d.ts");
          const TU = uU.e(EU),
            jU = uU.f(TU, PU, hU(), pU);
          qR({
            bu: jU,
            fsMap: EU
          })
        }()
      }), []), (0, PU.useEffect)((() => {
        var UU, tU;
        if (!TR || !RU) return;
        const {
          bu: pU,
          fsMap: EU
        } = TR;
        if (function(UU, RU, gU) {
            const tU = new Set;
            for (const [pU, EU] of Object.entries(gU)) {
              const gU = rR(pU);
              tU.add(gU);
              const PU = EU || "\n";
              RU.get(gU) !== PU && (RU.set(gU, PU), XR(UU, gU, PU))
            }
            for (const pU of [...RU.keys()]) "/globals.d.ts" === pU || "/lib.d.ts" === pU || pU.startsWith("/node_modules/") || pU.startsWith("/plugin-preview/") || tU.has(pU) || (RU.delete(pU), UU.getSourceFile(pU) && UU.deleteFile(pU))
          }(pU, EU, null !== LU && void 0 !== LU ? LU : {
            [xU.d]: gU || "\n"
          }), OU) return void XR(pU, nR, gR || "\n");
        const PU = null !== (UU = null === (tU = uR.current) || void 0 === tU ? void 0 : tU.state.doc.toString()) && void 0 !== UU ? UU : gU;
        XR(pU, nR, PU || "\n")
      }), [LU, NU, TR, OU, gR, nR, gU, RU]), (0, PU.useEffect)((() => {
        if (!TR) return;
        const {
          bu: UU
        } = TR;
        XR(UU, nR, (OU ? gR : gU) || "\n")
      }), [gU, OU, gR, nR, TR]), (0, PU.useEffect)((() => () => {
        WR.current && (WR.current(), WR.current = null)
      }), []), (0, PU.useEffect)((() => (tR(((UU, RU) => {
        if (OU) return !1;
        const gU = uR.current,
          tU = CR.current,
          pU = tU ? (0, mU.q)(tU.docKey) : null;
        if (!gU || !tU || hR.current !== tU.clientID || UU !== pU) return !1;
        const EU = gU.state.doc.toString();
        return EU !== RU && gU.dispatch({
          changes: {
            from: 0,
            to: EU.length,
            insert: RU
          }
        }), !0
      })), () => {
        uR.current = null, hR.current = null, tR(null)
      })), [tR, OU]);
      const bR = RU ? OU ? null : null !== NU && void 0 !== NU ? NU : xU.d : eR.d,
        oR = RR(uR, bR);
      pR(uR, CU), (0, JU.e)("FormatCode", (() => {
        if (!TR || !uR.current || OU) return;
        const {
          bu: UU,
          fsMap: gU
        } = TR, tU = UU.getSourceFile(nR).getFullText();
        let pU = 0;
        if (RU && LU)
          for (const [RU, TU] of Object.entries(LU)) RU !== (null !== NU && void 0 !== NU ? NU : xU.d) && (pU += TU.length);
        const EU = function(UU, RU, gU, tU, pU) {
          const EU = UU.languageService.getFormattingEditsForDocument(tU, kR);
          if (!EU.length) return nU.c.error("Code is already formatted.");
          EU.sort(((UU, RU) => RU.span.start - UU.span.start));
          let PU = UU.getSourceFile(tU).getFullText();
          for (const TU of EU) PU = PU.slice(0, TU.span.start) + TU.uP + PU.slice(TU.span.start + TU.span.length);
          return PU !== (gU ? (0, IU.k)(PU, pU) : (0, IU.h)(PU)) ? nU.c.error("Formatting the code will go beyond the character limit.") : nU.c.value(PU)
        }(UU, 0, RU, nR, pU);
        if (EU.isError()) return void CU({
          message: EU.asError().message,
          type: "warning"
        });
        const PU = EU.getValue();
        PU && (uR.current.dispatch({
          changes: {
            from: 0,
            to: tU.length,
            insert: PU
          },
          selection: {
            anchor: PU.length
          }
        }), XR(UU, nR, PU), TU(PU))
      }));
      const ZR = (0, PU.useMemo)((() => {
        if (!TR) return [];
        const {
          bu: UU,
          fsMap: gU
        } = TR;
        ! function(UU, RU, gU, tU) {
          if (UU.getSourceFile(gU)) return;
          const pU = tU || "\n";
          RU.set(gU, pU), UU.createFile(gU, pU)
        }(UU, gU, nR, (OU ? wR.current : mR.current) || "\n");
        const PU = RU && vR(OU ? null !== UR && void 0 !== UR ? UR : "index.ts" : NU),
          TU = [(0, pU.b)({
            jsx: !1,
            typescript: PU
          }), EU.h.highest(EU.d.domEventHandlers({
            keydown: UU => "Escape" === UU.key ? (xR.current(), UU.stopPropagation(), !0) : (UU.stopPropagation(), !1)
          })), (0, tU.d)({
            override: [HR(UU, nR)]
          }), ZU.l.fromClass(class {
            constructor(UU) {
              this.view = UU, this.timeout = null, this.scheduleParse()
            }
            update(UU) {
              (UU.docChanged || UU.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const UU = this.view.viewport.to;
                (0, dU.pb)(this.view.state, UU) || (0, dU.P)(this.view, UU, HU) || this.scheduleParse()
              }), SU))
            }
          }), ...lU, EU.d.lineWrapping, EU.m.define({
            create: sR(UU, iU, nR),
            update(RU, gU) {
              const tU = gU.effects.some((UU => UU.is(FR)));
              return gU.docChanged || gU.selection || tU ? (XR(UU, nR, gU.state.doc.toString() || " "), sR(UU, iU, nR)(gU.state)) : RU
            },
            provide: UU => EU.w.computeN([UU], (RU => RU.field(UU)))
          }), (0, EU.t)(yR(UU, nR)), (0, eU.f)(dR(RU, UU, nR)), EU.q.fromClass(class {
            constructor(UU) {
              this.view = UU, this.searchPanel = null
            }
            update(UU) {
              const RU = UU.view.dom.querySelector(".cm-search");
              if (RU !== this.searchPanel) {
                if (this.searchPanel = RU, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (UU => {
                  "Escape" === UU.key && (0, QU.b)(this.view), UU.stopPropagation()
                }))
              }
            }
          })];
        ER && !OU && TU.push(IR(RU ? null !== NU && void 0 !== NU ? NU : xU.d : eR.d, PR));
        const qU = CR.current;
        if (qU && !OU) {
          TU.push(... function(UU, RU, gU, tU, pU) {
            let EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const PU = (0, mU.q)(gU),
              TU = ZU.l.fromClass(class {
                constructor(UU) {
                  this.view = UU, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = BU.p.subscribe("codeCollab", (UU => {
                    UU.docKey === PU && UU.type === mU.c.Updates && (UU.updates ? this.applyUpdates(UU.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(UU) {
                  const RU = JSON.parse(UU).map((UU => ({
                    clientID: UU.clientID,
                    changes: oU.ChangeSet.fromJSON(UU.changes)
                  })));
                  RU.length > 0 && (this.view.dispatch((0, bU.j)(this.view.state, RU)), pU && pU(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(UU) {
                  EU && (UU.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const UU = (0, bU.l)(this.view.state);
                  if (this.pushing || !UU.length) return;
                  const RU = Date.now() - this.lastPushTime;
                  if (RU < vU) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), vU - RU)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), rU);
                  const gU = (0, bU.g)(this.view.state),
                    pU = UU.map((UU => ({
                      clientID: UU.clientID,
                      changes: UU.changes.toJSON()
                    }))),
                    EU = JSON.stringify(pU);
                  EU.length <= mU.d ? aU.gameBridge.send("sendCodeCollab", {
                    uR: mU.b.Push,
                    CR: PU,
                    hR: gU,
                    WR: EU
                  }) : (0, VU.postJsonWithMetricsCookiesAndJsonResponse)(`${tU.gsUrl}/code/collab-push`, YU.s["collab-push"].toBuffer({
                    gameNameWithVariation: tU.gameNameWithVariation,
                    lobbyName: tU.lobbyName,
                    docKey: PU,
                    version: gU,
                    updates: EU
                  }), {
                    retries: 0
                  }).catch((UU => {
                    console.error("[CodeCollab] HTTP push failed", UU)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const UU = (0, bU.g)(this.view.state);
                  (0, VU.postJsonWithMetricsCookiesAndJsonResponse)(`${tU.gsUrl}/code/collab-pull`, YU.s["collab-pull"].toBuffer({
                    gameNameWithVariation: tU.gameNameWithVariation,
                    lobbyName: tU.lobbyName,
                    docKey: PU,
                    fromVersion: UU
                  }), {
                    retries: 1
                  }).then((UU => {
                    this.destroyed || (UU.fullDoc ? BU.p.yh("codeCollabRejoin", {
                      docKey: PU,
                      doc: UU.fullDoc,
                      version: UU.version
                    }) : this.applyUpdates(UU.updates))
                  })).catch((UU => {
                    console.error("[CodeCollab] Pull failed", UU)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const UU = Date.now();
                  if (UU - this.lastCursorSent < XU) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), XU)));
                  this.lastCursorSent = UU;
                  const RU = this.view.state.selection.main;
                  aU.gameBridge.send("sendCodeCollab", {
                    uR: mU.b.Cursor,
                    CR: PU,
                    IR: RU.anchor,
                    JR: RU.head
                  })
                }
                destroy() {
                  this.destroyed = !0, BU.p.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, bU.c)({
              startVersion: UU,
              clientID: RU
            }), TU]
          }(KR, cR, qU.docKey, qU.httpConfig, (UU => {
            var RU;
            null === (RU = jR.current) || void 0 === RU || RU.call(jR, UU)
          }), jU));
          const UU = function(UU, RU) {
            const gU = (0, mU.q)(UU);
            return {
              extensions: [zU],
              connect(UU) {
                if (RU) {
                  const gU = RU.map((UU => yU.of({
                    playerId: UU.playerId,
                    playerName: UU.playerName,
                    colour: UU.colour,
                    anchor: UU.anchor,
                    head: UU.head,
                    lastMoved: Date.now()
                  })));
                  gU.length > 0 && UU.dispatch({
                    effects: gU
                  })
                }
                const tU = BU.p.subscribe("codeCollab", (RU => {
                    if (RU.docKey === gU)
                      if (RU.type === mU.c.RemoteCursor) UU.dispatch({
                        effects: yU.of({
                          playerId: RU.playerId,
                          playerName: RU.playerName,
                          colour: RU.colour,
                          anchor: RU.anchor,
                          head: RU.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (RU.type === mU.c.Presence) {
                      const gU = JSON.parse(RU.peers),
                        tU = new Set(gU.map((UU => UU.playerId))),
                        pU = UU.state.field(zU),
                        EU = [];
                      for (const [UU] of pU.cursors) tU.has(UU) || EU.push(kU.of(UU));
                      EU.length > 0 && UU.dispatch({
                        effects: EU
                      })
                    }
                  })),
                  pU = setInterval((() => {
                    UU.dom.isConnected ? UU.dispatch({
                      effects: FU.of(Date.now())
                    }) : clearInterval(pU)
                  }), sU);
                return () => {
                  BU.p.unsubscribe(tU), clearInterval(pU)
                }
              }
            }
          }(qU.docKey, qU.existingCursors);
          TU.push(...UU.extensions), fR.current = UU.connect
        } else fR.current = null;
        return TU
      }), [RU, TR, iU, KR, cR, nR, NU, OU, UR, jU, ER, PR]);
      if (!TR || !MU && !OU) return (0, JR.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, JR.jsx)(WU.d, {})
      });
      const aR = OU ? `plugin-${OU}-${null!==UR&&void 0!==UR?UR:"index.ts"}` : MU ? `collab-${MU.clientID}` : `local-${RU}`;
      return (0, JR.jsx)(EU.r, {
        value: OU ? null !== gR && void 0 !== gR ? gR : "" : gU,
        onChange: TU,
        extensions: ZR,
        className: "CodeEditorContent",
        theme: AU ? QR : "dark",
        editable: jU && !OU,
        basicSetup: iR,
        onCreateEditor: UU => {
          var RU;
          uR.current = UU, hR.current = null !== (RU = null === MU || void 0 === MU ? void 0 : MU.clientID) && void 0 !== RU ? RU : null, oR(UU), WR.current && WR.current(), fR.current && (WR.current = fR.current(UU))
        }
      }, aR)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);