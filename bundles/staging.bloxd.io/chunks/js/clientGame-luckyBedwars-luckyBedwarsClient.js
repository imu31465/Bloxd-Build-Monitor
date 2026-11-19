export const id = 19;
export const ids = [19];
export const modules = {
  36025: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => iY,
      e: () => yY,
      g: () => sY,
      h: () => uY
    });
    var FY = DY(8745),
      AY = DY(36032),
      IY = DY(36034),
      RY = DY(8111),
      OY = DY(1430),
      gY = DY(61),
      aY = DY(76),
      vY = DY(1125);

    function uY() {
      var YY;
      return (0, OY.k)(AY.d, (0, AY.n)()), (0, vY.jsx)(vY.Fragment, {
        children: null === (YY = (0, AY.n)()) || void 0 === YY ? void 0 : YY.content
      })
    }

    function sY(YY) {
      var rY;
      let {
        show: DY
      } = YY;
      (0, OY.k)(AY.d, (0, AY.n)());
      const aY = null === (rY = (0, AY.n)()) || void 0 === rY ? void 0 : rY.menu;
      return (0, gY.useEffect)((() => {
        var YY;
        DY || (null === aY || void 0 === aY || null === (YY = aY.onClose) || void 0 === YY || YY.call(aY), (0, IY.t)())
      }), [DY, aY]), (0, gY.useEffect)((() => DY ? (0, RY.f)(IY.y, IY.i) : void 0), [DY]), (0, vY.jsx)(FY.d, {
        showing: DY,
        globallyUniqueKey: "clientGameMenu",
        children: null === aY || void 0 === aY ? void 0 : aY.content
      })
    }

    function iY(YY) {
      let {
        placement: rY = "bottom"
      } = YY;
      return (0, vY.jsx)("div", {
        id: `clientGameHud-${rY}`,
        style: {
          display: "contents"
        }
      })
    }

    function yY(YY) {
      let {
        children: rY,
        placement: DY = "bottom"
      } = YY;
      const [FY, AY] = (0, gY.useState)(null);
      return (0, gY.useEffect)((() => {
        AY(document.getElementById(`clientGameHud-${DY}`))
      }), [DY]), FY ? (0, aY.createPortal)(rY, FY) : null
    }
  },
  8745: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(4093),
      AY = DY(4097);

    function IY(YY) {
      let {
        children: rY,
        showing: DY,
        globallyUniqueKey: IY,
        alwaysMountChildren: RY = !1,
        doGameplayStartStopOnShow: OY = !0,
        keepsMovement: gY = !1
      } = YY;
      return (0, AY.b)(!0, DY, IY, gY), (0, FY.c)(OY, DY), DY || RY ? rY : null
    }
  },
  8111: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      f: () => AY
    });
    let FY = null;
    const AY = function(YY) {
        const rY = {
          cycle: YY,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FY = rY, () => {
          FY === rY && (FY = null)
        }
      },
      IY = () => {
        var YY;
        return null !== (YY = FY) && void 0 !== YY && YY.canCycle() ? FY.cycle : null
      }
  },
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  38751: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => tY
    });
    const FY = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var AY = DY(61),
      IY = DY(37376),
      RY = DY(341);
    const OY = ["Basic", "Rare", "Super"];

    function gY(YY, rY) {
      return `${"Basic"===rY?"":`${rY} `}${"Simple"===YY?"":`${YY} `}Lucky Block`
    }
    const aY = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((YY => OY.map((rY => [gY(YY, rY), {
      category: YY,
      rarity: rY
    }])))));
    aY.keys();

    function vY(YY) {
      return aY.get(YY)
    }
    const uY = "Obsidian",
      sY = ["Cobweb"],
      iY = [...["Red", "Blue", "Green", "Yellow"].map((YY => `${(0,RY.$)(YY)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", uY, ...sY];

    function yY(YY) {
      return iY.includes(YY)
    }
    var QY = DY(625);

    function oY(YY, rY) {
      const DY = vY(YY);
      if (DY) {
        const YY = vY(rY);
        if (!YY) return;
        const FY = OY.length - 1 - OY.indexOf(YY.rarity);
        return (YY.category === DY.category ? 0 : 1) * OY.length + FY
      }
      if (!yY(YY)) return;
      if (rY === YY) return 0;
      const FY = YY => yY(YY) && !sY.includes(YY) && YY !== uY;
      return FY(YY) && FY(rY) ? 1 : void 0
    }
    const WY = [...Array.from({
      length: QY.l - QY.k
    }, ((YY, rY) => QY.k + rY)), ...Array.from({
      length: QY.k
    }, ((YY, rY) => rY))];
    class EY {
      constructor(YY) {
        this.inventory = YY, this.pending = new Map
      }
      onPlace(YY) {
        var rY;
        const DY = this.inventory.selectedSlot(),
          FY = this.inventory.itemAt(DY);
        (null === FY || void 0 === FY ? void 0 : FY.name) === YY && (null !== (rY = FY.amount) && void 0 !== rY ? rY : 1) <= 1 && mY(YY) && this.pending.set(DY, YY)
      }
      onDrop(YY, rY) {
        rY < QY.k && null === this.inventory.itemAt(rY) && mY(YY) && this.refill(rY, YY)
      }
      Zu() {
        const YY = [...this.pending];
        this.pending.clear();
        for (const [rY, DY] of YY) null === this.inventory.itemAt(rY) && this.refill(rY, DY)
      }
      refill(YY, rY) {
        const DY = function(YY, rY, DY, FY) {
          let AY, IY = 1 / 0;
          for (const RY of WY) {
            if (RY === rY) continue;
            const OY = FY(RY);
            if (!OY || RY < QY.k && rY !== DY) continue;
            const gY = oY(YY, OY.name);
            void 0 !== gY && gY < IY && (AY = RY, IY = gY)
          }
          return AY
        }(rY, YY, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== DY && this.inventory.swap(YY, DY)
      }
    }

    function mY(YY) {
      return !!vY(YY) || yY(YY)
    }
    var VY = DY(36032),
      SY = DY(76),
      lY = DY(1092),
      TY = DY.n(lY);
    const eY = "Lucky Clover",
      NY = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function BY(YY) {
      return NY[YY][0]
    }

    function cY(YY) {
      return OY.filter((rY => YY >= BY(rY)))
    }
    var KY = DY(332),
      HY = DY(2282),
      zY = DY(19),
      ZY = DY(2341),
      CY = DY(1793),
      fY = DY(36025),
      jY = DY(1098);
    var hY = DY(1125);
    const dY = {
      Basic: RY.K.whiteUiText,
      Rare: RY.K.goldUiText,
      Super: RY.K.cyanUiText
    };
    let JY = 1;

    function MY() {
      const YY = (0, HY.j)("currencyAmounts"),
        rY = null === YY || void 0 === YY ? void 0 : YY.Clovers;
      return !rY || rY.hidden ? null : (0, hY.jsx)(fY.e, {
        children: (0, hY.jsx)(wY, {
          amount: rY.amount
        })
      })
    }

    function wY(YY) {
      var rY, DY, FY;
      let {
        amount: IY
      } = YY;
      const {
        openEverythingMenuName: gY
      } = (0, zY.j)(["openEverythingMenuName"]), aY = (0, ZY.e)(), [vY, uY] = (0, AY.useState)(IY), [sY, iY] = (0, AY.useState)(null), [yY, QY] = (0, AY.useState)(0), [oY, WY] = (0, AY.useState)([]), EY = (0, AY.useRef)(IY), mY = (0, AY.useRef)(!1), VY = (0, AY.useRef)(null), lY = gY === KY.t.SHOP;
      (0, AY.useEffect)((() => {
        const YY = EY.current;
        if (EY.current = IY, IY <= YY || lY) return void uY(IY);
        const rY = aY || oY.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (DY = IY - YY, FY = !mY.current, DY <= 0 || !FY && DY < 40 ? 0 : Math.min(4, Math.ceil(DY / 30)));
        var DY, FY;
        if (mY.current = !0, cY(IY).length > cY(YY).length && QY(JY++), rY > 0) {
          const YY = [];
          for (let DY = 0; DY < rY; DY++) YY.push({
            id: JY++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * DY
          });
          WY((rY => [...rY, ...YY]))
        }
        const AY = rY > 0 ? 600 : 0;
        iY({
          id: JY++,
          delayMs: AY
        });
        const OY = performance.now() + AY;
        let gY = 0;
        const vY = rY => {
          const DY = RY.c.clamp((rY - OY) / 600, 0, 1);
          uY(Math.round(YY + (IY - YY) * DY)), DY < 1 && (gY = requestAnimationFrame(vY))
        };
        return gY = requestAnimationFrame(vY), () => {
          cancelAnimationFrame(gY)
        }
      }), [IY, lY]);
      const NY = function(YY) {
          var rY;
          const DY = null !== (rY = OY.find((rY => YY < BY(rY)))) && void 0 !== rY ? rY : "Super";
          return {
            rarity: DY,
            progress: RY.c.clamp(YY / BY(DY), 0, 1)
          }
        }(vY),
        HY = cY(vY).at(-1);
      return (0, hY.jsxs)(hY.Fragment, {
        children: [(0, hY.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, hY.jsxs)("div", {
            className: TY()("LuckyCloverWallet", {
              Capped: HY && "Basic" !== HY
            }),
            style: HY && {
              "--luckyTierColour": dY[HY]
            },
            children: [(0, hY.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${NY.progress})`
              }
            }), yY > 0 && (0, hY.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(rY=null===sY||void 0===sY?void 0:sY.delayMs)&&void 0!==rY?rY:0}ms`
              }
            }, yY), (0, hY.jsx)("div", {
              ref: VY,
              className: TY()("LuckyCloverWalletIcon", sY && "Bounce"),
              style: {
                animationDelay: `${null!==(FY=null===sY||void 0===sY?void 0:sY.delayMs)&&void 0!==FY?FY:0}ms`
              },
              children: (0, hY.jsx)(CY.c, {
                itemName: eY,
                amount: 0
              })
            }, null !== (DY = null === sY || void 0 === sY ? void 0 : sY.id) && void 0 !== DY ? DY : 0), (0, hY.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: vY
            }), HY && (0, hY.jsx)(jY.e, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, SY.createPortal)(oY.map((YY => (0, hY.jsx)(bY, {
          flyer: YY,
          target: VY,
          onDone: () => {
            WY((rY => rY.filter((rY => rY.id !== YY.id))))
          }
        }, YY.id))), document.body)]
      })
    }

    function bY(YY) {
      let {
        flyer: rY,
        target: DY,
        onDone: FY
      } = YY;
      const IY = (0, AY.useRef)(null);
      return (0, AY.useEffect)((() => {
        var YY;
        const AY = null === (YY = DY.current) || void 0 === YY ? void 0 : YY.getBoundingClientRect();
        if (!IY.current || !AY) return void FY();
        const {
          x: RY,
          y: OY
        } = rY, gY = RY + 140 * (Math.random() - .5), aY = OY - 30 - 40 * Math.random(), vY = IY.current.animate([{
          transform: `translate(${RY}px, ${OY}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${gY}px, ${aY}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${AY.left}px, ${AY.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: rY.delayMs,
          fill: "backwards"
        });
        return vY.onfinish = FY, () => {
          vY.cancel()
        }
      }), []), (0, hY.jsx)("div", {
        ref: IY,
        className: "LuckyCloverFlying",
        children: (0, hY.jsx)(CY.c, {
          itemName: eY,
          amount: 0
        })
      })
    }
    var XY = DY(25);
    const qY = "luckyGearUpgradeView",
      pY = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function kY(YY) {
      var rY;
      return null !== (rY = pY[YY.split(" ")[0]]) && void 0 !== rY ? rY : "#e07bff"
    }
    class GY {
      constructor(YY, rY) {
        this.selectedSlot = YY, this.itemAt = rY, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      Cy(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [DY, FY, AY] of YY) this.rings.push({
          id: this.nextId++,
          slot: DY,
          colour: kY(AY),
          until: rY + 1200
        }), DY !== this.selectedSlot() && this.unseen.set(DY, {
          from: FY,
          to: AY
        });
        this.vo()
      }
      Zu() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const rY = this.rings.filter((rY => rY.until > YY));
        let DY = rY.length !== this.rings.length;
        this.rings = rY;
        for (const [FY, {
            from: AY,
            to: IY
          }] of this.unseen) {
          const YY = this.itemAt(FY);
          (FY === this.selectedSlot() || YY !== IY && YY !== AY) && (this.unseen.delete(FY), DY = !0)
        }
        DY && this.vo()
      }
      vo() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, XY.g.vo(qY, this.view)
      }
    }
    var xY = DY(1430);

    function nY(YY) {
      return document.querySelector(`.HotBar [data-inven-idx="${YY}"]`)
    }

    function PY(YY) {
      let {
        ring: rY
      } = YY;
      const [DY, FY] = (0, AY.useState)(null);
      return (0, AY.useLayoutEffect)((() => {
        var YY, DY;
        FY(null !== (YY = null === (DY = nY(rY.slot)) || void 0 === DY ? void 0 : DY.getBoundingClientRect()) && void 0 !== YY ? YY : null)
      }), [rY]), DY ? (0, hY.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: DY.left,
          top: DY.top,
          width: DY.width,
          height: DY.height,
          "--ringColour": rY.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function UY(YY) {
      let {
        slot: rY
      } = YY;
      const [DY, FY] = (0, AY.useState)(null);
      return (0, AY.useLayoutEffect)((() => {
        const YY = () => {
          FY(nY(rY))
        };
        YY();
        const DY = new MutationObserver(YY),
          AY = document.querySelector(".BottomMiddleElements");
        return AY && DY.observe(AY, {
          childList: !0,
          subtree: !0
        }), () => {
          DY.disconnect()
        }
      }), [rY]), DY ? (0, SY.createPortal)((0, hY.jsx)("div", {
        className: "LuckyGearUnseen"
      }), DY) : null
    }

    function LY(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, xY.k)(qY, rY.getView());
      return (0, hY.jsxs)(hY.Fragment, {
        children: [DY.rings.map((YY => (0, hY.jsx)(PY, {
          ring: YY
        }, YY.id))), DY.unseenSlots.map((YY => (0, hY.jsx)(UY, {
          slot: YY
        }, YY)))]
      })
    }
    const tY = function(YY, rY, DY, RY) {
      let OY, {
          localPlayerId: gY
        } = RY,
        aY = null;
      const vY = new EY({
          itemAt: YY => OY.getItemSlot(gY, YY),
          selectedSlot: () => OY.getSelectedInventorySlotI(gY),
          swap: (YY, rY) => {
            OY.swapInventorySlots(YY, rY)
          }
        }),
        uY = new GY((() => OY.getSelectedInventorySlotI(gY)), (YY => {
          var rY;
          return null === (rY = OY.getItemSlot(gY, YY)) || void 0 === rY ? void 0 : rY.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, IY.d)()
        },
        onCreate: YY => {
          OY = YY, aY = (0, VY.q)((0, AY.createElement)(AY.Fragment, null, (0, AY.createElement)(MY), (0, AY.createElement)(LY, {
            controller: uY
          })))
        },
        onClose: () => {
          var YY;
          null === (YY = aY) || void 0 === YY || YY()
        },
        Zu: () => {
          vY.Zu(), uY.Zu()
        },
        onReceivedMessageFromServer: (YY, rY) => {
          "luckyGearUpgrade" === YY && uY.Cy(rY)
        },
        onPlayerChangeBlock: (YY, rY, DY, FY, AY, IY) => {
          "Air" !== IY && vY.onPlace(IY)
        },
        onPlayerDropItem: (YY, rY, DY, FY) => {
          vY.onDrop(rY, FY)
        },
        onPlayerAltAction: (YY, rY, DY, AY, IY, RY) => {
          if (!RY || "Mesh" !== OY.getEntityType(RY)) return;
          const gY = OY.getEntityName(RY),
            aY = Object.values(FY).find((YY => YY.name === gY));
          aY && OY.openShop(YY, !1, aY.shopTab)
        }
      }
    }
  },
  37376: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY
    });
    var FY = DY(341),
      AY = DY(36318),
      IY = DY(4020);
    const RY = ["Leaf Bed", "_Leaf Bed Head", ...FY.Fc.flatMap((YY => [`${YY} Bed`, `_${YY} Bed Head`, `${YY} Strongbed`, `_${YY} Strongbed Head`]))];

    function OY() {
      let YY;
      return {
        onCreate(rY) {
          YY = rY
        },
        altVetoBlocks: RY,
        onPlayerAttemptAltAction(rY, DY, FY, RY, OY, gY) {
          var aY;
          if ((0, AY.e)(YY.getMetaInfo(OY).rootName) && !YY.isEntityInteractable(gY) && (0, IY.f)(null === (aY = YY.rrY(rY)) || void 0 === aY ? void 0 : aY.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36318: (YY, rY, DY) => {
    function FY(YY) {
      return YY.includes("Leaf Bed")
    }

    function AY(YY) {
      return / Bed(?: Head)?(?:\||$)/.test(YY) && !FY(YY)
    }

    function IY(YY) {
      return YY.includes(" Strongbed")
    }

    function RY(YY) {
      return FY(YY) || AY(YY) || IY(YY)
    }
    DY.d(rY, {
      e: () => RY,
      h: () => FY,
      i: () => IY,
      l: () => AY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);