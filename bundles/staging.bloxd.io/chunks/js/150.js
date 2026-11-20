export const id = 150;
export const ids = [150];
export const modules = {
  8425: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => YU,
      h: () => bU,
      k: () => oU
    });
    var tU = gU(56),
      pU = gU(4206),
      EU = gU(1112),
      PU = gU(1410),
      TU = gU(24),
      qU = gU(3123),
      KU = gU(2061),
      cU = gU(1238),
      GU = gU(8447),
      jU = gU(1800),
      uU = gU(1834),
      CU = gU(1181),
      hU = gU(21),
      QU = gU(1567),
      eU = gU(1037),
      WU = gU.n(eU),
      fU = gU(8427),
      xU = gU(8431),
      mU = gU(8440),
      IU = gU(8336),
      JU = gU(8442),
      wU = (gU(8444), gU(1090));
    let nU = null;

    function bU() {
      return null !== nU
    }

    function oU() {
      return "pad" === nU
    }

    function ZU() {
      return "inGame" === hU.b.get("gameState") && !(0, QU.q)()
    }

    function aU(UU) {
      return (0, xU.p)(UU, cU.j, xU.d, xU.e, xU.h)
    }
    const YU = (0, tU.memo)((function() {
      const {
        t: UU
      } = (0, CU.B)(), {
        userContext: RU
      } = (0, EU.e)(), [gU, hU] = (0, tU.useState)(null), [eU, bU] = (0, tU.useState)(null), oU = (0, tU.useRef)(null), YU = (0, tU.useCallback)((UU => {
        oU.current = UU, bU(UU)
      }), []), BU = (0, tU.useRef)(0), VU = (0, tU.useRef)(null), rU = (0, tU.useRef)({
        x: 0,
        y: 0
      }), [XU, vU] = (0, tU.useState)(0), dU = (0, tU.useMemo)((() => function(UU) {
        const RU = [];
        for (let tU = 0; tU < cU.j; tU++) {
          var gU;
          RU.push(null !== (gU = UU[tU]) && void 0 !== gU ? gU : null)
        }
        return RU
      }((0, GU.f)(RU.getPlayerCosmetics().emote))), [RU, XU]);
      (0, uU.d)("cosmeticsUpdated", (UU => {
        UU.some((UU => UU.local && "emote" === UU.Xg)) && vU((UU => UU + 1))
      }));
      const HU = (0, tU.useRef)(!1),
        SU = (0, tU.useCallback)((function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === UU && (0, mU.e)(), HU.current = RU, rU.current = {
            x: 0,
            y: 0
          }, YU(null), hU(UU)
        }), [YU]),
        sU = (0, tU.useCallback)((() => {
          hU(null), YU(null), rU.current = {
            x: 0,
            y: 0
          }
        }), [YU]),
        yU = (0, tU.useCallback)((UU => {
          if (Date.now() < BU.current) return;
          const RU = (0, KU.f)(UU),
            gU = !!RU.holdUntilMove,
            tU = gU ? 600 : Math.ceil(1e3 * RU.animation.animation_length / KU.b) + 200;
          BU.current = Date.now() + tU, VU.current = UU, jU.gameBridge.send("playEmote", UU), jU.gameBridge.send("applyTemporaryThirdPerson", gU ? {} : {
            durationMs: tU
          })
        }), []);
      (0, PU.e)("requestToggleEmoteWheel", (() => {
        null === gU ? ZU() && SU("click") : sU()
      })), (0, PU.e)("requestEmoteWheelHoldOpen", (() => {
        null === gU && ZU() && SU((0, fU.e)() ? "hold" : "click")
      })), (0, PU.e)("requestEmoteWheelPadOpen", (UU => {
        null !== gU || !ZU() || (0, IU.d)() || (0, JU.v)() || SU("pad", UU)
      })), (0, PU.e)("requestEmoteRepeatLast", (() => {
        if (null !== gU || !ZU() || (0, IU.d)() || (0, JU.v)()) return;
        const UU = VU.current;
        null !== UU && dU.includes(UU) ? yU(UU) : SU("pad", !0)
      }));
      const kU = () => {
        const UU = oU.current,
          RU = null !== UU ? dU[UU] : null;
        null !== RU && "pad" === gU && Date.now() < BU.current || (sU(), null !== RU && yU(RU))
      };
      (0, PU.e)("emoteWheelPadAim", (UU => {
        if ("pad" !== gU) return;
        const RU = (0, xU.A)(UU, cU.j, oU.current);
        YU(null !== RU && null !== dU[RU] ? RU : null)
      })), (0, PU.e)("requestEmoteWheelPadCommit", (UU => {
        "pad" !== gU || UU && HU.current || kU()
      })), (0, PU.e)("appManagerUpdated|activeInputDevice", (UU => {
        null !== gU && "pad" === gU !== ("gamepad" === UU) && sU()
      })), (0, tU.useLayoutEffect)((() => (nU = gU, (0, qU.z)("emoteWheel", "pad" === gU), TU.p.yh(qU.q), () => {
        nU = null, (0, qU.z)("emoteWheel", !1), TU.p.yh(qU.q)
      })), [gU]), (0, PU.e)("requestEmoteWheelHoldRelease", (() => {
        "hold" === gU && kU()
      })), (0, PU.e)("requestEmoteWheelClose", (() => {
        null !== gU && sU()
      })), (0, PU.e)("appManagerUpdated|gameState", (UU => {
        "inGame" !== UU && sU()
      }));
      const FU = () => {
        (0, QU.q)() && sU()
      };
      if ((0, PU.e)("appManagerUpdated|openEverythingMenuName", FU), (0, PU.e)("appManagerUpdated|openInGameMenuName", FU), (0, PU.e)("pointerLockUpdate", (UU => {
          UU || "hold" !== gU || sU()
        })), (0, tU.useEffect)((() => {
          if (null === gU) return;
          const UU = UU => {
            "Escape" === UU.key && (UU.stopImmediatePropagation(), UU.preventDefault(), sU())
          };
          return document.addEventListener("keydown", UU, !0), () => {
            document.removeEventListener("keydown", UU, !0)
          }
        }), [gU, sU]), (0, pU.e)(!0, "click" === gU, "EmoteWheelOverlay"), (0, tU.useEffect)((() => {
          if ("hold" === gU) return jU.gameBridge.send("holdEmoteWheel", !0), () => {
            jU.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [gU]), (0, tU.useEffect)((() => {
          if ("hold" !== gU) return;
          const UU = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            RU = xU.l * UU,
            tU = xU.k * UU,
            pU = UU => {
              let gU = rU.current.x + UU.movementX,
                pU = rU.current.y + UU.movementY;
              const EU = Math.hypot(gU, pU);
              if (EU > RU) {
                const UU = RU / EU;
                gU *= UU, pU *= UU
              }
              rU.current = {
                x: gU,
                y: pU
              }, YU(function(UU, RU, gU, tU) {
                if (Math.hypot(UU, RU) < gU) return null;
                const pU = (0, xU.t)(UU, RU, cU.j);
                return null === tU[pU] ? null : pU
              }(gU, pU, tU, dU))
            };
          return document.addEventListener("mousemove", pU), () => {
            document.removeEventListener("mousemove", pU)
          }
        }), [gU, dU, YU]), null === gU) return null;
      const iU = "hold" === gU || "pad" === gU,
        AU = null !== eU ? dU[eU] : null,
        zU = null !== AU ? (0, KU.f)(AU).displayName : UU("emotes:pickEmote");
      return (0, wU.jsx)("div", {
        className: WU()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === gU
        }),
        onMouseDown: UU => {
          UU.target === UU.currentTarget && sU()
        },
        children: (0, wU.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * xU.l + "rem",
            height: 2 * xU.l + "rem"
          },
          children: [(0, wU.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${xU.i} ${xU.i}`,
            children: [dU.map(((RU, gU) => {
              const tU = null !== RU,
                pU = iU && gU === eU;
              return (0, wU.jsx)("path", {
                d: aU(gU),
                className: WU()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: pU,
                  EmoteWheelWedgeDisabled: !tU
                }),
                onClick: UU => {
                  UU.stopPropagation(), null !== RU && (UU => {
                    sU(), yU(UU)
                  })(RU)
                },
                "aria-label": null !== RU ? (0, KU.f)(RU).displayName : UU("emotes:emptySlot")
              }, gU)
            })), (0, wU.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: xU.d,
              cy: xU.d,
              r: xU.h
            }), (0, wU.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: xU.d,
              cy: xU.d,
              r: xU.e
            }), iU && null !== eU && (0, wU.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: aU(eU)
            })]
          }), dU.map(((UU, RU) => {
            const gU = null !== UU,
              tU = iU && RU === eU,
              pU = (0, xU.v)(RU, cU.j),
              EU = xU.c * Math.cos(pU),
              PU = xU.c * Math.sin(pU);
            return (0, wU.jsx)("div", {
              className: WU()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: tU,
                EmoteWheelSlotIconDisabled: !gU
              }),
              style: {
                left: `calc(50% + ${EU}rem)`,
                top: `calc(50% + ${PU}rem)`,
                backgroundImage: gU ? `url(/textures/charSkins/previews/emote_${UU}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, RU)
          })), (0, wU.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: zU
          })]
        })
      })
    }))
  },
  8412: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => GU,
      g: () => CU,
      h: () => hU,
      l: () => uU,
      p: () => jU
    });
    var tU = gU(56),
      pU = gU(8421),
      EU = gU(24),
      PU = gU(1800),
      TU = gU(34),
      qU = gU(1265),
      KU = gU(1821);
    const cU = 50;
    const GU = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = UU => {
          if (0 === this.listeners.size) {
            var RU, gU;
            this.state = {
              ...this.state,
              channel: null !== (RU = null === (gU = KU.b.get("chatChannels")) || void 0 === gU ? void 0 : gU[0]) && void 0 !== RU ? RU : null
            };
            const UU = EU.p.subscribe("reportPlayer", (UU => {
              let {
                playerEId: RU
              } = UU;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, RU]
              })
            }));
            this.stopListening = [PU.gameBridge.subscribe("chatReceived", (UU => {
              let {
                serverChatMsgId: RU,
                content: gU,
                author: tU
              } = UU;
              this.addMessage(RU, gU, tU)
            })), () => {
              EU.p.unsubscribe(UU)
            }, KU.b.subscribe("chatChannels", (UU => {
              var RU;
              this.setState({
                ...this.state,
                channel: null !== (RU = null === UU || void 0 === UU ? void 0 : UU[0]) && void 0 !== RU ? RU : null
              })
            }))]
          }
          return this.listeners.add(UU), () => {
            if (this.listeners.delete(UU), 0 === this.listeners.size) {
              for (const UU of this.stopListening) UU();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tU = {
          serverChatMsgId: UU,
          content: RU,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: gU
        };
        this.setState({
          ...this.state,
          messages: [tU, ...this.state.messages].slice(0, pU.f)
        })
      }
      selectNextChannel() {
        const UU = KU.b.get("chatChannels");
        if (UU) {
          const RU = UU.findIndex((UU => {
            var RU;
            return UU.channelName === (null === (RU = this.state.channel) || void 0 === RU ? void 0 : RU.channelName)
          }));
          this.setState({
            ...this.state,
            channel: UU[(RU + 1) % UU.length]
          })
        }
      }
      setState(UU) {
        this.state = UU;
        for (const RU of this.listeners) RU()
      }
    };

    function jU() {
      const [UU, RU] = (0, tU.useState)(GU.getState);
      return (0, tU.useEffect)((() => {
        const UU = GU.subscribe((() => {
          RU(GU.getState())
        }));
        return RU(GU.getState()), UU
      }), []), UU
    }

    function uU(UU) {
      var RU, gU;
      if (UU.startsWith("/report")) {
        var tU;
        const RU = null !== (tU = UU.replace("/report", "").trim().split(" ")[0]) && void 0 !== tU ? tU : "";
        if ("" === RU) return void GU.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const gU = PU.gameBridge.latest("players"),
          pU = PU.gameBridge.latest("hiddenPlayerNames"),
          TU = UU => {
            var tU, EU;
            const PU = null !== (tU = null === (EU = gU.byId[UU]) || void 0 === EU ? void 0 : EU.name) && void 0 !== tU ? tU : null;
            return null !== PU && (PU === RU || (0, qU.c)(PU, pU) === RU)
          };
        if (null !== gU.localId && TU(gU.localId)) return void GU.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const UU of gU.ids)
          if (TU(UU)) return EU.p.yh("OpenReportMenu", {
            playerEId: UU,
            playerName: gU.byId[UU].name,
            aP: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        GU.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      PU.gameBridge.send("sendChatMessage", {
          aP: UU,
          channelName: null !== (RU = null === (gU = GU.getState().channel) || void 0 === gU ? void 0 : gU.channelName) && void 0 !== RU ? RU : null
        }),
        function(UU) {
          var RU;
          const gU = null !== (RU = TU.k.getItem("recentlySentChatMsgs")) && void 0 !== RU ? RU : [];
          gU.push(UU), gU.length > cU && gU.shift();
          TU.k.setItem("recentlySentChatMsgs", gU)
        }(UU)
    }

    function CU() {
      var UU;
      return null !== (UU = TU.k.getItem("recentlySentChatMsgs")) && void 0 !== UU ? UU : []
    }

    function hU(UU) {
      var RU;
      let gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const tU = null !== (RU = TU.k.getItem("recentlySentChatMsgs")) && void 0 !== RU ? RU : [],
        pU = tU.length + 1,
        EU = gU ? (UU % pU + pU) % pU : Math.min(tU.length, Math.max(0, UU));
      return {
        stepsBack: EU,
        text: 0 === EU ? "" : tU[tU.length - EU]
      }
    }
  },
  8368: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      d: () => EU
    });
    var tU = gU(1849);
    const pU = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      EU = UU => "string" === typeof UU.icon && "" !== UU.icon && "string" === typeof UU.keycode && pU.test(UU.keycode),
      PU = UU => "Space" === UU ? "_" : tU.h[UU]
  },
  8427: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(21);

    function pU() {
      return !tU.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8516: (UU, RU, gU) => {
    function tU(UU) {
      return {
        x: (UU.left + UU.right) / 2,
        y: (UU.top + UU.bottom) / 2
      }
    }

    function pU(UU) {
      return 0 === UU.length ? null : UU.reduce(((UU, RU) => ({
        left: Math.min(UU.left, RU.left),
        top: Math.min(UU.top, RU.top),
        right: Math.max(UU.right, RU.right),
        bottom: Math.max(UU.bottom, RU.bottom)
      })))
    }

    function EU(UU, RU) {
      const gU = Math.max(0, (RU - (UU.right - UU.left)) / 2),
        tU = Math.max(0, (RU - (UU.bottom - UU.top)) / 2);
      return {
        left: UU.left - gU,
        top: UU.top - tU,
        right: UU.right + gU,
        bottom: UU.bottom + tU
      }
    }

    function PU(UU, RU) {
      return RU.x >= UU.left && RU.x <= UU.right && RU.y >= UU.top && RU.y <= UU.bottom
    }

    function TU(UU, RU, gU) {
      let pU = null,
        TU = 1 / 0;
      for (const {
          id: tU,
          box: EU
        }
        of RU) {
        const RU = (EU.right - EU.left) * (EU.bottom - EU.top);
        PU(EU, UU) && RU < TU && (TU = RU, pU = tU)
      }
      if (null !== pU) return pU;
      let qU = 1 / 0;
      for (const {
          id: KU,
          box: cU
        }
        of RU) {
        if (!PU(EU(cU, gU), UU)) continue;
        const RU = tU(cU),
          TU = Math.hypot(UU.x - RU.x, UU.y - RU.y);
        TU < qU && (qU = TU, pU = KU)
      }
      return pU
    }

    function qU(UU, RU, gU) {
      return {
        left: gU.left,
        top: gU.top,
        right: UU - gU.right,
        bottom: RU - gU.bottom
      }
    }

    function KU(UU, RU, gU, tU) {
      const pU = (UU, RU, gU) => Math.max(Math.min(RU, 0), Math.min(Math.max(gU, 0), UU));
      return {
        x: pU(RU, tU.left - UU.left, tU.right - UU.right),
        y: pU(gU, tU.top - UU.top, tU.bottom - UU.bottom)
      }
    }

    function cU(UU, RU, gU, tU, pU) {
      const EU = UU.dx * tU + RU,
        PU = UU.dy * pU + gU,
        TU = UU => Math.max(-1, Math.min(1, UU));
      return {
        dx: TU(EU / tU),
        dy: TU(PU / pU)
      }
    }

    function GU(UU, RU, gU, tU) {
      return RU <= 0 || gU <= 0 ? 1 : Math.max(.05, Math.min(1, UU / RU, tU / gU))
    }

    function jU(UU, RU, gU) {
      return Math.min(UU.right, RU.right) - Math.max(UU.left, RU.left) > gU && Math.min(UU.bottom, RU.bottom) - Math.max(UU.top, RU.top) > gU
    }

    function uU(UU, RU) {
      const gU = (UU, RU, gU, tU) => RU - UU > tU - gU ? gU - UU > RU - tU ? tU - RU : gU - UU : UU < gU ? gU - UU : RU > tU ? tU - RU : 0;
      return {
        x: gU(UU.left, UU.right, RU.left, RU.right),
        y: gU(UU.top, UU.bottom, RU.top, RU.bottom)
      }
    }

    function CU(UU, RU) {
      let {
        avoid: gU = null,
        bounds: tU = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, pU = 0, EU = 1 / 0;
      return UU.forEach(((UU, PU) => {
        const TU = RU.filter((RU => jU(UU, RU, 0))).length,
          qU = null !== tU && (UU.left < tU.left || UU.top < tU.top || UU.right > tU.right || UU.bottom > tU.bottom),
          KU = TU + (gU && jU(UU, gU, 0) ? 1e3 : 0) + (qU ? 1e6 : 0);
        KU < EU && (pU = PU, EU = KU)
      })), pU
    }
    gU.d(RU, {
      A: () => uU,
      D: () => pU,
      e: () => tU,
      f: () => PU,
      i: () => jU,
      j: () => KU,
      n: () => EU,
      r: () => CU,
      s: () => cU,
      t: () => TU,
      u: () => GU,
      w: () => qU
    })
  },
  8431: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => uU,
      c: () => EU,
      d: () => TU,
      e: () => KU,
      h: () => qU,
      i: () => PU,
      k: () => pU,
      l: () => tU,
      p: () => CU,
      t: () => GU,
      v: () => cU,
      z: () => jU
    });
    const tU = 14,
      pU = 6,
      EU = (tU + pU) / 2,
      PU = 200,
      TU = PU / 2,
      qU = PU / 2 - 1,
      KU = pU / tU * (PU / 2),
      cU = (UU, RU) => -Math.PI / 2 + 2 * UU * Math.PI / RU,
      GU = (UU, RU, gU) => {
        const tU = 2 * Math.PI / gU;
        return (Math.round((Math.atan2(RU, UU) + Math.PI / 2) / tU) % gU + gU) % gU
      },
      jU = .5,
      uU = (UU, RU, gU) => Math.hypot(UU.x, UU.y) < jU ? gU : GU(UU.x, UU.y, RU),
      CU = (UU, RU, gU, tU, pU) => {
        const EU = Math.PI / RU,
          PU = cU(UU, RU),
          TU = PU - EU,
          qU = PU + EU,
          KU = (UU, RU) => `${gU+UU*Math.cos(RU)} ${gU+UU*Math.sin(RU)}`;
        return [`M ${KU(tU,TU)}`, `L ${KU(pU,TU)}`, `A ${pU} ${pU} 0 0 1 ${KU(pU,qU)}`, `L ${KU(tU,qU)}`, `A ${tU} ${tU} 0 0 0 ${KU(tU,TU)}`, "Z"].join(" ")
      }
  },
  8461: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(56),
      pU = gU(8400),
      EU = gU(2254);

    function PU() {
      const UU = (0, EU.g)("shopInfo"),
        [, RU] = (0, tU.useReducer)((UU => UU + 1), 0);
      return (0, EU.f)("shopInfo", RU), !(0, pU.c)(UU)
    }
  },
  8363: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      h: () => PU,
      i: () => TU,
      j: () => pU
    });
    var tU = gU(8368);
    const pU = UU => {
        const RU = [];
        UU.holdingGun && RU.push({
          kind: "reload"
        }), UU.touchscreenActionButton && RU.push({
          kind: "touchButton",
          label: UU.touchscreenActionButton
        });
        for (const EU of null !== (gU = null === (pU = UU.customButtons) || void 0 === pU ? void 0 : pU.filter(tU.d)) && void 0 !== gU ? gU : []) {
          var gU, pU;
          RU.push({
            kind: "customButton",
            id: EU.id,
            icon: EU.icon,
            description: EU.description
          })
        }
        return RU
      },
      EU = UU => UU.length >= 2,
      PU = UU => "specialAction" !== UU.kind,
      TU = (UU, RU) => {
        if (null === UU || null === RU) return UU === RU;
        if (UU.kind !== RU.kind) return !1;
        switch (UU.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return UU.action === RU.action;
          case "customButton":
            return UU.id === RU.id && UU.icon === RU.icon;
          case "touchButton":
            return UU.label === RU.label
        }
      }
  },
  8355: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => cU,
      g: () => uU,
      h: () => GU,
      j: () => CU
    });
    var tU = gU(56),
      pU = gU(24),
      EU = gU(1410),
      PU = gU(8363),
      TU = gU(8376);
    let qU = null;
    const KU = () => qU,
      cU = UU => {
        (0, PU.i)(qU, UU) || (qU = UU, pU.p.yh(TU.d, qU))
      },
      GU = () => {
        const [UU, RU] = (0, tU.useState)(KU);
        return (0, EU.e)(TU.d, RU), UU
      };
    let jU = !1;
    const uU = UU => {
        UU !== jU && (jU = UU, pU.p.yh(TU.h, UU))
      },
      CU = () => {
        const [UU, RU] = (0, tU.useState)(jU);
        return (0, EU.e)(TU.h, RU), UU
      }
  },
  8376: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      d: () => tU,
      h: () => pU,
      k: () => TU,
      m: () => qU,
      p: () => KU,
      s: () => PU
    });
    const tU = "controllerActionHintChanged",
      pU = "controllerActionWheelHintChanged",
      EU = "controllerOpenChat",
      PU = "controllerSneakToggledChanged",
      TU = "controllerAttackLatchedChanged",
      qU = "controllerDropStackHoldChanged",
      KU = "controllerPickBlockHintChanged"
  },
  8319: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => EU,
      g: () => qU,
      h: () => TU
    });
    var tU = gU(1410),
      pU = gU(1376);
    const EU = "controllerInventoryCursorChanged",
      PU = {
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
      TU = () => {
        var UU, RU;
        return (0, tU.h)(EU, null !== (UU = null === (RU = (0, pU.g)()) || void 0 === RU ? void 0 : RU.getInventoryCursorState()) && void 0 !== UU ? UU : PU)
      },
      qU = () => {
        var UU, RU;
        return null !== (UU = null === (RU = (0, pU.g)()) || void 0 === RU ? void 0 : RU.isPadSteppingSlots()) && void 0 !== UU && UU
      }
  },
  8316: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => jU,
      h: () => TU,
      j: () => qU,
      l: () => PU,
      m: () => EU,
      q: () => cU,
      s: () => GU
    });
    let tU = null;
    const pU = new Set,
      EU = UU => (tU = UU, () => {
        if (tU === UU) {
          tU = null;
          for (const UU of pU) UU()
        }
      }),
      PU = UU => (pU.add(UU), () => {
        pU.delete(UU)
      }),
      TU = () => tU,
      qU = () => null !== tU;
    let KU = null;
    const cU = UU => {
        KU = UU
      },
      GU = () => {
        const UU = KU;
        return KU = null, UU
      },
      jU = (UU, RU) => {
        var gU, tU;
        return null !== (gU = null !== (tU = UU.find((UU => UU.element === RU))) && void 0 !== tU ? tU : UU.find((UU => UU.element.contains(RU)))) && void 0 !== gU ? gU : null
      }
  },
  8321: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      d: () => PU
    });
    var tU = gU(56);
    const pU = new WeakMap,
      EU = UU => {
        var RU, gU;
        return null !== (RU = null === (gU = pU.get(UU)) || void 0 === gU ? void 0 : gU.current) && void 0 !== RU ? RU : null
      },
      PU = (UU, RU) => {
        const gU = (0, tU.useRef)(RU);
        gU.current = RU;
        const EU = (0, tU.useRef)(null);
        (0, tU.useEffect)((() => {
          const RU = UU.current,
            tU = EU.current;
          RU !== tU && (tU && pU.get(tU) === gU && pU.delete(tU), EU.current = RU, RU && pU.set(RU, gU))
        })), (0, tU.useEffect)((() => () => {
          const UU = EU.current;
          UU && pU.get(UU) === gU && pU.delete(UU), EU.current = null
        }), [])
      }
  },
  8454: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => KU,
      j: () => GU,
      l: () => cU,
      n: () => qU,
      r: () => uU
    });
    var tU = gU(24),
      pU = gU(1864),
      EU = gU(1376),
      PU = gU(1362);
    const TU = UU => {
        var RU, gU;
        return (0, PU.g)() && null !== (RU = null === (gU = (0, EU.g)()) || void 0 === gU ? void 0 : gU.getGlyphForNoaAction(UU)) && void 0 !== RU ? RU : null
      },
      qU = "controllerGlyph:",
      KU = UU => {
        var RU, gU;
        return null !== (RU = null === (gU = (0, EU.g)()) || void 0 === gU ? void 0 : gU.getPadGlyphIconName(UU)) && void 0 !== RU ? RU : `${qU}xbox/${UU}`
      },
      cU = UU => UU.startsWith(qU),
      GU = UU => {
        var RU, gU;
        return cU(UU) && null !== (RU = null === (gU = (0, EU.g)()) || void 0 === gU ? void 0 : gU.getPadGlyphIconUrl(UU)) && void 0 !== RU ? RU : null
      },
      jU = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", PU.c, pU.f, pU.c],
      uU = UU => {
        const RU = jU.map((RU => tU.p.subscribe(RU, UU)));
        return () => {
          for (const UU of RU) tU.p.unsubscribe(UU)
        }
      }
  },
  8307: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => tU
    });
    const tU = "controllerOpenKeyboard",
      pU = "controllerKeyboardVisible"
  },
  8340: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      f: () => pU
    });
    let tU = null;
    const pU = function(UU) {
        const RU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tU = RU, () => {
          tU === RU && (tU = null)
        }
      },
      EU = () => {
        var UU;
        return null !== (UU = tU) && void 0 !== UU && UU.canCycle() ? tU.cycle : null
      }
  },
  8442: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      f: () => PU,
      j: () => EU,
      n: () => tU,
      r: () => TU,
      v: () => KU,
      z: () => cU
    });
    const tU = "controllerActionWheelOpen",
      pU = "controllerActionWheelAim",
      EU = "controllerActionWheelCommit",
      PU = "controllerActionWheelClose",
      TU = "controllerActionWheelPick";
    let qU = !1;
    const KU = () => qU,
      cU = UU => {
        qU = UU
      }
  },
  8440: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => pU
    });
    let tU = 0;
    const pU = () => {
        tU++
      },
      EU = () => tU
  },
  8336: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU,
      f: () => pU,
      i: () => PU,
      k: () => EU,
      o: () => tU,
      r: () => KU
    });
    const tU = "controllerQuickChatWheelOpen",
      pU = "controllerQuickChatWheelAim",
      EU = "controllerQuickChatWheelCommit",
      PU = "controllerQuickChatWheelClose";
    let TU = !1;
    const qU = () => TU,
      KU = UU => {
        TU = UU
      }
  },
  8512: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU,
      d: () => qU
    });
    var tU = gU(21),
      pU = gU(1316),
      EU = gU(96);
    const PU = {
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

    function TU() {
      return (0, EU.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qU = new class {
      constructor(UU) {
        this.deps = UU, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(UU, RU) {
        var gU;
        if (!this.deps.enabled()) return;
        const tU = PU[UU],
          pU = null !== RU && void 0 !== RU ? RU : tU.pattern;
        if (null === pU) return void console.warn("No vibration pattern for", UU);
        const EU = this.deps.now();
        EU - this.lastAnyAt < 40 && tU.priority < this.playingPriority || EU - (null !== (gU = this.lastAt.get(UU)) && void 0 !== gU ? gU : -1 / 0) < tU.minGapMs || EU < this.playingUntil && tU.priority < this.playingPriority || (this.lastAt.set(UU, EU), this.lastAnyAt = EU, this.playingUntil = EU + pU.reduce(((UU, RU) => UU + RU), 0), this.playingPriority = tU.priority, this.deps.vibrate(pU))
      }
    }({
      vibrate: UU => {
        navigator.vibrate([...UU])
      },
      now: () => performance.now(),
      enabled: () => TU() && tU.b.get("isTouchScreen") && tU.b.get("clientEscMenuOptions").vibration && !(0, pU.h)()
    })
  },
  8400: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(8405),
      pU = gU(581),
      EU = gU(135);

    function PU(UU) {
      var RU, gU;
      if ((0, pU.E)(UU)) return !0;
      const PU = null !== (RU = null === (gU = EU.p[EU.t]) || void 0 === gU ? void 0 : gU.adConfig.showRewardedAds) && void 0 !== RU && RU;
      for (const pU in UU) {
        const RU = UU[pU];
        if (null !== RU && void 0 !== RU && RU.items)
          for (const UU in RU.items)
            if ((0, tU.l)(RU.items[UU], PU)) return !1
      }
      return !0
    }
  },
  8421: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      f: () => tU
    });
    const tU = 100;

    function pU(UU) {
      let {
        translationKeys: RU = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return UU.map((UU => {
        var gU;
        return null !== (gU = function(UU, RU) {
          if ("string" === typeof UU) return UU;
          const gU = "str" in UU ? UU.str : UU;
          if ("string" === typeof gU) return gU;
          if ("entityName" in gU) return gU.entityName;
          if (RU && "translationKey" in gU) return `{${gU.translationKey}${void 0===gU.params?"":` ${JSON.stringify(gU.params)}`}}`;
          return null
        }(UU, RU)) && void 0 !== gU ? gU : " "
      })).join("")
    }
  },
  8447: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      f: () => TU,
      j: () => qU
    });
    var tU = gU(2053),
      pU = gU(1238),
      EU = gU(2061);
    const PU = ",";

    function TU(UU) {
      if (!UU) return [];
      const RU = new Set,
        gU = [];
      for (const tU of UU.split(PU)) {
        const UU = tU.trim();
        if ((0, EU.i)(UU) && !RU.has(UU) && (RU.add(UU), gU.push(UU), gU.length >= pU.j)) break
      }
      return gU
    }

    function qU(UU) {
      const RU = new Set,
        gU = [];
      for (const tU of UU)
        if ((0, EU.i)(tU) && !RU.has(tU) && (RU.add(tU), gU.push(tU), gU.length >= pU.j)) break;
      return gU.join(PU)
    }

    function KU() {
      return qU(EU.c)
    }

    function cU(UU) {
      var RU;
      return "emote" === UU ? KU() : null !== (RU = GU[UU][0]) && void 0 !== RU ? RU : jU[UU]
    }
    const GU = pU.r.reduce(((UU, RU) => {
        const gU = [];
        for (const EU in tU.f[RU]) {
          var pU;
          "default" === (null === (pU = (0, tU.j)(RU, EU)) || void 0 === pU ? void 0 : pU.cosmeticPack) && gU.push(EU)
        }
        return UU[RU] = gU, UU
      }), {}),
      jU = pU.r.reduce(((UU, RU) => (UU[RU] = Object.keys(tU.f[RU])[0], UU)), {})
  },
  8405: (UU, RU, gU) => {
    function tU(UU, RU) {
      return !UU.hidden && (RU || !UU.isRewardedAd)
    }

    function pU(UU) {
      return "object" === typeof UU ? UU.option : UU
    }

    function EU(UU, RU) {
      var gU;
      if ("dropdown" === (null === (gU = UU.userInput) || void 0 === gU ? void 0 : gU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
        for (const gU of UU.userInput.dropdownOptions)
          if (pU(gU) === RU) return "object" === typeof gU ? gU.cost : UU.cost;
        console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", RU)
      }
      return UU.cost
    }

    function PU(UU, RU, gU) {
      var tU;
      const pU = null !== (tU = gU.excludedPlayers) && void 0 !== tU ? tU : [RU];
      return UU.filter((UU => !pU.includes(UU)))
    }
    gU.d(RU, {
      e: () => EU,
      h: () => pU,
      i: () => PU,
      l: () => tU
    })
  },
  8444: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);