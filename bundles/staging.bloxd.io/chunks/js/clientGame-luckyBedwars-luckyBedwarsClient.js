export const id = 22;
export const ids = [22];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  41110: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => OO
    });
    const Wd = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Fd = md(66),
      Rd = md(39588),
      Xd = md(405);
    const Kd = ["Basic", "Rare", "Super"];

    function hd(dd, Od) {
      return `${"Basic"===Od?"":`${Od} `}${"Simple"===dd?"":`${dd} `}Lucky Block`
    }
    const vd = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((dd => Kd.map((Od => [hd(dd, Od), {
      category: dd,
      rarity: Od
    }])))));
    vd.keys();

    function Qd(dd) {
      return vd.get(dd)
    }
    const td = "Obsidian",
      od = ["Cobweb"],
      Nd = [...["Red", "Blue", "Green", "Yellow"].map((dd => `${(0,Xd.N)(dd)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", td, ...od];

    function qd(dd) {
      return Nd.includes(dd)
    }
    var Hd = md(701);

    function yd(dd, Od) {
      const md = Qd(dd);
      if (md) {
        const dd = Qd(Od);
        if (!dd) return;
        const Wd = Kd.length - 1 - Kd.indexOf(dd.rarity);
        return (dd.category === md.category ? 0 : 1) * Kd.length + Wd
      }
      if (!qd(dd)) return;
      if (Od === dd) return 0;
      const Wd = dd => qd(dd) && !od.includes(dd) && dd !== td;
      return Wd(dd) && Wd(Od) ? 1 : void 0
    }
    const bd = [...Array.from({
      length: Hd.u - Hd.r
    }, ((dd, Od) => Hd.r + Od)), ...Array.from({
      length: Hd.r
    }, ((dd, Od) => Od))];
    class Td {
      constructor(dd) {
        this.inventory = dd, this.pending = new Map
      }
      onPlace(dd) {
        var Od;
        const md = this.inventory.selectedSlot(),
          Wd = this.inventory.itemAt(md);
        (null === Wd || void 0 === Wd ? void 0 : Wd.name) === dd && (null !== (Od = Wd.amount) && void 0 !== Od ? Od : 1) <= 1 && pd(dd) && this.pending.set(md, dd)
      }
      onDrop(dd, Od) {
        Od < Hd.r && null === this.inventory.itemAt(Od) && pd(dd) && this.refill(Od, dd)
      }
      Et() {
        const dd = [...this.pending];
        this.pending.clear();
        for (const [Od, md] of dd) null === this.inventory.itemAt(Od) && this.refill(Od, md)
      }
      refill(dd, Od) {
        const md = function(dd, Od, md, Wd) {
          let Fd, Rd = 1 / 0;
          for (const Xd of bd) {
            if (Xd === Od) continue;
            const Kd = Wd(Xd);
            if (!Kd || Xd < Hd.r && Od !== md) continue;
            const hd = yd(dd, Kd.name);
            void 0 !== hd && hd < Rd && (Fd = Xd, Rd = hd)
          }
          return Fd
        }(Od, dd, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== md && this.inventory.swap(dd, md)
      }
    }

    function pd(dd) {
      return !!Qd(dd) || qd(dd)
    }
    var Yd = md(3428),
      gd = md(86),
      wd = md(1155),
      Ed = md.n(wd);
    const Jd = "Lucky Clover",
      Ud = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function xd(dd) {
      return Ud[dd][0]
    }

    function Bd(dd) {
      return Kd.filter((Od => dd >= xd(Od)))
    }
    var Sd = md(387),
      sd = md(3403),
      ud = md(29),
      Vd = md(3645),
      Ad = md(2079),
      rd = md(38243),
      Gd = md(1443);
    var nd = md(1341);
    const Ld = {
      Basic: Xd.E.whiteUiText,
      Rare: Xd.E.goldUiText,
      Super: Xd.E.cyanUiText
    };
    let Pd = 1;

    function zd() {
      const dd = (0, sd.j)("currencyAmounts"),
        Od = null === dd || void 0 === dd ? void 0 : dd.Clovers;
      return !Od || Od.hidden ? null : (0, nd.jsx)(rd.h, {
        children: (0, nd.jsx)(cd, {
          amount: Od.amount
        })
      })
    }

    function cd(dd) {
      var Od, md, Wd;
      let {
        amount: Rd
      } = dd;
      const {
        openEverythingMenuName: hd
      } = (0, ud.p)(["openEverythingMenuName"]), vd = (0, Vd.d)(), [Qd, td] = (0, Fd.useState)(Rd), [od, Nd] = (0, Fd.useState)(null), [qd, Hd] = (0, Fd.useState)(0), [yd, bd] = (0, Fd.useState)([]), Td = (0, Fd.useRef)(Rd), pd = (0, Fd.useRef)(!1), Yd = (0, Fd.useRef)(null), wd = hd === Sd.m.SHOP;
      (0, Fd.useEffect)((() => {
        const dd = Td.current;
        if (Td.current = Rd, Rd <= dd || wd) return void td(Rd);
        const Od = vd || yd.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (md = Rd - dd, Wd = !pd.current, md <= 0 || !Wd && md < 40 ? 0 : Math.min(4, Math.ceil(md / 30)));
        var md, Wd;
        if (pd.current = !0, Bd(Rd).length > Bd(dd).length && Hd(Pd++), Od > 0) {
          const dd = [];
          for (let md = 0; md < Od; md++) dd.push({
            id: Pd++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * md
          });
          bd((Od => [...Od, ...dd]))
        }
        const Fd = Od > 0 ? 600 : 0;
        Nd({
          id: Pd++,
          delayMs: Fd
        });
        const Kd = performance.now() + Fd;
        let hd = 0;
        const Qd = Od => {
          const md = Xd.b.clamp((Od - Kd) / 600, 0, 1);
          td(Math.round(dd + (Rd - dd) * md)), md < 1 && (hd = requestAnimationFrame(Qd))
        };
        return hd = requestAnimationFrame(Qd), () => {
          cancelAnimationFrame(hd)
        }
      }), [Rd, wd]);
      const Ud = function(dd) {
          var Od;
          const md = null !== (Od = Kd.find((Od => dd < xd(Od)))) && void 0 !== Od ? Od : "Super";
          return {
            rarity: md,
            progress: Xd.b.clamp(dd / xd(md), 0, 1)
          }
        }(Qd),
        sd = Bd(Qd).at(-1);
      return (0, nd.jsxs)(nd.Fragment, {
        children: [(0, nd.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, nd.jsxs)("div", {
            className: Ed()("LuckyCloverWallet", {
              Capped: sd && "Basic" !== sd
            }),
            style: sd && {
              "--luckyTierColour": Ld[sd]
            },
            children: [(0, nd.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Ud.progress})`
              }
            }), qd > 0 && (0, nd.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Od=null===od||void 0===od?void 0:od.delayMs)&&void 0!==Od?Od:0}ms`
              }
            }, qd), (0, nd.jsx)("div", {
              ref: Yd,
              className: Ed()("LuckyCloverWalletIcon", od && "Bounce"),
              style: {
                animationDelay: `${null!==(Wd=null===od||void 0===od?void 0:od.delayMs)&&void 0!==Wd?Wd:0}ms`
              },
              children: (0, nd.jsx)(Ad.c, {
                itemName: Jd,
                amount: 0
              })
            }, null !== (md = null === od || void 0 === od ? void 0 : od.id) && void 0 !== md ? md : 0), (0, nd.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Qd
            }), sd && (0, nd.jsx)(Gd.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, gd.createPortal)(yd.map((dd => (0, nd.jsx)(jd, {
          flyer: dd,
          target: Yd,
          onDone: () => {
            bd((Od => Od.filter((Od => Od.id !== dd.id))))
          }
        }, dd.id))), document.body)]
      })
    }

    function jd(dd) {
      let {
        flyer: Od,
        target: md,
        onDone: Wd
      } = dd;
      const Rd = (0, Fd.useRef)(null);
      return (0, Fd.useEffect)((() => {
        var dd;
        const Fd = null === (dd = md.current) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
        if (!Rd.current || !Fd) return void Wd();
        const {
          x: Xd,
          y: Kd
        } = Od, hd = Xd + 140 * (Math.random() - .5), vd = Kd - 30 - 40 * Math.random(), Qd = Rd.current.animate([{
          transform: `translate(${Xd}px, ${Kd}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${hd}px, ${vd}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Fd.left}px, ${Fd.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Od.delayMs,
          fill: "backwards"
        });
        return Qd.onfinish = Wd, () => {
          Qd.cancel()
        }
      }), []), (0, nd.jsx)("div", {
        ref: Rd,
        className: "LuckyCloverFlying",
        children: (0, nd.jsx)(Ad.c, {
          itemName: Jd,
          amount: 0
        })
      })
    }
    var Dd = md(32);
    const ed = "luckyGearUpgradeView",
      Id = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function ld(dd) {
      var Od;
      return null !== (Od = Id[dd.split(" ")[0]]) && void 0 !== Od ? Od : "#e07bff"
    }
    class Cd {
      constructor(dd, Od) {
        this.selectedSlot = dd, this.itemAt = Od, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Yt(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [md, Wd, Fd] of dd) this.rings.push({
          id: this.nextId++,
          slot: md,
          colour: ld(Fd),
          until: Od + 1200
        }), md !== this.selectedSlot() && this.unseen.set(md, {
          from: Wd,
          to: Fd
        });
        this.lQ()
      }
      Et() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Od = this.rings.filter((Od => Od.until > dd));
        let md = Od.length !== this.rings.length;
        this.rings = Od;
        for (const [Wd, {
            from: Fd,
            to: Rd
          }] of this.unseen) {
          const dd = this.itemAt(Wd);
          (Wd === this.selectedSlot() || dd !== Rd && dd !== Fd) && (this.unseen.delete(Wd), md = !0)
        }
        md && this.lQ()
      }
      lQ() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Dd.j.lQ(ed, this.view)
      }
    }
    var Zd = md(1566);

    function kd(dd) {
      return document.querySelector(`.HotBar [data-inven-idx="${dd}"]`)
    }

    function fd(dd) {
      let {
        ring: Od
      } = dd;
      const [md, Wd] = (0, Fd.useState)(null);
      return (0, Fd.useLayoutEffect)((() => {
        var dd, md;
        Wd(null !== (dd = null === (md = kd(Od.slot)) || void 0 === md ? void 0 : md.getBoundingClientRect()) && void 0 !== dd ? dd : null)
      }), [Od]), md ? (0, nd.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: md.left,
          top: md.top,
          width: md.width,
          height: md.height,
          "--ringColour": Od.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Md(dd) {
      let {
        slot: Od
      } = dd;
      const [md, Wd] = (0, Fd.useState)(null);
      return (0, Fd.useLayoutEffect)((() => {
        const dd = () => {
          Wd(kd(Od))
        };
        dd();
        const md = new MutationObserver(dd),
          Fd = document.querySelector(".BottomMiddleElements");
        return Fd && md.observe(Fd, {
          childList: !0,
          subtree: !0
        }), () => {
          md.disconnect()
        }
      }), [Od]), md ? (0, gd.createPortal)((0, nd.jsx)("div", {
        className: "LuckyGearUnseen"
      }), md) : null
    }

    function dO(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, Zd.i)(ed, Od.getView());
      return (0, nd.jsxs)(nd.Fragment, {
        children: [md.rings.map((dd => (0, nd.jsx)(fd, {
          ring: dd
        }, dd.id))), md.unseenSlots.map((dd => (0, nd.jsx)(Md, {
          slot: dd
        }, dd)))]
      })
    }
    const OO = function(dd, Od, md, Xd) {
      let Kd, {
          localPlayerId: hd
        } = Xd,
        vd = null;
      const Qd = new Td({
          itemAt: dd => Kd.getItemSlot(hd, dd),
          selectedSlot: () => Kd.getSelectedInventorySlotI(hd),
          swap: (dd, Od) => {
            Kd.swapInventorySlots(dd, Od)
          }
        }),
        td = new Cd((() => Kd.getSelectedInventorySlotI(hd)), (dd => {
          var Od;
          return null === (Od = Kd.getItemSlot(hd, dd)) || void 0 === Od ? void 0 : Od.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Rd.d)()
        },
        onCreate: dd => {
          Kd = dd, vd = (0, Yd.F)((0, Fd.createElement)(Fd.Fragment, null, (0, Fd.createElement)(zd), (0, Fd.createElement)(dO, {
            controller: td
          })))
        },
        onClose: () => {
          var dd;
          null === (dd = vd) || void 0 === dd || dd()
        },
        Et: () => {
          Qd.Et(), td.Et()
        },
        onReceivedMessageFromServer: (dd, Od) => {
          "luckyGearUpgrade" === dd && td.Yt(Od)
        },
        onPlayerChangeBlock: (dd, Od, md, Wd, Fd, Rd) => {
          "Air" !== Rd && Qd.onPlace(Rd)
        },
        onPlayerDropItem: (dd, Od, md, Wd) => {
          Qd.onDrop(Od, Wd)
        },
        onPlayerAltAction: (dd, Od, md, Fd, Rd, Xd) => {
          if (!Xd || "Mesh" !== Kd.getEntityType(Xd)) return;
          const hd = Kd.getEntityName(Xd),
            vd = Object.values(Wd).find((dd => dd.name === hd));
          vd && Kd.openShop(dd, !1, vd.shopTab)
        }
      }
    }
  },
  39588: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd
    });
    var Wd = md(405),
      Fd = md(38474),
      Rd = md(5141);
    const Xd = ["Leaf Bed", "_Leaf Bed Head", ...Wd.zc.flatMap((dd => [`${dd} Bed`, `_${dd} Bed Head`, `${dd} Strongbed`, `_${dd} Strongbed Head`]))];

    function Kd() {
      let dd;
      return {
        onCreate(Od) {
          dd = Od
        },
        altVetoBlocks: Xd,
        onPlayerAttemptAltAction(Od, md, Wd, Xd, Kd, hd) {
          var vd;
          if ((0, Fd.e)(dd.getMetaInfo(Kd).rootName) && !dd.isEntityInteractable(hd) && (0, Rd.h)(null === (vd = dd.NWd(Od)) || void 0 === vd ? void 0 : vd.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38474: (dd, Od, md) => {
    function Wd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Fd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !Wd(dd)
    }

    function Rd(dd) {
      return dd.includes(" Strongbed")
    }

    function Xd(dd) {
      return Wd(dd) || Fd(dd) || Rd(dd)
    }
    md.d(Od, {
      e: () => Xd,
      f: () => Wd,
      j: () => Rd,
      l: () => Fd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);