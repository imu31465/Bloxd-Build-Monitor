export const id = 292;
export const ids = [292];
export const modules = {
  41113: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => jz
    });
    var QC = ZC(41122),
      wC = ZC(41153),
      bC = ZC(41158),
      nC = ZC(48),
      fC = ZC(60),
      oC = ZC(41177),
      qC = ZC(41179),
      FC = ZC(4696),
      WC = ZC(41188),
      NC = ZC(1811),
      MC = ZC(41191),
      gC = ZC(41203),
      SC = ZC.n(gC),
      pC = ZC(41165),
      PC = ZC(41169),
      GC = ZC(1295),
      RC = ZC(36714),
      AC = ZC(1183),
      xC = ZC(36725),
      JC = ZC(36630),
      IC = ZC(1383),
      iC = ZC(600),
      vC = ZC(1187),
      eC = ZC(41252),
      hC = ZC(41125),
      KC = ZC(41128),
      YC = ZC(1840),
      dC = ZC(3677),
      mC = ZC(28),
      HC = ZC(1078);
    const EC = 1e4,
      lC = 250,
      XC = 250;
    var cC = ZC(41142);
    const uC = 50,
      rC = 100;
    const sC = 2e3,
      TC = hC.w.define(),
      aC = hC.w.define(),
      tC = hC.w.define();
    class DC extends KC.r {
      constructor(CC, zC, ZC) {
        super(), this.colour = CC, this.playerName = zC, this.showName = ZC
      }
      toDOM() {
        const CC = document.createElement("span");
        CC.className = "cm-remote-cursor-wrapper", CC.style.borderLeftColor = this.colour;
        const zC = document.createElement("span");
        if (zC.className = "cm-remote-cursor", zC.style.borderLeftColor = this.colour, CC.appendChild(zC), this.showName) {
          const zC = document.createElement("span");
          zC.className = "cm-remote-cursor-name", zC.style.backgroundColor = this.colour, zC.textContent = this.playerName, CC.appendChild(zC)
        }
        return CC
      }
      eq(CC) {
        return this.colour === CC.colour && this.playerName === CC.playerName && this.showName === CC.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function jC(CC, zC) {
      const ZC = [],
        QC = [];
      for (const [, nC] of CC) {
        const CC = zC - nC.lastMoved < sC;
        if (ZC.push({
            pos: nC.head,
            decoration: KC.e.widget({
              widget: new DC(nC.colour, nC.playerName, CC),
              side: 1
            })
          }), nC.anchor !== nC.head) {
          const CC = Math.min(nC.anchor, nC.head),
            zC = Math.max(nC.anchor, nC.head);
          QC.push({
            from: CC,
            to: zC,
            decoration: KC.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${nC.colour}33`
              }
            })
          })
        }
      }
      const wC = new hC.s,
        bC = [];
      for (const nC of ZC) bC.push({
        bias: 1,
        deco: nC.decoration,
        from: nC.pos,
        to: nC.pos
      });
      for (const nC of QC) bC.push({
        bias: 0,
        deco: nC.decoration,
        from: nC.from,
        to: nC.to
      });
      bC.sort(((CC, zC) => CC.from - zC.from || CC.deco.startSide - zC.deco.startSide || CC.bias - zC.bias));
      for (const nC of bC) wC.add(nC.from, nC.to, nC.deco);
      return wC.finish()
    }
    const yC = hC.A.define({
      create: () => ({
        cursors: new Map,
        gC: KC.e.none
      }),
      update(CC, zC) {
        let ZC = CC.cursors,
          QC = !1;
        if (zC.docChanged) {
          const CC = new Map;
          for (const [QC, wC] of ZC) CC.set(QC, {
            ...wC,
            anchor: zC.changes.mapPos(wC.anchor, 1),
            head: zC.changes.mapPos(wC.head, 1)
          });
          ZC = CC, QC = !0
        }
        for (const wC of zC.effects)
          if (wC.is(TC)) {
            if (!Number.isInteger(wC.value.anchor) || !Number.isInteger(wC.value.head)) {
              console.warn(`Code Editor: ignored player ${wC.value.playerId}'s cursor at ${wC.value.anchor}-${wC.value.head}`);
              continue
            }
            const bC = zC.state.doc.length,
              nC = {
                ...wC.value,
                anchor: Math.min(wC.value.anchor, bC),
                head: Math.min(wC.value.head, bC)
              };
            ZC === CC.cursors && (ZC = new Map(ZC)), ZC.set(nC.playerId, nC), QC = !0
          } else wC.is(aC) ? ZC.has(wC.value) && (ZC === CC.cursors && (ZC = new Map(ZC)), ZC.delete(wC.value), QC = !0) : wC.is(tC) && (QC = !0);
        return QC ? {
          cursors: ZC,
          gC: jC(ZC, Date.now())
        } : CC
      },
      provide: CC => KC.j.gC.from(CC, (CC => CC.gC))
    });
    const LC = hC.w.define(),
      UC = KC.e.mark({
        class: "CodeInsertFlash"
      }),
      BC = hC.A.define({
        create: () => KC.e.none,
        update(CC, zC) {
          let ZC = CC.map(zC.changes);
          for (const QC of zC.effects) QC.is(LC) && (ZC = QC.value ? KC.e.set(UC.range(QC.value.from, QC.value.to)) : KC.e.none);
          return ZC
        },
        provide: CC => KC.j.gC.from(CC)
      }),
      OC = hC.A.define({
        create: () => !1,
        update: (CC, zC) => CC || void 0 !== zC.annotation(hC.F.userEvent) && !zC.annotation(hC.F.remote)
      }),
      kC = [BC, OC];

    function VC(CC) {
      return CC.field(OC)
    }
    const Cz = 3e4;

    function zz(CC, zC) {
      const ZC = (0, nC.useRef)(null);
      (0, nC.useEffect)((() => {
        var CC;
        (null === (CC = ZC.current) || void 0 === CC ? void 0 : CC.path) !== zC && (ZC.current = null)
      }), [zC]);
      const QC = CC => {
        var QC;
        const wC = ZC.current;
        if (null === CC || void 0 === CC || !CC.dom.isConnected || !wC || wC.path !== zC) return;
        ZC.current = null;
        const {
          lM: nC
        } = wC;
        if (nC && null !== nC.text && performance.now() - nC.at < Cz) {
          const zC = function(CC, zC) {
            if (CC === zC) return null;
            const ZC = Math.min(CC.length, zC.length);
            let QC = 0;
            for (; QC < ZC && CC[QC] === zC[QC];) QC++;
            let wC = 0;
            for (; wC < ZC - QC && CC[CC.length - 1 - wC] === zC[zC.length - 1 - wC];) wC++;
            return {
              from: QC,
              to: CC.length - wC,
              insert: zC.slice(QC, zC.length - wC)
            }
          }(CC.state.doc.toString(), nC.text);
          null !== zC && CC.dispatch({
            changes: zC,
            userEvent: nC.placed ? "input" : void 0
          })
        }
        const {
          doc: fC
        } = CC.state, oC = fC.line(Math.min(Math.max(wC.line, 1), fC.lines)), qC = oC.from + Math.min(null !== (QC = wC.column) && void 0 !== QC ? QC : 0, oC.length);
        CC.dispatch({
          selection: {
            anchor: qC
          },
          effects: bC.e.scrollIntoView(qC, {
            y: "center"
          }),
          userEvent: null !== nC && void 0 !== nC && nC.placed ? "select" : void 0
        }), !1 !== (null === nC || void 0 === nC ? void 0 : nC.focused) && CC.focus()
      };
      return (0, IC.c)("CodeEditorGoToLine", (zC => {
        ZC.current = zC, QC(CC.current)
      })), (0, IC.c)("CodeEditorKeepEdits", (() => {
        const QC = CC.current;
        if (null === QC || !QC.dom.isConnected || null === zC) return;
        const {
          doc: wC,
          selection: bC
        } = QC.state, {
          head: nC
        } = bC.main, fC = wC.lineAt(nC), oC = {
          text: (0, eC.l)(QC.state).length > 0 ? wC.toString() : null,
          at: performance.now(),
          focused: QC.hasFocus,
          placed: VC(QC.state)
        };
        ZC.current = {
          path: zC,
          line: fC.number,
          column: nC - fC.from,
          lM: oC
        }
      })), CC => {
        var wC;
        const bC = ZC.current;
        !1 === (null === bC || void 0 === bC || null === (wC = bC.lM) || void 0 === wC ? void 0 : wC.focused) && bC.path === zC || CC.focus(), QC(CC)
      }
    }
    var Zz = ZC(4296),
      Qz = ZC(1143);

    function wz(CC, zC) {
      const {
        t: ZC
      } = (0, Qz.y)();
      (0, IC.c)("CodeEditorInsertText", (QC => {
        let {
          text: wC,
          focus: bC
        } = QC;
        const nC = CC.current,
          fC = null !== nC && void 0 !== nC && nC.dom.isConnected ? function(CC, zC) {
            if (!VC(CC)) return null;
            const {
              from: ZC,
              to: QC
            } = CC.selection.main, wC = ZC + zC.length;
            return {
              changes: {
                from: ZC,
                to: QC,
                insert: zC
              },
              selection: {
                anchor: wC
              },
              effects: [KC.j.scrollIntoView(wC, {
                y: "center"
              }), LC.of({
                from: ZC,
                to: wC
              })],
              userEvent: "input"
            }
          }(nC.state, wC) : null;
        null !== nC && null !== fC ? (nC.dispatch(fC), bC && nC.focus(), setTimeout((() => {
          nC.dom.isConnected && nC.dispatch({
            effects: LC.of(null)
          })
        }), 1500)) : (0, Zz.e)(wC).then((() => {
          zC({
            message: ZC("codeEditorWorld:pickCopied", {
              coords: wC
            }),
            type: "success"
          })
        }), (CC => {
          console.error("Pick could not copy the coordinates", CC), zC({
            message: ZC("codeEditorWorld:pickPlaceCursor", {
              coords: wC
            }),
            type: "warning"
          })
        }))
      }))
    }
    var bz = ZC(41150);
    const nz = "#e45649",
      fz = "#383a42",
      oz = "#696c77",
      qz = "#986801",
      Fz = "#e5e5e6",
      Wz = "#fafafa",
      Nz = "#eaeaeb",
      Mz = "#526fff",
      gz = KC.j.theme({
        "&": {
          color: fz,
          backgroundColor: Wz
        },
        ".cm-content": {
          caretColor: Mz
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Mz
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: fz
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
          backgroundColor: Wz,
          color: oz,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Fz
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Nz
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Nz,
          borderBottomColor: Nz
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Fz,
            color: fz
          }
        }
      }, {
        dark: !1
      }),
      Sz = cC.b.define([{
        tag: bz.i.keyword,
        color: "#a626a4"
      }, {
        tag: [bz.i.name, bz.i.deleted, bz.i.character, bz.i.propertyName, bz.i.macroName],
        color: nz
      }, {
        tag: [bz.i.function(bz.i.variableName), bz.i.labelName],
        color: "#4078f2"
      }, {
        tag: [bz.i.color, bz.i.constant(bz.i.name), bz.i.standard(bz.i.name)],
        color: qz
      }, {
        tag: [bz.i.definition(bz.i.name), bz.i.separator],
        color: fz
      }, {
        tag: [bz.i.typeName, bz.i.className, bz.i.number, bz.i.changed, bz.i.annotation, bz.i.modifier, bz.i.self, bz.i.namespace],
        color: "#c18401"
      }, {
        tag: [bz.i.operator, bz.i.operatorKeyword, bz.i.url, bz.i.escape, bz.i.regexp, bz.i.link, bz.i.special(bz.i.string)],
        color: "#0184bc"
      }, {
        tag: [bz.i.meta, bz.i.comment],
        color: oz
      }, {
        tag: bz.i.strong,
        fontWeight: "bold"
      }, {
        tag: bz.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: bz.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bz.i.link,
        color: oz,
        textDecoration: "underline"
      }, {
        tag: bz.i.heading,
        fontWeight: "bold",
        color: nz
      }, {
        tag: [bz.i.atom, bz.i.bool, bz.i.special(bz.i.variableName)],
        color: qz
      }, {
        tag: [bz.i.processingInstruction, bz.i.string, bz.i.inserted],
        color: "#50a14f"
      }, {
        tag: bz.i.invalid,
        color: "#000000"
      }]),
      pz = [gz, (0, cC.cb)(Sz)];
    var Pz = ZC(36779),
      Gz = ZC(41255);
    const Rz = bC.i.define(),
      Az = bC.k.define({
        create: () => !1,
        update(CC, zC) {
          for (const ZC of zC.effects) ZC.is(Rz) && (CC = ZC.value);
          return CC
        }
      }),
      xz = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Jz(CC, zC) {
      return [Az, bC.m.fromClass(class {
        constructor(CC) {
          this.view = CC, this.onDown = CC => {
            const zC = CC.target instanceof Element && null !== CC.target.closest(".cm-tooltip");
            0 !== CC.button || zC || this.view.state.field(Az) || this.view.dispatch({
              effects: Rz.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Az) && this.view.dispatch({
              effects: Rz.of(!1)
            })
          }, CC.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), bC.t.compute(["selection", Az], (ZC => function(CC, zC, ZC) {
        const QC = CC.selection.main;
        return QC.empty || CC.field(Az) || CC.sliceDoc(QC.from, QC.to).trim().length < 2 ? null : {
          pos: QC.from,
          above: !0,
          create: CC => {
            const QC = document.createElement("div");
            QC.className = "CodeSelectionActions", QC.setAttribute("role", "toolbar"), QC.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: wC,
                label: bC
              }
              of xz) {
              if (!ZC && "explain" !== wC) continue;
              const nC = document.createElement("button");
              nC.type = "button", nC.textContent = bC, "change" !== wC && (nC.title = Gz.c, nC.dataset.asksAi = "true"), nC.addEventListener("mousedown", (CC => {
                CC.preventDefault()
              })), nC.addEventListener("click", (() => {
                const ZC = CC.state.selection.main;
                if (ZC.empty) return;
                const QC = {
                  action: wC,
                  path: zC,
                  fromLine: CC.state.doc.lineAt(ZC.from).number,
                  toLine: CC.state.doc.lineAt(ZC.to > ZC.from && CC.state.doc.lineAt(ZC.to).from === ZC.to ? ZC.to - 1 : ZC.to).number,
                  text: CC.state.sliceDoc(ZC.from, ZC.to)
                };
                mC.o.bp("WorldCodeAiSelection", QC), CC.dispatch({
                  selection: {
                    anchor: ZC.to
                  }
                })
              })), QC.appendChild(nC)
            }
            return {
              dom: QC
            }
          }
        }
      }(ZC, CC, zC)))]
    }
    var Iz = ZC(1056);
    const iz = new Set(["(", "{", "[", "<"]),
      vz = new Set([")", "}", "]", ">"]),
      ez = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function hz(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function ZC(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = [];
        for (const wC of CC) {
          let CC;
          CC = "punctuation" === wC.kind ? ez.text : "parameterName" === wC.kind ? ez.parameterName : zC, QC.push({
            str: wC.text,
            style: {
              color: CC,
              opacity: ZC ? .5 : void 0
            }
          })
        }
        return QC
      }
      const QC = [];
      if (QC.push(...ZC(CC.prefixDisplayParts, ez.text)), CC.parameters.length > 0) {
        QC.push("\n");
        for (let wC = 0; wC < CC.parameters.length; wC++) {
          const bC = CC.parameters[wC];
          QC.push("\t"), QC.push(...ZC(bC.displayParts, ez.parameter, null !== zC && wC !== zC)), QC.push("\n")
        }
      }
      return QC.push(...ZC(CC.suffixDisplayParts, ez.suffix)), CC.documentation && (QC.push("\n\n"), QC.push(...ZC(CC.documentation, ez.docs))), QC
    }
    var Kz = function(CC) {
      return CC[CC.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", CC[CC.DuplicateIdentifier = 2300] = "DuplicateIdentifier", CC
    }(Kz || {});
    const Yz = new Set([Kz.DuplicateIdentifier]),
      dz = new Set([Kz.VariableDefinedElsewhere]),
      mz = new Set([]),
      Hz = "/index.js";

    function Ez(CC) {
      return "/" + CC
    }

    function lz(CC, zC, ZC) {
      CC.getSourceFile(zC) && CC.deleteFile(zC), CC.createFile(zC, ZC)
    }

    function Xz(CC) {
      return !!CC && ((0, xC.u)(CC) || (0, xC.q)(CC))
    }

    function cz(CC, zC, ZC) {
      return () => {
        let QC = [...zC.languageService.getSemanticDiagnostics(ZC), ...zC.languageService.getSyntacticDiagnostics(ZC)];
        return QC = QC.filter((CC => !(0, iC.H)(CC.start) && !(0, iC.H)(CC.length) && !Yz.has(CC.code))), CC || (QC = QC.filter((CC => !dz.has(CC.code)))), QC.map((CC => ({
          from: CC.start,
          to: CC.start + CC.length,
          message: "string" === typeof CC.messageText ? CC.messageText : CC.messageText.messageText,
          severity: mz.has(CC.code) ? "warning" : "error"
        })))
      }
    }

    function uz(CC, zC) {
      return ZC => {
        var QC, wC;
        const bC = CC.languageService.getCompletionsAtPosition(zC, ZC.pos, {});
        if (!bC) return {
          from: ZC.pos,
          options: []
        };
        let nC = null !== (QC = null === (wC = bC.optionalReplacementSpan) || void 0 === wC ? void 0 : wC.start) && void 0 !== QC ? QC : ZC.pos;
        if (!bC.optionalReplacementSpan) {
          const CC = ZC.state.doc.sliceString(0, ZC.pos);
          for (; nC > 0 && /[\w$]/.test(CC[nC - 1]);) nC--
        }
        return bC.entries = bC.entries.filter((CC => CC.kind !== SC().ScriptElementKind.warning)), {
          from: nC,
          options: bC.entries.map((QC => {
            var wC, bC, fC, oC;
            const qC = CC.languageService.getCompletionEntryDetails(zC, ZC.pos, QC.name, {}, QC.source, {}, QC.data),
              FC = null !== (wC = null === (bC = QC.replacementSpan) || void 0 === bC ? void 0 : bC.start) && void 0 !== wC ? wC : nC,
              WC = QC.replacementSpan ? QC.replacementSpan.start + QC.replacementSpan.length : ZC.pos,
              NC = null !== (fC = QC.insertText) && void 0 !== fC ? fC : QC.name;
            return {
              label: QC.name,
              detail: null === qC || void 0 === qC ? void 0 : qC.displayParts.map((CC => CC.text)).join(""),
              info: null === qC || void 0 === qC || null === (oC = qC.documentation) || void 0 === oC ? void 0 : oC.map((CC => CC.text)).join(""),
              apply: CC => {
                CC.dispatch({
                  changes: {
                    from: FC,
                    to: WC,
                    insert: NC
                  },
                  selection: {
                    anchor: FC + NC.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function rz(CC) {
      return zC => {
        const ZC = document.createElement("div");
        ZC.className = "CodeEditorTooltip";
        let QC = !1;
        return queueMicrotask((() => {
          QC || (fC.render((0, Iz.jsx)(NC.e, {
            text: CC
          }), ZC), zC.requestMeasure())
        })), {
          dom: ZC,
          destroy() {
            QC = !0, queueMicrotask((() => {
              fC.unmountComponentAtNode(ZC)
            }))
          }
        }
      }
    }

    function sz(CC, zC, ZC) {
      return QC => {
        var wC;
        if (!zC) return [];
        const bC = null === (wC = QC.selection.np[0]) || void 0 === wC ? void 0 : wC.head;
        if (void 0 === bC) return [];
        const nC = CC.languageService.getSignatureHelpItems(ZC, bC, {});
        if (!nC || !nC.items.length) return [];
        const fC = nC.applicableSpan.start - nC.items[0].prefixDisplayParts.map((CC => CC.text)).join("").length,
          oC = nC.applicableSpan.start,
          qC = QC.doc.lineAt(bC),
          FC = qC.from,
          WC = Math.min(qC.to, bC);
        let NC, MC;
        return fC < FC ? (NC = FC, MC = WC) : (NC = fC, MC = oC), [{
          pos: NC,
          end: MC,
          above: !1,
          create: rz(hz(nC.items[0], nC.argumentIndex))
        }]
      }
    }

    function Tz(CC, zC) {
      return (ZC, QC, wC) => {
        const bC = CC.languageService.getQuickInfoAtPosition(zC, QC);
        if (!bC) return [];
        const nC = bC.textSpan.start,
          fC = bC.textSpan.start + bC.textSpan.length;
        if (QC < nC || QC >= fC) return [];
        if (bC.kind === SC().ScriptElementKind.memberFunctionElement || bC.kind === SC().ScriptElementKind.variableElement && "declare" === bC.kindModifiers) {
          const CC = bC.displayParts.findIndex((CC => "space" === CC.kind)); - 1 !== CC && (bC.displayParts = bC.displayParts.slice(CC));
          const zC = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            ZC = bC.displayParts.findIndex((CC => "punctuation" === CC.kind && "(" === CC.text)); - 1 !== ZC && (zC.prefixDisplayParts = bC.displayParts.slice(0, ZC + 1), bC.displayParts = bC.displayParts.slice(ZC + 1));
          const QC = bC.displayParts.findLastIndex((CC => "punctuation" === CC.kind && ")" === CC.text)); - 1 !== QC && (zC.suffixDisplayParts = bC.displayParts.slice(QC), bC.displayParts = bC.displayParts.slice(0, QC));
          let wC = 0,
            oC = [];
          for (const nC of bC.displayParts)
            if (iz.has(nC.text) ? wC++ : vz.has(nC.text) && wC--, "lineBreak" !== nC.kind) {
              if ("space" === nC.kind) {
                if (0 === oC.length) continue;
                oC.push({
                  kind: "space",
                  text: " "
                })
              } else oC.push(nC);
              0 === wC && "," === nC.text && (zC.parameters.push({
                displayParts: oC
              }), oC = [])
            } return oC.length > 0 && zC.parameters.push({
            displayParts: oC
          }), zC.documentation = bC.documentation, [{
            pos: nC,
            end: fC,
            above: !0,
            create: rz(hz(zC))
          }]
        }
        const oC = [];
        for (const CC of bC.displayParts) oC.push({
          str: CC.text,
          style: {
            color: ez.text
          }
        });
        if (bC.documentation) {
          oC.push("\n\n");
          for (const CC of bC.documentation) oC.push({
            str: CC.text,
            style: {
              color: ez.docs
            }
          })
        }
        return [{
          pos: nC,
          end: fC,
          above: !0,
          create: rz(oC)
        }]
      }
    }
    const az = {
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
      semicolons: SC().SemicolonPreference.Insert
    };
    const tz = bC.i.define(),
      Dz = {
        lineNumbers: !0,
        tabSize: 4
      };

    function jz(CC) {
      let {
        isLobbyCode: zC,
        code: ZC,
        onChange: fC,
        canEditCode: NC,
        setTemporaryMessage: gC,
        close: iC,
        showTooltips: DC,
        lightMode: jC,
        collabState: LC,
        onRemoteDocChange: UC,
        files: BC,
        activePath: OC,
        pluginName: VC,
        pluginFile: Cz,
        pluginSource: Zz,
        setActiveDocReplacer: Qz,
        showAiHints: bz,
        canAiChangeCode: nz = NC
      } = CC;
      const [fz, oz] = (0, nC.useState)(null), qz = null === LC || void 0 === LC ? void 0 : LC.version, Fz = null === LC || void 0 === LC ? void 0 : LC.clientID, Wz = (0, nC.useRef)({
        isLobbyCode: zC,
        files: BC,
        code: ZC,
        activePath: OC
      }), Nz = (0, nC.useRef)(UC);
      Nz.current = UC;
      const Mz = (0, nC.useRef)(null),
        gz = (0, nC.useRef)(LC);
      gz.current = LC;
      const Sz = (0, nC.useRef)(null),
        Gz = (0, nC.useRef)(null),
        Rz = (0, nC.useRef)(null),
        Az = (0, nC.useRef)(iC);
      Az.current = iC;
      const xz = (0, nC.useRef)(ZC);
      xz.current = ZC;
      const iz = (0, nC.useRef)(Zz);
      iz.current = Zz;
      const vz = function(CC, zC, ZC, QC) {
        return ZC ? `/plugin-preview/${ZC}/${null!==QC&&void 0!==QC?QC:"index.ts"}` : CC ? Ez(null !== zC && void 0 !== zC ? zC : AC.k) : Hz
      }(zC, OC, VC, Cz);
      (0, nC.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: CC,
            files: zC,
            code: ZC,
            activePath: QC
          } = Wz.current, wC = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: SC().ModuleKind.ESNext,
            moduleResolution: SC().ModuleResolutionKind.Bundler,
            target: SC().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(RC.c).map((CC => [CC.specifier, [CC.typesVfsPath]])))
            }
          }, bC = new Map, nC = [];
          if (CC) {
            const CC = null !== zC && void 0 !== zC ? zC : {
              [AC.k]: ZC || "\n"
            };
            for (const [zC, ZC] of Object.entries(CC)) {
              const CC = Ez(zC);
              bC.set(CC, ZC || "\n"), nC.push(CC)
            }
            const wC = Ez(null !== QC && void 0 !== QC ? QC : AC.k);
            bC.has(wC) ? bC.set(wC, ZC || "\n") : (bC.set(wC, ZC || "\n"), nC.push(wC)), bC.set("/node_modules/@bloxd/index.d.ts", FC.default), nC.push("/node_modules/@bloxd/index.d.ts");
            for (const zC of Object.values(RC.c)) {
              bC.set(zC.typesVfsPath, zC.types), nC.push(zC.typesVfsPath);
              for (const [CC, ZC] of Object.entries(zC.files)) {
                const QC = `/plugin-preview/${zC.name}/${CC}`;
                bC.set(QC, ZC || "\n"), nC.push(QC)
              }
            }
          } else bC.set(Hz, ZC || "\n"), nC.push(Hz);
          bC.set("/globals.d.ts", CC ? qC.b : oC.b), bC.set("/lib.d.ts", WC.d), nC.push("/globals.d.ts", "/lib.d.ts");
          const fC = MC.e(bC),
            NC = MC.h(fC, nC, SC(), wC);
          oz({
            fp: NC,
            fsMap: bC
          })
        }()
      }), []), (0, nC.useEffect)((() => {
        var CC, QC;
        if (!fz || !zC) return;
        const {
          fp: wC,
          fsMap: bC
        } = fz;
        if (function(CC, zC, ZC) {
            const QC = new Set;
            for (const [wC, bC] of Object.entries(ZC)) {
              const ZC = Ez(wC);
              QC.add(ZC);
              const nC = bC || "\n";
              zC.get(ZC) !== nC && (zC.set(ZC, nC), lz(CC, ZC, nC))
            }
            for (const wC of [...zC.keys()]) "/globals.d.ts" === wC || "/lib.d.ts" === wC || wC.startsWith("/node_modules/") || wC.startsWith("/plugin-preview/") || QC.has(wC) || (zC.delete(wC), CC.getSourceFile(wC) && CC.deleteFile(wC))
          }(wC, bC, null !== BC && void 0 !== BC ? BC : {
            [AC.k]: ZC || "\n"
          }), VC) return void lz(wC, vz, Zz || "\n");
        const nC = null !== (CC = null === (QC = Mz.current) || void 0 === QC ? void 0 : QC.state.doc.toString()) && void 0 !== CC ? CC : ZC;
        lz(wC, vz, nC || "\n")
      }), [BC, OC, fz, VC, Zz, vz, ZC, zC]), (0, nC.useEffect)((() => {
        if (!fz) return;
        const {
          fp: CC
        } = fz;
        lz(CC, vz, (VC ? Zz : ZC) || "\n")
      }), [ZC, VC, Zz, vz, fz]), (0, nC.useEffect)((() => () => {
        Gz.current && (Gz.current(), Gz.current = null)
      }), []), (0, nC.useEffect)((() => (Qz(((CC, zC) => {
        if (VC) return !1;
        const ZC = Mz.current,
          QC = gz.current,
          wC = QC ? (0, xC.z)(QC.docKey) : null;
        if (!ZC || !QC || Sz.current !== QC.clientID || CC !== wC) return !1;
        const bC = ZC.state.doc.toString();
        return bC !== zC && ZC.dispatch({
          changes: {
            from: 0,
            to: bC.length,
            insert: zC
          }
        }), !0
      })), () => {
        Mz.current = null, Sz.current = null, Qz(null)
      })), [Qz, VC]);
      const ez = zC ? VC ? null : null !== OC && void 0 !== OC ? OC : AC.k : Pz.e,
        hz = zz(Mz, ez);
      wz(Mz, gC), (0, IC.c)("FormatCode", (() => {
        if (!fz || !Mz.current || VC) return;
        const {
          fp: CC,
          fsMap: ZC
        } = fz, QC = CC.getSourceFile(vz).getFullText();
        let wC = 0;
        if (zC && BC)
          for (const [zC, fC] of Object.entries(BC)) zC !== (null !== OC && void 0 !== OC ? OC : AC.k) && (wC += fC.length);
        const bC = function(CC, zC, ZC, QC, wC) {
          const bC = CC.languageService.getFormattingEditsForDocument(QC, az);
          if (!bC.length) return vC.e.error("Code is already formatted.");
          bC.sort(((CC, zC) => zC.span.start - CC.span.start));
          let nC = CC.getSourceFile(QC).getFullText();
          for (const fC of bC) nC = nC.slice(0, fC.span.start) + fC.rn + nC.slice(fC.span.start + fC.span.length);
          return nC !== (ZC ? (0, JC.n)(nC, wC) : (0, JC.j)(nC)) ? vC.e.error("Formatting the code will go beyond the character limit.") : vC.e.value(nC)
        }(CC, 0, zC, vz, wC);
        if (bC.isError()) return void gC({
          message: bC.asError().message,
          type: "warning"
        });
        const nC = bC.getValue();
        nC && (Mz.current.dispatch({
          changes: {
            from: 0,
            to: QC.length,
            insert: nC
          },
          selection: {
            anchor: nC.length
          }
        }), lz(CC, vz, nC), fC(nC))
      }));
      const Kz = (0, nC.useMemo)((() => {
        if (!fz) return [];
        const {
          fp: CC,
          fsMap: ZC
        } = fz;
        ! function(CC, zC, ZC, QC) {
          if (CC.getSourceFile(ZC)) return;
          const wC = QC || "\n";
          zC.set(ZC, wC), CC.createFile(ZC, wC)
        }(CC, ZC, vz, (VC ? iz.current : xz.current) || "\n");
        const nC = zC && Xz(VC ? null !== Cz && void 0 !== Cz ? Cz : "index.ts" : OC),
          fC = [(0, wC.e)({
            jsx: !1,
            typescript: nC
          }), bC.g.highest(bC.e.domEventHandlers({
            keydown: CC => "Escape" === CC.key ? (Az.current(), CC.stopPropagation(), !0) : (CC.stopPropagation(), !1)
          })), (0, QC.e)({
            override: [uz(CC, vz)]
          }), KC.o.fromClass(class {
            constructor(CC) {
              this.view = CC, this.timeout = null, this.scheduleParse()
            }
            update(CC) {
              (CC.docChanged || CC.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const CC = this.view.viewport.to;
                (0, cC.fb)(this.view.state, CC) || (0, cC.G)(this.view, CC, uC) || this.scheduleParse()
              }), rC))
            }
          }), ...kC, bC.e.lineWrapping, bC.k.define({
            create: sz(CC, DC, vz),
            update(zC, ZC) {
              const QC = ZC.effects.some((CC => CC.is(tz)));
              return ZC.docChanged || ZC.selection || QC ? (lz(CC, vz, ZC.state.doc.toString() || " "), sz(CC, DC, vz)(ZC.state)) : zC
            },
            provide: CC => bC.t.computeN([CC], (zC => zC.field(CC)))
          }), (0, bC.s)(Tz(CC, vz)), (0, PC.d)(cz(zC, CC, vz)), bC.m.fromClass(class {
            constructor(CC) {
              this.view = CC, this.searchPanel = null
            }
            update(CC) {
              const zC = CC.view.dom.querySelector(".cm-search");
              if (zC !== this.searchPanel) {
                if (this.searchPanel = zC, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (CC => {
                  "Escape" === CC.key && (0, pC.e)(this.view), CC.stopPropagation()
                }))
              }
            }
          })];
        bz && !VC && fC.push(Jz(zC ? null !== OC && void 0 !== OC ? OC : AC.k : Pz.e, nz));
        const oC = gz.current;
        if (oC && !VC) {
          fC.push(... function(CC, zC, ZC, QC, wC) {
            let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const nC = (0, xC.z)(ZC),
              fC = KC.o.fromClass(class {
                constructor(CC) {
                  this.view = CC, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = mC.o.subscribe("codeCollab", (CC => {
                    CC.docKey === nC && CC.type === xC.g.Updates && (CC.updates ? this.applyUpdates(CC.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(CC) {
                  const zC = JSON.parse(CC).map((CC => ({
                    clientID: CC.clientID,
                    changes: hC.ChangeSet.fromJSON(CC.changes)
                  })));
                  zC.length > 0 && (this.view.dispatch((0, eC.k)(this.view.state, zC)), wC && wC(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(CC) {
                  bC && (CC.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const CC = (0, eC.l)(this.view.state);
                  if (this.pushing || !CC.length) return;
                  const zC = Date.now() - this.lastPushTime;
                  if (zC < XC) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), XC - zC)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), EC);
                  const ZC = (0, eC.h)(this.view.state),
                    wC = CC.map((CC => ({
                      clientID: CC.clientID,
                      changes: CC.changes.toJSON()
                    }))),
                    bC = JSON.stringify(wC);
                  bC.length <= xC.j ? YC.gameBridge.send("sendCodeCollab", {
                    rb: xC.d.Push,
                    sb: nC,
                    Tb: ZC,
                    Db: bC
                  }) : (0, HC.postJsonWithMetricsCookiesAndJsonResponse)(`${QC.gsUrl}/code/collab-push`, dC.p["collab-push"].toBuffer({
                    gameNameWithVariation: QC.gameNameWithVariation,
                    lobbyName: QC.lobbyName,
                    docKey: nC,
                    version: ZC,
                    updates: bC
                  }), {
                    retries: 0
                  }).catch((CC => {
                    console.error("[CodeCollab] HTTP push failed", CC)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const CC = (0, eC.h)(this.view.state);
                  (0, HC.postJsonWithMetricsCookiesAndJsonResponse)(`${QC.gsUrl}/code/collab-pull`, dC.p["collab-pull"].toBuffer({
                    gameNameWithVariation: QC.gameNameWithVariation,
                    lobbyName: QC.lobbyName,
                    docKey: nC,
                    fromVersion: CC
                  }), {
                    retries: 1
                  }).then((CC => {
                    this.destroyed || (CC.fullDoc ? mC.o.bp("codeCollabRejoin", {
                      docKey: nC,
                      doc: CC.fullDoc,
                      version: CC.version
                    }) : this.applyUpdates(CC.updates))
                  })).catch((CC => {
                    console.error("[CodeCollab] Pull failed", CC)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const CC = Date.now();
                  if (CC - this.lastCursorSent < lC) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), lC)));
                  this.lastCursorSent = CC;
                  const zC = this.view.state.selection.main;
                  YC.gameBridge.send("sendCodeCollab", {
                    rb: xC.d.Cursor,
                    sb: nC,
                    Ub: zC.anchor,
                    Bb: zC.head
                  })
                }
                destroy() {
                  this.destroyed = !0, mC.o.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, eC.e)({
              startVersion: CC,
              clientID: zC
            }), fC]
          }(qz, Fz, oC.docKey, oC.httpConfig, (CC => {
            var zC;
            null === (zC = Nz.current) || void 0 === zC || zC.call(Nz, CC)
          }), NC));
          const CC = function(CC, zC) {
            const ZC = (0, xC.z)(CC);
            return {
              extensions: [yC],
              connect(CC) {
                if (zC) {
                  const ZC = zC.map((CC => TC.of({
                    playerId: CC.playerId,
                    playerName: CC.playerName,
                    colour: CC.colour,
                    anchor: CC.anchor,
                    head: CC.head,
                    lastMoved: Date.now()
                  })));
                  ZC.length > 0 && CC.dispatch({
                    effects: ZC
                  })
                }
                const QC = mC.o.subscribe("codeCollab", (zC => {
                    if (zC.docKey === ZC)
                      if (zC.type === xC.g.RemoteCursor) CC.dispatch({
                        effects: TC.of({
                          playerId: zC.playerId,
                          playerName: zC.playerName,
                          colour: zC.colour,
                          anchor: zC.anchor,
                          head: zC.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (zC.type === xC.g.Presence) {
                      const ZC = JSON.parse(zC.peers),
                        QC = new Set(ZC.map((CC => CC.playerId))),
                        wC = CC.state.field(yC),
                        bC = [];
                      for (const [CC] of wC.cursors) QC.has(CC) || bC.push(aC.of(CC));
                      bC.length > 0 && CC.dispatch({
                        effects: bC
                      })
                    }
                  })),
                  wC = setInterval((() => {
                    CC.dom.isConnected ? CC.dispatch({
                      effects: tC.of(Date.now())
                    }) : clearInterval(wC)
                  }), sC);
                return () => {
                  mC.o.unsubscribe(QC), clearInterval(wC)
                }
              }
            }
          }(oC.docKey, oC.existingCursors);
          fC.push(...CC.extensions), Rz.current = CC.connect
        } else Rz.current = null;
        return fC
      }), [zC, fz, DC, qz, Fz, vz, OC, VC, Cz, NC, bz, nz]);
      if (!fz || !LC && !VC) return (0, Iz.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Iz.jsx)(GC.d, {})
      });
      const Yz = VC ? `plugin-${VC}-${null!==Cz&&void 0!==Cz?Cz:"index.ts"}` : LC ? `collab-${LC.clientID}` : `local-${zC}`;
      return (0, Iz.jsx)(bC.q, {
        value: VC ? null !== Zz && void 0 !== Zz ? Zz : "" : ZC,
        onChange: fC,
        extensions: Kz,
        className: "CodeEditorContent",
        theme: jC ? pz : "dark",
        editable: NC && !VC,
        basicSetup: Dz,
        onCreateEditor: CC => {
          var zC;
          Mz.current = CC, Sz.current = null !== (zC = null === LC || void 0 === LC ? void 0 : LC.clientID) && void 0 !== zC ? zC : null, hz(CC), Gz.current && Gz.current(), Rz.current && (Gz.current = Rz.current(CC))
        }
      }, Yz)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);