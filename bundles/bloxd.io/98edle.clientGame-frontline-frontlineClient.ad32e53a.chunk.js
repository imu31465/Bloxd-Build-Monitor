export const id = 15;
export const ids = [15];
export const modules = {
  34827: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW,
      g: () => gR,
      k: () => tR,
      n: () => BW
    });
    var wW = MW(8135),
      CW = MW(34830),
      zR = MW(34838),
      AW = MW(7672),
      bR = MW(1253),
      yR = MW(75),
      NW = MW(93),
      eW = MW(940);

    function BW() {
      var WW;
      return (0, bR.i)(CW.c, (0, CW.h)()), (0, eW.jsx)(eW.Fragment, {
        children: null === (WW = (0, CW.h)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function tR(WW) {
      var RW;
      let {
        show: MW
      } = WW;
      (0, bR.i)(CW.c, (0, CW.h)());
      const NW = null === (RW = (0, CW.h)()) || void 0 === RW ? void 0 : RW.menu;
      return (0, yR.useEffect)((() => {
        MW || (null === NW || void 0 === NW || NW.onClose(), (0, zR.s)())
      }), [MW, NW]), (0, yR.useEffect)((() => MW ? (0, AW.g)(zR.D, zR.e) : void 0), [MW]), (0, eW.jsx)(wW.c, {
        showing: MW,
        globallyUniqueKey: "clientGameMenu",
        children: null === NW || void 0 === NW ? void 0 : NW.content
      })
    }

    function TW(WW) {
      let {
        placement: RW = "bottom"
      } = WW;
      return (0, eW.jsx)("div", {
        id: `clientGameHud-${RW}`,
        style: {
          display: "contents"
        }
      })
    }

    function gR(WW) {
      let {
        children: RW,
        placement: MW = "bottom"
      } = WW;
      const [wW, CW] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        CW(document.getElementById(`clientGameHud-${MW}`))
      }), [MW]), wW ? (0, NW.createPortal)(RW, wW) : null
    }
  },
  35119: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(75),
      AW = MW(1523),
      bR = MW(940);
    const yR = (0, zR.forwardRef)((function(WW, RW) {
      let {
        text: MW,
        className: wW,
        children: zR
      } = WW;
      return MW.hasText ? (0, bR.jsx)("div", {
        ref: RW,
        className: CW()("HudTextPanel", wW, {
          NoBackground: !MW.showBackground
        }),
        children: null !== zR && void 0 !== zR ? zR : (0, bR.jsx)(AW.c, {
          text: MW.content
        })
      }) : null
    }))
  },
  35111: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => eW,
      e: () => BW,
      i: () => tR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(35119),
      AW = MW(75),
      bR = MW(1953),
      yR = MW(964),
      NW = MW(940);
    const eW = "InGameHeaderContainer",
      BW = "TopRightElements",
      tR = (0, AW.memo)((function() {
        const [WW] = (0, yR.b)(), RW = (0, bR.l)("middleTextTop"), MW = (0, AW.useRef)(null), [wW, tR] = (0, AW.useState)(!1), TW = RW.hasText;
        return (0, AW.useLayoutEffect)((() => {
          const WW = MW.current;
          if (!WW) return;
          const RW = document.querySelector(`.${eW}`),
            wW = document.querySelector(`.${BW}`),
            CW = () => {
              const MW = WW.getBoundingClientRect(),
                CW = RW ? RW.getBoundingClientRect().right : 0,
                zR = wW ? wW.getBoundingClientRect().left : window.innerWidth,
                AW = MW.left < CW + 8,
                bR = MW.right > zR - 8;
              tR(AW || bR)
            };
          CW();
          const zR = new ResizeObserver(CW);
          return zR.observe(WW), RW && zR.observe(RW), wW && zR.observe(wW), () => {
            zR.disconnect()
          }
        }), [TW, RW.content, WW]), TW ? (0, NW.jsx)("div", {
          className: CW()("MiddleTextTopContainer", {
            MiddleTextTopBelow: wW
          }),
          children: (0, NW.jsx)(zR.e, {
            ref: MW,
            className: "MiddleTextTop",
            text: RW
          })
        }) : null
      }))
  },
  8135: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(3578),
      CW = MW(3587);

    function zR(WW) {
      let {
        children: RW,
        showing: MW,
        globallyUniqueKey: zR,
        alwaysMountChildren: AW = !1,
        doGameplayStartStopOnShow: bR = !0
      } = WW;
      return (0, CW.d)(!0, MW, zR), (0, wW.c)(bR, MW), MW || AW ? RW : null
    }
  },
  34937: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    const wW = [{
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

    function CW(WW, RW, MW) {
      const CW = Math.abs(WW - RW),
        zR = Date.now() - MW;
      for (const AW of wW)
        if (WW < AW.maxDist) return CW >= AW.hardUpdateDist || zR > AW.timeBetweenSoftChecks && CW >= AW.softUpdateDist;
      return !1
    }
  },
  7672: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => CW
    });
    let wW = null;
    const CW = function(WW) {
        const RW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wW = RW, () => {
          wW === RW && (wW = null)
        }
      },
      zR = () => {
        var WW;
        return null !== (WW = wW) && void 0 !== WW && WW.canCycle() ? wW.cycle : null
      }
  },
  36578: (WW, RW, MW) => {
    function wW(WW, RW, MW) {
      var wW;
      const {
        width: CW,
        height: zR
      } = MW, AW = null !== (wW = WW.text) && void 0 !== wW ? wW : WW, bR = (AW.x / 100 - .5) * CW, yR = (AW.y / 100 - .5) * zR, NW = CW / 2 - RW.x;
      if (null !== WW.text && Math.abs(bR) <= NW && yR >= RW.top - zR / 2 && yR <= zR / 2 - RW.bottom) return {
        x: AW.x,
        y: AW.y
      };
      const eW = Math.min(0 === bR ? 1 / 0 : NW / Math.abs(bR), yR > 0 ? (zR / 2 - RW.bottom) / yR : yR < 0 ? (RW.top - zR / 2) / yR : 1 / 0);
      return !Number.isFinite(eW) || eW < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bR * eW / CW * 100,
        y: 50 + yR * eW / zR * 100
      }
    }
    MW.d(RW, {
      d: () => wW
    })
  },
  34838: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => IW,
      D: () => gR,
      E: () => PW,
      c: () => zR,
      e: () => iR,
      i: () => YW,
      m: () => bR,
      q: () => tR,
      s: () => JW,
      w: () => BW
    });
    var wW = MW(27),
      CW = MW(33);
    const zR = "clientGameInventoryButtonsChanged",
      AW = new Map;

    function bR() {
      return [...AW.values()].sort(((WW, RW) => {
        var MW, wW;
        return (null !== (MW = WW.order) && void 0 !== MW ? MW : 0) - (null !== (wW = RW.order) && void 0 !== wW ? wW : 0)
      }))
    }
    let yR = null;

    function NW(WW) {
      yR = WW
    }
    let eW = !1;

    function BW(WW) {
      eW = !0;
      try {
        WW.onClick()
      } finally {
        eW = !1
      }
      WW.panel && "clientGame" === wW.b.get("openInGameMenuName") && NW(WW.id)
    }

    function tR() {
      return eW
    }

    function TW() {
      return bR().filter((WW => WW.panel && !WW.disabled))
    }

    function gR(WW) {
      const RW = TW(),
        MW = RW.findIndex((WW => WW.id === yR));
      return !(MW < 0 || RW.length < 2) && (BW(RW[(MW + WW + RW.length) % RW.length]), !0)
    }

    function iR() {
      return null !== yR && TW().length > 1
    }

    function YW() {
      NW(null)
    }

    function JW() {
      "inventory" !== wW.b.get("openInGameMenuName") && NW(null)
    }

    function PW() {
      const WW = yR;
      return NW(null), WW
    }

    function IW(WW) {
      return AW.set(WW.id, WW), CW.k.Sz(zR, bR(), !0), () => {
        AW.get(WW.id) === WW && (AW.delete(WW.id), CW.k.Sz(zR, bR()))
      }
    }
  },
  34830: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      e: () => YW,
      f: () => JW,
      g: () => tR,
      h: () => NW,
      j: () => iR,
      k: () => TW,
      l: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(1115),
      AW = MW(34838);
    const bR = "clientGameUiChanged";
    let yR = null;

    function NW() {
      return yR
    }

    function eW(WW, RW) {
      const MW = {
        content: WW,
        menu: RW
      };
      return yR = MW, CW.k.Sz(bR, yR, !0), () => {
        yR === MW && (yR = null, gR = !1, YW(), CW.k.Sz(bR, null))
      }
    }
    let BW = null;

    function tR() {
      return BW
    }

    function TW(WW) {
      return BW = WW, () => {
        BW === WW && (BW = null)
      }
    }
    let gR = !1;

    function iR() {
      const WW = wW.b.get("openInGameMenuName");
      "clientGame" !== WW && (gR = "inventory" === WW), (0, AW.q)() || (0, AW.i)(), (0, zR.n)("InGameMenu"), wW.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function YW() {
      PW(!1)
    }

    function JW() {
      PW(gR)
    }

    function PW(WW) {
      "clientGame" === wW.b.get("openInGameMenuName") && wW.b.set({
        openInGameMenuName: WW ? "inventory" : null
      }), WW || (0, AW.i)(), gR = !1
    }
  },
  37264: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => YR
    });
    const wW = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var CW = MW(75),
      zR = MW(34830),
      AW = MW(35196),
      bR = MW(34855),
      yR = MW(1495),
      NW = MW(33);
    const eW = {
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
    const BW = 32;

    function tR(WW, RW, MW, wW) {
      return {
        tag: "line",
        attrs: {
          x1: WW,
          y1: RW,
          x2: MW,
          y2: wW,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function TW(WW) {
      return {
        tag: "circle",
        attrs: {
          cx: BW,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BW,
          r: WW,
          class: "Fill"
        }
      }
    }

    function gR(WW, RW) {
      return {
        tag: "path",
        attrs: {
          d: WW,
          "stroke-width": RW
        }
      }
    }

    function iR(WW, RW, MW) {
      return {
        tag: "circle",
        attrs: {
          cx: BW,
          cy: BW,
          r: WW,
          "stroke-width": RW,
          class: MW
        }
      }
    }

    function YW(WW, RW, MW) {
      return {
        tag: "text",
        attrs: {
          x: WW,
          y: RW,
          class: "Fill Label"
        },
        text: MW
      }
    }
    const JW = {
      pistol: WW => [tR(BW, BW - WW - 5, BW, BW - WW), tR(BW - WW - 5, BW, BW - WW, BW), tR(BW + WW, BW, BW + WW + 5, BW), TW(1.4)],
      rifle: WW => [tR(BW, BW - WW - 8, BW, BW - WW), tR(BW, BW + WW, BW, BW + WW + 8), tR(BW - WW - 8, BW, BW - WW, BW), tR(BW + WW, BW, BW + WW + 8, BW), TW(1)],
      smg: WW => {
        const RW = Math.PI / 2,
          MW = [];
        for (let AW = 0; AW < 4; AW++) MW.push((CW = AW * RW + .35, zR = (AW + 1) * RW - .35, gR(`M${BW+(wW=6+WW)*Math.cos(CW)} ${BW+wW*Math.sin(CW)} A${wW} ${wW} 0 0 1 ${BW+wW*Math.cos(zR)} ${BW+wW*Math.sin(zR)}`, 2)));
        var wW, CW, zR;
        return [...MW, TW(1.4)]
      },
      shotgun: WW => [iR(WW, 3, "Ring Outline"), iR(WW, 1.5, "Ring")],
      marksman: WW => [gR(`M${26-WW/2} ${39+WW/2} L32 33 L${38+WW/2} ${39+WW/2}`, 2), tR(14 - WW, BW, 24 - WW, BW, 1.5), tR(40 + WW, BW, 50 + WW, BW, 1.5), tR(14 - WW, 30, 14 - WW, 34, 1.5), tR(50 + WW, 30, 50 + WW, 34, 1.5)],
      machineGun: WW => {
        const RW = 10 + WW,
          MW = [];
        for (const [wW, CW] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) MW.push(gR(`M${BW+wW*RW} ${BW+CW*(RW-5)} L${BW+wW*RW} ${BW+CW*RW} L${BW+wW*(RW-5)} ${BW+CW*RW}`, 2));
        return [...MW, tR(BW, 28, BW, 36, 1.5), tR(28, BW, 36, BW, 1.5)]
      },
      launcher: () => [tR(14, 30, 50, 30, 1.5), tR(BW, 24, BW, 52, 1.5), tR(28, 38, 36, 38, 1.5), tR(29, 44, 35, 44, 1.5), tR(30, 50, 34, 50, 1.5), YW(38, 40, "100"), YW(37, 46, "200"), TW(1.4, 30)],
      melee: () => [gR("M32 26 L38 32 L32 38 L26 32 Z", 1.5), TW(1.2)],
      throwable: () => [TW(1.6)]
    };

    function PW(WW) {
      let {
        tag: RW,
        attrs: MW,
        text: wW
      } = WW, CW = `<${RW}`;
      for (const [zR, AW] of Object.entries(MW)) CW += ` ${zR}="${AW}"`;
      return void 0 === wW ? `${CW}/>` : `${CW}>${wW}</${RW}>`
    }
    class IW {
      constructor(WW, RW) {
        this.api = WW, this.localPlayerId = RW, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = WW => {
          this.element = WW, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, WW && !this.enabled && (WW.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, yR.getRemInPx)()))
        }, this.tokens = [NW.k.subscribe("aimingOverlay", (WW => {
          this.sniperOverlay = "sniper" === WW
        })), NW.k.subscribe("mouseState", (WW => {
          let {
            isDown: RW
          } = WW;
          this.mouseDown = RW
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      kMW(WW) {
        WW !== this.enabled && (this.enabled = WW, this.drawnVisible = null, WW || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(WW, RW) {
        var MW, wW;
        if (!this.enabled) return;
        const {
          api: CW
        } = this, zR = CW.isAlive(this.localPlayerId) && null !== (MW = null === (wW = CW.HbW(this.localPlayerId)) || void 0 === wW ? void 0 : wW.name) && void 0 !== MW ? MW : null, AW = (bR = zR) && eW[bR] || null;
        var bR;
        if (this.setOwnsCrosshair(null !== AW), !this.element) return;
        const yR = CW.getHeldGunInaccuracy(),
          NW = null !== yR,
          BW = null !== AW && !this.sniperOverlay && CW.isCrosshairShown();
        if (BW !== this.drawnVisible && (this.drawnVisible = BW, this.element.style.display = BW ? "block" : "none"), !BW) return;
        const tR = NW ? function(WW) {
            return "launcher" === WW || "melee" === WW || "throwable" === WW ? "none" : "shotgun" === WW ? "cone" : "offset"
          }(AW) : "none",
          TW = null !== yR && void 0 !== yR ? yR : 0;
        "cone" === tR ? this.drawCone(AW, this.coneRadiusVh(TW, RW) * this.gapPerVh, WW) : (this.coneDrawn = !1, this.draw(AW, "none" === tR ? 2 : this.offsetGap(TW)));
        const gR = !NW && this.mouseDown;
        gR !== this.drawnPressed && (this.drawnPressed = gR, this.element.classList.toggle("Pressed", gR))
      }
      dispose() {
        for (const WW of this.tokens) NW.k.unsubscribe(WW);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(WW, RW) {
        var MW, wW;
        WW !== this.drawnFamily ? (this.drawnFamily = WW, this.drawnGap = RW, this.element.innerHTML = function(WW, RW) {
          return `<svg viewBox="0 0 64 64">${JW[WW](RW).map(PW).join("")}</svg>`
        }(WW, RW), this.shapes = Array.from(null !== (MW = null === (wW = this.element.firstElementChild) || void 0 === wW ? void 0 : wW.children) && void 0 !== MW ? MW : [])) : RW !== this.drawnGap && (this.drawnGap = RW, function(WW, RW, MW) {
          const wW = JW[RW](MW);
          for (let CW = 0; CW < wW.length; CW++)
            for (const [RW, MW] of Object.entries(wW[CW].attrs)) {
              const wW = String(MW);
              WW[CW].getAttribute(RW) !== wW && WW[CW].setAttribute(RW, wW)
            }
        }(this.shapes, WW, RW))
      }
      drawCone(WW, RW, MW) {
        WW === this.drawnFamily && this.coneDrawn ? this.shownRadius += (RW - this.shownRadius) * (1 - Math.exp(-MW / 80)) : this.shownRadius = RW, this.coneDrawn = !0, this.draw(WW, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(WW, RW) {
        if (!(RW > 0)) return 1;
        const MW = WW * AW.h / 2;
        return Math.max(50 * Math.tan(MW) / RW, 1)
      }
      offsetGap(WW) {
        const RW = 2 + ((0, bR.b)(WW) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * RW) / 2)
      }
      setOwnsCrosshair(WW) {
        WW !== this.ownsCrosshair && (this.ownsCrosshair = WW, document.body.classList.toggle("FrontlineCustomCrosshair", WW))
      }
    }
    const oW = "FrontlineCustomDamage",
      lW = .45,
      FW = .2;
    class fW {
      constructor(WW, RW) {
        this.api = WW, this.localPlayerId = RW, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.oWW = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = WW => {
          var RW, MW;
          this.clearHits(), this.root = WW, this.lowLayer = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".FrontlineDamageLow")) && void 0 !== RW ? RW : null, this.arcLayer = null !== (MW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".FrontlineDamageArcs")) && void 0 !== MW ? MW : null, this.showRoot(), this.drawLow()
        }, this.token = NW.k.subscribe("damagedByOtherPlayer", (WW => {
          let {
            direction: RW,
            PWW: MW
          } = WW;
          this.onHurt(RW, MW)
        })), this.syncHealth(), document.body.classList.add(oW)
      }
      kMW(WW) {
        WW !== this.enabled && (this.enabled = WW, document.body.classList.toggle(oW, WW), WW || this.clearHits(), this.showRoot())
      }
      frame(WW) {
        this.syncHealth(), this.cameraHeading = WW;
        for (const RW of this.arcs) this.drawArcAngle(RW)
      }
      dispose() {
        NW.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(oW)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const WW = this.api.getClientOption(this.localPlayerId, "_health"),
          RW = this.api.getClientOption(this.localPlayerId, "_shield"),
          MW = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(WW, this.readHealth) && Object.is(RW, this.readShield) && Object.is(MW, this.readMaxHealth)) return;
        if (this.readHealth = WW, this.readShield = RW, this.readMaxHealth = MW, null === WW || void 0 === WW || !MW) return this.lastHealthPool = null, this.maxHealth = null, this.oWW = 1, this.dead = !1, void this.drawLow();
        const wW = WW + (null !== RW && void 0 !== RW ? RW : 0);
        if (null !== this.lastHealthPool && wW < this.lastHealthPool) {
          const WW = performance.now(),
            RW = (this.lastHealthPool - wW) / MW;
          this.lastDrop = WW - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + RW,
            at: this.lastDrop.at
          } : {
            frac: RW,
            at: WW
          }
        }
        this.dead = WW <= 0, this.dead && this.clearHits(), this.lastHealthPool = wW, this.maxHealth = MW, this.oWW = WW > 0 ? WW / MW : 1, this.drawLow()
      }
      onHurt(WW, RW) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const MW = Math.min(1, this.takeDamageFrac(RW) / .3);
        null !== WW && this.showArc(WW, MW), this.flashEdge(null === WW ? null : WW - this.cameraHeading, .4 + .6 * MW)
      }
      takeDamageFrac(WW) {
        if (void 0 !== WW && this.maxHealth) return WW / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: RW
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, RW
      }
      drawLow() {
        if (!this.lowLayer) return;
        const WW = rR((lW - this.oWW) / .25),
          RW = rR((FW - this.oWW) / .15000000000000002),
          MW = this.oWW < lW;
        this.lowLayer.classList.toggle("Active", MW), this.lowLayer.classList.toggle("Critical", this.oWW < FW), this.lowLayer.style.opacity = String(MW ? .55 + .3 * WW + .15 * RW : 0)
      }
      showArc(WW, RW) {
        var MW, wW;
        if (!this.arcLayer) return;
        let CW = this.arcs.find((RW => QW(RW.direction, WW) < .6));
        if (!CW) {
          const RW = document.createElement("div");
          RW.className = "FrontlineDamageArc", this.arcLayer.appendChild(RW), CW = {
            element: RW,
            direction: WW,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(CW)
        }
        CW.direction = WW, this.drawArcAngle(CW);
        const zR = CW.fade ? Number(getComputedStyle(CW.element).opacity) : 0;
        null === (MW = CW.fade) || void 0 === MW || MW.cancel(), null === (wW = CW.pop) || void 0 === wW || wW.cancel();
        const AW = CW.element.animate([{
          opacity: zR
        }, {
          opacity: 1,
          offset: .08
        }, {
          opacity: 1,
          offset: .52,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0
        }], {
          duration: 1800,
          fill: "forwards"
        });
        CW.fade = AW, CW.pop = CW.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * RW
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const bR = CW;
        AW.onfinish = () => {
          bR.fade === AW && (bR.element.remove(), cR(this.arcs, bR))
        }
      }
      drawArcAngle(WW) {
        const RW = WW.direction - this.cameraHeading;
        (null === WW.drawnAngle || Math.abs(RW - WW.drawnAngle) > .005) && (WW.drawnAngle = RW, WW.element.style.rotate = `${RW}rad`)
      }
      flashEdge(WW, RW) {
        var MW, wW, CW;
        if (!this.root) return;
        let zR = this.flashes.find((RW => null === RW.angle || null === WW ? RW.angle === WW : QW(RW.angle, WW) < .5));
        if (!zR) {
          const RW = document.createElement("div");
          RW.className = "FrontlineDamageFlash", this.root.insertBefore(RW, this.arcLayer), zR = {
            element: RW,
            angle: WW,
            level: 0,
            animation: null
          }, this.flashes.push(zR)
        }
        const AW = null === (MW = zR.animation) || void 0 === MW || null === (wW = MW.effect) || void 0 === wW ? void 0 : wW.getComputedTiming().progress,
          bR = null === AW || void 0 === AW ? 0 : zR.level * (1 - AW);
        zR.level = Math.min(1, Math.max(RW, bR + .6 * RW)), zR.angle = WW;
        const {
          x: yR,
          y: NW,
          rx: eW,
          ry: BW
        } = function(WW, RW) {
          const MW = window.innerWidth,
            wW = window.innerHeight;
          if (null === WW) return {
            x: MW / 2,
            y: wW / 2,
            rx: 0,
            ry: 0
          };
          const CW = Math.sin(WW),
            zR = -Math.cos(WW),
            AW = MW / 2 / Math.max(1e-6, Math.abs(CW)),
            bR = wW / 2 / Math.max(1e-6, Math.abs(zR)),
            yR = Math.min(AW, bR),
            NW = Math.round(MW / 2 + CW * yR),
            eW = Math.round(wW / 2 + zR * yR),
            BW = wW / 100 * (.85 + .25 * RW),
            tR = AW <= bR,
            TW = Math.round((tR ? 30 : 74) * BW),
            gR = Math.round((tR ? 58 : 26) * BW);
          return {
            x: NW,
            y: eW,
            rx: TW,
            ry: gR
          }
        }(WW, zR.level), {
          style: tR
        } = zR.element;
        zR.element.classList.toggle("Everywhere", null === WW), tR.setProperty("--glowX", `${yR}px`), tR.setProperty("--glowY", `${NW}px`), tR.setProperty("--glowRx", `${eW}px`), tR.setProperty("--glowRy", `${BW}px`), tR.transformOrigin = `${yR}px ${NW}px`, null === (CW = zR.animation) || void 0 === CW || CW.cancel();
        const TW = zR.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: zR.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * zR.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * zR.level
        });
        zR.animation = TW;
        const gR = zR;
        TW.onfinish = () => {
          gR.animation === TW && (gR.element.remove(), cR(this.flashes, gR))
        }
      }
      clearHits() {
        for (const wW of this.arcs) {
          var WW, RW;
          null === (WW = wW.fade) || void 0 === WW || WW.cancel(), null === (RW = wW.pop) || void 0 === RW || RW.cancel(), wW.element.remove()
        }
        this.arcs.length = 0;
        for (const wW of this.flashes) {
          var MW;
          null === (MW = wW.animation) || void 0 === MW || MW.cancel(), wW.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function QW(WW, RW) {
      return Math.abs(Math.atan2(Math.sin(WW - RW), Math.cos(WW - RW)))
    }

    function rR(WW) {
      return Math.max(0, Math.min(1, WW))
    }

    function cR(WW, RW) {
      const MW = WW.indexOf(RW); - 1 !== MW && WW.splice(MW, 1)
    }
    var XW = MW(897),
      jR = MW.n(XW),
      kR = MW(34827),
      aR = MW(35111),
      sW = MW(1027),
      dW = MW(1253);
    const pW = "frontlineHudChanged",
      hW = "frontlineScoreboardChanged";
    class UW {
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
      jC(WW) {
        this.wire = WW, NW.k.Sz(pW, WW, !0)
      }
      receiveScoreboard(WW) {
        let RW = "scoreboard" === WW[0] ? performance.now() + WW[5] : 0;
        const MW = this.scoreboard.endsAt;
        0 !== RW && 0 !== MW && Math.abs(RW - MW) < 1e3 && (RW = MW), this.scoreboard = {
          wire: WW,
          endsAt: RW
        }, NW.k.Sz(hW, this.scoreboard, !0)
      }
    }
    var EW = MW(940);
    const VW = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function mR(WW) {
      const [RW, MW] = (0, CW.useState)((() => (WW - performance.now()) / 1e3));
      return (0, CW.useEffect)((() => {
        if (0 === WW) return;
        const RW = () => {
          MW((WW - performance.now()) / 1e3)
        };
        RW();
        const wW = window.setInterval(RW, 250);
        return () => {
          window.clearInterval(wW)
        }
      }), [WW]), RW
    }

    function xR(WW) {
      let {
        className: RW,
        point: MW
      } = WW;
      const [wW, CW, zR, AW, bR, yR] = MW;
      return (0, EW.jsxs)("div", {
        className: jR()(RW, `Owner-${CW||"None"}`, `Leader-${AW||"None"}`, {
          Contested: bR,
          Here: yR
        }),
        children: [(0, EW.jsx)("span", {
          className: "FrontlinePointLetter",
          children: wW
        }), (0, EW.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${zR}%`
          }
        })]
      })
    }
    const vR = (0, CW.memo)((function(WW) {
        let {
          points: RW,
          markers: MW
        } = WW;
        const {
          t: wW
        } = (0, sW.C)();
        return RW ? (0, EW.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: RW.map((WW => {
            const [RW, , , , , , , CW] = WW;
            return (0, EW.jsxs)("div", {
              ref: MW.bindMarker(RW),
              className: "FrontlinePointMarker",
              children: [(0, EW.jsx)(xR, {
                className: "FrontlinePointMarkerTile",
                point: WW
              }), (0, EW.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [CW && (0, EW.jsx)("span", {
                  className: jR()("FrontlinePointMarkerHomeTurf", `Team-${CW}`),
                  children: wW("frontlineHud:homeTurf", {
                    team: wW(VW[CW])
                  })
                }), (0, EW.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, RW)
          }))
        }) : null
      })),
      KW = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      uW = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function OW(WW) {
      let {
        hud: RW,
        crosshair: MW,
        damage: wW,
        markers: CW
      } = WW;
      const zR = (0, dW.i)(pW, RW.getWire()),
        AW = (0, dW.i)(hW, RW.getScoreboard());
      return (0, EW.jsxs)(EW.Fragment, {
        children: [(0, EW.jsx)(nW, {
          damage: wW
        }), (0, EW.jsx)(vR, {
          points: "scoreboard" === AW.wire[0] ? AW.wire[6] : null,
          markers: CW
        }), (0, EW.jsx)(LW, {
          view: AW
        }), (0, EW.jsx)("div", {
          className: "FrontlineReticle",
          ref: MW.bindElement
        }), (0, EW.jsx)(kR.g, {
          children: (0, EW.jsx)(GW, {
            wire: zR
          })
        })]
      })
    }
    const nW = (0, CW.memo)((function(WW) {
        let {
          damage: RW
        } = WW;
        return (0, EW.jsxs)("div", {
          className: "FrontlineDamage",
          ref: RW.bindElement,
          children: [(0, EW.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, EW.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, EW.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      GW = (0, CW.memo)((function(WW) {
        let {
          wire: RW
        } = WW;
        const {
          t: MW
        } = (0, sW.C)();
        if ("capture" === RW[0]) {
          const [, WW, wW, CW, zR, AW, bR] = RW, yR = Math.round(CW / 100 * 24);
          return (0, EW.jsxs)("div", {
            className: jR()("FrontlinePlate", `Status-${wW}`, `Leader-${zR||"None"}`),
            children: [(0, EW.jsx)(SW, {}), (0, EW.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, EW.jsx)("span", {
                className: "FrontlineObjective",
                children: WW
              }), (0, EW.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, EW.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: MW("frontlineHud:objective", {
                    point: WW,
                    friendly: AW,
                    enemy: bR
                  })
                }), (0, EW.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: MW(KW[wW])
                })]
              }), (0, EW.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(CW).padStart(3, "0"), (0, EW.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, EW.jsx)(DW, {
              segments: 24,
              lit: yR
            })]
          })
        }
        if ("alert" === RW[0]) {
          const [, WW, wW, CW] = RW;
          return (0, EW.jsxs)("div", {
            className: jR()("FrontlinePlate", "FrontlineAlert", `Tone-${CW}`),
            children: [(0, EW.jsx)(SW, {}), (0, EW.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: MW(uW[WW])
            }), (0, EW.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: wW
            })]
          })
        }
        return null
      })),
      LW = (0, CW.memo)((function(WW) {
        let {
          view: RW
        } = WW;
        const {
          t: MW
        } = (0, sW.C)(), wW = (0, CW.useRef)(null), zR = function(WW, RW) {
          const [MW, wW] = (0, CW.useState)(!1);
          return (0, CW.useLayoutEffect)((() => {
            const RW = WW.current;
            if (!RW) return;
            const MW = document.querySelector(`.${aR.b}`),
              CW = document.querySelector(`.${aR.e}`),
              zR = () => {
                var WW;
                const zR = RW.querySelector(".FrontlineTeamTrack"),
                  AW = (0, yR.getRemInPx)(),
                  bR = RW.getBoundingClientRect().width - 2 * (null !== (WW = null === zR || void 0 === zR ? void 0 : zR.getBoundingClientRect().width) && void 0 !== WW ? WW : 0),
                  NW = window.innerWidth / 2,
                  eW = MW ? MW.getBoundingClientRect().right : 0,
                  BW = CW ? CW.getBoundingClientRect().left : window.innerWidth,
                  tR = Math.min(NW - eW, BW - NW) - ZW - bR / 2,
                  TW = tR < 6 * AW,
                  gR = TW ? (window.innerWidth - bR) / 2 - ZW : tR;
                RW.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(gR,14*AW)))}px`), wW(TW)
              };
            zR();
            const AW = new ResizeObserver(zR);
            for (const WW of [RW, MW, CW]) WW && AW.observe(WW);
            return window.addEventListener("resize", zR), () => {
              AW.disconnect(), window.removeEventListener("resize", zR)
            }
          }), [WW, RW]), MW
        }(wW, "scoreboard" === RW.wire[0]);
        if ("scoreboard" !== RW.wire[0]) return null;
        const [, AW, bR, NW, eW, , BW] = RW.wire, tR = "Red" === AW ? "Blue" : "Red";
        return (0, EW.jsxs)("div", {
          className: jR()("FrontlineScoreboardContainer", {
            Below: zR
          }),
          children: [(0, EW.jsxs)("div", {
            ref: wW,
            className: "FrontlineScoreboard",
            children: [(0, EW.jsx)(SW, {}), (0, EW.jsx)(HW, {
              team: AW,
              tickets: bR,
              goal: eW,
              side: "Friendly"
            }), (0, EW.jsx)("div", {
              className: "FrontlinePoints",
              children: BW.map((WW => (0, EW.jsx)(xR, {
                className: "FrontlinePoint",
                point: WW
              }, WW[0])))
            }), (0, EW.jsx)(HW, {
              team: tR,
              tickets: NW,
              goal: eW,
              side: "Enemy"
            })]
          }), (0, EW.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, EW.jsx)(qR, {
              endsAt: RW.endsAt
            }), (0, EW.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: MW("frontlineHud:ticketGoal", {
                goal: eW
              })
            })]
          })]
        })
      }));

    function HW(WW) {
      let {
        team: RW,
        tickets: MW,
        goal: wW,
        side: CW
      } = WW;
      const {
        t: zR
      } = (0, sW.C)(), AW = String(MW).padStart(3, "0"), bR = AW.search(/[1-9]/), yR = -1 === bR ? AW : AW.slice(0, bR), NW = Math.min(20, Math.floor(MW / wW * 20));
      return (0, EW.jsxs)("div", {
        className: jR()("FrontlineTeamScore", CW, `Team-${RW}`),
        children: [(0, EW.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, EW.jsx)("span", {
            className: "Lead",
            children: yR
          }), -1 !== bR && AW.slice(bR)]
        }), (0, EW.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, EW.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: zR(VW[RW])
          }), (0, EW.jsx)(DW, {
            segments: 20,
            lit: NW
          })]
        })]
      })
    }

    function DW(WW) {
      let {
        segments: RW,
        lit: MW
      } = WW;
      return (0, EW.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: RW
        }, ((WW, RW) => (0, EW.jsx)("i", {
          className: jR()({
            Lit: RW < MW
          })
        }, RW)))
      })
    }

    function qR(WW) {
      let {
        endsAt: RW
      } = WW;
      const MW = Math.max(0, Math.ceil(mR(RW)));
      return (0, EW.jsxs)("div", {
        className: jR()("FrontlineClock", {
          Urgent: MW <= 60
        }),
        children: [Math.floor(MW / 60), ":", String(MW % 60).padStart(2, "0")]
      })
    }
    const ZW = 8;

    function SW() {
      return (0, EW.jsxs)(EW.Fragment, {
        children: [(0, EW.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, EW.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var WR = MW(34937),
      RR = MW(1080),
      MR = MW(36578);
    class wR {
      constructor(WW) {
        var RW;
        this.hud = WW, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Qw = !1, this.FQ = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.FQ), null === (RW = window.visualViewport) || void 0 === RW || RW.addEventListener("resize", this.FQ)
      }
      bindMarker(WW) {
        let RW = this.refs.get(WW);
        return RW || (RW = RW => {
          var MW;
          null === (MW = this.markers.get(WW)) || void 0 === MW || MW.stopObserving(), this.markers.delete(WW), RW && !this.Qw && this.markers.set(WW, this.mount(RW))
        }, this.refs.set(WW, RW)), RW
      }
      frame(WW, RW) {
        this.render = WW;
        const MW = this.hud.getScoreboard().wire;
        if ("scoreboard" === MW[0] && 0 !== this.markers.size)
          for (const [wW, , , , , , CW] of MW[6]) {
            const WW = this.markers.get(wW);
            WW && CW && (WW.target ??= [0, 0, 0], WW.target[0] = CW[0], WW.target[1] = CW[1] + 2.5, WW.target[2] = CW[2], this.place(WW), this.uZ(WW, RW && Math.hypot(CW[0] - RW[0], CW[1] - RW[1], CW[2] - RW[2])))
          }
      }
      dispose() {
        var WW;
        this.Qw = !0, window.removeEventListener("resize", this.FQ), null === (WW = window.visualViewport) || void 0 === WW || WW.removeEventListener("resize", this.FQ);
        for (const RW of this.markers.values()) RW.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(WW) {
        const {
          render: RW,
          viewport: MW
        } = this;
        if (!RW || !WW.target) return;
        const wW = (50 - RW.screenBandPct.y) / 100 * MW.height,
          CW = {
            x: WW.halfSize.width + 8,
            top: WW.halfSize.height + 8,
            bottom: WW.halfSize.height + WW.labelsBelow + wW
          },
          zR = RW.projectWorldPosToViewport(WW.target),
          AW = null !== zR && void 0 !== zR ? zR : RW.projectWorldPosToScreenPos(WW.target),
          bR = (0, MR.d)({
            x: AW.x,
            y: AW.y,
            text: zR
          }, CW, MW);
        WW.root.style.translate = `${bR.x}vw ${bR.y}vh`
      }
      uZ(WW, RW) {
        if (null === RW) return void(null !== WW.metres && (WW.metres = null, WW.distance.textContent = ""));
        const MW = Date.now();
        (null === WW.metres || (0, WR.e)(RW, WW.metres, WW.metresShownAt)) && (WW.metres = Math.round(RW), WW.metresShownAt = MW, WW.distance.textContent = (0, sW.w)(RR.d.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(WW.metres)
        }))
      }
      mount(WW) {
        const RW = {
            root: WW,
            distance: WW.querySelector(".FrontlinePointMarkerDistance"),
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
          MW = WW.querySelector(".FrontlinePointMarkerLabels"),
          wW = new ResizeObserver((() => {
            RW.halfSize = {
              width: Math.max(WW.offsetWidth, MW.offsetWidth) / 2,
              height: WW.offsetHeight / 2
            }, RW.labelsBelow = MW.offsetTop + MW.offsetHeight - WW.offsetHeight, this.place(RW)
          }));
        return wW.observe(WW, {
          box: "border-box"
        }), wW.observe(MW, {
          box: "border-box"
        }), RW.stopObserving = () => {
          wW.disconnect()
        }, RW
      }
    }
    var CR = MW(5432),
      zM = MW(2036);
    const AR = "frontlineRoundEndChanged";
    class bM {
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
      jC(WW) {
        const RW = "roundEnd" === WW[0] ? performance.now() + WW[5] : 0;
        this.view = {
          wire: WW,
          key: this.view.key + 1,
          endsAt: RW
        }, NW.k.Sz(AR, this.view, !0)
      }
    }
    const yM = (0, CW.lazy)((() => (0, zM.b)(MW.e(196).then((() => MW(39215))), (WW => WW.FrontlineMvpLineup)))),
      NR = [4800, 4e3, 3200],
      eR = [1, 0, 2],
      BR = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      tM = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function TR(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, dW.i)(AR, RW.getView()),
        wW = mR(MW.endsAt);
      return "roundEnd" !== MW.wire[0] || 1e3 * wW < -2e3 ? null : (0, EW.jsx)(gM, {
        wire: MW.wire,
        secondsLeft: Math.max(0, Math.ceil(wW))
      }, MW.key)
    }
    const gM = (0, CW.memo)((function(WW) {
      let {
        wire: RW,
        secondsLeft: MW
      } = WW;
      const {
        t: zR
      } = (0, sW.C)(), [, AW, bR, yR, NW, , eW, BW] = RW, tR = (0, CW.useMemo)((() => eR.filter((WW => WW < BW.length))), [BW]), TW = (0, CW.useMemo)((() => tR.map((WW => {
        const [, , , , , RW, MW] = BW[WW];
        return {
          cosmetics: wW.map(((WW, MW) => [WW, RW[MW]])),
          size: 0 === WW ? 1.15 : .85,
          heldGun: {
            name: MW,
            aimed: 0 === WW
          },
          showAfterMs: NR[WW]
        }
      }))), [BW, tR]);
      return (0, EW.jsxs)("div", {
        className: jR()("FrontlineRoundEnd", `Result-${AW}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, EW.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, EW.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, EW.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, EW.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, EW.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (gR = zR(BR[AW]), /\p{Script=Arabic}/u.test(gR) ? [gR] : (0, CR.c)(gR)).map(((WW, RW) => (0, EW.jsx)("span", {
              style: {
                "--letter": RW
              },
              children: WW
            }, RW)))]
          }), (0, EW.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [bR && "victory" === AW && (0, EW.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: zR("frontlineRoundEnd:comeback")
            }), (0, EW.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, EW.jsx)("b", {
                className: "Friendly",
                children: yR
              }), " \u2013 ", (0, EW.jsx)("b", {
                className: "Enemy",
                children: NW
              })]
            })]
          })]
        }), tR.length > 0 && (0, EW.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": tR.length
          },
          children: [(0, EW.jsx)(CW.Suspense, {
            fallback: null,
            children: (0, EW.jsx)(yM, {
              className: "FrontlineRoundEndLineup",
              players: TW
            })
          }), tR.map((WW => (0, EW.jsx)(iM, {
            mvp: BW[WW],
            place: WW
          }, WW)))]
        }), (0, EW.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: zR("frontlineRoundEnd:nextFront", {
            map: eW,
            seconds: String(MW)
          })
        })]
      });
      var gR
    }));

    function iM(WW) {
      let {
        mvp: RW,
        place: MW
      } = WW;
      const {
        t: wW
      } = (0, sW.C)(), [CW, zR, AW, bR, yR] = RW, [NW, eW] = wW(function(WW, RW) {
        return 1 === RW && "damage" !== WW ? `frontlineRoundEnd:${WW}One` : `frontlineRoundEnd:${WW}`
      }(AW, bR), {
        name: "\0",
        count: bR.toLocaleString()
      }).split("\0");
      return (0, EW.jsxs)("div", {
        className: jR()("FrontlineMvpCard", `Place-${MW+1}`, `Team-${zR}`),
        style: {
          "--revealMs": `${NR[MW]}ms`
        },
        children: [(0, EW.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, EW.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, EW.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: wW(tM[MW])
        }), (0, EW.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [NW, (0, EW.jsx)("span", {
            className: "FrontlineMvpName",
            children: CW
          }), eW]
        }), (0, EW.jsx)("div", {
          className: "FrontlineMvpKit",
          children: yR
        })]
      })
    }
    const YR = function(WW, RW, MW, wW) {
      let {
        localPlayerId: AW
      } = wW;
      const bR = new UW,
        yR = new bM;
      let NW = null,
        eW = null,
        BW = null,
        tR = null,
        TW = null,
        gR = [!1, !1];
      const iR = () => {
        var WW, RW;
        const [MW, wW] = gR;
        null === (WW = eW) || void 0 === WW || WW.kMW(!MW), null === (RW = BW) || void 0 === RW || RW.kMW(!wW)
      };
      return {
        onCreate: WW => {
          NW = WW, eW = new IW(WW, AW), BW = new fW(WW, AW), tR = new wR(bR), iR(), TW = (0, zR.l)((0, CW.createElement)(CW.Fragment, null, (0, CW.createElement)(OW, {
            hud: bR,
            crosshair: eW,
            damage: BW,
            markers: tR
          }), (0, CW.createElement)(TR, {
            controller: yR
          })))
        },
        onClose: () => {
          var WW, RW, MW, wW;
          null === (WW = TW) || void 0 === WW || WW(), null === (RW = eW) || void 0 === RW || RW.dispose(), eW = null, null === (MW = BW) || void 0 === MW || MW.dispose(), BW = null, null === (wW = tR) || void 0 === wW || wW.dispose(), tR = null, NW = null
        },
        onAfterRender: (WW, RW) => {
          var MW, wW, CW, zR;
          null === (MW = eW) || void 0 === MW || MW.frame(WW, RW.tanHalfFovY), null === (wW = BW) || void 0 === wW || wW.frame(RW.cameraHeading), null === (CW = tR) || void 0 === CW || CW.frame(RW, null !== (zR = NW) && void 0 !== zR && zR.checkValid(AW) ? NW.yX(AW) : null)
        },
        onReceivedMessageFromServer: (WW, RW) => {
          "frontlineHud" === WW ? bR.jC(RW) : "frontlineScoreboard" === WW ? bR.receiveScoreboard(RW) : "frontlineRoundEnd" === WW ? yR.jC(RW) : "frontlinePrefs" === WW && (gR = RW, iR())
        }
      }
    }
  },
  5432: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    const wW = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function CW(WW) {
      return null === wW ? Array.from(WW) : Array.from(wW.segment(WW), (WW => {
        let {
          segment: RW
        } = WW;
        return RW
      }))
    }
  },
  35221: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = {
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