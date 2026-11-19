export const id = 19;
export const ids = [19];
export const modules = {
  36066: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz,
      d: () => Zz,
      g: () => dz,
      h: () => pz
    });
    var Ez = bz(8982),
      nz = bz(36071),
      iz = bz(36080),
      lz = bz(8378),
      Mz = bz(1417),
      tz = bz(56),
      Hz = bz(79),
      Oz = bz(1089);

    function pz() {
      var zz;
      return (0, Mz.h)(nz.e, (0, nz.o)()), (0, Oz.jsx)(Oz.Fragment, {
        children: null === (zz = (0, nz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function dz(zz) {
      var uz;
      let {
        show: bz
      } = zz;
      (0, Mz.h)(nz.e, (0, nz.o)());
      const Hz = null === (uz = (0, nz.o)()) || void 0 === uz ? void 0 : uz.menu;
      return (0, tz.useEffect)((() => {
        var zz;
        bz || (null === Hz || void 0 === Hz || null === (zz = Hz.onClose) || void 0 === zz || zz.call(Hz), (0, iz.j)())
      }), [bz, Hz]), (0, tz.useEffect)((() => bz ? (0, lz.e)(iz.u, iz.d) : void 0), [bz]), (0, Oz.jsx)(Ez.d, {
        showing: bz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hz || void 0 === Hz ? void 0 : Hz.content
      })
    }

    function Fz(zz) {
      let {
        placement: uz = "bottom"
      } = zz;
      return (0, Oz.jsx)("div", {
        id: `clientGameHud-${uz}`,
        style: {
          display: "contents"
        }
      })
    }

    function Zz(zz) {
      let {
        children: uz,
        placement: bz = "bottom"
      } = zz;
      const [Ez, nz] = (0, tz.useState)(null);
      return (0, tz.useEffect)((() => {
        nz(document.getElementById(`clientGameHud-${bz}`))
      }), [bz]), Ez ? (0, Hz.createPortal)(uz, Ez) : null
    }
  },
  8982: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(4298),
      nz = bz(4300);

    function iz(zz) {
      let {
        children: uz,
        showing: bz,
        globallyUniqueKey: iz,
        alwaysMountChildren: lz = !1,
        doGameplayStartStopOnShow: Mz = !0,
        keepsMovement: tz = !1
      } = zz;
      return (0, nz.e)(!0, bz, iz, tz), (0, Ez.d)(Mz, bz), bz || lz ? uz : null
    }
  },
  8378: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      e: () => nz
    });
    let Ez = null;
    const nz = function(zz) {
        const uz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ez = uz, () => {
          Ez === uz && (Ez = null)
        }
      },
      iz = () => {
        var zz;
        return null !== (zz = Ez) && void 0 !== zz && zz.canCycle() ? Ez.cycle : null
      }
  },
  36080: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => Rz,
      g: () => Kz,
      h: () => Mz,
      i: () => dz,
      j: () => wz,
      n: () => pz,
      q: () => fz,
      u: () => Zz,
      x: () => Xz
    });
    var Ez = bz(20),
      nz = bz(22);
    const iz = "clientGameInventoryButtonsChanged",
      lz = new Map;

    function Mz() {
      return [...lz.values()].sort(((zz, uz) => {
        var bz, Ez;
        return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
      }))
    }
    let tz = null;

    function Hz(zz) {
      tz = zz
    }
    let Oz = !1;

    function pz(zz) {
      Oz = !0;
      try {
        zz.onClick()
      } finally {
        Oz = !1
      }
      zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
    }

    function dz() {
      return Oz
    }

    function Fz() {
      return Mz().filter((zz => zz.panel && !zz.disabled))
    }

    function Zz(zz) {
      const uz = Fz(),
        bz = uz.findIndex((zz => zz.id === tz));
      return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
    }

    function Rz() {
      return null !== tz && Fz().length > 1
    }

    function Kz() {
      Hz(null)
    }

    function wz() {
      "inventory" !== Ez.e.get("openInGameMenuName") && Hz(null)
    }

    function Xz() {
      const zz = tz;
      return Hz(null), zz
    }

    function fz(zz) {
      return lz.set(zz.id, zz), nz.k.sK(iz, Mz(), !0), () => {
        lz.get(zz.id) === zz && (lz.delete(zz.id), nz.k.sK(iz, Mz()))
      }
    }
  },
  36071: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => Kz,
      l: () => wz,
      n: () => dz,
      o: () => Hz,
      p: () => Rz,
      t: () => Fz,
      x: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(36080);
    const Mz = "clientGameUiChanged";
    let tz = null;

    function Hz() {
      return tz
    }

    function Oz(zz, uz) {
      const bz = {
        content: zz,
        menu: uz
      };
      return tz = bz, nz.k.sK(Mz, tz, !0), () => {
        tz === bz && (tz = null, Zz = !1, Kz(), nz.k.sK(Mz, null))
      }
    }
    let pz = null;

    function dz() {
      return pz
    }

    function Fz(zz) {
      return pz = zz, () => {
        pz === zz && (pz = null)
      }
    }
    let Zz = !1;

    function Rz() {
      const zz = Ez.e.get("openInGameMenuName");
      "clientGame" !== zz && (Zz = "inventory" === zz), (0, lz.i)() || (0, lz.g)(), (0, iz.m)(iz.b), Ez.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Kz() {
      Xz(!1)
    }

    function wz() {
      Xz(Zz)
    }

    function Xz(zz) {
      "clientGame" === Ez.e.get("openInGameMenuName") && Ez.e.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, lz.g)(), Zz = !1
    }
  },
  38803: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => kz
    });
    const Ez = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var nz = bz(56),
      iz = bz(37452),
      lz = bz(328);
    const Mz = ["Basic", "Rare", "Super"];

    function tz(zz, uz) {
      return `${"Basic"===uz?"":`${uz} `}${"Simple"===zz?"":`${zz} `}Lucky Block`
    }
    const Hz = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((zz => Mz.map((uz => [tz(zz, uz), {
      category: zz,
      rarity: uz
    }])))));
    Hz.keys();

    function Oz(zz) {
      return Hz.get(zz)
    }
    const pz = "Obsidian",
      dz = ["Cobweb"],
      Fz = [...["Red", "Blue", "Green", "Yellow"].map((zz => `${(0,lz.bb)(zz)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", pz, ...dz];

    function Zz(zz) {
      return Fz.includes(zz)
    }
    var Rz = bz(588);

    function Kz(zz, uz) {
      const bz = Oz(zz);
      if (bz) {
        const zz = Oz(uz);
        if (!zz) return;
        const Ez = Mz.length - 1 - Mz.indexOf(zz.rarity);
        return (zz.category === bz.category ? 0 : 1) * Mz.length + Ez
      }
      if (!Zz(zz)) return;
      if (uz === zz) return 0;
      const Ez = zz => Zz(zz) && !dz.includes(zz) && zz !== pz;
      return Ez(zz) && Ez(uz) ? 1 : void 0
    }
    const wz = [...Array.from({
      length: Rz.n - Rz.l
    }, ((zz, uz) => Rz.l + uz)), ...Array.from({
      length: Rz.l
    }, ((zz, uz) => uz))];
    class Xz {
      constructor(zz) {
        this.inventory = zz, this.pending = new Map
      }
      onPlace(zz) {
        var uz;
        const bz = this.inventory.selectedSlot(),
          Ez = this.inventory.itemAt(bz);
        (null === Ez || void 0 === Ez ? void 0 : Ez.name) === zz && (null !== (uz = Ez.amount) && void 0 !== uz ? uz : 1) <= 1 && fz(zz) && this.pending.set(bz, zz)
      }
      onDrop(zz, uz) {
        uz < Rz.l && null === this.inventory.itemAt(uz) && fz(zz) && this.refill(uz, zz)
      }
      sd() {
        const zz = [...this.pending];
        this.pending.clear();
        for (const [uz, bz] of zz) null === this.inventory.itemAt(uz) && this.refill(uz, bz)
      }
      refill(zz, uz) {
        const bz = function(zz, uz, bz, Ez) {
          let nz, iz = 1 / 0;
          for (const lz of wz) {
            if (lz === uz) continue;
            const Mz = Ez(lz);
            if (!Mz || lz < Rz.l && uz !== bz) continue;
            const tz = Kz(zz, Mz.name);
            void 0 !== tz && tz < iz && (nz = lz, iz = tz)
          }
          return nz
        }(uz, zz, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== bz && this.inventory.swap(zz, bz)
      }
    }

    function fz(zz) {
      return !!Oz(zz) || Zz(zz)
    }
    var sz = bz(36071),
      rz = bz(79),
      oz = bz(1038),
      Nz = bz.n(oz);
    const vz = "Lucky Clover",
      xz = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Jz(zz) {
      return xz[zz][0]
    }

    function Az(zz) {
      return Mz.filter((uz => zz >= Jz(uz)))
    }
    var Tz = bz(316),
      Lz = bz(2313),
      Pz = bz(20),
      Gz = bz(2433),
      az = bz(1856),
      Vz = bz(36066),
      mz = bz(1047);
    var qz = bz(1089);
    const hz = {
      Basic: lz.N.whiteUiText,
      Rare: lz.N.goldUiText,
      Super: lz.N.cyanUiText
    };
    let Uz = 1;

    function cz() {
      const zz = (0, Lz.g)("currencyAmounts"),
        uz = null === zz || void 0 === zz ? void 0 : zz.Clovers;
      return !uz || uz.hidden ? null : (0, qz.jsx)(Vz.d, {
        children: (0, qz.jsx)(gz, {
          amount: uz.amount
        })
      })
    }

    function gz(zz) {
      var uz, bz, Ez;
      let {
        amount: iz
      } = zz;
      const {
        openEverythingMenuName: tz
      } = (0, Pz.m)(["openEverythingMenuName"]), Hz = (0, Gz.c)(), [Oz, pz] = (0, nz.useState)(iz), [dz, Fz] = (0, nz.useState)(null), [Zz, Rz] = (0, nz.useState)(0), [Kz, wz] = (0, nz.useState)([]), Xz = (0, nz.useRef)(iz), fz = (0, nz.useRef)(!1), sz = (0, nz.useRef)(null), oz = tz === Tz.r.SHOP;
      (0, nz.useEffect)((() => {
        const zz = Xz.current;
        if (Xz.current = iz, iz <= zz || oz) return void pz(iz);
        const uz = Hz || Kz.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (bz = iz - zz, Ez = !fz.current, bz <= 0 || !Ez && bz < 40 ? 0 : Math.min(4, Math.ceil(bz / 30)));
        var bz, Ez;
        if (fz.current = !0, Az(iz).length > Az(zz).length && Rz(Uz++), uz > 0) {
          const zz = [];
          for (let bz = 0; bz < uz; bz++) zz.push({
            id: Uz++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * bz
          });
          wz((uz => [...uz, ...zz]))
        }
        const nz = uz > 0 ? 600 : 0;
        Fz({
          id: Uz++,
          delayMs: nz
        });
        const Mz = performance.now() + nz;
        let tz = 0;
        const Oz = uz => {
          const bz = lz.d.clamp((uz - Mz) / 600, 0, 1);
          pz(Math.round(zz + (iz - zz) * bz)), bz < 1 && (tz = requestAnimationFrame(Oz))
        };
        return tz = requestAnimationFrame(Oz), () => {
          cancelAnimationFrame(tz)
        }
      }), [iz, oz]);
      const xz = function(zz) {
          var uz;
          const bz = null !== (uz = Mz.find((uz => zz < Jz(uz)))) && void 0 !== uz ? uz : "Super";
          return {
            rarity: bz,
            progress: lz.d.clamp(zz / Jz(bz), 0, 1)
          }
        }(Oz),
        Lz = Az(Oz).at(-1);
      return (0, qz.jsxs)(qz.Fragment, {
        children: [(0, qz.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, qz.jsxs)("div", {
            className: Nz()("LuckyCloverWallet", {
              Capped: Lz && "Basic" !== Lz
            }),
            style: Lz && {
              "--luckyTierColour": hz[Lz]
            },
            children: [(0, qz.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${xz.progress})`
              }
            }), Zz > 0 && (0, qz.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(uz=null===dz||void 0===dz?void 0:dz.delayMs)&&void 0!==uz?uz:0}ms`
              }
            }, Zz), (0, qz.jsx)("div", {
              ref: sz,
              className: Nz()("LuckyCloverWalletIcon", dz && "Bounce"),
              style: {
                animationDelay: `${null!==(Ez=null===dz||void 0===dz?void 0:dz.delayMs)&&void 0!==Ez?Ez:0}ms`
              },
              children: (0, qz.jsx)(az.c, {
                itemName: vz,
                amount: 0
              })
            }, null !== (bz = null === dz || void 0 === dz ? void 0 : dz.id) && void 0 !== bz ? bz : 0), (0, qz.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Oz
            }), Lz && (0, qz.jsx)(mz.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, rz.createPortal)(Kz.map((zz => (0, qz.jsx)(Sz, {
          flyer: zz,
          target: sz,
          onDone: () => {
            wz((uz => uz.filter((uz => uz.id !== zz.id))))
          }
        }, zz.id))), document.body)]
      })
    }

    function Sz(zz) {
      let {
        flyer: uz,
        target: bz,
        onDone: Ez
      } = zz;
      const iz = (0, nz.useRef)(null);
      return (0, nz.useEffect)((() => {
        var zz;
        const nz = null === (zz = bz.current) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
        if (!iz.current || !nz) return void Ez();
        const {
          x: lz,
          y: Mz
        } = uz, tz = lz + 140 * (Math.random() - .5), Hz = Mz - 30 - 40 * Math.random(), Oz = iz.current.animate([{
          transform: `translate(${lz}px, ${Mz}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${tz}px, ${Hz}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${nz.left}px, ${nz.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: uz.delayMs,
          fill: "backwards"
        });
        return Oz.onfinish = Ez, () => {
          Oz.cancel()
        }
      }), []), (0, qz.jsx)("div", {
        ref: iz,
        className: "LuckyCloverFlying",
        children: (0, qz.jsx)(az.c, {
          itemName: vz,
          amount: 0
        })
      })
    }
    var yz = bz(22);
    const Dz = "luckyGearUpgradeView",
      Qz = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function Wz(zz) {
      var uz;
      return null !== (uz = Qz[zz.split(" ")[0]]) && void 0 !== uz ? uz : "#e07bff"
    }
    class ez {
      constructor(zz, uz) {
        this.selectedSlot = zz, this.itemAt = uz, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      WZ(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [bz, Ez, nz] of zz) this.rings.push({
          id: this.nextId++,
          slot: bz,
          colour: Wz(nz),
          until: uz + 1200
        }), bz !== this.selectedSlot() && this.unseen.set(bz, {
          from: Ez,
          to: nz
        });
        this.sK()
      }
      sd() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const uz = this.rings.filter((uz => uz.until > zz));
        let bz = uz.length !== this.rings.length;
        this.rings = uz;
        for (const [Ez, {
            from: nz,
            to: iz
          }] of this.unseen) {
          const zz = this.itemAt(Ez);
          (Ez === this.selectedSlot() || zz !== iz && zz !== nz) && (this.unseen.delete(Ez), bz = !0)
        }
        bz && this.sK()
      }
      sK() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, yz.k.sK(Dz, this.view)
      }
    }
    var jz = bz(1417);

    function Iz(zz) {
      return document.querySelector(`.HotBar [data-inven-idx="${zz}"]`)
    }

    function Bz(zz) {
      let {
        ring: uz
      } = zz;
      const [bz, Ez] = (0, nz.useState)(null);
      return (0, nz.useLayoutEffect)((() => {
        var zz, bz;
        Ez(null !== (zz = null === (bz = Iz(uz.slot)) || void 0 === bz ? void 0 : bz.getBoundingClientRect()) && void 0 !== zz ? zz : null)
      }), [uz]), bz ? (0, qz.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: bz.left,
          top: bz.top,
          width: bz.width,
          height: bz.height,
          "--ringColour": uz.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function Cz(zz) {
      let {
        slot: uz
      } = zz;
      const [bz, Ez] = (0, nz.useState)(null);
      return (0, nz.useLayoutEffect)((() => {
        const zz = () => {
          Ez(Iz(uz))
        };
        zz();
        const bz = new MutationObserver(zz),
          nz = document.querySelector(".BottomMiddleElements");
        return nz && bz.observe(nz, {
          childList: !0,
          subtree: !0
        }), () => {
          bz.disconnect()
        }
      }), [uz]), bz ? (0, rz.createPortal)((0, qz.jsx)("div", {
        className: "LuckyGearUnseen"
      }), bz) : null
    }

    function Yz(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, jz.h)(Dz, uz.getView());
      return (0, qz.jsxs)(qz.Fragment, {
        children: [bz.rings.map((zz => (0, qz.jsx)(Bz, {
          ring: zz
        }, zz.id))), bz.unseenSlots.map((zz => (0, qz.jsx)(Cz, {
          slot: zz
        }, zz)))]
      })
    }
    const kz = function(zz, uz, bz, lz) {
      let Mz, {
          localPlayerId: tz
        } = lz,
        Hz = null;
      const Oz = new Xz({
          itemAt: zz => Mz.getItemSlot(tz, zz),
          selectedSlot: () => Mz.getSelectedInventorySlotI(tz),
          swap: (zz, uz) => {
            Mz.swapInventorySlots(zz, uz)
          }
        }),
        pz = new ez((() => Mz.getSelectedInventorySlotI(tz)), (zz => {
          var uz;
          return null === (uz = Mz.getItemSlot(tz, zz)) || void 0 === uz ? void 0 : uz.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, iz.c)()
        },
        onCreate: zz => {
          Mz = zz, Hz = (0, sz.x)((0, nz.createElement)(nz.Fragment, null, (0, nz.createElement)(cz), (0, nz.createElement)(Yz, {
            controller: pz
          })))
        },
        onClose: () => {
          var zz;
          null === (zz = Hz) || void 0 === zz || zz()
        },
        sd: () => {
          Oz.sd(), pz.sd()
        },
        onReceivedMessageFromServer: (zz, uz) => {
          "luckyGearUpgrade" === zz && pz.WZ(uz)
        },
        onPlayerChangeBlock: (zz, uz, bz, Ez, nz, iz) => {
          "Air" !== iz && Oz.onPlace(iz)
        },
        onPlayerDropItem: (zz, uz, bz, Ez) => {
          Oz.onDrop(uz, Ez)
        },
        onPlayerAltAction: (zz, uz, bz, nz, iz, lz) => {
          if (!lz || "Mesh" !== Mz.getEntityType(lz)) return;
          const tz = Mz.getEntityName(lz),
            Hz = Object.values(Ez).find((zz => zz.name === tz));
          Hz && Mz.openShop(zz, !1, Hz.shopTab)
        }
      }
    }
  },
  37452: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz
    });
    var Ez = bz(328),
      nz = bz(36365),
      iz = bz(4251);
    const lz = ["Leaf Bed", "_Leaf Bed Head", ...Ez.Jc.flatMap((zz => [`${zz} Bed`, `_${zz} Bed Head`, `${zz} Strongbed`, `_${zz} Strongbed Head`]))];

    function Mz() {
      let zz;
      return {
        onCreate(uz) {
          zz = uz
        },
        altVetoBlocks: lz,
        onPlayerAttemptAltAction(uz, bz, Ez, lz, Mz, tz) {
          var Hz;
          if ((0, nz.e)(zz.getMetaInfo(Mz).rootName) && !zz.isEntityInteractable(tz) && (0, iz.c)(null === (Hz = zz.luz(uz)) || void 0 === Hz ? void 0 : Hz.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36365: (zz, uz, bz) => {
    function Ez(zz) {
      return zz.includes("Leaf Bed")
    }

    function nz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Ez(zz)
    }

    function iz(zz) {
      return zz.includes(" Strongbed")
    }

    function lz(zz) {
      return Ez(zz) || nz(zz) || iz(zz)
    }
    bz.d(uz, {
      e: () => lz,
      g: () => Ez,
      j: () => iz,
      k: () => nz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);