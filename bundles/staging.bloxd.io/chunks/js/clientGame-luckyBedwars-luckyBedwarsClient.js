export const id = 19;
export const ids = [19];
export const modules = {
  36681: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      e: () => Om,
      f: () => Em,
      i: () => pm
    });
    var hm = fm(34283),
      Am = fm(36686),
      am = fm(36689),
      xm = fm(8654),
      wm = fm(1449),
      Dm = fm(59),
      im = fm(77),
      Rm = fm(1135);

    function pm() {
      var mm;
      return (0, wm.i)(Am.e, (0, Am.p)()), (0, Rm.jsx)(Rm.Fragment, {
        children: null === (mm = (0, Am.p)()) || void 0 === mm ? void 0 : mm.content
      })
    }

    function Em(mm) {
      var Tm;
      let {
        show: fm
      } = mm;
      (0, wm.i)(Am.e, (0, Am.p)());
      const im = null === (Tm = (0, Am.p)()) || void 0 === Tm ? void 0 : Tm.menu;
      return (0, Dm.useEffect)((() => {
        var mm;
        fm || (null === im || void 0 === im || null === (mm = im.onClose) || void 0 === mm || mm.call(im), (0, am.m)())
      }), [fm, im]), (0, Dm.useEffect)((() => fm ? (0, xm.h)(am.u, am.d) : void 0), [fm]), (0, Rm.jsx)(hm.c, {
        showing: fm,
        globallyUniqueKey: "clientGameMenu",
        children: null === im || void 0 === im ? void 0 : im.content
      })
    }

    function om(mm) {
      let {
        placement: Tm = "bottom"
      } = mm;
      return (0, Rm.jsx)("div", {
        id: `clientGameHud-${Tm}`,
        style: {
          display: "contents"
        }
      })
    }

    function Om(mm) {
      let {
        children: Tm,
        placement: fm = "bottom"
      } = mm;
      const [hm, Am] = (0, Dm.useState)(null);
      return (0, Dm.useEffect)((() => {
        Am(document.getElementById(`clientGameHud-${fm}`))
      }), [fm]), hm ? (0, im.createPortal)(Tm, hm) : null
    }
  },
  34283: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(4477),
      Am = fm(4481);

    function am(mm) {
      let {
        children: Tm,
        showing: fm,
        globallyUniqueKey: am,
        alwaysMountChildren: xm = !1,
        doGameplayStartStopOnShow: wm = !0,
        keepsMovement: Dm = !1
      } = mm;
      return (0, Am.d)(!0, fm, am, Dm), (0, hm.c)(wm, fm), fm || xm ? Tm : null
    }
  },
  8654: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => Am
    });
    let hm = null;
    const Am = function(mm) {
        const Tm = {
          cycle: mm,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hm = Tm, () => {
          hm === Tm && (hm = null)
        }
      },
      am = () => {
        var mm;
        return null !== (mm = hm) && void 0 !== mm && mm.canCycle() ? hm.cycle : null
      }
  },
  36689: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Ym,
      e: () => qm,
      h: () => wm,
      i: () => Em,
      m: () => jm,
      p: () => pm,
      r: () => Im,
      u: () => Om,
      v: () => Vm
    });
    var hm = fm(23),
      Am = fm(31);
    const am = "clientGameInventoryButtonsChanged",
      xm = new Map;

    function wm() {
      return [...xm.values()].sort(((mm, Tm) => {
        var fm, hm;
        return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
      }))
    }
    let Dm = null;

    function im(mm) {
      Dm = mm
    }
    let Rm = !1;

    function pm(mm) {
      Rm = !0;
      try {
        mm.onClick()
      } finally {
        Rm = !1
      }
      mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
    }

    function Em() {
      return Rm
    }

    function om() {
      return wm().filter((mm => mm.panel && !mm.disabled))
    }

    function Om(mm) {
      const Tm = om(),
        fm = Tm.findIndex((mm => mm.id === Dm));
      return !(fm < 0 || Tm.length < 2) && (pm(Tm[(fm + mm + Tm.length) % Tm.length]), !0)
    }

    function Ym() {
      return null !== Dm && om().length > 1
    }

    function qm() {
      im(null)
    }

    function jm() {
      "inventory" !== hm.c.get("openInGameMenuName") && im(null)
    }

    function Vm() {
      const mm = Dm;
      return im(null), mm
    }

    function Im(mm) {
      return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
        xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
      }
    }
  },
  36686: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      h: () => qm,
      j: () => jm,
      m: () => Em,
      p: () => im,
      s: () => Ym,
      u: () => om,
      w: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(36689);
    const wm = "clientGameUiChanged";
    let Dm = null;

    function im() {
      return Dm
    }

    function Rm(mm, Tm) {
      const fm = {
        content: mm,
        menu: Tm
      };
      return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
        Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
      }
    }
    let pm = null;

    function Em() {
      return pm
    }

    function om(mm) {
      return pm = mm, () => {
        pm === mm && (pm = null)
      }
    }
    let Om = !1;

    function Ym() {
      const mm = hm.c.get("openInGameMenuName");
      "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qm() {
      Vm(!1)
    }

    function jm() {
      Vm(Om)
    }

    function Vm(mm) {
      "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
        openInGameMenuName: mm ? "inventory" : null
      }), mm || (0, xm.e)(), Om = !1
    }
  },
  39573: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => mT
    });
    const hm = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Am = fm(59),
      am = fm(38096),
      xm = fm(354);
    const wm = ["Basic", "Rare", "Super"];

    function Dm(mm, Tm) {
      return `${"Basic"===Tm?"":`${Tm} `}${"Simple"===mm?"":`${mm} `}Lucky Block`
    }
    const im = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((mm => wm.map((Tm => [Dm(mm, Tm), {
      category: mm,
      rarity: Tm
    }])))));
    im.keys();

    function Rm(mm) {
      return im.get(mm)
    }
    const pm = "Obsidian",
      Em = ["Cobweb"],
      om = [...["Red", "Blue", "Green", "Yellow"].map((mm => `${(0,xm._)(mm)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", pm, ...Em];

    function Om(mm) {
      return om.includes(mm)
    }
    var Ym = fm(653);

    function qm(mm, Tm) {
      const fm = Rm(mm);
      if (fm) {
        const mm = Rm(Tm);
        if (!mm) return;
        const hm = wm.length - 1 - wm.indexOf(mm.rarity);
        return (mm.category === fm.category ? 0 : 1) * wm.length + hm
      }
      if (!Om(mm)) return;
      if (Tm === mm) return 0;
      const hm = mm => Om(mm) && !Em.includes(mm) && mm !== pm;
      return hm(mm) && hm(Tm) ? 1 : void 0
    }
    const jm = [...Array.from({
      length: Ym.o - Ym.n
    }, ((mm, Tm) => Ym.n + Tm)), ...Array.from({
      length: Ym.n
    }, ((mm, Tm) => Tm))];
    class Vm {
      constructor(mm) {
        this.inventory = mm, this.pending = new Map
      }
      onPlace(mm) {
        var Tm;
        const fm = this.inventory.selectedSlot(),
          hm = this.inventory.itemAt(fm);
        (null === hm || void 0 === hm ? void 0 : hm.name) === mm && (null !== (Tm = hm.amount) && void 0 !== Tm ? Tm : 1) <= 1 && Im(mm) && this.pending.set(fm, mm)
      }
      onDrop(mm, Tm) {
        Tm < Ym.n && null === this.inventory.itemAt(Tm) && Im(mm) && this.refill(Tm, mm)
      }
      DE() {
        const mm = [...this.pending];
        this.pending.clear();
        for (const [Tm, fm] of mm) null === this.inventory.itemAt(Tm) && this.refill(Tm, fm)
      }
      refill(mm, Tm) {
        const fm = function(mm, Tm, fm, hm) {
          let Am, am = 1 / 0;
          for (const xm of jm) {
            if (xm === Tm) continue;
            const wm = hm(xm);
            if (!wm || xm < Ym.n && Tm !== fm) continue;
            const Dm = qm(mm, wm.name);
            void 0 !== Dm && Dm < am && (Am = xm, am = Dm)
          }
          return Am
        }(Tm, mm, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== fm && this.inventory.swap(mm, fm)
      }
    }

    function Im(mm) {
      return !!Rm(mm) || Om(mm)
    }
    var Km = fm(36686),
      Qm = fm(77),
      nm = fm(1080),
      Jm = fm.n(nm);
    const cm = "Lucky Clover",
      zm = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Zm(mm) {
      return zm[mm][0]
    }

    function km(mm) {
      return wm.filter((Tm => mm >= Zm(Tm)))
    }
    var bm = fm(339),
      Sm = fm(2391),
      em = fm(23),
      Nm = fm(2570),
      Gm = fm(1893),
      Xm = fm(36681),
      Pm = fm(1089);
    var Hm = fm(1135);
    const ym = {
      Basic: xm.J.whiteUiText,
      Rare: xm.J.goldUiText,
      Super: xm.J.cyanUiText
    };
    let Cm = 1;

    function rm() {
      const mm = (0, Sm.g)("currencyAmounts"),
        Tm = null === mm || void 0 === mm ? void 0 : mm.Clovers;
      return !Tm || Tm.hidden ? null : (0, Hm.jsx)(Xm.e, {
        children: (0, Hm.jsx)(sm, {
          amount: Tm.amount
        })
      })
    }

    function sm(mm) {
      var Tm, fm, hm;
      let {
        amount: am
      } = mm;
      const {
        openEverythingMenuName: Dm
      } = (0, em.m)(["openEverythingMenuName"]), im = (0, Nm.c)(), [Rm, pm] = (0, Am.useState)(am), [Em, om] = (0, Am.useState)(null), [Om, Ym] = (0, Am.useState)(0), [qm, jm] = (0, Am.useState)([]), Vm = (0, Am.useRef)(am), Im = (0, Am.useRef)(!1), Km = (0, Am.useRef)(null), nm = Dm === bm.n.SHOP;
      (0, Am.useEffect)((() => {
        const mm = Vm.current;
        if (Vm.current = am, am <= mm || nm) return void pm(am);
        const Tm = im || qm.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (fm = am - mm, hm = !Im.current, fm <= 0 || !hm && fm < 40 ? 0 : Math.min(4, Math.ceil(fm / 30)));
        var fm, hm;
        if (Im.current = !0, km(am).length > km(mm).length && Ym(Cm++), Tm > 0) {
          const mm = [];
          for (let fm = 0; fm < Tm; fm++) mm.push({
            id: Cm++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * fm
          });
          jm((Tm => [...Tm, ...mm]))
        }
        const Am = Tm > 0 ? 600 : 0;
        om({
          id: Cm++,
          delayMs: Am
        });
        const wm = performance.now() + Am;
        let Dm = 0;
        const Rm = Tm => {
          const fm = xm.c.clamp((Tm - wm) / 600, 0, 1);
          pm(Math.round(mm + (am - mm) * fm)), fm < 1 && (Dm = requestAnimationFrame(Rm))
        };
        return Dm = requestAnimationFrame(Rm), () => {
          cancelAnimationFrame(Dm)
        }
      }), [am, nm]);
      const zm = function(mm) {
          var Tm;
          const fm = null !== (Tm = wm.find((Tm => mm < Zm(Tm)))) && void 0 !== Tm ? Tm : "Super";
          return {
            rarity: fm,
            progress: xm.c.clamp(mm / Zm(fm), 0, 1)
          }
        }(Rm),
        Sm = km(Rm).at(-1);
      return (0, Hm.jsxs)(Hm.Fragment, {
        children: [(0, Hm.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Hm.jsxs)("div", {
            className: Jm()("LuckyCloverWallet", {
              Capped: Sm && "Basic" !== Sm
            }),
            style: Sm && {
              "--luckyTierColour": ym[Sm]
            },
            children: [(0, Hm.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${zm.progress})`
              }
            }), Om > 0 && (0, Hm.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(Tm=null===Em||void 0===Em?void 0:Em.delayMs)&&void 0!==Tm?Tm:0}ms`
              }
            }, Om), (0, Hm.jsx)("div", {
              ref: Km,
              className: Jm()("LuckyCloverWalletIcon", Em && "Bounce"),
              style: {
                animationDelay: `${null!==(hm=null===Em||void 0===Em?void 0:Em.delayMs)&&void 0!==hm?hm:0}ms`
              },
              children: (0, Hm.jsx)(Gm.d, {
                itemName: cm,
                amount: 0
              })
            }, null !== (fm = null === Em || void 0 === Em ? void 0 : Em.id) && void 0 !== fm ? fm : 0), (0, Hm.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Rm
            }), Sm && (0, Hm.jsx)(Pm.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Qm.createPortal)(qm.map((mm => (0, Hm.jsx)(lm, {
          flyer: mm,
          target: Km,
          onDone: () => {
            jm((Tm => Tm.filter((Tm => Tm.id !== mm.id))))
          }
        }, mm.id))), document.body)]
      })
    }

    function lm(mm) {
      let {
        flyer: Tm,
        target: fm,
        onDone: hm
      } = mm;
      const am = (0, Am.useRef)(null);
      return (0, Am.useEffect)((() => {
        var mm;
        const Am = null === (mm = fm.current) || void 0 === mm ? void 0 : mm.getBoundingClientRect();
        if (!am.current || !Am) return void hm();
        const {
          x: xm,
          y: wm
        } = Tm, Dm = xm + 140 * (Math.random() - .5), im = wm - 30 - 40 * Math.random(), Rm = am.current.animate([{
          transform: `translate(${xm}px, ${wm}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${Dm}px, ${im}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Am.left}px, ${Am.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: Tm.delayMs,
          fill: "backwards"
        });
        return Rm.onfinish = hm, () => {
          Rm.cancel()
        }
      }), []), (0, Hm.jsx)("div", {
        ref: am,
        className: "LuckyCloverFlying",
        children: (0, Hm.jsx)(Gm.d, {
          itemName: cm,
          amount: 0
        })
      })
    }
    var Mm = fm(31);
    const um = "luckyGearUpgradeView",
      Bm = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Lm(mm) {
      var Tm;
      return null !== (Tm = Bm[mm.split(" ")[0]]) && void 0 !== Tm ? Tm : "#e07bff"
    }
    class tm {
      constructor(mm, Tm) {
        this.selectedSlot = mm, this.itemAt = Tm, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      rO(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [fm, hm, Am] of mm) this.rings.push({
          id: this.nextId++,
          slot: fm,
          colour: Lm(Am),
          until: Tm + 1200
        }), fm !== this.selectedSlot() && this.unseen.set(fm, {
          from: hm,
          to: Am
        });
        this.gp()
      }
      DE() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const Tm = this.rings.filter((Tm => Tm.until > mm));
        let fm = Tm.length !== this.rings.length;
        this.rings = Tm;
        for (const [hm, {
            from: Am,
            to: am
          }] of this.unseen) {
          const mm = this.itemAt(hm);
          (hm === this.selectedSlot() || mm !== am && mm !== Am) && (this.unseen.delete(hm), fm = !0)
        }
        fm && this.gp()
      }
      gp() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Mm.j.gp(um, this.view)
      }
    }
    var Um = fm(1449);

    function dm(mm) {
      return document.querySelector(`.HotBar [data-inven-idx="${mm}"]`)
    }

    function gm(mm) {
      let {
        ring: Tm
      } = mm;
      const [fm, hm] = (0, Am.useState)(null);
      return (0, Am.useLayoutEffect)((() => {
        var mm, fm;
        hm(null !== (mm = null === (fm = dm(Tm.slot)) || void 0 === fm ? void 0 : fm.getBoundingClientRect()) && void 0 !== mm ? mm : null)
      }), [Tm]), fm ? (0, Hm.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: fm.left,
          top: fm.top,
          width: fm.width,
          height: fm.height,
          "--ringColour": Tm.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Wm(mm) {
      let {
        slot: Tm
      } = mm;
      const [fm, hm] = (0, Am.useState)(null);
      return (0, Am.useLayoutEffect)((() => {
        const mm = () => {
          hm(dm(Tm))
        };
        mm();
        const fm = new MutationObserver(mm),
          Am = document.querySelector(".BottomMiddleElements");
        return Am && fm.observe(Am, {
          childList: !0,
          subtree: !0
        }), () => {
          fm.disconnect()
        }
      }), [Tm]), fm ? (0, Qm.createPortal)((0, Hm.jsx)("div", {
        className: "LuckyGearUnseen"
      }), fm) : null
    }

    function Fm(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, Um.i)(um, Tm.getView());
      return (0, Hm.jsxs)(Hm.Fragment, {
        children: [fm.rings.map((mm => (0, Hm.jsx)(gm, {
          ring: mm
        }, mm.id))), fm.unseenSlots.map((mm => (0, Hm.jsx)(Wm, {
          slot: mm
        }, mm)))]
      })
    }
    const mT = function(mm, Tm, fm, xm) {
      let wm, {
          localPlayerId: Dm
        } = xm,
        im = null;
      const Rm = new Vm({
          itemAt: mm => wm.getItemSlot(Dm, mm),
          selectedSlot: () => wm.getSelectedInventorySlotI(Dm),
          swap: (mm, Tm) => {
            wm.swapInventorySlots(mm, Tm)
          }
        }),
        pm = new tm((() => wm.getSelectedInventorySlotI(Dm)), (mm => {
          var Tm;
          return null === (Tm = wm.getItemSlot(Dm, mm)) || void 0 === Tm ? void 0 : Tm.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, am.e)()
        },
        onCreate: mm => {
          wm = mm, im = (0, Km.w)((0, Am.createElement)(Am.Fragment, null, (0, Am.createElement)(rm), (0, Am.createElement)(Fm, {
            controller: pm
          })))
        },
        onClose: () => {
          var mm;
          null === (mm = im) || void 0 === mm || mm()
        },
        DE: () => {
          Rm.DE(), pm.DE()
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          "luckyGearUpgrade" === mm && pm.rO(Tm)
        },
        onPlayerChangeBlock: (mm, Tm, fm, hm, Am, am) => {
          "Air" !== am && Rm.onPlace(am)
        },
        onPlayerDropItem: (mm, Tm, fm, hm) => {
          Rm.onDrop(Tm, hm)
        },
        onPlayerAltAction: (mm, Tm, fm, Am, am, xm) => {
          if (!xm || "Mesh" !== wm.getEntityType(xm)) return;
          const Dm = wm.getEntityName(xm),
            im = Object.values(hm).find((mm => mm.name === Dm));
          im && wm.openShop(mm, !1, im.shopTab)
        }
      }
    }
  },
  38096: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm
    });
    var hm = fm(354),
      Am = fm(37039),
      am = fm(4413);
    const xm = ["Leaf Bed", "_Leaf Bed Head", ...hm.Bc.flatMap((mm => [`${mm} Bed`, `_${mm} Bed Head`, `${mm} Strongbed`, `_${mm} Strongbed Head`]))];

    function wm() {
      let mm;
      return {
        onCreate(Tm) {
          mm = Tm
        },
        altVetoBlocks: xm,
        onPlayerAttemptAltAction(Tm, fm, hm, xm, wm, Dm) {
          var im;
          if ((0, Am.b)(mm.getMetaInfo(wm).rootName) && !mm.isEntityInteractable(Dm) && (0, am.e)(null === (im = mm.MTm(Tm)) || void 0 === im ? void 0 : im.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37039: (mm, Tm, fm) => {
    function hm(mm) {
      return mm.includes("Leaf Bed")
    }

    function Am(mm) {
      return / Bed(?: Head)?(?:\||$)/.test(mm) && !hm(mm)
    }

    function am(mm) {
      return mm.includes(" Strongbed")
    }

    function xm(mm) {
      return hm(mm) || Am(mm) || am(mm)
    }
    fm.d(Tm, {
      b: () => xm,
      f: () => hm,
      j: () => am,
      l: () => Am
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);