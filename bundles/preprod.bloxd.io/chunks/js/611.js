export const id = 611;
export const ids = [611];
export const modules = {
  53492: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => Ii
    });
    var mW = OW(53501),
      EW = OW(53539),
      NW = OW(53546),
      PW = OW(62),
      LW = OW(80),
      cW = OW(53565),
      wW = OW(53569),
      tW = OW(5506),
      ZW = OW(53577),
      xW = OW(2021),
      lW = OW(53583),
      AW = OW(53597),
      bW = OW.n(AW),
      jW = OW(53555),
      UW = OW(53557),
      kW = OW(1383),
      sW = OW(38001),
      MW = OW(1230),
      KW = OW(3327),
      SW = OW(37423),
      YW = OW(1526),
      yW = OW(643),
      TW = OW(1239),
      JW = OW(53636),
      hW = OW(53507),
      HW = OW(53511),
      nW = OW(2037),
      uW = OW(2478),
      oW = OW(27),
      dW = OW(1111);
    const eW = 1e4,
      vW = 250,
      gW = 250;
    var DW = OW(53522);
    const VW = 50,
      pW = 100;
    const fW = 2e3,
      CW = hW.H.define(),
      XW = hW.H.define(),
      BW = hW.H.define();
    class qW extends HW.j {
      constructor(WW, iW, OW) {
        super(), this.colour = WW, this.playerName = iW, this.showName = OW
      }
      toDOM() {
        const WW = document.createElement("span");
        WW.className = "cm-remote-cursor-wrapper", WW.style.borderLeftColor = this.colour;
        const iW = document.createElement("span");
        if (iW.className = "cm-remote-cursor", iW.style.borderLeftColor = this.colour, WW.appendChild(iW), this.showName) {
          const iW = document.createElement("span");
          iW.className = "cm-remote-cursor-name", iW.style.backgroundColor = this.colour, iW.textContent = this.playerName, WW.appendChild(iW)
        }
        return WW
      }
      eq(WW) {
        return this.colour === WW.colour && this.playerName === WW.playerName && this.showName === WW.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function RW(WW, iW) {
      const OW = [],
        mW = [];
      for (const [, PW] of WW) {
        const WW = iW - PW.lastMoved < fW;
        if (OW.push({
            pos: PW.head,
            decoration: HW.c.widget({
              widget: new qW(PW.colour, PW.playerName, WW),
              side: 1
            })
          }), PW.anchor !== PW.head) {
          const WW = Math.min(PW.anchor, PW.head),
            iW = Math.max(PW.anchor, PW.head);
          mW.push({
            from: WW,
            to: iW,
            decoration: HW.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${PW.colour}33`
              }
            })
          })
        }
      }
      const EW = new hW.A,
        NW = [];
      for (const PW of OW) NW.push({
        bias: 1,
        deco: PW.decoration,
        from: PW.pos,
        to: PW.pos
      });
      for (const PW of mW) NW.push({
        bias: 0,
        deco: PW.decoration,
        from: PW.from,
        to: PW.to
      });
      NW.sort(((WW, iW) => WW.from - iW.from || WW.deco.startSide - iW.deco.startSide || WW.bias - iW.bias));
      for (const PW of NW) EW.add(PW.from, PW.to, PW.deco);
      return EW.finish()
    }
    const GW = hW.L.define({
      create: () => ({
        cursors: new Map,
        Km: HW.c.none
      }),
      update(WW, iW) {
        let OW = WW.cursors,
          mW = !1;
        if (iW.docChanged) {
          const WW = new Map;
          for (const [mW, EW] of OW) WW.set(mW, {
            ...EW,
            anchor: iW.changes.mapPos(EW.anchor, 1),
            head: iW.changes.mapPos(EW.head, 1)
          });
          OW = WW, mW = !0
        }
        for (const EW of iW.effects)
          if (EW.is(CW)) {
            if (!Number.isInteger(EW.value.anchor) || !Number.isInteger(EW.value.head)) {
              console.warn(`Code Editor: ignored player ${EW.value.playerId}'s cursor at ${EW.value.anchor}-${EW.value.head}`);
              continue
            }
            const NW = iW.state.doc.length,
              PW = {
                ...EW.value,
                anchor: Math.min(EW.value.anchor, NW),
                head: Math.min(EW.value.head, NW)
              };
            OW === WW.cursors && (OW = new Map(OW)), OW.set(PW.playerId, PW), mW = !0
          } else EW.is(XW) ? OW.has(EW.value) && (OW === WW.cursors && (OW = new Map(OW)), OW.delete(EW.value), mW = !0) : EW.is(BW) && (mW = !0);
        return mW ? {
          cursors: OW,
          Km: RW(OW, Date.now())
        } : WW
      },
      provide: WW => HW.e.Km.from(WW, (WW => WW.Km))
    });
    const IW = hW.H.define(),
      aW = HW.c.mark({
        class: "CodeInsertFlash"
      }),
      rW = hW.L.define({
        create: () => HW.c.none,
        update(WW, iW) {
          let OW = WW.map(iW.changes);
          for (const mW of iW.effects) mW.is(IW) && (OW = mW.value ? HW.c.set(aW.range(mW.value.from, mW.value.to)) : HW.c.none);
          return OW
        },
        provide: WW => HW.e.Km.from(WW)
      }),
      zW = hW.L.define({
        create: () => !1,
        update: (WW, iW) => WW || void 0 !== iW.annotation(hW.P.userEvent) && !iW.annotation(hW.P.remote)
      }),
      FW = [rW, zW];

    function QW(WW) {
      return WW.field(zW)
    }
    const Wi = 3e4;

    function ii(WW, iW) {
      const OW = (0, PW.useRef)(null);
      (0, PW.useEffect)((() => {
        var WW;
        (null === (WW = OW.current) || void 0 === WW ? void 0 : WW.path) !== iW && (OW.current = null)
      }), [iW]);
      const mW = WW => {
        var mW;
        const EW = OW.current;
        if (null === WW || void 0 === WW || !WW.dom.isConnected || !EW || EW.path !== iW) return;
        OW.current = null;
        const {
          EZ: PW
        } = EW;
        if (PW && null !== PW.text && performance.now() - PW.at < Wi) {
          const iW = function(WW, iW) {
            if (WW === iW) return null;
            const OW = Math.min(WW.length, iW.length);
            let mW = 0;
            for (; mW < OW && WW[mW] === iW[mW];) mW++;
            let EW = 0;
            for (; EW < OW - mW && WW[WW.length - 1 - EW] === iW[iW.length - 1 - EW];) EW++;
            return {
              from: mW,
              to: WW.length - EW,
              insert: iW.slice(mW, iW.length - EW)
            }
          }(WW.state.doc.toString(), PW.text);
          null !== iW && WW.dispatch({
            changes: iW,
            userEvent: PW.placed ? "input" : void 0
          })
        }
        const {
          doc: LW
        } = WW.state, cW = LW.line(Math.min(Math.max(EW.line, 1), LW.lines)), wW = cW.from + Math.min(null !== (mW = EW.column) && void 0 !== mW ? mW : 0, cW.length);
        WW.dispatch({
          selection: {
            anchor: wW
          },
          effects: NW.e.scrollIntoView(wW, {
            y: "center"
          }),
          userEvent: null !== PW && void 0 !== PW && PW.placed ? "select" : void 0
        }), !1 !== (null === PW || void 0 === PW ? void 0 : PW.focused) && WW.focus()
      };
      return (0, YW.e)("CodeEditorGoToLine", (iW => {
        OW.current = iW, mW(WW.current)
      })), (0, YW.e)("CodeEditorKeepEdits", (() => {
        const mW = WW.current;
        if (null === mW || !mW.dom.isConnected || null === iW) return;
        const {
          doc: EW,
          selection: NW
        } = mW.state, {
          head: PW
        } = NW.main, LW = EW.lineAt(PW), cW = {
          text: (0, JW.k)(mW.state).length > 0 ? EW.toString() : null,
          at: performance.now(),
          focused: mW.hasFocus,
          placed: QW(mW.state)
        };
        OW.current = {
          path: iW,
          line: LW.number,
          column: PW - LW.from,
          EZ: cW
        }
      })), WW => {
        var EW;
        const NW = OW.current;
        !1 === (null === NW || void 0 === NW || null === (EW = NW.EZ) || void 0 === EW ? void 0 : EW.focused) && NW.path === iW || WW.focus(), mW(WW)
      }
    }
    var Oi = OW(5038),
      mi = OW(1172);

    function Ei(WW, iW) {
      const {
        t: OW
      } = (0, mi.B)();
      (0, YW.e)("CodeEditorInsertText", (mW => {
        let {
          text: EW,
          focus: NW
        } = mW;
        const PW = WW.current,
          LW = null !== PW && void 0 !== PW && PW.dom.isConnected ? function(WW, iW) {
            if (!QW(WW)) return null;
            const {
              from: OW,
              to: mW
            } = WW.selection.main, EW = OW + iW.length;
            return {
              changes: {
                from: OW,
                to: mW,
                insert: iW
              },
              selection: {
                anchor: EW
              },
              effects: [HW.e.scrollIntoView(EW, {
                y: "center"
              }), IW.of({
                from: OW,
                to: EW
              })],
              userEvent: "input"
            }
          }(PW.state, EW) : null;
        null !== PW && null !== LW ? (PW.dispatch(LW), NW && PW.focus(), setTimeout((() => {
          PW.dom.isConnected && PW.dispatch({
            effects: IW.of(null)
          })
        }), 1500)) : (0, Oi.b)(EW).then((() => {
          iW({
            message: OW("codeEditorWorld:pickCopied", {
              coords: EW
            }),
            type: "success"
          })
        }), (WW => {
          console.error("Pick could not copy the coordinates", WW), iW({
            message: OW("codeEditorWorld:pickPlaceCursor", {
              coords: EW
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Ni = OW(53532);
    const Pi = "#e45649",
      Li = "#383a42",
      ci = "#696c77",
      wi = "#986801",
      ti = "#e5e5e6",
      Zi = "#fafafa",
      xi = "#eaeaeb",
      li = "#526fff",
      Ai = HW.e.theme({
        "&": {
          color: Li,
          backgroundColor: Zi
        },
        ".cm-content": {
          caretColor: li
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: li
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Li
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
          backgroundColor: Zi,
          color: ci,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: ti
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: xi
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: xi,
          borderBottomColor: xi
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: ti,
            color: Li
          }
        }
      }, {
        dark: !1
      }),
      bi = DW.b.define([{
        tag: Ni.l.keyword,
        color: "#a626a4"
      }, {
        tag: [Ni.l.name, Ni.l.deleted, Ni.l.character, Ni.l.propertyName, Ni.l.macroName],
        color: Pi
      }, {
        tag: [Ni.l.function(Ni.l.variableName), Ni.l.labelName],
        color: "#4078f2"
      }, {
        tag: [Ni.l.color, Ni.l.constant(Ni.l.name), Ni.l.standard(Ni.l.name)],
        color: wi
      }, {
        tag: [Ni.l.definition(Ni.l.name), Ni.l.separator],
        color: Li
      }, {
        tag: [Ni.l.typeName, Ni.l.className, Ni.l.number, Ni.l.changed, Ni.l.annotation, Ni.l.modifier, Ni.l.self, Ni.l.namespace],
        color: "#c18401"
      }, {
        tag: [Ni.l.operator, Ni.l.operatorKeyword, Ni.l.url, Ni.l.escape, Ni.l.regexp, Ni.l.link, Ni.l.special(Ni.l.string)],
        color: "#0184bc"
      }, {
        tag: [Ni.l.meta, Ni.l.comment],
        color: ci
      }, {
        tag: Ni.l.strong,
        fontWeight: "bold"
      }, {
        tag: Ni.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ni.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ni.l.link,
        color: ci,
        textDecoration: "underline"
      }, {
        tag: Ni.l.heading,
        fontWeight: "bold",
        color: Pi
      }, {
        tag: [Ni.l.atom, Ni.l.bool, Ni.l.special(Ni.l.variableName)],
        color: wi
      }, {
        tag: [Ni.l.processingInstruction, Ni.l.string, Ni.l.inserted],
        color: "#50a14f"
      }, {
        tag: Ni.l.invalid,
        color: "#000000"
      }]),
      ji = [Ai, (0, DW.cb)(bi)];
    var Ui = OW(38060),
      ki = OW(53643);
    const si = NW.j.define(),
      Mi = NW.m.define({
        create: () => !1,
        update(WW, iW) {
          for (const OW of iW.effects) OW.is(si) && (WW = OW.value);
          return WW
        }
      }),
      Ki = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Si(WW, iW) {
      return [Mi, NW.n.fromClass(class {
        constructor(WW) {
          this.view = WW, this.onDown = WW => {
            const iW = WW.target instanceof Element && null !== WW.target.closest(".cm-tooltip");
            0 !== WW.button || iW || this.view.state.field(Mi) || this.view.dispatch({
              effects: si.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Mi) && this.view.dispatch({
              effects: si.of(!1)
            })
          }, WW.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), NW.q.compute(["selection", Mi], (OW => function(WW, iW, OW) {
        const mW = WW.selection.main;
        return mW.empty || WW.field(Mi) || WW.sliceDoc(mW.from, mW.to).trim().length < 2 ? null : {
          pos: mW.from,
          above: !0,
          create: WW => {
            const mW = document.createElement("div");
            mW.className = "CodeSelectionActions", mW.setAttribute("role", "toolbar"), mW.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: EW,
                label: NW
              }
              of Ki) {
              if (!OW && "explain" !== EW) continue;
              const PW = document.createElement("button");
              PW.type = "button", PW.textContent = NW, "change" !== EW && (PW.title = ki.d, PW.dataset.asksAi = "true"), PW.addEventListener("mousedown", (WW => {
                WW.preventDefault()
              })), PW.addEventListener("click", (() => {
                const OW = WW.state.selection.main;
                if (OW.empty) return;
                const mW = {
                  action: EW,
                  path: iW,
                  fromLine: WW.state.doc.lineAt(OW.from).number,
                  toLine: WW.state.doc.lineAt(OW.to > OW.from && WW.state.doc.lineAt(OW.to).from === OW.to ? OW.to - 1 : OW.to).number,
                  text: WW.state.sliceDoc(OW.from, OW.to)
                };
                oW.l.iZ("WorldCodeAiSelection", mW), WW.dispatch({
                  selection: {
                    anchor: OW.to
                  }
                })
              })), mW.appendChild(PW)
            }
            return {
              dom: mW
            }
          }
        }
      }(OW, WW, iW)))]
    }
    var Yi = OW(1283);
    const yi = new Set(["(", "{", "[", "<"]),
      Ti = new Set([")", "}", "]", ">"]),
      Ji = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Hi(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function OW(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = [];
        for (const EW of WW) {
          let WW;
          WW = "punctuation" === EW.kind ? Ji.text : "parameterName" === EW.kind ? Ji.parameterName : iW, mW.push({
            str: EW.text,
            style: {
              color: WW,
              opacity: OW ? .5 : void 0
            }
          })
        }
        return mW
      }
      const mW = [];
      if (mW.push(...OW(WW.prefixDisplayParts, Ji.text)), WW.parameters.length > 0) {
        mW.push("\n");
        for (let EW = 0; EW < WW.parameters.length; EW++) {
          const NW = WW.parameters[EW];
          mW.push("\t"), mW.push(...OW(NW.displayParts, Ji.parameter, null !== iW && EW !== iW)), mW.push("\n")
        }
      }
      return mW.push(...OW(WW.suffixDisplayParts, Ji.suffix)), WW.documentation && (mW.push("\n\n"), mW.push(...OW(WW.documentation, Ji.docs))), mW
    }
    var ni = function(WW) {
      return WW[WW.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", WW[WW.DuplicateIdentifier = 2300] = "DuplicateIdentifier", WW
    }(ni || {});
    const ui = new Set([ni.DuplicateIdentifier]),
      oi = new Set([ni.VariableDefinedElsewhere]),
      di = new Set([]),
      ei = "/index.js";

    function vi(WW) {
      return "/" + WW
    }

    function gi(WW, iW, OW) {
      WW.getSourceFile(iW) && WW.deleteFile(iW), WW.createFile(iW, OW)
    }

    function Di(WW) {
      return !!WW && ((0, KW.j)(WW) || (0, KW.i)(WW))
    }

    function Vi(WW, iW, OW) {
      return () => {
        let mW = [...iW.languageService.getSemanticDiagnostics(OW), ...iW.languageService.getSyntacticDiagnostics(OW)];
        return mW = mW.filter((WW => !(0, yW.K)(WW.start) && !(0, yW.K)(WW.length) && !ui.has(WW.code))), WW || (mW = mW.filter((WW => !oi.has(WW.code)))), mW.map((WW => ({
          from: WW.start,
          to: WW.start + WW.length,
          message: "string" === typeof WW.messageText ? WW.messageText : WW.messageText.messageText,
          severity: di.has(WW.code) ? "warning" : "error"
        })))
      }
    }

    function fi(WW, iW) {
      return OW => {
        var mW, EW;
        const NW = WW.languageService.getCompletionsAtPosition(iW, OW.pos, {});
        if (!NW) return {
          from: OW.pos,
          options: []
        };
        let PW = null !== (mW = null === (EW = NW.optionalReplacementSpan) || void 0 === EW ? void 0 : EW.start) && void 0 !== mW ? mW : OW.pos;
        if (!NW.optionalReplacementSpan) {
          const WW = OW.state.doc.sliceString(0, OW.pos);
          for (; PW > 0 && /[\w$]/.test(WW[PW - 1]);) PW--
        }
        return NW.entries = NW.entries.filter((WW => WW.kind !== bW().ScriptElementKind.warning)), {
          from: PW,
          options: NW.entries.map((mW => {
            var EW, NW, LW, cW;
            const wW = WW.languageService.getCompletionEntryDetails(iW, OW.pos, mW.name, {}, mW.source, {}, mW.data),
              tW = null !== (EW = null === (NW = mW.replacementSpan) || void 0 === NW ? void 0 : NW.start) && void 0 !== EW ? EW : PW,
              ZW = mW.replacementSpan ? mW.replacementSpan.start + mW.replacementSpan.length : OW.pos,
              xW = null !== (LW = mW.insertText) && void 0 !== LW ? LW : mW.name;
            return {
              label: mW.name,
              detail: null === wW || void 0 === wW ? void 0 : wW.displayParts.map((WW => WW.text)).join(""),
              info: null === wW || void 0 === wW || null === (cW = wW.documentation) || void 0 === cW ? void 0 : cW.map((WW => WW.text)).join(""),
              apply: WW => {
                WW.dispatch({
                  changes: {
                    from: tW,
                    to: ZW,
                    insert: xW
                  },
                  selection: {
                    anchor: tW + xW.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Ci(WW) {
      return iW => {
        const OW = document.createElement("div");
        OW.className = "CodeEditorTooltip";
        let mW = !1;
        return queueMicrotask((() => {
          mW || (LW.render((0, Yi.jsx)(xW.d, {
            text: WW
          }), OW), iW.requestMeasure())
        })), {
          dom: OW,
          destroy() {
            mW = !0, queueMicrotask((() => {
              LW.unmountComponentAtNode(OW)
            }))
          }
        }
      }
    }

    function Xi(WW, iW, OW) {
      return mW => {
        var EW;
        if (!iW) return [];
        const NW = null === (EW = mW.selection.kj[0]) || void 0 === EW ? void 0 : EW.head;
        if (void 0 === NW) return [];
        const PW = WW.languageService.getSignatureHelpItems(OW, NW, {});
        if (!PW || !PW.items.length) return [];
        const LW = PW.applicableSpan.start - PW.items[0].prefixDisplayParts.map((WW => WW.text)).join("").length,
          cW = PW.applicableSpan.start,
          wW = mW.doc.lineAt(NW),
          tW = wW.from,
          ZW = Math.min(wW.to, NW);
        let xW, lW;
        return LW < tW ? (xW = tW, lW = ZW) : (xW = LW, lW = cW), [{
          pos: xW,
          end: lW,
          above: !1,
          create: Ci(Hi(PW.items[0], PW.argumentIndex))
        }]
      }
    }

    function Bi(WW, iW) {
      return (OW, mW, EW) => {
        const NW = WW.languageService.getQuickInfoAtPosition(iW, mW);
        if (!NW) return [];
        const PW = NW.textSpan.start,
          LW = NW.textSpan.start + NW.textSpan.length;
        if (mW < PW || mW >= LW) return [];
        if (NW.kind === bW().ScriptElementKind.memberFunctionElement || NW.kind === bW().ScriptElementKind.variableElement && "declare" === NW.kindModifiers) {
          const WW = NW.displayParts.findIndex((WW => "space" === WW.kind)); - 1 !== WW && (NW.displayParts = NW.displayParts.slice(WW));
          const iW = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            OW = NW.displayParts.findIndex((WW => "punctuation" === WW.kind && "(" === WW.text)); - 1 !== OW && (iW.prefixDisplayParts = NW.displayParts.slice(0, OW + 1), NW.displayParts = NW.displayParts.slice(OW + 1));
          const mW = NW.displayParts.findLastIndex((WW => "punctuation" === WW.kind && ")" === WW.text)); - 1 !== mW && (iW.suffixDisplayParts = NW.displayParts.slice(mW), NW.displayParts = NW.displayParts.slice(0, mW));
          let EW = 0,
            cW = [];
          for (const PW of NW.displayParts)
            if (yi.has(PW.text) ? EW++ : Ti.has(PW.text) && EW--, "lineBreak" !== PW.kind) {
              if ("space" === PW.kind) {
                if (0 === cW.length) continue;
                cW.push({
                  kind: "space",
                  text: " "
                })
              } else cW.push(PW);
              0 === EW && "," === PW.text && (iW.parameters.push({
                displayParts: cW
              }), cW = [])
            } return cW.length > 0 && iW.parameters.push({
            displayParts: cW
          }), iW.documentation = NW.documentation, [{
            pos: PW,
            end: LW,
            above: !0,
            create: Ci(Hi(iW))
          }]
        }
        const cW = [];
        for (const WW of NW.displayParts) cW.push({
          str: WW.text,
          style: {
            color: Ji.text
          }
        });
        if (NW.documentation) {
          cW.push("\n\n");
          for (const WW of NW.documentation) cW.push({
            str: WW.text,
            style: {
              color: Ji.docs
            }
          })
        }
        return [{
          pos: PW,
          end: LW,
          above: !0,
          create: Ci(cW)
        }]
      }
    }
    const qi = {
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
      semicolons: bW().SemicolonPreference.Insert
    };
    const Ri = NW.j.define(),
      Gi = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Ii(WW) {
      let {
        isLobbyCode: iW,
        code: OW,
        onChange: LW,
        canEditCode: xW,
        setTemporaryMessage: AW,
        close: yW,
        showTooltips: qW,
        lightMode: RW,
        collabState: IW,
        onRemoteDocChange: aW,
        files: rW,
        activePath: zW,
        pluginName: QW,
        pluginFile: Wi,
        pluginSource: Oi,
        setActiveDocReplacer: mi,
        showAiHints: Ni,
        canAiChangeCode: Pi = xW
      } = WW;
      const [Li, ci] = (0, PW.useState)(null), wi = null === IW || void 0 === IW ? void 0 : IW.version, ti = null === IW || void 0 === IW ? void 0 : IW.clientID, Zi = (0, PW.useRef)({
        isLobbyCode: iW,
        files: rW,
        code: OW,
        activePath: zW
      }), xi = (0, PW.useRef)(aW);
      xi.current = aW;
      const li = (0, PW.useRef)(null),
        Ai = (0, PW.useRef)(IW);
      Ai.current = IW;
      const bi = (0, PW.useRef)(null),
        ki = (0, PW.useRef)(null),
        si = (0, PW.useRef)(null),
        Mi = (0, PW.useRef)(yW);
      Mi.current = yW;
      const Ki = (0, PW.useRef)(OW);
      Ki.current = OW;
      const yi = (0, PW.useRef)(Oi);
      yi.current = Oi;
      const Ti = function(WW, iW, OW, mW) {
        return OW ? `/plugin-preview/${OW}/${null!==mW&&void 0!==mW?mW:"index.ts"}` : WW ? vi(null !== iW && void 0 !== iW ? iW : MW.e) : ei
      }(iW, zW, QW, Wi);
      (0, PW.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: WW,
            files: iW,
            code: OW,
            activePath: mW
          } = Zi.current, EW = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: bW().ModuleKind.ESNext,
            moduleResolution: bW().ModuleResolutionKind.Bundler,
            target: bW().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(sW.e).map((WW => [WW.specifier, [WW.typesVfsPath]])))
            }
          }, NW = new Map, PW = [];
          if (WW) {
            const WW = null !== iW && void 0 !== iW ? iW : {
              [MW.e]: OW || "\n"
            };
            for (const [iW, OW] of Object.entries(WW)) {
              const WW = vi(iW);
              NW.set(WW, OW || "\n"), PW.push(WW)
            }
            const EW = vi(null !== mW && void 0 !== mW ? mW : MW.e);
            NW.has(EW) ? NW.set(EW, OW || "\n") : (NW.set(EW, OW || "\n"), PW.push(EW)), NW.set("/node_modules/@bloxd/index.d.ts", tW.default), PW.push("/node_modules/@bloxd/index.d.ts");
            for (const iW of Object.values(sW.e)) {
              NW.set(iW.typesVfsPath, iW.types), PW.push(iW.typesVfsPath);
              for (const [WW, OW] of Object.entries(iW.files)) {
                const mW = `/plugin-preview/${iW.name}/${WW}`;
                NW.set(mW, OW || "\n"), PW.push(mW)
              }
            }
          } else NW.set(ei, OW || "\n"), PW.push(ei);
          NW.set("/globals.d.ts", WW ? wW.e : cW.d), NW.set("/lib.d.ts", ZW.e), PW.push("/globals.d.ts", "/lib.d.ts");
          const LW = lW.b(NW),
            xW = lW.d(LW, PW, bW(), EW);
          ci({
            MZ: xW,
            fsMap: NW
          })
        }()
      }), []), (0, PW.useEffect)((() => {
        var WW, mW;
        if (!Li || !iW) return;
        const {
          MZ: EW,
          fsMap: NW
        } = Li;
        if (function(WW, iW, OW) {
            const mW = new Set;
            for (const [EW, NW] of Object.entries(OW)) {
              const OW = vi(EW);
              mW.add(OW);
              const PW = NW || "\n";
              iW.get(OW) !== PW && (iW.set(OW, PW), gi(WW, OW, PW))
            }
            for (const EW of [...iW.keys()]) "/globals.d.ts" === EW || "/lib.d.ts" === EW || EW.startsWith("/node_modules/") || EW.startsWith("/plugin-preview/") || mW.has(EW) || (iW.delete(EW), WW.getSourceFile(EW) && WW.deleteFile(EW))
          }(EW, NW, null !== rW && void 0 !== rW ? rW : {
            [MW.e]: OW || "\n"
          }), QW) return void gi(EW, Ti, Oi || "\n");
        const PW = null !== (WW = null === (mW = li.current) || void 0 === mW ? void 0 : mW.state.doc.toString()) && void 0 !== WW ? WW : OW;
        gi(EW, Ti, PW || "\n")
      }), [rW, zW, Li, QW, Oi, Ti, OW, iW]), (0, PW.useEffect)((() => {
        if (!Li) return;
        const {
          MZ: WW
        } = Li;
        gi(WW, Ti, (QW ? Oi : OW) || "\n")
      }), [OW, QW, Oi, Ti, Li]), (0, PW.useEffect)((() => () => {
        ki.current && (ki.current(), ki.current = null)
      }), []), (0, PW.useEffect)((() => (mi(((WW, iW) => {
        if (QW) return !1;
        const OW = li.current,
          mW = Ai.current,
          EW = mW ? (0, KW.o)(mW.docKey) : null;
        if (!OW || !mW || bi.current !== mW.clientID || WW !== EW) return !1;
        const NW = OW.state.doc.toString();
        return NW !== iW && OW.dispatch({
          changes: {
            from: 0,
            to: NW.length,
            insert: iW
          }
        }), !0
      })), () => {
        li.current = null, bi.current = null, mi(null)
      })), [mi, QW]);
      const Ji = iW ? QW ? null : null !== zW && void 0 !== zW ? zW : MW.e : Ui.d,
        Hi = ii(li, Ji);
      Ei(li, AW), (0, YW.e)("FormatCode", (() => {
        if (!Li || !li.current || QW) return;
        const {
          MZ: WW,
          fsMap: OW
        } = Li, mW = WW.getSourceFile(Ti).getFullText();
        let EW = 0;
        if (iW && rW)
          for (const [iW, LW] of Object.entries(rW)) iW !== (null !== zW && void 0 !== zW ? zW : MW.e) && (EW += LW.length);
        const NW = function(WW, iW, OW, mW, EW) {
          const NW = WW.languageService.getFormattingEditsForDocument(mW, qi);
          if (!NW.length) return TW.b.error("Code is already formatted.");
          NW.sort(((WW, iW) => iW.span.start - WW.span.start));
          let PW = WW.getSourceFile(mW).getFullText();
          for (const LW of NW) PW = PW.slice(0, LW.span.start) + LW.Wc + PW.slice(LW.span.start + LW.span.length);
          return PW !== (OW ? (0, SW.o)(PW, EW) : (0, SW.m)(PW)) ? TW.b.error("Formatting the code will go beyond the character limit.") : TW.b.value(PW)
        }(WW, 0, iW, Ti, EW);
        if (NW.isError()) return void AW({
          message: NW.asError().message,
          type: "warning"
        });
        const PW = NW.getValue();
        PW && (li.current.dispatch({
          changes: {
            from: 0,
            to: mW.length,
            insert: PW
          },
          selection: {
            anchor: PW.length
          }
        }), gi(WW, Ti, PW), LW(PW))
      }));
      const ni = (0, PW.useMemo)((() => {
        if (!Li) return [];
        const {
          MZ: WW,
          fsMap: OW
        } = Li;
        ! function(WW, iW, OW, mW) {
          if (WW.getSourceFile(OW)) return;
          const EW = mW || "\n";
          iW.set(OW, EW), WW.createFile(OW, EW)
        }(WW, OW, Ti, (QW ? yi.current : Ki.current) || "\n");
        const PW = iW && Di(QW ? null !== Wi && void 0 !== Wi ? Wi : "index.ts" : zW),
          LW = [(0, EW.b)({
            jsx: !1,
            typescript: PW
          }), NW.f.highest(NW.e.domEventHandlers({
            keydown: WW => "Escape" === WW.key ? (Mi.current(), WW.stopPropagation(), !0) : (WW.stopPropagation(), !1)
          })), (0, mW.d)({
            override: [fi(WW, Ti)]
          }), HW.i.fromClass(class {
            constructor(WW) {
              this.view = WW, this.timeout = null, this.scheduleParse()
            }
            update(WW) {
              (WW.docChanged || WW.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const WW = this.view.viewport.to;
                (0, DW.db)(this.view.state, WW) || (0, DW.K)(this.view, WW, VW) || this.scheduleParse()
              }), pW))
            }
          }), ...FW, NW.e.lineWrapping, NW.m.define({
            create: Xi(WW, qW, Ti),
            update(iW, OW) {
              const mW = OW.effects.some((WW => WW.is(Ri)));
              return OW.docChanged || OW.selection || mW ? (gi(WW, Ti, OW.state.doc.toString() || " "), Xi(WW, qW, Ti)(OW.state)) : iW
            },
            provide: WW => NW.q.computeN([WW], (iW => iW.field(WW)))
          }), (0, NW.p)(Bi(WW, Ti)), (0, UW.h)(Vi(iW, WW, Ti)), NW.n.fromClass(class {
            constructor(WW) {
              this.view = WW, this.searchPanel = null
            }
            update(WW) {
              const iW = WW.view.dom.querySelector(".cm-search");
              if (iW !== this.searchPanel) {
                if (this.searchPanel = iW, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (WW => {
                  "Escape" === WW.key && (0, jW.b)(this.view), WW.stopPropagation()
                }))
              }
            }
          })];
        Ni && !QW && LW.push(Si(iW ? null !== zW && void 0 !== zW ? zW : MW.e : Ui.d, Pi));
        const cW = Ai.current;
        if (cW && !QW) {
          LW.push(... function(WW, iW, OW, mW, EW) {
            let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const PW = (0, KW.o)(OW),
              LW = HW.i.fromClass(class {
                constructor(WW) {
                  this.view = WW, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = oW.l.subscribe("codeCollab", (WW => {
                    WW.docKey === PW && WW.type === KW.d.Updates && (WW.updates ? this.applyUpdates(WW.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(WW) {
                  const iW = JSON.parse(WW).map((WW => ({
                    clientID: WW.clientID,
                    changes: hW.ChangeSet.fromJSON(WW.changes)
                  })));
                  iW.length > 0 && (this.view.dispatch((0, JW.j)(this.view.state, iW)), EW && EW(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(WW) {
                  NW && (WW.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const WW = (0, JW.k)(this.view.state);
                  if (this.pushing || !WW.length) return;
                  const iW = Date.now() - this.lastPushTime;
                  if (iW < gW) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), gW - iW)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), eW);
                  const OW = (0, JW.f)(this.view.state),
                    EW = WW.map((WW => ({
                      clientID: WW.clientID,
                      changes: WW.changes.toJSON()
                    }))),
                    NW = JSON.stringify(EW);
                  NW.length <= KW.e ? nW.gameBridge.send("sendCodeCollab", {
                    uO: KW.c.Push,
                    oO: PW,
                    dO: OW,
                    gO: NW
                  }) : (0, dW.postJsonWithMetricsCookiesAndJsonResponse)(`${mW.gsUrl}/code/collab-push`, uW.s["collab-push"].toBuffer({
                    gameNameWithVariation: mW.gameNameWithVariation,
                    lobbyName: mW.lobbyName,
                    docKey: PW,
                    version: OW,
                    updates: NW
                  }), {
                    retries: 0
                  }).catch((WW => {
                    console.error("[CodeCollab] HTTP push failed", WW)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const WW = (0, JW.f)(this.view.state);
                  (0, dW.postJsonWithMetricsCookiesAndJsonResponse)(`${mW.gsUrl}/code/collab-pull`, uW.s["collab-pull"].toBuffer({
                    gameNameWithVariation: mW.gameNameWithVariation,
                    lobbyName: mW.lobbyName,
                    docKey: PW,
                    fromVersion: WW
                  }), {
                    retries: 1
                  }).then((WW => {
                    this.destroyed || (WW.fullDoc ? oW.l.iZ("codeCollabRejoin", {
                      docKey: PW,
                      doc: WW.fullDoc,
                      version: WW.version
                    }) : this.applyUpdates(WW.updates))
                  })).catch((WW => {
                    console.error("[CodeCollab] Pull failed", WW)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const WW = Date.now();
                  if (WW - this.lastCursorSent < vW) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), vW)));
                  this.lastCursorSent = WW;
                  const iW = this.view.state.selection.main;
                  nW.gameBridge.send("sendCodeCollab", {
                    uO: KW.c.Cursor,
                    oO: PW,
                    fO: iW.anchor,
                    CO: iW.head
                  })
                }
                destroy() {
                  this.destroyed = !0, oW.l.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, JW.e)({
              startVersion: WW,
              clientID: iW
            }), LW]
          }(wi, ti, cW.docKey, cW.httpConfig, (WW => {
            var iW;
            null === (iW = xi.current) || void 0 === iW || iW.call(xi, WW)
          }), xW));
          const WW = function(WW, iW) {
            const OW = (0, KW.o)(WW);
            return {
              extensions: [GW],
              connect(WW) {
                if (iW) {
                  const OW = iW.map((WW => CW.of({
                    playerId: WW.playerId,
                    playerName: WW.playerName,
                    colour: WW.colour,
                    anchor: WW.anchor,
                    head: WW.head,
                    lastMoved: Date.now()
                  })));
                  OW.length > 0 && WW.dispatch({
                    effects: OW
                  })
                }
                const mW = oW.l.subscribe("codeCollab", (iW => {
                    if (iW.docKey === OW)
                      if (iW.type === KW.d.RemoteCursor) WW.dispatch({
                        effects: CW.of({
                          playerId: iW.playerId,
                          playerName: iW.playerName,
                          colour: iW.colour,
                          anchor: iW.anchor,
                          head: iW.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (iW.type === KW.d.Presence) {
                      const OW = JSON.parse(iW.peers),
                        mW = new Set(OW.map((WW => WW.playerId))),
                        EW = WW.state.field(GW),
                        NW = [];
                      for (const [WW] of EW.cursors) mW.has(WW) || NW.push(XW.of(WW));
                      NW.length > 0 && WW.dispatch({
                        effects: NW
                      })
                    }
                  })),
                  EW = setInterval((() => {
                    WW.dom.isConnected ? WW.dispatch({
                      effects: BW.of(Date.now())
                    }) : clearInterval(EW)
                  }), fW);
                return () => {
                  oW.l.unsubscribe(mW), clearInterval(EW)
                }
              }
            }
          }(cW.docKey, cW.existingCursors);
          LW.push(...WW.extensions), si.current = WW.connect
        } else si.current = null;
        return LW
      }), [iW, Li, qW, wi, ti, Ti, zW, QW, Wi, xW, Ni, Pi]);
      if (!Li || !IW && !QW) return (0, Yi.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Yi.jsx)(kW.d, {})
      });
      const ui = QW ? `plugin-${QW}-${null!==Wi&&void 0!==Wi?Wi:"index.ts"}` : IW ? `collab-${IW.clientID}` : `local-${iW}`;
      return (0, Yi.jsx)(NW.o, {
        value: QW ? null !== Oi && void 0 !== Oi ? Oi : "" : OW,
        onChange: LW,
        extensions: ni,
        className: "CodeEditorContent",
        theme: RW ? ji : "dark",
        editable: xW && !QW,
        basicSetup: Gi,
        onCreateEditor: WW => {
          var iW;
          li.current = WW, bi.current = null !== (iW = null === IW || void 0 === IW ? void 0 : IW.clientID) && void 0 !== iW ? iW : null, Hi(WW), ki.current && ki.current(), si.current && (ki.current = si.current(WW))
        }
      }, ui)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);