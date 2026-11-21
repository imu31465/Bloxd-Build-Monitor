export const id = 19;
export const ids = [19];
export const modules = {
  36228: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => xQ,
      g: () => bQ,
      j: () => HQ
    });
    var LQ = wQ(9094),
      qQ = wQ(36235),
      oQ = wQ(36238),
      DQ = wQ(8464),
      kQ = wQ(1447),
      vQ = wQ(53),
      mQ = wQ(71),
      uQ = wQ(1107);

    function HQ() {
      var QQ;
      return (0, kQ.i)(qQ.b, (0, qQ.k)()), (0, uQ.jsx)(uQ.Fragment, {
        children: null === (QQ = (0, qQ.k)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function bQ(QQ) {
      var FQ;
      let {
        show: wQ
      } = QQ;
      (0, kQ.i)(qQ.b, (0, qQ.k)());
      const mQ = null === (FQ = (0, qQ.k)()) || void 0 === FQ ? void 0 : FQ.menu;
      return (0, vQ.useEffect)((() => {
        var QQ;
        wQ || (null === mQ || void 0 === mQ || null === (QQ = mQ.onClose) || void 0 === QQ || QQ.call(mQ), (0, oQ.o)())
      }), [wQ, mQ]), (0, vQ.useEffect)((() => wQ ? (0, DQ.h)(oQ.v, oQ.g) : void 0), [wQ]), (0, uQ.jsx)(LQ.c, {
        showing: wQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === mQ || void 0 === mQ ? void 0 : mQ.content
      })
    }

    function YQ(QQ) {
      let {
        placement: FQ = "bottom"
      } = QQ;
      return (0, uQ.jsx)("div", {
        id: `clientGameHud-${FQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function xQ(QQ) {
      let {
        children: FQ,
        placement: wQ = "bottom"
      } = QQ;
      const [LQ, qQ] = (0, vQ.useState)(null);
      return (0, vQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${wQ}`))
      }), [wQ]), LQ ? (0, mQ.createPortal)(FQ, LQ) : null
    }
  },
  9094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(4380),
      qQ = wQ(4388);

    function oQ(QQ) {
      let {
        children: FQ,
        showing: wQ,
        globallyUniqueKey: oQ,
        alwaysMountChildren: DQ = !1,
        doGameplayStartStopOnShow: kQ = !0,
        keepsMovement: vQ = !1
      } = QQ;
      return (0, qQ.d)(!0, wQ, oQ, vQ), (0, LQ.b)(kQ, wQ), wQ || DQ ? FQ : null
    }
  },
  8464: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => qQ
    });
    let LQ = null;
    const qQ = function(QQ) {
        const FQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return LQ = FQ, () => {
          LQ === FQ && (LQ = null)
        }
      },
      oQ = () => {
        var QQ;
        return null !== (QQ = LQ) && void 0 !== QQ && QQ.canCycle() ? LQ.cycle : null
      }
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  38955: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => dQ
    });
    const LQ = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var qQ = wQ(53),
      oQ = wQ(37571),
      DQ = wQ(317);
    const kQ = ["Basic", "Rare", "Super"];

    function vQ(QQ, FQ) {
      return `${"Basic"===FQ?"":`${FQ} `}${"Simple"===QQ?"":`${QQ} `}Lucky Block`
    }
    const mQ = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((QQ => kQ.map((FQ => [vQ(QQ, FQ), {
      category: QQ,
      rarity: FQ
    }])))));
    mQ.keys();

    function uQ(QQ) {
      return mQ.get(QQ)
    }
    const HQ = "Obsidian",
      bQ = ["Cobweb"],
      YQ = [...["Red", "Blue", "Green", "Yellow"].map((QQ => `${(0,DQ._)(QQ)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", HQ, ...bQ];

    function xQ(QQ) {
      return YQ.includes(QQ)
    }
    var AQ = wQ(619);

    function tQ(QQ, FQ) {
      const wQ = uQ(QQ);
      if (wQ) {
        const QQ = uQ(FQ);
        if (!QQ) return;
        const LQ = kQ.length - 1 - kQ.indexOf(QQ.rarity);
        return (QQ.category === wQ.category ? 0 : 1) * kQ.length + LQ
      }
      if (!xQ(QQ)) return;
      if (FQ === QQ) return 0;
      const LQ = QQ => xQ(QQ) && !bQ.includes(QQ) && QQ !== HQ;
      return LQ(QQ) && LQ(FQ) ? 1 : void 0
    }
    const eQ = [...Array.from({
      length: AQ.m - AQ.l
    }, ((QQ, FQ) => AQ.l + FQ)), ...Array.from({
      length: AQ.l
    }, ((QQ, FQ) => FQ))];
    class MQ {
      constructor(QQ) {
        this.inventory = QQ, this.pending = new Map
      }
      onPlace(QQ) {
        var FQ;
        const wQ = this.inventory.selectedSlot(),
          LQ = this.inventory.itemAt(wQ);
        (null === LQ || void 0 === LQ ? void 0 : LQ.name) === QQ && (null !== (FQ = LQ.amount) && void 0 !== FQ ? FQ : 1) <= 1 && GQ(QQ) && this.pending.set(wQ, QQ)
      }
      onDrop(QQ, FQ) {
        FQ < AQ.l && null === this.inventory.itemAt(FQ) && GQ(QQ) && this.refill(FQ, QQ)
      }
      fH() {
        const QQ = [...this.pending];
        this.pending.clear();
        for (const [FQ, wQ] of QQ) null === this.inventory.itemAt(FQ) && this.refill(FQ, wQ)
      }
      refill(QQ, FQ) {
        const wQ = function(QQ, FQ, wQ, LQ) {
          let qQ, oQ = 1 / 0;
          for (const DQ of eQ) {
            if (DQ === FQ) continue;
            const kQ = LQ(DQ);
            if (!kQ || DQ < AQ.l && FQ !== wQ) continue;
            const vQ = tQ(QQ, kQ.name);
            void 0 !== vQ && vQ < oQ && (qQ = DQ, oQ = vQ)
          }
          return qQ
        }(FQ, QQ, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== wQ && this.inventory.swap(QQ, wQ)
      }
    }

    function GQ(QQ) {
      return !!uQ(QQ) || xQ(QQ)
    }
    var pQ = wQ(36235),
      cQ = wQ(71),
      CQ = wQ(1070),
      SQ = wQ.n(CQ);
    const iQ = "Lucky Clover",
      WQ = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function RQ(QQ) {
      return WQ[QQ][0]
    }

    function OQ(QQ) {
      return kQ.filter((FQ => QQ >= RQ(FQ)))
    }
    var sQ = wQ(307),
      rQ = wQ(2345),
      IQ = wQ(17),
      UQ = wQ(2473),
      NQ = wQ(1887),
      TQ = wQ(36228),
      KQ = wQ(1079);
    var zQ = wQ(1107);
    const lQ = {
      Basic: DQ.K.whiteUiText,
      Rare: DQ.K.goldUiText,
      Super: DQ.K.cyanUiText
    };
    let jQ = 1;

    function aQ() {
      const QQ = (0, rQ.l)("currencyAmounts"),
        FQ = null === QQ || void 0 === QQ ? void 0 : QQ.Clovers;
      return !FQ || FQ.hidden ? null : (0, zQ.jsx)(TQ.d, {
        children: (0, zQ.jsx)(XQ, {
          amount: FQ.amount
        })
      })
    }

    function XQ(QQ) {
      var FQ, wQ, LQ;
      let {
        amount: oQ
      } = QQ;
      const {
        openEverythingMenuName: vQ
      } = (0, IQ.l)(["openEverythingMenuName"]), mQ = (0, UQ.e)(), [uQ, HQ] = (0, qQ.useState)(oQ), [bQ, YQ] = (0, qQ.useState)(null), [xQ, AQ] = (0, qQ.useState)(0), [tQ, eQ] = (0, qQ.useState)([]), MQ = (0, qQ.useRef)(oQ), GQ = (0, qQ.useRef)(!1), pQ = (0, qQ.useRef)(null), CQ = vQ === sQ.n.SHOP;
      (0, qQ.useEffect)((() => {
        const QQ = MQ.current;
        if (MQ.current = oQ, oQ <= QQ || CQ) return void HQ(oQ);
        const FQ = mQ || tQ.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (wQ = oQ - QQ, LQ = !GQ.current, wQ <= 0 || !LQ && wQ < 40 ? 0 : Math.min(4, Math.ceil(wQ / 30)));
        var wQ, LQ;
        if (GQ.current = !0, OQ(oQ).length > OQ(QQ).length && AQ(jQ++), FQ > 0) {
          const QQ = [];
          for (let wQ = 0; wQ < FQ; wQ++) QQ.push({
            id: jQ++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * wQ
          });
          eQ((FQ => [...FQ, ...QQ]))
        }
        const qQ = FQ > 0 ? 600 : 0;
        YQ({
          id: jQ++,
          delayMs: qQ
        });
        const kQ = performance.now() + qQ;
        let vQ = 0;
        const uQ = FQ => {
          const wQ = DQ.e.clamp((FQ - kQ) / 600, 0, 1);
          HQ(Math.round(QQ + (oQ - QQ) * wQ)), wQ < 1 && (vQ = requestAnimationFrame(uQ))
        };
        return vQ = requestAnimationFrame(uQ), () => {
          cancelAnimationFrame(vQ)
        }
      }), [oQ, CQ]);
      const WQ = function(QQ) {
          var FQ;
          const wQ = null !== (FQ = kQ.find((FQ => QQ < RQ(FQ)))) && void 0 !== FQ ? FQ : "Super";
          return {
            rarity: wQ,
            progress: DQ.e.clamp(QQ / RQ(wQ), 0, 1)
          }
        }(uQ),
        rQ = OQ(uQ).at(-1);
      return (0, zQ.jsxs)(zQ.Fragment, {
        children: [(0, zQ.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, zQ.jsxs)("div", {
            className: SQ()("LuckyCloverWallet", {
              Capped: rQ && "Basic" !== rQ
            }),
            style: rQ && {
              "--luckyTierColour": lQ[rQ]
            },
            children: [(0, zQ.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${WQ.progress})`
              }
            }), xQ > 0 && (0, zQ.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(FQ=null===bQ||void 0===bQ?void 0:bQ.delayMs)&&void 0!==FQ?FQ:0}ms`
              }
            }, xQ), (0, zQ.jsx)("div", {
              ref: pQ,
              className: SQ()("LuckyCloverWalletIcon", bQ && "Bounce"),
              style: {
                animationDelay: `${null!==(LQ=null===bQ||void 0===bQ?void 0:bQ.delayMs)&&void 0!==LQ?LQ:0}ms`
              },
              children: (0, zQ.jsx)(NQ.e, {
                itemName: iQ,
                amount: 0
              })
            }, null !== (wQ = null === bQ || void 0 === bQ ? void 0 : bQ.id) && void 0 !== wQ ? wQ : 0), (0, zQ.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: uQ
            }), rQ && (0, zQ.jsx)(KQ.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, cQ.createPortal)(tQ.map((QQ => (0, zQ.jsx)(fQ, {
          flyer: QQ,
          target: pQ,
          onDone: () => {
            eQ((FQ => FQ.filter((FQ => FQ.id !== QQ.id))))
          }
        }, QQ.id))), document.body)]
      })
    }

    function fQ(QQ) {
      let {
        flyer: FQ,
        target: wQ,
        onDone: LQ
      } = QQ;
      const oQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        var QQ;
        const qQ = null === (QQ = wQ.current) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
        if (!oQ.current || !qQ) return void LQ();
        const {
          x: DQ,
          y: kQ
        } = FQ, vQ = DQ + 140 * (Math.random() - .5), mQ = kQ - 30 - 40 * Math.random(), uQ = oQ.current.animate([{
          transform: `translate(${DQ}px, ${kQ}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${vQ}px, ${mQ}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${qQ.left}px, ${qQ.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: FQ.delayMs,
          fill: "backwards"
        });
        return uQ.onfinish = LQ, () => {
          uQ.cancel()
        }
      }), []), (0, zQ.jsx)("div", {
        ref: oQ,
        className: "LuckyCloverFlying",
        children: (0, zQ.jsx)(NQ.e, {
          itemName: iQ,
          amount: 0
        })
      })
    }
    var VQ = wQ(22);
    const hQ = "luckyGearUpgradeView",
      JQ = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function EQ(QQ) {
      var FQ;
      return null !== (FQ = JQ[QQ.split(" ")[0]]) && void 0 !== FQ ? FQ : "#e07bff"
    }
    class nQ {
      constructor(QQ, FQ) {
        this.selectedSlot = QQ, this.itemAt = FQ, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      bx(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [wQ, LQ, qQ] of QQ) this.rings.push({
          id: this.nextId++,
          slot: wQ,
          colour: EQ(qQ),
          until: FQ + 1200
        }), wQ !== this.selectedSlot() && this.unseen.set(wQ, {
          from: LQ,
          to: qQ
        });
        this.GA()
      }
      fH() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const FQ = this.rings.filter((FQ => FQ.until > QQ));
        let wQ = FQ.length !== this.rings.length;
        this.rings = FQ;
        for (const [LQ, {
            from: qQ,
            to: oQ
          }] of this.unseen) {
          const QQ = this.itemAt(LQ);
          (LQ === this.selectedSlot() || QQ !== oQ && QQ !== qQ) && (this.unseen.delete(LQ), wQ = !0)
        }
        wQ && this.GA()
      }
      GA() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, VQ.l.GA(hQ, this.view)
      }
    }
    var gQ = wQ(1447);

    function PQ(QQ) {
      return document.querySelector(`.HotBar [data-inven-idx="${QQ}"]`)
    }

    function ZQ(QQ) {
      let {
        ring: FQ
      } = QQ;
      const [wQ, LQ] = (0, qQ.useState)(null);
      return (0, qQ.useLayoutEffect)((() => {
        var QQ, wQ;
        LQ(null !== (QQ = null === (wQ = PQ(FQ.slot)) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect()) && void 0 !== QQ ? QQ : null)
      }), [FQ]), wQ ? (0, zQ.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: wQ.left,
          top: wQ.top,
          width: wQ.width,
          height: wQ.height,
          "--ringColour": FQ.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function yQ(QQ) {
      let {
        slot: FQ
      } = QQ;
      const [wQ, LQ] = (0, qQ.useState)(null);
      return (0, qQ.useLayoutEffect)((() => {
        const QQ = () => {
          LQ(PQ(FQ))
        };
        QQ();
        const wQ = new MutationObserver(QQ),
          qQ = document.querySelector(".BottomMiddleElements");
        return qQ && wQ.observe(qQ, {
          childList: !0,
          subtree: !0
        }), () => {
          wQ.disconnect()
        }
      }), [FQ]), wQ ? (0, cQ.createPortal)((0, zQ.jsx)("div", {
        className: "LuckyGearUnseen"
      }), wQ) : null
    }

    function BQ(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, gQ.i)(hQ, FQ.getView());
      return (0, zQ.jsxs)(zQ.Fragment, {
        children: [wQ.rings.map((QQ => (0, zQ.jsx)(ZQ, {
          ring: QQ
        }, QQ.id))), wQ.unseenSlots.map((QQ => (0, zQ.jsx)(yQ, {
          slot: QQ
        }, QQ)))]
      })
    }
    const dQ = function(QQ, FQ, wQ, DQ) {
      let kQ, {
          localPlayerId: vQ
        } = DQ,
        mQ = null;
      const uQ = new MQ({
          itemAt: QQ => kQ.getItemSlot(vQ, QQ),
          selectedSlot: () => kQ.getSelectedInventorySlotI(vQ),
          swap: (QQ, FQ) => {
            kQ.swapInventorySlots(QQ, FQ)
          }
        }),
        HQ = new nQ((() => kQ.getSelectedInventorySlotI(vQ)), (QQ => {
          var FQ;
          return null === (FQ = kQ.getItemSlot(vQ, QQ)) || void 0 === FQ ? void 0 : FQ.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, oQ.d)()
        },
        onCreate: QQ => {
          kQ = QQ, mQ = (0, pQ.u)((0, qQ.createElement)(qQ.Fragment, null, (0, qQ.createElement)(aQ), (0, qQ.createElement)(BQ, {
            controller: HQ
          })))
        },
        onClose: () => {
          var QQ;
          null === (QQ = mQ) || void 0 === QQ || QQ()
        },
        fH: () => {
          uQ.fH(), HQ.fH()
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          "luckyGearUpgrade" === QQ && HQ.bx(FQ)
        },
        onPlayerChangeBlock: (QQ, FQ, wQ, LQ, qQ, oQ) => {
          "Air" !== oQ && uQ.onPlace(oQ)
        },
        onPlayerDropItem: (QQ, FQ, wQ, LQ) => {
          uQ.onDrop(FQ, LQ)
        },
        onPlayerAltAction: (QQ, FQ, wQ, qQ, oQ, DQ) => {
          if (!DQ || "Mesh" !== kQ.getEntityType(DQ)) return;
          const vQ = kQ.getEntityName(DQ),
            mQ = Object.values(LQ).find((QQ => QQ.name === vQ));
          mQ && kQ.openShop(QQ, !1, mQ.shopTab)
        }
      }
    }
  },
  37571: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(317),
      qQ = wQ(36561),
      oQ = wQ(4323);
    const DQ = ["Leaf Bed", "_Leaf Bed Head", ...LQ.Kc.flatMap((QQ => [`${QQ} Bed`, `_${QQ} Bed Head`, `${QQ} Strongbed`, `_${QQ} Strongbed Head`]))];

    function kQ() {
      let QQ;
      return {
        onCreate(FQ) {
          QQ = FQ
        },
        altVetoBlocks: DQ,
        onPlayerAttemptAltAction(FQ, wQ, LQ, DQ, kQ, vQ) {
          var mQ;
          if ((0, qQ.e)(QQ.getMetaInfo(kQ).rootName) && !QQ.isEntityInteractable(vQ) && (0, oQ.f)(null === (mQ = QQ.owQ(FQ)) || void 0 === mQ ? void 0 : mQ.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36561: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !LQ(QQ)
    }

    function oQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function DQ(QQ) {
      return LQ(QQ) || qQ(QQ) || oQ(QQ)
    }
    wQ.d(FQ, {
      e: () => DQ,
      i: () => LQ,
      m: () => oQ,
      q: () => qQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);