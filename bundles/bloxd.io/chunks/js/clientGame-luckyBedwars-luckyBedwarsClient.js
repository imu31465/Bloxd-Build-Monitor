export const id = 19;
export const ids = [19];
export const modules = {
  36677: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sB,
      e: () => JB,
      g: () => rB,
      h: () => pB
    });
    var QB = zB(34242),
      nB = zB(36682),
      dB = zB(36687),
      IB = zB(8722),
      NB = zB(1471),
      uB = zB(62),
      UB = zB(83),
      aB = zB(1148);

    function pB() {
      var BB;
      return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
        children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function rB(BB) {
      var jB;
      let {
        show: zB
      } = BB;
      (0, NB.h)(nB.c, (0, nB.n)());
      const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
      return (0, uB.useEffect)((() => {
        var BB;
        zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
      }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
        showing: zB,
        globallyUniqueKey: "clientGameMenu",
        children: null === UB || void 0 === UB ? void 0 : UB.content
      })
    }

    function sB(BB) {
      let {
        placement: jB = "bottom"
      } = BB;
      return (0, aB.jsx)("div", {
        id: `clientGameHud-${jB}`,
        style: {
          display: "contents"
        }
      })
    }

    function JB(BB) {
      let {
        children: jB,
        placement: zB = "bottom"
      } = BB;
      const [QB, nB] = (0, uB.useState)(null);
      return (0, uB.useEffect)((() => {
        nB(document.getElementById(`clientGameHud-${zB}`))
      }), [zB]), QB ? (0, UB.createPortal)(jB, QB) : null
    }
  },
  34242: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(4657),
      nB = zB(4664);

    function dB(BB) {
      let {
        children: jB,
        showing: zB,
        globallyUniqueKey: dB,
        alwaysMountChildren: IB = !1,
        doGameplayStartStopOnShow: NB = !0,
        keepsMovement: uB = !1
      } = BB;
      return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
    }
  },
  8722: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    let QB = null;
    const nB = function(BB) {
        const jB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QB = jB, () => {
          QB === jB && (QB = null)
        }
      },
      dB = () => {
        var BB;
        return null !== (BB = QB) && void 0 !== BB && BB.canCycle() ? QB.cycle : null
      }
  },
  36687: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => GB,
      e: () => dB,
      f: () => mB,
      i: () => yB,
      l: () => NB,
      m: () => rB,
      n: () => kB,
      r: () => pB,
      t: () => LB,
      w: () => JB
    });
    var QB = zB(28),
      nB = zB(31);
    const dB = "clientGameInventoryButtonsChanged",
      IB = new Map;

    function NB() {
      return [...IB.values()].sort(((BB, jB) => {
        var zB, QB;
        return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
      }))
    }
    let uB = null;

    function UB(BB) {
      uB = BB
    }
    let aB = !1;

    function pB(BB) {
      aB = !0;
      try {
        BB.onClick()
      } finally {
        aB = !1
      }
      BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
    }

    function rB() {
      return aB
    }

    function sB() {
      return NB().filter((BB => BB.panel && !BB.disabled))
    }

    function JB(BB) {
      const jB = sB(),
        zB = jB.findIndex((BB => BB.id === uB));
      return !(zB < 0 || jB.length < 2) && (pB(jB[(zB + BB + jB.length) % jB.length]), !0)
    }

    function mB() {
      return null !== uB && sB().length > 1
    }

    function yB() {
      UB(null)
    }

    function kB() {
      "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
    }

    function GB() {
      const BB = uB;
      return UB(null), BB
    }

    function LB(BB) {
      return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
        IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
      }
    }
  },
  36682: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      d: () => yB,
      f: () => kB,
      j: () => rB,
      n: () => UB,
      o: () => mB,
      r: () => sB,
      t: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(36687);
    const NB = "clientGameUiChanged";
    let uB = null;

    function UB() {
      return uB
    }

    function aB(BB, jB) {
      const zB = {
        content: BB,
        menu: jB
      };
      return uB = zB, nB.n.Ly(NB, uB, !0), () => {
        uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
      }
    }
    let pB = null;

    function rB() {
      return pB
    }

    function sB(BB) {
      return pB = BB, () => {
        pB === BB && (pB = null)
      }
    }
    let JB = !1;

    function mB() {
      const BB = QB.c.get("openInGameMenuName");
      "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yB() {
      GB(!1)
    }

    function kB() {
      GB(JB)
    }

    function GB(BB) {
      "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, IB.i)(), JB = !1
    }
  },
  39521: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => OB
    });
    const QB = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var nB = zB(62),
      dB = zB(38120),
      IB = zB(376);
    const NB = ["Basic", "Rare", "Super"];

    function uB(BB, jB) {
      return `${"Basic"===jB?"":`${jB} `}${"Simple"===BB?"":`${BB} `}Lucky Block`
    }
    const UB = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((BB => NB.map((jB => [uB(BB, jB), {
      category: BB,
      rarity: jB
    }])))));
    UB.keys();

    function aB(BB) {
      return UB.get(BB)
    }
    const pB = "Obsidian",
      rB = ["Cobweb"],
      sB = [...["Red", "Blue", "Green", "Yellow"].map((BB => `${(0,IB.Y)(BB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", pB, ...rB];

    function JB(BB) {
      return sB.includes(BB)
    }
    var mB = zB(658);

    function yB(BB, jB) {
      const zB = aB(BB);
      if (zB) {
        const BB = aB(jB);
        if (!BB) return;
        const QB = NB.length - 1 - NB.indexOf(BB.rarity);
        return (BB.category === zB.category ? 0 : 1) * NB.length + QB
      }
      if (!JB(BB)) return;
      if (jB === BB) return 0;
      const QB = BB => JB(BB) && !rB.includes(BB) && BB !== pB;
      return QB(BB) && QB(jB) ? 1 : void 0
    }
    const kB = [...Array.from({
      length: mB.o - mB.n
    }, ((BB, jB) => mB.n + jB)), ...Array.from({
      length: mB.n
    }, ((BB, jB) => jB))];
    class GB {
      constructor(BB) {
        this.inventory = BB, this.pending = new Map
      }
      onPlace(BB) {
        var jB;
        const zB = this.inventory.selectedSlot(),
          QB = this.inventory.itemAt(zB);
        (null === QB || void 0 === QB ? void 0 : QB.name) === BB && (null !== (jB = QB.amount) && void 0 !== jB ? jB : 1) <= 1 && LB(BB) && this.pending.set(zB, BB)
      }
      onDrop(BB, jB) {
        jB < mB.n && null === this.inventory.itemAt(jB) && LB(BB) && this.refill(jB, BB)
      }
      vp() {
        const BB = [...this.pending];
        this.pending.clear();
        for (const [jB, zB] of BB) null === this.inventory.itemAt(jB) && this.refill(jB, zB)
      }
      refill(BB, jB) {
        const zB = function(BB, jB, zB, QB) {
          let nB, dB = 1 / 0;
          for (const IB of kB) {
            if (IB === jB) continue;
            const NB = QB(IB);
            if (!NB || IB < mB.n && jB !== zB) continue;
            const uB = yB(BB, NB.name);
            void 0 !== uB && uB < dB && (nB = IB, dB = uB)
          }
          return nB
        }(jB, BB, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== zB && this.inventory.swap(BB, zB)
      }
    }

    function LB(BB) {
      return !!aB(BB) || JB(BB)
    }
    var gB = zB(36682),
      tB = zB(83),
      SB = zB(1091),
      MB = zB.n(SB);
    const EB = "Lucky Clover",
      iB = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function qB(BB) {
      return iB[BB][0]
    }

    function fB(BB) {
      return NB.filter((jB => BB >= qB(jB)))
    }
    var oB = zB(363),
      HB = zB(2516),
      DB = zB(28),
      FB = zB(2690),
      YB = zB(1971),
      VB = zB(36677),
      hB = zB(1108);
    var XB = zB(1148);
    const ZB = {
      Basic: IB.E.whiteUiText,
      Rare: IB.E.goldUiText,
      Super: IB.E.cyanUiText
    };
    let AB = 1;

    function TB() {
      const BB = (0, HB.i)("currencyAmounts"),
        jB = null === BB || void 0 === BB ? void 0 : BB.Clovers;
      return !jB || jB.hidden ? null : (0, XB.jsx)(VB.e, {
        children: (0, XB.jsx)(PB, {
          amount: jB.amount
        })
      })
    }

    function PB(BB) {
      var jB, zB, QB;
      let {
        amount: dB
      } = BB;
      const {
        openEverythingMenuName: uB
      } = (0, DB.m)(["openEverythingMenuName"]), UB = (0, FB.c)(), [aB, pB] = (0, nB.useState)(dB), [rB, sB] = (0, nB.useState)(null), [JB, mB] = (0, nB.useState)(0), [yB, kB] = (0, nB.useState)([]), GB = (0, nB.useRef)(dB), LB = (0, nB.useRef)(!1), gB = (0, nB.useRef)(null), SB = uB === oB.o.SHOP;
      (0, nB.useEffect)((() => {
        const BB = GB.current;
        if (GB.current = dB, dB <= BB || SB) return void pB(dB);
        const jB = UB || yB.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (zB = dB - BB, QB = !LB.current, zB <= 0 || !QB && zB < 40 ? 0 : Math.min(4, Math.ceil(zB / 30)));
        var zB, QB;
        if (LB.current = !0, fB(dB).length > fB(BB).length && mB(AB++), jB > 0) {
          const BB = [];
          for (let zB = 0; zB < jB; zB++) BB.push({
            id: AB++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * zB
          });
          kB((jB => [...jB, ...BB]))
        }
        const nB = jB > 0 ? 600 : 0;
        sB({
          id: AB++,
          delayMs: nB
        });
        const NB = performance.now() + nB;
        let uB = 0;
        const aB = jB => {
          const zB = IB.b.clamp((jB - NB) / 600, 0, 1);
          pB(Math.round(BB + (dB - BB) * zB)), zB < 1 && (uB = requestAnimationFrame(aB))
        };
        return uB = requestAnimationFrame(aB), () => {
          cancelAnimationFrame(uB)
        }
      }), [dB, SB]);
      const iB = function(BB) {
          var jB;
          const zB = null !== (jB = NB.find((jB => BB < qB(jB)))) && void 0 !== jB ? jB : "Super";
          return {
            rarity: zB,
            progress: IB.b.clamp(BB / qB(zB), 0, 1)
          }
        }(aB),
        HB = fB(aB).at(-1);
      return (0, XB.jsxs)(XB.Fragment, {
        children: [(0, XB.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, XB.jsxs)("div", {
            className: MB()("LuckyCloverWallet", {
              Capped: HB && "Basic" !== HB
            }),
            style: HB && {
              "--luckyTierColour": ZB[HB]
            },
            children: [(0, XB.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${iB.progress})`
              }
            }), JB > 0 && (0, XB.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(jB=null===rB||void 0===rB?void 0:rB.delayMs)&&void 0!==jB?jB:0}ms`
              }
            }, JB), (0, XB.jsx)("div", {
              ref: gB,
              className: MB()("LuckyCloverWalletIcon", rB && "Bounce"),
              style: {
                animationDelay: `${null!==(QB=null===rB||void 0===rB?void 0:rB.delayMs)&&void 0!==QB?QB:0}ms`
              },
              children: (0, XB.jsx)(YB.c, {
                itemName: EB,
                amount: 0
              })
            }, null !== (zB = null === rB || void 0 === rB ? void 0 : rB.id) && void 0 !== zB ? zB : 0), (0, XB.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: aB
            }), HB && (0, XB.jsx)(hB.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, tB.createPortal)(yB.map((BB => (0, XB.jsx)(WB, {
          flyer: BB,
          target: gB,
          onDone: () => {
            kB((jB => jB.filter((jB => jB.id !== BB.id))))
          }
        }, BB.id))), document.body)]
      })
    }

    function WB(BB) {
      let {
        flyer: jB,
        target: zB,
        onDone: QB
      } = BB;
      const dB = (0, nB.useRef)(null);
      return (0, nB.useEffect)((() => {
        var BB;
        const nB = null === (BB = zB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (!dB.current || !nB) return void QB();
        const {
          x: IB,
          y: NB
        } = jB, uB = IB + 140 * (Math.random() - .5), UB = NB - 30 - 40 * Math.random(), aB = dB.current.animate([{
          transform: `translate(${IB}px, ${NB}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${uB}px, ${UB}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${nB.left}px, ${nB.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: jB.delayMs,
          fill: "backwards"
        });
        return aB.onfinish = QB, () => {
          aB.cancel()
        }
      }), []), (0, XB.jsx)("div", {
        ref: dB,
        className: "LuckyCloverFlying",
        children: (0, XB.jsx)(YB.c, {
          itemName: EB,
          amount: 0
        })
      })
    }
    var eB = zB(31);
    const lB = "luckyGearUpgradeView",
      wB = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function xB(BB) {
      var jB;
      return null !== (jB = wB[BB.split(" ")[0]]) && void 0 !== jB ? jB : "#e07bff"
    }
    class KB {
      constructor(BB, jB) {
        this.selectedSlot = BB, this.itemAt = jB, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      VJ(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [zB, QB, nB] of BB) this.rings.push({
          id: this.nextId++,
          slot: zB,
          colour: xB(nB),
          until: jB + 1200
        }), zB !== this.selectedSlot() && this.unseen.set(zB, {
          from: QB,
          to: nB
        });
        this.Ly()
      }
      vp() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const jB = this.rings.filter((jB => jB.until > BB));
        let zB = jB.length !== this.rings.length;
        this.rings = jB;
        for (const [QB, {
            from: nB,
            to: dB
          }] of this.unseen) {
          const BB = this.itemAt(QB);
          (QB === this.selectedSlot() || BB !== dB && BB !== nB) && (this.unseen.delete(QB), zB = !0)
        }
        zB && this.Ly()
      }
      Ly() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, eB.n.Ly(lB, this.view)
      }
    }
    var CB = zB(1471);

    function cB(BB) {
      return document.querySelector(`.HotBar [data-inven-idx="${BB}"]`)
    }

    function bB(BB) {
      let {
        ring: jB
      } = BB;
      const [zB, QB] = (0, nB.useState)(null);
      return (0, nB.useLayoutEffect)((() => {
        var BB, zB;
        QB(null !== (BB = null === (zB = cB(jB.slot)) || void 0 === zB ? void 0 : zB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
      }), [jB]), zB ? (0, XB.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: zB.left,
          top: zB.top,
          width: zB.width,
          height: zB.height,
          "--ringColour": jB.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function vB(BB) {
      let {
        slot: jB
      } = BB;
      const [zB, QB] = (0, nB.useState)(null);
      return (0, nB.useLayoutEffect)((() => {
        const BB = () => {
          QB(cB(jB))
        };
        BB();
        const zB = new MutationObserver(BB),
          nB = document.querySelector(".BottomMiddleElements");
        return nB && zB.observe(nB, {
          childList: !0,
          subtree: !0
        }), () => {
          zB.disconnect()
        }
      }), [jB]), zB ? (0, tB.createPortal)((0, XB.jsx)("div", {
        className: "LuckyGearUnseen"
      }), zB) : null
    }

    function RB(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, CB.h)(lB, jB.getView());
      return (0, XB.jsxs)(XB.Fragment, {
        children: [zB.rings.map((BB => (0, XB.jsx)(bB, {
          ring: BB
        }, BB.id))), zB.unseenSlots.map((BB => (0, XB.jsx)(vB, {
          slot: BB
        }, BB)))]
      })
    }
    const OB = function(BB, jB, zB, IB) {
      let NB, {
          localPlayerId: uB
        } = IB,
        UB = null;
      const aB = new GB({
          itemAt: BB => NB.getItemSlot(uB, BB),
          selectedSlot: () => NB.getSelectedInventorySlotI(uB),
          swap: (BB, jB) => {
            NB.swapInventorySlots(BB, jB)
          }
        }),
        pB = new KB((() => NB.getSelectedInventorySlotI(uB)), (BB => {
          var jB;
          return null === (jB = NB.getItemSlot(uB, BB)) || void 0 === jB ? void 0 : jB.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, dB.b)()
        },
        onCreate: BB => {
          NB = BB, UB = (0, gB.t)((0, nB.createElement)(nB.Fragment, null, (0, nB.createElement)(TB), (0, nB.createElement)(RB, {
            controller: pB
          })))
        },
        onClose: () => {
          var BB;
          null === (BB = UB) || void 0 === BB || BB()
        },
        vp: () => {
          aB.vp(), pB.vp()
        },
        onReceivedMessageFromServer: (BB, jB) => {
          "luckyGearUpgrade" === BB && pB.VJ(jB)
        },
        onPlayerChangeBlock: (BB, jB, zB, QB, nB, dB) => {
          "Air" !== dB && aB.onPlace(dB)
        },
        onPlayerDropItem: (BB, jB, zB, QB) => {
          aB.onDrop(jB, QB)
        },
        onPlayerAltAction: (BB, jB, zB, nB, dB, IB) => {
          if (!IB || "Mesh" !== NB.getEntityType(IB)) return;
          const uB = NB.getEntityName(IB),
            UB = Object.values(QB).find((BB => BB.name === uB));
          UB && NB.openShop(BB, !1, UB.shopTab)
        }
      }
    }
  },
  38120: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB
    });
    var QB = zB(376),
      nB = zB(37002),
      dB = zB(4597);
    const IB = ["Leaf Bed", "_Leaf Bed Head", ...QB.Kc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function NB() {
      let BB;
      return {
        onCreate(jB) {
          BB = jB
        },
        altVetoBlocks: IB,
        onPlayerAttemptAltAction(jB, zB, QB, IB, NB, uB) {
          var UB;
          if ((0, nB.b)(BB.getMetaInfo(NB).rootName) && !BB.isEntityInteractable(uB) && (0, dB.c)(null === (UB = BB.ZjB(jB)) || void 0 === UB ? void 0 : UB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37002: (BB, jB, zB) => {
    function QB(BB) {
      return BB.includes("Leaf Bed")
    }

    function nB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !QB(BB)
    }

    function dB(BB) {
      return BB.includes(" Strongbed")
    }

    function IB(BB) {
      return QB(BB) || nB(BB) || dB(BB)
    }
    zB.d(jB, {
      b: () => IB,
      f: () => QB,
      h: () => dB,
      i: () => nB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);