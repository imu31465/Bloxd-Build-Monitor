export const id = 297;
export const ids = [297];
export const modules = {
  41535: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Zi
    });
    var Op = cp(41541),
      op = cp(41591),
      Ip = cp(41595),
      Sp = cp(62),
      xp = cp(82),
      Lp = cp(41612),
      Yp = cp(41621),
      Dp = cp(4874),
      Ap = cp(41630),
      Pp = cp(1929),
      Wp = cp(41637),
      yp = cp(41647),
      Up = cp.n(yp),
      wp = cp(41597),
      vp = cp(41603),
      tp = cp(1361),
      Hp = cp(37053),
      dp = cp(1251),
      ep = cp(2487),
      jp = cp(36939),
      kp = cp(1476),
      mp = cp(640),
      Rp = cp(1255),
      qp = cp(41702),
      Mp = cp(41548),
      Cp = cp(41556),
      Ep = cp(1956),
      Xp = cp(3837),
      lp = cp(34),
      Qp = cp(1149);
    const Jp = 1e4,
      Bp = 250,
      Np = 250;
    var Tp = cp(41566);
    const fp = 50,
      bp = 100;
    const hp = 2e3,
      ap = Mp.C.define(),
      np = Mp.C.define(),
      Fp = Mp.C.define();
    class gp extends Cp.l {
      constructor(pp, ip, cp) {
        super(), this.colour = pp, this.playerName = ip, this.showName = cp
      }
      toDOM() {
        const pp = document.createElement("span");
        pp.className = "cm-remote-cursor-wrapper", pp.style.borderLeftColor = this.colour;
        const ip = document.createElement("span");
        if (ip.className = "cm-remote-cursor", ip.style.borderLeftColor = this.colour, pp.appendChild(ip), this.showName) {
          const ip = document.createElement("span");
          ip.className = "cm-remote-cursor-name", ip.style.backgroundColor = this.colour, ip.textContent = this.playerName, pp.appendChild(ip)
        }
        return pp
      }
      eq(pp) {
        return this.colour === pp.colour && this.playerName === pp.playerName && this.showName === pp.showName
      }
      get estimatedHeight() {
        return -1
      }
      ignoreEvent() {
        return !0
      }
    }

    function Gp(pp, ip) {
      const cp = [],
        Op = [];
      for (const [, Sp] of pp) {
        const pp = ip - Sp.lastMoved < hp;
        if (cp.push({
            pos: Sp.head,
            decoration: Cp.c.widget({
              widget: new gp(Sp.colour, Sp.playerName, pp),
              side: 1
            })
          }), Sp.anchor !== Sp.head) {
          const pp = Math.min(Sp.anchor, Sp.head),
            ip = Math.max(Sp.anchor, Sp.head);
          Op.push({
            from: pp,
            to: ip,
            decoration: Cp.c.mark({
              class: "cm-remote-selection",
              attributes: {
                style: `background-color: ${Sp.colour}33`
              }
            })
          })
        }
      }
      const op = new Mp.w,
        Ip = [];
      for (const Sp of cp) Ip.push({
        bias: 1,
        deco: Sp.decoration,
        from: Sp.pos,
        to: Sp.pos
      });
      for (const Sp of Op) Ip.push({
        bias: 0,
        deco: Sp.decoration,
        from: Sp.from,
        to: Sp.to
      });
      Ip.sort(((pp, ip) => pp.from - ip.from || pp.deco.startSide - ip.deco.startSide || pp.bias - ip.bias));
      for (const Sp of Ip) op.add(Sp.from, Sp.to, Sp.deco);
      return op.finish()
    }
    const rp = Mp.E.define({
      create: () => ({
        cursors: new Map,
        uO: Cp.c.none
      }),
      update(pp, ip) {
        let cp = pp.cursors,
          Op = !1;
        if (ip.docChanged) {
          const pp = new Map;
          for (const [Op, op] of cp) pp.set(Op, {
            ...op,
            anchor: ip.changes.mapPos(op.anchor, 1),
            head: ip.changes.mapPos(op.head, 1)
          });
          cp = pp, Op = !0
        }
        for (const op of ip.effects)
          if (op.is(ap)) {
            if (!Number.isInteger(op.value.anchor) || !Number.isInteger(op.value.head)) {
              console.warn(`Code Editor: ignored player ${op.value.playerId}'s cursor at ${op.value.anchor}-${op.value.head}`);
              continue
            }
            const Ip = ip.state.doc.length,
              Sp = {
                ...op.value,
                anchor: Math.min(op.value.anchor, Ip),
                head: Math.min(op.value.head, Ip)
              };
            cp === pp.cursors && (cp = new Map(cp)), cp.set(Sp.playerId, Sp), Op = !0
          } else op.is(np) ? cp.has(op.value) && (cp === pp.cursors && (cp = new Map(cp)), cp.delete(op.value), Op = !0) : op.is(Fp) && (Op = !0);
        return Op ? {
          cursors: cp,
          uO: Gp(cp, Date.now())
        } : pp
      },
      provide: pp => Cp.f.uO.from(pp, (pp => pp.uO))
    });
    const Zp = Mp.C.define(),
      zp = Cp.c.mark({
        class: "CodeInsertFlash"
      }),
      sp = Mp.E.define({
        create: () => Cp.c.none,
        update(pp, ip) {
          let cp = pp.map(ip.changes);
          for (const Op of ip.effects) Op.is(Zp) && (cp = Op.value ? Cp.c.set(zp.range(Op.value.from, Op.value.to)) : Cp.c.none);
          return cp
        },
        provide: pp => Cp.f.uO.from(pp)
      }),
      Kp = Mp.E.define({
        create: () => !1,
        update: (pp, ip) => pp || void 0 !== ip.annotation(Mp.I.userEvent) && !ip.annotation(Mp.I.remote)
      }),
      Vp = [sp, Kp];

    function ii(pp) {
      return pp.field(Kp)
    }
    const ci = 3e4;

    function Oi(pp, ip) {
      const cp = (0, Sp.useRef)(null);
      (0, Sp.useEffect)((() => {
        var pp;
        (null === (pp = cp.current) || void 0 === pp ? void 0 : pp.path) !== ip && (cp.current = null)
      }), [ip]);
      const Op = pp => {
        var Op;
        const op = cp.current;
        if (null === pp || void 0 === pp || !pp.dom.isConnected || !op || op.path !== ip) return;
        cp.current = null;
        const {
          aW: Sp
        } = op;
        if (Sp && null !== Sp.text && performance.now() - Sp.at < ci) {
          const ip = function(pp, ip) {
            if (pp === ip) return null;
            const cp = Math.min(pp.length, ip.length);
            let Op = 0;
            for (; Op < cp && pp[Op] === ip[Op];) Op++;
            let op = 0;
            for (; op < cp - Op && pp[pp.length - 1 - op] === ip[ip.length - 1 - op];) op++;
            return {
              from: Op,
              to: pp.length - op,
              insert: ip.slice(Op, ip.length - op)
            }
          }(pp.state.doc.toString(), Sp.text);
          null !== ip && pp.dispatch({
            changes: ip,
            userEvent: Sp.placed ? "input" : void 0
          })
        }
        const {
          doc: xp
        } = pp.state, Lp = xp.line(Math.min(Math.max(op.line, 1), xp.lines)), Yp = Lp.from + Math.min(null !== (Op = op.column) && void 0 !== Op ? Op : 0, Lp.length);
        pp.dispatch({
          selection: {
            anchor: Yp
          },
          effects: Ip.c.scrollIntoView(Yp, {
            y: "center"
          }),
          userEvent: null !== Sp && void 0 !== Sp && Sp.placed ? "select" : void 0
        }), !1 !== (null === Sp || void 0 === Sp ? void 0 : Sp.focused) && pp.focus()
      };
      return (0, kp.f)("CodeEditorGoToLine", (ip => {
        cp.current = ip, Op(pp.current)
      })), (0, kp.f)("CodeEditorKeepEdits", (() => {
        const Op = pp.current;
        if (null === Op || !Op.dom.isConnected || null === ip) return;
        const {
          doc: op,
          selection: Ip
        } = Op.state, {
          head: Sp
        } = Ip.main, xp = op.lineAt(Sp), Lp = {
          text: (0, qp.g)(Op.state).length > 0 ? op.toString() : null,
          at: performance.now(),
          focused: Op.hasFocus,
          placed: ii(Op.state)
        };
        cp.current = {
          path: ip,
          line: xp.number,
          column: Sp - xp.from,
          aW: Lp
        }
      })), pp => {
        var op;
        const Ip = cp.current;
        !1 === (null === Ip || void 0 === Ip || null === (op = Ip.aW) || void 0 === op ? void 0 : op.focused) && Ip.path === ip || pp.focus(), Op(pp)
      }
    }
    var oi = cp(4458),
      Ii = cp(1201);

    function Si(pp, ip) {
      const {
        t: cp
      } = (0, Ii.H)();
      (0, kp.f)("CodeEditorInsertText", (Op => {
        let {
          text: op,
          focus: Ip
        } = Op;
        const Sp = pp.current,
          xp = null !== Sp && void 0 !== Sp && Sp.dom.isConnected ? function(pp, ip) {
            if (!ii(pp)) return null;
            const {
              from: cp,
              to: Op
            } = pp.selection.main, op = cp + ip.length;
            return {
              changes: {
                from: cp,
                to: Op,
                insert: ip
              },
              selection: {
                anchor: op
              },
              effects: [Cp.f.scrollIntoView(op, {
                y: "center"
              }), Zp.of({
                from: cp,
                to: op
              })],
              userEvent: "input"
            }
          }(Sp.state, op) : null;
        null !== Sp && null !== xp ? (Sp.dispatch(xp), Ip && Sp.focus(), setTimeout((() => {
          Sp.dom.isConnected && Sp.dispatch({
            effects: Zp.of(null)
          })
        }), 1500)) : (0, oi.d)(op).then((() => {
          ip({
            message: cp("codeEditorWorld:pickCopied", {
              coords: op
            }),
            type: "success"
          })
        }), (pp => {
          console.error("Pick could not copy the coordinates", pp), ip({
            message: cp("codeEditorWorld:pickPlaceCursor", {
              coords: op
            }),
            type: "warning"
          })
        }))
      }))
    }
    var xi = cp(41583);
    const Li = "#e45649",
      Yi = "#383a42",
      Di = "#696c77",
      Ai = "#986801",
      Pi = "#e5e5e6",
      Wi = "#fafafa",
      yi = "#eaeaeb",
      Ui = "#526fff",
      wi = Cp.f.theme({
        "&": {
          color: Yi,
          backgroundColor: Wi
        },
        ".cm-content": {
          caretColor: Ui
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Ui
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#d7d8de"
        },
        ".cm-panels": {
          backgroundColor: "#f0f0f1",
          color: Yi
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
          backgroundColor: Wi,
          color: Di,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Pi
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#555"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: yi
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: yi,
          borderBottomColor: yi
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Pi,
            color: Yi
          }
        }
      }, {
        dark: !1
      }),
      vi = Tp.c.define([{
        tag: xi.l.keyword,
        color: "#a626a4"
      }, {
        tag: [xi.l.name, xi.l.deleted, xi.l.character, xi.l.propertyName, xi.l.macroName],
        color: Li
      }, {
        tag: [xi.l.function(xi.l.variableName), xi.l.labelName],
        color: "#4078f2"
      }, {
        tag: [xi.l.color, xi.l.constant(xi.l.name), xi.l.standard(xi.l.name)],
        color: Ai
      }, {
        tag: [xi.l.definition(xi.l.name), xi.l.separator],
        color: Yi
      }, {
        tag: [xi.l.typeName, xi.l.className, xi.l.number, xi.l.changed, xi.l.annotation, xi.l.modifier, xi.l.self, xi.l.namespace],
        color: "#c18401"
      }, {
        tag: [xi.l.operator, xi.l.operatorKeyword, xi.l.url, xi.l.escape, xi.l.regexp, xi.l.link, xi.l.special(xi.l.string)],
        color: "#0184bc"
      }, {
        tag: [xi.l.meta, xi.l.comment],
        color: Di
      }, {
        tag: xi.l.strong,
        fontWeight: "bold"
      }, {
        tag: xi.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: xi.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: xi.l.link,
        color: Di,
        textDecoration: "underline"
      }, {
        tag: xi.l.heading,
        fontWeight: "bold",
        color: Li
      }, {
        tag: [xi.l.atom, xi.l.bool, xi.l.special(xi.l.variableName)],
        color: Ai
      }, {
        tag: [xi.l.processingInstruction, xi.l.string, xi.l.inserted],
        color: "#50a14f"
      }, {
        tag: xi.l.invalid,
        color: "#000000"
      }]),
      ti = [wi, (0, Tp.eb)(vi)];
    var Hi = cp(37115),
      di = cp(41707);
    const ei = Ip.h.define(),
      ui = Ip.j.define({
        create: () => !1,
        update(pp, ip) {
          for (const cp of ip.effects) cp.is(ei) && (pp = cp.value);
          return pp
        }
      }),
      ji = [{
        action: "explain",
        label: "Explain this"
      }, {
        action: "fix",
        label: "Fix this"
      }, {
        action: "change",
        label: "Change this\u2026"
      }];

    function ki(pp, ip) {
      return [ui, Ip.m.fromClass(class {
        constructor(pp) {
          this.view = pp, this.onDown = pp => {
            const ip = pp.target instanceof Element && null !== pp.target.closest(".cm-tooltip");
            0 !== pp.button || ip || this.view.state.field(ui) || this.view.dispatch({
              effects: ei.of(!0)
            })
          }, this.onUp = () => {
            this.view.state.field(ui) && this.view.dispatch({
              effects: ei.of(!1)
            })
          }, pp.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
        }
        destroy() {
          this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
        }
      }), Ip.q.compute(["selection", ui], (cp => function(pp, ip, cp) {
        const Op = pp.selection.main;
        return Op.empty || pp.field(ui) || pp.sliceDoc(Op.from, Op.to).trim().length < 2 ? null : {
          pos: Op.from,
          above: !0,
          create: pp => {
            const Op = document.createElement("div");
            Op.className = "CodeSelectionActions", Op.setAttribute("role", "toolbar"), Op.setAttribute("aria-label", "AI Helper: picked code");
            for (const {
                action: op,
                label: Ip
              }
              of ji) {
              if (!cp && "explain" !== op) continue;
              const Sp = document.createElement("button");
              Sp.type = "button", Sp.textContent = Ip, "change" !== op && (Sp.title = di.e, Sp.dataset.asksAi = "true"), Sp.addEventListener("mousedown", (pp => {
                pp.preventDefault()
              })), Sp.addEventListener("click", (() => {
                const cp = pp.state.selection.main;
                if (cp.empty) return;
                const Op = {
                  action: op,
                  path: ip,
                  fromLine: pp.state.doc.lineAt(cp.from).number,
                  toLine: pp.state.doc.lineAt(cp.to > cp.from && pp.state.doc.lineAt(cp.to).from === cp.to ? cp.to - 1 : cp.to).number,
                  text: pp.state.sliceDoc(cp.from, cp.to)
                };
                lp.m.GA("WorldCodeAiSelection", Op), pp.dispatch({
                  selection: {
                    anchor: cp.to
                  }
                })
              })), Op.appendChild(Sp)
            }
            return {
              dom: Op
            }
          }
        }
      }(cp, pp, ip)))]
    }
    var mi = cp(1112);
    const Ri = new Set(["(", "{", "[", "<"]),
      qi = new Set([")", "}", "]", ">"]),
      Mi = {
        text: "var(--codeTooltipText, white)",
        parameterName: "var(--codeTooltipParameterName, orange)",
        parameter: "var(--codeTooltipParameter, cyan)",
        suffix: "var(--codeTooltipSuffix, pink)",
        docs: "var(--codeTooltipDocs, gray)"
      };

    function Ci(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      function cp(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = [];
        for (const op of pp) {
          let pp;
          pp = "punctuation" === op.kind ? Mi.text : "parameterName" === op.kind ? Mi.parameterName : ip, Op.push({
            str: op.text,
            style: {
              color: pp,
              opacity: cp ? .5 : void 0
            }
          })
        }
        return Op
      }
      const Op = [];
      if (Op.push(...cp(pp.prefixDisplayParts, Mi.text)), pp.parameters.length > 0) {
        Op.push("\n");
        for (let op = 0; op < pp.parameters.length; op++) {
          const Ip = pp.parameters[op];
          Op.push("\t"), Op.push(...cp(Ip.displayParts, Mi.parameter, null !== ip && op !== ip)), Op.push("\n")
        }
      }
      return Op.push(...cp(pp.suffixDisplayParts, Mi.suffix)), pp.documentation && (Op.push("\n\n"), Op.push(...cp(pp.documentation, Mi.docs))), Op
    }
    var Ei = function(pp) {
      return pp[pp.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", pp[pp.DuplicateIdentifier = 2300] = "DuplicateIdentifier", pp
    }(Ei || {});
    const Xi = new Set([Ei.DuplicateIdentifier]),
      li = new Set([Ei.VariableDefinedElsewhere]),
      Qi = new Set([]),
      Ji = "/index.js";

    function Bi(pp) {
      return "/" + pp
    }

    function Ni(pp, ip, cp) {
      pp.getSourceFile(ip) && pp.deleteFile(ip), pp.createFile(ip, cp)
    }

    function Ti(pp) {
      return !!pp && ((0, ep.p)(pp) || (0, ep.m)(pp))
    }

    function fi(pp, ip, cp) {
      return () => {
        let Op = [...ip.languageService.getSemanticDiagnostics(cp), ...ip.languageService.getSyntacticDiagnostics(cp)];
        return Op = Op.filter((pp => !(0, mp.G)(pp.start) && !(0, mp.G)(pp.length) && !Xi.has(pp.code))), pp || (Op = Op.filter((pp => !li.has(pp.code)))), Op.map((pp => ({
          from: pp.start,
          to: pp.start + pp.length,
          message: "string" === typeof pp.messageText ? pp.messageText : pp.messageText.messageText,
          severity: Qi.has(pp.code) ? "warning" : "error"
        })))
      }
    }

    function bi(pp, ip) {
      return cp => {
        var Op, op;
        const Ip = pp.languageService.getCompletionsAtPosition(ip, cp.pos, {});
        if (!Ip) return {
          from: cp.pos,
          options: []
        };
        let Sp = null !== (Op = null === (op = Ip.optionalReplacementSpan) || void 0 === op ? void 0 : op.start) && void 0 !== Op ? Op : cp.pos;
        if (!Ip.optionalReplacementSpan) {
          const pp = cp.state.doc.sliceString(0, cp.pos);
          for (; Sp > 0 && /[\w$]/.test(pp[Sp - 1]);) Sp--
        }
        return Ip.entries = Ip.entries.filter((pp => pp.kind !== Up().ScriptElementKind.warning)), {
          from: Sp,
          options: Ip.entries.map((Op => {
            var op, Ip, xp, Lp;
            const Yp = pp.languageService.getCompletionEntryDetails(ip, cp.pos, Op.name, {}, Op.source, {}, Op.data),
              Dp = null !== (op = null === (Ip = Op.replacementSpan) || void 0 === Ip ? void 0 : Ip.start) && void 0 !== op ? op : Sp,
              Ap = Op.replacementSpan ? Op.replacementSpan.start + Op.replacementSpan.length : cp.pos,
              Pp = null !== (xp = Op.insertText) && void 0 !== xp ? xp : Op.name;
            return {
              label: Op.name,
              detail: null === Yp || void 0 === Yp ? void 0 : Yp.displayParts.map((pp => pp.text)).join(""),
              info: null === Yp || void 0 === Yp || null === (Lp = Yp.documentation) || void 0 === Lp ? void 0 : Lp.map((pp => pp.text)).join(""),
              apply: pp => {
                pp.dispatch({
                  changes: {
                    from: Dp,
                    to: Ap,
                    insert: Pp
                  },
                  selection: {
                    anchor: Dp + Pp.length
                  }
                })
              }
            }
          }))
        }
      }
    }

    function ai(pp) {
      return ip => {
        const cp = document.createElement("div");
        cp.className = "CodeEditorTooltip";
        let Op = !1;
        return queueMicrotask((() => {
          Op || (xp.render((0, mi.jsx)(Pp.e, {
            text: pp
          }), cp), ip.requestMeasure())
        })), {
          dom: cp,
          destroy() {
            Op = !0, queueMicrotask((() => {
              xp.unmountComponentAtNode(cp)
            }))
          }
        }
      }
    }

    function ni(pp, ip, cp) {
      return Op => {
        var op;
        if (!ip) return [];
        const Ip = null === (op = Op.selection.By[0]) || void 0 === op ? void 0 : op.head;
        if (void 0 === Ip) return [];
        const Sp = pp.languageService.getSignatureHelpItems(cp, Ip, {});
        if (!Sp || !Sp.items.length) return [];
        const xp = Sp.applicableSpan.start - Sp.items[0].prefixDisplayParts.map((pp => pp.text)).join("").length,
          Lp = Sp.applicableSpan.start,
          Yp = Op.doc.lineAt(Ip),
          Dp = Yp.from,
          Ap = Math.min(Yp.to, Ip);
        let Pp, Wp;
        return xp < Dp ? (Pp = Dp, Wp = Ap) : (Pp = xp, Wp = Lp), [{
          pos: Pp,
          end: Wp,
          above: !1,
          create: ai(Ci(Sp.items[0], Sp.argumentIndex))
        }]
      }
    }

    function Fi(pp, ip) {
      return (cp, Op, op) => {
        const Ip = pp.languageService.getQuickInfoAtPosition(ip, Op);
        if (!Ip) return [];
        const Sp = Ip.textSpan.start,
          xp = Ip.textSpan.start + Ip.textSpan.length;
        if (Op < Sp || Op >= xp) return [];
        if (Ip.kind === Up().ScriptElementKind.memberFunctionElement || Ip.kind === Up().ScriptElementKind.variableElement && "declare" === Ip.kindModifiers) {
          const pp = Ip.displayParts.findIndex((pp => "space" === pp.kind)); - 1 !== pp && (Ip.displayParts = Ip.displayParts.slice(pp));
          const ip = {
              prefixDisplayParts: [],
              parameters: [],
              suffixDisplayParts: [],
              documentation: []
            },
            cp = Ip.displayParts.findIndex((pp => "punctuation" === pp.kind && "(" === pp.text)); - 1 !== cp && (ip.prefixDisplayParts = Ip.displayParts.slice(0, cp + 1), Ip.displayParts = Ip.displayParts.slice(cp + 1));
          const Op = Ip.displayParts.findLastIndex((pp => "punctuation" === pp.kind && ")" === pp.text)); - 1 !== Op && (ip.suffixDisplayParts = Ip.displayParts.slice(Op), Ip.displayParts = Ip.displayParts.slice(0, Op));
          let op = 0,
            Lp = [];
          for (const Sp of Ip.displayParts)
            if (Ri.has(Sp.text) ? op++ : qi.has(Sp.text) && op--, "lineBreak" !== Sp.kind) {
              if ("space" === Sp.kind) {
                if (0 === Lp.length) continue;
                Lp.push({
                  kind: "space",
                  text: " "
                })
              } else Lp.push(Sp);
              0 === op && "," === Sp.text && (ip.parameters.push({
                displayParts: Lp
              }), Lp = [])
            } return Lp.length > 0 && ip.parameters.push({
            displayParts: Lp
          }), ip.documentation = Ip.documentation, [{
            pos: Sp,
            end: xp,
            above: !0,
            create: ai(Ci(ip))
          }]
        }
        const Lp = [];
        for (const pp of Ip.displayParts) Lp.push({
          str: pp.text,
          style: {
            color: Mi.text
          }
        });
        if (Ip.documentation) {
          Lp.push("\n\n");
          for (const pp of Ip.documentation) Lp.push({
            str: pp.text,
            style: {
              color: Mi.docs
            }
          })
        }
        return [{
          pos: Sp,
          end: xp,
          above: !0,
          create: ai(Lp)
        }]
      }
    }
    const gi = {
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
      semicolons: Up().SemicolonPreference.Insert
    };
    const Gi = Ip.h.define(),
      ri = {
        lineNumbers: !0,
        tabSize: 4
      };

    function Zi(pp) {
      let {
        isLobbyCode: ip,
        code: cp,
        onChange: xp,
        canEditCode: Pp,
        setTemporaryMessage: yp,
        close: mp,
        showTooltips: gp,
        lightMode: Gp,
        collabState: Zp,
        onRemoteDocChange: zp,
        files: sp,
        activePath: Kp,
        pluginName: ii,
        pluginFile: ci,
        pluginSource: oi,
        setActiveDocReplacer: Ii,
        showAiHints: xi,
        canAiChangeCode: Li = Pp
      } = pp;
      const [Yi, Di] = (0, Sp.useState)(null), Ai = null === Zp || void 0 === Zp ? void 0 : Zp.version, Pi = null === Zp || void 0 === Zp ? void 0 : Zp.clientID, Wi = (0, Sp.useRef)({
        isLobbyCode: ip,
        files: sp,
        code: cp,
        activePath: Kp
      }), yi = (0, Sp.useRef)(zp);
      yi.current = zp;
      const Ui = (0, Sp.useRef)(null),
        wi = (0, Sp.useRef)(Zp);
      wi.current = Zp;
      const vi = (0, Sp.useRef)(null),
        di = (0, Sp.useRef)(null),
        ei = (0, Sp.useRef)(null),
        ui = (0, Sp.useRef)(mp);
      ui.current = mp;
      const ji = (0, Sp.useRef)(cp);
      ji.current = cp;
      const Ri = (0, Sp.useRef)(oi);
      Ri.current = oi;
      const qi = function(pp, ip, cp, Op) {
        return cp ? `/plugin-preview/${cp}/${null!==Op&&void 0!==Op?Op:"index.ts"}` : pp ? Bi(null !== ip && void 0 !== ip ? ip : dp.k) : Ji
      }(ip, Kp, ii, ci);
      (0, Sp.useEffect)((() => {
        !async function() {
          const {
            isLobbyCode: pp,
            files: ip,
            code: cp,
            activePath: Op
          } = Wi.current, op = {
            allowJs: !0,
            checkJs: !1,
            noLib: !0,
            strict: !1,
            module: Up().ModuleKind.ESNext,
            moduleResolution: Up().ModuleResolutionKind.Bundler,
            target: Up().ScriptTarget.ES2015,
            paths: {
              "@bloxd": ["/node_modules/@bloxd/index.d.ts"],
              ...Object.fromEntries(Object.values(Hp.e).map((pp => [pp.specifier, [pp.typesVfsPath]])))
            }
          }, Ip = new Map, Sp = [];
          if (pp) {
            const pp = null !== ip && void 0 !== ip ? ip : {
              [dp.k]: cp || "\n"
            };
            for (const [ip, cp] of Object.entries(pp)) {
              const pp = Bi(ip);
              Ip.set(pp, cp || "\n"), Sp.push(pp)
            }
            const op = Bi(null !== Op && void 0 !== Op ? Op : dp.k);
            Ip.has(op) ? Ip.set(op, cp || "\n") : (Ip.set(op, cp || "\n"), Sp.push(op)), Ip.set("/node_modules/@bloxd/index.d.ts", Dp.default), Sp.push("/node_modules/@bloxd/index.d.ts");
            for (const ip of Object.values(Hp.e)) {
              Ip.set(ip.typesVfsPath, ip.types), Sp.push(ip.typesVfsPath);
              for (const [pp, cp] of Object.entries(ip.files)) {
                const Op = `/plugin-preview/${ip.name}/${pp}`;
                Ip.set(Op, cp || "\n"), Sp.push(Op)
              }
            }
          } else Ip.set(Ji, cp || "\n"), Sp.push(Ji);
          Ip.set("/globals.d.ts", pp ? Yp.d : Lp.b), Ip.set("/lib.d.ts", Ap.b), Sp.push("/globals.d.ts", "/lib.d.ts");
          const xp = Wp.d(Ip),
            Pp = Wp.e(xp, Sp, Up(), op);
          Di({
            Pw: Pp,
            fsMap: Ip
          })
        }()
      }), []), (0, Sp.useEffect)((() => {
        var pp, Op;
        if (!Yi || !ip) return;
        const {
          Pw: op,
          fsMap: Ip
        } = Yi;
        if (function(pp, ip, cp) {
            const Op = new Set;
            for (const [op, Ip] of Object.entries(cp)) {
              const cp = Bi(op);
              Op.add(cp);
              const Sp = Ip || "\n";
              ip.get(cp) !== Sp && (ip.set(cp, Sp), Ni(pp, cp, Sp))
            }
            for (const op of [...ip.keys()]) "/globals.d.ts" === op || "/lib.d.ts" === op || op.startsWith("/node_modules/") || op.startsWith("/plugin-preview/") || Op.has(op) || (ip.delete(op), pp.getSourceFile(op) && pp.deleteFile(op))
          }(op, Ip, null !== sp && void 0 !== sp ? sp : {
            [dp.k]: cp || "\n"
          }), ii) return void Ni(op, qi, oi || "\n");
        const Sp = null !== (pp = null === (Op = Ui.current) || void 0 === Op ? void 0 : Op.state.doc.toString()) && void 0 !== pp ? pp : cp;
        Ni(op, qi, Sp || "\n")
      }), [sp, Kp, Yi, ii, oi, qi, cp, ip]), (0, Sp.useEffect)((() => {
        if (!Yi) return;
        const {
          Pw: pp
        } = Yi;
        Ni(pp, qi, (ii ? oi : cp) || "\n")
      }), [cp, ii, oi, qi, Yi]), (0, Sp.useEffect)((() => () => {
        di.current && (di.current(), di.current = null)
      }), []), (0, Sp.useEffect)((() => (Ii(((pp, ip) => {
        if (ii) return !1;
        const cp = Ui.current,
          Op = wi.current,
          op = Op ? (0, ep.u)(Op.docKey) : null;
        if (!cp || !Op || vi.current !== Op.clientID || pp !== op) return !1;
        const Ip = cp.state.doc.toString();
        return Ip !== ip && cp.dispatch({
          changes: {
            from: 0,
            to: Ip.length,
            insert: ip
          }
        }), !0
      })), () => {
        Ui.current = null, vi.current = null, Ii(null)
      })), [Ii, ii]);
      const Mi = ip ? ii ? null : null !== Kp && void 0 !== Kp ? Kp : dp.k : Hi.b,
        Ci = Oi(Ui, Mi);
      Si(Ui, yp), (0, kp.f)("FormatCode", (() => {
        if (!Yi || !Ui.current || ii) return;
        const {
          Pw: pp,
          fsMap: cp
        } = Yi, Op = pp.getSourceFile(qi).getFullText();
        let op = 0;
        if (ip && sp)
          for (const [ip, xp] of Object.entries(sp)) ip !== (null !== Kp && void 0 !== Kp ? Kp : dp.k) && (op += xp.length);
        const Ip = function(pp, ip, cp, Op, op) {
          const Ip = pp.languageService.getFormattingEditsForDocument(Op, gi);
          if (!Ip.length) return Rp.d.error("Code is already formatted.");
          Ip.sort(((pp, ip) => ip.span.start - pp.span.start));
          let Sp = pp.getSourceFile(Op).getFullText();
          for (const xp of Ip) Sp = Sp.slice(0, xp.span.start) + xp.FL + Sp.slice(xp.span.start + xp.span.length);
          return Sp !== (cp ? (0, jp.j)(Sp, op) : (0, jp.i)(Sp)) ? Rp.d.error("Formatting the code will go beyond the character limit.") : Rp.d.value(Sp)
        }(pp, 0, ip, qi, op);
        if (Ip.isError()) return void yp({
          message: Ip.asError().message,
          type: "warning"
        });
        const Sp = Ip.getValue();
        Sp && (Ui.current.dispatch({
          changes: {
            from: 0,
            to: Op.length,
            insert: Sp
          },
          selection: {
            anchor: Sp.length
          }
        }), Ni(pp, qi, Sp), xp(Sp))
      }));
      const Ei = (0, Sp.useMemo)((() => {
        if (!Yi) return [];
        const {
          Pw: pp,
          fsMap: cp
        } = Yi;
        ! function(pp, ip, cp, Op) {
          if (pp.getSourceFile(cp)) return;
          const op = Op || "\n";
          ip.set(cp, op), pp.createFile(cp, op)
        }(pp, cp, qi, (ii ? Ri.current : ji.current) || "\n");
        const Sp = ip && Ti(ii ? null !== ci && void 0 !== ci ? ci : "index.ts" : Kp),
          xp = [(0, op.b)({
            jsx: !1,
            typescript: Sp
          }), Ip.g.highest(Ip.c.domEventHandlers({
            keydown: pp => "Escape" === pp.key ? (ui.current(), pp.stopPropagation(), !0) : (pp.stopPropagation(), !1)
          })), (0, Op.c)({
            override: [bi(pp, qi)]
          }), Cp.k.fromClass(class {
            constructor(pp) {
              this.view = pp, this.timeout = null, this.scheduleParse()
            }
            update(pp) {
              (pp.docChanged || pp.viewportChanged) && this.scheduleParse()
            }
            destroy() {
              null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }
            scheduleParse() {
              null === this.timeout && (this.timeout = setTimeout((() => {
                this.timeout = null;
                const pp = this.view.viewport.to;
                (0, Tp.ib)(this.view.state, pp) || (0, Tp.H)(this.view, pp, fp) || this.scheduleParse()
              }), bp))
            }
          }), ...Vp, Ip.c.lineWrapping, Ip.j.define({
            create: ni(pp, gp, qi),
            update(ip, cp) {
              const Op = cp.effects.some((pp => pp.is(Gi)));
              return cp.docChanged || cp.selection || Op ? (Ni(pp, qi, cp.state.doc.toString() || " "), ni(pp, gp, qi)(cp.state)) : ip
            },
            provide: pp => Ip.q.computeN([pp], (ip => ip.field(pp)))
          }), (0, Ip.p)(Fi(pp, qi)), (0, vp.c)(fi(ip, pp, qi)), Ip.m.fromClass(class {
            constructor(pp) {
              this.view = pp, this.searchPanel = null
            }
            update(pp) {
              const ip = pp.view.dom.querySelector(".cm-search");
              if (ip !== this.searchPanel) {
                if (this.searchPanel = ip, !this.searchPanel) return;
                this.searchPanel.addEventListener("keydown", (pp => {
                  "Escape" === pp.key && (0, wp.c)(this.view), pp.stopPropagation()
                }))
              }
            }
          })];
        xi && !ii && xp.push(ki(ip ? null !== Kp && void 0 !== Kp ? Kp : dp.k : Hi.b, Li));
        const Lp = wi.current;
        if (Lp && !ii) {
          xp.push(... function(pp, ip, cp, Op, op) {
            let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Sp = (0, ep.u)(cp),
              xp = Cp.k.fromClass(class {
                constructor(pp) {
                  this.view = pp, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subToken = lp.m.subscribe("codeCollab", (pp => {
                    pp.docKey === Sp && pp.type === ep.f.Updates && (pp.updates ? this.applyUpdates(pp.updates) : this.pull())
                  })), this.pull()
                }
                applyUpdates(pp) {
                  const ip = JSON.parse(pp).map((pp => ({
                    clientID: pp.clientID,
                    changes: Mp.ChangeSet.fromJSON(pp.changes)
                  })));
                  ip.length > 0 && (this.view.dispatch((0, qp.e)(this.view.state, ip)), op && op(this.view.state.doc.toString())), this.clearPushState(), this.push()
                }
                clearPushState() {
                  this.pushing = !1, this.pushTimeout && (clearTimeout(this.pushTimeout), this.pushTimeout = null), this.pushDelayTimeout && (clearTimeout(this.pushDelayTimeout), this.pushDelayTimeout = null)
                }
                update(pp) {
                  Ip && (pp.docChanged && this.push(), this.sendCursor())
                }
                push() {
                  const pp = (0, qp.g)(this.view.state);
                  if (this.pushing || !pp.length) return;
                  const ip = Date.now() - this.lastPushTime;
                  if (ip < Np) return void(this.pushDelayTimeout || (this.pushDelayTimeout = setTimeout((() => {
                    this.pushDelayTimeout = null, this.push()
                  }), Np - ip)));
                  this.pushing = !0, this.lastPushTime = Date.now(), this.pushTimeout = setTimeout((() => {
                    this.clearPushState(), this.push()
                  }), Jp);
                  const cp = (0, qp.d)(this.view.state),
                    op = pp.map((pp => ({
                      clientID: pp.clientID,
                      changes: pp.changes.toJSON()
                    }))),
                    Ip = JSON.stringify(op);
                  Ip.length <= ep.g ? Ep.gameBridge.send("sendCodeCollab", {
                    eI: ep.e.Push,
                    uI: Sp,
                    jI: cp,
                    RI: Ip
                  }) : (0, Qp.postJsonWithMetricsCookiesAndJsonResponse)(`${Op.gsUrl}/code/collab-push`, Xp.m["collab-push"].toBuffer({
                    gameNameWithVariation: Op.gameNameWithVariation,
                    lobbyName: Op.lobbyName,
                    docKey: Sp,
                    version: cp,
                    updates: Ip
                  }), {
                    retries: 0
                  }).catch((pp => {
                    console.error("[CodeCollab] HTTP push failed", pp)
                  }))
                }
                pull() {
                  if (this.destroyed) return;
                  if (this.pulling) return void(this.pullPending = !0);
                  this.pulling = !0, this.pullPending = !1;
                  const pp = (0, qp.d)(this.view.state);
                  (0, Qp.postJsonWithMetricsCookiesAndJsonResponse)(`${Op.gsUrl}/code/collab-pull`, Xp.m["collab-pull"].toBuffer({
                    gameNameWithVariation: Op.gameNameWithVariation,
                    lobbyName: Op.lobbyName,
                    docKey: Sp,
                    fromVersion: pp
                  }), {
                    retries: 1
                  }).then((pp => {
                    this.destroyed || (pp.fullDoc ? lp.m.GA("codeCollabRejoin", {
                      docKey: Sp,
                      doc: pp.fullDoc,
                      version: pp.version
                    }) : this.applyUpdates(pp.updates))
                  })).catch((pp => {
                    console.error("[CodeCollab] Pull failed", pp)
                  })).finally((() => {
                    this.pulling = !1, this.pullPending && this.pull()
                  }))
                }
                sendCursor() {
                  const pp = Date.now();
                  if (pp - this.lastCursorSent < Bp) return void(this.cursorTimeout || (this.cursorTimeout = setTimeout((() => {
                    this.cursorTimeout = null, this.sendCursor()
                  }), Bp)));
                  this.lastCursorSent = pp;
                  const ip = this.view.state.selection.main;
                  Ep.gameBridge.send("sendCodeCollab", {
                    eI: ep.e.Cursor,
                    uI: Sp,
                    EI: ip.anchor,
                    XI: ip.head
                  })
                }
                destroy() {
                  this.destroyed = !0, lp.m.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
                }
              });
            return [(0, qp.c)({
              startVersion: pp,
              clientID: ip
            }), xp]
          }(Ai, Pi, Lp.docKey, Lp.httpConfig, (pp => {
            var ip;
            null === (ip = yi.current) || void 0 === ip || ip.call(yi, pp)
          }), Pp));
          const pp = function(pp, ip) {
            const cp = (0, ep.u)(pp);
            return {
              extensions: [rp],
              connect(pp) {
                if (ip) {
                  const cp = ip.map((pp => ap.of({
                    playerId: pp.playerId,
                    playerName: pp.playerName,
                    colour: pp.colour,
                    anchor: pp.anchor,
                    head: pp.head,
                    lastMoved: Date.now()
                  })));
                  cp.length > 0 && pp.dispatch({
                    effects: cp
                  })
                }
                const Op = lp.m.subscribe("codeCollab", (ip => {
                    if (ip.docKey === cp)
                      if (ip.type === ep.f.RemoteCursor) pp.dispatch({
                        effects: ap.of({
                          playerId: ip.playerId,
                          playerName: ip.playerName,
                          colour: ip.colour,
                          anchor: ip.anchor,
                          head: ip.head,
                          lastMoved: Date.now()
                        })
                      });
                      else if (ip.type === ep.f.Presence) {
                      const cp = JSON.parse(ip.peers),
                        Op = new Set(cp.map((pp => pp.playerId))),
                        op = pp.state.field(rp),
                        Ip = [];
                      for (const [pp] of op.cursors) Op.has(pp) || Ip.push(np.of(pp));
                      Ip.length > 0 && pp.dispatch({
                        effects: Ip
                      })
                    }
                  })),
                  op = setInterval((() => {
                    pp.dom.isConnected ? pp.dispatch({
                      effects: Fp.of(Date.now())
                    }) : clearInterval(op)
                  }), hp);
                return () => {
                  lp.m.unsubscribe(Op), clearInterval(op)
                }
              }
            }
          }(Lp.docKey, Lp.existingCursors);
          xp.push(...pp.extensions), ei.current = pp.connect
        } else ei.current = null;
        return xp
      }), [ip, Yi, gp, Ai, Pi, qi, Kp, ii, ci, Pp, xi, Li]);
      if (!Yi || !Zp && !ii) return (0, mi.jsx)("div", {
        className: "CodeEditorContent",
        children: (0, mi.jsx)(tp.c, {})
      });
      const Xi = ii ? `plugin-${ii}-${null!==ci&&void 0!==ci?ci:"index.ts"}` : Zp ? `collab-${Zp.clientID}` : `local-${ip}`;
      return (0, mi.jsx)(Ip.n, {
        value: ii ? null !== oi && void 0 !== oi ? oi : "" : cp,
        onChange: xp,
        extensions: Ei,
        className: "CodeEditorContent",
        theme: Gp ? ti : "dark",
        editable: Pp && !ii,
        basicSetup: ri,
        onCreateEditor: pp => {
          var ip;
          Ui.current = pp, vi.current = null !== (ip = null === Zp || void 0 === Zp ? void 0 : Zp.clientID) && void 0 !== ip ? ip : null, Ci(pp), di.current && di.current(), ei.current && (di.current = ei.current(pp))
        }
      }, Xi)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);