export const id = 19;
export const ids = [19];
export const modules = {
  36772: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      g: () => Ld,
      h: () => ld,
      j: () => od
    });
    var pd = kd(9234),
      Nd = kd(36779),
      Wd = kd(36783),
      Pd = kd(8620),
      Zd = kd(1459),
      gd = kd(56),
      Cd = kd(72),
      Kd = kd(1103);

    function od() {
      var dd;
      return (0, Zd.i)(Nd.e, (0, Nd.o)()), (0, Kd.jsx)(Kd.Fragment, {
        children: null === (dd = (0, Nd.o)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function ld(dd) {
      var Jd;
      let {
        show: kd
      } = dd;
      (0, Zd.i)(Nd.e, (0, Nd.o)());
      const Cd = null === (Jd = (0, Nd.o)()) || void 0 === Jd ? void 0 : Jd.menu;
      return (0, gd.useEffect)((() => {
        var dd;
        kd || (null === Cd || void 0 === Cd || null === (dd = Cd.onClose) || void 0 === dd || dd.call(Cd), (0, Wd.s)())
      }), [kd, Cd]), (0, gd.useEffect)((() => kd ? (0, Pd.g)(Wd.B, Wd.h) : void 0), [kd]), (0, Kd.jsx)(pd.b, {
        showing: kd,
        globallyUniqueKey: "clientGameMenu",
        children: null === Cd || void 0 === Cd ? void 0 : Cd.content
      })
    }

    function Qd(dd) {
      let {
        placement: Jd = "bottom"
      } = dd;
      return (0, Kd.jsx)("div", {
        id: `clientGameHud-${Jd}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ld(dd) {
      let {
        children: Jd,
        placement: kd = "bottom"
      } = dd;
      const [pd, Nd] = (0, gd.useState)(null);
      return (0, gd.useEffect)((() => {
        Nd(document.getElementById(`clientGameHud-${kd}`))
      }), [kd]), pd ? (0, Cd.createPortal)(Jd, pd) : null
    }
  },
  9234: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(4393),
      Nd = kd(4397);

    function Wd(dd) {
      let {
        children: Jd,
        showing: kd,
        globallyUniqueKey: Wd,
        alwaysMountChildren: Pd = !1,
        doGameplayStartStopOnShow: Zd = !0,
        keepsMovement: gd = !1
      } = dd;
      return (0, Nd.d)(!0, kd, Wd, gd), (0, pd.c)(Zd, kd), kd || Pd ? Jd : null
    }
  },
  8620: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      g: () => Nd
    });
    let pd = null;
    const Nd = function(dd) {
        const Jd = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pd = Jd, () => {
          pd === Jd && (pd = null)
        }
      },
      Wd = () => {
        var dd;
        return null !== (dd = pd) && void 0 !== dd && dd.canCycle() ? pd.cycle : null
      }
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  39549: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => dJ
    });
    const pd = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Nd = kd(56),
      Wd = kd(38226),
      Pd = kd(313);
    const Zd = ["Basic", "Rare", "Super"];

    function gd(dd, Jd) {
      return `${"Basic"===Jd?"":`${Jd} `}${"Simple"===dd?"":`${dd} `}Lucky Block`
    }
    const Cd = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((dd => Zd.map((Jd => [gd(dd, Jd), {
      category: dd,
      rarity: Jd
    }])))));
    Cd.keys();

    function Kd(dd) {
      return Cd.get(dd)
    }
    const od = "Obsidian",
      ld = ["Cobweb"],
      Qd = [...["Red", "Blue", "Green", "Yellow"].map((dd => `${(0,Pd.cb)(dd)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", od, ...ld];

    function Ld(dd) {
      return Qd.includes(dd)
    }
    var Od = kd(610);

    function ed(dd, Jd) {
      const kd = Kd(dd);
      if (kd) {
        const dd = Kd(Jd);
        if (!dd) return;
        const pd = Zd.length - 1 - Zd.indexOf(dd.rarity);
        return (dd.category === kd.category ? 0 : 1) * Zd.length + pd
      }
      if (!Ld(dd)) return;
      if (Jd === dd) return 0;
      const pd = dd => Ld(dd) && !ld.includes(dd) && dd !== od;
      return pd(dd) && pd(Jd) ? 1 : void 0
    }
    const Rd = [...Array.from({
      length: Od.q - Od.o
    }, ((dd, Jd) => Od.o + Jd)), ...Array.from({
      length: Od.o
    }, ((dd, Jd) => Jd))];
    class Id {
      constructor(dd) {
        this.inventory = dd, this.pending = new Map
      }
      onPlace(dd) {
        var Jd;
        const kd = this.inventory.selectedSlot(),
          pd = this.inventory.itemAt(kd);
        (null === pd || void 0 === pd ? void 0 : pd.name) === dd && (null !== (Jd = pd.amount) && void 0 !== Jd ? Jd : 1) <= 1 && Gd(dd) && this.pending.set(kd, dd)
      }
      onDrop(dd, Jd) {
        Jd < Od.o && null === this.inventory.itemAt(Jd) && Gd(dd) && this.refill(Jd, dd)
      }
      Do() {
        const dd = [...this.pending];
        this.pending.clear();
        for (const [Jd, kd] of dd) null === this.inventory.itemAt(Jd) && this.refill(Jd, kd)
      }
      refill(dd, Jd) {
        const kd = function(dd, Jd, kd, pd) {
          let Nd, Wd = 1 / 0;
          for (const Pd of Rd) {
            if (Pd === Jd) continue;
            const Zd = pd(Pd);
            if (!Zd || Pd < Od.o && Jd !== kd) continue;
            const gd = ed(dd, Zd.name);
            void 0 !== gd && gd < Wd && (Nd = Pd, Wd = gd)
          }
          return Nd
        }(Jd, dd, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== kd && this.inventory.swap(dd, kd)
      }
    }

    function Gd(dd) {
      return !!Kd(dd) || Ld(dd)
    }
    var vd = kd(36779),
      xd = kd(72),
      qd = kd(1044),
      Bd = kd.n(qd);
    const sd = "Lucky Clover",
      ad = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Md(dd) {
      return ad[dd][0]
    }

    function Fd(dd) {
      return Zd.filter((Jd => dd >= Md(Jd)))
    }
    var Yd = kd(300),
      md = kd(2357),
      bd = kd(22),
      Sd = kd(2465),
      jd = kd(1924),
      Xd = kd(36772),
      fd = kd(1059);
    var nd = kd(1103);
    const Ud = {
      Basic: Pd.M.whiteUiText,
      Rare: Pd.M.goldUiText,
      Super: Pd.M.cyanUiText
    };
    let yd = 1;

    function Dd() {
      const dd = (0, md.j)("currencyAmounts"),
        Jd = null === dd || void 0 === dd ? void 0 : dd.Clovers;
      return !Jd || Jd.hidden ? null : (0, nd.jsx)(Xd.g, {
        children: (0, nd.jsx)(Td, {
          amount: Jd.amount
        })
      })
    }

    function Td(dd) {
      var Jd, kd, pd;
      let {
        amount: Wd
      } = dd;
      const {
        openEverythingMenuName: gd
      } = (0, bd.j)(["openEverythingMenuName"]), Cd = (0, Sd.d)(), [Kd, od] = (0, Nd.useState)(Wd), [ld, Qd] = (0, Nd.useState)(null), [Ld, Od] = (0, Nd.useState)(0), [ed, Rd] = (0, Nd.useState)([]), Id = (0, Nd.useRef)(Wd), Gd = (0, Nd.useRef)(!1), vd = (0, Nd.useRef)(null), qd = gd === Yd.s.SHOP;
      (0, Nd.useEffect)((() => {
        const dd = Id.current;
        if (Id.current = Wd, Wd <= dd || qd) return void od(Wd);
        const Jd = Cd || ed.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (kd = Wd - dd, pd = !Gd.current, kd <= 0 || !pd && kd < 40 ? 0 : Math.min(4, Math.ceil(kd / 30)));
        var kd, pd;
        if (Gd.current = !0, Fd(Wd).length > Fd(dd).length && Od(yd++), Jd > 0) {
          const dd = [];
          for (let kd = 0; kd < Jd; kd++) dd.push({
            id: yd++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * kd
          });
          Rd((Jd => [...Jd, ...dd]))
        }
        const Nd = Jd > 0 ? 600 : 0;
        Qd({
          id: yd++,
          delayMs: Nd
        });
        const Zd = performance.now() + Nd;
        let gd = 0;
        const Kd = Jd => {
          const kd = Pd.b.clamp((Jd - Zd) / 600, 0, 1);
          od(Math.round(dd + (Wd - dd) * kd)), kd < 1 && (gd = requestAnimationFrame(Kd))
        };
        return gd = requestAnimationFrame(Kd), () => {
          cancelAnimationFrame(gd)
        }
      }), [Wd, qd]);
      const ad = function(dd) {
          var Jd;
          const kd = null !== (Jd = Zd.find((Jd => dd < Md(Jd)))) && void 0 !== Jd ? Jd : "Super";
          return {
            rarity: kd,
            progress: Pd.b.clamp(dd / Md(kd), 0, 1)
          }
        }(Kd),
        md = Fd(Kd).at(-1);
      return (0, nd.jsxs)(nd.Fragment, {
        children: [(0, nd.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, nd.jsxs)("div", {
            className: Bd()("LuckyCloverWallet", {
              Capped: md && "Basic" !== md
            }),
            style: md && {
              "--luckyTierColour": Ud[md]
            },
            children: [(0, nd.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${ad.progress})`
              }
            }), Ld > 0 && (0, nd.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Jd=null===ld||void 0===ld?void 0:ld.delayMs)&&void 0!==Jd?Jd:0}ms`
              }
            }, Ld), (0, nd.jsx)("div", {
              ref: vd,
              className: Bd()("LuckyCloverWalletIcon", ld && "Bounce"),
              style: {
                animationDelay: `${null!==(pd=null===ld||void 0===ld?void 0:ld.delayMs)&&void 0!==pd?pd:0}ms`
              },
              children: (0, nd.jsx)(jd.d, {
                itemName: sd,
                amount: 0
              })
            }, null !== (kd = null === ld || void 0 === ld ? void 0 : ld.id) && void 0 !== kd ? kd : 0), (0, nd.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Kd
            }), md && (0, nd.jsx)(fd.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, xd.createPortal)(ed.map((dd => (0, nd.jsx)(Ed, {
          flyer: dd,
          target: vd,
          onDone: () => {
            Rd((Jd => Jd.filter((Jd => Jd.id !== dd.id))))
          }
        }, dd.id))), document.body)]
      })
    }

    function Ed(dd) {
      let {
        flyer: Jd,
        target: kd,
        onDone: pd
      } = dd;
      const Wd = (0, Nd.useRef)(null);
      return (0, Nd.useEffect)((() => {
        var dd;
        const Nd = null === (dd = kd.current) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
        if (!Wd.current || !Nd) return void pd();
        const {
          x: Pd,
          y: Zd
        } = Jd, gd = Pd + 140 * (Math.random() - .5), Cd = Zd - 30 - 40 * Math.random(), Kd = Wd.current.animate([{
          transform: `translate(${Pd}px, ${Zd}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${gd}px, ${Cd}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Nd.left}px, ${Nd.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Jd.delayMs,
          fill: "backwards"
        });
        return Kd.onfinish = pd, () => {
          Kd.cancel()
        }
      }), []), (0, nd.jsx)("div", {
        ref: Wd,
        className: "LuckyCloverFlying",
        children: (0, nd.jsx)(jd.d, {
          itemName: sd,
          amount: 0
        })
      })
    }
    var cd = kd(29);
    const hd = "luckyGearUpgradeView",
      rd = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function ud(dd) {
      var Jd;
      return null !== (Jd = rd[dd.split(" ")[0]]) && void 0 !== Jd ? Jd : "#e07bff"
    }
    class td {
      constructor(dd, Jd) {
        this.selectedSlot = dd, this.itemAt = Jd, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      ZL(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [kd, pd, Nd] of dd) this.rings.push({
          id: this.nextId++,
          slot: kd,
          colour: ud(Nd),
          until: Jd + 1200
        }), kd !== this.selectedSlot() && this.unseen.set(kd, {
          from: pd,
          to: Nd
        });
        this.nO()
      }
      Do() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Jd = this.rings.filter((Jd => Jd.until > dd));
        let kd = Jd.length !== this.rings.length;
        this.rings = Jd;
        for (const [pd, {
            from: Nd,
            to: Wd
          }] of this.unseen) {
          const dd = this.itemAt(pd);
          (pd === this.selectedSlot() || dd !== Wd && dd !== Nd) && (this.unseen.delete(pd), kd = !0)
        }
        kd && this.nO()
      }
      nO() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, cd.j.nO(hd, this.view)
      }
    }
    var Vd = kd(1459);

    function zd(dd) {
      return document.querySelector(`.HotBar [data-inven-idx="${dd}"]`)
    }

    function Hd(dd) {
      let {
        ring: Jd
      } = dd;
      const [kd, pd] = (0, Nd.useState)(null);
      return (0, Nd.useLayoutEffect)((() => {
        var dd, kd;
        pd(null !== (dd = null === (kd = zd(Jd.slot)) || void 0 === kd ? void 0 : kd.getBoundingClientRect()) && void 0 !== dd ? dd : null)
      }), [Jd]), kd ? (0, nd.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: kd.left,
          top: kd.top,
          width: kd.width,
          height: kd.height,
          "--ringColour": Jd.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function wd(dd) {
      let {
        slot: Jd
      } = dd;
      const [kd, pd] = (0, Nd.useState)(null);
      return (0, Nd.useLayoutEffect)((() => {
        const dd = () => {
          pd(zd(Jd))
        };
        dd();
        const kd = new MutationObserver(dd),
          Nd = document.querySelector(".BottomMiddleElements");
        return Nd && kd.observe(Nd, {
          childList: !0,
          subtree: !0
        }), () => {
          kd.disconnect()
        }
      }), [Jd]), kd ? (0, xd.createPortal)((0, nd.jsx)("div", {
        className: "LuckyGearUnseen"
      }), kd) : null
    }

    function Ad(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, Vd.i)(hd, Jd.getView());
      return (0, nd.jsxs)(nd.Fragment, {
        children: [kd.rings.map((dd => (0, nd.jsx)(Hd, {
          ring: dd
        }, dd.id))), kd.unseenSlots.map((dd => (0, nd.jsx)(wd, {
          slot: dd
        }, dd)))]
      })
    }
    const dJ = function(dd, Jd, kd, Pd) {
      let Zd, {
          localPlayerId: gd
        } = Pd,
        Cd = null;
      const Kd = new Id({
          itemAt: dd => Zd.getItemSlot(gd, dd),
          selectedSlot: () => Zd.getSelectedInventorySlotI(gd),
          swap: (dd, Jd) => {
            Zd.swapInventorySlots(dd, Jd)
          }
        }),
        od = new td((() => Zd.getSelectedInventorySlotI(gd)), (dd => {
          var Jd;
          return null === (Jd = Zd.getItemSlot(gd, dd)) || void 0 === Jd ? void 0 : Jd.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Wd.c)()
        },
        onCreate: dd => {
          Zd = dd, Cd = (0, vd.w)((0, Nd.createElement)(Nd.Fragment, null, (0, Nd.createElement)(Dd), (0, Nd.createElement)(Ad, {
            controller: od
          })))
        },
        onClose: () => {
          var dd;
          null === (dd = Cd) || void 0 === dd || dd()
        },
        Do: () => {
          Kd.Do(), od.Do()
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          "luckyGearUpgrade" === dd && od.ZL(Jd)
        },
        onPlayerChangeBlock: (dd, Jd, kd, pd, Nd, Wd) => {
          "Air" !== Wd && Kd.onPlace(Wd)
        },
        onPlayerDropItem: (dd, Jd, kd, pd) => {
          Kd.onDrop(Jd, pd)
        },
        onPlayerAltAction: (dd, Jd, kd, Nd, Wd, Pd) => {
          if (!Pd || "Mesh" !== Zd.getEntityType(Pd)) return;
          const gd = Zd.getEntityName(Pd),
            Cd = Object.values(pd).find((dd => dd.name === gd));
          Cd && Zd.openShop(dd, !1, Cd.shopTab)
        }
      }
    }
  },
  38226: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd
    });
    var pd = kd(313),
      Nd = kd(37106),
      Wd = kd(4329);
    const Pd = ["Leaf Bed", "_Leaf Bed Head", ...pd.Oc.flatMap((dd => [`${dd} Bed`, `_${dd} Bed Head`, `${dd} Strongbed`, `_${dd} Strongbed Head`]))];

    function Zd() {
      let dd;
      return {
        onCreate(Jd) {
          dd = Jd
        },
        altVetoBlocks: Pd,
        onPlayerAttemptAltAction(Jd, kd, pd, Pd, Zd, gd) {
          var Cd;
          if ((0, Nd.c)(dd.getMetaInfo(Zd).rootName) && !dd.isEntityInteractable(gd) && (0, Wd.d)(null === (Cd = dd.Pkd(Jd)) || void 0 === Cd ? void 0 : Cd.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37106: (dd, Jd, kd) => {
    function pd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Nd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !pd(dd)
    }

    function Wd(dd) {
      return dd.includes(" Strongbed")
    }

    function Pd(dd) {
      return pd(dd) || Nd(dd) || Wd(dd)
    }
    kd.d(Jd, {
      c: () => Pd,
      f: () => pd,
      j: () => Wd,
      n: () => Nd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);