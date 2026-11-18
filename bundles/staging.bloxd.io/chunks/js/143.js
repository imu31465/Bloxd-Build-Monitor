export const id = 143;
export const ids = [143];
export const modules = {
  8079: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => wJ,
      e: () => SJ,
      i: () => IJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(3966),
      eJ = ZJ(1022),
      XJ = ZJ(1326),
      AJ = ZJ(17),
      qJ = ZJ(2916),
      jJ = ZJ(2001),
      YJ = ZJ(1137),
      hJ = ZJ(8114),
      DJ = ZJ(1703),
      sJ = ZJ(1743),
      nJ = ZJ(1086),
      GJ = ZJ(13),
      fJ = ZJ(1528),
      xJ = ZJ(926),
      rJ = ZJ.n(xJ),
      vJ = ZJ(8088),
      mJ = ZJ(8092),
      QJ = ZJ(8095),
      EJ = ZJ(8066),
      VJ = ZJ(8104),
      KJ = (ZJ(8106), ZJ(990));
    let yJ = null;

    function SJ() {
      return null !== yJ
    }

    function IJ() {
      return "pad" === yJ
    }

    function MJ() {
      return "inGame" === GJ.d.get("gameState") && !(0, fJ.l)()
    }

    function bJ(JJ) {
      return (0, mJ.v)(JJ, YJ.n, mJ.h, mJ.k, mJ.l)
    }
    const wJ = (0, FJ.memo)((function() {
      const {
        t: JJ
      } = (0, nJ.F)(), {
        userContext: cJ
      } = (0, eJ.d)(), [ZJ, GJ] = (0, FJ.useState)(null), [xJ, SJ] = (0, FJ.useState)(null), IJ = (0, FJ.useRef)(null), wJ = (0, FJ.useCallback)((JJ => {
        IJ.current = JJ, SJ(JJ)
      }), []), WJ = (0, FJ.useRef)(0), gJ = (0, FJ.useRef)(null), HJ = (0, FJ.useRef)({
        x: 0,
        y: 0
      }), [PJ, kJ] = (0, FJ.useState)(0), pJ = (0, FJ.useMemo)((() => function(JJ) {
        const cJ = [];
        for (let FJ = 0; FJ < YJ.n; FJ++) {
          var ZJ;
          cJ.push(null !== (ZJ = JJ[FJ]) && void 0 !== ZJ ? ZJ : null)
        }
        return cJ
      }((0, hJ.i)(cJ.getPlayerCosmetics().emote))), [cJ, PJ]);
      (0, sJ.b)("cosmeticsUpdated", (JJ => {
        JJ.some((JJ => JJ.local && "emote" === JJ.VF)) && kJ((JJ => JJ + 1))
      }));
      const dJ = (0, FJ.useRef)(!1),
        zJ = (0, FJ.useCallback)((function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === JJ && (0, QJ.g)(), dJ.current = cJ, HJ.current = {
            x: 0,
            y: 0
          }, wJ(null), GJ(JJ)
        }), [wJ]),
        NJ = (0, FJ.useCallback)((() => {
          GJ(null), wJ(null), HJ.current = {
            x: 0,
            y: 0
          }
        }), [wJ]),
        OJ = (0, FJ.useCallback)((JJ => {
          if (Date.now() < WJ.current) return;
          const cJ = (0, jJ.m)(JJ),
            ZJ = !!cJ.holdUntilMove,
            FJ = ZJ ? 600 : Math.ceil(1e3 * cJ.animation.animation_length / jJ.e) + 200;
          WJ.current = Date.now() + FJ, gJ.current = JJ, DJ.gameBridge.send("playEmote", JJ), DJ.gameBridge.send("applyTemporaryThirdPerson", ZJ ? {} : {
            durationMs: FJ
          })
        }), []);
      (0, XJ.i)("requestToggleEmoteWheel", (() => {
        null === ZJ ? MJ() && zJ("click") : NJ()
      })), (0, XJ.i)("requestEmoteWheelHoldOpen", (() => {
        null === ZJ && MJ() && zJ((0, vJ.b)() ? "hold" : "click")
      })), (0, XJ.i)("requestEmoteWheelPadOpen", (JJ => {
        null !== ZJ || !MJ() || (0, EJ.d)() || (0, VJ.m)() || zJ("pad", JJ)
      })), (0, XJ.i)("requestEmoteRepeatLast", (() => {
        if (null !== ZJ || !MJ() || (0, EJ.d)() || (0, VJ.m)()) return;
        const JJ = gJ.current;
        null !== JJ && pJ.includes(JJ) ? OJ(JJ) : zJ("pad", !0)
      }));
      const TJ = () => {
        const JJ = IJ.current,
          cJ = null !== JJ ? pJ[JJ] : null;
        null !== cJ && "pad" === ZJ && Date.now() < WJ.current || (NJ(), null !== cJ && OJ(cJ))
      };
      (0, XJ.i)("emoteWheelPadAim", (JJ => {
        if ("pad" !== ZJ) return;
        const cJ = (0, mJ.F)(JJ, YJ.n, IJ.current);
        wJ(null !== cJ && null !== pJ[cJ] ? cJ : null)
      })), (0, XJ.i)("requestEmoteWheelPadCommit", (JJ => {
        "pad" !== ZJ || JJ && dJ.current || TJ()
      })), (0, XJ.i)("appManagerUpdated|activeInputDevice", (JJ => {
        null !== ZJ && "pad" === ZJ !== ("gamepad" === JJ) && NJ()
      })), (0, FJ.useLayoutEffect)((() => (yJ = ZJ, (0, qJ.s)("emoteWheel", "pad" === ZJ), AJ.i.Uf(qJ.m), () => {
        yJ = null, (0, qJ.s)("emoteWheel", !1), AJ.i.Uf(qJ.m)
      })), [ZJ]), (0, XJ.i)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ZJ && TJ()
      })), (0, XJ.i)("requestEmoteWheelClose", (() => {
        null !== ZJ && NJ()
      })), (0, XJ.i)("appManagerUpdated|gameState", (JJ => {
        "inGame" !== JJ && NJ()
      }));
      const CJ = () => {
        (0, fJ.l)() && NJ()
      };
      if ((0, XJ.i)("appManagerUpdated|openEverythingMenuName", CJ), (0, XJ.i)("appManagerUpdated|openInGameMenuName", CJ), (0, XJ.i)("pointerLockUpdate", (JJ => {
          JJ || "hold" !== ZJ || NJ()
        })), (0, FJ.useEffect)((() => {
          if (null === ZJ) return;
          const JJ = JJ => {
            "Escape" === JJ.key && (JJ.stopImmediatePropagation(), JJ.preventDefault(), NJ())
          };
          return document.addEventListener("keydown", JJ, !0), () => {
            document.removeEventListener("keydown", JJ, !0)
          }
        }), [ZJ, NJ]), (0, UJ.c)(!0, "click" === ZJ, "EmoteWheelOverlay"), (0, FJ.useEffect)((() => {
          if ("hold" === ZJ) return DJ.gameBridge.send("holdEmoteWheel", !0), () => {
            DJ.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ZJ]), (0, FJ.useEffect)((() => {
          if ("hold" !== ZJ) return;
          const JJ = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            cJ = mJ.t * JJ,
            FJ = mJ.q * JJ,
            UJ = JJ => {
              let ZJ = HJ.current.x + JJ.movementX,
                UJ = HJ.current.y + JJ.movementY;
              const eJ = Math.hypot(ZJ, UJ);
              if (eJ > cJ) {
                const JJ = cJ / eJ;
                ZJ *= JJ, UJ *= JJ
              }
              HJ.current = {
                x: ZJ,
                y: UJ
              }, wJ(function(JJ, cJ, ZJ, FJ) {
                if (Math.hypot(JJ, cJ) < ZJ) return null;
                const UJ = (0, mJ.y)(JJ, cJ, YJ.n);
                return null === FJ[UJ] ? null : UJ
              }(ZJ, UJ, FJ, pJ))
            };
          return document.addEventListener("mousemove", UJ), () => {
            document.removeEventListener("mousemove", UJ)
          }
        }), [ZJ, pJ, wJ]), null === ZJ) return null;
      const uJ = "hold" === ZJ || "pad" === ZJ,
        iJ = null !== xJ ? pJ[xJ] : null,
        RJ = null !== iJ ? (0, jJ.m)(iJ).displayName : JJ("emotes:pickEmote");
      return (0, KJ.jsx)("div", {
        className: rJ()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ZJ
        }),
        onMouseDown: JJ => {
          JJ.target === JJ.currentTarget && NJ()
        },
        children: (0, KJ.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * mJ.t + "rem",
            height: 2 * mJ.t + "rem"
          },
          children: [(0, KJ.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${mJ.p} ${mJ.p}`,
            children: [pJ.map(((cJ, ZJ) => {
              const FJ = null !== cJ,
                UJ = uJ && ZJ === xJ;
              return (0, KJ.jsx)("path", {
                d: bJ(ZJ),
                className: rJ()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: UJ,
                  EmoteWheelWedgeDisabled: !FJ
                }),
                onClick: JJ => {
                  JJ.stopPropagation(), null !== cJ && (JJ => {
                    NJ(), OJ(JJ)
                  })(cJ)
                },
                "aria-label": null !== cJ ? (0, jJ.m)(cJ).displayName : JJ("emotes:emptySlot")
              }, ZJ)
            })), (0, KJ.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: mJ.h,
              cy: mJ.h,
              r: mJ.l
            }), (0, KJ.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: mJ.h,
              cy: mJ.h,
              r: mJ.k
            }), uJ && null !== xJ && (0, KJ.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: bJ(xJ)
            })]
          }), pJ.map(((JJ, cJ) => {
            const ZJ = null !== JJ,
              FJ = uJ && cJ === xJ,
              UJ = (0, mJ.z)(cJ, YJ.n),
              eJ = mJ.d * Math.cos(UJ),
              XJ = mJ.d * Math.sin(UJ);
            return (0, KJ.jsx)("div", {
              className: rJ()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: FJ,
                EmoteWheelSlotIconDisabled: !ZJ
              }),
              style: {
                left: `calc(50% + ${eJ}rem)`,
                top: `calc(50% + ${XJ}rem)`,
                backgroundImage: ZJ ? `url(/textures/charSkins/previews/emote_${JJ}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, cJ)
          })), (0, KJ.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: RJ
          })]
        })
      })
    }))
  },
  8070: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      g: () => GJ,
      h: () => fJ,
      i: () => nJ,
      k: () => sJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(8076),
      eJ = ZJ(17),
      XJ = ZJ(1703),
      AJ = ZJ(578),
      qJ = ZJ(29),
      jJ = ZJ(1162),
      YJ = ZJ(1725);
    const hJ = 50;
    const DJ = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = JJ => {
          if (0 === this.listeners.size) {
            var cJ, ZJ;
            this.state = {
              ...this.state,
              channel: null !== (cJ = null === (ZJ = YJ.b.get("chatChannels")) || void 0 === ZJ ? void 0 : ZJ[0]) && void 0 !== cJ ? cJ : null
            };
            const JJ = eJ.i.subscribe("reportPlayer", (JJ => {
              let {
                playerEId: cJ
              } = JJ;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, cJ]
              })
            }));
            this.stopListening = [XJ.gameBridge.subscribe("chatReceived", (JJ => {
              let {
                serverChatMsgId: cJ,
                content: ZJ,
                author: FJ
              } = JJ;
              this.addMessage(cJ, ZJ, FJ)
            })), () => {
              eJ.i.unsubscribe(JJ)
            }, YJ.b.subscribe("chatChannels", (JJ => {
              var cJ;
              this.setState({
                ...this.state,
                channel: null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ[0]) && void 0 !== cJ ? cJ : null
              })
            }))]
          }
          return this.listeners.add(JJ), () => {
            if (this.listeners.delete(JJ), 0 === this.listeners.size) {
              for (const JJ of this.stopListening) JJ();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FJ = {
          serverChatMsgId: JJ,
          content: cJ,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: ZJ
        };
        this.setState({
          ...this.state,
          messages: [FJ, ...this.state.messages].slice(0, UJ.g)
        })
      }
      selectNextChannel() {
        const JJ = YJ.b.get("chatChannels");
        if (JJ) {
          const cJ = JJ.findIndex((JJ => {
            var cJ;
            return JJ.channelName === (null === (cJ = this.state.channel) || void 0 === cJ ? void 0 : cJ.channelName)
          }));
          this.setState({
            ...this.state,
            channel: JJ[(cJ + 1) % JJ.length]
          })
        }
      }
      setState(JJ) {
        this.state = JJ;
        for (const cJ of this.listeners) cJ()
      }
    };

    function sJ() {
      const [JJ, cJ] = (0, FJ.useState)(DJ.getState);
      return (0, FJ.useEffect)((() => {
        const JJ = DJ.subscribe((() => {
          cJ(DJ.getState())
        }));
        return cJ(DJ.getState()), JJ
      }), []), JJ
    }

    function nJ(JJ) {
      var cJ, ZJ;
      if (AJ.j && "/" !== JJ[0]) DJ.addMessage(null, [{
        str: "Cannot send chat messages in bloxdk12. Use /help for a list of commands."
      }]);
      else {
        if (JJ.startsWith("/report")) {
          var FJ;
          const cJ = null !== (FJ = JJ.replace("/report", "").trim().split(" ")[0]) && void 0 !== FJ ? FJ : "";
          if ("" === cJ) return void DJ.addMessage(null, [{
            str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
          }]);
          const ZJ = XJ.gameBridge.latest("players"),
            UJ = XJ.gameBridge.latest("hiddenPlayerNames"),
            AJ = JJ => {
              var FJ, eJ;
              const XJ = null !== (FJ = null === (eJ = ZJ.byId[JJ]) || void 0 === eJ ? void 0 : eJ.name) && void 0 !== FJ ? FJ : null;
              return null !== XJ && (XJ === cJ || (0, jJ.d)(XJ, UJ) === cJ)
            };
          if (null !== ZJ.localId && AJ(ZJ.localId)) return void DJ.addMessage(null, [{
            str: "You cannot report yourself."
          }]);
          for (const JJ of ZJ.ids)
            if (AJ(JJ)) return eJ.i.Uf("OpenReportMenu", {
              playerEId: JJ,
              playerName: ZJ.byId[JJ].name,
              JY: null,
              serverChatMsgId: null
            }), void console.log("Opening report menu...");
          DJ.addMessage(null, [{
            str: "Player not found in lobby."
          }])
        }
        XJ.gameBridge.send("sendChatMessage", {
            JY: JJ,
            channelName: null !== (cJ = null === (ZJ = DJ.getState().channel) || void 0 === ZJ ? void 0 : ZJ.channelName) && void 0 !== cJ ? cJ : null
          }),
          function(JJ) {
            var cJ;
            const ZJ = null !== (cJ = qJ.j.getItem("recentlySentChatMsgs")) && void 0 !== cJ ? cJ : [];
            ZJ.push(JJ), ZJ.length > hJ && ZJ.shift();
            qJ.j.setItem("recentlySentChatMsgs", ZJ)
          }(JJ)
      }
    }

    function GJ() {
      var JJ;
      return null !== (JJ = qJ.j.getItem("recentlySentChatMsgs")) && void 0 !== JJ ? JJ : []
    }

    function fJ(JJ) {
      var cJ;
      let ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const FJ = null !== (cJ = qJ.j.getItem("recentlySentChatMsgs")) && void 0 !== cJ ? cJ : [],
        UJ = FJ.length + 1,
        eJ = ZJ ? (JJ % UJ + UJ) % UJ : Math.min(FJ.length, Math.max(0, JJ));
      return {
        stepsBack: eJ,
        text: 0 === eJ ? "" : FJ[FJ.length - eJ]
      }
    }
  },
  8019: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      g: () => eJ
    });
    var FJ = ZJ(1769);
    const UJ = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      eJ = JJ => "string" === typeof JJ.icon && "" !== JJ.icon && "string" === typeof JJ.keycode && UJ.test(JJ.keycode),
      XJ = JJ => "Space" === JJ ? "_" : FJ.f[JJ]
  },
  8088: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    var FJ = ZJ(13);

    function UJ() {
      return !FJ.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8092: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => DJ,
      F: () => sJ,
      d: () => eJ,
      h: () => AJ,
      k: () => jJ,
      l: () => qJ,
      p: () => XJ,
      q: () => UJ,
      t: () => FJ,
      v: () => nJ,
      y: () => hJ,
      z: () => YJ
    });
    const FJ = 14,
      UJ = 6,
      eJ = (FJ + UJ) / 2,
      XJ = 200,
      AJ = XJ / 2,
      qJ = XJ / 2 - 1,
      jJ = UJ / FJ * (XJ / 2),
      YJ = (JJ, cJ) => -Math.PI / 2 + 2 * JJ * Math.PI / cJ,
      hJ = (JJ, cJ, ZJ) => {
        const FJ = 2 * Math.PI / ZJ;
        return (Math.round((Math.atan2(cJ, JJ) + Math.PI / 2) / FJ) % ZJ + ZJ) % ZJ
      },
      DJ = .5,
      sJ = (JJ, cJ, ZJ) => Math.hypot(JJ.x, JJ.y) < DJ ? ZJ : hJ(JJ.x, JJ.y, cJ),
      nJ = (JJ, cJ, ZJ, FJ, UJ) => {
        const eJ = Math.PI / cJ,
          XJ = YJ(JJ, cJ),
          AJ = XJ - eJ,
          qJ = XJ + eJ,
          jJ = (JJ, cJ) => `${ZJ+JJ*Math.cos(cJ)} ${ZJ+JJ*Math.sin(cJ)}`;
        return [`M ${jJ(FJ,AJ)}`, `L ${jJ(UJ,AJ)}`, `A ${UJ} ${UJ} 0 0 1 ${jJ(UJ,qJ)}`, `L ${jJ(FJ,qJ)}`, `A ${FJ} ${FJ} 0 0 0 ${jJ(FJ,AJ)}`, "Z"].join(" ")
      }
  },
  8131: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(8043),
      eJ = ZJ(2175);

    function XJ() {
      const JJ = (0, eJ.f)("shopInfo"),
        [, cJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0);
      return (0, eJ.e)("shopInfo", cJ), !(0, UJ.e)(JJ)
    }
  },
  8011: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      g: () => XJ,
      h: () => AJ,
      i: () => UJ
    });
    var FJ = ZJ(8019);
    const UJ = JJ => {
        const cJ = [];
        JJ.holdingGun && cJ.push({
          kind: "reload"
        }), JJ.touchscreenActionButton && cJ.push({
          kind: "touchButton",
          label: JJ.touchscreenActionButton
        });
        for (const eJ of null !== (ZJ = null === (UJ = JJ.customButtons) || void 0 === UJ ? void 0 : UJ.filter(FJ.g)) && void 0 !== ZJ ? ZJ : []) {
          var ZJ, UJ;
          cJ.push({
            kind: "customButton",
            id: eJ.id,
            icon: eJ.icon,
            description: eJ.description
          })
        }
        return cJ
      },
      eJ = JJ => JJ.length >= 2,
      XJ = JJ => "specialAction" !== JJ.kind,
      AJ = (JJ, cJ) => {
        if (null === JJ || null === cJ) return JJ === cJ;
        if (JJ.kind !== cJ.kind) return !1;
        switch (JJ.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return JJ.action === cJ.action;
          case "customButton":
            return JJ.id === cJ.id && JJ.icon === cJ.icon;
          case "touchButton":
            return JJ.label === cJ.label
        }
      }
  },
  8004: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ,
      e: () => sJ,
      g: () => hJ,
      i: () => nJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(17),
      eJ = ZJ(1326),
      XJ = ZJ(8011),
      AJ = ZJ(8024);
    let qJ = null;
    const jJ = () => qJ,
      YJ = JJ => {
        (0, XJ.h)(qJ, JJ) || (qJ = JJ, UJ.i.Uf(AJ.d, qJ))
      },
      hJ = () => {
        const [JJ, cJ] = (0, FJ.useState)(jJ);
        return (0, eJ.i)(AJ.d, cJ), JJ
      };
    let DJ = !1;
    const sJ = JJ => {
        JJ !== DJ && (DJ = JJ, UJ.i.Uf(AJ.g, JJ))
      },
      nJ = () => {
        const [JJ, cJ] = (0, FJ.useState)(DJ);
        return (0, eJ.i)(AJ.g, cJ), JJ
      }
  },
  8024: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      d: () => FJ,
      g: () => UJ,
      h: () => AJ,
      i: () => qJ,
      m: () => jJ,
      q: () => XJ
    });
    const FJ = "controllerActionHintChanged",
      UJ = "controllerActionWheelHintChanged",
      eJ = "controllerOpenChat",
      XJ = "controllerSneakToggledChanged",
      AJ = "controllerAttackLatchedChanged",
      qJ = "controllerDropStackHoldChanged",
      jJ = "controllerPickBlockHintChanged"
  },
  7988: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      e: () => eJ,
      f: () => qJ,
      j: () => AJ
    });
    var FJ = ZJ(1326),
      UJ = ZJ(1300);
    const eJ = "controllerInventoryCursorChanged",
      XJ = {
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
      AJ = () => {
        var JJ, cJ;
        return (0, FJ.m)(eJ, null !== (JJ = null === (cJ = (0, UJ.f)()) || void 0 === cJ ? void 0 : cJ.getInventoryCursorState()) && void 0 !== JJ ? JJ : XJ)
      },
      qJ = () => {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = (0, UJ.f)()) || void 0 === cJ ? void 0 : cJ.isPadSteppingSlots()) && void 0 !== JJ && JJ
      }
  },
  7982: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ,
      f: () => AJ,
      j: () => qJ,
      m: () => XJ,
      q: () => eJ,
      r: () => YJ,
      v: () => hJ
    });
    let FJ = null;
    const UJ = new Set,
      eJ = JJ => (FJ = JJ, () => {
        if (FJ === JJ) {
          FJ = null;
          for (const JJ of UJ) JJ()
        }
      }),
      XJ = JJ => (UJ.add(JJ), () => {
        UJ.delete(JJ)
      }),
      AJ = () => FJ,
      qJ = () => null !== FJ;
    let jJ = null;
    const YJ = JJ => {
        jJ = JJ
      },
      hJ = () => {
        const JJ = jJ;
        return jJ = null, JJ
      },
      DJ = (JJ, cJ) => {
        var ZJ, FJ;
        return null !== (ZJ = null !== (FJ = JJ.find((JJ => JJ.element === cJ))) && void 0 !== FJ ? FJ : JJ.find((JJ => JJ.element.contains(cJ)))) && void 0 !== ZJ ? ZJ : null
      }
  },
  7996: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      g: () => XJ
    });
    var FJ = ZJ(47);
    const UJ = new WeakMap,
      eJ = JJ => {
        var cJ, ZJ;
        return null !== (cJ = null === (ZJ = UJ.get(JJ)) || void 0 === ZJ ? void 0 : ZJ.current) && void 0 !== cJ ? cJ : null
      },
      XJ = (JJ, cJ) => {
        const ZJ = (0, FJ.useRef)(cJ);
        ZJ.current = cJ;
        const eJ = (0, FJ.useRef)(null);
        (0, FJ.useEffect)((() => {
          const cJ = JJ.current,
            FJ = eJ.current;
          cJ !== FJ && (FJ && UJ.get(FJ) === ZJ && UJ.delete(FJ), eJ.current = cJ, cJ && UJ.set(cJ, ZJ))
        })), (0, FJ.useEffect)((() => () => {
          const JJ = eJ.current;
          JJ && UJ.get(JJ) === ZJ && UJ.delete(JJ), eJ.current = null
        }), [])
      }
  },
  8120: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      f: () => jJ,
      h: () => hJ,
      k: () => YJ,
      o: () => qJ,
      s: () => sJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1786),
      eJ = ZJ(1300),
      XJ = ZJ(1294);
    const AJ = JJ => {
        var cJ, ZJ;
        return (0, XJ.e)() && null !== (cJ = null === (ZJ = (0, eJ.f)()) || void 0 === ZJ ? void 0 : ZJ.getGlyphForNoaAction(JJ)) && void 0 !== cJ ? cJ : null
      },
      qJ = "controllerGlyph:",
      jJ = JJ => {
        var cJ, ZJ;
        return null !== (cJ = null === (ZJ = (0, eJ.f)()) || void 0 === ZJ ? void 0 : ZJ.getPadGlyphIconName(JJ)) && void 0 !== cJ ? cJ : `${qJ}xbox/${JJ}`
      },
      YJ = JJ => JJ.startsWith(qJ),
      hJ = JJ => {
        var cJ, ZJ;
        return YJ(JJ) && null !== (cJ = null === (ZJ = (0, eJ.f)()) || void 0 === ZJ ? void 0 : ZJ.getPadGlyphIconUrl(JJ)) && void 0 !== cJ ? cJ : null
      },
      DJ = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", XJ.d, UJ.c, UJ.b],
      sJ = JJ => {
        const cJ = DJ.map((cJ => FJ.i.subscribe(cJ, JJ)));
        return () => {
          for (const JJ of cJ) FJ.i.unsubscribe(JJ)
        }
      }
  },
  7977: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      f: () => FJ
    });
    const FJ = "controllerOpenKeyboard",
      UJ = "controllerKeyboardVisible"
  },
  8068: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      f: () => UJ
    });
    let FJ = null;
    const UJ = function(JJ) {
        const cJ = {
          cycle: JJ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FJ = cJ, () => {
          FJ === cJ && (FJ = null)
        }
      },
      eJ = () => {
        var JJ;
        return null !== (JJ = FJ) && void 0 !== JJ && JJ.canCycle() ? FJ.cycle : null
      }
  },
  8104: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      c: () => XJ,
      e: () => eJ,
      i: () => FJ,
      j: () => AJ,
      m: () => jJ,
      q: () => YJ
    });
    const FJ = "controllerActionWheelOpen",
      UJ = "controllerActionWheelAim",
      eJ = "controllerActionWheelCommit",
      XJ = "controllerActionWheelClose",
      AJ = "controllerActionWheelPick";
    let qJ = !1;
    const jJ = () => qJ,
      YJ = JJ => {
        qJ = JJ
      }
  },
  8095: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      g: () => UJ
    });
    let FJ = 0;
    const UJ = () => {
        FJ++
      },
      eJ = () => FJ
  },
  8066: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      g: () => UJ,
      h: () => XJ,
      k: () => eJ,
      o: () => FJ,
      s: () => jJ
    });
    const FJ = "controllerQuickChatWheelOpen",
      UJ = "controllerQuickChatWheelAim",
      eJ = "controllerQuickChatWheelCommit",
      XJ = "controllerQuickChatWheelClose";
    let AJ = !1;
    const qJ = () => AJ,
      jJ = JJ => {
        AJ = JJ
      }
  },
  8178: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      g: () => qJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(1213),
      eJ = ZJ(80);
    const XJ = {
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

    function AJ() {
      return (0, eJ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qJ = new class {
      constructor(JJ) {
        this.deps = JJ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(JJ, cJ) {
        var ZJ;
        if (!this.deps.enabled()) return;
        const FJ = XJ[JJ],
          UJ = null !== cJ && void 0 !== cJ ? cJ : FJ.pattern;
        if (null === UJ) return void console.warn("No vibration pattern for", JJ);
        const eJ = this.deps.now();
        eJ - this.lastAnyAt < 40 && FJ.priority < this.playingPriority || eJ - (null !== (ZJ = this.lastAt.get(JJ)) && void 0 !== ZJ ? ZJ : -1 / 0) < FJ.minGapMs || eJ < this.playingUntil && FJ.priority < this.playingPriority || (this.lastAt.set(JJ, eJ), this.lastAnyAt = eJ, this.playingUntil = eJ + UJ.reduce(((JJ, cJ) => JJ + cJ), 0), this.playingPriority = FJ.priority, this.deps.vibrate(UJ))
      }
    }({
      vibrate: JJ => {
        navigator.vibrate([...JJ])
      },
      now: () => performance.now(),
      enabled: () => AJ() && FJ.d.get("isTouchScreen") && FJ.d.get("clientEscMenuOptions").vibration && !(0, UJ.g)()
    })
  },
  8043: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(8052),
      UJ = ZJ(535),
      eJ = ZJ(112);

    function XJ(JJ) {
      var cJ, ZJ;
      if ((0, UJ.P)(JJ)) return !0;
      const XJ = null !== (cJ = null === (ZJ = eJ.i[eJ.n]) || void 0 === ZJ ? void 0 : ZJ.adConfig.showRewardedAds) && void 0 !== cJ && cJ;
      for (const UJ in JJ) {
        const cJ = JJ[UJ];
        if (null !== cJ && void 0 !== cJ && cJ.items)
          for (const JJ in cJ.items)
            if ((0, FJ.n)(cJ.items[JJ], XJ)) return !1
      }
      return !0
    }
  },
  8076: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      g: () => FJ
    });
    const FJ = 100;

    function UJ(JJ) {
      let {
        translationKeys: cJ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return JJ.map((JJ => {
        var ZJ;
        return null !== (ZJ = function(JJ, cJ) {
          if ("string" === typeof JJ) return JJ;
          const ZJ = "str" in JJ ? JJ.str : JJ;
          if ("string" === typeof ZJ) return ZJ;
          if ("entityName" in ZJ) return ZJ.entityName;
          if (cJ && "translationKey" in ZJ) return `{${ZJ.translationKey}${void 0===ZJ.params?"":` ${JSON.stringify(ZJ.params)}`}}`;
          return null
        }(JJ, cJ)) && void 0 !== ZJ ? ZJ : " "
      })).join("")
    }
  },
  8114: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      i: () => AJ,
      j: () => qJ
    });
    var FJ = ZJ(1995),
      UJ = ZJ(1137),
      eJ = ZJ(2001);
    const XJ = ",";

    function AJ(JJ) {
      if (!JJ) return [];
      const cJ = new Set,
        ZJ = [];
      for (const FJ of JJ.split(XJ)) {
        const JJ = FJ.trim();
        if ((0, eJ.n)(JJ) && !cJ.has(JJ) && (cJ.add(JJ), ZJ.push(JJ), ZJ.length >= UJ.n)) break
      }
      return ZJ
    }

    function qJ(JJ) {
      const cJ = new Set,
        ZJ = [];
      for (const FJ of JJ)
        if ((0, eJ.n)(FJ) && !cJ.has(FJ) && (cJ.add(FJ), ZJ.push(FJ), ZJ.length >= UJ.n)) break;
      return ZJ.join(XJ)
    }

    function jJ() {
      return qJ(eJ.i)
    }

    function YJ(JJ) {
      var cJ;
      return "emote" === JJ ? jJ() : null !== (cJ = hJ[JJ][0]) && void 0 !== cJ ? cJ : DJ[JJ]
    }
    const hJ = UJ.s.reduce(((JJ, cJ) => {
        const ZJ = [];
        for (const eJ in FJ.g[cJ]) {
          var UJ;
          "default" === (null === (UJ = (0, FJ.i)(cJ, eJ)) || void 0 === UJ ? void 0 : UJ.cosmeticPack) && ZJ.push(eJ)
        }
        return JJ[cJ] = ZJ, JJ
      }), {}),
      DJ = UJ.s.reduce(((JJ, cJ) => (JJ[cJ] = Object.keys(FJ.g[cJ])[0], JJ)), {})
  },
  8052: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return !JJ.hidden && (cJ || !JJ.isRewardedAd)
    }

    function UJ(JJ) {
      return "object" === typeof JJ ? JJ.option : JJ
    }

    function eJ(JJ, cJ) {
      var ZJ;
      if ("dropdown" === (null === (ZJ = JJ.userInput) || void 0 === ZJ ? void 0 : ZJ.type) && "object" === typeof JJ.userInput.dropdownOptions[0]) {
        for (const ZJ of JJ.userInput.dropdownOptions)
          if (UJ(ZJ) === cJ) return "object" === typeof ZJ ? ZJ.cost : JJ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", JJ, "input:", cJ)
      }
      return JJ.cost
    }

    function XJ(JJ, cJ, ZJ) {
      var FJ;
      const UJ = null !== (FJ = ZJ.excludedPlayers) && void 0 !== FJ ? FJ : [cJ];
      return JJ.filter((JJ => !UJ.includes(JJ)))
    }
    ZJ.d(cJ, {
      e: () => eJ,
      g: () => UJ,
      k: () => XJ,
      n: () => FJ
    })
  },
  8106: () => {}
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);