export const id = 22;
export const ids = [22];
export const modules = {
  37868: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => UW,
      l: () => xW,
      o: () => ZW
    });
    var mW = OW(35220),
      EW = OW(3361),
      NW = OW(3368),
      PW = OW(9954),
      LW = OW(1526),
      cW = OW(62),
      wW = OW(80),
      tW = OW(1283);

    function ZW() {
      var WW;
      return (0, LW.g)(EW.g, (0, EW.F)()), (0, tW.jsx)(tW.Fragment, {
        children: null === (WW = (0, EW.F)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function xW(WW) {
      var iW;
      let {
        show: OW
      } = WW;
      (0, LW.g)(EW.g, (0, EW.F)());
      const wW = null === (iW = (0, EW.F)()) || void 0 === iW ? void 0 : iW.menu;
      return (0, cW.useEffect)((() => {
        var WW;
        OW || (null === wW || void 0 === wW || null === (WW = wW.onClose) || void 0 === WW || WW.call(wW), (0, NW.s)())
      }), [OW, wW]), (0, cW.useEffect)((() => OW ? (0, PW.e)(NW.C, NW.f) : void 0), [OW]), (0, tW.jsx)(mW.d, {
        showing: OW,
        globallyUniqueKey: "clientGameMenu",
        children: null === wW || void 0 === wW ? void 0 : wW.content
      })
    }
    const lW = new Map,
      AW = new Set;

    function bW(WW, iW) {
      iW ? lW.set(WW, iW) : lW.delete(WW);
      for (const OW of AW) OW()
    }

    function jW(WW) {
      let {
        placement: iW = "bottom"
      } = WW;
      const OW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const WW = OW.current;
        return bW(iW, WW), () => {
          lW.get(iW) === WW && bW(iW, null)
        }
      }), [iW]), (0, tW.jsx)("div", {
        ref: OW,
        id: `clientGameHud-${iW}`,
        style: {
          display: "contents"
        }
      })
    }

    function UW(WW) {
      let {
        children: iW,
        placement: OW = "bottom"
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => {
        var WW;
        return null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null
      }));
      return (0, cW.useEffect)((() => {
        const WW = () => {
          var WW;
          EW(null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null)
        };
        return AW.add(WW), WW(), () => {
          AW.delete(WW)
        }
      }), [OW]), mW ? (0, wW.createPortal)(iW, mW) : null
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  40771: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => QW
    });
    const mW = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var EW = OW(62),
      NW = OW(39220),
      PW = OW(344);
    const LW = ["Basic", "Rare", "Super"];

    function cW(WW, iW) {
      return `${"Basic"===iW?"":`${iW} `}${"Simple"===WW?"":`${WW} `}Lucky Block`
    }
    const wW = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((WW => LW.map((iW => [cW(WW, iW), {
      category: WW,
      rarity: iW
    }])))));
    wW.keys();

    function tW(WW) {
      return wW.get(WW)
    }
    const ZW = "Obsidian",
      xW = ["Cobweb"],
      lW = [...["Red", "Blue", "Green", "Yellow"].map((WW => `${(0,PW.Z)(WW)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", ZW, ...xW];

    function AW(WW) {
      return lW.includes(WW)
    }
    var bW = OW(643);

    function jW(WW, iW) {
      const OW = tW(WW);
      if (OW) {
        const WW = tW(iW);
        if (!WW) return;
        const mW = LW.length - 1 - LW.indexOf(WW.rarity);
        return (WW.category === OW.category ? 0 : 1) * LW.length + mW
      }
      if (!AW(WW)) return;
      if (iW === WW) return 0;
      const mW = WW => AW(WW) && !xW.includes(WW) && WW !== ZW;
      return mW(WW) && mW(iW) ? 1 : void 0
    }
    const UW = [...Array.from({
      length: bW.o - bW.m
    }, ((WW, iW) => bW.m + iW)), ...Array.from({
      length: bW.m
    }, ((WW, iW) => iW))];
    class kW {
      constructor(WW) {
        this.inventory = WW, this.pending = new Map
      }
      onPlace(WW) {
        var iW;
        const OW = this.inventory.selectedSlot(),
          mW = this.inventory.itemAt(OW);
        (null === mW || void 0 === mW ? void 0 : mW.name) === WW && (null !== (iW = mW.amount) && void 0 !== iW ? iW : 1) <= 1 && sW(WW) && this.pending.set(OW, WW)
      }
      onDrop(WW, iW) {
        iW < bW.m && null === this.inventory.itemAt(iW) && sW(WW) && this.refill(iW, WW)
      }
      hZ() {
        const WW = [...this.pending];
        this.pending.clear();
        for (const [iW, OW] of WW) null === this.inventory.itemAt(iW) && this.refill(iW, OW)
      }
      refill(WW, iW) {
        const OW = function(WW, iW, OW, mW) {
          let EW, NW = 1 / 0;
          for (const PW of UW) {
            if (PW === iW) continue;
            const LW = mW(PW);
            if (!LW || PW < bW.m && iW !== OW) continue;
            const cW = jW(WW, LW.name);
            void 0 !== cW && cW < NW && (EW = PW, NW = cW)
          }
          return EW
        }(iW, WW, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== OW && this.inventory.swap(WW, OW)
      }
    }

    function sW(WW) {
      return !!tW(WW) || AW(WW)
    }
    var MW = OW(3361),
      KW = OW(80),
      SW = OW(1089),
      YW = OW.n(SW);
    const yW = "Lucky Clover",
      TW = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function JW(WW) {
      return TW[WW][0]
    }

    function hW(WW) {
      return LW.filter((iW => WW >= JW(iW)))
    }
    var HW = OW(327),
      nW = OW(3332),
      uW = OW(25),
      oW = OW(3599),
      dW = OW(2032),
      eW = OW(37868),
      vW = OW(1391);
    var gW = OW(1283);
    const DW = {
      Basic: PW.M.whiteUiText,
      Rare: PW.M.goldUiText,
      Super: PW.M.cyanUiText
    };
    let VW = 1;

    function pW() {
      const WW = (0, nW.e)("currencyAmounts"),
        iW = null === WW || void 0 === WW ? void 0 : WW.Clovers;
      return !iW || iW.hidden ? null : (0, gW.jsx)(eW.h, {
        children: (0, gW.jsx)(fW, {
          amount: iW.amount
        })
      })
    }

    function fW(WW) {
      var iW, OW, mW;
      let {
        amount: NW
      } = WW;
      const {
        openEverythingMenuName: cW
      } = (0, uW.p)(["openEverythingMenuName"]), wW = (0, oW.e)(), [tW, ZW] = (0, EW.useState)(NW), [xW, lW] = (0, EW.useState)(null), [AW, bW] = (0, EW.useState)(0), [jW, UW] = (0, EW.useState)([]), kW = (0, EW.useRef)(NW), sW = (0, EW.useRef)(!1), MW = (0, EW.useRef)(null), SW = cW === HW.m.SHOP;
      (0, EW.useEffect)((() => {
        const WW = kW.current;
        if (kW.current = NW, NW <= WW || SW) return void ZW(NW);
        const iW = wW || jW.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (OW = NW - WW, mW = !sW.current, OW <= 0 || !mW && OW < 40 ? 0 : Math.min(4, Math.ceil(OW / 30)));
        var OW, mW;
        if (sW.current = !0, hW(NW).length > hW(WW).length && bW(VW++), iW > 0) {
          const WW = [];
          for (let OW = 0; OW < iW; OW++) WW.push({
            id: VW++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * OW
          });
          UW((iW => [...iW, ...WW]))
        }
        const EW = iW > 0 ? 600 : 0;
        lW({
          id: VW++,
          delayMs: EW
        });
        const LW = performance.now() + EW;
        let cW = 0;
        const tW = iW => {
          const OW = PW.e.clamp((iW - LW) / 600, 0, 1);
          ZW(Math.round(WW + (NW - WW) * OW)), OW < 1 && (cW = requestAnimationFrame(tW))
        };
        return cW = requestAnimationFrame(tW), () => {
          cancelAnimationFrame(cW)
        }
      }), [NW, SW]);
      const TW = function(WW) {
          var iW;
          const OW = null !== (iW = LW.find((iW => WW < JW(iW)))) && void 0 !== iW ? iW : "Super";
          return {
            rarity: OW,
            progress: PW.e.clamp(WW / JW(OW), 0, 1)
          }
        }(tW),
        nW = hW(tW).at(-1);
      return (0, gW.jsxs)(gW.Fragment, {
        children: [(0, gW.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, gW.jsxs)("div", {
            className: YW()("LuckyCloverWallet", {
              Capped: nW && "Basic" !== nW
            }),
            style: nW && {
              "--luckyTierColour": DW[nW]
            },
            children: [(0, gW.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${TW.progress})`
              }
            }), AW > 0 && (0, gW.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(iW=null===xW||void 0===xW?void 0:xW.delayMs)&&void 0!==iW?iW:0}ms`
              }
            }, AW), (0, gW.jsx)("div", {
              ref: MW,
              className: YW()("LuckyCloverWalletIcon", xW && "Bounce"),
              style: {
                animationDelay: `${null!==(mW=null===xW||void 0===xW?void 0:xW.delayMs)&&void 0!==mW?mW:0}ms`
              },
              children: (0, gW.jsx)(dW.b, {
                itemName: yW,
                amount: 0
              })
            }, null !== (OW = null === xW || void 0 === xW ? void 0 : xW.id) && void 0 !== OW ? OW : 0), (0, gW.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: tW
            }), nW && (0, gW.jsx)(vW.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, KW.createPortal)(jW.map((WW => (0, gW.jsx)(CW, {
          flyer: WW,
          target: MW,
          onDone: () => {
            UW((iW => iW.filter((iW => iW.id !== WW.id))))
          }
        }, WW.id))), document.body)]
      })
    }

    function CW(WW) {
      let {
        flyer: iW,
        target: OW,
        onDone: mW
      } = WW;
      const NW = (0, EW.useRef)(null);
      return (0, EW.useEffect)((() => {
        var WW;
        const EW = null === (WW = OW.current) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
        if (!NW.current || !EW) return void mW();
        const {
          x: PW,
          y: LW
        } = iW, cW = PW + 140 * (Math.random() - .5), wW = LW - 30 - 40 * Math.random(), tW = NW.current.animate([{
          transform: `translate(${PW}px, ${LW}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${cW}px, ${wW}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${EW.left}px, ${EW.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: iW.delayMs,
          fill: "backwards"
        });
        return tW.onfinish = mW, () => {
          tW.cancel()
        }
      }), []), (0, gW.jsx)("div", {
        ref: NW,
        className: "LuckyCloverFlying",
        children: (0, gW.jsx)(dW.b, {
          itemName: yW,
          amount: 0
        })
      })
    }
    var XW = OW(27);
    const BW = "luckyGearUpgradeView",
      qW = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function RW(WW) {
      var iW;
      return null !== (iW = qW[WW.split(" ")[0]]) && void 0 !== iW ? iW : "#e07bff"
    }
    class GW {
      constructor(WW, iW) {
        this.selectedSlot = WW, this.itemAt = iW, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      yZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [OW, mW, EW] of WW) this.rings.push({
          id: this.nextId++,
          slot: OW,
          colour: RW(EW),
          until: iW + 1200
        }), OW !== this.selectedSlot() && this.unseen.set(OW, {
          from: mW,
          to: EW
        });
        this.iZ()
      }
      hZ() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const iW = this.rings.filter((iW => iW.until > WW));
        let OW = iW.length !== this.rings.length;
        this.rings = iW;
        for (const [mW, {
            from: EW,
            to: NW
          }] of this.unseen) {
          const WW = this.itemAt(mW);
          (mW === this.selectedSlot() || WW !== NW && WW !== EW) && (this.unseen.delete(mW), OW = !0)
        }
        OW && this.iZ()
      }
      iZ() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, XW.l.iZ(BW, this.view)
      }
    }
    var IW = OW(1526);

    function aW(WW) {
      return document.querySelector(`.HotBar [data-inven-idx="${WW}"]`)
    }

    function rW(WW) {
      let {
        ring: iW
      } = WW;
      const [OW, mW] = (0, EW.useState)(null);
      return (0, EW.useLayoutEffect)((() => {
        var WW, OW;
        mW(null !== (WW = null === (OW = aW(iW.slot)) || void 0 === OW ? void 0 : OW.getBoundingClientRect()) && void 0 !== WW ? WW : null)
      }), [iW]), OW ? (0, gW.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: OW.left,
          top: OW.top,
          width: OW.width,
          height: OW.height,
          "--ringColour": iW.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function zW(WW) {
      let {
        slot: iW
      } = WW;
      const [OW, mW] = (0, EW.useState)(null);
      return (0, EW.useLayoutEffect)((() => {
        const WW = () => {
          mW(aW(iW))
        };
        WW();
        const OW = new MutationObserver(WW),
          EW = document.querySelector(".BottomMiddleElements");
        return EW && OW.observe(EW, {
          childList: !0,
          subtree: !0
        }), () => {
          OW.disconnect()
        }
      }), [iW]), OW ? (0, KW.createPortal)((0, gW.jsx)("div", {
        className: "LuckyGearUnseen"
      }), OW) : null
    }

    function FW(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, IW.g)(BW, iW.getView());
      return (0, gW.jsxs)(gW.Fragment, {
        children: [OW.rings.map((WW => (0, gW.jsx)(rW, {
          ring: WW
        }, WW.id))), OW.unseenSlots.map((WW => (0, gW.jsx)(zW, {
          slot: WW
        }, WW)))]
      })
    }
    const QW = function(WW, iW, OW, PW) {
      let LW, {
          localPlayerId: cW
        } = PW,
        wW = null;
      const tW = new kW({
          itemAt: WW => LW.getItemSlot(cW, WW),
          selectedSlot: () => LW.getSelectedInventorySlotI(cW),
          swap: (WW, iW) => {
            LW.swapInventorySlots(WW, iW)
          }
        }),
        ZW = new GW((() => LW.getSelectedInventorySlotI(cW)), (WW => {
          var iW;
          return null === (iW = LW.getItemSlot(cW, WW)) || void 0 === iW ? void 0 : iW.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, NW.d)()
        },
        onCreate: WW => {
          LW = WW, wW = (0, MW.O)((0, EW.createElement)(EW.Fragment, null, (0, EW.createElement)(pW), (0, EW.createElement)(FW, {
            controller: ZW
          })))
        },
        onClose: () => {
          var WW;
          null === (WW = wW) || void 0 === WW || WW()
        },
        hZ: () => {
          tW.hZ(), ZW.hZ()
        },
        onReceivedMessageFromServer: (WW, iW) => {
          "luckyGearUpgrade" === WW && ZW.yZ(iW)
        },
        onPlayerChangeBlock: (WW, iW, OW, mW, EW, NW) => {
          "Air" !== NW && tW.onPlace(NW)
        },
        onPlayerDropItem: (WW, iW, OW, mW) => {
          tW.onDrop(iW, mW)
        },
        onPlayerAltAction: (WW, iW, OW, EW, NW, PW) => {
          if (!PW || "Mesh" !== LW.getEntityType(PW)) return;
          const cW = LW.getEntityName(PW),
            wW = Object.values(mW).find((WW => WW.name === cW));
          wW && LW.openShop(WW, !1, wW.shopTab)
        }
      }
    }
  },
  39220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(344),
      EW = OW(38097),
      NW = OW(5187);
    const PW = ["Leaf Bed", "_Leaf Bed Head", ...mW.yc.flatMap((WW => [`${WW} Bed`, `_${WW} Bed Head`, `${WW} Strongbed`, `_${WW} Strongbed Head`]))];

    function LW() {
      let WW;
      return {
        onCreate(iW) {
          WW = iW
        },
        altVetoBlocks: PW,
        onPlayerAttemptAltAction(iW, OW, mW, PW, LW, cW) {
          var wW;
          if ((0, EW.d)(WW.getMetaInfo(LW).rootName) && !WW.isEntityInteractable(cW) && (0, NW.f)(null === (wW = WW.kOW(iW)) || void 0 === wW ? void 0 : wW.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38097: (WW, iW, OW) => {
    function mW(WW) {
      return WW.includes("Leaf Bed")
    }

    function EW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !mW(WW)
    }

    function NW(WW) {
      return WW.includes(" Strongbed")
    }

    function PW(WW) {
      return mW(WW) || EW(WW) || NW(WW)
    }
    OW.d(iW, {
      d: () => PW,
      f: () => mW,
      j: () => NW,
      l: () => EW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);