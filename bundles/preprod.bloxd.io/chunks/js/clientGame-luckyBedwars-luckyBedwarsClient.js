export const id = 20;
export const ids = [20];
export const modules = {
  36891: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      g: () => jQ,
      k: () => rQ,
      o: () => JQ
    });
    var wQ = XQ(34500),
      qQ = XQ(36900),
      TQ = XQ(36906),
      zQ = XQ(9099),
      sQ = XQ(1498),
      FQ = XQ(61),
      PQ = XQ(78),
      gQ = XQ(1145);

    function JQ() {
      var QQ;
      return (0, sQ.j)(qQ.c, (0, qQ.s)()), (0, gQ.jsx)(gQ.Fragment, {
        children: null === (QQ = (0, qQ.s)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function rQ(QQ) {
      var WQ;
      let {
        show: XQ
      } = QQ;
      (0, sQ.j)(qQ.c, (0, qQ.s)());
      const PQ = null === (WQ = (0, qQ.s)()) || void 0 === WQ ? void 0 : WQ.menu;
      return (0, FQ.useEffect)((() => {
        var QQ;
        XQ || (null === PQ || void 0 === PQ || null === (QQ = PQ.onClose) || void 0 === QQ || QQ.call(PQ), (0, TQ.r)())
      }), [XQ, PQ]), (0, FQ.useEffect)((() => XQ ? (0, zQ.e)(TQ.y, TQ.f) : void 0), [XQ]), (0, gQ.jsx)(wQ.c, {
        showing: XQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === PQ || void 0 === PQ ? void 0 : PQ.content
      })
    }

    function IQ(QQ) {
      let {
        placement: WQ = "bottom"
      } = QQ;
      return (0, gQ.jsx)("div", {
        id: `clientGameHud-${WQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function jQ(QQ) {
      let {
        children: WQ,
        placement: XQ = "bottom"
      } = QQ;
      const [wQ, qQ] = (0, FQ.useState)(null);
      return (0, FQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${XQ}`))
      }), [XQ]), wQ ? (0, PQ.createPortal)(WQ, wQ) : null
    }
  },
  34500: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(4859),
      qQ = XQ(4863);

    function TQ(QQ) {
      let {
        children: WQ,
        showing: XQ,
        globallyUniqueKey: TQ,
        alwaysMountChildren: zQ = !1,
        doGameplayStartStopOnShow: sQ = !0,
        keepsMovement: FQ = !1
      } = QQ;
      return (0, qQ.c)(!0, XQ, TQ, FQ), (0, wQ.c)(sQ, XQ), XQ || zQ ? WQ : null
    }
  },
  9099: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => qQ
    });
    let wQ = null;
    const qQ = function(QQ) {
        const WQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wQ = WQ, () => {
          wQ === WQ && (wQ = null)
        }
      },
      TQ = () => {
        var QQ;
        return null !== (QQ = wQ) && void 0 !== QQ && QQ.canCycle() ? wQ.cycle : null
      }
  },
  36906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      b: () => TQ,
      f: () => BQ,
      h: () => yQ,
      j: () => sQ,
      n: () => rQ,
      r: () => VQ,
      t: () => JQ,
      u: () => pQ,
      y: () => jQ
    });
    var wQ = XQ(26),
      qQ = XQ(31);
    const TQ = "clientGameInventoryButtonsChanged",
      zQ = new Map;

    function sQ() {
      return [...zQ.values()].sort(((QQ, WQ) => {
        var XQ, wQ;
        return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
      }))
    }
    let FQ = null;

    function PQ(QQ) {
      FQ = QQ
    }
    let gQ = !1;

    function JQ(QQ) {
      gQ = !0;
      try {
        QQ.onClick()
      } finally {
        gQ = !1
      }
      QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
    }

    function rQ() {
      return gQ
    }

    function IQ() {
      return sQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function jQ(QQ) {
      const WQ = IQ(),
        XQ = WQ.findIndex((QQ => QQ.id === FQ));
      return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
    }

    function BQ() {
      return null !== FQ && IQ().length > 1
    }

    function yQ() {
      PQ(null)
    }

    function VQ() {
      "inventory" !== wQ.b.get("openInGameMenuName") && PQ(null)
    }

    function DQ() {
      const QQ = FQ;
      return PQ(null), QQ
    }

    function pQ(QQ) {
      return zQ.set(QQ.id, QQ), qQ.k.mB(TQ, sQ(), !0), () => {
        zQ.get(QQ.id) === QQ && (zQ.delete(QQ.id), qQ.k.mB(TQ, sQ()))
      }
    }
  },
  36900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      c: () => sQ,
      g: () => DQ,
      j: () => yQ,
      n: () => VQ,
      q: () => rQ,
      s: () => PQ,
      u: () => BQ,
      y: () => IQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(36906);
    const sQ = "clientGameUiChanged";
    let FQ = null;

    function PQ() {
      return FQ
    }

    function gQ(QQ, WQ) {
      const XQ = {
        content: QQ,
        menu: WQ
      };
      return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
        FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
      }
    }
    let JQ = null;

    function rQ() {
      return JQ
    }

    function IQ(QQ) {
      return JQ = QQ, () => {
        JQ === QQ && (JQ = null)
      }
    }
    let jQ = !1;

    function BQ() {
      const QQ = wQ.b.get("openInGameMenuName");
      "clientGame" !== QQ && (jQ = "inventory" === QQ), (0, zQ.n)() || (0, zQ.h)(), (0, TQ.z)(TQ.e), wQ.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yQ() {
      pQ(!1)
    }

    function VQ() {
      pQ(jQ)
    }

    function DQ() {
      jQ && pQ(!1)
    }

    function pQ(QQ) {
      "clientGame" === wQ.b.get("openInGameMenuName") && wQ.b.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, zQ.h)(), jQ = !1
    }
  },
  39723: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => MQ
    });
    const wQ = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var qQ = XQ(61),
      TQ = XQ(38311),
      zQ = XQ(402);
    const sQ = ["Basic", "Rare", "Super"];

    function FQ(QQ, WQ) {
      return `${"Basic"===WQ?"":`${WQ} `}${"Simple"===QQ?"":`${QQ} `}Lucky Block`
    }
    const PQ = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((QQ => sQ.map((WQ => [FQ(QQ, WQ), {
      category: QQ,
      rarity: WQ
    }])))));
    PQ.keys();

    function gQ(QQ) {
      return PQ.get(QQ)
    }
    const JQ = "Obsidian",
      rQ = ["Cobweb"],
      IQ = [...["Red", "Blue", "Green", "Yellow"].map((QQ => `${(0,zQ.Z)(QQ)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", JQ, ...rQ];

    function jQ(QQ) {
      return IQ.includes(QQ)
    }
    var BQ = XQ(663);

    function yQ(QQ, WQ) {
      const XQ = gQ(QQ);
      if (XQ) {
        const QQ = gQ(WQ);
        if (!QQ) return;
        const wQ = sQ.length - 1 - sQ.indexOf(QQ.rarity);
        return (QQ.category === XQ.category ? 0 : 1) * sQ.length + wQ
      }
      if (!jQ(QQ)) return;
      if (WQ === QQ) return 0;
      const wQ = QQ => jQ(QQ) && !rQ.includes(QQ) && QQ !== JQ;
      return wQ(QQ) && wQ(WQ) ? 1 : void 0
    }
    const VQ = [...Array.from({
      length: BQ.k - BQ.h
    }, ((QQ, WQ) => BQ.h + WQ)), ...Array.from({
      length: BQ.h
    }, ((QQ, WQ) => WQ))];
    class DQ {
      constructor(QQ) {
        this.inventory = QQ, this.pending = new Map
      }
      onPlace(QQ) {
        var WQ;
        const XQ = this.inventory.selectedSlot(),
          wQ = this.inventory.itemAt(XQ);
        (null === wQ || void 0 === wQ ? void 0 : wQ.name) === QQ && (null !== (WQ = wQ.amount) && void 0 !== WQ ? WQ : 1) <= 1 && pQ(QQ) && this.pending.set(XQ, QQ)
      }
      onDrop(QQ, WQ) {
        WQ < BQ.h && null === this.inventory.itemAt(WQ) && pQ(QQ) && this.refill(WQ, QQ)
      }
      fJ() {
        const QQ = [...this.pending];
        this.pending.clear();
        for (const [WQ, XQ] of QQ) null === this.inventory.itemAt(WQ) && this.refill(WQ, XQ)
      }
      refill(QQ, WQ) {
        const XQ = function(QQ, WQ, XQ, wQ) {
          let qQ, TQ = 1 / 0;
          for (const zQ of VQ) {
            if (zQ === WQ) continue;
            const sQ = wQ(zQ);
            if (!sQ || zQ < BQ.h && WQ !== XQ) continue;
            const FQ = yQ(QQ, sQ.name);
            void 0 !== FQ && FQ < TQ && (qQ = zQ, TQ = FQ)
          }
          return qQ
        }(WQ, QQ, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== XQ && this.inventory.swap(QQ, XQ)
      }
    }

    function pQ(QQ) {
      return !!gQ(QQ) || jQ(QQ)
    }
    var GQ = XQ(36900),
      UQ = XQ(78),
      bQ = XQ(1081),
      vQ = XQ.n(bQ);
    const dQ = "Lucky Clover",
      HQ = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function aQ(QQ) {
      return HQ[QQ][0]
    }

    function lQ(QQ) {
      return sQ.filter((WQ => QQ >= aQ(WQ)))
    }
    var hQ = XQ(382),
      iQ = XQ(2535),
      cQ = XQ(26),
      AQ = XQ(2737),
      RQ = XQ(1988),
      EQ = XQ(36891),
      CQ = XQ(1094);
    var uQ = XQ(1145);
    const LQ = {
      Basic: zQ.N.whiteUiText,
      Rare: zQ.N.goldUiText,
      Super: zQ.N.cyanUiText
    };
    let kQ = 1;

    function fQ() {
      const QQ = (0, iQ.g)("currencyAmounts"),
        WQ = null === QQ || void 0 === QQ ? void 0 : QQ.Clovers;
      return !WQ || WQ.hidden ? null : (0, uQ.jsx)(EQ.g, {
        children: (0, uQ.jsx)(SQ, {
          amount: WQ.amount
        })
      })
    }

    function SQ(QQ) {
      var WQ, XQ, wQ;
      let {
        amount: TQ
      } = QQ;
      const {
        openEverythingMenuName: FQ
      } = (0, cQ.n)(["openEverythingMenuName"]), PQ = (0, AQ.e)(), [gQ, JQ] = (0, qQ.useState)(TQ), [rQ, IQ] = (0, qQ.useState)(null), [jQ, BQ] = (0, qQ.useState)(0), [yQ, VQ] = (0, qQ.useState)([]), DQ = (0, qQ.useRef)(TQ), pQ = (0, qQ.useRef)(!1), GQ = (0, qQ.useRef)(null), bQ = FQ === hQ.r.SHOP;
      (0, qQ.useEffect)((() => {
        const QQ = DQ.current;
        if (DQ.current = TQ, TQ <= QQ || bQ) return void JQ(TQ);
        const WQ = PQ || yQ.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (XQ = TQ - QQ, wQ = !pQ.current, XQ <= 0 || !wQ && XQ < 40 ? 0 : Math.min(4, Math.ceil(XQ / 30)));
        var XQ, wQ;
        if (pQ.current = !0, lQ(TQ).length > lQ(QQ).length && BQ(kQ++), WQ > 0) {
          const QQ = [];
          for (let XQ = 0; XQ < WQ; XQ++) QQ.push({
            id: kQ++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * XQ
          });
          VQ((WQ => [...WQ, ...QQ]))
        }
        const qQ = WQ > 0 ? 600 : 0;
        IQ({
          id: kQ++,
          delayMs: qQ
        });
        const sQ = performance.now() + qQ;
        let FQ = 0;
        const gQ = WQ => {
          const XQ = zQ.b.clamp((WQ - sQ) / 600, 0, 1);
          JQ(Math.round(QQ + (TQ - QQ) * XQ)), XQ < 1 && (FQ = requestAnimationFrame(gQ))
        };
        return FQ = requestAnimationFrame(gQ), () => {
          cancelAnimationFrame(FQ)
        }
      }), [TQ, bQ]);
      const HQ = function(QQ) {
          var WQ;
          const XQ = null !== (WQ = sQ.find((WQ => QQ < aQ(WQ)))) && void 0 !== WQ ? WQ : "Super";
          return {
            rarity: XQ,
            progress: zQ.b.clamp(QQ / aQ(XQ), 0, 1)
          }
        }(gQ),
        iQ = lQ(gQ).at(-1);
      return (0, uQ.jsxs)(uQ.Fragment, {
        children: [(0, uQ.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, uQ.jsxs)("div", {
            className: vQ()("LuckyCloverWallet", {
              Capped: iQ && "Basic" !== iQ
            }),
            style: iQ && {
              "--luckyTierColour": LQ[iQ]
            },
            children: [(0, uQ.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${HQ.progress})`
              }
            }), jQ > 0 && (0, uQ.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(WQ=null===rQ||void 0===rQ?void 0:rQ.delayMs)&&void 0!==WQ?WQ:0}ms`
              }
            }, jQ), (0, uQ.jsx)("div", {
              ref: GQ,
              className: vQ()("LuckyCloverWalletIcon", rQ && "Bounce"),
              style: {
                animationDelay: `${null!==(wQ=null===rQ||void 0===rQ?void 0:rQ.delayMs)&&void 0!==wQ?wQ:0}ms`
              },
              children: (0, uQ.jsx)(RQ.d, {
                itemName: dQ,
                amount: 0
              })
            }, null !== (XQ = null === rQ || void 0 === rQ ? void 0 : rQ.id) && void 0 !== XQ ? XQ : 0), (0, uQ.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: gQ
            }), iQ && (0, uQ.jsx)(CQ.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, UQ.createPortal)(yQ.map((QQ => (0, uQ.jsx)(tQ, {
          flyer: QQ,
          target: GQ,
          onDone: () => {
            VQ((WQ => WQ.filter((WQ => WQ.id !== QQ.id))))
          }
        }, QQ.id))), document.body)]
      })
    }

    function tQ(QQ) {
      let {
        flyer: WQ,
        target: XQ,
        onDone: wQ
      } = QQ;
      const TQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        var QQ;
        const qQ = null === (QQ = XQ.current) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
        if (!TQ.current || !qQ) return void wQ();
        const {
          x: zQ,
          y: sQ
        } = WQ, FQ = zQ + 140 * (Math.random() - .5), PQ = sQ - 30 - 40 * Math.random(), gQ = TQ.current.animate([{
          transform: `translate(${zQ}px, ${sQ}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${FQ}px, ${PQ}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${qQ.left}px, ${qQ.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: WQ.delayMs,
          fill: "backwards"
        });
        return gQ.onfinish = wQ, () => {
          gQ.cancel()
        }
      }), []), (0, uQ.jsx)("div", {
        ref: TQ,
        className: "LuckyCloverFlying",
        children: (0, uQ.jsx)(RQ.d, {
          itemName: dQ,
          amount: 0
        })
      })
    }
    var oQ = XQ(31);
    const eQ = "luckyGearUpgradeView",
      nQ = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function xQ(QQ) {
      var WQ;
      return null !== (WQ = nQ[QQ.split(" ")[0]]) && void 0 !== WQ ? WQ : "#e07bff"
    }
    class YQ {
      constructor(QQ, WQ) {
        this.selectedSlot = QQ, this.itemAt = WQ, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      gj(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [XQ, wQ, qQ] of QQ) this.rings.push({
          id: this.nextId++,
          slot: XQ,
          colour: xQ(qQ),
          until: WQ + 1200
        }), XQ !== this.selectedSlot() && this.unseen.set(XQ, {
          from: wQ,
          to: qQ
        });
        this.mB()
      }
      fJ() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const WQ = this.rings.filter((WQ => WQ.until > QQ));
        let XQ = WQ.length !== this.rings.length;
        this.rings = WQ;
        for (const [wQ, {
            from: qQ,
            to: TQ
          }] of this.unseen) {
          const QQ = this.itemAt(wQ);
          (wQ === this.selectedSlot() || QQ !== TQ && QQ !== qQ) && (this.unseen.delete(wQ), XQ = !0)
        }
        XQ && this.mB()
      }
      mB() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, oQ.k.mB(eQ, this.view)
      }
    }
    var NQ = XQ(1498);

    function ZQ(QQ) {
      return document.querySelector(`.HotBar [data-inven-idx="${QQ}"]`)
    }

    function OQ(QQ) {
      let {
        ring: WQ
      } = QQ;
      const [XQ, wQ] = (0, qQ.useState)(null);
      return (0, qQ.useLayoutEffect)((() => {
        var QQ, XQ;
        wQ(null !== (QQ = null === (XQ = ZQ(WQ.slot)) || void 0 === XQ ? void 0 : XQ.getBoundingClientRect()) && void 0 !== QQ ? QQ : null)
      }), [WQ]), XQ ? (0, uQ.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: XQ.left,
          top: XQ.top,
          width: XQ.width,
          height: XQ.height,
          "--ringColour": WQ.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function KQ(QQ) {
      let {
        slot: WQ
      } = QQ;
      const [XQ, wQ] = (0, qQ.useState)(null);
      return (0, qQ.useLayoutEffect)((() => {
        const QQ = () => {
          wQ(ZQ(WQ))
        };
        QQ();
        const XQ = new MutationObserver(QQ),
          qQ = document.querySelector(".BottomMiddleElements");
        return qQ && XQ.observe(qQ, {
          childList: !0,
          subtree: !0
        }), () => {
          XQ.disconnect()
        }
      }), [WQ]), XQ ? (0, UQ.createPortal)((0, uQ.jsx)("div", {
        className: "LuckyGearUnseen"
      }), XQ) : null
    }

    function mQ(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, NQ.j)(eQ, WQ.getView());
      return (0, uQ.jsxs)(uQ.Fragment, {
        children: [XQ.rings.map((QQ => (0, uQ.jsx)(OQ, {
          ring: QQ
        }, QQ.id))), XQ.unseenSlots.map((QQ => (0, uQ.jsx)(KQ, {
          slot: QQ
        }, QQ)))]
      })
    }
    const MQ = function(QQ, WQ, XQ, zQ) {
      let sQ, {
          localPlayerId: FQ
        } = zQ,
        PQ = null;
      const gQ = new DQ({
          itemAt: QQ => sQ.getItemSlot(FQ, QQ),
          selectedSlot: () => sQ.getSelectedInventorySlotI(FQ),
          swap: (QQ, WQ) => {
            sQ.swapInventorySlots(QQ, WQ)
          }
        }),
        JQ = new YQ((() => sQ.getSelectedInventorySlotI(FQ)), (QQ => {
          var WQ;
          return null === (WQ = sQ.getItemSlot(FQ, QQ)) || void 0 === WQ ? void 0 : WQ.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, TQ.e)()
        },
        onCreate: QQ => {
          sQ = QQ, PQ = (0, GQ.A)((0, qQ.createElement)(qQ.Fragment, null, (0, qQ.createElement)(fQ), (0, qQ.createElement)(mQ, {
            controller: JQ
          })))
        },
        onClose: () => {
          var QQ;
          null === (QQ = PQ) || void 0 === QQ || QQ()
        },
        fJ: () => {
          gQ.fJ(), JQ.fJ()
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          "luckyGearUpgrade" === QQ && JQ.gj(WQ)
        },
        onPlayerChangeBlock: (QQ, WQ, XQ, wQ, qQ, TQ) => {
          "Air" !== TQ && gQ.onPlace(TQ)
        },
        onPlayerDropItem: (QQ, WQ, XQ, wQ) => {
          gQ.onDrop(WQ, wQ)
        },
        onPlayerAltAction: (QQ, WQ, XQ, qQ, TQ, zQ) => {
          if (!zQ || "Mesh" !== sQ.getEntityType(zQ)) return;
          const FQ = sQ.getEntityName(zQ),
            PQ = Object.values(wQ).find((QQ => QQ.name === FQ));
          PQ && sQ.openShop(QQ, !1, PQ.shopTab)
        }
      }
    }
  },
  38311: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(402),
      qQ = XQ(37217),
      TQ = XQ(4789);
    const zQ = ["Leaf Bed", "_Leaf Bed Head", ...wQ.Fc.flatMap((QQ => [`${QQ} Bed`, `_${QQ} Bed Head`, `${QQ} Strongbed`, `_${QQ} Strongbed Head`]))];

    function sQ() {
      let QQ;
      return {
        onCreate(WQ) {
          QQ = WQ
        },
        altVetoBlocks: zQ,
        onPlayerAttemptAltAction(WQ, XQ, wQ, zQ, sQ, FQ) {
          var PQ;
          if ((0, qQ.e)(QQ.getMetaInfo(sQ).rootName) && !QQ.isEntityInteractable(FQ) && (0, TQ.g)(null === (PQ = QQ.wXQ(WQ)) || void 0 === PQ ? void 0 : PQ.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37217: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
    }

    function TQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function zQ(QQ) {
      return wQ(QQ) || qQ(QQ) || TQ(QQ)
    }
    XQ.d(WQ, {
      e: () => zQ,
      f: () => wQ,
      h: () => TQ,
      l: () => qQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);