export const id = 134;
export const ids = [134, 196];
export const modules = {
  34272: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(366),
      zT = mT(34280);

    function MT(TT, UT, mT) {
      const MT = Object.entries(UT).sort(((TT, UT) => UT[1] - TT[1])),
        gT = (0, WT.Hb)(TT);
      gT.push(TT ? "\n\n" : "\n");
      for (const [zT, BT] of MT) {
        var nT, HT, kT;
        const TT = null !== (nT = null === mT || void 0 === mT || null === (HT = mT[zT]) || void 0 === HT ? void 0 : HT.icon) && void 0 !== nT ? nT : `${zT} Enchantment`;
        gT.push({
          icon: TT,
          style: {
            fontSize: "1.5rem"
          }
        }), gT.push({
          str: `${zT} ${null!==(kT=(0,WT.Z)(BT))&&void 0!==kT?kT:BT}\n`
        })
      }
      gT.push({
        str: "\n"
      });
      for (const [WT, BT] of MT) {
        var jT, lT, LT, pT;
        const TT = null !== (jT = null === mT || void 0 === mT || null === (lT = mT[WT]) || void 0 === lT ? void 0 : lT.icon) && void 0 !== jT ? jT : `${WT} Enchantment`,
          UT = null !== (LT = null === mT || void 0 === mT || null === (pT = mT[WT]) || void 0 === pT ? void 0 : pT.description) && void 0 !== LT ? LT : (0, zT.l)(WT);
        gT.push({
          icon: TT,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), gT.push({
          str: UT,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), gT.push({
          str: "\n"
        })
      }
      return gT
    }
  },
  34288: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      g: () => fT,
      i: () => cT,
      l: () => HT,
      p: () => vT,
      s: () => jT,
      u: () => LT,
      w: () => ZT,
      y: () => lT
    });
    var WT = mT(351),
      zT = mT(653),
      MT = mT(366),
      gT = mT(4314),
      nT = mT(34272);

    function HT(TT, UT) {
      var mT;
      let {
        player: WT,
        chestOrCreative: zT
      } = TT;
      var MT;
      return UT < WT.length ? null !== (MT = WT[UT]) && void 0 !== MT ? MT : null : null !== (mT = zT[UT - WT.length]) && void 0 !== mT ? mT : null
    }

    function kT(TT) {
      var UT;
      return null !== (UT = TT.amount) && void 0 !== UT ? UT : 0
    }

    function jT(TT) {
      return 0 === TT.button || void 0 === TT.button
    }

    function lT(TT) {
      return !!TT.shiftKey
    }

    function LT(TT) {
      return "touches" in TT || "touch" === TT.pointerType || "pen" === TT.pointerType
    }
    const pT = new Set,
      BT = 50;

    function ZT(TT, UT) {
      var mT;
      const WT = null === (mT = TT[UT]) || void 0 === mT ? void 0 : mT.displayName;
      return (0, zT.E)(WT) ? "string" !== typeof UT ? "" : (!pT.has(UT) && pT.size < BT && (pT.add(UT), console.warn(`No item called "${UT}", so its hover shows the name as given`)), UT) : WT
    }

    function cT(TT, UT, mT) {
      var HT, kT, jT, lT, LT, pT, BT, cT, vT, fT, qT, iT, bT, OT;
      const eT = TT.attributes,
        YT = null !== (HT = null === (kT = UT[TT.name]) || void 0 === kT ? void 0 : kT.rootName) && void 0 !== HT ? HT : TT.name,
        JT = null !== (jT = null !== (lT = eT.customDisplayName) && void 0 !== lT ? lT : null === (LT = UT[TT.name]) || void 0 === LT ? void 0 : LT.displayName) && void 0 !== jT ? jT : ZT(UT, YT);
      let xT = JT;
      const dT = null === (pT = eT.customAttributes) || void 0 === pT ? void 0 : pT.enchantmentTier;
      dT && (xT = (0, MT.Hb)(JT, {
        colour: MT.Cb[dT]
      }));
      const wT = null !== (BT = null !== (cT = null !== (vT = function(TT, UT) {
        var mT;
        if (void 0 === TT || null !== (mT = UT.customAttributes) && void 0 !== mT && mT.author) return TT;
        const zT = (0, WT.Wb)(TT);
        return zT.every((TT => "string" === typeof TT)) ? TT : zT.map((TT => "string" === typeof TT ? TT : {
          icon: TT.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(eT.customDescription, eT)) && void 0 !== vT ? vT : null === (fT = UT[TT.name]) || void 0 === fT ? void 0 : fT.description) && void 0 !== cT ? cT : null === (qT = UT[YT]) || void 0 === qT ? void 0 : qT.description) && void 0 !== BT ? BT : "";
      let tT = wT;
      if (null !== (iT = eT.customAttributes) && void 0 !== iT && iT.enchantments) tT = (0, nT.b)(wT, eT.customAttributes.enchantments, eT.customAttributes.enchantmentData);
      else if (mT[YT]) tT = (0, MT.Hb)(wT), tT.push({
        str: "\n"
      }), tT.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (bT = eT.customAttributes) && void 0 !== bT && bT.mobSettings) {
        var aT, yT;
        const TT = eT.customAttributes.mobSettings;
        var XT, IT;
        if (tT = [], (0, zT.E)(eT.customAttributes.health) || (tT.push({
            str: "\n"
          }), tT.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), tT.push({
            str: " "
          }), tT.push({
            str: eT.customAttributes.health.toString()
          }), (0, zT.E)(TT.maxHealth) || (tT.push({
            str: "/"
          }), tT.push({
            str: TT.maxHealth.toString()
          }))), !(0, zT.E)(TT.attackDamage) && TT.attackDamage > 0 && (tT.push({
            str: "\n"
          }), tT.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), tT.push({
            str: " "
          }), tT.push({
            str: TT.attackDamage.toString()
          })), !(0, zT.E)(TT.secondaryAttackDamage) && TT.secondaryAttackDamage > 0 && (tT.push({
            str: "\n"
          }), tT.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), tT.push({
            str: " "
          }), tT.push({
            str: TT.secondaryAttackDamage.toString()
          })), (0, zT.E)(TT.baseRunningSpeed) || (tT.push({
            str: "\n"
          }), tT.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), tT.push({
            str: " "
          }), tT.push({
            str: TT.baseRunningSpeed.toFixed(2)
          })), "Saddled" === TT.metaInfo) tT.push({
          str: "\n"
        }), tT.push({
          str: {
            translationKey: "general:has"
          }
        }), tT.push({
          str: " "
        }), tT.push({
          icon: null !== (XT = null === (IT = TT.tameInfo) || void 0 === IT ? void 0 : IT.saddleItemName) && void 0 !== XT ? XT : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (tT.push({
            str: "\n"
          }), tT.push({
            str: "\n"
          }), TT.petInfo && null !== (aT = TT.tameInfo) && void 0 !== aT && aT.supportsFriendship) {
          const UT = gT.e.getIconsFromFriendshipPoints(TT.petInfo.friendshipPoints);
          for (const TT of UT) tT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          tT.push({
            str: "\n"
          });
          const mT = gT.e.getMobHungerLevel(TT.petInfo.lastFedAt);
          for (const TT of gT.e.hungerLevelIcons[mT]) tT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          tT.push({
            str: " "
          }), tT.push({
            str: gT.e.hungerLevelTranslations[mT],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (TT.tameInfo && null !== (yT = TT.tameInfo) && void 0 !== yT && yT.supportsFriendship) {
          var QT, sT;
          let UT = null !== (QT = TT.tameInfo.likedFoods) && void 0 !== QT ? QT : [];
          tT.push({
            str: "\n"
          }), tT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gT.e.feedTextColours[gT.e.MobFoodType.Superliked]
            }
          }), tT.push({
            str: " "
          }), null !== (sT = TT.petInfo) && void 0 !== sT && sT.superlikedFoodKnown ? (tT.push({
            icon: TT.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), UT = UT.filter((UT => UT !== TT.petInfo.superlikedFood))) : tT.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), tT.push({
            str: "\n"
          }), tT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gT.e.feedTextColours[gT.e.MobFoodType.Liked]
            }
          }), tT.push({
            str: " "
          });
          for (const TT of UT) tT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          tT.push({
            str: "\n"
          }), tT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gT.e.feedTextColours[gT.e.MobFoodType.Neutral]
            }
          }), tT.push({
            str: " "
          });
          for (const mT of null !== (FT = TT.tameInfo.neutralFoods) && void 0 !== FT ? FT : []) {
            var FT;
            tT.push({
              icon: mT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          tT.push({
            str: "\n"
          }), tT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gT.e.feedTextColours[gT.e.MobFoodType.Disliked]
            }
          }), tT.push({
            str: " "
          });
          for (const mT of null !== (PT = TT.tameInfo.dislikedFoods) && void 0 !== PT ? PT : []) {
            var PT;
            tT.push({
              icon: mT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        tT.length > 0 ? (tT.shift(), tT.unshift(...(0, MT.Hb)(wT))) : tT = (0, MT.Hb)(wT)
      }
      return {
        name: xT,
        desc: tT,
        fontStyle: null !== (OT = eT.customAttributes) && void 0 !== OT && OT.author ? "italic" : "normal"
      }
    }

    function vT(TT, UT, mT, WT) {
      const zT = HT(TT, mT),
        MT = HT(TT, WT);
      if (!zT) return !1;
      const gT = UT[zT.name].armourReduction,
        nT = UT[MT.name].armourReduction;
      if (nT === gT) {
        var kT, jT, lT, LT;
        const TT = null !== (kT = null === (jT = zT.attributes.customAttributes) || void 0 === jT ? void 0 : jT.enchantmentTier) && void 0 !== kT ? kT : "Tier 0",
          UT = null !== (lT = null === (LT = MT.attributes.customAttributes) || void 0 === LT ? void 0 : LT.enchantmentTier) && void 0 !== lT ? lT : "Tier 0";
        return parseInt(TT.replace("Tier ", "")) >= parseInt(UT.replace("Tier ", ""))
      }
      return gT > nT
    }

    function fT(TT) {
      let UT;
      if ("number" === typeof TT) {
        const mT = document.querySelector(`[data-inven-idx="${TT}"]`);
        if (!mT) return null;
        UT = mT.getBoundingClientRect()
      } else UT = TT.getBoundingClientRect();
      return {
        x: UT.left + UT.width / 2,
        y: UT.top + UT.height / 2
      }
    }
  },
  9011: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => vT,
      h: () => iT
    });
    var WT = mT(63),
      zT = mT(31),
      MT = mT(2608),
      gT = mT(3511);
    const nT = 6,
      HT = 4;

    function kT(TT) {
      let {
        slotsLeft: UT,
        slotsRight: mT,
        width: WT,
        height: zT,
        zoneRight: MT,
        rowTop: gT,
        besideBottom: kT,
        obstacles: jT
      } = TT;
      const lT = Math.max(0, Math.floor(mT - UT - WT)),
        LT = null === MT ? 0 : Math.min(lT, Math.max(0, Math.ceil(MT + nT - UT))),
        pT = UT + LT - nT,
        BT = UT + LT + WT + nT,
        ZT = jT.filter((TT => TT.left < BT && TT.right > pT));
      let cT = kT;
      for (let nT = 0; nT <= ZT.length; nT++) {
        const TT = ZT.filter((TT => TT.top < cT + HT && TT.bottom > cT - zT - HT));
        if (0 === TT.length) break;
        cT = Math.min(...TT.map((TT => TT.top))) - HT
      }
      return {
        shift: LT,
        rise: cT === kT ? null : Math.ceil(gT - cT)
      }
    }

    function jT(TT) {
      return Array.from(TT.children).filter((TT => !TT.classList.contains("HotBarRow")))
    }

    function lT(TT) {
      return function(TT) {
        const UT = [],
          mT = (TT, WT) => {
            const zT = TT.getBoundingClientRect();
            if (zT.width > 0 && zT.height > 0) UT.push(TT);
            else if (WT < 2)
              for (const UT of Array.from(TT.children)) mT(UT, WT + 1)
          };
        for (const WT of TT) mT(WT, 0);
        return UT
      }(jT(TT).flatMap((TT => TT.classList.contains("AuraBarWrapper") ? [] : TT.classList.contains("BottomScreenStatBarList") ? Array.from(TT.children) : [TT])))
    }

    function LT(TT) {
      var UT;
      const mT = TT.getBoundingClientRect();
      if (0 === mT.width) return null;
      const WT = null === (UT = TT.parentElement) || void 0 === UT ? void 0 : UT.getBoundingClientRect();
      return WT && WT.width > 0 ? Math.min(mT.right, WT.left + WT.width * pT) : mT.right
    }
    const pT = .35,
      BT = new WeakMap,
      ZT = ".BottomScreenMessage, [role='status']",
      cT = new WeakMap;

    function vT(TT) {
      fT(TT) && fT(TT)
    }

    function fT(TT) {
      var UT, mT, WT, zT, MT, gT;
      const nT = TT.documentElement.classList;
      if (!nT.contains("TouchHotbar") || nT.contains("TouchHotbarKeysAbove") || nT.contains("HudMove-inventory") || nT.contains("HudLocked-inventory") || null === (UT = TT.defaultView) || void 0 === UT || null === (mT = UT.matchMedia) || void 0 === mT || !mT.call(UT, qT).matches) return !1;
      const jT = TT.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        pT = null === jT || void 0 === jT ? void 0 : jT.parentElement,
        vT = null === jT || void 0 === jT ? void 0 : jT.closest(".BottomMiddleElements"),
        fT = null === vT || void 0 === vT ? void 0 : vT.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!jT || !pT || !vT || !fT || vT.classList.contains("TouchInventoryOpen")) return !1;
      const iT = jT.getBoundingClientRect();
      if (0 === iT.width) return !1;
      const bT = TT.querySelector(".JoystickZone"),
        OT = fT.getBoundingClientRect(),
        eT = pT.getBoundingClientRect().top,
        YT = null === (WT = vT.querySelector(":scope > .AuraBarWrapper")) || void 0 === WT ? void 0 : WT.getBoundingClientRect(),
        JT = lT(vT),
        xT = {
          slotsLeft: OT.left,
          slotsRight: OT.right,
          width: iT.width,
          height: iT.height,
          zoneRight: bT ? LT(bT) : null,
          rowTop: eT,
          besideBottom: (YT && YT.height > 0 ? YT.top : eT) - HT,
          obstacles: JT.map((TT => TT.getBoundingClientRect()))
        },
        dT = kT({
          ...xT,
          obstacles: JT.filter((TT => !TT.matches(ZT))).map((TT => TT.getBoundingClientRect()))
        }),
        wT = TT.defaultView,
        tT = `${null===wT||void 0===wT?void 0:wT.innerWidth}x${null===wT||void 0===wT?void 0:wT.innerHeight}:${dT.shift}:${Math.round(iT.width)}:${Math.round(eT)}`,
        aT = cT.get(vT),
        yT = (null === aT || void 0 === aT ? void 0 : aT.at) === tT ? (XT = aT.rise, IT = dT.rise, null === XT ? IT : null === IT ? XT : Math.max(XT, IT)) : dT.rise;
      var XT, IT;
      const QT = kT({
          ...xT,
          besideBottom: null === yT ? xT.besideBottom : eT - yT
        }),
        sT = {
          shift: dT.shift,
          rise: null !== (zT = QT.rise) && void 0 !== zT ? zT : yT
        },
        FT = BT.get(vT);
      return (null !== (MT = null === FT || void 0 === FT ? void 0 : FT.shift) && void 0 !== MT ? MT : 0) === sT.shift && cT.set(vT, {
        at: tT,
        rise: yT
      }), (null === FT || void 0 === FT ? void 0 : FT.shift) !== sT.shift && vT.style.setProperty("--touch-shop-above-shift", `${sT.shift}px`), (null === FT || void 0 === FT ? void 0 : FT.rise) !== sT.rise && (vT.classList.toggle("ShopAboveUp", null !== sT.rise), null === sT.rise ? vT.style.removeProperty("--touch-shop-above-rise") : vT.style.setProperty("--touch-shop-above-rise", `${sT.rise}px`)), BT.set(vT, sT), (null !== (gT = null === FT || void 0 === FT ? void 0 : FT.shift) && void 0 !== gT ? gT : 0) !== sT.shift
    }
    const qT = "(orientation: landscape) and (max-height: 500px)";

    function iT(TT, UT, mT) {
      (0, WT.useLayoutEffect)((() => {
        var UT;
        const WT = null === (UT = TT.current) || void 0 === UT ? void 0 : UT.closest(".BottomMiddleElements");
        if (!WT || mT) return;
        const nT = new ResizeObserver((() => {
            pT(!1)
          })),
          HT = () => {
            nT.disconnect();
            const TT = document.querySelector(".JoystickZone");
            for (const UT of [TT, WT, WT.querySelector(".HotBarGameItemsContainer"), ...lT(WT)]) UT && nT.observe(UT)
          };
        let kT = null,
          LT = !1;
        const pT = TT => {
            LT ||= TT, kT ??= requestAnimationFrame((() => {
              kT = null, LT && (LT = !1, HT()), vT(document)
            }))
          },
          BT = new MutationObserver((() => {
            pT(!0)
          }));
        BT.observe(WT, {
          childList: !0
        });
        for (const TT of jT(WT)) BT.observe(TT, {
          childList: !0,
          subtree: !0
        });
        vT(document), HT();
        const ZT = () => {
            pT(!0)
          },
          cT = [(0, zT.k)(MT.d, ZT), (0, zT.k)(gT.c, ZT)];
        return () => {
          null !== kT && cancelAnimationFrame(kT), nT.disconnect(), BT.disconnect();
          for (const TT of cT) TT()
        }
      }), [TT, UT, mT])
    }
  },
  34167: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => pT,
      f: () => BT,
      h: () => ZT
    });
    var WT = mT(1569),
      zT = mT(63),
      MT = mT(1416),
      gT = mT(4639),
      nT = mT(2486),
      HT = mT(1288),
      kT = mT(102),
      jT = mT(2089),
      lT = mT(1446),
      LT = mT(1188);

    function pT(TT) {
      let {
        show: UT,
        onClose: mT
      } = TT;
      const {
        requestedGameNameWithVariation: WT,
        lobbyName: zT,
        shownLobbyName: MT
      } = (0, jT.i)("connectedGame"), HT = (0, nT.e)(WT, zT, !1);
      return kT.featureFlags.canUseInviteLinks && (0, LT.jsx)(gT.e, {
        show: UT,
        close: mT,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, LT.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, LT.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, LT.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, LT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === HT ? (0, LT.jsx)(lT.c, {}) : HT, (0, LT.jsx)("br", {}), "Lobby Name: ", MT, (0, LT.jsx)("br", {}), (0, LT.jsx)("br", {}), (0, LT.jsx)("br", {}), (0, LT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, LT.jsx)(BT, {})]
        })
      })
    }

    function BT() {
      var TT;
      const {
        t: UT
      } = (0, HT.z)(), mT = null !== (TT = ZT(kT.featureFlags.canUseInviteLinks)) && void 0 !== TT ? TT : "Loading Link...", [MT, gT] = (0, zT.useState)(0), [nT, jT] = (0, zT.useReducer)((TT => TT + 1), 0);
      return (0, zT.useEffect)((() => {
        const TT = setTimeout((() => {
          jT()
        }), 1100);
        return () => {
          clearTimeout(TT)
        }
      }), [MT]), kT.featureFlags.canUseInviteLinks && (0, LT.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, LT.jsx)("div", {
          className: "InviteLinkInner",
          children: mT
        }), (0, LT.jsx)(WT.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(mT).catch((TT => {
              console.error("Failed to copy invite link:", TT)
            })), gT(Date.now())
          },
          disabled: Date.now() - MT < 1e3,
          children: Date.now() - MT < 1e3 ? UT("general:copied") : UT("general:copy")
        })]
      })
    }

    function ZT(TT) {
      const [UT, mT] = (0, zT.useState)(null);
      return (0, zT.useEffect)((() => {
        if (!TT) return;
        let UT = !0;
        return (0, MT.C)().then((TT => {
          UT && mT(TT)
        })).catch((TT => {
          console.error("Failed to get invite link:", TT)
        })), () => {
          UT = !1
        }
      }), [TT]), UT
    }
  },
  34262: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(2089),
      nT = mT(1188);

    function HT(TT) {
      const UT = Math.floor(TT / 3600),
        mT = Math.floor(TT % 3600 / 60),
        WT = Math.floor(TT % 60),
        zT = `${mT.toString().padStart(2,"0")}:${WT.toString().padStart(2,"0")}`;
      return UT > 0 ? `${UT}:${zT}` : zT
    }
    const kT = (0, WT.memo)((function(TT) {
      let {
        className: UT
      } = TT;
      const {
        recording: mT,
        seconds: WT
      } = (0, gT.i)("replayRecorder");
      return mT ? (0, nT.jsxs)("div", {
        className: MT()("RecordingIndicator", UT),
        children: [(0, nT.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, nT.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, nT.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: HT(WT)
        })]
      }) : null
    }))
  },
  34270: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(4641),
      zT = mT(4650);

    function MT(TT) {
      let {
        children: UT,
        showing: mT,
        globallyUniqueKey: MT,
        alwaysMountChildren: gT = !1,
        doGameplayStartStopOnShow: nT = !0,
        keepsMovement: HT = !1
      } = TT;
      return (0, zT.d)(!0, mT, MT, HT), (0, WT.c)(nT, mT), mT || gT ? UT : null
    }
  },
  6648: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(63),
      zT = mT(44);

    function MT(TT, UT) {
      var mT;
      const [MT, gT] = (0, WT.useState)(null !== (mT = zT.l.getItem(TT)) && void 0 !== mT ? mT : UT);
      return [MT, UT => {
        zT.l.setItem(TT, UT), gT(UT)
      }]
    }
  },
  8996: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => gT,
      E: () => cT,
      I: () => lT,
      J: () => HT,
      L: () => LT,
      N: () => kT,
      Q: () => BT,
      T: () => MT,
      e: () => zT,
      i: () => nT,
      m: () => WT,
      q: () => ZT,
      t: () => pT,
      x: () => jT
    });
    const WT = TT => ({
      left: TT.left,
      top: TT.top,
      right: TT.right,
      bottom: TT.bottom
    });

    function zT(TT) {
      return {
        x: (TT.left + TT.right) / 2,
        y: (TT.top + TT.bottom) / 2
      }
    }

    function MT(TT) {
      return 0 === TT.length ? null : TT.reduce(((TT, UT) => ({
        left: Math.min(TT.left, UT.left),
        top: Math.min(TT.top, UT.top),
        right: Math.max(TT.right, UT.right),
        bottom: Math.max(TT.bottom, UT.bottom)
      })))
    }

    function gT(TT, UT) {
      const mT = Math.max(0, (UT - (TT.right - TT.left)) / 2),
        WT = Math.max(0, (UT - (TT.bottom - TT.top)) / 2);
      return {
        left: TT.left - mT,
        top: TT.top - WT,
        right: TT.right + mT,
        bottom: TT.bottom + WT
      }
    }

    function nT(TT, UT) {
      return UT.x >= TT.left && UT.x <= TT.right && UT.y >= TT.top && UT.y <= TT.bottom
    }

    function HT(TT, UT, mT) {
      let WT = null,
        MT = 1 / 0;
      for (const {
          id: zT,
          box: gT
        }
        of UT) {
        const UT = (gT.right - gT.left) * (gT.bottom - gT.top);
        nT(gT, TT) && UT < MT && (MT = UT, WT = zT)
      }
      if (null !== WT) return WT;
      let HT = 1 / 0;
      for (const {
          id: kT,
          box: jT
        }
        of UT) {
        if (!nT(gT(jT, mT), TT)) continue;
        const UT = zT(jT),
          MT = Math.hypot(TT.x - UT.x, TT.y - UT.y);
        MT < HT && (HT = MT, WT = kT)
      }
      return WT
    }

    function kT(TT, UT, mT) {
      return {
        left: mT.left,
        top: mT.top,
        right: TT - mT.right,
        bottom: UT - mT.bottom
      }
    }

    function jT(TT, UT, mT, WT) {
      const zT = (TT, UT, mT) => Math.max(Math.min(UT, 0), Math.min(Math.max(mT, 0), TT));
      return {
        x: zT(UT, WT.left - TT.left, WT.right - TT.right),
        y: zT(mT, WT.top - TT.top, WT.bottom - TT.bottom)
      }
    }

    function lT(TT, UT, mT, WT, zT) {
      const MT = TT.dx * WT + UT,
        gT = TT.dy * zT + mT,
        nT = TT => Math.max(-1, Math.min(1, TT));
      return {
        dx: nT(MT / WT),
        dy: nT(gT / zT)
      }
    }

    function LT(TT, UT, mT, WT) {
      return UT <= 0 || mT <= 0 ? 1 : Math.max(.05, Math.min(1, TT / UT, WT / mT))
    }

    function pT(TT, UT, mT) {
      return Math.min(TT.right, UT.right) - Math.max(TT.left, UT.left) > mT && Math.min(TT.bottom, UT.bottom) - Math.max(TT.top, UT.top) > mT
    }

    function BT(TT, UT) {
      const mT = (TT, UT, mT, WT) => UT - TT > WT - mT ? mT - TT > UT - WT ? WT - UT : mT - TT : TT < mT ? mT - TT : UT > WT ? WT - UT : 0;
      return {
        x: mT(TT.left, TT.right, UT.left, UT.right),
        y: mT(TT.top, TT.bottom, UT.top, UT.bottom)
      }
    }

    function ZT(TT, UT, mT) {
      return pT(TT, {
        left: 0,
        top: 0,
        right: UT,
        bottom: mT
      }, 0)
    }

    function cT(TT, UT) {
      let {
        avoid: mT = null,
        bounds: WT = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, zT = 0, MT = 1 / 0;
      return TT.forEach(((TT, gT) => {
        const nT = UT.filter((UT => pT(TT, UT, 0))).length,
          HT = null !== WT && (TT.left < WT.left || TT.top < WT.top || TT.right > WT.right || TT.bottom > WT.bottom),
          kT = nT + (mT && pT(TT, mT, 0) ? 1e3 : 0) + (HT ? 1e6 : 0);
        kT < MT && (zT = gT, MT = kT)
      })), zT
    }
  },
  9003: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT,
      g: () => MT,
      k: () => zT,
      n: () => gT,
      p: () => lT,
      s: () => jT,
      w: () => kT,
      x: () => HT
    });
    var WT = mT(2589);
    const zT = ["J", "C", "A", "P", "U", "X", "G"],
      MT = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function gT(TT) {
      return TT ? ["X"] : ["P", "X"]
    }
    const nT = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: WT.B,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function HT(TT, UT, mT) {
      const WT = TT.querySelector(".InGameUi .TouchComponentsButtons");
      if (!WT) return nT;
      const MT = {},
        gT = {};
      for (const nT of zT) {
        const TT = WT.querySelector(`.TouchSlot${nT} > .TouchKey`);
        if (TT) {
          var HT, kT;
          MT[nT] = TT.cloneNode(!0);
          const UT = (null !== (HT = null === (kT = TT.querySelector(".TouchKeyLabel")) || void 0 === kT ? void 0 : kT.textContent) && void 0 !== HT ? HT : "").split(/\s+/).filter((TT => !/[\d\xd7]/.test(TT))).join(" ");
          UT && (gT[nT] = UT)
        }
      }
      const jT = UT => {
          const mT = TT.querySelector(`.InGameUi ${UT}`);
          return null !== mT && !mT.classList.contains("Hidden")
        },
        lT = [...TT.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((TT => TT.cloneNode(!0)));
      return {
        faces: Object.keys(MT).length > 0 ? MT : null,
        names: gT,
        shop: jT(".TouchInventoryKey.ShopKey"),
        bag: jT(".TouchInventoryKey.BagKey"),
        sprint: jT(".TouchSprintHit"),
        items: lT.length > 0 ? lT : null,
        rowIcons: UT,
        pinnedIcons: mT
      }
    }

    function kT(TT, UT) {
      const mT = {};
      for (const WT of [...gT(UT), "G"]) {
        const UT = TT.names[WT];
        UT && (mT[MT[WT]] = UT)
      }
      return mT
    }

    function jT(TT, UT) {
      const {
        faces: mT
      } = TT;
      if (null === mT) return [];
      const WT = new Set(Object.keys(mT).map((TT => MT[TT])));
      return gT(UT).filter((TT => !WT.has(MT[TT])))
    }

    function lT(TT, UT) {
      TT.replaceChildren(...[...UT.childNodes].map((TT => TT.cloneNode(!0))))
    }
  },
  34176: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => WT
    });
    const WT = "image/jpeg",
      zT = "jpg"
  },
  34185: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      e: () => kT,
      g: () => jT
    });
    var WT = mT(1802),
      zT = mT(3327),
      MT = mT(102),
      gT = mT(1876),
      nT = mT(34176);

    function HT() {
      return !(0, MT.isMobileApp)() || WT.e.supports("photos")
    }
    async function kT(TT) {
      var UT, mT;
      if ((0, MT.isMobileApp)()) {
        const {
          saved: UT
        } = await WT.e.request("photos.save", {
          data: await (0, zT.d)(TT),
          mimeType: nT.h
        });
        return UT ? "saved" : "denied"
      }
      return (0, MT.isIOS)() && null !== (UT = (mT = navigator).canShare) && void 0 !== UT && UT.call(mT, {
        files: [TT]
      }) ? jT(TT) : ((0, gT.c)(TT, TT.name), "saved")
    }
    async function jT(TT) {
      try {
        return await navigator.share({
          files: [TT]
        }), "shared"
      } catch (UT) {
        if (UT instanceof DOMException && "AbortError" === UT.name) return "Km";
        if (UT instanceof DOMException && "NotAllowedError" === UT.name) return "needsTap";
        throw UT
      }
    }
  },
  34169: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT,
      g: () => jT,
      j: () => lT
    });
    var WT = mT(25),
      zT = mT(34152),
      MT = mT(1752),
      gT = mT(34176);
    const nT = 8294400,
      HT = .92;

    function kT() {
      (0, MT.c)(), WT.b.set({
        screenshotMode: !0
      })
    }

    function jT() {
      WT.b.set({
        screenshotMode: !1
      })
    }
    async function lT() {
      const {
        width: TT,
        height: UT,
        scale: mT
      } = function(TT, UT, mT) {
        const WT = Math.max(1, TT),
          zT = Math.max(1, UT),
          MT = Math.min(Math.max(1, mT), Math.sqrt(nT / (WT * zT)));
        return {
          width: Math.round(WT * MT),
          height: Math.round(zT * MT),
          scale: MT
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: WT
      } = await zT.devTools.capturePhoto(TT, UT, {
        scale: mT,
        type: gT.h,
        quality: HT
      });
      return new File([WT], function(TT) {
        const UT = TT => String(TT).padStart(2, "0"),
          mT = `${TT.getFullYear()}${UT(TT.getMonth()+1)}${UT(TT.getDate())}`,
          WT = `${UT(TT.getHours())}${UT(TT.getMinutes())}${UT(TT.getSeconds())}`;
        return `bloxd-${mT}-${WT}.${gT.d}`
      }(new Date), {
        type: gT.h
      })
    }
  },
  8804: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      g: () => WT
    });
    const WT = "controllerOpenKeyboard",
      zT = "controllerKeyboardVisible"
  },
  34156: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    const WT = new Set(["chunkBorders"])
  },
  34152: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      ALL_DEV_TOOLS: () => gT,
      coreDevTools: () => kT,
      devTools: () => HT
    });
    var WT = mT(681),
      zT = mT(1398),
      MT = mT(34156);
    const gT = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function nT() {
      const {
        noaDevTools: TT
      } = await mT.e(242).then((() => mT(41207)));
      return TT
    }
    const HT = new class {
        constructor() {
          this.loadHost = nT, this.tools = gT
        }
        setHost(TT) {
          this.tools = null === TT ? gT : TT.tools, this.loadHost = null === TT ? nT : async () => TT
        }
        supports(TT) {
          return this.tools.has(TT)
        }
        async downloadScene(TT, UT) {
          const mT = await this.loadHost();
          await mT.downloadScene(TT, UT)
        }
        async setAmbientLightIntensity(TT) {
          const UT = await this.loadHost();
          await UT.setAmbientLightIntensity(TT)
        }
        async capturePhoto(TT, UT, mT) {
          return (await this.loadHost()).capturePhoto(TT, UT, mT)
        }
      },
      kT = {
        tools: MT.e,
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
    WT.B && HT.setHost(kT), (0, zT.q)((() => {
      HT.setHost(kT)
    }))
  },
  34315: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      e: () => zT,
      i: () => jT
    });
    var WT = mT(1688);

    function zT(TT) {
      var UT;
      return {
        ...gT.store,
        yaw: gT.store.yaw + (null !== (UT = WT.e[TT].previewYaw) && void 0 !== UT ? UT : 0)
      }
    }
    const MT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      gT = {
        player: MT,
        store: {
          ...MT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function nT(TT, UT) {
      TT instanceof Promise ? TT.then(UT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : UT(TT)
    }
    class HT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, nT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var UT;
        this.view = TT, null === (UT = this.opened) || void 0 === UT || UT.show(TT)
      }
      resize(TT, UT) {
        var mT;
        this.size = {
          width: TT,
          height: UT
        }, null === (mT = this.opened) || void 0 === mT || mT.resize(TT, UT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class kT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), nT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, UT;
        return null !== (TT = null === (UT = this.opened) || void 0 === UT ? void 0 : UT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, UT) {
        var mT;
        null === (mT = this.opened) || void 0 === mT || mT.setCosmetic(TT, UT)
      }
      playEmote(TT) {
        var UT;
        null === (UT = this.opened) || void 0 === UT || UT.playEmote(TT)
      }
      setOrbit(TT) {
        var UT;
        null === (UT = this.opened) || void 0 === UT || UT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var UT;
        await this.ready, await (null === (UT = this.opened) || void 0 === UT ? void 0 : UT.untilDrawn(TT))
      }
      resize(TT, UT) {
        var mT;
        this.size = {
          width: TT,
          height: UT
        }, null === (mT = this.opened) || void 0 === mT || mT.resize(TT, UT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const jT = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(TT) {
        this.host = TT
      }
      setDefaultHost(TT) {
        this.makeDefault = TT
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(TT) {
        return new HT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new HT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new HT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, UT) {
        return new kT(this.current().openCharacter(TT, UT))
      }
    }
  },
  34311: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT.d,
      d: () => WT.e,
      g: () => WT.i
    });
    var WT = mT(34315);
    class zT {
      constructor(TT) {
        this.load = TT, this.loaded = null, this.loading = null
      }
      run(TT) {
        return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
          throw this.loading = null, TT
        })), this.loading.then(TT))
      }
    }
    class MT {
      constructor() {
        this.mobScene = new zT((() => Promise.all([mT.e(73), mT.e(237), mT.e(236), mT.e(258), mT.e(98), mT.e(259), mT.e(76), mT.e(75), mT.e(256), mT.e(74), mT.e(266), mT.e(260), mT.e(265), mT.e(263), mT.e(255), mT.e(279), mT.e(233), mT.e(249), mT.e(261), mT.e(264), mT.e(78), mT.e(188), mT.e(227), mT.e(97), mT.e(239), mT.e(230), mT.e(246), mT.e(121), mT.e(247), mT.e(77), mT.e(251)]).then((() => mT(41227))))), this.characterScene = new zT((() => Promise.all([mT.e(73), mT.e(237), mT.e(236), mT.e(258), mT.e(98), mT.e(259), mT.e(76), mT.e(75), mT.e(256), mT.e(74), mT.e(266), mT.e(260), mT.e(265), mT.e(263), mT.e(255), mT.e(279), mT.e(233), mT.e(249), mT.e(261), mT.e(264), mT.e(78), mT.e(188), mT.e(227), mT.e(97), mT.e(239), mT.e(230), mT.e(246), mT.e(121), mT.e(247), mT.e(77), mT.e(250)]).then((() => mT(41341)))))
      }
      openMob(TT) {
        return this.mobScene.run((UT => UT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((UT => UT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((UT => UT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, UT) {
        return this.characterScene.run((mT => mT.openCharacterPreview(TT, UT)))
      }
    }
    WT.i.setDefaultHost((() => new MT))
  },
  6723: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => MT
    });
    var WT = mT(44);
    const zT = "shaderPack";
    async function MT() {
      var TT;
      let UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await WT.h.getItem(zT, UT)) && void 0 !== TT ? TT : null
    }
  },
  8986: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT,
      g: () => HT
    });
    var WT = mT(25),
      zT = mT(1429),
      MT = mT(102);
    const gT = {
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

    function nT() {
      return (0, MT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const HT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, UT) {
        var mT;
        if (!this.deps.enabled()) return;
        const WT = gT[TT],
          zT = null !== UT && void 0 !== UT ? UT : WT.pattern;
        if (null === zT) return void console.warn("No vibration pattern for", TT);
        const MT = this.deps.now();
        MT - this.lastAnyAt < 40 && WT.priority < this.playingPriority || MT - (null !== (mT = this.lastAt.get(TT)) && void 0 !== mT ? mT : -1 / 0) < WT.minGapMs || MT < this.playingUntil && WT.priority < this.playingPriority || (this.lastAt.set(TT, MT), this.lastAnyAt = MT, this.playingUntil = MT + zT.reduce(((TT, UT) => TT + UT), 0), this.playingPriority = WT.priority, this.deps.vibrate(zT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => nT() && WT.b.get("isTouchScreen") && WT.b.get("clientEscMenuOptions").vibration && !(0, zT.e)()
    })
  },
  34191: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT,
      g: () => lT,
      j: () => jT
    });
    var WT = mT(25),
      zT = mT(1802),
      MT = mT(44),
      gT = mT(3762);
    const nT = 2592e5,
      HT = "notificationOptInLastPromptedAt";
    async function kT() {
      var TT;
      const UT = null !== (TT = MT.l.getItem(HT)) && void 0 !== TT ? TT : 0;
      return Date.now() - UT < nT ? null : lT()
    }

    function jT() {
      MT.l.setItem(HT, Date.now())
    }
    async function lT() {
      return await zT.e.ready, zT.e.supports("notifications") ? WT.b.get("mobilePushNotificationsCanAsk") ? async () => {
        zT.e.request("notifications.requestPermission", {}).then((TT => {
          let {
            canAsk: UT
          } = TT;
          WT.b.set({
            mobilePushNotificationsCanAsk: UT
          })
        }), (TT => {
          console.error("The app couldn't ask for push notifications:", TT)
        }))
      }: null: await gT.c.canAsk() ? () => gT.c.requestPermission() : null
    }
  },
  8901: (TT, UT, mT) => {
    function WT(TT, UT) {
      return !TT.hidden && (UT || !TT.isRewardedAd)
    }

    function zT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function MT(TT, UT) {
      var mT;
      if ("dropdown" === (null === (mT = TT.userInput) || void 0 === mT ? void 0 : mT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const mT of TT.userInput.dropdownOptions)
          if (zT(mT) === UT) return "object" === typeof mT ? mT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", UT)
      }
      return TT.cost
    }

    function gT(TT, UT, mT) {
      var WT;
      const zT = null !== (WT = mT.excludedPlayers) && void 0 !== WT ? WT : [UT];
      return TT.filter((TT => !zT.includes(TT)))
    }
    mT.d(UT, {
      e: () => MT,
      g: () => zT,
      i: () => gT,
      j: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);