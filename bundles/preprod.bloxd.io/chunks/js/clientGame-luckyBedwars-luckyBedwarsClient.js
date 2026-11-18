export const id = 19;
export const ids = [19];
export const modules = {
  35370: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => qb,
      f: () => sy,
      g: () => ey,
      k: () => Ky
    });
    var Uy = Wy(8408),
      hy = Wy(35379),
      fy = Wy(35383),
      Zy = Wy(7911),
      cb = Wy(1268),
      Py = Wy(55),
      oy = Wy(70),
      By = Wy(952);

    function Ky() {
      var yb;
      return (0, cb.m)(hy.e, (0, hy.s)()), (0, By.jsx)(By.Fragment, {
        children: null === (yb = (0, hy.s)()) || void 0 === yb ? void 0 : yb.content
      })
    }

    function ey(yb) {
      var bb;
      let {
        show: Wy
      } = yb;
      (0, cb.m)(hy.e, (0, hy.s)());
      const oy = null === (bb = (0, hy.s)()) || void 0 === bb ? void 0 : bb.menu;
      return (0, Py.useEffect)((() => {
        var yb;
        Wy || (null === oy || void 0 === oy || null === (yb = oy.onClose) || void 0 === yb || yb.call(oy), (0, fy.l)())
      }), [Wy, oy]), (0, Py.useEffect)((() => Wy ? (0, Zy.f)(fy.t, fy.e) : void 0), [Wy]), (0, By.jsx)(Uy.b, {
        showing: Wy,
        globallyUniqueKey: "clientGameMenu",
        children: null === oy || void 0 === oy ? void 0 : oy.content
      })
    }

    function qb(yb) {
      let {
        placement: bb = "bottom"
      } = yb;
      return (0, By.jsx)("div", {
        id: `clientGameHud-${bb}`,
        style: {
          display: "contents"
        }
      })
    }

    function sy(yb) {
      let {
        children: bb,
        placement: Wy = "bottom"
      } = yb;
      const [Uy, hy] = (0, Py.useState)(null);
      return (0, Py.useEffect)((() => {
        hy(document.getElementById(`clientGameHud-${Wy}`))
      }), [Wy]), Uy ? (0, oy.createPortal)(bb, Uy) : null
    }
  },
  8408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(3739),
      hy = Wy(3742);

    function fy(yb) {
      let {
        children: bb,
        showing: Wy,
        globallyUniqueKey: fy,
        alwaysMountChildren: Zy = !1,
        doGameplayStartStopOnShow: cb = !0,
        keepsMovement: Py = !1
      } = yb;
      return (0, hy.b)(!0, Wy, fy, Py), (0, Uy.b)(cb, Wy), Wy || Zy ? bb : null
    }
  },
  7911: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    let Uy = null;
    const hy = function(yb) {
        const bb = {
          cycle: yb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Uy = bb, () => {
          Uy === bb && (Uy = null)
        }
      },
      fy = () => {
        var yb;
        return null !== (yb = Uy) && void 0 !== yb && yb.canCycle() ? Uy.cycle : null
      }
  },
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  38062: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => dy
    });
    const Uy = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var hy = Wy(55),
      fy = Wy(36694),
      Zy = Wy(258);
    const cb = ["Basic", "Rare", "Super"];

    function Py(yb, bb) {
      return `${"Basic"===bb?"":`${bb} `}${"Simple"===yb?"":`${yb} `}Lucky Block`
    }
    const oy = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((yb => cb.map((bb => [Py(yb, bb), {
      category: yb,
      rarity: bb
    }])))));
    oy.keys();

    function By(yb) {
      return oy.get(yb)
    }
    const Ky = "Obsidian",
      ey = ["Cobweb"],
      qb = [...["Red", "Blue", "Green", "Yellow"].map((yb => `${(0,Zy._)(yb)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Ky, ...ey];

    function sy(yb) {
      return qb.includes(yb)
    }
    var Sy = Wy(547);

    function Ey(yb, bb) {
      const Wy = By(yb);
      if (Wy) {
        const yb = By(bb);
        if (!yb) return;
        const Uy = cb.length - 1 - cb.indexOf(yb.rarity);
        return (yb.category === Wy.category ? 0 : 1) * cb.length + Uy
      }
      if (!sy(yb)) return;
      if (bb === yb) return 0;
      const Uy = yb => sy(yb) && !ey.includes(yb) && yb !== Ky;
      return Uy(yb) && Uy(bb) ? 1 : void 0
    }
    const ly = [...Array.from({
      length: Sy.n - Sy.l
    }, ((yb, bb) => Sy.l + bb)), ...Array.from({
      length: Sy.l
    }, ((yb, bb) => bb))];
    class mb {
      constructor(yb) {
        this.inventory = yb, this.pending = new Map
      }
      onPlace(yb) {
        var bb;
        const Wy = this.inventory.selectedSlot(),
          Uy = this.inventory.itemAt(Wy);
        (null === Uy || void 0 === Uy ? void 0 : Uy.name) === yb && (null !== (bb = Uy.amount) && void 0 !== bb ? bb : 1) <= 1 && Cy(yb) && this.pending.set(Wy, yb)
      }
      onDrop(yb, bb) {
        bb < Sy.l && null === this.inventory.itemAt(bb) && Cy(yb) && this.refill(bb, yb)
      }
      Zb() {
        const yb = [...this.pending];
        this.pending.clear();
        for (const [bb, Wy] of yb) null === this.inventory.itemAt(bb) && this.refill(bb, Wy)
      }
      refill(yb, bb) {
        const Wy = function(yb, bb, Wy, Uy) {
          let hy, fy = 1 / 0;
          for (const Zy of ly) {
            if (Zy === bb) continue;
            const cb = Uy(Zy);
            if (!cb || Zy < Sy.l && bb !== Wy) continue;
            const Py = Ey(yb, cb.name);
            void 0 !== Py && Py < fy && (hy = Zy, fy = Py)
          }
          return hy
        }(bb, yb, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Wy && this.inventory.swap(yb, Wy)
      }
    }

    function Cy(yb) {
      return !!By(yb) || sy(yb)
    }
    var Ty = Wy(35379),
      Vy = Wy(70),
      Jy = Wy(898),
      gb = Wy.n(Jy);
    const Gy = "Lucky Clover",
      Oy = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Ry(yb) {
      return Oy[yb][0]
    }

    function vb(yb) {
      return cb.filter((bb => yb >= Ry(bb)))
    }
    var ib = Wy(248),
      My = Wy(2005),
      Yy = Wy(19),
      Xy = Wy(2070),
      ny = Wy(1556),
      uy = Wy(35370),
      rb = Wy(910);
    var Hy = Wy(952);
    const ab = {
      Basic: Zy.K.whiteUiText,
      Rare: Zy.K.goldUiText,
      Super: Zy.K.cyanUiText
    };
    let Fy = 1;

    function py() {
      const yb = (0, My.k)("currencyAmounts"),
        bb = null === yb || void 0 === yb ? void 0 : yb.Clovers;
      return !bb || bb.hidden ? null : (0, Hy.jsx)(uy.f, {
        children: (0, Hy.jsx)(Ly, {
          amount: bb.amount
        })
      })
    }

    function Ly(yb) {
      var bb, Wy, Uy;
      let {
        amount: fy
      } = yb;
      const {
        openEverythingMenuName: Py
      } = (0, Yy.h)(["openEverythingMenuName"]), oy = (0, Xy.e)(), [By, Ky] = (0, hy.useState)(fy), [ey, qb] = (0, hy.useState)(null), [sy, Sy] = (0, hy.useState)(0), [Ey, ly] = (0, hy.useState)([]), mb = (0, hy.useRef)(fy), Cy = (0, hy.useRef)(!1), Ty = (0, hy.useRef)(null), Jy = Py === ib.o.SHOP;
      (0, hy.useEffect)((() => {
        const yb = mb.current;
        if (mb.current = fy, fy <= yb || Jy) return void Ky(fy);
        const bb = oy || Ey.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Wy = fy - yb, Uy = !Cy.current, Wy <= 0 || !Uy && Wy < 40 ? 0 : Math.min(4, Math.ceil(Wy / 30)));
        var Wy, Uy;
        if (Cy.current = !0, vb(fy).length > vb(yb).length && Sy(Fy++), bb > 0) {
          const yb = [];
          for (let Wy = 0; Wy < bb; Wy++) yb.push({
            id: Fy++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Wy
          });
          ly((bb => [...bb, ...yb]))
        }
        const hy = bb > 0 ? 600 : 0;
        qb({
          id: Fy++,
          delayMs: hy
        });
        const cb = performance.now() + hy;
        let Py = 0;
        const By = bb => {
          const Wy = Zy.c.clamp((bb - cb) / 600, 0, 1);
          Ky(Math.round(yb + (fy - yb) * Wy)), Wy < 1 && (Py = requestAnimationFrame(By))
        };
        return Py = requestAnimationFrame(By), () => {
          cancelAnimationFrame(Py)
        }
      }), [fy, Jy]);
      const Oy = function(yb) {
          var bb;
          const Wy = null !== (bb = cb.find((bb => yb < Ry(bb)))) && void 0 !== bb ? bb : "Super";
          return {
            rarity: Wy,
            progress: Zy.c.clamp(yb / Ry(Wy), 0, 1)
          }
        }(By),
        My = vb(By).at(-1);
      return (0, Hy.jsxs)(Hy.Fragment, {
        children: [(0, Hy.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Hy.jsxs)("div", {
            className: gb()("LuckyCloverWallet", {
              Capped: My && "Basic" !== My
            }),
            style: My && {
              "--luckyTierColour": ab[My]
            },
            children: [(0, Hy.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Oy.progress})`
              }
            }), sy > 0 && (0, Hy.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(bb=null===ey||void 0===ey?void 0:ey.delayMs)&&void 0!==bb?bb:0}ms`
              }
            }, sy), (0, Hy.jsx)("div", {
              ref: Ty,
              className: gb()("LuckyCloverWalletIcon", ey && "Bounce"),
              style: {
                animationDelay: `${null!==(Uy=null===ey||void 0===ey?void 0:ey.delayMs)&&void 0!==Uy?Uy:0}ms`
              },
              children: (0, Hy.jsx)(ny.d, {
                itemName: Gy,
                amount: 0
              })
            }, null !== (Wy = null === ey || void 0 === ey ? void 0 : ey.id) && void 0 !== Wy ? Wy : 0), (0, Hy.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: By
            }), My && (0, Hy.jsx)(rb.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Vy.createPortal)(Ey.map((yb => (0, Hy.jsx)(Qy, {
          flyer: yb,
          target: Ty,
          onDone: () => {
            ly((bb => bb.filter((bb => bb.id !== yb.id))))
          }
        }, yb.id))), document.body)]
      })
    }

    function Qy(yb) {
      let {
        flyer: bb,
        target: Wy,
        onDone: Uy
      } = yb;
      const fy = (0, hy.useRef)(null);
      return (0, hy.useEffect)((() => {
        var yb;
        const hy = null === (yb = Wy.current) || void 0 === yb ? void 0 : yb.getBoundingClientRect();
        if (!fy.current || !hy) return void Uy();
        const {
          x: Zy,
          y: cb
        } = bb, Py = Zy + 140 * (Math.random() - .5), oy = cb - 30 - 40 * Math.random(), By = fy.current.animate([{
          transform: `translate(${Zy}px, ${cb}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Py}px, ${oy}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${hy.left}px, ${hy.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: bb.delayMs,
          fill: "backwards"
        });
        return By.onfinish = Uy, () => {
          By.cancel()
        }
      }), []), (0, Hy.jsx)("div", {
        ref: fy,
        className: "LuckyCloverFlying",
        children: (0, Hy.jsx)(ny.d, {
          itemName: Gy,
          amount: 0
        })
      })
    }
    var jb = Wy(23);
    const Dy = "luckyGearUpgradeView",
      tb = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function wy(yb) {
      var bb;
      return null !== (bb = tb[yb.split(" ")[0]]) && void 0 !== bb ? bb : "#e07bff"
    }
    class kb {
      constructor(yb, bb) {
        this.selectedSlot = yb, this.itemAt = bb, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      pU(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Wy, Uy, hy] of yb) this.rings.push({
          id: this.nextId++,
          slot: Wy,
          colour: wy(hy),
          until: bb + 1200
        }), Wy !== this.selectedSlot() && this.unseen.set(Wy, {
          from: Uy,
          to: hy
        });
        this.EZ()
      }
      Zb() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const bb = this.rings.filter((bb => bb.until > yb));
        let Wy = bb.length !== this.rings.length;
        this.rings = bb;
        for (const [Uy, {
            from: hy,
            to: fy
          }] of this.unseen) {
          const yb = this.itemAt(Uy);
          (Uy === this.selectedSlot() || yb !== fy && yb !== hy) && (this.unseen.delete(Uy), Wy = !0)
        }
        Wy && this.EZ()
      }
      EZ() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, jb.g.EZ(Dy, this.view)
      }
    }
    var Ny = Wy(1268);

    function zb(yb) {
      return document.querySelector(`.HotBar [data-inven-idx="${yb}"]`)
    }

    function Iy(yb) {
      let {
        ring: bb
      } = yb;
      const [Wy, Uy] = (0, hy.useState)(null);
      return (0, hy.useLayoutEffect)((() => {
        var yb, Wy;
        Uy(null !== (yb = null === (Wy = zb(bb.slot)) || void 0 === Wy ? void 0 : Wy.getBoundingClientRect()) && void 0 !== yb ? yb : null)
      }), [bb]), Wy ? (0, Hy.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Wy.left,
          top: Wy.top,
          width: Wy.width,
          height: Wy.height,
          "--ringColour": bb.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function xb(yb) {
      let {
        slot: bb
      } = yb;
      const [Wy, Uy] = (0, hy.useState)(null);
      return (0, hy.useLayoutEffect)((() => {
        const yb = () => {
          Uy(zb(bb))
        };
        yb();
        const Wy = new MutationObserver(yb),
          hy = document.querySelector(".BottomMiddleElements");
        return hy && Wy.observe(hy, {
          childList: !0,
          subtree: !0
        }), () => {
          Wy.disconnect()
        }
      }), [bb]), Wy ? (0, Vy.createPortal)((0, Hy.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Wy) : null
    }

    function Ay(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Ny.m)(Dy, bb.getView());
      return (0, Hy.jsxs)(Hy.Fragment, {
        children: [Wy.rings.map((yb => (0, Hy.jsx)(Iy, {
          ring: yb
        }, yb.id))), Wy.unseenSlots.map((yb => (0, Hy.jsx)(xb, {
          slot: yb
        }, yb)))]
      })
    }
    const dy = function(yb, bb, Wy, Zy) {
      let cb, {
          localPlayerId: Py
        } = Zy,
        oy = null;
      const By = new mb({
          itemAt: yb => cb.getItemSlot(Py, yb),
          selectedSlot: () => cb.getSelectedInventorySlotI(Py),
          swap: (yb, bb) => {
            cb.swapInventorySlots(yb, bb)
          }
        }),
        Ky = new kb((() => cb.getSelectedInventorySlotI(Py)), (yb => {
          var bb;
          return null === (bb = cb.getItemSlot(Py, yb)) || void 0 === bb ? void 0 : bb.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, fy.d)()
        },
        onCreate: yb => {
          cb = yb, oy = (0, Ty.z)((0, hy.createElement)(hy.Fragment, null, (0, hy.createElement)(py), (0, hy.createElement)(Ay, {
            controller: Ky
          })))
        },
        onClose: () => {
          var yb;
          null === (yb = oy) || void 0 === yb || yb()
        },
        Zb: () => {
          By.Zb(), Ky.Zb()
        },
        onReceivedMessageFromServer: (yb, bb) => {
          "luckyGearUpgrade" === yb && Ky.pU(bb)
        },
        onPlayerChangeBlock: (yb, bb, Wy, Uy, hy, fy) => {
          "Air" !== fy && By.onPlace(fy)
        },
        onPlayerDropItem: (yb, bb, Wy, Uy) => {
          By.onDrop(bb, Uy)
        },
        onPlayerAltAction: (yb, bb, Wy, hy, fy, Zy) => {
          if (!Zy || "Mesh" !== cb.getEntityType(Zy)) return;
          const Py = cb.getEntityName(Zy),
            oy = Object.values(Uy).find((yb => yb.name === Py));
          oy && cb.openShop(yb, !1, oy.shopTab)
        }
      }
    }
  },
  36694: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb
    });
    var Uy = Wy(258),
      hy = Wy(35662),
      fy = Wy(3696);
    const Zy = ["Leaf Bed", "_Leaf Bed Head", ...Uy.Bc.flatMap((yb => [`${yb} Bed`, `_${yb} Bed Head`, `${yb} Strongbed`, `_${yb} Strongbed Head`]))];

    function cb() {
      let yb;
      return {
        onCreate(bb) {
          yb = bb
        },
        altVetoBlocks: Zy,
        onPlayerAttemptAltAction(bb, Wy, Uy, Zy, cb, Py) {
          var oy;
          if ((0, hy.e)(yb.getMetaInfo(cb).rootName) && !yb.isEntityInteractable(Py) && (0, fy.c)(null === (oy = yb.MPy(bb)) || void 0 === oy ? void 0 : oy.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35662: (yb, bb, Wy) => {
    function Uy(yb) {
      return yb.includes("Leaf Bed")
    }

    function hy(yb) {
      return / Bed(?: Head)?(?:\||$)/.test(yb) && !Uy(yb)
    }

    function fy(yb) {
      return yb.includes(" Strongbed")
    }

    function Zy(yb) {
      return Uy(yb) || hy(yb) || fy(yb)
    }
    Wy.d(bb, {
      e: () => Zy,
      f: () => Uy,
      g: () => fy,
      k: () => hy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);