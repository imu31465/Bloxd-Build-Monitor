export const id = 19;
export const ids = [19];
export const modules = {
  35594: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => xT,
      e: () => cT,
      h: () => LT,
      l: () => DT
    });
    var iT = IT(8743),
      zT = IT(35599),
      kT = IT(35601),
      WT = IT(8139),
      XT = IT(1403),
      BT = IT(46),
      FT = IT(68),
      ST = IT(1083);

    function DT() {
      var TT;
      return (0, XT.i)(zT.c, (0, zT.k)()), (0, ST.jsx)(ST.Fragment, {
        children: null === (TT = (0, zT.k)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var oT;
      let {
        show: IT
      } = TT;
      (0, XT.i)(zT.c, (0, zT.k)());
      const FT = null === (oT = (0, zT.k)()) || void 0 === oT ? void 0 : oT.menu;
      return (0, BT.useEffect)((() => {
        var TT;
        IT || (null === FT || void 0 === FT || null === (TT = FT.onClose) || void 0 === TT || TT.call(FT), (0, kT.r)())
      }), [IT, FT]), (0, BT.useEffect)((() => IT ? (0, WT.f)(kT.x, kT.g) : void 0), [IT]), (0, ST.jsx)(iT.c, {
        showing: IT,
        globallyUniqueKey: "clientGameMenu",
        children: null === FT || void 0 === FT ? void 0 : FT.content
      })
    }

    function xT(TT) {
      let {
        placement: oT = "bottom"
      } = TT;
      return (0, ST.jsx)("div", {
        id: `clientGameHud-${oT}`,
        style: {
          display: "contents"
        }
      })
    }

    function cT(TT) {
      let {
        children: oT,
        placement: IT = "bottom"
      } = TT;
      const [iT, zT] = (0, BT.useState)(null);
      return (0, BT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${IT}`))
      }), [IT]), iT ? (0, FT.createPortal)(oT, iT) : null
    }
  },
  8743: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(4057),
      zT = IT(4061);

    function kT(TT) {
      let {
        children: oT,
        showing: IT,
        globallyUniqueKey: kT,
        alwaysMountChildren: WT = !1,
        doGameplayStartStopOnShow: XT = !0,
        keepsMovement: BT = !1
      } = TT;
      return (0, zT.d)(!0, IT, kT, BT), (0, iT.e)(XT, IT), IT || WT ? oT : null
    }
  },
  8139: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => zT
    });
    let iT = null;
    const zT = function(TT) {
        const oT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return iT = oT, () => {
          iT === oT && (iT = null)
        }
      },
      kT = () => {
        var TT;
        return null !== (TT = iT) && void 0 !== TT && TT.canCycle() ? iT.cycle : null
      }
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  38364: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => VT
    });
    const iT = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var zT = IT(46),
      kT = IT(36984),
      WT = IT(314);
    const XT = ["Basic", "Rare", "Super"];

    function BT(TT, oT) {
      return `${"Basic"===oT?"":`${oT} `}${"Simple"===TT?"":`${TT} `}Lucky Block`
    }
    const FT = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((TT => XT.map((oT => [BT(TT, oT), {
      category: TT,
      rarity: oT
    }])))));
    FT.keys();

    function ST(TT) {
      return FT.get(TT)
    }
    const DT = "Obsidian",
      LT = ["Cobweb"],
      xT = [...["Red", "Blue", "Green", "Yellow"].map((TT => `${(0,WT.Z)(TT)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", DT, ...LT];

    function cT(TT) {
      return xT.includes(TT)
    }
    var KT = IT(618);

    function MT(TT, oT) {
      const IT = ST(TT);
      if (IT) {
        const TT = ST(oT);
        if (!TT) return;
        const iT = XT.length - 1 - XT.indexOf(TT.rarity);
        return (TT.category === IT.category ? 0 : 1) * XT.length + iT
      }
      if (!cT(TT)) return;
      if (oT === TT) return 0;
      const iT = TT => cT(TT) && !LT.includes(TT) && TT !== DT;
      return iT(TT) && iT(oT) ? 1 : void 0
    }
    const rT = [...Array.from({
      length: KT.n - KT.k
    }, ((TT, oT) => KT.k + oT)), ...Array.from({
      length: KT.k
    }, ((TT, oT) => oT))];
    class AT {
      constructor(TT) {
        this.inventory = TT, this.pending = new Map
      }
      onPlace(TT) {
        var oT;
        const IT = this.inventory.selectedSlot(),
          iT = this.inventory.itemAt(IT);
        (null === iT || void 0 === iT ? void 0 : iT.name) === TT && (null !== (oT = iT.amount) && void 0 !== oT ? oT : 1) <= 1 && gT(TT) && this.pending.set(IT, TT)
      }
      onDrop(TT, oT) {
        oT < KT.k && null === this.inventory.itemAt(oT) && gT(TT) && this.refill(oT, TT)
      }
      dD() {
        const TT = [...this.pending];
        this.pending.clear();
        for (const [oT, IT] of TT) null === this.inventory.itemAt(oT) && this.refill(oT, IT)
      }
      refill(TT, oT) {
        const IT = function(TT, oT, IT, iT) {
          let zT, kT = 1 / 0;
          for (const WT of rT) {
            if (WT === oT) continue;
            const XT = iT(WT);
            if (!XT || WT < KT.k && oT !== IT) continue;
            const BT = MT(TT, XT.name);
            void 0 !== BT && BT < kT && (zT = WT, kT = BT)
          }
          return zT
        }(oT, TT, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== IT && this.inventory.swap(TT, IT)
      }
    }

    function gT(TT) {
      return !!ST(TT) || cT(TT)
    }
    var hT = IT(35599),
      wT = IT(68),
      mT = IT(1042),
      eT = IT.n(mT);
    const RT = "Lucky Clover",
      uT = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function vT(TT) {
      return uT[TT][0]
    }

    function ET(TT) {
      return XT.filter((oT => TT >= vT(oT)))
    }
    var fT = IT(306),
      CT = IT(2227),
      jT = IT(12),
      JT = IT(2287),
      UT = IT(1747),
      aT = IT(35594),
      YT = IT(1055);
    var QT = IT(1083);
    const OT = {
      Basic: WT.L.whiteUiText,
      Rare: WT.L.goldUiText,
      Super: WT.L.cyanUiText
    };
    let HT = 1;

    function nT() {
      const TT = (0, CT.g)("currencyAmounts"),
        oT = null === TT || void 0 === TT ? void 0 : TT.Clovers;
      return !oT || oT.hidden ? null : (0, QT.jsx)(aT.e, {
        children: (0, QT.jsx)(qT, {
          amount: oT.amount
        })
      })
    }

    function qT(TT) {
      var oT, IT, iT;
      let {
        amount: kT
      } = TT;
      const {
        openEverythingMenuName: BT
      } = (0, jT.k)(["openEverythingMenuName"]), FT = (0, JT.c)(), [ST, DT] = (0, zT.useState)(kT), [LT, xT] = (0, zT.useState)(null), [cT, KT] = (0, zT.useState)(0), [MT, rT] = (0, zT.useState)([]), AT = (0, zT.useRef)(kT), gT = (0, zT.useRef)(!1), hT = (0, zT.useRef)(null), mT = BT === fT.q.SHOP;
      (0, zT.useEffect)((() => {
        const TT = AT.current;
        if (AT.current = kT, kT <= TT || mT) return void DT(kT);
        const oT = FT || MT.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (IT = kT - TT, iT = !gT.current, IT <= 0 || !iT && IT < 40 ? 0 : Math.min(4, Math.ceil(IT / 30)));
        var IT, iT;
        if (gT.current = !0, ET(kT).length > ET(TT).length && KT(HT++), oT > 0) {
          const TT = [];
          for (let IT = 0; IT < oT; IT++) TT.push({
            id: HT++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * IT
          });
          rT((oT => [...oT, ...TT]))
        }
        const zT = oT > 0 ? 600 : 0;
        xT({
          id: HT++,
          delayMs: zT
        });
        const XT = performance.now() + zT;
        let BT = 0;
        const ST = oT => {
          const IT = WT.e.clamp((oT - XT) / 600, 0, 1);
          DT(Math.round(TT + (kT - TT) * IT)), IT < 1 && (BT = requestAnimationFrame(ST))
        };
        return BT = requestAnimationFrame(ST), () => {
          cancelAnimationFrame(BT)
        }
      }), [kT, mT]);
      const uT = function(TT) {
          var oT;
          const IT = null !== (oT = XT.find((oT => TT < vT(oT)))) && void 0 !== oT ? oT : "Super";
          return {
            rarity: IT,
            progress: WT.e.clamp(TT / vT(IT), 0, 1)
          }
        }(ST),
        CT = ET(ST).at(-1);
      return (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, QT.jsxs)("div", {
            className: eT()("LuckyCloverWallet", {
              Capped: CT && "Basic" !== CT
            }),
            style: CT && {
              "--luckyTierColour": OT[CT]
            },
            children: [(0, QT.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${uT.progress})`
              }
            }), cT > 0 && (0, QT.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(oT=null===LT||void 0===LT?void 0:LT.delayMs)&&void 0!==oT?oT:0}ms`
              }
            }, cT), (0, QT.jsx)("div", {
              ref: hT,
              className: eT()("LuckyCloverWalletIcon", LT && "Bounce"),
              style: {
                animationDelay: `${null!==(iT=null===LT||void 0===LT?void 0:LT.delayMs)&&void 0!==iT?iT:0}ms`
              },
              children: (0, QT.jsx)(UT.c, {
                itemName: RT,
                amount: 0
              })
            }, null !== (IT = null === LT || void 0 === LT ? void 0 : LT.id) && void 0 !== IT ? IT : 0), (0, QT.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: ST
            }), CT && (0, QT.jsx)(YT.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, wT.createPortal)(MT.map((TT => (0, QT.jsx)(ZT, {
          flyer: TT,
          target: hT,
          onDone: () => {
            rT((oT => oT.filter((oT => oT.id !== TT.id))))
          }
        }, TT.id))), document.body)]
      })
    }

    function ZT(TT) {
      let {
        flyer: oT,
        target: IT,
        onDone: iT
      } = TT;
      const kT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        var TT;
        const zT = null === (TT = IT.current) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
        if (!kT.current || !zT) return void iT();
        const {
          x: WT,
          y: XT
        } = oT, BT = WT + 140 * (Math.random() - .5), FT = XT - 30 - 40 * Math.random(), ST = kT.current.animate([{
          transform: `translate(${WT}px, ${XT}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${BT}px, ${FT}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${zT.left}px, ${zT.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: oT.delayMs,
          fill: "backwards"
        });
        return ST.onfinish = iT, () => {
          ST.cancel()
        }
      }), []), (0, QT.jsx)("div", {
        ref: kT,
        className: "LuckyCloverFlying",
        children: (0, QT.jsx)(UT.c, {
          itemName: RT,
          amount: 0
        })
      })
    }
    var lT = IT(16);
    const sT = "luckyGearUpgradeView",
      tT = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function GT(TT) {
      var oT;
      return null !== (oT = tT[TT.split(" ")[0]]) && void 0 !== oT ? oT : "#e07bff"
    }
    class pT {
      constructor(TT, oT) {
        this.selectedSlot = TT, this.itemAt = oT, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Jc(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [IT, iT, zT] of TT) this.rings.push({
          id: this.nextId++,
          slot: IT,
          colour: GT(zT),
          until: oT + 1200
        }), IT !== this.selectedSlot() && this.unseen.set(IT, {
          from: iT,
          to: zT
        });
        this.XM()
      }
      dD() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const oT = this.rings.filter((oT => oT.until > TT));
        let IT = oT.length !== this.rings.length;
        this.rings = oT;
        for (const [iT, {
            from: zT,
            to: kT
          }] of this.unseen) {
          const TT = this.itemAt(iT);
          (iT === this.selectedSlot() || TT !== kT && TT !== zT) && (this.unseen.delete(iT), IT = !0)
        }
        IT && this.XM()
      }
      XM() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, lT.h.XM(sT, this.view)
      }
    }
    var bT = IT(1403);

    function yT(TT) {
      return document.querySelector(`.HotBar [data-inven-idx="${TT}"]`)
    }

    function NT(TT) {
      let {
        ring: oT
      } = TT;
      const [IT, iT] = (0, zT.useState)(null);
      return (0, zT.useLayoutEffect)((() => {
        var TT, IT;
        iT(null !== (TT = null === (IT = yT(oT.slot)) || void 0 === IT ? void 0 : IT.getBoundingClientRect()) && void 0 !== TT ? TT : null)
      }), [oT]), IT ? (0, QT.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: IT.left,
          top: IT.top,
          width: IT.width,
          height: IT.height,
          "--ringColour": oT.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function PT(TT) {
      let {
        slot: oT
      } = TT;
      const [IT, iT] = (0, zT.useState)(null);
      return (0, zT.useLayoutEffect)((() => {
        const TT = () => {
          iT(yT(oT))
        };
        TT();
        const IT = new MutationObserver(TT),
          zT = document.querySelector(".BottomMiddleElements");
        return zT && IT.observe(zT, {
          childList: !0,
          subtree: !0
        }), () => {
          IT.disconnect()
        }
      }), [oT]), IT ? (0, wT.createPortal)((0, QT.jsx)("div", {
        className: "LuckyGearUnseen"
      }), IT) : null
    }

    function dT(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, bT.i)(sT, oT.getView());
      return (0, QT.jsxs)(QT.Fragment, {
        children: [IT.rings.map((TT => (0, QT.jsx)(NT, {
          ring: TT
        }, TT.id))), IT.unseenSlots.map((TT => (0, QT.jsx)(PT, {
          slot: TT
        }, TT)))]
      })
    }
    const VT = function(TT, oT, IT, WT) {
      let XT, {
          localPlayerId: BT
        } = WT,
        FT = null;
      const ST = new AT({
          itemAt: TT => XT.getItemSlot(BT, TT),
          selectedSlot: () => XT.getSelectedInventorySlotI(BT),
          swap: (TT, oT) => {
            XT.swapInventorySlots(TT, oT)
          }
        }),
        DT = new pT((() => XT.getSelectedInventorySlotI(BT)), (TT => {
          var oT;
          return null === (oT = XT.getItemSlot(BT, TT)) || void 0 === oT ? void 0 : oT.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, kT.c)()
        },
        onCreate: TT => {
          XT = TT, FT = (0, hT.u)((0, zT.createElement)(zT.Fragment, null, (0, zT.createElement)(nT), (0, zT.createElement)(dT, {
            controller: DT
          })))
        },
        onClose: () => {
          var TT;
          null === (TT = FT) || void 0 === TT || TT()
        },
        dD: () => {
          ST.dD(), DT.dD()
        },
        onReceivedMessageFromServer: (TT, oT) => {
          "luckyGearUpgrade" === TT && DT.Jc(oT)
        },
        onPlayerChangeBlock: (TT, oT, IT, iT, zT, kT) => {
          "Air" !== kT && ST.onPlace(kT)
        },
        onPlayerDropItem: (TT, oT, IT, iT) => {
          ST.onDrop(oT, iT)
        },
        onPlayerAltAction: (TT, oT, IT, zT, kT, WT) => {
          if (!WT || "Mesh" !== XT.getEntityType(WT)) return;
          const BT = XT.getEntityName(WT),
            FT = Object.values(iT).find((TT => TT.name === BT));
          FT && XT.openShop(TT, !1, FT.shopTab)
        }
      }
    }
  },
  36984: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(314),
      zT = IT(35882),
      kT = IT(3996);
    const WT = ["Leaf Bed", "_Leaf Bed Head", ...iT.vc.flatMap((TT => [`${TT} Bed`, `_${TT} Bed Head`, `${TT} Strongbed`, `_${TT} Strongbed Head`]))];

    function XT() {
      let TT;
      return {
        onCreate(oT) {
          TT = oT
        },
        altVetoBlocks: WT,
        onPlayerAttemptAltAction(oT, IT, iT, WT, XT, BT) {
          var FT;
          if ((0, zT.d)(TT.getMetaInfo(XT).rootName) && !TT.isEntityInteractable(BT) && (0, kT.g)(null === (FT = TT.eoT(oT)) || void 0 === FT ? void 0 : FT.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35882: (TT, oT, IT) => {
    function iT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !iT(TT)
    }

    function kT(TT) {
      return TT.includes(" Strongbed")
    }

    function WT(TT) {
      return iT(TT) || zT(TT) || kT(TT)
    }
    IT.d(oT, {
      d: () => WT,
      f: () => iT,
      g: () => kT,
      i: () => zT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);