export const id = 292;
export const ids = [292];
export const modules = {
  41301: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => AF
    });
    var Xk = Ik(41309),
      Tk = Ik(41343),
      ik = Ik(41351),
      yk = Ik(58),
      lk = Ik(74),
      ak = Ik(41369),
      qk = Ik(41376),
      Lk = Ik(4761),
      tk = Ik(41383),
      Zk = Ik(1849),
      jk = Ik(41385),
      ek = Ik(41403),
      wk = Ik.n(ek),
      Hk = Ik(41354),
      Jk = Ik(41362),
      xk = Ik(1318),
      Pk = Ik(36882),
      Kk = Ik(1231),
      Qk = Ik(36899),
      sk = Ik(36759),
      Vk = Ik(1402),
      zk = Ik(628),
      Sk = Ik(1234),
      vk = Ik(41460),
      Ek = Ik(41315),
      Ok = Ik(41319),
      nk = Ik(1875),
      Gk = Ik(3702),
      pk = Ik(34),
      uk = Ik(1120);
    const bk = 1e4,
      Rk = 250,
      Uk = 250;
    var Ck = Ik(41335);
    const Nk = 50,
      ck = 100;
    const Wk = 2e3,
      fk = Ek.F.define(),
      Bk = Ek.F.define(),
      dk = Ek.F.define();
    class Yk extends Ok.o {
      constructor(kk, Fk, Ik) {
        super(), this.colour = kk, this.playerName = Fk, this.showName = Ik
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

    function Ak(kk, Fk) {
      const Ik = [],
        Xk = [];
      for (const [, yk] of kk) {
        const kk = Fk - yk.lastMoved < Wk;
        if (Ik.push({
            pos: yk.head,
            decoration: Ok.b.widget({
              widget: new Yk(yk.colour, yk.playerName, kk),
              side: 1
            })
          }), yk.anchor !== yk.head) {
          const kk = Math.min(yk.anchor, yk.head),
            Fk = Math.max(yk.anchor, yk.head);
          Xk.push({
            from: kk,
            to: Fk,
            decoration: Ok.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${yk.colour}33`
              }
            })
          })
        }
      }
      const Tk = new Ek.y,
        ik = [];
      for (const yk of Ik) ik.push({
        bias: 1,
        deco: yk.decoration,
        from: yk.pos,
        to: yk.pos
      });
      for (const yk of Xk) ik.push({
        bias: 0,
        deco: yk.decoration,
        from: yk.from,
        to: yk.to
      });
      ik.sort(((kk, Fk) => kk.from - Fk.from || kk.deco.startSide - Fk.deco.startSide || kk.bias - Fk.bias));
      for (const yk of ik) Tk.add(yk.from, yk.to, yk.deco);
      return Tk.finish()
    }
    const gk = Ek.I.define({
      create: () => ({
        cursors: new Map,
        wk: Ok.b.none
      }),
      update(kk, Fk) {
        let Ik = kk.cursors,
          Xk = !1;
        if (Fk.docChanged) {
          const kk = new Map;
          for (const [Xk, Tk] of Ik) kk.set(Xk, {
            ...Tk,
            anchor: Fk.changes.mapPos(Tk.anchor, 1),
            head: Fk.changes.mapPos(Tk.head, 1)
          });
          Ik = kk, Xk = !0
        }
        for (const Tk of Fk.effects)
          if (Tk.is(fk)) {
            if (!Number.isInteger(Tk.value.anchor) || !Number.isInteger(Tk.value.head)) {
              console.warn(`Code Editor: ignored player ${Tk.value.playerId}'s cursor at ${Tk.value.anchor}-${Tk.value.head}`);
              continue
            }
            const ik = Fk.state.doc.length,
              yk = {
                ...Tk.value,
                anchor: Math.min(Tk.value.anchor, ik),
                head: Math.min(Tk.value.head, ik)
              };
            Ik === kk.cursors && (Ik = new Map(Ik)), Ik.set(yk.playerId, yk), Xk = !0
          } else Tk.is(Bk) ? Ik.has(Tk.value) && (Ik === kk.cursors && (Ik = new Map(Ik)), Ik.delete(Tk.value), Xk = !0) : Tk.is(dk) && (Xk = !0);
        return Xk ? {
          cursors: Ik,
          wk: Ak(Ik, Date.now())
        } : kk
      },
      provide: kk => Ok.i.wk.from(kk, (kk => kk.wk))
    });
    const mk = Ek.F.define(),
      hk = Ok.b.mark({
        class: "CodeInsertFlash"
      }),
      rk = Ek.I.define({
        create: () => Ok.b.none,
        update(kk, Fk) {
          let Ik = kk.map(Fk.changes);
          for (const Xk of Fk.effects) Xk.is(mk) && (Ik = Xk.value ? Ok.b.set(hk.range(Xk.value.from, Xk.value.to)) : Ok.b.none);
          return Ik
        },
        provide: kk => Ok.i.wk.from(kk)
      }),
      Dk = Ek.I.define({
        create: () => !1,
        update: (kk, Fk) => kk || void 0 !== Fk.annotation(Ek.L.userEvent) && !Fk.annotation(Ek.L.remote)
      }),
      Mk = [rk, Dk];

    function kF(kk) {
      return kk.field(Dk)
    }
    const FF = 3e4;

    function IF(kk, Fk) {
      const Ik = (0, yk.useRef)(null);
      (0, yk.useEffect)((() => {
        var kk;
        (null === (kk = Ik.current) || void 0 === kk ? void 0 : kk.path) !== Fk && (Ik.current = null)
      }), [Fk]);
      const Xk = kk => {
        var Xk;
        const Tk = Ik.current;
        if (null === kk || void 0 === kk || !kk.dom.isConnected || !Tk || Tk.path !== Fk) return;
        Ik.current = null;
        const {
          Gj: yk
        } = Tk;
        if (yk && null !== yk.text && performance.now() - yk.at < FF) {
          const Fk = function(kk, Fk) {
            if (kk === Fk) return null;
            const Ik = Math.min(kk.length, Fk.length);
            let Xk = 0;
            for (; Xk < Ik && kk[Xk] === Fk[Xk];) Xk++;
            let Tk = 0;
            for (; Tk < Ik - Xk && kk[kk.length - 1 - Tk] === Fk[Fk.length - 1 - Tk];) Tk++;
            return {
              from: Xk,
              to: kk.length - Tk,
              insert: Fk.slice(Xk, Fk.length - Tk)
            }
          }(kk.state.doc.toString(), yk.text);
          null !== Fk && kk.dispatch({
            changes: Fk,
            userEvent: yk.placed ? "input" : void 0
          })
        }
        const {
          doc: lk
        } = kk.state, ak = lk.line(Math.min(Math.max(Tk.line, 1), lk.lines)), qk = ak.from + Math.min(null !== (Xk = Tk.column) && void 0 !== Xk ? Xk : 0, ak.length);
        kk.dispatch({
          selection: {
            anchor: qk
          },
          effects: ik.b.scrollIntoView(qk, {
            y: "center"
          }),
          userEvent: null !== yk && void 0 !== yk && yk.placed ? "select" : void 0
        }), !1 !== (null === yk || void 0 === yk ? void 0 : yk.focused) && kk.focus()
      };
      return (0, Vk.d)("CodeEditorGoToLine", (Fk => {
        Ik.current = Fk, Xk(kk.current)
      })), (0, Vk.d)("CodeEditorKeepEdits", (() => {
        const Xk = kk.current;
        if (null === Xk || !Xk.dom.isConnected || null === Fk) return;
        const {
          doc: Tk,
          selection: ik
        } = Xk.state, {
          head: yk
        } = ik.main, lk = Tk.lineAt(yk), ak = {
          text: (0, vk.k)(Xk.state).length > 0 ? Tk.toString() : null,
          at: performance.now(),
          focused: Xk.hasFocus,
          placed: kF(Xk.state)
        };
        Ik.current = {
          path: Fk,
          line: lk.number,
          column: yk - lk.from,
          Gj: ak
        }
      })), kk => {
        var Tk;
        const ik = Ik.current;
        !1 === (null === ik || void 0 === ik || null === (Tk = ik.Gj) || void 0 === Tk ? void 0 : Tk.focused) && ik.path === Fk || kk.focus(), Xk(kk)
      }
    }
    var XF = Ik(4335),
      TF = Ik(1179);

    function iF(kk, Fk) {
      const {
        t: Ik
      } = (0, TF.y)();
      (0, Vk.d)("CodeEditorInsertText", (Xk => {
        let {
          text: Tk,
          focus: ik
        } = Xk;
        const yk = kk.current,
          lk = null !== yk && void 0 !== yk && yk.dom.isConnected ? function(kk, Fk) {
            if (!kF(kk)) return null;
            const {
              from: Ik,
              to: Xk
            } = kk.selection.main, Tk = Ik + Fk.length;
            return {
              changes: {
                from: Ik,
                to: Xk,
                insert: Fk
              },
              selection: {
                anchor: Tk
              },
              effects: [Ok.i.scrollIntoView(Tk, {
                y: "center"
              }), mk.of({
                from: Ik,
                to: Tk
              })],
              userEvent: "input"
            }
          }(yk.state, Tk) : null;
        null !== yk && null !== lk ? (yk.dispatch(lk), ik && yk.focus(), setTimeout((() => {
          yk.dom.isConnected && yk.dispatch({
            effects: mk.of(null)
          })
        }), 1500)) : (0, XF.b)(Tk).then((() => {
          Fk({
            message: Ik("codeEditorWorld:pickCopied", {
              coords: Tk
            }),
            type: "success"
          })
        }), (kk => {
          console.error("Pick could not copy the coordinates", kk), Fk({
            message: Ik("codeEditorWorld:pickPlaceCursor", {
              coords: Tk
            }),
            type: "warning"
          })
        }))
      }))
    }
    var yF = Ik(41341);
    const lF = "#e45649",
      aF = "#383a42",
      qF = "#696c77",
      LF = "#986801",
      tF = "#e5e5e6",
      ZF = "#fafafa",
      jF = "#eaeaeb",
      eF = "#526fff",
      wF = Ok.i.theme({
        "&": {
          color: aF,
          backgroundColor: ZF
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
          color: aF
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
          backgroundColor: ZF,
          color: qF,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: tF
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: jF
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: jF,
          borderBottomColor: jF
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: tF,
            color: aF
          }
        }
      }, {
        dark: !1
      }),
      HF = Ck.c.define([{
        tag: yF.k.keyword,
        color: "#a626a4"
      }, {
        tag: [yF.k.name, yF.k.deleted, yF.k.character, yF.k.propertyName, yF.k.macroName],
        color: lF
      }, {
        tag: [yF.k.function(yF.k.variableName), yF.k.labelName],
        color: "#4078f2"
      }, {
        tag: [yF.k.color, yF.k.constant(yF.k.name), yF.k.standard(yF.k.name)],
        color: LF
      }, {
        tag: [yF.k.definition(yF.k.name), yF.k.separator],
        color: aF
      }, {
        tag: [yF.k.typeName, yF.k.className, yF.k.number, yF.k.changed, yF.k.annotation, yF.k.modifier, yF.k.self, yF.k.namespace],
        color: "#c18401"
      }, {
        tag: [yF.k.operator, yF.k.operatorKeyword, yF.k.url, yF.k.escape, yF.k.regexp, yF.k.link, yF.k.special(yF.k.string)],
        color: "#0184bc"
      }, {
        tag: [yF.k.meta, yF.k.comment],
        color: qF
      }, {
        tag: yF.k.strong,
        fontWeight: "bold"
      }, {
        tag: yF.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: yF.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: yF.k.link,
        color: qF,
        textDecoration: "underline"
      }, {
        tag: yF.k.heading,
        fontWeight: "bold",
        color: lF
      }, {
        tag: [yF.k.atom, yF.k.bool, yF.k.special(yF.k.variableName)],
        color: LF
      }, {
        tag: [yF.k.processingInstruction, yF.k.string, yF.k.inserted],
        color: "#50a14f"
      }, {
        tag: yF.k.invalid,
        color: "#000000"
      }]),
      JF = [wF, (0, Ck.lb)(HF)];
    var xF = Ik(36946),
      PF = Ik(41468);
    const KF = ik.g.define(),
      QF = ik.h.define({
        create: () => !1,
        update(kk, Fk) {
          for (const Ik of Fk.effects) Ik.is(KF) && (kk = Ik.value);
          return kk
        }
      }),
      sF = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function VF(kk, Fk) {
      return [QF, ik.i.fromClass(class {
        constructor(kk) {
          this.view = kk, this.onDown = kk => {
            const Fk = kk.target instanceof Element && null !== kk.target.closest(".cm-tooltip");
            0 !== kk.button || Fk || this.view.state.field(QF) || this.view.dispatch({
              effects: KF.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(QF) && this.view.dispatch({
              effects: KF.of(!1)
            })
          }, kk.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), ik.o.compute(["selection", QF], (Ik => function(kk, Fk, Ik) {
        const Xk = kk.selection.main;
        return Xk.empty || kk.field(QF) || kk.sliceDoc(Xk.from, Xk.to).trim().length < 2 ? null : {
          pos: Xk.from,
          above: !0,
          create: kk => {
            const Xk = document.createElement("div");
            Xk.className = "CodeSelectionActions", Xk.setAttribute("role", "toolbar"), Xk.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Tk,
                label: ik
              }
              of sF) {
              if (!Ik && "explain" !== Tk) continue;
              const yk = document.createElement("button");
              yk.type = "button", yk.textContent = ik, "change" !== Tk && (yk.title = PF.b, yk.dataset.asksAi = "true"), yk.addEventListener("mousedown", (kk => {
                kk.preventDefault()
              })), yk.addEventListener("click", (() => {
                const Ik = kk.state.selection.main;
                if (Ik.empty) return;
                const Xk = {
                  action: Tk,
                  path: Fk,
                  fromLine: kk.state.doc.lineAt(Ik.from).number,
                  toLine: kk.state.doc.lineAt(Ik.to > Ik.from && kk.state.doc.lineAt(Ik.to).from === Ik.to ? Ik.to - 1 : Ik.to).number,
                  text: kk.state.sliceDoc(Ik.from, Ik.to)
                };
                pk.g.GL("WorldCodeAiSelection", Xk), kk.dispatch({
                  selection: {
                    anchor: Ik.to
                  }
                })
              })), Xk.appendChild(yk)
            }
            return {
              dom: Xk
            }
          }
        }
      }(Ik, kk, Fk)))]
    }
    var zF = Ik(1096);
    const SF = new Set(["(", "{", "[", "<"]),
      oF = new Set([")", "}", "]", ">"]),
      vF = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function EF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Ik(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = [];
        for (const Tk of kk) {
          let kk;
          kk = "punctuation" === Tk.kind ? vF.text : "parameterName" === Tk.kind ? vF.parameterName : Fk, Xk.push({
            str: Tk.text,
            style: {
              color: kk,
              opacity: Ik ? .5 : void 0
            }
          })
        }
        return Xk
      }
      const Xk = [];
      if (Xk.push(...Ik(kk.prefixDisplayParts, vF.text)), kk.parameters.length > 0) {
        Xk.push("\n");
        for (let Tk = 0; Tk < kk.parameters.length; Tk++) {
          const ik = kk.parameters[Tk];
          Xk.push("\t"), Xk.push(...Ik(ik.displayParts, vF.parameter, null !== Fk && Tk !== Fk)), Xk.push("\n")
        }
      }
      return Xk.push(...Ik(kk.suffixDisplayParts, vF.suffix)), kk.documentation && (Xk.push("\n\n"), Xk.push(...Ik(kk.documentation, vF.docs))), Xk
    }
    var OF = function(kk) {
      return kk[kk.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", kk[kk.DuplicateIdentifier = 2300] = "DuplicateIdentifier", kk
    }(OF || {});
    const nF = new Set([OF.DuplicateIdentifier]),
      GF = new Set([OF.VariableDefinedElsewhere]),
      pF = new Set([]),
      uF = "/index.js";

    function bF(kk) {
      return "/" + kk
    }

    function RF(kk, Fk, Ik) {
      kk.getSourceFile(Fk) && kk.deleteFile(Fk), kk.createFile(Fk, Ik)
    }

    function UF(kk) {
      return !!kk && ((0, Qk.r)(kk) || (0, Qk.q)(kk))
    }

    function CF(kk, Fk, Ik) {
      return () => {
        let Xk = [...Fk.languageService.getSemanticDiagnostics(Ik), ...Fk.languageService.getSyntacticDiagnostics(Ik)];
        return Xk = Xk.filter((kk => !(0, zk.Q)(kk.start) && !(0, zk.Q)(kk.length) && !nF.has(kk.code))), kk || (Xk = Xk.filter((kk => !GF.has(kk.code)))), Xk.map((kk => ({
          from: kk.start,
          to: kk.start + kk.length,
          message: "string" === typeof kk.messageText ? kk.messageText : kk.messageText.messageText,
          severity: pF.has(kk.code) ? "warning" : "error"
        })))
      }
    }

    function NF(kk, Fk) {
      return Ik => {
        var Xk, Tk;
        const ik = kk.languageService.getCompletionsAtPosition(Fk, Ik.pos, {});
        if (!ik) return {
          from: Ik.pos,
          options: []
        };
        let yk = null !== (Xk = null === (Tk = ik.optionalReplacementSpan) || void 0 === Tk ? void 0 : Tk.start) && void 0 !== Xk ? Xk : Ik.pos;
        if (!ik.optionalReplacementSpan) {
          const kk = Ik.state.doc.sliceString(0, Ik.pos);
          for (; yk > 0 && /[\w$]/.test(kk[yk - 1]);) yk--
        }
        return ik.entries = ik.entries.filter((kk => kk.kind !== wk().ScriptElementKind.warning)), {
          from: yk,
          options: ik.entries.map((Xk => {
            var Tk, ik, lk, ak;
            const qk = kk.languageService.getCompletionEntryDetails(Fk, Ik.pos, Xk.name, {}, Xk.source, {}, Xk.data),
              Lk = null !== (Tk = null === (ik = Xk.replacementSpan) || void 0 === ik ? void 0 : ik.start) && void 0 !== Tk ? Tk : yk,
              tk = Xk.replacementSpan ? Xk.replacementSpan.start + Xk.replacementSpan.length : Ik.pos,
              Zk = null !== (lk = Xk.insertText) && void 0 !== lk ? lk : Xk.name;
            return {
              label: Xk.name,
              detail: null === qk || void 0 === qk ? void 0 : qk.displayParts.map((kk => kk.text)).join(""),
              info: null === qk || void 0 === qk || null === (ak = qk.documentation) || void 0 === ak ? void 0 : ak.map((kk => kk.text)).join(""),
              apply: kk => {
                kk.dispatch({
                  changes: {
                    from: Lk,
                    to: tk,
                    insert: Zk
                  },
                  selection: {
                    anchor: Lk + Zk.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function cF(kk) {
      return Fk => {
        const Ik = document.createElement("div");
        Ik.className = "CodeEditorTooltip";
        let Xk = !1;
        return queueMicrotask((() => {
          Xk || (lk.render((0, zF.jsx)(Zk.c, {
            text: kk
          }), Ik), Fk.requestMeasure())
        })), {
          dom: Ik,
          destroy() {
            Xk = !0, queueMicrotask((() => {
              lk.unmountComponentAtNode(Ik)
            }))
          }
        }
      }
    }

    function WF(kk, Fk, Ik) {
      return Xk => {
        var Tk;
        if (!Fk) return [];
        const ik = null === (Tk = Xk.selection.nZ[0]) || void 0 === Tk ? void 0 : Tk.head;
        if (void 0 === ik) return [];
        const yk = kk.languageService.getSignatureHelpItems(Ik, ik, {});
        if (!yk || !yk.items.length) return [];
        const lk = yk.applicableSpan.start - yk.items[0].prefixDisplayParts.map((kk => kk.text)).join("").length,
          ak = yk.applicableSpan.start,
          qk = Xk.doc.lineAt(ik),
          Lk = qk.from,
          tk = Math.min(qk.to, ik);
        let Zk, jk;
        return lk < Lk ? (Zk = Lk, jk = tk) : (Zk = lk, jk = ak), [{
          pos: Zk,
          end: jk,
          above: !1,
          create: cF(EF(yk.items[0], yk.argumentIndex))
        }]
      }
    }

    function fF(kk, Fk) {
      return (Ik, Xk, Tk) => {
        const ik = kk.languageService.getQuickInfoAtPosition(Fk, Xk);
        if (!ik) return [];
        const yk = ik.textSpan.start,
          lk = ik.textSpan.start + ik.textSpan.length;
        if (Xk < yk || Xk >= lk) return [];
        if (ik.kind === wk().ScriptElementKind.memberFunctionElement || ik.kind === wk().ScriptElementKind.variableElement && "declare" === ik.kindModifiers) {
          const kk = ik.displayParts.findIndex((kk => "space" === kk.kind)); - 1 !== kk && (ik.displayParts = ik.displayParts.slice(kk));
          const Fk = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Ik = ik.displayParts.findIndex((kk => "punctuation" === kk.kind && "(" === kk.text)); - 1 !== Ik && (Fk.prefixDisplayParts = ik.displayParts.slice(0, Ik + 1), ik.displayParts = ik.displayParts.slice(Ik + 1));
          const Xk = ik.displayParts.findLastIndex((kk => "punctuation" === kk.kind && ")" === kk.text)); - 1 !== Xk && (Fk.suffixDisplayParts = ik.displayParts.slice(Xk), ik.displayParts = ik.displayParts.slice(0, Xk));
          let Tk = 0,
            ak = [];
          for (const yk of ik.displayParts)
            if (SF.has(yk.text) ? Tk++ : oF.has(yk.text) && Tk--, "lineBreak" !== yk.kind) {
              if ("space" === yk.kind) {
                if (0 === ak.length) continue;
                ak.push({
                  kind: "space",
                  text: " "
                })
              } else ak.push(yk);
              0 === Tk && "," === yk.text && (Fk.parameters.push({
                displayParts: ak
              }), ak = [])
            } return ak.length > 0 && Fk.parameters.push({
            displayParts: ak
          }), Fk.documentation = ik.documentation, [{
            pos: yk,
            end: lk,
            above: !0,
            create: cF(EF(Fk))
          }]
        }
        const ak = [];
        for (const kk of ik.displayParts) ak.push({
          str: kk.text,
          style: {
            color: vF.text
          }
        });
        if (ik.documentation) {
          ak.push("\n\n");
          for (const kk of ik.documentation) ak.push({
            str: kk.text,
            style: {
              color: vF.docs
            }
          })
        }
        return [{
          pos: yk,
          end: lk,
          above: !0,
          create: cF(ak)
        }]
      }
    }
    const BF = {
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
      semicolons: wk().SemicolonPreference.Insert
    };
    const dF = ik.g.define(),
      YF = {
        lineNumbers: !0,
        tabSize: 4
      };

    function AF(kk) {
      let {
        isLobbyCode: Fk,
        code: Ik,
        onChange: lk,
        canEditCode: Zk,
        setTemporaryMessage: ek,
        close: zk,
        showTooltips: Yk,
        lightMode: Ak,
        collabState: mk,
        onRemoteDocChange: hk,
        files: rk,
        activePath: Dk,
        pluginName: kF,
        pluginFile: FF,
        pluginSource: XF,
        setActiveDocReplacer: TF,
        showAiHints: yF,
        canAiChangeCode: lF = Zk
      } = kk;
      const [aF, qF] = (0, yk.useState)(null), LF = null === mk || void 0 === mk ? void 0 : mk.version, tF = null === mk || void 0 === mk ? void 0 : mk.clientID, ZF = (0, yk.useRef)({
        isLobbyCode: Fk,
        files: rk,
        code: Ik,
        activePath: Dk
      }), jF = (0, yk.useRef)(hk);
      jF.current = hk;
      const eF = (0, yk.useRef)(null),
        wF = (0, yk.useRef)(mk);
      wF.current = mk;
      const HF = (0, yk.useRef)(null),
        PF = (0, yk.useRef)(null),
        KF = (0, yk.useRef)(null),
        QF = (0, yk.useRef)(zk);
      QF.current = zk;
      const sF = (0, yk.useRef)(Ik);
      sF.current = Ik;
      const SF = (0, yk.useRef)(XF);
      SF.current = XF;
      const oF = function(kk, Fk, Ik, Xk) {
        return Ik ? `/plugin-preview/${Ik}/${null!==Xk&&void 0!==Xk?Xk:"index.ts"}` : kk ? bF(null !== Fk && void 0 !== Fk ? Fk : Kk.g) : uF
      }(Fk, Dk, kF, FF);
      (0, yk.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: kk,
            files: Fk,
            code: Ik,
            activePath: Xk
          } = ZF.current, Tk = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: wk().ModuleKind.ESNext,
            moduleResolution: wk().ModuleResolutionKind.Bundler,
            target: wk().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Pk.e).map((kk => [kk.specifier, [kk.typesVfsPath]])))
            }
          }, ik = new Map, yk = [];
          if (kk) {
            const kk = null !== Fk && void 0 !== Fk ? Fk : {
              [Kk.g]: Ik || "\n"
            };
            for (const [Fk, Ik] of Object.entries(kk)) {
              const kk = bF(Fk);
              ik.set(kk, Ik || "\n"), yk.push(kk)
            }
            const Tk = bF(null !== Xk && void 0 !== Xk ? Xk : Kk.g);
            ik.has(Tk) ? ik.set(Tk, Ik || "\n") : (ik.set(Tk, Ik || "\n"), yk.push(Tk)), ik.set("/node_modules/@bloxd/index.d.ts", Lk.default), yk.push("/node_modules/@bloxd/index.d.ts");
            for (const Fk of Object.values(Pk.e)) {
              ik.set(Fk.typesVfsPath, Fk.types), yk.push(Fk.typesVfsPath);
              for (const [kk, Ik] of Object.entries(Fk.files)) {
                const Xk = `/plugin-preview/${Fk.name}/${kk}`;
                ik.set(Xk, Ik || "\n"), yk.push(Xk)
              }
            }
          } else ik.set(uF, Ik || "\n"), yk.push(uF);
          ik.set("/globals.d.ts", kk ? qk.c : ak.d), ik.set("/lib.d.ts", tk.e), yk.push("/globals.d.ts", "/lib.d.ts");
          const lk = jk.c(ik),
            Zk = jk.e(lk, yk, wk(), Tk);
          qF({
            cj: Zk,
            fsMap: ik
          })
        }()
      }), []), (0, yk.useEffect)((() => {
        var kk, Xk;
        if (!aF || !Fk) return;
        const {
          cj: Tk,
          fsMap: ik
        } = aF;
        if (function(kk, Fk, Ik) {
            const Xk = new Set;
            for (const [Tk, ik] of Object.entries(Ik)) {
              const Ik = bF(Tk);
              Xk.add(Ik);
              const yk = ik || "\n";
              Fk.get(Ik) !== yk && (Fk.set(Ik, yk), RF(kk, Ik, yk))
            }
            for (const Tk of [...Fk.keys()]) "/globals.d.ts" === Tk || "/lib.d.ts" === Tk || Tk.startsWith("/node_modules/") || Tk.startsWith("/plugin-preview/") || Xk.has(Tk) || (Fk.delete(Tk), kk.getSourceFile(Tk) && kk.deleteFile(Tk))
          }(Tk, ik, null !== rk && void 0 !== rk ? rk : {
            [Kk.g]: Ik || "\n"
          }), kF) return void RF(Tk, oF, XF || "\n");
        const yk = null !== (kk = null === (Xk = eF.current) || void 0 === Xk ? void 0 : Xk.state.doc.toString()) && void 0 !== kk ? kk : Ik;
        RF(Tk, oF, yk || "\n")
      }), [rk, Dk, aF, kF, XF, oF, Ik, Fk]), (0, yk.useEffect)((() => {
        if (!aF) return;
        const {
          cj: kk
        } = aF;
        RF(kk, oF, (kF ? XF : Ik) || "\n")
      }), [Ik, kF, XF, oF, aF]), (0, yk.useEffect)((() => () => {
        PF.current && (PF.current(), PF.current = null)
      }), []), (0, yk.useEffect)((() => (TF(((kk, Fk) => {
        if (kF) return !1;
        const Ik = eF.current,
          Xk = wF.current,
          Tk = Xk ? (0, Qk.z)(Xk.docKey) : null;
        if (!Ik || !Xk || HF.current !== Xk.clientID || kk !== Tk) return !1;
        const ik = Ik.state.doc.toString();
        return ik !== Fk && Ik.dispatch({
          changes: {
            from: 0,
            to: ik.length,
            insert: Fk
          }
        }), !0
      })), () => {
        eF.current = null, HF.current = null, TF(null)
      })), [TF, kF]);
      const vF = Fk ? kF ? null : null !== Dk && void 0 !== Dk ? Dk : Kk.g : xF.b,
        EF = IF(eF, vF);
      iF(eF, ek), (0, Vk.d)("FormatCode", (() => {
        if (!aF || !eF.current || kF) return;
        const {
          cj: kk,
          fsMap: Ik
        } = aF, Xk = kk.getSourceFile(oF).getFullText();
        let Tk = 0;
        if (Fk && rk)
          for (const [Fk, lk] of Object.entries(rk)) Fk !== (null !== Dk && void 0 !== Dk ? Dk : Kk.g) && (Tk += lk.length);
        const ik = function(kk, Fk, Ik, Xk, Tk) {
          const ik = kk.languageService.getFormattingEditsForDocument(Xk, BF);
          if (!ik.length) return Sk.b.error("Code is already formatted.");
          ik.sort(((kk, Fk) => Fk.span.start - kk.span.start));
          let yk = kk.getSourceFile(Xk).getFullText();
          for (const lk of ik) yk = yk.slice(0, lk.span.start) + lk.Yy + yk.slice(lk.span.start + lk.span.length);
          return yk !== (Ik ? (0, sk.n)(yk, Tk) : (0, sk.k)(yk)) ? Sk.b.error("Formatting the code will go beyond the character limit.") : Sk.b.value(yk)
        }(kk, 0, Fk, oF, Tk);
        if (ik.isError()) return void ek({
          message: ik.asError().message,
          type: "warning"
        });
        const yk = ik.getValue();
        yk && (eF.current.dispatch({
          changes: {
            from: 0,
            to: Xk.length,
            insert: yk
          },
          selection: {
            anchor: yk.length
          }
        }), RF(kk, oF, yk), lk(yk))
      }));
      const OF = (0, yk.useMemo)((() => {
        if (!aF) return [];
        const {
          cj: kk,
          fsMap: Ik
        } = aF;
        ! function(kk, Fk, Ik, Xk) {
          if (kk.getSourceFile(Ik)) return;
          const Tk = Xk || "\n";
          Fk.set(Ik, Tk), kk.createFile(Ik, Tk)
        }(kk, Ik, oF, (kF ? SF.current : sF.current) || "\n");
        const yk = Fk && UF(kF ? null !== FF && void 0 !== FF ? FF : "index.ts" : Dk),
          lk = [(0, Tk.e)({
            jsx: !1,
            typescript: yk
          }), ik.d.highest(ik.b.domEventHandlers({
            keydown: kk => "Escape" === kk.key ? (QF.current(), kk.stopPropagation(), !0) : (kk.stopPropagation(), !1)
          })), (0, Xk.c)({
            override: [NF(kk, oF)]
          }), Ok.l.fromClass(class {
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
                (0, Ck.pb)(this.view.state, kk) || (0, Ck.U)(this.view, kk, Nk) || this.scheduleParse()
              }), ck))
            }
          }), ...Mk, ik.b.lineWrapping, ik.h.define({
            create: WF(kk, Yk, oF),
            update(Fk, Ik) {
              const Xk = Ik.effects.some((kk => kk.is(dF)));
              return Ik.docChanged || Ik.selection || Xk ? (RF(kk, oF, Ik.state.doc.toString() || " "), WF(kk, Yk, oF)(Ik.state)) : Fk
            },
            provide: kk => ik.o.computeN([kk], (Fk => Fk.field(kk)))
          }), (0, ik.m)(fF(kk, oF)), (0, Jk.h)(CF(Fk, kk, oF)), ik.i.fromClass(class {
            constructor(kk) {
              this.view = kk, this.searchPanel = null
            }
            update(kk) {
              const Fk = kk.view.dom.querySelector(".cm-search");
              if (Fk !== this.searchPanel) {
                if (this.searchPanel = Fk, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (kk => {
                  "Escape" === kk.key && (0, Hk.d)(this.view), kk.stopPropagation()
                }))
              }
            }
          })];
        yF && !kF && lk.push(VF(Fk ? null !== Dk && void 0 !== Dk ? Dk : Kk.g : xF.b, lF));
        const ak = wF.current;
        if (ak && !kF) {
          lk.push(... function(kk, Fk, Ik, Xk, Tk) {
            let ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const yk = (0, Qk.z)(Ik),
              lk = Ok.l.fromClass(class {
                constructor(kk) {
                  this.view = kk, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = pk.g.subscribe("codeCollab", (kk => {
                    kk.docKey === yk && kk.type === Qk.i.Updates && (kk.updates ? this.applyUpdates(kk.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(kk) {
                  const Fk = JSON.parse(kk).map((kk => ({
                    clientID: kk.clientID,
                    changes: Ek.ChangeSet.fromJSON(kk.changes)
                  })));
                  Fk.length > 0 && (this.view.dispatch((0, vk.h)(this.view.state, Fk)), Tk && Tk(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(kk) {
                  ik && (kk.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const kk = (0, vk.k)(this.view.state);
                  if (this.pushing || !kk.length) return;
                  const Fk = Date.now() - this.lastPushTime;
                  if (Fk < Uk) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Uk - Fk)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), bk);
                  const Ik = (0, vk.d)(this.view.state),
                    Tk = kk.map((kk => ({
                      clientID: kk.clientID,
                      changes: kk.changes.toJSON()
                    }))),
                    ik = JSON.stringify(Tk);
                  ik.length <= Qk.l ? nk.gameBridge.send("sendCodeCollab", {
                    Wi: Qk.e.Push,
                    Bi: yk,
                    Yi: Ik,
                    mi: ik
                  }) : (0, uk.postJsonWithMetricsCookiesAndJsonResponse)(`${Xk.gsUrl}/code/collab-push`, Gk.n["collab-push"].toBuffer({
                    gameNameWithVariation: Xk.gameNameWithVariation,
                    lobbyName: Xk.lobbyName,
                    docKey: yk,
                    version: Ik,
                    updates: ik
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
                  const kk = (0, vk.d)(this.view.state);
                  (0, uk.postJsonWithMetricsCookiesAndJsonResponse)(`${Xk.gsUrl}/code/collab-pull`, Gk.n["collab-pull"].toBuffer({
                    gameNameWithVariation: Xk.gameNameWithVariation,
                    lobbyName: Xk.lobbyName,
                    docKey: yk,
                    fromVersion: kk
                  }), {
                    retries: 1
                  }).then((kk => {
                    this.destroyed || (kk.fullDoc ? pk.g.GL("codeCollabRejoin", {
                      docKey: yk,
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
                  if (kk - this.lastCursorSent < Rk) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Rk)));
                  this.lastCursorSent = kk;
                  const Fk = this.view.state.selection.main;
                  nk.gameBridge.send("sendCodeCollab", {
                    Wi: Qk.e.Cursor,
                    Bi: yk,
                    ky: Fk.anchor,
                    Fy: Fk.head
                  })
                }
                destroy() {
                  this.destroyed = !0, pk.g.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, vk.b)({
              startVersion: kk,
              clientID: Fk
            }), lk]
          }(LF, tF, ak.docKey, ak.httpConfig, (kk => {
            var Fk;
            null === (Fk = jF.current) || void 0 === Fk || Fk.call(jF, kk)
          }), Zk));
          const kk = function(kk, Fk) {
            const Ik = (0, Qk.z)(kk);
            return {
              extensions: [gk],
              connect(kk) {
                if (Fk) {
                  const Ik = Fk.map((kk => fk.of({
                    playerId: kk.playerId,
                    playerName: kk.playerName,
                    colour: kk.colour,
                    anchor: kk.anchor,
                    head: kk.head,
                    lastMoved: Date.now()
                  })));
                  Ik.length > 0 && kk.dispatch({
                    effects: Ik
                  })
                }
                const Xk = pk.g.subscribe("codeCollab", (Fk => {
                    if (Fk.docKey === Ik)
                      if (Fk.type === Qk.i.RemoteCursor) kk.dispatch({
                        effects: fk.of({
                          playerId: Fk.playerId,
                          playerName: Fk.playerName,
                          colour: Fk.colour,
                          anchor: Fk.anchor,
                          head: Fk.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (Fk.type === Qk.i.Presence) {
                      const Ik = JSON.parse(Fk.peers),
                        Xk = new Set(Ik.map((kk => kk.playerId))),
                        Tk = kk.state.field(gk),
                        ik = [];
                      for (const [kk] of Tk.cursors) Xk.has(kk) || ik.push(Bk.of(kk));
                      ik.length > 0 && kk.dispatch({
                        effects: ik
                      })
                    }
                  })),
                  Tk = setInterval((() => {
                    kk.dom.isConnected ? kk.dispatch({
                      effects: dk.of(Date.now())
                    }) : clearInterval(Tk)
                  }), Wk);
                return () => {
                  pk.g.unsubscribe(Xk), clearInterval(Tk)
                }
              }
            }
          }(ak.docKey, ak.existingCursors);
          lk.push(...kk.extensions), KF.current = kk.connect
        } else KF.current = null;
        return lk
      }), [Fk, aF, Yk, LF, tF, oF, Dk, kF, FF, Zk, yF, lF]);
      if (!aF || !mk && !kF) return (0, zF.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, zF.jsx)(xk.c, {})
      });
      const nF = kF ? `plugin-${kF}-${null!==FF&&void 0!==FF?FF:"index.ts"}` : mk ? `collab-${mk.clientID}` : `local-${Fk}`;
      return (0, zF.jsx)(ik.k, {
        value: kF ? null !== XF && void 0 !== XF ? XF : "" : Ik,
        onChange: lk,
        extensions: OF,
        className: "CodeEditorContent",
        theme: Ak ? JF : "dark",
        editable: Zk && !kF,
        basicSetup: YF,
        onCreateEditor: kk => {
          var Fk;
          eF.current = kk, HF.current = null !== (Fk = null === mk || void 0 === mk ? void 0 : mk.clientID) && void 0 !== Fk ? Fk : null, EF(kk), PF.current && PF.current(), KF.current && (PF.current = KF.current(kk))
        }
      }, nF)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);