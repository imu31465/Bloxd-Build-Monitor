export const id = 22;
export const ids = [22];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  41123: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => ur
    });
    const Zr = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Wr = Qr(72),
      ar = Qr(39525),
      jr = Qr(379);
    const Ir = ["Basic", "Rare", "Super"];

    function fr(rr, Sr) {
      return `${"Basic"===Sr?"":`${Sr} `}${"Simple"===rr?"":`${rr} `}Lucky Block`
    }
    const Er = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((rr => Ir.map((Sr => [fr(rr, Sr), {
      category: rr,
      rarity: Sr
    }])))));
    Er.keys();

    function pr(rr) {
      return Er.get(rr)
    }
    const xr = "Obsidian",
      mr = ["Cobweb"],
      Nr = [...["Red", "Blue", "Green", "Yellow"].map((rr => `${(0,jr.U)(rr)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", xr, ...mr];

    function Ur(rr) {
      return Nr.includes(rr)
    }
    var tr = Qr(688);

    function hr(rr, Sr) {
      const Qr = pr(rr);
      if (Qr) {
        const rr = pr(Sr);
        if (!rr) return;
        const Zr = Ir.length - 1 - Ir.indexOf(rr.rarity);
        return (rr.category === Qr.category ? 0 : 1) * Ir.length + Zr
      }
      if (!Ur(rr)) return;
      if (Sr === rr) return 0;
      const Zr = rr => Ur(rr) && !mr.includes(rr) && rr !== xr;
      return Zr(rr) && Zr(Sr) ? 1 : void 0
    }
    const zr = [...Array.from({
      length: tr.t - tr.p
    }, ((rr, Sr) => tr.p + Sr)), ...Array.from({
      length: tr.p
    }, ((rr, Sr) => Sr))];
    class Yr {
      constructor(rr) {
        this.inventory = rr, this.pending = new Map
      }
      onPlace(rr) {
        var Sr;
        const Qr = this.inventory.selectedSlot(),
          Zr = this.inventory.itemAt(Qr);
        (null === Zr || void 0 === Zr ? void 0 : Zr.name) === rr && (null !== (Sr = Zr.amount) && void 0 !== Sr ? Sr : 1) <= 1 && nr(rr) && this.pending.set(Qr, rr)
      }
      onDrop(rr, Sr) {
        Sr < tr.p && null === this.inventory.itemAt(Sr) && nr(rr) && this.refill(Sr, rr)
      }
      lx() {
        const rr = [...this.pending];
        this.pending.clear();
        for (const [Sr, Qr] of rr) null === this.inventory.itemAt(Sr) && this.refill(Sr, Qr)
      }
      refill(rr, Sr) {
        const Qr = function(rr, Sr, Qr, Zr) {
          let Wr, ar = 1 / 0;
          for (const jr of zr) {
            if (jr === Sr) continue;
            const Ir = Zr(jr);
            if (!Ir || jr < tr.p && Sr !== Qr) continue;
            const fr = hr(rr, Ir.name);
            void 0 !== fr && fr < ar && (Wr = jr, ar = fr)
          }
          return Wr
        }(Sr, rr, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== Qr && this.inventory.swap(rr, Qr)
      }
    }

    function nr(rr) {
      return !!pr(rr) || Ur(rr)
    }
    var er = Qr(3425),
      Kr = Qr(92),
      yr = Qr(1155),
      Br = Qr.n(yr);
    const Tr = "Lucky Clover",
      vr = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Or(rr) {
      return vr[rr][0]
    }

    function Lr(rr) {
      return Ir.filter((Sr => rr >= Or(Sr)))
    }
    var lr = Qr(360),
      Xr = Qr(3404),
      Pr = Qr(26),
      Hr = Qr(3640),
      qr = Qr(2075),
      Rr = Qr(38154),
      gr = Qr(1448);
    var Cr = Qr(1338);
    const Mr = {
      Basic: jr.K.whiteUiText,
      Rare: jr.K.goldUiText,
      Super: jr.K.cyanUiText
    };
    let Gr = 1;

    function kr() {
      const rr = (0, Xr.l)("currencyAmounts"),
        Sr = null === rr || void 0 === rr ? void 0 : rr.Clovers;
      return !Sr || Sr.hidden ? null : (0, Cr.jsx)(Rr.d, {
        children: (0, Cr.jsx)(Ar, {
          amount: Sr.amount
        })
      })
    }

    function Ar(rr) {
      var Sr, Qr, Zr;
      let {
        amount: ar
      } = rr;
      const {
        openEverythingMenuName: fr
      } = (0, Pr.n)(["openEverythingMenuName"]), Er = (0, Hr.b)(), [pr, xr] = (0, Wr.useState)(ar), [mr, Nr] = (0, Wr.useState)(null), [Ur, tr] = (0, Wr.useState)(0), [hr, zr] = (0, Wr.useState)([]), Yr = (0, Wr.useRef)(ar), nr = (0, Wr.useRef)(!1), er = (0, Wr.useRef)(null), yr = fr === lr.q.SHOP;
      (0, Wr.useEffect)((() => {
        const rr = Yr.current;
        if (Yr.current = ar, ar <= rr || yr) return void xr(ar);
        const Sr = Er || hr.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (Qr = ar - rr, Zr = !nr.current, Qr <= 0 || !Zr && Qr < 40 ? 0 : Math.min(4, Math.ceil(Qr / 30)));
        var Qr, Zr;
        if (nr.current = !0, Lr(ar).length > Lr(rr).length && tr(Gr++), Sr > 0) {
          const rr = [];
          for (let Qr = 0; Qr < Sr; Qr++) rr.push({
            id: Gr++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * Qr
          });
          zr((Sr => [...Sr, ...rr]))
        }
        const Wr = Sr > 0 ? 600 : 0;
        Nr({
          id: Gr++,
          delayMs: Wr
        });
        const Ir = performance.now() + Wr;
        let fr = 0;
        const pr = Sr => {
          const Qr = jr.b.clamp((Sr - Ir) / 600, 0, 1);
          xr(Math.round(rr + (ar - rr) * Qr)), Qr < 1 && (fr = requestAnimationFrame(pr))
        };
        return fr = requestAnimationFrame(pr), () => {
          cancelAnimationFrame(fr)
        }
      }), [ar, yr]);
      const vr = function(rr) {
          var Sr;
          const Qr = null !== (Sr = Ir.find((Sr => rr < Or(Sr)))) && void 0 !== Sr ? Sr : "Super";
          return {
            rarity: Qr,
            progress: jr.b.clamp(rr / Or(Qr), 0, 1)
          }
        }(pr),
        Xr = Lr(pr).at(-1);
      return (0, Cr.jsxs)(Cr.Fragment, {
        children: [(0, Cr.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Cr.jsxs)("div", {
            className: Br()("LuckyCloverWallet", {
              Capped: Xr && "Basic" !== Xr
            }),
            style: Xr && {
              "--luckyTierColour": Mr[Xr]
            },
            children: [(0, Cr.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${vr.progress})`
              }
            }), Ur > 0 && (0, Cr.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Sr=null===mr||void 0===mr?void 0:mr.delayMs)&&void 0!==Sr?Sr:0}ms`
              }
            }, Ur), (0, Cr.jsx)("div", {
              ref: er,
              className: Br()("LuckyCloverWalletIcon", mr && "Bounce"),
              style: {
                animationDelay: `${null!==(Zr=null===mr||void 0===mr?void 0:mr.delayMs)&&void 0!==Zr?Zr:0}ms`
              },
              children: (0, Cr.jsx)(qr.d, {
                itemName: Tr,
                amount: 0
              })
            }, null !== (Qr = null === mr || void 0 === mr ? void 0 : mr.id) && void 0 !== Qr ? Qr : 0), (0, Cr.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: pr
            }), Xr && (0, Cr.jsx)(gr.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Kr.createPortal)(hr.map((rr => (0, Cr.jsx)(Vr, {
          flyer: rr,
          target: er,
          onDone: () => {
            zr((Sr => Sr.filter((Sr => Sr.id !== rr.id))))
          }
        }, rr.id))), document.body)]
      })
    }

    function Vr(rr) {
      let {
        flyer: Sr,
        target: Qr,
        onDone: Zr
      } = rr;
      const ar = (0, Wr.useRef)(null);
      return (0, Wr.useEffect)((() => {
        var rr;
        const Wr = null === (rr = Qr.current) || void 0 === rr ? void 0 : rr.getBoundingClientRect();
        if (!ar.current || !Wr) return void Zr();
        const {
          x: jr,
          y: Ir
        } = Sr, fr = jr + 140 * (Math.random() - .5), Er = Ir - 30 - 40 * Math.random(), pr = ar.current.animate([{
          transform: `translate(${jr}px, ${Ir}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${fr}px, ${Er}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Wr.left}px, ${Wr.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Sr.delayMs,
          fill: "backwards"
        });
        return pr.onfinish = Zr, () => {
          pr.cancel()
        }
      }), []), (0, Cr.jsx)("div", {
        ref: ar,
        className: "LuckyCloverFlying",
        children: (0, Cr.jsx)(qr.d, {
          itemName: Tr,
          amount: 0
        })
      })
    }
    var ir = Qr(34);
    const wr = "luckyGearUpgradeView",
      cr = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Fr(rr) {
      var Sr;
      return null !== (Sr = cr[rr.split(" ")[0]]) && void 0 !== Sr ? Sr : "#e07bff"
    }
    class or {
      constructor(rr, Sr) {
        this.selectedSlot = rr, this.itemAt = Sr, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      vx(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [Qr, Zr, Wr] of rr) this.rings.push({
          id: this.nextId++,
          slot: Qr,
          colour: Fr(Wr),
          until: Sr + 1200
        }), Qr !== this.selectedSlot() && this.unseen.set(Qr, {
          from: Zr,
          to: Wr
        });
        this.Jp()
      }
      lx() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Sr = this.rings.filter((Sr => Sr.until > rr));
        let Qr = Sr.length !== this.rings.length;
        this.rings = Sr;
        for (const [Zr, {
            from: Wr,
            to: ar
          }] of this.unseen) {
          const rr = this.itemAt(Zr);
          (Zr === this.selectedSlot() || rr !== ar && rr !== Wr) && (this.unseen.delete(Zr), Qr = !0)
        }
        Qr && this.Jp()
      }
      Jp() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, ir.i.Jp(wr, this.view)
      }
    }
    var br = Qr(1573);

    function Jr(rr) {
      return document.querySelector(`.HotBar [data-inven-idx="${rr}"]`)
    }

    function Dr(rr) {
      let {
        ring: Sr
      } = rr;
      const [Qr, Zr] = (0, Wr.useState)(null);
      return (0, Wr.useLayoutEffect)((() => {
        var rr, Qr;
        Zr(null !== (rr = null === (Qr = Jr(Sr.slot)) || void 0 === Qr ? void 0 : Qr.getBoundingClientRect()) && void 0 !== rr ? rr : null)
      }), [Sr]), Qr ? (0, Cr.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: Qr.left,
          top: Qr.top,
          width: Qr.width,
          height: Qr.height,
          "--ringColour": Sr.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function dr(rr) {
      let {
        slot: Sr
      } = rr;
      const [Qr, Zr] = (0, Wr.useState)(null);
      return (0, Wr.useLayoutEffect)((() => {
        const rr = () => {
          Zr(Jr(Sr))
        };
        rr();
        const Qr = new MutationObserver(rr),
          Wr = document.querySelector(".BottomMiddleElements");
        return Wr && Qr.observe(Wr, {
          childList: !0,
          subtree: !0
        }), () => {
          Qr.disconnect()
        }
      }), [Sr]), Qr ? (0, Kr.createPortal)((0, Cr.jsx)("div", {
        className: "LuckyGearUnseen"
      }), Qr) : null
    }

    function sr(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, br.g)(wr, Sr.getView());
      return (0, Cr.jsxs)(Cr.Fragment, {
        children: [Qr.rings.map((rr => (0, Cr.jsx)(Dr, {
          ring: rr
        }, rr.id))), Qr.unseenSlots.map((rr => (0, Cr.jsx)(dr, {
          slot: rr
        }, rr)))]
      })
    }
    const ur = function(rr, Sr, Qr, jr) {
      let Ir, {
          localPlayerId: fr
        } = jr,
        Er = null;
      const pr = new Yr({
          itemAt: rr => Ir.getItemSlot(fr, rr),
          selectedSlot: () => Ir.getSelectedInventorySlotI(fr),
          swap: (rr, Sr) => {
            Ir.swapInventorySlots(rr, Sr)
          }
        }),
        xr = new or((() => Ir.getSelectedInventorySlotI(fr)), (rr => {
          var Sr;
          return null === (Sr = Ir.getItemSlot(fr, rr)) || void 0 === Sr ? void 0 : Sr.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, ar.b)()
        },
        onCreate: rr => {
          Ir = rr, Er = (0, er.H)((0, Wr.createElement)(Wr.Fragment, null, (0, Wr.createElement)(kr), (0, Wr.createElement)(sr, {
            controller: xr
          })))
        },
        onClose: () => {
          var rr;
          null === (rr = Er) || void 0 === rr || rr()
        },
        lx: () => {
          pr.lx(), xr.lx()
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          "luckyGearUpgrade" === rr && xr.vx(Sr)
        },
        onPlayerChangeBlock: (rr, Sr, Qr, Zr, Wr, ar) => {
          "Air" !== ar && pr.onPlace(ar)
        },
        onPlayerDropItem: (rr, Sr, Qr, Zr) => {
          pr.onDrop(Sr, Zr)
        },
        onPlayerAltAction: (rr, Sr, Qr, Wr, ar, jr) => {
          if (!jr || "Mesh" !== Ir.getEntityType(jr)) return;
          const fr = Ir.getEntityName(jr),
            Er = Object.values(Zr).find((rr => rr.name === fr));
          Er && Ir.openShop(rr, !1, Er.shopTab)
        }
      }
    }
  },
  39525: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir
    });
    var Zr = Qr(379),
      Wr = Qr(38397),
      ar = Qr(5229);
    const jr = ["Leaf Bed", "_Leaf Bed Head", ...Zr.Cc.flatMap((rr => [`${rr} Bed`, `_${rr} Bed Head`, `${rr} Strongbed`, `_${rr} Strongbed Head`]))];

    function Ir() {
      let rr;
      return {
        onCreate(Sr) {
          rr = Sr
        },
        altVetoBlocks: jr,
        onPlayerAttemptAltAction(Sr, Qr, Zr, jr, Ir, fr) {
          var Er;
          if ((0, Wr.c)(rr.getMetaInfo(Ir).rootName) && !rr.isEntityInteractable(fr) && (0, ar.h)(null === (Er = rr.XQr(Sr)) || void 0 === Er ? void 0 : Er.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38397: (rr, Sr, Qr) => {
    function Zr(rr) {
      return rr.includes("Leaf Bed")
    }

    function Wr(rr) {
      return / Bed(?: Head)?(?:\||$)/.test(rr) && !Zr(rr)
    }

    function ar(rr) {
      return rr.includes(" Strongbed")
    }

    function jr(rr) {
      return Zr(rr) || Wr(rr) || ar(rr)
    }
    Qr.d(Sr, {
      c: () => jr,
      f: () => Zr,
      h: () => ar,
      i: () => Wr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);