export const id = 19;
export const ids = [19];
export const modules = {
  36483: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => MC,
      c: () => gC,
      d: () => NC,
      f: () => WC
    });
    var QC = ZC(34153),
      wC = ZC(36488),
      bC = ZC(36490),
      nC = ZC(8735),
      fC = ZC(1383),
      oC = ZC(48),
      qC = ZC(60),
      FC = ZC(1056);

    function WC() {
      var CC;
      return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
        children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
      })
    }

    function NC(CC) {
      var zC;
      let {
        show: ZC
      } = CC;
      (0, fC.f)(wC.d, (0, wC.q)());
      const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
      return (0, oC.useEffect)((() => {
        var CC;
        ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
      }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
        showing: ZC,
        globallyUniqueKey: "clientGameMenu",
        children: null === qC || void 0 === qC ? void 0 : qC.content
      })
    }

    function MC(CC) {
      let {
        placement: zC = "bottom"
      } = CC;
      return (0, FC.jsx)("div", {
        id: `clientGameHud-${zC}`,
        style: {
          display: "contents"
        }
      })
    }

    function gC(CC) {
      let {
        children: zC,
        placement: ZC = "bottom"
      } = CC;
      const [QC, wC] = (0, oC.useState)(null);
      return (0, oC.useEffect)((() => {
        wC(document.getElementById(`clientGameHud-${ZC}`))
      }), [ZC]), QC ? (0, qC.createPortal)(zC, QC) : null
    }
  },
  34153: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(4473),
      wC = ZC(4479);

    function bC(CC) {
      let {
        children: zC,
        showing: ZC,
        globallyUniqueKey: bC,
        alwaysMountChildren: nC = !1,
        doGameplayStartStopOnShow: fC = !0,
        keepsMovement: oC = !1
      } = CC;
      return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
    }
  },
  8735: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => wC
    });
    let QC = null;
    const wC = function(CC) {
        const zC = {
          cycle: CC,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QC = zC, () => {
          QC === zC && (QC = null)
        }
      },
      bC = () => {
        var CC;
        return null !== (CC = QC) && void 0 !== CC && CC.canCycle() ? QC.cycle : null
      }
  },
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  39269: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => VC
    });
    const QC = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var wC = ZC(48),
      bC = ZC(37868),
      nC = ZC(326);
    const fC = ["Basic", "Rare", "Super"];

    function oC(CC, zC) {
      return `${"Basic"===zC?"":`${zC} `}${"Simple"===CC?"":`${CC} `}Lucky Block`
    }
    const qC = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((CC => fC.map((zC => [oC(CC, zC), {
      category: CC,
      rarity: zC
    }])))));
    qC.keys();

    function FC(CC) {
      return qC.get(CC)
    }
    const WC = "Obsidian",
      NC = ["Cobweb"],
      MC = [...["Red", "Blue", "Green", "Yellow"].map((CC => `${(0,nC.S)(CC)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", WC, ...NC];

    function gC(CC) {
      return MC.includes(CC)
    }
    var SC = ZC(600);

    function pC(CC, zC) {
      const ZC = FC(CC);
      if (ZC) {
        const CC = FC(zC);
        if (!CC) return;
        const QC = fC.length - 1 - fC.indexOf(CC.rarity);
        return (CC.category === ZC.category ? 0 : 1) * fC.length + QC
      }
      if (!gC(CC)) return;
      if (zC === CC) return 0;
      const QC = CC => gC(CC) && !NC.includes(CC) && CC !== WC;
      return QC(CC) && QC(zC) ? 1 : void 0
    }
    const PC = [...Array.from({
      length: SC.r - SC.q
    }, ((CC, zC) => SC.q + zC)), ...Array.from({
      length: SC.q
    }, ((CC, zC) => zC))];
    class GC {
      constructor(CC) {
        this.inventory = CC, this.pending = new Map
      }
      onPlace(CC) {
        var zC;
        const ZC = this.inventory.selectedSlot(),
          QC = this.inventory.itemAt(ZC);
        (null === QC || void 0 === QC ? void 0 : QC.name) === CC && (null !== (zC = QC.amount) && void 0 !== zC ? zC : 1) <= 1 && RC(CC) && this.pending.set(ZC, CC)
      }
      onDrop(CC, zC) {
        zC < SC.q && null === this.inventory.itemAt(zC) && RC(CC) && this.refill(zC, CC)
      }
      ZN() {
        const CC = [...this.pending];
        this.pending.clear();
        for (const [zC, ZC] of CC) null === this.inventory.itemAt(zC) && this.refill(zC, ZC)
      }
      refill(CC, zC) {
        const ZC = function(CC, zC, ZC, QC) {
          let wC, bC = 1 / 0;
          for (const nC of PC) {
            if (nC === zC) continue;
            const fC = QC(nC);
            if (!fC || nC < SC.q && zC !== ZC) continue;
            const oC = pC(CC, fC.name);
            void 0 !== oC && oC < bC && (wC = nC, bC = oC)
          }
          return wC
        }(zC, CC, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== ZC && this.inventory.swap(CC, ZC)
      }
    }

    function RC(CC) {
      return !!FC(CC) || gC(CC)
    }
    var AC = ZC(36488),
      xC = ZC(60),
      JC = ZC(1002),
      IC = ZC.n(JC);
    const iC = "Lucky Clover",
      vC = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function eC(CC) {
      return vC[CC][0]
    }

    function hC(CC) {
      return fC.filter((zC => CC >= eC(zC)))
    }
    var KC = ZC(310),
      YC = ZC(2369),
      dC = ZC(20),
      mC = ZC(2557),
      HC = ZC(1822),
      EC = ZC(36483),
      lC = ZC(1013);
    var XC = ZC(1056);
    const cC = {
      Basic: nC.H.whiteUiText,
      Rare: nC.H.goldUiText,
      Super: nC.H.cyanUiText
    };
    let uC = 1;

    function rC() {
      const CC = (0, YC.h)("currencyAmounts"),
        zC = null === CC || void 0 === CC ? void 0 : CC.Clovers;
      return !zC || zC.hidden ? null : (0, XC.jsx)(EC.c, {
        children: (0, XC.jsx)(sC, {
          amount: zC.amount
        })
      })
    }

    function sC(CC) {
      var zC, ZC, QC;
      let {
        amount: bC
      } = CC;
      const {
        openEverythingMenuName: oC
      } = (0, dC.k)(["openEverythingMenuName"]), qC = (0, mC.c)(), [FC, WC] = (0, wC.useState)(bC), [NC, MC] = (0, wC.useState)(null), [gC, SC] = (0, wC.useState)(0), [pC, PC] = (0, wC.useState)([]), GC = (0, wC.useRef)(bC), RC = (0, wC.useRef)(!1), AC = (0, wC.useRef)(null), JC = oC === KC.o.SHOP;
      (0, wC.useEffect)((() => {
        const CC = GC.current;
        if (GC.current = bC, bC <= CC || JC) return void WC(bC);
        const zC = qC || pC.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (ZC = bC - CC, QC = !RC.current, ZC <= 0 || !QC && ZC < 40 ? 0 : Math.min(4, Math.ceil(ZC / 30)));
        var ZC, QC;
        if (RC.current = !0, hC(bC).length > hC(CC).length && SC(uC++), zC > 0) {
          const CC = [];
          for (let ZC = 0; ZC < zC; ZC++) CC.push({
            id: uC++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * ZC
          });
          PC((zC => [...zC, ...CC]))
        }
        const wC = zC > 0 ? 600 : 0;
        MC({
          id: uC++,
          delayMs: wC
        });
        const fC = performance.now() + wC;
        let oC = 0;
        const FC = zC => {
          const ZC = nC.c.clamp((zC - fC) / 600, 0, 1);
          WC(Math.round(CC + (bC - CC) * ZC)), ZC < 1 && (oC = requestAnimationFrame(FC))
        };
        return oC = requestAnimationFrame(FC), () => {
          cancelAnimationFrame(oC)
        }
      }), [bC, JC]);
      const vC = function(CC) {
          var zC;
          const ZC = null !== (zC = fC.find((zC => CC < eC(zC)))) && void 0 !== zC ? zC : "Super";
          return {
            rarity: ZC,
            progress: nC.c.clamp(CC / eC(ZC), 0, 1)
          }
        }(FC),
        YC = hC(FC).at(-1);
      return (0, XC.jsxs)(XC.Fragment, {
        children: [(0, XC.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, XC.jsxs)("div", {
            className: IC()("LuckyCloverWallet", {
              Capped: YC && "Basic" !== YC
            }),
            style: YC && {
              "--luckyTierColour": cC[YC]
            },
            children: [(0, XC.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${vC.progress})`
              }
            }), gC > 0 && (0, XC.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(zC=null===NC||void 0===NC?void 0:NC.delayMs)&&void 0!==zC?zC:0}ms`
              }
            }, gC), (0, XC.jsx)("div", {
              ref: AC,
              className: IC()("LuckyCloverWalletIcon", NC && "Bounce"),
              style: {
                animationDelay: `${null!==(QC=null===NC||void 0===NC?void 0:NC.delayMs)&&void 0!==QC?QC:0}ms`
              },
              children: (0, XC.jsx)(HC.e, {
                itemName: iC,
                amount: 0
              })
            }, null !== (ZC = null === NC || void 0 === NC ? void 0 : NC.id) && void 0 !== ZC ? ZC : 0), (0, XC.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: FC
            }), YC && (0, XC.jsx)(lC.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, xC.createPortal)(pC.map((CC => (0, XC.jsx)(TC, {
          flyer: CC,
          target: AC,
          onDone: () => {
            PC((zC => zC.filter((zC => zC.id !== CC.id))))
          }
        }, CC.id))), document.body)]
      })
    }

    function TC(CC) {
      let {
        flyer: zC,
        target: ZC,
        onDone: QC
      } = CC;
      const bC = (0, wC.useRef)(null);
      return (0, wC.useEffect)((() => {
        var CC;
        const wC = null === (CC = ZC.current) || void 0 === CC ? void 0 : CC.getBoundingClientRect();
        if (!bC.current || !wC) return void QC();
        const {
          x: nC,
          y: fC
        } = zC, oC = nC + 140 * (Math.random() - .5), qC = fC - 30 - 40 * Math.random(), FC = bC.current.animate([{
          transform: `translate(${nC}px, ${fC}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${oC}px, ${qC}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${wC.left}px, ${wC.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: zC.delayMs,
          fill: "backwards"
        });
        return FC.onfinish = QC, () => {
          FC.cancel()
        }
      }), []), (0, XC.jsx)("div", {
        ref: bC,
        className: "LuckyCloverFlying",
        children: (0, XC.jsx)(HC.e, {
          itemName: iC,
          amount: 0
        })
      })
    }
    var aC = ZC(28);
    const tC = "luckyGearUpgradeView",
      DC = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function jC(CC) {
      var zC;
      return null !== (zC = DC[CC.split(" ")[0]]) && void 0 !== zC ? zC : "#e07bff"
    }
    class yC {
      constructor(CC, zC) {
        this.selectedSlot = CC, this.itemAt = zC, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Ag(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [ZC, QC, wC] of CC) this.rings.push({
          id: this.nextId++,
          slot: ZC,
          colour: jC(wC),
          until: zC + 1200
        }), ZC !== this.selectedSlot() && this.unseen.set(ZC, {
          from: QC,
          to: wC
        });
        this.bp()
      }
      ZN() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const zC = this.rings.filter((zC => zC.until > CC));
        let ZC = zC.length !== this.rings.length;
        this.rings = zC;
        for (const [QC, {
            from: wC,
            to: bC
          }] of this.unseen) {
          const CC = this.itemAt(QC);
          (QC === this.selectedSlot() || CC !== bC && CC !== wC) && (this.unseen.delete(QC), ZC = !0)
        }
        ZC && this.bp()
      }
      bp() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, aC.o.bp(tC, this.view)
      }
    }
    var LC = ZC(1383);

    function UC(CC) {
      return document.querySelector(`.HotBar [data-inven-idx="${CC}"]`)
    }

    function BC(CC) {
      let {
        ring: zC
      } = CC;
      const [ZC, QC] = (0, wC.useState)(null);
      return (0, wC.useLayoutEffect)((() => {
        var CC, ZC;
        QC(null !== (CC = null === (ZC = UC(zC.slot)) || void 0 === ZC ? void 0 : ZC.getBoundingClientRect()) && void 0 !== CC ? CC : null)
      }), [zC]), ZC ? (0, XC.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: ZC.left,
          top: ZC.top,
          width: ZC.width,
          height: ZC.height,
          "--ringColour": zC.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function OC(CC) {
      let {
        slot: zC
      } = CC;
      const [ZC, QC] = (0, wC.useState)(null);
      return (0, wC.useLayoutEffect)((() => {
        const CC = () => {
          QC(UC(zC))
        };
        CC();
        const ZC = new MutationObserver(CC),
          wC = document.querySelector(".BottomMiddleElements");
        return wC && ZC.observe(wC, {
          childList: !0,
          subtree: !0
        }), () => {
          ZC.disconnect()
        }
      }), [zC]), ZC ? (0, xC.createPortal)((0, XC.jsx)("div", {
        className: "LuckyGearUnseen"
      }), ZC) : null
    }

    function kC(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, LC.f)(tC, zC.getView());
      return (0, XC.jsxs)(XC.Fragment, {
        children: [ZC.rings.map((CC => (0, XC.jsx)(BC, {
          ring: CC
        }, CC.id))), ZC.unseenSlots.map((CC => (0, XC.jsx)(OC, {
          slot: CC
        }, CC)))]
      })
    }
    const VC = function(CC, zC, ZC, nC) {
      let fC, {
          localPlayerId: oC
        } = nC,
        qC = null;
      const FC = new GC({
          itemAt: CC => fC.getItemSlot(oC, CC),
          selectedSlot: () => fC.getSelectedInventorySlotI(oC),
          swap: (CC, zC) => {
            fC.swapInventorySlots(CC, zC)
          }
        }),
        WC = new yC((() => fC.getSelectedInventorySlotI(oC)), (CC => {
          var zC;
          return null === (zC = fC.getItemSlot(oC, CC)) || void 0 === zC ? void 0 : zC.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, bC.c)()
        },
        onCreate: CC => {
          fC = CC, qC = (0, AC.C)((0, wC.createElement)(wC.Fragment, null, (0, wC.createElement)(rC), (0, wC.createElement)(kC, {
            controller: WC
          })))
        },
        onClose: () => {
          var CC;
          null === (CC = qC) || void 0 === CC || CC()
        },
        ZN: () => {
          FC.ZN(), WC.ZN()
        },
        onReceivedMessageFromServer: (CC, zC) => {
          "luckyGearUpgrade" === CC && WC.Ag(zC)
        },
        onPlayerChangeBlock: (CC, zC, ZC, QC, wC, bC) => {
          "Air" !== bC && FC.onPlace(bC)
        },
        onPlayerDropItem: (CC, zC, ZC, QC) => {
          FC.onDrop(zC, QC)
        },
        onPlayerAltAction: (CC, zC, ZC, wC, bC, nC) => {
          if (!nC || "Mesh" !== fC.getEntityType(nC)) return;
          const oC = fC.getEntityName(nC),
            qC = Object.values(QC).find((CC => CC.name === oC));
          qC && fC.openShop(CC, !1, qC.shopTab)
        }
      }
    }
  },
  37868: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC
    });
    var QC = ZC(326),
      wC = ZC(36796),
      bC = ZC(4402);
    const nC = ["Leaf Bed", "_Leaf Bed Head", ...QC.sc.flatMap((CC => [`${CC} Bed`, `_${CC} Bed Head`, `${CC} Strongbed`, `_${CC} Strongbed Head`]))];

    function fC() {
      let CC;
      return {
        onCreate(zC) {
          CC = zC
        },
        altVetoBlocks: nC,
        onPlayerAttemptAltAction(zC, ZC, QC, nC, fC, oC) {
          var qC;
          if ((0, wC.d)(CC.getMetaInfo(fC).rootName) && !CC.isEntityInteractable(oC) && (0, bC.c)(null === (qC = CC.XzC(zC)) || void 0 === qC ? void 0 : qC.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36796: (CC, zC, ZC) => {
    function QC(CC) {
      return CC.includes("Leaf Bed")
    }

    function wC(CC) {
      return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
    }

    function bC(CC) {
      return CC.includes(" Strongbed")
    }

    function nC(CC) {
      return QC(CC) || wC(CC) || bC(CC)
    }
    ZC.d(zC, {
      d: () => nC,
      g: () => QC,
      i: () => bC,
      l: () => wC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);