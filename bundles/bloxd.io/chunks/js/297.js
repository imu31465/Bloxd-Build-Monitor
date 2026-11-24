export const id = 297;
export const ids = [297];
export const modules = {
  41391: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => xj
    });
    var QB = zB(41399),
      nB = zB(41456),
      dB = zB(41458),
      IB = zB(62),
      NB = zB(83),
      uB = zB(41474),
      UB = zB(41480),
      aB = zB(4853),
      pB = zB(41486),
      rB = zB(1952),
      sB = zB(41491),
      JB = zB(41506),
      mB = zB.n(JB),
      yB = zB(41462),
      kB = zB(41470),
      GB = zB(1369),
      LB = zB(36929),
      gB = zB(1270),
      tB = zB(2509),
      SB = zB(36823),
      MB = zB(1471),
      EB = zB(658),
      iB = zB(1277),
      qB = zB(41558),
      fB = zB(41408),
      oB = zB(41415),
      HB = zB(1982),
      DB = zB(3849),
      FB = zB(31),
      YB = zB(1173);
    const VB = 1e4,
      hB = 250,
      XB = 250;
    var ZB = zB(41437);
    const AB = 50,
      TB = 100;
    const PB = 2e3,
      WB = fB.D.define(),
      eB = fB.D.define(),
      lB = fB.D.define();
    class wB extends oB.r {
      constructor(BB, jB, zB) {
        super(), this.colour = BB, this.playerName = jB, this.showName = zB
      }
      toDOM() {
        const BB = document.createElement("span");
        BB.className = "cm-remote-cursor-wrapper", BB.style.borderLeftColor = this.colour;
        const jB = document.createElement("span");
        if (jB.className = "cm-remote-cursor", jB.style.borderLeftColor = this.colour, BB.appendChild(jB), this.showName) {
          const jB = document.createElement("span");
          jB.className = "cm-remote-cursor-name", jB.style.backgroundColor = this.colour, jB.textContent = this.playerName, BB.appendChild(jB)
        }
        return BB
      }
      eq(BB) {
        return this.colour === BB.colour && this.playerName === BB.playerName && this.showName === BB.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function xB(BB, jB) {
      const zB = [],
        QB = [];
      for (const [, IB] of BB) {
        const BB = jB - IB.lastMoved < PB;
        if (zB.push({
            pos: IB.head,
            decoration: oB.d.widget({
              widget: new wB(IB.colour, IB.playerName, BB),
              side: 1
            })
          }), IB.anchor !== IB.head) {
          const BB = Math.min(IB.anchor, IB.head),
            jB = Math.max(IB.anchor, IB.head);
          QB.push({
            from: BB,
            to: jB,
            decoration: oB.d.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${IB.colour}33`
              }
            })
          })
        }
      }
      const nB = new fB.y,
        dB = [];
      for (const IB of zB) dB.push({
        bias: 1,
        deco: IB.decoration,
        from: IB.pos,
        to: IB.pos
      });
      for (const IB of QB) dB.push({
        bias: 0,
        deco: IB.decoration,
        from: IB.from,
        to: IB.to
      });
      dB.sort(((BB, jB) => BB.from - jB.from || BB.deco.startSide - jB.deco.startSide || BB.bias - jB.bias));
      for (const IB of dB) nB.add(IB.from, IB.to, IB.deco);
      return nB.finish()
    }
    const KB = fB.F.define({
      create: () => ({
        cursors: new Map,
        pQ: oB.d.none
      }),
      update(BB, jB) {
        let zB = BB.cursors,
          QB = !1;
        if (jB.docChanged) {
          const BB = new Map;
          for (const [QB, nB] of zB) BB.set(QB, {
            ...nB,
            anchor: jB.changes.mapPos(nB.anchor, 1),
            head: jB.changes.mapPos(nB.head, 1)
          });
          zB = BB, QB = !0
        }
        for (const nB of jB.effects)
          if (nB.is(WB)) {
            if (!Number.isInteger(nB.value.anchor) || !Number.isInteger(nB.value.head)) {
              console.warn(`Code Editor: ignored player ${nB.value.playerId}'s cursor at ${nB.value.anchor}-${nB.value.head}`);
              continue
            }
            const dB = jB.state.doc.length,
              IB = {
                ...nB.value,
                anchor: Math.min(nB.value.anchor, dB),
                head: Math.min(nB.value.head, dB)
              };
            zB === BB.cursors && (zB = new Map(zB)), zB.set(IB.playerId, IB), QB = !0
          } else nB.is(eB) ? zB.has(nB.value) && (zB === BB.cursors && (zB = new Map(zB)), zB.delete(nB.value), QB = !0) : nB.is(lB) && (QB = !0);
        return QB ? {
          cursors: zB,
          pQ: xB(zB, Date.now())
        } : BB
      },
      provide: BB => oB.k.pQ.from(BB, (BB => BB.pQ))
    });
    const CB = fB.D.define(),
      cB = oB.d.mark({
        class: "CodeInsertFlash"
      }),
      bB = fB.F.define({
        create: () => oB.d.none,
        update(BB, jB) {
          let zB = BB.map(jB.changes);
          for (const QB of jB.effects) QB.is(CB) && (zB = QB.value ? oB.d.set(cB.range(QB.value.from, QB.value.to)) : oB.d.none);
          return zB
        },
        provide: BB => oB.k.pQ.from(BB)
      }),
      vB = fB.F.define({
        create: () => !1,
        update: (BB, jB) => BB || void 0 !== jB.annotation(fB.I.userEvent) && !jB.annotation(fB.I.remote)
      }),
      RB = [bB, vB];

    function OB(BB) {
      return BB.field(vB)
    }
    const Bj = 3e4;

    function jj(BB, jB) {
      const zB = (0, IB.useRef)(null);
      (0, IB.useEffect)((() => {
        var BB;
        (null === (BB = zB.current) || void 0 === BB ? void 0 : BB.path) !== jB && (zB.current = null)
      }), [jB]);
      const QB = BB => {
        var QB;
        const nB = zB.current;
        if (null === BB || void 0 === BB || !BB.dom.isConnected || !nB || nB.path !== jB) return;
        zB.current = null;
        const {
          Cs: IB
        } = nB;
        if (IB && null !== IB.text && performance.now() - IB.at < Bj) {
          const jB = function(BB, jB) {
            if (BB === jB) return null;
            const zB = Math.min(BB.length, jB.length);
            let QB = 0;
            for (; QB < zB && BB[QB] === jB[QB];) QB++;
            let nB = 0;
            for (; nB < zB - QB && BB[BB.length - 1 - nB] === jB[jB.length - 1 - nB];) nB++;
            return {
              from: QB,
              to: BB.length - nB,
              insert: jB.slice(QB, jB.length - nB)
            }
          }(BB.state.doc.toString(), IB.text);
          null !== jB && BB.dispatch({
            changes: jB,
            userEvent: IB.placed ? "input" : void 0
          })
        }
        const {
          doc: NB
        } = BB.state, uB = NB.line(Math.min(Math.max(nB.line, 1), NB.lines)), UB = uB.from + Math.min(null !== (QB = nB.column) && void 0 !== QB ? QB : 0, uB.length);
        BB.dispatch({
          selection: {
            anchor: UB
          },
          effects: dB.b.scrollIntoView(UB, {
            y: "center"
          }),
          userEvent: null !== IB && void 0 !== IB && IB.placed ? "select" : void 0
        }), !1 !== (null === IB || void 0 === IB ? void 0 : IB.focused) && BB.focus()
      };
      return (0, MB.f)("CodeEditorGoToLine", (jB => {
        zB.current = jB, QB(BB.current)
      })), (0, MB.f)("CodeEditorKeepEdits", (() => {
        const QB = BB.current;
        if (null === QB || !QB.dom.isConnected || null === jB) return;
        const {
          doc: nB,
          selection: dB
        } = QB.state, {
          head: IB
        } = dB.main, NB = nB.lineAt(IB), uB = {
          text: (0, qB.k)(QB.state).length > 0 ? nB.toString() : null,
          at: performance.now(),
          focused: QB.hasFocus,
          placed: OB(QB.state)
        };
        zB.current = {
          path: jB,
          line: NB.number,
          column: IB - NB.from,
          Cs: uB
        }
      })), BB => {
        var nB;
        const dB = zB.current;
        !1 === (null === dB || void 0 === dB || null === (nB = dB.Cs) || void 0 === nB ? void 0 : nB.focused) && dB.path === jB || BB.focus(), QB(BB)
      }
    }
    var zj = zB(4474),
      Qj = zB(1240);

    function nj(BB, jB) {
      const {
        t: zB
      } = (0, Qj.D)();
      (0, MB.f)("CodeEditorInsertText", (QB => {
        let {
          text: nB,
          focus: dB
        } = QB;
        const IB = BB.current,
          NB = null !== IB && void 0 !== IB && IB.dom.isConnected ? function(BB, jB) {
            if (!OB(BB)) return null;
            const {
              from: zB,
              to: QB
            } = BB.selection.main, nB = zB + jB.length;
            return {
              changes: {
                from: zB,
                to: QB,
                insert: jB
              },
              selection: {
                anchor: nB
              },
              effects: [oB.k.scrollIntoView(nB, {
                y: "center"
              }), CB.of({
                from: zB,
                to: nB
              })],
              userEvent: "input"
            }
          }(IB.state, nB) : null;
        null !== IB && null !== NB ? (IB.dispatch(NB), dB && IB.focus(), setTimeout((() => {
          IB.dom.isConnected && IB.dispatch({
            effects: CB.of(null)
          })
        }), 1500)) : (0, zj.b)(nB).then((() => {
          jB({
            message: zB("codeEditorWorld:pickCopied", {
              coords: nB
            }),
            type: "success"
          })
        }), (BB => {
          console.error("Pick could not copy the coordinates", BB), jB({
            message: zB("codeEditorWorld:pickPlaceCursor", {
              coords: nB
            }),
            type: "warning"
          })
        }))
      }))
    }
    var dj = zB(41449);
    const Ij = "#e45649",
      Nj = "#383a42",
      uj = "#696c77",
      Uj = "#986801",
      aj = "#e5e5e6",
      pj = "#fafafa",
      rj = "#eaeaeb",
      sj = "#526fff",
      Jj = oB.k.theme({
        "&": {
          color: Nj,
          backgroundColor: pj
        },
        ".cm-content": {
          caretColor: sj
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: sj
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Nj
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
          backgroundColor: pj,
          color: uj,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: aj
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: rj
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: rj,
          borderBottomColor: rj
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: aj,
            color: Nj
          }
        }
      }, {
        dark: !1
      }),
      mj = ZB.e.define([{
        tag: dj.i.keyword,
        color: "#a626a4"
      }, {
        tag: [dj.i.name, dj.i.deleted, dj.i.character, dj.i.propertyName, dj.i.macroName],
        color: Ij
      }, {
        tag: [dj.i.function(dj.i.variableName), dj.i.labelName],
        color: "#4078f2"
      }, {
        tag: [dj.i.color, dj.i.constant(dj.i.name), dj.i.standard(dj.i.name)],
        color: Uj
      }, {
        tag: [dj.i.definition(dj.i.name), dj.i.separator],
        color: Nj
      }, {
        tag: [dj.i.typeName, dj.i.className, dj.i.number, dj.i.changed, dj.i.annotation, dj.i.modifier, dj.i.self, dj.i.namespace],
        color: "#c18401"
      }, {
        tag: [dj.i.operator, dj.i.operatorKeyword, dj.i.url, dj.i.escape, dj.i.regexp, dj.i.link, dj.i.special(dj.i.string)],
        color: "#0184bc"
      }, {
        tag: [dj.i.meta, dj.i.comment],
        color: uj
      }, {
        tag: dj.i.strong,
        fontWeight: "bold"
      }, {
        tag: dj.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: dj.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: dj.i.link,
        color: uj,
        textDecoration: "underline"
      }, {
        tag: dj.i.heading,
        fontWeight: "bold",
        color: Ij
      }, {
        tag: [dj.i.atom, dj.i.bool, dj.i.special(dj.i.variableName)],
        color: Uj
      }, {
        tag: [dj.i.processingInstruction, dj.i.string, dj.i.inserted],
        color: "#50a14f"
      }, {
        tag: dj.i.invalid,
        color: "#000000"
      }]),
      yj = [Jj, (0, ZB.eb)(mj)];
    var kj = zB(36977),
      Gj = zB(41567);
    const Lj = dB.i.define(),
      gj = dB.l.define({
        create: () => !1,
        update(BB, jB) {
          for (const zB of jB.effects) zB.is(Lj) && (BB = zB.value);
          return BB
        }
      }),
      tj = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Sj(BB, jB) {
      return [gj, dB.m.fromClass(class {
        constructor(BB) {
          this.view = BB, this.onDown = BB => {
            const jB = BB.target instanceof Element && null !== BB.target.closest(".cm-tooltip");
            0 !== BB.button || jB || this.view.state.field(gj) || this.view.dispatch({
              effects: Lj.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(gj) && this.view.dispatch({
              effects: Lj.of(!1)
            })
          }, BB.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), dB.r.compute(["selection", gj], (zB => function(BB, jB, zB) {
        const QB = BB.selection.main;
        return QB.empty || BB.field(gj) || BB.sliceDoc(QB.from, QB.to).trim().length < 2 ? null : {
          pos: QB.from,
          above: !0,
          create: BB => {
            const QB = document.createElement("div");
            QB.className = "CodeSelectionActions", QB.setAttribute("role", "toolbar"), QB.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: nB,
                label: dB
              }
              of tj) {
              if (!zB && "explain" !== nB) continue;
              const IB = document.createElement("button");
              IB.type = "button", IB.textContent = dB, "change" !== nB && (IB.title = Gj.c, IB.dataset.asksAi = "true"), IB.addEventListener("mousedown", (BB => {
                BB.preventDefault()
              })), IB.addEventListener("click", (() => {
                const zB = BB.state.selection.main;
                if (zB.empty) return;
                const QB = {
                  action: nB,
                  path: jB,
                  fromLine: BB.state.doc.lineAt(zB.from).number,
                  toLine: BB.state.doc.lineAt(zB.to > zB.from && BB.state.doc.lineAt(zB.to).from === zB.to ? zB.to - 1 : zB.to).number,
                  text: BB.state.sliceDoc(zB.from, zB.to)
                };
                FB.n.Ly("WorldCodeAiSelection", QB), BB.dispatch({
                  selection: {
                    anchor: zB.to
                  }
                })
              })), QB.appendChild(IB)
            }
            return {
              dom: QB
            }
          }
        }
      }(zB, BB, jB)))]
    }
    var Mj = zB(1148);
    const Ej = new Set(["(", "{", "[", "<"]),
      ij = new Set([")", "}", "]", ">"]),
      qj = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function fj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function zB(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = [];
        for (const nB of BB) {
          let BB;
          BB = "punctuation" === nB.kind ? qj.text : "parameterName" === nB.kind ? qj.parameterName : jB, QB.push({
            str: nB.text,
            style: {
              color: BB,
              opacity: zB ? .5 : void 0
            }
          })
        }
        return QB
      }
      const QB = [];
      if (QB.push(...zB(BB.prefixDisplayParts, qj.text)), BB.parameters.length > 0) {
        QB.push("\n");
        for (let nB = 0; nB < BB.parameters.length; nB++) {
          const dB = BB.parameters[nB];
          QB.push("\t"), QB.push(...zB(dB.displayParts, qj.parameter, null !== jB && nB !== jB)), QB.push("\n")
        }
      }
      return QB.push(...zB(BB.suffixDisplayParts, qj.suffix)), BB.documentation && (QB.push("\n\n"), QB.push(...zB(BB.documentation, qj.docs))), QB
    }
    var oj = function(BB) {
      return BB[BB.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", BB[BB.DuplicateIdentifier = 2300] = "DuplicateIdentifier", BB
    }(oj || {});
    const Hj = new Set([oj.DuplicateIdentifier]),
      Dj = new Set([oj.VariableDefinedElsewhere]),
      Fj = new Set([]),
      Yj = "/index.js";

    function Vj(BB) {
      return "/" + BB
    }

    function hj(BB, jB, zB) {
      BB.getSourceFile(jB) && BB.deleteFile(jB), BB.createFile(jB, zB)
    }

    function Xj(BB) {
      return !!BB && ((0, tB.p)(BB) || (0, tB.l)(BB))
    }

    function Zj(BB, jB, zB) {
      return () => {
        let QB = [...jB.languageService.getSemanticDiagnostics(zB), ...jB.languageService.getSyntacticDiagnostics(zB)];
        return QB = QB.filter((BB => !(0, EB.I)(BB.start) && !(0, EB.I)(BB.length) && !Hj.has(BB.code))), BB || (QB = QB.filter((BB => !Dj.has(BB.code)))), QB.map((BB => ({
          from: BB.start,
          to: BB.start + BB.length,
          message: "string" === typeof BB.messageText ? BB.messageText : BB.messageText.messageText,
          severity: Fj.has(BB.code) ? "warning" : "error"
        })))
      }
    }

    function Aj(BB, jB) {
      return zB => {
        var QB, nB;
        const dB = BB.languageService.getCompletionsAtPosition(jB, zB.pos, {});
        if (!dB) return {
          from: zB.pos,
          options: []
        };
        let IB = null !== (QB = null === (nB = dB.optionalReplacementSpan) || void 0 === nB ? void 0 : nB.start) && void 0 !== QB ? QB : zB.pos;
        if (!dB.optionalReplacementSpan) {
          const BB = zB.state.doc.sliceString(0, zB.pos);
          for (; IB > 0 && /[\w$]/.test(BB[IB - 1]);) IB--
        }
        return dB.entries = dB.entries.filter((BB => BB.kind !== mB().ScriptElementKind.warning)), {
          from: IB,
          options: dB.entries.map((QB => {
            var nB, dB, NB, uB;
            const UB = BB.languageService.getCompletionEntryDetails(jB, zB.pos, QB.name, {}, QB.source, {}, QB.data),
              aB = null !== (nB = null === (dB = QB.replacementSpan) || void 0 === dB ? void 0 : dB.start) && void 0 !== nB ? nB : IB,
              pB = QB.replacementSpan ? QB.replacementSpan.start + QB.replacementSpan.length : zB.pos,
              rB = null !== (NB = QB.insertText) && void 0 !== NB ? NB : QB.name;
            return {
              label: QB.name,
              detail: null === UB || void 0 === UB ? void 0 : UB.displayParts.map((BB => BB.text)).join(""),
              info: null === UB || void 0 === UB || null === (uB = UB.documentation) || void 0 === uB ? void 0 : uB.map((BB => BB.text)).join(""),
              apply: BB => {
                BB.dispatch({
                  changes: {
                    from: aB,
                    to: pB,
                    insert: rB
                  },
                  selection: {
                    anchor: aB + rB.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Tj(BB) {
      return jB => {
        const zB = document.createElement("div");
        zB.className = "CodeEditorTooltip";
        let QB = !1;
        return queueMicrotask((() => {
          QB || (NB.render((0, Mj.jsx)(rB.e, {
            text: BB
          }), zB), jB.requestMeasure())
        })), {
          dom: zB,
          destroy() {
            QB = !0, queueMicrotask((() => {
              NB.unmountComponentAtNode(zB)
            }))
          }
        }
      }
    }

    function Pj(BB, jB, zB) {
      return QB => {
        var nB;
        if (!jB) return [];
        const dB = null === (nB = QB.selection.gy[0]) || void 0 === nB ? void 0 : nB.head;
        if (void 0 === dB) return [];
        const IB = BB.languageService.getSignatureHelpItems(zB, dB, {});
        if (!IB || !IB.items.length) return [];
        const NB = IB.applicableSpan.start - IB.items[0].prefixDisplayParts.map((BB => BB.text)).join("").length,
          uB = IB.applicableSpan.start,
          UB = QB.doc.lineAt(dB),
          aB = UB.from,
          pB = Math.min(UB.to, dB);
        let rB, sB;
        return NB < aB ? (rB = aB, sB = pB) : (rB = NB, sB = uB), [{
          pos: rB,
          end: sB,
          above: !1,
          create: Tj(fj(IB.items[0], IB.argumentIndex))
        }]
      }
    }

    function Wj(BB, jB) {
      return (zB, QB, nB) => {
        const dB = BB.languageService.getQuickInfoAtPosition(jB, QB);
        if (!dB) return [];
        const IB = dB.textSpan.start,
          NB = dB.textSpan.start + dB.textSpan.length;
        if (QB < IB || QB >= NB) return [];
        if (dB.kind === mB().ScriptElementKind.memberFunctionElement || dB.kind === mB().ScriptElementKind.variableElement && "declare" === dB.kindModifiers) {
          const BB = dB.displayParts.findIndex((BB => "space" === BB.kind)); - 1 !== BB && (dB.displayParts = dB.displayParts.slice(BB));
          const jB = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            zB = dB.displayParts.findIndex((BB => "punctuation" === BB.kind && "(" === BB.text)); - 1 !== zB && (jB.prefixDisplayParts = dB.displayParts.slice(0, zB + 1), dB.displayParts = dB.displayParts.slice(zB + 1));
          const QB = dB.displayParts.findLastIndex((BB => "punctuation" === BB.kind && ")" === BB.text)); - 1 !== QB && (jB.suffixDisplayParts = dB.displayParts.slice(QB), dB.displayParts = dB.displayParts.slice(0, QB));
          let nB = 0,
            uB = [];
          for (const IB of dB.displayParts)
            if (Ej.has(IB.text) ? nB++ : ij.has(IB.text) && nB--, "lineBreak" !== IB.kind) {
              if ("space" === IB.kind) {
                if (0 === uB.length) continue;
                uB.push({
                  kind: "space",
                  text: " "
                })
              } else uB.push(IB);
              0 === nB && "," === IB.text && (jB.parameters.push({
                displayParts: uB
              }), uB = [])
            } return uB.length > 0 && jB.parameters.push({
            displayParts: uB
          }), jB.documentation = dB.documentation, [{
            pos: IB,
            end: NB,
            above: !0,
            create: Tj(fj(jB))
          }]
        }
        const uB = [];
        for (const BB of dB.displayParts) uB.push({
          str: BB.text,
          style: {
            color: qj.text
          }
        });
        if (dB.documentation) {
          uB.push("\n\n");
          for (const BB of dB.documentation) uB.push({
            str: BB.text,
            style: {
              color: qj.docs
            }
          })
        }
        return [{
          pos: IB,
          end: NB,
          above: !0,
          create: Tj(uB)
        }]
      }
    }
    const ej = {
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
      semicolons: mB().SemicolonPreference.Insert
    };
    const lj = dB.i.define(),
      wj = {
        lineNumbers: !0,
        tabSize: 4
      };

    function xj(BB) {
      let {
        isLobbyCode: jB,
        code: zB,
        onChange: NB,
        canEditCode: rB,
        setTemporaryMessage: JB,
        close: EB,
        showTooltips: wB,
        lightMode: xB,
        collabState: CB,
        onRemoteDocChange: cB,
        files: bB,
        activePath: vB,
        pluginName: OB,
        pluginFile: Bj,
        pluginSource: zj,
        setActiveDocReplacer: Qj,
        showAiHints: dj,
        canAiChangeCode: Ij = rB
      } = BB;
      const [Nj, uj] = (0, IB.useState)(null), Uj = null === CB || void 0 === CB ? void 0 : CB.version, aj = null === CB || void 0 === CB ? void 0 : CB.clientID, pj = (0, IB.useRef)({
        isLobbyCode: jB,
        files: bB,
        code: zB,
        activePath: vB
      }), rj = (0, IB.useRef)(cB);
      rj.current = cB;
      const sj = (0, IB.useRef)(null),
        Jj = (0, IB.useRef)(CB);
      Jj.current = CB;
      const mj = (0, IB.useRef)(null),
        Gj = (0, IB.useRef)(null),
        Lj = (0, IB.useRef)(null),
        gj = (0, IB.useRef)(EB);
      gj.current = EB;
      const tj = (0, IB.useRef)(zB);
      tj.current = zB;
      const Ej = (0, IB.useRef)(zj);
      Ej.current = zj;
      const ij = function(BB, jB, zB, QB) {
        return zB ? `/plugin-preview/${zB}/${null!==QB&&void 0!==QB?QB:"index.ts"}` : BB ? Vj(null !== jB && void 0 !== jB ? jB : gB.j) : Yj
      }(jB, vB, OB, Bj);
      (0, IB.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: BB,
            files: jB,
            code: zB,
            activePath: QB
          } = pj.current, nB = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: mB().ModuleKind.ESNext,
            moduleResolution: mB().ModuleResolutionKind.Bundler,
            target: mB().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(LB.e).map((BB => [BB.specifier, [BB.typesVfsPath]])))
            }
          }, dB = new Map, IB = [];
          if (BB) {
            const BB = null !== jB && void 0 !== jB ? jB : {
              [gB.j]: zB || "\n"
            };
            for (const [jB, zB] of Object.entries(BB)) {
              const BB = Vj(jB);
              dB.set(BB, zB || "\n"), IB.push(BB)
            }
            const nB = Vj(null !== QB && void 0 !== QB ? QB : gB.j);
            dB.has(nB) ? dB.set(nB, zB || "\n") : (dB.set(nB, zB || "\n"), IB.push(nB)), dB.set("/node_modules/@bloxd/index.d.ts", aB.default), IB.push("/node_modules/@bloxd/index.d.ts");
            for (const jB of Object.values(LB.e)) {
              dB.set(jB.typesVfsPath, jB.types), IB.push(jB.typesVfsPath);
              for (const [BB, zB] of Object.entries(jB.files)) {
                const QB = `/plugin-preview/${jB.name}/${BB}`;
                dB.set(QB, zB || "\n"), IB.push(QB)
              }
            }
          } else dB.set(Yj, zB || "\n"), IB.push(Yj);
          dB.set("/globals.d.ts", BB ? UB.e : uB.e), dB.set("/lib.d.ts", pB.c), IB.push("/globals.d.ts", "/lib.d.ts");
          const NB = sB.c(dB),
            rB = sB.g(NB, IB, mB(), nB);
          uj({
            ty: rB,
            fsMap: dB
          })
        }()
      }), []), (0, IB.useEffect)((() => {
        var BB, QB;
        if (!Nj || !jB) return;
        const {
          ty: nB,
          fsMap: dB
        } = Nj;
        if (function(BB, jB, zB) {
            const QB = new Set;
            for (const [nB, dB] of Object.entries(zB)) {
              const zB = Vj(nB);
              QB.add(zB);
              const IB = dB || "\n";
              jB.get(zB) !== IB && (jB.set(zB, IB), hj(BB, zB, IB))
            }
            for (const nB of [...jB.keys()]) "/globals.d.ts" === nB || "/lib.d.ts" === nB || nB.startsWith("/node_modules/") || nB.startsWith("/plugin-preview/") || QB.has(nB) || (jB.delete(nB), BB.getSourceFile(nB) && BB.deleteFile(nB))
          }(nB, dB, null !== bB && void 0 !== bB ? bB : {
            [gB.j]: zB || "\n"
          }), OB) return void hj(nB, ij, zj || "\n");
        const IB = null !== (BB = null === (QB = sj.current) || void 0 === QB ? void 0 : QB.state.doc.toString()) && void 0 !== BB ? BB : zB;
        hj(nB, ij, IB || "\n")
      }), [bB, vB, Nj, OB, zj, ij, zB, jB]), (0, IB.useEffect)((() => {
        if (!Nj) return;
        const {
          ty: BB
        } = Nj;
        hj(BB, ij, (OB ? zj : zB) || "\n")
      }), [zB, OB, zj, ij, Nj]), (0, IB.useEffect)((() => () => {
        Gj.current && (Gj.current(), Gj.current = null)
      }), []), (0, IB.useEffect)((() => (Qj(((BB, jB) => {
        if (OB) return !1;
        const zB = sj.current,
          QB = Jj.current,
          nB = QB ? (0, tB.u)(QB.docKey) : null;
        if (!zB || !QB || mj.current !== QB.clientID || BB !== nB) return !1;
        const dB = zB.state.doc.toString();
        return dB !== jB && zB.dispatch({
          changes: {
            from: 0,
            to: dB.length,
            insert: jB
          }
        }), !0
      })), () => {
        sj.current = null, mj.current = null, Qj(null)
      })), [Qj, OB]);
      const qj = jB ? OB ? null : null !== vB && void 0 !== vB ? vB : gB.j : kj.d,
        fj = jj(sj, qj);
      nj(sj, JB), (0, MB.f)("FormatCode", (() => {
        if (!Nj || !sj.current || OB) return;
        const {
          ty: BB,
          fsMap: zB
        } = Nj, QB = BB.getSourceFile(ij).getFullText();
        let nB = 0;
        if (jB && bB)
          for (const [jB, NB] of Object.entries(bB)) jB !== (null !== vB && void 0 !== vB ? vB : gB.j) && (nB += NB.length);
        const dB = function(BB, jB, zB, QB, nB) {
          const dB = BB.languageService.getFormattingEditsForDocument(QB, ej);
          if (!dB.length) return iB.d.error("Code is already formatted.");
          dB.sort(((BB, jB) => jB.span.start - BB.span.start));
          let IB = BB.getSourceFile(QB).getFullText();
          for (const NB of dB) IB = IB.slice(0, NB.span.start) + NB.qu + IB.slice(NB.span.start + NB.span.length);
          return IB !== (zB ? (0, SB.m)(IB, nB) : (0, SB.i)(IB)) ? iB.d.error("Formatting the code will go beyond the character limit.") : iB.d.value(IB)
        }(BB, 0, jB, ij, nB);
        if (dB.isError()) return void JB({
          message: dB.asError().message,
          type: "warning"
        });
        const IB = dB.getValue();
        IB && (sj.current.dispatch({
          changes: {
            from: 0,
            to: QB.length,
            insert: IB
          },
          selection: {
            anchor: IB.length
          }
        }), hj(BB, ij, IB), NB(IB))
      }));
      const oj = (0, IB.useMemo)((() => {
        if (!Nj) return [];
        const {
          ty: BB,
          fsMap: zB
        } = Nj;
        ! function(BB, jB, zB, QB) {
          if (BB.getSourceFile(zB)) return;
          const nB = QB || "\n";
          jB.set(zB, nB), BB.createFile(zB, nB)
        }(BB, zB, ij, (OB ? Ej.current : tj.current) || "\n");
        const IB = jB && Xj(OB ? null !== Bj && void 0 !== Bj ? Bj : "index.ts" : vB),
          NB = [(0, nB.d)({
            jsx: !1,
            typescript: IB
          }), dB.f.highest(dB.b.domEventHandlers({
            keydown: BB => "Escape" === BB.key ? (gj.current(), BB.stopPropagation(), !0) : (BB.stopPropagation(), !1)
          })), (0, QB.d)({
            override: [Aj(BB, ij)]
          }), oB.o.fromClass(class {
            constructor(BB) {
              this.view = BB, this.timeout = null, this.scheduleParse()
            }
            update(BB) {
              (BB.docChanged || BB.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const BB = this.view.viewport.to;
                (0, ZB.ib)(this.view.state, BB) || (0, ZB.O)(this.view, BB, AB) || this.scheduleParse()
              }), TB))
            }
          }), ...RB, dB.b.lineWrapping, dB.l.define({
            create: Pj(BB, wB, ij),
            update(jB, zB) {
              const QB = zB.effects.some((BB => BB.is(lj)));
              return zB.docChanged || zB.selection || QB ? (hj(BB, ij, zB.state.doc.toString() || " "), Pj(BB, wB, ij)(zB.state)) : jB
            },
            provide: BB => dB.r.computeN([BB], (jB => jB.field(BB)))
          }), (0, dB.o)(Wj(BB, ij)), (0, kB.g)(Zj(jB, BB, ij)), dB.m.fromClass(class {
            constructor(BB) {
              this.view = BB, this.searchPanel = null
            }
            update(BB) {
              const jB = BB.view.dom.querySelector(".cm-search");
              if (jB !== this.searchPanel) {
                if (this.searchPanel = jB, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (BB => {
                  "Escape" === BB.key && (0, yB.c)(this.view), BB.stopPropagation()
                }))
              }
            }
          })];
        dj && !OB && NB.push(Sj(jB ? null !== vB && void 0 !== vB ? vB : gB.j : kj.d, Ij));
        const uB = Jj.current;
        if (uB && !OB) {
          NB.push(... function(BB, jB, zB, QB, nB) {
            let dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const IB = (0, tB.u)(zB),
              NB = oB.o.fromClass(class {
                constructor(BB) {
                  this.view = BB, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = FB.n.subscribe("codeCollab", (BB => {
                    BB.docKey === IB && BB.type === tB.e.Updates && (BB.updates ? this.applyUpdates(BB.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(BB) {
                  const jB = JSON.parse(BB).map((BB => ({
                    clientID: BB.clientID,
                    changes: fB.ChangeSet.fromJSON(BB.changes)
                  })));
                  jB.length > 0 && (this.view.dispatch((0, qB.h)(this.view.state, jB)), nB && nB(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(BB) {
                  dB && (BB.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const BB = (0, qB.k)(this.view.state);
                  if (this.pushing || !BB.length) return;
                  const jB = Date.now() - this.lastPushTime;
                  if (jB < XB) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), XB - jB)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), VB);
                  const zB = (0, qB.e)(this.view.state),
                    nB = BB.map((BB => ({
                      clientID: BB.clientID,
                      changes: BB.changes.toJSON()
                    }))),
                    dB = JSON.stringify(nB);
                  dB.length <= tB.g ? HB.gameBridge.send("sendCodeCollab", {
                    Nd: tB.b.Push,
                    ud: IB,
                    Ud: zB,
                    sd: dB
                  }) : (0, YB.postJsonWithMetricsCookiesAndJsonResponse)(`${QB.gsUrl}/code/collab-push`, DB.o["collab-push"].toBuffer({
                    gameNameWithVariation: QB.gameNameWithVariation,
                    lobbyName: QB.lobbyName,
                    docKey: IB,
                    version: zB,
                    updates: dB
                  }), {
                    retries: 0
                  }).catch((BB => {
                    console.error("[CodeCollab] HTTP push failed", BB)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const BB = (0, qB.e)(this.view.state);
                  (0, YB.postJsonWithMetricsCookiesAndJsonResponse)(`${QB.gsUrl}/code/collab-pull`, DB.o["collab-pull"].toBuffer({
                    gameNameWithVariation: QB.gameNameWithVariation,
                    lobbyName: QB.lobbyName,
                    docKey: IB,
                    fromVersion: BB
                  }), {
                    retries: 1
                  }).then((BB => {
                    this.destroyed || (BB.fullDoc ? FB.n.Ly("codeCollabRejoin", {
                      docKey: IB,
                      doc: BB.fullDoc,
                      version: BB.version
                    }) : this.applyUpdates(BB.updates))
                  })).catch((BB => {
                    console.error("[CodeCollab] Pull failed", BB)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const BB = Date.now();
                  if (BB - this.lastCursorSent < hB) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), hB)));
                  this.lastCursorSent = BB;
                  const jB = this.view.state.selection.main;
                  HB.gameBridge.send("sendCodeCollab", {
                    Nd: tB.b.Cursor,
                    ud: IB,
                    Gd: jB.anchor,
                    Ld: jB.head
                  })
                }
                destroy() {
                  this.destroyed = !0, FB.n.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, qB.d)({
              startVersion: BB,
              clientID: jB
            }), NB]
          }(Uj, aj, uB.docKey, uB.httpConfig, (BB => {
            var jB;
            null === (jB = rj.current) || void 0 === jB || jB.call(rj, BB)
          }), rB));
          const BB = function(BB, jB) {
            const zB = (0, tB.u)(BB);
            return {
              extensions: [KB],
              connect(BB) {
                if (jB) {
                  const zB = jB.map((BB => WB.of({
                    playerId: BB.playerId,
                    playerName: BB.playerName,
                    colour: BB.colour,
                    anchor: BB.anchor,
                    head: BB.head,
                    lastMoved: Date.now()
                  })));
                  zB.length > 0 && BB.dispatch({
                    effects: zB
                  })
                }
                const QB = FB.n.subscribe("codeCollab", (jB => {
                    if (jB.docKey === zB)
                      if (jB.type === tB.e.RemoteCursor) BB.dispatch({
                        effects: WB.of({
                          playerId: jB.playerId,
                          playerName: jB.playerName,
                          colour: jB.colour,
                          anchor: jB.anchor,
                          head: jB.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (jB.type === tB.e.Presence) {
                      const zB = JSON.parse(jB.peers),
                        QB = new Set(zB.map((BB => BB.playerId))),
                        nB = BB.state.field(KB),
                        dB = [];
                      for (const [BB] of nB.cursors) QB.has(BB) || dB.push(eB.of(BB));
                      dB.length > 0 && BB.dispatch({
                        effects: dB
                      })
                    }
                  })),
                  nB = setInterval((() => {
                    BB.dom.isConnected ? BB.dispatch({
                      effects: lB.of(Date.now())
                    }) : clearInterval(nB)
                  }), PB);
                return () => {
                  FB.n.unsubscribe(QB), clearInterval(nB)
                }
              }
            }
          }(uB.docKey, uB.existingCursors);
          NB.push(...BB.extensions), Lj.current = BB.connect
        } else Lj.current = null;
        return NB
      }), [jB, Nj, wB, Uj, aj, ij, vB, OB, Bj, rB, dj, Ij]);
      if (!Nj || !CB && !OB) return (0, Mj.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Mj.jsx)(GB.e, {})
      });
      const Hj = OB ? `plugin-${OB}-${null!==Bj&&void 0!==Bj?Bj:"index.ts"}` : CB ? `collab-${CB.clientID}` : `local-${jB}`;
      return (0, Mj.jsx)(dB.n, {
        value: OB ? null !== zj && void 0 !== zj ? zj : "" : zB,
        onChange: NB,
        extensions: oj,
        className: "CodeEditorContent",
        theme: xB ? yj : "dark",
        editable: rB && !OB,
        basicSetup: wj,
        onCreateEditor: BB => {
          var jB;
          sj.current = BB, mj.current = null !== (jB = null === CB || void 0 === CB ? void 0 : CB.clientID) && void 0 !== jB ? jB : null, fj(BB), Gj.current && Gj.current(), Lj.current && (Gj.current = Lj.current(BB))
        }
      }, Hj)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);