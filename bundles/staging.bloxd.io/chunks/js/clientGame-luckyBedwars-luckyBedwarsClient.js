export const id = 19;
export const ids = [19];
export const modules = {
  36577: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      g: () => ID,
      i: () => UD,
      l: () => AD
    });
    var pD = wD(34206),
      sD = wD(36580),
      KD = wD(36586),
      rD = wD(8726),
      LD = wD(1442),
      cD = wD(58),
      gD = wD(79),
      RD = wD(1096);

    function AD() {
      var DD;
      return (0, LD.k)(sD.c, (0, sD.p)()), (0, RD.jsx)(RD.Fragment, {
        children: null === (DD = (0, sD.p)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function UD(DD) {
      var zD;
      let {
        show: wD
      } = DD;
      (0, LD.k)(sD.c, (0, sD.p)());
      const gD = null === (zD = (0, sD.p)()) || void 0 === zD ? void 0 : zD.menu;
      return (0, cD.useEffect)((() => {
        var DD;
        wD || (null === gD || void 0 === gD || null === (DD = gD.onClose) || void 0 === DD || DD.call(gD), (0, KD.q)())
      }), [wD, gD]), (0, cD.useEffect)((() => wD ? (0, rD.g)(KD.y, KD.h) : void 0), [wD]), (0, RD.jsx)(pD.d, {
        showing: wD,
        globallyUniqueKey: "clientGameMenu",
        children: null === gD || void 0 === gD ? void 0 : gD.content
      })
    }

    function fD(DD) {
      let {
        placement: zD = "bottom"
      } = DD;
      return (0, RD.jsx)("div", {
        id: `clientGameHud-${zD}`,
        style: {
          display: "contents"
        }
      })
    }

    function ID(DD) {
      let {
        children: zD,
        placement: wD = "bottom"
      } = DD;
      const [pD, sD] = (0, cD.useState)(null);
      return (0, cD.useEffect)((() => {
        sD(document.getElementById(`clientGameHud-${wD}`))
      }), [wD]), pD ? (0, gD.createPortal)(zD, pD) : null
    }
  },
  34206: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(4555),
      sD = wD(4562);

    function KD(DD) {
      let {
        children: zD,
        showing: wD,
        globallyUniqueKey: KD,
        alwaysMountChildren: rD = !1,
        doGameplayStartStopOnShow: LD = !0,
        keepsMovement: cD = !1
      } = DD;
      return (0, sD.e)(!0, wD, KD, cD), (0, pD.b)(LD, wD), wD || rD ? zD : null
    }
  },
  8726: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      g: () => sD
    });
    let pD = null;
    const sD = function(DD) {
        const zD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pD = zD, () => {
          pD === zD && (pD = null)
        }
      },
      KD = () => {
        var DD;
        return null !== (DD = pD) && void 0 !== DD && DD.canCycle() ? pD.cycle : null
      }
  },
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  39390: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => qD
    });
    const pD = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var sD = wD(58),
      KD = wD(38005),
      rD = wD(351);
    const LD = ["Basic", "Rare", "Super"];

    function cD(DD, zD) {
      return `${"Basic"===zD?"":`${zD} `}${"Simple"===DD?"":`${DD} `}Lucky Block`
    }
    const gD = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((DD => LD.map((zD => [cD(DD, zD), {
      category: DD,
      rarity: zD
    }])))));
    gD.keys();

    function RD(DD) {
      return gD.get(DD)
    }
    const AD = "Obsidian",
      UD = ["Cobweb"],
      fD = [...["Red", "Blue", "Green", "Yellow"].map((DD => `${(0,rD.Z)(DD)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", AD, ...UD];

    function ID(DD) {
      return fD.includes(DD)
    }
    var BD = wD(619);

    function GD(DD, zD) {
      const wD = RD(DD);
      if (wD) {
        const DD = RD(zD);
        if (!DD) return;
        const pD = LD.length - 1 - LD.indexOf(DD.rarity);
        return (DD.category === wD.category ? 0 : 1) * LD.length + pD
      }
      if (!ID(DD)) return;
      if (zD === DD) return 0;
      const pD = DD => ID(DD) && !UD.includes(DD) && DD !== AD;
      return pD(DD) && pD(zD) ? 1 : void 0
    }
    const hD = [...Array.from({
      length: BD.k - BD.i
    }, ((DD, zD) => BD.i + zD)), ...Array.from({
      length: BD.i
    }, ((DD, zD) => zD))];
    class nD {
      constructor(DD) {
        this.inventory = DD, this.pending = new Map
      }
      onPlace(DD) {
        var zD;
        const wD = this.inventory.selectedSlot(),
          pD = this.inventory.itemAt(wD);
        (null === pD || void 0 === pD ? void 0 : pD.name) === DD && (null !== (zD = pD.amount) && void 0 !== zD ? zD : 1) <= 1 && MD(DD) && this.pending.set(wD, DD)
      }
      onDrop(DD, zD) {
        zD < BD.i && null === this.inventory.itemAt(zD) && MD(DD) && this.refill(zD, DD)
      }
      DU() {
        const DD = [...this.pending];
        this.pending.clear();
        for (const [zD, wD] of DD) null === this.inventory.itemAt(zD) && this.refill(zD, wD)
      }
      refill(DD, zD) {
        const wD = function(DD, zD, wD, pD) {
          let sD, KD = 1 / 0;
          for (const rD of hD) {
            if (rD === zD) continue;
            const LD = pD(rD);
            if (!LD || rD < BD.i && zD !== wD) continue;
            const cD = GD(DD, LD.name);
            void 0 !== cD && cD < KD && (sD = rD, KD = cD)
          }
          return sD
        }(zD, DD, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== wD && this.inventory.swap(DD, wD)
      }
    }

    function MD(DD) {
      return !!RD(DD) || ID(DD)
    }
    var OD = wD(36580),
      JD = wD(79),
      ED = wD(1044),
      QD = wD.n(ED);
    const XD = "Lucky Clover",
      VD = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function PD(DD) {
      return VD[DD][0]
    }

    function CD(DD) {
      return LD.filter((zD => DD >= PD(zD)))
    }
    var xD = wD(338),
      TD = wD(2402),
      bD = wD(20),
      jD = wD(2580),
      dD = wD(1915),
      SD = wD(36577),
      iD = wD(1057);
    var lD = wD(1096);
    const WD = {
      Basic: rD.I.whiteUiText,
      Rare: rD.I.goldUiText,
      Super: rD.I.cyanUiText
    };
    let ND = 1;

    function ZD() {
      const DD = (0, TD.h)("currencyAmounts"),
        zD = null === DD || void 0 === DD ? void 0 : DD.Clovers;
      return !zD || zD.hidden ? null : (0, lD.jsx)(SD.g, {
        children: (0, lD.jsx)(yD, {
          amount: zD.amount
        })
      })
    }

    function yD(DD) {
      var zD, wD, pD;
      let {
        amount: KD
      } = DD;
      const {
        openEverythingMenuName: cD
      } = (0, bD.n)(["openEverythingMenuName"]), gD = (0, jD.b)(), [RD, AD] = (0, sD.useState)(KD), [UD, fD] = (0, sD.useState)(null), [ID, BD] = (0, sD.useState)(0), [GD, hD] = (0, sD.useState)([]), nD = (0, sD.useRef)(KD), MD = (0, sD.useRef)(!1), OD = (0, sD.useRef)(null), ED = cD === xD.l.SHOP;
      (0, sD.useEffect)((() => {
        const DD = nD.current;
        if (nD.current = KD, KD <= DD || ED) return void AD(KD);
        const zD = gD || GD.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (wD = KD - DD, pD = !MD.current, wD <= 0 || !pD && wD < 40 ? 0 : Math.min(4, Math.ceil(wD / 30)));
        var wD, pD;
        if (MD.current = !0, CD(KD).length > CD(DD).length && BD(ND++), zD > 0) {
          const DD = [];
          for (let wD = 0; wD < zD; wD++) DD.push({
            id: ND++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * wD
          });
          hD((zD => [...zD, ...DD]))
        }
        const sD = zD > 0 ? 600 : 0;
        fD({
          id: ND++,
          delayMs: sD
        });
        const LD = performance.now() + sD;
        let cD = 0;
        const RD = zD => {
          const wD = rD.c.clamp((zD - LD) / 600, 0, 1);
          AD(Math.round(DD + (KD - DD) * wD)), wD < 1 && (cD = requestAnimationFrame(RD))
        };
        return cD = requestAnimationFrame(RD), () => {
          cancelAnimationFrame(cD)
        }
      }), [KD, ED]);
      const VD = function(DD) {
          var zD;
          const wD = null !== (zD = LD.find((zD => DD < PD(zD)))) && void 0 !== zD ? zD : "Super";
          return {
            rarity: wD,
            progress: rD.c.clamp(DD / PD(wD), 0, 1)
          }
        }(RD),
        TD = CD(RD).at(-1);
      return (0, lD.jsxs)(lD.Fragment, {
        children: [(0, lD.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, lD.jsxs)("div", {
            className: QD()("LuckyCloverWallet", {
              Capped: TD && "Basic" !== TD
            }),
            style: TD && {
              "--luckyTierColour": WD[TD]
            },
            children: [(0, lD.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${VD.progress})`
              }
            }), ID > 0 && (0, lD.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(zD=null===UD||void 0===UD?void 0:UD.delayMs)&&void 0!==zD?zD:0}ms`
              }
            }, ID), (0, lD.jsx)("div", {
              ref: OD,
              className: QD()("LuckyCloverWalletIcon", UD && "Bounce"),
              style: {
                animationDelay: `${null!==(pD=null===UD||void 0===UD?void 0:UD.delayMs)&&void 0!==pD?pD:0}ms`
              },
              children: (0, lD.jsx)(dD.d, {
                itemName: XD,
                amount: 0
              })
            }, null !== (wD = null === UD || void 0 === UD ? void 0 : UD.id) && void 0 !== wD ? wD : 0), (0, lD.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: RD
            }), TD && (0, lD.jsx)(iD.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, JD.createPortal)(GD.map((DD => (0, lD.jsx)(kD, {
          flyer: DD,
          target: OD,
          onDone: () => {
            hD((zD => zD.filter((zD => zD.id !== DD.id))))
          }
        }, DD.id))), document.body)]
      })
    }

    function kD(DD) {
      let {
        flyer: zD,
        target: wD,
        onDone: pD
      } = DD;
      const KD = (0, sD.useRef)(null);
      return (0, sD.useEffect)((() => {
        var DD;
        const sD = null === (DD = wD.current) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
        if (!KD.current || !sD) return void pD();
        const {
          x: rD,
          y: LD
        } = zD, cD = rD + 140 * (Math.random() - .5), gD = LD - 30 - 40 * Math.random(), RD = KD.current.animate([{
          transform: `translate(${rD}px, ${LD}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${cD}px, ${gD}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${sD.left}px, ${sD.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: zD.delayMs,
          fill: "backwards"
        });
        return RD.onfinish = pD, () => {
          RD.cancel()
        }
      }), []), (0, lD.jsx)("div", {
        ref: KD,
        className: "LuckyCloverFlying",
        children: (0, lD.jsx)(dD.d, {
          itemName: XD,
          amount: 0
        })
      })
    }
    var mD = wD(25);
    const eD = "luckyGearUpgradeView",
      oD = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function aD(DD) {
      var zD;
      return null !== (zD = oD[DD.split(" ")[0]]) && void 0 !== zD ? zD : "#e07bff"
    }
    class uD {
      constructor(DD, zD) {
        this.selectedSlot = DD, this.itemAt = zD, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      QI(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [wD, pD, sD] of DD) this.rings.push({
          id: this.nextId++,
          slot: wD,
          colour: aD(sD),
          until: zD + 1200
        }), wD !== this.selectedSlot() && this.unseen.set(wD, {
          from: pD,
          to: sD
        });
        this.KG()
      }
      DU() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const zD = this.rings.filter((zD => zD.until > DD));
        let wD = zD.length !== this.rings.length;
        this.rings = zD;
        for (const [pD, {
            from: sD,
            to: KD
          }] of this.unseen) {
          const DD = this.itemAt(pD);
          (pD === this.selectedSlot() || DD !== KD && DD !== sD) && (this.unseen.delete(pD), wD = !0)
        }
        wD && this.KG()
      }
      KG() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, mD.l.KG(eD, this.view)
      }
    }
    var vD = wD(1442);

    function tD(DD) {
      return document.querySelector(`.HotBar [data-inven-idx="${DD}"]`)
    }

    function FD(DD) {
      let {
        ring: zD
      } = DD;
      const [wD, pD] = (0, sD.useState)(null);
      return (0, sD.useLayoutEffect)((() => {
        var DD, wD;
        pD(null !== (DD = null === (wD = tD(zD.slot)) || void 0 === wD ? void 0 : wD.getBoundingClientRect()) && void 0 !== DD ? DD : null)
      }), [zD]), wD ? (0, lD.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: wD.left,
          top: wD.top,
          width: wD.width,
          height: wD.height,
          "--ringColour": zD.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function YD(DD) {
      let {
        slot: zD
      } = DD;
      const [wD, pD] = (0, sD.useState)(null);
      return (0, sD.useLayoutEffect)((() => {
        const DD = () => {
          pD(tD(zD))
        };
        DD();
        const wD = new MutationObserver(DD),
          sD = document.querySelector(".BottomMiddleElements");
        return sD && wD.observe(sD, {
          childList: !0,
          subtree: !0
        }), () => {
          wD.disconnect()
        }
      }), [zD]), wD ? (0, JD.createPortal)((0, lD.jsx)("div", {
        className: "LuckyGearUnseen"
      }), wD) : null
    }

    function HD(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, vD.k)(eD, zD.getView());
      return (0, lD.jsxs)(lD.Fragment, {
        children: [wD.rings.map((DD => (0, lD.jsx)(FD, {
          ring: DD
        }, DD.id))), wD.unseenSlots.map((DD => (0, lD.jsx)(YD, {
          slot: DD
        }, DD)))]
      })
    }
    const qD = function(DD, zD, wD, rD) {
      let LD, {
          localPlayerId: cD
        } = rD,
        gD = null;
      const RD = new nD({
          itemAt: DD => LD.getItemSlot(cD, DD),
          selectedSlot: () => LD.getSelectedInventorySlotI(cD),
          swap: (DD, zD) => {
            LD.swapInventorySlots(DD, zD)
          }
        }),
        AD = new uD((() => LD.getSelectedInventorySlotI(cD)), (DD => {
          var zD;
          return null === (zD = LD.getItemSlot(cD, DD)) || void 0 === zD ? void 0 : zD.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, KD.c)()
        },
        onCreate: DD => {
          LD = DD, gD = (0, OD.w)((0, sD.createElement)(sD.Fragment, null, (0, sD.createElement)(ZD), (0, sD.createElement)(HD, {
            controller: AD
          })))
        },
        onClose: () => {
          var DD;
          null === (DD = gD) || void 0 === DD || DD()
        },
        DU: () => {
          RD.DU(), AD.DU()
        },
        onReceivedMessageFromServer: (DD, zD) => {
          "luckyGearUpgrade" === DD && AD.QI(zD)
        },
        onPlayerChangeBlock: (DD, zD, wD, pD, sD, KD) => {
          "Air" !== KD && RD.onPlace(KD)
        },
        onPlayerDropItem: (DD, zD, wD, pD) => {
          RD.onDrop(zD, pD)
        },
        onPlayerAltAction: (DD, zD, wD, sD, KD, rD) => {
          if (!rD || "Mesh" !== LD.getEntityType(rD)) return;
          const cD = LD.getEntityName(rD),
            gD = Object.values(pD).find((DD => DD.name === cD));
          gD && LD.openShop(DD, !1, gD.shopTab)
        }
      }
    }
  },
  38005: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD
    });
    var pD = wD(351),
      sD = wD(36897),
      KD = wD(4502);
    const rD = ["Leaf Bed", "_Leaf Bed Head", ...pD.Ec.flatMap((DD => [`${DD} Bed`, `_${DD} Bed Head`, `${DD} Strongbed`, `_${DD} Strongbed Head`]))];

    function LD() {
      let DD;
      return {
        onCreate(zD) {
          DD = zD
        },
        altVetoBlocks: rD,
        onPlayerAttemptAltAction(zD, wD, pD, rD, LD, cD) {
          var gD;
          if ((0, sD.b)(DD.getMetaInfo(LD).rootName) && !DD.isEntityInteractable(cD) && (0, KD.h)(null === (gD = DD.zwD(zD)) || void 0 === gD ? void 0 : gD.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36897: (DD, zD, wD) => {
    function pD(DD) {
      return DD.includes("Leaf Bed")
    }

    function sD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !pD(DD)
    }

    function KD(DD) {
      return DD.includes(" Strongbed")
    }

    function rD(DD) {
      return pD(DD) || sD(DD) || KD(DD)
    }
    wD.d(zD, {
      b: () => rD,
      d: () => pD,
      e: () => KD,
      f: () => sD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);