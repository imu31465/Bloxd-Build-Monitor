export const id = 134;
export const ids = [134, 196];
export const modules = {
  34190: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(360),
      JB = ZB(34197);

    function oB(BB, IB, ZB) {
      const oB = Object.entries(IB).sort(((BB, IB) => IB[1] - BB[1])),
        GB = (0, TB.ub)(BB);
      GB.push(BB ? "\n\n" : "\n");
      for (const [JB, NB] of oB) {
        var vB, kB, cB;
        const BB = null !== (vB = null === ZB || void 0 === ZB || null === (kB = ZB[JB]) || void 0 === kB ? void 0 : kB.icon) && void 0 !== vB ? vB : `${JB} Enchantment`;
        GB.push({
          icon: BB,
          style: {
            fontSize: "1.5rem"
          }
        }), GB.push({
          str: `${JB} ${null!==(cB=(0,TB.Y)(NB))&&void 0!==cB?cB:NB}\n`
        })
      }
      GB.push({
        str: "\n"
      });
      for (const [TB, NB] of oB) {
        var nB, hB, zB, FB;
        const BB = null !== (nB = null === ZB || void 0 === ZB || null === (hB = ZB[TB]) || void 0 === hB ? void 0 : hB.icon) && void 0 !== nB ? nB : `${TB} Enchantment`,
          IB = null !== (zB = null === ZB || void 0 === ZB || null === (FB = ZB[TB]) || void 0 === FB ? void 0 : FB.description) && void 0 !== zB ? zB : (0, JB.h)(TB);
        GB.push({
          icon: BB,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), GB.push({
          str: IB,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), GB.push({
          str: "\n"
        })
      }
      return GB
    }
  },
  34203: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => gB,
      C: () => hB,
      d: () => cB,
      h: () => UB,
      l: () => qB,
      o: () => kB,
      s: () => yB,
      v: () => nB,
      x: () => zB
    });
    var TB = ZB(342),
      JB = ZB(665),
      oB = ZB(360),
      GB = ZB(4405),
      vB = ZB(34190);

    function kB(BB, IB) {
      var ZB;
      let {
        player: TB,
        chestOrCreative: JB
      } = BB;
      var oB;
      return IB < TB.length ? null !== (oB = TB[IB]) && void 0 !== oB ? oB : null : null !== (ZB = JB[IB - TB.length]) && void 0 !== ZB ? ZB : null
    }

    function cB(BB) {
      var IB;
      return null !== (IB = BB.amount) && void 0 !== IB ? IB : 0
    }

    function nB(BB) {
      return 0 === BB.button || void 0 === BB.button
    }

    function hB(BB) {
      return !!BB.shiftKey
    }

    function zB(BB) {
      return "touches" in BB || "touch" === BB.pointerType || "pen" === BB.pointerType
    }
    const FB = new Set,
      NB = 50;

    function gB(BB, IB) {
      var ZB;
      const TB = null === (ZB = BB[IB]) || void 0 === ZB ? void 0 : ZB.displayName;
      return (0, JB.L)(TB) ? "string" !== typeof IB ? "" : (!FB.has(IB) && FB.size < NB && (FB.add(IB), console.warn(`No item called "${IB}", so its hover shows the name as given`)), IB) : TB
    }

    function qB(BB, IB, ZB) {
      var kB, cB, nB, hB, zB, FB, NB, qB, yB, UB, WB, dB, CB, QB;
      const sB = BB.attributes,
        wB = null !== (kB = null === (cB = IB[BB.name]) || void 0 === cB ? void 0 : cB.rootName) && void 0 !== kB ? kB : BB.name,
        OB = null !== (nB = null !== (hB = sB.customDisplayName) && void 0 !== hB ? hB : null === (zB = IB[BB.name]) || void 0 === zB ? void 0 : zB.displayName) && void 0 !== nB ? nB : gB(IB, wB);
      let YB = OB;
      const iB = null === (FB = sB.customAttributes) || void 0 === FB ? void 0 : FB.enchantmentTier;
      iB && (YB = (0, oB.ub)(OB, {
        colour: oB.qb[iB]
      }));
      const pB = null !== (NB = null !== (qB = null !== (yB = function(BB, IB) {
        var ZB;
        if (void 0 === BB || null !== (ZB = IB.customAttributes) && void 0 !== ZB && ZB.author) return BB;
        const JB = (0, TB.rc)(BB);
        return JB.every((BB => "string" === typeof BB)) ? BB : JB.map((BB => "string" === typeof BB ? BB : {
          icon: BB.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(sB.customDescription, sB)) && void 0 !== yB ? yB : null === (UB = IB[BB.name]) || void 0 === UB ? void 0 : UB.description) && void 0 !== qB ? qB : null === (WB = IB[wB]) || void 0 === WB ? void 0 : WB.description) && void 0 !== NB ? NB : "";
      let aB = pB;
      if (null !== (dB = sB.customAttributes) && void 0 !== dB && dB.enchantments) aB = (0, vB.d)(pB, sB.customAttributes.enchantments, sB.customAttributes.enchantmentData);
      else if (ZB[wB]) aB = (0, oB.ub)(pB), aB.push({
        str: "\n"
      }), aB.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (CB = sB.customAttributes) && void 0 !== CB && CB.mobSettings) {
        var HB, MB;
        const BB = sB.customAttributes.mobSettings;
        var jB, PB;
        if (aB = [], (0, JB.L)(sB.customAttributes.health) || (aB.push({
            str: "\n"
          }), aB.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), aB.push({
            str: " "
          }), aB.push({
            str: sB.customAttributes.health.toString()
          }), (0, JB.L)(BB.maxHealth) || (aB.push({
            str: "/"
          }), aB.push({
            str: BB.maxHealth.toString()
          }))), !(0, JB.L)(BB.attackDamage) && BB.attackDamage > 0 && (aB.push({
            str: "\n"
          }), aB.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), aB.push({
            str: " "
          }), aB.push({
            str: BB.attackDamage.toString()
          })), !(0, JB.L)(BB.secondaryAttackDamage) && BB.secondaryAttackDamage > 0 && (aB.push({
            str: "\n"
          }), aB.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), aB.push({
            str: " "
          }), aB.push({
            str: BB.secondaryAttackDamage.toString()
          })), (0, JB.L)(BB.baseRunningSpeed) || (aB.push({
            str: "\n"
          }), aB.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), aB.push({
            str: " "
          }), aB.push({
            str: BB.baseRunningSpeed.toFixed(2)
          })), "Saddled" === BB.metaInfo) aB.push({
          str: "\n"
        }), aB.push({
          str: {
            translationKey: "general:has"
          }
        }), aB.push({
          str: " "
        }), aB.push({
          icon: null !== (jB = null === (PB = BB.tameInfo) || void 0 === PB ? void 0 : PB.saddleItemName) && void 0 !== jB ? jB : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (aB.push({
            str: "\n"
          }), aB.push({
            str: "\n"
          }), BB.petInfo && null !== (HB = BB.tameInfo) && void 0 !== HB && HB.supportsFriendship) {
          const IB = GB.d.getIconsFromFriendshipPoints(BB.petInfo.friendshipPoints);
          for (const BB of IB) aB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          aB.push({
            str: "\n"
          });
          const ZB = GB.d.getMobHungerLevel(BB.petInfo.lastFedAt);
          for (const BB of GB.d.hungerLevelIcons[ZB]) aB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          aB.push({
            str: " "
          }), aB.push({
            str: GB.d.hungerLevelTranslations[ZB],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (BB.tameInfo && null !== (MB = BB.tameInfo) && void 0 !== MB && MB.supportsFriendship) {
          var RB, rB;
          let IB = null !== (RB = BB.tameInfo.likedFoods) && void 0 !== RB ? RB : [];
          aB.push({
            str: "\n"
          }), aB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: GB.d.feedTextColours[GB.d.MobFoodType.Superliked]
            }
          }), aB.push({
            str: " "
          }), null !== (rB = BB.petInfo) && void 0 !== rB && rB.superlikedFoodKnown ? (aB.push({
            icon: BB.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), IB = IB.filter((IB => IB !== BB.petInfo.superlikedFood))) : aB.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), aB.push({
            str: "\n"
          }), aB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: GB.d.feedTextColours[GB.d.MobFoodType.Liked]
            }
          }), aB.push({
            str: " "
          });
          for (const BB of IB) aB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          aB.push({
            str: "\n"
          }), aB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: GB.d.feedTextColours[GB.d.MobFoodType.Neutral]
            }
          }), aB.push({
            str: " "
          });
          for (const ZB of null !== (mB = BB.tameInfo.neutralFoods) && void 0 !== mB ? mB : []) {
            var mB;
            aB.push({
              icon: ZB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          aB.push({
            str: "\n"
          }), aB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: GB.d.feedTextColours[GB.d.MobFoodType.Disliked]
            }
          }), aB.push({
            str: " "
          });
          for (const ZB of null !== (XB = BB.tameInfo.dislikedFoods) && void 0 !== XB ? XB : []) {
            var XB;
            aB.push({
              icon: ZB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        aB.length > 0 ? (aB.shift(), aB.unshift(...(0, oB.ub)(pB))) : aB = (0, oB.ub)(pB)
      }
      return {
        name: YB,
        desc: aB,
        fontStyle: null !== (QB = sB.customAttributes) && void 0 !== QB && QB.author ? "italic" : "normal"
      }
    }

    function yB(BB, IB, ZB, TB) {
      const JB = kB(BB, ZB),
        oB = kB(BB, TB);
      if (!JB) return !1;
      const GB = IB[JB.name].armourReduction,
        vB = IB[oB.name].armourReduction;
      if (vB === GB) {
        var cB, nB, hB, zB;
        const BB = null !== (cB = null === (nB = JB.attributes.customAttributes) || void 0 === nB ? void 0 : nB.enchantmentTier) && void 0 !== cB ? cB : "Tier 0",
          IB = null !== (hB = null === (zB = oB.attributes.customAttributes) || void 0 === zB ? void 0 : zB.enchantmentTier) && void 0 !== hB ? hB : "Tier 0";
        return parseInt(BB.replace("Tier ", "")) >= parseInt(IB.replace("Tier ", ""))
      }
      return GB > vB
    }

    function UB(BB) {
      let IB;
      if ("number" === typeof BB) {
        const ZB = document.querySelector(`[data-inven-idx="${BB}"]`);
        if (!ZB) return null;
        IB = ZB.getBoundingClientRect()
      } else IB = BB.getBoundingClientRect();
      return {
        x: IB.left + IB.width / 2,
        y: IB.top + IB.height / 2
      }
    }
  },
  9001: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => yB,
      h: () => dB
    });
    var TB = ZB(63),
      JB = ZB(24),
      oB = ZB(2590),
      GB = ZB(3589);
    const vB = 6,
      kB = 4;

    function cB(BB) {
      let {
        slotsLeft: IB,
        slotsRight: ZB,
        width: TB,
        height: JB,
        zoneRight: oB,
        rowTop: GB,
        besideBottom: cB,
        obstacles: nB
      } = BB;
      const hB = Math.max(0, Math.floor(ZB - IB - TB)),
        zB = null === oB ? 0 : Math.min(hB, Math.max(0, Math.ceil(oB + vB - IB))),
        FB = IB + zB - vB,
        NB = IB + zB + TB + vB,
        gB = nB.filter((BB => BB.left < NB && BB.right > FB));
      let qB = cB;
      for (let vB = 0; vB <= gB.length; vB++) {
        const BB = gB.filter((BB => BB.top < qB + kB && BB.bottom > qB - JB - kB));
        if (0 === BB.length) break;
        qB = Math.min(...BB.map((BB => BB.top))) - kB
      }
      return {
        shift: zB,
        rise: qB === cB ? null : Math.ceil(GB - qB)
      }
    }

    function nB(BB) {
      return Array.from(BB.children).filter((BB => !BB.classList.contains("HotBarRow")))
    }

    function hB(BB) {
      return function(BB) {
        const IB = [],
          ZB = (BB, TB) => {
            const JB = BB.getBoundingClientRect();
            if (JB.width > 0 && JB.height > 0) IB.push(BB);
            else if (TB < 2)
              for (const IB of Array.from(BB.children)) ZB(IB, TB + 1)
          };
        for (const TB of BB) ZB(TB, 0);
        return IB
      }(nB(BB).flatMap((BB => BB.classList.contains("AuraBarWrapper") ? [] : BB.classList.contains("BottomScreenStatBarList") ? Array.from(BB.children) : [BB])))
    }

    function zB(BB) {
      var IB;
      const ZB = BB.getBoundingClientRect();
      if (0 === ZB.width) return null;
      const TB = null === (IB = BB.parentElement) || void 0 === IB ? void 0 : IB.getBoundingClientRect();
      return TB && TB.width > 0 ? Math.min(ZB.right, TB.left + TB.width * FB) : ZB.right
    }
    const FB = .35,
      NB = new WeakMap,
      gB = ".BottomScreenMessage, [role='status']",
      qB = new WeakMap;

    function yB(BB) {
      UB(BB) && UB(BB)
    }

    function UB(BB) {
      var IB, ZB, TB, JB, oB, GB;
      const vB = BB.documentElement.classList;
      if (!vB.contains("TouchHotbar") || vB.contains("TouchHotbarKeysAbove") || vB.contains("HudMove-inventory") || vB.contains("HudLocked-inventory") || null === (IB = BB.defaultView) || void 0 === IB || null === (ZB = IB.matchMedia) || void 0 === ZB || !ZB.call(IB, WB).matches) return !1;
      const nB = BB.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        FB = null === nB || void 0 === nB ? void 0 : nB.parentElement,
        yB = null === nB || void 0 === nB ? void 0 : nB.closest(".BottomMiddleElements"),
        UB = null === yB || void 0 === yB ? void 0 : yB.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!nB || !FB || !yB || !UB || yB.classList.contains("TouchInventoryOpen")) return !1;
      const dB = nB.getBoundingClientRect();
      if (0 === dB.width) return !1;
      const CB = BB.querySelector(".JoystickZone"),
        QB = UB.getBoundingClientRect(),
        sB = FB.getBoundingClientRect().top,
        wB = null === (TB = yB.querySelector(":scope > .AuraBarWrapper")) || void 0 === TB ? void 0 : TB.getBoundingClientRect(),
        OB = hB(yB),
        YB = {
          slotsLeft: QB.left,
          slotsRight: QB.right,
          width: dB.width,
          height: dB.height,
          zoneRight: CB ? zB(CB) : null,
          rowTop: sB,
          besideBottom: (wB && wB.height > 0 ? wB.top : sB) - kB,
          obstacles: OB.map((BB => BB.getBoundingClientRect()))
        },
        iB = cB({
          ...YB,
          obstacles: OB.filter((BB => !BB.matches(gB))).map((BB => BB.getBoundingClientRect()))
        }),
        pB = BB.defaultView,
        aB = `${null===pB||void 0===pB?void 0:pB.innerWidth}x${null===pB||void 0===pB?void 0:pB.innerHeight}:${iB.shift}:${Math.round(dB.width)}:${Math.round(sB)}`,
        HB = qB.get(yB),
        MB = (null === HB || void 0 === HB ? void 0 : HB.at) === aB ? (jB = HB.rise, PB = iB.rise, null === jB ? PB : null === PB ? jB : Math.max(jB, PB)) : iB.rise;
      var jB, PB;
      const RB = cB({
          ...YB,
          besideBottom: null === MB ? YB.besideBottom : sB - MB
        }),
        rB = {
          shift: iB.shift,
          rise: null !== (JB = RB.rise) && void 0 !== JB ? JB : MB
        },
        mB = NB.get(yB);
      return (null !== (oB = null === mB || void 0 === mB ? void 0 : mB.shift) && void 0 !== oB ? oB : 0) === rB.shift && qB.set(yB, {
        at: aB,
        rise: MB
      }), (null === mB || void 0 === mB ? void 0 : mB.shift) !== rB.shift && yB.style.setProperty("--touch-shop-above-shift", `${rB.shift}px`), (null === mB || void 0 === mB ? void 0 : mB.rise) !== rB.rise && (yB.classList.toggle("ShopAboveUp", null !== rB.rise), null === rB.rise ? yB.style.removeProperty("--touch-shop-above-rise") : yB.style.setProperty("--touch-shop-above-rise", `${rB.rise}px`)), NB.set(yB, rB), (null !== (GB = null === mB || void 0 === mB ? void 0 : mB.shift) && void 0 !== GB ? GB : 0) !== rB.shift
    }
    const WB = "(orientation: landscape) and (max-height: 500px)";

    function dB(BB, IB, ZB) {
      (0, TB.useLayoutEffect)((() => {
        var IB;
        const TB = null === (IB = BB.current) || void 0 === IB ? void 0 : IB.closest(".BottomMiddleElements");
        if (!TB || ZB) return;
        const vB = new ResizeObserver((() => {
            FB(!1)
          })),
          kB = () => {
            vB.disconnect();
            const BB = document.querySelector(".JoystickZone");
            for (const IB of [BB, TB, TB.querySelector(".HotBarGameItemsContainer"), ...hB(TB)]) IB && vB.observe(IB)
          };
        let cB = null,
          zB = !1;
        const FB = BB => {
            zB ||= BB, cB ??= requestAnimationFrame((() => {
              cB = null, zB && (zB = !1, kB()), yB(document)
            }))
          },
          NB = new MutationObserver((() => {
            FB(!0)
          }));
        NB.observe(TB, {
          childList: !0
        });
        for (const BB of nB(TB)) NB.observe(BB, {
          childList: !0,
          subtree: !0
        });
        yB(document), kB();
        const gB = () => {
            FB(!0)
          },
          qB = [(0, JB.p)(oB.e, gB), (0, JB.p)(GB.e, gB)];
        return () => {
          null !== cB && cancelAnimationFrame(cB), vB.disconnect(), NB.disconnect();
          for (const BB of qB) BB()
        }
      }), [BB, IB, ZB])
    }
  },
  34073: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => FB,
      g: () => NB,
      h: () => gB
    });
    var TB = ZB(1516),
      JB = ZB(63),
      oB = ZB(1370),
      GB = ZB(4714),
      vB = ZB(2455),
      kB = ZB(1248),
      cB = ZB(105),
      nB = ZB(2054),
      hB = ZB(1397),
      zB = ZB(1153);

    function FB(BB) {
      let {
        show: IB,
        onClose: ZB
      } = BB;
      const {
        requestedGameNameWithVariation: TB,
        lobbyName: JB,
        shownLobbyName: oB
      } = (0, nB.j)("connectedGame"), kB = (0, vB.e)(TB, JB, !1);
      return cB.featureFlags.canUseInviteLinks && (0, zB.jsx)(GB.c, {
        show: IB,
        close: ZB,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, zB.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, zB.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, zB.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, zB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === kB ? (0, zB.jsx)(hB.d, {}) : kB, (0, zB.jsx)("br", {}), "Lobby Name: ", oB, (0, zB.jsx)("br", {}), (0, zB.jsx)("br", {}), (0, zB.jsx)("br", {}), (0, zB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, zB.jsx)(NB, {})]
        })
      })
    }

    function NB() {
      var BB;
      const {
        t: IB
      } = (0, kB.G)(), ZB = null !== (BB = gB(cB.featureFlags.canUseInviteLinks)) && void 0 !== BB ? BB : "Loading Link...", [oB, GB] = (0, JB.useState)(0), [vB, nB] = (0, JB.useReducer)((BB => BB + 1), 0);
      return (0, JB.useEffect)((() => {
        const BB = setTimeout((() => {
          nB()
        }), 1100);
        return () => {
          clearTimeout(BB)
        }
      }), [oB]), cB.featureFlags.canUseInviteLinks && (0, zB.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, zB.jsx)("div", {
          className: "InviteLinkInner",
          children: ZB
        }), (0, zB.jsx)(TB.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(ZB).catch((BB => {
              console.error("Failed to copy invite link:", BB)
            })), GB(Date.now())
          },
          disabled: Date.now() - oB < 1e3,
          children: Date.now() - oB < 1e3 ? IB("general:copied") : IB("general:copy")
        })]
      })
    }

    function gB(BB) {
      const [IB, ZB] = (0, JB.useState)(null);
      return (0, JB.useEffect)((() => {
        if (!BB) return;
        let IB = !0;
        return (0, oB.u)().then((BB => {
          IB && ZB(BB)
        })).catch((BB => {
          console.error("Failed to get invite link:", BB)
        })), () => {
          IB = !1
        }
      }), [BB]), IB
    }
  },
  34177: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => cB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(2054),
      vB = ZB(1153);

    function kB(BB) {
      const IB = Math.floor(BB / 3600),
        ZB = Math.floor(BB % 3600 / 60),
        TB = Math.floor(BB % 60),
        JB = `${ZB.toString().padStart(2,"0")}:${TB.toString().padStart(2,"0")}`;
      return IB > 0 ? `${IB}:${JB}` : JB
    }
    const cB = (0, TB.memo)((function(BB) {
      let {
        className: IB
      } = BB;
      const {
        recording: ZB,
        seconds: TB
      } = (0, GB.j)("replayRecorder");
      return ZB ? (0, vB.jsxs)("div", {
        className: oB()("RecordingIndicator", IB),
        children: [(0, vB.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, vB.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, vB.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: kB(TB)
        })]
      }) : null
    }))
  },
  34184: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(4721),
      JB = ZB(4728);

    function oB(BB) {
      let {
        children: IB,
        showing: ZB,
        globallyUniqueKey: oB,
        alwaysMountChildren: GB = !1,
        doGameplayStartStopOnShow: vB = !0,
        keepsMovement: kB = !1
      } = BB;
      return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
    }
  },
  6741: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(63),
      JB = ZB(36);

    function oB(BB, IB) {
      var ZB;
      const [oB, GB] = (0, TB.useState)(null !== (ZB = JB.m.getItem(BB)) && void 0 !== ZB ? ZB : IB);
      return [oB, IB => {
        JB.m.setItem(BB, IB), GB(IB)
      }]
    }
  },
  8997: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => zB,
      B: () => cB,
      D: () => NB,
      F: () => oB,
      c: () => JB,
      d: () => vB,
      g: () => TB,
      k: () => gB,
      l: () => FB,
      n: () => nB,
      r: () => GB,
      s: () => qB,
      v: () => hB,
      z: () => kB
    });
    const TB = BB => ({
      left: BB.left,
      top: BB.top,
      right: BB.right,
      bottom: BB.bottom
    });

    function JB(BB) {
      return {
        x: (BB.left + BB.right) / 2,
        y: (BB.top + BB.bottom) / 2
      }
    }

    function oB(BB) {
      return 0 === BB.length ? null : BB.reduce(((BB, IB) => ({
        left: Math.min(BB.left, IB.left),
        top: Math.min(BB.top, IB.top),
        right: Math.max(BB.right, IB.right),
        bottom: Math.max(BB.bottom, IB.bottom)
      })))
    }

    function GB(BB, IB) {
      const ZB = Math.max(0, (IB - (BB.right - BB.left)) / 2),
        TB = Math.max(0, (IB - (BB.bottom - BB.top)) / 2);
      return {
        left: BB.left - ZB,
        top: BB.top - TB,
        right: BB.right + ZB,
        bottom: BB.bottom + TB
      }
    }

    function vB(BB, IB) {
      return IB.x >= BB.left && IB.x <= BB.right && IB.y >= BB.top && IB.y <= BB.bottom
    }

    function kB(BB, IB, ZB) {
      let TB = null,
        oB = 1 / 0;
      for (const {
          id: JB,
          box: GB
        }
        of IB) {
        const IB = (GB.right - GB.left) * (GB.bottom - GB.top);
        vB(GB, BB) && IB < oB && (oB = IB, TB = JB)
      }
      if (null !== TB) return TB;
      let kB = 1 / 0;
      for (const {
          id: cB,
          box: nB
        }
        of IB) {
        if (!vB(GB(nB, ZB), BB)) continue;
        const IB = JB(nB),
          oB = Math.hypot(BB.x - IB.x, BB.y - IB.y);
        oB < kB && (kB = oB, TB = cB)
      }
      return TB
    }

    function cB(BB, IB, ZB) {
      return {
        left: ZB.left,
        top: ZB.top,
        right: BB - ZB.right,
        bottom: IB - ZB.bottom
      }
    }

    function nB(BB, IB, ZB, TB) {
      const JB = (BB, IB, ZB) => Math.max(Math.min(IB, 0), Math.min(Math.max(ZB, 0), BB));
      return {
        x: JB(IB, TB.left - BB.left, TB.right - BB.right),
        y: JB(ZB, TB.top - BB.top, TB.bottom - BB.bottom)
      }
    }

    function hB(BB, IB, ZB, TB, JB) {
      const oB = BB.dx * TB + IB,
        GB = BB.dy * JB + ZB,
        vB = BB => Math.max(-1, Math.min(1, BB));
      return {
        dx: vB(oB / TB),
        dy: vB(GB / JB)
      }
    }

    function zB(BB, IB, ZB, TB) {
      return IB <= 0 || ZB <= 0 ? 1 : Math.max(.05, Math.min(1, BB / IB, TB / ZB))
    }

    function FB(BB, IB, ZB) {
      return Math.min(BB.right, IB.right) - Math.max(BB.left, IB.left) > ZB && Math.min(BB.bottom, IB.bottom) - Math.max(BB.top, IB.top) > ZB
    }

    function NB(BB, IB) {
      const ZB = (BB, IB, ZB, TB) => IB - BB > TB - ZB ? ZB - BB > IB - TB ? TB - IB : ZB - BB : BB < ZB ? ZB - BB : IB > TB ? TB - IB : 0;
      return {
        x: ZB(BB.left, BB.right, IB.left, IB.right),
        y: ZB(BB.top, BB.bottom, IB.top, IB.bottom)
      }
    }

    function gB(BB, IB, ZB) {
      return FB(BB, {
        left: 0,
        top: 0,
        right: IB,
        bottom: ZB
      }, 0)
    }

    function qB(BB, IB) {
      let {
        avoid: ZB = null,
        bounds: TB = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, JB = 0, oB = 1 / 0;
      return BB.forEach(((BB, GB) => {
        const vB = IB.filter((IB => FB(BB, IB, 0))).length,
          kB = null !== TB && (BB.left < TB.left || BB.top < TB.top || BB.right > TB.right || BB.bottom > TB.bottom),
          cB = vB + (ZB && FB(BB, ZB, 0) ? 1e3 : 0) + (kB ? 1e6 : 0);
        cB < oB && (JB = GB, oB = cB)
      })), JB
    }
  },
  8999: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => kB,
      e: () => vB,
      i: () => oB,
      m: () => JB,
      o: () => GB,
      q: () => hB,
      u: () => nB,
      w: () => cB
    });
    var TB = ZB(2555);
    const JB = ["J", "C", "A", "P", "U", "X", "G"],
      oB = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function GB(BB) {
      return BB ? ["X"] : ["P", "X"]
    }
    const vB = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: TB.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function kB(BB, IB, ZB) {
      const TB = BB.querySelector(".InGameUi .TouchComponentsButtons");
      if (!TB) return vB;
      const oB = {},
        GB = {};
      for (const vB of JB) {
        const BB = TB.querySelector(`.TouchSlot${vB} > .TouchKey`);
        if (BB) {
          var kB, cB;
          oB[vB] = BB.cloneNode(!0);
          const IB = (null !== (kB = null === (cB = BB.querySelector(".TouchKeyLabel")) || void 0 === cB ? void 0 : cB.textContent) && void 0 !== kB ? kB : "").split(/\s+/).filter((BB => !/[\d\xd7]/.test(BB))).join(" ");
          IB && (GB[vB] = IB)
        }
      }
      const nB = IB => {
          const ZB = BB.querySelector(`.InGameUi ${IB}`);
          return null !== ZB && !ZB.classList.contains("Hidden")
        },
        hB = [...BB.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((BB => BB.cloneNode(!0)));
      return {
        faces: Object.keys(oB).length > 0 ? oB : null,
        names: GB,
        shop: nB(".TouchInventoryKey.ShopKey"),
        bag: nB(".TouchInventoryKey.BagKey"),
        sprint: nB(".TouchSprintHit"),
        items: hB.length > 0 ? hB : null,
        rowIcons: IB,
        pinnedIcons: ZB
      }
    }

    function cB(BB, IB) {
      const ZB = {};
      for (const TB of [...GB(IB), "G"]) {
        const IB = BB.names[TB];
        IB && (ZB[oB[TB]] = IB)
      }
      return ZB
    }

    function nB(BB, IB) {
      const {
        faces: ZB
      } = BB;
      if (null === ZB) return [];
      const TB = new Set(Object.keys(ZB).map((BB => oB[BB])));
      return GB(IB).filter((BB => !TB.has(oB[BB])))
    }

    function hB(BB, IB) {
      BB.replaceChildren(...[...IB.childNodes].map((BB => BB.cloneNode(!0))))
    }
  },
  34084: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => TB
    });
    const TB = "image/jpeg",
      JB = "jpg"
  },
  34086: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      d: () => cB,
      e: () => nB
    });
    var TB = ZB(1755),
      JB = ZB(3372),
      oB = ZB(105),
      GB = ZB(1821),
      vB = ZB(34084);

    function kB() {
      return !(0, oB.isMobileApp)() || TB.d.supports("photos")
    }
    async function cB(BB) {
      var IB, ZB;
      if ((0, oB.isMobileApp)()) {
        const {
          saved: IB
        } = await TB.d.request("photos.save", {
          data: await (0, JB.g)(BB),
          mimeType: vB.i
        });
        return IB ? "saved" : "denied"
      }
      return (0, oB.isIOS)() && null !== (IB = (ZB = navigator).canShare) && void 0 !== IB && IB.call(ZB, {
        files: [BB]
      }) ? nB(BB) : ((0, GB.d)(BB, BB.name), "saved")
    }
    async function nB(BB) {
      try {
        return await navigator.share({
          files: [BB]
        }), "shared"
      } catch (IB) {
        if (IB instanceof DOMException && "AbortError" === IB.name) return "fZ";
        if (IB instanceof DOMException && "NotAllowedError" === IB.name) return "needsTap";
        throw IB
      }
    }
  },
  34081: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => cB,
      h: () => nB,
      i: () => hB
    });
    var TB = ZB(20),
      JB = ZB(34060),
      oB = ZB(1711),
      GB = ZB(34084);
    const vB = 8294400,
      kB = .92;

    function cB() {
      (0, oB.d)(), TB.d.set({
        screenshotMode: !0
      })
    }

    function nB() {
      TB.d.set({
        screenshotMode: !1
      })
    }
    async function hB() {
      const {
        width: BB,
        height: IB,
        scale: ZB
      } = function(BB, IB, ZB) {
        const TB = Math.max(1, BB),
          JB = Math.max(1, IB),
          oB = Math.min(Math.max(1, ZB), Math.sqrt(vB / (TB * JB)));
        return {
          width: Math.round(TB * oB),
          height: Math.round(JB * oB),
          scale: oB
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: TB
      } = await JB.devTools.capturePhoto(BB, IB, {
        scale: ZB,
        type: GB.i,
        quality: kB
      });
      return new File([TB], function(BB) {
        const IB = BB => String(BB).padStart(2, "0"),
          ZB = `${BB.getFullYear()}${IB(BB.getMonth()+1)}${IB(BB.getDate())}`,
          TB = `${IB(BB.getHours())}${IB(BB.getMinutes())}${IB(BB.getSeconds())}`;
        return `bloxd-${ZB}-${TB}.${GB.e}`
      }(new Date), {
        type: GB.i
      })
    }
  },
  8785: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => TB
    });
    const TB = "controllerOpenKeyboard",
      JB = "controllerKeyboardVisible"
  },
  34066: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    const TB = new Set(["chunkBorders"])
  },
  34060: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      ALL_DEV_TOOLS: () => GB,
      coreDevTools: () => cB,
      devTools: () => kB
    });
    var TB = ZB(684),
      JB = ZB(1362),
      oB = ZB(34066);
    const GB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function vB() {
      const {
        noaDevTools: BB
      } = await ZB.e(242).then((() => ZB(41093)));
      return BB
    }
    const kB = new class {
        constructor() {
          this.loadHost = vB, this.tools = GB
        }
        setHost(BB) {
          this.tools = null === BB ? GB : BB.tools, this.loadHost = null === BB ? vB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, IB) {
          const ZB = await this.loadHost();
          await ZB.downloadScene(BB, IB)
        }
        async setAmbientLightIntensity(BB) {
          const IB = await this.loadHost();
          await IB.setAmbientLightIntensity(BB)
        }
        async capturePhoto(BB, IB, ZB) {
          return (await this.loadHost()).capturePhoto(BB, IB, ZB)
        }
      },
      cB = {
        tools: oB.d,
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
    TB.B && kB.setHost(cB), (0, JB.w)((() => {
      kB.setHost(cB)
    }))
  },
  34235: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      d: () => JB,
      e: () => nB
    });
    var TB = ZB(1630);

    function JB(BB) {
      var IB;
      return {
        ...GB.store,
        yaw: GB.store.yaw + (null !== (IB = TB.d[BB].previewYaw) && void 0 !== IB ? IB : 0)
      }
    }
    const oB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      GB = {
        player: oB,
        store: {
          ...oB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function vB(BB, IB) {
      BB instanceof Promise ? BB.then(IB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : IB(BB)
    }
    class kB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, vB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var IB;
        this.view = BB, null === (IB = this.opened) || void 0 === IB || IB.show(BB)
      }
      resize(BB, IB) {
        var ZB;
        this.size = {
          width: BB,
          height: IB
        }, null === (ZB = this.opened) || void 0 === ZB || ZB.resize(BB, IB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class cB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), vB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, IB;
        return null !== (BB = null === (IB = this.opened) || void 0 === IB ? void 0 : IB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, IB) {
        var ZB;
        null === (ZB = this.opened) || void 0 === ZB || ZB.setCosmetic(BB, IB)
      }
      playEmote(BB) {
        var IB;
        null === (IB = this.opened) || void 0 === IB || IB.playEmote(BB)
      }
      setOrbit(BB) {
        var IB;
        null === (IB = this.opened) || void 0 === IB || IB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var IB;
        await this.ready, await (null === (IB = this.opened) || void 0 === IB ? void 0 : IB.untilDrawn(BB))
      }
      resize(BB, IB) {
        var ZB;
        this.size = {
          width: BB,
          height: IB
        }, null === (ZB = this.opened) || void 0 === ZB || ZB.resize(BB, IB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const nB = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(BB) {
        this.host = BB
      }
      setDefaultHost(BB) {
        this.makeDefault = BB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(BB) {
        return new kB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new kB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new kB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, IB) {
        return new cB(this.current().openCharacter(BB, IB))
      }
    }
  },
  34230: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.b,
      f: () => TB.d,
      i: () => TB.e
    });
    var TB = ZB(34235);
    class JB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class oB {
      constructor() {
        this.mobScene = new JB((() => Promise.all([ZB.e(73), ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(98), ZB.e(259), ZB.e(76), ZB.e(75), ZB.e(256), ZB.e(74), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(279), ZB.e(233), ZB.e(249), ZB.e(261), ZB.e(264), ZB.e(78), ZB.e(188), ZB.e(227), ZB.e(97), ZB.e(239), ZB.e(230), ZB.e(246), ZB.e(121), ZB.e(247), ZB.e(77), ZB.e(251)]).then((() => ZB(41108))))), this.characterScene = new JB((() => Promise.all([ZB.e(73), ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(98), ZB.e(259), ZB.e(76), ZB.e(75), ZB.e(256), ZB.e(74), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(279), ZB.e(233), ZB.e(249), ZB.e(261), ZB.e(264), ZB.e(78), ZB.e(188), ZB.e(227), ZB.e(97), ZB.e(239), ZB.e(230), ZB.e(246), ZB.e(121), ZB.e(247), ZB.e(77), ZB.e(250)]).then((() => ZB(41208)))))
      }
      openMob(BB) {
        return this.mobScene.run((IB => IB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((IB => IB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((IB => IB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, IB) {
        return this.characterScene.run((ZB => ZB.openCharacterPreview(BB, IB)))
      }
    }
    TB.e.setDefaultHost((() => new oB))
  },
  6808: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => oB
    });
    var TB = ZB(36);
    const JB = "shaderPack";
    async function oB() {
      var BB;
      let IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await TB.i.getItem(JB, IB)) && void 0 !== BB ? BB : null
    }
  },
  8985: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      d: () => kB
    });
    var TB = ZB(20),
      JB = ZB(1382),
      oB = ZB(105);
    const GB = {
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

    function vB() {
      return (0, oB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const kB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, IB) {
        var ZB;
        if (!this.deps.enabled()) return;
        const TB = GB[BB],
          JB = null !== IB && void 0 !== IB ? IB : TB.pattern;
        if (null === JB) return void console.warn("No vibration pattern for", BB);
        const oB = this.deps.now();
        oB - this.lastAnyAt < 40 && TB.priority < this.playingPriority || oB - (null !== (ZB = this.lastAt.get(BB)) && void 0 !== ZB ? ZB : -1 / 0) < TB.minGapMs || oB < this.playingUntil && TB.priority < this.playingPriority || (this.lastAt.set(BB, oB), this.lastAnyAt = oB, this.playingUntil = oB + JB.reduce(((BB, IB) => BB + IB), 0), this.playingPriority = TB.priority, this.deps.vibrate(JB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => vB() && TB.d.get("isTouchScreen") && TB.d.get("clientEscMenuOptions").vibration && !(0, JB.e)()
    })
  },
  34091: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      f: () => hB,
      g: () => nB
    });
    var TB = ZB(20),
      JB = ZB(1755),
      oB = ZB(36),
      GB = ZB(3832);
    const vB = 2592e5,
      kB = "notificationOptInLastPromptedAt";
    async function cB() {
      var BB;
      const IB = null !== (BB = oB.m.getItem(kB)) && void 0 !== BB ? BB : 0;
      return Date.now() - IB < vB ? null : hB()
    }

    function nB() {
      oB.m.setItem(kB, Date.now())
    }
    async function hB() {
      return await JB.d.ready, JB.d.supports("notifications") ? TB.d.get("mobilePushNotificationsCanAsk") ? async () => {
        JB.d.request("notifications.requestPermission", {}).then((BB => {
          let {
            canAsk: IB
          } = BB;
          TB.d.set({
            mobilePushNotificationsCanAsk: IB
          })
        }), (BB => {
          console.error("The app couldn't ask for push notifications:", BB)
        }))
      }: null: await GB.c.canAsk() ? () => GB.c.requestPermission() : null
    }
  },
  8890: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return !BB.hidden && (IB || !BB.isRewardedAd)
    }

    function JB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function oB(BB, IB) {
      var ZB;
      if ("dropdown" === (null === (ZB = BB.userInput) || void 0 === ZB ? void 0 : ZB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const ZB of BB.userInput.dropdownOptions)
          if (JB(ZB) === IB) return "object" === typeof ZB ? ZB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", IB)
      }
      return BB.cost
    }

    function GB(BB, IB, ZB) {
      var TB;
      const JB = null !== (TB = ZB.excludedPlayers) && void 0 !== TB ? TB : [IB];
      return BB.filter((BB => !JB.includes(BB)))
    }
    ZB.d(IB, {
      e: () => oB,
      i: () => JB,
      l: () => GB,
      o: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);