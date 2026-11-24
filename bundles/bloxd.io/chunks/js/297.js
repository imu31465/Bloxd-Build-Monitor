export const id = 297;
export const ids = [297];
export const modules = {
  41525: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Be
    });
    var Ot = Vt(41532),
      qt = Vt(41584),
      Dt = Vt(41591),
      mt = Vt(63),
      dt = Vt(83),
      jt = Vt(41600),
      Ht = Vt(41604),
      Xt = Vt(4935),
      Qt = Vt(41611),
      lt = Vt(2001),
      Et = Vt(41620),
      ft = Vt(41639),
      wt = Vt.n(ft),
      yt = Vt(41593),
      Nt = Vt(41598),
      Mt = Vt(1436),
      bt = Vt(37084),
      Jt = Vt(1325),
      Ct = Vt(2495),
      ut = Vt(36990),
      Kt = Vt(1554),
      ht = Vt(710),
      vt = Vt(1333),
      Wt = Vt(41701),
      St = Vt(41540),
      ct = Vt(41548),
      Rt = Vt(2024),
      It = Vt(3820),
      Pt = Vt(31),
      Zt = Vt(1223);
    const Lt = 1e4,
      Ft = 250,
      kt = 250;
    var Gt = Vt(41565);
    const zt = 50,
      ot = 100;
    const rt = 2e3,
      Ut = St.I.define(),
      At = St.I.define(),
      it = St.I.define();
    class Yt extends ct.r {
      constructor(tt, et, Vt) {
        super(), this.colour = tt, this.playerName = et, this.showName = Vt
      }
      toDOM() {
        const tt = document.createElement("span");
        tt.className = "cm-remote-cursor-wrapper", tt.style.borderLeftColor = this.colour;
        const et = document.createElement("span");
        if (et.className = "cm-remote-cursor", et.style.borderLeftColor = this.colour, tt.appendChild(et), this.showName) {
          const et = document.createElement("span");
          et.className = "cm-remote-cursor-name", et.style.backgroundColor = this.colour, et.textContent = this.playerName, tt.appendChild(et)
        }
        return tt
      }
      eq(tt) {
        return this.colour === tt.colour && this.playerName === tt.playerName && this.showName === tt.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function Bt(tt, et) {
      const Vt = [],
        Ot = [];
      for (const [, mt] of tt) {
        const tt = et - mt.lastMoved < rt;
        if (Vt.push({
            pos: mt.head,
            decoration: ct.e.widget({
              widget: new Yt(mt.colour, mt.playerName, tt),
              side: 1
            })
          }), mt.anchor !== mt.head) {
          const tt = Math.min(mt.anchor, mt.head),
            et = Math.max(mt.anchor, mt.head);
          Ot.push({
            from: tt,
            to: et,
            decoration: ct.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${mt.colour}33`
              }
            })
          })
        }
      }
      const qt = new St.x,
        Dt = [];
      for (const mt of Vt) Dt.push({
        bias: 1,
        deco: mt.decoration,
        from: mt.pos,
        to: mt.pos
      });
      for (const mt of Ot) Dt.push({
        bias: 0,
        deco: mt.decoration,
        from: mt.from,
        to: mt.to
      });
      Dt.sort(((tt, et) => tt.from - et.from || tt.deco.startSide - et.deco.startSide || tt.bias - et.bias));
      for (const mt of Dt) qt.add(mt.from, mt.to, mt.deco);
      return qt.finish()
    }
    const pt = St.J.define({
      create: () => ({
        cursors: new Map,
        NO: ct.e.none
      }),
      update(tt, et) {
        let Vt = tt.cursors,
          Ot = !1;
        if (et.docChanged) {
          const tt = new Map;
          for (const [Ot, qt] of Vt) tt.set(Ot, {
            ...qt,
            anchor: et.changes.mapPos(qt.anchor, 1),
            head: et.changes.mapPos(qt.head, 1)
          });
          Vt = tt, Ot = !0
        }
        for (const qt of et.effects)
          if (qt.is(Ut)) {
            if (!Number.isInteger(qt.value.anchor) || !Number.isInteger(qt.value.head)) {
              console.warn(`Code Editor: ignored player ${qt.value.playerId}'s cursor at ${qt.value.anchor}-${qt.value.head}`);
              continue
            }
            const Dt = et.state.doc.length,
              mt = {
                ...qt.value,
                anchor: Math.min(qt.value.anchor, Dt),
                head: Math.min(qt.value.head, Dt)
              };
            Vt === tt.cursors && (Vt = new Map(Vt)), Vt.set(mt.playerId, mt), Ot = !0
          } else qt.is(At) ? Vt.has(qt.value) && (Vt === tt.cursors && (Vt = new Map(Vt)), Vt.delete(qt.value), Ot = !0) : qt.is(it) && (Ot = !0);
        return Ot ? {
          cursors: Vt,
          NO: Bt(Vt, Date.now())
        } : tt
      },
      provide: tt => ct.j.NO.from(tt, (tt => tt.NO))
    });
    const xt = St.I.define(),
      Tt = ct.e.mark({
        class: "CodeInsertFlash"
      }),
      gt = St.J.define({
        create: () => ct.e.none,
        update(tt, et) {
          let Vt = tt.map(et.changes);
          for (const Ot of et.effects) Ot.is(xt) && (Vt = Ot.value ? ct.e.set(Tt.range(Ot.value.from, Ot.value.to)) : ct.e.none);
          return Vt
        },
        provide: tt => ct.j.NO.from(tt)
      }),
      st = St.J.define({
        create: () => !1,
        update: (tt, et) => tt || void 0 !== et.annotation(St.O.userEvent) && !et.annotation(St.O.remote)
      }),
      nt = [gt, st];

    function te(tt) {
      return tt.field(st)
    }
    const ee = 3e4;

    function Ve(tt, et) {
      const Vt = (0, mt.useRef)(null);
      (0, mt.useEffect)((() => {
        var tt;
        (null === (tt = Vt.current) || void 0 === tt ? void 0 : tt.path) !== et && (Vt.current = null)
      }), [et]);
      const Ot = tt => {
        var Ot;
        const qt = Vt.current;
        if (null === tt || void 0 === tt || !tt.dom.isConnected || !qt || qt.path !== et) return;
        Vt.current = null;
        const {
          hE: mt
        } = qt;
        if (mt && null !== mt.text && performance.now() - mt.at < ee) {
          const et = function(tt, et) {
            if (tt === et) return null;
            const Vt = Math.min(tt.length, et.length);
            let Ot = 0;
            for (; Ot < Vt && tt[Ot] === et[Ot];) Ot++;
            let qt = 0;
            for (; qt < Vt - Ot && tt[tt.length - 1 - qt] === et[et.length - 1 - qt];) qt++;
            return {
              from: Ot,
              to: tt.length - qt,
              insert: et.slice(Ot, et.length - qt)
            }
          }(tt.state.doc.toString(), mt.text);
          null !== et && tt.dispatch({
            changes: et,
            userEvent: mt.placed ? "input" : void 0
          })
        }
        const {
          doc: dt
        } = tt.state, jt = dt.line(Math.min(Math.max(qt.line, 1), dt.lines)), Ht = jt.from + Math.min(null !== (Ot = qt.column) && void 0 !== Ot ? Ot : 0, jt.length);
        tt.dispatch({
          selection: {
            anchor: Ht
          },
          effects: Dt.e.scrollIntoView(Ht, {
            y: "center"
          }),
          userEvent: null !== mt && void 0 !== mt && mt.placed ? "select" : void 0
        }), !1 !== (null === mt || void 0 === mt ? void 0 : mt.focused) && tt.focus()
      };
      return (0, Kt.f)("CodeEditorGoToLine", (et => {
        Vt.current = et, Ot(tt.current)
      })), (0, Kt.f)("CodeEditorKeepEdits", (() => {
        const Ot = tt.current;
        if (null === Ot || !Ot.dom.isConnected || null === et) return;
        const {
          doc: qt,
          selection: Dt
        } = Ot.state, {
          head: mt
        } = Dt.main, dt = qt.lineAt(mt), jt = {
          text: (0, Wt.o)(Ot.state).length > 0 ? qt.toString() : null,
          at: performance.now(),
          focused: Ot.hasFocus,
          placed: te(Ot.state)
        };
        Vt.current = {
          path: et,
          line: dt.number,
          column: mt - dt.from,
          hE: jt
        }
      })), tt => {
        var qt;
        const Dt = Vt.current;
        !1 === (null === Dt || void 0 === Dt || null === (qt = Dt.hE) || void 0 === qt ? void 0 : qt.focused) && Dt.path === et || tt.focus(), Ot(tt)
      }
    }
    var Oe = Vt(4472),
      qe = Vt(1286);

    function De(tt, et) {
      const {
        t: Vt
      } = (0, qe.H)();
      (0, Kt.f)("CodeEditorInsertText", (Ot => {
        let {
          text: qt,
          focus: Dt
        } = Ot;
        const mt = tt.current,
          dt = null !== mt && void 0 !== mt && mt.dom.isConnected ? function(tt, et) {
            if (!te(tt)) return null;
            const {
              from: Vt,
              to: Ot
            } = tt.selection.main, qt = Vt + et.length;
            return {
              changes: {
                from: Vt,
                to: Ot,
                insert: et
              },
              selection: {
                anchor: qt
              },
              effects: [ct.j.scrollIntoView(qt, {
                y: "center"
              }), xt.of({
                from: Vt,
                to: qt
              })],
              userEvent: "input"
            }
          }(mt.state, qt) : null;
        null !== mt && null !== dt ? (mt.dispatch(dt), Dt && mt.focus(), setTimeout((() => {
          mt.dom.isConnected && mt.dispatch({
            effects: xt.of(null)
          })
        }), 1500)) : (0, Oe.d)(qt).then((() => {
          et({
            message: Vt("codeEditorWorld:pickCopied", {
              coords: qt
            }),
            type: "success"
          })
        }), (tt => {
          console.error("Pick could not copy the coordinates", tt), et({
            message: Vt("codeEditorWorld:pickPlaceCursor", {
              coords: qt
            }),
            type: "warning"
          })
        }))
      }))
    }
    var me = Vt(41577);
    const de = "#e45649",
      je = "#383a42",
      He = "#696c77",
      Xe = "#986801",
      Qe = "#e5e5e6",
      le = "#fafafa",
      Ee = "#eaeaeb",
      fe = "#526fff",
      we = ct.j.theme({
        "&": {
          color: je,
          backgroundColor: le
        },
        ".cm-content": {
          caretColor: fe
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: fe
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: je
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
          backgroundColor: le,
          color: He,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Qe
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Ee
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Ee,
          borderBottomColor: Ee
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Qe,
            color: je
          }
        }
      }, {
        dark: !1
      }),
      ye = Gt.c.define([{
        tag: me.i.keyword,
        color: "#a626a4"
      }, {
        tag: [me.i.name, me.i.deleted, me.i.character, me.i.propertyName, me.i.macroName],
        color: de
      }, {
        tag: [me.i.function(me.i.variableName), me.i.labelName],
        color: "#4078f2"
      }, {
        tag: [me.i.color, me.i.constant(me.i.name), me.i.standard(me.i.name)],
        color: Xe
      }, {
        tag: [me.i.definition(me.i.name), me.i.separator],
        color: je
      }, {
        tag: [me.i.typeName, me.i.className, me.i.number, me.i.changed, me.i.annotation, me.i.modifier, me.i.self, me.i.namespace],
        color: "#c18401"
      }, {
        tag: [me.i.operator, me.i.operatorKeyword, me.i.url, me.i.escape, me.i.regexp, me.i.link, me.i.special(me.i.string)],
        color: "#0184bc"
      }, {
        tag: [me.i.meta, me.i.comment],
        color: He
      }, {
        tag: me.i.strong,
        fontWeight: "bold"
      }, {
        tag: me.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: me.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: me.i.link,
        color: He,
        textDecoration: "underline"
      }, {
        tag: me.i.heading,
        fontWeight: "bold",
        color: de
      }, {
        tag: [me.i.atom, me.i.bool, me.i.special(me.i.variableName)],
        color: Xe
      }, {
        tag: [me.i.processingInstruction, me.i.string, me.i.inserted],
        color: "#50a14f"
      }, {
        tag: me.i.invalid,
        color: "#000000"
      }]),
      Ne = [we, (0, Gt.gb)(ye)];
    var ae = Vt(37133),
      Me = Vt(41709);
    const be = Dt.j.define(),
      Je = Dt.n.define({
        create: () => !1,
        update(tt, et) {
          for (const Vt of et.effects) Vt.is(be) && (tt = Vt.value);
          return tt
        }
      }),
      Ce = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function ue(tt, et) {
      return [Je, Dt.p.fromClass(class {
        constructor(tt) {
          this.view = tt, this.onDown = tt => {
            const et = tt.target instanceof Element && null !== tt.target.closest(".cm-tooltip");
            0 !== tt.button || et || this.view.state.field(Je) || this.view.dispatch({
              effects: be.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Je) && this.view.dispatch({
              effects: be.of(!1)
            })
          }, tt.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Dt.w.compute(["selection", Je], (Vt => function(tt, et, Vt) {
        const Ot = tt.selection.main;
        return Ot.empty || tt.field(Je) || tt.sliceDoc(Ot.from, Ot.to).trim().length < 2 ? null : {
          pos: Ot.from,
          above: !0,
          create: tt => {
            const Ot = document.createElement("div");
            Ot.className = "CodeSelectionActions", Ot.setAttribute("role", "toolbar"), Ot.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: qt,
                label: Dt
              }
              of Ce) {
              if (!Vt && "explain" !== qt) continue;
              const mt = document.createElement("button");
              mt.type = "button", mt.textContent = Dt, "change" !== qt && (mt.title = Me.e, mt.dataset.asksAi = "true"), mt.addEventListener("mousedown", (tt => {
                tt.preventDefault()
              })), mt.addEventListener("click", (() => {
                const Vt = tt.state.selection.main;
                if (Vt.empty) return;
                const Ot = {
                  action: qt,
                  path: et,
                  fromLine: tt.state.doc.lineAt(Vt.from).number,
                  toLine: tt.state.doc.lineAt(Vt.to > Vt.from && tt.state.doc.lineAt(Vt.to).from === Vt.to ? Vt.to - 1 : Vt.to).number,
                  text: tt.state.sliceDoc(Vt.from, Vt.to)
                };
                Pt.j.sw("WorldCodeAiSelection", Ot), tt.dispatch({
                  selection: {
                    anchor: Vt.to
                  }
                })
              })), Ot.appendChild(mt)
            }
            return {
              dom: Ot
            }
          }
        }
      }(Vt, tt, et)))]
    }
    var Ke = Vt(1188);
    const he = new Set(["(", "{", "[", "<"]),
      ve = new Set([")", "}", "]", ">"]),
      We = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Se(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Vt(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = [];
        for (const qt of tt) {
          let tt;
          tt = "punctuation" === qt.kind ? We.text : "parameterName" === qt.kind ? We.parameterName : et, Ot.push({
            str: qt.text,
            style: {
              color: tt,
              opacity: Vt ? .5 : void 0
            }
          })
        }
        return Ot
      }
      const Ot = [];
      if (Ot.push(...Vt(tt.prefixDisplayParts, We.text)), tt.parameters.length > 0) {
        Ot.push("\n");
        for (let qt = 0; qt < tt.parameters.length; qt++) {
          const Dt = tt.parameters[qt];
          Ot.push("\t"), Ot.push(...Vt(Dt.displayParts, We.parameter, null !== et && qt !== et)), Ot.push("\n")
        }
      }
      return Ot.push(...Vt(tt.suffixDisplayParts, We.suffix)), tt.documentation && (Ot.push("\n\n"), Ot.push(...Vt(tt.documentation, We.docs))), Ot
    }
    var ce = function(tt) {
      return tt[tt.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", tt[tt.DuplicateIdentifier = 2300] = "DuplicateIdentifier", tt
    }(ce || {});
    const Re = new Set([ce.DuplicateIdentifier]),
      Ie = new Set([ce.VariableDefinedElsewhere]),
      Pe = new Set([]),
      Ze = "/index.js";

    function Le(tt) {
      return "/" + tt
    }

    function Fe(tt, et, Vt) {
      tt.getSourceFile(et) && tt.deleteFile(et), tt.createFile(et, Vt)
    }

    function ke(tt) {
      return !!tt && ((0, Ct.u)(tt) || (0, Ct.r)(tt))
    }

    function Ge(tt, et, Vt) {
      return () => {
        let Ot = [...et.languageService.getSemanticDiagnostics(Vt), ...et.languageService.getSyntacticDiagnostics(Vt)];
        return Ot = Ot.filter((tt => !(0, ht.B)(tt.start) && !(0, ht.B)(tt.length) && !Re.has(tt.code))), tt || (Ot = Ot.filter((tt => !Ie.has(tt.code)))), Ot.map((tt => ({
          from: tt.start,
          to: tt.start + tt.length,
          message: "string" === typeof tt.messageText ? tt.messageText : tt.messageText.messageText,
          severity: Pe.has(tt.code) ? "warning" : "error"
        })))
      }
    }

    function ze(tt, et) {
      return Vt => {
        var Ot, qt;
        const Dt = tt.languageService.getCompletionsAtPosition(et, Vt.pos, {});
        if (!Dt) return {
          from: Vt.pos,
          options: []
        };
        let mt = null !== (Ot = null === (qt = Dt.optionalReplacementSpan) || void 0 === qt ? void 0 : qt.start) && void 0 !== Ot ? Ot : Vt.pos;
        if (!Dt.optionalReplacementSpan) {
          const tt = Vt.state.doc.sliceString(0, Vt.pos);
          for (; mt > 0 && /[\w$]/.test(tt[mt - 1]);) mt--
        }
        return Dt.entries = Dt.entries.filter((tt => tt.kind !== wt().ScriptElementKind.warning)), {
          from: mt,
          options: Dt.entries.map((Ot => {
            var qt, Dt, dt, jt;
            const Ht = tt.languageService.getCompletionEntryDetails(et, Vt.pos, Ot.name, {}, Ot.source, {}, Ot.data),
              Xt = null !== (qt = null === (Dt = Ot.replacementSpan) || void 0 === Dt ? void 0 : Dt.start) && void 0 !== qt ? qt : mt,
              Qt = Ot.replacementSpan ? Ot.replacementSpan.start + Ot.replacementSpan.length : Vt.pos,
              lt = null !== (dt = Ot.insertText) && void 0 !== dt ? dt : Ot.name;
            return {
              label: Ot.name,
              detail: null === Ht || void 0 === Ht ? void 0 : Ht.displayParts.map((tt => tt.text)).join(""),
              info: null === Ht || void 0 === Ht || null === (jt = Ht.documentation) || void 0 === jt ? void 0 : jt.map((tt => tt.text)).join(""),
              apply: tt => {
                tt.dispatch({
                  changes: {
                    from: Xt,
                    to: Qt,
                    insert: lt
                  },
                  selection: {
                    anchor: Xt + lt.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function oe(tt) {
      return et => {
        const Vt = document.createElement("div");
        Vt.className = "CodeEditorTooltip";
        let Ot = !1;
        return queueMicrotask((() => {
          Ot || (dt.render((0, Ke.jsx)(lt.e, {
            text: tt
          }), Vt), et.requestMeasure())
        })), {
          dom: Vt,
          destroy() {
            Ot = !0, queueMicrotask((() => {
              dt.unmountComponentAtNode(Vt)
            }))
          }
        }
      }
    }

    function re(tt, et, Vt) {
      return Ot => {
        var qt;
        if (!et) return [];
        const Dt = null === (qt = Ot.selection.nw[0]) || void 0 === qt ? void 0 : qt.head;
        if (void 0 === Dt) return [];
        const mt = tt.languageService.getSignatureHelpItems(Vt, Dt, {});
        if (!mt || !mt.items.length) return [];
        const dt = mt.applicableSpan.start - mt.items[0].prefixDisplayParts.map((tt => tt.text)).join("").length,
          jt = mt.applicableSpan.start,
          Ht = Ot.doc.lineAt(Dt),
          Xt = Ht.from,
          Qt = Math.min(Ht.to, Dt);
        let lt, Et;
        return dt < Xt ? (lt = Xt, Et = Qt) : (lt = dt, Et = jt), [{
          pos: lt,
          end: Et,
          above: !1,
          create: oe(Se(mt.items[0], mt.argumentIndex))
        }]
      }
    }

    function Ue(tt, et) {
      return (Vt, Ot, qt) => {
        const Dt = tt.languageService.getQuickInfoAtPosition(et, Ot);
        if (!Dt) return [];
        const mt = Dt.textSpan.start,
          dt = Dt.textSpan.start + Dt.textSpan.length;
        if (Ot < mt || Ot >= dt) return [];
        if (Dt.kind === wt().ScriptElementKind.memberFunctionElement || Dt.kind === wt().ScriptElementKind.variableElement && "declare" === Dt.kindModifiers) {
          const tt = Dt.displayParts.findIndex((tt => "space" === tt.kind)); - 1 !== tt && (Dt.displayParts = Dt.displayParts.slice(tt));
          const et = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Vt = Dt.displayParts.findIndex((tt => "punctuation" === tt.kind && "(" === tt.text)); - 1 !== Vt && (et.prefixDisplayParts = Dt.displayParts.slice(0, Vt + 1), Dt.displayParts = Dt.displayParts.slice(Vt + 1));
          const Ot = Dt.displayParts.findLastIndex((tt => "punctuation" === tt.kind && ")" === tt.text)); - 1 !== Ot && (et.suffixDisplayParts = Dt.displayParts.slice(Ot), Dt.displayParts = Dt.displayParts.slice(0, Ot));
          let qt = 0,
            jt = [];
          for (const mt of Dt.displayParts)
            if (he.has(mt.text) ? qt++ : ve.has(mt.text) && qt--, "lineBreak" !== mt.kind) {
              if ("space" === mt.kind) {
                if (0 === jt.length) continue;
                jt.push({
                  kind: "space",
                  text: " "
                })
              } else jt.push(mt);
              0 === qt && "," === mt.text && (et.parameters.push({
                displayParts: jt
              }), jt = [])
            } return jt.length > 0 && et.parameters.push({
            displayParts: jt
          }), et.documentation = Dt.documentation, [{
            pos: mt,
            end: dt,
            above: !0,
            create: oe(Se(et))
          }]
        }
        const jt = [];
        for (const tt of Dt.displayParts) jt.push({
          str: tt.text,
          style: {
            color: We.text
          }
        });
        if (Dt.documentation) {
          jt.push("\n\n");
          for (const tt of Dt.documentation) jt.push({
            str: tt.text,
            style: {
              color: We.docs
            }
          })
        }
        return [{
          pos: mt,
          end: dt,
          above: !0,
          create: oe(jt)
        }]
      }
    }
    const Ae = {
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
      semicolons: wt().SemicolonPreference.Insert
    };
    const ie = Dt.j.define(),
      Ye = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Be(tt) {
      let {
        isLobbyCode: et,
        code: Vt,
        onChange: dt,
        canEditCode: lt,
        setTemporaryMessage: ft,
        close: ht,
        showTooltips: Yt,
        lightMode: Bt,
        collabState: xt,
        onRemoteDocChange: Tt,
        files: gt,
        activePath: st,
        pluginName: te,
        pluginFile: ee,
        pluginSource: Oe,
        setActiveDocReplacer: qe,
        showAiHints: me,
        canAiChangeCode: de = lt
      } = tt;
      const [je, He] = (0, mt.useState)(null), Xe = null === xt || void 0 === xt ? void 0 : xt.version, Qe = null === xt || void 0 === xt ? void 0 : xt.clientID, le = (0, mt.useRef)({
        isLobbyCode: et,
        files: gt,
        code: Vt,
        activePath: st
      }), Ee = (0, mt.useRef)(Tt);
      Ee.current = Tt;
      const fe = (0, mt.useRef)(null),
        we = (0, mt.useRef)(xt);
      we.current = xt;
      const ye = (0, mt.useRef)(null),
        Me = (0, mt.useRef)(null),
        be = (0, mt.useRef)(null),
        Je = (0, mt.useRef)(ht);
      Je.current = ht;
      const Ce = (0, mt.useRef)(Vt);
      Ce.current = Vt;
      const he = (0, mt.useRef)(Oe);
      he.current = Oe;
      const ve = function(tt, et, Vt, Ot) {
        return Vt ? `/plugin-preview/${Vt}/${null!==Ot&&void 0!==Ot?Ot:"index.ts"}` : tt ? Le(null !== et && void 0 !== et ? et : Jt.k) : Ze
      }(et, st, te, ee);
      (0, mt.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: tt,
            files: et,
            code: Vt,
            activePath: Ot
          } = le.current, qt = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: wt().ModuleKind.ESNext,
            moduleResolution: wt().ModuleResolutionKind.Bundler,
            target: wt().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(bt.d).map((tt => [tt.specifier, [tt.typesVfsPath]])))
            }
          }, Dt = new Map, mt = [];
          if (tt) {
            const tt = null !== et && void 0 !== et ? et : {
              [Jt.k]: Vt || "\n"
            };
            for (const [et, Vt] of Object.entries(tt)) {
              const tt = Le(et);
              Dt.set(tt, Vt || "\n"), mt.push(tt)
            }
            const qt = Le(null !== Ot && void 0 !== Ot ? Ot : Jt.k);
            Dt.has(qt) ? Dt.set(qt, Vt || "\n") : (Dt.set(qt, Vt || "\n"), mt.push(qt)), Dt.set("/node_modules/@bloxd/index.d.ts", Xt.default), mt.push("/node_modules/@bloxd/index.d.ts");
            for (const et of Object.values(bt.d)) {
              Dt.set(et.typesVfsPath, et.types), mt.push(et.typesVfsPath);
              for (const [tt, Vt] of Object.entries(et.files)) {
                const Ot = `/plugin-preview/${et.name}/${tt}`;
                Dt.set(Ot, Vt || "\n"), mt.push(Ot)
              }
            }
          } else Dt.set(Ze, Vt || "\n"), mt.push(Ze);
          Dt.set("/globals.d.ts", tt ? Ht.d : jt.e), Dt.set("/lib.d.ts", Qt.b), mt.push("/globals.d.ts", "/lib.d.ts");
          const dt = Et.c(Dt),
            lt = Et.e(dt, mt, wt(), qt);
          He({
            ty: lt,
            fsMap: Dt
          })
        }()
      }), []), (0, mt.useEffect)((() => {
        var tt, Ot;
        if (!je || !et) return;
        const {
          ty: qt,
          fsMap: Dt
        } = je;
        if (function(tt, et, Vt) {
            const Ot = new Set;
            for (const [qt, Dt] of Object.entries(Vt)) {
              const Vt = Le(qt);
              Ot.add(Vt);
              const mt = Dt || "\n";
              et.get(Vt) !== mt && (et.set(Vt, mt), Fe(tt, Vt, mt))
            }
            for (const qt of [...et.keys()]) "/globals.d.ts" === qt || "/lib.d.ts" === qt || qt.startsWith("/node_modules/") || qt.startsWith("/plugin-preview/") || Ot.has(qt) || (et.delete(qt), tt.getSourceFile(qt) && tt.deleteFile(qt))
          }(qt, Dt, null !== gt && void 0 !== gt ? gt : {
            [Jt.k]: Vt || "\n"
          }), te) return void Fe(qt, ve, Oe || "\n");
        const mt = null !== (tt = null === (Ot = fe.current) || void 0 === Ot ? void 0 : Ot.state.doc.toString()) && void 0 !== tt ? tt : Vt;
        Fe(qt, ve, mt || "\n")
      }), [gt, st, je, te, Oe, ve, Vt, et]), (0, mt.useEffect)((() => {
        if (!je) return;
        const {
          ty: tt
        } = je;
        Fe(tt, ve, (te ? Oe : Vt) || "\n")
      }), [Vt, te, Oe, ve, je]), (0, mt.useEffect)((() => () => {
        Me.current && (Me.current(), Me.current = null)
      }), []), (0, mt.useEffect)((() => (qe(((tt, et) => {
        if (te) return !1;
        const Vt = fe.current,
          Ot = we.current,
          qt = Ot ? (0, Ct.y)(Ot.docKey) : null;
        if (!Vt || !Ot || ye.current !== Ot.clientID || tt !== qt) return !1;
        const Dt = Vt.state.doc.toString();
        return Dt !== et && Vt.dispatch({
          changes: {
            from: 0,
            to: Dt.length,
            insert: et
          }
        }), !0
      })), () => {
        fe.current = null, ye.current = null, qe(null)
      })), [qe, te]);
      const We = et ? te ? null : null !== st && void 0 !== st ? st : Jt.k : ae.e,
        Se = Ve(fe, We);
      De(fe, ft), (0, Kt.f)("FormatCode", (() => {
        if (!je || !fe.current || te) return;
        const {
          ty: tt,
          fsMap: Vt
        } = je, Ot = tt.getSourceFile(ve).getFullText();
        let qt = 0;
        if (et && gt)
          for (const [et, dt] of Object.entries(gt)) et !== (null !== st && void 0 !== st ? st : Jt.k) && (qt += dt.length);
        const Dt = function(tt, et, Vt, Ot, qt) {
          const Dt = tt.languageService.getFormattingEditsForDocument(Ot, Ae);
          if (!Dt.length) return vt.e.error("Code is already formatted.");
          Dt.sort(((tt, et) => et.span.start - tt.span.start));
          let mt = tt.getSourceFile(Ot).getFullText();
          for (const dt of Dt) mt = mt.slice(0, dt.span.start) + dt.Ij + mt.slice(dt.span.start + dt.span.length);
          return mt !== (Vt ? (0, ut.i)(mt, qt) : (0, ut.g)(mt)) ? vt.e.error("Formatting the code will go beyond the character limit.") : vt.e.value(mt)
        }(tt, 0, et, ve, qt);
        if (Dt.isError()) return void ft({
          message: Dt.asError().message,
          type: "warning"
        });
        const mt = Dt.getValue();
        mt && (fe.current.dispatch({
          changes: {
            from: 0,
            to: Ot.length,
            insert: mt
          },
          selection: {
            anchor: mt.length
          }
        }), Fe(tt, ve, mt), dt(mt))
      }));
      const ce = (0, mt.useMemo)((() => {
        if (!je) return [];
        const {
          ty: tt,
          fsMap: Vt
        } = je;
        ! function(tt, et, Vt, Ot) {
          if (tt.getSourceFile(Vt)) return;
          const qt = Ot || "\n";
          et.set(Vt, qt), tt.createFile(Vt, qt)
        }(tt, Vt, ve, (te ? he.current : Ce.current) || "\n");
        const mt = et && ke(te ? null !== ee && void 0 !== ee ? ee : "index.ts" : st),
          dt = [(0, qt.d)({
            jsx: !1,
            typescript: mt
          }), Dt.i.highest(Dt.e.domEventHandlers({
            keydown: tt => "Escape" === tt.key ? (Je.current(), tt.stopPropagation(), !0) : (tt.stopPropagation(), !1)
          })), (0, Ot.d)({
            override: [ze(tt, ve)]
          }), ct.p.fromClass(class {
            constructor(tt) {
              this.view = tt, this.timeout = null, this.scheduleParse()
            }
            update(tt) {
              (tt.docChanged || tt.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const tt = this.view.viewport.to;
                (0, Gt.hb)(this.view.state, tt) || (0, Gt.I)(this.view, tt, zt) || this.scheduleParse()
              }), ot))
            }
          }), ...nt, Dt.e.lineWrapping, Dt.n.define({
            create: re(tt, Yt, ve),
            update(et, Vt) {
              const Ot = Vt.effects.some((tt => tt.is(ie)));
              return Vt.docChanged || Vt.selection || Ot ? (Fe(tt, ve, Vt.state.doc.toString() || " "), re(tt, Yt, ve)(Vt.state)) : et
            },
            provide: tt => Dt.w.computeN([tt], (et => et.field(tt)))
          }), (0, Dt.u)(Ue(tt, ve)), (0, Nt.e)(Ge(et, tt, ve)), Dt.p.fromClass(class {
            constructor(tt) {
              this.view = tt, this.searchPanel = null
            }
            update(tt) {
              const et = tt.view.dom.querySelector(".cm-search");
              if (et !== this.searchPanel) {
                if (this.searchPanel = et, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (tt => {
                  "Escape" === tt.key && (0, yt.e)(this.view), tt.stopPropagation()
                }))
              }
            }
          })];
        me && !te && dt.push(ue(et ? null !== st && void 0 !== st ? st : Jt.k : ae.e, de));
        const jt = we.current;
        if (jt && !te) {
          dt.push(... function(tt, et, Vt, Ot, qt) {
            let Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const mt = (0, Ct.y)(Vt),
              dt = ct.p.fromClass(class {
                constructor(tt) {
                  this.view = tt, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Pt.j.subscribe("codeCollab", (tt => {
                    tt.docKey === mt && tt.type === Ct.g.Updates && (tt.updates ? this.applyUpdates(tt.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(tt) {
                  const et = JSON.parse(tt).map((tt => ({
                    clientID: tt.clientID,
                    changes: St.ChangeSet.fromJSON(tt.changes)
                  })));
                  et.length > 0 && (this.view.dispatch((0, Wt.k)(this.view.state, et)), qt && qt(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(tt) {
                  Dt && (tt.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const tt = (0, Wt.o)(this.view.state);
                  if (this.pushing || !tt.length) return;
                  const et = Date.now() - this.lastPushTime;
                  if (et < kt) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), kt - et)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Lt);
                  const Vt = (0, Wt.g)(this.view.state),
                    qt = tt.map((tt => ({
                      clientID: tt.clientID,
                      changes: tt.changes.toJSON()
                    }))),
                    Dt = JSON.stringify(qt);
                  Dt.length <= Ct.j ? Rt.gameBridge.send("sendCodeCollab", {
                    mD: Ct.e.Push,
                    dD: mt,
                    jD: Vt,
                    QD: Dt
                  }) : (0, Zt.postJsonWithMetricsCookiesAndJsonResponse)(`${Ot.gsUrl}/code/collab-push`, It.s["collab-push"].toBuffer({
                    gameNameWithVariation: Ot.gameNameWithVariation,
                    lobbyName: Ot.lobbyName,
                    docKey: mt,
                    version: Vt,
                    updates: Dt
                  }), {
                    retries: 0
                  }).catch((tt => {
                    console.error("[CodeCollab] HTTP push failed", tt)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const tt = (0, Wt.g)(this.view.state);
                  (0, Zt.postJsonWithMetricsCookiesAndJsonResponse)(`${Ot.gsUrl}/code/collab-pull`, It.s["collab-pull"].toBuffer({
                    gameNameWithVariation: Ot.gameNameWithVariation,
                    lobbyName: Ot.lobbyName,
                    docKey: mt,
                    fromVersion: tt
                  }), {
                    retries: 1
                  }).then((tt => {
                    this.destroyed || (tt.fullDoc ? Pt.j.sw("codeCollabRejoin", {
                      docKey: mt,
                      doc: tt.fullDoc,
                      version: tt.version
                    }) : this.applyUpdates(tt.updates))
                  })).catch((tt => {
                    console.error("[CodeCollab] Pull failed", tt)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const tt = Date.now();
                  if (tt - this.lastCursorSent < Ft) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Ft)));
                  this.lastCursorSent = tt;
                  const et = this.view.state.selection.main;
                  Rt.gameBridge.send("sendCodeCollab", {
                    mD: Ct.e.Cursor,
                    dD: mt,
                    wD: et.anchor,
                    yD: et.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Pt.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Wt.c)({
              startVersion: tt,
              clientID: et
            }), dt]
          }(Xe, Qe, jt.docKey, jt.httpConfig, (tt => {
            var et;
            null === (et = Ee.current) || void 0 === et || et.call(Ee, tt)
          }), lt));
          const tt = function(tt, et) {
            const Vt = (0, Ct.y)(tt);
            return {
              extensions: [pt],
              connect(tt) {
                if (et) {
                  const Vt = et.map((tt => Ut.of({
                    playerId: tt.playerId,
                    playerName: tt.playerName,
                    colour: tt.colour,
                    anchor: tt.anchor,
                    head: tt.head,
                    lastMoved: Date.now()
                  })));
                  Vt.length > 0 && tt.dispatch({
                    effects: Vt
                  })
                }
                const Ot = Pt.j.subscribe("codeCollab", (et => {
                    if (et.docKey === Vt)
                      if (et.type === Ct.g.RemoteCursor) tt.dispatch({
                        effects: Ut.of({
                          playerId: et.playerId,
                          playerName: et.playerName,
                          colour: et.colour,
                          anchor: et.anchor,
                          head: et.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (et.type === Ct.g.Presence) {
                      const Vt = JSON.parse(et.peers),
                        Ot = new Set(Vt.map((tt => tt.playerId))),
                        qt = tt.state.field(pt),
                        Dt = [];
                      for (const [tt] of qt.cursors) Ot.has(tt) || Dt.push(At.of(tt));
                      Dt.length > 0 && tt.dispatch({
                        effects: Dt
                      })
                    }
                  })),
                  qt = setInterval((() => {
                    tt.dom.isConnected ? tt.dispatch({
                      effects: it.of(Date.now())
                    }) : clearInterval(qt)
                  }), rt);
                return () => {
                  Pt.j.unsubscribe(Ot), clearInterval(qt)
                }
              }
            }
          }(jt.docKey, jt.existingCursors);
          dt.push(...tt.extensions), be.current = tt.connect
        } else be.current = null;
        return dt
      }), [et, je, Yt, Xe, Qe, ve, st, te, ee, lt, me, de]);
      if (!je || !xt && !te) return (0, Ke.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Ke.jsx)(Mt.b, {})
      });
      const Re = te ? `plugin-${te}-${null!==ee&&void 0!==ee?ee:"index.ts"}` : xt ? `collab-${xt.clientID}` : `local-${et}`;
      return (0, Ke.jsx)(Dt.q, {
        value: te ? null !== Oe && void 0 !== Oe ? Oe : "" : Vt,
        onChange: dt,
        extensions: ce,
        className: "CodeEditorContent",
        theme: Bt ? Ne : "dark",
        editable: lt && !te,
        basicSetup: Ye,
        onCreateEditor: tt => {
          var et;
          fe.current = tt, ye.current = null !== (et = null === xt || void 0 === xt ? void 0 : xt.clientID) && void 0 !== et ? et : null, Se(tt), Me.current && Me.current(), be.current && (Me.current = be.current(tt))
        }
      }, Re)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);