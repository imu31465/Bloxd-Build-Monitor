export const id = 22;
export const ids = [22];
export const modules = {
  37898: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      d: () => Bb,
      e: () => Ub,
      g: () => Ob
    });
    var eb = Mb(35320),
      Hb = Mb(3531),
      pb = Mb(3538),
      Vb = Mb(10064),
      gb = Mb(1611),
      lb = Mb(64),
      Lb = Mb(81),
      Ib = Mb(1364);

    function Ob() {
      var bb;
      return (0, gb.h)(Hb.e, (0, Hb.x)()), (0, Ib.jsx)(Ib.Fragment, {
        children: null === (bb = (0, Hb.x)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Ub(bb) {
      var wb;
      let {
        show: Mb
      } = bb;
      (0, gb.h)(Hb.e, (0, Hb.x)());
      const Lb = null === (wb = (0, Hb.x)()) || void 0 === wb ? void 0 : wb.menu;
      return (0, lb.useEffect)((() => {
        var bb;
        Mb || (null === Lb || void 0 === Lb || null === (bb = Lb.onClose) || void 0 === bb || bb.call(Lb), (0, pb.l)())
      }), [Mb, Lb]), (0, lb.useEffect)((() => Mb ? (0, Vb.g)(pb.u, pb.g) : void 0), [Mb]), (0, Ib.jsx)(eb.c, {
        showing: Mb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Lb || void 0 === Lb ? void 0 : Lb.content
      })
    }
    const tb = new Map,
      Cb = new Set;

    function Eb(bb, wb) {
      wb ? tb.set(bb, wb) : tb.delete(bb);
      for (const Mb of Cb) Mb()
    }

    function Fb(bb) {
      let {
        placement: wb = "bottom"
      } = bb;
      const Mb = (0, lb.useRef)(null);
      return (0, lb.useLayoutEffect)((() => {
        const bb = Mb.current;
        return Eb(wb, bb), () => {
          tb.get(wb) === bb && Eb(wb, null)
        }
      }), [wb]), (0, Ib.jsx)("div", {
        ref: Mb,
        id: `clientGameHud-${wb}`,
        style: {
          display: "contents"
        }
      })
    }

    function Bb(bb) {
      let {
        children: wb,
        placement: Mb = "bottom"
      } = bb;
      const [eb, Hb] = (0, lb.useState)((() => {
        var bb;
        return null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null
      }));
      return (0, lb.useEffect)((() => {
        const bb = () => {
          var bb;
          Hb(null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null)
        };
        return Cb.add(bb), bb(), () => {
          Cb.delete(bb)
        }
      }), [Mb]), eb ? (0, Lb.createPortal)(wb, eb) : null
    }
  },
  35320: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(5387),
      Hb = Mb(5395);

    function pb(bb) {
      let {
        children: wb,
        showing: Mb,
        globallyUniqueKey: pb,
        alwaysMountChildren: Vb = !1,
        doGameplayStartStopOnShow: gb = !0,
        keepsMovement: lb = !1
      } = bb;
      return (0, Hb.d)(!0, Mb, pb, lb), (0, eb.b)(gb, Mb), Mb || Vb ? wb : null
    }
  },
  10064: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Hb
    });
    let eb = null;
    const Hb = function(bb) {
        const wb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return eb = wb, () => {
          eb === wb && (eb = null)
        }
      },
      pb = () => {
        var bb;
        return null !== (bb = eb) && void 0 !== bb && bb.canCycle() ? eb.cycle : null
      }
  },
  40897: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => kb
    });
    const eb = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Hb = Mb(64),
      pb = Mb(39270),
      Vb = Mb(382);
    const gb = ["Basic", "Rare", "Super"];

    function lb(bb, wb) {
      return `${"Basic"===wb?"":`${wb} `}${"Simple"===bb?"":`${bb} `}Lucky Block`
    }
    const Lb = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((bb => gb.map((wb => [lb(bb, wb), {
      category: bb,
      rarity: wb
    }])))));
    Lb.keys();

    function Ib(bb) {
      return Lb.get(bb)
    }
    const Ob = "Obsidian",
      Ub = ["Cobweb"],
      tb = [...["Red", "Blue", "Green", "Yellow"].map((bb => `${(0,Vb.fb)(bb)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Ob, ...Ub];

    function Cb(bb) {
      return tb.includes(bb)
    }
    var Eb = Mb(661);

    function Fb(bb, wb) {
      const Mb = Ib(bb);
      if (Mb) {
        const bb = Ib(wb);
        if (!bb) return;
        const eb = gb.length - 1 - gb.indexOf(bb.rarity);
        return (bb.category === Mb.category ? 0 : 1) * gb.length + eb
      }
      if (!Cb(bb)) return;
      if (wb === bb) return 0;
      const eb = bb => Cb(bb) && !Ub.includes(bb) && bb !== Ob;
      return eb(bb) && eb(wb) ? 1 : void 0
    }
    const Bb = [...Array.from({
      length: Eb.o - Eb.m
    }, ((bb, wb) => Eb.m + wb)), ...Array.from({
      length: Eb.m
    }, ((bb, wb) => wb))];
    class sb {
      constructor(bb) {
        this.inventory = bb, this.pending = new Map
      }
      onPlace(bb) {
        var wb;
        const Mb = this.inventory.selectedSlot(),
          eb = this.inventory.itemAt(Mb);
        (null === eb || void 0 === eb ? void 0 : eb.name) === bb && (null !== (wb = eb.amount) && void 0 !== wb ? wb : 1) <= 1 && mb(bb) && this.pending.set(Mb, bb)
      }
      onDrop(bb, wb) {
        wb < Eb.m && null === this.inventory.itemAt(wb) && mb(bb) && this.refill(wb, bb)
      }
      sO() {
        const bb = [...this.pending];
        this.pending.clear();
        for (const [wb, Mb] of bb) null === this.inventory.itemAt(wb) && this.refill(wb, Mb)
      }
      refill(bb, wb) {
        const Mb = function(bb, wb, Mb, eb) {
          let Hb, pb = 1 / 0;
          for (const Vb of Bb) {
            if (Vb === wb) continue;
            const gb = eb(Vb);
            if (!gb || Vb < Eb.m && wb !== Mb) continue;
            const lb = Fb(bb, gb.name);
            void 0 !== lb && lb < pb && (Hb = Vb, pb = lb)
          }
          return Hb
        }(wb, bb, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Mb && this.inventory.swap(bb, Mb)
      }
    }

    function mb(bb) {
      return !!Ib(bb) || Cb(bb)
    }
    var hb = Mb(3531),
      zb = Mb(81),
      Xb = Mb(1159),
      xb = Mb.n(Xb);
    const jb = "Lucky Clover",
      Kb = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function rb(bb) {
      return Kb[bb][0]
    }

    function Rb(bb) {
      return gb.filter((wb => bb >= rb(wb)))
    }
    var Db = Mb(366),
      cb = Mb(3503),
      Yb = Mb(26),
      Zb = Mb(3778),
      fb = Mb(2130),
      Ab = Mb(37898),
      Wb = Mb(1475);
    var Jb = Mb(1364);
    const Sb = {
      Basic: Vb.O.whiteUiText,
      Rare: Vb.O.goldUiText,
      Super: Vb.O.cyanUiText
    };
    let Nb = 1;

    function vb() {
      const bb = (0, cb.k)("currencyAmounts"),
        wb = null === bb || void 0 === bb ? void 0 : bb.Clovers;
      return !wb || wb.hidden ? null : (0, Jb.jsx)(Ab.d, {
        children: (0, Jb.jsx)(Qb, {
          amount: wb.amount
        })
      })
    }

    function Qb(bb) {
      var wb, Mb, eb;
      let {
        amount: pb
      } = bb;
      const {
        openEverythingMenuName: lb
      } = (0, Yb.o)(["openEverythingMenuName"]), Lb = (0, Zb.b)(), [Ib, Ob] = (0, Hb.useState)(pb), [Ub, tb] = (0, Hb.useState)(null), [Cb, Eb] = (0, Hb.useState)(0), [Fb, Bb] = (0, Hb.useState)([]), sb = (0, Hb.useRef)(pb), mb = (0, Hb.useRef)(!1), hb = (0, Hb.useRef)(null), Xb = lb === Db.l.SHOP;
      (0, Hb.useEffect)((() => {
        const bb = sb.current;
        if (sb.current = pb, pb <= bb || Xb) return void Ob(pb);
        const wb = Lb || Fb.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Mb = pb - bb, eb = !mb.current, Mb <= 0 || !eb && Mb < 40 ? 0 : Math.min(4, Math.ceil(Mb / 30)));
        var Mb, eb;
        if (mb.current = !0, Rb(pb).length > Rb(bb).length && Eb(Nb++), wb > 0) {
          const bb = [];
          for (let Mb = 0; Mb < wb; Mb++) bb.push({
            id: Nb++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Mb
          });
          Bb((wb => [...wb, ...bb]))
        }
        const Hb = wb > 0 ? 600 : 0;
        tb({
          id: Nb++,
          delayMs: Hb
        });
        const gb = performance.now() + Hb;
        let lb = 0;
        const Ib = wb => {
          const Mb = Vb.e.clamp((wb - gb) / 600, 0, 1);
          Ob(Math.round(bb + (pb - bb) * Mb)), Mb < 1 && (lb = requestAnimationFrame(Ib))
        };
        return lb = requestAnimationFrame(Ib), () => {
          cancelAnimationFrame(lb)
        }
      }), [pb, Xb]);
      const Kb = function(bb) {
          var wb;
          const Mb = null !== (wb = gb.find((wb => bb < rb(wb)))) && void 0 !== wb ? wb : "Super";
          return {
            rarity: Mb,
            progress: Vb.e.clamp(bb / rb(Mb), 0, 1)
          }
        }(Ib),
        cb = Rb(Ib).at(-1);
      return (0, Jb.jsxs)(Jb.Fragment, {
        children: [(0, Jb.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Jb.jsxs)("div", {
            className: xb()("LuckyCloverWallet", {
              Capped: cb && "Basic" !== cb
            }),
            style: cb && {
              "--luckyTierColour": Sb[cb]
            },
            children: [(0, Jb.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Kb.progress})`
              }
            }), Cb > 0 && (0, Jb.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(wb=null===Ub||void 0===Ub?void 0:Ub.delayMs)&&void 0!==wb?wb:0}ms`
              }
            }, Cb), (0, Jb.jsx)("div", {
              ref: hb,
              className: xb()("LuckyCloverWalletIcon", Ub && "Bounce"),
              style: {
                animationDelay: `${null!==(eb=null===Ub||void 0===Ub?void 0:Ub.delayMs)&&void 0!==eb?eb:0}ms`
              },
              children: (0, Jb.jsx)(fb.c, {
                itemName: jb,
                amount: 0
              })
            }, null !== (Mb = null === Ub || void 0 === Ub ? void 0 : Ub.id) && void 0 !== Mb ? Mb : 0), (0, Jb.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Ib
            }), cb && (0, Jb.jsx)(Wb.b, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, zb.createPortal)(Fb.map((bb => (0, Jb.jsx)(Gb, {
          flyer: bb,
          target: hb,
          onDone: () => {
            Bb((wb => wb.filter((wb => wb.id !== bb.id))))
          }
        }, bb.id))), document.body)]
      })
    }

    function Gb(bb) {
      let {
        flyer: wb,
        target: Mb,
        onDone: eb
      } = bb;
      const pb = (0, Hb.useRef)(null);
      return (0, Hb.useEffect)((() => {
        var bb;
        const Hb = null === (bb = Mb.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (!pb.current || !Hb) return void eb();
        const {
          x: Vb,
          y: gb
        } = wb, lb = Vb + 140 * (Math.random() - .5), Lb = gb - 30 - 40 * Math.random(), Ib = pb.current.animate([{
          transform: `translate(${Vb}px, ${gb}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${lb}px, ${Lb}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Hb.left}px, ${Hb.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: wb.delayMs,
          fill: "backwards"
        });
        return Ib.onfinish = eb, () => {
          Ib.cancel()
        }
      }), []), (0, Jb.jsx)("div", {
        ref: pb,
        className: "LuckyCloverFlying",
        children: (0, Jb.jsx)(fb.c, {
          itemName: jb,
          amount: 0
        })
      })
    }
    var qb = Mb(29);
    const ab = "luckyGearUpgradeView",
      ib = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function ub(bb) {
      var wb;
      return null !== (wb = ib[bb.split(" ")[0]]) && void 0 !== wb ? wb : "#e07bff"
    }
    class db {
      constructor(bb, wb) {
        this.selectedSlot = bb, this.itemAt = wb, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      EO(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Mb, eb, Hb] of bb) this.rings.push({
          id: this.nextId++,
          slot: Mb,
          colour: ub(Hb),
          until: wb + 1200
        }), Mb !== this.selectedSlot() && this.unseen.set(Mb, {
          from: eb,
          to: Hb
        });
        this.iI()
      }
      sO() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const wb = this.rings.filter((wb => wb.until > bb));
        let Mb = wb.length !== this.rings.length;
        this.rings = wb;
        for (const [eb, {
            from: Hb,
            to: pb
          }] of this.unseen) {
          const bb = this.itemAt(eb);
          (eb === this.selectedSlot() || bb !== pb && bb !== Hb) && (this.unseen.delete(eb), Mb = !0)
        }
        Mb && this.iI()
      }
      iI() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, qb.k.iI(ab, this.view)
      }
    }
    var Pb = Mb(1611);

    function nb(bb) {
      return document.querySelector(`.HotBar [data-inven-idx="${bb}"]`)
    }

    function yb(bb) {
      let {
        ring: wb
      } = bb;
      const [Mb, eb] = (0, Hb.useState)(null);
      return (0, Hb.useLayoutEffect)((() => {
        var bb, Mb;
        eb(null !== (bb = null === (Mb = nb(wb.slot)) || void 0 === Mb ? void 0 : Mb.getBoundingClientRect()) && void 0 !== bb ? bb : null)
      }), [wb]), Mb ? (0, Jb.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Mb.left,
          top: Mb.top,
          width: Mb.width,
          height: Mb.height,
          "--ringColour": wb.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function ob(bb) {
      let {
        slot: wb
      } = bb;
      const [Mb, eb] = (0, Hb.useState)(null);
      return (0, Hb.useLayoutEffect)((() => {
        const bb = () => {
          eb(nb(wb))
        };
        bb();
        const Mb = new MutationObserver(bb),
          Hb = document.querySelector(".BottomMiddleElements");
        return Hb && Mb.observe(Hb, {
          childList: !0,
          subtree: !0
        }), () => {
          Mb.disconnect()
        }
      }), [wb]), Mb ? (0, zb.createPortal)((0, Jb.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Mb) : null
    }

    function Tb(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Pb.h)(ab, wb.getView());
      return (0, Jb.jsxs)(Jb.Fragment, {
        children: [Mb.rings.map((bb => (0, Jb.jsx)(yb, {
          ring: bb
        }, bb.id))), Mb.unseenSlots.map((bb => (0, Jb.jsx)(ob, {
          slot: bb
        }, bb)))]
      })
    }
    const kb = function(bb, wb, Mb, Vb) {
      let gb, {
          localPlayerId: lb
        } = Vb,
        Lb = null;
      const Ib = new sb({
          itemAt: bb => gb.getItemSlot(lb, bb),
          selectedSlot: () => gb.getSelectedInventorySlotI(lb),
          swap: (bb, wb) => {
            gb.swapInventorySlots(bb, wb)
          }
        }),
        Ob = new db((() => gb.getSelectedInventorySlotI(lb)), (bb => {
          var wb;
          return null === (wb = gb.getItemSlot(lb, bb)) || void 0 === wb ? void 0 : wb.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, pb.c)()
        },
        onCreate: bb => {
          gb = bb, Lb = (0, hb.J)((0, Hb.createElement)(Hb.Fragment, null, (0, Hb.createElement)(vb), (0, Hb.createElement)(Tb, {
            controller: Ob
          })))
        },
        onClose: () => {
          var bb;
          null === (bb = Lb) || void 0 === bb || bb()
        },
        sO: () => {
          Ib.sO(), Ob.sO()
        },
        onReceivedMessageFromServer: (bb, wb) => {
          "luckyGearUpgrade" === bb && Ob.EO(wb)
        },
        onPlayerChangeBlock: (bb, wb, Mb, eb, Hb, pb) => {
          "Air" !== pb && Ib.onPlace(pb)
        },
        onPlayerDropItem: (bb, wb, Mb, eb) => {
          Ib.onDrop(wb, eb)
        },
        onPlayerAltAction: (bb, wb, Mb, Hb, pb, Vb) => {
          if (!Vb || "Mesh" !== gb.getEntityType(Vb)) return;
          const lb = gb.getEntityName(Vb),
            Lb = Object.values(eb).find((bb => bb.name === lb));
          Lb && gb.openShop(bb, !1, Lb.shopTab)
        }
      }
    }
  },
  39270: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb
    });
    var eb = Mb(382),
      Hb = Mb(38145),
      pb = Mb(5324);
    const Vb = ["Leaf Bed", "_Leaf Bed Head", ...eb.Uc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function gb() {
      let bb;
      return {
        onCreate(wb) {
          bb = wb
        },
        altVetoBlocks: Vb,
        onPlayerAttemptAltAction(wb, Mb, eb, Vb, gb, lb) {
          var Lb;
          if ((0, Hb.e)(bb.getMetaInfo(gb).rootName) && !bb.isEntityInteractable(lb) && (0, pb.f)(null === (Lb = bb.Leb(wb)) || void 0 === Lb ? void 0 : Lb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38145: (bb, wb, Mb) => {
    function eb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Hb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !eb(bb)
    }

    function pb(bb) {
      return bb.includes(" Strongbed")
    }

    function Vb(bb) {
      return eb(bb) || Hb(bb) || pb(bb)
    }
    Mb.d(wb, {
      e: () => Vb,
      f: () => eb,
      g: () => pb,
      i: () => Hb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);