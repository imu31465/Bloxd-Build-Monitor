export const id = 599;
export const ids = [599];
export const modules = {
  43998: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => lX
    });
    var cU = zU(44001),
      yU = zU(44049),
      QU = zU(44058),
      AU = zU(61),
      FU = zU(73),
      oU = zU(44073),
      DU = zU(44079),
      EU = zU(5290),
      YU = zU(44088),
      NU = zU(1978),
      IU = zU(44093),
      pU = zU(44108),
      aU = zU.n(pU),
      tU = zU(44063),
      gU = zU(44068),
      kU = zU(1384),
      GU = zU(37568),
      BU = zU(1258),
      ZU = zU(2609),
      RU = zU(37471),
      PU = zU(1492),
      WU = zU(646),
      dU = zU(1262),
      LU = zU(44146),
      eU = zU(44009),
      CU = zU(44014),
      wU = zU(2005),
      qU = zU(4139),
      OU = zU(31),
      SU = zU(1131);
    const rU = 1e4,
      uU = 250,
      fU = 250;
    var iU = zU(44029);
    const HU = 50,
      MU = 100;
    const vU = 2e3,
      VU = eU.H.define(),
      sU = eU.H.define(),
      nU = eU.H.define();
    class mU extends CU.o {
      constructor(UU, XU, zU) {
        super(), this.colour = UU, this.playerName = XU, this.showName = zU
      }
      toDOM() {
        const UU = document.createElement("span");
        UU.className = "cm-remote-cursor-wrapper", UU.style.borderLeftColor = this.colour;
        const XU = document.createElement("span");
        if (XU.className = "cm-remote-cursor", XU.style.borderLeftColor = this.colour, UU.appendChild(XU), this.showName) {
          const XU = document.createElement("span");
          XU.className = "cm-remote-cursor-name", XU.style.backgroundColor = this.colour, XU.textContent = this.playerName, UU.appendChild(XU)
        }
        return UU
      }
      eq(UU) {
        return this.colour === UU.colour && this.playerName === UU.playerName && this.showName === UU.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function lU(UU, XU) {
      const zU = [],
        cU = [];
      for (const [, AU] of UU) {
        const UU = XU - AU.lastMoved < vU;
        if (zU.push({
            pos: AU.head,
            decoration: CU.c.widget({
              widget: new mU(AU.colour, AU.playerName, UU),
              side: 1
            })
          }), AU.anchor !== AU.head) {
          const UU = Math.min(AU.anchor, AU.head),
            XU = Math.max(AU.anchor, AU.head);
          cU.push({
            from: UU,
            to: XU,
            decoration: CU.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${AU.colour}33`
              }
            })
          })
        }
      }
      const yU = new eU.z,
        QU = [];
      for (const AU of zU) QU.push({
        bias: 1,
        deco: AU.decoration,
        from: AU.pos,
        to: AU.pos
      });
      for (const AU of cU) QU.push({
        bias: 0,
        deco: AU.decoration,
        from: AU.from,
        to: AU.to
      });
      QU.sort(((UU, XU) => UU.from - XU.from || UU.deco.startSide - XU.deco.startSide || UU.bias - XU.bias));
      for (const AU of QU) yU.add(AU.from, AU.to, AU.deco);
      return yU.finish()
    }
    const xU = eU.L.define({
      create: () => ({
        cursors: new Map,
        hy: CU.c.none
      }),
      update(UU, XU) {
        let zU = UU.cursors,
          cU = !1;
        if (XU.docChanged) {
          const UU = new Map;
          for (const [cU, yU] of zU) UU.set(cU, {
            ...yU,
            anchor: XU.changes.mapPos(yU.anchor, 1),
            head: XU.changes.mapPos(yU.head, 1)
          });
          zU = UU, cU = !0
        }
        for (const yU of XU.effects)
          if (yU.is(VU)) {
            if (!Number.isInteger(yU.value.anchor) || !Number.isInteger(yU.value.head)) {
              console.warn(`Code Editor: ignored player ${yU.value.playerId}'s cursor at ${yU.value.anchor}-${yU.value.head}`);
              continue
            }
            const QU = XU.state.doc.length,
              AU = {
                ...yU.value,
                anchor: Math.min(yU.value.anchor, QU),
                head: Math.min(yU.value.head, QU)
              };
            zU === UU.cursors && (zU = new Map(zU)), zU.set(AU.playerId, AU), cU = !0
          } else yU.is(sU) ? zU.has(yU.value) && (zU === UU.cursors && (zU = new Map(zU)), zU.delete(yU.value), cU = !0) : yU.is(nU) && (cU = !0);
        return cU ? {
          cursors: zU,
          hy: lU(zU, Date.now())
        } : UU
      },
      provide: UU => CU.h.hy.from(UU, (UU => UU.hy))
    });
    const JU = eU.H.define(),
      jU = CU.c.mark({
        class: "CodeInsertFlash"
      }),
      KU = eU.L.define({
        create: () => CU.c.none,
        update(UU, XU) {
          let zU = UU.map(XU.changes);
          for (const cU of XU.effects) cU.is(JU) && (zU = cU.value ? CU.c.set(jU.range(cU.value.from, cU.value.to)) : CU.c.none);
          return zU
        },
        provide: UU => CU.h.hy.from(UU)
      }),
      bU = eU.L.define({
        create: () => !1,
        update: (UU, XU) => UU || void 0 !== XU.annotation(eU.P.userEvent) && !XU.annotation(eU.P.remote)
      }),
      TU = [KU, bU];

    function hU(UU) {
      return UU.field(bU)
    }
    const UX = 3e4;

    function XX(UU, XU) {
      const zU = (0, AU.useRef)(null);
      (0, AU.useEffect)((() => {
        var UU;
        (null === (UU = zU.current) || void 0 === UU ? void 0 : UU.path) !== XU && (zU.current = null)
      }), [XU]);
      const cU = UU => {
        var cU;
        const yU = zU.current;
        if (null === UU || void 0 === UU || !UU.dom.isConnected || !yU || yU.path !== XU) return;
        zU.current = null;
        const {
          cY: AU
        } = yU;
        if (AU && null !== AU.text && performance.now() - AU.at < UX) {
          const XU = function(UU, XU) {
            if (UU === XU) return null;
            const zU = Math.min(UU.length, XU.length);
            let cU = 0;
            for (; cU < zU && UU[cU] === XU[cU];) cU++;
            let yU = 0;
            for (; yU < zU - cU && UU[UU.length - 1 - yU] === XU[XU.length - 1 - yU];) yU++;
            return {
              from: cU,
              to: UU.length - yU,
              insert: XU.slice(cU, XU.length - yU)
            }
          }(UU.state.doc.toString(), AU.text);
          null !== XU && UU.dispatch({
            changes: XU,
            userEvent: AU.placed ? "input" : void 0
          })
        }
        const {
          doc: FU
        } = UU.state, oU = FU.line(Math.min(Math.max(yU.line, 1), FU.lines)), DU = oU.from + Math.min(null !== (cU = yU.column) && void 0 !== cU ? cU : 0, oU.length);
        UU.dispatch({
          selection: {
            anchor: DU
          },
          effects: QU.c.scrollIntoView(DU, {
            y: "center"
          }),
          userEvent: null !== AU && void 0 !== AU && AU.placed ? "select" : void 0
        }), !1 !== (null === AU || void 0 === AU ? void 0 : AU.focused) && UU.focus()
      };
      return (0, PU.f)("CodeEditorGoToLine", (XU => {
        zU.current = XU, cU(UU.current)
      })), (0, PU.f)("CodeEditorKeepEdits", (() => {
        const cU = UU.current;
        if (null === cU || !cU.dom.isConnected || null === XU) return;
        const {
          doc: yU,
          selection: QU
        } = cU.state, {
          head: AU
        } = QU.main, FU = yU.lineAt(AU), oU = {
          text: (0, LU.m)(cU.state).length > 0 ? yU.toString() : null,
          at: performance.now(),
          focused: cU.hasFocus,
          placed: hU(cU.state)
        };
        zU.current = {
          path: XU,
          line: FU.number,
          column: AU - FU.from,
          cY: oU
        }
      })), UU => {
        var yU;
        const QU = zU.current;
        !1 === (null === QU || void 0 === QU || null === (yU = QU.cY) || void 0 === yU ? void 0 : yU.focused) && QU.path === XU || UU.focus(), cU(UU)
      }
    }
    var zX = zU(4771),
      cX = zU(1193);

    function yX(UU, XU) {
      const {
        t: zU
      } = (0, cX.I)();
      (0, PU.f)("CodeEditorInsertText", (cU => {
        let {
          text: yU,
          focus: QU
        } = cU;
        const AU = UU.current,
          FU = null !== AU && void 0 !== AU && AU.dom.isConnected ? function(UU, XU) {
            if (!hU(UU)) return null;
            const {
              from: zU,
              to: cU
            } = UU.selection.main, yU = zU + XU.length;
            return {
              changes: {
                from: zU,
                to: cU,
                insert: XU
              },
              selection: {
                anchor: yU
              },
              effects: [CU.h.scrollIntoView(yU, {
                y: "center"
              }), JU.of({
                from: zU,
                to: yU
              })],
              userEvent: "input"
            }
          }(AU.state, yU) : null;
        null !== AU && null !== FU ? (AU.dispatch(FU), QU && AU.focus(), setTimeout((() => {
          AU.dom.isConnected && AU.dispatch({
            effects: JU.of(null)
          })
        }), 1500)) : (0, zX.e)(yU).then((() => {
          XU({
            message: zU("codeEditorWorld:pickCopied", {
              coords: yU
            }),
            type: "success"
          })
        }), (UU => {
          console.error("Pick could not copy the coordinates", UU), XU({
            message: zU("codeEditorWorld:pickPlaceCursor", {
              coords: yU
            }),
            type: "warning"
          })
        }))
      }))
    }
    var QX = zU(44040);
    const AX = "#e45649",
      FX = "#383a42",
      oX = "#696c77",
      DX = "#986801",
      EX = "#e5e5e6",
      YX = "#fafafa",
      NX = "#eaeaeb",
      IX = "#526fff",
      pX = CU.h.theme({
        "&": {
          color: FX,
          backgroundColor: YX
        },
        ".cm-content": {
          caretColor: IX
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: IX
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: FX
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
          backgroundColor: YX,
          color: oX,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: EX
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: NX
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: NX,
          borderBottomColor: NX
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: EX,
            color: FX
          }
        }
      }, {
        dark: !1
      }),
      aX = iU.e.define([{
        tag: QX.k.keyword,
        color: "#a626a4"
      }, {
        tag: [QX.k.name, QX.k.deleted, QX.k.character, QX.k.propertyName, QX.k.macroName],
        color: AX
      }, {
        tag: [QX.k.function(QX.k.variableName), QX.k.labelName],
        color: "#4078f2"
      }, {
        tag: [QX.k.color, QX.k.constant(QX.k.name), QX.k.standard(QX.k.name)],
        color: DX
      }, {
        tag: [QX.k.definition(QX.k.name), QX.k.separator],
        color: FX
      }, {
        tag: [QX.k.typeName, QX.k.className, QX.k.number, QX.k.changed, QX.k.annotation, QX.k.modifier, QX.k.self, QX.k.namespace],
        color: "#c18401"
      }, {
        tag: [QX.k.operator, QX.k.operatorKeyword, QX.k.url, QX.k.escape, QX.k.regexp, QX.k.link, QX.k.special(QX.k.string)],
        color: "#0184bc"
      }, {
        tag: [QX.k.meta, QX.k.comment],
        color: oX
      }, {
        tag: QX.k.strong,
        fontWeight: "bold"
      }, {
        tag: QX.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: QX.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: QX.k.link,
        color: oX,
        textDecoration: "underline"
      }, {
        tag: QX.k.heading,
        fontWeight: "bold",
        color: AX
      }, {
        tag: [QX.k.atom, QX.k.bool, QX.k.special(QX.k.variableName)],
        color: DX
      }, {
        tag: [QX.k.processingInstruction, QX.k.string, QX.k.inserted],
        color: "#50a14f"
      }, {
        tag: QX.k.invalid,
        color: "#000000"
      }]),
      tX = [pX, (0, iU.cb)(aX)];
    var gX = zU(37637),
      kX = zU(44149);
    const GX = QU.g.define(),
      BX = QU.j.define({
        create: () => !1,
        update(UU, XU) {
          for (const zU of XU.effects) zU.is(GX) && (UU = zU.value);
          return UU
        }
      }),
      ZX = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function RX(UU, XU) {
      return [BX, QU.m.fromClass(class {
        constructor(UU) {
          this.view = UU, this.onDown = UU => {
            const XU = UU.target instanceof Element && null !== UU.target.closest(".cm-tooltip");
            0 !== UU.button || XU || this.view.state.field(BX) || this.view.dispatch({
              effects: GX.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(BX) && this.view.dispatch({
              effects: GX.of(!1)
            })
          }, UU.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), QU.p.compute(["selection", BX], (zU => function(UU, XU, zU) {
        const cU = UU.selection.main;
        return cU.empty || UU.field(BX) || UU.sliceDoc(cU.from, cU.to).trim().length < 2 ? null : {
          pos: cU.from,
          above: !0,
          create: UU => {
            const cU = document.createElement("div");
            cU.className = "CodeSelectionActions", cU.setAttribute("role", "toolbar"), cU.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: yU,
                label: QU
              }
              of ZX) {
              if (!zU && "explain" !== yU) continue;
              const AU = document.createElement("button");
              AU.type = "button", AU.textContent = QU, "change" !== yU && (AU.title = kX.b, AU.dataset.asksAi = "true"), AU.addEventListener("mousedown", (UU => {
                UU.preventDefault()
              })), AU.addEventListener("click", (() => {
                const zU = UU.state.selection.main;
                if (zU.empty) return;
                const cU = {
                  action: yU,
                  path: XU,
                  fromLine: UU.state.doc.lineAt(zU.from).number,
                  toLine: UU.state.doc.lineAt(zU.to > zU.from && UU.state.doc.lineAt(zU.to).from === zU.to ? zU.to - 1 : zU.to).number,
                  text: UU.state.sliceDoc(zU.from, zU.to)
                };
                OU.k.UY("WorldCodeAiSelection", cU), UU.dispatch({
                  selection: {
                    anchor: zU.to
                  }
                })
              })), cU.appendChild(AU)
            }
            return {
              dom: cU
            }
          }
        }
      }(zU, UU, XU)))]
    }
    var PX = zU(1305);
    const WX = new Set(["(", "{", "[", "<"]),
      dX = new Set([")", "}", "]", ">"]),
      LX = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function eX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function zU(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = [];
        for (const yU of UU) {
          let UU;
          UU = "punctuation" === yU.kind ? LX.text : "parameterName" === yU.kind ? LX.parameterName : XU, cU.push({
            str: yU.text,
            style: {
              color: UU,
              opacity: zU ? .5 : void 0
            }
          })
        }
        return cU
      }
      const cU = [];
      if (cU.push(...zU(UU.prefixDisplayParts, LX.text)), UU.parameters.length > 0) {
        cU.push("\n");
        for (let yU = 0; yU < UU.parameters.length; yU++) {
          const QU = UU.parameters[yU];
          cU.push("\t"), cU.push(...zU(QU.displayParts, LX.parameter, null !== XU && yU !== XU)), cU.push("\n")
        }
      }
      return cU.push(...zU(UU.suffixDisplayParts, LX.suffix)), UU.documentation && (cU.push("\n\n"), cU.push(...zU(UU.documentation, LX.docs))), cU
    }
    var CX = function(UU) {
      return UU[UU.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", UU[UU.DuplicateIdentifier = 2300] = "DuplicateIdentifier", UU
    }(CX || {});
    const wX = new Set([CX.DuplicateIdentifier]),
      qX = new Set([CX.VariableDefinedElsewhere]),
      OX = new Set([]),
      SX = "/index.js";

    function rX(UU) {
      return "/" + UU
    }

    function uX(UU, XU, zU) {
      UU.getSourceFile(XU) && UU.deleteFile(XU), UU.createFile(XU, zU)
    }

    function fX(UU) {
      return !!UU && ((0, ZU.l)(UU) || (0, ZU.j)(UU))
    }

    function iX(UU, XU, zU) {
      return () => {
        let cU = [...XU.languageService.getSemanticDiagnostics(zU), ...XU.languageService.getSyntacticDiagnostics(zU)];
        return cU = cU.filter((UU => !(0, WU.P)(UU.start) && !(0, WU.P)(UU.length) && !wX.has(UU.code))), UU || (cU = cU.filter((UU => !qX.has(UU.code)))), cU.map((UU => ({
          from: UU.start,
          to: UU.start + UU.length,
          message: "string" === typeof UU.messageText ? UU.messageText : UU.messageText.messageText,
          severity: OX.has(UU.code) ? "warning" : "error"
        })))
      }
    }

    function HX(UU, XU) {
      return zU => {
        var cU, yU;
        const QU = UU.languageService.getCompletionsAtPosition(XU, zU.pos, {});
        if (!QU) return {
          from: zU.pos,
          options: []
        };
        let AU = null !== (cU = null === (yU = QU.optionalReplacementSpan) || void 0 === yU ? void 0 : yU.start) && void 0 !== cU ? cU : zU.pos;
        if (!QU.optionalReplacementSpan) {
          const UU = zU.state.doc.sliceString(0, zU.pos);
          for (; AU > 0 && /[\w$]/.test(UU[AU - 1]);) AU--
        }
        return QU.entries = QU.entries.filter((UU => UU.kind !== aU().ScriptElementKind.warning)), {
          from: AU,
          options: QU.entries.map((cU => {
            var yU, QU, FU, oU;
            const DU = UU.languageService.getCompletionEntryDetails(XU, zU.pos, cU.name, {}, cU.source, {}, cU.data),
              EU = null !== (yU = null === (QU = cU.replacementSpan) || void 0 === QU ? void 0 : QU.start) && void 0 !== yU ? yU : AU,
              YU = cU.replacementSpan ? cU.replacementSpan.start + cU.replacementSpan.length : zU.pos,
              NU = null !== (FU = cU.insertText) && void 0 !== FU ? FU : cU.name;
            return {
              label: cU.name,
              detail: null === DU || void 0 === DU ? void 0 : DU.displayParts.map((UU => UU.text)).join(""),
              info: null === DU || void 0 === DU || null === (oU = DU.documentation) || void 0 === oU ? void 0 : oU.map((UU => UU.text)).join(""),
              apply: UU => {
                UU.dispatch({
                  changes: {
                    from: EU,
                    to: YU,
                    insert: NU
                  },
                  selection: {
                    anchor: EU + NU.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function MX(UU) {
      return XU => {
        const zU = document.createElement("div");
        zU.className = "CodeEditorTooltip";
        let cU = !1;
        return queueMicrotask((() => {
          cU || (FU.render((0, PX.jsx)(NU.d, {
            text: UU
          }), zU), XU.requestMeasure())
        })), {
          dom: zU,
          destroy() {
            cU = !0, queueMicrotask((() => {
              FU.unmountComponentAtNode(zU)
            }))
          }
        }
      }
    }

    function vX(UU, XU, zU) {
      return cU => {
        var yU;
        if (!XU) return [];
        const QU = null === (yU = cU.selection.Qt[0]) || void 0 === yU ? void 0 : yU.head;
        if (void 0 === QU) return [];
        const AU = UU.languageService.getSignatureHelpItems(zU, QU, {});
        if (!AU || !AU.items.length) return [];
        const FU = AU.applicableSpan.start - AU.items[0].prefixDisplayParts.map((UU => UU.text)).join("").length,
          oU = AU.applicableSpan.start,
          DU = cU.doc.lineAt(QU),
          EU = DU.from,
          YU = Math.min(DU.to, QU);
        let NU, IU;
        return FU < EU ? (NU = EU, IU = YU) : (NU = FU, IU = oU), [{
          pos: NU,
          end: IU,
          above: !1,
          create: MX(eX(AU.items[0], AU.argumentIndex))
        }]
      }
    }

    function VX(UU, XU) {
      return (zU, cU, yU) => {
        const QU = UU.languageService.getQuickInfoAtPosition(XU, cU);
        if (!QU) return [];
        const AU = QU.textSpan.start,
          FU = QU.textSpan.start + QU.textSpan.length;
        if (cU < AU || cU >= FU) return [];
        if (QU.kind === aU().ScriptElementKind.memberFunctionElement || QU.kind === aU().ScriptElementKind.variableElement && "declare" === QU.kindModifiers) {
          const UU = QU.displayParts.findIndex((UU => "space" === UU.kind)); - 1 !== UU && (QU.displayParts = QU.displayParts.slice(UU));
          const XU = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            zU = QU.displayParts.findIndex((UU => "punctuation" === UU.kind && "(" === UU.text)); - 1 !== zU && (XU.prefixDisplayParts = QU.displayParts.slice(0, zU + 1), QU.displayParts = QU.displayParts.slice(zU + 1));
          const cU = QU.displayParts.findLastIndex((UU => "punctuation" === UU.kind && ")" === UU.text)); - 1 !== cU && (XU.suffixDisplayParts = QU.displayParts.slice(cU), QU.displayParts = QU.displayParts.slice(0, cU));
          let yU = 0,
            oU = [];
          for (const AU of QU.displayParts)
            if (WX.has(AU.text) ? yU++ : dX.has(AU.text) && yU--, "lineBreak" !== AU.kind) {
              if ("space" === AU.kind) {
                if (0 === oU.length) continue;
                oU.push({
                  kind: "space",
                  text: " "
                })
              } else oU.push(AU);
              0 === yU && "," === AU.text && (XU.parameters.push({
                displayParts: oU
              }), oU = [])
            } return oU.length > 0 && XU.parameters.push({
            displayParts: oU
          }), XU.documentation = QU.documentation, [{
            pos: AU,
            end: FU,
            above: !0,
            create: MX(eX(XU))
          }]
        }
        const oU = [];
        for (const UU of QU.displayParts) oU.push({
          str: UU.text,
          style: {
            color: LX.text
          }
        });
        if (QU.documentation) {
          oU.push("\n\n");
          for (const UU of QU.documentation) oU.push({
            str: UU.text,
            style: {
              color: LX.docs
            }
          })
        }
        return [{
          pos: AU,
          end: FU,
          above: !0,
          create: MX(oU)
        }]
      }
    }
    const sX = {
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
      semicolons: aU().SemicolonPreference.Insert
    };
    const nX = QU.g.define(),
      mX = {
        lineNumbers: !0,
        tabSize: 4
      };

    function lX(UU) {
      let {
        isLobbyCode: XU,
        code: zU,
        onChange: FU,
        canEditCode: NU,
        setTemporaryMessage: pU,
        close: WU,
        showTooltips: mU,
        lightMode: lU,
        collabState: JU,
        onRemoteDocChange: jU,
        files: KU,
        activePath: bU,
        pluginName: hU,
        pluginFile: UX,
        pluginSource: zX,
        setActiveDocReplacer: cX,
        showAiHints: QX,
        canAiChangeCode: AX = NU
      } = UU;
      const [FX, oX] = (0, AU.useState)(null), DX = null === JU || void 0 === JU ? void 0 : JU.version, EX = null === JU || void 0 === JU ? void 0 : JU.clientID, YX = (0, AU.useRef)({
        isLobbyCode: XU,
        files: KU,
        code: zU,
        activePath: bU
      }), NX = (0, AU.useRef)(jU);
      NX.current = jU;
      const IX = (0, AU.useRef)(null),
        pX = (0, AU.useRef)(JU);
      pX.current = JU;
      const aX = (0, AU.useRef)(null),
        kX = (0, AU.useRef)(null),
        GX = (0, AU.useRef)(null),
        BX = (0, AU.useRef)(WU);
      BX.current = WU;
      const ZX = (0, AU.useRef)(zU);
      ZX.current = zU;
      const WX = (0, AU.useRef)(zX);
      WX.current = zX;
      const dX = function(UU, XU, zU, cU) {
        return zU ? `/plugin-preview/${zU}/${null!==cU&&void 0!==cU?cU:"index.ts"}` : UU ? rX(null !== XU && void 0 !== XU ? XU : BU.d) : SX
      }(XU, bU, hU, UX);
      (0, AU.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: UU,
            files: XU,
            code: zU,
            activePath: cU
          } = YX.current, yU = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: aU().ModuleKind.ESNext,
            moduleResolution: aU().ModuleResolutionKind.Bundler,
            target: aU().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(GU.i).map((UU => [UU.specifier, [UU.typesVfsPath]])))
            }
          }, QU = new Map, AU = [];
          if (UU) {
            const UU = null !== XU && void 0 !== XU ? XU : {
              [BU.d]: zU || "\n"
            };
            for (const [XU, zU] of Object.entries(UU)) {
              const UU = rX(XU);
              QU.set(UU, zU || "\n"), AU.push(UU)
            }
            const yU = rX(null !== cU && void 0 !== cU ? cU : BU.d);
            QU.has(yU) ? QU.set(yU, zU || "\n") : (QU.set(yU, zU || "\n"), AU.push(yU)), QU.set("/node_modules/@bloxd/index.d.ts", EU.default), AU.push("/node_modules/@bloxd/index.d.ts");
            for (const XU of Object.values(GU.i)) {
              QU.set(XU.typesVfsPath, XU.types), AU.push(XU.typesVfsPath);
              for (const [UU, zU] of Object.entries(XU.files)) {
                const cU = `/plugin-preview/${XU.name}/${UU}`;
                QU.set(cU, zU || "\n"), AU.push(cU)
              }
            }
          } else QU.set(SX, zU || "\n"), AU.push(SX);
          QU.set("/globals.d.ts", UU ? DU.e : oU.c), QU.set("/lib.d.ts", YU.b), AU.push("/globals.d.ts", "/lib.d.ts");
          const FU = IU.e(QU),
            NU = IU.g(FU, AU, aU(), yU);
          oX({
            GY: NU,
            fsMap: QU
          })
        }()
      }), []), (0, AU.useEffect)((() => {
        var UU, cU;
        if (!FX || !XU) return;
        const {
          GY: yU,
          fsMap: QU
        } = FX;
        if (function(UU, XU, zU) {
            const cU = new Set;
            for (const [yU, QU] of Object.entries(zU)) {
              const zU = rX(yU);
              cU.add(zU);
              const AU = QU || "\n";
              XU.get(zU) !== AU && (XU.set(zU, AU), uX(UU, zU, AU))
            }
            for (const yU of [...XU.keys()]) "/globals.d.ts" === yU || "/lib.d.ts" === yU || yU.startsWith("/node_modules/") || yU.startsWith("/plugin-preview/") || cU.has(yU) || (XU.delete(yU), UU.getSourceFile(yU) && UU.deleteFile(yU))
          }(yU, QU, null !== KU && void 0 !== KU ? KU : {
            [BU.d]: zU || "\n"
          }), hU) return void uX(yU, dX, zX || "\n");
        const AU = null !== (UU = null === (cU = IX.current) || void 0 === cU ? void 0 : cU.state.doc.toString()) && void 0 !== UU ? UU : zU;
        uX(yU, dX, AU || "\n")
      }), [KU, bU, FX, hU, zX, dX, zU, XU]), (0, AU.useEffect)((() => {
        if (!FX) return;
        const {
          GY: UU
        } = FX;
        uX(UU, dX, (hU ? zX : zU) || "\n")
      }), [zU, hU, zX, dX, FX]), (0, AU.useEffect)((() => () => {
        kX.current && (kX.current(), kX.current = null)
      }), []), (0, AU.useEffect)((() => (cX(((UU, XU) => {
        if (hU) return !1;
        const zU = IX.current,
          cU = pX.current,
          yU = cU ? (0, ZU.t)(cU.docKey) : null;
        if (!zU || !cU || aX.current !== cU.clientID || UU !== yU) return !1;
        const QU = zU.state.doc.toString();
        return QU !== XU && zU.dispatch({
          changes: {
            from: 0,
            to: QU.length,
            insert: XU
          }
        }), !0
      })), () => {
        IX.current = null, aX.current = null, cX(null)
      })), [cX, hU]);
      const LX = XU ? hU ? null : null !== bU && void 0 !== bU ? bU : BU.d : gX.b,
        eX = XX(IX, LX);
      yX(IX, pU), (0, PU.f)("FormatCode", (() => {
        if (!FX || !IX.current || hU) return;
        const {
          GY: UU,
          fsMap: zU
        } = FX, cU = UU.getSourceFile(dX).getFullText();
        let yU = 0;
        if (XU && KU)
          for (const [XU, FU] of Object.entries(KU)) XU !== (null !== bU && void 0 !== bU ? bU : BU.d) && (yU += FU.length);
        const QU = function(UU, XU, zU, cU, yU) {
          const QU = UU.languageService.getFormattingEditsForDocument(cU, sX);
          if (!QU.length) return dU.c.error("Code is already formatted.");
          QU.sort(((UU, XU) => XU.span.start - UU.span.start));
          let AU = UU.getSourceFile(cU).getFullText();
          for (const FU of QU) AU = AU.slice(0, FU.span.start) + FU.gD + AU.slice(FU.span.start + FU.span.length);
          return AU !== (zU ? (0, RU.j)(AU, yU) : (0, RU.h)(AU)) ? dU.c.error("Formatting the code will go beyond the character limit.") : dU.c.value(AU)
        }(UU, 0, XU, dX, yU);
        if (QU.isError()) return void pU({
          message: QU.asError().message,
          type: "warning"
        });
        const AU = QU.getValue();
        AU && (IX.current.dispatch({
          changes: {
            from: 0,
            to: cU.length,
            insert: AU
          },
          selection: {
            anchor: AU.length
          }
        }), uX(UU, dX, AU), FU(AU))
      }));
      const CX = (0, AU.useMemo)((() => {
        if (!FX) return [];
        const {
          GY: UU,
          fsMap: zU
        } = FX;
        ! function(UU, XU, zU, cU) {
          if (UU.getSourceFile(zU)) return;
          const yU = cU || "\n";
          XU.set(zU, yU), UU.createFile(zU, yU)
        }(UU, zU, dX, (hU ? WX.current : ZX.current) || "\n");
        const AU = XU && fX(hU ? null !== UX && void 0 !== UX ? UX : "index.ts" : bU),
          FU = [(0, yU.c)({
            jsx: !1,
            typescript: AU
          }), QU.e.highest(QU.c.domEventHandlers({
            keydown: UU => "Escape" === UU.key ? (BX.current(), UU.stopPropagation(), !0) : (UU.stopPropagation(), !1)
          })), (0, cU.d)({
            override: [HX(UU, dX)]
          }), CU.n.fromClass(class {
            constructor(UU) {
              this.view = UU, this.timeout = null, this.scheduleParse()
            }
            update(UU) {
              (UU.docChanged || UU.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const UU = this.view.viewport.to;
                (0, iU.db)(this.view.state, UU) || (0, iU.H)(this.view, UU, HU) || this.scheduleParse()
              }), MU))
            }
          }), ...TU, QU.c.lineWrapping, QU.j.define({
            create: vX(UU, mU, dX),
            update(XU, zU) {
              const cU = zU.effects.some((UU => UU.is(nX)));
              return zU.docChanged || zU.selection || cU ? (uX(UU, dX, zU.state.doc.toString() || " "), vX(UU, mU, dX)(zU.state)) : XU
            },
            provide: UU => QU.p.computeN([UU], (XU => XU.field(UU)))
          }), (0, QU.o)(VX(UU, dX)), (0, gU.d)(iX(XU, UU, dX)), QU.m.fromClass(class {
            constructor(UU) {
              this.view = UU, this.searchPanel = null
            }
            update(UU) {
              const XU = UU.view.dom.querySelector(".cm-search");
              if (XU !== this.searchPanel) {
                if (this.searchPanel = XU, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (UU => {
                  "Escape" === UU.key && (0, tU.c)(this.view), UU.stopPropagation()
                }))
              }
            }
          })];
        QX && !hU && FU.push(RX(XU ? null !== bU && void 0 !== bU ? bU : BU.d : gX.b, AX));
        const oU = pX.current;
        if (oU && !hU) {
          FU.push(... function(UU, XU, zU, cU, yU) {
            let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const AU = (0, ZU.t)(zU),
              FU = CU.n.fromClass(class {
                constructor(UU) {
                  this.view = UU, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = OU.k.subscribe("codeCollab", (UU => {
                    UU.docKey === AU && UU.type === ZU.e.Updates && (UU.updates ? this.applyUpdates(UU.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(UU) {
                  const XU = JSON.parse(UU).map((UU => ({
                    clientID: UU.clientID,
                    changes: eU.ChangeSet.fromJSON(UU.changes)
                  })));
                  XU.length > 0 && (this.view.dispatch((0, LU.i)(this.view.state, XU)), yU && yU(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(UU) {
                  QU && (UU.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const UU = (0, LU.m)(this.view.state);
                  if (this.pushing || !UU.length) return;
                  const XU = Date.now() - this.lastPushTime;
                  if (XU < fU) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), fU - XU)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), rU);
                  const zU = (0, LU.f)(this.view.state),
                    yU = UU.map((UU => ({
                      clientID: UU.clientID,
                      changes: UU.changes.toJSON()
                    }))),
                    QU = JSON.stringify(yU);
                  QU.length <= ZU.h ? wU.gameBridge.send("sendCodeCollab", {
                    Ey: ZU.c.Push,
                    Yy: AU,
                    Ny: zU,
                    ty: QU
                  }) : (0, SU.postJsonWithMetricsCookiesAndJsonResponse)(`${cU.gsUrl}/code/collab-push`, qU.p["collab-push"].toBuffer({
                    gameNameWithVariation: cU.gameNameWithVariation,
                    lobbyName: cU.lobbyName,
                    docKey: AU,
                    version: zU,
                    updates: QU
                  }), {
                    retries: 0
                  }).catch((UU => {
                    console.error("[CodeCollab] HTTP push failed", UU)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const UU = (0, LU.f)(this.view.state);
                  (0, SU.postJsonWithMetricsCookiesAndJsonResponse)(`${cU.gsUrl}/code/collab-pull`, qU.p["collab-pull"].toBuffer({
                    gameNameWithVariation: cU.gameNameWithVariation,
                    lobbyName: cU.lobbyName,
                    docKey: AU,
                    fromVersion: UU
                  }), {
                    retries: 1
                  }).then((UU => {
                    this.destroyed || (UU.fullDoc ? OU.k.UY("codeCollabRejoin", {
                      docKey: AU,
                      doc: UU.fullDoc,
                      version: UU.version
                    }) : this.applyUpdates(UU.updates))
                  })).catch((UU => {
                    console.error("[CodeCollab] Pull failed", UU)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const UU = Date.now();
                  if (UU - this.lastCursorSent < uU) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), uU)));
                  this.lastCursorSent = UU;
                  const XU = this.view.state.selection.main;
                  wU.gameBridge.send("sendCodeCollab", {
                    Ey: ZU.c.Cursor,
                    Yy: AU,
                    By: XU.anchor,
                    Zy: XU.head
                  })
                }
                destroy() {
                  this.destroyed = !0, OU.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, LU.c)({
              startVersion: UU,
              clientID: XU
            }), FU]
          }(DX, EX, oU.docKey, oU.httpConfig, (UU => {
            var XU;
            null === (XU = NX.current) || void 0 === XU || XU.call(NX, UU)
          }), NU));
          const UU = function(UU, XU) {
            const zU = (0, ZU.t)(UU);
            return {
              extensions: [xU],
              connect(UU) {
                if (XU) {
                  const zU = XU.map((UU => VU.of({
                    playerId: UU.playerId,
                    playerName: UU.playerName,
                    colour: UU.colour,
                    anchor: UU.anchor,
                    head: UU.head,
                    lastMoved: Date.now()
                  })));
                  zU.length > 0 && UU.dispatch({
                    effects: zU
                  })
                }
                const cU = OU.k.subscribe("codeCollab", (XU => {
                    if (XU.docKey === zU)
                      if (XU.type === ZU.e.RemoteCursor) UU.dispatch({
                        effects: VU.of({
                          playerId: XU.playerId,
                          playerName: XU.playerName,
                          colour: XU.colour,
                          anchor: XU.anchor,
                          head: XU.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (XU.type === ZU.e.Presence) {
                      const zU = JSON.parse(XU.peers),
                        cU = new Set(zU.map((UU => UU.playerId))),
                        yU = UU.state.field(xU),
                        QU = [];
                      for (const [UU] of yU.cursors) cU.has(UU) || QU.push(sU.of(UU));
                      QU.length > 0 && UU.dispatch({
                        effects: QU
                      })
                    }
                  })),
                  yU = setInterval((() => {
                    UU.dom.isConnected ? UU.dispatch({
                      effects: nU.of(Date.now())
                    }) : clearInterval(yU)
                  }), vU);
                return () => {
                  OU.k.unsubscribe(cU), clearInterval(yU)
                }
              }
            }
          }(oU.docKey, oU.existingCursors);
          FU.push(...UU.extensions), GX.current = UU.connect
        } else GX.current = null;
        return FU
      }), [XU, FX, mU, DX, EX, dX, bU, hU, UX, NU, QX, AX]);
      if (!FX || !JU && !hU) return (0, PX.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, PX.jsx)(kU.b, {})
      });
      const wX = hU ? `plugin-${hU}-${null!==UX&&void 0!==UX?UX:"index.ts"}` : JU ? `collab-${JU.clientID}` : `local-${XU}`;
      return (0, PX.jsx)(QU.n, {
        value: hU ? null !== zX && void 0 !== zX ? zX : "" : zU,
        onChange: FU,
        extensions: CX,
        className: "CodeEditorContent",
        theme: lU ? tX : "dark",
        editable: NU && !hU,
        basicSetup: mX,
        onCreateEditor: UU => {
          var XU;
          IX.current = UU, aX.current = null !== (XU = null === JU || void 0 === JU ? void 0 : JU.clientID) && void 0 !== XU ? XU : null, eX(UU), kX.current && kX.current(), GX.current && (kX.current = GX.current(UU))
        }
      }, wX)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);