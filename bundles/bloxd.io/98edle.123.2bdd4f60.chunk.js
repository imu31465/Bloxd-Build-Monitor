export const id = 123;
export const ids = [122, 123];
export const modules = {
  8144: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR
    });
    var wW = MW(284),
      CW = MW(8147);

    function zR(WW, RW, MW) {
      const zR = Object.entries(RW).sort(((WW, RW) => RW[1] - WW[1])),
        AW = (0, wW.pb)(WW);
      AW.push(WW ? "\n\n" : "\n");
      for (const [CW, gR] of zR) {
        var bR, yR, NW;
        const WW = null !== (bR = null === MW || void 0 === MW || null === (yR = MW[CW]) || void 0 === yR ? void 0 : yR.icon) && void 0 !== bR ? bR : `${CW} Enchantment`;
        AW.push({
          icon: WW,
          style: {
            fontSize: "1.5rem"
          }
        }), AW.push({
          str: `${CW} ${null!==(NW=(0,wW.N)(gR))&&void 0!==NW?NW:gR}\n`
        })
      }
      AW.push({
        str: "\n"
      });
      for (const [wW, gR] of zR) {
        var eW, BW, tR, TW;
        const WW = null !== (eW = null === MW || void 0 === MW || null === (BW = MW[wW]) || void 0 === BW ? void 0 : BW.icon) && void 0 !== eW ? eW : `${wW} Enchantment`,
          RW = null !== (tR = null === MW || void 0 === MW || null === (TW = MW[wW]) || void 0 === TW ? void 0 : TW.description) && void 0 !== tR ? tR : (0, CW.g)(wW);
        AW.push({
          icon: WW,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), AW.push({
          str: RW,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), AW.push({
          str: "\n"
        })
      }
      return AW
    }
  },
  8153: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => BW,
      d: () => NW,
      g: () => PW,
      k: () => YW,
      l: () => yR,
      m: () => JW,
      q: () => eW,
      t: () => tR,
      x: () => iR
    });
    var wW = MW(232),
      CW = MW(564),
      zR = MW(284),
      AW = MW(3350),
      bR = MW(8144);

    function yR(WW, RW) {
      var MW;
      let {
        player: wW,
        chestOrCreative: CW
      } = WW;
      var zR;
      return RW < wW.length ? null !== (zR = wW[RW]) && void 0 !== zR ? zR : null : null !== (MW = CW[RW - wW.length]) && void 0 !== MW ? MW : null
    }

    function NW(WW) {
      var RW;
      return null !== (RW = WW.amount) && void 0 !== RW ? RW : 0
    }

    function eW(WW) {
      return 0 === WW.button || void 0 === WW.button
    }

    function BW(WW) {
      return !!WW.shiftKey
    }

    function tR(WW) {
      return "touches" in WW || "touch" === WW.pointerType || "pen" === WW.pointerType
    }
    const TW = new Set,
      gR = 50;

    function iR(WW, RW) {
      var MW;
      const wW = null === (MW = WW[RW]) || void 0 === MW ? void 0 : MW.displayName;
      return (0, CW.S)(wW) ? "string" !== typeof RW ? "" : (!TW.has(RW) && TW.size < gR && (TW.add(RW), console.warn(`No item called "${RW}", so its hover shows the name as given`)), RW) : wW
    }

    function YW(WW, RW, MW) {
      var yR, NW, eW, BW, tR, TW, gR, YW, JW, PW, IW, oW, lW, FW;
      const fW = WW.attributes,
        QW = null !== (yR = null === (NW = RW[WW.name]) || void 0 === NW ? void 0 : NW.rootName) && void 0 !== yR ? yR : WW.name,
        rR = null !== (eW = null !== (BW = fW.customDisplayName) && void 0 !== BW ? BW : null === (tR = RW[WW.name]) || void 0 === tR ? void 0 : tR.displayName) && void 0 !== eW ? eW : iR(RW, QW);
      let cR = rR;
      const XW = null === (TW = fW.customAttributes) || void 0 === TW ? void 0 : TW.enchantmentTier;
      XW && (cR = (0, zR.pb)(rR, {
        colour: zR.lb[XW]
      }));
      const jR = null !== (gR = null !== (YW = null !== (JW = function(WW, RW) {
        var MW;
        if (void 0 === WW || null !== (MW = RW.customAttributes) && void 0 !== MW && MW.author) return WW;
        const CW = (0, wW.Vb)(WW);
        return CW.every((WW => "string" === typeof WW)) ? WW : CW.map((WW => "string" === typeof WW ? WW : {
          icon: WW.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(fW.customDescription, fW)) && void 0 !== JW ? JW : null === (PW = RW[WW.name]) || void 0 === PW ? void 0 : PW.description) && void 0 !== YW ? YW : null === (IW = RW[QW]) || void 0 === IW ? void 0 : IW.description) && void 0 !== gR ? gR : "";
      let kR = jR;
      if (null !== (oW = fW.customAttributes) && void 0 !== oW && oW.enchantments) kR = (0, bR.e)(jR, fW.customAttributes.enchantments, fW.customAttributes.enchantmentData);
      else if (MW[QW]) kR = (0, zR.pb)(jR), kR.push({
        str: "\n"
      }), kR.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (lW = fW.customAttributes) && void 0 !== lW && lW.mobSettings) {
        var aR, sW;
        const WW = fW.customAttributes.mobSettings;
        var dW, pW;
        if (kR = [], (0, CW.S)(fW.customAttributes.health) || (kR.push({
            str: "\n"
          }), kR.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), kR.push({
            str: " "
          }), kR.push({
            str: fW.customAttributes.health.toString()
          }), (0, CW.S)(WW.maxHealth) || (kR.push({
            str: "/"
          }), kR.push({
            str: WW.maxHealth.toString()
          }))), !(0, CW.S)(WW.attackDamage) && WW.attackDamage > 0 && (kR.push({
            str: "\n"
          }), kR.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), kR.push({
            str: " "
          }), kR.push({
            str: WW.attackDamage.toString()
          })), !(0, CW.S)(WW.secondaryAttackDamage) && WW.secondaryAttackDamage > 0 && (kR.push({
            str: "\n"
          }), kR.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), kR.push({
            str: " "
          }), kR.push({
            str: WW.secondaryAttackDamage.toString()
          })), (0, CW.S)(WW.baseRunningSpeed) || (kR.push({
            str: "\n"
          }), kR.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), kR.push({
            str: " "
          }), kR.push({
            str: WW.baseRunningSpeed.toFixed(2)
          })), "Saddled" === WW.metaInfo) kR.push({
          str: "\n"
        }), kR.push({
          str: {
            translationKey: "general:has"
          }
        }), kR.push({
          str: " "
        }), kR.push({
          icon: null !== (dW = null === (pW = WW.tameInfo) || void 0 === pW ? void 0 : pW.saddleItemName) && void 0 !== dW ? dW : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (kR.push({
            str: "\n"
          }), kR.push({
            str: "\n"
          }), WW.petInfo && null !== (aR = WW.tameInfo) && void 0 !== aR && aR.supportsFriendship) {
          const RW = AW.c.getIconsFromFriendshipPoints(WW.petInfo.friendshipPoints);
          for (const WW of RW) kR.push({
            icon: WW,
            style: {
              fontSize: "1.5em"
            }
          });
          kR.push({
            str: "\n"
          });
          const MW = AW.c.getMobHungerLevel(WW.petInfo.lastFedAt);
          for (const WW of AW.c.hungerLevelIcons[MW]) kR.push({
            icon: WW,
            style: {
              fontSize: "1.5em"
            }
          });
          kR.push({
            str: " "
          }), kR.push({
            str: AW.c.hungerLevelTranslations[MW],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (WW.tameInfo && null !== (sW = WW.tameInfo) && void 0 !== sW && sW.supportsFriendship) {
          var hW, UW;
          let RW = null !== (hW = WW.tameInfo.likedFoods) && void 0 !== hW ? hW : [];
          kR.push({
            str: "\n"
          }), kR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AW.c.feedTextColours[AW.c.MobFoodType.Superliked]
            }
          }), kR.push({
            str: " "
          }), null !== (UW = WW.petInfo) && void 0 !== UW && UW.superlikedFoodKnown ? (kR.push({
            icon: WW.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), RW = RW.filter((RW => RW !== WW.petInfo.superlikedFood))) : kR.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), kR.push({
            str: "\n"
          }), kR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AW.c.feedTextColours[AW.c.MobFoodType.Liked]
            }
          }), kR.push({
            str: " "
          });
          for (const WW of RW) kR.push({
            icon: WW,
            style: {
              fontSize: "1.5em"
            }
          });
          kR.push({
            str: "\n"
          }), kR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AW.c.feedTextColours[AW.c.MobFoodType.Neutral]
            }
          }), kR.push({
            str: " "
          });
          for (const MW of null !== (EW = WW.tameInfo.neutralFoods) && void 0 !== EW ? EW : []) {
            var EW;
            kR.push({
              icon: MW,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          kR.push({
            str: "\n"
          }), kR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AW.c.feedTextColours[AW.c.MobFoodType.Disliked]
            }
          }), kR.push({
            str: " "
          });
          for (const MW of null !== (VW = WW.tameInfo.dislikedFoods) && void 0 !== VW ? VW : []) {
            var VW;
            kR.push({
              icon: MW,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        kR.length > 0 ? (kR.shift(), kR.unshift(...(0, zR.pb)(jR))) : kR = (0, zR.pb)(jR)
      }
      return {
        name: cR,
        desc: kR,
        fontStyle: null !== (FW = fW.customAttributes) && void 0 !== FW && FW.author ? "italic" : "normal"
      }
    }

    function JW(WW, RW, MW, wW) {
      const CW = yR(WW, MW),
        zR = yR(WW, wW);
      if (!CW) return !1;
      const AW = RW[CW.name].armourReduction,
        bR = RW[zR.name].armourReduction;
      if (bR === AW) {
        var NW, eW, BW, tR;
        const WW = null !== (NW = null === (eW = CW.attributes.customAttributes) || void 0 === eW ? void 0 : eW.enchantmentTier) && void 0 !== NW ? NW : "Tier 0",
          RW = null !== (BW = null === (tR = zR.attributes.customAttributes) || void 0 === tR ? void 0 : tR.enchantmentTier) && void 0 !== BW ? BW : "Tier 0";
        return parseInt(WW.replace("Tier ", "")) >= parseInt(RW.replace("Tier ", ""))
      }
      return AW > bR
    }

    function PW(WW) {
      let RW;
      if ("number" === typeof WW) {
        const MW = document.querySelector(`[data-inven-idx="${WW}"]`);
        if (!MW) return null;
        RW = MW.getBoundingClientRect()
      } else RW = WW.getBoundingClientRect();
      return {
        x: RW.left + RW.width / 2,
        y: RW.top + RW.height / 2
      }
    }
  },
  8084: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW,
      e: () => gR
    });
    var wW = MW(1255),
      CW = MW(75),
      zR = MW(1135),
      AW = MW(3573),
      bR = MW(1897),
      yR = MW(1027),
      NW = MW(116),
      eW = MW(1571),
      BW = MW(1157),
      tR = MW(940);

    function TW(WW) {
      let {
        show: RW,
        onClose: MW
      } = WW;
      const {
        requestedGameNameWithVariation: wW,
        lobbyName: CW,
        shownLobbyName: zR
      } = (0, eW.h)("connectedGame"), yR = (0, bR.e)(wW, CW, !1);
      return NW.featureFlags.canUseInviteLinks && (0, tR.jsx)(AW.b, {
        show: RW,
        close: MW,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, tR.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, tR.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, tR.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, tR.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === yR ? (0, tR.jsx)(BW.d, {}) : yR, (0, tR.jsx)("br", {}), "Lobby Name: ", zR, (0, tR.jsx)("br", {}), (0, tR.jsx)("br", {}), (0, tR.jsx)("br", {}), (0, tR.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, tR.jsx)(gR, {})]
        })
      })
    }

    function gR() {
      const {
        t: WW
      } = (0, yR.C)(), [RW, MW] = (0, CW.useState)("Loading Link..."), [AW, bR] = (0, CW.useState)(0), [eW, BW] = (0, CW.useReducer)((WW => WW + 1), 0);
      return (0, CW.useEffect)((() => {
        let WW = !0;
        return (0, zR.A)().then((RW => {
          WW && MW(RW)
        })).catch((WW => {
          console.error("Failed to get invite link:", WW)
        })), () => {
          WW = !1
        }
      }), []), (0, CW.useEffect)((() => {
        const WW = setTimeout((() => {
          BW()
        }), 1100);
        return () => {
          clearTimeout(WW)
        }
      }), [AW]), NW.featureFlags.canUseInviteLinks && (0, tR.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, tR.jsx)("div", {
          className: "InviteLinkInner",
          children: RW
        }), (0, tR.jsx)(wW.h, {
          onClick: () => {
            navigator.clipboard.writeText(RW).catch((WW => {
              console.error("Failed to copy invite link:", WW)
            })), bR(Date.now())
          },
          disabled: Date.now() - AW < 1e3,
          children: Date.now() - AW < 1e3 ? WW("general:copied") : WW("general:copy")
        })]
      })
    }
  },
  8126: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => NW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(1571),
      bR = MW(940);

    function yR(WW) {
      const RW = Math.floor(WW / 3600),
        MW = Math.floor(WW % 3600 / 60),
        wW = Math.floor(WW % 60),
        CW = `${MW.toString().padStart(2,"0")}:${wW.toString().padStart(2,"0")}`;
      return RW > 0 ? `${RW}:${CW}` : CW
    }
    const NW = (0, wW.memo)((function(WW) {
      let {
        className: RW
      } = WW;
      const {
        recording: MW,
        seconds: wW
      } = (0, AW.h)("replayRecorder");
      return MW ? (0, bR.jsxs)("div", {
        className: zR()("RecordingIndicator", RW),
        children: [(0, bR.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, bR.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, bR.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: yR(wW)
        })]
      }) : null
    }))
  },
  8135: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(3578),
      CW = MW(3587);

    function zR(WW) {
      let {
        children: RW,
        showing: MW,
        globallyUniqueKey: zR,
        alwaysMountChildren: AW = !1,
        doGameplayStartStopOnShow: bR = !0
      } = WW;
      return (0, CW.d)(!0, MW, zR), (0, wW.c)(bR, MW), MW || AW ? RW : null
    }
  },
  5661: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    var wW = MW(50);
    const CW = "shaderPack";
    async function zR() {
      var WW;
      let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await wW.e.getItem(CW, RW)) && void 0 !== WW ? WW : null
    }
  },
  8088: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => TW,
      f: () => tR
    });
    var wW = MW(27),
      CW = MW(2748),
      zR = MW(50),
      AW = MW(1166),
      bR = MW(2740),
      yR = MW(1285),
      NW = MW(1208);
    const eW = 2592e5,
      BW = "notificationOptInLastPromptedAt";
    async function tR() {
      var WW;
      const RW = await TW();
      if (null === RW) return;
      const MW = null !== (WW = zR.g.getItem(BW)) && void 0 !== WW ? WW : 0;
      if (Date.now() - MW < eW) return;
      if ((0, NW.d)()) return;
      const wW = await AW.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: (0, CW.c)() ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== wW && (zR.g.setItem(BW, Date.now()), (0, yR.c)({
        id: !0 === wW ? "push.allow" : "push.deny",
        value: (0, CW.c)() ? "app" : "browser"
      }), !0 === wW && RW())
    }
    async function TW() {
      return (0, CW.c)() ? wW.b.get("mobilePushNotificationsCanAsk") ? async () => {
        (0, CW.i)("requestNotificationPermission", {})
      }: null: await bR.d.canAsk() ? () => bR.d.requestPermission() : null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);