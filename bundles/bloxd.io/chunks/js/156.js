export const id = 156;
export const ids = [156];
export const modules = {
  8624: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => qk,
      f: () => dk,
      j: () => Vk
    });
    var Dk = ik(60),
      fk = ik(4482),
      Sk = ik(1095),
      bk = ik(1406),
      rk = ik(26),
      Pk = ik(3398),
      mk = ik(2201),
      Mk = ik(1218),
      Kk = ik(8658),
      xk = ik(1893),
      nk = ik(1922),
      Uk = ik(1172),
      Hk = ik(22),
      wk = ik(1614),
      lk = ik(1021),
      pk = ik.n(lk),
      yk = ik(8631),
      Yk = ik(8637),
      Lk = ik(8645),
      Ck = ik(8556),
      Ak = ik(8647),
      jk = (ik(8653), ik(1066));
    let sk = null;

    function dk() {
      return null !== sk
    }

    function Vk() {
      return "pad" === sk
    }

    function Fk() {
      return "inGame" === Hk.b.get("gameState") && !(0, wk.s)()
    }

    function uk(kk) {
      return (0, Yk.p)(kk, Mk.o, Yk.d, Yk.f, Yk.g)
    }
    const qk = (0, Dk.memo)((function() {
      const {
        t: kk
      } = (0, Uk.D)(), {
        userContext: ek
      } = (0, Sk.d)(), [ik, Hk] = (0, Dk.useState)(null), [lk, dk] = (0, Dk.useState)(null), Vk = (0, Dk.useRef)(null), qk = (0, Dk.useCallback)((kk => {
        Vk.current = kk, dk(kk)
      }), []), Ik = (0, Dk.useRef)(0), zk = (0, Dk.useRef)(null), Qk = (0, Dk.useRef)({
        x: 0,
        y: 0
      }), [vk, Ek] = (0, Dk.useState)(0), hk = (0, Dk.useMemo)((() => function(kk) {
        const ek = [];
        for (let Dk = 0; Dk < Mk.o; Dk++) {
          var ik;
          ek.push(null !== (ik = kk[Dk]) && void 0 !== ik ? ik : null)
        }
        return ek
      }((0, Kk.f)(ek.getPlayerCosmetics().emote))), [ek, vk]);
      (0, nk.c)("cosmeticsUpdated", (kk => {
        kk.some((kk => kk.local && "emote" === kk.YD)) && Ek((kk => kk + 1))
      }));
      const ak = (0, Dk.useRef)(!1),
        Wk = (0, Dk.useCallback)((function(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === kk && (0, Lk.g)(), ak.current = ek, Qk.current = {
            x: 0,
            y: 0
          }, qk(null), Hk(kk)
        }), [qk]),
        tk = (0, Dk.useCallback)((() => {
          Hk(null), qk(null), Qk.current = {
            x: 0,
            y: 0
          }
        }), [qk]),
        Xk = (0, Dk.useCallback)((kk => {
          if (Date.now() < Ik.current) return;
          const ek = (0, mk.g)(kk),
            ik = !!ek.holdUntilMove,
            Dk = ik ? 600 : Math.ceil(1e3 * ek.animation.animation_length / mk.d) + 200;
          Ik.current = Date.now() + Dk, zk.current = kk, xk.gameBridge.send("playEmote", kk), xk.gameBridge.send("applyTemporaryThirdPerson", ik ? {} : {
            durationMs: Dk
          })
        }), []);
      (0, bk.c)("requestToggleEmoteWheel", (() => {
        null === ik ? Fk() && Wk("click") : tk()
      })), (0, bk.c)("requestEmoteWheelHoldOpen", (() => {
        null === ik && Fk() && Wk((0, yk.c)() ? "hold" : "click")
      })), (0, bk.c)("requestEmoteWheelPadOpen", (kk => {
        null !== ik || !Fk() || (0, Ck.b)() || (0, Ak.q)() || Wk("pad", kk)
      })), (0, bk.c)("requestEmoteRepeatLast", (() => {
        if (null !== ik || !Fk() || (0, Ck.b)() || (0, Ak.q)()) return;
        const kk = zk.current;
        null !== kk && hk.includes(kk) ? Xk(kk) : Wk("pad", !0)
      }));
      const Bk = () => {
        const kk = Vk.current,
          ek = null !== kk ? hk[kk] : null;
        null !== ek && "pad" === ik && Date.now() < Ik.current || (tk(), null !== ek && Xk(ek))
      };
      (0, bk.c)("emoteWheelPadAim", (kk => {
        if ("pad" !== ik) return;
        const ek = (0, Yk.C)(kk, Mk.o, Vk.current);
        qk(null !== ek && null !== hk[ek] ? ek : null)
      })), (0, bk.c)("requestEmoteWheelPadCommit", (kk => {
        "pad" !== ik || kk && ak.current || Bk()
      })), (0, bk.c)("appManagerUpdated|activeInputDevice", (kk => {
        null !== ik && "pad" === ik !== ("gamepad" === kk) && tk()
      })), (0, Dk.useLayoutEffect)((() => (sk = ik, (0, Pk.s)("emoteWheel", "pad" === ik), rk.j.tm(Pk.k), () => {
        sk = null, (0, Pk.s)("emoteWheel", !1), rk.j.tm(Pk.k)
      })), [ik]), (0, bk.c)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ik && Bk()
      })), (0, bk.c)("requestEmoteWheelClose", (() => {
        null !== ik && tk()
      })), (0, bk.c)("appManagerUpdated|gameState", (kk => {
        "inGame" !== kk && tk()
      }));
      const ck = () => {
        (0, wk.s)() && tk()
      };
      if ((0, bk.c)("appManagerUpdated|openEverythingMenuName", ck), (0, bk.c)("appManagerUpdated|openInGameMenuName", ck), (0, bk.c)("pointerLockUpdate", (kk => {
          kk || "hold" !== ik || tk()
        })), (0, Dk.useEffect)((() => {
          if (null === ik) return;
          const kk = kk => {
            "Escape" === kk.key && (kk.stopImmediatePropagation(), kk.preventDefault(), tk())
          };
          return document.addEventListener("keydown", kk, !0), () => {
            document.removeEventListener("keydown", kk, !0)
          }
        }), [ik, tk]), (0, fk.c)(!0, "click" === ik, "EmoteWheelOverlay"), (0, Dk.useEffect)((() => {
          if ("hold" === ik) return xk.gameBridge.send("holdEmoteWheel", !0), () => {
            xk.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ik]), (0, Dk.useEffect)((() => {
          if ("hold" !== ik) return;
          const kk = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            ek = Yk.o * kk,
            Dk = Yk.k * kk,
            fk = kk => {
              let ik = Qk.current.x + kk.movementX,
                fk = Qk.current.y + kk.movementY;
              const Sk = Math.hypot(ik, fk);
              if (Sk > ek) {
                const kk = ek / Sk;
                ik *= kk, fk *= kk
              }
              Qk.current = {
                x: ik,
                y: fk
              }, qk(function(kk, ek, ik, Dk) {
                if (Math.hypot(kk, ek) < ik) return null;
                const fk = (0, Yk.r)(kk, ek, Mk.o);
                return null === Dk[fk] ? null : fk
              }(ik, fk, Dk, hk))
            };
          return document.addEventListener("mousemove", fk), () => {
            document.removeEventListener("mousemove", fk)
          }
        }), [ik, hk, qk]), null === ik) return null;
      const Tk = "hold" === ik || "pad" === ik,
        Zk = null !== lk ? hk[lk] : null,
        Ok = null !== Zk ? (0, mk.g)(Zk).displayName : kk("emotes:pickEmote");
      return (0, jk.jsx)("div", {
        className: pk()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ik
        }),
        onMouseDown: kk => {
          kk.target === kk.currentTarget && tk()
        },
        children: (0, jk.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Yk.o + "rem",
            height: 2 * Yk.o + "rem"
          },
          children: [(0, jk.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Yk.i} ${Yk.i}`,
            children: [hk.map(((ek, ik) => {
              const Dk = null !== ek,
                fk = Tk && ik === lk;
              return (0, jk.jsx)("path", {
                d: uk(ik),
                className: pk()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: fk,
                  EmoteWheelWedgeDisabled: !Dk
                }),
                onClick: kk => {
                  kk.stopPropagation(), null !== ek && (kk => {
                    tk(), Xk(kk)
                  })(ek)
                },
                "aria-label": null !== ek ? (0, mk.g)(ek).displayName : kk("emotes:emptySlot")
              }, ik)
            })), (0, jk.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Yk.d,
              cy: Yk.d,
              r: Yk.g
            }), (0, jk.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Yk.d,
              cy: Yk.d,
              r: Yk.f
            }), Tk && null !== lk && (0, jk.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: uk(lk)
            })]
          }), hk.map(((kk, ek) => {
            const ik = null !== kk,
              Dk = Tk && ek === lk,
              fk = (0, Yk.v)(ek, Mk.o),
              Sk = Yk.c * Math.cos(fk),
              bk = Yk.c * Math.sin(fk);
            return (0, jk.jsx)("div", {
              className: pk()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Dk,
                EmoteWheelSlotIconDisabled: !ik
              }),
              style: {
                left: `calc(50% + ${Sk}rem)`,
                top: `calc(50% + ${bk}rem)`,
                backgroundImage: ik ? `url(/textures/charSkins/previews/emote_${kk}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, ek)
          })), (0, jk.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Ok
          })]
        })
      })
    }))
  },
  8614: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Kk,
      e: () => Uk,
      i: () => Hk,
      j: () => nk,
      n: () => xk
    });
    var Dk = ik(60),
      fk = ik(8620),
      Sk = ik(26),
      bk = ik(1893),
      rk = ik(38),
      Pk = ik(1240),
      mk = ik(1911);
    const Mk = 50;
    const Kk = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = kk => {
          if (0 === this.listeners.size) {
            var ek, ik;
            this.state = {
              ...this.state,
              channel: null !== (ek = null === (ik = mk.c.get("chatChannels")) || void 0 === ik ? void 0 : ik[0]) && void 0 !== ek ? ek : null
            };
            const kk = Sk.j.subscribe("reportPlayer", (kk => {
              let {
                playerEId: ek
              } = kk;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, ek]
              })
            }));
            this.stopListening = [bk.gameBridge.subscribe("chatReceived", (kk => {
              let {
                serverChatMsgId: ek,
                content: ik,
                author: Dk
              } = kk;
              this.addMessage(ek, ik, Dk)
            })), () => {
              Sk.j.unsubscribe(kk)
            }, mk.c.subscribe("chatChannels", (kk => {
              var ek;
              this.setState({
                ...this.state,
                channel: null !== (ek = null === kk || void 0 === kk ? void 0 : kk[0]) && void 0 !== ek ? ek : null
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
      addMessage(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Dk = {
          serverChatMsgId: kk,
          content: ek,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: ik
        };
        this.setState({
          ...this.state,
          messages: [Dk, ...this.state.messages].slice(0, fk.g)
        })
      }
      selectNextChannel() {
        const kk = mk.c.get("chatChannels");
        if (kk) {
          const ek = kk.findIndex((kk => {
            var ek;
            return kk.channelName === (null === (ek = this.state.channel) || void 0 === ek ? void 0 : ek.channelName)
          }));
          this.setState({
            ...this.state,
            channel: kk[(ek + 1) % kk.length]
          })
        }
      }
      setState(kk) {
        this.state = kk;
        for (const ek of this.listeners) ek()
      }
    };

    function xk() {
      const [kk, ek] = (0, Dk.useState)(Kk.getState);
      return (0, Dk.useEffect)((() => {
        const kk = Kk.subscribe((() => {
          ek(Kk.getState())
        }));
        return ek(Kk.getState()), kk
      }), []), kk
    }

    function nk(kk) {
      var ek, ik;
      if (kk.startsWith("/report")) {
        var Dk;
        const ek = null !== (Dk = kk.replace("/report", "").trim().split(" ")[0]) && void 0 !== Dk ? Dk : "";
        if ("" === ek) return void Kk.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const ik = bk.gameBridge.latest("players"),
          fk = bk.gameBridge.latest("hiddenPlayerNames"),
          rk = kk => {
            var Dk, Sk;
            const bk = null !== (Dk = null === (Sk = ik.byId[kk]) || void 0 === Sk ? void 0 : Sk.name) && void 0 !== Dk ? Dk : null;
            return null !== bk && (bk === ek || (0, Pk.c)(bk, fk) === ek)
          };
        if (null !== ik.localId && rk(ik.localId)) return void Kk.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const kk of ik.ids)
          if (rk(kk)) return Sk.j.tm("OpenReportMenu", {
            playerEId: kk,
            playerName: ik.byId[kk].name,
            hM: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Kk.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      bk.gameBridge.send("sendChatMessage", {
          hM: kk,
          channelName: null !== (ek = null === (ik = Kk.getState().channel) || void 0 === ik ? void 0 : ik.channelName) && void 0 !== ek ? ek : null
        }),
        function(kk) {
          var ek;
          const ik = null !== (ek = rk.f.getItem("recentlySentChatMsgs")) && void 0 !== ek ? ek : [];
          ik.push(kk), ik.length > Mk && ik.shift();
          rk.f.setItem("recentlySentChatMsgs", ik)
        }(kk)
    }

    function Uk() {
      var kk;
      return null !== (kk = rk.f.getItem("recentlySentChatMsgs")) && void 0 !== kk ? kk : []
    }

    function Hk(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Dk = null !== (ek = rk.f.getItem("recentlySentChatMsgs")) && void 0 !== ek ? ek : [],
        fk = Dk.length + 1,
        Sk = ik ? (kk % fk + fk) % fk : Math.min(Dk.length, Math.max(0, kk));
      return {
        stepsBack: Sk,
        text: 0 === Sk ? "" : Dk[Dk.length - Sk]
      }
    }
  },
  8580: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      e: () => Sk
    });
    var Dk = ik(1946);
    const fk = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Sk = kk => "string" === typeof kk.icon && "" !== kk.icon && "string" === typeof kk.keycode && fk.test(kk.keycode),
      bk = kk => "Space" === kk ? "_" : Dk.j[kk]
  },
  8631: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(22);

    function fk() {
      return !Dk.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8712: (kk, ek, ik) => {
    function Dk(kk) {
      return {
        x: (kk.left + kk.right) / 2,
        y: (kk.top + kk.bottom) / 2
      }
    }

    function fk(kk) {
      return 0 === kk.length ? null : kk.reduce(((kk, ek) => ({
        left: Math.min(kk.left, ek.left),
        top: Math.min(kk.top, ek.top),
        right: Math.max(kk.right, ek.right),
        bottom: Math.max(kk.bottom, ek.bottom)
      })))
    }

    function Sk(kk, ek) {
      const ik = Math.max(0, (ek - (kk.right - kk.left)) / 2),
        Dk = Math.max(0, (ek - (kk.bottom - kk.top)) / 2);
      return {
        left: kk.left - ik,
        top: kk.top - Dk,
        right: kk.right + ik,
        bottom: kk.bottom + Dk
      }
    }

    function bk(kk, ek) {
      return ek.x >= kk.left && ek.x <= kk.right && ek.y >= kk.top && ek.y <= kk.bottom
    }

    function rk(kk, ek, ik) {
      let fk = null,
        rk = 1 / 0;
      for (const {
          id: Dk,
          box: Sk
        }
        of ek) {
        const ek = (Sk.right - Sk.left) * (Sk.bottom - Sk.top);
        bk(Sk, kk) && ek < rk && (rk = ek, fk = Dk)
      }
      if (null !== fk) return fk;
      let Pk = 1 / 0;
      for (const {
          id: mk,
          box: Mk
        }
        of ek) {
        if (!bk(Sk(Mk, ik), kk)) continue;
        const ek = Dk(Mk),
          rk = Math.hypot(kk.x - ek.x, kk.y - ek.y);
        rk < Pk && (Pk = rk, fk = mk)
      }
      return fk
    }

    function Pk(kk, ek, ik) {
      return {
        left: ik.left,
        top: ik.top,
        right: kk - ik.right,
        bottom: ek - ik.bottom
      }
    }

    function mk(kk, ek, ik, Dk) {
      const fk = (kk, ek, ik) => Math.max(Math.min(ek, 0), Math.min(Math.max(ik, 0), kk));
      return {
        x: fk(ek, Dk.left - kk.left, Dk.right - kk.right),
        y: fk(ik, Dk.top - kk.top, Dk.bottom - kk.bottom)
      }
    }

    function Mk(kk, ek, ik, Dk, fk) {
      const Sk = kk.dx * Dk + ek,
        bk = kk.dy * fk + ik,
        rk = kk => Math.max(-1, Math.min(1, kk));
      return {
        dx: rk(Sk / Dk),
        dy: rk(bk / fk)
      }
    }

    function Kk(kk, ek, ik, Dk) {
      return ek <= 0 || ik <= 0 ? 1 : Math.max(.05, Math.min(1, kk / ek, Dk / ik))
    }

    function xk(kk, ek, ik) {
      return Math.min(kk.right, ek.right) - Math.max(kk.left, ek.left) > ik && Math.min(kk.bottom, ek.bottom) - Math.max(kk.top, ek.top) > ik
    }

    function nk(kk, ek) {
      const ik = (kk, ek, ik, Dk) => ek - kk > Dk - ik ? ik - kk > ek - Dk ? Dk - ek : ik - kk : kk < ik ? ik - kk : ek > Dk ? Dk - ek : 0;
      return {
        x: ik(kk.left, kk.right, ek.left, ek.right),
        y: ik(kk.top, kk.bottom, ek.top, ek.bottom)
      }
    }

    function Uk(kk, ek) {
      let {
        avoid: ik = null,
        bounds: Dk = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, fk = 0, Sk = 1 / 0;
      return kk.forEach(((kk, bk) => {
        const rk = ek.filter((ek => xk(kk, ek, 0))).length,
          Pk = null !== Dk && (kk.left < Dk.left || kk.top < Dk.top || kk.right > Dk.right || kk.bottom > Dk.bottom),
          mk = rk + (ik && xk(kk, ik, 0) ? 1e3 : 0) + (Pk ? 1e6 : 0);
        mk < Sk && (fk = bk, Sk = mk)
      })), fk
    }
    ik.d(ek, {
      A: () => fk,
      c: () => Dk,
      d: () => bk,
      h: () => xk,
      i: () => mk,
      m: () => Sk,
      o: () => Uk,
      q: () => Mk,
      u: () => rk,
      v: () => Kk,
      x: () => Pk,
      z: () => nk
    })
  },
  8637: (kk, ek, ik) => {
    ik.d(ek, {
      C: () => nk,
      c: () => Sk,
      d: () => rk,
      f: () => mk,
      g: () => Pk,
      i: () => bk,
      k: () => fk,
      o: () => Dk,
      p: () => Uk,
      r: () => Kk,
      v: () => Mk,
      y: () => xk
    });
    const Dk = 14,
      fk = 6,
      Sk = (Dk + fk) / 2,
      bk = 200,
      rk = bk / 2,
      Pk = bk / 2 - 1,
      mk = fk / Dk * (bk / 2),
      Mk = (kk, ek) => -Math.PI / 2 + 2 * kk * Math.PI / ek,
      Kk = (kk, ek, ik) => {
        const Dk = 2 * Math.PI / ik;
        return (Math.round((Math.atan2(ek, kk) + Math.PI / 2) / Dk) % ik + ik) % ik
      },
      xk = .5,
      nk = (kk, ek, ik) => Math.hypot(kk.x, kk.y) < xk ? ik : Kk(kk.x, kk.y, ek),
      Uk = (kk, ek, ik, Dk, fk) => {
        const Sk = Math.PI / ek,
          bk = Mk(kk, ek),
          rk = bk - Sk,
          Pk = bk + Sk,
          mk = (kk, ek) => `${ik+kk*Math.cos(ek)} ${ik+kk*Math.sin(ek)}`;
        return [`M ${mk(Dk,rk)}`, `L ${mk(fk,rk)}`, `A ${fk} ${fk} 0 0 1 ${mk(fk,Pk)}`, `L ${mk(Dk,Pk)}`, `A ${Dk} ${Dk} 0 0 0 ${mk(Dk,rk)}`, "Z"].join(" ")
      }
  },
  8674: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk
    });
    var Dk = ik(60),
      fk = ik(8607),
      Sk = ik(2414);

    function bk() {
      const kk = (0, Sk.e)("shopInfo"),
        [, ek] = (0, Dk.useReducer)((kk => kk + 1), 0);
      return (0, Sk.d)("shopInfo", ek), !(0, fk.c)(kk)
    }
  },
  8576: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      d: () => bk,
      h: () => rk,
      l: () => fk
    });
    var Dk = ik(8580);
    const fk = kk => {
        const ek = [];
        kk.holdingGun && ek.push({
          kind: "reload"
        }), kk.touchscreenActionButton && ek.push({
          kind: "touchButton",
          label: kk.touchscreenActionButton
        });
        for (const Sk of null !== (ik = null === (fk = kk.customButtons) || void 0 === fk ? void 0 : fk.filter(Dk.e)) && void 0 !== ik ? ik : []) {
          var ik, fk;
          ek.push({
            kind: "customButton",
            id: Sk.id,
            icon: Sk.icon,
            description: Sk.description
          })
        }
        return ek
      },
      Sk = kk => kk.length >= 2,
      bk = kk => "specialAction" !== kk.kind,
      rk = (kk, ek) => {
        if (null === kk || null === ek) return kk === ek;
        if (kk.kind !== ek.kind) return !1;
        switch (kk.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return kk.action === ek.action;
          case "customButton":
            return kk.id === ek.id && kk.icon === ek.icon;
          case "touchButton":
            return kk.label === ek.label
        }
      }
  },
  8570: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk,
      e: () => nk,
      h: () => Kk,
      j: () => Uk
    });
    var Dk = ik(60),
      fk = ik(26),
      Sk = ik(1406),
      bk = ik(8576),
      rk = ik(8588);
    let Pk = null;
    const mk = () => Pk,
      Mk = kk => {
        (0, bk.h)(Pk, kk) || (Pk = kk, fk.j.tm(rk.g, Pk))
      },
      Kk = () => {
        const [kk, ek] = (0, Dk.useState)(mk);
        return (0, Sk.c)(rk.g, ek), kk
      };
    let xk = !1;
    const nk = kk => {
        kk !== xk && (xk = kk, fk.j.tm(rk.j, kk))
      },
      Uk = () => {
        const [kk, ek] = (0, Dk.useState)(xk);
        return (0, Sk.c)(rk.j, ek), kk
      }
  },
  8588: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      g: () => Dk,
      j: () => fk,
      k: () => rk,
      o: () => Pk,
      s: () => mk,
      t: () => bk
    });
    const Dk = "controllerActionHintChanged",
      fk = "controllerActionWheelHintChanged",
      Sk = "controllerOpenChat",
      bk = "controllerSneakToggledChanged",
      rk = "controllerAttackLatchedChanged",
      Pk = "controllerDropStackHoldChanged",
      mk = "controllerPickBlockHintChanged"
  },
  8536: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      f: () => Sk,
      g: () => Pk,
      k: () => rk
    });
    var Dk = ik(1406),
      fk = ik(1375);
    const Sk = "controllerInventoryCursorChanged",
      bk = {
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
      rk = () => {
        var kk, ek;
        return (0, Dk.e)(Sk, null !== (kk = null === (ek = (0, fk.h)()) || void 0 === ek ? void 0 : ek.getInventoryCursorState()) && void 0 !== kk ? kk : bk)
      },
      Pk = () => {
        var kk, ek;
        return null !== (kk = null === (ek = (0, fk.h)()) || void 0 === ek ? void 0 : ek.isPadSteppingSlots()) && void 0 !== kk && kk
      }
  },
  8530: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk,
      i: () => rk,
      m: () => Pk,
      o: () => bk,
      p: () => Sk,
      t: () => Mk,
      x: () => Kk
    });
    let Dk = null;
    const fk = new Set,
      Sk = kk => (Dk = kk, () => {
        if (Dk === kk) {
          Dk = null;
          for (const kk of fk) kk()
        }
      }),
      bk = kk => (fk.add(kk), () => {
        fk.delete(kk)
      }),
      rk = () => Dk,
      Pk = () => null !== Dk;
    let mk = null;
    const Mk = kk => {
        mk = kk
      },
      Kk = () => {
        const kk = mk;
        return mk = null, kk
      },
      xk = (kk, ek) => {
        var ik, Dk;
        return null !== (ik = null !== (Dk = kk.find((kk => kk.element === ek))) && void 0 !== Dk ? Dk : kk.find((kk => kk.element.contains(ek)))) && void 0 !== ik ? ik : null
      }
  },
  8538: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      h: () => bk
    });
    var Dk = ik(60);
    const fk = new WeakMap,
      Sk = kk => {
        var ek, ik;
        return null !== (ek = null === (ik = fk.get(kk)) || void 0 === ik ? void 0 : ik.current) && void 0 !== ek ? ek : null
      },
      bk = (kk, ek) => {
        const ik = (0, Dk.useRef)(ek);
        ik.current = ek;
        const Sk = (0, Dk.useRef)(null);
        (0, Dk.useEffect)((() => {
          const ek = kk.current,
            Dk = Sk.current;
          ek !== Dk && (Dk && fk.get(Dk) === ik && fk.delete(Dk), Sk.current = ek, ek && fk.set(ek, ik))
        })), (0, Dk.useEffect)((() => () => {
          const kk = Sk.current;
          kk && fk.get(kk) === ik && fk.delete(kk), Sk.current = null
        }), [])
      }
  },
  8662: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => mk,
      e: () => Kk,
      h: () => Mk,
      l: () => Pk,
      m: () => nk
    });
    var Dk = ik(26),
      fk = ik(1969),
      Sk = ik(1375),
      bk = ik(1371);
    const rk = kk => {
        var ek, ik;
        return (0, bk.d)() && null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getGlyphForNoaAction(kk)) && void 0 !== ek ? ek : null
      },
      Pk = "controllerGlyph:",
      mk = kk => {
        var ek, ik;
        return null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getPadGlyphIconName(kk)) && void 0 !== ek ? ek : `${Pk}xbox/${kk}`
      },
      Mk = kk => kk.startsWith(Pk),
      Kk = kk => {
        var ek, ik;
        return Mk(kk) && null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getPadGlyphIconUrl(kk)) && void 0 !== ek ? ek : null
      },
      xk = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", bk.b, fk.i, fk.e],
      nk = kk => {
        const ek = xk.map((ek => Dk.j.subscribe(ek, kk)));
        return () => {
          for (const kk of ek) Dk.j.unsubscribe(kk)
        }
      }
  },
  8511: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      f: () => Dk
    });
    const Dk = "controllerOpenKeyboard",
      fk = "controllerKeyboardVisible"
  },
  8560: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    let Dk = null;
    const fk = function(kk) {
        const ek = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Dk = ek, () => {
          Dk === ek && (Dk = null)
        }
      },
      Sk = () => {
        var kk;
        return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
      }
  },
  8647: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      g: () => bk,
      k: () => Sk,
      n: () => Dk,
      o: () => rk,
      q: () => mk,
      s: () => Mk
    });
    const Dk = "controllerActionWheelOpen",
      fk = "controllerActionWheelAim",
      Sk = "controllerActionWheelCommit",
      bk = "controllerActionWheelClose",
      rk = "controllerActionWheelPick";
    let Pk = !1;
    const mk = () => Pk,
      Mk = kk => {
        Pk = kk
      }
  },
  8645: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => fk
    });
    let Dk = 0;
    const fk = () => {
        Dk++
      },
      Sk = () => Dk
  },
  8556: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk,
      f: () => fk,
      g: () => bk,
      h: () => Sk,
      l: () => Dk,
      n: () => mk
    });
    const Dk = "controllerQuickChatWheelOpen",
      fk = "controllerQuickChatWheelAim",
      Sk = "controllerQuickChatWheelCommit",
      bk = "controllerQuickChatWheelClose";
    let rk = !1;
    const Pk = () => rk,
      mk = kk => {
        rk = kk
      }
  },
  8708: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      e: () => Pk
    });
    var Dk = ik(22),
      fk = ik(1302),
      Sk = ik(99);
    const bk = {
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

    function rk() {
      return (0, Sk.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Pk = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, ek) {
        var ik;
        if (!this.deps.enabled()) return;
        const Dk = bk[kk],
          fk = null !== ek && void 0 !== ek ? ek : Dk.pattern;
        if (null === fk) return void console.warn("No vibration pattern for", kk);
        const Sk = this.deps.now();
        Sk - this.lastAnyAt < 40 && Dk.priority < this.playingPriority || Sk - (null !== (ik = this.lastAt.get(kk)) && void 0 !== ik ? ik : -1 / 0) < Dk.minGapMs || Sk < this.playingUntil && Dk.priority < this.playingPriority || (this.lastAt.set(kk, Sk), this.lastAnyAt = Sk, this.playingUntil = Sk + fk.reduce(((kk, ek) => kk + ek), 0), this.playingPriority = Dk.priority, this.deps.vibrate(fk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => rk() && Dk.b.get("isTouchScreen") && Dk.b.get("clientEscMenuOptions").vibration && !(0, fk.e)()
    })
  },
  8607: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    var Dk = ik(8611),
      fk = ik(594),
      Sk = ik(131);

    function bk(kk) {
      var ek, ik;
      if ((0, fk.F)(kk)) return !0;
      const bk = null !== (ek = null === (ik = Sk.p[Sk.t]) || void 0 === ik ? void 0 : ik.adConfig.showRewardedAds) && void 0 !== ek && ek;
      for (const fk in kk) {
        const ek = kk[fk];
        if (null !== ek && void 0 !== ek && ek.items)
          for (const kk in ek.items)
            if ((0, Dk.m)(ek.items[kk], bk)) return !1
      }
      return !0
    }
  },
  8620: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      g: () => Dk
    });
    const Dk = 100;

    function fk(kk) {
      let {
        translationKeys: ek = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return kk.map((kk => {
        var ik;
        return null !== (ik = function(kk, ek) {
          if ("string" === typeof kk) return kk;
          const ik = "str" in kk ? kk.str : kk;
          if ("string" === typeof ik) return ik;
          if ("entityName" in ik) return ik.entityName;
          if (ek && "translationKey" in ik) return `{${ik.translationKey}${void 0===ik.params?"":` ${JSON.stringify(ik.params)}`}}`;
          return null
        }(kk, ek)) && void 0 !== ik ? ik : " "
      })).join("")
    }
  },
  8658: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      f: () => rk,
      i: () => Pk
    });
    var Dk = ik(2195),
      fk = ik(1218),
      Sk = ik(2201);
    const bk = ",";

    function rk(kk) {
      if (!kk) return [];
      const ek = new Set,
        ik = [];
      for (const Dk of kk.split(bk)) {
        const kk = Dk.trim();
        if ((0, Sk.i)(kk) && !ek.has(kk) && (ek.add(kk), ik.push(kk), ik.length >= fk.o)) break
      }
      return ik
    }

    function Pk(kk) {
      const ek = new Set,
        ik = [];
      for (const Dk of kk)
        if ((0, Sk.i)(Dk) && !ek.has(Dk) && (ek.add(Dk), ik.push(Dk), ik.length >= fk.o)) break;
      return ik.join(bk)
    }

    function mk() {
      return Pk(Sk.f)
    }

    function Mk(kk) {
      var ek;
      return "emote" === kk ? mk() : null !== (ek = Kk[kk][0]) && void 0 !== ek ? ek : xk[kk]
    }
    const Kk = fk.y.reduce(((kk, ek) => {
        const ik = [];
        for (const Sk in Dk.f[ek]) {
          var fk;
          "default" === (null === (fk = (0, Dk.j)(ek, Sk)) || void 0 === fk ? void 0 : fk.cosmeticPack) && ik.push(Sk)
        }
        return kk[ek] = ik, kk
      }), {}),
      xk = fk.y.reduce(((kk, ek) => (kk[ek] = Object.keys(Dk.f[ek])[0], kk)), {})
  },
  8611: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return !kk.hidden && (ek || !kk.isRewardedAd)
    }

    function fk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function Sk(kk, ek) {
      var ik;
      if ("dropdown" === (null === (ik = kk.userInput) || void 0 === ik ? void 0 : ik.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const ik of kk.userInput.dropdownOptions)
          if (fk(ik) === ek) return "object" === typeof ik ? ik.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", ek)
      }
      return kk.cost
    }

    function bk(kk, ek, ik) {
      var Dk;
      const fk = null !== (Dk = ik.excludedPlayers) && void 0 !== Dk ? Dk : [ek];
      return kk.filter((kk => !fk.includes(kk)))
    }
    ik.d(ek, {
      c: () => Sk,
      e: () => fk,
      i: () => bk,
      m: () => Dk
    })
  },
  8653: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);