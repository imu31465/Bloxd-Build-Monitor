export const id = 283;
export const ids = [283];
export const modules = {
  40097: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => po
    });
    var iT = IT(40103),
      zT = IT(40153),
      kT = IT(40162),
      WT = IT(46),
      XT = IT(68),
      BT = IT(40183),
      FT = IT(40191),
      ST = IT(4243),
      DT = IT(40194),
      LT = IT(1729),
      xT = IT(40199),
      cT = IT(40215),
      KT = IT.n(cT),
      MT = IT(40171),
      rT = IT(40176),
      AT = IT(1310),
      gT = IT(35808),
      hT = IT(1214),
      wT = IT(35823),
      mT = IT(35704),
      eT = IT(1403),
      RT = IT(618),
      uT = IT(1216),
      vT = IT(40268),
      ET = IT(40110),
      fT = IT(40115),
      CT = IT(1751),
      jT = IT(3330),
      JT = IT(16),
      UT = IT(1117);
    const aT = 1e4,
      YT = 250,
      QT = 250;
    var OT = IT(40137);
    const HT = 50,
      nT = 100;
    const qT = 2e3,
      ZT = ET.H.define(),
      lT = ET.H.define(),
      sT = ET.H.define();
    class tT extends fT.m {
      constructor(TT, oT, IT) {
        super(), this.colour = TT, this.playerName = oT, this.showName = IT
      }
      toDOM() {
        const TT = document.createElement("span");
        TT.className = "cm-remote-cursor-wrapper", TT.style.borderLeftColor = this.colour;
        const oT = document.createElement("span");
        if (oT.className = "cm-remote-cursor", oT.style.borderLeftColor = this.colour, TT.appendChild(oT), this.showName) {
          const oT = document.createElement("span");
          oT.className = "cm-remote-cursor-name", oT.style.backgroundColor = this.colour, oT.textContent = this.playerName, TT.appendChild(oT)
        }
        return TT
      }
      eq(TT) {
        return this.colour === TT.colour && this.playerName === TT.playerName && this.showName === TT.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function GT(TT, oT) {
      const IT = [],
        iT = [];
      for (const [, WT] of TT) {
        const TT = oT - WT.lastMoved < qT;
        if (IT.push({
            pos: WT.head,
            decoration: fT.b.widget({
              widget: new tT(WT.colour, WT.playerName, TT),
              side: 1
            })
          }), WT.anchor !== WT.head) {
          const TT = Math.min(WT.anchor, WT.head),
            oT = Math.max(WT.anchor, WT.head);
          iT.push({
            from: TT,
            to: oT,
            decoration: fT.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${WT.colour}33`
              }
            })
          })
        }
      }
      const zT = new ET.A,
        kT = [];
      for (const WT of IT) kT.push({
        bias: 1,
        deco: WT.decoration,
        from: WT.pos,
        to: WT.pos
      });
      for (const WT of iT) kT.push({
        bias: 0,
        deco: WT.decoration,
        from: WT.from,
        to: WT.to
      });
      kT.sort(((TT, oT) => TT.from - oT.from || TT.deco.startSide - oT.deco.startSide || TT.bias - oT.bias));
      for (const WT of kT) zT.add(WT.from, WT.to, WT.deco);
      return zT.finish()
    }
    const pT = ET.K.define({
      create: () => ({
        cursors: new Map,
        dz: fT.b.none
      }),
      update(TT, oT) {
        let IT = TT.cursors,
          iT = !1;
        if (oT.docChanged) {
          const TT = new Map;
          for (const [iT, zT] of IT) TT.set(iT, {
            ...zT,
            anchor: oT.changes.mapPos(zT.anchor, 1),
            head: oT.changes.mapPos(zT.head, 1)
          });
          IT = TT, iT = !0
        }
        for (const zT of oT.effects)
          if (zT.is(ZT)) {
            if (!Number.isInteger(zT.value.anchor) || !Number.isInteger(zT.value.head)) {
              console.warn(`Code Editor: ignored player ${zT.value.playerId}'s cursor at ${zT.value.anchor}-${zT.value.head}`);
              continue
            }
            const kT = oT.state.doc.length,
              WT = {
                ...zT.value,
                anchor: Math.min(zT.value.anchor, kT),
                head: Math.min(zT.value.head, kT)
              };
            IT === TT.cursors && (IT = new Map(IT)), IT.set(WT.playerId, WT), iT = !0
          } else zT.is(lT) ? IT.has(zT.value) && (IT === TT.cursors && (IT = new Map(IT)), IT.delete(zT.value), iT = !0) : zT.is(sT) && (iT = !0);
        return iT ? {
          cursors: IT,
          dz: GT(IT, Date.now())
        } : TT
      },
      provide: TT => fT.i.dz.from(TT, (TT => TT.dz))
    });
    const bT = ET.H.define(),
      yT = fT.b.mark({
        class: "CodeInsertFlash"
      }),
      NT = ET.K.define({
        create: () => fT.b.none,
        update(TT, oT) {
          let IT = TT.map(oT.changes);
          for (const iT of oT.effects) iT.is(bT) && (IT = iT.value ? fT.b.set(yT.range(iT.value.from, iT.value.to)) : fT.b.none);
          return IT
        },
        provide: TT => fT.i.dz.from(TT)
      }),
      PT = ET.K.define({
        create: () => !1,
        update: (TT, oT) => TT || void 0 !== oT.annotation(ET.O.userEvent) && !oT.annotation(ET.O.remote)
      }),
      dT = [NT, PT];

    function VT(TT) {
      return TT.field(PT)
    }
    const To = 3e4;

    function oo(TT, oT) {
      const IT = (0, WT.useRef)(null);
      (0, WT.useEffect)((() => {
        var TT;
        (null === (TT = IT.current) || void 0 === TT ? void 0 : TT.path) !== oT && (IT.current = null)
      }), [oT]);
      const iT = TT => {
        var iT;
        const zT = IT.current;
        if (null === TT || void 0 === TT || !TT.dom.isConnected || !zT || zT.path !== oT) return;
        IT.current = null;
        const {
          qx: WT
        } = zT;
        if (WT && null !== WT.text && performance.now() - WT.at < To) {
          const oT = function(TT, oT) {
            if (TT === oT) return null;
            const IT = Math.min(TT.length, oT.length);
            let iT = 0;
            for (; iT < IT && TT[iT] === oT[iT];) iT++;
            let zT = 0;
            for (; zT < IT - iT && TT[TT.length - 1 - zT] === oT[oT.length - 1 - zT];) zT++;
            return {
              from: iT,
              to: TT.length - zT,
              insert: oT.slice(iT, oT.length - zT)
            }
          }(TT.state.doc.toString(), WT.text);
          null !== oT && TT.dispatch({
            changes: oT,
            userEvent: WT.placed ? "input" : void 0
          })
        }
        const {
          doc: XT
        } = TT.state, BT = XT.line(Math.min(Math.max(zT.line, 1), XT.lines)), FT = BT.from + Math.min(null !== (iT = zT.column) && void 0 !== iT ? iT : 0, BT.length);
        TT.dispatch({
          selection: {
            anchor: FT
          },
          effects: kT.b.scrollIntoView(FT, {
            y: "center"
          }),
          userEvent: null !== WT && void 0 !== WT && WT.placed ? "select" : void 0
        }), !1 !== (null === WT || void 0 === WT ? void 0 : WT.focused) && TT.focus()
      };
      return (0, eT.g)("CodeEditorGoToLine", (oT => {
        IT.current = oT, iT(TT.current)
      })), (0, eT.g)("CodeEditorKeepEdits", (() => {
        const iT = TT.current;
        if (null === iT || !iT.dom.isConnected || null === oT) return;
        const {
          doc: zT,
          selection: kT
        } = iT.state, {
          head: WT
        } = kT.main, XT = zT.lineAt(WT), BT = {
          text: (0, vT.k)(iT.state).length > 0 ? zT.toString() : null,
          at: performance.now(),
          focused: iT.hasFocus,
          placed: VT(iT.state)
        };
        IT.current = {
          path: oT,
          line: XT.number,
          column: WT - XT.from,
          qx: BT
        }
      })), TT => {
        var zT;
        const kT = IT.current;
        !1 === (null === kT || void 0 === kT || null === (zT = kT.qx) || void 0 === zT ? void 0 : zT.focused) && kT.path === oT || TT.focus(), iT(TT)
      }
    }
    var Io = IT(3895),
      io = IT(1171);

    function zo(TT, oT) {
      const {
        t: IT
      } = (0, io.t)();
      (0, eT.g)("CodeEditorInsertText", (iT => {
        let {
          text: zT,
          focus: kT
        } = iT;
        const WT = TT.current,
          XT = null !== WT && void 0 !== WT && WT.dom.isConnected ? function(TT, oT) {
            if (!VT(TT)) return null;
            const {
              from: IT,
              to: iT
            } = TT.selection.main, zT = IT + oT.length;
            return {
              changes: {
                from: IT,
                to: iT,
                insert: oT
              },
              selection: {
                anchor: zT
              },
              effects: [fT.i.scrollIntoView(zT, {
                y: "center"
              }), bT.of({
                from: IT,
                to: zT
              })],
              userEvent: "input"
            }
          }(WT.state, zT) : null;
        null !== WT && null !== XT ? (WT.dispatch(XT), kT && WT.focus(), setTimeout((() => {
          WT.dom.isConnected && WT.dispatch({
            effects: bT.of(null)
          })
        }), 1500)) : (0, Io.d)(zT).then((() => {
          oT({
            message: IT("codeEditorWorld:pickCopied", {
              coords: zT
            }),
            type: "success"
          })
        }), (TT => {
          console.error("Pick could not copy the coordinates", TT), oT({
            message: IT("codeEditorWorld:pickPlaceCursor", {
              coords: zT
            }),
            type: "warning"
          })
        }))
      }))
    }
    var ko = IT(40151);
    const Wo = "#e45649",
      Xo = "#383a42",
      Bo = "#696c77",
      Fo = "#986801",
      So = "#e5e5e6",
      Do = "#fafafa",
      Lo = "#eaeaeb",
      xo = "#526fff",
      co = fT.i.theme({
        "&": {
          color: Xo,
          backgroundColor: Do
        },
        ".cm-content": {
          caretColor: xo
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: xo
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Xo
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
          backgroundColor: Do,
          color: Bo,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: So
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Lo
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Lo,
          borderBottomColor: Lo
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: So,
            color: Xo
          }
        }
      }, {
        dark: !1
      }),
      Ko = OT.c.define([{
        tag: ko.m.keyword,
        color: "#a626a4"
      }, {
        tag: [ko.m.name, ko.m.deleted, ko.m.character, ko.m.propertyName, ko.m.macroName],
        color: Wo
      }, {
        tag: [ko.m.function(ko.m.variableName), ko.m.labelName],
        color: "#4078f2"
      }, {
        tag: [ko.m.color, ko.m.constant(ko.m.name), ko.m.standard(ko.m.name)],
        color: Fo
      }, {
        tag: [ko.m.definition(ko.m.name), ko.m.separator],
        color: Xo
      }, {
        tag: [ko.m.typeName, ko.m.className, ko.m.number, ko.m.changed, ko.m.annotation, ko.m.modifier, ko.m.self, ko.m.namespace],
        color: "#c18401"
      }, {
        tag: [ko.m.operator, ko.m.operatorKeyword, ko.m.url, ko.m.escape, ko.m.regexp, ko.m.link, ko.m.special(ko.m.string)],
        color: "#0184bc"
      }, {
        tag: [ko.m.meta, ko.m.comment],
        color: Bo
      }, {
        tag: ko.m.strong,
        fontWeight: "bold"
      }, {
        tag: ko.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: ko.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: ko.m.link,
        color: Bo,
        textDecoration: "underline"
      }, {
        tag: ko.m.heading,
        fontWeight: "bold",
        color: Wo
      }, {
        tag: [ko.m.atom, ko.m.bool, ko.m.special(ko.m.variableName)],
        color: Fo
      }, {
        tag: [ko.m.processingInstruction, ko.m.string, ko.m.inserted],
        color: "#50a14f"
      }, {
        tag: ko.m.invalid,
        color: "#000000"
      }]),
      Mo = [co, (0, OT.fb)(Ko)];
    var ro = IT(35861),
      Ao = IT(40276);
    const go = kT.g.define(),
      ho = kT.h.define({
        create: () => !1,
        update(TT, oT) {
          for (const IT of oT.effects) IT.is(go) && (TT = IT.value);
          return TT
        }
      }),
      wo = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function mo(TT, oT) {
      return [ho, kT.i.fromClass(class {
        constructor(TT) {
          this.view = TT, this.onDown = TT => {
            const oT = TT.target instanceof Element && null !== TT.target.closest(".cm-tooltip");
            0 !== TT.button || oT || this.view.state.field(ho) || this.view.dispatch({
              effects: go.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(ho) && this.view.dispatch({
              effects: go.of(!1)
            })
          }, TT.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), kT.p.compute(["selection", ho], (IT => function(TT, oT, IT) {
        const iT = TT.selection.main;
        return iT.empty || TT.field(ho) || TT.sliceDoc(iT.from, iT.to).trim().length < 2 ? null : {
          pos: iT.from,
          above: !0,
          create: TT => {
            const iT = document.createElement("div");
            iT.className = "CodeSelectionActions", iT.setAttribute("role", "toolbar"), iT.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: zT,
                label: kT
              }
              of wo) {
              if (!IT && "explain" !== zT) continue;
              const WT = document.createElement("button");
              WT.type = "button", WT.textContent = kT, "change" !== zT && (WT.title = Ao.e, WT.dataset.asksAi = "true"), WT.addEventListener("mousedown", (TT => {
                TT.preventDefault()
              })), WT.addEventListener("click", (() => {
                const IT = TT.state.selection.main;
                if (IT.empty) return;
                const iT = {
                  action: zT,
                  path: oT,
                  fromLine: TT.state.doc.lineAt(IT.from).number,
                  toLine: TT.state.doc.lineAt(IT.to > IT.from && TT.state.doc.lineAt(IT.to).from === IT.to ? IT.to - 1 : IT.to).number,
                  text: TT.state.sliceDoc(IT.from, IT.to)
                };
                JT.h.XM("WorldCodeAiSelection", iT), TT.dispatch({
                  selection: {
                    anchor: IT.to
                  }
                })
              })), iT.appendChild(WT)
            }
            return {
              dom: iT
            }
          }
        }
      }(IT, TT, oT)))]
    }
    var eo = IT(1083);
    const Ro = new Set(["(", "{", "[", "<"]),
      uo = new Set([")", "}", "]", ">"]),
      vo = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Eo(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function IT(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = [];
        for (const zT of TT) {
          let TT;
          TT = "punctuation" === zT.kind ? vo.text : "parameterName" === zT.kind ? vo.parameterName : oT, iT.push({
            str: zT.text,
            style: {
              color: TT,
              opacity: IT ? .5 : void 0
            }
          })
        }
        return iT
      }
      const iT = [];
      if (iT.push(...IT(TT.prefixDisplayParts, vo.text)), TT.parameters.length > 0) {
        iT.push("\n");
        for (let zT = 0; zT < TT.parameters.length; zT++) {
          const kT = TT.parameters[zT];
          iT.push("\t"), iT.push(...IT(kT.displayParts, vo.parameter, null !== oT && zT !== oT)), iT.push("\n")
        }
      }
      return iT.push(...IT(TT.suffixDisplayParts, vo.suffix)), TT.documentation && (iT.push("\n\n"), iT.push(...IT(TT.documentation, vo.docs))), iT
    }
    var fo = function(TT) {
      return TT[TT.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", TT[TT.DuplicateIdentifier = 2300] = "DuplicateIdentifier", TT
    }(fo || {});
    const Co = new Set([fo.DuplicateIdentifier]),
      jo = new Set([fo.VariableDefinedElsewhere]),
      Jo = new Set([]),
      Uo = "/index.js";

    function ao(TT) {
      return "/" + TT
    }

    function Yo(TT, oT, IT) {
      TT.getSourceFile(oT) && TT.deleteFile(oT), TT.createFile(oT, IT)
    }

    function Qo(TT) {
      return !!TT && ((0, wT.p)(TT) || (0, wT.o)(TT))
    }

    function Oo(TT, oT, IT) {
      return () => {
        let iT = [...oT.languageService.getSemanticDiagnostics(IT), ...oT.languageService.getSyntacticDiagnostics(IT)];
        return iT = iT.filter((TT => !(0, RT.K)(TT.start) && !(0, RT.K)(TT.length) && !Co.has(TT.code))), TT || (iT = iT.filter((TT => !jo.has(TT.code)))), iT.map((TT => ({
          from: TT.start,
          to: TT.start + TT.length,
          message: "string" === typeof TT.messageText ? TT.messageText : TT.messageText.messageText,
          severity: Jo.has(TT.code) ? "warning" : "error"
        })))
      }
    }

    function Ho(TT, oT) {
      return IT => {
        var iT, zT;
        const kT = TT.languageService.getCompletionsAtPosition(oT, IT.pos, {});
        if (!kT) return {
          from: IT.pos,
          options: []
        };
        let WT = null !== (iT = null === (zT = kT.optionalReplacementSpan) || void 0 === zT ? void 0 : zT.start) && void 0 !== iT ? iT : IT.pos;
        if (!kT.optionalReplacementSpan) {
          const TT = IT.state.doc.sliceString(0, IT.pos);
          for (; WT > 0 && /[\w$]/.test(TT[WT - 1]);) WT--
        }
        return kT.entries = kT.entries.filter((TT => TT.kind !== KT().ScriptElementKind.warning)), {
          from: WT,
          options: kT.entries.map((iT => {
            var zT, kT, XT, BT;
            const FT = TT.languageService.getCompletionEntryDetails(oT, IT.pos, iT.name, {}, iT.source, {}, iT.data),
              ST = null !== (zT = null === (kT = iT.replacementSpan) || void 0 === kT ? void 0 : kT.start) && void 0 !== zT ? zT : WT,
              DT = iT.replacementSpan ? iT.replacementSpan.start + iT.replacementSpan.length : IT.pos,
              LT = null !== (XT = iT.insertText) && void 0 !== XT ? XT : iT.name;
            return {
              label: iT.name,
              detail: null === FT || void 0 === FT ? void 0 : FT.displayParts.map((TT => TT.text)).join(""),
              info: null === FT || void 0 === FT || null === (BT = FT.documentation) || void 0 === BT ? void 0 : BT.map((TT => TT.text)).join(""),
              apply: TT => {
                TT.dispatch({
                  changes: {
                    from: ST,
                    to: DT,
                    insert: LT
                  },
                  selection: {
                    anchor: ST + LT.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function no(TT) {
      return oT => {
        const IT = document.createElement("div");
        IT.className = "CodeEditorTooltip";
        let iT = !1;
        return queueMicrotask((() => {
          iT || (XT.render((0, eo.jsx)(LT.c, {
            text: TT
          }), IT), oT.requestMeasure())
        })), {
          dom: IT,
          destroy() {
            iT = !0, queueMicrotask((() => {
              XT.unmountComponentAtNode(IT)
            }))
          }
        }
      }
    }

    function qo(TT, oT, IT) {
      return iT => {
        var zT;
        if (!oT) return [];
        const kT = null === (zT = iT.selection.ec[0]) || void 0 === zT ? void 0 : zT.head;
        if (void 0 === kT) return [];
        const WT = TT.languageService.getSignatureHelpItems(IT, kT, {});
        if (!WT || !WT.items.length) return [];
        const XT = WT.applicableSpan.start - WT.items[0].prefixDisplayParts.map((TT => TT.text)).join("").length,
          BT = WT.applicableSpan.start,
          FT = iT.doc.lineAt(kT),
          ST = FT.from,
          DT = Math.min(FT.to, kT);
        let LT, xT;
        return XT < ST ? (LT = ST, xT = DT) : (LT = XT, xT = BT), [{
          pos: LT,
          end: xT,
          above: !1,
          create: no(Eo(WT.items[0], WT.argumentIndex))
        }]
      }
    }

    function Zo(TT, oT) {
      return (IT, iT, zT) => {
        const kT = TT.languageService.getQuickInfoAtPosition(oT, iT);
        if (!kT) return [];
        const WT = kT.textSpan.start,
          XT = kT.textSpan.start + kT.textSpan.length;
        if (iT < WT || iT >= XT) return [];
        if (kT.kind === KT().ScriptElementKind.memberFunctionElement || kT.kind === KT().ScriptElementKind.variableElement && "declare" === kT.kindModifiers) {
          const TT = kT.displayParts.findIndex((TT => "space" === TT.kind)); - 1 !== TT && (kT.displayParts = kT.displayParts.slice(TT));
          const oT = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            IT = kT.displayParts.findIndex((TT => "punctuation" === TT.kind && "(" === TT.text)); - 1 !== IT && (oT.prefixDisplayParts = kT.displayParts.slice(0, IT + 1), kT.displayParts = kT.displayParts.slice(IT + 1));
          const iT = kT.displayParts.findLastIndex((TT => "punctuation" === TT.kind && ")" === TT.text)); - 1 !== iT && (oT.suffixDisplayParts = kT.displayParts.slice(iT), kT.displayParts = kT.displayParts.slice(0, iT));
          let zT = 0,
            BT = [];
          for (const WT of kT.displayParts)
            if (Ro.has(WT.text) ? zT++ : uo.has(WT.text) && zT--, "lineBreak" !== WT.kind) {
              if ("space" === WT.kind) {
                if (0 === BT.length) continue;
                BT.push({
                  kind: "space",
                  text: " "
                })
              } else BT.push(WT);
              0 === zT && "," === WT.text && (oT.parameters.push({
                displayParts: BT
              }), BT = [])
            } return BT.length > 0 && oT.parameters.push({
            displayParts: BT
          }), oT.documentation = kT.documentation, [{
            pos: WT,
            end: XT,
            above: !0,
            create: no(Eo(oT))
          }]
        }
        const BT = [];
        for (const TT of kT.displayParts) BT.push({
          str: TT.text,
          style: {
            color: vo.text
          }
        });
        if (kT.documentation) {
          BT.push("\n\n");
          for (const TT of kT.documentation) BT.push({
            str: TT.text,
            style: {
              color: vo.docs
            }
          })
        }
        return [{
          pos: WT,
          end: XT,
          above: !0,
          create: no(BT)
        }]
      }
    }
    const so = {
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
      semicolons: KT().SemicolonPreference.Insert
    };
    const to = kT.g.define(),
      Go = {
        lineNumbers: !0,
        tabSize: 4
      };

    function po(TT) {
      let {
        isLobbyCode: oT,
        code: IT,
        onChange: XT,
        canEditCode: LT,
        setTemporaryMessage: cT,
        close: RT,
        showTooltips: tT,
        lightMode: GT,
        collabState: bT,
        onRemoteDocChange: yT,
        files: NT,
        activePath: PT,
        pluginName: VT,
        pluginFile: To,
        pluginSource: Io,
        setActiveDocReplacer: io,
        showAiHints: ko,
        canAiChangeCode: Wo = LT
      } = TT;
      const [Xo, Bo] = (0, WT.useState)(null), Fo = null === bT || void 0 === bT ? void 0 : bT.version, So = null === bT || void 0 === bT ? void 0 : bT.clientID, Do = (0, WT.useRef)({
        isLobbyCode: oT,
        files: NT,
        code: IT,
        activePath: PT
      }), Lo = (0, WT.useRef)(yT);
      Lo.current = yT;
      const xo = (0, WT.useRef)(null),
        co = (0, WT.useRef)(bT);
      co.current = bT;
      const Ko = (0, WT.useRef)(null),
        Ao = (0, WT.useRef)(null),
        go = (0, WT.useRef)(null),
        ho = (0, WT.useRef)(RT);
      ho.current = RT;
      const wo = (0, WT.useRef)(IT);
      wo.current = IT;
      const Ro = (0, WT.useRef)(Io);
      Ro.current = Io;
      const uo = function(TT, oT, IT, iT) {
        return IT ? `/plugin-preview/${IT}/${null!==iT&&void 0!==iT?iT:"index.ts"}` : TT ? ao(null !== oT && void 0 !== oT ? oT : hT.h) : Uo
      }(oT, PT, VT, To);
      (0, WT.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: TT,
            files: oT,
            code: IT,
            activePath: iT
          } = Do.current, zT = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: KT().ModuleKind.ESNext,
            moduleResolution: KT().ModuleResolutionKind.Bundler,
            target: KT().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(gT.e).map((TT => [TT.specifier, [TT.typesVfsPath]])))
            }
          }, kT = new Map, WT = [];
          if (TT) {
            const TT = null !== oT && void 0 !== oT ? oT : {
              [hT.h]: IT || "\n"
            };
            for (const [oT, IT] of Object.entries(TT)) {
              const TT = ao(oT);
              kT.set(TT, IT || "\n"), WT.push(TT)
            }
            const zT = ao(null !== iT && void 0 !== iT ? iT : hT.h);
            kT.has(zT) ? kT.set(zT, IT || "\n") : (kT.set(zT, IT || "\n"), WT.push(zT)), kT.set("/node_modules/@bloxd/index.d.ts", ST.default), WT.push("/node_modules/@bloxd/index.d.ts");
            for (const oT of Object.values(gT.e)) {
              kT.set(oT.typesVfsPath, oT.types), WT.push(oT.typesVfsPath);
              for (const [TT, IT] of Object.entries(oT.files)) {
                const iT = `/plugin-preview/${oT.name}/${TT}`;
                kT.set(iT, IT || "\n"), WT.push(iT)
              }
            }
          } else kT.set(Uo, IT || "\n"), WT.push(Uo);
          kT.set("/globals.d.ts", TT ? FT.d : BT.b), kT.set("/lib.d.ts", DT.d), WT.push("/globals.d.ts", "/lib.d.ts");
          const XT = xT.d(kT),
            LT = xT.f(XT, WT, KT(), zT);
          Bo({
            BM: LT,
            fsMap: kT
          })
        }()
      }), []), (0, WT.useEffect)((() => {
        var TT, iT;
        if (!Xo || !oT) return;
        const {
          BM: zT,
          fsMap: kT
        } = Xo;
        if (function(TT, oT, IT) {
            const iT = new Set;
            for (const [zT, kT] of Object.entries(IT)) {
              const IT = ao(zT);
              iT.add(IT);
              const WT = kT || "\n";
              oT.get(IT) !== WT && (oT.set(IT, WT), Yo(TT, IT, WT))
            }
            for (const zT of [...oT.keys()]) "/globals.d.ts" === zT || "/lib.d.ts" === zT || zT.startsWith("/node_modules/") || zT.startsWith("/plugin-preview/") || iT.has(zT) || (oT.delete(zT), TT.getSourceFile(zT) && TT.deleteFile(zT))
          }(zT, kT, null !== NT && void 0 !== NT ? NT : {
            [hT.h]: IT || "\n"
          }), VT) return void Yo(zT, uo, Io || "\n");
        const WT = null !== (TT = null === (iT = xo.current) || void 0 === iT ? void 0 : iT.state.doc.toString()) && void 0 !== TT ? TT : IT;
        Yo(zT, uo, WT || "\n")
      }), [NT, PT, Xo, VT, Io, uo, IT, oT]), (0, WT.useEffect)((() => {
        if (!Xo) return;
        const {
          BM: TT
        } = Xo;
        Yo(TT, uo, (VT ? Io : IT) || "\n")
      }), [IT, VT, Io, uo, Xo]), (0, WT.useEffect)((() => () => {
        Ao.current && (Ao.current(), Ao.current = null)
      }), []), (0, WT.useEffect)((() => (io(((TT, oT) => {
        if (VT) return !1;
        const IT = xo.current,
          iT = co.current,
          zT = iT ? (0, wT.v)(iT.docKey) : null;
        if (!IT || !iT || Ko.current !== iT.clientID || TT !== zT) return !1;
        const kT = IT.state.doc.toString();
        return kT !== oT && IT.dispatch({
          changes: {
            from: 0,
            to: kT.length,
            insert: oT
          }
        }), !0
      })), () => {
        xo.current = null, Ko.current = null, io(null)
      })), [io, VT]);
      const vo = oT ? VT ? null : null !== PT && void 0 !== PT ? PT : hT.h : ro.d,
        Eo = oo(xo, vo);
      zo(xo, cT), (0, eT.g)("FormatCode", (() => {
        if (!Xo || !xo.current || VT) return;
        const {
          BM: TT,
          fsMap: IT
        } = Xo, iT = TT.getSourceFile(uo).getFullText();
        let zT = 0;
        if (oT && NT)
          for (const [oT, XT] of Object.entries(NT)) oT !== (null !== PT && void 0 !== PT ? PT : hT.h) && (zT += XT.length);
        const kT = function(TT, oT, IT, iT, zT) {
          const kT = TT.languageService.getFormattingEditsForDocument(iT, so);
          if (!kT.length) return uT.b.error("Code is already formatted.");
          kT.sort(((TT, oT) => oT.span.start - TT.span.start));
          let WT = TT.getSourceFile(iT).getFullText();
          for (const XT of kT) WT = WT.slice(0, XT.span.start) + XT.RX + WT.slice(XT.span.start + XT.span.length);
          return WT !== (IT ? (0, mT.h)(WT, zT) : (0, mT.f)(WT)) ? uT.b.error("Formatting the code will go beyond the character limit.") : uT.b.value(WT)
        }(TT, 0, oT, uo, zT);
        if (kT.isError()) return void cT({
          message: kT.asError().message,
          type: "warning"
        });
        const WT = kT.getValue();
        WT && (xo.current.dispatch({
          changes: {
            from: 0,
            to: iT.length,
            insert: WT
          },
          selection: {
            anchor: WT.length
          }
        }), Yo(TT, uo, WT), XT(WT))
      }));
      const fo = (0, WT.useMemo)((() => {
        if (!Xo) return [];
        const {
          BM: TT,
          fsMap: IT
        } = Xo;
        ! function(TT, oT, IT, iT) {
          if (TT.getSourceFile(IT)) return;
          const zT = iT || "\n";
          oT.set(IT, zT), TT.createFile(IT, zT)
        }(TT, IT, uo, (VT ? Ro.current : wo.current) || "\n");
        const WT = oT && Qo(VT ? null !== To && void 0 !== To ? To : "index.ts" : PT),
          XT = [(0, zT.b)({
            jsx: !1,
            typescript: WT
          }), kT.d.highest(kT.b.domEventHandlers({
            keydown: TT => "Escape" === TT.key ? (ho.current(), TT.stopPropagation(), !0) : (TT.stopPropagation(), !1)
          })), (0, iT.e)({
            override: [Ho(TT, uo)]
          }), fT.l.fromClass(class {
            constructor(TT) {
              this.view = TT, this.timeout = null, this.scheduleParse()
            }
            update(TT) {
              (TT.docChanged || TT.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const TT = this.view.viewport.to;
                (0, OT.hb)(this.view.state, TT) || (0, OT.M)(this.view, TT, HT) || this.scheduleParse()
              }), nT))
            }
          }), ...dT, kT.b.lineWrapping, kT.h.define({
            create: qo(TT, tT, uo),
            update(oT, IT) {
              const iT = IT.effects.some((TT => TT.is(to)));
              return IT.docChanged || IT.selection || iT ? (Yo(TT, uo, IT.state.doc.toString() || " "), qo(TT, tT, uo)(IT.state)) : oT
            },
            provide: TT => kT.p.computeN([TT], (oT => oT.field(TT)))
          }), (0, kT.o)(Zo(TT, uo)), (0, rT.d)(Oo(oT, TT, uo)), kT.i.fromClass(class {
            constructor(TT) {
              this.view = TT, this.searchPanel = null
            }
            update(TT) {
              const oT = TT.view.dom.querySelector(".cm-search");
              if (oT !== this.searchPanel) {
                if (this.searchPanel = oT, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (TT => {
                  "Escape" === TT.key && (0, MT.c)(this.view), TT.stopPropagation()
                }))
              }
            }
          })];
        ko && !VT && XT.push(mo(oT ? null !== PT && void 0 !== PT ? PT : hT.h : ro.d, Wo));
        const BT = co.current;
        if (BT && !VT) {
          XT.push(... function(TT, oT, IT, iT, zT) {
            let kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const WT = (0, wT.v)(IT),
              XT = fT.l.fromClass(class {
                constructor(TT) {
                  this.view = TT, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = JT.h.subscribe("codeCollab", (TT => {
                    TT.docKey === WT && TT.type === wT.h.Updates && (TT.updates ? this.applyUpdates(TT.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(TT) {
                  const oT = JSON.parse(TT).map((TT => ({
                    clientID: TT.clientID,
                    changes: ET.ChangeSet.fromJSON(TT.changes)
                  })));
                  oT.length > 0 && (this.view.dispatch((0, vT.g)(this.view.state, oT)), zT && zT(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(TT) {
                  kT && (TT.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const TT = (0, vT.k)(this.view.state);
                  if (this.pushing || !TT.length) return;
                  const oT = Date.now() - this.lastPushTime;
                  if (oT < QT) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), QT - oT)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), aT);
                  const IT = (0, vT.e)(this.view.state),
                    zT = TT.map((TT => ({
                      clientID: TT.clientID,
                      changes: TT.changes.toJSON()
                    }))),
                    kT = JSON.stringify(zT);
                  kT.length <= wT.j ? CT.gameBridge.send("sendCodeCollab", {
                    po: wT.e.Push,
                    bo: WT,
                    yo: IT,
                    TI: kT
                  }) : (0, UT.postJsonWithMetricsCookiesAndJsonResponse)(`${iT.gsUrl}/code/collab-push`, jT.o["collab-push"].toBuffer({
                    gameNameWithVariation: iT.gameNameWithVariation,
                    lobbyName: iT.lobbyName,
                    docKey: WT,
                    version: IT,
                    updates: kT
                  }), {
                    retries: 0
                  }).catch((TT => {
                    console.error("[CodeCollab] HTTP push failed", TT)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const TT = (0, vT.e)(this.view.state);
                  (0, UT.postJsonWithMetricsCookiesAndJsonResponse)(`${iT.gsUrl}/code/collab-pull`, jT.o["collab-pull"].toBuffer({
                    gameNameWithVariation: iT.gameNameWithVariation,
                    lobbyName: iT.lobbyName,
                    docKey: WT,
                    fromVersion: TT
                  }), {
                    retries: 1
                  }).then((TT => {
                    this.destroyed || (TT.fullDoc ? JT.h.XM("codeCollabRejoin", {
                      docKey: WT,
                      doc: TT.fullDoc,
                      version: TT.version
                    }) : this.applyUpdates(TT.updates))
                  })).catch((TT => {
                    console.error("[CodeCollab] Pull failed", TT)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const TT = Date.now();
                  if (TT - this.lastCursorSent < YT) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), YT)));
                  this.lastCursorSent = TT;
                  const oT = this.view.state.selection.main;
                  CT.gameBridge.send("sendCodeCollab", {
                    po: wT.e.Cursor,
                    bo: WT,
                    zI: oT.anchor,
                    kI: oT.head
                  })
                }
                destroy() {
                  this.destroyed = !0, JT.h.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, vT.b)({
              startVersion: TT,
              clientID: oT
            }), XT]
          }(Fo, So, BT.docKey, BT.httpConfig, (TT => {
            var oT;
            null === (oT = Lo.current) || void 0 === oT || oT.call(Lo, TT)
          }), LT));
          const TT = function(TT, oT) {
            const IT = (0, wT.v)(TT);
            return {
              extensions: [pT],
              connect(TT) {
                if (oT) {
                  const IT = oT.map((TT => ZT.of({
                    playerId: TT.playerId,
                    playerName: TT.playerName,
                    colour: TT.colour,
                    anchor: TT.anchor,
                    head: TT.head,
                    lastMoved: Date.now()
                  })));
                  IT.length > 0 && TT.dispatch({
                    effects: IT
                  })
                }
                const iT = JT.h.subscribe("codeCollab", (oT => {
                    if (oT.docKey === IT)
                      if (oT.type === wT.h.RemoteCursor) TT.dispatch({
                        effects: ZT.of({
                          playerId: oT.playerId,
                          playerName: oT.playerName,
                          colour: oT.colour,
                          anchor: oT.anchor,
                          head: oT.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (oT.type === wT.h.Presence) {
                      const IT = JSON.parse(oT.peers),
                        iT = new Set(IT.map((TT => TT.playerId))),
                        zT = TT.state.field(pT),
                        kT = [];
                      for (const [TT] of zT.cursors) iT.has(TT) || kT.push(lT.of(TT));
                      kT.length > 0 && TT.dispatch({
                        effects: kT
                      })
                    }
                  })),
                  zT = setInterval((() => {
                    TT.dom.isConnected ? TT.dispatch({
                      effects: sT.of(Date.now())
                    }) : clearInterval(zT)
                  }), qT);
                return () => {
                  JT.h.unsubscribe(iT), clearInterval(zT)
                }
              }
            }
          }(BT.docKey, BT.existingCursors);
          XT.push(...TT.extensions), go.current = TT.connect
        } else go.current = null;
        return XT
      }), [oT, Xo, tT, Fo, So, uo, PT, VT, To, LT, ko, Wo]);
      if (!Xo || !bT && !VT) return (0, eo.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, eo.jsx)(AT.d, {})
      });
      const Co = VT ? `plugin-${VT}-${null!==To&&void 0!==To?To:"index.ts"}` : bT ? `collab-${bT.clientID}` : `local-${oT}`;
      return (0, eo.jsx)(kT.l, {
        value: VT ? null !== Io && void 0 !== Io ? Io : "" : IT,
        onChange: XT,
        extensions: fo,
        className: "CodeEditorContent",
        theme: GT ? Mo : "dark",
        editable: LT && !VT,
        basicSetup: Go,
        onCreateEditor: TT => {
          var oT;
          xo.current = TT, Ko.current = null !== (oT = null === bT || void 0 === bT ? void 0 : bT.clientID) && void 0 !== oT ? oT : null, Eo(TT), Ao.current && Ao.current(), go.current && (Ao.current = go.current(TT))
        }
      }, Co)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);