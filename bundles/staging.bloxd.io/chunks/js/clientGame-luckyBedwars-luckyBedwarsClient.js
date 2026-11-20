export const id = 19;
export const ids = [19];
export const modules = {
  36132: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => wv,
      g: () => av,
      i: () => Wv,
      m: () => Tv
    });
    var hv = Pv(8997),
      Sv = Pv(36137),
      ev = Pv(36139),
      gv = Pv(8413),
      pv = Pv(1439),
      dv = Pv(52),
      Nv = Pv(62),
      lv = Pv(1082);

    function Tv() {
      var vv;
      return (0, pv.j)(Sv.d, (0, Sv.q)()), (0, lv.jsx)(lv.Fragment, {
        children: null === (vv = (0, Sv.q)()) || void 0 === vv ? void 0 : vv.content
      })
    }

    function Wv(vv) {
      var zv;
      let {
        show: Pv
      } = vv;
      (0, pv.j)(Sv.d, (0, Sv.q)());
      const Nv = null === (zv = (0, Sv.q)()) || void 0 === zv ? void 0 : zv.menu;
      return (0, dv.useEffect)((() => {
        var vv;
        Pv || (null === Nv || void 0 === Nv || null === (vv = Nv.onClose) || void 0 === vv || vv.call(Nv), (0, ev.o)())
      }), [Pv, Nv]), (0, dv.useEffect)((() => Pv ? (0, gv.f)(ev.y, ev.c) : void 0), [Pv]), (0, lv.jsx)(hv.d, {
        showing: Pv,
        globallyUniqueKey: "clientGameMenu",
        children: null === Nv || void 0 === Nv ? void 0 : Nv.content
      })
    }

    function wv(vv) {
      let {
        placement: zv = "bottom"
      } = vv;
      return (0, lv.jsx)("div", {
        id: `clientGameHud-${zv}`,
        style: {
          display: "contents"
        }
      })
    }

    function av(vv) {
      let {
        children: zv,
        placement: Pv = "bottom"
      } = vv;
      const [hv, Sv] = (0, dv.useState)(null);
      return (0, dv.useEffect)((() => {
        Sv(document.getElementById(`clientGameHud-${Pv}`))
      }), [Pv]), hv ? (0, Nv.createPortal)(zv, hv) : null
    }
  },
  8997: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(4287),
      Sv = Pv(4292);

    function ev(vv) {
      let {
        children: zv,
        showing: Pv,
        globallyUniqueKey: ev,
        alwaysMountChildren: gv = !1,
        doGameplayStartStopOnShow: pv = !0,
        keepsMovement: dv = !1
      } = vv;
      return (0, Sv.e)(!0, Pv, ev, dv), (0, hv.b)(pv, Pv), Pv || gv ? zv : null
    }
  },
  8413: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    let hv = null;
    const Sv = function(vv) {
        const zv = {
          cycle: vv,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hv = zv, () => {
          hv === zv && (hv = null)
        }
      },
      ev = () => {
        var vv;
        return null !== (vv = hv) && void 0 !== vv && vv.canCycle() ? hv.cycle : null
      }
  },
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  38905: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => uv
    });
    const hv = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Sv = Pv(52),
      ev = Pv(37560),
      gv = Pv(312);
    const pv = ["Basic", "Rare", "Super"];

    function dv(vv, zv) {
      return `${"Basic"===zv?"":`${zv} `}${"Simple"===vv?"":`${vv} `}Lucky Block`
    }
    const Nv = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((vv => pv.map((zv => [dv(vv, zv), {
      category: vv,
      rarity: zv
    }])))));
    Nv.keys();

    function lv(vv) {
      return Nv.get(vv)
    }
    const Tv = "Obsidian",
      Wv = ["Cobweb"],
      wv = [...["Red", "Blue", "Green", "Yellow"].map((vv => `${(0,gv.bb)(vv)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Tv, ...Wv];

    function av(vv) {
      return wv.includes(vv)
    }
    var sv = Pv(626);

    function Cv(vv, zv) {
      const Pv = lv(vv);
      if (Pv) {
        const vv = lv(zv);
        if (!vv) return;
        const hv = pv.length - 1 - pv.indexOf(vv.rarity);
        return (vv.category === Pv.category ? 0 : 1) * pv.length + hv
      }
      if (!av(vv)) return;
      if (zv === vv) return 0;
      const hv = vv => av(vv) && !Wv.includes(vv) && vv !== Tv;
      return hv(vv) && hv(zv) ? 1 : void 0
    }
    const iv = [...Array.from({
      length: sv.p - sv.l
    }, ((vv, zv) => sv.l + zv)), ...Array.from({
      length: sv.l
    }, ((vv, zv) => zv))];
    class cv {
      constructor(vv) {
        this.inventory = vv, this.pending = new Map
      }
      onPlace(vv) {
        var zv;
        const Pv = this.inventory.selectedSlot(),
          hv = this.inventory.itemAt(Pv);
        (null === hv || void 0 === hv ? void 0 : hv.name) === vv && (null !== (zv = hv.amount) && void 0 !== zv ? zv : 1) <= 1 && Gv(vv) && this.pending.set(Pv, vv)
      }
      onDrop(vv, zv) {
        zv < sv.l && null === this.inventory.itemAt(zv) && Gv(vv) && this.refill(zv, vv)
      }
      MT() {
        const vv = [...this.pending];
        this.pending.clear();
        for (const [zv, Pv] of vv) null === this.inventory.itemAt(zv) && this.refill(zv, Pv)
      }
      refill(vv, zv) {
        const Pv = function(vv, zv, Pv, hv) {
          let Sv, ev = 1 / 0;
          for (const gv of iv) {
            if (gv === zv) continue;
            const pv = hv(gv);
            if (!pv || gv < sv.l && zv !== Pv) continue;
            const dv = Cv(vv, pv.name);
            void 0 !== dv && dv < ev && (Sv = gv, ev = dv)
          }
          return Sv
        }(zv, vv, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Pv && this.inventory.swap(vv, Pv)
      }
    }

    function Gv(vv) {
      return !!lv(vv) || av(vv)
    }
    var mv = Pv(36137),
      jv = Pv(62),
      fv = Pv(1035),
      Fv = Pv.n(fv);
    const Yv = "Lucky Clover",
      nv = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Ov(vv) {
      return nv[vv][0]
    }

    function Dv(vv) {
      return pv.filter((zv => vv >= Ov(zv)))
    }
    var Kv = Pv(302),
      Vv = Pv(2324),
      Uv = Pv(22),
      Rv = Pv(2420),
      xv = Pv(1871),
      tv = Pv(36132),
      qv = Pv(1042);
    var Iv = Pv(1082);
    const Qv = {
      Basic: gv.L.whiteUiText,
      Rare: gv.L.goldUiText,
      Super: gv.L.cyanUiText
    };
    let Zv = 1;

    function Av() {
      const vv = (0, Vv.i)("currencyAmounts"),
        zv = null === vv || void 0 === vv ? void 0 : vv.Clovers;
      return !zv || zv.hidden ? null : (0, Iv.jsx)(tv.g, {
        children: (0, Iv.jsx)(Lv, {
          amount: zv.amount
        })
      })
    }

    function Lv(vv) {
      var zv, Pv, hv;
      let {
        amount: ev
      } = vv;
      const {
        openEverythingMenuName: dv
      } = (0, Uv.i)(["openEverythingMenuName"]), Nv = (0, Rv.d)(), [lv, Tv] = (0, Sv.useState)(ev), [Wv, wv] = (0, Sv.useState)(null), [av, sv] = (0, Sv.useState)(0), [Cv, iv] = (0, Sv.useState)([]), cv = (0, Sv.useRef)(ev), Gv = (0, Sv.useRef)(!1), mv = (0, Sv.useRef)(null), fv = dv === Kv.o.SHOP;
      (0, Sv.useEffect)((() => {
        const vv = cv.current;
        if (cv.current = ev, ev <= vv || fv) return void Tv(ev);
        const zv = Nv || Cv.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Pv = ev - vv, hv = !Gv.current, Pv <= 0 || !hv && Pv < 40 ? 0 : Math.min(4, Math.ceil(Pv / 30)));
        var Pv, hv;
        if (Gv.current = !0, Dv(ev).length > Dv(vv).length && sv(Zv++), zv > 0) {
          const vv = [];
          for (let Pv = 0; Pv < zv; Pv++) vv.push({
            id: Zv++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Pv
          });
          iv((zv => [...zv, ...vv]))
        }
        const Sv = zv > 0 ? 600 : 0;
        wv({
          id: Zv++,
          delayMs: Sv
        });
        const pv = performance.now() + Sv;
        let dv = 0;
        const lv = zv => {
          const Pv = gv.d.clamp((zv - pv) / 600, 0, 1);
          Tv(Math.round(vv + (ev - vv) * Pv)), Pv < 1 && (dv = requestAnimationFrame(lv))
        };
        return dv = requestAnimationFrame(lv), () => {
          cancelAnimationFrame(dv)
        }
      }), [ev, fv]);
      const nv = function(vv) {
          var zv;
          const Pv = null !== (zv = pv.find((zv => vv < Ov(zv)))) && void 0 !== zv ? zv : "Super";
          return {
            rarity: Pv,
            progress: gv.d.clamp(vv / Ov(Pv), 0, 1)
          }
        }(lv),
        Vv = Dv(lv).at(-1);
      return (0, Iv.jsxs)(Iv.Fragment, {
        children: [(0, Iv.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Iv.jsxs)("div", {
            className: Fv()("LuckyCloverWallet", {
              Capped: Vv && "Basic" !== Vv
            }),
            style: Vv && {
              "--luckyTierColour": Qv[Vv]
            },
            children: [(0, Iv.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${nv.progress})`
              }
            }), av > 0 && (0, Iv.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(zv=null===Wv||void 0===Wv?void 0:Wv.delayMs)&&void 0!==zv?zv:0}ms`
              }
            }, av), (0, Iv.jsx)("div", {
              ref: mv,
              className: Fv()("LuckyCloverWalletIcon", Wv && "Bounce"),
              style: {
                animationDelay: `${null!==(hv=null===Wv||void 0===Wv?void 0:Wv.delayMs)&&void 0!==hv?hv:0}ms`
              },
              children: (0, Iv.jsx)(xv.b, {
                itemName: Yv,
                amount: 0
              })
            }, null !== (Pv = null === Wv || void 0 === Wv ? void 0 : Wv.id) && void 0 !== Pv ? Pv : 0), (0, Iv.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: lv
            }), Vv && (0, Iv.jsx)(qv.b, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, jv.createPortal)(Cv.map((vv => (0, Iv.jsx)(Hv, {
          flyer: vv,
          target: mv,
          onDone: () => {
            iv((zv => zv.filter((zv => zv.id !== vv.id))))
          }
        }, vv.id))), document.body)]
      })
    }

    function Hv(vv) {
      let {
        flyer: zv,
        target: Pv,
        onDone: hv
      } = vv;
      const ev = (0, Sv.useRef)(null);
      return (0, Sv.useEffect)((() => {
        var vv;
        const Sv = null === (vv = Pv.current) || void 0 === vv ? void 0 : vv.getBoundingClientRect();
        if (!ev.current || !Sv) return void hv();
        const {
          x: gv,
          y: pv
        } = zv, dv = gv + 140 * (Math.random() - .5), Nv = pv - 30 - 40 * Math.random(), lv = ev.current.animate([{
          transform: `translate(${gv}px, ${pv}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${dv}px, ${Nv}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Sv.left}px, ${Sv.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: zv.delayMs,
          fill: "backwards"
        });
        return lv.onfinish = hv, () => {
          lv.cancel()
        }
      }), []), (0, Iv.jsx)("div", {
        ref: ev,
        className: "LuckyCloverFlying",
        children: (0, Iv.jsx)(xv.b, {
          itemName: Yv,
          amount: 0
        })
      })
    }
    var Mv = Pv(26);
    const yv = "luckyGearUpgradeView",
      Bv = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Jv(vv) {
      var zv;
      return null !== (zv = Bv[vv.split(" ")[0]]) && void 0 !== zv ? zv : "#e07bff"
    }
    class Ev {
      constructor(vv, zv) {
        this.selectedSlot = vv, this.itemAt = zv, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      la(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Pv, hv, Sv] of vv) this.rings.push({
          id: this.nextId++,
          slot: Pv,
          colour: Jv(Sv),
          until: zv + 1200
        }), Pv !== this.selectedSlot() && this.unseen.set(Pv, {
          from: hv,
          to: Sv
        });
        this.zC()
      }
      MT() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const zv = this.rings.filter((zv => zv.until > vv));
        let Pv = zv.length !== this.rings.length;
        this.rings = zv;
        for (const [hv, {
            from: Sv,
            to: ev
          }] of this.unseen) {
          const vv = this.itemAt(hv);
          (hv === this.selectedSlot() || vv !== ev && vv !== Sv) && (this.unseen.delete(hv), Pv = !0)
        }
        Pv && this.zC()
      }
      zC() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Mv.j.zC(yv, this.view)
      }
    }
    var ov = Pv(1439);

    function bv(vv) {
      return document.querySelector(`.HotBar [data-inven-idx="${vv}"]`)
    }

    function rv(vv) {
      let {
        ring: zv
      } = vv;
      const [Pv, hv] = (0, Sv.useState)(null);
      return (0, Sv.useLayoutEffect)((() => {
        var vv, Pv;
        hv(null !== (vv = null === (Pv = bv(zv.slot)) || void 0 === Pv ? void 0 : Pv.getBoundingClientRect()) && void 0 !== vv ? vv : null)
      }), [zv]), Pv ? (0, Iv.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Pv.left,
          top: Pv.top,
          width: Pv.width,
          height: Pv.height,
          "--ringColour": zv.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function kv(vv) {
      let {
        slot: zv
      } = vv;
      const [Pv, hv] = (0, Sv.useState)(null);
      return (0, Sv.useLayoutEffect)((() => {
        const vv = () => {
          hv(bv(zv))
        };
        vv();
        const Pv = new MutationObserver(vv),
          Sv = document.querySelector(".BottomMiddleElements");
        return Sv && Pv.observe(Sv, {
          childList: !0,
          subtree: !0
        }), () => {
          Pv.disconnect()
        }
      }), [zv]), Pv ? (0, jv.createPortal)((0, Iv.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Pv) : null
    }

    function Xv(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, ov.j)(yv, zv.getView());
      return (0, Iv.jsxs)(Iv.Fragment, {
        children: [Pv.rings.map((vv => (0, Iv.jsx)(rv, {
          ring: vv
        }, vv.id))), Pv.unseenSlots.map((vv => (0, Iv.jsx)(kv, {
          slot: vv
        }, vv)))]
      })
    }
    const uv = function(vv, zv, Pv, gv) {
      let pv, {
          localPlayerId: dv
        } = gv,
        Nv = null;
      const lv = new cv({
          itemAt: vv => pv.getItemSlot(dv, vv),
          selectedSlot: () => pv.getSelectedInventorySlotI(dv),
          swap: (vv, zv) => {
            pv.swapInventorySlots(vv, zv)
          }
        }),
        Tv = new Ev((() => pv.getSelectedInventorySlotI(dv)), (vv => {
          var zv;
          return null === (zv = pv.getItemSlot(dv, vv)) || void 0 === zv ? void 0 : zv.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, ev.c)()
        },
        onCreate: vv => {
          pv = vv, Nv = (0, mv.w)((0, Sv.createElement)(Sv.Fragment, null, (0, Sv.createElement)(Av), (0, Sv.createElement)(Xv, {
            controller: Tv
          })))
        },
        onClose: () => {
          var vv;
          null === (vv = Nv) || void 0 === vv || vv()
        },
        MT: () => {
          lv.MT(), Tv.MT()
        },
        onReceivedMessageFromServer: (vv, zv) => {
          "luckyGearUpgrade" === vv && Tv.la(zv)
        },
        onPlayerChangeBlock: (vv, zv, Pv, hv, Sv, ev) => {
          "Air" !== ev && lv.onPlace(ev)
        },
        onPlayerDropItem: (vv, zv, Pv, hv) => {
          lv.onDrop(zv, hv)
        },
        onPlayerAltAction: (vv, zv, Pv, Sv, ev, gv) => {
          if (!gv || "Mesh" !== pv.getEntityType(gv)) return;
          const dv = pv.getEntityName(gv),
            Nv = Object.values(hv).find((vv => vv.name === dv));
          Nv && pv.openShop(vv, !1, Nv.shopTab)
        }
      }
    }
  },
  37560: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(312),
      Sv = Pv(36443),
      ev = Pv(4226);
    const gv = ["Leaf Bed", "_Leaf Bed Head", ...hv.yc.flatMap((vv => [`${vv} Bed`, `_${vv} Bed Head`, `${vv} Strongbed`, `_${vv} Strongbed Head`]))];

    function pv() {
      let vv;
      return {
        onCreate(zv) {
          vv = zv
        },
        altVetoBlocks: gv,
        onPlayerAttemptAltAction(zv, Pv, hv, gv, pv, dv) {
          var Nv;
          if ((0, Sv.e)(vv.getMetaInfo(pv).rootName) && !vv.isEntityInteractable(dv) && (0, ev.g)(null === (Nv = vv.Avv(zv)) || void 0 === Nv ? void 0 : Nv.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36443: (vv, zv, Pv) => {
    function hv(vv) {
      return vv.includes("Leaf Bed")
    }

    function Sv(vv) {
      return / Bed(?: Head)?(?:\||$)/.test(vv) && !hv(vv)
    }

    function ev(vv) {
      return vv.includes(" Strongbed")
    }

    function gv(vv) {
      return hv(vv) || Sv(vv) || ev(vv)
    }
    Pv.d(zv, {
      e: () => gv,
      h: () => hv,
      k: () => ev,
      n: () => Sv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);