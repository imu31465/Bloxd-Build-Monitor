export const id = 291;
export const ids = [291];
export const modules = {
  40865: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Ze
    });
    var Dk = ik(40871),
      fk = ik(40919),
      Sk = ik(40924),
      bk = ik(60),
      rk = ik(75),
      Pk = ik(40936),
      mk = ik(40945),
      Mk = ik(4707),
      Kk = ik(40950),
      xk = ik(1858),
      nk = ik(40957),
      Uk = ik(40972),
      Hk = ik.n(Uk),
      wk = ik(40926),
      lk = ik(40934),
      pk = ik(1327),
      yk = ik(36446),
      Yk = ik(1218),
      Lk = ik(36463),
      Ck = ik(36329),
      Ak = ik(1406),
      jk = ik(594),
      sk = ik(1220),
      dk = ik(41019),
      Vk = ik(40876),
      Fk = ik(40883),
      uk = ik(1893),
      qk = ik(3693),
      Ik = ik(26),
      zk = ik(1104);
    const Qk = 1e4,
      vk = 250,
      Ek = 250;
    var hk = ik(40902);
    const ak = 50,
      Wk = 100;
    const tk = 2e3,
      Xk = Vk.D.define(),
      Bk = Vk.D.define(),
      ck = Vk.D.define();
    class Tk extends Fk.j {
      constructor(kk, ek, ik) {
        super(), this.colour = kk, this.playerName = ek, this.showName = ik
      }
      toDOM() {
        const kk = document.createElement("span");
        kk.className = "cm-remote-cursor-wrapper", kk.style.borderLeftColor = this.colour;
        const ek = document.createElement("span");
        if (ek.className = "cm-remote-cursor", ek.style.borderLeftColor = this.colour, kk.appendChild(ek), this.showName) {
          const ek = document.createElement("span");
          ek.className = "cm-remote-cursor-name", ek.style.backgroundColor = this.colour, ek.textContent = this.playerName, kk.appendChild(ek)
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

    function Zk(kk, ek) {
      const ik = [],
        Dk = [];
      for (const [, bk] of kk) {
        const kk = ek - bk.lastMoved < tk;
        if (ik.push({
            pos: bk.head,
            decoration: Fk.b.widget({
              widget: new Tk(bk.colour, bk.playerName, kk),
              side: 1
            })
          }), bk.anchor !== bk.head) {
          const kk = Math.min(bk.anchor, bk.head),
            ek = Math.max(bk.anchor, bk.head);
          Dk.push({
            from: kk,
            to: ek,
            decoration: Fk.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${bk.colour}33`
              }
            })
          })
        }
      }
      const fk = new Vk.s,
        Sk = [];
      for (const bk of ik) Sk.push({
        bias: 1,
        deco: bk.decoration,
        from: bk.pos,
        to: bk.pos
      });
      for (const bk of Dk) Sk.push({
        bias: 0,
        deco: bk.decoration,
        from: bk.from,
        to: bk.to
      });
      Sk.sort(((kk, ek) => kk.from - ek.from || kk.deco.startSide - ek.deco.startSide || kk.bias - ek.bias));
      for (const bk of Sk) fk.add(bk.from, bk.to, bk.deco);
      return fk.finish()
    }
    const Ok = Vk.E.define({
      create: () => ({
        cursors: new Map,
        oD: Fk.b.none
      }),
      update(kk, ek) {
        let ik = kk.cursors,
          Dk = !1;
        if (ek.docChanged) {
          const kk = new Map;
          for (const [Dk, fk] of ik) kk.set(Dk, {
            ...fk,
            anchor: ek.changes.mapPos(fk.anchor, 1),
            head: ek.changes.mapPos(fk.head, 1)
          });
          ik = kk, Dk = !0
        }
        for (const fk of ek.effects)
          if (fk.is(Xk)) {
            if (!Number.isInteger(fk.value.anchor) || !Number.isInteger(fk.value.head)) {
              console.warn(`Code Editor: ignored player ${fk.value.playerId}'s cursor at ${fk.value.anchor}-${fk.value.head}`);
              continue
            }
            const Sk = ek.state.doc.length,
              bk = {
                ...fk.value,
                anchor: Math.min(fk.value.anchor, Sk),
                head: Math.min(fk.value.head, Sk)
              };
            ik === kk.cursors && (ik = new Map(ik)), ik.set(bk.playerId, bk), Dk = !0
          } else fk.is(Bk) ? ik.has(fk.value) && (ik === kk.cursors && (ik = new Map(ik)), ik.delete(fk.value), Dk = !0) : fk.is(ck) && (Dk = !0);
        return Dk ? {
          cursors: ik,
          oD: Zk(ik, Date.now())
        } : kk
      },
      provide: kk => Fk.f.oD.from(kk, (kk => kk.oD))
    });
    const gk = Vk.D.define(),
      Gk = Fk.b.mark({
        class: "CodeInsertFlash"
      }),
      Nk = Vk.E.define({
        create: () => Fk.b.none,
        update(kk, ek) {
          let ik = kk.map(ek.changes);
          for (const Dk of ek.effects) Dk.is(gk) && (ik = Dk.value ? Fk.b.set(Gk.range(Dk.value.from, Dk.value.to)) : Fk.b.none);
          return ik
        },
        provide: kk => Fk.f.oD.from(kk)
      }),
      Rk = Vk.E.define({
        create: () => !1,
        update: (kk, ek) => kk || void 0 !== ek.annotation(Vk.K.userEvent) && !ek.annotation(Vk.K.remote)
      }),
      Jk = [Nk, Rk];

    function ke(kk) {
      return kk.field(Rk)
    }
    const ee = 3e4;

    function ie(kk, ek) {
      const ik = (0, bk.useRef)(null);
      (0, bk.useEffect)((() => {
        var kk;
        (null === (kk = ik.current) || void 0 === kk ? void 0 : kk.path) !== ek && (ik.current = null)
      }), [ek]);
      const Dk = kk => {
        var Dk;
        const fk = ik.current;
        if (null === kk || void 0 === kk || !kk.dom.isConnected || !fk || fk.path !== ek) return;
        ik.current = null;
        const {
          fU: bk
        } = fk;
        if (bk && null !== bk.text && performance.now() - bk.at < ee) {
          const ek = function(kk, ek) {
            if (kk === ek) return null;
            const ik = Math.min(kk.length, ek.length);
            let Dk = 0;
            for (; Dk < ik && kk[Dk] === ek[Dk];) Dk++;
            let fk = 0;
            for (; fk < ik - Dk && kk[kk.length - 1 - fk] === ek[ek.length - 1 - fk];) fk++;
            return {
              from: Dk,
              to: kk.length - fk,
              insert: ek.slice(Dk, ek.length - fk)
            }
          }(kk.state.doc.toString(), bk.text);
          null !== ek && kk.dispatch({
            changes: ek,
            userEvent: bk.placed ? "input" : void 0
          })
        }
        const {
          doc: rk
        } = kk.state, Pk = rk.line(Math.min(Math.max(fk.line, 1), rk.lines)), mk = Pk.from + Math.min(null !== (Dk = fk.column) && void 0 !== Dk ? Dk : 0, Pk.length);
        kk.dispatch({
          selection: {
            anchor: mk
          },
          effects: Sk.b.scrollIntoView(mk, {
            y: "center"
          }),
          userEvent: null !== bk && void 0 !== bk && bk.placed ? "select" : void 0
        }), !1 !== (null === bk || void 0 === bk ? void 0 : bk.focused) && kk.focus()
      };
      return (0, Ak.c)("CodeEditorGoToLine", (ek => {
        ik.current = ek, Dk(kk.current)
      })), (0, Ak.c)("CodeEditorKeepEdits", (() => {
        const Dk = kk.current;
        if (null === Dk || !Dk.dom.isConnected || null === ek) return;
        const {
          doc: fk,
          selection: Sk
        } = Dk.state, {
          head: bk
        } = Sk.main, rk = fk.lineAt(bk), Pk = {
          text: (0, dk.k)(Dk.state).length > 0 ? fk.toString() : null,
          at: performance.now(),
          focused: Dk.hasFocus,
          placed: ke(Dk.state)
        };
        ik.current = {
          path: ek,
          line: rk.number,
          column: bk - rk.from,
          fU: Pk
        }
      })), kk => {
        var fk;
        const Sk = ik.current;
        !1 === (null === Sk || void 0 === Sk || null === (fk = Sk.fU) || void 0 === fk ? void 0 : fk.focused) && Sk.path === ek || kk.focus(), Dk(kk)
      }
    }
    var De = ik(4317),
      fe = ik(1172);

    function Se(kk, ek) {
      const {
        t: ik
      } = (0, fe.D)();
      (0, Ak.c)("CodeEditorInsertText", (Dk => {
        let {
          text: fk,
          focus: Sk
        } = Dk;
        const bk = kk.current,
          rk = null !== bk && void 0 !== bk && bk.dom.isConnected ? function(kk, ek) {
            if (!ke(kk)) return null;
            const {
              from: ik,
              to: Dk
            } = kk.selection.main, fk = ik + ek.length;
            return {
              changes: {
                from: ik,
                to: Dk,
                insert: ek
              },
              selection: {
                anchor: fk
              },
              effects: [Fk.f.scrollIntoView(fk, {
                y: "center"
              }), gk.of({
                from: ik,
                to: fk
              })],
              userEvent: "input"
            }
          }(bk.state, fk) : null;
        null !== bk && null !== rk ? (bk.dispatch(rk), Sk && bk.focus(), setTimeout((() => {
          bk.dom.isConnected && bk.dispatch({
            effects: gk.of(null)
          })
        }), 1500)) : (0, De.e)(fk).then((() => {
          ek({
            message: ik("codeEditorWorld:pickCopied", {
              coords: fk
            }),
            type: "success"
          })
        }), (kk => {
          console.error("Pick could not copy the coordinates", kk), ek({
            message: ik("codeEditorWorld:pickPlaceCursor", {
              coords: fk
            }),
            type: "warning"
          })
        }))
      }))
    }
    var be = ik(40915);
    const re = "#e45649",
      Pe = "#383a42",
      me = "#696c77",
      Me = "#986801",
      Ke = "#e5e5e6",
      xe = "#fafafa",
      ne = "#eaeaeb",
      Ue = "#526fff",
      He = Fk.f.theme({
        "&": {
          color: Pe,
          backgroundColor: xe
        },
        ".cm-content": {
          caretColor: Ue
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Ue
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Pe
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
          backgroundColor: xe,
          color: me,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Ke
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: ne
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: ne,
          borderBottomColor: ne
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Ke,
            color: Pe
          }
        }
      }, {
        dark: !1
      }),
      we = hk.e.define([{
        tag: be.o.keyword,
        color: "#a626a4"
      }, {
        tag: [be.o.name, be.o.deleted, be.o.character, be.o.propertyName, be.o.macroName],
        color: re
      }, {
        tag: [be.o.function(be.o.variableName), be.o.labelName],
        color: "#4078f2"
      }, {
        tag: [be.o.color, be.o.constant(be.o.name), be.o.standard(be.o.name)],
        color: Me
      }, {
        tag: [be.o.definition(be.o.name), be.o.separator],
        color: Pe
      }, {
        tag: [be.o.typeName, be.o.className, be.o.number, be.o.changed, be.o.annotation, be.o.modifier, be.o.self, be.o.namespace],
        color: "#c18401"
      }, {
        tag: [be.o.operator, be.o.operatorKeyword, be.o.url, be.o.escape, be.o.regexp, be.o.link, be.o.special(be.o.string)],
        color: "#0184bc"
      }, {
        tag: [be.o.meta, be.o.comment],
        color: me
      }, {
        tag: be.o.strong,
        fontWeight: "bold"
      }, {
        tag: be.o.emphasis,
        fontStyle: "italic"
      }, {
        tag: be.o.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: be.o.link,
        color: me,
        textDecoration: "underline"
      }, {
        tag: be.o.heading,
        fontWeight: "bold",
        color: re
      }, {
        tag: [be.o.atom, be.o.bool, be.o.special(be.o.variableName)],
        color: Me
      }, {
        tag: [be.o.processingInstruction, be.o.string, be.o.inserted],
        color: "#50a14f"
      }, {
        tag: be.o.invalid,
        color: "#000000"
      }]),
      le = [He, (0, hk.gb)(we)];
    var pe = ik(36508),
      ye = ik(41021);
    const Ye = Sk.h.define(),
      Le = Sk.i.define({
        create: () => !1,
        update(kk, ek) {
          for (const ik of ek.effects) ik.is(Ye) && (kk = ik.value);
          return kk
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

    function Ae(kk, ek) {
      return [Le, Sk.m.fromClass(class {
        constructor(kk) {
          this.view = kk, this.onDown = kk => {
            const ek = kk.target instanceof Element && null !== kk.target.closest(".cm-tooltip");
            0 !== kk.button || ek || this.view.state.field(Le) || this.view.dispatch({
              effects: Ye.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Le) && this.view.dispatch({
              effects: Ye.of(!1)
            })
          }, kk.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Sk.t.compute(["selection", Le], (ik => function(kk, ek, ik) {
        const Dk = kk.selection.main;
        return Dk.empty || kk.field(Le) || kk.sliceDoc(Dk.from, Dk.to).trim().length < 2 ? null : {
          pos: Dk.from,
          above: !0,
          create: kk => {
            const Dk = document.createElement("div");
            Dk.className = "CodeSelectionActions", Dk.setAttribute("role", "toolbar"), Dk.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: fk,
                label: Sk
              }
              of Ce) {
              if (!ik && "explain" !== fk) continue;
              const bk = document.createElement("button");
              bk.type = "button", bk.textContent = Sk, "change" !== fk && (bk.title = ye.c, bk.dataset.asksAi = "true"), bk.addEventListener("mousedown", (kk => {
                kk.preventDefault()
              })), bk.addEventListener("click", (() => {
                const ik = kk.state.selection.main;
                if (ik.empty) return;
                const Dk = {
                  action: fk,
                  path: ek,
                  fromLine: kk.state.doc.lineAt(ik.from).number,
                  toLine: kk.state.doc.lineAt(ik.to > ik.from && kk.state.doc.lineAt(ik.to).from === ik.to ? ik.to - 1 : ik.to).number,
                  text: kk.state.sliceDoc(ik.from, ik.to)
                };
                Ik.j.tm("WorldCodeAiSelection", Dk), kk.dispatch({
                  selection: {
                    anchor: ik.to
                  }
                })
              })), Dk.appendChild(bk)
            }
            return {
              dom: Dk
            }
          }
        }
      }(ik, kk, ek)))]
    }
    var je = ik(1066);
    const se = new Set(["(", "{", "[", "<"]),
      de = new Set([")", "}", "]", ">"]),
      Ve = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Fe(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function ik(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = [];
        for (const fk of kk) {
          let kk;
          kk = "punctuation" === fk.kind ? Ve.text : "parameterName" === fk.kind ? Ve.parameterName : ek, Dk.push({
            str: fk.text,
            style: {
              color: kk,
              opacity: ik ? .5 : void 0
            }
          })
        }
        return Dk
      }
      const Dk = [];
      if (Dk.push(...ik(kk.prefixDisplayParts, Ve.text)), kk.parameters.length > 0) {
        Dk.push("\n");
        for (let fk = 0; fk < kk.parameters.length; fk++) {
          const Sk = kk.parameters[fk];
          Dk.push("\t"), Dk.push(...ik(Sk.displayParts, Ve.parameter, null !== ek && fk !== ek)), Dk.push("\n")
        }
      }
      return Dk.push(...ik(kk.suffixDisplayParts, Ve.suffix)), kk.documentation && (Dk.push("\n\n"), Dk.push(...ik(kk.documentation, Ve.docs))), Dk
    }
    var ue = function(kk) {
      return kk[kk.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", kk[kk.DuplicateIdentifier = 2300] = "DuplicateIdentifier", kk
    }(ue || {});
    const qe = new Set([ue.DuplicateIdentifier]),
      Ie = new Set([ue.VariableDefinedElsewhere]),
      ze = new Set([]),
      Qe = "/index.js";

    function ve(kk) {
      return "/" + kk
    }

    function Ee(kk, ek, ik) {
      kk.getSourceFile(ek) && kk.deleteFile(ek), kk.createFile(ek, ik)
    }

    function he(kk) {
      return !!kk && ((0, Lk.x)(kk) || (0, Lk.t)(kk))
    }

    function ae(kk, ek, ik) {
      return () => {
        let Dk = [...ek.languageService.getSemanticDiagnostics(ik), ...ek.languageService.getSyntacticDiagnostics(ik)];
        return Dk = Dk.filter((kk => !(0, jk.F)(kk.start) && !(0, jk.F)(kk.length) && !qe.has(kk.code))), kk || (Dk = Dk.filter((kk => !Ie.has(kk.code)))), Dk.map((kk => ({
          from: kk.start,
          to: kk.start + kk.length,
          message: "string" === typeof kk.messageText ? kk.messageText : kk.messageText.messageText,
          severity: ze.has(kk.code) ? "warning" : "error"
        })))
      }
    }

    function We(kk, ek) {
      return ik => {
        var Dk, fk;
        const Sk = kk.languageService.getCompletionsAtPosition(ek, ik.pos, {});
        if (!Sk) return {
          from: ik.pos,
          options: []
        };
        let bk = null !== (Dk = null === (fk = Sk.optionalReplacementSpan) || void 0 === fk ? void 0 : fk.start) && void 0 !== Dk ? Dk : ik.pos;
        if (!Sk.optionalReplacementSpan) {
          const kk = ik.state.doc.sliceString(0, ik.pos);
          for (; bk > 0 && /[\w$]/.test(kk[bk - 1]);) bk--
        }
        return Sk.entries = Sk.entries.filter((kk => kk.kind !== Hk().ScriptElementKind.warning)), {
          from: bk,
          options: Sk.entries.map((Dk => {
            var fk, Sk, rk, Pk;
            const mk = kk.languageService.getCompletionEntryDetails(ek, ik.pos, Dk.name, {}, Dk.source, {}, Dk.data),
              Mk = null !== (fk = null === (Sk = Dk.replacementSpan) || void 0 === Sk ? void 0 : Sk.start) && void 0 !== fk ? fk : bk,
              Kk = Dk.replacementSpan ? Dk.replacementSpan.start + Dk.replacementSpan.length : ik.pos,
              xk = null !== (rk = Dk.insertText) && void 0 !== rk ? rk : Dk.name;
            return {
              label: Dk.name,
              detail: null === mk || void 0 === mk ? void 0 : mk.displayParts.map((kk => kk.text)).join(""),
              info: null === mk || void 0 === mk || null === (Pk = mk.documentation) || void 0 === Pk ? void 0 : Pk.map((kk => kk.text)).join(""),
              apply: kk => {
                kk.dispatch({
                  changes: {
                    from: Mk,
                    to: Kk,
                    insert: xk
                  },
                  selection: {
                    anchor: Mk + xk.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function te(kk) {
      return ek => {
        const ik = document.createElement("div");
        ik.className = "CodeEditorTooltip";
        let Dk = !1;
        return queueMicrotask((() => {
          Dk || (rk.render((0, je.jsx)(xk.e, {
            text: kk
          }), ik), ek.requestMeasure())
        })), {
          dom: ik,
          destroy() {
            Dk = !0, queueMicrotask((() => {
              rk.unmountComponentAtNode(ik)
            }))
          }
        }
      }
    }

    function Xe(kk, ek, ik) {
      return Dk => {
        var fk;
        if (!ek) return [];
        const Sk = null === (fk = Dk.selection.lw[0]) || void 0 === fk ? void 0 : fk.head;
        if (void 0 === Sk) return [];
        const bk = kk.languageService.getSignatureHelpItems(ik, Sk, {});
        if (!bk || !bk.items.length) return [];
        const rk = bk.applicableSpan.start - bk.items[0].prefixDisplayParts.map((kk => kk.text)).join("").length,
          Pk = bk.applicableSpan.start,
          mk = Dk.doc.lineAt(Sk),
          Mk = mk.from,
          Kk = Math.min(mk.to, Sk);
        let xk, nk;
        return rk < Mk ? (xk = Mk, nk = Kk) : (xk = rk, nk = Pk), [{
          pos: xk,
          end: nk,
          above: !1,
          create: te(Fe(bk.items[0], bk.argumentIndex))
        }]
      }
    }

    function Be(kk, ek) {
      return (ik, Dk, fk) => {
        const Sk = kk.languageService.getQuickInfoAtPosition(ek, Dk);
        if (!Sk) return [];
        const bk = Sk.textSpan.start,
          rk = Sk.textSpan.start + Sk.textSpan.length;
        if (Dk < bk || Dk >= rk) return [];
        if (Sk.kind === Hk().ScriptElementKind.memberFunctionElement || Sk.kind === Hk().ScriptElementKind.variableElement && "declare" === Sk.kindModifiers) {
          const kk = Sk.displayParts.findIndex((kk => "space" === kk.kind)); - 1 !== kk && (Sk.displayParts = Sk.displayParts.slice(kk));
          const ek = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            ik = Sk.displayParts.findIndex((kk => "punctuation" === kk.kind && "(" === kk.text)); - 1 !== ik && (ek.prefixDisplayParts = Sk.displayParts.slice(0, ik + 1), Sk.displayParts = Sk.displayParts.slice(ik + 1));
          const Dk = Sk.displayParts.findLastIndex((kk => "punctuation" === kk.kind && ")" === kk.text)); - 1 !== Dk && (ek.suffixDisplayParts = Sk.displayParts.slice(Dk), Sk.displayParts = Sk.displayParts.slice(0, Dk));
          let fk = 0,
            Pk = [];
          for (const bk of Sk.displayParts)
            if (se.has(bk.text) ? fk++ : de.has(bk.text) && fk--, "lineBreak" !== bk.kind) {
              if ("space" === bk.kind) {
                if (0 === Pk.length) continue;
                Pk.push({
                  kind: "space",
                  text: " "
                })
              } else Pk.push(bk);
              0 === fk && "," === bk.text && (ek.parameters.push({
                displayParts: Pk
              }), Pk = [])
            } return Pk.length > 0 && ek.parameters.push({
            displayParts: Pk
          }), ek.documentation = Sk.documentation, [{
            pos: bk,
            end: rk,
            above: !0,
            create: te(Fe(ek))
          }]
        }
        const Pk = [];
        for (const kk of Sk.displayParts) Pk.push({
          str: kk.text,
          style: {
            color: Ve.text
          }
        });
        if (Sk.documentation) {
          Pk.push("\n\n");
          for (const kk of Sk.documentation) Pk.push({
            str: kk.text,
            style: {
              color: Ve.docs
            }
          })
        }
        return [{
          pos: bk,
          end: rk,
          above: !0,
          create: te(Pk)
        }]
      }
    }
    const ce = {
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
      semicolons: Hk().SemicolonPreference.Insert
    };
    const Te = Sk.h.define(),
      oe = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Ze(kk) {
      let {
        isLobbyCode: ek,
        code: ik,
        onChange: rk,
        canEditCode: xk,
        setTemporaryMessage: Uk,
        close: jk,
        showTooltips: Tk,
        lightMode: Zk,
        collabState: gk,
        onRemoteDocChange: Gk,
        files: Nk,
        activePath: Rk,
        pluginName: ke,
        pluginFile: ee,
        pluginSource: De,
        setActiveDocReplacer: fe,
        showAiHints: be,
        canAiChangeCode: re = xk
      } = kk;
      const [Pe, me] = (0, bk.useState)(null), Me = null === gk || void 0 === gk ? void 0 : gk.version, Ke = null === gk || void 0 === gk ? void 0 : gk.clientID, xe = (0, bk.useRef)({
        isLobbyCode: ek,
        files: Nk,
        code: ik,
        activePath: Rk
      }), ne = (0, bk.useRef)(Gk);
      ne.current = Gk;
      const Ue = (0, bk.useRef)(null),
        He = (0, bk.useRef)(gk);
      He.current = gk;
      const we = (0, bk.useRef)(null),
        ye = (0, bk.useRef)(null),
        Ye = (0, bk.useRef)(null),
        Le = (0, bk.useRef)(jk);
      Le.current = jk;
      const Ce = (0, bk.useRef)(ik);
      Ce.current = ik;
      const se = (0, bk.useRef)(De);
      se.current = De;
      const de = function(kk, ek, ik, Dk) {
        return ik ? `/plugin-preview/${ik}/${null!==Dk&&void 0!==Dk?Dk:"index.ts"}` : kk ? ve(null !== ek && void 0 !== ek ? ek : Yk.i) : Qe
      }(ek, Rk, ke, ee);
      (0, bk.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: kk,
            files: ek,
            code: ik,
            activePath: Dk
          } = xe.current, fk = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Hk().ModuleKind.ESNext,
            moduleResolution: Hk().ModuleResolutionKind.Bundler,
            target: Hk().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(yk.g).map((kk => [kk.specifier, [kk.typesVfsPath]])))
            }
          }, Sk = new Map, bk = [];
          if (kk) {
            const kk = null !== ek && void 0 !== ek ? ek : {
              [Yk.i]: ik || "\n"
            };
            for (const [ek, ik] of Object.entries(kk)) {
              const kk = ve(ek);
              Sk.set(kk, ik || "\n"), bk.push(kk)
            }
            const fk = ve(null !== Dk && void 0 !== Dk ? Dk : Yk.i);
            Sk.has(fk) ? Sk.set(fk, ik || "\n") : (Sk.set(fk, ik || "\n"), bk.push(fk)), Sk.set("/node_modules/@bloxd/index.d.ts", Mk.default), bk.push("/node_modules/@bloxd/index.d.ts");
            for (const ek of Object.values(yk.g)) {
              Sk.set(ek.typesVfsPath, ek.types), bk.push(ek.typesVfsPath);
              for (const [kk, ik] of Object.entries(ek.files)) {
                const Dk = `/plugin-preview/${ek.name}/${kk}`;
                Sk.set(Dk, ik || "\n"), bk.push(Dk)
              }
            }
          } else Sk.set(Qe, ik || "\n"), bk.push(Qe);
          Sk.set("/globals.d.ts", kk ? mk.e : Pk.b), Sk.set("/lib.d.ts", Kk.d), bk.push("/globals.d.ts", "/lib.d.ts");
          const rk = nk.e(Sk),
            xk = nk.g(rk, bk, Hk(), fk);
          me({
            pw: xk,
            fsMap: Sk
          })
        }()
      }), []), (0, bk.useEffect)((() => {
        var kk, Dk;
        if (!Pe || !ek) return;
        const {
          pw: fk,
          fsMap: Sk
        } = Pe;
        if (function(kk, ek, ik) {
            const Dk = new Set;
            for (const [fk, Sk] of Object.entries(ik)) {
              const ik = ve(fk);
              Dk.add(ik);
              const bk = Sk || "\n";
              ek.get(ik) !== bk && (ek.set(ik, bk), Ee(kk, ik, bk))
            }
            for (const fk of [...ek.keys()]) "/globals.d.ts" === fk || "/lib.d.ts" === fk || fk.startsWith("/node_modules/") || fk.startsWith("/plugin-preview/") || Dk.has(fk) || (ek.delete(fk), kk.getSourceFile(fk) && kk.deleteFile(fk))
          }(fk, Sk, null !== Nk && void 0 !== Nk ? Nk : {
            [Yk.i]: ik || "\n"
          }), ke) return void Ee(fk, de, De || "\n");
        const bk = null !== (kk = null === (Dk = Ue.current) || void 0 === Dk ? void 0 : Dk.state.doc.toString()) && void 0 !== kk ? kk : ik;
        Ee(fk, de, bk || "\n")
      }), [Nk, Rk, Pe, ke, De, de, ik, ek]), (0, bk.useEffect)((() => {
        if (!Pe) return;
        const {
          pw: kk
        } = Pe;
        Ee(kk, de, (ke ? De : ik) || "\n")
      }), [ik, ke, De, de, Pe]), (0, bk.useEffect)((() => () => {
        ye.current && (ye.current(), ye.current = null)
      }), []), (0, bk.useEffect)((() => (fe(((kk, ek) => {
        if (ke) return !1;
        const ik = Ue.current,
          Dk = He.current,
          fk = Dk ? (0, Lk.E)(Dk.docKey) : null;
        if (!ik || !Dk || we.current !== Dk.clientID || kk !== fk) return !1;
        const Sk = ik.state.doc.toString();
        return Sk !== ek && ik.dispatch({
          changes: {
            from: 0,
            to: Sk.length,
            insert: ek
          }
        }), !0
      })), () => {
        Ue.current = null, we.current = null, fe(null)
      })), [fe, ke]);
      const Ve = ek ? ke ? null : null !== Rk && void 0 !== Rk ? Rk : Yk.i : pe.d,
        Fe = ie(Ue, Ve);
      Se(Ue, Uk), (0, Ak.c)("FormatCode", (() => {
        if (!Pe || !Ue.current || ke) return;
        const {
          pw: kk,
          fsMap: ik
        } = Pe, Dk = kk.getSourceFile(de).getFullText();
        let fk = 0;
        if (ek && Nk)
          for (const [ek, rk] of Object.entries(Nk)) ek !== (null !== Rk && void 0 !== Rk ? Rk : Yk.i) && (fk += rk.length);
        const Sk = function(kk, ek, ik, Dk, fk) {
          const Sk = kk.languageService.getFormattingEditsForDocument(Dk, ce);
          if (!Sk.length) return sk.d.error("Code is already formatted.");
          Sk.sort(((kk, ek) => ek.span.start - kk.span.start));
          let bk = kk.getSourceFile(Dk).getFullText();
          for (const rk of Sk) bk = bk.slice(0, rk.span.start) + rk.eK + bk.slice(rk.span.start + rk.span.length);
          return bk !== (ik ? (0, Ck.l)(bk, fk) : (0, Ck.i)(bk)) ? sk.d.error("Formatting the code will go beyond the character limit.") : sk.d.value(bk)
        }(kk, 0, ek, de, fk);
        if (Sk.isError()) return void Uk({
          message: Sk.asError().message,
          type: "warning"
        });
        const bk = Sk.getValue();
        bk && (Ue.current.dispatch({
          changes: {
            from: 0,
            to: Dk.length,
            insert: bk
          },
          selection: {
            anchor: bk.length
          }
        }), Ee(kk, de, bk), rk(bk))
      }));
      const ue = (0, bk.useMemo)((() => {
        if (!Pe) return [];
        const {
          pw: kk,
          fsMap: ik
        } = Pe;
        ! function(kk, ek, ik, Dk) {
          if (kk.getSourceFile(ik)) return;
          const fk = Dk || "\n";
          ek.set(ik, fk), kk.createFile(ik, fk)
        }(kk, ik, de, (ke ? se.current : Ce.current) || "\n");
        const bk = ek && he(ke ? null !== ee && void 0 !== ee ? ee : "index.ts" : Rk),
          rk = [(0, fk.b)({
            jsx: !1,
            typescript: bk
          }), Sk.f.highest(Sk.b.domEventHandlers({
            keydown: kk => "Escape" === kk.key ? (Le.current(), kk.stopPropagation(), !0) : (kk.stopPropagation(), !1)
          })), (0, Dk.d)({
            override: [We(kk, de)]
          }), Fk.i.fromClass(class {
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
                (0, hk.kb)(this.view.state, kk) || (0, hk.N)(this.view, kk, ak) || this.scheduleParse()
              }), Wk))
            }
          }), ...Jk, Sk.b.lineWrapping, Sk.i.define({
            create: Xe(kk, Tk, de),
            update(ek, ik) {
              const Dk = ik.effects.some((kk => kk.is(Te)));
              return ik.docChanged || ik.selection || Dk ? (Ee(kk, de, ik.state.doc.toString() || " "), Xe(kk, Tk, de)(ik.state)) : ek
            },
            provide: kk => Sk.t.computeN([kk], (ek => ek.field(kk)))
          }), (0, Sk.s)(Be(kk, de)), (0, lk.f)(ae(ek, kk, de)), Sk.m.fromClass(class {
            constructor(kk) {
              this.view = kk, this.searchPanel = null
            }
            update(kk) {
              const ek = kk.view.dom.querySelector(".cm-search");
              if (ek !== this.searchPanel) {
                if (this.searchPanel = ek, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (kk => {
                  "Escape" === kk.key && (0, wk.d)(this.view), kk.stopPropagation()
                }))
              }
            }
          })];
        be && !ke && rk.push(Ae(ek ? null !== Rk && void 0 !== Rk ? Rk : Yk.i : pe.d, re));
        const Pk = He.current;
        if (Pk && !ke) {
          rk.push(... function(kk, ek, ik, Dk, fk) {
            let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const bk = (0, Lk.E)(ik),
              rk = Fk.i.fromClass(class {
                constructor(kk) {
                  this.view = kk, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Ik.j.subscribe("codeCollab", (kk => {
                    kk.docKey === bk && kk.type === Lk.h.Updates && (kk.updates ? this.applyUpdates(kk.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(kk) {
                  const ek = JSON.parse(kk).map((kk => ({
                    clientID: kk.clientID,
                    changes: Vk.ChangeSet.fromJSON(kk.changes)
                  })));
                  ek.length > 0 && (this.view.dispatch((0, dk.j)(this.view.state, ek)), fk && fk(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(kk) {
                  Sk && (kk.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const kk = (0, dk.k)(this.view.state);
                  if (this.pushing || !kk.length) return;
                  const ek = Date.now() - this.lastPushTime;
                  if (ek < Ek) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Ek - ek)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Qk);
                  const ik = (0, dk.f)(this.view.state),
                    fk = kk.map((kk => ({
                      clientID: kk.clientID,
                      changes: kk.changes.toJSON()
                    }))),
                    Sk = JSON.stringify(fk);
                  Sk.length <= Lk.l ? uk.gameBridge.send("sendCodeCollab", {
                    vf: Lk.e.Push,
                    Ef: bk,
                    hf: ik,
                    tf: Sk
                  }) : (0, zk.postJsonWithMetricsCookiesAndJsonResponse)(`${Dk.gsUrl}/code/collab-push`, qk.p["collab-push"].toBuffer({
                    gameNameWithVariation: Dk.gameNameWithVariation,
                    lobbyName: Dk.lobbyName,
                    docKey: bk,
                    version: ik,
                    updates: Sk
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
                  const kk = (0, dk.f)(this.view.state);
                  (0, zk.postJsonWithMetricsCookiesAndJsonResponse)(`${Dk.gsUrl}/code/collab-pull`, qk.p["collab-pull"].toBuffer({
                    gameNameWithVariation: Dk.gameNameWithVariation,
                    lobbyName: Dk.lobbyName,
                    docKey: bk,
                    fromVersion: kk
                  }), {
                    retries: 1
                  }).then((kk => {
                    this.destroyed || (kk.fullDoc ? Ik.j.tm("codeCollabRejoin", {
                      docKey: bk,
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
                  if (kk - this.lastCursorSent < vk) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), vk)));
                  this.lastCursorSent = kk;
                  const ek = this.view.state.selection.main;
                  uk.gameBridge.send("sendCodeCollab", {
                    vf: Lk.e.Cursor,
                    Ef: bk,
                    Zf: ek.anchor,
                    gf: ek.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Ik.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, dk.c)({
              startVersion: kk,
              clientID: ek
            }), rk]
          }(Me, Ke, Pk.docKey, Pk.httpConfig, (kk => {
            var ek;
            null === (ek = ne.current) || void 0 === ek || ek.call(ne, kk)
          }), xk));
          const kk = function(kk, ek) {
            const ik = (0, Lk.E)(kk);
            return {
              extensions: [Ok],
              connect(kk) {
                if (ek) {
                  const ik = ek.map((kk => Xk.of({
                    playerId: kk.playerId,
                    playerName: kk.playerName,
                    colour: kk.colour,
                    anchor: kk.anchor,
                    head: kk.head,
                    lastMoved: Date.now()
                  })));
                  ik.length > 0 && kk.dispatch({
                    effects: ik
                  })
                }
                const Dk = Ik.j.subscribe("codeCollab", (ek => {
                    if (ek.docKey === ik)
                      if (ek.type === Lk.h.RemoteCursor) kk.dispatch({
                        effects: Xk.of({
                          playerId: ek.playerId,
                          playerName: ek.playerName,
                          colour: ek.colour,
                          anchor: ek.anchor,
                          head: ek.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (ek.type === Lk.h.Presence) {
                      const ik = JSON.parse(ek.peers),
                        Dk = new Set(ik.map((kk => kk.playerId))),
                        fk = kk.state.field(Ok),
                        Sk = [];
                      for (const [kk] of fk.cursors) Dk.has(kk) || Sk.push(Bk.of(kk));
                      Sk.length > 0 && kk.dispatch({
                        effects: Sk
                      })
                    }
                  })),
                  fk = setInterval((() => {
                    kk.dom.isConnected ? kk.dispatch({
                      effects: ck.of(Date.now())
                    }) : clearInterval(fk)
                  }), tk);
                return () => {
                  Ik.j.unsubscribe(Dk), clearInterval(fk)
                }
              }
            }
          }(Pk.docKey, Pk.existingCursors);
          rk.push(...kk.extensions), Ye.current = kk.connect
        } else Ye.current = null;
        return rk
      }), [ek, Pe, Tk, Me, Ke, de, Rk, ke, ee, xk, be, re]);
      if (!Pe || !gk && !ke) return (0, je.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, je.jsx)(pk.d, {})
      });
      const qe = ke ? `plugin-${ke}-${null!==ee&&void 0!==ee?ee:"index.ts"}` : gk ? `collab-${gk.clientID}` : `local-${ek}`;
      return (0, je.jsx)(Sk.q, {
        value: ke ? null !== De && void 0 !== De ? De : "" : ik,
        onChange: rk,
        extensions: ue,
        className: "CodeEditorContent",
        theme: Zk ? le : "dark",
        editable: xk && !ke,
        basicSetup: oe,
        onCreateEditor: kk => {
          var ek;
          Ue.current = kk, we.current = null !== (ek = null === gk || void 0 === gk ? void 0 : gk.clientID) && void 0 !== ek ? ek : null, Fe(kk), ye.current && ye.current(), Ye.current && (ye.current = Ye.current(kk))
        }
      }, qe)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);