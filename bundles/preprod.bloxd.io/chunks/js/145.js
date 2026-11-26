export const id = 145;
export const ids = [145, 210];
export const modules = {
  34868: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(344),
      yU = zU(34875);

    function QU(UU, XU, zU) {
      const QU = Object.entries(XU).sort(((UU, XU) => XU[1] - UU[1])),
        AU = (0, cU.tb)(UU);
      AU.push(UU ? "\n\n" : "\n");
      for (const [yU, pU] of QU) {
        var FU, oU, DU;
        const UU = null !== (FU = null === zU || void 0 === zU || null === (oU = zU[yU]) || void 0 === oU ? void 0 : oU.icon) && void 0 !== FU ? FU : `${yU} Enchantment`;
        AU.push({
          icon: UU,
          style: {
            fontSize: "1.5rem"
          }
        }), AU.push({
          str: `${yU} ${null!==(DU=(0,cU.Q)(pU))&&void 0!==DU?DU:pU}\n`
        })
      }
      AU.push({
        str: "\n"
      });
      for (const [cU, pU] of QU) {
        var EU, YU, NU, IU;
        const UU = null !== (EU = null === zU || void 0 === zU || null === (YU = zU[cU]) || void 0 === YU ? void 0 : YU.icon) && void 0 !== EU ? EU : `${cU} Enchantment`,
          XU = null !== (NU = null === zU || void 0 === zU || null === (IU = zU[cU]) || void 0 === IU ? void 0 : IU.description) && void 0 !== NU ? NU : (0, yU.o)(cU);
        AU.push({
          icon: UU,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), AU.push({
          str: XU,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), AU.push({
          str: "\n"
        })
      }
      return AU
    }
  },
  34878: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      g: () => kU,
      i: () => tU,
      k: () => oU,
      m: () => gU,
      p: () => EU,
      t: () => NU,
      x: () => aU,
      z: () => YU
    });
    var cU = zU(320),
      yU = zU(646),
      QU = zU(344),
      AU = zU(4598),
      FU = zU(34868);

    function oU(UU, XU) {
      var zU;
      let {
        player: cU,
        chestOrCreative: yU
      } = UU;
      var QU;
      return XU < cU.length ? null !== (QU = cU[XU]) && void 0 !== QU ? QU : null : null !== (zU = yU[XU - cU.length]) && void 0 !== zU ? zU : null
    }

    function DU(UU) {
      var XU;
      return null !== (XU = UU.amount) && void 0 !== XU ? XU : 0
    }

    function EU(UU) {
      return 0 === UU.button || void 0 === UU.button
    }

    function YU(UU) {
      return !!UU.shiftKey
    }

    function NU(UU) {
      return "touches" in UU || "touch" === UU.pointerType || "pen" === UU.pointerType
    }
    const IU = new Set,
      pU = 50;

    function aU(UU, XU) {
      var zU;
      const cU = null === (zU = UU[XU]) || void 0 === zU ? void 0 : zU.displayName;
      return (0, yU.P)(cU) ? "string" !== typeof XU ? "" : (!IU.has(XU) && IU.size < pU && (IU.add(XU), console.warn(`No item called "${XU}", so its hover shows the name as given`)), XU) : cU
    }

    function tU(UU, XU, zU) {
      var oU, DU, EU, YU, NU, IU, pU, tU, gU, kU, GU, BU, ZU, RU;
      const PU = UU.attributes,
        WU = null !== (oU = null === (DU = XU[UU.name]) || void 0 === DU ? void 0 : DU.rootName) && void 0 !== oU ? oU : UU.name,
        dU = null !== (EU = null !== (YU = PU.customDisplayName) && void 0 !== YU ? YU : null === (NU = XU[UU.name]) || void 0 === NU ? void 0 : NU.displayName) && void 0 !== EU ? EU : aU(XU, WU);
      let LU = dU;
      const eU = null === (IU = PU.customAttributes) || void 0 === IU ? void 0 : IU.enchantmentTier;
      eU && (LU = (0, QU.tb)(dU, {
        colour: QU.pb[eU]
      }));
      const CU = null !== (pU = null !== (tU = null !== (gU = function(UU, XU) {
        var zU;
        if (void 0 === UU || null !== (zU = XU.customAttributes) && void 0 !== zU && zU.author) return UU;
        const yU = (0, cU.rc)(UU);
        return yU.every((UU => "string" === typeof UU)) ? UU : yU.map((UU => "string" === typeof UU ? UU : {
          icon: UU.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(PU.customDescription, PU)) && void 0 !== gU ? gU : null === (kU = XU[UU.name]) || void 0 === kU ? void 0 : kU.description) && void 0 !== tU ? tU : null === (GU = XU[WU]) || void 0 === GU ? void 0 : GU.description) && void 0 !== pU ? pU : "";
      let wU = CU;
      if (null !== (BU = PU.customAttributes) && void 0 !== BU && BU.enchantments) wU = (0, FU.c)(CU, PU.customAttributes.enchantments, PU.customAttributes.enchantmentData);
      else if (zU[WU]) wU = (0, QU.tb)(CU), wU.push({
        str: "\n"
      }), wU.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (ZU = PU.customAttributes) && void 0 !== ZU && ZU.mobSettings) {
        var qU, OU;
        const UU = PU.customAttributes.mobSettings;
        var SU, rU;
        if (wU = [], (0, yU.P)(PU.customAttributes.health) || (wU.push({
            str: "\n"
          }), wU.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), wU.push({
            str: " "
          }), wU.push({
            str: PU.customAttributes.health.toString()
          }), (0, yU.P)(UU.maxHealth) || (wU.push({
            str: "/"
          }), wU.push({
            str: UU.maxHealth.toString()
          }))), !(0, yU.P)(UU.attackDamage) && UU.attackDamage > 0 && (wU.push({
            str: "\n"
          }), wU.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), wU.push({
            str: " "
          }), wU.push({
            str: UU.attackDamage.toString()
          })), !(0, yU.P)(UU.secondaryAttackDamage) && UU.secondaryAttackDamage > 0 && (wU.push({
            str: "\n"
          }), wU.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), wU.push({
            str: " "
          }), wU.push({
            str: UU.secondaryAttackDamage.toString()
          })), (0, yU.P)(UU.baseRunningSpeed) || (wU.push({
            str: "\n"
          }), wU.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), wU.push({
            str: " "
          }), wU.push({
            str: UU.baseRunningSpeed.toFixed(2)
          })), "Saddled" === UU.metaInfo) wU.push({
          str: "\n"
        }), wU.push({
          str: {
            translationKey: "general:has"
          }
        }), wU.push({
          str: " "
        }), wU.push({
          icon: null !== (SU = null === (rU = UU.tameInfo) || void 0 === rU ? void 0 : rU.saddleItemName) && void 0 !== SU ? SU : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (wU.push({
            str: "\n"
          }), wU.push({
            str: "\n"
          }), UU.petInfo && null !== (qU = UU.tameInfo) && void 0 !== qU && qU.supportsFriendship) {
          const XU = AU.e.getIconsFromFriendshipPoints(UU.petInfo.friendshipPoints);
          for (const UU of XU) wU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          wU.push({
            str: "\n"
          });
          const zU = AU.e.getMobHungerLevel(UU.petInfo.lastFedAt);
          for (const UU of AU.e.hungerLevelIcons[zU]) wU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          wU.push({
            str: " "
          }), wU.push({
            str: AU.e.hungerLevelTranslations[zU],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (UU.tameInfo && null !== (OU = UU.tameInfo) && void 0 !== OU && OU.supportsFriendship) {
          var uU, fU;
          let XU = null !== (uU = UU.tameInfo.likedFoods) && void 0 !== uU ? uU : [];
          wU.push({
            str: "\n"
          }), wU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AU.e.feedTextColours[AU.e.MobFoodType.Superliked]
            }
          }), wU.push({
            str: " "
          }), null !== (fU = UU.petInfo) && void 0 !== fU && fU.superlikedFoodKnown ? (wU.push({
            icon: UU.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), XU = XU.filter((XU => XU !== UU.petInfo.superlikedFood))) : wU.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), wU.push({
            str: "\n"
          }), wU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AU.e.feedTextColours[AU.e.MobFoodType.Liked]
            }
          }), wU.push({
            str: " "
          });
          for (const UU of XU) wU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          wU.push({
            str: "\n"
          }), wU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AU.e.feedTextColours[AU.e.MobFoodType.Neutral]
            }
          }), wU.push({
            str: " "
          });
          for (const zU of null !== (iU = UU.tameInfo.neutralFoods) && void 0 !== iU ? iU : []) {
            var iU;
            wU.push({
              icon: zU,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          wU.push({
            str: "\n"
          }), wU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: AU.e.feedTextColours[AU.e.MobFoodType.Disliked]
            }
          }), wU.push({
            str: " "
          });
          for (const zU of null !== (HU = UU.tameInfo.dislikedFoods) && void 0 !== HU ? HU : []) {
            var HU;
            wU.push({
              icon: zU,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        wU.length > 0 ? (wU.shift(), wU.unshift(...(0, QU.tb)(CU))) : wU = (0, QU.tb)(CU)
      }
      return {
        name: LU,
        desc: wU,
        fontStyle: null !== (RU = PU.customAttributes) && void 0 !== RU && RU.author ? "italic" : "normal"
      }
    }

    function gU(UU, XU, zU, cU) {
      const yU = oU(UU, zU),
        QU = oU(UU, cU);
      if (!yU) return !1;
      const AU = XU[yU.name].armourReduction,
        FU = XU[QU.name].armourReduction;
      if (FU === AU) {
        var DU, EU, YU, NU;
        const UU = null !== (DU = null === (EU = yU.attributes.customAttributes) || void 0 === EU ? void 0 : EU.enchantmentTier) && void 0 !== DU ? DU : "Tier 0",
          XU = null !== (YU = null === (NU = QU.attributes.customAttributes) || void 0 === NU ? void 0 : NU.enchantmentTier) && void 0 !== YU ? YU : "Tier 0";
        return parseInt(UU.replace("Tier ", "")) >= parseInt(XU.replace("Tier ", ""))
      }
      return AU > FU
    }

    function kU(UU) {
      let XU;
      if ("number" === typeof UU) {
        const zU = document.querySelector(`[data-inven-idx="${UU}"]`);
        if (!zU) return null;
        XU = zU.getBoundingClientRect()
      } else XU = UU.getBoundingClientRect();
      return {
        x: XU.left + XU.width / 2,
        y: XU.top + XU.height / 2
      }
    }
  },
  9475: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => LU,
      d: () => wU
    });
    var cU = zU(61),
      yU = zU(31),
      QU = zU(2668),
      AU = zU(3796);
    const FU = 6,
      oU = 4,
      DU = ["HudMove-inventory", "HudLocked-inventory"];

    function EU(UU) {
      let {
        left: XU,
        right: zU,
        height: cU,
        rowTop: yU,
        besideBottom: QU,
        obstacles: AU
      } = UU;
      const DU = AU.filter((UU => UU.left < zU + FU && UU.right > XU - FU));
      let EU = QU;
      for (let FU = 0; FU <= DU.length; FU++) {
        const UU = DU.filter((UU => UU.top < EU + oU && UU.bottom > EU - cU - oU));
        if (0 === UU.length) break;
        EU = Math.min(...UU.map((UU => UU.top))) - oU
      }
      return EU === QU ? null : Math.ceil(yU - EU)
    }

    function YU(UU) {
      return Array.from(UU.children).filter((UU => !UU.classList.contains("HotBarRow")))
    }

    function NU(UU) {
      return function(UU) {
        const XU = [],
          zU = (UU, cU) => {
            const yU = UU.getBoundingClientRect();
            if (yU.width > 0 && yU.height > 0) XU.push(UU);
            else if (cU < 2)
              for (const XU of Array.from(UU.children)) zU(XU, cU + 1)
          };
        for (const cU of UU) zU(cU, 0);
        return XU
      }(YU(UU).flatMap((UU => UU.classList.contains("AuraBarWrapper") ? [] : UU.classList.contains("BottomScreenStatBarList") ? Array.from(UU.children) : [UU])))
    }

    function IU(UU, XU) {
      var zU;
      const cU = null === (zU = UU.querySelector(":scope > .AuraBarWrapper")) || void 0 === zU ? void 0 : zU.getBoundingClientRect();
      return (cU && cU.height > 0 ? cU.top : XU) - oU
    }
    const pU = ".BottomScreenMessage, [role='status']";

    function aU(UU, XU, zU, cU, yU) {
      const QU = UU => UU.map((UU => UU.getBoundingClientRect())),
        AU = EU({
          ...zU,
          obstacles: QU(zU.obstacles.filter((UU => !UU.matches(pU))))
        }),
        FU = XU.ownerDocument.defaultView,
        oU = `${null===FU||void 0===FU?void 0:FU.innerWidth}x${null===FU||void 0===FU?void 0:FU.innerHeight}:${cU}:${Math.round(zU.rowTop)}`,
        DU = UU.get(XU),
        YU = (null === DU || void 0 === DU ? void 0 : DU.at) === oU ? (NU = DU.rise, IU = AU, null === NU ? IU : null === IU ? NU : Math.max(NU, IU)) : AU;
      var NU, IU;
      const aU = EU({
        ...zU,
        besideBottom: null === YU ? zU.besideBottom : zU.rowTop - YU,
        obstacles: QU(zU.obstacles)
      });
      return yU && UU.set(XU, {
        at: oU,
        rise: YU
      }), null !== aU && void 0 !== aU ? aU : YU
    }

    function tU(UU, XU, zU, cU) {
      UU.classList.toggle(XU, null !== cU), null === cU ? UU.style.removeProperty(zU) : UU.style.setProperty(zU, `${cU}px`)
    }
    const gU = new WeakMap,
      kU = new WeakMap,
      GU = "(orientation: portrait) and (max-width: 600px)";

    function BU(UU, XU) {
      const zU = UU.getBoundingClientRect();
      if (0 === zU.width) return null;
      const cU = [zU, ...Array.from(UU.children).filter((UU => !(UU => XU.contains(UU.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(UU))).map((UU => UU.getBoundingClientRect())).filter((UU => UU.width > 0))];
      return {
        left: Math.min(...cU.map((UU => UU.left))),
        top: Math.min(...cU.map((UU => UU.top))),
        right: Math.max(...cU.map((UU => UU.right))),
        bottom: Math.max(...cU.map((UU => UU.bottom)))
      }
    }

    function ZU(UU) {
      let {
        slotsLeft: XU,
        slotsRight: zU,
        width: cU,
        zoneRight: yU
      } = UU;
      const QU = Math.max(0, Math.floor(zU - XU - cU));
      return null === yU ? 0 : Math.min(QU, Math.max(0, Math.ceil(yU + FU - XU)))
    }

    function RU(UU) {
      var XU;
      const zU = UU.getBoundingClientRect();
      if (0 === zU.width) return null;
      const cU = null === (XU = UU.parentElement) || void 0 === XU ? void 0 : XU.getBoundingClientRect();
      return cU && cU.width > 0 ? Math.min(zU.right, cU.left + cU.width * PU) : zU.right
    }
    const PU = .35,
      WU = new WeakMap,
      dU = new WeakMap;

    function LU(UU) {
      eU(UU) && eU(UU),
        function(UU) {
          var XU, zU;
          const cU = UU.documentElement.classList;
          if (!cU.contains("TouchHotbar") || !cU.contains("TouchHotbarKeysAbove") || DU.some((UU => cU.contains(UU))) || !1 !== (null === (XU = UU.defaultView) || void 0 === XU || null === (zU = XU.matchMedia) || void 0 === zU ? void 0 : zU.call(XU, GU).matches)) return;
          const yU = UU.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            QU = null === yU || void 0 === yU ? void 0 : yU.closest(".BottomMiddleElements"),
            AU = null === yU || void 0 === yU ? void 0 : yU.parentElement;
          if (!yU || !QU || !AU || QU.classList.contains("TouchInventoryOpen") || yU.querySelector("[data-pressing]")) return;
          const FU = BU(yU, cU),
            oU = AU.getBoundingClientRect().top,
            EU = FU && aU(gU, QU, {
              left: FU.left,
              right: FU.right,
              height: FU.bottom - FU.top,
              rowTop: oU,
              besideBottom: IU(QU, oU),
              obstacles: NU(QU).filter((UU => !UU.classList.contains("BottomScreenMessage")))
            }, `${Math.round(FU.left)}:${Math.round(FU.right-FU.left)}x${Math.round(FU.bottom-FU.top)}`, !0);
          kU.has(QU) && kU.get(QU) === EU || (tU(QU, "KeysAboveUp", "--touch-keys-above-rise", EU), kU.set(QU, EU))
        }(UU)
    }

    function eU(UU) {
      var XU, zU, cU, yU;
      const QU = UU.documentElement.classList;
      if (!QU.contains("TouchHotbar") || QU.contains("TouchHotbarKeysAbove") || DU.some((UU => QU.contains(UU))) || null === (XU = UU.defaultView) || void 0 === XU || null === (zU = XU.matchMedia) || void 0 === zU || !zU.call(XU, CU).matches) return !1;
      const AU = UU.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        FU = null === AU || void 0 === AU ? void 0 : AU.parentElement,
        oU = null === AU || void 0 === AU ? void 0 : AU.closest(".BottomMiddleElements"),
        EU = null === oU || void 0 === oU ? void 0 : oU.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!AU || !FU || !oU || !EU || oU.classList.contains("TouchInventoryOpen")) return !1;
      const YU = AU.getBoundingClientRect();
      if (0 === YU.width) return !1;
      const pU = UU.querySelector(".JoystickZone"),
        gU = EU.getBoundingClientRect(),
        kU = FU.getBoundingClientRect().top,
        GU = ZU({
          slotsLeft: gU.left,
          slotsRight: gU.right,
          width: YU.width,
          zoneRight: pU ? RU(pU) : null
        }),
        BU = WU.get(oU),
        PU = gU.left + GU,
        LU = {
          shift: GU,
          rise: aU(dU, oU, {
            left: PU,
            right: PU + YU.width,
            height: YU.height,
            rowTop: kU,
            besideBottom: IU(oU, kU),
            obstacles: NU(oU)
          }, `${GU}:${Math.round(YU.width)}`, (null !== (cU = null === BU || void 0 === BU ? void 0 : BU.shift) && void 0 !== cU ? cU : 0) === GU)
        };
      return (null === BU || void 0 === BU ? void 0 : BU.shift) !== LU.shift && oU.style.setProperty("--touch-shop-above-shift", `${LU.shift}px`), (null === BU || void 0 === BU ? void 0 : BU.rise) !== LU.rise && tU(oU, "ShopAboveUp", "--touch-shop-above-rise", LU.rise), WU.set(oU, LU), (null !== (yU = null === BU || void 0 === BU ? void 0 : BU.shift) && void 0 !== yU ? yU : 0) !== LU.shift
    }
    const CU = "(orientation: landscape) and (max-height: 500px)";

    function wU(UU, XU, zU) {
      (0, cU.useLayoutEffect)((() => {
        var XU;
        const cU = null === (XU = UU.current) || void 0 === XU ? void 0 : XU.closest(".BottomMiddleElements");
        if (!cU || zU) return;
        const FU = new ResizeObserver((() => {
            IU(!1)
          })),
          oU = () => {
            FU.disconnect();
            const UU = document.querySelector(".JoystickZone");
            for (const XU of [UU, cU, cU.querySelector(".HotBarGameItemsContainer"), ...NU(cU)]) XU && FU.observe(XU)
          };
        let DU = null,
          EU = !1;
        const IU = UU => {
            EU ||= UU, DU ??= requestAnimationFrame((() => {
              DU = null, EU && (EU = !1, oU()), LU(document)
            }))
          },
          pU = new MutationObserver((() => {
            IU(!0)
          }));
        pU.observe(cU, {
          childList: !0
        });
        for (const UU of YU(cU)) pU.observe(UU, {
          childList: !0,
          subtree: !0
        });
        LU(document), oU();
        const aU = () => {
            IU(!0)
          },
          tU = [(0, yU.n)(QU.h, aU), (0, yU.n)(AU.e, aU)],
          gU = new MutationObserver((() => {
            IU(!1)
          }));
        return UU.current && gU.observe(UU.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          gU.disconnect(), null !== DU && cancelAnimationFrame(DU), FU.disconnect(), pU.disconnect();
          for (const UU of tU) UU()
        }
      }), [UU, XU, zU])
    }
  },
  34767: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => IU,
      i: () => pU,
      j: () => aU
    });
    var cU = zU(1494),
      yU = zU(61),
      QU = zU(1349),
      AU = zU(4968),
      FU = zU(2485),
      oU = zU(1193),
      DU = zU(97),
      EU = zU(2047),
      YU = zU(1384),
      NU = zU(1305);

    function IU(UU) {
      let {
        show: XU,
        onClose: zU
      } = UU;
      const {
        requestedGameNameWithVariation: cU,
        lobbyName: yU,
        shownLobbyName: QU
      } = (0, EU.i)("connectedGame"), oU = (0, FU.d)(cU, yU, !1);
      return DU.featureFlags.canUseInviteLinks && (0, NU.jsx)(AU.c, {
        show: XU,
        close: zU,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, NU.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, NU.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, NU.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, NU.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === oU ? (0, NU.jsx)(YU.b, {}) : oU, (0, NU.jsx)("br", {}), "Lobby Name: ", QU, (0, NU.jsx)("br", {}), (0, NU.jsx)("br", {}), (0, NU.jsx)("br", {}), (0, NU.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, NU.jsx)(pU, {})]
        })
      })
    }

    function pU() {
      var UU;
      const {
        t: XU
      } = (0, oU.I)(), zU = null !== (UU = aU(DU.featureFlags.canUseInviteLinks)) && void 0 !== UU ? UU : "Loading Link...", [QU, AU] = (0, yU.useState)(0), [FU, EU] = (0, yU.useReducer)((UU => UU + 1), 0);
      return (0, yU.useEffect)((() => {
        const UU = setTimeout((() => {
          EU()
        }), 1100);
        return () => {
          clearTimeout(UU)
        }
      }), [QU]), DU.featureFlags.canUseInviteLinks && (0, NU.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, NU.jsx)("div", {
          className: "InviteLinkInner",
          children: zU
        }), (0, NU.jsx)(cU.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(zU).catch((UU => {
              console.error("Failed to copy invite link:", UU)
            })), AU(Date.now())
          },
          disabled: Date.now() - QU < 1e3,
          children: Date.now() - QU < 1e3 ? XU("general:copied") : XU("general:copy")
        })]
      })
    }

    function aU(UU) {
      const [XU, zU] = (0, yU.useState)(null);
      return (0, yU.useEffect)((() => {
        if (!UU) return;
        let XU = !0;
        return (0, QU.v)().then((UU => {
          XU && zU(UU)
        })).catch((UU => {
          console.error("Failed to get invite link:", UU)
        })), () => {
          XU = !1
        }
      }), [UU]), XU
    }
  },
  34856: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(2047),
      FU = zU(1305);

    function oU(UU) {
      const XU = Math.floor(UU / 3600),
        zU = Math.floor(UU % 3600 / 60),
        cU = Math.floor(UU % 60),
        yU = `${zU.toString().padStart(2,"0")}:${cU.toString().padStart(2,"0")}`;
      return XU > 0 ? `${XU}:${yU}` : yU
    }
    const DU = (0, cU.memo)((function(UU) {
      let {
        className: XU
      } = UU;
      const {
        recording: zU,
        clipping: cU,
        seconds: yU
      } = (0, AU.i)("replayRecorder");
      return zU || cU ? (0, FU.jsxs)("div", {
        className: QU()("RecordingIndicator", {
          RecordingIndicatorClipping: !zU
        }, XU),
        "data-camera-keeper": "",
        children: [(0, FU.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, FU.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: zU ? "REC" : "CLIP"
        }), zU && (0, FU.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: oU(yU)
        })]
      }) : null
    }))
  },
  34933: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1305);
    const AU = 21,
      FU = 2 * Math.PI * AU;

    function oU(UU) {
      let {
        tier: XU,
        state: zU,
        progress: cU,
        size: oU = "large"
      } = UU;
      const DU = yU()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === oU,
        SeasonPassTierNodeLarge: "large" === oU,
        SeasonPassTierNodeReached: "reached" === zU,
        SeasonPassTierNodeEarning: "earning" === zU
      });
      if ("earning" !== zU || "large" === oU) return (0, QU.jsx)("span", {
        className: DU,
        children: (0, QU.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: XU
        })
      });
      const EU = Math.max(0, Math.min(1, cU));
      return (0, QU.jsxs)("span", {
        className: DU,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * EU),
        children: [(0, QU.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, QU.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, QU.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: AU
          }), (0, QU.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: AU,
            strokeDasharray: `${EU*FU} ${FU}`,
            transform: "rotate(-90 28 28)"
          }), (0, QU.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, QU.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: XU
        })]
      })
    }
  },
  34859: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(4977),
      yU = zU(4982);

    function QU(UU) {
      let {
        children: XU,
        showing: zU,
        globallyUniqueKey: QU,
        alwaysMountChildren: AU = !1,
        doGameplayStartStopOnShow: FU = !0,
        keepsMovement: oU = !1
      } = UU;
      return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
    }
  },
  7176: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = zU(61),
      yU = zU(42);

    function QU(UU, XU) {
      var zU;
      const [QU, AU] = (0, cU.useState)(null !== (zU = yU.k.getItem(UU)) && void 0 !== zU ? zU : XU);
      return [QU, XU => {
        yU.k.setItem(UU, XU), AU(XU)
      }]
    }
  },
  9461: (UU, XU, zU) => {
    zU.d(XU, {
      C: () => oU,
      G: () => NU,
      I: () => DU,
      M: () => pU,
      N: () => QU,
      b: () => yU,
      f: () => FU,
      j: () => cU,
      n: () => aU,
      o: () => IU,
      s: () => EU,
      u: () => AU,
      x: () => tU,
      z: () => YU
    });
    const cU = UU => ({
      left: UU.left,
      top: UU.top,
      right: UU.right,
      bottom: UU.bottom
    });

    function yU(UU) {
      return {
        x: (UU.left + UU.right) / 2,
        y: (UU.top + UU.bottom) / 2
      }
    }

    function QU(UU) {
      return 0 === UU.length ? null : UU.reduce(((UU, XU) => ({
        left: Math.min(UU.left, XU.left),
        top: Math.min(UU.top, XU.top),
        right: Math.max(UU.right, XU.right),
        bottom: Math.max(UU.bottom, XU.bottom)
      })))
    }

    function AU(UU, XU) {
      const zU = Math.max(0, (XU - (UU.right - UU.left)) / 2),
        cU = Math.max(0, (XU - (UU.bottom - UU.top)) / 2);
      return {
        left: UU.left - zU,
        top: UU.top - cU,
        right: UU.right + zU,
        bottom: UU.bottom + cU
      }
    }

    function FU(UU, XU) {
      return XU.x >= UU.left && XU.x <= UU.right && XU.y >= UU.top && XU.y <= UU.bottom
    }

    function oU(UU, XU, zU) {
      let cU = null,
        QU = 1 / 0;
      for (const {
          id: yU,
          box: AU
        }
        of XU) {
        const XU = (AU.right - AU.left) * (AU.bottom - AU.top);
        FU(AU, UU) && XU < QU && (QU = XU, cU = yU)
      }
      if (null !== cU) return cU;
      let oU = 1 / 0;
      for (const {
          id: DU,
          box: EU
        }
        of XU) {
        if (!FU(AU(EU, zU), UU)) continue;
        const XU = yU(EU),
          QU = Math.hypot(UU.x - XU.x, UU.y - XU.y);
        QU < oU && (oU = QU, cU = DU)
      }
      return cU
    }

    function DU(UU, XU, zU) {
      return {
        left: zU.left,
        top: zU.top,
        right: UU - zU.right,
        bottom: XU - zU.bottom
      }
    }

    function EU(UU, XU, zU, cU) {
      const yU = (UU, XU, zU) => Math.max(Math.min(XU, 0), Math.min(Math.max(zU, 0), UU));
      return {
        x: yU(XU, cU.left - UU.left, cU.right - UU.right),
        y: yU(zU, cU.top - UU.top, cU.bottom - UU.bottom)
      }
    }

    function YU(UU, XU, zU, cU, yU) {
      const QU = UU.dx * cU + XU,
        AU = UU.dy * yU + zU,
        FU = UU => Math.max(-1, Math.min(1, UU));
      return {
        dx: FU(QU / cU),
        dy: FU(AU / yU)
      }
    }

    function NU(UU, XU, zU, cU) {
      return XU <= 0 || zU <= 0 ? 1 : Math.max(.05, Math.min(1, UU / XU, cU / zU))
    }

    function IU(UU, XU, zU) {
      return Math.min(UU.right, XU.right) - Math.max(UU.left, XU.left) > zU && Math.min(UU.bottom, XU.bottom) - Math.max(UU.top, XU.top) > zU
    }

    function pU(UU, XU) {
      const zU = (UU, XU, zU, cU) => XU - UU > cU - zU ? zU - UU > XU - cU ? cU - XU : zU - UU : UU < zU ? zU - UU : XU > cU ? cU - XU : 0;
      return {
        x: zU(UU.left, UU.right, XU.left, XU.right),
        y: zU(UU.top, UU.bottom, XU.top, XU.bottom)
      }
    }

    function aU(UU, XU, zU) {
      return IU(UU, {
        left: 0,
        top: 0,
        right: XU,
        bottom: zU
      }, 0)
    }

    function tU(UU, XU) {
      let {
        avoid: zU = null,
        bounds: cU = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, yU = 0, QU = 1 / 0;
      return UU.forEach(((UU, AU) => {
        const FU = XU.filter((XU => IU(UU, XU, 0))).length,
          oU = null !== cU && (UU.left < cU.left || UU.top < cU.top || UU.right > cU.right || UU.bottom > cU.bottom),
          DU = FU + (zU && IU(UU, zU, 0) ? 1e3 : 0) + (oU ? 1e6 : 0);
        DU < QU && (yU = AU, QU = DU)
      })), yU
    }
  },
  9459: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => DU,
      F: () => IU,
      G: () => NU,
      J: () => YU,
      e: () => FU,
      g: () => BU,
      i: () => GU,
      l: () => kU,
      p: () => oU,
      q: () => pU,
      t: () => EU,
      v: () => RU,
      y: () => ZU
    });
    var cU = zU(9461),
      yU = zU(2645);
    const QU = {
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
        ...Object.fromEntries(yU.A.map((UU => [UU, "menu"])))
      },
      AU = UU => yU.w.filter((XU => QU[XU] === UU)),
      FU = new Set(AU("cluster")),
      oU = new Set(AU("inventory")),
      DU = UU => "inventory" === UU || oU.has(UU),
      EU = UU => {
        const XU = QU[UU];
        return void 0 === XU ? [] : [XU, ...EU(XU)]
      },
      YU = UU => [UU, ...EU(UU)],
      NU = (UU, XU, zU) => "shop" === UU && XU ? zU("inventory") ? ["inventory"] : zU("bag") ? [UU, "bag"] : [UU] : [UU],
      IU = (UU, XU, zU, yU) => {
        const QU = UU => {
          const QU = XU[UU],
            {
              x: AU,
              y: FU
            } = QU && yU(UU) ? (0, cU.M)(QU, zU) : {
              x: 0,
              y: 0
            };
          return QU && {
            left: QU.left + AU,
            top: QU.top + FU,
            right: QU.right + AU,
            bottom: QU.bottom + FU
          }
        };
        return UU.flatMap((UU => {
          const AU = XU[UU];
          if ("inventory" !== UU || !AU || AU.right - AU.left <= zU.right - zU.left && AU.bottom - AU.top <= zU.bottom - zU.top) return [UU];
          const [FU, oU] = [QU("shop"), QU("bag")];
          return FU && oU && !(0, cU.o)(FU, oU, 0) ? ["shop", "bag"].filter(yU) : [UU]
        }))
      },
      pU = new Map([
        ["cluster", FU],
        ["inventory", oU]
      ]),
      aU = ["cluster"],
      tU = [...aU, ...yU.w.filter((UU => !aU.includes(UU) && !QU[UU]))],
      gU = UU => [UU, ...AU(UU).flatMap(gU)],
      kU = tU.flatMap(gU).map((UU => ({
        id: UU,
        label: `hudLayout:${UU}`,
        ...yU.s[UU],
        parent: QU[UU]
      }))),
      GU = Object.fromEntries(kU.map((UU => [UU.id, UU]))),
      BU = "data-hud-el";

    function ZU(UU, XU, zU, cU) {
      const yU = zU(function(UU, XU) {
          return "attack" !== UU || XU ? GU[UU].label : "hudLayout:attackContext"
        }(UU, XU)),
        QU = cU[UU];
      return QU ? zU("hudLayout:slotWithKey", {
        slot: yU,
        key: QU
      }) : yU
    }

    function RU(UU, XU, zU, cU) {
      return UU.map((UU => ZU(UU, XU, zU, cU))).join(", ")
    }
  },
  9471: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      g: () => QU,
      i: () => yU,
      l: () => AU,
      n: () => YU,
      r: () => EU,
      s: () => DU,
      v: () => oU
    });
    var cU = zU(2645);
    const yU = ["J", "C", "A", "P", "U", "X", "G"],
      QU = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function AU(UU) {
      return UU ? ["X"] : ["P", "X"]
    }
    const FU = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: cU.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function oU(UU, XU, zU) {
      const cU = UU.querySelector(".InGameUi .TouchComponentsButtons");
      if (!cU) return FU;
      const QU = {},
        AU = {};
      for (const FU of yU) {
        const UU = cU.querySelector(`.TouchSlot${FU} > .TouchKey`);
        if (UU) {
          var oU, DU;
          QU[FU] = UU.cloneNode(!0);
          const XU = (null !== (oU = null === (DU = UU.querySelector(".TouchKeyLabel")) || void 0 === DU ? void 0 : DU.textContent) && void 0 !== oU ? oU : "").split(/\s+/).filter((UU => !/[\d\xd7]/.test(UU))).join(" ");
          XU && (AU[FU] = XU)
        }
      }
      const EU = XU => {
          const zU = UU.querySelector(`.InGameUi ${XU}`);
          return null !== zU && !zU.classList.contains("Hidden")
        },
        YU = [...UU.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((UU => UU.cloneNode(!0)));
      return {
        faces: Object.keys(QU).length > 0 ? QU : null,
        names: AU,
        shop: EU(".TouchInventoryKey.ShopKey"),
        bag: EU(".TouchInventoryKey.BagKey"),
        sprint: EU(".TouchSprintHit"),
        items: YU.length > 0 ? YU : null,
        rowIcons: XU,
        pinnedIcons: zU
      }
    }

    function DU(UU, XU) {
      const zU = {};
      for (const cU of [...AU(XU), "G"]) {
        const XU = UU.names[cU];
        XU && (zU[QU[cU]] = XU)
      }
      return zU
    }

    function EU(UU, XU) {
      const {
        faces: zU
      } = UU;
      if (null === zU) return [];
      const cU = new Set(Object.keys(zU).map((UU => QU[UU])));
      return AU(XU).filter((UU => !cU.has(QU[UU])))
    }

    function YU(UU, XU) {
      UU.replaceChildren(...[...XU.childNodes].map((UU => UU.cloneNode(!0))))
    }
  },
  9466: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      g: () => DU
    });
    var cU = zU(9461),
      yU = zU(9459),
      QU = zU(2645),
      AU = zU(2651);
    const FU = 2,
      oU = (UU, XU, zU) => {
        const cU = (0, yU.t)(XU).includes(UU) ? UU : (0, yU.t)(UU).includes(XU) ? XU : null;
        if (null === cU || "joystick" === cU) return !1;
        const FU = cU === UU ? XU : UU;
        if ("menu" === cU) return (0, AU.A)(FU, zU.hudElements[FU]);
        if ("hotbar" !== cU || !(0, yU.B)(FU)) return !0;
        if ((0, QU.K)(zU.hudElements[FU]) || (0, QU.K)(zU.hudElements.inventory)) return !1;
        return !(zU.hudLocked.includes(FU) || zU.hudLocked.includes("inventory")) || (0, QU.H)(zU.hudElements.hotbar)
      };

    function DU(UU, XU, zU, DU) {
      const EU = UU => (0, yU.J)(UU).some((UU => (0, QU.q)(zU.hudElements, UU) || (0, AU.y)(UU, zU, DU)));
      if (EU(UU)) return [];
      const YU = UU => {
          var XU, cU;
          return "bag" === UU && 1 !== (null !== (XU = null === (cU = zU.hudElements.shop) || void 0 === cU ? void 0 : cU[2]) && void 0 !== XU ? XU : 1) || (0, yU.J)(UU).some((UU => void 0 !== zU.hudElements[UU]))
        },
        NU = yU.q.get(UU),
        IU = XU.filter((XU => {
          let {
            id: zU
          } = XU;
          return NU ? NU.has(zU) && !EU(zU) : zU === UU
        })),
        pU = new Set;
      for (const yU of XU) yU.id === UU || null !== NU && void 0 !== NU && NU.has(yU.id) || pU.has(yU.id) || EU(yU.id) || IU.some((UU => {
        let {
          id: XU,
          box: QU
        } = UU;
        return !oU(XU, yU.id, zU) && (YU(XU) || YU(yU.id)) && (0, cU.o)(QU, yU.box, FU)
      })) && pU.add(yU.id);
      return [...pU]
    }
  },
  34778: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      g: () => cU
    });
    const cU = "image/jpeg",
      yU = "jpg"
  },
  34782: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      i: () => DU,
      m: () => EU
    });
    var cU = zU(1734),
      yU = zU(3572),
      QU = zU(97),
      AU = zU(1817),
      FU = zU(34778);

    function oU() {
      return !(0, QU.isMobileApp)() || cU.d.supports("photos")
    }
    async function DU(UU) {
      var XU, zU;
      if ((0, QU.isMobileApp)()) {
        const {
          saved: XU
        } = await cU.d.request("photos.save", {
          data: await (0, yU.f)(UU),
          mimeType: FU.g
        });
        return XU ? "saved" : "denied"
      }
      return (0, QU.isIOS)() && null !== (XU = (zU = navigator).canShare) && void 0 !== XU && XU.call(zU, {
        files: [UU]
      }) ? EU(UU) : ((0, AU.c)(UU, UU.name), "saved")
    }
    async function EU(UU) {
      try {
        return await navigator.share({
          files: [UU]
        }), "shared"
      } catch (XU) {
        if (XU instanceof DOMException && "AbortError" === XU.name) return "QU";
        if (XU instanceof DOMException && "NotAllowedError" === XU.name) return "needsTap";
        throw XU
      }
    }
  },
  34771: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      h: () => EU,
      i: () => YU
    });
    var cU = zU(27),
      yU = zU(34748),
      QU = zU(1680),
      AU = zU(34778);
    const FU = 8294400,
      oU = .92;

    function DU() {
      (0, QU.f)(), cU.e.set({
        screenshotMode: !0
      })
    }

    function EU() {
      cU.e.set({
        screenshotMode: !1
      })
    }
    async function YU() {
      const {
        width: UU,
        height: XU,
        scale: zU
      } = function(UU, XU, zU) {
        const cU = Math.max(1, UU),
          yU = Math.max(1, XU),
          QU = Math.min(Math.max(1, zU), Math.sqrt(FU / (cU * yU)));
        return {
          width: Math.round(cU * QU),
          height: Math.round(yU * QU),
          scale: QU
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: cU
      } = await yU.devTools.capturePhoto(UU, XU, {
        scale: zU,
        type: AU.g,
        quality: oU
      });
      return new File([cU], function(UU) {
        const XU = UU => String(UU).padStart(2, "0"),
          zU = `${UU.getFullYear()}${XU(UU.getMonth()+1)}${XU(UU.getDate())}`,
          cU = `${XU(UU.getHours())}${XU(UU.getMinutes())}${XU(UU.getSeconds())}`;
        return `bloxd-${zU}-${cU}.${AU.d}`
      }(new Date), {
        type: AU.g
      })
    }
  },
  9245: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => cU
    });
    const cU = "controllerOpenKeyboard",
      yU = "controllerKeyboardVisible"
  },
  34754: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = new Set(["chunkBorders"])
  },
  34748: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ALL_DEV_TOOLS: () => AU,
      coreDevTools: () => DU,
      devTools: () => oU
    });
    var cU = zU(687),
      yU = zU(1322),
      QU = zU(34754);
    const AU = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function FU() {
      const {
        noaDevTools: UU
      } = await zU.e(256).then((() => zU(42167)));
      return UU
    }
    const oU = new class {
        constructor() {
          this.loadHost = FU, this.tools = AU
        }
        setHost(UU) {
          this.tools = null === UU ? AU : UU.tools, this.loadHost = null === UU ? FU : async () => UU
        }
        supports(UU) {
          return this.tools.has(UU)
        }
        async downloadScene(UU, XU) {
          const zU = await this.loadHost();
          await zU.downloadScene(UU, XU)
        }
        async setAmbientLightIntensity(UU) {
          const XU = await this.loadHost();
          await XU.setAmbientLightIntensity(UU)
        }
        async capturePhoto(UU, XU, zU) {
          return (await this.loadHost()).capturePhoto(UU, XU, zU)
        }
      },
      DU = {
        tools: QU.b,
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
    cU.H && oU.setHost(DU), (0, yU.w)((() => {
      oU.setHost(DU)
    }))
  },
  34904: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      h: () => yU,
      i: () => EU
    });
    var cU = zU(1613);

    function yU(UU) {
      var XU;
      return {
        ...AU.store,
        yaw: AU.store.yaw + (null !== (XU = cU.d[UU].previewYaw) && void 0 !== XU ? XU : 0)
      }
    }
    const QU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      AU = {
        player: QU,
        store: {
          ...QU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function FU(UU, XU) {
      UU instanceof Promise ? UU.then(XU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : XU(UU)
    }
    class oU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, FU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var XU;
        this.view = UU, null === (XU = this.opened) || void 0 === XU || XU.show(UU)
      }
      resize(UU, XU) {
        var zU;
        this.size = {
          width: UU,
          height: XU
        }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class DU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), FU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, XU;
        return null !== (UU = null === (XU = this.opened) || void 0 === XU ? void 0 : XU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, XU) {
        var zU;
        null === (zU = this.opened) || void 0 === zU || zU.setCosmetic(UU, XU)
      }
      playEmote(UU) {
        var XU;
        null === (XU = this.opened) || void 0 === XU || XU.playEmote(UU)
      }
      setOrbit(UU) {
        var XU;
        null === (XU = this.opened) || void 0 === XU || XU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var XU;
        await this.ready, await (null === (XU = this.opened) || void 0 === XU ? void 0 : XU.untilDrawn(UU))
      }
      resize(UU, XU) {
        var zU;
        this.size = {
          width: UU,
          height: XU
        }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const EU = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(UU) {
        this.host = UU
      }
      setDefaultHost(UU) {
        this.makeDefault = UU
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(UU) {
        return new oU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new oU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new oU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, XU) {
        return new DU(this.current().openCharacter(UU, XU))
      }
    }
  },
  34900: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU.e,
      d: () => cU.h,
      h: () => cU.i
    });
    var cU = zU(34904);
    class yU {
      constructor(UU) {
        this.load = UU, this.loaded = null, this.loading = null
      }
      run(UU) {
        return null !== this.loaded ? UU(this.loaded) : (this.loading ??= this.load().then((UU => (this.loaded = UU, UU)), (UU => {
          throw this.loading = null, UU
        })), this.loading.then(UU))
      }
    }
    class QU {
      constructor() {
        this.mobScene = new yU((() => Promise.all([zU.e(84), zU.e(251), zU.e(250), zU.e(277), zU.e(111), zU.e(278), zU.e(87), zU.e(275), zU.e(85), zU.e(86), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(299), zU.e(247), zU.e(265), zU.e(280), zU.e(283), zU.e(89), zU.e(241), zU.e(200), zU.e(109), zU.e(253), zU.e(244), zU.e(260), zU.e(214), zU.e(261), zU.e(88), zU.e(267)]).then((() => zU(42180))))), this.characterScene = new yU((() => Promise.all([zU.e(84), zU.e(251), zU.e(250), zU.e(277), zU.e(111), zU.e(278), zU.e(87), zU.e(275), zU.e(85), zU.e(86), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(299), zU.e(247), zU.e(265), zU.e(280), zU.e(283), zU.e(89), zU.e(241), zU.e(200), zU.e(109), zU.e(253), zU.e(244), zU.e(260), zU.e(214), zU.e(261), zU.e(88), zU.e(266)]).then((() => zU(42288)))))
      }
      openMob(UU) {
        return this.mobScene.run((XU => XU.openMobPreview(UU)))
      }
      openPet(UU) {
        return this.mobScene.run((XU => XU.openPetPreview(UU)))
      }
      openMobLineup(UU) {
        return this.mobScene.run((XU => XU.openMobLineupPreview(UU)))
      }
      openCharacter(UU, XU) {
        return this.characterScene.run((zU => zU.openCharacterPreview(UU, XU)))
      }
    }
    cU.i.setDefaultHost((() => new QU))
  },
  7253: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => QU
    });
    var cU = zU(42);
    const yU = "shaderPack";
    async function QU() {
      var UU;
      let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
    }
  },
  9449: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      e: () => oU
    });
    var cU = zU(27),
      yU = zU(1360),
      QU = zU(97);
    const AU = {
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

    function FU() {
      return (0, QU.isMobile)() && "function" === typeof navigator.vibrate
    }
    const oU = new class {
      constructor(UU) {
        this.deps = UU, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(UU, XU) {
        var zU;
        if (!this.deps.enabled()) return;
        const cU = AU[UU],
          yU = null !== XU && void 0 !== XU ? XU : cU.pattern;
        if (null === yU) return void console.warn("No vibration pattern for", UU);
        const QU = this.deps.now();
        QU - this.lastAnyAt < 40 && cU.priority < this.playingPriority || QU - (null !== (zU = this.lastAt.get(UU)) && void 0 !== zU ? zU : -1 / 0) < cU.minGapMs || QU < this.playingUntil && cU.priority < this.playingPriority || (this.lastAt.set(UU, QU), this.lastAnyAt = QU, this.playingUntil = QU + yU.reduce(((UU, XU) => UU + XU), 0), this.playingPriority = cU.priority, this.deps.vibrate(yU))
      }
    }({
      vibrate: UU => {
        navigator.vibrate([...UU])
      },
      now: () => performance.now(),
      enabled: () => FU() && cU.e.get("isTouchScreen") && cU.e.get("clientEscMenuOptions").vibration && !(0, yU.c)()
    })
  },
  9348: (UU, XU, zU) => {
    function cU(UU, XU) {
      return !UU.hidden && (XU || !UU.isRewardedAd)
    }

    function yU(UU) {
      return "object" === typeof UU ? UU.option : UU
    }

    function QU(UU, XU) {
      var zU;
      if ("dropdown" === (null === (zU = UU.userInput) || void 0 === zU ? void 0 : zU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
        for (const zU of UU.userInput.dropdownOptions)
          if (yU(zU) === XU) return "object" === typeof zU ? zU.cost : UU.cost;
        console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", XU)
      }
      return UU.cost
    }

    function AU(UU, XU, zU) {
      var cU;
      const yU = null !== (cU = zU.excludedPlayers) && void 0 !== cU ? cU : [XU];
      return UU.filter((UU => !yU.includes(UU)))
    }
    zU.d(XU, {
      d: () => QU,
      h: () => yU,
      l: () => AU,
      o: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);