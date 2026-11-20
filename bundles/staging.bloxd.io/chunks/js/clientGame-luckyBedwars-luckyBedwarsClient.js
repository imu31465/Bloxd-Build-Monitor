export const id = 19;
export const ids = [19];
export const modules = {
  36078: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => bz,
      e: () => wz,
      g: () => Nz,
      h: () => uz
    });
    var Fz = sz(8843),
      Wz = sz(36086),
      Xz = sz(36090),
      Oz = sz(8238),
      oz = sz(1416),
      vz = sz(65),
      Uz = sz(78),
      Kz = sz(1087);

    function uz() {
      var zz;
      return (0, oz.h)(Wz.e, (0, Wz.o)()), (0, Kz.jsx)(Kz.Fragment, {
        children: null === (zz = (0, Wz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function Nz(zz) {
      var tz;
      let {
        show: sz
      } = zz;
      (0, oz.h)(Wz.e, (0, Wz.o)());
      const Uz = null === (tz = (0, Wz.o)()) || void 0 === tz ? void 0 : tz.menu;
      return (0, vz.useEffect)((() => {
        var zz;
        sz || (null === Uz || void 0 === Uz || null === (zz = Uz.onClose) || void 0 === zz || zz.call(Uz), (0, Xz.p)())
      }), [sz, Uz]), (0, vz.useEffect)((() => sz ? (0, Oz.f)(Xz.w, Xz.e) : void 0), [sz]), (0, Kz.jsx)(Fz.c, {
        showing: sz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Uz || void 0 === Uz ? void 0 : Uz.content
      })
    }

    function bz(zz) {
      let {
        placement: tz = "bottom"
      } = zz;
      return (0, Kz.jsx)("div", {
        id: `clientGameHud-${tz}`,
        style: {
          display: "contents"
        }
      })
    }

    function wz(zz) {
      let {
        children: tz,
        placement: sz = "bottom"
      } = zz;
      const [Fz, Wz] = (0, vz.useState)(null);
      return (0, vz.useEffect)((() => {
        Wz(document.getElementById(`clientGameHud-${sz}`))
      }), [sz]), Fz ? (0, Uz.createPortal)(tz, Fz) : null
    }
  },
  8843: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(4178),
      Wz = sz(4180);

    function Xz(zz) {
      let {
        children: tz,
        showing: sz,
        globallyUniqueKey: Xz,
        alwaysMountChildren: Oz = !1,
        doGameplayStartStopOnShow: oz = !0,
        keepsMovement: vz = !1
      } = zz;
      return (0, Wz.b)(!0, sz, Xz, vz), (0, Fz.e)(oz, sz), sz || Oz ? tz : null
    }
  },
  8238: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      f: () => Wz
    });
    let Fz = null;
    const Wz = function(zz) {
        const tz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Fz = tz, () => {
          Fz === tz && (Fz = null)
        }
      },
      Xz = () => {
        var zz;
        return null !== (zz = Fz) && void 0 !== zz && zz.canCycle() ? Fz.cycle : null
      }
  },
  36090: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Dz,
      i: () => gz,
      k: () => oz,
      m: () => Nz,
      p: () => Hz,
      r: () => uz,
      t: () => Pz,
      w: () => wz,
      z: () => Bz
    });
    var Fz = sz(30),
      Wz = sz(34);
    const Xz = "clientGameInventoryButtonsChanged",
      Oz = new Map;

    function oz() {
      return [...Oz.values()].sort(((zz, tz) => {
        var sz, Fz;
        return (null !== (sz = zz.order) && void 0 !== sz ? sz : 0) - (null !== (Fz = tz.order) && void 0 !== Fz ? Fz : 0)
      }))
    }
    let vz = null;

    function Uz(zz) {
      vz = zz
    }
    let Kz = !1;

    function uz(zz) {
      Kz = !0;
      try {
        zz.onClick()
      } finally {
        Kz = !1
      }
      zz.panel && "clientGame" === Fz.b.get("openInGameMenuName") && Uz(zz.id)
    }

    function Nz() {
      return Kz
    }

    function bz() {
      return oz().filter((zz => zz.panel && !zz.disabled))
    }

    function wz(zz) {
      const tz = bz(),
        sz = tz.findIndex((zz => zz.id === vz));
      return !(sz < 0 || tz.length < 2) && (uz(tz[(sz + zz + tz.length) % tz.length]), !0)
    }

    function Dz() {
      return null !== vz && bz().length > 1
    }

    function gz() {
      Uz(null)
    }

    function Hz() {
      "inventory" !== Fz.b.get("openInGameMenuName") && Uz(null)
    }

    function Bz() {
      const zz = vz;
      return Uz(null), zz
    }

    function Pz(zz) {
      return Oz.set(zz.id, zz), Wz.o.Yg(Xz, oz(), !0), () => {
        Oz.get(zz.id) === zz && (Oz.delete(zz.id), Wz.o.Yg(Xz, oz()))
      }
    }
  },
  36086: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => gz,
      j: () => Hz,
      l: () => Nz,
      o: () => Uz,
      s: () => Dz,
      w: () => bz,
      x: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(36090);
    const oz = "clientGameUiChanged";
    let vz = null;

    function Uz() {
      return vz
    }

    function Kz(zz, tz) {
      const sz = {
        content: zz,
        menu: tz
      };
      return vz = sz, Wz.o.Yg(oz, vz, !0), () => {
        vz === sz && (vz = null, wz = !1, gz(), Wz.o.Yg(oz, null))
      }
    }
    let uz = null;

    function Nz() {
      return uz
    }

    function bz(zz) {
      return uz = zz, () => {
        uz === zz && (uz = null)
      }
    }
    let wz = !1;

    function Dz() {
      const zz = Fz.b.get("openInGameMenuName");
      "clientGame" !== zz && (wz = "inventory" === zz), (0, Oz.m)() || (0, Oz.i)(), (0, Xz.n)(Xz.c), Fz.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gz() {
      Bz(!1)
    }

    function Hz() {
      Bz(wz)
    }

    function Bz(zz) {
      "clientGame" === Fz.b.get("openInGameMenuName") && Fz.b.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, Oz.i)(), wz = !1
    }
  },
  38796: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Ez
    });
    const Fz = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var Wz = sz(65),
      Xz = sz(37461),
      Oz = sz(321);
    const oz = ["Basic", "Rare", "Super"];

    function vz(zz, tz) {
      return `${"Basic"===tz?"":`${tz} `}${"Simple"===zz?"":`${zz} `}Lucky Block`
    }
    const Uz = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((zz => oz.map((tz => [vz(zz, tz), {
      category: zz,
      rarity: tz
    }])))));
    Uz.keys();

    function Kz(zz) {
      return Uz.get(zz)
    }
    const uz = "Obsidian",
      Nz = ["Cobweb"],
      bz = [...["Red", "Blue", "Green", "Yellow"].map((zz => `${(0,Oz._)(zz)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", uz, ...Nz];

    function wz(zz) {
      return bz.includes(zz)
    }
    var Dz = sz(580);

    function gz(zz, tz) {
      const sz = Kz(zz);
      if (sz) {
        const zz = Kz(tz);
        if (!zz) return;
        const Fz = oz.length - 1 - oz.indexOf(zz.rarity);
        return (zz.category === sz.category ? 0 : 1) * oz.length + Fz
      }
      if (!wz(zz)) return;
      if (tz === zz) return 0;
      const Fz = zz => wz(zz) && !Nz.includes(zz) && zz !== uz;
      return Fz(zz) && Fz(tz) ? 1 : void 0
    }
    const Hz = [...Array.from({
      length: Dz.p - Dz.l
    }, ((zz, tz) => Dz.l + tz)), ...Array.from({
      length: Dz.l
    }, ((zz, tz) => tz))];
    class Bz {
      constructor(zz) {
        this.inventory = zz, this.pending = new Map
      }
      onPlace(zz) {
        var tz;
        const sz = this.inventory.selectedSlot(),
          Fz = this.inventory.itemAt(sz);
        (null === Fz || void 0 === Fz ? void 0 : Fz.name) === zz && (null !== (tz = Fz.amount) && void 0 !== tz ? tz : 1) <= 1 && Pz(zz) && this.pending.set(sz, zz)
      }
      onDrop(zz, tz) {
        tz < Dz.l && null === this.inventory.itemAt(tz) && Pz(zz) && this.refill(tz, zz)
      }
      wN() {
        const zz = [...this.pending];
        this.pending.clear();
        for (const [tz, sz] of zz) null === this.inventory.itemAt(tz) && this.refill(tz, sz)
      }
      refill(zz, tz) {
        const sz = function(zz, tz, sz, Fz) {
          let Wz, Xz = 1 / 0;
          for (const Oz of Hz) {
            if (Oz === tz) continue;
            const oz = Fz(Oz);
            if (!oz || Oz < Dz.l && tz !== sz) continue;
            const vz = gz(zz, oz.name);
            void 0 !== vz && vz < Xz && (Wz = Oz, Xz = vz)
          }
          return Wz
        }(tz, zz, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== sz && this.inventory.swap(zz, sz)
      }
    }

    function Pz(zz) {
      return !!Kz(zz) || wz(zz)
    }
    var rz = sz(36086),
      Yz = sz(78),
      xz = sz(1020),
      mz = sz.n(xz);
    const Jz = "Lucky Clover",
      Iz = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function Cz(zz) {
      return Iz[zz][0]
    }

    function ez(zz) {
      return oz.filter((tz => zz >= Cz(tz)))
    }
    var Zz = sz(308),
      Gz = sz(2290),
      Tz = sz(30),
      cz = sz(2377),
      jz = sz(1845),
      Az = sz(36078),
      yz = sz(1036);
    var Mz = sz(1087);
    const dz = {
      Basic: Oz.N.whiteUiText,
      Rare: Oz.N.goldUiText,
      Super: Oz.N.cyanUiText
    };
    let hz = 1;

    function Qz() {
      const zz = (0, Gz.e)("currencyAmounts"),
        tz = null === zz || void 0 === zz ? void 0 : zz.Clovers;
      return !tz || tz.hidden ? null : (0, Mz.jsx)(Az.e, {
        children: (0, Mz.jsx)(kz, {
          amount: tz.amount
        })
      })
    }

    function kz(zz) {
      var tz, sz, Fz;
      let {
        amount: Xz
      } = zz;
      const {
        openEverythingMenuName: vz
      } = (0, Tz.h)(["openEverythingMenuName"]), Uz = (0, cz.b)(), [Kz, uz] = (0, Wz.useState)(Xz), [Nz, bz] = (0, Wz.useState)(null), [wz, Dz] = (0, Wz.useState)(0), [gz, Hz] = (0, Wz.useState)([]), Bz = (0, Wz.useRef)(Xz), Pz = (0, Wz.useRef)(!1), rz = (0, Wz.useRef)(null), xz = vz === Zz.r.SHOP;
      (0, Wz.useEffect)((() => {
        const zz = Bz.current;
        if (Bz.current = Xz, Xz <= zz || xz) return void uz(Xz);
        const tz = Uz || gz.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (sz = Xz - zz, Fz = !Pz.current, sz <= 0 || !Fz && sz < 40 ? 0 : Math.min(4, Math.ceil(sz / 30)));
        var sz, Fz;
        if (Pz.current = !0, ez(Xz).length > ez(zz).length && Dz(hz++), tz > 0) {
          const zz = [];
          for (let sz = 0; sz < tz; sz++) zz.push({
            id: hz++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * sz
          });
          Hz((tz => [...tz, ...zz]))
        }
        const Wz = tz > 0 ? 600 : 0;
        bz({
          id: hz++,
          delayMs: Wz
        });
        const oz = performance.now() + Wz;
        let vz = 0;
        const Kz = tz => {
          const sz = Oz.c.clamp((tz - oz) / 600, 0, 1);
          uz(Math.round(zz + (Xz - zz) * sz)), sz < 1 && (vz = requestAnimationFrame(Kz))
        };
        return vz = requestAnimationFrame(Kz), () => {
          cancelAnimationFrame(vz)
        }
      }), [Xz, xz]);
      const Iz = function(zz) {
          var tz;
          const sz = null !== (tz = oz.find((tz => zz < Cz(tz)))) && void 0 !== tz ? tz : "Super";
          return {
            rarity: sz,
            progress: Oz.c.clamp(zz / Cz(sz), 0, 1)
          }
        }(Kz),
        Gz = ez(Kz).at(-1);
      return (0, Mz.jsxs)(Mz.Fragment, {
        children: [(0, Mz.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, Mz.jsxs)("div", {
            className: mz()("LuckyCloverWallet", {
              Capped: Gz && "Basic" !== Gz
            }),
            style: Gz && {
              "--luckyTierColour": dz[Gz]
            },
            children: [(0, Mz.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${Iz.progress})`
              }
            }), wz > 0 && (0, Mz.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(tz=null===Nz||void 0===Nz?void 0:Nz.delayMs)&&void 0!==tz?tz:0}ms`
              }
            }, wz), (0, Mz.jsx)("div", {
              ref: rz,
              className: mz()("LuckyCloverWalletIcon", Nz && "Bounce"),
              style: {
                animationDelay: `${null!==(Fz=null===Nz||void 0===Nz?void 0:Nz.delayMs)&&void 0!==Fz?Fz:0}ms`
              },
              children: (0, Mz.jsx)(jz.c, {
                itemName: Jz,
                amount: 0
              })
            }, null !== (sz = null === Nz || void 0 === Nz ? void 0 : Nz.id) && void 0 !== sz ? sz : 0), (0, Mz.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: Kz
            }), Gz && (0, Mz.jsx)(yz.c, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, Yz.createPortal)(gz.map((zz => (0, Mz.jsx)(iz, {
          flyer: zz,
          target: rz,
          onDone: () => {
            Hz((tz => tz.filter((tz => tz.id !== zz.id))))
          }
        }, zz.id))), document.body)]
      })
    }

    function iz(zz) {
      let {
        flyer: tz,
        target: sz,
        onDone: Fz
      } = zz;
      const Xz = (0, Wz.useRef)(null);
      return (0, Wz.useEffect)((() => {
        var zz;
        const Wz = null === (zz = sz.current) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
        if (!Xz.current || !Wz) return void Fz();
        const {
          x: Oz,
          y: oz
        } = tz, vz = Oz + 140 * (Math.random() - .5), Uz = oz - 30 - 40 * Math.random(), Kz = Xz.current.animate([{
          transform: `translate(${Oz}px, ${oz}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${vz}px, ${Uz}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${Wz.left}px, ${Wz.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: tz.delayMs,
          fill: "backwards"
        });
        return Kz.onfinish = Fz, () => {
          Kz.cancel()
        }
      }), []), (0, Mz.jsx)("div", {
        ref: Xz,
        className: "LuckyCloverFlying",
        children: (0, Mz.jsx)(jz.c, {
          itemName: Jz,
          amount: 0
        })
      })
    }
    var Lz = sz(34);
    const lz = "luckyGearUpgradeView",
      nz = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function az(zz) {
      var tz;
      return null !== (tz = nz[zz.split(" ")[0]]) && void 0 !== tz ? tz : "#e07bff"
    }
    class qz {
      constructor(zz, tz) {
        this.selectedSlot = zz, this.itemAt = tz, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Sw(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [sz, Fz, Wz] of zz) this.rings.push({
          id: this.nextId++,
          slot: sz,
          colour: az(Wz),
          until: tz + 1200
        }), sz !== this.selectedSlot() && this.unseen.set(sz, {
          from: Fz,
          to: Wz
        });
        this.Yg()
      }
      wN() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const tz = this.rings.filter((tz => tz.until > zz));
        let sz = tz.length !== this.rings.length;
        this.rings = tz;
        for (const [Fz, {
            from: Wz,
            to: Xz
          }] of this.unseen) {
          const zz = this.itemAt(Fz);
          (Fz === this.selectedSlot() || zz !== Xz && zz !== Wz) && (this.unseen.delete(Fz), sz = !0)
        }
        sz && this.Yg()
      }
      Yg() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, Lz.o.Yg(lz, this.view)
      }
    }
    var Sz = sz(1416);

    function Vz(zz) {
      return document.querySelector(`.HotBar [data-inven-idx="${zz}"]`)
    }

    function Rz(zz) {
      let {
        ring: tz
      } = zz;
      const [sz, Fz] = (0, Wz.useState)(null);
      return (0, Wz.useLayoutEffect)((() => {
        var zz, sz;
        Fz(null !== (zz = null === (sz = Vz(tz.slot)) || void 0 === sz ? void 0 : sz.getBoundingClientRect()) && void 0 !== zz ? zz : null)
      }), [tz]), sz ? (0, Mz.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: sz.left,
          top: sz.top,
          width: sz.width,
          height: sz.height,
          "--ringColour": tz.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function pz(zz) {
      let {
        slot: tz
      } = zz;
      const [sz, Fz] = (0, Wz.useState)(null);
      return (0, Wz.useLayoutEffect)((() => {
        const zz = () => {
          Fz(Vz(tz))
        };
        zz();
        const sz = new MutationObserver(zz),
          Wz = document.querySelector(".BottomMiddleElements");
        return Wz && sz.observe(Wz, {
          childList: !0,
          subtree: !0
        }), () => {
          sz.disconnect()
        }
      }), [tz]), sz ? (0, Yz.createPortal)((0, Mz.jsx)("div", {
        className: "LuckyGearUnseen"
      }), sz) : null
    }

    function fz(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, Sz.h)(lz, tz.getView());
      return (0, Mz.jsxs)(Mz.Fragment, {
        children: [sz.rings.map((zz => (0, Mz.jsx)(Rz, {
          ring: zz
        }, zz.id))), sz.unseenSlots.map((zz => (0, Mz.jsx)(pz, {
          slot: zz
        }, zz)))]
      })
    }
    const Ez = function(zz, tz, sz, Oz) {
      let oz, {
          localPlayerId: vz
        } = Oz,
        Uz = null;
      const Kz = new Bz({
          itemAt: zz => oz.getItemSlot(vz, zz),
          selectedSlot: () => oz.getSelectedInventorySlotI(vz),
          swap: (zz, tz) => {
            oz.swapInventorySlots(zz, tz)
          }
        }),
        uz = new qz((() => oz.getSelectedInventorySlotI(vz)), (zz => {
          var tz;
          return null === (tz = oz.getItemSlot(vz, zz)) || void 0 === tz ? void 0 : tz.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, Xz.e)()
        },
        onCreate: zz => {
          oz = zz, Uz = (0, rz.x)((0, Wz.createElement)(Wz.Fragment, null, (0, Wz.createElement)(Qz), (0, Wz.createElement)(fz, {
            controller: uz
          })))
        },
        onClose: () => {
          var zz;
          null === (zz = Uz) || void 0 === zz || zz()
        },
        wN: () => {
          Kz.wN(), uz.wN()
        },
        onReceivedMessageFromServer: (zz, tz) => {
          "luckyGearUpgrade" === zz && uz.Sw(tz)
        },
        onPlayerChangeBlock: (zz, tz, sz, Fz, Wz, Xz) => {
          "Air" !== Xz && Kz.onPlace(Xz)
        },
        onPlayerDropItem: (zz, tz, sz, Fz) => {
          Kz.onDrop(tz, Fz)
        },
        onPlayerAltAction: (zz, tz, sz, Wz, Xz, Oz) => {
          if (!Oz || "Mesh" !== oz.getEntityType(Oz)) return;
          const vz = oz.getEntityName(Oz),
            Uz = Object.values(Fz).find((zz => zz.name === vz));
          Uz && oz.openShop(zz, !1, Uz.shopTab)
        }
      }
    }
  },
  37461: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz
    });
    var Fz = sz(321),
      Wz = sz(36339),
      Xz = sz(4115);
    const Oz = ["Leaf Bed", "_Leaf Bed Head", ...Fz.Cc.flatMap((zz => [`${zz} Bed`, `_${zz} Bed Head`, `${zz} Strongbed`, `_${zz} Strongbed Head`]))];

    function oz() {
      let zz;
      return {
        onCreate(tz) {
          zz = tz
        },
        altVetoBlocks: Oz,
        onPlayerAttemptAltAction(tz, sz, Fz, Oz, oz, vz) {
          var Uz;
          if ((0, Wz.e)(zz.getMetaInfo(oz).rootName) && !zz.isEntityInteractable(vz) && (0, Xz.e)(null === (Uz = zz.rtz(tz)) || void 0 === Uz ? void 0 : Uz.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36339: (zz, tz, sz) => {
    function Fz(zz) {
      return zz.includes("Leaf Bed")
    }

    function Wz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Fz(zz)
    }

    function Xz(zz) {
      return zz.includes(" Strongbed")
    }

    function Oz(zz) {
      return Fz(zz) || Wz(zz) || Xz(zz)
    }
    sz.d(tz, {
      e: () => Oz,
      i: () => Fz,
      l: () => Xz,
      m: () => Wz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);