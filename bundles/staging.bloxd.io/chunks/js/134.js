export const id = 134;
export const ids = [134, 196];
export const modules = {
  34481: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(352),
      SG = ZG(34483);

    function LG(GG, bG, ZG) {
      const LG = Object.entries(bG).sort(((GG, bG) => bG[1] - GG[1])),
        yG = (0, wG.Bb)(GG);
      yG.push(GG ? "\n\n" : "\n");
      for (const [SG, KG] of LG) {
        var kG, UG, YG;
        const GG = null !== (kG = null === ZG || void 0 === ZG || null === (UG = ZG[SG]) || void 0 === UG ? void 0 : UG.icon) && void 0 !== kG ? kG : `${SG} Enchantment`;
        yG.push({
          icon: GG,
          style: {
            fontSize: "1.5rem"
          }
        }), yG.push({
          str: `${SG} ${null!==(YG=(0,wG.X)(KG))&&void 0!==YG?YG:KG}\n`
        })
      }
      yG.push({
        str: "\n"
      });
      for (const [wG, KG] of LG) {
        var VG, pG, fG, QG;
        const GG = null !== (VG = null === ZG || void 0 === ZG || null === (pG = ZG[wG]) || void 0 === pG ? void 0 : pG.icon) && void 0 !== VG ? VG : `${wG} Enchantment`,
          bG = null !== (fG = null === ZG || void 0 === ZG || null === (QG = ZG[wG]) || void 0 === QG ? void 0 : QG.description) && void 0 !== fG ? fG : (0, SG.l)(wG);
        yG.push({
          icon: GG,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), yG.push({
          str: bG,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), yG.push({
          str: "\n"
        })
      }
      return yG
    }
  },
  34489: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG,
      h: () => rG,
      i: () => dG,
      j: () => UG,
      n: () => JG,
      p: () => VG,
      t: () => fG,
      v: () => hG,
      x: () => pG
    });
    var wG = ZG(333),
      SG = ZG(604),
      LG = ZG(352),
      yG = ZG(4248),
      kG = ZG(34481);

    function UG(GG, bG) {
      var ZG;
      let {
        player: wG,
        chestOrCreative: SG
      } = GG;
      var LG;
      return bG < wG.length ? null !== (LG = wG[bG]) && void 0 !== LG ? LG : null : null !== (ZG = SG[bG - wG.length]) && void 0 !== ZG ? ZG : null
    }

    function YG(GG) {
      var bG;
      return null !== (bG = GG.amount) && void 0 !== bG ? bG : 0
    }

    function VG(GG) {
      return 0 === GG.button || void 0 === GG.button
    }

    function pG(GG) {
      return !!GG.shiftKey
    }

    function fG(GG) {
      return "touches" in GG || "touch" === GG.pointerType || "pen" === GG.pointerType
    }
    const QG = new Set,
      KG = 50;

    function hG(GG, bG) {
      var ZG;
      const wG = null === (ZG = GG[bG]) || void 0 === ZG ? void 0 : ZG.displayName;
      return (0, SG.L)(wG) ? "string" !== typeof bG ? "" : (!QG.has(bG) && QG.size < KG && (QG.add(bG), console.warn(`No item called "${bG}", so its hover shows the name as given`)), bG) : wG
    }

    function dG(GG, bG, ZG) {
      var UG, YG, VG, pG, fG, QG, KG, dG, JG, rG, zG, EG, oG, XG;
      const uG = GG.attributes,
        iG = null !== (UG = null === (YG = bG[GG.name]) || void 0 === YG ? void 0 : YG.rootName) && void 0 !== UG ? UG : GG.name,
        CG = null !== (VG = null !== (pG = uG.customDisplayName) && void 0 !== pG ? pG : null === (fG = bG[GG.name]) || void 0 === fG ? void 0 : fG.displayName) && void 0 !== VG ? VG : hG(bG, iG);
      let WG = CG;
      const mG = null === (QG = uG.customAttributes) || void 0 === QG ? void 0 : QG.enchantmentTier;
      mG && (WG = (0, LG.Bb)(CG, {
        colour: LG.wb[mG]
      }));
      const IG = null !== (KG = null !== (dG = null !== (JG = function(GG, bG) {
        var ZG;
        if (void 0 === GG || null !== (ZG = bG.customAttributes) && void 0 !== ZG && ZG.author) return GG;
        const SG = (0, wG.xc)(GG);
        return SG.every((GG => "string" === typeof GG)) ? GG : SG.map((GG => "string" === typeof GG ? GG : {
          icon: GG.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(uG.customDescription, uG)) && void 0 !== JG ? JG : null === (rG = bG[GG.name]) || void 0 === rG ? void 0 : rG.description) && void 0 !== dG ? dG : null === (zG = bG[iG]) || void 0 === zG ? void 0 : zG.description) && void 0 !== KG ? KG : "";
      let FG = IG;
      if (null !== (EG = uG.customAttributes) && void 0 !== EG && EG.enchantments) FG = (0, kG.c)(IG, uG.customAttributes.enchantments, uG.customAttributes.enchantmentData);
      else if (ZG[iG]) FG = (0, LG.Bb)(IG), FG.push({
        str: "\n"
      }), FG.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (oG = uG.customAttributes) && void 0 !== oG && oG.mobSettings) {
        var vG, aG;
        const GG = uG.customAttributes.mobSettings;
        var cG, lG;
        if (FG = [], (0, SG.L)(uG.customAttributes.health) || (FG.push({
            str: "\n"
          }), FG.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), FG.push({
            str: " "
          }), FG.push({
            str: uG.customAttributes.health.toString()
          }), (0, SG.L)(GG.maxHealth) || (FG.push({
            str: "/"
          }), FG.push({
            str: GG.maxHealth.toString()
          }))), !(0, SG.L)(GG.attackDamage) && GG.attackDamage > 0 && (FG.push({
            str: "\n"
          }), FG.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), FG.push({
            str: " "
          }), FG.push({
            str: GG.attackDamage.toString()
          })), !(0, SG.L)(GG.secondaryAttackDamage) && GG.secondaryAttackDamage > 0 && (FG.push({
            str: "\n"
          }), FG.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), FG.push({
            str: " "
          }), FG.push({
            str: GG.secondaryAttackDamage.toString()
          })), (0, SG.L)(GG.baseRunningSpeed) || (FG.push({
            str: "\n"
          }), FG.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), FG.push({
            str: " "
          }), FG.push({
            str: GG.baseRunningSpeed.toFixed(2)
          })), "Saddled" === GG.metaInfo) FG.push({
          str: "\n"
        }), FG.push({
          str: {
            translationKey: "general:has"
          }
        }), FG.push({
          str: " "
        }), FG.push({
          icon: null !== (cG = null === (lG = GG.tameInfo) || void 0 === lG ? void 0 : lG.saddleItemName) && void 0 !== cG ? cG : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (FG.push({
            str: "\n"
          }), FG.push({
            str: "\n"
          }), GG.petInfo && null !== (vG = GG.tameInfo) && void 0 !== vG && vG.supportsFriendship) {
          const bG = yG.c.getIconsFromFriendshipPoints(GG.petInfo.friendshipPoints);
          for (const GG of bG) FG.push({
            icon: GG,
            style: {
              fontSize: "1.5em"
            }
          });
          FG.push({
            str: "\n"
          });
          const ZG = yG.c.getMobHungerLevel(GG.petInfo.lastFedAt);
          for (const GG of yG.c.hungerLevelIcons[ZG]) FG.push({
            icon: GG,
            style: {
              fontSize: "1.5em"
            }
          });
          FG.push({
            str: " "
          }), FG.push({
            str: yG.c.hungerLevelTranslations[ZG],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (GG.tameInfo && null !== (aG = GG.tameInfo) && void 0 !== aG && aG.supportsFriendship) {
          var jG, PG;
          let bG = null !== (jG = GG.tameInfo.likedFoods) && void 0 !== jG ? jG : [];
          FG.push({
            str: "\n"
          }), FG.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yG.c.feedTextColours[yG.c.MobFoodType.Superliked]
            }
          }), FG.push({
            str: " "
          }), null !== (PG = GG.petInfo) && void 0 !== PG && PG.superlikedFoodKnown ? (FG.push({
            icon: GG.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), bG = bG.filter((bG => bG !== GG.petInfo.superlikedFood))) : FG.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), FG.push({
            str: "\n"
          }), FG.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yG.c.feedTextColours[yG.c.MobFoodType.Liked]
            }
          }), FG.push({
            str: " "
          });
          for (const GG of bG) FG.push({
            icon: GG,
            style: {
              fontSize: "1.5em"
            }
          });
          FG.push({
            str: "\n"
          }), FG.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yG.c.feedTextColours[yG.c.MobFoodType.Neutral]
            }
          }), FG.push({
            str: " "
          });
          for (const ZG of null !== (MG = GG.tameInfo.neutralFoods) && void 0 !== MG ? MG : []) {
            var MG;
            FG.push({
              icon: ZG,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          FG.push({
            str: "\n"
          }), FG.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yG.c.feedTextColours[yG.c.MobFoodType.Disliked]
            }
          }), FG.push({
            str: " "
          });
          for (const ZG of null !== (AG = GG.tameInfo.dislikedFoods) && void 0 !== AG ? AG : []) {
            var AG;
            FG.push({
              icon: ZG,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        FG.length > 0 ? (FG.shift(), FG.unshift(...(0, LG.Bb)(IG))) : FG = (0, LG.Bb)(IG)
      }
      return {
        name: WG,
        desc: FG,
        fontStyle: null !== (XG = uG.customAttributes) && void 0 !== XG && XG.author ? "italic" : "normal"
      }
    }

    function JG(GG, bG, ZG, wG) {
      const SG = UG(GG, ZG),
        LG = UG(GG, wG);
      if (!SG) return !1;
      const yG = bG[SG.name].armourReduction,
        kG = bG[LG.name].armourReduction;
      if (kG === yG) {
        var YG, VG, pG, fG;
        const GG = null !== (YG = null === (VG = SG.attributes.customAttributes) || void 0 === VG ? void 0 : VG.enchantmentTier) && void 0 !== YG ? YG : "Tier 0",
          bG = null !== (pG = null === (fG = LG.attributes.customAttributes) || void 0 === fG ? void 0 : fG.enchantmentTier) && void 0 !== pG ? pG : "Tier 0";
        return parseInt(GG.replace("Tier ", "")) >= parseInt(bG.replace("Tier ", ""))
      }
      return yG > kG
    }

    function rG(GG) {
      let bG;
      if ("number" === typeof GG) {
        const ZG = document.querySelector(`[data-inven-idx="${GG}"]`);
        if (!ZG) return null;
        bG = ZG.getBoundingClientRect()
      } else bG = GG.getBoundingClientRect();
      return {
        x: bG.left + bG.width / 2,
        y: bG.top + bG.height / 2
      }
    }
  },
  8946: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => JG,
      h: () => EG
    });
    var wG = ZG(51),
      SG = ZG(19),
      LG = ZG(2465),
      yG = ZG(3395);
    const kG = 6,
      UG = 4;

    function YG(GG) {
      let {
        slotsLeft: bG,
        slotsRight: ZG,
        width: wG,
        height: SG,
        zoneRight: LG,
        rowTop: yG,
        besideBottom: YG,
        obstacles: VG
      } = GG;
      const pG = Math.max(0, Math.floor(ZG - bG - wG)),
        fG = null === LG ? 0 : Math.min(pG, Math.max(0, Math.ceil(LG + kG - bG))),
        QG = bG + fG - kG,
        KG = bG + fG + wG + kG,
        hG = VG.filter((GG => GG.left < KG && GG.right > QG));
      let dG = YG;
      for (let kG = 0; kG <= hG.length; kG++) {
        const GG = hG.filter((GG => GG.top < dG + UG && GG.bottom > dG - SG - UG));
        if (0 === GG.length) break;
        dG = Math.min(...GG.map((GG => GG.top))) - UG
      }
      return {
        shift: fG,
        rise: dG === YG ? null : Math.ceil(yG - dG)
      }
    }

    function VG(GG) {
      return Array.from(GG.children).filter((GG => !GG.classList.contains("HotBarRow")))
    }

    function pG(GG) {
      return function(GG) {
        const bG = [],
          ZG = (GG, wG) => {
            const SG = GG.getBoundingClientRect();
            if (SG.width > 0 && SG.height > 0) bG.push(GG);
            else if (wG < 2)
              for (const bG of Array.from(GG.children)) ZG(bG, wG + 1)
          };
        for (const wG of GG) ZG(wG, 0);
        return bG
      }(VG(GG).flatMap((GG => GG.classList.contains("AuraBarWrapper") ? [] : GG.classList.contains("BottomScreenStatBarList") ? Array.from(GG.children) : [GG])))
    }

    function fG(GG) {
      var bG;
      const ZG = GG.getBoundingClientRect();
      if (0 === ZG.width) return null;
      const wG = null === (bG = GG.parentElement) || void 0 === bG ? void 0 : bG.getBoundingClientRect();
      return wG && wG.width > 0 ? Math.min(ZG.right, wG.left + wG.width * QG) : ZG.right
    }
    const QG = .35,
      KG = new WeakMap,
      hG = ".BottomScreenMessage, [role='status']",
      dG = new WeakMap;

    function JG(GG) {
      rG(GG) && rG(GG)
    }

    function rG(GG) {
      var bG, ZG, wG, SG, LG, yG;
      const kG = GG.documentElement.classList;
      if (!kG.contains("TouchHotbar") || kG.contains("TouchHotbarKeysAbove") || kG.contains("HudMove-inventory") || kG.contains("HudLocked-inventory") || null === (bG = GG.defaultView) || void 0 === bG || null === (ZG = bG.matchMedia) || void 0 === ZG || !ZG.call(bG, zG).matches) return !1;
      const VG = GG.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        QG = null === VG || void 0 === VG ? void 0 : VG.parentElement,
        JG = null === VG || void 0 === VG ? void 0 : VG.closest(".BottomMiddleElements"),
        rG = null === JG || void 0 === JG ? void 0 : JG.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!VG || !QG || !JG || !rG || JG.classList.contains("TouchInventoryOpen")) return !1;
      const EG = VG.getBoundingClientRect();
      if (0 === EG.width) return !1;
      const oG = GG.querySelector(".JoystickZone"),
        XG = rG.getBoundingClientRect(),
        uG = QG.getBoundingClientRect().top,
        iG = null === (wG = JG.querySelector(":scope > .AuraBarWrapper")) || void 0 === wG ? void 0 : wG.getBoundingClientRect(),
        CG = pG(JG),
        WG = {
          slotsLeft: XG.left,
          slotsRight: XG.right,
          width: EG.width,
          height: EG.height,
          zoneRight: oG ? fG(oG) : null,
          rowTop: uG,
          besideBottom: (iG && iG.height > 0 ? iG.top : uG) - UG,
          obstacles: CG.map((GG => GG.getBoundingClientRect()))
        },
        mG = YG({
          ...WG,
          obstacles: CG.filter((GG => !GG.matches(hG))).map((GG => GG.getBoundingClientRect()))
        }),
        IG = GG.defaultView,
        FG = `${null===IG||void 0===IG?void 0:IG.innerWidth}x${null===IG||void 0===IG?void 0:IG.innerHeight}:${mG.shift}:${Math.round(EG.width)}:${Math.round(uG)}`,
        vG = dG.get(JG),
        aG = (null === vG || void 0 === vG ? void 0 : vG.at) === FG ? (cG = vG.rise, lG = mG.rise, null === cG ? lG : null === lG ? cG : Math.max(cG, lG)) : mG.rise;
      var cG, lG;
      const jG = YG({
          ...WG,
          besideBottom: null === aG ? WG.besideBottom : uG - aG
        }),
        PG = {
          shift: mG.shift,
          rise: null !== (SG = jG.rise) && void 0 !== SG ? SG : aG
        },
        MG = KG.get(JG);
      return (null !== (LG = null === MG || void 0 === MG ? void 0 : MG.shift) && void 0 !== LG ? LG : 0) === PG.shift && dG.set(JG, {
        at: FG,
        rise: aG
      }), (null === MG || void 0 === MG ? void 0 : MG.shift) !== PG.shift && JG.style.setProperty("--touch-shop-above-shift", `${PG.shift}px`), (null === MG || void 0 === MG ? void 0 : MG.rise) !== PG.rise && (JG.classList.toggle("ShopAboveUp", null !== PG.rise), null === PG.rise ? JG.style.removeProperty("--touch-shop-above-rise") : JG.style.setProperty("--touch-shop-above-rise", `${PG.rise}px`)), KG.set(JG, PG), (null !== (yG = null === MG || void 0 === MG ? void 0 : MG.shift) && void 0 !== yG ? yG : 0) !== PG.shift
    }
    const zG = "(orientation: landscape) and (max-height: 500px)";

    function EG(GG, bG, ZG) {
      (0, wG.useLayoutEffect)((() => {
        var bG;
        const wG = null === (bG = GG.current) || void 0 === bG ? void 0 : bG.closest(".BottomMiddleElements");
        if (!wG || ZG) return;
        const kG = new ResizeObserver((() => {
            QG(!1)
          })),
          UG = () => {
            kG.disconnect();
            const GG = document.querySelector(".JoystickZone");
            for (const bG of [GG, wG, wG.querySelector(".HotBarGameItemsContainer"), ...pG(wG)]) bG && kG.observe(bG)
          };
        let YG = null,
          fG = !1;
        const QG = GG => {
            fG ||= GG, YG ??= requestAnimationFrame((() => {
              YG = null, fG && (fG = !1, UG()), JG(document)
            }))
          },
          KG = new MutationObserver((() => {
            QG(!0)
          }));
        KG.observe(wG, {
          childList: !0
        });
        for (const GG of VG(wG)) KG.observe(GG, {
          childList: !0,
          subtree: !0
        });
        JG(document), UG();
        const hG = () => {
            QG(!0)
          },
          dG = [(0, SG.p)(LG.e, hG), (0, SG.p)(yG.e, hG)];
        return () => {
          null !== YG && cancelAnimationFrame(YG), kG.disconnect(), KG.disconnect();
          for (const GG of dG) GG()
        }
      }), [GG, bG, ZG])
    }
  },
  34376: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => QG,
      g: () => KG,
      h: () => hG
    });
    var wG = ZG(1393),
      SG = ZG(51),
      LG = ZG(1275),
      yG = ZG(4549),
      kG = ZG(2348),
      UG = ZG(1151),
      YG = ZG(80),
      VG = ZG(1945),
      pG = ZG(1302),
      fG = ZG(1067);

    function QG(GG) {
      let {
        show: bG,
        onClose: ZG
      } = GG;
      const {
        requestedGameNameWithVariation: wG,
        lobbyName: SG,
        shownLobbyName: LG
      } = (0, VG.f)("connectedGame"), UG = (0, kG.b)(wG, SG, !1);
      return YG.featureFlags.canUseInviteLinks && (0, fG.jsx)(yG.b, {
        show: bG,
        close: ZG,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, fG.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, fG.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, fG.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, fG.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === UG ? (0, fG.jsx)(pG.b, {}) : UG, (0, fG.jsx)("br", {}), "Lobby Name: ", LG, (0, fG.jsx)("br", {}), (0, fG.jsx)("br", {}), (0, fG.jsx)("br", {}), (0, fG.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, fG.jsx)(KG, {})]
        })
      })
    }

    function KG() {
      var GG;
      const {
        t: bG
      } = (0, UG.w)(), ZG = null !== (GG = hG(YG.featureFlags.canUseInviteLinks)) && void 0 !== GG ? GG : "Loading Link...", [LG, yG] = (0, SG.useState)(0), [kG, VG] = (0, SG.useReducer)((GG => GG + 1), 0);
      return (0, SG.useEffect)((() => {
        const GG = setTimeout((() => {
          VG()
        }), 1100);
        return () => {
          clearTimeout(GG)
        }
      }), [LG]), YG.featureFlags.canUseInviteLinks && (0, fG.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, fG.jsx)("div", {
          className: "InviteLinkInner",
          children: ZG
        }), (0, fG.jsx)(wG.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(ZG).catch((GG => {
              console.error("Failed to copy invite link:", GG)
            })), yG(Date.now())
          },
          disabled: Date.now() - LG < 1e3,
          children: Date.now() - LG < 1e3 ? bG("general:copied") : bG("general:copy")
        })]
      })
    }

    function hG(GG) {
      const [bG, ZG] = (0, SG.useState)(null);
      return (0, SG.useEffect)((() => {
        if (!GG) return;
        let bG = !0;
        return (0, LG.B)().then((GG => {
          bG && ZG(GG)
        })).catch((GG => {
          console.error("Failed to get invite link:", GG)
        })), () => {
          bG = !1
        }
      }), [GG]), bG
    }
  },
  34466: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1945),
      kG = ZG(1067);

    function UG(GG) {
      const bG = Math.floor(GG / 3600),
        ZG = Math.floor(GG % 3600 / 60),
        wG = Math.floor(GG % 60),
        SG = `${ZG.toString().padStart(2,"0")}:${wG.toString().padStart(2,"0")}`;
      return bG > 0 ? `${bG}:${SG}` : SG
    }
    const YG = (0, wG.memo)((function(GG) {
      let {
        className: bG
      } = GG;
      const {
        recording: ZG,
        seconds: wG
      } = (0, yG.f)("replayRecorder");
      return ZG ? (0, kG.jsxs)("div", {
        className: LG()("RecordingIndicator", bG),
        children: [(0, kG.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, kG.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, kG.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: UG(wG)
        })]
      }) : null
    }))
  },
  34472: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(4558),
      SG = ZG(4561);

    function LG(GG) {
      let {
        children: bG,
        showing: ZG,
        globallyUniqueKey: LG,
        alwaysMountChildren: yG = !1,
        doGameplayStartStopOnShow: kG = !0,
        keepsMovement: UG = !1
      } = GG;
      return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
    }
  },
  6580: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(51),
      SG = ZG(29);

    function LG(GG, bG) {
      var ZG;
      const [LG, yG] = (0, wG.useState)(null !== (ZG = SG.h.getItem(GG)) && void 0 !== ZG ? ZG : bG);
      return [LG, bG => {
        SG.h.setItem(GG, bG), yG(bG)
      }]
    }
  },
  8942: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => LG,
      c: () => SG,
      d: () => kG,
      e: () => wG,
      f: () => hG,
      g: () => QG,
      i: () => VG,
      l: () => yG,
      p: () => dG,
      q: () => pG,
      t: () => UG,
      u: () => fG,
      x: () => YG,
      y: () => KG
    });
    const wG = GG => ({
      left: GG.left,
      top: GG.top,
      right: GG.right,
      bottom: GG.bottom
    });

    function SG(GG) {
      return {
        x: (GG.left + GG.right) / 2,
        y: (GG.top + GG.bottom) / 2
      }
    }

    function LG(GG) {
      return 0 === GG.length ? null : GG.reduce(((GG, bG) => ({
        left: Math.min(GG.left, bG.left),
        top: Math.min(GG.top, bG.top),
        right: Math.max(GG.right, bG.right),
        bottom: Math.max(GG.bottom, bG.bottom)
      })))
    }

    function yG(GG, bG) {
      const ZG = Math.max(0, (bG - (GG.right - GG.left)) / 2),
        wG = Math.max(0, (bG - (GG.bottom - GG.top)) / 2);
      return {
        left: GG.left - ZG,
        top: GG.top - wG,
        right: GG.right + ZG,
        bottom: GG.bottom + wG
      }
    }

    function kG(GG, bG) {
      return bG.x >= GG.left && bG.x <= GG.right && bG.y >= GG.top && bG.y <= GG.bottom
    }

    function UG(GG, bG, ZG) {
      let wG = null,
        LG = 1 / 0;
      for (const {
          id: SG,
          box: yG
        }
        of bG) {
        const bG = (yG.right - yG.left) * (yG.bottom - yG.top);
        kG(yG, GG) && bG < LG && (LG = bG, wG = SG)
      }
      if (null !== wG) return wG;
      let UG = 1 / 0;
      for (const {
          id: YG,
          box: VG
        }
        of bG) {
        if (!kG(yG(VG, ZG), GG)) continue;
        const bG = SG(VG),
          LG = Math.hypot(GG.x - bG.x, GG.y - bG.y);
        LG < UG && (UG = LG, wG = YG)
      }
      return wG
    }

    function YG(GG, bG, ZG) {
      return {
        left: ZG.left,
        top: ZG.top,
        right: GG - ZG.right,
        bottom: bG - ZG.bottom
      }
    }

    function VG(GG, bG, ZG, wG) {
      const SG = (GG, bG, ZG) => Math.max(Math.min(bG, 0), Math.min(Math.max(ZG, 0), GG));
      return {
        x: SG(bG, wG.left - GG.left, wG.right - GG.right),
        y: SG(ZG, wG.top - GG.top, wG.bottom - GG.bottom)
      }
    }

    function pG(GG, bG, ZG, wG, SG) {
      const LG = GG.dx * wG + bG,
        yG = GG.dy * SG + ZG,
        kG = GG => Math.max(-1, Math.min(1, GG));
      return {
        dx: kG(LG / wG),
        dy: kG(yG / SG)
      }
    }

    function fG(GG, bG, ZG, wG) {
      return bG <= 0 || ZG <= 0 ? 1 : Math.max(.05, Math.min(1, GG / bG, wG / ZG))
    }

    function QG(GG, bG, ZG) {
      return Math.min(GG.right, bG.right) - Math.max(GG.left, bG.left) > ZG && Math.min(GG.bottom, bG.bottom) - Math.max(GG.top, bG.top) > ZG
    }

    function KG(GG, bG) {
      const ZG = (GG, bG, ZG, wG) => bG - GG > wG - ZG ? ZG - GG > bG - wG ? wG - bG : ZG - GG : GG < ZG ? ZG - GG : bG > wG ? wG - bG : 0;
      return {
        x: ZG(GG.left, GG.right, bG.left, bG.right),
        y: ZG(GG.top, GG.bottom, bG.top, bG.bottom)
      }
    }

    function hG(GG, bG, ZG) {
      return QG(GG, {
        left: 0,
        top: 0,
        right: bG,
        bottom: ZG
      }, 0)
    }

    function dG(GG, bG) {
      let {
        avoid: ZG = null,
        bounds: wG = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, SG = 0, LG = 1 / 0;
      return GG.forEach(((GG, yG) => {
        const kG = bG.filter((bG => QG(GG, bG, 0))).length,
          UG = null !== wG && (GG.left < wG.left || GG.top < wG.top || GG.right > wG.right || GG.bottom > wG.bottom),
          YG = kG + (ZG && QG(GG, ZG, 0) ? 1e3 : 0) + (UG ? 1e6 : 0);
        YG < LG && (SG = yG, LG = YG)
      })), SG
    }
  },
  8944: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG,
      e: () => LG,
      f: () => SG,
      h: () => yG,
      l: () => pG,
      n: () => VG,
      o: () => YG,
      s: () => UG
    });
    var wG = ZG(2441);
    const SG = ["J", "C", "A", "P", "U", "X", "G"],
      LG = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function yG(GG) {
      return GG ? ["X"] : ["P", "X"]
    }
    const kG = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: wG.K,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function UG(GG, bG, ZG) {
      const wG = GG.querySelector(".InGameUi .TouchComponentsButtons");
      if (!wG) return kG;
      const LG = {},
        yG = {};
      for (const kG of SG) {
        const GG = wG.querySelector(`.TouchSlot${kG} > .TouchKey`);
        if (GG) {
          var UG, YG;
          LG[kG] = GG.cloneNode(!0);
          const bG = (null !== (UG = null === (YG = GG.querySelector(".TouchKeyLabel")) || void 0 === YG ? void 0 : YG.textContent) && void 0 !== UG ? UG : "").split(/\s+/).filter((GG => !/[\d\xd7]/.test(GG))).join(" ");
          bG && (yG[kG] = bG)
        }
      }
      const VG = bG => {
          const ZG = GG.querySelector(`.InGameUi ${bG}`);
          return null !== ZG && !ZG.classList.contains("Hidden")
        },
        pG = [...GG.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((GG => GG.cloneNode(!0)));
      return {
        faces: Object.keys(LG).length > 0 ? LG : null,
        names: yG,
        shop: VG(".TouchInventoryKey.ShopKey"),
        bag: VG(".TouchInventoryKey.BagKey"),
        sprint: VG(".TouchSprintHit"),
        items: pG.length > 0 ? pG : null,
        rowIcons: bG,
        pinnedIcons: ZG
      }
    }

    function YG(GG, bG) {
      const ZG = {};
      for (const wG of [...yG(bG), "G"]) {
        const bG = GG.names[wG];
        bG && (ZG[LG[wG]] = bG)
      }
      return ZG
    }

    function VG(GG, bG) {
      const {
        faces: ZG
      } = GG;
      if (null === ZG) return [];
      const wG = new Set(Object.keys(ZG).map((GG => LG[GG])));
      return yG(bG).filter((GG => !wG.has(LG[GG])))
    }

    function pG(GG, bG) {
      GG.replaceChildren(...[...bG.childNodes].map((GG => GG.cloneNode(!0))))
    }
  },
  34391: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      g: () => wG
    });
    const wG = "image/jpeg",
      SG = "jpg"
  },
  34393: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      f: () => YG,
      j: () => VG
    });
    var wG = ZG(1634),
      SG = ZG(3180),
      LG = ZG(80),
      yG = ZG(1721),
      kG = ZG(34391);

    function UG() {
      return !(0, LG.isMobileApp)() || wG.c.supports("photos")
    }
    async function YG(GG) {
      var bG, ZG;
      if ((0, LG.isMobileApp)()) {
        const {
          saved: bG
        } = await wG.c.request("photos.save", {
          data: await (0, SG.g)(GG),
          mimeType: kG.g
        });
        return bG ? "saved" : "denied"
      }
      return (0, LG.isIOS)() && null !== (bG = (ZG = navigator).canShare) && void 0 !== bG && bG.call(ZG, {
        files: [GG]
      }) ? VG(GG) : ((0, yG.b)(GG, GG.name), "saved")
    }
    async function VG(GG) {
      try {
        return await navigator.share({
          files: [GG]
        }), "shared"
      } catch (bG) {
        if (bG instanceof DOMException && "AbortError" === bG.name) return "RZ";
        if (bG instanceof DOMException && "NotAllowedError" === bG.name) return "needsTap";
        throw bG
      }
    }
  },
  34384: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      g: () => VG,
      k: () => pG
    });
    var wG = ZG(17),
      SG = ZG(34362),
      LG = ZG(1579),
      yG = ZG(34391);
    const kG = 8294400,
      UG = .92;

    function YG() {
      (0, LG.h)(), wG.e.set({
        screenshotMode: !0
      })
    }

    function VG() {
      wG.e.set({
        screenshotMode: !1
      })
    }
    async function pG() {
      const {
        width: GG,
        height: bG,
        scale: ZG
      } = function(GG, bG, ZG) {
        const wG = Math.max(1, GG),
          SG = Math.max(1, bG),
          LG = Math.min(Math.max(1, ZG), Math.sqrt(kG / (wG * SG)));
        return {
          width: Math.round(wG * LG),
          height: Math.round(SG * LG),
          scale: LG
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: wG
      } = await SG.devTools.capturePhoto(GG, bG, {
        scale: ZG,
        type: yG.g,
        quality: UG
      });
      return new File([wG], function(GG) {
        const bG = GG => String(GG).padStart(2, "0"),
          ZG = `${GG.getFullYear()}${bG(GG.getMonth()+1)}${bG(GG.getDate())}`,
          wG = `${bG(GG.getHours())}${bG(GG.getMinutes())}${bG(GG.getSeconds())}`;
        return `bloxd-${ZG}-${wG}.${yG.e}`
      }(new Date), {
        type: yG.g
      })
    }
  },
  8719: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => wG
    });
    const wG = "controllerOpenKeyboard",
      SG = "controllerKeyboardVisible"
  },
  34368: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    const wG = new Set(["chunkBorders"])
  },
  34362: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ALL_DEV_TOOLS: () => yG,
      coreDevTools: () => YG,
      devTools: () => UG
    });
    var wG = ZG(631),
      SG = ZG(1260),
      LG = ZG(34368);
    const yG = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function kG() {
      const {
        noaDevTools: GG
      } = await ZG.e(242).then((() => ZG(41454)));
      return GG
    }
    const UG = new class {
        constructor() {
          this.loadHost = kG, this.tools = yG
        }
        setHost(GG) {
          this.tools = null === GG ? yG : GG.tools, this.loadHost = null === GG ? kG : async () => GG
        }
        supports(GG) {
          return this.tools.has(GG)
        }
        async downloadScene(GG, bG) {
          const ZG = await this.loadHost();
          await ZG.downloadScene(GG, bG)
        }
        async setAmbientLightIntensity(GG) {
          const bG = await this.loadHost();
          await bG.setAmbientLightIntensity(GG)
        }
        async capturePhoto(GG, bG, ZG) {
          return (await this.loadHost()).capturePhoto(GG, bG, ZG)
        }
      },
      YG = {
        tools: LG.b,
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
    wG.B && UG.setHost(YG), (0, SG.u)((() => {
      UG.setHost(YG)
    }))
  },
  34519: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG,
      e: () => SG,
      f: () => VG
    });
    var wG = ZG(1509);

    function SG(GG) {
      var bG;
      return {
        ...yG.store,
        yaw: yG.store.yaw + (null !== (bG = wG.d[GG].previewYaw) && void 0 !== bG ? bG : 0)
      }
    }
    const LG = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yG = {
        player: LG,
        store: {
          ...LG,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kG(GG, bG) {
      GG instanceof Promise ? GG.then(bG).catch((GG => {
        console.error("Couldn't open the preview", GG)
      })) : bG(GG)
    }
    class UG {
      constructor(GG) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kG(GG, (GG => {
          this.closed ? GG.close() : (this.opened = GG, null !== this.size && GG.resize(this.size.width, this.size.height), null !== this.view && GG.show(this.view))
        }))
      }
      show(GG) {
        var bG;
        this.view = GG, null === (bG = this.opened) || void 0 === bG || bG.show(GG)
      }
      resize(GG, bG) {
        var ZG;
        this.size = {
          width: GG,
          height: bG
        }, null === (ZG = this.opened) || void 0 === ZG || ZG.resize(GG, bG)
      }
      close() {
        var GG;
        this.closed = !0, null === (GG = this.opened) || void 0 === GG || GG.close(), this.opened = null
      }
    }
    class YG {
      constructor(GG) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(GG).then((GG => GG.ready)), kG(GG, (GG => {
          this.closed ? GG.close() : (this.opened = GG, null !== this.size && GG.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var GG, bG;
        return null !== (GG = null === (bG = this.opened) || void 0 === bG ? void 0 : bG.isReady()) && void 0 !== GG && GG
      }
      setCosmetic(GG, bG) {
        var ZG;
        null === (ZG = this.opened) || void 0 === ZG || ZG.setCosmetic(GG, bG)
      }
      playEmote(GG) {
        var bG;
        null === (bG = this.opened) || void 0 === bG || bG.playEmote(GG)
      }
      setOrbit(GG) {
        var bG;
        null === (bG = this.opened) || void 0 === bG || bG.setOrbit(GG)
      }
      resetCamera() {
        var GG;
        null === (GG = this.opened) || void 0 === GG || GG.resetCamera()
      }
      async untilDrawn(GG) {
        var bG;
        await this.ready, await (null === (bG = this.opened) || void 0 === bG ? void 0 : bG.untilDrawn(GG))
      }
      resize(GG, bG) {
        var ZG;
        this.size = {
          width: GG,
          height: bG
        }, null === (ZG = this.opened) || void 0 === ZG || ZG.resize(GG, bG)
      }
      close() {
        var GG;
        this.closed = !0, null === (GG = this.opened) || void 0 === GG || GG.close(), this.opened = null
      }
    }
    const VG = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(GG) {
        this.host = GG
      }
      setDefaultHost(GG) {
        this.makeDefault = GG
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(GG) {
        return new UG(this.current().openMob(GG))
      }
      openPet(GG) {
        return new UG(this.current().openPet(GG))
      }
      openMobLineup(GG) {
        return new UG(this.current().openMobLineup(GG))
      }
      openCharacter(GG, bG) {
        return new YG(this.current().openCharacter(GG, bG))
      }
    }
  },
  34515: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG.b,
      c: () => wG.e,
      d: () => wG.f
    });
    var wG = ZG(34519);
    class SG {
      constructor(GG) {
        this.load = GG, this.loaded = null, this.loading = null
      }
      run(GG) {
        return null !== this.loaded ? GG(this.loaded) : (this.loading ??= this.load().then((GG => (this.loaded = GG, GG)), (GG => {
          throw this.loading = null, GG
        })), this.loading.then(GG))
      }
    }
    class LG {
      constructor() {
        this.mobScene = new SG((() => Promise.all([ZG.e(73), ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(98), ZG.e(259), ZG.e(76), ZG.e(75), ZG.e(256), ZG.e(74), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(279), ZG.e(233), ZG.e(249), ZG.e(261), ZG.e(264), ZG.e(78), ZG.e(188), ZG.e(227), ZG.e(97), ZG.e(239), ZG.e(230), ZG.e(246), ZG.e(121), ZG.e(247), ZG.e(77), ZG.e(251)]).then((() => ZG(41472))))), this.characterScene = new SG((() => Promise.all([ZG.e(73), ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(98), ZG.e(259), ZG.e(76), ZG.e(75), ZG.e(256), ZG.e(74), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(279), ZG.e(233), ZG.e(249), ZG.e(261), ZG.e(264), ZG.e(78), ZG.e(188), ZG.e(227), ZG.e(97), ZG.e(239), ZG.e(230), ZG.e(246), ZG.e(121), ZG.e(247), ZG.e(77), ZG.e(250)]).then((() => ZG(41579)))))
      }
      openMob(GG) {
        return this.mobScene.run((bG => bG.openMobPreview(GG)))
      }
      openPet(GG) {
        return this.mobScene.run((bG => bG.openPetPreview(GG)))
      }
      openMobLineup(GG) {
        return this.mobScene.run((bG => bG.openMobLineupPreview(GG)))
      }
      openCharacter(GG, bG) {
        return this.characterScene.run((ZG => ZG.openCharacterPreview(GG, bG)))
      }
    }
    wG.f.setDefaultHost((() => new LG))
  },
  6661: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      e: () => LG
    });
    var wG = ZG(29);
    const SG = "shaderPack";
    async function LG() {
      var GG;
      let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (GG = await wG.e.getItem(SG, bG)) && void 0 !== GG ? GG : null
    }
  },
  8926: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      i: () => UG
    });
    var wG = ZG(17),
      SG = ZG(1287),
      LG = ZG(80);
    const yG = {
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

    function kG() {
      return (0, LG.isMobile)() && "function" === typeof navigator.vibrate
    }
    const UG = new class {
      constructor(GG) {
        this.deps = GG, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(GG, bG) {
        var ZG;
        if (!this.deps.enabled()) return;
        const wG = yG[GG],
          SG = null !== bG && void 0 !== bG ? bG : wG.pattern;
        if (null === SG) return void console.warn("No vibration pattern for", GG);
        const LG = this.deps.now();
        LG - this.lastAnyAt < 40 && wG.priority < this.playingPriority || LG - (null !== (ZG = this.lastAt.get(GG)) && void 0 !== ZG ? ZG : -1 / 0) < wG.minGapMs || LG < this.playingUntil && wG.priority < this.playingPriority || (this.lastAt.set(GG, LG), this.lastAnyAt = LG, this.playingUntil = LG + SG.reduce(((GG, bG) => GG + bG), 0), this.playingPriority = wG.priority, this.deps.vibrate(SG))
      }
    }({
      vibrate: GG => {
        navigator.vibrate([...GG])
      },
      now: () => performance.now(),
      enabled: () => kG() && wG.e.get("isTouchScreen") && wG.e.get("clientEscMenuOptions").vibration && !(0, SG.f)()
    })
  },
  34400: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      e: () => pG,
      g: () => VG
    });
    var wG = ZG(17),
      SG = ZG(1634),
      LG = ZG(29),
      yG = ZG(3658);
    const kG = 2592e5,
      UG = "notificationOptInLastPromptedAt";
    async function YG() {
      var GG;
      const bG = null !== (GG = LG.h.getItem(UG)) && void 0 !== GG ? GG : 0;
      return Date.now() - bG < kG ? null : pG()
    }

    function VG() {
      LG.h.setItem(UG, Date.now())
    }
    async function pG() {
      return await SG.c.ready, SG.c.supports("notifications") ? wG.e.get("mobilePushNotificationsCanAsk") ? async () => {
        SG.c.request("notifications.requestPermission", {}).then((GG => {
          let {
            canAsk: bG
          } = GG;
          wG.e.set({
            mobilePushNotificationsCanAsk: bG
          })
        }), (GG => {
          console.error("The app couldn't ask for push notifications:", GG)
        }))
      }: null: await yG.c.canAsk() ? () => yG.c.requestPermission() : null
    }
  },
  8830: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return !GG.hidden && (bG || !GG.isRewardedAd)
    }

    function SG(GG) {
      return "object" === typeof GG ? GG.option : GG
    }

    function LG(GG, bG) {
      var ZG;
      if ("dropdown" === (null === (ZG = GG.userInput) || void 0 === ZG ? void 0 : ZG.type) && "object" === typeof GG.userInput.dropdownOptions[0]) {
        for (const ZG of GG.userInput.dropdownOptions)
          if (SG(ZG) === bG) return "object" === typeof ZG ? ZG.cost : GG.cost;
        console.error("Didn't find matching option for dropdown item. Item:", GG, "input:", bG)
      }
      return GG.cost
    }

    function yG(GG, bG, ZG) {
      var wG;
      const SG = null !== (wG = ZG.excludedPlayers) && void 0 !== wG ? wG : [bG];
      return GG.filter((GG => !SG.includes(GG)))
    }
    ZG.d(bG, {
      d: () => LG,
      h: () => SG,
      k: () => yG,
      m: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);