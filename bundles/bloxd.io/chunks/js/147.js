export const id = 147;
export const ids = [147, 220];
export const modules = {
  35026: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(332),
      SM = iM(35029);

    function jM(MM, rM, iM) {
      const jM = Object.entries(rM).sort(((MM, rM) => rM[1] - MM[1])),
        aM = (0, OM.ob)(MM);
      aM.push(MM ? "\n\n" : "\n");
      for (const [SM, hM] of jM) {
        var PM, nM, QM;
        const MM = null !== (PM = null === iM || void 0 === iM || null === (nM = iM[SM]) || void 0 === nM ? void 0 : nM.icon) && void 0 !== PM ? PM : `${SM} Enchantment`;
        aM.push({
          icon: MM,
          style: {
            fontSize: "1.5rem"
          }
        }), aM.push({
          str: `${SM} ${null!==(QM=(0,OM.T)(hM))&&void 0!==QM?QM:hM}\n`
        })
      }
      aM.push({
        str: "\n"
      });
      for (const [OM, hM] of jM) {
        var zM, LM, mM, HM;
        const MM = null !== (zM = null === iM || void 0 === iM || null === (LM = iM[OM]) || void 0 === LM ? void 0 : LM.icon) && void 0 !== zM ? zM : `${OM} Enchantment`,
          rM = null !== (mM = null === iM || void 0 === iM || null === (HM = iM[OM]) || void 0 === HM ? void 0 : HM.description) && void 0 !== mM ? mM : (0, SM.k)(OM);
        aM.push({
          icon: MM,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), aM.push({
          str: rM,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), aM.push({
          str: "\n"
        })
      }
      return aM
    }
  },
  35035: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      c: () => lM,
      f: () => dM,
      j: () => nM,
      l: () => yM,
      o: () => zM,
      q: () => mM,
      u: () => JM,
      x: () => LM
    });
    var OM = iM(313),
      SM = iM(625),
      jM = iM(332),
      aM = iM(4565),
      PM = iM(35026);

    function nM(MM, rM) {
      var iM;
      let {
        player: OM,
        chestOrCreative: SM
      } = MM;
      var jM;
      return rM < OM.length ? null !== (jM = OM[rM]) && void 0 !== jM ? jM : null : null !== (iM = SM[rM - OM.length]) && void 0 !== iM ? iM : null
    }

    function QM(MM) {
      var rM;
      return null !== (rM = MM.amount) && void 0 !== rM ? rM : 0
    }

    function zM(MM) {
      return 0 === MM.button || void 0 === MM.button
    }

    function LM(MM) {
      return !!MM.shiftKey
    }

    function mM(MM) {
      return "touches" in MM || "touch" === MM.pointerType || "pen" === MM.pointerType
    }
    const HM = new Set,
      hM = 50;

    function JM(MM, rM) {
      var iM;
      const OM = null === (iM = MM[rM]) || void 0 === iM ? void 0 : iM.displayName;
      return (0, SM.J)(OM) ? "string" !== typeof rM ? "" : (!HM.has(rM) && HM.size < hM && (HM.add(rM), console.warn(`No item called "${rM}", so its hover shows the name as given`)), rM) : OM
    }

    function dM(MM, rM, iM) {
      var nM, QM, zM, LM, mM, HM, hM, dM, yM, lM, EM, UM, GM, CM;
      const eM = MM.attributes,
        bM = null !== (nM = null === (QM = rM[MM.name]) || void 0 === QM ? void 0 : QM.rootName) && void 0 !== nM ? nM : MM.name,
        wM = null !== (zM = null !== (LM = eM.customDisplayName) && void 0 !== LM ? LM : null === (mM = rM[MM.name]) || void 0 === mM ? void 0 : mM.displayName) && void 0 !== zM ? zM : JM(rM, bM);
      let tM = wM;
      const gM = null === (HM = eM.customAttributes) || void 0 === HM ? void 0 : HM.enchantmentTier;
      gM && (tM = (0, jM.ob)(wM, {
        colour: jM.kb[gM]
      }));
      const uM = null !== (hM = null !== (dM = null !== (yM = function(MM, rM) {
        var iM;
        if (void 0 === MM || null !== (iM = rM.customAttributes) && void 0 !== iM && iM.author) return MM;
        const SM = (0, OM.bc)(MM);
        return SM.every((MM => "string" === typeof MM)) ? MM : SM.map((MM => "string" === typeof MM ? MM : {
          icon: MM.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(eM.customDescription, eM)) && void 0 !== yM ? yM : null === (lM = rM[MM.name]) || void 0 === lM ? void 0 : lM.description) && void 0 !== dM ? dM : null === (EM = rM[bM]) || void 0 === EM ? void 0 : EM.description) && void 0 !== hM ? hM : "";
      let RM = uM;
      if (null !== (UM = eM.customAttributes) && void 0 !== UM && UM.enchantments) RM = (0, PM.e)(uM, eM.customAttributes.enchantments, eM.customAttributes.enchantmentData);
      else if (iM[bM]) RM = (0, jM.ob)(uM), RM.push({
        str: "\n"
      }), RM.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (GM = eM.customAttributes) && void 0 !== GM && GM.mobSettings) {
        var pM, WM;
        const MM = eM.customAttributes.mobSettings;
        var sM, DM;
        if (RM = [], (0, SM.J)(eM.customAttributes.health) || (RM.push({
            str: "\n"
          }), RM.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), RM.push({
            str: " "
          }), RM.push({
            str: eM.customAttributes.health.toString()
          }), (0, SM.J)(MM.maxHealth) || (RM.push({
            str: "/"
          }), RM.push({
            str: MM.maxHealth.toString()
          }))), !(0, SM.J)(MM.attackDamage) && MM.attackDamage > 0 && (RM.push({
            str: "\n"
          }), RM.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), RM.push({
            str: " "
          }), RM.push({
            str: MM.attackDamage.toString()
          })), !(0, SM.J)(MM.secondaryAttackDamage) && MM.secondaryAttackDamage > 0 && (RM.push({
            str: "\n"
          }), RM.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), RM.push({
            str: " "
          }), RM.push({
            str: MM.secondaryAttackDamage.toString()
          })), (0, SM.J)(MM.baseRunningSpeed) || (RM.push({
            str: "\n"
          }), RM.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), RM.push({
            str: " "
          }), RM.push({
            str: MM.baseRunningSpeed.toFixed(2)
          })), "Saddled" === MM.metaInfo) RM.push({
          str: "\n"
        }), RM.push({
          str: {
            translationKey: "general:has"
          }
        }), RM.push({
          str: " "
        }), RM.push({
          icon: null !== (sM = null === (DM = MM.tameInfo) || void 0 === DM ? void 0 : DM.saddleItemName) && void 0 !== sM ? sM : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (RM.push({
            str: "\n"
          }), RM.push({
            str: "\n"
          }), MM.petInfo && null !== (pM = MM.tameInfo) && void 0 !== pM && pM.supportsFriendship) {
          const rM = aM.d.getIconsFromFriendshipPoints(MM.petInfo.friendshipPoints);
          for (const MM of rM) RM.push({
            icon: MM,
            style: {
              fontSize: "1.5em"
            }
          });
          RM.push({
            str: "\n"
          });
          const iM = aM.d.getMobHungerLevel(MM.petInfo.lastFedAt);
          for (const MM of aM.d.hungerLevelIcons[iM]) RM.push({
            icon: MM,
            style: {
              fontSize: "1.5em"
            }
          });
          RM.push({
            str: " "
          }), RM.push({
            str: aM.d.hungerLevelTranslations[iM],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (MM.tameInfo && null !== (WM = MM.tameInfo) && void 0 !== WM && WM.supportsFriendship) {
          var kM, ZM;
          let rM = null !== (kM = MM.tameInfo.likedFoods) && void 0 !== kM ? kM : [];
          RM.push({
            str: "\n"
          }), RM.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: aM.d.feedTextColours[aM.d.MobFoodType.Superliked]
            }
          }), RM.push({
            str: " "
          }), null !== (ZM = MM.petInfo) && void 0 !== ZM && ZM.superlikedFoodKnown ? (RM.push({
            icon: MM.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), rM = rM.filter((rM => rM !== MM.petInfo.superlikedFood))) : RM.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), RM.push({
            str: "\n"
          }), RM.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: aM.d.feedTextColours[aM.d.MobFoodType.Liked]
            }
          }), RM.push({
            str: " "
          });
          for (const MM of rM) RM.push({
            icon: MM,
            style: {
              fontSize: "1.5em"
            }
          });
          RM.push({
            str: "\n"
          }), RM.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: aM.d.feedTextColours[aM.d.MobFoodType.Neutral]
            }
          }), RM.push({
            str: " "
          });
          for (const iM of null !== (oM = MM.tameInfo.neutralFoods) && void 0 !== oM ? oM : []) {
            var oM;
            RM.push({
              icon: iM,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          RM.push({
            str: "\n"
          }), RM.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: aM.d.feedTextColours[aM.d.MobFoodType.Disliked]
            }
          }), RM.push({
            str: " "
          });
          for (const iM of null !== (fM = MM.tameInfo.dislikedFoods) && void 0 !== fM ? fM : []) {
            var fM;
            RM.push({
              icon: iM,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        RM.length > 0 ? (RM.shift(), RM.unshift(...(0, jM.ob)(uM))) : RM = (0, jM.ob)(uM)
      }
      return {
        name: tM,
        desc: RM,
        fontStyle: null !== (CM = eM.customAttributes) && void 0 !== CM && CM.author ? "italic" : "normal"
      }
    }

    function yM(MM, rM, iM, OM) {
      const SM = nM(MM, iM),
        jM = nM(MM, OM);
      if (!SM) return !1;
      const aM = rM[SM.name].armourReduction,
        PM = rM[jM.name].armourReduction;
      if (PM === aM) {
        var QM, zM, LM, mM;
        const MM = null !== (QM = null === (zM = SM.attributes.customAttributes) || void 0 === zM ? void 0 : zM.enchantmentTier) && void 0 !== QM ? QM : "Tier 0",
          rM = null !== (LM = null === (mM = jM.attributes.customAttributes) || void 0 === mM ? void 0 : mM.enchantmentTier) && void 0 !== LM ? LM : "Tier 0";
        return parseInt(MM.replace("Tier ", "")) >= parseInt(rM.replace("Tier ", ""))
      }
      return aM > PM
    }

    function lM(MM) {
      let rM;
      if ("number" === typeof MM) {
        const iM = document.querySelector(`[data-inven-idx="${MM}"]`);
        if (!iM) return null;
        rM = iM.getBoundingClientRect()
      } else rM = MM.getBoundingClientRect();
      return {
        x: rM.left + rM.width / 2,
        y: rM.top + rM.height / 2
      }
    }
  },
  9498: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => tM,
      f: () => RM
    });
    var OM = iM(44),
      SM = iM(22),
      jM = iM(2690),
      aM = iM(3815);
    const PM = 6,
      nM = 4,
      QM = ["HudMove-inventory", "HudLocked-inventory"];

    function zM(MM) {
      let {
        left: rM,
        right: iM,
        height: OM,
        rowTop: SM,
        besideBottom: jM,
        obstacles: aM
      } = MM;
      const QM = aM.filter((MM => MM.left < iM + PM && MM.right > rM - PM));
      let zM = jM;
      for (let PM = 0; PM <= QM.length; PM++) {
        const MM = QM.filter((MM => MM.top < zM + nM && MM.bottom > zM - OM - nM));
        if (0 === MM.length) break;
        zM = Math.min(...MM.map((MM => MM.top))) - nM
      }
      return zM === jM ? null : Math.ceil(SM - zM)
    }

    function LM(MM) {
      return Array.from(MM.children).filter((MM => !MM.classList.contains("HotBarRow")))
    }

    function mM(MM) {
      return function(MM) {
        const rM = [],
          iM = (MM, OM) => {
            const SM = MM.getBoundingClientRect();
            if (SM.width > 0 && SM.height > 0) rM.push(MM);
            else if (OM < 2)
              for (const rM of Array.from(MM.children)) iM(rM, OM + 1)
          };
        for (const OM of MM) iM(OM, 0);
        return rM
      }(LM(MM).flatMap((MM => MM.classList.contains("AuraBarWrapper") ? [] : MM.classList.contains("BottomScreenStatBarList") ? Array.from(MM.children) : [MM])))
    }

    function HM(MM, rM) {
      var iM;
      const OM = null === (iM = MM.querySelector(":scope > .AuraBarWrapper")) || void 0 === iM ? void 0 : iM.getBoundingClientRect();
      return (OM && OM.height > 0 ? OM.top : rM) - nM
    }
    const hM = ".BottomScreenMessage, [role='status']";

    function JM(MM, rM, iM, OM, SM) {
      const jM = MM => MM.map((MM => MM.getBoundingClientRect())),
        aM = zM({
          ...iM,
          obstacles: jM(iM.obstacles.filter((MM => !MM.matches(hM))))
        }),
        PM = rM.ownerDocument.defaultView,
        nM = `${null===PM||void 0===PM?void 0:PM.innerWidth}x${null===PM||void 0===PM?void 0:PM.innerHeight}:${OM}:${Math.round(iM.rowTop)}`,
        QM = MM.get(rM),
        LM = (null === QM || void 0 === QM ? void 0 : QM.at) === nM ? (mM = QM.rise, HM = aM, null === mM ? HM : null === HM ? mM : Math.max(mM, HM)) : aM;
      var mM, HM;
      const JM = zM({
        ...iM,
        besideBottom: null === LM ? iM.besideBottom : iM.rowTop - LM,
        obstacles: jM(iM.obstacles)
      });
      return SM && MM.set(rM, {
        at: nM,
        rise: LM
      }), null !== JM && void 0 !== JM ? JM : LM
    }

    function dM(MM, rM, iM, OM) {
      MM.classList.toggle(rM, null !== OM), null === OM ? MM.style.removeProperty(iM) : MM.style.setProperty(iM, `${OM}px`)
    }
    const yM = new WeakMap,
      lM = new WeakMap,
      EM = "(orientation: portrait) and (max-width: 600px)";

    function UM(MM, rM) {
      const iM = MM.getBoundingClientRect();
      if (0 === iM.width) return null;
      const OM = [iM, ...Array.from(MM.children).filter((MM => !(MM => rM.contains(MM.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(MM))).map((MM => MM.getBoundingClientRect())).filter((MM => MM.width > 0))];
      return {
        left: Math.min(...OM.map((MM => MM.left))),
        top: Math.min(...OM.map((MM => MM.top))),
        right: Math.max(...OM.map((MM => MM.right))),
        bottom: Math.max(...OM.map((MM => MM.bottom)))
      }
    }

    function GM(MM) {
      let {
        slotsLeft: rM,
        slotsRight: iM,
        width: OM,
        zoneRight: SM
      } = MM;
      const jM = Math.max(0, Math.floor(iM - rM - OM));
      return null === SM ? 0 : Math.min(jM, Math.max(0, Math.ceil(SM + PM - rM)))
    }

    function CM(MM) {
      var rM;
      const iM = MM.getBoundingClientRect();
      if (0 === iM.width) return null;
      const OM = null === (rM = MM.parentElement) || void 0 === rM ? void 0 : rM.getBoundingClientRect();
      return OM && OM.width > 0 ? Math.min(iM.right, OM.left + OM.width * eM) : iM.right
    }
    const eM = .35,
      bM = new WeakMap,
      wM = new WeakMap;

    function tM(MM) {
      gM(MM) && gM(MM),
        function(MM) {
          var rM, iM;
          const OM = MM.documentElement.classList;
          if (!OM.contains("TouchHotbar") || !OM.contains("TouchHotbarKeysAbove") || QM.some((MM => OM.contains(MM))) || !1 !== (null === (rM = MM.defaultView) || void 0 === rM || null === (iM = rM.matchMedia) || void 0 === iM ? void 0 : iM.call(rM, EM).matches)) return;
          const SM = MM.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            jM = null === SM || void 0 === SM ? void 0 : SM.closest(".BottomMiddleElements"),
            aM = null === SM || void 0 === SM ? void 0 : SM.parentElement;
          if (!SM || !jM || !aM || jM.classList.contains("TouchInventoryOpen") || SM.querySelector("[data-pressing]")) return;
          const PM = UM(SM, OM),
            nM = aM.getBoundingClientRect().top,
            zM = PM && JM(yM, jM, {
              left: PM.left,
              right: PM.right,
              height: PM.bottom - PM.top,
              rowTop: nM,
              besideBottom: HM(jM, nM),
              obstacles: mM(jM).filter((MM => !MM.classList.contains("BottomScreenMessage")))
            }, `${Math.round(PM.left)}:${Math.round(PM.right-PM.left)}x${Math.round(PM.bottom-PM.top)}`, !0);
          lM.has(jM) && lM.get(jM) === zM || (dM(jM, "KeysAboveUp", "--touch-keys-above-rise", zM), lM.set(jM, zM))
        }(MM)
    }

    function gM(MM) {
      var rM, iM, OM, SM;
      const jM = MM.documentElement.classList;
      if (!jM.contains("TouchHotbar") || jM.contains("TouchHotbarKeysAbove") || QM.some((MM => jM.contains(MM))) || null === (rM = MM.defaultView) || void 0 === rM || null === (iM = rM.matchMedia) || void 0 === iM || !iM.call(rM, uM).matches) return !1;
      const aM = MM.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        PM = null === aM || void 0 === aM ? void 0 : aM.parentElement,
        nM = null === aM || void 0 === aM ? void 0 : aM.closest(".BottomMiddleElements"),
        zM = null === nM || void 0 === nM ? void 0 : nM.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!aM || !PM || !nM || !zM || nM.classList.contains("TouchInventoryOpen")) return !1;
      const LM = aM.getBoundingClientRect();
      if (0 === LM.width) return !1;
      const hM = MM.querySelector(".JoystickZone"),
        yM = zM.getBoundingClientRect(),
        lM = PM.getBoundingClientRect().top,
        EM = GM({
          slotsLeft: yM.left,
          slotsRight: yM.right,
          width: LM.width,
          zoneRight: hM ? CM(hM) : null
        }),
        UM = bM.get(nM),
        eM = yM.left + EM,
        tM = {
          shift: EM,
          rise: JM(wM, nM, {
            left: eM,
            right: eM + LM.width,
            height: LM.height,
            rowTop: lM,
            besideBottom: HM(nM, lM),
            obstacles: mM(nM)
          }, `${EM}:${Math.round(LM.width)}`, (null !== (OM = null === UM || void 0 === UM ? void 0 : UM.shift) && void 0 !== OM ? OM : 0) === EM)
        };
      return (null === UM || void 0 === UM ? void 0 : UM.shift) !== tM.shift && nM.style.setProperty("--touch-shop-above-shift", `${tM.shift}px`), (null === UM || void 0 === UM ? void 0 : UM.rise) !== tM.rise && dM(nM, "ShopAboveUp", "--touch-shop-above-rise", tM.rise), bM.set(nM, tM), (null !== (SM = null === UM || void 0 === UM ? void 0 : UM.shift) && void 0 !== SM ? SM : 0) !== tM.shift
    }
    const uM = "(orientation: landscape) and (max-height: 500px)";

    function RM(MM, rM, iM) {
      (0, OM.useLayoutEffect)((() => {
        var rM;
        const OM = null === (rM = MM.current) || void 0 === rM ? void 0 : rM.closest(".BottomMiddleElements");
        if (!OM || iM) return;
        const PM = new ResizeObserver((() => {
            HM(!1)
          })),
          nM = () => {
            PM.disconnect();
            const MM = document.querySelector(".JoystickZone");
            for (const rM of [MM, OM, OM.querySelector(".HotBarGameItemsContainer"), ...mM(OM)]) rM && PM.observe(rM)
          };
        let QM = null,
          zM = !1;
        const HM = MM => {
            zM ||= MM, QM ??= requestAnimationFrame((() => {
              QM = null, zM && (zM = !1, nM()), tM(document)
            }))
          },
          hM = new MutationObserver((() => {
            HM(!0)
          }));
        hM.observe(OM, {
          childList: !0
        });
        for (const MM of LM(OM)) hM.observe(MM, {
          childList: !0,
          subtree: !0
        });
        tM(document), nM();
        const JM = () => {
            HM(!0)
          },
          dM = [(0, SM.j)(jM.f, JM), (0, SM.j)(aM.d, JM)],
          yM = new MutationObserver((() => {
            HM(!1)
          }));
        return MM.current && yM.observe(MM.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          yM.disconnect(), null !== QM && cancelAnimationFrame(QM), PM.disconnect(), hM.disconnect();
          for (const MM of dM) MM()
        }
      }), [MM, rM, iM])
    }
  },
  34938: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => HM,
      e: () => hM,
      i: () => JM
    });
    var OM = iM(1520),
      SM = iM(44),
      jM = iM(1360),
      aM = iM(4917),
      PM = iM(2474),
      nM = iM(1188),
      QM = iM(83),
      zM = iM(2084),
      LM = iM(1396),
      mM = iM(1303);

    function HM(MM) {
      let {
        show: rM,
        onClose: iM
      } = MM;
      const {
        requestedGameNameWithVariation: OM,
        lobbyName: SM,
        shownLobbyName: jM
      } = (0, zM.j)("connectedGame"), nM = (0, PM.b)(OM, SM, !1);
      return QM.featureFlags.canUseInviteLinks && (0, mM.jsx)(aM.e, {
        show: rM,
        close: iM,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, mM.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, mM.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, mM.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, mM.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === nM ? (0, mM.jsx)(LM.d, {}) : nM, (0, mM.jsx)("br", {}), "Lobby Name: ", jM, (0, mM.jsx)("br", {}), (0, mM.jsx)("br", {}), (0, mM.jsx)("br", {}), (0, mM.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, mM.jsx)(hM, {})]
        })
      })
    }

    function hM() {
      var MM;
      const {
        t: rM
      } = (0, nM.A)(), iM = null !== (MM = JM(QM.featureFlags.canUseInviteLinks)) && void 0 !== MM ? MM : "Loading Link...", [jM, aM] = (0, SM.useState)(0), [PM, zM] = (0, SM.useReducer)((MM => MM + 1), 0);
      return (0, SM.useEffect)((() => {
        const MM = setTimeout((() => {
          zM()
        }), 1100);
        return () => {
          clearTimeout(MM)
        }
      }), [jM]), QM.featureFlags.canUseInviteLinks && (0, mM.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, mM.jsx)("div", {
          className: "InviteLinkInner",
          children: iM
        }), (0, mM.jsx)(OM.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(iM).catch((MM => {
              console.error("Failed to copy invite link:", MM)
            })), aM(Date.now())
          },
          disabled: Date.now() - jM < 1e3,
          children: Date.now() - jM < 1e3 ? rM("general:copied") : rM("general:copy")
        })]
      })
    }

    function JM(MM) {
      const [rM, iM] = (0, SM.useState)(null);
      return (0, SM.useEffect)((() => {
        if (!MM) return;
        let rM = !0;
        return (0, jM.w)().then((MM => {
          rM && iM(MM)
        })).catch((MM => {
          console.error("Failed to get invite link:", MM)
        })), () => {
          rM = !1
        }
      }), [MM]), rM
    }
  },
  35014: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(2084),
      PM = iM(1303);

    function nM(MM) {
      const rM = Math.floor(MM / 3600),
        iM = Math.floor(MM % 3600 / 60),
        OM = Math.floor(MM % 60),
        SM = `${iM.toString().padStart(2,"0")}:${OM.toString().padStart(2,"0")}`;
      return rM > 0 ? `${rM}:${SM}` : SM
    }
    const QM = (0, OM.memo)((function(MM) {
      let {
        className: rM
      } = MM;
      const {
        recording: iM,
        seconds: OM
      } = (0, aM.j)("replayRecorder");
      return iM ? (0, PM.jsxs)("div", {
        className: jM()("RecordingIndicator", rM),
        children: [(0, PM.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, PM.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, PM.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: nM(OM)
        })]
      }) : null
    }))
  },
  35086: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1303);
    const aM = 21,
      PM = 2 * Math.PI * aM;

    function nM(MM) {
      let {
        tier: rM,
        state: iM,
        progress: OM,
        size: nM = "large"
      } = MM;
      const QM = SM()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === nM,
        SeasonPassTierNodeLarge: "large" === nM,
        SeasonPassTierNodeReached: "reached" === iM,
        SeasonPassTierNodeEarning: "earning" === iM
      });
      if ("earning" !== iM || "large" === nM) return (0, jM.jsx)("span", {
        className: QM,
        children: (0, jM.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: rM
        })
      });
      const zM = Math.max(0, Math.min(1, OM));
      return (0, jM.jsxs)("span", {
        className: QM,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * zM),
        children: [(0, jM.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, jM.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, jM.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: aM
          }), (0, jM.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: aM,
            strokeDasharray: `${zM*PM} ${PM}`,
            transform: "rotate(-90 28 28)"
          }), (0, jM.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, jM.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: rM
        })]
      })
    }
  },
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  7077: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(44),
      SM = iM(30);

    function jM(MM, rM) {
      var iM;
      const [jM, aM] = (0, OM.useState)(null !== (iM = SM.g.getItem(MM)) && void 0 !== iM ? iM : rM);
      return [jM, rM => {
        SM.g.setItem(MM, rM), aM(rM)
      }]
    }
  },
  9484: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => nM,
      D: () => mM,
      H: () => QM,
      I: () => hM,
      M: () => jM,
      e: () => SM,
      i: () => PM,
      j: () => OM,
      n: () => JM,
      r: () => HM,
      s: () => zM,
      t: () => aM,
      w: () => dM,
      z: () => LM
    });
    const OM = MM => ({
      left: MM.left,
      top: MM.top,
      right: MM.right,
      bottom: MM.bottom
    });

    function SM(MM) {
      return {
        x: (MM.left + MM.right) / 2,
        y: (MM.top + MM.bottom) / 2
      }
    }

    function jM(MM) {
      return 0 === MM.length ? null : MM.reduce(((MM, rM) => ({
        left: Math.min(MM.left, rM.left),
        top: Math.min(MM.top, rM.top),
        right: Math.max(MM.right, rM.right),
        bottom: Math.max(MM.bottom, rM.bottom)
      })))
    }

    function aM(MM, rM) {
      const iM = Math.max(0, (rM - (MM.right - MM.left)) / 2),
        OM = Math.max(0, (rM - (MM.bottom - MM.top)) / 2);
      return {
        left: MM.left - iM,
        top: MM.top - OM,
        right: MM.right + iM,
        bottom: MM.bottom + OM
      }
    }

    function PM(MM, rM) {
      return rM.x >= MM.left && rM.x <= MM.right && rM.y >= MM.top && rM.y <= MM.bottom
    }

    function nM(MM, rM, iM) {
      let OM = null,
        jM = 1 / 0;
      for (const {
          id: SM,
          box: aM
        }
        of rM) {
        const rM = (aM.right - aM.left) * (aM.bottom - aM.top);
        PM(aM, MM) && rM < jM && (jM = rM, OM = SM)
      }
      if (null !== OM) return OM;
      let nM = 1 / 0;
      for (const {
          id: QM,
          box: zM
        }
        of rM) {
        if (!PM(aM(zM, iM), MM)) continue;
        const rM = SM(zM),
          jM = Math.hypot(MM.x - rM.x, MM.y - rM.y);
        jM < nM && (nM = jM, OM = QM)
      }
      return OM
    }

    function QM(MM, rM, iM) {
      return {
        left: iM.left,
        top: iM.top,
        right: MM - iM.right,
        bottom: rM - iM.bottom
      }
    }

    function zM(MM, rM, iM, OM) {
      const SM = (MM, rM, iM) => Math.max(Math.min(rM, 0), Math.min(Math.max(iM, 0), MM));
      return {
        x: SM(rM, OM.left - MM.left, OM.right - MM.right),
        y: SM(iM, OM.top - MM.top, OM.bottom - MM.bottom)
      }
    }

    function LM(MM, rM, iM, OM, SM) {
      const jM = MM.dx * OM + rM,
        aM = MM.dy * SM + iM,
        PM = MM => Math.max(-1, Math.min(1, MM));
      return {
        dx: PM(jM / OM),
        dy: PM(aM / SM)
      }
    }

    function mM(MM, rM, iM, OM) {
      return rM <= 0 || iM <= 0 ? 1 : Math.max(.05, Math.min(1, MM / rM, OM / iM))
    }

    function HM(MM, rM, iM) {
      return Math.min(MM.right, rM.right) - Math.max(MM.left, rM.left) > iM && Math.min(MM.bottom, rM.bottom) - Math.max(MM.top, rM.top) > iM
    }

    function hM(MM, rM) {
      const iM = (MM, rM, iM, OM) => rM - MM > OM - iM ? iM - MM > rM - OM ? OM - rM : iM - MM : MM < iM ? iM - MM : rM > OM ? OM - rM : 0;
      return {
        x: iM(MM.left, MM.right, rM.left, rM.right),
        y: iM(MM.top, MM.bottom, rM.top, rM.bottom)
      }
    }

    function JM(MM, rM, iM) {
      return HM(MM, {
        left: 0,
        top: 0,
        right: rM,
        bottom: iM
      }, 0)
    }

    function dM(MM, rM) {
      let {
        avoid: iM = null,
        bounds: OM = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, SM = 0, jM = 1 / 0;
      return MM.forEach(((MM, aM) => {
        const PM = rM.filter((rM => HM(MM, rM, 0))).length,
          nM = null !== OM && (MM.left < OM.left || MM.top < OM.top || MM.right > OM.right || MM.bottom > OM.bottom),
          QM = PM + (iM && HM(MM, iM, 0) ? 1e3 : 0) + (nM ? 1e6 : 0);
        QM < jM && (SM = aM, jM = QM)
      })), SM
    }
  },
  9479: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      E: () => mM,
      H: () => LM,
      d: () => PM,
      e: () => UM,
      f: () => EM,
      g: () => lM,
      h: () => nM,
      k: () => hM,
      m: () => zM,
      q: () => CM,
      s: () => GM,
      w: () => QM
    });
    var OM = iM(9484),
      SM = iM(2666);
    const jM = {
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
        ...Object.fromEntries(SM.x.map((MM => [MM, "menu"])))
      },
      aM = MM => SM.t.filter((rM => jM[rM] === MM)),
      PM = new Set(aM("cluster")),
      nM = new Set(aM("inventory")),
      QM = MM => "inventory" === MM || nM.has(MM),
      zM = MM => {
        const rM = jM[MM];
        return void 0 === rM ? [] : [rM, ...zM(rM)]
      },
      LM = MM => [MM, ...zM(MM)],
      mM = (MM, rM, iM) => "shop" === MM && rM ? iM("inventory") ? ["inventory"] : iM("bag") ? [MM, "bag"] : [MM] : [MM],
      HM = (MM, rM, iM, SM) => {
        const jM = MM => {
          const jM = rM[MM],
            {
              x: aM,
              y: PM
            } = jM && SM(MM) ? (0, OM.I)(jM, iM) : {
              x: 0,
              y: 0
            };
          return jM && {
            left: jM.left + aM,
            top: jM.top + PM,
            right: jM.right + aM,
            bottom: jM.bottom + PM
          }
        };
        return MM.flatMap((MM => {
          const aM = rM[MM];
          if ("inventory" !== MM || !aM || aM.right - aM.left <= iM.right - iM.left && aM.bottom - aM.top <= iM.bottom - iM.top) return [MM];
          const [PM, nM] = [jM("shop"), jM("bag")];
          return PM && nM && !(0, OM.r)(PM, nM, 0) ? ["shop", "bag"].filter(SM) : [MM]
        }))
      },
      hM = new Map([
        ["cluster", PM],
        ["inventory", nM]
      ]),
      JM = ["cluster"],
      dM = [...JM, ...SM.t.filter((MM => !JM.includes(MM) && !jM[MM]))],
      yM = MM => [MM, ...aM(MM).flatMap(yM)],
      lM = dM.flatMap(yM).map((MM => ({
        id: MM,
        label: `hudLayout:${MM}`,
        ...SM.s[MM],
        parent: jM[MM]
      }))),
      EM = Object.fromEntries(lM.map((MM => [MM.id, MM]))),
      UM = "data-hud-el";

    function GM(MM, rM, iM, OM) {
      const SM = iM(function(MM, rM) {
          return "attack" !== MM || rM ? EM[MM].label : "hudLayout:attackContext"
        }(MM, rM)),
        jM = OM[MM];
      return jM ? iM("hudLayout:slotWithKey", {
        slot: SM,
        key: jM
      }) : SM
    }

    function CM(MM, rM, iM, OM) {
      return MM.map((MM => GM(MM, rM, iM, OM))).join(", ")
    }
  },
  9489: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      e: () => jM,
      g: () => SM,
      j: () => aM,
      k: () => LM,
      n: () => zM,
      r: () => QM,
      s: () => nM
    });
    var OM = iM(2666);
    const SM = ["J", "C", "A", "P", "U", "X", "G"],
      jM = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function aM(MM) {
      return MM ? ["X"] : ["P", "X"]
    }
    const PM = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: OM.x,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function nM(MM, rM, iM) {
      const OM = MM.querySelector(".InGameUi .TouchComponentsButtons");
      if (!OM) return PM;
      const jM = {},
        aM = {};
      for (const PM of SM) {
        const MM = OM.querySelector(`.TouchSlot${PM} > .TouchKey`);
        if (MM) {
          var nM, QM;
          jM[PM] = MM.cloneNode(!0);
          const rM = (null !== (nM = null === (QM = MM.querySelector(".TouchKeyLabel")) || void 0 === QM ? void 0 : QM.textContent) && void 0 !== nM ? nM : "").split(/\s+/).filter((MM => !/[\d\xd7]/.test(MM))).join(" ");
          rM && (aM[PM] = rM)
        }
      }
      const zM = rM => {
          const iM = MM.querySelector(`.InGameUi ${rM}`);
          return null !== iM && !iM.classList.contains("Hidden")
        },
        LM = [...MM.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((MM => MM.cloneNode(!0)));
      return {
        faces: Object.keys(jM).length > 0 ? jM : null,
        names: aM,
        shop: zM(".TouchInventoryKey.ShopKey"),
        bag: zM(".TouchInventoryKey.BagKey"),
        sprint: zM(".TouchSprintHit"),
        items: LM.length > 0 ? LM : null,
        rowIcons: rM,
        pinnedIcons: iM
      }
    }

    function QM(MM, rM) {
      const iM = {};
      for (const OM of [...aM(rM), "G"]) {
        const rM = MM.names[OM];
        rM && (iM[jM[OM]] = rM)
      }
      return iM
    }

    function zM(MM, rM) {
      const {
        faces: iM
      } = MM;
      if (null === iM) return [];
      const OM = new Set(Object.keys(iM).map((MM => jM[MM])));
      return aM(rM).filter((MM => !OM.has(jM[MM])))
    }

    function LM(MM, rM) {
      MM.replaceChildren(...[...rM.childNodes].map((MM => MM.cloneNode(!0))))
    }
  },
  9487: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      f: () => QM
    });
    var OM = iM(9484),
      SM = iM(9479),
      jM = iM(2666),
      aM = iM(2668);
    const PM = 2,
      nM = (MM, rM, iM) => {
        const OM = (0, SM.m)(rM).includes(MM) ? MM : (0, SM.m)(MM).includes(rM) ? rM : null;
        if (null === OM || "joystick" === OM) return !1;
        const PM = OM === MM ? rM : MM;
        if ("menu" === OM) return (0, aM.s)(PM, iM.hudElements[PM]);
        if ("hotbar" !== OM || !(0, SM.w)(PM)) return !0;
        if ((0, jM.K)(iM.hudElements[PM]) || (0, jM.K)(iM.hudElements.inventory)) return !1;
        return !(iM.hudLocked.includes(PM) || iM.hudLocked.includes("inventory")) || (0, jM.G)(iM.hudElements.hotbar)
      };

    function QM(MM, rM, iM, QM) {
      const zM = MM => (0, SM.H)(MM).some((MM => (0, jM.p)(iM.hudElements, MM) || (0, aM.p)(MM, iM, QM)));
      if (zM(MM)) return [];
      const LM = MM => {
          var rM, OM;
          return "bag" === MM && 1 !== (null !== (rM = null === (OM = iM.hudElements.shop) || void 0 === OM ? void 0 : OM[2]) && void 0 !== rM ? rM : 1) || (0, SM.H)(MM).some((MM => void 0 !== iM.hudElements[MM]))
        },
        mM = SM.k.get(MM),
        HM = rM.filter((rM => {
          let {
            id: iM
          } = rM;
          return mM ? mM.has(iM) && !zM(iM) : iM === MM
        })),
        hM = new Set;
      for (const SM of rM) SM.id === MM || null !== mM && void 0 !== mM && mM.has(SM.id) || hM.has(SM.id) || zM(SM.id) || HM.some((MM => {
        let {
          id: rM,
          box: jM
        } = MM;
        return !nM(rM, SM.id, iM) && (LM(rM) || LM(SM.id)) && (0, OM.r)(jM, SM.box, PM)
      })) && hM.add(SM.id);
      return [...hM]
    }
  },
  34944: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      g: () => OM
    });
    const OM = "image/jpeg",
      SM = "jpg"
  },
  34952: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      f: () => QM,
      j: () => zM
    });
    var OM = iM(1771),
      SM = iM(3614),
      jM = iM(83),
      aM = iM(1845),
      PM = iM(34944);

    function nM() {
      return !(0, jM.isMobileApp)() || OM.e.supports("photos")
    }
    async function QM(MM) {
      var rM, iM;
      if ((0, jM.isMobileApp)()) {
        const {
          saved: rM
        } = await OM.e.request("photos.save", {
          data: await (0, SM.f)(MM),
          mimeType: PM.g
        });
        return rM ? "saved" : "denied"
      }
      return (0, jM.isIOS)() && null !== (rM = (iM = navigator).canShare) && void 0 !== rM && rM.call(iM, {
        files: [MM]
      }) ? zM(MM) : ((0, aM.c)(MM, MM.name), "saved")
    }
    async function zM(MM) {
      try {
        return await navigator.share({
          files: [MM]
        }), "shared"
      } catch (rM) {
        if (rM instanceof DOMException && "AbortError" === rM.name) return "Ti";
        if (rM instanceof DOMException && "NotAllowedError" === rM.name) return "needsTap";
        throw rM
      }
    }
  },
  34940: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      f: () => zM,
      h: () => LM
    });
    var OM = iM(19),
      SM = iM(34920),
      jM = iM(1717),
      aM = iM(34944);
    const PM = 8294400,
      nM = .92;

    function QM() {
      (0, jM.i)(), OM.d.set({
        screenshotMode: !0
      })
    }

    function zM() {
      OM.d.set({
        screenshotMode: !1
      })
    }
    async function LM() {
      const {
        width: MM,
        height: rM,
        scale: iM
      } = function(MM, rM, iM) {
        const OM = Math.max(1, MM),
          SM = Math.max(1, rM),
          jM = Math.min(Math.max(1, iM), Math.sqrt(PM / (OM * SM)));
        return {
          width: Math.round(OM * jM),
          height: Math.round(SM * jM),
          scale: jM
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: OM
      } = await SM.devTools.capturePhoto(MM, rM, {
        scale: iM,
        type: aM.g,
        quality: nM
      });
      return new File([OM], function(MM) {
        const rM = MM => String(MM).padStart(2, "0"),
          iM = `${MM.getFullYear()}${rM(MM.getMonth()+1)}${rM(MM.getDate())}`,
          OM = `${rM(MM.getHours())}${rM(MM.getMinutes())}${rM(MM.getSeconds())}`;
        return `bloxd-${iM}-${OM}.${aM.c}`
      }(new Date), {
        type: aM.g
      })
    }
  },
  9279: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      g: () => OM
    });
    const OM = "controllerOpenKeyboard",
      SM = "controllerKeyboardVisible"
  },
  34926: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    const OM = new Set(["chunkBorders"])
  },
  34920: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ALL_DEV_TOOLS: () => aM,
      coreDevTools: () => QM,
      devTools: () => nM
    });
    var OM = iM(656),
      SM = iM(1327),
      jM = iM(34926);
    const aM = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function PM() {
      const {
        noaDevTools: MM
      } = await iM.e(260).then((() => iM(42174)));
      return MM
    }
    const nM = new class {
        constructor() {
          this.loadHost = PM, this.tools = aM
        }
        setHost(MM) {
          this.tools = null === MM ? aM : MM.tools, this.loadHost = null === MM ? PM : async () => MM
        }
        supports(MM) {
          return this.tools.has(MM)
        }
        async downloadScene(MM, rM) {
          const iM = await this.loadHost();
          await iM.downloadScene(MM, rM)
        }
        async setAmbientLightIntensity(MM) {
          const rM = await this.loadHost();
          await rM.setAmbientLightIntensity(MM)
        }
        async capturePhoto(MM, rM, iM) {
          return (await this.loadHost()).capturePhoto(MM, rM, iM)
        }
      },
      QM = {
        tools: jM.e,
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
    OM.H && nM.setHost(QM), (0, SM.A)((() => {
      nM.setHost(QM)
    }))
  },
  35055: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      e: () => SM,
      i: () => zM
    });
    var OM = iM(1645);

    function SM(MM) {
      var rM;
      return {
        ...aM.store,
        yaw: aM.store.yaw + (null !== (rM = OM.d[MM].previewYaw) && void 0 !== rM ? rM : 0)
      }
    }
    const jM = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      aM = {
        player: jM,
        store: {
          ...jM,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function PM(MM, rM) {
      MM instanceof Promise ? MM.then(rM).catch((MM => {
        console.error("Couldn't open the preview", MM)
      })) : rM(MM)
    }
    class nM {
      constructor(MM) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, PM(MM, (MM => {
          this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height), null !== this.view && MM.show(this.view))
        }))
      }
      show(MM) {
        var rM;
        this.view = MM, null === (rM = this.opened) || void 0 === rM || rM.show(MM)
      }
      resize(MM, rM) {
        var iM;
        this.size = {
          width: MM,
          height: rM
        }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
      }
      close() {
        var MM;
        this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
      }
    }
    class QM {
      constructor(MM) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(MM).then((MM => MM.ready)), PM(MM, (MM => {
          this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var MM, rM;
        return null !== (MM = null === (rM = this.opened) || void 0 === rM ? void 0 : rM.isReady()) && void 0 !== MM && MM
      }
      setCosmetic(MM, rM) {
        var iM;
        null === (iM = this.opened) || void 0 === iM || iM.setCosmetic(MM, rM)
      }
      playEmote(MM) {
        var rM;
        null === (rM = this.opened) || void 0 === rM || rM.playEmote(MM)
      }
      setOrbit(MM) {
        var rM;
        null === (rM = this.opened) || void 0 === rM || rM.setOrbit(MM)
      }
      resetCamera() {
        var MM;
        null === (MM = this.opened) || void 0 === MM || MM.resetCamera()
      }
      async untilDrawn(MM) {
        var rM;
        await this.ready, await (null === (rM = this.opened) || void 0 === rM ? void 0 : rM.untilDrawn(MM))
      }
      resize(MM, rM) {
        var iM;
        this.size = {
          width: MM,
          height: rM
        }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
      }
      close() {
        var MM;
        this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
      }
    }
    const zM = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(MM) {
        this.host = MM
      }
      setDefaultHost(MM) {
        this.makeDefault = MM
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(MM) {
        return new nM(this.current().openMob(MM))
      }
      openPet(MM) {
        return new nM(this.current().openPet(MM))
      }
      openMobLineup(MM) {
        return new nM(this.current().openMobLineup(MM))
      }
      openCharacter(MM, rM) {
        return new QM(this.current().openCharacter(MM, rM))
      }
    }
  },
  35051: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM.d,
      h: () => OM.e,
      l: () => OM.i
    });
    var OM = iM(35055);
    class SM {
      constructor(MM) {
        this.load = MM, this.loaded = null, this.loading = null
      }
      run(MM) {
        return null !== this.loaded ? MM(this.loaded) : (this.loading ??= this.load().then((MM => (this.loaded = MM, MM)), (MM => {
          throw this.loading = null, MM
        })), this.loading.then(MM))
      }
    }
    class jM {
      constructor() {
        this.mobScene = new SM((() => Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(279), iM.e(111), iM.e(280), iM.e(87), iM.e(277), iM.e(85), iM.e(86), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(302), iM.e(251), iM.e(269), iM.e(282), iM.e(285), iM.e(89), iM.e(202), iM.e(245), iM.e(109), iM.e(257), iM.e(248), iM.e(264), iM.e(223), iM.e(265), iM.e(88), iM.e(271)]).then((() => iM(42188))))), this.characterScene = new SM((() => Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(279), iM.e(111), iM.e(280), iM.e(87), iM.e(277), iM.e(85), iM.e(86), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(302), iM.e(251), iM.e(269), iM.e(282), iM.e(285), iM.e(89), iM.e(202), iM.e(245), iM.e(109), iM.e(257), iM.e(248), iM.e(264), iM.e(223), iM.e(265), iM.e(88), iM.e(270)]).then((() => iM(42285)))))
      }
      openMob(MM) {
        return this.mobScene.run((rM => rM.openMobPreview(MM)))
      }
      openPet(MM) {
        return this.mobScene.run((rM => rM.openPetPreview(MM)))
      }
      openMobLineup(MM) {
        return this.mobScene.run((rM => rM.openMobLineupPreview(MM)))
      }
      openCharacter(MM, rM) {
        return this.characterScene.run((iM => iM.openCharacterPreview(MM, rM)))
      }
    }
    OM.i.setDefaultHost((() => new jM))
  },
  7148: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    var OM = iM(30);
    const SM = "shaderPack";
    async function jM() {
      var MM;
      let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
    }
  },
  9467: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      e: () => nM
    });
    var OM = iM(19),
      SM = iM(1373),
      jM = iM(83);
    const aM = {
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

    function PM() {
      return (0, jM.isMobile)() && "function" === typeof navigator.vibrate
    }
    const nM = new class {
      constructor(MM) {
        this.deps = MM, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(MM, rM) {
        var iM;
        if (!this.deps.enabled()) return;
        const OM = aM[MM],
          SM = null !== rM && void 0 !== rM ? rM : OM.pattern;
        if (null === SM) return void console.warn("No vibration pattern for", MM);
        const jM = this.deps.now();
        jM - this.lastAnyAt < 40 && OM.priority < this.playingPriority || jM - (null !== (iM = this.lastAt.get(MM)) && void 0 !== iM ? iM : -1 / 0) < OM.minGapMs || jM < this.playingUntil && OM.priority < this.playingPriority || (this.lastAt.set(MM, jM), this.lastAnyAt = jM, this.playingUntil = jM + SM.reduce(((MM, rM) => MM + rM), 0), this.playingPriority = OM.priority, this.deps.vibrate(SM))
      }
    }({
      vibrate: MM => {
        navigator.vibrate([...MM])
      },
      now: () => performance.now(),
      enabled: () => PM() && OM.d.get("isTouchScreen") && OM.d.get("clientEscMenuOptions").vibration && !(0, SM.i)()
    })
  },
  9374: (MM, rM, iM) => {
    function OM(MM, rM) {
      return !MM.hidden && (rM || !MM.isRewardedAd)
    }

    function SM(MM) {
      return "object" === typeof MM ? MM.option : MM
    }

    function jM(MM, rM) {
      var iM;
      if ("dropdown" === (null === (iM = MM.userInput) || void 0 === iM ? void 0 : iM.type) && "object" === typeof MM.userInput.dropdownOptions[0]) {
        for (const iM of MM.userInput.dropdownOptions)
          if (SM(iM) === rM) return "object" === typeof iM ? iM.cost : MM.cost;
        console.error("Didn't find matching option for dropdown item. Item:", MM, "input:", rM)
      }
      return MM.cost
    }

    function aM(MM, rM, iM) {
      var OM;
      const SM = null !== (OM = iM.excludedPlayers) && void 0 !== OM ? OM : [rM];
      return MM.filter((MM => !SM.includes(MM)))
    }
    iM.d(rM, {
      c: () => jM,
      d: () => SM,
      g: () => aM,
      i: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);