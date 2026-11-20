export const id = 151;
export const ids = [151];
export const modules = {
  8818: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => oT,
      g: () => mT,
      j: () => bT
    });
    var lT = cT(71),
      MT = cT(4528),
      KT = cT(1130),
      OT = cT(1461),
      yT = cT(36),
      fT = cT(3358),
      xT = cT(2268),
      IT = cT(1244),
      AT = cT(8855),
      CT = cT(1953),
      jT = cT(1996),
      vT = cT(1195),
      tT = cT(31),
      hT = cT(1654),
      NT = cT(1046),
      QT = cT.n(NT),
      ST = cT(8825),
      DT = cT(8827),
      aT = cT(8836),
      FT = cT(8737),
      rT = cT(8840),
      PT = (cT(8849), cT(1099));
    let wT = null;

    function mT() {
      return null !== wT
    }

    function bT() {
      return "pad" === wT
    }

    function zT() {
      return "inGame" === tT.e.get("gameState") && !(0, hT.s)()
    }

    function JT(TT) {
      return (0, DT.A)(TT, IT.n, DT.g, DT.k, DT.o)
    }
    const oT = (0, lT.memo)((function() {
      const {
        t: TT
      } = (0, vT.B)(), {
        userContext: kT
      } = (0, KT.b)(), [cT, tT] = (0, lT.useState)(null), [NT, mT] = (0, lT.useState)(null), bT = (0, lT.useRef)(null), oT = (0, lT.useCallback)((TT => {
        bT.current = TT, mT(TT)
      }), []), HT = (0, lT.useRef)(0), eT = (0, lT.useRef)(null), GT = (0, lT.useRef)({
        x: 0,
        y: 0
      }), [VT, ET] = (0, lT.useState)(0), ZT = (0, lT.useMemo)((() => function(TT) {
        const kT = [];
        for (let lT = 0; lT < IT.n; lT++) {
          var cT;
          kT.push(null !== (cT = TT[lT]) && void 0 !== cT ? cT : null)
        }
        return kT
      }((0, AT.f)(kT.getPlayerCosmetics().emote))), [kT, VT]);
      (0, jT.b)("cosmeticsUpdated", (TT => {
        TT.some((TT => TT.local && "emote" === TT.Qc)) && ET((TT => TT + 1))
      }));
      const uT = (0, lT.useRef)(!1),
        XT = (0, lT.useCallback)((function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === TT && (0, aT.i)(), uT.current = kT, GT.current = {
            x: 0,
            y: 0
          }, oT(null), tT(TT)
        }), [oT]),
        dT = (0, lT.useCallback)((() => {
          tT(null), oT(null), GT.current = {
            x: 0,
            y: 0
          }
        }), [oT]),
        LT = (0, lT.useCallback)((TT => {
          if (Date.now() < HT.current) return;
          const kT = (0, xT.f)(TT),
            cT = !!kT.holdUntilMove,
            lT = cT ? 600 : Math.ceil(1e3 * kT.animation.animation_length / xT.b) + 200;
          HT.current = Date.now() + lT, eT.current = TT, CT.gameBridge.send("playEmote", TT), CT.gameBridge.send("applyTemporaryThirdPerson", cT ? {} : {
            durationMs: lT
          })
        }), []);
      (0, OT.g)("requestToggleEmoteWheel", (() => {
        null === cT ? zT() && XT("click") : dT()
      })), (0, OT.g)("requestEmoteWheelHoldOpen", (() => {
        null === cT && zT() && XT((0, ST.e)() ? "hold" : "click")
      })), (0, OT.g)("requestEmoteWheelPadOpen", (TT => {
        null !== cT || !zT() || (0, FT.c)() || (0, rT.s)() || XT("pad", TT)
      })), (0, OT.g)("requestEmoteRepeatLast", (() => {
        if (null !== cT || !zT() || (0, FT.c)() || (0, rT.s)()) return;
        const TT = eT.current;
        null !== TT && ZT.includes(TT) ? LT(TT) : XT("pad", !0)
      }));
      const RT = () => {
        const TT = bT.current,
          kT = null !== TT ? ZT[TT] : null;
        null !== kT && "pad" === cT && Date.now() < HT.current || (dT(), null !== kT && LT(kT))
      };
      (0, OT.g)("emoteWheelPadAim", (TT => {
        if ("pad" !== cT) return;
        const kT = (0, DT.L)(TT, IT.n, bT.current);
        oT(null !== kT && null !== ZT[kT] ? kT : null)
      })), (0, OT.g)("requestEmoteWheelPadCommit", (TT => {
        "pad" !== cT || TT && uT.current || RT()
      })), (0, OT.g)("appManagerUpdated|activeInputDevice", (TT => {
        null !== cT && "pad" === cT !== ("gamepad" === TT) && dT()
      })), (0, lT.useLayoutEffect)((() => (wT = cT, (0, fT.u)("emoteWheel", "pad" === cT), yT.k.nt(fT.n), () => {
        wT = null, (0, fT.u)("emoteWheel", !1), yT.k.nt(fT.n)
      })), [cT]), (0, OT.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === cT && RT()
      })), (0, OT.g)("requestEmoteWheelClose", (() => {
        null !== cT && dT()
      })), (0, OT.g)("appManagerUpdated|gameState", (TT => {
        "inGame" !== TT && dT()
      }));
      const gT = () => {
        (0, hT.s)() && dT()
      };
      if ((0, OT.g)("appManagerUpdated|openEverythingMenuName", gT), (0, OT.g)("appManagerUpdated|openInGameMenuName", gT), (0, OT.g)("pointerLockUpdate", (TT => {
          TT || "hold" !== cT || dT()
        })), (0, lT.useEffect)((() => {
          if (null === cT) return;
          const TT = TT => {
            "Escape" === TT.key && (TT.stopImmediatePropagation(), TT.preventDefault(), dT())
          };
          return document.addEventListener("keydown", TT, !0), () => {
            document.removeEventListener("keydown", TT, !0)
          }
        }), [cT, dT]), (0, MT.c)(!0, "click" === cT, "EmoteWheelOverlay"), (0, lT.useEffect)((() => {
          if ("hold" === cT) return CT.gameBridge.send("holdEmoteWheel", !0), () => {
            CT.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [cT]), (0, lT.useEffect)((() => {
          if ("hold" !== cT) return;
          const TT = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            kT = DT.w * TT,
            lT = DT.s * TT,
            MT = TT => {
              let cT = GT.current.x + TT.movementX,
                MT = GT.current.y + TT.movementY;
              const KT = Math.hypot(cT, MT);
              if (KT > kT) {
                const TT = kT / KT;
                cT *= TT, MT *= TT
              }
              GT.current = {
                x: cT,
                y: MT
              }, oT(function(TT, kT, cT, lT) {
                if (Math.hypot(TT, kT) < cT) return null;
                const MT = (0, DT.D)(TT, kT, IT.n);
                return null === lT[MT] ? null : MT
              }(cT, MT, lT, ZT))
            };
          return document.addEventListener("mousemove", MT), () => {
            document.removeEventListener("mousemove", MT)
          }
        }), [cT, ZT, oT]), null === cT) return null;
      const UT = "hold" === cT || "pad" === cT,
        YT = null !== NT ? ZT[NT] : null,
        BT = null !== YT ? (0, xT.f)(YT).displayName : TT("emotes:pickEmote");
      return (0, PT.jsx)("div", {
        className: QT()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === cT
        }),
        onMouseDown: TT => {
          TT.target === TT.currentTarget && dT()
        },
        children: (0, PT.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * DT.w + "rem",
            height: 2 * DT.w + "rem"
          },
          children: [(0, PT.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${DT.r} ${DT.r}`,
            children: [ZT.map(((kT, cT) => {
              const lT = null !== kT,
                MT = UT && cT === NT;
              return (0, PT.jsx)("path", {
                d: JT(cT),
                className: QT()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: MT,
                  EmoteWheelWedgeDisabled: !lT
                }),
                onClick: TT => {
                  TT.stopPropagation(), null !== kT && (TT => {
                    dT(), LT(TT)
                  })(kT)
                },
                "aria-label": null !== kT ? (0, xT.f)(kT).displayName : TT("emotes:emptySlot")
              }, cT)
            })), (0, PT.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: DT.g,
              cy: DT.g,
              r: DT.o
            }), (0, PT.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: DT.g,
              cy: DT.g,
              r: DT.k
            }), UT && null !== NT && (0, PT.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: JT(NT)
            })]
          }), ZT.map(((TT, kT) => {
            const cT = null !== TT,
              lT = UT && kT === NT,
              MT = (0, DT.H)(kT, IT.n),
              KT = DT.d * Math.cos(MT),
              OT = DT.d * Math.sin(MT);
            return (0, PT.jsx)("div", {
              className: QT()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: lT,
                EmoteWheelSlotIconDisabled: !cT
              }),
              style: {
                left: `calc(50% + ${KT}rem)`,
                top: `calc(50% + ${OT}rem)`,
                backgroundImage: cT ? `url(/textures/charSkins/previews/emote_${TT}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, kT)
          })), (0, PT.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: BT
          })]
        })
      })
    }))
  },
  8813: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => AT,
      e: () => vT,
      f: () => tT,
      h: () => jT,
      l: () => CT
    });
    var lT = cT(71),
      MT = cT(8816),
      KT = cT(36),
      OT = cT(1953),
      yT = cT(47),
      fT = cT(1274),
      xT = cT(1974);
    const IT = 50;
    const AT = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = TT => {
          if (0 === this.listeners.size) {
            var kT, cT;
            this.state = {
              ...this.state,
              channel: null !== (kT = null === (cT = xT.b.get("chatChannels")) || void 0 === cT ? void 0 : cT[0]) && void 0 !== kT ? kT : null
            };
            const TT = KT.k.subscribe("reportPlayer", (TT => {
              let {
                playerEId: kT
              } = TT;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, kT]
              })
            }));
            this.stopListening = [OT.gameBridge.subscribe("chatReceived", (TT => {
              let {
                serverChatMsgId: kT,
                content: cT,
                author: lT
              } = TT;
              this.addMessage(kT, cT, lT)
            })), () => {
              KT.k.unsubscribe(TT)
            }, xT.b.subscribe("chatChannels", (TT => {
              var kT;
              this.setState({
                ...this.state,
                channel: null !== (kT = null === TT || void 0 === TT ? void 0 : TT[0]) && void 0 !== kT ? kT : null
              })
            }))]
          }
          return this.listeners.add(TT), () => {
            if (this.listeners.delete(TT), 0 === this.listeners.size) {
              for (const TT of this.stopListening) TT();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const lT = {
          serverChatMsgId: TT,
          content: kT,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: cT
        };
        this.setState({
          ...this.state,
          messages: [lT, ...this.state.messages].slice(0, MT.h)
        })
      }
      selectNextChannel() {
        const TT = xT.b.get("chatChannels");
        if (TT) {
          const kT = TT.findIndex((TT => {
            var kT;
            return TT.channelName === (null === (kT = this.state.channel) || void 0 === kT ? void 0 : kT.channelName)
          }));
          this.setState({
            ...this.state,
            channel: TT[(kT + 1) % TT.length]
          })
        }
      }
      setState(TT) {
        this.state = TT;
        for (const kT of this.listeners) kT()
      }
    };

    function CT() {
      const [TT, kT] = (0, lT.useState)(AT.getState);
      return (0, lT.useEffect)((() => {
        const TT = AT.subscribe((() => {
          kT(AT.getState())
        }));
        return kT(AT.getState()), TT
      }), []), TT
    }

    function jT(TT) {
      var kT, cT;
      if (TT.startsWith("/report")) {
        var lT;
        const kT = null !== (lT = TT.replace("/report", "").trim().split(" ")[0]) && void 0 !== lT ? lT : "";
        if ("" === kT) return void AT.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const cT = OT.gameBridge.latest("players"),
          MT = OT.gameBridge.latest("hiddenPlayerNames"),
          yT = TT => {
            var lT, KT;
            const OT = null !== (lT = null === (KT = cT.byId[TT]) || void 0 === KT ? void 0 : KT.name) && void 0 !== lT ? lT : null;
            return null !== OT && (OT === kT || (0, fT.e)(OT, MT) === kT)
          };
        if (null !== cT.localId && yT(cT.localId)) return void AT.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const TT of cT.ids)
          if (yT(TT)) return KT.k.nt("OpenReportMenu", {
            playerEId: TT,
            playerName: cT.byId[TT].name,
            vI: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        AT.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      OT.gameBridge.send("sendChatMessage", {
          vI: TT,
          channelName: null !== (kT = null === (cT = AT.getState().channel) || void 0 === cT ? void 0 : cT.channelName) && void 0 !== kT ? kT : null
        }),
        function(TT) {
          var kT;
          const cT = null !== (kT = yT.e.getItem("recentlySentChatMsgs")) && void 0 !== kT ? kT : [];
          cT.push(TT), cT.length > IT && cT.shift();
          yT.e.setItem("recentlySentChatMsgs", cT)
        }(TT)
    }

    function vT() {
      var TT;
      return null !== (TT = yT.e.getItem("recentlySentChatMsgs")) && void 0 !== TT ? TT : []
    }

    function tT(TT) {
      var kT;
      let cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const lT = null !== (kT = yT.e.getItem("recentlySentChatMsgs")) && void 0 !== kT ? kT : [],
        MT = lT.length + 1,
        KT = cT ? (TT % MT + MT) % MT : Math.min(lT.length, Math.max(0, TT));
      return {
        stepsBack: KT,
        text: 0 === KT ? "" : lT[lT.length - KT]
      }
    }
  },
  8771: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      d: () => KT
    });
    var lT = cT(2022);
    const MT = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      KT = TT => "string" === typeof TT.icon && "" !== TT.icon && "string" === typeof TT.keycode && MT.test(TT.keycode),
      OT = TT => "Space" === TT ? "_" : lT.i[TT]
  },
  8825: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(31);

    function MT() {
      return !lT.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8918: (TT, kT, cT) => {
    function lT(TT) {
      return {
        x: (TT.left + TT.right) / 2,
        y: (TT.top + TT.bottom) / 2
      }
    }

    function MT(TT) {
      return 0 === TT.length ? null : TT.reduce(((TT, kT) => ({
        left: Math.min(TT.left, kT.left),
        top: Math.min(TT.top, kT.top),
        right: Math.max(TT.right, kT.right),
        bottom: Math.max(TT.bottom, kT.bottom)
      })))
    }

    function KT(TT, kT) {
      const cT = Math.max(0, (kT - (TT.right - TT.left)) / 2),
        lT = Math.max(0, (kT - (TT.bottom - TT.top)) / 2);
      return {
        left: TT.left - cT,
        top: TT.top - lT,
        right: TT.right + cT,
        bottom: TT.bottom + lT
      }
    }

    function OT(TT, kT) {
      return kT.x >= TT.left && kT.x <= TT.right && kT.y >= TT.top && kT.y <= TT.bottom
    }

    function yT(TT, kT, cT) {
      let MT = null,
        yT = 1 / 0;
      for (const {
          id: lT,
          box: KT
        }
        of kT) {
        const kT = (KT.right - KT.left) * (KT.bottom - KT.top);
        OT(KT, TT) && kT < yT && (yT = kT, MT = lT)
      }
      if (null !== MT) return MT;
      let fT = 1 / 0;
      for (const {
          id: xT,
          box: IT
        }
        of kT) {
        if (!OT(KT(IT, cT), TT)) continue;
        const kT = lT(IT),
          yT = Math.hypot(TT.x - kT.x, TT.y - kT.y);
        yT < fT && (fT = yT, MT = xT)
      }
      return MT
    }

    function fT(TT, kT, cT) {
      return {
        left: cT.left,
        top: cT.top,
        right: TT - cT.right,
        bottom: kT - cT.bottom
      }
    }

    function xT(TT, kT, cT, lT) {
      const MT = (TT, kT, cT) => Math.max(Math.min(kT, 0), Math.min(Math.max(cT, 0), TT));
      return {
        x: MT(kT, lT.left - TT.left, lT.right - TT.right),
        y: MT(cT, lT.top - TT.top, lT.bottom - TT.bottom)
      }
    }

    function IT(TT, kT, cT, lT, MT) {
      const KT = TT.dx * lT + kT,
        OT = TT.dy * MT + cT,
        yT = TT => Math.max(-1, Math.min(1, TT));
      return {
        dx: yT(KT / lT),
        dy: yT(OT / MT)
      }
    }

    function AT(TT, kT, cT, lT) {
      return kT <= 0 || cT <= 0 ? 1 : Math.max(.05, Math.min(1, TT / kT, lT / cT))
    }

    function CT(TT, kT, cT) {
      return Math.min(TT.right, kT.right) - Math.max(TT.left, kT.left) > cT && Math.min(TT.bottom, kT.bottom) - Math.max(TT.top, kT.top) > cT
    }

    function jT(TT, kT) {
      const cT = (TT, kT, cT, lT) => kT - TT > lT - cT ? cT - TT > kT - lT ? lT - kT : cT - TT : TT < cT ? cT - TT : kT > lT ? lT - kT : 0;
      return {
        x: cT(TT.left, TT.right, kT.left, kT.right),
        y: cT(TT.top, TT.bottom, kT.top, kT.bottom)
      }
    }

    function vT(TT, kT) {
      let {
        avoid: cT = null,
        bounds: lT = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, MT = 0, KT = 1 / 0;
      return TT.forEach(((TT, OT) => {
        const yT = kT.filter((kT => CT(TT, kT, 0))).length,
          fT = null !== lT && (TT.left < lT.left || TT.top < lT.top || TT.right > lT.right || TT.bottom > lT.bottom),
          xT = yT + (cT && CT(TT, cT, 0) ? 1e3 : 0) + (fT ? 1e6 : 0);
        xT < KT && (MT = OT, KT = xT)
      })), MT
    }
    cT.d(kT, {
      B: () => jT,
      E: () => MT,
      b: () => lT,
      d: () => OT,
      f: () => CT,
      j: () => xT,
      k: () => KT,
      o: () => vT,
      s: () => IT,
      v: () => yT,
      y: () => AT,
      z: () => fT
    })
  },
  8827: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      D: () => AT,
      H: () => IT,
      K: () => CT,
      L: () => jT,
      d: () => KT,
      g: () => yT,
      k: () => xT,
      o: () => fT,
      r: () => OT,
      s: () => MT,
      w: () => lT
    });
    const lT = 14,
      MT = 6,
      KT = (lT + MT) / 2,
      OT = 200,
      yT = OT / 2,
      fT = OT / 2 - 1,
      xT = MT / lT * (OT / 2),
      IT = (TT, kT) => -Math.PI / 2 + 2 * TT * Math.PI / kT,
      AT = (TT, kT, cT) => {
        const lT = 2 * Math.PI / cT;
        return (Math.round((Math.atan2(kT, TT) + Math.PI / 2) / lT) % cT + cT) % cT
      },
      CT = .5,
      jT = (TT, kT, cT) => Math.hypot(TT.x, TT.y) < CT ? cT : AT(TT.x, TT.y, kT),
      vT = (TT, kT, cT, lT, MT) => {
        const KT = Math.PI / kT,
          OT = IT(TT, kT),
          yT = OT - KT,
          fT = OT + KT,
          xT = (TT, kT) => `${cT+TT*Math.cos(kT)} ${cT+TT*Math.sin(kT)}`;
        return [`M ${xT(lT,yT)}`, `L ${xT(MT,yT)}`, `A ${MT} ${MT} 0 0 1 ${xT(MT,fT)}`, `L ${xT(lT,fT)}`, `A ${lT} ${lT} 0 0 0 ${xT(lT,yT)}`, "Z"].join(" ")
      }
  },
  8867: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT
    });
    var lT = cT(71),
      MT = cT(8802),
      KT = cT(2462);

    function OT() {
      const TT = (0, KT.f)("shopInfo"),
        [, kT] = (0, lT.useReducer)((TT => TT + 1), 0);
      return (0, KT.e)("shopInfo", kT), !(0, MT.b)(TT)
    }
  },
  8767: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      f: () => OT,
      g: () => yT,
      h: () => MT
    });
    var lT = cT(8771);
    const MT = TT => {
        const kT = [];
        TT.holdingGun && kT.push({
          kind: "reload"
        }), TT.touchscreenActionButton && kT.push({
          kind: "touchButton",
          label: TT.touchscreenActionButton
        });
        for (const KT of null !== (cT = null === (MT = TT.customButtons) || void 0 === MT ? void 0 : MT.filter(lT.d)) && void 0 !== cT ? cT : []) {
          var cT, MT;
          kT.push({
            kind: "customButton",
            id: KT.id,
            icon: KT.icon,
            description: KT.description
          })
        }
        return kT
      },
      KT = TT => TT.length >= 2,
      OT = TT => "specialAction" !== TT.kind,
      yT = (TT, kT) => {
        if (null === TT || null === kT) return TT === kT;
        if (TT.kind !== kT.kind) return !1;
        switch (TT.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return TT.action === kT.action;
          case "customButton":
            return TT.id === kT.id && TT.icon === kT.icon;
          case "touchButton":
            return TT.label === kT.label
        }
      }
  },
  8762: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      e: () => jT,
      f: () => AT,
      i: () => vT
    });
    var lT = cT(71),
      MT = cT(36),
      KT = cT(1461),
      OT = cT(8767),
      yT = cT(8777);
    let fT = null;
    const xT = () => fT,
      IT = TT => {
        (0, OT.g)(fT, TT) || (fT = TT, MT.k.nt(yT.e, fT))
      },
      AT = () => {
        const [TT, kT] = (0, lT.useState)(xT);
        return (0, KT.g)(yT.e, kT), TT
      };
    let CT = !1;
    const jT = TT => {
        TT !== CT && (CT = TT, MT.k.nt(yT.h, TT))
      },
      vT = () => {
        const [TT, kT] = (0, lT.useState)(CT);
        return (0, KT.g)(yT.h, kT), TT
      }
  },
  8777: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      e: () => lT,
      h: () => MT,
      j: () => yT,
      n: () => fT,
      q: () => xT,
      u: () => OT
    });
    const lT = "controllerActionHintChanged",
      MT = "controllerActionWheelHintChanged",
      KT = "controllerOpenChat",
      OT = "controllerSneakToggledChanged",
      yT = "controllerAttackLatchedChanged",
      fT = "controllerDropStackHoldChanged",
      xT = "controllerPickBlockHintChanged"
  },
  8719: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      h: () => KT,
      i: () => fT,
      l: () => yT
    });
    var lT = cT(1461),
      MT = cT(1420);
    const KT = "controllerInventoryCursorChanged",
      OT = {
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
      yT = () => {
        var TT, kT;
        return (0, lT.i)(KT, null !== (TT = null === (kT = (0, MT.g)()) || void 0 === kT ? void 0 : kT.getInventoryCursorState()) && void 0 !== TT ? TT : OT)
      },
      fT = () => {
        var TT, kT;
        return null !== (TT = null === (kT = (0, MT.g)()) || void 0 === kT ? void 0 : kT.isPadSteppingSlots()) && void 0 !== TT && TT
      }
  },
  8716: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => CT,
      f: () => yT,
      h: () => fT,
      l: () => OT,
      o: () => KT,
      q: () => IT,
      s: () => AT
    });
    let lT = null;
    const MT = new Set,
      KT = TT => (lT = TT, () => {
        if (lT === TT) {
          lT = null;
          for (const TT of MT) TT()
        }
      }),
      OT = TT => (MT.add(TT), () => {
        MT.delete(TT)
      }),
      yT = () => lT,
      fT = () => null !== lT;
    let xT = null;
    const IT = TT => {
        xT = TT
      },
      AT = () => {
        const TT = xT;
        return xT = null, TT
      },
      CT = (TT, kT) => {
        var cT, lT;
        return null !== (cT = null !== (lT = TT.find((TT => TT.element === kT))) && void 0 !== lT ? lT : TT.find((TT => TT.element.contains(kT)))) && void 0 !== cT ? cT : null
      }
  },
  8725: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      d: () => OT
    });
    var lT = cT(71);
    const MT = new WeakMap,
      KT = TT => {
        var kT, cT;
        return null !== (kT = null === (cT = MT.get(TT)) || void 0 === cT ? void 0 : cT.current) && void 0 !== kT ? kT : null
      },
      OT = (TT, kT) => {
        const cT = (0, lT.useRef)(kT);
        cT.current = kT;
        const KT = (0, lT.useRef)(null);
        (0, lT.useEffect)((() => {
          const kT = TT.current,
            lT = KT.current;
          kT !== lT && (lT && MT.get(lT) === cT && MT.delete(lT), KT.current = kT, kT && MT.set(kT, cT))
        })), (0, lT.useEffect)((() => () => {
          const TT = KT.current;
          TT && MT.get(TT) === cT && MT.delete(TT), KT.current = null
        }), [])
      }
  },
  8857: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      h: () => xT,
      i: () => AT,
      m: () => IT,
      q: () => fT,
      t: () => jT
    });
    var lT = cT(36),
      MT = cT(2040),
      KT = cT(1420),
      OT = cT(1409);
    const yT = TT => {
        var kT, cT;
        return (0, OT.h)() && null !== (kT = null === (cT = (0, KT.g)()) || void 0 === cT ? void 0 : cT.getGlyphForNoaAction(TT)) && void 0 !== kT ? kT : null
      },
      fT = "controllerGlyph:",
      xT = TT => {
        var kT, cT;
        return null !== (kT = null === (cT = (0, KT.g)()) || void 0 === cT ? void 0 : cT.getPadGlyphIconName(TT)) && void 0 !== kT ? kT : `${fT}xbox/${TT}`
      },
      IT = TT => TT.startsWith(fT),
      AT = TT => {
        var kT, cT;
        return IT(TT) && null !== (kT = null === (cT = (0, KT.g)()) || void 0 === cT ? void 0 : cT.getPadGlyphIconUrl(TT)) && void 0 !== kT ? kT : null
      },
      CT = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", OT.d, MT.d, MT.b],
      jT = TT => {
        const kT = CT.map((kT => lT.k.subscribe(kT, TT)));
        return () => {
          for (const TT of kT) lT.k.unsubscribe(TT)
        }
      }
  },
  8691: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      g: () => lT
    });
    const lT = "controllerOpenKeyboard",
      MT = "controllerKeyboardVisible"
  },
  8746: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      e: () => MT
    });
    let lT = null;
    const MT = function(TT) {
        const kT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return lT = kT, () => {
          lT === kT && (lT = null)
        }
      },
      KT = () => {
        var TT;
        return null !== (TT = lT) && void 0 !== TT && TT.canCycle() ? lT.cycle : null
      }
  },
  8840: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => OT,
      l: () => KT,
      p: () => lT,
      r: () => yT,
      s: () => xT,
      u: () => IT
    });
    const lT = "controllerActionWheelOpen",
      MT = "controllerActionWheelAim",
      KT = "controllerActionWheelCommit",
      OT = "controllerActionWheelClose",
      yT = "controllerActionWheelPick";
    let fT = !1;
    const xT = () => fT,
      IT = TT => {
        fT = TT
      }
  },
  8836: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      i: () => MT
    });
    let lT = 0;
    const MT = () => {
        lT++
      },
      KT = () => lT
  },
  8737: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT,
      g: () => MT,
      i: () => OT,
      l: () => KT,
      n: () => lT,
      q: () => xT
    });
    const lT = "controllerQuickChatWheelOpen",
      MT = "controllerQuickChatWheelAim",
      KT = "controllerQuickChatWheelCommit",
      OT = "controllerQuickChatWheelClose";
    let yT = !1;
    const fT = () => yT,
      xT = TT => {
        yT = TT
      }
  },
  8911: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      f: () => fT
    });
    var lT = cT(31),
      MT = cT(1327),
      KT = cT(118);
    const OT = {
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

    function yT() {
      return (0, KT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const fT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, kT) {
        var cT;
        if (!this.deps.enabled()) return;
        const lT = OT[TT],
          MT = null !== kT && void 0 !== kT ? kT : lT.pattern;
        if (null === MT) return void console.warn("No vibration pattern for", TT);
        const KT = this.deps.now();
        KT - this.lastAnyAt < 40 && lT.priority < this.playingPriority || KT - (null !== (cT = this.lastAt.get(TT)) && void 0 !== cT ? cT : -1 / 0) < lT.minGapMs || KT < this.playingUntil && lT.priority < this.playingPriority || (this.lastAt.set(TT, KT), this.lastAnyAt = KT, this.playingUntil = KT + MT.reduce(((TT, kT) => TT + kT), 0), this.playingPriority = lT.priority, this.deps.vibrate(MT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => yT() && lT.e.get("isTouchScreen") && lT.e.get("clientEscMenuOptions").vibration && !(0, MT.e)()
    })
  },
  8802: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(8808),
      MT = cT(617),
      KT = cT(159);

    function OT(TT) {
      var kT, cT;
      if ((0, MT.R)(TT)) return !0;
      const OT = null !== (kT = null === (cT = KT.p[KT.u]) || void 0 === cT ? void 0 : cT.adConfig.showRewardedAds) && void 0 !== kT && kT;
      for (const MT in TT) {
        const kT = TT[MT];
        if (null !== kT && void 0 !== kT && kT.items)
          for (const TT in kT.items)
            if ((0, lT.p)(kT.items[TT], OT)) return !1
      }
      return !0
    }
  },
  8816: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      h: () => lT
    });
    const lT = 100;

    function MT(TT) {
      let {
        translationKeys: kT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return TT.map((TT => {
        var cT;
        return null !== (cT = function(TT, kT) {
          if ("string" === typeof TT) return TT;
          const cT = "str" in TT ? TT.str : TT;
          if ("string" === typeof cT) return cT;
          if ("entityName" in cT) return cT.entityName;
          if (kT && "translationKey" in cT) return `{${cT.translationKey}${void 0===cT.params?"":` ${JSON.stringify(cT.params)}`}}`;
          return null
        }(TT, kT)) && void 0 !== cT ? cT : " "
      })).join("")
    }
  },
  8855: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => yT,
      i: () => fT
    });
    var lT = cT(2260),
      MT = cT(1244),
      KT = cT(2268);
    const OT = ",";

    function yT(TT) {
      if (!TT) return [];
      const kT = new Set,
        cT = [];
      for (const lT of TT.split(OT)) {
        const TT = lT.trim();
        if ((0, KT.g)(TT) && !kT.has(TT) && (kT.add(TT), cT.push(TT), cT.length >= MT.n)) break
      }
      return cT
    }

    function fT(TT) {
      const kT = new Set,
        cT = [];
      for (const lT of TT)
        if ((0, KT.g)(lT) && !kT.has(lT) && (kT.add(lT), cT.push(lT), cT.length >= MT.n)) break;
      return cT.join(OT)
    }

    function xT() {
      return fT(KT.e)
    }

    function IT(TT) {
      var kT;
      return "emote" === TT ? xT() : null !== (kT = AT[TT][0]) && void 0 !== kT ? kT : CT[TT]
    }
    const AT = MT.u.reduce(((TT, kT) => {
        const cT = [];
        for (const KT in lT.e[kT]) {
          var MT;
          "default" === (null === (MT = (0, lT.j)(kT, KT)) || void 0 === MT ? void 0 : MT.cosmeticPack) && cT.push(KT)
        }
        return TT[kT] = cT, TT
      }), {}),
      CT = MT.u.reduce(((TT, kT) => (TT[kT] = Object.keys(lT.e[kT])[0], TT)), {})
  },
  8808: (TT, kT, cT) => {
    function lT(TT, kT) {
      return !TT.hidden && (kT || !TT.isRewardedAd)
    }

    function MT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function KT(TT, kT) {
      var cT;
      if ("dropdown" === (null === (cT = TT.userInput) || void 0 === cT ? void 0 : cT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const cT of TT.userInput.dropdownOptions)
          if (MT(cT) === kT) return "object" === typeof cT ? cT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", kT)
      }
      return TT.cost
    }

    function OT(TT, kT, cT) {
      var lT;
      const MT = null !== (lT = cT.excludedPlayers) && void 0 !== lT ? lT : [kT];
      return TT.filter((TT => !MT.includes(TT)))
    }
    cT.d(kT, {
      e: () => KT,
      h: () => MT,
      l: () => OT,
      p: () => lT
    })
  },
  8849: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);