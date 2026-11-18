export const id = 19;
export const ids = [19];
export const modules = {
  35589: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      e: () => DB,
      h: () => LB,
      l: () => kB
    });
    var VB = dB(8570),
      yB = dB(35595),
      pB = dB(35601),
      lB = dB(8103),
      JB = dB(1317),
      YB = dB(62),
      gB = dB(72),
      oB = dB(980);

    function kB() {
      var BB;
      return (0, JB.f)(yB.c, (0, yB.k)()), (0, oB.jsx)(oB.Fragment, {
        children: null === (BB = (0, yB.k)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function LB(BB) {
      var TB;
      let {
        show: dB
      } = BB;
      (0, JB.f)(yB.c, (0, yB.k)());
      const gB = null === (TB = (0, yB.k)()) || void 0 === TB ? void 0 : TB.menu;
      return (0, YB.useEffect)((() => {
        var BB;
        dB || (null === gB || void 0 === gB || null === (BB = gB.onClose) || void 0 === BB || BB.call(gB), (0, pB.r)())
      }), [dB, gB]), (0, YB.useEffect)((() => dB ? (0, lB.c)(pB.x, pB.e) : void 0), [dB]), (0, oB.jsx)(VB.d, {
        showing: dB,
        globallyUniqueKey: "clientGameMenu",
        children: null === gB || void 0 === gB ? void 0 : gB.content
      })
    }

    function OB(BB) {
      let {
        placement: TB = "bottom"
      } = BB;
      return (0, oB.jsx)("div", {
        id: `clientGameHud-${TB}`,
        style: {
          display: "contents"
        }
      })
    }

    function DB(BB) {
      let {
        children: TB,
        placement: dB = "bottom"
      } = BB;
      const [VB, yB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        yB(document.getElementById(`clientGameHud-${dB}`))
      }), [dB]), VB ? (0, gB.createPortal)(TB, VB) : null
    }
  },
  8570: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(3948),
      yB = dB(3951);

    function pB(BB) {
      let {
        children: TB,
        showing: dB,
        globallyUniqueKey: pB,
        alwaysMountChildren: lB = !1,
        doGameplayStartStopOnShow: JB = !0,
        keepsMovement: YB = !1
      } = BB;
      return (0, yB.d)(!0, dB, pB, YB), (0, VB.e)(JB, dB), dB || lB ? TB : null
    }
  },
  8103: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => yB
    });
    let VB = null;
    const yB = function(BB) {
        const TB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return VB = TB, () => {
          VB === TB && (VB = null)
        }
      },
      pB = () => {
        var BB;
        return null !== (BB = VB) && void 0 !== BB && BB.canCycle() ? VB.cycle : null
      }
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  38359: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => eB
    });
    const VB = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var yB = dB(62),
      pB = dB(36923),
      lB = dB(279);
    const JB = ["Basic", "Rare", "Super"];

    function YB(BB, TB) {
      return `${"Basic"===TB?"":`${TB} `}${"Simple"===BB?"":`${BB} `}Lucky Block`
    }
    const gB = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((BB => JB.map((TB => [YB(BB, TB), {
      category: BB,
      rarity: TB
    }])))));
    gB.keys();

    function oB(BB) {
      return gB.get(BB)
    }
    const kB = "Obsidian",
      LB = ["Cobweb"],
      OB = [...["Red", "Blue", "Green", "Yellow"].map((BB => `${(0,lB._)(BB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", kB, ...LB];

    function DB(BB) {
      return OB.includes(BB)
    }
    var uB = dB(572);

    function HB(BB, TB) {
      const dB = oB(BB);
      if (dB) {
        const BB = oB(TB);
        if (!BB) return;
        const VB = JB.length - 1 - JB.indexOf(BB.rarity);
        return (BB.category === dB.category ? 0 : 1) * JB.length + VB
      }
      if (!DB(BB)) return;
      if (TB === BB) return 0;
      const VB = BB => DB(BB) && !LB.includes(BB) && BB !== kB;
      return VB(BB) && VB(TB) ? 1 : void 0
    }
    const EB = [...Array.from({
      length: uB.q - uB.n
    }, ((BB, TB) => uB.n + TB)), ...Array.from({
      length: uB.n
    }, ((BB, TB) => TB))];
    class vB {
      constructor(BB) {
        this.inventory = BB, this.pending = new Map
      }
      onPlace(BB) {
        var TB;
        const dB = this.inventory.selectedSlot(),
          VB = this.inventory.itemAt(dB);
        (null === VB || void 0 === VB ? void 0 : VB.name) === BB && (null !== (TB = VB.amount) && void 0 !== TB ? TB : 1) <= 1 && mB(BB) && this.pending.set(dB, BB)
      }
      onDrop(BB, TB) {
        TB < uB.n && null === this.inventory.itemAt(TB) && mB(BB) && this.refill(TB, BB)
      }
      dL() {
        const BB = [...this.pending];
        this.pending.clear();
        for (const [TB, dB] of BB) null === this.inventory.itemAt(TB) && this.refill(TB, dB)
      }
      refill(BB, TB) {
        const dB = function(BB, TB, dB, VB) {
          let yB, pB = 1 / 0;
          for (const lB of EB) {
            if (lB === TB) continue;
            const JB = VB(lB);
            if (!JB || lB < uB.n && TB !== dB) continue;
            const YB = HB(BB, JB.name);
            void 0 !== YB && YB < pB && (yB = lB, pB = YB)
          }
          return yB
        }(TB, BB, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== dB && this.inventory.swap(BB, dB)
      }
    }

    function mB(BB) {
      return !!oB(BB) || DB(BB)
    }
    var iB = dB(35595),
      NB = dB(72),
      tB = dB(933),
      fB = dB.n(tB);
    const sB = "Lucky Clover",
      MB = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function zB(BB) {
      return MB[BB][0]
    }

    function wB(BB) {
      return JB.filter((TB => BB >= zB(TB)))
    }
    var UB = dB(270),
      FB = dB(2139),
      KB = dB(21),
      rB = dB(2191),
      IB = dB(1666),
      cB = dB(35589),
      SB = dB(946);
    var PB = dB(980);
    const QB = {
      Basic: lB.L.whiteUiText,
      Rare: lB.L.goldUiText,
      Super: lB.L.cyanUiText
    };
    let RB = 1;

    function aB() {
      const BB = (0, FB.j)("currencyAmounts"),
        TB = null === BB || void 0 === BB ? void 0 : BB.Clovers;
      return !TB || TB.hidden ? null : (0, PB.jsx)(cB.e, {
        children: (0, PB.jsx)(ZB, {
          amount: TB.amount
        })
      })
    }

    function ZB(BB) {
      var TB, dB, VB;
      let {
        amount: pB
      } = BB;
      const {
        openEverythingMenuName: YB
      } = (0, KB.m)(["openEverythingMenuName"]), gB = (0, rB.e)(), [oB, kB] = (0, yB.useState)(pB), [LB, OB] = (0, yB.useState)(null), [DB, uB] = (0, yB.useState)(0), [HB, EB] = (0, yB.useState)([]), vB = (0, yB.useRef)(pB), mB = (0, yB.useRef)(!1), iB = (0, yB.useRef)(null), tB = YB === UB.m.SHOP;
      (0, yB.useEffect)((() => {
        const BB = vB.current;
        if (vB.current = pB, pB <= BB || tB) return void kB(pB);
        const TB = gB || HB.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (dB = pB - BB, VB = !mB.current, dB <= 0 || !VB && dB < 40 ? 0 : Math.min(4, Math.ceil(dB / 30)));
        var dB, VB;
        if (mB.current = !0, wB(pB).length > wB(BB).length && uB(RB++), TB > 0) {
          const BB = [];
          for (let dB = 0; dB < TB; dB++) BB.push({
            id: RB++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * dB
          });
          EB((TB => [...TB, ...BB]))
        }
        const yB = TB > 0 ? 600 : 0;
        OB({
          id: RB++,
          delayMs: yB
        });
        const JB = performance.now() + yB;
        let YB = 0;
        const oB = TB => {
          const dB = lB.e.clamp((TB - JB) / 600, 0, 1);
          kB(Math.round(BB + (pB - BB) * dB)), dB < 1 && (YB = requestAnimationFrame(oB))
        };
        return YB = requestAnimationFrame(oB), () => {
          cancelAnimationFrame(YB)
        }
      }), [pB, tB]);
      const MB = function(BB) {
          var TB;
          const dB = null !== (TB = JB.find((TB => BB < zB(TB)))) && void 0 !== TB ? TB : "Super";
          return {
            rarity: dB,
            progress: lB.e.clamp(BB / zB(dB), 0, 1)
          }
        }(oB),
        FB = wB(oB).at(-1);
      return (0, PB.jsxs)(PB.Fragment, {
        children: [(0, PB.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, PB.jsxs)("div", {
            className: fB()("LuckyCloverWallet", {
              Capped: FB && "Basic" !== FB
            }),
            style: FB && {
              "--luckyTierColour": QB[FB]
            },
            children: [(0, PB.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${MB.progress})`
              }
            }), DB > 0 && (0, PB.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(TB=null===LB||void 0===LB?void 0:LB.delayMs)&&void 0!==TB?TB:0}ms`
              }
            }, DB), (0, PB.jsx)("div", {
              ref: iB,
              className: fB()("LuckyCloverWalletIcon", LB && "Bounce"),
              style: {
                animationDelay: `${null!==(VB=null===LB||void 0===LB?void 0:LB.delayMs)&&void 0!==VB?VB:0}ms`
              },
              children: (0, PB.jsx)(IB.c, {
                itemName: sB,
                amount: 0
              })
            }, null !== (dB = null === LB || void 0 === LB ? void 0 : LB.id) && void 0 !== dB ? dB : 0), (0, PB.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: oB
            }), FB && (0, PB.jsx)(SB.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, NB.createPortal)(HB.map((BB => (0, PB.jsx)(XB, {
          flyer: BB,
          target: iB,
          onDone: () => {
            EB((TB => TB.filter((TB => TB.id !== BB.id))))
          }
        }, BB.id))), document.body)]
      })
    }

    function XB(BB) {
      let {
        flyer: TB,
        target: dB,
        onDone: VB
      } = BB;
      const pB = (0, yB.useRef)(null);
      return (0, yB.useEffect)((() => {
        var BB;
        const yB = null === (BB = dB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (!pB.current || !yB) return void VB();
        const {
          x: lB,
          y: JB
        } = TB, YB = lB + 140 * (Math.random() - .5), gB = JB - 30 - 40 * Math.random(), oB = pB.current.animate([{
          transform: `translate(${lB}px, ${JB}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${YB}px, ${gB}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${yB.left}px, ${yB.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: TB.delayMs,
          fill: "backwards"
        });
        return oB.onfinish = VB, () => {
          oB.cancel()
        }
      }), []), (0, PB.jsx)("div", {
        ref: pB,
        className: "LuckyCloverFlying",
        children: (0, PB.jsx)(IB.c, {
          itemName: sB,
          amount: 0
        })
      })
    }
    var WB = dB(24);
    const hB = "luckyGearUpgradeView",
      CB = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function GB(BB) {
      var TB;
      return null !== (TB = CB[BB.split(" ")[0]]) && void 0 !== TB ? TB : "#e07bff"
    }
    class qB {
      constructor(BB, TB) {
        this.selectedSlot = BB, this.itemAt = TB, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      MD(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [dB, VB, yB] of BB) this.rings.push({
          id: this.nextId++,
          slot: dB,
          colour: GB(yB),
          until: TB + 1200
        }), dB !== this.selectedSlot() && this.unseen.set(dB, {
          from: VB,
          to: yB
        });
        this.yH()
      }
      dL() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const TB = this.rings.filter((TB => TB.until > BB));
        let dB = TB.length !== this.rings.length;
        this.rings = TB;
        for (const [VB, {
            from: yB,
            to: pB
          }] of this.unseen) {
          const BB = this.itemAt(VB);
          (VB === this.selectedSlot() || BB !== pB && BB !== yB) && (this.unseen.delete(VB), dB = !0)
        }
        dB && this.yH()
      }
      yH() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, WB.h.yH(hB, this.view)
      }
    }
    var xB = dB(1317);

    function jB(BB) {
      return document.querySelector(`.HotBar [data-inven-idx="${BB}"]`)
    }

    function AB(BB) {
      let {
        ring: TB
      } = BB;
      const [dB, VB] = (0, yB.useState)(null);
      return (0, yB.useLayoutEffect)((() => {
        var BB, dB;
        VB(null !== (BB = null === (dB = jB(TB.slot)) || void 0 === dB ? void 0 : dB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
      }), [TB]), dB ? (0, PB.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: dB.left,
          top: dB.top,
          width: dB.width,
          height: dB.height,
          "--ringColour": TB.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function bB(BB) {
      let {
        slot: TB
      } = BB;
      const [dB, VB] = (0, yB.useState)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = () => {
          VB(jB(TB))
        };
        BB();
        const dB = new MutationObserver(BB),
          yB = document.querySelector(".BottomMiddleElements");
        return yB && dB.observe(yB, {
          childList: !0,
          subtree: !0
        }), () => {
          dB.disconnect()
        }
      }), [TB]), dB ? (0, NB.createPortal)((0, PB.jsx)("div", {
        className: "LuckyGearUnseen"
      }), dB) : null
    }

    function nB(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, xB.f)(hB, TB.getView());
      return (0, PB.jsxs)(PB.Fragment, {
        children: [dB.rings.map((BB => (0, PB.jsx)(AB, {
          ring: BB
        }, BB.id))), dB.unseenSlots.map((BB => (0, PB.jsx)(bB, {
          slot: BB
        }, BB)))]
      })
    }
    const eB = function(BB, TB, dB, lB) {
      let JB, {
          localPlayerId: YB
        } = lB,
        gB = null;
      const oB = new vB({
          itemAt: BB => JB.getItemSlot(YB, BB),
          selectedSlot: () => JB.getSelectedInventorySlotI(YB),
          swap: (BB, TB) => {
            JB.swapInventorySlots(BB, TB)
          }
        }),
        kB = new qB((() => JB.getSelectedInventorySlotI(YB)), (BB => {
          var TB;
          return null === (TB = JB.getItemSlot(YB, BB)) || void 0 === TB ? void 0 : TB.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, pB.c)()
        },
        onCreate: BB => {
          JB = BB, gB = (0, iB.r)((0, yB.createElement)(yB.Fragment, null, (0, yB.createElement)(aB), (0, yB.createElement)(nB, {
            controller: kB
          })))
        },
        onClose: () => {
          var BB;
          null === (BB = gB) || void 0 === BB || BB()
        },
        dL: () => {
          oB.dL(), kB.dL()
        },
        onReceivedMessageFromServer: (BB, TB) => {
          "luckyGearUpgrade" === BB && kB.MD(TB)
        },
        onPlayerChangeBlock: (BB, TB, dB, VB, yB, pB) => {
          "Air" !== pB && oB.onPlace(pB)
        },
        onPlayerDropItem: (BB, TB, dB, VB) => {
          oB.onDrop(TB, VB)
        },
        onPlayerAltAction: (BB, TB, dB, yB, pB, lB) => {
          if (!lB || "Mesh" !== JB.getEntityType(lB)) return;
          const YB = JB.getEntityName(lB),
            gB = Object.values(VB).find((BB => BB.name === YB));
          gB && JB.openShop(BB, !1, gB.shopTab)
        }
      }
    }
  },
  36923: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB
    });
    var VB = dB(279),
      yB = dB(35894),
      pB = dB(3896);
    const lB = ["Leaf Bed", "_Leaf Bed Head", ...VB.Gc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function JB() {
      let BB;
      return {
        onCreate(TB) {
          BB = TB
        },
        altVetoBlocks: lB,
        onPlayerAttemptAltAction(TB, dB, VB, lB, JB, YB) {
          var gB;
          if ((0, yB.e)(BB.getMetaInfo(JB).rootName) && !BB.isEntityInteractable(YB) && (0, pB.f)(null === (gB = BB.gdB(TB)) || void 0 === gB ? void 0 : gB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35894: (BB, TB, dB) => {
    function VB(BB) {
      return BB.includes("Leaf Bed")
    }

    function yB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !VB(BB)
    }

    function pB(BB) {
      return BB.includes(" Strongbed")
    }

    function lB(BB) {
      return VB(BB) || yB(BB) || pB(BB)
    }
    dB.d(TB, {
      e: () => lB,
      h: () => VB,
      l: () => pB,
      p: () => yB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);