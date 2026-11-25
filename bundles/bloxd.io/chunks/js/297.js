export const id = 297;
export const ids = [297];
export const modules = {
  41533: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => xE
    });
    var su = ju(41541),
      Uu = ju(41592),
      Zu = ju(41596),
      Xu = ju(58),
      lu = ju(65),
      qu = ju(41609),
      fu = ju(41617),
      Cu = ju(4942),
      bu = ju(41619),
      cu = ju(1964),
      Nu = ju(41627),
      Ou = ju(41649),
      Yu = ju.n(Ou),
      hu = ju(41598),
      Du = ju(41606),
      gu = ju(1393),
      Mu = ju(37248),
      eu = ju(1298),
      Gu = ju(2541),
      pu = ju(37139),
      wu = ju(1499),
      Ju = ju(649),
      du = ju(1301),
      au = ju(41720),
      Pu = ju(41550),
      ou = ju(41553),
      ku = ju(1986),
      mu = ju(3946),
      vu = ju(24),
      Ku = ju(1183);
    const Vu = 1e4,
      ru = 250,
      Qu = 250;
    var iu = ju(41571);
    const Wu = 50,
      Su = 100;
    const Iu = 2e3,
      Fu = Pu.L.define(),
      Bu = Pu.L.define(),
      Lu = Pu.L.define();
    class tu extends ou.r {
      constructor(uu, Eu, ju) {
        super(), this.colour = uu, this.playerName = Eu, this.showName = ju
      }
      toDOM() {
        const uu = document.createElement("span");
        uu.className = "cm-remote-cursor-wrapper", uu.style.borderLeftColor = this.colour;
        const Eu = document.createElement("span");
        if (Eu.className = "cm-remote-cursor", Eu.style.borderLeftColor = this.colour, uu.appendChild(Eu), this.showName) {
          const Eu = document.createElement("span");
          Eu.className = "cm-remote-cursor-name", Eu.style.backgroundColor = this.colour, Eu.textContent = this.playerName, uu.appendChild(Eu)
        }
        return uu
      }
      eq(uu) {
        return this.colour === uu.colour && this.playerName === uu.playerName && this.showName === uu.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function xu(uu, Eu) {
      const ju = [],
        su = [];
      for (const [, Xu] of uu) {
        const uu = Eu - Xu.lastMoved < Iu;
        if (ju.push({
            pos: Xu.head,
            decoration: ou.e.widget({
              widget: new tu(Xu.colour, Xu.playerName, uu),
              side: 1
            })
          }), Xu.anchor !== Xu.head) {
          const uu = Math.min(Xu.anchor, Xu.head),
            Eu = Math.max(Xu.anchor, Xu.head);
          su.push({
            from: uu,
            to: Eu,
            decoration: ou.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Xu.colour}33`
              }
            })
          })
        }
      }
      const Uu = new Pu.C,
        Zu = [];
      for (const Xu of ju) Zu.push({
        bias: 1,
        deco: Xu.decoration,
        from: Xu.pos,
        to: Xu.pos
      });
      for (const Xu of su) Zu.push({
        bias: 0,
        deco: Xu.decoration,
        from: Xu.from,
        to: Xu.to
      });
      Zu.sort(((uu, Eu) => uu.from - Eu.from || uu.deco.startSide - Eu.deco.startSide || uu.bias - Eu.bias));
      for (const Xu of Zu) Uu.add(Xu.from, Xu.to, Xu.deco);
      return Uu.finish()
    }
    const Tu = Pu.N.define({
      create: () => ({
        cursors: new Map,
        Cs: ou.e.none
      }),
      update(uu, Eu) {
        let ju = uu.cursors,
          su = !1;
        if (Eu.docChanged) {
          const uu = new Map;
          for (const [su, Uu] of ju) uu.set(su, {
            ...Uu,
            anchor: Eu.changes.mapPos(Uu.anchor, 1),
            head: Eu.changes.mapPos(Uu.head, 1)
          });
          ju = uu, su = !0
        }
        for (const Uu of Eu.effects)
          if (Uu.is(Fu)) {
            if (!Number.isInteger(Uu.value.anchor) || !Number.isInteger(Uu.value.head)) {
              console.warn(`Code Editor: ignored player ${Uu.value.playerId}'s cursor at ${Uu.value.anchor}-${Uu.value.head}`);
              continue
            }
            const Zu = Eu.state.doc.length,
              Xu = {
                ...Uu.value,
                anchor: Math.min(Uu.value.anchor, Zu),
                head: Math.min(Uu.value.head, Zu)
              };
            ju === uu.cursors && (ju = new Map(ju)), ju.set(Xu.playerId, Xu), su = !0
          } else Uu.is(Bu) ? ju.has(Uu.value) && (ju === uu.cursors && (ju = new Map(ju)), ju.delete(Uu.value), su = !0) : Uu.is(Lu) && (su = !0);
        return su ? {
          cursors: ju,
          Cs: xu(ju, Date.now())
        } : uu
      },
      provide: uu => ou.l.Cs.from(uu, (uu => uu.Cs))
    });
    const Hu = Pu.L.define(),
      Au = ou.e.mark({
        class: "CodeInsertFlash"
      }),
      nu = Pu.N.define({
        create: () => ou.e.none,
        update(uu, Eu) {
          let ju = uu.map(Eu.changes);
          for (const su of Eu.effects) su.is(Hu) && (ju = su.value ? ou.e.set(Au.range(su.value.from, su.value.to)) : ou.e.none);
          return ju
        },
        provide: uu => ou.l.Cs.from(uu)
      }),
      yu = Pu.N.define({
        create: () => !1,
        update: (uu, Eu) => uu || void 0 !== Eu.annotation(Pu.Q.userEvent) && !Eu.annotation(Pu.Q.remote)
      }),
      zu = [nu, yu];

    function Ru(uu) {
      return uu.field(yu)
    }
    const uE = 3e4;

    function EE(uu, Eu) {
      const ju = (0, Xu.useRef)(null);
      (0, Xu.useEffect)((() => {
        var uu;
        (null === (uu = ju.current) || void 0 === uu ? void 0 : uu.path) !== Eu && (ju.current = null)
      }), [Eu]);
      const su = uu => {
        var su;
        const Uu = ju.current;
        if (null === uu || void 0 === uu || !uu.dom.isConnected || !Uu || Uu.path !== Eu) return;
        ju.current = null;
        const {
          oN: Xu
        } = Uu;
        if (Xu && null !== Xu.text && performance.now() - Xu.at < uE) {
          const Eu = function(uu, Eu) {
            if (uu === Eu) return null;
            const ju = Math.min(uu.length, Eu.length);
            let su = 0;
            for (; su < ju && uu[su] === Eu[su];) su++;
            let Uu = 0;
            for (; Uu < ju - su && uu[uu.length - 1 - Uu] === Eu[Eu.length - 1 - Uu];) Uu++;
            return {
              from: su,
              to: uu.length - Uu,
              insert: Eu.slice(su, Eu.length - Uu)
            }
          }(uu.state.doc.toString(), Xu.text);
          null !== Eu && uu.dispatch({
            changes: Eu,
            userEvent: Xu.placed ? "input" : void 0
          })
        }
        const {
          doc: lu
        } = uu.state, qu = lu.line(Math.min(Math.max(Uu.line, 1), lu.lines)), fu = qu.from + Math.min(null !== (su = Uu.column) && void 0 !== su ? su : 0, qu.length);
        uu.dispatch({
          selection: {
            anchor: fu
          },
          effects: Zu.c.scrollIntoView(fu, {
            y: "center"
          }),
          userEvent: null !== Xu && void 0 !== Xu && Xu.placed ? "select" : void 0
        }), !1 !== (null === Xu || void 0 === Xu ? void 0 : Xu.focused) && uu.focus()
      };
      return (0, wu.f)("CodeEditorGoToLine", (Eu => {
        ju.current = Eu, su(uu.current)
      })), (0, wu.f)("CodeEditorKeepEdits", (() => {
        const su = uu.current;
        if (null === su || !su.dom.isConnected || null === Eu) return;
        const {
          doc: Uu,
          selection: Zu
        } = su.state, {
          head: Xu
        } = Zu.main, lu = Uu.lineAt(Xu), qu = {
          text: (0, au.m)(su.state).length > 0 ? Uu.toString() : null,
          at: performance.now(),
          focused: su.hasFocus,
          placed: Ru(su.state)
        };
        ju.current = {
          path: Eu,
          line: lu.number,
          column: Xu - lu.from,
          oN: qu
        }
      })), uu => {
        var Uu;
        const Zu = ju.current;
        !1 === (null === Zu || void 0 === Zu || null === (Uu = Zu.oN) || void 0 === Uu ? void 0 : Uu.focused) && Zu.path === Eu || uu.focus(), su(uu)
      }
    }
    var jE = ju(4526),
      sE = ju(1244);

    function UE(uu, Eu) {
      const {
        t: ju
      } = (0, sE.A)();
      (0, wu.f)("CodeEditorInsertText", (su => {
        let {
          text: Uu,
          focus: Zu
        } = su;
        const Xu = uu.current,
          lu = null !== Xu && void 0 !== Xu && Xu.dom.isConnected ? function(uu, Eu) {
            if (!Ru(uu)) return null;
            const {
              from: ju,
              to: su
            } = uu.selection.main, Uu = ju + Eu.length;
            return {
              changes: {
                from: ju,
                to: su,
                insert: Eu
              },
              selection: {
                anchor: Uu
              },
              effects: [ou.l.scrollIntoView(Uu, {
                y: "center"
              }), Hu.of({
                from: ju,
                to: Uu
              })],
              userEvent: "input"
            }
          }(Xu.state, Uu) : null;
        null !== Xu && null !== lu ? (Xu.dispatch(lu), Zu && Xu.focus(), setTimeout((() => {
          Xu.dom.isConnected && Xu.dispatch({
            effects: Hu.of(null)
          })
        }), 1500)) : (0, jE.b)(Uu).then((() => {
          Eu({
            message: ju("codeEditorWorld:pickCopied", {
              coords: Uu
            }),
            type: "success"
          })
        }), (uu => {
          console.error("Pick could not copy the coordinates", uu), Eu({
            message: ju("codeEditorWorld:pickPlaceCursor", {
              coords: Uu
            }),
            type: "warning"
          })
        }))
      }))
    }
    var ZE = ju(41586);
    const XE = "#e45649",
      lE = "#383a42",
      qE = "#696c77",
      fE = "#986801",
      CE = "#e5e5e6",
      bE = "#fafafa",
      cE = "#eaeaeb",
      NE = "#526fff",
      OE = ou.l.theme({
        "&": {
          color: lE,
          backgroundColor: bE
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
          color: lE
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
          backgroundColor: bE,
          color: qE,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: CE
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: cE
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: cE,
          borderBottomColor: cE
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: CE,
            color: lE
          }
        }
      }, {
        dark: !1
      }),
      YE = iu.d.define([{
        tag: ZE.l.keyword,
        color: "#a626a4"
      }, {
        tag: [ZE.l.name, ZE.l.deleted, ZE.l.character, ZE.l.propertyName, ZE.l.macroName],
        color: XE
      }, {
        tag: [ZE.l.function(ZE.l.variableName), ZE.l.labelName],
        color: "#4078f2"
      }, {
        tag: [ZE.l.color, ZE.l.constant(ZE.l.name), ZE.l.standard(ZE.l.name)],
        color: fE
      }, {
        tag: [ZE.l.definition(ZE.l.name), ZE.l.separator],
        color: lE
      }, {
        tag: [ZE.l.typeName, ZE.l.className, ZE.l.number, ZE.l.changed, ZE.l.annotation, ZE.l.modifier, ZE.l.self, ZE.l.namespace],
        color: "#c18401"
      }, {
        tag: [ZE.l.operator, ZE.l.operatorKeyword, ZE.l.url, ZE.l.escape, ZE.l.regexp, ZE.l.link, ZE.l.special(ZE.l.string)],
        color: "#0184bc"
      }, {
        tag: [ZE.l.meta, ZE.l.comment],
        color: qE
      }, {
        tag: ZE.l.strong,
        fontWeight: "bold"
      }, {
        tag: ZE.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: ZE.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: ZE.l.link,
        color: qE,
        textDecoration: "underline"
      }, {
        tag: ZE.l.heading,
        fontWeight: "bold",
        color: XE
      }, {
        tag: [ZE.l.atom, ZE.l.bool, ZE.l.special(ZE.l.variableName)],
        color: fE
      }, {
        tag: [ZE.l.processingInstruction, ZE.l.string, ZE.l.inserted],
        color: "#50a14f"
      }, {
        tag: ZE.l.invalid,
        color: "#000000"
      }]),
      hE = [OE, (0, iu.kb)(YE)];
    var DE = ju(37304),
      gE = ju(41728);
    const ME = Zu.g.define(),
      eE = Zu.i.define({
        create: () => !1,
        update(uu, Eu) {
          for (const ju of Eu.effects) ju.is(ME) && (uu = ju.value);
          return uu
        }
      }),
      GE = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function pE(uu, Eu) {
      return [eE, Zu.l.fromClass(class {
        constructor(uu) {
          this.view = uu, this.onDown = uu => {
            const Eu = uu.target instanceof Element && null !== uu.target.closest(".cm-tooltip");
            0 !== uu.button || Eu || this.view.state.field(eE) || this.view.dispatch({
              effects: ME.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(eE) && this.view.dispatch({
              effects: ME.of(!1)
            })
          }, uu.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Zu.u.compute(["selection", eE], (ju => function(uu, Eu, ju) {
        const su = uu.selection.main;
        return su.empty || uu.field(eE) || uu.sliceDoc(su.from, su.to).trim().length < 2 ? null : {
          pos: su.from,
          above: !0,
          create: uu => {
            const su = document.createElement("div");
            su.className = "CodeSelectionActions", su.setAttribute("role", "toolbar"), su.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Uu,
                label: Zu
              }
              of GE) {
              if (!ju && "explain" !== Uu) continue;
              const Xu = document.createElement("button");
              Xu.type = "button", Xu.textContent = Zu, "change" !== Uu && (Xu.title = gE.e, Xu.dataset.asksAi = "true"), Xu.addEventListener("mousedown", (uu => {
                uu.preventDefault()
              })), Xu.addEventListener("click", (() => {
                const ju = uu.state.selection.main;
                if (ju.empty) return;
                const su = {
                  action: Uu,
                  path: Eu,
                  fromLine: uu.state.doc.lineAt(ju.from).number,
                  toLine: uu.state.doc.lineAt(ju.to > ju.from && uu.state.doc.lineAt(ju.to).from === ju.to ? ju.to - 1 : ju.to).number,
                  text: uu.state.sliceDoc(ju.from, ju.to)
                };
                vu.h.TY("WorldCodeAiSelection", su), uu.dispatch({
                  selection: {
                    anchor: ju.to
                  }
                })
              })), su.appendChild(Xu)
            }
            return {
              dom: su
            }
          }
        }
      }(ju, uu, Eu)))]
    }
    var wE = ju(1154);
    const JE = new Set(["(", "{", "[", "<"]),
      dE = new Set([")", "}", "]", ">"]),
      aE = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function PE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function ju(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = [];
        for (const Uu of uu) {
          let uu;
          uu = "punctuation" === Uu.kind ? aE.text : "parameterName" === Uu.kind ? aE.parameterName : Eu, su.push({
            str: Uu.text,
            style: {
              color: uu,
              opacity: ju ? .5 : void 0
            }
          })
        }
        return su
      }
      const su = [];
      if (su.push(...ju(uu.prefixDisplayParts, aE.text)), uu.parameters.length > 0) {
        su.push("\n");
        for (let Uu = 0; Uu < uu.parameters.length; Uu++) {
          const Zu = uu.parameters[Uu];
          su.push("\t"), su.push(...ju(Zu.displayParts, aE.parameter, null !== Eu && Uu !== Eu)), su.push("\n")
        }
      }
      return su.push(...ju(uu.suffixDisplayParts, aE.suffix)), uu.documentation && (su.push("\n\n"), su.push(...ju(uu.documentation, aE.docs))), su
    }
    var oE = function(uu) {
      return uu[uu.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", uu[uu.DuplicateIdentifier = 2300] = "DuplicateIdentifier", uu
    }(oE || {});
    const kE = new Set([oE.DuplicateIdentifier]),
      mE = new Set([oE.VariableDefinedElsewhere]),
      vE = new Set([]),
      KE = "/index.js";

    function VE(uu) {
      return "/" + uu
    }

    function rE(uu, Eu, ju) {
      uu.getSourceFile(Eu) && uu.deleteFile(Eu), uu.createFile(Eu, ju)
    }

    function QE(uu) {
      return !!uu && ((0, Gu.k)(uu) || (0, Gu.i)(uu))
    }

    function iE(uu, Eu, ju) {
      return () => {
        let su = [...Eu.languageService.getSemanticDiagnostics(ju), ...Eu.languageService.getSyntacticDiagnostics(ju)];
        return su = su.filter((uu => !(0, Ju.H)(uu.start) && !(0, Ju.H)(uu.length) && !kE.has(uu.code))), uu || (su = su.filter((uu => !mE.has(uu.code)))), su.map((uu => ({
          from: uu.start,
          to: uu.start + uu.length,
          message: "string" === typeof uu.messageText ? uu.messageText : uu.messageText.messageText,
          severity: vE.has(uu.code) ? "warning" : "error"
        })))
      }
    }

    function WE(uu, Eu) {
      return ju => {
        var su, Uu;
        const Zu = uu.languageService.getCompletionsAtPosition(Eu, ju.pos, {});
        if (!Zu) return {
          from: ju.pos,
          options: []
        };
        let Xu = null !== (su = null === (Uu = Zu.optionalReplacementSpan) || void 0 === Uu ? void 0 : Uu.start) && void 0 !== su ? su : ju.pos;
        if (!Zu.optionalReplacementSpan) {
          const uu = ju.state.doc.sliceString(0, ju.pos);
          for (; Xu > 0 && /[\w$]/.test(uu[Xu - 1]);) Xu--
        }
        return Zu.entries = Zu.entries.filter((uu => uu.kind !== Yu().ScriptElementKind.warning)), {
          from: Xu,
          options: Zu.entries.map((su => {
            var Uu, Zu, lu, qu;
            const fu = uu.languageService.getCompletionEntryDetails(Eu, ju.pos, su.name, {}, su.source, {}, su.data),
              Cu = null !== (Uu = null === (Zu = su.replacementSpan) || void 0 === Zu ? void 0 : Zu.start) && void 0 !== Uu ? Uu : Xu,
              bu = su.replacementSpan ? su.replacementSpan.start + su.replacementSpan.length : ju.pos,
              cu = null !== (lu = su.insertText) && void 0 !== lu ? lu : su.name;
            return {
              label: su.name,
              detail: null === fu || void 0 === fu ? void 0 : fu.displayParts.map((uu => uu.text)).join(""),
              info: null === fu || void 0 === fu || null === (qu = fu.documentation) || void 0 === qu ? void 0 : qu.map((uu => uu.text)).join(""),
              apply: uu => {
                uu.dispatch({
                  changes: {
                    from: Cu,
                    to: bu,
                    insert: cu
                  },
                  selection: {
                    anchor: Cu + cu.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function SE(uu) {
      return Eu => {
        const ju = document.createElement("div");
        ju.className = "CodeEditorTooltip";
        let su = !1;
        return queueMicrotask((() => {
          su || (lu.render((0, wE.jsx)(cu.d, {
            text: uu
          }), ju), Eu.requestMeasure())
        })), {
          dom: ju,
          destroy() {
            su = !0, queueMicrotask((() => {
              lu.unmountComponentAtNode(ju)
            }))
          }
        }
      }
    }

    function IE(uu, Eu, ju) {
      return su => {
        var Uu;
        if (!Eu) return [];
        const Zu = null === (Uu = su.selection.HY[0]) || void 0 === Uu ? void 0 : Uu.head;
        if (void 0 === Zu) return [];
        const Xu = uu.languageService.getSignatureHelpItems(ju, Zu, {});
        if (!Xu || !Xu.items.length) return [];
        const lu = Xu.applicableSpan.start - Xu.items[0].prefixDisplayParts.map((uu => uu.text)).join("").length,
          qu = Xu.applicableSpan.start,
          fu = su.doc.lineAt(Zu),
          Cu = fu.from,
          bu = Math.min(fu.to, Zu);
        let cu, Nu;
        return lu < Cu ? (cu = Cu, Nu = bu) : (cu = lu, Nu = qu), [{
          pos: cu,
          end: Nu,
          above: !1,
          create: SE(PE(Xu.items[0], Xu.argumentIndex))
        }]
      }
    }

    function FE(uu, Eu) {
      return (ju, su, Uu) => {
        const Zu = uu.languageService.getQuickInfoAtPosition(Eu, su);
        if (!Zu) return [];
        const Xu = Zu.textSpan.start,
          lu = Zu.textSpan.start + Zu.textSpan.length;
        if (su < Xu || su >= lu) return [];
        if (Zu.kind === Yu().ScriptElementKind.memberFunctionElement || Zu.kind === Yu().ScriptElementKind.variableElement && "declare" === Zu.kindModifiers) {
          const uu = Zu.displayParts.findIndex((uu => "space" === uu.kind)); - 1 !== uu && (Zu.displayParts = Zu.displayParts.slice(uu));
          const Eu = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            ju = Zu.displayParts.findIndex((uu => "punctuation" === uu.kind && "(" === uu.text)); - 1 !== ju && (Eu.prefixDisplayParts = Zu.displayParts.slice(0, ju + 1), Zu.displayParts = Zu.displayParts.slice(ju + 1));
          const su = Zu.displayParts.findLastIndex((uu => "punctuation" === uu.kind && ")" === uu.text)); - 1 !== su && (Eu.suffixDisplayParts = Zu.displayParts.slice(su), Zu.displayParts = Zu.displayParts.slice(0, su));
          let Uu = 0,
            qu = [];
          for (const Xu of Zu.displayParts)
            if (JE.has(Xu.text) ? Uu++ : dE.has(Xu.text) && Uu--, "lineBreak" !== Xu.kind) {
              if ("space" === Xu.kind) {
                if (0 === qu.length) continue;
                qu.push({
                  kind: "space",
                  text: " "
                })
              } else qu.push(Xu);
              0 === Uu && "," === Xu.text && (Eu.parameters.push({
                displayParts: qu
              }), qu = [])
            } return qu.length > 0 && Eu.parameters.push({
            displayParts: qu
          }), Eu.documentation = Zu.documentation, [{
            pos: Xu,
            end: lu,
            above: !0,
            create: SE(PE(Eu))
          }]
        }
        const qu = [];
        for (const uu of Zu.displayParts) qu.push({
          str: uu.text,
          style: {
            color: aE.text
          }
        });
        if (Zu.documentation) {
          qu.push("\n\n");
          for (const uu of Zu.documentation) qu.push({
            str: uu.text,
            style: {
              color: aE.docs
            }
          })
        }
        return [{
          pos: Xu,
          end: lu,
          above: !0,
          create: SE(qu)
        }]
      }
    }
    const BE = {
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
      semicolons: Yu().SemicolonPreference.Insert
    };
    const LE = Zu.g.define(),
      tE = {
        lineNumbers: !0,
        tabSize: 4
      };

    function xE(uu) {
      let {
        isLobbyCode: Eu,
        code: ju,
        onChange: lu,
        canEditCode: cu,
        setTemporaryMessage: Ou,
        close: Ju,
        showTooltips: tu,
        lightMode: xu,
        collabState: Hu,
        onRemoteDocChange: Au,
        files: nu,
        activePath: yu,
        pluginName: Ru,
        pluginFile: uE,
        pluginSource: jE,
        setActiveDocReplacer: sE,
        showAiHints: ZE,
        canAiChangeCode: XE = cu
      } = uu;
      const [lE, qE] = (0, Xu.useState)(null), fE = null === Hu || void 0 === Hu ? void 0 : Hu.version, CE = null === Hu || void 0 === Hu ? void 0 : Hu.clientID, bE = (0, Xu.useRef)({
        isLobbyCode: Eu,
        files: nu,
        code: ju,
        activePath: yu
      }), cE = (0, Xu.useRef)(Au);
      cE.current = Au;
      const NE = (0, Xu.useRef)(null),
        OE = (0, Xu.useRef)(Hu);
      OE.current = Hu;
      const YE = (0, Xu.useRef)(null),
        gE = (0, Xu.useRef)(null),
        ME = (0, Xu.useRef)(null),
        eE = (0, Xu.useRef)(Ju);
      eE.current = Ju;
      const GE = (0, Xu.useRef)(ju);
      GE.current = ju;
      const JE = (0, Xu.useRef)(jE);
      JE.current = jE;
      const dE = function(uu, Eu, ju, su) {
        return ju ? `/plugin-preview/${ju}/${null!==su&&void 0!==su?su:"index.ts"}` : uu ? VE(null !== Eu && void 0 !== Eu ? Eu : eu.h) : KE
      }(Eu, yu, Ru, uE);
      (0, Xu.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: uu,
            files: Eu,
            code: ju,
            activePath: su
          } = bE.current, Uu = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Yu().ModuleKind.ESNext,
            moduleResolution: Yu().ModuleResolutionKind.Bundler,
            target: Yu().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Mu.h).map((uu => [uu.specifier, [uu.typesVfsPath]])))
            }
          }, Zu = new Map, Xu = [];
          if (uu) {
            const uu = null !== Eu && void 0 !== Eu ? Eu : {
              [eu.h]: ju || "\n"
            };
            for (const [Eu, ju] of Object.entries(uu)) {
              const uu = VE(Eu);
              Zu.set(uu, ju || "\n"), Xu.push(uu)
            }
            const Uu = VE(null !== su && void 0 !== su ? su : eu.h);
            Zu.has(Uu) ? Zu.set(Uu, ju || "\n") : (Zu.set(Uu, ju || "\n"), Xu.push(Uu)), Zu.set("/node_modules/@bloxd/index.d.ts", Cu.default), Xu.push("/node_modules/@bloxd/index.d.ts");
            for (const Eu of Object.values(Mu.h)) {
              Zu.set(Eu.typesVfsPath, Eu.types), Xu.push(Eu.typesVfsPath);
              for (const [uu, ju] of Object.entries(Eu.files)) {
                const su = `/plugin-preview/${Eu.name}/${uu}`;
                Zu.set(su, ju || "\n"), Xu.push(su)
              }
            }
          } else Zu.set(KE, ju || "\n"), Xu.push(KE);
          Zu.set("/globals.d.ts", uu ? fu.d : qu.e), Zu.set("/lib.d.ts", bu.c), Xu.push("/globals.d.ts", "/lib.d.ts");
          const lu = Nu.c(Zu),
            cu = Nu.g(lu, Xu, Yu(), Uu);
          qE({
            AY: cu,
            fsMap: Zu
          })
        }()
      }), []), (0, Xu.useEffect)((() => {
        var uu, su;
        if (!lE || !Eu) return;
        const {
          AY: Uu,
          fsMap: Zu
        } = lE;
        if (function(uu, Eu, ju) {
            const su = new Set;
            for (const [Uu, Zu] of Object.entries(ju)) {
              const ju = VE(Uu);
              su.add(ju);
              const Xu = Zu || "\n";
              Eu.get(ju) !== Xu && (Eu.set(ju, Xu), rE(uu, ju, Xu))
            }
            for (const Uu of [...Eu.keys()]) "/globals.d.ts" === Uu || "/lib.d.ts" === Uu || Uu.startsWith("/node_modules/") || Uu.startsWith("/plugin-preview/") || su.has(Uu) || (Eu.delete(Uu), uu.getSourceFile(Uu) && uu.deleteFile(Uu))
          }(Uu, Zu, null !== nu && void 0 !== nu ? nu : {
            [eu.h]: ju || "\n"
          }), Ru) return void rE(Uu, dE, jE || "\n");
        const Xu = null !== (uu = null === (su = NE.current) || void 0 === su ? void 0 : su.state.doc.toString()) && void 0 !== uu ? uu : ju;
        rE(Uu, dE, Xu || "\n")
      }), [nu, yu, lE, Ru, jE, dE, ju, Eu]), (0, Xu.useEffect)((() => {
        if (!lE) return;
        const {
          AY: uu
        } = lE;
        rE(uu, dE, (Ru ? jE : ju) || "\n")
      }), [ju, Ru, jE, dE, lE]), (0, Xu.useEffect)((() => () => {
        gE.current && (gE.current(), gE.current = null)
      }), []), (0, Xu.useEffect)((() => (sE(((uu, Eu) => {
        if (Ru) return !1;
        const ju = NE.current,
          su = OE.current,
          Uu = su ? (0, Gu.r)(su.docKey) : null;
        if (!ju || !su || YE.current !== su.clientID || uu !== Uu) return !1;
        const Zu = ju.state.doc.toString();
        return Zu !== Eu && ju.dispatch({
          changes: {
            from: 0,
            to: Zu.length,
            insert: Eu
          }
        }), !0
      })), () => {
        NE.current = null, YE.current = null, sE(null)
      })), [sE, Ru]);
      const aE = Eu ? Ru ? null : null !== yu && void 0 !== yu ? yu : eu.h : DE.b,
        PE = EE(NE, aE);
      UE(NE, Ou), (0, wu.f)("FormatCode", (() => {
        if (!lE || !NE.current || Ru) return;
        const {
          AY: uu,
          fsMap: ju
        } = lE, su = uu.getSourceFile(dE).getFullText();
        let Uu = 0;
        if (Eu && nu)
          for (const [Eu, lu] of Object.entries(nu)) Eu !== (null !== yu && void 0 !== yu ? yu : eu.h) && (Uu += lu.length);
        const Zu = function(uu, Eu, ju, su, Uu) {
          const Zu = uu.languageService.getFormattingEditsForDocument(su, BE);
          if (!Zu.length) return du.c.error("Code is already formatted.");
          Zu.sort(((uu, Eu) => Eu.span.start - uu.span.start));
          let Xu = uu.getSourceFile(su).getFullText();
          for (const lu of Zu) Xu = Xu.slice(0, lu.span.start) + lu.Gq + Xu.slice(lu.span.start + lu.span.length);
          return Xu !== (ju ? (0, pu.j)(Xu, Uu) : (0, pu.g)(Xu)) ? du.c.error("Formatting the code will go beyond the character limit.") : du.c.value(Xu)
        }(uu, 0, Eu, dE, Uu);
        if (Zu.isError()) return void Ou({
          message: Zu.asError().message,
          type: "warning"
        });
        const Xu = Zu.getValue();
        Xu && (NE.current.dispatch({
          changes: {
            from: 0,
            to: su.length,
            insert: Xu
          },
          selection: {
            anchor: Xu.length
          }
        }), rE(uu, dE, Xu), lu(Xu))
      }));
      const oE = (0, Xu.useMemo)((() => {
        if (!lE) return [];
        const {
          AY: uu,
          fsMap: ju
        } = lE;
        ! function(uu, Eu, ju, su) {
          if (uu.getSourceFile(ju)) return;
          const Uu = su || "\n";
          Eu.set(ju, Uu), uu.createFile(ju, Uu)
        }(uu, ju, dE, (Ru ? JE.current : GE.current) || "\n");
        const Xu = Eu && QE(Ru ? null !== uE && void 0 !== uE ? uE : "index.ts" : yu),
          lu = [(0, Uu.c)({
            jsx: !1,
            typescript: Xu
          }), Zu.d.highest(Zu.c.domEventHandlers({
            keydown: uu => "Escape" === uu.key ? (eE.current(), uu.stopPropagation(), !0) : (uu.stopPropagation(), !1)
          })), (0, su.b)({
            override: [WE(uu, dE)]
          }), ou.o.fromClass(class {
            constructor(uu) {
              this.view = uu, this.timeout = null, this.scheduleParse()
            }
            update(uu) {
              (uu.docChanged || uu.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const uu = this.view.viewport.to;
                (0, iu.ob)(this.view.state, uu) || (0, iu.Q)(this.view, uu, Wu) || this.scheduleParse()
              }), Su))
            }
          }), ...zu, Zu.c.lineWrapping, Zu.i.define({
            create: IE(uu, tu, dE),
            update(Eu, ju) {
              const su = ju.effects.some((uu => uu.is(LE)));
              return ju.docChanged || ju.selection || su ? (rE(uu, dE, ju.state.doc.toString() || " "), IE(uu, tu, dE)(ju.state)) : Eu
            },
            provide: uu => Zu.u.computeN([uu], (Eu => Eu.field(uu)))
          }), (0, Zu.s)(FE(uu, dE)), (0, Du.h)(iE(Eu, uu, dE)), Zu.l.fromClass(class {
            constructor(uu) {
              this.view = uu, this.searchPanel = null
            }
            update(uu) {
              const Eu = uu.view.dom.querySelector(".cm-search");
              if (Eu !== this.searchPanel) {
                if (this.searchPanel = Eu, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (uu => {
                  "Escape" === uu.key && (0, hu.c)(this.view), uu.stopPropagation()
                }))
              }
            }
          })];
        ZE && !Ru && lu.push(pE(Eu ? null !== yu && void 0 !== yu ? yu : eu.h : DE.b, XE));
        const qu = OE.current;
        if (qu && !Ru) {
          lu.push(... function(uu, Eu, ju, su, Uu) {
            let Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Xu = (0, Gu.r)(ju),
              lu = ou.o.fromClass(class {
                constructor(uu) {
                  this.view = uu, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = vu.h.subscribe("codeCollab", (uu => {
                    uu.docKey === Xu && uu.type === Gu.f.Updates && (uu.updates ? this.applyUpdates(uu.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(uu) {
                  const Eu = JSON.parse(uu).map((uu => ({
                    clientID: uu.clientID,
                    changes: Pu.ChangeSet.fromJSON(uu.changes)
                  })));
                  Eu.length > 0 && (this.view.dispatch((0, au.j)(this.view.state, Eu)), Uu && Uu(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(uu) {
                  Zu && (uu.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const uu = (0, au.m)(this.view.state);
                  if (this.pushing || !uu.length) return;
                  const Eu = Date.now() - this.lastPushTime;
                  if (Eu < Qu) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Qu - Eu)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Vu);
                  const ju = (0, au.g)(this.view.state),
                    Uu = uu.map((uu => ({
                      clientID: uu.clientID,
                      changes: uu.changes.toJSON()
                    }))),
                    Zu = JSON.stringify(Uu);
                  Zu.length <= Gu.g ? ku.gameBridge.send("sendCodeCollab", {
                    lZ: Gu.d.Push,
                    qZ: Xu,
                    fZ: ju,
                    cZ: Zu
                  }) : (0, Ku.postJsonWithMetricsCookiesAndJsonResponse)(`${su.gsUrl}/code/collab-push`, mu.p["collab-push"].toBuffer({
                    gameNameWithVariation: su.gameNameWithVariation,
                    lobbyName: su.lobbyName,
                    docKey: Xu,
                    version: ju,
                    updates: Zu
                  }), {
                    retries: 0
                  }).catch((uu => {
                    console.error("[CodeCollab] HTTP push failed", uu)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const uu = (0, au.g)(this.view.state);
                  (0, Ku.postJsonWithMetricsCookiesAndJsonResponse)(`${su.gsUrl}/code/collab-pull`, mu.p["collab-pull"].toBuffer({
                    gameNameWithVariation: su.gameNameWithVariation,
                    lobbyName: su.lobbyName,
                    docKey: Xu,
                    fromVersion: uu
                  }), {
                    retries: 1
                  }).then((uu => {
                    this.destroyed || (uu.fullDoc ? vu.h.TY("codeCollabRejoin", {
                      docKey: Xu,
                      doc: uu.fullDoc,
                      version: uu.version
                    }) : this.applyUpdates(uu.updates))
                  })).catch((uu => {
                    console.error("[CodeCollab] Pull failed", uu)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const uu = Date.now();
                  if (uu - this.lastCursorSent < ru) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), ru)));
                  this.lastCursorSent = uu;
                  const Eu = this.view.state.selection.main;
                  ku.gameBridge.send("sendCodeCollab", {
                    lZ: Gu.d.Cursor,
                    qZ: Xu,
                    hZ: Eu.anchor,
                    DZ: Eu.head
                  })
                }
                destroy() {
                  this.destroyed = !0, vu.h.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, au.d)({
              startVersion: uu,
              clientID: Eu
            }), lu]
          }(fE, CE, qu.docKey, qu.httpConfig, (uu => {
            var Eu;
            null === (Eu = cE.current) || void 0 === Eu || Eu.call(cE, uu)
          }), cu));
          const uu = function(uu, Eu) {
            const ju = (0, Gu.r)(uu);
            return {
              extensions: [Tu],
              connect(uu) {
                if (Eu) {
                  const ju = Eu.map((uu => Fu.of({
                    playerId: uu.playerId,
                    playerName: uu.playerName,
                    colour: uu.colour,
                    anchor: uu.anchor,
                    head: uu.head,
                    lastMoved: Date.now()
                  })));
                  ju.length > 0 && uu.dispatch({
                    effects: ju
                  })
                }
                const su = vu.h.subscribe("codeCollab", (Eu => {
                    if (Eu.docKey === ju)
                      if (Eu.type === Gu.f.RemoteCursor) uu.dispatch({
                        effects: Fu.of({
                          playerId: Eu.playerId,
                          playerName: Eu.playerName,
                          colour: Eu.colour,
                          anchor: Eu.anchor,
                          head: Eu.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Eu.type === Gu.f.Presence) {
                      const ju = JSON.parse(Eu.peers),
                        su = new Set(ju.map((uu => uu.playerId))),
                        Uu = uu.state.field(Tu),
                        Zu = [];
                      for (const [uu] of Uu.cursors) su.has(uu) || Zu.push(Bu.of(uu));
                      Zu.length > 0 && uu.dispatch({
                        effects: Zu
                      })
                    }
                  })),
                  Uu = setInterval((() => {
                    uu.dom.isConnected ? uu.dispatch({
                      effects: Lu.of(Date.now())
                    }) : clearInterval(Uu)
                  }), Iu);
                return () => {
                  vu.h.unsubscribe(su), clearInterval(Uu)
                }
              }
            }
          }(qu.docKey, qu.existingCursors);
          lu.push(...uu.extensions), ME.current = uu.connect
        } else ME.current = null;
        return lu
      }), [Eu, lE, tu, fE, CE, dE, yu, Ru, uE, cu, ZE, XE]);
      if (!lE || !Hu && !Ru) return (0, wE.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, wE.jsx)(gu.b, {})
      });
      const kE = Ru ? `plugin-${Ru}-${null!==uE&&void 0!==uE?uE:"index.ts"}` : Hu ? `collab-${Hu.clientID}` : `local-${Eu}`;
      return (0, wE.jsx)(Zu.p, {
        value: Ru ? null !== jE && void 0 !== jE ? jE : "" : ju,
        onChange: lu,
        extensions: oE,
        className: "CodeEditorContent",
        theme: xu ? hE : "dark",
        editable: cu && !Ru,
        basicSetup: tE,
        onCreateEditor: uu => {
          var Eu;
          NE.current = uu, YE.current = null !== (Eu = null === Hu || void 0 === Hu ? void 0 : Hu.clientID) && void 0 !== Eu ? Eu : null, PE(uu), gE.current && gE.current(), ME.current && (gE.current = ME.current(uu))
        }
      }, kE)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);