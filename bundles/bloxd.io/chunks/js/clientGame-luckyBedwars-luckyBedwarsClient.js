export const id = 19;
export const ids = [19];
export const modules = {
  36187: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => uU,
      e: () => CU,
      h: () => jU,
      l: () => GU
    });
    var tU = gU(8982),
      pU = gU(36191),
      EU = gU(36197),
      PU = gU(8340),
      TU = gU(1410),
      qU = gU(56),
      KU = gU(74),
      cU = gU(1090);

    function GU() {
      var UU;
      return (0, TU.h)(pU.e, (0, pU.t)()), (0, cU.jsx)(cU.Fragment, {
        children: null === (UU = (0, pU.t)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function jU(UU) {
      var RU;
      let {
        show: gU
      } = UU;
      (0, TU.h)(pU.e, (0, pU.t)());
      const KU = null === (RU = (0, pU.t)()) || void 0 === RU ? void 0 : RU.menu;
      return (0, qU.useEffect)((() => {
        var UU;
        gU || (null === KU || void 0 === KU || null === (UU = KU.onClose) || void 0 === UU || UU.call(KU), (0, EU.q)())
      }), [gU, KU]), (0, qU.useEffect)((() => gU ? (0, PU.f)(EU.w, EU.e) : void 0), [gU]), (0, cU.jsx)(tU.d, {
        showing: gU,
        globallyUniqueKey: "clientGameMenu",
        children: null === KU || void 0 === KU ? void 0 : KU.content
      })
    }

    function uU(UU) {
      let {
        placement: RU = "bottom"
      } = UU;
      return (0, cU.jsx)("div", {
        id: `clientGameHud-${RU}`,
        style: {
          display: "contents"
        }
      })
    }

    function CU(UU) {
      let {
        children: RU,
        placement: gU = "bottom"
      } = UU;
      const [tU, pU] = (0, qU.useState)(null);
      return (0, qU.useEffect)((() => {
        pU(document.getElementById(`clientGameHud-${gU}`))
      }), [gU]), tU ? (0, KU.createPortal)(RU, tU) : null
    }
  },
  8982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(4200),
      pU = gU(4206);

    function EU(UU) {
      let {
        children: RU,
        showing: gU,
        globallyUniqueKey: EU,
        alwaysMountChildren: PU = !1,
        doGameplayStartStopOnShow: TU = !0,
        keepsMovement: qU = !1
      } = UU;
      return (0, pU.e)(!0, gU, EU, qU), (0, tU.c)(TU, gU), gU || PU ? RU : null
    }
  },
  8340: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      f: () => pU
    });
    let tU = null;
    const pU = function(UU) {
        const RU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tU = RU, () => {
          tU === RU && (tU = null)
        }
      },
      EU = () => {
        var UU;
        return null !== (UU = tU) && void 0 !== UU && UU.canCycle() ? tU.cycle : null
      }
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  38969: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => OU
    });
    const tU = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var pU = gU(56),
      EU = gU(37578),
      PU = gU(311);
    const TU = ["Basic", "Rare", "Super"];

    function qU(UU, RU) {
      return `${"Basic"===RU?"":`${RU} `}${"Simple"===UU?"":`${UU} `}Lucky Block`
    }
    const KU = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((UU => TU.map((RU => [qU(UU, RU), {
      category: UU,
      rarity: RU
    }])))));
    KU.keys();

    function cU(UU) {
      return KU.get(UU)
    }
    const GU = "Obsidian",
      jU = ["Cobweb"],
      uU = [...["Red", "Blue", "Green", "Yellow"].map((UU => `${(0,PU.eb)(UU)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", GU, ...jU];

    function CU(UU) {
      return uU.includes(UU)
    }
    var hU = gU(581);

    function QU(UU, RU) {
      const gU = cU(UU);
      if (gU) {
        const UU = cU(RU);
        if (!UU) return;
        const tU = TU.length - 1 - TU.indexOf(UU.rarity);
        return (UU.category === gU.category ? 0 : 1) * TU.length + tU
      }
      if (!CU(UU)) return;
      if (RU === UU) return 0;
      const tU = UU => CU(UU) && !jU.includes(UU) && UU !== GU;
      return tU(UU) && tU(RU) ? 1 : void 0
    }
    const eU = [...Array.from({
      length: hU.n - hU.m
    }, ((UU, RU) => hU.m + RU)), ...Array.from({
      length: hU.m
    }, ((UU, RU) => RU))];
    class WU {
      constructor(UU) {
        this.inventory = UU, this.pending = new Map
      }
      onPlace(UU) {
        var RU;
        const gU = this.inventory.selectedSlot(),
          tU = this.inventory.itemAt(gU);
        (null === tU || void 0 === tU ? void 0 : tU.name) === UU && (null !== (RU = tU.amount) && void 0 !== RU ? RU : 1) <= 1 && fU(UU) && this.pending.set(gU, UU)
      }
      onDrop(UU, RU) {
        RU < hU.m && null === this.inventory.itemAt(RU) && fU(UU) && this.refill(RU, UU)
      }
      HG() {
        const UU = [...this.pending];
        this.pending.clear();
        for (const [RU, gU] of UU) null === this.inventory.itemAt(RU) && this.refill(RU, gU)
      }
      refill(UU, RU) {
        const gU = function(UU, RU, gU, tU) {
          let pU, EU = 1 / 0;
          for (const PU of eU) {
            if (PU === RU) continue;
            const TU = tU(PU);
            if (!TU || PU < hU.m && RU !== gU) continue;
            const qU = QU(UU, TU.name);
            void 0 !== qU && qU < EU && (pU = PU, EU = qU)
          }
          return pU
        }(RU, UU, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== gU && this.inventory.swap(UU, gU)
      }
    }

    function fU(UU) {
      return !!cU(UU) || CU(UU)
    }
    var xU = gU(36191),
      mU = gU(74),
      IU = gU(1037),
      JU = gU.n(IU);
    const wU = "Lucky Clover",
      nU = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function bU(UU) {
      return nU[UU][0]
    }

    function oU(UU) {
      return TU.filter((RU => UU >= bU(RU)))
    }
    var ZU = gU(299),
      aU = gU(2254),
      YU = gU(21),
      BU = gU(2353),
      VU = gU(1790),
      rU = gU(36187),
      XU = gU(1049);
    var vU = gU(1090);
    const dU = {
      Basic: PU.N.whiteUiText,
      Rare: PU.N.goldUiText,
      Super: PU.N.cyanUiText
    };
    let HU = 1;

    function SU() {
      const UU = (0, aU.g)("currencyAmounts"),
        RU = null === UU || void 0 === UU ? void 0 : UU.Clovers;
      return !RU || RU.hidden ? null : (0, vU.jsx)(rU.e, {
        children: (0, vU.jsx)(sU, {
          amount: RU.amount
        })
      })
    }

    function sU(UU) {
      var RU, gU, tU;
      let {
        amount: EU
      } = UU;
      const {
        openEverythingMenuName: qU
      } = (0, YU.l)(["openEverythingMenuName"]), KU = (0, BU.c)(), [cU, GU] = (0, pU.useState)(EU), [jU, uU] = (0, pU.useState)(null), [CU, hU] = (0, pU.useState)(0), [QU, eU] = (0, pU.useState)([]), WU = (0, pU.useRef)(EU), fU = (0, pU.useRef)(!1), xU = (0, pU.useRef)(null), IU = qU === ZU.n.SHOP;
      (0, pU.useEffect)((() => {
        const UU = WU.current;
        if (WU.current = EU, EU <= UU || IU) return void GU(EU);
        const RU = KU || QU.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (gU = EU - UU, tU = !fU.current, gU <= 0 || !tU && gU < 40 ? 0 : Math.min(4, Math.ceil(gU / 30)));
        var gU, tU;
        if (fU.current = !0, oU(EU).length > oU(UU).length && hU(HU++), RU > 0) {
          const UU = [];
          for (let gU = 0; gU < RU; gU++) UU.push({
            id: HU++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * gU
          });
          eU((RU => [...RU, ...UU]))
        }
        const pU = RU > 0 ? 600 : 0;
        uU({
          id: HU++,
          delayMs: pU
        });
        const TU = performance.now() + pU;
        let qU = 0;
        const cU = RU => {
          const gU = PU.c.clamp((RU - TU) / 600, 0, 1);
          GU(Math.round(UU + (EU - UU) * gU)), gU < 1 && (qU = requestAnimationFrame(cU))
        };
        return qU = requestAnimationFrame(cU), () => {
          cancelAnimationFrame(qU)
        }
      }), [EU, IU]);
      const nU = function(UU) {
          var RU;
          const gU = null !== (RU = TU.find((RU => UU < bU(RU)))) && void 0 !== RU ? RU : "Super";
          return {
            rarity: gU,
            progress: PU.c.clamp(UU / bU(gU), 0, 1)
          }
        }(cU),
        aU = oU(cU).at(-1);
      return (0, vU.jsxs)(vU.Fragment, {
        children: [(0, vU.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, vU.jsxs)("div", {
            className: JU()("LuckyCloverWallet", {
              Capped: aU && "Basic" !== aU
            }),
            style: aU && {
              "--luckyTierColour": dU[aU]
            },
            children: [(0, vU.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${nU.progress})`
              }
            }), CU > 0 && (0, vU.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(RU=null===jU||void 0===jU?void 0:jU.delayMs)&&void 0!==RU?RU:0}ms`
              }
            }, CU), (0, vU.jsx)("div", {
              ref: xU,
              className: JU()("LuckyCloverWalletIcon", jU && "Bounce"),
              style: {
                animationDelay: `${null!==(tU=null===jU||void 0===jU?void 0:jU.delayMs)&&void 0!==tU?tU:0}ms`
              },
              children: (0, vU.jsx)(VU.c, {
                itemName: wU,
                amount: 0
              })
            }, null !== (gU = null === jU || void 0 === jU ? void 0 : jU.id) && void 0 !== gU ? gU : 0), (0, vU.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: cU
            }), aU && (0, vU.jsx)(XU.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, mU.createPortal)(QU.map((UU => (0, vU.jsx)(yU, {
          flyer: UU,
          target: xU,
          onDone: () => {
            eU((RU => RU.filter((RU => RU.id !== UU.id))))
          }
        }, UU.id))), document.body)]
      })
    }

    function yU(UU) {
      let {
        flyer: RU,
        target: gU,
        onDone: tU
      } = UU;
      const EU = (0, pU.useRef)(null);
      return (0, pU.useEffect)((() => {
        var UU;
        const pU = null === (UU = gU.current) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
        if (!EU.current || !pU) return void tU();
        const {
          x: PU,
          y: TU
        } = RU, qU = PU + 140 * (Math.random() - .5), KU = TU - 30 - 40 * Math.random(), cU = EU.current.animate([{
          transform: `translate(${PU}px, ${TU}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${qU}px, ${KU}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${pU.left}px, ${pU.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: RU.delayMs,
          fill: "backwards"
        });
        return cU.onfinish = tU, () => {
          cU.cancel()
        }
      }), []), (0, vU.jsx)("div", {
        ref: EU,
        className: "LuckyCloverFlying",
        children: (0, vU.jsx)(VU.c, {
          itemName: wU,
          amount: 0
        })
      })
    }
    var kU = gU(24);
    const FU = "luckyGearUpgradeView",
      iU = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function AU(UU) {
      var RU;
      return null !== (RU = iU[UU.split(" ")[0]]) && void 0 !== RU ? RU : "#e07bff"
    }
    class zU {
      constructor(UU, RU) {
        this.selectedSlot = UU, this.itemAt = RU, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      qC(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [gU, tU, pU] of UU) this.rings.push({
          id: this.nextId++,
          slot: gU,
          colour: AU(pU),
          until: RU + 1200
        }), gU !== this.selectedSlot() && this.unseen.set(gU, {
          from: tU,
          to: pU
        });
        this.yh()
      }
      HG() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const RU = this.rings.filter((RU => RU.until > UU));
        let gU = RU.length !== this.rings.length;
        this.rings = RU;
        for (const [tU, {
            from: pU,
            to: EU
          }] of this.unseen) {
          const UU = this.itemAt(tU);
          (tU === this.selectedSlot() || UU !== EU && UU !== pU) && (this.unseen.delete(tU), gU = !0)
        }
        gU && this.yh()
      }
      yh() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, kU.p.yh(FU, this.view)
      }
    }
    var MU = gU(1410);

    function DU(UU) {
      return document.querySelector(`.HotBar [data-inven-idx="${UU}"]`)
    }

    function LU(UU) {
      let {
        ring: RU
      } = UU;
      const [gU, tU] = (0, pU.useState)(null);
      return (0, pU.useLayoutEffect)((() => {
        var UU, gU;
        tU(null !== (UU = null === (gU = DU(RU.slot)) || void 0 === gU ? void 0 : gU.getBoundingClientRect()) && void 0 !== UU ? UU : null)
      }), [RU]), gU ? (0, vU.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: gU.left,
          top: gU.top,
          width: gU.width,
          height: gU.height,
          "--ringColour": RU.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function NU(UU) {
      let {
        slot: RU
      } = UU;
      const [gU, tU] = (0, pU.useState)(null);
      return (0, pU.useLayoutEffect)((() => {
        const UU = () => {
          tU(DU(RU))
        };
        UU();
        const gU = new MutationObserver(UU),
          pU = document.querySelector(".BottomMiddleElements");
        return pU && gU.observe(pU, {
          childList: !0,
          subtree: !0
        }), () => {
          gU.disconnect()
        }
      }), [RU]), gU ? (0, mU.createPortal)((0, vU.jsx)("div", {
        className: "LuckyGearUnseen"
      }), gU) : null
    }

    function lU(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, MU.h)(FU, RU.getView());
      return (0, vU.jsxs)(vU.Fragment, {
        children: [gU.rings.map((UU => (0, vU.jsx)(LU, {
          ring: UU
        }, UU.id))), gU.unseenSlots.map((UU => (0, vU.jsx)(NU, {
          slot: UU
        }, UU)))]
      })
    }
    const OU = function(UU, RU, gU, PU) {
      let TU, {
          localPlayerId: qU
        } = PU,
        KU = null;
      const cU = new WU({
          itemAt: UU => TU.getItemSlot(qU, UU),
          selectedSlot: () => TU.getSelectedInventorySlotI(qU),
          swap: (UU, RU) => {
            TU.swapInventorySlots(UU, RU)
          }
        }),
        GU = new zU((() => TU.getSelectedInventorySlotI(qU)), (UU => {
          var RU;
          return null === (RU = TU.getItemSlot(qU, UU)) || void 0 === RU ? void 0 : RU.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, EU.d)()
        },
        onCreate: UU => {
          TU = UU, KU = (0, xU.y)((0, pU.createElement)(pU.Fragment, null, (0, pU.createElement)(SU), (0, pU.createElement)(lU, {
            controller: GU
          })))
        },
        onClose: () => {
          var UU;
          null === (UU = KU) || void 0 === UU || UU()
        },
        HG: () => {
          cU.HG(), GU.HG()
        },
        onReceivedMessageFromServer: (UU, RU) => {
          "luckyGearUpgrade" === UU && GU.qC(RU)
        },
        onPlayerChangeBlock: (UU, RU, gU, tU, pU, EU) => {
          "Air" !== EU && cU.onPlace(EU)
        },
        onPlayerDropItem: (UU, RU, gU, tU) => {
          cU.onDrop(RU, tU)
        },
        onPlayerAltAction: (UU, RU, gU, pU, EU, PU) => {
          if (!PU || "Mesh" !== TU.getEntityType(PU)) return;
          const qU = TU.getEntityName(PU),
            KU = Object.values(tU).find((UU => UU.name === qU));
          KU && TU.openShop(UU, !1, KU.shopTab)
        }
      }
    }
  },
  37578: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU
    });
    var tU = gU(311),
      pU = gU(36470),
      EU = gU(4147);
    const PU = ["Leaf Bed", "_Leaf Bed Head", ...tU.Gc.flatMap((UU => [`${UU} Bed`, `_${UU} Bed Head`, `${UU} Strongbed`, `_${UU} Strongbed Head`]))];

    function TU() {
      let UU;
      return {
        onCreate(RU) {
          UU = RU
        },
        altVetoBlocks: PU,
        onPlayerAttemptAltAction(RU, gU, tU, PU, TU, qU) {
          var KU;
          if ((0, pU.d)(UU.getMetaInfo(TU).rootName) && !UU.isEntityInteractable(qU) && (0, EU.d)(null === (KU = UU.QRU(RU)) || void 0 === KU ? void 0 : KU.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36470: (UU, RU, gU) => {
    function tU(UU) {
      return UU.includes("Leaf Bed")
    }

    function pU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !tU(UU)
    }

    function EU(UU) {
      return UU.includes(" Strongbed")
    }

    function PU(UU) {
      return tU(UU) || pU(UU) || EU(UU)
    }
    gU.d(RU, {
      d: () => PU,
      e: () => tU,
      i: () => EU,
      m: () => pU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);