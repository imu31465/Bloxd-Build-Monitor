export const id = 297;
export const ids = [297];
export const modules = {
  41447: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => GU
    });
    var WT = mT(41451),
      zT = mT(41500),
      MT = mT(41506),
      gT = mT(63),
      nT = mT(85),
      HT = mT(41524),
      kT = mT(41530),
      jT = mT(4866),
      lT = mT(41535),
      LT = mT(2023),
      pT = mT(41538),
      BT = mT(41556),
      ZT = mT.n(BT),
      cT = mT(41512),
      vT = mT(41519),
      fT = mT(1446),
      qT = mT(36949),
      iT = mT(1336),
      bT = mT(2549),
      OT = mT(36843),
      eT = mT(1567),
      YT = mT(653),
      JT = mT(1341),
      xT = mT(41590),
      dT = mT(41459),
      wT = mT(41466),
      tT = mT(2046),
      aT = mT(3841),
      yT = mT(31),
      XT = mT(1231);
    const IT = 1e4,
      QT = 250,
      sT = 250;
    var FT = mT(41482);
    const PT = 50,
      VT = 100;
    const uT = 2e3,
      CT = dT.B.define(),
      rT = dT.B.define(),
      KT = dT.B.define();
    class ST extends wT.u {
      constructor(TT, UT, mT) {
        super(), this.colour = TT, this.playerName = UT, this.showName = mT
      }
      toDOM() {
        const TT = document.createElement("span");
        TT.className = "cm-remote-cursor-wrapper", TT.style.borderLeftColor = this.colour;
        const UT = document.createElement("span");
        if (UT.className = "cm-remote-cursor", UT.style.borderLeftColor = this.colour, TT.appendChild(UT), this.showName) {
          const UT = document.createElement("span");
          UT.className = "cm-remote-cursor-name", UT.style.backgroundColor = this.colour, UT.textContent = this.playerName, TT.appendChild(UT)
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

    function GT(TT, UT) {
      const mT = [],
        WT = [];
      for (const [, gT] of TT) {
        const TT = UT - gT.lastMoved < uT;
        if (mT.push({
            pos: gT.head,
            decoration: wT.c.widget({
              widget: new ST(gT.colour, gT.playerName, TT),
              side: 1
            })
          }), gT.anchor !== gT.head) {
          const TT = Math.min(gT.anchor, gT.head),
            UT = Math.max(gT.anchor, gT.head);
          WT.push({
            from: TT,
            to: UT,
            decoration: wT.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${gT.colour}33`
              }
            })
          })
        }
      }
      const zT = new dT.w,
        MT = [];
      for (const gT of mT) MT.push({
        bias: 1,
        deco: gT.decoration,
        from: gT.pos,
        to: gT.pos
      });
      for (const gT of WT) MT.push({
        bias: 0,
        deco: gT.decoration,
        from: gT.from,
        to: gT.to
      });
      MT.sort(((TT, UT) => TT.from - UT.from || TT.deco.startSide - UT.deco.startSide || TT.bias - UT.bias));
      for (const gT of MT) zT.add(gT.from, gT.to, gT.deco);
      return zT.finish()
    }
    const NT = dT.E.define({
      create: () => ({
        cursors: new Map,
        HW: wT.c.none
      }),
      update(TT, UT) {
        let mT = TT.cursors,
          WT = !1;
        if (UT.docChanged) {
          const TT = new Map;
          for (const [WT, zT] of mT) TT.set(WT, {
            ...zT,
            anchor: UT.changes.mapPos(zT.anchor, 1),
            head: UT.changes.mapPos(zT.head, 1)
          });
          mT = TT, WT = !0
        }
        for (const zT of UT.effects)
          if (zT.is(CT)) {
            if (!Number.isInteger(zT.value.anchor) || !Number.isInteger(zT.value.head)) {
              console.warn(`Code Editor: ignored player ${zT.value.playerId}'s cursor at ${zT.value.anchor}-${zT.value.head}`);
              continue
            }
            const MT = UT.state.doc.length,
              gT = {
                ...zT.value,
                anchor: Math.min(zT.value.anchor, MT),
                head: Math.min(zT.value.head, MT)
              };
            mT === TT.cursors && (mT = new Map(mT)), mT.set(gT.playerId, gT), WT = !0
          } else zT.is(rT) ? mT.has(zT.value) && (mT === TT.cursors && (mT = new Map(mT)), mT.delete(zT.value), WT = !0) : zT.is(KT) && (WT = !0);
        return WT ? {
          cursors: mT,
          HW: GT(mT, Date.now())
        } : TT
      },
      provide: TT => wT.i.HW.from(TT, (TT => TT.HW))
    });
    const ET = dT.B.define(),
      hT = wT.c.mark({
        class: "CodeInsertFlash"
      }),
      DT = dT.E.define({
        create: () => wT.c.none,
        update(TT, UT) {
          let mT = TT.map(UT.changes);
          for (const WT of UT.effects) WT.is(ET) && (mT = WT.value ? wT.c.set(hT.range(WT.value.from, WT.value.to)) : wT.c.none);
          return mT
        },
        provide: TT => wT.i.HW.from(TT)
      }),
      oT = dT.E.define({
        create: () => !1,
        update: (TT, UT) => TT || void 0 !== UT.annotation(dT.K.userEvent) && !UT.annotation(dT.K.remote)
      }),
      AT = [DT, oT];

    function RT(TT) {
      return TT.field(oT)
    }
    const TU = 3e4;

    function UU(TT, UT) {
      const mT = (0, gT.useRef)(null);
      (0, gT.useEffect)((() => {
        var TT;
        (null === (TT = mT.current) || void 0 === TT ? void 0 : TT.path) !== UT && (mT.current = null)
      }), [UT]);
      const WT = TT => {
        var WT;
        const zT = mT.current;
        if (null === TT || void 0 === TT || !TT.dom.isConnected || !zT || zT.path !== UT) return;
        mT.current = null;
        const {
          Jp: gT
        } = zT;
        if (gT && null !== gT.text && performance.now() - gT.at < TU) {
          const UT = function(TT, UT) {
            if (TT === UT) return null;
            const mT = Math.min(TT.length, UT.length);
            let WT = 0;
            for (; WT < mT && TT[WT] === UT[WT];) WT++;
            let zT = 0;
            for (; zT < mT - WT && TT[TT.length - 1 - zT] === UT[UT.length - 1 - zT];) zT++;
            return {
              from: WT,
              to: TT.length - zT,
              insert: UT.slice(WT, UT.length - zT)
            }
          }(TT.state.doc.toString(), gT.text);
          null !== UT && TT.dispatch({
            changes: UT,
            userEvent: gT.placed ? "input" : void 0
          })
        }
        const {
          doc: nT
        } = TT.state, HT = nT.line(Math.min(Math.max(zT.line, 1), nT.lines)), kT = HT.from + Math.min(null !== (WT = zT.column) && void 0 !== WT ? WT : 0, HT.length);
        TT.dispatch({
          selection: {
            anchor: kT
          },
          effects: MT.c.scrollIntoView(kT, {
            y: "center"
          }),
          userEvent: null !== gT && void 0 !== gT && gT.placed ? "select" : void 0
        }), !1 !== (null === gT || void 0 === gT ? void 0 : gT.focused) && TT.focus()
      };
      return (0, eT.g)("CodeEditorGoToLine", (UT => {
        mT.current = UT, WT(TT.current)
      })), (0, eT.g)("CodeEditorKeepEdits", (() => {
        const WT = TT.current;
        if (null === WT || !WT.dom.isConnected || null === UT) return;
        const {
          doc: zT,
          selection: MT
        } = WT.state, {
          head: gT
        } = MT.main, nT = zT.lineAt(gT), HT = {
          text: (0, xT.k)(WT.state).length > 0 ? zT.toString() : null,
          at: performance.now(),
          focused: WT.hasFocus,
          placed: RT(WT.state)
        };
        mT.current = {
          path: UT,
          line: nT.number,
          column: gT - nT.from,
          Jp: HT
        }
      })), TT => {
        var zT;
        const MT = mT.current;
        !1 === (null === MT || void 0 === MT || null === (zT = MT.Jp) || void 0 === zT ? void 0 : zT.focused) && MT.path === UT || TT.focus(), WT(TT)
      }
    }
    var mU = mT(4461),
      WU = mT(1288);

    function zU(TT, UT) {
      const {
        t: mT
      } = (0, WU.z)();
      (0, eT.g)("CodeEditorInsertText", (WT => {
        let {
          text: zT,
          focus: MT
        } = WT;
        const gT = TT.current,
          nT = null !== gT && void 0 !== gT && gT.dom.isConnected ? function(TT, UT) {
            if (!RT(TT)) return null;
            const {
              from: mT,
              to: WT
            } = TT.selection.main, zT = mT + UT.length;
            return {
              changes: {
                from: mT,
                to: WT,
                insert: UT
              },
              selection: {
                anchor: zT
              },
              effects: [wT.i.scrollIntoView(zT, {
                y: "center"
              }), ET.of({
                from: mT,
                to: zT
              })],
              userEvent: "input"
            }
          }(gT.state, zT) : null;
        null !== gT && null !== nT ? (gT.dispatch(nT), MT && gT.focus(), setTimeout((() => {
          gT.dom.isConnected && gT.dispatch({
            effects: ET.of(null)
          })
        }), 1500)) : (0, mU.b)(zT).then((() => {
          UT({
            message: mT("codeEditorWorld:pickCopied", {
              coords: zT
            }),
            type: "success"
          })
        }), (TT => {
          console.error("Pick could not copy the coordinates", TT), UT({
            message: mT("codeEditorWorld:pickPlaceCursor", {
              coords: zT
            }),
            type: "warning"
          })
        }))
      }))
    }
    var MU = mT(41493);
    const gU = "#e45649",
      nU = "#383a42",
      HU = "#696c77",
      kU = "#986801",
      jU = "#e5e5e6",
      lU = "#fafafa",
      LU = "#eaeaeb",
      pU = "#526fff",
      BU = wT.i.theme({
        "&": {
          color: nU,
          backgroundColor: lU
        },
        ".cm-content": {
          caretColor: pU
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: pU
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: nU
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
          backgroundColor: lU,
          color: HU,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: jU
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: LU
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: LU,
          borderBottomColor: LU
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: jU,
            color: nU
          }
        }
      }, {
        dark: !1
      }),
      ZU = FT.d.define([{
        tag: MU.k.keyword,
        color: "#a626a4"
      }, {
        tag: [MU.k.name, MU.k.deleted, MU.k.character, MU.k.propertyName, MU.k.macroName],
        color: gU
      }, {
        tag: [MU.k.function(MU.k.variableName), MU.k.labelName],
        color: "#4078f2"
      }, {
        tag: [MU.k.color, MU.k.constant(MU.k.name), MU.k.standard(MU.k.name)],
        color: kU
      }, {
        tag: [MU.k.definition(MU.k.name), MU.k.separator],
        color: nU
      }, {
        tag: [MU.k.typeName, MU.k.className, MU.k.number, MU.k.changed, MU.k.annotation, MU.k.modifier, MU.k.self, MU.k.namespace],
        color: "#c18401"
      }, {
        tag: [MU.k.operator, MU.k.operatorKeyword, MU.k.url, MU.k.escape, MU.k.regexp, MU.k.link, MU.k.special(MU.k.string)],
        color: "#0184bc"
      }, {
        tag: [MU.k.meta, MU.k.comment],
        color: HU
      }, {
        tag: MU.k.strong,
        fontWeight: "bold"
      }, {
        tag: MU.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: MU.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: MU.k.link,
        color: HU,
        textDecoration: "underline"
      }, {
        tag: MU.k.heading,
        fontWeight: "bold",
        color: gU
      }, {
        tag: [MU.k.atom, MU.k.bool, MU.k.special(MU.k.variableName)],
        color: kU
      }, {
        tag: [MU.k.processingInstruction, MU.k.string, MU.k.inserted],
        color: "#50a14f"
      }, {
        tag: MU.k.invalid,
        color: "#000000"
      }]),
      cU = [BU, (0, FT.bb)(ZU)];
    var vU = mT(37007),
      fU = mT(41599);
    const qU = MT.j.define(),
      iU = MT.n.define({
        create: () => !1,
        update(TT, UT) {
          for (const mT of UT.effects) mT.is(qU) && (TT = mT.value);
          return TT
        }
      }),
      bU = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function OU(TT, UT) {
      return [iU, MT.p.fromClass(class {
        constructor(TT) {
          this.view = TT, this.onDown = TT => {
            const UT = TT.target instanceof Element && null !== TT.target.closest(".cm-tooltip");
            0 !== TT.button || UT || this.view.state.field(iU) || this.view.dispatch({
              effects: qU.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(iU) && this.view.dispatch({
              effects: qU.of(!1)
            })
          }, TT.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), MT.x.compute(["selection", iU], (mT => function(TT, UT, mT) {
        const WT = TT.selection.main;
        return WT.empty || TT.field(iU) || TT.sliceDoc(WT.from, WT.to).trim().length < 2 ? null : {
          pos: WT.from,
          above: !0,
          create: TT => {
            const WT = document.createElement("div");
            WT.className = "CodeSelectionActions", WT.setAttribute("role", "toolbar"), WT.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: zT,
                label: MT
              }
              of bU) {
              if (!mT && "explain" !== zT) continue;
              const gT = document.createElement("button");
              gT.type = "button", gT.textContent = MT, "change" !== zT && (gT.title = fU.d, gT.dataset.asksAi = "true"), gT.addEventListener("mousedown", (TT => {
                TT.preventDefault()
              })), gT.addEventListener("click", (() => {
                const mT = TT.state.selection.main;
                if (mT.empty) return;
                const WT = {
                  action: zT,
                  path: UT,
                  fromLine: TT.state.doc.lineAt(mT.from).number,
                  toLine: TT.state.doc.lineAt(mT.to > mT.from && TT.state.doc.lineAt(mT.to).from === mT.to ? mT.to - 1 : mT.to).number,
                  text: TT.state.sliceDoc(mT.from, mT.to)
                };
                yT.j.EZ("WorldCodeAiSelection", WT), TT.dispatch({
                  selection: {
                    anchor: mT.to
                  }
                })
              })), WT.appendChild(gT)
            }
            return {
              dom: WT
            }
          }
        }
      }(mT, TT, UT)))]
    }
    var eU = mT(1188);
    const YU = new Set(["(", "{", "[", "<"]),
      JU = new Set([")", "}", "]", ">"]),
      xU = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function dU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function mT(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = [];
        for (const zT of TT) {
          let TT;
          TT = "punctuation" === zT.kind ? xU.text : "parameterName" === zT.kind ? xU.parameterName : UT, WT.push({
            str: zT.text,
            style: {
              color: TT,
              opacity: mT ? .5 : void 0
            }
          })
        }
        return WT
      }
      const WT = [];
      if (WT.push(...mT(TT.prefixDisplayParts, xU.text)), TT.parameters.length > 0) {
        WT.push("\n");
        for (let zT = 0; zT < TT.parameters.length; zT++) {
          const MT = TT.parameters[zT];
          WT.push("\t"), WT.push(...mT(MT.displayParts, xU.parameter, null !== UT && zT !== UT)), WT.push("\n")
        }
      }
      return WT.push(...mT(TT.suffixDisplayParts, xU.suffix)), TT.documentation && (WT.push("\n\n"), WT.push(...mT(TT.documentation, xU.docs))), WT
    }
    var wU = function(TT) {
      return TT[TT.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", TT[TT.DuplicateIdentifier = 2300] = "DuplicateIdentifier", TT
    }(wU || {});
    const tU = new Set([wU.DuplicateIdentifier]),
      aU = new Set([wU.VariableDefinedElsewhere]),
      yU = new Set([]),
      XU = "/index.js";

    function IU(TT) {
      return "/" + TT
    }

    function QU(TT, UT, mT) {
      TT.getSourceFile(UT) && TT.deleteFile(UT), TT.createFile(UT, mT)
    }

    function sU(TT) {
      return !!TT && ((0, bT.p)(TT) || (0, bT.m)(TT))
    }

    function FU(TT, UT, mT) {
      return () => {
        let WT = [...UT.languageService.getSemanticDiagnostics(mT), ...UT.languageService.getSyntacticDiagnostics(mT)];
        return WT = WT.filter((TT => !(0, YT.E)(TT.start) && !(0, YT.E)(TT.length) && !tU.has(TT.code))), TT || (WT = WT.filter((TT => !aU.has(TT.code)))), WT.map((TT => ({
          from: TT.start,
          to: TT.start + TT.length,
          message: "string" === typeof TT.messageText ? TT.messageText : TT.messageText.messageText,
          severity: yU.has(TT.code) ? "warning" : "error"
        })))
      }
    }

    function PU(TT, UT) {
      return mT => {
        var WT, zT;
        const MT = TT.languageService.getCompletionsAtPosition(UT, mT.pos, {});
        if (!MT) return {
          from: mT.pos,
          options: []
        };
        let gT = null !== (WT = null === (zT = MT.optionalReplacementSpan) || void 0 === zT ? void 0 : zT.start) && void 0 !== WT ? WT : mT.pos;
        if (!MT.optionalReplacementSpan) {
          const TT = mT.state.doc.sliceString(0, mT.pos);
          for (; gT > 0 && /[\w$]/.test(TT[gT - 1]);) gT--
        }
        return MT.entries = MT.entries.filter((TT => TT.kind !== ZT().ScriptElementKind.warning)), {
          from: gT,
          options: MT.entries.map((WT => {
            var zT, MT, nT, HT;
            const kT = TT.languageService.getCompletionEntryDetails(UT, mT.pos, WT.name, {}, WT.source, {}, WT.data),
              jT = null !== (zT = null === (MT = WT.replacementSpan) || void 0 === MT ? void 0 : MT.start) && void 0 !== zT ? zT : gT,
              lT = WT.replacementSpan ? WT.replacementSpan.start + WT.replacementSpan.length : mT.pos,
              LT = null !== (nT = WT.insertText) && void 0 !== nT ? nT : WT.name;
            return {
              label: WT.name,
              detail: null === kT || void 0 === kT ? void 0 : kT.displayParts.map((TT => TT.text)).join(""),
              info: null === kT || void 0 === kT || null === (HT = kT.documentation) || void 0 === HT ? void 0 : HT.map((TT => TT.text)).join(""),
              apply: TT => {
                TT.dispatch({
                  changes: {
                    from: jT,
                    to: lT,
                    insert: LT
                  },
                  selection: {
                    anchor: jT + LT.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function VU(TT) {
      return UT => {
        const mT = document.createElement("div");
        mT.className = "CodeEditorTooltip";
        let WT = !1;
        return queueMicrotask((() => {
          WT || (nT.render((0, eU.jsx)(LT.e, {
            text: TT
          }), mT), UT.requestMeasure())
        })), {
          dom: mT,
          destroy() {
            WT = !0, queueMicrotask((() => {
              nT.unmountComponentAtNode(mT)
            }))
          }
        }
      }
    }

    function uU(TT, UT, mT) {
      return WT => {
        var zT;
        if (!UT) return [];
        const MT = null === (zT = WT.selection.hZ[0]) || void 0 === zT ? void 0 : zT.head;
        if (void 0 === MT) return [];
        const gT = TT.languageService.getSignatureHelpItems(mT, MT, {});
        if (!gT || !gT.items.length) return [];
        const nT = gT.applicableSpan.start - gT.items[0].prefixDisplayParts.map((TT => TT.text)).join("").length,
          HT = gT.applicableSpan.start,
          kT = WT.doc.lineAt(MT),
          jT = kT.from,
          lT = Math.min(kT.to, MT);
        let LT, pT;
        return nT < jT ? (LT = jT, pT = lT) : (LT = nT, pT = HT), [{
          pos: LT,
          end: pT,
          above: !1,
          create: VU(dU(gT.items[0], gT.argumentIndex))
        }]
      }
    }

    function CU(TT, UT) {
      return (mT, WT, zT) => {
        const MT = TT.languageService.getQuickInfoAtPosition(UT, WT);
        if (!MT) return [];
        const gT = MT.textSpan.start,
          nT = MT.textSpan.start + MT.textSpan.length;
        if (WT < gT || WT >= nT) return [];
        if (MT.kind === ZT().ScriptElementKind.memberFunctionElement || MT.kind === ZT().ScriptElementKind.variableElement && "declare" === MT.kindModifiers) {
          const TT = MT.displayParts.findIndex((TT => "space" === TT.kind)); - 1 !== TT && (MT.displayParts = MT.displayParts.slice(TT));
          const UT = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            mT = MT.displayParts.findIndex((TT => "punctuation" === TT.kind && "(" === TT.text)); - 1 !== mT && (UT.prefixDisplayParts = MT.displayParts.slice(0, mT + 1), MT.displayParts = MT.displayParts.slice(mT + 1));
          const WT = MT.displayParts.findLastIndex((TT => "punctuation" === TT.kind && ")" === TT.text)); - 1 !== WT && (UT.suffixDisplayParts = MT.displayParts.slice(WT), MT.displayParts = MT.displayParts.slice(0, WT));
          let zT = 0,
            HT = [];
          for (const gT of MT.displayParts)
            if (YU.has(gT.text) ? zT++ : JU.has(gT.text) && zT--, "lineBreak" !== gT.kind) {
              if ("space" === gT.kind) {
                if (0 === HT.length) continue;
                HT.push({
                  kind: "space",
                  text: " "
                })
              } else HT.push(gT);
              0 === zT && "," === gT.text && (UT.parameters.push({
                displayParts: HT
              }), HT = [])
            } return HT.length > 0 && UT.parameters.push({
            displayParts: HT
          }), UT.documentation = MT.documentation, [{
            pos: gT,
            end: nT,
            above: !0,
            create: VU(dU(UT))
          }]
        }
        const HT = [];
        for (const TT of MT.displayParts) HT.push({
          str: TT.text,
          style: {
            color: xU.text
          }
        });
        if (MT.documentation) {
          HT.push("\n\n");
          for (const TT of MT.documentation) HT.push({
            str: TT.text,
            style: {
              color: xU.docs
            }
          })
        }
        return [{
          pos: gT,
          end: nT,
          above: !0,
          create: VU(HT)
        }]
      }
    }
    const rU = {
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
      semicolons: ZT().SemicolonPreference.Insert
    };
    const KU = MT.j.define(),
      SU = {
        lineNumbers: !0,
        tabSize: 4
      };

    function GU(TT) {
      let {
        isLobbyCode: UT,
        code: mT,
        onChange: nT,
        canEditCode: LT,
        setTemporaryMessage: BT,
        close: YT,
        showTooltips: ST,
        lightMode: GT,
        collabState: ET,
        onRemoteDocChange: hT,
        files: DT,
        activePath: oT,
        pluginName: RT,
        pluginFile: TU,
        pluginSource: mU,
        setActiveDocReplacer: WU,
        showAiHints: MU,
        canAiChangeCode: gU = LT
      } = TT;
      const [nU, HU] = (0, gT.useState)(null), kU = null === ET || void 0 === ET ? void 0 : ET.version, jU = null === ET || void 0 === ET ? void 0 : ET.clientID, lU = (0, gT.useRef)({
        isLobbyCode: UT,
        files: DT,
        code: mT,
        activePath: oT
      }), LU = (0, gT.useRef)(hT);
      LU.current = hT;
      const pU = (0, gT.useRef)(null),
        BU = (0, gT.useRef)(ET);
      BU.current = ET;
      const ZU = (0, gT.useRef)(null),
        fU = (0, gT.useRef)(null),
        qU = (0, gT.useRef)(null),
        iU = (0, gT.useRef)(YT);
      iU.current = YT;
      const bU = (0, gT.useRef)(mT);
      bU.current = mT;
      const YU = (0, gT.useRef)(mU);
      YU.current = mU;
      const JU = function(TT, UT, mT, WT) {
        return mT ? `/plugin-preview/${mT}/${null!==WT&&void 0!==WT?WT:"index.ts"}` : TT ? IU(null !== UT && void 0 !== UT ? UT : iT.e) : XU
      }(UT, oT, RT, TU);
      (0, gT.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: TT,
            files: UT,
            code: mT,
            activePath: WT
          } = lU.current, zT = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: ZT().ModuleKind.ESNext,
            moduleResolution: ZT().ModuleResolutionKind.Bundler,
            target: ZT().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(qT.e).map((TT => [TT.specifier, [TT.typesVfsPath]])))
            }
          }, MT = new Map, gT = [];
          if (TT) {
            const TT = null !== UT && void 0 !== UT ? UT : {
              [iT.e]: mT || "\n"
            };
            for (const [UT, mT] of Object.entries(TT)) {
              const TT = IU(UT);
              MT.set(TT, mT || "\n"), gT.push(TT)
            }
            const zT = IU(null !== WT && void 0 !== WT ? WT : iT.e);
            MT.has(zT) ? MT.set(zT, mT || "\n") : (MT.set(zT, mT || "\n"), gT.push(zT)), MT.set("/node_modules/@bloxd/index.d.ts", jT.default), gT.push("/node_modules/@bloxd/index.d.ts");
            for (const UT of Object.values(qT.e)) {
              MT.set(UT.typesVfsPath, UT.types), gT.push(UT.typesVfsPath);
              for (const [TT, mT] of Object.entries(UT.files)) {
                const WT = `/plugin-preview/${UT.name}/${TT}`;
                MT.set(WT, mT || "\n"), gT.push(WT)
              }
            }
          } else MT.set(XU, mT || "\n"), gT.push(XU);
          MT.set("/globals.d.ts", TT ? kT.d : HT.d), MT.set("/lib.d.ts", lT.b), gT.push("/globals.d.ts", "/lib.d.ts");
          const nT = pT.c(MT),
            LT = pT.d(nT, gT, ZT(), zT);
          HU({
            DZ: LT,
            fsMap: MT
          })
        }()
      }), []), (0, gT.useEffect)((() => {
        var TT, WT;
        if (!nU || !UT) return;
        const {
          DZ: zT,
          fsMap: MT
        } = nU;
        if (function(TT, UT, mT) {
            const WT = new Set;
            for (const [zT, MT] of Object.entries(mT)) {
              const mT = IU(zT);
              WT.add(mT);
              const gT = MT || "\n";
              UT.get(mT) !== gT && (UT.set(mT, gT), QU(TT, mT, gT))
            }
            for (const zT of [...UT.keys()]) "/globals.d.ts" === zT || "/lib.d.ts" === zT || zT.startsWith("/node_modules/") || zT.startsWith("/plugin-preview/") || WT.has(zT) || (UT.delete(zT), TT.getSourceFile(zT) && TT.deleteFile(zT))
          }(zT, MT, null !== DT && void 0 !== DT ? DT : {
            [iT.e]: mT || "\n"
          }), RT) return void QU(zT, JU, mU || "\n");
        const gT = null !== (TT = null === (WT = pU.current) || void 0 === WT ? void 0 : WT.state.doc.toString()) && void 0 !== TT ? TT : mT;
        QU(zT, JU, gT || "\n")
      }), [DT, oT, nU, RT, mU, JU, mT, UT]), (0, gT.useEffect)((() => {
        if (!nU) return;
        const {
          DZ: TT
        } = nU;
        QU(TT, JU, (RT ? mU : mT) || "\n")
      }), [mT, RT, mU, JU, nU]), (0, gT.useEffect)((() => () => {
        fU.current && (fU.current(), fU.current = null)
      }), []), (0, gT.useEffect)((() => (WU(((TT, UT) => {
        if (RT) return !1;
        const mT = pU.current,
          WT = BU.current,
          zT = WT ? (0, bT.A)(WT.docKey) : null;
        if (!mT || !WT || ZU.current !== WT.clientID || TT !== zT) return !1;
        const MT = mT.state.doc.toString();
        return MT !== UT && mT.dispatch({
          changes: {
            from: 0,
            to: MT.length,
            insert: UT
          }
        }), !0
      })), () => {
        pU.current = null, ZU.current = null, WU(null)
      })), [WU, RT]);
      const xU = UT ? RT ? null : null !== oT && void 0 !== oT ? oT : iT.e : vU.d,
        dU = UU(pU, xU);
      zU(pU, BT), (0, eT.g)("FormatCode", (() => {
        if (!nU || !pU.current || RT) return;
        const {
          DZ: TT,
          fsMap: mT
        } = nU, WT = TT.getSourceFile(JU).getFullText();
        let zT = 0;
        if (UT && DT)
          for (const [UT, nT] of Object.entries(DT)) UT !== (null !== oT && void 0 !== oT ? oT : iT.e) && (zT += nT.length);
        const MT = function(TT, UT, mT, WT, zT) {
          const MT = TT.languageService.getFormattingEditsForDocument(WT, rU);
          if (!MT.length) return JT.c.error("Code is already formatted.");
          MT.sort(((TT, UT) => UT.span.start - TT.span.start));
          let gT = TT.getSourceFile(WT).getFullText();
          for (const nT of MT) gT = gT.slice(0, nT.span.start) + nT.iH + gT.slice(nT.span.start + nT.span.length);
          return gT !== (mT ? (0, OT.j)(gT, zT) : (0, OT.i)(gT)) ? JT.c.error("Formatting the code will go beyond the character limit.") : JT.c.value(gT)
        }(TT, 0, UT, JU, zT);
        if (MT.isError()) return void BT({
          message: MT.asError().message,
          type: "warning"
        });
        const gT = MT.getValue();
        gT && (pU.current.dispatch({
          changes: {
            from: 0,
            to: WT.length,
            insert: gT
          },
          selection: {
            anchor: gT.length
          }
        }), QU(TT, JU, gT), nT(gT))
      }));
      const wU = (0, gT.useMemo)((() => {
        if (!nU) return [];
        const {
          DZ: TT,
          fsMap: mT
        } = nU;
        ! function(TT, UT, mT, WT) {
          if (TT.getSourceFile(mT)) return;
          const zT = WT || "\n";
          UT.set(mT, zT), TT.createFile(mT, zT)
        }(TT, mT, JU, (RT ? YU.current : bU.current) || "\n");
        const gT = UT && sU(RT ? null !== TU && void 0 !== TU ? TU : "index.ts" : oT),
          nT = [(0, zT.e)({
            jsx: !1,
            typescript: gT
          }), MT.f.highest(MT.c.domEventHandlers({
            keydown: TT => "Escape" === TT.key ? (iU.current(), TT.stopPropagation(), !0) : (TT.stopPropagation(), !1)
          })), (0, WT.b)({
            override: [PU(TT, JU)]
          }), wT.q.fromClass(class {
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
                (0, FT.fb)(this.view.state, TT) || (0, FT.J)(this.view, TT, PT) || this.scheduleParse()
              }), VT))
            }
          }), ...AT, MT.c.lineWrapping, MT.n.define({
            create: uU(TT, ST, JU),
            update(UT, mT) {
              const WT = mT.effects.some((TT => TT.is(KU)));
              return mT.docChanged || mT.selection || WT ? (QU(TT, JU, mT.state.doc.toString() || " "), uU(TT, ST, JU)(mT.state)) : UT
            },
            provide: TT => MT.x.computeN([TT], (UT => UT.field(TT)))
          }), (0, MT.u)(CU(TT, JU)), (0, vT.h)(FU(UT, TT, JU)), MT.p.fromClass(class {
            constructor(TT) {
              this.view = TT, this.searchPanel = null
            }
            update(TT) {
              const UT = TT.view.dom.querySelector(".cm-search");
              if (UT !== this.searchPanel) {
                if (this.searchPanel = UT, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (TT => {
                  "Escape" === TT.key && (0, cT.b)(this.view), TT.stopPropagation()
                }))
              }
            }
          })];
        MU && !RT && nT.push(OU(UT ? null !== oT && void 0 !== oT ? oT : iT.e : vU.d, gU));
        const HT = BU.current;
        if (HT && !RT) {
          nT.push(... function(TT, UT, mT, WT, zT) {
            let MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const gT = (0, bT.A)(mT),
              nT = wT.q.fromClass(class {
                constructor(TT) {
                  this.view = TT, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = yT.j.subscribe("codeCollab", (TT => {
                    TT.docKey === gT && TT.type === bT.f.Updates && (TT.updates ? this.applyUpdates(TT.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(TT) {
                  const UT = JSON.parse(TT).map((TT => ({
                    clientID: TT.clientID,
                    changes: dT.ChangeSet.fromJSON(TT.changes)
                  })));
                  UT.length > 0 && (this.view.dispatch((0, xT.i)(this.view.state, UT)), zT && zT(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(TT) {
                  MT && (TT.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const TT = (0, xT.k)(this.view.state);
                  if (this.pushing || !TT.length) return;
                  const UT = Date.now() - this.lastPushTime;
                  if (UT < sT) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), sT - UT)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), IT);
                  const mT = (0, xT.f)(this.view.state),
                    zT = TT.map((TT => ({
                      clientID: TT.clientID,
                      changes: TT.changes.toJSON()
                    }))),
                    MT = JSON.stringify(zT);
                  MT.length <= bT.g ? tT.gameBridge.send("sendCodeCollab", {
                    Rz: bT.c.Push,
                    TM: gT,
                    UM: mT,
                    zM: MT
                  }) : (0, XT.postJsonWithMetricsCookiesAndJsonResponse)(`${WT.gsUrl}/code/collab-push`, aT.s["collab-push"].toBuffer({
                    gameNameWithVariation: WT.gameNameWithVariation,
                    lobbyName: WT.lobbyName,
                    docKey: gT,
                    version: mT,
                    updates: MT
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
                  const TT = (0, xT.f)(this.view.state);
                  (0, XT.postJsonWithMetricsCookiesAndJsonResponse)(`${WT.gsUrl}/code/collab-pull`, aT.s["collab-pull"].toBuffer({
                    gameNameWithVariation: WT.gameNameWithVariation,
                    lobbyName: WT.lobbyName,
                    docKey: gT,
                    fromVersion: TT
                  }), {
                    retries: 1
                  }).then((TT => {
                    this.destroyed || (TT.fullDoc ? yT.j.EZ("codeCollabRejoin", {
                      docKey: gT,
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
                  if (TT - this.lastCursorSent < QT) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), QT)));
                  this.lastCursorSent = TT;
                  const UT = this.view.state.selection.main;
                  tT.gameBridge.send("sendCodeCollab", {
                    Rz: bT.c.Cursor,
                    TM: gT,
                    HM: UT.anchor,
                    kM: UT.head
                  })
                }
                destroy() {
                  this.destroyed = !0, yT.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, xT.e)({
              startVersion: TT,
              clientID: UT
            }), nT]
          }(kU, jU, HT.docKey, HT.httpConfig, (TT => {
            var UT;
            null === (UT = LU.current) || void 0 === UT || UT.call(LU, TT)
          }), LT));
          const TT = function(TT, UT) {
            const mT = (0, bT.A)(TT);
            return {
              extensions: [NT],
              connect(TT) {
                if (UT) {
                  const mT = UT.map((TT => CT.of({
                    playerId: TT.playerId,
                    playerName: TT.playerName,
                    colour: TT.colour,
                    anchor: TT.anchor,
                    head: TT.head,
                    lastMoved: Date.now()
                  })));
                  mT.length > 0 && TT.dispatch({
                    effects: mT
                  })
                }
                const WT = yT.j.subscribe("codeCollab", (UT => {
                    if (UT.docKey === mT)
                      if (UT.type === bT.f.RemoteCursor) TT.dispatch({
                        effects: CT.of({
                          playerId: UT.playerId,
                          playerName: UT.playerName,
                          colour: UT.colour,
                          anchor: UT.anchor,
                          head: UT.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (UT.type === bT.f.Presence) {
                      const mT = JSON.parse(UT.peers),
                        WT = new Set(mT.map((TT => TT.playerId))),
                        zT = TT.state.field(NT),
                        MT = [];
                      for (const [TT] of zT.cursors) WT.has(TT) || MT.push(rT.of(TT));
                      MT.length > 0 && TT.dispatch({
                        effects: MT
                      })
                    }
                  })),
                  zT = setInterval((() => {
                    TT.dom.isConnected ? TT.dispatch({
                      effects: KT.of(Date.now())
                    }) : clearInterval(zT)
                  }), uT);
                return () => {
                  yT.j.unsubscribe(WT), clearInterval(zT)
                }
              }
            }
          }(HT.docKey, HT.existingCursors);
          nT.push(...TT.extensions), qU.current = TT.connect
        } else qU.current = null;
        return nT
      }), [UT, nU, ST, kU, jU, JU, oT, RT, TU, LT, MU, gU]);
      if (!nU || !ET && !RT) return (0, eU.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, eU.jsx)(fT.c, {})
      });
      const tU = RT ? `plugin-${RT}-${null!==TU&&void 0!==TU?TU:"index.ts"}` : ET ? `collab-${ET.clientID}` : `local-${UT}`;
      return (0, eU.jsx)(MT.t, {
        value: RT ? null !== mU && void 0 !== mU ? mU : "" : mT,
        onChange: nT,
        extensions: wU,
        className: "CodeEditorContent",
        theme: GT ? cU : "dark",
        editable: LT && !RT,
        basicSetup: SU,
        onCreateEditor: TT => {
          var UT;
          pU.current = TT, ZU.current = null !== (UT = null === ET || void 0 === ET ? void 0 : ET.clientID) && void 0 !== UT ? UT : null, dU(TT), fU.current && fU.current(), qU.current && (fU.current = qU.current(TT))
        }
      }, tU)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);