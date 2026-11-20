export const id = 284;
export const ids = [284];
export const modules = {
  40590: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Jz
    });
    var hv = Pv(40593),
      Sv = Pv(40648),
      ev = Pv(40656),
      gv = Pv(52),
      pv = Pv(62),
      dv = Pv(40669),
      Nv = Pv(40672),
      lv = Pv(4503),
      Tv = Pv(40677),
      Wv = Pv(1858),
      wv = Pv(40681),
      av = Pv(40697),
      sv = Pv.n(av),
      Cv = Pv(40660),
      iv = Pv(40666),
      cv = Pv(1327),
      Gv = Pv(36362),
      mv = Pv(1226),
      jv = Pv(36372),
      fv = Pv(36266),
      Fv = Pv(1439),
      Yv = Pv(626),
      nv = Pv(1230),
      Ov = Pv(40747),
      Dv = Pv(40599),
      Kv = Pv(40605),
      Vv = Pv(1876),
      Uv = Pv(3539),
      Rv = Pv(26),
      xv = Pv(1114);
    const tv = 1e4,
      qv = 250,
      Iv = 250;
    var Qv = Pv(40626);
    const Zv = 50,
      Av = 100;
    const Lv = 2e3,
      Hv = Dv.B.define(),
      Mv = Dv.B.define(),
      yv = Dv.B.define();
    class Bv extends Kv.m {
      constructor(vv, zv, Pv) {
        super(), this.colour = vv, this.playerName = zv, this.showName = Pv
      }
      toDOM() {
        const vv = document.createElement("span");
        vv.className = "cm-remote-cursor-wrapper", vv.style.borderLeftColor = this.colour;
        const zv = document.createElement("span");
        if (zv.className = "cm-remote-cursor", zv.style.borderLeftColor = this.colour, vv.appendChild(zv), this.showName) {
          const zv = document.createElement("span");
          zv.className = "cm-remote-cursor-name", zv.style.backgroundColor = this.colour, zv.textContent = this.playerName, vv.appendChild(zv)
        }
        return vv
      }
      eq(vv) {
        return this.colour === vv.colour && this.playerName === vv.playerName && this.showName === vv.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function Jv(vv, zv) {
      const Pv = [],
        hv = [];
      for (const [, gv] of vv) {
        const vv = zv - gv.lastMoved < Lv;
        if (Pv.push({
            pos: gv.head,
            decoration: Kv.c.widget({
              widget: new Bv(gv.colour, gv.playerName, vv),
              side: 1
            })
          }), gv.anchor !== gv.head) {
          const vv = Math.min(gv.anchor, gv.head),
            zv = Math.max(gv.anchor, gv.head);
          hv.push({
            from: vv,
            to: zv,
            decoration: Kv.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${gv.colour}33`
              }
            })
          })
        }
      }
      const Sv = new Dv.x,
        ev = [];
      for (const gv of Pv) ev.push({
        bias: 1,
        deco: gv.decoration,
        from: gv.pos,
        to: gv.pos
      });
      for (const gv of hv) ev.push({
        bias: 0,
        deco: gv.decoration,
        from: gv.from,
        to: gv.to
      });
      ev.sort(((vv, zv) => vv.from - zv.from || vv.deco.startSide - zv.deco.startSide || vv.bias - zv.bias));
      for (const gv of ev) Sv.add(gv.from, gv.to, gv.deco);
      return Sv.finish()
    }
    const Ev = Dv.E.define({
      create: () => ({
        cursors: new Map,
        de: Kv.c.none
      }),
      update(vv, zv) {
        let Pv = vv.cursors,
          hv = !1;
        if (zv.docChanged) {
          const vv = new Map;
          for (const [hv, Sv] of Pv) vv.set(hv, {
            ...Sv,
            anchor: zv.changes.mapPos(Sv.anchor, 1),
            head: zv.changes.mapPos(Sv.head, 1)
          });
          Pv = vv, hv = !0
        }
        for (const Sv of zv.effects)
          if (Sv.is(Hv)) {
            if (!Number.isInteger(Sv.value.anchor) || !Number.isInteger(Sv.value.head)) {
              console.warn(`Code Editor: ignored player ${Sv.value.playerId}'s cursor at ${Sv.value.anchor}-${Sv.value.head}`);
              continue
            }
            const ev = zv.state.doc.length,
              gv = {
                ...Sv.value,
                anchor: Math.min(Sv.value.anchor, ev),
                head: Math.min(Sv.value.head, ev)
              };
            Pv === vv.cursors && (Pv = new Map(Pv)), Pv.set(gv.playerId, gv), hv = !0
          } else Sv.is(Mv) ? Pv.has(Sv.value) && (Pv === vv.cursors && (Pv = new Map(Pv)), Pv.delete(Sv.value), hv = !0) : Sv.is(yv) && (hv = !0);
        return hv ? {
          cursors: Pv,
          de: Jv(Pv, Date.now())
        } : vv
      },
      provide: vv => Kv.g.de.from(vv, (vv => vv.de))
    });
    const ov = Dv.B.define(),
      bv = Kv.c.mark({
        class: "CodeInsertFlash"
      }),
      rv = Dv.E.define({
        create: () => Kv.c.none,
        update(vv, zv) {
          let Pv = vv.map(zv.changes);
          for (const hv of zv.effects) hv.is(ov) && (Pv = hv.value ? Kv.c.set(bv.range(hv.value.from, hv.value.to)) : Kv.c.none);
          return Pv
        },
        provide: vv => Kv.g.de.from(vv)
      }),
      kv = Dv.E.define({
        create: () => !1,
        update: (vv, zv) => vv || void 0 !== zv.annotation(Dv.J.userEvent) && !zv.annotation(Dv.J.remote)
      }),
      Xv = [rv, kv];

    function uv(vv) {
      return vv.field(kv)
    }
    const vz = 3e4;

    function zz(vv, zv) {
      const Pv = (0, gv.useRef)(null);
      (0, gv.useEffect)((() => {
        var vv;
        (null === (vv = Pv.current) || void 0 === vv ? void 0 : vv.path) !== zv && (Pv.current = null)
      }), [zv]);
      const hv = vv => {
        var hv;
        const Sv = Pv.current;
        if (null === vv || void 0 === vv || !vv.dom.isConnected || !Sv || Sv.path !== zv) return;
        Pv.current = null;
        const {
          Yw: gv
        } = Sv;
        if (gv && null !== gv.text && performance.now() - gv.at < vz) {
          const zv = function(vv, zv) {
            if (vv === zv) return null;
            const Pv = Math.min(vv.length, zv.length);
            let hv = 0;
            for (; hv < Pv && vv[hv] === zv[hv];) hv++;
            let Sv = 0;
            for (; Sv < Pv - hv && vv[vv.length - 1 - Sv] === zv[zv.length - 1 - Sv];) Sv++;
            return {
              from: hv,
              to: vv.length - Sv,
              insert: zv.slice(hv, zv.length - Sv)
            }
          }(vv.state.doc.toString(), gv.text);
          null !== zv && vv.dispatch({
            changes: zv,
            userEvent: gv.placed ? "input" : void 0
          })
        }
        const {
          doc: pv
        } = vv.state, dv = pv.line(Math.min(Math.max(Sv.line, 1), pv.lines)), Nv = dv.from + Math.min(null !== (hv = Sv.column) && void 0 !== hv ? hv : 0, dv.length);
        vv.dispatch({
          selection: {
            anchor: Nv
          },
          effects: ev.b.scrollIntoView(Nv, {
            y: "center"
          }),
          userEvent: null !== gv && void 0 !== gv && gv.placed ? "select" : void 0
        }), !1 !== (null === gv || void 0 === gv ? void 0 : gv.focused) && vv.focus()
      };
      return (0, Fv.g)("CodeEditorGoToLine", (zv => {
        Pv.current = zv, hv(vv.current)
      })), (0, Fv.g)("CodeEditorKeepEdits", (() => {
        const hv = vv.current;
        if (null === hv || !hv.dom.isConnected || null === zv) return;
        const {
          doc: Sv,
          selection: ev
        } = hv.state, {
          head: gv
        } = ev.main, pv = Sv.lineAt(gv), dv = {
          text: (0, Ov.n)(hv.state).length > 0 ? Sv.toString() : null,
          at: performance.now(),
          focused: hv.hasFocus,
          placed: uv(hv.state)
        };
        Pv.current = {
          path: zv,
          line: pv.number,
          column: gv - pv.from,
          Yw: dv
        }
      })), vv => {
        var Sv;
        const ev = Pv.current;
        !1 === (null === ev || void 0 === ev || null === (Sv = ev.Yw) || void 0 === Sv ? void 0 : Sv.focused) && ev.path === zv || vv.focus(), hv(vv)
      }
    }
    var Pz = Pv(4123),
      hz = Pv(1175);

    function Sz(vv, zv) {
      const {
        t: Pv
      } = (0, hz.x)();
      (0, Fv.g)("CodeEditorInsertText", (hv => {
        let {
          text: Sv,
          focus: ev
        } = hv;
        const gv = vv.current,
          pv = null !== gv && void 0 !== gv && gv.dom.isConnected ? function(vv, zv) {
            if (!uv(vv)) return null;
            const {
              from: Pv,
              to: hv
            } = vv.selection.main, Sv = Pv + zv.length;
            return {
              changes: {
                from: Pv,
                to: hv,
                insert: zv
              },
              selection: {
                anchor: Sv
              },
              effects: [Kv.g.scrollIntoView(Sv, {
                y: "center"
              }), ov.of({
                from: Pv,
                to: Sv
              })],
              userEvent: "input"
            }
          }(gv.state, Sv) : null;
        null !== gv && null !== pv ? (gv.dispatch(pv), ev && gv.focus(), setTimeout((() => {
          gv.dom.isConnected && gv.dispatch({
            effects: ov.of(null)
          })
        }), 1500)) : (0, Pz.b)(Sv).then((() => {
          zv({
            message: Pv("codeEditorWorld:pickCopied", {
              coords: Sv
            }),
            type: "success"
          })
        }), (vv => {
          console.error("Pick could not copy the coordinates", vv), zv({
            message: Pv("codeEditorWorld:pickPlaceCursor", {
              coords: Sv
            }),
            type: "warning"
          })
        }))
      }))
    }
    var ez = Pv(40640);
    const gz = "#e45649",
      pz = "#383a42",
      dz = "#696c77",
      Nz = "#986801",
      lz = "#e5e5e6",
      Tz = "#fafafa",
      Wz = "#eaeaeb",
      wz = "#526fff",
      az = Kv.g.theme({
        "&": {
          color: pz,
          backgroundColor: Tz
        },
        ".cm-content": {
          caretColor: wz
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: wz
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: pz
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
          backgroundColor: Tz,
          color: dz,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: lz
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Wz
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Wz,
          borderBottomColor: Wz
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: lz,
            color: pz
          }
        }
      }, {
        dark: !1
      }),
      sz = Qv.d.define([{
        tag: ez.l.keyword,
        color: "#a626a4"
      }, {
        tag: [ez.l.name, ez.l.deleted, ez.l.character, ez.l.propertyName, ez.l.macroName],
        color: gz
      }, {
        tag: [ez.l.function(ez.l.variableName), ez.l.labelName],
        color: "#4078f2"
      }, {
        tag: [ez.l.color, ez.l.constant(ez.l.name), ez.l.standard(ez.l.name)],
        color: Nz
      }, {
        tag: [ez.l.definition(ez.l.name), ez.l.separator],
        color: pz
      }, {
        tag: [ez.l.typeName, ez.l.className, ez.l.number, ez.l.changed, ez.l.annotation, ez.l.modifier, ez.l.self, ez.l.namespace],
        color: "#c18401"
      }, {
        tag: [ez.l.operator, ez.l.operatorKeyword, ez.l.url, ez.l.escape, ez.l.regexp, ez.l.link, ez.l.special(ez.l.string)],
        color: "#0184bc"
      }, {
        tag: [ez.l.meta, ez.l.comment],
        color: dz
      }, {
        tag: ez.l.strong,
        fontWeight: "bold"
      }, {
        tag: ez.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: ez.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: ez.l.link,
        color: dz,
        textDecoration: "underline"
      }, {
        tag: ez.l.heading,
        fontWeight: "bold",
        color: gz
      }, {
        tag: [ez.l.atom, ez.l.bool, ez.l.special(ez.l.variableName)],
        color: Nz
      }, {
        tag: [ez.l.processingInstruction, ez.l.string, ez.l.inserted],
        color: "#50a14f"
      }, {
        tag: ez.l.invalid,
        color: "#000000"
      }]),
      Cz = [az, (0, Qv.mb)(sz)];
    var iz = Pv(36406),
      cz = Pv(40753);
    const Gz = ev.h.define(),
      mz = ev.i.define({
        create: () => !1,
        update(vv, zv) {
          for (const Pv of zv.effects) Pv.is(Gz) && (vv = Pv.value);
          return vv
        }
      }),
      jz = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function fz(vv, zv) {
      return [mz, ev.k.fromClass(class {
        constructor(vv) {
          this.view = vv, this.onDown = vv => {
            const zv = vv.target instanceof Element && null !== vv.target.closest(".cm-tooltip");
            0 !== vv.button || zv || this.view.state.field(mz) || this.view.dispatch({
              effects: Gz.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(mz) && this.view.dispatch({
              effects: Gz.of(!1)
            })
          }, vv.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), ev.p.compute(["selection", mz], (Pv => function(vv, zv, Pv) {
        const hv = vv.selection.main;
        return hv.empty || vv.field(mz) || vv.sliceDoc(hv.from, hv.to).trim().length < 2 ? null : {
          pos: hv.from,
          above: !0,
          create: vv => {
            const hv = document.createElement("div");
            hv.className = "CodeSelectionActions", hv.setAttribute("role", "toolbar"), hv.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Sv,
                label: ev
              }
              of jz) {
              if (!Pv && "explain" !== Sv) continue;
              const gv = document.createElement("button");
              gv.type = "button", gv.textContent = ev, "change" !== Sv && (gv.title = cz.b, gv.dataset.asksAi = "true"), gv.addEventListener("mousedown", (vv => {
                vv.preventDefault()
              })), gv.addEventListener("click", (() => {
                const Pv = vv.state.selection.main;
                if (Pv.empty) return;
                const hv = {
                  action: Sv,
                  path: zv,
                  fromLine: vv.state.doc.lineAt(Pv.from).number,
                  toLine: vv.state.doc.lineAt(Pv.to > Pv.from && vv.state.doc.lineAt(Pv.to).from === Pv.to ? Pv.to - 1 : Pv.to).number,
                  text: vv.state.sliceDoc(Pv.from, Pv.to)
                };
                Rv.j.zC("WorldCodeAiSelection", hv), vv.dispatch({
                  selection: {
                    anchor: Pv.to
                  }
                })
              })), hv.appendChild(gv)
            }
            return {
              dom: hv
            }
          }
        }
      }(Pv, vv, zv)))]
    }
    var Fz = Pv(1082);
    const Yz = new Set(["(", "{", "[", "<"]),
      nz = new Set([")", "}", "]", ">"]),
      Oz = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Dz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function Pv(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = [];
        for (const Sv of vv) {
          let vv;
          vv = "punctuation" === Sv.kind ? Oz.text : "parameterName" === Sv.kind ? Oz.parameterName : zv, hv.push({
            str: Sv.text,
            style: {
              color: vv,
              opacity: Pv ? .5 : void 0
            }
          })
        }
        return hv
      }
      const hv = [];
      if (hv.push(...Pv(vv.prefixDisplayParts, Oz.text)), vv.parameters.length > 0) {
        hv.push("\n");
        for (let Sv = 0; Sv < vv.parameters.length; Sv++) {
          const ev = vv.parameters[Sv];
          hv.push("\t"), hv.push(...Pv(ev.displayParts, Oz.parameter, null !== zv && Sv !== zv)), hv.push("\n")
        }
      }
      return hv.push(...Pv(vv.suffixDisplayParts, Oz.suffix)), vv.documentation && (hv.push("\n\n"), hv.push(...Pv(vv.documentation, Oz.docs))), hv
    }
    var Kz = function(vv) {
      return vv[vv.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", vv[vv.DuplicateIdentifier = 2300] = "DuplicateIdentifier", vv
    }(Kz || {});
    const Vz = new Set([Kz.DuplicateIdentifier]),
      Uz = new Set([Kz.VariableDefinedElsewhere]),
      Rz = new Set([]),
      xz = "/index.js";

    function tz(vv) {
      return "/" + vv
    }

    function qz(vv, zv, Pv) {
      vv.getSourceFile(zv) && vv.deleteFile(zv), vv.createFile(zv, Pv)
    }

    function Iz(vv) {
      return !!vv && ((0, jv.n)(vv) || (0, jv.j)(vv))
    }

    function Qz(vv, zv, Pv) {
      return () => {
        let hv = [...zv.languageService.getSemanticDiagnostics(Pv), ...zv.languageService.getSyntacticDiagnostics(Pv)];
        return hv = hv.filter((vv => !(0, Yv.N)(vv.start) && !(0, Yv.N)(vv.length) && !Vz.has(vv.code))), vv || (hv = hv.filter((vv => !Uz.has(vv.code)))), hv.map((vv => ({
          from: vv.start,
          to: vv.start + vv.length,
          message: "string" === typeof vv.messageText ? vv.messageText : vv.messageText.messageText,
          severity: Rz.has(vv.code) ? "warning" : "error"
        })))
      }
    }

    function Zz(vv, zv) {
      return Pv => {
        var hv, Sv;
        const ev = vv.languageService.getCompletionsAtPosition(zv, Pv.pos, {});
        if (!ev) return {
          from: Pv.pos,
          options: []
        };
        let gv = null !== (hv = null === (Sv = ev.optionalReplacementSpan) || void 0 === Sv ? void 0 : Sv.start) && void 0 !== hv ? hv : Pv.pos;
        if (!ev.optionalReplacementSpan) {
          const vv = Pv.state.doc.sliceString(0, Pv.pos);
          for (; gv > 0 && /[\w$]/.test(vv[gv - 1]);) gv--
        }
        return ev.entries = ev.entries.filter((vv => vv.kind !== sv().ScriptElementKind.warning)), {
          from: gv,
          options: ev.entries.map((hv => {
            var Sv, ev, pv, dv;
            const Nv = vv.languageService.getCompletionEntryDetails(zv, Pv.pos, hv.name, {}, hv.source, {}, hv.data),
              lv = null !== (Sv = null === (ev = hv.replacementSpan) || void 0 === ev ? void 0 : ev.start) && void 0 !== Sv ? Sv : gv,
              Tv = hv.replacementSpan ? hv.replacementSpan.start + hv.replacementSpan.length : Pv.pos,
              Wv = null !== (pv = hv.insertText) && void 0 !== pv ? pv : hv.name;
            return {
              label: hv.name,
              detail: null === Nv || void 0 === Nv ? void 0 : Nv.displayParts.map((vv => vv.text)).join(""),
              info: null === Nv || void 0 === Nv || null === (dv = Nv.documentation) || void 0 === dv ? void 0 : dv.map((vv => vv.text)).join(""),
              apply: vv => {
                vv.dispatch({
                  changes: {
                    from: lv,
                    to: Tv,
                    insert: Wv
                  },
                  selection: {
                    anchor: lv + Wv.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Az(vv) {
      return zv => {
        const Pv = document.createElement("div");
        Pv.className = "CodeEditorTooltip";
        let hv = !1;
        return queueMicrotask((() => {
          hv || (pv.render((0, Fz.jsx)(Wv.c, {
            text: vv
          }), Pv), zv.requestMeasure())
        })), {
          dom: Pv,
          destroy() {
            hv = !0, queueMicrotask((() => {
              pv.unmountComponentAtNode(Pv)
            }))
          }
        }
      }
    }

    function Lz(vv, zv, Pv) {
      return hv => {
        var Sv;
        if (!zv) return [];
        const ev = null === (Sv = hv.selection.PC[0]) || void 0 === Sv ? void 0 : Sv.head;
        if (void 0 === ev) return [];
        const gv = vv.languageService.getSignatureHelpItems(Pv, ev, {});
        if (!gv || !gv.items.length) return [];
        const pv = gv.applicableSpan.start - gv.items[0].prefixDisplayParts.map((vv => vv.text)).join("").length,
          dv = gv.applicableSpan.start,
          Nv = hv.doc.lineAt(ev),
          lv = Nv.from,
          Tv = Math.min(Nv.to, ev);
        let Wv, wv;
        return pv < lv ? (Wv = lv, wv = Tv) : (Wv = pv, wv = dv), [{
          pos: Wv,
          end: wv,
          above: !1,
          create: Az(Dz(gv.items[0], gv.argumentIndex))
        }]
      }
    }

    function Hz(vv, zv) {
      return (Pv, hv, Sv) => {
        const ev = vv.languageService.getQuickInfoAtPosition(zv, hv);
        if (!ev) return [];
        const gv = ev.textSpan.start,
          pv = ev.textSpan.start + ev.textSpan.length;
        if (hv < gv || hv >= pv) return [];
        if (ev.kind === sv().ScriptElementKind.memberFunctionElement || ev.kind === sv().ScriptElementKind.variableElement && "declare" === ev.kindModifiers) {
          const vv = ev.displayParts.findIndex((vv => "space" === vv.kind)); - 1 !== vv && (ev.displayParts = ev.displayParts.slice(vv));
          const zv = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            Pv = ev.displayParts.findIndex((vv => "punctuation" === vv.kind && "(" === vv.text)); - 1 !== Pv && (zv.prefixDisplayParts = ev.displayParts.slice(0, Pv + 1), ev.displayParts = ev.displayParts.slice(Pv + 1));
          const hv = ev.displayParts.findLastIndex((vv => "punctuation" === vv.kind && ")" === vv.text)); - 1 !== hv && (zv.suffixDisplayParts = ev.displayParts.slice(hv), ev.displayParts = ev.displayParts.slice(0, hv));
          let Sv = 0,
            dv = [];
          for (const gv of ev.displayParts)
            if (Yz.has(gv.text) ? Sv++ : nz.has(gv.text) && Sv--, "lineBreak" !== gv.kind) {
              if ("space" === gv.kind) {
                if (0 === dv.length) continue;
                dv.push({
                  kind: "space",
                  text: " "
                })
              } else dv.push(gv);
              0 === Sv && "," === gv.text && (zv.parameters.push({
                displayParts: dv
              }), dv = [])
            } return dv.length > 0 && zv.parameters.push({
            displayParts: dv
          }), zv.documentation = ev.documentation, [{
            pos: gv,
            end: pv,
            above: !0,
            create: Az(Dz(zv))
          }]
        }
        const dv = [];
        for (const vv of ev.displayParts) dv.push({
          str: vv.text,
          style: {
            color: Oz.text
          }
        });
        if (ev.documentation) {
          dv.push("\n\n");
          for (const vv of ev.documentation) dv.push({
            str: vv.text,
            style: {
              color: Oz.docs
            }
          })
        }
        return [{
          pos: gv,
          end: pv,
          above: !0,
          create: Az(dv)
        }]
      }
    }
    const Mz = {
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
      semicolons: sv().SemicolonPreference.Insert
    };
    const yz = ev.h.define(),
      Bz = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Jz(vv) {
      let {
        isLobbyCode: zv,
        code: Pv,
        onChange: pv,
        canEditCode: Wv,
        setTemporaryMessage: av,
        close: Yv,
        showTooltips: Bv,
        lightMode: Jv,
        collabState: ov,
        onRemoteDocChange: bv,
        files: rv,
        activePath: kv,
        pluginName: uv,
        pluginFile: vz,
        pluginSource: Pz,
        setActiveDocReplacer: hz,
        showAiHints: ez,
        canAiChangeCode: gz = Wv
      } = vv;
      const [pz, dz] = (0, gv.useState)(null), Nz = null === ov || void 0 === ov ? void 0 : ov.version, lz = null === ov || void 0 === ov ? void 0 : ov.clientID, Tz = (0, gv.useRef)({
        isLobbyCode: zv,
        files: rv,
        code: Pv,
        activePath: kv
      }), Wz = (0, gv.useRef)(bv);
      Wz.current = bv;
      const wz = (0, gv.useRef)(null),
        az = (0, gv.useRef)(ov);
      az.current = ov;
      const sz = (0, gv.useRef)(null),
        cz = (0, gv.useRef)(null),
        Gz = (0, gv.useRef)(null),
        mz = (0, gv.useRef)(Yv);
      mz.current = Yv;
      const jz = (0, gv.useRef)(Pv);
      jz.current = Pv;
      const Yz = (0, gv.useRef)(Pz);
      Yz.current = Pz;
      const nz = function(vv, zv, Pv, hv) {
        return Pv ? `/plugin-preview/${Pv}/${null!==hv&&void 0!==hv?hv:"index.ts"}` : vv ? tz(null !== zv && void 0 !== zv ? zv : mv.i) : xz
      }(zv, kv, uv, vz);
      (0, gv.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: vv,
            files: zv,
            code: Pv,
            activePath: hv
          } = Tz.current, Sv = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: sv().ModuleKind.ESNext,
            moduleResolution: sv().ModuleResolutionKind.Bundler,
            target: sv().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Gv.e).map((vv => [vv.specifier, [vv.typesVfsPath]])))
            }
          }, ev = new Map, gv = [];
          if (vv) {
            const vv = null !== zv && void 0 !== zv ? zv : {
              [mv.i]: Pv || "\n"
            };
            for (const [zv, Pv] of Object.entries(vv)) {
              const vv = tz(zv);
              ev.set(vv, Pv || "\n"), gv.push(vv)
            }
            const Sv = tz(null !== hv && void 0 !== hv ? hv : mv.i);
            ev.has(Sv) ? ev.set(Sv, Pv || "\n") : (ev.set(Sv, Pv || "\n"), gv.push(Sv)), ev.set("/node_modules/@bloxd/index.d.ts", lv.default), gv.push("/node_modules/@bloxd/index.d.ts");
            for (const zv of Object.values(Gv.e)) {
              ev.set(zv.typesVfsPath, zv.types), gv.push(zv.typesVfsPath);
              for (const [vv, Pv] of Object.entries(zv.files)) {
                const hv = `/plugin-preview/${zv.name}/${vv}`;
                ev.set(hv, Pv || "\n"), gv.push(hv)
              }
            }
          } else ev.set(xz, Pv || "\n"), gv.push(xz);
          ev.set("/globals.d.ts", vv ? Nv.d : dv.d), ev.set("/lib.d.ts", Tv.e), gv.push("/globals.d.ts", "/lib.d.ts");
          const pv = wv.b(ev),
            Wv = wv.f(pv, gv, sv(), Sv);
          dz({
            hC: Wv,
            fsMap: ev
          })
        }()
      }), []), (0, gv.useEffect)((() => {
        var vv, hv;
        if (!pz || !zv) return;
        const {
          hC: Sv,
          fsMap: ev
        } = pz;
        if (function(vv, zv, Pv) {
            const hv = new Set;
            for (const [Sv, ev] of Object.entries(Pv)) {
              const Pv = tz(Sv);
              hv.add(Pv);
              const gv = ev || "\n";
              zv.get(Pv) !== gv && (zv.set(Pv, gv), qz(vv, Pv, gv))
            }
            for (const Sv of [...zv.keys()]) "/globals.d.ts" === Sv || "/lib.d.ts" === Sv || Sv.startsWith("/node_modules/") || Sv.startsWith("/plugin-preview/") || hv.has(Sv) || (zv.delete(Sv), vv.getSourceFile(Sv) && vv.deleteFile(Sv))
          }(Sv, ev, null !== rv && void 0 !== rv ? rv : {
            [mv.i]: Pv || "\n"
          }), uv) return void qz(Sv, nz, Pz || "\n");
        const gv = null !== (vv = null === (hv = wz.current) || void 0 === hv ? void 0 : hv.state.doc.toString()) && void 0 !== vv ? vv : Pv;
        qz(Sv, nz, gv || "\n")
      }), [rv, kv, pz, uv, Pz, nz, Pv, zv]), (0, gv.useEffect)((() => {
        if (!pz) return;
        const {
          hC: vv
        } = pz;
        qz(vv, nz, (uv ? Pz : Pv) || "\n")
      }), [Pv, uv, Pz, nz, pz]), (0, gv.useEffect)((() => () => {
        cz.current && (cz.current(), cz.current = null)
      }), []), (0, gv.useEffect)((() => (hz(((vv, zv) => {
        if (uv) return !1;
        const Pv = wz.current,
          hv = az.current,
          Sv = hv ? (0, jv.v)(hv.docKey) : null;
        if (!Pv || !hv || sz.current !== hv.clientID || vv !== Sv) return !1;
        const ev = Pv.state.doc.toString();
        return ev !== zv && Pv.dispatch({
          changes: {
            from: 0,
            to: ev.length,
            insert: zv
          }
        }), !0
      })), () => {
        wz.current = null, sz.current = null, hz(null)
      })), [hz, uv]);
      const Oz = zv ? uv ? null : null !== kv && void 0 !== kv ? kv : mv.i : iz.e,
        Dz = zz(wz, Oz);
      Sz(wz, av), (0, Fv.g)("FormatCode", (() => {
        if (!pz || !wz.current || uv) return;
        const {
          hC: vv,
          fsMap: Pv
        } = pz, hv = vv.getSourceFile(nz).getFullText();
        let Sv = 0;
        if (zv && rv)
          for (const [zv, pv] of Object.entries(rv)) zv !== (null !== kv && void 0 !== kv ? kv : mv.i) && (Sv += pv.length);
        const ev = function(vv, zv, Pv, hv, Sv) {
          const ev = vv.languageService.getFormattingEditsForDocument(hv, Mz);
          if (!ev.length) return nv.e.error("Code is already formatted.");
          ev.sort(((vv, zv) => zv.span.start - vv.span.start));
          let gv = vv.getSourceFile(hv).getFullText();
          for (const pv of ev) gv = gv.slice(0, pv.span.start) + pv.JN + gv.slice(pv.span.start + pv.span.length);
          return gv !== (Pv ? (0, fv.l)(gv, Sv) : (0, fv.h)(gv)) ? nv.e.error("Formatting the code will go beyond the character limit.") : nv.e.value(gv)
        }(vv, 0, zv, nz, Sv);
        if (ev.isError()) return void av({
          message: ev.asError().message,
          type: "warning"
        });
        const gv = ev.getValue();
        gv && (wz.current.dispatch({
          changes: {
            from: 0,
            to: hv.length,
            insert: gv
          },
          selection: {
            anchor: gv.length
          }
        }), qz(vv, nz, gv), pv(gv))
      }));
      const Kz = (0, gv.useMemo)((() => {
        if (!pz) return [];
        const {
          hC: vv,
          fsMap: Pv
        } = pz;
        ! function(vv, zv, Pv, hv) {
          if (vv.getSourceFile(Pv)) return;
          const Sv = hv || "\n";
          zv.set(Pv, Sv), vv.createFile(Pv, Sv)
        }(vv, Pv, nz, (uv ? Yz.current : jz.current) || "\n");
        const gv = zv && Iz(uv ? null !== vz && void 0 !== vz ? vz : "index.ts" : kv),
          pv = [(0, Sv.b)({
            jsx: !1,
            typescript: gv
          }), ev.e.highest(ev.b.domEventHandlers({
            keydown: vv => "Escape" === vv.key ? (mz.current(), vv.stopPropagation(), !0) : (vv.stopPropagation(), !1)
          })), (0, hv.c)({
            override: [Zz(vv, nz)]
          }), Kv.j.fromClass(class {
            constructor(vv) {
              this.view = vv, this.timeout = null, this.scheduleParse()
            }
            update(vv) {
              (vv.docChanged || vv.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const vv = this.view.viewport.to;
                (0, Qv.qb)(this.view.state, vv) || (0, Qv.L)(this.view, vv, Zv) || this.scheduleParse()
              }), Av))
            }
          }), ...Xv, ev.b.lineWrapping, ev.i.define({
            create: Lz(vv, Bv, nz),
            update(zv, Pv) {
              const hv = Pv.effects.some((vv => vv.is(yz)));
              return Pv.docChanged || Pv.selection || hv ? (qz(vv, nz, Pv.state.doc.toString() || " "), Lz(vv, Bv, nz)(Pv.state)) : zv
            },
            provide: vv => ev.p.computeN([vv], (zv => zv.field(vv)))
          }), (0, ev.o)(Hz(vv, nz)), (0, iv.e)(Qz(zv, vv, nz)), ev.k.fromClass(class {
            constructor(vv) {
              this.view = vv, this.searchPanel = null
            }
            update(vv) {
              const zv = vv.view.dom.querySelector(".cm-search");
              if (zv !== this.searchPanel) {
                if (this.searchPanel = zv, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (vv => {
                  "Escape" === vv.key && (0, Cv.e)(this.view), vv.stopPropagation()
                }))
              }
            }
          })];
        ez && !uv && pv.push(fz(zv ? null !== kv && void 0 !== kv ? kv : mv.i : iz.e, gz));
        const dv = az.current;
        if (dv && !uv) {
          pv.push(... function(vv, zv, Pv, hv, Sv) {
            let ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const gv = (0, jv.v)(Pv),
              pv = Kv.j.fromClass(class {
                constructor(vv) {
                  this.view = vv, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = Rv.j.subscribe("codeCollab", (vv => {
                    vv.docKey === gv && vv.type === jv.c.Updates && (vv.updates ? this.applyUpdates(vv.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(vv) {
                  const zv = JSON.parse(vv).map((vv => ({
                    clientID: vv.clientID,
                    changes: Dv.ChangeSet.fromJSON(vv.changes)
                  })));
                  zv.length > 0 && (this.view.dispatch((0, Ov.j)(this.view.state, zv)), Sv && Sv(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(vv) {
                  ev && (vv.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const vv = (0, Ov.n)(this.view.state);
                  if (this.pushing || !vv.length) return;
                  const zv = Date.now() - this.lastPushTime;
                  if (zv < Iv) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Iv - zv)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), tv);
                  const Pv = (0, Ov.f)(this.view.state),
                    Sv = vv.map((vv => ({
                      clientID: vv.clientID,
                      changes: vv.changes.toJSON()
                    }))),
                    ev = JSON.stringify(Sv);
                  ev.length <= jv.d ? Vv.gameBridge.send("sendCodeCollab", {
                    ah: jv.b.Push,
                    sh: gv,
                    Ch: Pv,
                    mh: ev
                  }) : (0, xv.postJsonWithMetricsCookiesAndJsonResponse)(`${hv.gsUrl}/code/collab-push`, Uv.j["collab-push"].toBuffer({
                    gameNameWithVariation: hv.gameNameWithVariation,
                    lobbyName: hv.lobbyName,
                    docKey: gv,
                    version: Pv,
                    updates: ev
                  }), {
                    retries: 0
                  }).catch((vv => {
                    console.error("[CodeCollab] HTTP push failed", vv)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const vv = (0, Ov.f)(this.view.state);
                  (0, xv.postJsonWithMetricsCookiesAndJsonResponse)(`${hv.gsUrl}/code/collab-pull`, Uv.j["collab-pull"].toBuffer({
                    gameNameWithVariation: hv.gameNameWithVariation,
                    lobbyName: hv.lobbyName,
                    docKey: gv,
                    fromVersion: vv
                  }), {
                    retries: 1
                  }).then((vv => {
                    this.destroyed || (vv.fullDoc ? Rv.j.zC("codeCollabRejoin", {
                      docKey: gv,
                      doc: vv.fullDoc,
                      version: vv.version
                    }) : this.applyUpdates(vv.updates))
                  })).catch((vv => {
                    console.error("[CodeCollab] Pull failed", vv)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const vv = Date.now();
                  if (vv - this.lastCursorSent < qv) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), qv)));
                  this.lastCursorSent = vv;
                  const zv = this.view.state.selection.main;
                  Vv.gameBridge.send("sendCodeCollab", {
                    ah: jv.b.Cursor,
                    sh: gv,
                    Yh: zv.anchor,
                    nh: zv.head
                  })
                }
                destroy() {
                  this.destroyed = !0, Rv.j.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Ov.e)({
              startVersion: vv,
              clientID: zv
            }), pv]
          }(Nz, lz, dv.docKey, dv.httpConfig, (vv => {
            var zv;
            null === (zv = Wz.current) || void 0 === zv || zv.call(Wz, vv)
          }), Wv));
          const vv = function(vv, zv) {
            const Pv = (0, jv.v)(vv);
            return {
              extensions: [Ev],
              connect(vv) {
                if (zv) {
                  const Pv = zv.map((vv => Hv.of({
                    playerId: vv.playerId,
                    playerName: vv.playerName,
                    colour: vv.colour,
                    anchor: vv.anchor,
                    head: vv.head,
                    lastMoved: Date.now()
                  })));
                  Pv.length > 0 && vv.dispatch({
                    effects: Pv
                  })
                }
                const hv = Rv.j.subscribe("codeCollab", (zv => {
                    if (zv.docKey === Pv)
                      if (zv.type === jv.c.RemoteCursor) vv.dispatch({
                        effects: Hv.of({
                          playerId: zv.playerId,
                          playerName: zv.playerName,
                          colour: zv.colour,
                          anchor: zv.anchor,
                          head: zv.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (zv.type === jv.c.Presence) {
                      const Pv = JSON.parse(zv.peers),
                        hv = new Set(Pv.map((vv => vv.playerId))),
                        Sv = vv.state.field(Ev),
                        ev = [];
                      for (const [vv] of Sv.cursors) hv.has(vv) || ev.push(Mv.of(vv));
                      ev.length > 0 && vv.dispatch({
                        effects: ev
                      })
                    }
                  })),
                  Sv = setInterval((() => {
                    vv.dom.isConnected ? vv.dispatch({
                      effects: yv.of(Date.now())
                    }) : clearInterval(Sv)
                  }), Lv);
                return () => {
                  Rv.j.unsubscribe(hv), clearInterval(Sv)
                }
              }
            }
          }(dv.docKey, dv.existingCursors);
          pv.push(...vv.extensions), Gz.current = vv.connect
        } else Gz.current = null;
        return pv
      }), [zv, pz, Bv, Nz, lz, nz, kv, uv, vz, Wv, ez, gz]);
      if (!pz || !ov && !uv) return (0, Fz.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, Fz.jsx)(cv.c, {})
      });
      const Vz = uv ? `plugin-${uv}-${null!==vz&&void 0!==vz?vz:"index.ts"}` : ov ? `collab-${ov.clientID}` : `local-${zv}`;
      return (0, Fz.jsx)(ev.m, {
        value: uv ? null !== Pz && void 0 !== Pz ? Pz : "" : Pv,
        onChange: pv,
        extensions: Kz,
        className: "CodeEditorContent",
        theme: Jv ? Cz : "dark",
        editable: Wv && !uv,
        basicSetup: Bz,
        onCreateEditor: vv => {
          var zv;
          wz.current = vv, sz.current = null !== (zv = null === ov || void 0 === ov ? void 0 : ov.clientID) && void 0 !== zv ? zv : null, Dz(vv), cz.current && cz.current(), Gz.current && (cz.current = Gz.current(vv))
        }
      }, Vz)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);