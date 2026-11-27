export const id = 18;
export const ids = [18];
export const modules = {
  37868: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => UW,
      l: () => xW,
      o: () => ZW
    });
    var mW = OW(35220),
      EW = OW(3361),
      NW = OW(3368),
      PW = OW(9954),
      LW = OW(1526),
      cW = OW(62),
      wW = OW(80),
      tW = OW(1283);

    function ZW() {
      var WW;
      return (0, LW.g)(EW.g, (0, EW.F)()), (0, tW.jsx)(tW.Fragment, {
        children: null === (WW = (0, EW.F)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function xW(WW) {
      var iW;
      let {
        show: OW
      } = WW;
      (0, LW.g)(EW.g, (0, EW.F)());
      const wW = null === (iW = (0, EW.F)()) || void 0 === iW ? void 0 : iW.menu;
      return (0, cW.useEffect)((() => {
        var WW;
        OW || (null === wW || void 0 === wW || null === (WW = wW.onClose) || void 0 === WW || WW.call(wW), (0, NW.s)())
      }), [OW, wW]), (0, cW.useEffect)((() => OW ? (0, PW.e)(NW.C, NW.f) : void 0), [OW]), (0, tW.jsx)(mW.d, {
        showing: OW,
        globallyUniqueKey: "clientGameMenu",
        children: null === wW || void 0 === wW ? void 0 : wW.content
      })
    }
    const lW = new Map,
      AW = new Set;

    function bW(WW, iW) {
      iW ? lW.set(WW, iW) : lW.delete(WW);
      for (const OW of AW) OW()
    }

    function jW(WW) {
      let {
        placement: iW = "bottom"
      } = WW;
      const OW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const WW = OW.current;
        return bW(iW, WW), () => {
          lW.get(iW) === WW && bW(iW, null)
        }
      }), [iW]), (0, tW.jsx)("div", {
        ref: OW,
        id: `clientGameHud-${iW}`,
        style: {
          display: "contents"
        }
      })
    }

    function UW(WW) {
      let {
        children: iW,
        placement: OW = "bottom"
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => {
        var WW;
        return null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null
      }));
      return (0, cW.useEffect)((() => {
        const WW = () => {
          var WW;
          EW(null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null)
        };
        return AW.add(WW), WW(), () => {
          AW.delete(WW)
        }
      }), [OW]), mW ? (0, wW.createPortal)(iW, mW) : null
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  37919: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW,
      h: () => wW,
      i: () => tW,
      j: () => AW
    });
    var mW = OW(62),
      EW = OW(4275),
      NW = OW(3457),
      PW = OW(27);
    const LW = 8,
      cW = "InGameHeaderContainer",
      wW = "TopRightElements";

    function tW(WW) {
      const [iW] = (0, EW.d)(), [OW, NW] = (0, mW.useState)(!1);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const iW = document.querySelector(`.${cW}`),
          OW = document.querySelector(`.${wW}`),
          mW = () => {
            const mW = WW.getBoundingClientRect(),
              EW = iW ? iW.getBoundingClientRect().right : 0,
              PW = OW ? OW.getBoundingClientRect().left : window.innerWidth,
              cW = mW.left < EW + LW,
              wW = mW.right > PW - LW;
            NW(cW || wW)
          };
        mW();
        const EW = new ResizeObserver(mW);
        return EW.observe(WW), iW && EW.observe(iW), OW && EW.observe(OW), () => {
          EW.disconnect()
        }
      }), [WW, iW]), OW
    }
    const ZW = `.InGameUi .${cW}`,
      xW = [ZW, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      lW = 1e3;

    function AW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW,
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [EW, cW] = (0, mW.useState)(null);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const mW = new ResizeObserver((() => {
          wW()
        }));
        mW.observe(WW), iW && iW !== WW && mW.observe(iW);
        let EW = [];

        function wW() {
          var NW, PW, wW;
          const tW = WW.getBoundingClientRect(),
            lW = function() {
              const WW = xW.map((WW => document.querySelector(WW))).filter((WW => null !== WW));
              for (const iW of WW) EW.includes(iW) || mW.observe(iW);
              for (const iW of EW) WW.includes(iW) || mW.unobserve(iW);
              return EW = WW, WW
            }(),
            AW = lW.filter((WW => {
              const iW = WW.getBoundingClientRect();
              return iW.width > 0 && iW.height > 0 && tW.left < iW.right + LW && tW.right > iW.left - LW
            }));
          if (0 === AW.length && !OW) return void cW(null);
          const bW = lW.find((WW => WW.matches(ZW))),
            jW = Math.max(null !== (NW = null === bW || void 0 === bW ? void 0 : bW.getBoundingClientRect().bottom) && void 0 !== NW ? NW : 0, ...AW.map((WW => WW.getBoundingClientRect().bottom))),
            UW = null !== (PW = null === iW || void 0 === iW || null === (wW = iW.offsetParent) || void 0 === wW ? void 0 : wW.getBoundingClientRect().top) && void 0 !== PW ? PW : 0;
          cW(Math.ceil(jW + LW / 2) - Math.round(UW))
        }
        const tW = setInterval(wW, lW);
        wW(), window.addEventListener("resize", wW);
        const AW = (0, PW.n)(NW.d, wW);
        return () => {
          mW.disconnect(), clearInterval(tW), window.removeEventListener("resize", wW), AW()
        }
      }), [WW, iW, OW]), EW
    }
  },
  37888: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      e: () => EW,
      f: () => NW
    });
    var mW = OW(62);

    function EW(WW) {
      return LW(WW, cW)
    }

    function NW(WW) {
      return LW(WW, wW)
    }

    function PW(WW) {
      return `${Math.floor(WW/60)}:${String(WW%60).padStart(2,"0")}`
    }

    function LW(WW, iW) {
      const [, OW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        if (0 === WW) return;
        const mW = window.setInterval((() => {
          const mW = iW(WW);
          OW((iW => (null === iW || void 0 === iW ? void 0 : iW.endsAt) === WW && iW.value === mW ? iW : {
            endsAt: WW,
            value: mW
          }))
        }), 250);
        return () => {
          window.clearInterval(mW)
        }
      }), [WW, iW]), iW(WW)
    }

    function cW(WW) {
      return (WW - performance.now()) / 1e3
    }

    function wW(WW) {
      return Math.max(0, Math.ceil(cW(WW)))
    }
  },
  37917: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = [{
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

    function EW(WW, iW, OW) {
      const EW = Math.abs(WW - iW),
        NW = Date.now() - OW;
      for (const PW of mW)
        if (WW < PW.maxDist) return EW >= PW.hardUpdateDist || NW > PW.timeBetweenSoftChecks && EW >= PW.softUpdateDist;
      return !1
    }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  39739: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      var mW;
      const {
        width: EW,
        height: NW
      } = OW, PW = null !== (mW = WW.text) && void 0 !== mW ? mW : WW, LW = (PW.x / 100 - .5) * EW, cW = (PW.y / 100 - .5) * NW, wW = EW / 2 - iW.x;
      if (null !== WW.text && Math.abs(LW) <= wW && cW >= iW.top - NW / 2 && cW <= NW / 2 - iW.bottom) return {
        x: PW.x,
        y: PW.y
      };
      const tW = Math.min(0 === LW ? 1 / 0 : wW / Math.abs(LW), cW > 0 ? (NW / 2 - iW.bottom) / cW : cW < 0 ? (iW.top - NW / 2) / cW : 1 / 0);
      return !Number.isFinite(tW) || tW < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + LW * tW / EW * 100,
        y: 50 + cW * tW / NW * 100
      }
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  40712: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = 1e3;

    function EW(WW, iW) {
      const OW = performance.now() + WW;
      return 0 !== iW && Math.abs(OW - iW) < mW ? iW : OW
    }
  },
  40719: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => cW
    });
    var mW = OW(37917),
      EW = OW(1172),
      NW = OW(1244),
      PW = OW(39679),
      LW = OW(39739);
    class cW {
      constructor(WW, iW) {
        var OW;
        this.classes = WW, this.distanceKey = iW, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.JA = !1, this.Lk = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Lk), null === (OW = window.visualViewport) || void 0 === OW || OW.addEventListener("resize", this.Lk)
      }
      bindMarker(WW) {
        const iW = this.refs.get(WW);
        if (iW) return iW;
        const OW = iW => {
          var mW;
          null === (mW = this.markers.get(WW)) || void 0 === mW || mW.stopObserving(), this.markers.delete(WW), iW && !this.JA ? (this.markers.set(WW, this.mount(iW)), this.refs.set(WW, OW)) : this.refs.delete(WW)
        };
        return this.refs.set(WW, OW), OW
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(WW) {
        this.render = WW
      }
      update(WW, iW, OW, mW, EW) {
        const NW = this.markers.get(WW);
        NW && (NW.target ??= [0, 0, 0], NW.target[0] = iW, NW.target[1] = OW, NW.target[2] = mW, this.place(NW), this.zi(NW, EW && Math.hypot(iW - EW[0], OW - EW[1], mW - EW[2])))
      }
      dispose() {
        var WW;
        this.JA = !0, window.removeEventListener("resize", this.Lk), null === (WW = window.visualViewport) || void 0 === WW || WW.removeEventListener("resize", this.Lk);
        for (const iW of this.markers.values()) iW.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(WW) {
        const {
          render: iW,
          viewport: OW
        } = this;
        if (!iW || !WW.target) return;
        const mW = (50 - iW.screenBandPct.y) / 100 * OW.height,
          EW = {
            x: WW.halfSize.width + 8,
            top: WW.halfSize.height + 8,
            bottom: WW.halfSize.height + WW.labelsBelow + mW
          },
          NW = iW.projectWorldPosToViewport(WW.target),
          cW = null !== NW && void 0 !== NW ? NW : iW.projectWorldPosToScreenPos(WW.target),
          wW = (0, LW.b)({
            x: cW.x,
            y: cW.y,
            text: NW
          }, EW, OW);
        (0, PW.e)(WW.root, Math.round(100 * wW.x) / 100, Math.round(100 * wW.y) / 100)
      }
      zi(WW, iW) {
        if (null === iW) return void(null !== WW.metres && (WW.metres = null, WW.distance.textContent = ""));
        const OW = Date.now();
        (null === WW.metres || (0, mW.e)(iW, WW.metres, WW.metresShownAt)) && (WW.metres = Math.round(iW), WW.metresShownAt = OW, WW.distance.textContent = (0, EW.u)(NW.e.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(WW.metres)
        }))
      }
      mount(WW) {
        const iW = {
            root: WW,
            distance: WW.querySelector(`.${this.classes.distance}`),
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
          OW = WW.querySelector(`.${this.classes.labels}`),
          mW = new ResizeObserver((() => {
            iW.halfSize = {
              width: Math.max(WW.offsetWidth, OW.offsetWidth) / 2,
              height: WW.offsetHeight / 2
            }, iW.labelsBelow = OW.offsetTop + OW.offsetHeight - WW.offsetHeight, this.place(iW)
          }));
        return mW.observe(WW, {
          box: "border-box"
        }), mW.observe(OW, {
          box: "border-box"
        }), iW.stopObserving = () => {
          mW.disconnect()
        }, iW
      }
    }
  },
  40701: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => wi
    });
    const mW = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var EW = OW(62),
      NW = OW(3361),
      PW = OW(40706),
      LW = OW(38195),
      cW = OW(37898),
      wW = OW(1856),
      tW = OW(27);
    const ZW = {
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
    const xW = 32;

    function lW(WW, iW, OW, mW) {
      return {
        tag: "line",
        attrs: {
          x1: WW,
          y1: iW,
          x2: OW,
          y2: mW,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function AW(WW) {
      return {
        tag: "circle",
        attrs: {
          cx: xW,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xW,
          r: WW,
          class: "Fill"
        }
      }
    }

    function bW(WW, iW) {
      return {
        tag: "path",
        attrs: {
          d: WW,
          "stroke-width": iW
        }
      }
    }

    function jW(WW, iW, OW) {
      return {
        tag: "circle",
        attrs: {
          cx: xW,
          cy: xW,
          r: WW,
          "stroke-width": iW,
          class: OW
        }
      }
    }

    function UW(WW, iW, OW) {
      return {
        tag: "text",
        attrs: {
          x: WW,
          y: iW,
          class: "Fill Label"
        },
        text: OW
      }
    }
    const kW = {
      pistol: WW => [lW(xW, xW - WW - 5, xW, xW - WW), lW(xW - WW - 5, xW, xW - WW, xW), lW(xW + WW, xW, xW + WW + 5, xW), AW(1.4)],
      rifle: WW => [lW(xW, xW - WW - 8, xW, xW - WW), lW(xW, xW + WW, xW, xW + WW + 8), lW(xW - WW - 8, xW, xW - WW, xW), lW(xW + WW, xW, xW + WW + 8, xW), AW(1)],
      smg: WW => {
        const iW = Math.PI / 2,
          OW = [];
        for (let PW = 0; PW < 4; PW++) OW.push((EW = PW * iW + .35, NW = (PW + 1) * iW - .35, bW(`M${xW+(mW=6+WW)*Math.cos(EW)} ${xW+mW*Math.sin(EW)} A${mW} ${mW} 0 0 1 ${xW+mW*Math.cos(NW)} ${xW+mW*Math.sin(NW)}`, 2)));
        var mW, EW, NW;
        return [...OW, AW(1.4)]
      },
      shotgun: WW => [jW(WW, 3, "Ring Outline"), jW(WW, 1.5, "Ring")],
      marksman: WW => [bW(`M${26-WW/2} ${39+WW/2} L32 33 L${38+WW/2} ${39+WW/2}`, 2), lW(14 - WW, xW, 24 - WW, xW, 1.5), lW(40 + WW, xW, 50 + WW, xW, 1.5), lW(14 - WW, 30, 14 - WW, 34, 1.5), lW(50 + WW, 30, 50 + WW, 34, 1.5)],
      machineGun: WW => {
        const iW = 10 + WW,
          OW = [];
        for (const [mW, EW] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) OW.push(bW(`M${xW+mW*iW} ${xW+EW*(iW-5)} L${xW+mW*iW} ${xW+EW*iW} L${xW+mW*(iW-5)} ${xW+EW*iW}`, 2));
        return [...OW, lW(xW, 28, xW, 36, 1.5), lW(28, xW, 36, xW, 1.5)]
      },
      launcher: () => [lW(14, 30, 50, 30, 1.5), lW(xW, 24, xW, 52, 1.5), lW(28, 38, 36, 38, 1.5), lW(29, 44, 35, 44, 1.5), lW(30, 50, 34, 50, 1.5), UW(38, 40, "100"), UW(37, 46, "200"), AW(1.4, 30)],
      melee: () => [bW("M32 26 L38 32 L32 38 L26 32 Z", 1.5), AW(1.2)],
      throwable: () => [AW(1.6)]
    };

    function sW(WW) {
      let {
        tag: iW,
        attrs: OW,
        text: mW
      } = WW, EW = `<${iW}`;
      for (const [NW, PW] of Object.entries(OW)) EW += ` ${NW}="${PW}"`;
      return void 0 === mW ? `${EW}/>` : `${EW}>${mW}</${iW}>`
    }
    class MW {
      constructor(WW, iW) {
        this.api = WW, this.localPlayerId = iW, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = WW => {
          this.element = WW, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, WW && !this.enabled && (WW.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, wW.getRemInPx)()))
        }, this.tokens = [tW.l.subscribe("aimingOverlay", (WW => {
          this.sniperOverlay = "sniper" === WW
        })), tW.l.subscribe("mouseState", (WW => {
          let {
            isDown: iW
          } = WW;
          this.mouseDown = iW
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      WK(WW) {
        WW !== this.enabled && (this.enabled = WW, this.drawnVisible = null, WW || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(WW, iW) {
        var OW, mW;
        if (!this.enabled) return;
        const {
          api: EW
        } = this, NW = EW.isAlive(this.localPlayerId) && null !== (OW = null === (mW = EW.kOW(this.localPlayerId)) || void 0 === mW ? void 0 : mW.name) && void 0 !== OW ? OW : null, PW = (LW = NW) && ZW[LW] || null;
        var LW;
        if (this.setOwnsCrosshair(null !== PW), !this.element) return;
        const cW = EW.getHeldGunInaccuracy(),
          wW = null !== cW,
          tW = null !== PW && !this.sniperOverlay && EW.isCrosshairShown();
        if (tW !== this.drawnVisible && (this.drawnVisible = tW, this.element.style.display = tW ? "block" : "none"), !tW) return;
        const xW = wW ? function(WW) {
            return "launcher" === WW || "melee" === WW || "throwable" === WW ? "none" : "shotgun" === WW ? "cone" : "offset"
          }(PW) : "none",
          lW = null !== cW && void 0 !== cW ? cW : 0;
        "cone" === xW ? this.drawCone(PW, this.coneRadiusVh(lW, iW) * this.gapPerVh, WW) : (this.coneDrawn = !1, this.draw(PW, "none" === xW ? 2 : this.offsetGap(lW)));
        const AW = !wW && this.mouseDown;
        AW !== this.drawnPressed && (this.drawnPressed = AW, this.element.classList.toggle("Pressed", AW))
      }
      dispose() {
        for (const WW of this.tokens) tW.l.unsubscribe(WW);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(WW, iW) {
        var OW, mW;
        WW !== this.drawnFamily ? (this.drawnFamily = WW, this.drawnGap = iW, this.element.innerHTML = function(WW, iW) {
          return `<svg viewBox="0 0 64 64">${kW[WW](iW).map(sW).join("")}</svg>`
        }(WW, iW), this.shapes = Array.from(null !== (OW = null === (mW = this.element.firstElementChild) || void 0 === mW ? void 0 : mW.children) && void 0 !== OW ? OW : [])) : iW !== this.drawnGap && (this.drawnGap = iW, function(WW, iW, OW) {
          const mW = kW[iW](OW);
          for (let EW = 0; EW < mW.length; EW++)
            for (const [iW, OW] of Object.entries(mW[EW].attrs)) {
              const mW = String(OW);
              WW[EW].getAttribute(iW) !== mW && WW[EW].setAttribute(iW, mW)
            }
        }(this.shapes, WW, iW))
      }
      drawCone(WW, iW, OW) {
        WW === this.drawnFamily && this.coneDrawn ? this.shownRadius += (iW - this.shownRadius) * (1 - Math.exp(-OW / 80)) : this.shownRadius = iW, this.coneDrawn = !0, this.draw(WW, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(WW, iW) {
        if (!(iW > 0)) return 1;
        const OW = WW * LW.i / 2;
        return Math.max(50 * Math.tan(OW) / iW, 1)
      }
      offsetGap(WW) {
        const iW = 2 + ((0, cW.f)(WW) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * iW) / 2)
      }
      setOwnsCrosshair(WW) {
        WW !== this.ownsCrosshair && (this.ownsCrosshair = WW, document.body.classList.toggle("FrontlineCustomCrosshair", WW))
      }
    }
    var KW = OW(1089),
      SW = OW.n(KW),
      YW = OW(37868),
      yW = OW(37919),
      TW = OW(1172),
      JW = OW(1526),
      hW = OW(37888),
      HW = OW(40710),
      nW = OW(40712);
    const uW = "frontlineHudChanged",
      oW = "frontlineScoreboardChanged";
    class dW {
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
      yZ(WW) {
        this.wire = WW, tW.l.iZ(uW, WW, !0)
      }
      receiveScoreboard(WW) {
        const iW = "scoreboard" === WW[0] ? (0, nW.e)(WW[5], this.scoreboard.endsAt) : 0;
        this.scoreboard = {
          wire: WW,
          endsAt: iW
        }, tW.l.iZ(oW, this.scoreboard, !0)
      }
    }
    var eW = OW(1283);
    const vW = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function gW(WW) {
      let {
        className: iW,
        point: OW
      } = WW;
      const [mW, EW, NW, PW, LW, cW] = OW;
      return (0, eW.jsxs)("div", {
        className: SW()(iW, `Owner-${EW||"None"}`, `Leader-${PW||"None"}`, {
          Contested: LW,
          Here: cW
        }),
        children: [(0, eW.jsx)("span", {
          className: "FrontlinePointLetter",
          children: mW
        }), (0, eW.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${NW}%`
          }
        })]
      })
    }
    const DW = (0, EW.memo)((function(WW) {
        let {
          points: iW,
          markers: OW
        } = WW;
        const {
          t: mW
        } = (0, TW.B)();
        return iW ? (0, eW.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: iW.map((WW => {
            const [iW, , , , , , , EW] = WW;
            return (0, eW.jsxs)("div", {
              ref: OW.points.bindMarker(iW),
              className: "FrontlinePointMarker",
              children: [(0, eW.jsx)(gW, {
                className: "FrontlinePointMarkerTile",
                point: WW
              }), (0, eW.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [EW && (0, eW.jsx)("span", {
                  className: SW()("FrontlinePointMarkerHomeTurf", `Team-${EW}`),
                  children: mW("frontlineHud:homeTurf", {
                    team: mW(vW[EW])
                  })
                }), (0, eW.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, iW)
          }))
        }) : null
      })),
      VW = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      pW = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function fW(WW) {
      let {
        hud: iW,
        crosshair: OW,
        damage: mW,
        markers: EW
      } = WW;
      const NW = (0, JW.g)(uW, iW.getWire()),
        PW = (0, JW.g)(oW, iW.getScoreboard());
      return (0, eW.jsxs)(eW.Fragment, {
        children: [(0, eW.jsx)(HW.e, {
          controller: mW
        }), (0, eW.jsx)(DW, {
          points: "scoreboard" === PW.wire[0] ? PW.wire[6] : null,
          markers: EW
        }), (0, eW.jsx)(XW, {
          view: PW
        }), (0, eW.jsx)("div", {
          className: "FrontlineReticle",
          ref: OW.bindElement
        }), (0, eW.jsx)(YW.h, {
          children: (0, eW.jsx)(CW, {
            wire: NW
          })
        })]
      })
    }
    const CW = (0, EW.memo)((function(WW) {
        let {
          wire: iW
        } = WW;
        const {
          t: OW
        } = (0, TW.B)();
        if ("capture" === iW[0]) {
          const [, WW, mW, EW, NW, PW, LW] = iW, cW = Math.round(EW / 100 * 24);
          return (0, eW.jsxs)("div", {
            className: SW()("FrontlinePlate", `Status-${mW}`, `Leader-${NW||"None"}`),
            children: [(0, eW.jsx)(GW, {}), (0, eW.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, eW.jsx)("span", {
                className: "FrontlineObjective",
                children: WW
              }), (0, eW.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, eW.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: OW("frontlineHud:objective", {
                    point: WW,
                    friendly: PW,
                    enemy: LW
                  })
                }), (0, eW.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: OW(VW[mW])
                })]
              }), (0, eW.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(EW).padStart(3, "0"), (0, eW.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, eW.jsx)(qW, {
              segments: 24,
              lit: cW
            })]
          })
        }
        if ("alert" === iW[0]) {
          const [, WW, mW, EW] = iW;
          return (0, eW.jsxs)("div", {
            className: SW()("FrontlinePlate", "FrontlineAlert", `Tone-${EW}`),
            children: [(0, eW.jsx)(GW, {}), (0, eW.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: OW(pW[WW])
            }), (0, eW.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: mW
            })]
          })
        }
        return null
      })),
      XW = (0, EW.memo)((function(WW) {
        let {
          view: iW
        } = WW;
        const {
          t: OW
        } = (0, TW.B)(), mW = (0, EW.useRef)(null), NW = function(WW, iW) {
          const [OW, mW] = (0, EW.useState)(!1);
          return (0, EW.useLayoutEffect)((() => {
            const iW = WW.current;
            if (!iW) return;
            const OW = document.querySelector(`.${yW.e}`),
              EW = document.querySelector(`.${yW.h}`),
              NW = () => {
                var WW;
                const NW = iW.querySelector(".FrontlineTeamTrack"),
                  PW = (0, wW.getRemInPx)(),
                  LW = iW.getBoundingClientRect().width - 2 * (null !== (WW = null === NW || void 0 === NW ? void 0 : NW.getBoundingClientRect().width) && void 0 !== WW ? WW : 0),
                  cW = window.innerWidth / 2,
                  tW = OW ? OW.getBoundingClientRect().right : 0,
                  ZW = EW ? EW.getBoundingClientRect().left : window.innerWidth,
                  xW = Math.min(cW - tW, ZW - cW) - yW.b - LW / 2,
                  lW = xW < 6 * PW,
                  AW = lW ? (window.innerWidth - LW) / 2 - yW.b : xW;
                iW.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(AW,14*PW)))}px`), mW(lW)
              };
            NW();
            const PW = new ResizeObserver(NW);
            for (const WW of [iW, OW, EW]) WW && PW.observe(WW);
            return window.addEventListener("resize", NW), () => {
              PW.disconnect(), window.removeEventListener("resize", NW)
            }
          }), [WW, iW]), OW
        }(mW, "scoreboard" === iW.wire[0]);
        if ("scoreboard" !== iW.wire[0]) return null;
        const [, PW, LW, cW, tW, , ZW] = iW.wire, xW = "Red" === PW ? "Blue" : "Red";
        return (0, eW.jsxs)("div", {
          className: SW()("FrontlineScoreboardContainer", {
            Below: NW
          }),
          children: [(0, eW.jsxs)("div", {
            ref: mW,
            className: "FrontlineScoreboard",
            children: [(0, eW.jsx)(GW, {}), (0, eW.jsx)(BW, {
              team: PW,
              tickets: LW,
              goal: tW,
              side: "Friendly"
            }), (0, eW.jsx)("div", {
              className: "FrontlinePoints",
              children: ZW.map((WW => (0, eW.jsx)(gW, {
                className: "FrontlinePoint",
                point: WW
              }, WW[0])))
            }), (0, eW.jsx)(BW, {
              team: xW,
              tickets: cW,
              goal: tW,
              side: "Enemy"
            })]
          }), (0, eW.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, eW.jsx)(RW, {
              endsAt: iW.endsAt
            }), (0, eW.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: OW("frontlineHud:ticketGoal", {
                goal: tW
              })
            })]
          })]
        })
      }));

    function BW(WW) {
      let {
        team: iW,
        tickets: OW,
        goal: mW,
        side: EW
      } = WW;
      const {
        t: NW
      } = (0, TW.B)(), PW = String(OW).padStart(3, "0"), LW = PW.search(/[1-9]/), cW = -1 === LW ? PW : PW.slice(0, LW), wW = Math.min(20, Math.floor(OW / mW * 20));
      return (0, eW.jsxs)("div", {
        className: SW()("FrontlineTeamScore", EW, `Team-${iW}`),
        children: [(0, eW.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, eW.jsx)("span", {
            className: "Lead",
            children: cW
          }), -1 !== LW && PW.slice(LW)]
        }), (0, eW.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, eW.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: NW(vW[iW])
          }), (0, eW.jsx)(qW, {
            segments: 20,
            lit: wW
          })]
        })]
      })
    }

    function qW(WW) {
      let {
        segments: iW,
        lit: OW
      } = WW;
      return (0, eW.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: iW
        }, ((WW, iW) => (0, eW.jsx)("i", {
          className: SW()({
            Lit: iW < OW
          })
        }, iW)))
      })
    }

    function RW(WW) {
      let {
        endsAt: iW
      } = WW;
      const OW = (0, hW.f)(iW);
      return (0, eW.jsx)("div", {
        className: SW()("FrontlineClock", {
          Urgent: OW <= 60
        }),
        children: (0, hW.d)(OW)
      })
    }

    function GW() {
      return (0, eW.jsxs)(eW.Fragment, {
        children: [(0, eW.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, eW.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var IW = OW(40719);
    class aW {
      constructor(WW) {
        this.hud = WW, this.points = new IW.d({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(WW, iW) {
        this.points.setRender(WW);
        const OW = this.hud.getScoreboard().wire;
        if ("scoreboard" === OW[0] && this.points.hasMarkers())
          for (const [mW, , , , , , EW] of OW[6]) EW && this.points.update(mW, EW[0], EW[1] + 2.5, EW[2], iW)
      }
    }
    var rW = OW(7421),
      zW = OW(3637);
    const FW = "frontlineRoundEndChanged";
    class QW {
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
      yZ(WW) {
        const iW = "roundEnd" === WW[0] ? performance.now() + WW[5] : 0;
        this.view = {
          wire: WW,
          key: this.view.key + 1,
          endsAt: iW
        }, tW.l.iZ(FW, this.view, !0)
      }
    }
    var Wi = OW(2983);
    const ii = (0, EW.lazy)((() => (0, zW.b)(Promise.all([OW.e(266), OW.e(228)]).then((() => OW(53944))), (WW => WW.FrontlineMvpLineup)))),
      Oi = [4800, 4e3, 3200],
      mi = [1, 0, 2],
      Ei = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Ni = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Pi(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, JW.g)(FW, iW.getView()),
        mW = (0, hW.e)(OW.endsAt);
      return "roundEnd" !== OW.wire[0] || 1e3 * mW < -2e3 ? null : (0, eW.jsx)(Li, {
        wire: OW.wire,
        secondsLeft: Math.max(0, Math.ceil(mW))
      }, OW.key)
    }
    const Li = (0, EW.memo)((function(WW) {
      let {
        wire: iW,
        secondsLeft: OW
      } = WW;
      const {
        t: NW
      } = (0, TW.B)();
      (0, EW.useEffect)((() => (0, Wi.c)()), []);
      const [, PW, LW, cW, wW, , tW, ZW] = iW, xW = (0, EW.useMemo)((() => mi.filter((WW => WW < ZW.length))), [ZW]), lW = (0, EW.useMemo)((() => xW.map((WW => {
        const [, , , , , iW, OW] = ZW[WW];
        return {
          cosmetics: mW.map(((WW, OW) => [WW, iW[OW]])),
          size: 0 === WW ? 1.15 : .85,
          heldGun: {
            name: OW,
            aimed: 0 === WW
          },
          showAfterMs: Oi[WW]
        }
      }))), [ZW, xW]);
      return (0, eW.jsxs)("div", {
        className: SW()("FrontlineRoundEnd", `Result-${PW}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, eW.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, eW.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, eW.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, eW.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, eW.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (AW = NW(Ei[PW]), /\p{Script=Arabic}/u.test(AW) ? [AW] : (0, rW.c)(AW)).map(((WW, iW) => (0, eW.jsx)("span", {
              style: {
                "--letter": iW
              },
              children: WW
            }, iW)))]
          }), (0, eW.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [LW && "victory" === PW && (0, eW.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: NW("frontlineRoundEnd:comeback")
            }), (0, eW.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, eW.jsx)("b", {
                className: "Friendly",
                children: cW
              }), " \u2013 ", (0, eW.jsx)("b", {
                className: "Enemy",
                children: wW
              })]
            })]
          })]
        }), xW.length > 0 && (0, eW.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": xW.length
          },
          children: [(0, eW.jsx)(EW.Suspense, {
            fallback: null,
            children: (0, eW.jsx)(ii, {
              className: "FrontlineRoundEndLineup",
              players: lW
            })
          }), xW.map((WW => (0, eW.jsx)(ci, {
            mvp: ZW[WW],
            place: WW
          }, WW)))]
        }), (0, eW.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: NW("frontlineRoundEnd:nextFront", {
            map: tW,
            seconds: String(OW)
          })
        })]
      });
      var AW
    }));

    function ci(WW) {
      let {
        mvp: iW,
        place: OW
      } = WW;
      const {
        t: mW
      } = (0, TW.B)(), [EW, NW, PW, LW, cW] = iW, [wW, tW] = mW(function(WW, iW) {
        return 1 === iW && "damage" !== WW ? `frontlineRoundEnd:${WW}One` : `frontlineRoundEnd:${WW}`
      }(PW, LW), {
        name: "\0",
        count: LW.toLocaleString()
      }).split("\0");
      return (0, eW.jsxs)("div", {
        className: SW()("FrontlineMvpCard", `Place-${OW+1}`, `Team-${NW}`),
        style: {
          "--revealMs": `${Oi[OW]}ms`
        },
        children: [(0, eW.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, eW.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, eW.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: mW(Ni[OW])
        }), (0, eW.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [wW, (0, eW.jsx)("span", {
            className: "FrontlineMvpName",
            children: EW
          }), tW]
        }), (0, eW.jsx)("div", {
          className: "FrontlineMvpKit",
          children: cW
        })]
      })
    }
    const wi = function(WW, iW, OW, mW) {
      let {
        localPlayerId: LW
      } = mW;
      const cW = new dW,
        wW = new QW;
      let tW = null,
        ZW = null,
        xW = null,
        lW = null,
        AW = null,
        bW = [!1, !1];
      const jW = () => {
        var WW, iW;
        const [OW, mW] = bW;
        null === (WW = ZW) || void 0 === WW || WW.WK(!OW), null === (iW = xW) || void 0 === iW || iW.WK(!mW)
      };
      return {
        onCreate: WW => {
          tW = WW, ZW = new MW(WW, LW), xW = new PW.d(WW, LW), lW = new aW(cW), jW(), AW = (0, NW.O)((0, EW.createElement)(EW.Fragment, null, (0, EW.createElement)(fW, {
            hud: cW,
            crosshair: ZW,
            damage: xW,
            markers: lW
          }), (0, EW.createElement)(Pi, {
            controller: wW
          })))
        },
        onClose: () => {
          var WW, iW, OW, mW;
          null === (WW = AW) || void 0 === WW || WW(), null === (iW = ZW) || void 0 === iW || iW.dispose(), ZW = null, null === (OW = xW) || void 0 === OW || OW.dispose(), xW = null, null === (mW = lW) || void 0 === mW || mW.points.dispose(), lW = null, tW = null
        },
        onAfterRender: (WW, iW) => {
          var OW, mW, EW, NW, PW;
          null === (OW = ZW) || void 0 === OW || OW.frame(WW, iW.tanHalfFovY), null === (mW = xW) || void 0 === mW || mW.frame(iW.cameraHeading), null === (EW = lW) || void 0 === EW || EW.frame(iW, null !== (NW = null === (PW = tW) || void 0 === PW ? void 0 : PW.getPositionView(LW)) && void 0 !== NW ? NW : null)
        },
        onReceivedMessageFromServer: (WW, iW) => {
          "frontlineHud" === WW ? cW.yZ(iW) : "frontlineScoreboard" === WW ? cW.receiveScoreboard(iW) : "frontlineRoundEnd" === WW ? wW.yZ(iW) : "frontlinePrefs" === WW && (bW = iW, jW())
        }
      }
    }
  },
  40710: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    var mW = OW(62),
      EW = OW(1283);
    const NW = (0, mW.memo)((function(WW) {
      let {
        controller: iW
      } = WW;
      return (0, EW.jsxs)("div", {
        className: "DamageFeedback",
        ref: iW.bindElement,
        children: [(0, EW.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, EW.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, EW.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  40706: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(27);
    const EW = "DamageFeedbackArcsShown",
      NW = .45,
      PW = .2;
    class LW {
      constructor(WW, iW) {
        let {
          arcs: OW = !0,
          edgeGlow: EW = !0,
          lowHealthShade: NW = !0,
          enabled: PW = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = WW, this.localPlayerId = iW, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.DE = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = WW => {
          var iW, OW;
          this.clearHits(), this.root = WW, this.lowLayer = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".DamageFeedbackLow")) && void 0 !== iW ? iW : null, this.arcLayer = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".DamageFeedbackArcs")) && void 0 !== OW ? OW : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: OW,
          edgeGlow: EW,
          lowHealthShade: NW
        }, this.enabled = PW, this.token = mW.l.subscribe("damagedByOtherPlayer", (WW => {
          let {
            direction: iW,
            vE: OW
          } = WW;
          this.onHurt(iW, OW)
        })), this.syncHealth(), this.showCustomDamage()
      }
      WK(WW) {
        WW !== this.enabled && (this.enabled = WW, this.showCustomDamage(), WW || this.clearHits(), this.showRoot())
      }
      frame(WW) {
        this.syncHealth(), this.cameraHeading = WW;
        for (const iW of this.arcs) this.drawArcAngle(iW)
      }
      dispose() {
        mW.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(EW)
      }
      showCustomDamage() {
        document.body.classList.toggle(EW, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const WW = this.api.getClientOption(this.localPlayerId, "_health"),
          iW = this.api.getClientOption(this.localPlayerId, "_shield"),
          OW = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(WW, this.readHealth) && Object.is(iW, this.readShield) && Object.is(OW, this.readMaxHealth)) return;
        if (this.readHealth = WW, this.readShield = iW, this.readMaxHealth = OW, null === WW || void 0 === WW || !OW) return this.lastHealthPool = null, this.maxHealth = null, this.DE = 1, this.dead = !1, void this.drawLow();
        const mW = WW + (null !== iW && void 0 !== iW ? iW : 0);
        if (null !== this.lastHealthPool && mW < this.lastHealthPool) {
          const WW = performance.now(),
            iW = (this.lastHealthPool - mW) / OW;
          this.lastDrop = WW - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + iW,
            at: this.lastDrop.at
          } : {
            frac: iW,
            at: WW
          }
        }
        this.dead = WW <= 0, this.dead && this.clearHits(), this.lastHealthPool = mW, this.maxHealth = OW, this.DE = WW > 0 ? WW / OW : 1, this.drawLow()
      }
      onHurt(WW, iW) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const OW = Math.min(1, this.takeDamageFrac(iW) / .3);
        null !== WW && this.parts.arcs && this.showArc(WW, OW), this.parts.edgeGlow && this.flashEdge(null === WW ? null : WW - this.cameraHeading, .4 + .6 * OW)
      }
      takeDamageFrac(WW) {
        if (void 0 !== WW && this.maxHealth) return WW / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: iW
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, iW
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const WW = wW((NW - this.DE) / .25),
          iW = wW((PW - this.DE) / .15000000000000002),
          OW = this.DE < NW;
        this.lowLayer.classList.toggle("Active", OW), this.lowLayer.classList.toggle("Critical", this.DE < PW), this.lowLayer.style.opacity = String(OW ? .55 + .3 * WW + .15 * iW : 0)
      }
      showArc(WW, iW) {
        var OW, mW;
        if (!this.arcLayer) return;
        let EW = this.arcs.find((iW => cW(iW.direction, WW) < .6));
        if (!EW) {
          const iW = document.createElement("div");
          iW.className = "DamageFeedbackArc", iW.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(iW), EW = {
            element: iW,
            direction: WW,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(EW)
        }
        EW.direction = WW, this.drawArcAngle(EW);
        const NW = EW.fade ? Number(getComputedStyle(EW.element).opacity) : 0;
        null === (OW = EW.fade) || void 0 === OW || OW.cancel(), null === (mW = EW.pop) || void 0 === mW || mW.cancel(), EW.element.style.opacity = "1";
        const PW = EW.element.animate([{
          opacity: NW
        }, {
          opacity: 1
        }], 144);
        EW.fade = PW, EW.pop = EW.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * iW
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const LW = EW;
        PW.onfinish = () => {
          if (LW.fade !== PW) return;
          const WW = LW.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          WW.startTime = PW.startTime, LW.fade = WW, WW.onfinish = () => {
            LW.fade === WW && (LW.element.remove(), tW(this.arcs, LW))
          }
        }
      }
      drawArcAngle(WW) {
        const iW = WW.direction - this.cameraHeading;
        (null === WW.drawnAngle || Math.abs(iW - WW.drawnAngle) > .005) && (WW.drawnAngle = iW, WW.element.style.rotate = `${iW}rad`)
      }
      flashEdge(WW, iW) {
        var OW, mW, EW;
        if (!this.root) return;
        let NW = this.flashes.find((iW => null === iW.angle || null === WW ? iW.angle === WW : cW(iW.angle, WW) < .5));
        if (!NW) {
          const iW = document.createElement("div");
          iW.className = "DamageFeedbackFlash";
          const OW = iW.appendChild(document.createElement("div"));
          OW.className = "DamageFeedbackFlashGlow", this.root.insertBefore(iW, this.arcLayer), NW = {
            element: iW,
            glow: OW,
            angle: WW,
            level: 0,
            animation: null
          }, this.flashes.push(NW)
        }
        const PW = null === (OW = NW.animation) || void 0 === OW || null === (mW = OW.effect) || void 0 === mW ? void 0 : mW.getComputedTiming().progress,
          LW = null === PW || void 0 === PW ? 0 : NW.level * (1 - PW);
        NW.level = Math.min(1, Math.max(iW, LW + .6 * iW)), NW.angle = WW;
        const {
          x: wW,
          y: ZW,
          rx: xW,
          ry: lW
        } = function(WW, iW) {
          const OW = window.innerWidth,
            mW = window.innerHeight;
          if (null === WW) return {
            x: OW / 2,
            y: mW / 2,
            rx: 0,
            ry: 0
          };
          const EW = Math.sin(WW),
            NW = -Math.cos(WW),
            PW = OW / 2 / Math.max(1e-6, Math.abs(EW)),
            LW = mW / 2 / Math.max(1e-6, Math.abs(NW)),
            cW = Math.min(PW, LW),
            wW = Math.round(OW / 2 + EW * cW),
            tW = Math.round(mW / 2 + NW * cW),
            ZW = mW / 100 * (.85 + .25 * iW),
            xW = PW <= LW,
            lW = Math.round((xW ? 30 : 74) * ZW),
            AW = Math.round((xW ? 58 : 26) * ZW);
          return {
            x: wW,
            y: tW,
            rx: lW,
            ry: AW
          }
        }(WW, NW.level), {
          style: AW
        } = NW.glow;
        NW.glow.classList.toggle("Everywhere", null === WW), AW.setProperty("--glowX", `${wW}px`), AW.setProperty("--glowY", `${ZW}px`), AW.setProperty("--glowRx", `${xW}px`), AW.setProperty("--glowRy", `${lW}px`), NW.element.style.transformOrigin = `${wW}px ${ZW}px`, null === (EW = NW.animation) || void 0 === EW || EW.cancel();
        const bW = NW.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: NW.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * NW.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * NW.level
        });
        NW.animation = bW;
        const jW = NW;
        bW.onfinish = () => {
          jW.animation === bW && (jW.element.remove(), tW(this.flashes, jW))
        }
      }
      clearHits() {
        for (const mW of this.arcs) {
          var WW, iW;
          null === (WW = mW.fade) || void 0 === WW || WW.cancel(), mW.fade = null, null === (iW = mW.pop) || void 0 === iW || iW.cancel(), mW.element.remove()
        }
        this.arcs.length = 0;
        for (const mW of this.flashes) {
          var OW;
          null === (OW = mW.animation) || void 0 === OW || OW.cancel(), mW.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function cW(WW, iW) {
      return Math.abs(Math.atan2(Math.sin(WW - iW), Math.cos(WW - iW)))
    }

    function wW(WW) {
      return Math.max(0, Math.min(1, WW))
    }

    function tW(WW, iW) {
      const OW = WW.indexOf(iW); - 1 !== OW && WW.splice(OW, 1)
    }
  },
  7421: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    const mW = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function EW(WW) {
      return null === mW ? Array.from(WW) : Array.from(mW.segment(WW), (WW => {
        let {
          segment: iW
        } = WW;
        return iW
      }))
    }
  },
  39679: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW) {
      let iW = mW.get(WW);
      return iW || (iW = {
        hidden: WW.hidden,
        x: NaN,
        y: NaN
      }, mW.set(WW, iW)), iW
    }

    function NW(WW, iW) {
      const OW = EW(WW);
      OW.hidden !== iW && (OW.hidden = iW, WW.hidden = iW)
    }

    function PW(WW, iW, OW) {
      const mW = EW(WW);
      mW.x === iW && mW.y === OW || (mW.x = iW, mW.y = OW, WW.style.translate = `${iW}vw ${OW}vh`)
    }
  },
  38214: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    const mW = {
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
for (const WW in modules) Object.freeze(modules[WW]);