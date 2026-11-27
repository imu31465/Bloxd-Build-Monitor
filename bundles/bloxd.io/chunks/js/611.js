export const id = 611;
export const ids = [611];
export const modules = {
  53307: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => EJ
    });
    var yR = GR(53314),
      tR = GR(53355),
      uR = GR(53364),
      ZR = GR(66),
      qR = GR(83),
      iR = GR(53379),
      fR = GR(53382),
      VR = GR(5650),
      KR = GR(53388),
      wR = GR(2105),
      rR = GR(53395),
      eR = GR(53420),
      aR = GR.n(eR),
      LR = GR(53368),
      nR = GR(53374),
      UR = GR(1465),
      WR = GR(37967),
      AR = GR(1336),
      CR = GR(3458),
      XR = GR(37329),
      MR = GR(1581),
      BR = GR(679),
      lR = GR(1341),
      pR = GR(53481),
      gR = GR(53317),
      bR = GR(53321),
      vR = GR(2134),
      OR = GR(2532),
      xR = GR(32),
      NR = GR(1201);
    const DR = 1e4,
      HR = 250,
      oR = 250;
    var cR = GR(53340);
    const PR = 50,
      IR = 100;
    const mR = 2e3,
      zR = gR.K.define(),
      SR = gR.K.define(),
      jR = gR.K.define();
    class dR extends bR.q {
      constructor(RR, JR, GR) {
        super(), this.colour = RR, this.playerName = JR, this.showName = GR
      }
      toDOM() {
        const RR = document.createElement("span");
        RR.className = "cm-remote-cursor-wrapper", RR.style.borderLeftColor = this.colour;
        const JR = document.createElement("span");
        if (JR.className = "cm-remote-cursor", JR.style.borderLeftColor = this.colour, RR.appendChild(JR), this.showName) {
          const JR = document.createElement("span");
          JR.className = "cm-remote-cursor-name", JR.style.backgroundColor = this.colour, JR.textContent = this.playerName, RR.appendChild(JR)
        }
        return RR
      }
      eq(RR) {
        return this.colour === RR.colour && this.playerName === RR.playerName && this.showName === RR.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function ER(RR, JR) {
      const GR = [],
        yR = [];
      for (const [, ZR] of RR) {
        const RR = JR - ZR.lastMoved < mR;
        if (GR.push({
            pos: ZR.head,
            decoration: bR.e.widget({
              widget: new dR(ZR.colour, ZR.playerName, RR),
              side: 1
            })
          }), ZR.anchor !== ZR.head) {
          const RR = Math.min(ZR.anchor, ZR.head),
            JR = Math.max(ZR.anchor, ZR.head);
          yR.push({
            from: RR,
            to: JR,
            decoration: bR.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${ZR.colour}33`
              }
            })
          })
        }
      }
      const tR = new gR.C,
        uR = [];
      for (const ZR of GR) uR.push({
        bias: 1,
        deco: ZR.decoration,
        from: ZR.pos,
        to: ZR.pos
      });
      for (const ZR of yR) uR.push({
        bias: 0,
        deco: ZR.decoration,
        from: ZR.from,
        to: ZR.to
      });
      uR.sort(((RR, JR) => RR.from - JR.from || RR.deco.startSide - JR.deco.startSide || RR.bias - JR.bias));
      for (const ZR of uR) tR.add(ZR.from, ZR.to, ZR.deco);
      return tR.finish()
    }
    const YR = gR.L.define({
      create: () => ({
        cursors: new Map,
        Cy: bR.e.none
      }),
      update(RR, JR) {
        let GR = RR.cursors,
          yR = !1;
        if (JR.docChanged) {
          const RR = new Map;
          for (const [yR, tR] of GR) RR.set(yR, {
            ...tR,
            anchor: JR.changes.mapPos(tR.anchor, 1),
            head: JR.changes.mapPos(tR.head, 1)
          });
          GR = RR, yR = !0
        }
        for (const tR of JR.effects)
          if (tR.is(zR)) {
            if (!Number.isInteger(tR.value.anchor) || !Number.isInteger(tR.value.head)) {
              console.warn(`Code Editor: ignored player ${tR.value.playerId}'s cursor at ${tR.value.anchor}-${tR.value.head}`);
              continue
            }
            const uR = JR.state.doc.length,
              ZR = {
                ...tR.value,
                anchor: Math.min(tR.value.anchor, uR),
                head: Math.min(tR.value.head, uR)
              };
            GR === RR.cursors && (GR = new Map(GR)), GR.set(ZR.playerId, ZR), yR = !0
          } else tR.is(SR) ? GR.has(tR.value) && (GR === RR.cursors && (GR = new Map(GR)), GR.delete(tR.value), yR = !0) : tR.is(jR) && (yR = !0);
        return yR ? {
          cursors: GR,
          Cy: ER(GR, Date.now())
        } : RR
      },
      provide: RR => bR.k.Cy.from(RR, (RR => RR.Cy))
    });
    const kR = gR.K.define(),
      QR = bR.e.mark({
        class: "CodeInsertFlash"
      }),
      FR = gR.L.define({
        create: () => bR.e.none,
        update(RR, JR) {
          let GR = RR.map(JR.changes);
          for (const yR of JR.effects) yR.is(kR) && (GR = yR.value ? bR.e.set(QR.range(yR.value.from, yR.value.to)) : bR.e.none);
          return GR
        },
        provide: RR => bR.k.Cy.from(RR)
      }),
      TR = gR.L.define({
        create: () => !1,
        update: (RR, JR) => RR || void 0 !== JR.annotation(gR.R.userEvent) && !JR.annotation(gR.R.remote)
      }),
      sR = [FR, TR];

    function hR(RR) {
      return RR.field(TR)
    }
    const RJ = 3e4;

    function JJ(RR, JR) {
      const GR = (0, ZR.useRef)(null);
      (0, ZR.useEffect)((() => {
        var RR;
        (null === (RR = GR.current) || void 0 === RR ? void 0 : RR.path) !== JR && (GR.current = null)
      }), [JR]);
      const yR = RR => {
        var yR;
        const tR = GR.current;
        if (null === RR || void 0 === RR || !RR.dom.isConnected || !tR || tR.path !== JR) return;
        GR.current = null;
        const {
          tK: ZR
        } = tR;
        if (ZR && null !== ZR.text && performance.now() - ZR.at < RJ) {
          const JR = function(RR, JR) {
            if (RR === JR) return null;
            const GR = Math.min(RR.length, JR.length);
            let yR = 0;
            for (; yR < GR && RR[yR] === JR[yR];) yR++;
            let tR = 0;
            for (; tR < GR - yR && RR[RR.length - 1 - tR] === JR[JR.length - 1 - tR];) tR++;
            return {
              from: yR,
              to: RR.length - tR,
              insert: JR.slice(yR, JR.length - tR)
            }
          }(RR.state.doc.toString(), ZR.text);
          null !== JR && RR.dispatch({
            changes: JR,
            userEvent: ZR.placed ? "input" : void 0
          })
        }
        const {
          doc: qR
        } = RR.state, iR = qR.line(Math.min(Math.max(tR.line, 1), qR.lines)), fR = iR.from + Math.min(null !== (yR = tR.column) && void 0 !== yR ? yR : 0, iR.length);
        RR.dispatch({
          selection: {
            anchor: fR
          },
          effects: uR.e.scrollIntoView(fR, {
            y: "center"
          }),
          userEvent: null !== ZR && void 0 !== ZR && ZR.placed ? "select" : void 0
        }), !1 !== (null === ZR || void 0 === ZR ? void 0 : ZR.focused) && RR.focus()
      };
      return (0, MR.f)("CodeEditorGoToLine", (JR => {
        GR.current = JR, yR(RR.current)
      })), (0, MR.f)("CodeEditorKeepEdits", (() => {
        const yR = RR.current;
        if (null === yR || !yR.dom.isConnected || null === JR) return;
        const {
          doc: tR,
          selection: uR
        } = yR.state, {
          head: ZR
        } = uR.main, qR = tR.lineAt(ZR), iR = {
          text: (0, pR.m)(yR.state).length > 0 ? tR.toString() : null,
          at: performance.now(),
          focused: yR.hasFocus,
          placed: hR(yR.state)
        };
        GR.current = {
          path: JR,
          line: qR.number,
          column: ZR - qR.from,
          tK: iR
        }
      })), RR => {
        var tR;
        const uR = GR.current;
        !1 === (null === uR || void 0 === uR || null === (tR = uR.tK) || void 0 === tR ? void 0 : tR.focused) && uR.path === JR || RR.focus(), yR(RR)
      }
    }
    var GJ = GR(5138),
      yJ = GR(1270);

    function tJ(RR, JR) {
      const {
        t: GR
      } = (0, yJ.A)();
      (0, MR.f)("CodeEditorInsertText", (yR => {
        let {
          text: tR,
          focus: uR
        } = yR;
        const ZR = RR.current,
          qR = null !== ZR && void 0 !== ZR && ZR.dom.isConnected ? function(RR, JR) {
            if (!hR(RR)) return null;
            const {
              from: GR,
              to: yR
            } = RR.selection.main, tR = GR + JR.length;
            return {
              changes: {
                from: GR,
                to: yR,
                insert: JR
              },
              selection: {
                anchor: tR
              },
              effects: [bR.k.scrollIntoView(tR, {
                y: "center"
              }), kR.of({
                from: GR,
                to: tR
              })],
              userEvent: "input"
            }
          }(ZR.state, tR) : null;
        null !== ZR && null !== qR ? (ZR.dispatch(qR), uR && ZR.focus(), setTimeout((() => {
          ZR.dom.isConnected && ZR.dispatch({
            effects: kR.of(null)
          })
        }), 1500)) : (0, GJ.e)(tR).then((() => {
          JR({
            message: GR("codeEditorWorld:pickCopied", {
              coords: tR
            }),
            type: "success"
          })
        }), (RR => {
          console.error("Pick could not copy the coordinates", RR), JR({
            message: GR("codeEditorWorld:pickPlaceCursor", {
              coords: tR
            }),
            type: "warning"
          })
        }))
      }))
    }
    var uJ = GR(53352);
    const ZJ = "#e45649",
      qJ = "#383a42",
      iJ = "#696c77",
      fJ = "#986801",
      VJ = "#e5e5e6",
      KJ = "#fafafa",
      wJ = "#eaeaeb",
      rJ = "#526fff",
      eJ = bR.k.theme({
        "&": {
          color: qJ,
          backgroundColor: KJ
        },
        ".cm-content": {
          caretColor: rJ
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: rJ
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: qJ
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
          backgroundColor: KJ,
          color: iJ,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: VJ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: wJ
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: wJ,
          borderBottomColor: wJ
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: VJ,
            color: qJ
          }
        }
      }, {
        dark: !1
      }),
      aJ = cR.e.define([{
        tag: uJ.l.keyword,
        color: "#a626a4"
      }, {
        tag: [uJ.l.name, uJ.l.deleted, uJ.l.character, uJ.l.propertyName, uJ.l.macroName],
        color: ZJ
      }, {
        tag: [uJ.l.function(uJ.l.variableName), uJ.l.labelName],
        color: "#4078f2"
      }, {
        tag: [uJ.l.color, uJ.l.constant(uJ.l.name), uJ.l.standard(uJ.l.name)],
        color: fJ
      }, {
        tag: [uJ.l.definition(uJ.l.name), uJ.l.separator],
        color: qJ
      }, {
        tag: [uJ.l.typeName, uJ.l.className, uJ.l.number, uJ.l.changed, uJ.l.annotation, uJ.l.modifier, uJ.l.self, uJ.l.namespace],
        color: "#c18401"
      }, {
        tag: [uJ.l.operator, uJ.l.operatorKeyword, uJ.l.url, uJ.l.escape, uJ.l.regexp, uJ.l.link, uJ.l.special(uJ.l.string)],
        color: "#0184bc"
      }, {
        tag: [uJ.l.meta, uJ.l.comment],
        color: iJ
      }, {
        tag: uJ.l.strong,
        fontWeight: "bold"
      }, {
        tag: uJ.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: uJ.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: uJ.l.link,
        color: iJ,
        textDecoration: "underline"
      }, {
        tag: uJ.l.heading,
        fontWeight: "bold",
        color: ZJ
      }, {
        tag: [uJ.l.atom, uJ.l.bool, uJ.l.special(uJ.l.variableName)],
        color: fJ
      }, {
        tag: [uJ.l.processingInstruction, uJ.l.string, uJ.l.inserted],
        color: "#50a14f"
      }, {
        tag: uJ.l.invalid,
        color: "#000000"
      }]),
      LJ = [eJ, (0, cR.kb)(aJ)];
    var nJ = GR(38016),
      UJ = GR(53483);
    const WJ = uR.j.define(),
      AJ = uR.l.define({
        create: () => !1,
        update(RR, JR) {
          for (const GR of JR.effects) GR.is(WJ) && (RR = GR.value);
          return RR
        }
      }),
      CJ = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function XJ(RR, JR) {
      return [AJ, uR.m.fromClass(class {
        constructor(RR) {
          this.view = RR, this.onDown = RR => {
            const JR = RR.target instanceof Element && null !== RR.target.closest(".cm-tooltip");
            0 !== RR.button || JR || this.view.state.field(AJ) || this.view.dispatch({
              effects: WJ.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(AJ) && this.view.dispatch({
              effects: WJ.of(!1)
            })
          }, RR.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), uR.u.compute(["selection", AJ], (GR => function(RR, JR, GR) {
        const yR = RR.selection.main;
        return yR.empty || RR.field(AJ) || RR.sliceDoc(yR.from, yR.to).trim().length < 2 ? null : {
          pos: yR.from,
          above: !0,
          create: RR => {
            const yR = document.createElement("div");
            yR.className = "CodeSelectionActions", yR.setAttribute("role", "toolbar"), yR.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: tR,
                label: uR
              }
              of CJ) {
              if (!GR && "explain" !== tR) continue;
              const ZR = document.createElement("button");
              ZR.type = "button", ZR.textContent = uR, "change" !== tR && (ZR.title = UJ.d, ZR.dataset.asksAi = "true"), ZR.addEventListener("mousedown", (RR => {
                RR.preventDefault()
              })), ZR.addEventListener("click", (() => {
                const GR = RR.state.selection.main;
                if (GR.empty) return;
                const yR = {
                  action: tR,
                  path: JR,
                  fromLine: RR.state.doc.lineAt(GR.from).number,
                  toLine: RR.state.doc.lineAt(GR.to > GR.from && RR.state.doc.lineAt(GR.to).from === GR.to ? GR.to - 1 : GR.to).number,
                  text: RR.state.sliceDoc(GR.from, GR.to)
                };
                xR.n.JK("WorldCodeAiSelection", yR), RR.dispatch({
                  selection: {
                    anchor: GR.to
                  }
                })
              })), yR.appendChild(ZR)
            }
            return {
              dom: yR
            }
          }
        }
      }(GR, RR, JR)))]
    }
    var MJ = GR(1378);
    const BJ = new Set(["(", "{", "[", "<"]),
      lJ = new Set([")", "}", "]", ">"]),
      pJ = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function gJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function GR(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = [];
        for (const tR of RR) {
          let RR;
          RR = "punctuation" === tR.kind ? pJ.text : "parameterName" === tR.kind ? pJ.parameterName : JR, yR.push({
            str: tR.text,
            style: {
              color: RR,
              opacity: GR ? .5 : void 0
            }
          })
        }
        return yR
      }
      const yR = [];
      if (yR.push(...GR(RR.prefixDisplayParts, pJ.text)), RR.parameters.length > 0) {
        yR.push("\n");
        for (let tR = 0; tR < RR.parameters.length; tR++) {
          const uR = RR.parameters[tR];
          yR.push("\t"), yR.push(...GR(uR.displayParts, pJ.parameter, null !== JR && tR !== JR)), yR.push("\n")
        }
      }
      return yR.push(...GR(RR.suffixDisplayParts, pJ.suffix)), RR.documentation && (yR.push("\n\n"), yR.push(...GR(RR.documentation, pJ.docs))), yR
    }
    var bJ = function(RR) {
      return RR[RR.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", RR[RR.DuplicateIdentifier = 2300] = "DuplicateIdentifier", RR
    }(bJ || {});
    const vJ = new Set([bJ.DuplicateIdentifier]),
      OJ = new Set([bJ.VariableDefinedElsewhere]),
      xJ = new Set([]),
      NJ = "/index.js";

    function DJ(RR) {
      return "/" + RR
    }

    function HJ(RR, JR, GR) {
      RR.getSourceFile(JR) && RR.deleteFile(JR), RR.createFile(JR, GR)
    }

    function oJ(RR) {
      return !!RR && ((0, CR.m)(RR) || (0, CR.l)(RR))
    }

    function cJ(RR, JR, GR) {
      return () => {
        let yR = [...JR.languageService.getSemanticDiagnostics(GR), ...JR.languageService.getSyntacticDiagnostics(GR)];
        return yR = yR.filter((RR => !(0, BR.I)(RR.start) && !(0, BR.I)(RR.length) && !vJ.has(RR.code))), RR || (yR = yR.filter((RR => !OJ.has(RR.code)))), yR.map((RR => ({
          from: RR.start,
          to: RR.start + RR.length,
          message: "string" === typeof RR.messageText ? RR.messageText : RR.messageText.messageText,
          severity: xJ.has(RR.code) ? "warning" : "error"
        })))
      }
    }

    function PJ(RR, JR) {
      return GR => {
        var yR, tR;
        const uR = RR.languageService.getCompletionsAtPosition(JR, GR.pos, {});
        if (!uR) return {
          from: GR.pos,
          options: []
        };
        let ZR = null !== (yR = null === (tR = uR.optionalReplacementSpan) || void 0 === tR ? void 0 : tR.start) && void 0 !== yR ? yR : GR.pos;
        if (!uR.optionalReplacementSpan) {
          const RR = GR.state.doc.sliceString(0, GR.pos);
          for (; ZR > 0 && /[\w$]/.test(RR[ZR - 1]);) ZR--
        }
        return uR.entries = uR.entries.filter((RR => RR.kind !== aR().ScriptElementKind.warning)), {
          from: ZR,
          options: uR.entries.map((yR => {
            var tR, uR, qR, iR;
            const fR = RR.languageService.getCompletionEntryDetails(JR, GR.pos, yR.name, {}, yR.source, {}, yR.data),
              VR = null !== (tR = null === (uR = yR.replacementSpan) || void 0 === uR ? void 0 : uR.start) && void 0 !== tR ? tR : ZR,
              KR = yR.replacementSpan ? yR.replacementSpan.start + yR.replacementSpan.length : GR.pos,
              wR = null !== (qR = yR.insertText) && void 0 !== qR ? qR : yR.name;
            return {
              label: yR.name,
              detail: null === fR || void 0 === fR ? void 0 : fR.displayParts.map((RR => RR.text)).join(""),
              info: null === fR || void 0 === fR || null === (iR = fR.documentation) || void 0 === iR ? void 0 : iR.map((RR => RR.text)).join(""),
              apply: RR => {
                RR.dispatch({
                  changes: {
                    from: VR,
                    to: KR,
                    insert: wR
                  },
                  selection: {
                    anchor: VR + wR.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function IJ(RR) {
      return JR => {
        const GR = document.createElement("div");
        GR.className = "CodeEditorTooltip";
        let yR = !1;
        return queueMicrotask((() => {
          yR || (qR.render((0, MJ.jsx)(wR.c, {
            text: RR
          }), GR), JR.requestMeasure())
        })), {
          dom: GR,
          destroy() {
            yR = !0, queueMicrotask((() => {
              qR.unmountComponentAtNode(GR)
            }))
          }
        }
      }
    }

    function mJ(RR, JR, GR) {
      return yR => {
        var tR;
        if (!JR) return [];
        const uR = null === (tR = yR.selection.WL[0]) || void 0 === tR ? void 0 : tR.head;
        if (void 0 === uR) return [];
        const ZR = RR.languageService.getSignatureHelpItems(GR, uR, {});
        if (!ZR || !ZR.items.length) return [];
        const qR = ZR.applicableSpan.start - ZR.items[0].prefixDisplayParts.map((RR => RR.text)).join("").length,
          iR = ZR.applicableSpan.start,
          fR = yR.doc.lineAt(uR),
          VR = fR.from,
          KR = Math.min(fR.to, uR);
        let wR, rR;
        return qR < VR ? (wR = VR, rR = KR) : (wR = qR, rR = iR), [{
          pos: wR,
          end: rR,
          above: !1,
          create: IJ(gJ(ZR.items[0], ZR.argumentIndex))
        }]
      }
    }

    function zJ(RR, JR) {
      return (GR, yR, tR) => {
        const uR = RR.languageService.getQuickInfoAtPosition(JR, yR);
        if (!uR) return [];
        const ZR = uR.textSpan.start,
          qR = uR.textSpan.start + uR.textSpan.length;
        if (yR < ZR || yR >= qR) return [];
        if (uR.kind === aR().ScriptElementKind.memberFunctionElement || uR.kind === aR().ScriptElementKind.variableElement && "declare" === uR.kindModifiers) {
          const RR = uR.displayParts.findIndex((RR => "space" === RR.kind)); - 1 !== RR && (uR.displayParts = uR.displayParts.slice(RR));
          const JR = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            GR = uR.displayParts.findIndex((RR => "punctuation" === RR.kind && "(" === RR.text)); - 1 !== GR && (JR.prefixDisplayParts = uR.displayParts.slice(0, GR + 1), uR.displayParts = uR.displayParts.slice(GR + 1));
          const yR = uR.displayParts.findLastIndex((RR => "punctuation" === RR.kind && ")" === RR.text)); - 1 !== yR && (JR.suffixDisplayParts = uR.displayParts.slice(yR), uR.displayParts = uR.displayParts.slice(0, yR));
          let tR = 0,
            iR = [];
          for (const ZR of uR.displayParts)
            if (BJ.has(ZR.text) ? tR++ : lJ.has(ZR.text) && tR--, "lineBreak" !== ZR.kind) {
              if ("space" === ZR.kind) {
                if (0 === iR.length) continue;
                iR.push({
                  kind: "space",
                  text: " "
                })
              } else iR.push(ZR);
              0 === tR && "," === ZR.text && (JR.parameters.push({
                displayParts: iR
              }), iR = [])
            } return iR.length > 0 && JR.parameters.push({
            displayParts: iR
          }), JR.documentation = uR.documentation, [{
            pos: ZR,
            end: qR,
            above: !0,
            create: IJ(gJ(JR))
          }]
        }
        const iR = [];
        for (const RR of uR.displayParts) iR.push({
          str: RR.text,
          style: {
            color: pJ.text
          }
        });
        if (uR.documentation) {
          iR.push("\n\n");
          for (const RR of uR.documentation) iR.push({
            str: RR.text,
            style: {
              color: pJ.docs
            }
          })
        }
        return [{
          pos: ZR,
          end: qR,
          above: !0,
          create: IJ(iR)
        }]
      }
    }
    const SJ = {
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
      semicolons: aR().SemicolonPreference.Insert
    };
    const jJ = uR.j.define(),
      dJ = {
        lineNumbers: !0,
        tabSize: 4
      };

    function EJ(RR) {
      let {
        isLobbyCode: JR,
        code: GR,
        onChange: qR,
        canEditCode: wR,
        setTemporaryMessage: eR,
        close: BR,
        showTooltips: dR,
        lightMode: ER,
        collabState: kR,
        onRemoteDocChange: QR,
        files: FR,
        activePath: TR,
        pluginName: hR,
        pluginFile: RJ,
        pluginSource: GJ,
        setActiveDocReplacer: yJ,
        showAiHints: uJ,
        canAiChangeCode: ZJ = wR
      } = RR;
      const [qJ, iJ] = (0, ZR.useState)(null), fJ = null === kR || void 0 === kR ? void 0 : kR.version, VJ = null === kR || void 0 === kR ? void 0 : kR.clientID, KJ = (0, ZR.useRef)({
        isLobbyCode: JR,
        files: FR,
        code: GR,
        activePath: TR
      }), wJ = (0, ZR.useRef)(QR);
      wJ.current = QR;
      const rJ = (0, ZR.useRef)(null),
        eJ = (0, ZR.useRef)(kR);
      eJ.current = kR;
      const aJ = (0, ZR.useRef)(null),
        UJ = (0, ZR.useRef)(null),
        WJ = (0, ZR.useRef)(null),
        AJ = (0, ZR.useRef)(BR);
      AJ.current = BR;
      const CJ = (0, ZR.useRef)(GR);
      CJ.current = GR;
      const BJ = (0, ZR.useRef)(GJ);
      BJ.current = GJ;
      const lJ = function(RR, JR, GR, yR) {
        return GR ? `/plugin-preview/${GR}/${null!==yR&&void 0!==yR?yR:"index.ts"}` : RR ? DJ(null !== JR && void 0 !== JR ? JR : AR.i) : NJ
      }(JR, TR, hR, RJ);
      (0, ZR.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: RR,
            files: JR,
            code: GR,
            activePath: yR
          } = KJ.current, tR = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: aR().ModuleKind.ESNext,
            moduleResolution: aR().ModuleResolutionKind.Bundler,
            target: aR().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(WR.i).map((RR => [RR.specifier, [RR.typesVfsPath]])))
            }
          }, uR = new Map, ZR = [];
          if (RR) {
            const RR = null !== JR && void 0 !== JR ? JR : {
              [AR.i]: GR || "\n"
            };
            for (const [JR, GR] of Object.entries(RR)) {
              const RR = DJ(JR);
              uR.set(RR, GR || "\n"), ZR.push(RR)
            }
            const tR = DJ(null !== yR && void 0 !== yR ? yR : AR.i);
            uR.has(tR) ? uR.set(tR, GR || "\n") : (uR.set(tR, GR || "\n"), ZR.push(tR)), uR.set("/node_modules/@bloxd/index.d.ts", VR.default), ZR.push("/node_modules/@bloxd/index.d.ts");
            for (const JR of Object.values(WR.i)) {
              uR.set(JR.typesVfsPath, JR.types), ZR.push(JR.typesVfsPath);
              for (const [RR, GR] of Object.entries(JR.files)) {
                const yR = `/plugin-preview/${JR.name}/${RR}`;
                uR.set(yR, GR || "\n"), ZR.push(yR)
              }
            }
          } else uR.set(NJ, GR || "\n"), ZR.push(NJ);
          uR.set("/globals.d.ts", RR ? fR.d : iR.c), uR.set("/lib.d.ts", KR.b), ZR.push("/globals.d.ts", "/lib.d.ts");
          const qR = rR.e(uR),
            wR = rR.g(qR, ZR, aR(), tR);
          iJ({
            AK: wR,
            fsMap: uR
          })
        }()
      }), []), (0, ZR.useEffect)((() => {
        var RR, yR;
        if (!qJ || !JR) return;
        const {
          AK: tR,
          fsMap: uR
        } = qJ;
        if (function(RR, JR, GR) {
            const yR = new Set;
            for (const [tR, uR] of Object.entries(GR)) {
              const GR = DJ(tR);
              yR.add(GR);
              const ZR = uR || "\n";
              JR.get(GR) !== ZR && (JR.set(GR, ZR), HJ(RR, GR, ZR))
            }
            for (const tR of [...JR.keys()]) "/globals.d.ts" === tR || "/lib.d.ts" === tR || tR.startsWith("/node_modules/") || tR.startsWith("/plugin-preview/") || yR.has(tR) || (JR.delete(tR), RR.getSourceFile(tR) && RR.deleteFile(tR))
          }(tR, uR, null !== FR && void 0 !== FR ? FR : {
            [AR.i]: GR || "\n"
          }), hR) return void HJ(tR, lJ, GJ || "\n");
        const ZR = null !== (RR = null === (yR = rJ.current) || void 0 === yR ? void 0 : yR.state.doc.toString()) && void 0 !== RR ? RR : GR;
        HJ(tR, lJ, ZR || "\n")
      }), [FR, TR, qJ, hR, GJ, lJ, GR, JR]), (0, ZR.useEffect)((() => {
        if (!qJ) return;
        const {
          AK: RR
        } = qJ;
        HJ(RR, lJ, (hR ? GJ : GR) || "\n")
      }), [GR, hR, GJ, lJ, qJ]), (0, ZR.useEffect)((() => () => {
        UJ.current && (UJ.current(), UJ.current = null)
      }), []), (0, ZR.useEffect)((() => (yJ(((RR, JR) => {
        if (hR) return !1;
        const GR = rJ.current,
          yR = eJ.current,
          tR = yR ? (0, CR.t)(yR.docKey) : null;
        if (!GR || !yR || aJ.current !== yR.clientID || RR !== tR) return !1;
        const uR = GR.state.doc.toString();
        return uR !== JR && GR.dispatch({
          changes: {
            from: 0,
            to: uR.length,
            insert: JR
          }
        }), !0
      })), () => {
        rJ.current = null, aJ.current = null, yJ(null)
      })), [yJ, hR]);
      const pJ = JR ? hR ? null : null !== TR && void 0 !== TR ? TR : AR.i : nJ.e,
        gJ = JJ(rJ, pJ);
      tJ(rJ, eR), (0, MR.f)("FormatCode", (() => {
        if (!qJ || !rJ.current || hR) return;
        const {
          AK: RR,
          fsMap: GR
        } = qJ, yR = RR.getSourceFile(lJ).getFullText();
        let tR = 0;
        if (JR && FR)
          for (const [JR, qR] of Object.entries(FR)) JR !== (null !== TR && void 0 !== TR ? TR : AR.i) && (tR += qR.length);
        const uR = function(RR, JR, GR, yR, tR) {
          const uR = RR.languageService.getFormattingEditsForDocument(yR, SJ);
          if (!uR.length) return lR.e.error("Code is already formatted.");
          uR.sort(((RR, JR) => JR.span.start - RR.span.start));
          let ZR = RR.getSourceFile(yR).getFullText();
          for (const qR of uR) ZR = ZR.slice(0, qR.span.start) + qR.ui + ZR.slice(qR.span.start + qR.span.length);
          return ZR !== (GR ? (0, XR.n)(ZR, tR) : (0, XR.k)(ZR)) ? lR.e.error("Formatting the code will go beyond the character limit.") : lR.e.value(ZR)
        }(RR, 0, JR, lJ, tR);
        if (uR.isError()) return void eR({
          message: uR.asError().message,
          type: "warning"
        });
        const ZR = uR.getValue();
        ZR && (rJ.current.dispatch({
          changes: {
            from: 0,
            to: yR.length,
            insert: ZR
          },
          selection: {
            anchor: ZR.length
          }
        }), HJ(RR, lJ, ZR), qR(ZR))
      }));
      const bJ = (0, ZR.useMemo)((() => {
        if (!qJ) return [];
        const {
          AK: RR,
          fsMap: GR
        } = qJ;
        ! function(RR, JR, GR, yR) {
          if (RR.getSourceFile(GR)) return;
          const tR = yR || "\n";
          JR.set(GR, tR), RR.createFile(GR, tR)
        }(RR, GR, lJ, (hR ? BJ.current : CJ.current) || "\n");
        const ZR = JR && oJ(hR ? null !== RJ && void 0 !== RJ ? RJ : "index.ts" : TR),
          qR = [(0, tR.c)({
            jsx: !1,
            typescript: ZR
          }), uR.f.highest(uR.e.domEventHandlers({
            keydown: RR => "Escape" === RR.key ? (AJ.current(), RR.stopPropagation(), !0) : (RR.stopPropagation(), !1)
          })), (0, yR.e)({
            override: [PJ(RR, lJ)]
          }), bR.o.fromClass(class {
            constructor(RR) {
              this.view = RR, this.timeout = null, this.scheduleParse()
            }
            update(RR) {
              (RR.docChanged || RR.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const RR = this.view.viewport.to;
                (0, cR.mb)(this.view.state, RR) || (0, cR.I)(this.view, RR, PR) || this.scheduleParse()
              }), IR))
            }
          }), ...sR, uR.e.lineWrapping, uR.l.define({
            create: mJ(RR, dR, lJ),
            update(JR, GR) {
              const yR = GR.effects.some((RR => RR.is(jJ)));
              return GR.docChanged || GR.selection || yR ? (HJ(RR, lJ, GR.state.doc.toString() || " "), mJ(RR, dR, lJ)(GR.state)) : JR
            },
            provide: RR => uR.u.computeN([RR], (JR => JR.field(RR)))
          }), (0, uR.t)(zJ(RR, lJ)), (0, nR.f)(cJ(JR, RR, lJ)), uR.m.fromClass(class {
            constructor(RR) {
              this.view = RR, this.searchPanel = null
            }
            update(RR) {
              const JR = RR.view.dom.querySelector(".cm-search");
              if (JR !== this.searchPanel) {
                if (this.searchPanel = JR, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (RR => {
                  "Escape" === RR.key && (0, LR.b)(this.view), RR.stopPropagation()
                }))
              }
            }
          })];
        uJ && !hR && qR.push(XJ(JR ? null !== TR && void 0 !== TR ? TR : AR.i : nJ.e, ZJ));
        const iR = eJ.current;
        if (iR && !hR) {
          qR.push(... function(RR, JR, GR, yR, tR) {
            let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const ZR = (0, CR.t)(GR),
              qR = bR.o.fromClass(class {
                constructor(RR) {
                  this.view = RR, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = xR.n.subscribe("codeCollab", (RR => {
                    RR.docKey === ZR && RR.type === CR.f.Updates && (RR.updates ? this.applyUpdates(RR.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(RR) {
                  const JR = JSON.parse(RR).map((RR => ({
                    clientID: RR.clientID,
                    changes: gR.ChangeSet.fromJSON(RR.changes)
                  })));
                  JR.length > 0 && (this.view.dispatch((0, pR.l)(this.view.state, JR)), tR && tR(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(RR) {
                  uR && (RR.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const RR = (0, pR.m)(this.view.state);
                  if (this.pushing || !RR.length) return;
                  const JR = Date.now() - this.lastPushTime;
                  if (JR < oR) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), oR - JR)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), DR);
                  const GR = (0, pR.i)(this.view.state),
                    tR = RR.map((RR => ({
                      clientID: RR.clientID,
                      changes: RR.changes.toJSON()
                    }))),
                    uR = JSON.stringify(tR);
                  uR.length <= CR.h ? vR.gameBridge.send("sendCodeCollab", {
                    bG: CR.d.Push,
                    vG: ZR,
                    OG: GR,
                    DG: uR
                  }) : (0, NR.postJsonWithMetricsCookiesAndJsonResponse)(`${yR.gsUrl}/code/collab-push`, OR.n["collab-push"].toBuffer({
                    gameNameWithVariation: yR.gameNameWithVariation,
                    lobbyName: yR.lobbyName,
                    docKey: ZR,
                    version: GR,
                    updates: uR
                  }), {
                    retries: 0
                  }).catch((RR => {
                    console.error("[CodeCollab] HTTP push failed", RR)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const RR = (0, pR.i)(this.view.state);
                  (0, NR.postJsonWithMetricsCookiesAndJsonResponse)(`${yR.gsUrl}/code/collab-pull`, OR.n["collab-pull"].toBuffer({
                    gameNameWithVariation: yR.gameNameWithVariation,
                    lobbyName: yR.lobbyName,
                    docKey: ZR,
                    fromVersion: RR
                  }), {
                    retries: 1
                  }).then((RR => {
                    this.destroyed || (RR.fullDoc ? xR.n.JK("codeCollabRejoin", {
                      docKey: ZR,
                      doc: RR.fullDoc,
                      version: RR.version
                    }) : this.applyUpdates(RR.updates))
                  })).catch((RR => {
                    console.error("[CodeCollab] Pull failed", RR)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const RR = Date.now();
                  if (RR - this.lastCursorSent < HR) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), HR)));
                  this.lastCursorSent = RR;
                  const JR = this.view.state.selection.main;
                  vR.gameBridge.send("sendCodeCollab", {
                    bG: CR.d.Cursor,
                    vG: ZR,
                    PG: JR.anchor,
                    IG: JR.head
                  })
                }
                destroy() {
                  this.destroyed = !0, xR.n.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, pR.e)({
              startVersion: RR,
              clientID: JR
            }), qR]
          }(fJ, VJ, iR.docKey, iR.httpConfig, (RR => {
            var JR;
            null === (JR = wJ.current) || void 0 === JR || JR.call(wJ, RR)
          }), wR));
          const RR = function(RR, JR) {
            const GR = (0, CR.t)(RR);
            return {
              extensions: [YR],
              connect(RR) {
                if (JR) {
                  const GR = JR.map((RR => zR.of({
                    playerId: RR.playerId,
                    playerName: RR.playerName,
                    colour: RR.colour,
                    anchor: RR.anchor,
                    head: RR.head,
                    lastMoved: Date.now()
                  })));
                  GR.length > 0 && RR.dispatch({
                    effects: GR
                  })
                }
                const yR = xR.n.subscribe("codeCollab", (JR => {
                    if (JR.docKey === GR)
                      if (JR.type === CR.f.RemoteCursor) RR.dispatch({
                        effects: zR.of({
                          playerId: JR.playerId,
                          playerName: JR.playerName,
                          colour: JR.colour,
                          anchor: JR.anchor,
                          head: JR.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (JR.type === CR.f.Presence) {
                      const GR = JSON.parse(JR.peers),
                        yR = new Set(GR.map((RR => RR.playerId))),
                        tR = RR.state.field(YR),
                        uR = [];
                      for (const [RR] of tR.cursors) yR.has(RR) || uR.push(SR.of(RR));
                      uR.length > 0 && RR.dispatch({
                        effects: uR
                      })
                    }
                  })),
                  tR = setInterval((() => {
                    RR.dom.isConnected ? RR.dispatch({
                      effects: jR.of(Date.now())
                    }) : clearInterval(tR)
                  }), mR);
                return () => {
                  xR.n.unsubscribe(yR), clearInterval(tR)
                }
              }
            }
          }(iR.docKey, iR.existingCursors);
          qR.push(...RR.extensions), WJ.current = RR.connect
        } else WJ.current = null;
        return qR
      }), [JR, qJ, dR, fJ, VJ, lJ, TR, hR, RJ, wR, uJ, ZJ]);
      if (!qJ || !kR && !hR) return (0, MJ.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, MJ.jsx)(UR.d, {})
      });
      const vJ = hR ? `plugin-${hR}-${null!==RJ&&void 0!==RJ?RJ:"index.ts"}` : kR ? `collab-${kR.clientID}` : `local-${JR}`;
      return (0, MJ.jsx)(uR.q, {
        value: hR ? null !== GJ && void 0 !== GJ ? GJ : "" : GR,
        onChange: qR,
        extensions: bJ,
        className: "CodeEditorContent",
        theme: ER ? LJ : "dark",
        editable: wR && !hR,
        basicSetup: dJ,
        onCreateEditor: RR => {
          var JR;
          rJ.current = RR, aJ.current = null !== (JR = null === kR || void 0 === kR ? void 0 : kR.clientID) && void 0 !== JR ? JR : null, gJ(RR), UJ.current && UJ.current(), WJ.current && (UJ.current = WJ.current(RR))
        }
      }, vJ)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);