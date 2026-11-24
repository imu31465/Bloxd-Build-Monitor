export const id = 292;
export const ids = [292];
export const modules = {
  41206: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => az
    });
    var pD = wD(41210),
      sD = wD(41243),
      KD = wD(41248),
      rD = wD(58),
      LD = wD(79),
      cD = wD(41266),
      gD = wD(41269),
      RD = wD(4782),
      AD = wD(41275),
      UD = wD(1895),
      fD = wD(41282),
      ID = wD(41304),
      BD = wD.n(ID),
      GD = wD(41256),
      hD = wD(41261),
      nD = wD(1346),
      MD = wD(36813),
      OD = wD(1245),
      JD = wD(36821),
      ED = wD(36709),
      QD = wD(1442),
      XD = wD(619),
      VD = wD(1251),
      PD = wD(41355),
      CD = wD(41212),
      xD = wD(41217),
      TD = wD(1925),
      bD = wD(3757),
      jD = wD(25),
      dD = wD(1130);
    const SD = 1e4,
      iD = 250,
      lD = 250;
    var WD = wD(41231);
    const ND = 50,
      ZD = 100;
    const yD = 2e3,
      kD = CD.E.define(),
      mD = CD.E.define(),
      eD = CD.E.define();
    class oD extends xD.r {
      constructor(DD, zD, wD) {
        super(), this.colour = DD, this.playerName = zD, this.showName = wD
      }
      toDOM() {
        const DD = document.createElement("span");
        DD.className = "cm-remote-cursor-wrapper", DD.style.borderLeftColor = this.colour;
        const zD = document.createElement("span");
        if (zD.className = "cm-remote-cursor", zD.style.borderLeftColor = this.colour, DD.appendChild(zD), this.showName) {
          const zD = document.createElement("span");
          zD.className = "cm-remote-cursor-name", zD.style.backgroundColor = this.colour, zD.textContent = this.playerName, DD.appendChild(zD)
        }
        return DD
      }
      eq(DD) {
        return this.colour === DD.colour && this.playerName === DD.playerName && this.showName === DD.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function aD(DD, zD) {
      const wD = [],
        pD = [];
      for (const [, rD] of DD) {
        const DD = zD - rD.lastMoved < yD;
        if (wD.push({
            pos: rD.head,
            decoration: xD.d.widget({
              widget: new oD(rD.colour, rD.playerName, DD),
              side: 1
            })
          }), rD.anchor !== rD.head) {
          const DD = Math.min(rD.anchor, rD.head),
            zD = Math.max(rD.anchor, rD.head);
          pD.push({
            from: DD,
            to: zD,
            decoration: xD.d.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${rD.colour}33`
              }
            })
          })
        }
      }
      const sD = new CD.v,
        KD = [];
      for (const rD of wD) KD.push({
        bias: 1,
        deco: rD.decoration,
        from: rD.pos,
        to: rD.pos
      });
      for (const rD of pD) KD.push({
        bias: 0,
        deco: rD.decoration,
        from: rD.from,
        to: rD.to
      });
      KD.sort(((DD, zD) => DD.from - zD.from || DD.deco.startSide - zD.deco.startSide || DD.bias - zD.bias));
      for (const rD of KD) sD.add(rD.from, rD.to, rD.deco);
      return sD.finish()
    }
    const uD = CD.G.define({
      create: () => ({
        cursors: new Map,
        BD: xD.d.none
      }),
      update(DD, zD) {
        let wD = DD.cursors,
          pD = !1;
        if (zD.docChanged) {
          const DD = new Map;
          for (const [pD, sD] of wD) DD.set(pD, {
            ...sD,
            anchor: zD.changes.mapPos(sD.anchor, 1),
            head: zD.changes.mapPos(sD.head, 1)
          });
          wD = DD, pD = !0
        }
        for (const sD of zD.effects)
          if (sD.is(kD)) {
            if (!Number.isInteger(sD.value.anchor) || !Number.isInteger(sD.value.head)) {
              console.warn(`Code Editor: ignored player ${sD.value.playerId}'s cursor at ${sD.value.anchor}-${sD.value.head}`);
              continue
            }
            const KD = zD.state.doc.length,
              rD = {
                ...sD.value,
                anchor: Math.min(sD.value.anchor, KD),
                head: Math.min(sD.value.head, KD)
              };
            wD === DD.cursors && (wD = new Map(wD)), wD.set(rD.playerId, rD), pD = !0
          } else sD.is(mD) ? wD.has(sD.value) && (wD === DD.cursors && (wD = new Map(wD)), wD.delete(sD.value), pD = !0) : sD.is(eD) && (pD = !0);
        return pD ? {
          cursors: wD,
          BD: aD(wD, Date.now())
        } : DD
      },
      provide: DD => xD.i.BD.from(DD, (DD => DD.BD))
    });
    const vD = CD.E.define(),
      tD = xD.d.mark({
        class: "CodeInsertFlash"
      }),
      FD = CD.G.define({
        create: () => xD.d.none,
        update(DD, zD) {
          let wD = DD.map(zD.changes);
          for (const pD of zD.effects) pD.is(vD) && (wD = pD.value ? xD.d.set(tD.range(pD.value.from, pD.value.to)) : xD.d.none);
          return wD
        },
        provide: DD => xD.i.BD.from(DD)
      }),
      YD = CD.G.define({
        create: () => !1,
        update: (DD, zD) => DD || void 0 !== zD.annotation(CD.M.userEvent) && !zD.annotation(CD.M.remote)
      }),
      HD = [FD, YD];

    function qD(DD) {
      return DD.field(YD)
    }
    const Dz = 3e4;

    function zz(DD, zD) {
      const wD = (0, rD.useRef)(null);
      (0, rD.useEffect)((() => {
        var DD;
        (null === (DD = wD.current) || void 0 === DD ? void 0 : DD.path) !== zD && (wD.current = null)
      }), [zD]);
      const pD = DD => {
        var pD;
        const sD = wD.current;
        if (null === DD || void 0 === DD || !DD.dom.isConnected || !sD || sD.path !== zD) return;
        wD.current = null;
        const {
          Nf: rD
        } = sD;
        if (rD && null !== rD.text && performance.now() - rD.at < Dz) {
          const zD = function(DD, zD) {
            if (DD === zD) return null;
            const wD = Math.min(DD.length, zD.length);
            let pD = 0;
            for (; pD < wD && DD[pD] === zD[pD];) pD++;
            let sD = 0;
            for (; sD < wD - pD && DD[DD.length - 1 - sD] === zD[zD.length - 1 - sD];) sD++;
            return {
              from: pD,
              to: DD.length - sD,
              insert: zD.slice(pD, zD.length - sD)
            }
          }(DD.state.doc.toString(), rD.text);
          null !== zD && DD.dispatch({
            changes: zD,
            userEvent: rD.placed ? "input" : void 0
          })
        }
        const {
          doc: LD
        } = DD.state, cD = LD.line(Math.min(Math.max(sD.line, 1), LD.lines)), gD = cD.from + Math.min(null !== (pD = sD.column) && void 0 !== pD ? pD : 0, cD.length);
        DD.dispatch({
          selection: {
            anchor: gD
          },
          effects: KD.e.scrollIntoView(gD, {
            y: "center"
          }),
          userEvent: null !== rD && void 0 !== rD && rD.placed ? "select" : void 0
        }), !1 !== (null === rD || void 0 === rD ? void 0 : rD.focused) && DD.focus()
      };
      return (0, QD.g)("CodeEditorGoToLine", (zD => {
        wD.current = zD, pD(DD.current)
      })), (0, QD.g)("CodeEditorKeepEdits", (() => {
        const pD = DD.current;
        if (null === pD || !pD.dom.isConnected || null === zD) return;
        const {
          doc: sD,
          selection: KD
        } = pD.state, {
          head: rD
        } = KD.main, LD = sD.lineAt(rD), cD = {
          text: (0, PD.l)(pD.state).length > 0 ? sD.toString() : null,
          at: performance.now(),
          focused: pD.hasFocus,
          placed: qD(pD.state)
        };
        wD.current = {
          path: zD,
          line: LD.number,
          column: rD - LD.from,
          Nf: cD
        }
      })), DD => {
        var sD;
        const KD = wD.current;
        !1 === (null === KD || void 0 === KD || null === (sD = KD.Nf) || void 0 === sD ? void 0 : sD.focused) && KD.path === zD || DD.focus(), pD(DD)
      }
    }
    var wz = wD(4386),
      pz = wD(1200);

    function sz(DD, zD) {
      const {
        t: wD
      } = (0, pz.E)();
      (0, QD.g)("CodeEditorInsertText", (pD => {
        let {
          text: sD,
          focus: KD
        } = pD;
        const rD = DD.current,
          LD = null !== rD && void 0 !== rD && rD.dom.isConnected ? function(DD, zD) {
            if (!qD(DD)) return null;
            const {
              from: wD,
              to: pD
            } = DD.selection.main, sD = wD + zD.length;
            return {
              changes: {
                from: wD,
                to: pD,
                insert: zD
              },
              selection: {
                anchor: sD
              },
              effects: [xD.i.scrollIntoView(sD, {
                y: "center"
              }), vD.of({
                from: wD,
                to: sD
              })],
              userEvent: "input"
            }
          }(rD.state, sD) : null;
        null !== rD && null !== LD ? (rD.dispatch(LD), KD && rD.focus(), setTimeout((() => {
          rD.dom.isConnected && rD.dispatch({
            effects: vD.of(null)
          })
        }), 1500)) : (0, wz.e)(sD).then((() => {
          zD({
            message: wD("codeEditorWorld:pickCopied", {
              coords: sD
            }),
            type: "success"
          })
        }), (DD => {
          console.error("Pick could not copy the coordinates", DD), zD({
            message: wD("codeEditorWorld:pickPlaceCursor", {
              coords: sD
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Kz = wD(41239);
    const rz = "#e45649",
      Lz = "#383a42",
      cz = "#696c77",
      gz = "#986801",
      Rz = "#e5e5e6",
      Az = "#fafafa",
      Uz = "#eaeaeb",
      fz = "#526fff",
      Iz = xD.i.theme({
        "&": {
          color: Lz,
          backgroundColor: Az
        },
        ".cm-content": {
          caretColor: fz
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: fz
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Lz
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
          backgroundColor: Az,
          color: cz,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Rz
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Uz
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Uz,
          borderBottomColor: Uz
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Rz,
            color: Lz
          }
        }
      }, {
        dark: !1
      }),
      Bz = WD.e.define([{
        tag: Kz.n.keyword,
        color: "#a626a4"
      }, {
        tag: [Kz.n.name, Kz.n.deleted, Kz.n.character, Kz.n.propertyName, Kz.n.macroName],
        color: rz
      }, {
        tag: [Kz.n.function(Kz.n.variableName), Kz.n.labelName],
        color: "#4078f2"
      }, {
        tag: [Kz.n.color, Kz.n.constant(Kz.n.name), Kz.n.standard(Kz.n.name)],
        color: gz
      }, {
        tag: [Kz.n.definition(Kz.n.name), Kz.n.separator],
        color: Lz
      }, {
        tag: [Kz.n.typeName, Kz.n.className, Kz.n.number, Kz.n.changed, Kz.n.annotation, Kz.n.modifier, Kz.n.self, Kz.n.namespace],
        color: "#c18401"
      }, {
        tag: [Kz.n.operator, Kz.n.operatorKeyword, Kz.n.url, Kz.n.escape, Kz.n.regexp, Kz.n.link, Kz.n.special(Kz.n.string)],
        color: "#0184bc"
      }, {
        tag: [Kz.n.meta, Kz.n.comment],
        color: cz
      }, {
        tag: Kz.n.strong,
        fontWeight: "bold"
      }, {
        tag: Kz.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: Kz.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Kz.n.link,
        color: cz,
        textDecoration: "underline"
      }, {
        tag: Kz.n.heading,
        fontWeight: "bold",
        color: rz
      }, {
        tag: [Kz.n.atom, Kz.n.bool, Kz.n.special(Kz.n.variableName)],
        color: gz
      }, {
        tag: [Kz.n.processingInstruction, Kz.n.string, Kz.n.inserted],
        color: "#50a14f"
      }, {
        tag: Kz.n.invalid,
        color: "#000000"
      }]),
      Gz = [Iz, (0, WD.hb)(Bz)];
    var hz = wD(36863),
      nz = wD(41361);
    const Mz = KD.j.define(),
      Oz = KD.k.define({
        create: () => !1,
        update(DD, zD) {
          for (const wD of zD.effects) wD.is(Mz) && (DD = wD.value);
          return DD
        }
      }),
      Jz = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function Ez(DD, zD) {
      return [Oz, KD.l.fromClass(class {
        constructor(DD) {
          this.view = DD, this.onDown = DD => {
            const zD = DD.target instanceof Element && null !== DD.target.closest(".cm-tooltip");
            0 !== DD.button || zD || this.view.state.field(Oz) || this.view.dispatch({
              effects: Mz.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(Oz) && this.view.dispatch({
              effects: Mz.of(!1)
            })
          }, DD.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), KD.s.compute(["selection", Oz], (wD => function(DD, zD, wD) {
        const pD = DD.selection.main;
        return pD.empty || DD.field(Oz) || DD.sliceDoc(pD.from, pD.to).trim().length < 2 ? null : {
          pos: pD.from,
          above: !0,
          create: DD => {
            const pD = document.createElement("div");
            pD.className = "CodeSelectionActions", pD.setAttribute("role", "toolbar"), pD.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: sD,
                label: KD
              }
              of Jz) {
              if (!wD && "explain" !== sD) continue;
              const rD = document.createElement("button");
              rD.type = "button", rD.textContent = KD, "change" !== sD && (rD.title = nz.b, rD.dataset.asksAi = "true"), rD.addEventListener("mousedown", (DD => {
                DD.preventDefault()
              })), rD.addEventListener("click", (() => {
                const wD = DD.state.selection.main;
                if (wD.empty) return;
                const pD = {
                  action: sD,
                  path: zD,
                  fromLine: DD.state.doc.lineAt(wD.from).number,
                  toLine: DD.state.doc.lineAt(wD.to > wD.from && DD.state.doc.lineAt(wD.to).from === wD.to ? wD.to - 1 : wD.to).number,
                  text: DD.state.sliceDoc(wD.from, wD.to)
                };
                jD.l.KG("WorldCodeAiSelection", pD), DD.dispatch({
                  selection: {
                    anchor: wD.to
                  }
                })
              })), pD.appendChild(rD)
            }
            return {
              dom: pD
            }
          }
        }
      }(wD, DD, zD)))]
    }
    var Qz = wD(1096);
    const Xz = new Set(["(", "{", "[", "<"]),
      Vz = new Set([")", "}", "]", ">"]),
      Pz = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Cz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function wD(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = [];
        for (const sD of DD) {
          let DD;
          DD = "punctuation" === sD.kind ? Pz.text : "parameterName" === sD.kind ? Pz.parameterName : zD, pD.push({
            str: sD.text,
            style: {
              color: DD,
              opacity: wD ? .5 : void 0
            }
          })
        }
        return pD
      }
      const pD = [];
      if (pD.push(...wD(DD.prefixDisplayParts, Pz.text)), DD.parameters.length > 0) {
        pD.push("\n");
        for (let sD = 0; sD < DD.parameters.length; sD++) {
          const KD = DD.parameters[sD];
          pD.push("\t"), pD.push(...wD(KD.displayParts, Pz.parameter, null !== zD && sD !== zD)), pD.push("\n")
        }
      }
      return pD.push(...wD(DD.suffixDisplayParts, Pz.suffix)), DD.documentation && (pD.push("\n\n"), pD.push(...wD(DD.documentation, Pz.docs))), pD
    }
    var xz = function(DD) {
      return DD[DD.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", DD[DD.DuplicateIdentifier = 2300] = "DuplicateIdentifier", DD
    }(xz || {});
    const Tz = new Set([xz.DuplicateIdentifier]),
      bz = new Set([xz.VariableDefinedElsewhere]),
      jz = new Set([]),
      dz = "/index.js";

    function Sz(DD) {
      return "/" + DD
    }

    function iz(DD, zD, wD) {
      DD.getSourceFile(zD) && DD.deleteFile(zD), DD.createFile(zD, wD)
    }

    function lz(DD) {
      return !!DD && ((0, JD.l)(DD) || (0, JD.i)(DD))
    }

    function Wz(DD, zD, wD) {
      return () => {
        let pD = [...zD.languageService.getSemanticDiagnostics(wD), ...zD.languageService.getSyntacticDiagnostics(wD)];
        return pD = pD.filter((DD => !(0, XD.B)(DD.start) && !(0, XD.B)(DD.length) && !Tz.has(DD.code))), DD || (pD = pD.filter((DD => !bz.has(DD.code)))), pD.map((DD => ({
          from: DD.start,
          to: DD.start + DD.length,
          message: "string" === typeof DD.messageText ? DD.messageText : DD.messageText.messageText,
          severity: jz.has(DD.code) ? "warning" : "error"
        })))
      }
    }

    function Nz(DD, zD) {
      return wD => {
        var pD, sD;
        const KD = DD.languageService.getCompletionsAtPosition(zD, wD.pos, {});
        if (!KD) return {
          from: wD.pos,
          options: []
        };
        let rD = null !== (pD = null === (sD = KD.optionalReplacementSpan) || void 0 === sD ? void 0 : sD.start) && void 0 !== pD ? pD : wD.pos;
        if (!KD.optionalReplacementSpan) {
          const DD = wD.state.doc.sliceString(0, wD.pos);
          for (; rD > 0 && /[\w$]/.test(DD[rD - 1]);) rD--
        }
        return KD.entries = KD.entries.filter((DD => DD.kind !== BD().ScriptElementKind.warning)), {
          from: rD,
          options: KD.entries.map((pD => {
            var sD, KD, LD, cD;
            const gD = DD.languageService.getCompletionEntryDetails(zD, wD.pos, pD.name, {}, pD.source, {}, pD.data),
              RD = null !== (sD = null === (KD = pD.replacementSpan) || void 0 === KD ? void 0 : KD.start) && void 0 !== sD ? sD : rD,
              AD = pD.replacementSpan ? pD.replacementSpan.start + pD.replacementSpan.length : wD.pos,
              UD = null !== (LD = pD.insertText) && void 0 !== LD ? LD : pD.name;
            return {
              label: pD.name,
              detail: null === gD || void 0 === gD ? void 0 : gD.displayParts.map((DD => DD.text)).join(""),
              info: null === gD || void 0 === gD || null === (cD = gD.documentation) || void 0 === cD ? void 0 : cD.map((DD => DD.text)).join(""),
              apply: DD => {
                DD.dispatch({
                  changes: {
                    from: RD,
                    to: AD,
                    insert: UD
                  },
                  selection: {
                    anchor: RD + UD.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Zz(DD) {
      return zD => {
        const wD = document.createElement("div");
        wD.className = "CodeEditorTooltip";
        let pD = !1;
        return queueMicrotask((() => {
          pD || (LD.render((0, Qz.jsx)(UD.e, {
            text: DD
          }), wD), zD.requestMeasure())
        })), {
          dom: wD,
          destroy() {
            pD = !0, queueMicrotask((() => {
              LD.unmountComponentAtNode(wD)
            }))
          }
        }
      }
    }

    function yz(DD, zD, wD) {
      return pD => {
        var sD;
        if (!zD) return [];
        const KD = null === (sD = pD.selection.rG[0]) || void 0 === sD ? void 0 : sD.head;
        if (void 0 === KD) return [];
        const rD = DD.languageService.getSignatureHelpItems(wD, KD, {});
        if (!rD || !rD.items.length) return [];
        const LD = rD.applicableSpan.start - rD.items[0].prefixDisplayParts.map((DD => DD.text)).join("").length,
          cD = rD.applicableSpan.start,
          gD = pD.doc.lineAt(KD),
          RD = gD.from,
          AD = Math.min(gD.to, KD);
        let UD, fD;
        return LD < RD ? (UD = RD, fD = AD) : (UD = LD, fD = cD), [{
          pos: UD,
          end: fD,
          above: !1,
          create: Zz(Cz(rD.items[0], rD.argumentIndex))
        }]
      }
    }

    function kz(DD, zD) {
      return (wD, pD, sD) => {
        const KD = DD.languageService.getQuickInfoAtPosition(zD, pD);
        if (!KD) return [];
        const rD = KD.textSpan.start,
          LD = KD.textSpan.start + KD.textSpan.length;
        if (pD < rD || pD >= LD) return [];
        if (KD.kind === BD().ScriptElementKind.memberFunctionElement || KD.kind === BD().ScriptElementKind.variableElement && "declare" === KD.kindModifiers) {
          const DD = KD.displayParts.findIndex((DD => "space" === DD.kind)); - 1 !== DD && (KD.displayParts = KD.displayParts.slice(DD));
          const zD = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            wD = KD.displayParts.findIndex((DD => "punctuation" === DD.kind && "(" === DD.text)); - 1 !== wD && (zD.prefixDisplayParts = KD.displayParts.slice(0, wD + 1), KD.displayParts = KD.displayParts.slice(wD + 1));
          const pD = KD.displayParts.findLastIndex((DD => "punctuation" === DD.kind && ")" === DD.text)); - 1 !== pD && (zD.suffixDisplayParts = KD.displayParts.slice(pD), KD.displayParts = KD.displayParts.slice(0, pD));
          let sD = 0,
            cD = [];
          for (const rD of KD.displayParts)
            if (Xz.has(rD.text) ? sD++ : Vz.has(rD.text) && sD--, "lineBreak" !== rD.kind) {
              if ("space" === rD.kind) {
                if (0 === cD.length) continue;
                cD.push({
                  kind: "space",
                  text: " "
                })
              } else cD.push(rD);
              0 === sD && "," === rD.text && (zD.parameters.push({
                displayParts: cD
              }), cD = [])
            } return cD.length > 0 && zD.parameters.push({
            displayParts: cD
          }), zD.documentation = KD.documentation, [{
            pos: rD,
            end: LD,
            above: !0,
            create: Zz(Cz(zD))
          }]
        }
        const cD = [];
        for (const DD of KD.displayParts) cD.push({
          str: DD.text,
          style: {
            color: Pz.text
          }
        });
        if (KD.documentation) {
          cD.push("\n\n");
          for (const DD of KD.documentation) cD.push({
            str: DD.text,
            style: {
              color: Pz.docs
            }
          })
        }
        return [{
          pos: rD,
          end: LD,
          above: !0,
          create: Zz(cD)
        }]
      }
    }
    const mz = {
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
      semicolons: BD().SemicolonPreference.Insert
    };
    const ez = KD.j.define(),
      oz = {
        lineNumbers: !0,
        tabSize: 4
      };

    function az(DD) {
      let {
        isLobbyCode: zD,
        code: wD,
        onChange: LD,
        canEditCode: UD,
        setTemporaryMessage: ID,
        close: XD,
        showTooltips: oD,
        lightMode: aD,
        collabState: vD,
        onRemoteDocChange: tD,
        files: FD,
        activePath: YD,
        pluginName: qD,
        pluginFile: Dz,
        pluginSource: wz,
        setActiveDocReplacer: pz,
        showAiHints: Kz,
        canAiChangeCode: rz = UD
      } = DD;
      const [Lz, cz] = (0, rD.useState)(null), gz = null === vD || void 0 === vD ? void 0 : vD.version, Rz = null === vD || void 0 === vD ? void 0 : vD.clientID, Az = (0, rD.useRef)({
        isLobbyCode: zD,
        files: FD,
        code: wD,
        activePath: YD
      }), Uz = (0, rD.useRef)(tD);
      Uz.current = tD;
      const fz = (0, rD.useRef)(null),
        Iz = (0, rD.useRef)(vD);
      Iz.current = vD;
      const Bz = (0, rD.useRef)(null),
        nz = (0, rD.useRef)(null),
        Mz = (0, rD.useRef)(null),
        Oz = (0, rD.useRef)(XD);
      Oz.current = XD;
      const Jz = (0, rD.useRef)(wD);
      Jz.current = wD;
      const Xz = (0, rD.useRef)(wz);
      Xz.current = wz;
      const Vz = function(DD, zD, wD, pD) {
        return wD ? `/plugin-preview/${wD}/${null!==pD&&void 0!==pD?pD:"index.ts"}` : DD ? Sz(null !== zD && void 0 !== zD ? zD : OD.f) : dz
      }(zD, YD, qD, Dz);
      (0, rD.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: DD,
            files: zD,
            code: wD,
            activePath: pD
          } = Az.current, sD = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: BD().ModuleKind.ESNext,
            moduleResolution: BD().ModuleResolutionKind.Bundler,
            target: BD().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(MD.h).map((DD => [DD.specifier, [DD.typesVfsPath]])))
            }
          }, KD = new Map, rD = [];
          if (DD) {
            const DD = null !== zD && void 0 !== zD ? zD : {
              [OD.f]: wD || "\n"
            };
            for (const [zD, wD] of Object.entries(DD)) {
              const DD = Sz(zD);
              KD.set(DD, wD || "\n"), rD.push(DD)
            }
            const sD = Sz(null !== pD && void 0 !== pD ? pD : OD.f);
            KD.has(sD) ? KD.set(sD, wD || "\n") : (KD.set(sD, wD || "\n"), rD.push(sD)), KD.set("/node_modules/@bloxd/index.d.ts", RD.default), rD.push("/node_modules/@bloxd/index.d.ts");
            for (const zD of Object.values(MD.h)) {
              KD.set(zD.typesVfsPath, zD.types), rD.push(zD.typesVfsPath);
              for (const [DD, wD] of Object.entries(zD.files)) {
                const pD = `/plugin-preview/${zD.name}/${DD}`;
                KD.set(pD, wD || "\n"), rD.push(pD)
              }
            }
          } else KD.set(dz, wD || "\n"), rD.push(dz);
          KD.set("/globals.d.ts", DD ? gD.d : cD.e), KD.set("/lib.d.ts", AD.e), rD.push("/globals.d.ts", "/lib.d.ts");
          const LD = fD.b(KD),
            UD = fD.d(LD, rD, BD(), sD);
          cz({
            LG: UD,
            fsMap: KD
          })
        }()
      }), []), (0, rD.useEffect)((() => {
        var DD, pD;
        if (!Lz || !zD) return;
        const {
          LG: sD,
          fsMap: KD
        } = Lz;
        if (function(DD, zD, wD) {
            const pD = new Set;
            for (const [sD, KD] of Object.entries(wD)) {
              const wD = Sz(sD);
              pD.add(wD);
              const rD = KD || "\n";
              zD.get(wD) !== rD && (zD.set(wD, rD), iz(DD, wD, rD))
            }
            for (const sD of [...zD.keys()]) "/globals.d.ts" === sD || "/lib.d.ts" === sD || sD.startsWith("/node_modules/") || sD.startsWith("/plugin-preview/") || pD.has(sD) || (zD.delete(sD), DD.getSourceFile(sD) && DD.deleteFile(sD))
          }(sD, KD, null !== FD && void 0 !== FD ? FD : {
            [OD.f]: wD || "\n"
          }), qD) return void iz(sD, Vz, wz || "\n");
        const rD = null !== (DD = null === (pD = fz.current) || void 0 === pD ? void 0 : pD.state.doc.toString()) && void 0 !== DD ? DD : wD;
        iz(sD, Vz, rD || "\n")
      }), [FD, YD, Lz, qD, wz, Vz, wD, zD]), (0, rD.useEffect)((() => {
        if (!Lz) return;
        const {
          LG: DD
        } = Lz;
        iz(DD, Vz, (qD ? wz : wD) || "\n")
      }), [wD, qD, wz, Vz, Lz]), (0, rD.useEffect)((() => () => {
        nz.current && (nz.current(), nz.current = null)
      }), []), (0, rD.useEffect)((() => (pz(((DD, zD) => {
        if (qD) return !1;
        const wD = fz.current,
          pD = Iz.current,
          sD = pD ? (0, JD.p)(pD.docKey) : null;
        if (!wD || !pD || Bz.current !== pD.clientID || DD !== sD) return !1;
        const KD = wD.state.doc.toString();
        return KD !== zD && wD.dispatch({
          changes: {
            from: 0,
            to: KD.length,
            insert: zD
          }
        }), !0
      })), () => {
        fz.current = null, Bz.current = null, pz(null)
      })), [pz, qD]);
      const Pz = zD ? qD ? null : null !== YD && void 0 !== YD ? YD : OD.f : hz.d,
        Cz = zz(fz, Pz);
      sz(fz, ID), (0, QD.g)("FormatCode", (() => {
        if (!Lz || !fz.current || qD) return;
        const {
          LG: DD,
          fsMap: wD
        } = Lz, pD = DD.getSourceFile(Vz).getFullText();
        let sD = 0;
        if (zD && FD)
          for (const [zD, LD] of Object.entries(FD)) zD !== (null !== YD && void 0 !== YD ? YD : OD.f) && (sD += LD.length);
        const KD = function(DD, zD, wD, pD, sD) {
          const KD = DD.languageService.getFormattingEditsForDocument(pD, mz);
          if (!KD.length) return VD.e.error("Code is already formatted.");
          KD.sort(((DD, zD) => zD.span.start - DD.span.start));
          let rD = DD.getSourceFile(pD).getFullText();
          for (const LD of KD) rD = rD.slice(0, LD.span.start) + LD.DL + rD.slice(LD.span.start + LD.span.length);
          return rD !== (wD ? (0, ED.k)(rD, sD) : (0, ED.i)(rD)) ? VD.e.error("Formatting the code will go beyond the character limit.") : VD.e.value(rD)
        }(DD, 0, zD, Vz, sD);
        if (KD.isError()) return void ID({
          message: KD.asError().message,
          type: "warning"
        });
        const rD = KD.getValue();
        rD && (fz.current.dispatch({
          changes: {
            from: 0,
            to: pD.length,
            insert: rD
          },
          selection: {
            anchor: rD.length
          }
        }), iz(DD, Vz, rD), LD(rD))
      }));
      const xz = (0, rD.useMemo)((() => {
        if (!Lz) return [];
        const {
          LG: DD,
          fsMap: wD
        } = Lz;
        ! function(DD, zD, wD, pD) {
          if (DD.getSourceFile(wD)) return;
          const sD = pD || "\n";
          zD.set(wD, sD), DD.createFile(wD, sD)
        }(DD, wD, Vz, (qD ? Xz.current : Jz.current) || "\n");
        const rD = zD && lz(qD ? null !== Dz && void 0 !== Dz ? Dz : "index.ts" : YD),
          LD = [(0, sD.e)({
            jsx: !1,
            typescript: rD
          }), KD.h.highest(KD.e.domEventHandlers({
            keydown: DD => "Escape" === DD.key ? (Oz.current(), DD.stopPropagation(), !0) : (DD.stopPropagation(), !1)
          })), (0, pD.c)({
            override: [Nz(DD, Vz)]
          }), xD.n.fromClass(class {
            constructor(DD) {
              this.view = DD, this.timeout = null, this.scheduleParse()
            }
            update(DD) {
              (DD.docChanged || DD.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const DD = this.view.viewport.to;
                (0, WD.ib)(this.view.state, DD) || (0, WD.R)(this.view, DD, ND) || this.scheduleParse()
              }), ZD))
            }
          }), ...HD, KD.e.lineWrapping, KD.k.define({
            create: yz(DD, oD, Vz),
            update(zD, wD) {
              const pD = wD.effects.some((DD => DD.is(ez)));
              return wD.docChanged || wD.selection || pD ? (iz(DD, Vz, wD.state.doc.toString() || " "), yz(DD, oD, Vz)(wD.state)) : zD
            },
            provide: DD => KD.s.computeN([DD], (zD => zD.field(DD)))
          }), (0, KD.q)(kz(DD, Vz)), (0, hD.e)(Wz(zD, DD, Vz)), KD.l.fromClass(class {
            constructor(DD) {
              this.view = DD, this.searchPanel = null
            }
            update(DD) {
              const zD = DD.view.dom.querySelector(".cm-search");
              if (zD !== this.searchPanel) {
                if (this.searchPanel = zD, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (DD => {
                  "Escape" === DD.key && (0, GD.c)(this.view), DD.stopPropagation()
                }))
              }
            }
          })];
        Kz && !qD && LD.push(Ez(zD ? null !== YD && void 0 !== YD ? YD : OD.f : hz.d, rz));
        const cD = Iz.current;
        if (cD && !qD) {
          LD.push(... function(DD, zD, wD, pD, sD) {
            let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const rD = (0, JD.p)(wD),
              LD = xD.n.fromClass(class {
                constructor(DD) {
                  this.view = DD, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = jD.l.subscribe("codeCollab", (DD => {
                    DD.docKey === rD && DD.type === JD.f.Updates && (DD.updates ? this.applyUpdates(DD.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(DD) {
                  const zD = JSON.parse(DD).map((DD => ({
                    clientID: DD.clientID,
                    changes: CD.ChangeSet.fromJSON(DD.changes)
                  })));
                  zD.length > 0 && (this.view.dispatch((0, PD.h)(this.view.state, zD)), sD && sD(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(DD) {
                  KD && (DD.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const DD = (0, PD.l)(this.view.state);
                  if (this.pushing || !DD.length) return;
                  const zD = Date.now() - this.lastPushTime;
                  if (zD < lD) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), lD - zD)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), SD);
                  const wD = (0, PD.d)(this.view.state),
                    sD = DD.map((DD => ({
                      clientID: DD.clientID,
                      changes: DD.changes.toJSON()
                    }))),
                    KD = JSON.stringify(sD);
                  KD.length <= JD.g ? TD.gameBridge.send("sendCodeCollab", {
                    zr: JD.c.Push,
                    wr: rD,
                    sr: wD,
                    Lr: KD
                  }) : (0, dD.postJsonWithMetricsCookiesAndJsonResponse)(`${pD.gsUrl}/code/collab-push`, bD.t["collab-push"].toBuffer({
                    gameNameWithVariation: pD.gameNameWithVariation,
                    lobbyName: pD.lobbyName,
                    docKey: rD,
                    version: wD,
                    updates: KD
                  }), {
                    retries: 0
                  }).catch((DD => {
                    console.error("[CodeCollab] HTTP push failed", DD)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const DD = (0, PD.d)(this.view.state);
                  (0, dD.postJsonWithMetricsCookiesAndJsonResponse)(`${pD.gsUrl}/code/collab-pull`, bD.t["collab-pull"].toBuffer({
                    gameNameWithVariation: pD.gameNameWithVariation,
                    lobbyName: pD.lobbyName,
                    docKey: rD,
                    fromVersion: DD
                  }), {
                    retries: 1
                  }).then((DD => {
                    this.destroyed || (DD.fullDoc ? jD.l.KG("codeCollabRejoin", {
                      docKey: rD,
                      doc: DD.fullDoc,
                      version: DD.version
                    }) : this.applyUpdates(DD.updates))
                  })).catch((DD => {
                    console.error("[CodeCollab] Pull failed", DD)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const DD = Date.now();
                  if (DD - this.lastCursorSent < iD) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), iD)));
                  this.lastCursorSent = DD;
                  const zD = this.view.state.selection.main;
                  TD.gameBridge.send("sendCodeCollab", {
                    zr: JD.c.Cursor,
                    wr: rD,
                    Ir: zD.anchor,
                    Br: zD.head
                  })
                }
                destroy() {
                  this.destroyed = !0, jD.l.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, PD.c)({
              startVersion: DD,
              clientID: zD
            }), LD]
          }(gz, Rz, cD.docKey, cD.httpConfig, (DD => {
            var zD;
            null === (zD = Uz.current) || void 0 === zD || zD.call(Uz, DD)
          }), UD));
          const DD = function(DD, zD) {
            const wD = (0, JD.p)(DD);
            return {
              extensions: [uD],
              connect(DD) {
                if (zD) {
                  const wD = zD.map((DD => kD.of({
                    playerId: DD.playerId,
                    playerName: DD.playerName,
                    colour: DD.colour,
                    anchor: DD.anchor,
                    head: DD.head,
                    lastMoved: Date.now()
                  })));
                  wD.length > 0 && DD.dispatch({
                    effects: wD
                  })
                }
                const pD = jD.l.subscribe("codeCollab", (zD => {
                    if (zD.docKey === wD)
                      if (zD.type === JD.f.RemoteCursor) DD.dispatch({
                        effects: kD.of({
                          playerId: zD.playerId,
                          playerName: zD.playerName,
                          colour: zD.colour,
                          anchor: zD.anchor,
                          head: zD.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (zD.type === JD.f.Presence) {
                      const wD = JSON.parse(zD.peers),
                        pD = new Set(wD.map((DD => DD.playerId))),
                        sD = DD.state.field(uD),
                        KD = [];
                      for (const [DD] of sD.cursors) pD.has(DD) || KD.push(mD.of(DD));
                      KD.length > 0 && DD.dispatch({
                        effects: KD
                      })
                    }
                  })),
                  sD = setInterval((() => {
                    DD.dom.isConnected ? DD.dispatch({
                      effects: eD.of(Date.now())
                    }) : clearInterval(sD)
                  }), yD);
                return () => {
                  jD.l.unsubscribe(pD), clearInterval(sD)
                }
              }
            }
          }(cD.docKey, cD.existingCursors);
          LD.push(...DD.extensions), Mz.current = DD.connect
        } else Mz.current = null;
        return LD
      }), [zD, Lz, oD, gz, Rz, Vz, YD, qD, Dz, UD, Kz, rz]);
      if (!Lz || !vD && !qD) return (0, Qz.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Qz.jsx)(nD.e, {})
      });
      const Tz = qD ? `plugin-${qD}-${null!==Dz&&void 0!==Dz?Dz:"index.ts"}` : vD ? `collab-${vD.clientID}` : `local-${zD}`;
      return (0, Qz.jsx)(KD.n, {
        value: qD ? null !== wz && void 0 !== wz ? wz : "" : wD,
        onChange: LD,
        extensions: xz,
        className: "CodeEditorContent",
        theme: aD ? Gz : "dark",
        editable: UD && !qD,
        basicSetup: oz,
        onCreateEditor: DD => {
          var zD;
          fz.current = DD, Bz.current = null !== (zD = null === vD || void 0 === vD ? void 0 : vD.clientID) && void 0 !== zD ? zD : null, Cz(DD), nz.current && nz.current(), Mz.current && (nz.current = Mz.current(DD))
        }
      }, Tz)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);