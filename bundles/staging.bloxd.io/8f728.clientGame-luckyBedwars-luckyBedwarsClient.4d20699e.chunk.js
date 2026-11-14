export const id = 18;
export const ids = [18];
export const modules = {
  35245: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      f: () => mB,
      i: () => Tc,
      j: () => Oc
    });
    var Vc = nc(8187),
      Ic = nc(35247),
      rB = nc(35253),
      uc = nc(7684),
      sc = nc(1252),
      Mc = nc(73),
      Pc = nc(83),
      qB = nc(957);

    function Oc() {
      var cB;
      return (0, sc.g)(Ic.d, (0, Ic.o)()), (0, qB.jsx)(qB.Fragment, {
        children: null === (cB = (0, Ic.o)()) || void 0 === cB ? void 0 : cB.content
      })
    }

    function Tc(cB) {
      var Bc;
      let {
        show: nc
      } = cB;
      (0, sc.g)(Ic.d, (0, Ic.o)());
      const Pc = null === (Bc = (0, Ic.o)()) || void 0 === Bc ? void 0 : Bc.menu;
      return (0, Mc.useEffect)((() => {
        nc || (null === Pc || void 0 === Pc || Pc.onClose(), (0, rB.q)())
      }), [nc, Pc]), (0, Mc.useEffect)((() => nc ? (0, uc.f)(rB.x, rB.h) : void 0), [nc]), (0, qB.jsx)(Vc.d, {
        showing: nc,
        globallyUniqueKey: "clientGameMenu",
        children: null === Pc || void 0 === Pc ? void 0 : Pc.content
      })
    }

    function fc(cB) {
      let {
        placement: Bc = "bottom"
      } = cB;
      return (0, qB.jsx)("div", {
        id: `clientGameHud-${Bc}`,
        style: {
          display: "contents"
        }
      })
    }

    function mB(cB) {
      let {
        children: Bc,
        placement: nc = "bottom"
      } = cB;
      const [Vc, Ic] = (0, Mc.useState)(null);
      return (0, Mc.useEffect)((() => {
        Ic(document.getElementById(`clientGameHud-${nc}`))
      }), [nc]), Vc ? (0, Pc.createPortal)(Bc, Vc) : null
    }
  },
  8187: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(3648),
      Ic = nc(3652);

    function rB(cB) {
      let {
        children: Bc,
        showing: nc,
        globallyUniqueKey: rB,
        alwaysMountChildren: uc = !1,
        doGameplayStartStopOnShow: sc = !0,
        keepsMovement: Mc = !1
      } = cB;
      return (0, Ic.c)(!0, nc, rB, Mc), (0, Vc.c)(sc, nc), nc || uc ? Bc : null
    }
  },
  7684: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      f: () => Ic
    });
    let Vc = null;
    const Ic = function(cB) {
        const Bc = {
          cycle: cB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Vc = Bc, () => {
          Vc === Bc && (Vc = null)
        }
      },
      rB = () => {
        var cB;
        return null !== (cB = Vc) && void 0 !== cB && cB.canCycle() ? Vc.cycle : null
      }
  },
  35253: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => ec,
      i: () => tB,
      m: () => sc,
      p: () => Tc,
      q: () => Sc,
      t: () => Oc,
      w: () => zB,
      x: () => mB,
      y: () => yB
    });
    var Vc = nc(27),
      Ic = nc(35);
    const rB = "clientGameInventoryButtonsChanged",
      uc = new Map;

    function sc() {
      return [...uc.values()].sort(((cB, Bc) => {
        var nc, Vc;
        return (null !== (nc = cB.order) && void 0 !== nc ? nc : 0) - (null !== (Vc = Bc.order) && void 0 !== Vc ? Vc : 0)
      }))
    }
    let Mc = null;

    function Pc(cB) {
      Mc = cB
    }
    let qB = !1;

    function Oc(cB) {
      qB = !0;
      try {
        cB.onClick()
      } finally {
        qB = !1
      }
      cB.panel && "clientGame" === Vc.d.get("openInGameMenuName") && Pc(cB.id)
    }

    function Tc() {
      return qB
    }

    function fc() {
      return sc().filter((cB => cB.panel && !cB.disabled))
    }

    function mB(cB) {
      const Bc = fc(),
        nc = Bc.findIndex((cB => cB.id === Mc));
      return !(nc < 0 || Bc.length < 2) && (Oc(Bc[(nc + cB + Bc.length) % Bc.length]), !0)
    }

    function ec() {
      return null !== Mc && fc().length > 1
    }

    function tB() {
      Pc(null)
    }

    function Sc() {
      "inventory" !== Vc.d.get("openInGameMenuName") && Pc(null)
    }

    function yB() {
      const cB = Mc;
      return Pc(null), cB
    }

    function zB(cB) {
      return uc.set(cB.id, cB), Ic.i.Vu(rB, sc(), !0), () => {
        uc.get(cB.id) === cB && (uc.delete(cB.id), Ic.i.Vu(rB, sc()))
      }
    }
  },
  35247: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => tB,
      j: () => Sc,
      m: () => Tc,
      o: () => Pc,
      s: () => ec,
      w: () => fc,
      x: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(35253);
    const sc = "clientGameUiChanged";
    let Mc = null;

    function Pc() {
      return Mc
    }

    function qB(cB, Bc) {
      const nc = {
        content: cB,
        menu: Bc
      };
      return Mc = nc, Ic.i.Vu(sc, Mc, !0), () => {
        Mc === nc && (Mc = null, mB = !1, tB(), Ic.i.Vu(sc, null))
      }
    }
    let Oc = null;

    function Tc() {
      return Oc
    }

    function fc(cB) {
      return Oc = cB, () => {
        Oc === cB && (Oc = null)
      }
    }
    let mB = !1;

    function ec() {
      const cB = Vc.d.get("openInGameMenuName");
      "clientGame" !== cB && (mB = "inventory" === cB), (0, uc.p)() || (0, uc.i)(), (0, rB.o)("InGameMenu"), Vc.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tB() {
      yB(!1)
    }

    function Sc() {
      yB(mB)
    }

    function yB(cB) {
      "clientGame" === Vc.d.get("openInGameMenuName") && Vc.d.set({
        openInGameMenuName: cB ? "inventory" : null
      }), cB || (0, uc.i)(), mB = !1
    }
  },
  37742: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => cn
    });
    const Vc = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Ic = nc(73),
      rB = nc(36588),
      uc = nc(35),
      sc = nc(302);
    const Mc = ["Basic", "Rare", "Super"];

    function Pc(cB, Bc) {
      return `${"Basic"===Bc?"":`${Bc} `}${"Simple"===cB?"":`${cB} `}Lucky Block`
    }
    const qB = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((cB => Mc.map((Bc => [Pc(cB, Bc), {
      category: cB,
      rarity: Bc
    }])))));
    qB.keys();

    function Oc(cB) {
      return qB.get(cB)
    }
    const Tc = "Obsidian",
      fc = ["Cobweb"],
      mB = [...["Red", "Blue", "Green", "Yellow"].map((cB => `${(0,sc.R)(cB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Tc, ...fc];

    function ec(cB) {
      return mB.includes(cB)
    }
    var tB = nc(569);

    function Sc(cB, Bc) {
      const nc = Oc(cB);
      if (nc) {
        const cB = Oc(Bc);
        if (!cB) return;
        const Vc = Mc.length - 1 - Mc.indexOf(cB.rarity);
        return (cB.category === nc.category ? 0 : 1) * Mc.length + Vc
      }
      if (!ec(cB)) return;
      if (Bc === cB) return 0;
      const Vc = cB => ec(cB) && !fc.includes(cB) && cB !== Tc;
      return Vc(cB) && Vc(Bc) ? 1 : void 0
    }
    const yB = [...Array.from({
      length: tB.m - tB.l
    }, ((cB, Bc) => tB.l + Bc)), ...Array.from({
      length: tB.l
    }, ((cB, Bc) => Bc))];
    class zB {
      constructor(cB) {
        this.inventory = cB, this.pending = new Map, this.lastSwap = null
      }
      onPlace(cB) {
        var Bc;
        const nc = this.inventory.selectedSlot(),
          Vc = this.inventory.itemAt(nc);
        (null === Vc || void 0 === Vc ? void 0 : Vc.name) === cB && (null !== (Bc = Vc.amount) && void 0 !== Bc ? Bc : 1) <= 1 && pc(cB) && this.pending.set(nc, cB)
      }
      onDrop(cB, Bc) {
        Bc < tB.l && null === this.inventory.itemAt(Bc) && pc(cB) && this.refill(Bc, cB)
      }
      cn() {
        const cB = [...this.pending];
        this.pending.clear();
        for (const [Bc, nc] of cB) null === this.inventory.itemAt(Bc) && this.refill(Bc, nc)
      }
      onInventorySynced() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        const Bc = this.lastSwap;
        Bc && (cB - Bc.at >= 2e3 ? this.lastSwap = null : hc(this.inventory.itemAt(Bc.source), Bc.moved) && !hc(this.inventory.itemAt(Bc.slot), Bc.moved) && this.inventory.redoSwapLocally(Bc.slot, Bc.source))
      }
      refill(cB, Bc) {
        const nc = function(cB, Bc, nc, Vc) {
            let Ic, rB = 1 / 0;
            for (const uc of yB) {
              if (uc === Bc) continue;
              const sc = Vc(uc);
              if (!sc || uc < tB.l && Bc !== nc) continue;
              const Mc = Sc(cB, sc.name);
              void 0 !== Mc && Mc < rB && (Ic = uc, rB = Mc)
            }
            return Ic
          }(Bc, cB, this.inventory.selectedSlot(), this.inventory.itemAt),
          Vc = void 0 === nc ? null : this.inventory.itemAt(nc);
        void 0 !== nc && Vc && (this.lastSwap = {
          slot: cB,
          source: nc,
          moved: {
            name: Vc.name,
            amount: Vc.amount
          },
          at: Date.now()
        }, this.inventory.swap(cB, nc))
      }
    }

    function pc(cB) {
      return !!Oc(cB) || ec(cB)
    }

    function hc(cB, Bc) {
      return (null === cB || void 0 === cB ? void 0 : cB.name) === Bc.name && cB.amount === Bc.amount
    }
    var aB = nc(35247),
      lc = nc(83),
      Yc = nc(912),
      Lc = nc.n(Yc);
    const gB = "Lucky Clover",
      Uc = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function bB(cB) {
      return Uc[cB][0]
    }

    function Zc(cB) {
      return Mc.filter((Bc => cB >= bB(Bc)))
    }
    var Qc = nc(244),
      Cc = nc(1946),
      vB = nc(27),
      Dc = nc(2010),
      Nc = nc(1553),
      Ec = nc(35245),
      oc = nc(926);
    var Wc = nc(957);
    const wc = {
      Basic: sc.C.whiteUiText,
      Rare: sc.C.goldUiText,
      Super: sc.C.cyanUiText
    };
    let kB = 1;

    function Xc() {
      const cB = (0, Cc.j)("currencyAmounts"),
        Bc = null === cB || void 0 === cB ? void 0 : cB.Clovers;
      return !Bc || Bc.hidden ? null : (0, Wc.jsx)(Ec.f, {
        children: (0, Wc.jsx)(Hc, {
          amount: Bc.amount
        })
      })
    }

    function Hc(cB) {
      var Bc, nc, Vc;
      let {
        amount: rB
      } = cB;
      const {
        openEverythingMenuName: uc
      } = (0, vB.j)(["openEverythingMenuName"]), Pc = (0, Dc.c)(), [qB, Oc] = (0, Ic.useState)(rB), [Tc, fc] = (0, Ic.useState)(null), [mB, ec] = (0, Ic.useState)(0), [tB, Sc] = (0, Ic.useState)([]), yB = (0, Ic.useRef)(rB), zB = (0, Ic.useRef)(!1), pc = (0, Ic.useRef)(null), hc = uc === Qc.i.SHOP;
      (0, Ic.useEffect)((() => {
        const cB = yB.current;
        if (yB.current = rB, rB <= cB || hc) return void Oc(rB);
        const Bc = Pc || tB.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (nc = rB - cB, Vc = !zB.current, nc <= 0 || !Vc && nc < 40 ? 0 : Math.min(4, Math.ceil(nc / 30)));
        var nc, Vc;
        if (zB.current = !0, Zc(rB).length > Zc(cB).length && ec(kB++), Bc > 0) {
          const cB = [];
          for (let nc = 0; nc < Bc; nc++) cB.push({
            id: kB++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * nc
          });
          Sc((Bc => [...Bc, ...cB]))
        }
        const Ic = Bc > 0 ? 600 : 0;
        fc({
          id: kB++,
          delayMs: Ic
        });
        const uc = performance.now() + Ic;
        let Mc = 0;
        const qB = Bc => {
          const nc = sc.b.clamp((Bc - uc) / 600, 0, 1);
          Oc(Math.round(cB + (rB - cB) * nc)), nc < 1 && (Mc = requestAnimationFrame(qB))
        };
        return Mc = requestAnimationFrame(qB), () => {
          cancelAnimationFrame(Mc)
        }
      }), [rB, hc]);
      const aB = function(cB) {
          var Bc;
          const nc = null !== (Bc = Mc.find((Bc => cB < bB(Bc)))) && void 0 !== Bc ? Bc : "Super";
          return {
            rarity: nc,
            progress: sc.b.clamp(cB / bB(nc), 0, 1)
          }
        }(qB),
        Yc = Zc(qB).at(-1);
      return (0, Wc.jsxs)(Wc.Fragment, {
        children: [(0, Wc.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Wc.jsxs)("div", {
            className: Lc()("LuckyCloverWallet", {
              Capped: Yc && "Basic" !== Yc
            }),
            style: Yc && {
              "--luckyTierColour": wc[Yc]
            },
            children: [(0, Wc.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${aB.progress})`
              }
            }), mB > 0 && (0, Wc.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Bc=null===Tc||void 0===Tc?void 0:Tc.delayMs)&&void 0!==Bc?Bc:0}ms`
              }
            }, mB), (0, Wc.jsx)("div", {
              ref: pc,
              className: Lc()("LuckyCloverWalletIcon", Tc && "Bounce"),
              style: {
                animationDelay: `${null!==(Vc=null===Tc||void 0===Tc?void 0:Tc.delayMs)&&void 0!==Vc?Vc:0}ms`
              },
              children: (0, Wc.jsx)(Nc.d, {
                itemName: gB,
                amount: 0
              })
            }, null !== (nc = null === Tc || void 0 === Tc ? void 0 : Tc.id) && void 0 !== nc ? nc : 0), (0, Wc.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: qB
            }), Yc && (0, Wc.jsx)(oc.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, lc.createPortal)(tB.map((cB => (0, Wc.jsx)(Fc, {
          flyer: cB,
          target: pc,
          onDone: () => {
            Sc((Bc => Bc.filter((Bc => Bc.id !== cB.id))))
          }
        }, cB.id))), document.body)]
      })
    }

    function Fc(cB) {
      let {
        flyer: Bc,
        target: nc,
        onDone: Vc
      } = cB;
      const rB = (0, Ic.useRef)(null);
      return (0, Ic.useEffect)((() => {
        var cB;
        const Ic = null === (cB = nc.current) || void 0 === cB ? void 0 : cB.getBoundingClientRect();
        if (!rB.current || !Ic) return void Vc();
        const {
          x: uc,
          y: sc
        } = Bc, Mc = uc + 140 * (Math.random() - .5), Pc = sc - 30 - 40 * Math.random(), qB = rB.current.animate([{
          transform: `translate(${uc}px, ${sc}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Mc}px, ${Pc}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Ic.left}px, ${Ic.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Bc.delayMs,
          fill: "backwards"
        });
        return qB.onfinish = Vc, () => {
          qB.cancel()
        }
      }), []), (0, Wc.jsx)("div", {
        ref: rB,
        className: "LuckyCloverFlying",
        children: (0, Wc.jsx)(Nc.d, {
          itemName: gB,
          amount: 0
        })
      })
    }
    const Jc = "luckyGearUpgradeView",
      jB = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Rc(cB) {
      var Bc;
      return null !== (Bc = jB[cB.split(" ")[0]]) && void 0 !== Bc ? Bc : "#e07bff"
    }
    class iB {
      constructor(cB, Bc) {
        this.selectedSlot = cB, this.itemAt = Bc, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      EV(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [nc, Vc, Ic] of cB) this.rings.push({
          id: this.nextId++,
          slot: nc,
          colour: Rc(Ic),
          until: Bc + 1200
        }), nc !== this.selectedSlot() && this.unseen.set(nc, {
          from: Vc,
          to: Ic
        });
        this.Vu()
      }
      cn() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Bc = this.rings.filter((Bc => Bc.until > cB));
        let nc = Bc.length !== this.rings.length;
        this.rings = Bc;
        for (const [Vc, {
            from: Ic,
            to: rB
          }] of this.unseen) {
          const cB = this.itemAt(Vc);
          (Vc === this.selectedSlot() || cB !== rB && cB !== Ic) && (this.unseen.delete(Vc), nc = !0)
        }
        nc && this.Vu()
      }
      Vu() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, uc.i.Vu(Jc, this.view)
      }
    }
    var Kc = nc(1252);

    function xB(cB) {
      return document.querySelector(`.HotBar [data-inven-idx="${cB}"]`)
    }

    function dc(cB) {
      let {
        ring: Bc
      } = cB;
      const [nc, Vc] = (0, Ic.useState)(null);
      return (0, Ic.useLayoutEffect)((() => {
        var cB, nc;
        Vc(null !== (cB = null === (nc = xB(Bc.slot)) || void 0 === nc ? void 0 : nc.getBoundingClientRect()) && void 0 !== cB ? cB : null)
      }), [Bc]), nc ? (0, Wc.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: nc.left,
          top: nc.top,
          width: nc.width,
          height: nc.height,
          "--ringColour": Bc.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Ac(cB) {
      let {
        slot: Bc
      } = cB;
      const [nc, Vc] = (0, Ic.useState)(null);
      return (0, Ic.useLayoutEffect)((() => {
        const cB = () => {
          Vc(xB(Bc))
        };
        cB();
        const nc = new MutationObserver(cB),
          Ic = document.querySelector(".BottomMiddleElements");
        return Ic && nc.observe(Ic, {
          childList: !0,
          subtree: !0
        }), () => {
          nc.disconnect()
        }
      }), [Bc]), nc ? (0, lc.createPortal)((0, Wc.jsx)("div", {
        className: "LuckyGearUnseen"
      }), nc) : null
    }

    function Gc(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, Kc.g)(Jc, Bc.getView());
      return (0, Wc.jsxs)(Wc.Fragment, {
        children: [nc.rings.map((cB => (0, Wc.jsx)(dc, {
          ring: cB
        }, cB.id))), nc.unseenSlots.map((cB => (0, Wc.jsx)(Ac, {
          slot: cB
        }, cB)))]
      })
    }
    const cn = function(cB, Bc, nc, sc) {
      let Mc, {
          localPlayerId: Pc
        } = sc,
        qB = [],
        Oc = null;
      const Tc = new zB({
          itemAt: cB => Mc.getItemSlot(Pc, cB),
          selectedSlot: () => Mc.getSelectedInventorySlotI(Pc),
          swap: (cB, Bc) => {
            Mc.swapInventorySlots(cB, Bc)
          },
          redoSwapLocally: (cB, Bc) => {
            Mc.redoInventorySwapLocally(cB, Bc)
          }
        }),
        fc = new iB((() => Mc.getSelectedInventorySlotI(Pc)), (cB => {
          var Bc;
          return null === (Bc = Mc.getItemSlot(Pc, cB)) || void 0 === Bc ? void 0 : Bc.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, rB.d)()
        },
        onCreate: cB => {
          Mc = cB, qB = ["syncedInvenFromServer", "chestRefreshedFromServer"].map((cB => uc.i.subscribe(cB, (() => {
            Tc.onInventorySynced()
          })))), Oc = (0, aB.x)((0, Ic.createElement)(Ic.Fragment, null, (0, Ic.createElement)(Xc), (0, Ic.createElement)(Gc, {
            controller: fc
          })))
        },
        onClose: () => {
          var cB;
          for (const Bc of qB) uc.i.unsubscribe(Bc);
          qB = [], null === (cB = Oc) || void 0 === cB || cB()
        },
        cn: () => {
          Tc.cn(), fc.cn()
        },
        onReceivedMessageFromServer: (cB, Bc) => {
          "luckyGearUpgrade" === cB && fc.EV(Bc)
        },
        onPlayerChangeBlock: (cB, Bc, nc, Vc, Ic, rB) => {
          "Air" !== rB && Tc.onPlace(rB)
        },
        onPlayerDropItem: (cB, Bc, nc, Vc) => {
          Tc.onDrop(Bc, Vc)
        },
        onPlayerAltAction: (cB, Bc, nc, Ic, rB, uc) => {
          if (!uc || "Mesh" !== Mc.getEntityType(uc)) return;
          const sc = Mc.getEntityName(uc),
            Pc = Object.values(Vc).find((cB => cB.name === sc));
          Pc && Mc.openShop(cB, !1, Pc.shopTab)
        }
      }
    }
  },
  36588: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(302),
      Ic = nc(35538),
      rB = nc(3598);
    const uc = ["Leaf Bed", "_Leaf Bed Head", ...Vc.hc.flatMap((cB => [`${cB} Bed`, `_${cB} Bed Head`, `${cB} Strongbed`, `_${cB} Strongbed Head`]))];

    function sc() {
      let cB;
      return {
        onCreate(Bc) {
          cB = Bc
        },
        altVetoBlocks: uc,
        onPlayerAttemptAltAction(Bc, nc, Vc, uc, sc, Mc) {
          var Pc;
          if ((0, Ic.c)(cB.getMetaInfo(sc).rootName) && !cB.isEntityInteractable(Mc) && (0, rB.g)(null === (Pc = cB.lMc(Bc)) || void 0 === Pc ? void 0 : Pc.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35538: (cB, Bc, nc) => {
    function Vc(cB) {
      return cB.includes("Leaf Bed")
    }

    function Ic(cB) {
      return / Bed(?: Head)?(?:\||$)/.test(cB) && !Vc(cB)
    }

    function rB(cB) {
      return cB.includes(" Strongbed")
    }

    function uc(cB) {
      return Vc(cB) || Ic(cB) || rB(cB)
    }
    nc.d(Bc, {
      c: () => uc,
      g: () => Vc,
      k: () => rB,
      o: () => Ic
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);