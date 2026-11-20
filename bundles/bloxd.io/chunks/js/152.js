export const id = 152;
export const ids = [152];
export const modules = {
  8750: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Zq,
      e: () => hq,
      i: () => nq
    });
    var Yq = gq(57),
      lq = gq(4367),
      Oq = gq(1101),
      mq = gq(1416),
      xq = gq(31),
      Aq = gq(3294),
      cq = gq(2189),
      uq = gq(1226),
      Bq = gq(8794),
      Wq = gq(1904),
      Nq = gq(1942),
      aq = gq(1183),
      Vq = gq(24),
      dq = gq(1622),
      jq = gq(1018),
      Hq = gq.n(jq),
      oq = gq(8755),
      Pq = gq(8764),
      Qq = gq(8773),
      yq = gq(8662),
      tq = gq(8780),
      rq = (gq(8787), gq(1070));
    let vq = null;

    function hq() {
      return null !== vq
    }

    function nq() {
      return "pad" === vq
    }

    function bq() {
      return "inGame" === Vq.b.get("gameState") && !(0, dq.p)()
    }

    function iq(qq) {
      return (0, Pq.s)(qq, uq.o, Pq.d, Pq.g, Pq.j)
    }
    const Zq = (0, Yq.memo)((function() {
      const {
        t: qq
      } = (0, aq.v)(), {
        userContext: Eq
      } = (0, Oq.c)(), [gq, Vq] = (0, Yq.useState)(null), [jq, hq] = (0, Yq.useState)(null), nq = (0, Yq.useRef)(null), Zq = (0, Yq.useCallback)((qq => {
        nq.current = qq, hq(qq)
      }), []), fq = (0, Yq.useRef)(0), Mq = (0, Yq.useRef)(null), Tq = (0, Yq.useRef)({
        x: 0,
        y: 0
      }), [zq, Sq] = (0, Yq.useState)(0), pq = (0, Yq.useMemo)((() => function(qq) {
        const Eq = [];
        for (let Yq = 0; Yq < uq.o; Yq++) {
          var gq;
          Eq.push(null !== (gq = qq[Yq]) && void 0 !== gq ? gq : null)
        }
        return Eq
      }((0, Bq.g)(Eq.getPlayerCosmetics().emote))), [Eq, zq]);
      (0, Nq.d)("cosmeticsUpdated", (qq => {
        qq.some((qq => qq.local && "emote" === qq.tY)) && Sq((qq => qq + 1))
      }));
      const Gq = (0, Yq.useRef)(!1),
        Lq = (0, Yq.useCallback)((function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === qq && (0, Qq.g)(), Gq.current = Eq, Tq.current = {
            x: 0,
            y: 0
          }, Zq(null), Vq(qq)
        }), [Zq]),
        Jq = (0, Yq.useCallback)((() => {
          Vq(null), Zq(null), Tq.current = {
            x: 0,
            y: 0
          }
        }), [Zq]),
        kq = (0, Yq.useCallback)((qq => {
          if (Date.now() < fq.current) return;
          const Eq = (0, cq.i)(qq),
            gq = !!Eq.holdUntilMove,
            Yq = gq ? 600 : Math.ceil(1e3 * Eq.animation.animation_length / cq.e) + 200;
          fq.current = Date.now() + Yq, Mq.current = qq, Wq.gameBridge.send("playEmote", qq), Wq.gameBridge.send("applyTemporaryThirdPerson", gq ? {} : {
            durationMs: Yq
          })
        }), []);
      (0, mq.f)("requestToggleEmoteWheel", (() => {
        null === gq ? bq() && Lq("click") : Jq()
      })), (0, mq.f)("requestEmoteWheelHoldOpen", (() => {
        null === gq && bq() && Lq((0, oq.e)() ? "hold" : "click")
      })), (0, mq.f)("requestEmoteWheelPadOpen", (qq => {
        null !== gq || !bq() || (0, yq.d)() || (0, tq.r)() || Lq("pad", qq)
      })), (0, mq.f)("requestEmoteRepeatLast", (() => {
        if (null !== gq || !bq() || (0, yq.d)() || (0, tq.r)()) return;
        const qq = Mq.current;
        null !== qq && pq.includes(qq) ? kq(qq) : Lq("pad", !0)
      }));
      const Rq = () => {
        const qq = nq.current,
          Eq = null !== qq ? pq[qq] : null;
        null !== Eq && "pad" === gq && Date.now() < fq.current || (Jq(), null !== Eq && kq(Eq))
      };
      (0, mq.f)("emoteWheelPadAim", (qq => {
        if ("pad" !== gq) return;
        const Eq = (0, Pq.C)(qq, uq.o, nq.current);
        Zq(null !== Eq && null !== pq[Eq] ? Eq : null)
      })), (0, mq.f)("requestEmoteWheelPadCommit", (qq => {
        "pad" !== gq || qq && Gq.current || Rq()
      })), (0, mq.f)("appManagerUpdated|activeInputDevice", (qq => {
        null !== gq && "pad" === gq !== ("gamepad" === qq) && Jq()
      })), (0, Yq.useLayoutEffect)((() => (vq = gq, (0, Aq.s)("emoteWheel", "pad" === gq), xq.i.TV(Aq.j), () => {
        vq = null, (0, Aq.s)("emoteWheel", !1), xq.i.TV(Aq.j)
      })), [gq]), (0, mq.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === gq && Rq()
      })), (0, mq.f)("requestEmoteWheelClose", (() => {
        null !== gq && Jq()
      })), (0, mq.f)("appManagerUpdated|gameState", (qq => {
        "inGame" !== qq && Jq()
      }));
      const Uq = () => {
        (0, dq.p)() && Jq()
      };
      if ((0, mq.f)("appManagerUpdated|openEverythingMenuName", Uq), (0, mq.f)("appManagerUpdated|openInGameMenuName", Uq), (0, mq.f)("pointerLockUpdate", (qq => {
          qq || "hold" !== gq || Jq()
        })), (0, Yq.useEffect)((() => {
          if (null === gq) return;
          const qq = qq => {
            "Escape" === qq.key && (qq.stopImmediatePropagation(), qq.preventDefault(), Jq())
          };
          return document.addEventListener("keydown", qq, !0), () => {
            document.removeEventListener("keydown", qq, !0)
          }
        }), [gq, Jq]), (0, lq.e)(!0, "click" === gq, "EmoteWheelOverlay"), (0, Yq.useEffect)((() => {
          if ("hold" === gq) return Wq.gameBridge.send("holdEmoteWheel", !0), () => {
            Wq.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [gq]), (0, Yq.useEffect)((() => {
          if ("hold" !== gq) return;
          const qq = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Eq = Pq.r * qq,
            Yq = Pq.o * qq,
            lq = qq => {
              let gq = Tq.current.x + qq.movementX,
                lq = Tq.current.y + qq.movementY;
              const Oq = Math.hypot(gq, lq);
              if (Oq > Eq) {
                const qq = Eq / Oq;
                gq *= qq, lq *= qq
              }
              Tq.current = {
                x: gq,
                y: lq
              }, Zq(function(qq, Eq, gq, Yq) {
                if (Math.hypot(qq, Eq) < gq) return null;
                const lq = (0, Pq.t)(qq, Eq, uq.o);
                return null === Yq[lq] ? null : lq
              }(gq, lq, Yq, pq))
            };
          return document.addEventListener("mousemove", lq), () => {
            document.removeEventListener("mousemove", lq)
          }
        }), [gq, pq, Zq]), null === gq) return null;
      const Fq = "hold" === gq || "pad" === gq,
        sq = null !== jq ? pq[jq] : null,
        Xq = null !== sq ? (0, cq.i)(sq).displayName : qq("emotes:pickEmote");
      return (0, rq.jsx)("div", {
        className: Hq()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === gq
        }),
        onMouseDown: qq => {
          qq.target === qq.currentTarget && Jq()
        },
        children: (0, rq.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Pq.r + "rem",
            height: 2 * Pq.r + "rem"
          },
          children: [(0, rq.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Pq.l} ${Pq.l}`,
            children: [pq.map(((Eq, gq) => {
              const Yq = null !== Eq,
                lq = Fq && gq === jq;
              return (0, rq.jsx)("path", {
                d: iq(gq),
                className: Hq()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: lq,
                  EmoteWheelWedgeDisabled: !Yq
                }),
                onClick: qq => {
                  qq.stopPropagation(), null !== Eq && (qq => {
                    Jq(), kq(qq)
                  })(Eq)
                },
                "aria-label": null !== Eq ? (0, cq.i)(Eq).displayName : qq("emotes:emptySlot")
              }, gq)
            })), (0, rq.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Pq.d,
              cy: Pq.d,
              r: Pq.j
            }), (0, rq.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Pq.d,
              cy: Pq.d,
              r: Pq.g
            }), Fq && null !== jq && (0, rq.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: iq(jq)
            })]
          }), pq.map(((qq, Eq) => {
            const gq = null !== qq,
              Yq = Fq && Eq === jq,
              lq = (0, Pq.w)(Eq, uq.o),
              Oq = Pq.c * Math.cos(lq),
              mq = Pq.c * Math.sin(lq);
            return (0, rq.jsx)("div", {
              className: Hq()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Yq,
                EmoteWheelSlotIconDisabled: !gq
              }),
              style: {
                left: `calc(50% + ${Oq}rem)`,
                top: `calc(50% + ${mq}rem)`,
                backgroundImage: gq ? `url(/textures/charSkins/previews/emote_${qq}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Eq)
          })), (0, rq.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Xq
          })]
        })
      })
    }))
  },
  8734: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq,
      f: () => aq,
      g: () => Vq,
      i: () => Nq,
      j: () => Wq
    });
    var Yq = gq(57),
      lq = gq(8742),
      Oq = gq(31),
      mq = gq(1904),
      xq = gq(38),
      Aq = gq(1252),
      cq = gq(1926);
    const uq = 50;
    const Bq = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = qq => {
          if (0 === this.listeners.size) {
            var Eq, gq;
            this.state = {
              ...this.state,
              channel: null !== (Eq = null === (gq = cq.c.get("chatChannels")) || void 0 === gq ? void 0 : gq[0]) && void 0 !== Eq ? Eq : null
            };
            const qq = Oq.i.subscribe("reportPlayer", (qq => {
              let {
                playerEId: Eq
              } = qq;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, Eq]
              })
            }));
            this.stopListening = [mq.gameBridge.subscribe("chatReceived", (qq => {
              let {
                serverChatMsgId: Eq,
                content: gq,
                author: Yq
              } = qq;
              this.addMessage(Eq, gq, Yq)
            })), () => {
              Oq.i.unsubscribe(qq)
            }, cq.c.subscribe("chatChannels", (qq => {
              var Eq;
              this.setState({
                ...this.state,
                channel: null !== (Eq = null === qq || void 0 === qq ? void 0 : qq[0]) && void 0 !== Eq ? Eq : null
              })
            }))]
          }
          return this.listeners.add(qq), () => {
            if (this.listeners.delete(qq), 0 === this.listeners.size) {
              for (const qq of this.stopListening) qq();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Yq = {
          serverChatMsgId: qq,
          content: Eq,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: gq
        };
        this.setState({
          ...this.state,
          messages: [Yq, ...this.state.messages].slice(0, lq.e)
        })
      }
      selectNextChannel() {
        const qq = cq.c.get("chatChannels");
        if (qq) {
          const Eq = qq.findIndex((qq => {
            var Eq;
            return qq.channelName === (null === (Eq = this.state.channel) || void 0 === Eq ? void 0 : Eq.channelName)
          }));
          this.setState({
            ...this.state,
            channel: qq[(Eq + 1) % qq.length]
          })
        }
      }
      setState(qq) {
        this.state = qq;
        for (const Eq of this.listeners) Eq()
      }
    };

    function Wq() {
      const [qq, Eq] = (0, Yq.useState)(Bq.getState);
      return (0, Yq.useEffect)((() => {
        const qq = Bq.subscribe((() => {
          Eq(Bq.getState())
        }));
        return Eq(Bq.getState()), qq
      }), []), qq
    }

    function Nq(qq) {
      var Eq, gq;
      if (qq.startsWith("/report")) {
        var Yq;
        const Eq = null !== (Yq = qq.replace("/report", "").trim().split(" ")[0]) && void 0 !== Yq ? Yq : "";
        if ("" === Eq) return void Bq.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const gq = mq.gameBridge.latest("players"),
          lq = mq.gameBridge.latest("hiddenPlayerNames"),
          xq = qq => {
            var Yq, Oq;
            const mq = null !== (Yq = null === (Oq = gq.byId[qq]) || void 0 === Oq ? void 0 : Oq.name) && void 0 !== Yq ? Yq : null;
            return null !== mq && (mq === Eq || (0, Aq.d)(mq, lq) === Eq)
          };
        if (null !== gq.localId && xq(gq.localId)) return void Bq.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const qq of gq.ids)
          if (xq(qq)) return Oq.i.TV("OpenReportMenu", {
            playerEId: qq,
            playerName: gq.byId[qq].name,
            Hc: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Bq.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      mq.gameBridge.send("sendChatMessage", {
          Hc: qq,
          channelName: null !== (Eq = null === (gq = Bq.getState().channel) || void 0 === gq ? void 0 : gq.channelName) && void 0 !== Eq ? Eq : null
        }),
        function(qq) {
          var Eq;
          const gq = null !== (Eq = xq.i.getItem("recentlySentChatMsgs")) && void 0 !== Eq ? Eq : [];
          gq.push(qq), gq.length > uq && gq.shift();
          xq.i.setItem("recentlySentChatMsgs", gq)
        }(qq)
    }

    function aq() {
      var qq;
      return null !== (qq = xq.i.getItem("recentlySentChatMsgs")) && void 0 !== qq ? qq : []
    }

    function Vq(qq) {
      var Eq;
      let gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Yq = null !== (Eq = xq.i.getItem("recentlySentChatMsgs")) && void 0 !== Eq ? Eq : [],
        lq = Yq.length + 1,
        Oq = gq ? (qq % lq + lq) % lq : Math.min(Yq.length, Math.max(0, qq));
      return {
        stepsBack: Oq,
        text: 0 === Oq ? "" : Yq[Yq.length - Oq]
      }
    }
  },
  8699: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      f: () => Oq
    });
    var Yq = gq(1968);
    const lq = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Oq = qq => "string" === typeof qq.icon && "" !== qq.icon && "string" === typeof qq.keycode && lq.test(qq.keycode),
      mq = qq => "Space" === qq ? "_" : Yq.h[qq]
  },
  8755: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(24);

    function lq() {
      return !Yq.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8850: (qq, Eq, gq) => {
    function Yq(qq) {
      return {
        x: (qq.left + qq.right) / 2,
        y: (qq.top + qq.bottom) / 2
      }
    }

    function lq(qq) {
      return 0 === qq.length ? null : qq.reduce(((qq, Eq) => ({
        left: Math.min(qq.left, Eq.left),
        top: Math.min(qq.top, Eq.top),
        right: Math.max(qq.right, Eq.right),
        bottom: Math.max(qq.bottom, Eq.bottom)
      })))
    }

    function Oq(qq, Eq) {
      const gq = Math.max(0, (Eq - (qq.right - qq.left)) / 2),
        Yq = Math.max(0, (Eq - (qq.bottom - qq.top)) / 2);
      return {
        left: qq.left - gq,
        top: qq.top - Yq,
        right: qq.right + gq,
        bottom: qq.bottom + Yq
      }
    }

    function mq(qq, Eq) {
      return Eq.x >= qq.left && Eq.x <= qq.right && Eq.y >= qq.top && Eq.y <= qq.bottom
    }

    function xq(qq, Eq, gq) {
      let lq = null,
        xq = 1 / 0;
      for (const {
          id: Yq,
          box: Oq
        }
        of Eq) {
        const Eq = (Oq.right - Oq.left) * (Oq.bottom - Oq.top);
        mq(Oq, qq) && Eq < xq && (xq = Eq, lq = Yq)
      }
      if (null !== lq) return lq;
      let Aq = 1 / 0;
      for (const {
          id: cq,
          box: uq
        }
        of Eq) {
        if (!mq(Oq(uq, gq), qq)) continue;
        const Eq = Yq(uq),
          xq = Math.hypot(qq.x - Eq.x, qq.y - Eq.y);
        xq < Aq && (Aq = xq, lq = cq)
      }
      return lq
    }

    function Aq(qq, Eq, gq) {
      return {
        left: gq.left,
        top: gq.top,
        right: qq - gq.right,
        bottom: Eq - gq.bottom
      }
    }

    function cq(qq, Eq, gq, Yq) {
      const lq = (qq, Eq, gq) => Math.max(Math.min(Eq, 0), Math.min(Math.max(gq, 0), qq));
      return {
        x: lq(Eq, Yq.left - qq.left, Yq.right - qq.right),
        y: lq(gq, Yq.top - qq.top, Yq.bottom - qq.bottom)
      }
    }

    function uq(qq, Eq, gq, Yq, lq) {
      const Oq = qq.dx * Yq + Eq,
        mq = qq.dy * lq + gq,
        xq = qq => Math.max(-1, Math.min(1, qq));
      return {
        dx: xq(Oq / Yq),
        dy: xq(mq / lq)
      }
    }

    function Bq(qq, Eq, gq, Yq) {
      return Eq <= 0 || gq <= 0 ? 1 : Math.max(.05, Math.min(1, qq / Eq, Yq / gq))
    }

    function Wq(qq, Eq, gq) {
      return Math.min(qq.right, Eq.right) - Math.max(qq.left, Eq.left) > gq && Math.min(qq.bottom, Eq.bottom) - Math.max(qq.top, Eq.top) > gq
    }

    function Nq(qq, Eq) {
      const gq = (qq, Eq, gq, Yq) => Eq - qq > Yq - gq ? gq - qq > Eq - Yq ? Yq - Eq : gq - qq : qq < gq ? gq - qq : Eq > Yq ? Yq - Eq : 0;
      return {
        x: gq(qq.left, qq.right, Eq.left, Eq.right),
        y: gq(qq.top, qq.bottom, Eq.top, Eq.bottom)
      }
    }

    function aq(qq, Eq) {
      let {
        avoid: gq = null,
        bounds: Yq = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, lq = 0, Oq = 1 / 0;
      return qq.forEach(((qq, mq) => {
        const xq = Eq.filter((Eq => Wq(qq, Eq, 0))).length,
          Aq = null !== Yq && (qq.left < Yq.left || qq.top < Yq.top || qq.right > Yq.right || qq.bottom > Yq.bottom),
          cq = xq + (gq && Wq(qq, gq, 0) ? 1e3 : 0) + (Aq ? 1e6 : 0);
        cq < Oq && (lq = mq, Oq = cq)
      })), lq
    }
    gq.d(Eq, {
      A: () => Nq,
      D: () => lq,
      b: () => Yq,
      d: () => mq,
      e: () => Wq,
      i: () => cq,
      m: () => Oq,
      n: () => aq,
      q: () => uq,
      t: () => xq,
      v: () => Bq,
      x: () => Aq
    })
  },
  8764: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => Nq,
      c: () => Oq,
      d: () => xq,
      g: () => cq,
      j: () => Aq,
      l: () => mq,
      o: () => lq,
      r: () => Yq,
      s: () => aq,
      t: () => Bq,
      w: () => uq,
      y: () => Wq
    });
    const Yq = 14,
      lq = 6,
      Oq = (Yq + lq) / 2,
      mq = 200,
      xq = mq / 2,
      Aq = mq / 2 - 1,
      cq = lq / Yq * (mq / 2),
      uq = (qq, Eq) => -Math.PI / 2 + 2 * qq * Math.PI / Eq,
      Bq = (qq, Eq, gq) => {
        const Yq = 2 * Math.PI / gq;
        return (Math.round((Math.atan2(Eq, qq) + Math.PI / 2) / Yq) % gq + gq) % gq
      },
      Wq = .5,
      Nq = (qq, Eq, gq) => Math.hypot(qq.x, qq.y) < Wq ? gq : Bq(qq.x, qq.y, Eq),
      aq = (qq, Eq, gq, Yq, lq) => {
        const Oq = Math.PI / Eq,
          mq = uq(qq, Eq),
          xq = mq - Oq,
          Aq = mq + Oq,
          cq = (qq, Eq) => `${gq+qq*Math.cos(Eq)} ${gq+qq*Math.sin(Eq)}`;
        return [`M ${cq(Yq,xq)}`, `L ${cq(lq,xq)}`, `A ${lq} ${lq} 0 0 1 ${cq(lq,Aq)}`, `L ${cq(Yq,Aq)}`, `A ${Yq} ${Yq} 0 0 0 ${cq(Yq,xq)}`, "Z"].join(" ")
      }
  },
  8812: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(57),
      lq = gq(8723),
      Oq = gq(2383);

    function mq() {
      const qq = (0, Oq.h)("shopInfo"),
        [, Eq] = (0, Yq.useReducer)((qq => qq + 1), 0);
      return (0, Oq.g)("shopInfo", Eq), !(0, lq.d)(qq)
    }
  },
  8695: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      g: () => mq,
      k: () => xq,
      m: () => lq
    });
    var Yq = gq(8699);
    const lq = qq => {
        const Eq = [];
        qq.holdingGun && Eq.push({
          kind: "reload"
        }), qq.touchscreenActionButton && Eq.push({
          kind: "touchButton",
          label: qq.touchscreenActionButton
        });
        for (const Oq of null !== (gq = null === (lq = qq.customButtons) || void 0 === lq ? void 0 : lq.filter(Yq.f)) && void 0 !== gq ? gq : []) {
          var gq, lq;
          Eq.push({
            kind: "customButton",
            id: Oq.id,
            icon: Oq.icon,
            description: Oq.description
          })
        }
        return Eq
      },
      Oq = qq => qq.length >= 2,
      mq = qq => "specialAction" !== qq.kind,
      xq = (qq, Eq) => {
        if (null === qq || null === Eq) return qq === Eq;
        if (qq.kind !== Eq.kind) return !1;
        switch (qq.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return qq.action === Eq.action;
          case "customButton":
            return qq.id === Eq.id && qq.icon === Eq.icon;
          case "touchButton":
            return qq.label === Eq.label
        }
      }
  },
  8686: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => uq,
      e: () => Nq,
      h: () => Bq,
      i: () => aq
    });
    var Yq = gq(57),
      lq = gq(31),
      Oq = gq(1416),
      mq = gq(8695),
      xq = gq(8704);
    let Aq = null;
    const cq = () => Aq,
      uq = qq => {
        (0, mq.k)(Aq, qq) || (Aq = qq, lq.i.TV(xq.c, Aq))
      },
      Bq = () => {
        const [qq, Eq] = (0, Yq.useState)(cq);
        return (0, Oq.f)(xq.c, Eq), qq
      };
    let Wq = !1;
    const Nq = qq => {
        qq !== Wq && (Wq = qq, lq.i.TV(xq.g, qq))
      },
      aq = () => {
        const [qq, Eq] = (0, Yq.useState)(Wq);
        return (0, Oq.f)(xq.g, Eq), qq
      }
  },
  8704: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      c: () => Yq,
      g: () => lq,
      i: () => xq,
      j: () => Aq,
      n: () => cq,
      o: () => mq
    });
    const Yq = "controllerActionHintChanged",
      lq = "controllerActionWheelHintChanged",
      Oq = "controllerOpenChat",
      mq = "controllerSneakToggledChanged",
      xq = "controllerAttackLatchedChanged",
      Aq = "controllerDropStackHoldChanged",
      cq = "controllerPickBlockHintChanged"
  },
  8629: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      e: () => Oq,
      f: () => Aq,
      j: () => xq
    });
    var Yq = gq(1416),
      lq = gq(1380);
    const Oq = "controllerInventoryCursorChanged",
      mq = {
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
      xq = () => {
        var qq, Eq;
        return (0, Yq.h)(Oq, null !== (qq = null === (Eq = (0, lq.g)()) || void 0 === Eq ? void 0 : Eq.getInventoryCursorState()) && void 0 !== qq ? qq : mq)
      },
      Aq = () => {
        var qq, Eq;
        return null !== (qq = null === (Eq = (0, lq.g)()) || void 0 === Eq ? void 0 : Eq.isPadSteppingSlots()) && void 0 !== qq && qq
      }
  },
  8624: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Wq,
      d: () => xq,
      e: () => Aq,
      g: () => mq,
      h: () => Oq,
      j: () => uq,
      l: () => Bq
    });
    let Yq = null;
    const lq = new Set,
      Oq = qq => (Yq = qq, () => {
        if (Yq === qq) {
          Yq = null;
          for (const qq of lq) qq()
        }
      }),
      mq = qq => (lq.add(qq), () => {
        lq.delete(qq)
      }),
      xq = () => Yq,
      Aq = () => null !== Yq;
    let cq = null;
    const uq = qq => {
        cq = qq
      },
      Bq = () => {
        const qq = cq;
        return cq = null, qq
      },
      Wq = (qq, Eq) => {
        var gq, Yq;
        return null !== (gq = null !== (Yq = qq.find((qq => qq.element === Eq))) && void 0 !== Yq ? Yq : qq.find((qq => qq.element.contains(Eq)))) && void 0 !== gq ? gq : null
      }
  },
  8638: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      e: () => mq
    });
    var Yq = gq(57);
    const lq = new WeakMap,
      Oq = qq => {
        var Eq, gq;
        return null !== (Eq = null === (gq = lq.get(qq)) || void 0 === gq ? void 0 : gq.current) && void 0 !== Eq ? Eq : null
      },
      mq = (qq, Eq) => {
        const gq = (0, Yq.useRef)(Eq);
        gq.current = Eq;
        const Oq = (0, Yq.useRef)(null);
        (0, Yq.useEffect)((() => {
          const Eq = qq.current,
            Yq = Oq.current;
          Eq !== Yq && (Yq && lq.get(Yq) === gq && lq.delete(Yq), Oq.current = Eq, Eq && lq.set(Eq, gq))
        })), (0, Yq.useEffect)((() => () => {
          const qq = Oq.current;
          qq && lq.get(qq) === gq && lq.delete(qq), Oq.current = null
        }), [])
      }
  },
  8800: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      f: () => cq,
      g: () => Bq,
      j: () => uq,
      n: () => Aq,
      q: () => Nq
    });
    var Yq = gq(31),
      lq = gq(1985),
      Oq = gq(1380),
      mq = gq(1367);
    const xq = qq => {
        var Eq, gq;
        return (0, mq.c)() && null !== (Eq = null === (gq = (0, Oq.g)()) || void 0 === gq ? void 0 : gq.getGlyphForNoaAction(qq)) && void 0 !== Eq ? Eq : null
      },
      Aq = "controllerGlyph:",
      cq = qq => {
        var Eq, gq;
        return null !== (Eq = null === (gq = (0, Oq.g)()) || void 0 === gq ? void 0 : gq.getPadGlyphIconName(qq)) && void 0 !== Eq ? Eq : `${Aq}xbox/${qq}`
      },
      uq = qq => qq.startsWith(Aq),
      Bq = qq => {
        var Eq, gq;
        return uq(qq) && null !== (Eq = null === (gq = (0, Oq.g)()) || void 0 === gq ? void 0 : gq.getPadGlyphIconUrl(qq)) && void 0 !== Eq ? Eq : null
      },
      Wq = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", mq.b, lq.c, lq.b],
      Nq = qq => {
        const Eq = Wq.map((Eq => Yq.i.subscribe(Eq, qq)));
        return () => {
          for (const qq of Eq) Yq.i.unsubscribe(qq)
        }
      }
  },
  8604: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      e: () => Yq
    });
    const Yq = "controllerOpenKeyboard",
      lq = "controllerKeyboardVisible"
  },
  8669: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => lq
    });
    let Yq = null;
    const lq = function(qq) {
        const Eq = {
          cycle: qq,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Yq = Eq, () => {
          Yq === Eq && (Yq = null)
        }
      },
      Oq = () => {
        var qq;
        return null !== (qq = Yq) && void 0 !== qq && qq.canCycle() ? Yq.cycle : null
      }
  },
  8780: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      g: () => mq,
      i: () => Oq,
      m: () => Yq,
      p: () => xq,
      r: () => cq,
      u: () => uq
    });
    const Yq = "controllerActionWheelOpen",
      lq = "controllerActionWheelAim",
      Oq = "controllerActionWheelCommit",
      mq = "controllerActionWheelClose",
      xq = "controllerActionWheelPick";
    let Aq = !1;
    const cq = () => Aq,
      uq = qq => {
        Aq = qq
      }
  },
  8773: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      g: () => lq
    });
    let Yq = 0;
    const lq = () => {
        Yq++
      },
      Oq = () => Yq
  },
  8662: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq,
      g: () => lq,
      h: () => mq,
      i: () => Oq,
      k: () => Yq,
      m: () => cq
    });
    const Yq = "controllerQuickChatWheelOpen",
      lq = "controllerQuickChatWheelAim",
      Oq = "controllerQuickChatWheelCommit",
      mq = "controllerQuickChatWheelClose";
    let xq = !1;
    const Aq = () => xq,
      cq = qq => {
        xq = qq
      }
  },
  8846: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      e: () => Aq
    });
    var Yq = gq(24),
      lq = gq(1308),
      Oq = gq(96);
    const mq = {
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

    function xq() {
      return (0, Oq.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Aq = new class {
      constructor(qq) {
        this.deps = qq, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(qq, Eq) {
        var gq;
        if (!this.deps.enabled()) return;
        const Yq = mq[qq],
          lq = null !== Eq && void 0 !== Eq ? Eq : Yq.pattern;
        if (null === lq) return void console.warn("No vibration pattern for", qq);
        const Oq = this.deps.now();
        Oq - this.lastAnyAt < 40 && Yq.priority < this.playingPriority || Oq - (null !== (gq = this.lastAt.get(qq)) && void 0 !== gq ? gq : -1 / 0) < Yq.minGapMs || Oq < this.playingUntil && Yq.priority < this.playingPriority || (this.lastAt.set(qq, Oq), this.lastAnyAt = Oq, this.playingUntil = Oq + lq.reduce(((qq, Eq) => qq + Eq), 0), this.playingPriority = Yq.priority, this.deps.vibrate(lq))
      }
    }({
      vibrate: qq => {
        navigator.vibrate([...qq])
      },
      now: () => performance.now(),
      enabled: () => xq() && Yq.b.get("isTouchScreen") && Yq.b.get("clientEscMenuOptions").vibration && !(0, lq.i)()
    })
  },
  8723: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(8729),
      lq = gq(598),
      Oq = gq(136);

    function mq(qq) {
      var Eq, gq;
      if ((0, lq.H)(qq)) return !0;
      const mq = null !== (Eq = null === (gq = Oq.k[Oq.n]) || void 0 === gq ? void 0 : gq.adConfig.showRewardedAds) && void 0 !== Eq && Eq;
      for (const lq in qq) {
        const Eq = qq[lq];
        if (null !== Eq && void 0 !== Eq && Eq.items)
          for (const qq in Eq.items)
            if ((0, Yq.h)(Eq.items[qq], mq)) return !1
      }
      return !0
    }
  },
  8742: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      e: () => Yq
    });
    const Yq = 100;

    function lq(qq) {
      let {
        translationKeys: Eq = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return qq.map((qq => {
        var gq;
        return null !== (gq = function(qq, Eq) {
          if ("string" === typeof qq) return qq;
          const gq = "str" in qq ? qq.str : qq;
          if ("string" === typeof gq) return gq;
          if ("entityName" in gq) return gq.entityName;
          if (Eq && "translationKey" in gq) return `{${gq.translationKey}${void 0===gq.params?"":` ${JSON.stringify(gq.params)}`}}`;
          return null
        }(qq, Eq)) && void 0 !== gq ? gq : " "
      })).join("")
    }
  },
  8794: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      g: () => xq,
      j: () => Aq
    });
    var Yq = gq(2182),
      lq = gq(1226),
      Oq = gq(2189);
    const mq = ",";

    function xq(qq) {
      if (!qq) return [];
      const Eq = new Set,
        gq = [];
      for (const Yq of qq.split(mq)) {
        const qq = Yq.trim();
        if ((0, Oq.k)(qq) && !Eq.has(qq) && (Eq.add(qq), gq.push(qq), gq.length >= lq.o)) break
      }
      return gq
    }

    function Aq(qq) {
      const Eq = new Set,
        gq = [];
      for (const Yq of qq)
        if ((0, Oq.k)(Yq) && !Eq.has(Yq) && (Eq.add(Yq), gq.push(Yq), gq.length >= lq.o)) break;
      return gq.join(mq)
    }

    function cq() {
      return Aq(Oq.f)
    }

    function uq(qq) {
      var Eq;
      return "emote" === qq ? cq() : null !== (Eq = Bq[qq][0]) && void 0 !== Eq ? Eq : Wq[qq]
    }
    const Bq = lq.w.reduce(((qq, Eq) => {
        const gq = [];
        for (const Oq in Yq.f[Eq]) {
          var lq;
          "default" === (null === (lq = (0, Yq.l)(Eq, Oq)) || void 0 === lq ? void 0 : lq.cosmeticPack) && gq.push(Oq)
        }
        return qq[Eq] = gq, qq
      }), {}),
      Wq = lq.w.reduce(((qq, Eq) => (qq[Eq] = Object.keys(Yq.f[Eq])[0], qq)), {})
  },
  8729: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return !qq.hidden && (Eq || !qq.isRewardedAd)
    }

    function lq(qq) {
      return "object" === typeof qq ? qq.option : qq
    }

    function Oq(qq, Eq) {
      var gq;
      if ("dropdown" === (null === (gq = qq.userInput) || void 0 === gq ? void 0 : gq.type) && "object" === typeof qq.userInput.dropdownOptions[0]) {
        for (const gq of qq.userInput.dropdownOptions)
          if (lq(gq) === Eq) return "object" === typeof gq ? gq.cost : qq.cost;
        console.error("Didn't find matching option for dropdown item. Item:", qq, "input:", Eq)
      }
      return qq.cost
    }

    function mq(qq, Eq, gq) {
      var Yq;
      const lq = null !== (Yq = gq.excludedPlayers) && void 0 !== Yq ? Yq : [Eq];
      return qq.filter((qq => !lq.includes(qq)))
    }
    gq.d(Eq, {
      d: () => Oq,
      f: () => lq,
      g: () => mq,
      h: () => Yq
    })
  },
  8787: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);