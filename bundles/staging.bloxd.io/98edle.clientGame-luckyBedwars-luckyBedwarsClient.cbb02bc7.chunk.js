export const id = 17;
export const ids = [17];
export const modules = {
  34827: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW,
      g: () => gR,
      k: () => tR,
      n: () => BW
    });
    var wW = MW(8135),
      CW = MW(34830),
      zR = MW(34838),
      AW = MW(7672),
      bR = MW(1253),
      yR = MW(75),
      NW = MW(93),
      eW = MW(940);

    function BW() {
      var WW;
      return (0, bR.i)(CW.c, (0, CW.h)()), (0, eW.jsx)(eW.Fragment, {
        children: null === (WW = (0, CW.h)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function tR(WW) {
      var RW;
      let {
        show: MW
      } = WW;
      (0, bR.i)(CW.c, (0, CW.h)());
      const NW = null === (RW = (0, CW.h)()) || void 0 === RW ? void 0 : RW.menu;
      return (0, yR.useEffect)((() => {
        MW || (null === NW || void 0 === NW || NW.onClose(), (0, zR.s)())
      }), [MW, NW]), (0, yR.useEffect)((() => MW ? (0, AW.g)(zR.D, zR.e) : void 0), [MW]), (0, eW.jsx)(wW.c, {
        showing: MW,
        globallyUniqueKey: "clientGameMenu",
        children: null === NW || void 0 === NW ? void 0 : NW.content
      })
    }

    function TW(WW) {
      let {
        placement: RW = "bottom"
      } = WW;
      return (0, eW.jsx)("div", {
        id: `clientGameHud-${RW}`,
        style: {
          display: "contents"
        }
      })
    }

    function gR(WW) {
      let {
        children: RW,
        placement: MW = "bottom"
      } = WW;
      const [wW, CW] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        CW(document.getElementById(`clientGameHud-${MW}`))
      }), [MW]), wW ? (0, NW.createPortal)(RW, wW) : null
    }
  },
  8135: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(3578),
      CW = MW(3587);

    function zR(WW) {
      let {
        children: RW,
        showing: MW,
        globallyUniqueKey: zR,
        alwaysMountChildren: AW = !1,
        doGameplayStartStopOnShow: bR = !0
      } = WW;
      return (0, CW.d)(!0, MW, zR), (0, wW.c)(bR, MW), MW || AW ? RW : null
    }
  },
  7672: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => CW
    });
    let wW = null;
    const CW = function(WW) {
        const RW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wW = RW, () => {
          wW === RW && (wW = null)
        }
      },
      zR = () => {
        var WW;
        return null !== (WW = wW) && void 0 !== WW && WW.canCycle() ? wW.cycle : null
      }
  },
  34838: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => IW,
      D: () => gR,
      E: () => PW,
      c: () => zR,
      e: () => iR,
      i: () => YW,
      m: () => bR,
      q: () => tR,
      s: () => JW,
      w: () => BW
    });
    var wW = MW(27),
      CW = MW(33);
    const zR = "clientGameInventoryButtonsChanged",
      AW = new Map;

    function bR() {
      return [...AW.values()].sort(((WW, RW) => {
        var MW, wW;
        return (null !== (MW = WW.order) && void 0 !== MW ? MW : 0) - (null !== (wW = RW.order) && void 0 !== wW ? wW : 0)
      }))
    }
    let yR = null;

    function NW(WW) {
      yR = WW
    }
    let eW = !1;

    function BW(WW) {
      eW = !0;
      try {
        WW.onClick()
      } finally {
        eW = !1
      }
      WW.panel && "clientGame" === wW.b.get("openInGameMenuName") && NW(WW.id)
    }

    function tR() {
      return eW
    }

    function TW() {
      return bR().filter((WW => WW.panel && !WW.disabled))
    }

    function gR(WW) {
      const RW = TW(),
        MW = RW.findIndex((WW => WW.id === yR));
      return !(MW < 0 || RW.length < 2) && (BW(RW[(MW + WW + RW.length) % RW.length]), !0)
    }

    function iR() {
      return null !== yR && TW().length > 1
    }

    function YW() {
      NW(null)
    }

    function JW() {
      "inventory" !== wW.b.get("openInGameMenuName") && NW(null)
    }

    function PW() {
      const WW = yR;
      return NW(null), WW
    }

    function IW(WW) {
      return AW.set(WW.id, WW), CW.k.Sz(zR, bR(), !0), () => {
        AW.get(WW.id) === WW && (AW.delete(WW.id), CW.k.Sz(zR, bR()))
      }
    }
  },
  34830: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      e: () => YW,
      f: () => JW,
      g: () => tR,
      h: () => NW,
      j: () => iR,
      k: () => TW,
      l: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(1115),
      AW = MW(34838);
    const bR = "clientGameUiChanged";
    let yR = null;

    function NW() {
      return yR
    }

    function eW(WW, RW) {
      const MW = {
        content: WW,
        menu: RW
      };
      return yR = MW, CW.k.Sz(bR, yR, !0), () => {
        yR === MW && (yR = null, gR = !1, YW(), CW.k.Sz(bR, null))
      }
    }
    let BW = null;

    function tR() {
      return BW
    }

    function TW(WW) {
      return BW = WW, () => {
        BW === WW && (BW = null)
      }
    }
    let gR = !1;

    function iR() {
      const WW = wW.b.get("openInGameMenuName");
      "clientGame" !== WW && (gR = "inventory" === WW), (0, AW.q)() || (0, AW.i)(), (0, zR.n)("InGameMenu"), wW.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function YW() {
      PW(!1)
    }

    function JW() {
      PW(gR)
    }

    function PW(WW) {
      "clientGame" === wW.b.get("openInGameMenuName") && wW.b.set({
        openInGameMenuName: WW ? "inventory" : null
      }), WW || (0, AW.i)(), gR = !1
    }
  },
  37276: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => WR
    });
    const wW = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var CW = MW(75),
      zR = MW(36092),
      AW = MW(33),
      bR = MW(284);
    const yR = ["Basic", "Rare", "Super"];

    function NW(WW, RW) {
      return `${"Basic"===RW?"":`${RW} `}${"Simple"===WW?"":`${WW} `}Lucky Block`
    }
    const eW = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((WW => yR.map((RW => [NW(WW, RW), {
      category: WW,
      rarity: RW
    }])))));
    eW.keys();

    function BW(WW) {
      return eW.get(WW)
    }
    const tR = "Obsidian",
      TW = ["Cobweb"],
      gR = [...["Red", "Blue", "Green", "Yellow"].map((WW => `${(0,bR.Y)(WW)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", tR, ...TW];

    function iR(WW) {
      return gR.includes(WW)
    }
    var YW = MW(564);

    function JW(WW, RW) {
      const MW = BW(WW);
      if (MW) {
        const WW = BW(RW);
        if (!WW) return;
        const wW = yR.length - 1 - yR.indexOf(WW.rarity);
        return (WW.category === MW.category ? 0 : 1) * yR.length + wW
      }
      if (!iR(WW)) return;
      if (RW === WW) return 0;
      const wW = WW => iR(WW) && !TW.includes(WW) && WW !== tR;
      return wW(WW) && wW(RW) ? 1 : void 0
    }
    const PW = [...Array.from({
      length: YW.v - YW.s
    }, ((WW, RW) => YW.s + RW)), ...Array.from({
      length: YW.s
    }, ((WW, RW) => RW))];
    class IW {
      constructor(WW) {
        this.inventory = WW, this.pending = new Map, this.lastSwap = null
      }
      onPlace(WW) {
        var RW;
        const MW = this.inventory.selectedSlot(),
          wW = this.inventory.itemAt(MW);
        (null === wW || void 0 === wW ? void 0 : wW.name) === WW && (null !== (RW = wW.amount) && void 0 !== RW ? RW : 1) <= 1 && oW(WW) && this.pending.set(MW, WW)
      }
      onDrop(WW, RW) {
        RW < YW.s && null === this.inventory.itemAt(RW) && oW(WW) && this.refill(RW, WW)
      }
      WR() {
        const WW = [...this.pending];
        this.pending.clear();
        for (const [RW, MW] of WW) null === this.inventory.itemAt(RW) && this.refill(RW, MW)
      }
      onInventorySynced() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        const RW = this.lastSwap;
        RW && (WW - RW.at >= 2e3 ? this.lastSwap = null : lW(this.inventory.itemAt(RW.source), RW.moved) && !lW(this.inventory.itemAt(RW.slot), RW.moved) && this.inventory.redoSwapLocally(RW.slot, RW.source))
      }
      refill(WW, RW) {
        const MW = function(WW, RW, MW, wW) {
            let CW, zR = 1 / 0;
            for (const AW of PW) {
              if (AW === RW) continue;
              const bR = wW(AW);
              if (!bR || AW < YW.s && RW !== MW) continue;
              const yR = JW(WW, bR.name);
              void 0 !== yR && yR < zR && (CW = AW, zR = yR)
            }
            return CW
          }(RW, WW, this.inventory.selectedSlot(), this.inventory.itemAt),
          wW = void 0 === MW ? null : this.inventory.itemAt(MW);
        void 0 !== MW && wW && (this.lastSwap = {
          slot: WW,
          source: MW,
          moved: {
            name: wW.name,
            amount: wW.amount
          },
          at: Date.now()
        }, this.inventory.swap(WW, MW))
      }
    }

    function oW(WW) {
      return !!BW(WW) || iR(WW)
    }

    function lW(WW, RW) {
      return (null === WW || void 0 === WW ? void 0 : WW.name) === RW.name && WW.amount === RW.amount
    }
    var FW = MW(34830),
      fW = MW(93),
      QW = MW(897),
      rR = MW.n(QW);
    const cR = "Lucky Clover",
      XW = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function jR(WW) {
      return XW[WW][0]
    }

    function kR(WW) {
      return yR.filter((RW => WW >= jR(RW)))
    }
    var aR = MW(232),
      sW = MW(1953),
      dW = MW(27),
      pW = MW(1996),
      hW = MW(1537),
      UW = MW(34827),
      EW = MW(904);
    var VW = MW(940);
    const mR = {
      Basic: bR.G.whiteUiText,
      Rare: bR.G.goldUiText,
      Super: bR.G.cyanUiText
    };
    let xR = 1;

    function vR() {
      const WW = (0, sW.h)("currencyAmounts"),
        RW = null === WW || void 0 === WW ? void 0 : WW.Clovers;
      return !RW || RW.hidden ? null : (0, VW.jsx)(UW.g, {
        children: (0, VW.jsx)(KW, {
          amount: RW.amount
        })
      })
    }

    function KW(WW) {
      var RW, MW, wW;
      let {
        amount: zR
      } = WW;
      const {
        openEverythingMenuName: AW
      } = (0, dW.i)(["openEverythingMenuName"]), NW = (0, pW.e)(), [eW, BW] = (0, CW.useState)(zR), [tR, TW] = (0, CW.useState)(null), [gR, iR] = (0, CW.useState)(0), [YW, JW] = (0, CW.useState)([]), PW = (0, CW.useRef)(zR), IW = (0, CW.useRef)(!1), oW = (0, CW.useRef)(null), lW = AW === aR.t.SHOP;
      (0, CW.useEffect)((() => {
        const WW = PW.current;
        if (PW.current = zR, zR <= WW || lW) return void BW(zR);
        const RW = NW || YW.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (MW = zR - WW, wW = !IW.current, MW <= 0 || !wW && MW < 40 ? 0 : Math.min(4, Math.ceil(MW / 30)));
        var MW, wW;
        if (IW.current = !0, kR(zR).length > kR(WW).length && iR(xR++), RW > 0) {
          const WW = [];
          for (let MW = 0; MW < RW; MW++) WW.push({
            id: xR++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * MW
          });
          JW((RW => [...RW, ...WW]))
        }
        const CW = RW > 0 ? 600 : 0;
        TW({
          id: xR++,
          delayMs: CW
        });
        const AW = performance.now() + CW;
        let yR = 0;
        const eW = RW => {
          const MW = bR.d.clamp((RW - AW) / 600, 0, 1);
          BW(Math.round(WW + (zR - WW) * MW)), MW < 1 && (yR = requestAnimationFrame(eW))
        };
        return yR = requestAnimationFrame(eW), () => {
          cancelAnimationFrame(yR)
        }
      }), [zR, lW]);
      const FW = function(WW) {
          var RW;
          const MW = null !== (RW = yR.find((RW => WW < jR(RW)))) && void 0 !== RW ? RW : "Super";
          return {
            rarity: MW,
            progress: bR.d.clamp(WW / jR(MW), 0, 1)
          }
        }(eW),
        QW = kR(eW).at(-1);
      return (0, VW.jsxs)(VW.Fragment, {
        children: [(0, VW.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, VW.jsxs)("div", {
            className: rR()("LuckyCloverWallet", {
              Capped: QW && "Basic" !== QW
            }),
            style: QW && {
              "--luckyTierColour": mR[QW]
            },
            children: [(0, VW.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${FW.progress})`
              }
            }), gR > 0 && (0, VW.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(RW=null===tR||void 0===tR?void 0:tR.delayMs)&&void 0!==RW?RW:0}ms`
              }
            }, gR), (0, VW.jsx)("div", {
              ref: oW,
              className: rR()("LuckyCloverWalletIcon", tR && "Bounce"),
              style: {
                animationDelay: `${null!==(wW=null===tR||void 0===tR?void 0:tR.delayMs)&&void 0!==wW?wW:0}ms`
              },
              children: (0, VW.jsx)(hW.c, {
                itemName: cR,
                amount: 0
              })
            }, null !== (MW = null === tR || void 0 === tR ? void 0 : tR.id) && void 0 !== MW ? MW : 0), (0, VW.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: eW
            }), QW && (0, VW.jsx)(EW.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, fW.createPortal)(YW.map((WW => (0, VW.jsx)(uW, {
          flyer: WW,
          target: oW,
          onDone: () => {
            JW((RW => RW.filter((RW => RW.id !== WW.id))))
          }
        }, WW.id))), document.body)]
      })
    }

    function uW(WW) {
      let {
        flyer: RW,
        target: MW,
        onDone: wW
      } = WW;
      const zR = (0, CW.useRef)(null);
      return (0, CW.useEffect)((() => {
        var WW;
        const CW = null === (WW = MW.current) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
        if (!zR.current || !CW) return void wW();
        const {
          x: AW,
          y: bR
        } = RW, yR = AW + 140 * (Math.random() - .5), NW = bR - 30 - 40 * Math.random(), eW = zR.current.animate([{
          transform: `translate(${AW}px, ${bR}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${yR}px, ${NW}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${CW.left}px, ${CW.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: RW.delayMs,
          fill: "backwards"
        });
        return eW.onfinish = wW, () => {
          eW.cancel()
        }
      }), []), (0, VW.jsx)("div", {
        ref: zR,
        className: "LuckyCloverFlying",
        children: (0, VW.jsx)(hW.c, {
          itemName: cR,
          amount: 0
        })
      })
    }
    const OW = "luckyGearUpgradeView",
      nW = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function GW(WW) {
      var RW;
      return null !== (RW = nW[WW.split(" ")[0]]) && void 0 !== RW ? RW : "#e07bff"
    }
    class LW {
      constructor(WW, RW) {
        this.selectedSlot = WW, this.itemAt = RW, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      jC(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [MW, wW, CW] of WW) this.rings.push({
          id: this.nextId++,
          slot: MW,
          colour: GW(CW),
          until: RW + 1200
        }), MW !== this.selectedSlot() && this.unseen.set(MW, {
          from: wW,
          to: CW
        });
        this.Sz()
      }
      WR() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const RW = this.rings.filter((RW => RW.until > WW));
        let MW = RW.length !== this.rings.length;
        this.rings = RW;
        for (const [wW, {
            from: CW,
            to: zR
          }] of this.unseen) {
          const WW = this.itemAt(wW);
          (wW === this.selectedSlot() || WW !== zR && WW !== CW) && (this.unseen.delete(wW), MW = !0)
        }
        MW && this.Sz()
      }
      Sz() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, AW.k.Sz(OW, this.view)
      }
    }
    var HW = MW(1253);

    function DW(WW) {
      return document.querySelector(`.HotBar [data-inven-idx="${WW}"]`)
    }

    function qR(WW) {
      let {
        ring: RW
      } = WW;
      const [MW, wW] = (0, CW.useState)(null);
      return (0, CW.useLayoutEffect)((() => {
        var WW, MW;
        wW(null !== (WW = null === (MW = DW(RW.slot)) || void 0 === MW ? void 0 : MW.getBoundingClientRect()) && void 0 !== WW ? WW : null)
      }), [RW]), MW ? (0, VW.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: MW.left,
          top: MW.top,
          width: MW.width,
          height: MW.height,
          "--ringColour": RW.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function ZW(WW) {
      let {
        slot: RW
      } = WW;
      const [MW, wW] = (0, CW.useState)(null);
      return (0, CW.useLayoutEffect)((() => {
        const WW = () => {
          wW(DW(RW))
        };
        WW();
        const MW = new MutationObserver(WW),
          CW = document.querySelector(".BottomMiddleElements");
        return CW && MW.observe(CW, {
          childList: !0,
          subtree: !0
        }), () => {
          MW.disconnect()
        }
      }), [RW]), MW ? (0, fW.createPortal)((0, VW.jsx)("div", {
        className: "LuckyGearUnseen"
      }), MW) : null
    }

    function SW(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, HW.i)(OW, RW.getView());
      return (0, VW.jsxs)(VW.Fragment, {
        children: [MW.rings.map((WW => (0, VW.jsx)(qR, {
          ring: WW
        }, WW.id))), MW.unseenSlots.map((WW => (0, VW.jsx)(ZW, {
          slot: WW
        }, WW)))]
      })
    }
    const WR = function(WW, RW, MW, bR) {
      let yR, {
          localPlayerId: NW
        } = bR,
        eW = [],
        BW = null;
      const tR = new IW({
          itemAt: WW => yR.getItemSlot(NW, WW),
          selectedSlot: () => yR.getSelectedInventorySlotI(NW),
          swap: (WW, RW) => {
            yR.swapInventorySlots(WW, RW)
          },
          redoSwapLocally: (WW, RW) => {
            yR.redoInventorySwapLocally(WW, RW)
          }
        }),
        TW = new LW((() => yR.getSelectedInventorySlotI(NW)), (WW => {
          var RW;
          return null === (RW = yR.getItemSlot(NW, WW)) || void 0 === RW ? void 0 : RW.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, zR.d)()
        },
        onCreate: WW => {
          yR = WW, eW = ["syncedInvenFromServer", "chestRefreshedFromServer"].map((WW => AW.k.subscribe(WW, (() => {
            tR.onInventorySynced()
          })))), BW = (0, FW.l)((0, CW.createElement)(CW.Fragment, null, (0, CW.createElement)(vR), (0, CW.createElement)(SW, {
            controller: TW
          })))
        },
        onClose: () => {
          var WW;
          for (const RW of eW) AW.k.unsubscribe(RW);
          eW = [], null === (WW = BW) || void 0 === WW || WW()
        },
        WR: () => {
          tR.WR(), TW.WR()
        },
        onReceivedMessageFromServer: (WW, RW) => {
          "luckyGearUpgrade" === WW && TW.jC(RW)
        },
        onPlayerChangeBlock: (WW, RW, MW, wW, CW, zR) => {
          "Air" !== zR && tR.onPlace(zR)
        },
        onPlayerDropItem: (WW, RW, MW, wW) => {
          tR.onDrop(RW, wW)
        },
        onPlayerAltAction: (WW, RW, MW, CW, zR, AW) => {
          if (!AW || "Mesh" !== yR.getEntityType(AW)) return;
          const bR = yR.getEntityName(AW),
            NW = Object.values(wW).find((WW => WW.name === bR));
          NW && yR.openShop(WW, !1, NW.shopTab)
        }
      }
    }
  },
  36092: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR
    });
    var wW = MW(284),
      CW = MW(35105),
      zR = MW(3520);
    const AW = ["Leaf Bed", "_Leaf Bed Head", ...wW.Fc.flatMap((WW => [`${WW} Bed`, `_${WW} Bed Head`, `${WW} Strongbed`, `_${WW} Strongbed Head`]))];

    function bR() {
      let WW;
      return {
        onCreate(RW) {
          WW = RW
        },
        altVetoBlocks: AW,
        onPlayerAttemptAltAction(RW, MW, wW, AW, bR, yR) {
          var NW;
          if ((0, CW.c)(WW.getMetaInfo(bR).rootName) && !WW.isEntityInteractable(yR) && (0, zR.e)(null === (NW = WW.HbW(RW)) || void 0 === NW ? void 0 : NW.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35105: (WW, RW, MW) => {
    function wW(WW) {
      return WW.includes("Leaf Bed")
    }

    function CW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !wW(WW)
    }

    function zR(WW) {
      return WW.includes(" Strongbed")
    }

    function AW(WW) {
      return wW(WW) || CW(WW) || zR(WW)
    }
    MW.d(RW, {
      c: () => AW,
      e: () => wW,
      h: () => zR,
      i: () => CW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);