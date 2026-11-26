export const id = 18;
export const ids = [18];
export const modules = {
  37472: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH,
      e: () => MH,
      i: () => GH,
      k: () => XH
    });
    var AH = LH(34986),
      rH = LH(37474),
      SH = LH(37479),
      hH = LH(9412),
      tH = LH(1450),
      zH = LH(45),
      CH = LH(69),
      EH = LH(1225);

    function XH() {
      var HH;
      return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
        children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
      })
    }

    function GH(HH) {
      var BH;
      let {
        show: LH
      } = HH;
      (0, tH.e)(rH.b, (0, rH.p)());
      const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
      return (0, zH.useEffect)((() => {
        var HH;
        LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
      }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
        showing: LH,
        globallyUniqueKey: "clientGameMenu",
        children: null === CH || void 0 === CH ? void 0 : CH.content
      })
    }
    const YH = new Map,
      uH = new Set;

    function QH(HH, BH) {
      BH ? YH.set(HH, BH) : YH.delete(HH);
      for (const LH of uH) LH()
    }

    function WH(HH) {
      let {
        placement: BH = "bottom"
      } = HH;
      const LH = (0, zH.useRef)(null);
      return (0, zH.useLayoutEffect)((() => {
        const HH = LH.current;
        return QH(BH, HH), () => {
          YH.get(BH) === HH && QH(BH, null)
        }
      }), [BH]), (0, EH.jsx)("div", {
        ref: LH,
        id: `clientGameHud-${BH}`,
        style: {
          display: "contents"
        }
      })
    }

    function MH(HH) {
      let {
        children: BH,
        placement: LH = "bottom"
      } = HH;
      const [AH, rH] = (0, zH.useState)((() => {
        var HH;
        return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
      }));
      return (0, zH.useEffect)((() => {
        const HH = () => {
          var HH;
          rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
        };
        return uH.add(HH), HH(), () => {
          uH.delete(HH)
        }
      }), [LH]), AH ? (0, CH.createPortal)(BH, AH) : null
    }
  },
  34986: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(4947),
      rH = LH(4951);

    function SH(HH) {
      let {
        children: BH,
        showing: LH,
        globallyUniqueKey: SH,
        alwaysMountChildren: hH = !1,
        doGameplayStartStopOnShow: tH = !0,
        keepsMovement: zH = !1
      } = HH;
      return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
    }
  },
  37569: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH,
      i: () => tH,
      k: () => zH
    });
    var AH = LH(45),
      rH = LH(3465);
    const SH = 8,
      hH = "InGameHeaderContainer",
      tH = "TopRightElements";

    function zH(HH) {
      const [BH] = (0, rH.b)(), [LH, zH] = (0, AH.useState)(!1);
      return (0, AH.useLayoutEffect)((() => {
        if (!HH) return;
        const BH = document.querySelector(`.${hH}`),
          LH = document.querySelector(`.${tH}`),
          AH = () => {
            const AH = HH.getBoundingClientRect(),
              rH = BH ? BH.getBoundingClientRect().right : 0,
              hH = LH ? LH.getBoundingClientRect().left : window.innerWidth,
              tH = AH.left < rH + SH,
              CH = AH.right > hH - SH;
            zH(tH || CH)
          };
        AH();
        const rH = new ResizeObserver(AH);
        return rH.observe(HH), BH && rH.observe(BH), LH && rH.observe(LH), () => {
          rH.disconnect()
        }
      }), [HH, BH]), LH
    }
  },
  40413: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      g: () => rH,
      h: () => SH
    });
    var AH = LH(45);

    function rH(HH) {
      return tH(HH, zH)
    }

    function SH(HH) {
      return tH(HH, CH)
    }

    function hH(HH) {
      return `${Math.floor(HH/60)}:${String(HH%60).padStart(2,"0")}`
    }

    function tH(HH, BH) {
      const [, LH] = (0, AH.useState)(null);
      return (0, AH.useEffect)((() => {
        if (0 === HH) return;
        const AH = window.setInterval((() => {
          const AH = BH(HH);
          LH((BH => (null === BH || void 0 === BH ? void 0 : BH.endsAt) === HH && BH.value === AH ? BH : {
            endsAt: HH,
            value: AH
          }))
        }), 250);
        return () => {
          window.clearInterval(AH)
        }
      }), [HH, BH]), BH(HH)
    }

    function zH(HH) {
      return (HH - performance.now()) / 1e3
    }

    function CH(HH) {
      return Math.max(0, Math.ceil(zH(HH)))
    }
  },
  37565: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    const AH = [{
      maxDist: 30,
      timeBetweenSoftChecks: 1e3,
      softUpdateDist: 2,
      hardUpdateDist: 10
    }, {
      maxDist: 200,
      timeBetweenSoftChecks: 2e3,
      softUpdateDist: 5,
      hardUpdateDist: 20
    }, {
      maxDist: 1 / 0,
      timeBetweenSoftChecks: 5e3,
      softUpdateDist: 30,
      hardUpdateDist: 100
    }];

    function rH(HH, BH, LH) {
      const rH = Math.abs(HH - BH),
        SH = Date.now() - LH;
      for (const hH of AH)
        if (HH < hH.maxDist) return rH >= hH.hardUpdateDist || SH > hH.timeBetweenSoftChecks && rH >= hH.softUpdateDist;
      return !1
    }
  },
  9412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      e: () => rH
    });
    let AH = null;
    const rH = function(HH) {
        const BH = {
          cycle: HH,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return AH = BH, () => {
          AH === BH && (AH = null)
        }
      },
      SH = () => {
        var HH;
        return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
      }
  },
  39425: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      var AH;
      const {
        width: rH,
        height: SH
      } = LH, hH = null !== (AH = HH.text) && void 0 !== AH ? AH : HH, tH = (hH.x / 100 - .5) * rH, zH = (hH.y / 100 - .5) * SH, CH = rH / 2 - BH.x;
      if (null !== HH.text && Math.abs(tH) <= CH && zH >= BH.top - SH / 2 && zH <= SH / 2 - BH.bottom) return {
        x: hH.x,
        y: hH.y
      };
      const EH = Math.min(0 === tH ? 1 / 0 : CH / Math.abs(tH), zH > 0 ? (SH / 2 - BH.bottom) / zH : zH < 0 ? (BH.top - SH / 2) / zH : 1 / 0);
      return !Number.isFinite(EH) || EH < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + tH * EH / rH * 100,
        y: 50 + zH * EH / SH * 100
      }
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  37479: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => uH,
      C: () => xH,
      c: () => SH,
      g: () => QH,
      j: () => WH,
      k: () => tH,
      n: () => GH,
      r: () => MH,
      t: () => XH,
      x: () => vH
    });
    var AH = LH(15),
      rH = LH(18);
    const SH = "clientGameInventoryButtonsChanged",
      hH = new Map;

    function tH() {
      return [...hH.values()].sort(((HH, BH) => {
        var LH, AH;
        return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
      }))
    }
    let zH = null;

    function CH(HH) {
      zH = HH
    }
    let EH = !1;

    function XH(HH) {
      EH = !0;
      try {
        HH.onClick()
      } finally {
        EH = !1
      }
      HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
    }

    function GH() {
      return EH
    }

    function YH() {
      return tH().filter((HH => HH.panel && !HH.disabled))
    }

    function uH(HH) {
      const BH = YH(),
        LH = BH.findIndex((HH => HH.id === zH));
      return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
    }

    function QH() {
      return null !== zH && YH().length > 1
    }

    function WH() {
      CH(null)
    }

    function MH() {
      "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
    }

    function xH() {
      const HH = zH;
      return CH(null), HH
    }

    function vH(HH) {
      return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
        hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
      }
    }
  },
  37474: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => xH,
      g: () => WH,
      j: () => MH,
      n: () => GH,
      p: () => CH,
      t: () => QH,
      u: () => YH,
      v: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(37479);
    const tH = "clientGameUiChanged";
    let zH = null;

    function CH() {
      return zH
    }

    function EH(HH, BH) {
      const LH = {
        content: HH,
        menu: BH
      };
      return zH = LH, rH.k.AX(tH, zH, !0), () => {
        zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
      }
    }
    let XH = null;

    function GH() {
      return XH
    }

    function YH(HH) {
      return XH = HH, () => {
        XH === HH && (XH = null)
      }
    }
    let uH = !1;

    function QH() {
      const HH = AH.c.get("openInGameMenuName");
      "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function WH() {
      vH(!1)
    }

    function MH() {
      vH(uH)
    }

    function xH() {
      uH && vH(!1)
    }

    function vH(HH) {
      "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
        openInGameMenuName: HH ? "inventory" : null
      }), HH || (0, hH.j)(), uH = !1
    }
  },
  40419: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH
    });
    var AH = LH(37565),
      rH = LH(1123),
      SH = LH(1194),
      hH = LH(39370),
      tH = LH(39425);
    class zH {
      constructor(HH, BH) {
        var LH;
        this.classes = HH, this.distanceKey = BH, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Mu = !1, this.Av = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Av), null === (LH = window.visualViewport) || void 0 === LH || LH.addEventListener("resize", this.Av)
      }
      bindMarker(HH) {
        const BH = this.refs.get(HH);
        if (BH) return BH;
        const LH = BH => {
          var AH;
          null === (AH = this.markers.get(HH)) || void 0 === AH || AH.stopObserving(), this.markers.delete(HH), BH && !this.Mu ? (this.markers.set(HH, this.mount(BH)), this.refs.set(HH, LH)) : this.refs.delete(HH)
        };
        return this.refs.set(HH, LH), LH
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(HH) {
        this.render = HH
      }
      update(HH, BH, LH, AH, rH) {
        const SH = this.markers.get(HH);
        SH && (SH.target ??= [0, 0, 0], SH.target[0] = BH, SH.target[1] = LH, SH.target[2] = AH, this.place(SH), this.eA(SH, rH && Math.hypot(BH - rH[0], LH - rH[1], AH - rH[2])))
      }
      dispose() {
        var HH;
        this.Mu = !0, window.removeEventListener("resize", this.Av), null === (HH = window.visualViewport) || void 0 === HH || HH.removeEventListener("resize", this.Av);
        for (const BH of this.markers.values()) BH.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(HH) {
        const {
          render: BH,
          viewport: LH
        } = this;
        if (!BH || !HH.target) return;
        const AH = (50 - BH.screenBandPct.y) / 100 * LH.height,
          rH = {
            x: HH.halfSize.width + 8,
            top: HH.halfSize.height + 8,
            bottom: HH.halfSize.height + HH.labelsBelow + AH
          },
          SH = BH.projectWorldPosToViewport(HH.target),
          zH = null !== SH && void 0 !== SH ? SH : BH.projectWorldPosToScreenPos(HH.target),
          CH = (0, tH.e)({
            x: zH.x,
            y: zH.y,
            text: SH
          }, rH, LH);
        (0, hH.d)(HH.root, Math.round(100 * CH.x) / 100, Math.round(100 * CH.y) / 100)
      }
      eA(HH, BH) {
        if (null === BH) return void(null !== HH.metres && (HH.metres = null, HH.distance.textContent = ""));
        const LH = Date.now();
        (null === HH.metres || (0, AH.e)(BH, HH.metres, HH.metresShownAt)) && (HH.metres = Math.round(BH), HH.metresShownAt = LH, HH.distance.textContent = (0, rH.u)(SH.g.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(HH.metres)
        }))
      }
      mount(HH) {
        const BH = {
            root: HH,
            distance: HH.querySelector(`.${this.classes.distance}`),
            halfSize: {
              width: 0,
              height: 0
            },
            labelsBelow: 0,
            target: null,
            metres: null,
            metresShownAt: 0,
            stopObserving: () => {}
          },
          LH = HH.querySelector(`.${this.classes.labels}`),
          AH = new ResizeObserver((() => {
            BH.halfSize = {
              width: Math.max(HH.offsetWidth, LH.offsetWidth) / 2,
              height: HH.offsetHeight / 2
            }, BH.labelsBelow = LH.offsetTop + LH.offsetHeight - HH.offsetHeight, this.place(BH)
          }));
        return AH.observe(HH, {
          box: "border-box"
        }), AH.observe(LH, {
          box: "border-box"
        }), BH.stopObserving = () => {
          AH.disconnect()
        }, BH
      }
    }
  },
  40411: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => YB
    });
    const AH = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var rH = LH(45),
      SH = LH(37474),
      hH = LH(37912),
      tH = LH(37496),
      zH = LH(1789),
      CH = LH(18);
    const EH = {
      M1911: "pistol",
      Deagle: "pistol",
      "Block-19": "pistol",
      "AK-47": "rifle",
      M16: "rifle",
      "TAR-21": "rifle",
      SKAR: "rifle",
      FMR: "rifle",
      MP40: "smg",
      "Mini Izu": "smg",
      "Double Barrel": "shotgun",
      "Striker-12": "shotgun",
      DMR: "marksman",
      VSR: "marksman",
      GPMG: "machineGun",
      Minigun: "machineGun",
      RPG: "launcher",
      "Moonstone Dagger": "melee",
      "Moonstone Boomerang": "melee",
      "Frag Grenade": "throwable",
      "Smoke Grenade": "throwable",
      "Mining Grenade": "throwable",
      "Splash Instant Healing Potion": "throwable",
      Snowdash: "throwable"
    };
    const XH = 32;

    function GH(HH, BH, LH, AH) {
      return {
        tag: "line",
        attrs: {
          x1: HH,
          y1: BH,
          x2: LH,
          y2: AH,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function YH(HH) {
      return {
        tag: "circle",
        attrs: {
          cx: XH,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XH,
          r: HH,
          class: "Fill"
        }
      }
    }

    function uH(HH, BH) {
      return {
        tag: "path",
        attrs: {
          d: HH,
          "stroke-width": BH
        }
      }
    }

    function QH(HH, BH, LH) {
      return {
        tag: "circle",
        attrs: {
          cx: XH,
          cy: XH,
          r: HH,
          "stroke-width": BH,
          class: LH
        }
      }
    }

    function WH(HH, BH, LH) {
      return {
        tag: "text",
        attrs: {
          x: HH,
          y: BH,
          class: "Fill Label"
        },
        text: LH
      }
    }
    const MH = {
      pistol: HH => [GH(XH, XH - HH - 5, XH, XH - HH), GH(XH - HH - 5, XH, XH - HH, XH), GH(XH + HH, XH, XH + HH + 5, XH), YH(1.4)],
      rifle: HH => [GH(XH, XH - HH - 8, XH, XH - HH), GH(XH, XH + HH, XH, XH + HH + 8), GH(XH - HH - 8, XH, XH - HH, XH), GH(XH + HH, XH, XH + HH + 8, XH), YH(1)],
      smg: HH => {
        const BH = Math.PI / 2,
          LH = [];
        for (let hH = 0; hH < 4; hH++) LH.push((rH = hH * BH + .35, SH = (hH + 1) * BH - .35, uH(`M${XH+(AH=6+HH)*Math.cos(rH)} ${XH+AH*Math.sin(rH)} A${AH} ${AH} 0 0 1 ${XH+AH*Math.cos(SH)} ${XH+AH*Math.sin(SH)}`, 2)));
        var AH, rH, SH;
        return [...LH, YH(1.4)]
      },
      shotgun: HH => [QH(HH, 3, "Ring Outline"), QH(HH, 1.5, "Ring")],
      marksman: HH => [uH(`M${26-HH/2} ${39+HH/2} L32 33 L${38+HH/2} ${39+HH/2}`, 2), GH(14 - HH, XH, 24 - HH, XH, 1.5), GH(40 + HH, XH, 50 + HH, XH, 1.5), GH(14 - HH, 30, 14 - HH, 34, 1.5), GH(50 + HH, 30, 50 + HH, 34, 1.5)],
      machineGun: HH => {
        const BH = 10 + HH,
          LH = [];
        for (const [AH, rH] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) LH.push(uH(`M${XH+AH*BH} ${XH+rH*(BH-5)} L${XH+AH*BH} ${XH+rH*BH} L${XH+AH*(BH-5)} ${XH+rH*BH}`, 2));
        return [...LH, GH(XH, 28, XH, 36, 1.5), GH(28, XH, 36, XH, 1.5)]
      },
      launcher: () => [GH(14, 30, 50, 30, 1.5), GH(XH, 24, XH, 52, 1.5), GH(28, 38, 36, 38, 1.5), GH(29, 44, 35, 44, 1.5), GH(30, 50, 34, 50, 1.5), WH(38, 40, "100"), WH(37, 46, "200"), YH(1.4, 30)],
      melee: () => [uH("M32 26 L38 32 L32 38 L26 32 Z", 1.5), YH(1.2)],
      throwable: () => [YH(1.6)]
    };

    function xH(HH) {
      let {
        tag: BH,
        attrs: LH,
        text: AH
      } = HH, rH = `<${BH}`;
      for (const [SH, hH] of Object.entries(LH)) rH += ` ${SH}="${hH}"`;
      return void 0 === AH ? `${rH}/>` : `${rH}>${AH}</${BH}>`
    }
    class vH {
      constructor(HH, BH) {
        this.api = HH, this.localPlayerId = BH, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = HH => {
          this.element = HH, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, HH && !this.enabled && (HH.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, zH.getRemInPx)()))
        }, this.tokens = [CH.k.subscribe("aimingOverlay", (HH => {
          this.sniperOverlay = "sniper" === HH
        })), CH.k.subscribe("mouseState", (HH => {
          let {
            isDown: BH
          } = HH;
          this.mouseDown = BH
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      vI(HH) {
        HH !== this.enabled && (this.enabled = HH, this.drawnVisible = null, HH || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(HH, BH) {
        var LH, AH;
        if (!this.enabled) return;
        const {
          api: rH
        } = this, SH = rH.isAlive(this.localPlayerId) && null !== (LH = null === (AH = rH.yLH(this.localPlayerId)) || void 0 === AH ? void 0 : AH.name) && void 0 !== LH ? LH : null, hH = (tH = SH) && EH[tH] || null;
        var tH;
        if (this.setOwnsCrosshair(null !== hH), !this.element) return;
        const zH = rH.getHeldGunInaccuracy(),
          CH = null !== zH,
          XH = null !== hH && !this.sniperOverlay && rH.isCrosshairShown();
        if (XH !== this.drawnVisible && (this.drawnVisible = XH, this.element.style.display = XH ? "block" : "none"), !XH) return;
        const GH = CH ? function(HH) {
            return "launcher" === HH || "melee" === HH || "throwable" === HH ? "none" : "shotgun" === HH ? "cone" : "offset"
          }(hH) : "none",
          YH = null !== zH && void 0 !== zH ? zH : 0;
        "cone" === GH ? this.drawCone(hH, this.coneRadiusVh(YH, BH) * this.gapPerVh, HH) : (this.coneDrawn = !1, this.draw(hH, "none" === GH ? 2 : this.offsetGap(YH)));
        const uH = !CH && this.mouseDown;
        uH !== this.drawnPressed && (this.drawnPressed = uH, this.element.classList.toggle("Pressed", uH))
      }
      dispose() {
        for (const HH of this.tokens) CH.k.unsubscribe(HH);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(HH, BH) {
        var LH, AH;
        HH !== this.drawnFamily ? (this.drawnFamily = HH, this.drawnGap = BH, this.element.innerHTML = function(HH, BH) {
          return `<svg viewBox="0 0 64 64">${MH[HH](BH).map(xH).join("")}</svg>`
        }(HH, BH), this.shapes = Array.from(null !== (LH = null === (AH = this.element.firstElementChild) || void 0 === AH ? void 0 : AH.children) && void 0 !== LH ? LH : [])) : BH !== this.drawnGap && (this.drawnGap = BH, function(HH, BH, LH) {
          const AH = MH[BH](LH);
          for (let rH = 0; rH < AH.length; rH++)
            for (const [BH, LH] of Object.entries(AH[rH].attrs)) {
              const AH = String(LH);
              HH[rH].getAttribute(BH) !== AH && HH[rH].setAttribute(BH, AH)
            }
        }(this.shapes, HH, BH))
      }
      drawCone(HH, BH, LH) {
        HH === this.drawnFamily && this.coneDrawn ? this.shownRadius += (BH - this.shownRadius) * (1 - Math.exp(-LH / 80)) : this.shownRadius = BH, this.coneDrawn = !0, this.draw(HH, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(HH, BH) {
        if (!(BH > 0)) return 1;
        const LH = HH * hH.j / 2;
        return Math.max(50 * Math.tan(LH) / BH, 1)
      }
      offsetGap(HH) {
        const BH = 2 + ((0, tH.d)(HH) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * BH) / 2)
      }
      setOwnsCrosshair(HH) {
        HH !== this.ownsCrosshair && (this.ownsCrosshair = HH, document.body.classList.toggle("FrontlineCustomCrosshair", HH))
      }
    }
    const PH = "FrontlineCustomDamage",
      TH = .45,
      UH = .2;
    class VH {
      constructor(HH, BH) {
        this.api = HH, this.localPlayerId = BH, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.PA = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = HH => {
          var BH, LH;
          this.clearHits(), this.root = HH, this.lowLayer = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".FrontlineDamageLow")) && void 0 !== BH ? BH : null, this.arcLayer = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".FrontlineDamageArcs")) && void 0 !== LH ? LH : null, this.showRoot(), this.drawLow()
        }, this.token = CH.k.subscribe("damagedByOtherPlayer", (HH => {
          let {
            direction: BH,
            xA: LH
          } = HH;
          this.onHurt(BH, LH)
        })), this.syncHealth(), document.body.classList.add(PH)
      }
      vI(HH) {
        HH !== this.enabled && (this.enabled = HH, document.body.classList.toggle(PH, HH), HH || this.clearHits(), this.showRoot())
      }
      frame(HH) {
        this.syncHealth(), this.cameraHeading = HH;
        for (const BH of this.arcs) this.drawArcAngle(BH)
      }
      dispose() {
        CH.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(PH)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const HH = this.api.getClientOption(this.localPlayerId, "_health"),
          BH = this.api.getClientOption(this.localPlayerId, "_shield"),
          LH = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(HH, this.readHealth) && Object.is(BH, this.readShield) && Object.is(LH, this.readMaxHealth)) return;
        if (this.readHealth = HH, this.readShield = BH, this.readMaxHealth = LH, null === HH || void 0 === HH || !LH) return this.lastHealthPool = null, this.maxHealth = null, this.PA = 1, this.dead = !1, void this.drawLow();
        const AH = HH + (null !== BH && void 0 !== BH ? BH : 0);
        if (null !== this.lastHealthPool && AH < this.lastHealthPool) {
          const HH = performance.now(),
            BH = (this.lastHealthPool - AH) / LH;
          this.lastDrop = HH - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + BH,
            at: this.lastDrop.at
          } : {
            frac: BH,
            at: HH
          }
        }
        this.dead = HH <= 0, this.dead && this.clearHits(), this.lastHealthPool = AH, this.maxHealth = LH, this.PA = HH > 0 ? HH / LH : 1, this.drawLow()
      }
      onHurt(HH, BH) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const LH = Math.min(1, this.takeDamageFrac(BH) / .3);
        null !== HH && this.showArc(HH, LH), this.flashEdge(null === HH ? null : HH - this.cameraHeading, .4 + .6 * LH)
      }
      takeDamageFrac(HH) {
        if (void 0 !== HH && this.maxHealth) return HH / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: BH
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, BH
      }
      drawLow() {
        if (!this.lowLayer) return;
        const HH = bH((TH - this.PA) / .25),
          BH = bH((UH - this.PA) / .15000000000000002),
          LH = this.PA < TH;
        this.lowLayer.classList.toggle("Active", LH), this.lowLayer.classList.toggle("Critical", this.PA < UH), this.lowLayer.style.opacity = String(LH ? .55 + .3 * HH + .15 * BH : 0)
      }
      showArc(HH, BH) {
        var LH, AH;
        if (!this.arcLayer) return;
        let rH = this.arcs.find((BH => OH(BH.direction, HH) < .6));
        if (!rH) {
          const BH = document.createElement("div");
          BH.className = "FrontlineDamageArc", BH.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(BH), rH = {
            element: BH,
            direction: HH,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(rH)
        }
        rH.direction = HH, this.drawArcAngle(rH);
        const SH = rH.fade ? Number(getComputedStyle(rH.element).opacity) : 0;
        null === (LH = rH.fade) || void 0 === LH || LH.cancel(), null === (AH = rH.pop) || void 0 === AH || AH.cancel(), rH.element.style.opacity = "1";
        const hH = rH.element.animate([{
          opacity: SH
        }, {
          opacity: 1
        }], 144);
        rH.fade = hH, rH.pop = rH.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * BH
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const tH = rH;
        hH.onfinish = () => {
          if (tH.fade !== hH) return;
          const HH = tH.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          HH.startTime = hH.startTime, tH.fade = HH, HH.onfinish = () => {
            tH.fade === HH && (tH.element.remove(), kH(this.arcs, tH))
          }
        }
      }
      drawArcAngle(HH) {
        const BH = HH.direction - this.cameraHeading;
        (null === HH.drawnAngle || Math.abs(BH - HH.drawnAngle) > .005) && (HH.drawnAngle = BH, HH.element.style.rotate = `${BH}rad`)
      }
      flashEdge(HH, BH) {
        var LH, AH, rH;
        if (!this.root) return;
        let SH = this.flashes.find((BH => null === BH.angle || null === HH ? BH.angle === HH : OH(BH.angle, HH) < .5));
        if (!SH) {
          const BH = document.createElement("div");
          BH.className = "FrontlineDamageFlash";
          const LH = BH.appendChild(document.createElement("div"));
          LH.className = "FrontlineDamageFlashGlow", this.root.insertBefore(BH, this.arcLayer), SH = {
            element: BH,
            glow: LH,
            angle: HH,
            level: 0,
            animation: null
          }, this.flashes.push(SH)
        }
        const hH = null === (LH = SH.animation) || void 0 === LH || null === (AH = LH.effect) || void 0 === AH ? void 0 : AH.getComputedTiming().progress,
          tH = null === hH || void 0 === hH ? 0 : SH.level * (1 - hH);
        SH.level = Math.min(1, Math.max(BH, tH + .6 * BH)), SH.angle = HH;
        const {
          x: zH,
          y: CH,
          rx: EH,
          ry: XH
        } = function(HH, BH) {
          const LH = window.innerWidth,
            AH = window.innerHeight;
          if (null === HH) return {
            x: LH / 2,
            y: AH / 2,
            rx: 0,
            ry: 0
          };
          const rH = Math.sin(HH),
            SH = -Math.cos(HH),
            hH = LH / 2 / Math.max(1e-6, Math.abs(rH)),
            tH = AH / 2 / Math.max(1e-6, Math.abs(SH)),
            zH = Math.min(hH, tH),
            CH = Math.round(LH / 2 + rH * zH),
            EH = Math.round(AH / 2 + SH * zH),
            XH = AH / 100 * (.85 + .25 * BH),
            GH = hH <= tH,
            YH = Math.round((GH ? 30 : 74) * XH),
            uH = Math.round((GH ? 58 : 26) * XH);
          return {
            x: CH,
            y: EH,
            rx: YH,
            ry: uH
          }
        }(HH, SH.level), {
          style: GH
        } = SH.glow;
        SH.glow.classList.toggle("Everywhere", null === HH), GH.setProperty("--glowX", `${zH}px`), GH.setProperty("--glowY", `${CH}px`), GH.setProperty("--glowRx", `${EH}px`), GH.setProperty("--glowRy", `${XH}px`), SH.element.style.transformOrigin = `${zH}px ${CH}px`, null === (rH = SH.animation) || void 0 === rH || rH.cancel();
        const YH = SH.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: SH.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * SH.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * SH.level
        });
        SH.animation = YH;
        const uH = SH;
        YH.onfinish = () => {
          uH.animation === YH && (uH.element.remove(), kH(this.flashes, uH))
        }
      }
      clearHits() {
        for (const AH of this.arcs) {
          var HH, BH;
          null === (HH = AH.fade) || void 0 === HH || HH.cancel(), AH.fade = null, null === (BH = AH.pop) || void 0 === BH || BH.cancel(), AH.element.remove()
        }
        this.arcs.length = 0;
        for (const AH of this.flashes) {
          var LH;
          null === (LH = AH.animation) || void 0 === LH || LH.cancel(), AH.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function OH(HH, BH) {
      return Math.abs(Math.atan2(Math.sin(HH - BH), Math.cos(HH - BH)))
    }

    function bH(HH) {
      return Math.max(0, Math.min(1, HH))
    }

    function kH(HH, BH) {
      const LH = HH.indexOf(BH); - 1 !== LH && HH.splice(LH, 1)
    }
    var mH = LH(1038),
      oH = LH.n(mH),
      IH = LH(37472),
      fH = LH(37569),
      lH = LH(1123),
      KH = LH(1450),
      cH = LH(40413);
    const eH = "frontlineHudChanged",
      qH = "frontlineScoreboardChanged";
    class gH {
      constructor() {
        this.wire = ["none"], this.scoreboard = {
          wire: ["none"],
          endsAt: 0
        }
      }
      getWire() {
        return this.wire
      }
      getScoreboard() {
        return this.scoreboard
      }
      kX(HH) {
        this.wire = HH, CH.k.AX(eH, HH, !0)
      }
      receiveScoreboard(HH) {
        let BH = "scoreboard" === HH[0] ? performance.now() + HH[5] : 0;
        const LH = this.scoreboard.endsAt;
        0 !== BH && 0 !== LH && Math.abs(BH - LH) < 1e3 && (BH = LH), this.scoreboard = {
          wire: HH,
          endsAt: BH
        }, CH.k.AX(qH, this.scoreboard, !0)
      }
    }
    var NH = LH(1225);
    const RH = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function jH(HH) {
      let {
        className: BH,
        point: LH
      } = HH;
      const [AH, rH, SH, hH, tH, zH] = LH;
      return (0, NH.jsxs)("div", {
        className: oH()(BH, `Owner-${rH||"None"}`, `Leader-${hH||"None"}`, {
          Contested: tH,
          Here: zH
        }),
        children: [(0, NH.jsx)("span", {
          className: "FrontlinePointLetter",
          children: AH
        }), (0, NH.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${SH}%`
          }
        })]
      })
    }
    const nH = (0, rH.memo)((function(HH) {
        let {
          points: BH,
          markers: LH
        } = HH;
        const {
          t: AH
        } = (0, lH.B)();
        return BH ? (0, NH.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: BH.map((HH => {
            const [BH, , , , , , , rH] = HH;
            return (0, NH.jsxs)("div", {
              ref: LH.points.bindMarker(BH),
              className: "FrontlinePointMarker",
              children: [(0, NH.jsx)(jH, {
                className: "FrontlinePointMarkerTile",
                point: HH
              }), (0, NH.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [rH && (0, NH.jsx)("span", {
                  className: oH()("FrontlinePointMarkerHomeTurf", `Team-${rH}`),
                  children: AH("frontlineHud:homeTurf", {
                    team: AH(RH[rH])
                  })
                }), (0, NH.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, BH)
          }))
        }) : null
      })),
      FH = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      DH = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function wH(HH) {
      let {
        hud: BH,
        crosshair: LH,
        damage: AH,
        markers: rH
      } = HH;
      const SH = (0, KH.e)(eH, BH.getWire()),
        hH = (0, KH.e)(qH, BH.getScoreboard());
      return (0, NH.jsxs)(NH.Fragment, {
        children: [(0, NH.jsx)(ZH, {
          damage: AH
        }), (0, NH.jsx)(nH, {
          points: "scoreboard" === hH.wire[0] ? hH.wire[6] : null,
          markers: rH
        }), (0, NH.jsx)(aH, {
          view: hH
        }), (0, NH.jsx)("div", {
          className: "FrontlineReticle",
          ref: LH.bindElement
        }), (0, NH.jsx)(IH.e, {
          children: (0, NH.jsx)(dH, {
            wire: SH
          })
        })]
      })
    }
    const ZH = (0, rH.memo)((function(HH) {
        let {
          damage: BH
        } = HH;
        return (0, NH.jsxs)("div", {
          className: "FrontlineDamage",
          ref: BH.bindElement,
          children: [(0, NH.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, NH.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, NH.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      dH = (0, rH.memo)((function(HH) {
        let {
          wire: BH
        } = HH;
        const {
          t: LH
        } = (0, lH.B)();
        if ("capture" === BH[0]) {
          const [, HH, AH, rH, SH, hH, tH] = BH, zH = Math.round(rH / 100 * 24);
          return (0, NH.jsxs)("div", {
            className: oH()("FrontlinePlate", `Status-${AH}`, `Leader-${SH||"None"}`),
            children: [(0, NH.jsx)(pH, {}), (0, NH.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, NH.jsx)("span", {
                className: "FrontlineObjective",
                children: HH
              }), (0, NH.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, NH.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: LH("frontlineHud:objective", {
                    point: HH,
                    friendly: hH,
                    enemy: tH
                  })
                }), (0, NH.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: LH(FH[AH])
                })]
              }), (0, NH.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(rH).padStart(3, "0"), (0, NH.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, NH.jsx)(JH, {
              segments: 24,
              lit: zH
            })]
          })
        }
        if ("alert" === BH[0]) {
          const [, HH, AH, rH] = BH;
          return (0, NH.jsxs)("div", {
            className: oH()("FrontlinePlate", "FrontlineAlert", `Tone-${rH}`),
            children: [(0, NH.jsx)(pH, {}), (0, NH.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: LH(DH[HH])
            }), (0, NH.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: AH
            })]
          })
        }
        return null
      })),
      aH = (0, rH.memo)((function(HH) {
        let {
          view: BH
        } = HH;
        const {
          t: LH
        } = (0, lH.B)(), AH = (0, rH.useRef)(null), SH = function(HH, BH) {
          const [LH, AH] = (0, rH.useState)(!1);
          return (0, rH.useLayoutEffect)((() => {
            const BH = HH.current;
            if (!BH) return;
            const LH = document.querySelector(`.${fH.f}`),
              rH = document.querySelector(`.${fH.i}`),
              SH = () => {
                var HH;
                const SH = BH.querySelector(".FrontlineTeamTrack"),
                  hH = (0, zH.getRemInPx)(),
                  tH = BH.getBoundingClientRect().width - 2 * (null !== (HH = null === SH || void 0 === SH ? void 0 : SH.getBoundingClientRect().width) && void 0 !== HH ? HH : 0),
                  CH = window.innerWidth / 2,
                  EH = LH ? LH.getBoundingClientRect().right : 0,
                  XH = rH ? rH.getBoundingClientRect().left : window.innerWidth,
                  GH = Math.min(CH - EH, XH - CH) - fH.e - tH / 2,
                  YH = GH < 6 * hH,
                  uH = YH ? (window.innerWidth - tH) / 2 - fH.e : GH;
                BH.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(uH,14*hH)))}px`), AH(YH)
              };
            SH();
            const hH = new ResizeObserver(SH);
            for (const HH of [BH, LH, rH]) HH && hH.observe(HH);
            return window.addEventListener("resize", SH), () => {
              hH.disconnect(), window.removeEventListener("resize", SH)
            }
          }), [HH, BH]), LH
        }(AH, "scoreboard" === BH.wire[0]);
        if ("scoreboard" !== BH.wire[0]) return null;
        const [, hH, tH, CH, EH, , XH] = BH.wire, GH = "Red" === hH ? "Blue" : "Red";
        return (0, NH.jsxs)("div", {
          className: oH()("FrontlineScoreboardContainer", {
            Below: SH
          }),
          children: [(0, NH.jsxs)("div", {
            ref: AH,
            className: "FrontlineScoreboard",
            children: [(0, NH.jsx)(pH, {}), (0, NH.jsx)(sH, {
              team: hH,
              tickets: tH,
              goal: EH,
              side: "Friendly"
            }), (0, NH.jsx)("div", {
              className: "FrontlinePoints",
              children: XH.map((HH => (0, NH.jsx)(jH, {
                className: "FrontlinePoint",
                point: HH
              }, HH[0])))
            }), (0, NH.jsx)(sH, {
              team: GH,
              tickets: CH,
              goal: EH,
              side: "Enemy"
            })]
          }), (0, NH.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, NH.jsx)(iH, {
              endsAt: BH.endsAt
            }), (0, NH.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: LH("frontlineHud:ticketGoal", {
                goal: EH
              })
            })]
          })]
        })
      }));

    function sH(HH) {
      let {
        team: BH,
        tickets: LH,
        goal: AH,
        side: rH
      } = HH;
      const {
        t: SH
      } = (0, lH.B)(), hH = String(LH).padStart(3, "0"), tH = hH.search(/[1-9]/), zH = -1 === tH ? hH : hH.slice(0, tH), CH = Math.min(20, Math.floor(LH / AH * 20));
      return (0, NH.jsxs)("div", {
        className: oH()("FrontlineTeamScore", rH, `Team-${BH}`),
        children: [(0, NH.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, NH.jsx)("span", {
            className: "Lead",
            children: zH
          }), -1 !== tH && hH.slice(tH)]
        }), (0, NH.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, NH.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: SH(RH[BH])
          }), (0, NH.jsx)(JH, {
            segments: 20,
            lit: CH
          })]
        })]
      })
    }

    function JH(HH) {
      let {
        segments: BH,
        lit: LH
      } = HH;
      return (0, NH.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: BH
        }, ((HH, BH) => (0, NH.jsx)("i", {
          className: oH()({
            Lit: BH < LH
          })
        }, BH)))
      })
    }

    function iH(HH) {
      let {
        endsAt: BH
      } = HH;
      const LH = (0, cH.h)(BH);
      return (0, NH.jsx)("div", {
        className: oH()("FrontlineClock", {
          Urgent: LH <= 60
        }),
        children: (0, cH.c)(LH)
      })
    }

    function pH() {
      return (0, NH.jsxs)(NH.Fragment, {
        children: [(0, NH.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, NH.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var yH = LH(40419);
    class HB {
      constructor(HH) {
        this.hud = HH, this.points = new yH.b({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(HH, BH) {
        this.points.setRender(HH);
        const LH = this.hud.getScoreboard().wire;
        if ("scoreboard" === LH[0] && this.points.hasMarkers())
          for (const [AH, , , , , , rH] of LH[6]) rH && this.points.update(AH, rH[0], rH[1] + 2.5, rH[2], BH)
      }
    }
    var BB = LH(6981),
      LB = LH(2864);
    const AB = "frontlineRoundEndChanged";
    class rB {
      constructor() {
        this.view = {
          wire: ["none"],
          key: 0,
          endsAt: 0
        }
      }
      getView() {
        return this.view
      }
      kX(HH) {
        const BH = "roundEnd" === HH[0] ? performance.now() + HH[5] : 0;
        this.view = {
          wire: HH,
          key: this.view.key + 1,
          endsAt: BH
        }, CH.k.AX(AB, this.view, !0)
      }
    }
    const SB = (0, rH.lazy)((() => (0, LB.d)(Promise.all([LH.e(261), LH.e(222)]).then((() => LH(45236))), (HH => HH.FrontlineMvpLineup)))),
      hB = [4800, 4e3, 3200],
      tB = [1, 0, 2],
      zB = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      CB = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function EB(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, KH.e)(AB, BH.getView()),
        AH = (0, cH.g)(LH.endsAt);
      return "roundEnd" !== LH.wire[0] || 1e3 * AH < -2e3 ? null : (0, NH.jsx)(XB, {
        wire: LH.wire,
        secondsLeft: Math.max(0, Math.ceil(AH))
      }, LH.key)
    }
    const XB = (0, rH.memo)((function(HH) {
      let {
        wire: BH,
        secondsLeft: LH
      } = HH;
      const {
        t: SH
      } = (0, lH.B)(), [, hH, tH, zH, CH, , EH, XH] = BH, GH = (0, rH.useMemo)((() => tB.filter((HH => HH < XH.length))), [XH]), YH = (0, rH.useMemo)((() => GH.map((HH => {
        const [, , , , , BH, LH] = XH[HH];
        return {
          cosmetics: AH.map(((HH, LH) => [HH, BH[LH]])),
          size: 0 === HH ? 1.15 : .85,
          heldGun: {
            name: LH,
            aimed: 0 === HH
          },
          showAfterMs: hB[HH]
        }
      }))), [XH, GH]);
      return (0, NH.jsxs)("div", {
        className: oH()("FrontlineRoundEnd", `Result-${hH}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, NH.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, NH.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, NH.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, NH.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, NH.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (uH = SH(zB[hH]), /\p{Script=Arabic}/u.test(uH) ? [uH] : (0, BB.d)(uH)).map(((HH, BH) => (0, NH.jsx)("span", {
              style: {
                "--letter": BH
              },
              children: HH
            }, BH)))]
          }), (0, NH.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [tH && "victory" === hH && (0, NH.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: SH("frontlineRoundEnd:comeback")
            }), (0, NH.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, NH.jsx)("b", {
                className: "Friendly",
                children: zH
              }), " \u2013 ", (0, NH.jsx)("b", {
                className: "Enemy",
                children: CH
              })]
            })]
          })]
        }), GH.length > 0 && (0, NH.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": GH.length
          },
          children: [(0, NH.jsx)(rH.Suspense, {
            fallback: null,
            children: (0, NH.jsx)(SB, {
              className: "FrontlineRoundEndLineup",
              players: YH
            })
          }), GH.map((HH => (0, NH.jsx)(GB, {
            mvp: XH[HH],
            place: HH
          }, HH)))]
        }), (0, NH.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: SH("frontlineRoundEnd:nextFront", {
            map: EH,
            seconds: String(LH)
          })
        })]
      });
      var uH
    }));

    function GB(HH) {
      let {
        mvp: BH,
        place: LH
      } = HH;
      const {
        t: AH
      } = (0, lH.B)(), [rH, SH, hH, tH, zH] = BH, [CH, EH] = AH(function(HH, BH) {
        return 1 === BH && "damage" !== HH ? `frontlineRoundEnd:${HH}One` : `frontlineRoundEnd:${HH}`
      }(hH, tH), {
        name: "\0",
        count: tH.toLocaleString()
      }).split("\0");
      return (0, NH.jsxs)("div", {
        className: oH()("FrontlineMvpCard", `Place-${LH+1}`, `Team-${SH}`),
        style: {
          "--revealMs": `${hB[LH]}ms`
        },
        children: [(0, NH.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, NH.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, NH.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: AH(CB[LH])
        }), (0, NH.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [CH, (0, NH.jsx)("span", {
            className: "FrontlineMvpName",
            children: rH
          }), EH]
        }), (0, NH.jsx)("div", {
          className: "FrontlineMvpKit",
          children: zH
        })]
      })
    }
    const YB = function(HH, BH, LH, AH) {
      let {
        localPlayerId: hH
      } = AH;
      const tH = new gH,
        zH = new rB;
      let CH = null,
        EH = null,
        XH = null,
        GH = null,
        YH = null,
        uH = [!1, !1];
      const QH = () => {
        var HH, BH;
        const [LH, AH] = uH;
        null === (HH = EH) || void 0 === HH || HH.vI(!LH), null === (BH = XH) || void 0 === BH || BH.vI(!AH)
      };
      return {
        onCreate: HH => {
          CH = HH, EH = new vH(HH, hH), XH = new VH(HH, hH), GH = new HB(tH), QH(), YH = (0, SH.v)((0, rH.createElement)(rH.Fragment, null, (0, rH.createElement)(wH, {
            hud: tH,
            crosshair: EH,
            damage: XH,
            markers: GH
          }), (0, rH.createElement)(EB, {
            controller: zH
          })))
        },
        onClose: () => {
          var HH, BH, LH, AH;
          null === (HH = YH) || void 0 === HH || HH(), null === (BH = EH) || void 0 === BH || BH.dispose(), EH = null, null === (LH = XH) || void 0 === LH || LH.dispose(), XH = null, null === (AH = GH) || void 0 === AH || AH.points.dispose(), GH = null, CH = null
        },
        onAfterRender: (HH, BH) => {
          var LH, AH, rH, SH, tH;
          null === (LH = EH) || void 0 === LH || LH.frame(HH, BH.tanHalfFovY), null === (AH = XH) || void 0 === AH || AH.frame(BH.cameraHeading), null === (rH = GH) || void 0 === rH || rH.frame(BH, null !== (SH = null === (tH = CH) || void 0 === tH ? void 0 : tH.getPositionView(hH)) && void 0 !== SH ? SH : null)
        },
        onReceivedMessageFromServer: (HH, BH) => {
          "frontlineHud" === HH ? tH.kX(BH) : "frontlineScoreboard" === HH ? tH.receiveScoreboard(BH) : "frontlineRoundEnd" === HH ? zH.kX(BH) : "frontlinePrefs" === HH && (uH = BH, QH())
        }
      }
    }
  },
  6981: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    const AH = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function rH(HH) {
      return null === AH ? Array.from(HH) : Array.from(AH.segment(HH), (HH => {
        let {
          segment: BH
        } = HH;
        return BH
      }))
    }
  },
  39370: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      e: () => SH
    });
    const AH = new WeakMap;

    function rH(HH) {
      let BH = AH.get(HH);
      return BH || (BH = {
        hidden: HH.hidden,
        x: NaN,
        y: NaN
      }, AH.set(HH, BH)), BH
    }

    function SH(HH, BH) {
      const LH = rH(HH);
      LH.hidden !== BH && (LH.hidden = BH, HH.hidden = BH)
    }

    function hH(HH, BH, LH) {
      const AH = rH(HH);
      AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
    }
  },
  37941: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);