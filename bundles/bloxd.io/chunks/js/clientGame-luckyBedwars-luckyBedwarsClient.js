export const id = 19;
export const ids = [19];
export const modules = {
  36436: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => xu,
      d: () => Su,
      g: () => Bu,
      h: () => ru
    });
    var Eu = yu(9048),
      Ku = yu(36445),
      Qu = yu(36449),
      mu = yu(8447),
      Ju = yu(1400),
      Nu = yu(64),
      Xu = yu(80),
      Vu = yu(1079);

    function ru() {
      var uu;
      return (0, Ju.h)(Ku.c, (0, Ku.o)()), (0, Vu.jsx)(Vu.Fragment, {
        children: null === (uu = (0, Ku.o)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function Bu(uu) {
      var Ru;
      let {
        show: yu
      } = uu;
      (0, Ju.h)(Ku.c, (0, Ku.o)());
      const Xu = null === (Ru = (0, Ku.o)()) || void 0 === Ru ? void 0 : Ru.menu;
      return (0, Nu.useEffect)((() => {
        var uu;
        yu || (null === Xu || void 0 === Xu || null === (uu = Xu.onClose) || void 0 === uu || uu.call(Xu), (0, Qu.p)())
      }), [yu, Xu]), (0, Nu.useEffect)((() => yu ? (0, mu.g)(Qu.v, Qu.d) : void 0), [yu]), (0, Vu.jsx)(Eu.c, {
        showing: yu,
        globallyUniqueKey: "clientGameMenu",
        children: null === Xu || void 0 === Xu ? void 0 : Xu.content
      })
    }

    function xu(uu) {
      let {
        placement: Ru = "bottom"
      } = uu;
      return (0, Vu.jsx)("div", {
        id: `clientGameHud-${Ru}`,
        style: {
          display: "contents"
        }
      })
    }

    function Su(uu) {
      let {
        children: Ru,
        placement: yu = "bottom"
      } = uu;
      const [Eu, Ku] = (0, Nu.useState)(null);
      return (0, Nu.useEffect)((() => {
        Ku(document.getElementById(`clientGameHud-${yu}`))
      }), [yu]), Eu ? (0, Xu.createPortal)(Ru, Eu) : null
    }
  },
  9048: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(4307),
      Ku = yu(4314);

    function Qu(uu) {
      let {
        children: Ru,
        showing: yu,
        globallyUniqueKey: Qu,
        alwaysMountChildren: mu = !1,
        doGameplayStartStopOnShow: Ju = !0,
        keepsMovement: Nu = !1
      } = uu;
      return (0, Ku.c)(!0, yu, Qu, Nu), (0, Eu.e)(Ju, yu), yu || mu ? Ru : null
    }
  },
  8447: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    let Eu = null;
    const Ku = function(uu) {
        const Ru = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Eu = Ru, () => {
          Eu === Ru && (Eu = null)
        }
      },
      Qu = () => {
        var uu;
        return null !== (uu = Eu) && void 0 !== uu && uu.canCycle() ? Eu.cycle : null
      }
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  39156: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => fu
    });
    const Eu = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Ku = yu(64),
      Qu = yu(37784),
      mu = yu(343);
    const Ju = ["Basic", "Rare", "Super"];

    function Nu(uu, Ru) {
      return `${"Basic"===Ru?"":`${Ru} `}${"Simple"===uu?"":`${uu} `}Lucky Block`
    }
    const Xu = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((uu => Ju.map((Ru => [Nu(uu, Ru), {
      category: uu,
      rarity: Ru
    }])))));
    Xu.keys();

    function Vu(uu) {
      return Xu.get(uu)
    }
    const ru = "Obsidian",
      Bu = ["Cobweb"],
      xu = [...["Red", "Blue", "Green", "Yellow"].map((uu => `${(0,mu.$)(uu)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", ru, ...Bu];

    function Su(uu) {
      return xu.includes(uu)
    }
    var pu = yu(610);

    function Tu(uu, Ru) {
      const yu = Vu(uu);
      if (yu) {
        const uu = Vu(Ru);
        if (!uu) return;
        const Eu = Ju.length - 1 - Ju.indexOf(uu.rarity);
        return (uu.category === yu.category ? 0 : 1) * Ju.length + Eu
      }
      if (!Su(uu)) return;
      if (Ru === uu) return 0;
      const Eu = uu => Su(uu) && !Bu.includes(uu) && uu !== ru;
      return Eu(uu) && Eu(Ru) ? 1 : void 0
    }
    const Wu = [...Array.from({
      length: pu.q - pu.n
    }, ((uu, Ru) => pu.n + Ru)), ...Array.from({
      length: pu.n
    }, ((uu, Ru) => Ru))];
    class ju {
      constructor(uu) {
        this.inventory = uu, this.pending = new Map
      }
      onPlace(uu) {
        var Ru;
        const yu = this.inventory.selectedSlot(),
          Eu = this.inventory.itemAt(yu);
        (null === Eu || void 0 === Eu ? void 0 : Eu.name) === uu && (null !== (Ru = Eu.amount) && void 0 !== Ru ? Ru : 1) <= 1 && Hu(uu) && this.pending.set(yu, uu)
      }
      onDrop(uu, Ru) {
        Ru < pu.n && null === this.inventory.itemAt(Ru) && Hu(uu) && this.refill(Ru, uu)
      }
      sr() {
        const uu = [...this.pending];
        this.pending.clear();
        for (const [Ru, yu] of uu) null === this.inventory.itemAt(Ru) && this.refill(Ru, yu)
      }
      refill(uu, Ru) {
        const yu = function(uu, Ru, yu, Eu) {
          let Ku, Qu = 1 / 0;
          for (const mu of Wu) {
            if (mu === Ru) continue;
            const Ju = Eu(mu);
            if (!Ju || mu < pu.n && Ru !== yu) continue;
            const Nu = Tu(uu, Ju.name);
            void 0 !== Nu && Nu < Qu && (Ku = mu, Qu = Nu)
          }
          return Ku
        }(Ru, uu, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== yu && this.inventory.swap(uu, yu)
      }
    }

    function Hu(uu) {
      return !!Vu(uu) || Su(uu)
    }
    var du = yu(36445),
      bu = yu(80),
      Cu = yu(1035),
      ku = yu.n(Cu);
    const eu = "Lucky Clover",
      Au = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Du(uu) {
      return Au[uu][0]
    }

    function Mu(uu) {
      return Ju.filter((Ru => uu >= Du(Ru)))
    }
    var Iu = yu(330),
      Gu = yu(2335),
      Uu = yu(27),
      nu = yu(2435),
      su = yu(1841),
      tu = yu(36436),
      lu = yu(1043);
    var gu = yu(1079);
    const cu = {
      Basic: mu.L.whiteUiText,
      Rare: mu.L.goldUiText,
      Super: mu.L.cyanUiText
    };
    let Lu = 1;

    function zu() {
      const uu = (0, Gu.g)("currencyAmounts"),
        Ru = null === uu || void 0 === uu ? void 0 : uu.Clovers;
      return !Ru || Ru.hidden ? null : (0, gu.jsx)(tu.d, {
        children: (0, gu.jsx)(Fu, {
          amount: Ru.amount
        })
      })
    }

    function Fu(uu) {
      var Ru, yu, Eu;
      let {
        amount: Qu
      } = uu;
      const {
        openEverythingMenuName: Nu
      } = (0, Uu.j)(["openEverythingMenuName"]), Xu = (0, nu.e)(), [Vu, ru] = (0, Ku.useState)(Qu), [Bu, xu] = (0, Ku.useState)(null), [Su, pu] = (0, Ku.useState)(0), [Tu, Wu] = (0, Ku.useState)([]), ju = (0, Ku.useRef)(Qu), Hu = (0, Ku.useRef)(!1), du = (0, Ku.useRef)(null), Cu = Nu === Iu.s.SHOP;
      (0, Ku.useEffect)((() => {
        const uu = ju.current;
        if (ju.current = Qu, Qu <= uu || Cu) return void ru(Qu);
        const Ru = Xu || Tu.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (yu = Qu - uu, Eu = !Hu.current, yu <= 0 || !Eu && yu < 40 ? 0 : Math.min(4, Math.ceil(yu / 30)));
        var yu, Eu;
        if (Hu.current = !0, Mu(Qu).length > Mu(uu).length && pu(Lu++), Ru > 0) {
          const uu = [];
          for (let yu = 0; yu < Ru; yu++) uu.push({
            id: Lu++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * yu
          });
          Wu((Ru => [...Ru, ...uu]))
        }
        const Ku = Ru > 0 ? 600 : 0;
        xu({
          id: Lu++,
          delayMs: Ku
        });
        const Ju = performance.now() + Ku;
        let Nu = 0;
        const Vu = Ru => {
          const yu = mu.c.clamp((Ru - Ju) / 600, 0, 1);
          ru(Math.round(uu + (Qu - uu) * yu)), yu < 1 && (Nu = requestAnimationFrame(Vu))
        };
        return Nu = requestAnimationFrame(Vu), () => {
          cancelAnimationFrame(Nu)
        }
      }), [Qu, Cu]);
      const Au = function(uu) {
          var Ru;
          const yu = null !== (Ru = Ju.find((Ru => uu < Du(Ru)))) && void 0 !== Ru ? Ru : "Super";
          return {
            rarity: yu,
            progress: mu.c.clamp(uu / Du(yu), 0, 1)
          }
        }(Vu),
        Gu = Mu(Vu).at(-1);
      return (0, gu.jsxs)(gu.Fragment, {
        children: [(0, gu.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, gu.jsxs)("div", {
            className: ku()("LuckyCloverWallet", {
              Capped: Gu && "Basic" !== Gu
            }),
            style: Gu && {
              "--luckyTierColour": cu[Gu]
            },
            children: [(0, gu.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Au.progress})`
              }
            }), Su > 0 && (0, gu.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Ru=null===Bu||void 0===Bu?void 0:Bu.delayMs)&&void 0!==Ru?Ru:0}ms`
              }
            }, Su), (0, gu.jsx)("div", {
              ref: du,
              className: ku()("LuckyCloverWalletIcon", Bu && "Bounce"),
              style: {
                animationDelay: `${null!==(Eu=null===Bu||void 0===Bu?void 0:Bu.delayMs)&&void 0!==Eu?Eu:0}ms`
              },
              children: (0, gu.jsx)(su.c, {
                itemName: eu,
                amount: 0
              })
            }, null !== (yu = null === Bu || void 0 === Bu ? void 0 : Bu.id) && void 0 !== yu ? yu : 0), (0, gu.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Vu
            }), Gu && (0, gu.jsx)(lu.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, bu.createPortal)(Tu.map((uu => (0, gu.jsx)(wu, {
          flyer: uu,
          target: du,
          onDone: () => {
            Wu((Ru => Ru.filter((Ru => Ru.id !== uu.id))))
          }
        }, uu.id))), document.body)]
      })
    }

    function wu(uu) {
      let {
        flyer: Ru,
        target: yu,
        onDone: Eu
      } = uu;
      const Qu = (0, Ku.useRef)(null);
      return (0, Ku.useEffect)((() => {
        var uu;
        const Ku = null === (uu = yu.current) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
        if (!Qu.current || !Ku) return void Eu();
        const {
          x: mu,
          y: Ju
        } = Ru, Nu = mu + 140 * (Math.random() - .5), Xu = Ju - 30 - 40 * Math.random(), Vu = Qu.current.animate([{
          transform: `translate(${mu}px, ${Ju}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Nu}px, ${Xu}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Ku.left}px, ${Ku.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Ru.delayMs,
          fill: "backwards"
        });
        return Vu.onfinish = Eu, () => {
          Vu.cancel()
        }
      }), []), (0, gu.jsx)("div", {
        ref: Qu,
        className: "LuckyCloverFlying",
        children: (0, gu.jsx)(su.c, {
          itemName: eu,
          amount: 0
        })
      })
    }
    var Zu = yu(34);
    const hu = "luckyGearUpgradeView",
      Pu = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function iu(uu) {
      var Ru;
      return null !== (Ru = Pu[uu.split(" ")[0]]) && void 0 !== Ru ? Ru : "#e07bff"
    }
    class Yu {
      constructor(uu, Ru) {
        this.selectedSlot = uu, this.itemAt = Ru, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      SS(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [yu, Eu, Ku] of uu) this.rings.push({
          id: this.nextId++,
          slot: yu,
          colour: iu(Ku),
          until: Ru + 1200
        }), yu !== this.selectedSlot() && this.unseen.set(yu, {
          from: Eu,
          to: Ku
        });
        this.Op()
      }
      sr() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Ru = this.rings.filter((Ru => Ru.until > uu));
        let yu = Ru.length !== this.rings.length;
        this.rings = Ru;
        for (const [Eu, {
            from: Ku,
            to: Qu
          }] of this.unseen) {
          const uu = this.itemAt(Eu);
          (Eu === this.selectedSlot() || uu !== Qu && uu !== Ku) && (this.unseen.delete(Eu), yu = !0)
        }
        yu && this.Op()
      }
      Op() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Zu.k.Op(hu, this.view)
      }
    }
    var ou = yu(1400);

    function qu(uu) {
      return document.querySelector(`.HotBar [data-inven-idx="${uu}"]`)
    }

    function Ou(uu) {
      let {
        ring: Ru
      } = uu;
      const [yu, Eu] = (0, Ku.useState)(null);
      return (0, Ku.useLayoutEffect)((() => {
        var uu, yu;
        Eu(null !== (uu = null === (yu = qu(Ru.slot)) || void 0 === yu ? void 0 : yu.getBoundingClientRect()) && void 0 !== uu ? uu : null)
      }), [Ru]), yu ? (0, gu.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: yu.left,
          top: yu.top,
          width: yu.width,
          height: yu.height,
          "--ringColour": Ru.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function vu(uu) {
      let {
        slot: Ru
      } = uu;
      const [yu, Eu] = (0, Ku.useState)(null);
      return (0, Ku.useLayoutEffect)((() => {
        const uu = () => {
          Eu(qu(Ru))
        };
        uu();
        const yu = new MutationObserver(uu),
          Ku = document.querySelector(".BottomMiddleElements");
        return Ku && yu.observe(Ku, {
          childList: !0,
          subtree: !0
        }), () => {
          yu.disconnect()
        }
      }), [Ru]), yu ? (0, bu.createPortal)((0, gu.jsx)("div", {
        className: "LuckyGearUnseen"
      }), yu) : null
    }

    function au(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, ou.h)(hu, Ru.getView());
      return (0, gu.jsxs)(gu.Fragment, {
        children: [yu.rings.map((uu => (0, gu.jsx)(Ou, {
          ring: uu
        }, uu.id))), yu.unseenSlots.map((uu => (0, gu.jsx)(vu, {
          slot: uu
        }, uu)))]
      })
    }
    const fu = function(uu, Ru, yu, mu) {
      let Ju, {
          localPlayerId: Nu
        } = mu,
        Xu = null;
      const Vu = new ju({
          itemAt: uu => Ju.getItemSlot(Nu, uu),
          selectedSlot: () => Ju.getSelectedInventorySlotI(Nu),
          swap: (uu, Ru) => {
            Ju.swapInventorySlots(uu, Ru)
          }
        }),
        ru = new Yu((() => Ju.getSelectedInventorySlotI(Nu)), (uu => {
          var Ru;
          return null === (Ru = Ju.getItemSlot(Nu, uu)) || void 0 === Ru ? void 0 : Ru.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Qu.c)()
        },
        onCreate: uu => {
          Ju = uu, Xu = (0, du.w)((0, Ku.createElement)(Ku.Fragment, null, (0, Ku.createElement)(zu), (0, Ku.createElement)(au, {
            controller: ru
          })))
        },
        onClose: () => {
          var uu;
          null === (uu = Xu) || void 0 === uu || uu()
        },
        sr: () => {
          Vu.sr(), ru.sr()
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          "luckyGearUpgrade" === uu && ru.SS(Ru)
        },
        onPlayerChangeBlock: (uu, Ru, yu, Eu, Ku, Qu) => {
          "Air" !== Qu && Vu.onPlace(Qu)
        },
        onPlayerDropItem: (uu, Ru, yu, Eu) => {
          Vu.onDrop(Ru, Eu)
        },
        onPlayerAltAction: (uu, Ru, yu, Ku, Qu, mu) => {
          if (!mu || "Mesh" !== Ju.getEntityType(mu)) return;
          const Nu = Ju.getEntityName(mu),
            Xu = Object.values(Eu).find((uu => uu.name === Nu));
          Xu && Ju.openShop(uu, !1, Xu.shopTab)
        }
      }
    }
  },
  37784: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    var Eu = yu(343),
      Ku = yu(36707),
      Qu = yu(4239);
    const mu = ["Leaf Bed", "_Leaf Bed Head", ...Eu.Tc.flatMap((uu => [`${uu} Bed`, `_${uu} Bed Head`, `${uu} Strongbed`, `_${uu} Strongbed Head`]))];

    function Ju() {
      let uu;
      return {
        onCreate(Ru) {
          uu = Ru
        },
        altVetoBlocks: mu,
        onPlayerAttemptAltAction(Ru, yu, Eu, mu, Ju, Nu) {
          var Xu;
          if ((0, Ku.b)(uu.getMetaInfo(Ju).rootName) && !uu.isEntityInteractable(Nu) && (0, Qu.e)(null === (Xu = uu.Xyu(Ru)) || void 0 === Xu ? void 0 : Xu.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36707: (uu, Ru, yu) => {
    function Eu(uu) {
      return uu.includes("Leaf Bed")
    }

    function Ku(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !Eu(uu)
    }

    function Qu(uu) {
      return uu.includes(" Strongbed")
    }

    function mu(uu) {
      return Eu(uu) || Ku(uu) || Qu(uu)
    }
    yu.d(Ru, {
      b: () => mu,
      d: () => Eu,
      e: () => Qu,
      f: () => Ku
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);