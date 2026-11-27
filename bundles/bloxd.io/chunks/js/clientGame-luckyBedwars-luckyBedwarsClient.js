export const id = 22;
export const ids = [22];
export const modules = {
  37420: (ee, ie, He) => {
    He.d(ie, {
      b: () => pe,
      d: () => Xe,
      h: () => ke,
      j: () => Re
    });
    var ye = He(34867),
      be = He(37424),
      Me = He(37427),
      Ke = He(9446),
      Ue = He(1432),
      Fe = He(59),
      Je = He(77),
      oe = He(1228);

    function Re() {
      var ee;
      return (0, Ue.j)(be.b, (0, be.p)()), (0, oe.jsx)(oe.Fragment, {
        children: null === (ee = (0, be.p)()) || void 0 === ee ? void 0 : ee.content
      })
    }

    function ke(ee) {
      var ie;
      let {
        show: He
      } = ee;
      (0, Ue.j)(be.b, (0, be.p)());
      const Je = null === (ie = (0, be.p)()) || void 0 === ie ? void 0 : ie.menu;
      return (0, Fe.useEffect)((() => {
        var ee;
        He || (null === Je || void 0 === Je || null === (ee = Je.onClose) || void 0 === ee || ee.call(Je), (0, Me.l)())
      }), [He, Je]), (0, Fe.useEffect)((() => He ? (0, Ke.g)(Me.r, Me.e) : void 0), [He]), (0, oe.jsx)(ye.e, {
        showing: He,
        globallyUniqueKey: "clientGameMenu",
        children: null === Je || void 0 === Je ? void 0 : Je.content
      })
    }
    const qe = new Map,
      fe = new Set;

    function Te(ee, ie) {
      ie ? qe.set(ee, ie) : qe.delete(ee);
      for (const He of fe) He()
    }

    function pe(ee) {
      let {
        placement: ie = "bottom"
      } = ee;
      const He = (0, Fe.useRef)(null);
      return (0, Fe.useLayoutEffect)((() => {
        const ee = He.current;
        return Te(ie, ee), () => {
          qe.get(ie) === ee && Te(ie, null)
        }
      }), [ie]), (0, oe.jsx)("div", {
        ref: He,
        id: `clientGameHud-${ie}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xe(ee) {
      let {
        children: ie,
        placement: He = "bottom"
      } = ee;
      const [ye, be] = (0, Fe.useState)((() => {
        var ee;
        return null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null
      }));
      return (0, Fe.useEffect)((() => {
        const ee = () => {
          var ee;
          be(null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null)
        };
        return fe.add(ee), ee(), () => {
          fe.delete(ee)
        }
      }), [He]), ye ? (0, Je.createPortal)(ie, ye) : null
    }
  },
  34867: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(4931),
      be = He(4937);

    function Me(ee) {
      let {
        children: ie,
        showing: He,
        globallyUniqueKey: Me,
        alwaysMountChildren: Ke = !1,
        doGameplayStartStopOnShow: Ue = !0,
        keepsMovement: Fe = !1
      } = ee;
      return (0, be.e)(!0, He, Me, Fe), (0, ye.c)(Ue, He), He || Ke ? ie : null
    }
  },
  9446: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = null;
    const be = function(ee) {
        const ie = {
          cycle: ee,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ye = ie, () => {
          ye === ie && (ye = null)
        }
      },
      Me = () => {
        var ee;
        return null !== (ee = ye) && void 0 !== ee && ee.canCycle() ? ye.cycle : null
      }
  },
  37427: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => Te,
      f: () => pe,
      h: () => Ue,
      j: () => ke,
      l: () => Xe,
      n: () => Re,
      p: () => Be,
      r: () => fe,
      u: () => ze
    });
    var ye = He(18),
      be = He(27);
    const Me = "clientGameInventoryButtonsChanged",
      Ke = new Map;

    function Ue() {
      return [...Ke.values()].sort(((ee, ie) => {
        var He, ye;
        return (null !== (He = ee.order) && void 0 !== He ? He : 0) - (null !== (ye = ie.order) && void 0 !== ye ? ye : 0)
      }))
    }
    let Fe = null;

    function Je(ee) {
      Fe = ee
    }
    let oe = !1;

    function Re(ee) {
      oe = !0;
      try {
        ee.onClick()
      } finally {
        oe = !1
      }
      ee.panel && "clientGame" === ye.e.get("openInGameMenuName") && Je(ee.id)
    }

    function ke() {
      return oe
    }

    function qe() {
      return Ue().filter((ee => ee.panel && !ee.disabled))
    }

    function fe(ee) {
      const ie = qe(),
        He = ie.findIndex((ee => ee.id === Fe));
      return !(He < 0 || ie.length < 2) && (Re(ie[(He + ee + ie.length) % ie.length]), !0)
    }

    function Te() {
      return null !== Fe && qe().length > 1
    }

    function pe() {
      Je(null)
    }

    function Xe() {
      "inventory" !== ye.e.get("openInGameMenuName") && Je(null)
    }

    function ze() {
      const ee = Fe;
      return Je(null), ee
    }

    function Be(ee) {
      return Ke.set(ee.id, ee), be.h.yR(Me, Ue(), !0), () => {
        Ke.get(ee.id) === ee && (Ke.delete(ee.id), be.h.yR(Me, Ue()))
      }
    }
  },
  37424: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => ze,
      h: () => pe,
      l: () => Xe,
      m: () => ke,
      p: () => Je,
      s: () => Te,
      v: () => qe,
      z: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(37427);
    const Ue = "clientGameUiChanged";
    let Fe = null;

    function Je() {
      return Fe
    }

    function oe(ee, ie) {
      const He = {
        content: ee,
        menu: ie
      };
      return Fe = He, be.h.yR(Ue, Fe, !0), () => {
        Fe === He && (Fe = null, fe = !1, pe(), be.h.yR(Ue, null))
      }
    }
    let Re = null;

    function ke() {
      return Re
    }

    function qe(ee) {
      return Re = ee, () => {
        Re === ee && (Re = null)
      }
    }
    let fe = !1;

    function Te() {
      const ee = ye.e.get("openInGameMenuName");
      "clientGame" !== ee && (fe = "inventory" === ee), (0, Ke.j)() || (0, Ke.f)(), (0, Me.w)(Me.c), ye.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pe() {
      Be(!1)
    }

    function Xe() {
      Be(fe)
    }

    function ze() {
      fe && Be(!1)
    }

    function Be(ee) {
      "clientGame" === ye.e.get("openInGameMenuName") && ye.e.set({
        openInGameMenuName: ee ? "inventory" : null
      }), ee || (0, Ke.f)(), fe = !1
    }
  },
  40330: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Qe
    });
    const ye = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var be = He(59),
      Me = He(38876),
      Ke = He(347);
    const Ue = ["Basic", "Rare", "Super"];

    function Fe(ee, ie) {
      return `${"Basic"===ie?"":`${ie} `}${"Simple"===ee?"":`${ee} `}Lucky Block`
    }
    const Je = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((ee => Ue.map((ie => [Fe(ee, ie), {
      category: ee,
      rarity: ie
    }])))));
    Je.keys();

    function oe(ee) {
      return Je.get(ee)
    }
    const Re = "Obsidian",
      ke = ["Cobweb"],
      qe = [...["Red", "Blue", "Green", "Yellow"].map((ee => `${(0,Ke.ab)(ee)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Re, ...ke];

    function fe(ee) {
      return qe.includes(ee)
    }
    var Te = He(610);

    function pe(ee, ie) {
      const He = oe(ee);
      if (He) {
        const ee = oe(ie);
        if (!ee) return;
        const ye = Ue.length - 1 - Ue.indexOf(ee.rarity);
        return (ee.category === He.category ? 0 : 1) * Ue.length + ye
      }
      if (!fe(ee)) return;
      if (ie === ee) return 0;
      const ye = ee => fe(ee) && !ke.includes(ee) && ee !== Re;
      return ye(ee) && ye(ie) ? 1 : void 0
    }
    const Xe = [...Array.from({
      length: Te.u - Te.r
    }, ((ee, ie) => Te.r + ie)), ...Array.from({
      length: Te.r
    }, ((ee, ie) => ie))];
    class ze {
      constructor(ee) {
        this.inventory = ee, this.pending = new Map
      }
      onPlace(ee) {
        var ie;
        const He = this.inventory.selectedSlot(),
          ye = this.inventory.itemAt(He);
        (null === ye || void 0 === ye ? void 0 : ye.name) === ee && (null !== (ie = ye.amount) && void 0 !== ie ? ie : 1) <= 1 && Be(ee) && this.pending.set(He, ee)
      }
      onDrop(ee, ie) {
        ie < Te.r && null === this.inventory.itemAt(ie) && Be(ee) && this.refill(ie, ee)
      }
      YR() {
        const ee = [...this.pending];
        this.pending.clear();
        for (const [ie, He] of ee) null === this.inventory.itemAt(ie) && this.refill(ie, He)
      }
      refill(ee, ie) {
        const He = function(ee, ie, He, ye) {
          let be, Me = 1 / 0;
          for (const Ke of Xe) {
            if (Ke === ie) continue;
            const Ue = ye(Ke);
            if (!Ue || Ke < Te.r && ie !== He) continue;
            const Fe = pe(ee, Ue.name);
            void 0 !== Fe && Fe < Me && (be = Ke, Me = Fe)
          }
          return be
        }(ie, ee, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== He && this.inventory.swap(ee, He)
      }
    }

    function Be(ee) {
      return !!oe(ee) || fe(ee)
    }
    var Ee = He(37424),
      ge = He(77),
      Oe = He(1053),
      de = He.n(Oe);
    const We = "Lucky Clover",
      te = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Ze(ee) {
      return te[ee][0]
    }

    function we(ee) {
      return Ue.filter((ie => ee >= Ze(ie)))
    }
    var De = He(335),
      Pe = He(2532),
      Ae = He(18),
      Ye = He(2733),
      Ve = He(1970),
      ae = He(37420),
      ce = He(1323);
    var xe = He(1228);
    const Le = {
      Basic: Ke.L.whiteUiText,
      Rare: Ke.L.goldUiText,
      Super: Ke.L.cyanUiText
    };
    let Ce = 1;

    function ve() {
      const ee = (0, Pe.i)("currencyAmounts"),
        ie = null === ee || void 0 === ee ? void 0 : ee.Clovers;
      return !ie || ie.hidden ? null : (0, xe.jsx)(ae.d, {
        children: (0, xe.jsx)(ue, {
          amount: ie.amount
        })
      })
    }

    function ue(ee) {
      var ie, He, ye;
      let {
        amount: Me
      } = ee;
      const {
        openEverythingMenuName: Fe
      } = (0, Ae.m)(["openEverythingMenuName"]), Je = (0, Ye.d)(), [oe, Re] = (0, be.useState)(Me), [ke, qe] = (0, be.useState)(null), [fe, Te] = (0, be.useState)(0), [pe, Xe] = (0, be.useState)([]), ze = (0, be.useRef)(Me), Be = (0, be.useRef)(!1), Ee = (0, be.useRef)(null), Oe = Fe === De.r.SHOP;
      (0, be.useEffect)((() => {
        const ee = ze.current;
        if (ze.current = Me, Me <= ee || Oe) return void Re(Me);
        const ie = Je || pe.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (He = Me - ee, ye = !Be.current, He <= 0 || !ye && He < 40 ? 0 : Math.min(4, Math.ceil(He / 30)));
        var He, ye;
        if (Be.current = !0, we(Me).length > we(ee).length && Te(Ce++), ie > 0) {
          const ee = [];
          for (let He = 0; He < ie; He++) ee.push({
            id: Ce++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * He
          });
          Xe((ie => [...ie, ...ee]))
        }
        const be = ie > 0 ? 600 : 0;
        qe({
          id: Ce++,
          delayMs: be
        });
        const Ue = performance.now() + be;
        let Fe = 0;
        const oe = ie => {
          const He = Ke.c.clamp((ie - Ue) / 600, 0, 1);
          Re(Math.round(ee + (Me - ee) * He)), He < 1 && (Fe = requestAnimationFrame(oe))
        };
        return Fe = requestAnimationFrame(oe), () => {
          cancelAnimationFrame(Fe)
        }
      }), [Me, Oe]);
      const te = function(ee) {
          var ie;
          const He = null !== (ie = Ue.find((ie => ee < Ze(ie)))) && void 0 !== ie ? ie : "Super";
          return {
            rarity: He,
            progress: Ke.c.clamp(ee / Ze(He), 0, 1)
          }
        }(oe),
        Pe = we(oe).at(-1);
      return (0, xe.jsxs)(xe.Fragment, {
        children: [(0, xe.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, xe.jsxs)("div", {
            className: de()("LuckyCloverWallet", {
              Capped: Pe && "Basic" !== Pe
            }),
            style: Pe && {
              "--luckyTierColour": Le[Pe]
            },
            children: [(0, xe.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${te.progress})`
              }
            }), fe > 0 && (0, xe.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(ie=null===ke||void 0===ke?void 0:ke.delayMs)&&void 0!==ie?ie:0}ms`
              }
            }, fe), (0, xe.jsx)("div", {
              ref: Ee,
              className: de()("LuckyCloverWalletIcon", ke && "Bounce"),
              style: {
                animationDelay: `${null!==(ye=null===ke||void 0===ke?void 0:ke.delayMs)&&void 0!==ye?ye:0}ms`
              },
              children: (0, xe.jsx)(Ve.c, {
                itemName: We,
                amount: 0
              })
            }, null !== (He = null === ke || void 0 === ke ? void 0 : ke.id) && void 0 !== He ? He : 0), (0, xe.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: oe
            }), Pe && (0, xe.jsx)(ce.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, ge.createPortal)(pe.map((ee => (0, xe.jsx)(me, {
          flyer: ee,
          target: Ee,
          onDone: () => {
            Xe((ie => ie.filter((ie => ie.id !== ee.id))))
          }
        }, ee.id))), document.body)]
      })
    }

    function me(ee) {
      let {
        flyer: ie,
        target: He,
        onDone: ye
      } = ee;
      const Me = (0, be.useRef)(null);
      return (0, be.useEffect)((() => {
        var ee;
        const be = null === (ee = He.current) || void 0 === ee ? void 0 : ee.getBoundingClientRect();
        if (!Me.current || !be) return void ye();
        const {
          x: Ke,
          y: Ue
        } = ie, Fe = Ke + 140 * (Math.random() - .5), Je = Ue - 30 - 40 * Math.random(), oe = Me.current.animate([{
          transform: `translate(${Ke}px, ${Ue}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Fe}px, ${Je}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${be.left}px, ${be.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: ie.delayMs,
          fill: "backwards"
        });
        return oe.onfinish = ye, () => {
          oe.cancel()
        }
      }), []), (0, xe.jsx)("div", {
        ref: Me,
        className: "LuckyCloverFlying",
        children: (0, xe.jsx)(Ve.c, {
          itemName: We,
          amount: 0
        })
      })
    }
    var le = He(27);
    const Se = "luckyGearUpgradeView",
      ne = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function je(ee) {
      var ie;
      return null !== (ie = ne[ee.split(" ")[0]]) && void 0 !== ie ? ie : "#e07bff"
    }
    class se {
      constructor(ee, ie) {
        this.selectedSlot = ee, this.itemAt = ie, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      DR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [He, ye, be] of ee) this.rings.push({
          id: this.nextId++,
          slot: He,
          colour: je(be),
          until: ie + 1200
        }), He !== this.selectedSlot() && this.unseen.set(He, {
          from: ye,
          to: be
        });
        this.yR()
      }
      YR() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const ie = this.rings.filter((ie => ie.until > ee));
        let He = ie.length !== this.rings.length;
        this.rings = ie;
        for (const [ye, {
            from: be,
            to: Me
          }] of this.unseen) {
          const ee = this.itemAt(ye);
          (ye === this.selectedSlot() || ee !== Me && ee !== be) && (this.unseen.delete(ye), He = !0)
        }
        He && this.yR()
      }
      yR() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, le.h.yR(Se, this.view)
      }
    }
    var Ie = He(1432);

    function he(ee) {
      return document.querySelector(`.HotBar [data-inven-idx="${ee}"]`)
    }

    function Ne(ee) {
      let {
        ring: ie
      } = ee;
      const [He, ye] = (0, be.useState)(null);
      return (0, be.useLayoutEffect)((() => {
        var ee, He;
        ye(null !== (ee = null === (He = he(ie.slot)) || void 0 === He ? void 0 : He.getBoundingClientRect()) && void 0 !== ee ? ee : null)
      }), [ie]), He ? (0, xe.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: He.left,
          top: He.top,
          width: He.width,
          height: He.height,
          "--ringColour": ie.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Ge(ee) {
      let {
        slot: ie
      } = ee;
      const [He, ye] = (0, be.useState)(null);
      return (0, be.useLayoutEffect)((() => {
        const ee = () => {
          ye(he(ie))
        };
        ee();
        const He = new MutationObserver(ee),
          be = document.querySelector(".BottomMiddleElements");
        return be && He.observe(be, {
          childList: !0,
          subtree: !0
        }), () => {
          He.disconnect()
        }
      }), [ie]), He ? (0, ge.createPortal)((0, xe.jsx)("div", {
        className: "LuckyGearUnseen"
      }), He) : null
    }

    function re(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Ie.j)(Se, ie.getView());
      return (0, xe.jsxs)(xe.Fragment, {
        children: [He.rings.map((ee => (0, xe.jsx)(Ne, {
          ring: ee
        }, ee.id))), He.unseenSlots.map((ee => (0, xe.jsx)(Ge, {
          slot: ee
        }, ee)))]
      })
    }
    const Qe = function(ee, ie, He, Ke) {
      let Ue, {
          localPlayerId: Fe
        } = Ke,
        Je = null;
      const oe = new ze({
          itemAt: ee => Ue.getItemSlot(Fe, ee),
          selectedSlot: () => Ue.getSelectedInventorySlotI(Fe),
          swap: (ee, ie) => {
            Ue.swapInventorySlots(ee, ie)
          }
        }),
        Re = new se((() => Ue.getSelectedInventorySlotI(Fe)), (ee => {
          var ie;
          return null === (ie = Ue.getItemSlot(Fe, ee)) || void 0 === ie ? void 0 : ie.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Me.e)()
        },
        onCreate: ee => {
          Ue = ee, Je = (0, Ee.z)((0, be.createElement)(be.Fragment, null, (0, be.createElement)(ve), (0, be.createElement)(re, {
            controller: Re
          })))
        },
        onClose: () => {
          var ee;
          null === (ee = Je) || void 0 === ee || ee()
        },
        YR: () => {
          oe.YR(), Re.YR()
        },
        onReceivedMessageFromServer: (ee, ie) => {
          "luckyGearUpgrade" === ee && Re.DR(ie)
        },
        onPlayerChangeBlock: (ee, ie, He, ye, be, Me) => {
          "Air" !== Me && oe.onPlace(Me)
        },
        onPlayerDropItem: (ee, ie, He, ye) => {
          oe.onDrop(ie, ye)
        },
        onPlayerAltAction: (ee, ie, He, be, Me, Ke) => {
          if (!Ke || "Mesh" !== Ue.getEntityType(Ke)) return;
          const Fe = Ue.getEntityName(Ke),
            Je = Object.values(ye).find((ee => ee.name === Fe));
          Je && Ue.openShop(ee, !1, Je.shopTab)
        }
      }
    }
  },
  38876: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue
    });
    var ye = He(347),
      be = He(37770),
      Me = He(4870);
    const Ke = ["Leaf Bed", "_Leaf Bed Head", ...ye.Lc.flatMap((ee => [`${ee} Bed`, `_${ee} Bed Head`, `${ee} Strongbed`, `_${ee} Strongbed Head`]))];

    function Ue() {
      let ee;
      return {
        onCreate(ie) {
          ee = ie
        },
        altVetoBlocks: Ke,
        onPlayerAttemptAltAction(ie, He, ye, Ke, Ue, Fe) {
          var Je;
          if ((0, be.e)(ee.getMetaInfo(Ue).rootName) && !ee.isEntityInteractable(Fe) && (0, Me.e)(null === (Je = ee.Vye(ie)) || void 0 === Je ? void 0 : Je.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37770: (ee, ie, He) => {
    function ye(ee) {
      return ee.includes("Leaf Bed")
    }

    function be(ee) {
      return / Bed(?: Head)?(?:\||$)/.test(ee) && !ye(ee)
    }

    function Me(ee) {
      return ee.includes(" Strongbed")
    }

    function Ke(ee) {
      return ye(ee) || be(ee) || Me(ee)
    }
    He.d(ie, {
      e: () => Ke,
      i: () => ye,
      k: () => Me,
      m: () => be
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);