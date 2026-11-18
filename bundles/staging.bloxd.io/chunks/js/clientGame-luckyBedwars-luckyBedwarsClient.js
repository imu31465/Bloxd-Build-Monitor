export const id = 19;
export const ids = [19];
export const modules = {
  35658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      f: () => nJ,
      j: () => DJ,
      m: () => hJ
    });
    var FJ = ZJ(8557),
      UJ = ZJ(35661),
      eJ = ZJ(35665),
      XJ = ZJ(8068),
      AJ = ZJ(1326),
      qJ = ZJ(47),
      jJ = ZJ(60),
      YJ = ZJ(990);

    function hJ() {
      var JJ;
      return (0, AJ.m)(UJ.b, (0, UJ.m)()), (0, YJ.jsx)(YJ.Fragment, {
        children: null === (JJ = (0, UJ.m)()) || void 0 === JJ ? void 0 : JJ.content
      })
    }

    function DJ(JJ) {
      var cJ;
      let {
        show: ZJ
      } = JJ;
      (0, AJ.m)(UJ.b, (0, UJ.m)());
      const jJ = null === (cJ = (0, UJ.m)()) || void 0 === cJ ? void 0 : cJ.menu;
      return (0, qJ.useEffect)((() => {
        var JJ;
        ZJ || (null === jJ || void 0 === jJ || null === (JJ = jJ.onClose) || void 0 === JJ || JJ.call(jJ), (0, eJ.m)())
      }), [ZJ, jJ]), (0, qJ.useEffect)((() => ZJ ? (0, XJ.f)(eJ.v, eJ.c) : void 0), [ZJ]), (0, YJ.jsx)(FJ.c, {
        showing: ZJ,
        globallyUniqueKey: "clientGameMenu",
        children: null === jJ || void 0 === jJ ? void 0 : jJ.content
      })
    }

    function sJ(JJ) {
      let {
        placement: cJ = "bottom"
      } = JJ;
      return (0, YJ.jsx)("div", {
        id: `clientGameHud-${cJ}`,
        style: {
          display: "contents"
        }
      })
    }

    function nJ(JJ) {
      let {
        children: cJ,
        placement: ZJ = "bottom"
      } = JJ;
      const [FJ, UJ] = (0, qJ.useState)(null);
      return (0, qJ.useEffect)((() => {
        UJ(document.getElementById(`clientGameHud-${ZJ}`))
      }), [ZJ]), FJ ? (0, jJ.createPortal)(cJ, FJ) : null
    }
  },
  8557: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3957),
      UJ = ZJ(3966);

    function eJ(JJ) {
      let {
        children: cJ,
        showing: ZJ,
        globallyUniqueKey: eJ,
        alwaysMountChildren: XJ = !1,
        doGameplayStartStopOnShow: AJ = !0,
        keepsMovement: qJ = !1
      } = JJ;
      return (0, UJ.c)(!0, ZJ, eJ, qJ), (0, FJ.c)(AJ, ZJ), ZJ || XJ ? cJ : null
    }
  },
  8068: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      f: () => UJ
    });
    let FJ = null;
    const UJ = function(JJ) {
        const cJ = {
          cycle: JJ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FJ = cJ, () => {
          FJ === cJ && (FJ = null)
        }
      },
      eJ = () => {
        var JJ;
        return null !== (JJ = FJ) && void 0 !== JJ && JJ.canCycle() ? FJ.cycle : null
      }
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  38402: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => lJ
    });
    const FJ = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var UJ = ZJ(47),
      eJ = ZJ(37001),
      XJ = ZJ(235);
    const AJ = ["Basic", "Rare", "Super"];

    function qJ(JJ, cJ) {
      return `${"Basic"===cJ?"":`${cJ} `}${"Simple"===JJ?"":`${JJ} `}Lucky Block`
    }
    const jJ = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((JJ => AJ.map((cJ => [qJ(JJ, cJ), {
      category: JJ,
      rarity: cJ
    }])))));
    jJ.keys();

    function YJ(JJ) {
      return jJ.get(JJ)
    }
    const hJ = "Obsidian",
      DJ = ["Cobweb"],
      sJ = [...["Red", "Blue", "Green", "Yellow"].map((JJ => `${(0,XJ.X)(JJ)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", hJ, ...DJ];

    function nJ(JJ) {
      return sJ.includes(JJ)
    }
    var GJ = ZJ(535);

    function fJ(JJ, cJ) {
      const ZJ = YJ(JJ);
      if (ZJ) {
        const JJ = YJ(cJ);
        if (!JJ) return;
        const FJ = AJ.length - 1 - AJ.indexOf(JJ.rarity);
        return (JJ.category === ZJ.category ? 0 : 1) * AJ.length + FJ
      }
      if (!nJ(JJ)) return;
      if (cJ === JJ) return 0;
      const FJ = JJ => nJ(JJ) && !DJ.includes(JJ) && JJ !== hJ;
      return FJ(JJ) && FJ(cJ) ? 1 : void 0
    }
    const xJ = [...Array.from({
      length: GJ.t - GJ.p
    }, ((JJ, cJ) => GJ.p + cJ)), ...Array.from({
      length: GJ.p
    }, ((JJ, cJ) => cJ))];
    class rJ {
      constructor(JJ) {
        this.inventory = JJ, this.pending = new Map
      }
      onPlace(JJ) {
        var cJ;
        const ZJ = this.inventory.selectedSlot(),
          FJ = this.inventory.itemAt(ZJ);
        (null === FJ || void 0 === FJ ? void 0 : FJ.name) === JJ && (null !== (cJ = FJ.amount) && void 0 !== cJ ? cJ : 1) <= 1 && vJ(JJ) && this.pending.set(ZJ, JJ)
      }
      onDrop(JJ, cJ) {
        cJ < GJ.p && null === this.inventory.itemAt(cJ) && vJ(JJ) && this.refill(cJ, JJ)
      }
      Hh() {
        const JJ = [...this.pending];
        this.pending.clear();
        for (const [cJ, ZJ] of JJ) null === this.inventory.itemAt(cJ) && this.refill(cJ, ZJ)
      }
      refill(JJ, cJ) {
        const ZJ = function(JJ, cJ, ZJ, FJ) {
          let UJ, eJ = 1 / 0;
          for (const XJ of xJ) {
            if (XJ === cJ) continue;
            const AJ = FJ(XJ);
            if (!AJ || XJ < GJ.p && cJ !== ZJ) continue;
            const qJ = fJ(JJ, AJ.name);
            void 0 !== qJ && qJ < eJ && (UJ = XJ, eJ = qJ)
          }
          return UJ
        }(cJ, JJ, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== ZJ && this.inventory.swap(JJ, ZJ)
      }
    }

    function vJ(JJ) {
      return !!YJ(JJ) || nJ(JJ)
    }
    var mJ = ZJ(35661),
      QJ = ZJ(60),
      EJ = ZJ(926),
      VJ = ZJ.n(EJ);
    const KJ = "Lucky Clover",
      yJ = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function SJ(JJ) {
      return yJ[JJ][0]
    }

    function IJ(JJ) {
      return AJ.filter((cJ => JJ >= SJ(cJ)))
    }
    var MJ = ZJ(227),
      bJ = ZJ(2175),
      wJ = ZJ(13),
      WJ = ZJ(2231),
      gJ = ZJ(1688),
      HJ = ZJ(35658),
      PJ = ZJ(942);
    var kJ = ZJ(990);
    const pJ = {
      Basic: XJ.D.whiteUiText,
      Rare: XJ.D.goldUiText,
      Super: XJ.D.cyanUiText
    };
    let dJ = 1;

    function zJ() {
      const JJ = (0, bJ.f)("currencyAmounts"),
        cJ = null === JJ || void 0 === JJ ? void 0 : JJ.Clovers;
      return !cJ || cJ.hidden ? null : (0, kJ.jsx)(HJ.f, {
        children: (0, kJ.jsx)(NJ, {
          amount: cJ.amount
        })
      })
    }

    function NJ(JJ) {
      var cJ, ZJ, FJ;
      let {
        amount: eJ
      } = JJ;
      const {
        openEverythingMenuName: qJ
      } = (0, wJ.j)(["openEverythingMenuName"]), jJ = (0, WJ.c)(), [YJ, hJ] = (0, UJ.useState)(eJ), [DJ, sJ] = (0, UJ.useState)(null), [nJ, GJ] = (0, UJ.useState)(0), [fJ, xJ] = (0, UJ.useState)([]), rJ = (0, UJ.useRef)(eJ), vJ = (0, UJ.useRef)(!1), mJ = (0, UJ.useRef)(null), EJ = qJ === MJ.m.SHOP;
      (0, UJ.useEffect)((() => {
        const JJ = rJ.current;
        if (rJ.current = eJ, eJ <= JJ || EJ) return void hJ(eJ);
        const cJ = jJ || fJ.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (ZJ = eJ - JJ, FJ = !vJ.current, ZJ <= 0 || !FJ && ZJ < 40 ? 0 : Math.min(4, Math.ceil(ZJ / 30)));
        var ZJ, FJ;
        if (vJ.current = !0, IJ(eJ).length > IJ(JJ).length && GJ(dJ++), cJ > 0) {
          const JJ = [];
          for (let ZJ = 0; ZJ < cJ; ZJ++) JJ.push({
            id: dJ++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * ZJ
          });
          xJ((cJ => [...cJ, ...JJ]))
        }
        const UJ = cJ > 0 ? 600 : 0;
        sJ({
          id: dJ++,
          delayMs: UJ
        });
        const AJ = performance.now() + UJ;
        let qJ = 0;
        const YJ = cJ => {
          const ZJ = XJ.c.clamp((cJ - AJ) / 600, 0, 1);
          hJ(Math.round(JJ + (eJ - JJ) * ZJ)), ZJ < 1 && (qJ = requestAnimationFrame(YJ))
        };
        return qJ = requestAnimationFrame(YJ), () => {
          cancelAnimationFrame(qJ)
        }
      }), [eJ, EJ]);
      const yJ = function(JJ) {
          var cJ;
          const ZJ = null !== (cJ = AJ.find((cJ => JJ < SJ(cJ)))) && void 0 !== cJ ? cJ : "Super";
          return {
            rarity: ZJ,
            progress: XJ.c.clamp(JJ / SJ(ZJ), 0, 1)
          }
        }(YJ),
        bJ = IJ(YJ).at(-1);
      return (0, kJ.jsxs)(kJ.Fragment, {
        children: [(0, kJ.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, kJ.jsxs)("div", {
            className: VJ()("LuckyCloverWallet", {
              Capped: bJ && "Basic" !== bJ
            }),
            style: bJ && {
              "--luckyTierColour": pJ[bJ]
            },
            children: [(0, kJ.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${yJ.progress})`
              }
            }), nJ > 0 && (0, kJ.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(cJ=null===DJ||void 0===DJ?void 0:DJ.delayMs)&&void 0!==cJ?cJ:0}ms`
              }
            }, nJ), (0, kJ.jsx)("div", {
              ref: mJ,
              className: VJ()("LuckyCloverWalletIcon", DJ && "Bounce"),
              style: {
                animationDelay: `${null!==(FJ=null===DJ||void 0===DJ?void 0:DJ.delayMs)&&void 0!==FJ?FJ:0}ms`
              },
              children: (0, kJ.jsx)(gJ.d, {
                itemName: KJ,
                amount: 0
              })
            }, null !== (ZJ = null === DJ || void 0 === DJ ? void 0 : DJ.id) && void 0 !== ZJ ? ZJ : 0), (0, kJ.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: YJ
            }), bJ && (0, kJ.jsx)(PJ.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, QJ.createPortal)(fJ.map((JJ => (0, kJ.jsx)(OJ, {
          flyer: JJ,
          target: mJ,
          onDone: () => {
            xJ((cJ => cJ.filter((cJ => cJ.id !== JJ.id))))
          }
        }, JJ.id))), document.body)]
      })
    }

    function OJ(JJ) {
      let {
        flyer: cJ,
        target: ZJ,
        onDone: FJ
      } = JJ;
      const eJ = (0, UJ.useRef)(null);
      return (0, UJ.useEffect)((() => {
        var JJ;
        const UJ = null === (JJ = ZJ.current) || void 0 === JJ ? void 0 : JJ.getBoundingClientRect();
        if (!eJ.current || !UJ) return void FJ();
        const {
          x: XJ,
          y: AJ
        } = cJ, qJ = XJ + 140 * (Math.random() - .5), jJ = AJ - 30 - 40 * Math.random(), YJ = eJ.current.animate([{
          transform: `translate(${XJ}px, ${AJ}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${qJ}px, ${jJ}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${UJ.left}px, ${UJ.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: cJ.delayMs,
          fill: "backwards"
        });
        return YJ.onfinish = FJ, () => {
          YJ.cancel()
        }
      }), []), (0, kJ.jsx)("div", {
        ref: eJ,
        className: "LuckyCloverFlying",
        children: (0, kJ.jsx)(gJ.d, {
          itemName: KJ,
          amount: 0
        })
      })
    }
    var TJ = ZJ(17);
    const CJ = "luckyGearUpgradeView",
      uJ = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function iJ(JJ) {
      var cJ;
      return null !== (cJ = uJ[JJ.split(" ")[0]]) && void 0 !== cJ ? cJ : "#e07bff"
    }
    class RJ {
      constructor(JJ, cJ) {
        this.selectedSlot = JJ, this.itemAt = cJ, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Qn(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [ZJ, FJ, UJ] of JJ) this.rings.push({
          id: this.nextId++,
          slot: ZJ,
          colour: iJ(UJ),
          until: cJ + 1200
        }), ZJ !== this.selectedSlot() && this.unseen.set(ZJ, {
          from: FJ,
          to: UJ
        });
        this.Uf()
      }
      Hh() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const cJ = this.rings.filter((cJ => cJ.until > JJ));
        let ZJ = cJ.length !== this.rings.length;
        this.rings = cJ;
        for (const [FJ, {
            from: UJ,
            to: eJ
          }] of this.unseen) {
          const JJ = this.itemAt(FJ);
          (FJ === this.selectedSlot() || JJ !== eJ && JJ !== UJ) && (this.unseen.delete(FJ), ZJ = !0)
        }
        ZJ && this.Uf()
      }
      Uf() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, TJ.i.Uf(CJ, this.view)
      }
    }
    var LJ = ZJ(1326);

    function aJ(JJ) {
      return document.querySelector(`.HotBar [data-inven-idx="${JJ}"]`)
    }

    function BJ(JJ) {
      let {
        ring: cJ
      } = JJ;
      const [ZJ, FJ] = (0, UJ.useState)(null);
      return (0, UJ.useLayoutEffect)((() => {
        var JJ, ZJ;
        FJ(null !== (JJ = null === (ZJ = aJ(cJ.slot)) || void 0 === ZJ ? void 0 : ZJ.getBoundingClientRect()) && void 0 !== JJ ? JJ : null)
      }), [cJ]), ZJ ? (0, kJ.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: ZJ.left,
          top: ZJ.top,
          width: ZJ.width,
          height: ZJ.height,
          "--ringColour": cJ.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function tJ(JJ) {
      let {
        slot: cJ
      } = JJ;
      const [ZJ, FJ] = (0, UJ.useState)(null);
      return (0, UJ.useLayoutEffect)((() => {
        const JJ = () => {
          FJ(aJ(cJ))
        };
        JJ();
        const ZJ = new MutationObserver(JJ),
          UJ = document.querySelector(".BottomMiddleElements");
        return UJ && ZJ.observe(UJ, {
          childList: !0,
          subtree: !0
        }), () => {
          ZJ.disconnect()
        }
      }), [cJ]), ZJ ? (0, QJ.createPortal)((0, kJ.jsx)("div", {
        className: "LuckyGearUnseen"
      }), ZJ) : null
    }

    function oJ(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, LJ.m)(CJ, cJ.getView());
      return (0, kJ.jsxs)(kJ.Fragment, {
        children: [ZJ.rings.map((JJ => (0, kJ.jsx)(BJ, {
          ring: JJ
        }, JJ.id))), ZJ.unseenSlots.map((JJ => (0, kJ.jsx)(tJ, {
          slot: JJ
        }, JJ)))]
      })
    }
    const lJ = function(JJ, cJ, ZJ, XJ) {
      let AJ, {
          localPlayerId: qJ
        } = XJ,
        jJ = null;
      const YJ = new rJ({
          itemAt: JJ => AJ.getItemSlot(qJ, JJ),
          selectedSlot: () => AJ.getSelectedInventorySlotI(qJ),
          swap: (JJ, cJ) => {
            AJ.swapInventorySlots(JJ, cJ)
          }
        }),
        hJ = new RJ((() => AJ.getSelectedInventorySlotI(qJ)), (JJ => {
          var cJ;
          return null === (cJ = AJ.getItemSlot(qJ, JJ)) || void 0 === cJ ? void 0 : cJ.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, eJ.c)()
        },
        onCreate: JJ => {
          AJ = JJ, jJ = (0, mJ.u)((0, UJ.createElement)(UJ.Fragment, null, (0, UJ.createElement)(zJ), (0, UJ.createElement)(oJ, {
            controller: hJ
          })))
        },
        onClose: () => {
          var JJ;
          null === (JJ = jJ) || void 0 === JJ || JJ()
        },
        Hh: () => {
          YJ.Hh(), hJ.Hh()
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          "luckyGearUpgrade" === JJ && hJ.Qn(cJ)
        },
        onPlayerChangeBlock: (JJ, cJ, ZJ, FJ, UJ, eJ) => {
          "Air" !== eJ && YJ.onPlace(eJ)
        },
        onPlayerDropItem: (JJ, cJ, ZJ, FJ) => {
          YJ.onDrop(cJ, FJ)
        },
        onPlayerAltAction: (JJ, cJ, ZJ, UJ, eJ, XJ) => {
          if (!XJ || "Mesh" !== AJ.getEntityType(XJ)) return;
          const qJ = AJ.getEntityName(XJ),
            jJ = Object.values(FJ).find((JJ => JJ.name === qJ));
          jJ && AJ.openShop(JJ, !1, jJ.shopTab)
        }
      }
    }
  },
  37001: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(35948),
      eJ = ZJ(3898);
    const XJ = ["Leaf Bed", "_Leaf Bed Head", ...FJ.pc.flatMap((JJ => [`${JJ} Bed`, `_${JJ} Bed Head`, `${JJ} Strongbed`, `_${JJ} Strongbed Head`]))];

    function AJ() {
      let JJ;
      return {
        onCreate(cJ) {
          JJ = cJ
        },
        altVetoBlocks: XJ,
        onPlayerAttemptAltAction(cJ, ZJ, FJ, XJ, AJ, qJ) {
          var jJ;
          if ((0, UJ.e)(JJ.getMetaInfo(AJ).rootName) && !JJ.isEntityInteractable(qJ) && (0, eJ.d)(null === (jJ = JJ.WcJ(cJ)) || void 0 === jJ ? void 0 : jJ.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35948: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return JJ.includes("Leaf Bed")
    }

    function UJ(JJ) {
      return / Bed(?: Head)?(?:\||$)/.test(JJ) && !FJ(JJ)
    }

    function eJ(JJ) {
      return JJ.includes(" Strongbed")
    }

    function XJ(JJ) {
      return FJ(JJ) || UJ(JJ) || eJ(JJ)
    }
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => FJ,
      l: () => eJ,
      m: () => UJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);