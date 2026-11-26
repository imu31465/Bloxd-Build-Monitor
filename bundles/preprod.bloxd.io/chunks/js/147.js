export const id = 147;
export const ids = [147, 214];
export const modules = {
  34794: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(353),
      DB = GB(34799);

    function QB(BB, OB, GB) {
      const QB = Object.entries(OB).sort(((BB, OB) => OB[1] - BB[1])),
        oB = (0, YB.zb)(BB);
      oB.push(BB ? "\n\n" : "\n");
      for (const [DB, pB] of QB) {
        var jB, yB, JB;
        const BB = null !== (jB = null === GB || void 0 === GB || null === (yB = GB[DB]) || void 0 === yB ? void 0 : yB.icon) && void 0 !== jB ? jB : `${DB} Enchantment`;
        oB.push({
          icon: BB,
          style: {
            fontSize: "1.5rem"
          }
        }), oB.push({
          str: `${DB} ${null!==(JB=(0,YB.S)(pB))&&void 0!==JB?JB:pB}\n`
        })
      }
      oB.push({
        str: "\n"
      });
      for (const [YB, pB] of QB) {
        var MB, PB, zB, lB;
        const BB = null !== (MB = null === GB || void 0 === GB || null === (PB = GB[YB]) || void 0 === PB ? void 0 : PB.icon) && void 0 !== MB ? MB : `${YB} Enchantment`,
          OB = null !== (zB = null === GB || void 0 === GB || null === (lB = GB[YB]) || void 0 === lB ? void 0 : lB.description) && void 0 !== zB ? zB : (0, DB.h)(YB);
        oB.push({
          icon: BB,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), oB.push({
          str: OB,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), oB.push({
          str: "\n"
        })
      }
      return oB
    }
  },
  34807: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => PB,
      d: () => JB,
      f: () => RB,
      j: () => ZB,
      m: () => yB,
      n: () => NB,
      p: () => MB,
      t: () => zB,
      x: () => qB
    });
    var YB = GB(331),
      DB = GB(641),
      QB = GB(353),
      oB = GB(4634),
      jB = GB(34794);

    function yB(BB, OB) {
      var GB;
      let {
        player: YB,
        chestOrCreative: DB
      } = BB;
      var QB;
      return OB < YB.length ? null !== (QB = YB[OB]) && void 0 !== QB ? QB : null : null !== (GB = DB[OB - YB.length]) && void 0 !== GB ? GB : null
    }

    function JB(BB) {
      var OB;
      return null !== (OB = BB.amount) && void 0 !== OB ? OB : 0
    }

    function MB(BB) {
      return 0 === BB.button || void 0 === BB.button
    }

    function PB(BB) {
      return !!BB.shiftKey
    }

    function zB(BB) {
      return "touches" in BB || "touch" === BB.pointerType || "pen" === BB.pointerType
    }
    const lB = new Set,
      pB = 50;

    function qB(BB, OB) {
      var GB;
      const YB = null === (GB = BB[OB]) || void 0 === GB ? void 0 : GB.displayName;
      return (0, DB.Q)(YB) ? "string" !== typeof OB ? "" : (!lB.has(OB) && lB.size < pB && (lB.add(OB), console.warn(`No item called "${OB}", so its hover shows the name as given`)), OB) : YB
    }

    function ZB(BB, OB, GB) {
      var yB, JB, MB, PB, zB, lB, pB, ZB, NB, RB, WB, AB, VB, SB;
      const nB = BB.attributes,
        UB = null !== (yB = null === (JB = OB[BB.name]) || void 0 === JB ? void 0 : JB.rootName) && void 0 !== yB ? yB : BB.name,
        fB = null !== (MB = null !== (PB = nB.customDisplayName) && void 0 !== PB ? PB : null === (zB = OB[BB.name]) || void 0 === zB ? void 0 : zB.displayName) && void 0 !== MB ? MB : qB(OB, UB);
      let kB = fB;
      const dB = null === (lB = nB.customAttributes) || void 0 === lB ? void 0 : lB.enchantmentTier;
      dB && (kB = (0, QB.zb)(fB, {
        colour: QB.ub[dB]
      }));
      const KB = null !== (pB = null !== (ZB = null !== (NB = function(BB, OB) {
        var GB;
        if (void 0 === BB || null !== (GB = OB.customAttributes) && void 0 !== GB && GB.author) return BB;
        const DB = (0, YB.hc)(BB);
        return DB.every((BB => "string" === typeof BB)) ? BB : DB.map((BB => "string" === typeof BB ? BB : {
          icon: BB.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(nB.customDescription, nB)) && void 0 !== NB ? NB : null === (RB = OB[BB.name]) || void 0 === RB ? void 0 : RB.description) && void 0 !== ZB ? ZB : null === (WB = OB[UB]) || void 0 === WB ? void 0 : WB.description) && void 0 !== pB ? pB : "";
      let uB = KB;
      if (null !== (AB = nB.customAttributes) && void 0 !== AB && AB.enchantments) uB = (0, jB.d)(KB, nB.customAttributes.enchantments, nB.customAttributes.enchantmentData);
      else if (GB[UB]) uB = (0, QB.zb)(KB), uB.push({
        str: "\n"
      }), uB.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (VB = nB.customAttributes) && void 0 !== VB && VB.mobSettings) {
        var mB, IB;
        const BB = nB.customAttributes.mobSettings;
        var FB, iB;
        if (uB = [], (0, DB.Q)(nB.customAttributes.health) || (uB.push({
            str: "\n"
          }), uB.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), uB.push({
            str: " "
          }), uB.push({
            str: nB.customAttributes.health.toString()
          }), (0, DB.Q)(BB.maxHealth) || (uB.push({
            str: "/"
          }), uB.push({
            str: BB.maxHealth.toString()
          }))), !(0, DB.Q)(BB.attackDamage) && BB.attackDamage > 0 && (uB.push({
            str: "\n"
          }), uB.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), uB.push({
            str: " "
          }), uB.push({
            str: BB.attackDamage.toString()
          })), !(0, DB.Q)(BB.secondaryAttackDamage) && BB.secondaryAttackDamage > 0 && (uB.push({
            str: "\n"
          }), uB.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), uB.push({
            str: " "
          }), uB.push({
            str: BB.secondaryAttackDamage.toString()
          })), (0, DB.Q)(BB.baseRunningSpeed) || (uB.push({
            str: "\n"
          }), uB.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), uB.push({
            str: " "
          }), uB.push({
            str: BB.baseRunningSpeed.toFixed(2)
          })), "Saddled" === BB.metaInfo) uB.push({
          str: "\n"
        }), uB.push({
          str: {
            translationKey: "general:has"
          }
        }), uB.push({
          str: " "
        }), uB.push({
          icon: null !== (FB = null === (iB = BB.tameInfo) || void 0 === iB ? void 0 : iB.saddleItemName) && void 0 !== FB ? FB : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (uB.push({
            str: "\n"
          }), uB.push({
            str: "\n"
          }), BB.petInfo && null !== (mB = BB.tameInfo) && void 0 !== mB && mB.supportsFriendship) {
          const OB = oB.d.getIconsFromFriendshipPoints(BB.petInfo.friendshipPoints);
          for (const BB of OB) uB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          uB.push({
            str: "\n"
          });
          const GB = oB.d.getMobHungerLevel(BB.petInfo.lastFedAt);
          for (const BB of oB.d.hungerLevelIcons[GB]) uB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          uB.push({
            str: " "
          }), uB.push({
            str: oB.d.hungerLevelTranslations[GB],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (BB.tameInfo && null !== (IB = BB.tameInfo) && void 0 !== IB && IB.supportsFriendship) {
          var LB, gB;
          let OB = null !== (LB = BB.tameInfo.likedFoods) && void 0 !== LB ? LB : [];
          uB.push({
            str: "\n"
          }), uB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: oB.d.feedTextColours[oB.d.MobFoodType.Superliked]
            }
          }), uB.push({
            str: " "
          }), null !== (gB = BB.petInfo) && void 0 !== gB && gB.superlikedFoodKnown ? (uB.push({
            icon: BB.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), OB = OB.filter((OB => OB !== BB.petInfo.superlikedFood))) : uB.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), uB.push({
            str: "\n"
          }), uB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: oB.d.feedTextColours[oB.d.MobFoodType.Liked]
            }
          }), uB.push({
            str: " "
          });
          for (const BB of OB) uB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          uB.push({
            str: "\n"
          }), uB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: oB.d.feedTextColours[oB.d.MobFoodType.Neutral]
            }
          }), uB.push({
            str: " "
          });
          for (const GB of null !== (rB = BB.tameInfo.neutralFoods) && void 0 !== rB ? rB : []) {
            var rB;
            uB.push({
              icon: GB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          uB.push({
            str: "\n"
          }), uB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: oB.d.feedTextColours[oB.d.MobFoodType.Disliked]
            }
          }), uB.push({
            str: " "
          });
          for (const GB of null !== (XB = BB.tameInfo.dislikedFoods) && void 0 !== XB ? XB : []) {
            var XB;
            uB.push({
              icon: GB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        uB.length > 0 ? (uB.shift(), uB.unshift(...(0, QB.zb)(KB))) : uB = (0, QB.zb)(KB)
      }
      return {
        name: kB,
        desc: uB,
        fontStyle: null !== (SB = nB.customAttributes) && void 0 !== SB && SB.author ? "italic" : "normal"
      }
    }

    function NB(BB, OB, GB, YB) {
      const DB = yB(BB, GB),
        QB = yB(BB, YB);
      if (!DB) return !1;
      const oB = OB[DB.name].armourReduction,
        jB = OB[QB.name].armourReduction;
      if (jB === oB) {
        var JB, MB, PB, zB;
        const BB = null !== (JB = null === (MB = DB.attributes.customAttributes) || void 0 === MB ? void 0 : MB.enchantmentTier) && void 0 !== JB ? JB : "Tier 0",
          OB = null !== (PB = null === (zB = QB.attributes.customAttributes) || void 0 === zB ? void 0 : zB.enchantmentTier) && void 0 !== PB ? PB : "Tier 0";
        return parseInt(BB.replace("Tier ", "")) >= parseInt(OB.replace("Tier ", ""))
      }
      return oB > jB
    }

    function RB(BB) {
      let OB;
      if ("number" === typeof BB) {
        const GB = document.querySelector(`[data-inven-idx="${BB}"]`);
        if (!GB) return null;
        OB = GB.getBoundingClientRect()
      } else OB = BB.getBoundingClientRect();
      return {
        x: OB.left + OB.width / 2,
        y: OB.top + OB.height / 2
      }
    }
  },
  9570: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => kB,
      h: () => uB
    });
    var YB = GB(56),
      DB = GB(25),
      QB = GB(2697),
      oB = GB(3831);
    const jB = 6,
      yB = 4,
      JB = ["HudMove-inventory", "HudLocked-inventory"];

    function MB(BB) {
      let {
        left: OB,
        right: GB,
        height: YB,
        rowTop: DB,
        besideBottom: QB,
        obstacles: oB
      } = BB;
      const JB = oB.filter((BB => BB.left < GB + jB && BB.right > OB - jB));
      let MB = QB;
      for (let jB = 0; jB <= JB.length; jB++) {
        const BB = JB.filter((BB => BB.top < MB + yB && BB.bottom > MB - YB - yB));
        if (0 === BB.length) break;
        MB = Math.min(...BB.map((BB => BB.top))) - yB
      }
      return MB === QB ? null : Math.ceil(DB - MB)
    }

    function PB(BB) {
      return Array.from(BB.children).filter((BB => !BB.classList.contains("HotBarRow")))
    }

    function zB(BB) {
      return function(BB) {
        const OB = [],
          GB = (BB, YB) => {
            const DB = BB.getBoundingClientRect();
            if (DB.width > 0 && DB.height > 0) OB.push(BB);
            else if (YB < 2)
              for (const OB of Array.from(BB.children)) GB(OB, YB + 1)
          };
        for (const YB of BB) GB(YB, 0);
        return OB
      }(PB(BB).flatMap((BB => BB.classList.contains("AuraBarWrapper") ? [] : BB.classList.contains("BottomScreenStatBarList") ? Array.from(BB.children) : [BB])))
    }

    function lB(BB, OB) {
      var GB;
      const YB = null === (GB = BB.querySelector(":scope > .AuraBarWrapper")) || void 0 === GB ? void 0 : GB.getBoundingClientRect();
      return (YB && YB.height > 0 ? YB.top : OB) - yB
    }
    const pB = ".BottomScreenMessage, [role='status']";

    function qB(BB, OB, GB, YB, DB) {
      const QB = BB => BB.map((BB => BB.getBoundingClientRect())),
        oB = MB({
          ...GB,
          obstacles: QB(GB.obstacles.filter((BB => !BB.matches(pB))))
        }),
        jB = OB.ownerDocument.defaultView,
        yB = `${null===jB||void 0===jB?void 0:jB.innerWidth}x${null===jB||void 0===jB?void 0:jB.innerHeight}:${YB}:${Math.round(GB.rowTop)}`,
        JB = BB.get(OB),
        PB = (null === JB || void 0 === JB ? void 0 : JB.at) === yB ? (zB = JB.rise, lB = oB, null === zB ? lB : null === lB ? zB : Math.max(zB, lB)) : oB;
      var zB, lB;
      const qB = MB({
        ...GB,
        besideBottom: null === PB ? GB.besideBottom : GB.rowTop - PB,
        obstacles: QB(GB.obstacles)
      });
      return DB && BB.set(OB, {
        at: yB,
        rise: PB
      }), null !== qB && void 0 !== qB ? qB : PB
    }

    function ZB(BB, OB, GB, YB) {
      BB.classList.toggle(OB, null !== YB), null === YB ? BB.style.removeProperty(GB) : BB.style.setProperty(GB, `${YB}px`)
    }
    const NB = new WeakMap,
      RB = new WeakMap,
      WB = "(orientation: portrait) and (max-width: 600px)";

    function AB(BB, OB) {
      const GB = BB.getBoundingClientRect();
      if (0 === GB.width) return null;
      const YB = [GB, ...Array.from(BB.children).filter((BB => !(BB => OB.contains(BB.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(BB))).map((BB => BB.getBoundingClientRect())).filter((BB => BB.width > 0))];
      return {
        left: Math.min(...YB.map((BB => BB.left))),
        top: Math.min(...YB.map((BB => BB.top))),
        right: Math.max(...YB.map((BB => BB.right))),
        bottom: Math.max(...YB.map((BB => BB.bottom)))
      }
    }

    function VB(BB) {
      let {
        slotsLeft: OB,
        slotsRight: GB,
        width: YB,
        zoneRight: DB
      } = BB;
      const QB = Math.max(0, Math.floor(GB - OB - YB));
      return null === DB ? 0 : Math.min(QB, Math.max(0, Math.ceil(DB + jB - OB)))
    }

    function SB(BB) {
      var OB;
      const GB = BB.getBoundingClientRect();
      if (0 === GB.width) return null;
      const YB = null === (OB = BB.parentElement) || void 0 === OB ? void 0 : OB.getBoundingClientRect();
      return YB && YB.width > 0 ? Math.min(GB.right, YB.left + YB.width * nB) : GB.right
    }
    const nB = .35,
      UB = new WeakMap,
      fB = new WeakMap;

    function kB(BB) {
      dB(BB) && dB(BB),
        function(BB) {
          var OB, GB;
          const YB = BB.documentElement.classList;
          if (!YB.contains("TouchHotbar") || !YB.contains("TouchHotbarKeysAbove") || JB.some((BB => YB.contains(BB))) || !1 !== (null === (OB = BB.defaultView) || void 0 === OB || null === (GB = OB.matchMedia) || void 0 === GB ? void 0 : GB.call(OB, WB).matches)) return;
          const DB = BB.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            QB = null === DB || void 0 === DB ? void 0 : DB.closest(".BottomMiddleElements"),
            oB = null === DB || void 0 === DB ? void 0 : DB.parentElement;
          if (!DB || !QB || !oB || QB.classList.contains("TouchInventoryOpen") || DB.querySelector("[data-pressing]")) return;
          const jB = AB(DB, YB),
            yB = oB.getBoundingClientRect().top,
            MB = jB && qB(NB, QB, {
              left: jB.left,
              right: jB.right,
              height: jB.bottom - jB.top,
              rowTop: yB,
              besideBottom: lB(QB, yB),
              obstacles: zB(QB).filter((BB => !BB.classList.contains("BottomScreenMessage")))
            }, `${Math.round(jB.left)}:${Math.round(jB.right-jB.left)}x${Math.round(jB.bottom-jB.top)}`, !0);
          RB.has(QB) && RB.get(QB) === MB || (ZB(QB, "KeysAboveUp", "--touch-keys-above-rise", MB), RB.set(QB, MB))
        }(BB)
    }

    function dB(BB) {
      var OB, GB, YB, DB;
      const QB = BB.documentElement.classList;
      if (!QB.contains("TouchHotbar") || QB.contains("TouchHotbarKeysAbove") || JB.some((BB => QB.contains(BB))) || null === (OB = BB.defaultView) || void 0 === OB || null === (GB = OB.matchMedia) || void 0 === GB || !GB.call(OB, KB).matches) return !1;
      const oB = BB.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        jB = null === oB || void 0 === oB ? void 0 : oB.parentElement,
        yB = null === oB || void 0 === oB ? void 0 : oB.closest(".BottomMiddleElements"),
        MB = null === yB || void 0 === yB ? void 0 : yB.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!oB || !jB || !yB || !MB || yB.classList.contains("TouchInventoryOpen")) return !1;
      const PB = oB.getBoundingClientRect();
      if (0 === PB.width) return !1;
      const pB = BB.querySelector(".JoystickZone"),
        NB = MB.getBoundingClientRect(),
        RB = jB.getBoundingClientRect().top,
        WB = VB({
          slotsLeft: NB.left,
          slotsRight: NB.right,
          width: PB.width,
          zoneRight: pB ? SB(pB) : null
        }),
        AB = UB.get(yB),
        nB = NB.left + WB,
        kB = {
          shift: WB,
          rise: qB(fB, yB, {
            left: nB,
            right: nB + PB.width,
            height: PB.height,
            rowTop: RB,
            besideBottom: lB(yB, RB),
            obstacles: zB(yB)
          }, `${WB}:${Math.round(PB.width)}`, (null !== (YB = null === AB || void 0 === AB ? void 0 : AB.shift) && void 0 !== YB ? YB : 0) === WB)
        };
      return (null === AB || void 0 === AB ? void 0 : AB.shift) !== kB.shift && yB.style.setProperty("--touch-shop-above-shift", `${kB.shift}px`), (null === AB || void 0 === AB ? void 0 : AB.rise) !== kB.rise && ZB(yB, "ShopAboveUp", "--touch-shop-above-rise", kB.rise), UB.set(yB, kB), (null !== (DB = null === AB || void 0 === AB ? void 0 : AB.shift) && void 0 !== DB ? DB : 0) !== kB.shift
    }
    const KB = "(orientation: landscape) and (max-height: 500px)";

    function uB(BB, OB, GB) {
      (0, YB.useLayoutEffect)((() => {
        var OB;
        const YB = null === (OB = BB.current) || void 0 === OB ? void 0 : OB.closest(".BottomMiddleElements");
        if (!YB || GB) return;
        const jB = new ResizeObserver((() => {
            lB(!1)
          })),
          yB = () => {
            jB.disconnect();
            const BB = document.querySelector(".JoystickZone");
            for (const OB of [BB, YB, YB.querySelector(".HotBarGameItemsContainer"), ...zB(YB)]) OB && jB.observe(OB)
          };
        let JB = null,
          MB = !1;
        const lB = BB => {
            MB ||= BB, JB ??= requestAnimationFrame((() => {
              JB = null, MB && (MB = !1, yB()), kB(document)
            }))
          },
          pB = new MutationObserver((() => {
            lB(!0)
          }));
        pB.observe(YB, {
          childList: !0
        });
        for (const BB of PB(YB)) pB.observe(BB, {
          childList: !0,
          subtree: !0
        });
        kB(document), yB();
        const qB = () => {
            lB(!0)
          },
          ZB = [(0, DB.p)(QB.e, qB), (0, DB.p)(oB.c, qB)],
          NB = new MutationObserver((() => {
            lB(!1)
          }));
        return BB.current && NB.observe(BB.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          NB.disconnect(), null !== JB && cancelAnimationFrame(JB), jB.disconnect(), pB.disconnect();
          for (const BB of ZB) BB()
        }
      }), [BB, OB, GB])
    }
  },
  34693: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => zB,
      e: () => lB,
      i: () => pB
    });
    var YB = GB(56),
      DB = GB(34688),
      QB = GB(1338),
      oB = GB(4946),
      jB = GB(2544),
      yB = GB(92),
      JB = GB(2063),
      MB = GB(1375),
      PB = GB(1282);

    function zB(BB) {
      let {
        show: OB,
        onClose: GB
      } = BB;
      const {
        requestedGameNameWithVariation: YB,
        lobbyName: DB,
        shownLobbyName: QB
      } = (0, JB.g)("connectedGame"), zB = (0, jB.b)(YB, DB, !1);
      return yB.featureFlags.canUseInviteLinks && (0, PB.jsx)(oB.d, {
        show: OB,
        close: GB,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, PB.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, PB.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, PB.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, PB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === zB ? (0, PB.jsx)(MB.b, {}) : zB, (0, PB.jsx)("br", {}), "Lobby Name: ", QB, (0, PB.jsx)("br", {}), (0, PB.jsx)("br", {}), (0, PB.jsx)("br", {}), (0, PB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, PB.jsx)(lB, {})]
        })
      })
    }

    function lB() {
      var BB;
      const OB = null !== (BB = pB(yB.featureFlags.canUseInviteLinks)) && void 0 !== BB ? BB : "Loading Link...";
      return yB.featureFlags.canUseInviteLinks && (0, PB.jsx)(DB.c, {
        text: OB
      })
    }

    function pB(BB) {
      const [OB, GB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        if (!BB) return;
        let OB = !0;
        return (0, QB.u)().then((BB => {
          OB && GB(BB)
        })).catch((BB => {
          console.error("Failed to get invite link:", BB)
        })), () => {
          OB = !1
        }
      }), [BB]), OB
    }
  },
  34785: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(2063),
      jB = GB(1282);

    function yB(BB) {
      const OB = Math.floor(BB / 3600),
        GB = Math.floor(BB % 3600 / 60),
        YB = Math.floor(BB % 60),
        DB = `${GB.toString().padStart(2,"0")}:${YB.toString().padStart(2,"0")}`;
      return OB > 0 ? `${OB}:${DB}` : DB
    }
    const JB = (0, YB.memo)((function(BB) {
      let {
        className: OB
      } = BB;
      const {
        recording: GB,
        clipping: YB,
        seconds: DB
      } = (0, oB.g)("replayRecorder");
      return GB || YB ? (0, jB.jsxs)("div", {
        className: QB()("RecordingIndicator", {
          RecordingIndicatorClipping: !GB
        }, OB),
        "data-camera-keeper": "",
        children: [(0, jB.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, jB.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: GB ? "REC" : "CLIP"
        }), GB && (0, jB.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: yB(DB)
        })]
      }) : null
    }))
  },
  34848: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1282);
    const oB = 21,
      jB = 2 * Math.PI * oB;

    function yB(BB) {
      let {
        tier: OB,
        state: GB,
        progress: YB,
        size: yB = "large"
      } = BB;
      const JB = DB()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === yB,
        SeasonPassTierNodeLarge: "large" === yB,
        SeasonPassTierNodeReached: "reached" === GB,
        SeasonPassTierNodeEarning: "earning" === GB
      });
      if ("earning" !== GB || "large" === yB) return (0, QB.jsx)("span", {
        className: JB,
        children: (0, QB.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: OB
        })
      });
      const MB = Math.max(0, Math.min(1, YB));
      return (0, QB.jsxs)("span", {
        className: JB,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * MB),
        children: [(0, QB.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, QB.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, QB.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: oB
          }), (0, QB.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: oB,
            strokeDasharray: `${MB*jB} ${jB}`,
            transform: "rotate(-90 28 28)"
          }), (0, QB.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, QB.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: OB
        })]
      })
    }
  },
  34688: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB
    });
    var YB = GB(4773),
      DB = GB(1175),
      QB = GB(2953),
      oB = GB(1485),
      jB = GB(1282);

    function yB(BB) {
      let {
        text: OB
      } = BB;
      const {
        t: GB
      } = (0, DB.H)(), [yB, JB] = (0, QB.j)();
      return (0, jB.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, jB.jsx)("div", {
          className: "CopyTextRowText",
          children: OB
        }), (0, jB.jsx)(oB.f, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, YB.b)(OB).catch((BB => {
              console.error("Failed to copy text:", BB)
            })), JB()
          },
          disabled: yB,
          children: GB(yB ? "general:copied" : "general:copy")
        })]
      })
    }
  },
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  7122: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB = GB(56),
      DB = GB(31);

    function QB(BB, OB) {
      var GB;
      const [QB, oB] = (0, YB.useState)(null !== (GB = DB.g.getItem(BB)) && void 0 !== GB ? GB : OB);
      return [QB, OB => {
        DB.g.setItem(BB, OB), oB(OB)
      }]
    }
  },
  9553: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => PB,
      D: () => yB,
      H: () => zB,
      K: () => JB,
      N: () => pB,
      Q: () => QB,
      d: () => DB,
      f: () => jB,
      h: () => YB,
      k: () => qB,
      o: () => lB,
      r: () => MB,
      v: () => oB,
      x: () => ZB
    });
    const YB = BB => ({
      left: BB.left,
      top: BB.top,
      right: BB.right,
      bottom: BB.bottom
    });

    function DB(BB) {
      return {
        x: (BB.left + BB.right) / 2,
        y: (BB.top + BB.bottom) / 2
      }
    }

    function QB(BB) {
      return 0 === BB.length ? null : BB.reduce(((BB, OB) => ({
        left: Math.min(BB.left, OB.left),
        top: Math.min(BB.top, OB.top),
        right: Math.max(BB.right, OB.right),
        bottom: Math.max(BB.bottom, OB.bottom)
      })))
    }

    function oB(BB, OB) {
      const GB = Math.max(0, (OB - (BB.right - BB.left)) / 2),
        YB = Math.max(0, (OB - (BB.bottom - BB.top)) / 2);
      return {
        left: BB.left - GB,
        top: BB.top - YB,
        right: BB.right + GB,
        bottom: BB.bottom + YB
      }
    }

    function jB(BB, OB) {
      return OB.x >= BB.left && OB.x <= BB.right && OB.y >= BB.top && OB.y <= BB.bottom
    }

    function yB(BB, OB, GB) {
      let YB = null,
        QB = 1 / 0;
      for (const {
          id: DB,
          box: oB
        }
        of OB) {
        const OB = (oB.right - oB.left) * (oB.bottom - oB.top);
        jB(oB, BB) && OB < QB && (QB = OB, YB = DB)
      }
      if (null !== YB) return YB;
      let yB = 1 / 0;
      for (const {
          id: JB,
          box: MB
        }
        of OB) {
        if (!jB(oB(MB, GB), BB)) continue;
        const OB = DB(MB),
          QB = Math.hypot(BB.x - OB.x, BB.y - OB.y);
        QB < yB && (yB = QB, YB = JB)
      }
      return YB
    }

    function JB(BB, OB, GB) {
      return {
        left: GB.left,
        top: GB.top,
        right: BB - GB.right,
        bottom: OB - GB.bottom
      }
    }

    function MB(BB, OB, GB, YB) {
      const DB = (BB, OB, GB) => Math.max(Math.min(OB, 0), Math.min(Math.max(GB, 0), BB));
      return {
        x: DB(OB, YB.left - BB.left, YB.right - BB.right),
        y: DB(GB, YB.top - BB.top, YB.bottom - BB.bottom)
      }
    }

    function PB(BB, OB, GB, YB, DB) {
      const QB = BB.dx * YB + OB,
        oB = BB.dy * DB + GB,
        jB = BB => Math.max(-1, Math.min(1, BB));
      return {
        dx: jB(QB / YB),
        dy: jB(oB / DB)
      }
    }

    function zB(BB, OB, GB, YB) {
      return OB <= 0 || GB <= 0 ? 1 : Math.max(.05, Math.min(1, BB / OB, YB / GB))
    }

    function lB(BB, OB, GB) {
      return Math.min(BB.right, OB.right) - Math.max(BB.left, OB.left) > GB && Math.min(BB.bottom, OB.bottom) - Math.max(BB.top, OB.top) > GB
    }

    function pB(BB, OB) {
      const GB = (BB, OB, GB, YB) => OB - BB > YB - GB ? GB - BB > OB - YB ? YB - OB : GB - BB : BB < GB ? GB - BB : OB > YB ? YB - OB : 0;
      return {
        x: GB(BB.left, BB.right, OB.left, OB.right),
        y: GB(BB.top, BB.bottom, OB.top, OB.bottom)
      }
    }

    function qB(BB, OB, GB) {
      return lB(BB, {
        left: 0,
        top: 0,
        right: OB,
        bottom: GB
      }, 0)
    }

    function ZB(BB, OB) {
      let {
        avoid: GB = null,
        bounds: YB = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, DB = 0, QB = 1 / 0;
      return BB.forEach(((BB, oB) => {
        const jB = OB.filter((OB => lB(BB, OB, 0))).length,
          yB = null !== YB && (BB.left < YB.left || BB.top < YB.top || BB.right > YB.right || BB.bottom > YB.bottom),
          JB = jB + (GB && lB(BB, GB, 0) ? 1e3 : 0) + (yB ? 1e6 : 0);
        JB < QB && (DB = oB, QB = JB)
      })), DB
    }
  },
  9549: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => lB,
      D: () => zB,
      H: () => PB,
      b: () => jB,
      d: () => AB,
      g: () => WB,
      h: () => RB,
      j: () => yB,
      m: () => pB,
      q: () => MB,
      u: () => SB,
      v: () => VB,
      y: () => JB
    });
    var YB = GB(9553),
      DB = GB(2679);
    const QB = {
        sprint: "joystick",
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        shop: "inventory",
        bag: "inventory",
        ...Object.fromEntries(DB.F.map((BB => [BB, "menu"])))
      },
      oB = BB => DB.A.filter((OB => QB[OB] === BB)),
      jB = new Set(oB("cluster")),
      yB = new Set(oB("inventory")),
      JB = BB => "inventory" === BB || yB.has(BB),
      MB = BB => {
        const OB = QB[BB];
        return void 0 === OB ? [] : [OB, ...MB(OB)]
      },
      PB = BB => [BB, ...MB(BB)],
      zB = (BB, OB, GB) => "shop" === BB && OB ? GB("inventory") ? ["inventory"] : GB("bag") ? [BB, "bag"] : [BB] : [BB],
      lB = (BB, OB, GB, DB) => {
        const QB = BB => {
          const QB = OB[BB],
            {
              x: oB,
              y: jB
            } = QB && DB(BB) ? (0, YB.N)(QB, GB) : {
              x: 0,
              y: 0
            };
          return QB && {
            left: QB.left + oB,
            top: QB.top + jB,
            right: QB.right + oB,
            bottom: QB.bottom + jB
          }
        };
        return BB.flatMap((BB => {
          const oB = OB[BB];
          if ("inventory" !== BB || !oB || oB.right - oB.left <= GB.right - GB.left && oB.bottom - oB.top <= GB.bottom - GB.top) return [BB];
          const [jB, yB] = [QB("shop"), QB("bag")];
          return jB && yB && !(0, YB.o)(jB, yB, 0) ? ["shop", "bag"].filter(DB) : [BB]
        }))
      },
      pB = new Map([
        ["cluster", jB],
        ["inventory", yB]
      ]),
      qB = ["cluster"],
      ZB = [...qB, ...DB.A.filter((BB => !qB.includes(BB) && !QB[BB]))],
      NB = BB => [BB, ...oB(BB).flatMap(NB)],
      RB = ZB.flatMap(NB).map((BB => ({
        id: BB,
        label: `hudLayout:${BB}`,
        ...DB.x[BB],
        parent: QB[BB]
      }))),
      WB = Object.fromEntries(RB.map((BB => [BB.id, BB]))),
      AB = "data-hud-el";

    function VB(BB, OB, GB, YB) {
      const DB = GB(function(BB, OB) {
          return "attack" !== BB || OB ? WB[BB].label : "hudLayout:attackContext"
        }(BB, OB)),
        QB = YB[BB];
      return QB ? GB("hudLayout:slotWithKey", {
        slot: DB,
        key: QB
      }) : DB
    }

    function SB(BB, OB, GB, YB) {
      return BB.map((BB => VB(BB, OB, GB, YB))).join(", ")
    }
  },
  9566: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      f: () => QB,
      g: () => DB,
      j: () => oB,
      n: () => PB,
      r: () => MB,
      t: () => JB,
      v: () => yB
    });
    var YB = GB(2679);
    const DB = ["J", "C", "A", "P", "U", "X", "G"],
      QB = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function oB(BB) {
      return BB ? ["X"] : ["P", "X"]
    }
    const jB = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: YB.F,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function yB(BB, OB, GB) {
      const YB = BB.querySelector(".InGameUi .TouchComponentsButtons");
      if (!YB) return jB;
      const QB = {},
        oB = {};
      for (const jB of DB) {
        const BB = YB.querySelector(`.TouchSlot${jB} > .TouchKey`);
        if (BB) {
          var yB, JB;
          QB[jB] = BB.cloneNode(!0);
          const OB = (null !== (yB = null === (JB = BB.querySelector(".TouchKeyLabel")) || void 0 === JB ? void 0 : JB.textContent) && void 0 !== yB ? yB : "").split(/\s+/).filter((BB => !/[\d\xd7]/.test(BB))).join(" ");
          OB && (oB[jB] = OB)
        }
      }
      const MB = OB => {
          const GB = BB.querySelector(`.InGameUi ${OB}`);
          return null !== GB && !GB.classList.contains("Hidden")
        },
        PB = [...BB.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((BB => BB.cloneNode(!0)));
      return {
        faces: Object.keys(QB).length > 0 ? QB : null,
        names: oB,
        shop: MB(".TouchInventoryKey.ShopKey"),
        bag: MB(".TouchInventoryKey.BagKey"),
        sprint: MB(".TouchSprintHit"),
        items: PB.length > 0 ? PB : null,
        rowIcons: OB,
        pinnedIcons: GB
      }
    }

    function JB(BB, OB) {
      const GB = {};
      for (const YB of [...oB(OB), "G"]) {
        const OB = BB.names[YB];
        OB && (GB[QB[YB]] = OB)
      }
      return GB
    }

    function MB(BB, OB) {
      const {
        faces: GB
      } = BB;
      if (null === GB) return [];
      const YB = new Set(Object.keys(GB).map((BB => QB[BB])));
      return oB(OB).filter((BB => !YB.has(QB[BB])))
    }

    function PB(BB, OB) {
      BB.replaceChildren(...[...OB.childNodes].map((BB => BB.cloneNode(!0))))
    }
  },
  9562: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      f: () => JB
    });
    var YB = GB(9553),
      DB = GB(9549),
      QB = GB(2679),
      oB = GB(2682);
    const jB = 2,
      yB = (BB, OB, GB) => {
        const YB = (0, DB.q)(OB).includes(BB) ? BB : (0, DB.q)(BB).includes(OB) ? OB : null;
        if (null === YB || "joystick" === YB) return !1;
        const jB = YB === BB ? OB : BB;
        if ("menu" === YB) return (0, oB.y)(jB, GB.hudElements[jB]);
        if ("hotbar" !== YB || !(0, DB.y)(jB)) return !0;
        if ((0, QB.P)(GB.hudElements[jB]) || (0, QB.P)(GB.hudElements.inventory)) return !1;
        return !(GB.hudLocked.includes(jB) || GB.hudLocked.includes("inventory")) || (0, QB.N)(GB.hudElements.hotbar)
      };

    function JB(BB, OB, GB, JB) {
      const MB = BB => (0, DB.H)(BB).some((BB => (0, QB.t)(GB.hudElements, BB) || (0, oB.w)(BB, GB, JB)));
      if (MB(BB)) return [];
      const PB = BB => {
          var OB, YB;
          return "bag" === BB && 1 !== (null !== (OB = null === (YB = GB.hudElements.shop) || void 0 === YB ? void 0 : YB[2]) && void 0 !== OB ? OB : 1) || (0, DB.H)(BB).some((BB => void 0 !== GB.hudElements[BB]))
        },
        zB = DB.m.get(BB),
        lB = OB.filter((OB => {
          let {
            id: GB
          } = OB;
          return zB ? zB.has(GB) && !MB(GB) : GB === BB
        })),
        pB = new Set;
      for (const DB of OB) DB.id === BB || null !== zB && void 0 !== zB && zB.has(DB.id) || pB.has(DB.id) || MB(DB.id) || lB.some((BB => {
        let {
          id: OB,
          box: QB
        } = BB;
        return !yB(OB, DB.id, GB) && (PB(OB) || PB(DB.id)) && (0, YB.o)(QB, DB.box, jB)
      })) && pB.add(DB.id);
      return [...pB]
    }
  },
  34706: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => YB
    });
    const YB = "image/jpeg",
      DB = "jpg"
  },
  34713: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      e: () => JB,
      i: () => MB
    });
    var YB = GB(1748),
      DB = GB(3629),
      QB = GB(92),
      oB = GB(1834),
      jB = GB(34706);

    function yB() {
      return !(0, QB.isMobileApp)() || YB.e.supports("photos")
    }
    async function JB(BB) {
      var OB, GB;
      if ((0, QB.isMobileApp)()) {
        const {
          saved: OB
        } = await YB.e.request("photos.save", {
          data: await (0, DB.h)(BB),
          mimeType: jB.d
        });
        return OB ? "saved" : "denied"
      }
      return (0, QB.isIOS)() && null !== (OB = (GB = navigator).canShare) && void 0 !== OB && OB.call(GB, {
        files: [BB]
      }) ? MB(BB) : ((0, oB.c)(BB, BB.name), "saved")
    }
    async function MB(BB) {
      try {
        return await navigator.share({
          files: [BB]
        }), "shared"
      } catch (OB) {
        if (OB instanceof DOMException && "AbortError" === OB.name) return "rB";
        if (OB instanceof DOMException && "NotAllowedError" === OB.name) return "needsTap";
        throw OB
      }
    }
  },
  34702: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      h: () => MB,
      k: () => PB
    });
    var YB = GB(16),
      DB = GB(34668),
      QB = GB(1699),
      oB = GB(34706);
    const jB = 8294400,
      yB = .92;

    function JB() {
      (0, QB.f)(), YB.c.set({
        screenshotMode: !0
      })
    }

    function MB() {
      YB.c.set({
        screenshotMode: !1
      })
    }
    async function PB() {
      const {
        width: BB,
        height: OB,
        scale: GB
      } = function(BB, OB, GB) {
        const YB = Math.max(1, BB),
          DB = Math.max(1, OB),
          QB = Math.min(Math.max(1, GB), Math.sqrt(jB / (YB * DB)));
        return {
          width: Math.round(YB * QB),
          height: Math.round(DB * QB),
          scale: QB
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: YB
      } = await DB.devTools.capturePhoto(BB, OB, {
        scale: GB,
        type: oB.d,
        quality: yB
      });
      return new File([YB], function(BB) {
        const OB = BB => String(BB).padStart(2, "0"),
          GB = `${BB.getFullYear()}${OB(BB.getMonth()+1)}${OB(BB.getDate())}`,
          YB = `${OB(BB.getHours())}${OB(BB.getMinutes())}${OB(BB.getSeconds())}`;
        return `bloxd-${GB}-${YB}.${oB.c}`
      }(new Date), {
        type: oB.d
      })
    }
  },
  9346: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => YB
    });
    const YB = "controllerOpenKeyboard",
      DB = "controllerKeyboardVisible"
  },
  34675: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = new Set(["chunkBorders"])
  },
  34668: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ALL_DEV_TOOLS: () => oB,
      coreDevTools: () => JB,
      devTools: () => yB
    });
    var YB = GB(662),
      DB = GB(1299),
      QB = GB(34675);
    const oB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function jB() {
      const {
        noaDevTools: BB
      } = await GB.e(264).then((() => GB(42066)));
      return BB
    }
    const yB = new class {
        constructor() {
          this.loadHost = jB, this.tools = oB
        }
        setHost(BB) {
          this.tools = null === BB ? oB : BB.tools, this.loadHost = null === BB ? jB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, OB) {
          const GB = await this.loadHost();
          await GB.downloadScene(BB, OB)
        }
        async setAmbientLightIntensity(BB) {
          const OB = await this.loadHost();
          await OB.setAmbientLightIntensity(BB)
        }
        async capturePhoto(BB, OB, GB) {
          return (await this.loadHost()).capturePhoto(BB, OB, GB)
        }
      },
      JB = {
        tools: QB.c,
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
    YB.D && yB.setHost(JB), (0, DB.y)((() => {
      yB.setHost(JB)
    }))
  },
  34832: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      h: () => DB,
      i: () => MB
    });
    var YB = GB(1611);

    function DB(BB) {
      var OB;
      return {
        ...oB.store,
        yaw: oB.store.yaw + (null !== (OB = YB.d[BB].previewYaw) && void 0 !== OB ? OB : 0)
      }
    }
    const QB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      oB = {
        player: QB,
        store: {
          ...QB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function jB(BB, OB) {
      BB instanceof Promise ? BB.then(OB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : OB(BB)
    }
    class yB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var OB;
        this.view = BB, null === (OB = this.opened) || void 0 === OB || OB.show(BB)
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class JB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, OB;
        return null !== (BB = null === (OB = this.opened) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, OB) {
        var GB;
        null === (GB = this.opened) || void 0 === GB || GB.setCosmetic(BB, OB)
      }
      playEmote(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.playEmote(BB)
      }
      setOrbit(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var OB;
        await this.ready, await (null === (OB = this.opened) || void 0 === OB ? void 0 : OB.untilDrawn(BB))
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const MB = new class {
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
        return new yB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new yB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new yB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, OB) {
        return new JB(this.current().openCharacter(BB, OB))
      }
    }
  },
  34828: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.d,
      e: () => YB.h,
      g: () => YB.i
    });
    var YB = GB(34832);
    class DB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class QB {
      constructor() {
        this.mobScene = new DB((() => Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(283), GB.e(111), GB.e(284), GB.e(87), GB.e(281), GB.e(85), GB.e(86), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(303), GB.e(255), GB.e(272), GB.e(286), GB.e(289), GB.e(89), GB.e(249), GB.e(204), GB.e(109), GB.e(261), GB.e(252), GB.e(268), GB.e(219), GB.e(269), GB.e(88), GB.e(273)]).then((() => GB(42079))))), this.characterScene = new DB((() => Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(283), GB.e(111), GB.e(284), GB.e(87), GB.e(281), GB.e(85), GB.e(86), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(303), GB.e(255), GB.e(272), GB.e(286), GB.e(289), GB.e(89), GB.e(249), GB.e(204), GB.e(109), GB.e(261), GB.e(252), GB.e(268), GB.e(219), GB.e(269), GB.e(88), GB.e(218)]).then((() => GB(42186)))))
      }
      openMob(BB) {
        return this.mobScene.run((OB => OB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((OB => OB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((OB => OB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, OB) {
        return this.characterScene.run((GB => GB.openCharacterPreview(BB, OB)))
      }
    }
    YB.i.setDefaultHost((() => new QB))
  },
  7198: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => QB
    });
    var YB = GB(31);
    const DB = "shaderPack";
    async function QB() {
      var BB;
      let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await YB.d.getItem(DB, OB)) && void 0 !== BB ? BB : null
    }
  },
  9545: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      h: () => yB
    });
    var YB = GB(16),
      DB = GB(1350),
      QB = GB(92);
    const oB = {
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

    function jB() {
      return (0, QB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const yB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, OB) {
        var GB;
        if (!this.deps.enabled()) return;
        const YB = oB[BB],
          DB = null !== OB && void 0 !== OB ? OB : YB.pattern;
        if (null === DB) return void console.warn("No vibration pattern for", BB);
        const QB = this.deps.now();
        QB - this.lastAnyAt < 40 && YB.priority < this.playingPriority || QB - (null !== (GB = this.lastAt.get(BB)) && void 0 !== GB ? GB : -1 / 0) < YB.minGapMs || QB < this.playingUntil && YB.priority < this.playingPriority || (this.lastAt.set(BB, QB), this.lastAnyAt = QB, this.playingUntil = QB + DB.reduce(((BB, OB) => BB + OB), 0), this.playingPriority = YB.priority, this.deps.vibrate(DB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => jB() && YB.c.get("isTouchScreen") && YB.c.get("clientEscMenuOptions").vibration && !(0, DB.f)()
    })
  },
  9448: (BB, OB, GB) => {
    function YB(BB, OB) {
      return !BB.hidden && (OB || !BB.isRewardedAd)
    }

    function DB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function QB(BB, OB) {
      var GB;
      if ("dropdown" === (null === (GB = BB.userInput) || void 0 === GB ? void 0 : GB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const GB of BB.userInput.dropdownOptions)
          if (DB(GB) === OB) return "object" === typeof GB ? GB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", OB)
      }
      return BB.cost
    }

    function oB(BB, OB, GB) {
      var YB;
      const DB = null !== (YB = GB.excludedPlayers) && void 0 !== YB ? YB : [OB];
      return BB.filter((BB => !DB.includes(BB)))
    }
    GB.d(OB, {
      b: () => QB,
      f: () => DB,
      g: () => oB,
      h: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);