export const id = 284;
export const ids = [284];
export const modules = {
  40753: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Vu
    });
    var Bb = hb(40760),
      Ob = hb(40807),
      Gb = hb(40815),
      Ub = hb(49),
      Lb = hb(65),
      Yb = hb(40830),
      Sb = hb(40835),
      ab = hb(4528),
      Hb = hb(40837),
      wb = hb(1789),
      Zb = hb(40842),
      Xb = hb(40858),
      pb = hb.n(Xb),
      ob = hb(40821),
      Ab = hb(40828),
      lb = hb(1242),
      Kb = hb(36498),
      Wb = hb(1133),
      Cb = hb(36504),
      db = hb(36377),
      rb = hb(1348),
      jb = hb(588),
      nb = hb(1141),
      Db = hb(40903),
      xb = hb(40769),
      zb = hb(40773),
      gb = hb(1811),
      ib = hb(3516),
      vb = hb(16),
      tb = hb(1038);
    const Jb = 1e4,
      eb = 250,
      Nb = 250;
    var sb = hb(40788);
    const Mb = 50,
      mb = 100;
    const Ib = 2e3,
      Pb = xb.D.define(),
      qb = xb.D.define(),
      Eb = xb.D.define();
    class yb extends zb.u {
      constructor(bb, ub, hb) {
        super(), this.colour = bb, this.playerName = ub, this.showName = hb
      }
      toDOM() {
        const bb = document.createElement("span");
        bb.className = "cm-remote-cursor-wrapper", bb.style.borderLeftColor = this.colour;
        const ub = document.createElement("span");
        if (ub.className = "cm-remote-cursor", ub.style.borderLeftColor = this.colour, bb.appendChild(ub), this.showName) {
          const ub = document.createElement("span");
          ub.className = "cm-remote-cursor-name", ub.style.backgroundColor = this.colour, ub.textContent = this.playerName, bb.appendChild(ub)
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

    function Vb(bb, ub) {
      const hb = [],
        Bb = [];
      for (const [, Ub] of bb) {
        const bb = ub - Ub.lastMoved < Ib;
        if (hb.push({
            pos: Ub.head,
            decoration: zb.e.widget({
              widget: new yb(Ub.colour, Ub.playerName, bb),
              side: 1
            })
          }), Ub.anchor !== Ub.head) {
          const bb = Math.min(Ub.anchor, Ub.head),
            ub = Math.max(Ub.anchor, Ub.head);
          Bb.push({
            from: bb,
            to: ub,
            decoration: zb.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Ub.colour}33`
              }
            })
          })
        }
      }
      const Ob = new xb.w,
        Gb = [];
      for (const Ub of hb) Gb.push({
        bias: 1,
        deco: Ub.decoration,
        from: Ub.pos,
        to: Ub.pos
      });
      for (const Ub of Bb) Gb.push({
        bias: 0,
        deco: Ub.decoration,
        from: Ub.from,
        to: Ub.to
      });
      Gb.sort(((bb, ub) => bb.from - ub.from || bb.deco.startSide - ub.deco.startSide || bb.bias - ub.bias));
      for (const Ub of Gb) Ob.add(Ub.from, Ub.to, Ub.deco);
      return Ob.finish()
    }
    const Fb = xb.G.define({
      create: () => ({
        cursors: new Map,
        ZG: zb.e.none
      }),
      update(bb, ub) {
        let hb = bb.cursors,
          Bb = !1;
        if (ub.docChanged) {
          const bb = new Map;
          for (const [Bb, Ob] of hb) bb.set(Bb, {
            ...Ob,
            anchor: ub.changes.mapPos(Ob.anchor, 1),
            head: ub.changes.mapPos(Ob.head, 1)
          });
          hb = bb, Bb = !0
        }
        for (const Ob of ub.effects)
          if (Ob.is(Pb)) {
            if (!Number.isInteger(Ob.value.anchor) || !Number.isInteger(Ob.value.head)) {
              console.warn(`Code Editor: ignored player ${Ob.value.playerId}'s cursor at ${Ob.value.anchor}-${Ob.value.head}`);
              continue
            }
            const Gb = ub.state.doc.length,
              Ub = {
                ...Ob.value,
                anchor: Math.min(Ob.value.anchor, Gb),
                head: Math.min(Ob.value.head, Gb)
              };
            hb === bb.cursors && (hb = new Map(hb)), hb.set(Ub.playerId, Ub), Bb = !0
          } else Ob.is(qb) ? hb.has(Ob.value) && (hb === bb.cursors && (hb = new Map(hb)), hb.delete(Ob.value), Bb = !0) : Ob.is(Eb) && (Bb = !0);
        return Bb ? {
          cursors: hb,
          ZG: Vb(hb, Date.now())
        } : bb
      },
      provide: bb => zb.m.ZG.from(bb, (bb => bb.ZG))
    });
    const fb = xb.D.define(),
      kb = zb.e.mark({
        class: "CodeInsertFlash"
      }),
      Tb = xb.G.define({
        create: () => zb.e.none,
        update(bb, ub) {
          let hb = bb.map(ub.changes);
          for (const Bb of ub.effects) Bb.is(fb) && (hb = Bb.value ? zb.e.set(kb.range(Bb.value.from, Bb.value.to)) : zb.e.none);
          return hb
        },
        provide: bb => zb.m.ZG.from(bb)
      }),
      cb = xb.G.define({
        create: () => !1,
        update: (bb, ub) => bb || void 0 !== ub.annotation(xb.O.userEvent) && !ub.annotation(xb.O.remote)
      }),
      Qb = [Tb, cb];

    function Rb(bb) {
      return bb.field(cb)
    }
    const bu = 3e4;

    function uu(bb, ub) {
      const hb = (0, Ub.useRef)(null);
      (0, Ub.useEffect)((() => {
        var bb;
        (null === (bb = hb.current) || void 0 === bb ? void 0 : bb.path) !== ub && (hb.current = null)
      }), [ub]);
      const Bb = bb => {
        var Bb;
        const Ob = hb.current;
        if (null === bb || void 0 === bb || !bb.dom.isConnected || !Ob || Ob.path !== ub) return;
        hb.current = null;
        const {
          HZ: Ub
        } = Ob;
        if (Ub && null !== Ub.text && performance.now() - Ub.at < bu) {
          const ub = function(bb, ub) {
            if (bb === ub) return null;
            const hb = Math.min(bb.length, ub.length);
            let Bb = 0;
            for (; Bb < hb && bb[Bb] === ub[Bb];) Bb++;
            let Ob = 0;
            for (; Ob < hb - Bb && bb[bb.length - 1 - Ob] === ub[ub.length - 1 - Ob];) Ob++;
            return {
              from: Bb,
              to: bb.length - Ob,
              insert: ub.slice(Bb, ub.length - Ob)
            }
          }(bb.state.doc.toString(), Ub.text);
          null !== ub && bb.dispatch({
            changes: ub,
            userEvent: Ub.placed ? "input" : void 0
          })
        }
        const {
          doc: Lb
        } = bb.state, Yb = Lb.line(Math.min(Math.max(Ob.line, 1), Lb.lines)), Sb = Yb.from + Math.min(null !== (Bb = Ob.column) && void 0 !== Bb ? Bb : 0, Yb.length);
        bb.dispatch({
          selection: {
            anchor: Sb
          },
          effects: Gb.c.scrollIntoView(Sb, {
            y: "center"
          }),
          userEvent: null !== Ub && void 0 !== Ub && Ub.placed ? "select" : void 0
        }), !1 !== (null === Ub || void 0 === Ub ? void 0 : Ub.focused) && bb.focus()
      };
      return (0, rb.h)("CodeEditorGoToLine", (ub => {
        hb.current = ub, Bb(bb.current)
      })), (0, rb.h)("CodeEditorKeepEdits", (() => {
        const Bb = bb.current;
        if (null === Bb || !Bb.dom.isConnected || null === ub) return;
        const {
          doc: Ob,
          selection: Gb
        } = Bb.state, {
          head: Ub
        } = Gb.main, Lb = Ob.lineAt(Ub), Yb = {
          text: (0, Db.h)(Bb.state).length > 0 ? Ob.toString() : null,
          at: performance.now(),
          focused: Bb.hasFocus,
          placed: Rb(Bb.state)
        };
        hb.current = {
          path: ub,
          line: Lb.number,
          column: Ub - Lb.from,
          HZ: Yb
        }
      })), bb => {
        var Ob;
        const Gb = hb.current;
        !1 === (null === Gb || void 0 === Gb || null === (Ob = Gb.HZ) || void 0 === Ob ? void 0 : Ob.focused) && Gb.path === ub || bb.focus(), Bb(bb)
      }
    }
    var hu = hb(4118),
      Bu = hb(1095);

    function Ou(bb, ub) {
      const {
        t: hb
      } = (0, Bu.K)();
      (0, rb.h)("CodeEditorInsertText", (Bb => {
        let {
          text: Ob,
          focus: Gb
        } = Bb;
        const Ub = bb.current,
          Lb = null !== Ub && void 0 !== Ub && Ub.dom.isConnected ? function(bb, ub) {
            if (!Rb(bb)) return null;
            const {
              from: hb,
              to: Bb
            } = bb.selection.main, Ob = hb + ub.length;
            return {
              changes: {
                from: hb,
                to: Bb,
                insert: ub
              },
              selection: {
                anchor: Ob
              },
              effects: [zb.m.scrollIntoView(Ob, {
                y: "center"
              }), fb.of({
                from: hb,
                to: Ob
              })],
              userEvent: "input"
            }
          }(Ub.state, Ob) : null;
        null !== Ub && null !== Lb ? (Ub.dispatch(Lb), Gb && Ub.focus(), setTimeout((() => {
          Ub.dom.isConnected && Ub.dispatch({
            effects: fb.of(null)
          })
        }), 1500)) : (0, hu.b)(Ob).then((() => {
          ub({
            message: hb("codeEditorWorld:pickCopied", {
              coords: Ob
            }),
            type: "success"
          })
        }), (bb => {
          console.error("Pick could not copy the coordinates", bb), ub({
            message: hb("codeEditorWorld:pickPlaceCursor", {
              coords: Ob
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Gu = hb(40803);
    const Uu = "#e45649",
      Lu = "#383a42",
      Yu = "#696c77",
      Su = "#986801",
      au = "#e5e5e6",
      Hu = "#fafafa",
      wu = "#eaeaeb",
      Zu = "#526fff",
      Xu = zb.m.theme({
        "&": {
          color: Lu,
          backgroundColor: Hu
        },
        ".cm-content": {
          caretColor: Zu
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Zu
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Lu
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
          backgroundColor: Hu,
          color: Yu,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: au
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: wu
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: wu,
          borderBottomColor: wu
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: au,
            color: Lu
          }
        }
      }, {
        dark: !1
      }),
      pu = sb.c.define([{
        tag: Gu.k.keyword,
        color: "#a626a4"
      }, {
        tag: [Gu.k.name, Gu.k.deleted, Gu.k.character, Gu.k.propertyName, Gu.k.macroName],
        color: Uu
      }, {
        tag: [Gu.k.function(Gu.k.variableName), Gu.k.labelName],
        color: "#4078f2"
      }, {
        tag: [Gu.k.color, Gu.k.constant(Gu.k.name), Gu.k.standard(Gu.k.name)],
        color: Su
      }, {
        tag: [Gu.k.definition(Gu.k.name), Gu.k.separator],
        color: Lu
      }, {
        tag: [Gu.k.typeName, Gu.k.className, Gu.k.number, Gu.k.changed, Gu.k.annotation, Gu.k.modifier, Gu.k.self, Gu.k.namespace],
        color: "#c18401"
      }, {
        tag: [Gu.k.operator, Gu.k.operatorKeyword, Gu.k.url, Gu.k.escape, Gu.k.regexp, Gu.k.link, Gu.k.special(Gu.k.string)],
        color: "#0184bc"
      }, {
        tag: [Gu.k.meta, Gu.k.comment],
        color: Yu
      }, {
        tag: Gu.k.strong,
        fontWeight: "bold"
      }, {
        tag: Gu.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: Gu.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Gu.k.link,
        color: Yu,
        textDecoration: "underline"
      }, {
        tag: Gu.k.heading,
        fontWeight: "bold",
        color: Uu
      }, {
        tag: [Gu.k.atom, Gu.k.bool, Gu.k.special(Gu.k.variableName)],
        color: Su
      }, {
        tag: [Gu.k.processingInstruction, Gu.k.string, Gu.k.inserted],
        color: "#50a14f"
      }, {
        tag: Gu.k.invalid,
        color: "#000000"
      }]),
      ou = [Xu, (0, sb.db)(pu)];
    var Au = hb(36559),
      lu = hb(40906);
    const Ku = Gb.g.define(),
      Wu = Gb.k.define({
        create: () => !1,
        update(bb, ub) {
          for (const hb of ub.effects) hb.is(Ku) && (bb = hb.value);
          return bb
        }
      }),
      Cu = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function du(bb, ub) {
      return [Wu, Gb.m.fromClass(class {
        constructor(bb) {
          this.view = bb, this.onDown = bb => {
            const ub = bb.target instanceof Element && null !== bb.target.closest(".cm-tooltip");
            0 !== bb.button || ub || this.view.state.field(Wu) || this.view.dispatch({
              effects: Ku.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Wu) && this.view.dispatch({
              effects: Ku.of(!1)
            })
          }, bb.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Gb.s.compute(["selection", Wu], (hb => function(bb, ub, hb) {
        const Bb = bb.selection.main;
        return Bb.empty || bb.field(Wu) || bb.sliceDoc(Bb.from, Bb.to).trim().length < 2 ? null : {
          pos: Bb.from,
          above: !0,
          create: bb => {
            const Bb = document.createElement("div");
            Bb.className = "CodeSelectionActions", Bb.setAttribute("role", "toolbar"), Bb.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Ob,
                label: Gb
              }
              of Cu) {
              if (!hb && "explain" !== Ob) continue;
              const Ub = document.createElement("button");
              Ub.type = "button", Ub.textContent = Gb, "change" !== Ob && (Ub.title = lu.d, Ub.dataset.asksAi = "true"), Ub.addEventListener("mousedown", (bb => {
                bb.preventDefault()
              })), Ub.addEventListener("click", (() => {
                const hb = bb.state.selection.main;
                if (hb.empty) return;
                const Bb = {
                  action: Ob,
                  path: ub,
                  fromLine: bb.state.doc.lineAt(hb.from).number,
                  toLine: bb.state.doc.lineAt(hb.to > hb.from && bb.state.doc.lineAt(hb.to).from === hb.to ? hb.to - 1 : hb.to).number,
                  text: bb.state.sliceDoc(hb.from, hb.to)
                };
                vb.i.vp("WorldCodeAiSelection", Bb), bb.dispatch({
                  selection: {
                    anchor: hb.to
                  }
                })
              })), Bb.appendChild(Ub)
            }
            return {
              dom: Bb
            }
          }
        }
      }(hb, bb, ub)))]
    }
    var ru = hb(1007);
    const ju = new Set(["(", "{", "[", "<"]),
      nu = new Set([")", "}", "]", ">"]),
      Du = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function xu(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function hb(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = [];
        for (const Ob of bb) {
          let bb;
          bb = "punctuation" === Ob.kind ? Du.text : "parameterName" === Ob.kind ? Du.parameterName : ub, Bb.push({
            str: Ob.text,
            style: {
              color: bb,
              opacity: hb ? .5 : void 0
            }
          })
        }
        return Bb
      }
      const Bb = [];
      if (Bb.push(...hb(bb.prefixDisplayParts, Du.text)), bb.parameters.length > 0) {
        Bb.push("\n");
        for (let Ob = 0; Ob < bb.parameters.length; Ob++) {
          const Gb = bb.parameters[Ob];
          Bb.push("\t"), Bb.push(...hb(Gb.displayParts, Du.parameter, null !== ub && Ob !== ub)), Bb.push("\n")
        }
      }
      return Bb.push(...hb(bb.suffixDisplayParts, Du.suffix)), bb.documentation && (Bb.push("\n\n"), Bb.push(...hb(bb.documentation, Du.docs))), Bb
    }
    var zu = function(bb) {
      return bb[bb.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", bb[bb.DuplicateIdentifier = 2300] = "DuplicateIdentifier", bb
    }(zu || {});
    const gu = new Set([zu.DuplicateIdentifier]),
      iu = new Set([zu.VariableDefinedElsewhere]),
      vu = new Set([]),
      tu = "/index.js";

    function Ju(bb) {
      return "/" + bb
    }

    function eu(bb, ub, hb) {
      bb.getSourceFile(ub) && bb.deleteFile(ub), bb.createFile(ub, hb)
    }

    function Nu(bb) {
      return !!bb && ((0, Cb.l)(bb) || (0, Cb.j)(bb))
    }

    function su(bb, ub, hb) {
      return () => {
        let Bb = [...ub.languageService.getSemanticDiagnostics(hb), ...ub.languageService.getSyntacticDiagnostics(hb)];
        return Bb = Bb.filter((bb => !(0, jb.J)(bb.start) && !(0, jb.J)(bb.length) && !gu.has(bb.code))), bb || (Bb = Bb.filter((bb => !iu.has(bb.code)))), Bb.map((bb => ({
          from: bb.start,
          to: bb.start + bb.length,
          message: "string" === typeof bb.messageText ? bb.messageText : bb.messageText.messageText,
          severity: vu.has(bb.code) ? "warning" : "error"
        })))
      }
    }

    function Mu(bb, ub) {
      return hb => {
        var Bb, Ob;
        const Gb = bb.languageService.getCompletionsAtPosition(ub, hb.pos, {});
        if (!Gb) return {
          from: hb.pos,
          options: []
        };
        let Ub = null !== (Bb = null === (Ob = Gb.optionalReplacementSpan) || void 0 === Ob ? void 0 : Ob.start) && void 0 !== Bb ? Bb : hb.pos;
        if (!Gb.optionalReplacementSpan) {
          const bb = hb.state.doc.sliceString(0, hb.pos);
          for (; Ub > 0 && /[\w$]/.test(bb[Ub - 1]);) Ub--
        }
        return Gb.entries = Gb.entries.filter((bb => bb.kind !== pb().ScriptElementKind.warning)), {
          from: Ub,
          options: Gb.entries.map((Bb => {
            var Ob, Gb, Lb, Yb;
            const Sb = bb.languageService.getCompletionEntryDetails(ub, hb.pos, Bb.name, {}, Bb.source, {}, Bb.data),
              ab = null !== (Ob = null === (Gb = Bb.replacementSpan) || void 0 === Gb ? void 0 : Gb.start) && void 0 !== Ob ? Ob : Ub,
              Hb = Bb.replacementSpan ? Bb.replacementSpan.start + Bb.replacementSpan.length : hb.pos,
              wb = null !== (Lb = Bb.insertText) && void 0 !== Lb ? Lb : Bb.name;
            return {
              label: Bb.name,
              detail: null === Sb || void 0 === Sb ? void 0 : Sb.displayParts.map((bb => bb.text)).join(""),
              info: null === Sb || void 0 === Sb || null === (Yb = Sb.documentation) || void 0 === Yb ? void 0 : Yb.map((bb => bb.text)).join(""),
              apply: bb => {
                bb.dispatch({
                  changes: {
                    from: ab,
                    to: Hb,
                    insert: wb
                  },
                  selection: {
                    anchor: ab + wb.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function mu(bb) {
      return ub => {
        const hb = document.createElement("div");
        hb.className = "CodeEditorTooltip";
        let Bb = !1;
        return queueMicrotask((() => {
          Bb || (Lb.render((0, ru.jsx)(wb.c, {
            text: bb
          }), hb), ub.requestMeasure())
        })), {
          dom: hb,
          destroy() {
            Bb = !0, queueMicrotask((() => {
              Lb.unmountComponentAtNode(hb)
            }))
          }
        }
      }
    }

    function Iu(bb, ub, hb) {
      return Bb => {
        var Ob;
        if (!ub) return [];
        const Gb = null === (Ob = Bb.selection.tp[0]) || void 0 === Ob ? void 0 : Ob.head;
        if (void 0 === Gb) return [];
        const Ub = bb.languageService.getSignatureHelpItems(hb, Gb, {});
        if (!Ub || !Ub.items.length) return [];
        const Lb = Ub.applicableSpan.start - Ub.items[0].prefixDisplayParts.map((bb => bb.text)).join("").length,
          Yb = Ub.applicableSpan.start,
          Sb = Bb.doc.lineAt(Gb),
          ab = Sb.from,
          Hb = Math.min(Sb.to, Gb);
        let wb, Zb;
        return Lb < ab ? (wb = ab, Zb = Hb) : (wb = Lb, Zb = Yb), [{
          pos: wb,
          end: Zb,
          above: !1,
          create: mu(xu(Ub.items[0], Ub.argumentIndex))
        }]
      }
    }

    function Pu(bb, ub) {
      return (hb, Bb, Ob) => {
        const Gb = bb.languageService.getQuickInfoAtPosition(ub, Bb);
        if (!Gb) return [];
        const Ub = Gb.textSpan.start,
          Lb = Gb.textSpan.start + Gb.textSpan.length;
        if (Bb < Ub || Bb >= Lb) return [];
        if (Gb.kind === pb().ScriptElementKind.memberFunctionElement || Gb.kind === pb().ScriptElementKind.variableElement && "declare" === Gb.kindModifiers) {
          const bb = Gb.displayParts.findIndex((bb => "space" === bb.kind)); - 1 !== bb && (Gb.displayParts = Gb.displayParts.slice(bb));
          const ub = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            hb = Gb.displayParts.findIndex((bb => "punctuation" === bb.kind && "(" === bb.text)); - 1 !== hb && (ub.prefixDisplayParts = Gb.displayParts.slice(0, hb + 1), Gb.displayParts = Gb.displayParts.slice(hb + 1));
          const Bb = Gb.displayParts.findLastIndex((bb => "punctuation" === bb.kind && ")" === bb.text)); - 1 !== Bb && (ub.suffixDisplayParts = Gb.displayParts.slice(Bb), Gb.displayParts = Gb.displayParts.slice(0, Bb));
          let Ob = 0,
            Yb = [];
          for (const Ub of Gb.displayParts)
            if (ju.has(Ub.text) ? Ob++ : nu.has(Ub.text) && Ob--, "lineBreak" !== Ub.kind) {
              if ("space" === Ub.kind) {
                if (0 === Yb.length) continue;
                Yb.push({
                  kind: "space",
                  text: " "
                })
              } else Yb.push(Ub);
              0 === Ob && "," === Ub.text && (ub.parameters.push({
                displayParts: Yb
              }), Yb = [])
            } return Yb.length > 0 && ub.parameters.push({
            displayParts: Yb
          }), ub.documentation = Gb.documentation, [{
            pos: Ub,
            end: Lb,
            above: !0,
            create: mu(xu(ub))
          }]
        }
        const Yb = [];
        for (const bb of Gb.displayParts) Yb.push({
          str: bb.text,
          style: {
            color: Du.text
          }
        });
        if (Gb.documentation) {
          Yb.push("\n\n");
          for (const bb of Gb.documentation) Yb.push({
            str: bb.text,
            style: {
              color: Du.docs
            }
          })
        }
        return [{
          pos: Ub,
          end: Lb,
          above: !0,
          create: mu(Yb)
        }]
      }
    }
    const qu = {
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
      semicolons: pb().SemicolonPreference.Insert
    };
    const Eu = Gb.g.define(),
      yu = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Vu(bb) {
      let {
        isLobbyCode: ub,
        code: hb,
        onChange: Lb,
        canEditCode: wb,
        setTemporaryMessage: Xb,
        close: jb,
        showTooltips: yb,
        lightMode: Vb,
        collabState: fb,
        onRemoteDocChange: kb,
        files: Tb,
        activePath: cb,
        pluginName: Rb,
        pluginFile: bu,
        pluginSource: hu,
        setActiveDocReplacer: Bu,
        showAiHints: Gu,
        canAiChangeCode: Uu = wb
      } = bb;
      const [Lu, Yu] = (0, Ub.useState)(null), Su = null === fb || void 0 === fb ? void 0 : fb.version, au = null === fb || void 0 === fb ? void 0 : fb.clientID, Hu = (0, Ub.useRef)({
        isLobbyCode: ub,
        files: Tb,
        code: hb,
        activePath: cb
      }), wu = (0, Ub.useRef)(kb);
      wu.current = kb;
      const Zu = (0, Ub.useRef)(null),
        Xu = (0, Ub.useRef)(fb);
      Xu.current = fb;
      const pu = (0, Ub.useRef)(null),
        lu = (0, Ub.useRef)(null),
        Ku = (0, Ub.useRef)(null),
        Wu = (0, Ub.useRef)(jb);
      Wu.current = jb;
      const Cu = (0, Ub.useRef)(hb);
      Cu.current = hb;
      const ju = (0, Ub.useRef)(hu);
      ju.current = hu;
      const nu = function(bb, ub, hb, Bb) {
        return hb ? `/plugin-preview/${hb}/${null!==Bb&&void 0!==Bb?Bb:"index.ts"}` : bb ? Ju(null !== ub && void 0 !== ub ? ub : Wb.m) : tu
      }(ub, cb, Rb, bu);
      (0, Ub.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: bb,
            files: ub,
            code: hb,
            activePath: Bb
          } = Hu.current, Ob = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: pb().ModuleKind.ESNext,
            moduleResolution: pb().ModuleResolutionKind.Bundler,
            target: pb().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Kb.f).map((bb => [bb.specifier, [bb.typesVfsPath]])))
            }
          }, Gb = new Map, Ub = [];
          if (bb) {
            const bb = null !== ub && void 0 !== ub ? ub : {
              [Wb.m]: hb || "\n"
            };
            for (const [ub, hb] of Object.entries(bb)) {
              const bb = Ju(ub);
              Gb.set(bb, hb || "\n"), Ub.push(bb)
            }
            const Ob = Ju(null !== Bb && void 0 !== Bb ? Bb : Wb.m);
            Gb.has(Ob) ? Gb.set(Ob, hb || "\n") : (Gb.set(Ob, hb || "\n"), Ub.push(Ob)), Gb.set("/node_modules/@bloxd/index.d.ts", ab.default), Ub.push("/node_modules/@bloxd/index.d.ts");
            for (const ub of Object.values(Kb.f)) {
              Gb.set(ub.typesVfsPath, ub.types), Ub.push(ub.typesVfsPath);
              for (const [bb, hb] of Object.entries(ub.files)) {
                const Bb = `/plugin-preview/${ub.name}/${bb}`;
                Gb.set(Bb, hb || "\n"), Ub.push(Bb)
              }
            }
          } else Gb.set(tu, hb || "\n"), Ub.push(tu);
          Gb.set("/globals.d.ts", bb ? Sb.d : Yb.e), Gb.set("/lib.d.ts", Hb.c), Ub.push("/globals.d.ts", "/lib.d.ts");
          const Lb = Zb.b(Gb),
            wb = Zb.d(Lb, Ub, pb(), Ob);
          Yu({
            Jp: wb,
            fsMap: Gb
          })
        }()
      }), []), (0, Ub.useEffect)((() => {
        var bb, Bb;
        if (!Lu || !ub) return;
        const {
          Jp: Ob,
          fsMap: Gb
        } = Lu;
        if (function(bb, ub, hb) {
            const Bb = new Set;
            for (const [Ob, Gb] of Object.entries(hb)) {
              const hb = Ju(Ob);
              Bb.add(hb);
              const Ub = Gb || "\n";
              ub.get(hb) !== Ub && (ub.set(hb, Ub), eu(bb, hb, Ub))
            }
            for (const Ob of [...ub.keys()]) "/globals.d.ts" === Ob || "/lib.d.ts" === Ob || Ob.startsWith("/node_modules/") || Ob.startsWith("/plugin-preview/") || Bb.has(Ob) || (ub.delete(Ob), bb.getSourceFile(Ob) && bb.deleteFile(Ob))
          }(Ob, Gb, null !== Tb && void 0 !== Tb ? Tb : {
            [Wb.m]: hb || "\n"
          }), Rb) return void eu(Ob, nu, hu || "\n");
        const Ub = null !== (bb = null === (Bb = Zu.current) || void 0 === Bb ? void 0 : Bb.state.doc.toString()) && void 0 !== bb ? bb : hb;
        eu(Ob, nu, Ub || "\n")
      }), [Tb, cb, Lu, Rb, hu, nu, hb, ub]), (0, Ub.useEffect)((() => {
        if (!Lu) return;
        const {
          Jp: bb
        } = Lu;
        eu(bb, nu, (Rb ? hu : hb) || "\n")
      }), [hb, Rb, hu, nu, Lu]), (0, Ub.useEffect)((() => () => {
        lu.current && (lu.current(), lu.current = null)
      }), []), (0, Ub.useEffect)((() => (Bu(((bb, ub) => {
        if (Rb) return !1;
        const hb = Zu.current,
          Bb = Xu.current,
          Ob = Bb ? (0, Cb.s)(Bb.docKey) : null;
        if (!hb || !Bb || pu.current !== Bb.clientID || bb !== Ob) return !1;
        const Gb = hb.state.doc.toString();
        return Gb !== ub && hb.dispatch({
          changes: {
            from: 0,
            to: Gb.length,
            insert: ub
          }
        }), !0
      })), () => {
        Zu.current = null, pu.current = null, Bu(null)
      })), [Bu, Rb]);
      const Du = ub ? Rb ? null : null !== cb && void 0 !== cb ? cb : Wb.m : Au.b,
        xu = uu(Zu, Du);
      Ou(Zu, Xb), (0, rb.h)("FormatCode", (() => {
        if (!Lu || !Zu.current || Rb) return;
        const {
          Jp: bb,
          fsMap: hb
        } = Lu, Bb = bb.getSourceFile(nu).getFullText();
        let Ob = 0;
        if (ub && Tb)
          for (const [ub, Lb] of Object.entries(Tb)) ub !== (null !== cb && void 0 !== cb ? cb : Wb.m) && (Ob += Lb.length);
        const Gb = function(bb, ub, hb, Bb, Ob) {
          const Gb = bb.languageService.getFormattingEditsForDocument(Bb, qu);
          if (!Gb.length) return nb.b.error("Code is already formatted.");
          Gb.sort(((bb, ub) => ub.span.start - bb.span.start));
          let Ub = bb.getSourceFile(Bb).getFullText();
          for (const Lb of Gb) Ub = Ub.slice(0, Lb.span.start) + Lb.Oa + Ub.slice(Lb.span.start + Lb.span.length);
          return Ub !== (hb ? (0, db.j)(Ub, Ob) : (0, db.i)(Ub)) ? nb.b.error("Formatting the code will go beyond the character limit.") : nb.b.value(Ub)
        }(bb, 0, ub, nu, Ob);
        if (Gb.isError()) return void Xb({
          message: Gb.asError().message,
          type: "warning"
        });
        const Ub = Gb.getValue();
        Ub && (Zu.current.dispatch({
          changes: {
            from: 0,
            to: Bb.length,
            insert: Ub
          },
          selection: {
            anchor: Ub.length
          }
        }), eu(bb, nu, Ub), Lb(Ub))
      }));
      const zu = (0, Ub.useMemo)((() => {
        if (!Lu) return [];
        const {
          Jp: bb,
          fsMap: hb
        } = Lu;
        ! function(bb, ub, hb, Bb) {
          if (bb.getSourceFile(hb)) return;
          const Ob = Bb || "\n";
          ub.set(hb, Ob), bb.createFile(hb, Ob)
        }(bb, hb, nu, (Rb ? ju.current : Cu.current) || "\n");
        const Ub = ub && Nu(Rb ? null !== bu && void 0 !== bu ? bu : "index.ts" : cb),
          Lb = [(0, Ob.e)({
            jsx: !1,
            typescript: Ub
          }), Gb.f.highest(Gb.c.domEventHandlers({
            keydown: bb => "Escape" === bb.key ? (Wu.current(), bb.stopPropagation(), !0) : (bb.stopPropagation(), !1)
          })), (0, Bb.b)({
            override: [Mu(bb, nu)]
          }), zb.q.fromClass(class {
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
                (0, sb.eb)(this.view.state, bb) || (0, sb.F)(this.view, bb, Mb) || this.scheduleParse()
              }), mb))
            }
          }), ...Qb, Gb.c.lineWrapping, Gb.k.define({
            create: Iu(bb, yb, nu),
            update(ub, hb) {
              const Bb = hb.effects.some((bb => bb.is(Eu)));
              return hb.docChanged || hb.selection || Bb ? (eu(bb, nu, hb.state.doc.toString() || " "), Iu(bb, yb, nu)(hb.state)) : ub
            },
            provide: bb => Gb.s.computeN([bb], (ub => ub.field(bb)))
          }), (0, Gb.q)(Pu(bb, nu)), (0, Ab.h)(su(ub, bb, nu)), Gb.m.fromClass(class {
            constructor(bb) {
              this.view = bb, this.searchPanel = null
            }
            update(bb) {
              const ub = bb.view.dom.querySelector(".cm-search");
              if (ub !== this.searchPanel) {
                if (this.searchPanel = ub, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (bb => {
                  "Escape" === bb.key && (0, ob.d)(this.view), bb.stopPropagation()
                }))
              }
            }
          })];
        Gu && !Rb && Lb.push(du(ub ? null !== cb && void 0 !== cb ? cb : Wb.m : Au.b, Uu));
        const Yb = Xu.current;
        if (Yb && !Rb) {
          Lb.push(... function(bb, ub, hb, Bb, Ob) {
            let Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Ub = (0, Cb.s)(hb),
              Lb = zb.q.fromClass(class {
                constructor(bb) {
                  this.view = bb, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = vb.i.subscribe("codeCollab", (bb => {
                    bb.docKey === Ub && bb.type === Cb.d.Updates && (bb.updates ? this.applyUpdates(bb.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(bb) {
                  const ub = JSON.parse(bb).map((bb => ({
                    clientID: bb.clientID,
                    changes: xb.ChangeSet.fromJSON(bb.changes)
                  })));
                  ub.length > 0 && (this.view.dispatch((0, Db.f)(this.view.state, ub)), Ob && Ob(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(bb) {
                  Gb && (bb.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const bb = (0, Db.h)(this.view.state);
                  if (this.pushing || !bb.length) return;
                  const ub = Date.now() - this.lastPushTime;
                  if (ub < Nb) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Nb - ub)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Jb);
                  const hb = (0, Db.e)(this.view.state),
                    Ob = bb.map((bb => ({
                      clientID: bb.clientID,
                      changes: bb.changes.toJSON()
                    }))),
                    Gb = JSON.stringify(Ob);
                  Gb.length <= Cb.f ? gb.gameBridge.send("sendCodeCollab", {
                    vu: Cb.b.Push,
                    tu: Ub,
                    Ju: hb,
                    Mu: Gb
                  }) : (0, tb.postJsonWithMetricsCookiesAndJsonResponse)(`${Bb.gsUrl}/code/collab-push`, ib.t["collab-push"].toBuffer({
                    gameNameWithVariation: Bb.gameNameWithVariation,
                    lobbyName: Bb.lobbyName,
                    docKey: Ub,
                    version: hb,
                    updates: Gb
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
                  const bb = (0, Db.e)(this.view.state);
                  (0, tb.postJsonWithMetricsCookiesAndJsonResponse)(`${Bb.gsUrl}/code/collab-pull`, ib.t["collab-pull"].toBuffer({
                    gameNameWithVariation: Bb.gameNameWithVariation,
                    lobbyName: Bb.lobbyName,
                    docKey: Ub,
                    fromVersion: bb
                  }), {
                    retries: 1
                  }).then((bb => {
                    this.destroyed || (bb.fullDoc ? vb.i.vp("codeCollabRejoin", {
                      docKey: Ub,
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
                  if (bb - this.lastCursorSent < eb) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), eb)));
                  this.lastCursorSent = bb;
                  const ub = this.view.state.selection.main;
                  gb.gameBridge.send("sendCodeCollab", {
                    vu: Cb.b.Cursor,
                    tu: Ub,
                    qu: ub.anchor,
                    Eu: ub.head
                  })
                }
                destroy() {
                  this.destroyed = !0, vb.i.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Db.c)({
              startVersion: bb,
              clientID: ub
            }), Lb]
          }(Su, au, Yb.docKey, Yb.httpConfig, (bb => {
            var ub;
            null === (ub = wu.current) || void 0 === ub || ub.call(wu, bb)
          }), wb));
          const bb = function(bb, ub) {
            const hb = (0, Cb.s)(bb);
            return {
              extensions: [Fb],
              connect(bb) {
                if (ub) {
                  const hb = ub.map((bb => Pb.of({
                    playerId: bb.playerId,
                    playerName: bb.playerName,
                    colour: bb.colour,
                    anchor: bb.anchor,
                    head: bb.head,
                    lastMoved: Date.now()
                  })));
                  hb.length > 0 && bb.dispatch({
                    effects: hb
                  })
                }
                const Bb = vb.i.subscribe("codeCollab", (ub => {
                    if (ub.docKey === hb)
                      if (ub.type === Cb.d.RemoteCursor) bb.dispatch({
                        effects: Pb.of({
                          playerId: ub.playerId,
                          playerName: ub.playerName,
                          colour: ub.colour,
                          anchor: ub.anchor,
                          head: ub.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (ub.type === Cb.d.Presence) {
                      const hb = JSON.parse(ub.peers),
                        Bb = new Set(hb.map((bb => bb.playerId))),
                        Ob = bb.state.field(Fb),
                        Gb = [];
                      for (const [bb] of Ob.cursors) Bb.has(bb) || Gb.push(qb.of(bb));
                      Gb.length > 0 && bb.dispatch({
                        effects: Gb
                      })
                    }
                  })),
                  Ob = setInterval((() => {
                    bb.dom.isConnected ? bb.dispatch({
                      effects: Eb.of(Date.now())
                    }) : clearInterval(Ob)
                  }), Ib);
                return () => {
                  vb.i.unsubscribe(Bb), clearInterval(Ob)
                }
              }
            }
          }(Yb.docKey, Yb.existingCursors);
          Lb.push(...bb.extensions), Ku.current = bb.connect
        } else Ku.current = null;
        return Lb
      }), [ub, Lu, yb, Su, au, nu, cb, Rb, bu, wb, Gu, Uu]);
      if (!Lu || !fb && !Rb) return (0, ru.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, ru.jsx)(lb.c, {})
      });
      const gu = Rb ? `plugin-${Rb}-${null!==bu&&void 0!==bu?bu:"index.ts"}` : fb ? `collab-${fb.clientID}` : `local-${ub}`;
      return (0, ru.jsx)(Gb.p, {
        value: Rb ? null !== hu && void 0 !== hu ? hu : "" : hb,
        onChange: Lb,
        extensions: zu,
        className: "CodeEditorContent",
        theme: Vb ? ou : "dark",
        editable: wb && !Rb,
        basicSetup: yu,
        onCreateEditor: bb => {
          var ub;
          Zu.current = bb, pu.current = null !== (ub = null === fb || void 0 === fb ? void 0 : fb.clientID) && void 0 !== ub ? ub : null, xu(bb), lu.current && lu.current(), Ku.current && (lu.current = Ku.current(bb))
        }
      }, gu)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);