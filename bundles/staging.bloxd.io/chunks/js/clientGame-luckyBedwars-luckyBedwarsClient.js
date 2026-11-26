export const id = 22;
export const ids = [22];
export const modules = {
  37756: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => rV,
      e: () => kV,
      f: () => vV,
      h: () => ZV
    });
    var JV = xV(35300),
      YV = xV(37762),
      UV = xV(37771),
      yV = xV(9335),
      pV = xV(1542),
      QV = xV(62),
      nV = xV(78),
      wV = xV(1321);

    function ZV() {
      var VV;
      return (0, pV.j)(YV.e, (0, YV.p)()), (0, wV.jsx)(wV.Fragment, {
        children: null === (VV = (0, YV.p)()) || void 0 === VV ? void 0 : VV.content
      })
    }

    function vV(VV) {
      var eV;
      let {
        show: xV
      } = VV;
      (0, pV.j)(YV.e, (0, YV.p)());
      const nV = null === (eV = (0, YV.p)()) || void 0 === eV ? void 0 : eV.menu;
      return (0, QV.useEffect)((() => {
        var VV;
        xV || (null === nV || void 0 === nV || null === (VV = nV.onClose) || void 0 === VV || VV.call(nV), (0, UV.q)())
      }), [xV, nV]), (0, QV.useEffect)((() => xV ? (0, yV.g)(UV.t, UV.g) : void 0), [xV]), (0, wV.jsx)(JV.c, {
        showing: xV,
        globallyUniqueKey: "clientGameMenu",
        children: null === nV || void 0 === nV ? void 0 : nV.content
      })
    }

    function rV(VV) {
      let {
        placement: eV = "bottom"
      } = VV;
      return (0, wV.jsx)("div", {
        id: `clientGameHud-${eV}`,
        style: {
          display: "contents"
        }
      })
    }

    function kV(VV) {
      let {
        children: eV,
        placement: xV = "bottom"
      } = VV;
      const [JV, YV] = (0, QV.useState)(null);
      return (0, QV.useEffect)((() => {
        YV(document.getElementById(`clientGameHud-${xV}`))
      }), [xV]), JV ? (0, nV.createPortal)(eV, JV) : null
    }
  },
  35300: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5015),
      YV = xV(5020);

    function UV(VV) {
      let {
        children: eV,
        showing: xV,
        globallyUniqueKey: UV,
        alwaysMountChildren: yV = !1,
        doGameplayStartStopOnShow: pV = !0,
        keepsMovement: QV = !1
      } = VV;
      return (0, YV.b)(!0, xV, UV, QV), (0, JV.c)(pV, xV), xV || yV ? eV : null
    }
  },
  9335: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => YV
    });
    let JV = null;
    const YV = function(VV) {
        const eV = {
          cycle: VV,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return JV = eV, () => {
          JV === eV && (JV = null)
        }
      },
      UV = () => {
        var VV;
        return null !== (VV = JV) && void 0 !== VV && VV.canCycle() ? JV.cycle : null
      }
  },
  37771: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => bV,
      j: () => EV,
      m: () => pV,
      o: () => vV,
      q: () => BV,
      r: () => ZV,
      s: () => qV,
      t: () => kV,
      u: () => jV
    });
    var JV = xV(27),
      YV = xV(32);
    const UV = "clientGameInventoryButtonsChanged",
      yV = new Map;

    function pV() {
      return [...yV.values()].sort(((VV, eV) => {
        var xV, JV;
        return (null !== (xV = VV.order) && void 0 !== xV ? xV : 0) - (null !== (JV = eV.order) && void 0 !== JV ? JV : 0)
      }))
    }
    let QV = null;

    function nV(VV) {
      QV = VV
    }
    let wV = !1;

    function ZV(VV) {
      wV = !0;
      try {
        VV.onClick()
      } finally {
        wV = !1
      }
      VV.panel && "clientGame" === JV.b.get("openInGameMenuName") && nV(VV.id)
    }

    function vV() {
      return wV
    }

    function rV() {
      return pV().filter((VV => VV.panel && !VV.disabled))
    }

    function kV(VV) {
      const eV = rV(),
        xV = eV.findIndex((VV => VV.id === QV));
      return !(xV < 0 || eV.length < 2) && (ZV(eV[(xV + VV + eV.length) % eV.length]), !0)
    }

    function bV() {
      return null !== QV && rV().length > 1
    }

    function EV() {
      nV(null)
    }

    function BV() {
      "inventory" !== JV.b.get("openInGameMenuName") && nV(null)
    }

    function jV() {
      const VV = QV;
      return nV(null), VV
    }

    function qV(VV) {
      return yV.set(VV.id, VV), YV.h.QZ(UV, pV(), !0), () => {
        yV.get(VV.id) === VV && (yV.delete(VV.id), YV.h.QZ(UV, pV()))
      }
    }
  },
  37762: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      h: () => jV,
      i: () => EV,
      m: () => BV,
      o: () => vV,
      p: () => nV,
      r: () => bV,
      v: () => rV,
      z: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(37771);
    const pV = "clientGameUiChanged";
    let QV = null;

    function nV() {
      return QV
    }

    function wV(VV, eV) {
      const xV = {
        content: VV,
        menu: eV
      };
      return QV = xV, YV.h.QZ(pV, QV, !0), () => {
        QV === xV && (QV = null, kV = !1, EV(), YV.h.QZ(pV, null))
      }
    }
    let ZV = null;

    function vV() {
      return ZV
    }

    function rV(VV) {
      return ZV = VV, () => {
        ZV === VV && (ZV = null)
      }
    }
    let kV = !1;

    function bV() {
      const VV = JV.b.get("openInGameMenuName");
      "clientGame" !== VV && (kV = "inventory" === VV), (0, yV.o)() || (0, yV.j)(), (0, UV.p)(UV.d), JV.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function EV() {
      qV(!1)
    }

    function BV() {
      qV(kV)
    }

    function jV() {
      kV && qV(!1)
    }

    function qV(VV) {
      "clientGame" === JV.b.get("openInGameMenuName") && JV.b.set({
        openInGameMenuName: VV ? "inventory" : null
      }), VV || (0, yV.j)(), kV = !1
    }
  },
  40706: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => OV
    });
    const JV = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var YV = xV(62),
      UV = xV(39192),
      yV = xV(375);
    const pV = ["Basic", "Rare", "Super"];

    function QV(VV, eV) {
      return `${"Basic"===eV?"":`${eV} `}${"Simple"===VV?"":`${VV} `}Lucky Block`
    }
    const nV = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((VV => pV.map((eV => [QV(VV, eV), {
      category: VV,
      rarity: eV
    }])))));
    nV.keys();

    function wV(VV) {
      return nV.get(VV)
    }
    const ZV = "Obsidian",
      vV = ["Cobweb"],
      rV = [...["Red", "Blue", "Green", "Yellow"].map((VV => `${(0,yV.Y)(VV)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", ZV, ...vV];

    function kV(VV) {
      return rV.includes(VV)
    }
    var bV = xV(657);

    function EV(VV, eV) {
      const xV = wV(VV);
      if (xV) {
        const VV = wV(eV);
        if (!VV) return;
        const JV = pV.length - 1 - pV.indexOf(VV.rarity);
        return (VV.category === xV.category ? 0 : 1) * pV.length + JV
      }
      if (!kV(VV)) return;
      if (eV === VV) return 0;
      const JV = VV => kV(VV) && !vV.includes(VV) && VV !== ZV;
      return JV(VV) && JV(eV) ? 1 : void 0
    }
    const BV = [...Array.from({
      length: bV.p - bV.n
    }, ((VV, eV) => bV.n + eV)), ...Array.from({
      length: bV.n
    }, ((VV, eV) => eV))];
    class jV {
      constructor(VV) {
        this.inventory = VV, this.pending = new Map
      }
      onPlace(VV) {
        var eV;
        const xV = this.inventory.selectedSlot(),
          JV = this.inventory.itemAt(xV);
        (null === JV || void 0 === JV ? void 0 : JV.name) === VV && (null !== (eV = JV.amount) && void 0 !== eV ? eV : 1) <= 1 && qV(VV) && this.pending.set(xV, VV)
      }
      onDrop(VV, eV) {
        eV < bV.n && null === this.inventory.itemAt(eV) && qV(VV) && this.refill(eV, VV)
      }
      iZ() {
        const VV = [...this.pending];
        this.pending.clear();
        for (const [eV, xV] of VV) null === this.inventory.itemAt(eV) && this.refill(eV, xV)
      }
      refill(VV, eV) {
        const xV = function(VV, eV, xV, JV) {
          let YV, UV = 1 / 0;
          for (const yV of BV) {
            if (yV === eV) continue;
            const pV = JV(yV);
            if (!pV || yV < bV.n && eV !== xV) continue;
            const QV = EV(VV, pV.name);
            void 0 !== QV && QV < UV && (YV = yV, UV = QV)
          }
          return YV
        }(eV, VV, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== xV && this.inventory.swap(VV, xV)
      }
    }

    function qV(VV) {
      return !!wV(VV) || kV(VV)
    }
    var tV = xV(37762),
      FV = xV(78),
      TV = xV(1146),
      PV = xV.n(TV);
    const AV = "Lucky Clover",
      NV = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function XV(VV) {
      return NV[VV][0]
    }

    function MV(VV) {
      return pV.filter((eV => VV >= XV(eV)))
    }
    var zV = xV(364),
      GV = xV(2693),
      WV = xV(27),
      RV = xV(2880),
      gV = xV(2039),
      DV = xV(37756),
      iV = xV(1414);
    var CV = xV(1321);
    const aV = {
      Basic: yV.E.whiteUiText,
      Rare: yV.E.goldUiText,
      Super: yV.E.cyanUiText
    };
    let oV = 1;

    function cV() {
      const VV = (0, GV.j)("currencyAmounts"),
        eV = null === VV || void 0 === VV ? void 0 : VV.Clovers;
      return !eV || eV.hidden ? null : (0, CV.jsx)(DV.e, {
        children: (0, CV.jsx)(hV, {
          amount: eV.amount
        })
      })
    }

    function hV(VV) {
      var eV, xV, JV;
      let {
        amount: UV
      } = VV;
      const {
        openEverythingMenuName: QV
      } = (0, WV.l)(["openEverythingMenuName"]), nV = (0, RV.b)(), [wV, ZV] = (0, YV.useState)(UV), [vV, rV] = (0, YV.useState)(null), [kV, bV] = (0, YV.useState)(0), [EV, BV] = (0, YV.useState)([]), jV = (0, YV.useRef)(UV), qV = (0, YV.useRef)(!1), tV = (0, YV.useRef)(null), TV = QV === zV.q.SHOP;
      (0, YV.useEffect)((() => {
        const VV = jV.current;
        if (jV.current = UV, UV <= VV || TV) return void ZV(UV);
        const eV = nV || EV.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (xV = UV - VV, JV = !qV.current, xV <= 0 || !JV && xV < 40 ? 0 : Math.min(4, Math.ceil(xV / 30)));
        var xV, JV;
        if (qV.current = !0, MV(UV).length > MV(VV).length && bV(oV++), eV > 0) {
          const VV = [];
          for (let xV = 0; xV < eV; xV++) VV.push({
            id: oV++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * xV
          });
          BV((eV => [...eV, ...VV]))
        }
        const YV = eV > 0 ? 600 : 0;
        rV({
          id: oV++,
          delayMs: YV
        });
        const pV = performance.now() + YV;
        let QV = 0;
        const wV = eV => {
          const xV = yV.b.clamp((eV - pV) / 600, 0, 1);
          ZV(Math.round(VV + (UV - VV) * xV)), xV < 1 && (QV = requestAnimationFrame(wV))
        };
        return QV = requestAnimationFrame(wV), () => {
          cancelAnimationFrame(QV)
        }
      }), [UV, TV]);
      const NV = function(VV) {
          var eV;
          const xV = null !== (eV = pV.find((eV => VV < XV(eV)))) && void 0 !== eV ? eV : "Super";
          return {
            rarity: xV,
            progress: yV.b.clamp(VV / XV(xV), 0, 1)
          }
        }(wV),
        GV = MV(wV).at(-1);
      return (0, CV.jsxs)(CV.Fragment, {
        children: [(0, CV.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, CV.jsxs)("div", {
            className: PV()("LuckyCloverWallet", {
              Capped: GV && "Basic" !== GV
            }),
            style: GV && {
              "--luckyTierColour": aV[GV]
            },
            children: [(0, CV.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${NV.progress})`
              }
            }), kV > 0 && (0, CV.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(eV=null===vV||void 0===vV?void 0:vV.delayMs)&&void 0!==eV?eV:0}ms`
              }
            }, kV), (0, CV.jsx)("div", {
              ref: tV,
              className: PV()("LuckyCloverWalletIcon", vV && "Bounce"),
              style: {
                animationDelay: `${null!==(JV=null===vV||void 0===vV?void 0:vV.delayMs)&&void 0!==JV?JV:0}ms`
              },
              children: (0, CV.jsx)(gV.e, {
                itemName: AV,
                amount: 0
              })
            }, null !== (xV = null === vV || void 0 === vV ? void 0 : vV.id) && void 0 !== xV ? xV : 0), (0, CV.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: wV
            }), GV && (0, CV.jsx)(iV.b, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, FV.createPortal)(EV.map((VV => (0, CV.jsx)(lV, {
          flyer: VV,
          target: tV,
          onDone: () => {
            BV((eV => eV.filter((eV => eV.id !== VV.id))))
          }
        }, VV.id))), document.body)]
      })
    }

    function lV(VV) {
      let {
        flyer: eV,
        target: xV,
        onDone: JV
      } = VV;
      const UV = (0, YV.useRef)(null);
      return (0, YV.useEffect)((() => {
        var VV;
        const YV = null === (VV = xV.current) || void 0 === VV ? void 0 : VV.getBoundingClientRect();
        if (!UV.current || !YV) return void JV();
        const {
          x: yV,
          y: pV
        } = eV, QV = yV + 140 * (Math.random() - .5), nV = pV - 30 - 40 * Math.random(), wV = UV.current.animate([{
          transform: `translate(${yV}px, ${pV}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${QV}px, ${nV}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${YV.left}px, ${YV.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: eV.delayMs,
          fill: "backwards"
        });
        return wV.onfinish = JV, () => {
          wV.cancel()
        }
      }), []), (0, CV.jsx)("div", {
        ref: UV,
        className: "LuckyCloverFlying",
        children: (0, CV.jsx)(gV.e, {
          itemName: AV,
          amount: 0
        })
      })
    }
    var LV = xV(32);
    const fV = "luckyGearUpgradeView",
      mV = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function KV(VV) {
      var eV;
      return null !== (eV = mV[VV.split(" ")[0]]) && void 0 !== eV ? eV : "#e07bff"
    }
    class HV {
      constructor(VV, eV) {
        this.selectedSlot = VV, this.itemAt = eV, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      RZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [xV, JV, YV] of VV) this.rings.push({
          id: this.nextId++,
          slot: xV,
          colour: KV(YV),
          until: eV + 1200
        }), xV !== this.selectedSlot() && this.unseen.set(xV, {
          from: JV,
          to: YV
        });
        this.QZ()
      }
      iZ() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const eV = this.rings.filter((eV => eV.until > VV));
        let xV = eV.length !== this.rings.length;
        this.rings = eV;
        for (const [JV, {
            from: YV,
            to: UV
          }] of this.unseen) {
          const VV = this.itemAt(JV);
          (JV === this.selectedSlot() || VV !== UV && VV !== YV) && (this.unseen.delete(JV), xV = !0)
        }
        xV && this.QZ()
      }
      QZ() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, LV.h.QZ(fV, this.view)
      }
    }
    var uV = xV(1542);

    function sV(VV) {
      return document.querySelector(`.HotBar [data-inven-idx="${VV}"]`)
    }

    function SV(VV) {
      let {
        ring: eV
      } = VV;
      const [xV, JV] = (0, YV.useState)(null);
      return (0, YV.useLayoutEffect)((() => {
        var VV, xV;
        JV(null !== (VV = null === (xV = sV(eV.slot)) || void 0 === xV ? void 0 : xV.getBoundingClientRect()) && void 0 !== VV ? VV : null)
      }), [eV]), xV ? (0, CV.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: xV.left,
          top: xV.top,
          width: xV.width,
          height: xV.height,
          "--ringColour": eV.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function IV(VV) {
      let {
        slot: eV
      } = VV;
      const [xV, JV] = (0, YV.useState)(null);
      return (0, YV.useLayoutEffect)((() => {
        const VV = () => {
          JV(sV(eV))
        };
        VV();
        const xV = new MutationObserver(VV),
          YV = document.querySelector(".BottomMiddleElements");
        return YV && xV.observe(YV, {
          childList: !0,
          subtree: !0
        }), () => {
          xV.disconnect()
        }
      }), [eV]), xV ? (0, FV.createPortal)((0, CV.jsx)("div", {
        className: "LuckyGearUnseen"
      }), xV) : null
    }

    function dV(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, uV.j)(fV, eV.getView());
      return (0, CV.jsxs)(CV.Fragment, {
        children: [xV.rings.map((VV => (0, CV.jsx)(SV, {
          ring: VV
        }, VV.id))), xV.unseenSlots.map((VV => (0, CV.jsx)(IV, {
          slot: VV
        }, VV)))]
      })
    }
    const OV = function(VV, eV, xV, yV) {
      let pV, {
          localPlayerId: QV
        } = yV,
        nV = null;
      const wV = new jV({
          itemAt: VV => pV.getItemSlot(QV, VV),
          selectedSlot: () => pV.getSelectedInventorySlotI(QV),
          swap: (VV, eV) => {
            pV.swapInventorySlots(VV, eV)
          }
        }),
        ZV = new HV((() => pV.getSelectedInventorySlotI(QV)), (VV => {
          var eV;
          return null === (eV = pV.getItemSlot(QV, VV)) || void 0 === eV ? void 0 : eV.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, UV.d)()
        },
        onCreate: VV => {
          pV = VV, nV = (0, tV.z)((0, YV.createElement)(YV.Fragment, null, (0, YV.createElement)(cV), (0, YV.createElement)(dV, {
            controller: ZV
          })))
        },
        onClose: () => {
          var VV;
          null === (VV = nV) || void 0 === VV || VV()
        },
        iZ: () => {
          wV.iZ(), ZV.iZ()
        },
        onReceivedMessageFromServer: (VV, eV) => {
          "luckyGearUpgrade" === VV && ZV.RZ(eV)
        },
        onPlayerChangeBlock: (VV, eV, xV, JV, YV, UV) => {
          "Air" !== UV && wV.onPlace(UV)
        },
        onPlayerDropItem: (VV, eV, xV, JV) => {
          wV.onDrop(eV, JV)
        },
        onPlayerAltAction: (VV, eV, xV, YV, UV, yV) => {
          if (!yV || "Mesh" !== pV.getEntityType(yV)) return;
          const QV = pV.getEntityName(yV),
            nV = Object.values(JV).find((VV => VV.name === QV));
          nV && pV.openShop(VV, !1, nV.shopTab)
        }
      }
    }
  },
  39192: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = xV(375),
      YV = xV(38114),
      UV = xV(4952);
    const yV = ["Leaf Bed", "_Leaf Bed Head", ...JV.Lc.flatMap((VV => [`${VV} Bed`, `_${VV} Bed Head`, `${VV} Strongbed`, `_${VV} Strongbed Head`]))];

    function pV() {
      let VV;
      return {
        onCreate(eV) {
          VV = eV
        },
        altVetoBlocks: yV,
        onPlayerAttemptAltAction(eV, xV, JV, yV, pV, QV) {
          var nV;
          if ((0, YV.d)(VV.getMetaInfo(pV).rootName) && !VV.isEntityInteractable(QV) && (0, UV.e)(null === (nV = VV.bJV(eV)) || void 0 === nV ? void 0 : nV.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38114: (VV, eV, xV) => {
    function JV(VV) {
      return VV.includes("Leaf Bed")
    }

    function YV(VV) {
      return / Bed(?: Head)?(?:\||$)/.test(VV) && !JV(VV)
    }

    function UV(VV) {
      return VV.includes(" Strongbed")
    }

    function yV(VV) {
      return JV(VV) || YV(VV) || UV(VV)
    }
    xV.d(eV, {
      d: () => yV,
      e: () => JV,
      f: () => UV,
      j: () => YV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);