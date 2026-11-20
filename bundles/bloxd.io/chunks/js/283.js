export const id = 283;
export const ids = [283];
export const modules = {
  40404: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => ga
    });
    var Ab = Ub(40410),
      Mb = Ub(40446),
      Tb = Ub(40453),
      Eb = Ub(52),
      Yb = Ub(75),
      Bb = Ub(40469),
      eb = Ub(40475),
      vb = Ub(4446),
      Lb = Ub(40483),
      Pb = Ub(1794),
      Xb = Ub(40487),
      jb = Ub(40505),
      Rb = Ub.n(jb),
      kb = Ub(40460),
      yb = Ub(40463),
      Zb = Ub(1254),
      Db = Ub(36188),
      zb = Ub(1189),
      xb = Ub(36195),
      ib = Ub(36098),
      fb = Ub(1345),
      mb = Ub(591),
      pb = Ub(1192),
      Nb = Ub(40579),
      Wb = Ub(40415),
      Hb = Ub(40419),
      Ib = Ub(1824),
      db = Ub(3433),
      Fb = Ub(22),
      hb = Ub(1065);
    const Gb = 1e4,
      Qb = 250,
      qb = 250;
    var ub = Ub(40437);
    const rb = 50,
      Kb = 100;
    const ob = 2e3,
      lb = Wb.B.define(),
      tb = Wb.B.define(),
      wb = Wb.B.define();
    class sb extends Hb.m {
      constructor(bb, ab, Ub) {
        super(), this.colour = bb, this.playerName = ab, this.showName = Ub
      }
      toDOM() {
        const bb = document.createElement("span");
        bb.className = "cm-remote-cursor-wrapper", bb.style.borderLeftColor = this.colour;
        const ab = document.createElement("span");
        if (ab.className = "cm-remote-cursor", ab.style.borderLeftColor = this.colour, bb.appendChild(ab), this.showName) {
          const ab = document.createElement("span");
          ab.className = "cm-remote-cursor-name", ab.style.backgroundColor = this.colour, ab.textContent = this.playerName, bb.appendChild(ab)
        }
        return bb
      }
      eq(bb) {
        return this.colour === bb.colour && this.playerName === bb.playerName && this.showName === bb.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function gb(bb, ab) {
      const Ub = [],
        Ab = [];
      for (const [, Eb] of bb) {
        const bb = ab - Eb.lastMoved < ob;
        if (Ub.push({
            pos: Eb.head,
            decoration: Hb.d.widget({
              widget: new sb(Eb.colour, Eb.playerName, bb),
              side: 1
            })
          }), Eb.anchor !== Eb.head) {
          const bb = Math.min(Eb.anchor, Eb.head),
            ab = Math.max(Eb.anchor, Eb.head);
          Ab.push({
            from: bb,
            to: ab,
            decoration: Hb.d.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Eb.colour}33`
              }
            })
          })
        }
      }
      const Mb = new Wb.x,
        Tb = [];
      for (const Eb of Ub) Tb.push({
        bias: 1,
        deco: Eb.decoration,
        from: Eb.pos,
        to: Eb.pos
      });
      for (const Eb of Ab) Tb.push({
        bias: 0,
        deco: Eb.decoration,
        from: Eb.from,
        to: Eb.to
      });
      Tb.sort(((bb, ab) => bb.from - ab.from || bb.deco.startSide - ab.deco.startSide || bb.bias - ab.bias));
      for (const Eb of Tb) Mb.add(Eb.from, Eb.to, Eb.deco);
      return Mb.finish()
    }
    const Cb = Wb.E.define({
      create: () => ({
        cursors: new Map,
        hA: Hb.d.none
      }),
      update(bb, ab) {
        let Ub = bb.cursors,
          Ab = !1;
        if (ab.docChanged) {
          const bb = new Map;
          for (const [Ab, Mb] of Ub) bb.set(Ab, {
            ...Mb,
            anchor: ab.changes.mapPos(Mb.anchor, 1),
            head: ab.changes.mapPos(Mb.head, 1)
          });
          Ub = bb, Ab = !0
        }
        for (const Mb of ab.effects)
          if (Mb.is(lb)) {
            if (!Number.isInteger(Mb.value.anchor) || !Number.isInteger(Mb.value.head)) {
              console.warn(`Code Editor: ignored player ${Mb.value.playerId}'s cursor at ${Mb.value.anchor}-${Mb.value.head}`);
              continue
            }
            const Tb = ab.state.doc.length,
              Eb = {
                ...Mb.value,
                anchor: Math.min(Mb.value.anchor, Tb),
                head: Math.min(Mb.value.head, Tb)
              };
            Ub === bb.cursors && (Ub = new Map(Ub)), Ub.set(Eb.playerId, Eb), Ab = !0
          } else Mb.is(tb) ? Ub.has(Mb.value) && (Ub === bb.cursors && (Ub = new Map(Ub)), Ub.delete(Mb.value), Ab = !0) : Mb.is(wb) && (Ab = !0);
        return Ab ? {
          cursors: Ub,
          hA: gb(Ub, Date.now())
        } : bb
      },
      provide: bb => Hb.i.hA.from(bb, (bb => bb.hA))
    });
    const Vb = Wb.B.define(),
      Ob = Hb.d.mark({
        class: "CodeInsertFlash"
      }),
      cb = Wb.E.define({
        create: () => Hb.d.none,
        update(bb, ab) {
          let Ub = bb.map(ab.changes);
          for (const Ab of ab.effects) Ab.is(Vb) && (Ub = Ab.value ? Hb.d.set(Ob.range(Ab.value.from, Ab.value.to)) : Hb.d.none);
          return Ub
        },
        provide: bb => Hb.i.hA.from(bb)
      }),
      Jb = Wb.E.define({
        create: () => !1,
        update: (bb, ab) => bb || void 0 !== ab.annotation(Wb.I.userEvent) && !ab.annotation(Wb.I.remote)
      }),
      nb = [cb, Jb];

    function Sb(bb) {
      return bb.field(Jb)
    }
    const ba = 3e4;

    function aa(bb, ab) {
      const Ub = (0, Eb.useRef)(null);
      (0, Eb.useEffect)((() => {
        var bb;
        (null === (bb = Ub.current) || void 0 === bb ? void 0 : bb.path) !== ab && (Ub.current = null)
      }), [ab]);
      const Ab = bb => {
        var Ab;
        const Mb = Ub.current;
        if (null === bb || void 0 === bb || !bb.dom.isConnected || !Mb || Mb.path !== ab) return;
        Ub.current = null;
        const {
          RX: Eb
        } = Mb;
        if (Eb && null !== Eb.text && performance.now() - Eb.at < ba) {
          const ab = function(bb, ab) {
            if (bb === ab) return null;
            const Ub = Math.min(bb.length, ab.length);
            let Ab = 0;
            for (; Ab < Ub && bb[Ab] === ab[Ab];) Ab++;
            let Mb = 0;
            for (; Mb < Ub - Ab && bb[bb.length - 1 - Mb] === ab[ab.length - 1 - Mb];) Mb++;
            return {
              from: Ab,
              to: bb.length - Mb,
              insert: ab.slice(Ab, ab.length - Mb)
            }
          }(bb.state.doc.toString(), Eb.text);
          null !== ab && bb.dispatch({
            changes: ab,
            userEvent: Eb.placed ? "input" : void 0
          })
        }
        const {
          doc: Yb
        } = bb.state, Bb = Yb.line(Math.min(Math.max(Mb.line, 1), Yb.lines)), eb = Bb.from + Math.min(null !== (Ab = Mb.column) && void 0 !== Ab ? Ab : 0, Bb.length);
        bb.dispatch({
          selection: {
            anchor: eb
          },
          effects: Tb.e.scrollIntoView(eb, {
            y: "center"
          }),
          userEvent: null !== Eb && void 0 !== Eb && Eb.placed ? "select" : void 0
        }), !1 !== (null === Eb || void 0 === Eb ? void 0 : Eb.focused) && bb.focus()
      };
      return (0, fb.f)("CodeEditorGoToLine", (ab => {
        Ub.current = ab, Ab(bb.current)
      })), (0, fb.f)("CodeEditorKeepEdits", (() => {
        const Ab = bb.current;
        if (null === Ab || !Ab.dom.isConnected || null === ab) return;
        const {
          doc: Mb,
          selection: Tb
        } = Ab.state, {
          head: Eb
        } = Tb.main, Yb = Mb.lineAt(Eb), Bb = {
          text: (0, Nb.n)(Ab.state).length > 0 ? Mb.toString() : null,
          at: performance.now(),
          focused: Ab.hasFocus,
          placed: Sb(Ab.state)
        };
        Ub.current = {
          path: ab,
          line: Yb.number,
          column: Eb - Yb.from,
          RX: Bb
        }
      })), bb => {
        var Mb;
        const Tb = Ub.current;
        !1 === (null === Tb || void 0 === Tb || null === (Mb = Tb.RX) || void 0 === Mb ? void 0 : Mb.focused) && Tb.path === ab || bb.focus(), Ab(bb)
      }
    }
    var Ua = Ub(4047),
      Aa = Ub(1134);

    function Ma(bb, ab) {
      const {
        t: Ub
      } = (0, Aa.A)();
      (0, fb.f)("CodeEditorInsertText", (Ab => {
        let {
          text: Mb,
          focus: Tb
        } = Ab;
        const Eb = bb.current,
          Yb = null !== Eb && void 0 !== Eb && Eb.dom.isConnected ? function(bb, ab) {
            if (!Sb(bb)) return null;
            const {
              from: Ub,
              to: Ab
            } = bb.selection.main, Mb = Ub + ab.length;
            return {
              changes: {
                from: Ub,
                to: Ab,
                insert: ab
              },
              selection: {
                anchor: Mb
              },
              effects: [Hb.i.scrollIntoView(Mb, {
                y: "center"
              }), Vb.of({
                from: Ub,
                to: Mb
              })],
              userEvent: "input"
            }
          }(Eb.state, Mb) : null;
        null !== Eb && null !== Yb ? (Eb.dispatch(Yb), Tb && Eb.focus(), setTimeout((() => {
          Eb.dom.isConnected && Eb.dispatch({
            effects: Vb.of(null)
          })
        }), 1500)) : (0, Ua.b)(Mb).then((() => {
          ab({
            message: Ub("codeEditorWorld:pickCopied", {
              coords: Mb
            }),
            type: "success"
          })
        }), (bb => {
          console.error("Pick could not copy the coordinates", bb), ab({
            message: Ub("codeEditorWorld:pickPlaceCursor", {
              coords: Mb
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Ta = Ub(40442);
    const Ea = "#e45649",
      Ya = "#383a42",
      Ba = "#696c77",
      ea = "#986801",
      va = "#e5e5e6",
      La = "#fafafa",
      Pa = "#eaeaeb",
      Xa = "#526fff",
      ja = Hb.i.theme({
        "&": {
          color: Ya,
          backgroundColor: La
        },
        ".cm-content": {
          caretColor: Xa
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Xa
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Ya
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
          backgroundColor: La,
          color: Ba,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: va
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Pa
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Pa,
          borderBottomColor: Pa
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: va,
            color: Ya
          }
        }
      }, {
        dark: !1
      }),
      Ra = ub.e.define([{
        tag: Ta.h.keyword,
        color: "#a626a4"
      }, {
        tag: [Ta.h.name, Ta.h.deleted, Ta.h.character, Ta.h.propertyName, Ta.h.macroName],
        color: Ea
      }, {
        tag: [Ta.h.function(Ta.h.variableName), Ta.h.labelName],
        color: "#4078f2"
      }, {
        tag: [Ta.h.color, Ta.h.constant(Ta.h.name), Ta.h.standard(Ta.h.name)],
        color: ea
      }, {
        tag: [Ta.h.definition(Ta.h.name), Ta.h.separator],
        color: Ya
      }, {
        tag: [Ta.h.typeName, Ta.h.className, Ta.h.number, Ta.h.changed, Ta.h.annotation, Ta.h.modifier, Ta.h.self, Ta.h.namespace],
        color: "#c18401"
      }, {
        tag: [Ta.h.operator, Ta.h.operatorKeyword, Ta.h.url, Ta.h.escape, Ta.h.regexp, Ta.h.link, Ta.h.special(Ta.h.string)],
        color: "#0184bc"
      }, {
        tag: [Ta.h.meta, Ta.h.comment],
        color: Ba
      }, {
        tag: Ta.h.strong,
        fontWeight: "bold"
      }, {
        tag: Ta.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ta.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ta.h.link,
        color: Ba,
        textDecoration: "underline"
      }, {
        tag: Ta.h.heading,
        fontWeight: "bold",
        color: Ea
      }, {
        tag: [Ta.h.atom, Ta.h.bool, Ta.h.special(Ta.h.variableName)],
        color: ea
      }, {
        tag: [Ta.h.processingInstruction, Ta.h.string, Ta.h.inserted],
        color: "#50a14f"
      }, {
        tag: Ta.h.invalid,
        color: "#000000"
      }]),
      ka = [ja, (0, ub.pb)(Ra)];
    var ya = Ub(36240),
      Za = Ub(40581);
    const Da = Tb.j.define(),
      za = Tb.m.define({
        create: () => !1,
        update(bb, ab) {
          for (const Ub of ab.effects) Ub.is(Da) && (bb = Ub.value);
          return bb
        }
      }),
      xa = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function ia(bb, ab) {
      return [za, Tb.p.fromClass(class {
        constructor(bb) {
          this.view = bb, this.onDown = bb => {
            const ab = bb.target instanceof Element && null !== bb.target.closest(".cm-tooltip");
            0 !== bb.button || ab || this.view.state.field(za) || this.view.dispatch({
              effects: Da.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(za) && this.view.dispatch({
              effects: Da.of(!1)
            })
          }, bb.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Tb.w.compute(["selection", za], (Ub => function(bb, ab, Ub) {
        const Ab = bb.selection.main;
        return Ab.empty || bb.field(za) || bb.sliceDoc(Ab.from, Ab.to).trim().length < 2 ? null : {
          pos: Ab.from,
          above: !0,
          create: bb => {
            const Ab = document.createElement("div");
            Ab.className = "CodeSelectionActions", Ab.setAttribute("role", "toolbar"), Ab.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Mb,
                label: Tb
              }
              of xa) {
              if (!Ub && "explain" !== Mb) continue;
              const Eb = document.createElement("button");
              Eb.type = "button", Eb.textContent = Tb, "change" !== Mb && (Eb.title = Za.d, Eb.dataset.asksAi = "true"), Eb.addEventListener("mousedown", (bb => {
                bb.preventDefault()
              })), Eb.addEventListener("click", (() => {
                const Ub = bb.state.selection.main;
                if (Ub.empty) return;
                const Ab = {
                  action: Mb,
                  path: ab,
                  fromLine: bb.state.doc.lineAt(Ub.from).number,
                  toLine: bb.state.doc.lineAt(Ub.to > Ub.from && bb.state.doc.lineAt(Ub.to).from === Ub.to ? Ub.to - 1 : Ub.to).number,
                  text: bb.state.sliceDoc(Ub.from, Ub.to)
                };
                Fb.m.IR("WorldCodeAiSelection", Ab), bb.dispatch({
                  selection: {
                    anchor: Ub.to
                  }
                })
              })), Ab.appendChild(Eb)
            }
            return {
              dom: Ab
            }
          }
        }
      }(Ub, bb, ab)))]
    }
    var fa = Ub(1023);
    const ma = new Set(["(", "{", "[", "<"]),
      pa = new Set([")", "}", "]", ">"]),
      Na = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Wa(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Ub(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = [];
        for (const Mb of bb) {
          let bb;
          bb = "punctuation" === Mb.kind ? Na.text : "parameterName" === Mb.kind ? Na.parameterName : ab, Ab.push({
            str: Mb.text,
            style: {
              color: bb,
              opacity: Ub ? .5 : void 0
            }
          })
        }
        return Ab
      }
      const Ab = [];
      if (Ab.push(...Ub(bb.prefixDisplayParts, Na.text)), bb.parameters.length > 0) {
        Ab.push("\n");
        for (let Mb = 0; Mb < bb.parameters.length; Mb++) {
          const Tb = bb.parameters[Mb];
          Ab.push("\t"), Ab.push(...Ub(Tb.displayParts, Na.parameter, null !== ab && Mb !== ab)), Ab.push("\n")
        }
      }
      return Ab.push(...Ub(bb.suffixDisplayParts, Na.suffix)), bb.documentation && (Ab.push("\n\n"), Ab.push(...Ub(bb.documentation, Na.docs))), Ab
    }
    var Ha = function(bb) {
      return bb[bb.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", bb[bb.DuplicateIdentifier = 2300] = "DuplicateIdentifier", bb
    }(Ha || {});
    const Ia = new Set([Ha.DuplicateIdentifier]),
      da = new Set([Ha.VariableDefinedElsewhere]),
      Fa = new Set([]),
      ha = "/index.js";

    function Ga(bb) {
      return "/" + bb
    }

    function Qa(bb, ab, Ub) {
      bb.getSourceFile(ab) && bb.deleteFile(ab), bb.createFile(ab, Ub)
    }

    function qa(bb) {
      return !!bb && ((0, xb.r)(bb) || (0, xb.o)(bb))
    }

    function ua(bb, ab, Ub) {
      return () => {
        let Ab = [...ab.languageService.getSemanticDiagnostics(Ub), ...ab.languageService.getSyntacticDiagnostics(Ub)];
        return Ab = Ab.filter((bb => !(0, mb.I)(bb.start) && !(0, mb.I)(bb.length) && !Ia.has(bb.code))), bb || (Ab = Ab.filter((bb => !da.has(bb.code)))), Ab.map((bb => ({
          from: bb.start,
          to: bb.start + bb.length,
          message: "string" === typeof bb.messageText ? bb.messageText : bb.messageText.messageText,
          severity: Fa.has(bb.code) ? "warning" : "error"
        })))
      }
    }

    function ra(bb, ab) {
      return Ub => {
        var Ab, Mb;
        const Tb = bb.languageService.getCompletionsAtPosition(ab, Ub.pos, {});
        if (!Tb) return {
          from: Ub.pos,
          options: []
        };
        let Eb = null !== (Ab = null === (Mb = Tb.optionalReplacementSpan) || void 0 === Mb ? void 0 : Mb.start) && void 0 !== Ab ? Ab : Ub.pos;
        if (!Tb.optionalReplacementSpan) {
          const bb = Ub.state.doc.sliceString(0, Ub.pos);
          for (; Eb > 0 && /[\w$]/.test(bb[Eb - 1]);) Eb--
        }
        return Tb.entries = Tb.entries.filter((bb => bb.kind !== Rb().ScriptElementKind.warning)), {
          from: Eb,
          options: Tb.entries.map((Ab => {
            var Mb, Tb, Yb, Bb;
            const eb = bb.languageService.getCompletionEntryDetails(ab, Ub.pos, Ab.name, {}, Ab.source, {}, Ab.data),
              vb = null !== (Mb = null === (Tb = Ab.replacementSpan) || void 0 === Tb ? void 0 : Tb.start) && void 0 !== Mb ? Mb : Eb,
              Lb = Ab.replacementSpan ? Ab.replacementSpan.start + Ab.replacementSpan.length : Ub.pos,
              Pb = null !== (Yb = Ab.insertText) && void 0 !== Yb ? Yb : Ab.name;
            return {
              label: Ab.name,
              detail: null === eb || void 0 === eb ? void 0 : eb.displayParts.map((bb => bb.text)).join(""),
              info: null === eb || void 0 === eb || null === (Bb = eb.documentation) || void 0 === Bb ? void 0 : Bb.map((bb => bb.text)).join(""),
              apply: bb => {
                bb.dispatch({
                  changes: {
                    from: vb,
                    to: Lb,
                    insert: Pb
                  },
                  selection: {
                    anchor: vb + Pb.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Ka(bb) {
      return ab => {
        const Ub = document.createElement("div");
        Ub.className = "CodeEditorTooltip";
        let Ab = !1;
        return queueMicrotask((() => {
          Ab || (Yb.render((0, fa.jsx)(Pb.c, {
            text: bb
          }), Ub), ab.requestMeasure())
        })), {
          dom: Ub,
          destroy() {
            Ab = !0, queueMicrotask((() => {
              Yb.unmountComponentAtNode(Ub)
            }))
          }
        }
      }
    }

    function oa(bb, ab, Ub) {
      return Ab => {
        var Mb;
        if (!ab) return [];
        const Tb = null === (Mb = Ab.selection.cj[0]) || void 0 === Mb ? void 0 : Mb.head;
        if (void 0 === Tb) return [];
        const Eb = bb.languageService.getSignatureHelpItems(Ub, Tb, {});
        if (!Eb || !Eb.items.length) return [];
        const Yb = Eb.applicableSpan.start - Eb.items[0].prefixDisplayParts.map((bb => bb.text)).join("").length,
          Bb = Eb.applicableSpan.start,
          eb = Ab.doc.lineAt(Tb),
          vb = eb.from,
          Lb = Math.min(eb.to, Tb);
        let Pb, Xb;
        return Yb < vb ? (Pb = vb, Xb = Lb) : (Pb = Yb, Xb = Bb), [{
          pos: Pb,
          end: Xb,
          above: !1,
          create: Ka(Wa(Eb.items[0], Eb.argumentIndex))
        }]
      }
    }

    function la(bb, ab) {
      return (Ub, Ab, Mb) => {
        const Tb = bb.languageService.getQuickInfoAtPosition(ab, Ab);
        if (!Tb) return [];
        const Eb = Tb.textSpan.start,
          Yb = Tb.textSpan.start + Tb.textSpan.length;
        if (Ab < Eb || Ab >= Yb) return [];
        if (Tb.kind === Rb().ScriptElementKind.memberFunctionElement || Tb.kind === Rb().ScriptElementKind.variableElement && "declare" === Tb.kindModifiers) {
          const bb = Tb.displayParts.findIndex((bb => "space" === bb.kind)); - 1 !== bb && (Tb.displayParts = Tb.displayParts.slice(bb));
          const ab = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Ub = Tb.displayParts.findIndex((bb => "punctuation" === bb.kind && "(" === bb.text)); - 1 !== Ub && (ab.prefixDisplayParts = Tb.displayParts.slice(0, Ub + 1), Tb.displayParts = Tb.displayParts.slice(Ub + 1));
          const Ab = Tb.displayParts.findLastIndex((bb => "punctuation" === bb.kind && ")" === bb.text)); - 1 !== Ab && (ab.suffixDisplayParts = Tb.displayParts.slice(Ab), Tb.displayParts = Tb.displayParts.slice(0, Ab));
          let Mb = 0,
            Bb = [];
          for (const Eb of Tb.displayParts)
            if (ma.has(Eb.text) ? Mb++ : pa.has(Eb.text) && Mb--, "lineBreak" !== Eb.kind) {
              if ("space" === Eb.kind) {
                if (0 === Bb.length) continue;
                Bb.push({
                  kind: "space",
                  text: " "
                })
              } else Bb.push(Eb);
              0 === Mb && "," === Eb.text && (ab.parameters.push({
                displayParts: Bb
              }), Bb = [])
            } return Bb.length > 0 && ab.parameters.push({
            displayParts: Bb
          }), ab.documentation = Tb.documentation, [{
            pos: Eb,
            end: Yb,
            above: !0,
            create: Ka(Wa(ab))
          }]
        }
        const Bb = [];
        for (const bb of Tb.displayParts) Bb.push({
          str: bb.text,
          style: {
            color: Na.text
          }
        });
        if (Tb.documentation) {
          Bb.push("\n\n");
          for (const bb of Tb.documentation) Bb.push({
            str: bb.text,
            style: {
              color: Na.docs
            }
          })
        }
        return [{
          pos: Eb,
          end: Yb,
          above: !0,
          create: Ka(Bb)
        }]
      }
    }
    const ta = {
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
      semicolons: Rb().SemicolonPreference.Insert
    };
    const wa = Tb.j.define(),
      sa = {
        lineNumbers: !0,
        tabSize: 4
      };

    function ga(bb) {
      let {
        isLobbyCode: ab,
        code: Ub,
        onChange: Yb,
        canEditCode: Pb,
        setTemporaryMessage: jb,
        close: mb,
        showTooltips: sb,
        lightMode: gb,
        collabState: Vb,
        onRemoteDocChange: Ob,
        files: cb,
        activePath: Jb,
        pluginName: Sb,
        pluginFile: ba,
        pluginSource: Ua,
        setActiveDocReplacer: Aa,
        showAiHints: Ta,
        canAiChangeCode: Ea = Pb
      } = bb;
      const [Ya, Ba] = (0, Eb.useState)(null), ea = null === Vb || void 0 === Vb ? void 0 : Vb.version, va = null === Vb || void 0 === Vb ? void 0 : Vb.clientID, La = (0, Eb.useRef)({
        isLobbyCode: ab,
        files: cb,
        code: Ub,
        activePath: Jb
      }), Pa = (0, Eb.useRef)(Ob);
      Pa.current = Ob;
      const Xa = (0, Eb.useRef)(null),
        ja = (0, Eb.useRef)(Vb);
      ja.current = Vb;
      const Ra = (0, Eb.useRef)(null),
        Za = (0, Eb.useRef)(null),
        Da = (0, Eb.useRef)(null),
        za = (0, Eb.useRef)(mb);
      za.current = mb;
      const xa = (0, Eb.useRef)(Ub);
      xa.current = Ub;
      const ma = (0, Eb.useRef)(Ua);
      ma.current = Ua;
      const pa = function(bb, ab, Ub, Ab) {
        return Ub ? `/plugin-preview/${Ub}/${null!==Ab&&void 0!==Ab?Ab:"index.ts"}` : bb ? Ga(null !== ab && void 0 !== ab ? ab : zb.h) : ha
      }(ab, Jb, Sb, ba);
      (0, Eb.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: bb,
            files: ab,
            code: Ub,
            activePath: Ab
          } = La.current, Mb = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Rb().ModuleKind.ESNext,
            moduleResolution: Rb().ModuleResolutionKind.Bundler,
            target: Rb().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Db.c).map((bb => [bb.specifier, [bb.typesVfsPath]])))
            }
          }, Tb = new Map, Eb = [];
          if (bb) {
            const bb = null !== ab && void 0 !== ab ? ab : {
              [zb.h]: Ub || "\n"
            };
            for (const [ab, Ub] of Object.entries(bb)) {
              const bb = Ga(ab);
              Tb.set(bb, Ub || "\n"), Eb.push(bb)
            }
            const Mb = Ga(null !== Ab && void 0 !== Ab ? Ab : zb.h);
            Tb.has(Mb) ? Tb.set(Mb, Ub || "\n") : (Tb.set(Mb, Ub || "\n"), Eb.push(Mb)), Tb.set("/node_modules/@bloxd/index.d.ts", vb.default), Eb.push("/node_modules/@bloxd/index.d.ts");
            for (const ab of Object.values(Db.c)) {
              Tb.set(ab.typesVfsPath, ab.types), Eb.push(ab.typesVfsPath);
              for (const [bb, Ub] of Object.entries(ab.files)) {
                const Ab = `/plugin-preview/${ab.name}/${bb}`;
                Tb.set(Ab, Ub || "\n"), Eb.push(Ab)
              }
            }
          } else Tb.set(ha, Ub || "\n"), Eb.push(ha);
          Tb.set("/globals.d.ts", bb ? eb.d : Bb.e), Tb.set("/lib.d.ts", Lb.e), Eb.push("/globals.d.ts", "/lib.d.ts");
          const Yb = Xb.c(Tb),
            Pb = Xb.g(Yb, Eb, Rb(), Mb);
          Ba({
            dR: Pb,
            fsMap: Tb
          })
        }()
      }), []), (0, Eb.useEffect)((() => {
        var bb, Ab;
        if (!Ya || !ab) return;
        const {
          dR: Mb,
          fsMap: Tb
        } = Ya;
        if (function(bb, ab, Ub) {
            const Ab = new Set;
            for (const [Mb, Tb] of Object.entries(Ub)) {
              const Ub = Ga(Mb);
              Ab.add(Ub);
              const Eb = Tb || "\n";
              ab.get(Ub) !== Eb && (ab.set(Ub, Eb), Qa(bb, Ub, Eb))
            }
            for (const Mb of [...ab.keys()]) "/globals.d.ts" === Mb || "/lib.d.ts" === Mb || Mb.startsWith("/node_modules/") || Mb.startsWith("/plugin-preview/") || Ab.has(Mb) || (ab.delete(Mb), bb.getSourceFile(Mb) && bb.deleteFile(Mb))
          }(Mb, Tb, null !== cb && void 0 !== cb ? cb : {
            [zb.h]: Ub || "\n"
          }), Sb) return void Qa(Mb, pa, Ua || "\n");
        const Eb = null !== (bb = null === (Ab = Xa.current) || void 0 === Ab ? void 0 : Ab.state.doc.toString()) && void 0 !== bb ? bb : Ub;
        Qa(Mb, pa, Eb || "\n")
      }), [cb, Jb, Ya, Sb, Ua, pa, Ub, ab]), (0, Eb.useEffect)((() => {
        if (!Ya) return;
        const {
          dR: bb
        } = Ya;
        Qa(bb, pa, (Sb ? Ua : Ub) || "\n")
      }), [Ub, Sb, Ua, pa, Ya]), (0, Eb.useEffect)((() => () => {
        Za.current && (Za.current(), Za.current = null)
      }), []), (0, Eb.useEffect)((() => (Aa(((bb, ab) => {
        if (Sb) return !1;
        const Ub = Xa.current,
          Ab = ja.current,
          Mb = Ab ? (0, xb.x)(Ab.docKey) : null;
        if (!Ub || !Ab || Ra.current !== Ab.clientID || bb !== Mb) return !1;
        const Tb = Ub.state.doc.toString();
        return Tb !== ab && Ub.dispatch({
          changes: {
            from: 0,
            to: Tb.length,
            insert: ab
          }
        }), !0
      })), () => {
        Xa.current = null, Ra.current = null, Aa(null)
      })), [Aa, Sb]);
      const Na = ab ? Sb ? null : null !== Jb && void 0 !== Jb ? Jb : zb.h : ya.b,
        Wa = aa(Xa, Na);
      Ma(Xa, jb), (0, fb.f)("FormatCode", (() => {
        if (!Ya || !Xa.current || Sb) return;
        const {
          dR: bb,
          fsMap: Ub
        } = Ya, Ab = bb.getSourceFile(pa).getFullText();
        let Mb = 0;
        if (ab && cb)
          for (const [ab, Yb] of Object.entries(cb)) ab !== (null !== Jb && void 0 !== Jb ? Jb : zb.h) && (Mb += Yb.length);
        const Tb = function(bb, ab, Ub, Ab, Mb) {
          const Tb = bb.languageService.getFormattingEditsForDocument(Ab, ta);
          if (!Tb.length) return pb.e.error("Code is already formatted.");
          Tb.sort(((bb, ab) => ab.span.start - bb.span.start));
          let Eb = bb.getSourceFile(Ab).getFullText();
          for (const Yb of Tb) Eb = Eb.slice(0, Yb.span.start) + Yb.EE + Eb.slice(Yb.span.start + Yb.span.length);
          return Eb !== (Ub ? (0, ib.j)(Eb, Mb) : (0, ib.g)(Eb)) ? pb.e.error("Formatting the code will go beyond the character limit.") : pb.e.value(Eb)
        }(bb, 0, ab, pa, Mb);
        if (Tb.isError()) return void jb({
          message: Tb.asError().message,
          type: "warning"
        });
        const Eb = Tb.getValue();
        Eb && (Xa.current.dispatch({
          changes: {
            from: 0,
            to: Ab.length,
            insert: Eb
          },
          selection: {
            anchor: Eb.length
          }
        }), Qa(bb, pa, Eb), Yb(Eb))
      }));
      const Ha = (0, Eb.useMemo)((() => {
        if (!Ya) return [];
        const {
          dR: bb,
          fsMap: Ub
        } = Ya;
        ! function(bb, ab, Ub, Ab) {
          if (bb.getSourceFile(Ub)) return;
          const Mb = Ab || "\n";
          ab.set(Ub, Mb), bb.createFile(Ub, Mb)
        }(bb, Ub, pa, (Sb ? ma.current : xa.current) || "\n");
        const Eb = ab && qa(Sb ? null !== ba && void 0 !== ba ? ba : "index.ts" : Jb),
          Yb = [(0, Mb.e)({
            jsx: !1,
            typescript: Eb
          }), Tb.h.highest(Tb.e.domEventHandlers({
            keydown: bb => "Escape" === bb.key ? (za.current(), bb.stopPropagation(), !0) : (bb.stopPropagation(), !1)
          })), (0, Ab.e)({
            override: [ra(bb, pa)]
          }), Hb.k.fromClass(class {
            constructor(bb) {
              this.view = bb, this.timeout = null, this.scheduleParse()
            }
            update(bb) {
              (bb.docChanged || bb.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const bb = this.view.viewport.to;
                (0, ub.sb)(this.view.state, bb) || (0, ub.R)(this.view, bb, rb) || this.scheduleParse()
              }), Kb))
            }
          }), ...nb, Tb.e.lineWrapping, Tb.m.define({
            create: oa(bb, sb, pa),
            update(ab, Ub) {
              const Ab = Ub.effects.some((bb => bb.is(wa)));
              return Ub.docChanged || Ub.selection || Ab ? (Qa(bb, pa, Ub.state.doc.toString() || " "), oa(bb, sb, pa)(Ub.state)) : ab
            },
            provide: bb => Tb.w.computeN([bb], (ab => ab.field(bb)))
          }), (0, Tb.t)(la(bb, pa)), (0, yb.f)(ua(ab, bb, pa)), Tb.p.fromClass(class {
            constructor(bb) {
              this.view = bb, this.searchPanel = null
            }
            update(bb) {
              const ab = bb.view.dom.querySelector(".cm-search");
              if (ab !== this.searchPanel) {
                if (this.searchPanel = ab, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (bb => {
                  "Escape" === bb.key && (0, kb.b)(this.view), bb.stopPropagation()
                }))
              }
            }
          })];
        Ta && !Sb && Yb.push(ia(ab ? null !== Jb && void 0 !== Jb ? Jb : zb.h : ya.b, Ea));
        const Bb = ja.current;
        if (Bb && !Sb) {
          Yb.push(... function(bb, ab, Ub, Ab, Mb) {
            let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Eb = (0, xb.x)(Ub),
              Yb = Hb.k.fromClass(class {
                constructor(bb) {
                  this.view = bb, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Fb.m.subscribe("codeCollab", (bb => {
                    bb.docKey === Eb && bb.type === xb.i.Updates && (bb.updates ? this.applyUpdates(bb.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(bb) {
                  const ab = JSON.parse(bb).map((bb => ({
                    clientID: bb.clientID,
                    changes: Wb.ChangeSet.fromJSON(bb.changes)
                  })));
                  ab.length > 0 && (this.view.dispatch((0, Nb.l)(this.view.state, ab)), Mb && Mb(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(bb) {
                  Tb && (bb.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const bb = (0, Nb.n)(this.view.state);
                  if (this.pushing || !bb.length) return;
                  const ab = Date.now() - this.lastPushTime;
                  if (ab < qb) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), qb - ab)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Gb);
                  const Ub = (0, Nb.h)(this.view.state),
                    Mb = bb.map((bb => ({
                      clientID: bb.clientID,
                      changes: bb.changes.toJSON()
                    }))),
                    Tb = JSON.stringify(Mb);
                  Tb.length <= xb.l ? Ib.gameBridge.send("sendCodeCollab", {
                    fa: xb.e.Push,
                    ma: Eb,
                    Na: Ub,
                    Ia: Tb
                  }) : (0, hb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ab.gsUrl}/code/collab-push`, db.n["collab-push"].toBuffer({
                    gameNameWithVariation: Ab.gameNameWithVariation,
                    lobbyName: Ab.lobbyName,
                    docKey: Eb,
                    version: Ub,
                    updates: Tb
                  }), {
                    retries: 0
                  }).catch((bb => {
                    console.error("[CodeCollab] HTTP push failed", bb)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const bb = (0, Nb.h)(this.view.state);
                  (0, hb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ab.gsUrl}/code/collab-pull`, db.n["collab-pull"].toBuffer({
                    gameNameWithVariation: Ab.gameNameWithVariation,
                    lobbyName: Ab.lobbyName,
                    docKey: Eb,
                    fromVersion: bb
                  }), {
                    retries: 1
                  }).then((bb => {
                    this.destroyed || (bb.fullDoc ? Fb.m.IR("codeCollabRejoin", {
                      docKey: Eb,
                      doc: bb.fullDoc,
                      version: bb.version
                    }) : this.applyUpdates(bb.updates))
                  })).catch((bb => {
                    console.error("[CodeCollab] Pull failed", bb)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const bb = Date.now();
                  if (bb - this.lastCursorSent < Qb) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Qb)));
                  this.lastCursorSent = bb;
                  const ab = this.view.state.selection.main;
                  Ib.gameBridge.send("sendCodeCollab", {
                    fa: xb.e.Cursor,
                    ma: Eb,
                    Ga: ab.anchor,
                    Qa: ab.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Fb.m.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Nb.d)({
              startVersion: bb,
              clientID: ab
            }), Yb]
          }(ea, va, Bb.docKey, Bb.httpConfig, (bb => {
            var ab;
            null === (ab = Pa.current) || void 0 === ab || ab.call(Pa, bb)
          }), Pb));
          const bb = function(bb, ab) {
            const Ub = (0, xb.x)(bb);
            return {
              extensions: [Cb],
              connect(bb) {
                if (ab) {
                  const Ub = ab.map((bb => lb.of({
                    playerId: bb.playerId,
                    playerName: bb.playerName,
                    colour: bb.colour,
                    anchor: bb.anchor,
                    head: bb.head,
                    lastMoved: Date.now()
                  })));
                  Ub.length > 0 && bb.dispatch({
                    effects: Ub
                  })
                }
                const Ab = Fb.m.subscribe("codeCollab", (ab => {
                    if (ab.docKey === Ub)
                      if (ab.type === xb.i.RemoteCursor) bb.dispatch({
                        effects: lb.of({
                          playerId: ab.playerId,
                          playerName: ab.playerName,
                          colour: ab.colour,
                          anchor: ab.anchor,
                          head: ab.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (ab.type === xb.i.Presence) {
                      const Ub = JSON.parse(ab.peers),
                        Ab = new Set(Ub.map((bb => bb.playerId))),
                        Mb = bb.state.field(Cb),
                        Tb = [];
                      for (const [bb] of Mb.cursors) Ab.has(bb) || Tb.push(tb.of(bb));
                      Tb.length > 0 && bb.dispatch({
                        effects: Tb
                      })
                    }
                  })),
                  Mb = setInterval((() => {
                    bb.dom.isConnected ? bb.dispatch({
                      effects: wb.of(Date.now())
                    }) : clearInterval(Mb)
                  }), ob);
                return () => {
                  Fb.m.unsubscribe(Ab), clearInterval(Mb)
                }
              }
            }
          }(Bb.docKey, Bb.existingCursors);
          Yb.push(...bb.extensions), Da.current = bb.connect
        } else Da.current = null;
        return Yb
      }), [ab, Ya, sb, ea, va, pa, Jb, Sb, ba, Pb, Ta, Ea]);
      if (!Ya || !Vb && !Sb) return (0, fa.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, fa.jsx)(Zb.b, {})
      });
      const Ia = Sb ? `plugin-${Sb}-${null!==ba&&void 0!==ba?ba:"index.ts"}` : Vb ? `collab-${Vb.clientID}` : `local-${ab}`;
      return (0, fa.jsx)(Tb.r, {
        value: Sb ? null !== Ua && void 0 !== Ua ? Ua : "" : Ub,
        onChange: Yb,
        extensions: Ha,
        className: "CodeEditorContent",
        theme: gb ? ka : "dark",
        editable: Pb && !Sb,
        basicSetup: sa,
        onCreateEditor: bb => {
          var ab;
          Xa.current = bb, Ra.current = null !== (ab = null === Vb || void 0 === Vb ? void 0 : Vb.clientID) && void 0 !== ab ? ab : null, Wa(bb), Za.current && Za.current(), Da.current && (Za.current = Da.current(bb))
        }
      }, Ia)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);