export const id = 19;
export const ids = [19];
export const modules = {
  35994: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      e: () => tD,
      f: () => yD,
      h: () => BD
    });
    var ID = cD(9041),
      pD = cD(35996),
      iD = cD(36002),
      fD = cD(8394),
      bD = cD(1440),
      QD = cD(53),
      wD = cD(62),
      SD = cD(1093);

    function BD() {
      var DD;
      return (0, bD.g)(pD.b, (0, pD.o)()), (0, SD.jsx)(SD.Fragment, {
        children: null === (DD = (0, pD.o)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function yD(DD) {
      var CD;
      let {
        show: cD
      } = DD;
      (0, bD.g)(pD.b, (0, pD.o)());
      const wD = null === (CD = (0, pD.o)()) || void 0 === CD ? void 0 : CD.menu;
      return (0, QD.useEffect)((() => {
        var DD;
        cD || (null === wD || void 0 === wD || null === (DD = wD.onClose) || void 0 === DD || DD.call(wD), (0, iD.q)())
      }), [cD, wD]), (0, QD.useEffect)((() => cD ? (0, fD.i)(iD.B, iD.e) : void 0), [cD]), (0, SD.jsx)(ID.c, {
        showing: cD,
        globallyUniqueKey: "clientGameMenu",
        children: null === wD || void 0 === wD ? void 0 : wD.content
      })
    }

    function MD(DD) {
      let {
        placement: CD = "bottom"
      } = DD;
      return (0, SD.jsx)("div", {
        id: `clientGameHud-${CD}`,
        style: {
          display: "contents"
        }
      })
    }

    function tD(DD) {
      let {
        children: CD,
        placement: cD = "bottom"
      } = DD;
      const [ID, pD] = (0, QD.useState)(null);
      return (0, QD.useEffect)((() => {
        pD(document.getElementById(`clientGameHud-${cD}`))
      }), [cD]), ID ? (0, wD.createPortal)(CD, ID) : null
    }
  },
  9041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(4329),
      pD = cD(4337);

    function iD(DD) {
      let {
        children: CD,
        showing: cD,
        globallyUniqueKey: iD,
        alwaysMountChildren: fD = !1,
        doGameplayStartStopOnShow: bD = !0,
        keepsMovement: QD = !1
      } = DD;
      return (0, pD.e)(!0, cD, iD, QD), (0, ID.b)(bD, cD), cD || fD ? CD : null
    }
  },
  8394: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      i: () => pD
    });
    let ID = null;
    const pD = function(DD) {
        const CD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ID = CD, () => {
          ID === CD && (ID = null)
        }
      },
      iD = () => {
        var DD;
        return null !== (DD = ID) && void 0 !== DD && DD.canCycle() ? ID.cycle : null
      }
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  38746: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => FD
    });
    const ID = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var pD = cD(53),
      iD = cD(37425),
      fD = cD(326);
    const bD = ["Basic", "Rare", "Super"];

    function QD(DD, CD) {
      return `${"Basic"===CD?"":`${CD} `}${"Simple"===DD?"":`${DD} `}Lucky Block`
    }
    const wD = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((DD => bD.map((CD => [QD(DD, CD), {
      category: DD,
      rarity: CD
    }])))));
    wD.keys();

    function SD(DD) {
      return wD.get(DD)
    }
    const BD = "Obsidian",
      yD = ["Cobweb"],
      MD = [...["Red", "Blue", "Green", "Yellow"].map((DD => `${(0,fD.Y)(DD)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", BD, ...yD];

    function tD(DD) {
      return MD.includes(DD)
    }
    var ZD = cD(624);

    function oD(DD, CD) {
      const cD = SD(DD);
      if (cD) {
        const DD = SD(CD);
        if (!DD) return;
        const ID = bD.length - 1 - bD.indexOf(DD.rarity);
        return (DD.category === cD.category ? 0 : 1) * bD.length + ID
      }
      if (!tD(DD)) return;
      if (CD === DD) return 0;
      const ID = DD => tD(DD) && !yD.includes(DD) && DD !== BD;
      return ID(DD) && ID(CD) ? 1 : void 0
    }
    const vD = [...Array.from({
      length: ZD.n - ZD.m
    }, ((DD, CD) => ZD.m + CD)), ...Array.from({
      length: ZD.m
    }, ((DD, CD) => CD))];
    class ND {
      constructor(DD) {
        this.inventory = DD, this.pending = new Map
      }
      onPlace(DD) {
        var CD;
        const cD = this.inventory.selectedSlot(),
          ID = this.inventory.itemAt(cD);
        (null === ID || void 0 === ID ? void 0 : ID.name) === DD && (null !== (CD = ID.amount) && void 0 !== CD ? CD : 1) <= 1 && gD(DD) && this.pending.set(cD, DD)
      }
      onDrop(DD, CD) {
        CD < ZD.m && null === this.inventory.itemAt(CD) && gD(DD) && this.refill(CD, DD)
      }
      wy() {
        const DD = [...this.pending];
        this.pending.clear();
        for (const [CD, cD] of DD) null === this.inventory.itemAt(CD) && this.refill(CD, cD)
      }
      refill(DD, CD) {
        const cD = function(DD, CD, cD, ID) {
          let pD, iD = 1 / 0;
          for (const fD of vD) {
            if (fD === CD) continue;
            const bD = ID(fD);
            if (!bD || fD < ZD.m && CD !== cD) continue;
            const QD = oD(DD, bD.name);
            void 0 !== QD && QD < iD && (pD = fD, iD = QD)
          }
          return pD
        }(CD, DD, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== cD && this.inventory.swap(DD, cD)
      }
    }

    function gD(DD) {
      return !!SD(DD) || tD(DD)
    }
    var XD = cD(35996),
      mD = cD(62),
      nD = cD(1049),
      OD = cD.n(nD);
    const PD = "Lucky Clover",
      HD = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function UD(DD) {
      return HD[DD][0]
    }

    function xD(DD) {
      return bD.filter((CD => DD >= UD(CD)))
    }
    var qD = cD(312),
      JD = cD(2358),
      KD = cD(16),
      aD = cD(2450),
      VD = cD(1893),
      zD = cD(35994),
      jD = cD(1064);
    var lD = cD(1093);
    const LD = {
      Basic: fD.J.whiteUiText,
      Rare: fD.J.goldUiText,
      Super: fD.J.cyanUiText
    };
    let TD = 1;

    function GD() {
      const DD = (0, JD.h)("currencyAmounts"),
        CD = null === DD || void 0 === DD ? void 0 : DD.Clovers;
      return !CD || CD.hidden ? null : (0, lD.jsx)(zD.e, {
        children: (0, lD.jsx)(RD, {
          amount: CD.amount
        })
      })
    }

    function RD(DD) {
      var CD, cD, ID;
      let {
        amount: iD
      } = DD;
      const {
        openEverythingMenuName: QD
      } = (0, KD.o)(["openEverythingMenuName"]), wD = (0, aD.e)(), [SD, BD] = (0, pD.useState)(iD), [yD, MD] = (0, pD.useState)(null), [tD, ZD] = (0, pD.useState)(0), [oD, vD] = (0, pD.useState)([]), ND = (0, pD.useRef)(iD), gD = (0, pD.useRef)(!1), XD = (0, pD.useRef)(null), nD = QD === qD.q.SHOP;
      (0, pD.useEffect)((() => {
        const DD = ND.current;
        if (ND.current = iD, iD <= DD || nD) return void BD(iD);
        const CD = wD || oD.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (cD = iD - DD, ID = !gD.current, cD <= 0 || !ID && cD < 40 ? 0 : Math.min(4, Math.ceil(cD / 30)));
        var cD, ID;
        if (gD.current = !0, xD(iD).length > xD(DD).length && ZD(TD++), CD > 0) {
          const DD = [];
          for (let cD = 0; cD < CD; cD++) DD.push({
            id: TD++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * cD
          });
          vD((CD => [...CD, ...DD]))
        }
        const pD = CD > 0 ? 600 : 0;
        MD({
          id: TD++,
          delayMs: pD
        });
        const bD = performance.now() + pD;
        let QD = 0;
        const SD = CD => {
          const cD = fD.e.clamp((CD - bD) / 600, 0, 1);
          BD(Math.round(DD + (iD - DD) * cD)), cD < 1 && (QD = requestAnimationFrame(SD))
        };
        return QD = requestAnimationFrame(SD), () => {
          cancelAnimationFrame(QD)
        }
      }), [iD, nD]);
      const HD = function(DD) {
          var CD;
          const cD = null !== (CD = bD.find((CD => DD < UD(CD)))) && void 0 !== CD ? CD : "Super";
          return {
            rarity: cD,
            progress: fD.e.clamp(DD / UD(cD), 0, 1)
          }
        }(SD),
        JD = xD(SD).at(-1);
      return (0, lD.jsxs)(lD.Fragment, {
        children: [(0, lD.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, lD.jsxs)("div", {
            className: OD()("LuckyCloverWallet", {
              Capped: JD && "Basic" !== JD
            }),
            style: JD && {
              "--luckyTierColour": LD[JD]
            },
            children: [(0, lD.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${HD.progress})`
              }
            }), tD > 0 && (0, lD.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(CD=null===yD||void 0===yD?void 0:yD.delayMs)&&void 0!==CD?CD:0}ms`
              }
            }, tD), (0, lD.jsx)("div", {
              ref: XD,
              className: OD()("LuckyCloverWalletIcon", yD && "Bounce"),
              style: {
                animationDelay: `${null!==(ID=null===yD||void 0===yD?void 0:yD.delayMs)&&void 0!==ID?ID:0}ms`
              },
              children: (0, lD.jsx)(VD.d, {
                itemName: PD,
                amount: 0
              })
            }, null !== (cD = null === yD || void 0 === yD ? void 0 : yD.id) && void 0 !== cD ? cD : 0), (0, lD.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: SD
            }), JD && (0, lD.jsx)(jD.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, mD.createPortal)(oD.map((DD => (0, lD.jsx)(kD, {
          flyer: DD,
          target: XD,
          onDone: () => {
            vD((CD => CD.filter((CD => CD.id !== DD.id))))
          }
        }, DD.id))), document.body)]
      })
    }

    function kD(DD) {
      let {
        flyer: CD,
        target: cD,
        onDone: ID
      } = DD;
      const iD = (0, pD.useRef)(null);
      return (0, pD.useEffect)((() => {
        var DD;
        const pD = null === (DD = cD.current) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
        if (!iD.current || !pD) return void ID();
        const {
          x: fD,
          y: bD
        } = CD, QD = fD + 140 * (Math.random() - .5), wD = bD - 30 - 40 * Math.random(), SD = iD.current.animate([{
          transform: `translate(${fD}px, ${bD}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${QD}px, ${wD}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${pD.left}px, ${pD.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: CD.delayMs,
          fill: "backwards"
        });
        return SD.onfinish = ID, () => {
          SD.cancel()
        }
      }), []), (0, lD.jsx)("div", {
        ref: iD,
        className: "LuckyCloverFlying",
        children: (0, lD.jsx)(VD.d, {
          itemName: PD,
          amount: 0
        })
      })
    }
    var dD = cD(20);
    const YD = "luckyGearUpgradeView",
      WD = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function sD(DD) {
      var CD;
      return null !== (CD = WD[DD.split(" ")[0]]) && void 0 !== CD ? CD : "#e07bff"
    }
    class ED {
      constructor(DD, CD) {
        this.selectedSlot = DD, this.itemAt = CD, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      kt(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [cD, ID, pD] of DD) this.rings.push({
          id: this.nextId++,
          slot: cD,
          colour: sD(pD),
          until: CD + 1200
        }), cD !== this.selectedSlot() && this.unseen.set(cD, {
          from: ID,
          to: pD
        });
        this.Uo()
      }
      wy() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const CD = this.rings.filter((CD => CD.until > DD));
        let cD = CD.length !== this.rings.length;
        this.rings = CD;
        for (const [ID, {
            from: pD,
            to: iD
          }] of this.unseen) {
          const DD = this.itemAt(ID);
          (ID === this.selectedSlot() || DD !== iD && DD !== pD) && (this.unseen.delete(ID), cD = !0)
        }
        cD && this.Uo()
      }
      Uo() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, dD.i.Uo(YD, this.view)
      }
    }
    var eD = cD(1440);

    function uD(DD) {
      return document.querySelector(`.HotBar [data-inven-idx="${DD}"]`)
    }

    function hD(DD) {
      let {
        ring: CD
      } = DD;
      const [cD, ID] = (0, pD.useState)(null);
      return (0, pD.useLayoutEffect)((() => {
        var DD, cD;
        ID(null !== (DD = null === (cD = uD(CD.slot)) || void 0 === cD ? void 0 : cD.getBoundingClientRect()) && void 0 !== DD ? DD : null)
      }), [CD]), cD ? (0, lD.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: cD.left,
          top: cD.top,
          width: cD.width,
          height: cD.height,
          "--ringColour": CD.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function rD(DD) {
      let {
        slot: CD
      } = DD;
      const [cD, ID] = (0, pD.useState)(null);
      return (0, pD.useLayoutEffect)((() => {
        const DD = () => {
          ID(uD(CD))
        };
        DD();
        const cD = new MutationObserver(DD),
          pD = document.querySelector(".BottomMiddleElements");
        return pD && cD.observe(pD, {
          childList: !0,
          subtree: !0
        }), () => {
          cD.disconnect()
        }
      }), [CD]), cD ? (0, mD.createPortal)((0, lD.jsx)("div", {
        className: "LuckyGearUnseen"
      }), cD) : null
    }

    function AD(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, eD.g)(YD, CD.getView());
      return (0, lD.jsxs)(lD.Fragment, {
        children: [cD.rings.map((DD => (0, lD.jsx)(hD, {
          ring: DD
        }, DD.id))), cD.unseenSlots.map((DD => (0, lD.jsx)(rD, {
          slot: DD
        }, DD)))]
      })
    }
    const FD = function(DD, CD, cD, fD) {
      let bD, {
          localPlayerId: QD
        } = fD,
        wD = null;
      const SD = new ND({
          itemAt: DD => bD.getItemSlot(QD, DD),
          selectedSlot: () => bD.getSelectedInventorySlotI(QD),
          swap: (DD, CD) => {
            bD.swapInventorySlots(DD, CD)
          }
        }),
        BD = new ED((() => bD.getSelectedInventorySlotI(QD)), (DD => {
          var CD;
          return null === (CD = bD.getItemSlot(QD, DD)) || void 0 === CD ? void 0 : CD.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, iD.d)()
        },
        onCreate: DD => {
          bD = DD, wD = (0, XD.v)((0, pD.createElement)(pD.Fragment, null, (0, pD.createElement)(GD), (0, pD.createElement)(AD, {
            controller: BD
          })))
        },
        onClose: () => {
          var DD;
          null === (DD = wD) || void 0 === DD || DD()
        },
        wy: () => {
          SD.wy(), BD.wy()
        },
        onReceivedMessageFromServer: (DD, CD) => {
          "luckyGearUpgrade" === DD && BD.kt(CD)
        },
        onPlayerChangeBlock: (DD, CD, cD, ID, pD, iD) => {
          "Air" !== iD && SD.onPlace(iD)
        },
        onPlayerDropItem: (DD, CD, cD, ID) => {
          SD.onDrop(CD, ID)
        },
        onPlayerAltAction: (DD, CD, cD, pD, iD, fD) => {
          if (!fD || "Mesh" !== bD.getEntityType(fD)) return;
          const QD = bD.getEntityName(fD),
            wD = Object.values(ID).find((DD => DD.name === QD));
          wD && bD.openShop(DD, !1, wD.shopTab)
        }
      }
    }
  },
  37425: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD
    });
    var ID = cD(326),
      pD = cD(36300),
      iD = cD(4279);
    const fD = ["Leaf Bed", "_Leaf Bed Head", ...ID.Gc.flatMap((DD => [`${DD} Bed`, `_${DD} Bed Head`, `${DD} Strongbed`, `_${DD} Strongbed Head`]))];

    function bD() {
      let DD;
      return {
        onCreate(CD) {
          DD = CD
        },
        altVetoBlocks: fD,
        onPlayerAttemptAltAction(CD, cD, ID, fD, bD, QD) {
          var wD;
          if ((0, pD.b)(DD.getMetaInfo(bD).rootName) && !DD.isEntityInteractable(QD) && (0, iD.e)(null === (wD = DD.FDD(CD)) || void 0 === wD ? void 0 : wD.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36300: (DD, CD, cD) => {
    function ID(DD) {
      return DD.includes("Leaf Bed")
    }

    function pD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !ID(DD)
    }

    function iD(DD) {
      return DD.includes(" Strongbed")
    }

    function fD(DD) {
      return ID(DD) || pD(DD) || iD(DD)
    }
    cD.d(CD, {
      b: () => fD,
      e: () => ID,
      h: () => iD,
      i: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);