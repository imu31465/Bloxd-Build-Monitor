export const id = 136;
export const ids = [136, 201];
export const modules = {
  34507: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = XQ(402),
      qQ = XQ(34516);

    function TQ(QQ, WQ, XQ) {
      const TQ = Object.entries(WQ).sort(((QQ, WQ) => WQ[1] - QQ[1])),
        zQ = (0, wQ.nb)(QQ);
      zQ.push(QQ ? "\n\n" : "\n");
      for (const [qQ, jQ] of TQ) {
        var sQ, FQ, PQ;
        const QQ = null !== (sQ = null === XQ || void 0 === XQ || null === (FQ = XQ[qQ]) || void 0 === FQ ? void 0 : FQ.icon) && void 0 !== sQ ? sQ : `${qQ} Enchantment`;
        zQ.push({
          icon: QQ,
          style: {
            fontSize: "1.5rem"
          }
        }), zQ.push({
          str: `${qQ} ${null!==(PQ=(0,wQ.Q)(jQ))&&void 0!==PQ?PQ:jQ}\n`
        })
      }
      zQ.push({
        str: "\n"
      });
      for (const [wQ, jQ] of TQ) {
        var gQ, JQ, rQ, IQ;
        const QQ = null !== (gQ = null === XQ || void 0 === XQ || null === (JQ = XQ[wQ]) || void 0 === JQ ? void 0 : JQ.icon) && void 0 !== gQ ? gQ : `${wQ} Enchantment`,
          WQ = null !== (rQ = null === XQ || void 0 === XQ || null === (IQ = XQ[wQ]) || void 0 === IQ ? void 0 : IQ.description) && void 0 !== rQ ? rQ : (0, qQ.h)(wQ);
        zQ.push({
          icon: QQ,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), zQ.push({
          str: WQ,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), zQ.push({
          str: "\n"
        })
      }
      return zQ
    }
  },
  34523: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ,
      g: () => DQ,
      i: () => yQ,
      m: () => FQ,
      p: () => VQ,
      q: () => gQ,
      t: () => rQ,
      v: () => BQ,
      y: () => JQ
    });
    var wQ = XQ(382),
      qQ = XQ(663),
      TQ = XQ(402),
      zQ = XQ(4526),
      sQ = XQ(34507);

    function FQ(QQ, WQ) {
      var XQ;
      let {
        player: wQ,
        chestOrCreative: qQ
      } = QQ;
      var TQ;
      return WQ < wQ.length ? null !== (TQ = wQ[WQ]) && void 0 !== TQ ? TQ : null : null !== (XQ = qQ[WQ - wQ.length]) && void 0 !== XQ ? XQ : null
    }

    function PQ(QQ) {
      var WQ;
      return null !== (WQ = QQ.amount) && void 0 !== WQ ? WQ : 0
    }

    function gQ(QQ) {
      return 0 === QQ.button || void 0 === QQ.button
    }

    function JQ(QQ) {
      return !!QQ.shiftKey
    }

    function rQ(QQ) {
      return "touches" in QQ || "touch" === QQ.pointerType || "pen" === QQ.pointerType
    }
    const IQ = new Set,
      jQ = 50;

    function BQ(QQ, WQ) {
      var XQ;
      const wQ = null === (XQ = QQ[WQ]) || void 0 === XQ ? void 0 : XQ.displayName;
      return (0, qQ.G)(wQ) ? "string" !== typeof WQ ? "" : (!IQ.has(WQ) && IQ.size < jQ && (IQ.add(WQ), console.warn(`No item called "${WQ}", so its hover shows the name as given`)), WQ) : wQ
    }

    function yQ(QQ, WQ, XQ) {
      var FQ, PQ, gQ, JQ, rQ, IQ, jQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ;
      const vQ = QQ.attributes,
        dQ = null !== (FQ = null === (PQ = WQ[QQ.name]) || void 0 === PQ ? void 0 : PQ.rootName) && void 0 !== FQ ? FQ : QQ.name,
        HQ = null !== (gQ = null !== (JQ = vQ.customDisplayName) && void 0 !== JQ ? JQ : null === (rQ = WQ[QQ.name]) || void 0 === rQ ? void 0 : rQ.displayName) && void 0 !== gQ ? gQ : BQ(WQ, dQ);
      let aQ = HQ;
      const lQ = null === (IQ = vQ.customAttributes) || void 0 === IQ ? void 0 : IQ.enchantmentTier;
      lQ && (aQ = (0, TQ.nb)(HQ, {
        colour: TQ.kb[lQ]
      }));
      const hQ = null !== (jQ = null !== (yQ = null !== (VQ = function(QQ, WQ) {
        var XQ;
        if (void 0 === QQ || null !== (XQ = WQ.customAttributes) && void 0 !== XQ && XQ.author) return QQ;
        const qQ = (0, wQ.gc)(QQ);
        return qQ.every((QQ => "string" === typeof QQ)) ? QQ : qQ.map((QQ => "string" === typeof QQ ? QQ : {
          icon: QQ.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(vQ.customDescription, vQ)) && void 0 !== VQ ? VQ : null === (DQ = WQ[QQ.name]) || void 0 === DQ ? void 0 : DQ.description) && void 0 !== yQ ? yQ : null === (pQ = WQ[dQ]) || void 0 === pQ ? void 0 : pQ.description) && void 0 !== jQ ? jQ : "";
      let iQ = hQ;
      if (null !== (GQ = vQ.customAttributes) && void 0 !== GQ && GQ.enchantments) iQ = (0, sQ.b)(hQ, vQ.customAttributes.enchantments, vQ.customAttributes.enchantmentData);
      else if (XQ[dQ]) iQ = (0, TQ.nb)(hQ), iQ.push({
        str: "\n"
      }), iQ.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (UQ = vQ.customAttributes) && void 0 !== UQ && UQ.mobSettings) {
        var cQ, AQ;
        const QQ = vQ.customAttributes.mobSettings;
        var RQ, EQ;
        if (iQ = [], (0, qQ.G)(vQ.customAttributes.health) || (iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), iQ.push({
            str: " "
          }), iQ.push({
            str: vQ.customAttributes.health.toString()
          }), (0, qQ.G)(QQ.maxHealth) || (iQ.push({
            str: "/"
          }), iQ.push({
            str: QQ.maxHealth.toString()
          }))), !(0, qQ.G)(QQ.attackDamage) && QQ.attackDamage > 0 && (iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), iQ.push({
            str: " "
          }), iQ.push({
            str: QQ.attackDamage.toString()
          })), !(0, qQ.G)(QQ.secondaryAttackDamage) && QQ.secondaryAttackDamage > 0 && (iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), iQ.push({
            str: " "
          }), iQ.push({
            str: QQ.secondaryAttackDamage.toString()
          })), (0, qQ.G)(QQ.baseRunningSpeed) || (iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), iQ.push({
            str: " "
          }), iQ.push({
            str: QQ.baseRunningSpeed.toFixed(2)
          })), "Saddled" === QQ.metaInfo) iQ.push({
          str: "\n"
        }), iQ.push({
          str: {
            translationKey: "general:has"
          }
        }), iQ.push({
          str: " "
        }), iQ.push({
          icon: null !== (RQ = null === (EQ = QQ.tameInfo) || void 0 === EQ ? void 0 : EQ.saddleItemName) && void 0 !== RQ ? RQ : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (iQ.push({
            str: "\n"
          }), iQ.push({
            str: "\n"
          }), QQ.petInfo && null !== (cQ = QQ.tameInfo) && void 0 !== cQ && cQ.supportsFriendship) {
          const WQ = zQ.e.getIconsFromFriendshipPoints(QQ.petInfo.friendshipPoints);
          for (const QQ of WQ) iQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          iQ.push({
            str: "\n"
          });
          const XQ = zQ.e.getMobHungerLevel(QQ.petInfo.lastFedAt);
          for (const QQ of zQ.e.hungerLevelIcons[XQ]) iQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          iQ.push({
            str: " "
          }), iQ.push({
            str: zQ.e.hungerLevelTranslations[XQ],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (QQ.tameInfo && null !== (AQ = QQ.tameInfo) && void 0 !== AQ && AQ.supportsFriendship) {
          var CQ, uQ;
          let WQ = null !== (CQ = QQ.tameInfo.likedFoods) && void 0 !== CQ ? CQ : [];
          iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: zQ.e.feedTextColours[zQ.e.MobFoodType.Superliked]
            }
          }), iQ.push({
            str: " "
          }), null !== (uQ = QQ.petInfo) && void 0 !== uQ && uQ.superlikedFoodKnown ? (iQ.push({
            icon: QQ.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), WQ = WQ.filter((WQ => WQ !== QQ.petInfo.superlikedFood))) : iQ.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: zQ.e.feedTextColours[zQ.e.MobFoodType.Liked]
            }
          }), iQ.push({
            str: " "
          });
          for (const QQ of WQ) iQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: zQ.e.feedTextColours[zQ.e.MobFoodType.Neutral]
            }
          }), iQ.push({
            str: " "
          });
          for (const XQ of null !== (LQ = QQ.tameInfo.neutralFoods) && void 0 !== LQ ? LQ : []) {
            var LQ;
            iQ.push({
              icon: XQ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          iQ.push({
            str: "\n"
          }), iQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: zQ.e.feedTextColours[zQ.e.MobFoodType.Disliked]
            }
          }), iQ.push({
            str: " "
          });
          for (const XQ of null !== (kQ = QQ.tameInfo.dislikedFoods) && void 0 !== kQ ? kQ : []) {
            var kQ;
            iQ.push({
              icon: XQ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        iQ.length > 0 ? (iQ.shift(), iQ.unshift(...(0, TQ.nb)(hQ))) : iQ = (0, TQ.nb)(hQ)
      }
      return {
        name: aQ,
        desc: iQ,
        fontStyle: null !== (bQ = vQ.customAttributes) && void 0 !== bQ && bQ.author ? "italic" : "normal"
      }
    }

    function VQ(QQ, WQ, XQ, wQ) {
      const qQ = FQ(QQ, XQ),
        TQ = FQ(QQ, wQ);
      if (!qQ) return !1;
      const zQ = WQ[qQ.name].armourReduction,
        sQ = WQ[TQ.name].armourReduction;
      if (sQ === zQ) {
        var PQ, gQ, JQ, rQ;
        const QQ = null !== (PQ = null === (gQ = qQ.attributes.customAttributes) || void 0 === gQ ? void 0 : gQ.enchantmentTier) && void 0 !== PQ ? PQ : "Tier 0",
          WQ = null !== (JQ = null === (rQ = TQ.attributes.customAttributes) || void 0 === rQ ? void 0 : rQ.enchantmentTier) && void 0 !== JQ ? JQ : "Tier 0";
        return parseInt(QQ.replace("Tier ", "")) >= parseInt(WQ.replace("Tier ", ""))
      }
      return zQ > sQ
    }

    function DQ(QQ) {
      let WQ;
      if ("number" === typeof QQ) {
        const XQ = document.querySelector(`[data-inven-idx="${QQ}"]`);
        if (!XQ) return null;
        WQ = XQ.getBoundingClientRect()
      } else WQ = QQ.getBoundingClientRect();
      return {
        x: WQ.left + WQ.width / 2,
        y: WQ.top + WQ.height / 2
      }
    }
  },
  9268: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => VQ,
      c: () => GQ
    });
    var wQ = XQ(61),
      qQ = XQ(31),
      TQ = XQ(2585),
      zQ = XQ(3678);
    const sQ = 6,
      FQ = 4;

    function PQ(QQ) {
      let {
        slotsLeft: WQ,
        slotsRight: XQ,
        width: wQ,
        height: qQ,
        zoneRight: TQ,
        rowTop: zQ,
        besideBottom: PQ,
        obstacles: gQ
      } = QQ;
      const JQ = Math.max(0, Math.floor(XQ - WQ - wQ)),
        rQ = null === TQ ? 0 : Math.min(JQ, Math.max(0, Math.ceil(TQ + sQ - WQ))),
        IQ = WQ + rQ - sQ,
        jQ = WQ + rQ + wQ + sQ,
        BQ = gQ.filter((QQ => QQ.left < jQ && QQ.right > IQ));
      let yQ = PQ;
      for (let sQ = 0; sQ <= BQ.length; sQ++) {
        const QQ = BQ.filter((QQ => QQ.top < yQ + FQ && QQ.bottom > yQ - qQ - FQ));
        if (0 === QQ.length) break;
        yQ = Math.min(...QQ.map((QQ => QQ.top))) - FQ
      }
      return {
        shift: rQ,
        rise: yQ === PQ ? null : Math.ceil(zQ - yQ)
      }
    }

    function gQ(QQ) {
      return Array.from(QQ.children).filter((QQ => !QQ.classList.contains("HotBarRow")))
    }

    function JQ(QQ) {
      return function(QQ) {
        const WQ = [],
          XQ = (QQ, wQ) => {
            const qQ = QQ.getBoundingClientRect();
            if (qQ.width > 0 && qQ.height > 0) WQ.push(QQ);
            else if (wQ < 2)
              for (const WQ of Array.from(QQ.children)) XQ(WQ, wQ + 1)
          };
        for (const wQ of QQ) XQ(wQ, 0);
        return WQ
      }(gQ(QQ).flatMap((QQ => QQ.classList.contains("AuraBarWrapper") ? [] : QQ.classList.contains("BottomScreenStatBarList") ? Array.from(QQ.children) : [QQ])))
    }

    function rQ(QQ) {
      var WQ;
      const XQ = QQ.getBoundingClientRect();
      if (0 === XQ.width) return null;
      const wQ = null === (WQ = QQ.parentElement) || void 0 === WQ ? void 0 : WQ.getBoundingClientRect();
      return wQ && wQ.width > 0 ? Math.min(XQ.right, wQ.left + wQ.width * IQ) : XQ.right
    }
    const IQ = .35,
      jQ = new WeakMap,
      BQ = ".BottomScreenMessage, [role='status']",
      yQ = new WeakMap;

    function VQ(QQ) {
      DQ(QQ) && DQ(QQ)
    }

    function DQ(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ;
      const sQ = QQ.documentElement.classList;
      if (!sQ.contains("TouchHotbar") || sQ.contains("TouchHotbarKeysAbove") || sQ.contains("HudMove-inventory") || sQ.contains("HudLocked-inventory") || null === (WQ = QQ.defaultView) || void 0 === WQ || null === (XQ = WQ.matchMedia) || void 0 === XQ || !XQ.call(WQ, pQ).matches) return !1;
      const gQ = QQ.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        IQ = null === gQ || void 0 === gQ ? void 0 : gQ.parentElement,
        VQ = null === gQ || void 0 === gQ ? void 0 : gQ.closest(".BottomMiddleElements"),
        DQ = null === VQ || void 0 === VQ ? void 0 : VQ.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!gQ || !IQ || !VQ || !DQ || VQ.classList.contains("TouchInventoryOpen")) return !1;
      const GQ = gQ.getBoundingClientRect();
      if (0 === GQ.width) return !1;
      const UQ = QQ.querySelector(".JoystickZone"),
        bQ = DQ.getBoundingClientRect(),
        vQ = IQ.getBoundingClientRect().top,
        dQ = null === (wQ = VQ.querySelector(":scope > .AuraBarWrapper")) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect(),
        HQ = JQ(VQ),
        aQ = {
          slotsLeft: bQ.left,
          slotsRight: bQ.right,
          width: GQ.width,
          height: GQ.height,
          zoneRight: UQ ? rQ(UQ) : null,
          rowTop: vQ,
          besideBottom: (dQ && dQ.height > 0 ? dQ.top : vQ) - FQ,
          obstacles: HQ.map((QQ => QQ.getBoundingClientRect()))
        },
        lQ = PQ({
          ...aQ,
          obstacles: HQ.filter((QQ => !QQ.matches(BQ))).map((QQ => QQ.getBoundingClientRect()))
        }),
        hQ = QQ.defaultView,
        iQ = `${null===hQ||void 0===hQ?void 0:hQ.innerWidth}x${null===hQ||void 0===hQ?void 0:hQ.innerHeight}:${lQ.shift}:${Math.round(GQ.width)}:${Math.round(vQ)}`,
        cQ = yQ.get(VQ),
        AQ = (null === cQ || void 0 === cQ ? void 0 : cQ.at) === iQ ? (RQ = cQ.rise, EQ = lQ.rise, null === RQ ? EQ : null === EQ ? RQ : Math.max(RQ, EQ)) : lQ.rise;
      var RQ, EQ;
      const CQ = PQ({
          ...aQ,
          besideBottom: null === AQ ? aQ.besideBottom : vQ - AQ
        }),
        uQ = {
          shift: lQ.shift,
          rise: null !== (qQ = CQ.rise) && void 0 !== qQ ? qQ : AQ
        },
        LQ = jQ.get(VQ);
      return (null !== (TQ = null === LQ || void 0 === LQ ? void 0 : LQ.shift) && void 0 !== TQ ? TQ : 0) === uQ.shift && yQ.set(VQ, {
        at: iQ,
        rise: AQ
      }), (null === LQ || void 0 === LQ ? void 0 : LQ.shift) !== uQ.shift && VQ.style.setProperty("--touch-shop-above-shift", `${uQ.shift}px`), (null === LQ || void 0 === LQ ? void 0 : LQ.rise) !== uQ.rise && (VQ.classList.toggle("ShopAboveUp", null !== uQ.rise), null === uQ.rise ? VQ.style.removeProperty("--touch-shop-above-rise") : VQ.style.setProperty("--touch-shop-above-rise", `${uQ.rise}px`)), jQ.set(VQ, uQ), (null !== (zQ = null === LQ || void 0 === LQ ? void 0 : LQ.shift) && void 0 !== zQ ? zQ : 0) !== uQ.shift
    }
    const pQ = "(orientation: landscape) and (max-height: 500px)";

    function GQ(QQ, WQ, XQ) {
      (0, wQ.useLayoutEffect)((() => {
        var WQ;
        const wQ = null === (WQ = QQ.current) || void 0 === WQ ? void 0 : WQ.closest(".BottomMiddleElements");
        if (!wQ || XQ) return;
        const sQ = new ResizeObserver((() => {
            IQ(!1)
          })),
          FQ = () => {
            sQ.disconnect();
            const QQ = document.querySelector(".JoystickZone");
            for (const WQ of [QQ, wQ, wQ.querySelector(".HotBarGameItemsContainer"), ...JQ(wQ)]) WQ && sQ.observe(WQ)
          };
        let PQ = null,
          rQ = !1;
        const IQ = QQ => {
            rQ ||= QQ, PQ ??= requestAnimationFrame((() => {
              PQ = null, rQ && (rQ = !1, FQ()), VQ(document)
            }))
          },
          jQ = new MutationObserver((() => {
            IQ(!0)
          }));
        jQ.observe(wQ, {
          childList: !0
        });
        for (const QQ of gQ(wQ)) jQ.observe(QQ, {
          childList: !0,
          subtree: !0
        });
        VQ(document), FQ();
        const BQ = () => {
            IQ(!0)
          },
          yQ = [(0, qQ.o)(TQ.h, BQ), (0, qQ.o)(zQ.d, BQ)];
        return () => {
          null !== PQ && cancelAnimationFrame(PQ), sQ.disconnect(), jQ.disconnect();
          for (const QQ of yQ) QQ()
        }
      }), [QQ, WQ, XQ])
    }
  },
  34408: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => IQ,
      e: () => jQ,
      f: () => BQ
    });
    var wQ = XQ(1507),
      qQ = XQ(61),
      TQ = XQ(1360),
      zQ = XQ(4851),
      sQ = XQ(2444),
      FQ = XQ(1226),
      PQ = XQ(105),
      gQ = XQ(2052),
      JQ = XQ(1391),
      rQ = XQ(1145);

    function IQ(QQ) {
      let {
        show: WQ,
        onClose: XQ
      } = QQ;
      const {
        requestedGameNameWithVariation: wQ,
        lobbyName: qQ,
        shownLobbyName: TQ
      } = (0, gQ.e)("connectedGame"), FQ = (0, sQ.c)(wQ, qQ, !1);
      return PQ.featureFlags.canUseInviteLinks && (0, rQ.jsx)(zQ.b, {
        show: WQ,
        close: XQ,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, rQ.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, rQ.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, rQ.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, rQ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === FQ ? (0, rQ.jsx)(JQ.e, {}) : FQ, (0, rQ.jsx)("br", {}), "Lobby Name: ", TQ, (0, rQ.jsx)("br", {}), (0, rQ.jsx)("br", {}), (0, rQ.jsx)("br", {}), (0, rQ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, rQ.jsx)(jQ, {})]
        })
      })
    }

    function jQ() {
      var QQ;
      const {
        t: WQ
      } = (0, FQ.C)(), XQ = null !== (QQ = BQ(PQ.featureFlags.canUseInviteLinks)) && void 0 !== QQ ? QQ : "Loading Link...", [TQ, zQ] = (0, qQ.useState)(0), [sQ, gQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0);
      return (0, qQ.useEffect)((() => {
        const QQ = setTimeout((() => {
          gQ()
        }), 1100);
        return () => {
          clearTimeout(QQ)
        }
      }), [TQ]), PQ.featureFlags.canUseInviteLinks && (0, rQ.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, rQ.jsx)("div", {
          className: "InviteLinkInner",
          children: XQ
        }), (0, rQ.jsx)(wQ.h, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(XQ).catch((QQ => {
              console.error("Failed to copy invite link:", QQ)
            })), zQ(Date.now())
          },
          disabled: Date.now() - TQ < 1e3,
          children: Date.now() - TQ < 1e3 ? WQ("general:copied") : WQ("general:copy")
        })]
      })
    }

    function BQ(QQ) {
      const [WQ, XQ] = (0, qQ.useState)(null);
      return (0, qQ.useEffect)((() => {
        if (!QQ) return;
        let WQ = !0;
        return (0, TQ.x)().then((QQ => {
          WQ && XQ(QQ)
        })).catch((QQ => {
          console.error("Failed to get invite link:", QQ)
        })), () => {
          WQ = !1
        }
      }), [QQ]), WQ
    }
  },
  34494: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(2052),
      sQ = XQ(1145);

    function FQ(QQ) {
      const WQ = Math.floor(QQ / 3600),
        XQ = Math.floor(QQ % 3600 / 60),
        wQ = Math.floor(QQ % 60),
        qQ = `${XQ.toString().padStart(2,"0")}:${wQ.toString().padStart(2,"0")}`;
      return WQ > 0 ? `${WQ}:${qQ}` : qQ
    }
    const PQ = (0, wQ.memo)((function(QQ) {
      let {
        className: WQ
      } = QQ;
      const {
        recording: XQ,
        seconds: wQ
      } = (0, zQ.e)("replayRecorder");
      return XQ ? (0, sQ.jsxs)("div", {
        className: TQ()("RecordingIndicator", WQ),
        children: [(0, sQ.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, sQ.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, sQ.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: FQ(wQ)
        })]
      }) : null
    }))
  },
  34500: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(4859),
      qQ = XQ(4863);

    function TQ(QQ) {
      let {
        children: WQ,
        showing: XQ,
        globallyUniqueKey: TQ,
        alwaysMountChildren: zQ = !1,
        doGameplayStartStopOnShow: sQ = !0,
        keepsMovement: FQ = !1
      } = QQ;
      return (0, qQ.c)(!0, XQ, TQ, FQ), (0, wQ.c)(sQ, XQ), XQ || zQ ? WQ : null
    }
  },
  6960: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(61),
      qQ = XQ(43);

    function TQ(QQ, WQ) {
      var XQ;
      const [TQ, zQ] = (0, wQ.useState)(null !== (XQ = qQ.i.getItem(QQ)) && void 0 !== XQ ? XQ : WQ);
      return [TQ, WQ => {
        qQ.i.setItem(QQ, WQ), zQ(WQ)
      }]
    }
  },
  9257: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => sQ,
      f: () => wQ,
      h: () => BQ,
      j: () => IQ,
      k: () => gQ,
      l: () => zQ,
      m: () => yQ,
      p: () => JQ,
      r: () => FQ,
      s: () => rQ,
      t: () => PQ,
      u: () => jQ,
      v: () => TQ
    });
    const wQ = QQ => ({
      left: QQ.left,
      top: QQ.top,
      right: QQ.right,
      bottom: QQ.bottom
    });

    function qQ(QQ) {
      return {
        x: (QQ.left + QQ.right) / 2,
        y: (QQ.top + QQ.bottom) / 2
      }
    }

    function TQ(QQ) {
      return 0 === QQ.length ? null : QQ.reduce(((QQ, WQ) => ({
        left: Math.min(QQ.left, WQ.left),
        top: Math.min(QQ.top, WQ.top),
        right: Math.max(QQ.right, WQ.right),
        bottom: Math.max(QQ.bottom, WQ.bottom)
      })))
    }

    function zQ(QQ, WQ) {
      const XQ = Math.max(0, (WQ - (QQ.right - QQ.left)) / 2),
        wQ = Math.max(0, (WQ - (QQ.bottom - QQ.top)) / 2);
      return {
        left: QQ.left - XQ,
        top: QQ.top - wQ,
        right: QQ.right + XQ,
        bottom: QQ.bottom + wQ
      }
    }

    function sQ(QQ, WQ) {
      return WQ.x >= QQ.left && WQ.x <= QQ.right && WQ.y >= QQ.top && WQ.y <= QQ.bottom
    }

    function FQ(QQ, WQ, XQ) {
      let wQ = null,
        TQ = 1 / 0;
      for (const {
          id: qQ,
          box: zQ
        }
        of WQ) {
        const WQ = (zQ.right - zQ.left) * (zQ.bottom - zQ.top);
        sQ(zQ, QQ) && WQ < TQ && (TQ = WQ, wQ = qQ)
      }
      if (null !== wQ) return wQ;
      let FQ = 1 / 0;
      for (const {
          id: PQ,
          box: gQ
        }
        of WQ) {
        if (!sQ(zQ(gQ, XQ), QQ)) continue;
        const WQ = qQ(gQ),
          TQ = Math.hypot(QQ.x - WQ.x, QQ.y - WQ.y);
        TQ < FQ && (FQ = TQ, wQ = PQ)
      }
      return wQ
    }

    function PQ(QQ, WQ, XQ) {
      return {
        left: XQ.left,
        top: XQ.top,
        right: QQ - XQ.right,
        bottom: WQ - XQ.bottom
      }
    }

    function gQ(QQ, WQ, XQ, wQ) {
      const qQ = (QQ, WQ, XQ) => Math.max(Math.min(WQ, 0), Math.min(Math.max(XQ, 0), QQ));
      return {
        x: qQ(WQ, wQ.left - QQ.left, wQ.right - QQ.right),
        y: qQ(XQ, wQ.top - QQ.top, wQ.bottom - QQ.bottom)
      }
    }

    function JQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = QQ.dx * wQ + WQ,
        zQ = QQ.dy * qQ + XQ,
        sQ = QQ => Math.max(-1, Math.min(1, QQ));
      return {
        dx: sQ(TQ / wQ),
        dy: sQ(zQ / qQ)
      }
    }

    function rQ(QQ, WQ, XQ, wQ) {
      return WQ <= 0 || XQ <= 0 ? 1 : Math.max(.05, Math.min(1, QQ / WQ, wQ / XQ))
    }

    function IQ(QQ, WQ, XQ) {
      return Math.min(QQ.right, WQ.right) - Math.max(QQ.left, WQ.left) > XQ && Math.min(QQ.bottom, WQ.bottom) - Math.max(QQ.top, WQ.top) > XQ
    }

    function jQ(QQ, WQ) {
      const XQ = (QQ, WQ, XQ, wQ) => WQ - QQ > wQ - XQ ? XQ - QQ > WQ - wQ ? wQ - WQ : XQ - QQ : QQ < XQ ? XQ - QQ : WQ > wQ ? wQ - WQ : 0;
      return {
        x: XQ(QQ.left, QQ.right, WQ.left, WQ.right),
        y: XQ(QQ.top, QQ.bottom, WQ.top, WQ.bottom)
      }
    }

    function BQ(QQ, WQ, XQ) {
      return IQ(QQ, {
        left: 0,
        top: 0,
        right: WQ,
        bottom: XQ
      }, 0)
    }

    function yQ(QQ, WQ) {
      let {
        avoid: XQ = null,
        bounds: wQ = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, qQ = 0, TQ = 1 / 0;
      return QQ.forEach(((QQ, zQ) => {
        const sQ = WQ.filter((WQ => IQ(QQ, WQ, 0))).length,
          FQ = null !== wQ && (QQ.left < wQ.left || QQ.top < wQ.top || QQ.right > wQ.right || QQ.bottom > wQ.bottom),
          PQ = sQ + (XQ && IQ(QQ, XQ, 0) ? 1e3 : 0) + (FQ ? 1e6 : 0);
        PQ < TQ && (qQ = zQ, TQ = PQ)
      })), qQ
    }
  },
  9262: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => TQ,
      j: () => qQ,
      m: () => zQ,
      o: () => JQ,
      r: () => gQ,
      s: () => PQ,
      u: () => FQ
    });
    var wQ = XQ(2563);
    const qQ = ["J", "C", "A", "P", "U", "X", "G"],
      TQ = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function zQ(QQ) {
      return QQ ? ["X"] : ["P", "X"]
    }
    const sQ = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: wQ.E,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function FQ(QQ, WQ, XQ) {
      const wQ = QQ.querySelector(".InGameUi .TouchComponentsButtons");
      if (!wQ) return sQ;
      const TQ = {},
        zQ = {};
      for (const sQ of qQ) {
        const QQ = wQ.querySelector(`.TouchSlot${sQ} > .TouchKey`);
        if (QQ) {
          var FQ, PQ;
          TQ[sQ] = QQ.cloneNode(!0);
          const WQ = (null !== (FQ = null === (PQ = QQ.querySelector(".TouchKeyLabel")) || void 0 === PQ ? void 0 : PQ.textContent) && void 0 !== FQ ? FQ : "").split(/\s+/).filter((QQ => !/[\d\xd7]/.test(QQ))).join(" ");
          WQ && (zQ[sQ] = WQ)
        }
      }
      const gQ = WQ => {
          const XQ = QQ.querySelector(`.InGameUi ${WQ}`);
          return null !== XQ && !XQ.classList.contains("Hidden")
        },
        JQ = [...QQ.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((QQ => QQ.cloneNode(!0)));
      return {
        faces: Object.keys(TQ).length > 0 ? TQ : null,
        names: zQ,
        shop: gQ(".TouchInventoryKey.ShopKey"),
        bag: gQ(".TouchInventoryKey.BagKey"),
        sprint: gQ(".TouchSprintHit"),
        items: JQ.length > 0 ? JQ : null,
        rowIcons: WQ,
        pinnedIcons: XQ
      }
    }

    function PQ(QQ, WQ) {
      const XQ = {};
      for (const wQ of [...zQ(WQ), "G"]) {
        const WQ = QQ.names[wQ];
        WQ && (XQ[TQ[wQ]] = WQ)
      }
      return XQ
    }

    function gQ(QQ, WQ) {
      const {
        faces: XQ
      } = QQ;
      if (null === XQ) return [];
      const wQ = new Set(Object.keys(XQ).map((QQ => TQ[QQ])));
      return zQ(WQ).filter((QQ => !wQ.has(TQ[QQ])))
    }

    function JQ(QQ, WQ) {
      QQ.replaceChildren(...[...WQ.childNodes].map((QQ => QQ.cloneNode(!0))))
    }
  },
  34415: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      d: () => wQ
    });
    const wQ = "image/jpeg",
      qQ = "jpg"
  },
  34417: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      h: () => PQ,
      l: () => gQ
    });
    var wQ = XQ(1747),
      qQ = XQ(3480),
      TQ = XQ(105),
      zQ = XQ(1812),
      sQ = XQ(34415);

    function FQ() {
      return !(0, TQ.isMobileApp)() || wQ.e.supports("photos")
    }
    async function PQ(QQ) {
      var WQ, XQ;
      if ((0, TQ.isMobileApp)()) {
        const {
          saved: WQ
        } = await wQ.e.request("photos.save", {
          data: await (0, qQ.f)(QQ),
          mimeType: sQ.d
        });
        return WQ ? "saved" : "denied"
      }
      return (0, TQ.isIOS)() && null !== (WQ = (XQ = navigator).canShare) && void 0 !== WQ && WQ.call(XQ, {
        files: [QQ]
      }) ? gQ(QQ) : ((0, zQ.e)(QQ, QQ.name), "saved")
    }
    async function gQ(QQ) {
      try {
        return await navigator.share({
          files: [QQ]
        }), "shared"
      } catch (WQ) {
        if (WQ instanceof DOMException && "AbortError" === WQ.name) return "fX";
        if (WQ instanceof DOMException && "NotAllowedError" === WQ.name) return "needsTap";
        throw WQ
      }
    }
  },
  34413: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      f: () => gQ,
      j: () => JQ
    });
    var wQ = XQ(26),
      qQ = XQ(34393),
      TQ = XQ(1698),
      zQ = XQ(34415);
    const sQ = 8294400,
      FQ = .92;

    function PQ() {
      (0, TQ.e)(), wQ.b.set({
        screenshotMode: !0
      })
    }

    function gQ() {
      wQ.b.set({
        screenshotMode: !1
      })
    }
    async function JQ() {
      const {
        width: QQ,
        height: WQ,
        scale: XQ
      } = function(QQ, WQ, XQ) {
        const wQ = Math.max(1, QQ),
          qQ = Math.max(1, WQ),
          TQ = Math.min(Math.max(1, XQ), Math.sqrt(sQ / (wQ * qQ)));
        return {
          width: Math.round(wQ * TQ),
          height: Math.round(qQ * TQ),
          scale: TQ
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: wQ
      } = await qQ.devTools.capturePhoto(QQ, WQ, {
        scale: XQ,
        type: zQ.d,
        quality: FQ
      });
      return new File([wQ], function(QQ) {
        const WQ = QQ => String(QQ).padStart(2, "0"),
          XQ = `${QQ.getFullYear()}${WQ(QQ.getMonth()+1)}${WQ(QQ.getDate())}`,
          wQ = `${WQ(QQ.getHours())}${WQ(QQ.getMinutes())}${WQ(QQ.getSeconds())}`;
        return `bloxd-${XQ}-${wQ}.${zQ.c}`
      }(new Date), {
        type: zQ.d
      })
    }
  },
  9056: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => wQ
    });
    const wQ = "controllerOpenKeyboard",
      qQ = "controllerKeyboardVisible"
  },
  34399: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = new Set(["chunkBorders"])
  },
  34393: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ALL_DEV_TOOLS: () => zQ,
      coreDevTools: () => PQ,
      devTools: () => FQ
    });
    var wQ = XQ(691),
      qQ = XQ(1345),
      TQ = XQ(34399);
    const zQ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function sQ() {
      const {
        noaDevTools: QQ
      } = await XQ.e(246).then((() => XQ(41280)));
      return QQ
    }
    const FQ = new class {
        constructor() {
          this.loadHost = sQ, this.tools = zQ
        }
        setHost(QQ) {
          this.tools = null === QQ ? zQ : QQ.tools, this.loadHost = null === QQ ? sQ : async () => QQ
        }
        supports(QQ) {
          return this.tools.has(QQ)
        }
        async downloadScene(QQ, WQ) {
          const XQ = await this.loadHost();
          await XQ.downloadScene(QQ, WQ)
        }
        async setAmbientLightIntensity(QQ) {
          const WQ = await this.loadHost();
          await WQ.setAmbientLightIntensity(QQ)
        }
        async capturePhoto(QQ, WQ, XQ) {
          return (await this.loadHost()).capturePhoto(QQ, WQ, XQ)
        }
      },
      PQ = {
        tools: TQ.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    wQ.x && FQ.setHost(PQ), (0, qQ.t)((() => {
      FQ.setHost(PQ)
    }))
  },
  34548: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      c: () => qQ,
      f: () => gQ
    });
    var wQ = XQ(1626);

    function qQ(QQ) {
      var WQ;
      return {
        ...zQ.store,
        yaw: zQ.store.yaw + (null !== (WQ = wQ.c[QQ].previewYaw) && void 0 !== WQ ? WQ : 0)
      }
    }
    const TQ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      zQ = {
        player: TQ,
        store: {
          ...TQ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function sQ(QQ, WQ) {
      QQ instanceof Promise ? QQ.then(WQ).catch((QQ => {
        console.error("Couldn't open the preview", QQ)
      })) : WQ(QQ)
    }
    class FQ {
      constructor(QQ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, sQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
        }))
      }
      show(QQ) {
        var WQ;
        this.view = QQ, null === (WQ = this.opened) || void 0 === WQ || WQ.show(QQ)
      }
      resize(QQ, WQ) {
        var XQ;
        this.size = {
          width: QQ,
          height: WQ
        }, null === (XQ = this.opened) || void 0 === XQ || XQ.resize(QQ, WQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    class PQ {
      constructor(QQ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), sQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.opened) || void 0 === WQ ? void 0 : WQ.isReady()) && void 0 !== QQ && QQ
      }
      setCosmetic(QQ, WQ) {
        var XQ;
        null === (XQ = this.opened) || void 0 === XQ || XQ.setCosmetic(QQ, WQ)
      }
      playEmote(QQ) {
        var WQ;
        null === (WQ = this.opened) || void 0 === WQ || WQ.playEmote(QQ)
      }
      setOrbit(QQ) {
        var WQ;
        null === (WQ = this.opened) || void 0 === WQ || WQ.setOrbit(QQ)
      }
      resetCamera() {
        var QQ;
        null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
      }
      async untilDrawn(QQ) {
        var WQ;
        await this.ready, await (null === (WQ = this.opened) || void 0 === WQ ? void 0 : WQ.untilDrawn(QQ))
      }
      resize(QQ, WQ) {
        var XQ;
        this.size = {
          width: QQ,
          height: WQ
        }, null === (XQ = this.opened) || void 0 === XQ || XQ.resize(QQ, WQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    const gQ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(QQ) {
        this.host = QQ
      }
      setDefaultHost(QQ) {
        this.makeDefault = QQ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(QQ) {
        return new FQ(this.current().openMob(QQ))
      }
      openPet(QQ) {
        return new FQ(this.current().openPet(QQ))
      }
      openMobLineup(QQ) {
        return new FQ(this.current().openMobLineup(QQ))
      }
      openCharacter(QQ, WQ) {
        return new PQ(this.current().openCharacter(QQ, WQ))
      }
    }
  },
  34541: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ.b,
      d: () => wQ.c,
      h: () => wQ.f
    });
    var wQ = XQ(34548);
    class qQ {
      constructor(QQ) {
        this.load = QQ, this.loaded = null, this.loading = null
      }
      run(QQ) {
        return null !== this.loaded ? QQ(this.loaded) : (this.loading ??= this.load().then((QQ => (this.loaded = QQ, QQ)), (QQ => {
          throw this.loading = null, QQ
        })), this.loading.then(QQ))
      }
    }
    class TQ {
      constructor() {
        this.mobScene = new qQ((() => Promise.all([XQ.e(75), XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(101), XQ.e(263), XQ.e(78), XQ.e(77), XQ.e(260), XQ.e(76), XQ.e(270), XQ.e(264), XQ.e(269), XQ.e(267), XQ.e(259), XQ.e(283), XQ.e(237), XQ.e(253), XQ.e(265), XQ.e(268), XQ.e(80), XQ.e(190), XQ.e(231), XQ.e(100), XQ.e(243), XQ.e(234), XQ.e(250), XQ.e(123), XQ.e(251), XQ.e(79), XQ.e(255)]).then((() => XQ(41294))))), this.characterScene = new qQ((() => Promise.all([XQ.e(75), XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(101), XQ.e(263), XQ.e(78), XQ.e(77), XQ.e(260), XQ.e(76), XQ.e(270), XQ.e(264), XQ.e(269), XQ.e(267), XQ.e(259), XQ.e(283), XQ.e(237), XQ.e(253), XQ.e(265), XQ.e(268), XQ.e(80), XQ.e(190), XQ.e(231), XQ.e(100), XQ.e(243), XQ.e(234), XQ.e(250), XQ.e(123), XQ.e(251), XQ.e(79), XQ.e(254)]).then((() => XQ(41401)))))
      }
      openMob(QQ) {
        return this.mobScene.run((WQ => WQ.openMobPreview(QQ)))
      }
      openPet(QQ) {
        return this.mobScene.run((WQ => WQ.openPetPreview(QQ)))
      }
      openMobLineup(QQ) {
        return this.mobScene.run((WQ => WQ.openMobLineupPreview(QQ)))
      }
      openCharacter(QQ, WQ) {
        return this.characterScene.run((XQ => XQ.openCharacterPreview(QQ, WQ)))
      }
    }
    wQ.f.setDefaultHost((() => new TQ))
  },
  7026: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => TQ
    });
    var wQ = XQ(43);
    const qQ = "shaderPack";
    async function TQ() {
      var QQ;
      let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
    }
  },
  9246: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      e: () => FQ
    });
    var wQ = XQ(26),
      qQ = XQ(1376),
      TQ = XQ(105);
    const zQ = {
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

    function sQ() {
      return (0, TQ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const FQ = new class {
      constructor(QQ) {
        this.deps = QQ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(QQ, WQ) {
        var XQ;
        if (!this.deps.enabled()) return;
        const wQ = zQ[QQ],
          qQ = null !== WQ && void 0 !== WQ ? WQ : wQ.pattern;
        if (null === qQ) return void console.warn("No vibration pattern for", QQ);
        const TQ = this.deps.now();
        TQ - this.lastAnyAt < 40 && wQ.priority < this.playingPriority || TQ - (null !== (XQ = this.lastAt.get(QQ)) && void 0 !== XQ ? XQ : -1 / 0) < wQ.minGapMs || TQ < this.playingUntil && wQ.priority < this.playingPriority || (this.lastAt.set(QQ, TQ), this.lastAnyAt = TQ, this.playingUntil = TQ + qQ.reduce(((QQ, WQ) => QQ + WQ), 0), this.playingPriority = wQ.priority, this.deps.vibrate(qQ))
      }
    }({
      vibrate: QQ => {
        navigator.vibrate([...QQ])
      },
      now: () => performance.now(),
      enabled: () => sQ() && wQ.b.get("isTouchScreen") && wQ.b.get("clientEscMenuOptions").vibration && !(0, qQ.i)()
    })
  },
  9153: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return !QQ.hidden && (WQ || !QQ.isRewardedAd)
    }

    function qQ(QQ) {
      return "object" === typeof QQ ? QQ.option : QQ
    }

    function TQ(QQ, WQ) {
      var XQ;
      if ("dropdown" === (null === (XQ = QQ.userInput) || void 0 === XQ ? void 0 : XQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
        for (const XQ of QQ.userInput.dropdownOptions)
          if (qQ(XQ) === WQ) return "object" === typeof XQ ? XQ.cost : QQ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", WQ)
      }
      return QQ.cost
    }

    function zQ(QQ, WQ, XQ) {
      var wQ;
      const qQ = null !== (wQ = XQ.excludedPlayers) && void 0 !== wQ ? wQ : [WQ];
      return QQ.filter((QQ => !qQ.includes(QQ)))
    }
    XQ.d(WQ, {
      c: () => TQ,
      e: () => qQ,
      i: () => zQ,
      k: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);