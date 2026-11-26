export const id = 22;
export const ids = [22];
export const modules = {
  37472: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH,
      e: () => MH,
      i: () => GH,
      k: () => XH
    });
    var AH = LH(34986),
      rH = LH(37474),
      SH = LH(37479),
      hH = LH(9412),
      tH = LH(1450),
      zH = LH(45),
      CH = LH(69),
      EH = LH(1225);

    function XH() {
      var HH;
      return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
        children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
      })
    }

    function GH(HH) {
      var BH;
      let {
        show: LH
      } = HH;
      (0, tH.e)(rH.b, (0, rH.p)());
      const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
      return (0, zH.useEffect)((() => {
        var HH;
        LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
      }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
        showing: LH,
        globallyUniqueKey: "clientGameMenu",
        children: null === CH || void 0 === CH ? void 0 : CH.content
      })
    }
    const YH = new Map,
      uH = new Set;

    function QH(HH, BH) {
      BH ? YH.set(HH, BH) : YH.delete(HH);
      for (const LH of uH) LH()
    }

    function WH(HH) {
      let {
        placement: BH = "bottom"
      } = HH;
      const LH = (0, zH.useRef)(null);
      return (0, zH.useLayoutEffect)((() => {
        const HH = LH.current;
        return QH(BH, HH), () => {
          YH.get(BH) === HH && QH(BH, null)
        }
      }), [BH]), (0, EH.jsx)("div", {
        ref: LH,
        id: `clientGameHud-${BH}`,
        style: {
          display: "contents"
        }
      })
    }

    function MH(HH) {
      let {
        children: BH,
        placement: LH = "bottom"
      } = HH;
      const [AH, rH] = (0, zH.useState)((() => {
        var HH;
        return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
      }));
      return (0, zH.useEffect)((() => {
        const HH = () => {
          var HH;
          rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
        };
        return uH.add(HH), HH(), () => {
          uH.delete(HH)
        }
      }), [LH]), AH ? (0, CH.createPortal)(BH, AH) : null
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
  9412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      e: () => rH
    });
    let AH = null;
    const rH = function(HH) {
        const BH = {
          cycle: HH,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return AH = BH, () => {
          AH === BH && (AH = null)
        }
      },
      SH = () => {
        var HH;
        return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
      }
  },
  37479: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => uH,
      C: () => xH,
      c: () => SH,
      g: () => QH,
      j: () => WH,
      k: () => tH,
      n: () => GH,
      r: () => MH,
      t: () => XH,
      x: () => vH
    });
    var AH = LH(15),
      rH = LH(18);
    const SH = "clientGameInventoryButtonsChanged",
      hH = new Map;

    function tH() {
      return [...hH.values()].sort(((HH, BH) => {
        var LH, AH;
        return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
      }))
    }
    let zH = null;

    function CH(HH) {
      zH = HH
    }
    let EH = !1;

    function XH(HH) {
      EH = !0;
      try {
        HH.onClick()
      } finally {
        EH = !1
      }
      HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
    }

    function GH() {
      return EH
    }

    function YH() {
      return tH().filter((HH => HH.panel && !HH.disabled))
    }

    function uH(HH) {
      const BH = YH(),
        LH = BH.findIndex((HH => HH.id === zH));
      return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
    }

    function QH() {
      return null !== zH && YH().length > 1
    }

    function WH() {
      CH(null)
    }

    function MH() {
      "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
    }

    function xH() {
      const HH = zH;
      return CH(null), HH
    }

    function vH(HH) {
      return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
        hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
      }
    }
  },
  37474: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => xH,
      g: () => WH,
      j: () => MH,
      n: () => GH,
      p: () => CH,
      t: () => QH,
      u: () => YH,
      v: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(37479);
    const tH = "clientGameUiChanged";
    let zH = null;

    function CH() {
      return zH
    }

    function EH(HH, BH) {
      const LH = {
        content: HH,
        menu: BH
      };
      return zH = LH, rH.k.AX(tH, zH, !0), () => {
        zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
      }
    }
    let XH = null;

    function GH() {
      return XH
    }

    function YH(HH) {
      return XH = HH, () => {
        XH === HH && (XH = null)
      }
    }
    let uH = !1;

    function QH() {
      const HH = AH.c.get("openInGameMenuName");
      "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function WH() {
      vH(!1)
    }

    function MH() {
      vH(uH)
    }

    function xH() {
      uH && vH(!1)
    }

    function vH(HH) {
      "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
        openInGameMenuName: HH ? "inventory" : null
      }), HH || (0, hH.j)(), uH = !1
    }
  },
  40463: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => yH
    });
    const AH = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var rH = LH(45),
      SH = LH(38905),
      hH = LH(317);
    const tH = ["Basic", "Rare", "Super"];

    function zH(HH, BH) {
      return `${"Basic"===BH?"":`${BH} `}${"Simple"===HH?"":`${HH} `}Lucky Block`
    }
    const CH = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((HH => tH.map((BH => [zH(HH, BH), {
      category: HH,
      rarity: BH
    }])))));
    CH.keys();

    function EH(HH) {
      return CH.get(HH)
    }
    const XH = "Obsidian",
      GH = ["Cobweb"],
      YH = [...["Red", "Blue", "Green", "Yellow"].map((HH => `${(0,hH.X)(HH)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", XH, ...GH];

    function uH(HH) {
      return YH.includes(HH)
    }
    var QH = LH(619);

    function WH(HH, BH) {
      const LH = EH(HH);
      if (LH) {
        const HH = EH(BH);
        if (!HH) return;
        const AH = tH.length - 1 - tH.indexOf(HH.rarity);
        return (HH.category === LH.category ? 0 : 1) * tH.length + AH
      }
      if (!uH(HH)) return;
      if (BH === HH) return 0;
      const AH = HH => uH(HH) && !GH.includes(HH) && HH !== XH;
      return AH(HH) && AH(BH) ? 1 : void 0
    }
    const MH = [...Array.from({
      length: QH.p - QH.m
    }, ((HH, BH) => QH.m + BH)), ...Array.from({
      length: QH.m
    }, ((HH, BH) => BH))];
    class xH {
      constructor(HH) {
        this.inventory = HH, this.pending = new Map
      }
      onPlace(HH) {
        var BH;
        const LH = this.inventory.selectedSlot(),
          AH = this.inventory.itemAt(LH);
        (null === AH || void 0 === AH ? void 0 : AH.name) === HH && (null !== (BH = AH.amount) && void 0 !== BH ? BH : 1) <= 1 && vH(HH) && this.pending.set(LH, HH)
      }
      onDrop(HH, BH) {
        BH < QH.m && null === this.inventory.itemAt(BH) && vH(HH) && this.refill(BH, HH)
      }
      IX() {
        const HH = [...this.pending];
        this.pending.clear();
        for (const [BH, LH] of HH) null === this.inventory.itemAt(BH) && this.refill(BH, LH)
      }
      refill(HH, BH) {
        const LH = function(HH, BH, LH, AH) {
          let rH, SH = 1 / 0;
          for (const hH of MH) {
            if (hH === BH) continue;
            const tH = AH(hH);
            if (!tH || hH < QH.m && BH !== LH) continue;
            const zH = WH(HH, tH.name);
            void 0 !== zH && zH < SH && (rH = hH, SH = zH)
          }
          return rH
        }(BH, HH, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== LH && this.inventory.swap(HH, LH)
      }
    }

    function vH(HH) {
      return !!EH(HH) || uH(HH)
    }
    var PH = LH(37474),
      TH = LH(69),
      UH = LH(1038),
      VH = LH.n(UH);
    const OH = "Lucky Clover",
      bH = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function kH(HH) {
      return bH[HH][0]
    }

    function mH(HH) {
      return tH.filter((BH => HH >= kH(BH)))
    }
    var oH = LH(304),
      IH = LH(2628),
      fH = LH(15),
      lH = LH(2817),
      KH = LH(1986),
      cH = LH(37472),
      eH = LH(1315);
    var qH = LH(1225);
    const gH = {
      Basic: hH.K.whiteUiText,
      Rare: hH.K.goldUiText,
      Super: hH.K.cyanUiText
    };
    let NH = 1;

    function RH() {
      const HH = (0, IH.j)("currencyAmounts"),
        BH = null === HH || void 0 === HH ? void 0 : HH.Clovers;
      return !BH || BH.hidden ? null : (0, qH.jsx)(cH.e, {
        children: (0, qH.jsx)(jH, {
          amount: BH.amount
        })
      })
    }

    function jH(HH) {
      var BH, LH, AH;
      let {
        amount: SH
      } = HH;
      const {
        openEverythingMenuName: zH
      } = (0, fH.m)(["openEverythingMenuName"]), CH = (0, lH.b)(), [EH, XH] = (0, rH.useState)(SH), [GH, YH] = (0, rH.useState)(null), [uH, QH] = (0, rH.useState)(0), [WH, MH] = (0, rH.useState)([]), xH = (0, rH.useRef)(SH), vH = (0, rH.useRef)(!1), PH = (0, rH.useRef)(null), UH = zH === oH.o.SHOP;
      (0, rH.useEffect)((() => {
        const HH = xH.current;
        if (xH.current = SH, SH <= HH || UH) return void XH(SH);
        const BH = CH || WH.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (LH = SH - HH, AH = !vH.current, LH <= 0 || !AH && LH < 40 ? 0 : Math.min(4, Math.ceil(LH / 30)));
        var LH, AH;
        if (vH.current = !0, mH(SH).length > mH(HH).length && QH(NH++), BH > 0) {
          const HH = [];
          for (let LH = 0; LH < BH; LH++) HH.push({
            id: NH++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * LH
          });
          MH((BH => [...BH, ...HH]))
        }
        const rH = BH > 0 ? 600 : 0;
        YH({
          id: NH++,
          delayMs: rH
        });
        const tH = performance.now() + rH;
        let zH = 0;
        const EH = BH => {
          const LH = hH.d.clamp((BH - tH) / 600, 0, 1);
          XH(Math.round(HH + (SH - HH) * LH)), LH < 1 && (zH = requestAnimationFrame(EH))
        };
        return zH = requestAnimationFrame(EH), () => {
          cancelAnimationFrame(zH)
        }
      }), [SH, UH]);
      const bH = function(HH) {
          var BH;
          const LH = null !== (BH = tH.find((BH => HH < kH(BH)))) && void 0 !== BH ? BH : "Super";
          return {
            rarity: LH,
            progress: hH.d.clamp(HH / kH(LH), 0, 1)
          }
        }(EH),
        IH = mH(EH).at(-1);
      return (0, qH.jsxs)(qH.Fragment, {
        children: [(0, qH.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, qH.jsxs)("div", {
            className: VH()("LuckyCloverWallet", {
              Capped: IH && "Basic" !== IH
            }),
            style: IH && {
              "--luckyTierColour": gH[IH]
            },
            children: [(0, qH.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${bH.progress})`
              }
            }), uH > 0 && (0, qH.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(BH=null===GH||void 0===GH?void 0:GH.delayMs)&&void 0!==BH?BH:0}ms`
              }
            }, uH), (0, qH.jsx)("div", {
              ref: PH,
              className: VH()("LuckyCloverWalletIcon", GH && "Bounce"),
              style: {
                animationDelay: `${null!==(AH=null===GH||void 0===GH?void 0:GH.delayMs)&&void 0!==AH?AH:0}ms`
              },
              children: (0, qH.jsx)(KH.e, {
                itemName: OH,
                amount: 0
              })
            }, null !== (LH = null === GH || void 0 === GH ? void 0 : GH.id) && void 0 !== LH ? LH : 0), (0, qH.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: EH
            }), IH && (0, qH.jsx)(eH.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, TH.createPortal)(WH.map((HH => (0, qH.jsx)(nH, {
          flyer: HH,
          target: PH,
          onDone: () => {
            MH((BH => BH.filter((BH => BH.id !== HH.id))))
          }
        }, HH.id))), document.body)]
      })
    }

    function nH(HH) {
      let {
        flyer: BH,
        target: LH,
        onDone: AH
      } = HH;
      const SH = (0, rH.useRef)(null);
      return (0, rH.useEffect)((() => {
        var HH;
        const rH = null === (HH = LH.current) || void 0 === HH ? void 0 : HH.getBoundingClientRect();
        if (!SH.current || !rH) return void AH();
        const {
          x: hH,
          y: tH
        } = BH, zH = hH + 140 * (Math.random() - .5), CH = tH - 30 - 40 * Math.random(), EH = SH.current.animate([{
          transform: `translate(${hH}px, ${tH}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${zH}px, ${CH}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${rH.left}px, ${rH.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: BH.delayMs,
          fill: "backwards"
        });
        return EH.onfinish = AH, () => {
          EH.cancel()
        }
      }), []), (0, qH.jsx)("div", {
        ref: SH,
        className: "LuckyCloverFlying",
        children: (0, qH.jsx)(KH.e, {
          itemName: OH,
          amount: 0
        })
      })
    }
    var FH = LH(18);
    const DH = "luckyGearUpgradeView",
      wH = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function ZH(HH) {
      var BH;
      return null !== (BH = wH[HH.split(" ")[0]]) && void 0 !== BH ? BH : "#e07bff"
    }
    class dH {
      constructor(HH, BH) {
        this.selectedSlot = HH, this.itemAt = BH, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      kX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [LH, AH, rH] of HH) this.rings.push({
          id: this.nextId++,
          slot: LH,
          colour: ZH(rH),
          until: BH + 1200
        }), LH !== this.selectedSlot() && this.unseen.set(LH, {
          from: AH,
          to: rH
        });
        this.AX()
      }
      IX() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const BH = this.rings.filter((BH => BH.until > HH));
        let LH = BH.length !== this.rings.length;
        this.rings = BH;
        for (const [AH, {
            from: rH,
            to: SH
          }] of this.unseen) {
          const HH = this.itemAt(AH);
          (AH === this.selectedSlot() || HH !== SH && HH !== rH) && (this.unseen.delete(AH), LH = !0)
        }
        LH && this.AX()
      }
      AX() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, FH.k.AX(DH, this.view)
      }
    }
    var aH = LH(1450);

    function sH(HH) {
      return document.querySelector(`.HotBar [data-inven-idx="${HH}"]`)
    }

    function JH(HH) {
      let {
        ring: BH
      } = HH;
      const [LH, AH] = (0, rH.useState)(null);
      return (0, rH.useLayoutEffect)((() => {
        var HH, LH;
        AH(null !== (HH = null === (LH = sH(BH.slot)) || void 0 === LH ? void 0 : LH.getBoundingClientRect()) && void 0 !== HH ? HH : null)
      }), [BH]), LH ? (0, qH.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: LH.left,
          top: LH.top,
          width: LH.width,
          height: LH.height,
          "--ringColour": BH.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function iH(HH) {
      let {
        slot: BH
      } = HH;
      const [LH, AH] = (0, rH.useState)(null);
      return (0, rH.useLayoutEffect)((() => {
        const HH = () => {
          AH(sH(BH))
        };
        HH();
        const LH = new MutationObserver(HH),
          rH = document.querySelector(".BottomMiddleElements");
        return rH && LH.observe(rH, {
          childList: !0,
          subtree: !0
        }), () => {
          LH.disconnect()
        }
      }), [BH]), LH ? (0, TH.createPortal)((0, qH.jsx)("div", {
        className: "LuckyGearUnseen"
      }), LH) : null
    }

    function pH(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, aH.e)(DH, BH.getView());
      return (0, qH.jsxs)(qH.Fragment, {
        children: [LH.rings.map((HH => (0, qH.jsx)(JH, {
          ring: HH
        }, HH.id))), LH.unseenSlots.map((HH => (0, qH.jsx)(iH, {
          slot: HH
        }, HH)))]
      })
    }
    const yH = function(HH, BH, LH, hH) {
      let tH, {
          localPlayerId: zH
        } = hH,
        CH = null;
      const EH = new xH({
          itemAt: HH => tH.getItemSlot(zH, HH),
          selectedSlot: () => tH.getSelectedInventorySlotI(zH),
          swap: (HH, BH) => {
            tH.swapInventorySlots(HH, BH)
          }
        }),
        XH = new dH((() => tH.getSelectedInventorySlotI(zH)), (HH => {
          var BH;
          return null === (BH = tH.getItemSlot(zH, HH)) || void 0 === BH ? void 0 : BH.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, SH.e)()
        },
        onCreate: HH => {
          tH = HH, CH = (0, PH.v)((0, rH.createElement)(rH.Fragment, null, (0, rH.createElement)(RH), (0, rH.createElement)(pH, {
            controller: XH
          })))
        },
        onClose: () => {
          var HH;
          null === (HH = CH) || void 0 === HH || HH()
        },
        IX: () => {
          EH.IX(), XH.IX()
        },
        onReceivedMessageFromServer: (HH, BH) => {
          "luckyGearUpgrade" === HH && XH.kX(BH)
        },
        onPlayerChangeBlock: (HH, BH, LH, AH, rH, SH) => {
          "Air" !== SH && EH.onPlace(SH)
        },
        onPlayerDropItem: (HH, BH, LH, AH) => {
          EH.onDrop(BH, AH)
        },
        onPlayerAltAction: (HH, BH, LH, rH, SH, hH) => {
          if (!hH || "Mesh" !== tH.getEntityType(hH)) return;
          const zH = tH.getEntityName(hH),
            CH = Object.values(AH).find((HH => HH.name === zH));
          CH && tH.openShop(HH, !1, CH.shopTab)
        }
      }
    }
  },
  38905: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = LH(317),
      rH = LH(37798),
      SH = LH(4879);
    const hH = ["Leaf Bed", "_Leaf Bed Head", ...AH.Mc.flatMap((HH => [`${HH} Bed`, `_${HH} Bed Head`, `${HH} Strongbed`, `_${HH} Strongbed Head`]))];

    function tH() {
      let HH;
      return {
        onCreate(BH) {
          HH = BH
        },
        altVetoBlocks: hH,
        onPlayerAttemptAltAction(BH, LH, AH, hH, tH, zH) {
          var CH;
          if ((0, rH.d)(HH.getMetaInfo(tH).rootName) && !HH.isEntityInteractable(zH) && (0, SH.e)(null === (CH = HH.yLH(BH)) || void 0 === CH ? void 0 : CH.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37798: (HH, BH, LH) => {
    function AH(HH) {
      return HH.includes("Leaf Bed")
    }

    function rH(HH) {
      return / Bed(?: Head)?(?:\||$)/.test(HH) && !AH(HH)
    }

    function SH(HH) {
      return HH.includes(" Strongbed")
    }

    function hH(HH) {
      return AH(HH) || rH(HH) || SH(HH)
    }
    LH.d(BH, {
      d: () => hH,
      h: () => AH,
      l: () => SH,
      m: () => rH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);