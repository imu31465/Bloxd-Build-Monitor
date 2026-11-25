export const id = 22;
export const ids = [22];
export const modules = {
  37538: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      i: () => hM,
      m: () => mM,
      p: () => LM
    });
    var OM = iM(35017),
      SM = iM(37542),
      jM = iM(37544),
      aM = iM(9328),
      PM = iM(1516),
      nM = iM(44),
      QM = iM(65),
      zM = iM(1303);

    function LM() {
      var MM;
      return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
        children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
      })
    }

    function mM(MM) {
      var rM;
      let {
        show: iM
      } = MM;
      (0, PM.e)(SM.e, (0, SM.t)());
      const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
      return (0, nM.useEffect)((() => {
        var MM;
        iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
      }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
        showing: iM,
        globallyUniqueKey: "clientGameMenu",
        children: null === QM || void 0 === QM ? void 0 : QM.content
      })
    }

    function HM(MM) {
      let {
        placement: rM = "bottom"
      } = MM;
      return (0, zM.jsx)("div", {
        id: `clientGameHud-${rM}`,
        style: {
          display: "contents"
        }
      })
    }

    function hM(MM) {
      let {
        children: rM,
        placement: iM = "bottom"
      } = MM;
      const [OM, SM] = (0, nM.useState)(null);
      return (0, nM.useEffect)((() => {
        SM(document.getElementById(`clientGameHud-${iM}`))
      }), [iM]), OM ? (0, QM.createPortal)(rM, OM) : null
    }
  },
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  9328: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => SM
    });
    let OM = null;
    const SM = function(MM) {
        const rM = {
          cycle: MM,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return OM = rM, () => {
          OM === rM && (OM = null)
        }
      },
      jM = () => {
        var MM;
        return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
      }
  },
  37544: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => lM,
      b: () => jM,
      f: () => JM,
      i: () => dM,
      j: () => PM,
      m: () => mM,
      q: () => yM,
      u: () => LM,
      x: () => EM,
      y: () => hM
    });
    var OM = iM(19),
      SM = iM(22);
    const jM = "clientGameInventoryButtonsChanged",
      aM = new Map;

    function PM() {
      return [...aM.values()].sort(((MM, rM) => {
        var iM, OM;
        return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
      }))
    }
    let nM = null;

    function QM(MM) {
      nM = MM
    }
    let zM = !1;

    function LM(MM) {
      zM = !0;
      try {
        MM.onClick()
      } finally {
        zM = !1
      }
      MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
    }

    function mM() {
      return zM
    }

    function HM() {
      return PM().filter((MM => MM.panel && !MM.disabled))
    }

    function hM(MM) {
      const rM = HM(),
        iM = rM.findIndex((MM => MM.id === nM));
      return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
    }

    function JM() {
      return null !== nM && HM().length > 1
    }

    function dM() {
      QM(null)
    }

    function yM() {
      "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
    }

    function lM() {
      const MM = nM;
      return QM(null), MM
    }

    function EM(MM) {
      return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
        aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
      }
    }
  },
  37542: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      C: () => zM,
      e: () => PM,
      g: () => lM,
      k: () => dM,
      n: () => yM,
      p: () => mM,
      t: () => QM,
      w: () => JM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(37544);
    const PM = "clientGameUiChanged";
    let nM = null;

    function QM() {
      return nM
    }

    function zM(MM, rM) {
      const iM = {
        content: MM,
        menu: rM
      };
      return nM = iM, SM.i.Tz(PM, nM, !0), () => {
        nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
      }
    }
    let LM = null;

    function mM() {
      return LM
    }

    function HM(MM) {
      return LM = MM, () => {
        LM === MM && (LM = null)
      }
    }
    let hM = !1;

    function JM() {
      const MM = OM.d.get("openInGameMenuName");
      "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dM() {
      EM(!1)
    }

    function yM() {
      EM(hM)
    }

    function lM() {
      hM && EM(!1)
    }

    function EM(MM) {
      "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
        openInGameMenuName: MM ? "inventory" : null
      }), MM || (0, aM.i)(), hM = !1
    }
  },
  40563: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => cM
    });
    const OM = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var SM = iM(44),
      jM = iM(39012),
      aM = iM(332);
    const PM = ["Basic", "Rare", "Super"];

    function nM(MM, rM) {
      return `${"Basic"===rM?"":`${rM} `}${"Simple"===MM?"":`${MM} `}Lucky Block`
    }
    const QM = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((MM => PM.map((rM => [nM(MM, rM), {
      category: MM,
      rarity: rM
    }])))));
    QM.keys();

    function zM(MM) {
      return QM.get(MM)
    }
    const LM = "Obsidian",
      mM = ["Cobweb"],
      HM = [...["Red", "Blue", "Green", "Yellow"].map((MM => `${(0,aM.$)(MM)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", LM, ...mM];

    function hM(MM) {
      return HM.includes(MM)
    }
    var JM = iM(625);

    function dM(MM, rM) {
      const iM = zM(MM);
      if (iM) {
        const MM = zM(rM);
        if (!MM) return;
        const OM = PM.length - 1 - PM.indexOf(MM.rarity);
        return (MM.category === iM.category ? 0 : 1) * PM.length + OM
      }
      if (!hM(MM)) return;
      if (rM === MM) return 0;
      const OM = MM => hM(MM) && !mM.includes(MM) && MM !== LM;
      return OM(MM) && OM(rM) ? 1 : void 0
    }
    const yM = [...Array.from({
      length: JM.r - JM.q
    }, ((MM, rM) => JM.q + rM)), ...Array.from({
      length: JM.q
    }, ((MM, rM) => rM))];
    class lM {
      constructor(MM) {
        this.inventory = MM, this.pending = new Map
      }
      onPlace(MM) {
        var rM;
        const iM = this.inventory.selectedSlot(),
          OM = this.inventory.itemAt(iM);
        (null === OM || void 0 === OM ? void 0 : OM.name) === MM && (null !== (rM = OM.amount) && void 0 !== rM ? rM : 1) <= 1 && EM(MM) && this.pending.set(iM, MM)
      }
      onDrop(MM, rM) {
        rM < JM.q && null === this.inventory.itemAt(rM) && EM(MM) && this.refill(rM, MM)
      }
      bL() {
        const MM = [...this.pending];
        this.pending.clear();
        for (const [rM, iM] of MM) null === this.inventory.itemAt(rM) && this.refill(rM, iM)
      }
      refill(MM, rM) {
        const iM = function(MM, rM, iM, OM) {
          let SM, jM = 1 / 0;
          for (const aM of yM) {
            if (aM === rM) continue;
            const PM = OM(aM);
            if (!PM || aM < JM.q && rM !== iM) continue;
            const nM = dM(MM, PM.name);
            void 0 !== nM && nM < jM && (SM = aM, jM = nM)
          }
          return SM
        }(rM, MM, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== iM && this.inventory.swap(MM, iM)
      }
    }

    function EM(MM) {
      return !!zM(MM) || hM(MM)
    }
    var UM = iM(37542),
      GM = iM(65),
      CM = iM(1116),
      eM = iM.n(CM);
    const bM = "Lucky Clover",
      wM = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function tM(MM) {
      return wM[MM][0]
    }

    function gM(MM) {
      return PM.filter((rM => MM >= tM(rM)))
    }
    var uM = iM(313),
      RM = iM(2640),
      pM = iM(19),
      WM = iM(2811),
      sM = iM(2026),
      DM = iM(37538),
      kM = iM(1398);
    var ZM = iM(1303);
    const oM = {
      Basic: aM.L.whiteUiText,
      Rare: aM.L.goldUiText,
      Super: aM.L.cyanUiText
    };
    let fM = 1;

    function YM() {
      const MM = (0, RM.f)("currencyAmounts"),
        rM = null === MM || void 0 === MM ? void 0 : MM.Clovers;
      return !rM || rM.hidden ? null : (0, ZM.jsx)(DM.i, {
        children: (0, ZM.jsx)(NM, {
          amount: rM.amount
        })
      })
    }

    function NM(MM) {
      var rM, iM, OM;
      let {
        amount: jM
      } = MM;
      const {
        openEverythingMenuName: nM
      } = (0, pM.m)(["openEverythingMenuName"]), QM = (0, WM.b)(), [zM, LM] = (0, SM.useState)(jM), [mM, HM] = (0, SM.useState)(null), [hM, JM] = (0, SM.useState)(0), [dM, yM] = (0, SM.useState)([]), lM = (0, SM.useRef)(jM), EM = (0, SM.useRef)(!1), UM = (0, SM.useRef)(null), CM = nM === uM.m.SHOP;
      (0, SM.useEffect)((() => {
        const MM = lM.current;
        if (lM.current = jM, jM <= MM || CM) return void LM(jM);
        const rM = QM || dM.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (iM = jM - MM, OM = !EM.current, iM <= 0 || !OM && iM < 40 ? 0 : Math.min(4, Math.ceil(iM / 30)));
        var iM, OM;
        if (EM.current = !0, gM(jM).length > gM(MM).length && JM(fM++), rM > 0) {
          const MM = [];
          for (let iM = 0; iM < rM; iM++) MM.push({
            id: fM++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * iM
          });
          yM((rM => [...rM, ...MM]))
        }
        const SM = rM > 0 ? 600 : 0;
        HM({
          id: fM++,
          delayMs: SM
        });
        const PM = performance.now() + SM;
        let nM = 0;
        const zM = rM => {
          const iM = aM.d.clamp((rM - PM) / 600, 0, 1);
          LM(Math.round(MM + (jM - MM) * iM)), iM < 1 && (nM = requestAnimationFrame(zM))
        };
        return nM = requestAnimationFrame(zM), () => {
          cancelAnimationFrame(nM)
        }
      }), [jM, CM]);
      const wM = function(MM) {
          var rM;
          const iM = null !== (rM = PM.find((rM => MM < tM(rM)))) && void 0 !== rM ? rM : "Super";
          return {
            rarity: iM,
            progress: aM.d.clamp(MM / tM(iM), 0, 1)
          }
        }(zM),
        RM = gM(zM).at(-1);
      return (0, ZM.jsxs)(ZM.Fragment, {
        children: [(0, ZM.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, ZM.jsxs)("div", {
            className: eM()("LuckyCloverWallet", {
              Capped: RM && "Basic" !== RM
            }),
            style: RM && {
              "--luckyTierColour": oM[RM]
            },
            children: [(0, ZM.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${wM.progress})`
              }
            }), hM > 0 && (0, ZM.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(rM=null===mM||void 0===mM?void 0:mM.delayMs)&&void 0!==rM?rM:0}ms`
              }
            }, hM), (0, ZM.jsx)("div", {
              ref: UM,
              className: eM()("LuckyCloverWalletIcon", mM && "Bounce"),
              style: {
                animationDelay: `${null!==(OM=null===mM||void 0===mM?void 0:mM.delayMs)&&void 0!==OM?OM:0}ms`
              },
              children: (0, ZM.jsx)(sM.b, {
                itemName: bM,
                amount: 0
              })
            }, null !== (iM = null === mM || void 0 === mM ? void 0 : mM.id) && void 0 !== iM ? iM : 0), (0, ZM.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: zM
            }), RM && (0, ZM.jsx)(kM.b, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, GM.createPortal)(dM.map((MM => (0, ZM.jsx)(AM, {
          flyer: MM,
          target: UM,
          onDone: () => {
            yM((rM => rM.filter((rM => rM.id !== MM.id))))
          }
        }, MM.id))), document.body)]
      })
    }

    function AM(MM) {
      let {
        flyer: rM,
        target: iM,
        onDone: OM
      } = MM;
      const jM = (0, SM.useRef)(null);
      return (0, SM.useEffect)((() => {
        var MM;
        const SM = null === (MM = iM.current) || void 0 === MM ? void 0 : MM.getBoundingClientRect();
        if (!jM.current || !SM) return void OM();
        const {
          x: aM,
          y: PM
        } = rM, nM = aM + 140 * (Math.random() - .5), QM = PM - 30 - 40 * Math.random(), zM = jM.current.animate([{
          transform: `translate(${aM}px, ${PM}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${nM}px, ${QM}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${SM.left}px, ${SM.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: rM.delayMs,
          fill: "backwards"
        });
        return zM.onfinish = OM, () => {
          zM.cancel()
        }
      }), []), (0, ZM.jsx)("div", {
        ref: jM,
        className: "LuckyCloverFlying",
        children: (0, ZM.jsx)(sM.b, {
          itemName: bM,
          amount: 0
        })
      })
    }
    var xM = iM(22);
    const vM = "luckyGearUpgradeView",
      FM = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function BM(MM) {
      var rM;
      return null !== (rM = FM[MM.split(" ")[0]]) && void 0 !== rM ? rM : "#e07bff"
    }
    class XM {
      constructor(MM, rM) {
        this.selectedSlot = MM, this.itemAt = rM, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      GL(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [iM, OM, SM] of MM) this.rings.push({
          id: this.nextId++,
          slot: iM,
          colour: BM(SM),
          until: rM + 1200
        }), iM !== this.selectedSlot() && this.unseen.set(iM, {
          from: OM,
          to: SM
        });
        this.Tz()
      }
      bL() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const rM = this.rings.filter((rM => rM.until > MM));
        let iM = rM.length !== this.rings.length;
        this.rings = rM;
        for (const [OM, {
            from: SM,
            to: jM
          }] of this.unseen) {
          const MM = this.itemAt(OM);
          (OM === this.selectedSlot() || MM !== jM && MM !== SM) && (this.unseen.delete(OM), iM = !0)
        }
        iM && this.Tz()
      }
      Tz() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, xM.i.Tz(vM, this.view)
      }
    }
    var IM = iM(1516);

    function KM(MM) {
      return document.querySelector(`.HotBar [data-inven-idx="${MM}"]`)
    }

    function qM(MM) {
      let {
        ring: rM
      } = MM;
      const [iM, OM] = (0, SM.useState)(null);
      return (0, SM.useLayoutEffect)((() => {
        var MM, iM;
        OM(null !== (MM = null === (iM = KM(rM.slot)) || void 0 === iM ? void 0 : iM.getBoundingClientRect()) && void 0 !== MM ? MM : null)
      }), [rM]), iM ? (0, ZM.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: iM.left,
          top: iM.top,
          width: iM.width,
          height: iM.height,
          "--ringColour": rM.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function TM(MM) {
      let {
        slot: rM
      } = MM;
      const [iM, OM] = (0, SM.useState)(null);
      return (0, SM.useLayoutEffect)((() => {
        const MM = () => {
          OM(KM(rM))
        };
        MM();
        const iM = new MutationObserver(MM),
          SM = document.querySelector(".BottomMiddleElements");
        return SM && iM.observe(SM, {
          childList: !0,
          subtree: !0
        }), () => {
          iM.disconnect()
        }
      }), [rM]), iM ? (0, GM.createPortal)((0, ZM.jsx)("div", {
        className: "LuckyGearUnseen"
      }), iM) : null
    }

    function VM(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, IM.e)(vM, rM.getView());
      return (0, ZM.jsxs)(ZM.Fragment, {
        children: [iM.rings.map((MM => (0, ZM.jsx)(qM, {
          ring: MM
        }, MM.id))), iM.unseenSlots.map((MM => (0, ZM.jsx)(TM, {
          slot: MM
        }, MM)))]
      })
    }
    const cM = function(MM, rM, iM, aM) {
      let PM, {
          localPlayerId: nM
        } = aM,
        QM = null;
      const zM = new lM({
          itemAt: MM => PM.getItemSlot(nM, MM),
          selectedSlot: () => PM.getSelectedInventorySlotI(nM),
          swap: (MM, rM) => {
            PM.swapInventorySlots(MM, rM)
          }
        }),
        LM = new XM((() => PM.getSelectedInventorySlotI(nM)), (MM => {
          var rM;
          return null === (rM = PM.getItemSlot(nM, MM)) || void 0 === rM ? void 0 : rM.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, jM.d)()
        },
        onCreate: MM => {
          PM = MM, QM = (0, UM.C)((0, SM.createElement)(SM.Fragment, null, (0, SM.createElement)(YM), (0, SM.createElement)(VM, {
            controller: LM
          })))
        },
        onClose: () => {
          var MM;
          null === (MM = QM) || void 0 === MM || MM()
        },
        bL: () => {
          zM.bL(), LM.bL()
        },
        onReceivedMessageFromServer: (MM, rM) => {
          "luckyGearUpgrade" === MM && LM.GL(rM)
        },
        onPlayerChangeBlock: (MM, rM, iM, OM, SM, jM) => {
          "Air" !== jM && zM.onPlace(jM)
        },
        onPlayerDropItem: (MM, rM, iM, OM) => {
          zM.onDrop(rM, OM)
        },
        onPlayerAltAction: (MM, rM, iM, SM, jM, aM) => {
          if (!aM || "Mesh" !== PM.getEntityType(aM)) return;
          const nM = PM.getEntityName(aM),
            QM = Object.values(OM).find((MM => MM.name === nM));
          QM && PM.openShop(MM, !1, QM.shopTab)
        }
      }
    }
  },
  39012: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM
    });
    var OM = iM(332),
      SM = iM(37858),
      jM = iM(4854);
    const aM = ["Leaf Bed", "_Leaf Bed Head", ...OM.Ec.flatMap((MM => [`${MM} Bed`, `_${MM} Bed Head`, `${MM} Strongbed`, `_${MM} Strongbed Head`]))];

    function PM() {
      let MM;
      return {
        onCreate(rM) {
          MM = rM
        },
        altVetoBlocks: aM,
        onPlayerAttemptAltAction(rM, iM, OM, aM, PM, nM) {
          var QM;
          if ((0, SM.e)(MM.getMetaInfo(PM).rootName) && !MM.isEntityInteractable(nM) && (0, jM.g)(null === (QM = MM.TrM(rM)) || void 0 === QM ? void 0 : QM.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37858: (MM, rM, iM) => {
    function OM(MM) {
      return MM.includes("Leaf Bed")
    }

    function SM(MM) {
      return / Bed(?: Head)?(?:\||$)/.test(MM) && !OM(MM)
    }

    function jM(MM) {
      return MM.includes(" Strongbed")
    }

    function aM(MM) {
      return OM(MM) || SM(MM) || jM(MM)
    }
    iM.d(rM, {
      e: () => aM,
      g: () => OM,
      h: () => jM,
      l: () => SM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);