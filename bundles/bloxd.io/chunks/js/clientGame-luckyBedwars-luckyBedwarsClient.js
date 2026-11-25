export const id = 19;
export const ids = [19];
export const modules = {
  36946: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => QG,
      d: () => KG,
      g: () => fG,
      j: () => pG
    });
    var wG = ZG(34472),
      SG = ZG(36951),
      LG = ZG(36955),
      yG = ZG(8759),
      kG = ZG(1389),
      UG = ZG(51),
      YG = ZG(59),
      VG = ZG(1067);

    function pG() {
      var GG;
      return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
        children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
      })
    }

    function fG(GG) {
      var bG;
      let {
        show: ZG
      } = GG;
      (0, kG.j)(SG.c, (0, SG.l)());
      const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
      return (0, UG.useEffect)((() => {
        var GG;
        ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
      }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
        showing: ZG,
        globallyUniqueKey: "clientGameMenu",
        children: null === YG || void 0 === YG ? void 0 : YG.content
      })
    }

    function QG(GG) {
      let {
        placement: bG = "bottom"
      } = GG;
      return (0, VG.jsx)("div", {
        id: `clientGameHud-${bG}`,
        style: {
          display: "contents"
        }
      })
    }

    function KG(GG) {
      let {
        children: bG,
        placement: ZG = "bottom"
      } = GG;
      const [wG, SG] = (0, UG.useState)(null);
      return (0, UG.useEffect)((() => {
        SG(document.getElementById(`clientGameHud-${ZG}`))
      }), [ZG]), wG ? (0, YG.createPortal)(bG, wG) : null
    }
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
  8759: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = null;
    const SG = function(GG) {
        const bG = {
          cycle: GG,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wG = bG, () => {
          wG === bG && (wG = null)
        }
      },
      LG = () => {
        var GG;
        return null !== (GG = wG) && void 0 !== GG && GG.canCycle() ? wG.cycle : null
      }
  },
  36955: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => hG,
      h: () => dG,
      j: () => kG,
      k: () => fG,
      m: () => JG,
      p: () => pG,
      r: () => zG,
      t: () => KG,
      x: () => rG
    });
    var wG = ZG(17),
      SG = ZG(19);
    const LG = "clientGameInventoryButtonsChanged",
      yG = new Map;

    function kG() {
      return [...yG.values()].sort(((GG, bG) => {
        var ZG, wG;
        return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
      }))
    }
    let UG = null;

    function YG(GG) {
      UG = GG
    }
    let VG = !1;

    function pG(GG) {
      VG = !0;
      try {
        GG.onClick()
      } finally {
        VG = !1
      }
      GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
    }

    function fG() {
      return VG
    }

    function QG() {
      return kG().filter((GG => GG.panel && !GG.disabled))
    }

    function KG(GG) {
      const bG = QG(),
        ZG = bG.findIndex((GG => GG.id === UG));
      return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
    }

    function hG() {
      return null !== UG && QG().length > 1
    }

    function dG() {
      YG(null)
    }

    function JG() {
      "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
    }

    function rG() {
      const GG = UG;
      return YG(null), GG
    }

    function zG(GG) {
      return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
        yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
      }
    }
  },
  36951: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => dG,
      i: () => JG,
      j: () => fG,
      l: () => YG,
      m: () => hG,
      n: () => QG,
      q: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(36955);
    const kG = "clientGameUiChanged";
    let UG = null;

    function YG() {
      return UG
    }

    function VG(GG, bG) {
      const ZG = {
        content: GG,
        menu: bG
      };
      return UG = ZG, SG.l.xh(kG, UG, !0), () => {
        UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
      }
    }
    let pG = null;

    function fG() {
      return pG
    }

    function QG(GG) {
      return pG = GG, () => {
        pG === GG && (pG = null)
      }
    }
    let KG = !1;

    function hG() {
      const GG = wG.e.get("openInGameMenuName");
      "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dG() {
      rG(!1)
    }

    function JG() {
      rG(KG)
    }

    function rG(GG) {
      "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
        openInGameMenuName: GG ? "inventory" : null
      }), GG || (0, yG.h)(), KG = !1
    }
  },
  39859: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => BG
    });
    const wG = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var SG = ZG(51),
      LG = ZG(38445),
      yG = ZG(352);
    const kG = ["Basic", "Rare", "Super"];

    function UG(GG, bG) {
      return `${"Basic"===bG?"":`${bG} `}${"Simple"===GG?"":`${GG} `}Lucky Block`
    }
    const YG = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((GG => kG.map((bG => [UG(GG, bG), {
      category: GG,
      rarity: bG
    }])))));
    YG.keys();

    function VG(GG) {
      return YG.get(GG)
    }
    const pG = "Obsidian",
      fG = ["Cobweb"],
      QG = [...["Red", "Blue", "Green", "Yellow"].map((GG => `${(0,yG.gb)(GG)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", pG, ...fG];

    function KG(GG) {
      return QG.includes(GG)
    }
    var hG = ZG(604);

    function dG(GG, bG) {
      const ZG = VG(GG);
      if (ZG) {
        const GG = VG(bG);
        if (!GG) return;
        const wG = kG.length - 1 - kG.indexOf(GG.rarity);
        return (GG.category === ZG.category ? 0 : 1) * kG.length + wG
      }
      if (!KG(GG)) return;
      if (bG === GG) return 0;
      const wG = GG => KG(GG) && !fG.includes(GG) && GG !== pG;
      return wG(GG) && wG(bG) ? 1 : void 0
    }
    const JG = [...Array.from({
      length: hG.t - hG.s
    }, ((GG, bG) => hG.s + bG)), ...Array.from({
      length: hG.s
    }, ((GG, bG) => bG))];
    class rG {
      constructor(GG) {
        this.inventory = GG, this.pending = new Map
      }
      onPlace(GG) {
        var bG;
        const ZG = this.inventory.selectedSlot(),
          wG = this.inventory.itemAt(ZG);
        (null === wG || void 0 === wG ? void 0 : wG.name) === GG && (null !== (bG = wG.amount) && void 0 !== bG ? bG : 1) <= 1 && zG(GG) && this.pending.set(ZG, GG)
      }
      onDrop(GG, bG) {
        bG < hG.s && null === this.inventory.itemAt(bG) && zG(GG) && this.refill(bG, GG)
      }
      Tp() {
        const GG = [...this.pending];
        this.pending.clear();
        for (const [bG, ZG] of GG) null === this.inventory.itemAt(bG) && this.refill(bG, ZG)
      }
      refill(GG, bG) {
        const ZG = function(GG, bG, ZG, wG) {
          let SG, LG = 1 / 0;
          for (const yG of JG) {
            if (yG === bG) continue;
            const kG = wG(yG);
            if (!kG || yG < hG.s && bG !== ZG) continue;
            const UG = dG(GG, kG.name);
            void 0 !== UG && UG < LG && (SG = yG, LG = UG)
          }
          return SG
        }(bG, GG, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== ZG && this.inventory.swap(GG, ZG)
      }
    }

    function zG(GG) {
      return !!VG(GG) || KG(GG)
    }
    var EG = ZG(36951),
      oG = ZG(59),
      XG = ZG(1006),
      uG = ZG.n(XG);
    const iG = "Lucky Clover",
      CG = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function WG(GG) {
      return CG[GG][0]
    }

    function mG(GG) {
      return kG.filter((bG => GG >= WG(bG)))
    }
    var IG = ZG(333),
      FG = ZG(2409),
      vG = ZG(17),
      aG = ZG(2549),
      cG = ZG(1889),
      lG = ZG(36946),
      jG = ZG(1016);
    var PG = ZG(1067);
    const MG = {
      Basic: yG.O.whiteUiText,
      Rare: yG.O.goldUiText,
      Super: yG.O.cyanUiText
    };
    let AG = 1;

    function sG() {
      const GG = (0, FG.i)("currencyAmounts"),
        bG = null === GG || void 0 === GG ? void 0 : GG.Clovers;
      return !bG || bG.hidden ? null : (0, PG.jsx)(lG.d, {
        children: (0, PG.jsx)(qG, {
          amount: bG.amount
        })
      })
    }

    function qG(GG) {
      var bG, ZG, wG;
      let {
        amount: LG
      } = GG;
      const {
        openEverythingMenuName: UG
      } = (0, vG.o)(["openEverythingMenuName"]), YG = (0, aG.e)(), [VG, pG] = (0, SG.useState)(LG), [fG, QG] = (0, SG.useState)(null), [KG, hG] = (0, SG.useState)(0), [dG, JG] = (0, SG.useState)([]), rG = (0, SG.useRef)(LG), zG = (0, SG.useRef)(!1), EG = (0, SG.useRef)(null), XG = UG === IG.u.SHOP;
      (0, SG.useEffect)((() => {
        const GG = rG.current;
        if (rG.current = LG, LG <= GG || XG) return void pG(LG);
        const bG = YG || dG.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (ZG = LG - GG, wG = !zG.current, ZG <= 0 || !wG && ZG < 40 ? 0 : Math.min(4, Math.ceil(ZG / 30)));
        var ZG, wG;
        if (zG.current = !0, mG(LG).length > mG(GG).length && hG(AG++), bG > 0) {
          const GG = [];
          for (let ZG = 0; ZG < bG; ZG++) GG.push({
            id: AG++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * ZG
          });
          JG((bG => [...bG, ...GG]))
        }
        const SG = bG > 0 ? 600 : 0;
        QG({
          id: AG++,
          delayMs: SG
        });
        const kG = performance.now() + SG;
        let UG = 0;
        const VG = bG => {
          const ZG = yG.c.clamp((bG - kG) / 600, 0, 1);
          pG(Math.round(GG + (LG - GG) * ZG)), ZG < 1 && (UG = requestAnimationFrame(VG))
        };
        return UG = requestAnimationFrame(VG), () => {
          cancelAnimationFrame(UG)
        }
      }), [LG, XG]);
      const CG = function(GG) {
          var bG;
          const ZG = null !== (bG = kG.find((bG => GG < WG(bG)))) && void 0 !== bG ? bG : "Super";
          return {
            rarity: ZG,
            progress: yG.c.clamp(GG / WG(ZG), 0, 1)
          }
        }(VG),
        FG = mG(VG).at(-1);
      return (0, PG.jsxs)(PG.Fragment, {
        children: [(0, PG.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, PG.jsxs)("div", {
            className: uG()("LuckyCloverWallet", {
              Capped: FG && "Basic" !== FG
            }),
            style: FG && {
              "--luckyTierColour": MG[FG]
            },
            children: [(0, PG.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${CG.progress})`
              }
            }), KG > 0 && (0, PG.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(bG=null===fG||void 0===fG?void 0:fG.delayMs)&&void 0!==bG?bG:0}ms`
              }
            }, KG), (0, PG.jsx)("div", {
              ref: EG,
              className: uG()("LuckyCloverWalletIcon", fG && "Bounce"),
              style: {
                animationDelay: `${null!==(wG=null===fG||void 0===fG?void 0:fG.delayMs)&&void 0!==wG?wG:0}ms`
              },
              children: (0, PG.jsx)(cG.b, {
                itemName: iG,
                amount: 0
              })
            }, null !== (ZG = null === fG || void 0 === fG ? void 0 : fG.id) && void 0 !== ZG ? ZG : 0), (0, PG.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: VG
            }), FG && (0, PG.jsx)(jG.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, oG.createPortal)(dG.map((GG => (0, PG.jsx)(nG, {
          flyer: GG,
          target: EG,
          onDone: () => {
            JG((bG => bG.filter((bG => bG.id !== GG.id))))
          }
        }, GG.id))), document.body)]
      })
    }

    function nG(GG) {
      let {
        flyer: bG,
        target: ZG,
        onDone: wG
      } = GG;
      const LG = (0, SG.useRef)(null);
      return (0, SG.useEffect)((() => {
        var GG;
        const SG = null === (GG = ZG.current) || void 0 === GG ? void 0 : GG.getBoundingClientRect();
        if (!LG.current || !SG) return void wG();
        const {
          x: yG,
          y: kG
        } = bG, UG = yG + 140 * (Math.random() - .5), YG = kG - 30 - 40 * Math.random(), VG = LG.current.animate([{
          transform: `translate(${yG}px, ${kG}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${UG}px, ${YG}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${SG.left}px, ${SG.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: bG.delayMs,
          fill: "backwards"
        });
        return VG.onfinish = wG, () => {
          VG.cancel()
        }
      }), []), (0, PG.jsx)("div", {
        ref: LG,
        className: "LuckyCloverFlying",
        children: (0, PG.jsx)(cG.b, {
          itemName: iG,
          amount: 0
        })
      })
    }
    var gG = ZG(19);
    const eG = "luckyGearUpgradeView",
      RG = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function TG(GG) {
      var bG;
      return null !== (bG = RG[GG.split(" ")[0]]) && void 0 !== bG ? bG : "#e07bff"
    }
    class HG {
      constructor(GG, bG) {
        this.selectedSlot = GG, this.itemAt = bG, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      hK(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [ZG, wG, SG] of GG) this.rings.push({
          id: this.nextId++,
          slot: ZG,
          colour: TG(SG),
          until: bG + 1200
        }), ZG !== this.selectedSlot() && this.unseen.set(ZG, {
          from: wG,
          to: SG
        });
        this.xh()
      }
      Tp() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const bG = this.rings.filter((bG => bG.until > GG));
        let ZG = bG.length !== this.rings.length;
        this.rings = bG;
        for (const [wG, {
            from: SG,
            to: LG
          }] of this.unseen) {
          const GG = this.itemAt(wG);
          (wG === this.selectedSlot() || GG !== LG && GG !== SG) && (this.unseen.delete(wG), ZG = !0)
        }
        ZG && this.xh()
      }
      xh() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, gG.l.xh(eG, this.view)
      }
    }
    var tG = ZG(1389);

    function DG(GG) {
      return document.querySelector(`.HotBar [data-inven-idx="${GG}"]`)
    }

    function NG(GG) {
      let {
        ring: bG
      } = GG;
      const [ZG, wG] = (0, SG.useState)(null);
      return (0, SG.useLayoutEffect)((() => {
        var GG, ZG;
        wG(null !== (GG = null === (ZG = DG(bG.slot)) || void 0 === ZG ? void 0 : ZG.getBoundingClientRect()) && void 0 !== GG ? GG : null)
      }), [bG]), ZG ? (0, PG.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: ZG.left,
          top: ZG.top,
          width: ZG.width,
          height: ZG.height,
          "--ringColour": bG.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function OG(GG) {
      let {
        slot: bG
      } = GG;
      const [ZG, wG] = (0, SG.useState)(null);
      return (0, SG.useLayoutEffect)((() => {
        const GG = () => {
          wG(DG(bG))
        };
        GG();
        const ZG = new MutationObserver(GG),
          SG = document.querySelector(".BottomMiddleElements");
        return SG && ZG.observe(SG, {
          childList: !0,
          subtree: !0
        }), () => {
          ZG.disconnect()
        }
      }), [bG]), ZG ? (0, oG.createPortal)((0, PG.jsx)("div", {
        className: "LuckyGearUnseen"
      }), ZG) : null
    }

    function xG(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, tG.j)(eG, bG.getView());
      return (0, PG.jsxs)(PG.Fragment, {
        children: [ZG.rings.map((GG => (0, PG.jsx)(NG, {
          ring: GG
        }, GG.id))), ZG.unseenSlots.map((GG => (0, PG.jsx)(OG, {
          slot: GG
        }, GG)))]
      })
    }
    const BG = function(GG, bG, ZG, yG) {
      let kG, {
          localPlayerId: UG
        } = yG,
        YG = null;
      const VG = new rG({
          itemAt: GG => kG.getItemSlot(UG, GG),
          selectedSlot: () => kG.getSelectedInventorySlotI(UG),
          swap: (GG, bG) => {
            kG.swapInventorySlots(GG, bG)
          }
        }),
        pG = new HG((() => kG.getSelectedInventorySlotI(UG)), (GG => {
          var bG;
          return null === (bG = kG.getItemSlot(UG, GG)) || void 0 === bG ? void 0 : bG.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, LG.c)()
        },
        onCreate: GG => {
          kG = GG, YG = (0, EG.q)((0, SG.createElement)(SG.Fragment, null, (0, SG.createElement)(sG), (0, SG.createElement)(xG, {
            controller: pG
          })))
        },
        onClose: () => {
          var GG;
          null === (GG = YG) || void 0 === GG || GG()
        },
        Tp: () => {
          VG.Tp(), pG.Tp()
        },
        onReceivedMessageFromServer: (GG, bG) => {
          "luckyGearUpgrade" === GG && pG.hK(bG)
        },
        onPlayerChangeBlock: (GG, bG, ZG, wG, SG, LG) => {
          "Air" !== LG && VG.onPlace(LG)
        },
        onPlayerDropItem: (GG, bG, ZG, wG) => {
          VG.onDrop(bG, wG)
        },
        onPlayerAltAction: (GG, bG, ZG, SG, LG, yG) => {
          if (!yG || "Mesh" !== kG.getEntityType(yG)) return;
          const UG = kG.getEntityName(yG),
            YG = Object.values(wG).find((GG => GG.name === UG));
          YG && kG.openShop(GG, !1, YG.shopTab)
        }
      }
    }
  },
  38445: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG
    });
    var wG = ZG(352),
      SG = ZG(37287),
      LG = ZG(4492);
    const yG = ["Leaf Bed", "_Leaf Bed Head", ...wG.Sc.flatMap((GG => [`${GG} Bed`, `_${GG} Bed Head`, `${GG} Strongbed`, `_${GG} Strongbed Head`]))];

    function kG() {
      let GG;
      return {
        onCreate(bG) {
          GG = bG
        },
        altVetoBlocks: yG,
        onPlayerAttemptAltAction(bG, ZG, wG, yG, kG, UG) {
          var YG;
          if ((0, SG.d)(GG.getMetaInfo(kG).rootName) && !GG.isEntityInteractable(UG) && (0, LG.d)(null === (YG = GG.YZG(bG)) || void 0 === YG ? void 0 : YG.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37287: (GG, bG, ZG) => {
    function wG(GG) {
      return GG.includes("Leaf Bed")
    }

    function SG(GG) {
      return / Bed(?: Head)?(?:\||$)/.test(GG) && !wG(GG)
    }

    function LG(GG) {
      return GG.includes(" Strongbed")
    }

    function yG(GG) {
      return wG(GG) || SG(GG) || LG(GG)
    }
    ZG.d(bG, {
      d: () => yG,
      f: () => wG,
      j: () => LG,
      n: () => SG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);