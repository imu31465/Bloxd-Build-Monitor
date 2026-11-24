export const id = 19;
export const ids = [19];
export const modules = {
  36791: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      h: () => yp,
      i: () => Pp,
      k: () => Ap
    });
    var Op = cp(34430),
      op = cp(36799),
      Ip = cp(36804),
      Sp = cp(8852),
      xp = cp(1476),
      Lp = cp(62),
      Yp = cp(82),
      Dp = cp(1112);

    function Ap() {
      var pp;
      return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
        children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
      })
    }

    function Pp(pp) {
      var ip;
      let {
        show: cp
      } = pp;
      (0, xp.i)(op.d, (0, op.s)());
      const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
      return (0, Lp.useEffect)((() => {
        var pp;
        cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
      }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
        showing: cp,
        globallyUniqueKey: "clientGameMenu",
        children: null === Yp || void 0 === Yp ? void 0 : Yp.content
      })
    }

    function Wp(pp) {
      let {
        placement: ip = "bottom"
      } = pp;
      return (0, Dp.jsx)("div", {
        id: `clientGameHud-${ip}`,
        style: {
          display: "contents"
        }
      })
    }

    function yp(pp) {
      let {
        children: ip,
        placement: cp = "bottom"
      } = pp;
      const [Op, op] = (0, Lp.useState)(null);
      return (0, Lp.useEffect)((() => {
        op(document.getElementById(`clientGameHud-${cp}`))
      }), [cp]), Op ? (0, Yp.createPortal)(ip, Op) : null
    }
  },
  34430: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(4628),
      op = cp(4635);

    function Ip(pp) {
      let {
        children: ip,
        showing: cp,
        globallyUniqueKey: Ip,
        alwaysMountChildren: Sp = !1,
        doGameplayStartStopOnShow: xp = !0,
        keepsMovement: Lp = !1
      } = pp;
      return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
    }
  },
  8852: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      e: () => op
    });
    let Op = null;
    const op = function(pp) {
        const ip = {
          cycle: pp,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Op = ip, () => {
          Op === ip && (Op = null)
        }
      },
      Ip = () => {
        var pp;
        return null !== (pp = Op) && void 0 !== pp && pp.canCycle() ? Op.cycle : null
      }
  },
  36804: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => tp,
      b: () => Ip,
      d: () => Up,
      f: () => wp,
      j: () => xp,
      n: () => Pp,
      q: () => vp,
      u: () => Ap,
      w: () => Hp
    });
    var Op = cp(25),
      op = cp(34);
    const Ip = "clientGameInventoryButtonsChanged",
      Sp = new Map;

    function xp() {
      return [...Sp.values()].sort(((pp, ip) => {
        var cp, Op;
        return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
      }))
    }
    let Lp = null;

    function Yp(pp) {
      Lp = pp
    }
    let Dp = !1;

    function Ap(pp) {
      Dp = !0;
      try {
        pp.onClick()
      } finally {
        Dp = !1
      }
      pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
    }

    function Pp() {
      return Dp
    }

    function Wp() {
      return xp().filter((pp => pp.panel && !pp.disabled))
    }

    function yp(pp) {
      const ip = Wp(),
        cp = ip.findIndex((pp => pp.id === Lp));
      return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
    }

    function Up() {
      return null !== Lp && Wp().length > 1
    }

    function wp() {
      Yp(null)
    }

    function vp() {
      "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
    }

    function tp() {
      const pp = Lp;
      return Yp(null), pp
    }

    function Hp(pp) {
      return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
        Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
      }
    }
  },
  36799: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Dp,
      d: () => xp,
      h: () => wp,
      l: () => vp,
      o: () => Pp,
      s: () => Yp,
      t: () => Up,
      x: () => Wp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(36804);
    const xp = "clientGameUiChanged";
    let Lp = null;

    function Yp() {
      return Lp
    }

    function Dp(pp, ip) {
      const cp = {
        content: pp,
        menu: ip
      };
      return Lp = cp, op.m.GA(xp, Lp, !0), () => {
        Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
      }
    }
    let Ap = null;

    function Pp() {
      return Ap
    }

    function Wp(pp) {
      return Ap = pp, () => {
        Ap === pp && (Ap = null)
      }
    }
    let yp = !1;

    function Up() {
      const pp = Op.c.get("openInGameMenuName");
      "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wp() {
      tp(!1)
    }

    function vp() {
      tp(yp)
    }

    function tp(pp) {
      "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
        openInGameMenuName: pp ? "inventory" : null
      }), pp || (0, Sp.f)(), yp = !1
    }
  },
  39640: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => ii
    });
    const Op = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var op = cp(62),
      Ip = cp(38261),
      Sp = cp(337);
    const xp = ["Basic", "Rare", "Super"];

    function Lp(pp, ip) {
      return `${"Basic"===ip?"":`${ip} `}${"Simple"===pp?"":`${pp} `}Lucky Block`
    }
    const Yp = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((pp => xp.map((ip => [Lp(pp, ip), {
      category: pp,
      rarity: ip
    }])))));
    Yp.keys();

    function Dp(pp) {
      return Yp.get(pp)
    }
    const Ap = "Obsidian",
      Pp = ["Cobweb"],
      Wp = [...["Red", "Blue", "Green", "Yellow"].map((pp => `${(0,Sp.ab)(pp)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Ap, ...Pp];

    function yp(pp) {
      return Wp.includes(pp)
    }
    var Up = cp(640);

    function wp(pp, ip) {
      const cp = Dp(pp);
      if (cp) {
        const pp = Dp(ip);
        if (!pp) return;
        const Op = xp.length - 1 - xp.indexOf(pp.rarity);
        return (pp.category === cp.category ? 0 : 1) * xp.length + Op
      }
      if (!yp(pp)) return;
      if (ip === pp) return 0;
      const Op = pp => yp(pp) && !Pp.includes(pp) && pp !== Ap;
      return Op(pp) && Op(ip) ? 1 : void 0
    }
    const vp = [...Array.from({
      length: Up.p - Up.l
    }, ((pp, ip) => Up.l + ip)), ...Array.from({
      length: Up.l
    }, ((pp, ip) => ip))];
    class tp {
      constructor(pp) {
        this.inventory = pp, this.pending = new Map
      }
      onPlace(pp) {
        var ip;
        const cp = this.inventory.selectedSlot(),
          Op = this.inventory.itemAt(cp);
        (null === Op || void 0 === Op ? void 0 : Op.name) === pp && (null !== (ip = Op.amount) && void 0 !== ip ? ip : 1) <= 1 && Hp(pp) && this.pending.set(cp, pp)
      }
      onDrop(pp, ip) {
        ip < Up.l && null === this.inventory.itemAt(ip) && Hp(pp) && this.refill(ip, pp)
      }
      LP() {
        const pp = [...this.pending];
        this.pending.clear();
        for (const [ip, cp] of pp) null === this.inventory.itemAt(ip) && this.refill(ip, cp)
      }
      refill(pp, ip) {
        const cp = function(pp, ip, cp, Op) {
          let op, Ip = 1 / 0;
          for (const Sp of vp) {
            if (Sp === ip) continue;
            const xp = Op(Sp);
            if (!xp || Sp < Up.l && ip !== cp) continue;
            const Lp = wp(pp, xp.name);
            void 0 !== Lp && Lp < Ip && (op = Sp, Ip = Lp)
          }
          return op
        }(ip, pp, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== cp && this.inventory.swap(pp, cp)
      }
    }

    function Hp(pp) {
      return !!Dp(pp) || yp(pp)
    }
    var dp = cp(36799),
      ep = cp(82),
      jp = cp(1049),
      kp = cp.n(jp);
    const mp = "Lucky Clover",
      Rp = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function qp(pp) {
      return Rp[pp][0]
    }

    function Mp(pp) {
      return xp.filter((ip => pp >= qp(ip)))
    }
    var Cp = cp(322),
      Ep = cp(2492),
      Xp = cp(25),
      lp = cp(2657),
      Qp = cp(1941),
      Jp = cp(36791),
      Bp = cp(1060);
    var Np = cp(1112);
    const Tp = {
      Basic: Sp.N.whiteUiText,
      Rare: Sp.N.goldUiText,
      Super: Sp.N.cyanUiText
    };
    let fp = 1;

    function bp() {
      const pp = (0, Ep.i)("currencyAmounts"),
        ip = null === pp || void 0 === pp ? void 0 : pp.Clovers;
      return !ip || ip.hidden ? null : (0, Np.jsx)(Jp.h, {
        children: (0, Np.jsx)(hp, {
          amount: ip.amount
        })
      })
    }

    function hp(pp) {
      var ip, cp, Op;
      let {
        amount: Ip
      } = pp;
      const {
        openEverythingMenuName: Lp
      } = (0, Xp.o)(["openEverythingMenuName"]), Yp = (0, lp.b)(), [Dp, Ap] = (0, op.useState)(Ip), [Pp, Wp] = (0, op.useState)(null), [yp, Up] = (0, op.useState)(0), [wp, vp] = (0, op.useState)([]), tp = (0, op.useRef)(Ip), Hp = (0, op.useRef)(!1), dp = (0, op.useRef)(null), jp = Lp === Cp.n.SHOP;
      (0, op.useEffect)((() => {
        const pp = tp.current;
        if (tp.current = Ip, Ip <= pp || jp) return void Ap(Ip);
        const ip = Yp || wp.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (cp = Ip - pp, Op = !Hp.current, cp <= 0 || !Op && cp < 40 ? 0 : Math.min(4, Math.ceil(cp / 30)));
        var cp, Op;
        if (Hp.current = !0, Mp(Ip).length > Mp(pp).length && Up(fp++), ip > 0) {
          const pp = [];
          for (let cp = 0; cp < ip; cp++) pp.push({
            id: fp++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * cp
          });
          vp((ip => [...ip, ...pp]))
        }
        const op = ip > 0 ? 600 : 0;
        Wp({
          id: fp++,
          delayMs: op
        });
        const xp = performance.now() + op;
        let Lp = 0;
        const Dp = ip => {
          const cp = Sp.d.clamp((ip - xp) / 600, 0, 1);
          Ap(Math.round(pp + (Ip - pp) * cp)), cp < 1 && (Lp = requestAnimationFrame(Dp))
        };
        return Lp = requestAnimationFrame(Dp), () => {
          cancelAnimationFrame(Lp)
        }
      }), [Ip, jp]);
      const Rp = function(pp) {
          var ip;
          const cp = null !== (ip = xp.find((ip => pp < qp(ip)))) && void 0 !== ip ? ip : "Super";
          return {
            rarity: cp,
            progress: Sp.d.clamp(pp / qp(cp), 0, 1)
          }
        }(Dp),
        Ep = Mp(Dp).at(-1);
      return (0, Np.jsxs)(Np.Fragment, {
        children: [(0, Np.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Np.jsxs)("div", {
            className: kp()("LuckyCloverWallet", {
              Capped: Ep && "Basic" !== Ep
            }),
            style: Ep && {
              "--luckyTierColour": Tp[Ep]
            },
            children: [(0, Np.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Rp.progress})`
              }
            }), yp > 0 && (0, Np.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(ip=null===Pp||void 0===Pp?void 0:Pp.delayMs)&&void 0!==ip?ip:0}ms`
              }
            }, yp), (0, Np.jsx)("div", {
              ref: dp,
              className: kp()("LuckyCloverWalletIcon", Pp && "Bounce"),
              style: {
                animationDelay: `${null!==(Op=null===Pp||void 0===Pp?void 0:Pp.delayMs)&&void 0!==Op?Op:0}ms`
              },
              children: (0, Np.jsx)(Qp.d, {
                itemName: mp,
                amount: 0
              })
            }, null !== (cp = null === Pp || void 0 === Pp ? void 0 : Pp.id) && void 0 !== cp ? cp : 0), (0, Np.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Dp
            }), Ep && (0, Np.jsx)(Bp.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, ep.createPortal)(wp.map((pp => (0, Np.jsx)(ap, {
          flyer: pp,
          target: dp,
          onDone: () => {
            vp((ip => ip.filter((ip => ip.id !== pp.id))))
          }
        }, pp.id))), document.body)]
      })
    }

    function ap(pp) {
      let {
        flyer: ip,
        target: cp,
        onDone: Op
      } = pp;
      const Ip = (0, op.useRef)(null);
      return (0, op.useEffect)((() => {
        var pp;
        const op = null === (pp = cp.current) || void 0 === pp ? void 0 : pp.getBoundingClientRect();
        if (!Ip.current || !op) return void Op();
        const {
          x: Sp,
          y: xp
        } = ip, Lp = Sp + 140 * (Math.random() - .5), Yp = xp - 30 - 40 * Math.random(), Dp = Ip.current.animate([{
          transform: `translate(${Sp}px, ${xp}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Lp}px, ${Yp}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${op.left}px, ${op.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: ip.delayMs,
          fill: "backwards"
        });
        return Dp.onfinish = Op, () => {
          Dp.cancel()
        }
      }), []), (0, Np.jsx)("div", {
        ref: Ip,
        className: "LuckyCloverFlying",
        children: (0, Np.jsx)(Qp.d, {
          itemName: mp,
          amount: 0
        })
      })
    }
    var np = cp(34);
    const Fp = "luckyGearUpgradeView",
      gp = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Gp(pp) {
      var ip;
      return null !== (ip = gp[pp.split(" ")[0]]) && void 0 !== ip ? ip : "#e07bff"
    }
    class rp {
      constructor(pp, ip) {
        this.selectedSlot = pp, this.itemAt = ip, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Ey(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [cp, Op, op] of pp) this.rings.push({
          id: this.nextId++,
          slot: cp,
          colour: Gp(op),
          until: ip + 1200
        }), cp !== this.selectedSlot() && this.unseen.set(cp, {
          from: Op,
          to: op
        });
        this.GA()
      }
      LP() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const ip = this.rings.filter((ip => ip.until > pp));
        let cp = ip.length !== this.rings.length;
        this.rings = ip;
        for (const [Op, {
            from: op,
            to: Ip
          }] of this.unseen) {
          const pp = this.itemAt(Op);
          (Op === this.selectedSlot() || pp !== Ip && pp !== op) && (this.unseen.delete(Op), cp = !0)
        }
        cp && this.GA()
      }
      GA() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, np.m.GA(Fp, this.view)
      }
    }
    var Zp = cp(1476);

    function zp(pp) {
      return document.querySelector(`.HotBar [data-inven-idx="${pp}"]`)
    }

    function sp(pp) {
      let {
        ring: ip
      } = pp;
      const [cp, Op] = (0, op.useState)(null);
      return (0, op.useLayoutEffect)((() => {
        var pp, cp;
        Op(null !== (pp = null === (cp = zp(ip.slot)) || void 0 === cp ? void 0 : cp.getBoundingClientRect()) && void 0 !== pp ? pp : null)
      }), [ip]), cp ? (0, Np.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: cp.left,
          top: cp.top,
          width: cp.width,
          height: cp.height,
          "--ringColour": ip.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Kp(pp) {
      let {
        slot: ip
      } = pp;
      const [cp, Op] = (0, op.useState)(null);
      return (0, op.useLayoutEffect)((() => {
        const pp = () => {
          Op(zp(ip))
        };
        pp();
        const cp = new MutationObserver(pp),
          op = document.querySelector(".BottomMiddleElements");
        return op && cp.observe(op, {
          childList: !0,
          subtree: !0
        }), () => {
          cp.disconnect()
        }
      }), [ip]), cp ? (0, ep.createPortal)((0, Np.jsx)("div", {
        className: "LuckyGearUnseen"
      }), cp) : null
    }

    function Vp(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Zp.i)(Fp, ip.getView());
      return (0, Np.jsxs)(Np.Fragment, {
        children: [cp.rings.map((pp => (0, Np.jsx)(sp, {
          ring: pp
        }, pp.id))), cp.unseenSlots.map((pp => (0, Np.jsx)(Kp, {
          slot: pp
        }, pp)))]
      })
    }
    const ii = function(pp, ip, cp, Sp) {
      let xp, {
          localPlayerId: Lp
        } = Sp,
        Yp = null;
      const Dp = new tp({
          itemAt: pp => xp.getItemSlot(Lp, pp),
          selectedSlot: () => xp.getSelectedInventorySlotI(Lp),
          swap: (pp, ip) => {
            xp.swapInventorySlots(pp, ip)
          }
        }),
        Ap = new rp((() => xp.getSelectedInventorySlotI(Lp)), (pp => {
          var ip;
          return null === (ip = xp.getItemSlot(Lp, pp)) || void 0 === ip ? void 0 : ip.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Ip.c)()
        },
        onCreate: pp => {
          xp = pp, Yp = (0, dp.A)((0, op.createElement)(op.Fragment, null, (0, op.createElement)(bp), (0, op.createElement)(Vp, {
            controller: Ap
          })))
        },
        onClose: () => {
          var pp;
          null === (pp = Yp) || void 0 === pp || pp()
        },
        LP: () => {
          Dp.LP(), Ap.LP()
        },
        onReceivedMessageFromServer: (pp, ip) => {
          "luckyGearUpgrade" === pp && Ap.Ey(ip)
        },
        onPlayerChangeBlock: (pp, ip, cp, Op, op, Ip) => {
          "Air" !== Ip && Dp.onPlace(Ip)
        },
        onPlayerDropItem: (pp, ip, cp, Op) => {
          Dp.onDrop(ip, Op)
        },
        onPlayerAltAction: (pp, ip, cp, op, Ip, Sp) => {
          if (!Sp || "Mesh" !== xp.getEntityType(Sp)) return;
          const Lp = xp.getEntityName(Sp),
            Yp = Object.values(Op).find((pp => pp.name === Lp));
          Yp && xp.openShop(pp, !1, Yp.shopTab)
        }
      }
    }
  },
  38261: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp
    });
    var Op = cp(337),
      op = cp(37146),
      Ip = cp(4561);
    const Sp = ["Leaf Bed", "_Leaf Bed Head", ...Op.wc.flatMap((pp => [`${pp} Bed`, `_${pp} Bed Head`, `${pp} Strongbed`, `_${pp} Strongbed Head`]))];

    function xp() {
      let pp;
      return {
        onCreate(ip) {
          pp = ip
        },
        altVetoBlocks: Sp,
        onPlayerAttemptAltAction(ip, cp, Op, Sp, xp, Lp) {
          var Yp;
          if ((0, op.b)(pp.getMetaInfo(xp).rootName) && !pp.isEntityInteractable(Lp) && (0, Ip.g)(null === (Yp = pp.Acp(ip)) || void 0 === Yp ? void 0 : Yp.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37146: (pp, ip, cp) => {
    function Op(pp) {
      return pp.includes("Leaf Bed")
    }

    function op(pp) {
      return / Bed(?: Head)?(?:\||$)/.test(pp) && !Op(pp)
    }

    function Ip(pp) {
      return pp.includes(" Strongbed")
    }

    function Sp(pp) {
      return Op(pp) || op(pp) || Ip(pp)
    }
    cp.d(ip, {
      b: () => Sp,
      f: () => Op,
      g: () => Ip,
      h: () => op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);