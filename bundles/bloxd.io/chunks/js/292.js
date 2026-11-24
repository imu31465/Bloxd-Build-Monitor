export const id = 292;
export const ids = [292];
export const modules = {
  41348: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => vT
    });
    var hm = fm(41350),
      Am = fm(41394),
      am = fm(41399),
      xm = fm(59),
      wm = fm(77),
      Dm = fm(41416),
      im = fm(41424),
      Rm = fm(4696),
      pm = fm(41432),
      Em = fm(1884),
      om = fm(41441),
      Om = fm(41456),
      Ym = fm.n(Om),
      qm = fm(41408),
      jm = fm(41410),
      Vm = fm(1345),
      Im = fm(36950),
      Km = fm(1247),
      Qm = fm(36964),
      nm = fm(36836),
      Jm = fm(1449),
      cm = fm(653),
      zm = fm(1254),
      Zm = fm(41511),
      km = fm(41356),
      bm = fm(41361),
      Sm = fm(1905),
      em = fm(3729),
      Nm = fm(31),
      Gm = fm(1162);
    const Xm = 1e4,
      Pm = 250,
      Hm = 250;
    var ym = fm(41376);
    const Cm = 50,
      rm = 100;
    const sm = 2e3,
      lm = km.J.define(),
      Mm = km.J.define(),
      um = km.J.define();
    class Bm extends bm.k {
      constructor(mm, Tm, fm) {
        super(), this.colour = mm, this.playerName = Tm, this.showName = fm
      }
      toDOM() {
        const mm = document.createElement("span");
        mm.className = "cm-remote-cursor-wrapper", mm.style.borderLeftColor = this.colour;
        const Tm = document.createElement("span");
        if (Tm.className = "cm-remote-cursor", Tm.style.borderLeftColor = this.colour, mm.appendChild(Tm), this.showName) {
          const Tm = document.createElement("span");
          Tm.className = "cm-remote-cursor-name", Tm.style.backgroundColor = this.colour, Tm.textContent = this.playerName, mm.appendChild(Tm)
        }
        return mm
      }
      eq(mm) {
        return this.colour === mm.colour && this.playerName === mm.playerName && this.showName === mm.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function Lm(mm, Tm) {
      const fm = [],
        hm = [];
      for (const [, xm] of mm) {
        const mm = Tm - xm.lastMoved < sm;
        if (fm.push({
            pos: xm.head,
            decoration: bm.c.widget({
              widget: new Bm(xm.colour, xm.playerName, mm),
              side: 1
            })
          }), xm.anchor !== xm.head) {
          const mm = Math.min(xm.anchor, xm.head),
            Tm = Math.max(xm.anchor, xm.head);
          hm.push({
            from: mm,
            to: Tm,
            decoration: bm.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${xm.colour}33`
              }
            })
          })
        }
      }
      const Am = new km.y,
        am = [];
      for (const xm of fm) am.push({
        bias: 1,
        deco: xm.decoration,
        from: xm.pos,
        to: xm.pos
      });
      for (const xm of hm) am.push({
        bias: 0,
        deco: xm.decoration,
        from: xm.from,
        to: xm.to
      });
      am.sort(((mm, Tm) => mm.from - Tm.from || mm.deco.startSide - Tm.deco.startSide || mm.bias - Tm.bias));
      for (const xm of am) Am.add(xm.from, xm.to, xm.deco);
      return Am.finish()
    }
    const tm = km.M.define({
      create: () => ({
        cursors: new Map,
        Ym: bm.c.none
      }),
      update(mm, Tm) {
        let fm = mm.cursors,
          hm = !1;
        if (Tm.docChanged) {
          const mm = new Map;
          for (const [hm, Am] of fm) mm.set(hm, {
            ...Am,
            anchor: Tm.changes.mapPos(Am.anchor, 1),
            head: Tm.changes.mapPos(Am.head, 1)
          });
          fm = mm, hm = !0
        }
        for (const Am of Tm.effects)
          if (Am.is(lm)) {
            if (!Number.isInteger(Am.value.anchor) || !Number.isInteger(Am.value.head)) {
              console.warn(`Code Editor: ignored player ${Am.value.playerId}'s cursor at ${Am.value.anchor}-${Am.value.head}`);
              continue
            }
            const am = Tm.state.doc.length,
              xm = {
                ...Am.value,
                anchor: Math.min(Am.value.anchor, am),
                head: Math.min(Am.value.head, am)
              };
            fm === mm.cursors && (fm = new Map(fm)), fm.set(xm.playerId, xm), hm = !0
          } else Am.is(Mm) ? fm.has(Am.value) && (fm === mm.cursors && (fm = new Map(fm)), fm.delete(Am.value), hm = !0) : Am.is(um) && (hm = !0);
        return hm ? {
          cursors: fm,
          Ym: Lm(fm, Date.now())
        } : mm
      },
      provide: mm => bm.f.Ym.from(mm, (mm => mm.Ym))
    });
    const Um = km.J.define(),
      dm = bm.c.mark({
        class: "CodeInsertFlash"
      }),
      gm = km.M.define({
        create: () => bm.c.none,
        update(mm, Tm) {
          let fm = mm.map(Tm.changes);
          for (const hm of Tm.effects) hm.is(Um) && (fm = hm.value ? bm.c.set(dm.range(hm.value.from, hm.value.to)) : bm.c.none);
          return fm
        },
        provide: mm => bm.f.Ym.from(mm)
      }),
      Wm = km.M.define({
        create: () => !1,
        update: (mm, Tm) => mm || void 0 !== Tm.annotation(km.Q.userEvent) && !Tm.annotation(km.Q.remote)
      }),
      Fm = [gm, Wm];

    function mT(mm) {
      return mm.field(Wm)
    }
    const TT = 3e4;

    function fT(mm, Tm) {
      const fm = (0, xm.useRef)(null);
      (0, xm.useEffect)((() => {
        var mm;
        (null === (mm = fm.current) || void 0 === mm ? void 0 : mm.path) !== Tm && (fm.current = null)
      }), [Tm]);
      const hm = mm => {
        var hm;
        const Am = fm.current;
        if (null === mm || void 0 === mm || !mm.dom.isConnected || !Am || Am.path !== Tm) return;
        fm.current = null;
        const {
          mO: xm
        } = Am;
        if (xm && null !== xm.text && performance.now() - xm.at < TT) {
          const Tm = function(mm, Tm) {
            if (mm === Tm) return null;
            const fm = Math.min(mm.length, Tm.length);
            let hm = 0;
            for (; hm < fm && mm[hm] === Tm[hm];) hm++;
            let Am = 0;
            for (; Am < fm - hm && mm[mm.length - 1 - Am] === Tm[Tm.length - 1 - Am];) Am++;
            return {
              from: hm,
              to: mm.length - Am,
              insert: Tm.slice(hm, Tm.length - Am)
            }
          }(mm.state.doc.toString(), xm.text);
          null !== Tm && mm.dispatch({
            changes: Tm,
            userEvent: xm.placed ? "input" : void 0
          })
        }
        const {
          doc: wm
        } = mm.state, Dm = wm.line(Math.min(Math.max(Am.line, 1), wm.lines)), im = Dm.from + Math.min(null !== (hm = Am.column) && void 0 !== hm ? hm : 0, Dm.length);
        mm.dispatch({
          selection: {
            anchor: im
          },
          effects: am.c.scrollIntoView(im, {
            y: "center"
          }),
          userEvent: null !== xm && void 0 !== xm && xm.placed ? "select" : void 0
        }), !1 !== (null === xm || void 0 === xm ? void 0 : xm.focused) && mm.focus()
      };
      return (0, Jm.g)("CodeEditorGoToLine", (Tm => {
        fm.current = Tm, hm(mm.current)
      })), (0, Jm.g)("CodeEditorKeepEdits", (() => {
        const hm = mm.current;
        if (null === hm || !hm.dom.isConnected || null === Tm) return;
        const {
          doc: Am,
          selection: am
        } = hm.state, {
          head: xm
        } = am.main, wm = Am.lineAt(xm), Dm = {
          text: (0, Zm.k)(hm.state).length > 0 ? Am.toString() : null,
          at: performance.now(),
          focused: hm.hasFocus,
          placed: mT(hm.state)
        };
        fm.current = {
          path: Tm,
          line: wm.number,
          column: xm - wm.from,
          mO: Dm
        }
      })), mm => {
        var Am;
        const am = fm.current;
        !1 === (null === am || void 0 === am || null === (Am = am.mO) || void 0 === Am ? void 0 : Am.focused) && am.path === Tm || mm.focus(), hm(mm)
      }
    }
    var hT = fm(4296),
      AT = fm(1208);

    function aT(mm, Tm) {
      const {
        t: fm
      } = (0, AT.A)();
      (0, Jm.g)("CodeEditorInsertText", (hm => {
        let {
          text: Am,
          focus: am
        } = hm;
        const xm = mm.current,
          wm = null !== xm && void 0 !== xm && xm.dom.isConnected ? function(mm, Tm) {
            if (!mT(mm)) return null;
            const {
              from: fm,
              to: hm
            } = mm.selection.main, Am = fm + Tm.length;
            return {
              changes: {
                from: fm,
                to: hm,
                insert: Tm
              },
              selection: {
                anchor: Am
              },
              effects: [bm.f.scrollIntoView(Am, {
                y: "center"
              }), Um.of({
                from: fm,
                to: Am
              })],
              userEvent: "input"
            }
          }(xm.state, Am) : null;
        null !== xm && null !== wm ? (xm.dispatch(wm), am && xm.focus(), setTimeout((() => {
          xm.dom.isConnected && xm.dispatch({
            effects: Um.of(null)
          })
        }), 1500)) : (0, hT.b)(Am).then((() => {
          Tm({
            message: fm("codeEditorWorld:pickCopied", {
              coords: Am
            }),
            type: "success"
          })
        }), (mm => {
          console.error("Pick could not copy the coordinates", mm), Tm({
            message: fm("codeEditorWorld:pickPlaceCursor", {
              coords: Am
            }),
            type: "warning"
          })
        }))
      }))
    }
    var xT = fm(41387);
    const wT = "#e45649",
      DT = "#383a42",
      iT = "#696c77",
      RT = "#986801",
      pT = "#e5e5e6",
      ET = "#fafafa",
      oT = "#eaeaeb",
      OT = "#526fff",
      YT = bm.f.theme({
        "&": {
          color: DT,
          backgroundColor: ET
        },
        ".cm-content": {
          caretColor: OT
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: OT
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: DT
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
          backgroundColor: ET,
          color: iT,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: pT
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: oT
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: oT,
          borderBottomColor: oT
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: pT,
            color: DT
          }
        }
      }, {
        dark: !1
      }),
      qT = ym.d.define([{
        tag: xT.l.keyword,
        color: "#a626a4"
      }, {
        tag: [xT.l.name, xT.l.deleted, xT.l.character, xT.l.propertyName, xT.l.macroName],
        color: wT
      }, {
        tag: [xT.l.function(xT.l.variableName), xT.l.labelName],
        color: "#4078f2"
      }, {
        tag: [xT.l.color, xT.l.constant(xT.l.name), xT.l.standard(xT.l.name)],
        color: RT
      }, {
        tag: [xT.l.definition(xT.l.name), xT.l.separator],
        color: DT
      }, {
        tag: [xT.l.typeName, xT.l.className, xT.l.number, xT.l.changed, xT.l.annotation, xT.l.modifier, xT.l.self, xT.l.namespace],
        color: "#c18401"
      }, {
        tag: [xT.l.operator, xT.l.operatorKeyword, xT.l.url, xT.l.escape, xT.l.regexp, xT.l.link, xT.l.special(xT.l.string)],
        color: "#0184bc"
      }, {
        tag: [xT.l.meta, xT.l.comment],
        color: iT
      }, {
        tag: xT.l.strong,
        fontWeight: "bold"
      }, {
        tag: xT.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: xT.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: xT.l.link,
        color: iT,
        textDecoration: "underline"
      }, {
        tag: xT.l.heading,
        fontWeight: "bold",
        color: wT
      }, {
        tag: [xT.l.atom, xT.l.bool, xT.l.special(xT.l.variableName)],
        color: RT
      }, {
        tag: [xT.l.processingInstruction, xT.l.string, xT.l.inserted],
        color: "#50a14f"
      }, {
        tag: xT.l.invalid,
        color: "#000000"
      }]),
      jT = [YT, (0, ym.kb)(qT)];
    var VT = fm(37008),
      IT = fm(41516);
    const KT = am.g.define(),
      QT = am.j.define({
        create: () => !1,
        update(mm, Tm) {
          for (const fm of Tm.effects) fm.is(KT) && (mm = fm.value);
          return mm
        }
      }),
      nT = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function JT(mm, Tm) {
      return [QT, am.l.fromClass(class {
        constructor(mm) {
          this.view = mm, this.onDown = mm => {
            const Tm = mm.target instanceof Element && null !== mm.target.closest(".cm-tooltip");
            0 !== mm.button || Tm || this.view.state.field(QT) || this.view.dispatch({
              effects: KT.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(QT) && this.view.dispatch({
              effects: KT.of(!1)
            })
          }, mm.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), am.q.compute(["selection", QT], (fm => function(mm, Tm, fm) {
        const hm = mm.selection.main;
        return hm.empty || mm.field(QT) || mm.sliceDoc(hm.from, hm.to).trim().length < 2 ? null : {
          pos: hm.from,
          above: !0,
          create: mm => {
            const hm = document.createElement("div");
            hm.className = "CodeSelectionActions", hm.setAttribute("role", "toolbar"), hm.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Am,
                label: am
              }
              of nT) {
              if (!fm && "explain" !== Am) continue;
              const xm = document.createElement("button");
              xm.type = "button", xm.textContent = am, "change" !== Am && (xm.title = IT.c, xm.dataset.asksAi = "true"), xm.addEventListener("mousedown", (mm => {
                mm.preventDefault()
              })), xm.addEventListener("click", (() => {
                const fm = mm.state.selection.main;
                if (fm.empty) return;
                const hm = {
                  action: Am,
                  path: Tm,
                  fromLine: mm.state.doc.lineAt(fm.from).number,
                  toLine: mm.state.doc.lineAt(fm.to > fm.from && mm.state.doc.lineAt(fm.to).from === fm.to ? fm.to - 1 : fm.to).number,
                  text: mm.state.sliceDoc(fm.from, fm.to)
                };
                Nm.j.gp("WorldCodeAiSelection", hm), mm.dispatch({
                  selection: {
                    anchor: fm.to
                  }
                })
              })), hm.appendChild(xm)
            }
            return {
              dom: hm
            }
          }
        }
      }(fm, mm, Tm)))]
    }
    var cT = fm(1135);
    const zT = new Set(["(", "{", "[", "<"]),
      ZT = new Set([")", "}", "]", ">"]),
      kT = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function bT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function fm(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = [];
        for (const Am of mm) {
          let mm;
          mm = "punctuation" === Am.kind ? kT.text : "parameterName" === Am.kind ? kT.parameterName : Tm, hm.push({
            str: Am.text,
            style: {
              color: mm,
              opacity: fm ? .5 : void 0
            }
          })
        }
        return hm
      }
      const hm = [];
      if (hm.push(...fm(mm.prefixDisplayParts, kT.text)), mm.parameters.length > 0) {
        hm.push("\n");
        for (let Am = 0; Am < mm.parameters.length; Am++) {
          const am = mm.parameters[Am];
          hm.push("\t"), hm.push(...fm(am.displayParts, kT.parameter, null !== Tm && Am !== Tm)), hm.push("\n")
        }
      }
      return hm.push(...fm(mm.suffixDisplayParts, kT.suffix)), mm.documentation && (hm.push("\n\n"), hm.push(...fm(mm.documentation, kT.docs))), hm
    }
    var ST = function(mm) {
      return mm[mm.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", mm[mm.DuplicateIdentifier = 2300] = "DuplicateIdentifier", mm
    }(ST || {});
    const eT = new Set([ST.DuplicateIdentifier]),
      NT = new Set([ST.VariableDefinedElsewhere]),
      GT = new Set([]),
      XT = "/index.js";

    function PT(mm) {
      return "/" + mm
    }

    function HT(mm, Tm, fm) {
      mm.getSourceFile(Tm) && mm.deleteFile(Tm), mm.createFile(Tm, fm)
    }

    function yT(mm) {
      return !!mm && ((0, Qm.o)(mm) || (0, Qm.m)(mm))
    }

    function CT(mm, Tm, fm) {
      return () => {
        let hm = [...Tm.languageService.getSemanticDiagnostics(fm), ...Tm.languageService.getSyntacticDiagnostics(fm)];
        return hm = hm.filter((mm => !(0, cm.H)(mm.start) && !(0, cm.H)(mm.length) && !eT.has(mm.code))), mm || (hm = hm.filter((mm => !NT.has(mm.code)))), hm.map((mm => ({
          from: mm.start,
          to: mm.start + mm.length,
          message: "string" === typeof mm.messageText ? mm.messageText : mm.messageText.messageText,
          severity: GT.has(mm.code) ? "warning" : "error"
        })))
      }
    }

    function rT(mm, Tm) {
      return fm => {
        var hm, Am;
        const am = mm.languageService.getCompletionsAtPosition(Tm, fm.pos, {});
        if (!am) return {
          from: fm.pos,
          options: []
        };
        let xm = null !== (hm = null === (Am = am.optionalReplacementSpan) || void 0 === Am ? void 0 : Am.start) && void 0 !== hm ? hm : fm.pos;
        if (!am.optionalReplacementSpan) {
          const mm = fm.state.doc.sliceString(0, fm.pos);
          for (; xm > 0 && /[\w$]/.test(mm[xm - 1]);) xm--
        }
        return am.entries = am.entries.filter((mm => mm.kind !== Ym().ScriptElementKind.warning)), {
          from: xm,
          options: am.entries.map((hm => {
            var Am, am, wm, Dm;
            const im = mm.languageService.getCompletionEntryDetails(Tm, fm.pos, hm.name, {}, hm.source, {}, hm.data),
              Rm = null !== (Am = null === (am = hm.replacementSpan) || void 0 === am ? void 0 : am.start) && void 0 !== Am ? Am : xm,
              pm = hm.replacementSpan ? hm.replacementSpan.start + hm.replacementSpan.length : fm.pos,
              Em = null !== (wm = hm.insertText) && void 0 !== wm ? wm : hm.name;
            return {
              label: hm.name,
              detail: null === im || void 0 === im ? void 0 : im.displayParts.map((mm => mm.text)).join(""),
              info: null === im || void 0 === im || null === (Dm = im.documentation) || void 0 === Dm ? void 0 : Dm.map((mm => mm.text)).join(""),
              apply: mm => {
                mm.dispatch({
                  changes: {
                    from: Rm,
                    to: pm,
                    insert: Em
                  },
                  selection: {
                    anchor: Rm + Em.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function sT(mm) {
      return Tm => {
        const fm = document.createElement("div");
        fm.className = "CodeEditorTooltip";
        let hm = !1;
        return queueMicrotask((() => {
          hm || (wm.render((0, cT.jsx)(Em.b, {
            text: mm
          }), fm), Tm.requestMeasure())
        })), {
          dom: fm,
          destroy() {
            hm = !0, queueMicrotask((() => {
              wm.unmountComponentAtNode(fm)
            }))
          }
        }
      }
    }

    function lT(mm, Tm, fm) {
      return hm => {
        var Am;
        if (!Tm) return [];
        const am = null === (Am = hm.selection.mo[0]) || void 0 === Am ? void 0 : Am.head;
        if (void 0 === am) return [];
        const xm = mm.languageService.getSignatureHelpItems(fm, am, {});
        if (!xm || !xm.items.length) return [];
        const wm = xm.applicableSpan.start - xm.items[0].prefixDisplayParts.map((mm => mm.text)).join("").length,
          Dm = xm.applicableSpan.start,
          im = hm.doc.lineAt(am),
          Rm = im.from,
          pm = Math.min(im.to, am);
        let Em, om;
        return wm < Rm ? (Em = Rm, om = pm) : (Em = wm, om = Dm), [{
          pos: Em,
          end: om,
          above: !1,
          create: sT(bT(xm.items[0], xm.argumentIndex))
        }]
      }
    }

    function MT(mm, Tm) {
      return (fm, hm, Am) => {
        const am = mm.languageService.getQuickInfoAtPosition(Tm, hm);
        if (!am) return [];
        const xm = am.textSpan.start,
          wm = am.textSpan.start + am.textSpan.length;
        if (hm < xm || hm >= wm) return [];
        if (am.kind === Ym().ScriptElementKind.memberFunctionElement || am.kind === Ym().ScriptElementKind.variableElement && "declare" === am.kindModifiers) {
          const mm = am.displayParts.findIndex((mm => "space" === mm.kind)); - 1 !== mm && (am.displayParts = am.displayParts.slice(mm));
          const Tm = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            fm = am.displayParts.findIndex((mm => "punctuation" === mm.kind && "(" === mm.text)); - 1 !== fm && (Tm.prefixDisplayParts = am.displayParts.slice(0, fm + 1), am.displayParts = am.displayParts.slice(fm + 1));
          const hm = am.displayParts.findLastIndex((mm => "punctuation" === mm.kind && ")" === mm.text)); - 1 !== hm && (Tm.suffixDisplayParts = am.displayParts.slice(hm), am.displayParts = am.displayParts.slice(0, hm));
          let Am = 0,
            Dm = [];
          for (const xm of am.displayParts)
            if (zT.has(xm.text) ? Am++ : ZT.has(xm.text) && Am--, "lineBreak" !== xm.kind) {
              if ("space" === xm.kind) {
                if (0 === Dm.length) continue;
                Dm.push({
                  kind: "space",
                  text: " "
                })
              } else Dm.push(xm);
              0 === Am && "," === xm.text && (Tm.parameters.push({
                displayParts: Dm
              }), Dm = [])
            } return Dm.length > 0 && Tm.parameters.push({
            displayParts: Dm
          }), Tm.documentation = am.documentation, [{
            pos: xm,
            end: wm,
            above: !0,
            create: sT(bT(Tm))
          }]
        }
        const Dm = [];
        for (const mm of am.displayParts) Dm.push({
          str: mm.text,
          style: {
            color: kT.text
          }
        });
        if (am.documentation) {
          Dm.push("\n\n");
          for (const mm of am.documentation) Dm.push({
            str: mm.text,
            style: {
              color: kT.docs
            }
          })
        }
        return [{
          pos: xm,
          end: wm,
          above: !0,
          create: sT(Dm)
        }]
      }
    }
    const uT = {
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
      semicolons: Ym().SemicolonPreference.Insert
    };
    const BT = am.g.define(),
      LT = {
        lineNumbers: !0,
        tabSize: 4
      };

    function vT(mm) {
      let {
        isLobbyCode: Tm,
        code: fm,
        onChange: wm,
        canEditCode: Em,
        setTemporaryMessage: Om,
        close: cm,
        showTooltips: Bm,
        lightMode: Lm,
        collabState: Um,
        onRemoteDocChange: dm,
        files: gm,
        activePath: Wm,
        pluginName: mT,
        pluginFile: TT,
        pluginSource: hT,
        setActiveDocReplacer: AT,
        showAiHints: xT,
        canAiChangeCode: wT = Em
      } = mm;
      const [DT, iT] = (0, xm.useState)(null), RT = null === Um || void 0 === Um ? void 0 : Um.version, pT = null === Um || void 0 === Um ? void 0 : Um.clientID, ET = (0, xm.useRef)({
        isLobbyCode: Tm,
        files: gm,
        code: fm,
        activePath: Wm
      }), oT = (0, xm.useRef)(dm);
      oT.current = dm;
      const OT = (0, xm.useRef)(null),
        YT = (0, xm.useRef)(Um);
      YT.current = Um;
      const qT = (0, xm.useRef)(null),
        IT = (0, xm.useRef)(null),
        KT = (0, xm.useRef)(null),
        QT = (0, xm.useRef)(cm);
      QT.current = cm;
      const nT = (0, xm.useRef)(fm);
      nT.current = fm;
      const zT = (0, xm.useRef)(hT);
      zT.current = hT;
      const ZT = function(mm, Tm, fm, hm) {
        return fm ? `/plugin-preview/${fm}/${null!==hm&&void 0!==hm?hm:"index.ts"}` : mm ? PT(null !== Tm && void 0 !== Tm ? Tm : Km.i) : XT
      }(Tm, Wm, mT, TT);
      (0, xm.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: mm,
            files: Tm,
            code: fm,
            activePath: hm
          } = ET.current, Am = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Ym().ModuleKind.ESNext,
            moduleResolution: Ym().ModuleResolutionKind.Bundler,
            target: Ym().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Im.e).map((mm => [mm.specifier, [mm.typesVfsPath]])))
            }
          }, am = new Map, xm = [];
          if (mm) {
            const mm = null !== Tm && void 0 !== Tm ? Tm : {
              [Km.i]: fm || "\n"
            };
            for (const [Tm, fm] of Object.entries(mm)) {
              const mm = PT(Tm);
              am.set(mm, fm || "\n"), xm.push(mm)
            }
            const Am = PT(null !== hm && void 0 !== hm ? hm : Km.i);
            am.has(Am) ? am.set(Am, fm || "\n") : (am.set(Am, fm || "\n"), xm.push(Am)), am.set("/node_modules/@bloxd/index.d.ts", Rm.default), xm.push("/node_modules/@bloxd/index.d.ts");
            for (const Tm of Object.values(Im.e)) {
              am.set(Tm.typesVfsPath, Tm.types), xm.push(Tm.typesVfsPath);
              for (const [mm, fm] of Object.entries(Tm.files)) {
                const hm = `/plugin-preview/${Tm.name}/${mm}`;
                am.set(hm, fm || "\n"), xm.push(hm)
              }
            }
          } else am.set(XT, fm || "\n"), xm.push(XT);
          am.set("/globals.d.ts", mm ? im.e : Dm.e), am.set("/lib.d.ts", pm.e), xm.push("/globals.d.ts", "/lib.d.ts");
          const wm = om.d(am),
            Em = om.h(wm, xm, Ym(), Am);
          iT({
            io: Em,
            fsMap: am
          })
        }()
      }), []), (0, xm.useEffect)((() => {
        var mm, hm;
        if (!DT || !Tm) return;
        const {
          io: Am,
          fsMap: am
        } = DT;
        if (function(mm, Tm, fm) {
            const hm = new Set;
            for (const [Am, am] of Object.entries(fm)) {
              const fm = PT(Am);
              hm.add(fm);
              const xm = am || "\n";
              Tm.get(fm) !== xm && (Tm.set(fm, xm), HT(mm, fm, xm))
            }
            for (const Am of [...Tm.keys()]) "/globals.d.ts" === Am || "/lib.d.ts" === Am || Am.startsWith("/node_modules/") || Am.startsWith("/plugin-preview/") || hm.has(Am) || (Tm.delete(Am), mm.getSourceFile(Am) && mm.deleteFile(Am))
          }(Am, am, null !== gm && void 0 !== gm ? gm : {
            [Km.i]: fm || "\n"
          }), mT) return void HT(Am, ZT, hT || "\n");
        const xm = null !== (mm = null === (hm = OT.current) || void 0 === hm ? void 0 : hm.state.doc.toString()) && void 0 !== mm ? mm : fm;
        HT(Am, ZT, xm || "\n")
      }), [gm, Wm, DT, mT, hT, ZT, fm, Tm]), (0, xm.useEffect)((() => {
        if (!DT) return;
        const {
          io: mm
        } = DT;
        HT(mm, ZT, (mT ? hT : fm) || "\n")
      }), [fm, mT, hT, ZT, DT]), (0, xm.useEffect)((() => () => {
        IT.current && (IT.current(), IT.current = null)
      }), []), (0, xm.useEffect)((() => (AT(((mm, Tm) => {
        if (mT) return !1;
        const fm = OT.current,
          hm = YT.current,
          Am = hm ? (0, Qm.u)(hm.docKey) : null;
        if (!fm || !hm || qT.current !== hm.clientID || mm !== Am) return !1;
        const am = fm.state.doc.toString();
        return am !== Tm && fm.dispatch({
          changes: {
            from: 0,
            to: am.length,
            insert: Tm
          }
        }), !0
      })), () => {
        OT.current = null, qT.current = null, AT(null)
      })), [AT, mT]);
      const kT = Tm ? mT ? null : null !== Wm && void 0 !== Wm ? Wm : Km.i : VT.d,
        bT = fT(OT, kT);
      aT(OT, Om), (0, Jm.g)("FormatCode", (() => {
        if (!DT || !OT.current || mT) return;
        const {
          io: mm,
          fsMap: fm
        } = DT, hm = mm.getSourceFile(ZT).getFullText();
        let Am = 0;
        if (Tm && gm)
          for (const [Tm, wm] of Object.entries(gm)) Tm !== (null !== Wm && void 0 !== Wm ? Wm : Km.i) && (Am += wm.length);
        const am = function(mm, Tm, fm, hm, Am) {
          const am = mm.languageService.getFormattingEditsForDocument(hm, uT);
          if (!am.length) return zm.e.error("Code is already formatted.");
          am.sort(((mm, Tm) => Tm.span.start - mm.span.start));
          let xm = mm.getSourceFile(hm).getFullText();
          for (const wm of am) xm = xm.slice(0, wm.span.start) + wm.gx + xm.slice(wm.span.start + wm.span.length);
          return xm !== (fm ? (0, nm.j)(xm, Am) : (0, nm.h)(xm)) ? zm.e.error("Formatting the code will go beyond the character limit.") : zm.e.value(xm)
        }(mm, 0, Tm, ZT, Am);
        if (am.isError()) return void Om({
          message: am.asError().message,
          type: "warning"
        });
        const xm = am.getValue();
        xm && (OT.current.dispatch({
          changes: {
            from: 0,
            to: hm.length,
            insert: xm
          },
          selection: {
            anchor: xm.length
          }
        }), HT(mm, ZT, xm), wm(xm))
      }));
      const ST = (0, xm.useMemo)((() => {
        if (!DT) return [];
        const {
          io: mm,
          fsMap: fm
        } = DT;
        ! function(mm, Tm, fm, hm) {
          if (mm.getSourceFile(fm)) return;
          const Am = hm || "\n";
          Tm.set(fm, Am), mm.createFile(fm, Am)
        }(mm, fm, ZT, (mT ? zT.current : nT.current) || "\n");
        const xm = Tm && yT(mT ? null !== TT && void 0 !== TT ? TT : "index.ts" : Wm),
          wm = [(0, Am.c)({
            jsx: !1,
            typescript: xm
          }), am.d.highest(am.c.domEventHandlers({
            keydown: mm => "Escape" === mm.key ? (QT.current(), mm.stopPropagation(), !0) : (mm.stopPropagation(), !1)
          })), (0, hm.d)({
            override: [rT(mm, ZT)]
          }), bm.h.fromClass(class {
            constructor(mm) {
              this.view = mm, this.timeout = null, this.scheduleParse()
            }
            update(mm) {
              (mm.docChanged || mm.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const mm = this.view.viewport.to;
                (0, ym.lb)(this.view.state, mm) || (0, ym.R)(this.view, mm, Cm) || this.scheduleParse()
              }), rm))
            }
          }), ...Fm, am.c.lineWrapping, am.j.define({
            create: lT(mm, Bm, ZT),
            update(Tm, fm) {
              const hm = fm.effects.some((mm => mm.is(BT)));
              return fm.docChanged || fm.selection || hm ? (HT(mm, ZT, fm.state.doc.toString() || " "), lT(mm, Bm, ZT)(fm.state)) : Tm
            },
            provide: mm => am.q.computeN([mm], (Tm => Tm.field(mm)))
          }), (0, am.p)(MT(mm, ZT)), (0, jm.e)(CT(Tm, mm, ZT)), am.l.fromClass(class {
            constructor(mm) {
              this.view = mm, this.searchPanel = null
            }
            update(mm) {
              const Tm = mm.view.dom.querySelector(".cm-search");
              if (Tm !== this.searchPanel) {
                if (this.searchPanel = Tm, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (mm => {
                  "Escape" === mm.key && (0, qm.e)(this.view), mm.stopPropagation()
                }))
              }
            }
          })];
        xT && !mT && wm.push(JT(Tm ? null !== Wm && void 0 !== Wm ? Wm : Km.i : VT.d, wT));
        const Dm = YT.current;
        if (Dm && !mT) {
          wm.push(... function(mm, Tm, fm, hm, Am) {
            let am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const xm = (0, Qm.u)(fm),
              wm = bm.h.fromClass(class {
                constructor(mm) {
                  this.view = mm, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Nm.j.subscribe("codeCollab", (mm => {
                    mm.docKey === xm && mm.type === Qm.f.Updates && (mm.updates ? this.applyUpdates(mm.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(mm) {
                  const Tm = JSON.parse(mm).map((mm => ({
                    clientID: mm.clientID,
                    changes: km.ChangeSet.fromJSON(mm.changes)
                  })));
                  Tm.length > 0 && (this.view.dispatch((0, Zm.j)(this.view.state, Tm)), Am && Am(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(mm) {
                  am && (mm.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const mm = (0, Zm.k)(this.view.state);
                  if (this.pushing || !mm.length) return;
                  const Tm = Date.now() - this.lastPushTime;
                  if (Tm < Hm) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Hm - Tm)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Xm);
                  const fm = (0, Zm.f)(this.view.state),
                    Am = mm.map((mm => ({
                      clientID: mm.clientID,
                      changes: mm.changes.toJSON()
                    }))),
                    am = JSON.stringify(Am);
                  am.length <= Qm.h ? Sm.gameBridge.send("sendCodeCollab", {
                    va: Qm.b.Push,
                    Ua: xm,
                    da: fm,
                    Fa: am
                  }) : (0, Gm.postJsonWithMetricsCookiesAndJsonResponse)(`${hm.gsUrl}/code/collab-push`, em.t["collab-push"].toBuffer({
                    gameNameWithVariation: hm.gameNameWithVariation,
                    lobbyName: hm.lobbyName,
                    docKey: xm,
                    version: fm,
                    updates: am
                  }), {
                    retries: 0
                  }).catch((mm => {
                    console.error("[CodeCollab] HTTP push failed", mm)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const mm = (0, Zm.f)(this.view.state);
                  (0, Gm.postJsonWithMetricsCookiesAndJsonResponse)(`${hm.gsUrl}/code/collab-pull`, em.t["collab-pull"].toBuffer({
                    gameNameWithVariation: hm.gameNameWithVariation,
                    lobbyName: hm.lobbyName,
                    docKey: xm,
                    fromVersion: mm
                  }), {
                    retries: 1
                  }).then((mm => {
                    this.destroyed || (mm.fullDoc ? Nm.j.gp("codeCollabRejoin", {
                      docKey: xm,
                      doc: mm.fullDoc,
                      version: mm.version
                    }) : this.applyUpdates(mm.updates))
                  })).catch((mm => {
                    console.error("[CodeCollab] Pull failed", mm)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const mm = Date.now();
                  if (mm - this.lastCursorSent < Pm) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Pm)));
                  this.lastCursorSent = mm;
                  const Tm = this.view.state.selection.main;
                  Sm.gameBridge.send("sendCodeCollab", {
                    va: Qm.b.Cursor,
                    Ua: xm,
                    Ax: Tm.anchor,
                    wx: Tm.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Nm.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Zm.e)({
              startVersion: mm,
              clientID: Tm
            }), wm]
          }(RT, pT, Dm.docKey, Dm.httpConfig, (mm => {
            var Tm;
            null === (Tm = oT.current) || void 0 === Tm || Tm.call(oT, mm)
          }), Em));
          const mm = function(mm, Tm) {
            const fm = (0, Qm.u)(mm);
            return {
              extensions: [tm],
              connect(mm) {
                if (Tm) {
                  const fm = Tm.map((mm => lm.of({
                    playerId: mm.playerId,
                    playerName: mm.playerName,
                    colour: mm.colour,
                    anchor: mm.anchor,
                    head: mm.head,
                    lastMoved: Date.now()
                  })));
                  fm.length > 0 && mm.dispatch({
                    effects: fm
                  })
                }
                const hm = Nm.j.subscribe("codeCollab", (Tm => {
                    if (Tm.docKey === fm)
                      if (Tm.type === Qm.f.RemoteCursor) mm.dispatch({
                        effects: lm.of({
                          playerId: Tm.playerId,
                          playerName: Tm.playerName,
                          colour: Tm.colour,
                          anchor: Tm.anchor,
                          head: Tm.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Tm.type === Qm.f.Presence) {
                      const fm = JSON.parse(Tm.peers),
                        hm = new Set(fm.map((mm => mm.playerId))),
                        Am = mm.state.field(tm),
                        am = [];
                      for (const [mm] of Am.cursors) hm.has(mm) || am.push(Mm.of(mm));
                      am.length > 0 && mm.dispatch({
                        effects: am
                      })
                    }
                  })),
                  Am = setInterval((() => {
                    mm.dom.isConnected ? mm.dispatch({
                      effects: um.of(Date.now())
                    }) : clearInterval(Am)
                  }), sm);
                return () => {
                  Nm.j.unsubscribe(hm), clearInterval(Am)
                }
              }
            }
          }(Dm.docKey, Dm.existingCursors);
          wm.push(...mm.extensions), KT.current = mm.connect
        } else KT.current = null;
        return wm
      }), [Tm, DT, Bm, RT, pT, ZT, Wm, mT, TT, Em, xT, wT]);
      if (!DT || !Um && !mT) return (0, cT.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, cT.jsx)(Vm.c, {})
      });
      const eT = mT ? `plugin-${mT}-${null!==TT&&void 0!==TT?TT:"index.ts"}` : Um ? `collab-${Um.clientID}` : `local-${Tm}`;
      return (0, cT.jsx)(am.m, {
        value: mT ? null !== hT && void 0 !== hT ? hT : "" : fm,
        onChange: wm,
        extensions: ST,
        className: "CodeEditorContent",
        theme: Lm ? jT : "dark",
        editable: Em && !mT,
        basicSetup: LT,
        onCreateEditor: mm => {
          var Tm;
          OT.current = mm, qT.current = null !== (Tm = null === Um || void 0 === Um ? void 0 : Um.clientID) && void 0 !== Tm ? Tm : null, bT(mm), IT.current && IT.current(), KT.current && (IT.current = KT.current(mm))
        }
      }, eT)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);