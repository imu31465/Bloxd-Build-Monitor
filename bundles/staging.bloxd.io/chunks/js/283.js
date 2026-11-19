export const id = 283;
export const ids = [283];
export const modules = {
  40365: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => sC
    });
    var ID = cD(40373),
      pD = cD(40415),
      iD = cD(40419),
      fD = cD(53),
      bD = cD(62),
      QD = cD(40434),
      wD = cD(40437),
      SD = cD(4550),
      BD = cD(40441),
      yD = cD(1872),
      MD = cD(40444),
      tD = cD(40459),
      ZD = cD.n(tD),
      oD = cD(40423),
      vD = cD(40431),
      ND = cD(1328),
      gD = cD(36208),
      XD = cD(1240),
      mD = cD(36216),
      nD = cD(36107),
      OD = cD(1440),
      PD = cD(624),
      HD = cD(1243),
      UD = cD(40514),
      xD = cD(40379),
      qD = cD(40384),
      JD = cD(1905),
      KD = cD(3583),
      aD = cD(20),
      VD = cD(1127);
    const zD = 1e4,
      jD = 250,
      lD = 250;
    var LD = cD(40398);
    const TD = 50,
      GD = 100;
    const RD = 2e3,
      kD = xD.D.define(),
      dD = xD.D.define(),
      YD = xD.D.define();
    class WD extends qD.y {
      constructor(DD, CD, cD) {
        super(), this.colour = DD, this.playerName = CD, this.showName = cD
      }
      toDOM() {
        const DD = document.createElement("span");
        DD.className = "cm-remote-cursor-wrapper", DD.style.borderLeftColor = this.colour;
        const CD = document.createElement("span");
        if (CD.className = "cm-remote-cursor", CD.style.borderLeftColor = this.colour, DD.appendChild(CD), this.showName) {
          const CD = document.createElement("span");
          CD.className = "cm-remote-cursor-name", CD.style.backgroundColor = this.colour, CD.textContent = this.playerName, DD.appendChild(CD)
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

    function sD(DD, CD) {
      const cD = [],
        ID = [];
      for (const [, fD] of DD) {
        const DD = CD - fD.lastMoved < RD;
        if (cD.push({
            pos: fD.head,
            decoration: qD.e.widget({
              widget: new WD(fD.colour, fD.playerName, DD),
              side: 1
            })
          }), fD.anchor !== fD.head) {
          const DD = Math.min(fD.anchor, fD.head),
            CD = Math.max(fD.anchor, fD.head);
          ID.push({
            from: DD,
            to: CD,
            decoration: qD.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${fD.colour}33`
              }
            })
          })
        }
      }
      const pD = new xD.u,
        iD = [];
      for (const fD of cD) iD.push({
        bias: 1,
        deco: fD.decoration,
        from: fD.pos,
        to: fD.pos
      });
      for (const fD of ID) iD.push({
        bias: 0,
        deco: fD.decoration,
        from: fD.from,
        to: fD.to
      });
      iD.sort(((DD, CD) => DD.from - CD.from || DD.deco.startSide - CD.deco.startSide || DD.bias - CD.bias));
      for (const fD of iD) pD.add(fD.from, fD.to, fD.deco);
      return pD.finish()
    }
    const ED = xD.F.define({
      create: () => ({
        cursors: new Map,
        qI: qD.e.none
      }),
      update(DD, CD) {
        let cD = DD.cursors,
          ID = !1;
        if (CD.docChanged) {
          const DD = new Map;
          for (const [ID, pD] of cD) DD.set(ID, {
            ...pD,
            anchor: CD.changes.mapPos(pD.anchor, 1),
            head: CD.changes.mapPos(pD.head, 1)
          });
          cD = DD, ID = !0
        }
        for (const pD of CD.effects)
          if (pD.is(kD)) {
            if (!Number.isInteger(pD.value.anchor) || !Number.isInteger(pD.value.head)) {
              console.warn(`Code Editor: ignored player ${pD.value.playerId}'s cursor at ${pD.value.anchor}-${pD.value.head}`);
              continue
            }
            const iD = CD.state.doc.length,
              fD = {
                ...pD.value,
                anchor: Math.min(pD.value.anchor, iD),
                head: Math.min(pD.value.head, iD)
              };
            cD === DD.cursors && (cD = new Map(cD)), cD.set(fD.playerId, fD), ID = !0
          } else pD.is(dD) ? cD.has(pD.value) && (cD === DD.cursors && (cD = new Map(cD)), cD.delete(pD.value), ID = !0) : pD.is(YD) && (ID = !0);
        return ID ? {
          cursors: cD,
          qI: sD(cD, Date.now())
        } : DD
      },
      provide: DD => qD.m.qI.from(DD, (DD => DD.qI))
    });
    const eD = xD.D.define(),
      uD = qD.e.mark({
        class: "CodeInsertFlash"
      }),
      hD = xD.F.define({
        create: () => qD.e.none,
        update(DD, CD) {
          let cD = DD.map(CD.changes);
          for (const ID of CD.effects) ID.is(eD) && (cD = ID.value ? qD.e.set(uD.range(ID.value.from, ID.value.to)) : qD.e.none);
          return cD
        },
        provide: DD => qD.m.qI.from(DD)
      }),
      rD = xD.F.define({
        create: () => !1,
        update: (DD, CD) => DD || void 0 !== CD.annotation(xD.L.userEvent) && !CD.annotation(xD.L.remote)
      }),
      AD = [hD, rD];

    function FD(DD) {
      return DD.field(rD)
    }
    const DC = 3e4;

    function CC(DD, CD) {
      const cD = (0, fD.useRef)(null);
      (0, fD.useEffect)((() => {
        var DD;
        (null === (DD = cD.current) || void 0 === DD ? void 0 : DD.path) !== CD && (cD.current = null)
      }), [CD]);
      const ID = DD => {
        var ID;
        const pD = cD.current;
        if (null === DD || void 0 === DD || !DD.dom.isConnected || !pD || pD.path !== CD) return;
        cD.current = null;
        const {
          uM: fD
        } = pD;
        if (fD && null !== fD.text && performance.now() - fD.at < DC) {
          const CD = function(DD, CD) {
            if (DD === CD) return null;
            const cD = Math.min(DD.length, CD.length);
            let ID = 0;
            for (; ID < cD && DD[ID] === CD[ID];) ID++;
            let pD = 0;
            for (; pD < cD - ID && DD[DD.length - 1 - pD] === CD[CD.length - 1 - pD];) pD++;
            return {
              from: ID,
              to: DD.length - pD,
              insert: CD.slice(ID, CD.length - pD)
            }
          }(DD.state.doc.toString(), fD.text);
          null !== CD && DD.dispatch({
            changes: CD,
            userEvent: fD.placed ? "input" : void 0
          })
        }
        const {
          doc: bD
        } = DD.state, QD = bD.line(Math.min(Math.max(pD.line, 1), bD.lines)), wD = QD.from + Math.min(null !== (ID = pD.column) && void 0 !== ID ? ID : 0, QD.length);
        DD.dispatch({
          selection: {
            anchor: wD
          },
          effects: iD.e.scrollIntoView(wD, {
            y: "center"
          }),
          userEvent: null !== fD && void 0 !== fD && fD.placed ? "select" : void 0
        }), !1 !== (null === fD || void 0 === fD ? void 0 : fD.focused) && DD.focus()
      };
      return (0, OD.f)("CodeEditorGoToLine", (CD => {
        cD.current = CD, ID(DD.current)
      })), (0, OD.f)("CodeEditorKeepEdits", (() => {
        const ID = DD.current;
        if (null === ID || !ID.dom.isConnected || null === CD) return;
        const {
          doc: pD,
          selection: iD
        } = ID.state, {
          head: fD
        } = iD.main, bD = pD.lineAt(fD), QD = {
          text: (0, UD.k)(ID.state).length > 0 ? pD.toString() : null,
          at: performance.now(),
          focused: ID.hasFocus,
          placed: FD(ID.state)
        };
        cD.current = {
          path: CD,
          line: bD.number,
          column: fD - bD.from,
          uM: QD
        }
      })), DD => {
        var pD;
        const iD = cD.current;
        !1 === (null === iD || void 0 === iD || null === (pD = iD.uM) || void 0 === pD ? void 0 : pD.focused) && iD.path === CD || DD.focus(), ID(DD)
      }
    }
    var cC = cD(4175),
      IC = cD(1192);

    function pC(DD, CD) {
      const {
        t: cD
      } = (0, IC.F)();
      (0, OD.f)("CodeEditorInsertText", (ID => {
        let {
          text: pD,
          focus: iD
        } = ID;
        const fD = DD.current,
          bD = null !== fD && void 0 !== fD && fD.dom.isConnected ? function(DD, CD) {
            if (!FD(DD)) return null;
            const {
              from: cD,
              to: ID
            } = DD.selection.main, pD = cD + CD.length;
            return {
              changes: {
                from: cD,
                to: ID,
                insert: CD
              },
              selection: {
                anchor: pD
              },
              effects: [qD.m.scrollIntoView(pD, {
                y: "center"
              }), eD.of({
                from: cD,
                to: pD
              })],
              userEvent: "input"
            }
          }(fD.state, pD) : null;
        null !== fD && null !== bD ? (fD.dispatch(bD), iD && fD.focus(), setTimeout((() => {
          fD.dom.isConnected && fD.dispatch({
            effects: eD.of(null)
          })
        }), 1500)) : (0, cC.c)(pD).then((() => {
          CD({
            message: cD("codeEditorWorld:pickCopied", {
              coords: pD
            }),
            type: "success"
          })
        }), (DD => {
          console.error("Pick could not copy the coordinates", DD), CD({
            message: cD("codeEditorWorld:pickPlaceCursor", {
              coords: pD
            }),
            type: "warning"
          })
        }))
      }))
    }
    var iC = cD(40406);
    const fC = "#e45649",
      bC = "#383a42",
      QC = "#696c77",
      wC = "#986801",
      SC = "#e5e5e6",
      BC = "#fafafa",
      yC = "#eaeaeb",
      MC = "#526fff",
      tC = qD.m.theme({
        "&": {
          color: bC,
          backgroundColor: BC
        },
        ".cm-content": {
          caretColor: MC
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: MC
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: bC
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
          backgroundColor: BC,
          color: QC,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: SC
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: yC
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: yC,
          borderBottomColor: yC
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: SC,
            color: bC
          }
        }
      }, {
        dark: !1
      }),
      ZC = LD.c.define([{
        tag: iC.m.keyword,
        color: "#a626a4"
      }, {
        tag: [iC.m.name, iC.m.deleted, iC.m.character, iC.m.propertyName, iC.m.macroName],
        color: fC
      }, {
        tag: [iC.m.function(iC.m.variableName), iC.m.labelName],
        color: "#4078f2"
      }, {
        tag: [iC.m.color, iC.m.constant(iC.m.name), iC.m.standard(iC.m.name)],
        color: wC
      }, {
        tag: [iC.m.definition(iC.m.name), iC.m.separator],
        color: bC
      }, {
        tag: [iC.m.typeName, iC.m.className, iC.m.number, iC.m.changed, iC.m.annotation, iC.m.modifier, iC.m.self, iC.m.namespace],
        color: "#c18401"
      }, {
        tag: [iC.m.operator, iC.m.operatorKeyword, iC.m.url, iC.m.escape, iC.m.regexp, iC.m.link, iC.m.special(iC.m.string)],
        color: "#0184bc"
      }, {
        tag: [iC.m.meta, iC.m.comment],
        color: QC
      }, {
        tag: iC.m.strong,
        fontWeight: "bold"
      }, {
        tag: iC.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: iC.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: iC.m.link,
        color: QC,
        textDecoration: "underline"
      }, {
        tag: iC.m.heading,
        fontWeight: "bold",
        color: fC
      }, {
        tag: [iC.m.atom, iC.m.bool, iC.m.special(iC.m.variableName)],
        color: wC
      }, {
        tag: [iC.m.processingInstruction, iC.m.string, iC.m.inserted],
        color: "#50a14f"
      }, {
        tag: iC.m.invalid,
        color: "#000000"
      }]),
      oC = [tC, (0, LD.jb)(ZC)];
    var vC = cD(36265),
      NC = cD(40518);
    const gC = iD.j.define(),
      XC = iD.n.define({
        create: () => !1,
        update(DD, CD) {
          for (const cD of CD.effects) cD.is(gC) && (DD = cD.value);
          return DD
        }
      }),
      mC = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function nC(DD, CD) {
      return [XC, iD.q.fromClass(class {
        constructor(DD) {
          this.view = DD, this.onDown = DD => {
            const CD = DD.target instanceof Element && null !== DD.target.closest(".cm-tooltip");
            0 !== DD.button || CD || this.view.state.field(XC) || this.view.dispatch({
              effects: gC.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(XC) && this.view.dispatch({
              effects: gC.of(!1)
            })
          }, DD.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), iD.A.compute(["selection", XC], (cD => function(DD, CD, cD) {
        const ID = DD.selection.main;
        return ID.empty || DD.field(XC) || DD.sliceDoc(ID.from, ID.to).trim().length < 2 ? null : {
          pos: ID.from,
          above: !0,
          create: DD => {
            const ID = document.createElement("div");
            ID.className = "CodeSelectionActions", ID.setAttribute("role", "toolbar"), ID.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: pD,
                label: iD
              }
              of mC) {
              if (!cD && "explain" !== pD) continue;
              const fD = document.createElement("button");
              fD.type = "button", fD.textContent = iD, "change" !== pD && (fD.title = NC.d, fD.dataset.asksAi = "true"), fD.addEventListener("mousedown", (DD => {
                DD.preventDefault()
              })), fD.addEventListener("click", (() => {
                const cD = DD.state.selection.main;
                if (cD.empty) return;
                const ID = {
                  action: pD,
                  path: CD,
                  fromLine: DD.state.doc.lineAt(cD.from).number,
                  toLine: DD.state.doc.lineAt(cD.to > cD.from && DD.state.doc.lineAt(cD.to).from === cD.to ? cD.to - 1 : cD.to).number,
                  text: DD.state.sliceDoc(cD.from, cD.to)
                };
                aD.i.Uo("WorldCodeAiSelection", ID), DD.dispatch({
                  selection: {
                    anchor: cD.to
                  }
                })
              })), ID.appendChild(fD)
            }
            return {
              dom: ID
            }
          }
        }
      }(cD, DD, CD)))]
    }
    var OC = cD(1093);
    const PC = new Set(["(", "{", "[", "<"]),
      HC = new Set([")", "}", "]", ">"]),
      UC = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function xC(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function cD(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = [];
        for (const pD of DD) {
          let DD;
          DD = "punctuation" === pD.kind ? UC.text : "parameterName" === pD.kind ? UC.parameterName : CD, ID.push({
            str: pD.text,
            style: {
              color: DD,
              opacity: cD ? .5 : void 0
            }
          })
        }
        return ID
      }
      const ID = [];
      if (ID.push(...cD(DD.prefixDisplayParts, UC.text)), DD.parameters.length > 0) {
        ID.push("\n");
        for (let pD = 0; pD < DD.parameters.length; pD++) {
          const iD = DD.parameters[pD];
          ID.push("\t"), ID.push(...cD(iD.displayParts, UC.parameter, null !== CD && pD !== CD)), ID.push("\n")
        }
      }
      return ID.push(...cD(DD.suffixDisplayParts, UC.suffix)), DD.documentation && (ID.push("\n\n"), ID.push(...cD(DD.documentation, UC.docs))), ID
    }
    var qC = function(DD) {
      return DD[DD.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", DD[DD.DuplicateIdentifier = 2300] = "DuplicateIdentifier", DD
    }(qC || {});
    const JC = new Set([qC.DuplicateIdentifier]),
      KC = new Set([qC.VariableDefinedElsewhere]),
      aC = new Set([]),
      VC = "/index.js";

    function zC(DD) {
      return "/" + DD
    }

    function jC(DD, CD, cD) {
      DD.getSourceFile(CD) && DD.deleteFile(CD), DD.createFile(CD, cD)
    }

    function lC(DD) {
      return !!DD && ((0, mD.n)(DD) || (0, mD.k)(DD))
    }

    function LC(DD, CD, cD) {
      return () => {
        let ID = [...CD.languageService.getSemanticDiagnostics(cD), ...CD.languageService.getSyntacticDiagnostics(cD)];
        return ID = ID.filter((DD => !(0, PD.C)(DD.start) && !(0, PD.C)(DD.length) && !JC.has(DD.code))), DD || (ID = ID.filter((DD => !KC.has(DD.code)))), ID.map((DD => ({
          from: DD.start,
          to: DD.start + DD.length,
          message: "string" === typeof DD.messageText ? DD.messageText : DD.messageText.messageText,
          severity: aC.has(DD.code) ? "warning" : "error"
        })))
      }
    }

    function TC(DD, CD) {
      return cD => {
        var ID, pD;
        const iD = DD.languageService.getCompletionsAtPosition(CD, cD.pos, {});
        if (!iD) return {
          from: cD.pos,
          options: []
        };
        let fD = null !== (ID = null === (pD = iD.optionalReplacementSpan) || void 0 === pD ? void 0 : pD.start) && void 0 !== ID ? ID : cD.pos;
        if (!iD.optionalReplacementSpan) {
          const DD = cD.state.doc.sliceString(0, cD.pos);
          for (; fD > 0 && /[\w$]/.test(DD[fD - 1]);) fD--
        }
        return iD.entries = iD.entries.filter((DD => DD.kind !== ZD().ScriptElementKind.warning)), {
          from: fD,
          options: iD.entries.map((ID => {
            var pD, iD, bD, QD;
            const wD = DD.languageService.getCompletionEntryDetails(CD, cD.pos, ID.name, {}, ID.source, {}, ID.data),
              SD = null !== (pD = null === (iD = ID.replacementSpan) || void 0 === iD ? void 0 : iD.start) && void 0 !== pD ? pD : fD,
              BD = ID.replacementSpan ? ID.replacementSpan.start + ID.replacementSpan.length : cD.pos,
              yD = null !== (bD = ID.insertText) && void 0 !== bD ? bD : ID.name;
            return {
              label: ID.name,
              detail: null === wD || void 0 === wD ? void 0 : wD.displayParts.map((DD => DD.text)).join(""),
              info: null === wD || void 0 === wD || null === (QD = wD.documentation) || void 0 === QD ? void 0 : QD.map((DD => DD.text)).join(""),
              apply: DD => {
                DD.dispatch({
                  changes: {
                    from: SD,
                    to: BD,
                    insert: yD
                  },
                  selection: {
                    anchor: SD + yD.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function GC(DD) {
      return CD => {
        const cD = document.createElement("div");
        cD.className = "CodeEditorTooltip";
        let ID = !1;
        return queueMicrotask((() => {
          ID || (bD.render((0, OC.jsx)(yD.c, {
            text: DD
          }), cD), CD.requestMeasure())
        })), {
          dom: cD,
          destroy() {
            ID = !0, queueMicrotask((() => {
              bD.unmountComponentAtNode(cD)
            }))
          }
        }
      }
    }

    function RC(DD, CD, cD) {
      return ID => {
        var pD;
        if (!CD) return [];
        const iD = null === (pD = ID.selection.df[0]) || void 0 === pD ? void 0 : pD.head;
        if (void 0 === iD) return [];
        const fD = DD.languageService.getSignatureHelpItems(cD, iD, {});
        if (!fD || !fD.items.length) return [];
        const bD = fD.applicableSpan.start - fD.items[0].prefixDisplayParts.map((DD => DD.text)).join("").length,
          QD = fD.applicableSpan.start,
          wD = ID.doc.lineAt(iD),
          SD = wD.from,
          BD = Math.min(wD.to, iD);
        let yD, MD;
        return bD < SD ? (yD = SD, MD = BD) : (yD = bD, MD = QD), [{
          pos: yD,
          end: MD,
          above: !1,
          create: GC(xC(fD.items[0], fD.argumentIndex))
        }]
      }
    }

    function kC(DD, CD) {
      return (cD, ID, pD) => {
        const iD = DD.languageService.getQuickInfoAtPosition(CD, ID);
        if (!iD) return [];
        const fD = iD.textSpan.start,
          bD = iD.textSpan.start + iD.textSpan.length;
        if (ID < fD || ID >= bD) return [];
        if (iD.kind === ZD().ScriptElementKind.memberFunctionElement || iD.kind === ZD().ScriptElementKind.variableElement && "declare" === iD.kindModifiers) {
          const DD = iD.displayParts.findIndex((DD => "space" === DD.kind)); - 1 !== DD && (iD.displayParts = iD.displayParts.slice(DD));
          const CD = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            cD = iD.displayParts.findIndex((DD => "punctuation" === DD.kind && "(" === DD.text)); - 1 !== cD && (CD.prefixDisplayParts = iD.displayParts.slice(0, cD + 1), iD.displayParts = iD.displayParts.slice(cD + 1));
          const ID = iD.displayParts.findLastIndex((DD => "punctuation" === DD.kind && ")" === DD.text)); - 1 !== ID && (CD.suffixDisplayParts = iD.displayParts.slice(ID), iD.displayParts = iD.displayParts.slice(0, ID));
          let pD = 0,
            QD = [];
          for (const fD of iD.displayParts)
            if (PC.has(fD.text) ? pD++ : HC.has(fD.text) && pD--, "lineBreak" !== fD.kind) {
              if ("space" === fD.kind) {
                if (0 === QD.length) continue;
                QD.push({
                  kind: "space",
                  text: " "
                })
              } else QD.push(fD);
              0 === pD && "," === fD.text && (CD.parameters.push({
                displayParts: QD
              }), QD = [])
            } return QD.length > 0 && CD.parameters.push({
            displayParts: QD
          }), CD.documentation = iD.documentation, [{
            pos: fD,
            end: bD,
            above: !0,
            create: GC(xC(CD))
          }]
        }
        const QD = [];
        for (const DD of iD.displayParts) QD.push({
          str: DD.text,
          style: {
            color: UC.text
          }
        });
        if (iD.documentation) {
          QD.push("\n\n");
          for (const DD of iD.documentation) QD.push({
            str: DD.text,
            style: {
              color: UC.docs
            }
          })
        }
        return [{
          pos: fD,
          end: bD,
          above: !0,
          create: GC(QD)
        }]
      }
    }
    const dC = {
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
      semicolons: ZD().SemicolonPreference.Insert
    };
    const YC = iD.j.define(),
      WC = {
        lineNumbers: !0,
        tabSize: 4
      };

    function sC(DD) {
      let {
        isLobbyCode: CD,
        code: cD,
        onChange: bD,
        canEditCode: yD,
        setTemporaryMessage: tD,
        close: PD,
        showTooltips: WD,
        lightMode: sD,
        collabState: eD,
        onRemoteDocChange: uD,
        files: hD,
        activePath: rD,
        pluginName: FD,
        pluginFile: DC,
        pluginSource: cC,
        setActiveDocReplacer: IC,
        showAiHints: iC,
        canAiChangeCode: fC = yD
      } = DD;
      const [bC, QC] = (0, fD.useState)(null), wC = null === eD || void 0 === eD ? void 0 : eD.version, SC = null === eD || void 0 === eD ? void 0 : eD.clientID, BC = (0, fD.useRef)({
        isLobbyCode: CD,
        files: hD,
        code: cD,
        activePath: rD
      }), yC = (0, fD.useRef)(uD);
      yC.current = uD;
      const MC = (0, fD.useRef)(null),
        tC = (0, fD.useRef)(eD);
      tC.current = eD;
      const ZC = (0, fD.useRef)(null),
        NC = (0, fD.useRef)(null),
        gC = (0, fD.useRef)(null),
        XC = (0, fD.useRef)(PD);
      XC.current = PD;
      const mC = (0, fD.useRef)(cD);
      mC.current = cD;
      const PC = (0, fD.useRef)(cC);
      PC.current = cC;
      const HC = function(DD, CD, cD, ID) {
        return cD ? `/plugin-preview/${cD}/${null!==ID&&void 0!==ID?ID:"index.ts"}` : DD ? zC(null !== CD && void 0 !== CD ? CD : XD.g) : VC
      }(CD, rD, FD, DC);
      (0, fD.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: DD,
            files: CD,
            code: cD,
            activePath: ID
          } = BC.current, pD = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: ZD().ModuleKind.ESNext,
            moduleResolution: ZD().ModuleResolutionKind.Bundler,
            target: ZD().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(gD.e).map((DD => [DD.specifier, [DD.typesVfsPath]])))
            }
          }, iD = new Map, fD = [];
          if (DD) {
            const DD = null !== CD && void 0 !== CD ? CD : {
              [XD.g]: cD || "\n"
            };
            for (const [CD, cD] of Object.entries(DD)) {
              const DD = zC(CD);
              iD.set(DD, cD || "\n"), fD.push(DD)
            }
            const pD = zC(null !== ID && void 0 !== ID ? ID : XD.g);
            iD.has(pD) ? iD.set(pD, cD || "\n") : (iD.set(pD, cD || "\n"), fD.push(pD)), iD.set("/node_modules/@bloxd/index.d.ts", SD.default), fD.push("/node_modules/@bloxd/index.d.ts");
            for (const CD of Object.values(gD.e)) {
              iD.set(CD.typesVfsPath, CD.types), fD.push(CD.typesVfsPath);
              for (const [DD, cD] of Object.entries(CD.files)) {
                const ID = `/plugin-preview/${CD.name}/${DD}`;
                iD.set(ID, cD || "\n"), fD.push(ID)
              }
            }
          } else iD.set(VC, cD || "\n"), fD.push(VC);
          iD.set("/globals.d.ts", DD ? wD.d : QD.b), iD.set("/lib.d.ts", BD.b), fD.push("/globals.d.ts", "/lib.d.ts");
          const bD = MD.c(iD),
            yD = MD.e(bD, fD, ZD(), pD);
          QC({
            sf: yD,
            fsMap: iD
          })
        }()
      }), []), (0, fD.useEffect)((() => {
        var DD, ID;
        if (!bC || !CD) return;
        const {
          sf: pD,
          fsMap: iD
        } = bC;
        if (function(DD, CD, cD) {
            const ID = new Set;
            for (const [pD, iD] of Object.entries(cD)) {
              const cD = zC(pD);
              ID.add(cD);
              const fD = iD || "\n";
              CD.get(cD) !== fD && (CD.set(cD, fD), jC(DD, cD, fD))
            }
            for (const pD of [...CD.keys()]) "/globals.d.ts" === pD || "/lib.d.ts" === pD || pD.startsWith("/node_modules/") || pD.startsWith("/plugin-preview/") || ID.has(pD) || (CD.delete(pD), DD.getSourceFile(pD) && DD.deleteFile(pD))
          }(pD, iD, null !== hD && void 0 !== hD ? hD : {
            [XD.g]: cD || "\n"
          }), FD) return void jC(pD, HC, cC || "\n");
        const fD = null !== (DD = null === (ID = MC.current) || void 0 === ID ? void 0 : ID.state.doc.toString()) && void 0 !== DD ? DD : cD;
        jC(pD, HC, fD || "\n")
      }), [hD, rD, bC, FD, cC, HC, cD, CD]), (0, fD.useEffect)((() => {
        if (!bC) return;
        const {
          sf: DD
        } = bC;
        jC(DD, HC, (FD ? cC : cD) || "\n")
      }), [cD, FD, cC, HC, bC]), (0, fD.useEffect)((() => () => {
        NC.current && (NC.current(), NC.current = null)
      }), []), (0, fD.useEffect)((() => (IC(((DD, CD) => {
        if (FD) return !1;
        const cD = MC.current,
          ID = tC.current,
          pD = ID ? (0, mD.u)(ID.docKey) : null;
        if (!cD || !ID || ZC.current !== ID.clientID || DD !== pD) return !1;
        const iD = cD.state.doc.toString();
        return iD !== CD && cD.dispatch({
          changes: {
            from: 0,
            to: iD.length,
            insert: CD
          }
        }), !0
      })), () => {
        MC.current = null, ZC.current = null, IC(null)
      })), [IC, FD]);
      const UC = CD ? FD ? null : null !== rD && void 0 !== rD ? rD : XD.g : vC.b,
        xC = CC(MC, UC);
      pC(MC, tD), (0, OD.f)("FormatCode", (() => {
        if (!bC || !MC.current || FD) return;
        const {
          sf: DD,
          fsMap: cD
        } = bC, ID = DD.getSourceFile(HC).getFullText();
        let pD = 0;
        if (CD && hD)
          for (const [CD, bD] of Object.entries(hD)) CD !== (null !== rD && void 0 !== rD ? rD : XD.g) && (pD += bD.length);
        const iD = function(DD, CD, cD, ID, pD) {
          const iD = DD.languageService.getFormattingEditsForDocument(ID, dC);
          if (!iD.length) return HD.e.error("Code is already formatted.");
          iD.sort(((DD, CD) => CD.span.start - DD.span.start));
          let fD = DD.getSourceFile(ID).getFullText();
          for (const bD of iD) fD = fD.slice(0, bD.span.start) + bD.mf + fD.slice(bD.span.start + bD.span.length);
          return fD !== (cD ? (0, nD.j)(fD, pD) : (0, nD.h)(fD)) ? HD.e.error("Formatting the code will go beyond the character limit.") : HD.e.value(fD)
        }(DD, 0, CD, HC, pD);
        if (iD.isError()) return void tD({
          message: iD.asError().message,
          type: "warning"
        });
        const fD = iD.getValue();
        fD && (MC.current.dispatch({
          changes: {
            from: 0,
            to: ID.length,
            insert: fD
          },
          selection: {
            anchor: fD.length
          }
        }), jC(DD, HC, fD), bD(fD))
      }));
      const qC = (0, fD.useMemo)((() => {
        if (!bC) return [];
        const {
          sf: DD,
          fsMap: cD
        } = bC;
        ! function(DD, CD, cD, ID) {
          if (DD.getSourceFile(cD)) return;
          const pD = ID || "\n";
          CD.set(cD, pD), DD.createFile(cD, pD)
        }(DD, cD, HC, (FD ? PC.current : mC.current) || "\n");
        const fD = CD && lC(FD ? null !== DC && void 0 !== DC ? DC : "index.ts" : rD),
          bD = [(0, pD.e)({
            jsx: !1,
            typescript: fD
          }), iD.f.highest(iD.e.domEventHandlers({
            keydown: DD => "Escape" === DD.key ? (XC.current(), DD.stopPropagation(), !0) : (DD.stopPropagation(), !1)
          })), (0, ID.e)({
            override: [TC(DD, HC)]
          }), qD.u.fromClass(class {
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
                (0, LD.lb)(this.view.state, DD) || (0, LD.S)(this.view, DD, TD) || this.scheduleParse()
              }), GD))
            }
          }), ...AD, iD.e.lineWrapping, iD.n.define({
            create: RC(DD, WD, HC),
            update(CD, cD) {
              const ID = cD.effects.some((DD => DD.is(YC)));
              return cD.docChanged || cD.selection || ID ? (jC(DD, HC, cD.state.doc.toString() || " "), RC(DD, WD, HC)(cD.state)) : CD
            },
            provide: DD => iD.A.computeN([DD], (CD => CD.field(DD)))
          }), (0, iD.w)(kC(DD, HC)), (0, vD.e)(LC(CD, DD, HC)), iD.q.fromClass(class {
            constructor(DD) {
              this.view = DD, this.searchPanel = null
            }
            update(DD) {
              const CD = DD.view.dom.querySelector(".cm-search");
              if (CD !== this.searchPanel) {
                if (this.searchPanel = CD, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (DD => {
                  "Escape" === DD.key && (0, oD.c)(this.view), DD.stopPropagation()
                }))
              }
            }
          })];
        iC && !FD && bD.push(nC(CD ? null !== rD && void 0 !== rD ? rD : XD.g : vC.b, fC));
        const QD = tC.current;
        if (QD && !FD) {
          bD.push(... function(DD, CD, cD, ID, pD) {
            let iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const fD = (0, mD.u)(cD),
              bD = qD.u.fromClass(class {
                constructor(DD) {
                  this.view = DD, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = aD.i.subscribe("codeCollab", (DD => {
                    DD.docKey === fD && DD.type === mD.f.Updates && (DD.updates ? this.applyUpdates(DD.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(DD) {
                  const CD = JSON.parse(DD).map((DD => ({
                    clientID: DD.clientID,
                    changes: xD.ChangeSet.fromJSON(DD.changes)
                  })));
                  CD.length > 0 && (this.view.dispatch((0, UD.h)(this.view.state, CD)), pD && pD(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(DD) {
                  iD && (DD.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const DD = (0, UD.k)(this.view.state);
                  if (this.pushing || !DD.length) return;
                  const CD = Date.now() - this.lastPushTime;
                  if (CD < lD) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), lD - CD)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), zD);
                  const cD = (0, UD.e)(this.view.state),
                    pD = DD.map((DD => ({
                      clientID: DD.clientID,
                      changes: DD.changes.toJSON()
                    }))),
                    iD = JSON.stringify(pD);
                  iD.length <= mD.g ? JD.gameBridge.send("sendCodeCollab", {
                    tC: mD.e.Push,
                    ZC: fD,
                    oC: cD,
                    gC: iD
                  }) : (0, VD.postJsonWithMetricsCookiesAndJsonResponse)(`${ID.gsUrl}/code/collab-push`, KD.p["collab-push"].toBuffer({
                    gameNameWithVariation: ID.gameNameWithVariation,
                    lobbyName: ID.lobbyName,
                    docKey: fD,
                    version: cD,
                    updates: iD
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
                  const DD = (0, UD.e)(this.view.state);
                  (0, VD.postJsonWithMetricsCookiesAndJsonResponse)(`${ID.gsUrl}/code/collab-pull`, KD.p["collab-pull"].toBuffer({
                    gameNameWithVariation: ID.gameNameWithVariation,
                    lobbyName: ID.lobbyName,
                    docKey: fD,
                    fromVersion: DD
                  }), {
                    retries: 1
                  }).then((DD => {
                    this.destroyed || (DD.fullDoc ? aD.i.Uo("codeCollabRejoin", {
                      docKey: fD,
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
                  if (DD - this.lastCursorSent < jD) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), jD)));
                  this.lastCursorSent = DD;
                  const CD = this.view.state.selection.main;
                  JD.gameBridge.send("sendCodeCollab", {
                    tC: mD.e.Cursor,
                    ZC: fD,
                    OC: CD.anchor,
                    PC: CD.head
                  })
                }
                destroy() {
                  this.destroyed = !0, aD.i.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, UD.b)({
              startVersion: DD,
              clientID: CD
            }), bD]
          }(wC, SC, QD.docKey, QD.httpConfig, (DD => {
            var CD;
            null === (CD = yC.current) || void 0 === CD || CD.call(yC, DD)
          }), yD));
          const DD = function(DD, CD) {
            const cD = (0, mD.u)(DD);
            return {
              extensions: [ED],
              connect(DD) {
                if (CD) {
                  const cD = CD.map((DD => kD.of({
                    playerId: DD.playerId,
                    playerName: DD.playerName,
                    colour: DD.colour,
                    anchor: DD.anchor,
                    head: DD.head,
                    lastMoved: Date.now()
                  })));
                  cD.length > 0 && DD.dispatch({
                    effects: cD
                  })
                }
                const ID = aD.i.subscribe("codeCollab", (CD => {
                    if (CD.docKey === cD)
                      if (CD.type === mD.f.RemoteCursor) DD.dispatch({
                        effects: kD.of({
                          playerId: CD.playerId,
                          playerName: CD.playerName,
                          colour: CD.colour,
                          anchor: CD.anchor,
                          head: CD.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (CD.type === mD.f.Presence) {
                      const cD = JSON.parse(CD.peers),
                        ID = new Set(cD.map((DD => DD.playerId))),
                        pD = DD.state.field(ED),
                        iD = [];
                      for (const [DD] of pD.cursors) ID.has(DD) || iD.push(dD.of(DD));
                      iD.length > 0 && DD.dispatch({
                        effects: iD
                      })
                    }
                  })),
                  pD = setInterval((() => {
                    DD.dom.isConnected ? DD.dispatch({
                      effects: YD.of(Date.now())
                    }) : clearInterval(pD)
                  }), RD);
                return () => {
                  aD.i.unsubscribe(ID), clearInterval(pD)
                }
              }
            }
          }(QD.docKey, QD.existingCursors);
          bD.push(...DD.extensions), gC.current = DD.connect
        } else gC.current = null;
        return bD
      }), [CD, bC, WD, wC, SC, HC, rD, FD, DC, yD, iC, fC]);
      if (!bC || !eD && !FD) return (0, OC.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, OC.jsx)(ND.e, {})
      });
      const JC = FD ? `plugin-${FD}-${null!==DC&&void 0!==DC?DC:"index.ts"}` : eD ? `collab-${eD.clientID}` : `local-${CD}`;
      return (0, OC.jsx)(iD.u, {
        value: FD ? null !== cC && void 0 !== cC ? cC : "" : cD,
        onChange: bD,
        extensions: qC,
        className: "CodeEditorContent",
        theme: sD ? oC : "dark",
        editable: yD && !FD,
        basicSetup: WC,
        onCreateEditor: DD => {
          var CD;
          MC.current = DD, ZC.current = null !== (CD = null === eD || void 0 === eD ? void 0 : eD.clientID) && void 0 !== CD ? CD : null, xC(DD), NC.current && NC.current(), gC.current && (NC.current = gC.current(DD))
        }
      }, JC)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);