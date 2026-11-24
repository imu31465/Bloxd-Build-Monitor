export const id = 19;
export const ids = [19];
export const modules = {
  36687: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => pT,
      d: () => BT,
      h: () => LT,
      i: () => lT
    });
    var WT = mT(34270),
      zT = mT(36693),
      MT = mT(36698),
      gT = mT(8852),
      nT = mT(1567),
      HT = mT(63),
      kT = mT(85),
      jT = mT(1188);

    function lT() {
      var TT;
      return (0, nT.j)(zT.b, (0, zT.j)()), (0, jT.jsx)(jT.Fragment, {
        children: null === (TT = (0, zT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var UT;
      let {
        show: mT
      } = TT;
      (0, nT.j)(zT.b, (0, zT.j)());
      const kT = null === (UT = (0, zT.j)()) || void 0 === UT ? void 0 : UT.menu;
      return (0, HT.useEffect)((() => {
        var TT;
        mT || (null === kT || void 0 === kT || null === (TT = kT.onClose) || void 0 === TT || TT.call(kT), (0, MT.n)())
      }), [mT, kT]), (0, HT.useEffect)((() => mT ? (0, gT.f)(MT.s, MT.d) : void 0), [mT]), (0, jT.jsx)(WT.e, {
        showing: mT,
        globallyUniqueKey: "clientGameMenu",
        children: null === kT || void 0 === kT ? void 0 : kT.content
      })
    }

    function pT(TT) {
      let {
        placement: UT = "bottom"
      } = TT;
      return (0, jT.jsx)("div", {
        id: `clientGameHud-${UT}`,
        style: {
          display: "contents"
        }
      })
    }

    function BT(TT) {
      let {
        children: UT,
        placement: mT = "bottom"
      } = TT;
      const [WT, zT] = (0, HT.useState)(null);
      return (0, HT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${mT}`))
      }), [mT]), WT ? (0, kT.createPortal)(UT, WT) : null
    }
  },
  34270: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(4641),
      zT = mT(4650);

    function MT(TT) {
      let {
        children: UT,
        showing: mT,
        globallyUniqueKey: MT,
        alwaysMountChildren: gT = !1,
        doGameplayStartStopOnShow: nT = !0,
        keepsMovement: HT = !1
      } = TT;
      return (0, zT.d)(!0, mT, MT, HT), (0, WT.c)(nT, mT), mT || gT ? UT : null
    }
  },
  8852: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      f: () => zT
    });
    let WT = null;
    const zT = function(TT) {
        const UT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return WT = UT, () => {
          WT === UT && (WT = null)
        }
      },
      MT = () => {
        var TT;
        return null !== (TT = WT) && void 0 !== TT && TT.canCycle() ? WT.cycle : null
      }
  },
  36698: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => ZT,
      h: () => cT,
      j: () => nT,
      l: () => LT,
      n: () => vT,
      p: () => lT,
      r: () => qT,
      s: () => BT,
      v: () => fT
    });
    var WT = mT(25),
      zT = mT(31);
    const MT = "clientGameInventoryButtonsChanged",
      gT = new Map;

    function nT() {
      return [...gT.values()].sort(((TT, UT) => {
        var mT, WT;
        return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
      }))
    }
    let HT = null;

    function kT(TT) {
      HT = TT
    }
    let jT = !1;

    function lT(TT) {
      jT = !0;
      try {
        TT.onClick()
      } finally {
        jT = !1
      }
      TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
    }

    function LT() {
      return jT
    }

    function pT() {
      return nT().filter((TT => TT.panel && !TT.disabled))
    }

    function BT(TT) {
      const UT = pT(),
        mT = UT.findIndex((TT => TT.id === HT));
      return !(mT < 0 || UT.length < 2) && (lT(UT[(mT + TT + UT.length) % UT.length]), !0)
    }

    function ZT() {
      return null !== HT && pT().length > 1
    }

    function cT() {
      kT(null)
    }

    function vT() {
      "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
    }

    function fT() {
      const TT = HT;
      return kT(null), TT
    }

    function qT(TT) {
      return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
        gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
      }
    }
  },
  36693: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      d: () => cT,
      f: () => vT,
      i: () => LT,
      j: () => kT,
      l: () => ZT,
      n: () => pT,
      q: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(36698);
    const nT = "clientGameUiChanged";
    let HT = null;

    function kT() {
      return HT
    }

    function jT(TT, UT) {
      const mT = {
        content: TT,
        menu: UT
      };
      return HT = mT, zT.j.EZ(nT, HT, !0), () => {
        HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
      }
    }
    let lT = null;

    function LT() {
      return lT
    }

    function pT(TT) {
      return lT = TT, () => {
        lT === TT && (lT = null)
      }
    }
    let BT = !1;

    function ZT() {
      const TT = WT.b.get("openInGameMenuName");
      "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function cT() {
      fT(!1)
    }

    function vT() {
      fT(BT)
    }

    function fT(TT) {
      "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, gT.h)(), BT = !1
    }
  },
  39567: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => RT
    });
    const WT = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var zT = mT(63),
      MT = mT(38164),
      gT = mT(366);
    const nT = ["Basic", "Rare", "Super"];

    function HT(TT, UT) {
      return `${"Basic"===UT?"":`${UT} `}${"Simple"===TT?"":`${TT} `}Lucky Block`
    }
    const kT = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((TT => nT.map((UT => [HT(TT, UT), {
      category: TT,
      rarity: UT
    }])))));
    kT.keys();

    function jT(TT) {
      return kT.get(TT)
    }
    const lT = "Obsidian",
      LT = ["Cobweb"],
      pT = [...["Red", "Blue", "Green", "Yellow"].map((TT => `${(0,gT.hb)(TT)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", lT, ...LT];

    function BT(TT) {
      return pT.includes(TT)
    }
    var ZT = mT(653);

    function cT(TT, UT) {
      const mT = jT(TT);
      if (mT) {
        const TT = jT(UT);
        if (!TT) return;
        const WT = nT.length - 1 - nT.indexOf(TT.rarity);
        return (TT.category === mT.category ? 0 : 1) * nT.length + WT
      }
      if (!BT(TT)) return;
      if (UT === TT) return 0;
      const WT = TT => BT(TT) && !LT.includes(TT) && TT !== lT;
      return WT(TT) && WT(UT) ? 1 : void 0
    }
    const vT = [...Array.from({
      length: ZT.q - ZT.n
    }, ((TT, UT) => ZT.n + UT)), ...Array.from({
      length: ZT.n
    }, ((TT, UT) => UT))];
    class fT {
      constructor(TT) {
        this.inventory = TT, this.pending = new Map
      }
      onPlace(TT) {
        var UT;
        const mT = this.inventory.selectedSlot(),
          WT = this.inventory.itemAt(mT);
        (null === WT || void 0 === WT ? void 0 : WT.name) === TT && (null !== (UT = WT.amount) && void 0 !== UT ? UT : 1) <= 1 && qT(TT) && this.pending.set(mT, TT)
      }
      onDrop(TT, UT) {
        UT < ZT.n && null === this.inventory.itemAt(UT) && qT(TT) && this.refill(UT, TT)
      }
      Cl() {
        const TT = [...this.pending];
        this.pending.clear();
        for (const [UT, mT] of TT) null === this.inventory.itemAt(UT) && this.refill(UT, mT)
      }
      refill(TT, UT) {
        const mT = function(TT, UT, mT, WT) {
          let zT, MT = 1 / 0;
          for (const gT of vT) {
            if (gT === UT) continue;
            const nT = WT(gT);
            if (!nT || gT < ZT.n && UT !== mT) continue;
            const HT = cT(TT, nT.name);
            void 0 !== HT && HT < MT && (zT = gT, MT = HT)
          }
          return zT
        }(UT, TT, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== mT && this.inventory.swap(TT, mT)
      }
    }

    function qT(TT) {
      return !!jT(TT) || BT(TT)
    }
    var iT = mT(36693),
      bT = mT(85),
      OT = mT(1126),
      eT = mT.n(OT);
    const YT = "Lucky Clover",
      JT = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function xT(TT) {
      return JT[TT][0]
    }

    function dT(TT) {
      return nT.filter((UT => TT >= xT(UT)))
    }
    var wT = mT(351),
      tT = mT(2552),
      aT = mT(25),
      yT = mT(2698),
      XT = mT(2034),
      IT = mT(36687),
      QT = mT(1135);
    var sT = mT(1188);
    const FT = {
      Basic: gT.R.whiteUiText,
      Rare: gT.R.goldUiText,
      Super: gT.R.cyanUiText
    };
    let PT = 1;

    function VT() {
      const TT = (0, tT.f)("currencyAmounts"),
        UT = null === TT || void 0 === TT ? void 0 : TT.Clovers;
      return !UT || UT.hidden ? null : (0, sT.jsx)(IT.d, {
        children: (0, sT.jsx)(uT, {
          amount: UT.amount
        })
      })
    }

    function uT(TT) {
      var UT, mT, WT;
      let {
        amount: MT
      } = TT;
      const {
        openEverythingMenuName: HT
      } = (0, aT.h)(["openEverythingMenuName"]), kT = (0, yT.b)(), [jT, lT] = (0, zT.useState)(MT), [LT, pT] = (0, zT.useState)(null), [BT, ZT] = (0, zT.useState)(0), [cT, vT] = (0, zT.useState)([]), fT = (0, zT.useRef)(MT), qT = (0, zT.useRef)(!1), iT = (0, zT.useRef)(null), OT = HT === wT.k.SHOP;
      (0, zT.useEffect)((() => {
        const TT = fT.current;
        if (fT.current = MT, MT <= TT || OT) return void lT(MT);
        const UT = kT || cT.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (mT = MT - TT, WT = !qT.current, mT <= 0 || !WT && mT < 40 ? 0 : Math.min(4, Math.ceil(mT / 30)));
        var mT, WT;
        if (qT.current = !0, dT(MT).length > dT(TT).length && ZT(PT++), UT > 0) {
          const TT = [];
          for (let mT = 0; mT < UT; mT++) TT.push({
            id: PT++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * mT
          });
          vT((UT => [...UT, ...TT]))
        }
        const zT = UT > 0 ? 600 : 0;
        pT({
          id: PT++,
          delayMs: zT
        });
        const nT = performance.now() + zT;
        let HT = 0;
        const jT = UT => {
          const mT = gT.e.clamp((UT - nT) / 600, 0, 1);
          lT(Math.round(TT + (MT - TT) * mT)), mT < 1 && (HT = requestAnimationFrame(jT))
        };
        return HT = requestAnimationFrame(jT), () => {
          cancelAnimationFrame(HT)
        }
      }), [MT, OT]);
      const JT = function(TT) {
          var UT;
          const mT = null !== (UT = nT.find((UT => TT < xT(UT)))) && void 0 !== UT ? UT : "Super";
          return {
            rarity: mT,
            progress: gT.e.clamp(TT / xT(mT), 0, 1)
          }
        }(jT),
        tT = dT(jT).at(-1);
      return (0, sT.jsxs)(sT.Fragment, {
        children: [(0, sT.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, sT.jsxs)("div", {
            className: eT()("LuckyCloverWallet", {
              Capped: tT && "Basic" !== tT
            }),
            style: tT && {
              "--luckyTierColour": FT[tT]
            },
            children: [(0, sT.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${JT.progress})`
              }
            }), BT > 0 && (0, sT.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(UT=null===LT||void 0===LT?void 0:LT.delayMs)&&void 0!==UT?UT:0}ms`
              }
            }, BT), (0, sT.jsx)("div", {
              ref: iT,
              className: eT()("LuckyCloverWalletIcon", LT && "Bounce"),
              style: {
                animationDelay: `${null!==(WT=null===LT||void 0===LT?void 0:LT.delayMs)&&void 0!==WT?WT:0}ms`
              },
              children: (0, sT.jsx)(XT.b, {
                itemName: YT,
                amount: 0
              })
            }, null !== (mT = null === LT || void 0 === LT ? void 0 : LT.id) && void 0 !== mT ? mT : 0), (0, sT.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: jT
            }), tT && (0, sT.jsx)(QT.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, bT.createPortal)(cT.map((TT => (0, sT.jsx)(CT, {
          flyer: TT,
          target: iT,
          onDone: () => {
            vT((UT => UT.filter((UT => UT.id !== TT.id))))
          }
        }, TT.id))), document.body)]
      })
    }

    function CT(TT) {
      let {
        flyer: UT,
        target: mT,
        onDone: WT
      } = TT;
      const MT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        var TT;
        const zT = null === (TT = mT.current) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
        if (!MT.current || !zT) return void WT();
        const {
          x: gT,
          y: nT
        } = UT, HT = gT + 140 * (Math.random() - .5), kT = nT - 30 - 40 * Math.random(), jT = MT.current.animate([{
          transform: `translate(${gT}px, ${nT}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${HT}px, ${kT}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${zT.left}px, ${zT.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: UT.delayMs,
          fill: "backwards"
        });
        return jT.onfinish = WT, () => {
          jT.cancel()
        }
      }), []), (0, sT.jsx)("div", {
        ref: MT,
        className: "LuckyCloverFlying",
        children: (0, sT.jsx)(XT.b, {
          itemName: YT,
          amount: 0
        })
      })
    }
    var rT = mT(31);
    const KT = "luckyGearUpgradeView",
      ST = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function GT(TT) {
      var UT;
      return null !== (UT = ST[TT.split(" ")[0]]) && void 0 !== UT ? UT : "#e07bff"
    }
    class NT {
      constructor(TT, UT) {
        this.selectedSlot = TT, this.itemAt = UT, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      pB(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [mT, WT, zT] of TT) this.rings.push({
          id: this.nextId++,
          slot: mT,
          colour: GT(zT),
          until: UT + 1200
        }), mT !== this.selectedSlot() && this.unseen.set(mT, {
          from: WT,
          to: zT
        });
        this.EZ()
      }
      Cl() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const UT = this.rings.filter((UT => UT.until > TT));
        let mT = UT.length !== this.rings.length;
        this.rings = UT;
        for (const [WT, {
            from: zT,
            to: MT
          }] of this.unseen) {
          const TT = this.itemAt(WT);
          (WT === this.selectedSlot() || TT !== MT && TT !== zT) && (this.unseen.delete(WT), mT = !0)
        }
        mT && this.EZ()
      }
      EZ() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, rT.j.EZ(KT, this.view)
      }
    }
    var ET = mT(1567);

    function hT(TT) {
      return document.querySelector(`.HotBar [data-inven-idx="${TT}"]`)
    }

    function DT(TT) {
      let {
        ring: UT
      } = TT;
      const [mT, WT] = (0, zT.useState)(null);
      return (0, zT.useLayoutEffect)((() => {
        var TT, mT;
        WT(null !== (TT = null === (mT = hT(UT.slot)) || void 0 === mT ? void 0 : mT.getBoundingClientRect()) && void 0 !== TT ? TT : null)
      }), [UT]), mT ? (0, sT.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: mT.left,
          top: mT.top,
          width: mT.width,
          height: mT.height,
          "--ringColour": UT.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function oT(TT) {
      let {
        slot: UT
      } = TT;
      const [mT, WT] = (0, zT.useState)(null);
      return (0, zT.useLayoutEffect)((() => {
        const TT = () => {
          WT(hT(UT))
        };
        TT();
        const mT = new MutationObserver(TT),
          zT = document.querySelector(".BottomMiddleElements");
        return zT && mT.observe(zT, {
          childList: !0,
          subtree: !0
        }), () => {
          mT.disconnect()
        }
      }), [UT]), mT ? (0, bT.createPortal)((0, sT.jsx)("div", {
        className: "LuckyGearUnseen"
      }), mT) : null
    }

    function AT(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, ET.j)(KT, UT.getView());
      return (0, sT.jsxs)(sT.Fragment, {
        children: [mT.rings.map((TT => (0, sT.jsx)(DT, {
          ring: TT
        }, TT.id))), mT.unseenSlots.map((TT => (0, sT.jsx)(oT, {
          slot: TT
        }, TT)))]
      })
    }
    const RT = function(TT, UT, mT, gT) {
      let nT, {
          localPlayerId: HT
        } = gT,
        kT = null;
      const jT = new fT({
          itemAt: TT => nT.getItemSlot(HT, TT),
          selectedSlot: () => nT.getSelectedInventorySlotI(HT),
          swap: (TT, UT) => {
            nT.swapInventorySlots(TT, UT)
          }
        }),
        lT = new NT((() => nT.getSelectedInventorySlotI(HT)), (TT => {
          var UT;
          return null === (UT = nT.getItemSlot(HT, TT)) || void 0 === UT ? void 0 : UT.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, MT.b)()
        },
        onCreate: TT => {
          nT = TT, kT = (0, iT.q)((0, zT.createElement)(zT.Fragment, null, (0, zT.createElement)(VT), (0, zT.createElement)(AT, {
            controller: lT
          })))
        },
        onClose: () => {
          var TT;
          null === (TT = kT) || void 0 === TT || TT()
        },
        Cl: () => {
          jT.Cl(), lT.Cl()
        },
        onReceivedMessageFromServer: (TT, UT) => {
          "luckyGearUpgrade" === TT && lT.pB(UT)
        },
        onPlayerChangeBlock: (TT, UT, mT, WT, zT, MT) => {
          "Air" !== MT && jT.onPlace(MT)
        },
        onPlayerDropItem: (TT, UT, mT, WT) => {
          jT.onDrop(UT, WT)
        },
        onPlayerAltAction: (TT, UT, mT, zT, MT, gT) => {
          if (!gT || "Mesh" !== nT.getEntityType(gT)) return;
          const HT = nT.getEntityName(gT),
            kT = Object.values(WT).find((TT => TT.name === HT));
          kT && nT.openShop(TT, !1, kT.shopTab)
        }
      }
    }
  },
  38164: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(366),
      zT = mT(37032),
      MT = mT(4594);
    const gT = ["Leaf Bed", "_Leaf Bed Head", ...WT._c.flatMap((TT => [`${TT} Bed`, `_${TT} Bed Head`, `${TT} Strongbed`, `_${TT} Strongbed Head`]))];

    function nT() {
      let TT;
      return {
        onCreate(UT) {
          TT = UT
        },
        altVetoBlocks: gT,
        onPlayerAttemptAltAction(UT, mT, WT, gT, nT, HT) {
          var kT;
          if ((0, zT.c)(TT.getMetaInfo(nT).rootName) && !TT.isEntityInteractable(HT) && (0, MT.f)(null === (kT = TT.RUT(UT)) || void 0 === kT ? void 0 : kT.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37032: (TT, UT, mT) => {
    function WT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !WT(TT)
    }

    function MT(TT) {
      return TT.includes(" Strongbed")
    }

    function gT(TT) {
      return WT(TT) || zT(TT) || MT(TT)
    }
    mT.d(UT, {
      c: () => gT,
      g: () => WT,
      j: () => MT,
      l: () => zT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);