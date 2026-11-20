export const id = 283;
export const ids = [283];
export const modules = {
  40726: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => oc
    });
    var kb = sb(40733),
      Wb = sb(40780),
      ab = sb(40784),
      Tb = sb(64),
      Ub = sb(89),
      Ib = sb(40794),
      Hb = sb(40801),
      fb = sb(4482),
      Mb = sb(40804),
      Xb = sb(1839),
      nb = sb(40810),
      mb = sb(40826),
      lb = sb.n(mb),
      Qb = sb(40787),
      eb = sb(40792),
      Cb = sb(1327),
      Nb = sb(36425),
      Vb = sb(1253),
      Lb = sb(36434),
      ub = sb(36351),
      Yb = sb(1423),
      hb = sb(628),
      Jb = sb(1255),
      gb = sb(40870),
      Bb = sb(40738),
      tb = sb(40744),
      yb = sb(1870),
      Pb = sb(3565),
      Db = sb(26),
      Eb = sb(1126);
    const ib = 1e4,
      Ob = 250,
      Gb = 250;
    var Kb = sb(40763);
    const Zb = 50,
      zb = 100;
    const qb = 2e3,
      db = Bb.F.define(),
      Ab = Bb.F.define(),
      wb = Bb.F.define();
    class rb extends tb.p {
      constructor(bb, cb, sb) {
        super(), this.colour = bb, this.playerName = cb, this.showName = sb
      }
      toDOM() {
        const bb = document.createElement("span");
        bb.className = "cm-remote-cursor-wrapper", bb.style.borderLeftColor = this.colour;
        const cb = document.createElement("span");
        if (cb.className = "cm-remote-cursor", cb.style.borderLeftColor = this.colour, bb.appendChild(cb), this.showName) {
          const cb = document.createElement("span");
          cb.className = "cm-remote-cursor-name", cb.style.backgroundColor = this.colour, cb.textContent = this.playerName, bb.appendChild(cb)
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

    function ob(bb, cb) {
      const sb = [],
        kb = [];
      for (const [, Tb] of bb) {
        const bb = cb - Tb.lastMoved < qb;
        if (sb.push({
            pos: Tb.head,
            decoration: tb.e.widget({
              widget: new rb(Tb.colour, Tb.playerName, bb),
              side: 1
            })
          }), Tb.anchor !== Tb.head) {
          const bb = Math.min(Tb.anchor, Tb.head),
            cb = Math.max(Tb.anchor, Tb.head);
          kb.push({
            from: bb,
            to: cb,
            decoration: tb.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Tb.colour}33`
              }
            })
          })
        }
      }
      const Wb = new Bb.w,
        ab = [];
      for (const Tb of sb) ab.push({
        bias: 1,
        deco: Tb.decoration,
        from: Tb.pos,
        to: Tb.pos
      });
      for (const Tb of kb) ab.push({
        bias: 0,
        deco: Tb.decoration,
        from: Tb.from,
        to: Tb.to
      });
      ab.sort(((bb, cb) => bb.from - cb.from || bb.deco.startSide - cb.deco.startSide || bb.bias - cb.bias));
      for (const Tb of ab) Wb.add(Tb.from, Tb.to, Tb.deco);
      return Wb.finish()
    }
    const Sb = Bb.H.define({
      create: () => ({
        cursors: new Map,
        aW: tb.e.none
      }),
      update(bb, cb) {
        let sb = bb.cursors,
          kb = !1;
        if (cb.docChanged) {
          const bb = new Map;
          for (const [kb, Wb] of sb) bb.set(kb, {
            ...Wb,
            anchor: cb.changes.mapPos(Wb.anchor, 1),
            head: cb.changes.mapPos(Wb.head, 1)
          });
          sb = bb, kb = !0
        }
        for (const Wb of cb.effects)
          if (Wb.is(db)) {
            if (!Number.isInteger(Wb.value.anchor) || !Number.isInteger(Wb.value.head)) {
              console.warn(`Code Editor: ignored player ${Wb.value.playerId}'s cursor at ${Wb.value.anchor}-${Wb.value.head}`);
              continue
            }
            const ab = cb.state.doc.length,
              Tb = {
                ...Wb.value,
                anchor: Math.min(Wb.value.anchor, ab),
                head: Math.min(Wb.value.head, ab)
              };
            sb === bb.cursors && (sb = new Map(sb)), sb.set(Tb.playerId, Tb), kb = !0
          } else Wb.is(Ab) ? sb.has(Wb.value) && (sb === bb.cursors && (sb = new Map(sb)), sb.delete(Wb.value), kb = !0) : Wb.is(wb) && (kb = !0);
        return kb ? {
          cursors: sb,
          aW: ob(sb, Date.now())
        } : bb
      },
      provide: bb => tb.h.aW.from(bb, (bb => bb.aW))
    });
    const Rb = Bb.F.define(),
      vb = tb.e.mark({
        class: "CodeInsertFlash"
      }),
      Fb = Bb.H.define({
        create: () => tb.e.none,
        update(bb, cb) {
          let sb = bb.map(cb.changes);
          for (const kb of cb.effects) kb.is(Rb) && (sb = kb.value ? tb.e.set(vb.range(kb.value.from, kb.value.to)) : tb.e.none);
          return sb
        },
        provide: bb => tb.h.aW.from(bb)
      }),
      xb = Bb.H.define({
        create: () => !1,
        update: (bb, cb) => bb || void 0 !== cb.annotation(Bb.O.userEvent) && !cb.annotation(Bb.O.remote)
      }),
      jb = [Fb, xb];

    function pb(bb) {
      return bb.field(xb)
    }
    const bc = 3e4;

    function cc(bb, cb) {
      const sb = (0, Tb.useRef)(null);
      (0, Tb.useEffect)((() => {
        var bb;
        (null === (bb = sb.current) || void 0 === bb ? void 0 : bb.path) !== cb && (sb.current = null)
      }), [cb]);
      const kb = bb => {
        var kb;
        const Wb = sb.current;
        if (null === bb || void 0 === bb || !bb.dom.isConnected || !Wb || Wb.path !== cb) return;
        sb.current = null;
        const {
          vn: Tb
        } = Wb;
        if (Tb && null !== Tb.text && performance.now() - Tb.at < bc) {
          const cb = function(bb, cb) {
            if (bb === cb) return null;
            const sb = Math.min(bb.length, cb.length);
            let kb = 0;
            for (; kb < sb && bb[kb] === cb[kb];) kb++;
            let Wb = 0;
            for (; Wb < sb - kb && bb[bb.length - 1 - Wb] === cb[cb.length - 1 - Wb];) Wb++;
            return {
              from: kb,
              to: bb.length - Wb,
              insert: cb.slice(kb, cb.length - Wb)
            }
          }(bb.state.doc.toString(), Tb.text);
          null !== cb && bb.dispatch({
            changes: cb,
            userEvent: Tb.placed ? "input" : void 0
          })
        }
        const {
          doc: Ub
        } = bb.state, Ib = Ub.line(Math.min(Math.max(Wb.line, 1), Ub.lines)), Hb = Ib.from + Math.min(null !== (kb = Wb.column) && void 0 !== kb ? kb : 0, Ib.length);
        bb.dispatch({
          selection: {
            anchor: Hb
          },
          effects: ab.e.scrollIntoView(Hb, {
            y: "center"
          }),
          userEvent: null !== Tb && void 0 !== Tb && Tb.placed ? "select" : void 0
        }), !1 !== (null === Tb || void 0 === Tb ? void 0 : Tb.focused) && bb.focus()
      };
      return (0, Yb.f)("CodeEditorGoToLine", (cb => {
        sb.current = cb, kb(bb.current)
      })), (0, Yb.f)("CodeEditorKeepEdits", (() => {
        const kb = bb.current;
        if (null === kb || !kb.dom.isConnected || null === cb) return;
        const {
          doc: Wb,
          selection: ab
        } = kb.state, {
          head: Tb
        } = ab.main, Ub = Wb.lineAt(Tb), Ib = {
          text: (0, gb.l)(kb.state).length > 0 ? Wb.toString() : null,
          at: performance.now(),
          focused: kb.hasFocus,
          placed: pb(kb.state)
        };
        sb.current = {
          path: cb,
          line: Ub.number,
          column: Tb - Ub.from,
          vn: Ib
        }
      })), bb => {
        var Wb;
        const ab = sb.current;
        !1 === (null === ab || void 0 === ab || null === (Wb = ab.vn) || void 0 === Wb ? void 0 : Wb.focused) && ab.path === cb || bb.focus(), kb(bb)
      }
    }
    var sc = sb(4124),
      kc = sb(1197);

    function Wc(bb, cb) {
      const {
        t: sb
      } = (0, kc.E)();
      (0, Yb.f)("CodeEditorInsertText", (kb => {
        let {
          text: Wb,
          focus: ab
        } = kb;
        const Tb = bb.current,
          Ub = null !== Tb && void 0 !== Tb && Tb.dom.isConnected ? function(bb, cb) {
            if (!pb(bb)) return null;
            const {
              from: sb,
              to: kb
            } = bb.selection.main, Wb = sb + cb.length;
            return {
              changes: {
                from: sb,
                to: kb,
                insert: cb
              },
              selection: {
                anchor: Wb
              },
              effects: [tb.h.scrollIntoView(Wb, {
                y: "center"
              }), Rb.of({
                from: sb,
                to: Wb
              })],
              userEvent: "input"
            }
          }(Tb.state, Wb) : null;
        null !== Tb && null !== Ub ? (Tb.dispatch(Ub), ab && Tb.focus(), setTimeout((() => {
          Tb.dom.isConnected && Tb.dispatch({
            effects: Rb.of(null)
          })
        }), 1500)) : (0, sc.b)(Wb).then((() => {
          cb({
            message: sb("codeEditorWorld:pickCopied", {
              coords: Wb
            }),
            type: "success"
          })
        }), (bb => {
          console.error("Pick could not copy the coordinates", bb), cb({
            message: sb("codeEditorWorld:pickPlaceCursor", {
              coords: Wb
            }),
            type: "warning"
          })
        }))
      }))
    }
    var ac = sb(40775);
    const Tc = "#e45649",
      Uc = "#383a42",
      Ic = "#696c77",
      Hc = "#986801",
      fc = "#e5e5e6",
      Mc = "#fafafa",
      Xc = "#eaeaeb",
      nc = "#526fff",
      mc = tb.h.theme({
        "&": {
          color: Uc,
          backgroundColor: Mc
        },
        ".cm-content": {
          caretColor: nc
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: nc
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Uc
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
          backgroundColor: Mc,
          color: Ic,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: fc
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Xc
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Xc,
          borderBottomColor: Xc
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: fc,
            color: Uc
          }
        }
      }, {
        dark: !1
      }),
      lc = Kb.d.define([{
        tag: ac.h.keyword,
        color: "#a626a4"
      }, {
        tag: [ac.h.name, ac.h.deleted, ac.h.character, ac.h.propertyName, ac.h.macroName],
        color: Tc
      }, {
        tag: [ac.h.function(ac.h.variableName), ac.h.labelName],
        color: "#4078f2"
      }, {
        tag: [ac.h.color, ac.h.constant(ac.h.name), ac.h.standard(ac.h.name)],
        color: Hc
      }, {
        tag: [ac.h.definition(ac.h.name), ac.h.separator],
        color: Uc
      }, {
        tag: [ac.h.typeName, ac.h.className, ac.h.number, ac.h.changed, ac.h.annotation, ac.h.modifier, ac.h.self, ac.h.namespace],
        color: "#c18401"
      }, {
        tag: [ac.h.operator, ac.h.operatorKeyword, ac.h.url, ac.h.escape, ac.h.regexp, ac.h.link, ac.h.special(ac.h.string)],
        color: "#0184bc"
      }, {
        tag: [ac.h.meta, ac.h.comment],
        color: Ic
      }, {
        tag: ac.h.strong,
        fontWeight: "bold"
      }, {
        tag: ac.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: ac.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: ac.h.link,
        color: Ic,
        textDecoration: "underline"
      }, {
        tag: ac.h.heading,
        fontWeight: "bold",
        color: Tc
      }, {
        tag: [ac.h.atom, ac.h.bool, ac.h.special(ac.h.variableName)],
        color: Hc
      }, {
        tag: [ac.h.processingInstruction, ac.h.string, ac.h.inserted],
        color: "#50a14f"
      }, {
        tag: ac.h.invalid,
        color: "#000000"
      }]),
      Qc = [mc, (0, Kb.ib)(lc)];
    var ec = sb(36479),
      Cc = sb(40877);
    const Nc = ab.j.define(),
      Vc = ab.n.define({
        create: () => !1,
        update(bb, cb) {
          for (const sb of cb.effects) sb.is(Nc) && (bb = sb.value);
          return bb
        }
      }),
      Lc = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function uc(bb, cb) {
      return [Vc, ab.r.fromClass(class {
        constructor(bb) {
          this.view = bb, this.onDown = bb => {
            const cb = bb.target instanceof Element && null !== bb.target.closest(".cm-tooltip");
            0 !== bb.button || cb || this.view.state.field(Vc) || this.view.dispatch({
              effects: Nc.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Vc) && this.view.dispatch({
              effects: Nc.of(!1)
            })
          }, bb.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), ab.y.compute(["selection", Vc], (sb => function(bb, cb, sb) {
        const kb = bb.selection.main;
        return kb.empty || bb.field(Vc) || bb.sliceDoc(kb.from, kb.to).trim().length < 2 ? null : {
          pos: kb.from,
          above: !0,
          create: bb => {
            const kb = document.createElement("div");
            kb.className = "CodeSelectionActions", kb.setAttribute("role", "toolbar"), kb.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Wb,
                label: ab
              }
              of Lc) {
              if (!sb && "explain" !== Wb) continue;
              const Tb = document.createElement("button");
              Tb.type = "button", Tb.textContent = ab, "change" !== Wb && (Tb.title = Cc.d, Tb.dataset.asksAi = "true"), Tb.addEventListener("mousedown", (bb => {
                bb.preventDefault()
              })), Tb.addEventListener("click", (() => {
                const sb = bb.state.selection.main;
                if (sb.empty) return;
                const kb = {
                  action: Wb,
                  path: cb,
                  fromLine: bb.state.doc.lineAt(sb.from).number,
                  toLine: bb.state.doc.lineAt(sb.to > sb.from && bb.state.doc.lineAt(sb.to).from === sb.to ? sb.to - 1 : sb.to).number,
                  text: bb.state.sliceDoc(sb.from, sb.to)
                };
                Db.j.QQ("WorldCodeAiSelection", kb), bb.dispatch({
                  selection: {
                    anchor: sb.to
                  }
                })
              })), kb.appendChild(Tb)
            }
            return {
              dom: kb
            }
          }
        }
      }(sb, bb, cb)))]
    }
    var Yc = sb(1087);
    const hc = new Set(["(", "{", "[", "<"]),
      Jc = new Set([")", "}", "]", ">"]),
      gc = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Bc(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function sb(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = [];
        for (const Wb of bb) {
          let bb;
          bb = "punctuation" === Wb.kind ? gc.text : "parameterName" === Wb.kind ? gc.parameterName : cb, kb.push({
            str: Wb.text,
            style: {
              color: bb,
              opacity: sb ? .5 : void 0
            }
          })
        }
        return kb
      }
      const kb = [];
      if (kb.push(...sb(bb.prefixDisplayParts, gc.text)), bb.parameters.length > 0) {
        kb.push("\n");
        for (let Wb = 0; Wb < bb.parameters.length; Wb++) {
          const ab = bb.parameters[Wb];
          kb.push("\t"), kb.push(...sb(ab.displayParts, gc.parameter, null !== cb && Wb !== cb)), kb.push("\n")
        }
      }
      return kb.push(...sb(bb.suffixDisplayParts, gc.suffix)), bb.documentation && (kb.push("\n\n"), kb.push(...sb(bb.documentation, gc.docs))), kb
    }
    var tc = function(bb) {
      return bb[bb.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", bb[bb.DuplicateIdentifier = 2300] = "DuplicateIdentifier", bb
    }(tc || {});
    const yc = new Set([tc.DuplicateIdentifier]),
      Pc = new Set([tc.VariableDefinedElsewhere]),
      Dc = new Set([]),
      Ec = "/index.js";

    function ic(bb) {
      return "/" + bb
    }

    function Oc(bb, cb, sb) {
      bb.getSourceFile(cb) && bb.deleteFile(cb), bb.createFile(cb, sb)
    }

    function Gc(bb) {
      return !!bb && ((0, Lb.o)(bb) || (0, Lb.l)(bb))
    }

    function Kc(bb, cb, sb) {
      return () => {
        let kb = [...cb.languageService.getSemanticDiagnostics(sb), ...cb.languageService.getSyntacticDiagnostics(sb)];
        return kb = kb.filter((bb => !(0, hb.L)(bb.start) && !(0, hb.L)(bb.length) && !yc.has(bb.code))), bb || (kb = kb.filter((bb => !Pc.has(bb.code)))), kb.map((bb => ({
          from: bb.start,
          to: bb.start + bb.length,
          message: "string" === typeof bb.messageText ? bb.messageText : bb.messageText.messageText,
          severity: Dc.has(bb.code) ? "warning" : "error"
        })))
      }
    }

    function Zc(bb, cb) {
      return sb => {
        var kb, Wb;
        const ab = bb.languageService.getCompletionsAtPosition(cb, sb.pos, {});
        if (!ab) return {
          from: sb.pos,
          options: []
        };
        let Tb = null !== (kb = null === (Wb = ab.optionalReplacementSpan) || void 0 === Wb ? void 0 : Wb.start) && void 0 !== kb ? kb : sb.pos;
        if (!ab.optionalReplacementSpan) {
          const bb = sb.state.doc.sliceString(0, sb.pos);
          for (; Tb > 0 && /[\w$]/.test(bb[Tb - 1]);) Tb--
        }
        return ab.entries = ab.entries.filter((bb => bb.kind !== lb().ScriptElementKind.warning)), {
          from: Tb,
          options: ab.entries.map((kb => {
            var Wb, ab, Ub, Ib;
            const Hb = bb.languageService.getCompletionEntryDetails(cb, sb.pos, kb.name, {}, kb.source, {}, kb.data),
              fb = null !== (Wb = null === (ab = kb.replacementSpan) || void 0 === ab ? void 0 : ab.start) && void 0 !== Wb ? Wb : Tb,
              Mb = kb.replacementSpan ? kb.replacementSpan.start + kb.replacementSpan.length : sb.pos,
              Xb = null !== (Ub = kb.insertText) && void 0 !== Ub ? Ub : kb.name;
            return {
              label: kb.name,
              detail: null === Hb || void 0 === Hb ? void 0 : Hb.displayParts.map((bb => bb.text)).join(""),
              info: null === Hb || void 0 === Hb || null === (Ib = Hb.documentation) || void 0 === Ib ? void 0 : Ib.map((bb => bb.text)).join(""),
              apply: bb => {
                bb.dispatch({
                  changes: {
                    from: fb,
                    to: Mb,
                    insert: Xb
                  },
                  selection: {
                    anchor: fb + Xb.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function zc(bb) {
      return cb => {
        const sb = document.createElement("div");
        sb.className = "CodeEditorTooltip";
        let kb = !1;
        return queueMicrotask((() => {
          kb || (Ub.render((0, Yc.jsx)(Xb.d, {
            text: bb
          }), sb), cb.requestMeasure())
        })), {
          dom: sb,
          destroy() {
            kb = !0, queueMicrotask((() => {
              Ub.unmountComponentAtNode(sb)
            }))
          }
        }
      }
    }

    function qc(bb, cb, sb) {
      return kb => {
        var Wb;
        if (!cb) return [];
        const ab = null === (Wb = kb.selection.uQ[0]) || void 0 === Wb ? void 0 : Wb.head;
        if (void 0 === ab) return [];
        const Tb = bb.languageService.getSignatureHelpItems(sb, ab, {});
        if (!Tb || !Tb.items.length) return [];
        const Ub = Tb.applicableSpan.start - Tb.items[0].prefixDisplayParts.map((bb => bb.text)).join("").length,
          Ib = Tb.applicableSpan.start,
          Hb = kb.doc.lineAt(ab),
          fb = Hb.from,
          Mb = Math.min(Hb.to, ab);
        let Xb, nb;
        return Ub < fb ? (Xb = fb, nb = Mb) : (Xb = Ub, nb = Ib), [{
          pos: Xb,
          end: nb,
          above: !1,
          create: zc(Bc(Tb.items[0], Tb.argumentIndex))
        }]
      }
    }

    function dc(bb, cb) {
      return (sb, kb, Wb) => {
        const ab = bb.languageService.getQuickInfoAtPosition(cb, kb);
        if (!ab) return [];
        const Tb = ab.textSpan.start,
          Ub = ab.textSpan.start + ab.textSpan.length;
        if (kb < Tb || kb >= Ub) return [];
        if (ab.kind === lb().ScriptElementKind.memberFunctionElement || ab.kind === lb().ScriptElementKind.variableElement && "declare" === ab.kindModifiers) {
          const bb = ab.displayParts.findIndex((bb => "space" === bb.kind)); - 1 !== bb && (ab.displayParts = ab.displayParts.slice(bb));
          const cb = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            sb = ab.displayParts.findIndex((bb => "punctuation" === bb.kind && "(" === bb.text)); - 1 !== sb && (cb.prefixDisplayParts = ab.displayParts.slice(0, sb + 1), ab.displayParts = ab.displayParts.slice(sb + 1));
          const kb = ab.displayParts.findLastIndex((bb => "punctuation" === bb.kind && ")" === bb.text)); - 1 !== kb && (cb.suffixDisplayParts = ab.displayParts.slice(kb), ab.displayParts = ab.displayParts.slice(0, kb));
          let Wb = 0,
            Ib = [];
          for (const Tb of ab.displayParts)
            if (hc.has(Tb.text) ? Wb++ : Jc.has(Tb.text) && Wb--, "lineBreak" !== Tb.kind) {
              if ("space" === Tb.kind) {
                if (0 === Ib.length) continue;
                Ib.push({
                  kind: "space",
                  text: " "
                })
              } else Ib.push(Tb);
              0 === Wb && "," === Tb.text && (cb.parameters.push({
                displayParts: Ib
              }), Ib = [])
            } return Ib.length > 0 && cb.parameters.push({
            displayParts: Ib
          }), cb.documentation = ab.documentation, [{
            pos: Tb,
            end: Ub,
            above: !0,
            create: zc(Bc(cb))
          }]
        }
        const Ib = [];
        for (const bb of ab.displayParts) Ib.push({
          str: bb.text,
          style: {
            color: gc.text
          }
        });
        if (ab.documentation) {
          Ib.push("\n\n");
          for (const bb of ab.documentation) Ib.push({
            str: bb.text,
            style: {
              color: gc.docs
            }
          })
        }
        return [{
          pos: Tb,
          end: Ub,
          above: !0,
          create: zc(Ib)
        }]
      }
    }
    const Ac = {
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
      semicolons: lb().SemicolonPreference.Insert
    };
    const wc = ab.j.define(),
      rc = {
        lineNumbers: !0,
        tabSize: 4
      };

    function oc(bb) {
      let {
        isLobbyCode: cb,
        code: sb,
        onChange: Ub,
        canEditCode: Xb,
        setTemporaryMessage: mb,
        close: hb,
        showTooltips: rb,
        lightMode: ob,
        collabState: Rb,
        onRemoteDocChange: vb,
        files: Fb,
        activePath: xb,
        pluginName: pb,
        pluginFile: bc,
        pluginSource: sc,
        setActiveDocReplacer: kc,
        showAiHints: ac,
        canAiChangeCode: Tc = Xb
      } = bb;
      const [Uc, Ic] = (0, Tb.useState)(null), Hc = null === Rb || void 0 === Rb ? void 0 : Rb.version, fc = null === Rb || void 0 === Rb ? void 0 : Rb.clientID, Mc = (0, Tb.useRef)({
        isLobbyCode: cb,
        files: Fb,
        code: sb,
        activePath: xb
      }), Xc = (0, Tb.useRef)(vb);
      Xc.current = vb;
      const nc = (0, Tb.useRef)(null),
        mc = (0, Tb.useRef)(Rb);
      mc.current = Rb;
      const lc = (0, Tb.useRef)(null),
        Cc = (0, Tb.useRef)(null),
        Nc = (0, Tb.useRef)(null),
        Vc = (0, Tb.useRef)(hb);
      Vc.current = hb;
      const Lc = (0, Tb.useRef)(sb);
      Lc.current = sb;
      const hc = (0, Tb.useRef)(sc);
      hc.current = sc;
      const Jc = function(bb, cb, sb, kb) {
        return sb ? `/plugin-preview/${sb}/${null!==kb&&void 0!==kb?kb:"index.ts"}` : bb ? ic(null !== cb && void 0 !== cb ? cb : Vb.f) : Ec
      }(cb, xb, pb, bc);
      (0, Tb.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: bb,
            files: cb,
            code: sb,
            activePath: kb
          } = Mc.current, Wb = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: lb().ModuleKind.ESNext,
            moduleResolution: lb().ModuleResolutionKind.Bundler,
            target: lb().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Nb.i).map((bb => [bb.specifier, [bb.typesVfsPath]])))
            }
          }, ab = new Map, Tb = [];
          if (bb) {
            const bb = null !== cb && void 0 !== cb ? cb : {
              [Vb.f]: sb || "\n"
            };
            for (const [cb, sb] of Object.entries(bb)) {
              const bb = ic(cb);
              ab.set(bb, sb || "\n"), Tb.push(bb)
            }
            const Wb = ic(null !== kb && void 0 !== kb ? kb : Vb.f);
            ab.has(Wb) ? ab.set(Wb, sb || "\n") : (ab.set(Wb, sb || "\n"), Tb.push(Wb)), ab.set("/node_modules/@bloxd/index.d.ts", fb.default), Tb.push("/node_modules/@bloxd/index.d.ts");
            for (const cb of Object.values(Nb.i)) {
              ab.set(cb.typesVfsPath, cb.types), Tb.push(cb.typesVfsPath);
              for (const [bb, sb] of Object.entries(cb.files)) {
                const kb = `/plugin-preview/${cb.name}/${bb}`;
                ab.set(kb, sb || "\n"), Tb.push(kb)
              }
            }
          } else ab.set(Ec, sb || "\n"), Tb.push(Ec);
          ab.set("/globals.d.ts", bb ? Hb.e : Ib.e), ab.set("/lib.d.ts", Mb.e), Tb.push("/globals.d.ts", "/lib.d.ts");
          const Ub = nb.c(ab),
            Xb = nb.d(Ub, Tb, lb(), Wb);
          Ic({
            YQ: Xb,
            fsMap: ab
          })
        }()
      }), []), (0, Tb.useEffect)((() => {
        var bb, kb;
        if (!Uc || !cb) return;
        const {
          YQ: Wb,
          fsMap: ab
        } = Uc;
        if (function(bb, cb, sb) {
            const kb = new Set;
            for (const [Wb, ab] of Object.entries(sb)) {
              const sb = ic(Wb);
              kb.add(sb);
              const Tb = ab || "\n";
              cb.get(sb) !== Tb && (cb.set(sb, Tb), Oc(bb, sb, Tb))
            }
            for (const Wb of [...cb.keys()]) "/globals.d.ts" === Wb || "/lib.d.ts" === Wb || Wb.startsWith("/node_modules/") || Wb.startsWith("/plugin-preview/") || kb.has(Wb) || (cb.delete(Wb), bb.getSourceFile(Wb) && bb.deleteFile(Wb))
          }(Wb, ab, null !== Fb && void 0 !== Fb ? Fb : {
            [Vb.f]: sb || "\n"
          }), pb) return void Oc(Wb, Jc, sc || "\n");
        const Tb = null !== (bb = null === (kb = nc.current) || void 0 === kb ? void 0 : kb.state.doc.toString()) && void 0 !== bb ? bb : sb;
        Oc(Wb, Jc, Tb || "\n")
      }), [Fb, xb, Uc, pb, sc, Jc, sb, cb]), (0, Tb.useEffect)((() => {
        if (!Uc) return;
        const {
          YQ: bb
        } = Uc;
        Oc(bb, Jc, (pb ? sc : sb) || "\n")
      }), [sb, pb, sc, Jc, Uc]), (0, Tb.useEffect)((() => () => {
        Cc.current && (Cc.current(), Cc.current = null)
      }), []), (0, Tb.useEffect)((() => (kc(((bb, cb) => {
        if (pb) return !1;
        const sb = nc.current,
          kb = mc.current,
          Wb = kb ? (0, Lb.v)(kb.docKey) : null;
        if (!sb || !kb || lc.current !== kb.clientID || bb !== Wb) return !1;
        const ab = sb.state.doc.toString();
        return ab !== cb && sb.dispatch({
          changes: {
            from: 0,
            to: ab.length,
            insert: cb
          }
        }), !0
      })), () => {
        nc.current = null, lc.current = null, kc(null)
      })), [kc, pb]);
      const gc = cb ? pb ? null : null !== xb && void 0 !== xb ? xb : Vb.f : ec.d,
        Bc = cc(nc, gc);
      Wc(nc, mb), (0, Yb.f)("FormatCode", (() => {
        if (!Uc || !nc.current || pb) return;
        const {
          YQ: bb,
          fsMap: sb
        } = Uc, kb = bb.getSourceFile(Jc).getFullText();
        let Wb = 0;
        if (cb && Fb)
          for (const [cb, Ub] of Object.entries(Fb)) cb !== (null !== xb && void 0 !== xb ? xb : Vb.f) && (Wb += Ub.length);
        const ab = function(bb, cb, sb, kb, Wb) {
          const ab = bb.languageService.getFormattingEditsForDocument(kb, Ac);
          if (!ab.length) return Jb.d.error("Code is already formatted.");
          ab.sort(((bb, cb) => cb.span.start - bb.span.start));
          let Tb = bb.getSourceFile(kb).getFullText();
          for (const Ub of ab) Tb = Tb.slice(0, Ub.span.start) + Ub.OT + Tb.slice(Ub.span.start + Ub.span.length);
          return Tb !== (sb ? (0, ub.l)(Tb, Wb) : (0, ub.i)(Tb)) ? Jb.d.error("Formatting the code will go beyond the character limit.") : Jb.d.value(Tb)
        }(bb, 0, cb, Jc, Wb);
        if (ab.isError()) return void mb({
          message: ab.asError().message,
          type: "warning"
        });
        const Tb = ab.getValue();
        Tb && (nc.current.dispatch({
          changes: {
            from: 0,
            to: kb.length,
            insert: Tb
          },
          selection: {
            anchor: Tb.length
          }
        }), Oc(bb, Jc, Tb), Ub(Tb))
      }));
      const tc = (0, Tb.useMemo)((() => {
        if (!Uc) return [];
        const {
          YQ: bb,
          fsMap: sb
        } = Uc;
        ! function(bb, cb, sb, kb) {
          if (bb.getSourceFile(sb)) return;
          const Wb = kb || "\n";
          cb.set(sb, Wb), bb.createFile(sb, Wb)
        }(bb, sb, Jc, (pb ? hc.current : Lc.current) || "\n");
        const Tb = cb && Gc(pb ? null !== bc && void 0 !== bc ? bc : "index.ts" : xb),
          Ub = [(0, Wb.d)({
            jsx: !1,
            typescript: Tb
          }), ab.g.highest(ab.e.domEventHandlers({
            keydown: bb => "Escape" === bb.key ? (Vc.current(), bb.stopPropagation(), !0) : (bb.stopPropagation(), !1)
          })), (0, kb.c)({
            override: [Zc(bb, Jc)]
          }), tb.m.fromClass(class {
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
                (0, Kb.jb)(this.view.state, bb) || (0, Kb.Q)(this.view, bb, Zb) || this.scheduleParse()
              }), zb))
            }
          }), ...jb, ab.e.lineWrapping, ab.n.define({
            create: qc(bb, rb, Jc),
            update(cb, sb) {
              const kb = sb.effects.some((bb => bb.is(wc)));
              return sb.docChanged || sb.selection || kb ? (Oc(bb, Jc, sb.state.doc.toString() || " "), qc(bb, rb, Jc)(sb.state)) : cb
            },
            provide: bb => ab.y.computeN([bb], (cb => cb.field(bb)))
          }), (0, ab.u)(dc(bb, Jc)), (0, eb.d)(Kc(cb, bb, Jc)), ab.r.fromClass(class {
            constructor(bb) {
              this.view = bb, this.searchPanel = null
            }
            update(bb) {
              const cb = bb.view.dom.querySelector(".cm-search");
              if (cb !== this.searchPanel) {
                if (this.searchPanel = cb, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (bb => {
                  "Escape" === bb.key && (0, Qb.e)(this.view), bb.stopPropagation()
                }))
              }
            }
          })];
        ac && !pb && Ub.push(uc(cb ? null !== xb && void 0 !== xb ? xb : Vb.f : ec.d, Tc));
        const Ib = mc.current;
        if (Ib && !pb) {
          Ub.push(... function(bb, cb, sb, kb, Wb) {
            let ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Tb = (0, Lb.v)(sb),
              Ub = tb.m.fromClass(class {
                constructor(bb) {
                  this.view = bb, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Db.j.subscribe("codeCollab", (bb => {
                    bb.docKey === Tb && bb.type === Lb.e.Updates && (bb.updates ? this.applyUpdates(bb.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(bb) {
                  const cb = JSON.parse(bb).map((bb => ({
                    clientID: bb.clientID,
                    changes: Bb.ChangeSet.fromJSON(bb.changes)
                  })));
                  cb.length > 0 && (this.view.dispatch((0, gb.h)(this.view.state, cb)), Wb && Wb(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(bb) {
                  ab && (bb.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const bb = (0, gb.l)(this.view.state);
                  if (this.pushing || !bb.length) return;
                  const cb = Date.now() - this.lastPushTime;
                  if (cb < Gb) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Gb - cb)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), ib);
                  const sb = (0, gb.d)(this.view.state),
                    Wb = bb.map((bb => ({
                      clientID: bb.clientID,
                      changes: bb.changes.toJSON()
                    }))),
                    ab = JSON.stringify(Wb);
                  ab.length <= Lb.f ? yb.gameBridge.send("sendCodeCollab", {
                    Jc: Lb.b.Push,
                    gc: Tb,
                    Bc: sb,
                    Pc: ab
                  }) : (0, Eb.postJsonWithMetricsCookiesAndJsonResponse)(`${kb.gsUrl}/code/collab-push`, Pb.p["collab-push"].toBuffer({
                    gameNameWithVariation: kb.gameNameWithVariation,
                    lobbyName: kb.lobbyName,
                    docKey: Tb,
                    version: sb,
                    updates: ab
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
                  const bb = (0, gb.d)(this.view.state);
                  (0, Eb.postJsonWithMetricsCookiesAndJsonResponse)(`${kb.gsUrl}/code/collab-pull`, Pb.p["collab-pull"].toBuffer({
                    gameNameWithVariation: kb.gameNameWithVariation,
                    lobbyName: kb.lobbyName,
                    docKey: Tb,
                    fromVersion: bb
                  }), {
                    retries: 1
                  }).then((bb => {
                    this.destroyed || (bb.fullDoc ? Db.j.QQ("codeCollabRejoin", {
                      docKey: Tb,
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
                  if (bb - this.lastCursorSent < Ob) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Ob)));
                  this.lastCursorSent = bb;
                  const cb = this.view.state.selection.main;
                  yb.gameBridge.send("sendCodeCollab", {
                    Jc: Lb.b.Cursor,
                    gc: Tb,
                    Gc: cb.anchor,
                    Kc: cb.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Db.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, gb.c)({
              startVersion: bb,
              clientID: cb
            }), Ub]
          }(Hc, fc, Ib.docKey, Ib.httpConfig, (bb => {
            var cb;
            null === (cb = Xc.current) || void 0 === cb || cb.call(Xc, bb)
          }), Xb));
          const bb = function(bb, cb) {
            const sb = (0, Lb.v)(bb);
            return {
              extensions: [Sb],
              connect(bb) {
                if (cb) {
                  const sb = cb.map((bb => db.of({
                    playerId: bb.playerId,
                    playerName: bb.playerName,
                    colour: bb.colour,
                    anchor: bb.anchor,
                    head: bb.head,
                    lastMoved: Date.now()
                  })));
                  sb.length > 0 && bb.dispatch({
                    effects: sb
                  })
                }
                const kb = Db.j.subscribe("codeCollab", (cb => {
                    if (cb.docKey === sb)
                      if (cb.type === Lb.e.RemoteCursor) bb.dispatch({
                        effects: db.of({
                          playerId: cb.playerId,
                          playerName: cb.playerName,
                          colour: cb.colour,
                          anchor: cb.anchor,
                          head: cb.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (cb.type === Lb.e.Presence) {
                      const sb = JSON.parse(cb.peers),
                        kb = new Set(sb.map((bb => bb.playerId))),
                        Wb = bb.state.field(Sb),
                        ab = [];
                      for (const [bb] of Wb.cursors) kb.has(bb) || ab.push(Ab.of(bb));
                      ab.length > 0 && bb.dispatch({
                        effects: ab
                      })
                    }
                  })),
                  Wb = setInterval((() => {
                    bb.dom.isConnected ? bb.dispatch({
                      effects: wb.of(Date.now())
                    }) : clearInterval(Wb)
                  }), qb);
                return () => {
                  Db.j.unsubscribe(kb), clearInterval(Wb)
                }
              }
            }
          }(Ib.docKey, Ib.existingCursors);
          Ub.push(...bb.extensions), Nc.current = bb.connect
        } else Nc.current = null;
        return Ub
      }), [cb, Uc, rb, Hc, fc, Jc, xb, pb, bc, Xb, ac, Tc]);
      if (!Uc || !Rb && !pb) return (0, Yc.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Yc.jsx)(Cb.d, {})
      });
      const yc = pb ? `plugin-${pb}-${null!==bc&&void 0!==bc?bc:"index.ts"}` : Rb ? `collab-${Rb.clientID}` : `local-${cb}`;
      return (0, Yc.jsx)(ab.s, {
        value: pb ? null !== sc && void 0 !== sc ? sc : "" : sb,
        onChange: Ub,
        extensions: tc,
        className: "CodeEditorContent",
        theme: ob ? Qc : "dark",
        editable: Xb && !pb,
        basicSetup: rc,
        onCreateEditor: bb => {
          var cb;
          nc.current = bb, lc.current = null !== (cb = null === Rb || void 0 === Rb ? void 0 : Rb.clientID) && void 0 !== cb ? cb : null, Bc(bb), Cc.current && Cc.current(), Nc.current && (Cc.current = Nc.current(bb))
        }
      }, yc)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);