export const id = 19;
export const ids = [19];
export const modules = {
  36329: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => ek,
      j: () => Jk,
      n: () => Vk
    });
    var Rk = Bk(9004),
      tk = Bk(36332),
      ak = Bk(36340),
      Xk = Bk(8372),
      bk = Bk(1387),
      wk = Bk(61),
      dk = Bk(67),
      sk = Bk(1069);

    function Vk() {
      var kk;
      return (0, bk.g)(tk.c, (0, tk.o)()), (0, sk.jsx)(sk.Fragment, {
        children: null === (kk = (0, tk.o)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Jk(kk) {
      var Fk;
      let {
        show: Bk
      } = kk;
      (0, bk.g)(tk.c, (0, tk.o)());
      const dk = null === (Fk = (0, tk.o)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, wk.useEffect)((() => {
        var kk;
        Bk || (null === dk || void 0 === dk || null === (kk = dk.onClose) || void 0 === kk || kk.call(dk), (0, ak.u)())
      }), [Bk, dk]), (0, wk.useEffect)((() => Bk ? (0, Xk.h)(ak.C, ak.h) : void 0), [Bk]), (0, sk.jsx)(Rk.d, {
        showing: Bk,
        globallyUniqueKey: "clientGameMenu",
        children: null === dk || void 0 === dk ? void 0 : dk.content
      })
    }

    function Ak(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, sk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Bk = "bottom"
      } = kk;
      const [Rk, tk] = (0, wk.useState)(null);
      return (0, wk.useEffect)((() => {
        tk(document.getElementById(`clientGameHud-${Bk}`))
      }), [Bk]), Rk ? (0, dk.createPortal)(Fk, Rk) : null
    }
  },
  9004: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(4277),
      tk = Bk(4283);

    function ak(kk) {
      let {
        children: Fk,
        showing: Bk,
        globallyUniqueKey: ak,
        alwaysMountChildren: Xk = !1,
        doGameplayStartStopOnShow: bk = !0,
        keepsMovement: wk = !1
      } = kk;
      return (0, tk.d)(!0, Bk, ak, wk), (0, Rk.e)(bk, Bk), Bk || Xk ? Fk : null
    }
  },
  8372: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      h: () => tk
    });
    let Rk = null;
    const tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Rk = Fk, () => {
          Rk === Fk && (Rk = null)
        }
      },
      ak = () => {
        var kk;
        return null !== (kk = Rk) && void 0 !== kk && kk.canCycle() ? Rk.cycle : null
      }
  },
  36340: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => ek,
      G: () => Wk,
      d: () => ak,
      h: () => yk,
      l: () => fk,
      p: () => bk,
      s: () => Jk,
      u: () => mk,
      w: () => Vk,
      z: () => vk
    });
    var Rk = Bk(22),
      tk = Bk(29);
    const ak = "clientGameInventoryButtonsChanged",
      Xk = new Map;

    function bk() {
      return [...Xk.values()].sort(((kk, Fk) => {
        var Bk, Rk;
        return (null !== (Bk = kk.order) && void 0 !== Bk ? Bk : 0) - (null !== (Rk = Fk.order) && void 0 !== Rk ? Rk : 0)
      }))
    }
    let wk = null;

    function dk(kk) {
      wk = kk
    }
    let sk = !1;

    function Vk(kk) {
      sk = !0;
      try {
        kk.onClick()
      } finally {
        sk = !1
      }
      kk.panel && "clientGame" === Rk.c.get("openInGameMenuName") && dk(kk.id)
    }

    function Jk() {
      return sk
    }

    function Ak() {
      return bk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = Ak(),
        Bk = Fk.findIndex((kk => kk.id === wk));
      return !(Bk < 0 || Fk.length < 2) && (Vk(Fk[(Bk + kk + Fk.length) % Fk.length]), !0)
    }

    function yk() {
      return null !== wk && Ak().length > 1
    }

    function fk() {
      dk(null)
    }

    function mk() {
      "inventory" !== Rk.c.get("openInGameMenuName") && dk(null)
    }

    function Wk() {
      const kk = wk;
      return dk(null), kk
    }

    function vk(kk) {
      return Xk.set(kk.id, kk), tk.o.Hf(ak, bk(), !0), () => {
        Xk.get(kk.id) === kk && (Xk.delete(kk.id), tk.o.Hf(ak, bk()))
      }
    }
  },
  36332: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      f: () => fk,
      i: () => mk,
      l: () => Jk,
      o: () => dk,
      q: () => yk,
      s: () => Ak,
      w: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(36340);
    const bk = "clientGameUiChanged";
    let wk = null;

    function dk() {
      return wk
    }

    function sk(kk, Fk) {
      const Bk = {
        content: kk,
        menu: Fk
      };
      return wk = Bk, tk.o.Hf(bk, wk, !0), () => {
        wk === Bk && (wk = null, ek = !1, fk(), tk.o.Hf(bk, null))
      }
    }
    let Vk = null;

    function Jk() {
      return Vk
    }

    function Ak(kk) {
      return Vk = kk, () => {
        Vk === kk && (Vk = null)
      }
    }
    let ek = !1;

    function yk() {
      const kk = Rk.c.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, Xk.s)() || (0, Xk.l)(), (0, ak.m)(ak.e), Rk.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fk() {
      Wk(!1)
    }

    function mk() {
      Wk(ek)
    }

    function Wk(kk) {
      "clientGame" === Rk.c.get("openInGameMenuName") && Rk.c.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, Xk.l)(), ek = !1
    }
  },
  39018: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => kF
    });
    const Rk = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var tk = Bk(61),
      ak = Bk(37712),
      Xk = Bk(291);
    const bk = ["Basic", "Rare", "Super"];

    function wk(kk, Fk) {
      return `${"Basic"===Fk?"":`${Fk} `}${"Simple"===kk?"":`${kk} `}Lucky Block`
    }
    const dk = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((kk => bk.map((Fk => [wk(kk, Fk), {
      category: kk,
      rarity: Fk
    }])))));
    dk.keys();

    function sk(kk) {
      return dk.get(kk)
    }
    const Vk = "Obsidian",
      Jk = ["Cobweb"],
      Ak = [...["Red", "Blue", "Green", "Yellow"].map((kk => `${(0,Xk.$)(kk)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Vk, ...Jk];

    function ek(kk) {
      return Ak.includes(kk)
    }
    var yk = Bk(606);

    function fk(kk, Fk) {
      const Bk = sk(kk);
      if (Bk) {
        const kk = sk(Fk);
        if (!kk) return;
        const Rk = bk.length - 1 - bk.indexOf(kk.rarity);
        return (kk.category === Bk.category ? 0 : 1) * bk.length + Rk
      }
      if (!ek(kk)) return;
      if (Fk === kk) return 0;
      const Rk = kk => ek(kk) && !Jk.includes(kk) && kk !== Vk;
      return Rk(kk) && Rk(Fk) ? 1 : void 0
    }
    const mk = [...Array.from({
      length: yk.q - yk.n
    }, ((kk, Fk) => yk.n + Fk)), ...Array.from({
      length: yk.n
    }, ((kk, Fk) => Fk))];
    class Wk {
      constructor(kk) {
        this.inventory = kk, this.pending = new Map
      }
      onPlace(kk) {
        var Fk;
        const Bk = this.inventory.selectedSlot(),
          Rk = this.inventory.itemAt(Bk);
        (null === Rk || void 0 === Rk ? void 0 : Rk.name) === kk && (null !== (Fk = Rk.amount) && void 0 !== Fk ? Fk : 1) <= 1 && vk(kk) && this.pending.set(Bk, kk)
      }
      onDrop(kk, Fk) {
        Fk < yk.n && null === this.inventory.itemAt(Fk) && vk(kk) && this.refill(Fk, kk)
      }
      yJ() {
        const kk = [...this.pending];
        this.pending.clear();
        for (const [Fk, Bk] of kk) null === this.inventory.itemAt(Fk) && this.refill(Fk, Bk)
      }
      refill(kk, Fk) {
        const Bk = function(kk, Fk, Bk, Rk) {
          let tk, ak = 1 / 0;
          for (const Xk of mk) {
            if (Xk === Fk) continue;
            const bk = Rk(Xk);
            if (!bk || Xk < yk.n && Fk !== Bk) continue;
            const wk = fk(kk, bk.name);
            void 0 !== wk && wk < ak && (tk = Xk, ak = wk)
          }
          return tk
        }(Fk, kk, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Bk && this.inventory.swap(kk, Bk)
      }
    }

    function vk(kk) {
      return !!sk(kk) || ek(kk)
    }
    var ik = Bk(36332),
      Yk = Bk(67),
      Lk = Bk(1020),
      Ok = Bk.n(Lk);
    const Ek = "Lucky Clover",
      Sk = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Nk(kk) {
      return Sk[kk][0]
    }

    function Hk(kk) {
      return bk.filter((Fk => kk >= Nk(Fk)))
    }
    var uk = Bk(279),
      Mk = Bk(2320),
      gk = Bk(22),
      Uk = Bk(2422),
      ck = Bk(1835),
      Gk = Bk(36329),
      Tk = Bk(1028);
    var rk = Bk(1069);
    const Dk = {
      Basic: Xk.N.whiteUiText,
      Rare: Xk.N.goldUiText,
      Super: Xk.N.cyanUiText
    };
    let zk = 1;

    function Pk() {
      const kk = (0, Mk.j)("currencyAmounts"),
        Fk = null === kk || void 0 === kk ? void 0 : kk.Clovers;
      return !Fk || Fk.hidden ? null : (0, rk.jsx)(Gk.g, {
        children: (0, rk.jsx)(hk, {
          amount: Fk.amount
        })
      })
    }

    function hk(kk) {
      var Fk, Bk, Rk;
      let {
        amount: ak
      } = kk;
      const {
        openEverythingMenuName: wk
      } = (0, gk.h)(["openEverythingMenuName"]), dk = (0, Uk.e)(), [sk, Vk] = (0, tk.useState)(ak), [Jk, Ak] = (0, tk.useState)(null), [ek, yk] = (0, tk.useState)(0), [fk, mk] = (0, tk.useState)([]), Wk = (0, tk.useRef)(ak), vk = (0, tk.useRef)(!1), ik = (0, tk.useRef)(null), Lk = wk === uk.p.SHOP;
      (0, tk.useEffect)((() => {
        const kk = Wk.current;
        if (Wk.current = ak, ak <= kk || Lk) return void Vk(ak);
        const Fk = dk || fk.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Bk = ak - kk, Rk = !vk.current, Bk <= 0 || !Rk && Bk < 40 ? 0 : Math.min(4, Math.ceil(Bk / 30)));
        var Bk, Rk;
        if (vk.current = !0, Hk(ak).length > Hk(kk).length && yk(zk++), Fk > 0) {
          const kk = [];
          for (let Bk = 0; Bk < Fk; Bk++) kk.push({
            id: zk++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Bk
          });
          mk((Fk => [...Fk, ...kk]))
        }
        const tk = Fk > 0 ? 600 : 0;
        Ak({
          id: zk++,
          delayMs: tk
        });
        const bk = performance.now() + tk;
        let wk = 0;
        const sk = Fk => {
          const Bk = Xk.b.clamp((Fk - bk) / 600, 0, 1);
          Vk(Math.round(kk + (ak - kk) * Bk)), Bk < 1 && (wk = requestAnimationFrame(sk))
        };
        return wk = requestAnimationFrame(sk), () => {
          cancelAnimationFrame(wk)
        }
      }), [ak, Lk]);
      const Sk = function(kk) {
          var Fk;
          const Bk = null !== (Fk = bk.find((Fk => kk < Nk(Fk)))) && void 0 !== Fk ? Fk : "Super";
          return {
            rarity: Bk,
            progress: Xk.b.clamp(kk / Nk(Bk), 0, 1)
          }
        }(sk),
        Mk = Hk(sk).at(-1);
      return (0, rk.jsxs)(rk.Fragment, {
        children: [(0, rk.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, rk.jsxs)("div", {
            className: Ok()("LuckyCloverWallet", {
              Capped: Mk && "Basic" !== Mk
            }),
            style: Mk && {
              "--luckyTierColour": Dk[Mk]
            },
            children: [(0, rk.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Sk.progress})`
              }
            }), ek > 0 && (0, rk.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Fk=null===Jk||void 0===Jk?void 0:Jk.delayMs)&&void 0!==Fk?Fk:0}ms`
              }
            }, ek), (0, rk.jsx)("div", {
              ref: ik,
              className: Ok()("LuckyCloverWalletIcon", Jk && "Bounce"),
              style: {
                animationDelay: `${null!==(Rk=null===Jk||void 0===Jk?void 0:Jk.delayMs)&&void 0!==Rk?Rk:0}ms`
              },
              children: (0, rk.jsx)(ck.e, {
                itemName: Ek,
                amount: 0
              })
            }, null !== (Bk = null === Jk || void 0 === Jk ? void 0 : Jk.id) && void 0 !== Bk ? Bk : 0), (0, rk.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: sk
            }), Mk && (0, rk.jsx)(Tk.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Yk.createPortal)(fk.map((kk => (0, rk.jsx)(qk, {
          flyer: kk,
          target: ik,
          onDone: () => {
            mk((Fk => Fk.filter((Fk => Fk.id !== kk.id))))
          }
        }, kk.id))), document.body)]
      })
    }

    function qk(kk) {
      let {
        flyer: Fk,
        target: Bk,
        onDone: Rk
      } = kk;
      const ak = (0, tk.useRef)(null);
      return (0, tk.useEffect)((() => {
        var kk;
        const tk = null === (kk = Bk.current) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
        if (!ak.current || !tk) return void Rk();
        const {
          x: Xk,
          y: bk
        } = Fk, wk = Xk + 140 * (Math.random() - .5), dk = bk - 30 - 40 * Math.random(), sk = ak.current.animate([{
          transform: `translate(${Xk}px, ${bk}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${wk}px, ${dk}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${tk.left}px, ${tk.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Fk.delayMs,
          fill: "backwards"
        });
        return sk.onfinish = Rk, () => {
          sk.cancel()
        }
      }), []), (0, rk.jsx)("div", {
        ref: ak,
        className: "LuckyCloverFlying",
        children: (0, rk.jsx)(ck.e, {
          itemName: Ek,
          amount: 0
        })
      })
    }
    var Ck = Bk(29);
    const Zk = "luckyGearUpgradeView",
      pk = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Kk(kk) {
      var Fk;
      return null !== (Fk = pk[kk.split(" ")[0]]) && void 0 !== Fk ? Fk : "#e07bff"
    }
    class xk {
      constructor(kk, Fk) {
        this.selectedSlot = kk, this.itemAt = Fk, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      he(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Bk, Rk, tk] of kk) this.rings.push({
          id: this.nextId++,
          slot: Bk,
          colour: Kk(tk),
          until: Fk + 1200
        }), Bk !== this.selectedSlot() && this.unseen.set(Bk, {
          from: Rk,
          to: tk
        });
        this.Hf()
      }
      yJ() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Fk = this.rings.filter((Fk => Fk.until > kk));
        let Bk = Fk.length !== this.rings.length;
        this.rings = Fk;
        for (const [Rk, {
            from: tk,
            to: ak
          }] of this.unseen) {
          const kk = this.itemAt(Rk);
          (Rk === this.selectedSlot() || kk !== ak && kk !== tk) && (this.unseen.delete(Rk), Bk = !0)
        }
        Bk && this.Hf()
      }
      Hf() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Ck.o.Hf(Zk, this.view)
      }
    }
    var jk = Bk(1387);

    function lk(kk) {
      return document.querySelector(`.HotBar [data-inven-idx="${kk}"]`)
    }

    function nk(kk) {
      let {
        ring: Fk
      } = kk;
      const [Bk, Rk] = (0, tk.useState)(null);
      return (0, tk.useLayoutEffect)((() => {
        var kk, Bk;
        Rk(null !== (kk = null === (Bk = lk(Fk.slot)) || void 0 === Bk ? void 0 : Bk.getBoundingClientRect()) && void 0 !== kk ? kk : null)
      }), [Fk]), Bk ? (0, rk.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Bk.left,
          top: Bk.top,
          width: Bk.width,
          height: Bk.height,
          "--ringColour": Fk.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Ik(kk) {
      let {
        slot: Fk
      } = kk;
      const [Bk, Rk] = (0, tk.useState)(null);
      return (0, tk.useLayoutEffect)((() => {
        const kk = () => {
          Rk(lk(Fk))
        };
        kk();
        const Bk = new MutationObserver(kk),
          tk = document.querySelector(".BottomMiddleElements");
        return tk && Bk.observe(tk, {
          childList: !0,
          subtree: !0
        }), () => {
          Bk.disconnect()
        }
      }), [Fk]), Bk ? (0, Yk.createPortal)((0, rk.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Bk) : null
    }

    function Qk(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, jk.g)(Zk, Fk.getView());
      return (0, rk.jsxs)(rk.Fragment, {
        children: [Bk.rings.map((kk => (0, rk.jsx)(nk, {
          ring: kk
        }, kk.id))), Bk.unseenSlots.map((kk => (0, rk.jsx)(Ik, {
          slot: kk
        }, kk)))]
      })
    }
    const kF = function(kk, Fk, Bk, Xk) {
      let bk, {
          localPlayerId: wk
        } = Xk,
        dk = null;
      const sk = new Wk({
          itemAt: kk => bk.getItemSlot(wk, kk),
          selectedSlot: () => bk.getSelectedInventorySlotI(wk),
          swap: (kk, Fk) => {
            bk.swapInventorySlots(kk, Fk)
          }
        }),
        Vk = new xk((() => bk.getSelectedInventorySlotI(wk)), (kk => {
          var Fk;
          return null === (Fk = bk.getItemSlot(wk, kk)) || void 0 === Fk ? void 0 : Fk.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, ak.b)()
        },
        onCreate: kk => {
          bk = kk, dk = (0, ik.w)((0, tk.createElement)(tk.Fragment, null, (0, tk.createElement)(Pk), (0, tk.createElement)(Qk, {
            controller: Vk
          })))
        },
        onClose: () => {
          var kk;
          null === (kk = dk) || void 0 === kk || kk()
        },
        yJ: () => {
          sk.yJ(), Vk.yJ()
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "luckyGearUpgrade" === kk && Vk.he(Fk)
        },
        onPlayerChangeBlock: (kk, Fk, Bk, Rk, tk, ak) => {
          "Air" !== ak && sk.onPlace(ak)
        },
        onPlayerDropItem: (kk, Fk, Bk, Rk) => {
          sk.onDrop(Fk, Rk)
        },
        onPlayerAltAction: (kk, Fk, Bk, tk, ak, Xk) => {
          if (!Xk || "Mesh" !== bk.getEntityType(Xk)) return;
          const wk = bk.getEntityName(Xk),
            dk = Object.values(Rk).find((kk => kk.name === wk));
          dk && bk.openShop(kk, !1, dk.shopTab)
        }
      }
    }
  },
  37712: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk
    });
    var Rk = Bk(291),
      tk = Bk(36614),
      ak = Bk(4215);
    const Xk = ["Leaf Bed", "_Leaf Bed Head", ...Rk.Kc.flatMap((kk => [`${kk} Bed`, `_${kk} Bed Head`, `${kk} Strongbed`, `_${kk} Strongbed Head`]))];

    function bk() {
      let kk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        altVetoBlocks: Xk,
        onPlayerAttemptAltAction(Fk, Bk, Rk, Xk, bk, wk) {
          var dk;
          if ((0, tk.b)(kk.getMetaInfo(bk).rootName) && !kk.isEntityInteractable(wk) && (0, ak.d)(null === (dk = kk.LFk(Fk)) || void 0 === dk ? void 0 : dk.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36614: (kk, Fk, Bk) => {
    function Rk(kk) {
      return kk.includes("Leaf Bed")
    }

    function tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Rk(kk)
    }

    function ak(kk) {
      return kk.includes(" Strongbed")
    }

    function Xk(kk) {
      return Rk(kk) || tk(kk) || ak(kk)
    }
    Bk.d(Fk, {
      b: () => Xk,
      f: () => Rk,
      i: () => ak,
      l: () => tk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);