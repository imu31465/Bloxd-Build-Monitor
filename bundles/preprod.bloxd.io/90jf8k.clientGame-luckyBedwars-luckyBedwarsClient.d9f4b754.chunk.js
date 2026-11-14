export const id = 17;
export const ids = [17];
export const modules = {
  35122: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      e: () => QF,
      f: () => eF,
      h: () => iW
    });
    var CF = SF(8210),
      AF = SF(35131),
      uF = SF(35133),
      hF = SF(7700),
      bW = SF(1262),
      dF = SF(46),
      PF = SF(61),
      RF = SF(971);

    function iW() {
      var FF;
      return (0, bW.i)(AF.b, (0, AF.j)()), (0, RF.jsx)(RF.Fragment, {
        children: null === (FF = (0, AF.j)()) || void 0 === FF ? void 0 : FF.content
      })
    }

    function eF(FF) {
      var WF;
      let {
        show: SF
      } = FF;
      (0, bW.i)(AF.b, (0, AF.j)());
      const PF = null === (WF = (0, AF.j)()) || void 0 === WF ? void 0 : WF.menu;
      return (0, dF.useEffect)((() => {
        SF || (null === PF || void 0 === PF || PF.onClose(), (0, uF.r)())
      }), [SF, PF]), (0, dF.useEffect)((() => SF ? (0, hF.i)(uF.A, uF.h) : void 0), [SF]), (0, RF.jsx)(CF.d, {
        showing: SF,
        globallyUniqueKey: "clientGameMenu",
        children: null === PF || void 0 === PF ? void 0 : PF.content
      })
    }

    function EF(FF) {
      let {
        placement: WF = "bottom"
      } = FF;
      return (0, RF.jsx)("div", {
        id: `clientGameHud-${WF}`,
        style: {
          display: "contents"
        }
      })
    }

    function QF(FF) {
      let {
        children: WF,
        placement: SF = "bottom"
      } = FF;
      const [CF, AF] = (0, dF.useState)(null);
      return (0, dF.useEffect)((() => {
        AF(document.getElementById(`clientGameHud-${SF}`))
      }), [SF]), CF ? (0, PF.createPortal)(WF, CF) : null
    }
  },
  8210: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(3618),
      AF = SF(3621);

    function uF(FF) {
      let {
        children: WF,
        showing: SF,
        globallyUniqueKey: uF,
        alwaysMountChildren: hF = !1,
        doGameplayStartStopOnShow: bW = !0
      } = FF;
      return (0, AF.d)(!0, SF, uF), (0, CF.b)(bW, SF), SF || hF ? WF : null
    }
  },
  7700: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      i: () => AF
    });
    let CF = null;
    const AF = function(FF) {
        const WF = {
          cycle: FF,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return CF = WF, () => {
          CF === WF && (CF = null)
        }
      },
      uF = () => {
        var FF;
        return null !== (FF = CF) && void 0 !== FF && FF.canCycle() ? CF.cycle : null
      }
  },
  35133: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => QF,
      D: () => TF,
      e: () => uF,
      h: () => rW,
      i: () => gW,
      l: () => bW,
      p: () => eF,
      r: () => tW,
      t: () => iW,
      w: () => aW
    });
    var CF = SF(11),
      AF = SF(20);
    const uF = "clientGameInventoryButtonsChanged",
      hF = new Map;

    function bW() {
      return [...hF.values()].sort(((FF, WF) => {
        var SF, CF;
        return (null !== (SF = FF.order) && void 0 !== SF ? SF : 0) - (null !== (CF = WF.order) && void 0 !== CF ? CF : 0)
      }))
    }
    let dF = null;

    function PF(FF) {
      dF = FF
    }
    let RF = !1;

    function iW(FF) {
      RF = !0;
      try {
        FF.onClick()
      } finally {
        RF = !1
      }
      FF.panel && "clientGame" === CF.b.get("openInGameMenuName") && PF(FF.id)
    }

    function eF() {
      return RF
    }

    function EF() {
      return bW().filter((FF => FF.panel && !FF.disabled))
    }

    function QF(FF) {
      const WF = EF(),
        SF = WF.findIndex((FF => FF.id === dF));
      return !(SF < 0 || WF.length < 2) && (iW(WF[(SF + FF + WF.length) % WF.length]), !0)
    }

    function rW() {
      return null !== dF && EF().length > 1
    }

    function gW() {
      PF(null)
    }

    function tW() {
      "inventory" !== CF.b.get("openInGameMenuName") && PF(null)
    }

    function TF() {
      const FF = dF;
      return PF(null), FF
    }

    function aW(FF) {
      return hF.set(FF.id, FF), AF.j.Uu(uF, bW(), !0), () => {
        hF.get(FF.id) === FF && (hF.delete(FF.id), AF.j.Uu(uF, bW()))
      }
    }
  },
  35131: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => gW,
      e: () => tW,
      h: () => eF,
      j: () => PF,
      n: () => rW,
      p: () => EF,
      r: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(1144),
      hF = SF(35133);
    const bW = "clientGameUiChanged";
    let dF = null;

    function PF() {
      return dF
    }

    function RF(FF, WF) {
      const SF = {
        content: FF,
        menu: WF
      };
      return dF = SF, AF.j.Uu(bW, dF, !0), () => {
        dF === SF && (dF = null, QF = !1, gW(), AF.j.Uu(bW, null))
      }
    }
    let iW = null;

    function eF() {
      return iW
    }

    function EF(FF) {
      return iW = FF, () => {
        iW === FF && (iW = null)
      }
    }
    let QF = !1;

    function rW() {
      const FF = CF.b.get("openInGameMenuName");
      "clientGame" !== FF && (QF = "inventory" === FF), (0, hF.p)() || (0, hF.i)(), (0, uF.h)("InGameMenu"), CF.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gW() {
      TF(!1)
    }

    function tW() {
      TF(QF)
    }

    function TF(FF) {
      "clientGame" === CF.b.get("openInGameMenuName") && CF.b.set({
        openInGameMenuName: FF ? "inventory" : null
      }), FF || (0, hF.i)(), QF = !1
    }
  },
  37631: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => FW
    });
    const CF = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var AF = SF(46),
      uF = SF(36437),
      hF = SF(20),
      bW = SF(271);
    const dF = ["Basic", "Rare", "Super"];

    function PF(FF, WF) {
      return `${"Basic"===WF?"":`${WF} `}${"Simple"===FF?"":`${FF} `}Lucky Block`
    }
    const RF = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((FF => dF.map((WF => [PF(FF, WF), {
      category: FF,
      rarity: WF
    }])))));
    RF.keys();

    function iW(FF) {
      return RF.get(FF)
    }
    const eF = "Obsidian",
      EF = ["Cobweb"],
      QF = [...["Red", "Blue", "Green", "Yellow"].map((FF => `${(0,bW.Y)(FF)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", eF, ...EF];

    function rW(FF) {
      return QF.includes(FF)
    }
    var gW = SF(568);

    function tW(FF, WF) {
      const SF = iW(FF);
      if (SF) {
        const FF = iW(WF);
        if (!FF) return;
        const CF = dF.length - 1 - dF.indexOf(FF.rarity);
        return (FF.category === SF.category ? 0 : 1) * dF.length + CF
      }
      if (!rW(FF)) return;
      if (WF === FF) return 0;
      const CF = FF => rW(FF) && !EF.includes(FF) && FF !== eF;
      return CF(FF) && CF(WF) ? 1 : void 0
    }
    const TF = [...Array.from({
      length: gW.s - gW.q
    }, ((FF, WF) => gW.q + WF)), ...Array.from({
      length: gW.q
    }, ((FF, WF) => WF))];
    class aW {
      constructor(FF) {
        this.inventory = FF, this.pending = new Map, this.lastSwap = null
      }
      onPlace(FF) {
        var WF;
        const SF = this.inventory.selectedSlot(),
          CF = this.inventory.itemAt(SF);
        (null === CF || void 0 === CF ? void 0 : CF.name) === FF && (null !== (WF = CF.amount) && void 0 !== WF ? WF : 1) <= 1 && kW(FF) && this.pending.set(SF, FF)
      }
      onDrop(FF, WF) {
        WF < gW.q && null === this.inventory.itemAt(WF) && kW(FF) && this.refill(WF, FF)
      }
      lF() {
        const FF = [...this.pending];
        this.pending.clear();
        for (const [WF, SF] of FF) null === this.inventory.itemAt(WF) && this.refill(WF, SF)
      }
      onInventorySynced() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        const WF = this.lastSwap;
        WF && (FF - WF.at >= 2e3 ? this.lastSwap = null : qW(this.inventory.itemAt(WF.source), WF.moved) && !qW(this.inventory.itemAt(WF.slot), WF.moved) && this.inventory.redoSwapLocally(WF.slot, WF.source))
      }
      refill(FF, WF) {
        const SF = function(FF, WF, SF, CF) {
            let AF, uF = 1 / 0;
            for (const hF of TF) {
              if (hF === WF) continue;
              const bW = CF(hF);
              if (!bW || hF < gW.q && WF !== SF) continue;
              const dF = tW(FF, bW.name);
              void 0 !== dF && dF < uF && (AF = hF, uF = dF)
            }
            return AF
          }(WF, FF, this.inventory.selectedSlot(), this.inventory.itemAt),
          CF = void 0 === SF ? null : this.inventory.itemAt(SF);
        void 0 !== SF && CF && (this.lastSwap = {
          slot: FF,
          source: SF,
          moved: {
            name: CF.name,
            amount: CF.amount
          },
          at: Date.now()
        }, this.inventory.swap(FF, SF))
      }
    }

    function kW(FF) {
      return !!iW(FF) || rW(FF)
    }

    function qW(FF, WF) {
      return (null === FF || void 0 === FF ? void 0 : FF.name) === WF.name && FF.amount === WF.amount
    }
    var VF = SF(35131),
      NF = SF(61),
      DF = SF(918),
      LF = SF.n(DF);
    const mW = "Lucky Clover",
      OF = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function xW(FF) {
      return OF[FF][0]
    }

    function ZF(FF) {
      return dF.filter((WF => FF >= xW(WF)))
    }
    var oF = SF(220),
      YF = SF(1955),
      MF = SF(11),
      cW = SF(2004),
      GF = SF(1563),
      zW = SF(35122),
      IF = SF(929);
    var fF = SF(971);
    const yW = {
      Basic: bW.D.whiteUiText,
      Rare: bW.D.goldUiText,
      Super: bW.D.cyanUiText
    };
    let sF = 1;

    function nF() {
      const FF = (0, YF.k)("currencyAmounts"),
        WF = null === FF || void 0 === FF ? void 0 : FF.Clovers;
      return !WF || WF.hidden ? null : (0, fF.jsx)(zW.e, {
        children: (0, fF.jsx)(HF, {
          amount: WF.amount
        })
      })
    }

    function HF(FF) {
      var WF, SF, CF;
      let {
        amount: uF
      } = FF;
      const {
        openEverythingMenuName: hF
      } = (0, MF.d)(["openEverythingMenuName"]), PF = (0, cW.b)(), [RF, iW] = (0, AF.useState)(uF), [eF, EF] = (0, AF.useState)(null), [QF, rW] = (0, AF.useState)(0), [gW, tW] = (0, AF.useState)([]), TF = (0, AF.useRef)(uF), aW = (0, AF.useRef)(!1), kW = (0, AF.useRef)(null), qW = hF === oF.n.SHOP;
      (0, AF.useEffect)((() => {
        const FF = TF.current;
        if (TF.current = uF, uF <= FF || qW) return void iW(uF);
        const WF = PF || gW.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (SF = uF - FF, CF = !aW.current, SF <= 0 || !CF && SF < 40 ? 0 : Math.min(4, Math.ceil(SF / 30)));
        var SF, CF;
        if (aW.current = !0, ZF(uF).length > ZF(FF).length && rW(sF++), WF > 0) {
          const FF = [];
          for (let SF = 0; SF < WF; SF++) FF.push({
            id: sF++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * SF
          });
          tW((WF => [...WF, ...FF]))
        }
        const AF = WF > 0 ? 600 : 0;
        EF({
          id: sF++,
          delayMs: AF
        });
        const hF = performance.now() + AF;
        let dF = 0;
        const RF = WF => {
          const SF = bW.c.clamp((WF - hF) / 600, 0, 1);
          iW(Math.round(FF + (uF - FF) * SF)), SF < 1 && (dF = requestAnimationFrame(RF))
        };
        return dF = requestAnimationFrame(RF), () => {
          cancelAnimationFrame(dF)
        }
      }), [uF, qW]);
      const VF = function(FF) {
          var WF;
          const SF = null !== (WF = dF.find((WF => FF < xW(WF)))) && void 0 !== WF ? WF : "Super";
          return {
            rarity: SF,
            progress: bW.c.clamp(FF / xW(SF), 0, 1)
          }
        }(RF),
        DF = ZF(RF).at(-1);
      return (0, fF.jsxs)(fF.Fragment, {
        children: [(0, fF.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, fF.jsxs)("div", {
            className: LF()("LuckyCloverWallet", {
              Capped: DF && "Basic" !== DF
            }),
            style: DF && {
              "--luckyTierColour": yW[DF]
            },
            children: [(0, fF.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${VF.progress})`
              }
            }), QF > 0 && (0, fF.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(WF=null===eF||void 0===eF?void 0:eF.delayMs)&&void 0!==WF?WF:0}ms`
              }
            }, QF), (0, fF.jsx)("div", {
              ref: kW,
              className: LF()("LuckyCloverWalletIcon", eF && "Bounce"),
              style: {
                animationDelay: `${null!==(CF=null===eF||void 0===eF?void 0:eF.delayMs)&&void 0!==CF?CF:0}ms`
              },
              children: (0, fF.jsx)(GF.b, {
                itemName: mW,
                amount: 0
              })
            }, null !== (SF = null === eF || void 0 === eF ? void 0 : eF.id) && void 0 !== SF ? SF : 0), (0, fF.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: RF
            }), DF && (0, fF.jsx)(IF.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, NF.createPortal)(gW.map((FF => (0, fF.jsx)(KF, {
          flyer: FF,
          target: kW,
          onDone: () => {
            tW((WF => WF.filter((WF => WF.id !== FF.id))))
          }
        }, FF.id))), document.body)]
      })
    }

    function KF(FF) {
      let {
        flyer: WF,
        target: SF,
        onDone: CF
      } = FF;
      const uF = (0, AF.useRef)(null);
      return (0, AF.useEffect)((() => {
        var FF;
        const AF = null === (FF = SF.current) || void 0 === FF ? void 0 : FF.getBoundingClientRect();
        if (!uF.current || !AF) return void CF();
        const {
          x: hF,
          y: bW
        } = WF, dF = hF + 140 * (Math.random() - .5), PF = bW - 30 - 40 * Math.random(), RF = uF.current.animate([{
          transform: `translate(${hF}px, ${bW}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${dF}px, ${PF}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${AF.left}px, ${AF.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: WF.delayMs,
          fill: "backwards"
        });
        return RF.onfinish = CF, () => {
          RF.cancel()
        }
      }), []), (0, fF.jsx)("div", {
        ref: uF,
        className: "LuckyCloverFlying",
        children: (0, fF.jsx)(GF.b, {
          itemName: mW,
          amount: 0
        })
      })
    }
    const wF = "luckyGearUpgradeView",
      XF = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function UF(FF) {
      var WF;
      return null !== (WF = XF[FF.split(" ")[0]]) && void 0 !== WF ? WF : "#e07bff"
    }
    class BF {
      constructor(FF, WF) {
        this.selectedSlot = FF, this.itemAt = WF, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      xA(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [SF, CF, AF] of FF) this.rings.push({
          id: this.nextId++,
          slot: SF,
          colour: UF(AF),
          until: WF + 1200
        }), SF !== this.selectedSlot() && this.unseen.set(SF, {
          from: CF,
          to: AF
        });
        this.Uu()
      }
      lF() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const WF = this.rings.filter((WF => WF.until > FF));
        let SF = WF.length !== this.rings.length;
        this.rings = WF;
        for (const [CF, {
            from: AF,
            to: uF
          }] of this.unseen) {
          const FF = this.itemAt(CF);
          (CF === this.selectedSlot() || FF !== uF && FF !== AF) && (this.unseen.delete(CF), SF = !0)
        }
        SF && this.Uu()
      }
      Uu() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, hF.j.Uu(wF, this.view)
      }
    }
    var jW = SF(1262);

    function vW(FF) {
      return document.querySelector(`.HotBar [data-inven-idx="${FF}"]`)
    }

    function JF(FF) {
      let {
        ring: WF
      } = FF;
      const [SF, CF] = (0, AF.useState)(null);
      return (0, AF.useLayoutEffect)((() => {
        var FF, SF;
        CF(null !== (FF = null === (SF = vW(WF.slot)) || void 0 === SF ? void 0 : SF.getBoundingClientRect()) && void 0 !== FF ? FF : null)
      }), [WF]), SF ? (0, fF.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: SF.left,
          top: SF.top,
          width: SF.width,
          height: SF.height,
          "--ringColour": WF.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function pF(FF) {
      let {
        slot: WF
      } = FF;
      const [SF, CF] = (0, AF.useState)(null);
      return (0, AF.useLayoutEffect)((() => {
        const FF = () => {
          CF(vW(WF))
        };
        FF();
        const SF = new MutationObserver(FF),
          AF = document.querySelector(".BottomMiddleElements");
        return AF && SF.observe(AF, {
          childList: !0,
          subtree: !0
        }), () => {
          SF.disconnect()
        }
      }), [WF]), SF ? (0, NF.createPortal)((0, fF.jsx)("div", {
        className: "LuckyGearUnseen"
      }), SF) : null
    }

    function lF(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, jW.i)(wF, WF.getView());
      return (0, fF.jsxs)(fF.Fragment, {
        children: [SF.rings.map((FF => (0, fF.jsx)(JF, {
          ring: FF
        }, FF.id))), SF.unseenSlots.map((FF => (0, fF.jsx)(pF, {
          slot: FF
        }, FF)))]
      })
    }
    const FW = function(FF, WF, SF, bW) {
      let dF, {
          localPlayerId: PF
        } = bW,
        RF = [],
        iW = null;
      const eF = new aW({
          itemAt: FF => dF.getItemSlot(PF, FF),
          selectedSlot: () => dF.getSelectedInventorySlotI(PF),
          swap: (FF, WF) => {
            dF.swapInventorySlots(FF, WF)
          },
          redoSwapLocally: (FF, WF) => {
            dF.redoInventorySwapLocally(FF, WF)
          }
        }),
        EF = new BF((() => dF.getSelectedInventorySlotI(PF)), (FF => {
          var WF;
          return null === (WF = dF.getItemSlot(PF, FF)) || void 0 === WF ? void 0 : WF.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, uF.b)()
        },
        onCreate: FF => {
          dF = FF, RF = ["syncedInvenFromServer", "chestRefreshedFromServer"].map((FF => hF.j.subscribe(FF, (() => {
            eF.onInventorySynced()
          })))), iW = (0, VF.r)((0, AF.createElement)(AF.Fragment, null, (0, AF.createElement)(nF), (0, AF.createElement)(lF, {
            controller: EF
          })))
        },
        onClose: () => {
          var FF;
          for (const WF of RF) hF.j.unsubscribe(WF);
          RF = [], null === (FF = iW) || void 0 === FF || FF()
        },
        lF: () => {
          eF.lF(), EF.lF()
        },
        onReceivedMessageFromServer: (FF, WF) => {
          "luckyGearUpgrade" === FF && EF.xA(WF)
        },
        onPlayerChangeBlock: (FF, WF, SF, CF, AF, uF) => {
          "Air" !== uF && eF.onPlace(uF)
        },
        onPlayerDropItem: (FF, WF, SF, CF) => {
          eF.onDrop(WF, CF)
        },
        onPlayerAltAction: (FF, WF, SF, AF, uF, hF) => {
          if (!hF || "Mesh" !== dF.getEntityType(hF)) return;
          const bW = dF.getEntityName(hF),
            PF = Object.values(CF).find((FF => FF.name === bW));
          PF && dF.openShop(FF, !1, PF.shopTab)
        }
      }
    }
  },
  36437: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW
    });
    var CF = SF(271),
      AF = SF(35405),
      uF = SF(3566);
    const hF = ["Leaf Bed", "_Leaf Bed Head", ...CF.Dc.flatMap((FF => [`${FF} Bed`, `_${FF} Bed Head`, `${FF} Strongbed`, `_${FF} Strongbed Head`]))];

    function bW() {
      let FF;
      return {
        onCreate(WF) {
          FF = WF
        },
        altVetoBlocks: hF,
        onPlayerAttemptAltAction(WF, SF, CF, hF, bW, dF) {
          var PF;
          if ((0, AF.b)(FF.getMetaInfo(bW).rootName) && !FF.isEntityInteractable(dF) && (0, uF.g)(null === (PF = FF.pbF(WF)) || void 0 === PF ? void 0 : PF.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35405: (FF, WF, SF) => {
    function CF(FF) {
      return FF.includes("Leaf Bed")
    }

    function AF(FF) {
      return / Bed(?: Head)?(?:\||$)/.test(FF) && !CF(FF)
    }

    function uF(FF) {
      return FF.includes(" Strongbed")
    }

    function hF(FF) {
      return CF(FF) || AF(FF) || uF(FF)
    }
    SF.d(WF, {
      b: () => hF,
      f: () => CF,
      i: () => uF,
      m: () => AF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);