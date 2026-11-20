export const id = 284;
export const ids = [284];
export const modules = {
  41028: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => sE
    });
    var Yq = gq(41037),
      lq = gq(41082),
      Oq = gq(41091),
      mq = gq(57),
      xq = gq(71),
      Aq = gq(41108),
      cq = gq(41113),
      uq = gq(4583),
      Bq = gq(41120),
      Wq = gq(1876),
      Nq = gq(41125),
      aq = gq(41144),
      Vq = gq.n(aq),
      dq = gq(41100),
      jq = gq(41106),
      Hq = gq(1326),
      oq = gq(36902),
      Pq = gq(1226),
      Qq = gq(36912),
      yq = gq(36781),
      tq = gq(1416),
      rq = gq(598),
      vq = gq(1234),
      hq = gq(41201),
      nq = gq(41044),
      bq = gq(41053),
      iq = gq(1904),
      Zq = gq(3595),
      fq = gq(31),
      Mq = gq(1109);
    const Tq = 1e4,
      zq = 250,
      Sq = 250;
    var pq = gq(41070);
    const Gq = 50,
      Lq = 100;
    const Jq = 2e3,
      kq = nq.J.define(),
      Rq = nq.J.define(),
      Uq = nq.J.define();
    class Fq extends bq.m {
      constructor(qq, Eq, gq) {
        super(), this.colour = qq, this.playerName = Eq, this.showName = gq
      }
      toDOM() {
        const qq = document.createElement("span");
        qq.className = "cm-remote-cursor-wrapper", qq.style.borderLeftColor = this.colour;
        const Eq = document.createElement("span");
        if (Eq.className = "cm-remote-cursor", Eq.style.borderLeftColor = this.colour, qq.appendChild(Eq), this.showName) {
          const Eq = document.createElement("span");
          Eq.className = "cm-remote-cursor-name", Eq.style.backgroundColor = this.colour, Eq.textContent = this.playerName, qq.appendChild(Eq)
        }
        return qq
      }
      eq(qq) {
        return this.colour === qq.colour && this.playerName === qq.playerName && this.showName === qq.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function sq(qq, Eq) {
      const gq = [],
        Yq = [];
      for (const [, mq] of qq) {
        const qq = Eq - mq.lastMoved < Jq;
        if (gq.push({
            pos: mq.head,
            decoration: bq.c.widget({
              widget: new Fq(mq.colour, mq.playerName, qq),
              side: 1
            })
          }), mq.anchor !== mq.head) {
          const qq = Math.min(mq.anchor, mq.head),
            Eq = Math.max(mq.anchor, mq.head);
          Yq.push({
            from: qq,
            to: Eq,
            decoration: bq.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${mq.colour}33`
              }
            })
          })
        }
      }
      const lq = new nq.E,
        Oq = [];
      for (const mq of gq) Oq.push({
        bias: 1,
        deco: mq.decoration,
        from: mq.pos,
        to: mq.pos
      });
      for (const mq of Yq) Oq.push({
        bias: 0,
        deco: mq.decoration,
        from: mq.from,
        to: mq.to
      });
      Oq.sort(((qq, Eq) => qq.from - Eq.from || qq.deco.startSide - Eq.deco.startSide || qq.bias - Eq.bias));
      for (const mq of Oq) lq.add(mq.from, mq.to, mq.deco);
      return lq.finish()
    }
    const Xq = nq.L.define({
      create: () => ({
        cursors: new Map,
        YO: bq.c.none
      }),
      update(qq, Eq) {
        let gq = qq.cursors,
          Yq = !1;
        if (Eq.docChanged) {
          const qq = new Map;
          for (const [Yq, lq] of gq) qq.set(Yq, {
            ...lq,
            anchor: Eq.changes.mapPos(lq.anchor, 1),
            head: Eq.changes.mapPos(lq.head, 1)
          });
          gq = qq, Yq = !0
        }
        for (const lq of Eq.effects)
          if (lq.is(kq)) {
            if (!Number.isInteger(lq.value.anchor) || !Number.isInteger(lq.value.head)) {
              console.warn(`Code Editor: ignored player ${lq.value.playerId}'s cursor at ${lq.value.anchor}-${lq.value.head}`);
              continue
            }
            const Oq = Eq.state.doc.length,
              mq = {
                ...lq.value,
                anchor: Math.min(lq.value.anchor, Oq),
                head: Math.min(lq.value.head, Oq)
              };
            gq === qq.cursors && (gq = new Map(gq)), gq.set(mq.playerId, mq), Yq = !0
          } else lq.is(Rq) ? gq.has(lq.value) && (gq === qq.cursors && (gq = new Map(gq)), gq.delete(lq.value), Yq = !0) : lq.is(Uq) && (Yq = !0);
        return Yq ? {
          cursors: gq,
          YO: sq(gq, Date.now())
        } : qq
      },
      provide: qq => bq.g.YO.from(qq, (qq => qq.YO))
    });
    const wq = nq.J.define(),
      Kq = bq.c.mark({
        class: "CodeInsertFlash"
      }),
      Cq = nq.L.define({
        create: () => bq.c.none,
        update(qq, Eq) {
          let gq = qq.map(Eq.changes);
          for (const Yq of Eq.effects) Yq.is(wq) && (gq = Yq.value ? bq.c.set(Kq.range(Yq.value.from, Yq.value.to)) : bq.c.none);
          return gq
        },
        provide: qq => bq.g.YO.from(qq)
      }),
      Iq = nq.L.define({
        create: () => !1,
        update: (qq, Eq) => qq || void 0 !== Eq.annotation(nq.Q.userEvent) && !Eq.annotation(nq.Q.remote)
      }),
      eq = [Cq, Iq];

    function Dq(qq) {
      return qq.field(Iq)
    }
    const qE = 3e4;

    function EE(qq, Eq) {
      const gq = (0, mq.useRef)(null);
      (0, mq.useEffect)((() => {
        var qq;
        (null === (qq = gq.current) || void 0 === qq ? void 0 : qq.path) !== Eq && (gq.current = null)
      }), [Eq]);
      const Yq = qq => {
        var Yq;
        const lq = gq.current;
        if (null === qq || void 0 === qq || !qq.dom.isConnected || !lq || lq.path !== Eq) return;
        gq.current = null;
        const {
          jN: mq
        } = lq;
        if (mq && null !== mq.text && performance.now() - mq.at < qE) {
          const Eq = function(qq, Eq) {
            if (qq === Eq) return null;
            const gq = Math.min(qq.length, Eq.length);
            let Yq = 0;
            for (; Yq < gq && qq[Yq] === Eq[Yq];) Yq++;
            let lq = 0;
            for (; lq < gq - Yq && qq[qq.length - 1 - lq] === Eq[Eq.length - 1 - lq];) lq++;
            return {
              from: Yq,
              to: qq.length - lq,
              insert: Eq.slice(Yq, Eq.length - lq)
            }
          }(qq.state.doc.toString(), mq.text);
          null !== Eq && qq.dispatch({
            changes: Eq,
            userEvent: mq.placed ? "input" : void 0
          })
        }
        const {
          doc: xq
        } = qq.state, Aq = xq.line(Math.min(Math.max(lq.line, 1), xq.lines)), cq = Aq.from + Math.min(null !== (Yq = lq.column) && void 0 !== Yq ? Yq : 0, Aq.length);
        qq.dispatch({
          selection: {
            anchor: cq
          },
          effects: Oq.d.scrollIntoView(cq, {
            y: "center"
          }),
          userEvent: null !== mq && void 0 !== mq && mq.placed ? "select" : void 0
        }), !1 !== (null === mq || void 0 === mq ? void 0 : mq.focused) && qq.focus()
      };
      return (0, tq.f)("CodeEditorGoToLine", (Eq => {
        gq.current = Eq, Yq(qq.current)
      })), (0, tq.f)("CodeEditorKeepEdits", (() => {
        const Yq = qq.current;
        if (null === Yq || !Yq.dom.isConnected || null === Eq) return;
        const {
          doc: lq,
          selection: Oq
        } = Yq.state, {
          head: mq
        } = Oq.main, xq = lq.lineAt(mq), Aq = {
          text: (0, hq.l)(Yq.state).length > 0 ? lq.toString() : null,
          at: performance.now(),
          focused: Yq.hasFocus,
          placed: Dq(Yq.state)
        };
        gq.current = {
          path: Eq,
          line: xq.number,
          column: mq - xq.from,
          jN: Aq
        }
      })), qq => {
        var lq;
        const Oq = gq.current;
        !1 === (null === Oq || void 0 === Oq || null === (lq = Oq.jN) || void 0 === lq ? void 0 : lq.focused) && Oq.path === Eq || qq.focus(), Yq(qq)
      }
    }
    var gE = gq(4191),
      YE = gq(1183);

    function lE(qq, Eq) {
      const {
        t: gq
      } = (0, YE.v)();
      (0, tq.f)("CodeEditorInsertText", (Yq => {
        let {
          text: lq,
          focus: Oq
        } = Yq;
        const mq = qq.current,
          xq = null !== mq && void 0 !== mq && mq.dom.isConnected ? function(qq, Eq) {
            if (!Dq(qq)) return null;
            const {
              from: gq,
              to: Yq
            } = qq.selection.main, lq = gq + Eq.length;
            return {
              changes: {
                from: gq,
                to: Yq,
                insert: Eq
              },
              selection: {
                anchor: lq
              },
              effects: [bq.g.scrollIntoView(lq, {
                y: "center"
              }), wq.of({
                from: gq,
                to: lq
              })],
              userEvent: "input"
            }
          }(mq.state, lq) : null;
        null !== mq && null !== xq ? (mq.dispatch(xq), Oq && mq.focus(), setTimeout((() => {
          mq.dom.isConnected && mq.dispatch({
            effects: wq.of(null)
          })
        }), 1500)) : (0, gE.d)(lq).then((() => {
          Eq({
            message: gq("codeEditorWorld:pickCopied", {
              coords: lq
            }),
            type: "success"
          })
        }), (qq => {
          console.error("Pick could not copy the coordinates", qq), Eq({
            message: gq("codeEditorWorld:pickPlaceCursor", {
              coords: lq
            }),
            type: "warning"
          })
        }))
      }))
    }
    var OE = gq(41075);
    const mE = "#e45649",
      xE = "#383a42",
      AE = "#696c77",
      cE = "#986801",
      uE = "#e5e5e6",
      BE = "#fafafa",
      WE = "#eaeaeb",
      NE = "#526fff",
      aE = bq.g.theme({
        "&": {
          color: xE,
          backgroundColor: BE
        },
        ".cm-content": {
          caretColor: NE
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: NE
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: xE
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
          backgroundColor: BE,
          color: AE,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: uE
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: WE
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: WE,
          borderBottomColor: WE
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: uE,
            color: xE
          }
        }
      }, {
        dark: !1
      }),
      VE = pq.c.define([{
        tag: OE.i.keyword,
        color: "#a626a4"
      }, {
        tag: [OE.i.name, OE.i.deleted, OE.i.character, OE.i.propertyName, OE.i.macroName],
        color: mE
      }, {
        tag: [OE.i.function(OE.i.variableName), OE.i.labelName],
        color: "#4078f2"
      }, {
        tag: [OE.i.color, OE.i.constant(OE.i.name), OE.i.standard(OE.i.name)],
        color: cE
      }, {
        tag: [OE.i.definition(OE.i.name), OE.i.separator],
        color: xE
      }, {
        tag: [OE.i.typeName, OE.i.className, OE.i.number, OE.i.changed, OE.i.annotation, OE.i.modifier, OE.i.self, OE.i.namespace],
        color: "#c18401"
      }, {
        tag: [OE.i.operator, OE.i.operatorKeyword, OE.i.url, OE.i.escape, OE.i.regexp, OE.i.link, OE.i.special(OE.i.string)],
        color: "#0184bc"
      }, {
        tag: [OE.i.meta, OE.i.comment],
        color: AE
      }, {
        tag: OE.i.strong,
        fontWeight: "bold"
      }, {
        tag: OE.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: OE.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: OE.i.link,
        color: AE,
        textDecoration: "underline"
      }, {
        tag: OE.i.heading,
        fontWeight: "bold",
        color: mE
      }, {
        tag: [OE.i.atom, OE.i.bool, OE.i.special(OE.i.variableName)],
        color: cE
      }, {
        tag: [OE.i.processingInstruction, OE.i.string, OE.i.inserted],
        color: "#50a14f"
      }, {
        tag: OE.i.invalid,
        color: "#000000"
      }]),
      dE = [aE, (0, pq.cb)(VE)];
    var jE = gq(36962),
      HE = gq(41208);
    const oE = Oq.j.define(),
      PE = Oq.k.define({
        create: () => !1,
        update(qq, Eq) {
          for (const gq of Eq.effects) gq.is(oE) && (qq = gq.value);
          return qq
        }
      }),
      QE = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function yE(qq, Eq) {
      return [PE, Oq.l.fromClass(class {
        constructor(qq) {
          this.view = qq, this.onDown = qq => {
            const Eq = qq.target instanceof Element && null !== qq.target.closest(".cm-tooltip");
            0 !== qq.button || Eq || this.view.state.field(PE) || this.view.dispatch({
              effects: oE.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(PE) && this.view.dispatch({
              effects: oE.of(!1)
            })
          }, qq.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Oq.s.compute(["selection", PE], (gq => function(qq, Eq, gq) {
        const Yq = qq.selection.main;
        return Yq.empty || qq.field(PE) || qq.sliceDoc(Yq.from, Yq.to).trim().length < 2 ? null : {
          pos: Yq.from,
          above: !0,
          create: qq => {
            const Yq = document.createElement("div");
            Yq.className = "CodeSelectionActions", Yq.setAttribute("role", "toolbar"), Yq.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: lq,
                label: Oq
              }
              of QE) {
              if (!gq && "explain" !== lq) continue;
              const mq = document.createElement("button");
              mq.type = "button", mq.textContent = Oq, "change" !== lq && (mq.title = HE.e, mq.dataset.asksAi = "true"), mq.addEventListener("mousedown", (qq => {
                qq.preventDefault()
              })), mq.addEventListener("click", (() => {
                const gq = qq.state.selection.main;
                if (gq.empty) return;
                const Yq = {
                  action: lq,
                  path: Eq,
                  fromLine: qq.state.doc.lineAt(gq.from).number,
                  toLine: qq.state.doc.lineAt(gq.to > gq.from && qq.state.doc.lineAt(gq.to).from === gq.to ? gq.to - 1 : gq.to).number,
                  text: qq.state.sliceDoc(gq.from, gq.to)
                };
                fq.i.TV("WorldCodeAiSelection", Yq), qq.dispatch({
                  selection: {
                    anchor: gq.to
                  }
                })
              })), Yq.appendChild(mq)
            }
            return {
              dom: Yq
            }
          }
        }
      }(gq, qq, Eq)))]
    }
    var tE = gq(1070);
    const rE = new Set(["(", "{", "[", "<"]),
      vE = new Set([")", "}", "]", ">"]),
      hE = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function nE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function gq(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = [];
        for (const lq of qq) {
          let qq;
          qq = "punctuation" === lq.kind ? hE.text : "parameterName" === lq.kind ? hE.parameterName : Eq, Yq.push({
            str: lq.text,
            style: {
              color: qq,
              opacity: gq ? .5 : void 0
            }
          })
        }
        return Yq
      }
      const Yq = [];
      if (Yq.push(...gq(qq.prefixDisplayParts, hE.text)), qq.parameters.length > 0) {
        Yq.push("\n");
        for (let lq = 0; lq < qq.parameters.length; lq++) {
          const Oq = qq.parameters[lq];
          Yq.push("\t"), Yq.push(...gq(Oq.displayParts, hE.parameter, null !== Eq && lq !== Eq)), Yq.push("\n")
        }
      }
      return Yq.push(...gq(qq.suffixDisplayParts, hE.suffix)), qq.documentation && (Yq.push("\n\n"), Yq.push(...gq(qq.documentation, hE.docs))), Yq
    }
    var bE = function(qq) {
      return qq[qq.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", qq[qq.DuplicateIdentifier = 2300] = "DuplicateIdentifier", qq
    }(bE || {});
    const iE = new Set([bE.DuplicateIdentifier]),
      ZE = new Set([bE.VariableDefinedElsewhere]),
      fE = new Set([]),
      ME = "/index.js";

    function TE(qq) {
      return "/" + qq
    }

    function zE(qq, Eq, gq) {
      qq.getSourceFile(Eq) && qq.deleteFile(Eq), qq.createFile(Eq, gq)
    }

    function SE(qq) {
      return !!qq && ((0, Qq.n)(qq) || (0, Qq.l)(qq))
    }

    function pE(qq, Eq, gq) {
      return () => {
        let Yq = [...Eq.languageService.getSemanticDiagnostics(gq), ...Eq.languageService.getSyntacticDiagnostics(gq)];
        return Yq = Yq.filter((qq => !(0, rq.H)(qq.start) && !(0, rq.H)(qq.length) && !iE.has(qq.code))), qq || (Yq = Yq.filter((qq => !ZE.has(qq.code)))), Yq.map((qq => ({
          from: qq.start,
          to: qq.start + qq.length,
          message: "string" === typeof qq.messageText ? qq.messageText : qq.messageText.messageText,
          severity: fE.has(qq.code) ? "warning" : "error"
        })))
      }
    }

    function GE(qq, Eq) {
      return gq => {
        var Yq, lq;
        const Oq = qq.languageService.getCompletionsAtPosition(Eq, gq.pos, {});
        if (!Oq) return {
          from: gq.pos,
          options: []
        };
        let mq = null !== (Yq = null === (lq = Oq.optionalReplacementSpan) || void 0 === lq ? void 0 : lq.start) && void 0 !== Yq ? Yq : gq.pos;
        if (!Oq.optionalReplacementSpan) {
          const qq = gq.state.doc.sliceString(0, gq.pos);
          for (; mq > 0 && /[\w$]/.test(qq[mq - 1]);) mq--
        }
        return Oq.entries = Oq.entries.filter((qq => qq.kind !== Vq().ScriptElementKind.warning)), {
          from: mq,
          options: Oq.entries.map((Yq => {
            var lq, Oq, xq, Aq;
            const cq = qq.languageService.getCompletionEntryDetails(Eq, gq.pos, Yq.name, {}, Yq.source, {}, Yq.data),
              uq = null !== (lq = null === (Oq = Yq.replacementSpan) || void 0 === Oq ? void 0 : Oq.start) && void 0 !== lq ? lq : mq,
              Bq = Yq.replacementSpan ? Yq.replacementSpan.start + Yq.replacementSpan.length : gq.pos,
              Wq = null !== (xq = Yq.insertText) && void 0 !== xq ? xq : Yq.name;
            return {
              label: Yq.name,
              detail: null === cq || void 0 === cq ? void 0 : cq.displayParts.map((qq => qq.text)).join(""),
              info: null === cq || void 0 === cq || null === (Aq = cq.documentation) || void 0 === Aq ? void 0 : Aq.map((qq => qq.text)).join(""),
              apply: qq => {
                qq.dispatch({
                  changes: {
                    from: uq,
                    to: Bq,
                    insert: Wq
                  },
                  selection: {
                    anchor: uq + Wq.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function LE(qq) {
      return Eq => {
        const gq = document.createElement("div");
        gq.className = "CodeEditorTooltip";
        let Yq = !1;
        return queueMicrotask((() => {
          Yq || (xq.render((0, tE.jsx)(Wq.c, {
            text: qq
          }), gq), Eq.requestMeasure())
        })), {
          dom: gq,
          destroy() {
            Yq = !0, queueMicrotask((() => {
              xq.unmountComponentAtNode(gq)
            }))
          }
        }
      }
    }

    function JE(qq, Eq, gq) {
      return Yq => {
        var lq;
        if (!Eq) return [];
        const Oq = null === (lq = Yq.selection.zV[0]) || void 0 === lq ? void 0 : lq.head;
        if (void 0 === Oq) return [];
        const mq = qq.languageService.getSignatureHelpItems(gq, Oq, {});
        if (!mq || !mq.items.length) return [];
        const xq = mq.applicableSpan.start - mq.items[0].prefixDisplayParts.map((qq => qq.text)).join("").length,
          Aq = mq.applicableSpan.start,
          cq = Yq.doc.lineAt(Oq),
          uq = cq.from,
          Bq = Math.min(cq.to, Oq);
        let Wq, Nq;
        return xq < uq ? (Wq = uq, Nq = Bq) : (Wq = xq, Nq = Aq), [{
          pos: Wq,
          end: Nq,
          above: !1,
          create: LE(nE(mq.items[0], mq.argumentIndex))
        }]
      }
    }

    function kE(qq, Eq) {
      return (gq, Yq, lq) => {
        const Oq = qq.languageService.getQuickInfoAtPosition(Eq, Yq);
        if (!Oq) return [];
        const mq = Oq.textSpan.start,
          xq = Oq.textSpan.start + Oq.textSpan.length;
        if (Yq < mq || Yq >= xq) return [];
        if (Oq.kind === Vq().ScriptElementKind.memberFunctionElement || Oq.kind === Vq().ScriptElementKind.variableElement && "declare" === Oq.kindModifiers) {
          const qq = Oq.displayParts.findIndex((qq => "space" === qq.kind)); - 1 !== qq && (Oq.displayParts = Oq.displayParts.slice(qq));
          const Eq = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            gq = Oq.displayParts.findIndex((qq => "punctuation" === qq.kind && "(" === qq.text)); - 1 !== gq && (Eq.prefixDisplayParts = Oq.displayParts.slice(0, gq + 1), Oq.displayParts = Oq.displayParts.slice(gq + 1));
          const Yq = Oq.displayParts.findLastIndex((qq => "punctuation" === qq.kind && ")" === qq.text)); - 1 !== Yq && (Eq.suffixDisplayParts = Oq.displayParts.slice(Yq), Oq.displayParts = Oq.displayParts.slice(0, Yq));
          let lq = 0,
            Aq = [];
          for (const mq of Oq.displayParts)
            if (rE.has(mq.text) ? lq++ : vE.has(mq.text) && lq--, "lineBreak" !== mq.kind) {
              if ("space" === mq.kind) {
                if (0 === Aq.length) continue;
                Aq.push({
                  kind: "space",
                  text: " "
                })
              } else Aq.push(mq);
              0 === lq && "," === mq.text && (Eq.parameters.push({
                displayParts: Aq
              }), Aq = [])
            } return Aq.length > 0 && Eq.parameters.push({
            displayParts: Aq
          }), Eq.documentation = Oq.documentation, [{
            pos: mq,
            end: xq,
            above: !0,
            create: LE(nE(Eq))
          }]
        }
        const Aq = [];
        for (const qq of Oq.displayParts) Aq.push({
          str: qq.text,
          style: {
            color: hE.text
          }
        });
        if (Oq.documentation) {
          Aq.push("\n\n");
          for (const qq of Oq.documentation) Aq.push({
            str: qq.text,
            style: {
              color: hE.docs
            }
          })
        }
        return [{
          pos: mq,
          end: xq,
          above: !0,
          create: LE(Aq)
        }]
      }
    }
    const RE = {
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
      semicolons: Vq().SemicolonPreference.Insert
    };
    const UE = Oq.j.define(),
      FE = {
        lineNumbers: !0,
        tabSize: 4
      };

    function sE(qq) {
      let {
        isLobbyCode: Eq,
        code: gq,
        onChange: xq,
        canEditCode: Wq,
        setTemporaryMessage: aq,
        close: rq,
        showTooltips: Fq,
        lightMode: sq,
        collabState: wq,
        onRemoteDocChange: Kq,
        files: Cq,
        activePath: Iq,
        pluginName: Dq,
        pluginFile: qE,
        pluginSource: gE,
        setActiveDocReplacer: YE,
        showAiHints: OE,
        canAiChangeCode: mE = Wq
      } = qq;
      const [xE, AE] = (0, mq.useState)(null), cE = null === wq || void 0 === wq ? void 0 : wq.version, uE = null === wq || void 0 === wq ? void 0 : wq.clientID, BE = (0, mq.useRef)({
        isLobbyCode: Eq,
        files: Cq,
        code: gq,
        activePath: Iq
      }), WE = (0, mq.useRef)(Kq);
      WE.current = Kq;
      const NE = (0, mq.useRef)(null),
        aE = (0, mq.useRef)(wq);
      aE.current = wq;
      const VE = (0, mq.useRef)(null),
        HE = (0, mq.useRef)(null),
        oE = (0, mq.useRef)(null),
        PE = (0, mq.useRef)(rq);
      PE.current = rq;
      const QE = (0, mq.useRef)(gq);
      QE.current = gq;
      const rE = (0, mq.useRef)(gE);
      rE.current = gE;
      const vE = function(qq, Eq, gq, Yq) {
        return gq ? `/plugin-preview/${gq}/${null!==Yq&&void 0!==Yq?Yq:"index.ts"}` : qq ? TE(null !== Eq && void 0 !== Eq ? Eq : Pq.j) : ME
      }(Eq, Iq, Dq, qE);
      (0, mq.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: qq,
            files: Eq,
            code: gq,
            activePath: Yq
          } = BE.current, lq = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Vq().ModuleKind.ESNext,
            moduleResolution: Vq().ModuleResolutionKind.Bundler,
            target: Vq().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(oq.i).map((qq => [qq.specifier, [qq.typesVfsPath]])))
            }
          }, Oq = new Map, mq = [];
          if (qq) {
            const qq = null !== Eq && void 0 !== Eq ? Eq : {
              [Pq.j]: gq || "\n"
            };
            for (const [Eq, gq] of Object.entries(qq)) {
              const qq = TE(Eq);
              Oq.set(qq, gq || "\n"), mq.push(qq)
            }
            const lq = TE(null !== Yq && void 0 !== Yq ? Yq : Pq.j);
            Oq.has(lq) ? Oq.set(lq, gq || "\n") : (Oq.set(lq, gq || "\n"), mq.push(lq)), Oq.set("/node_modules/@bloxd/index.d.ts", uq.default), mq.push("/node_modules/@bloxd/index.d.ts");
            for (const Eq of Object.values(oq.i)) {
              Oq.set(Eq.typesVfsPath, Eq.types), mq.push(Eq.typesVfsPath);
              for (const [qq, gq] of Object.entries(Eq.files)) {
                const Yq = `/plugin-preview/${Eq.name}/${qq}`;
                Oq.set(Yq, gq || "\n"), mq.push(Yq)
              }
            }
          } else Oq.set(ME, gq || "\n"), mq.push(ME);
          Oq.set("/globals.d.ts", qq ? cq.d : Aq.e), Oq.set("/lib.d.ts", Bq.c), mq.push("/globals.d.ts", "/lib.d.ts");
          const xq = Nq.c(Oq),
            Wq = Nq.d(xq, mq, Vq(), lq);
          AE({
            SV: Wq,
            fsMap: Oq
          })
        }()
      }), []), (0, mq.useEffect)((() => {
        var qq, Yq;
        if (!xE || !Eq) return;
        const {
          SV: lq,
          fsMap: Oq
        } = xE;
        if (function(qq, Eq, gq) {
            const Yq = new Set;
            for (const [lq, Oq] of Object.entries(gq)) {
              const gq = TE(lq);
              Yq.add(gq);
              const mq = Oq || "\n";
              Eq.get(gq) !== mq && (Eq.set(gq, mq), zE(qq, gq, mq))
            }
            for (const lq of [...Eq.keys()]) "/globals.d.ts" === lq || "/lib.d.ts" === lq || lq.startsWith("/node_modules/") || lq.startsWith("/plugin-preview/") || Yq.has(lq) || (Eq.delete(lq), qq.getSourceFile(lq) && qq.deleteFile(lq))
          }(lq, Oq, null !== Cq && void 0 !== Cq ? Cq : {
            [Pq.j]: gq || "\n"
          }), Dq) return void zE(lq, vE, gE || "\n");
        const mq = null !== (qq = null === (Yq = NE.current) || void 0 === Yq ? void 0 : Yq.state.doc.toString()) && void 0 !== qq ? qq : gq;
        zE(lq, vE, mq || "\n")
      }), [Cq, Iq, xE, Dq, gE, vE, gq, Eq]), (0, mq.useEffect)((() => {
        if (!xE) return;
        const {
          SV: qq
        } = xE;
        zE(qq, vE, (Dq ? gE : gq) || "\n")
      }), [gq, Dq, gE, vE, xE]), (0, mq.useEffect)((() => () => {
        HE.current && (HE.current(), HE.current = null)
      }), []), (0, mq.useEffect)((() => (YE(((qq, Eq) => {
        if (Dq) return !1;
        const gq = NE.current,
          Yq = aE.current,
          lq = Yq ? (0, Qq.t)(Yq.docKey) : null;
        if (!gq || !Yq || VE.current !== Yq.clientID || qq !== lq) return !1;
        const Oq = gq.state.doc.toString();
        return Oq !== Eq && gq.dispatch({
          changes: {
            from: 0,
            to: Oq.length,
            insert: Eq
          }
        }), !0
      })), () => {
        NE.current = null, VE.current = null, YE(null)
      })), [YE, Dq]);
      const hE = Eq ? Dq ? null : null !== Iq && void 0 !== Iq ? Iq : Pq.j : jE.c,
        nE = EE(NE, hE);
      lE(NE, aq), (0, tq.f)("FormatCode", (() => {
        if (!xE || !NE.current || Dq) return;
        const {
          SV: qq,
          fsMap: gq
        } = xE, Yq = qq.getSourceFile(vE).getFullText();
        let lq = 0;
        if (Eq && Cq)
          for (const [Eq, xq] of Object.entries(Cq)) Eq !== (null !== Iq && void 0 !== Iq ? Iq : Pq.j) && (lq += xq.length);
        const Oq = function(qq, Eq, gq, Yq, lq) {
          const Oq = qq.languageService.getFormattingEditsForDocument(Yq, RE);
          if (!Oq.length) return vq.b.error("Code is already formatted.");
          Oq.sort(((qq, Eq) => Eq.span.start - qq.span.start));
          let mq = qq.getSourceFile(Yq).getFullText();
          for (const xq of Oq) mq = mq.slice(0, xq.span.start) + xq.cu + mq.slice(xq.span.start + xq.span.length);
          return mq !== (gq ? (0, yq.k)(mq, lq) : (0, yq.g)(mq)) ? vq.b.error("Formatting the code will go beyond the character limit.") : vq.b.value(mq)
        }(qq, 0, Eq, vE, lq);
        if (Oq.isError()) return void aq({
          message: Oq.asError().message,
          type: "warning"
        });
        const mq = Oq.getValue();
        mq && (NE.current.dispatch({
          changes: {
            from: 0,
            to: Yq.length,
            insert: mq
          },
          selection: {
            anchor: mq.length
          }
        }), zE(qq, vE, mq), xq(mq))
      }));
      const bE = (0, mq.useMemo)((() => {
        if (!xE) return [];
        const {
          SV: qq,
          fsMap: gq
        } = xE;
        ! function(qq, Eq, gq, Yq) {
          if (qq.getSourceFile(gq)) return;
          const lq = Yq || "\n";
          Eq.set(gq, lq), qq.createFile(gq, lq)
        }(qq, gq, vE, (Dq ? rE.current : QE.current) || "\n");
        const mq = Eq && SE(Dq ? null !== qE && void 0 !== qE ? qE : "index.ts" : Iq),
          xq = [(0, lq.c)({
            jsx: !1,
            typescript: mq
          }), Oq.f.highest(Oq.d.domEventHandlers({
            keydown: qq => "Escape" === qq.key ? (PE.current(), qq.stopPropagation(), !0) : (qq.stopPropagation(), !1)
          })), (0, Yq.d)({
            override: [GE(qq, vE)]
          }), bq.l.fromClass(class {
            constructor(qq) {
              this.view = qq, this.timeout = null, this.scheduleParse()
            }
            update(qq) {
              (qq.docChanged || qq.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const qq = this.view.viewport.to;
                (0, pq.db)(this.view.state, qq) || (0, pq.G)(this.view, qq, Gq) || this.scheduleParse()
              }), Lq))
            }
          }), ...eq, Oq.d.lineWrapping, Oq.k.define({
            create: JE(qq, Fq, vE),
            update(Eq, gq) {
              const Yq = gq.effects.some((qq => qq.is(UE)));
              return gq.docChanged || gq.selection || Yq ? (zE(qq, vE, gq.state.doc.toString() || " "), JE(qq, Fq, vE)(gq.state)) : Eq
            },
            provide: qq => Oq.s.computeN([qq], (Eq => Eq.field(qq)))
          }), (0, Oq.p)(kE(qq, vE)), (0, jq.e)(pE(Eq, qq, vE)), Oq.l.fromClass(class {
            constructor(qq) {
              this.view = qq, this.searchPanel = null
            }
            update(qq) {
              const Eq = qq.view.dom.querySelector(".cm-search");
              if (Eq !== this.searchPanel) {
                if (this.searchPanel = Eq, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (qq => {
                  "Escape" === qq.key && (0, dq.d)(this.view), qq.stopPropagation()
                }))
              }
            }
          })];
        OE && !Dq && xq.push(yE(Eq ? null !== Iq && void 0 !== Iq ? Iq : Pq.j : jE.c, mE));
        const Aq = aE.current;
        if (Aq && !Dq) {
          xq.push(... function(qq, Eq, gq, Yq, lq) {
            let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const mq = (0, Qq.t)(gq),
              xq = bq.l.fromClass(class {
                constructor(qq) {
                  this.view = qq, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = fq.i.subscribe("codeCollab", (qq => {
                    qq.docKey === mq && qq.type === Qq.f.Updates && (qq.updates ? this.applyUpdates(qq.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(qq) {
                  const Eq = JSON.parse(qq).map((qq => ({
                    clientID: qq.clientID,
                    changes: nq.ChangeSet.fromJSON(qq.changes)
                  })));
                  Eq.length > 0 && (this.view.dispatch((0, hq.i)(this.view.state, Eq)), lq && lq(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(qq) {
                  Oq && (qq.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const qq = (0, hq.l)(this.view.state);
                  if (this.pushing || !qq.length) return;
                  const Eq = Date.now() - this.lastPushTime;
                  if (Eq < Sq) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Sq - Eq)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Tq);
                  const gq = (0, hq.f)(this.view.state),
                    lq = qq.map((qq => ({
                      clientID: qq.clientID,
                      changes: qq.changes.toJSON()
                    }))),
                    Oq = JSON.stringify(lq);
                  Oq.length <= Qq.h ? iq.gameBridge.send("sendCodeCollab", {
                    nE: Qq.c.Push,
                    bE: mq,
                    iE: gq,
                    ME: Oq
                  }) : (0, Mq.postJsonWithMetricsCookiesAndJsonResponse)(`${Yq.gsUrl}/code/collab-push`, Zq.q["collab-push"].toBuffer({
                    gameNameWithVariation: Yq.gameNameWithVariation,
                    lobbyName: Yq.lobbyName,
                    docKey: mq,
                    version: gq,
                    updates: Oq
                  }), {
                    retries: 0
                  }).catch((qq => {
                    console.error("[CodeCollab] HTTP push failed", qq)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const qq = (0, hq.f)(this.view.state);
                  (0, Mq.postJsonWithMetricsCookiesAndJsonResponse)(`${Yq.gsUrl}/code/collab-pull`, Zq.q["collab-pull"].toBuffer({
                    gameNameWithVariation: Yq.gameNameWithVariation,
                    lobbyName: Yq.lobbyName,
                    docKey: mq,
                    fromVersion: qq
                  }), {
                    retries: 1
                  }).then((qq => {
                    this.destroyed || (qq.fullDoc ? fq.i.TV("codeCollabRejoin", {
                      docKey: mq,
                      doc: qq.fullDoc,
                      version: qq.version
                    }) : this.applyUpdates(qq.updates))
                  })).catch((qq => {
                    console.error("[CodeCollab] Pull failed", qq)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const qq = Date.now();
                  if (qq - this.lastCursorSent < zq) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), zq)));
                  this.lastCursorSent = qq;
                  const Eq = this.view.state.selection.main;
                  iq.gameBridge.send("sendCodeCollab", {
                    nE: Qq.c.Cursor,
                    bE: mq,
                    pE: Eq.anchor,
                    GE: Eq.head
                  })
                }
                destroy() {
                  this.destroyed = !0, fq.i.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, hq.d)({
              startVersion: qq,
              clientID: Eq
            }), xq]
          }(cE, uE, Aq.docKey, Aq.httpConfig, (qq => {
            var Eq;
            null === (Eq = WE.current) || void 0 === Eq || Eq.call(WE, qq)
          }), Wq));
          const qq = function(qq, Eq) {
            const gq = (0, Qq.t)(qq);
            return {
              extensions: [Xq],
              connect(qq) {
                if (Eq) {
                  const gq = Eq.map((qq => kq.of({
                    playerId: qq.playerId,
                    playerName: qq.playerName,
                    colour: qq.colour,
                    anchor: qq.anchor,
                    head: qq.head,
                    lastMoved: Date.now()
                  })));
                  gq.length > 0 && qq.dispatch({
                    effects: gq
                  })
                }
                const Yq = fq.i.subscribe("codeCollab", (Eq => {
                    if (Eq.docKey === gq)
                      if (Eq.type === Qq.f.RemoteCursor) qq.dispatch({
                        effects: kq.of({
                          playerId: Eq.playerId,
                          playerName: Eq.playerName,
                          colour: Eq.colour,
                          anchor: Eq.anchor,
                          head: Eq.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Eq.type === Qq.f.Presence) {
                      const gq = JSON.parse(Eq.peers),
                        Yq = new Set(gq.map((qq => qq.playerId))),
                        lq = qq.state.field(Xq),
                        Oq = [];
                      for (const [qq] of lq.cursors) Yq.has(qq) || Oq.push(Rq.of(qq));
                      Oq.length > 0 && qq.dispatch({
                        effects: Oq
                      })
                    }
                  })),
                  lq = setInterval((() => {
                    qq.dom.isConnected ? qq.dispatch({
                      effects: Uq.of(Date.now())
                    }) : clearInterval(lq)
                  }), Jq);
                return () => {
                  fq.i.unsubscribe(Yq), clearInterval(lq)
                }
              }
            }
          }(Aq.docKey, Aq.existingCursors);
          xq.push(...qq.extensions), oE.current = qq.connect
        } else oE.current = null;
        return xq
      }), [Eq, xE, Fq, cE, uE, vE, Iq, Dq, qE, Wq, OE, mE]);
      if (!xE || !wq && !Dq) return (0, tE.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, tE.jsx)(Hq.e, {})
      });
      const iE = Dq ? `plugin-${Dq}-${null!==qE&&void 0!==qE?qE:"index.ts"}` : wq ? `collab-${wq.clientID}` : `local-${Eq}`;
      return (0, tE.jsx)(Oq.o, {
        value: Dq ? null !== gE && void 0 !== gE ? gE : "" : gq,
        onChange: xq,
        extensions: bE,
        className: "CodeEditorContent",
        theme: sq ? dE : "dark",
        editable: Wq && !Dq,
        basicSetup: FE,
        onCreateEditor: qq => {
          var Eq;
          NE.current = qq, VE.current = null !== (Eq = null === wq || void 0 === wq ? void 0 : wq.clientID) && void 0 !== Eq ? Eq : null, nE(qq), HE.current && HE.current(), oE.current && (HE.current = oE.current(qq))
        }
      }, iE)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);