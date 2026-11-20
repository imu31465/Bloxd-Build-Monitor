export const id = 150;
export const ids = [150];
export const modules = {
  8352: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => db,
      e: () => Nb,
      i: () => Wb
    });
    var Ab = Ub(52),
      Mb = Ub(4225),
      Tb = Ub(1060),
      Eb = Ub(1345),
      Yb = Ub(22),
      Bb = Ub(3094),
      eb = Ub(2100),
      vb = Ub(1189),
      Lb = Ub(8383),
      Pb = Ub(1824),
      Xb = Ub(1858),
      jb = Ub(1134),
      Rb = Ub(19),
      kb = Ub(1548),
      yb = Ub(984),
      Zb = Ub.n(yb),
      Db = Ub(8356),
      zb = Ub(8365),
      xb = Ub(8370),
      ib = Ub(8272),
      fb = Ub(8378),
      mb = (Ub(8381), Ub(1023));
    let pb = null;

    function Nb() {
      return null !== pb
    }

    function Wb() {
      return "pad" === pb
    }

    function Hb() {
      return "inGame" === Rb.c.get("gameState") && !(0, kb.o)()
    }

    function Ib(bb) {
      return (0, zb.u)(bb, vb.m, zb.d, zb.g, zb.i)
    }
    const db = (0, Ab.memo)((function() {
      const {
        t: bb
      } = (0, jb.A)(), {
        userContext: ab
      } = (0, Tb.c)(), [Ub, Rb] = (0, Ab.useState)(null), [yb, Nb] = (0, Ab.useState)(null), Wb = (0, Ab.useRef)(null), db = (0, Ab.useCallback)((bb => {
        Wb.current = bb, Nb(bb)
      }), []), Fb = (0, Ab.useRef)(0), hb = (0, Ab.useRef)(null), Gb = (0, Ab.useRef)({
        x: 0,
        y: 0
      }), [Qb, qb] = (0, Ab.useState)(0), ub = (0, Ab.useMemo)((() => function(bb) {
        const ab = [];
        for (let Ab = 0; Ab < vb.m; Ab++) {
          var Ub;
          ab.push(null !== (Ub = bb[Ab]) && void 0 !== Ub ? Ub : null)
        }
        return ab
      }((0, Lb.f)(ab.getPlayerCosmetics().emote))), [ab, Qb]);
      (0, Xb.c)("cosmeticsUpdated", (bb => {
        bb.some((bb => bb.local && "emote" === bb.CU)) && qb((bb => bb + 1))
      }));
      const rb = (0, Ab.useRef)(!1),
        Kb = (0, Ab.useCallback)((function(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === bb && (0, xb.g)(), rb.current = ab, Gb.current = {
            x: 0,
            y: 0
          }, db(null), Rb(bb)
        }), [db]),
        ob = (0, Ab.useCallback)((() => {
          Rb(null), db(null), Gb.current = {
            x: 0,
            y: 0
          }
        }), [db]),
        lb = (0, Ab.useCallback)((bb => {
          if (Date.now() < Fb.current) return;
          const ab = (0, eb.j)(bb),
            Ub = !!ab.holdUntilMove,
            Ab = Ub ? 600 : Math.ceil(1e3 * ab.animation.animation_length / eb.e) + 200;
          Fb.current = Date.now() + Ab, hb.current = bb, Pb.gameBridge.send("playEmote", bb), Pb.gameBridge.send("applyTemporaryThirdPerson", Ub ? {} : {
            durationMs: Ab
          })
        }), []);
      (0, Eb.f)("requestToggleEmoteWheel", (() => {
        null === Ub ? Hb() && Kb("click") : ob()
      })), (0, Eb.f)("requestEmoteWheelHoldOpen", (() => {
        null === Ub && Hb() && Kb((0, Db.d)() ? "hold" : "click")
      })), (0, Eb.f)("requestEmoteWheelPadOpen", (bb => {
        null !== Ub || !Hb() || (0, ib.c)() || (0, fb.r)() || Kb("pad", bb)
      })), (0, Eb.f)("requestEmoteRepeatLast", (() => {
        if (null !== Ub || !Hb() || (0, ib.c)() || (0, fb.r)()) return;
        const bb = hb.current;
        null !== bb && ub.includes(bb) ? lb(bb) : Kb("pad", !0)
      }));
      const tb = () => {
        const bb = Wb.current,
          ab = null !== bb ? ub[bb] : null;
        null !== ab && "pad" === Ub && Date.now() < Fb.current || (ob(), null !== ab && lb(ab))
      };
      (0, Eb.f)("emoteWheelPadAim", (bb => {
        if ("pad" !== Ub) return;
        const ab = (0, zb.F)(bb, vb.m, Wb.current);
        db(null !== ab && null !== ub[ab] ? ab : null)
      })), (0, Eb.f)("requestEmoteWheelPadCommit", (bb => {
        "pad" !== Ub || bb && rb.current || tb()
      })), (0, Eb.f)("appManagerUpdated|activeInputDevice", (bb => {
        null !== Ub && "pad" === Ub !== ("gamepad" === bb) && ob()
      })), (0, Ab.useLayoutEffect)((() => (pb = Ub, (0, Bb.n)("emoteWheel", "pad" === Ub), Yb.m.IR(Bb.i), () => {
        pb = null, (0, Bb.n)("emoteWheel", !1), Yb.m.IR(Bb.i)
      })), [Ub]), (0, Eb.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Ub && tb()
      })), (0, Eb.f)("requestEmoteWheelClose", (() => {
        null !== Ub && ob()
      })), (0, Eb.f)("appManagerUpdated|gameState", (bb => {
        "inGame" !== bb && ob()
      }));
      const wb = () => {
        (0, kb.o)() && ob()
      };
      if ((0, Eb.f)("appManagerUpdated|openEverythingMenuName", wb), (0, Eb.f)("appManagerUpdated|openInGameMenuName", wb), (0, Eb.f)("pointerLockUpdate", (bb => {
          bb || "hold" !== Ub || ob()
        })), (0, Ab.useEffect)((() => {
          if (null === Ub) return;
          const bb = bb => {
            "Escape" === bb.key && (bb.stopImmediatePropagation(), bb.preventDefault(), ob())
          };
          return document.addEventListener("keydown", bb, !0), () => {
            document.removeEventListener("keydown", bb, !0)
          }
        }), [Ub, ob]), (0, Mb.b)(!0, "click" === Ub, "EmoteWheelOverlay"), (0, Ab.useEffect)((() => {
          if ("hold" === Ub) return Pb.gameBridge.send("holdEmoteWheel", !0), () => {
            Pb.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Ub]), (0, Ab.useEffect)((() => {
          if ("hold" !== Ub) return;
          const bb = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            ab = zb.s * bb,
            Ab = zb.p * bb,
            Mb = bb => {
              let Ub = Gb.current.x + bb.movementX,
                Mb = Gb.current.y + bb.movementY;
              const Tb = Math.hypot(Ub, Mb);
              if (Tb > ab) {
                const bb = ab / Tb;
                Ub *= bb, Mb *= bb
              }
              Gb.current = {
                x: Ub,
                y: Mb
              }, db(function(bb, ab, Ub, Ab) {
                if (Math.hypot(bb, ab) < Ub) return null;
                const Mb = (0, zb.x)(bb, ab, vb.m);
                return null === Ab[Mb] ? null : Mb
              }(Ub, Mb, Ab, ub))
            };
          return document.addEventListener("mousemove", Mb), () => {
            document.removeEventListener("mousemove", Mb)
          }
        }), [Ub, ub, db]), null === Ub) return null;
      const sb = "hold" === Ub || "pad" === Ub,
        gb = null !== yb ? ub[yb] : null,
        Cb = null !== gb ? (0, eb.j)(gb).displayName : bb("emotes:pickEmote");
      return (0, mb.jsx)("div", {
        className: Zb()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Ub
        }),
        onMouseDown: bb => {
          bb.target === bb.currentTarget && ob()
        },
        children: (0, mb.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * zb.s + "rem",
            height: 2 * zb.s + "rem"
          },
          children: [(0, mb.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${zb.l} ${zb.l}`,
            children: [ub.map(((ab, Ub) => {
              const Ab = null !== ab,
                Mb = sb && Ub === yb;
              return (0, mb.jsx)("path", {
                d: Ib(Ub),
                className: Zb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Mb,
                  EmoteWheelWedgeDisabled: !Ab
                }),
                onClick: bb => {
                  bb.stopPropagation(), null !== ab && (bb => {
                    ob(), lb(bb)
                  })(ab)
                },
                "aria-label": null !== ab ? (0, eb.j)(ab).displayName : bb("emotes:emptySlot")
              }, Ub)
            })), (0, mb.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: zb.d,
              cy: zb.d,
              r: zb.i
            }), (0, mb.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: zb.d,
              cy: zb.d,
              r: zb.g
            }), sb && null !== yb && (0, mb.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Ib(yb)
            })]
          }), ub.map(((bb, ab) => {
            const Ub = null !== bb,
              Ab = sb && ab === yb,
              Mb = (0, zb.z)(ab, vb.m),
              Tb = zb.c * Math.cos(Mb),
              Eb = zb.c * Math.sin(Mb);
            return (0, mb.jsx)("div", {
              className: Zb()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Ab,
                EmoteWheelSlotIconDisabled: !Ub
              }),
              style: {
                left: `calc(50% + ${Tb}rem)`,
                top: `calc(50% + ${Eb}rem)`,
                backgroundImage: Ub ? `url(/textures/charSkins/previews/emote_${bb}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, ab)
          })), (0, mb.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Cb
          })]
        })
      })
    }))
  },
  8340: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Lb,
      c: () => jb,
      f: () => Rb,
      g: () => Xb,
      i: () => Pb
    });
    var Ab = Ub(52),
      Mb = Ub(8343),
      Tb = Ub(22),
      Eb = Ub(1824),
      Yb = Ub(31),
      Bb = Ub(1203),
      eb = Ub(1844);
    const vb = 50;
    const Lb = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = bb => {
          if (0 === this.listeners.size) {
            var ab, Ub;
            this.state = {
              ...this.state,
              channel: null !== (ab = null === (Ub = eb.e.get("chatChannels")) || void 0 === Ub ? void 0 : Ub[0]) && void 0 !== ab ? ab : null
            };
            const bb = Tb.m.subscribe("reportPlayer", (bb => {
              let {
                playerEId: ab
              } = bb;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, ab]
              })
            }));
            this.stopListening = [Eb.gameBridge.subscribe("chatReceived", (bb => {
              let {
                serverChatMsgId: ab,
                content: Ub,
                author: Ab
              } = bb;
              this.addMessage(ab, Ub, Ab)
            })), () => {
              Tb.m.unsubscribe(bb)
            }, eb.e.subscribe("chatChannels", (bb => {
              var ab;
              this.setState({
                ...this.state,
                channel: null !== (ab = null === bb || void 0 === bb ? void 0 : bb[0]) && void 0 !== ab ? ab : null
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
      addMessage(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ab = {
          serverChatMsgId: bb,
          content: ab,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: Ub
        };
        this.setState({
          ...this.state,
          messages: [Ab, ...this.state.messages].slice(0, Mb.f)
        })
      }
      selectNextChannel() {
        const bb = eb.e.get("chatChannels");
        if (bb) {
          const ab = bb.findIndex((bb => {
            var ab;
            return bb.channelName === (null === (ab = this.state.channel) || void 0 === ab ? void 0 : ab.channelName)
          }));
          this.setState({
            ...this.state,
            channel: bb[(ab + 1) % bb.length]
          })
        }
      }
      setState(bb) {
        this.state = bb;
        for (const ab of this.listeners) ab()
      }
    };

    function Pb() {
      const [bb, ab] = (0, Ab.useState)(Lb.getState);
      return (0, Ab.useEffect)((() => {
        const bb = Lb.subscribe((() => {
          ab(Lb.getState())
        }));
        return ab(Lb.getState()), bb
      }), []), bb
    }

    function Xb(bb) {
      var ab, Ub;
      if (bb.startsWith("/report")) {
        var Ab;
        const ab = null !== (Ab = bb.replace("/report", "").trim().split(" ")[0]) && void 0 !== Ab ? Ab : "";
        if ("" === ab) return void Lb.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const Ub = Eb.gameBridge.latest("players"),
          Mb = Eb.gameBridge.latest("hiddenPlayerNames"),
          Yb = bb => {
            var Ab, Tb;
            const Eb = null !== (Ab = null === (Tb = Ub.byId[bb]) || void 0 === Tb ? void 0 : Tb.name) && void 0 !== Ab ? Ab : null;
            return null !== Eb && (Eb === ab || (0, Bb.b)(Eb, Mb) === ab)
          };
        if (null !== Ub.localId && Yb(Ub.localId)) return void Lb.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const bb of Ub.ids)
          if (Yb(bb)) return Tb.m.IR("OpenReportMenu", {
            playerEId: bb,
            playerName: Ub.byId[bb].name,
            fE: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Lb.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      Eb.gameBridge.send("sendChatMessage", {
          fE: bb,
          channelName: null !== (ab = null === (Ub = Lb.getState().channel) || void 0 === Ub ? void 0 : Ub.channelName) && void 0 !== ab ? ab : null
        }),
        function(bb) {
          var ab;
          const Ub = null !== (ab = Yb.f.getItem("recentlySentChatMsgs")) && void 0 !== ab ? ab : [];
          Ub.push(bb), Ub.length > vb && Ub.shift();
          Yb.f.setItem("recentlySentChatMsgs", Ub)
        }(bb)
    }

    function jb() {
      var bb;
      return null !== (bb = Yb.f.getItem("recentlySentChatMsgs")) && void 0 !== bb ? bb : []
    }

    function Rb(bb) {
      var ab;
      let Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Ab = null !== (ab = Yb.f.getItem("recentlySentChatMsgs")) && void 0 !== ab ? ab : [],
        Mb = Ab.length + 1,
        Tb = Ub ? (bb % Mb + Mb) % Mb : Math.min(Ab.length, Math.max(0, bb));
      return {
        stepsBack: Tb,
        text: 0 === Tb ? "" : Ab[Ab.length - Tb]
      }
    }
  },
  8304: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb,
      g: () => Tb
    });
    var Ab = Ub(1889);
    const Mb = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Tb = bb => "string" === typeof bb.icon && "" !== bb.icon && "string" === typeof bb.keycode && Mb.test(bb.keycode),
      Eb = bb => "Space" === bb ? "_" : Ab.l[bb]
  },
  8356: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(19);

    function Mb() {
      return !Ab.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8450: (bb, ab, Ub) => {
    function Ab(bb) {
      return {
        x: (bb.left + bb.right) / 2,
        y: (bb.top + bb.bottom) / 2
      }
    }

    function Mb(bb) {
      return 0 === bb.length ? null : bb.reduce(((bb, ab) => ({
        left: Math.min(bb.left, ab.left),
        top: Math.min(bb.top, ab.top),
        right: Math.max(bb.right, ab.right),
        bottom: Math.max(bb.bottom, ab.bottom)
      })))
    }

    function Tb(bb, ab) {
      const Ub = Math.max(0, (ab - (bb.right - bb.left)) / 2),
        Ab = Math.max(0, (ab - (bb.bottom - bb.top)) / 2);
      return {
        left: bb.left - Ub,
        top: bb.top - Ab,
        right: bb.right + Ub,
        bottom: bb.bottom + Ab
      }
    }

    function Eb(bb, ab) {
      return ab.x >= bb.left && ab.x <= bb.right && ab.y >= bb.top && ab.y <= bb.bottom
    }

    function Yb(bb, ab, Ub) {
      let Mb = null,
        Yb = 1 / 0;
      for (const {
          id: Ab,
          box: Tb
        }
        of ab) {
        const ab = (Tb.right - Tb.left) * (Tb.bottom - Tb.top);
        Eb(Tb, bb) && ab < Yb && (Yb = ab, Mb = Ab)
      }
      if (null !== Mb) return Mb;
      let Bb = 1 / 0;
      for (const {
          id: eb,
          box: vb
        }
        of ab) {
        if (!Eb(Tb(vb, Ub), bb)) continue;
        const ab = Ab(vb),
          Yb = Math.hypot(bb.x - ab.x, bb.y - ab.y);
        Yb < Bb && (Bb = Yb, Mb = eb)
      }
      return Mb
    }

    function Bb(bb, ab, Ub) {
      return {
        left: Ub.left,
        top: Ub.top,
        right: bb - Ub.right,
        bottom: ab - Ub.bottom
      }
    }

    function eb(bb, ab, Ub, Ab) {
      const Mb = (bb, ab, Ub) => Math.max(Math.min(ab, 0), Math.min(Math.max(Ub, 0), bb));
      return {
        x: Mb(ab, Ab.left - bb.left, Ab.right - bb.right),
        y: Mb(Ub, Ab.top - bb.top, Ab.bottom - bb.bottom)
      }
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.dx * Ab + ab,
        Eb = bb.dy * Mb + Ub,
        Yb = bb => Math.max(-1, Math.min(1, bb));
      return {
        dx: Yb(Tb / Ab),
        dy: Yb(Eb / Mb)
      }
    }

    function Lb(bb, ab, Ub, Ab) {
      return ab <= 0 || Ub <= 0 ? 1 : Math.max(.05, Math.min(1, bb / ab, Ab / Ub))
    }

    function Pb(bb, ab, Ub) {
      return Math.min(bb.right, ab.right) - Math.max(bb.left, ab.left) > Ub && Math.min(bb.bottom, ab.bottom) - Math.max(bb.top, ab.top) > Ub
    }

    function Xb(bb, ab) {
      const Ub = (bb, ab, Ub, Ab) => ab - bb > Ab - Ub ? Ub - bb > ab - Ab ? Ab - ab : Ub - bb : bb < Ub ? Ub - bb : ab > Ab ? Ab - ab : 0;
      return {
        x: Ub(bb.left, bb.right, ab.left, ab.right),
        y: Ub(bb.top, bb.bottom, ab.top, ab.bottom)
      }
    }

    function jb(bb, ab) {
      let {
        avoid: Ub = null,
        bounds: Ab = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Mb = 0, Tb = 1 / 0;
      return bb.forEach(((bb, Eb) => {
        const Yb = ab.filter((ab => Pb(bb, ab, 0))).length,
          Bb = null !== Ab && (bb.left < Ab.left || bb.top < Ab.top || bb.right > Ab.right || bb.bottom > Ab.bottom),
          eb = Yb + (Ub && Pb(bb, Ub, 0) ? 1e3 : 0) + (Bb ? 1e6 : 0);
        eb < Tb && (Mb = Eb, Tb = eb)
      })), Mb
    }
    Ub.d(ab, {
      b: () => Ab,
      c: () => Eb,
      e: () => Pb,
      h: () => eb,
      k: () => Tb,
      m: () => jb,
      o: () => vb,
      s: () => Yb,
      t: () => Lb,
      v: () => Bb,
      w: () => Xb,
      x: () => Mb
    })
  },
  8365: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => Pb,
      F: () => Xb,
      c: () => Tb,
      d: () => Yb,
      g: () => eb,
      i: () => Bb,
      l: () => Eb,
      p: () => Mb,
      s: () => Ab,
      u: () => jb,
      x: () => Lb,
      z: () => vb
    });
    const Ab = 14,
      Mb = 6,
      Tb = (Ab + Mb) / 2,
      Eb = 200,
      Yb = Eb / 2,
      Bb = Eb / 2 - 1,
      eb = Mb / Ab * (Eb / 2),
      vb = (bb, ab) => -Math.PI / 2 + 2 * bb * Math.PI / ab,
      Lb = (bb, ab, Ub) => {
        const Ab = 2 * Math.PI / Ub;
        return (Math.round((Math.atan2(ab, bb) + Math.PI / 2) / Ab) % Ub + Ub) % Ub
      },
      Pb = .5,
      Xb = (bb, ab, Ub) => Math.hypot(bb.x, bb.y) < Pb ? Ub : Lb(bb.x, bb.y, ab),
      jb = (bb, ab, Ub, Ab, Mb) => {
        const Tb = Math.PI / ab,
          Eb = vb(bb, ab),
          Yb = Eb - Tb,
          Bb = Eb + Tb,
          eb = (bb, ab) => `${Ub+bb*Math.cos(ab)} ${Ub+bb*Math.sin(ab)}`;
        return [`M ${eb(Ab,Yb)}`, `L ${eb(Mb,Yb)}`, `A ${Mb} ${Mb} 0 0 1 ${eb(Mb,Bb)}`, `L ${eb(Ab,Bb)}`, `A ${Ab} ${Ab} 0 0 0 ${eb(Ab,Yb)}`, "Z"].join(" ")
      }
  },
  8403: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(52),
      Mb = Ub(8326),
      Tb = Ub(2268);

    function Eb() {
      const bb = (0, Tb.h)("shopInfo"),
        [, ab] = (0, Ab.useReducer)((bb => bb + 1), 0);
      return (0, Tb.f)("shopInfo", ab), !(0, Mb.e)(bb)
    }
  },
  8298: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      e: () => Eb,
      f: () => Yb,
      h: () => Mb
    });
    var Ab = Ub(8304);
    const Mb = bb => {
        const ab = [];
        bb.holdingGun && ab.push({
          kind: "reload"
        }), bb.touchscreenActionButton && ab.push({
          kind: "touchButton",
          label: bb.touchscreenActionButton
        });
        for (const Tb of null !== (Ub = null === (Mb = bb.customButtons) || void 0 === Mb ? void 0 : Mb.filter(Ab.g)) && void 0 !== Ub ? Ub : []) {
          var Ub, Mb;
          ab.push({
            kind: "customButton",
            id: Tb.id,
            icon: Tb.icon,
            description: Tb.description
          })
        }
        return ab
      },
      Tb = bb => bb.length >= 2,
      Eb = bb => "specialAction" !== bb.kind,
      Yb = (bb, ab) => {
        if (null === bb || null === ab) return bb === ab;
        if (bb.kind !== ab.kind) return !1;
        switch (bb.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return bb.action === ab.action;
          case "customButton":
            return bb.id === ab.id && bb.icon === ab.icon;
          case "touchButton":
            return bb.label === ab.label
        }
      }
  },
  8293: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      e: () => Xb,
      f: () => Lb,
      h: () => jb
    });
    var Ab = Ub(52),
      Mb = Ub(22),
      Tb = Ub(1345),
      Eb = Ub(8298),
      Yb = Ub(8311);
    let Bb = null;
    const eb = () => Bb,
      vb = bb => {
        (0, Eb.f)(Bb, bb) || (Bb = bb, Mb.m.IR(Yb.c, Bb))
      },
      Lb = () => {
        const [bb, ab] = (0, Ab.useState)(eb);
        return (0, Tb.f)(Yb.c, ab), bb
      };
    let Pb = !1;
    const Xb = bb => {
        bb !== Pb && (Pb = bb, Mb.m.IR(Yb.f, bb))
      },
      jb = () => {
        const [bb, ab] = (0, Ab.useState)(Pb);
        return (0, Tb.f)(Yb.f, ab), bb
      }
  },
  8311: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      c: () => Ab,
      f: () => Mb,
      i: () => Yb,
      l: () => Bb,
      o: () => eb,
      r: () => Eb
    });
    const Ab = "controllerActionHintChanged",
      Mb = "controllerActionWheelHintChanged",
      Tb = "controllerOpenChat",
      Eb = "controllerSneakToggledChanged",
      Yb = "controllerAttackLatchedChanged",
      Bb = "controllerDropStackHoldChanged",
      eb = "controllerPickBlockHintChanged"
  },
  8241: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      g: () => Tb,
      i: () => Bb,
      j: () => Yb
    });
    var Ab = Ub(1345),
      Mb = Ub(1304);
    const Tb = "controllerInventoryCursorChanged",
      Eb = {
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
      Yb = () => {
        var bb, ab;
        return (0, Ab.i)(Tb, null !== (bb = null === (ab = (0, Mb.d)()) || void 0 === ab ? void 0 : ab.getInventoryCursorState()) && void 0 !== bb ? bb : Eb)
      },
      Bb = () => {
        var bb, ab;
        return null !== (bb = null === (ab = (0, Mb.d)()) || void 0 === ab ? void 0 : ab.isPadSteppingSlots()) && void 0 !== bb && bb
      }
  },
  8235: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Pb,
      d: () => Yb,
      h: () => Bb,
      i: () => Eb,
      l: () => Tb,
      m: () => vb,
      n: () => Lb
    });
    let Ab = null;
    const Mb = new Set,
      Tb = bb => (Ab = bb, () => {
        if (Ab === bb) {
          Ab = null;
          for (const bb of Mb) bb()
        }
      }),
      Eb = bb => (Mb.add(bb), () => {
        Mb.delete(bb)
      }),
      Yb = () => Ab,
      Bb = () => null !== Ab;
    let eb = null;
    const vb = bb => {
        eb = bb
      },
      Lb = () => {
        const bb = eb;
        return eb = null, bb
      },
      Pb = (bb, ab) => {
        var Ub, Ab;
        return null !== (Ub = null !== (Ab = bb.find((bb => bb.element === ab))) && void 0 !== Ab ? Ab : bb.find((bb => bb.element.contains(ab)))) && void 0 !== Ub ? Ub : null
      }
  },
  8250: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      f: () => Eb
    });
    var Ab = Ub(52);
    const Mb = new WeakMap,
      Tb = bb => {
        var ab, Ub;
        return null !== (ab = null === (Ub = Mb.get(bb)) || void 0 === Ub ? void 0 : Ub.current) && void 0 !== ab ? ab : null
      },
      Eb = (bb, ab) => {
        const Ub = (0, Ab.useRef)(ab);
        Ub.current = ab;
        const Tb = (0, Ab.useRef)(null);
        (0, Ab.useEffect)((() => {
          const ab = bb.current,
            Ab = Tb.current;
          ab !== Ab && (Ab && Mb.get(Ab) === Ub && Mb.delete(Ab), Tb.current = ab, ab && Mb.set(ab, Ub))
        })), (0, Ab.useEffect)((() => () => {
          const bb = Tb.current;
          bb && Mb.get(bb) === Ub && Mb.delete(bb), Tb.current = null
        }), [])
      }
  },
  8387: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => eb,
      i: () => Lb,
      l: () => vb,
      m: () => Bb,
      p: () => Xb
    });
    var Ab = Ub(22),
      Mb = Ub(1910),
      Tb = Ub(1304),
      Eb = Ub(1294);
    const Yb = bb => {
        var ab, Ub;
        return (0, Eb.d)() && null !== (ab = null === (Ub = (0, Tb.d)()) || void 0 === Ub ? void 0 : Ub.getGlyphForNoaAction(bb)) && void 0 !== ab ? ab : null
      },
      Bb = "controllerGlyph:",
      eb = bb => {
        var ab, Ub;
        return null !== (ab = null === (Ub = (0, Tb.d)()) || void 0 === Ub ? void 0 : Ub.getPadGlyphIconName(bb)) && void 0 !== ab ? ab : `${Bb}xbox/${bb}`
      },
      vb = bb => bb.startsWith(Bb),
      Lb = bb => {
        var ab, Ub;
        return vb(bb) && null !== (ab = null === (Ub = (0, Tb.d)()) || void 0 === Ub ? void 0 : Ub.getPadGlyphIconUrl(bb)) && void 0 !== ab ? ab : null
      },
      Pb = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Eb.c, Mb.h, Mb.d],
      Xb = bb => {
        const ab = Pb.map((ab => Ab.m.subscribe(ab, bb)));
        return () => {
          for (const bb of ab) Ab.m.unsubscribe(bb)
        }
      }
  },
  8227: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      e: () => Ab
    });
    const Ab = "controllerOpenKeyboard",
      Mb = "controllerKeyboardVisible"
  },
  8280: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      g: () => Mb
    });
    let Ab = null;
    const Mb = function(bb) {
        const ab = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ab = ab, () => {
          Ab === ab && (Ab = null)
        }
      },
      Tb = () => {
        var bb;
        return null !== (bb = Ab) && void 0 !== bb && bb.canCycle() ? Ab.cycle : null
      }
  },
  8378: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      e: () => Eb,
      h: () => Tb,
      k: () => Ab,
      n: () => Yb,
      r: () => eb,
      s: () => vb
    });
    const Ab = "controllerActionWheelOpen",
      Mb = "controllerActionWheelAim",
      Tb = "controllerActionWheelCommit",
      Eb = "controllerActionWheelClose",
      Yb = "controllerActionWheelPick";
    let Bb = !1;
    const eb = () => Bb,
      vb = bb => {
        Bb = bb
      }
  },
  8370: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Mb
    });
    let Ab = 0;
    const Mb = () => {
        Ab++
      },
      Tb = () => Ab
  },
  8272: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb,
      d: () => Mb,
      g: () => Eb,
      k: () => Tb,
      o: () => Ab,
      p: () => eb
    });
    const Ab = "controllerQuickChatWheelOpen",
      Mb = "controllerQuickChatWheelAim",
      Tb = "controllerQuickChatWheelCommit",
      Eb = "controllerQuickChatWheelClose";
    let Yb = !1;
    const Bb = () => Yb,
      eb = bb => {
        Yb = bb
      }
  },
  8441: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      f: () => Bb
    });
    var Ab = Ub(19),
      Mb = Ub(1242),
      Tb = Ub(101);
    const Eb = {
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

    function Yb() {
      return (0, Tb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Bb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, ab) {
        var Ub;
        if (!this.deps.enabled()) return;
        const Ab = Eb[bb],
          Mb = null !== ab && void 0 !== ab ? ab : Ab.pattern;
        if (null === Mb) return void console.warn("No vibration pattern for", bb);
        const Tb = this.deps.now();
        Tb - this.lastAnyAt < 40 && Ab.priority < this.playingPriority || Tb - (null !== (Ub = this.lastAt.get(bb)) && void 0 !== Ub ? Ub : -1 / 0) < Ab.minGapMs || Tb < this.playingUntil && Ab.priority < this.playingPriority || (this.lastAt.set(bb, Tb), this.lastAnyAt = Tb, this.playingUntil = Tb + Mb.reduce(((bb, ab) => bb + ab), 0), this.playingPriority = Ab.priority, this.deps.vibrate(Mb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Yb() && Ab.c.get("isTouchScreen") && Ab.c.get("clientEscMenuOptions").vibration && !(0, Mb.f)()
    })
  },
  8326: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(8334),
      Mb = Ub(591),
      Tb = Ub(137);

    function Eb(bb) {
      var ab, Ub;
      if ((0, Mb.I)(bb)) return !0;
      const Eb = null !== (ab = null === (Ub = Tb.l[Tb.p]) || void 0 === Ub ? void 0 : Ub.adConfig.showRewardedAds) && void 0 !== ab && ab;
      for (const Mb in bb) {
        const ab = bb[Mb];
        if (null !== ab && void 0 !== ab && ab.items)
          for (const bb in ab.items)
            if ((0, Ab.n)(ab.items[bb], Eb)) return !1
      }
      return !0
    }
  },
  8343: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Ab
    });
    const Ab = 100;

    function Mb(bb) {
      let {
        translationKeys: ab = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return bb.map((bb => {
        var Ub;
        return null !== (Ub = function(bb, ab) {
          if ("string" === typeof bb) return bb;
          const Ub = "str" in bb ? bb.str : bb;
          if ("string" === typeof Ub) return Ub;
          if ("entityName" in Ub) return Ub.entityName;
          if (ab && "translationKey" in Ub) return `{${Ub.translationKey}${void 0===Ub.params?"":` ${JSON.stringify(Ub.params)}`}}`;
          return null
        }(bb, ab)) && void 0 !== Ub ? Ub : " "
      })).join("")
    }
  },
  8383: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb,
      f: () => Yb,
      j: () => Bb
    });
    var Ab = Ub(2091),
      Mb = Ub(1189),
      Tb = Ub(2100);
    const Eb = ",";

    function Yb(bb) {
      if (!bb) return [];
      const ab = new Set,
        Ub = [];
      for (const Ab of bb.split(Eb)) {
        const bb = Ab.trim();
        if ((0, Tb.n)(bb) && !ab.has(bb) && (ab.add(bb), Ub.push(bb), Ub.length >= Mb.m)) break
      }
      return Ub
    }

    function Bb(bb) {
      const ab = new Set,
        Ub = [];
      for (const Ab of bb)
        if ((0, Tb.n)(Ab) && !ab.has(Ab) && (ab.add(Ab), Ub.push(Ab), Ub.length >= Mb.m)) break;
      return Ub.join(Eb)
    }

    function eb() {
      return Bb(Tb.f)
    }

    function vb(bb) {
      var ab;
      return "emote" === bb ? eb() : null !== (ab = Lb[bb][0]) && void 0 !== ab ? ab : Pb[bb]
    }
    const Lb = Mb.s.reduce(((bb, ab) => {
        const Ub = [];
        for (const Tb in Ab.f[ab]) {
          var Mb;
          "default" === (null === (Mb = (0, Ab.j)(ab, Tb)) || void 0 === Mb ? void 0 : Mb.cosmeticPack) && Ub.push(Tb)
        }
        return bb[ab] = Ub, bb
      }), {}),
      Pb = Mb.s.reduce(((bb, ab) => (bb[ab] = Object.keys(Ab.f[ab])[0], bb)), {})
  },
  8334: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return !bb.hidden && (ab || !bb.isRewardedAd)
    }

    function Mb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function Tb(bb, ab) {
      var Ub;
      if ("dropdown" === (null === (Ub = bb.userInput) || void 0 === Ub ? void 0 : Ub.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const Ub of bb.userInput.dropdownOptions)
          if (Mb(Ub) === ab) return "object" === typeof Ub ? Ub.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", ab)
      }
      return bb.cost
    }

    function Eb(bb, ab, Ub) {
      var Ab;
      const Mb = null !== (Ab = Ub.excludedPlayers) && void 0 !== Ab ? Ab : [ab];
      return bb.filter((bb => !Mb.includes(bb)))
    }
    Ub.d(ab, {
      c: () => Tb,
      g: () => Mb,
      j: () => Eb,
      n: () => Ab
    })
  },
  8381: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);