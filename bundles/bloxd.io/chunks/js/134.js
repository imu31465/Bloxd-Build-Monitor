export const id = 134;
export const ids = [134, 196];
export const modules = {
  34250: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(376),
      nB = zB(34254);

    function dB(BB, jB, zB) {
      const dB = Object.entries(jB).sort(((BB, jB) => jB[1] - BB[1])),
        IB = (0, QB.ob)(BB);
      IB.push(BB ? "\n\n" : "\n");
      for (const [nB, JB] of dB) {
        var NB, uB, UB;
        const BB = null !== (NB = null === zB || void 0 === zB || null === (uB = zB[nB]) || void 0 === uB ? void 0 : uB.icon) && void 0 !== NB ? NB : `${nB} Enchantment`;
        IB.push({
          icon: BB,
          style: {
            fontSize: "1.5rem"
          }
        }), IB.push({
          str: `${nB} ${null!==(UB=(0,QB.O)(JB))&&void 0!==UB?UB:JB}\n`
        })
      }
      IB.push({
        str: "\n"
      });
      for (const [QB, JB] of dB) {
        var aB, pB, rB, sB;
        const BB = null !== (aB = null === zB || void 0 === zB || null === (pB = zB[QB]) || void 0 === pB ? void 0 : pB.icon) && void 0 !== aB ? aB : `${QB} Enchantment`,
          jB = null !== (rB = null === zB || void 0 === zB || null === (sB = zB[QB]) || void 0 === sB ? void 0 : sB.description) && void 0 !== rB ? rB : (0, nB.i)(QB);
        IB.push({
          icon: BB,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), IB.push({
          str: jB,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), IB.push({
          str: "\n"
        })
      }
      return IB
    }
  },
  34262: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB,
      c: () => GB,
      g: () => yB,
      i: () => uB,
      k: () => kB,
      l: () => aB,
      m: () => rB,
      q: () => mB,
      t: () => pB
    });
    var QB = zB(363),
      nB = zB(658),
      dB = zB(376),
      IB = zB(4321),
      NB = zB(34250);

    function uB(BB, jB) {
      var zB;
      let {
        player: QB,
        chestOrCreative: nB
      } = BB;
      var dB;
      return jB < QB.length ? null !== (dB = QB[jB]) && void 0 !== dB ? dB : null : null !== (zB = nB[jB - QB.length]) && void 0 !== zB ? zB : null
    }

    function UB(BB) {
      var jB;
      return null !== (jB = BB.amount) && void 0 !== jB ? jB : 0
    }

    function aB(BB) {
      return 0 === BB.button || void 0 === BB.button
    }

    function pB(BB) {
      return !!BB.shiftKey
    }

    function rB(BB) {
      return "touches" in BB || "touch" === BB.pointerType || "pen" === BB.pointerType
    }
    const sB = new Set,
      JB = 50;

    function mB(BB, jB) {
      var zB;
      const QB = null === (zB = BB[jB]) || void 0 === zB ? void 0 : zB.displayName;
      return (0, nB.I)(QB) ? "string" !== typeof jB ? "" : (!sB.has(jB) && sB.size < JB && (sB.add(jB), console.warn(`No item called "${jB}", so its hover shows the name as given`)), jB) : QB
    }

    function yB(BB, jB, zB) {
      var uB, UB, aB, pB, rB, sB, JB, yB, kB, GB, LB, gB, tB, SB;
      const MB = BB.attributes,
        EB = null !== (uB = null === (UB = jB[BB.name]) || void 0 === UB ? void 0 : UB.rootName) && void 0 !== uB ? uB : BB.name,
        iB = null !== (aB = null !== (pB = MB.customDisplayName) && void 0 !== pB ? pB : null === (rB = jB[BB.name]) || void 0 === rB ? void 0 : rB.displayName) && void 0 !== aB ? aB : mB(jB, EB);
      let qB = iB;
      const fB = null === (sB = MB.customAttributes) || void 0 === sB ? void 0 : sB.enchantmentTier;
      fB && (qB = (0, dB.ob)(iB, {
        colour: dB.hb[fB]
      }));
      const oB = null !== (JB = null !== (yB = null !== (kB = function(BB, jB) {
        var zB;
        if (void 0 === BB || null !== (zB = jB.customAttributes) && void 0 !== zB && zB.author) return BB;
        const nB = (0, QB.Rb)(BB);
        return nB.every((BB => "string" === typeof BB)) ? BB : nB.map((BB => "string" === typeof BB ? BB : {
          icon: BB.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(MB.customDescription, MB)) && void 0 !== kB ? kB : null === (GB = jB[BB.name]) || void 0 === GB ? void 0 : GB.description) && void 0 !== yB ? yB : null === (LB = jB[EB]) || void 0 === LB ? void 0 : LB.description) && void 0 !== JB ? JB : "";
      let HB = oB;
      if (null !== (gB = MB.customAttributes) && void 0 !== gB && gB.enchantments) HB = (0, NB.d)(oB, MB.customAttributes.enchantments, MB.customAttributes.enchantmentData);
      else if (zB[EB]) HB = (0, dB.ob)(oB), HB.push({
        str: "\n"
      }), HB.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (tB = MB.customAttributes) && void 0 !== tB && tB.mobSettings) {
        var DB, FB;
        const BB = MB.customAttributes.mobSettings;
        var YB, VB;
        if (HB = [], (0, nB.I)(MB.customAttributes.health) || (HB.push({
            str: "\n"
          }), HB.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), HB.push({
            str: " "
          }), HB.push({
            str: MB.customAttributes.health.toString()
          }), (0, nB.I)(BB.maxHealth) || (HB.push({
            str: "/"
          }), HB.push({
            str: BB.maxHealth.toString()
          }))), !(0, nB.I)(BB.attackDamage) && BB.attackDamage > 0 && (HB.push({
            str: "\n"
          }), HB.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), HB.push({
            str: " "
          }), HB.push({
            str: BB.attackDamage.toString()
          })), !(0, nB.I)(BB.secondaryAttackDamage) && BB.secondaryAttackDamage > 0 && (HB.push({
            str: "\n"
          }), HB.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), HB.push({
            str: " "
          }), HB.push({
            str: BB.secondaryAttackDamage.toString()
          })), (0, nB.I)(BB.baseRunningSpeed) || (HB.push({
            str: "\n"
          }), HB.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), HB.push({
            str: " "
          }), HB.push({
            str: BB.baseRunningSpeed.toFixed(2)
          })), "Saddled" === BB.metaInfo) HB.push({
          str: "\n"
        }), HB.push({
          str: {
            translationKey: "general:has"
          }
        }), HB.push({
          str: " "
        }), HB.push({
          icon: null !== (YB = null === (VB = BB.tameInfo) || void 0 === VB ? void 0 : VB.saddleItemName) && void 0 !== YB ? YB : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (HB.push({
            str: "\n"
          }), HB.push({
            str: "\n"
          }), BB.petInfo && null !== (DB = BB.tameInfo) && void 0 !== DB && DB.supportsFriendship) {
          const jB = IB.b.getIconsFromFriendshipPoints(BB.petInfo.friendshipPoints);
          for (const BB of jB) HB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          HB.push({
            str: "\n"
          });
          const zB = IB.b.getMobHungerLevel(BB.petInfo.lastFedAt);
          for (const BB of IB.b.hungerLevelIcons[zB]) HB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          HB.push({
            str: " "
          }), HB.push({
            str: IB.b.hungerLevelTranslations[zB],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (BB.tameInfo && null !== (FB = BB.tameInfo) && void 0 !== FB && FB.supportsFriendship) {
          var hB, XB;
          let jB = null !== (hB = BB.tameInfo.likedFoods) && void 0 !== hB ? hB : [];
          HB.push({
            str: "\n"
          }), HB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: IB.b.feedTextColours[IB.b.MobFoodType.Superliked]
            }
          }), HB.push({
            str: " "
          }), null !== (XB = BB.petInfo) && void 0 !== XB && XB.superlikedFoodKnown ? (HB.push({
            icon: BB.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), jB = jB.filter((jB => jB !== BB.petInfo.superlikedFood))) : HB.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), HB.push({
            str: "\n"
          }), HB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: IB.b.feedTextColours[IB.b.MobFoodType.Liked]
            }
          }), HB.push({
            str: " "
          });
          for (const BB of jB) HB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          HB.push({
            str: "\n"
          }), HB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: IB.b.feedTextColours[IB.b.MobFoodType.Neutral]
            }
          }), HB.push({
            str: " "
          });
          for (const zB of null !== (ZB = BB.tameInfo.neutralFoods) && void 0 !== ZB ? ZB : []) {
            var ZB;
            HB.push({
              icon: zB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          HB.push({
            str: "\n"
          }), HB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: IB.b.feedTextColours[IB.b.MobFoodType.Disliked]
            }
          }), HB.push({
            str: " "
          });
          for (const zB of null !== (AB = BB.tameInfo.dislikedFoods) && void 0 !== AB ? AB : []) {
            var AB;
            HB.push({
              icon: zB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        HB.length > 0 ? (HB.shift(), HB.unshift(...(0, dB.ob)(oB))) : HB = (0, dB.ob)(oB)
      }
      return {
        name: qB,
        desc: HB,
        fontStyle: null !== (SB = MB.customAttributes) && void 0 !== SB && SB.author ? "italic" : "normal"
      }
    }

    function kB(BB, jB, zB, QB) {
      const nB = uB(BB, zB),
        dB = uB(BB, QB);
      if (!nB) return !1;
      const IB = jB[nB.name].armourReduction,
        NB = jB[dB.name].armourReduction;
      if (NB === IB) {
        var UB, aB, pB, rB;
        const BB = null !== (UB = null === (aB = nB.attributes.customAttributes) || void 0 === aB ? void 0 : aB.enchantmentTier) && void 0 !== UB ? UB : "Tier 0",
          jB = null !== (pB = null === (rB = dB.attributes.customAttributes) || void 0 === rB ? void 0 : rB.enchantmentTier) && void 0 !== pB ? pB : "Tier 0";
        return parseInt(BB.replace("Tier ", "")) >= parseInt(jB.replace("Tier ", ""))
      }
      return IB > NB
    }

    function GB(BB) {
      let jB;
      if ("number" === typeof BB) {
        const zB = document.querySelector(`[data-inven-idx="${BB}"]`);
        if (!zB) return null;
        jB = zB.getBoundingClientRect()
      } else jB = BB.getBoundingClientRect();
      return {
        x: jB.left + jB.width / 2,
        y: jB.top + jB.height / 2
      }
    }
  },
  8910: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => kB,
      d: () => gB
    });
    var QB = zB(62),
      nB = zB(31),
      dB = zB(2585),
      IB = zB(3517);
    const NB = 6,
      uB = 4;

    function UB(BB) {
      let {
        slotsLeft: jB,
        slotsRight: zB,
        width: QB,
        height: nB,
        zoneRight: dB,
        rowTop: IB,
        besideBottom: UB,
        obstacles: aB
      } = BB;
      const pB = Math.max(0, Math.floor(zB - jB - QB)),
        rB = null === dB ? 0 : Math.min(pB, Math.max(0, Math.ceil(dB + NB - jB))),
        sB = jB + rB - NB,
        JB = jB + rB + QB + NB,
        mB = aB.filter((BB => BB.left < JB && BB.right > sB));
      let yB = UB;
      for (let NB = 0; NB <= mB.length; NB++) {
        const BB = mB.filter((BB => BB.top < yB + uB && BB.bottom > yB - nB - uB));
        if (0 === BB.length) break;
        yB = Math.min(...BB.map((BB => BB.top))) - uB
      }
      return {
        shift: rB,
        rise: yB === UB ? null : Math.ceil(IB - yB)
      }
    }

    function aB(BB) {
      return Array.from(BB.children).filter((BB => !BB.classList.contains("HotBarRow")))
    }

    function pB(BB) {
      return function(BB) {
        const jB = [],
          zB = (BB, QB) => {
            const nB = BB.getBoundingClientRect();
            if (nB.width > 0 && nB.height > 0) jB.push(BB);
            else if (QB < 2)
              for (const jB of Array.from(BB.children)) zB(jB, QB + 1)
          };
        for (const QB of BB) zB(QB, 0);
        return jB
      }(aB(BB).flatMap((BB => BB.classList.contains("AuraBarWrapper") ? [] : BB.classList.contains("BottomScreenStatBarList") ? Array.from(BB.children) : [BB])))
    }

    function rB(BB) {
      var jB;
      const zB = BB.getBoundingClientRect();
      if (0 === zB.width) return null;
      const QB = null === (jB = BB.parentElement) || void 0 === jB ? void 0 : jB.getBoundingClientRect();
      return QB && QB.width > 0 ? Math.min(zB.right, QB.left + QB.width * sB) : zB.right
    }
    const sB = .35,
      JB = new WeakMap,
      mB = ".BottomScreenMessage, [role='status']",
      yB = new WeakMap;

    function kB(BB) {
      GB(BB) && GB(BB)
    }

    function GB(BB) {
      var jB, zB, QB, nB, dB, IB;
      const NB = BB.documentElement.classList;
      if (!NB.contains("TouchHotbar") || NB.contains("TouchHotbarKeysAbove") || NB.contains("HudMove-inventory") || NB.contains("HudLocked-inventory") || null === (jB = BB.defaultView) || void 0 === jB || null === (zB = jB.matchMedia) || void 0 === zB || !zB.call(jB, LB).matches) return !1;
      const aB = BB.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        sB = null === aB || void 0 === aB ? void 0 : aB.parentElement,
        kB = null === aB || void 0 === aB ? void 0 : aB.closest(".BottomMiddleElements"),
        GB = null === kB || void 0 === kB ? void 0 : kB.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!aB || !sB || !kB || !GB || kB.classList.contains("TouchInventoryOpen")) return !1;
      const gB = aB.getBoundingClientRect();
      if (0 === gB.width) return !1;
      const tB = BB.querySelector(".JoystickZone"),
        SB = GB.getBoundingClientRect(),
        MB = sB.getBoundingClientRect().top,
        EB = null === (QB = kB.querySelector(":scope > .AuraBarWrapper")) || void 0 === QB ? void 0 : QB.getBoundingClientRect(),
        iB = pB(kB),
        qB = {
          slotsLeft: SB.left,
          slotsRight: SB.right,
          width: gB.width,
          height: gB.height,
          zoneRight: tB ? rB(tB) : null,
          rowTop: MB,
          besideBottom: (EB && EB.height > 0 ? EB.top : MB) - uB,
          obstacles: iB.map((BB => BB.getBoundingClientRect()))
        },
        fB = UB({
          ...qB,
          obstacles: iB.filter((BB => !BB.matches(mB))).map((BB => BB.getBoundingClientRect()))
        }),
        oB = BB.defaultView,
        HB = `${null===oB||void 0===oB?void 0:oB.innerWidth}x${null===oB||void 0===oB?void 0:oB.innerHeight}:${fB.shift}:${Math.round(gB.width)}:${Math.round(MB)}`,
        DB = yB.get(kB),
        FB = (null === DB || void 0 === DB ? void 0 : DB.at) === HB ? (YB = DB.rise, VB = fB.rise, null === YB ? VB : null === VB ? YB : Math.max(YB, VB)) : fB.rise;
      var YB, VB;
      const hB = UB({
          ...qB,
          besideBottom: null === FB ? qB.besideBottom : MB - FB
        }),
        XB = {
          shift: fB.shift,
          rise: null !== (nB = hB.rise) && void 0 !== nB ? nB : FB
        },
        ZB = JB.get(kB);
      return (null !== (dB = null === ZB || void 0 === ZB ? void 0 : ZB.shift) && void 0 !== dB ? dB : 0) === XB.shift && yB.set(kB, {
        at: HB,
        rise: FB
      }), (null === ZB || void 0 === ZB ? void 0 : ZB.shift) !== XB.shift && kB.style.setProperty("--touch-shop-above-shift", `${XB.shift}px`), (null === ZB || void 0 === ZB ? void 0 : ZB.rise) !== XB.rise && (kB.classList.toggle("ShopAboveUp", null !== XB.rise), null === XB.rise ? kB.style.removeProperty("--touch-shop-above-rise") : kB.style.setProperty("--touch-shop-above-rise", `${XB.rise}px`)), JB.set(kB, XB), (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.shift) && void 0 !== IB ? IB : 0) !== XB.shift
    }
    const LB = "(orientation: landscape) and (max-height: 500px)";

    function gB(BB, jB, zB) {
      (0, QB.useLayoutEffect)((() => {
        var jB;
        const QB = null === (jB = BB.current) || void 0 === jB ? void 0 : jB.closest(".BottomMiddleElements");
        if (!QB || zB) return;
        const NB = new ResizeObserver((() => {
            sB(!1)
          })),
          uB = () => {
            NB.disconnect();
            const BB = document.querySelector(".JoystickZone");
            for (const jB of [BB, QB, QB.querySelector(".HotBarGameItemsContainer"), ...pB(QB)]) jB && NB.observe(jB)
          };
        let UB = null,
          rB = !1;
        const sB = BB => {
            rB ||= BB, UB ??= requestAnimationFrame((() => {
              UB = null, rB && (rB = !1, uB()), kB(document)
            }))
          },
          JB = new MutationObserver((() => {
            sB(!0)
          }));
        JB.observe(QB, {
          childList: !0
        });
        for (const BB of aB(QB)) JB.observe(BB, {
          childList: !0,
          subtree: !0
        });
        kB(document), uB();
        const mB = () => {
            sB(!0)
          },
          yB = [(0, nB.q)(dB.f, mB), (0, nB.q)(IB.b, mB)];
        return () => {
          null !== UB && cancelAnimationFrame(UB), NB.disconnect(), JB.disconnect();
          for (const BB of yB) BB()
        }
      }), [BB, jB, zB])
    }
  },
  34141: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => sB,
      h: () => JB,
      j: () => mB
    });
    var QB = zB(1478),
      nB = zB(62),
      dB = zB(1343),
      IB = zB(4653),
      NB = zB(2443),
      uB = zB(1240),
      UB = zB(106),
      aB = zB(2025),
      pB = zB(1369),
      rB = zB(1148);

    function sB(BB) {
      let {
        show: jB,
        onClose: zB
      } = BB;
      const {
        requestedGameNameWithVariation: QB,
        lobbyName: nB,
        shownLobbyName: dB
      } = (0, aB.k)("connectedGame"), uB = (0, NB.e)(QB, nB, !1);
      return UB.featureFlags.canUseInviteLinks && (0, rB.jsx)(IB.d, {
        show: jB,
        close: zB,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, rB.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, rB.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, rB.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, rB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === uB ? (0, rB.jsx)(pB.e, {}) : uB, (0, rB.jsx)("br", {}), "Lobby Name: ", dB, (0, rB.jsx)("br", {}), (0, rB.jsx)("br", {}), (0, rB.jsx)("br", {}), (0, rB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, rB.jsx)(JB, {})]
        })
      })
    }

    function JB() {
      var BB;
      const {
        t: jB
      } = (0, uB.D)(), zB = null !== (BB = mB(UB.featureFlags.canUseInviteLinks)) && void 0 !== BB ? BB : "Loading Link...", [dB, IB] = (0, nB.useState)(0), [NB, aB] = (0, nB.useReducer)((BB => BB + 1), 0);
      return (0, nB.useEffect)((() => {
        const BB = setTimeout((() => {
          aB()
        }), 1100);
        return () => {
          clearTimeout(BB)
        }
      }), [dB]), UB.featureFlags.canUseInviteLinks && (0, rB.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, rB.jsx)("div", {
          className: "InviteLinkInner",
          children: zB
        }), (0, rB.jsx)(QB.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(zB).catch((BB => {
              console.error("Failed to copy invite link:", BB)
            })), IB(Date.now())
          },
          disabled: Date.now() - dB < 1e3,
          children: Date.now() - dB < 1e3 ? jB("general:copied") : jB("general:copy")
        })]
      })
    }

    function mB(BB) {
      const [jB, zB] = (0, nB.useState)(null);
      return (0, nB.useEffect)((() => {
        if (!BB) return;
        let jB = !0;
        return (0, dB.y)().then((BB => {
          jB && zB(BB)
        })).catch((BB => {
          console.error("Failed to get invite link:", BB)
        })), () => {
          jB = !1
        }
      }), [BB]), jB
    }
  },
  34238: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(2025),
      NB = zB(1148);

    function uB(BB) {
      const jB = Math.floor(BB / 3600),
        zB = Math.floor(BB % 3600 / 60),
        QB = Math.floor(BB % 60),
        nB = `${zB.toString().padStart(2,"0")}:${QB.toString().padStart(2,"0")}`;
      return jB > 0 ? `${jB}:${nB}` : nB
    }
    const UB = (0, QB.memo)((function(BB) {
      let {
        className: jB
      } = BB;
      const {
        recording: zB,
        seconds: QB
      } = (0, IB.k)("replayRecorder");
      return zB ? (0, NB.jsxs)("div", {
        className: dB()("RecordingIndicator", jB),
        children: [(0, NB.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, NB.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, NB.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: uB(QB)
        })]
      }) : null
    }))
  },
  34242: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(4657),
      nB = zB(4664);

    function dB(BB) {
      let {
        children: jB,
        showing: zB,
        globallyUniqueKey: dB,
        alwaysMountChildren: IB = !1,
        doGameplayStartStopOnShow: NB = !0,
        keepsMovement: uB = !1
      } = BB;
      return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
    }
  },
  6539: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(62),
      nB = zB(41);

    function dB(BB, jB) {
      var zB;
      const [dB, IB] = (0, QB.useState)(null !== (zB = nB.j.getItem(BB)) && void 0 !== zB ? zB : jB);
      return [dB, jB => {
        nB.j.setItem(BB, jB), IB(jB)
      }]
    }
  },
  8901: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => rB,
      C: () => UB,
      G: () => JB,
      H: () => dB,
      d: () => nB,
      e: () => NB,
      h: () => QB,
      j: () => mB,
      l: () => sB,
      p: () => aB,
      t: () => IB,
      u: () => yB,
      x: () => pB,
      y: () => uB
    });
    const QB = BB => ({
      left: BB.left,
      top: BB.top,
      right: BB.right,
      bottom: BB.bottom
    });

    function nB(BB) {
      return {
        x: (BB.left + BB.right) / 2,
        y: (BB.top + BB.bottom) / 2
      }
    }

    function dB(BB) {
      return 0 === BB.length ? null : BB.reduce(((BB, jB) => ({
        left: Math.min(BB.left, jB.left),
        top: Math.min(BB.top, jB.top),
        right: Math.max(BB.right, jB.right),
        bottom: Math.max(BB.bottom, jB.bottom)
      })))
    }

    function IB(BB, jB) {
      const zB = Math.max(0, (jB - (BB.right - BB.left)) / 2),
        QB = Math.max(0, (jB - (BB.bottom - BB.top)) / 2);
      return {
        left: BB.left - zB,
        top: BB.top - QB,
        right: BB.right + zB,
        bottom: BB.bottom + QB
      }
    }

    function NB(BB, jB) {
      return jB.x >= BB.left && jB.x <= BB.right && jB.y >= BB.top && jB.y <= BB.bottom
    }

    function uB(BB, jB, zB) {
      let QB = null,
        dB = 1 / 0;
      for (const {
          id: nB,
          box: IB
        }
        of jB) {
        const jB = (IB.right - IB.left) * (IB.bottom - IB.top);
        NB(IB, BB) && jB < dB && (dB = jB, QB = nB)
      }
      if (null !== QB) return QB;
      let uB = 1 / 0;
      for (const {
          id: UB,
          box: aB
        }
        of jB) {
        if (!NB(IB(aB, zB), BB)) continue;
        const jB = nB(aB),
          dB = Math.hypot(BB.x - jB.x, BB.y - jB.y);
        dB < uB && (uB = dB, QB = UB)
      }
      return QB
    }

    function UB(BB, jB, zB) {
      return {
        left: zB.left,
        top: zB.top,
        right: BB - zB.right,
        bottom: jB - zB.bottom
      }
    }

    function aB(BB, jB, zB, QB) {
      const nB = (BB, jB, zB) => Math.max(Math.min(jB, 0), Math.min(Math.max(zB, 0), BB));
      return {
        x: nB(jB, QB.left - BB.left, QB.right - BB.right),
        y: nB(zB, QB.top - BB.top, QB.bottom - BB.bottom)
      }
    }

    function pB(BB, jB, zB, QB, nB) {
      const dB = BB.dx * QB + jB,
        IB = BB.dy * nB + zB,
        NB = BB => Math.max(-1, Math.min(1, BB));
      return {
        dx: NB(dB / QB),
        dy: NB(IB / nB)
      }
    }

    function rB(BB, jB, zB, QB) {
      return jB <= 0 || zB <= 0 ? 1 : Math.max(.05, Math.min(1, BB / jB, QB / zB))
    }

    function sB(BB, jB, zB) {
      return Math.min(BB.right, jB.right) - Math.max(BB.left, jB.left) > zB && Math.min(BB.bottom, jB.bottom) - Math.max(BB.top, jB.top) > zB
    }

    function JB(BB, jB) {
      const zB = (BB, jB, zB, QB) => jB - BB > QB - zB ? zB - BB > jB - QB ? QB - jB : zB - BB : BB < zB ? zB - BB : jB > QB ? QB - jB : 0;
      return {
        x: zB(BB.left, BB.right, jB.left, jB.right),
        y: zB(BB.top, BB.bottom, jB.top, jB.bottom)
      }
    }

    function mB(BB, jB, zB) {
      return sB(BB, {
        left: 0,
        top: 0,
        right: jB,
        bottom: zB
      }, 0)
    }

    function yB(BB, jB) {
      let {
        avoid: zB = null,
        bounds: QB = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, nB = 0, dB = 1 / 0;
      return BB.forEach(((BB, IB) => {
        const NB = jB.filter((jB => sB(BB, jB, 0))).length,
          uB = null !== QB && (BB.left < QB.left || BB.top < QB.top || BB.right > QB.right || BB.bottom > QB.bottom),
          UB = NB + (zB && sB(BB, zB, 0) ? 1e3 : 0) + (uB ? 1e6 : 0);
        UB < dB && (nB = IB, dB = UB)
      })), nB
    }
  },
  8907: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      e: () => dB,
      f: () => nB,
      j: () => IB,
      l: () => pB,
      m: () => aB,
      n: () => UB,
      p: () => uB
    });
    var QB = zB(2559);
    const nB = ["J", "C", "A", "P", "U", "X", "G"],
      dB = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function IB(BB) {
      return BB ? ["X"] : ["P", "X"]
    }
    const NB = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: QB.F,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function uB(BB, jB, zB) {
      const QB = BB.querySelector(".InGameUi .TouchComponentsButtons");
      if (!QB) return NB;
      const dB = {},
        IB = {};
      for (const NB of nB) {
        const BB = QB.querySelector(`.TouchSlot${NB} > .TouchKey`);
        if (BB) {
          var uB, UB;
          dB[NB] = BB.cloneNode(!0);
          const jB = (null !== (uB = null === (UB = BB.querySelector(".TouchKeyLabel")) || void 0 === UB ? void 0 : UB.textContent) && void 0 !== uB ? uB : "").split(/\s+/).filter((BB => !/[\d\xd7]/.test(BB))).join(" ");
          jB && (IB[NB] = jB)
        }
      }
      const aB = jB => {
          const zB = BB.querySelector(`.InGameUi ${jB}`);
          return null !== zB && !zB.classList.contains("Hidden")
        },
        pB = [...BB.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((BB => BB.cloneNode(!0)));
      return {
        faces: Object.keys(dB).length > 0 ? dB : null,
        names: IB,
        shop: aB(".TouchInventoryKey.ShopKey"),
        bag: aB(".TouchInventoryKey.BagKey"),
        sprint: aB(".TouchSprintHit"),
        items: pB.length > 0 ? pB : null,
        rowIcons: jB,
        pinnedIcons: zB
      }
    }

    function UB(BB, jB) {
      const zB = {};
      for (const QB of [...IB(jB), "G"]) {
        const jB = BB.names[QB];
        jB && (zB[dB[QB]] = jB)
      }
      return zB
    }

    function aB(BB, jB) {
      const {
        faces: zB
      } = BB;
      if (null === zB) return [];
      const QB = new Set(Object.keys(zB).map((BB => dB[BB])));
      return IB(jB).filter((BB => !QB.has(dB[BB])))
    }

    function pB(BB, jB) {
      BB.replaceChildren(...[...jB.childNodes].map((BB => BB.cloneNode(!0))))
    }
  },
  34155: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      e: () => QB
    });
    const QB = "image/jpeg",
      nB = "jpg"
  },
  34163: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      d: () => UB,
      h: () => aB
    });
    var QB = zB(1725),
      nB = zB(3310),
      dB = zB(106),
      IB = zB(1794),
      NB = zB(34155);

    function uB() {
      return !(0, dB.isMobileApp)() || QB.c.supports("photos")
    }
    async function UB(BB) {
      var jB, zB;
      if ((0, dB.isMobileApp)()) {
        const {
          saved: jB
        } = await QB.c.request("photos.save", {
          data: await (0, nB.g)(BB),
          mimeType: NB.e
        });
        return jB ? "saved" : "denied"
      }
      return (0, dB.isIOS)() && null !== (jB = (zB = navigator).canShare) && void 0 !== jB && jB.call(zB, {
        files: [BB]
      }) ? aB(BB) : ((0, IB.e)(BB, BB.name), "saved")
    }
    async function aB(BB) {
      try {
        return await navigator.share({
          files: [BB]
        }), "shared"
      } catch (jB) {
        if (jB instanceof DOMException && "AbortError" === jB.name) return "xz";
        if (jB instanceof DOMException && "NotAllowedError" === jB.name) return "needsTap";
        throw jB
      }
    }
  },
  34148: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB,
      g: () => aB,
      k: () => pB
    });
    var QB = zB(28),
      nB = zB(34126),
      dB = zB(1664),
      IB = zB(34155);
    const NB = 8294400,
      uB = .92;

    function UB() {
      (0, dB.c)(), QB.c.set({
        screenshotMode: !0
      })
    }

    function aB() {
      QB.c.set({
        screenshotMode: !1
      })
    }
    async function pB() {
      const {
        width: BB,
        height: jB,
        scale: zB
      } = function(BB, jB, zB) {
        const QB = Math.max(1, BB),
          nB = Math.max(1, jB),
          dB = Math.min(Math.max(1, zB), Math.sqrt(NB / (QB * nB)));
        return {
          width: Math.round(QB * dB),
          height: Math.round(nB * dB),
          scale: dB
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: QB
      } = await nB.devTools.capturePhoto(BB, jB, {
        scale: zB,
        type: IB.e,
        quality: uB
      });
      return new File([QB], function(BB) {
        const jB = BB => String(BB).padStart(2, "0"),
          zB = `${BB.getFullYear()}${jB(BB.getMonth()+1)}${jB(BB.getDate())}`,
          QB = `${jB(BB.getHours())}${jB(BB.getMinutes())}${jB(BB.getSeconds())}`;
        return `bloxd-${zB}-${QB}.${IB.c}`
      }(new Date), {
        type: IB.e
      })
    }
  },
  8665: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      f: () => QB
    });
    const QB = "controllerOpenKeyboard",
      nB = "controllerKeyboardVisible"
  },
  34132: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    const QB = new Set(["chunkBorders"])
  },
  34126: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      ALL_DEV_TOOLS: () => IB,
      coreDevTools: () => UB,
      devTools: () => uB
    });
    var QB = zB(690),
      nB = zB(1325),
      dB = zB(34132);
    const IB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function NB() {
      const {
        noaDevTools: BB
      } = await zB.e(242).then((() => zB(41159)));
      return BB
    }
    const uB = new class {
        constructor() {
          this.loadHost = NB, this.tools = IB
        }
        setHost(BB) {
          this.tools = null === BB ? IB : BB.tools, this.loadHost = null === BB ? NB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, jB) {
          const zB = await this.loadHost();
          await zB.downloadScene(BB, jB)
        }
        async setAmbientLightIntensity(BB) {
          const jB = await this.loadHost();
          await jB.setAmbientLightIntensity(BB)
        }
        async capturePhoto(BB, jB, zB) {
          return (await this.loadHost()).capturePhoto(BB, jB, zB)
        }
      },
      UB = {
        tools: dB.d,
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
    QB.E && uB.setHost(UB), (0, nB.A)((() => {
      uB.setHost(UB)
    }))
  },
  34289: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      g: () => nB,
      i: () => aB
    });
    var QB = zB(1585);

    function nB(BB) {
      var jB;
      return {
        ...IB.store,
        yaw: IB.store.yaw + (null !== (jB = QB.d[BB].previewYaw) && void 0 !== jB ? jB : 0)
      }
    }
    const dB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      IB = {
        player: dB,
        store: {
          ...dB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function NB(BB, jB) {
      BB instanceof Promise ? BB.then(jB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : jB(BB)
    }
    class uB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, NB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var jB;
        this.view = BB, null === (jB = this.opened) || void 0 === jB || jB.show(BB)
      }
      resize(BB, jB) {
        var zB;
        this.size = {
          width: BB,
          height: jB
        }, null === (zB = this.opened) || void 0 === zB || zB.resize(BB, jB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class UB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), NB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, jB;
        return null !== (BB = null === (jB = this.opened) || void 0 === jB ? void 0 : jB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, jB) {
        var zB;
        null === (zB = this.opened) || void 0 === zB || zB.setCosmetic(BB, jB)
      }
      playEmote(BB) {
        var jB;
        null === (jB = this.opened) || void 0 === jB || jB.playEmote(BB)
      }
      setOrbit(BB) {
        var jB;
        null === (jB = this.opened) || void 0 === jB || jB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var jB;
        await this.ready, await (null === (jB = this.opened) || void 0 === jB ? void 0 : jB.untilDrawn(BB))
      }
      resize(BB, jB) {
        var zB;
        this.size = {
          width: BB,
          height: jB
        }, null === (zB = this.opened) || void 0 === zB || zB.resize(BB, jB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const aB = new class {
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
        return new uB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new uB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new uB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, jB) {
        return new UB(this.current().openCharacter(BB, jB))
      }
    }
  },
  34283: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.c,
      e: () => QB.g,
      i: () => QB.i
    });
    var QB = zB(34289);
    class nB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class dB {
      constructor() {
        this.mobScene = new nB((() => Promise.all([zB.e(73), zB.e(237), zB.e(236), zB.e(258), zB.e(98), zB.e(259), zB.e(76), zB.e(75), zB.e(256), zB.e(74), zB.e(266), zB.e(260), zB.e(265), zB.e(263), zB.e(255), zB.e(279), zB.e(233), zB.e(249), zB.e(261), zB.e(264), zB.e(78), zB.e(188), zB.e(227), zB.e(97), zB.e(239), zB.e(230), zB.e(246), zB.e(121), zB.e(247), zB.e(77), zB.e(251)]).then((() => zB(41173))))), this.characterScene = new nB((() => Promise.all([zB.e(73), zB.e(237), zB.e(236), zB.e(258), zB.e(98), zB.e(259), zB.e(76), zB.e(75), zB.e(256), zB.e(74), zB.e(266), zB.e(260), zB.e(265), zB.e(263), zB.e(255), zB.e(279), zB.e(233), zB.e(249), zB.e(261), zB.e(264), zB.e(78), zB.e(188), zB.e(227), zB.e(97), zB.e(239), zB.e(230), zB.e(246), zB.e(121), zB.e(247), zB.e(77), zB.e(250)]).then((() => zB(41268)))))
      }
      openMob(BB) {
        return this.mobScene.run((jB => jB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((jB => jB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((jB => jB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, jB) {
        return this.characterScene.run((zB => zB.openCharacterPreview(BB, jB)))
      }
    }
    QB.i.setDefaultHost((() => new dB))
  },
  6606: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      h: () => dB
    });
    var QB = zB(41);
    const nB = "shaderPack";
    async function dB() {
      var BB;
      let jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await QB.g.getItem(nB, jB)) && void 0 !== BB ? BB : null
    }
  },
  8888: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      h: () => uB
    });
    var QB = zB(28),
      nB = zB(1357),
      dB = zB(106);
    const IB = {
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

    function NB() {
      return (0, dB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const uB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, jB) {
        var zB;
        if (!this.deps.enabled()) return;
        const QB = IB[BB],
          nB = null !== jB && void 0 !== jB ? jB : QB.pattern;
        if (null === nB) return void console.warn("No vibration pattern for", BB);
        const dB = this.deps.now();
        dB - this.lastAnyAt < 40 && QB.priority < this.playingPriority || dB - (null !== (zB = this.lastAt.get(BB)) && void 0 !== zB ? zB : -1 / 0) < QB.minGapMs || dB < this.playingUntil && QB.priority < this.playingPriority || (this.lastAt.set(BB, dB), this.lastAnyAt = dB, this.playingUntil = dB + nB.reduce(((BB, jB) => BB + jB), 0), this.playingPriority = QB.priority, this.deps.vibrate(nB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => NB() && QB.c.get("isTouchScreen") && QB.c.get("clientEscMenuOptions").vibration && !(0, nB.e)()
    })
  },
  34168: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB,
      f: () => pB,
      g: () => aB
    });
    var QB = zB(28),
      nB = zB(1725),
      dB = zB(41),
      IB = zB(3775);
    const NB = 2592e5,
      uB = "notificationOptInLastPromptedAt";
    async function UB() {
      var BB;
      const jB = null !== (BB = dB.j.getItem(uB)) && void 0 !== BB ? BB : 0;
      return Date.now() - jB < NB ? null : pB()
    }

    function aB() {
      dB.j.setItem(uB, Date.now())
    }
    async function pB() {
      return await nB.c.ready, nB.c.supports("notifications") ? QB.c.get("mobilePushNotificationsCanAsk") ? async () => {
        nB.c.request("notifications.requestPermission", {}).then((BB => {
          let {
            canAsk: jB
          } = BB;
          QB.c.set({
            mobilePushNotificationsCanAsk: jB
          })
        }), (BB => {
          console.error("The app couldn't ask for push notifications:", BB)
        }))
      }: null: await IB.e.canAsk() ? () => IB.e.requestPermission() : null
    }
  },
  8773: (BB, jB, zB) => {
    function QB(BB, jB) {
      return !BB.hidden && (jB || !BB.isRewardedAd)
    }

    function nB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function dB(BB, jB) {
      var zB;
      if ("dropdown" === (null === (zB = BB.userInput) || void 0 === zB ? void 0 : zB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const zB of BB.userInput.dropdownOptions)
          if (nB(zB) === jB) return "object" === typeof zB ? zB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", jB)
      }
      return BB.cost
    }

    function IB(BB, jB, zB) {
      var QB;
      const nB = null !== (QB = zB.excludedPlayers) && void 0 !== QB ? QB : [jB];
      return BB.filter((BB => !nB.includes(BB)))
    }
    zB.d(jB, {
      b: () => dB,
      d: () => nB,
      g: () => IB,
      h: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);