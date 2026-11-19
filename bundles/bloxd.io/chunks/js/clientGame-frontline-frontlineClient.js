export const id = 17;
export const ids = [17];
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
  36130: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => RY,
      j: () => OY,
      l: () => gY
    });
    var FY = DY(61),
      AY = DY(1143);
    const IY = 8,
      RY = "InGameHeaderContainer",
      OY = "TopRightElements";

    function gY(YY) {
      const [rY] = (0, AY.c)(), [DY, gY] = (0, FY.useState)(!1);
      return (0, FY.useLayoutEffect)((() => {
        if (!YY) return;
        const rY = document.querySelector(`.${RY}`),
          DY = document.querySelector(`.${OY}`),
          FY = () => {
            const FY = YY.getBoundingClientRect(),
              AY = rY ? rY.getBoundingClientRect().right : 0,
              RY = DY ? DY.getBoundingClientRect().left : window.innerWidth,
              OY = FY.left < AY + IY,
              aY = FY.right > RY - IY;
            gY(OY || aY)
          };
        FY();
        const AY = new ResizeObserver(FY);
        return AY.observe(YY), rY && AY.observe(rY), DY && AY.observe(DY), () => {
          AY.disconnect()
        }
      }), [YY, rY]), DY
    }
  },
  36123: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    const FY = [{
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

    function AY(YY, rY, DY) {
      const AY = Math.abs(YY - rY),
        IY = Date.now() - DY;
      for (const RY of FY)
        if (YY < RY.maxDist) return AY >= RY.hardUpdateDist || IY > RY.timeBetweenSoftChecks && AY >= RY.softUpdateDist;
      return !1
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
  37914: (YY, rY, DY) => {
    function FY(YY, rY, DY) {
      var FY;
      const {
        width: AY,
        height: IY
      } = DY, RY = null !== (FY = YY.text) && void 0 !== FY ? FY : YY, OY = (RY.x / 100 - .5) * AY, gY = (RY.y / 100 - .5) * IY, aY = AY / 2 - rY.x;
      if (null !== YY.text && Math.abs(OY) <= aY && gY >= rY.top - IY / 2 && gY <= IY / 2 - rY.bottom) return {
        x: RY.x,
        y: RY.y
      };
      const vY = Math.min(0 === OY ? 1 / 0 : aY / Math.abs(OY), gY > 0 ? (IY / 2 - rY.bottom) / gY : gY < 0 ? (rY.top - IY / 2) / gY : 1 / 0);
      return !Number.isFinite(vY) || vY < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + OY * vY / AY * 100,
        y: 50 + gY * vY / IY * 100
      }
    }
    DY.d(rY, {
      b: () => FY
    })
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
  38743: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => or
    });
    const FY = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var AY = DY(61),
      IY = DY(36032),
      RY = DY(36400),
      OY = DY(36048),
      gY = DY(1699),
      aY = DY(25);
    const vY = {
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
    const uY = 32;

    function sY(YY, rY, DY, FY) {
      return {
        tag: "line",
        attrs: {
          x1: YY,
          y1: rY,
          x2: DY,
          y2: FY,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function iY(YY) {
      return {
        tag: "circle",
        attrs: {
          cx: uY,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uY,
          r: YY,
          class: "Fill"
        }
      }
    }

    function yY(YY, rY) {
      return {
        tag: "path",
        attrs: {
          d: YY,
          "stroke-width": rY
        }
      }
    }

    function QY(YY, rY, DY) {
      return {
        tag: "circle",
        attrs: {
          cx: uY,
          cy: uY,
          r: YY,
          "stroke-width": rY,
          class: DY
        }
      }
    }

    function oY(YY, rY, DY) {
      return {
        tag: "text",
        attrs: {
          x: YY,
          y: rY,
          class: "Fill Label"
        },
        text: DY
      }
    }
    const WY = {
      pistol: YY => [sY(uY, uY - YY - 5, uY, uY - YY), sY(uY - YY - 5, uY, uY - YY, uY), sY(uY + YY, uY, uY + YY + 5, uY), iY(1.4)],
      rifle: YY => [sY(uY, uY - YY - 8, uY, uY - YY), sY(uY, uY + YY, uY, uY + YY + 8), sY(uY - YY - 8, uY, uY - YY, uY), sY(uY + YY, uY, uY + YY + 8, uY), iY(1)],
      smg: YY => {
        const rY = Math.PI / 2,
          DY = [];
        for (let RY = 0; RY < 4; RY++) DY.push((AY = RY * rY + .35, IY = (RY + 1) * rY - .35, yY(`M${uY+(FY=6+YY)*Math.cos(AY)} ${uY+FY*Math.sin(AY)} A${FY} ${FY} 0 0 1 ${uY+FY*Math.cos(IY)} ${uY+FY*Math.sin(IY)}`, 2)));
        var FY, AY, IY;
        return [...DY, iY(1.4)]
      },
      shotgun: YY => [QY(YY, 3, "Ring Outline"), QY(YY, 1.5, "Ring")],
      marksman: YY => [yY(`M${26-YY/2} ${39+YY/2} L32 33 L${38+YY/2} ${39+YY/2}`, 2), sY(14 - YY, uY, 24 - YY, uY, 1.5), sY(40 + YY, uY, 50 + YY, uY, 1.5), sY(14 - YY, 30, 14 - YY, 34, 1.5), sY(50 + YY, 30, 50 + YY, 34, 1.5)],
      machineGun: YY => {
        const rY = 10 + YY,
          DY = [];
        for (const [FY, AY] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) DY.push(yY(`M${uY+FY*rY} ${uY+AY*(rY-5)} L${uY+FY*rY} ${uY+AY*rY} L${uY+FY*(rY-5)} ${uY+AY*rY}`, 2));
        return [...DY, sY(uY, 28, uY, 36, 1.5), sY(28, uY, 36, uY, 1.5)]
      },
      launcher: () => [sY(14, 30, 50, 30, 1.5), sY(uY, 24, uY, 52, 1.5), sY(28, 38, 36, 38, 1.5), sY(29, 44, 35, 44, 1.5), sY(30, 50, 34, 50, 1.5), oY(38, 40, "100"), oY(37, 46, "200"), iY(1.4, 30)],
      melee: () => [yY("M32 26 L38 32 L32 38 L26 32 Z", 1.5), iY(1.2)],
      throwable: () => [iY(1.6)]
    };

    function EY(YY) {
      let {
        tag: rY,
        attrs: DY,
        text: FY
      } = YY, AY = `<${rY}`;
      for (const [IY, RY] of Object.entries(DY)) AY += ` ${IY}="${RY}"`;
      return void 0 === FY ? `${AY}/>` : `${AY}>${FY}</${rY}>`
    }
    class mY {
      constructor(YY, rY) {
        this.api = YY, this.localPlayerId = rY, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = YY => {
          this.element = YY, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, YY && !this.enabled && (YY.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, gY.getRemInPx)()))
        }, this.tokens = [aY.g.subscribe("aimingOverlay", (YY => {
          this.sniperOverlay = "sniper" === YY
        })), aY.g.subscribe("mouseState", (YY => {
          let {
            isDown: rY
          } = YY;
          this.mouseDown = rY
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      mV(YY) {
        YY !== this.enabled && (this.enabled = YY, this.drawnVisible = null, YY || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(YY, rY) {
        var DY, FY;
        if (!this.enabled) return;
        const {
          api: AY
        } = this, IY = AY.isAlive(this.localPlayerId) && null !== (DY = null === (FY = AY.rrY(this.localPlayerId)) || void 0 === FY ? void 0 : FY.name) && void 0 !== DY ? DY : null, RY = (OY = IY) && vY[OY] || null;
        var OY;
        if (this.setOwnsCrosshair(null !== RY), !this.element) return;
        const gY = AY.getHeldGunInaccuracy(),
          aY = null !== gY,
          uY = null !== RY && !this.sniperOverlay && AY.isCrosshairShown();
        if (uY !== this.drawnVisible && (this.drawnVisible = uY, this.element.style.display = uY ? "block" : "none"), !uY) return;
        const sY = aY ? function(YY) {
            return "launcher" === YY || "melee" === YY || "throwable" === YY ? "none" : "shotgun" === YY ? "cone" : "offset"
          }(RY) : "none",
          iY = null !== gY && void 0 !== gY ? gY : 0;
        "cone" === sY ? this.drawCone(RY, this.coneRadiusVh(iY, rY) * this.gapPerVh, YY) : (this.coneDrawn = !1, this.draw(RY, "none" === sY ? 2 : this.offsetGap(iY)));
        const yY = !aY && this.mouseDown;
        yY !== this.drawnPressed && (this.drawnPressed = yY, this.element.classList.toggle("Pressed", yY))
      }
      dispose() {
        for (const YY of this.tokens) aY.g.unsubscribe(YY);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(YY, rY) {
        var DY, FY;
        YY !== this.drawnFamily ? (this.drawnFamily = YY, this.drawnGap = rY, this.element.innerHTML = function(YY, rY) {
          return `<svg viewBox="0 0 64 64">${WY[YY](rY).map(EY).join("")}</svg>`
        }(YY, rY), this.shapes = Array.from(null !== (DY = null === (FY = this.element.firstElementChild) || void 0 === FY ? void 0 : FY.children) && void 0 !== DY ? DY : [])) : rY !== this.drawnGap && (this.drawnGap = rY, function(YY, rY, DY) {
          const FY = WY[rY](DY);
          for (let AY = 0; AY < FY.length; AY++)
            for (const [rY, DY] of Object.entries(FY[AY].attrs)) {
              const FY = String(DY);
              YY[AY].getAttribute(rY) !== FY && YY[AY].setAttribute(rY, FY)
            }
        }(this.shapes, YY, rY))
      }
      drawCone(YY, rY, DY) {
        YY === this.drawnFamily && this.coneDrawn ? this.shownRadius += (rY - this.shownRadius) * (1 - Math.exp(-DY / 80)) : this.shownRadius = rY, this.coneDrawn = !0, this.draw(YY, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(YY, rY) {
        if (!(rY > 0)) return 1;
        const DY = YY * RY.i / 2;
        return Math.max(50 * Math.tan(DY) / rY, 1)
      }
      offsetGap(YY) {
        const rY = 2 + ((0, OY.g)(YY) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * rY) / 2)
      }
      setOwnsCrosshair(YY) {
        YY !== this.ownsCrosshair && (this.ownsCrosshair = YY, document.body.classList.toggle("FrontlineCustomCrosshair", YY))
      }
    }
    const VY = "FrontlineCustomDamage",
      SY = .45,
      lY = .2;
    class TY {
      constructor(YY, rY) {
        this.api = YY, this.localPlayerId = rY, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.EY = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = YY => {
          var rY, DY;
          this.clearHits(), this.root = YY, this.lowLayer = null !== (rY = null === YY || void 0 === YY ? void 0 : YY.querySelector(".FrontlineDamageLow")) && void 0 !== rY ? rY : null, this.arcLayer = null !== (DY = null === YY || void 0 === YY ? void 0 : YY.querySelector(".FrontlineDamageArcs")) && void 0 !== DY ? DY : null, this.showRoot(), this.drawLow()
        }, this.token = aY.g.subscribe("damagedByOtherPlayer", (YY => {
          let {
            direction: rY,
            oY: DY
          } = YY;
          this.onHurt(rY, DY)
        })), this.syncHealth(), document.body.classList.add(VY)
      }
      mV(YY) {
        YY !== this.enabled && (this.enabled = YY, document.body.classList.toggle(VY, YY), YY || this.clearHits(), this.showRoot())
      }
      frame(YY) {
        this.syncHealth(), this.cameraHeading = YY;
        for (const rY of this.arcs) this.drawArcAngle(rY)
      }
      dispose() {
        aY.g.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(VY)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const YY = this.api.getClientOption(this.localPlayerId, "_health"),
          rY = this.api.getClientOption(this.localPlayerId, "_shield"),
          DY = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(YY, this.readHealth) && Object.is(rY, this.readShield) && Object.is(DY, this.readMaxHealth)) return;
        if (this.readHealth = YY, this.readShield = rY, this.readMaxHealth = DY, null === YY || void 0 === YY || !DY) return this.lastHealthPool = null, this.maxHealth = null, this.EY = 1, this.dead = !1, void this.drawLow();
        const FY = YY + (null !== rY && void 0 !== rY ? rY : 0);
        if (null !== this.lastHealthPool && FY < this.lastHealthPool) {
          const YY = performance.now(),
            rY = (this.lastHealthPool - FY) / DY;
          this.lastDrop = YY - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + rY,
            at: this.lastDrop.at
          } : {
            frac: rY,
            at: YY
          }
        }
        this.dead = YY <= 0, this.dead && this.clearHits(), this.lastHealthPool = FY, this.maxHealth = DY, this.EY = YY > 0 ? YY / DY : 1, this.drawLow()
      }
      onHurt(YY, rY) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const DY = Math.min(1, this.takeDamageFrac(rY) / .3);
        null !== YY && this.showArc(YY, DY), this.flashEdge(null === YY ? null : YY - this.cameraHeading, .4 + .6 * DY)
      }
      takeDamageFrac(YY) {
        if (void 0 !== YY && this.maxHealth) return YY / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: rY
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, rY
      }
      drawLow() {
        if (!this.lowLayer) return;
        const YY = NY((SY - this.EY) / .25),
          rY = NY((lY - this.EY) / .15000000000000002),
          DY = this.EY < SY;
        this.lowLayer.classList.toggle("Active", DY), this.lowLayer.classList.toggle("Critical", this.EY < lY), this.lowLayer.style.opacity = String(DY ? .55 + .3 * YY + .15 * rY : 0)
      }
      showArc(YY, rY) {
        var DY, FY;
        if (!this.arcLayer) return;
        let AY = this.arcs.find((rY => eY(rY.direction, YY) < .6));
        if (!AY) {
          const rY = document.createElement("div");
          rY.className = "FrontlineDamageArc", rY.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(rY), AY = {
            element: rY,
            direction: YY,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(AY)
        }
        AY.direction = YY, this.drawArcAngle(AY);
        const IY = AY.fade ? Number(getComputedStyle(AY.element).opacity) : 0;
        null === (DY = AY.fade) || void 0 === DY || DY.cancel(), null === (FY = AY.pop) || void 0 === FY || FY.cancel(), AY.element.style.opacity = "1";
        const RY = AY.element.animate([{
          opacity: IY
        }, {
          opacity: 1
        }], 144);
        AY.fade = RY, AY.pop = AY.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * rY
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const OY = AY;
        RY.onfinish = () => {
          if (OY.fade !== RY) return;
          const YY = OY.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          YY.startTime = RY.startTime, OY.fade = YY, YY.onfinish = () => {
            OY.fade === YY && (OY.element.remove(), BY(this.arcs, OY))
          }
        }
      }
      drawArcAngle(YY) {
        const rY = YY.direction - this.cameraHeading;
        (null === YY.drawnAngle || Math.abs(rY - YY.drawnAngle) > .005) && (YY.drawnAngle = rY, YY.element.style.rotate = `${rY}rad`)
      }
      flashEdge(YY, rY) {
        var DY, FY, AY;
        if (!this.root) return;
        let IY = this.flashes.find((rY => null === rY.angle || null === YY ? rY.angle === YY : eY(rY.angle, YY) < .5));
        if (!IY) {
          const rY = document.createElement("div");
          rY.className = "FrontlineDamageFlash";
          const DY = rY.appendChild(document.createElement("div"));
          DY.className = "FrontlineDamageFlashGlow", this.root.insertBefore(rY, this.arcLayer), IY = {
            element: rY,
            glow: DY,
            angle: YY,
            level: 0,
            animation: null
          }, this.flashes.push(IY)
        }
        const RY = null === (DY = IY.animation) || void 0 === DY || null === (FY = DY.effect) || void 0 === FY ? void 0 : FY.getComputedTiming().progress,
          OY = null === RY || void 0 === RY ? 0 : IY.level * (1 - RY);
        IY.level = Math.min(1, Math.max(rY, OY + .6 * rY)), IY.angle = YY;
        const {
          x: gY,
          y: aY,
          rx: vY,
          ry: uY
        } = function(YY, rY) {
          const DY = window.innerWidth,
            FY = window.innerHeight;
          if (null === YY) return {
            x: DY / 2,
            y: FY / 2,
            rx: 0,
            ry: 0
          };
          const AY = Math.sin(YY),
            IY = -Math.cos(YY),
            RY = DY / 2 / Math.max(1e-6, Math.abs(AY)),
            OY = FY / 2 / Math.max(1e-6, Math.abs(IY)),
            gY = Math.min(RY, OY),
            aY = Math.round(DY / 2 + AY * gY),
            vY = Math.round(FY / 2 + IY * gY),
            uY = FY / 100 * (.85 + .25 * rY),
            sY = RY <= OY,
            iY = Math.round((sY ? 30 : 74) * uY),
            yY = Math.round((sY ? 58 : 26) * uY);
          return {
            x: aY,
            y: vY,
            rx: iY,
            ry: yY
          }
        }(YY, IY.level), {
          style: sY
        } = IY.glow;
        IY.glow.classList.toggle("Everywhere", null === YY), sY.setProperty("--glowX", `${gY}px`), sY.setProperty("--glowY", `${aY}px`), sY.setProperty("--glowRx", `${vY}px`), sY.setProperty("--glowRy", `${uY}px`), IY.element.style.transformOrigin = `${gY}px ${aY}px`, null === (AY = IY.animation) || void 0 === AY || AY.cancel();
        const iY = IY.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: IY.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * IY.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * IY.level
        });
        IY.animation = iY;
        const yY = IY;
        iY.onfinish = () => {
          yY.animation === iY && (yY.element.remove(), BY(this.flashes, yY))
        }
      }
      clearHits() {
        for (const FY of this.arcs) {
          var YY, rY;
          null === (YY = FY.fade) || void 0 === YY || YY.cancel(), FY.fade = null, null === (rY = FY.pop) || void 0 === rY || rY.cancel(), FY.element.remove()
        }
        this.arcs.length = 0;
        for (const FY of this.flashes) {
          var DY;
          null === (DY = FY.animation) || void 0 === DY || DY.cancel(), FY.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function eY(YY, rY) {
      return Math.abs(Math.atan2(Math.sin(YY - rY), Math.cos(YY - rY)))
    }

    function NY(YY) {
      return Math.max(0, Math.min(1, YY))
    }

    function BY(YY, rY) {
      const DY = YY.indexOf(rY); - 1 !== DY && YY.splice(DY, 1)
    }
    var cY = DY(1092),
      KY = DY.n(cY),
      HY = DY(36025),
      zY = DY(36130),
      ZY = DY(1211),
      CY = DY(1430);
    const fY = "frontlineHudChanged",
      jY = "frontlineScoreboardChanged";
    class hY {
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
      Cy(YY) {
        this.wire = YY, aY.g.vo(fY, YY, !0)
      }
      receiveScoreboard(YY) {
        let rY = "scoreboard" === YY[0] ? performance.now() + YY[5] : 0;
        const DY = this.scoreboard.endsAt;
        0 !== rY && 0 !== DY && Math.abs(rY - DY) < 1e3 && (rY = DY), this.scoreboard = {
          wire: YY,
          endsAt: rY
        }, aY.g.vo(jY, this.scoreboard, !0)
      }
    }
    var dY = DY(1125);
    const JY = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function MY(YY) {
      const [rY, DY] = (0, AY.useState)((() => (YY - performance.now()) / 1e3));
      return (0, AY.useEffect)((() => {
        if (0 === YY) return;
        const rY = () => {
          DY((YY - performance.now()) / 1e3)
        };
        rY();
        const FY = window.setInterval(rY, 250);
        return () => {
          window.clearInterval(FY)
        }
      }), [YY]), rY
    }

    function wY(YY) {
      let {
        className: rY,
        point: DY
      } = YY;
      const [FY, AY, IY, RY, OY, gY] = DY;
      return (0, dY.jsxs)("div", {
        className: KY()(rY, `Owner-${AY||"None"}`, `Leader-${RY||"None"}`, {
          Contested: OY,
          Here: gY
        }),
        children: [(0, dY.jsx)("span", {
          className: "FrontlinePointLetter",
          children: FY
        }), (0, dY.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${IY}%`
          }
        })]
      })
    }
    const bY = (0, AY.memo)((function(YY) {
        let {
          points: rY,
          markers: DY
        } = YY;
        const {
          t: FY
        } = (0, ZY.C)();
        return rY ? (0, dY.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: rY.map((YY => {
            const [rY, , , , , , , AY] = YY;
            return (0, dY.jsxs)("div", {
              ref: DY.bindMarker(rY),
              className: "FrontlinePointMarker",
              children: [(0, dY.jsx)(wY, {
                className: "FrontlinePointMarkerTile",
                point: YY
              }), (0, dY.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [AY && (0, dY.jsx)("span", {
                  className: KY()("FrontlinePointMarkerHomeTurf", `Team-${AY}`),
                  children: FY("frontlineHud:homeTurf", {
                    team: FY(JY[AY])
                  })
                }), (0, dY.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, rY)
          }))
        }) : null
      })),
      XY = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      qY = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function pY(YY) {
      let {
        hud: rY,
        crosshair: DY,
        damage: FY,
        markers: AY
      } = YY;
      const IY = (0, CY.k)(fY, rY.getWire()),
        RY = (0, CY.k)(jY, rY.getScoreboard());
      return (0, dY.jsxs)(dY.Fragment, {
        children: [(0, dY.jsx)(kY, {
          damage: FY
        }), (0, dY.jsx)(bY, {
          points: "scoreboard" === RY.wire[0] ? RY.wire[6] : null,
          markers: AY
        }), (0, dY.jsx)(xY, {
          view: RY
        }), (0, dY.jsx)("div", {
          className: "FrontlineReticle",
          ref: DY.bindElement
        }), (0, dY.jsx)(HY.e, {
          children: (0, dY.jsx)(GY, {
            wire: IY
          })
        })]
      })
    }
    const kY = (0, AY.memo)((function(YY) {
        let {
          damage: rY
        } = YY;
        return (0, dY.jsxs)("div", {
          className: "FrontlineDamage",
          ref: rY.bindElement,
          children: [(0, dY.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, dY.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, dY.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      GY = (0, AY.memo)((function(YY) {
        let {
          wire: rY
        } = YY;
        const {
          t: DY
        } = (0, ZY.C)();
        if ("capture" === rY[0]) {
          const [, YY, FY, AY, IY, RY, OY] = rY, gY = Math.round(AY / 100 * 24);
          return (0, dY.jsxs)("div", {
            className: KY()("FrontlinePlate", `Status-${FY}`, `Leader-${IY||"None"}`),
            children: [(0, dY.jsx)(LY, {}), (0, dY.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, dY.jsx)("span", {
                className: "FrontlineObjective",
                children: YY
              }), (0, dY.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, dY.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: DY("frontlineHud:objective", {
                    point: YY,
                    friendly: RY,
                    enemy: OY
                  })
                }), (0, dY.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: DY(XY[FY])
                })]
              }), (0, dY.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(AY).padStart(3, "0"), (0, dY.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, dY.jsx)(PY, {
              segments: 24,
              lit: gY
            })]
          })
        }
        if ("alert" === rY[0]) {
          const [, YY, FY, AY] = rY;
          return (0, dY.jsxs)("div", {
            className: KY()("FrontlinePlate", "FrontlineAlert", `Tone-${AY}`),
            children: [(0, dY.jsx)(LY, {}), (0, dY.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: DY(qY[YY])
            }), (0, dY.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: FY
            })]
          })
        }
        return null
      })),
      xY = (0, AY.memo)((function(YY) {
        let {
          view: rY
        } = YY;
        const {
          t: DY
        } = (0, ZY.C)(), FY = (0, AY.useRef)(null), IY = function(YY, rY) {
          const [DY, FY] = (0, AY.useState)(!1);
          return (0, AY.useLayoutEffect)((() => {
            const rY = YY.current;
            if (!rY) return;
            const DY = document.querySelector(`.${zY.h}`),
              AY = document.querySelector(`.${zY.j}`),
              IY = () => {
                var YY;
                const IY = rY.querySelector(".FrontlineTeamTrack"),
                  RY = (0, gY.getRemInPx)(),
                  OY = rY.getBoundingClientRect().width - 2 * (null !== (YY = null === IY || void 0 === IY ? void 0 : IY.getBoundingClientRect().width) && void 0 !== YY ? YY : 0),
                  aY = window.innerWidth / 2,
                  vY = DY ? DY.getBoundingClientRect().right : 0,
                  uY = AY ? AY.getBoundingClientRect().left : window.innerWidth,
                  sY = Math.min(aY - vY, uY - aY) - zY.d - OY / 2,
                  iY = sY < 6 * RY,
                  yY = iY ? (window.innerWidth - OY) / 2 - zY.d : sY;
                rY.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(yY,14*RY)))}px`), FY(iY)
              };
            IY();
            const RY = new ResizeObserver(IY);
            for (const YY of [rY, DY, AY]) YY && RY.observe(YY);
            return window.addEventListener("resize", IY), () => {
              RY.disconnect(), window.removeEventListener("resize", IY)
            }
          }), [YY, rY]), DY
        }(FY, "scoreboard" === rY.wire[0]);
        if ("scoreboard" !== rY.wire[0]) return null;
        const [, RY, OY, aY, vY, , uY] = rY.wire, sY = "Red" === RY ? "Blue" : "Red";
        return (0, dY.jsxs)("div", {
          className: KY()("FrontlineScoreboardContainer", {
            Below: IY
          }),
          children: [(0, dY.jsxs)("div", {
            ref: FY,
            className: "FrontlineScoreboard",
            children: [(0, dY.jsx)(LY, {}), (0, dY.jsx)(nY, {
              team: RY,
              tickets: OY,
              goal: vY,
              side: "Friendly"
            }), (0, dY.jsx)("div", {
              className: "FrontlinePoints",
              children: uY.map((YY => (0, dY.jsx)(wY, {
                className: "FrontlinePoint",
                point: YY
              }, YY[0])))
            }), (0, dY.jsx)(nY, {
              team: sY,
              tickets: aY,
              goal: vY,
              side: "Enemy"
            })]
          }), (0, dY.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, dY.jsx)(UY, {
              endsAt: rY.endsAt
            }), (0, dY.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: DY("frontlineHud:ticketGoal", {
                goal: vY
              })
            })]
          })]
        })
      }));

    function nY(YY) {
      let {
        team: rY,
        tickets: DY,
        goal: FY,
        side: AY
      } = YY;
      const {
        t: IY
      } = (0, ZY.C)(), RY = String(DY).padStart(3, "0"), OY = RY.search(/[1-9]/), gY = -1 === OY ? RY : RY.slice(0, OY), aY = Math.min(20, Math.floor(DY / FY * 20));
      return (0, dY.jsxs)("div", {
        className: KY()("FrontlineTeamScore", AY, `Team-${rY}`),
        children: [(0, dY.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, dY.jsx)("span", {
            className: "Lead",
            children: gY
          }), -1 !== OY && RY.slice(OY)]
        }), (0, dY.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, dY.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: IY(JY[rY])
          }), (0, dY.jsx)(PY, {
            segments: 20,
            lit: aY
          })]
        })]
      })
    }

    function PY(YY) {
      let {
        segments: rY,
        lit: DY
      } = YY;
      return (0, dY.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: rY
        }, ((YY, rY) => (0, dY.jsx)("i", {
          className: KY()({
            Lit: rY < DY
          })
        }, rY)))
      })
    }

    function UY(YY) {
      let {
        endsAt: rY
      } = YY;
      const DY = Math.max(0, Math.ceil(MY(rY)));
      return (0, dY.jsxs)("div", {
        className: KY()("FrontlineClock", {
          Urgent: DY <= 60
        }),
        children: [Math.floor(DY / 60), ":", String(DY % 60).padStart(2, "0")]
      })
    }

    function LY() {
      return (0, dY.jsxs)(dY.Fragment, {
        children: [(0, dY.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, dY.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var tY = DY(36123),
      Yr = DY(1256),
      rr = DY(37879),
      Dr = DY(37914);
    class Fr {
      constructor(YY) {
        var rY;
        this.hud = YY, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Ky = !1, this.QE = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.QE), null === (rY = window.visualViewport) || void 0 === rY || rY.addEventListener("resize", this.QE)
      }
      bindMarker(YY) {
        let rY = this.refs.get(YY);
        return rY || (rY = rY => {
          var DY;
          null === (DY = this.markers.get(YY)) || void 0 === DY || DY.stopObserving(), this.markers.delete(YY), rY && !this.Ky && this.markers.set(YY, this.mount(rY))
        }, this.refs.set(YY, rY)), rY
      }
      frame(YY, rY) {
        this.render = YY;
        const DY = this.hud.getScoreboard().wire;
        if ("scoreboard" === DY[0] && 0 !== this.markers.size)
          for (const [FY, , , , , , AY] of DY[6]) {
            const YY = this.markers.get(FY);
            YY && AY && (YY.target ??= [0, 0, 0], YY.target[0] = AY[0], YY.target[1] = AY[1] + 2.5, YY.target[2] = AY[2], this.place(YY), this.aY(YY, rY && Math.hypot(AY[0] - rY[0], AY[1] - rY[1], AY[2] - rY[2])))
          }
      }
      dispose() {
        var YY;
        this.Ky = !0, window.removeEventListener("resize", this.QE), null === (YY = window.visualViewport) || void 0 === YY || YY.removeEventListener("resize", this.QE);
        for (const rY of this.markers.values()) rY.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(YY) {
        const {
          render: rY,
          viewport: DY
        } = this;
        if (!rY || !YY.target) return;
        const FY = (50 - rY.screenBandPct.y) / 100 * DY.height,
          AY = {
            x: YY.halfSize.width + 8,
            top: YY.halfSize.height + 8,
            bottom: YY.halfSize.height + YY.labelsBelow + FY
          },
          IY = rY.projectWorldPosToViewport(YY.target),
          RY = null !== IY && void 0 !== IY ? IY : rY.projectWorldPosToScreenPos(YY.target),
          OY = (0, Dr.b)({
            x: RY.x,
            y: RY.y,
            text: IY
          }, AY, DY);
        (0, rr.c)(YY.root, Math.round(100 * OY.x) / 100, Math.round(100 * OY.y) / 100)
      }
      aY(YY, rY) {
        if (null === rY) return void(null !== YY.metres && (YY.metres = null, YY.distance.textContent = ""));
        const DY = Date.now();
        (null === YY.metres || (0, tY.c)(rY, YY.metres, YY.metresShownAt)) && (YY.metres = Math.round(rY), YY.metresShownAt = DY, YY.distance.textContent = (0, ZY.y)(Yr.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(YY.metres)
        }))
      }
      mount(YY) {
        const rY = {
            root: YY,
            distance: YY.querySelector(".FrontlinePointMarkerDistance"),
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
          DY = YY.querySelector(".FrontlinePointMarkerLabels"),
          FY = new ResizeObserver((() => {
            rY.halfSize = {
              width: Math.max(YY.offsetWidth, DY.offsetWidth) / 2,
              height: YY.offsetHeight / 2
            }, rY.labelsBelow = DY.offsetTop + DY.offsetHeight - YY.offsetHeight, this.place(rY)
          }));
        return FY.observe(YY, {
          box: "border-box"
        }), FY.observe(DY, {
          box: "border-box"
        }), rY.stopObserving = () => {
          FY.disconnect()
        }, rY
      }
    }
    var Ar = DY(6005),
      Ir = DY(2368);
    const Rr = "frontlineRoundEndChanged";
    class Or {
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
      Cy(YY) {
        const rY = "roundEnd" === YY[0] ? performance.now() + YY[5] : 0;
        this.view = {
          wire: YY,
          key: this.view.key + 1,
          endsAt: rY
        }, aY.g.vo(Rr, this.view, !0)
      }
    }
    const gr = (0, AY.lazy)((() => (0, Ir.d)(DY.e(212).then((() => DY(40815))), (YY => YY.FrontlineMvpLineup)))),
      ar = [4800, 4e3, 3200],
      vr = [1, 0, 2],
      ur = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      sr = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function ir(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, CY.k)(Rr, rY.getView()),
        FY = MY(DY.endsAt);
      return "roundEnd" !== DY.wire[0] || 1e3 * FY < -2e3 ? null : (0, dY.jsx)(yr, {
        wire: DY.wire,
        secondsLeft: Math.max(0, Math.ceil(FY))
      }, DY.key)
    }
    const yr = (0, AY.memo)((function(YY) {
      let {
        wire: rY,
        secondsLeft: DY
      } = YY;
      const {
        t: IY
      } = (0, ZY.C)(), [, RY, OY, gY, aY, , vY, uY] = rY, sY = (0, AY.useMemo)((() => vr.filter((YY => YY < uY.length))), [uY]), iY = (0, AY.useMemo)((() => sY.map((YY => {
        const [, , , , , rY, DY] = uY[YY];
        return {
          cosmetics: FY.map(((YY, DY) => [YY, rY[DY]])),
          size: 0 === YY ? 1.15 : .85,
          heldGun: {
            name: DY,
            aimed: 0 === YY
          },
          showAfterMs: ar[YY]
        }
      }))), [uY, sY]);
      return (0, dY.jsxs)("div", {
        className: KY()("FrontlineRoundEnd", `Result-${RY}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, dY.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, dY.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, dY.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, dY.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, dY.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (yY = IY(ur[RY]), /\p{Script=Arabic}/u.test(yY) ? [yY] : (0, Ar.b)(yY)).map(((YY, rY) => (0, dY.jsx)("span", {
              style: {
                "--letter": rY
              },
              children: YY
            }, rY)))]
          }), (0, dY.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [OY && "victory" === RY && (0, dY.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: IY("frontlineRoundEnd:comeback")
            }), (0, dY.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, dY.jsx)("b", {
                className: "Friendly",
                children: gY
              }), " \u2013 ", (0, dY.jsx)("b", {
                className: "Enemy",
                children: aY
              })]
            })]
          })]
        }), sY.length > 0 && (0, dY.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": sY.length
          },
          children: [(0, dY.jsx)(AY.Suspense, {
            fallback: null,
            children: (0, dY.jsx)(gr, {
              className: "FrontlineRoundEndLineup",
              players: iY
            })
          }), sY.map((YY => (0, dY.jsx)(Qr, {
            mvp: uY[YY],
            place: YY
          }, YY)))]
        }), (0, dY.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: IY("frontlineRoundEnd:nextFront", {
            map: vY,
            seconds: String(DY)
          })
        })]
      });
      var yY
    }));

    function Qr(YY) {
      let {
        mvp: rY,
        place: DY
      } = YY;
      const {
        t: FY
      } = (0, ZY.C)(), [AY, IY, RY, OY, gY] = rY, [aY, vY] = FY(function(YY, rY) {
        return 1 === rY && "damage" !== YY ? `frontlineRoundEnd:${YY}One` : `frontlineRoundEnd:${YY}`
      }(RY, OY), {
        name: "\0",
        count: OY.toLocaleString()
      }).split("\0");
      return (0, dY.jsxs)("div", {
        className: KY()("FrontlineMvpCard", `Place-${DY+1}`, `Team-${IY}`),
        style: {
          "--revealMs": `${ar[DY]}ms`
        },
        children: [(0, dY.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, dY.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, dY.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: FY(sr[DY])
        }), (0, dY.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [aY, (0, dY.jsx)("span", {
            className: "FrontlineMvpName",
            children: AY
          }), vY]
        }), (0, dY.jsx)("div", {
          className: "FrontlineMvpKit",
          children: gY
        })]
      })
    }
    const or = function(YY, rY, DY, FY) {
      let {
        localPlayerId: RY
      } = FY;
      const OY = new hY,
        gY = new Or;
      let aY = null,
        vY = null,
        uY = null,
        sY = null,
        iY = null,
        yY = [!1, !1];
      const QY = () => {
        var YY, rY;
        const [DY, FY] = yY;
        null === (YY = vY) || void 0 === YY || YY.mV(!DY), null === (rY = uY) || void 0 === rY || rY.mV(!FY)
      };
      return {
        onCreate: YY => {
          aY = YY, vY = new mY(YY, RY), uY = new TY(YY, RY), sY = new Fr(OY), QY(), iY = (0, IY.q)((0, AY.createElement)(AY.Fragment, null, (0, AY.createElement)(pY, {
            hud: OY,
            crosshair: vY,
            damage: uY,
            markers: sY
          }), (0, AY.createElement)(ir, {
            controller: gY
          })))
        },
        onClose: () => {
          var YY, rY, DY, FY;
          null === (YY = iY) || void 0 === YY || YY(), null === (rY = vY) || void 0 === rY || rY.dispose(), vY = null, null === (DY = uY) || void 0 === DY || DY.dispose(), uY = null, null === (FY = sY) || void 0 === FY || FY.dispose(), sY = null, aY = null
        },
        onAfterRender: (YY, rY) => {
          var DY, FY, AY, IY;
          null === (DY = vY) || void 0 === DY || DY.frame(YY, rY.tanHalfFovY), null === (FY = uY) || void 0 === FY || FY.frame(rY.cameraHeading), null === (AY = sY) || void 0 === AY || AY.frame(rY, null !== (IY = aY) && void 0 !== IY && IY.checkValid(RY) ? aY.lE(RY) : null)
        },
        onReceivedMessageFromServer: (YY, rY) => {
          "frontlineHud" === YY ? OY.Cy(rY) : "frontlineScoreboard" === YY ? OY.receiveScoreboard(rY) : "frontlineRoundEnd" === YY ? gY.Cy(rY) : "frontlinePrefs" === YY && (yY = rY, QY())
        }
      }
    }
  },
  6005: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    const FY = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function AY(YY) {
      return null === FY ? Array.from(YY) : Array.from(FY.segment(YY), (YY => {
        let {
          segment: rY
        } = YY;
        return rY
      }))
    }
  },
  37879: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => IY
    });
    const FY = new WeakMap;

    function AY(YY) {
      let rY = FY.get(YY);
      return rY || (rY = {
        hidden: YY.hidden,
        x: NaN,
        y: NaN
      }, FY.set(YY, rY)), rY
    }

    function IY(YY, rY) {
      const DY = AY(YY);
      DY.hidden !== rY && (DY.hidden = rY, YY.hidden = rY)
    }

    function RY(YY, rY, DY) {
      const FY = AY(YY);
      FY.x === rY && FY.y === DY || (FY.x = rY, FY.y = DY, YY.style.translate = `${rY}vw ${DY}vh`)
    }
  },
  36427: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = {
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
for (const YY in modules) Object.freeze(modules[YY]);