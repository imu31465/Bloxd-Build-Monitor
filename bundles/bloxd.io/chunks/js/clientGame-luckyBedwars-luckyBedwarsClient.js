export const id = 19;
export const ids = [19];
export const modules = {
  36853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      g: () => ft,
      i: () => lt,
      m: () => Qt
    });
    var Ot = Vt(34371),
      qt = Vt(36861),
      Dt = Vt(36867),
      mt = Vt(8936),
      dt = Vt(1554),
      jt = Vt(63),
      Ht = Vt(83),
      Xt = Vt(1188);

    function Qt() {
      var tt;
      return (0, dt.h)(qt.b, (0, qt.l)()), (0, Xt.jsx)(Xt.Fragment, {
        children: null === (tt = (0, qt.l)()) || void 0 === tt ? void 0 : tt.content
      })
    }

    function lt(tt) {
      var et;
      let {
        show: Vt
      } = tt;
      (0, dt.h)(qt.b, (0, qt.l)());
      const Ht = null === (et = (0, qt.l)()) || void 0 === et ? void 0 : et.menu;
      return (0, jt.useEffect)((() => {
        var tt;
        Vt || (null === Ht || void 0 === Ht || null === (tt = Ht.onClose) || void 0 === tt || tt.call(Ht), (0, Dt.t)())
      }), [Vt, Ht]), (0, jt.useEffect)((() => Vt ? (0, mt.g)(Dt.A, Dt.f) : void 0), [Vt]), (0, Xt.jsx)(Ot.b, {
        showing: Vt,
        globallyUniqueKey: "clientGameMenu",
        children: null === Ht || void 0 === Ht ? void 0 : Ht.content
      })
    }

    function Et(tt) {
      let {
        placement: et = "bottom"
      } = tt;
      return (0, Xt.jsx)("div", {
        id: `clientGameHud-${et}`,
        style: {
          display: "contents"
        }
      })
    }

    function ft(tt) {
      let {
        children: et,
        placement: Vt = "bottom"
      } = tt;
      const [Ot, qt] = (0, jt.useState)(null);
      return (0, jt.useEffect)((() => {
        qt(document.getElementById(`clientGameHud-${Vt}`))
      }), [Vt]), Ot ? (0, Ht.createPortal)(et, Ot) : null
    }
  },
  34371: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(4668),
      qt = Vt(4677);

    function Dt(tt) {
      let {
        children: et,
        showing: Vt,
        globallyUniqueKey: Dt,
        alwaysMountChildren: mt = !1,
        doGameplayStartStopOnShow: dt = !0,
        keepsMovement: jt = !1
      } = tt;
      return (0, qt.d)(!0, Vt, Dt, jt), (0, Ot.e)(dt, Vt), Vt || mt ? et : null
    }
  },
  8936: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => qt
    });
    let Ot = null;
    const qt = function(tt) {
        const et = {
          cycle: tt,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ot = et, () => {
          Ot === et && (Ot = null)
        }
      },
      Dt = () => {
        var tt;
        return null !== (tt = Ot) && void 0 !== tt && tt.canCycle() ? Ot.cycle : null
      }
  },
  36867: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ft,
      E: () => Mt,
      d: () => Dt,
      f: () => wt,
      j: () => yt,
      n: () => dt,
      q: () => lt,
      t: () => Nt,
      w: () => Qt,
      y: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(31);
    const Dt = "clientGameInventoryButtonsChanged",
      mt = new Map;

    function dt() {
      return [...mt.values()].sort(((tt, et) => {
        var Vt, Ot;
        return (null !== (Vt = tt.order) && void 0 !== Vt ? Vt : 0) - (null !== (Ot = et.order) && void 0 !== Ot ? Ot : 0)
      }))
    }
    let jt = null;

    function Ht(tt) {
      jt = tt
    }
    let Xt = !1;

    function Qt(tt) {
      Xt = !0;
      try {
        tt.onClick()
      } finally {
        Xt = !1
      }
      tt.panel && "clientGame" === Ot.b.get("openInGameMenuName") && Ht(tt.id)
    }

    function lt() {
      return Xt
    }

    function Et() {
      return dt().filter((tt => tt.panel && !tt.disabled))
    }

    function ft(tt) {
      const et = Et(),
        Vt = et.findIndex((tt => tt.id === jt));
      return !(Vt < 0 || et.length < 2) && (Qt(et[(Vt + tt + et.length) % et.length]), !0)
    }

    function wt() {
      return null !== jt && Et().length > 1
    }

    function yt() {
      Ht(null)
    }

    function Nt() {
      "inventory" !== Ot.b.get("openInGameMenuName") && Ht(null)
    }

    function Mt() {
      const tt = jt;
      return Ht(null), tt
    }

    function bt(tt) {
      return mt.set(tt.id, tt), qt.j.sw(Dt, dt(), !0), () => {
        mt.get(tt.id) === tt && (mt.delete(tt.id), qt.j.sw(Dt, dt()))
      }
    }
  },
  36861: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      g: () => Nt,
      i: () => lt,
      l: () => Ht,
      m: () => wt,
      o: () => Et,
      q: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(36867);
    const dt = "clientGameUiChanged";
    let jt = null;

    function Ht() {
      return jt
    }

    function Xt(tt, et) {
      const Vt = {
        content: tt,
        menu: et
      };
      return jt = Vt, qt.j.sw(dt, jt, !0), () => {
        jt === Vt && (jt = null, ft = !1, yt(), qt.j.sw(dt, null))
      }
    }
    let Qt = null;

    function lt() {
      return Qt
    }

    function Et(tt) {
      return Qt = tt, () => {
        Qt === tt && (Qt = null)
      }
    }
    let ft = !1;

    function wt() {
      const tt = Ot.b.get("openInGameMenuName");
      "clientGame" !== tt && (ft = "inventory" === tt), (0, mt.q)() || (0, mt.j)(), (0, Dt.p)(Dt.c), Ot.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yt() {
      Mt(!1)
    }

    function Nt() {
      Mt(ft)
    }

    function Mt(tt) {
      "clientGame" === Ot.b.get("openInGameMenuName") && Ot.b.set({
        openInGameMenuName: tt ? "inventory" : null
      }), tt || (0, mt.j)(), ft = !1
    }
  },
  39658: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => te
    });
    const Ot = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var qt = Vt(63),
      Dt = Vt(38281),
      mt = Vt(391);
    const dt = ["Basic", "Rare", "Super"];

    function jt(tt, et) {
      return `${"Basic"===et?"":`${et} `}${"Simple"===tt?"":`${tt} `}Lucky Block`
    }
    const Ht = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((tt => dt.map((et => [jt(tt, et), {
      category: tt,
      rarity: et
    }])))));
    Ht.keys();

    function Xt(tt) {
      return Ht.get(tt)
    }
    const Qt = "Obsidian",
      lt = ["Cobweb"],
      Et = [...["Red", "Blue", "Green", "Yellow"].map((tt => `${(0,mt.gb)(tt)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Qt, ...lt];

    function ft(tt) {
      return Et.includes(tt)
    }
    var wt = Vt(710);

    function yt(tt, et) {
      const Vt = Xt(tt);
      if (Vt) {
        const tt = Xt(et);
        if (!tt) return;
        const Ot = dt.length - 1 - dt.indexOf(tt.rarity);
        return (tt.category === Vt.category ? 0 : 1) * dt.length + Ot
      }
      if (!ft(tt)) return;
      if (et === tt) return 0;
      const Ot = tt => ft(tt) && !lt.includes(tt) && tt !== Qt;
      return Ot(tt) && Ot(et) ? 1 : void 0
    }
    const Nt = [...Array.from({
      length: wt.q - wt.m
    }, ((tt, et) => wt.m + et)), ...Array.from({
      length: wt.m
    }, ((tt, et) => et))];
    class Mt {
      constructor(tt) {
        this.inventory = tt, this.pending = new Map
      }
      onPlace(tt) {
        var et;
        const Vt = this.inventory.selectedSlot(),
          Ot = this.inventory.itemAt(Vt);
        (null === Ot || void 0 === Ot ? void 0 : Ot.name) === tt && (null !== (et = Ot.amount) && void 0 !== et ? et : 1) <= 1 && bt(tt) && this.pending.set(Vt, tt)
      }
      onDrop(tt, et) {
        et < wt.m && null === this.inventory.itemAt(et) && bt(tt) && this.refill(et, tt)
      }
      BQ() {
        const tt = [...this.pending];
        this.pending.clear();
        for (const [et, Vt] of tt) null === this.inventory.itemAt(et) && this.refill(et, Vt)
      }
      refill(tt, et) {
        const Vt = function(tt, et, Vt, Ot) {
          let qt, Dt = 1 / 0;
          for (const mt of Nt) {
            if (mt === et) continue;
            const dt = Ot(mt);
            if (!dt || mt < wt.m && et !== Vt) continue;
            const jt = yt(tt, dt.name);
            void 0 !== jt && jt < Dt && (qt = mt, Dt = jt)
          }
          return qt
        }(et, tt, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Vt && this.inventory.swap(tt, Vt)
      }
    }

    function bt(tt) {
      return !!Xt(tt) || ft(tt)
    }
    var Jt = Vt(36861),
      Ct = Vt(83),
      ut = Vt(1140),
      Kt = Vt.n(ut);
    const ht = "Lucky Clover",
      vt = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Wt(tt) {
      return vt[tt][0]
    }

    function St(tt) {
      return dt.filter((et => tt >= Wt(et)))
    }
    var ct = Vt(377),
      Rt = Vt(2498),
      It = Vt(26),
      Pt = Vt(2681),
      Zt = Vt(2018),
      Lt = Vt(36853),
      Ft = Vt(1152);
    var kt = Vt(1188);
    const Gt = {
      Basic: mt.P.whiteUiText,
      Rare: mt.P.goldUiText,
      Super: mt.P.cyanUiText
    };
    let zt = 1;

    function ot() {
      const tt = (0, Rt.i)("currencyAmounts"),
        et = null === tt || void 0 === tt ? void 0 : tt.Clovers;
      return !et || et.hidden ? null : (0, kt.jsx)(Lt.g, {
        children: (0, kt.jsx)(rt, {
          amount: et.amount
        })
      })
    }

    function rt(tt) {
      var et, Vt, Ot;
      let {
        amount: Dt
      } = tt;
      const {
        openEverythingMenuName: jt
      } = (0, It.k)(["openEverythingMenuName"]), Ht = (0, Pt.e)(), [Xt, Qt] = (0, qt.useState)(Dt), [lt, Et] = (0, qt.useState)(null), [ft, wt] = (0, qt.useState)(0), [yt, Nt] = (0, qt.useState)([]), Mt = (0, qt.useRef)(Dt), bt = (0, qt.useRef)(!1), Jt = (0, qt.useRef)(null), ut = jt === ct.o.SHOP;
      (0, qt.useEffect)((() => {
        const tt = Mt.current;
        if (Mt.current = Dt, Dt <= tt || ut) return void Qt(Dt);
        const et = Ht || yt.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Vt = Dt - tt, Ot = !bt.current, Vt <= 0 || !Ot && Vt < 40 ? 0 : Math.min(4, Math.ceil(Vt / 30)));
        var Vt, Ot;
        if (bt.current = !0, St(Dt).length > St(tt).length && wt(zt++), et > 0) {
          const tt = [];
          for (let Vt = 0; Vt < et; Vt++) tt.push({
            id: zt++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Vt
          });
          Nt((et => [...et, ...tt]))
        }
        const qt = et > 0 ? 600 : 0;
        Et({
          id: zt++,
          delayMs: qt
        });
        const dt = performance.now() + qt;
        let jt = 0;
        const Xt = et => {
          const Vt = mt.e.clamp((et - dt) / 600, 0, 1);
          Qt(Math.round(tt + (Dt - tt) * Vt)), Vt < 1 && (jt = requestAnimationFrame(Xt))
        };
        return jt = requestAnimationFrame(Xt), () => {
          cancelAnimationFrame(jt)
        }
      }), [Dt, ut]);
      const vt = function(tt) {
          var et;
          const Vt = null !== (et = dt.find((et => tt < Wt(et)))) && void 0 !== et ? et : "Super";
          return {
            rarity: Vt,
            progress: mt.e.clamp(tt / Wt(Vt), 0, 1)
          }
        }(Xt),
        Rt = St(Xt).at(-1);
      return (0, kt.jsxs)(kt.Fragment, {
        children: [(0, kt.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, kt.jsxs)("div", {
            className: Kt()("LuckyCloverWallet", {
              Capped: Rt && "Basic" !== Rt
            }),
            style: Rt && {
              "--luckyTierColour": Gt[Rt]
            },
            children: [(0, kt.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${vt.progress})`
              }
            }), ft > 0 && (0, kt.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(et=null===lt||void 0===lt?void 0:lt.delayMs)&&void 0!==et?et:0}ms`
              }
            }, ft), (0, kt.jsx)("div", {
              ref: Jt,
              className: Kt()("LuckyCloverWalletIcon", lt && "Bounce"),
              style: {
                animationDelay: `${null!==(Ot=null===lt||void 0===lt?void 0:lt.delayMs)&&void 0!==Ot?Ot:0}ms`
              },
              children: (0, kt.jsx)(Zt.e, {
                itemName: ht,
                amount: 0
              })
            }, null !== (Vt = null === lt || void 0 === lt ? void 0 : lt.id) && void 0 !== Vt ? Vt : 0), (0, kt.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Xt
            }), Rt && (0, kt.jsx)(Ft.b, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Ct.createPortal)(yt.map((tt => (0, kt.jsx)(Ut, {
          flyer: tt,
          target: Jt,
          onDone: () => {
            Nt((et => et.filter((et => et.id !== tt.id))))
          }
        }, tt.id))), document.body)]
      })
    }

    function Ut(tt) {
      let {
        flyer: et,
        target: Vt,
        onDone: Ot
      } = tt;
      const Dt = (0, qt.useRef)(null);
      return (0, qt.useEffect)((() => {
        var tt;
        const qt = null === (tt = Vt.current) || void 0 === tt ? void 0 : tt.getBoundingClientRect();
        if (!Dt.current || !qt) return void Ot();
        const {
          x: mt,
          y: dt
        } = et, jt = mt + 140 * (Math.random() - .5), Ht = dt - 30 - 40 * Math.random(), Xt = Dt.current.animate([{
          transform: `translate(${mt}px, ${dt}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${jt}px, ${Ht}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${qt.left}px, ${qt.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: et.delayMs,
          fill: "backwards"
        });
        return Xt.onfinish = Ot, () => {
          Xt.cancel()
        }
      }), []), (0, kt.jsx)("div", {
        ref: Dt,
        className: "LuckyCloverFlying",
        children: (0, kt.jsx)(Zt.e, {
          itemName: ht,
          amount: 0
        })
      })
    }
    var At = Vt(31);
    const it = "luckyGearUpgradeView",
      Yt = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Bt(tt) {
      var et;
      return null !== (et = Yt[tt.split(" ")[0]]) && void 0 !== et ? et : "#e07bff"
    }
    class pt {
      constructor(tt, et) {
        this.selectedSlot = tt, this.itemAt = et, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Qf(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Vt, Ot, qt] of tt) this.rings.push({
          id: this.nextId++,
          slot: Vt,
          colour: Bt(qt),
          until: et + 1200
        }), Vt !== this.selectedSlot() && this.unseen.set(Vt, {
          from: Ot,
          to: qt
        });
        this.sw()
      }
      BQ() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const et = this.rings.filter((et => et.until > tt));
        let Vt = et.length !== this.rings.length;
        this.rings = et;
        for (const [Ot, {
            from: qt,
            to: Dt
          }] of this.unseen) {
          const tt = this.itemAt(Ot);
          (Ot === this.selectedSlot() || tt !== Dt && tt !== qt) && (this.unseen.delete(Ot), Vt = !0)
        }
        Vt && this.sw()
      }
      sw() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, At.j.sw(it, this.view)
      }
    }
    var xt = Vt(1554);

    function Tt(tt) {
      return document.querySelector(`.HotBar [data-inven-idx="${tt}"]`)
    }

    function gt(tt) {
      let {
        ring: et
      } = tt;
      const [Vt, Ot] = (0, qt.useState)(null);
      return (0, qt.useLayoutEffect)((() => {
        var tt, Vt;
        Ot(null !== (tt = null === (Vt = Tt(et.slot)) || void 0 === Vt ? void 0 : Vt.getBoundingClientRect()) && void 0 !== tt ? tt : null)
      }), [et]), Vt ? (0, kt.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Vt.left,
          top: Vt.top,
          width: Vt.width,
          height: Vt.height,
          "--ringColour": et.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function st(tt) {
      let {
        slot: et
      } = tt;
      const [Vt, Ot] = (0, qt.useState)(null);
      return (0, qt.useLayoutEffect)((() => {
        const tt = () => {
          Ot(Tt(et))
        };
        tt();
        const Vt = new MutationObserver(tt),
          qt = document.querySelector(".BottomMiddleElements");
        return qt && Vt.observe(qt, {
          childList: !0,
          subtree: !0
        }), () => {
          Vt.disconnect()
        }
      }), [et]), Vt ? (0, Ct.createPortal)((0, kt.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Vt) : null
    }

    function nt(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, xt.h)(it, et.getView());
      return (0, kt.jsxs)(kt.Fragment, {
        children: [Vt.rings.map((tt => (0, kt.jsx)(gt, {
          ring: tt
        }, tt.id))), Vt.unseenSlots.map((tt => (0, kt.jsx)(st, {
          slot: tt
        }, tt)))]
      })
    }
    const te = function(tt, et, Vt, mt) {
      let dt, {
          localPlayerId: jt
        } = mt,
        Ht = null;
      const Xt = new Mt({
          itemAt: tt => dt.getItemSlot(jt, tt),
          selectedSlot: () => dt.getSelectedInventorySlotI(jt),
          swap: (tt, et) => {
            dt.swapInventorySlots(tt, et)
          }
        }),
        Qt = new pt((() => dt.getSelectedInventorySlotI(jt)), (tt => {
          var et;
          return null === (et = dt.getItemSlot(jt, tt)) || void 0 === et ? void 0 : et.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Dt.c)()
        },
        onCreate: tt => {
          dt = tt, Ht = (0, Jt.q)((0, qt.createElement)(qt.Fragment, null, (0, qt.createElement)(ot), (0, qt.createElement)(nt, {
            controller: Qt
          })))
        },
        onClose: () => {
          var tt;
          null === (tt = Ht) || void 0 === tt || tt()
        },
        BQ: () => {
          Xt.BQ(), Qt.BQ()
        },
        onReceivedMessageFromServer: (tt, et) => {
          "luckyGearUpgrade" === tt && Qt.Qf(et)
        },
        onPlayerChangeBlock: (tt, et, Vt, Ot, qt, Dt) => {
          "Air" !== Dt && Xt.onPlace(Dt)
        },
        onPlayerDropItem: (tt, et, Vt, Ot) => {
          Xt.onDrop(et, Ot)
        },
        onPlayerAltAction: (tt, et, Vt, qt, Dt, mt) => {
          if (!mt || "Mesh" !== dt.getEntityType(mt)) return;
          const jt = dt.getEntityName(mt),
            Ht = Object.values(Ot).find((tt => tt.name === jt));
          Ht && dt.openShop(tt, !1, Ht.shopTab)
        }
      }
    }
  },
  38281: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt
    });
    var Ot = Vt(391),
      qt = Vt(37172),
      Dt = Vt(4614);
    const mt = ["Leaf Bed", "_Leaf Bed Head", ...Ot.Nc.flatMap((tt => [`${tt} Bed`, `_${tt} Bed Head`, `${tt} Strongbed`, `_${tt} Strongbed Head`]))];

    function dt() {
      let tt;
      return {
        onCreate(et) {
          tt = et
        },
        altVetoBlocks: mt,
        onPlayerAttemptAltAction(et, Vt, Ot, mt, dt, jt) {
          var Ht;
          if ((0, qt.e)(tt.getMetaInfo(dt).rootName) && !tt.isEntityInteractable(jt) && (0, Dt.e)(null === (Ht = tt.bVt(et)) || void 0 === Ht ? void 0 : Ht.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37172: (tt, et, Vt) => {
    function Ot(tt) {
      return tt.includes("Leaf Bed")
    }

    function qt(tt) {
      return / Bed(?: Head)?(?:\||$)/.test(tt) && !Ot(tt)
    }

    function Dt(tt) {
      return tt.includes(" Strongbed")
    }

    function mt(tt) {
      return Ot(tt) || qt(tt) || Dt(tt)
    }
    Vt.d(et, {
      e: () => mt,
      i: () => Ot,
      l: () => Dt,
      o: () => qt
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);