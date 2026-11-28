export const id = 612;
export const ids = [612];
export const modules = {
  53493: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => dw
    });
    var eb = Mb(53497),
      Hb = Mb(53544),
      pb = Mb(53552),
      Vb = Mb(64),
      gb = Mb(81),
      lb = Mb(53572),
      Lb = Mb(53581),
      Ib = Mb(5652),
      Ob = Mb(53585),
      Ub = Mb(2116),
      tb = Mb(53589),
      Cb = Mb(53610),
      Eb = Mb.n(Cb),
      Fb = Mb(53555),
      Bb = Mb(53564),
      sb = Mb(1468),
      mb = Mb(38066),
      hb = Mb(1313),
      zb = Mb(3500),
      Xb = Mb(37519),
      xb = Mb(1611),
      jb = Mb(661),
      Kb = Mb(1319),
      rb = Mb(53667),
      Rb = Mb(53501),
      Db = Mb(53510),
      cb = Mb(2142),
      Yb = Mb(2550),
      Zb = Mb(29),
      fb = Mb(1186);
    const Ab = 1e4,
      Wb = 250,
      Jb = 250;
    var Sb = Mb(53528);
    const Nb = 50,
      vb = 100;
    const Qb = 2e3,
      Gb = Rb.E.define(),
      qb = Rb.E.define(),
      ab = Rb.E.define();
    class ib extends Db.o {
      constructor(bb, wb, Mb) {
        super(), this.colour = bb, this.playerName = wb, this.showName = Mb
      }
      toDOM() {
        const bb = document.createElement("span");
        bb.className = "cm-remote-cursor-wrapper", bb.style.borderLeftColor = this.colour;
        const wb = document.createElement("span");
        if (wb.className = "cm-remote-cursor", wb.style.borderLeftColor = this.colour, bb.appendChild(wb), this.showName) {
          const wb = document.createElement("span");
          wb.className = "cm-remote-cursor-name", wb.style.backgroundColor = this.colour, wb.textContent = this.playerName, bb.appendChild(wb)
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

    function ub(bb, wb) {
      const Mb = [],
        eb = [];
      for (const [, Vb] of bb) {
        const bb = wb - Vb.lastMoved < Qb;
        if (Mb.push({
            pos: Vb.head,
            decoration: Db.d.widget({
              widget: new ib(Vb.colour, Vb.playerName, bb),
              side: 1
            })
          }), Vb.anchor !== Vb.head) {
          const bb = Math.min(Vb.anchor, Vb.head),
            wb = Math.max(Vb.anchor, Vb.head);
          eb.push({
            from: bb,
            to: wb,
            decoration: Db.d.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Vb.colour}33`
              }
            })
          })
        }
      }
      const Hb = new Rb.z,
        pb = [];
      for (const Vb of Mb) pb.push({
        bias: 1,
        deco: Vb.decoration,
        from: Vb.pos,
        to: Vb.pos
      });
      for (const Vb of eb) pb.push({
        bias: 0,
        deco: Vb.decoration,
        from: Vb.from,
        to: Vb.to
      });
      pb.sort(((bb, wb) => bb.from - wb.from || bb.deco.startSide - wb.deco.startSide || bb.bias - wb.bias));
      for (const Vb of pb) Hb.add(Vb.from, Vb.to, Vb.deco);
      return Hb.finish()
    }
    const db = Rb.G.define({
      create: () => ({
        cursors: new Map,
        ze: Db.d.none
      }),
      update(bb, wb) {
        let Mb = bb.cursors,
          eb = !1;
        if (wb.docChanged) {
          const bb = new Map;
          for (const [eb, Hb] of Mb) bb.set(eb, {
            ...Hb,
            anchor: wb.changes.mapPos(Hb.anchor, 1),
            head: wb.changes.mapPos(Hb.head, 1)
          });
          Mb = bb, eb = !0
        }
        for (const Hb of wb.effects)
          if (Hb.is(Gb)) {
            if (!Number.isInteger(Hb.value.anchor) || !Number.isInteger(Hb.value.head)) {
              console.warn(`Code Editor: ignored player ${Hb.value.playerId}'s cursor at ${Hb.value.anchor}-${Hb.value.head}`);
              continue
            }
            const pb = wb.state.doc.length,
              Vb = {
                ...Hb.value,
                anchor: Math.min(Hb.value.anchor, pb),
                head: Math.min(Hb.value.head, pb)
              };
            Mb === bb.cursors && (Mb = new Map(Mb)), Mb.set(Vb.playerId, Vb), eb = !0
          } else Hb.is(qb) ? Mb.has(Hb.value) && (Mb === bb.cursors && (Mb = new Map(Mb)), Mb.delete(Hb.value), eb = !0) : Hb.is(ab) && (eb = !0);
        return eb ? {
          cursors: Mb,
          ze: ub(Mb, Date.now())
        } : bb
      },
      provide: bb => Db.g.ze.from(bb, (bb => bb.ze))
    });
    const Pb = Rb.E.define(),
      nb = Db.d.mark({
        class: "CodeInsertFlash"
      }),
      yb = Rb.G.define({
        create: () => Db.d.none,
        update(bb, wb) {
          let Mb = bb.map(wb.changes);
          for (const eb of wb.effects) eb.is(Pb) && (Mb = eb.value ? Db.d.set(nb.range(eb.value.from, eb.value.to)) : Db.d.none);
          return Mb
        },
        provide: bb => Db.g.ze.from(bb)
      }),
      ob = Rb.G.define({
        create: () => !1,
        update: (bb, wb) => bb || void 0 !== wb.annotation(Rb.J.userEvent) && !wb.annotation(Rb.J.remote)
      }),
      Tb = [yb, ob];

    function kb(bb) {
      return bb.field(ob)
    }
    const bw = 3e4;

    function ww(bb, wb) {
      const Mb = (0, Vb.useRef)(null);
      (0, Vb.useEffect)((() => {
        var bb;
        (null === (bb = Mb.current) || void 0 === bb ? void 0 : bb.path) !== wb && (Mb.current = null)
      }), [wb]);
      const eb = bb => {
        var eb;
        const Hb = Mb.current;
        if (null === bb || void 0 === bb || !bb.dom.isConnected || !Hb || Hb.path !== wb) return;
        Mb.current = null;
        const {
          nI: Vb
        } = Hb;
        if (Vb && null !== Vb.text && performance.now() - Vb.at < bw) {
          const wb = function(bb, wb) {
            if (bb === wb) return null;
            const Mb = Math.min(bb.length, wb.length);
            let eb = 0;
            for (; eb < Mb && bb[eb] === wb[eb];) eb++;
            let Hb = 0;
            for (; Hb < Mb - eb && bb[bb.length - 1 - Hb] === wb[wb.length - 1 - Hb];) Hb++;
            return {
              from: eb,
              to: bb.length - Hb,
              insert: wb.slice(eb, wb.length - Hb)
            }
          }(bb.state.doc.toString(), Vb.text);
          null !== wb && bb.dispatch({
            changes: wb,
            userEvent: Vb.placed ? "input" : void 0
          })
        }
        const {
          doc: gb
        } = bb.state, lb = gb.line(Math.min(Math.max(Hb.line, 1), gb.lines)), Lb = lb.from + Math.min(null !== (eb = Hb.column) && void 0 !== eb ? eb : 0, lb.length);
        bb.dispatch({
          selection: {
            anchor: Lb
          },
          effects: pb.b.scrollIntoView(Lb, {
            y: "center"
          }),
          userEvent: null !== Vb && void 0 !== Vb && Vb.placed ? "select" : void 0
        }), !1 !== (null === Vb || void 0 === Vb ? void 0 : Vb.focused) && bb.focus()
      };
      return (0, xb.e)("CodeEditorGoToLine", (wb => {
        Mb.current = wb, eb(bb.current)
      })), (0, xb.e)("CodeEditorKeepEdits", (() => {
        const eb = bb.current;
        if (null === eb || !eb.dom.isConnected || null === wb) return;
        const {
          doc: Hb,
          selection: pb
        } = eb.state, {
          head: Vb
        } = pb.main, gb = Hb.lineAt(Vb), lb = {
          text: (0, rb.m)(eb.state).length > 0 ? Hb.toString() : null,
          at: performance.now(),
          focused: eb.hasFocus,
          placed: kb(eb.state)
        };
        Mb.current = {
          path: wb,
          line: gb.number,
          column: Vb - gb.from,
          nI: lb
        }
      })), bb => {
        var Hb;
        const pb = Mb.current;
        !1 === (null === pb || void 0 === pb || null === (Hb = pb.nI) || void 0 === Hb ? void 0 : Hb.focused) && pb.path === wb || bb.focus(), eb(bb)
      }
    }
    var Mw = Mb(5185),
      ew = Mb(1259);

    function Hw(bb, wb) {
      const {
        t: Mb
      } = (0, ew.C)();
      (0, xb.e)("CodeEditorInsertText", (eb => {
        let {
          text: Hb,
          focus: pb
        } = eb;
        const Vb = bb.current,
          gb = null !== Vb && void 0 !== Vb && Vb.dom.isConnected ? function(bb, wb) {
            if (!kb(bb)) return null;
            const {
              from: Mb,
              to: eb
            } = bb.selection.main, Hb = Mb + wb.length;
            return {
              changes: {
                from: Mb,
                to: eb,
                insert: wb
              },
              selection: {
                anchor: Hb
              },
              effects: [Db.g.scrollIntoView(Hb, {
                y: "center"
              }), Pb.of({
                from: Mb,
                to: Hb
              })],
              userEvent: "input"
            }
          }(Vb.state, Hb) : null;
        null !== Vb && null !== gb ? (Vb.dispatch(gb), pb && Vb.focus(), setTimeout((() => {
          Vb.dom.isConnected && Vb.dispatch({
            effects: Pb.of(null)
          })
        }), 1500)) : (0, Mw.d)(Hb).then((() => {
          wb({
            message: Mb("codeEditorWorld:pickCopied", {
              coords: Hb
            }),
            type: "success"
          })
        }), (bb => {
          console.error("Pick could not copy the coordinates", bb), wb({
            message: Mb("codeEditorWorld:pickPlaceCursor", {
              coords: Hb
            }),
            type: "warning"
          })
        }))
      }))
    }
    var pw = Mb(53539);
    const Vw = "#e45649",
      gw = "#383a42",
      lw = "#696c77",
      Lw = "#986801",
      Iw = "#e5e5e6",
      Ow = "#fafafa",
      Uw = "#eaeaeb",
      tw = "#526fff",
      Cw = Db.g.theme({
        "&": {
          color: gw,
          backgroundColor: Ow
        },
        ".cm-content": {
          caretColor: tw
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: tw
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: gw
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
          backgroundColor: Ow,
          color: lw,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Iw
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Uw
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Uw,
          borderBottomColor: Uw
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Iw,
            color: gw
          }
        }
      }, {
        dark: !1
      }),
      Ew = Sb.e.define([{
        tag: pw.l.keyword,
        color: "#a626a4"
      }, {
        tag: [pw.l.name, pw.l.deleted, pw.l.character, pw.l.propertyName, pw.l.macroName],
        color: Vw
      }, {
        tag: [pw.l.function(pw.l.variableName), pw.l.labelName],
        color: "#4078f2"
      }, {
        tag: [pw.l.color, pw.l.constant(pw.l.name), pw.l.standard(pw.l.name)],
        color: Lw
      }, {
        tag: [pw.l.definition(pw.l.name), pw.l.separator],
        color: gw
      }, {
        tag: [pw.l.typeName, pw.l.className, pw.l.number, pw.l.changed, pw.l.annotation, pw.l.modifier, pw.l.self, pw.l.namespace],
        color: "#c18401"
      }, {
        tag: [pw.l.operator, pw.l.operatorKeyword, pw.l.url, pw.l.escape, pw.l.regexp, pw.l.link, pw.l.special(pw.l.string)],
        color: "#0184bc"
      }, {
        tag: [pw.l.meta, pw.l.comment],
        color: lw
      }, {
        tag: pw.l.strong,
        fontWeight: "bold"
      }, {
        tag: pw.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: pw.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: pw.l.link,
        color: lw,
        textDecoration: "underline"
      }, {
        tag: pw.l.heading,
        fontWeight: "bold",
        color: Vw
      }, {
        tag: [pw.l.atom, pw.l.bool, pw.l.special(pw.l.variableName)],
        color: Lw
      }, {
        tag: [pw.l.processingInstruction, pw.l.string, pw.l.inserted],
        color: "#50a14f"
      }, {
        tag: pw.l.invalid,
        color: "#000000"
      }]),
      Fw = [Cw, (0, Sb.mb)(Ew)];
    var Bw = Mb(38117),
      sw = Mb(53675);
    const mw = pb.d.define(),
      hw = pb.f.define({
        create: () => !1,
        update(bb, wb) {
          for (const Mb of wb.effects) Mb.is(mw) && (bb = Mb.value);
          return bb
        }
      }),
      zw = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Xw(bb, wb) {
      return [hw, pb.j.fromClass(class {
        constructor(bb) {
          this.view = bb, this.onDown = bb => {
            const wb = bb.target instanceof Element && null !== bb.target.closest(".cm-tooltip");
            0 !== bb.button || wb || this.view.state.field(hw) || this.view.dispatch({
              effects: mw.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(hw) && this.view.dispatch({
              effects: mw.of(!1)
            })
          }, bb.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), pb.p.compute(["selection", hw], (Mb => function(bb, wb, Mb) {
        const eb = bb.selection.main;
        return eb.empty || bb.field(hw) || bb.sliceDoc(eb.from, eb.to).trim().length < 2 ? null : {
          pos: eb.from,
          above: !0,
          create: bb => {
            const eb = document.createElement("div");
            eb.className = "CodeSelectionActions", eb.setAttribute("role", "toolbar"), eb.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Hb,
                label: pb
              }
              of zw) {
              if (!Mb && "explain" !== Hb) continue;
              const Vb = document.createElement("button");
              Vb.type = "button", Vb.textContent = pb, "change" !== Hb && (Vb.title = sw.b, Vb.dataset.asksAi = "true"), Vb.addEventListener("mousedown", (bb => {
                bb.preventDefault()
              })), Vb.addEventListener("click", (() => {
                const Mb = bb.state.selection.main;
                if (Mb.empty) return;
                const eb = {
                  action: Hb,
                  path: wb,
                  fromLine: bb.state.doc.lineAt(Mb.from).number,
                  toLine: bb.state.doc.lineAt(Mb.to > Mb.from && bb.state.doc.lineAt(Mb.to).from === Mb.to ? Mb.to - 1 : Mb.to).number,
                  text: bb.state.sliceDoc(Mb.from, Mb.to)
                };
                Zb.k.iI("WorldCodeAiSelection", eb), bb.dispatch({
                  selection: {
                    anchor: Mb.to
                  }
                })
              })), eb.appendChild(Vb)
            }
            return {
              dom: eb
            }
          }
        }
      }(Mb, bb, wb)))]
    }
    var xw = Mb(1364);
    const jw = new Set(["(", "{", "[", "<"]),
      Kw = new Set([")", "}", "]", ">"]),
      rw = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Rw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Mb(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = [];
        for (const Hb of bb) {
          let bb;
          bb = "punctuation" === Hb.kind ? rw.text : "parameterName" === Hb.kind ? rw.parameterName : wb, eb.push({
            str: Hb.text,
            style: {
              color: bb,
              opacity: Mb ? .5 : void 0
            }
          })
        }
        return eb
      }
      const eb = [];
      if (eb.push(...Mb(bb.prefixDisplayParts, rw.text)), bb.parameters.length > 0) {
        eb.push("\n");
        for (let Hb = 0; Hb < bb.parameters.length; Hb++) {
          const pb = bb.parameters[Hb];
          eb.push("\t"), eb.push(...Mb(pb.displayParts, rw.parameter, null !== wb && Hb !== wb)), eb.push("\n")
        }
      }
      return eb.push(...Mb(bb.suffixDisplayParts, rw.suffix)), bb.documentation && (eb.push("\n\n"), eb.push(...Mb(bb.documentation, rw.docs))), eb
    }
    var Dw = function(bb) {
      return bb[bb.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", bb[bb.DuplicateIdentifier = 2300] = "DuplicateIdentifier", bb
    }(Dw || {});
    const Yw = new Set([Dw.DuplicateIdentifier]),
      Zw = new Set([Dw.VariableDefinedElsewhere]),
      fw = new Set([]),
      Aw = "/index.js";

    function Ww(bb) {
      return "/" + bb
    }

    function Jw(bb, wb, Mb) {
      bb.getSourceFile(wb) && bb.deleteFile(wb), bb.createFile(wb, Mb)
    }

    function Sw(bb) {
      return !!bb && ((0, zb.r)(bb) || (0, zb.o)(bb))
    }

    function Nw(bb, wb, Mb) {
      return () => {
        let eb = [...wb.languageService.getSemanticDiagnostics(Mb), ...wb.languageService.getSyntacticDiagnostics(Mb)];
        return eb = eb.filter((bb => !(0, jb.K)(bb.start) && !(0, jb.K)(bb.length) && !Yw.has(bb.code))), bb || (eb = eb.filter((bb => !Zw.has(bb.code)))), eb.map((bb => ({
          from: bb.start,
          to: bb.start + bb.length,
          message: "string" === typeof bb.messageText ? bb.messageText : bb.messageText.messageText,
          severity: fw.has(bb.code) ? "warning" : "error"
        })))
      }
    }

    function vw(bb, wb) {
      return Mb => {
        var eb, Hb;
        const pb = bb.languageService.getCompletionsAtPosition(wb, Mb.pos, {});
        if (!pb) return {
          from: Mb.pos,
          options: []
        };
        let Vb = null !== (eb = null === (Hb = pb.optionalReplacementSpan) || void 0 === Hb ? void 0 : Hb.start) && void 0 !== eb ? eb : Mb.pos;
        if (!pb.optionalReplacementSpan) {
          const bb = Mb.state.doc.sliceString(0, Mb.pos);
          for (; Vb > 0 && /[\w$]/.test(bb[Vb - 1]);) Vb--
        }
        return pb.entries = pb.entries.filter((bb => bb.kind !== Eb().ScriptElementKind.warning)), {
          from: Vb,
          options: pb.entries.map((eb => {
            var Hb, pb, gb, lb;
            const Lb = bb.languageService.getCompletionEntryDetails(wb, Mb.pos, eb.name, {}, eb.source, {}, eb.data),
              Ib = null !== (Hb = null === (pb = eb.replacementSpan) || void 0 === pb ? void 0 : pb.start) && void 0 !== Hb ? Hb : Vb,
              Ob = eb.replacementSpan ? eb.replacementSpan.start + eb.replacementSpan.length : Mb.pos,
              Ub = null !== (gb = eb.insertText) && void 0 !== gb ? gb : eb.name;
            return {
              label: eb.name,
              detail: null === Lb || void 0 === Lb ? void 0 : Lb.displayParts.map((bb => bb.text)).join(""),
              info: null === Lb || void 0 === Lb || null === (lb = Lb.documentation) || void 0 === lb ? void 0 : lb.map((bb => bb.text)).join(""),
              apply: bb => {
                bb.dispatch({
                  changes: {
                    from: Ib,
                    to: Ob,
                    insert: Ub
                  },
                  selection: {
                    anchor: Ib + Ub.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Qw(bb) {
      return wb => {
        const Mb = document.createElement("div");
        Mb.className = "CodeEditorTooltip";
        let eb = !1;
        return queueMicrotask((() => {
          eb || (gb.render((0, xw.jsx)(Ub.d, {
            text: bb
          }), Mb), wb.requestMeasure())
        })), {
          dom: Mb,
          destroy() {
            eb = !0, queueMicrotask((() => {
              gb.unmountComponentAtNode(Mb)
            }))
          }
        }
      }
    }

    function Gw(bb, wb, Mb) {
      return eb => {
        var Hb;
        if (!wb) return [];
        const pb = null === (Hb = eb.selection.gF[0]) || void 0 === Hb ? void 0 : Hb.head;
        if (void 0 === pb) return [];
        const Vb = bb.languageService.getSignatureHelpItems(Mb, pb, {});
        if (!Vb || !Vb.items.length) return [];
        const gb = Vb.applicableSpan.start - Vb.items[0].prefixDisplayParts.map((bb => bb.text)).join("").length,
          lb = Vb.applicableSpan.start,
          Lb = eb.doc.lineAt(pb),
          Ib = Lb.from,
          Ob = Math.min(Lb.to, pb);
        let Ub, tb;
        return gb < Ib ? (Ub = Ib, tb = Ob) : (Ub = gb, tb = lb), [{
          pos: Ub,
          end: tb,
          above: !1,
          create: Qw(Rw(Vb.items[0], Vb.argumentIndex))
        }]
      }
    }

    function qw(bb, wb) {
      return (Mb, eb, Hb) => {
        const pb = bb.languageService.getQuickInfoAtPosition(wb, eb);
        if (!pb) return [];
        const Vb = pb.textSpan.start,
          gb = pb.textSpan.start + pb.textSpan.length;
        if (eb < Vb || eb >= gb) return [];
        if (pb.kind === Eb().ScriptElementKind.memberFunctionElement || pb.kind === Eb().ScriptElementKind.variableElement && "declare" === pb.kindModifiers) {
          const bb = pb.displayParts.findIndex((bb => "space" === bb.kind)); - 1 !== bb && (pb.displayParts = pb.displayParts.slice(bb));
          const wb = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Mb = pb.displayParts.findIndex((bb => "punctuation" === bb.kind && "(" === bb.text)); - 1 !== Mb && (wb.prefixDisplayParts = pb.displayParts.slice(0, Mb + 1), pb.displayParts = pb.displayParts.slice(Mb + 1));
          const eb = pb.displayParts.findLastIndex((bb => "punctuation" === bb.kind && ")" === bb.text)); - 1 !== eb && (wb.suffixDisplayParts = pb.displayParts.slice(eb), pb.displayParts = pb.displayParts.slice(0, eb));
          let Hb = 0,
            lb = [];
          for (const Vb of pb.displayParts)
            if (jw.has(Vb.text) ? Hb++ : Kw.has(Vb.text) && Hb--, "lineBreak" !== Vb.kind) {
              if ("space" === Vb.kind) {
                if (0 === lb.length) continue;
                lb.push({
                  kind: "space",
                  text: " "
                })
              } else lb.push(Vb);
              0 === Hb && "," === Vb.text && (wb.parameters.push({
                displayParts: lb
              }), lb = [])
            } return lb.length > 0 && wb.parameters.push({
            displayParts: lb
          }), wb.documentation = pb.documentation, [{
            pos: Vb,
            end: gb,
            above: !0,
            create: Qw(Rw(wb))
          }]
        }
        const lb = [];
        for (const bb of pb.displayParts) lb.push({
          str: bb.text,
          style: {
            color: rw.text
          }
        });
        if (pb.documentation) {
          lb.push("\n\n");
          for (const bb of pb.documentation) lb.push({
            str: bb.text,
            style: {
              color: rw.docs
            }
          })
        }
        return [{
          pos: Vb,
          end: gb,
          above: !0,
          create: Qw(lb)
        }]
      }
    }
    const aw = {
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
      semicolons: Eb().SemicolonPreference.Insert
    };
    const iw = pb.d.define(),
      uw = {
        lineNumbers: !0,
        tabSize: 4
      };

    function dw(bb) {
      let {
        isLobbyCode: wb,
        code: Mb,
        onChange: gb,
        canEditCode: Ub,
        setTemporaryMessage: Cb,
        close: jb,
        showTooltips: ib,
        lightMode: ub,
        collabState: Pb,
        onRemoteDocChange: nb,
        files: yb,
        activePath: ob,
        pluginName: kb,
        pluginFile: bw,
        pluginSource: Mw,
        setActiveDocReplacer: ew,
        showAiHints: pw,
        canAiChangeCode: Vw = Ub
      } = bb;
      const [gw, lw] = (0, Vb.useState)(null), Lw = null === Pb || void 0 === Pb ? void 0 : Pb.version, Iw = null === Pb || void 0 === Pb ? void 0 : Pb.clientID, Ow = (0, Vb.useRef)({
        isLobbyCode: wb,
        files: yb,
        code: Mb,
        activePath: ob
      }), Uw = (0, Vb.useRef)(nb);
      Uw.current = nb;
      const tw = (0, Vb.useRef)(null),
        Cw = (0, Vb.useRef)(Pb);
      Cw.current = Pb;
      const Ew = (0, Vb.useRef)(null),
        sw = (0, Vb.useRef)(null),
        mw = (0, Vb.useRef)(null),
        hw = (0, Vb.useRef)(jb);
      hw.current = jb;
      const zw = (0, Vb.useRef)(Mb);
      zw.current = Mb;
      const jw = (0, Vb.useRef)(Mw);
      jw.current = Mw;
      const Kw = function(bb, wb, Mb, eb) {
        return Mb ? `/plugin-preview/${Mb}/${null!==eb&&void 0!==eb?eb:"index.ts"}` : bb ? Ww(null !== wb && void 0 !== wb ? wb : hb.j) : Aw
      }(wb, ob, kb, bw);
      (0, Vb.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: bb,
            files: wb,
            code: Mb,
            activePath: eb
          } = Ow.current, Hb = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Eb().ModuleKind.ESNext,
            moduleResolution: Eb().ModuleResolutionKind.Bundler,
            target: Eb().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(mb.e).map((bb => [bb.specifier, [bb.typesVfsPath]])))
            }
          }, pb = new Map, Vb = [];
          if (bb) {
            const bb = null !== wb && void 0 !== wb ? wb : {
              [hb.j]: Mb || "\n"
            };
            for (const [wb, Mb] of Object.entries(bb)) {
              const bb = Ww(wb);
              pb.set(bb, Mb || "\n"), Vb.push(bb)
            }
            const Hb = Ww(null !== eb && void 0 !== eb ? eb : hb.j);
            pb.has(Hb) ? pb.set(Hb, Mb || "\n") : (pb.set(Hb, Mb || "\n"), Vb.push(Hb)), pb.set("/node_modules/@bloxd/index.d.ts", Ib.default), Vb.push("/node_modules/@bloxd/index.d.ts");
            for (const wb of Object.values(mb.e)) {
              pb.set(wb.typesVfsPath, wb.types), Vb.push(wb.typesVfsPath);
              for (const [bb, Mb] of Object.entries(wb.files)) {
                const eb = `/plugin-preview/${wb.name}/${bb}`;
                pb.set(eb, Mb || "\n"), Vb.push(eb)
              }
            }
          } else pb.set(Aw, Mb || "\n"), Vb.push(Aw);
          pb.set("/globals.d.ts", bb ? Lb.b : lb.c), pb.set("/lib.d.ts", Ob.e), Vb.push("/globals.d.ts", "/lib.d.ts");
          const gb = tb.c(pb),
            Ub = tb.e(gb, Vb, Eb(), Hb);
          lw({
            OO: Ub,
            fsMap: pb
          })
        }()
      }), []), (0, Vb.useEffect)((() => {
        var bb, eb;
        if (!gw || !wb) return;
        const {
          OO: Hb,
          fsMap: pb
        } = gw;
        if (function(bb, wb, Mb) {
            const eb = new Set;
            for (const [Hb, pb] of Object.entries(Mb)) {
              const Mb = Ww(Hb);
              eb.add(Mb);
              const Vb = pb || "\n";
              wb.get(Mb) !== Vb && (wb.set(Mb, Vb), Jw(bb, Mb, Vb))
            }
            for (const Hb of [...wb.keys()]) "/globals.d.ts" === Hb || "/lib.d.ts" === Hb || Hb.startsWith("/node_modules/") || Hb.startsWith("/plugin-preview/") || eb.has(Hb) || (wb.delete(Hb), bb.getSourceFile(Hb) && bb.deleteFile(Hb))
          }(Hb, pb, null !== yb && void 0 !== yb ? yb : {
            [hb.j]: Mb || "\n"
          }), kb) return void Jw(Hb, Kw, Mw || "\n");
        const Vb = null !== (bb = null === (eb = tw.current) || void 0 === eb ? void 0 : eb.state.doc.toString()) && void 0 !== bb ? bb : Mb;
        Jw(Hb, Kw, Vb || "\n")
      }), [yb, ob, gw, kb, Mw, Kw, Mb, wb]), (0, Vb.useEffect)((() => {
        if (!gw) return;
        const {
          OO: bb
        } = gw;
        Jw(bb, Kw, (kb ? Mw : Mb) || "\n")
      }), [Mb, kb, Mw, Kw, gw]), (0, Vb.useEffect)((() => () => {
        sw.current && (sw.current(), sw.current = null)
      }), []), (0, Vb.useEffect)((() => (ew(((bb, wb) => {
        if (kb) return !1;
        const Mb = tw.current,
          eb = Cw.current,
          Hb = eb ? (0, zb.y)(eb.docKey) : null;
        if (!Mb || !eb || Ew.current !== eb.clientID || bb !== Hb) return !1;
        const pb = Mb.state.doc.toString();
        return pb !== wb && Mb.dispatch({
          changes: {
            from: 0,
            to: pb.length,
            insert: wb
          }
        }), !0
      })), () => {
        tw.current = null, Ew.current = null, ew(null)
      })), [ew, kb]);
      const rw = wb ? kb ? null : null !== ob && void 0 !== ob ? ob : hb.j : Bw.b,
        Rw = ww(tw, rw);
      Hw(tw, Cb), (0, xb.e)("FormatCode", (() => {
        if (!gw || !tw.current || kb) return;
        const {
          OO: bb,
          fsMap: Mb
        } = gw, eb = bb.getSourceFile(Kw).getFullText();
        let Hb = 0;
        if (wb && yb)
          for (const [wb, gb] of Object.entries(yb)) wb !== (null !== ob && void 0 !== ob ? ob : hb.j) && (Hb += gb.length);
        const pb = function(bb, wb, Mb, eb, Hb) {
          const pb = bb.languageService.getFormattingEditsForDocument(eb, aw);
          if (!pb.length) return Kb.d.error("Code is already formatted.");
          pb.sort(((bb, wb) => wb.span.start - bb.span.start));
          let Vb = bb.getSourceFile(eb).getFullText();
          for (const gb of pb) Vb = Vb.slice(0, gb.span.start) + gb.el + Vb.slice(gb.span.start + gb.span.length);
          return Vb !== (Mb ? (0, Xb.q)(Vb, Hb) : (0, Xb.n)(Vb)) ? Kb.d.error("Formatting the code will go beyond the character limit.") : Kb.d.value(Vb)
        }(bb, 0, wb, Kw, Hb);
        if (pb.isError()) return void Cb({
          message: pb.asError().message,
          type: "warning"
        });
        const Vb = pb.getValue();
        Vb && (tw.current.dispatch({
          changes: {
            from: 0,
            to: eb.length,
            insert: Vb
          },
          selection: {
            anchor: Vb.length
          }
        }), Jw(bb, Kw, Vb), gb(Vb))
      }));
      const Dw = (0, Vb.useMemo)((() => {
        if (!gw) return [];
        const {
          OO: bb,
          fsMap: Mb
        } = gw;
        ! function(bb, wb, Mb, eb) {
          if (bb.getSourceFile(Mb)) return;
          const Hb = eb || "\n";
          wb.set(Mb, Hb), bb.createFile(Mb, Hb)
        }(bb, Mb, Kw, (kb ? jw.current : zw.current) || "\n");
        const Vb = wb && Sw(kb ? null !== bw && void 0 !== bw ? bw : "index.ts" : ob),
          gb = [(0, Hb.b)({
            jsx: !1,
            typescript: Vb
          }), pb.c.highest(pb.b.domEventHandlers({
            keydown: bb => "Escape" === bb.key ? (hw.current(), bb.stopPropagation(), !0) : (bb.stopPropagation(), !1)
          })), (0, eb.e)({
            override: [vw(bb, Kw)]
          }), Db.n.fromClass(class {
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
                (0, Sb.ob)(this.view.state, bb) || (0, Sb.R)(this.view, bb, Nb) || this.scheduleParse()
              }), vb))
            }
          }), ...Tb, pb.b.lineWrapping, pb.f.define({
            create: Gw(bb, ib, Kw),
            update(wb, Mb) {
              const eb = Mb.effects.some((bb => bb.is(iw)));
              return Mb.docChanged || Mb.selection || eb ? (Jw(bb, Kw, Mb.state.doc.toString() || " "), Gw(bb, ib, Kw)(Mb.state)) : wb
            },
            provide: bb => pb.p.computeN([bb], (wb => wb.field(bb)))
          }), (0, pb.n)(qw(bb, Kw)), (0, Bb.g)(Nw(wb, bb, Kw)), pb.j.fromClass(class {
            constructor(bb) {
              this.view = bb, this.searchPanel = null
            }
            update(bb) {
              const wb = bb.view.dom.querySelector(".cm-search");
              if (wb !== this.searchPanel) {
                if (this.searchPanel = wb, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (bb => {
                  "Escape" === bb.key && (0, Fb.e)(this.view), bb.stopPropagation()
                }))
              }
            }
          })];
        pw && !kb && gb.push(Xw(wb ? null !== ob && void 0 !== ob ? ob : hb.j : Bw.b, Vw));
        const lb = Cw.current;
        if (lb && !kb) {
          gb.push(... function(bb, wb, Mb, eb, Hb) {
            let pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Vb = (0, zb.y)(Mb),
              gb = Db.n.fromClass(class {
                constructor(bb) {
                  this.view = bb, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Zb.k.subscribe("codeCollab", (bb => {
                    bb.docKey === Vb && bb.type === zb.f.Updates && (bb.updates ? this.applyUpdates(bb.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(bb) {
                  const wb = JSON.parse(bb).map((bb => ({
                    clientID: bb.clientID,
                    changes: Rb.ChangeSet.fromJSON(bb.changes)
                  })));
                  wb.length > 0 && (this.view.dispatch((0, rb.i)(this.view.state, wb)), Hb && Hb(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(bb) {
                  pb && (bb.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const bb = (0, rb.m)(this.view.state);
                  if (this.pushing || !bb.length) return;
                  const wb = Date.now() - this.lastPushTime;
                  if (wb < Jb) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Jb - wb)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Ab);
                  const Mb = (0, rb.f)(this.view.state),
                    Hb = bb.map((bb => ({
                      clientID: bb.clientID,
                      changes: bb.changes.toJSON()
                    }))),
                    pb = JSON.stringify(Hb);
                  pb.length <= zb.j ? cb.gameBridge.send("sendCodeCollab", {
                    DM: zb.c.Push,
                    cM: Vb,
                    YM: Mb,
                    AM: pb
                  }) : (0, fb.postJsonWithMetricsCookiesAndJsonResponse)(`${eb.gsUrl}/code/collab-push`, Yb.m["collab-push"].toBuffer({
                    gameNameWithVariation: eb.gameNameWithVariation,
                    lobbyName: eb.lobbyName,
                    docKey: Vb,
                    version: Mb,
                    updates: pb
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
                  const bb = (0, rb.f)(this.view.state);
                  (0, fb.postJsonWithMetricsCookiesAndJsonResponse)(`${eb.gsUrl}/code/collab-pull`, Yb.m["collab-pull"].toBuffer({
                    gameNameWithVariation: eb.gameNameWithVariation,
                    lobbyName: eb.lobbyName,
                    docKey: Vb,
                    fromVersion: bb
                  }), {
                    retries: 1
                  }).then((bb => {
                    this.destroyed || (bb.fullDoc ? Zb.k.iI("codeCollabRejoin", {
                      docKey: Vb,
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
                  if (bb - this.lastCursorSent < Wb) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Wb)));
                  this.lastCursorSent = bb;
                  const wb = this.view.state.selection.main;
                  cb.gameBridge.send("sendCodeCollab", {
                    DM: zb.c.Cursor,
                    cM: Vb,
                    NM: wb.anchor,
                    vM: wb.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Zb.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, rb.b)({
              startVersion: bb,
              clientID: wb
            }), gb]
          }(Lw, Iw, lb.docKey, lb.httpConfig, (bb => {
            var wb;
            null === (wb = Uw.current) || void 0 === wb || wb.call(Uw, bb)
          }), Ub));
          const bb = function(bb, wb) {
            const Mb = (0, zb.y)(bb);
            return {
              extensions: [db],
              connect(bb) {
                if (wb) {
                  const Mb = wb.map((bb => Gb.of({
                    playerId: bb.playerId,
                    playerName: bb.playerName,
                    colour: bb.colour,
                    anchor: bb.anchor,
                    head: bb.head,
                    lastMoved: Date.now()
                  })));
                  Mb.length > 0 && bb.dispatch({
                    effects: Mb
                  })
                }
                const eb = Zb.k.subscribe("codeCollab", (wb => {
                    if (wb.docKey === Mb)
                      if (wb.type === zb.f.RemoteCursor) bb.dispatch({
                        effects: Gb.of({
                          playerId: wb.playerId,
                          playerName: wb.playerName,
                          colour: wb.colour,
                          anchor: wb.anchor,
                          head: wb.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (wb.type === zb.f.Presence) {
                      const Mb = JSON.parse(wb.peers),
                        eb = new Set(Mb.map((bb => bb.playerId))),
                        Hb = bb.state.field(db),
                        pb = [];
                      for (const [bb] of Hb.cursors) eb.has(bb) || pb.push(qb.of(bb));
                      pb.length > 0 && bb.dispatch({
                        effects: pb
                      })
                    }
                  })),
                  Hb = setInterval((() => {
                    bb.dom.isConnected ? bb.dispatch({
                      effects: ab.of(Date.now())
                    }) : clearInterval(Hb)
                  }), Qb);
                return () => {
                  Zb.k.unsubscribe(eb), clearInterval(Hb)
                }
              }
            }
          }(lb.docKey, lb.existingCursors);
          gb.push(...bb.extensions), mw.current = bb.connect
        } else mw.current = null;
        return gb
      }), [wb, gw, ib, Lw, Iw, Kw, ob, kb, bw, Ub, pw, Vw]);
      if (!gw || !Pb && !kb) return (0, xw.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, xw.jsx)(sb.c, {})
      });
      const Yw = kb ? `plugin-${kb}-${null!==bw&&void 0!==bw?bw:"index.ts"}` : Pb ? `collab-${Pb.clientID}` : `local-${wb}`;
      return (0, xw.jsx)(pb.l, {
        value: kb ? null !== Mw && void 0 !== Mw ? Mw : "" : Mb,
        onChange: gb,
        extensions: Dw,
        className: "CodeEditorContent",
        theme: ub ? Fw : "dark",
        editable: Ub && !kb,
        basicSetup: uw,
        onCreateEditor: bb => {
          var wb;
          tw.current = bb, Ew.current = null !== (wb = null === Pb || void 0 === Pb ? void 0 : Pb.clientID) && void 0 !== wb ? wb : null, Rw(bb), sw.current && sw.current(), mw.current && (sw.current = mw.current(bb))
        }
      }, Yw)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);