export const id = 19;
export const ids = [19];
export const modules = {
  36013: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xb,
      e: () => jb,
      h: () => Pb,
      k: () => Lb
    });
    var Ab = Ub(8906),
      Mb = Ub(36017),
      Tb = Ub(36023),
      Eb = Ub(8280),
      Yb = Ub(1345),
      Bb = Ub(52),
      eb = Ub(75),
      vb = Ub(1023);

    function Lb() {
      var bb;
      return (0, Yb.i)(Mb.c, (0, Mb.l)()), (0, vb.jsx)(vb.Fragment, {
        children: null === (bb = (0, Mb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Pb(bb) {
      var ab;
      let {
        show: Ub
      } = bb;
      (0, Yb.i)(Mb.c, (0, Mb.l)());
      const eb = null === (ab = (0, Mb.l)()) || void 0 === ab ? void 0 : ab.menu;
      return (0, Bb.useEffect)((() => {
        var bb;
        Ub || (null === eb || void 0 === eb || null === (bb = eb.onClose) || void 0 === bb || bb.call(eb), (0, Tb.p)())
      }), [Ub, eb]), (0, Bb.useEffect)((() => Ub ? (0, Eb.g)(Tb.v, Tb.i) : void 0), [Ub]), (0, vb.jsx)(Ab.d, {
        showing: Ub,
        globallyUniqueKey: "clientGameMenu",
        children: null === eb || void 0 === eb ? void 0 : eb.content
      })
    }

    function Xb(bb) {
      let {
        placement: ab = "bottom"
      } = bb;
      return (0, vb.jsx)("div", {
        id: `clientGameHud-${ab}`,
        style: {
          display: "contents"
        }
      })
    }

    function jb(bb) {
      let {
        children: ab,
        placement: Ub = "bottom"
      } = bb;
      const [Ab, Mb] = (0, Bb.useState)(null);
      return (0, Bb.useEffect)((() => {
        Mb(document.getElementById(`clientGameHud-${Ub}`))
      }), [Ub]), Ab ? (0, eb.createPortal)(ab, Ab) : null
    }
  },
  8906: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(4218),
      Mb = Ub(4225);

    function Tb(bb) {
      let {
        children: ab,
        showing: Ub,
        globallyUniqueKey: Tb,
        alwaysMountChildren: Eb = !1,
        doGameplayStartStopOnShow: Yb = !0,
        keepsMovement: Bb = !1
      } = bb;
      return (0, Mb.b)(!0, Ub, Tb, Bb), (0, Ab.c)(Yb, Ub), Ub || Eb ? ab : null
    }
  },
  8280: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      g: () => Mb
    });
    let Ab = null;
    const Mb = function(bb) {
        const ab = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ab = ab, () => {
          Ab === ab && (Ab = null)
        }
      },
      Tb = () => {
        var bb;
        return null !== (bb = Ab) && void 0 !== bb && bb.canCycle() ? Ab.cycle : null
      }
  },
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
    }
  },
  38662: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Sb
    });
    const Ab = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Mb = Ub(52),
      Tb = Ub(37374),
      Eb = Ub(325);
    const Yb = ["Basic", "Rare", "Super"];

    function Bb(bb, ab) {
      return `${"Basic"===ab?"":`${ab} `}${"Simple"===bb?"":`${bb} `}Lucky Block`
    }
    const eb = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((bb => Yb.map((ab => [Bb(bb, ab), {
      category: bb,
      rarity: ab
    }])))));
    eb.keys();

    function vb(bb) {
      return eb.get(bb)
    }
    const Lb = "Obsidian",
      Pb = ["Cobweb"],
      Xb = [...["Red", "Blue", "Green", "Yellow"].map((bb => `${(0,Eb.X)(bb)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Lb, ...Pb];

    function jb(bb) {
      return Xb.includes(bb)
    }
    var Rb = Ub(591);

    function kb(bb, ab) {
      const Ub = vb(bb);
      if (Ub) {
        const bb = vb(ab);
        if (!bb) return;
        const Ab = Yb.length - 1 - Yb.indexOf(bb.rarity);
        return (bb.category === Ub.category ? 0 : 1) * Yb.length + Ab
      }
      if (!jb(bb)) return;
      if (ab === bb) return 0;
      const Ab = bb => jb(bb) && !Pb.includes(bb) && bb !== Lb;
      return Ab(bb) && Ab(ab) ? 1 : void 0
    }
    const yb = [...Array.from({
      length: Rb.o - Rb.m
    }, ((bb, ab) => Rb.m + ab)), ...Array.from({
      length: Rb.m
    }, ((bb, ab) => ab))];
    class Zb {
      constructor(bb) {
        this.inventory = bb, this.pending = new Map
      }
      onPlace(bb) {
        var ab;
        const Ub = this.inventory.selectedSlot(),
          Ab = this.inventory.itemAt(Ub);
        (null === Ab || void 0 === Ab ? void 0 : Ab.name) === bb && (null !== (ab = Ab.amount) && void 0 !== ab ? ab : 1) <= 1 && Db(bb) && this.pending.set(Ub, bb)
      }
      onDrop(bb, ab) {
        ab < Rb.m && null === this.inventory.itemAt(ab) && Db(bb) && this.refill(ab, bb)
      }
      qL() {
        const bb = [...this.pending];
        this.pending.clear();
        for (const [ab, Ub] of bb) null === this.inventory.itemAt(ab) && this.refill(ab, Ub)
      }
      refill(bb, ab) {
        const Ub = function(bb, ab, Ub, Ab) {
          let Mb, Tb = 1 / 0;
          for (const Eb of yb) {
            if (Eb === ab) continue;
            const Yb = Ab(Eb);
            if (!Yb || Eb < Rb.m && ab !== Ub) continue;
            const Bb = kb(bb, Yb.name);
            void 0 !== Bb && Bb < Tb && (Mb = Eb, Tb = Bb)
          }
          return Mb
        }(ab, bb, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Ub && this.inventory.swap(bb, Ub)
      }
    }

    function Db(bb) {
      return !!vb(bb) || jb(bb)
    }
    var zb = Ub(36017),
      xb = Ub(75),
      ib = Ub(984),
      fb = Ub.n(ib);
    const mb = "Lucky Clover",
      pb = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Nb(bb) {
      return pb[bb][0]
    }

    function Wb(bb) {
      return Yb.filter((ab => bb >= Nb(ab)))
    }
    var Hb = Ub(307),
      Ib = Ub(2268),
      db = Ub(19),
      Fb = Ub(2381),
      hb = Ub(1812),
      Gb = Ub(36013),
      Qb = Ub(990);
    var qb = Ub(1023);
    const ub = {
      Basic: Eb.E.whiteUiText,
      Rare: Eb.E.goldUiText,
      Super: Eb.E.cyanUiText
    };
    let rb = 1;

    function Kb() {
      const bb = (0, Ib.h)("currencyAmounts"),
        ab = null === bb || void 0 === bb ? void 0 : bb.Clovers;
      return !ab || ab.hidden ? null : (0, qb.jsx)(Gb.e, {
        children: (0, qb.jsx)(ob, {
          amount: ab.amount
        })
      })
    }

    function ob(bb) {
      var ab, Ub, Ab;
      let {
        amount: Tb
      } = bb;
      const {
        openEverythingMenuName: Bb
      } = (0, db.n)(["openEverythingMenuName"]), eb = (0, Fb.d)(), [vb, Lb] = (0, Mb.useState)(Tb), [Pb, Xb] = (0, Mb.useState)(null), [jb, Rb] = (0, Mb.useState)(0), [kb, yb] = (0, Mb.useState)([]), Zb = (0, Mb.useRef)(Tb), Db = (0, Mb.useRef)(!1), zb = (0, Mb.useRef)(null), ib = Bb === Hb.j.SHOP;
      (0, Mb.useEffect)((() => {
        const bb = Zb.current;
        if (Zb.current = Tb, Tb <= bb || ib) return void Lb(Tb);
        const ab = eb || kb.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Ub = Tb - bb, Ab = !Db.current, Ub <= 0 || !Ab && Ub < 40 ? 0 : Math.min(4, Math.ceil(Ub / 30)));
        var Ub, Ab;
        if (Db.current = !0, Wb(Tb).length > Wb(bb).length && Rb(rb++), ab > 0) {
          const bb = [];
          for (let Ub = 0; Ub < ab; Ub++) bb.push({
            id: rb++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Ub
          });
          yb((ab => [...ab, ...bb]))
        }
        const Mb = ab > 0 ? 600 : 0;
        Xb({
          id: rb++,
          delayMs: Mb
        });
        const Yb = performance.now() + Mb;
        let Bb = 0;
        const vb = ab => {
          const Ub = Eb.d.clamp((ab - Yb) / 600, 0, 1);
          Lb(Math.round(bb + (Tb - bb) * Ub)), Ub < 1 && (Bb = requestAnimationFrame(vb))
        };
        return Bb = requestAnimationFrame(vb), () => {
          cancelAnimationFrame(Bb)
        }
      }), [Tb, ib]);
      const pb = function(bb) {
          var ab;
          const Ub = null !== (ab = Yb.find((ab => bb < Nb(ab)))) && void 0 !== ab ? ab : "Super";
          return {
            rarity: Ub,
            progress: Eb.d.clamp(bb / Nb(Ub), 0, 1)
          }
        }(vb),
        Ib = Wb(vb).at(-1);
      return (0, qb.jsxs)(qb.Fragment, {
        children: [(0, qb.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, qb.jsxs)("div", {
            className: fb()("LuckyCloverWallet", {
              Capped: Ib && "Basic" !== Ib
            }),
            style: Ib && {
              "--luckyTierColour": ub[Ib]
            },
            children: [(0, qb.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${pb.progress})`
              }
            }), jb > 0 && (0, qb.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(ab=null===Pb||void 0===Pb?void 0:Pb.delayMs)&&void 0!==ab?ab:0}ms`
              }
            }, jb), (0, qb.jsx)("div", {
              ref: zb,
              className: fb()("LuckyCloverWalletIcon", Pb && "Bounce"),
              style: {
                animationDelay: `${null!==(Ab=null===Pb||void 0===Pb?void 0:Pb.delayMs)&&void 0!==Ab?Ab:0}ms`
              },
              children: (0, qb.jsx)(hb.c, {
                itemName: mb,
                amount: 0
              })
            }, null !== (Ub = null === Pb || void 0 === Pb ? void 0 : Pb.id) && void 0 !== Ub ? Ub : 0), (0, qb.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: vb
            }), Ib && (0, qb.jsx)(Qb.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, xb.createPortal)(kb.map((bb => (0, qb.jsx)(lb, {
          flyer: bb,
          target: zb,
          onDone: () => {
            yb((ab => ab.filter((ab => ab.id !== bb.id))))
          }
        }, bb.id))), document.body)]
      })
    }

    function lb(bb) {
      let {
        flyer: ab,
        target: Ub,
        onDone: Ab
      } = bb;
      const Tb = (0, Mb.useRef)(null);
      return (0, Mb.useEffect)((() => {
        var bb;
        const Mb = null === (bb = Ub.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (!Tb.current || !Mb) return void Ab();
        const {
          x: Eb,
          y: Yb
        } = ab, Bb = Eb + 140 * (Math.random() - .5), eb = Yb - 30 - 40 * Math.random(), vb = Tb.current.animate([{
          transform: `translate(${Eb}px, ${Yb}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Bb}px, ${eb}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Mb.left}px, ${Mb.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: ab.delayMs,
          fill: "backwards"
        });
        return vb.onfinish = Ab, () => {
          vb.cancel()
        }
      }), []), (0, qb.jsx)("div", {
        ref: Tb,
        className: "LuckyCloverFlying",
        children: (0, qb.jsx)(hb.c, {
          itemName: mb,
          amount: 0
        })
      })
    }
    var tb = Ub(22);
    const wb = "luckyGearUpgradeView",
      sb = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function gb(bb) {
      var ab;
      return null !== (ab = sb[bb.split(" ")[0]]) && void 0 !== ab ? ab : "#e07bff"
    }
    class Cb {
      constructor(bb, ab) {
        this.selectedSlot = bb, this.itemAt = ab, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      aj(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Ub, Ab, Mb] of bb) this.rings.push({
          id: this.nextId++,
          slot: Ub,
          colour: gb(Mb),
          until: ab + 1200
        }), Ub !== this.selectedSlot() && this.unseen.set(Ub, {
          from: Ab,
          to: Mb
        });
        this.IR()
      }
      qL() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const ab = this.rings.filter((ab => ab.until > bb));
        let Ub = ab.length !== this.rings.length;
        this.rings = ab;
        for (const [Ab, {
            from: Mb,
            to: Tb
          }] of this.unseen) {
          const bb = this.itemAt(Ab);
          (Ab === this.selectedSlot() || bb !== Tb && bb !== Mb) && (this.unseen.delete(Ab), Ub = !0)
        }
        Ub && this.IR()
      }
      IR() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, tb.m.IR(wb, this.view)
      }
    }
    var Vb = Ub(1345);

    function Ob(bb) {
      return document.querySelector(`.HotBar [data-inven-idx="${bb}"]`)
    }

    function cb(bb) {
      let {
        ring: ab
      } = bb;
      const [Ub, Ab] = (0, Mb.useState)(null);
      return (0, Mb.useLayoutEffect)((() => {
        var bb, Ub;
        Ab(null !== (bb = null === (Ub = Ob(ab.slot)) || void 0 === Ub ? void 0 : Ub.getBoundingClientRect()) && void 0 !== bb ? bb : null)
      }), [ab]), Ub ? (0, qb.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Ub.left,
          top: Ub.top,
          width: Ub.width,
          height: Ub.height,
          "--ringColour": ab.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Jb(bb) {
      let {
        slot: ab
      } = bb;
      const [Ub, Ab] = (0, Mb.useState)(null);
      return (0, Mb.useLayoutEffect)((() => {
        const bb = () => {
          Ab(Ob(ab))
        };
        bb();
        const Ub = new MutationObserver(bb),
          Mb = document.querySelector(".BottomMiddleElements");
        return Mb && Ub.observe(Mb, {
          childList: !0,
          subtree: !0
        }), () => {
          Ub.disconnect()
        }
      }), [ab]), Ub ? (0, xb.createPortal)((0, qb.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Ub) : null
    }

    function nb(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, Vb.i)(wb, ab.getView());
      return (0, qb.jsxs)(qb.Fragment, {
        children: [Ub.rings.map((bb => (0, qb.jsx)(cb, {
          ring: bb
        }, bb.id))), Ub.unseenSlots.map((bb => (0, qb.jsx)(Jb, {
          slot: bb
        }, bb)))]
      })
    }
    const Sb = function(bb, ab, Ub, Eb) {
      let Yb, {
          localPlayerId: Bb
        } = Eb,
        eb = null;
      const vb = new Zb({
          itemAt: bb => Yb.getItemSlot(Bb, bb),
          selectedSlot: () => Yb.getSelectedInventorySlotI(Bb),
          swap: (bb, ab) => {
            Yb.swapInventorySlots(bb, ab)
          }
        }),
        Lb = new Cb((() => Yb.getSelectedInventorySlotI(Bb)), (bb => {
          var ab;
          return null === (ab = Yb.getItemSlot(Bb, bb)) || void 0 === ab ? void 0 : ab.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Tb.c)()
        },
        onCreate: bb => {
          Yb = bb, eb = (0, zb.w)((0, Mb.createElement)(Mb.Fragment, null, (0, Mb.createElement)(Kb), (0, Mb.createElement)(nb, {
            controller: Lb
          })))
        },
        onClose: () => {
          var bb;
          null === (bb = eb) || void 0 === bb || bb()
        },
        qL: () => {
          vb.qL(), Lb.qL()
        },
        onReceivedMessageFromServer: (bb, ab) => {
          "luckyGearUpgrade" === bb && Lb.aj(ab)
        },
        onPlayerChangeBlock: (bb, ab, Ub, Ab, Mb, Tb) => {
          "Air" !== Tb && vb.onPlace(Tb)
        },
        onPlayerDropItem: (bb, ab, Ub, Ab) => {
          vb.onDrop(ab, Ab)
        },
        onPlayerAltAction: (bb, ab, Ub, Mb, Tb, Eb) => {
          if (!Eb || "Mesh" !== Yb.getEntityType(Eb)) return;
          const Bb = Yb.getEntityName(Eb),
            eb = Object.values(Ab).find((bb => bb.name === Bb));
          eb && Yb.openShop(bb, !1, eb.shopTab)
        }
      }
    }
  },
  37374: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb
    });
    var Ab = Ub(325),
      Mb = Ub(36263),
      Tb = Ub(4156);
    const Eb = ["Leaf Bed", "_Leaf Bed Head", ...Ab.qc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function Yb() {
      let bb;
      return {
        onCreate(ab) {
          bb = ab
        },
        altVetoBlocks: Eb,
        onPlayerAttemptAltAction(ab, Ub, Ab, Eb, Yb, Bb) {
          var eb;
          if ((0, Mb.d)(bb.getMetaInfo(Yb).rootName) && !bb.isEntityInteractable(Bb) && (0, Tb.e)(null === (eb = bb.vab(ab)) || void 0 === eb ? void 0 : eb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36263: (bb, ab, Ub) => {
    function Ab(bb) {
      return bb.includes("Leaf Bed")
    }

    function Mb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Ab(bb)
    }

    function Tb(bb) {
      return bb.includes(" Strongbed")
    }

    function Eb(bb) {
      return Ab(bb) || Mb(bb) || Tb(bb)
    }
    Ub.d(ab, {
      d: () => Eb,
      g: () => Ab,
      h: () => Tb,
      i: () => Mb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);