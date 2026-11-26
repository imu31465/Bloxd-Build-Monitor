export const id = 147;
export const ids = [147, 214];
export const modules = {
  34993: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(317),
      rH = LH(34996);

    function SH(HH, BH, LH) {
      const SH = Object.entries(BH).sort(((HH, BH) => BH[1] - HH[1])),
        hH = (0, AH.pb)(HH);
      hH.push(HH ? "\n\n" : "\n");
      for (const [rH, uH] of SH) {
        var tH, zH, CH;
        const HH = null !== (tH = null === LH || void 0 === LH || null === (zH = LH[rH]) || void 0 === zH ? void 0 : zH.icon) && void 0 !== tH ? tH : `${rH} Enchantment`;
        hH.push({
          icon: HH,
          style: {
            fontSize: "1.5rem"
          }
        }), hH.push({
          str: `${rH} ${null!==(CH=(0,AH.T)(uH))&&void 0!==CH?CH:uH}\n`
        })
      }
      hH.push({
        str: "\n"
      });
      for (const [AH, uH] of SH) {
        var EH, XH, GH, YH;
        const HH = null !== (EH = null === LH || void 0 === LH || null === (XH = LH[AH]) || void 0 === XH ? void 0 : XH.icon) && void 0 !== EH ? EH : `${AH} Enchantment`,
          BH = null !== (GH = null === LH || void 0 === LH || null === (YH = LH[AH]) || void 0 === YH ? void 0 : YH.description) && void 0 !== GH ? GH : (0, rH.k)(AH);
        hH.push({
          icon: HH,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), hH.push({
          str: BH,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), hH.push({
          str: "\n"
        })
      }
      return hH
    }
  },
  34999: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => CH,
      c: () => xH,
      f: () => WH,
      j: () => zH,
      l: () => MH,
      n: () => EH,
      p: () => GH,
      s: () => QH,
      t: () => XH
    });
    var AH = LH(304),
      rH = LH(619),
      SH = LH(317),
      hH = LH(4608),
      tH = LH(34993);

    function zH(HH, BH) {
      var LH;
      let {
        player: AH,
        chestOrCreative: rH
      } = HH;
      var SH;
      return BH < AH.length ? null !== (SH = AH[BH]) && void 0 !== SH ? SH : null : null !== (LH = rH[BH - AH.length]) && void 0 !== LH ? LH : null
    }

    function CH(HH) {
      var BH;
      return null !== (BH = HH.amount) && void 0 !== BH ? BH : 0
    }

    function EH(HH) {
      return 0 === HH.button || void 0 === HH.button
    }

    function XH(HH) {
      return !!HH.shiftKey
    }

    function GH(HH) {
      return "touches" in HH || "touch" === HH.pointerType || "pen" === HH.pointerType
    }
    const YH = new Set,
      uH = 50;

    function QH(HH, BH) {
      var LH;
      const AH = null === (LH = HH[BH]) || void 0 === LH ? void 0 : LH.displayName;
      return (0, rH.M)(AH) ? "string" !== typeof BH ? "" : (!YH.has(BH) && YH.size < uH && (YH.add(BH), console.warn(`No item called "${BH}", so its hover shows the name as given`)), BH) : AH
    }

    function WH(HH, BH, LH) {
      var zH, CH, EH, XH, GH, YH, uH, WH, MH, xH, vH, PH, TH, UH;
      const VH = HH.attributes,
        OH = null !== (zH = null === (CH = BH[HH.name]) || void 0 === CH ? void 0 : CH.rootName) && void 0 !== zH ? zH : HH.name,
        bH = null !== (EH = null !== (XH = VH.customDisplayName) && void 0 !== XH ? XH : null === (GH = BH[HH.name]) || void 0 === GH ? void 0 : GH.displayName) && void 0 !== EH ? EH : QH(BH, OH);
      let kH = bH;
      const mH = null === (YH = VH.customAttributes) || void 0 === YH ? void 0 : YH.enchantmentTier;
      mH && (kH = (0, SH.pb)(bH, {
        colour: SH.lb[mH]
      }));
      const oH = null !== (uH = null !== (WH = null !== (MH = function(HH, BH) {
        var LH;
        if (void 0 === HH || null !== (LH = BH.customAttributes) && void 0 !== LH && LH.author) return HH;
        const rH = (0, AH.tc)(HH);
        return rH.every((HH => "string" === typeof HH)) ? HH : rH.map((HH => "string" === typeof HH ? HH : {
          icon: HH.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(VH.customDescription, VH)) && void 0 !== MH ? MH : null === (xH = BH[HH.name]) || void 0 === xH ? void 0 : xH.description) && void 0 !== WH ? WH : null === (vH = BH[OH]) || void 0 === vH ? void 0 : vH.description) && void 0 !== uH ? uH : "";
      let IH = oH;
      if (null !== (PH = VH.customAttributes) && void 0 !== PH && PH.enchantments) IH = (0, tH.d)(oH, VH.customAttributes.enchantments, VH.customAttributes.enchantmentData);
      else if (LH[OH]) IH = (0, SH.pb)(oH), IH.push({
        str: "\n"
      }), IH.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (TH = VH.customAttributes) && void 0 !== TH && TH.mobSettings) {
        var fH, lH;
        const HH = VH.customAttributes.mobSettings;
        var KH, cH;
        if (IH = [], (0, rH.M)(VH.customAttributes.health) || (IH.push({
            str: "\n"
          }), IH.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), IH.push({
            str: " "
          }), IH.push({
            str: VH.customAttributes.health.toString()
          }), (0, rH.M)(HH.maxHealth) || (IH.push({
            str: "/"
          }), IH.push({
            str: HH.maxHealth.toString()
          }))), !(0, rH.M)(HH.attackDamage) && HH.attackDamage > 0 && (IH.push({
            str: "\n"
          }), IH.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), IH.push({
            str: " "
          }), IH.push({
            str: HH.attackDamage.toString()
          })), !(0, rH.M)(HH.secondaryAttackDamage) && HH.secondaryAttackDamage > 0 && (IH.push({
            str: "\n"
          }), IH.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), IH.push({
            str: " "
          }), IH.push({
            str: HH.secondaryAttackDamage.toString()
          })), (0, rH.M)(HH.baseRunningSpeed) || (IH.push({
            str: "\n"
          }), IH.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), IH.push({
            str: " "
          }), IH.push({
            str: HH.baseRunningSpeed.toFixed(2)
          })), "Saddled" === HH.metaInfo) IH.push({
          str: "\n"
        }), IH.push({
          str: {
            translationKey: "general:has"
          }
        }), IH.push({
          str: " "
        }), IH.push({
          icon: null !== (KH = null === (cH = HH.tameInfo) || void 0 === cH ? void 0 : cH.saddleItemName) && void 0 !== KH ? KH : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (IH.push({
            str: "\n"
          }), IH.push({
            str: "\n"
          }), HH.petInfo && null !== (fH = HH.tameInfo) && void 0 !== fH && fH.supportsFriendship) {
          const BH = hH.e.getIconsFromFriendshipPoints(HH.petInfo.friendshipPoints);
          for (const HH of BH) IH.push({
            icon: HH,
            style: {
              fontSize: "1.5em"
            }
          });
          IH.push({
            str: "\n"
          });
          const LH = hH.e.getMobHungerLevel(HH.petInfo.lastFedAt);
          for (const HH of hH.e.hungerLevelIcons[LH]) IH.push({
            icon: HH,
            style: {
              fontSize: "1.5em"
            }
          });
          IH.push({
            str: " "
          }), IH.push({
            str: hH.e.hungerLevelTranslations[LH],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (HH.tameInfo && null !== (lH = HH.tameInfo) && void 0 !== lH && lH.supportsFriendship) {
          var eH, qH;
          let BH = null !== (eH = HH.tameInfo.likedFoods) && void 0 !== eH ? eH : [];
          IH.push({
            str: "\n"
          }), IH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hH.e.feedTextColours[hH.e.MobFoodType.Superliked]
            }
          }), IH.push({
            str: " "
          }), null !== (qH = HH.petInfo) && void 0 !== qH && qH.superlikedFoodKnown ? (IH.push({
            icon: HH.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), BH = BH.filter((BH => BH !== HH.petInfo.superlikedFood))) : IH.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), IH.push({
            str: "\n"
          }), IH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hH.e.feedTextColours[hH.e.MobFoodType.Liked]
            }
          }), IH.push({
            str: " "
          });
          for (const HH of BH) IH.push({
            icon: HH,
            style: {
              fontSize: "1.5em"
            }
          });
          IH.push({
            str: "\n"
          }), IH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hH.e.feedTextColours[hH.e.MobFoodType.Neutral]
            }
          }), IH.push({
            str: " "
          });
          for (const LH of null !== (gH = HH.tameInfo.neutralFoods) && void 0 !== gH ? gH : []) {
            var gH;
            IH.push({
              icon: LH,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          IH.push({
            str: "\n"
          }), IH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: hH.e.feedTextColours[hH.e.MobFoodType.Disliked]
            }
          }), IH.push({
            str: " "
          });
          for (const LH of null !== (NH = HH.tameInfo.dislikedFoods) && void 0 !== NH ? NH : []) {
            var NH;
            IH.push({
              icon: LH,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        IH.length > 0 ? (IH.shift(), IH.unshift(...(0, SH.pb)(oH))) : IH = (0, SH.pb)(oH)
      }
      return {
        name: kH,
        desc: IH,
        fontStyle: null !== (UH = VH.customAttributes) && void 0 !== UH && UH.author ? "italic" : "normal"
      }
    }

    function MH(HH, BH, LH, AH) {
      const rH = zH(HH, LH),
        SH = zH(HH, AH);
      if (!rH) return !1;
      const hH = BH[rH.name].armourReduction,
        tH = BH[SH.name].armourReduction;
      if (tH === hH) {
        var CH, EH, XH, GH;
        const HH = null !== (CH = null === (EH = rH.attributes.customAttributes) || void 0 === EH ? void 0 : EH.enchantmentTier) && void 0 !== CH ? CH : "Tier 0",
          BH = null !== (XH = null === (GH = SH.attributes.customAttributes) || void 0 === GH ? void 0 : GH.enchantmentTier) && void 0 !== XH ? XH : "Tier 0";
        return parseInt(HH.replace("Tier ", "")) >= parseInt(BH.replace("Tier ", ""))
      }
      return hH > tH
    }

    function xH(HH) {
      let BH;
      if ("number" === typeof HH) {
        const LH = document.querySelector(`[data-inven-idx="${HH}"]`);
        if (!LH) return null;
        BH = LH.getBoundingClientRect()
      } else BH = HH.getBoundingClientRect();
      return {
        x: BH.left + BH.width / 2,
        y: BH.top + BH.height / 2
      }
    }
  },
  9603: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => kH,
      h: () => IH
    });
    var AH = LH(45),
      rH = LH(18),
      SH = LH(2680),
      hH = LH(3770);
    const tH = 6,
      zH = 4,
      CH = ["HudMove-inventory", "HudLocked-inventory"];

    function EH(HH) {
      let {
        left: BH,
        right: LH,
        height: AH,
        rowTop: rH,
        besideBottom: SH,
        obstacles: hH
      } = HH;
      const CH = hH.filter((HH => HH.left < LH + tH && HH.right > BH - tH));
      let EH = SH;
      for (let tH = 0; tH <= CH.length; tH++) {
        const HH = CH.filter((HH => HH.top < EH + zH && HH.bottom > EH - AH - zH));
        if (0 === HH.length) break;
        EH = Math.min(...HH.map((HH => HH.top))) - zH
      }
      return EH === SH ? null : Math.ceil(rH - EH)
    }

    function XH(HH) {
      return Array.from(HH.children).filter((HH => !HH.classList.contains("HotBarRow")))
    }

    function GH(HH) {
      return function(HH) {
        const BH = [],
          LH = (HH, AH) => {
            const rH = HH.getBoundingClientRect();
            if (rH.width > 0 && rH.height > 0) BH.push(HH);
            else if (AH < 2)
              for (const BH of Array.from(HH.children)) LH(BH, AH + 1)
          };
        for (const AH of HH) LH(AH, 0);
        return BH
      }(XH(HH).flatMap((HH => HH.classList.contains("AuraBarWrapper") ? [] : HH.classList.contains("BottomScreenStatBarList") ? Array.from(HH.children) : [HH])))
    }

    function YH(HH, BH) {
      var LH;
      const AH = null === (LH = HH.querySelector(":scope > .AuraBarWrapper")) || void 0 === LH ? void 0 : LH.getBoundingClientRect();
      return (AH && AH.height > 0 ? AH.top : BH) - zH
    }
    const uH = ".BottomScreenMessage, [role='status']";

    function QH(HH, BH, LH, AH, rH) {
      const SH = HH => HH.map((HH => HH.getBoundingClientRect())),
        hH = EH({
          ...LH,
          obstacles: SH(LH.obstacles.filter((HH => !HH.matches(uH))))
        }),
        tH = BH.ownerDocument.defaultView,
        zH = `${null===tH||void 0===tH?void 0:tH.innerWidth}x${null===tH||void 0===tH?void 0:tH.innerHeight}:${AH}:${Math.round(LH.rowTop)}`,
        CH = HH.get(BH),
        XH = (null === CH || void 0 === CH ? void 0 : CH.at) === zH ? (GH = CH.rise, YH = hH, null === GH ? YH : null === YH ? GH : Math.max(GH, YH)) : hH;
      var GH, YH;
      const QH = EH({
        ...LH,
        besideBottom: null === XH ? LH.besideBottom : LH.rowTop - XH,
        obstacles: SH(LH.obstacles)
      });
      return rH && HH.set(BH, {
        at: zH,
        rise: XH
      }), null !== QH && void 0 !== QH ? QH : XH
    }

    function WH(HH, BH, LH, AH) {
      HH.classList.toggle(BH, null !== AH), null === AH ? HH.style.removeProperty(LH) : HH.style.setProperty(LH, `${AH}px`)
    }
    const MH = new WeakMap,
      xH = new WeakMap,
      vH = "(orientation: portrait) and (max-width: 600px)";

    function PH(HH, BH) {
      const LH = HH.getBoundingClientRect();
      if (0 === LH.width) return null;
      const AH = [LH, ...Array.from(HH.children).filter((HH => !(HH => BH.contains(HH.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(HH))).map((HH => HH.getBoundingClientRect())).filter((HH => HH.width > 0))];
      return {
        left: Math.min(...AH.map((HH => HH.left))),
        top: Math.min(...AH.map((HH => HH.top))),
        right: Math.max(...AH.map((HH => HH.right))),
        bottom: Math.max(...AH.map((HH => HH.bottom)))
      }
    }

    function TH(HH) {
      let {
        slotsLeft: BH,
        slotsRight: LH,
        width: AH,
        zoneRight: rH
      } = HH;
      const SH = Math.max(0, Math.floor(LH - BH - AH));
      return null === rH ? 0 : Math.min(SH, Math.max(0, Math.ceil(rH + tH - BH)))
    }

    function UH(HH) {
      var BH;
      const LH = HH.getBoundingClientRect();
      if (0 === LH.width) return null;
      const AH = null === (BH = HH.parentElement) || void 0 === BH ? void 0 : BH.getBoundingClientRect();
      return AH && AH.width > 0 ? Math.min(LH.right, AH.left + AH.width * VH) : LH.right
    }
    const VH = .35,
      OH = new WeakMap,
      bH = new WeakMap;

    function kH(HH) {
      mH(HH) && mH(HH),
        function(HH) {
          var BH, LH;
          const AH = HH.documentElement.classList;
          if (!AH.contains("TouchHotbar") || !AH.contains("TouchHotbarKeysAbove") || CH.some((HH => AH.contains(HH))) || !1 !== (null === (BH = HH.defaultView) || void 0 === BH || null === (LH = BH.matchMedia) || void 0 === LH ? void 0 : LH.call(BH, vH).matches)) return;
          const rH = HH.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            SH = null === rH || void 0 === rH ? void 0 : rH.closest(".BottomMiddleElements"),
            hH = null === rH || void 0 === rH ? void 0 : rH.parentElement;
          if (!rH || !SH || !hH || SH.classList.contains("TouchInventoryOpen") || rH.querySelector("[data-pressing]")) return;
          const tH = PH(rH, AH),
            zH = hH.getBoundingClientRect().top,
            EH = tH && QH(MH, SH, {
              left: tH.left,
              right: tH.right,
              height: tH.bottom - tH.top,
              rowTop: zH,
              besideBottom: YH(SH, zH),
              obstacles: GH(SH).filter((HH => !HH.classList.contains("BottomScreenMessage")))
            }, `${Math.round(tH.left)}:${Math.round(tH.right-tH.left)}x${Math.round(tH.bottom-tH.top)}`, !0);
          xH.has(SH) && xH.get(SH) === EH || (WH(SH, "KeysAboveUp", "--touch-keys-above-rise", EH), xH.set(SH, EH))
        }(HH)
    }

    function mH(HH) {
      var BH, LH, AH, rH;
      const SH = HH.documentElement.classList;
      if (!SH.contains("TouchHotbar") || SH.contains("TouchHotbarKeysAbove") || CH.some((HH => SH.contains(HH))) || null === (BH = HH.defaultView) || void 0 === BH || null === (LH = BH.matchMedia) || void 0 === LH || !LH.call(BH, oH).matches) return !1;
      const hH = HH.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        tH = null === hH || void 0 === hH ? void 0 : hH.parentElement,
        zH = null === hH || void 0 === hH ? void 0 : hH.closest(".BottomMiddleElements"),
        EH = null === zH || void 0 === zH ? void 0 : zH.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!hH || !tH || !zH || !EH || zH.classList.contains("TouchInventoryOpen")) return !1;
      const XH = hH.getBoundingClientRect();
      if (0 === XH.width) return !1;
      const uH = HH.querySelector(".JoystickZone"),
        MH = EH.getBoundingClientRect(),
        xH = tH.getBoundingClientRect().top,
        vH = TH({
          slotsLeft: MH.left,
          slotsRight: MH.right,
          width: XH.width,
          zoneRight: uH ? UH(uH) : null
        }),
        PH = OH.get(zH),
        VH = MH.left + vH,
        kH = {
          shift: vH,
          rise: QH(bH, zH, {
            left: VH,
            right: VH + XH.width,
            height: XH.height,
            rowTop: xH,
            besideBottom: YH(zH, xH),
            obstacles: GH(zH)
          }, `${vH}:${Math.round(XH.width)}`, (null !== (AH = null === PH || void 0 === PH ? void 0 : PH.shift) && void 0 !== AH ? AH : 0) === vH)
        };
      return (null === PH || void 0 === PH ? void 0 : PH.shift) !== kH.shift && zH.style.setProperty("--touch-shop-above-shift", `${kH.shift}px`), (null === PH || void 0 === PH ? void 0 : PH.rise) !== kH.rise && WH(zH, "ShopAboveUp", "--touch-shop-above-rise", kH.rise), OH.set(zH, kH), (null !== (rH = null === PH || void 0 === PH ? void 0 : PH.shift) && void 0 !== rH ? rH : 0) !== kH.shift
    }
    const oH = "(orientation: landscape) and (max-height: 500px)";

    function IH(HH, BH, LH) {
      (0, AH.useLayoutEffect)((() => {
        var BH;
        const AH = null === (BH = HH.current) || void 0 === BH ? void 0 : BH.closest(".BottomMiddleElements");
        if (!AH || LH) return;
        const tH = new ResizeObserver((() => {
            YH(!1)
          })),
          zH = () => {
            tH.disconnect();
            const HH = document.querySelector(".JoystickZone");
            for (const BH of [HH, AH, AH.querySelector(".HotBarGameItemsContainer"), ...GH(AH)]) BH && tH.observe(BH)
          };
        let CH = null,
          EH = !1;
        const YH = HH => {
            EH ||= HH, CH ??= requestAnimationFrame((() => {
              CH = null, EH && (EH = !1, zH()), kH(document)
            }))
          },
          uH = new MutationObserver((() => {
            YH(!0)
          }));
        uH.observe(AH, {
          childList: !0
        });
        for (const HH of XH(AH)) uH.observe(HH, {
          childList: !0,
          subtree: !0
        });
        kH(document), zH();
        const QH = () => {
            YH(!0)
          },
          WH = [(0, rH.m)(SH.e, QH), (0, rH.m)(hH.b, QH)],
          MH = new MutationObserver((() => {
            YH(!1)
          }));
        return HH.current && MH.observe(HH.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          MH.disconnect(), null !== CH && cancelAnimationFrame(CH), tH.disconnect(), uH.disconnect();
          for (const HH of WH) HH()
        }
      }), [HH, BH, LH])
    }
  },
  34877: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => GH,
      g: () => YH,
      i: () => uH
    });
    var AH = LH(45),
      rH = LH(34870),
      SH = LH(1287),
      hH = LH(4941),
      tH = LH(2515),
      zH = LH(81),
      CH = LH(2051),
      EH = LH(1313),
      XH = LH(1225);

    function GH(HH) {
      let {
        show: BH,
        onClose: LH
      } = HH;
      const {
        requestedGameNameWithVariation: AH,
        lobbyName: rH,
        shownLobbyName: SH
      } = (0, CH.e)("connectedGame"), GH = (0, tH.b)(AH, rH, !1);
      return zH.featureFlags.canUseInviteLinks && (0, XH.jsx)(hH.b, {
        show: BH,
        close: LH,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, XH.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, XH.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, XH.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, XH.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === GH ? (0, XH.jsx)(EH.d, {}) : GH, (0, XH.jsx)("br", {}), "Lobby Name: ", SH, (0, XH.jsx)("br", {}), (0, XH.jsx)("br", {}), (0, XH.jsx)("br", {}), (0, XH.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, XH.jsx)(YH, {})]
        })
      })
    }

    function YH() {
      var HH;
      const BH = null !== (HH = uH(zH.featureFlags.canUseInviteLinks)) && void 0 !== HH ? HH : "Loading Link...";
      return zH.featureFlags.canUseInviteLinks && (0, XH.jsx)(rH.e, {
        text: BH
      })
    }

    function uH(HH) {
      const [BH, LH] = (0, AH.useState)(null);
      return (0, AH.useEffect)((() => {
        if (!HH) return;
        let BH = !0;
        return (0, SH.x)().then((HH => {
          BH && LH(HH)
        })).catch((HH => {
          console.error("Failed to get invite link:", HH)
        })), () => {
          BH = !1
        }
      }), [HH]), BH
    }
  },
  34977: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(2051),
      tH = LH(1225);

    function zH(HH) {
      const BH = Math.floor(HH / 3600),
        LH = Math.floor(HH % 3600 / 60),
        AH = Math.floor(HH % 60),
        rH = `${LH.toString().padStart(2,"0")}:${AH.toString().padStart(2,"0")}`;
      return BH > 0 ? `${BH}:${rH}` : rH
    }
    const CH = (0, AH.memo)((function(HH) {
      let {
        className: BH
      } = HH;
      const {
        recording: LH,
        clipping: AH,
        seconds: rH
      } = (0, hH.e)("replayRecorder");
      return LH || AH ? (0, tH.jsxs)("div", {
        className: SH()("RecordingIndicator", {
          RecordingIndicatorClipping: !LH
        }, BH),
        "data-camera-keeper": "",
        children: [(0, tH.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, tH.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: LH ? "REC" : "CLIP"
        }), LH && (0, tH.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: zH(rH)
        })]
      }) : null
    }))
  },
  35040: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1225);
    const hH = 21,
      tH = 2 * Math.PI * hH;

    function zH(HH) {
      let {
        tier: BH,
        state: LH,
        progress: AH,
        size: zH = "large"
      } = HH;
      const CH = rH()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === zH,
        SeasonPassTierNodeLarge: "large" === zH,
        SeasonPassTierNodeReached: "reached" === LH,
        SeasonPassTierNodeEarning: "earning" === LH
      });
      if ("earning" !== LH || "large" === zH) return (0, SH.jsx)("span", {
        className: CH,
        children: (0, SH.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: BH
        })
      });
      const EH = Math.max(0, Math.min(1, AH));
      return (0, SH.jsxs)("span", {
        className: CH,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * EH),
        children: [(0, SH.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, SH.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, SH.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: hH
          }), (0, SH.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: hH,
            strokeDasharray: `${EH*tH} ${tH}`,
            transform: "rotate(-90 28 28)"
          }), (0, SH.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, SH.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: BH
        })]
      })
    }
  },
  34870: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH
    });
    var AH = LH(4740),
      rH = LH(1123),
      SH = LH(2924),
      hH = LH(1455),
      tH = LH(1225);

    function zH(HH) {
      let {
        text: BH
      } = HH;
      const {
        t: LH
      } = (0, rH.B)(), [zH, CH] = (0, SH.j)();
      return (0, tH.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, tH.jsx)("div", {
          className: "CopyTextRowText",
          children: BH
        }), (0, tH.jsx)(hH.i, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, AH.c)(BH).catch((HH => {
              console.error("Failed to copy text:", HH)
            })), CH()
          },
          disabled: zH,
          children: LH(zH ? "general:copied" : "general:copy")
        })]
      })
    }
  },
  34986: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(4947),
      rH = LH(4951);

    function SH(HH) {
      let {
        children: BH,
        showing: LH,
        globallyUniqueKey: SH,
        alwaysMountChildren: hH = !1,
        doGameplayStartStopOnShow: tH = !0,
        keepsMovement: zH = !1
      } = HH;
      return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
    }
  },
  7138: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(45),
      rH = LH(30);

    function SH(HH, BH) {
      var LH;
      const [SH, hH] = (0, AH.useState)(null !== (LH = rH.e.getItem(HH)) && void 0 !== LH ? LH : BH);
      return [SH, BH => {
        rH.e.setItem(HH, BH), hH(BH)
      }]
    }
  },
  9590: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => GH,
      E: () => CH,
      G: () => uH,
      K: () => SH,
      d: () => rH,
      g: () => tH,
      h: () => AH,
      j: () => QH,
      n: () => YH,
      p: () => EH,
      r: () => hH,
      u: () => WH,
      w: () => XH,
      z: () => zH
    });
    const AH = HH => ({
      left: HH.left,
      top: HH.top,
      right: HH.right,
      bottom: HH.bottom
    });

    function rH(HH) {
      return {
        x: (HH.left + HH.right) / 2,
        y: (HH.top + HH.bottom) / 2
      }
    }

    function SH(HH) {
      return 0 === HH.length ? null : HH.reduce(((HH, BH) => ({
        left: Math.min(HH.left, BH.left),
        top: Math.min(HH.top, BH.top),
        right: Math.max(HH.right, BH.right),
        bottom: Math.max(HH.bottom, BH.bottom)
      })))
    }

    function hH(HH, BH) {
      const LH = Math.max(0, (BH - (HH.right - HH.left)) / 2),
        AH = Math.max(0, (BH - (HH.bottom - HH.top)) / 2);
      return {
        left: HH.left - LH,
        top: HH.top - AH,
        right: HH.right + LH,
        bottom: HH.bottom + AH
      }
    }

    function tH(HH, BH) {
      return BH.x >= HH.left && BH.x <= HH.right && BH.y >= HH.top && BH.y <= HH.bottom
    }

    function zH(HH, BH, LH) {
      let AH = null,
        SH = 1 / 0;
      for (const {
          id: rH,
          box: hH
        }
        of BH) {
        const BH = (hH.right - hH.left) * (hH.bottom - hH.top);
        tH(hH, HH) && BH < SH && (SH = BH, AH = rH)
      }
      if (null !== AH) return AH;
      let zH = 1 / 0;
      for (const {
          id: CH,
          box: EH
        }
        of BH) {
        if (!tH(hH(EH, LH), HH)) continue;
        const BH = rH(EH),
          SH = Math.hypot(HH.x - BH.x, HH.y - BH.y);
        SH < zH && (zH = SH, AH = CH)
      }
      return AH
    }

    function CH(HH, BH, LH) {
      return {
        left: LH.left,
        top: LH.top,
        right: HH - LH.right,
        bottom: BH - LH.bottom
      }
    }

    function EH(HH, BH, LH, AH) {
      const rH = (HH, BH, LH) => Math.max(Math.min(BH, 0), Math.min(Math.max(LH, 0), HH));
      return {
        x: rH(BH, AH.left - HH.left, AH.right - HH.right),
        y: rH(LH, AH.top - HH.top, AH.bottom - HH.bottom)
      }
    }

    function XH(HH, BH, LH, AH, rH) {
      const SH = HH.dx * AH + BH,
        hH = HH.dy * rH + LH,
        tH = HH => Math.max(-1, Math.min(1, HH));
      return {
        dx: tH(SH / AH),
        dy: tH(hH / rH)
      }
    }

    function GH(HH, BH, LH, AH) {
      return BH <= 0 || LH <= 0 ? 1 : Math.max(.05, Math.min(1, HH / BH, AH / LH))
    }

    function YH(HH, BH, LH) {
      return Math.min(HH.right, BH.right) - Math.max(HH.left, BH.left) > LH && Math.min(HH.bottom, BH.bottom) - Math.max(HH.top, BH.top) > LH
    }

    function uH(HH, BH) {
      const LH = (HH, BH, LH, AH) => BH - HH > AH - LH ? LH - HH > BH - AH ? AH - BH : LH - HH : HH < LH ? LH - HH : BH > AH ? AH - BH : 0;
      return {
        x: LH(HH.left, HH.right, BH.left, BH.right),
        y: LH(HH.top, HH.bottom, BH.top, BH.bottom)
      }
    }

    function QH(HH, BH, LH) {
      return YH(HH, {
        left: 0,
        top: 0,
        right: BH,
        bottom: LH
      }, 0)
    }

    function WH(HH, BH) {
      let {
        avoid: LH = null,
        bounds: AH = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, rH = 0, SH = 1 / 0;
      return HH.forEach(((HH, hH) => {
        const tH = BH.filter((BH => YH(HH, BH, 0))).length,
          zH = null !== AH && (HH.left < AH.left || HH.top < AH.top || HH.right > AH.right || HH.bottom > AH.bottom),
          CH = tH + (LH && YH(HH, LH, 0) ? 1e3 : 0) + (zH ? 1e6 : 0);
        CH < SH && (rH = hH, SH = CH)
      })), rH
    }
  },
  9588: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => TH,
      D: () => CH,
      G: () => YH,
      K: () => GH,
      L: () => XH,
      e: () => tH,
      h: () => PH,
      k: () => vH,
      o: () => xH,
      q: () => zH,
      t: () => uH,
      x: () => EH,
      y: () => UH
    });
    var AH = LH(9590),
      rH = LH(2659);
    const SH = {
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
        ...Object.fromEntries(rH.A.map((HH => [HH, "menu"])))
      },
      hH = HH => rH.y.filter((BH => SH[BH] === HH)),
      tH = new Set(hH("cluster")),
      zH = new Set(hH("inventory")),
      CH = HH => "inventory" === HH || zH.has(HH),
      EH = HH => {
        const BH = SH[HH];
        return void 0 === BH ? [] : [BH, ...EH(BH)]
      },
      XH = HH => [HH, ...EH(HH)],
      GH = (HH, BH, LH) => "shop" === HH && BH ? LH("inventory") ? ["inventory"] : LH("bag") ? [HH, "bag"] : [HH] : [HH],
      YH = (HH, BH, LH, rH) => {
        const SH = HH => {
          const SH = BH[HH],
            {
              x: hH,
              y: tH
            } = SH && rH(HH) ? (0, AH.G)(SH, LH) : {
              x: 0,
              y: 0
            };
          return SH && {
            left: SH.left + hH,
            top: SH.top + tH,
            right: SH.right + hH,
            bottom: SH.bottom + tH
          }
        };
        return HH.flatMap((HH => {
          const hH = BH[HH];
          if ("inventory" !== HH || !hH || hH.right - hH.left <= LH.right - LH.left && hH.bottom - hH.top <= LH.bottom - LH.top) return [HH];
          const [tH, zH] = [SH("shop"), SH("bag")];
          return tH && zH && !(0, AH.n)(tH, zH, 0) ? ["shop", "bag"].filter(rH) : [HH]
        }))
      },
      uH = new Map([
        ["cluster", tH],
        ["inventory", zH]
      ]),
      QH = ["cluster"],
      WH = [...QH, ...rH.y.filter((HH => !QH.includes(HH) && !SH[HH]))],
      MH = HH => [HH, ...hH(HH).flatMap(MH)],
      xH = WH.flatMap(MH).map((HH => ({
        id: HH,
        label: `hudLayout:${HH}`,
        ...rH.v[HH],
        parent: SH[HH]
      }))),
      vH = Object.fromEntries(xH.map((HH => [HH.id, HH]))),
      PH = "data-hud-el";

    function TH(HH, BH, LH, AH) {
      const rH = LH(function(HH, BH) {
          return "attack" !== HH || BH ? vH[HH].label : "hudLayout:attackContext"
        }(HH, BH)),
        SH = AH[HH];
      return SH ? LH("hudLayout:slotWithKey", {
        slot: rH,
        key: SH
      }) : rH
    }

    function UH(HH, BH, LH, AH) {
      return HH.map((HH => TH(HH, BH, LH, AH))).join(", ")
    }
  },
  9598: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => SH,
      f: () => rH,
      i: () => hH,
      m: () => XH,
      q: () => EH,
      r: () => CH,
      u: () => zH
    });
    var AH = LH(2659);
    const rH = ["J", "C", "A", "P", "U", "X", "G"],
      SH = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function hH(HH) {
      return HH ? ["X"] : ["P", "X"]
    }
    const tH = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: AH.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function zH(HH, BH, LH) {
      const AH = HH.querySelector(".InGameUi .TouchComponentsButtons");
      if (!AH) return tH;
      const SH = {},
        hH = {};
      for (const tH of rH) {
        const HH = AH.querySelector(`.TouchSlot${tH} > .TouchKey`);
        if (HH) {
          var zH, CH;
          SH[tH] = HH.cloneNode(!0);
          const BH = (null !== (zH = null === (CH = HH.querySelector(".TouchKeyLabel")) || void 0 === CH ? void 0 : CH.textContent) && void 0 !== zH ? zH : "").split(/\s+/).filter((HH => !/[\d\xd7]/.test(HH))).join(" ");
          BH && (hH[tH] = BH)
        }
      }
      const EH = BH => {
          const LH = HH.querySelector(`.InGameUi ${BH}`);
          return null !== LH && !LH.classList.contains("Hidden")
        },
        XH = [...HH.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((HH => HH.cloneNode(!0)));
      return {
        faces: Object.keys(SH).length > 0 ? SH : null,
        names: hH,
        shop: EH(".TouchInventoryKey.ShopKey"),
        bag: EH(".TouchInventoryKey.BagKey"),
        sprint: EH(".TouchSprintHit"),
        items: XH.length > 0 ? XH : null,
        rowIcons: BH,
        pinnedIcons: LH
      }
    }

    function CH(HH, BH) {
      const LH = {};
      for (const AH of [...hH(BH), "G"]) {
        const BH = HH.names[AH];
        BH && (LH[SH[AH]] = BH)
      }
      return LH
    }

    function EH(HH, BH) {
      const {
        faces: LH
      } = HH;
      if (null === LH) return [];
      const AH = new Set(Object.keys(LH).map((HH => SH[HH])));
      return hH(BH).filter((HH => !AH.has(SH[HH])))
    }

    function XH(HH, BH) {
      HH.replaceChildren(...[...BH.childNodes].map((HH => HH.cloneNode(!0))))
    }
  },
  9592: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      g: () => CH
    });
    var AH = LH(9590),
      rH = LH(9588),
      SH = LH(2659),
      hH = LH(2661);
    const tH = 2,
      zH = (HH, BH, LH) => {
        const AH = (0, rH.x)(BH).includes(HH) ? HH : (0, rH.x)(HH).includes(BH) ? BH : null;
        if (null === AH || "joystick" === AH) return !1;
        const tH = AH === HH ? BH : HH;
        if ("menu" === AH) return (0, hH.t)(tH, LH.hudElements[tH]);
        if ("hotbar" !== AH || !(0, rH.D)(tH)) return !0;
        if ((0, SH.G)(LH.hudElements[tH]) || (0, SH.G)(LH.hudElements.inventory)) return !1;
        return !(LH.hudLocked.includes(tH) || LH.hudLocked.includes("inventory")) || (0, SH.F)(LH.hudElements.hotbar)
      };

    function CH(HH, BH, LH, CH) {
      const EH = HH => (0, rH.L)(HH).some((HH => (0, SH.s)(LH.hudElements, HH) || (0, hH.s)(HH, LH, CH)));
      if (EH(HH)) return [];
      const XH = HH => {
          var BH, AH;
          return "bag" === HH && 1 !== (null !== (BH = null === (AH = LH.hudElements.shop) || void 0 === AH ? void 0 : AH[2]) && void 0 !== BH ? BH : 1) || (0, rH.L)(HH).some((HH => void 0 !== LH.hudElements[HH]))
        },
        GH = rH.t.get(HH),
        YH = BH.filter((BH => {
          let {
            id: LH
          } = BH;
          return GH ? GH.has(LH) && !EH(LH) : LH === HH
        })),
        uH = new Set;
      for (const rH of BH) rH.id === HH || null !== GH && void 0 !== GH && GH.has(rH.id) || uH.has(rH.id) || EH(rH.id) || YH.some((HH => {
        let {
          id: BH,
          box: SH
        } = HH;
        return !zH(BH, rH.id, LH) && (XH(BH) || XH(rH.id)) && (0, AH.n)(SH, rH.box, tH)
      })) && uH.add(rH.id);
      return [...uH]
    }
  },
  34890: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      f: () => AH
    });
    const AH = "image/jpeg",
      rH = "jpg"
  },
  34898: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH,
      f: () => CH,
      h: () => EH
    });
    var AH = LH(1714),
      rH = LH(3562),
      SH = LH(81),
      hH = LH(1807),
      tH = LH(34890);

    function zH() {
      return !(0, SH.isMobileApp)() || AH.b.supports("photos")
    }
    async function CH(HH) {
      var BH, LH;
      if ((0, SH.isMobileApp)()) {
        const {
          saved: BH
        } = await AH.b.request("photos.save", {
          data: await (0, rH.h)(HH),
          mimeType: tH.f
        });
        return BH ? "saved" : "denied"
      }
      return (0, SH.isIOS)() && null !== (BH = (LH = navigator).canShare) && void 0 !== BH && BH.call(LH, {
        files: [HH]
      }) ? EH(HH) : ((0, hH.e)(HH, HH.name), "saved")
    }
    async function EH(HH) {
      try {
        return await navigator.share({
          files: [HH]
        }), "shared"
      } catch (BH) {
        if (BH instanceof DOMException && "AbortError" === BH.name) return "xB";
        if (BH instanceof DOMException && "NotAllowedError" === BH.name) return "needsTap";
        throw BH
      }
    }
  },
  34883: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      g: () => EH,
      k: () => XH
    });
    var AH = LH(15),
      rH = LH(34856),
      SH = LH(1659),
      hH = LH(34890);
    const tH = 8294400,
      zH = .92;

    function CH() {
      (0, SH.g)(), AH.c.set({
        screenshotMode: !0
      })
    }

    function EH() {
      AH.c.set({
        screenshotMode: !1
      })
    }
    async function XH() {
      const {
        width: HH,
        height: BH,
        scale: LH
      } = function(HH, BH, LH) {
        const AH = Math.max(1, HH),
          rH = Math.max(1, BH),
          SH = Math.min(Math.max(1, LH), Math.sqrt(tH / (AH * rH)));
        return {
          width: Math.round(AH * SH),
          height: Math.round(rH * SH),
          scale: SH
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: AH
      } = await rH.devTools.capturePhoto(HH, BH, {
        scale: LH,
        type: hH.f,
        quality: zH
      });
      return new File([AH], function(HH) {
        const BH = HH => String(HH).padStart(2, "0"),
          LH = `${HH.getFullYear()}${BH(HH.getMonth()+1)}${BH(HH.getDate())}`,
          AH = `${BH(HH.getHours())}${BH(HH.getMinutes())}${BH(HH.getSeconds())}`;
        return `bloxd-${LH}-${AH}.${hH.d}`
      }(new Date), {
        type: hH.f
      })
    }
  },
  9361: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => AH
    });
    const AH = "controllerOpenKeyboard",
      rH = "controllerKeyboardVisible"
  },
  34861: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    const AH = new Set(["chunkBorders"])
  },
  34856: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ALL_DEV_TOOLS: () => hH,
      coreDevTools: () => CH,
      devTools: () => zH
    });
    var AH = LH(642),
      rH = LH(1253),
      SH = LH(34861);
    const hH = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function tH() {
      const {
        noaDevTools: HH
      } = await LH.e(264).then((() => LH(42369)));
      return HH
    }
    const zH = new class {
        constructor() {
          this.loadHost = tH, this.tools = hH
        }
        setHost(HH) {
          this.tools = null === HH ? hH : HH.tools, this.loadHost = null === HH ? tH : async () => HH
        }
        supports(HH) {
          return this.tools.has(HH)
        }
        async downloadScene(HH, BH) {
          const LH = await this.loadHost();
          await LH.downloadScene(HH, BH)
        }
        async setAmbientLightIntensity(HH) {
          const BH = await this.loadHost();
          await BH.setAmbientLightIntensity(HH)
        }
        async capturePhoto(HH, BH, LH) {
          return (await this.loadHost()).capturePhoto(HH, BH, LH)
        }
      },
      CH = {
        tools: SH.c,
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
    AH.K && zH.setHost(CH), (0, rH.C)((() => {
      zH.setHost(CH)
    }))
  },
  35018: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => rH,
      j: () => EH
    });
    var AH = LH(1565);

    function rH(HH) {
      var BH;
      return {
        ...hH.store,
        yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
      }
    }
    const SH = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      hH = {
        player: SH,
        store: {
          ...SH,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function tH(HH, BH) {
      HH instanceof Promise ? HH.then(BH).catch((HH => {
        console.error("Couldn't open the preview", HH)
      })) : BH(HH)
    }
    class zH {
      constructor(HH) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
          this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height), null !== this.view && HH.show(this.view))
        }))
      }
      show(HH) {
        var BH;
        this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
      }
      resize(HH, BH) {
        var LH;
        this.size = {
          width: HH,
          height: BH
        }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
      }
      close() {
        var HH;
        this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
      }
    }
    class CH {
      constructor(HH) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(HH).then((HH => HH.ready)), tH(HH, (HH => {
          this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var HH, BH;
        return null !== (HH = null === (BH = this.opened) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
      }
      setCosmetic(HH, BH) {
        var LH;
        null === (LH = this.opened) || void 0 === LH || LH.setCosmetic(HH, BH)
      }
      playEmote(HH) {
        var BH;
        null === (BH = this.opened) || void 0 === BH || BH.playEmote(HH)
      }
      setOrbit(HH) {
        var BH;
        null === (BH = this.opened) || void 0 === BH || BH.setOrbit(HH)
      }
      resetCamera() {
        var HH;
        null === (HH = this.opened) || void 0 === HH || HH.resetCamera()
      }
      async untilDrawn(HH) {
        var BH;
        await this.ready, await (null === (BH = this.opened) || void 0 === BH ? void 0 : BH.untilDrawn(HH))
      }
      resize(HH, BH) {
        var LH;
        this.size = {
          width: HH,
          height: BH
        }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
      }
      close() {
        var HH;
        this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
      }
    }
    const EH = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(HH) {
        this.host = HH
      }
      setDefaultHost(HH) {
        this.makeDefault = HH
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(HH) {
        return new zH(this.current().openMob(HH))
      }
      openPet(HH) {
        return new zH(this.current().openPet(HH))
      }
      openMobLineup(HH) {
        return new zH(this.current().openMobLineup(HH))
      }
      openCharacter(HH, BH) {
        return new CH(this.current().openCharacter(HH, BH))
      }
    }
  },
  35016: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH.d,
      g: () => AH.h,
      h: () => AH.j
    });
    var AH = LH(35018);
    class rH {
      constructor(HH) {
        this.load = HH, this.loaded = null, this.loading = null
      }
      run(HH) {
        return null !== this.loaded ? HH(this.loaded) : (this.loading ??= this.load().then((HH => (this.loaded = HH, HH)), (HH => {
          throw this.loading = null, HH
        })), this.loading.then(HH))
      }
    }
    class SH {
      constructor() {
        this.mobScene = new rH((() => Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(283), LH.e(111), LH.e(284), LH.e(87), LH.e(281), LH.e(85), LH.e(86), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(303), LH.e(255), LH.e(272), LH.e(286), LH.e(289), LH.e(89), LH.e(249), LH.e(204), LH.e(109), LH.e(261), LH.e(252), LH.e(268), LH.e(219), LH.e(269), LH.e(88), LH.e(273)]).then((() => LH(42386))))), this.characterScene = new rH((() => Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(283), LH.e(111), LH.e(284), LH.e(87), LH.e(281), LH.e(85), LH.e(86), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(303), LH.e(255), LH.e(272), LH.e(286), LH.e(289), LH.e(89), LH.e(249), LH.e(204), LH.e(109), LH.e(261), LH.e(252), LH.e(268), LH.e(219), LH.e(269), LH.e(88), LH.e(218)]).then((() => LH(42476)))))
      }
      openMob(HH) {
        return this.mobScene.run((BH => BH.openMobPreview(HH)))
      }
      openPet(HH) {
        return this.mobScene.run((BH => BH.openPetPreview(HH)))
      }
      openMobLineup(HH) {
        return this.mobScene.run((BH => BH.openMobLineupPreview(HH)))
      }
      openCharacter(HH, BH) {
        return this.characterScene.run((LH => LH.openCharacterPreview(HH, BH)))
      }
    }
    AH.j.setDefaultHost((() => new SH))
  },
  7209: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    var AH = LH(30);
    const rH = "shaderPack";
    async function SH() {
      var HH;
      let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (HH = await AH.c.getItem(rH, BH)) && void 0 !== HH ? HH : null
    }
  },
  9577: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      g: () => zH
    });
    var AH = LH(15),
      rH = LH(1297),
      SH = LH(81);
    const hH = {
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

    function tH() {
      return (0, SH.isMobile)() && "function" === typeof navigator.vibrate
    }
    const zH = new class {
      constructor(HH) {
        this.deps = HH, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(HH, BH) {
        var LH;
        if (!this.deps.enabled()) return;
        const AH = hH[HH],
          rH = null !== BH && void 0 !== BH ? BH : AH.pattern;
        if (null === rH) return void console.warn("No vibration pattern for", HH);
        const SH = this.deps.now();
        SH - this.lastAnyAt < 40 && AH.priority < this.playingPriority || SH - (null !== (LH = this.lastAt.get(HH)) && void 0 !== LH ? LH : -1 / 0) < AH.minGapMs || SH < this.playingUntil && AH.priority < this.playingPriority || (this.lastAt.set(HH, SH), this.lastAnyAt = SH, this.playingUntil = SH + rH.reduce(((HH, BH) => HH + BH), 0), this.playingPriority = AH.priority, this.deps.vibrate(rH))
      }
    }({
      vibrate: HH => {
        navigator.vibrate([...HH])
      },
      now: () => performance.now(),
      enabled: () => tH() && AH.c.get("isTouchScreen") && AH.c.get("clientEscMenuOptions").vibration && !(0, rH.d)()
    })
  },
  9475: (HH, BH, LH) => {
    function AH(HH, BH) {
      return !HH.hidden && (BH || !HH.isRewardedAd)
    }

    function rH(HH) {
      return "object" === typeof HH ? HH.option : HH
    }

    function SH(HH, BH) {
      var LH;
      if ("dropdown" === (null === (LH = HH.userInput) || void 0 === LH ? void 0 : LH.type) && "object" === typeof HH.userInput.dropdownOptions[0]) {
        for (const LH of HH.userInput.dropdownOptions)
          if (rH(LH) === BH) return "object" === typeof LH ? LH.cost : HH.cost;
        console.error("Didn't find matching option for dropdown item. Item:", HH, "input:", BH)
      }
      return HH.cost
    }

    function hH(HH, BH, LH) {
      var AH;
      const rH = null !== (AH = LH.excludedPlayers) && void 0 !== AH ? AH : [BH];
      return HH.filter((HH => !rH.includes(HH)))
    }
    LH.d(BH, {
      c: () => SH,
      f: () => rH,
      g: () => hH,
      i: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);