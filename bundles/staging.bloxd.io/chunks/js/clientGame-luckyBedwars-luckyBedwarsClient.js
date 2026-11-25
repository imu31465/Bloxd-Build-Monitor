export const id = 19;
export const ids = [19];
export const modules = {
  36990: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      h: () => Ou,
      k: () => cu,
      n: () => bu
    });
    var su = ju(34547),
      Uu = ju(36992),
      Zu = ju(36998),
      Xu = ju(8942),
      lu = ju(1499),
      qu = ju(58),
      fu = ju(65),
      Cu = ju(1154);

    function bu() {
      var uu;
      return (0, lu.g)(Uu.c, (0, Uu.l)()), (0, Cu.jsx)(Cu.Fragment, {
        children: null === (uu = (0, Uu.l)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function cu(uu) {
      var Eu;
      let {
        show: ju
      } = uu;
      (0, lu.g)(Uu.c, (0, Uu.l)());
      const fu = null === (Eu = (0, Uu.l)()) || void 0 === Eu ? void 0 : Eu.menu;
      return (0, qu.useEffect)((() => {
        var uu;
        ju || (null === fu || void 0 === fu || null === (uu = fu.onClose) || void 0 === uu || uu.call(fu), (0, Zu.q)())
      }), [ju, fu]), (0, qu.useEffect)((() => ju ? (0, Xu.f)(Zu.x, Zu.h) : void 0), [ju]), (0, Cu.jsx)(su.b, {
        showing: ju,
        globallyUniqueKey: "clientGameMenu",
        children: null === fu || void 0 === fu ? void 0 : fu.content
      })
    }

    function Nu(uu) {
      let {
        placement: Eu = "bottom"
      } = uu;
      return (0, Cu.jsx)("div", {
        id: `clientGameHud-${Eu}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ou(uu) {
      let {
        children: Eu,
        placement: ju = "bottom"
      } = uu;
      const [su, Uu] = (0, qu.useState)(null);
      return (0, qu.useEffect)((() => {
        Uu(document.getElementById(`clientGameHud-${ju}`))
      }), [ju]), su ? (0, fu.createPortal)(Eu, su) : null
    }
  },
  34547: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(4723),
      Uu = ju(4726);

    function Zu(uu) {
      let {
        children: Eu,
        showing: ju,
        globallyUniqueKey: Zu,
        alwaysMountChildren: Xu = !1,
        doGameplayStartStopOnShow: lu = !0,
        keepsMovement: qu = !1
      } = uu;
      return (0, Uu.e)(!0, ju, Zu, qu), (0, su.e)(lu, ju), ju || Xu ? Eu : null
    }
  },
  8942: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    let su = null;
    const Uu = function(uu) {
        const Eu = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return su = Eu, () => {
          su === Eu && (su = null)
        }
      },
      Zu = () => {
        var uu;
        return null !== (uu = su) && void 0 !== uu && uu.canCycle() ? su.cycle : null
      }
  },
  36998: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Yu,
      j: () => hu,
      k: () => lu,
      o: () => cu,
      q: () => Du,
      r: () => bu,
      t: () => Mu,
      x: () => Ou,
      y: () => gu
    });
    var su = ju(22),
      Uu = ju(24);
    const Zu = "clientGameInventoryButtonsChanged",
      Xu = new Map;

    function lu() {
      return [...Xu.values()].sort(((uu, Eu) => {
        var ju, su;
        return (null !== (ju = uu.order) && void 0 !== ju ? ju : 0) - (null !== (su = Eu.order) && void 0 !== su ? su : 0)
      }))
    }
    let qu = null;

    function fu(uu) {
      qu = uu
    }
    let Cu = !1;

    function bu(uu) {
      Cu = !0;
      try {
        uu.onClick()
      } finally {
        Cu = !1
      }
      uu.panel && "clientGame" === su.d.get("openInGameMenuName") && fu(uu.id)
    }

    function cu() {
      return Cu
    }

    function Nu() {
      return lu().filter((uu => uu.panel && !uu.disabled))
    }

    function Ou(uu) {
      const Eu = Nu(),
        ju = Eu.findIndex((uu => uu.id === qu));
      return !(ju < 0 || Eu.length < 2) && (bu(Eu[(ju + uu + Eu.length) % Eu.length]), !0)
    }

    function Yu() {
      return null !== qu && Nu().length > 1
    }

    function hu() {
      fu(null)
    }

    function Du() {
      "inventory" !== su.d.get("openInGameMenuName") && fu(null)
    }

    function gu() {
      const uu = qu;
      return fu(null), uu
    }

    function Mu(uu) {
      return Xu.set(uu.id, uu), Uu.h.TY(Zu, lu(), !0), () => {
        Xu.get(uu.id) === uu && (Xu.delete(uu.id), Uu.h.TY(Zu, lu()))
      }
    }
  },
  36992: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => hu,
      g: () => Du,
      k: () => cu,
      l: () => fu,
      m: () => Yu,
      n: () => Nu,
      o: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(36998);
    const lu = "clientGameUiChanged";
    let qu = null;

    function fu() {
      return qu
    }

    function Cu(uu, Eu) {
      const ju = {
        content: uu,
        menu: Eu
      };
      return qu = ju, Uu.h.TY(lu, qu, !0), () => {
        qu === ju && (qu = null, Ou = !1, hu(), Uu.h.TY(lu, null))
      }
    }
    let bu = null;

    function cu() {
      return bu
    }

    function Nu(uu) {
      return bu = uu, () => {
        bu === uu && (bu = null)
      }
    }
    let Ou = !1;

    function Yu() {
      const uu = su.d.get("openInGameMenuName");
      "clientGame" !== uu && (Ou = "inventory" === uu), (0, Xu.o)() || (0, Xu.j)(), (0, Zu.t)(Zu.b), su.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hu() {
      gu(!1)
    }

    function Du() {
      gu(Ou)
    }

    function gu(uu) {
      "clientGame" === su.d.get("openInGameMenuName") && su.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, Xu.j)(), Ou = !1
    }
  },
  39745: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Ru
    });
    const su = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Uu = ju(58),
      Zu = ju(38413),
      Xu = ju(349);
    const lu = ["Basic", "Rare", "Super"];

    function qu(uu, Eu) {
      return `${"Basic"===Eu?"":`${Eu} `}${"Simple"===uu?"":`${uu} `}Lucky Block`
    }
    const fu = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((uu => lu.map((Eu => [qu(uu, Eu), {
      category: uu,
      rarity: Eu
    }])))));
    fu.keys();

    function Cu(uu) {
      return fu.get(uu)
    }
    const bu = "Obsidian",
      cu = ["Cobweb"],
      Nu = [...["Red", "Blue", "Green", "Yellow"].map((uu => `${(0,Xu.W)(uu)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", bu, ...cu];

    function Ou(uu) {
      return Nu.includes(uu)
    }
    var Yu = ju(649);

    function hu(uu, Eu) {
      const ju = Cu(uu);
      if (ju) {
        const uu = Cu(Eu);
        if (!uu) return;
        const su = lu.length - 1 - lu.indexOf(uu.rarity);
        return (uu.category === ju.category ? 0 : 1) * lu.length + su
      }
      if (!Ou(uu)) return;
      if (Eu === uu) return 0;
      const su = uu => Ou(uu) && !cu.includes(uu) && uu !== bu;
      return su(uu) && su(Eu) ? 1 : void 0
    }
    const Du = [...Array.from({
      length: Yu.q - Yu.o
    }, ((uu, Eu) => Yu.o + Eu)), ...Array.from({
      length: Yu.o
    }, ((uu, Eu) => Eu))];
    class gu {
      constructor(uu) {
        this.inventory = uu, this.pending = new Map
      }
      onPlace(uu) {
        var Eu;
        const ju = this.inventory.selectedSlot(),
          su = this.inventory.itemAt(ju);
        (null === su || void 0 === su ? void 0 : su.name) === uu && (null !== (Eu = su.amount) && void 0 !== Eu ? Eu : 1) <= 1 && Mu(uu) && this.pending.set(ju, uu)
      }
      onDrop(uu, Eu) {
        Eu < Yu.o && null === this.inventory.itemAt(Eu) && Mu(uu) && this.refill(Eu, uu)
      }
      Tb() {
        const uu = [...this.pending];
        this.pending.clear();
        for (const [Eu, ju] of uu) null === this.inventory.itemAt(Eu) && this.refill(Eu, ju)
      }
      refill(uu, Eu) {
        const ju = function(uu, Eu, ju, su) {
          let Uu, Zu = 1 / 0;
          for (const Xu of Du) {
            if (Xu === Eu) continue;
            const lu = su(Xu);
            if (!lu || Xu < Yu.o && Eu !== ju) continue;
            const qu = hu(uu, lu.name);
            void 0 !== qu && qu < Zu && (Uu = Xu, Zu = qu)
          }
          return Uu
        }(Eu, uu, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== ju && this.inventory.swap(uu, ju)
      }
    }

    function Mu(uu) {
      return !!Cu(uu) || Ou(uu)
    }
    var eu = ju(36992),
      Gu = ju(65),
      pu = ju(1105),
      wu = ju.n(pu);
    const Ju = "Lucky Clover",
      du = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function au(uu) {
      return du[uu][0]
    }

    function Pu(uu) {
      return lu.filter((Eu => uu >= au(Eu)))
    }
    var ou = ju(337),
      ku = ju(2543),
      mu = ju(22),
      vu = ju(2701),
      Ku = ju(1971),
      Vu = ju(36990),
      ru = ju(1116);
    var Qu = ju(1154);
    const iu = {
      Basic: Xu.G.whiteUiText,
      Rare: Xu.G.goldUiText,
      Super: Xu.G.cyanUiText
    };
    let Wu = 1;

    function Su() {
      const uu = (0, ku.h)("currencyAmounts"),
        Eu = null === uu || void 0 === uu ? void 0 : uu.Clovers;
      return !Eu || Eu.hidden ? null : (0, Qu.jsx)(Vu.h, {
        children: (0, Qu.jsx)(Iu, {
          amount: Eu.amount
        })
      })
    }

    function Iu(uu) {
      var Eu, ju, su;
      let {
        amount: Zu
      } = uu;
      const {
        openEverythingMenuName: qu
      } = (0, mu.l)(["openEverythingMenuName"]), fu = (0, vu.d)(), [Cu, bu] = (0, Uu.useState)(Zu), [cu, Nu] = (0, Uu.useState)(null), [Ou, Yu] = (0, Uu.useState)(0), [hu, Du] = (0, Uu.useState)([]), gu = (0, Uu.useRef)(Zu), Mu = (0, Uu.useRef)(!1), eu = (0, Uu.useRef)(null), pu = qu === ou.o.SHOP;
      (0, Uu.useEffect)((() => {
        const uu = gu.current;
        if (gu.current = Zu, Zu <= uu || pu) return void bu(Zu);
        const Eu = fu || hu.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (ju = Zu - uu, su = !Mu.current, ju <= 0 || !su && ju < 40 ? 0 : Math.min(4, Math.ceil(ju / 30)));
        var ju, su;
        if (Mu.current = !0, Pu(Zu).length > Pu(uu).length && Yu(Wu++), Eu > 0) {
          const uu = [];
          for (let ju = 0; ju < Eu; ju++) uu.push({
            id: Wu++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * ju
          });
          Du((Eu => [...Eu, ...uu]))
        }
        const Uu = Eu > 0 ? 600 : 0;
        Nu({
          id: Wu++,
          delayMs: Uu
        });
        const lu = performance.now() + Uu;
        let qu = 0;
        const Cu = Eu => {
          const ju = Xu.b.clamp((Eu - lu) / 600, 0, 1);
          bu(Math.round(uu + (Zu - uu) * ju)), ju < 1 && (qu = requestAnimationFrame(Cu))
        };
        return qu = requestAnimationFrame(Cu), () => {
          cancelAnimationFrame(qu)
        }
      }), [Zu, pu]);
      const du = function(uu) {
          var Eu;
          const ju = null !== (Eu = lu.find((Eu => uu < au(Eu)))) && void 0 !== Eu ? Eu : "Super";
          return {
            rarity: ju,
            progress: Xu.b.clamp(uu / au(ju), 0, 1)
          }
        }(Cu),
        ku = Pu(Cu).at(-1);
      return (0, Qu.jsxs)(Qu.Fragment, {
        children: [(0, Qu.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Qu.jsxs)("div", {
            className: wu()("LuckyCloverWallet", {
              Capped: ku && "Basic" !== ku
            }),
            style: ku && {
              "--luckyTierColour": iu[ku]
            },
            children: [(0, Qu.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${du.progress})`
              }
            }), Ou > 0 && (0, Qu.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Eu=null===cu||void 0===cu?void 0:cu.delayMs)&&void 0!==Eu?Eu:0}ms`
              }
            }, Ou), (0, Qu.jsx)("div", {
              ref: eu,
              className: wu()("LuckyCloverWalletIcon", cu && "Bounce"),
              style: {
                animationDelay: `${null!==(su=null===cu||void 0===cu?void 0:cu.delayMs)&&void 0!==su?su:0}ms`
              },
              children: (0, Qu.jsx)(Ku.d, {
                itemName: Ju,
                amount: 0
              })
            }, null !== (ju = null === cu || void 0 === cu ? void 0 : cu.id) && void 0 !== ju ? ju : 0), (0, Qu.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Cu
            }), ku && (0, Qu.jsx)(ru.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Gu.createPortal)(hu.map((uu => (0, Qu.jsx)(Fu, {
          flyer: uu,
          target: eu,
          onDone: () => {
            Du((Eu => Eu.filter((Eu => Eu.id !== uu.id))))
          }
        }, uu.id))), document.body)]
      })
    }

    function Fu(uu) {
      let {
        flyer: Eu,
        target: ju,
        onDone: su
      } = uu;
      const Zu = (0, Uu.useRef)(null);
      return (0, Uu.useEffect)((() => {
        var uu;
        const Uu = null === (uu = ju.current) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
        if (!Zu.current || !Uu) return void su();
        const {
          x: Xu,
          y: lu
        } = Eu, qu = Xu + 140 * (Math.random() - .5), fu = lu - 30 - 40 * Math.random(), Cu = Zu.current.animate([{
          transform: `translate(${Xu}px, ${lu}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${qu}px, ${fu}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Uu.left}px, ${Uu.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Eu.delayMs,
          fill: "backwards"
        });
        return Cu.onfinish = su, () => {
          Cu.cancel()
        }
      }), []), (0, Qu.jsx)("div", {
        ref: Zu,
        className: "LuckyCloverFlying",
        children: (0, Qu.jsx)(Ku.d, {
          itemName: Ju,
          amount: 0
        })
      })
    }
    var Bu = ju(24);
    const Lu = "luckyGearUpgradeView",
      tu = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function xu(uu) {
      var Eu;
      return null !== (Eu = tu[uu.split(" ")[0]]) && void 0 !== Eu ? Eu : "#e07bff"
    }
    class Tu {
      constructor(uu, Eu) {
        this.selectedSlot = uu, this.itemAt = Eu, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      NO(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [ju, su, Uu] of uu) this.rings.push({
          id: this.nextId++,
          slot: ju,
          colour: xu(Uu),
          until: Eu + 1200
        }), ju !== this.selectedSlot() && this.unseen.set(ju, {
          from: su,
          to: Uu
        });
        this.TY()
      }
      Tb() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Eu = this.rings.filter((Eu => Eu.until > uu));
        let ju = Eu.length !== this.rings.length;
        this.rings = Eu;
        for (const [su, {
            from: Uu,
            to: Zu
          }] of this.unseen) {
          const uu = this.itemAt(su);
          (su === this.selectedSlot() || uu !== Zu && uu !== Uu) && (this.unseen.delete(su), ju = !0)
        }
        ju && this.TY()
      }
      TY() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Bu.h.TY(Lu, this.view)
      }
    }
    var Hu = ju(1499);

    function Au(uu) {
      return document.querySelector(`.HotBar [data-inven-idx="${uu}"]`)
    }

    function nu(uu) {
      let {
        ring: Eu
      } = uu;
      const [ju, su] = (0, Uu.useState)(null);
      return (0, Uu.useLayoutEffect)((() => {
        var uu, ju;
        su(null !== (uu = null === (ju = Au(Eu.slot)) || void 0 === ju ? void 0 : ju.getBoundingClientRect()) && void 0 !== uu ? uu : null)
      }), [Eu]), ju ? (0, Qu.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: ju.left,
          top: ju.top,
          width: ju.width,
          height: ju.height,
          "--ringColour": Eu.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function yu(uu) {
      let {
        slot: Eu
      } = uu;
      const [ju, su] = (0, Uu.useState)(null);
      return (0, Uu.useLayoutEffect)((() => {
        const uu = () => {
          su(Au(Eu))
        };
        uu();
        const ju = new MutationObserver(uu),
          Uu = document.querySelector(".BottomMiddleElements");
        return Uu && ju.observe(Uu, {
          childList: !0,
          subtree: !0
        }), () => {
          ju.disconnect()
        }
      }), [Eu]), ju ? (0, Gu.createPortal)((0, Qu.jsx)("div", {
        className: "LuckyGearUnseen"
      }), ju) : null
    }

    function zu(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, Hu.g)(Lu, Eu.getView());
      return (0, Qu.jsxs)(Qu.Fragment, {
        children: [ju.rings.map((uu => (0, Qu.jsx)(nu, {
          ring: uu
        }, uu.id))), ju.unseenSlots.map((uu => (0, Qu.jsx)(yu, {
          slot: uu
        }, uu)))]
      })
    }
    const Ru = function(uu, Eu, ju, Xu) {
      let lu, {
          localPlayerId: qu
        } = Xu,
        fu = null;
      const Cu = new gu({
          itemAt: uu => lu.getItemSlot(qu, uu),
          selectedSlot: () => lu.getSelectedInventorySlotI(qu),
          swap: (uu, Eu) => {
            lu.swapInventorySlots(uu, Eu)
          }
        }),
        bu = new Tu((() => lu.getSelectedInventorySlotI(qu)), (uu => {
          var Eu;
          return null === (Eu = lu.getItemSlot(qu, uu)) || void 0 === Eu ? void 0 : Eu.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Zu.b)()
        },
        onCreate: uu => {
          lu = uu, fu = (0, eu.o)((0, Uu.createElement)(Uu.Fragment, null, (0, Uu.createElement)(Su), (0, Uu.createElement)(zu, {
            controller: bu
          })))
        },
        onClose: () => {
          var uu;
          null === (uu = fu) || void 0 === uu || uu()
        },
        Tb: () => {
          Cu.Tb(), bu.Tb()
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          "luckyGearUpgrade" === uu && bu.NO(Eu)
        },
        onPlayerChangeBlock: (uu, Eu, ju, su, Uu, Zu) => {
          "Air" !== Zu && Cu.onPlace(Zu)
        },
        onPlayerDropItem: (uu, Eu, ju, su) => {
          Cu.onDrop(Eu, su)
        },
        onPlayerAltAction: (uu, Eu, ju, Uu, Zu, Xu) => {
          if (!Xu || "Mesh" !== lu.getEntityType(Xu)) return;
          const qu = lu.getEntityName(Xu),
            fu = Object.values(su).find((uu => uu.name === qu));
          fu && lu.openShop(uu, !1, fu.shopTab)
        }
      }
    }
  },
  38413: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu
    });
    var su = ju(349),
      Uu = ju(37332),
      Zu = ju(4660);
    const Xu = ["Leaf Bed", "_Leaf Bed Head", ...su.Lc.flatMap((uu => [`${uu} Bed`, `_${uu} Bed Head`, `${uu} Strongbed`, `_${uu} Strongbed Head`]))];

    function lu() {
      let uu;
      return {
        onCreate(Eu) {
          uu = Eu
        },
        altVetoBlocks: Xu,
        onPlayerAttemptAltAction(Eu, ju, su, Xu, lu, qu) {
          var fu;
          if ((0, Uu.d)(uu.getMetaInfo(lu).rootName) && !uu.isEntityInteractable(qu) && (0, Zu.d)(null === (fu = uu.yEu(Eu)) || void 0 === fu ? void 0 : fu.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37332: (uu, Eu, ju) => {
    function su(uu) {
      return uu.includes("Leaf Bed")
    }

    function Uu(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !su(uu)
    }

    function Zu(uu) {
      return uu.includes(" Strongbed")
    }

    function Xu(uu) {
      return su(uu) || Uu(uu) || Zu(uu)
    }
    ju.d(Eu, {
      d: () => Xu,
      f: () => su,
      j: () => Zu,
      n: () => Uu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);