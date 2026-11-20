export const id = 19;
export const ids = [19];
export const modules = {
  36416: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => jT,
      g: () => vT,
      j: () => CT,
      k: () => AT
    });
    var lT = cT(9359),
      MT = cT(36423),
      KT = cT(36432),
      OT = cT(8746),
      yT = cT(1461),
      fT = cT(71),
      xT = cT(94),
      IT = cT(1099);

    function AT() {
      var TT;
      return (0, yT.i)(MT.b, (0, MT.j)()), (0, IT.jsx)(IT.Fragment, {
        children: null === (TT = (0, MT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function CT(TT) {
      var kT;
      let {
        show: cT
      } = TT;
      (0, yT.i)(MT.b, (0, MT.j)());
      const xT = null === (kT = (0, MT.j)()) || void 0 === kT ? void 0 : kT.menu;
      return (0, fT.useEffect)((() => {
        var TT;
        cT || (null === xT || void 0 === xT || null === (TT = xT.onClose) || void 0 === TT || TT.call(xT), (0, KT.q)())
      }), [cT, xT]), (0, fT.useEffect)((() => cT ? (0, OT.e)(KT.A, KT.h) : void 0), [cT]), (0, IT.jsx)(lT.b, {
        showing: cT,
        globallyUniqueKey: "clientGameMenu",
        children: null === xT || void 0 === xT ? void 0 : xT.content
      })
    }

    function jT(TT) {
      let {
        placement: kT = "bottom"
      } = TT;
      return (0, IT.jsx)("div", {
        id: `clientGameHud-${kT}`,
        style: {
          display: "contents"
        }
      })
    }

    function vT(TT) {
      let {
        children: kT,
        placement: cT = "bottom"
      } = TT;
      const [lT, MT] = (0, fT.useState)(null);
      return (0, fT.useEffect)((() => {
        MT(document.getElementById(`clientGameHud-${cT}`))
      }), [cT]), lT ? (0, xT.createPortal)(kT, lT) : null
    }
  },
  9359: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(4521),
      MT = cT(4528);

    function KT(TT) {
      let {
        children: kT,
        showing: cT,
        globallyUniqueKey: KT,
        alwaysMountChildren: OT = !1,
        doGameplayStartStopOnShow: yT = !0,
        keepsMovement: fT = !1
      } = TT;
      return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
    }
  },
  8746: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      e: () => MT
    });
    let lT = null;
    const MT = function(TT) {
        const kT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return lT = kT, () => {
          lT === kT && (lT = null)
        }
      },
      KT = () => {
        var TT;
        return null !== (TT = lT) && void 0 !== TT && TT.canCycle() ? lT.cycle : null
      }
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  39209: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => sT
    });
    const lT = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var MT = cT(71),
      KT = cT(37879),
      OT = cT(339);
    const yT = ["Basic", "Rare", "Super"];

    function fT(TT, kT) {
      return `${"Basic"===kT?"":`${kT} `}${"Simple"===TT?"":`${TT} `}Lucky Block`
    }
    const xT = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((TT => yT.map((kT => [fT(TT, kT), {
      category: TT,
      rarity: kT
    }])))));
    xT.keys();

    function IT(TT) {
      return xT.get(TT)
    }
    const AT = "Obsidian",
      CT = ["Cobweb"],
      jT = [...["Red", "Blue", "Green", "Yellow"].map((TT => `${(0,OT.U)(TT)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", AT, ...CT];

    function vT(TT) {
      return jT.includes(TT)
    }
    var tT = cT(617);

    function hT(TT, kT) {
      const cT = IT(TT);
      if (cT) {
        const TT = IT(kT);
        if (!TT) return;
        const lT = yT.length - 1 - yT.indexOf(TT.rarity);
        return (TT.category === cT.category ? 0 : 1) * yT.length + lT
      }
      if (!vT(TT)) return;
      if (kT === TT) return 0;
      const lT = TT => vT(TT) && !CT.includes(TT) && TT !== AT;
      return lT(TT) && lT(kT) ? 1 : void 0
    }
    const NT = [...Array.from({
      length: tT.v - tT.u
    }, ((TT, kT) => tT.u + kT)), ...Array.from({
      length: tT.u
    }, ((TT, kT) => kT))];
    class QT {
      constructor(TT) {
        this.inventory = TT, this.pending = new Map
      }
      onPlace(TT) {
        var kT;
        const cT = this.inventory.selectedSlot(),
          lT = this.inventory.itemAt(cT);
        (null === lT || void 0 === lT ? void 0 : lT.name) === TT && (null !== (kT = lT.amount) && void 0 !== kT ? kT : 1) <= 1 && ST(TT) && this.pending.set(cT, TT)
      }
      onDrop(TT, kT) {
        kT < tT.u && null === this.inventory.itemAt(kT) && ST(TT) && this.refill(kT, TT)
      }
      UA() {
        const TT = [...this.pending];
        this.pending.clear();
        for (const [kT, cT] of TT) null === this.inventory.itemAt(kT) && this.refill(kT, cT)
      }
      refill(TT, kT) {
        const cT = function(TT, kT, cT, lT) {
          let MT, KT = 1 / 0;
          for (const OT of NT) {
            if (OT === kT) continue;
            const yT = lT(OT);
            if (!yT || OT < tT.u && kT !== cT) continue;
            const fT = hT(TT, yT.name);
            void 0 !== fT && fT < KT && (MT = OT, KT = fT)
          }
          return MT
        }(kT, TT, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== cT && this.inventory.swap(TT, cT)
      }
    }

    function ST(TT) {
      return !!IT(TT) || vT(TT)
    }
    var DT = cT(36423),
      aT = cT(94),
      FT = cT(1046),
      rT = cT.n(FT);
    const PT = "Lucky Clover",
      wT = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function mT(TT) {
      return wT[TT][0]
    }

    function bT(TT) {
      return yT.filter((kT => TT >= mT(kT)))
    }
    var zT = cT(328),
      JT = cT(2462),
      oT = cT(31),
      HT = cT(2582),
      eT = cT(1943),
      GT = cT(36416),
      VT = cT(1061);
    var ET = cT(1099);
    const ZT = {
      Basic: OT.H.whiteUiText,
      Rare: OT.H.goldUiText,
      Super: OT.H.cyanUiText
    };
    let uT = 1;

    function XT() {
      const TT = (0, JT.f)("currencyAmounts"),
        kT = null === TT || void 0 === TT ? void 0 : TT.Clovers;
      return !kT || kT.hidden ? null : (0, ET.jsx)(GT.g, {
        children: (0, ET.jsx)(dT, {
          amount: kT.amount
        })
      })
    }

    function dT(TT) {
      var kT, cT, lT;
      let {
        amount: KT
      } = TT;
      const {
        openEverythingMenuName: fT
      } = (0, oT.n)(["openEverythingMenuName"]), xT = (0, HT.e)(), [IT, AT] = (0, MT.useState)(KT), [CT, jT] = (0, MT.useState)(null), [vT, tT] = (0, MT.useState)(0), [hT, NT] = (0, MT.useState)([]), QT = (0, MT.useRef)(KT), ST = (0, MT.useRef)(!1), DT = (0, MT.useRef)(null), FT = fT === zT.o.SHOP;
      (0, MT.useEffect)((() => {
        const TT = QT.current;
        if (QT.current = KT, KT <= TT || FT) return void AT(KT);
        const kT = xT || hT.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (cT = KT - TT, lT = !ST.current, cT <= 0 || !lT && cT < 40 ? 0 : Math.min(4, Math.ceil(cT / 30)));
        var cT, lT;
        if (ST.current = !0, bT(KT).length > bT(TT).length && tT(uT++), kT > 0) {
          const TT = [];
          for (let cT = 0; cT < kT; cT++) TT.push({
            id: uT++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * cT
          });
          NT((kT => [...kT, ...TT]))
        }
        const MT = kT > 0 ? 600 : 0;
        jT({
          id: uT++,
          delayMs: MT
        });
        const yT = performance.now() + MT;
        let fT = 0;
        const IT = kT => {
          const cT = OT.d.clamp((kT - yT) / 600, 0, 1);
          AT(Math.round(TT + (KT - TT) * cT)), cT < 1 && (fT = requestAnimationFrame(IT))
        };
        return fT = requestAnimationFrame(IT), () => {
          cancelAnimationFrame(fT)
        }
      }), [KT, FT]);
      const wT = function(TT) {
          var kT;
          const cT = null !== (kT = yT.find((kT => TT < mT(kT)))) && void 0 !== kT ? kT : "Super";
          return {
            rarity: cT,
            progress: OT.d.clamp(TT / mT(cT), 0, 1)
          }
        }(IT),
        JT = bT(IT).at(-1);
      return (0, ET.jsxs)(ET.Fragment, {
        children: [(0, ET.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, ET.jsxs)("div", {
            className: rT()("LuckyCloverWallet", {
              Capped: JT && "Basic" !== JT
            }),
            style: JT && {
              "--luckyTierColour": ZT[JT]
            },
            children: [(0, ET.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${wT.progress})`
              }
            }), vT > 0 && (0, ET.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(kT=null===CT||void 0===CT?void 0:CT.delayMs)&&void 0!==kT?kT:0}ms`
              }
            }, vT), (0, ET.jsx)("div", {
              ref: DT,
              className: rT()("LuckyCloverWalletIcon", CT && "Bounce"),
              style: {
                animationDelay: `${null!==(lT=null===CT||void 0===CT?void 0:CT.delayMs)&&void 0!==lT?lT:0}ms`
              },
              children: (0, ET.jsx)(eT.d, {
                itemName: PT,
                amount: 0
              })
            }, null !== (cT = null === CT || void 0 === CT ? void 0 : CT.id) && void 0 !== cT ? cT : 0), (0, ET.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: IT
            }), JT && (0, ET.jsx)(VT.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, aT.createPortal)(hT.map((TT => (0, ET.jsx)(LT, {
          flyer: TT,
          target: DT,
          onDone: () => {
            NT((kT => kT.filter((kT => kT.id !== TT.id))))
          }
        }, TT.id))), document.body)]
      })
    }

    function LT(TT) {
      let {
        flyer: kT,
        target: cT,
        onDone: lT
      } = TT;
      const KT = (0, MT.useRef)(null);
      return (0, MT.useEffect)((() => {
        var TT;
        const MT = null === (TT = cT.current) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
        if (!KT.current || !MT) return void lT();
        const {
          x: OT,
          y: yT
        } = kT, fT = OT + 140 * (Math.random() - .5), xT = yT - 30 - 40 * Math.random(), IT = KT.current.animate([{
          transform: `translate(${OT}px, ${yT}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${fT}px, ${xT}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${MT.left}px, ${MT.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: kT.delayMs,
          fill: "backwards"
        });
        return IT.onfinish = lT, () => {
          IT.cancel()
        }
      }), []), (0, ET.jsx)("div", {
        ref: KT,
        className: "LuckyCloverFlying",
        children: (0, ET.jsx)(eT.d, {
          itemName: PT,
          amount: 0
        })
      })
    }
    var RT = cT(36);
    const gT = "luckyGearUpgradeView",
      UT = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function YT(TT) {
      var kT;
      return null !== (kT = UT[TT.split(" ")[0]]) && void 0 !== kT ? kT : "#e07bff"
    }
    class BT {
      constructor(TT, kT) {
        this.selectedSlot = TT, this.itemAt = kT, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Av(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [cT, lT, MT] of TT) this.rings.push({
          id: this.nextId++,
          slot: cT,
          colour: YT(MT),
          until: kT + 1200
        }), cT !== this.selectedSlot() && this.unseen.set(cT, {
          from: lT,
          to: MT
        });
        this.nt()
      }
      UA() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const kT = this.rings.filter((kT => kT.until > TT));
        let cT = kT.length !== this.rings.length;
        this.rings = kT;
        for (const [lT, {
            from: MT,
            to: KT
          }] of this.unseen) {
          const TT = this.itemAt(lT);
          (lT === this.selectedSlot() || TT !== KT && TT !== MT) && (this.unseen.delete(lT), cT = !0)
        }
        cT && this.nt()
      }
      nt() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, RT.k.nt(gT, this.view)
      }
    }
    var WT = cT(1461);

    function nT(TT) {
      return document.querySelector(`.HotBar [data-inven-idx="${TT}"]`)
    }

    function pT(TT) {
      let {
        ring: kT
      } = TT;
      const [cT, lT] = (0, MT.useState)(null);
      return (0, MT.useLayoutEffect)((() => {
        var TT, cT;
        lT(null !== (TT = null === (cT = nT(kT.slot)) || void 0 === cT ? void 0 : cT.getBoundingClientRect()) && void 0 !== TT ? TT : null)
      }), [kT]), cT ? (0, ET.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: cT.left,
          top: cT.top,
          width: cT.width,
          height: cT.height,
          "--ringColour": kT.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function iT(TT) {
      let {
        slot: kT
      } = TT;
      const [cT, lT] = (0, MT.useState)(null);
      return (0, MT.useLayoutEffect)((() => {
        const TT = () => {
          lT(nT(kT))
        };
        TT();
        const cT = new MutationObserver(TT),
          MT = document.querySelector(".BottomMiddleElements");
        return MT && cT.observe(MT, {
          childList: !0,
          subtree: !0
        }), () => {
          cT.disconnect()
        }
      }), [kT]), cT ? (0, aT.createPortal)((0, ET.jsx)("div", {
        className: "LuckyGearUnseen"
      }), cT) : null
    }

    function qT(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, WT.i)(gT, kT.getView());
      return (0, ET.jsxs)(ET.Fragment, {
        children: [cT.rings.map((TT => (0, ET.jsx)(pT, {
          ring: TT
        }, TT.id))), cT.unseenSlots.map((TT => (0, ET.jsx)(iT, {
          slot: TT
        }, TT)))]
      })
    }
    const sT = function(TT, kT, cT, OT) {
      let yT, {
          localPlayerId: fT
        } = OT,
        xT = null;
      const IT = new QT({
          itemAt: TT => yT.getItemSlot(fT, TT),
          selectedSlot: () => yT.getSelectedInventorySlotI(fT),
          swap: (TT, kT) => {
            yT.swapInventorySlots(TT, kT)
          }
        }),
        AT = new BT((() => yT.getSelectedInventorySlotI(fT)), (TT => {
          var kT;
          return null === (kT = yT.getItemSlot(fT, TT)) || void 0 === kT ? void 0 : kT.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, KT.d)()
        },
        onCreate: TT => {
          yT = TT, xT = (0, DT.q)((0, MT.createElement)(MT.Fragment, null, (0, MT.createElement)(XT), (0, MT.createElement)(qT, {
            controller: AT
          })))
        },
        onClose: () => {
          var TT;
          null === (TT = xT) || void 0 === TT || TT()
        },
        UA: () => {
          IT.UA(), AT.UA()
        },
        onReceivedMessageFromServer: (TT, kT) => {
          "luckyGearUpgrade" === TT && AT.Av(kT)
        },
        onPlayerChangeBlock: (TT, kT, cT, lT, MT, KT) => {
          "Air" !== KT && IT.onPlace(KT)
        },
        onPlayerDropItem: (TT, kT, cT, lT) => {
          IT.onDrop(kT, lT)
        },
        onPlayerAltAction: (TT, kT, cT, MT, KT, OT) => {
          if (!OT || "Mesh" !== yT.getEntityType(OT)) return;
          const fT = yT.getEntityName(OT),
            xT = Object.values(lT).find((TT => TT.name === fT));
          xT && yT.openShop(TT, !1, xT.shopTab)
        }
      }
    }
  },
  37879: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    var lT = cT(339),
      MT = cT(36761),
      KT = cT(4454);
    const OT = ["Leaf Bed", "_Leaf Bed Head", ...lT.Bc.flatMap((TT => [`${TT} Bed`, `_${TT} Bed Head`, `${TT} Strongbed`, `_${TT} Strongbed Head`]))];

    function yT() {
      let TT;
      return {
        onCreate(kT) {
          TT = kT
        },
        altVetoBlocks: OT,
        onPlayerAttemptAltAction(kT, cT, lT, OT, yT, fT) {
          var xT;
          if ((0, MT.c)(TT.getMetaInfo(yT).rootName) && !TT.isEntityInteractable(fT) && (0, KT.i)(null === (xT = TT.ckT(kT)) || void 0 === xT ? void 0 : xT.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36761: (TT, kT, cT) => {
    function lT(TT) {
      return TT.includes("Leaf Bed")
    }

    function MT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !lT(TT)
    }

    function KT(TT) {
      return TT.includes(" Strongbed")
    }

    function OT(TT) {
      return lT(TT) || MT(TT) || KT(TT)
    }
    cT.d(kT, {
      c: () => OT,
      d: () => lT,
      e: () => KT,
      g: () => MT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);