export const id = 602;
export const ids = [602];
export const modules = {
  43965: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => Br
    });
    var OM = iM(43970),
      SM = iM(44014),
      jM = iM(44023),
      aM = iM(44),
      PM = iM(65),
      nM = iM(44046),
      QM = iM(44052),
      zM = iM(5169),
      LM = iM(44054),
      mM = iM(2006),
      HM = iM(44056),
      hM = iM(44073),
      JM = iM.n(hM),
      dM = iM(44029),
      yM = iM(44038),
      lM = iM(1396),
      EM = iM(37799),
      UM = iM(1242),
      GM = iM(2638),
      CM = iM(37696),
      eM = iM(1516),
      bM = iM(625),
      wM = iM(1251),
      tM = iM(44114),
      gM = iM(43972),
      uM = iM(43977),
      RM = iM(2039),
      pM = iM(4129),
      WM = iM(22),
      sM = iM(1144);
    const DM = 1e4,
      kM = 250,
      ZM = 250;
    var oM = iM(43996);
    const fM = 50,
      YM = 100;
    const NM = 2e3,
      AM = gM.G.define(),
      xM = gM.G.define(),
      vM = gM.G.define();
    class FM extends uM.q {
      constructor(MM, rM, iM) {
        super(), this.colour = MM, this.playerName = rM, this.showName = iM
      }
      toDOM() {
        const MM = document.createElement("span");
        MM.className = "cm-remote-cursor-wrapper", MM.style.borderLeftColor = this.colour;
        const rM = document.createElement("span");
        if (rM.className = "cm-remote-cursor", rM.style.borderLeftColor = this.colour, MM.appendChild(rM), this.showName) {
          const rM = document.createElement("span");
          rM.className = "cm-remote-cursor-name", rM.style.backgroundColor = this.colour, rM.textContent = this.playerName, MM.appendChild(rM)
        }
        return MM
      }
      eq(MM) {
        return this.colour === MM.colour && this.playerName === MM.playerName && this.showName === MM.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function BM(MM, rM) {
      const iM = [],
        OM = [];
      for (const [, aM] of MM) {
        const MM = rM - aM.lastMoved < NM;
        if (iM.push({
            pos: aM.head,
            decoration: uM.c.widget({
              widget: new FM(aM.colour, aM.playerName, MM),
              side: 1
            })
          }), aM.anchor !== aM.head) {
          const MM = Math.min(aM.anchor, aM.head),
            rM = Math.max(aM.anchor, aM.head);
          OM.push({
            from: MM,
            to: rM,
            decoration: uM.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${aM.colour}33`
              }
            })
          })
        }
      }
      const SM = new gM.z,
        jM = [];
      for (const aM of iM) jM.push({
        bias: 1,
        deco: aM.decoration,
        from: aM.pos,
        to: aM.pos
      });
      for (const aM of OM) jM.push({
        bias: 0,
        deco: aM.decoration,
        from: aM.from,
        to: aM.to
      });
      jM.sort(((MM, rM) => MM.from - rM.from || MM.deco.startSide - rM.deco.startSide || MM.bias - rM.bias));
      for (const aM of jM) SM.add(aM.from, aM.to, aM.deco);
      return SM.finish()
    }
    const XM = gM.H.define({
      create: () => ({
        cursors: new Map,
        ij: uM.c.none
      }),
      update(MM, rM) {
        let iM = MM.cursors,
          OM = !1;
        if (rM.docChanged) {
          const MM = new Map;
          for (const [OM, SM] of iM) MM.set(OM, {
            ...SM,
            anchor: rM.changes.mapPos(SM.anchor, 1),
            head: rM.changes.mapPos(SM.head, 1)
          });
          iM = MM, OM = !0
        }
        for (const SM of rM.effects)
          if (SM.is(AM)) {
            if (!Number.isInteger(SM.value.anchor) || !Number.isInteger(SM.value.head)) {
              console.warn(`Code Editor: ignored player ${SM.value.playerId}'s cursor at ${SM.value.anchor}-${SM.value.head}`);
              continue
            }
            const jM = rM.state.doc.length,
              aM = {
                ...SM.value,
                anchor: Math.min(SM.value.anchor, jM),
                head: Math.min(SM.value.head, jM)
              };
            iM === MM.cursors && (iM = new Map(iM)), iM.set(aM.playerId, aM), OM = !0
          } else SM.is(xM) ? iM.has(SM.value) && (iM === MM.cursors && (iM = new Map(iM)), iM.delete(SM.value), OM = !0) : SM.is(vM) && (OM = !0);
        return OM ? {
          cursors: iM,
          ij: BM(iM, Date.now())
        } : MM
      },
      provide: MM => uM.f.ij.from(MM, (MM => MM.ij))
    });
    const IM = gM.G.define(),
      KM = uM.c.mark({
        class: "CodeInsertFlash"
      }),
      qM = gM.H.define({
        create: () => uM.c.none,
        update(MM, rM) {
          let iM = MM.map(rM.changes);
          for (const OM of rM.effects) OM.is(IM) && (iM = OM.value ? uM.c.set(KM.range(OM.value.from, OM.value.to)) : uM.c.none);
          return iM
        },
        provide: MM => uM.f.ij.from(MM)
      }),
      TM = gM.H.define({
        create: () => !1,
        update: (MM, rM) => MM || void 0 !== rM.annotation(gM.M.userEvent) && !rM.annotation(gM.M.remote)
      }),
      VM = [qM, TM];

    function cM(MM) {
      return MM.field(TM)
    }
    const Mr = 3e4;

    function rr(MM, rM) {
      const iM = (0, aM.useRef)(null);
      (0, aM.useEffect)((() => {
        var MM;
        (null === (MM = iM.current) || void 0 === MM ? void 0 : MM.path) !== rM && (iM.current = null)
      }), [rM]);
      const OM = MM => {
        var OM;
        const SM = iM.current;
        if (null === MM || void 0 === MM || !MM.dom.isConnected || !SM || SM.path !== rM) return;
        iM.current = null;
        const {
          ML: aM
        } = SM;
        if (aM && null !== aM.text && performance.now() - aM.at < Mr) {
          const rM = function(MM, rM) {
            if (MM === rM) return null;
            const iM = Math.min(MM.length, rM.length);
            let OM = 0;
            for (; OM < iM && MM[OM] === rM[OM];) OM++;
            let SM = 0;
            for (; SM < iM - OM && MM[MM.length - 1 - SM] === rM[rM.length - 1 - SM];) SM++;
            return {
              from: OM,
              to: MM.length - SM,
              insert: rM.slice(OM, rM.length - SM)
            }
          }(MM.state.doc.toString(), aM.text);
          null !== rM && MM.dispatch({
            changes: rM,
            userEvent: aM.placed ? "input" : void 0
          })
        }
        const {
          doc: PM
        } = MM.state, nM = PM.line(Math.min(Math.max(SM.line, 1), PM.lines)), QM = nM.from + Math.min(null !== (OM = SM.column) && void 0 !== OM ? OM : 0, nM.length);
        MM.dispatch({
          selection: {
            anchor: QM
          },
          effects: jM.c.scrollIntoView(QM, {
            y: "center"
          }),
          userEvent: null !== aM && void 0 !== aM && aM.placed ? "select" : void 0
        }), !1 !== (null === aM || void 0 === aM ? void 0 : aM.focused) && MM.focus()
      };
      return (0, eM.d)("CodeEditorGoToLine", (rM => {
        iM.current = rM, OM(MM.current)
      })), (0, eM.d)("CodeEditorKeepEdits", (() => {
        const OM = MM.current;
        if (null === OM || !OM.dom.isConnected || null === rM) return;
        const {
          doc: SM,
          selection: jM
        } = OM.state, {
          head: aM
        } = jM.main, PM = SM.lineAt(aM), nM = {
          text: (0, tM.i)(OM.state).length > 0 ? SM.toString() : null,
          at: performance.now(),
          focused: OM.hasFocus,
          placed: cM(OM.state)
        };
        iM.current = {
          path: rM,
          line: PM.number,
          column: aM - PM.from,
          ML: nM
        }
      })), MM => {
        var SM;
        const jM = iM.current;
        !1 === (null === jM || void 0 === jM || null === (SM = jM.ML) || void 0 === SM ? void 0 : SM.focused) && jM.path === rM || MM.focus(), OM(MM)
      }
    }
    var ir = iM(4718),
      Or = iM(1188);

    function Sr(MM, rM) {
      const {
        t: iM
      } = (0, Or.A)();
      (0, eM.d)("CodeEditorInsertText", (OM => {
        let {
          text: SM,
          focus: jM
        } = OM;
        const aM = MM.current,
          PM = null !== aM && void 0 !== aM && aM.dom.isConnected ? function(MM, rM) {
            if (!cM(MM)) return null;
            const {
              from: iM,
              to: OM
            } = MM.selection.main, SM = iM + rM.length;
            return {
              changes: {
                from: iM,
                to: OM,
                insert: rM
              },
              selection: {
                anchor: SM
              },
              effects: [uM.f.scrollIntoView(SM, {
                y: "center"
              }), IM.of({
                from: iM,
                to: SM
              })],
              userEvent: "input"
            }
          }(aM.state, SM) : null;
        null !== aM && null !== PM ? (aM.dispatch(PM), jM && aM.focus(), setTimeout((() => {
          aM.dom.isConnected && aM.dispatch({
            effects: IM.of(null)
          })
        }), 1500)) : (0, ir.c)(SM).then((() => {
          rM({
            message: iM("codeEditorWorld:pickCopied", {
              coords: SM
            }),
            type: "success"
          })
        }), (MM => {
          console.error("Pick could not copy the coordinates", MM), rM({
            message: iM("codeEditorWorld:pickPlaceCursor", {
              coords: SM
            }),
            type: "warning"
          })
        }))
      }))
    }
    var jr = iM(44005);
    const ar = "#e45649",
      Pr = "#383a42",
      nr = "#696c77",
      Qr = "#986801",
      zr = "#e5e5e6",
      Lr = "#fafafa",
      mr = "#eaeaeb",
      Hr = "#526fff",
      hr = uM.f.theme({
        "&": {
          color: Pr,
          backgroundColor: Lr
        },
        ".cm-content": {
          caretColor: Hr
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Hr
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Pr
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
          backgroundColor: Lr,
          color: nr,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: zr
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: mr
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: mr,
          borderBottomColor: mr
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: zr,
            color: Pr
          }
        }
      }, {
        dark: !1
      }),
      Jr = oM.b.define([{
        tag: jr.m.keyword,
        color: "#a626a4"
      }, {
        tag: [jr.m.name, jr.m.deleted, jr.m.character, jr.m.propertyName, jr.m.macroName],
        color: ar
      }, {
        tag: [jr.m.function(jr.m.variableName), jr.m.labelName],
        color: "#4078f2"
      }, {
        tag: [jr.m.color, jr.m.constant(jr.m.name), jr.m.standard(jr.m.name)],
        color: Qr
      }, {
        tag: [jr.m.definition(jr.m.name), jr.m.separator],
        color: Pr
      }, {
        tag: [jr.m.typeName, jr.m.className, jr.m.number, jr.m.changed, jr.m.annotation, jr.m.modifier, jr.m.self, jr.m.namespace],
        color: "#c18401"
      }, {
        tag: [jr.m.operator, jr.m.operatorKeyword, jr.m.url, jr.m.escape, jr.m.regexp, jr.m.link, jr.m.special(jr.m.string)],
        color: "#0184bc"
      }, {
        tag: [jr.m.meta, jr.m.comment],
        color: nr
      }, {
        tag: jr.m.strong,
        fontWeight: "bold"
      }, {
        tag: jr.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: jr.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: jr.m.link,
        color: nr,
        textDecoration: "underline"
      }, {
        tag: jr.m.heading,
        fontWeight: "bold",
        color: ar
      }, {
        tag: [jr.m.atom, jr.m.bool, jr.m.special(jr.m.variableName)],
        color: Qr
      }, {
        tag: [jr.m.processingInstruction, jr.m.string, jr.m.inserted],
        color: "#50a14f"
      }, {
        tag: jr.m.invalid,
        color: "#000000"
      }]),
      dr = [hr, (0, oM.eb)(Jr)];
    var yr = iM(37839),
      lr = iM(44117);
    const Er = jM.i.define(),
      Ur = jM.k.define({
        create: () => !1,
        update(MM, rM) {
          for (const iM of rM.effects) iM.is(Er) && (MM = iM.value);
          return MM
        }
      }),
      Gr = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Cr(MM, rM) {
      return [Ur, jM.l.fromClass(class {
        constructor(MM) {
          this.view = MM, this.onDown = MM => {
            const rM = MM.target instanceof Element && null !== MM.target.closest(".cm-tooltip");
            0 !== MM.button || rM || this.view.state.field(Ur) || this.view.dispatch({
              effects: Er.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Ur) && this.view.dispatch({
              effects: Er.of(!1)
            })
          }, MM.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), jM.s.compute(["selection", Ur], (iM => function(MM, rM, iM) {
        const OM = MM.selection.main;
        return OM.empty || MM.field(Ur) || MM.sliceDoc(OM.from, OM.to).trim().length < 2 ? null : {
          pos: OM.from,
          above: !0,
          create: MM => {
            const OM = document.createElement("div");
            OM.className = "CodeSelectionActions", OM.setAttribute("role", "toolbar"), OM.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: SM,
                label: jM
              }
              of Gr) {
              if (!iM && "explain" !== SM) continue;
              const aM = document.createElement("button");
              aM.type = "button", aM.textContent = jM, "change" !== SM && (aM.title = lr.b, aM.dataset.asksAi = "true"), aM.addEventListener("mousedown", (MM => {
                MM.preventDefault()
              })), aM.addEventListener("click", (() => {
                const iM = MM.state.selection.main;
                if (iM.empty) return;
                const OM = {
                  action: SM,
                  path: rM,
                  fromLine: MM.state.doc.lineAt(iM.from).number,
                  toLine: MM.state.doc.lineAt(iM.to > iM.from && MM.state.doc.lineAt(iM.to).from === iM.to ? iM.to - 1 : iM.to).number,
                  text: MM.state.sliceDoc(iM.from, iM.to)
                };
                WM.i.Tz("WorldCodeAiSelection", OM), MM.dispatch({
                  selection: {
                    anchor: iM.to
                  }
                })
              })), OM.appendChild(aM)
            }
            return {
              dom: OM
            }
          }
        }
      }(iM, MM, rM)))]
    }
    var er = iM(1303);
    const br = new Set(["(", "{", "[", "<"]),
      wr = new Set([")", "}", "]", ">"]),
      tr = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function gr(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function iM(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = [];
        for (const SM of MM) {
          let MM;
          MM = "punctuation" === SM.kind ? tr.text : "parameterName" === SM.kind ? tr.parameterName : rM, OM.push({
            str: SM.text,
            style: {
              color: MM,
              opacity: iM ? .5 : void 0
            }
          })
        }
        return OM
      }
      const OM = [];
      if (OM.push(...iM(MM.prefixDisplayParts, tr.text)), MM.parameters.length > 0) {
        OM.push("\n");
        for (let SM = 0; SM < MM.parameters.length; SM++) {
          const jM = MM.parameters[SM];
          OM.push("\t"), OM.push(...iM(jM.displayParts, tr.parameter, null !== rM && SM !== rM)), OM.push("\n")
        }
      }
      return OM.push(...iM(MM.suffixDisplayParts, tr.suffix)), MM.documentation && (OM.push("\n\n"), OM.push(...iM(MM.documentation, tr.docs))), OM
    }
    var ur = function(MM) {
      return MM[MM.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", MM[MM.DuplicateIdentifier = 2300] = "DuplicateIdentifier", MM
    }(ur || {});
    const Rr = new Set([ur.DuplicateIdentifier]),
      pr = new Set([ur.VariableDefinedElsewhere]),
      Wr = new Set([]),
      sr = "/index.js";

    function Dr(MM) {
      return "/" + MM
    }

    function kr(MM, rM, iM) {
      MM.getSourceFile(rM) && MM.deleteFile(rM), MM.createFile(rM, iM)
    }

    function Zr(MM) {
      return !!MM && ((0, GM.o)(MM) || (0, GM.k)(MM))
    }

    function or(MM, rM, iM) {
      return () => {
        let OM = [...rM.languageService.getSemanticDiagnostics(iM), ...rM.languageService.getSyntacticDiagnostics(iM)];
        return OM = OM.filter((MM => !(0, bM.J)(MM.start) && !(0, bM.J)(MM.length) && !Rr.has(MM.code))), MM || (OM = OM.filter((MM => !pr.has(MM.code)))), OM.map((MM => ({
          from: MM.start,
          to: MM.start + MM.length,
          message: "string" === typeof MM.messageText ? MM.messageText : MM.messageText.messageText,
          severity: Wr.has(MM.code) ? "warning" : "error"
        })))
      }
    }

    function fr(MM, rM) {
      return iM => {
        var OM, SM;
        const jM = MM.languageService.getCompletionsAtPosition(rM, iM.pos, {});
        if (!jM) return {
          from: iM.pos,
          options: []
        };
        let aM = null !== (OM = null === (SM = jM.optionalReplacementSpan) || void 0 === SM ? void 0 : SM.start) && void 0 !== OM ? OM : iM.pos;
        if (!jM.optionalReplacementSpan) {
          const MM = iM.state.doc.sliceString(0, iM.pos);
          for (; aM > 0 && /[\w$]/.test(MM[aM - 1]);) aM--
        }
        return jM.entries = jM.entries.filter((MM => MM.kind !== JM().ScriptElementKind.warning)), {
          from: aM,
          options: jM.entries.map((OM => {
            var SM, jM, PM, nM;
            const QM = MM.languageService.getCompletionEntryDetails(rM, iM.pos, OM.name, {}, OM.source, {}, OM.data),
              zM = null !== (SM = null === (jM = OM.replacementSpan) || void 0 === jM ? void 0 : jM.start) && void 0 !== SM ? SM : aM,
              LM = OM.replacementSpan ? OM.replacementSpan.start + OM.replacementSpan.length : iM.pos,
              mM = null !== (PM = OM.insertText) && void 0 !== PM ? PM : OM.name;
            return {
              label: OM.name,
              detail: null === QM || void 0 === QM ? void 0 : QM.displayParts.map((MM => MM.text)).join(""),
              info: null === QM || void 0 === QM || null === (nM = QM.documentation) || void 0 === nM ? void 0 : nM.map((MM => MM.text)).join(""),
              apply: MM => {
                MM.dispatch({
                  changes: {
                    from: zM,
                    to: LM,
                    insert: mM
                  },
                  selection: {
                    anchor: zM + mM.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Yr(MM) {
      return rM => {
        const iM = document.createElement("div");
        iM.className = "CodeEditorTooltip";
        let OM = !1;
        return queueMicrotask((() => {
          OM || (PM.render((0, er.jsx)(mM.b, {
            text: MM
          }), iM), rM.requestMeasure())
        })), {
          dom: iM,
          destroy() {
            OM = !0, queueMicrotask((() => {
              PM.unmountComponentAtNode(iM)
            }))
          }
        }
      }
    }

    function Nr(MM, rM, iM) {
      return OM => {
        var SM;
        if (!rM) return [];
        const jM = null === (SM = OM.selection.Ld[0]) || void 0 === SM ? void 0 : SM.head;
        if (void 0 === jM) return [];
        const aM = MM.languageService.getSignatureHelpItems(iM, jM, {});
        if (!aM || !aM.items.length) return [];
        const PM = aM.applicableSpan.start - aM.items[0].prefixDisplayParts.map((MM => MM.text)).join("").length,
          nM = aM.applicableSpan.start,
          QM = OM.doc.lineAt(jM),
          zM = QM.from,
          LM = Math.min(QM.to, jM);
        let mM, HM;
        return PM < zM ? (mM = zM, HM = LM) : (mM = PM, HM = nM), [{
          pos: mM,
          end: HM,
          above: !1,
          create: Yr(gr(aM.items[0], aM.argumentIndex))
        }]
      }
    }

    function Ar(MM, rM) {
      return (iM, OM, SM) => {
        const jM = MM.languageService.getQuickInfoAtPosition(rM, OM);
        if (!jM) return [];
        const aM = jM.textSpan.start,
          PM = jM.textSpan.start + jM.textSpan.length;
        if (OM < aM || OM >= PM) return [];
        if (jM.kind === JM().ScriptElementKind.memberFunctionElement || jM.kind === JM().ScriptElementKind.variableElement && "declare" === jM.kindModifiers) {
          const MM = jM.displayParts.findIndex((MM => "space" === MM.kind)); - 1 !== MM && (jM.displayParts = jM.displayParts.slice(MM));
          const rM = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            iM = jM.displayParts.findIndex((MM => "punctuation" === MM.kind && "(" === MM.text)); - 1 !== iM && (rM.prefixDisplayParts = jM.displayParts.slice(0, iM + 1), jM.displayParts = jM.displayParts.slice(iM + 1));
          const OM = jM.displayParts.findLastIndex((MM => "punctuation" === MM.kind && ")" === MM.text)); - 1 !== OM && (rM.suffixDisplayParts = jM.displayParts.slice(OM), jM.displayParts = jM.displayParts.slice(0, OM));
          let SM = 0,
            nM = [];
          for (const aM of jM.displayParts)
            if (br.has(aM.text) ? SM++ : wr.has(aM.text) && SM--, "lineBreak" !== aM.kind) {
              if ("space" === aM.kind) {
                if (0 === nM.length) continue;
                nM.push({
                  kind: "space",
                  text: " "
                })
              } else nM.push(aM);
              0 === SM && "," === aM.text && (rM.parameters.push({
                displayParts: nM
              }), nM = [])
            } return nM.length > 0 && rM.parameters.push({
            displayParts: nM
          }), rM.documentation = jM.documentation, [{
            pos: aM,
            end: PM,
            above: !0,
            create: Yr(gr(rM))
          }]
        }
        const nM = [];
        for (const MM of jM.displayParts) nM.push({
          str: MM.text,
          style: {
            color: tr.text
          }
        });
        if (jM.documentation) {
          nM.push("\n\n");
          for (const MM of jM.documentation) nM.push({
            str: MM.text,
            style: {
              color: tr.docs
            }
          })
        }
        return [{
          pos: aM,
          end: PM,
          above: !0,
          create: Yr(nM)
        }]
      }
    }
    const xr = {
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
      semicolons: JM().SemicolonPreference.Insert
    };
    const vr = jM.i.define(),
      Fr = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Br(MM) {
      let {
        isLobbyCode: rM,
        code: iM,
        onChange: PM,
        canEditCode: mM,
        setTemporaryMessage: hM,
        close: bM,
        showTooltips: FM,
        lightMode: BM,
        collabState: IM,
        onRemoteDocChange: KM,
        files: qM,
        activePath: TM,
        pluginName: cM,
        pluginFile: Mr,
        pluginSource: ir,
        setActiveDocReplacer: Or,
        showAiHints: jr,
        canAiChangeCode: ar = mM
      } = MM;
      const [Pr, nr] = (0, aM.useState)(null), Qr = null === IM || void 0 === IM ? void 0 : IM.version, zr = null === IM || void 0 === IM ? void 0 : IM.clientID, Lr = (0, aM.useRef)({
        isLobbyCode: rM,
        files: qM,
        code: iM,
        activePath: TM
      }), mr = (0, aM.useRef)(KM);
      mr.current = KM;
      const Hr = (0, aM.useRef)(null),
        hr = (0, aM.useRef)(IM);
      hr.current = IM;
      const Jr = (0, aM.useRef)(null),
        lr = (0, aM.useRef)(null),
        Er = (0, aM.useRef)(null),
        Ur = (0, aM.useRef)(bM);
      Ur.current = bM;
      const Gr = (0, aM.useRef)(iM);
      Gr.current = iM;
      const br = (0, aM.useRef)(ir);
      br.current = ir;
      const wr = function(MM, rM, iM, OM) {
        return iM ? `/plugin-preview/${iM}/${null!==OM&&void 0!==OM?OM:"index.ts"}` : MM ? Dr(null !== rM && void 0 !== rM ? rM : UM.i) : sr
      }(rM, TM, cM, Mr);
      (0, aM.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: MM,
            files: rM,
            code: iM,
            activePath: OM
          } = Lr.current, SM = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: JM().ModuleKind.ESNext,
            moduleResolution: JM().ModuleResolutionKind.Bundler,
            target: JM().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(EM.i).map((MM => [MM.specifier, [MM.typesVfsPath]])))
            }
          }, jM = new Map, aM = [];
          if (MM) {
            const MM = null !== rM && void 0 !== rM ? rM : {
              [UM.i]: iM || "\n"
            };
            for (const [rM, iM] of Object.entries(MM)) {
              const MM = Dr(rM);
              jM.set(MM, iM || "\n"), aM.push(MM)
            }
            const SM = Dr(null !== OM && void 0 !== OM ? OM : UM.i);
            jM.has(SM) ? jM.set(SM, iM || "\n") : (jM.set(SM, iM || "\n"), aM.push(SM)), jM.set("/node_modules/@bloxd/index.d.ts", zM.default), aM.push("/node_modules/@bloxd/index.d.ts");
            for (const rM of Object.values(EM.i)) {
              jM.set(rM.typesVfsPath, rM.types), aM.push(rM.typesVfsPath);
              for (const [MM, iM] of Object.entries(rM.files)) {
                const OM = `/plugin-preview/${rM.name}/${MM}`;
                jM.set(OM, iM || "\n"), aM.push(OM)
              }
            }
          } else jM.set(sr, iM || "\n"), aM.push(sr);
          jM.set("/globals.d.ts", MM ? QM.d : nM.b), jM.set("/lib.d.ts", LM.b), aM.push("/globals.d.ts", "/lib.d.ts");
          const PM = HM.c(jM),
            mM = HM.e(PM, aM, JM(), SM);
          nr({
            yL: mM,
            fsMap: jM
          })
        }()
      }), []), (0, aM.useEffect)((() => {
        var MM, OM;
        if (!Pr || !rM) return;
        const {
          yL: SM,
          fsMap: jM
        } = Pr;
        if (function(MM, rM, iM) {
            const OM = new Set;
            for (const [SM, jM] of Object.entries(iM)) {
              const iM = Dr(SM);
              OM.add(iM);
              const aM = jM || "\n";
              rM.get(iM) !== aM && (rM.set(iM, aM), kr(MM, iM, aM))
            }
            for (const SM of [...rM.keys()]) "/globals.d.ts" === SM || "/lib.d.ts" === SM || SM.startsWith("/node_modules/") || SM.startsWith("/plugin-preview/") || OM.has(SM) || (rM.delete(SM), MM.getSourceFile(SM) && MM.deleteFile(SM))
          }(SM, jM, null !== qM && void 0 !== qM ? qM : {
            [UM.i]: iM || "\n"
          }), cM) return void kr(SM, wr, ir || "\n");
        const aM = null !== (MM = null === (OM = Hr.current) || void 0 === OM ? void 0 : OM.state.doc.toString()) && void 0 !== MM ? MM : iM;
        kr(SM, wr, aM || "\n")
      }), [qM, TM, Pr, cM, ir, wr, iM, rM]), (0, aM.useEffect)((() => {
        if (!Pr) return;
        const {
          yL: MM
        } = Pr;
        kr(MM, wr, (cM ? ir : iM) || "\n")
      }), [iM, cM, ir, wr, Pr]), (0, aM.useEffect)((() => () => {
        lr.current && (lr.current(), lr.current = null)
      }), []), (0, aM.useEffect)((() => (Or(((MM, rM) => {
        if (cM) return !1;
        const iM = Hr.current,
          OM = hr.current,
          SM = OM ? (0, GM.z)(OM.docKey) : null;
        if (!iM || !OM || Jr.current !== OM.clientID || MM !== SM) return !1;
        const jM = iM.state.doc.toString();
        return jM !== rM && iM.dispatch({
          changes: {
            from: 0,
            to: jM.length,
            insert: rM
          }
        }), !0
      })), () => {
        Hr.current = null, Jr.current = null, Or(null)
      })), [Or, cM]);
      const tr = rM ? cM ? null : null !== TM && void 0 !== TM ? TM : UM.i : yr.d,
        gr = rr(Hr, tr);
      Sr(Hr, hM), (0, eM.d)("FormatCode", (() => {
        if (!Pr || !Hr.current || cM) return;
        const {
          yL: MM,
          fsMap: iM
        } = Pr, OM = MM.getSourceFile(wr).getFullText();
        let SM = 0;
        if (rM && qM)
          for (const [rM, PM] of Object.entries(qM)) rM !== (null !== TM && void 0 !== TM ? TM : UM.i) && (SM += PM.length);
        const jM = function(MM, rM, iM, OM, SM) {
          const jM = MM.languageService.getFormattingEditsForDocument(OM, xr);
          if (!jM.length) return wM.b.error("Code is already formatted.");
          jM.sort(((MM, rM) => rM.span.start - MM.span.start));
          let aM = MM.getSourceFile(OM).getFullText();
          for (const PM of jM) aM = aM.slice(0, PM.span.start) + PM.hQ + aM.slice(PM.span.start + PM.span.length);
          return aM !== (iM ? (0, CM.j)(aM, SM) : (0, CM.h)(aM)) ? wM.b.error("Formatting the code will go beyond the character limit.") : wM.b.value(aM)
        }(MM, 0, rM, wr, SM);
        if (jM.isError()) return void hM({
          message: jM.asError().message,
          type: "warning"
        });
        const aM = jM.getValue();
        aM && (Hr.current.dispatch({
          changes: {
            from: 0,
            to: OM.length,
            insert: aM
          },
          selection: {
            anchor: aM.length
          }
        }), kr(MM, wr, aM), PM(aM))
      }));
      const ur = (0, aM.useMemo)((() => {
        if (!Pr) return [];
        const {
          yL: MM,
          fsMap: iM
        } = Pr;
        ! function(MM, rM, iM, OM) {
          if (MM.getSourceFile(iM)) return;
          const SM = OM || "\n";
          rM.set(iM, SM), MM.createFile(iM, SM)
        }(MM, iM, wr, (cM ? br.current : Gr.current) || "\n");
        const aM = rM && Zr(cM ? null !== Mr && void 0 !== Mr ? Mr : "index.ts" : TM),
          PM = [(0, SM.c)({
            jsx: !1,
            typescript: aM
          }), jM.e.highest(jM.c.domEventHandlers({
            keydown: MM => "Escape" === MM.key ? (Ur.current(), MM.stopPropagation(), !0) : (MM.stopPropagation(), !1)
          })), (0, OM.c)({
            override: [fr(MM, wr)]
          }), uM.m.fromClass(class {
            constructor(MM) {
              this.view = MM, this.timeout = null, this.scheduleParse()
            }
            update(MM) {
              (MM.docChanged || MM.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const MM = this.view.viewport.to;
                (0, oM.ib)(this.view.state, MM) || (0, oM.K)(this.view, MM, fM) || this.scheduleParse()
              }), YM))
            }
          }), ...VM, jM.c.lineWrapping, jM.k.define({
            create: Nr(MM, FM, wr),
            update(rM, iM) {
              const OM = iM.effects.some((MM => MM.is(vr)));
              return iM.docChanged || iM.selection || OM ? (kr(MM, wr, iM.state.doc.toString() || " "), Nr(MM, FM, wr)(iM.state)) : rM
            },
            provide: MM => jM.s.computeN([MM], (rM => rM.field(MM)))
          }), (0, jM.r)(Ar(MM, wr)), (0, yM.f)(or(rM, MM, wr)), jM.l.fromClass(class {
            constructor(MM) {
              this.view = MM, this.searchPanel = null
            }
            update(MM) {
              const rM = MM.view.dom.querySelector(".cm-search");
              if (rM !== this.searchPanel) {
                if (this.searchPanel = rM, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (MM => {
                  "Escape" === MM.key && (0, dM.b)(this.view), MM.stopPropagation()
                }))
              }
            }
          })];
        jr && !cM && PM.push(Cr(rM ? null !== TM && void 0 !== TM ? TM : UM.i : yr.d, ar));
        const nM = hr.current;
        if (nM && !cM) {
          PM.push(... function(MM, rM, iM, OM, SM) {
            let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const aM = (0, GM.z)(iM),
              PM = uM.m.fromClass(class {
                constructor(MM) {
                  this.view = MM, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = WM.i.subscribe("codeCollab", (MM => {
                    MM.docKey === aM && MM.type === GM.d.Updates && (MM.updates ? this.applyUpdates(MM.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(MM) {
                  const rM = JSON.parse(MM).map((MM => ({
                    clientID: MM.clientID,
                    changes: gM.ChangeSet.fromJSON(MM.changes)
                  })));
                  rM.length > 0 && (this.view.dispatch((0, tM.h)(this.view.state, rM)), SM && SM(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(MM) {
                  jM && (MM.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const MM = (0, tM.i)(this.view.state);
                  if (this.pushing || !MM.length) return;
                  const rM = Date.now() - this.lastPushTime;
                  if (rM < ZM) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), ZM - rM)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), DM);
                  const iM = (0, tM.e)(this.view.state),
                    SM = MM.map((MM => ({
                      clientID: MM.clientID,
                      changes: MM.changes.toJSON()
                    }))),
                    jM = JSON.stringify(SM);
                  jM.length <= GM.e ? RM.gameBridge.send("sendCodeCollab", {
                    hM: GM.c.Push,
                    JM: aM,
                    dM: iM,
                    EM: jM
                  }) : (0, sM.postJsonWithMetricsCookiesAndJsonResponse)(`${OM.gsUrl}/code/collab-push`, pM.p["collab-push"].toBuffer({
                    gameNameWithVariation: OM.gameNameWithVariation,
                    lobbyName: OM.lobbyName,
                    docKey: aM,
                    version: iM,
                    updates: jM
                  }), {
                    retries: 0
                  }).catch((MM => {
                    console.error("[CodeCollab] HTTP push failed", MM)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const MM = (0, tM.e)(this.view.state);
                  (0, sM.postJsonWithMetricsCookiesAndJsonResponse)(`${OM.gsUrl}/code/collab-pull`, pM.p["collab-pull"].toBuffer({
                    gameNameWithVariation: OM.gameNameWithVariation,
                    lobbyName: OM.lobbyName,
                    docKey: aM,
                    fromVersion: MM
                  }), {
                    retries: 1
                  }).then((MM => {
                    this.destroyed || (MM.fullDoc ? WM.i.Tz("codeCollabRejoin", {
                      docKey: aM,
                      doc: MM.fullDoc,
                      version: MM.version
                    }) : this.applyUpdates(MM.updates))
                  })).catch((MM => {
                    console.error("[CodeCollab] Pull failed", MM)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const MM = Date.now();
                  if (MM - this.lastCursorSent < kM) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), kM)));
                  this.lastCursorSent = MM;
                  const rM = this.view.state.selection.main;
                  RM.gameBridge.send("sendCodeCollab", {
                    hM: GM.c.Cursor,
                    JM: aM,
                    eM: rM.anchor,
                    bM: rM.head
                  })
                }
                destroy() {
                  this.destroyed = !0, WM.i.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, tM.b)({
              startVersion: MM,
              clientID: rM
            }), PM]
          }(Qr, zr, nM.docKey, nM.httpConfig, (MM => {
            var rM;
            null === (rM = mr.current) || void 0 === rM || rM.call(mr, MM)
          }), mM));
          const MM = function(MM, rM) {
            const iM = (0, GM.z)(MM);
            return {
              extensions: [XM],
              connect(MM) {
                if (rM) {
                  const iM = rM.map((MM => AM.of({
                    playerId: MM.playerId,
                    playerName: MM.playerName,
                    colour: MM.colour,
                    anchor: MM.anchor,
                    head: MM.head,
                    lastMoved: Date.now()
                  })));
                  iM.length > 0 && MM.dispatch({
                    effects: iM
                  })
                }
                const OM = WM.i.subscribe("codeCollab", (rM => {
                    if (rM.docKey === iM)
                      if (rM.type === GM.d.RemoteCursor) MM.dispatch({
                        effects: AM.of({
                          playerId: rM.playerId,
                          playerName: rM.playerName,
                          colour: rM.colour,
                          anchor: rM.anchor,
                          head: rM.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (rM.type === GM.d.Presence) {
                      const iM = JSON.parse(rM.peers),
                        OM = new Set(iM.map((MM => MM.playerId))),
                        SM = MM.state.field(XM),
                        jM = [];
                      for (const [MM] of SM.cursors) OM.has(MM) || jM.push(xM.of(MM));
                      jM.length > 0 && MM.dispatch({
                        effects: jM
                      })
                    }
                  })),
                  SM = setInterval((() => {
                    MM.dom.isConnected ? MM.dispatch({
                      effects: vM.of(Date.now())
                    }) : clearInterval(SM)
                  }), NM);
                return () => {
                  WM.i.unsubscribe(OM), clearInterval(SM)
                }
              }
            }
          }(nM.docKey, nM.existingCursors);
          PM.push(...MM.extensions), Er.current = MM.connect
        } else Er.current = null;
        return PM
      }), [rM, Pr, FM, Qr, zr, wr, TM, cM, Mr, mM, jr, ar]);
      if (!Pr || !IM && !cM) return (0, er.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, er.jsx)(lM.d, {})
      });
      const Rr = cM ? `plugin-${cM}-${null!==Mr&&void 0!==Mr?Mr:"index.ts"}` : IM ? `collab-${IM.clientID}` : `local-${rM}`;
      return (0, er.jsx)(jM.o, {
        value: cM ? null !== ir && void 0 !== ir ? ir : "" : iM,
        onChange: PM,
        extensions: ur,
        className: "CodeEditorContent",
        theme: BM ? dr : "dark",
        editable: mM && !cM,
        basicSetup: Fr,
        onCreateEditor: MM => {
          var rM;
          Hr.current = MM, Jr.current = null !== (rM = null === IM || void 0 === IM ? void 0 : IM.clientID) && void 0 !== rM ? rM : null, gr(MM), lr.current && lr.current(), Er.current && (lr.current = Er.current(MM))
        }
      }, Rr)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);