export const id = 123;
export const ids = [122, 123];
export const modules = {
  8215: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(271),
      AF = SF(8218);

    function uF(FF, WF, SF) {
      const uF = Object.entries(WF).sort(((FF, WF) => WF[1] - FF[1])),
        hF = (0, CF.wb)(FF);
      hF.push(FF ? "\n\n" : "\n");
      for (const [AF, QF] of uF) {
        var bW, dF, PF;
        const FF = null !== (bW = null === SF || void 0 === SF || null === (dF = SF[AF]) || void 0 === dF ? void 0 : dF.icon) && void 0 !== bW ? bW : `${AF} Enchantment`;
        hF.push({
          icon: FF,
          style: {
            fontSize: "1.5rem"
          }
        }), hF.push({
          str: `${AF} ${null!==(PF=(0,CF.O)(QF))&&void 0!==PF?PF:QF}\n`
        })
      }
      hF.push({
        str: "\n"
      });
      for (const [CF, QF] of uF) {
        var RF, iW, eF, EF;
        const FF = null !== (RF = null === SF || void 0 === SF || null === (iW = SF[CF]) || void 0 === iW ? void 0 : iW.icon) && void 0 !== RF ? RF : `${CF} Enchantment`,
          WF = null !== (eF = null === SF || void 0 === SF || null === (EF = SF[CF]) || void 0 === EF ? void 0 : EF.description) && void 0 !== eF ? eF : (0, AF.j)(CF);
        hF.push({
          icon: FF,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), hF.push({
          str: WF,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), hF.push({
          str: "\n"
        })
      }
      return hF
    }
  },
  8220: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF,
      c: () => TF,
      g: () => gW,
      h: () => dF,
      l: () => tW,
      p: () => RF,
      q: () => eF,
      u: () => rW,
      x: () => iW
    });
    var CF = SF(220),
      AF = SF(568),
      uF = SF(271),
      hF = SF(3420),
      bW = SF(8215);

    function dF(FF, WF) {
      var SF;
      let {
        player: CF,
        chestOrCreative: AF
      } = FF;
      var uF;
      return WF < CF.length ? null !== (uF = CF[WF]) && void 0 !== uF ? uF : null : null !== (SF = AF[WF - CF.length]) && void 0 !== SF ? SF : null
    }

    function PF(FF) {
      var WF;
      return null !== (WF = FF.amount) && void 0 !== WF ? WF : 0
    }

    function RF(FF) {
      return 0 === FF.button || void 0 === FF.button
    }

    function iW(FF) {
      return !!FF.shiftKey
    }

    function eF(FF) {
      return "touches" in FF || "touch" === FF.pointerType || "pen" === FF.pointerType
    }
    const EF = new Set,
      QF = 50;

    function rW(FF, WF) {
      var SF;
      const CF = null === (SF = FF[WF]) || void 0 === SF ? void 0 : SF.displayName;
      return (0, AF.Q)(CF) ? "string" !== typeof WF ? "" : (!EF.has(WF) && EF.size < QF && (EF.add(WF), console.warn(`No item called "${WF}", so its hover shows the name as given`)), WF) : CF
    }

    function gW(FF, WF, SF) {
      var dF, PF, RF, iW, eF, EF, QF, gW, tW, TF, aW, kW, qW, VF;
      const NF = FF.attributes,
        DF = null !== (dF = null === (PF = WF[FF.name]) || void 0 === PF ? void 0 : PF.rootName) && void 0 !== dF ? dF : FF.name,
        LF = null !== (RF = null !== (iW = NF.customDisplayName) && void 0 !== iW ? iW : null === (eF = WF[FF.name]) || void 0 === eF ? void 0 : eF.displayName) && void 0 !== RF ? RF : rW(WF, DF);
      let mW = LF;
      const OF = null === (EF = NF.customAttributes) || void 0 === EF ? void 0 : EF.enchantmentTier;
      OF && (mW = (0, uF.wb)(LF, {
        colour: uF.sb[OF]
      }));
      const xW = null !== (QF = null !== (gW = null !== (tW = function(FF, WF) {
        var SF;
        if (void 0 === FF || null !== (SF = WF.customAttributes) && void 0 !== SF && SF.author) return FF;
        const AF = (0, CF.ec)(FF);
        return AF.every((FF => "string" === typeof FF)) ? FF : AF.map((FF => "string" === typeof FF ? FF : {
          icon: FF.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(NF.customDescription, NF)) && void 0 !== tW ? tW : null === (TF = WF[FF.name]) || void 0 === TF ? void 0 : TF.description) && void 0 !== gW ? gW : null === (aW = WF[DF]) || void 0 === aW ? void 0 : aW.description) && void 0 !== QF ? QF : "";
      let ZF = xW;
      if (null !== (kW = NF.customAttributes) && void 0 !== kW && kW.enchantments) ZF = (0, bW.b)(xW, NF.customAttributes.enchantments, NF.customAttributes.enchantmentData);
      else if (SF[DF]) ZF = (0, uF.wb)(xW), ZF.push({
        str: "\n"
      }), ZF.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (qW = NF.customAttributes) && void 0 !== qW && qW.mobSettings) {
        var oF, YF;
        const FF = NF.customAttributes.mobSettings;
        var MF, cW;
        if (ZF = [], (0, AF.Q)(NF.customAttributes.health) || (ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), ZF.push({
            str: " "
          }), ZF.push({
            str: NF.customAttributes.health.toString()
          }), (0, AF.Q)(FF.maxHealth) || (ZF.push({
            str: "/"
          }), ZF.push({
            str: FF.maxHealth.toString()
          }))), !(0, AF.Q)(FF.attackDamage) && FF.attackDamage > 0 && (ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), ZF.push({
            str: " "
          }), ZF.push({
            str: FF.attackDamage.toString()
          })), !(0, AF.Q)(FF.secondaryAttackDamage) && FF.secondaryAttackDamage > 0 && (ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), ZF.push({
            str: " "
          }), ZF.push({
            str: FF.secondaryAttackDamage.toString()
          })), (0, AF.Q)(FF.baseRunningSpeed) || (ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), ZF.push({
            str: " "
          }), ZF.push({
            str: FF.baseRunningSpeed.toFixed(2)
          })), "Saddled" === FF.metaInfo) ZF.push({
          str: "\n"
        }), ZF.push({
          str: {
            translationKey: "general:has"
          }
        }), ZF.push({
          str: " "
        }), ZF.push({
          icon: null !== (MF = null === (cW = FF.tameInfo) || void 0 === cW ? void 0 : cW.saddleItemName) && void 0 !== MF ? MF : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (ZF.push({
            str: "\n"
          }), ZF.push({
            str: "\n"
          }), FF.petInfo && null !== (oF = FF.tameInfo) && void 0 !== oF && oF.supportsFriendship) {
          const WF = hF.c.getIconsFromFriendshipPoints(FF.petInfo.friendshipPoints);
          for (const FF of WF) ZF.push({
            icon: FF,
            style: {
              fontSize: "1.5em"
            }
          });
          ZF.push({
            str: "\n"
          });
          const SF = hF.c.getMobHungerLevel(FF.petInfo.lastFedAt);
          for (const FF of hF.c.hungerLevelIcons[SF]) ZF.push({
            icon: FF,
            style: {
              fontSize: "1.5em"
            }
          });
          ZF.push({
            str: " "
          }), ZF.push({
            str: hF.c.hungerLevelTranslations[SF],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (FF.tameInfo && null !== (YF = FF.tameInfo) && void 0 !== YF && YF.supportsFriendship) {
          var GF, zW;
          let WF = null !== (GF = FF.tameInfo.likedFoods) && void 0 !== GF ? GF : [];
          ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hF.c.feedTextColours[hF.c.MobFoodType.Superliked]
            }
          }), ZF.push({
            str: " "
          }), null !== (zW = FF.petInfo) && void 0 !== zW && zW.superlikedFoodKnown ? (ZF.push({
            icon: FF.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), WF = WF.filter((WF => WF !== FF.petInfo.superlikedFood))) : ZF.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hF.c.feedTextColours[hF.c.MobFoodType.Liked]
            }
          }), ZF.push({
            str: " "
          });
          for (const FF of WF) ZF.push({
            icon: FF,
            style: {
              fontSize: "1.5em"
            }
          });
          ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hF.c.feedTextColours[hF.c.MobFoodType.Neutral]
            }
          }), ZF.push({
            str: " "
          });
          for (const SF of null !== (IF = FF.tameInfo.neutralFoods) && void 0 !== IF ? IF : []) {
            var IF;
            ZF.push({
              icon: SF,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          ZF.push({
            str: "\n"
          }), ZF.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hF.c.feedTextColours[hF.c.MobFoodType.Disliked]
            }
          }), ZF.push({
            str: " "
          });
          for (const SF of null !== (fF = FF.tameInfo.dislikedFoods) && void 0 !== fF ? fF : []) {
            var fF;
            ZF.push({
              icon: SF,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        ZF.length > 0 ? (ZF.shift(), ZF.unshift(...(0, uF.wb)(xW))) : ZF = (0, uF.wb)(xW)
      }
      return {
        name: mW,
        desc: ZF,
        fontStyle: null !== (VF = NF.customAttributes) && void 0 !== VF && VF.author ? "italic" : "normal"
      }
    }

    function tW(FF, WF, SF, CF) {
      const AF = dF(FF, SF),
        uF = dF(FF, CF);
      if (!AF) return !1;
      const hF = WF[AF.name].armourReduction,
        bW = WF[uF.name].armourReduction;
      if (bW === hF) {
        var PF, RF, iW, eF;
        const FF = null !== (PF = null === (RF = AF.attributes.customAttributes) || void 0 === RF ? void 0 : RF.enchantmentTier) && void 0 !== PF ? PF : "Tier 0",
          WF = null !== (iW = null === (eF = uF.attributes.customAttributes) || void 0 === eF ? void 0 : eF.enchantmentTier) && void 0 !== iW ? iW : "Tier 0";
        return parseInt(FF.replace("Tier ", "")) >= parseInt(WF.replace("Tier ", ""))
      }
      return hF > bW
    }

    function TF(FF) {
      let WF;
      if ("number" === typeof FF) {
        const SF = document.querySelector(`[data-inven-idx="${FF}"]`);
        if (!SF) return null;
        WF = SF.getBoundingClientRect()
      } else WF = FF.getBoundingClientRect();
      return {
        x: WF.left + WF.width / 2,
        y: WF.top + WF.height / 2
      }
    }
  },
  8153: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => EF,
      g: () => QF
    });
    var CF = SF(1266),
      AF = SF(46),
      uF = SF(1168),
      hF = SF(3616),
      bW = SF(1907),
      dF = SF(1046),
      PF = SF(89),
      RF = SF(1607),
      iW = SF(1186),
      eF = SF(971);

    function EF(FF) {
      let {
        show: WF,
        onClose: SF
      } = FF;
      const {
        requestedGameNameWithVariation: CF,
        lobbyName: AF,
        shownLobbyName: uF
      } = (0, RF.e)("connectedGame"), dF = (0, bW.d)(CF, AF, !1);
      return PF.featureFlags.canUseInviteLinks && (0, eF.jsx)(hF.b, {
        show: WF,
        close: SF,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, eF.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, eF.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, eF.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, eF.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === dF ? (0, eF.jsx)(iW.c, {}) : dF, (0, eF.jsx)("br", {}), "Lobby Name: ", uF, (0, eF.jsx)("br", {}), (0, eF.jsx)("br", {}), (0, eF.jsx)("br", {}), (0, eF.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, eF.jsx)(QF, {})]
        })
      })
    }

    function QF() {
      const {
        t: FF
      } = (0, dF.B)(), [WF, SF] = (0, AF.useState)("Loading Link..."), [hF, bW] = (0, AF.useState)(0), [RF, iW] = (0, AF.useReducer)((FF => FF + 1), 0);
      return (0, AF.useEffect)((() => {
        let FF = !0;
        return (0, uF.B)().then((WF => {
          FF && SF(WF)
        })).catch((FF => {
          console.error("Failed to get invite link:", FF)
        })), () => {
          FF = !1
        }
      }), []), (0, AF.useEffect)((() => {
        const FF = setTimeout((() => {
          iW()
        }), 1100);
        return () => {
          clearTimeout(FF)
        }
      }), [hF]), PF.featureFlags.canUseInviteLinks && (0, eF.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, eF.jsx)("div", {
          className: "InviteLinkInner",
          children: WF
        }), (0, eF.jsx)(CF.e, {
          onClick: () => {
            navigator.clipboard.writeText(WF).catch((FF => {
              console.error("Failed to copy invite link:", FF)
            })), bW(Date.now())
          },
          disabled: Date.now() - hF < 1e3,
          children: Date.now() - hF < 1e3 ? FF("general:copied") : FF("general:copy")
        })]
      })
    }
  },
  8204: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => PF
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(1607),
      bW = SF(971);

    function dF(FF) {
      const WF = Math.floor(FF / 3600),
        SF = Math.floor(FF % 3600 / 60),
        CF = Math.floor(FF % 60),
        AF = `${SF.toString().padStart(2,"0")}:${CF.toString().padStart(2,"0")}`;
      return WF > 0 ? `${WF}:${AF}` : AF
    }
    const PF = (0, CF.memo)((function(FF) {
      let {
        className: WF
      } = FF;
      const {
        recording: SF,
        seconds: CF
      } = (0, hF.e)("replayRecorder");
      return SF ? (0, bW.jsxs)("div", {
        className: uF()("RecordingIndicator", WF),
        children: [(0, bW.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, bW.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, bW.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: dF(CF)
        })]
      }) : null
    }))
  },
  8210: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(3618),
      AF = SF(3621);

    function uF(FF) {
      let {
        children: WF,
        showing: SF,
        globallyUniqueKey: uF,
        alwaysMountChildren: hF = !1,
        doGameplayStartStopOnShow: bW = !0
      } = FF;
      return (0, AF.d)(!0, SF, uF), (0, CF.b)(bW, SF), SF || hF ? WF : null
    }
  },
  5630: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF
    });
    var CF = SF(33);
    const AF = "shaderPack";
    async function uF() {
      var FF;
      let WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (FF = await CF.f.getItem(AF, WF)) && void 0 !== FF ? FF : null
    }
  },
  8157: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      f: () => eF
    });
    var CF = SF(11),
      AF = SF(2848),
      uF = SF(33),
      hF = SF(1189),
      bW = SF(2846),
      dF = SF(1307),
      PF = SF(1223);
    const RF = 2592e5,
      iW = "notificationOptInLastPromptedAt";
    async function eF() {
      var FF;
      const WF = await EF();
      if (null === WF) return;
      const SF = null !== (FF = uF.h.getItem(iW)) && void 0 !== FF ? FF : 0;
      if (Date.now() - SF < RF) return;
      if ((0, PF.f)()) return;
      const CF = await hF.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: (0, AF.c)() ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== CF && (uF.h.setItem(iW, Date.now()), (0, dF.d)({
        id: !0 === CF ? "push.allow" : "push.deny",
        value: (0, AF.c)() ? "app" : "browser"
      }), !0 === CF && WF())
    }
    async function EF() {
      return (0, AF.c)() ? CF.b.get("mobilePushNotificationsCanAsk") ? async () => {
        (0, AF.k)("requestNotificationPermission", {})
      }: null: await bW.d.canAsk() ? () => bW.d.requestPermission() : null
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);