export const id = 284;
export const ids = [284];
export const modules = {
  40929: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => Bk
    });
    var lT = cT(40938),
      MT = cT(40963),
      KT = cT(40970),
      OT = cT(71),
      yT = cT(94),
      fT = cT(40983),
      xT = cT(40988),
      IT = cT(4725),
      AT = cT(40990),
      CT = cT(1921),
      jT = cT(40996),
      vT = cT(41013),
      tT = cT.n(vT),
      hT = cT(40976),
      NT = cT(40981),
      QT = cT(1348),
      ST = cT(36682),
      DT = cT(1244),
      aT = cT(36693),
      FT = cT(36571),
      rT = cT(1461),
      PT = cT(617),
      wT = cT(1252),
      mT = cT(41062),
      bT = cT(40941),
      zT = cT(40944),
      JT = cT(1953),
      oT = cT(3732),
      HT = cT(36),
      eT = cT(1136);
    const GT = 1e4,
      VT = 250,
      ET = 250;
    var ZT = cT(40953);
    const uT = 50,
      XT = 100;
    const dT = 2e3,
      LT = bT.F.define(),
      RT = bT.F.define(),
      gT = bT.F.define();
    class UT extends zT.m {
      constructor(TT, kT, cT) {
        super(), this.colour = TT, this.playerName = kT, this.showName = cT
      }
      toDOM() {
        const TT = document.createElement("span");
        TT.className = "cm-remote-cursor-wrapper", TT.style.borderLeftColor = this.colour;
        const kT = document.createElement("span");
        if (kT.className = "cm-remote-cursor", kT.style.borderLeftColor = this.colour, TT.appendChild(kT), this.showName) {
          const kT = document.createElement("span");
          kT.className = "cm-remote-cursor-name", kT.style.backgroundColor = this.colour, kT.textContent = this.playerName, TT.appendChild(kT)
        }
        return TT
      }
      eq(TT) {
        return this.colour === TT.colour && this.playerName === TT.playerName && this.showName === TT.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function YT(TT, kT) {
      const cT = [],
        lT = [];
      for (const [, OT] of TT) {
        const TT = kT - OT.lastMoved < dT;
        if (cT.push({
            pos: OT.head,
            decoration: zT.e.widget({
              widget: new UT(OT.colour, OT.playerName, TT),
              side: 1
            })
          }), OT.anchor !== OT.head) {
          const TT = Math.min(OT.anchor, OT.head),
            kT = Math.max(OT.anchor, OT.head);
          lT.push({
            from: TT,
            to: kT,
            decoration: zT.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${OT.colour}33`
              }
            })
          })
        }
      }
      const MT = new bT.v,
        KT = [];
      for (const OT of cT) KT.push({
        bias: 1,
        deco: OT.decoration,
        from: OT.pos,
        to: OT.pos
      });
      for (const OT of lT) KT.push({
        bias: 0,
        deco: OT.decoration,
        from: OT.from,
        to: OT.to
      });
      KT.sort(((TT, kT) => TT.from - kT.from || TT.deco.startSide - kT.deco.startSide || TT.bias - kT.bias));
      for (const OT of KT) MT.add(OT.from, OT.to, OT.deco);
      return MT.finish()
    }
    const BT = bT.H.define({
      create: () => ({
        cursors: new Map,
        cK: zT.e.none
      }),
      update(TT, kT) {
        let cT = TT.cursors,
          lT = !1;
        if (kT.docChanged) {
          const TT = new Map;
          for (const [lT, MT] of cT) TT.set(lT, {
            ...MT,
            anchor: kT.changes.mapPos(MT.anchor, 1),
            head: kT.changes.mapPos(MT.head, 1)
          });
          cT = TT, lT = !0
        }
        for (const MT of kT.effects)
          if (MT.is(LT)) {
            if (!Number.isInteger(MT.value.anchor) || !Number.isInteger(MT.value.head)) {
              console.warn(`Code Editor: ignored player ${MT.value.playerId}'s cursor at ${MT.value.anchor}-${MT.value.head}`);
              continue
            }
            const KT = kT.state.doc.length,
              OT = {
                ...MT.value,
                anchor: Math.min(MT.value.anchor, KT),
                head: Math.min(MT.value.head, KT)
              };
            cT === TT.cursors && (cT = new Map(cT)), cT.set(OT.playerId, OT), lT = !0
          } else MT.is(RT) ? cT.has(MT.value) && (cT === TT.cursors && (cT = new Map(cT)), cT.delete(MT.value), lT = !0) : MT.is(gT) && (lT = !0);
        return lT ? {
          cursors: cT,
          cK: YT(cT, Date.now())
        } : TT
      },
      provide: TT => zT.h.cK.from(TT, (TT => TT.cK))
    });
    const WT = bT.F.define(),
      nT = zT.e.mark({
        class: "CodeInsertFlash"
      }),
      pT = bT.H.define({
        create: () => zT.e.none,
        update(TT, kT) {
          let cT = TT.map(kT.changes);
          for (const lT of kT.effects) lT.is(WT) && (cT = lT.value ? zT.e.set(nT.range(lT.value.from, lT.value.to)) : zT.e.none);
          return cT
        },
        provide: TT => zT.h.cK.from(TT)
      }),
      iT = bT.H.define({
        create: () => !1,
        update: (TT, kT) => TT || void 0 !== kT.annotation(bT.M.userEvent) && !kT.annotation(bT.M.remote)
      }),
      qT = [pT, iT];

    function sT(TT) {
      return TT.field(iT)
    }
    const Tk = 3e4;

    function kk(TT, kT) {
      const cT = (0, OT.useRef)(null);
      (0, OT.useEffect)((() => {
        var TT;
        (null === (TT = cT.current) || void 0 === TT ? void 0 : TT.path) !== kT && (cT.current = null)
      }), [kT]);
      const lT = TT => {
        var lT;
        const MT = cT.current;
        if (null === TT || void 0 === TT || !TT.dom.isConnected || !MT || MT.path !== kT) return;
        cT.current = null;
        const {
          wj: OT
        } = MT;
        if (OT && null !== OT.text && performance.now() - OT.at < Tk) {
          const kT = function(TT, kT) {
            if (TT === kT) return null;
            const cT = Math.min(TT.length, kT.length);
            let lT = 0;
            for (; lT < cT && TT[lT] === kT[lT];) lT++;
            let MT = 0;
            for (; MT < cT - lT && TT[TT.length - 1 - MT] === kT[kT.length - 1 - MT];) MT++;
            return {
              from: lT,
              to: TT.length - MT,
              insert: kT.slice(lT, kT.length - MT)
            }
          }(TT.state.doc.toString(), OT.text);
          null !== kT && TT.dispatch({
            changes: kT,
            userEvent: OT.placed ? "input" : void 0
          })
        }
        const {
          doc: yT
        } = TT.state, fT = yT.line(Math.min(Math.max(MT.line, 1), yT.lines)), xT = fT.from + Math.min(null !== (lT = MT.column) && void 0 !== lT ? lT : 0, fT.length);
        TT.dispatch({
          selection: {
            anchor: xT
          },
          effects: KT.d.scrollIntoView(xT, {
            y: "center"
          }),
          userEvent: null !== OT && void 0 !== OT && OT.placed ? "select" : void 0
        }), !1 !== (null === OT || void 0 === OT ? void 0 : OT.focused) && TT.focus()
      };
      return (0, rT.g)("CodeEditorGoToLine", (kT => {
        cT.current = kT, lT(TT.current)
      })), (0, rT.g)("CodeEditorKeepEdits", (() => {
        const lT = TT.current;
        if (null === lT || !lT.dom.isConnected || null === kT) return;
        const {
          doc: MT,
          selection: KT
        } = lT.state, {
          head: OT
        } = KT.main, yT = MT.lineAt(OT), fT = {
          text: (0, mT.i)(lT.state).length > 0 ? MT.toString() : null,
          at: performance.now(),
          focused: lT.hasFocus,
          placed: sT(lT.state)
        };
        cT.current = {
          path: kT,
          line: yT.number,
          column: OT - yT.from,
          wj: fT
        }
      })), TT => {
        var MT;
        const KT = cT.current;
        !1 === (null === KT || void 0 === KT || null === (MT = KT.wj) || void 0 === MT ? void 0 : MT.focused) && KT.path === kT || TT.focus(), lT(TT)
      }
    }
    var ck = cT(4347),
      lk = cT(1195);

    function Mk(TT, kT) {
      const {
        t: cT
      } = (0, lk.B)();
      (0, rT.g)("CodeEditorInsertText", (lT => {
        let {
          text: MT,
          focus: KT
        } = lT;
        const OT = TT.current,
          yT = null !== OT && void 0 !== OT && OT.dom.isConnected ? function(TT, kT) {
            if (!sT(TT)) return null;
            const {
              from: cT,
              to: lT
            } = TT.selection.main, MT = cT + kT.length;
            return {
              changes: {
                from: cT,
                to: lT,
                insert: kT
              },
              selection: {
                anchor: MT
              },
              effects: [zT.h.scrollIntoView(MT, {
                y: "center"
              }), WT.of({
                from: cT,
                to: MT
              })],
              userEvent: "input"
            }
          }(OT.state, MT) : null;
        null !== OT && null !== yT ? (OT.dispatch(yT), KT && OT.focus(), setTimeout((() => {
          OT.dom.isConnected && OT.dispatch({
            effects: WT.of(null)
          })
        }), 1500)) : (0, ck.e)(MT).then((() => {
          kT({
            message: cT("codeEditorWorld:pickCopied", {
              coords: MT
            }),
            type: "success"
          })
        }), (TT => {
          console.error("Pick could not copy the coordinates", TT), kT({
            message: cT("codeEditorWorld:pickPlaceCursor", {
              coords: MT
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Kk = cT(40961);
    const Ok = "#e45649",
      yk = "#383a42",
      fk = "#696c77",
      xk = "#986801",
      Ik = "#e5e5e6",
      Ak = "#fafafa",
      Ck = "#eaeaeb",
      jk = "#526fff",
      vk = zT.h.theme({
        "&": {
          color: yk,
          backgroundColor: Ak
        },
        ".cm-content": {
          caretColor: jk
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: jk
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: yk
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
          backgroundColor: Ak,
          color: fk,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Ik
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Ck
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Ck,
          borderBottomColor: Ck
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Ik,
            color: yk
          }
        }
      }, {
        dark: !1
      }),
      tk = ZT.b.define([{
        tag: Kk.i.keyword,
        color: "#a626a4"
      }, {
        tag: [Kk.i.name, Kk.i.deleted, Kk.i.character, Kk.i.propertyName, Kk.i.macroName],
        color: Ok
      }, {
        tag: [Kk.i.function(Kk.i.variableName), Kk.i.labelName],
        color: "#4078f2"
      }, {
        tag: [Kk.i.color, Kk.i.constant(Kk.i.name), Kk.i.standard(Kk.i.name)],
        color: xk
      }, {
        tag: [Kk.i.definition(Kk.i.name), Kk.i.separator],
        color: yk
      }, {
        tag: [Kk.i.typeName, Kk.i.className, Kk.i.number, Kk.i.changed, Kk.i.annotation, Kk.i.modifier, Kk.i.self, Kk.i.namespace],
        color: "#c18401"
      }, {
        tag: [Kk.i.operator, Kk.i.operatorKeyword, Kk.i.url, Kk.i.escape, Kk.i.regexp, Kk.i.link, Kk.i.special(Kk.i.string)],
        color: "#0184bc"
      }, {
        tag: [Kk.i.meta, Kk.i.comment],
        color: fk
      }, {
        tag: Kk.i.strong,
        fontWeight: "bold"
      }, {
        tag: Kk.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: Kk.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Kk.i.link,
        color: fk,
        textDecoration: "underline"
      }, {
        tag: Kk.i.heading,
        fontWeight: "bold",
        color: Ok
      }, {
        tag: [Kk.i.atom, Kk.i.bool, Kk.i.special(Kk.i.variableName)],
        color: xk
      }, {
        tag: [Kk.i.processingInstruction, Kk.i.string, Kk.i.inserted],
        color: "#50a14f"
      }, {
        tag: Kk.i.invalid,
        color: "#000000"
      }]),
      hk = [vk, (0, ZT.fb)(tk)];
    var Nk = cT(36739),
      Qk = cT(41068);
    const Sk = KT.l.define(),
      Dk = KT.o.define({
        create: () => !1,
        update(TT, kT) {
          for (const cT of kT.effects) cT.is(Sk) && (TT = cT.value);
          return TT
        }
      }),
      ak = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Fk(TT, kT) {
      return [Dk, KT.s.fromClass(class {
        constructor(TT) {
          this.view = TT, this.onDown = TT => {
            const kT = TT.target instanceof Element && null !== TT.target.closest(".cm-tooltip");
            0 !== TT.button || kT || this.view.state.field(Dk) || this.view.dispatch({
              effects: Sk.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Dk) && this.view.dispatch({
              effects: Sk.of(!1)
            })
          }, TT.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), KT.z.compute(["selection", Dk], (cT => function(TT, kT, cT) {
        const lT = TT.selection.main;
        return lT.empty || TT.field(Dk) || TT.sliceDoc(lT.from, lT.to).trim().length < 2 ? null : {
          pos: lT.from,
          above: !0,
          create: TT => {
            const lT = document.createElement("div");
            lT.className = "CodeSelectionActions", lT.setAttribute("role", "toolbar"), lT.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: MT,
                label: KT
              }
              of ak) {
              if (!cT && "explain" !== MT) continue;
              const OT = document.createElement("button");
              OT.type = "button", OT.textContent = KT, "change" !== MT && (OT.title = Qk.d, OT.dataset.asksAi = "true"), OT.addEventListener("mousedown", (TT => {
                TT.preventDefault()
              })), OT.addEventListener("click", (() => {
                const cT = TT.state.selection.main;
                if (cT.empty) return;
                const lT = {
                  action: MT,
                  path: kT,
                  fromLine: TT.state.doc.lineAt(cT.from).number,
                  toLine: TT.state.doc.lineAt(cT.to > cT.from && TT.state.doc.lineAt(cT.to).from === cT.to ? cT.to - 1 : cT.to).number,
                  text: TT.state.sliceDoc(cT.from, cT.to)
                };
                HT.k.nt("WorldCodeAiSelection", lT), TT.dispatch({
                  selection: {
                    anchor: cT.to
                  }
                })
              })), lT.appendChild(OT)
            }
            return {
              dom: lT
            }
          }
        }
      }(cT, TT, kT)))]
    }
    var rk = cT(1099);
    const Pk = new Set(["(", "{", "[", "<"]),
      wk = new Set([")", "}", "]", ">"]),
      mk = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function bk(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function cT(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = [];
        for (const MT of TT) {
          let TT;
          TT = "punctuation" === MT.kind ? mk.text : "parameterName" === MT.kind ? mk.parameterName : kT, lT.push({
            str: MT.text,
            style: {
              color: TT,
              opacity: cT ? .5 : void 0
            }
          })
        }
        return lT
      }
      const lT = [];
      if (lT.push(...cT(TT.prefixDisplayParts, mk.text)), TT.parameters.length > 0) {
        lT.push("\n");
        for (let MT = 0; MT < TT.parameters.length; MT++) {
          const KT = TT.parameters[MT];
          lT.push("\t"), lT.push(...cT(KT.displayParts, mk.parameter, null !== kT && MT !== kT)), lT.push("\n")
        }
      }
      return lT.push(...cT(TT.suffixDisplayParts, mk.suffix)), TT.documentation && (lT.push("\n\n"), lT.push(...cT(TT.documentation, mk.docs))), lT
    }
    var zk = function(TT) {
      return TT[TT.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", TT[TT.DuplicateIdentifier = 2300] = "DuplicateIdentifier", TT
    }(zk || {});
    const Jk = new Set([zk.DuplicateIdentifier]),
      Hk = new Set([zk.VariableDefinedElsewhere]),
      ek = new Set([]),
      Gk = "/index.js";

    function Vk(TT) {
      return "/" + TT
    }

    function Ek(TT, kT, cT) {
      TT.getSourceFile(kT) && TT.deleteFile(kT), TT.createFile(kT, cT)
    }

    function Zk(TT) {
      return !!TT && ((0, aT.o)(TT) || (0, aT.l)(TT))
    }

    function uk(TT, kT, cT) {
      return () => {
        let lT = [...kT.languageService.getSemanticDiagnostics(cT), ...kT.languageService.getSyntacticDiagnostics(cT)];
        return lT = lT.filter((TT => !(0, PT.R)(TT.start) && !(0, PT.R)(TT.length) && !Jk.has(TT.code))), TT || (lT = lT.filter((TT => !Hk.has(TT.code)))), lT.map((TT => ({
          from: TT.start,
          to: TT.start + TT.length,
          message: "string" === typeof TT.messageText ? TT.messageText : TT.messageText.messageText,
          severity: ek.has(TT.code) ? "warning" : "error"
        })))
      }
    }

    function Xk(TT, kT) {
      return cT => {
        var lT, MT;
        const KT = TT.languageService.getCompletionsAtPosition(kT, cT.pos, {});
        if (!KT) return {
          from: cT.pos,
          options: []
        };
        let OT = null !== (lT = null === (MT = KT.optionalReplacementSpan) || void 0 === MT ? void 0 : MT.start) && void 0 !== lT ? lT : cT.pos;
        if (!KT.optionalReplacementSpan) {
          const TT = cT.state.doc.sliceString(0, cT.pos);
          for (; OT > 0 && /[\w$]/.test(TT[OT - 1]);) OT--
        }
        return KT.entries = KT.entries.filter((TT => TT.kind !== tT().ScriptElementKind.warning)), {
          from: OT,
          options: KT.entries.map((lT => {
            var MT, KT, yT, fT;
            const xT = TT.languageService.getCompletionEntryDetails(kT, cT.pos, lT.name, {}, lT.source, {}, lT.data),
              IT = null !== (MT = null === (KT = lT.replacementSpan) || void 0 === KT ? void 0 : KT.start) && void 0 !== MT ? MT : OT,
              AT = lT.replacementSpan ? lT.replacementSpan.start + lT.replacementSpan.length : cT.pos,
              CT = null !== (yT = lT.insertText) && void 0 !== yT ? yT : lT.name;
            return {
              label: lT.name,
              detail: null === xT || void 0 === xT ? void 0 : xT.displayParts.map((TT => TT.text)).join(""),
              info: null === xT || void 0 === xT || null === (fT = xT.documentation) || void 0 === fT ? void 0 : fT.map((TT => TT.text)).join(""),
              apply: TT => {
                TT.dispatch({
                  changes: {
                    from: IT,
                    to: AT,
                    insert: CT
                  },
                  selection: {
                    anchor: IT + CT.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function dk(TT) {
      return kT => {
        const cT = document.createElement("div");
        cT.className = "CodeEditorTooltip";
        let lT = !1;
        return queueMicrotask((() => {
          lT || (yT.render((0, rk.jsx)(CT.b, {
            text: TT
          }), cT), kT.requestMeasure())
        })), {
          dom: cT,
          destroy() {
            lT = !0, queueMicrotask((() => {
              yT.unmountComponentAtNode(cT)
            }))
          }
        }
      }
    }

    function Lk(TT, kT, cT) {
      return lT => {
        var MT;
        if (!kT) return [];
        const KT = null === (MT = lT.selection.qt[0]) || void 0 === MT ? void 0 : MT.head;
        if (void 0 === KT) return [];
        const OT = TT.languageService.getSignatureHelpItems(cT, KT, {});
        if (!OT || !OT.items.length) return [];
        const yT = OT.applicableSpan.start - OT.items[0].prefixDisplayParts.map((TT => TT.text)).join("").length,
          fT = OT.applicableSpan.start,
          xT = lT.doc.lineAt(KT),
          IT = xT.from,
          AT = Math.min(xT.to, KT);
        let CT, jT;
        return yT < IT ? (CT = IT, jT = AT) : (CT = yT, jT = fT), [{
          pos: CT,
          end: jT,
          above: !1,
          create: dk(bk(OT.items[0], OT.argumentIndex))
        }]
      }
    }

    function Rk(TT, kT) {
      return (cT, lT, MT) => {
        const KT = TT.languageService.getQuickInfoAtPosition(kT, lT);
        if (!KT) return [];
        const OT = KT.textSpan.start,
          yT = KT.textSpan.start + KT.textSpan.length;
        if (lT < OT || lT >= yT) return [];
        if (KT.kind === tT().ScriptElementKind.memberFunctionElement || KT.kind === tT().ScriptElementKind.variableElement && "declare" === KT.kindModifiers) {
          const TT = KT.displayParts.findIndex((TT => "space" === TT.kind)); - 1 !== TT && (KT.displayParts = KT.displayParts.slice(TT));
          const kT = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            cT = KT.displayParts.findIndex((TT => "punctuation" === TT.kind && "(" === TT.text)); - 1 !== cT && (kT.prefixDisplayParts = KT.displayParts.slice(0, cT + 1), KT.displayParts = KT.displayParts.slice(cT + 1));
          const lT = KT.displayParts.findLastIndex((TT => "punctuation" === TT.kind && ")" === TT.text)); - 1 !== lT && (kT.suffixDisplayParts = KT.displayParts.slice(lT), KT.displayParts = KT.displayParts.slice(0, lT));
          let MT = 0,
            fT = [];
          for (const OT of KT.displayParts)
            if (Pk.has(OT.text) ? MT++ : wk.has(OT.text) && MT--, "lineBreak" !== OT.kind) {
              if ("space" === OT.kind) {
                if (0 === fT.length) continue;
                fT.push({
                  kind: "space",
                  text: " "
                })
              } else fT.push(OT);
              0 === MT && "," === OT.text && (kT.parameters.push({
                displayParts: fT
              }), fT = [])
            } return fT.length > 0 && kT.parameters.push({
            displayParts: fT
          }), kT.documentation = KT.documentation, [{
            pos: OT,
            end: yT,
            above: !0,
            create: dk(bk(kT))
          }]
        }
        const fT = [];
        for (const TT of KT.displayParts) fT.push({
          str: TT.text,
          style: {
            color: mk.text
          }
        });
        if (KT.documentation) {
          fT.push("\n\n");
          for (const TT of KT.documentation) fT.push({
            str: TT.text,
            style: {
              color: mk.docs
            }
          })
        }
        return [{
          pos: OT,
          end: yT,
          above: !0,
          create: dk(fT)
        }]
      }
    }
    const gk = {
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
      semicolons: tT().SemicolonPreference.Insert
    };
    const Uk = KT.l.define(),
      Yk = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Bk(TT) {
      let {
        isLobbyCode: kT,
        code: cT,
        onChange: yT,
        canEditCode: CT,
        setTemporaryMessage: vT,
        close: PT,
        showTooltips: UT,
        lightMode: YT,
        collabState: WT,
        onRemoteDocChange: nT,
        files: pT,
        activePath: iT,
        pluginName: sT,
        pluginFile: Tk,
        pluginSource: ck,
        setActiveDocReplacer: lk,
        showAiHints: Kk,
        canAiChangeCode: Ok = CT
      } = TT;
      const [yk, fk] = (0, OT.useState)(null), xk = null === WT || void 0 === WT ? void 0 : WT.version, Ik = null === WT || void 0 === WT ? void 0 : WT.clientID, Ak = (0, OT.useRef)({
        isLobbyCode: kT,
        files: pT,
        code: cT,
        activePath: iT
      }), Ck = (0, OT.useRef)(nT);
      Ck.current = nT;
      const jk = (0, OT.useRef)(null),
        vk = (0, OT.useRef)(WT);
      vk.current = WT;
      const tk = (0, OT.useRef)(null),
        Qk = (0, OT.useRef)(null),
        Sk = (0, OT.useRef)(null),
        Dk = (0, OT.useRef)(PT);
      Dk.current = PT;
      const ak = (0, OT.useRef)(cT);
      ak.current = cT;
      const Pk = (0, OT.useRef)(ck);
      Pk.current = ck;
      const wk = function(TT, kT, cT, lT) {
        return cT ? `/plugin-preview/${cT}/${null!==lT&&void 0!==lT?lT:"index.ts"}` : TT ? Vk(null !== kT && void 0 !== kT ? kT : DT.g) : Gk
      }(kT, iT, sT, Tk);
      (0, OT.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: TT,
            files: kT,
            code: cT,
            activePath: lT
          } = Ak.current, MT = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: tT().ModuleKind.ESNext,
            moduleResolution: tT().ModuleResolutionKind.Bundler,
            target: tT().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(ST.g).map((TT => [TT.specifier, [TT.typesVfsPath]])))
            }
          }, KT = new Map, OT = [];
          if (TT) {
            const TT = null !== kT && void 0 !== kT ? kT : {
              [DT.g]: cT || "\n"
            };
            for (const [kT, cT] of Object.entries(TT)) {
              const TT = Vk(kT);
              KT.set(TT, cT || "\n"), OT.push(TT)
            }
            const MT = Vk(null !== lT && void 0 !== lT ? lT : DT.g);
            KT.has(MT) ? KT.set(MT, cT || "\n") : (KT.set(MT, cT || "\n"), OT.push(MT)), KT.set("/node_modules/@bloxd/index.d.ts", IT.default), OT.push("/node_modules/@bloxd/index.d.ts");
            for (const kT of Object.values(ST.g)) {
              KT.set(kT.typesVfsPath, kT.types), OT.push(kT.typesVfsPath);
              for (const [TT, cT] of Object.entries(kT.files)) {
                const lT = `/plugin-preview/${kT.name}/${TT}`;
                KT.set(lT, cT || "\n"), OT.push(lT)
              }
            }
          } else KT.set(Gk, cT || "\n"), OT.push(Gk);
          KT.set("/globals.d.ts", TT ? xT.b : fT.d), KT.set("/lib.d.ts", AT.d), OT.push("/globals.d.ts", "/lib.d.ts");
          const yT = jT.d(KT),
            CT = jT.h(yT, OT, tT(), MT);
          fk({
            Th: CT,
            fsMap: KT
          })
        }()
      }), []), (0, OT.useEffect)((() => {
        var TT, lT;
        if (!yk || !kT) return;
        const {
          Th: MT,
          fsMap: KT
        } = yk;
        if (function(TT, kT, cT) {
            const lT = new Set;
            for (const [MT, KT] of Object.entries(cT)) {
              const cT = Vk(MT);
              lT.add(cT);
              const OT = KT || "\n";
              kT.get(cT) !== OT && (kT.set(cT, OT), Ek(TT, cT, OT))
            }
            for (const MT of [...kT.keys()]) "/globals.d.ts" === MT || "/lib.d.ts" === MT || MT.startsWith("/node_modules/") || MT.startsWith("/plugin-preview/") || lT.has(MT) || (kT.delete(MT), TT.getSourceFile(MT) && TT.deleteFile(MT))
          }(MT, KT, null !== pT && void 0 !== pT ? pT : {
            [DT.g]: cT || "\n"
          }), sT) return void Ek(MT, wk, ck || "\n");
        const OT = null !== (TT = null === (lT = jk.current) || void 0 === lT ? void 0 : lT.state.doc.toString()) && void 0 !== TT ? TT : cT;
        Ek(MT, wk, OT || "\n")
      }), [pT, iT, yk, sT, ck, wk, cT, kT]), (0, OT.useEffect)((() => {
        if (!yk) return;
        const {
          Th: TT
        } = yk;
        Ek(TT, wk, (sT ? ck : cT) || "\n")
      }), [cT, sT, ck, wk, yk]), (0, OT.useEffect)((() => () => {
        Qk.current && (Qk.current(), Qk.current = null)
      }), []), (0, OT.useEffect)((() => (lk(((TT, kT) => {
        if (sT) return !1;
        const cT = jk.current,
          lT = vk.current,
          MT = lT ? (0, aT.w)(lT.docKey) : null;
        if (!cT || !lT || tk.current !== lT.clientID || TT !== MT) return !1;
        const KT = cT.state.doc.toString();
        return KT !== kT && cT.dispatch({
          changes: {
            from: 0,
            to: KT.length,
            insert: kT
          }
        }), !0
      })), () => {
        jk.current = null, tk.current = null, lk(null)
      })), [lk, sT]);
      const mk = kT ? sT ? null : null !== iT && void 0 !== iT ? iT : DT.g : Nk.e,
        bk = kk(jk, mk);
      Mk(jk, vT), (0, rT.g)("FormatCode", (() => {
        if (!yk || !jk.current || sT) return;
        const {
          Th: TT,
          fsMap: cT
        } = yk, lT = TT.getSourceFile(wk).getFullText();
        let MT = 0;
        if (kT && pT)
          for (const [kT, yT] of Object.entries(pT)) kT !== (null !== iT && void 0 !== iT ? iT : DT.g) && (MT += yT.length);
        const KT = function(TT, kT, cT, lT, MT) {
          const KT = TT.languageService.getFormattingEditsForDocument(lT, gk);
          if (!KT.length) return wT.d.error("Code is already formatted.");
          KT.sort(((TT, kT) => kT.span.start - TT.span.start));
          let OT = TT.getSourceFile(lT).getFullText();
          for (const yT of KT) OT = OT.slice(0, yT.span.start) + yT.Ux + OT.slice(yT.span.start + yT.span.length);
          return OT !== (cT ? (0, FT.j)(OT, MT) : (0, FT.i)(OT)) ? wT.d.error("Formatting the code will go beyond the character limit.") : wT.d.value(OT)
        }(TT, 0, kT, wk, MT);
        if (KT.isError()) return void vT({
          message: KT.asError().message,
          type: "warning"
        });
        const OT = KT.getValue();
        OT && (jk.current.dispatch({
          changes: {
            from: 0,
            to: lT.length,
            insert: OT
          },
          selection: {
            anchor: OT.length
          }
        }), Ek(TT, wk, OT), yT(OT))
      }));
      const zk = (0, OT.useMemo)((() => {
        if (!yk) return [];
        const {
          Th: TT,
          fsMap: cT
        } = yk;
        ! function(TT, kT, cT, lT) {
          if (TT.getSourceFile(cT)) return;
          const MT = lT || "\n";
          kT.set(cT, MT), TT.createFile(cT, MT)
        }(TT, cT, wk, (sT ? Pk.current : ak.current) || "\n");
        const OT = kT && Zk(sT ? null !== Tk && void 0 !== Tk ? Tk : "index.ts" : iT),
          yT = [(0, MT.b)({
            jsx: !1,
            typescript: OT
          }), KT.h.highest(KT.d.domEventHandlers({
            keydown: TT => "Escape" === TT.key ? (Dk.current(), TT.stopPropagation(), !0) : (TT.stopPropagation(), !1)
          })), (0, lT.e)({
            override: [Xk(TT, wk)]
          }), zT.k.fromClass(class {
            constructor(TT) {
              this.view = TT, this.timeout = null, this.scheduleParse()
            }
            update(TT) {
              (TT.docChanged || TT.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const TT = this.view.viewport.to;
                (0, ZT.gb)(this.view.state, TT) || (0, ZT.J)(this.view, TT, uT) || this.scheduleParse()
              }), XT))
            }
          }), ...qT, KT.d.lineWrapping, KT.o.define({
            create: Lk(TT, UT, wk),
            update(kT, cT) {
              const lT = cT.effects.some((TT => TT.is(Uk)));
              return cT.docChanged || cT.selection || lT ? (Ek(TT, wk, cT.state.doc.toString() || " "), Lk(TT, UT, wk)(cT.state)) : kT
            },
            provide: TT => KT.z.computeN([TT], (kT => kT.field(TT)))
          }), (0, KT.x)(Rk(TT, wk)), (0, NT.d)(uk(kT, TT, wk)), KT.s.fromClass(class {
            constructor(TT) {
              this.view = TT, this.searchPanel = null
            }
            update(TT) {
              const kT = TT.view.dom.querySelector(".cm-search");
              if (kT !== this.searchPanel) {
                if (this.searchPanel = kT, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (TT => {
                  "Escape" === TT.key && (0, hT.d)(this.view), TT.stopPropagation()
                }))
              }
            }
          })];
        Kk && !sT && yT.push(Fk(kT ? null !== iT && void 0 !== iT ? iT : DT.g : Nk.e, Ok));
        const fT = vk.current;
        if (fT && !sT) {
          yT.push(... function(TT, kT, cT, lT, MT) {
            let KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const OT = (0, aT.w)(cT),
              yT = zT.k.fromClass(class {
                constructor(TT) {
                  this.view = TT, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = HT.k.subscribe("codeCollab", (TT => {
                    TT.docKey === OT && TT.type === aT.c.Updates && (TT.updates ? this.applyUpdates(TT.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(TT) {
                  const kT = JSON.parse(TT).map((TT => ({
                    clientID: TT.clientID,
                    changes: bT.ChangeSet.fromJSON(TT.changes)
                  })));
                  kT.length > 0 && (this.view.dispatch((0, mT.g)(this.view.state, kT)), MT && MT(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(TT) {
                  KT && (TT.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const TT = (0, mT.i)(this.view.state);
                  if (this.pushing || !TT.length) return;
                  const kT = Date.now() - this.lastPushTime;
                  if (kT < ET) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), ET - kT)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), GT);
                  const cT = (0, mT.f)(this.view.state),
                    MT = TT.map((TT => ({
                      clientID: TT.clientID,
                      changes: TT.changes.toJSON()
                    }))),
                    KT = JSON.stringify(MT);
                  KT.length <= aT.g ? JT.gameBridge.send("sendCodeCollab", {
                    jl: aT.b.Push,
                    vl: OT,
                    tl: cT,
                    Ql: KT
                  }) : (0, eT.postJsonWithMetricsCookiesAndJsonResponse)(`${lT.gsUrl}/code/collab-push`, oT.q["collab-push"].toBuffer({
                    gameNameWithVariation: lT.gameNameWithVariation,
                    lobbyName: lT.lobbyName,
                    docKey: OT,
                    version: cT,
                    updates: KT
                  }), {
                    retries: 0
                  }).catch((TT => {
                    console.error("[CodeCollab] HTTP push failed", TT)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const TT = (0, mT.f)(this.view.state);
                  (0, eT.postJsonWithMetricsCookiesAndJsonResponse)(`${lT.gsUrl}/code/collab-pull`, oT.q["collab-pull"].toBuffer({
                    gameNameWithVariation: lT.gameNameWithVariation,
                    lobbyName: lT.lobbyName,
                    docKey: OT,
                    fromVersion: TT
                  }), {
                    retries: 1
                  }).then((TT => {
                    this.destroyed || (TT.fullDoc ? HT.k.nt("codeCollabRejoin", {
                      docKey: OT,
                      doc: TT.fullDoc,
                      version: TT.version
                    }) : this.applyUpdates(TT.updates))
                  })).catch((TT => {
                    console.error("[CodeCollab] Pull failed", TT)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const TT = Date.now();
                  if (TT - this.lastCursorSent < VT) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), VT)));
                  this.lastCursorSent = TT;
                  const kT = this.view.state.selection.main;
                  JT.gameBridge.send("sendCodeCollab", {
                    jl: aT.b.Cursor,
                    vl: OT,
                    Fl: kT.anchor,
                    rl: kT.head
                  })
                }
                destroy() {
                  this.destroyed = !0, HT.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, mT.e)({
              startVersion: TT,
              clientID: kT
            }), yT]
          }(xk, Ik, fT.docKey, fT.httpConfig, (TT => {
            var kT;
            null === (kT = Ck.current) || void 0 === kT || kT.call(Ck, TT)
          }), CT));
          const TT = function(TT, kT) {
            const cT = (0, aT.w)(TT);
            return {
              extensions: [BT],
              connect(TT) {
                if (kT) {
                  const cT = kT.map((TT => LT.of({
                    playerId: TT.playerId,
                    playerName: TT.playerName,
                    colour: TT.colour,
                    anchor: TT.anchor,
                    head: TT.head,
                    lastMoved: Date.now()
                  })));
                  cT.length > 0 && TT.dispatch({
                    effects: cT
                  })
                }
                const lT = HT.k.subscribe("codeCollab", (kT => {
                    if (kT.docKey === cT)
                      if (kT.type === aT.c.RemoteCursor) TT.dispatch({
                        effects: LT.of({
                          playerId: kT.playerId,
                          playerName: kT.playerName,
                          colour: kT.colour,
                          anchor: kT.anchor,
                          head: kT.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (kT.type === aT.c.Presence) {
                      const cT = JSON.parse(kT.peers),
                        lT = new Set(cT.map((TT => TT.playerId))),
                        MT = TT.state.field(BT),
                        KT = [];
                      for (const [TT] of MT.cursors) lT.has(TT) || KT.push(RT.of(TT));
                      KT.length > 0 && TT.dispatch({
                        effects: KT
                      })
                    }
                  })),
                  MT = setInterval((() => {
                    TT.dom.isConnected ? TT.dispatch({
                      effects: gT.of(Date.now())
                    }) : clearInterval(MT)
                  }), dT);
                return () => {
                  HT.k.unsubscribe(lT), clearInterval(MT)
                }
              }
            }
          }(fT.docKey, fT.existingCursors);
          yT.push(...TT.extensions), Sk.current = TT.connect
        } else Sk.current = null;
        return yT
      }), [kT, yk, UT, xk, Ik, wk, iT, sT, Tk, CT, Kk, Ok]);
      if (!yk || !WT && !sT) return (0, rk.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, rk.jsx)(QT.d, {})
      });
      const Jk = sT ? `plugin-${sT}-${null!==Tk&&void 0!==Tk?Tk:"index.ts"}` : WT ? `collab-${WT.clientID}` : `local-${kT}`;
      return (0, rk.jsx)(KT.w, {
        value: sT ? null !== ck && void 0 !== ck ? ck : "" : cT,
        onChange: yT,
        extensions: zk,
        className: "CodeEditorContent",
        theme: YT ? hk : "dark",
        editable: CT && !sT,
        basicSetup: Yk,
        onCreateEditor: TT => {
          var kT;
          jk.current = TT, tk.current = null !== (kT = null === WT || void 0 === WT ? void 0 : WT.clientID) && void 0 !== kT ? kT : null, bk(TT), Qk.current && Qk.current(), Sk.current && (Qk.current = Sk.current(TT))
        }
      }, Jk)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);