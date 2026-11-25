export const id = 19;
export const ids = [19];
export const modules = {
  36613: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => FB,
      h: () => NB,
      l: () => zB,
      n: () => hB
    });
    var TB = ZB(34184),
      JB = ZB(36619),
      oB = ZB(36625),
      GB = ZB(8840),
      vB = ZB(1507),
      kB = ZB(63),
      cB = ZB(82),
      nB = ZB(1153);

    function hB() {
      var BB;
      return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
        children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var IB;
      let {
        show: ZB
      } = BB;
      (0, vB.h)(JB.d, (0, JB.q)());
      const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
      return (0, kB.useEffect)((() => {
        var BB;
        ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
      }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
        showing: ZB,
        globallyUniqueKey: "clientGameMenu",
        children: null === cB || void 0 === cB ? void 0 : cB.content
      })
    }

    function FB(BB) {
      let {
        placement: IB = "bottom"
      } = BB;
      return (0, nB.jsx)("div", {
        id: `clientGameHud-${IB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: IB,
        placement: ZB = "bottom"
      } = BB;
      const [TB, JB] = (0, kB.useState)(null);
      return (0, kB.useEffect)((() => {
        JB(document.getElementById(`clientGameHud-${ZB}`))
      }), [ZB]), TB ? (0, cB.createPortal)(IB, TB) : null
    }
  },
  34184: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(4721),
      JB = ZB(4728);

    function oB(BB) {
      let {
        children: IB,
        showing: ZB,
        globallyUniqueKey: oB,
        alwaysMountChildren: GB = !1,
        doGameplayStartStopOnShow: vB = !0,
        keepsMovement: kB = !1
      } = BB;
      return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
    }
  },
  8840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => JB
    });
    let TB = null;
    const JB = function(BB) {
        const IB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return TB = IB, () => {
          TB === IB && (TB = null)
        }
      },
      oB = () => {
        var BB;
        return null !== (BB = TB) && void 0 !== BB && BB.canCycle() ? TB.cycle : null
      }
  },
  36625: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => gB,
      g: () => qB,
      h: () => vB,
      l: () => zB,
      p: () => yB,
      q: () => hB,
      s: () => WB,
      t: () => NB,
      w: () => UB
    });
    var TB = ZB(20),
      JB = ZB(24);
    const oB = "clientGameInventoryButtonsChanged",
      GB = new Map;

    function vB() {
      return [...GB.values()].sort(((BB, IB) => {
        var ZB, TB;
        return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
      }))
    }
    let kB = null;

    function cB(BB) {
      kB = BB
    }
    let nB = !1;

    function hB(BB) {
      nB = !0;
      try {
        BB.onClick()
      } finally {
        nB = !1
      }
      BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
    }

    function zB() {
      return nB
    }

    function FB() {
      return vB().filter((BB => BB.panel && !BB.disabled))
    }

    function NB(BB) {
      const IB = FB(),
        ZB = IB.findIndex((BB => BB.id === kB));
      return !(ZB < 0 || IB.length < 2) && (hB(IB[(ZB + BB + IB.length) % IB.length]), !0)
    }

    function gB() {
      return null !== kB && FB().length > 1
    }

    function qB() {
      cB(null)
    }

    function yB() {
      "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
    }

    function UB() {
      const BB = kB;
      return cB(null), BB
    }

    function WB(BB) {
      return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
        GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
      }
    }
  },
  36619: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => qB,
      i: () => yB,
      m: () => zB,
      q: () => cB,
      t: () => gB,
      v: () => FB,
      x: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(36625);
    const vB = "clientGameUiChanged";
    let kB = null;

    function cB() {
      return kB
    }

    function nB(BB, IB) {
      const ZB = {
        content: BB,
        menu: IB
      };
      return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
        kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
      }
    }
    let hB = null;

    function zB() {
      return hB
    }

    function FB(BB) {
      return hB = BB, () => {
        hB === BB && (hB = null)
      }
    }
    let NB = !1;

    function gB() {
      const BB = TB.d.get("openInGameMenuName");
      "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qB() {
      UB(!1)
    }

    function yB() {
      UB(NB)
    }

    function UB(BB) {
      "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, GB.g)(), NB = !1
    }
  },
  39500: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => SB
    });
    const TB = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var JB = ZB(63),
      oB = ZB(38094),
      GB = ZB(360);
    const vB = ["Basic", "Rare", "Super"];

    function kB(BB, IB) {
      return `${"Basic"===IB?"":`${IB} `}${"Simple"===BB?"":`${BB} `}Lucky Block`
    }
    const cB = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((BB => vB.map((IB => [kB(BB, IB), {
      category: BB,
      rarity: IB
    }])))));
    cB.keys();

    function nB(BB) {
      return cB.get(BB)
    }
    const hB = "Obsidian",
      zB = ["Cobweb"],
      FB = [...["Red", "Blue", "Green", "Yellow"].map((BB => `${(0,GB.eb)(BB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", hB, ...zB];

    function NB(BB) {
      return FB.includes(BB)
    }
    var gB = ZB(665);

    function qB(BB, IB) {
      const ZB = nB(BB);
      if (ZB) {
        const BB = nB(IB);
        if (!BB) return;
        const TB = vB.length - 1 - vB.indexOf(BB.rarity);
        return (BB.category === ZB.category ? 0 : 1) * vB.length + TB
      }
      if (!NB(BB)) return;
      if (IB === BB) return 0;
      const TB = BB => NB(BB) && !zB.includes(BB) && BB !== hB;
      return TB(BB) && TB(IB) ? 1 : void 0
    }
    const yB = [...Array.from({
      length: gB.q - gB.m
    }, ((BB, IB) => gB.m + IB)), ...Array.from({
      length: gB.m
    }, ((BB, IB) => IB))];
    class UB {
      constructor(BB) {
        this.inventory = BB, this.pending = new Map
      }
      onPlace(BB) {
        var IB;
        const ZB = this.inventory.selectedSlot(),
          TB = this.inventory.itemAt(ZB);
        (null === TB || void 0 === TB ? void 0 : TB.name) === BB && (null !== (IB = TB.amount) && void 0 !== IB ? IB : 1) <= 1 && WB(BB) && this.pending.set(ZB, BB)
      }
      onDrop(BB, IB) {
        IB < gB.m && null === this.inventory.itemAt(IB) && WB(BB) && this.refill(IB, BB)
      }
      Iz() {
        const BB = [...this.pending];
        this.pending.clear();
        for (const [IB, ZB] of BB) null === this.inventory.itemAt(IB) && this.refill(IB, ZB)
      }
      refill(BB, IB) {
        const ZB = function(BB, IB, ZB, TB) {
          let JB, oB = 1 / 0;
          for (const GB of yB) {
            if (GB === IB) continue;
            const vB = TB(GB);
            if (!vB || GB < gB.m && IB !== ZB) continue;
            const kB = qB(BB, vB.name);
            void 0 !== kB && kB < oB && (JB = GB, oB = kB)
          }
          return JB
        }(IB, BB, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== ZB && this.inventory.swap(BB, ZB)
      }
    }

    function WB(BB) {
      return !!nB(BB) || NB(BB)
    }
    var dB = ZB(36619),
      CB = ZB(82),
      QB = ZB(1091),
      sB = ZB.n(QB);
    const wB = "Lucky Clover",
      OB = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function YB(BB) {
      return OB[BB][0]
    }

    function iB(BB) {
      return vB.filter((IB => BB >= YB(IB)))
    }
    var pB = ZB(342),
      aB = ZB(2526),
      HB = ZB(20),
      MB = ZB(2719),
      jB = ZB(1979),
      PB = ZB(36613),
      RB = ZB(1102);
    var rB = ZB(1153);
    const mB = {
      Basic: GB.P.whiteUiText,
      Rare: GB.P.goldUiText,
      Super: GB.P.cyanUiText
    };
    let XB = 1;

    function LB() {
      const BB = (0, aB.d)("currencyAmounts"),
        IB = null === BB || void 0 === BB ? void 0 : BB.Clovers;
      return !IB || IB.hidden ? null : (0, rB.jsx)(PB.h, {
        children: (0, rB.jsx)(eB, {
          amount: IB.amount
        })
      })
    }

    function eB(BB) {
      var IB, ZB, TB;
      let {
        amount: oB
      } = BB;
      const {
        openEverythingMenuName: kB
      } = (0, HB.o)(["openEverythingMenuName"]), cB = (0, MB.b)(), [nB, hB] = (0, JB.useState)(oB), [zB, FB] = (0, JB.useState)(null), [NB, gB] = (0, JB.useState)(0), [qB, yB] = (0, JB.useState)([]), UB = (0, JB.useRef)(oB), WB = (0, JB.useRef)(!1), dB = (0, JB.useRef)(null), QB = kB === pB.q.SHOP;
      (0, JB.useEffect)((() => {
        const BB = UB.current;
        if (UB.current = oB, oB <= BB || QB) return void hB(oB);
        const IB = cB || qB.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (ZB = oB - BB, TB = !WB.current, ZB <= 0 || !TB && ZB < 40 ? 0 : Math.min(4, Math.ceil(ZB / 30)));
        var ZB, TB;
        if (WB.current = !0, iB(oB).length > iB(BB).length && gB(XB++), IB > 0) {
          const BB = [];
          for (let ZB = 0; ZB < IB; ZB++) BB.push({
            id: XB++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * ZB
          });
          yB((IB => [...IB, ...BB]))
        }
        const JB = IB > 0 ? 600 : 0;
        FB({
          id: XB++,
          delayMs: JB
        });
        const vB = performance.now() + JB;
        let kB = 0;
        const nB = IB => {
          const ZB = GB.e.clamp((IB - vB) / 600, 0, 1);
          hB(Math.round(BB + (oB - BB) * ZB)), ZB < 1 && (kB = requestAnimationFrame(nB))
        };
        return kB = requestAnimationFrame(nB), () => {
          cancelAnimationFrame(kB)
        }
      }), [oB, QB]);
      const OB = function(BB) {
          var IB;
          const ZB = null !== (IB = vB.find((IB => BB < YB(IB)))) && void 0 !== IB ? IB : "Super";
          return {
            rarity: ZB,
            progress: GB.e.clamp(BB / YB(ZB), 0, 1)
          }
        }(nB),
        aB = iB(nB).at(-1);
      return (0, rB.jsxs)(rB.Fragment, {
        children: [(0, rB.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, rB.jsxs)("div", {
            className: sB()("LuckyCloverWallet", {
              Capped: aB && "Basic" !== aB
            }),
            style: aB && {
              "--luckyTierColour": mB[aB]
            },
            children: [(0, rB.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${OB.progress})`
              }
            }), NB > 0 && (0, rB.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(IB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==IB?IB:0}ms`
              }
            }, NB), (0, rB.jsx)("div", {
              ref: dB,
              className: sB()("LuckyCloverWalletIcon", zB && "Bounce"),
              style: {
                animationDelay: `${null!==(TB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==TB?TB:0}ms`
              },
              children: (0, rB.jsx)(jB.e, {
                itemName: wB,
                amount: 0
              })
            }, null !== (ZB = null === zB || void 0 === zB ? void 0 : zB.id) && void 0 !== ZB ? ZB : 0), (0, rB.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: nB
            }), aB && (0, rB.jsx)(RB.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, CB.createPortal)(qB.map((BB => (0, rB.jsx)(uB, {
          flyer: BB,
          target: dB,
          onDone: () => {
            yB((IB => IB.filter((IB => IB.id !== BB.id))))
          }
        }, BB.id))), document.body)]
      })
    }

    function uB(BB) {
      let {
        flyer: IB,
        target: ZB,
        onDone: TB
      } = BB;
      const oB = (0, JB.useRef)(null);
      return (0, JB.useEffect)((() => {
        var BB;
        const JB = null === (BB = ZB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (!oB.current || !JB) return void TB();
        const {
          x: GB,
          y: vB
        } = IB, kB = GB + 140 * (Math.random() - .5), cB = vB - 30 - 40 * Math.random(), nB = oB.current.animate([{
          transform: `translate(${GB}px, ${vB}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${kB}px, ${cB}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${JB.left}px, ${JB.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: IB.delayMs,
          fill: "backwards"
        });
        return nB.onfinish = TB, () => {
          nB.cancel()
        }
      }), []), (0, rB.jsx)("div", {
        ref: oB,
        className: "LuckyCloverFlying",
        children: (0, rB.jsx)(jB.e, {
          itemName: wB,
          amount: 0
        })
      })
    }
    var fB = ZB(24);
    const lB = "luckyGearUpgradeView",
      AB = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function tB(BB) {
      var IB;
      return null !== (IB = AB[BB.split(" ")[0]]) && void 0 !== IB ? IB : "#e07bff"
    }
    class bB {
      constructor(BB, IB) {
        this.selectedSlot = BB, this.itemAt = IB, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      sN(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [ZB, TB, JB] of BB) this.rings.push({
          id: this.nextId++,
          slot: ZB,
          colour: tB(JB),
          until: IB + 1200
        }), ZB !== this.selectedSlot() && this.unseen.set(ZB, {
          from: TB,
          to: JB
        });
        this.Gq()
      }
      Iz() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const IB = this.rings.filter((IB => IB.until > BB));
        let ZB = IB.length !== this.rings.length;
        this.rings = IB;
        for (const [TB, {
            from: JB,
            to: oB
          }] of this.unseen) {
          const BB = this.itemAt(TB);
          (TB === this.selectedSlot() || BB !== oB && BB !== JB) && (this.unseen.delete(TB), ZB = !0)
        }
        ZB && this.Gq()
      }
      Gq() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, fB.l.Gq(lB, this.view)
      }
    }
    var xB = ZB(1507);

    function EB(BB) {
      return document.querySelector(`.HotBar [data-inven-idx="${BB}"]`)
    }

    function DB(BB) {
      let {
        ring: IB
      } = BB;
      const [ZB, TB] = (0, JB.useState)(null);
      return (0, JB.useLayoutEffect)((() => {
        var BB, ZB;
        TB(null !== (BB = null === (ZB = EB(IB.slot)) || void 0 === ZB ? void 0 : ZB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
      }), [IB]), ZB ? (0, rB.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: ZB.left,
          top: ZB.top,
          width: ZB.width,
          height: ZB.height,
          "--ringColour": IB.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function KB(BB) {
      let {
        slot: IB
      } = BB;
      const [ZB, TB] = (0, JB.useState)(null);
      return (0, JB.useLayoutEffect)((() => {
        const BB = () => {
          TB(EB(IB))
        };
        BB();
        const ZB = new MutationObserver(BB),
          JB = document.querySelector(".BottomMiddleElements");
        return JB && ZB.observe(JB, {
          childList: !0,
          subtree: !0
        }), () => {
          ZB.disconnect()
        }
      }), [IB]), ZB ? (0, CB.createPortal)((0, rB.jsx)("div", {
        className: "LuckyGearUnseen"
      }), ZB) : null
    }

    function VB(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, xB.h)(lB, IB.getView());
      return (0, rB.jsxs)(rB.Fragment, {
        children: [ZB.rings.map((BB => (0, rB.jsx)(DB, {
          ring: BB
        }, BB.id))), ZB.unseenSlots.map((BB => (0, rB.jsx)(KB, {
          slot: BB
        }, BB)))]
      })
    }
    const SB = function(BB, IB, ZB, GB) {
      let vB, {
          localPlayerId: kB
        } = GB,
        cB = null;
      const nB = new UB({
          itemAt: BB => vB.getItemSlot(kB, BB),
          selectedSlot: () => vB.getSelectedInventorySlotI(kB),
          swap: (BB, IB) => {
            vB.swapInventorySlots(BB, IB)
          }
        }),
        hB = new bB((() => vB.getSelectedInventorySlotI(kB)), (BB => {
          var IB;
          return null === (IB = vB.getItemSlot(kB, BB)) || void 0 === IB ? void 0 : IB.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, oB.d)()
        },
        onCreate: BB => {
          vB = BB, cB = (0, dB.x)((0, JB.createElement)(JB.Fragment, null, (0, JB.createElement)(LB), (0, JB.createElement)(VB, {
            controller: hB
          })))
        },
        onClose: () => {
          var BB;
          null === (BB = cB) || void 0 === BB || BB()
        },
        Iz: () => {
          nB.Iz(), hB.Iz()
        },
        onReceivedMessageFromServer: (BB, IB) => {
          "luckyGearUpgrade" === BB && hB.sN(IB)
        },
        onPlayerChangeBlock: (BB, IB, ZB, TB, JB, oB) => {
          "Air" !== oB && nB.onPlace(oB)
        },
        onPlayerDropItem: (BB, IB, ZB, TB) => {
          nB.onDrop(IB, TB)
        },
        onPlayerAltAction: (BB, IB, ZB, JB, oB, GB) => {
          if (!GB || "Mesh" !== vB.getEntityType(GB)) return;
          const kB = vB.getEntityName(GB),
            cB = Object.values(TB).find((BB => BB.name === kB));
          cB && vB.openShop(BB, !1, cB.shopTab)
        }
      }
    }
  },
  38094: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB
    });
    var TB = ZB(360),
      JB = ZB(36964),
      oB = ZB(4665);
    const GB = ["Leaf Bed", "_Leaf Bed Head", ...TB.Kc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function vB() {
      let BB;
      return {
        onCreate(IB) {
          BB = IB
        },
        altVetoBlocks: GB,
        onPlayerAttemptAltAction(IB, ZB, TB, GB, vB, kB) {
          var cB;
          if ((0, JB.d)(BB.getMetaInfo(vB).rootName) && !BB.isEntityInteractable(kB) && (0, oB.f)(null === (cB = BB.FZB(IB)) || void 0 === cB ? void 0 : cB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36964: (BB, IB, ZB) => {
    function TB(BB) {
      return BB.includes("Leaf Bed")
    }

    function JB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !TB(BB)
    }

    function oB(BB) {
      return BB.includes(" Strongbed")
    }

    function GB(BB) {
      return TB(BB) || JB(BB) || oB(BB)
    }
    ZB.d(IB, {
      d: () => GB,
      h: () => TB,
      i: () => oB,
      k: () => JB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);