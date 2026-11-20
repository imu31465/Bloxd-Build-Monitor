export const id = 19;
export const ids = [19];
export const modules = {
  36208: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Zb,
      e: () => Xb,
      f: () => wb,
      h: () => Hb
    });
    var Bb = hb(9085),
      Ob = hb(36214),
      Gb = hb(36217),
      Ub = hb(8444),
      Lb = hb(1348),
      Yb = hb(49),
      Sb = hb(65),
      ab = hb(1007);

    function Hb() {
      var bb;
      return (0, Lb.k)(Ob.c, (0, Ob.m)()), (0, ab.jsx)(ab.Fragment, {
        children: null === (bb = (0, Ob.m)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function wb(bb) {
      var ub;
      let {
        show: hb
      } = bb;
      (0, Lb.k)(Ob.c, (0, Ob.m)());
      const Sb = null === (ub = (0, Ob.m)()) || void 0 === ub ? void 0 : ub.menu;
      return (0, Yb.useEffect)((() => {
        var bb;
        hb || (null === Sb || void 0 === Sb || null === (bb = Sb.onClose) || void 0 === bb || bb.call(Sb), (0, Gb.o)())
      }), [hb, Sb]), (0, Yb.useEffect)((() => hb ? (0, Ub.f)(Gb.u, Gb.e) : void 0), [hb]), (0, ab.jsx)(Bb.b, {
        showing: hb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Sb || void 0 === Sb ? void 0 : Sb.content
      })
    }

    function Zb(bb) {
      let {
        placement: ub = "bottom"
      } = bb;
      return (0, ab.jsx)("div", {
        id: `clientGameHud-${ub}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xb(bb) {
      let {
        children: ub,
        placement: hb = "bottom"
      } = bb;
      const [Bb, Ob] = (0, Yb.useState)(null);
      return (0, Yb.useEffect)((() => {
        Ob(document.getElementById(`clientGameHud-${hb}`))
      }), [hb]), Bb ? (0, Sb.createPortal)(ub, Bb) : null
    }
  },
  9085: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(4296),
      Ob = hb(4302);

    function Gb(bb) {
      let {
        children: ub,
        showing: hb,
        globallyUniqueKey: Gb,
        alwaysMountChildren: Ub = !1,
        doGameplayStartStopOnShow: Lb = !0,
        keepsMovement: Yb = !1
      } = bb;
      return (0, Ob.c)(!0, hb, Gb, Yb), (0, Bb.c)(Lb, hb), hb || Ub ? ub : null
    }
  },
  8444: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    let Bb = null;
    const Ob = function(bb) {
        const ub = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Bb = ub, () => {
          Bb === ub && (Bb = null)
        }
      },
      Gb = () => {
        var bb;
        return null !== (bb = Bb) && void 0 !== bb && bb.canCycle() ? Bb.cycle : null
      }
  },
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
    }
  },
  39046: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Rb
    });
    const Bb = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Ob = hb(49),
      Gb = hb(37626),
      Ub = hb(314);
    const Lb = ["Basic", "Rare", "Super"];

    function Yb(bb, ub) {
      return `${"Basic"===ub?"":`${ub} `}${"Simple"===bb?"":`${bb} `}Lucky Block`
    }
    const Sb = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((bb => Lb.map((ub => [Yb(bb, ub), {
      category: bb,
      rarity: ub
    }])))));
    Sb.keys();

    function ab(bb) {
      return Sb.get(bb)
    }
    const Hb = "Obsidian",
      wb = ["Cobweb"],
      Zb = [...["Red", "Blue", "Green", "Yellow"].map((bb => `${(0,Ub.$)(bb)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Hb, ...wb];

    function Xb(bb) {
      return Zb.includes(bb)
    }
    var pb = hb(588);

    function ob(bb, ub) {
      const hb = ab(bb);
      if (hb) {
        const bb = ab(ub);
        if (!bb) return;
        const Bb = Lb.length - 1 - Lb.indexOf(bb.rarity);
        return (bb.category === hb.category ? 0 : 1) * Lb.length + Bb
      }
      if (!Xb(bb)) return;
      if (ub === bb) return 0;
      const Bb = bb => Xb(bb) && !wb.includes(bb) && bb !== Hb;
      return Bb(bb) && Bb(ub) ? 1 : void 0
    }
    const Ab = [...Array.from({
      length: pb.p - pb.o
    }, ((bb, ub) => pb.o + ub)), ...Array.from({
      length: pb.o
    }, ((bb, ub) => ub))];
    class lb {
      constructor(bb) {
        this.inventory = bb, this.pending = new Map
      }
      onPlace(bb) {
        var ub;
        const hb = this.inventory.selectedSlot(),
          Bb = this.inventory.itemAt(hb);
        (null === Bb || void 0 === Bb ? void 0 : Bb.name) === bb && (null !== (ub = Bb.amount) && void 0 !== ub ? ub : 1) <= 1 && Kb(bb) && this.pending.set(hb, bb)
      }
      onDrop(bb, ub) {
        ub < pb.o && null === this.inventory.itemAt(ub) && Kb(bb) && this.refill(ub, bb)
      }
      gH() {
        const bb = [...this.pending];
        this.pending.clear();
        for (const [ub, hb] of bb) null === this.inventory.itemAt(ub) && this.refill(ub, hb)
      }
      refill(bb, ub) {
        const hb = function(bb, ub, hb, Bb) {
          let Ob, Gb = 1 / 0;
          for (const Ub of Ab) {
            if (Ub === ub) continue;
            const Lb = Bb(Ub);
            if (!Lb || Ub < pb.o && ub !== hb) continue;
            const Yb = ob(bb, Lb.name);
            void 0 !== Yb && Yb < Gb && (Ob = Ub, Gb = Yb)
          }
          return Ob
        }(ub, bb, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== hb && this.inventory.swap(bb, hb)
      }
    }

    function Kb(bb) {
      return !!ab(bb) || Xb(bb)
    }
    var Wb = hb(36214),
      Cb = hb(65),
      db = hb(958),
      rb = hb.n(db);
    const jb = "Lucky Clover",
      nb = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Db(bb) {
      return nb[bb][0]
    }

    function xb(bb) {
      return Lb.filter((ub => bb >= Db(ub)))
    }
    var zb = hb(298),
      gb = hb(2288),
      ib = hb(13),
      vb = hb(2409),
      tb = hb(1799),
      Jb = hb(36208),
      eb = hb(966);
    var Nb = hb(1007);
    const sb = {
      Basic: Ub.I.whiteUiText,
      Rare: Ub.I.goldUiText,
      Super: Ub.I.cyanUiText
    };
    let Mb = 1;

    function mb() {
      const bb = (0, gb.f)("currencyAmounts"),
        ub = null === bb || void 0 === bb ? void 0 : bb.Clovers;
      return !ub || ub.hidden ? null : (0, Nb.jsx)(Jb.e, {
        children: (0, Nb.jsx)(Ib, {
          amount: ub.amount
        })
      })
    }

    function Ib(bb) {
      var ub, hb, Bb;
      let {
        amount: Gb
      } = bb;
      const {
        openEverythingMenuName: Yb
      } = (0, ib.j)(["openEverythingMenuName"]), Sb = (0, vb.c)(), [ab, Hb] = (0, Ob.useState)(Gb), [wb, Zb] = (0, Ob.useState)(null), [Xb, pb] = (0, Ob.useState)(0), [ob, Ab] = (0, Ob.useState)([]), lb = (0, Ob.useRef)(Gb), Kb = (0, Ob.useRef)(!1), Wb = (0, Ob.useRef)(null), db = Yb === zb.u.SHOP;
      (0, Ob.useEffect)((() => {
        const bb = lb.current;
        if (lb.current = Gb, Gb <= bb || db) return void Hb(Gb);
        const ub = Sb || ob.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (hb = Gb - bb, Bb = !Kb.current, hb <= 0 || !Bb && hb < 40 ? 0 : Math.min(4, Math.ceil(hb / 30)));
        var hb, Bb;
        if (Kb.current = !0, xb(Gb).length > xb(bb).length && pb(Mb++), ub > 0) {
          const bb = [];
          for (let hb = 0; hb < ub; hb++) bb.push({
            id: Mb++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * hb
          });
          Ab((ub => [...ub, ...bb]))
        }
        const Ob = ub > 0 ? 600 : 0;
        Zb({
          id: Mb++,
          delayMs: Ob
        });
        const Lb = performance.now() + Ob;
        let Yb = 0;
        const ab = ub => {
          const hb = Ub.d.clamp((ub - Lb) / 600, 0, 1);
          Hb(Math.round(bb + (Gb - bb) * hb)), hb < 1 && (Yb = requestAnimationFrame(ab))
        };
        return Yb = requestAnimationFrame(ab), () => {
          cancelAnimationFrame(Yb)
        }
      }), [Gb, db]);
      const nb = function(bb) {
          var ub;
          const hb = null !== (ub = Lb.find((ub => bb < Db(ub)))) && void 0 !== ub ? ub : "Super";
          return {
            rarity: hb,
            progress: Ub.d.clamp(bb / Db(hb), 0, 1)
          }
        }(ab),
        gb = xb(ab).at(-1);
      return (0, Nb.jsxs)(Nb.Fragment, {
        children: [(0, Nb.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Nb.jsxs)("div", {
            className: rb()("LuckyCloverWallet", {
              Capped: gb && "Basic" !== gb
            }),
            style: gb && {
              "--luckyTierColour": sb[gb]
            },
            children: [(0, Nb.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${nb.progress})`
              }
            }), Xb > 0 && (0, Nb.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(ub=null===wb||void 0===wb?void 0:wb.delayMs)&&void 0!==ub?ub:0}ms`
              }
            }, Xb), (0, Nb.jsx)("div", {
              ref: Wb,
              className: rb()("LuckyCloverWalletIcon", wb && "Bounce"),
              style: {
                animationDelay: `${null!==(Bb=null===wb||void 0===wb?void 0:wb.delayMs)&&void 0!==Bb?Bb:0}ms`
              },
              children: (0, Nb.jsx)(tb.d, {
                itemName: jb,
                amount: 0
              })
            }, null !== (hb = null === wb || void 0 === wb ? void 0 : wb.id) && void 0 !== hb ? hb : 0), (0, Nb.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: ab
            }), gb && (0, Nb.jsx)(eb.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Cb.createPortal)(ob.map((bb => (0, Nb.jsx)(Pb, {
          flyer: bb,
          target: Wb,
          onDone: () => {
            Ab((ub => ub.filter((ub => ub.id !== bb.id))))
          }
        }, bb.id))), document.body)]
      })
    }

    function Pb(bb) {
      let {
        flyer: ub,
        target: hb,
        onDone: Bb
      } = bb;
      const Gb = (0, Ob.useRef)(null);
      return (0, Ob.useEffect)((() => {
        var bb;
        const Ob = null === (bb = hb.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (!Gb.current || !Ob) return void Bb();
        const {
          x: Ub,
          y: Lb
        } = ub, Yb = Ub + 140 * (Math.random() - .5), Sb = Lb - 30 - 40 * Math.random(), ab = Gb.current.animate([{
          transform: `translate(${Ub}px, ${Lb}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Yb}px, ${Sb}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Ob.left}px, ${Ob.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: ub.delayMs,
          fill: "backwards"
        });
        return ab.onfinish = Bb, () => {
          ab.cancel()
        }
      }), []), (0, Nb.jsx)("div", {
        ref: Gb,
        className: "LuckyCloverFlying",
        children: (0, Nb.jsx)(tb.d, {
          itemName: jb,
          amount: 0
        })
      })
    }
    var qb = hb(16);
    const Eb = "luckyGearUpgradeView",
      yb = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Vb(bb) {
      var ub;
      return null !== (ub = yb[bb.split(" ")[0]]) && void 0 !== ub ? ub : "#e07bff"
    }
    class Fb {
      constructor(bb, ub) {
        this.selectedSlot = bb, this.itemAt = ub, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      cZ(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [hb, Bb, Ob] of bb) this.rings.push({
          id: this.nextId++,
          slot: hb,
          colour: Vb(Ob),
          until: ub + 1200
        }), hb !== this.selectedSlot() && this.unseen.set(hb, {
          from: Bb,
          to: Ob
        });
        this.vp()
      }
      gH() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const ub = this.rings.filter((ub => ub.until > bb));
        let hb = ub.length !== this.rings.length;
        this.rings = ub;
        for (const [Bb, {
            from: Ob,
            to: Gb
          }] of this.unseen) {
          const bb = this.itemAt(Bb);
          (Bb === this.selectedSlot() || bb !== Gb && bb !== Ob) && (this.unseen.delete(Bb), hb = !0)
        }
        hb && this.vp()
      }
      vp() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, qb.i.vp(Eb, this.view)
      }
    }
    var fb = hb(1348);

    function kb(bb) {
      return document.querySelector(`.HotBar [data-inven-idx="${bb}"]`)
    }

    function Tb(bb) {
      let {
        ring: ub
      } = bb;
      const [hb, Bb] = (0, Ob.useState)(null);
      return (0, Ob.useLayoutEffect)((() => {
        var bb, hb;
        Bb(null !== (bb = null === (hb = kb(ub.slot)) || void 0 === hb ? void 0 : hb.getBoundingClientRect()) && void 0 !== bb ? bb : null)
      }), [ub]), hb ? (0, Nb.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: hb.left,
          top: hb.top,
          width: hb.width,
          height: hb.height,
          "--ringColour": ub.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function cb(bb) {
      let {
        slot: ub
      } = bb;
      const [hb, Bb] = (0, Ob.useState)(null);
      return (0, Ob.useLayoutEffect)((() => {
        const bb = () => {
          Bb(kb(ub))
        };
        bb();
        const hb = new MutationObserver(bb),
          Ob = document.querySelector(".BottomMiddleElements");
        return Ob && hb.observe(Ob, {
          childList: !0,
          subtree: !0
        }), () => {
          hb.disconnect()
        }
      }), [ub]), hb ? (0, Cb.createPortal)((0, Nb.jsx)("div", {
        className: "LuckyGearUnseen"
      }), hb) : null
    }

    function Qb(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, fb.k)(Eb, ub.getView());
      return (0, Nb.jsxs)(Nb.Fragment, {
        children: [hb.rings.map((bb => (0, Nb.jsx)(Tb, {
          ring: bb
        }, bb.id))), hb.unseenSlots.map((bb => (0, Nb.jsx)(cb, {
          slot: bb
        }, bb)))]
      })
    }
    const Rb = function(bb, ub, hb, Ub) {
      let Lb, {
          localPlayerId: Yb
        } = Ub,
        Sb = null;
      const ab = new lb({
          itemAt: bb => Lb.getItemSlot(Yb, bb),
          selectedSlot: () => Lb.getSelectedInventorySlotI(Yb),
          swap: (bb, ub) => {
            Lb.swapInventorySlots(bb, ub)
          }
        }),
        Hb = new Fb((() => Lb.getSelectedInventorySlotI(Yb)), (bb => {
          var ub;
          return null === (ub = Lb.getItemSlot(Yb, bb)) || void 0 === ub ? void 0 : ub.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Gb.c)()
        },
        onCreate: bb => {
          Lb = bb, Sb = (0, Wb.t)((0, Ob.createElement)(Ob.Fragment, null, (0, Ob.createElement)(mb), (0, Ob.createElement)(Qb, {
            controller: Hb
          })))
        },
        onClose: () => {
          var bb;
          null === (bb = Sb) || void 0 === bb || bb()
        },
        gH: () => {
          ab.gH(), Hb.gH()
        },
        onReceivedMessageFromServer: (bb, ub) => {
          "luckyGearUpgrade" === bb && Hb.cZ(ub)
        },
        onPlayerChangeBlock: (bb, ub, hb, Bb, Ob, Gb) => {
          "Air" !== Gb && ab.onPlace(Gb)
        },
        onPlayerDropItem: (bb, ub, hb, Bb) => {
          ab.onDrop(ub, Bb)
        },
        onPlayerAltAction: (bb, ub, hb, Ob, Gb, Ub) => {
          if (!Ub || "Mesh" !== Lb.getEntityType(Ub)) return;
          const Yb = Lb.getEntityName(Ub),
            Sb = Object.values(Bb).find((bb => bb.name === Yb));
          Sb && Lb.openShop(bb, !1, Sb.shopTab)
        }
      }
    }
  },
  37626: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(314),
      Ob = hb(36591),
      Gb = hb(4246);
    const Ub = ["Leaf Bed", "_Leaf Bed Head", ...Bb.Kc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function Lb() {
      let bb;
      return {
        onCreate(ub) {
          bb = ub
        },
        altVetoBlocks: Ub,
        onPlayerAttemptAltAction(ub, hb, Bb, Ub, Lb, Yb) {
          var Sb;
          if ((0, Ob.b)(bb.getMetaInfo(Lb).rootName) && !bb.isEntityInteractable(Yb) && (0, Gb.f)(null === (Sb = bb.cub(ub)) || void 0 === Sb ? void 0 : Sb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36591: (bb, ub, hb) => {
    function Bb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Ob(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Bb(bb)
    }

    function Gb(bb) {
      return bb.includes(" Strongbed")
    }

    function Ub(bb) {
      return Bb(bb) || Ob(bb) || Gb(bb)
    }
    hb.d(ub, {
      b: () => Ub,
      f: () => Bb,
      g: () => Gb,
      i: () => Ob
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);