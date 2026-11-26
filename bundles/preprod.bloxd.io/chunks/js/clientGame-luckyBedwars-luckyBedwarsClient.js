export const id = 22;
export const ids = [22];
export const modules = {
  37263: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB,
      e: () => NB,
      h: () => zB,
      l: () => PB
    });
    var YB = GB(34790),
      DB = GB(37267),
      QB = GB(37270),
      oB = GB(9391),
      jB = GB(1480),
      yB = GB(56),
      JB = GB(70),
      MB = GB(1282);

    function PB() {
      var BB;
      return (0, jB.i)(DB.d, (0, DB.n)()), (0, MB.jsx)(MB.Fragment, {
        children: null === (BB = (0, DB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var OB;
      let {
        show: GB
      } = BB;
      (0, jB.i)(DB.d, (0, DB.n)());
      const JB = null === (OB = (0, DB.n)()) || void 0 === OB ? void 0 : OB.menu;
      return (0, yB.useEffect)((() => {
        var BB;
        GB || (null === JB || void 0 === JB || null === (BB = JB.onClose) || void 0 === BB || BB.call(JB), (0, QB.u)())
      }), [GB, JB]), (0, yB.useEffect)((() => GB ? (0, oB.d)(QB.D, QB.i) : void 0), [GB]), (0, MB.jsx)(YB.d, {
        showing: GB,
        globallyUniqueKey: "clientGameMenu",
        children: null === JB || void 0 === JB ? void 0 : JB.content
      })
    }
    const lB = new Map,
      pB = new Set;

    function qB(BB, OB) {
      OB ? lB.set(BB, OB) : lB.delete(BB);
      for (const GB of pB) GB()
    }

    function ZB(BB) {
      let {
        placement: OB = "bottom"
      } = BB;
      const GB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = GB.current;
        return qB(OB, BB), () => {
          lB.get(OB) === BB && qB(OB, null)
        }
      }), [OB]), (0, MB.jsx)("div", {
        ref: GB,
        id: `clientGameHud-${OB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: OB,
        placement: GB = "bottom"
      } = BB;
      const [YB, DB] = (0, yB.useState)((() => {
        var BB;
        return null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null
      }));
      return (0, yB.useEffect)((() => {
        const BB = () => {
          var BB;
          DB(null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null)
        };
        return pB.add(BB), BB(), () => {
          pB.delete(BB)
        }
      }), [GB]), YB ? (0, JB.createPortal)(OB, YB) : null
    }
  },
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  9391: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = null;
    const DB = function(BB) {
        const OB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return YB = OB, () => {
          YB === OB && (YB = null)
        }
      },
      QB = () => {
        var BB;
        return null !== (BB = YB) && void 0 !== BB && BB.canCycle() ? YB.cycle : null
      }
  },
  37270: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => pB,
      G: () => RB,
      e: () => QB,
      i: () => qB,
      l: () => ZB,
      m: () => jB,
      q: () => zB,
      u: () => NB,
      y: () => PB,
      z: () => WB
    });
    var YB = GB(16),
      DB = GB(25);
    const QB = "clientGameInventoryButtonsChanged",
      oB = new Map;

    function jB() {
      return [...oB.values()].sort(((BB, OB) => {
        var GB, YB;
        return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
      }))
    }
    let yB = null;

    function JB(BB) {
      yB = BB
    }
    let MB = !1;

    function PB(BB) {
      MB = !0;
      try {
        BB.onClick()
      } finally {
        MB = !1
      }
      BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
    }

    function zB() {
      return MB
    }

    function lB() {
      return jB().filter((BB => BB.panel && !BB.disabled))
    }

    function pB(BB) {
      const OB = lB(),
        GB = OB.findIndex((BB => BB.id === yB));
      return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
    }

    function qB() {
      return null !== yB && lB().length > 1
    }

    function ZB() {
      JB(null)
    }

    function NB() {
      "inventory" !== YB.c.get("openInGameMenuName") && JB(null)
    }

    function RB() {
      const BB = yB;
      return JB(null), BB
    }

    function WB(BB) {
      return oB.set(BB.id, BB), DB.o.tM(QB, jB(), !0), () => {
        oB.get(BB.id) === BB && (oB.delete(BB.id), DB.o.tM(QB, jB()))
      }
    }
  },
  37267: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      f: () => RB,
      g: () => ZB,
      i: () => NB,
      m: () => zB,
      n: () => JB,
      o: () => qB,
      r: () => lB,
      s: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(37270);
    const jB = "clientGameUiChanged";
    let yB = null;

    function JB() {
      return yB
    }

    function MB(BB, OB) {
      const GB = {
        content: BB,
        menu: OB
      };
      return yB = GB, DB.o.tM(jB, yB, !0), () => {
        yB === GB && (yB = null, pB = !1, ZB(), DB.o.tM(jB, null))
      }
    }
    let PB = null;

    function zB() {
      return PB
    }

    function lB(BB) {
      return PB = BB, () => {
        PB === BB && (PB = null)
      }
    }
    let pB = !1;

    function qB() {
      const BB = YB.c.get("openInGameMenuName");
      "clientGame" !== BB && (pB = "inventory" === BB), (0, oB.q)() || (0, oB.l)(), (0, QB.p)(QB.b), YB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ZB() {
      WB(!1)
    }

    function NB() {
      WB(pB)
    }

    function RB() {
      pB && WB(!1)
    }

    function WB(BB) {
      "clientGame" === YB.c.get("openInGameMenuName") && YB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, oB.l)(), pB = !1
    }
  },
  40220: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => tB
    });
    const YB = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var DB = GB(56),
      QB = GB(38703),
      oB = GB(353);
    const jB = ["Basic", "Rare", "Super"];

    function yB(BB, OB) {
      return `${"Basic"===OB?"":`${OB} `}${"Simple"===BB?"":`${BB} `}Lucky Block`
    }
    const JB = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((BB => jB.map((OB => [yB(BB, OB), {
      category: BB,
      rarity: OB
    }])))));
    JB.keys();

    function MB(BB) {
      return JB.get(BB)
    }
    const PB = "Obsidian",
      zB = ["Cobweb"],
      lB = [...["Red", "Blue", "Green", "Yellow"].map((BB => `${(0,oB._)(BB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", PB, ...zB];

    function pB(BB) {
      return lB.includes(BB)
    }
    var qB = GB(641);

    function ZB(BB, OB) {
      const GB = MB(BB);
      if (GB) {
        const BB = MB(OB);
        if (!BB) return;
        const YB = jB.length - 1 - jB.indexOf(BB.rarity);
        return (BB.category === GB.category ? 0 : 1) * jB.length + YB
      }
      if (!pB(BB)) return;
      if (OB === BB) return 0;
      const YB = BB => pB(BB) && !zB.includes(BB) && BB !== PB;
      return YB(BB) && YB(OB) ? 1 : void 0
    }
    const NB = [...Array.from({
      length: qB.t - qB.r
    }, ((BB, OB) => qB.r + OB)), ...Array.from({
      length: qB.r
    }, ((BB, OB) => OB))];
    class RB {
      constructor(BB) {
        this.inventory = BB, this.pending = new Map
      }
      onPlace(BB) {
        var OB;
        const GB = this.inventory.selectedSlot(),
          YB = this.inventory.itemAt(GB);
        (null === YB || void 0 === YB ? void 0 : YB.name) === BB && (null !== (OB = YB.amount) && void 0 !== OB ? OB : 1) <= 1 && WB(BB) && this.pending.set(GB, BB)
      }
      onDrop(BB, OB) {
        OB < qB.r && null === this.inventory.itemAt(OB) && WB(BB) && this.refill(OB, BB)
      }
      kP() {
        const BB = [...this.pending];
        this.pending.clear();
        for (const [OB, GB] of BB) null === this.inventory.itemAt(OB) && this.refill(OB, GB)
      }
      refill(BB, OB) {
        const GB = function(BB, OB, GB, YB) {
          let DB, QB = 1 / 0;
          for (const oB of NB) {
            if (oB === OB) continue;
            const jB = YB(oB);
            if (!jB || oB < qB.r && OB !== GB) continue;
            const yB = ZB(BB, jB.name);
            void 0 !== yB && yB < QB && (DB = oB, QB = yB)
          }
          return DB
        }(OB, BB, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== GB && this.inventory.swap(BB, GB)
      }
    }

    function WB(BB) {
      return !!MB(BB) || pB(BB)
    }
    var AB = GB(37267),
      VB = GB(70),
      SB = GB(1090),
      nB = GB.n(SB);
    const UB = "Lucky Clover",
      fB = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function kB(BB) {
      return fB[BB][0]
    }

    function dB(BB) {
      return jB.filter((OB => BB >= kB(OB)))
    }
    var KB = GB(331),
      uB = GB(2653),
      mB = GB(16),
      IB = GB(2854),
      FB = GB(2012),
      iB = GB(37263),
      LB = GB(1383);
    var gB = GB(1282);
    const rB = {
      Basic: oB.J.whiteUiText,
      Rare: oB.J.goldUiText,
      Super: oB.J.cyanUiText
    };
    let XB = 1;

    function wB() {
      const BB = (0, uB.g)("currencyAmounts"),
        OB = null === BB || void 0 === BB ? void 0 : BB.Clovers;
      return !OB || OB.hidden ? null : (0, gB.jsx)(iB.e, {
        children: (0, gB.jsx)(EB, {
          amount: OB.amount
        })
      })
    }

    function EB(BB) {
      var OB, GB, YB;
      let {
        amount: QB
      } = BB;
      const {
        openEverythingMenuName: yB
      } = (0, mB.o)(["openEverythingMenuName"]), JB = (0, IB.d)(), [MB, PB] = (0, DB.useState)(QB), [zB, lB] = (0, DB.useState)(null), [pB, qB] = (0, DB.useState)(0), [ZB, NB] = (0, DB.useState)([]), RB = (0, DB.useRef)(QB), WB = (0, DB.useRef)(!1), AB = (0, DB.useRef)(null), SB = yB === KB.p.SHOP;
      (0, DB.useEffect)((() => {
        const BB = RB.current;
        if (RB.current = QB, QB <= BB || SB) return void PB(QB);
        const OB = JB || ZB.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (GB = QB - BB, YB = !WB.current, GB <= 0 || !YB && GB < 40 ? 0 : Math.min(4, Math.ceil(GB / 30)));
        var GB, YB;
        if (WB.current = !0, dB(QB).length > dB(BB).length && qB(XB++), OB > 0) {
          const BB = [];
          for (let GB = 0; GB < OB; GB++) BB.push({
            id: XB++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * GB
          });
          NB((OB => [...OB, ...BB]))
        }
        const DB = OB > 0 ? 600 : 0;
        lB({
          id: XB++,
          delayMs: DB
        });
        const jB = performance.now() + DB;
        let yB = 0;
        const MB = OB => {
          const GB = oB.b.clamp((OB - jB) / 600, 0, 1);
          PB(Math.round(BB + (QB - BB) * GB)), GB < 1 && (yB = requestAnimationFrame(MB))
        };
        return yB = requestAnimationFrame(MB), () => {
          cancelAnimationFrame(yB)
        }
      }), [QB, SB]);
      const fB = function(BB) {
          var OB;
          const GB = null !== (OB = jB.find((OB => BB < kB(OB)))) && void 0 !== OB ? OB : "Super";
          return {
            rarity: GB,
            progress: oB.b.clamp(BB / kB(GB), 0, 1)
          }
        }(MB),
        uB = dB(MB).at(-1);
      return (0, gB.jsxs)(gB.Fragment, {
        children: [(0, gB.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, gB.jsxs)("div", {
            className: nB()("LuckyCloverWallet", {
              Capped: uB && "Basic" !== uB
            }),
            style: uB && {
              "--luckyTierColour": rB[uB]
            },
            children: [(0, gB.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${fB.progress})`
              }
            }), pB > 0 && (0, gB.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(OB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==OB?OB:0}ms`
              }
            }, pB), (0, gB.jsx)("div", {
              ref: AB,
              className: nB()("LuckyCloverWalletIcon", zB && "Bounce"),
              style: {
                animationDelay: `${null!==(YB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==YB?YB:0}ms`
              },
              children: (0, gB.jsx)(FB.c, {
                itemName: UB,
                amount: 0
              })
            }, null !== (GB = null === zB || void 0 === zB ? void 0 : zB.id) && void 0 !== GB ? GB : 0), (0, gB.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: MB
            }), uB && (0, gB.jsx)(LB.b, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, VB.createPortal)(ZB.map((BB => (0, gB.jsx)(cB, {
          flyer: BB,
          target: AB,
          onDone: () => {
            NB((OB => OB.filter((OB => OB.id !== BB.id))))
          }
        }, BB.id))), document.body)]
      })
    }

    function cB(BB) {
      let {
        flyer: OB,
        target: GB,
        onDone: YB
      } = BB;
      const QB = (0, DB.useRef)(null);
      return (0, DB.useEffect)((() => {
        var BB;
        const DB = null === (BB = GB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (!QB.current || !DB) return void YB();
        const {
          x: oB,
          y: jB
        } = OB, yB = oB + 140 * (Math.random() - .5), JB = jB - 30 - 40 * Math.random(), MB = QB.current.animate([{
          transform: `translate(${oB}px, ${jB}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${yB}px, ${JB}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${DB.left}px, ${DB.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: OB.delayMs,
          fill: "backwards"
        });
        return MB.onfinish = YB, () => {
          MB.cancel()
        }
      }), []), (0, gB.jsx)("div", {
        ref: QB,
        className: "LuckyCloverFlying",
        children: (0, gB.jsx)(FB.c, {
          itemName: UB,
          amount: 0
        })
      })
    }
    var hB = GB(25);
    const aB = "luckyGearUpgradeView",
      eB = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function TB(BB) {
      var OB;
      return null !== (OB = eB[BB.split(" ")[0]]) && void 0 !== OB ? OB : "#e07bff"
    }
    class bB {
      constructor(BB, OB) {
        this.selectedSlot = BB, this.itemAt = OB, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      nP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [GB, YB, DB] of BB) this.rings.push({
          id: this.nextId++,
          slot: GB,
          colour: TB(DB),
          until: OB + 1200
        }), GB !== this.selectedSlot() && this.unseen.set(GB, {
          from: YB,
          to: DB
        });
        this.tM()
      }
      kP() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const OB = this.rings.filter((OB => OB.until > BB));
        let GB = OB.length !== this.rings.length;
        this.rings = OB;
        for (const [YB, {
            from: DB,
            to: QB
          }] of this.unseen) {
          const BB = this.itemAt(YB);
          (YB === this.selectedSlot() || BB !== QB && BB !== DB) && (this.unseen.delete(YB), GB = !0)
        }
        GB && this.tM()
      }
      tM() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, hB.o.tM(aB, this.view)
      }
    }
    var CB = GB(1480);

    function HB(BB) {
      return document.querySelector(`.HotBar [data-inven-idx="${BB}"]`)
    }

    function vB(BB) {
      let {
        ring: OB
      } = BB;
      const [GB, YB] = (0, DB.useState)(null);
      return (0, DB.useLayoutEffect)((() => {
        var BB, GB;
        YB(null !== (BB = null === (GB = HB(OB.slot)) || void 0 === GB ? void 0 : GB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
      }), [OB]), GB ? (0, gB.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: GB.left,
          top: GB.top,
          width: GB.width,
          height: GB.height,
          "--ringColour": OB.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function sB(BB) {
      let {
        slot: OB
      } = BB;
      const [GB, YB] = (0, DB.useState)(null);
      return (0, DB.useLayoutEffect)((() => {
        const BB = () => {
          YB(HB(OB))
        };
        BB();
        const GB = new MutationObserver(BB),
          DB = document.querySelector(".BottomMiddleElements");
        return DB && GB.observe(DB, {
          childList: !0,
          subtree: !0
        }), () => {
          GB.disconnect()
        }
      }), [OB]), GB ? (0, VB.createPortal)((0, gB.jsx)("div", {
        className: "LuckyGearUnseen"
      }), GB) : null
    }

    function xB(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, CB.i)(aB, OB.getView());
      return (0, gB.jsxs)(gB.Fragment, {
        children: [GB.rings.map((BB => (0, gB.jsx)(vB, {
          ring: BB
        }, BB.id))), GB.unseenSlots.map((BB => (0, gB.jsx)(sB, {
          slot: BB
        }, BB)))]
      })
    }
    const tB = function(BB, OB, GB, oB) {
      let jB, {
          localPlayerId: yB
        } = oB,
        JB = null;
      const MB = new RB({
          itemAt: BB => jB.getItemSlot(yB, BB),
          selectedSlot: () => jB.getSelectedInventorySlotI(yB),
          swap: (BB, OB) => {
            jB.swapInventorySlots(BB, OB)
          }
        }),
        PB = new bB((() => jB.getSelectedInventorySlotI(yB)), (BB => {
          var OB;
          return null === (OB = jB.getItemSlot(yB, BB)) || void 0 === OB ? void 0 : OB.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, QB.e)()
        },
        onCreate: BB => {
          jB = BB, JB = (0, AB.s)((0, DB.createElement)(DB.Fragment, null, (0, DB.createElement)(wB), (0, DB.createElement)(xB, {
            controller: PB
          })))
        },
        onClose: () => {
          var BB;
          null === (BB = JB) || void 0 === BB || BB()
        },
        kP: () => {
          MB.kP(), PB.kP()
        },
        onReceivedMessageFromServer: (BB, OB) => {
          "luckyGearUpgrade" === BB && PB.nP(OB)
        },
        onPlayerChangeBlock: (BB, OB, GB, YB, DB, QB) => {
          "Air" !== QB && MB.onPlace(QB)
        },
        onPlayerDropItem: (BB, OB, GB, YB) => {
          MB.onDrop(OB, YB)
        },
        onPlayerAltAction: (BB, OB, GB, DB, QB, oB) => {
          if (!oB || "Mesh" !== jB.getEntityType(oB)) return;
          const yB = jB.getEntityName(oB),
            JB = Object.values(YB).find((BB => BB.name === yB));
          JB && jB.openShop(BB, !1, JB.shopTab)
        }
      }
    }
  },
  38703: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB
    });
    var YB = GB(353),
      DB = GB(37633),
      QB = GB(4896);
    const oB = ["Leaf Bed", "_Leaf Bed Head", ...YB.Vc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function jB() {
      let BB;
      return {
        onCreate(OB) {
          BB = OB
        },
        altVetoBlocks: oB,
        onPlayerAttemptAltAction(OB, GB, YB, oB, jB, yB) {
          var JB;
          if ((0, DB.b)(BB.getMetaInfo(jB).rootName) && !BB.isEntityInteractable(yB) && (0, QB.h)(null === (JB = BB.MYB(OB)) || void 0 === JB ? void 0 : JB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37633: (BB, OB, GB) => {
    function YB(BB) {
      return BB.includes("Leaf Bed")
    }

    function DB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !YB(BB)
    }

    function QB(BB) {
      return BB.includes(" Strongbed")
    }

    function oB(BB) {
      return YB(BB) || DB(BB) || QB(BB)
    }
    GB.d(OB, {
      b: () => oB,
      d: () => YB,
      f: () => QB,
      i: () => DB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);