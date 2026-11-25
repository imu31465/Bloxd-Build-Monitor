export const id = 297;
export const ids = [297];
export const modules = {
  41715: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => Tb
    });
    var wG = ZG(41721),
      SG = ZG(41775),
      LG = ZG(41777),
      yG = ZG(51),
      kG = ZG(59),
      UG = ZG(41793),
      YG = ZG(41795),
      VG = ZG(4779),
      pG = ZG(41801),
      fG = ZG(1876),
      QG = ZG(41805),
      KG = ZG(41820),
      hG = ZG.n(KG),
      dG = ZG(41784),
      JG = ZG(41787),
      rG = ZG(1302),
      zG = ZG(37197),
      EG = ZG(1198),
      oG = ZG(2404),
      XG = ZG(37097),
      uG = ZG(1389),
      iG = ZG(604),
      CG = ZG(1202),
      WG = ZG(41869),
      mG = ZG(41727),
      IG = ZG(41735),
      FG = ZG(1895),
      vG = ZG(3766),
      aG = ZG(19),
      cG = ZG(1096);
    const lG = 1e4,
      jG = 250,
      PG = 250;
    var MG = ZG(41754);
    const AG = 50,
      sG = 100;
    const qG = 2e3,
      nG = mG.C.define(),
      gG = mG.C.define(),
      eG = mG.C.define();
    class RG extends IG.n {
      constructor(GG, bG, ZG) {
        super(), this.colour = GG, this.playerName = bG, this.showName = ZG
      }
      toDOM() {
        const GG = document.createElement("span");
        GG.className = "cm-remote-cursor-wrapper", GG.style.borderLeftColor = this.colour;
        const bG = document.createElement("span");
        if (bG.className = "cm-remote-cursor", bG.style.borderLeftColor = this.colour, GG.appendChild(bG), this.showName) {
          const bG = document.createElement("span");
          bG.className = "cm-remote-cursor-name", bG.style.backgroundColor = this.colour, bG.textContent = this.playerName, GG.appendChild(bG)
        }
        return GG
      }
      eq(GG) {
        return this.colour === GG.colour && this.playerName === GG.playerName && this.showName === GG.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function TG(GG, bG) {
      const ZG = [],
        wG = [];
      for (const [, yG] of GG) {
        const GG = bG - yG.lastMoved < qG;
        if (ZG.push({
            pos: yG.head,
            decoration: IG.c.widget({
              widget: new RG(yG.colour, yG.playerName, GG),
              side: 1
            })
          }), yG.anchor !== yG.head) {
          const GG = Math.min(yG.anchor, yG.head),
            bG = Math.max(yG.anchor, yG.head);
          wG.push({
            from: GG,
            to: bG,
            decoration: IG.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${yG.colour}33`
              }
            })
          })
        }
      }
      const SG = new mG.v,
        LG = [];
      for (const yG of ZG) LG.push({
        bias: 1,
        deco: yG.decoration,
        from: yG.pos,
        to: yG.pos
      });
      for (const yG of wG) LG.push({
        bias: 0,
        deco: yG.decoration,
        from: yG.from,
        to: yG.to
      });
      LG.sort(((GG, bG) => GG.from - bG.from || GG.deco.startSide - bG.deco.startSide || GG.bias - bG.bias));
      for (const yG of LG) SG.add(yG.from, yG.to, yG.deco);
      return SG.finish()
    }
    const HG = mG.G.define({
      create: () => ({
        cursors: new Map,
        Yw: IG.c.none
      }),
      update(GG, bG) {
        let ZG = GG.cursors,
          wG = !1;
        if (bG.docChanged) {
          const GG = new Map;
          for (const [wG, SG] of ZG) GG.set(wG, {
            ...SG,
            anchor: bG.changes.mapPos(SG.anchor, 1),
            head: bG.changes.mapPos(SG.head, 1)
          });
          ZG = GG, wG = !0
        }
        for (const SG of bG.effects)
          if (SG.is(nG)) {
            if (!Number.isInteger(SG.value.anchor) || !Number.isInteger(SG.value.head)) {
              console.warn(`Code Editor: ignored player ${SG.value.playerId}'s cursor at ${SG.value.anchor}-${SG.value.head}`);
              continue
            }
            const LG = bG.state.doc.length,
              yG = {
                ...SG.value,
                anchor: Math.min(SG.value.anchor, LG),
                head: Math.min(SG.value.head, LG)
              };
            ZG === GG.cursors && (ZG = new Map(ZG)), ZG.set(yG.playerId, yG), wG = !0
          } else SG.is(gG) ? ZG.has(SG.value) && (ZG === GG.cursors && (ZG = new Map(ZG)), ZG.delete(SG.value), wG = !0) : SG.is(eG) && (wG = !0);
        return wG ? {
          cursors: ZG,
          Yw: TG(ZG, Date.now())
        } : GG
      },
      provide: GG => IG.h.Yw.from(GG, (GG => GG.Yw))
    });
    const tG = mG.C.define(),
      DG = IG.c.mark({
        class: "CodeInsertFlash"
      }),
      NG = mG.G.define({
        create: () => IG.c.none,
        update(GG, bG) {
          let ZG = GG.map(bG.changes);
          for (const wG of bG.effects) wG.is(tG) && (ZG = wG.value ? IG.c.set(DG.range(wG.value.from, wG.value.to)) : IG.c.none);
          return ZG
        },
        provide: GG => IG.h.Yw.from(GG)
      }),
      OG = mG.G.define({
        create: () => !1,
        update: (GG, bG) => GG || void 0 !== bG.annotation(mG.M.userEvent) && !bG.annotation(mG.M.remote)
      }),
      xG = [NG, OG];

    function BG(GG) {
      return GG.field(OG)
    }
    const Gb = 3e4;

    function bb(GG, bG) {
      const ZG = (0, yG.useRef)(null);
      (0, yG.useEffect)((() => {
        var GG;
        (null === (GG = ZG.current) || void 0 === GG ? void 0 : GG.path) !== bG && (ZG.current = null)
      }), [bG]);
      const wG = GG => {
        var wG;
        const SG = ZG.current;
        if (null === GG || void 0 === GG || !GG.dom.isConnected || !SG || SG.path !== bG) return;
        ZG.current = null;
        const {
          vQ: yG
        } = SG;
        if (yG && null !== yG.text && performance.now() - yG.at < Gb) {
          const bG = function(GG, bG) {
            if (GG === bG) return null;
            const ZG = Math.min(GG.length, bG.length);
            let wG = 0;
            for (; wG < ZG && GG[wG] === bG[wG];) wG++;
            let SG = 0;
            for (; SG < ZG - wG && GG[GG.length - 1 - SG] === bG[bG.length - 1 - SG];) SG++;
            return {
              from: wG,
              to: GG.length - SG,
              insert: bG.slice(wG, bG.length - SG)
            }
          }(GG.state.doc.toString(), yG.text);
          null !== bG && GG.dispatch({
            changes: bG,
            userEvent: yG.placed ? "input" : void 0
          })
        }
        const {
          doc: kG
        } = GG.state, UG = kG.line(Math.min(Math.max(SG.line, 1), kG.lines)), YG = UG.from + Math.min(null !== (wG = SG.column) && void 0 !== wG ? wG : 0, UG.length);
        GG.dispatch({
          selection: {
            anchor: YG
          },
          effects: LG.b.scrollIntoView(YG, {
            y: "center"
          }),
          userEvent: null !== yG && void 0 !== yG && yG.placed ? "select" : void 0
        }), !1 !== (null === yG || void 0 === yG ? void 0 : yG.focused) && GG.focus()
      };
      return (0, uG.g)("CodeEditorGoToLine", (bG => {
        ZG.current = bG, wG(GG.current)
      })), (0, uG.g)("CodeEditorKeepEdits", (() => {
        const wG = GG.current;
        if (null === wG || !wG.dom.isConnected || null === bG) return;
        const {
          doc: SG,
          selection: LG
        } = wG.state, {
          head: yG
        } = LG.main, kG = SG.lineAt(yG), UG = {
          text: (0, WG.k)(wG.state).length > 0 ? SG.toString() : null,
          at: performance.now(),
          focused: wG.hasFocus,
          placed: BG(wG.state)
        };
        ZG.current = {
          path: bG,
          line: kG.number,
          column: yG - kG.from,
          vQ: UG
        }
      })), GG => {
        var SG;
        const LG = ZG.current;
        !1 === (null === LG || void 0 === LG || null === (SG = LG.vQ) || void 0 === SG ? void 0 : SG.focused) && LG.path === bG || GG.focus(), wG(GG)
      }
    }
    var Zb = ZG(4387),
      wb = ZG(1151);

    function Sb(GG, bG) {
      const {
        t: ZG
      } = (0, wb.w)();
      (0, uG.g)("CodeEditorInsertText", (wG => {
        let {
          text: SG,
          focus: LG
        } = wG;
        const yG = GG.current,
          kG = null !== yG && void 0 !== yG && yG.dom.isConnected ? function(GG, bG) {
            if (!BG(GG)) return null;
            const {
              from: ZG,
              to: wG
            } = GG.selection.main, SG = ZG + bG.length;
            return {
              changes: {
                from: ZG,
                to: wG,
                insert: bG
              },
              selection: {
                anchor: SG
              },
              effects: [IG.h.scrollIntoView(SG, {
                y: "center"
              }), tG.of({
                from: ZG,
                to: SG
              })],
              userEvent: "input"
            }
          }(yG.state, SG) : null;
        null !== yG && null !== kG ? (yG.dispatch(kG), LG && yG.focus(), setTimeout((() => {
          yG.dom.isConnected && yG.dispatch({
            effects: tG.of(null)
          })
        }), 1500)) : (0, Zb.b)(SG).then((() => {
          bG({
            message: ZG("codeEditorWorld:pickCopied", {
              coords: SG
            }),
            type: "success"
          })
        }), (GG => {
          console.error("Pick could not copy the coordinates", GG), bG({
            message: ZG("codeEditorWorld:pickPlaceCursor", {
              coords: SG
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Lb = ZG(41771);
    const yb = "#e45649",
      kb = "#383a42",
      Ub = "#696c77",
      Yb = "#986801",
      Vb = "#e5e5e6",
      pb = "#fafafa",
      fb = "#eaeaeb",
      Qb = "#526fff",
      Kb = IG.h.theme({
        "&": {
          color: kb,
          backgroundColor: pb
        },
        ".cm-content": {
          caretColor: Qb
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Qb
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: kb
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
          backgroundColor: pb,
          color: Ub,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Vb
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: fb
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: fb,
          borderBottomColor: fb
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Vb,
            color: kb
          }
        }
      }, {
        dark: !1
      }),
      hb = MG.b.define([{
        tag: Lb.k.keyword,
        color: "#a626a4"
      }, {
        tag: [Lb.k.name, Lb.k.deleted, Lb.k.character, Lb.k.propertyName, Lb.k.macroName],
        color: yb
      }, {
        tag: [Lb.k.function(Lb.k.variableName), Lb.k.labelName],
        color: "#4078f2"
      }, {
        tag: [Lb.k.color, Lb.k.constant(Lb.k.name), Lb.k.standard(Lb.k.name)],
        color: Yb
      }, {
        tag: [Lb.k.definition(Lb.k.name), Lb.k.separator],
        color: kb
      }, {
        tag: [Lb.k.typeName, Lb.k.className, Lb.k.number, Lb.k.changed, Lb.k.annotation, Lb.k.modifier, Lb.k.self, Lb.k.namespace],
        color: "#c18401"
      }, {
        tag: [Lb.k.operator, Lb.k.operatorKeyword, Lb.k.url, Lb.k.escape, Lb.k.regexp, Lb.k.link, Lb.k.special(Lb.k.string)],
        color: "#0184bc"
      }, {
        tag: [Lb.k.meta, Lb.k.comment],
        color: Ub
      }, {
        tag: Lb.k.strong,
        fontWeight: "bold"
      }, {
        tag: Lb.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: Lb.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Lb.k.link,
        color: Ub,
        textDecoration: "underline"
      }, {
        tag: Lb.k.heading,
        fontWeight: "bold",
        color: yb
      }, {
        tag: [Lb.k.atom, Lb.k.bool, Lb.k.special(Lb.k.variableName)],
        color: Yb
      }, {
        tag: [Lb.k.processingInstruction, Lb.k.string, Lb.k.inserted],
        color: "#50a14f"
      }, {
        tag: Lb.k.invalid,
        color: "#000000"
      }]),
      db = [Kb, (0, MG.ab)(hb)];
    var Jb = ZG(37255),
      rb = ZG(41876);
    const zb = LG.f.define(),
      Eb = LG.j.define({
        create: () => !1,
        update(GG, bG) {
          for (const ZG of bG.effects) ZG.is(zb) && (GG = ZG.value);
          return GG
        }
      }),
      ob = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Xb(GG, bG) {
      return [Eb, LG.n.fromClass(class {
        constructor(GG) {
          this.view = GG, this.onDown = GG => {
            const bG = GG.target instanceof Element && null !== GG.target.closest(".cm-tooltip");
            0 !== GG.button || bG || this.view.state.field(Eb) || this.view.dispatch({
              effects: zb.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Eb) && this.view.dispatch({
              effects: zb.of(!1)
            })
          }, GG.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), LG.y.compute(["selection", Eb], (ZG => function(GG, bG, ZG) {
        const wG = GG.selection.main;
        return wG.empty || GG.field(Eb) || GG.sliceDoc(wG.from, wG.to).trim().length < 2 ? null : {
          pos: wG.from,
          above: !0,
          create: GG => {
            const wG = document.createElement("div");
            wG.className = "CodeSelectionActions", wG.setAttribute("role", "toolbar"), wG.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: SG,
                label: LG
              }
              of ob) {
              if (!ZG && "explain" !== SG) continue;
              const yG = document.createElement("button");
              yG.type = "button", yG.textContent = LG, "change" !== SG && (yG.title = rb.d, yG.dataset.asksAi = "true"), yG.addEventListener("mousedown", (GG => {
                GG.preventDefault()
              })), yG.addEventListener("click", (() => {
                const ZG = GG.state.selection.main;
                if (ZG.empty) return;
                const wG = {
                  action: SG,
                  path: bG,
                  fromLine: GG.state.doc.lineAt(ZG.from).number,
                  toLine: GG.state.doc.lineAt(ZG.to > ZG.from && GG.state.doc.lineAt(ZG.to).from === ZG.to ? ZG.to - 1 : ZG.to).number,
                  text: GG.state.sliceDoc(ZG.from, ZG.to)
                };
                aG.l.xh("WorldCodeAiSelection", wG), GG.dispatch({
                  selection: {
                    anchor: ZG.to
                  }
                })
              })), wG.appendChild(yG)
            }
            return {
              dom: wG
            }
          }
        }
      }(ZG, GG, bG)))]
    }
    var ub = ZG(1067);
    const ib = new Set(["(", "{", "[", "<"]),
      Cb = new Set([")", "}", "]", ">"]),
      Wb = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function mb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function ZG(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = [];
        for (const SG of GG) {
          let GG;
          GG = "punctuation" === SG.kind ? Wb.text : "parameterName" === SG.kind ? Wb.parameterName : bG, wG.push({
            str: SG.text,
            style: {
              color: GG,
              opacity: ZG ? .5 : void 0
            }
          })
        }
        return wG
      }
      const wG = [];
      if (wG.push(...ZG(GG.prefixDisplayParts, Wb.text)), GG.parameters.length > 0) {
        wG.push("\n");
        for (let SG = 0; SG < GG.parameters.length; SG++) {
          const LG = GG.parameters[SG];
          wG.push("\t"), wG.push(...ZG(LG.displayParts, Wb.parameter, null !== bG && SG !== bG)), wG.push("\n")
        }
      }
      return wG.push(...ZG(GG.suffixDisplayParts, Wb.suffix)), GG.documentation && (wG.push("\n\n"), wG.push(...ZG(GG.documentation, Wb.docs))), wG
    }
    var Ib = function(GG) {
      return GG[GG.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", GG[GG.DuplicateIdentifier = 2300] = "DuplicateIdentifier", GG
    }(Ib || {});
    const Fb = new Set([Ib.DuplicateIdentifier]),
      vb = new Set([Ib.VariableDefinedElsewhere]),
      ab = new Set([]),
      cb = "/index.js";

    function lb(GG) {
      return "/" + GG
    }

    function jb(GG, bG, ZG) {
      GG.getSourceFile(bG) && GG.deleteFile(bG), GG.createFile(bG, ZG)
    }

    function Pb(GG) {
      return !!GG && ((0, oG.m)(GG) || (0, oG.l)(GG))
    }

    function Mb(GG, bG, ZG) {
      return () => {
        let wG = [...bG.languageService.getSemanticDiagnostics(ZG), ...bG.languageService.getSyntacticDiagnostics(ZG)];
        return wG = wG.filter((GG => !(0, iG.L)(GG.start) && !(0, iG.L)(GG.length) && !Fb.has(GG.code))), GG || (wG = wG.filter((GG => !vb.has(GG.code)))), wG.map((GG => ({
          from: GG.start,
          to: GG.start + GG.length,
          message: "string" === typeof GG.messageText ? GG.messageText : GG.messageText.messageText,
          severity: ab.has(GG.code) ? "warning" : "error"
        })))
      }
    }

    function Ab(GG, bG) {
      return ZG => {
        var wG, SG;
        const LG = GG.languageService.getCompletionsAtPosition(bG, ZG.pos, {});
        if (!LG) return {
          from: ZG.pos,
          options: []
        };
        let yG = null !== (wG = null === (SG = LG.optionalReplacementSpan) || void 0 === SG ? void 0 : SG.start) && void 0 !== wG ? wG : ZG.pos;
        if (!LG.optionalReplacementSpan) {
          const GG = ZG.state.doc.sliceString(0, ZG.pos);
          for (; yG > 0 && /[\w$]/.test(GG[yG - 1]);) yG--
        }
        return LG.entries = LG.entries.filter((GG => GG.kind !== hG().ScriptElementKind.warning)), {
          from: yG,
          options: LG.entries.map((wG => {
            var SG, LG, kG, UG;
            const YG = GG.languageService.getCompletionEntryDetails(bG, ZG.pos, wG.name, {}, wG.source, {}, wG.data),
              VG = null !== (SG = null === (LG = wG.replacementSpan) || void 0 === LG ? void 0 : LG.start) && void 0 !== SG ? SG : yG,
              pG = wG.replacementSpan ? wG.replacementSpan.start + wG.replacementSpan.length : ZG.pos,
              fG = null !== (kG = wG.insertText) && void 0 !== kG ? kG : wG.name;
            return {
              label: wG.name,
              detail: null === YG || void 0 === YG ? void 0 : YG.displayParts.map((GG => GG.text)).join(""),
              info: null === YG || void 0 === YG || null === (UG = YG.documentation) || void 0 === UG ? void 0 : UG.map((GG => GG.text)).join(""),
              apply: GG => {
                GG.dispatch({
                  changes: {
                    from: VG,
                    to: pG,
                    insert: fG
                  },
                  selection: {
                    anchor: VG + fG.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function sb(GG) {
      return bG => {
        const ZG = document.createElement("div");
        ZG.className = "CodeEditorTooltip";
        let wG = !1;
        return queueMicrotask((() => {
          wG || (kG.render((0, ub.jsx)(fG.c, {
            text: GG
          }), ZG), bG.requestMeasure())
        })), {
          dom: ZG,
          destroy() {
            wG = !0, queueMicrotask((() => {
              kG.unmountComponentAtNode(ZG)
            }))
          }
        }
      }
    }

    function qb(GG, bG, ZG) {
      return wG => {
        var SG;
        if (!bG) return [];
        const LG = null === (SG = wG.selection.Bh[0]) || void 0 === SG ? void 0 : SG.head;
        if (void 0 === LG) return [];
        const yG = GG.languageService.getSignatureHelpItems(ZG, LG, {});
        if (!yG || !yG.items.length) return [];
        const kG = yG.applicableSpan.start - yG.items[0].prefixDisplayParts.map((GG => GG.text)).join("").length,
          UG = yG.applicableSpan.start,
          YG = wG.doc.lineAt(LG),
          VG = YG.from,
          pG = Math.min(YG.to, LG);
        let fG, QG;
        return kG < VG ? (fG = VG, QG = pG) : (fG = kG, QG = UG), [{
          pos: fG,
          end: QG,
          above: !1,
          create: sb(mb(yG.items[0], yG.argumentIndex))
        }]
      }
    }

    function nb(GG, bG) {
      return (ZG, wG, SG) => {
        const LG = GG.languageService.getQuickInfoAtPosition(bG, wG);
        if (!LG) return [];
        const yG = LG.textSpan.start,
          kG = LG.textSpan.start + LG.textSpan.length;
        if (wG < yG || wG >= kG) return [];
        if (LG.kind === hG().ScriptElementKind.memberFunctionElement || LG.kind === hG().ScriptElementKind.variableElement && "declare" === LG.kindModifiers) {
          const GG = LG.displayParts.findIndex((GG => "space" === GG.kind)); - 1 !== GG && (LG.displayParts = LG.displayParts.slice(GG));
          const bG = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            ZG = LG.displayParts.findIndex((GG => "punctuation" === GG.kind && "(" === GG.text)); - 1 !== ZG && (bG.prefixDisplayParts = LG.displayParts.slice(0, ZG + 1), LG.displayParts = LG.displayParts.slice(ZG + 1));
          const wG = LG.displayParts.findLastIndex((GG => "punctuation" === GG.kind && ")" === GG.text)); - 1 !== wG && (bG.suffixDisplayParts = LG.displayParts.slice(wG), LG.displayParts = LG.displayParts.slice(0, wG));
          let SG = 0,
            UG = [];
          for (const yG of LG.displayParts)
            if (ib.has(yG.text) ? SG++ : Cb.has(yG.text) && SG--, "lineBreak" !== yG.kind) {
              if ("space" === yG.kind) {
                if (0 === UG.length) continue;
                UG.push({
                  kind: "space",
                  text: " "
                })
              } else UG.push(yG);
              0 === SG && "," === yG.text && (bG.parameters.push({
                displayParts: UG
              }), UG = [])
            } return UG.length > 0 && bG.parameters.push({
            displayParts: UG
          }), bG.documentation = LG.documentation, [{
            pos: yG,
            end: kG,
            above: !0,
            create: sb(mb(bG))
          }]
        }
        const UG = [];
        for (const GG of LG.displayParts) UG.push({
          str: GG.text,
          style: {
            color: Wb.text
          }
        });
        if (LG.documentation) {
          UG.push("\n\n");
          for (const GG of LG.documentation) UG.push({
            str: GG.text,
            style: {
              color: Wb.docs
            }
          })
        }
        return [{
          pos: yG,
          end: kG,
          above: !0,
          create: sb(UG)
        }]
      }
    }
    const gb = {
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
      semicolons: hG().SemicolonPreference.Insert
    };
    const eb = LG.f.define(),
      Rb = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Tb(GG) {
      let {
        isLobbyCode: bG,
        code: ZG,
        onChange: kG,
        canEditCode: fG,
        setTemporaryMessage: KG,
        close: iG,
        showTooltips: RG,
        lightMode: TG,
        collabState: tG,
        onRemoteDocChange: DG,
        files: NG,
        activePath: OG,
        pluginName: BG,
        pluginFile: Gb,
        pluginSource: Zb,
        setActiveDocReplacer: wb,
        showAiHints: Lb,
        canAiChangeCode: yb = fG
      } = GG;
      const [kb, Ub] = (0, yG.useState)(null), Yb = null === tG || void 0 === tG ? void 0 : tG.version, Vb = null === tG || void 0 === tG ? void 0 : tG.clientID, pb = (0, yG.useRef)({
        isLobbyCode: bG,
        files: NG,
        code: ZG,
        activePath: OG
      }), fb = (0, yG.useRef)(DG);
      fb.current = DG;
      const Qb = (0, yG.useRef)(null),
        Kb = (0, yG.useRef)(tG);
      Kb.current = tG;
      const hb = (0, yG.useRef)(null),
        rb = (0, yG.useRef)(null),
        zb = (0, yG.useRef)(null),
        Eb = (0, yG.useRef)(iG);
      Eb.current = iG;
      const ob = (0, yG.useRef)(ZG);
      ob.current = ZG;
      const ib = (0, yG.useRef)(Zb);
      ib.current = Zb;
      const Cb = function(GG, bG, ZG, wG) {
        return ZG ? `/plugin-preview/${ZG}/${null!==wG&&void 0!==wG?wG:"index.ts"}` : GG ? lb(null !== bG && void 0 !== bG ? bG : EG.k) : cb
      }(bG, OG, BG, Gb);
      (0, yG.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: GG,
            files: bG,
            code: ZG,
            activePath: wG
          } = pb.current, SG = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: hG().ModuleKind.ESNext,
            moduleResolution: hG().ModuleResolutionKind.Bundler,
            target: hG().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(zG.h).map((GG => [GG.specifier, [GG.typesVfsPath]])))
            }
          }, LG = new Map, yG = [];
          if (GG) {
            const GG = null !== bG && void 0 !== bG ? bG : {
              [EG.k]: ZG || "\n"
            };
            for (const [bG, ZG] of Object.entries(GG)) {
              const GG = lb(bG);
              LG.set(GG, ZG || "\n"), yG.push(GG)
            }
            const SG = lb(null !== wG && void 0 !== wG ? wG : EG.k);
            LG.has(SG) ? LG.set(SG, ZG || "\n") : (LG.set(SG, ZG || "\n"), yG.push(SG)), LG.set("/node_modules/@bloxd/index.d.ts", VG.default), yG.push("/node_modules/@bloxd/index.d.ts");
            for (const bG of Object.values(zG.h)) {
              LG.set(bG.typesVfsPath, bG.types), yG.push(bG.typesVfsPath);
              for (const [GG, ZG] of Object.entries(bG.files)) {
                const wG = `/plugin-preview/${bG.name}/${GG}`;
                LG.set(wG, ZG || "\n"), yG.push(wG)
              }
            }
          } else LG.set(cb, ZG || "\n"), yG.push(cb);
          LG.set("/globals.d.ts", GG ? YG.d : UG.e), LG.set("/lib.d.ts", pG.e), yG.push("/globals.d.ts", "/lib.d.ts");
          const kG = QG.c(LG),
            fG = QG.d(kG, yG, hG(), SG);
          Ub({
            Gd: fG,
            fsMap: LG
          })
        }()
      }), []), (0, yG.useEffect)((() => {
        var GG, wG;
        if (!kb || !bG) return;
        const {
          Gd: SG,
          fsMap: LG
        } = kb;
        if (function(GG, bG, ZG) {
            const wG = new Set;
            for (const [SG, LG] of Object.entries(ZG)) {
              const ZG = lb(SG);
              wG.add(ZG);
              const yG = LG || "\n";
              bG.get(ZG) !== yG && (bG.set(ZG, yG), jb(GG, ZG, yG))
            }
            for (const SG of [...bG.keys()]) "/globals.d.ts" === SG || "/lib.d.ts" === SG || SG.startsWith("/node_modules/") || SG.startsWith("/plugin-preview/") || wG.has(SG) || (bG.delete(SG), GG.getSourceFile(SG) && GG.deleteFile(SG))
          }(SG, LG, null !== NG && void 0 !== NG ? NG : {
            [EG.k]: ZG || "\n"
          }), BG) return void jb(SG, Cb, Zb || "\n");
        const yG = null !== (GG = null === (wG = Qb.current) || void 0 === wG ? void 0 : wG.state.doc.toString()) && void 0 !== GG ? GG : ZG;
        jb(SG, Cb, yG || "\n")
      }), [NG, OG, kb, BG, Zb, Cb, ZG, bG]), (0, yG.useEffect)((() => {
        if (!kb) return;
        const {
          Gd: GG
        } = kb;
        jb(GG, Cb, (BG ? Zb : ZG) || "\n")
      }), [ZG, BG, Zb, Cb, kb]), (0, yG.useEffect)((() => () => {
        rb.current && (rb.current(), rb.current = null)
      }), []), (0, yG.useEffect)((() => (wb(((GG, bG) => {
        if (BG) return !1;
        const ZG = Qb.current,
          wG = Kb.current,
          SG = wG ? (0, oG.r)(wG.docKey) : null;
        if (!ZG || !wG || hb.current !== wG.clientID || GG !== SG) return !1;
        const LG = ZG.state.doc.toString();
        return LG !== bG && ZG.dispatch({
          changes: {
            from: 0,
            to: LG.length,
            insert: bG
          }
        }), !0
      })), () => {
        Qb.current = null, hb.current = null, wb(null)
      })), [wb, BG]);
      const Wb = bG ? BG ? null : null !== OG && void 0 !== OG ? OG : EG.k : Jb.c,
        mb = bb(Qb, Wb);
      Sb(Qb, KG), (0, uG.g)("FormatCode", (() => {
        if (!kb || !Qb.current || BG) return;
        const {
          Gd: GG,
          fsMap: ZG
        } = kb, wG = GG.getSourceFile(Cb).getFullText();
        let SG = 0;
        if (bG && NG)
          for (const [bG, kG] of Object.entries(NG)) bG !== (null !== OG && void 0 !== OG ? OG : EG.k) && (SG += kG.length);
        const LG = function(GG, bG, ZG, wG, SG) {
          const LG = GG.languageService.getFormattingEditsForDocument(wG, gb);
          if (!LG.length) return CG.d.error("Code is already formatted.");
          LG.sort(((GG, bG) => bG.span.start - GG.span.start));
          let yG = GG.getSourceFile(wG).getFullText();
          for (const kG of LG) yG = yG.slice(0, kG.span.start) + kG.iU + yG.slice(kG.span.start + kG.span.length);
          return yG !== (ZG ? (0, XG.m)(yG, SG) : (0, XG.i)(yG)) ? CG.d.error("Formatting the code will go beyond the character limit.") : CG.d.value(yG)
        }(GG, 0, bG, Cb, SG);
        if (LG.isError()) return void KG({
          message: LG.asError().message,
          type: "warning"
        });
        const yG = LG.getValue();
        yG && (Qb.current.dispatch({
          changes: {
            from: 0,
            to: wG.length,
            insert: yG
          },
          selection: {
            anchor: yG.length
          }
        }), jb(GG, Cb, yG), kG(yG))
      }));
      const Ib = (0, yG.useMemo)((() => {
        if (!kb) return [];
        const {
          Gd: GG,
          fsMap: ZG
        } = kb;
        ! function(GG, bG, ZG, wG) {
          if (GG.getSourceFile(ZG)) return;
          const SG = wG || "\n";
          bG.set(ZG, SG), GG.createFile(ZG, SG)
        }(GG, ZG, Cb, (BG ? ib.current : ob.current) || "\n");
        const yG = bG && Pb(BG ? null !== Gb && void 0 !== Gb ? Gb : "index.ts" : OG),
          kG = [(0, SG.e)({
            jsx: !1,
            typescript: yG
          }), LG.c.highest(LG.b.domEventHandlers({
            keydown: GG => "Escape" === GG.key ? (Eb.current(), GG.stopPropagation(), !0) : (GG.stopPropagation(), !1)
          })), (0, wG.e)({
            override: [Ab(GG, Cb)]
          }), IG.j.fromClass(class {
            constructor(GG) {
              this.view = GG, this.timeout = null, this.scheduleParse()
            }
            update(GG) {
              (GG.docChanged || GG.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const GG = this.view.viewport.to;
                (0, MG.cb)(this.view.state, GG) || (0, MG.J)(this.view, GG, AG) || this.scheduleParse()
              }), sG))
            }
          }), ...xG, LG.b.lineWrapping, LG.j.define({
            create: qb(GG, RG, Cb),
            update(bG, ZG) {
              const wG = ZG.effects.some((GG => GG.is(eb)));
              return ZG.docChanged || ZG.selection || wG ? (jb(GG, Cb, ZG.state.doc.toString() || " "), qb(GG, RG, Cb)(ZG.state)) : bG
            },
            provide: GG => LG.y.computeN([GG], (bG => bG.field(GG)))
          }), (0, LG.v)(nb(GG, Cb)), (0, JG.f)(Mb(bG, GG, Cb)), LG.n.fromClass(class {
            constructor(GG) {
              this.view = GG, this.searchPanel = null
            }
            update(GG) {
              const bG = GG.view.dom.querySelector(".cm-search");
              if (bG !== this.searchPanel) {
                if (this.searchPanel = bG, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (GG => {
                  "Escape" === GG.key && (0, dG.d)(this.view), GG.stopPropagation()
                }))
              }
            }
          })];
        Lb && !BG && kG.push(Xb(bG ? null !== OG && void 0 !== OG ? OG : EG.k : Jb.c, yb));
        const UG = Kb.current;
        if (UG && !BG) {
          kG.push(... function(GG, bG, ZG, wG, SG) {
            let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const yG = (0, oG.r)(ZG),
              kG = IG.j.fromClass(class {
                constructor(GG) {
                  this.view = GG, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = aG.l.subscribe("codeCollab", (GG => {
                    GG.docKey === yG && GG.type === oG.f.Updates && (GG.updates ? this.applyUpdates(GG.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(GG) {
                  const bG = JSON.parse(GG).map((GG => ({
                    clientID: GG.clientID,
                    changes: mG.ChangeSet.fromJSON(GG.changes)
                  })));
                  bG.length > 0 && (this.view.dispatch((0, WG.g)(this.view.state, bG)), SG && SG(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(GG) {
                  LG && (GG.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const GG = (0, WG.k)(this.view.state);
                  if (this.pushing || !GG.length) return;
                  const bG = Date.now() - this.lastPushTime;
                  if (bG < PG) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), PG - bG)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), lG);
                  const ZG = (0, WG.f)(this.view.state),
                    SG = GG.map((GG => ({
                      clientID: GG.clientID,
                      changes: GG.changes.toJSON()
                    }))),
                    LG = JSON.stringify(SG);
                  LG.length <= oG.h ? FG.gameBridge.send("sendCodeCollab", {
                    BS: oG.c.Push,
                    bL: yG,
                    ZL: ZG,
                    LL: LG
                  }) : (0, cG.postJsonWithMetricsCookiesAndJsonResponse)(`${wG.gsUrl}/code/collab-push`, vG.m["collab-push"].toBuffer({
                    gameNameWithVariation: wG.gameNameWithVariation,
                    lobbyName: wG.lobbyName,
                    docKey: yG,
                    version: ZG,
                    updates: LG
                  }), {
                    retries: 0
                  }).catch((GG => {
                    console.error("[CodeCollab] HTTP push failed", GG)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const GG = (0, WG.f)(this.view.state);
                  (0, cG.postJsonWithMetricsCookiesAndJsonResponse)(`${wG.gsUrl}/code/collab-pull`, vG.m["collab-pull"].toBuffer({
                    gameNameWithVariation: wG.gameNameWithVariation,
                    lobbyName: wG.lobbyName,
                    docKey: yG,
                    fromVersion: GG
                  }), {
                    retries: 1
                  }).then((GG => {
                    this.destroyed || (GG.fullDoc ? aG.l.xh("codeCollabRejoin", {
                      docKey: yG,
                      doc: GG.fullDoc,
                      version: GG.version
                    }) : this.applyUpdates(GG.updates))
                  })).catch((GG => {
                    console.error("[CodeCollab] Pull failed", GG)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const GG = Date.now();
                  if (GG - this.lastCursorSent < jG) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), jG)));
                  this.lastCursorSent = GG;
                  const bG = this.view.state.selection.main;
                  FG.gameBridge.send("sendCodeCollab", {
                    BS: oG.c.Cursor,
                    bL: yG,
                    YL: bG.anchor,
                    VL: bG.head
                  })
                }
                destroy() {
                  this.destroyed = !0, aG.l.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, WG.e)({
              startVersion: GG,
              clientID: bG
            }), kG]
          }(Yb, Vb, UG.docKey, UG.httpConfig, (GG => {
            var bG;
            null === (bG = fb.current) || void 0 === bG || bG.call(fb, GG)
          }), fG));
          const GG = function(GG, bG) {
            const ZG = (0, oG.r)(GG);
            return {
              extensions: [HG],
              connect(GG) {
                if (bG) {
                  const ZG = bG.map((GG => nG.of({
                    playerId: GG.playerId,
                    playerName: GG.playerName,
                    colour: GG.colour,
                    anchor: GG.anchor,
                    head: GG.head,
                    lastMoved: Date.now()
                  })));
                  ZG.length > 0 && GG.dispatch({
                    effects: ZG
                  })
                }
                const wG = aG.l.subscribe("codeCollab", (bG => {
                    if (bG.docKey === ZG)
                      if (bG.type === oG.f.RemoteCursor) GG.dispatch({
                        effects: nG.of({
                          playerId: bG.playerId,
                          playerName: bG.playerName,
                          colour: bG.colour,
                          anchor: bG.anchor,
                          head: bG.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (bG.type === oG.f.Presence) {
                      const ZG = JSON.parse(bG.peers),
                        wG = new Set(ZG.map((GG => GG.playerId))),
                        SG = GG.state.field(HG),
                        LG = [];
                      for (const [GG] of SG.cursors) wG.has(GG) || LG.push(gG.of(GG));
                      LG.length > 0 && GG.dispatch({
                        effects: LG
                      })
                    }
                  })),
                  SG = setInterval((() => {
                    GG.dom.isConnected ? GG.dispatch({
                      effects: eG.of(Date.now())
                    }) : clearInterval(SG)
                  }), qG);
                return () => {
                  aG.l.unsubscribe(wG), clearInterval(SG)
                }
              }
            }
          }(UG.docKey, UG.existingCursors);
          kG.push(...GG.extensions), zb.current = GG.connect
        } else zb.current = null;
        return kG
      }), [bG, kb, RG, Yb, Vb, Cb, OG, BG, Gb, fG, Lb, yb]);
      if (!kb || !tG && !BG) return (0, ub.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, ub.jsx)(rG.b, {})
      });
      const Fb = BG ? `plugin-${BG}-${null!==Gb&&void 0!==Gb?Gb:"index.ts"}` : tG ? `collab-${tG.clientID}` : `local-${bG}`;
      return (0, ub.jsx)(LG.r, {
        value: BG ? null !== Zb && void 0 !== Zb ? Zb : "" : ZG,
        onChange: kG,
        extensions: Ib,
        className: "CodeEditorContent",
        theme: TG ? db : "dark",
        editable: fG && !BG,
        basicSetup: Rb,
        onCreateEditor: GG => {
          var bG;
          Qb.current = GG, hb.current = null !== (bG = null === tG || void 0 === tG ? void 0 : tG.clientID) && void 0 !== bG ? bG : null, mb(GG), rb.current && rb.current(), zb.current && (rb.current = zb.current(GG))
        }
      }, Fb)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);