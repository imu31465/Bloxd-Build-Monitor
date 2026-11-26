export const id = 22;
export const ids = [22];
export const modules = {
  37318: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU,
      e: () => gU,
      f: () => NU,
      h: () => YU
    });
    var cU = zU(34859),
      yU = zU(37325),
      QU = zU(37334),
      AU = zU(9282),
      FU = zU(1492),
      oU = zU(61),
      DU = zU(73),
      EU = zU(1305);

    function YU() {
      var UU;
      return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
        children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function NU(UU) {
      var XU;
      let {
        show: zU
      } = UU;
      (0, FU.j)(yU.d, (0, yU.o)());
      const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
      return (0, oU.useEffect)((() => {
        var UU;
        zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
      }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
        showing: zU,
        globallyUniqueKey: "clientGameMenu",
        children: null === DU || void 0 === DU ? void 0 : DU.content
      })
    }
    const IU = new Map,
      pU = new Set;

    function aU(UU, XU) {
      XU ? IU.set(UU, XU) : IU.delete(UU);
      for (const zU of pU) zU()
    }

    function tU(UU) {
      let {
        placement: XU = "bottom"
      } = UU;
      const zU = (0, oU.useRef)(null);
      return (0, oU.useLayoutEffect)((() => {
        const UU = zU.current;
        return aU(XU, UU), () => {
          IU.get(XU) === UU && aU(XU, null)
        }
      }), [XU]), (0, EU.jsx)("div", {
        ref: zU,
        id: `clientGameHud-${XU}`,
        style: {
          display: "contents"
        }
      })
    }

    function gU(UU) {
      let {
        children: XU,
        placement: zU = "bottom"
      } = UU;
      const [cU, yU] = (0, oU.useState)((() => {
        var UU;
        return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
      }));
      return (0, oU.useEffect)((() => {
        const UU = () => {
          var UU;
          yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
        };
        return pU.add(UU), UU(), () => {
          pU.delete(UU)
        }
      }), [zU]), cU ? (0, DU.createPortal)(XU, cU) : null
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
  9282: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => yU
    });
    let cU = null;
    const yU = function(UU) {
        const XU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return cU = XU, () => {
          cU === XU && (cU = null)
        }
      },
      QU = () => {
        var UU;
        return null !== (UU = cU) && void 0 !== UU && UU.canCycle() ? cU.cycle : null
      }
  },
  37334: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => aU,
      l: () => tU,
      o: () => FU,
      r: () => NU,
      t: () => gU,
      v: () => YU,
      w: () => GU,
      x: () => pU,
      y: () => kU
    });
    var cU = zU(27),
      yU = zU(31);
    const QU = "clientGameInventoryButtonsChanged",
      AU = new Map;

    function FU() {
      return [...AU.values()].sort(((UU, XU) => {
        var zU, cU;
        return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
      }))
    }
    let oU = null;

    function DU(UU) {
      oU = UU
    }
    let EU = !1;

    function YU(UU) {
      EU = !0;
      try {
        UU.onClick()
      } finally {
        EU = !1
      }
      UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
    }

    function NU() {
      return EU
    }

    function IU() {
      return FU().filter((UU => UU.panel && !UU.disabled))
    }

    function pU(UU) {
      const XU = IU(),
        zU = XU.findIndex((UU => UU.id === oU));
      return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
    }

    function aU() {
      return null !== oU && IU().length > 1
    }

    function tU() {
      DU(null)
    }

    function gU() {
      "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
    }

    function kU() {
      const UU = oU;
      return DU(null), UU
    }

    function GU(UU) {
      return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
        AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
      }
    }
  },
  37325: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => kU,
      j: () => tU,
      l: () => gU,
      n: () => NU,
      o: () => DU,
      r: () => aU,
      t: () => IU,
      u: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(37334);
    const FU = "clientGameUiChanged";
    let oU = null;

    function DU() {
      return oU
    }

    function EU(UU, XU) {
      const zU = {
        content: UU,
        menu: XU
      };
      return oU = zU, yU.k.UY(FU, oU, !0), () => {
        oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
      }
    }
    let YU = null;

    function NU() {
      return YU
    }

    function IU(UU) {
      return YU = UU, () => {
        YU === UU && (YU = null)
      }
    }
    let pU = !1;

    function aU() {
      const UU = cU.e.get("openInGameMenuName");
      "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tU() {
      GU(!1)
    }

    function gU() {
      GU(pU)
    }

    function kU() {
      pU && GU(!1)
    }

    function GU(UU) {
      "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, AU.l)(), pU = !1
    }
  },
  40328: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => hU
    });
    const cU = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var yU = zU(61),
      QU = zU(38782),
      AU = zU(344);
    const FU = ["Basic", "Rare", "Super"];

    function oU(UU, XU) {
      return `${"Basic"===XU?"":`${XU} `}${"Simple"===UU?"":`${UU} `}Lucky Block`
    }
    const DU = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((UU => FU.map((XU => [oU(UU, XU), {
      category: UU,
      rarity: XU
    }])))));
    DU.keys();

    function EU(UU) {
      return DU.get(UU)
    }
    const YU = "Obsidian",
      NU = ["Cobweb"],
      IU = [...["Red", "Blue", "Green", "Yellow"].map((UU => `${(0,AU._)(UU)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", YU, ...NU];

    function pU(UU) {
      return IU.includes(UU)
    }
    var aU = zU(646);

    function tU(UU, XU) {
      const zU = EU(UU);
      if (zU) {
        const UU = EU(XU);
        if (!UU) return;
        const cU = FU.length - 1 - FU.indexOf(UU.rarity);
        return (UU.category === zU.category ? 0 : 1) * FU.length + cU
      }
      if (!pU(UU)) return;
      if (XU === UU) return 0;
      const cU = UU => pU(UU) && !NU.includes(UU) && UU !== YU;
      return cU(UU) && cU(XU) ? 1 : void 0
    }
    const gU = [...Array.from({
      length: aU.s - aU.o
    }, ((UU, XU) => aU.o + XU)), ...Array.from({
      length: aU.o
    }, ((UU, XU) => XU))];
    class kU {
      constructor(UU) {
        this.inventory = UU, this.pending = new Map
      }
      onPlace(UU) {
        var XU;
        const zU = this.inventory.selectedSlot(),
          cU = this.inventory.itemAt(zU);
        (null === cU || void 0 === cU ? void 0 : cU.name) === UU && (null !== (XU = cU.amount) && void 0 !== XU ? XU : 1) <= 1 && GU(UU) && this.pending.set(zU, UU)
      }
      onDrop(UU, XU) {
        XU < aU.o && null === this.inventory.itemAt(XU) && GU(UU) && this.refill(XU, UU)
      }
      LY() {
        const UU = [...this.pending];
        this.pending.clear();
        for (const [XU, zU] of UU) null === this.inventory.itemAt(XU) && this.refill(XU, zU)
      }
      refill(UU, XU) {
        const zU = function(UU, XU, zU, cU) {
          let yU, QU = 1 / 0;
          for (const AU of gU) {
            if (AU === XU) continue;
            const FU = cU(AU);
            if (!FU || AU < aU.o && XU !== zU) continue;
            const oU = tU(UU, FU.name);
            void 0 !== oU && oU < QU && (yU = AU, QU = oU)
          }
          return yU
        }(XU, UU, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== zU && this.inventory.swap(UU, zU)
      }
    }

    function GU(UU) {
      return !!EU(UU) || pU(UU)
    }
    var BU = zU(37325),
      ZU = zU(73),
      RU = zU(1106),
      PU = zU.n(RU);
    const WU = "Lucky Clover",
      dU = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function LU(UU) {
      return dU[UU][0]
    }

    function eU(UU) {
      return FU.filter((XU => UU >= LU(XU)))
    }
    var CU = zU(320),
      wU = zU(2616),
      qU = zU(27),
      OU = zU(2827),
      SU = zU(1993),
      rU = zU(37318),
      uU = zU(1390);
    var fU = zU(1305);
    const iU = {
      Basic: AU.H.whiteUiText,
      Rare: AU.H.goldUiText,
      Super: AU.H.cyanUiText
    };
    let HU = 1;

    function MU() {
      const UU = (0, wU.f)("currencyAmounts"),
        XU = null === UU || void 0 === UU ? void 0 : UU.Clovers;
      return !XU || XU.hidden ? null : (0, fU.jsx)(rU.e, {
        children: (0, fU.jsx)(vU, {
          amount: XU.amount
        })
      })
    }

    function vU(UU) {
      var XU, zU, cU;
      let {
        amount: QU
      } = UU;
      const {
        openEverythingMenuName: oU
      } = (0, qU.q)(["openEverythingMenuName"]), DU = (0, OU.e)(), [EU, YU] = (0, yU.useState)(QU), [NU, IU] = (0, yU.useState)(null), [pU, aU] = (0, yU.useState)(0), [tU, gU] = (0, yU.useState)([]), kU = (0, yU.useRef)(QU), GU = (0, yU.useRef)(!1), BU = (0, yU.useRef)(null), RU = oU === CU.s.SHOP;
      (0, yU.useEffect)((() => {
        const UU = kU.current;
        if (kU.current = QU, QU <= UU || RU) return void YU(QU);
        const XU = DU || tU.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (zU = QU - UU, cU = !GU.current, zU <= 0 || !cU && zU < 40 ? 0 : Math.min(4, Math.ceil(zU / 30)));
        var zU, cU;
        if (GU.current = !0, eU(QU).length > eU(UU).length && aU(HU++), XU > 0) {
          const UU = [];
          for (let zU = 0; zU < XU; zU++) UU.push({
            id: HU++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * zU
          });
          gU((XU => [...XU, ...UU]))
        }
        const yU = XU > 0 ? 600 : 0;
        IU({
          id: HU++,
          delayMs: yU
        });
        const FU = performance.now() + yU;
        let oU = 0;
        const EU = XU => {
          const zU = AU.d.clamp((XU - FU) / 600, 0, 1);
          YU(Math.round(UU + (QU - UU) * zU)), zU < 1 && (oU = requestAnimationFrame(EU))
        };
        return oU = requestAnimationFrame(EU), () => {
          cancelAnimationFrame(oU)
        }
      }), [QU, RU]);
      const dU = function(UU) {
          var XU;
          const zU = null !== (XU = FU.find((XU => UU < LU(XU)))) && void 0 !== XU ? XU : "Super";
          return {
            rarity: zU,
            progress: AU.d.clamp(UU / LU(zU), 0, 1)
          }
        }(EU),
        wU = eU(EU).at(-1);
      return (0, fU.jsxs)(fU.Fragment, {
        children: [(0, fU.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, fU.jsxs)("div", {
            className: PU()("LuckyCloverWallet", {
              Capped: wU && "Basic" !== wU
            }),
            style: wU && {
              "--luckyTierColour": iU[wU]
            },
            children: [(0, fU.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${dU.progress})`
              }
            }), pU > 0 && (0, fU.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(XU=null===NU||void 0===NU?void 0:NU.delayMs)&&void 0!==XU?XU:0}ms`
              }
            }, pU), (0, fU.jsx)("div", {
              ref: BU,
              className: PU()("LuckyCloverWalletIcon", NU && "Bounce"),
              style: {
                animationDelay: `${null!==(cU=null===NU||void 0===NU?void 0:NU.delayMs)&&void 0!==cU?cU:0}ms`
              },
              children: (0, fU.jsx)(SU.c, {
                itemName: WU,
                amount: 0
              })
            }, null !== (zU = null === NU || void 0 === NU ? void 0 : NU.id) && void 0 !== zU ? zU : 0), (0, fU.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: EU
            }), wU && (0, fU.jsx)(uU.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, ZU.createPortal)(tU.map((UU => (0, fU.jsx)(VU, {
          flyer: UU,
          target: BU,
          onDone: () => {
            gU((XU => XU.filter((XU => XU.id !== UU.id))))
          }
        }, UU.id))), document.body)]
      })
    }

    function VU(UU) {
      let {
        flyer: XU,
        target: zU,
        onDone: cU
      } = UU;
      const QU = (0, yU.useRef)(null);
      return (0, yU.useEffect)((() => {
        var UU;
        const yU = null === (UU = zU.current) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
        if (!QU.current || !yU) return void cU();
        const {
          x: AU,
          y: FU
        } = XU, oU = AU + 140 * (Math.random() - .5), DU = FU - 30 - 40 * Math.random(), EU = QU.current.animate([{
          transform: `translate(${AU}px, ${FU}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${oU}px, ${DU}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${yU.left}px, ${yU.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: XU.delayMs,
          fill: "backwards"
        });
        return EU.onfinish = cU, () => {
          EU.cancel()
        }
      }), []), (0, fU.jsx)("div", {
        ref: QU,
        className: "LuckyCloverFlying",
        children: (0, fU.jsx)(SU.c, {
          itemName: WU,
          amount: 0
        })
      })
    }
    var sU = zU(31);
    const nU = "luckyGearUpgradeView",
      mU = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function lU(UU) {
      var XU;
      return null !== (XU = mU[UU.split(" ")[0]]) && void 0 !== XU ? XU : "#e07bff"
    }
    class xU {
      constructor(UU, XU) {
        this.selectedSlot = UU, this.itemAt = XU, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      PY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [zU, cU, yU] of UU) this.rings.push({
          id: this.nextId++,
          slot: zU,
          colour: lU(yU),
          until: XU + 1200
        }), zU !== this.selectedSlot() && this.unseen.set(zU, {
          from: cU,
          to: yU
        });
        this.UY()
      }
      LY() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const XU = this.rings.filter((XU => XU.until > UU));
        let zU = XU.length !== this.rings.length;
        this.rings = XU;
        for (const [cU, {
            from: yU,
            to: QU
          }] of this.unseen) {
          const UU = this.itemAt(cU);
          (cU === this.selectedSlot() || UU !== QU && UU !== yU) && (this.unseen.delete(cU), zU = !0)
        }
        zU && this.UY()
      }
      UY() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, sU.k.UY(nU, this.view)
      }
    }
    var JU = zU(1492);

    function jU(UU) {
      return document.querySelector(`.HotBar [data-inven-idx="${UU}"]`)
    }

    function KU(UU) {
      let {
        ring: XU
      } = UU;
      const [zU, cU] = (0, yU.useState)(null);
      return (0, yU.useLayoutEffect)((() => {
        var UU, zU;
        cU(null !== (UU = null === (zU = jU(XU.slot)) || void 0 === zU ? void 0 : zU.getBoundingClientRect()) && void 0 !== UU ? UU : null)
      }), [XU]), zU ? (0, fU.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: zU.left,
          top: zU.top,
          width: zU.width,
          height: zU.height,
          "--ringColour": XU.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function bU(UU) {
      let {
        slot: XU
      } = UU;
      const [zU, cU] = (0, yU.useState)(null);
      return (0, yU.useLayoutEffect)((() => {
        const UU = () => {
          cU(jU(XU))
        };
        UU();
        const zU = new MutationObserver(UU),
          yU = document.querySelector(".BottomMiddleElements");
        return yU && zU.observe(yU, {
          childList: !0,
          subtree: !0
        }), () => {
          zU.disconnect()
        }
      }), [XU]), zU ? (0, ZU.createPortal)((0, fU.jsx)("div", {
        className: "LuckyGearUnseen"
      }), zU) : null
    }

    function TU(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, JU.j)(nU, XU.getView());
      return (0, fU.jsxs)(fU.Fragment, {
        children: [zU.rings.map((UU => (0, fU.jsx)(KU, {
          ring: UU
        }, UU.id))), zU.unseenSlots.map((UU => (0, fU.jsx)(bU, {
          slot: UU
        }, UU)))]
      })
    }
    const hU = function(UU, XU, zU, AU) {
      let FU, {
          localPlayerId: oU
        } = AU,
        DU = null;
      const EU = new kU({
          itemAt: UU => FU.getItemSlot(oU, UU),
          selectedSlot: () => FU.getSelectedInventorySlotI(oU),
          swap: (UU, XU) => {
            FU.swapInventorySlots(UU, XU)
          }
        }),
        YU = new xU((() => FU.getSelectedInventorySlotI(oU)), (UU => {
          var XU;
          return null === (XU = FU.getItemSlot(oU, UU)) || void 0 === XU ? void 0 : XU.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, QU.d)()
        },
        onCreate: UU => {
          FU = UU, DU = (0, BU.u)((0, yU.createElement)(yU.Fragment, null, (0, yU.createElement)(MU), (0, yU.createElement)(TU, {
            controller: YU
          })))
        },
        onClose: () => {
          var UU;
          null === (UU = DU) || void 0 === UU || UU()
        },
        LY: () => {
          EU.LY(), YU.LY()
        },
        onReceivedMessageFromServer: (UU, XU) => {
          "luckyGearUpgrade" === UU && YU.PY(XU)
        },
        onPlayerChangeBlock: (UU, XU, zU, cU, yU, QU) => {
          "Air" !== QU && EU.onPlace(QU)
        },
        onPlayerDropItem: (UU, XU, zU, cU) => {
          EU.onDrop(XU, cU)
        },
        onPlayerAltAction: (UU, XU, zU, yU, QU, AU) => {
          if (!AU || "Mesh" !== FU.getEntityType(AU)) return;
          const oU = FU.getEntityName(AU),
            DU = Object.values(cU).find((UU => UU.name === oU));
          DU && FU.openShop(UU, !1, DU.shopTab)
        }
      }
    }
  },
  38782: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(344),
      yU = zU(37662),
      QU = zU(4909);
    const AU = ["Leaf Bed", "_Leaf Bed Head", ...cU.Oc.flatMap((UU => [`${UU} Bed`, `_${UU} Bed Head`, `${UU} Strongbed`, `_${UU} Strongbed Head`]))];

    function FU() {
      let UU;
      return {
        onCreate(XU) {
          UU = XU
        },
        altVetoBlocks: AU,
        onPlayerAttemptAltAction(XU, zU, cU, AU, FU, oU) {
          var DU;
          if ((0, yU.b)(UU.getMetaInfo(FU).rootName) && !UU.isEntityInteractable(oU) && (0, QU.d)(null === (DU = UU.HzU(XU)) || void 0 === DU ? void 0 : DU.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37662: (UU, XU, zU) => {
    function cU(UU) {
      return UU.includes("Leaf Bed")
    }

    function yU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !cU(UU)
    }

    function QU(UU) {
      return UU.includes(" Strongbed")
    }

    function AU(UU) {
      return cU(UU) || yU(UU) || QU(UU)
    }
    zU.d(XU, {
      b: () => AU,
      c: () => cU,
      g: () => QU,
      j: () => yU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);