export const id = 602;
export const ids = [602];
export const modules = {
  44806: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => ZB
    });
    var AH = LH(44814),
      rH = LH(44853),
      SH = LH(44856),
      hH = LH(45),
      tH = LH(69),
      zH = LH(44867),
      CH = LH(44871),
      EH = LH(5240),
      XH = LH(44874),
      GH = LH(1967),
      YH = LH(44881),
      uH = LH(44904),
      QH = LH.n(uH),
      WH = LH(44860),
      MH = LH(44863),
      xH = LH(1313),
      vH = LH(37708),
      PH = LH(1182),
      TH = LH(2624),
      UH = LH(37146),
      VH = LH(1450),
      OH = LH(619),
      bH = LH(1188),
      kH = LH(44945),
      mH = LH(44818),
      oH = LH(44823),
      IH = LH(1998),
      fH = LH(4113),
      lH = LH(18),
      KH = LH(1070);
    const cH = 1e4,
      eH = 250,
      qH = 250;
    var gH = LH(44839);
    const NH = 50,
      RH = 100;
    const jH = 2e3,
      nH = mH.B.define(),
      FH = mH.B.define(),
      DH = mH.B.define();
    class wH extends oH.r {
      constructor(HH, BH, LH) {
        super(), this.colour = HH, this.playerName = BH, this.showName = LH
      }
      toDOM() {
        const HH = document.createElement("span");
        HH.className = "cm-remote-cursor-wrapper", HH.style.borderLeftColor = this.colour;
        const BH = document.createElement("span");
        if (BH.className = "cm-remote-cursor", BH.style.borderLeftColor = this.colour, HH.appendChild(BH), this.showName) {
          const BH = document.createElement("span");
          BH.className = "cm-remote-cursor-name", BH.style.backgroundColor = this.colour, BH.textContent = this.playerName, HH.appendChild(BH)
        }
        return HH
      }
      eq(HH) {
        return this.colour === HH.colour && this.playerName === HH.playerName && this.showName === HH.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function ZH(HH, BH) {
      const LH = [],
        AH = [];
      for (const [, hH] of HH) {
        const HH = BH - hH.lastMoved < jH;
        if (LH.push({
            pos: hH.head,
            decoration: oH.e.widget({
              widget: new wH(hH.colour, hH.playerName, HH),
              side: 1
            })
          }), hH.anchor !== hH.head) {
          const HH = Math.min(hH.anchor, hH.head),
            BH = Math.max(hH.anchor, hH.head);
          AH.push({
            from: HH,
            to: BH,
            decoration: oH.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${hH.colour}33`
              }
            })
          })
        }
      }
      const rH = new mH.t,
        SH = [];
      for (const hH of LH) SH.push({
        bias: 1,
        deco: hH.decoration,
        from: hH.pos,
        to: hH.pos
      });
      for (const hH of AH) SH.push({
        bias: 0,
        deco: hH.decoration,
        from: hH.from,
        to: hH.to
      });
      SH.sort(((HH, BH) => HH.from - BH.from || HH.deco.startSide - BH.deco.startSide || HH.bias - BH.bias));
      for (const hH of SH) rH.add(hH.from, hH.to, hH.deco);
      return rH.finish()
    }
    const dH = mH.E.define({
      create: () => ({
        cursors: new Map,
        Gr: oH.e.none
      }),
      update(HH, BH) {
        let LH = HH.cursors,
          AH = !1;
        if (BH.docChanged) {
          const HH = new Map;
          for (const [AH, rH] of LH) HH.set(AH, {
            ...rH,
            anchor: BH.changes.mapPos(rH.anchor, 1),
            head: BH.changes.mapPos(rH.head, 1)
          });
          LH = HH, AH = !0
        }
        for (const rH of BH.effects)
          if (rH.is(nH)) {
            if (!Number.isInteger(rH.value.anchor) || !Number.isInteger(rH.value.head)) {
              console.warn(`Code Editor: ignored player ${rH.value.playerId}'s cursor at ${rH.value.anchor}-${rH.value.head}`);
              continue
            }
            const SH = BH.state.doc.length,
              hH = {
                ...rH.value,
                anchor: Math.min(rH.value.anchor, SH),
                head: Math.min(rH.value.head, SH)
              };
            LH === HH.cursors && (LH = new Map(LH)), LH.set(hH.playerId, hH), AH = !0
          } else rH.is(FH) ? LH.has(rH.value) && (LH === HH.cursors && (LH = new Map(LH)), LH.delete(rH.value), AH = !0) : rH.is(DH) && (AH = !0);
        return AH ? {
          cursors: LH,
          Gr: ZH(LH, Date.now())
        } : HH
      },
      provide: HH => oH.h.Gr.from(HH, (HH => HH.Gr))
    });
    const aH = mH.B.define(),
      sH = oH.e.mark({
        class: "CodeInsertFlash"
      }),
      JH = mH.E.define({
        create: () => oH.e.none,
        update(HH, BH) {
          let LH = HH.map(BH.changes);
          for (const AH of BH.effects) AH.is(aH) && (LH = AH.value ? oH.e.set(sH.range(AH.value.from, AH.value.to)) : oH.e.none);
          return LH
        },
        provide: HH => oH.h.Gr.from(HH)
      }),
      iH = mH.E.define({
        create: () => !1,
        update: (HH, BH) => HH || void 0 !== BH.annotation(mH.J.userEvent) && !BH.annotation(mH.J.remote)
      }),
      pH = [JH, iH];

    function yH(HH) {
      return HH.field(iH)
    }
    const HB = 3e4;

    function BB(HH, BH) {
      const LH = (0, hH.useRef)(null);
      (0, hH.useEffect)((() => {
        var HH;
        (null === (HH = LH.current) || void 0 === HH ? void 0 : HH.path) !== BH && (LH.current = null)
      }), [BH]);
      const AH = HH => {
        var AH;
        const rH = LH.current;
        if (null === HH || void 0 === HH || !HH.dom.isConnected || !rH || rH.path !== BH) return;
        LH.current = null;
        const {
          hX: hH
        } = rH;
        if (hH && null !== hH.text && performance.now() - hH.at < HB) {
          const BH = function(HH, BH) {
            if (HH === BH) return null;
            const LH = Math.min(HH.length, BH.length);
            let AH = 0;
            for (; AH < LH && HH[AH] === BH[AH];) AH++;
            let rH = 0;
            for (; rH < LH - AH && HH[HH.length - 1 - rH] === BH[BH.length - 1 - rH];) rH++;
            return {
              from: AH,
              to: HH.length - rH,
              insert: BH.slice(AH, BH.length - rH)
            }
          }(HH.state.doc.toString(), hH.text);
          null !== BH && HH.dispatch({
            changes: BH,
            userEvent: hH.placed ? "input" : void 0
          })
        }
        const {
          doc: tH
        } = HH.state, zH = tH.line(Math.min(Math.max(rH.line, 1), tH.lines)), CH = zH.from + Math.min(null !== (AH = rH.column) && void 0 !== AH ? AH : 0, zH.length);
        HH.dispatch({
          selection: {
            anchor: CH
          },
          effects: SH.d.scrollIntoView(CH, {
            y: "center"
          }),
          userEvent: null !== hH && void 0 !== hH && hH.placed ? "select" : void 0
        }), !1 !== (null === hH || void 0 === hH ? void 0 : hH.focused) && HH.focus()
      };
      return (0, VH.d)("CodeEditorGoToLine", (BH => {
        LH.current = BH, AH(HH.current)
      })), (0, VH.d)("CodeEditorKeepEdits", (() => {
        const AH = HH.current;
        if (null === AH || !AH.dom.isConnected || null === BH) return;
        const {
          doc: rH,
          selection: SH
        } = AH.state, {
          head: hH
        } = SH.main, tH = rH.lineAt(hH), zH = {
          text: (0, kH.j)(AH.state).length > 0 ? rH.toString() : null,
          at: performance.now(),
          focused: AH.hasFocus,
          placed: yH(AH.state)
        };
        LH.current = {
          path: BH,
          line: tH.number,
          column: hH - tH.from,
          hX: zH
        }
      })), HH => {
        var rH;
        const SH = LH.current;
        !1 === (null === SH || void 0 === SH || null === (rH = SH.hX) || void 0 === rH ? void 0 : rH.focused) && SH.path === BH || HH.focus(), AH(HH)
      }
    }
    var LB = LH(4740),
      AB = LH(1123);

    function rB(HH, BH) {
      const {
        t: LH
      } = (0, AB.B)();
      (0, VH.d)("CodeEditorInsertText", (AH => {
        let {
          text: rH,
          focus: SH
        } = AH;
        const hH = HH.current,
          tH = null !== hH && void 0 !== hH && hH.dom.isConnected ? function(HH, BH) {
            if (!yH(HH)) return null;
            const {
              from: LH,
              to: AH
            } = HH.selection.main, rH = LH + BH.length;
            return {
              changes: {
                from: LH,
                to: AH,
                insert: BH
              },
              selection: {
                anchor: rH
              },
              effects: [oH.h.scrollIntoView(rH, {
                y: "center"
              }), aH.of({
                from: LH,
                to: rH
              })],
              userEvent: "input"
            }
          }(hH.state, rH) : null;
        null !== hH && null !== tH ? (hH.dispatch(tH), SH && hH.focus(), setTimeout((() => {
          hH.dom.isConnected && hH.dispatch({
            effects: aH.of(null)
          })
        }), 1500)) : (0, LB.c)(rH).then((() => {
          BH({
            message: LH("codeEditorWorld:pickCopied", {
              coords: rH
            }),
            type: "success"
          })
        }), (HH => {
          console.error("Pick could not copy the coordinates", HH), BH({
            message: LH("codeEditorWorld:pickPlaceCursor", {
              coords: rH
            }),
            type: "warning"
          })
        }))
      }))
    }
    var SB = LH(44851);
    const hB = "#e45649",
      tB = "#383a42",
      zB = "#696c77",
      CB = "#986801",
      EB = "#e5e5e6",
      XB = "#fafafa",
      GB = "#eaeaeb",
      YB = "#526fff",
      uB = oH.h.theme({
        "&": {
          color: tB,
          backgroundColor: XB
        },
        ".cm-content": {
          caretColor: YB
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: YB
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: tB
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
          backgroundColor: XB,
          color: zB,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: EB
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: GB
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: GB,
          borderBottomColor: GB
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: EB,
            color: tB
          }
        }
      }, {
        dark: !1
      }),
      QB = gH.d.define([{
        tag: SB.j.keyword,
        color: "#a626a4"
      }, {
        tag: [SB.j.name, SB.j.deleted, SB.j.character, SB.j.propertyName, SB.j.macroName],
        color: hB
      }, {
        tag: [SB.j.function(SB.j.variableName), SB.j.labelName],
        color: "#4078f2"
      }, {
        tag: [SB.j.color, SB.j.constant(SB.j.name), SB.j.standard(SB.j.name)],
        color: CB
      }, {
        tag: [SB.j.definition(SB.j.name), SB.j.separator],
        color: tB
      }, {
        tag: [SB.j.typeName, SB.j.className, SB.j.number, SB.j.changed, SB.j.annotation, SB.j.modifier, SB.j.self, SB.j.namespace],
        color: "#c18401"
      }, {
        tag: [SB.j.operator, SB.j.operatorKeyword, SB.j.url, SB.j.escape, SB.j.regexp, SB.j.link, SB.j.special(SB.j.string)],
        color: "#0184bc"
      }, {
        tag: [SB.j.meta, SB.j.comment],
        color: zB
      }, {
        tag: SB.j.strong,
        fontWeight: "bold"
      }, {
        tag: SB.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: SB.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: SB.j.link,
        color: zB,
        textDecoration: "underline"
      }, {
        tag: SB.j.heading,
        fontWeight: "bold",
        color: hB
      }, {
        tag: [SB.j.atom, SB.j.bool, SB.j.special(SB.j.variableName)],
        color: CB
      }, {
        tag: [SB.j.processingInstruction, SB.j.string, SB.j.inserted],
        color: "#50a14f"
      }, {
        tag: SB.j.invalid,
        color: "#000000"
      }]),
      WB = [uB, (0, gH.kb)(QB)];
    var MB = LH(37774),
      xB = LH(44952);
    const vB = SH.k.define(),
      PB = SH.l.define({
        create: () => !1,
        update(HH, BH) {
          for (const LH of BH.effects) LH.is(vB) && (HH = LH.value);
          return HH
        }
      }),
      TB = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function UB(HH, BH) {
      return [PB, SH.n.fromClass(class {
        constructor(HH) {
          this.view = HH, this.onDown = HH => {
            const BH = HH.target instanceof Element && null !== HH.target.closest(".cm-tooltip");
            0 !== HH.button || BH || this.view.state.field(PB) || this.view.dispatch({
              effects: vB.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(PB) && this.view.dispatch({
              effects: vB.of(!1)
            })
          }, HH.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), SH.t.compute(["selection", PB], (LH => function(HH, BH, LH) {
        const AH = HH.selection.main;
        return AH.empty || HH.field(PB) || HH.sliceDoc(AH.from, AH.to).trim().length < 2 ? null : {
          pos: AH.from,
          above: !0,
          create: HH => {
            const AH = document.createElement("div");
            AH.className = "CodeSelectionActions", AH.setAttribute("role", "toolbar"), AH.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: rH,
                label: SH
              }
              of TB) {
              if (!LH && "explain" !== rH) continue;
              const hH = document.createElement("button");
              hH.type = "button", hH.textContent = SH, "change" !== rH && (hH.title = xB.d, hH.dataset.asksAi = "true"), hH.addEventListener("mousedown", (HH => {
                HH.preventDefault()
              })), hH.addEventListener("click", (() => {
                const LH = HH.state.selection.main;
                if (LH.empty) return;
                const AH = {
                  action: rH,
                  path: BH,
                  fromLine: HH.state.doc.lineAt(LH.from).number,
                  toLine: HH.state.doc.lineAt(LH.to > LH.from && HH.state.doc.lineAt(LH.to).from === LH.to ? LH.to - 1 : LH.to).number,
                  text: HH.state.sliceDoc(LH.from, LH.to)
                };
                lH.k.AX("WorldCodeAiSelection", AH), HH.dispatch({
                  selection: {
                    anchor: LH.to
                  }
                })
              })), AH.appendChild(hH)
            }
            return {
              dom: AH
            }
          }
        }
      }(LH, HH, BH)))]
    }
    var VB = LH(1225);
    const OB = new Set(["(", "{", "[", "<"]),
      bB = new Set([")", "}", "]", ">"]),
      kB = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function mB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function LH(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = [];
        for (const rH of HH) {
          let HH;
          HH = "punctuation" === rH.kind ? kB.text : "parameterName" === rH.kind ? kB.parameterName : BH, AH.push({
            str: rH.text,
            style: {
              color: HH,
              opacity: LH ? .5 : void 0
            }
          })
        }
        return AH
      }
      const AH = [];
      if (AH.push(...LH(HH.prefixDisplayParts, kB.text)), HH.parameters.length > 0) {
        AH.push("\n");
        for (let rH = 0; rH < HH.parameters.length; rH++) {
          const SH = HH.parameters[rH];
          AH.push("\t"), AH.push(...LH(SH.displayParts, kB.parameter, null !== BH && rH !== BH)), AH.push("\n")
        }
      }
      return AH.push(...LH(HH.suffixDisplayParts, kB.suffix)), HH.documentation && (AH.push("\n\n"), AH.push(...LH(HH.documentation, kB.docs))), AH
    }
    var oB = function(HH) {
      return HH[HH.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", HH[HH.DuplicateIdentifier = 2300] = "DuplicateIdentifier", HH
    }(oB || {});
    const IB = new Set([oB.DuplicateIdentifier]),
      fB = new Set([oB.VariableDefinedElsewhere]),
      lB = new Set([]),
      KB = "/index.js";

    function cB(HH) {
      return "/" + HH
    }

    function eB(HH, BH, LH) {
      HH.getSourceFile(BH) && HH.deleteFile(BH), HH.createFile(BH, LH)
    }

    function qB(HH) {
      return !!HH && ((0, TH.q)(HH) || (0, TH.p)(HH))
    }

    function gB(HH, BH, LH) {
      return () => {
        let AH = [...BH.languageService.getSemanticDiagnostics(LH), ...BH.languageService.getSyntacticDiagnostics(LH)];
        return AH = AH.filter((HH => !(0, OH.M)(HH.start) && !(0, OH.M)(HH.length) && !IB.has(HH.code))), HH || (AH = AH.filter((HH => !fB.has(HH.code)))), AH.map((HH => ({
          from: HH.start,
          to: HH.start + HH.length,
          message: "string" === typeof HH.messageText ? HH.messageText : HH.messageText.messageText,
          severity: lB.has(HH.code) ? "warning" : "error"
        })))
      }
    }

    function NB(HH, BH) {
      return LH => {
        var AH, rH;
        const SH = HH.languageService.getCompletionsAtPosition(BH, LH.pos, {});
        if (!SH) return {
          from: LH.pos,
          options: []
        };
        let hH = null !== (AH = null === (rH = SH.optionalReplacementSpan) || void 0 === rH ? void 0 : rH.start) && void 0 !== AH ? AH : LH.pos;
        if (!SH.optionalReplacementSpan) {
          const HH = LH.state.doc.sliceString(0, LH.pos);
          for (; hH > 0 && /[\w$]/.test(HH[hH - 1]);) hH--
        }
        return SH.entries = SH.entries.filter((HH => HH.kind !== QH().ScriptElementKind.warning)), {
          from: hH,
          options: SH.entries.map((AH => {
            var rH, SH, tH, zH;
            const CH = HH.languageService.getCompletionEntryDetails(BH, LH.pos, AH.name, {}, AH.source, {}, AH.data),
              EH = null !== (rH = null === (SH = AH.replacementSpan) || void 0 === SH ? void 0 : SH.start) && void 0 !== rH ? rH : hH,
              XH = AH.replacementSpan ? AH.replacementSpan.start + AH.replacementSpan.length : LH.pos,
              GH = null !== (tH = AH.insertText) && void 0 !== tH ? tH : AH.name;
            return {
              label: AH.name,
              detail: null === CH || void 0 === CH ? void 0 : CH.displayParts.map((HH => HH.text)).join(""),
              info: null === CH || void 0 === CH || null === (zH = CH.documentation) || void 0 === zH ? void 0 : zH.map((HH => HH.text)).join(""),
              apply: HH => {
                HH.dispatch({
                  changes: {
                    from: EH,
                    to: XH,
                    insert: GH
                  },
                  selection: {
                    anchor: EH + GH.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function RB(HH) {
      return BH => {
        const LH = document.createElement("div");
        LH.className = "CodeEditorTooltip";
        let AH = !1;
        return queueMicrotask((() => {
          AH || (tH.render((0, VB.jsx)(GH.b, {
            text: HH
          }), LH), BH.requestMeasure())
        })), {
          dom: LH,
          destroy() {
            AH = !0, queueMicrotask((() => {
              tH.unmountComponentAtNode(LH)
            }))
          }
        }
      }
    }

    function jB(HH, BH, LH) {
      return AH => {
        var rH;
        if (!BH) return [];
        const SH = null === (rH = AH.selection.rW[0]) || void 0 === rH ? void 0 : rH.head;
        if (void 0 === SH) return [];
        const hH = HH.languageService.getSignatureHelpItems(LH, SH, {});
        if (!hH || !hH.items.length) return [];
        const tH = hH.applicableSpan.start - hH.items[0].prefixDisplayParts.map((HH => HH.text)).join("").length,
          zH = hH.applicableSpan.start,
          CH = AH.doc.lineAt(SH),
          EH = CH.from,
          XH = Math.min(CH.to, SH);
        let GH, YH;
        return tH < EH ? (GH = EH, YH = XH) : (GH = tH, YH = zH), [{
          pos: GH,
          end: YH,
          above: !1,
          create: RB(mB(hH.items[0], hH.argumentIndex))
        }]
      }
    }

    function nB(HH, BH) {
      return (LH, AH, rH) => {
        const SH = HH.languageService.getQuickInfoAtPosition(BH, AH);
        if (!SH) return [];
        const hH = SH.textSpan.start,
          tH = SH.textSpan.start + SH.textSpan.length;
        if (AH < hH || AH >= tH) return [];
        if (SH.kind === QH().ScriptElementKind.memberFunctionElement || SH.kind === QH().ScriptElementKind.variableElement && "declare" === SH.kindModifiers) {
          const HH = SH.displayParts.findIndex((HH => "space" === HH.kind)); - 1 !== HH && (SH.displayParts = SH.displayParts.slice(HH));
          const BH = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            LH = SH.displayParts.findIndex((HH => "punctuation" === HH.kind && "(" === HH.text)); - 1 !== LH && (BH.prefixDisplayParts = SH.displayParts.slice(0, LH + 1), SH.displayParts = SH.displayParts.slice(LH + 1));
          const AH = SH.displayParts.findLastIndex((HH => "punctuation" === HH.kind && ")" === HH.text)); - 1 !== AH && (BH.suffixDisplayParts = SH.displayParts.slice(AH), SH.displayParts = SH.displayParts.slice(0, AH));
          let rH = 0,
            zH = [];
          for (const hH of SH.displayParts)
            if (OB.has(hH.text) ? rH++ : bB.has(hH.text) && rH--, "lineBreak" !== hH.kind) {
              if ("space" === hH.kind) {
                if (0 === zH.length) continue;
                zH.push({
                  kind: "space",
                  text: " "
                })
              } else zH.push(hH);
              0 === rH && "," === hH.text && (BH.parameters.push({
                displayParts: zH
              }), zH = [])
            } return zH.length > 0 && BH.parameters.push({
            displayParts: zH
          }), BH.documentation = SH.documentation, [{
            pos: hH,
            end: tH,
            above: !0,
            create: RB(mB(BH))
          }]
        }
        const zH = [];
        for (const HH of SH.displayParts) zH.push({
          str: HH.text,
          style: {
            color: kB.text
          }
        });
        if (SH.documentation) {
          zH.push("\n\n");
          for (const HH of SH.documentation) zH.push({
            str: HH.text,
            style: {
              color: kB.docs
            }
          })
        }
        return [{
          pos: hH,
          end: tH,
          above: !0,
          create: RB(zH)
        }]
      }
    }
    const FB = {
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
      semicolons: QH().SemicolonPreference.Insert
    };
    const DB = SH.k.define(),
      wB = {
        lineNumbers: !0,
        tabSize: 4
      };

    function ZB(HH) {
      let {
        isLobbyCode: BH,
        code: LH,
        onChange: tH,
        canEditCode: GH,
        setTemporaryMessage: uH,
        close: OH,
        showTooltips: wH,
        lightMode: ZH,
        collabState: aH,
        onRemoteDocChange: sH,
        files: JH,
        activePath: iH,
        pluginName: yH,
        pluginFile: HB,
        pluginSource: LB,
        setActiveDocReplacer: AB,
        showAiHints: SB,
        canAiChangeCode: hB = GH
      } = HH;
      const [tB, zB] = (0, hH.useState)(null), CB = null === aH || void 0 === aH ? void 0 : aH.version, EB = null === aH || void 0 === aH ? void 0 : aH.clientID, XB = (0, hH.useRef)({
        isLobbyCode: BH,
        files: JH,
        code: LH,
        activePath: iH
      }), GB = (0, hH.useRef)(sH);
      GB.current = sH;
      const YB = (0, hH.useRef)(null),
        uB = (0, hH.useRef)(aH);
      uB.current = aH;
      const QB = (0, hH.useRef)(null),
        xB = (0, hH.useRef)(null),
        vB = (0, hH.useRef)(null),
        PB = (0, hH.useRef)(OH);
      PB.current = OH;
      const TB = (0, hH.useRef)(LH);
      TB.current = LH;
      const OB = (0, hH.useRef)(LB);
      OB.current = LB;
      const bB = function(HH, BH, LH, AH) {
        return LH ? `/plugin-preview/${LH}/${null!==AH&&void 0!==AH?AH:"index.ts"}` : HH ? cB(null !== BH && void 0 !== BH ? BH : PH.g) : KB
      }(BH, iH, yH, HB);
      (0, hH.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: HH,
            files: BH,
            code: LH,
            activePath: AH
          } = XB.current, rH = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: QH().ModuleKind.ESNext,
            moduleResolution: QH().ModuleResolutionKind.Bundler,
            target: QH().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(vH.g).map((HH => [HH.specifier, [HH.typesVfsPath]])))
            }
          }, SH = new Map, hH = [];
          if (HH) {
            const HH = null !== BH && void 0 !== BH ? BH : {
              [PH.g]: LH || "\n"
            };
            for (const [BH, LH] of Object.entries(HH)) {
              const HH = cB(BH);
              SH.set(HH, LH || "\n"), hH.push(HH)
            }
            const rH = cB(null !== AH && void 0 !== AH ? AH : PH.g);
            SH.has(rH) ? SH.set(rH, LH || "\n") : (SH.set(rH, LH || "\n"), hH.push(rH)), SH.set("/node_modules/@bloxd/index.d.ts", EH.default), hH.push("/node_modules/@bloxd/index.d.ts");
            for (const BH of Object.values(vH.g)) {
              SH.set(BH.typesVfsPath, BH.types), hH.push(BH.typesVfsPath);
              for (const [HH, LH] of Object.entries(BH.files)) {
                const AH = `/plugin-preview/${BH.name}/${HH}`;
                SH.set(AH, LH || "\n"), hH.push(AH)
              }
            }
          } else SH.set(KB, LH || "\n"), hH.push(KB);
          SH.set("/globals.d.ts", HH ? CH.e : zH.c), SH.set("/lib.d.ts", XH.e), hH.push("/globals.d.ts", "/lib.d.ts");
          const tH = YH.c(SH),
            GH = YH.d(tH, hH, QH(), rH);
          zB({
            UX: GH,
            fsMap: SH
          })
        }()
      }), []), (0, hH.useEffect)((() => {
        var HH, AH;
        if (!tB || !BH) return;
        const {
          UX: rH,
          fsMap: SH
        } = tB;
        if (function(HH, BH, LH) {
            const AH = new Set;
            for (const [rH, SH] of Object.entries(LH)) {
              const LH = cB(rH);
              AH.add(LH);
              const hH = SH || "\n";
              BH.get(LH) !== hH && (BH.set(LH, hH), eB(HH, LH, hH))
            }
            for (const rH of [...BH.keys()]) "/globals.d.ts" === rH || "/lib.d.ts" === rH || rH.startsWith("/node_modules/") || rH.startsWith("/plugin-preview/") || AH.has(rH) || (BH.delete(rH), HH.getSourceFile(rH) && HH.deleteFile(rH))
          }(rH, SH, null !== JH && void 0 !== JH ? JH : {
            [PH.g]: LH || "\n"
          }), yH) return void eB(rH, bB, LB || "\n");
        const hH = null !== (HH = null === (AH = YB.current) || void 0 === AH ? void 0 : AH.state.doc.toString()) && void 0 !== HH ? HH : LH;
        eB(rH, bB, hH || "\n")
      }), [JH, iH, tB, yH, LB, bB, LH, BH]), (0, hH.useEffect)((() => {
        if (!tB) return;
        const {
          UX: HH
        } = tB;
        eB(HH, bB, (yH ? LB : LH) || "\n")
      }), [LH, yH, LB, bB, tB]), (0, hH.useEffect)((() => () => {
        xB.current && (xB.current(), xB.current = null)
      }), []), (0, hH.useEffect)((() => (AB(((HH, BH) => {
        if (yH) return !1;
        const LH = YB.current,
          AH = uB.current,
          rH = AH ? (0, TH.u)(AH.docKey) : null;
        if (!LH || !AH || QB.current !== AH.clientID || HH !== rH) return !1;
        const SH = LH.state.doc.toString();
        return SH !== BH && LH.dispatch({
          changes: {
            from: 0,
            to: SH.length,
            insert: BH
          }
        }), !0
      })), () => {
        YB.current = null, QB.current = null, AB(null)
      })), [AB, yH]);
      const kB = BH ? yH ? null : null !== iH && void 0 !== iH ? iH : PH.g : MB.b,
        mB = BB(YB, kB);
      rB(YB, uH), (0, VH.d)("FormatCode", (() => {
        if (!tB || !YB.current || yH) return;
        const {
          UX: HH,
          fsMap: LH
        } = tB, AH = HH.getSourceFile(bB).getFullText();
        let rH = 0;
        if (BH && JH)
          for (const [BH, tH] of Object.entries(JH)) BH !== (null !== iH && void 0 !== iH ? iH : PH.g) && (rH += tH.length);
        const SH = function(HH, BH, LH, AH, rH) {
          const SH = HH.languageService.getFormattingEditsForDocument(AH, FB);
          if (!SH.length) return bH.e.error("Code is already formatted.");
          SH.sort(((HH, BH) => BH.span.start - HH.span.start));
          let hH = HH.getSourceFile(AH).getFullText();
          for (const tH of SH) hH = hH.slice(0, tH.span.start) + tH.mE + hH.slice(tH.span.start + tH.span.length);
          return hH !== (LH ? (0, UH.l)(hH, rH) : (0, UH.h)(hH)) ? bH.e.error("Formatting the code will go beyond the character limit.") : bH.e.value(hH)
        }(HH, 0, BH, bB, rH);
        if (SH.isError()) return void uH({
          message: SH.asError().message,
          type: "warning"
        });
        const hH = SH.getValue();
        hH && (YB.current.dispatch({
          changes: {
            from: 0,
            to: AH.length,
            insert: hH
          },
          selection: {
            anchor: hH.length
          }
        }), eB(HH, bB, hH), tH(hH))
      }));
      const oB = (0, hH.useMemo)((() => {
        if (!tB) return [];
        const {
          UX: HH,
          fsMap: LH
        } = tB;
        ! function(HH, BH, LH, AH) {
          if (HH.getSourceFile(LH)) return;
          const rH = AH || "\n";
          BH.set(LH, rH), HH.createFile(LH, rH)
        }(HH, LH, bB, (yH ? OB.current : TB.current) || "\n");
        const hH = BH && qB(yH ? null !== HB && void 0 !== HB ? HB : "index.ts" : iH),
          tH = [(0, rH.d)({
            jsx: !1,
            typescript: hH
          }), SH.g.highest(SH.d.domEventHandlers({
            keydown: HH => "Escape" === HH.key ? (PB.current(), HH.stopPropagation(), !0) : (HH.stopPropagation(), !1)
          })), (0, AH.e)({
            override: [NB(HH, bB)]
          }), oH.p.fromClass(class {
            constructor(HH) {
              this.view = HH, this.timeout = null, this.scheduleParse()
            }
            update(HH) {
              (HH.docChanged || HH.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const HH = this.view.viewport.to;
                (0, gH.mb)(this.view.state, HH) || (0, gH.Q)(this.view, HH, NH) || this.scheduleParse()
              }), RH))
            }
          }), ...pH, SH.d.lineWrapping, SH.l.define({
            create: jB(HH, wH, bB),
            update(BH, LH) {
              const AH = LH.effects.some((HH => HH.is(DB)));
              return LH.docChanged || LH.selection || AH ? (eB(HH, bB, LH.state.doc.toString() || " "), jB(HH, wH, bB)(LH.state)) : BH
            },
            provide: HH => SH.t.computeN([HH], (BH => BH.field(HH)))
          }), (0, SH.q)(nB(HH, bB)), (0, MH.f)(gB(BH, HH, bB)), SH.n.fromClass(class {
            constructor(HH) {
              this.view = HH, this.searchPanel = null
            }
            update(HH) {
              const BH = HH.view.dom.querySelector(".cm-search");
              if (BH !== this.searchPanel) {
                if (this.searchPanel = BH, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (HH => {
                  "Escape" === HH.key && (0, WH.d)(this.view), HH.stopPropagation()
                }))
              }
            }
          })];
        SB && !yH && tH.push(UB(BH ? null !== iH && void 0 !== iH ? iH : PH.g : MB.b, hB));
        const zH = uB.current;
        if (zH && !yH) {
          tH.push(... function(HH, BH, LH, AH, rH) {
            let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const hH = (0, TH.u)(LH),
              tH = oH.p.fromClass(class {
                constructor(HH) {
                  this.view = HH, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = lH.k.subscribe("codeCollab", (HH => {
                    HH.docKey === hH && HH.type === TH.i.Updates && (HH.updates ? this.applyUpdates(HH.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(HH) {
                  const BH = JSON.parse(HH).map((HH => ({
                    clientID: HH.clientID,
                    changes: mH.ChangeSet.fromJSON(HH.changes)
                  })));
                  BH.length > 0 && (this.view.dispatch((0, kH.g)(this.view.state, BH)), rH && rH(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(HH) {
                  SH && (HH.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const HH = (0, kH.j)(this.view.state);
                  if (this.pushing || !HH.length) return;
                  const BH = Date.now() - this.lastPushTime;
                  if (BH < qH) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), qH - BH)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), cH);
                  const LH = (0, kH.f)(this.view.state),
                    rH = HH.map((HH => ({
                      clientID: HH.clientID,
                      changes: HH.changes.toJSON()
                    }))),
                    SH = JSON.stringify(rH);
                  SH.length <= TH.k ? IH.gameBridge.send("sendCodeCollab", {
                    dB: TH.e.Push,
                    aB: hH,
                    sB: LH,
                    pB: SH
                  }) : (0, KH.postJsonWithMetricsCookiesAndJsonResponse)(`${AH.gsUrl}/code/collab-push`, fH.s["collab-push"].toBuffer({
                    gameNameWithVariation: AH.gameNameWithVariation,
                    lobbyName: AH.lobbyName,
                    docKey: hH,
                    version: LH,
                    updates: SH
                  }), {
                    retries: 0
                  }).catch((HH => {
                    console.error("[CodeCollab] HTTP push failed", HH)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const HH = (0, kH.f)(this.view.state);
                  (0, KH.postJsonWithMetricsCookiesAndJsonResponse)(`${AH.gsUrl}/code/collab-pull`, fH.s["collab-pull"].toBuffer({
                    gameNameWithVariation: AH.gameNameWithVariation,
                    lobbyName: AH.lobbyName,
                    docKey: hH,
                    fromVersion: HH
                  }), {
                    retries: 1
                  }).then((HH => {
                    this.destroyed || (HH.fullDoc ? lH.k.AX("codeCollabRejoin", {
                      docKey: hH,
                      doc: HH.fullDoc,
                      version: HH.version
                    }) : this.applyUpdates(HH.updates))
                  })).catch((HH => {
                    console.error("[CodeCollab] Pull failed", HH)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const HH = Date.now();
                  if (HH - this.lastCursorSent < eH) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), eH)));
                  this.lastCursorSent = HH;
                  const BH = this.view.state.selection.main;
                  IH.gameBridge.send("sendCodeCollab", {
                    dB: TH.e.Cursor,
                    aB: hH,
                    LL: BH.anchor,
                    AL: BH.head
                  })
                }
                destroy() {
                  this.destroyed = !0, lH.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, kH.d)({
              startVersion: HH,
              clientID: BH
            }), tH]
          }(CB, EB, zH.docKey, zH.httpConfig, (HH => {
            var BH;
            null === (BH = GB.current) || void 0 === BH || BH.call(GB, HH)
          }), GH));
          const HH = function(HH, BH) {
            const LH = (0, TH.u)(HH);
            return {
              extensions: [dH],
              connect(HH) {
                if (BH) {
                  const LH = BH.map((HH => nH.of({
                    playerId: HH.playerId,
                    playerName: HH.playerName,
                    colour: HH.colour,
                    anchor: HH.anchor,
                    head: HH.head,
                    lastMoved: Date.now()
                  })));
                  LH.length > 0 && HH.dispatch({
                    effects: LH
                  })
                }
                const AH = lH.k.subscribe("codeCollab", (BH => {
                    if (BH.docKey === LH)
                      if (BH.type === TH.i.RemoteCursor) HH.dispatch({
                        effects: nH.of({
                          playerId: BH.playerId,
                          playerName: BH.playerName,
                          colour: BH.colour,
                          anchor: BH.anchor,
                          head: BH.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (BH.type === TH.i.Presence) {
                      const LH = JSON.parse(BH.peers),
                        AH = new Set(LH.map((HH => HH.playerId))),
                        rH = HH.state.field(dH),
                        SH = [];
                      for (const [HH] of rH.cursors) AH.has(HH) || SH.push(FH.of(HH));
                      SH.length > 0 && HH.dispatch({
                        effects: SH
                      })
                    }
                  })),
                  rH = setInterval((() => {
                    HH.dom.isConnected ? HH.dispatch({
                      effects: DH.of(Date.now())
                    }) : clearInterval(rH)
                  }), jH);
                return () => {
                  lH.k.unsubscribe(AH), clearInterval(rH)
                }
              }
            }
          }(zH.docKey, zH.existingCursors);
          tH.push(...HH.extensions), vB.current = HH.connect
        } else vB.current = null;
        return tH
      }), [BH, tB, wH, CB, EB, bB, iH, yH, HB, GH, SB, hB]);
      if (!tB || !aH && !yH) return (0, VB.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, VB.jsx)(xH.d, {})
      });
      const IB = yH ? `plugin-${yH}-${null!==HB&&void 0!==HB?HB:"index.ts"}` : aH ? `collab-${aH.clientID}` : `local-${BH}`;
      return (0, VB.jsx)(SH.o, {
        value: yH ? null !== LB && void 0 !== LB ? LB : "" : LH,
        onChange: tH,
        extensions: oB,
        className: "CodeEditorContent",
        theme: ZH ? WB : "dark",
        editable: GH && !yH,
        basicSetup: wB,
        onCreateEditor: HH => {
          var BH;
          YB.current = HH, QB.current = null !== (BH = null === aH || void 0 === aH ? void 0 : aH.clientID) && void 0 !== BH ? BH : null, mB(HH), xB.current && xB.current(), vB.current && (xB.current = vB.current(HH))
        }
      }, IB)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);