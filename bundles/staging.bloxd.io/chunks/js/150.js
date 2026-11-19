export const id = 150;
export const ids = [150];
export const modules = {
  8482: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => KD,
      g: () => UD,
      k: () => xD
    });
    var ID = cD(53),
      pD = cD(4337),
      iD = cD(1120),
      fD = cD(1440),
      bD = cD(20),
      QD = cD(3220),
      wD = cD(2195),
      SD = cD(1240),
      BD = cD(8520),
      yD = cD(1905),
      MD = cD(1954),
      tD = cD(1192),
      ZD = cD(16),
      oD = cD(1627),
      vD = cD(1049),
      ND = cD.n(vD),
      gD = cD(8487),
      XD = cD(8492),
      mD = cD(8497),
      nD = cD(8391),
      OD = cD(8506),
      PD = (cD(8514), cD(1093));
    let HD = null;

    function UD() {
      return null !== HD
    }

    function xD() {
      return "pad" === HD
    }

    function qD() {
      return "inGame" === ZD.d.get("gameState") && !(0, oD.s)()
    }

    function JD(DD) {
      return (0, XD.t)(DD, SD.l, XD.c, XD.e, XD.f)
    }
    const KD = (0, ID.memo)((function() {
      const {
        t: DD
      } = (0, tD.F)(), {
        userContext: CD
      } = (0, iD.c)(), [cD, ZD] = (0, ID.useState)(null), [vD, UD] = (0, ID.useState)(null), xD = (0, ID.useRef)(null), KD = (0, ID.useCallback)((DD => {
        xD.current = DD, UD(DD)
      }), []), aD = (0, ID.useRef)(0), VD = (0, ID.useRef)(null), zD = (0, ID.useRef)({
        x: 0,
        y: 0
      }), [jD, lD] = (0, ID.useState)(0), LD = (0, ID.useMemo)((() => function(DD) {
        const CD = [];
        for (let ID = 0; ID < SD.l; ID++) {
          var cD;
          CD.push(null !== (cD = DD[ID]) && void 0 !== cD ? cD : null)
        }
        return CD
      }((0, BD.f)(CD.getPlayerCosmetics().emote))), [CD, jD]);
      (0, MD.c)("cosmeticsUpdated", (DD => {
        DD.some((DD => DD.local && "emote" === DD.Gc)) && lD((DD => DD + 1))
      }));
      const TD = (0, ID.useRef)(!1),
        GD = (0, ID.useCallback)((function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === DD && (0, mD.c)(), TD.current = CD, zD.current = {
            x: 0,
            y: 0
          }, KD(null), ZD(DD)
        }), [KD]),
        RD = (0, ID.useCallback)((() => {
          ZD(null), KD(null), zD.current = {
            x: 0,
            y: 0
          }
        }), [KD]),
        kD = (0, ID.useCallback)((DD => {
          if (Date.now() < aD.current) return;
          const CD = (0, wD.h)(DD),
            cD = !!CD.holdUntilMove,
            ID = cD ? 600 : Math.ceil(1e3 * CD.animation.animation_length / wD.d) + 200;
          aD.current = Date.now() + ID, VD.current = DD, yD.gameBridge.send("playEmote", DD), yD.gameBridge.send("applyTemporaryThirdPerson", cD ? {} : {
            durationMs: ID
          })
        }), []);
      (0, fD.f)("requestToggleEmoteWheel", (() => {
        null === cD ? qD() && GD("click") : RD()
      })), (0, fD.f)("requestEmoteWheelHoldOpen", (() => {
        null === cD && qD() && GD((0, gD.d)() ? "hold" : "click")
      })), (0, fD.f)("requestEmoteWheelPadOpen", (DD => {
        null !== cD || !qD() || (0, nD.e)() || (0, OD.q)() || GD("pad", DD)
      })), (0, fD.f)("requestEmoteRepeatLast", (() => {
        if (null !== cD || !qD() || (0, nD.e)() || (0, OD.q)()) return;
        const DD = VD.current;
        null !== DD && LD.includes(DD) ? kD(DD) : GD("pad", !0)
      }));
      const dD = () => {
        const DD = xD.current,
          CD = null !== DD ? LD[DD] : null;
        null !== CD && "pad" === cD && Date.now() < aD.current || (RD(), null !== CD && kD(CD))
      };
      (0, fD.f)("emoteWheelPadAim", (DD => {
        if ("pad" !== cD) return;
        const CD = (0, XD.F)(DD, SD.l, xD.current);
        KD(null !== CD && null !== LD[CD] ? CD : null)
      })), (0, fD.f)("requestEmoteWheelPadCommit", (DD => {
        "pad" !== cD || DD && TD.current || dD()
      })), (0, fD.f)("appManagerUpdated|activeInputDevice", (DD => {
        null !== cD && "pad" === cD !== ("gamepad" === DD) && RD()
      })), (0, ID.useLayoutEffect)((() => (HD = cD, (0, QD.t)("emoteWheel", "pad" === cD), bD.i.Uo(QD.o), () => {
        HD = null, (0, QD.t)("emoteWheel", !1), bD.i.Uo(QD.o)
      })), [cD]), (0, fD.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === cD && dD()
      })), (0, fD.f)("requestEmoteWheelClose", (() => {
        null !== cD && RD()
      })), (0, fD.f)("appManagerUpdated|gameState", (DD => {
        "inGame" !== DD && RD()
      }));
      const YD = () => {
        (0, oD.s)() && RD()
      };
      if ((0, fD.f)("appManagerUpdated|openEverythingMenuName", YD), (0, fD.f)("appManagerUpdated|openInGameMenuName", YD), (0, fD.f)("pointerLockUpdate", (DD => {
          DD || "hold" !== cD || RD()
        })), (0, ID.useEffect)((() => {
          if (null === cD) return;
          const DD = DD => {
            "Escape" === DD.key && (DD.stopImmediatePropagation(), DD.preventDefault(), RD())
          };
          return document.addEventListener("keydown", DD, !0), () => {
            document.removeEventListener("keydown", DD, !0)
          }
        }), [cD, RD]), (0, pD.e)(!0, "click" === cD, "EmoteWheelOverlay"), (0, ID.useEffect)((() => {
          if ("hold" === cD) return yD.gameBridge.send("holdEmoteWheel", !0), () => {
            yD.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [cD]), (0, ID.useEffect)((() => {
          if ("hold" !== cD) return;
          const DD = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            CD = XD.p * DD,
            ID = XD.n * DD,
            pD = DD => {
              let cD = zD.current.x + DD.movementX,
                pD = zD.current.y + DD.movementY;
              const iD = Math.hypot(cD, pD);
              if (iD > CD) {
                const DD = CD / iD;
                cD *= DD, pD *= DD
              }
              zD.current = {
                x: cD,
                y: pD
              }, KD(function(DD, CD, cD, ID) {
                if (Math.hypot(DD, CD) < cD) return null;
                const pD = (0, XD.w)(DD, CD, SD.l);
                return null === ID[pD] ? null : pD
              }(cD, pD, ID, LD))
            };
          return document.addEventListener("mousemove", pD), () => {
            document.removeEventListener("mousemove", pD)
          }
        }), [cD, LD, KD]), null === cD) return null;
      const WD = "hold" === cD || "pad" === cD,
        sD = null !== vD ? LD[vD] : null,
        ED = null !== sD ? (0, wD.h)(sD).displayName : DD("emotes:pickEmote");
      return (0, PD.jsx)("div", {
        className: ND()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === cD
        }),
        onMouseDown: DD => {
          DD.target === DD.currentTarget && RD()
        },
        children: (0, PD.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * XD.p + "rem",
            height: 2 * XD.p + "rem"
          },
          children: [(0, PD.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${XD.j} ${XD.j}`,
            children: [LD.map(((CD, cD) => {
              const ID = null !== CD,
                pD = WD && cD === vD;
              return (0, PD.jsx)("path", {
                d: JD(cD),
                className: ND()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: pD,
                  EmoteWheelWedgeDisabled: !ID
                }),
                onClick: DD => {
                  DD.stopPropagation(), null !== CD && (DD => {
                    RD(), kD(DD)
                  })(CD)
                },
                "aria-label": null !== CD ? (0, wD.h)(CD).displayName : DD("emotes:emptySlot")
              }, cD)
            })), (0, PD.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: XD.c,
              cy: XD.c,
              r: XD.f
            }), (0, PD.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: XD.c,
              cy: XD.c,
              r: XD.e
            }), WD && null !== vD && (0, PD.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: JD(vD)
            })]
          }), LD.map(((DD, CD) => {
            const cD = null !== DD,
              ID = WD && CD === vD,
              pD = (0, XD.y)(CD, SD.l),
              iD = XD.b * Math.cos(pD),
              fD = XD.b * Math.sin(pD);
            return (0, PD.jsx)("div", {
              className: ND()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: ID,
                EmoteWheelSlotIconDisabled: !cD
              }),
              style: {
                left: `calc(50% + ${iD}rem)`,
                top: `calc(50% + ${fD}rem)`,
                backgroundImage: cD ? `url(/textures/charSkins/previews/emote_${DD}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, CD)
          })), (0, PD.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: ED
          })]
        })
      })
    }))
  },
  8472: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => BD,
      e: () => tD,
      f: () => ZD,
      j: () => MD,
      k: () => yD
    });
    var ID = cD(53),
      pD = cD(8476),
      iD = cD(20),
      fD = cD(1905),
      bD = cD(36),
      QD = cD(1260),
      wD = cD(1928);
    const SD = 50;
    const BD = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = DD => {
          if (0 === this.listeners.size) {
            var CD, cD;
            this.state = {
              ...this.state,
              channel: null !== (CD = null === (cD = wD.d.get("chatChannels")) || void 0 === cD ? void 0 : cD[0]) && void 0 !== CD ? CD : null
            };
            const DD = iD.i.subscribe("reportPlayer", (DD => {
              let {
                playerEId: CD
              } = DD;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, CD]
              })
            }));
            this.stopListening = [fD.gameBridge.subscribe("chatReceived", (DD => {
              let {
                serverChatMsgId: CD,
                content: cD,
                author: ID
              } = DD;
              this.addMessage(CD, cD, ID)
            })), () => {
              iD.i.unsubscribe(DD)
            }, wD.d.subscribe("chatChannels", (DD => {
              var CD;
              this.setState({
                ...this.state,
                channel: null !== (CD = null === DD || void 0 === DD ? void 0 : DD[0]) && void 0 !== CD ? CD : null
              })
            }))]
          }
          return this.listeners.add(DD), () => {
            if (this.listeners.delete(DD), 0 === this.listeners.size) {
              for (const DD of this.stopListening) DD();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ID = {
          serverChatMsgId: DD,
          content: CD,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: cD
        };
        this.setState({
          ...this.state,
          messages: [ID, ...this.state.messages].slice(0, pD.h)
        })
      }
      selectNextChannel() {
        const DD = wD.d.get("chatChannels");
        if (DD) {
          const CD = DD.findIndex((DD => {
            var CD;
            return DD.channelName === (null === (CD = this.state.channel) || void 0 === CD ? void 0 : CD.channelName)
          }));
          this.setState({
            ...this.state,
            channel: DD[(CD + 1) % DD.length]
          })
        }
      }
      setState(DD) {
        this.state = DD;
        for (const CD of this.listeners) CD()
      }
    };

    function yD() {
      const [DD, CD] = (0, ID.useState)(BD.getState);
      return (0, ID.useEffect)((() => {
        const DD = BD.subscribe((() => {
          CD(BD.getState())
        }));
        return CD(BD.getState()), DD
      }), []), DD
    }

    function MD(DD) {
      var CD, cD;
      if (DD.startsWith("/report")) {
        var ID;
        const CD = null !== (ID = DD.replace("/report", "").trim().split(" ")[0]) && void 0 !== ID ? ID : "";
        if ("" === CD) return void BD.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const cD = fD.gameBridge.latest("players"),
          pD = fD.gameBridge.latest("hiddenPlayerNames"),
          bD = DD => {
            var ID, iD;
            const fD = null !== (ID = null === (iD = cD.byId[DD]) || void 0 === iD ? void 0 : iD.name) && void 0 !== ID ? ID : null;
            return null !== fD && (fD === CD || (0, QD.d)(fD, pD) === CD)
          };
        if (null !== cD.localId && bD(cD.localId)) return void BD.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const DD of cD.ids)
          if (bD(DD)) return iD.i.Uo("OpenReportMenu", {
            playerEId: DD,
            playerName: cD.byId[DD].name,
            Rf: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        BD.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      fD.gameBridge.send("sendChatMessage", {
          Rf: DD,
          channelName: null !== (CD = null === (cD = BD.getState().channel) || void 0 === cD ? void 0 : cD.channelName) && void 0 !== CD ? CD : null
        }),
        function(DD) {
          var CD;
          const cD = null !== (CD = bD.h.getItem("recentlySentChatMsgs")) && void 0 !== CD ? CD : [];
          cD.push(DD), cD.length > SD && cD.shift();
          bD.h.setItem("recentlySentChatMsgs", cD)
        }(DD)
    }

    function tD() {
      var DD;
      return null !== (DD = bD.h.getItem("recentlySentChatMsgs")) && void 0 !== DD ? DD : []
    }

    function ZD(DD) {
      var CD;
      let cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ID = null !== (CD = bD.h.getItem("recentlySentChatMsgs")) && void 0 !== CD ? CD : [],
        pD = ID.length + 1,
        iD = cD ? (DD % pD + pD) % pD : Math.min(ID.length, Math.max(0, DD));
      return {
        stepsBack: iD,
        text: 0 === iD ? "" : ID[ID.length - iD]
      }
    }
  },
  8420: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      d: () => iD
    });
    var ID = cD(1969);
    const pD = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      iD = DD => "string" === typeof DD.icon && "" !== DD.icon && "string" === typeof DD.keycode && pD.test(DD.keycode),
      fD = DD => "Space" === DD ? "_" : ID.j[DD]
  },
  8487: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD
    });
    var ID = cD(16);

    function pD() {
      return !ID.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8591: (DD, CD, cD) => {
    function ID(DD) {
      return {
        x: (DD.left + DD.right) / 2,
        y: (DD.top + DD.bottom) / 2
      }
    }

    function pD(DD) {
      return 0 === DD.length ? null : DD.reduce(((DD, CD) => ({
        left: Math.min(DD.left, CD.left),
        top: Math.min(DD.top, CD.top),
        right: Math.max(DD.right, CD.right),
        bottom: Math.max(DD.bottom, CD.bottom)
      })))
    }

    function iD(DD, CD) {
      const cD = Math.max(0, (CD - (DD.right - DD.left)) / 2),
        ID = Math.max(0, (CD - (DD.bottom - DD.top)) / 2);
      return {
        left: DD.left - cD,
        top: DD.top - ID,
        right: DD.right + cD,
        bottom: DD.bottom + ID
      }
    }

    function fD(DD, CD) {
      return CD.x >= DD.left && CD.x <= DD.right && CD.y >= DD.top && CD.y <= DD.bottom
    }

    function bD(DD, CD, cD) {
      let pD = null,
        bD = 1 / 0;
      for (const {
          id: ID,
          box: iD
        }
        of CD) {
        const CD = (iD.right - iD.left) * (iD.bottom - iD.top);
        fD(iD, DD) && CD < bD && (bD = CD, pD = ID)
      }
      if (null !== pD) return pD;
      let QD = 1 / 0;
      for (const {
          id: wD,
          box: SD
        }
        of CD) {
        if (!fD(iD(SD, cD), DD)) continue;
        const CD = ID(SD),
          bD = Math.hypot(DD.x - CD.x, DD.y - CD.y);
        bD < QD && (QD = bD, pD = wD)
      }
      return pD
    }

    function QD(DD, CD, cD) {
      return {
        left: cD.left,
        top: cD.top,
        right: DD - cD.right,
        bottom: CD - cD.bottom
      }
    }

    function wD(DD, CD, cD, ID) {
      const pD = (DD, CD, cD) => Math.max(Math.min(CD, 0), Math.min(Math.max(cD, 0), DD));
      return {
        x: pD(CD, ID.left - DD.left, ID.right - DD.right),
        y: pD(cD, ID.top - DD.top, ID.bottom - DD.bottom)
      }
    }

    function SD(DD, CD, cD, ID, pD) {
      const iD = DD.dx * ID + CD,
        fD = DD.dy * pD + cD,
        bD = DD => Math.max(-1, Math.min(1, DD));
      return {
        dx: bD(iD / ID),
        dy: bD(fD / pD)
      }
    }

    function BD(DD, CD, cD, ID) {
      return CD <= 0 || cD <= 0 ? 1 : Math.max(.05, Math.min(1, DD / CD, ID / cD))
    }

    function yD(DD, CD, cD) {
      return Math.min(DD.right, CD.right) - Math.max(DD.left, CD.left) > cD && Math.min(DD.bottom, CD.bottom) - Math.max(DD.top, CD.top) > cD
    }

    function MD(DD, CD) {
      const cD = (DD, CD, cD, ID) => CD - DD > ID - cD ? cD - DD > CD - ID ? ID - CD : cD - DD : DD < cD ? cD - DD : CD > ID ? ID - CD : 0;
      return {
        x: cD(DD.left, DD.right, CD.left, CD.right),
        y: cD(DD.top, DD.bottom, CD.top, CD.bottom)
      }
    }

    function tD(DD, CD) {
      let {
        avoid: cD = null,
        bounds: ID = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, pD = 0, iD = 1 / 0;
      return DD.forEach(((DD, fD) => {
        const bD = CD.filter((CD => yD(DD, CD, 0))).length,
          QD = null !== ID && (DD.left < ID.left || DD.top < ID.top || DD.right > ID.right || DD.bottom > ID.bottom),
          wD = bD + (cD && yD(DD, cD, 0) ? 1e3 : 0) + (QD ? 1e6 : 0);
        wD < iD && (pD = fD, iD = wD)
      })), pD
    }
    cD.d(CD, {
      B: () => BD,
      F: () => QD,
      I: () => MD,
      J: () => pD,
      c: () => ID,
      f: () => fD,
      j: () => yD,
      m: () => wD,
      q: () => iD,
      s: () => tD,
      v: () => SD,
      y: () => bD
    })
  },
  8492: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => yD,
      F: () => MD,
      b: () => iD,
      c: () => bD,
      e: () => wD,
      f: () => QD,
      j: () => fD,
      n: () => pD,
      p: () => ID,
      t: () => tD,
      w: () => BD,
      y: () => SD
    });
    const ID = 14,
      pD = 6,
      iD = (ID + pD) / 2,
      fD = 200,
      bD = fD / 2,
      QD = fD / 2 - 1,
      wD = pD / ID * (fD / 2),
      SD = (DD, CD) => -Math.PI / 2 + 2 * DD * Math.PI / CD,
      BD = (DD, CD, cD) => {
        const ID = 2 * Math.PI / cD;
        return (Math.round((Math.atan2(CD, DD) + Math.PI / 2) / ID) % cD + cD) % cD
      },
      yD = .5,
      MD = (DD, CD, cD) => Math.hypot(DD.x, DD.y) < yD ? cD : BD(DD.x, DD.y, CD),
      tD = (DD, CD, cD, ID, pD) => {
        const iD = Math.PI / CD,
          fD = SD(DD, CD),
          bD = fD - iD,
          QD = fD + iD,
          wD = (DD, CD) => `${cD+DD*Math.cos(CD)} ${cD+DD*Math.sin(CD)}`;
        return [`M ${wD(ID,bD)}`, `L ${wD(pD,bD)}`, `A ${pD} ${pD} 0 0 1 ${wD(pD,QD)}`, `L ${wD(ID,QD)}`, `A ${ID} ${ID} 0 0 0 ${wD(ID,bD)}`, "Z"].join(" ")
      }
  },
  8537: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(53),
      pD = cD(8456),
      iD = cD(2358);

    function fD() {
      const DD = (0, iD.h)("shopInfo"),
        [, CD] = (0, ID.useReducer)((DD => DD + 1), 0);
      return (0, iD.e)("shopInfo", CD), !(0, pD.b)(DD)
    }
  },
  8413: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      h: () => fD,
      i: () => bD,
      j: () => pD
    });
    var ID = cD(8420);
    const pD = DD => {
        const CD = [];
        DD.holdingGun && CD.push({
          kind: "reload"
        }), DD.touchscreenActionButton && CD.push({
          kind: "touchButton",
          label: DD.touchscreenActionButton
        });
        for (const iD of null !== (cD = null === (pD = DD.customButtons) || void 0 === pD ? void 0 : pD.filter(ID.d)) && void 0 !== cD ? cD : []) {
          var cD, pD;
          CD.push({
            kind: "customButton",
            id: iD.id,
            icon: iD.icon,
            description: iD.description
          })
        }
        return CD
      },
      iD = DD => DD.length >= 2,
      fD = DD => "specialAction" !== DD.kind,
      bD = (DD, CD) => {
        if (null === DD || null === CD) return DD === CD;
        if (DD.kind !== CD.kind) return !1;
        switch (DD.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return DD.action === CD.action;
          case "customButton":
            return DD.id === CD.id && DD.icon === CD.icon;
          case "touchButton":
            return DD.label === CD.label
        }
      }
  },
  8409: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => SD,
      f: () => MD,
      j: () => BD,
      n: () => tD
    });
    var ID = cD(53),
      pD = cD(20),
      iD = cD(1440),
      fD = cD(8413),
      bD = cD(8428);
    let QD = null;
    const wD = () => QD,
      SD = DD => {
        (0, fD.i)(QD, DD) || (QD = DD, pD.i.Uo(bD.h, QD))
      },
      BD = () => {
        const [DD, CD] = (0, ID.useState)(wD);
        return (0, iD.f)(bD.h, CD), DD
      };
    let yD = !1;
    const MD = DD => {
        DD !== yD && (yD = DD, pD.i.Uo(bD.l, DD))
      },
      tD = () => {
        const [DD, CD] = (0, ID.useState)(yD);
        return (0, iD.f)(bD.l, CD), DD
      }
  },
  8428: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      h: () => ID,
      l: () => pD,
      m: () => bD,
      p: () => QD,
      t: () => wD,
      x: () => fD
    });
    const ID = "controllerActionHintChanged",
      pD = "controllerActionWheelHintChanged",
      iD = "controllerOpenChat",
      fD = "controllerSneakToggledChanged",
      bD = "controllerAttackLatchedChanged",
      QD = "controllerDropStackHoldChanged",
      wD = "controllerPickBlockHintChanged"
  },
  8369: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      f: () => iD,
      h: () => QD,
      i: () => bD
    });
    var ID = cD(1440),
      pD = cD(1403);
    const iD = "controllerInventoryCursorChanged",
      fD = {
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
      bD = () => {
        var DD, CD;
        return (0, ID.g)(iD, null !== (DD = null === (CD = (0, pD.d)()) || void 0 === CD ? void 0 : CD.getInventoryCursorState()) && void 0 !== DD ? DD : fD)
      },
      QD = () => {
        var DD, CD;
        return null !== (DD = null === (CD = (0, pD.d)()) || void 0 === CD ? void 0 : CD.isPadSteppingSlots()) && void 0 !== DD && DD
      }
  },
  8363: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => yD,
      g: () => bD,
      h: () => QD,
      i: () => fD,
      m: () => iD,
      p: () => SD,
      r: () => BD
    });
    let ID = null;
    const pD = new Set,
      iD = DD => (ID = DD, () => {
        if (ID === DD) {
          ID = null;
          for (const DD of pD) DD()
        }
      }),
      fD = DD => (pD.add(DD), () => {
        pD.delete(DD)
      }),
      bD = () => ID,
      QD = () => null !== ID;
    let wD = null;
    const SD = DD => {
        wD = DD
      },
      BD = () => {
        const DD = wD;
        return wD = null, DD
      },
      yD = (DD, CD) => {
        var cD, ID;
        return null !== (cD = null !== (ID = DD.find((DD => DD.element === CD))) && void 0 !== ID ? ID : DD.find((DD => DD.element.contains(CD)))) && void 0 !== cD ? cD : null
      }
  },
  8372: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      f: () => fD
    });
    var ID = cD(53);
    const pD = new WeakMap,
      iD = DD => {
        var CD, cD;
        return null !== (CD = null === (cD = pD.get(DD)) || void 0 === cD ? void 0 : cD.current) && void 0 !== CD ? CD : null
      },
      fD = (DD, CD) => {
        const cD = (0, ID.useRef)(CD);
        cD.current = CD;
        const iD = (0, ID.useRef)(null);
        (0, ID.useEffect)((() => {
          const CD = DD.current,
            ID = iD.current;
          CD !== ID && (ID && pD.get(ID) === cD && pD.delete(ID), iD.current = CD, CD && pD.set(CD, cD))
        })), (0, ID.useEffect)((() => () => {
          const DD = iD.current;
          DD && pD.get(DD) === cD && pD.delete(DD), iD.current = null
        }), [])
      }
  },
  8528: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD,
      g: () => wD,
      h: () => BD,
      j: () => SD,
      n: () => QD,
      p: () => MD
    });
    var ID = cD(20),
      pD = cD(1988),
      iD = cD(1403),
      fD = cD(1388);
    const bD = DD => {
        var CD, cD;
        return (0, fD.e)() && null !== (CD = null === (cD = (0, iD.d)()) || void 0 === cD ? void 0 : cD.getGlyphForNoaAction(DD)) && void 0 !== CD ? CD : null
      },
      QD = "controllerGlyph:",
      wD = DD => {
        var CD, cD;
        return null !== (CD = null === (cD = (0, iD.d)()) || void 0 === cD ? void 0 : cD.getPadGlyphIconName(DD)) && void 0 !== CD ? CD : `${QD}xbox/${DD}`
      },
      SD = DD => DD.startsWith(QD),
      BD = DD => {
        var CD, cD;
        return SD(DD) && null !== (CD = null === (cD = (0, iD.d)()) || void 0 === cD ? void 0 : cD.getPadGlyphIconUrl(DD)) && void 0 !== CD ? CD : null
      },
      yD = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", fD.c, pD.d, pD.b],
      MD = DD => {
        const CD = yD.map((CD => ID.i.subscribe(CD, DD)));
        return () => {
          for (const DD of CD) ID.i.unsubscribe(DD)
        }
      }
  },
  8355: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      f: () => ID
    });
    const ID = "controllerOpenKeyboard",
      pD = "controllerKeyboardVisible"
  },
  8394: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      i: () => pD
    });
    let ID = null;
    const pD = function(DD) {
        const CD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ID = CD, () => {
          ID === CD && (ID = null)
        }
      },
      iD = () => {
        var DD;
        return null !== (DD = ID) && void 0 !== DD && DD.canCycle() ? ID.cycle : null
      }
  },
  8506: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      g: () => fD,
      i: () => iD,
      k: () => ID,
      o: () => bD,
      q: () => wD,
      s: () => SD
    });
    const ID = "controllerActionWheelOpen",
      pD = "controllerActionWheelAim",
      iD = "controllerActionWheelCommit",
      fD = "controllerActionWheelClose",
      bD = "controllerActionWheelPick";
    let QD = !1;
    const wD = () => QD,
      SD = DD => {
        QD = DD
      }
  },
  8497: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      c: () => pD
    });
    let ID = 0;
    const pD = () => {
        ID++
      },
      iD = () => ID
  },
  8391: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD,
      g: () => pD,
      j: () => fD,
      l: () => iD,
      o: () => ID,
      q: () => wD
    });
    const ID = "controllerQuickChatWheelOpen",
      pD = "controllerQuickChatWheelAim",
      iD = "controllerQuickChatWheelCommit",
      fD = "controllerQuickChatWheelClose";
    let bD = !1;
    const QD = () => bD,
      wD = DD => {
        bD = DD
      }
  },
  8583: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      d: () => QD
    });
    var ID = cD(16),
      pD = cD(1317),
      iD = cD(90);
    const fD = {
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

    function bD() {
      return (0, iD.isMobile)() && "function" === typeof navigator.vibrate
    }
    const QD = new class {
      constructor(DD) {
        this.deps = DD, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(DD, CD) {
        var cD;
        if (!this.deps.enabled()) return;
        const ID = fD[DD],
          pD = null !== CD && void 0 !== CD ? CD : ID.pattern;
        if (null === pD) return void console.warn("No vibration pattern for", DD);
        const iD = this.deps.now();
        iD - this.lastAnyAt < 40 && ID.priority < this.playingPriority || iD - (null !== (cD = this.lastAt.get(DD)) && void 0 !== cD ? cD : -1 / 0) < ID.minGapMs || iD < this.playingUntil && ID.priority < this.playingPriority || (this.lastAt.set(DD, iD), this.lastAnyAt = iD, this.playingUntil = iD + pD.reduce(((DD, CD) => DD + CD), 0), this.playingPriority = ID.priority, this.deps.vibrate(pD))
      }
    }({
      vibrate: DD => {
        navigator.vibrate([...DD])
      },
      now: () => performance.now(),
      enabled: () => bD() && ID.d.get("isTouchScreen") && ID.d.get("clientEscMenuOptions").vibration && !(0, pD.c)()
    })
  },
  8456: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(8463),
      pD = cD(624),
      iD = cD(120);

    function fD(DD) {
      var CD, cD;
      if ((0, pD.C)(DD)) return !0;
      const fD = null !== (CD = null === (cD = iD.j[iD.p]) || void 0 === cD ? void 0 : cD.adConfig.showRewardedAds) && void 0 !== CD && CD;
      for (const pD in DD) {
        const CD = DD[pD];
        if (null !== CD && void 0 !== CD && CD.items)
          for (const DD in CD.items)
            if ((0, ID.i)(CD.items[DD], fD)) return !1
      }
      return !0
    }
  },
  8476: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      h: () => ID
    });
    const ID = 100;

    function pD(DD) {
      let {
        translationKeys: CD = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return DD.map((DD => {
        var cD;
        return null !== (cD = function(DD, CD) {
          if ("string" === typeof DD) return DD;
          const cD = "str" in DD ? DD.str : DD;
          if ("string" === typeof cD) return cD;
          if ("entityName" in cD) return cD.entityName;
          if (CD && "translationKey" in cD) return `{${cD.translationKey}${void 0===cD.params?"":` ${JSON.stringify(cD.params)}`}}`;
          return null
        }(DD, CD)) && void 0 !== cD ? cD : " "
      })).join("")
    }
  },
  8520: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      f: () => bD,
      g: () => QD
    });
    var ID = cD(2192),
      pD = cD(1240),
      iD = cD(2195);
    const fD = ",";

    function bD(DD) {
      if (!DD) return [];
      const CD = new Set,
        cD = [];
      for (const ID of DD.split(fD)) {
        const DD = ID.trim();
        if ((0, iD.i)(DD) && !CD.has(DD) && (CD.add(DD), cD.push(DD), cD.length >= pD.l)) break
      }
      return cD
    }

    function QD(DD) {
      const CD = new Set,
        cD = [];
      for (const ID of DD)
        if ((0, iD.i)(ID) && !CD.has(ID) && (CD.add(ID), cD.push(ID), cD.length >= pD.l)) break;
      return cD.join(fD)
    }

    function wD() {
      return QD(iD.f)
    }

    function SD(DD) {
      var CD;
      return "emote" === DD ? wD() : null !== (CD = BD[DD][0]) && void 0 !== CD ? CD : yD[DD]
    }
    const BD = pD.u.reduce(((DD, CD) => {
        const cD = [];
        for (const iD in ID.f[CD]) {
          var pD;
          "default" === (null === (pD = (0, ID.k)(CD, iD)) || void 0 === pD ? void 0 : pD.cosmeticPack) && cD.push(iD)
        }
        return DD[CD] = cD, DD
      }), {}),
      yD = pD.u.reduce(((DD, CD) => (DD[CD] = Object.keys(ID.f[CD])[0], DD)), {})
  },
  8463: (DD, CD, cD) => {
    function ID(DD, CD) {
      return !DD.hidden && (CD || !DD.isRewardedAd)
    }

    function pD(DD) {
      return "object" === typeof DD ? DD.option : DD
    }

    function iD(DD, CD) {
      var cD;
      if ("dropdown" === (null === (cD = DD.userInput) || void 0 === cD ? void 0 : cD.type) && "object" === typeof DD.userInput.dropdownOptions[0]) {
        for (const cD of DD.userInput.dropdownOptions)
          if (pD(cD) === CD) return "object" === typeof cD ? cD.cost : DD.cost;
        console.error("Didn't find matching option for dropdown item. Item:", DD, "input:", CD)
      }
      return DD.cost
    }

    function fD(DD, CD, cD) {
      var ID;
      const pD = null !== (ID = cD.excludedPlayers) && void 0 !== ID ? ID : [CD];
      return DD.filter((DD => !pD.includes(DD)))
    }
    cD.d(CD, {
      c: () => iD,
      d: () => pD,
      f: () => fD,
      i: () => ID
    })
  },
  8514: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);