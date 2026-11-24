export const id = 19;
export const ids = [19];
export const modules = {
  36597: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => jk,
      f: () => ek,
      g: () => Zk,
      j: () => tk
    });
    var Xk = Ik(34164),
      Tk = Ik(36600),
      ik = Ik(36607),
      yk = Ik(8691),
      lk = Ik(1402),
      ak = Ik(58),
      qk = Ik(74),
      Lk = Ik(1096);

    function tk() {
      var kk;
      return (0, lk.f)(Tk.c, (0, Tk.m)()), (0, Lk.jsx)(Lk.Fragment, {
        children: null === (kk = (0, Tk.m)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Zk(kk) {
      var Fk;
      let {
        show: Ik
      } = kk;
      (0, lk.f)(Tk.c, (0, Tk.m)());
      const qk = null === (Fk = (0, Tk.m)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, ak.useEffect)((() => {
        var kk;
        Ik || (null === qk || void 0 === qk || null === (kk = qk.onClose) || void 0 === kk || kk.call(qk), (0, ik.r)())
      }), [Ik, qk]), (0, ak.useEffect)((() => Ik ? (0, yk.f)(ik.y, ik.i) : void 0), [Ik]), (0, Lk.jsx)(Xk.e, {
        showing: Ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === qk || void 0 === qk ? void 0 : qk.content
      })
    }

    function jk(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, Lk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Ik = "bottom"
      } = kk;
      const [Xk, Tk] = (0, ak.useState)(null);
      return (0, ak.useEffect)((() => {
        Tk(document.getElementById(`clientGameHud-${Ik}`))
      }), [Ik]), Xk ? (0, qk.createPortal)(Fk, Xk) : null
    }
  },
  34164: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(4525),
      Tk = Ik(4529);

    function ik(kk) {
      let {
        children: Fk,
        showing: Ik,
        globallyUniqueKey: ik,
        alwaysMountChildren: yk = !1,
        doGameplayStartStopOnShow: lk = !0,
        keepsMovement: ak = !1
      } = kk;
      return (0, Tk.e)(!0, Ik, ik, ak), (0, Xk.b)(lk, Ik), Ik || yk ? Fk : null
    }
  },
  8691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      f: () => Tk
    });
    let Xk = null;
    const Tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Xk = Fk, () => {
          Xk === Fk && (Xk = null)
        }
      },
      ik = () => {
        var kk;
        return null !== (kk = Xk) && void 0 !== kk && kk.canCycle() ? Xk.cycle : null
      }
  },
  36607: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => xk,
      e: () => ik,
      i: () => wk,
      k: () => Hk,
      o: () => lk,
      q: () => Zk,
      r: () => Jk,
      v: () => tk,
      x: () => Pk,
      y: () => ek
    });
    var Xk = Ik(25),
      Tk = Ik(34);
    const ik = "clientGameInventoryButtonsChanged",
      yk = new Map;

    function lk() {
      return [...yk.values()].sort(((kk, Fk) => {
        var Ik, Xk;
        return (null !== (Ik = kk.order) && void 0 !== Ik ? Ik : 0) - (null !== (Xk = Fk.order) && void 0 !== Xk ? Xk : 0)
      }))
    }
    let ak = null;

    function qk(kk) {
      ak = kk
    }
    let Lk = !1;

    function tk(kk) {
      Lk = !0;
      try {
        kk.onClick()
      } finally {
        Lk = !1
      }
      kk.panel && "clientGame" === Xk.d.get("openInGameMenuName") && qk(kk.id)
    }

    function Zk() {
      return Lk
    }

    function jk() {
      return lk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = jk(),
        Ik = Fk.findIndex((kk => kk.id === ak));
      return !(Ik < 0 || Fk.length < 2) && (tk(Fk[(Ik + kk + Fk.length) % Fk.length]), !0)
    }

    function wk() {
      return null !== ak && jk().length > 1
    }

    function Hk() {
      qk(null)
    }

    function Jk() {
      "inventory" !== Xk.d.get("openInGameMenuName") && qk(null)
    }

    function xk() {
      const kk = ak;
      return qk(null), kk
    }

    function Pk(kk) {
      return yk.set(kk.id, kk), Tk.g.GL(ik, lk(), !0), () => {
        yk.get(kk.id) === kk && (yk.delete(kk.id), Tk.g.GL(ik, lk()))
      }
    }
  },
  36600: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      e: () => Hk,
      f: () => Jk,
      j: () => Zk,
      m: () => qk,
      p: () => wk,
      r: () => jk,
      v: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(36607);
    const lk = "clientGameUiChanged";
    let ak = null;

    function qk() {
      return ak
    }

    function Lk(kk, Fk) {
      const Ik = {
        content: kk,
        menu: Fk
      };
      return ak = Ik, Tk.g.GL(lk, ak, !0), () => {
        ak === Ik && (ak = null, ek = !1, Hk(), Tk.g.GL(lk, null))
      }
    }
    let tk = null;

    function Zk() {
      return tk
    }

    function jk(kk) {
      return tk = kk, () => {
        tk === kk && (tk = null)
      }
    }
    let ek = !1;

    function wk() {
      const kk = Xk.d.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, yk.q)() || (0, yk.k)(), (0, ik.m)(ik.c), Xk.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Hk() {
      xk(!1)
    }

    function Jk() {
      xk(ek)
    }

    function xk(kk) {
      "clientGame" === Xk.d.get("openInGameMenuName") && Xk.d.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, yk.k)(), ek = !1
    }
  },
  39453: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => kF
    });
    const Xk = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Tk = Ik(58),
      ik = Ik(38038),
      yk = Ik(337);
    const lk = ["Basic", "Rare", "Super"];

    function ak(kk, Fk) {
      return `${"Basic"===Fk?"":`${Fk} `}${"Simple"===kk?"":`${kk} `}Lucky Block`
    }
    const qk = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((kk => lk.map((Fk => [ak(kk, Fk), {
      category: kk,
      rarity: Fk
    }])))));
    qk.keys();

    function Lk(kk) {
      return qk.get(kk)
    }
    const tk = "Obsidian",
      Zk = ["Cobweb"],
      jk = [...["Red", "Blue", "Green", "Yellow"].map((kk => `${(0,yk.$)(kk)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", tk, ...Zk];

    function ek(kk) {
      return jk.includes(kk)
    }
    var wk = Ik(628);

    function Hk(kk, Fk) {
      const Ik = Lk(kk);
      if (Ik) {
        const kk = Lk(Fk);
        if (!kk) return;
        const Xk = lk.length - 1 - lk.indexOf(kk.rarity);
        return (kk.category === Ik.category ? 0 : 1) * lk.length + Xk
      }
      if (!ek(kk)) return;
      if (Fk === kk) return 0;
      const Xk = kk => ek(kk) && !Zk.includes(kk) && kk !== tk;
      return Xk(kk) && Xk(Fk) ? 1 : void 0
    }
    const Jk = [...Array.from({
      length: wk.o - wk.k
    }, ((kk, Fk) => wk.k + Fk)), ...Array.from({
      length: wk.k
    }, ((kk, Fk) => Fk))];
    class xk {
      constructor(kk) {
        this.inventory = kk, this.pending = new Map
      }
      onPlace(kk) {
        var Fk;
        const Ik = this.inventory.selectedSlot(),
          Xk = this.inventory.itemAt(Ik);
        (null === Xk || void 0 === Xk ? void 0 : Xk.name) === kk && (null !== (Fk = Xk.amount) && void 0 !== Fk ? Fk : 1) <= 1 && Pk(kk) && this.pending.set(Ik, kk)
      }
      onDrop(kk, Fk) {
        Fk < wk.k && null === this.inventory.itemAt(Fk) && Pk(kk) && this.refill(Fk, kk)
      }
      Dt() {
        const kk = [...this.pending];
        this.pending.clear();
        for (const [Fk, Ik] of kk) null === this.inventory.itemAt(Fk) && this.refill(Fk, Ik)
      }
      refill(kk, Fk) {
        const Ik = function(kk, Fk, Ik, Xk) {
          let Tk, ik = 1 / 0;
          for (const yk of Jk) {
            if (yk === Fk) continue;
            const lk = Xk(yk);
            if (!lk || yk < wk.k && Fk !== Ik) continue;
            const ak = Hk(kk, lk.name);
            void 0 !== ak && ak < ik && (Tk = yk, ik = ak)
          }
          return Tk
        }(Fk, kk, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Ik && this.inventory.swap(kk, Ik)
      }
    }

    function Pk(kk) {
      return !!Lk(kk) || ek(kk)
    }
    var Kk = Ik(36600),
      Qk = Ik(74),
      sk = Ik(1055),
      Vk = Ik.n(sk);
    const zk = "Lucky Clover",
      Sk = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function vk(kk) {
      return Sk[kk][0]
    }

    function Ek(kk) {
      return lk.filter((Fk => kk >= vk(Fk)))
    }
    var Ok = Ik(318),
      nk = Ik(2349),
      Gk = Ik(25),
      pk = Ik(2509),
      uk = Ik(1864),
      bk = Ik(36597),
      Rk = Ik(1066);
    var Uk = Ik(1096);
    const Ck = {
      Basic: yk.J.whiteUiText,
      Rare: yk.J.goldUiText,
      Super: yk.J.cyanUiText
    };
    let Nk = 1;

    function ck() {
      const kk = (0, nk.j)("currencyAmounts"),
        Fk = null === kk || void 0 === kk ? void 0 : kk.Clovers;
      return !Fk || Fk.hidden ? null : (0, Uk.jsx)(bk.f, {
        children: (0, Uk.jsx)(Wk, {
          amount: Fk.amount
        })
      })
    }

    function Wk(kk) {
      var Fk, Ik, Xk;
      let {
        amount: ik
      } = kk;
      const {
        openEverythingMenuName: ak
      } = (0, Gk.j)(["openEverythingMenuName"]), qk = (0, pk.b)(), [Lk, tk] = (0, Tk.useState)(ik), [Zk, jk] = (0, Tk.useState)(null), [ek, wk] = (0, Tk.useState)(0), [Hk, Jk] = (0, Tk.useState)([]), xk = (0, Tk.useRef)(ik), Pk = (0, Tk.useRef)(!1), Kk = (0, Tk.useRef)(null), sk = ak === Ok.r.SHOP;
      (0, Tk.useEffect)((() => {
        const kk = xk.current;
        if (xk.current = ik, ik <= kk || sk) return void tk(ik);
        const Fk = qk || Hk.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Ik = ik - kk, Xk = !Pk.current, Ik <= 0 || !Xk && Ik < 40 ? 0 : Math.min(4, Math.ceil(Ik / 30)));
        var Ik, Xk;
        if (Pk.current = !0, Ek(ik).length > Ek(kk).length && wk(Nk++), Fk > 0) {
          const kk = [];
          for (let Ik = 0; Ik < Fk; Ik++) kk.push({
            id: Nk++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Ik
          });
          Jk((Fk => [...Fk, ...kk]))
        }
        const Tk = Fk > 0 ? 600 : 0;
        jk({
          id: Nk++,
          delayMs: Tk
        });
        const lk = performance.now() + Tk;
        let ak = 0;
        const Lk = Fk => {
          const Ik = yk.e.clamp((Fk - lk) / 600, 0, 1);
          tk(Math.round(kk + (ik - kk) * Ik)), Ik < 1 && (ak = requestAnimationFrame(Lk))
        };
        return ak = requestAnimationFrame(Lk), () => {
          cancelAnimationFrame(ak)
        }
      }), [ik, sk]);
      const Sk = function(kk) {
          var Fk;
          const Ik = null !== (Fk = lk.find((Fk => kk < vk(Fk)))) && void 0 !== Fk ? Fk : "Super";
          return {
            rarity: Ik,
            progress: yk.e.clamp(kk / vk(Ik), 0, 1)
          }
        }(Lk),
        nk = Ek(Lk).at(-1);
      return (0, Uk.jsxs)(Uk.Fragment, {
        children: [(0, Uk.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Uk.jsxs)("div", {
            className: Vk()("LuckyCloverWallet", {
              Capped: nk && "Basic" !== nk
            }),
            style: nk && {
              "--luckyTierColour": Ck[nk]
            },
            children: [(0, Uk.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Sk.progress})`
              }
            }), ek > 0 && (0, Uk.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Fk=null===Zk||void 0===Zk?void 0:Zk.delayMs)&&void 0!==Fk?Fk:0}ms`
              }
            }, ek), (0, Uk.jsx)("div", {
              ref: Kk,
              className: Vk()("LuckyCloverWalletIcon", Zk && "Bounce"),
              style: {
                animationDelay: `${null!==(Xk=null===Zk||void 0===Zk?void 0:Zk.delayMs)&&void 0!==Xk?Xk:0}ms`
              },
              children: (0, Uk.jsx)(uk.d, {
                itemName: zk,
                amount: 0
              })
            }, null !== (Ik = null === Zk || void 0 === Zk ? void 0 : Zk.id) && void 0 !== Ik ? Ik : 0), (0, Uk.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Lk
            }), nk && (0, Uk.jsx)(Rk.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Qk.createPortal)(Hk.map((kk => (0, Uk.jsx)(fk, {
          flyer: kk,
          target: Kk,
          onDone: () => {
            Jk((Fk => Fk.filter((Fk => Fk.id !== kk.id))))
          }
        }, kk.id))), document.body)]
      })
    }

    function fk(kk) {
      let {
        flyer: Fk,
        target: Ik,
        onDone: Xk
      } = kk;
      const ik = (0, Tk.useRef)(null);
      return (0, Tk.useEffect)((() => {
        var kk;
        const Tk = null === (kk = Ik.current) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
        if (!ik.current || !Tk) return void Xk();
        const {
          x: yk,
          y: lk
        } = Fk, ak = yk + 140 * (Math.random() - .5), qk = lk - 30 - 40 * Math.random(), Lk = ik.current.animate([{
          transform: `translate(${yk}px, ${lk}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${ak}px, ${qk}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Tk.left}px, ${Tk.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Fk.delayMs,
          fill: "backwards"
        });
        return Lk.onfinish = Xk, () => {
          Lk.cancel()
        }
      }), []), (0, Uk.jsx)("div", {
        ref: ik,
        className: "LuckyCloverFlying",
        children: (0, Uk.jsx)(uk.d, {
          itemName: zk,
          amount: 0
        })
      })
    }
    var Bk = Ik(34);
    const dk = "luckyGearUpgradeView",
      Yk = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Ak(kk) {
      var Fk;
      return null !== (Fk = Yk[kk.split(" ")[0]]) && void 0 !== Fk ? Fk : "#e07bff"
    }
    class gk {
      constructor(kk, Fk) {
        this.selectedSlot = kk, this.itemAt = Fk, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Pe(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Ik, Xk, Tk] of kk) this.rings.push({
          id: this.nextId++,
          slot: Ik,
          colour: Ak(Tk),
          until: Fk + 1200
        }), Ik !== this.selectedSlot() && this.unseen.set(Ik, {
          from: Xk,
          to: Tk
        });
        this.GL()
      }
      Dt() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Fk = this.rings.filter((Fk => Fk.until > kk));
        let Ik = Fk.length !== this.rings.length;
        this.rings = Fk;
        for (const [Xk, {
            from: Tk,
            to: ik
          }] of this.unseen) {
          const kk = this.itemAt(Xk);
          (Xk === this.selectedSlot() || kk !== ik && kk !== Tk) && (this.unseen.delete(Xk), Ik = !0)
        }
        Ik && this.GL()
      }
      GL() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Bk.g.GL(dk, this.view)
      }
    }
    var mk = Ik(1402);

    function hk(kk) {
      return document.querySelector(`.HotBar [data-inven-idx="${kk}"]`)
    }

    function rk(kk) {
      let {
        ring: Fk
      } = kk;
      const [Ik, Xk] = (0, Tk.useState)(null);
      return (0, Tk.useLayoutEffect)((() => {
        var kk, Ik;
        Xk(null !== (kk = null === (Ik = hk(Fk.slot)) || void 0 === Ik ? void 0 : Ik.getBoundingClientRect()) && void 0 !== kk ? kk : null)
      }), [Fk]), Ik ? (0, Uk.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Ik.left,
          top: Ik.top,
          width: Ik.width,
          height: Ik.height,
          "--ringColour": Fk.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Dk(kk) {
      let {
        slot: Fk
      } = kk;
      const [Ik, Xk] = (0, Tk.useState)(null);
      return (0, Tk.useLayoutEffect)((() => {
        const kk = () => {
          Xk(hk(Fk))
        };
        kk();
        const Ik = new MutationObserver(kk),
          Tk = document.querySelector(".BottomMiddleElements");
        return Tk && Ik.observe(Tk, {
          childList: !0,
          subtree: !0
        }), () => {
          Ik.disconnect()
        }
      }), [Fk]), Ik ? (0, Qk.createPortal)((0, Uk.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Ik) : null
    }

    function Mk(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, mk.f)(dk, Fk.getView());
      return (0, Uk.jsxs)(Uk.Fragment, {
        children: [Ik.rings.map((kk => (0, Uk.jsx)(rk, {
          ring: kk
        }, kk.id))), Ik.unseenSlots.map((kk => (0, Uk.jsx)(Dk, {
          slot: kk
        }, kk)))]
      })
    }
    const kF = function(kk, Fk, Ik, yk) {
      let lk, {
          localPlayerId: ak
        } = yk,
        qk = null;
      const Lk = new xk({
          itemAt: kk => lk.getItemSlot(ak, kk),
          selectedSlot: () => lk.getSelectedInventorySlotI(ak),
          swap: (kk, Fk) => {
            lk.swapInventorySlots(kk, Fk)
          }
        }),
        tk = new gk((() => lk.getSelectedInventorySlotI(ak)), (kk => {
          var Fk;
          return null === (Fk = lk.getItemSlot(ak, kk)) || void 0 === Fk ? void 0 : Fk.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, ik.c)()
        },
        onCreate: kk => {
          lk = kk, qk = (0, Kk.v)((0, Tk.createElement)(Tk.Fragment, null, (0, Tk.createElement)(ck), (0, Tk.createElement)(Mk, {
            controller: tk
          })))
        },
        onClose: () => {
          var kk;
          null === (kk = qk) || void 0 === kk || kk()
        },
        Dt: () => {
          Lk.Dt(), tk.Dt()
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "luckyGearUpgrade" === kk && tk.Pe(Fk)
        },
        onPlayerChangeBlock: (kk, Fk, Ik, Xk, Tk, ik) => {
          "Air" !== ik && Lk.onPlace(ik)
        },
        onPlayerDropItem: (kk, Fk, Ik, Xk) => {
          Lk.onDrop(Fk, Xk)
        },
        onPlayerAltAction: (kk, Fk, Ik, Tk, ik, yk) => {
          if (!yk || "Mesh" !== lk.getEntityType(yk)) return;
          const ak = lk.getEntityName(yk),
            qk = Object.values(Xk).find((kk => kk.name === ak));
          qk && lk.openShop(kk, !1, qk.shopTab)
        }
      }
    }
  },
  38038: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk
    });
    var Xk = Ik(337),
      Tk = Ik(36976),
      ik = Ik(4475);
    const yk = ["Leaf Bed", "_Leaf Bed Head", ...Xk.Mc.flatMap((kk => [`${kk} Bed`, `_${kk} Bed Head`, `${kk} Strongbed`, `_${kk} Strongbed Head`]))];

    function lk() {
      let kk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        altVetoBlocks: yk,
        onPlayerAttemptAltAction(Fk, Ik, Xk, yk, lk, ak) {
          var qk;
          if ((0, Tk.e)(kk.getMetaInfo(lk).rootName) && !kk.isEntityInteractable(ak) && (0, ik.e)(null === (qk = kk.BFk(Fk)) || void 0 === qk ? void 0 : qk.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36976: (kk, Fk, Ik) => {
    function Xk(kk) {
      return kk.includes("Leaf Bed")
    }

    function Tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Xk(kk)
    }

    function ik(kk) {
      return kk.includes(" Strongbed")
    }

    function yk(kk) {
      return Xk(kk) || Tk(kk) || ik(kk)
    }
    Ik.d(Fk, {
      e: () => yk,
      h: () => Xk,
      i: () => ik,
      l: () => Tk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);