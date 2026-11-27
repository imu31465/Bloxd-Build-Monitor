export const id = 18;
export const ids = [18];
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
  37849: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR,
      i: () => fR,
      k: () => VR,
      l: () => eR
    });
    var yR = GR(66),
      tR = GR(4352),
      uR = GR(3593),
      ZR = GR(32);
    const qR = 8,
      iR = "InGameHeaderContainer",
      fR = "TopRightElements";

    function VR(RR) {
      const [JR] = (0, tR.e)(), [GR, uR] = (0, yR.useState)(!1);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const JR = document.querySelector(`.${iR}`),
          GR = document.querySelector(`.${fR}`),
          yR = () => {
            const yR = RR.getBoundingClientRect(),
              tR = JR ? JR.getBoundingClientRect().right : 0,
              ZR = GR ? GR.getBoundingClientRect().left : window.innerWidth,
              iR = yR.left < tR + qR,
              fR = yR.right > ZR - qR;
            uR(iR || fR)
          };
        yR();
        const tR = new ResizeObserver(yR);
        return tR.observe(RR), JR && tR.observe(JR), GR && tR.observe(GR), () => {
          tR.disconnect()
        }
      }), [RR, JR]), GR
    }
    const KR = `.InGameUi .${iR}`,
      wR = [KR, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      rR = 1e3;

    function eR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR,
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [tR, iR] = (0, yR.useState)(null);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const yR = new ResizeObserver((() => {
          fR()
        }));
        yR.observe(RR), JR && JR !== RR && yR.observe(JR);
        let tR = [];

        function fR() {
          var uR, ZR, fR;
          const VR = RR.getBoundingClientRect(),
            rR = function() {
              const RR = wR.map((RR => document.querySelector(RR))).filter((RR => null !== RR));
              for (const JR of RR) tR.includes(JR) || yR.observe(JR);
              for (const JR of tR) RR.includes(JR) || yR.unobserve(JR);
              return tR = RR, RR
            }(),
            eR = rR.filter((RR => {
              const JR = RR.getBoundingClientRect();
              return JR.width > 0 && JR.height > 0 && VR.left < JR.right + qR && VR.right > JR.left - qR
            }));
          if (0 === eR.length && !GR) return void iR(null);
          const aR = rR.find((RR => RR.matches(KR))),
            LR = Math.max(null !== (uR = null === aR || void 0 === aR ? void 0 : aR.getBoundingClientRect().bottom) && void 0 !== uR ? uR : 0, ...eR.map((RR => RR.getBoundingClientRect().bottom))),
            nR = null !== (ZR = null === JR || void 0 === JR || null === (fR = JR.offsetParent) || void 0 === fR ? void 0 : fR.getBoundingClientRect().top) && void 0 !== ZR ? ZR : 0;
          iR(Math.ceil(LR + qR / 2) - Math.round(nR))
        }
        const VR = setInterval(fR, rR);
        fR(), window.addEventListener("resize", fR);
        const eR = (0, ZR.q)(uR.h, fR);
        return () => {
          yR.disconnect(), clearInterval(VR), window.removeEventListener("resize", fR), eR()
        }
      }), [RR, JR, GR]), tR
    }
  },
  37810: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      g: () => tR,
      j: () => uR
    });
    var yR = GR(66);

    function tR(RR) {
      return qR(RR, iR)
    }

    function uR(RR) {
      return qR(RR, fR)
    }

    function ZR(RR) {
      return `${Math.floor(RR/60)}:${String(RR%60).padStart(2,"0")}`
    }

    function qR(RR, JR) {
      const [, GR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        if (0 === RR) return;
        const yR = window.setInterval((() => {
          const yR = JR(RR);
          GR((JR => (null === JR || void 0 === JR ? void 0 : JR.endsAt) === RR && JR.value === yR ? JR : {
            endsAt: RR,
            value: yR
          }))
        }), 250);
        return () => {
          window.clearInterval(yR)
        }
      }), [RR, JR]), JR(RR)
    }

    function iR(RR) {
      return (RR - performance.now()) / 1e3
    }

    function fR(RR) {
      return Math.max(0, Math.ceil(iR(RR)))
    }
  },
  37847: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    const yR = [{
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

    function tR(RR, JR, GR) {
      const tR = Math.abs(RR - JR),
        uR = Date.now() - GR;
      for (const ZR of yR)
        if (RR < ZR.maxDist) return tR >= ZR.hardUpdateDist || uR > ZR.timeBetweenSoftChecks && tR >= ZR.softUpdateDist;
      return !1
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
  39731: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      var yR;
      const {
        width: tR,
        height: uR
      } = GR, ZR = null !== (yR = RR.text) && void 0 !== yR ? yR : RR, qR = (ZR.x / 100 - .5) * tR, iR = (ZR.y / 100 - .5) * uR, fR = tR / 2 - JR.x;
      if (null !== RR.text && Math.abs(qR) <= fR && iR >= JR.top - uR / 2 && iR <= uR / 2 - JR.bottom) return {
        x: ZR.x,
        y: ZR.y
      };
      const VR = Math.min(0 === qR ? 1 / 0 : fR / Math.abs(qR), iR > 0 ? (uR / 2 - JR.bottom) / iR : iR < 0 ? (JR.top - uR / 2) / iR : 1 / 0);
      return !Number.isFinite(VR) || VR < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + qR * VR / tR * 100,
        y: 50 + iR * VR / uR * 100
      }
    }
    GR.d(JR, {
      d: () => yR
    })
  },
  40722: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    const yR = 1e3;

    function tR(RR, JR) {
      const GR = performance.now() + RR;
      return 0 !== JR && Math.abs(GR - JR) < yR ? JR : GR
    }
  },
  40731: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR
    });
    var yR = GR(37847),
      tR = GR(1270),
      uR = GR(1343),
      ZR = GR(39672),
      qR = GR(39731);
    class iR {
      constructor(RR, JR) {
        var GR;
        this.classes = RR, this.distanceKey = JR, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.He = !1, this.iW = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.iW), null === (GR = window.visualViewport) || void 0 === GR || GR.addEventListener("resize", this.iW)
      }
      bindMarker(RR) {
        const JR = this.refs.get(RR);
        if (JR) return JR;
        const GR = JR => {
          var yR;
          null === (yR = this.markers.get(RR)) || void 0 === yR || yR.stopObserving(), this.markers.delete(RR), JR && !this.He ? (this.markers.set(RR, this.mount(JR)), this.refs.set(RR, GR)) : this.refs.delete(RR)
        };
        return this.refs.set(RR, GR), GR
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(RR) {
        this.render = RR
      }
      update(RR, JR, GR, yR, tR) {
        const uR = this.markers.get(RR);
        uR && (uR.target ??= [0, 0, 0], uR.target[0] = JR, uR.target[1] = GR, uR.target[2] = yR, this.place(uR), this.QJ(uR, tR && Math.hypot(JR - tR[0], GR - tR[1], yR - tR[2])))
      }
      dispose() {
        var RR;
        this.He = !0, window.removeEventListener("resize", this.iW), null === (RR = window.visualViewport) || void 0 === RR || RR.removeEventListener("resize", this.iW);
        for (const JR of this.markers.values()) JR.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(RR) {
        const {
          render: JR,
          viewport: GR
        } = this;
        if (!JR || !RR.target) return;
        const yR = (50 - JR.screenBandPct.y) / 100 * GR.height,
          tR = {
            x: RR.halfSize.width + 8,
            top: RR.halfSize.height + 8,
            bottom: RR.halfSize.height + RR.labelsBelow + yR
          },
          uR = JR.projectWorldPosToViewport(RR.target),
          iR = null !== uR && void 0 !== uR ? uR : JR.projectWorldPosToScreenPos(RR.target),
          fR = (0, qR.d)({
            x: iR.x,
            y: iR.y,
            text: uR
          }, tR, GR);
        (0, ZR.d)(RR.root, Math.round(100 * fR.x) / 100, Math.round(100 * fR.y) / 100)
      }
      QJ(RR, JR) {
        if (null === JR) return void(null !== RR.metres && (RR.metres = null, RR.distance.textContent = ""));
        const GR = Date.now();
        (null === RR.metres || (0, yR.e)(JR, RR.metres, RR.metresShownAt)) && (RR.metres = Math.round(JR), RR.metresShownAt = GR, RR.distance.textContent = (0, tR.w)(uR.g.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(RR.metres)
        }))
      }
      mount(RR) {
        const JR = {
            root: RR,
            distance: RR.querySelector(`.${this.classes.distance}`),
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
          GR = RR.querySelector(`.${this.classes.labels}`),
          yR = new ResizeObserver((() => {
            JR.halfSize = {
              width: Math.max(RR.offsetWidth, GR.offsetWidth) / 2,
              height: RR.offsetHeight / 2
            }, JR.labelsBelow = GR.offsetTop + GR.offsetHeight - RR.offsetHeight, this.place(JR)
          }));
        return yR.observe(RR, {
          box: "border-box"
        }), yR.observe(GR, {
          box: "border-box"
        }), JR.stopObserving = () => {
          yR.disconnect()
        }, JR
      }
    }
  },
  40714: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => fJ
    });
    const yR = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var tR = GR(66),
      uR = GR(3494),
      ZR = GR(40717),
      qR = GR(38150),
      iR = GR(37820),
      fR = GR(1943),
      VR = GR(32);
    const KR = {
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
    const wR = 32;

    function rR(RR, JR, GR, yR) {
      return {
        tag: "line",
        attrs: {
          x1: RR,
          y1: JR,
          x2: GR,
          y2: yR,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function eR(RR) {
      return {
        tag: "circle",
        attrs: {
          cx: wR,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wR,
          r: RR,
          class: "Fill"
        }
      }
    }

    function aR(RR, JR) {
      return {
        tag: "path",
        attrs: {
          d: RR,
          "stroke-width": JR
        }
      }
    }

    function LR(RR, JR, GR) {
      return {
        tag: "circle",
        attrs: {
          cx: wR,
          cy: wR,
          r: RR,
          "stroke-width": JR,
          class: GR
        }
      }
    }

    function nR(RR, JR, GR) {
      return {
        tag: "text",
        attrs: {
          x: RR,
          y: JR,
          class: "Fill Label"
        },
        text: GR
      }
    }
    const UR = {
      pistol: RR => [rR(wR, wR - RR - 5, wR, wR - RR), rR(wR - RR - 5, wR, wR - RR, wR), rR(wR + RR, wR, wR + RR + 5, wR), eR(1.4)],
      rifle: RR => [rR(wR, wR - RR - 8, wR, wR - RR), rR(wR, wR + RR, wR, wR + RR + 8), rR(wR - RR - 8, wR, wR - RR, wR), rR(wR + RR, wR, wR + RR + 8, wR), eR(1)],
      smg: RR => {
        const JR = Math.PI / 2,
          GR = [];
        for (let ZR = 0; ZR < 4; ZR++) GR.push((tR = ZR * JR + .35, uR = (ZR + 1) * JR - .35, aR(`M${wR+(yR=6+RR)*Math.cos(tR)} ${wR+yR*Math.sin(tR)} A${yR} ${yR} 0 0 1 ${wR+yR*Math.cos(uR)} ${wR+yR*Math.sin(uR)}`, 2)));
        var yR, tR, uR;
        return [...GR, eR(1.4)]
      },
      shotgun: RR => [LR(RR, 3, "Ring Outline"), LR(RR, 1.5, "Ring")],
      marksman: RR => [aR(`M${26-RR/2} ${39+RR/2} L32 33 L${38+RR/2} ${39+RR/2}`, 2), rR(14 - RR, wR, 24 - RR, wR, 1.5), rR(40 + RR, wR, 50 + RR, wR, 1.5), rR(14 - RR, 30, 14 - RR, 34, 1.5), rR(50 + RR, 30, 50 + RR, 34, 1.5)],
      machineGun: RR => {
        const JR = 10 + RR,
          GR = [];
        for (const [yR, tR] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) GR.push(aR(`M${wR+yR*JR} ${wR+tR*(JR-5)} L${wR+yR*JR} ${wR+tR*JR} L${wR+yR*(JR-5)} ${wR+tR*JR}`, 2));
        return [...GR, rR(wR, 28, wR, 36, 1.5), rR(28, wR, 36, wR, 1.5)]
      },
      launcher: () => [rR(14, 30, 50, 30, 1.5), rR(wR, 24, wR, 52, 1.5), rR(28, 38, 36, 38, 1.5), rR(29, 44, 35, 44, 1.5), rR(30, 50, 34, 50, 1.5), nR(38, 40, "100"), nR(37, 46, "200"), eR(1.4, 30)],
      melee: () => [aR("M32 26 L38 32 L32 38 L26 32 Z", 1.5), eR(1.2)],
      throwable: () => [eR(1.6)]
    };

    function WR(RR) {
      let {
        tag: JR,
        attrs: GR,
        text: yR
      } = RR, tR = `<${JR}`;
      for (const [uR, ZR] of Object.entries(GR)) tR += ` ${uR}="${ZR}"`;
      return void 0 === yR ? `${tR}/>` : `${tR}>${yR}</${JR}>`
    }
    class AR {
      constructor(RR, JR) {
        this.api = RR, this.localPlayerId = JR, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = RR => {
          this.element = RR, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, RR && !this.enabled && (RR.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, fR.getRemInPx)()))
        }, this.tokens = [VR.n.subscribe("aimingOverlay", (RR => {
          this.sniperOverlay = "sniper" === RR
        })), VR.n.subscribe("mouseState", (RR => {
          let {
            isDown: JR
          } = RR;
          this.mouseDown = JR
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      JA(RR) {
        RR !== this.enabled && (this.enabled = RR, this.drawnVisible = null, RR || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(RR, JR) {
        var GR, yR;
        if (!this.enabled) return;
        const {
          api: tR
        } = this, uR = tR.isAlive(this.localPlayerId) && null !== (GR = null === (yR = tR.uyR(this.localPlayerId)) || void 0 === yR ? void 0 : yR.name) && void 0 !== GR ? GR : null, ZR = (qR = uR) && KR[qR] || null;
        var qR;
        if (this.setOwnsCrosshair(null !== ZR), !this.element) return;
        const iR = tR.getHeldGunInaccuracy(),
          fR = null !== iR,
          VR = null !== ZR && !this.sniperOverlay && tR.isCrosshairShown();
        if (VR !== this.drawnVisible && (this.drawnVisible = VR, this.element.style.display = VR ? "block" : "none"), !VR) return;
        const wR = fR ? function(RR) {
            return "launcher" === RR || "melee" === RR || "throwable" === RR ? "none" : "shotgun" === RR ? "cone" : "offset"
          }(ZR) : "none",
          rR = null !== iR && void 0 !== iR ? iR : 0;
        "cone" === wR ? this.drawCone(ZR, this.coneRadiusVh(rR, JR) * this.gapPerVh, RR) : (this.coneDrawn = !1, this.draw(ZR, "none" === wR ? 2 : this.offsetGap(rR)));
        const eR = !fR && this.mouseDown;
        eR !== this.drawnPressed && (this.drawnPressed = eR, this.element.classList.toggle("Pressed", eR))
      }
      dispose() {
        for (const RR of this.tokens) VR.n.unsubscribe(RR);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(RR, JR) {
        var GR, yR;
        RR !== this.drawnFamily ? (this.drawnFamily = RR, this.drawnGap = JR, this.element.innerHTML = function(RR, JR) {
          return `<svg viewBox="0 0 64 64">${UR[RR](JR).map(WR).join("")}</svg>`
        }(RR, JR), this.shapes = Array.from(null !== (GR = null === (yR = this.element.firstElementChild) || void 0 === yR ? void 0 : yR.children) && void 0 !== GR ? GR : [])) : JR !== this.drawnGap && (this.drawnGap = JR, function(RR, JR, GR) {
          const yR = UR[JR](GR);
          for (let tR = 0; tR < yR.length; tR++)
            for (const [JR, GR] of Object.entries(yR[tR].attrs)) {
              const yR = String(GR);
              RR[tR].getAttribute(JR) !== yR && RR[tR].setAttribute(JR, yR)
            }
        }(this.shapes, RR, JR))
      }
      drawCone(RR, JR, GR) {
        RR === this.drawnFamily && this.coneDrawn ? this.shownRadius += (JR - this.shownRadius) * (1 - Math.exp(-GR / 80)) : this.shownRadius = JR, this.coneDrawn = !0, this.draw(RR, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(RR, JR) {
        if (!(JR > 0)) return 1;
        const GR = RR * qR.i / 2;
        return Math.max(50 * Math.tan(GR) / JR, 1)
      }
      offsetGap(RR) {
        const JR = 2 + ((0, iR.g)(RR) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * JR) / 2)
      }
      setOwnsCrosshair(RR) {
        RR !== this.ownsCrosshair && (this.ownsCrosshair = RR, document.body.classList.toggle("FrontlineCustomCrosshair", RR))
      }
    }
    var CR = GR(1163),
      XR = GR.n(CR),
      MR = GR(37796),
      BR = GR(37849),
      lR = GR(1270),
      pR = GR(1581),
      gR = GR(37810),
      bR = GR(40720),
      vR = GR(40722);
    const OR = "frontlineHudChanged",
      xR = "frontlineScoreboardChanged";
    class NR {
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
      BK(RR) {
        this.wire = RR, VR.n.JK(OR, RR, !0)
      }
      receiveScoreboard(RR) {
        const JR = "scoreboard" === RR[0] ? (0, vR.c)(RR[5], this.scoreboard.endsAt) : 0;
        this.scoreboard = {
          wire: RR,
          endsAt: JR
        }, VR.n.JK(xR, this.scoreboard, !0)
      }
    }
    var DR = GR(1378);
    const HR = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function oR(RR) {
      let {
        className: JR,
        point: GR
      } = RR;
      const [yR, tR, uR, ZR, qR, iR] = GR;
      return (0, DR.jsxs)("div", {
        className: XR()(JR, `Owner-${tR||"None"}`, `Leader-${ZR||"None"}`, {
          Contested: qR,
          Here: iR
        }),
        children: [(0, DR.jsx)("span", {
          className: "FrontlinePointLetter",
          children: yR
        }), (0, DR.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${uR}%`
          }
        })]
      })
    }
    const cR = (0, tR.memo)((function(RR) {
        let {
          points: JR,
          markers: GR
        } = RR;
        const {
          t: yR
        } = (0, lR.A)();
        return JR ? (0, DR.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: JR.map((RR => {
            const [JR, , , , , , , tR] = RR;
            return (0, DR.jsxs)("div", {
              ref: GR.points.bindMarker(JR),
              className: "FrontlinePointMarker",
              children: [(0, DR.jsx)(oR, {
                className: "FrontlinePointMarkerTile",
                point: RR
              }), (0, DR.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [tR && (0, DR.jsx)("span", {
                  className: XR()("FrontlinePointMarkerHomeTurf", `Team-${tR}`),
                  children: yR("frontlineHud:homeTurf", {
                    team: yR(HR[tR])
                  })
                }), (0, DR.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, JR)
          }))
        }) : null
      })),
      PR = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      IR = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function mR(RR) {
      let {
        hud: JR,
        crosshair: GR,
        damage: yR,
        markers: tR
      } = RR;
      const uR = (0, pR.h)(OR, JR.getWire()),
        ZR = (0, pR.h)(xR, JR.getScoreboard());
      return (0, DR.jsxs)(DR.Fragment, {
        children: [(0, DR.jsx)(bR.e, {
          controller: yR
        }), (0, DR.jsx)(cR, {
          points: "scoreboard" === ZR.wire[0] ? ZR.wire[6] : null,
          markers: tR
        }), (0, DR.jsx)(SR, {
          view: ZR
        }), (0, DR.jsx)("div", {
          className: "FrontlineReticle",
          ref: GR.bindElement
        }), (0, DR.jsx)(MR.d, {
          children: (0, DR.jsx)(zR, {
            wire: uR
          })
        })]
      })
    }
    const zR = (0, tR.memo)((function(RR) {
        let {
          wire: JR
        } = RR;
        const {
          t: GR
        } = (0, lR.A)();
        if ("capture" === JR[0]) {
          const [, RR, yR, tR, uR, ZR, qR] = JR, iR = Math.round(tR / 100 * 24);
          return (0, DR.jsxs)("div", {
            className: XR()("FrontlinePlate", `Status-${yR}`, `Leader-${uR||"None"}`),
            children: [(0, DR.jsx)(YR, {}), (0, DR.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, DR.jsx)("span", {
                className: "FrontlineObjective",
                children: RR
              }), (0, DR.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, DR.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: GR("frontlineHud:objective", {
                    point: RR,
                    friendly: ZR,
                    enemy: qR
                  })
                }), (0, DR.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: GR(PR[yR])
                })]
              }), (0, DR.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(tR).padStart(3, "0"), (0, DR.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, DR.jsx)(dR, {
              segments: 24,
              lit: iR
            })]
          })
        }
        if ("alert" === JR[0]) {
          const [, RR, yR, tR] = JR;
          return (0, DR.jsxs)("div", {
            className: XR()("FrontlinePlate", "FrontlineAlert", `Tone-${tR}`),
            children: [(0, DR.jsx)(YR, {}), (0, DR.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: GR(IR[RR])
            }), (0, DR.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: yR
            })]
          })
        }
        return null
      })),
      SR = (0, tR.memo)((function(RR) {
        let {
          view: JR
        } = RR;
        const {
          t: GR
        } = (0, lR.A)(), yR = (0, tR.useRef)(null), uR = function(RR, JR) {
          const [GR, yR] = (0, tR.useState)(!1);
          return (0, tR.useLayoutEffect)((() => {
            const JR = RR.current;
            if (!JR) return;
            const GR = document.querySelector(`.${BR.e}`),
              tR = document.querySelector(`.${BR.i}`),
              uR = () => {
                var RR;
                const uR = JR.querySelector(".FrontlineTeamTrack"),
                  ZR = (0, fR.getRemInPx)(),
                  qR = JR.getBoundingClientRect().width - 2 * (null !== (RR = null === uR || void 0 === uR ? void 0 : uR.getBoundingClientRect().width) && void 0 !== RR ? RR : 0),
                  iR = window.innerWidth / 2,
                  VR = GR ? GR.getBoundingClientRect().right : 0,
                  KR = tR ? tR.getBoundingClientRect().left : window.innerWidth,
                  wR = Math.min(iR - VR, KR - iR) - BR.b - qR / 2,
                  rR = wR < 6 * ZR,
                  eR = rR ? (window.innerWidth - qR) / 2 - BR.b : wR;
                JR.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(eR,14*ZR)))}px`), yR(rR)
              };
            uR();
            const ZR = new ResizeObserver(uR);
            for (const RR of [JR, GR, tR]) RR && ZR.observe(RR);
            return window.addEventListener("resize", uR), () => {
              ZR.disconnect(), window.removeEventListener("resize", uR)
            }
          }), [RR, JR]), GR
        }(yR, "scoreboard" === JR.wire[0]);
        if ("scoreboard" !== JR.wire[0]) return null;
        const [, ZR, qR, iR, VR, , KR] = JR.wire, wR = "Red" === ZR ? "Blue" : "Red";
        return (0, DR.jsxs)("div", {
          className: XR()("FrontlineScoreboardContainer", {
            Below: uR
          }),
          children: [(0, DR.jsxs)("div", {
            ref: yR,
            className: "FrontlineScoreboard",
            children: [(0, DR.jsx)(YR, {}), (0, DR.jsx)(jR, {
              team: ZR,
              tickets: qR,
              goal: VR,
              side: "Friendly"
            }), (0, DR.jsx)("div", {
              className: "FrontlinePoints",
              children: KR.map((RR => (0, DR.jsx)(oR, {
                className: "FrontlinePoint",
                point: RR
              }, RR[0])))
            }), (0, DR.jsx)(jR, {
              team: wR,
              tickets: iR,
              goal: VR,
              side: "Enemy"
            })]
          }), (0, DR.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, DR.jsx)(ER, {
              endsAt: JR.endsAt
            }), (0, DR.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: GR("frontlineHud:ticketGoal", {
                goal: VR
              })
            })]
          })]
        })
      }));

    function jR(RR) {
      let {
        team: JR,
        tickets: GR,
        goal: yR,
        side: tR
      } = RR;
      const {
        t: uR
      } = (0, lR.A)(), ZR = String(GR).padStart(3, "0"), qR = ZR.search(/[1-9]/), iR = -1 === qR ? ZR : ZR.slice(0, qR), fR = Math.min(20, Math.floor(GR / yR * 20));
      return (0, DR.jsxs)("div", {
        className: XR()("FrontlineTeamScore", tR, `Team-${JR}`),
        children: [(0, DR.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, DR.jsx)("span", {
            className: "Lead",
            children: iR
          }), -1 !== qR && ZR.slice(qR)]
        }), (0, DR.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, DR.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: uR(HR[JR])
          }), (0, DR.jsx)(dR, {
            segments: 20,
            lit: fR
          })]
        })]
      })
    }

    function dR(RR) {
      let {
        segments: JR,
        lit: GR
      } = RR;
      return (0, DR.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: JR
        }, ((RR, JR) => (0, DR.jsx)("i", {
          className: XR()({
            Lit: JR < GR
          })
        }, JR)))
      })
    }

    function ER(RR) {
      let {
        endsAt: JR
      } = RR;
      const GR = (0, gR.j)(JR);
      return (0, DR.jsx)("div", {
        className: XR()("FrontlineClock", {
          Urgent: GR <= 60
        }),
        children: (0, gR.e)(GR)
      })
    }

    function YR() {
      return (0, DR.jsxs)(DR.Fragment, {
        children: [(0, DR.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, DR.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var kR = GR(40731);
    class QR {
      constructor(RR) {
        this.hud = RR, this.points = new kR.e({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(RR, JR) {
        this.points.setRender(RR);
        const GR = this.hud.getScoreboard().wire;
        if ("scoreboard" === GR[0] && this.points.hasMarkers())
          for (const [yR, , , , , , tR] of GR[6]) tR && this.points.update(yR, tR[0], tR[1] + 2.5, tR[2], JR)
      }
    }
    var FR = GR(7553),
      TR = GR(3731);
    const sR = "frontlineRoundEndChanged";
    class hR {
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
      BK(RR) {
        const JR = "roundEnd" === RR[0] ? performance.now() + RR[5] : 0;
        this.view = {
          wire: RR,
          key: this.view.key + 1,
          endsAt: JR
        }, VR.n.JK(sR, this.view, !0)
      }
    }
    var RJ = GR(3059);
    const JJ = (0, tR.lazy)((() => (0, TR.b)(Promise.all([GR.e(266), GR.e(228)]).then((() => GR(53785))), (RR => RR.FrontlineMvpLineup)))),
      GJ = [4800, 4e3, 3200],
      yJ = [1, 0, 2],
      tJ = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      uJ = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function ZJ(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, pR.h)(sR, JR.getView()),
        yR = (0, gR.g)(GR.endsAt);
      return "roundEnd" !== GR.wire[0] || 1e3 * yR < -2e3 ? null : (0, DR.jsx)(qJ, {
        wire: GR.wire,
        secondsLeft: Math.max(0, Math.ceil(yR))
      }, GR.key)
    }
    const qJ = (0, tR.memo)((function(RR) {
      let {
        wire: JR,
        secondsLeft: GR
      } = RR;
      const {
        t: uR
      } = (0, lR.A)();
      (0, tR.useEffect)((() => (0, RJ.e)()), []);
      const [, ZR, qR, iR, fR, , VR, KR] = JR, wR = (0, tR.useMemo)((() => yJ.filter((RR => RR < KR.length))), [KR]), rR = (0, tR.useMemo)((() => wR.map((RR => {
        const [, , , , , JR, GR] = KR[RR];
        return {
          cosmetics: yR.map(((RR, GR) => [RR, JR[GR]])),
          size: 0 === RR ? 1.15 : .85,
          heldGun: {
            name: GR,
            aimed: 0 === RR
          },
          showAfterMs: GJ[RR]
        }
      }))), [KR, wR]);
      return (0, DR.jsxs)("div", {
        className: XR()("FrontlineRoundEnd", `Result-${ZR}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, DR.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, DR.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, DR.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, DR.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, DR.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (eR = uR(tJ[ZR]), /\p{Script=Arabic}/u.test(eR) ? [eR] : (0, FR.d)(eR)).map(((RR, JR) => (0, DR.jsx)("span", {
              style: {
                "--letter": JR
              },
              children: RR
            }, JR)))]
          }), (0, DR.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [qR && "victory" === ZR && (0, DR.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: uR("frontlineRoundEnd:comeback")
            }), (0, DR.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, DR.jsx)("b", {
                className: "Friendly",
                children: iR
              }), " \u2013 ", (0, DR.jsx)("b", {
                className: "Enemy",
                children: fR
              })]
            })]
          })]
        }), wR.length > 0 && (0, DR.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": wR.length
          },
          children: [(0, DR.jsx)(tR.Suspense, {
            fallback: null,
            children: (0, DR.jsx)(JJ, {
              className: "FrontlineRoundEndLineup",
              players: rR
            })
          }), wR.map((RR => (0, DR.jsx)(iJ, {
            mvp: KR[RR],
            place: RR
          }, RR)))]
        }), (0, DR.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: uR("frontlineRoundEnd:nextFront", {
            map: VR,
            seconds: String(GR)
          })
        })]
      });
      var eR
    }));

    function iJ(RR) {
      let {
        mvp: JR,
        place: GR
      } = RR;
      const {
        t: yR
      } = (0, lR.A)(), [tR, uR, ZR, qR, iR] = JR, [fR, VR] = yR(function(RR, JR) {
        return 1 === JR && "damage" !== RR ? `frontlineRoundEnd:${RR}One` : `frontlineRoundEnd:${RR}`
      }(ZR, qR), {
        name: "\0",
        count: qR.toLocaleString()
      }).split("\0");
      return (0, DR.jsxs)("div", {
        className: XR()("FrontlineMvpCard", `Place-${GR+1}`, `Team-${uR}`),
        style: {
          "--revealMs": `${GJ[GR]}ms`
        },
        children: [(0, DR.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, DR.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, DR.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: yR(uJ[GR])
        }), (0, DR.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [fR, (0, DR.jsx)("span", {
            className: "FrontlineMvpName",
            children: tR
          }), VR]
        }), (0, DR.jsx)("div", {
          className: "FrontlineMvpKit",
          children: iR
        })]
      })
    }
    const fJ = function(RR, JR, GR, yR) {
      let {
        localPlayerId: qR
      } = yR;
      const iR = new NR,
        fR = new hR;
      let VR = null,
        KR = null,
        wR = null,
        rR = null,
        eR = null,
        aR = [!1, !1];
      const LR = () => {
        var RR, JR;
        const [GR, yR] = aR;
        null === (RR = KR) || void 0 === RR || RR.JA(!GR), null === (JR = wR) || void 0 === JR || JR.JA(!yR)
      };
      return {
        onCreate: RR => {
          VR = RR, KR = new AR(RR, qR), wR = new ZR.d(RR, qR), rR = new QR(iR), LR(), eR = (0, uR.G)((0, tR.createElement)(tR.Fragment, null, (0, tR.createElement)(mR, {
            hud: iR,
            crosshair: KR,
            damage: wR,
            markers: rR
          }), (0, tR.createElement)(ZJ, {
            controller: fR
          })))
        },
        onClose: () => {
          var RR, JR, GR, yR;
          null === (RR = eR) || void 0 === RR || RR(), null === (JR = KR) || void 0 === JR || JR.dispose(), KR = null, null === (GR = wR) || void 0 === GR || GR.dispose(), wR = null, null === (yR = rR) || void 0 === yR || yR.points.dispose(), rR = null, VR = null
        },
        onAfterRender: (RR, JR) => {
          var GR, yR, tR, uR, ZR;
          null === (GR = KR) || void 0 === GR || GR.frame(RR, JR.tanHalfFovY), null === (yR = wR) || void 0 === yR || yR.frame(JR.cameraHeading), null === (tR = rR) || void 0 === tR || tR.frame(JR, null !== (uR = null === (ZR = VR) || void 0 === ZR ? void 0 : ZR.getPositionView(qR)) && void 0 !== uR ? uR : null)
        },
        onReceivedMessageFromServer: (RR, JR) => {
          "frontlineHud" === RR ? iR.BK(JR) : "frontlineScoreboard" === RR ? iR.receiveScoreboard(JR) : "frontlineRoundEnd" === RR ? fR.BK(JR) : "frontlinePrefs" === RR && (aR = JR, LR())
        }
      }
    }
  },
  40720: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(66),
      tR = GR(1378);
    const uR = (0, yR.memo)((function(RR) {
      let {
        controller: JR
      } = RR;
      return (0, tR.jsxs)("div", {
        className: "DamageFeedback",
        ref: JR.bindElement,
        children: [(0, tR.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, tR.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, tR.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  40717: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR
    });
    var yR = GR(32);
    const tR = "DamageFeedbackArcsShown",
      uR = .45,
      ZR = .2;
    class qR {
      constructor(RR, JR) {
        let {
          arcs: GR = !0,
          edgeGlow: tR = !0,
          lowHealthShade: uR = !0,
          enabled: ZR = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = RR, this.localPlayerId = JR, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Et = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = RR => {
          var JR, GR;
          this.clearHits(), this.root = RR, this.lowLayer = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".DamageFeedbackLow")) && void 0 !== JR ? JR : null, this.arcLayer = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".DamageFeedbackArcs")) && void 0 !== GR ? GR : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: GR,
          edgeGlow: tR,
          lowHealthShade: uR
        }, this.enabled = ZR, this.token = yR.n.subscribe("damagedByOtherPlayer", (RR => {
          let {
            direction: JR,
            jt: GR
          } = RR;
          this.onHurt(JR, GR)
        })), this.syncHealth(), this.showCustomDamage()
      }
      JA(RR) {
        RR !== this.enabled && (this.enabled = RR, this.showCustomDamage(), RR || this.clearHits(), this.showRoot())
      }
      frame(RR) {
        this.syncHealth(), this.cameraHeading = RR;
        for (const JR of this.arcs) this.drawArcAngle(JR)
      }
      dispose() {
        yR.n.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(tR)
      }
      showCustomDamage() {
        document.body.classList.toggle(tR, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const RR = this.api.getClientOption(this.localPlayerId, "_health"),
          JR = this.api.getClientOption(this.localPlayerId, "_shield"),
          GR = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(RR, this.readHealth) && Object.is(JR, this.readShield) && Object.is(GR, this.readMaxHealth)) return;
        if (this.readHealth = RR, this.readShield = JR, this.readMaxHealth = GR, null === RR || void 0 === RR || !GR) return this.lastHealthPool = null, this.maxHealth = null, this.Et = 1, this.dead = !1, void this.drawLow();
        const yR = RR + (null !== JR && void 0 !== JR ? JR : 0);
        if (null !== this.lastHealthPool && yR < this.lastHealthPool) {
          const RR = performance.now(),
            JR = (this.lastHealthPool - yR) / GR;
          this.lastDrop = RR - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + JR,
            at: this.lastDrop.at
          } : {
            frac: JR,
            at: RR
          }
        }
        this.dead = RR <= 0, this.dead && this.clearHits(), this.lastHealthPool = yR, this.maxHealth = GR, this.Et = RR > 0 ? RR / GR : 1, this.drawLow()
      }
      onHurt(RR, JR) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const GR = Math.min(1, this.takeDamageFrac(JR) / .3);
        null !== RR && this.parts.arcs && this.showArc(RR, GR), this.parts.edgeGlow && this.flashEdge(null === RR ? null : RR - this.cameraHeading, .4 + .6 * GR)
      }
      takeDamageFrac(RR) {
        if (void 0 !== RR && this.maxHealth) return RR / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: JR
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, JR
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const RR = fR((uR - this.Et) / .25),
          JR = fR((ZR - this.Et) / .15000000000000002),
          GR = this.Et < uR;
        this.lowLayer.classList.toggle("Active", GR), this.lowLayer.classList.toggle("Critical", this.Et < ZR), this.lowLayer.style.opacity = String(GR ? .55 + .3 * RR + .15 * JR : 0)
      }
      showArc(RR, JR) {
        var GR, yR;
        if (!this.arcLayer) return;
        let tR = this.arcs.find((JR => iR(JR.direction, RR) < .6));
        if (!tR) {
          const JR = document.createElement("div");
          JR.className = "DamageFeedbackArc", JR.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(JR), tR = {
            element: JR,
            direction: RR,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(tR)
        }
        tR.direction = RR, this.drawArcAngle(tR);
        const uR = tR.fade ? Number(getComputedStyle(tR.element).opacity) : 0;
        null === (GR = tR.fade) || void 0 === GR || GR.cancel(), null === (yR = tR.pop) || void 0 === yR || yR.cancel(), tR.element.style.opacity = "1";
        const ZR = tR.element.animate([{
          opacity: uR
        }, {
          opacity: 1
        }], 144);
        tR.fade = ZR, tR.pop = tR.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * JR
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const qR = tR;
        ZR.onfinish = () => {
          if (qR.fade !== ZR) return;
          const RR = qR.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          RR.startTime = ZR.startTime, qR.fade = RR, RR.onfinish = () => {
            qR.fade === RR && (qR.element.remove(), VR(this.arcs, qR))
          }
        }
      }
      drawArcAngle(RR) {
        const JR = RR.direction - this.cameraHeading;
        (null === RR.drawnAngle || Math.abs(JR - RR.drawnAngle) > .005) && (RR.drawnAngle = JR, RR.element.style.rotate = `${JR}rad`)
      }
      flashEdge(RR, JR) {
        var GR, yR, tR;
        if (!this.root) return;
        let uR = this.flashes.find((JR => null === JR.angle || null === RR ? JR.angle === RR : iR(JR.angle, RR) < .5));
        if (!uR) {
          const JR = document.createElement("div");
          JR.className = "DamageFeedbackFlash";
          const GR = JR.appendChild(document.createElement("div"));
          GR.className = "DamageFeedbackFlashGlow", this.root.insertBefore(JR, this.arcLayer), uR = {
            element: JR,
            glow: GR,
            angle: RR,
            level: 0,
            animation: null
          }, this.flashes.push(uR)
        }
        const ZR = null === (GR = uR.animation) || void 0 === GR || null === (yR = GR.effect) || void 0 === yR ? void 0 : yR.getComputedTiming().progress,
          qR = null === ZR || void 0 === ZR ? 0 : uR.level * (1 - ZR);
        uR.level = Math.min(1, Math.max(JR, qR + .6 * JR)), uR.angle = RR;
        const {
          x: fR,
          y: KR,
          rx: wR,
          ry: rR
        } = function(RR, JR) {
          const GR = window.innerWidth,
            yR = window.innerHeight;
          if (null === RR) return {
            x: GR / 2,
            y: yR / 2,
            rx: 0,
            ry: 0
          };
          const tR = Math.sin(RR),
            uR = -Math.cos(RR),
            ZR = GR / 2 / Math.max(1e-6, Math.abs(tR)),
            qR = yR / 2 / Math.max(1e-6, Math.abs(uR)),
            iR = Math.min(ZR, qR),
            fR = Math.round(GR / 2 + tR * iR),
            VR = Math.round(yR / 2 + uR * iR),
            KR = yR / 100 * (.85 + .25 * JR),
            wR = ZR <= qR,
            rR = Math.round((wR ? 30 : 74) * KR),
            eR = Math.round((wR ? 58 : 26) * KR);
          return {
            x: fR,
            y: VR,
            rx: rR,
            ry: eR
          }
        }(RR, uR.level), {
          style: eR
        } = uR.glow;
        uR.glow.classList.toggle("Everywhere", null === RR), eR.setProperty("--glowX", `${fR}px`), eR.setProperty("--glowY", `${KR}px`), eR.setProperty("--glowRx", `${wR}px`), eR.setProperty("--glowRy", `${rR}px`), uR.element.style.transformOrigin = `${fR}px ${KR}px`, null === (tR = uR.animation) || void 0 === tR || tR.cancel();
        const aR = uR.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: uR.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * uR.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * uR.level
        });
        uR.animation = aR;
        const LR = uR;
        aR.onfinish = () => {
          LR.animation === aR && (LR.element.remove(), VR(this.flashes, LR))
        }
      }
      clearHits() {
        for (const yR of this.arcs) {
          var RR, JR;
          null === (RR = yR.fade) || void 0 === RR || RR.cancel(), yR.fade = null, null === (JR = yR.pop) || void 0 === JR || JR.cancel(), yR.element.remove()
        }
        this.arcs.length = 0;
        for (const yR of this.flashes) {
          var GR;
          null === (GR = yR.animation) || void 0 === GR || GR.cancel(), yR.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function iR(RR, JR) {
      return Math.abs(Math.atan2(Math.sin(RR - JR), Math.cos(RR - JR)))
    }

    function fR(RR) {
      return Math.max(0, Math.min(1, RR))
    }

    function VR(RR, JR) {
      const GR = RR.indexOf(JR); - 1 !== GR && RR.splice(GR, 1)
    }
  },
  7553: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    const yR = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function tR(RR) {
      return null === yR ? Array.from(RR) : Array.from(yR.segment(RR), (RR => {
        let {
          segment: JR
        } = RR;
        return JR
      }))
    }
  },
  39672: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      h: () => uR
    });
    const yR = new WeakMap;

    function tR(RR) {
      let JR = yR.get(RR);
      return JR || (JR = {
        hidden: RR.hidden,
        x: NaN,
        y: NaN
      }, yR.set(RR, JR)), JR
    }

    function uR(RR, JR) {
      const GR = tR(RR);
      GR.hidden !== JR && (GR.hidden = JR, RR.hidden = JR)
    }

    function ZR(RR, JR, GR) {
      const yR = tR(RR);
      yR.x === JR && yR.y === GR || (yR.x = JR, yR.y = GR, RR.style.translate = `${JR}vw ${GR}vh`)
    }
  },
  38176: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = {
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
for (const RR in modules) Object.freeze(modules[RR]);