export const id = 602;
export const ids = [602];
export const modules = {
  44499: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => si
    });
    var ye = He(44501),
      be = He(44546),
      Me = He(44548),
      Ke = He(59),
      Ue = He(77),
      Fe = He(44567),
      Je = He(44571),
      oe = He(5239),
      Re = He(44574),
      ke = He(1956),
      qe = He(44581),
      fe = He(44595),
      Te = He.n(fe),
      pe = He(44551),
      Xe = He(44559),
      ze = He(1320),
      Be = He(37675),
      Ee = He(1189),
      ge = He(2523),
      Oe = He(37068),
      de = He(1432),
      We = He(610),
      te = He(1192),
      Ze = He(44643),
      we = He(44509),
      De = He(44518),
      Pe = He(1983),
      Ae = He(4142),
      Ye = He(27),
      Ve = He(1083);
    const ae = 1e4,
      ce = 250,
      xe = 250;
    var Le = He(44533);
    const Ce = 50,
      ve = 100;
    const ue = 2e3,
      me = we.K.define(),
      le = we.K.define(),
      Se = we.K.define();
    class ne extends De.p {
      constructor(ee, ie, He) {
        super(), this.colour = ee, this.playerName = ie, this.showName = He
      }
      toDOM() {
        const ee = document.createElement("span");
        ee.className = "cm-remote-cursor-wrapper", ee.style.borderLeftColor = this.colour;
        const ie = document.createElement("span");
        if (ie.className = "cm-remote-cursor", ie.style.borderLeftColor = this.colour, ee.appendChild(ie), this.showName) {
          const ie = document.createElement("span");
          ie.className = "cm-remote-cursor-name", ie.style.backgroundColor = this.colour, ie.textContent = this.playerName, ee.appendChild(ie)
        }
        return ee
      }
      eq(ee) {
        return this.colour === ee.colour && this.playerName === ee.playerName && this.showName === ee.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function je(ee, ie) {
      const He = [],
        ye = [];
      for (const [, Ke] of ee) {
        const ee = ie - Ke.lastMoved < ue;
        if (He.push({
            pos: Ke.head,
            decoration: De.e.widget({
              widget: new ne(Ke.colour, Ke.playerName, ee),
              side: 1
            })
          }), Ke.anchor !== Ke.head) {
          const ee = Math.min(Ke.anchor, Ke.head),
            ie = Math.max(Ke.anchor, Ke.head);
          ye.push({
            from: ee,
            to: ie,
            decoration: De.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Ke.colour}33`
              }
            })
          })
        }
      }
      const be = new we.z,
        Me = [];
      for (const Ke of He) Me.push({
        bias: 1,
        deco: Ke.decoration,
        from: Ke.pos,
        to: Ke.pos
      });
      for (const Ke of ye) Me.push({
        bias: 0,
        deco: Ke.decoration,
        from: Ke.from,
        to: Ke.to
      });
      Me.sort(((ee, ie) => ee.from - ie.from || ee.deco.startSide - ie.deco.startSide || ee.bias - ie.bias));
      for (const Ke of Me) be.add(Ke.from, Ke.to, Ke.deco);
      return be.finish()
    }
    const se = we.N.define({
      create: () => ({
        cursors: new Map,
        MM: De.e.none
      }),
      update(ee, ie) {
        let He = ee.cursors,
          ye = !1;
        if (ie.docChanged) {
          const ee = new Map;
          for (const [ye, be] of He) ee.set(ye, {
            ...be,
            anchor: ie.changes.mapPos(be.anchor, 1),
            head: ie.changes.mapPos(be.head, 1)
          });
          He = ee, ye = !0
        }
        for (const be of ie.effects)
          if (be.is(me)) {
            if (!Number.isInteger(be.value.anchor) || !Number.isInteger(be.value.head)) {
              console.warn(`Code Editor: ignored player ${be.value.playerId}'s cursor at ${be.value.anchor}-${be.value.head}`);
              continue
            }
            const Me = ie.state.doc.length,
              Ke = {
                ...be.value,
                anchor: Math.min(be.value.anchor, Me),
                head: Math.min(be.value.head, Me)
              };
            He === ee.cursors && (He = new Map(He)), He.set(Ke.playerId, Ke), ye = !0
          } else be.is(le) ? He.has(be.value) && (He === ee.cursors && (He = new Map(He)), He.delete(be.value), ye = !0) : be.is(Se) && (ye = !0);
        return ye ? {
          cursors: He,
          MM: je(He, Date.now())
        } : ee
      },
      provide: ee => De.i.MM.from(ee, (ee => ee.MM))
    });
    const Ie = we.K.define(),
      he = De.e.mark({
        class: "CodeInsertFlash"
      }),
      Ne = we.N.define({
        create: () => De.e.none,
        update(ee, ie) {
          let He = ee.map(ie.changes);
          for (const ye of ie.effects) ye.is(Ie) && (He = ye.value ? De.e.set(he.range(ye.value.from, ye.value.to)) : De.e.none);
          return He
        },
        provide: ee => De.i.MM.from(ee)
      }),
      Ge = we.N.define({
        create: () => !1,
        update: (ee, ie) => ee || void 0 !== ie.annotation(we.T.userEvent) && !ie.annotation(we.T.remote)
      }),
      re = [Ne, Ge];

    function Qe(ee) {
      return ee.field(Ge)
    }
    const ei = 3e4;

    function ii(ee, ie) {
      const He = (0, Ke.useRef)(null);
      (0, Ke.useEffect)((() => {
        var ee;
        (null === (ee = He.current) || void 0 === ee ? void 0 : ee.path) !== ie && (He.current = null)
      }), [ie]);
      const ye = ee => {
        var ye;
        const be = He.current;
        if (null === ee || void 0 === ee || !ee.dom.isConnected || !be || be.path !== ie) return;
        He.current = null;
        const {
          KR: Ke
        } = be;
        if (Ke && null !== Ke.text && performance.now() - Ke.at < ei) {
          const ie = function(ee, ie) {
            if (ee === ie) return null;
            const He = Math.min(ee.length, ie.length);
            let ye = 0;
            for (; ye < He && ee[ye] === ie[ye];) ye++;
            let be = 0;
            for (; be < He - ye && ee[ee.length - 1 - be] === ie[ie.length - 1 - be];) be++;
            return {
              from: ye,
              to: ee.length - be,
              insert: ie.slice(ye, ie.length - be)
            }
          }(ee.state.doc.toString(), Ke.text);
          null !== ie && ee.dispatch({
            changes: ie,
            userEvent: Ke.placed ? "input" : void 0
          })
        }
        const {
          doc: Ue
        } = ee.state, Fe = Ue.line(Math.min(Math.max(be.line, 1), Ue.lines)), Je = Fe.from + Math.min(null !== (ye = be.column) && void 0 !== ye ? ye : 0, Fe.length);
        ee.dispatch({
          selection: {
            anchor: Je
          },
          effects: Me.d.scrollIntoView(Je, {
            y: "center"
          }),
          userEvent: null !== Ke && void 0 !== Ke && Ke.placed ? "select" : void 0
        }), !1 !== (null === Ke || void 0 === Ke ? void 0 : Ke.focused) && ee.focus()
      };
      return (0, de.f)("CodeEditorGoToLine", (ie => {
        He.current = ie, ye(ee.current)
      })), (0, de.f)("CodeEditorKeepEdits", (() => {
        const ye = ee.current;
        if (null === ye || !ye.dom.isConnected || null === ie) return;
        const {
          doc: be,
          selection: Me
        } = ye.state, {
          head: Ke
        } = Me.main, Ue = be.lineAt(Ke), Fe = {
          text: (0, Ze.k)(ye.state).length > 0 ? be.toString() : null,
          at: performance.now(),
          focused: ye.hasFocus,
          placed: Qe(ye.state)
        };
        He.current = {
          path: ie,
          line: Ue.number,
          column: Ke - Ue.from,
          KR: Fe
        }
      })), ee => {
        var be;
        const Me = He.current;
        !1 === (null === Me || void 0 === Me || null === (be = Me.KR) || void 0 === be ? void 0 : be.focused) && Me.path === ie || ee.focus(), ye(ee)
      }
    }
    var Hi = He(4721),
      yi = He(1127);

    function bi(ee, ie) {
      const {
        t: He
      } = (0, yi.v)();
      (0, de.f)("CodeEditorInsertText", (ye => {
        let {
          text: be,
          focus: Me
        } = ye;
        const Ke = ee.current,
          Ue = null !== Ke && void 0 !== Ke && Ke.dom.isConnected ? function(ee, ie) {
            if (!Qe(ee)) return null;
            const {
              from: He,
              to: ye
            } = ee.selection.main, be = He + ie.length;
            return {
              changes: {
                from: He,
                to: ye,
                insert: ie
              },
              selection: {
                anchor: be
              },
              effects: [De.i.scrollIntoView(be, {
                y: "center"
              }), Ie.of({
                from: He,
                to: be
              })],
              userEvent: "input"
            }
          }(Ke.state, be) : null;
        null !== Ke && null !== Ue ? (Ke.dispatch(Ue), Me && Ke.focus(), setTimeout((() => {
          Ke.dom.isConnected && Ke.dispatch({
            effects: Ie.of(null)
          })
        }), 1500)) : (0, Hi.e)(be).then((() => {
          ie({
            message: He("codeEditorWorld:pickCopied", {
              coords: be
            }),
            type: "success"
          })
        }), (ee => {
          console.error("Pick could not copy the coordinates", ee), ie({
            message: He("codeEditorWorld:pickPlaceCursor", {
              coords: be
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Mi = He(44543);
    const Ki = "#e45649",
      Ui = "#383a42",
      Fi = "#696c77",
      Ji = "#986801",
      oi = "#e5e5e6",
      Ri = "#fafafa",
      ki = "#eaeaeb",
      qi = "#526fff",
      fi = De.i.theme({
        "&": {
          color: Ui,
          backgroundColor: Ri
        },
        ".cm-content": {
          caretColor: qi
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: qi
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Ui
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
          backgroundColor: Ri,
          color: Fi,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: oi
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: ki
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: ki,
          borderBottomColor: ki
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: oi,
            color: Ui
          }
        }
      }, {
        dark: !1
      }),
      Ti = Le.d.define([{
        tag: Mi.n.keyword,
        color: "#a626a4"
      }, {
        tag: [Mi.n.name, Mi.n.deleted, Mi.n.character, Mi.n.propertyName, Mi.n.macroName],
        color: Ki
      }, {
        tag: [Mi.n.function(Mi.n.variableName), Mi.n.labelName],
        color: "#4078f2"
      }, {
        tag: [Mi.n.color, Mi.n.constant(Mi.n.name), Mi.n.standard(Mi.n.name)],
        color: Ji
      }, {
        tag: [Mi.n.definition(Mi.n.name), Mi.n.separator],
        color: Ui
      }, {
        tag: [Mi.n.typeName, Mi.n.className, Mi.n.number, Mi.n.changed, Mi.n.annotation, Mi.n.modifier, Mi.n.self, Mi.n.namespace],
        color: "#c18401"
      }, {
        tag: [Mi.n.operator, Mi.n.operatorKeyword, Mi.n.url, Mi.n.escape, Mi.n.regexp, Mi.n.link, Mi.n.special(Mi.n.string)],
        color: "#0184bc"
      }, {
        tag: [Mi.n.meta, Mi.n.comment],
        color: Fi
      }, {
        tag: Mi.n.strong,
        fontWeight: "bold"
      }, {
        tag: Mi.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: Mi.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Mi.n.link,
        color: Fi,
        textDecoration: "underline"
      }, {
        tag: Mi.n.heading,
        fontWeight: "bold",
        color: Ki
      }, {
        tag: [Mi.n.atom, Mi.n.bool, Mi.n.special(Mi.n.variableName)],
        color: Ji
      }, {
        tag: [Mi.n.processingInstruction, Mi.n.string, Mi.n.inserted],
        color: "#50a14f"
      }, {
        tag: Mi.n.invalid,
        color: "#000000"
      }]),
      Xi = [fi, (0, Le.mb)(Ti)];
    var zi = He(37745),
      Bi = He(44647);
    const Ei = Me.j.define(),
      gi = Me.n.define({
        create: () => !1,
        update(ee, ie) {
          for (const He of ie.effects) He.is(Ei) && (ee = He.value);
          return ee
        }
      }),
      Oi = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function di(ee, ie) {
      return [gi, Me.r.fromClass(class {
        constructor(ee) {
          this.view = ee, this.onDown = ee => {
            const ie = ee.target instanceof Element && null !== ee.target.closest(".cm-tooltip");
            0 !== ee.button || ie || this.view.state.field(gi) || this.view.dispatch({
              effects: Ei.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(gi) && this.view.dispatch({
              effects: Ei.of(!1)
            })
          }, ee.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Me.z.compute(["selection", gi], (He => function(ee, ie, He) {
        const ye = ee.selection.main;
        return ye.empty || ee.field(gi) || ee.sliceDoc(ye.from, ye.to).trim().length < 2 ? null : {
          pos: ye.from,
          above: !0,
          create: ee => {
            const ye = document.createElement("div");
            ye.className = "CodeSelectionActions", ye.setAttribute("role", "toolbar"), ye.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: be,
                label: Me
              }
              of Oi) {
              if (!He && "explain" !== be) continue;
              const Ke = document.createElement("button");
              Ke.type = "button", Ke.textContent = Me, "change" !== be && (Ke.title = Bi.c, Ke.dataset.asksAi = "true"), Ke.addEventListener("mousedown", (ee => {
                ee.preventDefault()
              })), Ke.addEventListener("click", (() => {
                const He = ee.state.selection.main;
                if (He.empty) return;
                const ye = {
                  action: be,
                  path: ie,
                  fromLine: ee.state.doc.lineAt(He.from).number,
                  toLine: ee.state.doc.lineAt(He.to > He.from && ee.state.doc.lineAt(He.to).from === He.to ? He.to - 1 : He.to).number,
                  text: ee.state.sliceDoc(He.from, He.to)
                };
                Ye.h.yR("WorldCodeAiSelection", ye), ee.dispatch({
                  selection: {
                    anchor: He.to
                  }
                })
              })), ye.appendChild(Ke)
            }
            return {
              dom: ye
            }
          }
        }
      }(He, ee, ie)))]
    }
    var Wi = He(1228);
    const ti = new Set(["(", "{", "[", "<"]),
      Zi = new Set([")", "}", "]", ">"]),
      wi = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Di(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function He(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = [];
        for (const be of ee) {
          let ee;
          ee = "punctuation" === be.kind ? wi.text : "parameterName" === be.kind ? wi.parameterName : ie, ye.push({
            str: be.text,
            style: {
              color: ee,
              opacity: He ? .5 : void 0
            }
          })
        }
        return ye
      }
      const ye = [];
      if (ye.push(...He(ee.prefixDisplayParts, wi.text)), ee.parameters.length > 0) {
        ye.push("\n");
        for (let be = 0; be < ee.parameters.length; be++) {
          const Me = ee.parameters[be];
          ye.push("\t"), ye.push(...He(Me.displayParts, wi.parameter, null !== ie && be !== ie)), ye.push("\n")
        }
      }
      return ye.push(...He(ee.suffixDisplayParts, wi.suffix)), ee.documentation && (ye.push("\n\n"), ye.push(...He(ee.documentation, wi.docs))), ye
    }
    var Pi = function(ee) {
      return ee[ee.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", ee[ee.DuplicateIdentifier = 2300] = "DuplicateIdentifier", ee
    }(Pi || {});
    const Ai = new Set([Pi.DuplicateIdentifier]),
      Yi = new Set([Pi.VariableDefinedElsewhere]),
      Vi = new Set([]),
      ai = "/index.js";

    function ci(ee) {
      return "/" + ee
    }

    function xi(ee, ie, He) {
      ee.getSourceFile(ie) && ee.deleteFile(ie), ee.createFile(ie, He)
    }

    function Li(ee) {
      return !!ee && ((0, ge.p)(ee) || (0, ge.n)(ee))
    }

    function Ci(ee, ie, He) {
      return () => {
        let ye = [...ie.languageService.getSemanticDiagnostics(He), ...ie.languageService.getSyntacticDiagnostics(He)];
        return ye = ye.filter((ee => !(0, We.P)(ee.start) && !(0, We.P)(ee.length) && !Ai.has(ee.code))), ee || (ye = ye.filter((ee => !Yi.has(ee.code)))), ye.map((ee => ({
          from: ee.start,
          to: ee.start + ee.length,
          message: "string" === typeof ee.messageText ? ee.messageText : ee.messageText.messageText,
          severity: Vi.has(ee.code) ? "warning" : "error"
        })))
      }
    }

    function vi(ee, ie) {
      return He => {
        var ye, be;
        const Me = ee.languageService.getCompletionsAtPosition(ie, He.pos, {});
        if (!Me) return {
          from: He.pos,
          options: []
        };
        let Ke = null !== (ye = null === (be = Me.optionalReplacementSpan) || void 0 === be ? void 0 : be.start) && void 0 !== ye ? ye : He.pos;
        if (!Me.optionalReplacementSpan) {
          const ee = He.state.doc.sliceString(0, He.pos);
          for (; Ke > 0 && /[\w$]/.test(ee[Ke - 1]);) Ke--
        }
        return Me.entries = Me.entries.filter((ee => ee.kind !== Te().ScriptElementKind.warning)), {
          from: Ke,
          options: Me.entries.map((ye => {
            var be, Me, Ue, Fe;
            const Je = ee.languageService.getCompletionEntryDetails(ie, He.pos, ye.name, {}, ye.source, {}, ye.data),
              oe = null !== (be = null === (Me = ye.replacementSpan) || void 0 === Me ? void 0 : Me.start) && void 0 !== be ? be : Ke,
              Re = ye.replacementSpan ? ye.replacementSpan.start + ye.replacementSpan.length : He.pos,
              ke = null !== (Ue = ye.insertText) && void 0 !== Ue ? Ue : ye.name;
            return {
              label: ye.name,
              detail: null === Je || void 0 === Je ? void 0 : Je.displayParts.map((ee => ee.text)).join(""),
              info: null === Je || void 0 === Je || null === (Fe = Je.documentation) || void 0 === Fe ? void 0 : Fe.map((ee => ee.text)).join(""),
              apply: ee => {
                ee.dispatch({
                  changes: {
                    from: oe,
                    to: Re,
                    insert: ke
                  },
                  selection: {
                    anchor: oe + ke.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function ui(ee) {
      return ie => {
        const He = document.createElement("div");
        He.className = "CodeEditorTooltip";
        let ye = !1;
        return queueMicrotask((() => {
          ye || (Ue.render((0, Wi.jsx)(ke.e, {
            text: ee
          }), He), ie.requestMeasure())
        })), {
          dom: He,
          destroy() {
            ye = !0, queueMicrotask((() => {
              Ue.unmountComponentAtNode(He)
            }))
          }
        }
      }
    }

    function mi(ee, ie, He) {
      return ye => {
        var be;
        if (!ie) return [];
        const Me = null === (be = ye.selection.zp[0]) || void 0 === be ? void 0 : be.head;
        if (void 0 === Me) return [];
        const Ke = ee.languageService.getSignatureHelpItems(He, Me, {});
        if (!Ke || !Ke.items.length) return [];
        const Ue = Ke.applicableSpan.start - Ke.items[0].prefixDisplayParts.map((ee => ee.text)).join("").length,
          Fe = Ke.applicableSpan.start,
          Je = ye.doc.lineAt(Me),
          oe = Je.from,
          Re = Math.min(Je.to, Me);
        let ke, qe;
        return Ue < oe ? (ke = oe, qe = Re) : (ke = Ue, qe = Fe), [{
          pos: ke,
          end: qe,
          above: !1,
          create: ui(Di(Ke.items[0], Ke.argumentIndex))
        }]
      }
    }

    function li(ee, ie) {
      return (He, ye, be) => {
        const Me = ee.languageService.getQuickInfoAtPosition(ie, ye);
        if (!Me) return [];
        const Ke = Me.textSpan.start,
          Ue = Me.textSpan.start + Me.textSpan.length;
        if (ye < Ke || ye >= Ue) return [];
        if (Me.kind === Te().ScriptElementKind.memberFunctionElement || Me.kind === Te().ScriptElementKind.variableElement && "declare" === Me.kindModifiers) {
          const ee = Me.displayParts.findIndex((ee => "space" === ee.kind)); - 1 !== ee && (Me.displayParts = Me.displayParts.slice(ee));
          const ie = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            He = Me.displayParts.findIndex((ee => "punctuation" === ee.kind && "(" === ee.text)); - 1 !== He && (ie.prefixDisplayParts = Me.displayParts.slice(0, He + 1), Me.displayParts = Me.displayParts.slice(He + 1));
          const ye = Me.displayParts.findLastIndex((ee => "punctuation" === ee.kind && ")" === ee.text)); - 1 !== ye && (ie.suffixDisplayParts = Me.displayParts.slice(ye), Me.displayParts = Me.displayParts.slice(0, ye));
          let be = 0,
            Fe = [];
          for (const Ke of Me.displayParts)
            if (ti.has(Ke.text) ? be++ : Zi.has(Ke.text) && be--, "lineBreak" !== Ke.kind) {
              if ("space" === Ke.kind) {
                if (0 === Fe.length) continue;
                Fe.push({
                  kind: "space",
                  text: " "
                })
              } else Fe.push(Ke);
              0 === be && "," === Ke.text && (ie.parameters.push({
                displayParts: Fe
              }), Fe = [])
            } return Fe.length > 0 && ie.parameters.push({
            displayParts: Fe
          }), ie.documentation = Me.documentation, [{
            pos: Ke,
            end: Ue,
            above: !0,
            create: ui(Di(ie))
          }]
        }
        const Fe = [];
        for (const ee of Me.displayParts) Fe.push({
          str: ee.text,
          style: {
            color: wi.text
          }
        });
        if (Me.documentation) {
          Fe.push("\n\n");
          for (const ee of Me.documentation) Fe.push({
            str: ee.text,
            style: {
              color: wi.docs
            }
          })
        }
        return [{
          pos: Ke,
          end: Ue,
          above: !0,
          create: ui(Fe)
        }]
      }
    }
    const Si = {
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
      semicolons: Te().SemicolonPreference.Insert
    };
    const ni = Me.j.define(),
      ji = {
        lineNumbers: !0,
        tabSize: 4
      };

    function si(ee) {
      let {
        isLobbyCode: ie,
        code: He,
        onChange: Ue,
        canEditCode: ke,
        setTemporaryMessage: fe,
        close: We,
        showTooltips: ne,
        lightMode: je,
        collabState: Ie,
        onRemoteDocChange: he,
        files: Ne,
        activePath: Ge,
        pluginName: Qe,
        pluginFile: ei,
        pluginSource: Hi,
        setActiveDocReplacer: yi,
        showAiHints: Mi,
        canAiChangeCode: Ki = ke
      } = ee;
      const [Ui, Fi] = (0, Ke.useState)(null), Ji = null === Ie || void 0 === Ie ? void 0 : Ie.version, oi = null === Ie || void 0 === Ie ? void 0 : Ie.clientID, Ri = (0, Ke.useRef)({
        isLobbyCode: ie,
        files: Ne,
        code: He,
        activePath: Ge
      }), ki = (0, Ke.useRef)(he);
      ki.current = he;
      const qi = (0, Ke.useRef)(null),
        fi = (0, Ke.useRef)(Ie);
      fi.current = Ie;
      const Ti = (0, Ke.useRef)(null),
        Bi = (0, Ke.useRef)(null),
        Ei = (0, Ke.useRef)(null),
        gi = (0, Ke.useRef)(We);
      gi.current = We;
      const Oi = (0, Ke.useRef)(He);
      Oi.current = He;
      const ti = (0, Ke.useRef)(Hi);
      ti.current = Hi;
      const Zi = function(ee, ie, He, ye) {
        return He ? `/plugin-preview/${He}/${null!==ye&&void 0!==ye?ye:"index.ts"}` : ee ? ci(null !== ie && void 0 !== ie ? ie : Ee.j) : ai
      }(ie, Ge, Qe, ei);
      (0, Ke.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: ee,
            files: ie,
            code: He,
            activePath: ye
          } = Ri.current, be = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Te().ModuleKind.ESNext,
            moduleResolution: Te().ModuleResolutionKind.Bundler,
            target: Te().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Be.h).map((ee => [ee.specifier, [ee.typesVfsPath]])))
            }
          }, Me = new Map, Ke = [];
          if (ee) {
            const ee = null !== ie && void 0 !== ie ? ie : {
              [Ee.j]: He || "\n"
            };
            for (const [ie, He] of Object.entries(ee)) {
              const ee = ci(ie);
              Me.set(ee, He || "\n"), Ke.push(ee)
            }
            const be = ci(null !== ye && void 0 !== ye ? ye : Ee.j);
            Me.has(be) ? Me.set(be, He || "\n") : (Me.set(be, He || "\n"), Ke.push(be)), Me.set("/node_modules/@bloxd/index.d.ts", oe.default), Ke.push("/node_modules/@bloxd/index.d.ts");
            for (const ie of Object.values(Be.h)) {
              Me.set(ie.typesVfsPath, ie.types), Ke.push(ie.typesVfsPath);
              for (const [ee, He] of Object.entries(ie.files)) {
                const ye = `/plugin-preview/${ie.name}/${ee}`;
                Me.set(ye, He || "\n"), Ke.push(ye)
              }
            }
          } else Me.set(ai, He || "\n"), Ke.push(ai);
          Me.set("/globals.d.ts", ee ? Je.d : Fe.e), Me.set("/lib.d.ts", Re.d), Ke.push("/globals.d.ts", "/lib.d.ts");
          const Ue = qe.d(Me),
            ke = qe.g(Ue, Ke, Te(), be);
          Fi({
            WR: ke,
            fsMap: Me
          })
        }()
      }), []), (0, Ke.useEffect)((() => {
        var ee, ye;
        if (!Ui || !ie) return;
        const {
          WR: be,
          fsMap: Me
        } = Ui;
        if (function(ee, ie, He) {
            const ye = new Set;
            for (const [be, Me] of Object.entries(He)) {
              const He = ci(be);
              ye.add(He);
              const Ke = Me || "\n";
              ie.get(He) !== Ke && (ie.set(He, Ke), xi(ee, He, Ke))
            }
            for (const be of [...ie.keys()]) "/globals.d.ts" === be || "/lib.d.ts" === be || be.startsWith("/node_modules/") || be.startsWith("/plugin-preview/") || ye.has(be) || (ie.delete(be), ee.getSourceFile(be) && ee.deleteFile(be))
          }(be, Me, null !== Ne && void 0 !== Ne ? Ne : {
            [Ee.j]: He || "\n"
          }), Qe) return void xi(be, Zi, Hi || "\n");
        const Ke = null !== (ee = null === (ye = qi.current) || void 0 === ye ? void 0 : ye.state.doc.toString()) && void 0 !== ee ? ee : He;
        xi(be, Zi, Ke || "\n")
      }), [Ne, Ge, Ui, Qe, Hi, Zi, He, ie]), (0, Ke.useEffect)((() => {
        if (!Ui) return;
        const {
          WR: ee
        } = Ui;
        xi(ee, Zi, (Qe ? Hi : He) || "\n")
      }), [He, Qe, Hi, Zi, Ui]), (0, Ke.useEffect)((() => () => {
        Bi.current && (Bi.current(), Bi.current = null)
      }), []), (0, Ke.useEffect)((() => (yi(((ee, ie) => {
        if (Qe) return !1;
        const He = qi.current,
          ye = fi.current,
          be = ye ? (0, ge.x)(ye.docKey) : null;
        if (!He || !ye || Ti.current !== ye.clientID || ee !== be) return !1;
        const Me = He.state.doc.toString();
        return Me !== ie && He.dispatch({
          changes: {
            from: 0,
            to: Me.length,
            insert: ie
          }
        }), !0
      })), () => {
        qi.current = null, Ti.current = null, yi(null)
      })), [yi, Qe]);
      const wi = ie ? Qe ? null : null !== Ge && void 0 !== Ge ? Ge : Ee.j : zi.c,
        Di = ii(qi, wi);
      bi(qi, fe), (0, de.f)("FormatCode", (() => {
        if (!Ui || !qi.current || Qe) return;
        const {
          WR: ee,
          fsMap: He
        } = Ui, ye = ee.getSourceFile(Zi).getFullText();
        let be = 0;
        if (ie && Ne)
          for (const [ie, Ue] of Object.entries(Ne)) ie !== (null !== Ge && void 0 !== Ge ? Ge : Ee.j) && (be += Ue.length);
        const Me = function(ee, ie, He, ye, be) {
          const Me = ee.languageService.getFormattingEditsForDocument(ye, Si);
          if (!Me.length) return te.e.error("Code is already formatted.");
          Me.sort(((ee, ie) => ie.span.start - ee.span.start));
          let Ke = ee.getSourceFile(ye).getFullText();
          for (const Ue of Me) Ke = Ke.slice(0, Ue.span.start) + Ue.HJ + Ke.slice(Ue.span.start + Ue.span.length);
          return Ke !== (He ? (0, Oe.j)(Ke, be) : (0, Oe.i)(Ke)) ? te.e.error("Formatting the code will go beyond the character limit.") : te.e.value(Ke)
        }(ee, 0, ie, Zi, be);
        if (Me.isError()) return void fe({
          message: Me.asError().message,
          type: "warning"
        });
        const Ke = Me.getValue();
        Ke && (qi.current.dispatch({
          changes: {
            from: 0,
            to: ye.length,
            insert: Ke
          },
          selection: {
            anchor: Ke.length
          }
        }), xi(ee, Zi, Ke), Ue(Ke))
      }));
      const Pi = (0, Ke.useMemo)((() => {
        if (!Ui) return [];
        const {
          WR: ee,
          fsMap: He
        } = Ui;
        ! function(ee, ie, He, ye) {
          if (ee.getSourceFile(He)) return;
          const be = ye || "\n";
          ie.set(He, be), ee.createFile(He, be)
        }(ee, He, Zi, (Qe ? ti.current : Oi.current) || "\n");
        const Ke = ie && Li(Qe ? null !== ei && void 0 !== ei ? ei : "index.ts" : Ge),
          Ue = [(0, be.c)({
            jsx: !1,
            typescript: Ke
          }), Me.h.highest(Me.d.domEventHandlers({
            keydown: ee => "Escape" === ee.key ? (gi.current(), ee.stopPropagation(), !0) : (ee.stopPropagation(), !1)
          })), (0, ye.e)({
            override: [vi(ee, Zi)]
          }), De.o.fromClass(class {
            constructor(ee) {
              this.view = ee, this.timeout = null, this.scheduleParse()
            }
            update(ee) {
              (ee.docChanged || ee.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const ee = this.view.viewport.to;
                (0, Le.qb)(this.view.state, ee) || (0, Le.K)(this.view, ee, Ce) || this.scheduleParse()
              }), ve))
            }
          }), ...re, Me.d.lineWrapping, Me.n.define({
            create: mi(ee, ne, Zi),
            update(ie, He) {
              const ye = He.effects.some((ee => ee.is(ni)));
              return He.docChanged || He.selection || ye ? (xi(ee, Zi, He.state.doc.toString() || " "), mi(ee, ne, Zi)(He.state)) : ie
            },
            provide: ee => Me.z.computeN([ee], (ie => ie.field(ee)))
          }), (0, Me.w)(li(ee, Zi)), (0, Xe.h)(Ci(ie, ee, Zi)), Me.r.fromClass(class {
            constructor(ee) {
              this.view = ee, this.searchPanel = null
            }
            update(ee) {
              const ie = ee.view.dom.querySelector(".cm-search");
              if (ie !== this.searchPanel) {
                if (this.searchPanel = ie, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (ee => {
                  "Escape" === ee.key && (0, pe.d)(this.view), ee.stopPropagation()
                }))
              }
            }
          })];
        Mi && !Qe && Ue.push(di(ie ? null !== Ge && void 0 !== Ge ? Ge : Ee.j : zi.c, Ki));
        const Fe = fi.current;
        if (Fe && !Qe) {
          Ue.push(... function(ee, ie, He, ye, be) {
            let Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Ke = (0, ge.x)(He),
              Ue = De.o.fromClass(class {
                constructor(ee) {
                  this.view = ee, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Ye.h.subscribe("codeCollab", (ee => {
                    ee.docKey === Ke && ee.type === ge.e.Updates && (ee.updates ? this.applyUpdates(ee.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(ee) {
                  const ie = JSON.parse(ee).map((ee => ({
                    clientID: ee.clientID,
                    changes: we.ChangeSet.fromJSON(ee.changes)
                  })));
                  ie.length > 0 && (this.view.dispatch((0, Ze.h)(this.view.state, ie)), be && be(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(ee) {
                  Me && (ee.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const ee = (0, Ze.k)(this.view.state);
                  if (this.pushing || !ee.length) return;
                  const ie = Date.now() - this.lastPushTime;
                  if (ie < xe) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), xe - ie)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), ae);
                  const He = (0, Ze.e)(this.view.state),
                    be = ee.map((ee => ({
                      clientID: ee.clientID,
                      changes: ee.changes.toJSON()
                    }))),
                    Me = JSON.stringify(be);
                  Me.length <= ge.i ? Pe.gameBridge.send("sendCodeCollab", {
                    ue: ge.c.Push,
                    Se: Ke,
                    ne: He,
                    Ie: Me
                  }) : (0, Ve.postJsonWithMetricsCookiesAndJsonResponse)(`${ye.gsUrl}/code/collab-push`, Ae.w["collab-push"].toBuffer({
                    gameNameWithVariation: ye.gameNameWithVariation,
                    lobbyName: ye.lobbyName,
                    docKey: Ke,
                    version: He,
                    updates: Me
                  }), {
                    retries: 0
                  }).catch((ee => {
                    console.error("[CodeCollab] HTTP push failed", ee)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const ee = (0, Ze.e)(this.view.state);
                  (0, Ve.postJsonWithMetricsCookiesAndJsonResponse)(`${ye.gsUrl}/code/collab-pull`, Ae.w["collab-pull"].toBuffer({
                    gameNameWithVariation: ye.gameNameWithVariation,
                    lobbyName: ye.lobbyName,
                    docKey: Ke,
                    fromVersion: ee
                  }), {
                    retries: 1
                  }).then((ee => {
                    this.destroyed || (ee.fullDoc ? Ye.h.yR("codeCollabRejoin", {
                      docKey: Ke,
                      doc: ee.fullDoc,
                      version: ee.version
                    }) : this.applyUpdates(ee.updates))
                  })).catch((ee => {
                    console.error("[CodeCollab] Pull failed", ee)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const ee = Date.now();
                  if (ee - this.lastCursorSent < ce) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), ce)));
                  this.lastCursorSent = ee;
                  const ie = this.view.state.selection.main;
                  Pe.gameBridge.send("sendCodeCollab", {
                    ue: ge.c.Cursor,
                    Se: Ke,
                    Qe: ie.anchor,
                    ei: ie.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Ye.h.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Ze.b)({
              startVersion: ee,
              clientID: ie
            }), Ue]
          }(Ji, oi, Fe.docKey, Fe.httpConfig, (ee => {
            var ie;
            null === (ie = ki.current) || void 0 === ie || ie.call(ki, ee)
          }), ke));
          const ee = function(ee, ie) {
            const He = (0, ge.x)(ee);
            return {
              extensions: [se],
              connect(ee) {
                if (ie) {
                  const He = ie.map((ee => me.of({
                    playerId: ee.playerId,
                    playerName: ee.playerName,
                    colour: ee.colour,
                    anchor: ee.anchor,
                    head: ee.head,
                    lastMoved: Date.now()
                  })));
                  He.length > 0 && ee.dispatch({
                    effects: He
                  })
                }
                const ye = Ye.h.subscribe("codeCollab", (ie => {
                    if (ie.docKey === He)
                      if (ie.type === ge.e.RemoteCursor) ee.dispatch({
                        effects: me.of({
                          playerId: ie.playerId,
                          playerName: ie.playerName,
                          colour: ie.colour,
                          anchor: ie.anchor,
                          head: ie.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (ie.type === ge.e.Presence) {
                      const He = JSON.parse(ie.peers),
                        ye = new Set(He.map((ee => ee.playerId))),
                        be = ee.state.field(se),
                        Me = [];
                      for (const [ee] of be.cursors) ye.has(ee) || Me.push(le.of(ee));
                      Me.length > 0 && ee.dispatch({
                        effects: Me
                      })
                    }
                  })),
                  be = setInterval((() => {
                    ee.dom.isConnected ? ee.dispatch({
                      effects: Se.of(Date.now())
                    }) : clearInterval(be)
                  }), ue);
                return () => {
                  Ye.h.unsubscribe(ye), clearInterval(be)
                }
              }
            }
          }(Fe.docKey, Fe.existingCursors);
          Ue.push(...ee.extensions), Ei.current = ee.connect
        } else Ei.current = null;
        return Ue
      }), [ie, Ui, ne, Ji, oi, Zi, Ge, Qe, ei, ke, Mi, Ki]);
      if (!Ui || !Ie && !Qe) return (0, Wi.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Wi.jsx)(ze.b, {})
      });
      const Ai = Qe ? `plugin-${Qe}-${null!==ei&&void 0!==ei?ei:"index.ts"}` : Ie ? `collab-${Ie.clientID}` : `local-${ie}`;
      return (0, Wi.jsx)(Me.t, {
        value: Qe ? null !== Hi && void 0 !== Hi ? Hi : "" : He,
        onChange: Ue,
        extensions: Pi,
        className: "CodeEditorContent",
        theme: je ? Xi : "dark",
        editable: ke && !Qe,
        basicSetup: ji,
        onCreateEditor: ee => {
          var ie;
          qi.current = ee, Ti.current = null !== (ie = null === Ie || void 0 === Ie ? void 0 : Ie.clientID) && void 0 !== ie ? ie : null, Di(ee), Bi.current && Bi.current(), Ei.current && (Bi.current = Ei.current(ee))
        }
      }, Ai)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);