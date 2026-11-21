export const id = 152;
export const ids = [152];
export const modules = {
  8537: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => IQ,
      i: () => RQ,
      m: () => OQ
    });
    var LQ = wQ(53),
      qQ = wQ(4388),
      oQ = wQ(1140),
      DQ = wQ(1447),
      kQ = wQ(22),
      vQ = wQ(3288),
      mQ = wQ(2153),
      uQ = wQ(1254),
      HQ = wQ(8582),
      bQ = wQ(1897),
      YQ = wQ(1927),
      xQ = wQ(1207),
      AQ = wQ(17),
      tQ = wQ(1641),
      eQ = wQ(1070),
      MQ = wQ.n(eQ),
      GQ = wQ(8541),
      pQ = wQ(8550),
      cQ = wQ(8557),
      CQ = wQ(8462),
      SQ = wQ(8566),
      iQ = (wQ(8575), wQ(1107));
    let WQ = null;

    function RQ() {
      return null !== WQ
    }

    function OQ() {
      return "pad" === WQ
    }

    function sQ() {
      return "inGame" === AQ.c.get("gameState") && !(0, tQ.m)()
    }

    function rQ(QQ) {
      return (0, pQ.t)(QQ, uQ.q, pQ.d, pQ.f, pQ.i)
    }
    const IQ = (0, LQ.memo)((function() {
      const {
        t: QQ
      } = (0, xQ.y)(), {
        userContext: FQ
      } = (0, oQ.e)(), [wQ, AQ] = (0, LQ.useState)(null), [eQ, RQ] = (0, LQ.useState)(null), OQ = (0, LQ.useRef)(null), IQ = (0, LQ.useCallback)((QQ => {
        OQ.current = QQ, RQ(QQ)
      }), []), UQ = (0, LQ.useRef)(0), NQ = (0, LQ.useRef)(null), TQ = (0, LQ.useRef)({
        x: 0,
        y: 0
      }), [KQ, zQ] = (0, LQ.useState)(0), lQ = (0, LQ.useMemo)((() => function(QQ) {
        const FQ = [];
        for (let LQ = 0; LQ < uQ.q; LQ++) {
          var wQ;
          FQ.push(null !== (wQ = QQ[LQ]) && void 0 !== wQ ? wQ : null)
        }
        return FQ
      }((0, HQ.g)(FQ.getPlayerCosmetics().emote))), [FQ, KQ]);
      (0, YQ.d)("cosmeticsUpdated", (QQ => {
        QQ.some((QQ => QQ.local && "emote" === QQ.SL)) && zQ((QQ => QQ + 1))
      }));
      const jQ = (0, LQ.useRef)(!1),
        aQ = (0, LQ.useCallback)((function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === QQ && (0, cQ.h)(), jQ.current = FQ, TQ.current = {
            x: 0,
            y: 0
          }, IQ(null), AQ(QQ)
        }), [IQ]),
        XQ = (0, LQ.useCallback)((() => {
          AQ(null), IQ(null), TQ.current = {
            x: 0,
            y: 0
          }
        }), [IQ]),
        fQ = (0, LQ.useCallback)((QQ => {
          if (Date.now() < UQ.current) return;
          const FQ = (0, mQ.f)(QQ),
            wQ = !!FQ.holdUntilMove,
            LQ = wQ ? 600 : Math.ceil(1e3 * FQ.animation.animation_length / mQ.c) + 200;
          UQ.current = Date.now() + LQ, NQ.current = QQ, bQ.gameBridge.send("playEmote", QQ), bQ.gameBridge.send("applyTemporaryThirdPerson", wQ ? {} : {
            durationMs: LQ
          })
        }), []);
      (0, DQ.g)("requestToggleEmoteWheel", (() => {
        null === wQ ? sQ() && aQ("click") : XQ()
      })), (0, DQ.g)("requestEmoteWheelHoldOpen", (() => {
        null === wQ && sQ() && aQ((0, GQ.b)() ? "hold" : "click")
      })), (0, DQ.g)("requestEmoteWheelPadOpen", (QQ => {
        null !== wQ || !sQ() || (0, CQ.e)() || (0, SQ.r)() || aQ("pad", QQ)
      })), (0, DQ.g)("requestEmoteRepeatLast", (() => {
        if (null !== wQ || !sQ() || (0, CQ.e)() || (0, SQ.r)()) return;
        const QQ = NQ.current;
        null !== QQ && lQ.includes(QQ) ? fQ(QQ) : aQ("pad", !0)
      }));
      const VQ = () => {
        const QQ = OQ.current,
          FQ = null !== QQ ? lQ[QQ] : null;
        null !== FQ && "pad" === wQ && Date.now() < UQ.current || (XQ(), null !== FQ && fQ(FQ))
      };
      (0, DQ.g)("emoteWheelPadAim", (QQ => {
        if ("pad" !== wQ) return;
        const FQ = (0, pQ.B)(QQ, uQ.q, OQ.current);
        IQ(null !== FQ && null !== lQ[FQ] ? FQ : null)
      })), (0, DQ.g)("requestEmoteWheelPadCommit", (QQ => {
        "pad" !== wQ || QQ && jQ.current || VQ()
      })), (0, DQ.g)("appManagerUpdated|activeInputDevice", (QQ => {
        null !== wQ && "pad" === wQ !== ("gamepad" === QQ) && XQ()
      })), (0, LQ.useLayoutEffect)((() => (WQ = wQ, (0, vQ.u)("emoteWheel", "pad" === wQ), kQ.l.GA(vQ.p), () => {
        WQ = null, (0, vQ.u)("emoteWheel", !1), kQ.l.GA(vQ.p)
      })), [wQ]), (0, DQ.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === wQ && VQ()
      })), (0, DQ.g)("requestEmoteWheelClose", (() => {
        null !== wQ && XQ()
      })), (0, DQ.g)("appManagerUpdated|gameState", (QQ => {
        "inGame" !== QQ && XQ()
      }));
      const hQ = () => {
        (0, tQ.m)() && XQ()
      };
      if ((0, DQ.g)("appManagerUpdated|openEverythingMenuName", hQ), (0, DQ.g)("appManagerUpdated|openInGameMenuName", hQ), (0, DQ.g)("pointerLockUpdate", (QQ => {
          QQ || "hold" !== wQ || XQ()
        })), (0, LQ.useEffect)((() => {
          if (null === wQ) return;
          const QQ = QQ => {
            "Escape" === QQ.key && (QQ.stopImmediatePropagation(), QQ.preventDefault(), XQ())
          };
          return document.addEventListener("keydown", QQ, !0), () => {
            document.removeEventListener("keydown", QQ, !0)
          }
        }), [wQ, XQ]), (0, qQ.d)(!0, "click" === wQ, "EmoteWheelOverlay"), (0, LQ.useEffect)((() => {
          if ("hold" === wQ) return bQ.gameBridge.send("holdEmoteWheel", !0), () => {
            bQ.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [wQ]), (0, LQ.useEffect)((() => {
          if ("hold" !== wQ) return;
          const QQ = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            FQ = pQ.p * QQ,
            LQ = pQ.n * QQ,
            qQ = QQ => {
              let wQ = TQ.current.x + QQ.movementX,
                qQ = TQ.current.y + QQ.movementY;
              const oQ = Math.hypot(wQ, qQ);
              if (oQ > FQ) {
                const QQ = FQ / oQ;
                wQ *= QQ, qQ *= QQ
              }
              TQ.current = {
                x: wQ,
                y: qQ
              }, IQ(function(QQ, FQ, wQ, LQ) {
                if (Math.hypot(QQ, FQ) < wQ) return null;
                const qQ = (0, pQ.v)(QQ, FQ, uQ.q);
                return null === LQ[qQ] ? null : qQ
              }(wQ, qQ, LQ, lQ))
            };
          return document.addEventListener("mousemove", qQ), () => {
            document.removeEventListener("mousemove", qQ)
          }
        }), [wQ, lQ, IQ]), null === wQ) return null;
      const JQ = "hold" === wQ || "pad" === wQ,
        EQ = null !== eQ ? lQ[eQ] : null,
        nQ = null !== EQ ? (0, mQ.f)(EQ).displayName : QQ("emotes:pickEmote");
      return (0, iQ.jsx)("div", {
        className: MQ()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === wQ
        }),
        onMouseDown: QQ => {
          QQ.target === QQ.currentTarget && XQ()
        },
        children: (0, iQ.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * pQ.p + "rem",
            height: 2 * pQ.p + "rem"
          },
          children: [(0, iQ.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${pQ.k} ${pQ.k}`,
            children: [lQ.map(((FQ, wQ) => {
              const LQ = null !== FQ,
                qQ = JQ && wQ === eQ;
              return (0, iQ.jsx)("path", {
                d: rQ(wQ),
                className: MQ()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: qQ,
                  EmoteWheelWedgeDisabled: !LQ
                }),
                onClick: QQ => {
                  QQ.stopPropagation(), null !== FQ && (QQ => {
                    XQ(), fQ(QQ)
                  })(FQ)
                },
                "aria-label": null !== FQ ? (0, mQ.f)(FQ).displayName : QQ("emotes:emptySlot")
              }, wQ)
            })), (0, iQ.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: pQ.d,
              cy: pQ.d,
              r: pQ.i
            }), (0, iQ.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: pQ.d,
              cy: pQ.d,
              r: pQ.f
            }), JQ && null !== eQ && (0, iQ.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: rQ(eQ)
            })]
          }), lQ.map(((QQ, FQ) => {
            const wQ = null !== QQ,
              LQ = JQ && FQ === eQ,
              qQ = (0, pQ.y)(FQ, uQ.q),
              oQ = pQ.b * Math.cos(qQ),
              DQ = pQ.b * Math.sin(qQ);
            return (0, iQ.jsx)("div", {
              className: MQ()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: LQ,
                EmoteWheelSlotIconDisabled: !wQ
              }),
              style: {
                left: `calc(50% + ${oQ}rem)`,
                top: `calc(50% + ${DQ}rem)`,
                backgroundImage: wQ ? `url(/textures/charSkins/previews/emote_${QQ}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, FQ)
          })), (0, iQ.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: nQ
          })]
        })
      })
    }))
  },
  8530: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => HQ,
      h: () => xQ,
      k: () => AQ,
      l: () => YQ,
      n: () => bQ
    });
    var LQ = wQ(53),
      qQ = wQ(8533),
      oQ = wQ(22),
      DQ = wQ(1897),
      kQ = wQ(27),
      vQ = wQ(1276),
      mQ = wQ(1911);
    const uQ = 50;
    const HQ = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = QQ => {
          if (0 === this.listeners.size) {
            var FQ, wQ;
            this.state = {
              ...this.state,
              channel: null !== (FQ = null === (wQ = mQ.b.get("chatChannels")) || void 0 === wQ ? void 0 : wQ[0]) && void 0 !== FQ ? FQ : null
            };
            const QQ = oQ.l.subscribe("reportPlayer", (QQ => {
              let {
                playerEId: FQ
              } = QQ;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, FQ]
              })
            }));
            this.stopListening = [DQ.gameBridge.subscribe("chatReceived", (QQ => {
              let {
                serverChatMsgId: FQ,
                content: wQ,
                author: LQ
              } = QQ;
              this.addMessage(FQ, wQ, LQ)
            })), () => {
              oQ.l.unsubscribe(QQ)
            }, mQ.b.subscribe("chatChannels", (QQ => {
              var FQ;
              this.setState({
                ...this.state,
                channel: null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ[0]) && void 0 !== FQ ? FQ : null
              })
            }))]
          }
          return this.listeners.add(QQ), () => {
            if (this.listeners.delete(QQ), 0 === this.listeners.size) {
              for (const QQ of this.stopListening) QQ();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const LQ = {
          serverChatMsgId: QQ,
          content: FQ,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: wQ
        };
        this.setState({
          ...this.state,
          messages: [LQ, ...this.state.messages].slice(0, qQ.h)
        })
      }
      selectNextChannel() {
        const QQ = mQ.b.get("chatChannels");
        if (QQ) {
          const FQ = QQ.findIndex((QQ => {
            var FQ;
            return QQ.channelName === (null === (FQ = this.state.channel) || void 0 === FQ ? void 0 : FQ.channelName)
          }));
          this.setState({
            ...this.state,
            channel: QQ[(FQ + 1) % QQ.length]
          })
        }
      }
      setState(QQ) {
        this.state = QQ;
        for (const FQ of this.listeners) FQ()
      }
    };

    function bQ() {
      const [QQ, FQ] = (0, LQ.useState)(HQ.getState);
      return (0, LQ.useEffect)((() => {
        const QQ = HQ.subscribe((() => {
          FQ(HQ.getState())
        }));
        return FQ(HQ.getState()), QQ
      }), []), QQ
    }

    function YQ(QQ) {
      var FQ, wQ;
      if (QQ.startsWith("/report")) {
        var LQ;
        const FQ = null !== (LQ = QQ.replace("/report", "").trim().split(" ")[0]) && void 0 !== LQ ? LQ : "";
        if ("" === FQ) return void HQ.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const wQ = DQ.gameBridge.latest("players"),
          qQ = DQ.gameBridge.latest("hiddenPlayerNames"),
          kQ = QQ => {
            var LQ, oQ;
            const DQ = null !== (LQ = null === (oQ = wQ.byId[QQ]) || void 0 === oQ ? void 0 : oQ.name) && void 0 !== LQ ? LQ : null;
            return null !== DQ && (DQ === FQ || (0, vQ.b)(DQ, qQ) === FQ)
          };
        if (null !== wQ.localId && kQ(wQ.localId)) return void HQ.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const QQ of wQ.ids)
          if (kQ(QQ)) return oQ.l.GA("OpenReportMenu", {
            playerEId: QQ,
            playerName: wQ.byId[QQ].name,
            Om: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        HQ.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      DQ.gameBridge.send("sendChatMessage", {
          Om: QQ,
          channelName: null !== (FQ = null === (wQ = HQ.getState().channel) || void 0 === wQ ? void 0 : wQ.channelName) && void 0 !== FQ ? FQ : null
        }),
        function(QQ) {
          var FQ;
          const wQ = null !== (FQ = kQ.i.getItem("recentlySentChatMsgs")) && void 0 !== FQ ? FQ : [];
          wQ.push(QQ), wQ.length > uQ && wQ.shift();
          kQ.i.setItem("recentlySentChatMsgs", wQ)
        }(QQ)
    }

    function xQ() {
      var QQ;
      return null !== (QQ = kQ.i.getItem("recentlySentChatMsgs")) && void 0 !== QQ ? QQ : []
    }

    function AQ(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const LQ = null !== (FQ = kQ.i.getItem("recentlySentChatMsgs")) && void 0 !== FQ ? FQ : [],
        qQ = LQ.length + 1,
        oQ = wQ ? (QQ % qQ + qQ) % qQ : Math.min(LQ.length, Math.max(0, QQ));
      return {
        stepsBack: oQ,
        text: 0 === oQ ? "" : LQ[LQ.length - oQ]
      }
    }
  },
  8492: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      i: () => oQ
    });
    var LQ = wQ(1951);
    const qQ = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      oQ = QQ => "string" === typeof QQ.icon && "" !== QQ.icon && "string" === typeof QQ.keycode && qQ.test(QQ.keycode),
      DQ = QQ => "Space" === QQ ? "_" : LQ.j[QQ]
  },
  8541: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ
    });
    var LQ = wQ(17);

    function qQ() {
      return !LQ.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8651: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return {
        x: (QQ.left + QQ.right) / 2,
        y: (QQ.top + QQ.bottom) / 2
      }
    }

    function qQ(QQ) {
      return 0 === QQ.length ? null : QQ.reduce(((QQ, FQ) => ({
        left: Math.min(QQ.left, FQ.left),
        top: Math.min(QQ.top, FQ.top),
        right: Math.max(QQ.right, FQ.right),
        bottom: Math.max(QQ.bottom, FQ.bottom)
      })))
    }

    function oQ(QQ, FQ) {
      const wQ = Math.max(0, (FQ - (QQ.right - QQ.left)) / 2),
        LQ = Math.max(0, (FQ - (QQ.bottom - QQ.top)) / 2);
      return {
        left: QQ.left - wQ,
        top: QQ.top - LQ,
        right: QQ.right + wQ,
        bottom: QQ.bottom + LQ
      }
    }

    function DQ(QQ, FQ) {
      return FQ.x >= QQ.left && FQ.x <= QQ.right && FQ.y >= QQ.top && FQ.y <= QQ.bottom
    }

    function kQ(QQ, FQ, wQ) {
      let qQ = null,
        kQ = 1 / 0;
      for (const {
          id: LQ,
          box: oQ
        }
        of FQ) {
        const FQ = (oQ.right - oQ.left) * (oQ.bottom - oQ.top);
        DQ(oQ, QQ) && FQ < kQ && (kQ = FQ, qQ = LQ)
      }
      if (null !== qQ) return qQ;
      let vQ = 1 / 0;
      for (const {
          id: mQ,
          box: uQ
        }
        of FQ) {
        if (!DQ(oQ(uQ, wQ), QQ)) continue;
        const FQ = LQ(uQ),
          kQ = Math.hypot(QQ.x - FQ.x, QQ.y - FQ.y);
        kQ < vQ && (vQ = kQ, qQ = mQ)
      }
      return qQ
    }

    function vQ(QQ, FQ, wQ) {
      return {
        left: wQ.left,
        top: wQ.top,
        right: QQ - wQ.right,
        bottom: FQ - wQ.bottom
      }
    }

    function mQ(QQ, FQ, wQ, LQ) {
      const qQ = (QQ, FQ, wQ) => Math.max(Math.min(FQ, 0), Math.min(Math.max(wQ, 0), QQ));
      return {
        x: qQ(FQ, LQ.left - QQ.left, LQ.right - QQ.right),
        y: qQ(wQ, LQ.top - QQ.top, LQ.bottom - QQ.bottom)
      }
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = QQ.dx * LQ + FQ,
        DQ = QQ.dy * qQ + wQ,
        kQ = QQ => Math.max(-1, Math.min(1, QQ));
      return {
        dx: kQ(oQ / LQ),
        dy: kQ(DQ / qQ)
      }
    }

    function HQ(QQ, FQ, wQ, LQ) {
      return FQ <= 0 || wQ <= 0 ? 1 : Math.max(.05, Math.min(1, QQ / FQ, LQ / wQ))
    }

    function bQ(QQ, FQ, wQ) {
      return Math.min(QQ.right, FQ.right) - Math.max(QQ.left, FQ.left) > wQ && Math.min(QQ.bottom, FQ.bottom) - Math.max(QQ.top, FQ.top) > wQ
    }

    function YQ(QQ, FQ) {
      const wQ = (QQ, FQ, wQ, LQ) => FQ - QQ > LQ - wQ ? wQ - QQ > FQ - LQ ? LQ - FQ : wQ - QQ : QQ < wQ ? wQ - QQ : FQ > LQ ? LQ - FQ : 0;
      return {
        x: wQ(QQ.left, QQ.right, FQ.left, FQ.right),
        y: wQ(QQ.top, QQ.bottom, FQ.top, FQ.bottom)
      }
    }

    function xQ(QQ, FQ) {
      let {
        avoid: wQ = null,
        bounds: LQ = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, qQ = 0, oQ = 1 / 0;
      return QQ.forEach(((QQ, DQ) => {
        const kQ = FQ.filter((FQ => bQ(QQ, FQ, 0))).length,
          vQ = null !== LQ && (QQ.left < LQ.left || QQ.top < LQ.top || QQ.right > LQ.right || QQ.bottom > LQ.bottom),
          mQ = kQ + (wQ && bQ(QQ, wQ, 0) ? 1e3 : 0) + (vQ ? 1e6 : 0);
        mQ < oQ && (qQ = DQ, oQ = mQ)
      })), qQ
    }
    wQ.d(FQ, {
      A: () => vQ,
      C: () => YQ,
      E: () => qQ,
      e: () => LQ,
      i: () => DQ,
      l: () => bQ,
      o: () => mQ,
      r: () => oQ,
      s: () => xQ,
      u: () => uQ,
      x: () => kQ,
      z: () => HQ
    })
  },
  8550: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => bQ,
      B: () => YQ,
      b: () => oQ,
      d: () => kQ,
      f: () => mQ,
      i: () => vQ,
      k: () => DQ,
      n: () => qQ,
      p: () => LQ,
      t: () => xQ,
      v: () => HQ,
      y: () => uQ
    });
    const LQ = 14,
      qQ = 6,
      oQ = (LQ + qQ) / 2,
      DQ = 200,
      kQ = DQ / 2,
      vQ = DQ / 2 - 1,
      mQ = qQ / LQ * (DQ / 2),
      uQ = (QQ, FQ) => -Math.PI / 2 + 2 * QQ * Math.PI / FQ,
      HQ = (QQ, FQ, wQ) => {
        const LQ = 2 * Math.PI / wQ;
        return (Math.round((Math.atan2(FQ, QQ) + Math.PI / 2) / LQ) % wQ + wQ) % wQ
      },
      bQ = .5,
      YQ = (QQ, FQ, wQ) => Math.hypot(QQ.x, QQ.y) < bQ ? wQ : HQ(QQ.x, QQ.y, FQ),
      xQ = (QQ, FQ, wQ, LQ, qQ) => {
        const oQ = Math.PI / FQ,
          DQ = uQ(QQ, FQ),
          kQ = DQ - oQ,
          vQ = DQ + oQ,
          mQ = (QQ, FQ) => `${wQ+QQ*Math.cos(FQ)} ${wQ+QQ*Math.sin(FQ)}`;
        return [`M ${mQ(LQ,kQ)}`, `L ${mQ(qQ,kQ)}`, `A ${qQ} ${qQ} 0 0 1 ${mQ(qQ,vQ)}`, `L ${mQ(LQ,vQ)}`, `A ${LQ} ${LQ} 0 0 0 ${mQ(LQ,kQ)}`, "Z"].join(" ")
      }
  },
  8601: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(53),
      qQ = wQ(8514),
      oQ = wQ(2345);

    function DQ() {
      const QQ = (0, oQ.l)("shopInfo"),
        [, FQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0);
      return (0, oQ.h)("shopInfo", FQ), !(0, qQ.b)(QQ)
    }
  },
  8485: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      f: () => DQ,
      h: () => kQ,
      j: () => qQ
    });
    var LQ = wQ(8492);
    const qQ = QQ => {
        const FQ = [];
        QQ.holdingGun && FQ.push({
          kind: "reload"
        }), QQ.touchscreenActionButton && FQ.push({
          kind: "touchButton",
          label: QQ.touchscreenActionButton
        });
        for (const oQ of null !== (wQ = null === (qQ = QQ.customButtons) || void 0 === qQ ? void 0 : qQ.filter(LQ.i)) && void 0 !== wQ ? wQ : []) {
          var wQ, qQ;
          FQ.push({
            kind: "customButton",
            id: oQ.id,
            icon: oQ.icon,
            description: oQ.description
          })
        }
        return FQ
      },
      oQ = QQ => QQ.length >= 2,
      DQ = QQ => "specialAction" !== QQ.kind,
      kQ = (QQ, FQ) => {
        if (null === QQ || null === FQ) return QQ === FQ;
        if (QQ.kind !== FQ.kind) return !1;
        switch (QQ.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return QQ.action === FQ.action;
          case "customButton":
            return QQ.id === FQ.id && QQ.icon === FQ.icon;
          case "touchButton":
            return QQ.label === FQ.label
        }
      }
  },
  8477: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ,
      d: () => YQ,
      h: () => HQ,
      i: () => xQ
    });
    var LQ = wQ(53),
      qQ = wQ(22),
      oQ = wQ(1447),
      DQ = wQ(8485),
      kQ = wQ(8497);
    let vQ = null;
    const mQ = () => vQ,
      uQ = QQ => {
        (0, DQ.h)(vQ, QQ) || (vQ = QQ, qQ.l.GA(kQ.c, vQ))
      },
      HQ = () => {
        const [QQ, FQ] = (0, LQ.useState)(mQ);
        return (0, oQ.g)(kQ.c, FQ), QQ
      };
    let bQ = !1;
    const YQ = QQ => {
        QQ !== bQ && (bQ = QQ, qQ.l.GA(kQ.g, QQ))
      },
      xQ = () => {
        const [QQ, FQ] = (0, LQ.useState)(bQ);
        return (0, oQ.g)(kQ.g, FQ), QQ
      }
  },
  8497: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => LQ,
      g: () => qQ,
      h: () => kQ,
      i: () => vQ,
      m: () => mQ,
      p: () => DQ
    });
    const LQ = "controllerActionHintChanged",
      qQ = "controllerActionWheelHintChanged",
      oQ = "controllerOpenChat",
      DQ = "controllerSneakToggledChanged",
      kQ = "controllerAttackLatchedChanged",
      vQ = "controllerDropStackHoldChanged",
      mQ = "controllerPickBlockHintChanged"
  },
  8431: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      g: () => oQ,
      h: () => vQ,
      j: () => kQ
    });
    var LQ = wQ(1447),
      qQ = wQ(1407);
    const oQ = "controllerInventoryCursorChanged",
      DQ = {
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
      kQ = () => {
        var QQ, FQ;
        return (0, LQ.i)(oQ, null !== (QQ = null === (FQ = (0, qQ.d)()) || void 0 === FQ ? void 0 : FQ.getInventoryCursorState()) && void 0 !== QQ ? QQ : DQ)
      },
      vQ = () => {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = (0, qQ.d)()) || void 0 === FQ ? void 0 : FQ.isPadSteppingSlots()) && void 0 !== QQ && QQ
      }
  },
  8423: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      e: () => kQ,
      i: () => vQ,
      k: () => DQ,
      o: () => oQ,
      q: () => uQ,
      r: () => HQ
    });
    let LQ = null;
    const qQ = new Set,
      oQ = QQ => (LQ = QQ, () => {
        if (LQ === QQ) {
          LQ = null;
          for (const QQ of qQ) QQ()
        }
      }),
      DQ = QQ => (qQ.add(QQ), () => {
        qQ.delete(QQ)
      }),
      kQ = () => LQ,
      vQ = () => null !== LQ;
    let mQ = null;
    const uQ = QQ => {
        mQ = QQ
      },
      HQ = () => {
        const QQ = mQ;
        return mQ = null, QQ
      },
      bQ = (QQ, FQ) => {
        var wQ, LQ;
        return null !== (wQ = null !== (LQ = QQ.find((QQ => QQ.element === FQ))) && void 0 !== LQ ? LQ : QQ.find((QQ => QQ.element.contains(FQ)))) && void 0 !== wQ ? wQ : null
      }
  },
  8439: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      d: () => DQ
    });
    var LQ = wQ(53);
    const qQ = new WeakMap,
      oQ = QQ => {
        var FQ, wQ;
        return null !== (FQ = null === (wQ = qQ.get(QQ)) || void 0 === wQ ? void 0 : wQ.current) && void 0 !== FQ ? FQ : null
      },
      DQ = (QQ, FQ) => {
        const wQ = (0, LQ.useRef)(FQ);
        wQ.current = FQ;
        const oQ = (0, LQ.useRef)(null);
        (0, LQ.useEffect)((() => {
          const FQ = QQ.current,
            LQ = oQ.current;
          FQ !== LQ && (LQ && qQ.get(LQ) === wQ && qQ.delete(LQ), oQ.current = FQ, FQ && qQ.set(FQ, wQ))
        })), (0, LQ.useEffect)((() => () => {
          const QQ = oQ.current;
          QQ && qQ.get(QQ) === wQ && qQ.delete(QQ), oQ.current = null
        }), [])
      }
  },
  8590: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ,
      g: () => mQ,
      h: () => HQ,
      i: () => uQ,
      m: () => vQ,
      p: () => YQ
    });
    var LQ = wQ(22),
      qQ = wQ(1972),
      oQ = wQ(1407),
      DQ = wQ(1395);
    const kQ = QQ => {
        var FQ, wQ;
        return (0, DQ.d)() && null !== (FQ = null === (wQ = (0, oQ.d)()) || void 0 === wQ ? void 0 : wQ.getGlyphForNoaAction(QQ)) && void 0 !== FQ ? FQ : null
      },
      vQ = "controllerGlyph:",
      mQ = QQ => {
        var FQ, wQ;
        return null !== (FQ = null === (wQ = (0, oQ.d)()) || void 0 === wQ ? void 0 : wQ.getPadGlyphIconName(QQ)) && void 0 !== FQ ? FQ : `${vQ}xbox/${QQ}`
      },
      uQ = QQ => QQ.startsWith(vQ),
      HQ = QQ => {
        var FQ, wQ;
        return uQ(QQ) && null !== (FQ = null === (wQ = (0, oQ.d)()) || void 0 === wQ ? void 0 : wQ.getPadGlyphIconUrl(QQ)) && void 0 !== FQ ? FQ : null
      },
      bQ = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", DQ.c, qQ.f, qQ.c],
      YQ = QQ => {
        const FQ = bQ.map((FQ => LQ.l.subscribe(FQ, QQ)));
        return () => {
          for (const QQ of FQ) LQ.l.unsubscribe(QQ)
        }
      }
  },
  8414: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      f: () => LQ
    });
    const LQ = "controllerOpenKeyboard",
      qQ = "controllerKeyboardVisible"
  },
  8464: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => qQ
    });
    let LQ = null;
    const qQ = function(QQ) {
        const FQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return LQ = FQ, () => {
          LQ === FQ && (LQ = null)
        }
      },
      oQ = () => {
        var QQ;
        return null !== (QQ = LQ) && void 0 !== QQ && QQ.canCycle() ? LQ.cycle : null
      }
  },
  8566: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      g: () => DQ,
      i: () => oQ,
      l: () => LQ,
      o: () => kQ,
      r: () => mQ,
      t: () => uQ
    });
    const LQ = "controllerActionWheelOpen",
      qQ = "controllerActionWheelAim",
      oQ = "controllerActionWheelCommit",
      DQ = "controllerActionWheelClose",
      kQ = "controllerActionWheelPick";
    let vQ = !1;
    const mQ = () => vQ,
      uQ = QQ => {
        vQ = QQ
      }
  },
  8557: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => qQ
    });
    let LQ = 0;
    const qQ = () => {
        LQ++
      },
      oQ = () => LQ
  },
  8462: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      g: () => qQ,
      h: () => DQ,
      j: () => oQ,
      l: () => LQ,
      o: () => mQ
    });
    const LQ = "controllerQuickChatWheelOpen",
      qQ = "controllerQuickChatWheelAim",
      oQ = "controllerQuickChatWheelCommit",
      DQ = "controllerQuickChatWheelClose";
    let kQ = !1;
    const vQ = () => kQ,
      mQ = QQ => {
        kQ = QQ
      }
  },
  8644: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      f: () => vQ
    });
    var LQ = wQ(17),
      qQ = wQ(1339),
      oQ = wQ(96);
    const DQ = {
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

    function kQ() {
      return (0, oQ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const vQ = new class {
      constructor(QQ) {
        this.deps = QQ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(QQ, FQ) {
        var wQ;
        if (!this.deps.enabled()) return;
        const LQ = DQ[QQ],
          qQ = null !== FQ && void 0 !== FQ ? FQ : LQ.pattern;
        if (null === qQ) return void console.warn("No vibration pattern for", QQ);
        const oQ = this.deps.now();
        oQ - this.lastAnyAt < 40 && LQ.priority < this.playingPriority || oQ - (null !== (wQ = this.lastAt.get(QQ)) && void 0 !== wQ ? wQ : -1 / 0) < LQ.minGapMs || oQ < this.playingUntil && LQ.priority < this.playingPriority || (this.lastAt.set(QQ, oQ), this.lastAnyAt = oQ, this.playingUntil = oQ + qQ.reduce(((QQ, FQ) => QQ + FQ), 0), this.playingPriority = LQ.priority, this.deps.vibrate(qQ))
      }
    }({
      vibrate: QQ => {
        navigator.vibrate([...QQ])
      },
      now: () => performance.now(),
      enabled: () => kQ() && LQ.c.get("isTouchScreen") && LQ.c.get("clientEscMenuOptions").vibration && !(0, qQ.e)()
    })
  },
  8514: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(8523),
      qQ = wQ(619),
      oQ = wQ(134);

    function DQ(QQ) {
      var FQ, wQ;
      if ((0, qQ.F)(QQ)) return !0;
      const DQ = null !== (FQ = null === (wQ = oQ.n[oQ.r]) || void 0 === wQ ? void 0 : wQ.adConfig.showRewardedAds) && void 0 !== FQ && FQ;
      for (const qQ in QQ) {
        const FQ = QQ[qQ];
        if (null !== FQ && void 0 !== FQ && FQ.items)
          for (const QQ in FQ.items)
            if ((0, LQ.l)(FQ.items[QQ], DQ)) return !1
      }
      return !0
    }
  },
  8533: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      h: () => LQ
    });
    const LQ = 100;

    function qQ(QQ) {
      let {
        translationKeys: FQ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return QQ.map((QQ => {
        var wQ;
        return null !== (wQ = function(QQ, FQ) {
          if ("string" === typeof QQ) return QQ;
          const wQ = "str" in QQ ? QQ.str : QQ;
          if ("string" === typeof wQ) return wQ;
          if ("entityName" in wQ) return wQ.entityName;
          if (FQ && "translationKey" in wQ) return `{${wQ.translationKey}${void 0===wQ.params?"":` ${JSON.stringify(wQ.params)}`}}`;
          return null
        }(QQ, FQ)) && void 0 !== wQ ? wQ : " "
      })).join("")
    }
  },
  8582: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      g: () => kQ,
      h: () => vQ
    });
    var LQ = wQ(2148),
      qQ = wQ(1254),
      oQ = wQ(2153);
    const DQ = ",";

    function kQ(QQ) {
      if (!QQ) return [];
      const FQ = new Set,
        wQ = [];
      for (const LQ of QQ.split(DQ)) {
        const QQ = LQ.trim();
        if ((0, oQ.g)(QQ) && !FQ.has(QQ) && (FQ.add(QQ), wQ.push(QQ), wQ.length >= qQ.q)) break
      }
      return wQ
    }

    function vQ(QQ) {
      const FQ = new Set,
        wQ = [];
      for (const LQ of QQ)
        if ((0, oQ.g)(LQ) && !FQ.has(LQ) && (FQ.add(LQ), wQ.push(LQ), wQ.length >= qQ.q)) break;
      return wQ.join(DQ)
    }

    function mQ() {
      return vQ(oQ.d)
    }

    function uQ(QQ) {
      var FQ;
      return "emote" === QQ ? mQ() : null !== (FQ = HQ[QQ][0]) && void 0 !== FQ ? FQ : bQ[QQ]
    }
    const HQ = qQ.w.reduce(((QQ, FQ) => {
        const wQ = [];
        for (const oQ in LQ.d[FQ]) {
          var qQ;
          "default" === (null === (qQ = (0, LQ.i)(FQ, oQ)) || void 0 === qQ ? void 0 : qQ.cosmeticPack) && wQ.push(oQ)
        }
        return QQ[FQ] = wQ, QQ
      }), {}),
      bQ = qQ.w.reduce(((QQ, FQ) => (QQ[FQ] = Object.keys(LQ.d[FQ])[0], QQ)), {})
  },
  8523: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return !QQ.hidden && (FQ || !QQ.isRewardedAd)
    }

    function qQ(QQ) {
      return "object" === typeof QQ ? QQ.option : QQ
    }

    function oQ(QQ, FQ) {
      var wQ;
      if ("dropdown" === (null === (wQ = QQ.userInput) || void 0 === wQ ? void 0 : wQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
        for (const wQ of QQ.userInput.dropdownOptions)
          if (qQ(wQ) === FQ) return "object" === typeof wQ ? wQ.cost : QQ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", FQ)
      }
      return QQ.cost
    }

    function DQ(QQ, FQ, wQ) {
      var LQ;
      const qQ = null !== (LQ = wQ.excludedPlayers) && void 0 !== LQ ? LQ : [FQ];
      return QQ.filter((QQ => !qQ.includes(QQ)))
    }
    wQ.d(FQ, {
      c: () => oQ,
      f: () => qQ,
      j: () => DQ,
      l: () => LQ
    })
  },
  8575: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);