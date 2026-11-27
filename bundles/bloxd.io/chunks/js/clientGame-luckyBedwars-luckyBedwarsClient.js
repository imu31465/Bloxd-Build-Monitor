export const id = 22;
export const ids = [22];
export const modules = {
  37796: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR,
      d: () => nR,
      g: () => wR,
      j: () => KR
    });
    var yR = GR(35140),
      tR = GR(3494),
      uR = GR(3498),
      ZR = GR(10048),
      qR = GR(1581),
      iR = GR(66),
      fR = GR(83),
      VR = GR(1378);

    function KR() {
      var RR;
      return (0, qR.h)(tR.e, (0, tR.r)()), (0, VR.jsx)(VR.Fragment, {
        children: null === (RR = (0, tR.r)()) || void 0 === RR ? void 0 : RR.content
      })
    }

    function wR(RR) {
      var JR;
      let {
        show: GR
      } = RR;
      (0, qR.h)(tR.e, (0, tR.r)());
      const fR = null === (JR = (0, tR.r)()) || void 0 === JR ? void 0 : JR.menu;
      return (0, iR.useEffect)((() => {
        var RR;
        GR || (null === fR || void 0 === fR || null === (RR = fR.onClose) || void 0 === RR || RR.call(fR), (0, uR.m)())
      }), [GR, fR]), (0, iR.useEffect)((() => GR ? (0, ZR.e)(uR.q, uR.e) : void 0), [GR]), (0, VR.jsx)(yR.b, {
        showing: GR,
        globallyUniqueKey: "clientGameMenu",
        children: null === fR || void 0 === fR ? void 0 : fR.content
      })
    }
    const rR = new Map,
      eR = new Set;

    function aR(RR, JR) {
      JR ? rR.set(RR, JR) : rR.delete(RR);
      for (const GR of eR) GR()
    }

    function LR(RR) {
      let {
        placement: JR = "bottom"
      } = RR;
      const GR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const RR = GR.current;
        return aR(JR, RR), () => {
          rR.get(JR) === RR && aR(JR, null)
        }
      }), [JR]), (0, VR.jsx)("div", {
        ref: GR,
        id: `clientGameHud-${JR}`,
        style: {
          display: "contents"
        }
      })
    }

    function nR(RR) {
      let {
        children: JR,
        placement: GR = "bottom"
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => {
        var RR;
        return null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null
      }));
      return (0, iR.useEffect)((() => {
        const RR = () => {
          var RR;
          tR(null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null)
        };
        return eR.add(RR), RR(), () => {
          eR.delete(RR)
        }
      }), [GR]), yR ? (0, fR.createPortal)(JR, yR) : null
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  40772: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => hR
    });
    const yR = {
      trader: {
        name: "Lucky Trader",
        shopTab: "Basic Blocks"
      },
      wizard: {
        name: "Lucky Upgrades",
        shopTab: "Team Upgrades"
      }
    };
    var tR = GR(66),
      uR = GR(39198),
      ZR = GR(377);
    const qR = ["Basic", "Rare", "Super"];

    function iR(RR, JR) {
      return `${"Basic"===JR?"":`${JR} `}${"Simple"===RR?"":`${RR} `}Lucky Block`
    }
    const fR = new Map(["Simple", "Building", "Weapon", "Armour", "Tools", "Food", "Potion"].flatMap((RR => qR.map((JR => [iR(RR, JR), {
      category: RR,
      rarity: JR
    }])))));
    fR.keys();

    function VR(RR) {
      return fR.get(RR)
    }
    const KR = "Obsidian",
      wR = ["Cobweb"],
      rR = [...["Red", "Blue", "Green", "Yellow"].map((RR => `${(0,ZR.T)(RR)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", KR, ...wR];

    function eR(RR) {
      return rR.includes(RR)
    }
    var aR = GR(679);

    function LR(RR, JR) {
      const GR = VR(RR);
      if (GR) {
        const RR = VR(JR);
        if (!RR) return;
        const yR = qR.length - 1 - qR.indexOf(RR.rarity);
        return (RR.category === GR.category ? 0 : 1) * qR.length + yR
      }
      if (!eR(RR)) return;
      if (JR === RR) return 0;
      const yR = RR => eR(RR) && !wR.includes(RR) && RR !== KR;
      return yR(RR) && yR(JR) ? 1 : void 0
    }
    const nR = [...Array.from({
      length: aR.q - aR.m
    }, ((RR, JR) => aR.m + JR)), ...Array.from({
      length: aR.m
    }, ((RR, JR) => JR))];
    class UR {
      constructor(RR) {
        this.inventory = RR, this.pending = new Map
      }
      onPlace(RR) {
        var JR;
        const GR = this.inventory.selectedSlot(),
          yR = this.inventory.itemAt(GR);
        (null === yR || void 0 === yR ? void 0 : yR.name) === RR && (null !== (JR = yR.amount) && void 0 !== JR ? JR : 1) <= 1 && WR(RR) && this.pending.set(GR, RR)
      }
      onDrop(RR, JR) {
        JR < aR.m && null === this.inventory.itemAt(JR) && WR(RR) && this.refill(JR, RR)
      }
      gK() {
        const RR = [...this.pending];
        this.pending.clear();
        for (const [JR, GR] of RR) null === this.inventory.itemAt(JR) && this.refill(JR, GR)
      }
      refill(RR, JR) {
        const GR = function(RR, JR, GR, yR) {
          let tR, uR = 1 / 0;
          for (const ZR of nR) {
            if (ZR === JR) continue;
            const qR = yR(ZR);
            if (!qR || ZR < aR.m && JR !== GR) continue;
            const iR = LR(RR, qR.name);
            void 0 !== iR && iR < uR && (tR = ZR, uR = iR)
          }
          return tR
        }(JR, RR, this.inventory.selectedSlot(), this.inventory.itemAt);
        void 0 !== GR && this.inventory.swap(RR, GR)
      }
    }

    function WR(RR) {
      return !!VR(RR) || eR(RR)
    }
    var AR = GR(3494),
      CR = GR(83),
      XR = GR(1163),
      MR = GR.n(XR);
    const BR = "Lucky Clover",
      lR = {
        Basic: [35, 45],
        Rare: [100, 130],
        Super: [250, 330]
      };

    function pR(RR) {
      return lR[RR][0]
    }

    function gR(RR) {
      return qR.filter((JR => RR >= pR(JR)))
    }
    var bR = GR(359),
      vR = GR(3465),
      OR = GR(25),
      xR = GR(3701),
      NR = GR(2123),
      DR = GR(37796),
      HR = GR(1468);
    var oR = GR(1378);
    const cR = {
      Basic: ZR.C.whiteUiText,
      Rare: ZR.C.goldUiText,
      Super: ZR.C.cyanUiText
    };
    let PR = 1;

    function IR() {
      const RR = (0, vR.f)("currencyAmounts"),
        JR = null === RR || void 0 === RR ? void 0 : RR.Clovers;
      return !JR || JR.hidden ? null : (0, oR.jsx)(DR.d, {
        children: (0, oR.jsx)(mR, {
          amount: JR.amount
        })
      })
    }

    function mR(RR) {
      var JR, GR, yR;
      let {
        amount: uR
      } = RR;
      const {
        openEverythingMenuName: iR
      } = (0, OR.o)(["openEverythingMenuName"]), fR = (0, xR.c)(), [VR, KR] = (0, tR.useState)(uR), [wR, rR] = (0, tR.useState)(null), [eR, aR] = (0, tR.useState)(0), [LR, nR] = (0, tR.useState)([]), UR = (0, tR.useRef)(uR), WR = (0, tR.useRef)(!1), AR = (0, tR.useRef)(null), XR = iR === bR.o.SHOP;
      (0, tR.useEffect)((() => {
        const RR = UR.current;
        if (UR.current = uR, uR <= RR || XR) return void KR(uR);
        const JR = fR || LR.length > 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : (GR = uR - RR, yR = !WR.current, GR <= 0 || !yR && GR < 40 ? 0 : Math.min(4, Math.ceil(GR / 30)));
        var GR, yR;
        if (WR.current = !0, gR(uR).length > gR(RR).length && aR(PR++), JR > 0) {
          const RR = [];
          for (let GR = 0; GR < JR; GR++) RR.push({
            id: PR++,
            x: window.innerWidth / 2 + 60 * (Math.random() - .5),
            y: .58 * window.innerHeight + 30 * (Math.random() - .5),
            delayMs: 70 * GR
          });
          nR((JR => [...JR, ...RR]))
        }
        const tR = JR > 0 ? 600 : 0;
        rR({
          id: PR++,
          delayMs: tR
        });
        const qR = performance.now() + tR;
        let iR = 0;
        const VR = JR => {
          const GR = ZR.e.clamp((JR - qR) / 600, 0, 1);
          KR(Math.round(RR + (uR - RR) * GR)), GR < 1 && (iR = requestAnimationFrame(VR))
        };
        return iR = requestAnimationFrame(VR), () => {
          cancelAnimationFrame(iR)
        }
      }), [uR, XR]);
      const lR = function(RR) {
          var JR;
          const GR = null !== (JR = qR.find((JR => RR < pR(JR)))) && void 0 !== JR ? JR : "Super";
          return {
            rarity: GR,
            progress: ZR.e.clamp(RR / pR(GR), 0, 1)
          }
        }(VR),
        vR = gR(VR).at(-1);
      return (0, oR.jsxs)(oR.Fragment, {
        children: [(0, oR.jsx)("div", {
          className: "LuckyCloverWalletAnchor",
          children: (0, oR.jsxs)("div", {
            className: MR()("LuckyCloverWallet", {
              Capped: vR && "Basic" !== vR
            }),
            style: vR && {
              "--luckyTierColour": cR[vR]
            },
            children: [(0, oR.jsx)("div", {
              className: "LuckyCloverWalletFill",
              style: {
                transform: `scaleX(${lR.progress})`
              }
            }), eR > 0 && (0, oR.jsx)("div", {
              className: "LuckyCloverWalletReached",
              style: {
                animationDelay: `${null!==(JR=null===wR||void 0===wR?void 0:wR.delayMs)&&void 0!==JR?JR:0}ms`
              }
            }, eR), (0, oR.jsx)("div", {
              ref: AR,
              className: MR()("LuckyCloverWalletIcon", wR && "Bounce"),
              style: {
                animationDelay: `${null!==(yR=null===wR||void 0===wR?void 0:wR.delayMs)&&void 0!==yR?yR:0}ms`
              },
              children: (0, oR.jsx)(NR.b, {
                itemName: BR,
                amount: 0
              })
            }, null !== (GR = null === wR || void 0 === wR ? void 0 : wR.id) && void 0 !== GR ? GR : 0), (0, oR.jsx)("span", {
              className: "LuckyCloverWalletAmount SmallTextBold",
              children: VR
            }), vR && (0, oR.jsx)(HR.d, {
              className: "LuckyCloverWalletShop",
              name: "cart-shopping"
            })]
          })
        }), (0, CR.createPortal)(LR.map((RR => (0, oR.jsx)(zR, {
          flyer: RR,
          target: AR,
          onDone: () => {
            nR((JR => JR.filter((JR => JR.id !== RR.id))))
          }
        }, RR.id))), document.body)]
      })
    }

    function zR(RR) {
      let {
        flyer: JR,
        target: GR,
        onDone: yR
      } = RR;
      const uR = (0, tR.useRef)(null);
      return (0, tR.useEffect)((() => {
        var RR;
        const tR = null === (RR = GR.current) || void 0 === RR ? void 0 : RR.getBoundingClientRect();
        if (!uR.current || !tR) return void yR();
        const {
          x: ZR,
          y: qR
        } = JR, iR = ZR + 140 * (Math.random() - .5), fR = qR - 30 - 40 * Math.random(), VR = uR.current.animate([{
          transform: `translate(${ZR}px, ${qR}px) scale(0.3)`,
          opacity: 0
        }, {
          transform: `translate(${iR}px, ${fR}px) scale(1.3)`,
          opacity: 1,
          offset: .3
        }, {
          transform: `translate(${tR.left}px, ${tR.top}px) scale(0.8)`,
          opacity: .9
        }], {
          duration: 750,
          easing: "ease-in",
          delay: JR.delayMs,
          fill: "backwards"
        });
        return VR.onfinish = yR, () => {
          VR.cancel()
        }
      }), []), (0, oR.jsx)("div", {
        ref: uR,
        className: "LuckyCloverFlying",
        children: (0, oR.jsx)(NR.b, {
          itemName: BR,
          amount: 0
        })
      })
    }
    var SR = GR(32);
    const jR = "luckyGearUpgradeView",
      dR = {
        Wood: "#c8964f",
        Stone: "#b4b4b4",
        Iron: "#f2f2f2",
        Gold: "#ffd83d",
        Diamond: "#5cf2ea"
      };

    function ER(RR) {
      var JR;
      return null !== (JR = dR[RR.split(" ")[0]]) && void 0 !== JR ? JR : "#e07bff"
    }
    class YR {
      constructor(RR, JR) {
        this.selectedSlot = RR, this.itemAt = JR, this.rings = [], this.unseen = new Map, this.view = {
          rings: [],
          unseenSlots: []
        }, this.nextId = 0
      }
      getView() {
        return this.view
      }
      BK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        for (const [GR, yR, tR] of RR) this.rings.push({
          id: this.nextId++,
          slot: GR,
          colour: ER(tR),
          until: JR + 1200
        }), GR !== this.selectedSlot() && this.unseen.set(GR, {
          from: yR,
          to: tR
        });
        this.JK()
      }
      gK() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        if (!this.rings.length && !this.unseen.size) return;
        const JR = this.rings.filter((JR => JR.until > RR));
        let GR = JR.length !== this.rings.length;
        this.rings = JR;
        for (const [yR, {
            from: tR,
            to: uR
          }] of this.unseen) {
          const RR = this.itemAt(yR);
          (yR === this.selectedSlot() || RR !== uR && RR !== tR) && (this.unseen.delete(yR), GR = !0)
        }
        GR && this.JK()
      }
      JK() {
        this.view = {
          rings: [...this.rings],
          unseenSlots: [...this.unseen.keys()]
        }, SR.n.JK(jR, this.view)
      }
    }
    var kR = GR(1581);

    function QR(RR) {
      return document.querySelector(`.HotBar [data-inven-idx="${RR}"]`)
    }

    function FR(RR) {
      let {
        ring: JR
      } = RR;
      const [GR, yR] = (0, tR.useState)(null);
      return (0, tR.useLayoutEffect)((() => {
        var RR, GR;
        yR(null !== (RR = null === (GR = QR(JR.slot)) || void 0 === GR ? void 0 : GR.getBoundingClientRect()) && void 0 !== RR ? RR : null)
      }), [JR]), GR ? (0, oR.jsx)("div", {
        className: "LuckyGearRing",
        style: {
          left: GR.left,
          top: GR.top,
          width: GR.width,
          height: GR.height,
          "--ringColour": JR.colour,
          "--ringMs": "1200ms"
        }
      }) : null
    }

    function TR(RR) {
      let {
        slot: JR
      } = RR;
      const [GR, yR] = (0, tR.useState)(null);
      return (0, tR.useLayoutEffect)((() => {
        const RR = () => {
          yR(QR(JR))
        };
        RR();
        const GR = new MutationObserver(RR),
          tR = document.querySelector(".BottomMiddleElements");
        return tR && GR.observe(tR, {
          childList: !0,
          subtree: !0
        }), () => {
          GR.disconnect()
        }
      }), [JR]), GR ? (0, CR.createPortal)((0, oR.jsx)("div", {
        className: "LuckyGearUnseen"
      }), GR) : null
    }

    function sR(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, kR.h)(jR, JR.getView());
      return (0, oR.jsxs)(oR.Fragment, {
        children: [GR.rings.map((RR => (0, oR.jsx)(FR, {
          ring: RR
        }, RR.id))), GR.unseenSlots.map((RR => (0, oR.jsx)(TR, {
          slot: RR
        }, RR)))]
      })
    }
    const hR = function(RR, JR, GR, ZR) {
      let qR, {
          localPlayerId: iR
        } = ZR,
        fR = null;
      const VR = new UR({
          itemAt: RR => qR.getItemSlot(iR, RR),
          selectedSlot: () => qR.getSelectedInventorySlotI(iR),
          swap: (RR, JR) => {
            qR.swapInventorySlots(RR, JR)
          }
        }),
        KR = new YR((() => qR.getSelectedInventorySlotI(iR)), (RR => {
          var JR;
          return null === (JR = qR.getItemSlot(iR, RR)) || void 0 === JR ? void 0 : JR.name
        }));
      return {
        plugins: {
          placeAgainstBeds: (0, uR.e)()
        },
        onCreate: RR => {
          qR = RR, fR = (0, AR.G)((0, tR.createElement)(tR.Fragment, null, (0, tR.createElement)(IR), (0, tR.createElement)(sR, {
            controller: KR
          })))
        },
        onClose: () => {
          var RR;
          null === (RR = fR) || void 0 === RR || RR()
        },
        gK: () => {
          VR.gK(), KR.gK()
        },
        onReceivedMessageFromServer: (RR, JR) => {
          "luckyGearUpgrade" === RR && KR.BK(JR)
        },
        onPlayerChangeBlock: (RR, JR, GR, yR, tR, uR) => {
          "Air" !== uR && VR.onPlace(uR)
        },
        onPlayerDropItem: (RR, JR, GR, yR) => {
          VR.onDrop(JR, yR)
        },
        onPlayerAltAction: (RR, JR, GR, tR, uR, ZR) => {
          if (!ZR || "Mesh" !== qR.getEntityType(ZR)) return;
          const iR = qR.getEntityName(ZR),
            fR = Object.values(yR).find((RR => RR.name === iR));
          fR && qR.openShop(RR, !1, fR.shopTab)
        }
      }
    }
  },
  39198: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR
    });
    var yR = GR(377),
      tR = GR(38040),
      uR = GR(5290);
    const ZR = ["Leaf Bed", "_Leaf Bed Head", ...yR.Cc.flatMap((RR => [`${RR} Bed`, `_${RR} Bed Head`, `${RR} Strongbed`, `_${RR} Strongbed Head`]))];

    function qR() {
      let RR;
      return {
        onCreate(JR) {
          RR = JR
        },
        altVetoBlocks: ZR,
        onPlayerAttemptAltAction(JR, GR, yR, ZR, qR, iR) {
          var fR;
          if ((0, tR.d)(RR.getMetaInfo(qR).rootName) && !RR.isEntityInteractable(iR) && (0, uR.c)(null === (fR = RR.uyR(JR)) || void 0 === fR ? void 0 : fR.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38040: (RR, JR, GR) => {
    function yR(RR) {
      return RR.includes("Leaf Bed")
    }

    function tR(RR) {
      return / Bed(?: Head)?(?:\||$)/.test(RR) && !yR(RR)
    }

    function uR(RR) {
      return RR.includes(" Strongbed")
    }

    function ZR(RR) {
      return yR(RR) || tR(RR) || uR(RR)
    }
    GR.d(JR, {
      d: () => ZR,
      f: () => yR,
      h: () => uR,
      k: () => tR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);