export const id = 292;
export const ids = [292];
export const modules = {
  41302: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => FH
    });
    var tS = gS(41306),
      bS = gS(41349),
      XS = gS(41351),
      xS = gS(64),
      NS = gS(77),
      qS = gS(41372),
      uS = gS(41376),
      IS = gS(4887),
      fS = gS(41381),
      kS = gS(2031),
      aS = gS(41390),
      KS = gS(41409),
      jS = gS.n(KS),
      GS = gS(41359),
      CS = gS(41366),
      nS = gS(1419),
      PS = gS(36880),
      QS = gS(1327),
      DS = gS(36887),
      wS = gS(36764),
      hS = gS(1522),
      ZS = gS(680),
      JS = gS(1329),
      OS = gS(41459),
      dS = gS(41315),
      cS = gS(41322),
      vS = gS(2060),
      ES = gS(3870),
      LS = gS(31),
      YS = gS(1216);
    const AS = 1e4,
      yS = 250,
      VS = 250;
    var iS = gS(41334);
    const WS = 50,
      zS = 100;
    const US = 2e3,
      pS = dS.G.define(),
      sS = dS.G.define(),
      BS = dS.G.define();
    class MS extends cS.j {
      constructor(SS, HS, gS) {
        super(), this.colour = SS, this.playerName = HS, this.showName = gS
      }
      toDOM() {
        const SS = document.createElement("span");
        SS.className = "cm-remote-cursor-wrapper", SS.style.borderLeftColor = this.colour;
        const HS = document.createElement("span");
        if (HS.className = "cm-remote-cursor", HS.style.borderLeftColor = this.colour, SS.appendChild(HS), this.showName) {
          const HS = document.createElement("span");
          HS.className = "cm-remote-cursor-name", HS.style.backgroundColor = this.colour, HS.textContent = this.playerName, SS.appendChild(HS)
        }
        return SS
      }
      eq(SS) {
        return this.colour === SS.colour && this.playerName === SS.playerName && this.showName === SS.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function FS(SS, HS) {
      const gS = [],
        tS = [];
      for (const [, xS] of SS) {
        const SS = HS - xS.lastMoved < US;
        if (gS.push({
            pos: xS.head,
            decoration: cS.b.widget({
              widget: new MS(xS.colour, xS.playerName, SS),
              side: 1
            })
          }), xS.anchor !== xS.head) {
          const SS = Math.min(xS.anchor, xS.head),
            HS = Math.max(xS.anchor, xS.head);
          tS.push({
            from: SS,
            to: HS,
            decoration: cS.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${xS.colour}33`
              }
            })
          })
        }
      }
      const bS = new dS.w,
        XS = [];
      for (const xS of gS) XS.push({
        bias: 1,
        deco: xS.decoration,
        from: xS.pos,
        to: xS.pos
      });
      for (const xS of tS) XS.push({
        bias: 0,
        deco: xS.decoration,
        from: xS.from,
        to: xS.to
      });
      XS.sort(((SS, HS) => SS.from - HS.from || SS.deco.startSide - HS.deco.startSide || SS.bias - HS.bias));
      for (const xS of XS) bS.add(xS.from, xS.to, xS.deco);
      return bS.finish()
    }
    const RS = dS.H.define({
      create: () => ({
        cursors: new Map,
        KS: cS.b.none
      }),
      update(SS, HS) {
        let gS = SS.cursors,
          tS = !1;
        if (HS.docChanged) {
          const SS = new Map;
          for (const [tS, bS] of gS) SS.set(tS, {
            ...bS,
            anchor: HS.changes.mapPos(bS.anchor, 1),
            head: HS.changes.mapPos(bS.head, 1)
          });
          gS = SS, tS = !0
        }
        for (const bS of HS.effects)
          if (bS.is(pS)) {
            if (!Number.isInteger(bS.value.anchor) || !Number.isInteger(bS.value.head)) {
              console.warn(`Code Editor: ignored player ${bS.value.playerId}'s cursor at ${bS.value.anchor}-${bS.value.head}`);
              continue
            }
            const XS = HS.state.doc.length,
              xS = {
                ...bS.value,
                anchor: Math.min(bS.value.anchor, XS),
                head: Math.min(bS.value.head, XS)
              };
            gS === SS.cursors && (gS = new Map(gS)), gS.set(xS.playerId, xS), tS = !0
          } else bS.is(sS) ? gS.has(bS.value) && (gS === SS.cursors && (gS = new Map(gS)), gS.delete(bS.value), tS = !0) : bS.is(BS) && (tS = !0);
        return tS ? {
          cursors: gS,
          KS: FS(gS, Date.now())
        } : SS
      },
      provide: SS => cS.e.KS.from(SS, (SS => SS.KS))
    });
    const TS = dS.G.define(),
      oS = cS.b.mark({
        class: "CodeInsertFlash"
      }),
      lS = dS.H.define({
        create: () => cS.b.none,
        update(SS, HS) {
          let gS = SS.map(HS.changes);
          for (const tS of HS.effects) tS.is(TS) && (gS = tS.value ? cS.b.set(oS.range(tS.value.from, tS.value.to)) : cS.b.none);
          return gS
        },
        provide: SS => cS.e.KS.from(SS)
      }),
      mS = dS.H.define({
        create: () => !1,
        update: (SS, HS) => SS || void 0 !== HS.annotation(dS.N.userEvent) && !HS.annotation(dS.N.remote)
      }),
      eS = [lS, mS];

    function rS(SS) {
      return SS.field(mS)
    }
    const SH = 3e4;

    function HH(SS, HS) {
      const gS = (0, xS.useRef)(null);
      (0, xS.useEffect)((() => {
        var SS;
        (null === (SS = gS.current) || void 0 === SS ? void 0 : SS.path) !== HS && (gS.current = null)
      }), [HS]);
      const tS = SS => {
        var tS;
        const bS = gS.current;
        if (null === SS || void 0 === SS || !SS.dom.isConnected || !bS || bS.path !== HS) return;
        gS.current = null;
        const {
          ia: xS
        } = bS;
        if (xS && null !== xS.text && performance.now() - xS.at < SH) {
          const HS = function(SS, HS) {
            if (SS === HS) return null;
            const gS = Math.min(SS.length, HS.length);
            let tS = 0;
            for (; tS < gS && SS[tS] === HS[tS];) tS++;
            let bS = 0;
            for (; bS < gS - tS && SS[SS.length - 1 - bS] === HS[HS.length - 1 - bS];) bS++;
            return {
              from: tS,
              to: SS.length - bS,
              insert: HS.slice(tS, HS.length - bS)
            }
          }(SS.state.doc.toString(), xS.text);
          null !== HS && SS.dispatch({
            changes: HS,
            userEvent: xS.placed ? "input" : void 0
          })
        }
        const {
          doc: NS
        } = SS.state, qS = NS.line(Math.min(Math.max(bS.line, 1), NS.lines)), uS = qS.from + Math.min(null !== (tS = bS.column) && void 0 !== tS ? tS : 0, qS.length);
        SS.dispatch({
          selection: {
            anchor: uS
          },
          effects: XS.e.scrollIntoView(uS, {
            y: "center"
          }),
          userEvent: null !== xS && void 0 !== xS && xS.placed ? "select" : void 0
        }), !1 !== (null === xS || void 0 === xS ? void 0 : xS.focused) && SS.focus()
      };
      return (0, hS.g)("CodeEditorGoToLine", (HS => {
        gS.current = HS, tS(SS.current)
      })), (0, hS.g)("CodeEditorKeepEdits", (() => {
        const tS = SS.current;
        if (null === tS || !tS.dom.isConnected || null === HS) return;
        const {
          doc: bS,
          selection: XS
        } = tS.state, {
          head: xS
        } = XS.main, NS = bS.lineAt(xS), qS = {
          text: (0, OS.l)(tS.state).length > 0 ? bS.toString() : null,
          at: performance.now(),
          focused: tS.hasFocus,
          placed: rS(tS.state)
        };
        gS.current = {
          path: HS,
          line: NS.number,
          column: xS - NS.from,
          ia: qS
        }
      })), SS => {
        var bS;
        const XS = gS.current;
        !1 === (null === XS || void 0 === XS || null === (bS = XS.ia) || void 0 === bS ? void 0 : bS.focused) && XS.path === HS || SS.focus(), tS(SS)
      }
    }
    var gH = gS(4481),
      tH = gS(1281);

    function bH(SS, HS) {
      const {
        t: gS
      } = (0, tH.F)();
      (0, hS.g)("CodeEditorInsertText", (tS => {
        let {
          text: bS,
          focus: XS
        } = tS;
        const xS = SS.current,
          NS = null !== xS && void 0 !== xS && xS.dom.isConnected ? function(SS, HS) {
            if (!rS(SS)) return null;
            const {
              from: gS,
              to: tS
            } = SS.selection.main, bS = gS + HS.length;
            return {
              changes: {
                from: gS,
                to: tS,
                insert: HS
              },
              selection: {
                anchor: bS
              },
              effects: [cS.e.scrollIntoView(bS, {
                y: "center"
              }), TS.of({
                from: gS,
                to: bS
              })],
              userEvent: "input"
            }
          }(xS.state, bS) : null;
        null !== xS && null !== NS ? (xS.dispatch(NS), XS && xS.focus(), setTimeout((() => {
          xS.dom.isConnected && xS.dispatch({
            effects: TS.of(null)
          })
        }), 1500)) : (0, gH.e)(bS).then((() => {
          HS({
            message: gS("codeEditorWorld:pickCopied", {
              coords: bS
            }),
            type: "success"
          })
        }), (SS => {
          console.error("Pick could not copy the coordinates", SS), HS({
            message: gS("codeEditorWorld:pickPlaceCursor", {
              coords: bS
            }),
            type: "warning"
          })
        }))
      }))
    }
    var XH = gS(41345);
    const xH = "#e45649",
      NH = "#383a42",
      qH = "#696c77",
      uH = "#986801",
      IH = "#e5e5e6",
      fH = "#fafafa",
      kH = "#eaeaeb",
      aH = "#526fff",
      KH = cS.e.theme({
        "&": {
          color: NH,
          backgroundColor: fH
        },
        ".cm-content": {
          caretColor: aH
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: aH
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: NH
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
          backgroundColor: fH,
          color: qH,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: IH
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: kH
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: kH,
          borderBottomColor: kH
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: IH,
            color: NH
          }
        }
      }, {
        dark: !1
      }),
      jH = iS.c.define([{
        tag: XH.j.keyword,
        color: "#a626a4"
      }, {
        tag: [XH.j.name, XH.j.deleted, XH.j.character, XH.j.propertyName, XH.j.macroName],
        color: xH
      }, {
        tag: [XH.j.function(XH.j.variableName), XH.j.labelName],
        color: "#4078f2"
      }, {
        tag: [XH.j.color, XH.j.constant(XH.j.name), XH.j.standard(XH.j.name)],
        color: uH
      }, {
        tag: [XH.j.definition(XH.j.name), XH.j.separator],
        color: NH
      }, {
        tag: [XH.j.typeName, XH.j.className, XH.j.number, XH.j.changed, XH.j.annotation, XH.j.modifier, XH.j.self, XH.j.namespace],
        color: "#c18401"
      }, {
        tag: [XH.j.operator, XH.j.operatorKeyword, XH.j.url, XH.j.escape, XH.j.regexp, XH.j.link, XH.j.special(XH.j.string)],
        color: "#0184bc"
      }, {
        tag: [XH.j.meta, XH.j.comment],
        color: qH
      }, {
        tag: XH.j.strong,
        fontWeight: "bold"
      }, {
        tag: XH.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: XH.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: XH.j.link,
        color: qH,
        textDecoration: "underline"
      }, {
        tag: XH.j.heading,
        fontWeight: "bold",
        color: xH
      }, {
        tag: [XH.j.atom, XH.j.bool, XH.j.special(XH.j.variableName)],
        color: uH
      }, {
        tag: [XH.j.processingInstruction, XH.j.string, XH.j.inserted],
        color: "#50a14f"
      }, {
        tag: XH.j.invalid,
        color: "#000000"
      }]),
      GH = [KH, (0, iS.ib)(jH)];
    var CH = gS(36938),
      nH = gS(41465);
    const PH = XS.i.define(),
      QH = XS.m.define({
        create: () => !1,
        update(SS, HS) {
          for (const gS of HS.effects) gS.is(PH) && (SS = gS.value);
          return SS
        }
      }),
      DH = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function wH(SS, HS) {
      return [QH, XS.o.fromClass(class {
        constructor(SS) {
          this.view = SS, this.onDown = SS => {
            const HS = SS.target instanceof Element && null !== SS.target.closest(".cm-tooltip");
            0 !== SS.button || HS || this.view.state.field(QH) || this.view.dispatch({
              effects: PH.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(QH) && this.view.dispatch({
              effects: PH.of(!1)
            })
          }, SS.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), XS.x.compute(["selection", QH], (gS => function(SS, HS, gS) {
        const tS = SS.selection.main;
        return tS.empty || SS.field(QH) || SS.sliceDoc(tS.from, tS.to).trim().length < 2 ? null : {
          pos: tS.from,
          above: !0,
          create: SS => {
            const tS = document.createElement("div");
            tS.className = "CodeSelectionActions", tS.setAttribute("role", "toolbar"), tS.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: bS,
                label: XS
              }
              of DH) {
              if (!gS && "explain" !== bS) continue;
              const xS = document.createElement("button");
              xS.type = "button", xS.textContent = XS, "change" !== bS && (xS.title = nH.c, xS.dataset.asksAi = "true"), xS.addEventListener("mousedown", (SS => {
                SS.preventDefault()
              })), xS.addEventListener("click", (() => {
                const gS = SS.state.selection.main;
                if (gS.empty) return;
                const tS = {
                  action: bS,
                  path: HS,
                  fromLine: SS.state.doc.lineAt(gS.from).number,
                  toLine: SS.state.doc.lineAt(gS.to > gS.from && SS.state.doc.lineAt(gS.to).from === gS.to ? gS.to - 1 : gS.to).number,
                  text: SS.state.sliceDoc(gS.from, gS.to)
                };
                LS.k.cj("WorldCodeAiSelection", tS), SS.dispatch({
                  selection: {
                    anchor: gS.to
                  }
                })
              })), tS.appendChild(xS)
            }
            return {
              dom: tS
            }
          }
        }
      }(gS, SS, HS)))]
    }
    var hH = gS(1181);
    const ZH = new Set(["(", "{", "[", "<"]),
      JH = new Set([")", "}", "]", ">"]),
      OH = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function dH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function gS(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = [];
        for (const bS of SS) {
          let SS;
          SS = "punctuation" === bS.kind ? OH.text : "parameterName" === bS.kind ? OH.parameterName : HS, tS.push({
            str: bS.text,
            style: {
              color: SS,
              opacity: gS ? .5 : void 0
            }
          })
        }
        return tS
      }
      const tS = [];
      if (tS.push(...gS(SS.prefixDisplayParts, OH.text)), SS.parameters.length > 0) {
        tS.push("\n");
        for (let bS = 0; bS < SS.parameters.length; bS++) {
          const XS = SS.parameters[bS];
          tS.push("\t"), tS.push(...gS(XS.displayParts, OH.parameter, null !== HS && bS !== HS)), tS.push("\n")
        }
      }
      return tS.push(...gS(SS.suffixDisplayParts, OH.suffix)), SS.documentation && (tS.push("\n\n"), tS.push(...gS(SS.documentation, OH.docs))), tS
    }
    var cH = function(SS) {
      return SS[SS.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", SS[SS.DuplicateIdentifier = 2300] = "DuplicateIdentifier", SS
    }(cH || {});
    const vH = new Set([cH.DuplicateIdentifier]),
      EH = new Set([cH.VariableDefinedElsewhere]),
      LH = new Set([]),
      YH = "/index.js";

    function AH(SS) {
      return "/" + SS
    }

    function yH(SS, HS, gS) {
      SS.getSourceFile(HS) && SS.deleteFile(HS), SS.createFile(HS, gS)
    }

    function VH(SS) {
      return !!SS && ((0, DS.q)(SS) || (0, DS.n)(SS))
    }

    function iH(SS, HS, gS) {
      return () => {
        let tS = [...HS.languageService.getSemanticDiagnostics(gS), ...HS.languageService.getSyntacticDiagnostics(gS)];
        return tS = tS.filter((SS => !(0, ZS.K)(SS.start) && !(0, ZS.K)(SS.length) && !vH.has(SS.code))), SS || (tS = tS.filter((SS => !EH.has(SS.code)))), tS.map((SS => ({
          from: SS.start,
          to: SS.start + SS.length,
          message: "string" === typeof SS.messageText ? SS.messageText : SS.messageText.messageText,
          severity: LH.has(SS.code) ? "warning" : "error"
        })))
      }
    }

    function WH(SS, HS) {
      return gS => {
        var tS, bS;
        const XS = SS.languageService.getCompletionsAtPosition(HS, gS.pos, {});
        if (!XS) return {
          from: gS.pos,
          options: []
        };
        let xS = null !== (tS = null === (bS = XS.optionalReplacementSpan) || void 0 === bS ? void 0 : bS.start) && void 0 !== tS ? tS : gS.pos;
        if (!XS.optionalReplacementSpan) {
          const SS = gS.state.doc.sliceString(0, gS.pos);
          for (; xS > 0 && /[\w$]/.test(SS[xS - 1]);) xS--
        }
        return XS.entries = XS.entries.filter((SS => SS.kind !== jS().ScriptElementKind.warning)), {
          from: xS,
          options: XS.entries.map((tS => {
            var bS, XS, NS, qS;
            const uS = SS.languageService.getCompletionEntryDetails(HS, gS.pos, tS.name, {}, tS.source, {}, tS.data),
              IS = null !== (bS = null === (XS = tS.replacementSpan) || void 0 === XS ? void 0 : XS.start) && void 0 !== bS ? bS : xS,
              fS = tS.replacementSpan ? tS.replacementSpan.start + tS.replacementSpan.length : gS.pos,
              kS = null !== (NS = tS.insertText) && void 0 !== NS ? NS : tS.name;
            return {
              label: tS.name,
              detail: null === uS || void 0 === uS ? void 0 : uS.displayParts.map((SS => SS.text)).join(""),
              info: null === uS || void 0 === uS || null === (qS = uS.documentation) || void 0 === qS ? void 0 : qS.map((SS => SS.text)).join(""),
              apply: SS => {
                SS.dispatch({
                  changes: {
                    from: IS,
                    to: fS,
                    insert: kS
                  },
                  selection: {
                    anchor: IS + kS.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function zH(SS) {
      return HS => {
        const gS = document.createElement("div");
        gS.className = "CodeEditorTooltip";
        let tS = !1;
        return queueMicrotask((() => {
          tS || (NS.render((0, hH.jsx)(kS.c, {
            text: SS
          }), gS), HS.requestMeasure())
        })), {
          dom: gS,
          destroy() {
            tS = !0, queueMicrotask((() => {
              NS.unmountComponentAtNode(gS)
            }))
          }
        }
      }
    }

    function UH(SS, HS, gS) {
      return tS => {
        var bS;
        if (!HS) return [];
        const XS = null === (bS = tS.selection.HG[0]) || void 0 === bS ? void 0 : bS.head;
        if (void 0 === XS) return [];
        const xS = SS.languageService.getSignatureHelpItems(gS, XS, {});
        if (!xS || !xS.items.length) return [];
        const NS = xS.applicableSpan.start - xS.items[0].prefixDisplayParts.map((SS => SS.text)).join("").length,
          qS = xS.applicableSpan.start,
          uS = tS.doc.lineAt(XS),
          IS = uS.from,
          fS = Math.min(uS.to, XS);
        let kS, aS;
        return NS < IS ? (kS = IS, aS = fS) : (kS = NS, aS = qS), [{
          pos: kS,
          end: aS,
          above: !1,
          create: zH(dH(xS.items[0], xS.argumentIndex))
        }]
      }
    }

    function pH(SS, HS) {
      return (gS, tS, bS) => {
        const XS = SS.languageService.getQuickInfoAtPosition(HS, tS);
        if (!XS) return [];
        const xS = XS.textSpan.start,
          NS = XS.textSpan.start + XS.textSpan.length;
        if (tS < xS || tS >= NS) return [];
        if (XS.kind === jS().ScriptElementKind.memberFunctionElement || XS.kind === jS().ScriptElementKind.variableElement && "declare" === XS.kindModifiers) {
          const SS = XS.displayParts.findIndex((SS => "space" === SS.kind)); - 1 !== SS && (XS.displayParts = XS.displayParts.slice(SS));
          const HS = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            gS = XS.displayParts.findIndex((SS => "punctuation" === SS.kind && "(" === SS.text)); - 1 !== gS && (HS.prefixDisplayParts = XS.displayParts.slice(0, gS + 1), XS.displayParts = XS.displayParts.slice(gS + 1));
          const tS = XS.displayParts.findLastIndex((SS => "punctuation" === SS.kind && ")" === SS.text)); - 1 !== tS && (HS.suffixDisplayParts = XS.displayParts.slice(tS), XS.displayParts = XS.displayParts.slice(0, tS));
          let bS = 0,
            qS = [];
          for (const xS of XS.displayParts)
            if (ZH.has(xS.text) ? bS++ : JH.has(xS.text) && bS--, "lineBreak" !== xS.kind) {
              if ("space" === xS.kind) {
                if (0 === qS.length) continue;
                qS.push({
                  kind: "space",
                  text: " "
                })
              } else qS.push(xS);
              0 === bS && "," === xS.text && (HS.parameters.push({
                displayParts: qS
              }), qS = [])
            } return qS.length > 0 && HS.parameters.push({
            displayParts: qS
          }), HS.documentation = XS.documentation, [{
            pos: xS,
            end: NS,
            above: !0,
            create: zH(dH(HS))
          }]
        }
        const qS = [];
        for (const SS of XS.displayParts) qS.push({
          str: SS.text,
          style: {
            color: OH.text
          }
        });
        if (XS.documentation) {
          qS.push("\n\n");
          for (const SS of XS.documentation) qS.push({
            str: SS.text,
            style: {
              color: OH.docs
            }
          })
        }
        return [{
          pos: xS,
          end: NS,
          above: !0,
          create: zH(qS)
        }]
      }
    }
    const sH = {
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
      semicolons: jS().SemicolonPreference.Insert
    };
    const BH = XS.i.define(),
      MH = {
        lineNumbers: !0,
        tabSize: 4
      };

    function FH(SS) {
      let {
        isLobbyCode: HS,
        code: gS,
        onChange: NS,
        canEditCode: kS,
        setTemporaryMessage: KS,
        close: ZS,
        showTooltips: MS,
        lightMode: FS,
        collabState: TS,
        onRemoteDocChange: oS,
        files: lS,
        activePath: mS,
        pluginName: rS,
        pluginFile: SH,
        pluginSource: gH,
        setActiveDocReplacer: tH,
        showAiHints: XH,
        canAiChangeCode: xH = kS
      } = SS;
      const [NH, qH] = (0, xS.useState)(null), uH = null === TS || void 0 === TS ? void 0 : TS.version, IH = null === TS || void 0 === TS ? void 0 : TS.clientID, fH = (0, xS.useRef)({
        isLobbyCode: HS,
        files: lS,
        code: gS,
        activePath: mS
      }), kH = (0, xS.useRef)(oS);
      kH.current = oS;
      const aH = (0, xS.useRef)(null),
        KH = (0, xS.useRef)(TS);
      KH.current = TS;
      const jH = (0, xS.useRef)(null),
        nH = (0, xS.useRef)(null),
        PH = (0, xS.useRef)(null),
        QH = (0, xS.useRef)(ZS);
      QH.current = ZS;
      const DH = (0, xS.useRef)(gS);
      DH.current = gS;
      const ZH = (0, xS.useRef)(gH);
      ZH.current = gH;
      const JH = function(SS, HS, gS, tS) {
        return gS ? `/plugin-preview/${gS}/${null!==tS&&void 0!==tS?tS:"index.ts"}` : SS ? AH(null !== HS && void 0 !== HS ? HS : QS.i) : YH
      }(HS, mS, rS, SH);
      (0, xS.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: SS,
            files: HS,
            code: gS,
            activePath: tS
          } = fH.current, bS = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: jS().ModuleKind.ESNext,
            moduleResolution: jS().ModuleResolutionKind.Bundler,
            target: jS().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(PS.g).map((SS => [SS.specifier, [SS.typesVfsPath]])))
            }
          }, XS = new Map, xS = [];
          if (SS) {
            const SS = null !== HS && void 0 !== HS ? HS : {
              [QS.i]: gS || "\n"
            };
            for (const [HS, gS] of Object.entries(SS)) {
              const SS = AH(HS);
              XS.set(SS, gS || "\n"), xS.push(SS)
            }
            const bS = AH(null !== tS && void 0 !== tS ? tS : QS.i);
            XS.has(bS) ? XS.set(bS, gS || "\n") : (XS.set(bS, gS || "\n"), xS.push(bS)), XS.set("/node_modules/@bloxd/index.d.ts", IS.default), xS.push("/node_modules/@bloxd/index.d.ts");
            for (const HS of Object.values(PS.g)) {
              XS.set(HS.typesVfsPath, HS.types), xS.push(HS.typesVfsPath);
              for (const [SS, gS] of Object.entries(HS.files)) {
                const tS = `/plugin-preview/${HS.name}/${SS}`;
                XS.set(tS, gS || "\n"), xS.push(tS)
              }
            }
          } else XS.set(YH, gS || "\n"), xS.push(YH);
          XS.set("/globals.d.ts", SS ? uS.c : qS.d), XS.set("/lib.d.ts", fS.e), xS.push("/globals.d.ts", "/lib.d.ts");
          const NS = aS.e(XS),
            kS = aS.i(NS, xS, jS(), bS);
          qH({
            gG: kS,
            fsMap: XS
          })
        }()
      }), []), (0, xS.useEffect)((() => {
        var SS, tS;
        if (!NH || !HS) return;
        const {
          gG: bS,
          fsMap: XS
        } = NH;
        if (function(SS, HS, gS) {
            const tS = new Set;
            for (const [bS, XS] of Object.entries(gS)) {
              const gS = AH(bS);
              tS.add(gS);
              const xS = XS || "\n";
              HS.get(gS) !== xS && (HS.set(gS, xS), yH(SS, gS, xS))
            }
            for (const bS of [...HS.keys()]) "/globals.d.ts" === bS || "/lib.d.ts" === bS || bS.startsWith("/node_modules/") || bS.startsWith("/plugin-preview/") || tS.has(bS) || (HS.delete(bS), SS.getSourceFile(bS) && SS.deleteFile(bS))
          }(bS, XS, null !== lS && void 0 !== lS ? lS : {
            [QS.i]: gS || "\n"
          }), rS) return void yH(bS, JH, gH || "\n");
        const xS = null !== (SS = null === (tS = aH.current) || void 0 === tS ? void 0 : tS.state.doc.toString()) && void 0 !== SS ? SS : gS;
        yH(bS, JH, xS || "\n")
      }), [lS, mS, NH, rS, gH, JH, gS, HS]), (0, xS.useEffect)((() => {
        if (!NH) return;
        const {
          gG: SS
        } = NH;
        yH(SS, JH, (rS ? gH : gS) || "\n")
      }), [gS, rS, gH, JH, NH]), (0, xS.useEffect)((() => () => {
        nH.current && (nH.current(), nH.current = null)
      }), []), (0, xS.useEffect)((() => (tH(((SS, HS) => {
        if (rS) return !1;
        const gS = aH.current,
          tS = KH.current,
          bS = tS ? (0, DS.z)(tS.docKey) : null;
        if (!gS || !tS || jH.current !== tS.clientID || SS !== bS) return !1;
        const XS = gS.state.doc.toString();
        return XS !== HS && gS.dispatch({
          changes: {
            from: 0,
            to: XS.length,
            insert: HS
          }
        }), !0
      })), () => {
        aH.current = null, jH.current = null, tH(null)
      })), [tH, rS]);
      const OH = HS ? rS ? null : null !== mS && void 0 !== mS ? mS : QS.i : CH.e,
        dH = HH(aH, OH);
      bH(aH, KS), (0, hS.g)("FormatCode", (() => {
        if (!NH || !aH.current || rS) return;
        const {
          gG: SS,
          fsMap: gS
        } = NH, tS = SS.getSourceFile(JH).getFullText();
        let bS = 0;
        if (HS && lS)
          for (const [HS, NS] of Object.entries(lS)) HS !== (null !== mS && void 0 !== mS ? mS : QS.i) && (bS += NS.length);
        const XS = function(SS, HS, gS, tS, bS) {
          const XS = SS.languageService.getFormattingEditsForDocument(tS, sH);
          if (!XS.length) return JS.d.error("Code is already formatted.");
          XS.sort(((SS, HS) => HS.span.start - SS.span.start));
          let xS = SS.getSourceFile(tS).getFullText();
          for (const NS of XS) xS = xS.slice(0, NS.span.start) + NS.Bx + xS.slice(NS.span.start + NS.span.length);
          return xS !== (gS ? (0, wS.n)(xS, bS) : (0, wS.k)(xS)) ? JS.d.error("Formatting the code will go beyond the character limit.") : JS.d.value(xS)
        }(SS, 0, HS, JH, bS);
        if (XS.isError()) return void KS({
          message: XS.asError().message,
          type: "warning"
        });
        const xS = XS.getValue();
        xS && (aH.current.dispatch({
          changes: {
            from: 0,
            to: tS.length,
            insert: xS
          },
          selection: {
            anchor: xS.length
          }
        }), yH(SS, JH, xS), NS(xS))
      }));
      const cH = (0, xS.useMemo)((() => {
        if (!NH) return [];
        const {
          gG: SS,
          fsMap: gS
        } = NH;
        ! function(SS, HS, gS, tS) {
          if (SS.getSourceFile(gS)) return;
          const bS = tS || "\n";
          HS.set(gS, bS), SS.createFile(gS, bS)
        }(SS, gS, JH, (rS ? ZH.current : DH.current) || "\n");
        const xS = HS && VH(rS ? null !== SH && void 0 !== SH ? SH : "index.ts" : mS),
          NS = [(0, bS.e)({
            jsx: !1,
            typescript: xS
          }), XS.g.highest(XS.e.domEventHandlers({
            keydown: SS => "Escape" === SS.key ? (QH.current(), SS.stopPropagation(), !0) : (SS.stopPropagation(), !1)
          })), (0, tS.c)({
            override: [WH(SS, JH)]
          }), cS.i.fromClass(class {
            constructor(SS) {
              this.view = SS, this.timeout = null, this.scheduleParse()
            }
            update(SS) {
              (SS.docChanged || SS.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const SS = this.view.viewport.to;
                (0, iS.mb)(this.view.state, SS) || (0, iS.K)(this.view, SS, WS) || this.scheduleParse()
              }), zS))
            }
          }), ...eS, XS.e.lineWrapping, XS.m.define({
            create: UH(SS, MS, JH),
            update(HS, gS) {
              const tS = gS.effects.some((SS => SS.is(BH)));
              return gS.docChanged || gS.selection || tS ? (yH(SS, JH, gS.state.doc.toString() || " "), UH(SS, MS, JH)(gS.state)) : HS
            },
            provide: SS => XS.x.computeN([SS], (HS => HS.field(SS)))
          }), (0, XS.v)(pH(SS, JH)), (0, CS.h)(iH(HS, SS, JH)), XS.o.fromClass(class {
            constructor(SS) {
              this.view = SS, this.searchPanel = null
            }
            update(SS) {
              const HS = SS.view.dom.querySelector(".cm-search");
              if (HS !== this.searchPanel) {
                if (this.searchPanel = HS, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (SS => {
                  "Escape" === SS.key && (0, GS.e)(this.view), SS.stopPropagation()
                }))
              }
            }
          })];
        XH && !rS && NS.push(wH(HS ? null !== mS && void 0 !== mS ? mS : QS.i : CH.e, xH));
        const qS = KH.current;
        if (qS && !rS) {
          NS.push(... function(SS, HS, gS, tS, bS) {
            let XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const xS = (0, DS.z)(gS),
              NS = cS.i.fromClass(class {
                constructor(SS) {
                  this.view = SS, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = LS.k.subscribe("codeCollab", (SS => {
                    SS.docKey === xS && SS.type === DS.d.Updates && (SS.updates ? this.applyUpdates(SS.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(SS) {
                  const HS = JSON.parse(SS).map((SS => ({
                    clientID: SS.clientID,
                    changes: dS.ChangeSet.fromJSON(SS.changes)
                  })));
                  HS.length > 0 && (this.view.dispatch((0, OS.h)(this.view.state, HS)), bS && bS(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(SS) {
                  XS && (SS.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const SS = (0, OS.l)(this.view.state);
                  if (this.pushing || !SS.length) return;
                  const HS = Date.now() - this.lastPushTime;
                  if (HS < VS) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), VS - HS)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), AS);
                  const gS = (0, OS.e)(this.view.state),
                    bS = SS.map((SS => ({
                      clientID: SS.clientID,
                      changes: SS.changes.toJSON()
                    }))),
                    XS = JSON.stringify(bS);
                  XS.length <= DS.h ? vS.gameBridge.send("sendCodeCollab", {
                    BX: DS.b.Push,
                    MX: xS,
                    FX: gS,
                    oX: XS
                  }) : (0, YS.postJsonWithMetricsCookiesAndJsonResponse)(`${tS.gsUrl}/code/collab-push`, ES.v["collab-push"].toBuffer({
                    gameNameWithVariation: tS.gameNameWithVariation,
                    lobbyName: tS.lobbyName,
                    docKey: xS,
                    version: gS,
                    updates: XS
                  }), {
                    retries: 0
                  }).catch((SS => {
                    console.error("[CodeCollab] HTTP push failed", SS)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const SS = (0, OS.e)(this.view.state);
                  (0, YS.postJsonWithMetricsCookiesAndJsonResponse)(`${tS.gsUrl}/code/collab-pull`, ES.v["collab-pull"].toBuffer({
                    gameNameWithVariation: tS.gameNameWithVariation,
                    lobbyName: tS.lobbyName,
                    docKey: xS,
                    fromVersion: SS
                  }), {
                    retries: 1
                  }).then((SS => {
                    this.destroyed || (SS.fullDoc ? LS.k.cj("codeCollabRejoin", {
                      docKey: xS,
                      doc: SS.fullDoc,
                      version: SS.version
                    }) : this.applyUpdates(SS.updates))
                  })).catch((SS => {
                    console.error("[CodeCollab] Pull failed", SS)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const SS = Date.now();
                  if (SS - this.lastCursorSent < yS) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), yS)));
                  this.lastCursorSent = SS;
                  const HS = this.view.state.selection.main;
                  vS.gameBridge.send("sendCodeCollab", {
                    BX: DS.b.Cursor,
                    MX: xS,
                    rX: HS.anchor,
                    Sx: HS.head
                  })
                }
                destroy() {
                  this.destroyed = !0, LS.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, OS.c)({
              startVersion: SS,
              clientID: HS
            }), NS]
          }(uH, IH, qS.docKey, qS.httpConfig, (SS => {
            var HS;
            null === (HS = kH.current) || void 0 === HS || HS.call(kH, SS)
          }), kS));
          const SS = function(SS, HS) {
            const gS = (0, DS.z)(SS);
            return {
              extensions: [RS],
              connect(SS) {
                if (HS) {
                  const gS = HS.map((SS => pS.of({
                    playerId: SS.playerId,
                    playerName: SS.playerName,
                    colour: SS.colour,
                    anchor: SS.anchor,
                    head: SS.head,
                    lastMoved: Date.now()
                  })));
                  gS.length > 0 && SS.dispatch({
                    effects: gS
                  })
                }
                const tS = LS.k.subscribe("codeCollab", (HS => {
                    if (HS.docKey === gS)
                      if (HS.type === DS.d.RemoteCursor) SS.dispatch({
                        effects: pS.of({
                          playerId: HS.playerId,
                          playerName: HS.playerName,
                          colour: HS.colour,
                          anchor: HS.anchor,
                          head: HS.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (HS.type === DS.d.Presence) {
                      const gS = JSON.parse(HS.peers),
                        tS = new Set(gS.map((SS => SS.playerId))),
                        bS = SS.state.field(RS),
                        XS = [];
                      for (const [SS] of bS.cursors) tS.has(SS) || XS.push(sS.of(SS));
                      XS.length > 0 && SS.dispatch({
                        effects: XS
                      })
                    }
                  })),
                  bS = setInterval((() => {
                    SS.dom.isConnected ? SS.dispatch({
                      effects: BS.of(Date.now())
                    }) : clearInterval(bS)
                  }), US);
                return () => {
                  LS.k.unsubscribe(tS), clearInterval(bS)
                }
              }
            }
          }(qS.docKey, qS.existingCursors);
          NS.push(...SS.extensions), PH.current = SS.connect
        } else PH.current = null;
        return NS
      }), [HS, NH, MS, uH, IH, JH, mS, rS, SH, kS, XH, xH]);
      if (!NH || !TS && !rS) return (0, hH.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, hH.jsx)(nS.c, {})
      });
      const vH = rS ? `plugin-${rS}-${null!==SH&&void 0!==SH?SH:"index.ts"}` : TS ? `collab-${TS.clientID}` : `local-${HS}`;
      return (0, hH.jsx)(XS.s, {
        value: rS ? null !== gH && void 0 !== gH ? gH : "" : gS,
        onChange: NS,
        extensions: cH,
        className: "CodeEditorContent",
        theme: FS ? GH : "dark",
        editable: kS && !rS,
        basicSetup: MH,
        onCreateEditor: SS => {
          var HS;
          aH.current = SS, jH.current = null !== (HS = null === TS || void 0 === TS ? void 0 : TS.clientID) && void 0 !== HS ? HS : null, dH(SS), nH.current && nH.current(), PH.current && (nH.current = PH.current(SS))
        }
      }, vH)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);