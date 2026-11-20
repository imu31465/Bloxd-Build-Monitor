export const id = 283;
export const ids = [283];
export const modules = {
  40729: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => KF
    });
    var Rk = Bk(40738),
      tk = Bk(40774),
      ak = Bk(40776),
      Xk = Bk(61),
      bk = Bk(67),
      wk = Bk(40792),
      dk = Bk(40799),
      sk = Bk(4487),
      Vk = Bk(40802),
      Jk = Bk(1812),
      Ak = Bk(40811),
      ek = Bk(40827),
      yk = Bk.n(ek),
      fk = Bk(40782),
      mk = Bk(40787),
      Wk = Bk(1288),
      vk = Bk(36524),
      ik = Bk(1192),
      Yk = Bk(36536),
      Lk = Bk(36436),
      Ok = Bk(1387),
      Ek = Bk(606),
      Sk = Bk(1195),
      Nk = Bk(40880),
      Hk = Bk(40741),
      uk = Bk(40748),
      Mk = Bk(1847),
      gk = Bk(3546),
      Uk = Bk(29),
      ck = Bk(1101);
    const Gk = 1e4,
      Tk = 250,
      rk = 250;
    var Dk = Bk(40759);
    const zk = 50,
      Pk = 100;
    const hk = 2e3,
      qk = Hk.z.define(),
      Ck = Hk.z.define(),
      Zk = Hk.z.define();
    class pk extends uk.u {
      constructor(kk, Fk, Bk) {
        super(), this.colour = kk, this.playerName = Fk, this.showName = Bk
      }
      toDOM() {
        const kk = document.createElement("span");
        kk.className = "cm-remote-cursor-wrapper", kk.style.borderLeftColor = this.colour;
        const Fk = document.createElement("span");
        if (Fk.className = "cm-remote-cursor", Fk.style.borderLeftColor = this.colour, kk.appendChild(Fk), this.showName) {
          const Fk = document.createElement("span");
          Fk.className = "cm-remote-cursor-name", Fk.style.backgroundColor = this.colour, Fk.textContent = this.playerName, kk.appendChild(Fk)
        }
        return kk
      }
      eq(kk) {
        return this.colour === kk.colour && this.playerName === kk.playerName && this.showName === kk.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function Kk(kk, Fk) {
      const Bk = [],
        Rk = [];
      for (const [, Xk] of kk) {
        const kk = Fk - Xk.lastMoved < hk;
        if (Bk.push({
            pos: Xk.head,
            decoration: uk.d.widget({
              widget: new pk(Xk.colour, Xk.playerName, kk),
              side: 1
            })
          }), Xk.anchor !== Xk.head) {
          const kk = Math.min(Xk.anchor, Xk.head),
            Fk = Math.max(Xk.anchor, Xk.head);
          Rk.push({
            from: kk,
            to: Fk,
            decoration: uk.d.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Xk.colour}33`
              }
            })
          })
        }
      }
      const tk = new Hk.r,
        ak = [];
      for (const Xk of Bk) ak.push({
        bias: 1,
        deco: Xk.decoration,
        from: Xk.pos,
        to: Xk.pos
      });
      for (const Xk of Rk) ak.push({
        bias: 0,
        deco: Xk.decoration,
        from: Xk.from,
        to: Xk.to
      });
      ak.sort(((kk, Fk) => kk.from - Fk.from || kk.deco.startSide - Fk.deco.startSide || kk.bias - Fk.bias));
      for (const Xk of ak) tk.add(Xk.from, Xk.to, Xk.deco);
      return tk.finish()
    }
    const xk = Hk.A.define({
      create: () => ({
        cursors: new Map,
        uR: uk.d.none
      }),
      update(kk, Fk) {
        let Bk = kk.cursors,
          Rk = !1;
        if (Fk.docChanged) {
          const kk = new Map;
          for (const [Rk, tk] of Bk) kk.set(Rk, {
            ...tk,
            anchor: Fk.changes.mapPos(tk.anchor, 1),
            head: Fk.changes.mapPos(tk.head, 1)
          });
          Bk = kk, Rk = !0
        }
        for (const tk of Fk.effects)
          if (tk.is(qk)) {
            if (!Number.isInteger(tk.value.anchor) || !Number.isInteger(tk.value.head)) {
              console.warn(`Code Editor: ignored player ${tk.value.playerId}'s cursor at ${tk.value.anchor}-${tk.value.head}`);
              continue
            }
            const ak = Fk.state.doc.length,
              Xk = {
                ...tk.value,
                anchor: Math.min(tk.value.anchor, ak),
                head: Math.min(tk.value.head, ak)
              };
            Bk === kk.cursors && (Bk = new Map(Bk)), Bk.set(Xk.playerId, Xk), Rk = !0
          } else tk.is(Ck) ? Bk.has(tk.value) && (Bk === kk.cursors && (Bk = new Map(Bk)), Bk.delete(tk.value), Rk = !0) : tk.is(Zk) && (Rk = !0);
        return Rk ? {
          cursors: Bk,
          uR: Kk(Bk, Date.now())
        } : kk
      },
      provide: kk => uk.l.uR.from(kk, (kk => kk.uR))
    });
    const jk = Hk.z.define(),
      lk = uk.d.mark({
        class: "CodeInsertFlash"
      }),
      nk = Hk.A.define({
        create: () => uk.d.none,
        update(kk, Fk) {
          let Bk = kk.map(Fk.changes);
          for (const Rk of Fk.effects) Rk.is(jk) && (Bk = Rk.value ? uk.d.set(lk.range(Rk.value.from, Rk.value.to)) : uk.d.none);
          return Bk
        },
        provide: kk => uk.l.uR.from(kk)
      }),
      Ik = Hk.A.define({
        create: () => !1,
        update: (kk, Fk) => kk || void 0 !== Fk.annotation(Hk.E.userEvent) && !Fk.annotation(Hk.E.remote)
      }),
      Qk = [nk, Ik];

    function kF(kk) {
      return kk.field(Ik)
    }
    const FF = 3e4;

    function BF(kk, Fk) {
      const Bk = (0, Xk.useRef)(null);
      (0, Xk.useEffect)((() => {
        var kk;
        (null === (kk = Bk.current) || void 0 === kk ? void 0 : kk.path) !== Fk && (Bk.current = null)
      }), [Fk]);
      const Rk = kk => {
        var Rk;
        const tk = Bk.current;
        if (null === kk || void 0 === kk || !kk.dom.isConnected || !tk || tk.path !== Fk) return;
        Bk.current = null;
        const {
          lA: Xk
        } = tk;
        if (Xk && null !== Xk.text && performance.now() - Xk.at < FF) {
          const Fk = function(kk, Fk) {
            if (kk === Fk) return null;
            const Bk = Math.min(kk.length, Fk.length);
            let Rk = 0;
            for (; Rk < Bk && kk[Rk] === Fk[Rk];) Rk++;
            let tk = 0;
            for (; tk < Bk - Rk && kk[kk.length - 1 - tk] === Fk[Fk.length - 1 - tk];) tk++;
            return {
              from: Rk,
              to: kk.length - tk,
              insert: Fk.slice(Rk, Fk.length - tk)
            }
          }(kk.state.doc.toString(), Xk.text);
          null !== Fk && kk.dispatch({
            changes: Fk,
            userEvent: Xk.placed ? "input" : void 0
          })
        }
        const {
          doc: bk
        } = kk.state, wk = bk.line(Math.min(Math.max(tk.line, 1), bk.lines)), dk = wk.from + Math.min(null !== (Rk = tk.column) && void 0 !== Rk ? Rk : 0, wk.length);
        kk.dispatch({
          selection: {
            anchor: dk
          },
          effects: ak.b.scrollIntoView(dk, {
            y: "center"
          }),
          userEvent: null !== Xk && void 0 !== Xk && Xk.placed ? "select" : void 0
        }), !1 !== (null === Xk || void 0 === Xk ? void 0 : Xk.focused) && kk.focus()
      };
      return (0, Ok.f)("CodeEditorGoToLine", (Fk => {
        Bk.current = Fk, Rk(kk.current)
      })), (0, Ok.f)("CodeEditorKeepEdits", (() => {
        const Rk = kk.current;
        if (null === Rk || !Rk.dom.isConnected || null === Fk) return;
        const {
          doc: tk,
          selection: ak
        } = Rk.state, {
          head: Xk
        } = ak.main, bk = tk.lineAt(Xk), wk = {
          text: (0, Nk.n)(Rk.state).length > 0 ? tk.toString() : null,
          at: performance.now(),
          focused: Rk.hasFocus,
          placed: kF(Rk.state)
        };
        Bk.current = {
          path: Fk,
          line: bk.number,
          column: Xk - bk.from,
          lA: wk
        }
      })), kk => {
        var tk;
        const ak = Bk.current;
        !1 === (null === ak || void 0 === ak || null === (tk = ak.lA) || void 0 === tk ? void 0 : tk.focused) && ak.path === Fk || kk.focus(), Rk(kk)
      }
    }
    var RF = Bk(4115),
      tF = Bk(1149);

    function aF(kk, Fk) {
      const {
        t: Bk
      } = (0, tF.x)();
      (0, Ok.f)("CodeEditorInsertText", (Rk => {
        let {
          text: tk,
          focus: ak
        } = Rk;
        const Xk = kk.current,
          bk = null !== Xk && void 0 !== Xk && Xk.dom.isConnected ? function(kk, Fk) {
            if (!kF(kk)) return null;
            const {
              from: Bk,
              to: Rk
            } = kk.selection.main, tk = Bk + Fk.length;
            return {
              changes: {
                from: Bk,
                to: Rk,
                insert: Fk
              },
              selection: {
                anchor: tk
              },
              effects: [uk.l.scrollIntoView(tk, {
                y: "center"
              }), jk.of({
                from: Bk,
                to: tk
              })],
              userEvent: "input"
            }
          }(Xk.state, tk) : null;
        null !== Xk && null !== bk ? (Xk.dispatch(bk), ak && Xk.focus(), setTimeout((() => {
          Xk.dom.isConnected && Xk.dispatch({
            effects: jk.of(null)
          })
        }), 1500)) : (0, RF.c)(tk).then((() => {
          Fk({
            message: Bk("codeEditorWorld:pickCopied", {
              coords: tk
            }),
            type: "success"
          })
        }), (kk => {
          console.error("Pick could not copy the coordinates", kk), Fk({
            message: Bk("codeEditorWorld:pickPlaceCursor", {
              coords: tk
            }),
            type: "warning"
          })
        }))
      }))
    }
    var XF = Bk(40765);
    const bF = "#e45649",
      wF = "#383a42",
      dF = "#696c77",
      sF = "#986801",
      VF = "#e5e5e6",
      JF = "#fafafa",
      AF = "#eaeaeb",
      eF = "#526fff",
      yF = uk.l.theme({
        "&": {
          color: wF,
          backgroundColor: JF
        },
        ".cm-content": {
          caretColor: eF
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: eF
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: wF
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
          backgroundColor: JF,
          color: dF,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: VF
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: AF
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: AF,
          borderBottomColor: AF
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: VF,
            color: wF
          }
        }
      }, {
        dark: !1
      }),
      fF = Dk.e.define([{
        tag: XF.n.keyword,
        color: "#a626a4"
      }, {
        tag: [XF.n.name, XF.n.deleted, XF.n.character, XF.n.propertyName, XF.n.macroName],
        color: bF
      }, {
        tag: [XF.n.function(XF.n.variableName), XF.n.labelName],
        color: "#4078f2"
      }, {
        tag: [XF.n.color, XF.n.constant(XF.n.name), XF.n.standard(XF.n.name)],
        color: sF
      }, {
        tag: [XF.n.definition(XF.n.name), XF.n.separator],
        color: wF
      }, {
        tag: [XF.n.typeName, XF.n.className, XF.n.number, XF.n.changed, XF.n.annotation, XF.n.modifier, XF.n.self, XF.n.namespace],
        color: "#c18401"
      }, {
        tag: [XF.n.operator, XF.n.operatorKeyword, XF.n.url, XF.n.escape, XF.n.regexp, XF.n.link, XF.n.special(XF.n.string)],
        color: "#0184bc"
      }, {
        tag: [XF.n.meta, XF.n.comment],
        color: dF
      }, {
        tag: XF.n.strong,
        fontWeight: "bold"
      }, {
        tag: XF.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: XF.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: XF.n.link,
        color: dF,
        textDecoration: "underline"
      }, {
        tag: XF.n.heading,
        fontWeight: "bold",
        color: bF
      }, {
        tag: [XF.n.atom, XF.n.bool, XF.n.special(XF.n.variableName)],
        color: sF
      }, {
        tag: [XF.n.processingInstruction, XF.n.string, XF.n.inserted],
        color: "#50a14f"
      }, {
        tag: XF.n.invalid,
        color: "#000000"
      }]),
      mF = [yF, (0, Dk.mb)(fF)];
    var WF = Bk(36582),
      vF = Bk(40886);
    const iF = ak.f.define(),
      YF = ak.j.define({
        create: () => !1,
        update(kk, Fk) {
          for (const Bk of Fk.effects) Bk.is(iF) && (kk = Bk.value);
          return kk
        }
      }),
      oF = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function LF(kk, Fk) {
      return [YF, ak.l.fromClass(class {
        constructor(kk) {
          this.view = kk, this.onDown = kk => {
            const Fk = kk.target instanceof Element && null !== kk.target.closest(".cm-tooltip");
            0 !== kk.button || Fk || this.view.state.field(YF) || this.view.dispatch({
              effects: iF.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(YF) && this.view.dispatch({
              effects: iF.of(!1)
            })
          }, kk.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), ak.u.compute(["selection", YF], (Bk => function(kk, Fk, Bk) {
        const Rk = kk.selection.main;
        return Rk.empty || kk.field(YF) || kk.sliceDoc(Rk.from, Rk.to).trim().length < 2 ? null : {
          pos: Rk.from,
          above: !0,
          create: kk => {
            const Rk = document.createElement("div");
            Rk.className = "CodeSelectionActions", Rk.setAttribute("role", "toolbar"), Rk.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: tk,
                label: ak
              }
              of oF) {
              if (!Bk && "explain" !== tk) continue;
              const Xk = document.createElement("button");
              Xk.type = "button", Xk.textContent = ak, "change" !== tk && (Xk.title = vF.d, Xk.dataset.asksAi = "true"), Xk.addEventListener("mousedown", (kk => {
                kk.preventDefault()
              })), Xk.addEventListener("click", (() => {
                const Bk = kk.state.selection.main;
                if (Bk.empty) return;
                const Rk = {
                  action: tk,
                  path: Fk,
                  fromLine: kk.state.doc.lineAt(Bk.from).number,
                  toLine: kk.state.doc.lineAt(Bk.to > Bk.from && kk.state.doc.lineAt(Bk.to).from === Bk.to ? Bk.to - 1 : Bk.to).number,
                  text: kk.state.sliceDoc(Bk.from, Bk.to)
                };
                Uk.o.Hf("WorldCodeAiSelection", Rk), kk.dispatch({
                  selection: {
                    anchor: Bk.to
                  }
                })
              })), Rk.appendChild(Xk)
            }
            return {
              dom: Rk
            }
          }
        }
      }(Bk, kk, Fk)))]
    }
    var OF = Bk(1069);
    const EF = new Set(["(", "{", "[", "<"]),
      SF = new Set([")", "}", "]", ">"]),
      NF = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function HF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Bk(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = [];
        for (const tk of kk) {
          let kk;
          kk = "punctuation" === tk.kind ? NF.text : "parameterName" === tk.kind ? NF.parameterName : Fk, Rk.push({
            str: tk.text,
            style: {
              color: kk,
              opacity: Bk ? .5 : void 0
            }
          })
        }
        return Rk
      }
      const Rk = [];
      if (Rk.push(...Bk(kk.prefixDisplayParts, NF.text)), kk.parameters.length > 0) {
        Rk.push("\n");
        for (let tk = 0; tk < kk.parameters.length; tk++) {
          const ak = kk.parameters[tk];
          Rk.push("\t"), Rk.push(...Bk(ak.displayParts, NF.parameter, null !== Fk && tk !== Fk)), Rk.push("\n")
        }
      }
      return Rk.push(...Bk(kk.suffixDisplayParts, NF.suffix)), kk.documentation && (Rk.push("\n\n"), Rk.push(...Bk(kk.documentation, NF.docs))), Rk
    }
    var uF = function(kk) {
      return kk[kk.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", kk[kk.DuplicateIdentifier = 2300] = "DuplicateIdentifier", kk
    }(uF || {});
    const MF = new Set([uF.DuplicateIdentifier]),
      gF = new Set([uF.VariableDefinedElsewhere]),
      UF = new Set([]),
      cF = "/index.js";

    function GF(kk) {
      return "/" + kk
    }

    function TF(kk, Fk, Bk) {
      kk.getSourceFile(Fk) && kk.deleteFile(Fk), kk.createFile(Fk, Bk)
    }

    function rF(kk) {
      return !!kk && ((0, Yk.o)(kk) || (0, Yk.k)(kk))
    }

    function DF(kk, Fk, Bk) {
      return () => {
        let Rk = [...Fk.languageService.getSemanticDiagnostics(Bk), ...Fk.languageService.getSyntacticDiagnostics(Bk)];
        return Rk = Rk.filter((kk => !(0, Ek.F)(kk.start) && !(0, Ek.F)(kk.length) && !MF.has(kk.code))), kk || (Rk = Rk.filter((kk => !gF.has(kk.code)))), Rk.map((kk => ({
          from: kk.start,
          to: kk.start + kk.length,
          message: "string" === typeof kk.messageText ? kk.messageText : kk.messageText.messageText,
          severity: UF.has(kk.code) ? "warning" : "error"
        })))
      }
    }

    function zF(kk, Fk) {
      return Bk => {
        var Rk, tk;
        const ak = kk.languageService.getCompletionsAtPosition(Fk, Bk.pos, {});
        if (!ak) return {
          from: Bk.pos,
          options: []
        };
        let Xk = null !== (Rk = null === (tk = ak.optionalReplacementSpan) || void 0 === tk ? void 0 : tk.start) && void 0 !== Rk ? Rk : Bk.pos;
        if (!ak.optionalReplacementSpan) {
          const kk = Bk.state.doc.sliceString(0, Bk.pos);
          for (; Xk > 0 && /[\w$]/.test(kk[Xk - 1]);) Xk--
        }
        return ak.entries = ak.entries.filter((kk => kk.kind !== yk().ScriptElementKind.warning)), {
          from: Xk,
          options: ak.entries.map((Rk => {
            var tk, ak, bk, wk;
            const dk = kk.languageService.getCompletionEntryDetails(Fk, Bk.pos, Rk.name, {}, Rk.source, {}, Rk.data),
              sk = null !== (tk = null === (ak = Rk.replacementSpan) || void 0 === ak ? void 0 : ak.start) && void 0 !== tk ? tk : Xk,
              Vk = Rk.replacementSpan ? Rk.replacementSpan.start + Rk.replacementSpan.length : Bk.pos,
              Jk = null !== (bk = Rk.insertText) && void 0 !== bk ? bk : Rk.name;
            return {
              label: Rk.name,
              detail: null === dk || void 0 === dk ? void 0 : dk.displayParts.map((kk => kk.text)).join(""),
              info: null === dk || void 0 === dk || null === (wk = dk.documentation) || void 0 === wk ? void 0 : wk.map((kk => kk.text)).join(""),
              apply: kk => {
                kk.dispatch({
                  changes: {
                    from: sk,
                    to: Vk,
                    insert: Jk
                  },
                  selection: {
                    anchor: sk + Jk.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function PF(kk) {
      return Fk => {
        const Bk = document.createElement("div");
        Bk.className = "CodeEditorTooltip";
        let Rk = !1;
        return queueMicrotask((() => {
          Rk || (bk.render((0, OF.jsx)(Jk.d, {
            text: kk
          }), Bk), Fk.requestMeasure())
        })), {
          dom: Bk,
          destroy() {
            Rk = !0, queueMicrotask((() => {
              bk.unmountComponentAtNode(Bk)
            }))
          }
        }
      }
    }

    function hF(kk, Fk, Bk) {
      return Rk => {
        var tk;
        if (!Fk) return [];
        const ak = null === (tk = Rk.selection.hb[0]) || void 0 === tk ? void 0 : tk.head;
        if (void 0 === ak) return [];
        const Xk = kk.languageService.getSignatureHelpItems(Bk, ak, {});
        if (!Xk || !Xk.items.length) return [];
        const bk = Xk.applicableSpan.start - Xk.items[0].prefixDisplayParts.map((kk => kk.text)).join("").length,
          wk = Xk.applicableSpan.start,
          dk = Rk.doc.lineAt(ak),
          sk = dk.from,
          Vk = Math.min(dk.to, ak);
        let Jk, Ak;
        return bk < sk ? (Jk = sk, Ak = Vk) : (Jk = bk, Ak = wk), [{
          pos: Jk,
          end: Ak,
          above: !1,
          create: PF(HF(Xk.items[0], Xk.argumentIndex))
        }]
      }
    }

    function qF(kk, Fk) {
      return (Bk, Rk, tk) => {
        const ak = kk.languageService.getQuickInfoAtPosition(Fk, Rk);
        if (!ak) return [];
        const Xk = ak.textSpan.start,
          bk = ak.textSpan.start + ak.textSpan.length;
        if (Rk < Xk || Rk >= bk) return [];
        if (ak.kind === yk().ScriptElementKind.memberFunctionElement || ak.kind === yk().ScriptElementKind.variableElement && "declare" === ak.kindModifiers) {
          const kk = ak.displayParts.findIndex((kk => "space" === kk.kind)); - 1 !== kk && (ak.displayParts = ak.displayParts.slice(kk));
          const Fk = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Bk = ak.displayParts.findIndex((kk => "punctuation" === kk.kind && "(" === kk.text)); - 1 !== Bk && (Fk.prefixDisplayParts = ak.displayParts.slice(0, Bk + 1), ak.displayParts = ak.displayParts.slice(Bk + 1));
          const Rk = ak.displayParts.findLastIndex((kk => "punctuation" === kk.kind && ")" === kk.text)); - 1 !== Rk && (Fk.suffixDisplayParts = ak.displayParts.slice(Rk), ak.displayParts = ak.displayParts.slice(0, Rk));
          let tk = 0,
            wk = [];
          for (const Xk of ak.displayParts)
            if (EF.has(Xk.text) ? tk++ : SF.has(Xk.text) && tk--, "lineBreak" !== Xk.kind) {
              if ("space" === Xk.kind) {
                if (0 === wk.length) continue;
                wk.push({
                  kind: "space",
                  text: " "
                })
              } else wk.push(Xk);
              0 === tk && "," === Xk.text && (Fk.parameters.push({
                displayParts: wk
              }), wk = [])
            } return wk.length > 0 && Fk.parameters.push({
            displayParts: wk
          }), Fk.documentation = ak.documentation, [{
            pos: Xk,
            end: bk,
            above: !0,
            create: PF(HF(Fk))
          }]
        }
        const wk = [];
        for (const kk of ak.displayParts) wk.push({
          str: kk.text,
          style: {
            color: NF.text
          }
        });
        if (ak.documentation) {
          wk.push("\n\n");
          for (const kk of ak.documentation) wk.push({
            str: kk.text,
            style: {
              color: NF.docs
            }
          })
        }
        return [{
          pos: Xk,
          end: bk,
          above: !0,
          create: PF(wk)
        }]
      }
    }
    const CF = {
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
      semicolons: yk().SemicolonPreference.Insert
    };
    const ZF = ak.f.define(),
      pF = {
        lineNumbers: !0,
        tabSize: 4
      };

    function KF(kk) {
      let {
        isLobbyCode: Fk,
        code: Bk,
        onChange: bk,
        canEditCode: Jk,
        setTemporaryMessage: ek,
        close: Ek,
        showTooltips: pk,
        lightMode: Kk,
        collabState: jk,
        onRemoteDocChange: lk,
        files: nk,
        activePath: Ik,
        pluginName: kF,
        pluginFile: FF,
        pluginSource: RF,
        setActiveDocReplacer: tF,
        showAiHints: XF,
        canAiChangeCode: bF = Jk
      } = kk;
      const [wF, dF] = (0, Xk.useState)(null), sF = null === jk || void 0 === jk ? void 0 : jk.version, VF = null === jk || void 0 === jk ? void 0 : jk.clientID, JF = (0, Xk.useRef)({
        isLobbyCode: Fk,
        files: nk,
        code: Bk,
        activePath: Ik
      }), AF = (0, Xk.useRef)(lk);
      AF.current = lk;
      const eF = (0, Xk.useRef)(null),
        yF = (0, Xk.useRef)(jk);
      yF.current = jk;
      const fF = (0, Xk.useRef)(null),
        vF = (0, Xk.useRef)(null),
        iF = (0, Xk.useRef)(null),
        YF = (0, Xk.useRef)(Ek);
      YF.current = Ek;
      const oF = (0, Xk.useRef)(Bk);
      oF.current = Bk;
      const EF = (0, Xk.useRef)(RF);
      EF.current = RF;
      const SF = function(kk, Fk, Bk, Rk) {
        return Bk ? `/plugin-preview/${Bk}/${null!==Rk&&void 0!==Rk?Rk:"index.ts"}` : kk ? GF(null !== Fk && void 0 !== Fk ? Fk : ik.h) : cF
      }(Fk, Ik, kF, FF);
      (0, Xk.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: kk,
            files: Fk,
            code: Bk,
            activePath: Rk
          } = JF.current, tk = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: yk().ModuleKind.ESNext,
            moduleResolution: yk().ModuleResolutionKind.Bundler,
            target: yk().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(vk.h).map((kk => [kk.specifier, [kk.typesVfsPath]])))
            }
          }, ak = new Map, Xk = [];
          if (kk) {
            const kk = null !== Fk && void 0 !== Fk ? Fk : {
              [ik.h]: Bk || "\n"
            };
            for (const [Fk, Bk] of Object.entries(kk)) {
              const kk = GF(Fk);
              ak.set(kk, Bk || "\n"), Xk.push(kk)
            }
            const tk = GF(null !== Rk && void 0 !== Rk ? Rk : ik.h);
            ak.has(tk) ? ak.set(tk, Bk || "\n") : (ak.set(tk, Bk || "\n"), Xk.push(tk)), ak.set("/node_modules/@bloxd/index.d.ts", sk.default), Xk.push("/node_modules/@bloxd/index.d.ts");
            for (const Fk of Object.values(vk.h)) {
              ak.set(Fk.typesVfsPath, Fk.types), Xk.push(Fk.typesVfsPath);
              for (const [kk, Bk] of Object.entries(Fk.files)) {
                const Rk = `/plugin-preview/${Fk.name}/${kk}`;
                ak.set(Rk, Bk || "\n"), Xk.push(Rk)
              }
            }
          } else ak.set(cF, Bk || "\n"), Xk.push(cF);
          ak.set("/globals.d.ts", kk ? dk.b : wk.d), ak.set("/lib.d.ts", Vk.d), Xk.push("/globals.d.ts", "/lib.d.ts");
          const bk = Ak.b(ak),
            Jk = Ak.f(bk, Xk, yk(), tk);
          dF({
            lb: Jk,
            fsMap: ak
          })
        }()
      }), []), (0, Xk.useEffect)((() => {
        var kk, Rk;
        if (!wF || !Fk) return;
        const {
          lb: tk,
          fsMap: ak
        } = wF;
        if (function(kk, Fk, Bk) {
            const Rk = new Set;
            for (const [tk, ak] of Object.entries(Bk)) {
              const Bk = GF(tk);
              Rk.add(Bk);
              const Xk = ak || "\n";
              Fk.get(Bk) !== Xk && (Fk.set(Bk, Xk), TF(kk, Bk, Xk))
            }
            for (const tk of [...Fk.keys()]) "/globals.d.ts" === tk || "/lib.d.ts" === tk || tk.startsWith("/node_modules/") || tk.startsWith("/plugin-preview/") || Rk.has(tk) || (Fk.delete(tk), kk.getSourceFile(tk) && kk.deleteFile(tk))
          }(tk, ak, null !== nk && void 0 !== nk ? nk : {
            [ik.h]: Bk || "\n"
          }), kF) return void TF(tk, SF, RF || "\n");
        const Xk = null !== (kk = null === (Rk = eF.current) || void 0 === Rk ? void 0 : Rk.state.doc.toString()) && void 0 !== kk ? kk : Bk;
        TF(tk, SF, Xk || "\n")
      }), [nk, Ik, wF, kF, RF, SF, Bk, Fk]), (0, Xk.useEffect)((() => {
        if (!wF) return;
        const {
          lb: kk
        } = wF;
        TF(kk, SF, (kF ? RF : Bk) || "\n")
      }), [Bk, kF, RF, SF, wF]), (0, Xk.useEffect)((() => () => {
        vF.current && (vF.current(), vF.current = null)
      }), []), (0, Xk.useEffect)((() => (tF(((kk, Fk) => {
        if (kF) return !1;
        const Bk = eF.current,
          Rk = yF.current,
          tk = Rk ? (0, Yk.v)(Rk.docKey) : null;
        if (!Bk || !Rk || fF.current !== Rk.clientID || kk !== tk) return !1;
        const ak = Bk.state.doc.toString();
        return ak !== Fk && Bk.dispatch({
          changes: {
            from: 0,
            to: ak.length,
            insert: Fk
          }
        }), !0
      })), () => {
        eF.current = null, fF.current = null, tF(null)
      })), [tF, kF]);
      const NF = Fk ? kF ? null : null !== Ik && void 0 !== Ik ? Ik : ik.h : WF.c,
        HF = BF(eF, NF);
      aF(eF, ek), (0, Ok.f)("FormatCode", (() => {
        if (!wF || !eF.current || kF) return;
        const {
          lb: kk,
          fsMap: Bk
        } = wF, Rk = kk.getSourceFile(SF).getFullText();
        let tk = 0;
        if (Fk && nk)
          for (const [Fk, bk] of Object.entries(nk)) Fk !== (null !== Ik && void 0 !== Ik ? Ik : ik.h) && (tk += bk.length);
        const ak = function(kk, Fk, Bk, Rk, tk) {
          const ak = kk.languageService.getFormattingEditsForDocument(Rk, CF);
          if (!ak.length) return Sk.c.error("Code is already formatted.");
          ak.sort(((kk, Fk) => Fk.span.start - kk.span.start));
          let Xk = kk.getSourceFile(Rk).getFullText();
          for (const bk of ak) Xk = Xk.slice(0, bk.span.start) + bk.fX + Xk.slice(bk.span.start + bk.span.length);
          return Xk !== (Bk ? (0, Lk.g)(Xk, tk) : (0, Lk.f)(Xk)) ? Sk.c.error("Formatting the code will go beyond the character limit.") : Sk.c.value(Xk)
        }(kk, 0, Fk, SF, tk);
        if (ak.isError()) return void ek({
          message: ak.asError().message,
          type: "warning"
        });
        const Xk = ak.getValue();
        Xk && (eF.current.dispatch({
          changes: {
            from: 0,
            to: Rk.length,
            insert: Xk
          },
          selection: {
            anchor: Xk.length
          }
        }), TF(kk, SF, Xk), bk(Xk))
      }));
      const uF = (0, Xk.useMemo)((() => {
        if (!wF) return [];
        const {
          lb: kk,
          fsMap: Bk
        } = wF;
        ! function(kk, Fk, Bk, Rk) {
          if (kk.getSourceFile(Bk)) return;
          const tk = Rk || "\n";
          Fk.set(Bk, tk), kk.createFile(Bk, tk)
        }(kk, Bk, SF, (kF ? EF.current : oF.current) || "\n");
        const Xk = Fk && rF(kF ? null !== FF && void 0 !== FF ? FF : "index.ts" : Ik),
          bk = [(0, tk.c)({
            jsx: !1,
            typescript: Xk
          }), ak.e.highest(ak.b.domEventHandlers({
            keydown: kk => "Escape" === kk.key ? (YF.current(), kk.stopPropagation(), !0) : (kk.stopPropagation(), !1)
          })), (0, Rk.d)({
            override: [zF(kk, SF)]
          }), uk.q.fromClass(class {
            constructor(kk) {
              this.view = kk, this.timeout = null, this.scheduleParse()
            }
            update(kk) {
              (kk.docChanged || kk.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const kk = this.view.viewport.to;
                (0, Dk.nb)(this.view.state, kk) || (0, Dk.V)(this.view, kk, zk) || this.scheduleParse()
              }), Pk))
            }
          }), ...Qk, ak.b.lineWrapping, ak.j.define({
            create: hF(kk, pk, SF),
            update(Fk, Bk) {
              const Rk = Bk.effects.some((kk => kk.is(ZF)));
              return Bk.docChanged || Bk.selection || Rk ? (TF(kk, SF, Bk.state.doc.toString() || " "), hF(kk, pk, SF)(Bk.state)) : Fk
            },
            provide: kk => ak.u.computeN([kk], (Fk => Fk.field(kk)))
          }), (0, ak.r)(qF(kk, SF)), (0, mk.g)(DF(Fk, kk, SF)), ak.l.fromClass(class {
            constructor(kk) {
              this.view = kk, this.searchPanel = null
            }
            update(kk) {
              const Fk = kk.view.dom.querySelector(".cm-search");
              if (Fk !== this.searchPanel) {
                if (this.searchPanel = Fk, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (kk => {
                  "Escape" === kk.key && (0, fk.d)(this.view), kk.stopPropagation()
                }))
              }
            }
          })];
        XF && !kF && bk.push(LF(Fk ? null !== Ik && void 0 !== Ik ? Ik : ik.h : WF.c, bF));
        const wk = yF.current;
        if (wk && !kF) {
          bk.push(... function(kk, Fk, Bk, Rk, tk) {
            let ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Xk = (0, Yk.v)(Bk),
              bk = uk.q.fromClass(class {
                constructor(kk) {
                  this.view = kk, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Uk.o.subscribe("codeCollab", (kk => {
                    kk.docKey === Xk && kk.type === Yk.f.Updates && (kk.updates ? this.applyUpdates(kk.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(kk) {
                  const Fk = JSON.parse(kk).map((kk => ({
                    clientID: kk.clientID,
                    changes: Hk.ChangeSet.fromJSON(kk.changes)
                  })));
                  Fk.length > 0 && (this.view.dispatch((0, Nk.j)(this.view.state, Fk)), tk && tk(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(kk) {
                  ak && (kk.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const kk = (0, Nk.n)(this.view.state);
                  if (this.pushing || !kk.length) return;
                  const Fk = Date.now() - this.lastPushTime;
                  if (Fk < rk) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), rk - Fk)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Gk);
                  const Bk = (0, Nk.f)(this.view.state),
                    tk = kk.map((kk => ({
                      clientID: kk.clientID,
                      changes: kk.changes.toJSON()
                    }))),
                    ak = JSON.stringify(tk);
                  ak.length <= Yk.g ? Mk.gameBridge.send("sendCodeCollab", {
                    WF: Yk.b.Push,
                    vF: Xk,
                    iF: Bk,
                    LF: ak
                  }) : (0, ck.postJsonWithMetricsCookiesAndJsonResponse)(`${Rk.gsUrl}/code/collab-push`, gk.s["collab-push"].toBuffer({
                    gameNameWithVariation: Rk.gameNameWithVariation,
                    lobbyName: Rk.lobbyName,
                    docKey: Xk,
                    version: Bk,
                    updates: ak
                  }), {
                    retries: 0
                  }).catch((kk => {
                    console.error("[CodeCollab] HTTP push failed", kk)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const kk = (0, Nk.f)(this.view.state);
                  (0, ck.postJsonWithMetricsCookiesAndJsonResponse)(`${Rk.gsUrl}/code/collab-pull`, gk.s["collab-pull"].toBuffer({
                    gameNameWithVariation: Rk.gameNameWithVariation,
                    lobbyName: Rk.lobbyName,
                    docKey: Xk,
                    fromVersion: kk
                  }), {
                    retries: 1
                  }).then((kk => {
                    this.destroyed || (kk.fullDoc ? Uk.o.Hf("codeCollabRejoin", {
                      docKey: Xk,
                      doc: kk.fullDoc,
                      version: kk.version
                    }) : this.applyUpdates(kk.updates))
                  })).catch((kk => {
                    console.error("[CodeCollab] Pull failed", kk)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const kk = Date.now();
                  if (kk - this.lastCursorSent < Tk) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Tk)));
                  this.lastCursorSent = kk;
                  const Fk = this.view.state.selection.main;
                  Mk.gameBridge.send("sendCodeCollab", {
                    WF: Yk.b.Cursor,
                    vF: Xk,
                    HF: Fk.anchor,
                    uF: Fk.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Uk.o.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Nk.b)({
              startVersion: kk,
              clientID: Fk
            }), bk]
          }(sF, VF, wk.docKey, wk.httpConfig, (kk => {
            var Fk;
            null === (Fk = AF.current) || void 0 === Fk || Fk.call(AF, kk)
          }), Jk));
          const kk = function(kk, Fk) {
            const Bk = (0, Yk.v)(kk);
            return {
              extensions: [xk],
              connect(kk) {
                if (Fk) {
                  const Bk = Fk.map((kk => qk.of({
                    playerId: kk.playerId,
                    playerName: kk.playerName,
                    colour: kk.colour,
                    anchor: kk.anchor,
                    head: kk.head,
                    lastMoved: Date.now()
                  })));
                  Bk.length > 0 && kk.dispatch({
                    effects: Bk
                  })
                }
                const Rk = Uk.o.subscribe("codeCollab", (Fk => {
                    if (Fk.docKey === Bk)
                      if (Fk.type === Yk.f.RemoteCursor) kk.dispatch({
                        effects: qk.of({
                          playerId: Fk.playerId,
                          playerName: Fk.playerName,
                          colour: Fk.colour,
                          anchor: Fk.anchor,
                          head: Fk.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Fk.type === Yk.f.Presence) {
                      const Bk = JSON.parse(Fk.peers),
                        Rk = new Set(Bk.map((kk => kk.playerId))),
                        tk = kk.state.field(xk),
                        ak = [];
                      for (const [kk] of tk.cursors) Rk.has(kk) || ak.push(Ck.of(kk));
                      ak.length > 0 && kk.dispatch({
                        effects: ak
                      })
                    }
                  })),
                  tk = setInterval((() => {
                    kk.dom.isConnected ? kk.dispatch({
                      effects: Zk.of(Date.now())
                    }) : clearInterval(tk)
                  }), hk);
                return () => {
                  Uk.o.unsubscribe(Rk), clearInterval(tk)
                }
              }
            }
          }(wk.docKey, wk.existingCursors);
          bk.push(...kk.extensions), iF.current = kk.connect
        } else iF.current = null;
        return bk
      }), [Fk, wF, pk, sF, VF, SF, Ik, kF, FF, Jk, XF, bF]);
      if (!wF || !jk && !kF) return (0, OF.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, OF.jsx)(Wk.b, {})
      });
      const MF = kF ? `plugin-${kF}-${null!==FF&&void 0!==FF?FF:"index.ts"}` : jk ? `collab-${jk.clientID}` : `local-${Fk}`;
      return (0, OF.jsx)(ak.p, {
        value: kF ? null !== RF && void 0 !== RF ? RF : "" : Bk,
        onChange: bk,
        extensions: uF,
        className: "CodeEditorContent",
        theme: Kk ? mF : "dark",
        editable: Jk && !kF,
        basicSetup: pF,
        onCreateEditor: kk => {
          var Fk;
          eF.current = kk, fF.current = null !== (Fk = null === jk || void 0 === jk ? void 0 : jk.clientID) && void 0 !== Fk ? Fk : null, HF(kk), vF.current && vF.current(), iF.current && (vF.current = iF.current(kk))
        }
      }, MF)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);