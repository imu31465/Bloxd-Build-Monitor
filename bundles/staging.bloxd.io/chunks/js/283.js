export const id = 283;
export const ids = [283];
export const modules = {
  40415: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => qt
    });
    var Fz = sz(40422),
      Wz = sz(40471),
      Xz = sz(40477),
      Oz = sz(65),
      oz = sz(78),
      vz = sz(40495),
      Uz = sz(40498),
      Kz = sz(4391),
      uz = sz(40506),
      Nz = sz(1831),
      bz = sz(40514),
      wz = sz(40527),
      Dz = sz.n(wz),
      gz = sz(40486),
      Hz = sz(40493),
      Bz = sz(1306),
      Pz = sz(36270),
      rz = sz(1223),
      Yz = sz(36283),
      xz = sz(36189),
      mz = sz(1416),
      Jz = sz(580),
      Iz = sz(1230),
      Cz = sz(40566),
      ez = sz(40427),
      Zz = sz(40434),
      Gz = sz(1857),
      Tz = sz(3433),
      cz = sz(34),
      jz = sz(1120);
    const Az = 1e4,
      yz = 250,
      Mz = 250;
    var dz = sz(40448);
    const hz = 50,
      Qz = 100;
    const kz = 2e3,
      iz = ez.F.define(),
      Lz = ez.F.define(),
      lz = ez.F.define();
    class nz extends Zz.q {
      constructor(zz, tz, sz) {
        super(), this.colour = zz, this.playerName = tz, this.showName = sz
      }
      toDOM() {
        const zz = document.createElement("span");
        zz.className = "cm-remote-cursor-wrapper", zz.style.borderLeftColor = this.colour;
        const tz = document.createElement("span");
        if (tz.className = "cm-remote-cursor", tz.style.borderLeftColor = this.colour, zz.appendChild(tz), this.showName) {
          const tz = document.createElement("span");
          tz.className = "cm-remote-cursor-name", tz.style.backgroundColor = this.colour, tz.textContent = this.playerName, zz.appendChild(tz)
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

    function az(zz, tz) {
      const sz = [],
        Fz = [];
      for (const [, Oz] of zz) {
        const zz = tz - Oz.lastMoved < kz;
        if (sz.push({
            pos: Oz.head,
            decoration: Zz.b.widget({
              widget: new nz(Oz.colour, Oz.playerName, zz),
              side: 1
            })
          }), Oz.anchor !== Oz.head) {
          const zz = Math.min(Oz.anchor, Oz.head),
            tz = Math.max(Oz.anchor, Oz.head);
          Fz.push({
            from: zz,
            to: tz,
            decoration: Zz.b.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Oz.colour}33`
              }
            })
          })
        }
      }
      const Wz = new ez.y,
        Xz = [];
      for (const Oz of sz) Xz.push({
        bias: 1,
        deco: Oz.decoration,
        from: Oz.pos,
        to: Oz.pos
      });
      for (const Oz of Fz) Xz.push({
        bias: 0,
        deco: Oz.decoration,
        from: Oz.from,
        to: Oz.to
      });
      Xz.sort(((zz, tz) => zz.from - tz.from || zz.deco.startSide - tz.deco.startSide || zz.bias - tz.bias));
      for (const Oz of Xz) Wz.add(Oz.from, Oz.to, Oz.deco);
      return Wz.finish()
    }
    const qz = ez.H.define({
      create: () => ({
        cursors: new Map,
        sW: Zz.b.none
      }),
      update(zz, tz) {
        let sz = zz.cursors,
          Fz = !1;
        if (tz.docChanged) {
          const zz = new Map;
          for (const [Fz, Wz] of sz) zz.set(Fz, {
            ...Wz,
            anchor: tz.changes.mapPos(Wz.anchor, 1),
            head: tz.changes.mapPos(Wz.head, 1)
          });
          sz = zz, Fz = !0
        }
        for (const Wz of tz.effects)
          if (Wz.is(iz)) {
            if (!Number.isInteger(Wz.value.anchor) || !Number.isInteger(Wz.value.head)) {
              console.warn(`Code Editor: ignored player ${Wz.value.playerId}'s cursor at ${Wz.value.anchor}-${Wz.value.head}`);
              continue
            }
            const Xz = tz.state.doc.length,
              Oz = {
                ...Wz.value,
                anchor: Math.min(Wz.value.anchor, Xz),
                head: Math.min(Wz.value.head, Xz)
              };
            sz === zz.cursors && (sz = new Map(sz)), sz.set(Oz.playerId, Oz), Fz = !0
          } else Wz.is(Lz) ? sz.has(Wz.value) && (sz === zz.cursors && (sz = new Map(sz)), sz.delete(Wz.value), Fz = !0) : Wz.is(lz) && (Fz = !0);
        return Fz ? {
          cursors: sz,
          sW: az(sz, Date.now())
        } : zz
      },
      provide: zz => Zz.i.sW.from(zz, (zz => zz.sW))
    });
    const Sz = ez.F.define(),
      Vz = Zz.b.mark({
        class: "CodeInsertFlash"
      }),
      Rz = ez.H.define({
        create: () => Zz.b.none,
        update(zz, tz) {
          let sz = zz.map(tz.changes);
          for (const Fz of tz.effects) Fz.is(Sz) && (sz = Fz.value ? Zz.b.set(Vz.range(Fz.value.from, Fz.value.to)) : Zz.b.none);
          return sz
        },
        provide: zz => Zz.i.sW.from(zz)
      }),
      pz = ez.H.define({
        create: () => !1,
        update: (zz, tz) => zz || void 0 !== tz.annotation(ez.K.userEvent) && !tz.annotation(ez.K.remote)
      }),
      fz = [Rz, pz];

    function Ez(zz) {
      return zz.field(pz)
    }
    const zt = 3e4;

    function tt(zz, tz) {
      const sz = (0, Oz.useRef)(null);
      (0, Oz.useEffect)((() => {
        var zz;
        (null === (zz = sz.current) || void 0 === zz ? void 0 : zz.path) !== tz && (sz.current = null)
      }), [tz]);
      const Fz = zz => {
        var Fz;
        const Wz = sz.current;
        if (null === zz || void 0 === zz || !zz.dom.isConnected || !Wz || Wz.path !== tz) return;
        sz.current = null;
        const {
          Ow: Oz
        } = Wz;
        if (Oz && null !== Oz.text && performance.now() - Oz.at < zt) {
          const tz = function(zz, tz) {
            if (zz === tz) return null;
            const sz = Math.min(zz.length, tz.length);
            let Fz = 0;
            for (; Fz < sz && zz[Fz] === tz[Fz];) Fz++;
            let Wz = 0;
            for (; Wz < sz - Fz && zz[zz.length - 1 - Wz] === tz[tz.length - 1 - Wz];) Wz++;
            return {
              from: Fz,
              to: zz.length - Wz,
              insert: tz.slice(Fz, tz.length - Wz)
            }
          }(zz.state.doc.toString(), Oz.text);
          null !== tz && zz.dispatch({
            changes: tz,
            userEvent: Oz.placed ? "input" : void 0
          })
        }
        const {
          doc: oz
        } = zz.state, vz = oz.line(Math.min(Math.max(Wz.line, 1), oz.lines)), Uz = vz.from + Math.min(null !== (Fz = Wz.column) && void 0 !== Fz ? Fz : 0, vz.length);
        zz.dispatch({
          selection: {
            anchor: Uz
          },
          effects: Xz.d.scrollIntoView(Uz, {
            y: "center"
          }),
          userEvent: null !== Oz && void 0 !== Oz && Oz.placed ? "select" : void 0
        }), !1 !== (null === Oz || void 0 === Oz ? void 0 : Oz.focused) && zz.focus()
      };
      return (0, mz.g)("CodeEditorGoToLine", (tz => {
        sz.current = tz, Fz(zz.current)
      })), (0, mz.g)("CodeEditorKeepEdits", (() => {
        const Fz = zz.current;
        if (null === Fz || !Fz.dom.isConnected || null === tz) return;
        const {
          doc: Wz,
          selection: Xz
        } = Fz.state, {
          head: Oz
        } = Xz.main, oz = Wz.lineAt(Oz), vz = {
          text: (0, Cz.f)(Fz.state).length > 0 ? Wz.toString() : null,
          at: performance.now(),
          focused: Fz.hasFocus,
          placed: Ez(Fz.state)
        };
        sz.current = {
          path: tz,
          line: oz.number,
          column: Oz - oz.from,
          Ow: vz
        }
      })), zz => {
        var Wz;
        const Xz = sz.current;
        !1 === (null === Xz || void 0 === Xz || null === (Wz = Xz.Ow) || void 0 === Wz ? void 0 : Wz.focused) && Xz.path === tz || zz.focus(), Fz(zz)
      }
    }
    var st = sz(4017),
      Ft = sz(1173);

    function Wt(zz, tz) {
      const {
        t: sz
      } = (0, Ft.B)();
      (0, mz.g)("CodeEditorInsertText", (Fz => {
        let {
          text: Wz,
          focus: Xz
        } = Fz;
        const Oz = zz.current,
          oz = null !== Oz && void 0 !== Oz && Oz.dom.isConnected ? function(zz, tz) {
            if (!Ez(zz)) return null;
            const {
              from: sz,
              to: Fz
            } = zz.selection.main, Wz = sz + tz.length;
            return {
              changes: {
                from: sz,
                to: Fz,
                insert: tz
              },
              selection: {
                anchor: Wz
              },
              effects: [Zz.i.scrollIntoView(Wz, {
                y: "center"
              }), Sz.of({
                from: sz,
                to: Wz
              })],
              userEvent: "input"
            }
          }(Oz.state, Wz) : null;
        null !== Oz && null !== oz ? (Oz.dispatch(oz), Xz && Oz.focus(), setTimeout((() => {
          Oz.dom.isConnected && Oz.dispatch({
            effects: Sz.of(null)
          })
        }), 1500)) : (0, st.b)(Wz).then((() => {
          tz({
            message: sz("codeEditorWorld:pickCopied", {
              coords: Wz
            }),
            type: "success"
          })
        }), (zz => {
          console.error("Pick could not copy the coordinates", zz), tz({
            message: sz("codeEditorWorld:pickPlaceCursor", {
              coords: Wz
            }),
            type: "warning"
          })
        }))
      }))
    }
    var Xt = sz(40463);
    const Ot = "#e45649",
      ot = "#383a42",
      vt = "#696c77",
      Ut = "#986801",
      Kt = "#e5e5e6",
      ut = "#fafafa",
      Nt = "#eaeaeb",
      bt = "#526fff",
      wt = Zz.i.theme({
        "&": {
          color: ot,
          backgroundColor: ut
        },
        ".cm-content": {
          caretColor: bt
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: bt
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: ot
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
          backgroundColor: ut,
          color: vt,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Kt
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Nt
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Nt,
          borderBottomColor: Nt
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Kt,
            color: ot
          }
        }
      }, {
        dark: !1
      }),
      Dt = dz.c.define([{
        tag: Xt.j.keyword,
        color: "#a626a4"
      }, {
        tag: [Xt.j.name, Xt.j.deleted, Xt.j.character, Xt.j.propertyName, Xt.j.macroName],
        color: Ot
      }, {
        tag: [Xt.j.function(Xt.j.variableName), Xt.j.labelName],
        color: "#4078f2"
      }, {
        tag: [Xt.j.color, Xt.j.constant(Xt.j.name), Xt.j.standard(Xt.j.name)],
        color: Ut
      }, {
        tag: [Xt.j.definition(Xt.j.name), Xt.j.separator],
        color: ot
      }, {
        tag: [Xt.j.typeName, Xt.j.className, Xt.j.number, Xt.j.changed, Xt.j.annotation, Xt.j.modifier, Xt.j.self, Xt.j.namespace],
        color: "#c18401"
      }, {
        tag: [Xt.j.operator, Xt.j.operatorKeyword, Xt.j.url, Xt.j.escape, Xt.j.regexp, Xt.j.link, Xt.j.special(Xt.j.string)],
        color: "#0184bc"
      }, {
        tag: [Xt.j.meta, Xt.j.comment],
        color: vt
      }, {
        tag: Xt.j.strong,
        fontWeight: "bold"
      }, {
        tag: Xt.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: Xt.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Xt.j.link,
        color: vt,
        textDecoration: "underline"
      }, {
        tag: Xt.j.heading,
        fontWeight: "bold",
        color: Ot
      }, {
        tag: [Xt.j.atom, Xt.j.bool, Xt.j.special(Xt.j.variableName)],
        color: Ut
      }, {
        tag: [Xt.j.processingInstruction, Xt.j.string, Xt.j.inserted],
        color: "#50a14f"
      }, {
        tag: Xt.j.invalid,
        color: "#000000"
      }]),
      gt = [wt, (0, dz.ib)(Dt)];
    var Ht = sz(36317),
      Bt = sz(40568);
    const Pt = Xz.i.define(),
      rt = Xz.k.define({
        create: () => !1,
        update(zz, tz) {
          for (const sz of tz.effects) sz.is(Pt) && (zz = sz.value);
          return zz
        }
      }),
      Yt = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function xt(zz, tz) {
      return [rt, Xz.o.fromClass(class {
        constructor(zz) {
          this.view = zz, this.onDown = zz => {
            const tz = zz.target instanceof Element && null !== zz.target.closest(".cm-tooltip");
            0 !== zz.button || tz || this.view.state.field(rt) || this.view.dispatch({
              effects: Pt.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(rt) && this.view.dispatch({
              effects: Pt.of(!1)
            })
          }, zz.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Xz.w.compute(["selection", rt], (sz => function(zz, tz, sz) {
        const Fz = zz.selection.main;
        return Fz.empty || zz.field(rt) || zz.sliceDoc(Fz.from, Fz.to).trim().length < 2 ? null : {
          pos: Fz.from,
          above: !0,
          create: zz => {
            const Fz = document.createElement("div");
            Fz.className = "CodeSelectionActions", Fz.setAttribute("role", "toolbar"), Fz.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: Wz,
                label: Xz
              }
              of Yt) {
              if (!sz && "explain" !== Wz) continue;
              const Oz = document.createElement("button");
              Oz.type = "button", Oz.textContent = Xz, "change" !== Wz && (Oz.title = Bt.c, Oz.dataset.asksAi = "true"), Oz.addEventListener("mousedown", (zz => {
                zz.preventDefault()
              })), Oz.addEventListener("click", (() => {
                const sz = zz.state.selection.main;
                if (sz.empty) return;
                const Fz = {
                  action: Wz,
                  path: tz,
                  fromLine: zz.state.doc.lineAt(sz.from).number,
                  toLine: zz.state.doc.lineAt(sz.to > sz.from && zz.state.doc.lineAt(sz.to).from === sz.to ? sz.to - 1 : sz.to).number,
                  text: zz.state.sliceDoc(sz.from, sz.to)
                };
                cz.o.Yg("WorldCodeAiSelection", Fz), zz.dispatch({
                  selection: {
                    anchor: sz.to
                  }
                })
              })), Fz.appendChild(Oz)
            }
            return {
              dom: Fz
            }
          }
        }
      }(sz, zz, tz)))]
    }
    var mt = sz(1087);
    const Jt = new Set(["(", "{", "[", "<"]),
      It = new Set([")", "}", "]", ">"]),
      Ct = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function et(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function sz(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = [];
        for (const Wz of zz) {
          let zz;
          zz = "punctuation" === Wz.kind ? Ct.text : "parameterName" === Wz.kind ? Ct.parameterName : tz, Fz.push({
            str: Wz.text,
            style: {
              color: zz,
              opacity: sz ? .5 : void 0
            }
          })
        }
        return Fz
      }
      const Fz = [];
      if (Fz.push(...sz(zz.prefixDisplayParts, Ct.text)), zz.parameters.length > 0) {
        Fz.push("\n");
        for (let Wz = 0; Wz < zz.parameters.length; Wz++) {
          const Xz = zz.parameters[Wz];
          Fz.push("\t"), Fz.push(...sz(Xz.displayParts, Ct.parameter, null !== tz && Wz !== tz)), Fz.push("\n")
        }
      }
      return Fz.push(...sz(zz.suffixDisplayParts, Ct.suffix)), zz.documentation && (Fz.push("\n\n"), Fz.push(...sz(zz.documentation, Ct.docs))), Fz
    }
    var Zt = function(zz) {
      return zz[zz.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", zz[zz.DuplicateIdentifier = 2300] = "DuplicateIdentifier", zz
    }(Zt || {});
    const Gt = new Set([Zt.DuplicateIdentifier]),
      Tt = new Set([Zt.VariableDefinedElsewhere]),
      ct = new Set([]),
      jt = "/index.js";

    function At(zz) {
      return "/" + zz
    }

    function yt(zz, tz, sz) {
      zz.getSourceFile(tz) && zz.deleteFile(tz), zz.createFile(tz, sz)
    }

    function Mt(zz) {
      return !!zz && ((0, Yz.u)(zz) || (0, Yz.r)(zz))
    }

    function dt(zz, tz, sz) {
      return () => {
        let Fz = [...tz.languageService.getSemanticDiagnostics(sz), ...tz.languageService.getSyntacticDiagnostics(sz)];
        return Fz = Fz.filter((zz => !(0, Jz.G)(zz.start) && !(0, Jz.G)(zz.length) && !Gt.has(zz.code))), zz || (Fz = Fz.filter((zz => !Tt.has(zz.code)))), Fz.map((zz => ({
          from: zz.start,
          to: zz.start + zz.length,
          message: "string" === typeof zz.messageText ? zz.messageText : zz.messageText.messageText,
          severity: ct.has(zz.code) ? "warning" : "error"
        })))
      }
    }

    function ht(zz, tz) {
      return sz => {
        var Fz, Wz;
        const Xz = zz.languageService.getCompletionsAtPosition(tz, sz.pos, {});
        if (!Xz) return {
          from: sz.pos,
          options: []
        };
        let Oz = null !== (Fz = null === (Wz = Xz.optionalReplacementSpan) || void 0 === Wz ? void 0 : Wz.start) && void 0 !== Fz ? Fz : sz.pos;
        if (!Xz.optionalReplacementSpan) {
          const zz = sz.state.doc.sliceString(0, sz.pos);
          for (; Oz > 0 && /[\w$]/.test(zz[Oz - 1]);) Oz--
        }
        return Xz.entries = Xz.entries.filter((zz => zz.kind !== Dz().ScriptElementKind.warning)), {
          from: Oz,
          options: Xz.entries.map((Fz => {
            var Wz, Xz, oz, vz;
            const Uz = zz.languageService.getCompletionEntryDetails(tz, sz.pos, Fz.name, {}, Fz.source, {}, Fz.data),
              Kz = null !== (Wz = null === (Xz = Fz.replacementSpan) || void 0 === Xz ? void 0 : Xz.start) && void 0 !== Wz ? Wz : Oz,
              uz = Fz.replacementSpan ? Fz.replacementSpan.start + Fz.replacementSpan.length : sz.pos,
              Nz = null !== (oz = Fz.insertText) && void 0 !== oz ? oz : Fz.name;
            return {
              label: Fz.name,
              detail: null === Uz || void 0 === Uz ? void 0 : Uz.displayParts.map((zz => zz.text)).join(""),
              info: null === Uz || void 0 === Uz || null === (vz = Uz.documentation) || void 0 === vz ? void 0 : vz.map((zz => zz.text)).join(""),
              apply: zz => {
                zz.dispatch({
                  changes: {
                    from: Kz,
                    to: uz,
                    insert: Nz
                  },
                  selection: {
                    anchor: Kz + Nz.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function Qt(zz) {
      return tz => {
        const sz = document.createElement("div");
        sz.className = "CodeEditorTooltip";
        let Fz = !1;
        return queueMicrotask((() => {
          Fz || (oz.render((0, mt.jsx)(Nz.c, {
            text: zz
          }), sz), tz.requestMeasure())
        })), {
          dom: sz,
          destroy() {
            Fz = !0, queueMicrotask((() => {
              oz.unmountComponentAtNode(sz)
            }))
          }
        }
      }
    }

    function kt(zz, tz, sz) {
      return Fz => {
        var Wz;
        if (!tz) return [];
        const Xz = null === (Wz = Fz.selection.du[0]) || void 0 === Wz ? void 0 : Wz.head;
        if (void 0 === Xz) return [];
        const Oz = zz.languageService.getSignatureHelpItems(sz, Xz, {});
        if (!Oz || !Oz.items.length) return [];
        const oz = Oz.applicableSpan.start - Oz.items[0].prefixDisplayParts.map((zz => zz.text)).join("").length,
          vz = Oz.applicableSpan.start,
          Uz = Fz.doc.lineAt(Xz),
          Kz = Uz.from,
          uz = Math.min(Uz.to, Xz);
        let Nz, bz;
        return oz < Kz ? (Nz = Kz, bz = uz) : (Nz = oz, bz = vz), [{
          pos: Nz,
          end: bz,
          above: !1,
          create: Qt(et(Oz.items[0], Oz.argumentIndex))
        }]
      }
    }

    function it(zz, tz) {
      return (sz, Fz, Wz) => {
        const Xz = zz.languageService.getQuickInfoAtPosition(tz, Fz);
        if (!Xz) return [];
        const Oz = Xz.textSpan.start,
          oz = Xz.textSpan.start + Xz.textSpan.length;
        if (Fz < Oz || Fz >= oz) return [];
        if (Xz.kind === Dz().ScriptElementKind.memberFunctionElement || Xz.kind === Dz().ScriptElementKind.variableElement && "declare" === Xz.kindModifiers) {
          const zz = Xz.displayParts.findIndex((zz => "space" === zz.kind)); - 1 !== zz && (Xz.displayParts = Xz.displayParts.slice(zz));
          const tz = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            sz = Xz.displayParts.findIndex((zz => "punctuation" === zz.kind && "(" === zz.text)); - 1 !== sz && (tz.prefixDisplayParts = Xz.displayParts.slice(0, sz + 1), Xz.displayParts = Xz.displayParts.slice(sz + 1));
          const Fz = Xz.displayParts.findLastIndex((zz => "punctuation" === zz.kind && ")" === zz.text)); - 1 !== Fz && (tz.suffixDisplayParts = Xz.displayParts.slice(Fz), Xz.displayParts = Xz.displayParts.slice(0, Fz));
          let Wz = 0,
            vz = [];
          for (const Oz of Xz.displayParts)
            if (Jt.has(Oz.text) ? Wz++ : It.has(Oz.text) && Wz--, "lineBreak" !== Oz.kind) {
              if ("space" === Oz.kind) {
                if (0 === vz.length) continue;
                vz.push({
                  kind: "space",
                  text: " "
                })
              } else vz.push(Oz);
              0 === Wz && "," === Oz.text && (tz.parameters.push({
                displayParts: vz
              }), vz = [])
            } return vz.length > 0 && tz.parameters.push({
            displayParts: vz
          }), tz.documentation = Xz.documentation, [{
            pos: Oz,
            end: oz,
            above: !0,
            create: Qt(et(tz))
          }]
        }
        const vz = [];
        for (const zz of Xz.displayParts) vz.push({
          str: zz.text,
          style: {
            color: Ct.text
          }
        });
        if (Xz.documentation) {
          vz.push("\n\n");
          for (const zz of Xz.documentation) vz.push({
            str: zz.text,
            style: {
              color: Ct.docs
            }
          })
        }
        return [{
          pos: Oz,
          end: oz,
          above: !0,
          create: Qt(vz)
        }]
      }
    }
    const Lt = {
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
      semicolons: Dz().SemicolonPreference.Insert
    };
    const lt = Xz.i.define(),
      nt = {
        lineNumbers: !0,
        tabSize: 4
      };

    function qt(zz) {
      let {
        isLobbyCode: tz,
        code: sz,
        onChange: oz,
        canEditCode: Nz,
        setTemporaryMessage: wz,
        close: Jz,
        showTooltips: nz,
        lightMode: az,
        collabState: Sz,
        onRemoteDocChange: Vz,
        files: Rz,
        activePath: pz,
        pluginName: Ez,
        pluginFile: zt,
        pluginSource: st,
        setActiveDocReplacer: Ft,
        showAiHints: Xt,
        canAiChangeCode: Ot = Nz
      } = zz;
      const [ot, vt] = (0, Oz.useState)(null), Ut = null === Sz || void 0 === Sz ? void 0 : Sz.version, Kt = null === Sz || void 0 === Sz ? void 0 : Sz.clientID, ut = (0, Oz.useRef)({
        isLobbyCode: tz,
        files: Rz,
        code: sz,
        activePath: pz
      }), Nt = (0, Oz.useRef)(Vz);
      Nt.current = Vz;
      const bt = (0, Oz.useRef)(null),
        wt = (0, Oz.useRef)(Sz);
      wt.current = Sz;
      const Dt = (0, Oz.useRef)(null),
        Bt = (0, Oz.useRef)(null),
        Pt = (0, Oz.useRef)(null),
        rt = (0, Oz.useRef)(Jz);
      rt.current = Jz;
      const Yt = (0, Oz.useRef)(sz);
      Yt.current = sz;
      const Jt = (0, Oz.useRef)(st);
      Jt.current = st;
      const It = function(zz, tz, sz, Fz) {
        return sz ? `/plugin-preview/${sz}/${null!==Fz&&void 0!==Fz?Fz:"index.ts"}` : zz ? At(null !== tz && void 0 !== tz ? tz : rz.j) : jt
      }(tz, pz, Ez, zt);
      (0, Oz.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: zz,
            files: tz,
            code: sz,
            activePath: Fz
          } = ut.current, Wz = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Dz().ModuleKind.ESNext,
            moduleResolution: Dz().ModuleResolutionKind.Bundler,
            target: Dz().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Pz.g).map((zz => [zz.specifier, [zz.typesVfsPath]])))
            }
          }, Xz = new Map, Oz = [];
          if (zz) {
            const zz = null !== tz && void 0 !== tz ? tz : {
              [rz.j]: sz || "\n"
            };
            for (const [tz, sz] of Object.entries(zz)) {
              const zz = At(tz);
              Xz.set(zz, sz || "\n"), Oz.push(zz)
            }
            const Wz = At(null !== Fz && void 0 !== Fz ? Fz : rz.j);
            Xz.has(Wz) ? Xz.set(Wz, sz || "\n") : (Xz.set(Wz, sz || "\n"), Oz.push(Wz)), Xz.set("/node_modules/@bloxd/index.d.ts", Kz.default), Oz.push("/node_modules/@bloxd/index.d.ts");
            for (const tz of Object.values(Pz.g)) {
              Xz.set(tz.typesVfsPath, tz.types), Oz.push(tz.typesVfsPath);
              for (const [zz, sz] of Object.entries(tz.files)) {
                const Fz = `/plugin-preview/${tz.name}/${zz}`;
                Xz.set(Fz, sz || "\n"), Oz.push(Fz)
              }
            }
          } else Xz.set(jt, sz || "\n"), Oz.push(jt);
          Xz.set("/globals.d.ts", zz ? Uz.b : vz.d), Xz.set("/lib.d.ts", uz.d), Oz.push("/globals.d.ts", "/lib.d.ts");
          const oz = bz.e(Xz),
            Nz = bz.h(oz, Oz, Dz(), Wz);
          vt({
            hu: Nz,
            fsMap: Xz
          })
        }()
      }), []), (0, Oz.useEffect)((() => {
        var zz, Fz;
        if (!ot || !tz) return;
        const {
          hu: Wz,
          fsMap: Xz
        } = ot;
        if (function(zz, tz, sz) {
            const Fz = new Set;
            for (const [Wz, Xz] of Object.entries(sz)) {
              const sz = At(Wz);
              Fz.add(sz);
              const Oz = Xz || "\n";
              tz.get(sz) !== Oz && (tz.set(sz, Oz), yt(zz, sz, Oz))
            }
            for (const Wz of [...tz.keys()]) "/globals.d.ts" === Wz || "/lib.d.ts" === Wz || Wz.startsWith("/node_modules/") || Wz.startsWith("/plugin-preview/") || Fz.has(Wz) || (tz.delete(Wz), zz.getSourceFile(Wz) && zz.deleteFile(Wz))
          }(Wz, Xz, null !== Rz && void 0 !== Rz ? Rz : {
            [rz.j]: sz || "\n"
          }), Ez) return void yt(Wz, It, st || "\n");
        const Oz = null !== (zz = null === (Fz = bt.current) || void 0 === Fz ? void 0 : Fz.state.doc.toString()) && void 0 !== zz ? zz : sz;
        yt(Wz, It, Oz || "\n")
      }), [Rz, pz, ot, Ez, st, It, sz, tz]), (0, Oz.useEffect)((() => {
        if (!ot) return;
        const {
          hu: zz
        } = ot;
        yt(zz, It, (Ez ? st : sz) || "\n")
      }), [sz, Ez, st, It, ot]), (0, Oz.useEffect)((() => () => {
        Bt.current && (Bt.current(), Bt.current = null)
      }), []), (0, Oz.useEffect)((() => (Ft(((zz, tz) => {
        if (Ez) return !1;
        const sz = bt.current,
          Fz = wt.current,
          Wz = Fz ? (0, Yz.D)(Fz.docKey) : null;
        if (!sz || !Fz || Dt.current !== Fz.clientID || zz !== Wz) return !1;
        const Xz = sz.state.doc.toString();
        return Xz !== tz && sz.dispatch({
          changes: {
            from: 0,
            to: Xz.length,
            insert: tz
          }
        }), !0
      })), () => {
        bt.current = null, Dt.current = null, Ft(null)
      })), [Ft, Ez]);
      const Ct = tz ? Ez ? null : null !== pz && void 0 !== pz ? pz : rz.j : Ht.c,
        et = tt(bt, Ct);
      Wt(bt, wz), (0, mz.g)("FormatCode", (() => {
        if (!ot || !bt.current || Ez) return;
        const {
          hu: zz,
          fsMap: sz
        } = ot, Fz = zz.getSourceFile(It).getFullText();
        let Wz = 0;
        if (tz && Rz)
          for (const [tz, oz] of Object.entries(Rz)) tz !== (null !== pz && void 0 !== pz ? pz : rz.j) && (Wz += oz.length);
        const Xz = function(zz, tz, sz, Fz, Wz) {
          const Xz = zz.languageService.getFormattingEditsForDocument(Fz, Lt);
          if (!Xz.length) return Iz.e.error("Code is already formatted.");
          Xz.sort(((zz, tz) => tz.span.start - zz.span.start));
          let Oz = zz.getSourceFile(Fz).getFullText();
          for (const oz of Xz) Oz = Oz.slice(0, oz.span.start) + oz.cO + Oz.slice(oz.span.start + oz.span.length);
          return Oz !== (sz ? (0, xz.k)(Oz, Wz) : (0, xz.j)(Oz)) ? Iz.e.error("Formatting the code will go beyond the character limit.") : Iz.e.value(Oz)
        }(zz, 0, tz, It, Wz);
        if (Xz.isError()) return void wz({
          message: Xz.asError().message,
          type: "warning"
        });
        const Oz = Xz.getValue();
        Oz && (bt.current.dispatch({
          changes: {
            from: 0,
            to: Fz.length,
            insert: Oz
          },
          selection: {
            anchor: Oz.length
          }
        }), yt(zz, It, Oz), oz(Oz))
      }));
      const Zt = (0, Oz.useMemo)((() => {
        if (!ot) return [];
        const {
          hu: zz,
          fsMap: sz
        } = ot;
        ! function(zz, tz, sz, Fz) {
          if (zz.getSourceFile(sz)) return;
          const Wz = Fz || "\n";
          tz.set(sz, Wz), zz.createFile(sz, Wz)
        }(zz, sz, It, (Ez ? Jt.current : Yt.current) || "\n");
        const Oz = tz && Mt(Ez ? null !== zt && void 0 !== zt ? zt : "index.ts" : pz),
          oz = [(0, Wz.b)({
            jsx: !1,
            typescript: Oz
          }), Xz.h.highest(Xz.d.domEventHandlers({
            keydown: zz => "Escape" === zz.key ? (rt.current(), zz.stopPropagation(), !0) : (zz.stopPropagation(), !1)
          })), (0, Fz.c)({
            override: [ht(zz, It)]
          }), Zz.p.fromClass(class {
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
                (0, dz.jb)(this.view.state, zz) || (0, dz.H)(this.view, zz, hz) || this.scheduleParse()
              }), Qz))
            }
          }), ...fz, Xz.d.lineWrapping, Xz.k.define({
            create: kt(zz, nz, It),
            update(tz, sz) {
              const Fz = sz.effects.some((zz => zz.is(lt)));
              return sz.docChanged || sz.selection || Fz ? (yt(zz, It, sz.state.doc.toString() || " "), kt(zz, nz, It)(sz.state)) : tz
            },
            provide: zz => Xz.w.computeN([zz], (tz => tz.field(zz)))
          }), (0, Xz.t)(it(zz, It)), (0, Hz.f)(dt(tz, zz, It)), Xz.o.fromClass(class {
            constructor(zz) {
              this.view = zz, this.searchPanel = null
            }
            update(zz) {
              const tz = zz.view.dom.querySelector(".cm-search");
              if (tz !== this.searchPanel) {
                if (this.searchPanel = tz, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (zz => {
                  "Escape" === zz.key && (0, gz.b)(this.view), zz.stopPropagation()
                }))
              }
            }
          })];
        Xt && !Ez && oz.push(xt(tz ? null !== pz && void 0 !== pz ? pz : rz.j : Ht.c, Ot));
        const vz = wt.current;
        if (vz && !Ez) {
          oz.push(... function(zz, tz, sz, Fz, Wz) {
            let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Oz = (0, Yz.D)(sz),
              oz = Zz.p.fromClass(class {
                constructor(zz) {
                  this.view = zz, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = cz.o.subscribe("codeCollab", (zz => {
                    zz.docKey === Oz && zz.type === Yz.h.Updates && (zz.updates ? this.applyUpdates(zz.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(zz) {
                  const tz = JSON.parse(zz).map((zz => ({
                    clientID: zz.clientID,
                    changes: ez.ChangeSet.fromJSON(zz.changes)
                  })));
                  tz.length > 0 && (this.view.dispatch((0, Cz.e)(this.view.state, tz)), Wz && Wz(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(zz) {
                  Xz && (zz.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const zz = (0, Cz.f)(this.view.state);
                  if (this.pushing || !zz.length) return;
                  const tz = Date.now() - this.lastPushTime;
                  if (tz < Mz) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Mz - tz)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Az);
                  const sz = (0, Cz.d)(this.view.state),
                    Wz = zz.map((zz => ({
                      clientID: zz.clientID,
                      changes: zz.changes.toJSON()
                    }))),
                    Xz = JSON.stringify(Wz);
                  Xz.length <= Yz.k ? Gz.gameBridge.send("sendCodeCollab", {
                    Yt: Yz.e.Push,
                    xt: Oz,
                    Jt: sz,
                    Zt: Xz
                  }) : (0, jz.postJsonWithMetricsCookiesAndJsonResponse)(`${Fz.gsUrl}/code/collab-push`, Tz.n["collab-push"].toBuffer({
                    gameNameWithVariation: Fz.gameNameWithVariation,
                    lobbyName: Fz.lobbyName,
                    docKey: Oz,
                    version: sz,
                    updates: Xz
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
                  const zz = (0, Cz.d)(this.view.state);
                  (0, jz.postJsonWithMetricsCookiesAndJsonResponse)(`${Fz.gsUrl}/code/collab-pull`, Tz.n["collab-pull"].toBuffer({
                    gameNameWithVariation: Fz.gameNameWithVariation,
                    lobbyName: Fz.lobbyName,
                    docKey: Oz,
                    fromVersion: zz
                  }), {
                    retries: 1
                  }).then((zz => {
                    this.destroyed || (zz.fullDoc ? cz.o.Yg("codeCollabRejoin", {
                      docKey: Oz,
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
                  if (zz - this.lastCursorSent < yz) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), yz)));
                  this.lastCursorSent = zz;
                  const tz = this.view.state.selection.main;
                  Gz.gameBridge.send("sendCodeCollab", {
                    Yt: Yz.e.Cursor,
                    xt: Oz,
                    jt: tz.anchor,
                    yt: tz.head
                  })
                }
                destroy() {
                  this.destroyed = !0, cz.o.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, Cz.c)({
              startVersion: zz,
              clientID: tz
            }), oz]
          }(Ut, Kt, vz.docKey, vz.httpConfig, (zz => {
            var tz;
            null === (tz = Nt.current) || void 0 === tz || tz.call(Nt, zz)
          }), Nz));
          const zz = function(zz, tz) {
            const sz = (0, Yz.D)(zz);
            return {
              extensions: [qz],
              connect(zz) {
                if (tz) {
                  const sz = tz.map((zz => iz.of({
                    playerId: zz.playerId,
                    playerName: zz.playerName,
                    colour: zz.colour,
                    anchor: zz.anchor,
                    head: zz.head,
                    lastMoved: Date.now()
                  })));
                  sz.length > 0 && zz.dispatch({
                    effects: sz
                  })
                }
                const Fz = cz.o.subscribe("codeCollab", (tz => {
                    if (tz.docKey === sz)
                      if (tz.type === Yz.h.RemoteCursor) zz.dispatch({
                        effects: iz.of({
                          playerId: tz.playerId,
                          playerName: tz.playerName,
                          colour: tz.colour,
                          anchor: tz.anchor,
                          head: tz.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (tz.type === Yz.h.Presence) {
                      const sz = JSON.parse(tz.peers),
                        Fz = new Set(sz.map((zz => zz.playerId))),
                        Wz = zz.state.field(qz),
                        Xz = [];
                      for (const [zz] of Wz.cursors) Fz.has(zz) || Xz.push(Lz.of(zz));
                      Xz.length > 0 && zz.dispatch({
                        effects: Xz
                      })
                    }
                  })),
                  Wz = setInterval((() => {
                    zz.dom.isConnected ? zz.dispatch({
                      effects: lz.of(Date.now())
                    }) : clearInterval(Wz)
                  }), kz);
                return () => {
                  cz.o.unsubscribe(Fz), clearInterval(Wz)
                }
              }
            }
          }(vz.docKey, vz.existingCursors);
          oz.push(...zz.extensions), Pt.current = zz.connect
        } else Pt.current = null;
        return oz
      }), [tz, ot, nz, Ut, Kt, It, pz, Ez, zt, Nz, Xt, Ot]);
      if (!ot || !Sz && !Ez) return (0, mt.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, mt.jsx)(Bz.d, {})
      });
      const Gt = Ez ? `plugin-${Ez}-${null!==zt&&void 0!==zt?zt:"index.ts"}` : Sz ? `collab-${Sz.clientID}` : `local-${tz}`;
      return (0, mt.jsx)(Xz.s, {
        value: Ez ? null !== st && void 0 !== st ? st : "" : sz,
        onChange: oz,
        extensions: Zt,
        className: "CodeEditorContent",
        theme: az ? gt : "dark",
        editable: Nz && !Ez,
        basicSetup: nt,
        onCreateEditor: zz => {
          var tz;
          bt.current = zz, Dt.current = null !== (tz = null === Sz || void 0 === Sz ? void 0 : Sz.clientID) && void 0 !== tz ? tz : null, et(zz), Bt.current && Bt.current(), Pt.current && (Bt.current = Pt.current(zz))
        }
      }, Gt)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);