export const id = 147;
export const ids = [147, 220];
export const modules = {
  35308: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(375),
      YV = xV(35311);

    function UV(VV, eV, xV) {
      const UV = Object.entries(eV).sort(((VV, eV) => eV[1] - VV[1])),
        yV = (0, JV.qb)(VV);
      yV.push(VV ? "\n\n" : "\n");
      for (const [YV, kV] of UV) {
        var pV, QV, nV;
        const VV = null !== (pV = null === xV || void 0 === xV || null === (QV = xV[YV]) || void 0 === QV ? void 0 : QV.icon) && void 0 !== pV ? pV : `${YV} Enchantment`;
        yV.push({
          icon: VV,
          style: {
            fontSize: "1.5rem"
          }
        }), yV.push({
          str: `${YV} ${null!==(nV=(0,JV.O)(kV))&&void 0!==nV?nV:kV}\n`
        })
      }
      yV.push({
        str: "\n"
      });
      for (const [JV, kV] of UV) {
        var wV, ZV, vV, rV;
        const VV = null !== (wV = null === xV || void 0 === xV || null === (ZV = xV[JV]) || void 0 === ZV ? void 0 : ZV.icon) && void 0 !== wV ? wV : `${JV} Enchantment`,
          eV = null !== (vV = null === xV || void 0 === xV || null === (rV = xV[JV]) || void 0 === rV ? void 0 : rV.description) && void 0 !== vV ? vV : (0, YV.k)(JV);
        yV.push({
          icon: VV,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), yV.push({
          str: eV,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), yV.push({
          str: "\n"
        })
      }
      return yV
    }
  },
  35317: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV,
      f: () => jV,
      j: () => EV,
      n: () => QV,
      q: () => BV,
      s: () => wV,
      u: () => vV,
      w: () => bV,
      z: () => ZV
    });
    var JV = xV(364),
      YV = xV(657),
      UV = xV(375),
      yV = xV(4632),
      pV = xV(35308);

    function QV(VV, eV) {
      var xV;
      let {
        player: JV,
        chestOrCreative: YV
      } = VV;
      var UV;
      return eV < JV.length ? null !== (UV = JV[eV]) && void 0 !== UV ? UV : null : null !== (xV = YV[eV - JV.length]) && void 0 !== xV ? xV : null
    }

    function nV(VV) {
      var eV;
      return null !== (eV = VV.amount) && void 0 !== eV ? eV : 0
    }

    function wV(VV) {
      return 0 === VV.button || void 0 === VV.button
    }

    function ZV(VV) {
      return !!VV.shiftKey
    }

    function vV(VV) {
      return "touches" in VV || "touch" === VV.pointerType || "pen" === VV.pointerType
    }
    const rV = new Set,
      kV = 50;

    function bV(VV, eV) {
      var xV;
      const JV = null === (xV = VV[eV]) || void 0 === xV ? void 0 : xV.displayName;
      return (0, YV.J)(JV) ? "string" !== typeof eV ? "" : (!rV.has(eV) && rV.size < kV && (rV.add(eV), console.warn(`No item called "${eV}", so its hover shows the name as given`)), eV) : JV
    }

    function EV(VV, eV, xV) {
      var QV, nV, wV, ZV, vV, rV, kV, EV, BV, jV, qV, tV, FV, TV;
      const PV = VV.attributes,
        AV = null !== (QV = null === (nV = eV[VV.name]) || void 0 === nV ? void 0 : nV.rootName) && void 0 !== QV ? QV : VV.name,
        NV = null !== (wV = null !== (ZV = PV.customDisplayName) && void 0 !== ZV ? ZV : null === (vV = eV[VV.name]) || void 0 === vV ? void 0 : vV.displayName) && void 0 !== wV ? wV : bV(eV, AV);
      let XV = NV;
      const MV = null === (rV = PV.customAttributes) || void 0 === rV ? void 0 : rV.enchantmentTier;
      MV && (XV = (0, UV.qb)(NV, {
        colour: UV.kb[MV]
      }));
      const zV = null !== (kV = null !== (EV = null !== (BV = function(VV, eV) {
        var xV;
        if (void 0 === VV || null !== (xV = eV.customAttributes) && void 0 !== xV && xV.author) return VV;
        const YV = (0, JV.dc)(VV);
        return YV.every((VV => "string" === typeof VV)) ? VV : YV.map((VV => "string" === typeof VV ? VV : {
          icon: VV.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(PV.customDescription, PV)) && void 0 !== BV ? BV : null === (jV = eV[VV.name]) || void 0 === jV ? void 0 : jV.description) && void 0 !== EV ? EV : null === (qV = eV[AV]) || void 0 === qV ? void 0 : qV.description) && void 0 !== kV ? kV : "";
      let GV = zV;
      if (null !== (tV = PV.customAttributes) && void 0 !== tV && tV.enchantments) GV = (0, pV.d)(zV, PV.customAttributes.enchantments, PV.customAttributes.enchantmentData);
      else if (xV[AV]) GV = (0, UV.qb)(zV), GV.push({
        str: "\n"
      }), GV.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (FV = PV.customAttributes) && void 0 !== FV && FV.mobSettings) {
        var WV, RV;
        const VV = PV.customAttributes.mobSettings;
        var gV, DV;
        if (GV = [], (0, YV.J)(PV.customAttributes.health) || (GV.push({
            str: "\n"
          }), GV.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), GV.push({
            str: " "
          }), GV.push({
            str: PV.customAttributes.health.toString()
          }), (0, YV.J)(VV.maxHealth) || (GV.push({
            str: "/"
          }), GV.push({
            str: VV.maxHealth.toString()
          }))), !(0, YV.J)(VV.attackDamage) && VV.attackDamage > 0 && (GV.push({
            str: "\n"
          }), GV.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), GV.push({
            str: " "
          }), GV.push({
            str: VV.attackDamage.toString()
          })), !(0, YV.J)(VV.secondaryAttackDamage) && VV.secondaryAttackDamage > 0 && (GV.push({
            str: "\n"
          }), GV.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), GV.push({
            str: " "
          }), GV.push({
            str: VV.secondaryAttackDamage.toString()
          })), (0, YV.J)(VV.baseRunningSpeed) || (GV.push({
            str: "\n"
          }), GV.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), GV.push({
            str: " "
          }), GV.push({
            str: VV.baseRunningSpeed.toFixed(2)
          })), "Saddled" === VV.metaInfo) GV.push({
          str: "\n"
        }), GV.push({
          str: {
            translationKey: "general:has"
          }
        }), GV.push({
          str: " "
        }), GV.push({
          icon: null !== (gV = null === (DV = VV.tameInfo) || void 0 === DV ? void 0 : DV.saddleItemName) && void 0 !== gV ? gV : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (GV.push({
            str: "\n"
          }), GV.push({
            str: "\n"
          }), VV.petInfo && null !== (WV = VV.tameInfo) && void 0 !== WV && WV.supportsFriendship) {
          const eV = yV.b.getIconsFromFriendshipPoints(VV.petInfo.friendshipPoints);
          for (const VV of eV) GV.push({
            icon: VV,
            style: {
              fontSize: "1.5em"
            }
          });
          GV.push({
            str: "\n"
          });
          const xV = yV.b.getMobHungerLevel(VV.petInfo.lastFedAt);
          for (const VV of yV.b.hungerLevelIcons[xV]) GV.push({
            icon: VV,
            style: {
              fontSize: "1.5em"
            }
          });
          GV.push({
            str: " "
          }), GV.push({
            str: yV.b.hungerLevelTranslations[xV],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (VV.tameInfo && null !== (RV = VV.tameInfo) && void 0 !== RV && RV.supportsFriendship) {
          var iV, CV;
          let eV = null !== (iV = VV.tameInfo.likedFoods) && void 0 !== iV ? iV : [];
          GV.push({
            str: "\n"
          }), GV.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yV.b.feedTextColours[yV.b.MobFoodType.Superliked]
            }
          }), GV.push({
            str: " "
          }), null !== (CV = VV.petInfo) && void 0 !== CV && CV.superlikedFoodKnown ? (GV.push({
            icon: VV.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), eV = eV.filter((eV => eV !== VV.petInfo.superlikedFood))) : GV.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), GV.push({
            str: "\n"
          }), GV.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yV.b.feedTextColours[yV.b.MobFoodType.Liked]
            }
          }), GV.push({
            str: " "
          });
          for (const VV of eV) GV.push({
            icon: VV,
            style: {
              fontSize: "1.5em"
            }
          });
          GV.push({
            str: "\n"
          }), GV.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yV.b.feedTextColours[yV.b.MobFoodType.Neutral]
            }
          }), GV.push({
            str: " "
          });
          for (const xV of null !== (aV = VV.tameInfo.neutralFoods) && void 0 !== aV ? aV : []) {
            var aV;
            GV.push({
              icon: xV,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          GV.push({
            str: "\n"
          }), GV.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: yV.b.feedTextColours[yV.b.MobFoodType.Disliked]
            }
          }), GV.push({
            str: " "
          });
          for (const xV of null !== (oV = VV.tameInfo.dislikedFoods) && void 0 !== oV ? oV : []) {
            var oV;
            GV.push({
              icon: xV,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        GV.length > 0 ? (GV.shift(), GV.unshift(...(0, UV.qb)(zV))) : GV = (0, UV.qb)(zV)
      }
      return {
        name: XV,
        desc: GV,
        fontStyle: null !== (TV = PV.customAttributes) && void 0 !== TV && TV.author ? "italic" : "normal"
      }
    }

    function BV(VV, eV, xV, JV) {
      const YV = QV(VV, xV),
        UV = QV(VV, JV);
      if (!YV) return !1;
      const yV = eV[YV.name].armourReduction,
        pV = eV[UV.name].armourReduction;
      if (pV === yV) {
        var nV, wV, ZV, vV;
        const VV = null !== (nV = null === (wV = YV.attributes.customAttributes) || void 0 === wV ? void 0 : wV.enchantmentTier) && void 0 !== nV ? nV : "Tier 0",
          eV = null !== (ZV = null === (vV = UV.attributes.customAttributes) || void 0 === vV ? void 0 : vV.enchantmentTier) && void 0 !== ZV ? ZV : "Tier 0";
        return parseInt(VV.replace("Tier ", "")) >= parseInt(eV.replace("Tier ", ""))
      }
      return yV > pV
    }

    function jV(VV) {
      let eV;
      if ("number" === typeof VV) {
        const xV = document.querySelector(`[data-inven-idx="${VV}"]`);
        if (!xV) return null;
        eV = xV.getBoundingClientRect()
      } else eV = VV.getBoundingClientRect();
      return {
        x: eV.left + eV.width / 2,
        y: eV.top + eV.height / 2
      }
    }
  },
  9513: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => XV,
      e: () => GV
    });
    var JV = xV(62),
      YV = xV(32),
      UV = xV(2752),
      yV = xV(3848);
    const pV = 6,
      QV = 4,
      nV = ["HudMove-inventory", "HudLocked-inventory"];

    function wV(VV) {
      let {
        left: eV,
        right: xV,
        height: JV,
        rowTop: YV,
        besideBottom: UV,
        obstacles: yV
      } = VV;
      const nV = yV.filter((VV => VV.left < xV + pV && VV.right > eV - pV));
      let wV = UV;
      for (let pV = 0; pV <= nV.length; pV++) {
        const VV = nV.filter((VV => VV.top < wV + QV && VV.bottom > wV - JV - QV));
        if (0 === VV.length) break;
        wV = Math.min(...VV.map((VV => VV.top))) - QV
      }
      return wV === UV ? null : Math.ceil(YV - wV)
    }

    function ZV(VV) {
      return Array.from(VV.children).filter((VV => !VV.classList.contains("HotBarRow")))
    }

    function vV(VV) {
      return function(VV) {
        const eV = [],
          xV = (VV, JV) => {
            const YV = VV.getBoundingClientRect();
            if (YV.width > 0 && YV.height > 0) eV.push(VV);
            else if (JV < 2)
              for (const eV of Array.from(VV.children)) xV(eV, JV + 1)
          };
        for (const JV of VV) xV(JV, 0);
        return eV
      }(ZV(VV).flatMap((VV => VV.classList.contains("AuraBarWrapper") ? [] : VV.classList.contains("BottomScreenStatBarList") ? Array.from(VV.children) : [VV])))
    }

    function rV(VV, eV) {
      var xV;
      const JV = null === (xV = VV.querySelector(":scope > .AuraBarWrapper")) || void 0 === xV ? void 0 : xV.getBoundingClientRect();
      return (JV && JV.height > 0 ? JV.top : eV) - QV
    }
    const kV = ".BottomScreenMessage, [role='status']";

    function bV(VV, eV, xV, JV, YV) {
      const UV = VV => VV.map((VV => VV.getBoundingClientRect())),
        yV = wV({
          ...xV,
          obstacles: UV(xV.obstacles.filter((VV => !VV.matches(kV))))
        }),
        pV = eV.ownerDocument.defaultView,
        QV = `${null===pV||void 0===pV?void 0:pV.innerWidth}x${null===pV||void 0===pV?void 0:pV.innerHeight}:${JV}:${Math.round(xV.rowTop)}`,
        nV = VV.get(eV),
        ZV = (null === nV || void 0 === nV ? void 0 : nV.at) === QV ? (vV = nV.rise, rV = yV, null === vV ? rV : null === rV ? vV : Math.max(vV, rV)) : yV;
      var vV, rV;
      const bV = wV({
        ...xV,
        besideBottom: null === ZV ? xV.besideBottom : xV.rowTop - ZV,
        obstacles: UV(xV.obstacles)
      });
      return YV && VV.set(eV, {
        at: QV,
        rise: ZV
      }), null !== bV && void 0 !== bV ? bV : ZV
    }

    function EV(VV, eV, xV, JV) {
      VV.classList.toggle(eV, null !== JV), null === JV ? VV.style.removeProperty(xV) : VV.style.setProperty(xV, `${JV}px`)
    }
    const BV = new WeakMap,
      jV = new WeakMap,
      qV = "(orientation: portrait) and (max-width: 600px)";

    function tV(VV, eV) {
      const xV = VV.getBoundingClientRect();
      if (0 === xV.width) return null;
      const JV = [xV, ...Array.from(VV.children).filter((VV => !(VV => eV.contains(VV.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(VV))).map((VV => VV.getBoundingClientRect())).filter((VV => VV.width > 0))];
      return {
        left: Math.min(...JV.map((VV => VV.left))),
        top: Math.min(...JV.map((VV => VV.top))),
        right: Math.max(...JV.map((VV => VV.right))),
        bottom: Math.max(...JV.map((VV => VV.bottom)))
      }
    }

    function FV(VV) {
      let {
        slotsLeft: eV,
        slotsRight: xV,
        width: JV,
        zoneRight: YV
      } = VV;
      const UV = Math.max(0, Math.floor(xV - eV - JV));
      return null === YV ? 0 : Math.min(UV, Math.max(0, Math.ceil(YV + pV - eV)))
    }

    function TV(VV) {
      var eV;
      const xV = VV.getBoundingClientRect();
      if (0 === xV.width) return null;
      const JV = null === (eV = VV.parentElement) || void 0 === eV ? void 0 : eV.getBoundingClientRect();
      return JV && JV.width > 0 ? Math.min(xV.right, JV.left + JV.width * PV) : xV.right
    }
    const PV = .35,
      AV = new WeakMap,
      NV = new WeakMap;

    function XV(VV) {
      MV(VV) && MV(VV),
        function(VV) {
          var eV, xV;
          const JV = VV.documentElement.classList;
          if (!JV.contains("TouchHotbar") || !JV.contains("TouchHotbarKeysAbove") || nV.some((VV => JV.contains(VV))) || !1 !== (null === (eV = VV.defaultView) || void 0 === eV || null === (xV = eV.matchMedia) || void 0 === xV ? void 0 : xV.call(eV, qV).matches)) return;
          const YV = VV.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            UV = null === YV || void 0 === YV ? void 0 : YV.closest(".BottomMiddleElements"),
            yV = null === YV || void 0 === YV ? void 0 : YV.parentElement;
          if (!YV || !UV || !yV || UV.classList.contains("TouchInventoryOpen") || YV.querySelector("[data-pressing]")) return;
          const pV = tV(YV, JV),
            QV = yV.getBoundingClientRect().top,
            wV = pV && bV(BV, UV, {
              left: pV.left,
              right: pV.right,
              height: pV.bottom - pV.top,
              rowTop: QV,
              besideBottom: rV(UV, QV),
              obstacles: vV(UV).filter((VV => !VV.classList.contains("BottomScreenMessage")))
            }, `${Math.round(pV.left)}:${Math.round(pV.right-pV.left)}x${Math.round(pV.bottom-pV.top)}`, !0);
          jV.has(UV) && jV.get(UV) === wV || (EV(UV, "KeysAboveUp", "--touch-keys-above-rise", wV), jV.set(UV, wV))
        }(VV)
    }

    function MV(VV) {
      var eV, xV, JV, YV;
      const UV = VV.documentElement.classList;
      if (!UV.contains("TouchHotbar") || UV.contains("TouchHotbarKeysAbove") || nV.some((VV => UV.contains(VV))) || null === (eV = VV.defaultView) || void 0 === eV || null === (xV = eV.matchMedia) || void 0 === xV || !xV.call(eV, zV).matches) return !1;
      const yV = VV.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        pV = null === yV || void 0 === yV ? void 0 : yV.parentElement,
        QV = null === yV || void 0 === yV ? void 0 : yV.closest(".BottomMiddleElements"),
        wV = null === QV || void 0 === QV ? void 0 : QV.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!yV || !pV || !QV || !wV || QV.classList.contains("TouchInventoryOpen")) return !1;
      const ZV = yV.getBoundingClientRect();
      if (0 === ZV.width) return !1;
      const kV = VV.querySelector(".JoystickZone"),
        BV = wV.getBoundingClientRect(),
        jV = pV.getBoundingClientRect().top,
        qV = FV({
          slotsLeft: BV.left,
          slotsRight: BV.right,
          width: ZV.width,
          zoneRight: kV ? TV(kV) : null
        }),
        tV = AV.get(QV),
        PV = BV.left + qV,
        XV = {
          shift: qV,
          rise: bV(NV, QV, {
            left: PV,
            right: PV + ZV.width,
            height: ZV.height,
            rowTop: jV,
            besideBottom: rV(QV, jV),
            obstacles: vV(QV)
          }, `${qV}:${Math.round(ZV.width)}`, (null !== (JV = null === tV || void 0 === tV ? void 0 : tV.shift) && void 0 !== JV ? JV : 0) === qV)
        };
      return (null === tV || void 0 === tV ? void 0 : tV.shift) !== XV.shift && QV.style.setProperty("--touch-shop-above-shift", `${XV.shift}px`), (null === tV || void 0 === tV ? void 0 : tV.rise) !== XV.rise && EV(QV, "ShopAboveUp", "--touch-shop-above-rise", XV.rise), AV.set(QV, XV), (null !== (YV = null === tV || void 0 === tV ? void 0 : tV.shift) && void 0 !== YV ? YV : 0) !== XV.shift
    }
    const zV = "(orientation: landscape) and (max-height: 500px)";

    function GV(VV, eV, xV) {
      (0, JV.useLayoutEffect)((() => {
        var eV;
        const JV = null === (eV = VV.current) || void 0 === eV ? void 0 : eV.closest(".BottomMiddleElements");
        if (!JV || xV) return;
        const pV = new ResizeObserver((() => {
            rV(!1)
          })),
          QV = () => {
            pV.disconnect();
            const VV = document.querySelector(".JoystickZone");
            for (const eV of [VV, JV, JV.querySelector(".HotBarGameItemsContainer"), ...vV(JV)]) eV && pV.observe(eV)
          };
        let nV = null,
          wV = !1;
        const rV = VV => {
            wV ||= VV, nV ??= requestAnimationFrame((() => {
              nV = null, wV && (wV = !1, QV()), XV(document)
            }))
          },
          kV = new MutationObserver((() => {
            rV(!0)
          }));
        kV.observe(JV, {
          childList: !0
        });
        for (const VV of ZV(JV)) kV.observe(VV, {
          childList: !0,
          subtree: !0
        });
        XV(document), QV();
        const bV = () => {
            rV(!0)
          },
          EV = [(0, YV.i)(UV.e, bV), (0, YV.i)(yV.b, bV)],
          BV = new MutationObserver((() => {
            rV(!1)
          }));
        return VV.current && BV.observe(VV.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          BV.disconnect(), null !== nV && cancelAnimationFrame(nV), pV.disconnect(), kV.disconnect();
          for (const VV of EV) VV()
        }
      }), [VV, eV, xV])
    }
  },
  35213: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => rV,
      g: () => kV,
      i: () => bV
    });
    var JV = xV(1551),
      YV = xV(62),
      UV = xV(1382),
      yV = xV(5011),
      pV = xV(2514),
      QV = xV(1220),
      nV = xV(99),
      wV = xV(2100),
      ZV = xV(1408),
      vV = xV(1321);

    function rV(VV) {
      let {
        show: eV,
        onClose: xV
      } = VV;
      const {
        requestedGameNameWithVariation: JV,
        lobbyName: YV,
        shownLobbyName: UV
      } = (0, wV.h)("connectedGame"), QV = (0, pV.b)(JV, YV, !1);
      return nV.featureFlags.canUseInviteLinks && (0, vV.jsx)(yV.e, {
        show: eV,
        close: xV,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, vV.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, vV.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, vV.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, vV.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === QV ? (0, vV.jsx)(ZV.d, {}) : QV, (0, vV.jsx)("br", {}), "Lobby Name: ", UV, (0, vV.jsx)("br", {}), (0, vV.jsx)("br", {}), (0, vV.jsx)("br", {}), (0, vV.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, vV.jsx)(kV, {})]
        })
      })
    }

    function kV() {
      var VV;
      const {
        t: eV
      } = (0, QV.A)(), xV = null !== (VV = bV(nV.featureFlags.canUseInviteLinks)) && void 0 !== VV ? VV : "Loading Link...", [UV, yV] = (0, YV.useState)(0), [pV, wV] = (0, YV.useReducer)((VV => VV + 1), 0);
      return (0, YV.useEffect)((() => {
        const VV = setTimeout((() => {
          wV()
        }), 1100);
        return () => {
          clearTimeout(VV)
        }
      }), [UV]), nV.featureFlags.canUseInviteLinks && (0, vV.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, vV.jsx)("div", {
          className: "InviteLinkInner",
          children: xV
        }), (0, vV.jsx)(JV.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(xV).catch((VV => {
              console.error("Failed to copy invite link:", VV)
            })), yV(Date.now())
          },
          disabled: Date.now() - UV < 1e3,
          children: Date.now() - UV < 1e3 ? eV("general:copied") : eV("general:copy")
        })]
      })
    }

    function bV(VV) {
      const [eV, xV] = (0, YV.useState)(null);
      return (0, YV.useEffect)((() => {
        if (!VV) return;
        let eV = !0;
        return (0, UV.w)().then((VV => {
          eV && xV(VV)
        })).catch((VV => {
          console.error("Failed to get invite link:", VV)
        })), () => {
          eV = !1
        }
      }), [VV]), eV
    }
  },
  35296: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(2100),
      pV = xV(1321);

    function QV(VV) {
      const eV = Math.floor(VV / 3600),
        xV = Math.floor(VV % 3600 / 60),
        JV = Math.floor(VV % 60),
        YV = `${xV.toString().padStart(2,"0")}:${JV.toString().padStart(2,"0")}`;
      return eV > 0 ? `${eV}:${YV}` : YV
    }
    const nV = (0, JV.memo)((function(VV) {
      let {
        className: eV
      } = VV;
      const {
        recording: xV,
        seconds: JV
      } = (0, yV.h)("replayRecorder");
      return xV ? (0, pV.jsxs)("div", {
        className: UV()("RecordingIndicator", eV),
        children: [(0, pV.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, pV.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, pV.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: QV(JV)
        })]
      }) : null
    }))
  },
  35378: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1321);
    const yV = 21,
      pV = 2 * Math.PI * yV;

    function QV(VV) {
      let {
        tier: eV,
        state: xV,
        progress: JV,
        size: QV = "large"
      } = VV;
      const nV = YV()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === QV,
        SeasonPassTierNodeLarge: "large" === QV,
        SeasonPassTierNodeReached: "reached" === xV,
        SeasonPassTierNodeEarning: "earning" === xV
      });
      if ("earning" !== xV || "large" === QV) return (0, UV.jsx)("span", {
        className: nV,
        children: (0, UV.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: eV
        })
      });
      const wV = Math.max(0, Math.min(1, JV));
      return (0, UV.jsxs)("span", {
        className: nV,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * wV),
        children: [(0, UV.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, UV.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, UV.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: yV
          }), (0, UV.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: yV,
            strokeDasharray: `${wV*pV} ${pV}`,
            transform: "rotate(-90 28 28)"
          }), (0, UV.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, UV.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: eV
        })]
      })
    }
  },
  35300: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5015),
      YV = xV(5020);

    function UV(VV) {
      let {
        children: eV,
        showing: xV,
        globallyUniqueKey: UV,
        alwaysMountChildren: yV = !1,
        doGameplayStartStopOnShow: pV = !0,
        keepsMovement: QV = !1
      } = VV;
      return (0, YV.b)(!0, xV, UV, QV), (0, JV.c)(pV, xV), xV || yV ? eV : null
    }
  },
  7147: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(62),
      YV = xV(40);

    function UV(VV, eV) {
      var xV;
      const [UV, yV] = (0, JV.useState)(null !== (xV = YV.m.getItem(VV)) && void 0 !== xV ? xV : eV);
      return [UV, eV => {
        YV.m.setItem(VV, eV), yV(eV)
      }]
    }
  },
  9500: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => vV,
      E: () => nV,
      F: () => kV,
      I: () => UV,
      d: () => YV,
      g: () => pV,
      h: () => JV,
      l: () => bV,
      p: () => rV,
      q: () => wV,
      t: () => yV,
      u: () => EV,
      w: () => ZV,
      x: () => QV
    });
    const JV = VV => ({
      left: VV.left,
      top: VV.top,
      right: VV.right,
      bottom: VV.bottom
    });

    function YV(VV) {
      return {
        x: (VV.left + VV.right) / 2,
        y: (VV.top + VV.bottom) / 2
      }
    }

    function UV(VV) {
      return 0 === VV.length ? null : VV.reduce(((VV, eV) => ({
        left: Math.min(VV.left, eV.left),
        top: Math.min(VV.top, eV.top),
        right: Math.max(VV.right, eV.right),
        bottom: Math.max(VV.bottom, eV.bottom)
      })))
    }

    function yV(VV, eV) {
      const xV = Math.max(0, (eV - (VV.right - VV.left)) / 2),
        JV = Math.max(0, (eV - (VV.bottom - VV.top)) / 2);
      return {
        left: VV.left - xV,
        top: VV.top - JV,
        right: VV.right + xV,
        bottom: VV.bottom + JV
      }
    }

    function pV(VV, eV) {
      return eV.x >= VV.left && eV.x <= VV.right && eV.y >= VV.top && eV.y <= VV.bottom
    }

    function QV(VV, eV, xV) {
      let JV = null,
        UV = 1 / 0;
      for (const {
          id: YV,
          box: yV
        }
        of eV) {
        const eV = (yV.right - yV.left) * (yV.bottom - yV.top);
        pV(yV, VV) && eV < UV && (UV = eV, JV = YV)
      }
      if (null !== JV) return JV;
      let QV = 1 / 0;
      for (const {
          id: nV,
          box: wV
        }
        of eV) {
        if (!pV(yV(wV, xV), VV)) continue;
        const eV = YV(wV),
          UV = Math.hypot(VV.x - eV.x, VV.y - eV.y);
        UV < QV && (QV = UV, JV = nV)
      }
      return JV
    }

    function nV(VV, eV, xV) {
      return {
        left: xV.left,
        top: xV.top,
        right: VV - xV.right,
        bottom: eV - xV.bottom
      }
    }

    function wV(VV, eV, xV, JV) {
      const YV = (VV, eV, xV) => Math.max(Math.min(eV, 0), Math.min(Math.max(xV, 0), VV));
      return {
        x: YV(eV, JV.left - VV.left, JV.right - VV.right),
        y: YV(xV, JV.top - VV.top, JV.bottom - VV.bottom)
      }
    }

    function ZV(VV, eV, xV, JV, YV) {
      const UV = VV.dx * JV + eV,
        yV = VV.dy * YV + xV,
        pV = VV => Math.max(-1, Math.min(1, VV));
      return {
        dx: pV(UV / JV),
        dy: pV(yV / YV)
      }
    }

    function vV(VV, eV, xV, JV) {
      return eV <= 0 || xV <= 0 ? 1 : Math.max(.05, Math.min(1, VV / eV, JV / xV))
    }

    function rV(VV, eV, xV) {
      return Math.min(VV.right, eV.right) - Math.max(VV.left, eV.left) > xV && Math.min(VV.bottom, eV.bottom) - Math.max(VV.top, eV.top) > xV
    }

    function kV(VV, eV) {
      const xV = (VV, eV, xV, JV) => eV - VV > JV - xV ? xV - VV > eV - JV ? JV - eV : xV - VV : VV < xV ? xV - VV : eV > JV ? JV - eV : 0;
      return {
        x: xV(VV.left, VV.right, eV.left, eV.right),
        y: xV(VV.top, VV.bottom, eV.top, eV.bottom)
      }
    }

    function bV(VV, eV, xV) {
      return rV(VV, {
        left: 0,
        top: 0,
        right: eV,
        bottom: xV
      }, 0)
    }

    function EV(VV, eV) {
      let {
        avoid: xV = null,
        bounds: JV = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, YV = 0, UV = 1 / 0;
      return VV.forEach(((VV, yV) => {
        const pV = eV.filter((eV => rV(VV, eV, 0))).length,
          QV = null !== JV && (VV.left < JV.left || VV.top < JV.top || VV.right > JV.right || VV.bottom > JV.bottom),
          nV = pV + (xV && rV(VV, xV, 0) ? 1e3 : 0) + (QV ? 1e6 : 0);
        nV < UV && (YV = yV, UV = nV)
      })), YV
    }
  },
  9491: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => ZV,
      b: () => pV,
      f: () => tV,
      i: () => qV,
      j: () => jV,
      n: () => QV,
      o: () => kV,
      q: () => wV,
      r: () => TV,
      u: () => FV,
      x: () => nV,
      y: () => rV,
      z: () => vV
    });
    var JV = xV(9500),
      YV = xV(2729);
    const UV = {
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
        ...Object.fromEntries(YV.G.map((VV => [VV, "menu"])))
      },
      yV = VV => YV.z.filter((eV => UV[eV] === VV)),
      pV = new Set(yV("cluster")),
      QV = new Set(yV("inventory")),
      nV = VV => "inventory" === VV || QV.has(VV),
      wV = VV => {
        const eV = UV[VV];
        return void 0 === eV ? [] : [eV, ...wV(eV)]
      },
      ZV = VV => [VV, ...wV(VV)],
      vV = (VV, eV, xV) => "shop" === VV && eV ? xV("inventory") ? ["inventory"] : xV("bag") ? [VV, "bag"] : [VV] : [VV],
      rV = (VV, eV, xV, YV) => {
        const UV = VV => {
          const UV = eV[VV],
            {
              x: yV,
              y: pV
            } = UV && YV(VV) ? (0, JV.F)(UV, xV) : {
              x: 0,
              y: 0
            };
          return UV && {
            left: UV.left + yV,
            top: UV.top + pV,
            right: UV.right + yV,
            bottom: UV.bottom + pV
          }
        };
        return VV.flatMap((VV => {
          const yV = eV[VV];
          if ("inventory" !== VV || !yV || yV.right - yV.left <= xV.right - xV.left && yV.bottom - yV.top <= xV.bottom - xV.top) return [VV];
          const [pV, QV] = [UV("shop"), UV("bag")];
          return pV && QV && !(0, JV.p)(pV, QV, 0) ? ["shop", "bag"].filter(YV) : [VV]
        }))
      },
      kV = new Map([
        ["cluster", pV],
        ["inventory", QV]
      ]),
      bV = ["cluster"],
      EV = [...bV, ...YV.z.filter((VV => !bV.includes(VV) && !UV[VV]))],
      BV = VV => [VV, ...yV(VV).flatMap(BV)],
      jV = EV.flatMap(BV).map((VV => ({
        id: VV,
        label: `hudLayout:${VV}`,
        ...YV.y[VV],
        parent: UV[VV]
      }))),
      qV = Object.fromEntries(jV.map((VV => [VV.id, VV]))),
      tV = "data-hud-el";

    function FV(VV, eV, xV, JV) {
      const YV = xV(function(VV, eV) {
          return "attack" !== VV || eV ? qV[VV].label : "hudLayout:attackContext"
        }(VV, eV)),
        UV = JV[VV];
      return UV ? xV("hudLayout:slotWithKey", {
        slot: YV,
        key: UV
      }) : YV
    }

    function TV(VV, eV, xV, JV) {
      return VV.map((VV => FV(VV, eV, xV, JV))).join(", ")
    }
  },
  9506: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      g: () => UV,
      i: () => YV,
      l: () => yV,
      m: () => ZV,
      n: () => wV,
      q: () => nV,
      u: () => QV
    });
    var JV = xV(2729);
    const YV = ["J", "C", "A", "P", "U", "X", "G"],
      UV = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function yV(VV) {
      return VV ? ["X"] : ["P", "X"]
    }
    const pV = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: JV.G,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function QV(VV, eV, xV) {
      const JV = VV.querySelector(".InGameUi .TouchComponentsButtons");
      if (!JV) return pV;
      const UV = {},
        yV = {};
      for (const pV of YV) {
        const VV = JV.querySelector(`.TouchSlot${pV} > .TouchKey`);
        if (VV) {
          var QV, nV;
          UV[pV] = VV.cloneNode(!0);
          const eV = (null !== (QV = null === (nV = VV.querySelector(".TouchKeyLabel")) || void 0 === nV ? void 0 : nV.textContent) && void 0 !== QV ? QV : "").split(/\s+/).filter((VV => !/[\d\xd7]/.test(VV))).join(" ");
          eV && (yV[pV] = eV)
        }
      }
      const wV = eV => {
          const xV = VV.querySelector(`.InGameUi ${eV}`);
          return null !== xV && !xV.classList.contains("Hidden")
        },
        ZV = [...VV.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((VV => VV.cloneNode(!0)));
      return {
        faces: Object.keys(UV).length > 0 ? UV : null,
        names: yV,
        shop: wV(".TouchInventoryKey.ShopKey"),
        bag: wV(".TouchInventoryKey.BagKey"),
        sprint: wV(".TouchSprintHit"),
        items: ZV.length > 0 ? ZV : null,
        rowIcons: eV,
        pinnedIcons: xV
      }
    }

    function nV(VV, eV) {
      const xV = {};
      for (const JV of [...yV(eV), "G"]) {
        const eV = VV.names[JV];
        eV && (xV[UV[JV]] = eV)
      }
      return xV
    }

    function wV(VV, eV) {
      const {
        faces: xV
      } = VV;
      if (null === xV) return [];
      const JV = new Set(Object.keys(xV).map((VV => UV[VV])));
      return yV(eV).filter((VV => !JV.has(UV[VV])))
    }

    function ZV(VV, eV) {
      VV.replaceChildren(...[...eV.childNodes].map((VV => VV.cloneNode(!0))))
    }
  },
  9503: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      c: () => nV
    });
    var JV = xV(9500),
      YV = xV(9491),
      UV = xV(2729),
      yV = xV(2736);
    const pV = 2,
      QV = (VV, eV, xV) => {
        const JV = (0, YV.q)(eV).includes(VV) ? VV : (0, YV.q)(VV).includes(eV) ? eV : null;
        if (null === JV || "joystick" === JV) return !1;
        const pV = JV === VV ? eV : VV;
        if ("menu" === JV) return (0, yV.v)(pV, xV.hudElements[pV]);
        if ("hotbar" !== JV || !(0, YV.x)(pV)) return !0;
        if ((0, UV.Q)(xV.hudElements[pV]) || (0, UV.Q)(xV.hudElements.inventory)) return !1;
        return !(xV.hudLocked.includes(pV) || xV.hudLocked.includes("inventory")) || (0, UV.P)(xV.hudElements.hotbar)
      };

    function nV(VV, eV, xV, nV) {
      const wV = VV => (0, YV.A)(VV).some((VV => (0, UV.v)(xV.hudElements, VV) || (0, yV.t)(VV, xV, nV)));
      if (wV(VV)) return [];
      const ZV = VV => {
          var eV, JV;
          return "bag" === VV && 1 !== (null !== (eV = null === (JV = xV.hudElements.shop) || void 0 === JV ? void 0 : JV[2]) && void 0 !== eV ? eV : 1) || (0, YV.A)(VV).some((VV => void 0 !== xV.hudElements[VV]))
        },
        vV = YV.o.get(VV),
        rV = eV.filter((eV => {
          let {
            id: xV
          } = eV;
          return vV ? vV.has(xV) && !wV(xV) : xV === VV
        })),
        kV = new Set;
      for (const YV of eV) YV.id === VV || null !== vV && void 0 !== vV && vV.has(YV.id) || kV.has(YV.id) || wV(YV.id) || rV.some((VV => {
        let {
          id: eV,
          box: UV
        } = VV;
        return !QV(eV, YV.id, xV) && (ZV(eV) || ZV(YV.id)) && (0, JV.p)(UV, YV.box, pV)
      })) && kV.add(YV.id);
      return [...kV]
    }
  },
  35225: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      d: () => JV
    });
    const JV = "image/jpeg",
      YV = "jpg"
  },
  35232: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV,
      f: () => nV,
      h: () => wV
    });
    var JV = xV(1781),
      YV = xV(3630),
      UV = xV(99),
      yV = xV(1846),
      pV = xV(35225);

    function QV() {
      return !(0, UV.isMobileApp)() || JV.b.supports("photos")
    }
    async function nV(VV) {
      var eV, xV;
      if ((0, UV.isMobileApp)()) {
        const {
          saved: eV
        } = await JV.b.request("photos.save", {
          data: await (0, YV.e)(VV),
          mimeType: pV.d
        });
        return eV ? "saved" : "denied"
      }
      return (0, UV.isIOS)() && null !== (eV = (xV = navigator).canShare) && void 0 !== eV && eV.call(xV, {
        files: [VV]
      }) ? wV(VV) : ((0, yV.c)(VV, VV.name), "saved")
    }
    async function wV(VV) {
      try {
        return await navigator.share({
          files: [VV]
        }), "shared"
      } catch (eV) {
        if (eV instanceof DOMException && "AbortError" === eV.name) return "pJ";
        if (eV instanceof DOMException && "NotAllowedError" === eV.name) return "needsTap";
        throw eV
      }
    }
  },
  35218: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      e: () => wV,
      h: () => ZV
    });
    var JV = xV(27),
      YV = xV(35189),
      UV = xV(1725),
      yV = xV(35225);
    const pV = 8294400,
      QV = .92;

    function nV() {
      (0, UV.h)(), JV.b.set({
        screenshotMode: !0
      })
    }

    function wV() {
      JV.b.set({
        screenshotMode: !1
      })
    }
    async function ZV() {
      const {
        width: VV,
        height: eV,
        scale: xV
      } = function(VV, eV, xV) {
        const JV = Math.max(1, VV),
          YV = Math.max(1, eV),
          UV = Math.min(Math.max(1, xV), Math.sqrt(pV / (JV * YV)));
        return {
          width: Math.round(JV * UV),
          height: Math.round(YV * UV),
          scale: UV
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: JV
      } = await YV.devTools.capturePhoto(VV, eV, {
        scale: xV,
        type: yV.d,
        quality: QV
      });
      return new File([JV], function(VV) {
        const eV = VV => String(VV).padStart(2, "0"),
          xV = `${VV.getFullYear()}${eV(VV.getMonth()+1)}${eV(VV.getDate())}`,
          JV = `${eV(VV.getHours())}${eV(VV.getMinutes())}${eV(VV.getSeconds())}`;
        return `bloxd-${xV}-${JV}.${yV.b}`
      }(new Date), {
        type: yV.d
      })
    }
  },
  9293: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      f: () => JV
    });
    const JV = "controllerOpenKeyboard",
      YV = "controllerKeyboardVisible"
  },
  35197: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    const JV = new Set(["chunkBorders"])
  },
  35189: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ALL_DEV_TOOLS: () => yV,
      coreDevTools: () => nV,
      devTools: () => QV
    });
    var JV = xV(686),
      YV = xV(1348),
      UV = xV(35197);
    const yV = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function pV() {
      const {
        noaDevTools: VV
      } = await xV.e(260).then((() => xV(42389)));
      return VV
    }
    const QV = new class {
        constructor() {
          this.loadHost = pV, this.tools = yV
        }
        setHost(VV) {
          this.tools = null === VV ? yV : VV.tools, this.loadHost = null === VV ? pV : async () => VV
        }
        supports(VV) {
          return this.tools.has(VV)
        }
        async downloadScene(VV, eV) {
          const xV = await this.loadHost();
          await xV.downloadScene(VV, eV)
        }
        async setAmbientLightIntensity(VV) {
          const eV = await this.loadHost();
          await eV.setAmbientLightIntensity(VV)
        }
        async capturePhoto(VV, eV, xV) {
          return (await this.loadHost()).capturePhoto(VV, eV, xV)
        }
      },
      nV = {
        tools: UV.e,
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
    JV.I && QV.setHost(nV), (0, YV.C)((() => {
      QV.setHost(nV)
    }))
  },
  35343: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      c: () => YV,
      g: () => wV
    });
    var JV = xV(1656);

    function YV(VV) {
      var eV;
      return {
        ...yV.store,
        yaw: yV.store.yaw + (null !== (eV = JV.c[VV].previewYaw) && void 0 !== eV ? eV : 0)
      }
    }
    const UV = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yV = {
        player: UV,
        store: {
          ...UV,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pV(VV, eV) {
      VV instanceof Promise ? VV.then(eV).catch((VV => {
        console.error("Couldn't open the preview", VV)
      })) : eV(VV)
    }
    class QV {
      constructor(VV) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pV(VV, (VV => {
          this.closed ? VV.close() : (this.opened = VV, null !== this.size && VV.resize(this.size.width, this.size.height), null !== this.view && VV.show(this.view))
        }))
      }
      show(VV) {
        var eV;
        this.view = VV, null === (eV = this.opened) || void 0 === eV || eV.show(VV)
      }
      resize(VV, eV) {
        var xV;
        this.size = {
          width: VV,
          height: eV
        }, null === (xV = this.opened) || void 0 === xV || xV.resize(VV, eV)
      }
      close() {
        var VV;
        this.closed = !0, null === (VV = this.opened) || void 0 === VV || VV.close(), this.opened = null
      }
    }
    class nV {
      constructor(VV) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(VV).then((VV => VV.ready)), pV(VV, (VV => {
          this.closed ? VV.close() : (this.opened = VV, null !== this.size && VV.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var VV, eV;
        return null !== (VV = null === (eV = this.opened) || void 0 === eV ? void 0 : eV.isReady()) && void 0 !== VV && VV
      }
      setCosmetic(VV, eV) {
        var xV;
        null === (xV = this.opened) || void 0 === xV || xV.setCosmetic(VV, eV)
      }
      playEmote(VV) {
        var eV;
        null === (eV = this.opened) || void 0 === eV || eV.playEmote(VV)
      }
      setOrbit(VV) {
        var eV;
        null === (eV = this.opened) || void 0 === eV || eV.setOrbit(VV)
      }
      resetCamera() {
        var VV;
        null === (VV = this.opened) || void 0 === VV || VV.resetCamera()
      }
      async untilDrawn(VV) {
        var eV;
        await this.ready, await (null === (eV = this.opened) || void 0 === eV ? void 0 : eV.untilDrawn(VV))
      }
      resize(VV, eV) {
        var xV;
        this.size = {
          width: VV,
          height: eV
        }, null === (xV = this.opened) || void 0 === xV || xV.resize(VV, eV)
      }
      close() {
        var VV;
        this.closed = !0, null === (VV = this.opened) || void 0 === VV || VV.close(), this.opened = null
      }
    }
    const wV = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(VV) {
        this.host = VV
      }
      setDefaultHost(VV) {
        this.makeDefault = VV
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(VV) {
        return new QV(this.current().openMob(VV))
      }
      openPet(VV) {
        return new QV(this.current().openPet(VV))
      }
      openMobLineup(VV) {
        return new QV(this.current().openMobLineup(VV))
      }
      openCharacter(VV, eV) {
        return new nV(this.current().openCharacter(VV, eV))
      }
    }
  },
  35337: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV.b,
      f: () => JV.c,
      h: () => JV.g
    });
    var JV = xV(35343);
    class YV {
      constructor(VV) {
        this.load = VV, this.loaded = null, this.loading = null
      }
      run(VV) {
        return null !== this.loaded ? VV(this.loaded) : (this.loading ??= this.load().then((VV => (this.loaded = VV, VV)), (VV => {
          throw this.loading = null, VV
        })), this.loading.then(VV))
      }
    }
    class UV {
      constructor() {
        this.mobScene = new YV((() => Promise.all([xV.e(84), xV.e(255), xV.e(254), xV.e(279), xV.e(111), xV.e(280), xV.e(87), xV.e(277), xV.e(85), xV.e(86), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(302), xV.e(251), xV.e(269), xV.e(282), xV.e(285), xV.e(89), xV.e(202), xV.e(245), xV.e(109), xV.e(257), xV.e(248), xV.e(264), xV.e(223), xV.e(265), xV.e(88), xV.e(271)]).then((() => xV(42411))))), this.characterScene = new YV((() => Promise.all([xV.e(84), xV.e(255), xV.e(254), xV.e(279), xV.e(111), xV.e(280), xV.e(87), xV.e(277), xV.e(85), xV.e(86), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(302), xV.e(251), xV.e(269), xV.e(282), xV.e(285), xV.e(89), xV.e(202), xV.e(245), xV.e(109), xV.e(257), xV.e(248), xV.e(264), xV.e(223), xV.e(265), xV.e(88), xV.e(270)]).then((() => xV(42518)))))
      }
      openMob(VV) {
        return this.mobScene.run((eV => eV.openMobPreview(VV)))
      }
      openPet(VV) {
        return this.mobScene.run((eV => eV.openPetPreview(VV)))
      }
      openMobLineup(VV) {
        return this.mobScene.run((eV => eV.openMobLineupPreview(VV)))
      }
      openCharacter(VV, eV) {
        return this.characterScene.run((xV => xV.openCharacterPreview(VV, eV)))
      }
    }
    JV.g.setDefaultHost((() => new UV))
  },
  7216: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(40);
    const YV = "shaderPack";
    async function UV() {
      var VV;
      let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
    }
  },
  9477: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      g: () => QV
    });
    var JV = xV(27),
      YV = xV(1391),
      UV = xV(99);
    const yV = {
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

    function pV() {
      return (0, UV.isMobile)() && "function" === typeof navigator.vibrate
    }
    const QV = new class {
      constructor(VV) {
        this.deps = VV, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(VV, eV) {
        var xV;
        if (!this.deps.enabled()) return;
        const JV = yV[VV],
          YV = null !== eV && void 0 !== eV ? eV : JV.pattern;
        if (null === YV) return void console.warn("No vibration pattern for", VV);
        const UV = this.deps.now();
        UV - this.lastAnyAt < 40 && JV.priority < this.playingPriority || UV - (null !== (xV = this.lastAt.get(VV)) && void 0 !== xV ? xV : -1 / 0) < JV.minGapMs || UV < this.playingUntil && JV.priority < this.playingPriority || (this.lastAt.set(VV, UV), this.lastAnyAt = UV, this.playingUntil = UV + YV.reduce(((VV, eV) => VV + eV), 0), this.playingPriority = JV.priority, this.deps.vibrate(YV))
      }
    }({
      vibrate: VV => {
        navigator.vibrate([...VV])
      },
      now: () => performance.now(),
      enabled: () => pV() && JV.b.get("isTouchScreen") && JV.b.get("clientEscMenuOptions").vibration && !(0, YV.f)()
    })
  },
  9403: (VV, eV, xV) => {
    function JV(VV, eV) {
      return !VV.hidden && (eV || !VV.isRewardedAd)
    }

    function YV(VV) {
      return "object" === typeof VV ? VV.option : VV
    }

    function UV(VV, eV) {
      var xV;
      if ("dropdown" === (null === (xV = VV.userInput) || void 0 === xV ? void 0 : xV.type) && "object" === typeof VV.userInput.dropdownOptions[0]) {
        for (const xV of VV.userInput.dropdownOptions)
          if (YV(xV) === eV) return "object" === typeof xV ? xV.cost : VV.cost;
        console.error("Didn't find matching option for dropdown item. Item:", VV, "input:", eV)
      }
      return VV.cost
    }

    function yV(VV, eV, xV) {
      var JV;
      const YV = null !== (JV = xV.excludedPlayers) && void 0 !== JV ? JV : [eV];
      return VV.filter((VV => !YV.includes(VV)))
    }
    xV.d(eV, {
      e: () => UV,
      h: () => YV,
      l: () => yV,
      p: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);