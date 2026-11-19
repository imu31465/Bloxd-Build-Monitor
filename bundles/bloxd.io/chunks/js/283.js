export const id = 283;
export const ids = [283];
export const modules = {
  40378: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => kr
    });
    var FY = DY(40387),
      AY = DY(40435),
      IY = DY(40439),
      RY = DY(61),
      OY = DY(76),
      gY = DY(40452),
      aY = DY(40457),
      vY = DY(4340),
      uY = DY(40466),
      sY = DY(1778),
      iY = DY(40472),
      yY = DY(40484),
      QY = DY.n(yY),
      oY = DY(40443),
      WY = DY(40447),
      EY = DY(1337),
      mY = DY(36237),
      VY = DY(1244),
      SY = DY(36244),
      lY = DY(36140),
      TY = DY(1430),
      eY = DY(625),
      NY = DY(1253),
      BY = DY(40529),
      cY = DY(40395),
      KY = DY(40398),
      HY = DY(1808),
      zY = DY(3366),
      ZY = DY(25),
      CY = DY(1159);
    const fY = 1e4,
      jY = 250,
      hY = 250;
    var dY = DY(40417);
    const JY = 50,
      MY = 100;
    const wY = 2e3,
      bY = cY.E.define(),
      XY = cY.E.define(),
      qY = cY.E.define();
    class pY extends KY.n {
      constructor(YY, rY, DY) {
        super(), this.colour = YY, this.playerName = rY, this.showName = DY
      }
      toDOM() {
        const YY = document.createElement("span");
        YY.className = "cm-remote-cursor-wrapper", YY.style.borderLeftColor = this.colour;
        const rY = document.createElement("span");
        if (rY.className = "cm-remote-cursor", rY.style.borderLeftColor = this.colour, YY.appendChild(rY), this.showName) {
          const rY = document.createElement("span");
          rY.className = "cm-remote-cursor-name", rY.style.backgroundColor = this.colour, rY.textContent = this.playerName, YY.appendChild(rY)
        }
        return YY
      }
      eq(YY) {
        return this.colour === YY.colour && this.playerName === YY.playerName && this.showName === YY.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function kY(YY, rY) {
      const DY = [],
        FY = [];
      for (const [, RY] of YY) {
        const YY = rY - RY.lastMoved < wY;
        if (DY.push({
            pos: RY.head,
            decoration: KY.b.widget({
              widget: new pY(RY.colour, RY.playerName, YY),
              side: 1
            })
          }), RY.anchor !== RY.head) {
          const YY = Math.min(RY.anchor, RY.head),
            rY = Math.max(RY.anchor, RY.head);
          FY.push({
            from: YY,
            to: rY,
            decoration: KY.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${RY.colour}33`
              }
            })
          })
        }
      }
      const AY = new cY.z,
        IY = [];
      for (const RY of DY) IY.push({
        bias: 1,
        deco: RY.decoration,
        from: RY.pos,
        to: RY.pos
      });
      for (const RY of FY) IY.push({
        bias: 0,
        deco: RY.decoration,
        from: RY.from,
        to: RY.to
      });
      IY.sort(((YY, rY) => YY.from - rY.from || YY.deco.startSide - rY.deco.startSide || YY.bias - rY.bias));
      for (const RY of IY) AY.add(RY.from, RY.to, RY.deco);
      return AY.finish()
    }
    const GY = cY.G.define({
      create: () => ({
        cursors: new Map,
        CA: KY.b.none
      }),
      update(YY, rY) {
        let DY = YY.cursors,
          FY = !1;
        if (rY.docChanged) {
          const YY = new Map;
          for (const [FY, AY] of DY) YY.set(FY, {
            ...AY,
            anchor: rY.changes.mapPos(AY.anchor, 1),
            head: rY.changes.mapPos(AY.head, 1)
          });
          DY = YY, FY = !0
        }
        for (const AY of rY.effects)
          if (AY.is(bY)) {
            if (!Number.isInteger(AY.value.anchor) || !Number.isInteger(AY.value.head)) {
              console.warn(`Code Editor: ignored player ${AY.value.playerId}'s cursor at ${AY.value.anchor}-${AY.value.head}`);
              continue
            }
            const IY = rY.state.doc.length,
              RY = {
                ...AY.value,
                anchor: Math.min(AY.value.anchor, IY),
                head: Math.min(AY.value.head, IY)
              };
            DY === YY.cursors && (DY = new Map(DY)), DY.set(RY.playerId, RY), FY = !0
          } else AY.is(XY) ? DY.has(AY.value) && (DY === YY.cursors && (DY = new Map(DY)), DY.delete(AY.value), FY = !0) : AY.is(qY) && (FY = !0);
        return FY ? {
          cursors: DY,
          CA: kY(DY, Date.now())
        } : YY
      },
      provide: YY => KY.e.CA.from(YY, (YY => YY.CA))
    });
    const xY = cY.E.define(),
      nY = KY.b.mark({
        class: "CodeInsertFlash"
      }),
      PY = cY.G.define({
        create: () => KY.b.none,
        update(YY, rY) {
          let DY = YY.map(rY.changes);
          for (const FY of rY.effects) FY.is(xY) && (DY = FY.value ? KY.b.set(nY.range(FY.value.from, FY.value.to)) : KY.b.none);
          return DY
        },
        provide: YY => KY.e.CA.from(YY)
      }),
      UY = cY.G.define({
        create: () => !1,
        update: (YY, rY) => YY || void 0 !== rY.annotation(cY.N.userEvent) && !rY.annotation(cY.N.remote)
      }),
      LY = [PY, UY];

    function tY(YY) {
      return YY.field(UY)
    }
    const Yr = 3e4;

    function rr(YY, rY) {
      const DY = (0, RY.useRef)(null);
      (0, RY.useEffect)((() => {
        var YY;
        (null === (YY = DY.current) || void 0 === YY ? void 0 : YY.path) !== rY && (DY.current = null)
      }), [rY]);
      const FY = YY => {
        var FY;
        const AY = DY.current;
        if (null === YY || void 0 === YY || !YY.dom.isConnected || !AY || AY.path !== rY) return;
        DY.current = null;
        const {
          Mi: RY
        } = AY;
        if (RY && null !== RY.text && performance.now() - RY.at < Yr) {
          const rY = function(YY, rY) {
            if (YY === rY) return null;
            const DY = Math.min(YY.length, rY.length);
            let FY = 0;
            for (; FY < DY && YY[FY] === rY[FY];) FY++;
            let AY = 0;
            for (; AY < DY - FY && YY[YY.length - 1 - AY] === rY[rY.length - 1 - AY];) AY++;
            return {
              from: FY,
              to: YY.length - AY,
              insert: rY.slice(FY, rY.length - AY)
            }
          }(YY.state.doc.toString(), RY.text);
          null !== rY && YY.dispatch({
            changes: rY,
            userEvent: RY.placed ? "input" : void 0
          })
        }
        const {
          doc: OY
        } = YY.state, gY = OY.line(Math.min(Math.max(AY.line, 1), OY.lines)), aY = gY.from + Math.min(null !== (FY = AY.column) && void 0 !== FY ? FY : 0, gY.length);
        YY.dispatch({
          selection: {
            anchor: aY
          },
          effects: IY.b.scrollIntoView(aY, {
            y: "center"
          }),
          userEvent: null !== RY && void 0 !== RY && RY.placed ? "select" : void 0
        }), !1 !== (null === RY || void 0 === RY ? void 0 : RY.focused) && YY.focus()
      };
      return (0, TY.g)("CodeEditorGoToLine", (rY => {
        DY.current = rY, FY(YY.current)
      })), (0, TY.g)("CodeEditorKeepEdits", (() => {
        const FY = YY.current;
        if (null === FY || !FY.dom.isConnected || null === rY) return;
        const {
          doc: AY,
          selection: IY
        } = FY.state, {
          head: RY
        } = IY.main, OY = AY.lineAt(RY), gY = {
          text: (0, BY.k)(FY.state).length > 0 ? AY.toString() : null,
          at: performance.now(),
          focused: FY.hasFocus,
          placed: tY(FY.state)
        };
        DY.current = {
          path: rY,
          line: OY.number,
          column: RY - OY.from,
          Mi: gY
        }
      })), YY => {
        var AY;
        const IY = DY.current;
        !1 === (null === IY || void 0 === IY || null === (AY = IY.Mi) || void 0 === AY ? void 0 : AY.focused) && IY.path === rY || YY.focus(), FY(YY)
      }
    }
    var Dr = DY(3918),
      Fr = DY(1211);

    function Ar(YY, rY) {
      const {
        t: DY
      } = (0, Fr.C)();
      (0, TY.g)("CodeEditorInsertText", (FY => {
        let {
          text: AY,
          focus: IY
        } = FY;
        const RY = YY.current,
          OY = null !== RY && void 0 !== RY && RY.dom.isConnected ? function(YY, rY) {
            if (!tY(YY)) return null;
            const {
              from: DY,
              to: FY
            } = YY.selection.main, AY = DY + rY.length;
            return {
              changes: {
                from: DY,
                to: FY,
                insert: rY
              },
              selection: {
                anchor: AY
              },
              effects: [KY.e.scrollIntoView(AY, {
                y: "center"
              }), xY.of({
                from: DY,
                to: AY
              })],
              userEvent: "input"
            }
          }(RY.state, AY) : null;
        null !== RY && null !== OY ? (RY.dispatch(OY), IY && RY.focus(), setTimeout((() => {
          RY.dom.isConnected && RY.dispatch({
            effects: xY.of(null)
          })
        }), 1500)) : (0, Dr.b)(AY).then((() => {
          rY({
            message: DY("codeEditorWorld:pickCopied", {
              coords: AY
            }),
            type: "success"
          })
        }), (YY => {
          console.error("Pick could not copy the coordinates", YY), rY({
            message: DY("codeEditorWorld:pickPlaceCursor", {
              coords: AY
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Ir = DY(40431);
    const Rr = "#e45649",
      Or = "#383a42",
      gr = "#696c77",
      ar = "#986801",
      vr = "#e5e5e6",
      ur = "#fafafa",
      sr = "#eaeaeb",
      ir = "#526fff",
      yr = KY.e.theme({
        "&": {
          color: Or,
          backgroundColor: ur
        },
        ".cm-content": {
          caretColor: ir
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: ir
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Or
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
          backgroundColor: ur,
          color: gr,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: vr
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: sr
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: sr,
          borderBottomColor: sr
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: vr,
            color: Or
          }
        }
      }, {
        dark: !1
      }),
      Qr = dY.e.define([{
        tag: Ir.j.keyword,
        color: "#a626a4"
      }, {
        tag: [Ir.j.name, Ir.j.deleted, Ir.j.character, Ir.j.propertyName, Ir.j.macroName],
        color: Rr
      }, {
        tag: [Ir.j.function(Ir.j.variableName), Ir.j.labelName],
        color: "#4078f2"
      }, {
        tag: [Ir.j.color, Ir.j.constant(Ir.j.name), Ir.j.standard(Ir.j.name)],
        color: ar
      }, {
        tag: [Ir.j.definition(Ir.j.name), Ir.j.separator],
        color: Or
      }, {
        tag: [Ir.j.typeName, Ir.j.className, Ir.j.number, Ir.j.changed, Ir.j.annotation, Ir.j.modifier, Ir.j.self, Ir.j.namespace],
        color: "#c18401"
      }, {
        tag: [Ir.j.operator, Ir.j.operatorKeyword, Ir.j.url, Ir.j.escape, Ir.j.regexp, Ir.j.link, Ir.j.special(Ir.j.string)],
        color: "#0184bc"
      }, {
        tag: [Ir.j.meta, Ir.j.comment],
        color: gr
      }, {
        tag: Ir.j.strong,
        fontWeight: "bold"
      }, {
        tag: Ir.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ir.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ir.j.link,
        color: gr,
        textDecoration: "underline"
      }, {
        tag: Ir.j.heading,
        fontWeight: "bold",
        color: Rr
      }, {
        tag: [Ir.j.atom, Ir.j.bool, Ir.j.special(Ir.j.variableName)],
        color: ar
      }, {
        tag: [Ir.j.processingInstruction, Ir.j.string, Ir.j.inserted],
        color: "#50a14f"
      }, {
        tag: Ir.j.invalid,
        color: "#000000"
      }]),
      or = [yr, (0, dY.nb)(Qr)];
    var Wr = DY(36293),
      Er = DY(40534);
    const mr = IY.g.define(),
      Vr = IY.h.define({
        create: () => !1,
        update(YY, rY) {
          for (const DY of rY.effects) DY.is(mr) && (YY = DY.value);
          return YY
        }
      }),
      Sr = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function lr(YY, rY) {
      return [Vr, IY.j.fromClass(class {
        constructor(YY) {
          this.view = YY, this.onDown = YY => {
            const rY = YY.target instanceof Element && null !== YY.target.closest(".cm-tooltip");
            0 !== YY.button || rY || this.view.state.field(Vr) || this.view.dispatch({
              effects: mr.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Vr) && this.view.dispatch({
              effects: mr.of(!1)
            })
          }, YY.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), IY.s.compute(["selection", Vr], (DY => function(YY, rY, DY) {
        const FY = YY.selection.main;
        return FY.empty || YY.field(Vr) || YY.sliceDoc(FY.from, FY.to).trim().length < 2 ? null : {
          pos: FY.from,
          above: !0,
          create: YY => {
            const FY = document.createElement("div");
            FY.className = "CodeSelectionActions", FY.setAttribute("role", "toolbar"), FY.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: AY,
                label: IY
              }
              of Sr) {
              if (!DY && "explain" !== AY) continue;
              const RY = document.createElement("button");
              RY.type = "button", RY.textContent = IY, "change" !== AY && (RY.title = Er.c, RY.dataset.asksAi = "true"), RY.addEventListener("mousedown", (YY => {
                YY.preventDefault()
              })), RY.addEventListener("click", (() => {
                const DY = YY.state.selection.main;
                if (DY.empty) return;
                const FY = {
                  action: AY,
                  path: rY,
                  fromLine: YY.state.doc.lineAt(DY.from).number,
                  toLine: YY.state.doc.lineAt(DY.to > DY.from && YY.state.doc.lineAt(DY.to).from === DY.to ? DY.to - 1 : DY.to).number,
                  text: YY.state.sliceDoc(DY.from, DY.to)
                };
                ZY.g.vo("WorldCodeAiSelection", FY), YY.dispatch({
                  selection: {
                    anchor: DY.to
                  }
                })
              })), FY.appendChild(RY)
            }
            return {
              dom: FY
            }
          }
        }
      }(DY, YY, rY)))]
    }
    var Tr = DY(1125);
    const er = new Set(["(", "{", "[", "<"]),
      Nr = new Set([")", "}", "]", ">"]),
      Br = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function cr(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function DY(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = [];
        for (const AY of YY) {
          let YY;
          YY = "punctuation" === AY.kind ? Br.text : "parameterName" === AY.kind ? Br.parameterName : rY, FY.push({
            str: AY.text,
            style: {
              color: YY,
              opacity: DY ? .5 : void 0
            }
          })
        }
        return FY
      }
      const FY = [];
      if (FY.push(...DY(YY.prefixDisplayParts, Br.text)), YY.parameters.length > 0) {
        FY.push("\n");
        for (let AY = 0; AY < YY.parameters.length; AY++) {
          const IY = YY.parameters[AY];
          FY.push("\t"), FY.push(...DY(IY.displayParts, Br.parameter, null !== rY && AY !== rY)), FY.push("\n")
        }
      }
      return FY.push(...DY(YY.suffixDisplayParts, Br.suffix)), YY.documentation && (FY.push("\n\n"), FY.push(...DY(YY.documentation, Br.docs))), FY
    }
    var Kr = function(YY) {
      return YY[YY.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", YY[YY.DuplicateIdentifier = 2300] = "DuplicateIdentifier", YY
    }(Kr || {});
    const Hr = new Set([Kr.DuplicateIdentifier]),
      zr = new Set([Kr.VariableDefinedElsewhere]),
      Zr = new Set([]),
      Cr = "/index.js";

    function fr(YY) {
      return "/" + YY
    }

    function jr(YY, rY, DY) {
      YY.getSourceFile(rY) && YY.deleteFile(rY), YY.createFile(rY, DY)
    }

    function hr(YY) {
      return !!YY && ((0, SY.o)(YY) || (0, SY.k)(YY))
    }

    function dr(YY, rY, DY) {
      return () => {
        let FY = [...rY.languageService.getSemanticDiagnostics(DY), ...rY.languageService.getSyntacticDiagnostics(DY)];
        return FY = FY.filter((YY => !(0, eY.H)(YY.start) && !(0, eY.H)(YY.length) && !Hr.has(YY.code))), YY || (FY = FY.filter((YY => !zr.has(YY.code)))), FY.map((YY => ({
          from: YY.start,
          to: YY.start + YY.length,
          message: "string" === typeof YY.messageText ? YY.messageText : YY.messageText.messageText,
          severity: Zr.has(YY.code) ? "warning" : "error"
        })))
      }
    }

    function Jr(YY, rY) {
      return DY => {
        var FY, AY;
        const IY = YY.languageService.getCompletionsAtPosition(rY, DY.pos, {});
        if (!IY) return {
          from: DY.pos,
          options: []
        };
        let RY = null !== (FY = null === (AY = IY.optionalReplacementSpan) || void 0 === AY ? void 0 : AY.start) && void 0 !== FY ? FY : DY.pos;
        if (!IY.optionalReplacementSpan) {
          const YY = DY.state.doc.sliceString(0, DY.pos);
          for (; RY > 0 && /[\w$]/.test(YY[RY - 1]);) RY--
        }
        return IY.entries = IY.entries.filter((YY => YY.kind !== QY().ScriptElementKind.warning)), {
          from: RY,
          options: IY.entries.map((FY => {
            var AY, IY, OY, gY;
            const aY = YY.languageService.getCompletionEntryDetails(rY, DY.pos, FY.name, {}, FY.source, {}, FY.data),
              vY = null !== (AY = null === (IY = FY.replacementSpan) || void 0 === IY ? void 0 : IY.start) && void 0 !== AY ? AY : RY,
              uY = FY.replacementSpan ? FY.replacementSpan.start + FY.replacementSpan.length : DY.pos,
              sY = null !== (OY = FY.insertText) && void 0 !== OY ? OY : FY.name;
            return {
              label: FY.name,
              detail: null === aY || void 0 === aY ? void 0 : aY.displayParts.map((YY => YY.text)).join(""),
              info: null === aY || void 0 === aY || null === (gY = aY.documentation) || void 0 === gY ? void 0 : gY.map((YY => YY.text)).join(""),
              apply: YY => {
                YY.dispatch({
                  changes: {
                    from: vY,
                    to: uY,
                    insert: sY
                  },
                  selection: {
                    anchor: vY + sY.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Mr(YY) {
      return rY => {
        const DY = document.createElement("div");
        DY.className = "CodeEditorTooltip";
        let FY = !1;
        return queueMicrotask((() => {
          FY || (OY.render((0, Tr.jsx)(sY.b, {
            text: YY
          }), DY), rY.requestMeasure())
        })), {
          dom: DY,
          destroy() {
            FY = !0, queueMicrotask((() => {
              OY.unmountComponentAtNode(DY)
            }))
          }
        }
      }
    }

    function wr(YY, rY, DY) {
      return FY => {
        var AY;
        if (!rY) return [];
        const IY = null === (AY = FY.selection.ws[0]) || void 0 === AY ? void 0 : AY.head;
        if (void 0 === IY) return [];
        const RY = YY.languageService.getSignatureHelpItems(DY, IY, {});
        if (!RY || !RY.items.length) return [];
        const OY = RY.applicableSpan.start - RY.items[0].prefixDisplayParts.map((YY => YY.text)).join("").length,
          gY = RY.applicableSpan.start,
          aY = FY.doc.lineAt(IY),
          vY = aY.from,
          uY = Math.min(aY.to, IY);
        let sY, iY;
        return OY < vY ? (sY = vY, iY = uY) : (sY = OY, iY = gY), [{
          pos: sY,
          end: iY,
          above: !1,
          create: Mr(cr(RY.items[0], RY.argumentIndex))
        }]
      }
    }

    function br(YY, rY) {
      return (DY, FY, AY) => {
        const IY = YY.languageService.getQuickInfoAtPosition(rY, FY);
        if (!IY) return [];
        const RY = IY.textSpan.start,
          OY = IY.textSpan.start + IY.textSpan.length;
        if (FY < RY || FY >= OY) return [];
        if (IY.kind === QY().ScriptElementKind.memberFunctionElement || IY.kind === QY().ScriptElementKind.variableElement && "declare" === IY.kindModifiers) {
          const YY = IY.displayParts.findIndex((YY => "space" === YY.kind)); - 1 !== YY && (IY.displayParts = IY.displayParts.slice(YY));
          const rY = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            DY = IY.displayParts.findIndex((YY => "punctuation" === YY.kind && "(" === YY.text)); - 1 !== DY && (rY.prefixDisplayParts = IY.displayParts.slice(0, DY + 1), IY.displayParts = IY.displayParts.slice(DY + 1));
          const FY = IY.displayParts.findLastIndex((YY => "punctuation" === YY.kind && ")" === YY.text)); - 1 !== FY && (rY.suffixDisplayParts = IY.displayParts.slice(FY), IY.displayParts = IY.displayParts.slice(0, FY));
          let AY = 0,
            gY = [];
          for (const RY of IY.displayParts)
            if (er.has(RY.text) ? AY++ : Nr.has(RY.text) && AY--, "lineBreak" !== RY.kind) {
              if ("space" === RY.kind) {
                if (0 === gY.length) continue;
                gY.push({
                  kind: "space",
                  text: " "
                })
              } else gY.push(RY);
              0 === AY && "," === RY.text && (rY.parameters.push({
                displayParts: gY
              }), gY = [])
            } return gY.length > 0 && rY.parameters.push({
            displayParts: gY
          }), rY.documentation = IY.documentation, [{
            pos: RY,
            end: OY,
            above: !0,
            create: Mr(cr(rY))
          }]
        }
        const gY = [];
        for (const YY of IY.displayParts) gY.push({
          str: YY.text,
          style: {
            color: Br.text
          }
        });
        if (IY.documentation) {
          gY.push("\n\n");
          for (const YY of IY.documentation) gY.push({
            str: YY.text,
            style: {
              color: Br.docs
            }
          })
        }
        return [{
          pos: RY,
          end: OY,
          above: !0,
          create: Mr(gY)
        }]
      }
    }
    const Xr = {
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
      semicolons: QY().SemicolonPreference.Insert
    };
    const qr = IY.g.define(),
      pr = {
        lineNumbers: !0,
        tabSize: 4
      };

    function kr(YY) {
      let {
        isLobbyCode: rY,
        code: DY,
        onChange: OY,
        canEditCode: sY,
        setTemporaryMessage: yY,
        close: eY,
        showTooltips: pY,
        lightMode: kY,
        collabState: xY,
        onRemoteDocChange: nY,
        files: PY,
        activePath: UY,
        pluginName: tY,
        pluginFile: Yr,
        pluginSource: Dr,
        setActiveDocReplacer: Fr,
        showAiHints: Ir,
        canAiChangeCode: Rr = sY
      } = YY;
      const [Or, gr] = (0, RY.useState)(null), ar = null === xY || void 0 === xY ? void 0 : xY.version, vr = null === xY || void 0 === xY ? void 0 : xY.clientID, ur = (0, RY.useRef)({
        isLobbyCode: rY,
        files: PY,
        code: DY,
        activePath: UY
      }), sr = (0, RY.useRef)(nY);
      sr.current = nY;
      const ir = (0, RY.useRef)(null),
        yr = (0, RY.useRef)(xY);
      yr.current = xY;
      const Qr = (0, RY.useRef)(null),
        Er = (0, RY.useRef)(null),
        mr = (0, RY.useRef)(null),
        Vr = (0, RY.useRef)(eY);
      Vr.current = eY;
      const Sr = (0, RY.useRef)(DY);
      Sr.current = DY;
      const er = (0, RY.useRef)(Dr);
      er.current = Dr;
      const Nr = function(YY, rY, DY, FY) {
        return DY ? `/plugin-preview/${DY}/${null!==FY&&void 0!==FY?FY:"index.ts"}` : YY ? fr(null !== rY && void 0 !== rY ? rY : VY.e) : Cr
      }(rY, UY, tY, Yr);
      (0, RY.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: YY,
            files: rY,
            code: DY,
            activePath: FY
          } = ur.current, AY = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: QY().ModuleKind.ESNext,
            moduleResolution: QY().ModuleResolutionKind.Bundler,
            target: QY().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(mY.f).map((YY => [YY.specifier, [YY.typesVfsPath]])))
            }
          }, IY = new Map, RY = [];
          if (YY) {
            const YY = null !== rY && void 0 !== rY ? rY : {
              [VY.e]: DY || "\n"
            };
            for (const [rY, DY] of Object.entries(YY)) {
              const YY = fr(rY);
              IY.set(YY, DY || "\n"), RY.push(YY)
            }
            const AY = fr(null !== FY && void 0 !== FY ? FY : VY.e);
            IY.has(AY) ? IY.set(AY, DY || "\n") : (IY.set(AY, DY || "\n"), RY.push(AY)), IY.set("/node_modules/@bloxd/index.d.ts", vY.default), RY.push("/node_modules/@bloxd/index.d.ts");
            for (const rY of Object.values(mY.f)) {
              IY.set(rY.typesVfsPath, rY.types), RY.push(rY.typesVfsPath);
              for (const [YY, DY] of Object.entries(rY.files)) {
                const FY = `/plugin-preview/${rY.name}/${YY}`;
                IY.set(FY, DY || "\n"), RY.push(FY)
              }
            }
          } else IY.set(Cr, DY || "\n"), RY.push(Cr);
          IY.set("/globals.d.ts", YY ? aY.b : gY.c), IY.set("/lib.d.ts", uY.e), RY.push("/globals.d.ts", "/lib.d.ts");
          const OY = iY.b(IY),
            sY = iY.e(OY, RY, QY(), AY);
          gr({
            bs: sY,
            fsMap: IY
          })
        }()
      }), []), (0, RY.useEffect)((() => {
        var YY, FY;
        if (!Or || !rY) return;
        const {
          bs: AY,
          fsMap: IY
        } = Or;
        if (function(YY, rY, DY) {
            const FY = new Set;
            for (const [AY, IY] of Object.entries(DY)) {
              const DY = fr(AY);
              FY.add(DY);
              const RY = IY || "\n";
              rY.get(DY) !== RY && (rY.set(DY, RY), jr(YY, DY, RY))
            }
            for (const AY of [...rY.keys()]) "/globals.d.ts" === AY || "/lib.d.ts" === AY || AY.startsWith("/node_modules/") || AY.startsWith("/plugin-preview/") || FY.has(AY) || (rY.delete(AY), YY.getSourceFile(AY) && YY.deleteFile(AY))
          }(AY, IY, null !== PY && void 0 !== PY ? PY : {
            [VY.e]: DY || "\n"
          }), tY) return void jr(AY, Nr, Dr || "\n");
        const RY = null !== (YY = null === (FY = ir.current) || void 0 === FY ? void 0 : FY.state.doc.toString()) && void 0 !== YY ? YY : DY;
        jr(AY, Nr, RY || "\n")
      }), [PY, UY, Or, tY, Dr, Nr, DY, rY]), (0, RY.useEffect)((() => {
        if (!Or) return;
        const {
          bs: YY
        } = Or;
        jr(YY, Nr, (tY ? Dr : DY) || "\n")
      }), [DY, tY, Dr, Nr, Or]), (0, RY.useEffect)((() => () => {
        Er.current && (Er.current(), Er.current = null)
      }), []), (0, RY.useEffect)((() => (Fr(((YY, rY) => {
        if (tY) return !1;
        const DY = ir.current,
          FY = yr.current,
          AY = FY ? (0, SY.u)(FY.docKey) : null;
        if (!DY || !FY || Qr.current !== FY.clientID || YY !== AY) return !1;
        const IY = DY.state.doc.toString();
        return IY !== rY && DY.dispatch({
          changes: {
            from: 0,
            to: IY.length,
            insert: rY
          }
        }), !0
      })), () => {
        ir.current = null, Qr.current = null, Fr(null)
      })), [Fr, tY]);
      const Br = rY ? tY ? null : null !== UY && void 0 !== UY ? UY : VY.e : Wr.b,
        cr = rr(ir, Br);
      Ar(ir, yY), (0, TY.g)("FormatCode", (() => {
        if (!Or || !ir.current || tY) return;
        const {
          bs: YY,
          fsMap: DY
        } = Or, FY = YY.getSourceFile(Nr).getFullText();
        let AY = 0;
        if (rY && PY)
          for (const [rY, OY] of Object.entries(PY)) rY !== (null !== UY && void 0 !== UY ? UY : VY.e) && (AY += OY.length);
        const IY = function(YY, rY, DY, FY, AY) {
          const IY = YY.languageService.getFormattingEditsForDocument(FY, Xr);
          if (!IY.length) return NY.e.error("Code is already formatted.");
          IY.sort(((YY, rY) => rY.span.start - YY.span.start));
          let RY = YY.getSourceFile(FY).getFullText();
          for (const OY of IY) RY = RY.slice(0, OY.span.start) + OY.FO + RY.slice(OY.span.start + OY.span.length);
          return RY !== (DY ? (0, lY.h)(RY, AY) : (0, lY.g)(RY)) ? NY.e.error("Formatting the code will go beyond the character limit.") : NY.e.value(RY)
        }(YY, 0, rY, Nr, AY);
        if (IY.isError()) return void yY({
          message: IY.asError().message,
          type: "warning"
        });
        const RY = IY.getValue();
        RY && (ir.current.dispatch({
          changes: {
            from: 0,
            to: FY.length,
            insert: RY
          },
          selection: {
            anchor: RY.length
          }
        }), jr(YY, Nr, RY), OY(RY))
      }));
      const Kr = (0, RY.useMemo)((() => {
        if (!Or) return [];
        const {
          bs: YY,
          fsMap: DY
        } = Or;
        ! function(YY, rY, DY, FY) {
          if (YY.getSourceFile(DY)) return;
          const AY = FY || "\n";
          rY.set(DY, AY), YY.createFile(DY, AY)
        }(YY, DY, Nr, (tY ? er.current : Sr.current) || "\n");
        const RY = rY && hr(tY ? null !== Yr && void 0 !== Yr ? Yr : "index.ts" : UY),
          OY = [(0, AY.e)({
            jsx: !1,
            typescript: RY
          }), IY.e.highest(IY.b.domEventHandlers({
            keydown: YY => "Escape" === YY.key ? (Vr.current(), YY.stopPropagation(), !0) : (YY.stopPropagation(), !1)
          })), (0, FY.c)({
            override: [Jr(YY, Nr)]
          }), KY.k.fromClass(class {
            constructor(YY) {
              this.view = YY, this.timeout = null, this.scheduleParse()
            }
            update(YY) {
              (YY.docChanged || YY.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const YY = this.view.viewport.to;
                (0, dY.rb)(this.view.state, YY) || (0, dY.L)(this.view, YY, JY) || this.scheduleParse()
              }), MY))
            }
          }), ...LY, IY.b.lineWrapping, IY.h.define({
            create: wr(YY, pY, Nr),
            update(rY, DY) {
              const FY = DY.effects.some((YY => YY.is(qr)));
              return DY.docChanged || DY.selection || FY ? (jr(YY, Nr, DY.state.doc.toString() || " "), wr(YY, pY, Nr)(DY.state)) : rY
            },
            provide: YY => IY.s.computeN([YY], (rY => rY.field(YY)))
          }), (0, IY.o)(br(YY, Nr)), (0, WY.e)(dr(rY, YY, Nr)), IY.j.fromClass(class {
            constructor(YY) {
              this.view = YY, this.searchPanel = null
            }
            update(YY) {
              const rY = YY.view.dom.querySelector(".cm-search");
              if (rY !== this.searchPanel) {
                if (this.searchPanel = rY, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (YY => {
                  "Escape" === YY.key && (0, oY.b)(this.view), YY.stopPropagation()
                }))
              }
            }
          })];
        Ir && !tY && OY.push(lr(rY ? null !== UY && void 0 !== UY ? UY : VY.e : Wr.b, Rr));
        const gY = yr.current;
        if (gY && !tY) {
          OY.push(... function(YY, rY, DY, FY, AY) {
            let IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const RY = (0, SY.u)(DY),
              OY = KY.k.fromClass(class {
                constructor(YY) {
                  this.view = YY, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = ZY.g.subscribe("codeCollab", (YY => {
                    YY.docKey === RY && YY.type === SY.d.Updates && (YY.updates ? this.applyUpdates(YY.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(YY) {
                  const rY = JSON.parse(YY).map((YY => ({
                    clientID: YY.clientID,
                    changes: cY.ChangeSet.fromJSON(YY.changes)
                  })));
                  rY.length > 0 && (this.view.dispatch((0, BY.g)(this.view.state, rY)), AY && AY(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(YY) {
                  IY && (YY.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const YY = (0, BY.k)(this.view.state);
                  if (this.pushing || !YY.length) return;
                  const rY = Date.now() - this.lastPushTime;
                  if (rY < hY) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), hY - rY)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), fY);
                  const DY = (0, BY.f)(this.view.state),
                    AY = YY.map((YY => ({
                      clientID: YY.clientID,
                      changes: YY.changes.toJSON()
                    }))),
                    IY = JSON.stringify(AY);
                  IY.length <= SY.f ? HY.gameBridge.send("sendCodeCollab", {
                    br: SY.c.Push,
                    Xr: RY,
                    qr: DY,
                    nr: IY
                  }) : (0, CY.postJsonWithMetricsCookiesAndJsonResponse)(`${FY.gsUrl}/code/collab-push`, zY.o["collab-push"].toBuffer({
                    gameNameWithVariation: FY.gameNameWithVariation,
                    lobbyName: FY.lobbyName,
                    docKey: RY,
                    version: DY,
                    updates: IY
                  }), {
                    retries: 0
                  }).catch((YY => {
                    console.error("[CodeCollab] HTTP push failed", YY)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const YY = (0, BY.f)(this.view.state);
                  (0, CY.postJsonWithMetricsCookiesAndJsonResponse)(`${FY.gsUrl}/code/collab-pull`, zY.o["collab-pull"].toBuffer({
                    gameNameWithVariation: FY.gameNameWithVariation,
                    lobbyName: FY.lobbyName,
                    docKey: RY,
                    fromVersion: YY
                  }), {
                    retries: 1
                  }).then((YY => {
                    this.destroyed || (YY.fullDoc ? ZY.g.vo("codeCollabRejoin", {
                      docKey: RY,
                      doc: YY.fullDoc,
                      version: YY.version
                    }) : this.applyUpdates(YY.updates))
                  })).catch((YY => {
                    console.error("[CodeCollab] Pull failed", YY)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const YY = Date.now();
                  if (YY - this.lastCursorSent < jY) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), jY)));
                  this.lastCursorSent = YY;
                  const rY = this.view.state.selection.main;
                  HY.gameBridge.send("sendCodeCollab", {
                    br: SY.c.Cursor,
                    Xr: RY,
                    tr: rY.anchor,
                    YD: rY.head
                  })
                }
                destroy() {
                  this.destroyed = !0, ZY.g.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, BY.b)({
              startVersion: YY,
              clientID: rY
            }), OY]
          }(ar, vr, gY.docKey, gY.httpConfig, (YY => {
            var rY;
            null === (rY = sr.current) || void 0 === rY || rY.call(sr, YY)
          }), sY));
          const YY = function(YY, rY) {
            const DY = (0, SY.u)(YY);
            return {
              extensions: [GY],
              connect(YY) {
                if (rY) {
                  const DY = rY.map((YY => bY.of({
                    playerId: YY.playerId,
                    playerName: YY.playerName,
                    colour: YY.colour,
                    anchor: YY.anchor,
                    head: YY.head,
                    lastMoved: Date.now()
                  })));
                  DY.length > 0 && YY.dispatch({
                    effects: DY
                  })
                }
                const FY = ZY.g.subscribe("codeCollab", (rY => {
                    if (rY.docKey === DY)
                      if (rY.type === SY.d.RemoteCursor) YY.dispatch({
                        effects: bY.of({
                          playerId: rY.playerId,
                          playerName: rY.playerName,
                          colour: rY.colour,
                          anchor: rY.anchor,
                          head: rY.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (rY.type === SY.d.Presence) {
                      const DY = JSON.parse(rY.peers),
                        FY = new Set(DY.map((YY => YY.playerId))),
                        AY = YY.state.field(GY),
                        IY = [];
                      for (const [YY] of AY.cursors) FY.has(YY) || IY.push(XY.of(YY));
                      IY.length > 0 && YY.dispatch({
                        effects: IY
                      })
                    }
                  })),
                  AY = setInterval((() => {
                    YY.dom.isConnected ? YY.dispatch({
                      effects: qY.of(Date.now())
                    }) : clearInterval(AY)
                  }), wY);
                return () => {
                  ZY.g.unsubscribe(FY), clearInterval(AY)
                }
              }
            }
          }(gY.docKey, gY.existingCursors);
          OY.push(...YY.extensions), mr.current = YY.connect
        } else mr.current = null;
        return OY
      }), [rY, Or, pY, ar, vr, Nr, UY, tY, Yr, sY, Ir, Rr]);
      if (!Or || !xY && !tY) return (0, Tr.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Tr.jsx)(EY.c, {})
      });
      const Hr = tY ? `plugin-${tY}-${null!==Yr&&void 0!==Yr?Yr:"index.ts"}` : xY ? `collab-${xY.clientID}` : `local-${rY}`;
      return (0, Tr.jsx)(IY.n, {
        value: tY ? null !== Dr && void 0 !== Dr ? Dr : "" : DY,
        onChange: OY,
        extensions: Kr,
        className: "CodeEditorContent",
        theme: kY ? or : "dark",
        editable: sY && !tY,
        basicSetup: pr,
        onCreateEditor: YY => {
          var rY;
          ir.current = YY, Qr.current = null !== (rY = null === xY || void 0 === xY ? void 0 : xY.clientID) && void 0 !== rY ? rY : null, cr(YY), Er.current && Er.current(), mr.current && (Er.current = mr.current(YY))
        }
      }, Hr)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);