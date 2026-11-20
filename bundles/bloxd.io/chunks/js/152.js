export const id = 152;
export const ids = [152];
export const modules = {
  8517: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ib,
      g: () => Db,
      i: () => xb
    });
    var Bb = hb(49),
      Ob = hb(4302),
      Gb = hb(1029),
      Ub = hb(1348),
      Lb = hb(16),
      Yb = hb(3206),
      Sb = hb(2104),
      ab = hb(1133),
      Hb = hb(8549),
      wb = hb(1811),
      Zb = hb(1857),
      Xb = hb(1095),
      pb = hb(13),
      ob = hb(1537),
      Ab = hb(958),
      lb = hb.n(Ab),
      Kb = hb(8520),
      Wb = hb(8522),
      Cb = hb(8529),
      db = hb(8442),
      rb = hb(8537),
      jb = (hb(8546), hb(1007));
    let nb = null;

    function Db() {
      return null !== nb
    }

    function xb() {
      return "pad" === nb
    }

    function zb() {
      return "inGame" === pb.d.get("gameState") && !(0, ob.q)()
    }

    function gb(bb) {
      return (0, Wb.q)(bb, ab.q, Wb.d, Wb.h, Wb.i)
    }
    const ib = (0, Bb.memo)((function() {
      const {
        t: bb
      } = (0, Xb.K)(), {
        userContext: ub
      } = (0, Gb.d)(), [hb, pb] = (0, Bb.useState)(null), [Ab, Db] = (0, Bb.useState)(null), xb = (0, Bb.useRef)(null), ib = (0, Bb.useCallback)((bb => {
        xb.current = bb, Db(bb)
      }), []), vb = (0, Bb.useRef)(0), tb = (0, Bb.useRef)(null), Jb = (0, Bb.useRef)({
        x: 0,
        y: 0
      }), [eb, Nb] = (0, Bb.useState)(0), sb = (0, Bb.useMemo)((() => function(bb) {
        const ub = [];
        for (let Bb = 0; Bb < ab.q; Bb++) {
          var hb;
          ub.push(null !== (hb = bb[Bb]) && void 0 !== hb ? hb : null)
        }
        return ub
      }((0, Hb.d)(ub.getPlayerCosmetics().emote))), [ub, eb]);
      (0, Zb.d)("cosmeticsUpdated", (bb => {
        bb.some((bb => bb.local && "emote" === bb.tB)) && Nb((bb => bb + 1))
      }));
      const Mb = (0, Bb.useRef)(!1),
        mb = (0, Bb.useCallback)((function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === bb && (0, Cb.g)(), Mb.current = ub, Jb.current = {
            x: 0,
            y: 0
          }, ib(null), pb(bb)
        }), [ib]),
        Ib = (0, Bb.useCallback)((() => {
          pb(null), ib(null), Jb.current = {
            x: 0,
            y: 0
          }
        }), [ib]),
        Pb = (0, Bb.useCallback)((bb => {
          if (Date.now() < vb.current) return;
          const ub = (0, Sb.e)(bb),
            hb = !!ub.holdUntilMove,
            Bb = hb ? 600 : Math.ceil(1e3 * ub.animation.animation_length / Sb.b) + 200;
          vb.current = Date.now() + Bb, tb.current = bb, wb.gameBridge.send("playEmote", bb), wb.gameBridge.send("applyTemporaryThirdPerson", hb ? {} : {
            durationMs: Bb
          })
        }), []);
      (0, Ub.h)("requestToggleEmoteWheel", (() => {
        null === hb ? zb() && mb("click") : Ib()
      })), (0, Ub.h)("requestEmoteWheelHoldOpen", (() => {
        null === hb && zb() && mb((0, Kb.c)() ? "hold" : "click")
      })), (0, Ub.h)("requestEmoteWheelPadOpen", (bb => {
        null !== hb || !zb() || (0, db.c)() || (0, rb.s)() || mb("pad", bb)
      })), (0, Ub.h)("requestEmoteRepeatLast", (() => {
        if (null !== hb || !zb() || (0, db.c)() || (0, rb.s)()) return;
        const bb = tb.current;
        null !== bb && sb.includes(bb) ? Pb(bb) : mb("pad", !0)
      }));
      const qb = () => {
        const bb = xb.current,
          ub = null !== bb ? sb[bb] : null;
        null !== ub && "pad" === hb && Date.now() < vb.current || (Ib(), null !== ub && Pb(ub))
      };
      (0, Ub.h)("emoteWheelPadAim", (bb => {
        if ("pad" !== hb) return;
        const ub = (0, Wb.z)(bb, ab.q, xb.current);
        ib(null !== ub && null !== sb[ub] ? ub : null)
      })), (0, Ub.h)("requestEmoteWheelPadCommit", (bb => {
        "pad" !== hb || bb && Mb.current || qb()
      })), (0, Ub.h)("appManagerUpdated|activeInputDevice", (bb => {
        null !== hb && "pad" === hb !== ("gamepad" === bb) && Ib()
      })), (0, Bb.useLayoutEffect)((() => (nb = hb, (0, Yb.z)("emoteWheel", "pad" === hb), Lb.i.vp(Yb.q), () => {
        nb = null, (0, Yb.z)("emoteWheel", !1), Lb.i.vp(Yb.q)
      })), [hb]), (0, Ub.h)("requestEmoteWheelHoldRelease", (() => {
        "hold" === hb && qb()
      })), (0, Ub.h)("requestEmoteWheelClose", (() => {
        null !== hb && Ib()
      })), (0, Ub.h)("appManagerUpdated|gameState", (bb => {
        "inGame" !== bb && Ib()
      }));
      const Eb = () => {
        (0, ob.q)() && Ib()
      };
      if ((0, Ub.h)("appManagerUpdated|openEverythingMenuName", Eb), (0, Ub.h)("appManagerUpdated|openInGameMenuName", Eb), (0, Ub.h)("pointerLockUpdate", (bb => {
          bb || "hold" !== hb || Ib()
        })), (0, Bb.useEffect)((() => {
          if (null === hb) return;
          const bb = bb => {
            "Escape" === bb.key && (bb.stopImmediatePropagation(), bb.preventDefault(), Ib())
          };
          return document.addEventListener("keydown", bb, !0), () => {
            document.removeEventListener("keydown", bb, !0)
          }
        }), [hb, Ib]), (0, Ob.c)(!0, "click" === hb, "EmoteWheelOverlay"), (0, Bb.useEffect)((() => {
          if ("hold" === hb) return wb.gameBridge.send("holdEmoteWheel", !0), () => {
            wb.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [hb]), (0, Bb.useEffect)((() => {
          if ("hold" !== hb) return;
          const bb = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            ub = Wb.p * bb,
            Bb = Wb.l * bb,
            Ob = bb => {
              let hb = Jb.current.x + bb.movementX,
                Ob = Jb.current.y + bb.movementY;
              const Gb = Math.hypot(hb, Ob);
              if (Gb > ub) {
                const bb = ub / Gb;
                hb *= bb, Ob *= bb
              }
              Jb.current = {
                x: hb,
                y: Ob
              }, ib(function(bb, ub, hb, Bb) {
                if (Math.hypot(bb, ub) < hb) return null;
                const Ob = (0, Wb.s)(bb, ub, ab.q);
                return null === Bb[Ob] ? null : Ob
              }(hb, Ob, Bb, sb))
            };
          return document.addEventListener("mousemove", Ob), () => {
            document.removeEventListener("mousemove", Ob)
          }
        }), [hb, sb, ib]), null === hb) return null;
      const yb = "hold" === hb || "pad" === hb,
        Vb = null !== Ab ? sb[Ab] : null,
        Fb = null !== Vb ? (0, Sb.e)(Vb).displayName : bb("emotes:pickEmote");
      return (0, jb.jsx)("div", {
        className: lb()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === hb
        }),
        onMouseDown: bb => {
          bb.target === bb.currentTarget && Ib()
        },
        children: (0, jb.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Wb.p + "rem",
            height: 2 * Wb.p + "rem"
          },
          children: [(0, jb.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Wb.j} ${Wb.j}`,
            children: [sb.map(((ub, hb) => {
              const Bb = null !== ub,
                Ob = yb && hb === Ab;
              return (0, jb.jsx)("path", {
                d: gb(hb),
                className: lb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Ob,
                  EmoteWheelWedgeDisabled: !Bb
                }),
                onClick: bb => {
                  bb.stopPropagation(), null !== ub && (bb => {
                    Ib(), Pb(bb)
                  })(ub)
                },
                "aria-label": null !== ub ? (0, Sb.e)(ub).displayName : bb("emotes:emptySlot")
              }, hb)
            })), (0, jb.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Wb.d,
              cy: Wb.d,
              r: Wb.i
            }), (0, jb.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Wb.d,
              cy: Wb.d,
              r: Wb.h
            }), yb && null !== Ab && (0, jb.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: gb(Ab)
            })]
          }), sb.map(((bb, ub) => {
            const hb = null !== bb,
              Bb = yb && ub === Ab,
              Ob = (0, Wb.u)(ub, ab.q),
              Gb = Wb.b * Math.cos(Ob),
              Ub = Wb.b * Math.sin(Ob);
            return (0, jb.jsx)("div", {
              className: lb()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Bb,
                EmoteWheelSlotIconDisabled: !hb
              }),
              style: {
                left: `calc(50% + ${Gb}rem)`,
                top: `calc(50% + ${Ub}rem)`,
                backgroundImage: hb ? `url(/textures/charSkins/previews/emote_${bb}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, ub)
          })), (0, jb.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Fb
          })]
        })
      })
    }))
  },
  8502: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      c: () => Xb,
      d: () => pb,
      f: () => Zb,
      i: () => wb
    });
    var Bb = hb(49),
      Ob = hb(8511),
      Gb = hb(16),
      Ub = hb(1811),
      Lb = hb(29),
      Yb = hb(1158),
      Sb = hb(1836);
    const ab = 50;
    const Hb = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = bb => {
          if (0 === this.listeners.size) {
            var ub, hb;
            this.state = {
              ...this.state,
              channel: null !== (ub = null === (hb = Sb.b.get("chatChannels")) || void 0 === hb ? void 0 : hb[0]) && void 0 !== ub ? ub : null
            };
            const bb = Gb.i.subscribe("reportPlayer", (bb => {
              let {
                playerEId: ub
              } = bb;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, ub]
              })
            }));
            this.stopListening = [Ub.gameBridge.subscribe("chatReceived", (bb => {
              let {
                serverChatMsgId: ub,
                content: hb,
                author: Bb
              } = bb;
              this.addMessage(ub, hb, Bb)
            })), () => {
              Gb.i.unsubscribe(bb)
            }, Sb.b.subscribe("chatChannels", (bb => {
              var ub;
              this.setState({
                ...this.state,
                channel: null !== (ub = null === bb || void 0 === bb ? void 0 : bb[0]) && void 0 !== ub ? ub : null
              })
            }))]
          }
          return this.listeners.add(bb), () => {
            if (this.listeners.delete(bb), 0 === this.listeners.size) {
              for (const bb of this.stopListening) bb();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Bb = {
          serverChatMsgId: bb,
          content: ub,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: hb
        };
        this.setState({
          ...this.state,
          messages: [Bb, ...this.state.messages].slice(0, Ob.g)
        })
      }
      selectNextChannel() {
        const bb = Sb.b.get("chatChannels");
        if (bb) {
          const ub = bb.findIndex((bb => {
            var ub;
            return bb.channelName === (null === (ub = this.state.channel) || void 0 === ub ? void 0 : ub.channelName)
          }));
          this.setState({
            ...this.state,
            channel: bb[(ub + 1) % bb.length]
          })
        }
      }
      setState(bb) {
        this.state = bb;
        for (const ub of this.listeners) ub()
      }
    };

    function wb() {
      const [bb, ub] = (0, Bb.useState)(Hb.getState);
      return (0, Bb.useEffect)((() => {
        const bb = Hb.subscribe((() => {
          ub(Hb.getState())
        }));
        return ub(Hb.getState()), bb
      }), []), bb
    }

    function Zb(bb) {
      var ub, hb;
      if (bb.startsWith("/report")) {
        var Bb;
        const ub = null !== (Bb = bb.replace("/report", "").trim().split(" ")[0]) && void 0 !== Bb ? Bb : "";
        if ("" === ub) return void Hb.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const hb = Ub.gameBridge.latest("players"),
          Ob = Ub.gameBridge.latest("hiddenPlayerNames"),
          Lb = bb => {
            var Bb, Gb;
            const Ub = null !== (Bb = null === (Gb = hb.byId[bb]) || void 0 === Gb ? void 0 : Gb.name) && void 0 !== Bb ? Bb : null;
            return null !== Ub && (Ub === ub || (0, Yb.d)(Ub, Ob) === ub)
          };
        if (null !== hb.localId && Lb(hb.localId)) return void Hb.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const bb of hb.ids)
          if (Lb(bb)) return Gb.i.vp("OpenReportMenu", {
            playerEId: bb,
            playerName: hb.byId[bb].name,
            XS: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Hb.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      Ub.gameBridge.send("sendChatMessage", {
          XS: bb,
          channelName: null !== (ub = null === (hb = Hb.getState().channel) || void 0 === hb ? void 0 : hb.channelName) && void 0 !== ub ? ub : null
        }),
        function(bb) {
          var ub;
          const hb = null !== (ub = Lb.j.getItem("recentlySentChatMsgs")) && void 0 !== ub ? ub : [];
          hb.push(bb), hb.length > ab && hb.shift();
          Lb.j.setItem("recentlySentChatMsgs", hb)
        }(bb)
    }

    function Xb() {
      var bb;
      return null !== (bb = Lb.j.getItem("recentlySentChatMsgs")) && void 0 !== bb ? bb : []
    }

    function pb(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Bb = null !== (ub = Lb.j.getItem("recentlySentChatMsgs")) && void 0 !== ub ? ub : [],
        Ob = Bb.length + 1,
        Gb = hb ? (bb % Ob + Ob) % Ob : Math.min(Bb.length, Math.max(0, bb));
      return {
        stepsBack: Gb,
        text: 0 === Gb ? "" : Bb[Bb.length - Gb]
      }
    }
  },
  8463: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub,
      g: () => Gb
    });
    var Bb = hb(1881);
    const Ob = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Gb = bb => "string" === typeof bb.icon && "" !== bb.icon && "string" === typeof bb.keycode && Ob.test(bb.keycode),
      Ub = bb => "Space" === bb ? "_" : Bb.l[bb]
  },
  8520: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob
    });
    var Bb = hb(13);

    function Ob() {
      return !Bb.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8615: (bb, ub, hb) => {
    function Bb(bb) {
      return {
        x: (bb.left + bb.right) / 2,
        y: (bb.top + bb.bottom) / 2
      }
    }

    function Ob(bb) {
      return 0 === bb.length ? null : bb.reduce(((bb, ub) => ({
        left: Math.min(bb.left, ub.left),
        top: Math.min(bb.top, ub.top),
        right: Math.max(bb.right, ub.right),
        bottom: Math.max(bb.bottom, ub.bottom)
      })))
    }

    function Gb(bb, ub) {
      const hb = Math.max(0, (ub - (bb.right - bb.left)) / 2),
        Bb = Math.max(0, (ub - (bb.bottom - bb.top)) / 2);
      return {
        left: bb.left - hb,
        top: bb.top - Bb,
        right: bb.right + hb,
        bottom: bb.bottom + Bb
      }
    }

    function Ub(bb, ub) {
      return ub.x >= bb.left && ub.x <= bb.right && ub.y >= bb.top && ub.y <= bb.bottom
    }

    function Lb(bb, ub, hb) {
      let Ob = null,
        Lb = 1 / 0;
      for (const {
          id: Bb,
          box: Gb
        }
        of ub) {
        const ub = (Gb.right - Gb.left) * (Gb.bottom - Gb.top);
        Ub(Gb, bb) && ub < Lb && (Lb = ub, Ob = Bb)
      }
      if (null !== Ob) return Ob;
      let Yb = 1 / 0;
      for (const {
          id: Sb,
          box: ab
        }
        of ub) {
        if (!Ub(Gb(ab, hb), bb)) continue;
        const ub = Bb(ab),
          Lb = Math.hypot(bb.x - ub.x, bb.y - ub.y);
        Lb < Yb && (Yb = Lb, Ob = Sb)
      }
      return Ob
    }

    function Yb(bb, ub, hb) {
      return {
        left: hb.left,
        top: hb.top,
        right: bb - hb.right,
        bottom: ub - hb.bottom
      }
    }

    function Sb(bb, ub, hb, Bb) {
      const Ob = (bb, ub, hb) => Math.max(Math.min(ub, 0), Math.min(Math.max(hb, 0), bb));
      return {
        x: Ob(ub, Bb.left - bb.left, Bb.right - bb.right),
        y: Ob(hb, Bb.top - bb.top, Bb.bottom - bb.bottom)
      }
    }

    function ab(bb, ub, hb, Bb, Ob) {
      const Gb = bb.dx * Bb + ub,
        Ub = bb.dy * Ob + hb,
        Lb = bb => Math.max(-1, Math.min(1, bb));
      return {
        dx: Lb(Gb / Bb),
        dy: Lb(Ub / Ob)
      }
    }

    function Hb(bb, ub, hb, Bb) {
      return ub <= 0 || hb <= 0 ? 1 : Math.max(.05, Math.min(1, bb / ub, Bb / hb))
    }

    function wb(bb, ub, hb) {
      return Math.min(bb.right, ub.right) - Math.max(bb.left, ub.left) > hb && Math.min(bb.bottom, ub.bottom) - Math.max(bb.top, ub.top) > hb
    }

    function Zb(bb, ub) {
      const hb = (bb, ub, hb, Bb) => ub - bb > Bb - hb ? hb - bb > ub - Bb ? Bb - ub : hb - bb : bb < hb ? hb - bb : ub > Bb ? Bb - ub : 0;
      return {
        x: hb(bb.left, bb.right, ub.left, ub.right),
        y: hb(bb.top, bb.bottom, ub.top, ub.bottom)
      }
    }

    function Xb(bb, ub) {
      let {
        avoid: hb = null,
        bounds: Bb = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Ob = 0, Gb = 1 / 0;
      return bb.forEach(((bb, Ub) => {
        const Lb = ub.filter((ub => wb(bb, ub, 0))).length,
          Yb = null !== Bb && (bb.left < Bb.left || bb.top < Bb.top || bb.right > Bb.right || bb.bottom > Bb.bottom),
          Sb = Lb + (hb && wb(bb, hb, 0) ? 1e3 : 0) + (Yb ? 1e6 : 0);
        Sb < Gb && (Ob = Ub, Gb = Sb)
      })), Ob
    }
    hb.d(ub, {
      A: () => Ob,
      b: () => Bb,
      c: () => Ub,
      f: () => wb,
      i: () => Sb,
      j: () => Gb,
      l: () => Xb,
      n: () => ab,
      o: () => Lb,
      r: () => Hb,
      u: () => Yb,
      w: () => Zb
    })
  },
  8522: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      d: () => Lb,
      h: () => Sb,
      i: () => Yb,
      j: () => Ub,
      l: () => Ob,
      p: () => Bb,
      q: () => Xb,
      s: () => Hb,
      u: () => ab,
      v: () => wb,
      z: () => Zb
    });
    const Bb = 14,
      Ob = 6,
      Gb = (Bb + Ob) / 2,
      Ub = 200,
      Lb = Ub / 2,
      Yb = Ub / 2 - 1,
      Sb = Ob / Bb * (Ub / 2),
      ab = (bb, ub) => -Math.PI / 2 + 2 * bb * Math.PI / ub,
      Hb = (bb, ub, hb) => {
        const Bb = 2 * Math.PI / hb;
        return (Math.round((Math.atan2(ub, bb) + Math.PI / 2) / Bb) % hb + hb) % hb
      },
      wb = .5,
      Zb = (bb, ub, hb) => Math.hypot(bb.x, bb.y) < wb ? hb : Hb(bb.x, bb.y, ub),
      Xb = (bb, ub, hb, Bb, Ob) => {
        const Gb = Math.PI / ub,
          Ub = ab(bb, ub),
          Lb = Ub - Gb,
          Yb = Ub + Gb,
          Sb = (bb, ub) => `${hb+bb*Math.cos(ub)} ${hb+bb*Math.sin(ub)}`;
        return [`M ${Sb(Bb,Lb)}`, `L ${Sb(Ob,Lb)}`, `A ${Ob} ${Ob} 0 0 1 ${Sb(Ob,Yb)}`, `L ${Sb(Bb,Yb)}`, `A ${Bb} ${Bb} 0 0 0 ${Sb(Bb,Lb)}`, "Z"].join(" ")
      }
  },
  8567: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(49),
      Ob = hb(8487),
      Gb = hb(2288);

    function Ub() {
      const bb = (0, Gb.f)("shopInfo"),
        [, ub] = (0, Bb.useReducer)((bb => bb + 1), 0);
      return (0, Gb.e)("shopInfo", ub), !(0, Ob.d)(bb)
    }
  },
  8460: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      g: () => Ub,
      h: () => Lb,
      k: () => Ob
    });
    var Bb = hb(8463);
    const Ob = bb => {
        const ub = [];
        bb.holdingGun && ub.push({
          kind: "reload"
        }), bb.touchscreenActionButton && ub.push({
          kind: "touchButton",
          label: bb.touchscreenActionButton
        });
        for (const Gb of null !== (hb = null === (Ob = bb.customButtons) || void 0 === Ob ? void 0 : Ob.filter(Bb.g)) && void 0 !== hb ? hb : []) {
          var hb, Ob;
          ub.push({
            kind: "customButton",
            id: Gb.id,
            icon: Gb.icon,
            description: Gb.description
          })
        }
        return ub
      },
      Gb = bb => bb.length >= 2,
      Ub = bb => "specialAction" !== bb.kind,
      Lb = (bb, ub) => {
        if (null === bb || null === ub) return bb === ub;
        if (bb.kind !== ub.kind) return !1;
        switch (bb.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return bb.action === ub.action;
          case "customButton":
            return bb.id === ub.id && bb.icon === ub.icon;
          case "touchButton":
            return bb.label === ub.label
        }
      }
  },
  8452: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ab,
      g: () => Zb,
      j: () => Hb,
      k: () => Xb
    });
    var Bb = hb(49),
      Ob = hb(16),
      Gb = hb(1348),
      Ub = hb(8460),
      Lb = hb(8467);
    let Yb = null;
    const Sb = () => Yb,
      ab = bb => {
        (0, Ub.h)(Yb, bb) || (Yb = bb, Ob.i.vp(Lb.f, Yb))
      },
      Hb = () => {
        const [bb, ub] = (0, Bb.useState)(Sb);
        return (0, Gb.h)(Lb.f, ub), bb
      };
    let wb = !1;
    const Zb = bb => {
        bb !== wb && (wb = bb, Ob.i.vp(Lb.i, bb))
      },
      Xb = () => {
        const [bb, ub] = (0, Bb.useState)(wb);
        return (0, Gb.h)(Lb.i, ub), bb
      }
  },
  8467: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      f: () => Bb,
      i: () => Ob,
      l: () => Lb,
      p: () => Yb,
      q: () => Sb,
      r: () => Ub
    });
    const Bb = "controllerActionHintChanged",
      Ob = "controllerActionWheelHintChanged",
      Gb = "controllerOpenChat",
      Ub = "controllerSneakToggledChanged",
      Lb = "controllerAttackLatchedChanged",
      Yb = "controllerDropStackHoldChanged",
      Sb = "controllerPickBlockHintChanged"
  },
  8417: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      d: () => Gb,
      g: () => Yb,
      h: () => Lb
    });
    var Bb = hb(1348),
      Ob = hb(1302);
    const Gb = "controllerInventoryCursorChanged",
      Ub = {
        showing: !1,
        kind: null,
        holding: !1,
        slotHasItem: !1,
        pressHints: null,
        hasCategories: !1,
        hasList: !1,
        openButtonCloses: !1,
        steppingSlots: !1,
        quickMoveToHotbar: !1,
        dropStackHold: null,
        hotbarPicking: !1
      },
      Lb = () => {
        var bb, ub;
        return (0, Bb.k)(Gb, null !== (bb = null === (ub = (0, Ob.h)()) || void 0 === ub ? void 0 : ub.getInventoryCursorState()) && void 0 !== bb ? bb : Ub)
      },
      Yb = () => {
        var bb, ub;
        return null !== (bb = null === (ub = (0, Ob.h)()) || void 0 === ub ? void 0 : ub.isPadSteppingSlots()) && void 0 !== bb && bb
      }
  },
  8410: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      e: () => Lb,
      i: () => Yb,
      j: () => Ub,
      n: () => Gb,
      r: () => ab,
      v: () => Hb
    });
    let Bb = null;
    const Ob = new Set,
      Gb = bb => (Bb = bb, () => {
        if (Bb === bb) {
          Bb = null;
          for (const bb of Ob) bb()
        }
      }),
      Ub = bb => (Ob.add(bb), () => {
        Ob.delete(bb)
      }),
      Lb = () => Bb,
      Yb = () => null !== Bb;
    let Sb = null;
    const ab = bb => {
        Sb = bb
      },
      Hb = () => {
        const bb = Sb;
        return Sb = null, bb
      },
      wb = (bb, ub) => {
        var hb, Bb;
        return null !== (hb = null !== (Bb = bb.find((bb => bb.element === ub))) && void 0 !== Bb ? Bb : bb.find((bb => bb.element.contains(ub)))) && void 0 !== hb ? hb : null
      }
  },
  8419: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      e: () => Ub
    });
    var Bb = hb(49);
    const Ob = new WeakMap,
      Gb = bb => {
        var ub, hb;
        return null !== (ub = null === (hb = Ob.get(bb)) || void 0 === hb ? void 0 : hb.current) && void 0 !== ub ? ub : null
      },
      Ub = (bb, ub) => {
        const hb = (0, Bb.useRef)(ub);
        hb.current = ub;
        const Gb = (0, Bb.useRef)(null);
        (0, Bb.useEffect)((() => {
          const ub = bb.current,
            Bb = Gb.current;
          ub !== Bb && (Bb && Ob.get(Bb) === hb && Ob.delete(Bb), Gb.current = ub, ub && Ob.set(ub, hb))
        })), (0, Bb.useEffect)((() => () => {
          const bb = Gb.current;
          bb && Ob.get(bb) === hb && Ob.delete(bb), Gb.current = null
        }), [])
      }
  },
  8551: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      i: () => Sb,
      m: () => Hb,
      p: () => ab,
      q: () => Yb,
      t: () => Zb
    });
    var Bb = hb(16),
      Ob = hb(1895),
      Gb = hb(1302),
      Ub = hb(1288);
    const Lb = bb => {
        var ub, hb;
        return (0, Ub.f)() && null !== (ub = null === (hb = (0, Gb.h)()) || void 0 === hb ? void 0 : hb.getGlyphForNoaAction(bb)) && void 0 !== ub ? ub : null
      },
      Yb = "controllerGlyph:",
      Sb = bb => {
        var ub, hb;
        return null !== (ub = null === (hb = (0, Gb.h)()) || void 0 === hb ? void 0 : hb.getPadGlyphIconName(bb)) && void 0 !== ub ? ub : `${Yb}xbox/${bb}`
      },
      ab = bb => bb.startsWith(Yb),
      Hb = bb => {
        var ub, hb;
        return ab(bb) && null !== (ub = null === (hb = (0, Gb.h)()) || void 0 === hb ? void 0 : hb.getPadGlyphIconUrl(bb)) && void 0 !== ub ? ub : null
      },
      wb = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Ub.d, Ob.e, Ob.d],
      Zb = bb => {
        const ub = wb.map((ub => Bb.i.subscribe(ub, bb)));
        return () => {
          for (const bb of ub) Bb.i.unsubscribe(bb)
        }
      }
  },
  8391: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      e: () => Bb
    });
    const Bb = "controllerOpenKeyboard",
      Ob = "controllerKeyboardVisible"
  },
  8444: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    let Bb = null;
    const Ob = function(bb) {
        const ub = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Bb = ub, () => {
          Bb === ub && (Bb = null)
        }
      },
      Gb = () => {
        var bb;
        return null !== (bb = Bb) && void 0 !== bb && bb.canCycle() ? Bb.cycle : null
      }
  },
  8537: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      i: () => Ub,
      k: () => Gb,
      l: () => Bb,
      o: () => Lb,
      s: () => Sb,
      t: () => ab
    });
    const Bb = "controllerActionWheelOpen",
      Ob = "controllerActionWheelAim",
      Gb = "controllerActionWheelCommit",
      Ub = "controllerActionWheelClose",
      Lb = "controllerActionWheelPick";
    let Yb = !1;
    const Sb = () => Yb,
      ab = bb => {
        Yb = bb
      }
  },
  8529: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      g: () => Ob
    });
    let Bb = 0;
    const Ob = () => {
        Bb++
      },
      Gb = () => Bb
  },
  8442: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      e: () => Ob,
      g: () => Ub,
      k: () => Gb,
      l: () => Bb,
      p: () => Sb
    });
    const Bb = "controllerQuickChatWheelOpen",
      Ob = "controllerQuickChatWheelAim",
      Gb = "controllerQuickChatWheelCommit",
      Ub = "controllerQuickChatWheelClose";
    let Lb = !1;
    const Yb = () => Lb,
      Sb = bb => {
        Lb = bb
      }
  },
  8613: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      f: () => Yb
    });
    var Bb = hb(13),
      Ob = hb(1218),
      Gb = hb(86);
    const Ub = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function Lb() {
      return (0, Gb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Yb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, ub) {
        var hb;
        if (!this.deps.enabled()) return;
        const Bb = Ub[bb],
          Ob = null !== ub && void 0 !== ub ? ub : Bb.pattern;
        if (null === Ob) return void console.warn("No vibration pattern for", bb);
        const Gb = this.deps.now();
        Gb - this.lastAnyAt < 40 && Bb.priority < this.playingPriority || Gb - (null !== (hb = this.lastAt.get(bb)) && void 0 !== hb ? hb : -1 / 0) < Bb.minGapMs || Gb < this.playingUntil && Bb.priority < this.playingPriority || (this.lastAt.set(bb, Gb), this.lastAnyAt = Gb, this.playingUntil = Gb + Ob.reduce(((bb, ub) => bb + ub), 0), this.playingPriority = Bb.priority, this.deps.vibrate(Ob))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Lb() && Bb.d.get("isTouchScreen") && Bb.d.get("clientEscMenuOptions").vibration && !(0, Ob.c)()
    })
  },
  8487: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(8493),
      Ob = hb(588),
      Gb = hb(115);

    function Ub(bb) {
      var ub, hb;
      if ((0, Ob.J)(bb)) return !0;
      const Ub = null !== (ub = null === (hb = Gb.n[Gb.s]) || void 0 === hb ? void 0 : hb.adConfig.showRewardedAds) && void 0 !== ub && ub;
      for (const Ob in bb) {
        const ub = bb[Ob];
        if (null !== ub && void 0 !== ub && ub.items)
          for (const bb in ub.items)
            if ((0, Bb.j)(ub.items[bb], Ub)) return !1
      }
      return !0
    }
  },
  8511: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      g: () => Bb
    });
    const Bb = 100;

    function Ob(bb) {
      let {
        translationKeys: ub = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return bb.map((bb => {
        var hb;
        return null !== (hb = function(bb, ub) {
          if ("string" === typeof bb) return bb;
          const hb = "str" in bb ? bb.str : bb;
          if ("string" === typeof hb) return hb;
          if ("entityName" in hb) return hb.entityName;
          if (ub && "translationKey" in hb) return `{${hb.translationKey}${void 0===hb.params?"":` ${JSON.stringify(hb.params)}`}}`;
          return null
        }(bb, ub)) && void 0 !== hb ? hb : " "
      })).join("")
    }
  },
  8549: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      d: () => Lb,
      g: () => Yb
    });
    var Bb = hb(2100),
      Ob = hb(1133),
      Gb = hb(2104);
    const Ub = ",";

    function Lb(bb) {
      if (!bb) return [];
      const ub = new Set,
        hb = [];
      for (const Bb of bb.split(Ub)) {
        const bb = Bb.trim();
        if ((0, Gb.g)(bb) && !ub.has(bb) && (ub.add(bb), hb.push(bb), hb.length >= Ob.q)) break
      }
      return hb
    }

    function Yb(bb) {
      const ub = new Set,
        hb = [];
      for (const Bb of bb)
        if ((0, Gb.g)(Bb) && !ub.has(Bb) && (ub.add(Bb), hb.push(Bb), hb.length >= Ob.q)) break;
      return hb.join(Ub)
    }

    function Sb() {
      return Yb(Gb.d)
    }

    function ab(bb) {
      var ub;
      return "emote" === bb ? Sb() : null !== (ub = Hb[bb][0]) && void 0 !== ub ? ub : wb[bb]
    }
    const Hb = Ob.y.reduce(((bb, ub) => {
        const hb = [];
        for (const Gb in Bb.c[ub]) {
          var Ob;
          "default" === (null === (Ob = (0, Bb.h)(ub, Gb)) || void 0 === Ob ? void 0 : Ob.cosmeticPack) && hb.push(Gb)
        }
        return bb[ub] = hb, bb
      }), {}),
      wb = Ob.y.reduce(((bb, ub) => (bb[ub] = Object.keys(Bb.c[ub])[0], bb)), {})
  },
  8493: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return !bb.hidden && (ub || !bb.isRewardedAd)
    }

    function Ob(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function Gb(bb, ub) {
      var hb;
      if ("dropdown" === (null === (hb = bb.userInput) || void 0 === hb ? void 0 : hb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const hb of bb.userInput.dropdownOptions)
          if (Ob(hb) === ub) return "object" === typeof hb ? hb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", ub)
      }
      return bb.cost
    }

    function Ub(bb, ub, hb) {
      var Bb;
      const Ob = null !== (Bb = hb.excludedPlayers) && void 0 !== Bb ? Bb : [ub];
      return bb.filter((bb => !Ob.includes(bb)))
    }
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob,
      g: () => Ub,
      j: () => Bb
    })
  },
  8546: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);