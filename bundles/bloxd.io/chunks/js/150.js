export const id = 150;
export const ids = [150];
export const modules = {
  8462: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => gk,
      e: () => Nk,
      i: () => Hk
    });
    var Rk = Bk(61),
      tk = Bk(4283),
      ak = Bk(1096),
      Xk = Bk(1387),
      bk = Bk(29),
      wk = Bk(3218),
      dk = Bk(2133),
      sk = Bk(1192),
      Vk = Bk(8500),
      Jk = Bk(1847),
      Ak = Bk(1876),
      ek = Bk(1149),
      yk = Bk(22),
      fk = Bk(1585),
      mk = Bk(1020),
      Wk = Bk.n(mk),
      vk = Bk(8471),
      ik = Bk(8476),
      Yk = Bk(8478),
      Lk = Bk(8369),
      Ok = Bk(8484),
      Ek = (Bk(8492), Bk(1069));
    let Sk = null;

    function Nk() {
      return null !== Sk
    }

    function Hk() {
      return "pad" === Sk
    }

    function uk() {
      return "inGame" === yk.c.get("gameState") && !(0, fk.s)()
    }

    function Mk(kk) {
      return (0, ik.w)(kk, sk.l, ik.f, ik.h, ik.k)
    }
    const gk = (0, Rk.memo)((function() {
      const {
        t: kk
      } = (0, ek.x)(), {
        userContext: Fk
      } = (0, ak.e)(), [Bk, yk] = (0, Rk.useState)(null), [mk, Nk] = (0, Rk.useState)(null), Hk = (0, Rk.useRef)(null), gk = (0, Rk.useCallback)((kk => {
        Hk.current = kk, Nk(kk)
      }), []), Uk = (0, Rk.useRef)(0), ck = (0, Rk.useRef)(null), Gk = (0, Rk.useRef)({
        x: 0,
        y: 0
      }), [Tk, rk] = (0, Rk.useState)(0), Dk = (0, Rk.useMemo)((() => function(kk) {
        const Fk = [];
        for (let Rk = 0; Rk < sk.l; Rk++) {
          var Bk;
          Fk.push(null !== (Bk = kk[Rk]) && void 0 !== Bk ? Bk : null)
        }
        return Fk
      }((0, Vk.f)(Fk.getPlayerCosmetics().emote))), [Fk, Tk]);
      (0, Ak.b)("cosmeticsUpdated", (kk => {
        kk.some((kk => kk.local && "emote" === kk.hB)) && rk((kk => kk + 1))
      }));
      const zk = (0, Rk.useRef)(!1),
        Pk = (0, Rk.useCallback)((function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === kk && (0, Yk.e)(), zk.current = Fk, Gk.current = {
            x: 0,
            y: 0
          }, gk(null), yk(kk)
        }), [gk]),
        hk = (0, Rk.useCallback)((() => {
          yk(null), gk(null), Gk.current = {
            x: 0,
            y: 0
          }
        }), [gk]),
        qk = (0, Rk.useCallback)((kk => {
          if (Date.now() < Uk.current) return;
          const Fk = (0, dk.j)(kk),
            Bk = !!Fk.holdUntilMove,
            Rk = Bk ? 600 : Math.ceil(1e3 * Fk.animation.animation_length / dk.d) + 200;
          Uk.current = Date.now() + Rk, ck.current = kk, Jk.gameBridge.send("playEmote", kk), Jk.gameBridge.send("applyTemporaryThirdPerson", Bk ? {} : {
            durationMs: Rk
          })
        }), []);
      (0, Xk.f)("requestToggleEmoteWheel", (() => {
        null === Bk ? uk() && Pk("click") : hk()
      })), (0, Xk.f)("requestEmoteWheelHoldOpen", (() => {
        null === Bk && uk() && Pk((0, vk.b)() ? "hold" : "click")
      })), (0, Xk.f)("requestEmoteWheelPadOpen", (kk => {
        null !== Bk || !uk() || (0, Lk.b)() || (0, Ok.p)() || Pk("pad", kk)
      })), (0, Xk.f)("requestEmoteRepeatLast", (() => {
        if (null !== Bk || !uk() || (0, Lk.b)() || (0, Ok.p)()) return;
        const kk = ck.current;
        null !== kk && Dk.includes(kk) ? qk(kk) : Pk("pad", !0)
      }));
      const Ck = () => {
        const kk = Hk.current,
          Fk = null !== kk ? Dk[kk] : null;
        null !== Fk && "pad" === Bk && Date.now() < Uk.current || (hk(), null !== Fk && qk(Fk))
      };
      (0, Xk.f)("emoteWheelPadAim", (kk => {
        if ("pad" !== Bk) return;
        const Fk = (0, ik.H)(kk, sk.l, Hk.current);
        gk(null !== Fk && null !== Dk[Fk] ? Fk : null)
      })), (0, Xk.f)("requestEmoteWheelPadCommit", (kk => {
        "pad" !== Bk || kk && zk.current || Ck()
      })), (0, Xk.f)("appManagerUpdated|activeInputDevice", (kk => {
        null !== Bk && "pad" === Bk !== ("gamepad" === kk) && hk()
      })), (0, Rk.useLayoutEffect)((() => (Sk = Bk, (0, wk.o)("emoteWheel", "pad" === Bk), bk.o.Hf(wk.j), () => {
        Sk = null, (0, wk.o)("emoteWheel", !1), bk.o.Hf(wk.j)
      })), [Bk]), (0, Xk.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Bk && Ck()
      })), (0, Xk.f)("requestEmoteWheelClose", (() => {
        null !== Bk && hk()
      })), (0, Xk.f)("appManagerUpdated|gameState", (kk => {
        "inGame" !== kk && hk()
      }));
      const Zk = () => {
        (0, fk.s)() && hk()
      };
      if ((0, Xk.f)("appManagerUpdated|openEverythingMenuName", Zk), (0, Xk.f)("appManagerUpdated|openInGameMenuName", Zk), (0, Xk.f)("pointerLockUpdate", (kk => {
          kk || "hold" !== Bk || hk()
        })), (0, Rk.useEffect)((() => {
          if (null === Bk) return;
          const kk = kk => {
            "Escape" === kk.key && (kk.stopImmediatePropagation(), kk.preventDefault(), hk())
          };
          return document.addEventListener("keydown", kk, !0), () => {
            document.removeEventListener("keydown", kk, !0)
          }
        }), [Bk, hk]), (0, tk.d)(!0, "click" === Bk, "EmoteWheelOverlay"), (0, Rk.useEffect)((() => {
          if ("hold" === Bk) return Jk.gameBridge.send("holdEmoteWheel", !0), () => {
            Jk.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Bk]), (0, Rk.useEffect)((() => {
          if ("hold" !== Bk) return;
          const kk = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Fk = ik.t * kk,
            Rk = ik.p * kk,
            tk = kk => {
              let Bk = Gk.current.x + kk.movementX,
                tk = Gk.current.y + kk.movementY;
              const ak = Math.hypot(Bk, tk);
              if (ak > Fk) {
                const kk = Fk / ak;
                Bk *= kk, tk *= kk
              }
              Gk.current = {
                x: Bk,
                y: tk
              }, gk(function(kk, Fk, Bk, Rk) {
                if (Math.hypot(kk, Fk) < Bk) return null;
                const tk = (0, ik.y)(kk, Fk, sk.l);
                return null === Rk[tk] ? null : tk
              }(Bk, tk, Rk, Dk))
            };
          return document.addEventListener("mousemove", tk), () => {
            document.removeEventListener("mousemove", tk)
          }
        }), [Bk, Dk, gk]), null === Bk) return null;
      const pk = "hold" === Bk || "pad" === Bk,
        Kk = null !== mk ? Dk[mk] : null,
        xk = null !== Kk ? (0, dk.j)(Kk).displayName : kk("emotes:pickEmote");
      return (0, Ek.jsx)("div", {
        className: Wk()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Bk
        }),
        onMouseDown: kk => {
          kk.target === kk.currentTarget && hk()
        },
        children: (0, Ek.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * ik.t + "rem",
            height: 2 * ik.t + "rem"
          },
          children: [(0, Ek.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${ik.o} ${ik.o}`,
            children: [Dk.map(((Fk, Bk) => {
              const Rk = null !== Fk,
                tk = pk && Bk === mk;
              return (0, Ek.jsx)("path", {
                d: Mk(Bk),
                className: Wk()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: tk,
                  EmoteWheelWedgeDisabled: !Rk
                }),
                onClick: kk => {
                  kk.stopPropagation(), null !== Fk && (kk => {
                    hk(), qk(kk)
                  })(Fk)
                },
                "aria-label": null !== Fk ? (0, dk.j)(Fk).displayName : kk("emotes:emptySlot")
              }, Bk)
            })), (0, Ek.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: ik.f,
              cy: ik.f,
              r: ik.k
            }), (0, Ek.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: ik.f,
              cy: ik.f,
              r: ik.h
            }), pk && null !== mk && (0, Ek.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Mk(mk)
            })]
          }), Dk.map(((kk, Fk) => {
            const Bk = null !== kk,
              Rk = pk && Fk === mk,
              tk = (0, ik.C)(Fk, sk.l),
              ak = ik.d * Math.cos(tk),
              Xk = ik.d * Math.sin(tk);
            return (0, Ek.jsx)("div", {
              className: Wk()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Rk,
                EmoteWheelSlotIconDisabled: !Bk
              }),
              style: {
                left: `calc(50% + ${ak}rem)`,
                top: `calc(50% + ${Xk}rem)`,
                backgroundImage: Bk ? `url(/textures/charSkins/previews/emote_${kk}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Fk)
          })), (0, Ek.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: xk
          })]
        })
      })
    }))
  },
  8451: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk,
      f: () => ek,
      h: () => yk,
      k: () => Ak,
      l: () => Jk
    });
    var Rk = Bk(61),
      tk = Bk(8453),
      ak = Bk(29),
      Xk = Bk(1847),
      bk = Bk(42),
      wk = Bk(1213),
      dk = Bk(1863);
    const sk = 50;
    const Vk = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = kk => {
          if (0 === this.listeners.size) {
            var Fk, Bk;
            this.state = {
              ...this.state,
              channel: null !== (Fk = null === (Bk = dk.b.get("chatChannels")) || void 0 === Bk ? void 0 : Bk[0]) && void 0 !== Fk ? Fk : null
            };
            const kk = ak.o.subscribe("reportPlayer", (kk => {
              let {
                playerEId: Fk
              } = kk;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, Fk]
              })
            }));
            this.stopListening = [Xk.gameBridge.subscribe("chatReceived", (kk => {
              let {
                serverChatMsgId: Fk,
                content: Bk,
                author: Rk
              } = kk;
              this.addMessage(Fk, Bk, Rk)
            })), () => {
              ak.o.unsubscribe(kk)
            }, dk.b.subscribe("chatChannels", (kk => {
              var Fk;
              this.setState({
                ...this.state,
                channel: null !== (Fk = null === kk || void 0 === kk ? void 0 : kk[0]) && void 0 !== Fk ? Fk : null
              })
            }))]
          }
          return this.listeners.add(kk), () => {
            if (this.listeners.delete(kk), 0 === this.listeners.size) {
              for (const kk of this.stopListening) kk();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Rk = {
          serverChatMsgId: kk,
          content: Fk,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: Bk
        };
        this.setState({
          ...this.state,
          messages: [Rk, ...this.state.messages].slice(0, tk.e)
        })
      }
      selectNextChannel() {
        const kk = dk.b.get("chatChannels");
        if (kk) {
          const Fk = kk.findIndex((kk => {
            var Fk;
            return kk.channelName === (null === (Fk = this.state.channel) || void 0 === Fk ? void 0 : Fk.channelName)
          }));
          this.setState({
            ...this.state,
            channel: kk[(Fk + 1) % kk.length]
          })
        }
      }
      setState(kk) {
        this.state = kk;
        for (const Fk of this.listeners) Fk()
      }
    };

    function Jk() {
      const [kk, Fk] = (0, Rk.useState)(Vk.getState);
      return (0, Rk.useEffect)((() => {
        const kk = Vk.subscribe((() => {
          Fk(Vk.getState())
        }));
        return Fk(Vk.getState()), kk
      }), []), kk
    }

    function Ak(kk) {
      var Fk, Bk;
      if (kk.startsWith("/report")) {
        var Rk;
        const Fk = null !== (Rk = kk.replace("/report", "").trim().split(" ")[0]) && void 0 !== Rk ? Rk : "";
        if ("" === Fk) return void Vk.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const Bk = Xk.gameBridge.latest("players"),
          tk = Xk.gameBridge.latest("hiddenPlayerNames"),
          bk = kk => {
            var Rk, ak;
            const Xk = null !== (Rk = null === (ak = Bk.byId[kk]) || void 0 === ak ? void 0 : ak.name) && void 0 !== Rk ? Rk : null;
            return null !== Xk && (Xk === Fk || (0, wk.e)(Xk, tk) === Fk)
          };
        if (null !== Bk.localId && bk(Bk.localId)) return void Vk.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const kk of Bk.ids)
          if (bk(kk)) return ak.o.Hf("OpenReportMenu", {
            playerEId: kk,
            playerName: Bk.byId[kk].name,
            UX: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Vk.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      Xk.gameBridge.send("sendChatMessage", {
          UX: kk,
          channelName: null !== (Fk = null === (Bk = Vk.getState().channel) || void 0 === Bk ? void 0 : Bk.channelName) && void 0 !== Fk ? Fk : null
        }),
        function(kk) {
          var Fk;
          const Bk = null !== (Fk = bk.i.getItem("recentlySentChatMsgs")) && void 0 !== Fk ? Fk : [];
          Bk.push(kk), Bk.length > sk && Bk.shift();
          bk.i.setItem("recentlySentChatMsgs", Bk)
        }(kk)
    }

    function ek() {
      var kk;
      return null !== (kk = bk.i.getItem("recentlySentChatMsgs")) && void 0 !== kk ? kk : []
    }

    function yk(kk) {
      var Fk;
      let Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Rk = null !== (Fk = bk.i.getItem("recentlySentChatMsgs")) && void 0 !== Fk ? Fk : [],
        tk = Rk.length + 1,
        ak = Bk ? (kk % tk + tk) % tk : Math.min(Rk.length, Math.max(0, kk));
      return {
        stepsBack: ak,
        text: 0 === ak ? "" : Rk[Rk.length - ak]
      }
    }
  },
  8403: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      i: () => ak
    });
    var Rk = Bk(1892);
    const tk = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      ak = kk => "string" === typeof kk.icon && "" !== kk.icon && "string" === typeof kk.keycode && tk.test(kk.keycode),
      Xk = kk => "Space" === kk ? "_" : Rk.d[kk]
  },
  8471: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(22);

    function tk() {
      return !Rk.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8567: (kk, Fk, Bk) => {
    function Rk(kk) {
      return {
        x: (kk.left + kk.right) / 2,
        y: (kk.top + kk.bottom) / 2
      }
    }

    function tk(kk) {
      return 0 === kk.length ? null : kk.reduce(((kk, Fk) => ({
        left: Math.min(kk.left, Fk.left),
        top: Math.min(kk.top, Fk.top),
        right: Math.max(kk.right, Fk.right),
        bottom: Math.max(kk.bottom, Fk.bottom)
      })))
    }

    function ak(kk, Fk) {
      const Bk = Math.max(0, (Fk - (kk.right - kk.left)) / 2),
        Rk = Math.max(0, (Fk - (kk.bottom - kk.top)) / 2);
      return {
        left: kk.left - Bk,
        top: kk.top - Rk,
        right: kk.right + Bk,
        bottom: kk.bottom + Rk
      }
    }

    function Xk(kk, Fk) {
      return Fk.x >= kk.left && Fk.x <= kk.right && Fk.y >= kk.top && Fk.y <= kk.bottom
    }

    function bk(kk, Fk, Bk) {
      let tk = null,
        bk = 1 / 0;
      for (const {
          id: Rk,
          box: ak
        }
        of Fk) {
        const Fk = (ak.right - ak.left) * (ak.bottom - ak.top);
        Xk(ak, kk) && Fk < bk && (bk = Fk, tk = Rk)
      }
      if (null !== tk) return tk;
      let wk = 1 / 0;
      for (const {
          id: dk,
          box: sk
        }
        of Fk) {
        if (!Xk(ak(sk, Bk), kk)) continue;
        const Fk = Rk(sk),
          bk = Math.hypot(kk.x - Fk.x, kk.y - Fk.y);
        bk < wk && (wk = bk, tk = dk)
      }
      return tk
    }

    function wk(kk, Fk, Bk) {
      return {
        left: Bk.left,
        top: Bk.top,
        right: kk - Bk.right,
        bottom: Fk - Bk.bottom
      }
    }

    function dk(kk, Fk, Bk, Rk) {
      const tk = (kk, Fk, Bk) => Math.max(Math.min(Fk, 0), Math.min(Math.max(Bk, 0), kk));
      return {
        x: tk(Fk, Rk.left - kk.left, Rk.right - kk.right),
        y: tk(Bk, Rk.top - kk.top, Rk.bottom - kk.bottom)
      }
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      const ak = kk.dx * Rk + Fk,
        Xk = kk.dy * tk + Bk,
        bk = kk => Math.max(-1, Math.min(1, kk));
      return {
        dx: bk(ak / Rk),
        dy: bk(Xk / tk)
      }
    }

    function Vk(kk, Fk, Bk, Rk) {
      return Fk <= 0 || Bk <= 0 ? 1 : Math.max(.05, Math.min(1, kk / Fk, Rk / Bk))
    }

    function Jk(kk, Fk, Bk) {
      return Math.min(kk.right, Fk.right) - Math.max(kk.left, Fk.left) > Bk && Math.min(kk.bottom, Fk.bottom) - Math.max(kk.top, Fk.top) > Bk
    }

    function Ak(kk, Fk) {
      const Bk = (kk, Fk, Bk, Rk) => Fk - kk > Rk - Bk ? Bk - kk > Fk - Rk ? Rk - Fk : Bk - kk : kk < Bk ? Bk - kk : Fk > Rk ? Rk - Fk : 0;
      return {
        x: Bk(kk.left, kk.right, Fk.left, Fk.right),
        y: Bk(kk.top, kk.bottom, Fk.top, Fk.bottom)
      }
    }

    function ek(kk, Fk) {
      let {
        avoid: Bk = null,
        bounds: Rk = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, tk = 0, ak = 1 / 0;
      return kk.forEach(((kk, Xk) => {
        const bk = Fk.filter((Fk => Jk(kk, Fk, 0))).length,
          wk = null !== Rk && (kk.left < Rk.left || kk.top < Rk.top || kk.right > Rk.right || kk.bottom > Rk.bottom),
          dk = bk + (Bk && Jk(kk, Bk, 0) ? 1e3 : 0) + (wk ? 1e6 : 0);
        dk < ak && (tk = Xk, ak = dk)
      })), tk
    }
    Bk.d(Fk, {
      B: () => wk,
      D: () => Ak,
      E: () => tk,
      e: () => Rk,
      h: () => Xk,
      k: () => Jk,
      o: () => dk,
      q: () => ak,
      s: () => ek,
      u: () => sk,
      v: () => bk,
      x: () => Vk
    })
  },
  8476: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => sk,
      D: () => Jk,
      H: () => Ak,
      d: () => ak,
      f: () => bk,
      h: () => dk,
      k: () => wk,
      o: () => Xk,
      p: () => tk,
      t: () => Rk,
      w: () => ek,
      y: () => Vk
    });
    const Rk = 14,
      tk = 6,
      ak = (Rk + tk) / 2,
      Xk = 200,
      bk = Xk / 2,
      wk = Xk / 2 - 1,
      dk = tk / Rk * (Xk / 2),
      sk = (kk, Fk) => -Math.PI / 2 + 2 * kk * Math.PI / Fk,
      Vk = (kk, Fk, Bk) => {
        const Rk = 2 * Math.PI / Bk;
        return (Math.round((Math.atan2(Fk, kk) + Math.PI / 2) / Rk) % Bk + Bk) % Bk
      },
      Jk = .5,
      Ak = (kk, Fk, Bk) => Math.hypot(kk.x, kk.y) < Jk ? Bk : Vk(kk.x, kk.y, Fk),
      ek = (kk, Fk, Bk, Rk, tk) => {
        const ak = Math.PI / Fk,
          Xk = sk(kk, Fk),
          bk = Xk - ak,
          wk = Xk + ak,
          dk = (kk, Fk) => `${Bk+kk*Math.cos(Fk)} ${Bk+kk*Math.sin(Fk)}`;
        return [`M ${dk(Rk,bk)}`, `L ${dk(tk,bk)}`, `A ${tk} ${tk} 0 0 1 ${dk(tk,wk)}`, `L ${dk(Rk,wk)}`, `A ${Rk} ${Rk} 0 0 0 ${dk(Rk,bk)}`, "Z"].join(" ")
      }
  },
  8513: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(61),
      tk = Bk(8437),
      ak = Bk(2320);

    function Xk() {
      const kk = (0, ak.j)("shopInfo"),
        [, Fk] = (0, Rk.useReducer)((kk => kk + 1), 0);
      return (0, ak.f)("shopInfo", Fk), !(0, tk.b)(kk)
    }
  },
  8396: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      i: () => Xk,
      m: () => bk,
      o: () => tk
    });
    var Rk = Bk(8403);
    const tk = kk => {
        const Fk = [];
        kk.holdingGun && Fk.push({
          kind: "reload"
        }), kk.touchscreenActionButton && Fk.push({
          kind: "touchButton",
          label: kk.touchscreenActionButton
        });
        for (const ak of null !== (Bk = null === (tk = kk.customButtons) || void 0 === tk ? void 0 : tk.filter(Rk.i)) && void 0 !== Bk ? Bk : []) {
          var Bk, tk;
          Fk.push({
            kind: "customButton",
            id: ak.id,
            icon: ak.icon,
            description: ak.description
          })
        }
        return Fk
      },
      ak = kk => kk.length >= 2,
      Xk = kk => "specialAction" !== kk.kind,
      bk = (kk, Fk) => {
        if (null === kk || null === Fk) return kk === Fk;
        if (kk.kind !== Fk.kind) return !1;
        switch (kk.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return kk.action === Fk.action;
          case "customButton":
            return kk.id === Fk.id && kk.icon === Fk.icon;
          case "touchButton":
            return kk.label === Fk.label
        }
      }
  },
  8388: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk,
      g: () => Ak,
      j: () => Vk,
      n: () => ek
    });
    var Rk = Bk(61),
      tk = Bk(29),
      ak = Bk(1387),
      Xk = Bk(8396),
      bk = Bk(8407);
    let wk = null;
    const dk = () => wk,
      sk = kk => {
        (0, Xk.m)(wk, kk) || (wk = kk, tk.o.Hf(bk.d, wk))
      },
      Vk = () => {
        const [kk, Fk] = (0, Rk.useState)(dk);
        return (0, ak.f)(bk.d, Fk), kk
      };
    let Jk = !1;
    const Ak = kk => {
        kk !== Jk && (Jk = kk, tk.o.Hf(bk.g, kk))
      },
      ek = () => {
        const [kk, Fk] = (0, Rk.useState)(Jk);
        return (0, ak.f)(bk.g, Fk), kk
      }
  },
  8407: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => Rk,
      g: () => tk,
      k: () => bk,
      l: () => wk,
      m: () => dk,
      o: () => Xk
    });
    const Rk = "controllerActionHintChanged",
      tk = "controllerActionWheelHintChanged",
      ak = "controllerOpenChat",
      Xk = "controllerSneakToggledChanged",
      bk = "controllerAttackLatchedChanged",
      wk = "controllerDropStackHoldChanged",
      dk = "controllerPickBlockHintChanged"
  },
  8352: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      e: () => ak,
      i: () => wk,
      m: () => bk
    });
    var Rk = Bk(1387),
      tk = Bk(1355);
    const ak = "controllerInventoryCursorChanged",
      Xk = {
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
      bk = () => {
        var kk, Fk;
        return (0, Rk.g)(ak, null !== (kk = null === (Fk = (0, tk.d)()) || void 0 === Fk ? void 0 : Fk.getInventoryCursorState()) && void 0 !== kk ? kk : Xk)
      },
      wk = () => {
        var kk, Fk;
        return null !== (kk = null === (Fk = (0, tk.d)()) || void 0 === Fk ? void 0 : Fk.isPadSteppingSlots()) && void 0 !== kk && kk
      }
  },
  8347: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Jk,
      e: () => bk,
      g: () => wk,
      i: () => Xk,
      j: () => ak,
      m: () => sk,
      q: () => Vk
    });
    let Rk = null;
    const tk = new Set,
      ak = kk => (Rk = kk, () => {
        if (Rk === kk) {
          Rk = null;
          for (const kk of tk) kk()
        }
      }),
      Xk = kk => (tk.add(kk), () => {
        tk.delete(kk)
      }),
      bk = () => Rk,
      wk = () => null !== Rk;
    let dk = null;
    const sk = kk => {
        dk = kk
      },
      Vk = () => {
        const kk = dk;
        return dk = null, kk
      },
      Jk = (kk, Fk) => {
        var Bk, Rk;
        return null !== (Bk = null !== (Rk = kk.find((kk => kk.element === Fk))) && void 0 !== Rk ? Rk : kk.find((kk => kk.element.contains(Fk)))) && void 0 !== Bk ? Bk : null
      }
  },
  8354: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      d: () => Xk
    });
    var Rk = Bk(61);
    const tk = new WeakMap,
      ak = kk => {
        var Fk, Bk;
        return null !== (Fk = null === (Bk = tk.get(kk)) || void 0 === Bk ? void 0 : Bk.current) && void 0 !== Fk ? Fk : null
      },
      Xk = (kk, Fk) => {
        const Bk = (0, Rk.useRef)(Fk);
        Bk.current = Fk;
        const ak = (0, Rk.useRef)(null);
        (0, Rk.useEffect)((() => {
          const Fk = kk.current,
            Rk = ak.current;
          Fk !== Rk && (Rk && tk.get(Rk) === Bk && tk.delete(Rk), ak.current = Fk, Fk && tk.set(Fk, Bk))
        })), (0, Rk.useEffect)((() => () => {
          const kk = ak.current;
          kk && tk.get(kk) === Bk && tk.delete(kk), ak.current = null
        }), [])
      }
  },
  8503: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      d: () => dk,
      f: () => Vk,
      i: () => sk,
      j: () => wk,
      n: () => Ak
    });
    var Rk = Bk(29),
      tk = Bk(1912),
      ak = Bk(1355),
      Xk = Bk(1344);
    const bk = kk => {
        var Fk, Bk;
        return (0, Xk.h)() && null !== (Fk = null === (Bk = (0, ak.d)()) || void 0 === Bk ? void 0 : Bk.getGlyphForNoaAction(kk)) && void 0 !== Fk ? Fk : null
      },
      wk = "controllerGlyph:",
      dk = kk => {
        var Fk, Bk;
        return null !== (Fk = null === (Bk = (0, ak.d)()) || void 0 === Bk ? void 0 : Bk.getPadGlyphIconName(kk)) && void 0 !== Fk ? Fk : `${wk}xbox/${kk}`
      },
      sk = kk => kk.startsWith(wk),
      Vk = kk => {
        var Fk, Bk;
        return sk(kk) && null !== (Fk = null === (Bk = (0, ak.d)()) || void 0 === Bk ? void 0 : Bk.getPadGlyphIconUrl(kk)) && void 0 !== Fk ? Fk : null
      },
      Jk = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Xk.d, tk.f, tk.d],
      Ak = kk => {
        const Fk = Jk.map((Fk => Rk.o.subscribe(Fk, kk)));
        return () => {
          for (const kk of Fk) Rk.o.unsubscribe(kk)
        }
      }
  },
  8342: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      e: () => Rk
    });
    const Rk = "controllerOpenKeyboard",
      tk = "controllerKeyboardVisible"
  },
  8372: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      h: () => tk
    });
    let Rk = null;
    const tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Rk = Fk, () => {
          Rk === Fk && (Rk = null)
        }
      },
      ak = () => {
        var kk;
        return null !== (kk = Rk) && void 0 !== kk && kk.canCycle() ? Rk.cycle : null
      }
  },
  8484: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      d: () => Xk,
      g: () => ak,
      k: () => Rk,
      n: () => bk,
      p: () => dk,
      q: () => sk
    });
    const Rk = "controllerActionWheelOpen",
      tk = "controllerActionWheelAim",
      ak = "controllerActionWheelCommit",
      Xk = "controllerActionWheelClose",
      bk = "controllerActionWheelPick";
    let wk = !1;
    const dk = () => wk,
      sk = kk => {
        wk = kk
      }
  },
  8478: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      e: () => tk
    });
    let Rk = 0;
    const tk = () => {
        Rk++
      },
      ak = () => Rk
  },
  8369: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk,
      f: () => tk,
      h: () => Xk,
      i: () => ak,
      m: () => Rk,
      p: () => dk
    });
    const Rk = "controllerQuickChatWheelOpen",
      tk = "controllerQuickChatWheelAim",
      ak = "controllerQuickChatWheelCommit",
      Xk = "controllerQuickChatWheelClose";
    let bk = !1;
    const wk = () => bk,
      dk = kk => {
        bk = kk
      }
  },
  8565: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => wk
    });
    var Rk = Bk(22),
      tk = Bk(1267),
      ak = Bk(98);
    const Xk = {
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

    function bk() {
      return (0, ak.isMobile)() && "function" === typeof navigator.vibrate
    }
    const wk = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, Fk) {
        var Bk;
        if (!this.deps.enabled()) return;
        const Rk = Xk[kk],
          tk = null !== Fk && void 0 !== Fk ? Fk : Rk.pattern;
        if (null === tk) return void console.warn("No vibration pattern for", kk);
        const ak = this.deps.now();
        ak - this.lastAnyAt < 40 && Rk.priority < this.playingPriority || ak - (null !== (Bk = this.lastAt.get(kk)) && void 0 !== Bk ? Bk : -1 / 0) < Rk.minGapMs || ak < this.playingUntil && Rk.priority < this.playingPriority || (this.lastAt.set(kk, ak), this.lastAnyAt = ak, this.playingUntil = ak + tk.reduce(((kk, Fk) => kk + Fk), 0), this.playingPriority = Rk.priority, this.deps.vibrate(tk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => bk() && Rk.c.get("isTouchScreen") && Rk.c.get("clientEscMenuOptions").vibration && !(0, tk.i)()
    })
  },
  8437: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(8445),
      tk = Bk(606),
      ak = Bk(132);

    function Xk(kk) {
      var Fk, Bk;
      if ((0, tk.F)(kk)) return !0;
      const Xk = null !== (Fk = null === (Bk = ak.l[ak.q]) || void 0 === Bk ? void 0 : Bk.adConfig.showRewardedAds) && void 0 !== Fk && Fk;
      for (const tk in kk) {
        const Fk = kk[tk];
        if (null !== Fk && void 0 !== Fk && Fk.items)
          for (const kk in Fk.items)
            if ((0, Rk.k)(Fk.items[kk], Xk)) return !1
      }
      return !0
    }
  },
  8453: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      e: () => Rk
    });
    const Rk = 100;

    function tk(kk) {
      let {
        translationKeys: Fk = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return kk.map((kk => {
        var Bk;
        return null !== (Bk = function(kk, Fk) {
          if ("string" === typeof kk) return kk;
          const Bk = "str" in kk ? kk.str : kk;
          if ("string" === typeof Bk) return Bk;
          if ("entityName" in Bk) return Bk.entityName;
          if (Fk && "translationKey" in Bk) return `{${Bk.translationKey}${void 0===Bk.params?"":` ${JSON.stringify(Bk.params)}`}}`;
          return null
        }(kk, Fk)) && void 0 !== Bk ? Bk : " "
      })).join("")
    }
  },
  8500: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      f: () => bk,
      i: () => wk
    });
    var Rk = Bk(2124),
      tk = Bk(1192),
      ak = Bk(2133);
    const Xk = ",";

    function bk(kk) {
      if (!kk) return [];
      const Fk = new Set,
        Bk = [];
      for (const Rk of kk.split(Xk)) {
        const kk = Rk.trim();
        if ((0, ak.n)(kk) && !Fk.has(kk) && (Fk.add(kk), Bk.push(kk), Bk.length >= tk.l)) break
      }
      return Bk
    }

    function wk(kk) {
      const Fk = new Set,
        Bk = [];
      for (const Rk of kk)
        if ((0, ak.n)(Rk) && !Fk.has(Rk) && (Fk.add(Rk), Bk.push(Rk), Bk.length >= tk.l)) break;
      return Bk.join(Xk)
    }

    function dk() {
      return wk(ak.f)
    }

    function sk(kk) {
      var Fk;
      return "emote" === kk ? dk() : null !== (Fk = Vk[kk][0]) && void 0 !== Fk ? Fk : Jk[kk]
    }
    const Vk = tk.t.reduce(((kk, Fk) => {
        const Bk = [];
        for (const ak in Rk.h[Fk]) {
          var tk;
          "default" === (null === (tk = (0, Rk.o)(Fk, ak)) || void 0 === tk ? void 0 : tk.cosmeticPack) && Bk.push(ak)
        }
        return kk[Fk] = Bk, kk
      }), {}),
      Jk = tk.t.reduce(((kk, Fk) => (kk[Fk] = Object.keys(Rk.h[Fk])[0], kk)), {})
  },
  8445: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return !kk.hidden && (Fk || !kk.isRewardedAd)
    }

    function tk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function ak(kk, Fk) {
      var Bk;
      if ("dropdown" === (null === (Bk = kk.userInput) || void 0 === Bk ? void 0 : Bk.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const Bk of kk.userInput.dropdownOptions)
          if (tk(Bk) === Fk) return "object" === typeof Bk ? Bk.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", Fk)
      }
      return kk.cost
    }

    function Xk(kk, Fk, Bk) {
      var Rk;
      const tk = null !== (Rk = Bk.excludedPlayers) && void 0 !== Rk ? Rk : [Fk];
      return kk.filter((kk => !tk.includes(kk)))
    }
    Bk.d(Fk, {
      c: () => ak,
      g: () => tk,
      i: () => Xk,
      k: () => Rk
    })
  },
  8492: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);