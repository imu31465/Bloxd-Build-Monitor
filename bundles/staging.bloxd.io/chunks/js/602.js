export const id = 602;
export const ids = [602];
export const modules = {
  44220: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => Ke
    });
    var JV = xV(44228),
      YV = xV(44273),
      UV = xV(44279),
      yV = xV(62),
      pV = xV(78),
      QV = xV(44291),
      nV = xV(44295),
      wV = xV(5259),
      ZV = xV(44299),
      vV = xV(2021),
      rV = xV(44302),
      kV = xV(44314),
      bV = xV.n(kV),
      EV = xV(44282),
      BV = xV(44288),
      jV = xV(1408),
      qV = xV(38041),
      tV = xV(1269),
      FV = xV(2688),
      TV = xV(37916),
      PV = xV(1542),
      AV = xV(657),
      NV = xV(1276),
      XV = xV(44352),
      MV = xV(44232),
      zV = xV(44234),
      GV = xV(2051),
      WV = xV(4163),
      RV = xV(32),
      gV = xV(1173);
    const DV = 1e4,
      iV = 250,
      CV = 250;
    var aV = xV(44252);
    const oV = 50,
      cV = 100;
    const hV = 2e3,
      lV = MV.C.define(),
      LV = MV.C.define(),
      fV = MV.C.define();
    class mV extends zV.n {
      constructor(VV, eV, xV) {
        super(), this.colour = VV, this.playerName = eV, this.showName = xV
      }
      toDOM() {
        const VV = document.createElement("span");
        VV.className = "cm-remote-cursor-wrapper", VV.style.borderLeftColor = this.colour;
        const eV = document.createElement("span");
        if (eV.className = "cm-remote-cursor", eV.style.borderLeftColor = this.colour, VV.appendChild(eV), this.showName) {
          const eV = document.createElement("span");
          eV.className = "cm-remote-cursor-name", eV.style.backgroundColor = this.colour, eV.textContent = this.playerName, VV.appendChild(eV)
        }
        return VV
      }
      eq(VV) {
        return this.colour === VV.colour && this.playerName === VV.playerName && this.showName === VV.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function KV(VV, eV) {
      const xV = [],
        JV = [];
      for (const [, yV] of VV) {
        const VV = eV - yV.lastMoved < hV;
        if (xV.push({
            pos: yV.head,
            decoration: zV.b.widget({
              widget: new mV(yV.colour, yV.playerName, VV),
              side: 1
            })
          }), yV.anchor !== yV.head) {
          const VV = Math.min(yV.anchor, yV.head),
            eV = Math.max(yV.anchor, yV.head);
          JV.push({
            from: VV,
            to: eV,
            decoration: zV.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${yV.colour}33`
              }
            })
          })
        }
      }
      const YV = new MV.w,
        UV = [];
      for (const yV of xV) UV.push({
        bias: 1,
        deco: yV.decoration,
        from: yV.pos,
        to: yV.pos
      });
      for (const yV of JV) UV.push({
        bias: 0,
        deco: yV.decoration,
        from: yV.from,
        to: yV.to
      });
      UV.sort(((VV, eV) => VV.from - eV.from || VV.deco.startSide - eV.deco.startSide || VV.bias - eV.bias));
      for (const yV of UV) YV.add(yV.from, yV.to, yV.deco);
      return YV.finish()
    }
    const HV = MV.E.define({
      create: () => ({
        cursors: new Map,
        JU: zV.b.none
      }),
      update(VV, eV) {
        let xV = VV.cursors,
          JV = !1;
        if (eV.docChanged) {
          const VV = new Map;
          for (const [JV, YV] of xV) VV.set(JV, {
            ...YV,
            anchor: eV.changes.mapPos(YV.anchor, 1),
            head: eV.changes.mapPos(YV.head, 1)
          });
          xV = VV, JV = !0
        }
        for (const YV of eV.effects)
          if (YV.is(lV)) {
            if (!Number.isInteger(YV.value.anchor) || !Number.isInteger(YV.value.head)) {
              console.warn(`Code Editor: ignored player ${YV.value.playerId}'s cursor at ${YV.value.anchor}-${YV.value.head}`);
              continue
            }
            const UV = eV.state.doc.length,
              yV = {
                ...YV.value,
                anchor: Math.min(YV.value.anchor, UV),
                head: Math.min(YV.value.head, UV)
              };
            xV === VV.cursors && (xV = new Map(xV)), xV.set(yV.playerId, yV), JV = !0
          } else YV.is(LV) ? xV.has(YV.value) && (xV === VV.cursors && (xV = new Map(xV)), xV.delete(YV.value), JV = !0) : YV.is(fV) && (JV = !0);
        return JV ? {
          cursors: xV,
          JU: KV(xV, Date.now())
        } : VV
      },
      provide: VV => zV.e.JU.from(VV, (VV => VV.JU))
    });
    const uV = MV.C.define(),
      sV = zV.b.mark({
        class: "CodeInsertFlash"
      }),
      SV = MV.E.define({
        create: () => zV.b.none,
        update(VV, eV) {
          let xV = VV.map(eV.changes);
          for (const JV of eV.effects) JV.is(uV) && (xV = JV.value ? zV.b.set(sV.range(JV.value.from, JV.value.to)) : zV.b.none);
          return xV
        },
        provide: VV => zV.e.JU.from(VV)
      }),
      IV = MV.E.define({
        create: () => !1,
        update: (VV, eV) => VV || void 0 !== eV.annotation(MV.J.userEvent) && !eV.annotation(MV.J.remote)
      }),
      dV = [SV, IV];

    function OV(VV) {
      return VV.field(IV)
    }
    const Ve = 3e4;

    function ee(VV, eV) {
      const xV = (0, yV.useRef)(null);
      (0, yV.useEffect)((() => {
        var VV;
        (null === (VV = xV.current) || void 0 === VV ? void 0 : VV.path) !== eV && (xV.current = null)
      }), [eV]);
      const JV = VV => {
        var JV;
        const YV = xV.current;
        if (null === VV || void 0 === VV || !VV.dom.isConnected || !YV || YV.path !== eV) return;
        xV.current = null;
        const {
          ZZ: yV
        } = YV;
        if (yV && null !== yV.text && performance.now() - yV.at < Ve) {
          const eV = function(VV, eV) {
            if (VV === eV) return null;
            const xV = Math.min(VV.length, eV.length);
            let JV = 0;
            for (; JV < xV && VV[JV] === eV[JV];) JV++;
            let YV = 0;
            for (; YV < xV - JV && VV[VV.length - 1 - YV] === eV[eV.length - 1 - YV];) YV++;
            return {
              from: JV,
              to: VV.length - YV,
              insert: eV.slice(JV, eV.length - YV)
            }
          }(VV.state.doc.toString(), yV.text);
          null !== eV && VV.dispatch({
            changes: eV,
            userEvent: yV.placed ? "input" : void 0
          })
        }
        const {
          doc: pV
        } = VV.state, QV = pV.line(Math.min(Math.max(YV.line, 1), pV.lines)), nV = QV.from + Math.min(null !== (JV = YV.column) && void 0 !== JV ? JV : 0, QV.length);
        VV.dispatch({
          selection: {
            anchor: nV
          },
          effects: UV.d.scrollIntoView(nV, {
            y: "center"
          }),
          userEvent: null !== yV && void 0 !== yV && yV.placed ? "select" : void 0
        }), !1 !== (null === yV || void 0 === yV ? void 0 : yV.focused) && VV.focus()
      };
      return (0, PV.g)("CodeEditorGoToLine", (eV => {
        xV.current = eV, JV(VV.current)
      })), (0, PV.g)("CodeEditorKeepEdits", (() => {
        const JV = VV.current;
        if (null === JV || !JV.dom.isConnected || null === eV) return;
        const {
          doc: YV,
          selection: UV
        } = JV.state, {
          head: yV
        } = UV.main, pV = YV.lineAt(yV), QV = {
          text: (0, XV.l)(JV.state).length > 0 ? YV.toString() : null,
          at: performance.now(),
          focused: JV.hasFocus,
          placed: OV(JV.state)
        };
        xV.current = {
          path: eV,
          line: pV.number,
          column: yV - pV.from,
          ZZ: QV
        }
      })), VV => {
        var YV;
        const UV = xV.current;
        !1 === (null === UV || void 0 === UV || null === (YV = UV.ZZ) || void 0 === YV ? void 0 : YV.focused) && UV.path === eV || VV.focus(), JV(VV)
      }
    }
    var xe = xV(4788),
      Je = xV(1220);

    function Ye(VV, eV) {
      const {
        t: xV
      } = (0, Je.A)();
      (0, PV.g)("CodeEditorInsertText", (JV => {
        let {
          text: YV,
          focus: UV
        } = JV;
        const yV = VV.current,
          pV = null !== yV && void 0 !== yV && yV.dom.isConnected ? function(VV, eV) {
            if (!OV(VV)) return null;
            const {
              from: xV,
              to: JV
            } = VV.selection.main, YV = xV + eV.length;
            return {
              changes: {
                from: xV,
                to: JV,
                insert: eV
              },
              selection: {
                anchor: YV
              },
              effects: [zV.e.scrollIntoView(YV, {
                y: "center"
              }), uV.of({
                from: xV,
                to: YV
              })],
              userEvent: "input"
            }
          }(yV.state, YV) : null;
        null !== yV && null !== pV ? (yV.dispatch(pV), UV && yV.focus(), setTimeout((() => {
          yV.dom.isConnected && yV.dispatch({
            effects: uV.of(null)
          })
        }), 1500)) : (0, xe.b)(YV).then((() => {
          eV({
            message: xV("codeEditorWorld:pickCopied", {
              coords: YV
            }),
            type: "success"
          })
        }), (VV => {
          console.error("Pick could not copy the coordinates", VV), eV({
            message: xV("codeEditorWorld:pickPlaceCursor", {
              coords: YV
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Ue = xV(44267);
    const ye = "#e45649",
      pe = "#383a42",
      Qe = "#696c77",
      ne = "#986801",
      we = "#e5e5e6",
      Ze = "#fafafa",
      ve = "#eaeaeb",
      re = "#526fff",
      ke = zV.e.theme({
        "&": {
          color: pe,
          backgroundColor: Ze
        },
        ".cm-content": {
          caretColor: re
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: re
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: pe
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
          backgroundColor: Ze,
          color: Qe,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: we
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: ve
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: ve,
          borderBottomColor: ve
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: we,
            color: pe
          }
        }
      }, {
        dark: !1
      }),
      be = aV.d.define([{
        tag: Ue.j.keyword,
        color: "#a626a4"
      }, {
        tag: [Ue.j.name, Ue.j.deleted, Ue.j.character, Ue.j.propertyName, Ue.j.macroName],
        color: ye
      }, {
        tag: [Ue.j.function(Ue.j.variableName), Ue.j.labelName],
        color: "#4078f2"
      }, {
        tag: [Ue.j.color, Ue.j.constant(Ue.j.name), Ue.j.standard(Ue.j.name)],
        color: ne
      }, {
        tag: [Ue.j.definition(Ue.j.name), Ue.j.separator],
        color: pe
      }, {
        tag: [Ue.j.typeName, Ue.j.className, Ue.j.number, Ue.j.changed, Ue.j.annotation, Ue.j.modifier, Ue.j.self, Ue.j.namespace],
        color: "#c18401"
      }, {
        tag: [Ue.j.operator, Ue.j.operatorKeyword, Ue.j.url, Ue.j.escape, Ue.j.regexp, Ue.j.link, Ue.j.special(Ue.j.string)],
        color: "#0184bc"
      }, {
        tag: [Ue.j.meta, Ue.j.comment],
        color: Qe
      }, {
        tag: Ue.j.strong,
        fontWeight: "bold"
      }, {
        tag: Ue.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ue.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ue.j.link,
        color: Qe,
        textDecoration: "underline"
      }, {
        tag: Ue.j.heading,
        fontWeight: "bold",
        color: ye
      }, {
        tag: [Ue.j.atom, Ue.j.bool, Ue.j.special(Ue.j.variableName)],
        color: ne
      }, {
        tag: [Ue.j.processingInstruction, Ue.j.string, Ue.j.inserted],
        color: "#50a14f"
      }, {
        tag: Ue.j.invalid,
        color: "#000000"
      }]),
      Ee = [ke, (0, aV.gb)(be)];
    var Be = xV(38093),
      je = xV(44355);
    const qe = UV.j.define(),
      te = UV.m.define({
        create: () => !1,
        update(VV, eV) {
          for (const xV of eV.effects) xV.is(qe) && (VV = xV.value);
          return VV
        }
      }),
      Fe = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Te(VV, eV) {
      return [te, UV.n.fromClass(class {
        constructor(VV) {
          this.view = VV, this.onDown = VV => {
            const eV = VV.target instanceof Element && null !== VV.target.closest(".cm-tooltip");
            0 !== VV.button || eV || this.view.state.field(te) || this.view.dispatch({
              effects: qe.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(te) && this.view.dispatch({
              effects: qe.of(!1)
            })
          }, VV.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), UV.w.compute(["selection", te], (xV => function(VV, eV, xV) {
        const JV = VV.selection.main;
        return JV.empty || VV.field(te) || VV.sliceDoc(JV.from, JV.to).trim().length < 2 ? null : {
          pos: JV.from,
          above: !0,
          create: VV => {
            const JV = document.createElement("div");
            JV.className = "CodeSelectionActions", JV.setAttribute("role", "toolbar"), JV.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: YV,
                label: UV
              }
              of Fe) {
              if (!xV && "explain" !== YV) continue;
              const yV = document.createElement("button");
              yV.type = "button", yV.textContent = UV, "change" !== YV && (yV.title = je.c, yV.dataset.asksAi = "true"), yV.addEventListener("mousedown", (VV => {
                VV.preventDefault()
              })), yV.addEventListener("click", (() => {
                const xV = VV.state.selection.main;
                if (xV.empty) return;
                const JV = {
                  action: YV,
                  path: eV,
                  fromLine: VV.state.doc.lineAt(xV.from).number,
                  toLine: VV.state.doc.lineAt(xV.to > xV.from && VV.state.doc.lineAt(xV.to).from === xV.to ? xV.to - 1 : xV.to).number,
                  text: VV.state.sliceDoc(xV.from, xV.to)
                };
                RV.h.QZ("WorldCodeAiSelection", JV), VV.dispatch({
                  selection: {
                    anchor: xV.to
                  }
                })
              })), JV.appendChild(yV)
            }
            return {
              dom: JV
            }
          }
        }
      }(xV, VV, eV)))]
    }
    var Pe = xV(1321);
    const Ae = new Set(["(", "{", "[", "<"]),
      Ne = new Set([")", "}", "]", ">"]),
      Xe = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Me(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function xV(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = [];
        for (const YV of VV) {
          let VV;
          VV = "punctuation" === YV.kind ? Xe.text : "parameterName" === YV.kind ? Xe.parameterName : eV, JV.push({
            str: YV.text,
            style: {
              color: VV,
              opacity: xV ? .5 : void 0
            }
          })
        }
        return JV
      }
      const JV = [];
      if (JV.push(...xV(VV.prefixDisplayParts, Xe.text)), VV.parameters.length > 0) {
        JV.push("\n");
        for (let YV = 0; YV < VV.parameters.length; YV++) {
          const UV = VV.parameters[YV];
          JV.push("\t"), JV.push(...xV(UV.displayParts, Xe.parameter, null !== eV && YV !== eV)), JV.push("\n")
        }
      }
      return JV.push(...xV(VV.suffixDisplayParts, Xe.suffix)), VV.documentation && (JV.push("\n\n"), JV.push(...xV(VV.documentation, Xe.docs))), JV
    }
    var ze = function(VV) {
      return VV[VV.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", VV[VV.DuplicateIdentifier = 2300] = "DuplicateIdentifier", VV
    }(ze || {});
    const Ge = new Set([ze.DuplicateIdentifier]),
      We = new Set([ze.VariableDefinedElsewhere]),
      Re = new Set([]),
      ge = "/index.js";

    function De(VV) {
      return "/" + VV
    }

    function ie(VV, eV, xV) {
      VV.getSourceFile(eV) && VV.deleteFile(eV), VV.createFile(eV, xV)
    }

    function Ce(VV) {
      return !!VV && ((0, FV.o)(VV) || (0, FV.k)(VV))
    }

    function ae(VV, eV, xV) {
      return () => {
        let JV = [...eV.languageService.getSemanticDiagnostics(xV), ...eV.languageService.getSyntacticDiagnostics(xV)];
        return JV = JV.filter((VV => !(0, AV.J)(VV.start) && !(0, AV.J)(VV.length) && !Ge.has(VV.code))), VV || (JV = JV.filter((VV => !We.has(VV.code)))), JV.map((VV => ({
          from: VV.start,
          to: VV.start + VV.length,
          message: "string" === typeof VV.messageText ? VV.messageText : VV.messageText.messageText,
          severity: Re.has(VV.code) ? "warning" : "error"
        })))
      }
    }

    function oe(VV, eV) {
      return xV => {
        var JV, YV;
        const UV = VV.languageService.getCompletionsAtPosition(eV, xV.pos, {});
        if (!UV) return {
          from: xV.pos,
          options: []
        };
        let yV = null !== (JV = null === (YV = UV.optionalReplacementSpan) || void 0 === YV ? void 0 : YV.start) && void 0 !== JV ? JV : xV.pos;
        if (!UV.optionalReplacementSpan) {
          const VV = xV.state.doc.sliceString(0, xV.pos);
          for (; yV > 0 && /[\w$]/.test(VV[yV - 1]);) yV--
        }
        return UV.entries = UV.entries.filter((VV => VV.kind !== bV().ScriptElementKind.warning)), {
          from: yV,
          options: UV.entries.map((JV => {
            var YV, UV, pV, QV;
            const nV = VV.languageService.getCompletionEntryDetails(eV, xV.pos, JV.name, {}, JV.source, {}, JV.data),
              wV = null !== (YV = null === (UV = JV.replacementSpan) || void 0 === UV ? void 0 : UV.start) && void 0 !== YV ? YV : yV,
              ZV = JV.replacementSpan ? JV.replacementSpan.start + JV.replacementSpan.length : xV.pos,
              vV = null !== (pV = JV.insertText) && void 0 !== pV ? pV : JV.name;
            return {
              label: JV.name,
              detail: null === nV || void 0 === nV ? void 0 : nV.displayParts.map((VV => VV.text)).join(""),
              info: null === nV || void 0 === nV || null === (QV = nV.documentation) || void 0 === QV ? void 0 : QV.map((VV => VV.text)).join(""),
              apply: VV => {
                VV.dispatch({
                  changes: {
                    from: wV,
                    to: ZV,
                    insert: vV
                  },
                  selection: {
                    anchor: wV + vV.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function ce(VV) {
      return eV => {
        const xV = document.createElement("div");
        xV.className = "CodeEditorTooltip";
        let JV = !1;
        return queueMicrotask((() => {
          JV || (pV.render((0, Pe.jsx)(vV.b, {
            text: VV
          }), xV), eV.requestMeasure())
        })), {
          dom: xV,
          destroy() {
            JV = !0, queueMicrotask((() => {
              pV.unmountComponentAtNode(xV)
            }))
          }
        }
      }
    }

    function he(VV, eV, xV) {
      return JV => {
        var YV;
        if (!eV) return [];
        const UV = null === (YV = JV.selection.TE[0]) || void 0 === YV ? void 0 : YV.head;
        if (void 0 === UV) return [];
        const yV = VV.languageService.getSignatureHelpItems(xV, UV, {});
        if (!yV || !yV.items.length) return [];
        const pV = yV.applicableSpan.start - yV.items[0].prefixDisplayParts.map((VV => VV.text)).join("").length,
          QV = yV.applicableSpan.start,
          nV = JV.doc.lineAt(UV),
          wV = nV.from,
          ZV = Math.min(nV.to, UV);
        let vV, rV;
        return pV < wV ? (vV = wV, rV = ZV) : (vV = pV, rV = QV), [{
          pos: vV,
          end: rV,
          above: !1,
          create: ce(Me(yV.items[0], yV.argumentIndex))
        }]
      }
    }

    function le(VV, eV) {
      return (xV, JV, YV) => {
        const UV = VV.languageService.getQuickInfoAtPosition(eV, JV);
        if (!UV) return [];
        const yV = UV.textSpan.start,
          pV = UV.textSpan.start + UV.textSpan.length;
        if (JV < yV || JV >= pV) return [];
        if (UV.kind === bV().ScriptElementKind.memberFunctionElement || UV.kind === bV().ScriptElementKind.variableElement && "declare" === UV.kindModifiers) {
          const VV = UV.displayParts.findIndex((VV => "space" === VV.kind)); - 1 !== VV && (UV.displayParts = UV.displayParts.slice(VV));
          const eV = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            xV = UV.displayParts.findIndex((VV => "punctuation" === VV.kind && "(" === VV.text)); - 1 !== xV && (eV.prefixDisplayParts = UV.displayParts.slice(0, xV + 1), UV.displayParts = UV.displayParts.slice(xV + 1));
          const JV = UV.displayParts.findLastIndex((VV => "punctuation" === VV.kind && ")" === VV.text)); - 1 !== JV && (eV.suffixDisplayParts = UV.displayParts.slice(JV), UV.displayParts = UV.displayParts.slice(0, JV));
          let YV = 0,
            QV = [];
          for (const yV of UV.displayParts)
            if (Ae.has(yV.text) ? YV++ : Ne.has(yV.text) && YV--, "lineBreak" !== yV.kind) {
              if ("space" === yV.kind) {
                if (0 === QV.length) continue;
                QV.push({
                  kind: "space",
                  text: " "
                })
              } else QV.push(yV);
              0 === YV && "," === yV.text && (eV.parameters.push({
                displayParts: QV
              }), QV = [])
            } return QV.length > 0 && eV.parameters.push({
            displayParts: QV
          }), eV.documentation = UV.documentation, [{
            pos: yV,
            end: pV,
            above: !0,
            create: ce(Me(eV))
          }]
        }
        const QV = [];
        for (const VV of UV.displayParts) QV.push({
          str: VV.text,
          style: {
            color: Xe.text
          }
        });
        if (UV.documentation) {
          QV.push("\n\n");
          for (const VV of UV.documentation) QV.push({
            str: VV.text,
            style: {
              color: Xe.docs
            }
          })
        }
        return [{
          pos: yV,
          end: pV,
          above: !0,
          create: ce(QV)
        }]
      }
    }
    const Le = {
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
      semicolons: bV().SemicolonPreference.Insert
    };
    const fe = UV.j.define(),
      me = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Ke(VV) {
      let {
        isLobbyCode: eV,
        code: xV,
        onChange: pV,
        canEditCode: vV,
        setTemporaryMessage: kV,
        close: AV,
        showTooltips: mV,
        lightMode: KV,
        collabState: uV,
        onRemoteDocChange: sV,
        files: SV,
        activePath: IV,
        pluginName: OV,
        pluginFile: Ve,
        pluginSource: xe,
        setActiveDocReplacer: Je,
        showAiHints: Ue,
        canAiChangeCode: ye = vV
      } = VV;
      const [pe, Qe] = (0, yV.useState)(null), ne = null === uV || void 0 === uV ? void 0 : uV.version, we = null === uV || void 0 === uV ? void 0 : uV.clientID, Ze = (0, yV.useRef)({
        isLobbyCode: eV,
        files: SV,
        code: xV,
        activePath: IV
      }), ve = (0, yV.useRef)(sV);
      ve.current = sV;
      const re = (0, yV.useRef)(null),
        ke = (0, yV.useRef)(uV);
      ke.current = uV;
      const be = (0, yV.useRef)(null),
        je = (0, yV.useRef)(null),
        qe = (0, yV.useRef)(null),
        te = (0, yV.useRef)(AV);
      te.current = AV;
      const Fe = (0, yV.useRef)(xV);
      Fe.current = xV;
      const Ae = (0, yV.useRef)(xe);
      Ae.current = xe;
      const Ne = function(VV, eV, xV, JV) {
        return xV ? `/plugin-preview/${xV}/${null!==JV&&void 0!==JV?JV:"index.ts"}` : VV ? De(null !== eV && void 0 !== eV ? eV : tV.h) : ge
      }(eV, IV, OV, Ve);
      (0, yV.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: VV,
            files: eV,
            code: xV,
            activePath: JV
          } = Ze.current, YV = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: bV().ModuleKind.ESNext,
            moduleResolution: bV().ModuleResolutionKind.Bundler,
            target: bV().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(qV.e).map((VV => [VV.specifier, [VV.typesVfsPath]])))
            }
          }, UV = new Map, yV = [];
          if (VV) {
            const VV = null !== eV && void 0 !== eV ? eV : {
              [tV.h]: xV || "\n"
            };
            for (const [eV, xV] of Object.entries(VV)) {
              const VV = De(eV);
              UV.set(VV, xV || "\n"), yV.push(VV)
            }
            const YV = De(null !== JV && void 0 !== JV ? JV : tV.h);
            UV.has(YV) ? UV.set(YV, xV || "\n") : (UV.set(YV, xV || "\n"), yV.push(YV)), UV.set("/node_modules/@bloxd/index.d.ts", wV.default), yV.push("/node_modules/@bloxd/index.d.ts");
            for (const eV of Object.values(qV.e)) {
              UV.set(eV.typesVfsPath, eV.types), yV.push(eV.typesVfsPath);
              for (const [VV, xV] of Object.entries(eV.files)) {
                const JV = `/plugin-preview/${eV.name}/${VV}`;
                UV.set(JV, xV || "\n"), yV.push(JV)
              }
            }
          } else UV.set(ge, xV || "\n"), yV.push(ge);
          UV.set("/globals.d.ts", VV ? nV.d : QV.b), UV.set("/lib.d.ts", ZV.d), yV.push("/globals.d.ts", "/lib.d.ts");
          const pV = rV.e(UV),
            vV = rV.f(pV, yV, bV(), YV);
          Qe({
            MZ: vV,
            fsMap: UV
          })
        }()
      }), []), (0, yV.useEffect)((() => {
        var VV, JV;
        if (!pe || !eV) return;
        const {
          MZ: YV,
          fsMap: UV
        } = pe;
        if (function(VV, eV, xV) {
            const JV = new Set;
            for (const [YV, UV] of Object.entries(xV)) {
              const xV = De(YV);
              JV.add(xV);
              const yV = UV || "\n";
              eV.get(xV) !== yV && (eV.set(xV, yV), ie(VV, xV, yV))
            }
            for (const YV of [...eV.keys()]) "/globals.d.ts" === YV || "/lib.d.ts" === YV || YV.startsWith("/node_modules/") || YV.startsWith("/plugin-preview/") || JV.has(YV) || (eV.delete(YV), VV.getSourceFile(YV) && VV.deleteFile(YV))
          }(YV, UV, null !== SV && void 0 !== SV ? SV : {
            [tV.h]: xV || "\n"
          }), OV) return void ie(YV, Ne, xe || "\n");
        const yV = null !== (VV = null === (JV = re.current) || void 0 === JV ? void 0 : JV.state.doc.toString()) && void 0 !== VV ? VV : xV;
        ie(YV, Ne, yV || "\n")
      }), [SV, IV, pe, OV, xe, Ne, xV, eV]), (0, yV.useEffect)((() => {
        if (!pe) return;
        const {
          MZ: VV
        } = pe;
        ie(VV, Ne, (OV ? xe : xV) || "\n")
      }), [xV, OV, xe, Ne, pe]), (0, yV.useEffect)((() => () => {
        je.current && (je.current(), je.current = null)
      }), []), (0, yV.useEffect)((() => (Je(((VV, eV) => {
        if (OV) return !1;
        const xV = re.current,
          JV = ke.current,
          YV = JV ? (0, FV.s)(JV.docKey) : null;
        if (!xV || !JV || be.current !== JV.clientID || VV !== YV) return !1;
        const UV = xV.state.doc.toString();
        return UV !== eV && xV.dispatch({
          changes: {
            from: 0,
            to: UV.length,
            insert: eV
          }
        }), !0
      })), () => {
        re.current = null, be.current = null, Je(null)
      })), [Je, OV]);
      const Xe = eV ? OV ? null : null !== IV && void 0 !== IV ? IV : tV.h : Be.b,
        Me = ee(re, Xe);
      Ye(re, kV), (0, PV.g)("FormatCode", (() => {
        if (!pe || !re.current || OV) return;
        const {
          MZ: VV,
          fsMap: xV
        } = pe, JV = VV.getSourceFile(Ne).getFullText();
        let YV = 0;
        if (eV && SV)
          for (const [eV, pV] of Object.entries(SV)) eV !== (null !== IV && void 0 !== IV ? IV : tV.h) && (YV += pV.length);
        const UV = function(VV, eV, xV, JV, YV) {
          const UV = VV.languageService.getFormattingEditsForDocument(JV, Le);
          if (!UV.length) return NV.e.error("Code is already formatted.");
          UV.sort(((VV, eV) => eV.span.start - VV.span.start));
          let yV = VV.getSourceFile(JV).getFullText();
          for (const pV of UV) yV = yV.slice(0, pV.span.start) + pV.Bn + yV.slice(pV.span.start + pV.span.length);
          return yV !== (xV ? (0, TV.i)(yV, YV) : (0, TV.h)(yV)) ? NV.e.error("Formatting the code will go beyond the character limit.") : NV.e.value(yV)
        }(VV, 0, eV, Ne, YV);
        if (UV.isError()) return void kV({
          message: UV.asError().message,
          type: "warning"
        });
        const yV = UV.getValue();
        yV && (re.current.dispatch({
          changes: {
            from: 0,
            to: JV.length,
            insert: yV
          },
          selection: {
            anchor: yV.length
          }
        }), ie(VV, Ne, yV), pV(yV))
      }));
      const ze = (0, yV.useMemo)((() => {
        if (!pe) return [];
        const {
          MZ: VV,
          fsMap: xV
        } = pe;
        ! function(VV, eV, xV, JV) {
          if (VV.getSourceFile(xV)) return;
          const YV = JV || "\n";
          eV.set(xV, YV), VV.createFile(xV, YV)
        }(VV, xV, Ne, (OV ? Ae.current : Fe.current) || "\n");
        const yV = eV && Ce(OV ? null !== Ve && void 0 !== Ve ? Ve : "index.ts" : IV),
          pV = [(0, YV.b)({
            jsx: !1,
            typescript: yV
          }), UV.f.highest(UV.d.domEventHandlers({
            keydown: VV => "Escape" === VV.key ? (te.current(), VV.stopPropagation(), !0) : (VV.stopPropagation(), !1)
          })), (0, JV.b)({
            override: [oe(VV, Ne)]
          }), zV.j.fromClass(class {
            constructor(VV) {
              this.view = VV, this.timeout = null, this.scheduleParse()
            }
            update(VV) {
              (VV.docChanged || VV.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const VV = this.view.viewport.to;
                (0, aV.kb)(this.view.state, VV) || (0, aV.N)(this.view, VV, oV) || this.scheduleParse()
              }), cV))
            }
          }), ...dV, UV.d.lineWrapping, UV.m.define({
            create: he(VV, mV, Ne),
            update(eV, xV) {
              const JV = xV.effects.some((VV => VV.is(fe)));
              return xV.docChanged || xV.selection || JV ? (ie(VV, Ne, xV.state.doc.toString() || " "), he(VV, mV, Ne)(xV.state)) : eV
            },
            provide: VV => UV.w.computeN([VV], (eV => eV.field(VV)))
          }), (0, UV.s)(le(VV, Ne)), (0, BV.e)(ae(eV, VV, Ne)), UV.n.fromClass(class {
            constructor(VV) {
              this.view = VV, this.searchPanel = null
            }
            update(VV) {
              const eV = VV.view.dom.querySelector(".cm-search");
              if (eV !== this.searchPanel) {
                if (this.searchPanel = eV, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (VV => {
                  "Escape" === VV.key && (0, EV.e)(this.view), VV.stopPropagation()
                }))
              }
            }
          })];
        Ue && !OV && pV.push(Te(eV ? null !== IV && void 0 !== IV ? IV : tV.h : Be.b, ye));
        const QV = ke.current;
        if (QV && !OV) {
          pV.push(... function(VV, eV, xV, JV, YV) {
            let UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const yV = (0, FV.s)(xV),
              pV = zV.j.fromClass(class {
                constructor(VV) {
                  this.view = VV, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = RV.h.subscribe("codeCollab", (VV => {
                    VV.docKey === yV && VV.type === FV.d.Updates && (VV.updates ? this.applyUpdates(VV.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(VV) {
                  const eV = JSON.parse(VV).map((VV => ({
                    clientID: VV.clientID,
                    changes: MV.ChangeSet.fromJSON(VV.changes)
                  })));
                  eV.length > 0 && (this.view.dispatch((0, XV.h)(this.view.state, eV)), YV && YV(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(VV) {
                  UV && (VV.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const VV = (0, XV.l)(this.view.state);
                  if (this.pushing || !VV.length) return;
                  const eV = Date.now() - this.lastPushTime;
                  if (eV < CV) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), CV - eV)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), DV);
                  const xV = (0, XV.g)(this.view.state),
                    YV = VV.map((VV => ({
                      clientID: VV.clientID,
                      changes: VV.changes.toJSON()
                    }))),
                    UV = JSON.stringify(YV);
                  UV.length <= FV.e ? GV.gameBridge.send("sendCodeCollab", {
                    bV: FV.c.Push,
                    EV: yV,
                    BV: xV,
                    tV: UV
                  }) : (0, gV.postJsonWithMetricsCookiesAndJsonResponse)(`${JV.gsUrl}/code/collab-push`, WV.o["collab-push"].toBuffer({
                    gameNameWithVariation: JV.gameNameWithVariation,
                    lobbyName: JV.lobbyName,
                    docKey: yV,
                    version: xV,
                    updates: UV
                  }), {
                    retries: 0
                  }).catch((VV => {
                    console.error("[CodeCollab] HTTP push failed", VV)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const VV = (0, XV.g)(this.view.state);
                  (0, gV.postJsonWithMetricsCookiesAndJsonResponse)(`${JV.gsUrl}/code/collab-pull`, WV.o["collab-pull"].toBuffer({
                    gameNameWithVariation: JV.gameNameWithVariation,
                    lobbyName: JV.lobbyName,
                    docKey: yV,
                    fromVersion: VV
                  }), {
                    retries: 1
                  }).then((VV => {
                    this.destroyed || (VV.fullDoc ? RV.h.QZ("codeCollabRejoin", {
                      docKey: yV,
                      doc: VV.fullDoc,
                      version: VV.version
                    }) : this.applyUpdates(VV.updates))
                  })).catch((VV => {
                    console.error("[CodeCollab] Pull failed", VV)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const VV = Date.now();
                  if (VV - this.lastCursorSent < iV) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), iV)));
                  this.lastCursorSent = VV;
                  const eV = this.view.state.selection.main;
                  GV.gameBridge.send("sendCodeCollab", {
                    bV: FV.c.Cursor,
                    EV: yV,
                    AV: eV.anchor,
                    NV: eV.head
                  })
                }
                destroy() {
                  this.destroyed = !0, RV.h.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, XV.e)({
              startVersion: VV,
              clientID: eV
            }), pV]
          }(ne, we, QV.docKey, QV.httpConfig, (VV => {
            var eV;
            null === (eV = ve.current) || void 0 === eV || eV.call(ve, VV)
          }), vV));
          const VV = function(VV, eV) {
            const xV = (0, FV.s)(VV);
            return {
              extensions: [HV],
              connect(VV) {
                if (eV) {
                  const xV = eV.map((VV => lV.of({
                    playerId: VV.playerId,
                    playerName: VV.playerName,
                    colour: VV.colour,
                    anchor: VV.anchor,
                    head: VV.head,
                    lastMoved: Date.now()
                  })));
                  xV.length > 0 && VV.dispatch({
                    effects: xV
                  })
                }
                const JV = RV.h.subscribe("codeCollab", (eV => {
                    if (eV.docKey === xV)
                      if (eV.type === FV.d.RemoteCursor) VV.dispatch({
                        effects: lV.of({
                          playerId: eV.playerId,
                          playerName: eV.playerName,
                          colour: eV.colour,
                          anchor: eV.anchor,
                          head: eV.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (eV.type === FV.d.Presence) {
                      const xV = JSON.parse(eV.peers),
                        JV = new Set(xV.map((VV => VV.playerId))),
                        YV = VV.state.field(HV),
                        UV = [];
                      for (const [VV] of YV.cursors) JV.has(VV) || UV.push(LV.of(VV));
                      UV.length > 0 && VV.dispatch({
                        effects: UV
                      })
                    }
                  })),
                  YV = setInterval((() => {
                    VV.dom.isConnected ? VV.dispatch({
                      effects: fV.of(Date.now())
                    }) : clearInterval(YV)
                  }), hV);
                return () => {
                  RV.h.unsubscribe(JV), clearInterval(YV)
                }
              }
            }
          }(QV.docKey, QV.existingCursors);
          pV.push(...VV.extensions), qe.current = VV.connect
        } else qe.current = null;
        return pV
      }), [eV, pe, mV, ne, we, Ne, IV, OV, Ve, vV, Ue, ye]);
      if (!pe || !uV && !OV) return (0, Pe.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Pe.jsx)(jV.d, {})
      });
      const Ge = OV ? `plugin-${OV}-${null!==Ve&&void 0!==Ve?Ve:"index.ts"}` : uV ? `collab-${uV.clientID}` : `local-${eV}`;
      return (0, Pe.jsx)(UV.o, {
        value: OV ? null !== xe && void 0 !== xe ? xe : "" : xV,
        onChange: pV,
        extensions: ze,
        className: "CodeEditorContent",
        theme: KV ? Ee : "dark",
        editable: vV && !OV,
        basicSetup: me,
        onCreateEditor: VV => {
          var eV;
          re.current = VV, be.current = null !== (eV = null === uV || void 0 === uV ? void 0 : uV.clientID) && void 0 !== eV ? eV : null, Me(VV), je.current && je.current(), qe.current && (je.current = qe.current(VV))
        }
      }, Ge)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);