export const id = 19;
export const ids = [19];
export const modules = {
  36235: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => nb,
      e: () => mb,
      i: () => Xb,
      j: () => Mb
    });
    var kb = sb(8917),
      Wb = sb(36240),
      ab = sb(36247),
      Tb = sb(8330),
      Ub = sb(1423),
      Ib = sb(64),
      Hb = sb(89),
      fb = sb(1087);

    function Mb() {
      var bb;
      return (0, Ub.h)(Wb.c, (0, Wb.l)()), (0, fb.jsx)(fb.Fragment, {
        children: null === (bb = (0, Wb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Xb(bb) {
      var cb;
      let {
        show: sb
      } = bb;
      (0, Ub.h)(Wb.c, (0, Wb.l)());
      const Hb = null === (cb = (0, Wb.l)()) || void 0 === cb ? void 0 : cb.menu;
      return (0, Ib.useEffect)((() => {
        var bb;
        sb || (null === Hb || void 0 === Hb || null === (bb = Hb.onClose) || void 0 === bb || bb.call(Hb), (0, ab.o)())
      }), [sb, Hb]), (0, Ib.useEffect)((() => sb ? (0, Tb.e)(ab.v, ab.g) : void 0), [sb]), (0, fb.jsx)(kb.b, {
        showing: sb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hb || void 0 === Hb ? void 0 : Hb.content
      })
    }

    function nb(bb) {
      let {
        placement: cb = "bottom"
      } = bb;
      return (0, fb.jsx)("div", {
        id: `clientGameHud-${cb}`,
        style: {
          display: "contents"
        }
      })
    }

    function mb(bb) {
      let {
        children: cb,
        placement: sb = "bottom"
      } = bb;
      const [kb, Wb] = (0, Ib.useState)(null);
      return (0, Ib.useEffect)((() => {
        Wb(document.getElementById(`clientGameHud-${sb}`))
      }), [sb]), kb ? (0, Hb.createPortal)(cb, kb) : null
    }
  },
  8917: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(4275),
      Wb = sb(4282);

    function ab(bb) {
      let {
        children: cb,
        showing: sb,
        globallyUniqueKey: ab,
        alwaysMountChildren: Tb = !1,
        doGameplayStartStopOnShow: Ub = !0,
        keepsMovement: Ib = !1
      } = bb;
      return (0, Wb.d)(!0, sb, ab, Ib), (0, kb.e)(Ub, sb), sb || Tb ? cb : null
    }
  },
  8330: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      e: () => Wb
    });
    let kb = null;
    const Wb = function(bb) {
        const cb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return kb = cb, () => {
          kb === cb && (kb = null)
        }
      },
      ab = () => {
        var bb;
        return null !== (bb = kb) && void 0 !== bb && bb.canCycle() ? kb.cycle : null
      }
  },
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  39019: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => pb
    });
    const kb = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Wb = sb(64),
      ab = sb(37630),
      Tb = sb(344);
    const Ub = ["Basic", "Rare", "Super"];

    function Ib(bb, cb) {
      return `${"Basic"===cb?"":`${cb} `}${"Simple"===bb?"":`${bb} `}Lucky Block`
    }
    const Hb = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((bb => Ub.map((cb => [Ib(bb, cb), {
      category: bb,
      rarity: cb
    }])))));
    Hb.keys();

    function fb(bb) {
      return Hb.get(bb)
    }
    const Mb = "Obsidian",
      Xb = ["Cobweb"],
      nb = [...["Red", "Blue", "Green", "Yellow"].map((bb => `${(0,Tb.X)(bb)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Mb, ...Xb];

    function mb(bb) {
      return nb.includes(bb)
    }
    var lb = sb(628);

    function Qb(bb, cb) {
      const sb = fb(bb);
      if (sb) {
        const bb = fb(cb);
        if (!bb) return;
        const kb = Ub.length - 1 - Ub.indexOf(bb.rarity);
        return (bb.category === sb.category ? 0 : 1) * Ub.length + kb
      }
      if (!mb(bb)) return;
      if (cb === bb) return 0;
      const kb = bb => mb(bb) && !Xb.includes(bb) && bb !== Mb;
      return kb(bb) && kb(cb) ? 1 : void 0
    }
    const eb = [...Array.from({
      length: lb.q - lb.n
    }, ((bb, cb) => lb.n + cb)), ...Array.from({
      length: lb.n
    }, ((bb, cb) => cb))];
    class Cb {
      constructor(bb) {
        this.inventory = bb, this.pending = new Map
      }
      onPlace(bb) {
        var cb;
        const sb = this.inventory.selectedSlot(),
          kb = this.inventory.itemAt(sb);
        (null === kb || void 0 === kb ? void 0 : kb.name) === bb && (null !== (cb = kb.amount) && void 0 !== cb ? cb : 1) <= 1 && Nb(bb) && this.pending.set(sb, bb)
      }
      onDrop(bb, cb) {
        cb < lb.n && null === this.inventory.itemAt(cb) && Nb(bb) && this.refill(cb, bb)
      }
      aX() {
        const bb = [...this.pending];
        this.pending.clear();
        for (const [cb, sb] of bb) null === this.inventory.itemAt(cb) && this.refill(cb, sb)
      }
      refill(bb, cb) {
        const sb = function(bb, cb, sb, kb) {
          let Wb, ab = 1 / 0;
          for (const Tb of eb) {
            if (Tb === cb) continue;
            const Ub = kb(Tb);
            if (!Ub || Tb < lb.n && cb !== sb) continue;
            const Ib = Qb(bb, Ub.name);
            void 0 !== Ib && Ib < ab && (Wb = Tb, ab = Ib)
          }
          return Wb
        }(cb, bb, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== sb && this.inventory.swap(bb, sb)
      }
    }

    function Nb(bb) {
      return !!fb(bb) || mb(bb)
    }
    var Vb = sb(36240),
      Lb = sb(89),
      ub = sb(1033),
      Yb = sb.n(ub);
    const hb = "Lucky Clover",
      Jb = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function gb(bb) {
      return Jb[bb][0]
    }

    function Bb(bb) {
      return Ub.filter((cb => bb >= gb(cb)))
    }
    var tb = sb(334),
      yb = sb(2337),
      Pb = sb(19),
      Db = sb(2424),
      Eb = sb(1858),
      ib = sb(36235),
      Ob = sb(1039);
    var Gb = sb(1087);
    const Kb = {
      Basic: Tb.L.whiteUiText,
      Rare: Tb.L.goldUiText,
      Super: Tb.L.cyanUiText
    };
    let Zb = 1;

    function zb() {
      const bb = (0, yb.d)("currencyAmounts"),
        cb = null === bb || void 0 === bb ? void 0 : bb.Clovers;
      return !cb || cb.hidden ? null : (0, Gb.jsx)(ib.e, {
        children: (0, Gb.jsx)(qb, {
          amount: cb.amount
        })
      })
    }

    function qb(bb) {
      var cb, sb, kb;
      let {
        amount: ab
      } = bb;
      const {
        openEverythingMenuName: Ib
      } = (0, Pb.p)(["openEverythingMenuName"]), Hb = (0, Db.c)(), [fb, Mb] = (0, Wb.useState)(ab), [Xb, nb] = (0, Wb.useState)(null), [mb, lb] = (0, Wb.useState)(0), [Qb, eb] = (0, Wb.useState)([]), Cb = (0, Wb.useRef)(ab), Nb = (0, Wb.useRef)(!1), Vb = (0, Wb.useRef)(null), ub = Ib === tb.r.SHOP;
      (0, Wb.useEffect)((() => {
        const bb = Cb.current;
        if (Cb.current = ab, ab <= bb || ub) return void Mb(ab);
        const cb = Hb || Qb.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (sb = ab - bb, kb = !Nb.current, sb <= 0 || !kb && sb < 40 ? 0 : Math.min(4, Math.ceil(sb / 30)));
        var sb, kb;
        if (Nb.current = !0, Bb(ab).length > Bb(bb).length && lb(Zb++), cb > 0) {
          const bb = [];
          for (let sb = 0; sb < cb; sb++) bb.push({
            id: Zb++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * sb
          });
          eb((cb => [...cb, ...bb]))
        }
        const Wb = cb > 0 ? 600 : 0;
        nb({
          id: Zb++,
          delayMs: Wb
        });
        const Ub = performance.now() + Wb;
        let Ib = 0;
        const fb = cb => {
          const sb = Tb.d.clamp((cb - Ub) / 600, 0, 1);
          Mb(Math.round(bb + (ab - bb) * sb)), sb < 1 && (Ib = requestAnimationFrame(fb))
        };
        return Ib = requestAnimationFrame(fb), () => {
          cancelAnimationFrame(Ib)
        }
      }), [ab, ub]);
      const Jb = function(bb) {
          var cb;
          const sb = null !== (cb = Ub.find((cb => bb < gb(cb)))) && void 0 !== cb ? cb : "Super";
          return {
            rarity: sb,
            progress: Tb.d.clamp(bb / gb(sb), 0, 1)
          }
        }(fb),
        yb = Bb(fb).at(-1);
      return (0, Gb.jsxs)(Gb.Fragment, {
        children: [(0, Gb.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Gb.jsxs)("div", {
            className: Yb()("LuckyCloverWallet", {
              Capped: yb && "Basic" !== yb
            }),
            style: yb && {
              "--luckyTierColour": Kb[yb]
            },
            children: [(0, Gb.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Jb.progress})`
              }
            }), mb > 0 && (0, Gb.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(cb=null===Xb||void 0===Xb?void 0:Xb.delayMs)&&void 0!==cb?cb:0}ms`
              }
            }, mb), (0, Gb.jsx)("div", {
              ref: Vb,
              className: Yb()("LuckyCloverWalletIcon", Xb && "Bounce"),
              style: {
                animationDelay: `${null!==(kb=null===Xb||void 0===Xb?void 0:Xb.delayMs)&&void 0!==kb?kb:0}ms`
              },
              children: (0, Gb.jsx)(Eb.d, {
                itemName: hb,
                amount: 0
              })
            }, null !== (sb = null === Xb || void 0 === Xb ? void 0 : Xb.id) && void 0 !== sb ? sb : 0), (0, Gb.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: fb
            }), yb && (0, Gb.jsx)(Ob.b, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Lb.createPortal)(Qb.map((bb => (0, Gb.jsx)(db, {
          flyer: bb,
          target: Vb,
          onDone: () => {
            eb((cb => cb.filter((cb => cb.id !== bb.id))))
          }
        }, bb.id))), document.body)]
      })
    }

    function db(bb) {
      let {
        flyer: cb,
        target: sb,
        onDone: kb
      } = bb;
      const ab = (0, Wb.useRef)(null);
      return (0, Wb.useEffect)((() => {
        var bb;
        const Wb = null === (bb = sb.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (!ab.current || !Wb) return void kb();
        const {
          x: Tb,
          y: Ub
        } = cb, Ib = Tb + 140 * (Math.random() - .5), Hb = Ub - 30 - 40 * Math.random(), fb = ab.current.animate([{
          transform: `translate(${Tb}px, ${Ub}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Ib}px, ${Hb}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Wb.left}px, ${Wb.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: cb.delayMs,
          fill: "backwards"
        });
        return fb.onfinish = kb, () => {
          fb.cancel()
        }
      }), []), (0, Gb.jsx)("div", {
        ref: ab,
        className: "LuckyCloverFlying",
        children: (0, Gb.jsx)(Eb.d, {
          itemName: hb,
          amount: 0
        })
      })
    }
    var Ab = sb(26);
    const wb = "luckyGearUpgradeView",
      rb = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function ob(bb) {
      var cb;
      return null !== (cb = rb[bb.split(" ")[0]]) && void 0 !== cb ? cb : "#e07bff"
    }
    class Sb {
      constructor(bb, cb) {
        this.selectedSlot = bb, this.itemAt = cb, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Km(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [sb, kb, Wb] of bb) this.rings.push({
          id: this.nextId++,
          slot: sb,
          colour: ob(Wb),
          until: cb + 1200
        }), sb !== this.selectedSlot() && this.unseen.set(sb, {
          from: kb,
          to: Wb
        });
        this.QQ()
      }
      aX() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const cb = this.rings.filter((cb => cb.until > bb));
        let sb = cb.length !== this.rings.length;
        this.rings = cb;
        for (const [kb, {
            from: Wb,
            to: ab
          }] of this.unseen) {
          const bb = this.itemAt(kb);
          (kb === this.selectedSlot() || bb !== ab && bb !== Wb) && (this.unseen.delete(kb), sb = !0)
        }
        sb && this.QQ()
      }
      QQ() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Ab.j.QQ(wb, this.view)
      }
    }
    var Rb = sb(1423);

    function vb(bb) {
      return document.querySelector(`.HotBar [data-inven-idx="${bb}"]`)
    }

    function Fb(bb) {
      let {
        ring: cb
      } = bb;
      const [sb, kb] = (0, Wb.useState)(null);
      return (0, Wb.useLayoutEffect)((() => {
        var bb, sb;
        kb(null !== (bb = null === (sb = vb(cb.slot)) || void 0 === sb ? void 0 : sb.getBoundingClientRect()) && void 0 !== bb ? bb : null)
      }), [cb]), sb ? (0, Gb.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: sb.left,
          top: sb.top,
          width: sb.width,
          height: sb.height,
          "--ringColour": cb.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function xb(bb) {
      let {
        slot: cb
      } = bb;
      const [sb, kb] = (0, Wb.useState)(null);
      return (0, Wb.useLayoutEffect)((() => {
        const bb = () => {
          kb(vb(cb))
        };
        bb();
        const sb = new MutationObserver(bb),
          Wb = document.querySelector(".BottomMiddleElements");
        return Wb && sb.observe(Wb, {
          childList: !0,
          subtree: !0
        }), () => {
          sb.disconnect()
        }
      }), [cb]), sb ? (0, Lb.createPortal)((0, Gb.jsx)("div", {
        className: "LuckyGearUnseen"
      }), sb) : null
    }

    function jb(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, Rb.h)(wb, cb.getView());
      return (0, Gb.jsxs)(Gb.Fragment, {
        children: [sb.rings.map((bb => (0, Gb.jsx)(Fb, {
          ring: bb
        }, bb.id))), sb.unseenSlots.map((bb => (0, Gb.jsx)(xb, {
          slot: bb
        }, bb)))]
      })
    }
    const pb = function(bb, cb, sb, Tb) {
      let Ub, {
          localPlayerId: Ib
        } = Tb,
        Hb = null;
      const fb = new Cb({
          itemAt: bb => Ub.getItemSlot(Ib, bb),
          selectedSlot: () => Ub.getSelectedInventorySlotI(Ib),
          swap: (bb, cb) => {
            Ub.swapInventorySlots(bb, cb)
          }
        }),
        Mb = new Sb((() => Ub.getSelectedInventorySlotI(Ib)), (bb => {
          var cb;
          return null === (cb = Ub.getItemSlot(Ib, bb)) || void 0 === cb ? void 0 : cb.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, ab.e)()
        },
        onCreate: bb => {
          Ub = bb, Hb = (0, Vb.s)((0, Wb.createElement)(Wb.Fragment, null, (0, Wb.createElement)(zb), (0, Wb.createElement)(jb, {
            controller: Mb
          })))
        },
        onClose: () => {
          var bb;
          null === (bb = Hb) || void 0 === bb || bb()
        },
        aX: () => {
          fb.aX(), Mb.aX()
        },
        onReceivedMessageFromServer: (bb, cb) => {
          "luckyGearUpgrade" === bb && Mb.Km(cb)
        },
        onPlayerChangeBlock: (bb, cb, sb, kb, Wb, ab) => {
          "Air" !== ab && fb.onPlace(ab)
        },
        onPlayerDropItem: (bb, cb, sb, kb) => {
          fb.onDrop(cb, kb)
        },
        onPlayerAltAction: (bb, cb, sb, Wb, ab, Tb) => {
          if (!Tb || "Mesh" !== Ub.getEntityType(Tb)) return;
          const Ib = Ub.getEntityName(Tb),
            Hb = Object.values(kb).find((bb => bb.name === Ib));
          Hb && Ub.openShop(bb, !1, Hb.shopTab)
        }
      }
    }
  },
  37630: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub
    });
    var kb = sb(344),
      Wb = sb(36505),
      ab = sb(4218);
    const Tb = ["Leaf Bed", "_Leaf Bed Head", ...kb.Hc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function Ub() {
      let bb;
      return {
        onCreate(cb) {
          bb = cb
        },
        altVetoBlocks: Tb,
        onPlayerAttemptAltAction(cb, sb, kb, Tb, Ub, Ib) {
          var Hb;
          if ((0, Wb.e)(bb.getMetaInfo(Ub).rootName) && !bb.isEntityInteractable(Ib) && (0, ab.h)(null === (Hb = bb.Xcb(cb)) || void 0 === Hb ? void 0 : Hb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36505: (bb, cb, sb) => {
    function kb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Wb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !kb(bb)
    }

    function ab(bb) {
      return bb.includes(" Strongbed")
    }

    function Tb(bb) {
      return kb(bb) || Wb(bb) || ab(bb)
    }
    sb.d(cb, {
      e: () => Tb,
      f: () => kb,
      h: () => ab,
      j: () => Wb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);