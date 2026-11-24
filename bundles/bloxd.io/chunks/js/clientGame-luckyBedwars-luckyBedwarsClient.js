export const id = 19;
export const ids = [19];
export const modules = {
  36616: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      g: () => KS,
      j: () => kS,
      k: () => fS
    });
    var tS = gS(34223),
      bS = gS(36624),
      XS = gS(36632),
      xS = gS(8920),
      NS = gS(1522),
      qS = gS(64),
      uS = gS(77),
      IS = gS(1181);

    function fS() {
      var SS;
      return (0, NS.i)(bS.e, (0, bS.s)()), (0, IS.jsx)(IS.Fragment, {
        children: null === (SS = (0, bS.s)()) || void 0 === SS ? void 0 : SS.content
      })
    }

    function kS(SS) {
      var HS;
      let {
        show: gS
      } = SS;
      (0, NS.i)(bS.e, (0, bS.s)());
      const uS = null === (HS = (0, bS.s)()) || void 0 === HS ? void 0 : HS.menu;
      return (0, qS.useEffect)((() => {
        var SS;
        gS || (null === uS || void 0 === uS || null === (SS = uS.onClose) || void 0 === SS || SS.call(uS), (0, XS.s)())
      }), [gS, uS]), (0, qS.useEffect)((() => gS ? (0, xS.c)(XS.v, XS.h) : void 0), [gS]), (0, IS.jsx)(tS.b, {
        showing: gS,
        globallyUniqueKey: "clientGameMenu",
        children: null === uS || void 0 === uS ? void 0 : uS.content
      })
    }

    function aS(SS) {
      let {
        placement: HS = "bottom"
      } = SS;
      return (0, IS.jsx)("div", {
        id: `clientGameHud-${HS}`,
        style: {
          display: "contents"
        }
      })
    }

    function KS(SS) {
      let {
        children: HS,
        placement: gS = "bottom"
      } = SS;
      const [tS, bS] = (0, qS.useState)(null);
      return (0, qS.useEffect)((() => {
        bS(document.getElementById(`clientGameHud-${gS}`))
      }), [gS]), tS ? (0, uS.createPortal)(HS, tS) : null
    }
  },
  34223: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(4669),
      bS = gS(4675);

    function XS(SS) {
      let {
        children: HS,
        showing: gS,
        globallyUniqueKey: XS,
        alwaysMountChildren: xS = !1,
        doGameplayStartStopOnShow: NS = !0,
        keepsMovement: qS = !1
      } = SS;
      return (0, bS.c)(!0, gS, XS, qS), (0, tS.c)(NS, gS), gS || xS ? HS : null
    }
  },
  8920: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      c: () => bS
    });
    let tS = null;
    const bS = function(SS) {
        const HS = {
          cycle: SS,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tS = HS, () => {
          tS === HS && (tS = null)
        }
      },
      XS = () => {
        var SS;
        return null !== (SS = tS) && void 0 !== SS && SS.canCycle() ? tS.cycle : null
      }
  },
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  39467: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => rS
    });
    const tS = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var bS = gS(64),
      XS = gS(38055),
      xS = gS(387);
    const NS = ["Basic", "Rare", "Super"];

    function qS(SS, HS) {
      return `${"Basic"===HS?"":`${HS} `}${"Simple"===SS?"":`${SS} `}Lucky Block`
    }
    const uS = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((SS => NS.map((HS => [qS(SS, HS), {
      category: SS,
      rarity: HS
    }])))));
    uS.keys();

    function IS(SS) {
      return uS.get(SS)
    }
    const fS = "Obsidian",
      kS = ["Cobweb"],
      aS = [...["Red", "Blue", "Green", "Yellow"].map((SS => `${(0,xS.Q)(SS)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", fS, ...kS];

    function KS(SS) {
      return aS.includes(SS)
    }
    var jS = gS(680);

    function GS(SS, HS) {
      const gS = IS(SS);
      if (gS) {
        const SS = IS(HS);
        if (!SS) return;
        const tS = NS.length - 1 - NS.indexOf(SS.rarity);
        return (SS.category === gS.category ? 0 : 1) * NS.length + tS
      }
      if (!KS(SS)) return;
      if (HS === SS) return 0;
      const tS = SS => KS(SS) && !kS.includes(SS) && SS !== fS;
      return tS(SS) && tS(HS) ? 1 : void 0
    }
    const CS = [...Array.from({
      length: jS.q - jS.n
    }, ((SS, HS) => jS.n + HS)), ...Array.from({
      length: jS.n
    }, ((SS, HS) => HS))];
    class nS {
      constructor(SS) {
        this.inventory = SS, this.pending = new Map
      }
      onPlace(SS) {
        var HS;
        const gS = this.inventory.selectedSlot(),
          tS = this.inventory.itemAt(gS);
        (null === tS || void 0 === tS ? void 0 : tS.name) === SS && (null !== (HS = tS.amount) && void 0 !== HS ? HS : 1) <= 1 && PS(SS) && this.pending.set(gS, SS)
      }
      onDrop(SS, HS) {
        HS < jS.n && null === this.inventory.itemAt(HS) && PS(SS) && this.refill(HS, SS)
      }
      mf() {
        const SS = [...this.pending];
        this.pending.clear();
        for (const [HS, gS] of SS) null === this.inventory.itemAt(HS) && this.refill(HS, gS)
      }
      refill(SS, HS) {
        const gS = function(SS, HS, gS, tS) {
          let bS, XS = 1 / 0;
          for (const xS of CS) {
            if (xS === HS) continue;
            const NS = tS(xS);
            if (!NS || xS < jS.n && HS !== gS) continue;
            const qS = GS(SS, NS.name);
            void 0 !== qS && qS < XS && (bS = xS, XS = qS)
          }
          return bS
        }(HS, SS, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== gS && this.inventory.swap(SS, gS)
      }
    }

    function PS(SS) {
      return !!IS(SS) || KS(SS)
    }
    var QS = gS(36624),
      DS = gS(77),
      wS = gS(1121),
      hS = gS.n(wS);
    const ZS = "Lucky Clover",
      JS = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function OS(SS) {
      return JS[SS][0]
    }

    function dS(SS) {
      return NS.filter((HS => SS >= OS(HS)))
    }
    var cS = gS(369),
      vS = gS(2537),
      ES = gS(24),
      LS = gS(2715),
      YS = gS(2050),
      AS = gS(36616),
      yS = gS(1127);
    var VS = gS(1181);
    const iS = {
      Basic: xS.B.whiteUiText,
      Rare: xS.B.goldUiText,
      Super: xS.B.cyanUiText
    };
    let WS = 1;

    function zS() {
      const SS = (0, vS.i)("currencyAmounts"),
        HS = null === SS || void 0 === SS ? void 0 : SS.Clovers;
      return !HS || HS.hidden ? null : (0, VS.jsx)(AS.g, {
        children: (0, VS.jsx)(US, {
          amount: HS.amount
        })
      })
    }

    function US(SS) {
      var HS, gS, tS;
      let {
        amount: XS
      } = SS;
      const {
        openEverythingMenuName: qS
      } = (0, ES.m)(["openEverythingMenuName"]), uS = (0, LS.c)(), [IS, fS] = (0, bS.useState)(XS), [kS, aS] = (0, bS.useState)(null), [KS, jS] = (0, bS.useState)(0), [GS, CS] = (0, bS.useState)([]), nS = (0, bS.useRef)(XS), PS = (0, bS.useRef)(!1), QS = (0, bS.useRef)(null), wS = qS === cS.q.SHOP;
      (0, bS.useEffect)((() => {
        const SS = nS.current;
        if (nS.current = XS, XS <= SS || wS) return void fS(XS);
        const HS = uS || GS.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (gS = XS - SS, tS = !PS.current, gS <= 0 || !tS && gS < 40 ? 0 : Math.min(4, Math.ceil(gS / 30)));
        var gS, tS;
        if (PS.current = !0, dS(XS).length > dS(SS).length && jS(WS++), HS > 0) {
          const SS = [];
          for (let gS = 0; gS < HS; gS++) SS.push({
            id: WS++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * gS
          });
          CS((HS => [...HS, ...SS]))
        }
        const bS = HS > 0 ? 600 : 0;
        aS({
          id: WS++,
          delayMs: bS
        });
        const NS = performance.now() + bS;
        let qS = 0;
        const IS = HS => {
          const gS = xS.b.clamp((HS - NS) / 600, 0, 1);
          fS(Math.round(SS + (XS - SS) * gS)), gS < 1 && (qS = requestAnimationFrame(IS))
        };
        return qS = requestAnimationFrame(IS), () => {
          cancelAnimationFrame(qS)
        }
      }), [XS, wS]);
      const JS = function(SS) {
          var HS;
          const gS = null !== (HS = NS.find((HS => SS < OS(HS)))) && void 0 !== HS ? HS : "Super";
          return {
            rarity: gS,
            progress: xS.b.clamp(SS / OS(gS), 0, 1)
          }
        }(IS),
        vS = dS(IS).at(-1);
      return (0, VS.jsxs)(VS.Fragment, {
        children: [(0, VS.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, VS.jsxs)("div", {
            className: hS()("LuckyCloverWallet", {
              Capped: vS && "Basic" !== vS
            }),
            style: vS && {
              "--luckyTierColour": iS[vS]
            },
            children: [(0, VS.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${JS.progress})`
              }
            }), KS > 0 && (0, VS.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(HS=null===kS||void 0===kS?void 0:kS.delayMs)&&void 0!==HS?HS:0}ms`
              }
            }, KS), (0, VS.jsx)("div", {
              ref: QS,
              className: hS()("LuckyCloverWalletIcon", kS && "Bounce"),
              style: {
                animationDelay: `${null!==(tS=null===kS||void 0===kS?void 0:kS.delayMs)&&void 0!==tS?tS:0}ms`
              },
              children: (0, VS.jsx)(YS.e, {
                itemName: ZS,
                amount: 0
              })
            }, null !== (gS = null === kS || void 0 === kS ? void 0 : kS.id) && void 0 !== gS ? gS : 0), (0, VS.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: IS
            }), vS && (0, VS.jsx)(yS.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, DS.createPortal)(GS.map((SS => (0, VS.jsx)(pS, {
          flyer: SS,
          target: QS,
          onDone: () => {
            CS((HS => HS.filter((HS => HS.id !== SS.id))))
          }
        }, SS.id))), document.body)]
      })
    }

    function pS(SS) {
      let {
        flyer: HS,
        target: gS,
        onDone: tS
      } = SS;
      const XS = (0, bS.useRef)(null);
      return (0, bS.useEffect)((() => {
        var SS;
        const bS = null === (SS = gS.current) || void 0 === SS ? void 0 : SS.getBoundingClientRect();
        if (!XS.current || !bS) return void tS();
        const {
          x: xS,
          y: NS
        } = HS, qS = xS + 140 * (Math.random() - .5), uS = NS - 30 - 40 * Math.random(), IS = XS.current.animate([{
          transform: `translate(${xS}px, ${NS}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${qS}px, ${uS}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${bS.left}px, ${bS.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: HS.delayMs,
          fill: "backwards"
        });
        return IS.onfinish = tS, () => {
          IS.cancel()
        }
      }), []), (0, VS.jsx)("div", {
        ref: XS,
        className: "LuckyCloverFlying",
        children: (0, VS.jsx)(YS.e, {
          itemName: ZS,
          amount: 0
        })
      })
    }
    var sS = gS(31);
    const BS = "luckyGearUpgradeView",
      MS = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function FS(SS) {
      var HS;
      return null !== (HS = MS[SS.split(" ")[0]]) && void 0 !== HS ? HS : "#e07bff"
    }
    class RS {
      constructor(SS, HS) {
        this.selectedSlot = SS, this.itemAt = HS, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      wK(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [gS, tS, bS] of SS) this.rings.push({
          id: this.nextId++,
          slot: gS,
          colour: FS(bS),
          until: HS + 1200
        }), gS !== this.selectedSlot() && this.unseen.set(gS, {
          from: tS,
          to: bS
        });
        this.cj()
      }
      mf() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const HS = this.rings.filter((HS => HS.until > SS));
        let gS = HS.length !== this.rings.length;
        this.rings = HS;
        for (const [tS, {
            from: bS,
            to: XS
          }] of this.unseen) {
          const SS = this.itemAt(tS);
          (tS === this.selectedSlot() || SS !== XS && SS !== bS) && (this.unseen.delete(tS), gS = !0)
        }
        gS && this.cj()
      }
      cj() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, sS.k.cj(BS, this.view)
      }
    }
    var TS = gS(1522);

    function oS(SS) {
      return document.querySelector(`.HotBar [data-inven-idx="${SS}"]`)
    }

    function lS(SS) {
      let {
        ring: HS
      } = SS;
      const [gS, tS] = (0, bS.useState)(null);
      return (0, bS.useLayoutEffect)((() => {
        var SS, gS;
        tS(null !== (SS = null === (gS = oS(HS.slot)) || void 0 === gS ? void 0 : gS.getBoundingClientRect()) && void 0 !== SS ? SS : null)
      }), [HS]), gS ? (0, VS.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: gS.left,
          top: gS.top,
          width: gS.width,
          height: gS.height,
          "--ringColour": HS.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function mS(SS) {
      let {
        slot: HS
      } = SS;
      const [gS, tS] = (0, bS.useState)(null);
      return (0, bS.useLayoutEffect)((() => {
        const SS = () => {
          tS(oS(HS))
        };
        SS();
        const gS = new MutationObserver(SS),
          bS = document.querySelector(".BottomMiddleElements");
        return bS && gS.observe(bS, {
          childList: !0,
          subtree: !0
        }), () => {
          gS.disconnect()
        }
      }), [HS]), gS ? (0, DS.createPortal)((0, VS.jsx)("div", {
        className: "LuckyGearUnseen"
      }), gS) : null
    }

    function eS(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, TS.i)(BS, HS.getView());
      return (0, VS.jsxs)(VS.Fragment, {
        children: [gS.rings.map((SS => (0, VS.jsx)(lS, {
          ring: SS
        }, SS.id))), gS.unseenSlots.map((SS => (0, VS.jsx)(mS, {
          slot: SS
        }, SS)))]
      })
    }
    const rS = function(SS, HS, gS, xS) {
      let NS, {
          localPlayerId: qS
        } = xS,
        uS = null;
      const IS = new nS({
          itemAt: SS => NS.getItemSlot(qS, SS),
          selectedSlot: () => NS.getSelectedInventorySlotI(qS),
          swap: (SS, HS) => {
            NS.swapInventorySlots(SS, HS)
          }
        }),
        fS = new RS((() => NS.getSelectedInventorySlotI(qS)), (SS => {
          var HS;
          return null === (HS = NS.getItemSlot(qS, SS)) || void 0 === HS ? void 0 : HS.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, XS.c)()
        },
        onCreate: SS => {
          NS = SS, uS = (0, QS.y)((0, bS.createElement)(bS.Fragment, null, (0, bS.createElement)(zS), (0, bS.createElement)(eS, {
            controller: fS
          })))
        },
        onClose: () => {
          var SS;
          null === (SS = uS) || void 0 === SS || SS()
        },
        mf: () => {
          IS.mf(), fS.mf()
        },
        onReceivedMessageFromServer: (SS, HS) => {
          "luckyGearUpgrade" === SS && fS.wK(HS)
        },
        onPlayerChangeBlock: (SS, HS, gS, tS, bS, XS) => {
          "Air" !== XS && IS.onPlace(XS)
        },
        onPlayerDropItem: (SS, HS, gS, tS) => {
          IS.onDrop(HS, tS)
        },
        onPlayerAltAction: (SS, HS, gS, bS, XS, xS) => {
          if (!xS || "Mesh" !== NS.getEntityType(xS)) return;
          const qS = NS.getEntityName(xS),
            uS = Object.values(tS).find((SS => SS.name === qS));
          uS && NS.openShop(SS, !1, uS.shopTab)
        }
      }
    }
  },
  38055: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(387),
      bS = gS(36961),
      XS = gS(4602);
    const xS = ["Leaf Bed", "_Leaf Bed Head", ...tS.Cc.flatMap((SS => [`${SS} Bed`, `_${SS} Bed Head`, `${SS} Strongbed`, `_${SS} Strongbed Head`]))];

    function NS() {
      let SS;
      return {
        onCreate(HS) {
          SS = HS
        },
        altVetoBlocks: xS,
        onPlayerAttemptAltAction(HS, gS, tS, xS, NS, qS) {
          var uS;
          if ((0, bS.e)(SS.getMetaInfo(NS).rootName) && !SS.isEntityInteractable(qS) && (0, XS.e)(null === (uS = SS.AHS(HS)) || void 0 === uS ? void 0 : uS.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36961: (SS, HS, gS) => {
    function tS(SS) {
      return SS.includes("Leaf Bed")
    }

    function bS(SS) {
      return / Bed(?: Head)?(?:\||$)/.test(SS) && !tS(SS)
    }

    function XS(SS) {
      return SS.includes(" Strongbed")
    }

    function xS(SS) {
      return tS(SS) || bS(SS) || XS(SS)
    }
    gS.d(HS, {
      e: () => xS,
      g: () => tS,
      k: () => XS,
      l: () => bS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);