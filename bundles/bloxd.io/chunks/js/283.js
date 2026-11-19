export const id = 283;
export const ids = [283];
export const modules = {
  40515: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Wu
    });
    var Ez = bz(40524),
      nz = bz(40569),
      iz = bz(40577),
      lz = bz(56),
      Mz = bz(79),
      tz = bz(40598),
      Hz = bz(40603),
      Oz = bz(4517),
      pz = bz(40607),
      dz = bz(1846),
      Fz = bz(40611),
      Zz = bz(40624),
      Rz = bz.n(Zz),
      Kz = bz(40582),
      wz = bz(40590),
      Xz = bz(1305),
      fz = bz(36291),
      sz = bz(1226),
      rz = bz(36297),
      oz = bz(36185),
      Nz = bz(1417),
      vz = bz(588),
      xz = bz(1232),
      Jz = bz(40669),
      Az = bz(40531),
      Tz = bz(40538),
      Lz = bz(1871),
      Pz = bz(3521),
      Gz = bz(22),
      az = bz(1118);
    const Vz = 1e4,
      mz = 250,
      qz = 250;
    var hz = bz(40551);
    const Uz = 50,
      cz = 100;
    const gz = 2e3,
      Sz = Az.B.define(),
      yz = Az.B.define(),
      Dz = Az.B.define();
    class Qz extends Tz.t {
      constructor(zz, uz, bz) {
        super(), this.colour = zz, this.playerName = uz, this.showName = bz
      }
      toDOM() {
        const zz = document.createElement("span");
        zz.className = "cm-remote-cursor-wrapper", zz.style.borderLeftColor = this.colour;
        const uz = document.createElement("span");
        if (uz.className = "cm-remote-cursor", uz.style.borderLeftColor = this.colour, zz.appendChild(uz), this.showName) {
          const uz = document.createElement("span");
          uz.className = "cm-remote-cursor-name", uz.style.backgroundColor = this.colour, uz.textContent = this.playerName, zz.appendChild(uz)
        }
        return zz
      }
      eq(zz) {
        return this.colour === zz.colour && this.playerName === zz.playerName && this.showName === zz.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function Wz(zz, uz) {
      const bz = [],
        Ez = [];
      for (const [, lz] of zz) {
        const zz = uz - lz.lastMoved < gz;
        if (bz.push({
            pos: lz.head,
            decoration: Tz.e.widget({
              widget: new Qz(lz.colour, lz.playerName, zz),
              side: 1
            })
          }), lz.anchor !== lz.head) {
          const zz = Math.min(lz.anchor, lz.head),
            uz = Math.max(lz.anchor, lz.head);
          Ez.push({
            from: zz,
            to: uz,
            decoration: Tz.e.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${lz.colour}33`
              }
            })
          })
        }
      }
      const nz = new Az.u,
        iz = [];
      for (const lz of bz) iz.push({
        bias: 1,
        deco: lz.decoration,
        from: lz.pos,
        to: lz.pos
      });
      for (const lz of Ez) iz.push({
        bias: 0,
        deco: lz.decoration,
        from: lz.from,
        to: lz.to
      });
      iz.sort(((zz, uz) => zz.from - uz.from || zz.deco.startSide - uz.deco.startSide || zz.bias - uz.bias));
      for (const lz of iz) nz.add(lz.from, lz.to, lz.deco);
      return nz.finish()
    }
    const ez = Az.E.define({
      create: () => ({
        cursors: new Map,
        cE: Tz.e.none
      }),
      update(zz, uz) {
        let bz = zz.cursors,
          Ez = !1;
        if (uz.docChanged) {
          const zz = new Map;
          for (const [Ez, nz] of bz) zz.set(Ez, {
            ...nz,
            anchor: uz.changes.mapPos(nz.anchor, 1),
            head: uz.changes.mapPos(nz.head, 1)
          });
          bz = zz, Ez = !0
        }
        for (const nz of uz.effects)
          if (nz.is(Sz)) {
            if (!Number.isInteger(nz.value.anchor) || !Number.isInteger(nz.value.head)) {
              console.warn(`Code Editor: ignored player ${nz.value.playerId}'s cursor at ${nz.value.anchor}-${nz.value.head}`);
              continue
            }
            const iz = uz.state.doc.length,
              lz = {
                ...nz.value,
                anchor: Math.min(nz.value.anchor, iz),
                head: Math.min(nz.value.head, iz)
              };
            bz === zz.cursors && (bz = new Map(bz)), bz.set(lz.playerId, lz), Ez = !0
          } else nz.is(yz) ? bz.has(nz.value) && (bz === zz.cursors && (bz = new Map(bz)), bz.delete(nz.value), Ez = !0) : nz.is(Dz) && (Ez = !0);
        return Ez ? {
          cursors: bz,
          cE: Wz(bz, Date.now())
        } : zz
      },
      provide: zz => Tz.k.cE.from(zz, (zz => zz.cE))
    });
    const jz = Az.B.define(),
      Iz = Tz.e.mark({
        class: "CodeInsertFlash"
      }),
      Bz = Az.E.define({
        create: () => Tz.e.none,
        update(zz, uz) {
          let bz = zz.map(uz.changes);
          for (const Ez of uz.effects) Ez.is(jz) && (bz = Ez.value ? Tz.e.set(Iz.range(Ez.value.from, Ez.value.to)) : Tz.e.none);
          return bz
        },
        provide: zz => Tz.k.cE.from(zz)
      }),
      Cz = Az.E.define({
        create: () => !1,
        update: (zz, uz) => zz || void 0 !== uz.annotation(Az.J.userEvent) && !uz.annotation(Az.J.remote)
      }),
      Yz = [Bz, Cz];

    function kz(zz) {
      return zz.field(Cz)
    }
    const zu = 3e4;

    function uu(zz, uz) {
      const bz = (0, lz.useRef)(null);
      (0, lz.useEffect)((() => {
        var zz;
        (null === (zz = bz.current) || void 0 === zz ? void 0 : zz.path) !== uz && (bz.current = null)
      }), [uz]);
      const Ez = zz => {
        var Ez;
        const nz = bz.current;
        if (null === zz || void 0 === zz || !zz.dom.isConnected || !nz || nz.path !== uz) return;
        bz.current = null;
        const {
          MZ: lz
        } = nz;
        if (lz && null !== lz.text && performance.now() - lz.at < zu) {
          const uz = function(zz, uz) {
            if (zz === uz) return null;
            const bz = Math.min(zz.length, uz.length);
            let Ez = 0;
            for (; Ez < bz && zz[Ez] === uz[Ez];) Ez++;
            let nz = 0;
            for (; nz < bz - Ez && zz[zz.length - 1 - nz] === uz[uz.length - 1 - nz];) nz++;
            return {
              from: Ez,
              to: zz.length - nz,
              insert: uz.slice(Ez, uz.length - nz)
            }
          }(zz.state.doc.toString(), lz.text);
          null !== uz && zz.dispatch({
            changes: uz,
            userEvent: lz.placed ? "input" : void 0
          })
        }
        const {
          doc: Mz
        } = zz.state, tz = Mz.line(Math.min(Math.max(nz.line, 1), Mz.lines)), Hz = tz.from + Math.min(null !== (Ez = nz.column) && void 0 !== Ez ? Ez : 0, tz.length);
        zz.dispatch({
          selection: {
            anchor: Hz
          },
          effects: iz.e.scrollIntoView(Hz, {
            y: "center"
          }),
          userEvent: null !== lz && void 0 !== lz && lz.placed ? "select" : void 0
        }), !1 !== (null === lz || void 0 === lz ? void 0 : lz.focused) && zz.focus()
      };
      return (0, Nz.g)("CodeEditorGoToLine", (uz => {
        bz.current = uz, Ez(zz.current)
      })), (0, Nz.g)("CodeEditorKeepEdits", (() => {
        const Ez = zz.current;
        if (null === Ez || !Ez.dom.isConnected || null === uz) return;
        const {
          doc: nz,
          selection: iz
        } = Ez.state, {
          head: lz
        } = iz.main, Mz = nz.lineAt(lz), tz = {
          text: (0, Jz.f)(Ez.state).length > 0 ? nz.toString() : null,
          at: performance.now(),
          focused: Ez.hasFocus,
          placed: kz(Ez.state)
        };
        bz.current = {
          path: uz,
          line: Mz.number,
          column: lz - Mz.from,
          MZ: tz
        }
      })), zz => {
        var nz;
        const iz = bz.current;
        !1 === (null === iz || void 0 === iz || null === (nz = iz.MZ) || void 0 === nz ? void 0 : nz.focused) && iz.path === uz || zz.focus(), Ez(zz)
      }
    }
    var bu = bz(4139),
      Eu = bz(1181);

    function nu(zz, uz) {
      const {
        t: bz
      } = (0, Eu.F)();
      (0, Nz.g)("CodeEditorInsertText", (Ez => {
        let {
          text: nz,
          focus: iz
        } = Ez;
        const lz = zz.current,
          Mz = null !== lz && void 0 !== lz && lz.dom.isConnected ? function(zz, uz) {
            if (!kz(zz)) return null;
            const {
              from: bz,
              to: Ez
            } = zz.selection.main, nz = bz + uz.length;
            return {
              changes: {
                from: bz,
                to: Ez,
                insert: uz
              },
              selection: {
                anchor: nz
              },
              effects: [Tz.k.scrollIntoView(nz, {
                y: "center"
              }), jz.of({
                from: bz,
                to: nz
              })],
              userEvent: "input"
            }
          }(lz.state, nz) : null;
        null !== lz && null !== Mz ? (lz.dispatch(Mz), iz && lz.focus(), setTimeout((() => {
          lz.dom.isConnected && lz.dispatch({
            effects: jz.of(null)
          })
        }), 1500)) : (0, bu.b)(nz).then((() => {
          uz({
            message: bz("codeEditorWorld:pickCopied", {
              coords: nz
            }),
            type: "success"
          })
        }), (zz => {
          console.error("Pick could not copy the coordinates", zz), uz({
            message: bz("codeEditorWorld:pickPlaceCursor", {
              coords: nz
            }),
            type: "warning"
          })
        }))
      }))
    }
    var iu = bz(40566);
    const lu = "#e45649",
      Mu = "#383a42",
      tu = "#696c77",
      Hu = "#986801",
      Ou = "#e5e5e6",
      pu = "#fafafa",
      du = "#eaeaeb",
      Fu = "#526fff",
      Zu = Tz.k.theme({
        "&": {
          color: Mu,
          backgroundColor: pu
        },
        ".cm-content": {
          caretColor: Fu
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Fu
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Mu
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
          backgroundColor: pu,
          color: tu,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Ou
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: du
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: du,
          borderBottomColor: du
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Ou,
            color: Mu
          }
        }
      }, {
        dark: !1
      }),
      Ru = hz.d.define([{
        tag: iu.i.keyword,
        color: "#a626a4"
      }, {
        tag: [iu.i.name, iu.i.deleted, iu.i.character, iu.i.propertyName, iu.i.macroName],
        color: lu
      }, {
        tag: [iu.i.function(iu.i.variableName), iu.i.labelName],
        color: "#4078f2"
      }, {
        tag: [iu.i.color, iu.i.constant(iu.i.name), iu.i.standard(iu.i.name)],
        color: Hu
      }, {
        tag: [iu.i.definition(iu.i.name), iu.i.separator],
        color: Mu
      }, {
        tag: [iu.i.typeName, iu.i.className, iu.i.number, iu.i.changed, iu.i.annotation, iu.i.modifier, iu.i.self, iu.i.namespace],
        color: "#c18401"
      }, {
        tag: [iu.i.operator, iu.i.operatorKeyword, iu.i.url, iu.i.escape, iu.i.regexp, iu.i.link, iu.i.special(iu.i.string)],
        color: "#0184bc"
      }, {
        tag: [iu.i.meta, iu.i.comment],
        color: tu
      }, {
        tag: iu.i.strong,
        fontWeight: "bold"
      }, {
        tag: iu.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: iu.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: iu.i.link,
        color: tu,
        textDecoration: "underline"
      }, {
        tag: iu.i.heading,
        fontWeight: "bold",
        color: lu
      }, {
        tag: [iu.i.atom, iu.i.bool, iu.i.special(iu.i.variableName)],
        color: Hu
      }, {
        tag: [iu.i.processingInstruction, iu.i.string, iu.i.inserted],
        color: "#50a14f"
      }, {
        tag: iu.i.invalid,
        color: "#000000"
      }]),
      Ku = [Zu, (0, hz.eb)(Ru)];
    var wu = bz(36334),
      Xu = bz(40673);
    const fu = iz.l.define(),
      su = iz.n.define({
        create: () => !1,
        update(zz, uz) {
          for (const bz of uz.effects) bz.is(fu) && (zz = bz.value);
          return zz
        }
      }),
      ru = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function ou(zz, uz) {
      return [su, iz.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.onDown = zz => {
            const uz = zz.target instanceof Element && null !== zz.target.closest(".cm-tooltip");
            0 !== zz.button || uz || this.view.state.field(su) || this.view.dispatch({
              effects: fu.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(su) && this.view.dispatch({
              effects: fu.of(!1)
            })
          }, zz.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), iz.s.compute(["selection", su], (bz => function(zz, uz, bz) {
        const Ez = zz.selection.main;
        return Ez.empty || zz.field(su) || zz.sliceDoc(Ez.from, Ez.to).trim().length < 2 ? null : {
          pos: Ez.from,
          above: !0,
          create: zz => {
            const Ez = document.createElement("div");
            Ez.className = "CodeSelectionActions", Ez.setAttribute("role", "toolbar"), Ez.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: nz,
                label: iz
              }
              of ru) {
              if (!bz && "explain" !== nz) continue;
              const lz = document.createElement("button");
              lz.type = "button", lz.textContent = iz, "change" !== nz && (lz.title = Xu.e, lz.dataset.asksAi = "true"), lz.addEventListener("mousedown", (zz => {
                zz.preventDefault()
              })), lz.addEventListener("click", (() => {
                const bz = zz.state.selection.main;
                if (bz.empty) return;
                const Ez = {
                  action: nz,
                  path: uz,
                  fromLine: zz.state.doc.lineAt(bz.from).number,
                  toLine: zz.state.doc.lineAt(bz.to > bz.from && zz.state.doc.lineAt(bz.to).from === bz.to ? bz.to - 1 : bz.to).number,
                  text: zz.state.sliceDoc(bz.from, bz.to)
                };
                Gz.k.sK("WorldCodeAiSelection", Ez), zz.dispatch({
                  selection: {
                    anchor: bz.to
                  }
                })
              })), Ez.appendChild(lz)
            }
            return {
              dom: Ez
            }
          }
        }
      }(bz, zz, uz)))]
    }
    var Nu = bz(1089);
    const vu = new Set(["(", "{", "[", "<"]),
      xu = new Set([")", "}", "]", ">"]),
      Ju = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Au(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function bz(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = [];
        for (const nz of zz) {
          let zz;
          zz = "punctuation" === nz.kind ? Ju.text : "parameterName" === nz.kind ? Ju.parameterName : uz, Ez.push({
            str: nz.text,
            style: {
              color: zz,
              opacity: bz ? .5 : void 0
            }
          })
        }
        return Ez
      }
      const Ez = [];
      if (Ez.push(...bz(zz.prefixDisplayParts, Ju.text)), zz.parameters.length > 0) {
        Ez.push("\n");
        for (let nz = 0; nz < zz.parameters.length; nz++) {
          const iz = zz.parameters[nz];
          Ez.push("\t"), Ez.push(...bz(iz.displayParts, Ju.parameter, null !== uz && nz !== uz)), Ez.push("\n")
        }
      }
      return Ez.push(...bz(zz.suffixDisplayParts, Ju.suffix)), zz.documentation && (Ez.push("\n\n"), Ez.push(...bz(zz.documentation, Ju.docs))), Ez
    }
    var Tu = function(zz) {
      return zz[zz.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", zz[zz.DuplicateIdentifier = 2300] = "DuplicateIdentifier", zz
    }(Tu || {});
    const Lu = new Set([Tu.DuplicateIdentifier]),
      Pu = new Set([Tu.VariableDefinedElsewhere]),
      Gu = new Set([]),
      au = "/index.js";

    function Vu(zz) {
      return "/" + zz
    }

    function mu(zz, uz, bz) {
      zz.getSourceFile(uz) && zz.deleteFile(uz), zz.createFile(uz, bz)
    }

    function qu(zz) {
      return !!zz && ((0, rz.s)(zz) || (0, rz.o)(zz))
    }

    function hu(zz, uz, bz) {
      return () => {
        let Ez = [...uz.languageService.getSemanticDiagnostics(bz), ...uz.languageService.getSyntacticDiagnostics(bz)];
        return Ez = Ez.filter((zz => !(0, vz.F)(zz.start) && !(0, vz.F)(zz.length) && !Lu.has(zz.code))), zz || (Ez = Ez.filter((zz => !Pu.has(zz.code)))), Ez.map((zz => ({
          from: zz.start,
          to: zz.start + zz.length,
          message: "string" === typeof zz.messageText ? zz.messageText : zz.messageText.messageText,
          severity: Gu.has(zz.code) ? "warning" : "error"
        })))
      }
    }

    function Uu(zz, uz) {
      return bz => {
        var Ez, nz;
        const iz = zz.languageService.getCompletionsAtPosition(uz, bz.pos, {});
        if (!iz) return {
          from: bz.pos,
          options: []
        };
        let lz = null !== (Ez = null === (nz = iz.optionalReplacementSpan) || void 0 === nz ? void 0 : nz.start) && void 0 !== Ez ? Ez : bz.pos;
        if (!iz.optionalReplacementSpan) {
          const zz = bz.state.doc.sliceString(0, bz.pos);
          for (; lz > 0 && /[\w$]/.test(zz[lz - 1]);) lz--
        }
        return iz.entries = iz.entries.filter((zz => zz.kind !== Rz().ScriptElementKind.warning)), {
          from: lz,
          options: iz.entries.map((Ez => {
            var nz, iz, Mz, tz;
            const Hz = zz.languageService.getCompletionEntryDetails(uz, bz.pos, Ez.name, {}, Ez.source, {}, Ez.data),
              Oz = null !== (nz = null === (iz = Ez.replacementSpan) || void 0 === iz ? void 0 : iz.start) && void 0 !== nz ? nz : lz,
              pz = Ez.replacementSpan ? Ez.replacementSpan.start + Ez.replacementSpan.length : bz.pos,
              dz = null !== (Mz = Ez.insertText) && void 0 !== Mz ? Mz : Ez.name;
            return {
              label: Ez.name,
              detail: null === Hz || void 0 === Hz ? void 0 : Hz.displayParts.map((zz => zz.text)).join(""),
              info: null === Hz || void 0 === Hz || null === (tz = Hz.documentation) || void 0 === tz ? void 0 : tz.map((zz => zz.text)).join(""),
              apply: zz => {
                zz.dispatch({
                  changes: {
                    from: Oz,
                    to: pz,
                    insert: dz
                  },
                  selection: {
                    anchor: Oz + dz.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function cu(zz) {
      return uz => {
        const bz = document.createElement("div");
        bz.className = "CodeEditorTooltip";
        let Ez = !1;
        return queueMicrotask((() => {
          Ez || (Mz.render((0, Nu.jsx)(dz.b, {
            text: zz
          }), bz), uz.requestMeasure())
        })), {
          dom: bz,
          destroy() {
            Ez = !0, queueMicrotask((() => {
              Mz.unmountComponentAtNode(bz)
            }))
          }
        }
      }
    }

    function gu(zz, uz, bz) {
      return Ez => {
        var nz;
        if (!uz) return [];
        const iz = null === (nz = Ez.selection.al[0]) || void 0 === nz ? void 0 : nz.head;
        if (void 0 === iz) return [];
        const lz = zz.languageService.getSignatureHelpItems(bz, iz, {});
        if (!lz || !lz.items.length) return [];
        const Mz = lz.applicableSpan.start - lz.items[0].prefixDisplayParts.map((zz => zz.text)).join("").length,
          tz = lz.applicableSpan.start,
          Hz = Ez.doc.lineAt(iz),
          Oz = Hz.from,
          pz = Math.min(Hz.to, iz);
        let dz, Fz;
        return Mz < Oz ? (dz = Oz, Fz = pz) : (dz = Mz, Fz = tz), [{
          pos: dz,
          end: Fz,
          above: !1,
          create: cu(Au(lz.items[0], lz.argumentIndex))
        }]
      }
    }

    function Su(zz, uz) {
      return (bz, Ez, nz) => {
        const iz = zz.languageService.getQuickInfoAtPosition(uz, Ez);
        if (!iz) return [];
        const lz = iz.textSpan.start,
          Mz = iz.textSpan.start + iz.textSpan.length;
        if (Ez < lz || Ez >= Mz) return [];
        if (iz.kind === Rz().ScriptElementKind.memberFunctionElement || iz.kind === Rz().ScriptElementKind.variableElement && "declare" === iz.kindModifiers) {
          const zz = iz.displayParts.findIndex((zz => "space" === zz.kind)); - 1 !== zz && (iz.displayParts = iz.displayParts.slice(zz));
          const uz = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            bz = iz.displayParts.findIndex((zz => "punctuation" === zz.kind && "(" === zz.text)); - 1 !== bz && (uz.prefixDisplayParts = iz.displayParts.slice(0, bz + 1), iz.displayParts = iz.displayParts.slice(bz + 1));
          const Ez = iz.displayParts.findLastIndex((zz => "punctuation" === zz.kind && ")" === zz.text)); - 1 !== Ez && (uz.suffixDisplayParts = iz.displayParts.slice(Ez), iz.displayParts = iz.displayParts.slice(0, Ez));
          let nz = 0,
            tz = [];
          for (const lz of iz.displayParts)
            if (vu.has(lz.text) ? nz++ : xu.has(lz.text) && nz--, "lineBreak" !== lz.kind) {
              if ("space" === lz.kind) {
                if (0 === tz.length) continue;
                tz.push({
                  kind: "space",
                  text: " "
                })
              } else tz.push(lz);
              0 === nz && "," === lz.text && (uz.parameters.push({
                displayParts: tz
              }), tz = [])
            } return tz.length > 0 && uz.parameters.push({
            displayParts: tz
          }), uz.documentation = iz.documentation, [{
            pos: lz,
            end: Mz,
            above: !0,
            create: cu(Au(uz))
          }]
        }
        const tz = [];
        for (const zz of iz.displayParts) tz.push({
          str: zz.text,
          style: {
            color: Ju.text
          }
        });
        if (iz.documentation) {
          tz.push("\n\n");
          for (const zz of iz.documentation) tz.push({
            str: zz.text,
            style: {
              color: Ju.docs
            }
          })
        }
        return [{
          pos: lz,
          end: Mz,
          above: !0,
          create: cu(tz)
        }]
      }
    }
    const yu = {
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
      semicolons: Rz().SemicolonPreference.Insert
    };
    const Du = iz.l.define(),
      Qu = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Wu(zz) {
      let {
        isLobbyCode: uz,
        code: bz,
        onChange: Mz,
        canEditCode: dz,
        setTemporaryMessage: Zz,
        close: vz,
        showTooltips: Qz,
        lightMode: Wz,
        collabState: jz,
        onRemoteDocChange: Iz,
        files: Bz,
        activePath: Cz,
        pluginName: kz,
        pluginFile: zu,
        pluginSource: bu,
        setActiveDocReplacer: Eu,
        showAiHints: iu,
        canAiChangeCode: lu = dz
      } = zz;
      const [Mu, tu] = (0, lz.useState)(null), Hu = null === jz || void 0 === jz ? void 0 : jz.version, Ou = null === jz || void 0 === jz ? void 0 : jz.clientID, pu = (0, lz.useRef)({
        isLobbyCode: uz,
        files: Bz,
        code: bz,
        activePath: Cz
      }), du = (0, lz.useRef)(Iz);
      du.current = Iz;
      const Fu = (0, lz.useRef)(null),
        Zu = (0, lz.useRef)(jz);
      Zu.current = jz;
      const Ru = (0, lz.useRef)(null),
        Xu = (0, lz.useRef)(null),
        fu = (0, lz.useRef)(null),
        su = (0, lz.useRef)(vz);
      su.current = vz;
      const ru = (0, lz.useRef)(bz);
      ru.current = bz;
      const vu = (0, lz.useRef)(bu);
      vu.current = bu;
      const xu = function(zz, uz, bz, Ez) {
        return bz ? `/plugin-preview/${bz}/${null!==Ez&&void 0!==Ez?Ez:"index.ts"}` : zz ? Vu(null !== uz && void 0 !== uz ? uz : sz.i) : au
      }(uz, Cz, kz, zu);
      (0, lz.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: zz,
            files: uz,
            code: bz,
            activePath: Ez
          } = pu.current, nz = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Rz().ModuleKind.ESNext,
            moduleResolution: Rz().ModuleResolutionKind.Bundler,
            target: Rz().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(fz.i).map((zz => [zz.specifier, [zz.typesVfsPath]])))
            }
          }, iz = new Map, lz = [];
          if (zz) {
            const zz = null !== uz && void 0 !== uz ? uz : {
              [sz.i]: bz || "\n"
            };
            for (const [uz, bz] of Object.entries(zz)) {
              const zz = Vu(uz);
              iz.set(zz, bz || "\n"), lz.push(zz)
            }
            const nz = Vu(null !== Ez && void 0 !== Ez ? Ez : sz.i);
            iz.has(nz) ? iz.set(nz, bz || "\n") : (iz.set(nz, bz || "\n"), lz.push(nz)), iz.set("/node_modules/@bloxd/index.d.ts", Oz.default), lz.push("/node_modules/@bloxd/index.d.ts");
            for (const uz of Object.values(fz.i)) {
              iz.set(uz.typesVfsPath, uz.types), lz.push(uz.typesVfsPath);
              for (const [zz, bz] of Object.entries(uz.files)) {
                const Ez = `/plugin-preview/${uz.name}/${zz}`;
                iz.set(Ez, bz || "\n"), lz.push(Ez)
              }
            }
          } else iz.set(au, bz || "\n"), lz.push(au);
          iz.set("/globals.d.ts", zz ? Hz.d : tz.e), iz.set("/lib.d.ts", pz.d), lz.push("/globals.d.ts", "/lib.d.ts");
          const Mz = Fz.d(iz),
            dz = Fz.h(Mz, lz, Rz(), nz);
          tu({
            ml: dz,
            fsMap: iz
          })
        }()
      }), []), (0, lz.useEffect)((() => {
        var zz, Ez;
        if (!Mu || !uz) return;
        const {
          ml: nz,
          fsMap: iz
        } = Mu;
        if (function(zz, uz, bz) {
            const Ez = new Set;
            for (const [nz, iz] of Object.entries(bz)) {
              const bz = Vu(nz);
              Ez.add(bz);
              const lz = iz || "\n";
              uz.get(bz) !== lz && (uz.set(bz, lz), mu(zz, bz, lz))
            }
            for (const nz of [...uz.keys()]) "/globals.d.ts" === nz || "/lib.d.ts" === nz || nz.startsWith("/node_modules/") || nz.startsWith("/plugin-preview/") || Ez.has(nz) || (uz.delete(nz), zz.getSourceFile(nz) && zz.deleteFile(nz))
          }(nz, iz, null !== Bz && void 0 !== Bz ? Bz : {
            [sz.i]: bz || "\n"
          }), kz) return void mu(nz, xu, bu || "\n");
        const lz = null !== (zz = null === (Ez = Fu.current) || void 0 === Ez ? void 0 : Ez.state.doc.toString()) && void 0 !== zz ? zz : bz;
        mu(nz, xu, lz || "\n")
      }), [Bz, Cz, Mu, kz, bu, xu, bz, uz]), (0, lz.useEffect)((() => {
        if (!Mu) return;
        const {
          ml: zz
        } = Mu;
        mu(zz, xu, (kz ? bu : bz) || "\n")
      }), [bz, kz, bu, xu, Mu]), (0, lz.useEffect)((() => () => {
        Xu.current && (Xu.current(), Xu.current = null)
      }), []), (0, lz.useEffect)((() => (Eu(((zz, uz) => {
        if (kz) return !1;
        const bz = Fu.current,
          Ez = Zu.current,
          nz = Ez ? (0, rz.z)(Ez.docKey) : null;
        if (!bz || !Ez || Ru.current !== Ez.clientID || zz !== nz) return !1;
        const iz = bz.state.doc.toString();
        return iz !== uz && bz.dispatch({
          changes: {
            from: 0,
            to: iz.length,
            insert: uz
          }
        }), !0
      })), () => {
        Fu.current = null, Ru.current = null, Eu(null)
      })), [Eu, kz]);
      const Ju = uz ? kz ? null : null !== Cz && void 0 !== Cz ? Cz : sz.i : wu.b,
        Au = uu(Fu, Ju);
      nu(Fu, Zz), (0, Nz.g)("FormatCode", (() => {
        if (!Mu || !Fu.current || kz) return;
        const {
          ml: zz,
          fsMap: bz
        } = Mu, Ez = zz.getSourceFile(xu).getFullText();
        let nz = 0;
        if (uz && Bz)
          for (const [uz, Mz] of Object.entries(Bz)) uz !== (null !== Cz && void 0 !== Cz ? Cz : sz.i) && (nz += Mz.length);
        const iz = function(zz, uz, bz, Ez, nz) {
          const iz = zz.languageService.getFormattingEditsForDocument(Ez, yu);
          if (!iz.length) return xz.b.error("Code is already formatted.");
          iz.sort(((zz, uz) => uz.span.start - zz.span.start));
          let lz = zz.getSourceFile(Ez).getFullText();
          for (const Mz of iz) lz = lz.slice(0, Mz.span.start) + Mz.hl + lz.slice(Mz.span.start + Mz.span.length);
          return lz !== (bz ? (0, oz.m)(lz, nz) : (0, oz.i)(lz)) ? xz.b.error("Formatting the code will go beyond the character limit.") : xz.b.value(lz)
        }(zz, 0, uz, xu, nz);
        if (iz.isError()) return void Zz({
          message: iz.asError().message,
          type: "warning"
        });
        const lz = iz.getValue();
        lz && (Fu.current.dispatch({
          changes: {
            from: 0,
            to: Ez.length,
            insert: lz
          },
          selection: {
            anchor: lz.length
          }
        }), mu(zz, xu, lz), Mz(lz))
      }));
      const Tu = (0, lz.useMemo)((() => {
        if (!Mu) return [];
        const {
          ml: zz,
          fsMap: bz
        } = Mu;
        ! function(zz, uz, bz, Ez) {
          if (zz.getSourceFile(bz)) return;
          const nz = Ez || "\n";
          uz.set(bz, nz), zz.createFile(bz, nz)
        }(zz, bz, xu, (kz ? vu.current : ru.current) || "\n");
        const lz = uz && qu(kz ? null !== zu && void 0 !== zu ? zu : "index.ts" : Cz),
          Mz = [(0, nz.d)({
            jsx: !1,
            typescript: lz
          }), iz.i.highest(iz.e.domEventHandlers({
            keydown: zz => "Escape" === zz.key ? (su.current(), zz.stopPropagation(), !0) : (zz.stopPropagation(), !1)
          })), (0, Ez.c)({
            override: [Uu(zz, xu)]
          }), Tz.p.fromClass(class {
            constructor(zz) {
              this.view = zz, this.timeout = null, this.scheduleParse()
            }
            update(zz) {
              (zz.docChanged || zz.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const zz = this.view.viewport.to;
                (0, hz.ib)(this.view.state, zz) || (0, hz.H)(this.view, zz, Uz) || this.scheduleParse()
              }), cz))
            }
          }), ...Yz, iz.e.lineWrapping, iz.n.define({
            create: gu(zz, Qz, xu),
            update(uz, bz) {
              const Ez = bz.effects.some((zz => zz.is(Du)));
              return bz.docChanged || bz.selection || Ez ? (mu(zz, xu, bz.state.doc.toString() || " "), gu(zz, Qz, xu)(bz.state)) : uz
            },
            provide: zz => iz.s.computeN([zz], (uz => uz.field(zz)))
          }), (0, iz.r)(Su(zz, xu)), (0, wz.i)(hu(uz, zz, xu)), iz.p.fromClass(class {
            constructor(zz) {
              this.view = zz, this.searchPanel = null
            }
            update(zz) {
              const uz = zz.view.dom.querySelector(".cm-search");
              if (uz !== this.searchPanel) {
                if (this.searchPanel = uz, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (zz => {
                  "Escape" === zz.key && (0, Kz.d)(this.view), zz.stopPropagation()
                }))
              }
            }
          })];
        iu && !kz && Mz.push(ou(uz ? null !== Cz && void 0 !== Cz ? Cz : sz.i : wu.b, lu));
        const tz = Zu.current;
        if (tz && !kz) {
          Mz.push(... function(zz, uz, bz, Ez, nz) {
            let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const lz = (0, rz.z)(bz),
              Mz = Tz.p.fromClass(class {
                constructor(zz) {
                  this.view = zz, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Gz.k.subscribe("codeCollab", (zz => {
                    zz.docKey === lz && zz.type === rz.h.Updates && (zz.updates ? this.applyUpdates(zz.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(zz) {
                  const uz = JSON.parse(zz).map((zz => ({
                    clientID: zz.clientID,
                    changes: Az.ChangeSet.fromJSON(zz.changes)
                  })));
                  uz.length > 0 && (this.view.dispatch((0, Jz.e)(this.view.state, uz)), nz && nz(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(zz) {
                  iz && (zz.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const zz = (0, Jz.f)(this.view.state);
                  if (this.pushing || !zz.length) return;
                  const uz = Date.now() - this.lastPushTime;
                  if (uz < qz) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), qz - uz)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Vz);
                  const bz = (0, Jz.d)(this.view.state),
                    nz = zz.map((zz => ({
                      clientID: zz.clientID,
                      changes: zz.changes.toJSON()
                    }))),
                    iz = JSON.stringify(nz);
                  iz.length <= rz.l ? Lz.gameBridge.send("sendCodeCollab", {
                    ru: rz.e.Push,
                    ou: lz,
                    Nu: bz,
                    Ju: iz
                  }) : (0, az.postJsonWithMetricsCookiesAndJsonResponse)(`${Ez.gsUrl}/code/collab-push`, Pz.n["collab-push"].toBuffer({
                    gameNameWithVariation: Ez.gameNameWithVariation,
                    lobbyName: Ez.lobbyName,
                    docKey: lz,
                    version: bz,
                    updates: iz
                  }), {
                    retries: 0
                  }).catch((zz => {
                    console.error("[CodeCollab] HTTP push failed", zz)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const zz = (0, Jz.d)(this.view.state);
                  (0, az.postJsonWithMetricsCookiesAndJsonResponse)(`${Ez.gsUrl}/code/collab-pull`, Pz.n["collab-pull"].toBuffer({
                    gameNameWithVariation: Ez.gameNameWithVariation,
                    lobbyName: Ez.lobbyName,
                    docKey: lz,
                    fromVersion: zz
                  }), {
                    retries: 1
                  }).then((zz => {
                    this.destroyed || (zz.fullDoc ? Gz.k.sK("codeCollabRejoin", {
                      docKey: lz,
                      doc: zz.fullDoc,
                      version: zz.version
                    }) : this.applyUpdates(zz.updates))
                  })).catch((zz => {
                    console.error("[CodeCollab] Pull failed", zz)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const zz = Date.now();
                  if (zz - this.lastCursorSent < mz) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), mz)));
                  this.lastCursorSent = zz;
                  const uz = this.view.state.selection.main;
                  Lz.gameBridge.send("sendCodeCollab", {
                    ru: rz.e.Cursor,
                    ou: lz,
                    Pu: uz.anchor,
                    Gu: uz.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Gz.k.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Jz.b)({
              startVersion: zz,
              clientID: uz
            }), Mz]
          }(Hu, Ou, tz.docKey, tz.httpConfig, (zz => {
            var uz;
            null === (uz = du.current) || void 0 === uz || uz.call(du, zz)
          }), dz));
          const zz = function(zz, uz) {
            const bz = (0, rz.z)(zz);
            return {
              extensions: [ez],
              connect(zz) {
                if (uz) {
                  const bz = uz.map((zz => Sz.of({
                    playerId: zz.playerId,
                    playerName: zz.playerName,
                    colour: zz.colour,
                    anchor: zz.anchor,
                    head: zz.head,
                    lastMoved: Date.now()
                  })));
                  bz.length > 0 && zz.dispatch({
                    effects: bz
                  })
                }
                const Ez = Gz.k.subscribe("codeCollab", (uz => {
                    if (uz.docKey === bz)
                      if (uz.type === rz.h.RemoteCursor) zz.dispatch({
                        effects: Sz.of({
                          playerId: uz.playerId,
                          playerName: uz.playerName,
                          colour: uz.colour,
                          anchor: uz.anchor,
                          head: uz.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (uz.type === rz.h.Presence) {
                      const bz = JSON.parse(uz.peers),
                        Ez = new Set(bz.map((zz => zz.playerId))),
                        nz = zz.state.field(ez),
                        iz = [];
                      for (const [zz] of nz.cursors) Ez.has(zz) || iz.push(yz.of(zz));
                      iz.length > 0 && zz.dispatch({
                        effects: iz
                      })
                    }
                  })),
                  nz = setInterval((() => {
                    zz.dom.isConnected ? zz.dispatch({
                      effects: Dz.of(Date.now())
                    }) : clearInterval(nz)
                  }), gz);
                return () => {
                  Gz.k.unsubscribe(Ez), clearInterval(nz)
                }
              }
            }
          }(tz.docKey, tz.existingCursors);
          Mz.push(...zz.extensions), fu.current = zz.connect
        } else fu.current = null;
        return Mz
      }), [uz, Mu, Qz, Hu, Ou, xu, Cz, kz, zu, dz, iu, lu]);
      if (!Mu || !jz && !kz) return (0, Nu.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Nu.jsx)(Xz.c, {})
      });
      const Lu = kz ? `plugin-${kz}-${null!==zu&&void 0!==zu?zu:"index.ts"}` : jz ? `collab-${jz.clientID}` : `local-${uz}`;
      return (0, Nu.jsx)(iz.q, {
        value: kz ? null !== bu && void 0 !== bu ? bu : "" : bz,
        onChange: Mz,
        extensions: Tu,
        className: "CodeEditorContent",
        theme: Wz ? Ku : "dark",
        editable: dz && !kz,
        basicSetup: Qu,
        onCreateEditor: zz => {
          var uz;
          Fu.current = zz, Ru.current = null !== (uz = null === jz || void 0 === jz ? void 0 : jz.clientID) && void 0 !== uz ? uz : null, Au(zz), Xu.current && Xu.current(), fu.current && (Xu.current = fu.current(zz))
        }
      }, Lu)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);