export const id = 19;
export const ids = [19];
export const modules = {
  36140: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => nk,
      h: () => Uk,
      l: () => xk,
      p: () => Kk
    });
    var Dk = ik(33763),
      fk = ik(36143),
      Sk = ik(36151),
      bk = ik(8560),
      rk = ik(1406),
      Pk = ik(60),
      mk = ik(75),
      Mk = ik(1066);

    function Kk() {
      var kk;
      return (0, rk.e)(fk.c, (0, fk.n)()), (0, Mk.jsx)(Mk.Fragment, {
        children: null === (kk = (0, fk.n)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function xk(kk) {
      var ek;
      let {
        show: ik
      } = kk;
      (0, rk.e)(fk.c, (0, fk.n)());
      const mk = null === (ek = (0, fk.n)()) || void 0 === ek ? void 0 : ek.menu;
      return (0, Pk.useEffect)((() => {
        var kk;
        ik || (null === mk || void 0 === mk || null === (kk = mk.onClose) || void 0 === kk || kk.call(mk), (0, Sk.t)())
      }), [ik, mk]), (0, Pk.useEffect)((() => ik ? (0, bk.f)(Sk.w, Sk.g) : void 0), [ik]), (0, Mk.jsx)(Dk.d, {
        showing: ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === mk || void 0 === mk ? void 0 : mk.content
      })
    }

    function nk(kk) {
      let {
        placement: ek = "bottom"
      } = kk;
      return (0, Mk.jsx)("div", {
        id: `clientGameHud-${ek}`,
        style: {
          display: "contents"
        }
      })
    }

    function Uk(kk) {
      let {
        children: ek,
        placement: ik = "bottom"
      } = kk;
      const [Dk, fk] = (0, Pk.useState)(null);
      return (0, Pk.useEffect)((() => {
        fk(document.getElementById(`clientGameHud-${ik}`))
      }), [ik]), Dk ? (0, mk.createPortal)(ek, Dk) : null
    }
  },
  33763: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(4479),
      fk = ik(4482);

    function Sk(kk) {
      let {
        children: ek,
        showing: ik,
        globallyUniqueKey: Sk,
        alwaysMountChildren: bk = !1,
        doGameplayStartStopOnShow: rk = !0,
        keepsMovement: Pk = !1
      } = kk;
      return (0, fk.c)(!0, ik, Sk, Pk), (0, Dk.c)(rk, ik), ik || bk ? ek : null
    }
  },
  8560: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    let Dk = null;
    const fk = function(kk) {
        const ek = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Dk = ek, () => {
          Dk === ek && (Dk = null)
        }
      },
      Sk = () => {
        var kk;
        return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
      }
  },
  36151: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => Hk,
      i: () => wk,
      m: () => rk,
      p: () => xk,
      t: () => lk,
      u: () => Kk,
      v: () => yk,
      w: () => Uk,
      x: () => pk
    });
    var Dk = ik(22),
      fk = ik(26);
    const Sk = "clientGameInventoryButtonsChanged",
      bk = new Map;

    function rk() {
      return [...bk.values()].sort(((kk, ek) => {
        var ik, Dk;
        return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
      }))
    }
    let Pk = null;

    function mk(kk) {
      Pk = kk
    }
    let Mk = !1;

    function Kk(kk) {
      Mk = !0;
      try {
        kk.onClick()
      } finally {
        Mk = !1
      }
      kk.panel && "clientGame" === Dk.b.get("openInGameMenuName") && mk(kk.id)
    }

    function xk() {
      return Mk
    }

    function nk() {
      return rk().filter((kk => kk.panel && !kk.disabled))
    }

    function Uk(kk) {
      const ek = nk(),
        ik = ek.findIndex((kk => kk.id === Pk));
      return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
    }

    function Hk() {
      return null !== Pk && nk().length > 1
    }

    function wk() {
      mk(null)
    }

    function lk() {
      "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
    }

    function pk() {
      const kk = Pk;
      return mk(null), kk
    }

    function yk(kk) {
      return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
        bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
      }
    }
  },
  36143: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => wk,
      h: () => lk,
      j: () => xk,
      n: () => mk,
      r: () => Hk,
      v: () => nk,
      z: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(36151);
    const rk = "clientGameUiChanged";
    let Pk = null;

    function mk() {
      return Pk
    }

    function Mk(kk, ek) {
      const ik = {
        content: kk,
        menu: ek
      };
      return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
        Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
      }
    }
    let Kk = null;

    function xk() {
      return Kk
    }

    function nk(kk) {
      return Kk = kk, () => {
        Kk === kk && (Kk = null)
      }
    }
    let Uk = !1;

    function Hk() {
      const kk = Dk.b.get("openInGameMenuName");
      "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wk() {
      pk(!1)
    }

    function lk() {
      pk(Uk)
    }

    function pk(kk) {
      "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, bk.i)(), Uk = !1
    }
  },
  39009: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => ke
    });
    const Dk = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var fk = ik(60),
      Sk = ik(37617),
      bk = ik(314);
    const rk = ["Basic", "Rare", "Super"];

    function Pk(kk, ek) {
      return `${"Basic"===ek?"":`${ek} `}${"Simple"===kk?"":`${kk} `}Lucky Block`
    }
    const mk = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((kk => rk.map((ek => [Pk(kk, ek), {
      category: kk,
      rarity: ek
    }])))));
    mk.keys();

    function Mk(kk) {
      return mk.get(kk)
    }
    const Kk = "Obsidian",
      xk = ["Cobweb"],
      nk = [...["Red", "Blue", "Green", "Yellow"].map((kk => `${(0,bk.O)(kk)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Kk, ...xk];

    function Uk(kk) {
      return nk.includes(kk)
    }
    var Hk = ik(594);

    function wk(kk, ek) {
      const ik = Mk(kk);
      if (ik) {
        const kk = Mk(ek);
        if (!kk) return;
        const Dk = rk.length - 1 - rk.indexOf(kk.rarity);
        return (kk.category === ik.category ? 0 : 1) * rk.length + Dk
      }
      if (!Uk(kk)) return;
      if (ek === kk) return 0;
      const Dk = kk => Uk(kk) && !xk.includes(kk) && kk !== Kk;
      return Dk(kk) && Dk(ek) ? 1 : void 0
    }
    const lk = [...Array.from({
      length: Hk.m - Hk.l
    }, ((kk, ek) => Hk.l + ek)), ...Array.from({
      length: Hk.l
    }, ((kk, ek) => ek))];
    class pk {
      constructor(kk) {
        this.inventory = kk, this.pending = new Map
      }
      onPlace(kk) {
        var ek;
        const ik = this.inventory.selectedSlot(),
          Dk = this.inventory.itemAt(ik);
        (null === Dk || void 0 === Dk ? void 0 : Dk.name) === kk && (null !== (ek = Dk.amount) && void 0 !== ek ? ek : 1) <= 1 && yk(kk) && this.pending.set(ik, kk)
      }
      onDrop(kk, ek) {
        ek < Hk.l && null === this.inventory.itemAt(ek) && yk(kk) && this.refill(ek, kk)
      }
      Px() {
        const kk = [...this.pending];
        this.pending.clear();
        for (const [ek, ik] of kk) null === this.inventory.itemAt(ek) && this.refill(ek, ik)
      }
      refill(kk, ek) {
        const ik = function(kk, ek, ik, Dk) {
          let fk, Sk = 1 / 0;
          for (const bk of lk) {
            if (bk === ek) continue;
            const rk = Dk(bk);
            if (!rk || bk < Hk.l && ek !== ik) continue;
            const Pk = wk(kk, rk.name);
            void 0 !== Pk && Pk < Sk && (fk = bk, Sk = Pk)
          }
          return fk
        }(ek, kk, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== ik && this.inventory.swap(kk, ik)
      }
    }

    function yk(kk) {
      return !!Mk(kk) || Uk(kk)
    }
    var Yk = ik(36143),
      Lk = ik(75),
      Ck = ik(1021),
      Ak = ik.n(Ck);
    const jk = "Lucky Clover",
      sk = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function dk(kk) {
      return sk[kk][0]
    }

    function Vk(kk) {
      return rk.filter((ek => kk >= dk(ek)))
    }
    var Fk = ik(302),
      uk = ik(2414),
      qk = ik(22),
      Ik = ik(2527),
      zk = ik(1877),
      Qk = ik(36140),
      vk = ik(1033);
    var Ek = ik(1066);
    const hk = {
      Basic: bk.D.whiteUiText,
      Rare: bk.D.goldUiText,
      Super: bk.D.cyanUiText
    };
    let ak = 1;

    function Wk() {
      const kk = (0, uk.e)("currencyAmounts"),
        ek = null === kk || void 0 === kk ? void 0 : kk.Clovers;
      return !ek || ek.hidden ? null : (0, Ek.jsx)(Qk.h, {
        children: (0, Ek.jsx)(tk, {
          amount: ek.amount
        })
      })
    }

    function tk(kk) {
      var ek, ik, Dk;
      let {
        amount: Sk
      } = kk;
      const {
        openEverythingMenuName: Pk
      } = (0, qk.n)(["openEverythingMenuName"]), mk = (0, Ik.c)(), [Mk, Kk] = (0, fk.useState)(Sk), [xk, nk] = (0, fk.useState)(null), [Uk, Hk] = (0, fk.useState)(0), [wk, lk] = (0, fk.useState)([]), pk = (0, fk.useRef)(Sk), yk = (0, fk.useRef)(!1), Yk = (0, fk.useRef)(null), Ck = Pk === Fk.r.SHOP;
      (0, fk.useEffect)((() => {
        const kk = pk.current;
        if (pk.current = Sk, Sk <= kk || Ck) return void Kk(Sk);
        const ek = mk || wk.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (ik = Sk - kk, Dk = !yk.current, ik <= 0 || !Dk && ik < 40 ? 0 : Math.min(4, Math.ceil(ik / 30)));
        var ik, Dk;
        if (yk.current = !0, Vk(Sk).length > Vk(kk).length && Hk(ak++), ek > 0) {
          const kk = [];
          for (let ik = 0; ik < ek; ik++) kk.push({
            id: ak++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * ik
          });
          lk((ek => [...ek, ...kk]))
        }
        const fk = ek > 0 ? 600 : 0;
        nk({
          id: ak++,
          delayMs: fk
        });
        const rk = performance.now() + fk;
        let Pk = 0;
        const Mk = ek => {
          const ik = bk.c.clamp((ek - rk) / 600, 0, 1);
          Kk(Math.round(kk + (Sk - kk) * ik)), ik < 1 && (Pk = requestAnimationFrame(Mk))
        };
        return Pk = requestAnimationFrame(Mk), () => {
          cancelAnimationFrame(Pk)
        }
      }), [Sk, Ck]);
      const sk = function(kk) {
          var ek;
          const ik = null !== (ek = rk.find((ek => kk < dk(ek)))) && void 0 !== ek ? ek : "Super";
          return {
            rarity: ik,
            progress: bk.c.clamp(kk / dk(ik), 0, 1)
          }
        }(Mk),
        uk = Vk(Mk).at(-1);
      return (0, Ek.jsxs)(Ek.Fragment, {
        children: [(0, Ek.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Ek.jsxs)("div", {
            className: Ak()("LuckyCloverWallet", {
              Capped: uk && "Basic" !== uk
            }),
            style: uk && {
              "--luckyTierColour": hk[uk]
            },
            children: [(0, Ek.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${sk.progress})`
              }
            }), Uk > 0 && (0, Ek.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(ek=null===xk||void 0===xk?void 0:xk.delayMs)&&void 0!==ek?ek:0}ms`
              }
            }, Uk), (0, Ek.jsx)("div", {
              ref: Yk,
              className: Ak()("LuckyCloverWalletIcon", xk && "Bounce"),
              style: {
                animationDelay: `${null!==(Dk=null===xk||void 0===xk?void 0:xk.delayMs)&&void 0!==Dk?Dk:0}ms`
              },
              children: (0, Ek.jsx)(zk.c, {
                itemName: jk,
                amount: 0
              })
            }, null !== (ik = null === xk || void 0 === xk ? void 0 : xk.id) && void 0 !== ik ? ik : 0), (0, Ek.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Mk
            }), uk && (0, Ek.jsx)(vk.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Lk.createPortal)(wk.map((kk => (0, Ek.jsx)(Xk, {
          flyer: kk,
          target: Yk,
          onDone: () => {
            lk((ek => ek.filter((ek => ek.id !== kk.id))))
          }
        }, kk.id))), document.body)]
      })
    }

    function Xk(kk) {
      let {
        flyer: ek,
        target: ik,
        onDone: Dk
      } = kk;
      const Sk = (0, fk.useRef)(null);
      return (0, fk.useEffect)((() => {
        var kk;
        const fk = null === (kk = ik.current) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
        if (!Sk.current || !fk) return void Dk();
        const {
          x: bk,
          y: rk
        } = ek, Pk = bk + 140 * (Math.random() - .5), mk = rk - 30 - 40 * Math.random(), Mk = Sk.current.animate([{
          transform: `translate(${bk}px, ${rk}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Pk}px, ${mk}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${fk.left}px, ${fk.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: ek.delayMs,
          fill: "backwards"
        });
        return Mk.onfinish = Dk, () => {
          Mk.cancel()
        }
      }), []), (0, Ek.jsx)("div", {
        ref: Sk,
        className: "LuckyCloverFlying",
        children: (0, Ek.jsx)(zk.c, {
          itemName: jk,
          amount: 0
        })
      })
    }
    var Bk = ik(26);
    const ck = "luckyGearUpgradeView",
      Tk = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Zk(kk) {
      var ek;
      return null !== (ek = Tk[kk.split(" ")[0]]) && void 0 !== ek ? ek : "#e07bff"
    }
    class Ok {
      constructor(kk, ek) {
        this.selectedSlot = kk, this.itemAt = ek, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      BU(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [ik, Dk, fk] of kk) this.rings.push({
          id: this.nextId++,
          slot: ik,
          colour: Zk(fk),
          until: ek + 1200
        }), ik !== this.selectedSlot() && this.unseen.set(ik, {
          from: Dk,
          to: fk
        });
        this.tm()
      }
      Px() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const ek = this.rings.filter((ek => ek.until > kk));
        let ik = ek.length !== this.rings.length;
        this.rings = ek;
        for (const [Dk, {
            from: fk,
            to: Sk
          }] of this.unseen) {
          const kk = this.itemAt(Dk);
          (Dk === this.selectedSlot() || kk !== Sk && kk !== fk) && (this.unseen.delete(Dk), ik = !0)
        }
        ik && this.tm()
      }
      tm() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Bk.j.tm(ck, this.view)
      }
    }
    var gk = ik(1406);

    function Gk(kk) {
      return document.querySelector(`.HotBar [data-inven-idx="${kk}"]`)
    }

    function Nk(kk) {
      let {
        ring: ek
      } = kk;
      const [ik, Dk] = (0, fk.useState)(null);
      return (0, fk.useLayoutEffect)((() => {
        var kk, ik;
        Dk(null !== (kk = null === (ik = Gk(ek.slot)) || void 0 === ik ? void 0 : ik.getBoundingClientRect()) && void 0 !== kk ? kk : null)
      }), [ek]), ik ? (0, Ek.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: ik.left,
          top: ik.top,
          width: ik.width,
          height: ik.height,
          "--ringColour": ek.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Rk(kk) {
      let {
        slot: ek
      } = kk;
      const [ik, Dk] = (0, fk.useState)(null);
      return (0, fk.useLayoutEffect)((() => {
        const kk = () => {
          Dk(Gk(ek))
        };
        kk();
        const ik = new MutationObserver(kk),
          fk = document.querySelector(".BottomMiddleElements");
        return fk && ik.observe(fk, {
          childList: !0,
          subtree: !0
        }), () => {
          ik.disconnect()
        }
      }), [ek]), ik ? (0, Lk.createPortal)((0, Ek.jsx)("div", {
        className: "LuckyGearUnseen"
      }), ik) : null
    }

    function Jk(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, gk.e)(ck, ek.getView());
      return (0, Ek.jsxs)(Ek.Fragment, {
        children: [ik.rings.map((kk => (0, Ek.jsx)(Nk, {
          ring: kk
        }, kk.id))), ik.unseenSlots.map((kk => (0, Ek.jsx)(Rk, {
          slot: kk
        }, kk)))]
      })
    }
    const ke = function(kk, ek, ik, bk) {
      let rk, {
          localPlayerId: Pk
        } = bk,
        mk = null;
      const Mk = new pk({
          itemAt: kk => rk.getItemSlot(Pk, kk),
          selectedSlot: () => rk.getSelectedInventorySlotI(Pk),
          swap: (kk, ek) => {
            rk.swapInventorySlots(kk, ek)
          }
        }),
        Kk = new Ok((() => rk.getSelectedInventorySlotI(Pk)), (kk => {
          var ek;
          return null === (ek = rk.getItemSlot(Pk, kk)) || void 0 === ek ? void 0 : ek.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Sk.e)()
        },
        onCreate: kk => {
          rk = kk, mk = (0, Yk.z)((0, fk.createElement)(fk.Fragment, null, (0, fk.createElement)(Wk), (0, fk.createElement)(Jk, {
            controller: Kk
          })))
        },
        onClose: () => {
          var kk;
          null === (kk = mk) || void 0 === kk || kk()
        },
        Px: () => {
          Mk.Px(), Kk.Px()
        },
        onReceivedMessageFromServer: (kk, ek) => {
          "luckyGearUpgrade" === kk && Kk.BU(ek)
        },
        onPlayerChangeBlock: (kk, ek, ik, Dk, fk, Sk) => {
          "Air" !== Sk && Mk.onPlace(Sk)
        },
        onPlayerDropItem: (kk, ek, ik, Dk) => {
          Mk.onDrop(ek, Dk)
        },
        onPlayerAltAction: (kk, ek, ik, fk, Sk, bk) => {
          if (!bk || "Mesh" !== rk.getEntityType(bk)) return;
          const Pk = rk.getEntityName(bk),
            mk = Object.values(Dk).find((kk => kk.name === Pk));
          mk && rk.openShop(kk, !1, mk.shopTab)
        }
      }
    }
  },
  37617: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk
    });
    var Dk = ik(314),
      fk = ik(36530),
      Sk = ik(4417);
    const bk = ["Leaf Bed", "_Leaf Bed Head", ...Dk.xc.flatMap((kk => [`${kk} Bed`, `_${kk} Bed Head`, `${kk} Strongbed`, `_${kk} Strongbed Head`]))];

    function rk() {
      let kk;
      return {
        onCreate(ek) {
          kk = ek
        },
        altVetoBlocks: bk,
        onPlayerAttemptAltAction(ek, ik, Dk, bk, rk, Pk) {
          var mk;
          if ((0, fk.d)(kk.getMetaInfo(rk).rootName) && !kk.isEntityInteractable(Pk) && (0, Sk.f)(null === (mk = kk.jek(ek)) || void 0 === mk ? void 0 : mk.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36530: (kk, ek, ik) => {
    function Dk(kk) {
      return kk.includes("Leaf Bed")
    }

    function fk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Dk(kk)
    }

    function Sk(kk) {
      return kk.includes(" Strongbed")
    }

    function bk(kk) {
      return Dk(kk) || fk(kk) || Sk(kk)
    }
    ik.d(ek, {
      d: () => bk,
      h: () => Dk,
      i: () => Sk,
      l: () => fk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);