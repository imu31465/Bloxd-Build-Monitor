export const id = 150;
export const ids = [150];
export const modules = {
  8510: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Uu,
      i: () => Du,
      l: () => Mu
    });
    var Eu = yu(64),
      Ku = yu(4314),
      Qu = yu(1107),
      mu = yu(1400),
      Ju = yu(34),
      Nu = yu(3220),
      Xu = yu(2132),
      Vu = yu(1215),
      ru = yu(8555),
      Bu = yu(1855),
      xu = yu(1899),
      Su = yu(1170),
      pu = yu(27),
      Tu = yu(1583),
      Wu = yu(1035),
      ju = yu.n(Wu),
      Hu = yu(8516),
      du = yu(8525),
      bu = yu(8531),
      Cu = yu(8445),
      ku = yu(8539),
      eu = (yu(8548), yu(1079));
    let Au = null;

    function Du() {
      return null !== Au
    }

    function Mu() {
      return "pad" === Au
    }

    function Iu() {
      return "inGame" === pu.d.get("gameState") && !(0, Tu.p)()
    }

    function Gu(uu) {
      return (0, du.q)(uu, Vu.p, du.d, du.f, du.g)
    }
    const Uu = (0, Eu.memo)((function() {
      const {
        t: uu
      } = (0, Su.E)(), {
        userContext: Ru
      } = (0, Qu.d)(), [yu, pu] = (0, Eu.useState)(null), [Wu, Du] = (0, Eu.useState)(null), Mu = (0, Eu.useRef)(null), Uu = (0, Eu.useCallback)((uu => {
        Mu.current = uu, Du(uu)
      }), []), nu = (0, Eu.useRef)(0), su = (0, Eu.useRef)(null), tu = (0, Eu.useRef)({
        x: 0,
        y: 0
      }), [lu, gu] = (0, Eu.useState)(0), cu = (0, Eu.useMemo)((() => function(uu) {
        const Ru = [];
        for (let Eu = 0; Eu < Vu.p; Eu++) {
          var yu;
          Ru.push(null !== (yu = uu[Eu]) && void 0 !== yu ? yu : null)
        }
        return Ru
      }((0, ru.d)(Ru.getPlayerCosmetics().emote))), [Ru, lu]);
      (0, xu.d)("cosmeticsUpdated", (uu => {
        uu.some((uu => uu.local && "emote" === uu.Py)) && gu((uu => uu + 1))
      }));
      const Lu = (0, Eu.useRef)(!1),
        zu = (0, Eu.useCallback)((function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === uu && (0, bu.g)(), Lu.current = Ru, tu.current = {
            x: 0,
            y: 0
          }, Uu(null), pu(uu)
        }), [Uu]),
        Fu = (0, Eu.useCallback)((() => {
          pu(null), Uu(null), tu.current = {
            x: 0,
            y: 0
          }
        }), [Uu]),
        wu = (0, Eu.useCallback)((uu => {
          if (Date.now() < nu.current) return;
          const Ru = (0, Xu.i)(uu),
            yu = !!Ru.holdUntilMove,
            Eu = yu ? 600 : Math.ceil(1e3 * Ru.animation.animation_length / Xu.d) + 200;
          nu.current = Date.now() + Eu, su.current = uu, Bu.gameBridge.send("playEmote", uu), Bu.gameBridge.send("applyTemporaryThirdPerson", yu ? {} : {
            durationMs: Eu
          })
        }), []);
      (0, mu.e)("requestToggleEmoteWheel", (() => {
        null === yu ? Iu() && zu("click") : Fu()
      })), (0, mu.e)("requestEmoteWheelHoldOpen", (() => {
        null === yu && Iu() && zu((0, Hu.e)() ? "hold" : "click")
      })), (0, mu.e)("requestEmoteWheelPadOpen", (uu => {
        null !== yu || !Iu() || (0, Cu.e)() || (0, ku.t)() || zu("pad", uu)
      })), (0, mu.e)("requestEmoteRepeatLast", (() => {
        if (null !== yu || !Iu() || (0, Cu.e)() || (0, ku.t)()) return;
        const uu = su.current;
        null !== uu && cu.includes(uu) ? wu(uu) : zu("pad", !0)
      }));
      const Zu = () => {
        const uu = Mu.current,
          Ru = null !== uu ? cu[uu] : null;
        null !== Ru && "pad" === yu && Date.now() < nu.current || (Fu(), null !== Ru && wu(Ru))
      };
      (0, mu.e)("emoteWheelPadAim", (uu => {
        if ("pad" !== yu) return;
        const Ru = (0, du.A)(uu, Vu.p, Mu.current);
        Uu(null !== Ru && null !== cu[Ru] ? Ru : null)
      })), (0, mu.e)("requestEmoteWheelPadCommit", (uu => {
        "pad" !== yu || uu && Lu.current || Zu()
      })), (0, mu.e)("appManagerUpdated|activeInputDevice", (uu => {
        null !== yu && "pad" === yu !== ("gamepad" === uu) && Fu()
      })), (0, Eu.useLayoutEffect)((() => (Au = yu, (0, Nu.p)("emoteWheel", "pad" === yu), Ju.k.Op(Nu.k), () => {
        Au = null, (0, Nu.p)("emoteWheel", !1), Ju.k.Op(Nu.k)
      })), [yu]), (0, mu.e)("requestEmoteWheelHoldRelease", (() => {
        "hold" === yu && Zu()
      })), (0, mu.e)("requestEmoteWheelClose", (() => {
        null !== yu && Fu()
      })), (0, mu.e)("appManagerUpdated|gameState", (uu => {
        "inGame" !== uu && Fu()
      }));
      const hu = () => {
        (0, Tu.p)() && Fu()
      };
      if ((0, mu.e)("appManagerUpdated|openEverythingMenuName", hu), (0, mu.e)("appManagerUpdated|openInGameMenuName", hu), (0, mu.e)("pointerLockUpdate", (uu => {
          uu || "hold" !== yu || Fu()
        })), (0, Eu.useEffect)((() => {
          if (null === yu) return;
          const uu = uu => {
            "Escape" === uu.key && (uu.stopImmediatePropagation(), uu.preventDefault(), Fu())
          };
          return document.addEventListener("keydown", uu, !0), () => {
            document.removeEventListener("keydown", uu, !0)
          }
        }), [yu, Fu]), (0, Ku.c)(!0, "click" === yu, "EmoteWheelOverlay"), (0, Eu.useEffect)((() => {
          if ("hold" === yu) return Bu.gameBridge.send("holdEmoteWheel", !0), () => {
            Bu.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [yu]), (0, Eu.useEffect)((() => {
          if ("hold" !== yu) return;
          const uu = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Ru = du.o * uu,
            Eu = du.l * uu,
            Ku = uu => {
              let yu = tu.current.x + uu.movementX,
                Ku = tu.current.y + uu.movementY;
              const Qu = Math.hypot(yu, Ku);
              if (Qu > Ru) {
                const uu = Ru / Qu;
                yu *= uu, Ku *= uu
              }
              tu.current = {
                x: yu,
                y: Ku
              }, Uu(function(uu, Ru, yu, Eu) {
                if (Math.hypot(uu, Ru) < yu) return null;
                const Ku = (0, du.u)(uu, Ru, Vu.p);
                return null === Eu[Ku] ? null : Ku
              }(yu, Ku, Eu, cu))
            };
          return document.addEventListener("mousemove", Ku), () => {
            document.removeEventListener("mousemove", Ku)
          }
        }), [yu, cu, Uu]), null === yu) return null;
      const Pu = "hold" === yu || "pad" === yu,
        iu = null !== Wu ? cu[Wu] : null,
        Yu = null !== iu ? (0, Xu.i)(iu).displayName : uu("emotes:pickEmote");
      return (0, eu.jsx)("div", {
        className: ju()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === yu
        }),
        onMouseDown: uu => {
          uu.target === uu.currentTarget && Fu()
        },
        children: (0, eu.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * du.o + "rem",
            height: 2 * du.o + "rem"
          },
          children: [(0, eu.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${du.h} ${du.h}`,
            children: [cu.map(((Ru, yu) => {
              const Eu = null !== Ru,
                Ku = Pu && yu === Wu;
              return (0, eu.jsx)("path", {
                d: Gu(yu),
                className: ju()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Ku,
                  EmoteWheelWedgeDisabled: !Eu
                }),
                onClick: uu => {
                  uu.stopPropagation(), null !== Ru && (uu => {
                    Fu(), wu(uu)
                  })(Ru)
                },
                "aria-label": null !== Ru ? (0, Xu.i)(Ru).displayName : uu("emotes:emptySlot")
              }, yu)
            })), (0, eu.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: du.d,
              cy: du.d,
              r: du.g
            }), (0, eu.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: du.d,
              cy: du.d,
              r: du.f
            }), Pu && null !== Wu && (0, eu.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Gu(Wu)
            })]
          }), cu.map(((uu, Ru) => {
            const yu = null !== uu,
              Eu = Pu && Ru === Wu,
              Ku = (0, du.x)(Ru, Vu.p),
              Qu = du.c * Math.cos(Ku),
              mu = du.c * Math.sin(Ku);
            return (0, eu.jsx)("div", {
              className: ju()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Eu,
                EmoteWheelSlotIconDisabled: !yu
              }),
              style: {
                left: `calc(50% + ${Qu}rem)`,
                top: `calc(50% + ${mu}rem)`,
                backgroundImage: yu ? `url(/textures/charSkins/previews/emote_${uu}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Ru)
          })), (0, eu.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Yu
          })]
        })
      })
    }))
  },
  8505: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ru,
      d: () => Su,
      g: () => pu,
      j: () => xu,
      l: () => Bu
    });
    var Eu = yu(64),
      Ku = yu(8508),
      Qu = yu(34),
      mu = yu(1855),
      Ju = yu(47),
      Nu = yu(1232),
      Xu = yu(1878);
    const Vu = 50;
    const ru = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = uu => {
          if (0 === this.listeners.size) {
            var Ru, yu;
            this.state = {
              ...this.state,
              channel: null !== (Ru = null === (yu = Xu.b.get("chatChannels")) || void 0 === yu ? void 0 : yu[0]) && void 0 !== Ru ? Ru : null
            };
            const uu = Qu.k.subscribe("reportPlayer", (uu => {
              let {
                playerEId: Ru
              } = uu;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, Ru]
              })
            }));
            this.stopListening = [mu.gameBridge.subscribe("chatReceived", (uu => {
              let {
                serverChatMsgId: Ru,
                content: yu,
                author: Eu
              } = uu;
              this.addMessage(Ru, yu, Eu)
            })), () => {
              Qu.k.unsubscribe(uu)
            }, Xu.b.subscribe("chatChannels", (uu => {
              var Ru;
              this.setState({
                ...this.state,
                channel: null !== (Ru = null === uu || void 0 === uu ? void 0 : uu[0]) && void 0 !== Ru ? Ru : null
              })
            }))]
          }
          return this.listeners.add(uu), () => {
            if (this.listeners.delete(uu), 0 === this.listeners.size) {
              for (const uu of this.stopListening) uu();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Eu = {
          serverChatMsgId: uu,
          content: Ru,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: yu
        };
        this.setState({
          ...this.state,
          messages: [Eu, ...this.state.messages].slice(0, Ku.g)
        })
      }
      selectNextChannel() {
        const uu = Xu.b.get("chatChannels");
        if (uu) {
          const Ru = uu.findIndex((uu => {
            var Ru;
            return uu.channelName === (null === (Ru = this.state.channel) || void 0 === Ru ? void 0 : Ru.channelName)
          }));
          this.setState({
            ...this.state,
            channel: uu[(Ru + 1) % uu.length]
          })
        }
      }
      setState(uu) {
        this.state = uu;
        for (const Ru of this.listeners) Ru()
      }
    };

    function Bu() {
      const [uu, Ru] = (0, Eu.useState)(ru.getState);
      return (0, Eu.useEffect)((() => {
        const uu = ru.subscribe((() => {
          Ru(ru.getState())
        }));
        return Ru(ru.getState()), uu
      }), []), uu
    }

    function xu(uu) {
      var Ru, yu;
      if (uu.startsWith("/report")) {
        var Eu;
        const Ru = null !== (Eu = uu.replace("/report", "").trim().split(" ")[0]) && void 0 !== Eu ? Eu : "";
        if ("" === Ru) return void ru.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const yu = mu.gameBridge.latest("players"),
          Ku = mu.gameBridge.latest("hiddenPlayerNames"),
          Ju = uu => {
            var Eu, Qu;
            const mu = null !== (Eu = null === (Qu = yu.byId[uu]) || void 0 === Qu ? void 0 : Qu.name) && void 0 !== Eu ? Eu : null;
            return null !== mu && (mu === Ru || (0, Nu.b)(mu, Ku) === Ru)
          };
        if (null !== yu.localId && Ju(yu.localId)) return void ru.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const uu of yu.ids)
          if (Ju(uu)) return Qu.k.Op("OpenReportMenu", {
            playerEId: uu,
            playerName: yu.byId[uu].name,
            Dm: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        ru.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      mu.gameBridge.send("sendChatMessage", {
          Dm: uu,
          channelName: null !== (Ru = null === (yu = ru.getState().channel) || void 0 === yu ? void 0 : yu.channelName) && void 0 !== Ru ? Ru : null
        }),
        function(uu) {
          var Ru;
          const yu = null !== (Ru = Ju.i.getItem("recentlySentChatMsgs")) && void 0 !== Ru ? Ru : [];
          yu.push(uu), yu.length > Vu && yu.shift();
          Ju.i.setItem("recentlySentChatMsgs", yu)
        }(uu)
    }

    function Su() {
      var uu;
      return null !== (uu = Ju.i.getItem("recentlySentChatMsgs")) && void 0 !== uu ? uu : []
    }

    function pu(uu) {
      var Ru;
      let yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Eu = null !== (Ru = Ju.i.getItem("recentlySentChatMsgs")) && void 0 !== Ru ? Ru : [],
        Ku = Eu.length + 1,
        Qu = yu ? (uu % Ku + Ku) % Ku : Math.min(Eu.length, Math.max(0, uu));
      return {
        stepsBack: Qu,
        text: 0 === Qu ? "" : Eu[Eu.length - Qu]
      }
    }
  },
  8470: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      h: () => Qu
    });
    var Eu = yu(1923);
    const Ku = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Qu = uu => "string" === typeof uu.icon && "" !== uu.icon && "string" === typeof uu.keycode && Ku.test(uu.keycode),
      mu = uu => "Space" === uu ? "_" : Eu.g[uu]
  },
  8516: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    var Eu = yu(27);

    function Ku() {
      return !Eu.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8637: (uu, Ru, yu) => {
    function Eu(uu) {
      return {
        x: (uu.left + uu.right) / 2,
        y: (uu.top + uu.bottom) / 2
      }
    }

    function Ku(uu) {
      return 0 === uu.length ? null : uu.reduce(((uu, Ru) => ({
        left: Math.min(uu.left, Ru.left),
        top: Math.min(uu.top, Ru.top),
        right: Math.max(uu.right, Ru.right),
        bottom: Math.max(uu.bottom, Ru.bottom)
      })))
    }

    function Qu(uu, Ru) {
      const yu = Math.max(0, (Ru - (uu.right - uu.left)) / 2),
        Eu = Math.max(0, (Ru - (uu.bottom - uu.top)) / 2);
      return {
        left: uu.left - yu,
        top: uu.top - Eu,
        right: uu.right + yu,
        bottom: uu.bottom + Eu
      }
    }

    function mu(uu, Ru) {
      return Ru.x >= uu.left && Ru.x <= uu.right && Ru.y >= uu.top && Ru.y <= uu.bottom
    }

    function Ju(uu, Ru, yu) {
      let Ku = null,
        Ju = 1 / 0;
      for (const {
          id: Eu,
          box: Qu
        }
        of Ru) {
        const Ru = (Qu.right - Qu.left) * (Qu.bottom - Qu.top);
        mu(Qu, uu) && Ru < Ju && (Ju = Ru, Ku = Eu)
      }
      if (null !== Ku) return Ku;
      let Nu = 1 / 0;
      for (const {
          id: Xu,
          box: Vu
        }
        of Ru) {
        if (!mu(Qu(Vu, yu), uu)) continue;
        const Ru = Eu(Vu),
          Ju = Math.hypot(uu.x - Ru.x, uu.y - Ru.y);
        Ju < Nu && (Nu = Ju, Ku = Xu)
      }
      return Ku
    }

    function Nu(uu, Ru, yu) {
      return {
        left: yu.left,
        top: yu.top,
        right: uu - yu.right,
        bottom: Ru - yu.bottom
      }
    }

    function Xu(uu, Ru, yu, Eu) {
      const Ku = (uu, Ru, yu) => Math.max(Math.min(Ru, 0), Math.min(Math.max(yu, 0), uu));
      return {
        x: Ku(Ru, Eu.left - uu.left, Eu.right - uu.right),
        y: Ku(yu, Eu.top - uu.top, Eu.bottom - uu.bottom)
      }
    }

    function Vu(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.dx * Eu + Ru,
        mu = uu.dy * Ku + yu,
        Ju = uu => Math.max(-1, Math.min(1, uu));
      return {
        dx: Ju(Qu / Eu),
        dy: Ju(mu / Ku)
      }
    }

    function ru(uu, Ru, yu, Eu) {
      return Ru <= 0 || yu <= 0 ? 1 : Math.max(.05, Math.min(1, uu / Ru, Eu / yu))
    }

    function Bu(uu, Ru, yu) {
      return Math.min(uu.right, Ru.right) - Math.max(uu.left, Ru.left) > yu && Math.min(uu.bottom, Ru.bottom) - Math.max(uu.top, Ru.top) > yu
    }

    function xu(uu, Ru) {
      const yu = (uu, Ru, yu, Eu) => Ru - uu > Eu - yu ? yu - uu > Ru - Eu ? Eu - Ru : yu - uu : uu < yu ? yu - uu : Ru > Eu ? Eu - Ru : 0;
      return {
        x: yu(uu.left, uu.right, Ru.left, Ru.right),
        y: yu(uu.top, uu.bottom, Ru.top, Ru.bottom)
      }
    }

    function Su(uu, Ru) {
      let {
        avoid: yu = null,
        bounds: Eu = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Ku = 0, Qu = 1 / 0;
      return uu.forEach(((uu, mu) => {
        const Ju = Ru.filter((Ru => Bu(uu, Ru, 0))).length,
          Nu = null !== Eu && (uu.left < Eu.left || uu.top < Eu.top || uu.right > Eu.right || uu.bottom > Eu.bottom),
          Xu = Ju + (yu && Bu(uu, yu, 0) ? 1e3 : 0) + (Nu ? 1e6 : 0);
        Xu < Qu && (Ku = mu, Qu = Xu)
      })), Ku
    }
    yu.d(Ru, {
      A: () => Nu,
      B: () => xu,
      F: () => Ku,
      b: () => Eu,
      e: () => mu,
      f: () => Bu,
      h: () => Xu,
      l: () => Qu,
      p: () => Su,
      t: () => Vu,
      w: () => Ju,
      z: () => ru
    })
  },
  8525: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => xu,
      c: () => Qu,
      d: () => Ju,
      f: () => Xu,
      g: () => Nu,
      h: () => mu,
      l: () => Ku,
      o: () => Eu,
      q: () => Su,
      u: () => ru,
      x: () => Vu,
      y: () => Bu
    });
    const Eu = 14,
      Ku = 6,
      Qu = (Eu + Ku) / 2,
      mu = 200,
      Ju = mu / 2,
      Nu = mu / 2 - 1,
      Xu = Ku / Eu * (mu / 2),
      Vu = (uu, Ru) => -Math.PI / 2 + 2 * uu * Math.PI / Ru,
      ru = (uu, Ru, yu) => {
        const Eu = 2 * Math.PI / yu;
        return (Math.round((Math.atan2(Ru, uu) + Math.PI / 2) / Eu) % yu + yu) % yu
      },
      Bu = .5,
      xu = (uu, Ru, yu) => Math.hypot(uu.x, uu.y) < Bu ? yu : ru(uu.x, uu.y, Ru),
      Su = (uu, Ru, yu, Eu, Ku) => {
        const Qu = Math.PI / Ru,
          mu = Vu(uu, Ru),
          Ju = mu - Qu,
          Nu = mu + Qu,
          Xu = (uu, Ru) => `${yu+uu*Math.cos(Ru)} ${yu+uu*Math.sin(Ru)}`;
        return [`M ${Xu(Eu,Ju)}`, `L ${Xu(Ku,Ju)}`, `A ${Ku} ${Ku} 0 0 1 ${Xu(Ku,Nu)}`, `L ${Xu(Eu,Nu)}`, `A ${Eu} ${Eu} 0 0 0 ${Xu(Eu,Ju)}`, "Z"].join(" ")
      }
  },
  8573: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(64),
      Ku = yu(8495),
      Qu = yu(2335);

    function mu() {
      const uu = (0, Qu.g)("shopInfo"),
        [, Ru] = (0, Eu.useReducer)((uu => uu + 1), 0);
      return (0, Qu.e)("shopInfo", Ru), !(0, Ku.c)(uu)
    }
  },
  8465: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      f: () => mu,
      i: () => Ju,
      l: () => Ku
    });
    var Eu = yu(8470);
    const Ku = uu => {
        const Ru = [];
        uu.holdingGun && Ru.push({
          kind: "reload"
        }), uu.touchscreenActionButton && Ru.push({
          kind: "touchButton",
          label: uu.touchscreenActionButton
        });
        for (const Qu of null !== (yu = null === (Ku = uu.customButtons) || void 0 === Ku ? void 0 : Ku.filter(Eu.h)) && void 0 !== yu ? yu : []) {
          var yu, Ku;
          Ru.push({
            kind: "customButton",
            id: Qu.id,
            icon: Qu.icon,
            description: Qu.description
          })
        }
        return Ru
      },
      Qu = uu => uu.length >= 2,
      mu = uu => "specialAction" !== uu.kind,
      Ju = (uu, Ru) => {
        if (null === uu || null === Ru) return uu === Ru;
        if (uu.kind !== Ru.kind) return !1;
        switch (uu.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return uu.action === Ru.action;
          case "customButton":
            return uu.id === Ru.id && uu.icon === Ru.icon;
          case "touchButton":
            return uu.label === Ru.label
        }
      }
  },
  8456: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu,
      f: () => xu,
      j: () => ru,
      k: () => Su
    });
    var Eu = yu(64),
      Ku = yu(34),
      Qu = yu(1400),
      mu = yu(8465),
      Ju = yu(8475);
    let Nu = null;
    const Xu = () => Nu,
      Vu = uu => {
        (0, mu.i)(Nu, uu) || (Nu = uu, Ku.k.Op(Ju.c, Nu))
      },
      ru = () => {
        const [uu, Ru] = (0, Eu.useState)(Xu);
        return (0, Qu.e)(Ju.c, Ru), uu
      };
    let Bu = !1;
    const xu = uu => {
        uu !== Bu && (Bu = uu, Ku.k.Op(Ju.d, uu))
      },
      Su = () => {
        const [uu, Ru] = (0, Eu.useState)(Bu);
        return (0, Qu.e)(Ju.d, Ru), uu
      }
  },
  8475: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => Eu,
      d: () => Ku,
      h: () => Ju,
      l: () => Nu,
      m: () => Xu,
      p: () => mu
    });
    const Eu = "controllerActionHintChanged",
      Ku = "controllerActionWheelHintChanged",
      Qu = "controllerOpenChat",
      mu = "controllerSneakToggledChanged",
      Ju = "controllerAttackLatchedChanged",
      Nu = "controllerDropStackHoldChanged",
      Xu = "controllerPickBlockHintChanged"
  },
  8425: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      e: () => Qu,
      f: () => Nu,
      j: () => Ju
    });
    var Eu = yu(1400),
      Ku = yu(1362);
    const Qu = "controllerInventoryCursorChanged",
      mu = {
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
      Ju = () => {
        var uu, Ru;
        return (0, Eu.h)(Qu, null !== (uu = null === (Ru = (0, Ku.f)()) || void 0 === Ru ? void 0 : Ru.getInventoryCursorState()) && void 0 !== uu ? uu : mu)
      },
      Nu = () => {
        var uu, Ru;
        return null !== (uu = null === (Ru = (0, Ku.f)()) || void 0 === Ru ? void 0 : Ru.isPadSteppingSlots()) && void 0 !== uu && uu
      }
  },
  8423: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      f: () => Ju,
      j: () => Nu,
      l: () => mu,
      o: () => Qu,
      r: () => Vu,
      t: () => ru
    });
    let Eu = null;
    const Ku = new Set,
      Qu = uu => (Eu = uu, () => {
        if (Eu === uu) {
          Eu = null;
          for (const uu of Ku) uu()
        }
      }),
      mu = uu => (Ku.add(uu), () => {
        Ku.delete(uu)
      }),
      Ju = () => Eu,
      Nu = () => null !== Eu;
    let Xu = null;
    const Vu = uu => {
        Xu = uu
      },
      ru = () => {
        const uu = Xu;
        return Xu = null, uu
      },
      Bu = (uu, Ru) => {
        var yu, Eu;
        return null !== (yu = null !== (Eu = uu.find((uu => uu.element === Ru))) && void 0 !== Eu ? Eu : uu.find((uu => uu.element.contains(Ru)))) && void 0 !== yu ? yu : null
      }
  },
  8434: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      e: () => mu
    });
    var Eu = yu(64);
    const Ku = new WeakMap,
      Qu = uu => {
        var Ru, yu;
        return null !== (Ru = null === (yu = Ku.get(uu)) || void 0 === yu ? void 0 : yu.current) && void 0 !== Ru ? Ru : null
      },
      mu = (uu, Ru) => {
        const yu = (0, Eu.useRef)(Ru);
        yu.current = Ru;
        const Qu = (0, Eu.useRef)(null);
        (0, Eu.useEffect)((() => {
          const Ru = uu.current,
            Eu = Qu.current;
          Ru !== Eu && (Eu && Ku.get(Eu) === yu && Ku.delete(Eu), Qu.current = Ru, Ru && Ku.set(Ru, yu))
        })), (0, Eu.useEffect)((() => () => {
          const uu = Qu.current;
          uu && Ku.get(uu) === yu && Ku.delete(uu), Qu.current = null
        }), [])
      }
  },
  8563: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Xu,
      h: () => ru,
      k: () => Vu,
      l: () => Nu,
      m: () => xu
    });
    var Eu = yu(34),
      Ku = yu(1938),
      Qu = yu(1362),
      mu = yu(1354);
    const Ju = uu => {
        var Ru, yu;
        return (0, mu.g)() && null !== (Ru = null === (yu = (0, Qu.f)()) || void 0 === yu ? void 0 : yu.getGlyphForNoaAction(uu)) && void 0 !== Ru ? Ru : null
      },
      Nu = "controllerGlyph:",
      Xu = uu => {
        var Ru, yu;
        return null !== (Ru = null === (yu = (0, Qu.f)()) || void 0 === yu ? void 0 : yu.getPadGlyphIconName(uu)) && void 0 !== Ru ? Ru : `${Nu}xbox/${uu}`
      },
      Vu = uu => uu.startsWith(Nu),
      ru = uu => {
        var Ru, yu;
        return Vu(uu) && null !== (Ru = null === (yu = (0, Qu.f)()) || void 0 === yu ? void 0 : yu.getPadGlyphIconUrl(uu)) && void 0 !== Ru ? Ru : null
      },
      Bu = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", mu.c, Ku.g, Ku.e],
      xu = uu => {
        const Ru = Bu.map((Ru => Eu.k.subscribe(Ru, uu)));
        return () => {
          for (const uu of Ru) Eu.k.unsubscribe(uu)
        }
      }
  },
  8418: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      g: () => Eu
    });
    const Eu = "controllerOpenKeyboard",
      Ku = "controllerKeyboardVisible"
  },
  8447: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    let Eu = null;
    const Ku = function(uu) {
        const Ru = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Eu = Ru, () => {
          Eu === Ru && (Eu = null)
        }
      },
      Qu = () => {
        var uu;
        return null !== (uu = Eu) && void 0 !== uu && uu.canCycle() ? Eu.cycle : null
      }
  },
  8539: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      g: () => mu,
      k: () => Qu,
      m: () => Eu,
      q: () => Ju,
      t: () => Xu,
      u: () => Vu
    });
    const Eu = "controllerActionWheelOpen",
      Ku = "controllerActionWheelAim",
      Qu = "controllerActionWheelCommit",
      mu = "controllerActionWheelClose",
      Ju = "controllerActionWheelPick";
    let Nu = !1;
    const Xu = () => Nu,
      Vu = uu => {
        Nu = uu
      }
  },
  8531: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      g: () => Ku
    });
    let Eu = 0;
    const Ku = () => {
        Eu++
      },
      Qu = () => Eu
  },
  8445: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Nu,
      f: () => Ku,
      j: () => mu,
      n: () => Qu,
      r: () => Eu,
      u: () => Xu
    });
    const Eu = "controllerQuickChatWheelOpen",
      Ku = "controllerQuickChatWheelAim",
      Qu = "controllerQuickChatWheelCommit",
      mu = "controllerQuickChatWheelClose";
    let Ju = !1;
    const Nu = () => Ju,
      Xu = uu => {
        Ju = uu
      }
  },
  8631: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      d: () => Nu
    });
    var Eu = yu(27),
      Ku = yu(1280),
      Qu = yu(106);
    const mu = {
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

    function Ju() {
      return (0, Qu.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Nu = new class {
      constructor(uu) {
        this.deps = uu, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(uu, Ru) {
        var yu;
        if (!this.deps.enabled()) return;
        const Eu = mu[uu],
          Ku = null !== Ru && void 0 !== Ru ? Ru : Eu.pattern;
        if (null === Ku) return void console.warn("No vibration pattern for", uu);
        const Qu = this.deps.now();
        Qu - this.lastAnyAt < 40 && Eu.priority < this.playingPriority || Qu - (null !== (yu = this.lastAt.get(uu)) && void 0 !== yu ? yu : -1 / 0) < Eu.minGapMs || Qu < this.playingUntil && Eu.priority < this.playingPriority || (this.lastAt.set(uu, Qu), this.lastAnyAt = Qu, this.playingUntil = Qu + Ku.reduce(((uu, Ru) => uu + Ru), 0), this.playingPriority = Eu.priority, this.deps.vibrate(Ku))
      }
    }({
      vibrate: uu => {
        navigator.vibrate([...uu])
      },
      now: () => performance.now(),
      enabled: () => Ju() && Eu.d.get("isTouchScreen") && Eu.d.get("clientEscMenuOptions").vibration && !(0, Ku.e)()
    })
  },
  8495: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(8502),
      Ku = yu(610),
      Qu = yu(145);

    function mu(uu) {
      var Ru, yu;
      if ((0, Ku.E)(uu)) return !0;
      const mu = null !== (Ru = null === (yu = Qu.q[Qu.v]) || void 0 === yu ? void 0 : yu.adConfig.showRewardedAds) && void 0 !== Ru && Ru;
      for (const Ku in uu) {
        const Ru = uu[Ku];
        if (null !== Ru && void 0 !== Ru && Ru.items)
          for (const uu in Ru.items)
            if ((0, Eu.l)(Ru.items[uu], mu)) return !1
      }
      return !0
    }
  },
  8508: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      g: () => Eu
    });
    const Eu = 100;

    function Ku(uu) {
      let {
        translationKeys: Ru = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return uu.map((uu => {
        var yu;
        return null !== (yu = function(uu, Ru) {
          if ("string" === typeof uu) return uu;
          const yu = "str" in uu ? uu.str : uu;
          if ("string" === typeof yu) return yu;
          if ("entityName" in yu) return yu.entityName;
          if (Ru && "translationKey" in yu) return `{${yu.translationKey}${void 0===yu.params?"":` ${JSON.stringify(yu.params)}`}}`;
          return null
        }(uu, Ru)) && void 0 !== yu ? yu : " "
      })).join("")
    }
  },
  8555: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Vu,
      d: () => Ju,
      e: () => Nu
    });
    var Eu = yu(2128),
      Ku = yu(1215),
      Qu = yu(2132);
    const mu = ",";

    function Ju(uu) {
      if (!uu) return [];
      const Ru = new Set,
        yu = [];
      for (const Eu of uu.split(mu)) {
        const uu = Eu.trim();
        if ((0, Qu.k)(uu) && !Ru.has(uu) && (Ru.add(uu), yu.push(uu), yu.length >= Ku.p)) break
      }
      return yu
    }

    function Nu(uu) {
      const Ru = new Set,
        yu = [];
      for (const Eu of uu)
        if ((0, Qu.k)(Eu) && !Ru.has(Eu) && (Ru.add(Eu), yu.push(Eu), yu.length >= Ku.p)) break;
      return yu.join(mu)
    }

    function Xu() {
      return Nu(Qu.h)
    }

    function Vu(uu) {
      var Ru;
      return "emote" === uu ? Xu() : null !== (Ru = ru[uu][0]) && void 0 !== Ru ? Ru : Bu[uu]
    }
    const ru = Ku.w.reduce(((uu, Ru) => {
        const yu = [];
        for (const Qu in Eu.f[Ru]) {
          var Ku;
          "default" === (null === (Ku = (0, Eu.k)(Ru, Qu)) || void 0 === Ku ? void 0 : Ku.cosmeticPack) && yu.push(Qu)
        }
        return uu[Ru] = yu, uu
      }), {}),
      Bu = Ku.w.reduce(((uu, Ru) => (uu[Ru] = Object.keys(Eu.f[Ru])[0], uu)), {})
  },
  8502: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return !uu.hidden && (Ru || !uu.isRewardedAd)
    }

    function Ku(uu) {
      return "object" === typeof uu ? uu.option : uu
    }

    function Qu(uu, Ru) {
      var yu;
      if ("dropdown" === (null === (yu = uu.userInput) || void 0 === yu ? void 0 : yu.type) && "object" === typeof uu.userInput.dropdownOptions[0]) {
        for (const yu of uu.userInput.dropdownOptions)
          if (Ku(yu) === Ru) return "object" === typeof yu ? yu.cost : uu.cost;
        console.error("Didn't find matching option for dropdown item. Item:", uu, "input:", Ru)
      }
      return uu.cost
    }

    function mu(uu, Ru, yu) {
      var Eu;
      const Ku = null !== (Eu = yu.excludedPlayers) && void 0 !== Eu ? Eu : [Ru];
      return uu.filter((uu => !Ku.includes(uu)))
    }
    yu.d(Ru, {
      e: () => Qu,
      h: () => Ku,
      i: () => mu,
      l: () => Eu
    })
  },
  8548: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);