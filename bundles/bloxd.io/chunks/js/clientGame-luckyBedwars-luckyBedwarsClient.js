export const id = 19;
export const ids = [19];
export const modules = {
  36648: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => aq,
      h: () => Wq,
      j: () => Bq
    });
    var Yq = gq(9277),
      lq = gq(36657),
      Oq = gq(36662),
      mq = gq(8669),
      xq = gq(1416),
      Aq = gq(57),
      cq = gq(71),
      uq = gq(1070);

    function Bq() {
      var qq;
      return (0, xq.h)(lq.c, (0, lq.l)()), (0, uq.jsx)(uq.Fragment, {
        children: null === (qq = (0, lq.l)()) || void 0 === qq ? void 0 : qq.content
      })
    }

    function Wq(qq) {
      var Eq;
      let {
        show: gq
      } = qq;
      (0, xq.h)(lq.c, (0, lq.l)());
      const cq = null === (Eq = (0, lq.l)()) || void 0 === Eq ? void 0 : Eq.menu;
      return (0, Aq.useEffect)((() => {
        var qq;
        gq || (null === cq || void 0 === cq || null === (qq = cq.onClose) || void 0 === qq || qq.call(cq), (0, Oq.m)())
      }), [gq, cq]), (0, Aq.useEffect)((() => gq ? (0, mq.i)(Oq.r, Oq.d) : void 0), [gq]), (0, uq.jsx)(Yq.b, {
        showing: gq,
        globallyUniqueKey: "clientGameMenu",
        children: null === cq || void 0 === cq ? void 0 : cq.content
      })
    }

    function Nq(qq) {
      let {
        placement: Eq = "bottom"
      } = qq;
      return (0, uq.jsx)("div", {
        id: `clientGameHud-${Eq}`,
        style: {
          display: "contents"
        }
      })
    }

    function aq(qq) {
      let {
        children: Eq,
        placement: gq = "bottom"
      } = qq;
      const [Yq, lq] = (0, Aq.useState)(null);
      return (0, Aq.useEffect)((() => {
        lq(document.getElementById(`clientGameHud-${gq}`))
      }), [gq]), Yq ? (0, cq.createPortal)(Eq, Yq) : null
    }
  },
  9277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(4364),
      lq = gq(4367);

    function Oq(qq) {
      let {
        children: Eq,
        showing: gq,
        globallyUniqueKey: Oq,
        alwaysMountChildren: mq = !1,
        doGameplayStartStopOnShow: xq = !0,
        keepsMovement: Aq = !1
      } = qq;
      return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
    }
  },
  8669: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => lq
    });
    let Yq = null;
    const lq = function(qq) {
        const Eq = {
          cycle: qq,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Yq = Eq, () => {
          Yq === Eq && (Yq = null)
        }
      },
      Oq = () => {
        var qq;
        return null !== (qq = Yq) && void 0 !== qq && qq.canCycle() ? Yq.cycle : null
      }
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  39359: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Dq
    });
    const Yq = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var lq = gq(57),
      Oq = gq(38011),
      mq = gq(307);
    const xq = ["Basic", "Rare", "Super"];

    function Aq(qq, Eq) {
      return `${"Basic"===Eq?"":`${Eq} `}${"Simple"===qq?"":`${qq} `}Lucky Block`
    }
    const cq = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((qq => xq.map((Eq => [Aq(qq, Eq), {
      category: qq,
      rarity: Eq
    }])))));
    cq.keys();

    function uq(qq) {
      return cq.get(qq)
    }
    const Bq = "Obsidian",
      Wq = ["Cobweb"],
      Nq = [...["Red", "Blue", "Green", "Yellow"].map((qq => `${(0,mq.eb)(qq)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Bq, ...Wq];

    function aq(qq) {
      return Nq.includes(qq)
    }
    var Vq = gq(598);

    function dq(qq, Eq) {
      const gq = uq(qq);
      if (gq) {
        const qq = uq(Eq);
        if (!qq) return;
        const Yq = xq.length - 1 - xq.indexOf(qq.rarity);
        return (qq.category === gq.category ? 0 : 1) * xq.length + Yq
      }
      if (!aq(qq)) return;
      if (Eq === qq) return 0;
      const Yq = qq => aq(qq) && !Wq.includes(qq) && qq !== Bq;
      return Yq(qq) && Yq(Eq) ? 1 : void 0
    }
    const jq = [...Array.from({
      length: Vq.s - Vq.o
    }, ((qq, Eq) => Vq.o + Eq)), ...Array.from({
      length: Vq.o
    }, ((qq, Eq) => Eq))];
    class Hq {
      constructor(qq) {
        this.inventory = qq, this.pending = new Map
      }
      onPlace(qq) {
        var Eq;
        const gq = this.inventory.selectedSlot(),
          Yq = this.inventory.itemAt(gq);
        (null === Yq || void 0 === Yq ? void 0 : Yq.name) === qq && (null !== (Eq = Yq.amount) && void 0 !== Eq ? Eq : 1) <= 1 && oq(qq) && this.pending.set(gq, qq)
      }
      onDrop(qq, Eq) {
        Eq < Vq.o && null === this.inventory.itemAt(Eq) && oq(qq) && this.refill(Eq, qq)
      }
      SB() {
        const qq = [...this.pending];
        this.pending.clear();
        for (const [Eq, gq] of qq) null === this.inventory.itemAt(Eq) && this.refill(Eq, gq)
      }
      refill(qq, Eq) {
        const gq = function(qq, Eq, gq, Yq) {
          let lq, Oq = 1 / 0;
          for (const mq of jq) {
            if (mq === Eq) continue;
            const xq = Yq(mq);
            if (!xq || mq < Vq.o && Eq !== gq) continue;
            const Aq = dq(qq, xq.name);
            void 0 !== Aq && Aq < Oq && (lq = mq, Oq = Aq)
          }
          return lq
        }(Eq, qq, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== gq && this.inventory.swap(qq, gq)
      }
    }

    function oq(qq) {
      return !!uq(qq) || aq(qq)
    }
    var Pq = gq(36657),
      Qq = gq(71),
      yq = gq(1018),
      tq = gq.n(yq);
    const rq = "Lucky Clover",
      vq = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function hq(qq) {
      return vq[qq][0]
    }

    function nq(qq) {
      return xq.filter((Eq => qq >= hq(Eq)))
    }
    var bq = gq(296),
      iq = gq(2383),
      Zq = gq(24),
      fq = gq(2501),
      Mq = gq(1895),
      Tq = gq(36648),
      zq = gq(1025);
    var Sq = gq(1070);
    const pq = {
      Basic: mq.M.whiteUiText,
      Rare: mq.M.goldUiText,
      Super: mq.M.cyanUiText
    };
    let Gq = 1;

    function Lq() {
      const qq = (0, iq.h)("currencyAmounts"),
        Eq = null === qq || void 0 === qq ? void 0 : qq.Clovers;
      return !Eq || Eq.hidden ? null : (0, Sq.jsx)(Tq.g, {
        children: (0, Sq.jsx)(Jq, {
          amount: Eq.amount
        })
      })
    }

    function Jq(qq) {
      var Eq, gq, Yq;
      let {
        amount: Oq
      } = qq;
      const {
        openEverythingMenuName: Aq
      } = (0, Zq.j)(["openEverythingMenuName"]), cq = (0, fq.d)(), [uq, Bq] = (0, lq.useState)(Oq), [Wq, Nq] = (0, lq.useState)(null), [aq, Vq] = (0, lq.useState)(0), [dq, jq] = (0, lq.useState)([]), Hq = (0, lq.useRef)(Oq), oq = (0, lq.useRef)(!1), Pq = (0, lq.useRef)(null), yq = Aq === bq.p.SHOP;
      (0, lq.useEffect)((() => {
        const qq = Hq.current;
        if (Hq.current = Oq, Oq <= qq || yq) return void Bq(Oq);
        const Eq = cq || dq.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (gq = Oq - qq, Yq = !oq.current, gq <= 0 || !Yq && gq < 40 ? 0 : Math.min(4, Math.ceil(gq / 30)));
        var gq, Yq;
        if (oq.current = !0, nq(Oq).length > nq(qq).length && Vq(Gq++), Eq > 0) {
          const qq = [];
          for (let gq = 0; gq < Eq; gq++) qq.push({
            id: Gq++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * gq
          });
          jq((Eq => [...Eq, ...qq]))
        }
        const lq = Eq > 0 ? 600 : 0;
        Nq({
          id: Gq++,
          delayMs: lq
        });
        const xq = performance.now() + lq;
        let Aq = 0;
        const uq = Eq => {
          const gq = mq.c.clamp((Eq - xq) / 600, 0, 1);
          Bq(Math.round(qq + (Oq - qq) * gq)), gq < 1 && (Aq = requestAnimationFrame(uq))
        };
        return Aq = requestAnimationFrame(uq), () => {
          cancelAnimationFrame(Aq)
        }
      }), [Oq, yq]);
      const vq = function(qq) {
          var Eq;
          const gq = null !== (Eq = xq.find((Eq => qq < hq(Eq)))) && void 0 !== Eq ? Eq : "Super";
          return {
            rarity: gq,
            progress: mq.c.clamp(qq / hq(gq), 0, 1)
          }
        }(uq),
        iq = nq(uq).at(-1);
      return (0, Sq.jsxs)(Sq.Fragment, {
        children: [(0, Sq.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Sq.jsxs)("div", {
            className: tq()("LuckyCloverWallet", {
              Capped: iq && "Basic" !== iq
            }),
            style: iq && {
              "--luckyTierColour": pq[iq]
            },
            children: [(0, Sq.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${vq.progress})`
              }
            }), aq > 0 && (0, Sq.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Eq=null===Wq||void 0===Wq?void 0:Wq.delayMs)&&void 0!==Eq?Eq:0}ms`
              }
            }, aq), (0, Sq.jsx)("div", {
              ref: Pq,
              className: tq()("LuckyCloverWalletIcon", Wq && "Bounce"),
              style: {
                animationDelay: `${null!==(Yq=null===Wq||void 0===Wq?void 0:Wq.delayMs)&&void 0!==Yq?Yq:0}ms`
              },
              children: (0, Sq.jsx)(Mq.e, {
                itemName: rq,
                amount: 0
              })
            }, null !== (gq = null === Wq || void 0 === Wq ? void 0 : Wq.id) && void 0 !== gq ? gq : 0), (0, Sq.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: uq
            }), iq && (0, Sq.jsx)(zq.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Qq.createPortal)(dq.map((qq => (0, Sq.jsx)(kq, {
          flyer: qq,
          target: Pq,
          onDone: () => {
            jq((Eq => Eq.filter((Eq => Eq.id !== qq.id))))
          }
        }, qq.id))), document.body)]
      })
    }

    function kq(qq) {
      let {
        flyer: Eq,
        target: gq,
        onDone: Yq
      } = qq;
      const Oq = (0, lq.useRef)(null);
      return (0, lq.useEffect)((() => {
        var qq;
        const lq = null === (qq = gq.current) || void 0 === qq ? void 0 : qq.getBoundingClientRect();
        if (!Oq.current || !lq) return void Yq();
        const {
          x: mq,
          y: xq
        } = Eq, Aq = mq + 140 * (Math.random() - .5), cq = xq - 30 - 40 * Math.random(), uq = Oq.current.animate([{
          transform: `translate(${mq}px, ${xq}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Aq}px, ${cq}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${lq.left}px, ${lq.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Eq.delayMs,
          fill: "backwards"
        });
        return uq.onfinish = Yq, () => {
          uq.cancel()
        }
      }), []), (0, Sq.jsx)("div", {
        ref: Oq,
        className: "LuckyCloverFlying",
        children: (0, Sq.jsx)(Mq.e, {
          itemName: rq,
          amount: 0
        })
      })
    }
    var Rq = gq(31);
    const Uq = "luckyGearUpgradeView",
      Fq = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function sq(qq) {
      var Eq;
      return null !== (Eq = Fq[qq.split(" ")[0]]) && void 0 !== Eq ? Eq : "#e07bff"
    }
    class Xq {
      constructor(qq, Eq) {
        this.selectedSlot = qq, this.itemAt = Eq, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      ga(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [gq, Yq, lq] of qq) this.rings.push({
          id: this.nextId++,
          slot: gq,
          colour: sq(lq),
          until: Eq + 1200
        }), gq !== this.selectedSlot() && this.unseen.set(gq, {
          from: Yq,
          to: lq
        });
        this.TV()
      }
      SB() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Eq = this.rings.filter((Eq => Eq.until > qq));
        let gq = Eq.length !== this.rings.length;
        this.rings = Eq;
        for (const [Yq, {
            from: lq,
            to: Oq
          }] of this.unseen) {
          const qq = this.itemAt(Yq);
          (Yq === this.selectedSlot() || qq !== Oq && qq !== lq) && (this.unseen.delete(Yq), gq = !0)
        }
        gq && this.TV()
      }
      TV() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Rq.i.TV(Uq, this.view)
      }
    }
    var wq = gq(1416);

    function Kq(qq) {
      return document.querySelector(`.HotBar [data-inven-idx="${qq}"]`)
    }

    function Cq(qq) {
      let {
        ring: Eq
      } = qq;
      const [gq, Yq] = (0, lq.useState)(null);
      return (0, lq.useLayoutEffect)((() => {
        var qq, gq;
        Yq(null !== (qq = null === (gq = Kq(Eq.slot)) || void 0 === gq ? void 0 : gq.getBoundingClientRect()) && void 0 !== qq ? qq : null)
      }), [Eq]), gq ? (0, Sq.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: gq.left,
          top: gq.top,
          width: gq.width,
          height: gq.height,
          "--ringColour": Eq.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Iq(qq) {
      let {
        slot: Eq
      } = qq;
      const [gq, Yq] = (0, lq.useState)(null);
      return (0, lq.useLayoutEffect)((() => {
        const qq = () => {
          Yq(Kq(Eq))
        };
        qq();
        const gq = new MutationObserver(qq),
          lq = document.querySelector(".BottomMiddleElements");
        return lq && gq.observe(lq, {
          childList: !0,
          subtree: !0
        }), () => {
          gq.disconnect()
        }
      }), [Eq]), gq ? (0, Qq.createPortal)((0, Sq.jsx)("div", {
        className: "LuckyGearUnseen"
      }), gq) : null
    }

    function eq(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, wq.h)(Uq, Eq.getView());
      return (0, Sq.jsxs)(Sq.Fragment, {
        children: [gq.rings.map((qq => (0, Sq.jsx)(Cq, {
          ring: qq
        }, qq.id))), gq.unseenSlots.map((qq => (0, Sq.jsx)(Iq, {
          slot: qq
        }, qq)))]
      })
    }
    const Dq = function(qq, Eq, gq, mq) {
      let xq, {
          localPlayerId: Aq
        } = mq,
        cq = null;
      const uq = new Hq({
          itemAt: qq => xq.getItemSlot(Aq, qq),
          selectedSlot: () => xq.getSelectedInventorySlotI(Aq),
          swap: (qq, Eq) => {
            xq.swapInventorySlots(qq, Eq)
          }
        }),
        Bq = new Xq((() => xq.getSelectedInventorySlotI(Aq)), (qq => {
          var Eq;
          return null === (Eq = xq.getItemSlot(Aq, qq)) || void 0 === Eq ? void 0 : Eq.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Oq.b)()
        },
        onCreate: qq => {
          xq = qq, cq = (0, Pq.r)((0, lq.createElement)(lq.Fragment, null, (0, lq.createElement)(Lq), (0, lq.createElement)(eq, {
            controller: Bq
          })))
        },
        onClose: () => {
          var qq;
          null === (qq = cq) || void 0 === qq || qq()
        },
        SB: () => {
          uq.SB(), Bq.SB()
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          "luckyGearUpgrade" === qq && Bq.ga(Eq)
        },
        onPlayerChangeBlock: (qq, Eq, gq, Yq, lq, Oq) => {
          "Air" !== Oq && uq.onPlace(Oq)
        },
        onPlayerDropItem: (qq, Eq, gq, Yq) => {
          uq.onDrop(Eq, Yq)
        },
        onPlayerAltAction: (qq, Eq, gq, lq, Oq, mq) => {
          if (!mq || "Mesh" !== xq.getEntityType(mq)) return;
          const Aq = xq.getEntityName(mq),
            cq = Object.values(Yq).find((qq => qq.name === Aq));
          cq && xq.openShop(qq, !1, cq.shopTab)
        }
      }
    }
  },
  38011: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq
    });
    var Yq = gq(307),
      lq = gq(36985),
      Oq = gq(4299);
    const mq = ["Leaf Bed", "_Leaf Bed Head", ...Yq.Tc.flatMap((qq => [`${qq} Bed`, `_${qq} Bed Head`, `${qq} Strongbed`, `_${qq} Strongbed Head`]))];

    function xq() {
      let qq;
      return {
        onCreate(Eq) {
          qq = Eq
        },
        altVetoBlocks: mq,
        onPlayerAttemptAltAction(Eq, gq, Yq, mq, xq, Aq) {
          var cq;
          if ((0, lq.b)(qq.getMetaInfo(xq).rootName) && !qq.isEntityInteractable(Aq) && (0, Oq.g)(null === (cq = qq.Ngq(Eq)) || void 0 === cq ? void 0 : cq.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36985: (qq, Eq, gq) => {
    function Yq(qq) {
      return qq.includes("Leaf Bed")
    }

    function lq(qq) {
      return / Bed(?: Head)?(?:\||$)/.test(qq) && !Yq(qq)
    }

    function Oq(qq) {
      return qq.includes(" Strongbed")
    }

    function mq(qq) {
      return Yq(qq) || lq(qq) || Oq(qq)
    }
    gq.d(Eq, {
      b: () => mq,
      c: () => Yq,
      d: () => Oq,
      f: () => lq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);