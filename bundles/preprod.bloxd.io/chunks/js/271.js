export const id = 271;
export const ids = [271];
export const modules = {
  39748: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => ub
    });
    var Uy = Wy(39751),
      hy = Wy(39794),
      fy = Wy(39799),
      Zy = Wy(55),
      cb = Wy(70),
      Py = Wy(39813),
      oy = Wy(39818),
      By = Wy(3965),
      Ky = Wy(39827),
      ey = Wy(1546),
      qb = Wy(39831),
      sy = Wy(39846),
      Sy = Wy.n(sy),
      Ey = Wy(39803),
      ly = Wy(39811),
      mb = Wy(1194),
      Cy = Wy(35586),
      Ty = Wy(1102),
      Vy = Wy(35604),
      Jy = Wy(35515),
      gb = Wy(1268),
      Gy = Wy(547),
      Oy = Wy(1109),
      Ry = Wy(39885),
      vb = Wy(39754),
      ib = Wy(39759),
      My = Wy(1572),
      Yy = Wy(3050),
      Xy = Wy(23),
      ny = Wy(987);
    const uy = 1e4,
      rb = 250,
      Hy = 250;
    var ab = Wy(39779);
    const Fy = 50,
      py = 100;
    const Ly = 2e3,
      Qy = vb.I.define(),
      jb = vb.I.define(),
      Dy = vb.I.define();
    class tb extends ib.q {
      constructor(yb, bb, Wy) {
        super(), this.colour = yb, this.playerName = bb, this.showName = Wy
      }
      toDOM() {
        const yb = document.createElement("span");
        yb.className = "cm-remote-cursor-wrapper", yb.style.borderLeftColor = this.colour;
        const bb = document.createElement("span");
        if (bb.className = "cm-remote-cursor", bb.style.borderLeftColor = this.colour, yb.appendChild(bb), this.showName) {
          const bb = document.createElement("span");
          bb.className = "cm-remote-cursor-name", bb.style.backgroundColor = this.colour, bb.textContent = this.playerName, yb.appendChild(bb)
        }
        return yb
      }
      eq(yb) {
        return this.colour === yb.colour && this.playerName === yb.playerName && this.showName === yb.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function wy(yb, bb) {
      const Wy = [],
        Uy = [];
      for (const [, Zy] of yb) {
        const yb = bb - Zy.lastMoved < Ly;
        if (Wy.push({
            pos: Zy.head,
            decoration: ib.e.widget({
              widget: new tb(Zy.colour, Zy.playerName, yb),
              side: 1
            })
          }), Zy.anchor !== Zy.head) {
          const yb = Math.min(Zy.anchor, Zy.head),
            bb = Math.max(Zy.anchor, Zy.head);
          Uy.push({
            from: yb,
            to: bb,
            decoration: ib.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Zy.colour}33`
              }
            })
          })
        }
      }
      const hy = new vb.C,
        fy = [];
      for (const Zy of Wy) fy.push({
        bias: 1,
        deco: Zy.decoration,
        from: Zy.pos,
        to: Zy.pos
      });
      for (const Zy of Uy) fy.push({
        bias: 0,
        deco: Zy.decoration,
        from: Zy.from,
        to: Zy.to
      });
      fy.sort(((yb, bb) => yb.from - bb.from || yb.deco.startSide - bb.deco.startSide || yb.bias - bb.bias));
      for (const Zy of fy) hy.add(Zy.from, Zy.to, Zy.deco);
      return hy.finish()
    }
    const kb = vb.J.define({
      create: () => ({
        cursors: new Map,
        PZ: ib.e.none
      }),
      update(yb, bb) {
        let Wy = yb.cursors,
          Uy = !1;
        if (bb.docChanged) {
          const yb = new Map;
          for (const [Uy, hy] of Wy) yb.set(Uy, {
            ...hy,
            anchor: bb.changes.mapPos(hy.anchor, 1),
            head: bb.changes.mapPos(hy.head, 1)
          });
          Wy = yb, Uy = !0
        }
        for (const hy of bb.effects)
          if (hy.is(Qy)) {
            if (!Number.isInteger(hy.value.anchor) || !Number.isInteger(hy.value.head)) {
              console.warn(`Code Editor: ignored player ${hy.value.playerId}'s cursor at ${hy.value.anchor}-${hy.value.head}`);
              continue
            }
            const fy = bb.state.doc.length,
              Zy = {
                ...hy.value,
                anchor: Math.min(hy.value.anchor, fy),
                head: Math.min(hy.value.head, fy)
              };
            Wy === yb.cursors && (Wy = new Map(Wy)), Wy.set(Zy.playerId, Zy), Uy = !0
          } else hy.is(jb) ? Wy.has(hy.value) && (Wy === yb.cursors && (Wy = new Map(Wy)), Wy.delete(hy.value), Uy = !0) : hy.is(Dy) && (Uy = !0);
        return Uy ? {
          cursors: Wy,
          PZ: wy(Wy, Date.now())
        } : yb
      },
      provide: yb => ib.k.PZ.from(yb, (yb => yb.PZ))
    });
    var Ny = Wy(39786);
    const zb = "#e45649",
      Iy = "#383a42",
      xb = "#696c77",
      Ay = "#986801",
      dy = "#e5e5e6",
      yW = "#fafafa",
      bW = "#eaeaeb",
      Wb = "#526fff",
      Ub = ib.k.theme({
        "&": {
          color: Iy,
          backgroundColor: yW
        },
        ".cm-content": {
          caretColor: Wb
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Wb
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Iy
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
          backgroundColor: yW,
          color: xb,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: dy
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: bW
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: bW,
          borderBottomColor: bW
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: dy,
            color: Iy
          }
        }
      }, {
        dark: !1
      }),
      hb = ab.b.define([{
        tag: Ny.m.keyword,
        color: "#a626a4"
      }, {
        tag: [Ny.m.name, Ny.m.deleted, Ny.m.character, Ny.m.propertyName, Ny.m.macroName],
        color: zb
      }, {
        tag: [Ny.m.function(Ny.m.variableName), Ny.m.labelName],
        color: "#4078f2"
      }, {
        tag: [Ny.m.color, Ny.m.constant(Ny.m.name), Ny.m.standard(Ny.m.name)],
        color: Ay
      }, {
        tag: [Ny.m.definition(Ny.m.name), Ny.m.separator],
        color: Iy
      }, {
        tag: [Ny.m.typeName, Ny.m.className, Ny.m.number, Ny.m.changed, Ny.m.annotation, Ny.m.modifier, Ny.m.self, Ny.m.namespace],
        color: "#c18401"
      }, {
        tag: [Ny.m.operator, Ny.m.operatorKeyword, Ny.m.url, Ny.m.escape, Ny.m.regexp, Ny.m.link, Ny.m.special(Ny.m.string)],
        color: "#0184bc"
      }, {
        tag: [Ny.m.meta, Ny.m.comment],
        color: xb
      }, {
        tag: Ny.m.strong,
        fontWeight: "bold"
      }, {
        tag: Ny.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ny.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ny.m.link,
        color: xb,
        textDecoration: "underline"
      }, {
        tag: Ny.m.heading,
        fontWeight: "bold",
        color: zb
      }, {
        tag: [Ny.m.atom, Ny.m.bool, Ny.m.special(Ny.m.variableName)],
        color: Ay
      }, {
        tag: [Ny.m.processingInstruction, Ny.m.string, Ny.m.inserted],
        color: "#50a14f"
      }, {
        tag: Ny.m.invalid,
        color: "#000000"
      }]),
      fb = [Ub, (0, ab.hb)(hb)];
    var Zb = Wy(35638),
      cW = Wy(39889);
    const Pb = fy.f.define(),
      ob = fy.j.define({
        create: () => !1,
        update(yb, bb) {
          for (const Wy of bb.effects) Wy.is(Pb) && (yb = Wy.value);
          return yb
        }
      }),
      Bb = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Kb(yb, bb) {
      return [ob, fy.k.fromClass(class {
        constructor(yb) {
          this.view = yb, this.onDown = yb => {
            const bb = yb.target instanceof Element && null !== yb.target.closest(".cm-tooltip");
            0 !== yb.button || bb || this.view.state.field(ob) || this.view.dispatch({
              effects: Pb.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(ob) && this.view.dispatch({
              effects: Pb.of(!1)
            })
          }, yb.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), fy.s.compute(["selection", ob], (Wy => function(yb, bb, Wy) {
        const Uy = yb.selection.main;
        return Uy.empty || yb.field(ob) || yb.sliceDoc(Uy.from, Uy.to).trim().length < 2 ? null : {
          pos: Uy.from,
          above: !0,
          create: yb => {
            const Uy = document.createElement("div");
            Uy.className = "CodeSelectionActions", Uy.setAttribute("role", "toolbar"), Uy.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: hy,
                label: fy
              }
              of Bb) {
              if (!Wy && "explain" !== hy) continue;
              const Zy = document.createElement("button");
              Zy.type = "button", Zy.textContent = fy, "change" !== hy && (Zy.title = cW.c, Zy.dataset.asksAi = "true"), Zy.addEventListener("mousedown", (yb => {
                yb.preventDefault()
              })), Zy.addEventListener("click", (() => {
                const Wy = yb.state.selection.main;
                if (Wy.empty) return;
                const Uy = {
                  action: hy,
                  path: bb,
                  fromLine: yb.state.doc.lineAt(Wy.from).number,
                  toLine: yb.state.doc.lineAt(Wy.to > Wy.from && yb.state.doc.lineAt(Wy.to).from === Wy.to ? Wy.to - 1 : Wy.to).number,
                  text: yb.state.sliceDoc(Wy.from, Wy.to)
                };
                Xy.g.EZ("WorldCodeAiSelection", Uy), yb.dispatch({
                  selection: {
                    anchor: Wy.to
                  }
                })
              })), Uy.appendChild(Zy)
            }
            return {
              dom: Uy
            }
          }
        }
      }(Wy, yb, bb)))]
    }
    var eb = Wy(952);
    const qW = new Set(["(", "{", "[", "<"]),
      sb = new Set([")", "}", "]", ">"]),
      Sb = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Eb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Wy(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = [];
        for (const hy of yb) {
          let yb;
          yb = "punctuation" === hy.kind ? Sb.text : "parameterName" === hy.kind ? Sb.parameterName : bb, Uy.push({
            str: hy.text,
            style: {
              color: yb,
              opacity: Wy ? .5 : void 0
            }
          })
        }
        return Uy
      }
      const Uy = [];
      if (Uy.push(...Wy(yb.prefixDisplayParts, Sb.text)), yb.parameters.length > 0) {
        Uy.push("\n");
        for (let hy = 0; hy < yb.parameters.length; hy++) {
          const fy = yb.parameters[hy];
          Uy.push("\t"), Uy.push(...Wy(fy.displayParts, Sb.parameter, null !== bb && hy !== bb)), Uy.push("\n")
        }
      }
      return Uy.push(...Wy(yb.suffixDisplayParts, Sb.suffix)), yb.documentation && (Uy.push("\n\n"), Uy.push(...Wy(yb.documentation, Sb.docs))), Uy
    }
    var lb = function(yb) {
      return yb[yb.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", yb[yb.DuplicateIdentifier = 2300] = "DuplicateIdentifier", yb
    }(lb || {});
    const mW = new Set([lb.DuplicateIdentifier]),
      Cb = new Set([lb.VariableDefinedElsewhere]),
      Tb = new Set([]),
      Vb = "/index.js";

    function Jb(yb) {
      return "/" + yb
    }

    function gW(yb, bb, Wy) {
      yb.getSourceFile(bb) && yb.deleteFile(bb), yb.createFile(bb, Wy)
    }

    function Gb(yb) {
      return !!yb && ((0, Vy.u)(yb) || (0, Vy.q)(yb))
    }

    function Ob(yb, bb, Wy) {
      return () => {
        let Uy = [...bb.languageService.getSemanticDiagnostics(Wy), ...bb.languageService.getSyntacticDiagnostics(Wy)];
        return Uy = Uy.filter((yb => !(0, Gy.D)(yb.start) && !(0, Gy.D)(yb.length) && !mW.has(yb.code))), yb || (Uy = Uy.filter((yb => !Cb.has(yb.code)))), Uy.map((yb => ({
          from: yb.start,
          to: yb.start + yb.length,
          message: "string" === typeof yb.messageText ? yb.messageText : yb.messageText.messageText,
          severity: Tb.has(yb.code) ? "warning" : "error"
        })))
      }
    }

    function Rb(yb, bb) {
      return Wy => {
        var Uy, hy;
        const fy = yb.languageService.getCompletionsAtPosition(bb, Wy.pos, {});
        if (!fy) return {
          from: Wy.pos,
          options: []
        };
        let Zy = null !== (Uy = null === (hy = fy.optionalReplacementSpan) || void 0 === hy ? void 0 : hy.start) && void 0 !== Uy ? Uy : Wy.pos;
        if (!fy.optionalReplacementSpan) {
          const yb = Wy.state.doc.sliceString(0, Wy.pos);
          for (; Zy > 0 && /[\w$]/.test(yb[Zy - 1]);) Zy--
        }
        return fy.entries = fy.entries.filter((yb => yb.kind !== Sy().ScriptElementKind.warning)), {
          from: Zy,
          options: fy.entries.map((Uy => {
            var hy, fy, cb, Py;
            const oy = yb.languageService.getCompletionEntryDetails(bb, Wy.pos, Uy.name, {}, Uy.source, {}, Uy.data),
              By = null !== (hy = null === (fy = Uy.replacementSpan) || void 0 === fy ? void 0 : fy.start) && void 0 !== hy ? hy : Zy,
              Ky = Uy.replacementSpan ? Uy.replacementSpan.start + Uy.replacementSpan.length : Wy.pos,
              ey = null !== (cb = Uy.insertText) && void 0 !== cb ? cb : Uy.name;
            return {
              label: Uy.name,
              detail: null === oy || void 0 === oy ? void 0 : oy.displayParts.map((yb => yb.text)).join(""),
              info: null === oy || void 0 === oy || null === (Py = oy.documentation) || void 0 === Py ? void 0 : Py.map((yb => yb.text)).join(""),
              apply: yb => {
                yb.dispatch({
                  changes: {
                    from: By,
                    to: Ky,
                    insert: ey
                  },
                  selection: {
                    anchor: By + ey.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function vW(yb) {
      return bb => {
        const Wy = document.createElement("div");
        Wy.className = "CodeEditorTooltip";
        let Uy = !1;
        return queueMicrotask((() => {
          Uy || (cb.render((0, eb.jsx)(ey.d, {
            text: yb
          }), Wy), bb.requestMeasure())
        })), {
          dom: Wy,
          destroy() {
            Uy = !0, queueMicrotask((() => {
              cb.unmountComponentAtNode(Wy)
            }))
          }
        }
      }
    }

    function iW(yb, bb, Wy) {
      return Uy => {
        var hy;
        if (!bb) return [];
        const fy = null === (hy = Uy.selection.lZ[0]) || void 0 === hy ? void 0 : hy.head;
        if (void 0 === fy) return [];
        const Zy = yb.languageService.getSignatureHelpItems(Wy, fy, {});
        if (!Zy || !Zy.items.length) return [];
        const cb = Zy.applicableSpan.start - Zy.items[0].prefixDisplayParts.map((yb => yb.text)).join("").length,
          Py = Zy.applicableSpan.start,
          oy = Uy.doc.lineAt(fy),
          By = oy.from,
          Ky = Math.min(oy.to, fy);
        let ey, qb;
        return cb < By ? (ey = By, qb = Ky) : (ey = cb, qb = Py), [{
          pos: ey,
          end: qb,
          above: !1,
          create: vW(Eb(Zy.items[0], Zy.argumentIndex))
        }]
      }
    }

    function Mb(yb, bb) {
      return (Wy, Uy, hy) => {
        const fy = yb.languageService.getQuickInfoAtPosition(bb, Uy);
        if (!fy) return [];
        const Zy = fy.textSpan.start,
          cb = fy.textSpan.start + fy.textSpan.length;
        if (Uy < Zy || Uy >= cb) return [];
        if (fy.kind === Sy().ScriptElementKind.memberFunctionElement || fy.kind === Sy().ScriptElementKind.variableElement && "declare" === fy.kindModifiers) {
          const yb = fy.displayParts.findIndex((yb => "space" === yb.kind)); - 1 !== yb && (fy.displayParts = fy.displayParts.slice(yb));
          const bb = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Wy = fy.displayParts.findIndex((yb => "punctuation" === yb.kind && "(" === yb.text)); - 1 !== Wy && (bb.prefixDisplayParts = fy.displayParts.slice(0, Wy + 1), fy.displayParts = fy.displayParts.slice(Wy + 1));
          const Uy = fy.displayParts.findLastIndex((yb => "punctuation" === yb.kind && ")" === yb.text)); - 1 !== Uy && (bb.suffixDisplayParts = fy.displayParts.slice(Uy), fy.displayParts = fy.displayParts.slice(0, Uy));
          let hy = 0,
            Py = [];
          for (const Zy of fy.displayParts)
            if (qW.has(Zy.text) ? hy++ : sb.has(Zy.text) && hy--, "lineBreak" !== Zy.kind) {
              if ("space" === Zy.kind) {
                if (0 === Py.length) continue;
                Py.push({
                  kind: "space",
                  text: " "
                })
              } else Py.push(Zy);
              0 === hy && "," === Zy.text && (bb.parameters.push({
                displayParts: Py
              }), Py = [])
            } return Py.length > 0 && bb.parameters.push({
            displayParts: Py
          }), bb.documentation = fy.documentation, [{
            pos: Zy,
            end: cb,
            above: !0,
            create: vW(Eb(bb))
          }]
        }
        const Py = [];
        for (const yb of fy.displayParts) Py.push({
          str: yb.text,
          style: {
            color: Sb.text
          }
        });
        if (fy.documentation) {
          Py.push("\n\n");
          for (const yb of fy.documentation) Py.push({
            str: yb.text,
            style: {
              color: Sb.docs
            }
          })
        }
        return [{
          pos: Zy,
          end: cb,
          above: !0,
          create: vW(Py)
        }]
      }
    }
    const Yb = {
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
      semicolons: Sy().SemicolonPreference.Insert
    };
    const Xb = fy.f.define(),
      nb = {
        lineNumbers: !0,
        tabSize: 4
      };

    function ub(yb) {
      let {
        isLobbyCode: bb,
        code: Wy,
        onChange: cb,
        canEditCode: ey,
        setTemporaryMessage: sy,
        close: Gy,
        showTooltips: tb,
        lightMode: wy,
        collabState: Ny,
        onRemoteDocChange: zb,
        files: Iy,
        activePath: xb,
        pluginName: Ay,
        pluginFile: dy,
        pluginSource: yW,
        setActiveDocReplacer: bW,
        showAiHints: Wb,
        canAiChangeCode: Ub = ey
      } = yb;
      const [hb, cW] = (0, Zy.useState)(null), Pb = null === Ny || void 0 === Ny ? void 0 : Ny.version, ob = null === Ny || void 0 === Ny ? void 0 : Ny.clientID, Bb = (0, Zy.useRef)({
        isLobbyCode: bb,
        files: Iy,
        code: Wy,
        activePath: xb
      }), qW = (0, Zy.useRef)(zb);
      qW.current = zb;
      const sb = (0, Zy.useRef)(null),
        Sb = (0, Zy.useRef)(Ny);
      Sb.current = Ny;
      const Eb = (0, Zy.useRef)(null),
        lb = (0, Zy.useRef)(null),
        mW = (0, Zy.useRef)(null),
        Cb = (0, Zy.useRef)(Gy);
      Cb.current = Gy;
      const Tb = (0, Zy.useRef)(Wy);
      Tb.current = Wy;
      const vW = (0, Zy.useRef)(yW);
      vW.current = yW;
      const ub = function(yb, bb, Wy, Uy) {
        return Wy ? `/plugin-preview/${Wy}/${null!==Uy&&void 0!==Uy?Uy:"index.ts"}` : yb ? Jb(null !== bb && void 0 !== bb ? bb : Ty.h) : Vb
      }(bb, xb, Ay, dy);
      (0, Zy.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: yb,
            files: bb,
            code: Wy,
            activePath: Uy
          } = Bb.current, hy = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Sy().ModuleKind.ESNext,
            moduleResolution: Sy().ModuleResolutionKind.Bundler,
            target: Sy().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Cy.g).map((yb => [yb.specifier, [yb.typesVfsPath]])))
            }
          }, fy = new Map, Zy = [];
          if (yb) {
            const yb = null !== bb && void 0 !== bb ? bb : {
              [Ty.h]: Wy || "\n"
            };
            for (const [bb, Wy] of Object.entries(yb)) {
              const yb = Jb(bb);
              fy.set(yb, Wy || "\n"), Zy.push(yb)
            }
            const hy = Jb(null !== Uy && void 0 !== Uy ? Uy : Ty.h);
            fy.has(hy) ? fy.set(hy, Wy || "\n") : (fy.set(hy, Wy || "\n"), Zy.push(hy)), fy.set("/node_modules/@bloxd/index.d.ts", By.default), Zy.push("/node_modules/@bloxd/index.d.ts");
            for (const bb of Object.values(Cy.g)) {
              fy.set(bb.typesVfsPath, bb.types), Zy.push(bb.typesVfsPath);
              for (const [yb, Wy] of Object.entries(bb.files)) {
                const Uy = `/plugin-preview/${bb.name}/${yb}`;
                fy.set(Uy, Wy || "\n"), Zy.push(Uy)
              }
            }
          } else fy.set(Vb, Wy || "\n"), Zy.push(Vb);
          fy.set("/globals.d.ts", yb ? oy.e : Py.c), fy.set("/lib.d.ts", Ky.e), Zy.push("/globals.d.ts", "/lib.d.ts");
          const cb = qb.c(fy),
            ey = qb.g(cb, Zy, Sy(), hy);
          cW({
            TZ: ey,
            fsMap: fy
          })
        }()
      }), []), (0, Zy.useEffect)((() => {
        var yb, Uy;
        if (!hb || !bb) return;
        const {
          TZ: hy,
          fsMap: fy
        } = hb;
        if (function(yb, bb, Wy) {
            const Uy = new Set;
            for (const [hy, fy] of Object.entries(Wy)) {
              const Wy = Jb(hy);
              Uy.add(Wy);
              const Zy = fy || "\n";
              bb.get(Wy) !== Zy && (bb.set(Wy, Zy), gW(yb, Wy, Zy))
            }
            for (const hy of [...bb.keys()]) "/globals.d.ts" === hy || "/lib.d.ts" === hy || hy.startsWith("/node_modules/") || hy.startsWith("/plugin-preview/") || Uy.has(hy) || (bb.delete(hy), yb.getSourceFile(hy) && yb.deleteFile(hy))
          }(hy, fy, null !== Iy && void 0 !== Iy ? Iy : {
            [Ty.h]: Wy || "\n"
          }), Ay) return void gW(hy, ub, yW || "\n");
        const Zy = null !== (yb = null === (Uy = sb.current) || void 0 === Uy ? void 0 : Uy.state.doc.toString()) && void 0 !== yb ? yb : Wy;
        gW(hy, ub, Zy || "\n")
      }), [Iy, xb, hb, Ay, yW, ub, Wy, bb]), (0, Zy.useEffect)((() => {
        if (!hb) return;
        const {
          TZ: yb
        } = hb;
        gW(yb, ub, (Ay ? yW : Wy) || "\n")
      }), [Wy, Ay, yW, ub, hb]), (0, Zy.useEffect)((() => () => {
        lb.current && (lb.current(), lb.current = null)
      }), []), (0, Zy.useEffect)((() => (bW(((yb, bb) => {
        if (Ay) return !1;
        const Wy = sb.current,
          Uy = Sb.current,
          hy = Uy ? (0, Vy.A)(Uy.docKey) : null;
        if (!Wy || !Uy || Eb.current !== Uy.clientID || yb !== hy) return !1;
        const fy = Wy.state.doc.toString();
        return fy !== bb && Wy.dispatch({
          changes: {
            from: 0,
            to: fy.length,
            insert: bb
          }
        }), !0
      })), () => {
        sb.current = null, Eb.current = null, bW(null)
      })), [bW, Ay]);
      const rW = bb ? Ay ? null : null !== xb && void 0 !== xb ? xb : Ty.h : Zb.c,
        Hb = function(yb, bb) {
          const Wy = (0, Zy.useRef)(null);
          (0, Zy.useEffect)((() => {
            var yb;
            (null === (yb = Wy.current) || void 0 === yb ? void 0 : yb.path) !== bb && (Wy.current = null)
          }), [bb]);
          const Uy = yb => {
            const Uy = Wy.current;
            if (null === yb || void 0 === yb || !yb.dom.isConnected || !Uy || Uy.path !== bb) return;
            Wy.current = null;
            const {
              doc: hy
            } = yb.state, {
              from: Zy
            } = hy.line(Math.min(Math.max(Uy.line, 1), hy.lines));
            yb.dispatch({
              selection: {
                anchor: Zy
              },
              effects: fy.b.scrollIntoView(Zy, {
                y: "center"
              })
            }), yb.focus()
          };
          return (0, gb.i)("CodeEditorGoToLine", (bb => {
            Wy.current = bb, Uy(yb.current)
          })), Uy
        }(sb, rW);
      (0, gb.i)("FormatCode", (() => {
        if (!hb || !sb.current || Ay) return;
        const {
          TZ: yb,
          fsMap: Wy
        } = hb, Uy = yb.getSourceFile(ub).getFullText();
        let hy = 0;
        if (bb && Iy)
          for (const [bb, cb] of Object.entries(Iy)) bb !== (null !== xb && void 0 !== xb ? xb : Ty.h) && (hy += cb.length);
        const fy = function(yb, bb, Wy, Uy, hy) {
          const fy = yb.languageService.getFormattingEditsForDocument(Uy, Yb);
          if (!fy.length) return Oy.c.error("Code is already formatted.");
          fy.sort(((yb, bb) => bb.span.start - yb.span.start));
          let Zy = yb.getSourceFile(Uy).getFullText();
          for (const cb of fy) Zy = Zy.slice(0, cb.span.start) + cb.lY + Zy.slice(cb.span.start + cb.span.length);
          return Zy !== (Wy ? (0, Jy.l)(Zy, hy) : (0, Jy.j)(Zy)) ? Oy.c.error("Formatting the code will go beyond the character limit.") : Oy.c.value(Zy)
        }(yb, 0, bb, ub, hy);
        if (fy.isError()) return void sy({
          message: fy.asError().message,
          type: "warning"
        });
        const Zy = fy.getValue();
        Zy && (sb.current.dispatch({
          changes: {
            from: 0,
            to: Uy.length,
            insert: Zy
          },
          selection: {
            anchor: Zy.length
          }
        }), gW(yb, ub, Zy), cb(Zy))
      }));
      const aW = (0, Zy.useMemo)((() => {
        if (!hb) return [];
        const {
          TZ: yb,
          fsMap: Wy
        } = hb;
        ! function(yb, bb, Wy, Uy) {
          if (yb.getSourceFile(Wy)) return;
          const hy = Uy || "\n";
          bb.set(Wy, hy), yb.createFile(Wy, hy)
        }(yb, Wy, ub, (Ay ? vW.current : Tb.current) || "\n");
        const Zy = bb && Gb(Ay ? null !== dy && void 0 !== dy ? dy : "index.ts" : xb),
          cb = [(0, hy.b)({
            jsx: !1,
            typescript: Zy
          }), fy.e.highest(fy.b.domEventHandlers({
            keydown: yb => "Escape" === yb.key ? (Cb.current(), yb.stopPropagation(), !0) : (yb.stopPropagation(), !1)
          })), (0, Uy.b)({
            override: [Rb(yb, ub)]
          }), ib.n.fromClass(class {
            constructor(yb) {
              this.view = yb, this.timeout = null, this.scheduleParse()
            }
            update(yb) {
              (yb.docChanged || yb.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const yb = this.view.viewport.to;
                (0, ab.lb)(this.view.state, yb) || (0, ab.M)(this.view, yb, Fy) || this.scheduleParse()
              }), py))
            }
          }), fy.b.lineWrapping, fy.j.define({
            create: iW(yb, tb, ub),
            update(bb, Wy) {
              const Uy = Wy.effects.some((yb => yb.is(Xb)));
              return Wy.docChanged || Wy.selection || Uy ? (gW(yb, ub, Wy.state.doc.toString() || " "), iW(yb, tb, ub)(Wy.state)) : bb
            },
            provide: yb => fy.s.computeN([yb], (bb => bb.field(yb)))
          }), (0, fy.o)(Mb(yb, ub)), (0, ly.g)(Ob(bb, yb, ub)), fy.k.fromClass(class {
            constructor(yb) {
              this.view = yb, this.searchPanel = null
            }
            update(yb) {
              const bb = yb.view.dom.querySelector(".cm-search");
              if (bb !== this.searchPanel) {
                if (this.searchPanel = bb, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (yb => {
                  "Escape" === yb.key && (0, Ey.c)(this.view), yb.stopPropagation()
                }))
              }
            }
          })];
        Wb && !Ay && cb.push(Kb(bb ? null !== xb && void 0 !== xb ? xb : Ty.h : Zb.c, Ub));
        const Py = Sb.current;
        if (Py && !Ay) {
          cb.push(... function(yb, bb, Wy, Uy, hy) {
            let fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Zy = (0, Vy.A)(Wy),
              cb = ib.n.fromClass(class {
                constructor(yb) {
                  this.view = yb, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Xy.g.subscribe("codeCollab", (yb => {
                    yb.docKey === Zy && yb.type === Vy.h.Updates && (yb.updates ? this.applyUpdates(yb.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(yb) {
                  const bb = JSON.parse(yb).map((yb => ({
                    clientID: yb.clientID,
                    changes: vb.ChangeSet.fromJSON(yb.changes)
                  })));
                  bb.length > 0 && (this.view.dispatch((0, Ry.g)(this.view.state, bb)), hy && hy(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(yb) {
                  fy && (yb.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const yb = (0, Ry.k)(this.view.state);
                  if (this.pushing || !yb.length) return;
                  const bb = Date.now() - this.lastPushTime;
                  if (bb < Hy) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Hy - bb)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), uy);
                  const Wy = (0, Ry.e)(this.view.state),
                    hy = yb.map((yb => ({
                      clientID: yb.clientID,
                      changes: yb.changes.toJSON()
                    }))),
                    fy = JSON.stringify(hy);
                  fy.length <= Vy.l ? My.gameBridge.send("sendCodeCollab", {
                    qY: Vy.e.Push,
                    EM: Zy,
                    mY: Wy,
                    XM: fy
                  }) : (0, ny.postJsonWithMetricsCookiesAndJsonResponse)(`${Uy.gsUrl}/code/collab-push`, Yy.l["collab-push"].toBuffer({
                    gameNameWithVariation: Uy.gameNameWithVariation,
                    lobbyName: Uy.lobbyName,
                    docKey: Zy,
                    version: Wy,
                    updates: fy
                  }), {
                    retries: 0
                  }).catch((yb => {
                    console.error("[CodeCollab] HTTP push failed", yb)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const yb = (0, Ry.e)(this.view.state);
                  (0, ny.postJsonWithMetricsCookiesAndJsonResponse)(`${Uy.gsUrl}/code/collab-pull`, Yy.l["collab-pull"].toBuffer({
                    gameNameWithVariation: Uy.gameNameWithVariation,
                    lobbyName: Uy.lobbyName,
                    docKey: Zy,
                    fromVersion: yb
                  }), {
                    retries: 1
                  }).then((yb => {
                    this.destroyed || (yb.fullDoc ? Xy.g.EZ("codeCollabRejoin", {
                      docKey: Zy,
                      doc: yb.fullDoc,
                      version: yb.version
                    }) : this.applyUpdates(yb.updates))
                  })).catch((yb => {
                    console.error("[CodeCollab] Pull failed", yb)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const yb = Date.now();
                  if (yb - this.lastCursorSent < rb) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), rb)));
                  this.lastCursorSent = yb;
                  const bb = this.view.state.selection.main;
                  My.gameBridge.send("sendCodeCollab", {
                    qY: Vy.e.Cursor,
                    EM: Zy,
                    rY: bb.anchor,
                    aY: bb.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Xy.g.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Ry.d)({
              startVersion: yb,
              clientID: bb
            }), cb]
          }(Pb, ob, Py.docKey, Py.httpConfig, (yb => {
            var bb;
            null === (bb = qW.current) || void 0 === bb || bb.call(qW, yb)
          }), ey));
          const yb = function(yb, bb) {
            const Wy = (0, Vy.A)(yb);
            return {
              extensions: [kb],
              connect(yb) {
                if (bb) {
                  const Wy = bb.map((yb => Qy.of({
                    playerId: yb.playerId,
                    playerName: yb.playerName,
                    colour: yb.colour,
                    anchor: yb.anchor,
                    head: yb.head,
                    lastMoved: Date.now()
                  })));
                  Wy.length > 0 && yb.dispatch({
                    effects: Wy
                  })
                }
                const Uy = Xy.g.subscribe("codeCollab", (bb => {
                    if (bb.docKey === Wy)
                      if (bb.type === Vy.h.RemoteCursor) yb.dispatch({
                        effects: Qy.of({
                          playerId: bb.playerId,
                          playerName: bb.playerName,
                          colour: bb.colour,
                          anchor: bb.anchor,
                          head: bb.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (bb.type === Vy.h.Presence) {
                      const Wy = JSON.parse(bb.peers),
                        Uy = new Set(Wy.map((yb => yb.playerId))),
                        hy = yb.state.field(kb),
                        fy = [];
                      for (const [yb] of hy.cursors) Uy.has(yb) || fy.push(jb.of(yb));
                      fy.length > 0 && yb.dispatch({
                        effects: fy
                      })
                    }
                  })),
                  hy = setInterval((() => {
                    yb.dom.isConnected ? yb.dispatch({
                      effects: Dy.of(Date.now())
                    }) : clearInterval(hy)
                  }), Ly);
                return () => {
                  Xy.g.unsubscribe(Uy), clearInterval(hy)
                }
              }
            }
          }(Py.docKey, Py.existingCursors);
          cb.push(...yb.extensions), mW.current = yb.connect
        } else mW.current = null;
        return cb
      }), [bb, hb, tb, Pb, ob, ub, xb, Ay, dy, ey, Wb, Ub]);
      if (!hb || !Ny && !Ay) return (0, eb.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, eb.jsx)(mb.e, {})
      });
      const Fb = Ay ? `plugin-${Ay}-${null!==dy&&void 0!==dy?dy:"index.ts"}` : Ny ? `collab-${Ny.clientID}` : `local-${bb}`;
      return (0, eb.jsx)(fy.l, {
        value: Ay ? null !== yW && void 0 !== yW ? yW : "" : Wy,
        onChange: cb,
        extensions: aW,
        className: "CodeEditorContent",
        theme: wy ? fb : "dark",
        editable: ey && !Ay,
        basicSetup: nb,
        onCreateEditor: yb => {
          var bb;
          sb.current = yb, Eb.current = null !== (bb = null === Ny || void 0 === Ny ? void 0 : Ny.clientID) && void 0 !== bb ? bb : null, sb.current.focus(), Hb(yb), lb.current && lb.current(), mW.current && (lb.current = mW.current(yb))
        }
      }, Fb)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);