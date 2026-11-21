export const id = 17;
export const ids = [17];
export const modules = {
  36228: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => xQ,
      g: () => bQ,
      j: () => HQ
    });
    var LQ = wQ(9094),
      qQ = wQ(36235),
      oQ = wQ(36238),
      DQ = wQ(8464),
      kQ = wQ(1447),
      vQ = wQ(53),
      mQ = wQ(71),
      uQ = wQ(1107);

    function HQ() {
      var QQ;
      return (0, kQ.i)(qQ.b, (0, qQ.k)()), (0, uQ.jsx)(uQ.Fragment, {
        children: null === (QQ = (0, qQ.k)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function bQ(QQ) {
      var FQ;
      let {
        show: wQ
      } = QQ;
      (0, kQ.i)(qQ.b, (0, qQ.k)());
      const mQ = null === (FQ = (0, qQ.k)()) || void 0 === FQ ? void 0 : FQ.menu;
      return (0, vQ.useEffect)((() => {
        var QQ;
        wQ || (null === mQ || void 0 === mQ || null === (QQ = mQ.onClose) || void 0 === QQ || QQ.call(mQ), (0, oQ.o)())
      }), [wQ, mQ]), (0, vQ.useEffect)((() => wQ ? (0, DQ.h)(oQ.v, oQ.g) : void 0), [wQ]), (0, uQ.jsx)(LQ.c, {
        showing: wQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === mQ || void 0 === mQ ? void 0 : mQ.content
      })
    }

    function YQ(QQ) {
      let {
        placement: FQ = "bottom"
      } = QQ;
      return (0, uQ.jsx)("div", {
        id: `clientGameHud-${FQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function xQ(QQ) {
      let {
        children: FQ,
        placement: wQ = "bottom"
      } = QQ;
      const [LQ, qQ] = (0, vQ.useState)(null);
      return (0, vQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${wQ}`))
      }), [wQ]), LQ ? (0, mQ.createPortal)(FQ, LQ) : null
    }
  },
  9094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(4380),
      qQ = wQ(4388);

    function oQ(QQ) {
      let {
        children: FQ,
        showing: wQ,
        globallyUniqueKey: oQ,
        alwaysMountChildren: DQ = !1,
        doGameplayStartStopOnShow: kQ = !0,
        keepsMovement: vQ = !1
      } = QQ;
      return (0, qQ.d)(!0, wQ, oQ, vQ), (0, LQ.b)(kQ, wQ), wQ || DQ ? FQ : null
    }
  },
  36313: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      d: () => DQ,
      f: () => kQ,
      h: () => vQ
    });
    var LQ = wQ(53),
      qQ = wQ(3002);
    const oQ = 8,
      DQ = "InGameHeaderContainer",
      kQ = "TopRightElements";

    function vQ(QQ) {
      const [FQ] = (0, qQ.b)(), [wQ, vQ] = (0, LQ.useState)(!1);
      return (0, LQ.useLayoutEffect)((() => {
        if (!QQ) return;
        const FQ = document.querySelector(`.${DQ}`),
          wQ = document.querySelector(`.${kQ}`),
          LQ = () => {
            const LQ = QQ.getBoundingClientRect(),
              qQ = FQ ? FQ.getBoundingClientRect().right : 0,
              DQ = wQ ? wQ.getBoundingClientRect().left : window.innerWidth,
              kQ = LQ.left < qQ + oQ,
              mQ = LQ.right > DQ - oQ;
            vQ(kQ || mQ)
          };
        LQ();
        const qQ = new ResizeObserver(LQ);
        return qQ.observe(QQ), FQ && qQ.observe(FQ), wQ && qQ.observe(wQ), () => {
          qQ.disconnect()
        }
      }), [QQ, FQ]), wQ
    }
  },
  36308: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    const LQ = [{
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

    function qQ(QQ, FQ, wQ) {
      const qQ = Math.abs(QQ - FQ),
        oQ = Date.now() - wQ;
      for (const DQ of LQ)
        if (QQ < DQ.maxDist) return qQ >= DQ.hardUpdateDist || oQ > DQ.timeBetweenSoftChecks && qQ >= DQ.softUpdateDist;
      return !1
    }
  },
  8464: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => qQ
    });
    let LQ = null;
    const qQ = function(QQ) {
        const FQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return LQ = FQ, () => {
          LQ === FQ && (LQ = null)
        }
      },
      oQ = () => {
        var QQ;
        return null !== (QQ = LQ) && void 0 !== QQ && QQ.canCycle() ? LQ.cycle : null
      }
  },
  38066: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ) {
      var LQ;
      const {
        width: qQ,
        height: oQ
      } = wQ, DQ = null !== (LQ = QQ.text) && void 0 !== LQ ? LQ : QQ, kQ = (DQ.x / 100 - .5) * qQ, vQ = (DQ.y / 100 - .5) * oQ, mQ = qQ / 2 - FQ.x;
      if (null !== QQ.text && Math.abs(kQ) <= mQ && vQ >= FQ.top - oQ / 2 && vQ <= oQ / 2 - FQ.bottom) return {
        x: DQ.x,
        y: DQ.y
      };
      const uQ = Math.min(0 === kQ ? 1 / 0 : mQ / Math.abs(kQ), vQ > 0 ? (oQ / 2 - FQ.bottom) / vQ : vQ < 0 ? (FQ.top - oQ / 2) / vQ : 1 / 0);
      return !Number.isFinite(uQ) || uQ < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + kQ * uQ / qQ * 100,
        y: 50 + vQ * uQ / oQ * 100
      }
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  38945: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => tF
    });
    const LQ = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var qQ = wQ(53),
      oQ = wQ(36235),
      DQ = wQ(36646),
      kQ = wQ(36242),
      vQ = wQ(1725),
      mQ = wQ(22);
    const uQ = {
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
    const HQ = 32;

    function bQ(QQ, FQ, wQ, LQ) {
      return {
        tag: "line",
        attrs: {
          x1: QQ,
          y1: FQ,
          x2: wQ,
          y2: LQ,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function YQ(QQ) {
      return {
        tag: "circle",
        attrs: {
          cx: HQ,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HQ,
          r: QQ,
          class: "Fill"
        }
      }
    }

    function xQ(QQ, FQ) {
      return {
        tag: "path",
        attrs: {
          d: QQ,
          "stroke-width": FQ
        }
      }
    }

    function AQ(QQ, FQ, wQ) {
      return {
        tag: "circle",
        attrs: {
          cx: HQ,
          cy: HQ,
          r: QQ,
          "stroke-width": FQ,
          class: wQ
        }
      }
    }

    function tQ(QQ, FQ, wQ) {
      return {
        tag: "text",
        attrs: {
          x: QQ,
          y: FQ,
          class: "Fill Label"
        },
        text: wQ
      }
    }
    const eQ = {
      pistol: QQ => [bQ(HQ, HQ - QQ - 5, HQ, HQ - QQ), bQ(HQ - QQ - 5, HQ, HQ - QQ, HQ), bQ(HQ + QQ, HQ, HQ + QQ + 5, HQ), YQ(1.4)],
      rifle: QQ => [bQ(HQ, HQ - QQ - 8, HQ, HQ - QQ), bQ(HQ, HQ + QQ, HQ, HQ + QQ + 8), bQ(HQ - QQ - 8, HQ, HQ - QQ, HQ), bQ(HQ + QQ, HQ, HQ + QQ + 8, HQ), YQ(1)],
      smg: QQ => {
        const FQ = Math.PI / 2,
          wQ = [];
        for (let DQ = 0; DQ < 4; DQ++) wQ.push((qQ = DQ * FQ + .35, oQ = (DQ + 1) * FQ - .35, xQ(`M${HQ+(LQ=6+QQ)*Math.cos(qQ)} ${HQ+LQ*Math.sin(qQ)} A${LQ} ${LQ} 0 0 1 ${HQ+LQ*Math.cos(oQ)} ${HQ+LQ*Math.sin(oQ)}`, 2)));
        var LQ, qQ, oQ;
        return [...wQ, YQ(1.4)]
      },
      shotgun: QQ => [AQ(QQ, 3, "Ring Outline"), AQ(QQ, 1.5, "Ring")],
      marksman: QQ => [xQ(`M${26-QQ/2} ${39+QQ/2} L32 33 L${38+QQ/2} ${39+QQ/2}`, 2), bQ(14 - QQ, HQ, 24 - QQ, HQ, 1.5), bQ(40 + QQ, HQ, 50 + QQ, HQ, 1.5), bQ(14 - QQ, 30, 14 - QQ, 34, 1.5), bQ(50 + QQ, 30, 50 + QQ, 34, 1.5)],
      machineGun: QQ => {
        const FQ = 10 + QQ,
          wQ = [];
        for (const [LQ, qQ] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) wQ.push(xQ(`M${HQ+LQ*FQ} ${HQ+qQ*(FQ-5)} L${HQ+LQ*FQ} ${HQ+qQ*FQ} L${HQ+LQ*(FQ-5)} ${HQ+qQ*FQ}`, 2));
        return [...wQ, bQ(HQ, 28, HQ, 36, 1.5), bQ(28, HQ, 36, HQ, 1.5)]
      },
      launcher: () => [bQ(14, 30, 50, 30, 1.5), bQ(HQ, 24, HQ, 52, 1.5), bQ(28, 38, 36, 38, 1.5), bQ(29, 44, 35, 44, 1.5), bQ(30, 50, 34, 50, 1.5), tQ(38, 40, "100"), tQ(37, 46, "200"), YQ(1.4, 30)],
      melee: () => [xQ("M32 26 L38 32 L32 38 L26 32 Z", 1.5), YQ(1.2)],
      throwable: () => [YQ(1.6)]
    };

    function MQ(QQ) {
      let {
        tag: FQ,
        attrs: wQ,
        text: LQ
      } = QQ, qQ = `<${FQ}`;
      for (const [oQ, DQ] of Object.entries(wQ)) qQ += ` ${oQ}="${DQ}"`;
      return void 0 === LQ ? `${qQ}/>` : `${qQ}>${LQ}</${FQ}>`
    }
    class GQ {
      constructor(QQ, FQ) {
        this.api = QQ, this.localPlayerId = FQ, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = QQ => {
          this.element = QQ, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, QQ && !this.enabled && (QQ.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, vQ.getRemInPx)()))
        }, this.tokens = [mQ.l.subscribe("aimingOverlay", (QQ => {
          this.sniperOverlay = "sniper" === QQ
        })), mQ.l.subscribe("mouseState", (QQ => {
          let {
            isDown: FQ
          } = QQ;
          this.mouseDown = FQ
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Qr(QQ) {
        QQ !== this.enabled && (this.enabled = QQ, this.drawnVisible = null, QQ || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(QQ, FQ) {
        var wQ, LQ;
        if (!this.enabled) return;
        const {
          api: qQ
        } = this, oQ = qQ.isAlive(this.localPlayerId) && null !== (wQ = null === (LQ = qQ.owQ(this.localPlayerId)) || void 0 === LQ ? void 0 : LQ.name) && void 0 !== wQ ? wQ : null, DQ = (kQ = oQ) && uQ[kQ] || null;
        var kQ;
        if (this.setOwnsCrosshair(null !== DQ), !this.element) return;
        const vQ = qQ.getHeldGunInaccuracy(),
          mQ = null !== vQ,
          HQ = null !== DQ && !this.sniperOverlay && qQ.isCrosshairShown();
        if (HQ !== this.drawnVisible && (this.drawnVisible = HQ, this.element.style.display = HQ ? "block" : "none"), !HQ) return;
        const bQ = mQ ? function(QQ) {
            return "launcher" === QQ || "melee" === QQ || "throwable" === QQ ? "none" : "shotgun" === QQ ? "cone" : "offset"
          }(DQ) : "none",
          YQ = null !== vQ && void 0 !== vQ ? vQ : 0;
        "cone" === bQ ? this.drawCone(DQ, this.coneRadiusVh(YQ, FQ) * this.gapPerVh, QQ) : (this.coneDrawn = !1, this.draw(DQ, "none" === bQ ? 2 : this.offsetGap(YQ)));
        const xQ = !mQ && this.mouseDown;
        xQ !== this.drawnPressed && (this.drawnPressed = xQ, this.element.classList.toggle("Pressed", xQ))
      }
      dispose() {
        for (const QQ of this.tokens) mQ.l.unsubscribe(QQ);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(QQ, FQ) {
        var wQ, LQ;
        QQ !== this.drawnFamily ? (this.drawnFamily = QQ, this.drawnGap = FQ, this.element.innerHTML = function(QQ, FQ) {
          return `<svg viewBox="0 0 64 64">${eQ[QQ](FQ).map(MQ).join("")}</svg>`
        }(QQ, FQ), this.shapes = Array.from(null !== (wQ = null === (LQ = this.element.firstElementChild) || void 0 === LQ ? void 0 : LQ.children) && void 0 !== wQ ? wQ : [])) : FQ !== this.drawnGap && (this.drawnGap = FQ, function(QQ, FQ, wQ) {
          const LQ = eQ[FQ](wQ);
          for (let qQ = 0; qQ < LQ.length; qQ++)
            for (const [FQ, wQ] of Object.entries(LQ[qQ].attrs)) {
              const LQ = String(wQ);
              QQ[qQ].getAttribute(FQ) !== LQ && QQ[qQ].setAttribute(FQ, LQ)
            }
        }(this.shapes, QQ, FQ))
      }
      drawCone(QQ, FQ, wQ) {
        QQ === this.drawnFamily && this.coneDrawn ? this.shownRadius += (FQ - this.shownRadius) * (1 - Math.exp(-wQ / 80)) : this.shownRadius = FQ, this.coneDrawn = !0, this.draw(QQ, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(QQ, FQ) {
        if (!(FQ > 0)) return 1;
        const wQ = QQ * DQ.i / 2;
        return Math.max(50 * Math.tan(wQ) / FQ, 1)
      }
      offsetGap(QQ) {
        const FQ = 2 + ((0, kQ.f)(QQ) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * FQ) / 2)
      }
      setOwnsCrosshair(QQ) {
        QQ !== this.ownsCrosshair && (this.ownsCrosshair = QQ, document.body.classList.toggle("FrontlineCustomCrosshair", QQ))
      }
    }
    const pQ = "FrontlineCustomDamage",
      cQ = .45,
      CQ = .2;
    class SQ {
      constructor(QQ, FQ) {
        this.api = QQ, this.localPlayerId = FQ, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.TQ = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = QQ => {
          var FQ, wQ;
          this.clearHits(), this.root = QQ, this.lowLayer = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.querySelector(".FrontlineDamageLow")) && void 0 !== FQ ? FQ : null, this.arcLayer = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.querySelector(".FrontlineDamageArcs")) && void 0 !== wQ ? wQ : null, this.showRoot(), this.drawLow()
        }, this.token = mQ.l.subscribe("damagedByOtherPlayer", (QQ => {
          let {
            direction: FQ,
            UQ: wQ
          } = QQ;
          this.onHurt(FQ, wQ)
        })), this.syncHealth(), document.body.classList.add(pQ)
      }
      Qr(QQ) {
        QQ !== this.enabled && (this.enabled = QQ, document.body.classList.toggle(pQ, QQ), QQ || this.clearHits(), this.showRoot())
      }
      frame(QQ) {
        this.syncHealth(), this.cameraHeading = QQ;
        for (const FQ of this.arcs) this.drawArcAngle(FQ)
      }
      dispose() {
        mQ.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(pQ)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const QQ = this.api.getClientOption(this.localPlayerId, "_health"),
          FQ = this.api.getClientOption(this.localPlayerId, "_shield"),
          wQ = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(QQ, this.readHealth) && Object.is(FQ, this.readShield) && Object.is(wQ, this.readMaxHealth)) return;
        if (this.readHealth = QQ, this.readShield = FQ, this.readMaxHealth = wQ, null === QQ || void 0 === QQ || !wQ) return this.lastHealthPool = null, this.maxHealth = null, this.TQ = 1, this.dead = !1, void this.drawLow();
        const LQ = QQ + (null !== FQ && void 0 !== FQ ? FQ : 0);
        if (null !== this.lastHealthPool && LQ < this.lastHealthPool) {
          const QQ = performance.now(),
            FQ = (this.lastHealthPool - LQ) / wQ;
          this.lastDrop = QQ - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + FQ,
            at: this.lastDrop.at
          } : {
            frac: FQ,
            at: QQ
          }
        }
        this.dead = QQ <= 0, this.dead && this.clearHits(), this.lastHealthPool = LQ, this.maxHealth = wQ, this.TQ = QQ > 0 ? QQ / wQ : 1, this.drawLow()
      }
      onHurt(QQ, FQ) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const wQ = Math.min(1, this.takeDamageFrac(FQ) / .3);
        null !== QQ && this.showArc(QQ, wQ), this.flashEdge(null === QQ ? null : QQ - this.cameraHeading, .4 + .6 * wQ)
      }
      takeDamageFrac(QQ) {
        if (void 0 !== QQ && this.maxHealth) return QQ / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: FQ
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, FQ
      }
      drawLow() {
        if (!this.lowLayer) return;
        const QQ = WQ((cQ - this.TQ) / .25),
          FQ = WQ((CQ - this.TQ) / .15000000000000002),
          wQ = this.TQ < cQ;
        this.lowLayer.classList.toggle("Active", wQ), this.lowLayer.classList.toggle("Critical", this.TQ < CQ), this.lowLayer.style.opacity = String(wQ ? .55 + .3 * QQ + .15 * FQ : 0)
      }
      showArc(QQ, FQ) {
        var wQ, LQ;
        if (!this.arcLayer) return;
        let qQ = this.arcs.find((FQ => iQ(FQ.direction, QQ) < .6));
        if (!qQ) {
          const FQ = document.createElement("div");
          FQ.className = "FrontlineDamageArc", FQ.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(FQ), qQ = {
            element: FQ,
            direction: QQ,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(qQ)
        }
        qQ.direction = QQ, this.drawArcAngle(qQ);
        const oQ = qQ.fade ? Number(getComputedStyle(qQ.element).opacity) : 0;
        null === (wQ = qQ.fade) || void 0 === wQ || wQ.cancel(), null === (LQ = qQ.pop) || void 0 === LQ || LQ.cancel(), qQ.element.style.opacity = "1";
        const DQ = qQ.element.animate([{
          opacity: oQ
        }, {
          opacity: 1
        }], 144);
        qQ.fade = DQ, qQ.pop = qQ.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * FQ
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const kQ = qQ;
        DQ.onfinish = () => {
          if (kQ.fade !== DQ) return;
          const QQ = kQ.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          QQ.startTime = DQ.startTime, kQ.fade = QQ, QQ.onfinish = () => {
            kQ.fade === QQ && (kQ.element.remove(), RQ(this.arcs, kQ))
          }
        }
      }
      drawArcAngle(QQ) {
        const FQ = QQ.direction - this.cameraHeading;
        (null === QQ.drawnAngle || Math.abs(FQ - QQ.drawnAngle) > .005) && (QQ.drawnAngle = FQ, QQ.element.style.rotate = `${FQ}rad`)
      }
      flashEdge(QQ, FQ) {
        var wQ, LQ, qQ;
        if (!this.root) return;
        let oQ = this.flashes.find((FQ => null === FQ.angle || null === QQ ? FQ.angle === QQ : iQ(FQ.angle, QQ) < .5));
        if (!oQ) {
          const FQ = document.createElement("div");
          FQ.className = "FrontlineDamageFlash";
          const wQ = FQ.appendChild(document.createElement("div"));
          wQ.className = "FrontlineDamageFlashGlow", this.root.insertBefore(FQ, this.arcLayer), oQ = {
            element: FQ,
            glow: wQ,
            angle: QQ,
            level: 0,
            animation: null
          }, this.flashes.push(oQ)
        }
        const DQ = null === (wQ = oQ.animation) || void 0 === wQ || null === (LQ = wQ.effect) || void 0 === LQ ? void 0 : LQ.getComputedTiming().progress,
          kQ = null === DQ || void 0 === DQ ? 0 : oQ.level * (1 - DQ);
        oQ.level = Math.min(1, Math.max(FQ, kQ + .6 * FQ)), oQ.angle = QQ;
        const {
          x: vQ,
          y: mQ,
          rx: uQ,
          ry: HQ
        } = function(QQ, FQ) {
          const wQ = window.innerWidth,
            LQ = window.innerHeight;
          if (null === QQ) return {
            x: wQ / 2,
            y: LQ / 2,
            rx: 0,
            ry: 0
          };
          const qQ = Math.sin(QQ),
            oQ = -Math.cos(QQ),
            DQ = wQ / 2 / Math.max(1e-6, Math.abs(qQ)),
            kQ = LQ / 2 / Math.max(1e-6, Math.abs(oQ)),
            vQ = Math.min(DQ, kQ),
            mQ = Math.round(wQ / 2 + qQ * vQ),
            uQ = Math.round(LQ / 2 + oQ * vQ),
            HQ = LQ / 100 * (.85 + .25 * FQ),
            bQ = DQ <= kQ,
            YQ = Math.round((bQ ? 30 : 74) * HQ),
            xQ = Math.round((bQ ? 58 : 26) * HQ);
          return {
            x: mQ,
            y: uQ,
            rx: YQ,
            ry: xQ
          }
        }(QQ, oQ.level), {
          style: bQ
        } = oQ.glow;
        oQ.glow.classList.toggle("Everywhere", null === QQ), bQ.setProperty("--glowX", `${vQ}px`), bQ.setProperty("--glowY", `${mQ}px`), bQ.setProperty("--glowRx", `${uQ}px`), bQ.setProperty("--glowRy", `${HQ}px`), oQ.element.style.transformOrigin = `${vQ}px ${mQ}px`, null === (qQ = oQ.animation) || void 0 === qQ || qQ.cancel();
        const YQ = oQ.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: oQ.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * oQ.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * oQ.level
        });
        oQ.animation = YQ;
        const xQ = oQ;
        YQ.onfinish = () => {
          xQ.animation === YQ && (xQ.element.remove(), RQ(this.flashes, xQ))
        }
      }
      clearHits() {
        for (const LQ of this.arcs) {
          var QQ, FQ;
          null === (QQ = LQ.fade) || void 0 === QQ || QQ.cancel(), LQ.fade = null, null === (FQ = LQ.pop) || void 0 === FQ || FQ.cancel(), LQ.element.remove()
        }
        this.arcs.length = 0;
        for (const LQ of this.flashes) {
          var wQ;
          null === (wQ = LQ.animation) || void 0 === wQ || wQ.cancel(), LQ.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function iQ(QQ, FQ) {
      return Math.abs(Math.atan2(Math.sin(QQ - FQ), Math.cos(QQ - FQ)))
    }

    function WQ(QQ) {
      return Math.max(0, Math.min(1, QQ))
    }

    function RQ(QQ, FQ) {
      const wQ = QQ.indexOf(FQ); - 1 !== wQ && QQ.splice(wQ, 1)
    }
    var OQ = wQ(1070),
      sQ = wQ.n(OQ),
      rQ = wQ(36228),
      IQ = wQ(36313),
      UQ = wQ(1207),
      NQ = wQ(1447);
    const TQ = "frontlineHudChanged",
      KQ = "frontlineScoreboardChanged";
    class zQ {
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
      bx(QQ) {
        this.wire = QQ, mQ.l.GA(TQ, QQ, !0)
      }
      receiveScoreboard(QQ) {
        let FQ = "scoreboard" === QQ[0] ? performance.now() + QQ[5] : 0;
        const wQ = this.scoreboard.endsAt;
        0 !== FQ && 0 !== wQ && Math.abs(FQ - wQ) < 1e3 && (FQ = wQ), this.scoreboard = {
          wire: QQ,
          endsAt: FQ
        }, mQ.l.GA(KQ, this.scoreboard, !0)
      }
    }
    var lQ = wQ(1107);
    const jQ = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function aQ(QQ) {
      const [FQ, wQ] = (0, qQ.useState)((() => (QQ - performance.now()) / 1e3));
      return (0, qQ.useEffect)((() => {
        if (0 === QQ) return;
        const FQ = () => {
          wQ((QQ - performance.now()) / 1e3)
        };
        FQ();
        const LQ = window.setInterval(FQ, 250);
        return () => {
          window.clearInterval(LQ)
        }
      }), [QQ]), FQ
    }

    function XQ(QQ) {
      let {
        className: FQ,
        point: wQ
      } = QQ;
      const [LQ, qQ, oQ, DQ, kQ, vQ] = wQ;
      return (0, lQ.jsxs)("div", {
        className: sQ()(FQ, `Owner-${qQ||"None"}`, `Leader-${DQ||"None"}`, {
          Contested: kQ,
          Here: vQ
        }),
        children: [(0, lQ.jsx)("span", {
          className: "FrontlinePointLetter",
          children: LQ
        }), (0, lQ.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${oQ}%`
          }
        })]
      })
    }
    const fQ = (0, qQ.memo)((function(QQ) {
        let {
          points: FQ,
          markers: wQ
        } = QQ;
        const {
          t: LQ
        } = (0, UQ.y)();
        return FQ ? (0, lQ.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: FQ.map((QQ => {
            const [FQ, , , , , , , qQ] = QQ;
            return (0, lQ.jsxs)("div", {
              ref: wQ.bindMarker(FQ),
              className: "FrontlinePointMarker",
              children: [(0, lQ.jsx)(XQ, {
                className: "FrontlinePointMarkerTile",
                point: QQ
              }), (0, lQ.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [qQ && (0, lQ.jsx)("span", {
                  className: sQ()("FrontlinePointMarkerHomeTurf", `Team-${qQ}`),
                  children: LQ("frontlineHud:homeTurf", {
                    team: LQ(jQ[qQ])
                  })
                }), (0, lQ.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, FQ)
          }))
        }) : null
      })),
      VQ = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      hQ = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function JQ(QQ) {
      let {
        hud: FQ,
        crosshair: wQ,
        damage: LQ,
        markers: qQ
      } = QQ;
      const oQ = (0, NQ.i)(TQ, FQ.getWire()),
        DQ = (0, NQ.i)(KQ, FQ.getScoreboard());
      return (0, lQ.jsxs)(lQ.Fragment, {
        children: [(0, lQ.jsx)(EQ, {
          damage: LQ
        }), (0, lQ.jsx)(fQ, {
          points: "scoreboard" === DQ.wire[0] ? DQ.wire[6] : null,
          markers: qQ
        }), (0, lQ.jsx)(gQ, {
          view: DQ
        }), (0, lQ.jsx)("div", {
          className: "FrontlineReticle",
          ref: wQ.bindElement
        }), (0, lQ.jsx)(rQ.d, {
          children: (0, lQ.jsx)(nQ, {
            wire: oQ
          })
        })]
      })
    }
    const EQ = (0, qQ.memo)((function(QQ) {
        let {
          damage: FQ
        } = QQ;
        return (0, lQ.jsxs)("div", {
          className: "FrontlineDamage",
          ref: FQ.bindElement,
          children: [(0, lQ.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, lQ.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, lQ.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      nQ = (0, qQ.memo)((function(QQ) {
        let {
          wire: FQ
        } = QQ;
        const {
          t: wQ
        } = (0, UQ.y)();
        if ("capture" === FQ[0]) {
          const [, QQ, LQ, qQ, oQ, DQ, kQ] = FQ, vQ = Math.round(qQ / 100 * 24);
          return (0, lQ.jsxs)("div", {
            className: sQ()("FrontlinePlate", `Status-${LQ}`, `Leader-${oQ||"None"}`),
            children: [(0, lQ.jsx)(BQ, {}), (0, lQ.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, lQ.jsx)("span", {
                className: "FrontlineObjective",
                children: QQ
              }), (0, lQ.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, lQ.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: wQ("frontlineHud:objective", {
                    point: QQ,
                    friendly: DQ,
                    enemy: kQ
                  })
                }), (0, lQ.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: wQ(VQ[LQ])
                })]
              }), (0, lQ.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(qQ).padStart(3, "0"), (0, lQ.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, lQ.jsx)(ZQ, {
              segments: 24,
              lit: vQ
            })]
          })
        }
        if ("alert" === FQ[0]) {
          const [, QQ, LQ, qQ] = FQ;
          return (0, lQ.jsxs)("div", {
            className: sQ()("FrontlinePlate", "FrontlineAlert", `Tone-${qQ}`),
            children: [(0, lQ.jsx)(BQ, {}), (0, lQ.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: wQ(hQ[QQ])
            }), (0, lQ.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: LQ
            })]
          })
        }
        return null
      })),
      gQ = (0, qQ.memo)((function(QQ) {
        let {
          view: FQ
        } = QQ;
        const {
          t: wQ
        } = (0, UQ.y)(), LQ = (0, qQ.useRef)(null), oQ = function(QQ, FQ) {
          const [wQ, LQ] = (0, qQ.useState)(!1);
          return (0, qQ.useLayoutEffect)((() => {
            const FQ = QQ.current;
            if (!FQ) return;
            const wQ = document.querySelector(`.${IQ.d}`),
              qQ = document.querySelector(`.${IQ.f}`),
              oQ = () => {
                var QQ;
                const oQ = FQ.querySelector(".FrontlineTeamTrack"),
                  DQ = (0, vQ.getRemInPx)(),
                  kQ = FQ.getBoundingClientRect().width - 2 * (null !== (QQ = null === oQ || void 0 === oQ ? void 0 : oQ.getBoundingClientRect().width) && void 0 !== QQ ? QQ : 0),
                  mQ = window.innerWidth / 2,
                  uQ = wQ ? wQ.getBoundingClientRect().right : 0,
                  HQ = qQ ? qQ.getBoundingClientRect().left : window.innerWidth,
                  bQ = Math.min(mQ - uQ, HQ - mQ) - IQ.b - kQ / 2,
                  YQ = bQ < 6 * DQ,
                  xQ = YQ ? (window.innerWidth - kQ) / 2 - IQ.b : bQ;
                FQ.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(xQ,14*DQ)))}px`), LQ(YQ)
              };
            oQ();
            const DQ = new ResizeObserver(oQ);
            for (const QQ of [FQ, wQ, qQ]) QQ && DQ.observe(QQ);
            return window.addEventListener("resize", oQ), () => {
              DQ.disconnect(), window.removeEventListener("resize", oQ)
            }
          }), [QQ, FQ]), wQ
        }(LQ, "scoreboard" === FQ.wire[0]);
        if ("scoreboard" !== FQ.wire[0]) return null;
        const [, DQ, kQ, mQ, uQ, , HQ] = FQ.wire, bQ = "Red" === DQ ? "Blue" : "Red";
        return (0, lQ.jsxs)("div", {
          className: sQ()("FrontlineScoreboardContainer", {
            Below: oQ
          }),
          children: [(0, lQ.jsxs)("div", {
            ref: LQ,
            className: "FrontlineScoreboard",
            children: [(0, lQ.jsx)(BQ, {}), (0, lQ.jsx)(PQ, {
              team: DQ,
              tickets: kQ,
              goal: uQ,
              side: "Friendly"
            }), (0, lQ.jsx)("div", {
              className: "FrontlinePoints",
              children: HQ.map((QQ => (0, lQ.jsx)(XQ, {
                className: "FrontlinePoint",
                point: QQ
              }, QQ[0])))
            }), (0, lQ.jsx)(PQ, {
              team: bQ,
              tickets: mQ,
              goal: uQ,
              side: "Enemy"
            })]
          }), (0, lQ.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, lQ.jsx)(yQ, {
              endsAt: FQ.endsAt
            }), (0, lQ.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: wQ("frontlineHud:ticketGoal", {
                goal: uQ
              })
            })]
          })]
        })
      }));

    function PQ(QQ) {
      let {
        team: FQ,
        tickets: wQ,
        goal: LQ,
        side: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, UQ.y)(), DQ = String(wQ).padStart(3, "0"), kQ = DQ.search(/[1-9]/), vQ = -1 === kQ ? DQ : DQ.slice(0, kQ), mQ = Math.min(20, Math.floor(wQ / LQ * 20));
      return (0, lQ.jsxs)("div", {
        className: sQ()("FrontlineTeamScore", qQ, `Team-${FQ}`),
        children: [(0, lQ.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, lQ.jsx)("span", {
            className: "Lead",
            children: vQ
          }), -1 !== kQ && DQ.slice(kQ)]
        }), (0, lQ.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, lQ.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: oQ(jQ[FQ])
          }), (0, lQ.jsx)(ZQ, {
            segments: 20,
            lit: mQ
          })]
        })]
      })
    }

    function ZQ(QQ) {
      let {
        segments: FQ,
        lit: wQ
      } = QQ;
      return (0, lQ.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: FQ
        }, ((QQ, FQ) => (0, lQ.jsx)("i", {
          className: sQ()({
            Lit: FQ < wQ
          })
        }, FQ)))
      })
    }

    function yQ(QQ) {
      let {
        endsAt: FQ
      } = QQ;
      const wQ = Math.max(0, Math.ceil(aQ(FQ)));
      return (0, lQ.jsxs)("div", {
        className: sQ()("FrontlineClock", {
          Urgent: wQ <= 60
        }),
        children: [Math.floor(wQ / 60), ":", String(wQ % 60).padStart(2, "0")]
      })
    }

    function BQ() {
      return (0, lQ.jsxs)(lQ.Fragment, {
        children: [(0, lQ.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, lQ.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var dQ = wQ(36308),
      QF = wQ(1265),
      FF = wQ(38026),
      wF = wQ(38066);
    class LF {
      constructor(QQ) {
        var FQ;
        this.hud = QQ, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.kx = !1, this.aG = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.aG), null === (FQ = window.visualViewport) || void 0 === FQ || FQ.addEventListener("resize", this.aG)
      }
      bindMarker(QQ) {
        let FQ = this.refs.get(QQ);
        return FQ || (FQ = FQ => {
          var wQ;
          null === (wQ = this.markers.get(QQ)) || void 0 === wQ || wQ.stopObserving(), this.markers.delete(QQ), FQ && !this.kx && this.markers.set(QQ, this.mount(FQ))
        }, this.refs.set(QQ, FQ)), FQ
      }
      frame(QQ, FQ) {
        this.render = QQ;
        const wQ = this.hud.getScoreboard().wire;
        if ("scoreboard" === wQ[0] && 0 !== this.markers.size)
          for (const [LQ, , , , , , qQ] of wQ[6]) {
            const QQ = this.markers.get(LQ);
            QQ && qQ && (QQ.target ??= [0, 0, 0], QQ.target[0] = qQ[0], QQ.target[1] = qQ[1] + 2.5, QQ.target[2] = qQ[2], this.place(QQ), this.kL(QQ, FQ && Math.hypot(qQ[0] - FQ[0], qQ[1] - FQ[1], qQ[2] - FQ[2])))
          }
      }
      dispose() {
        var QQ;
        this.kx = !0, window.removeEventListener("resize", this.aG), null === (QQ = window.visualViewport) || void 0 === QQ || QQ.removeEventListener("resize", this.aG);
        for (const FQ of this.markers.values()) FQ.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(QQ) {
        const {
          render: FQ,
          viewport: wQ
        } = this;
        if (!FQ || !QQ.target) return;
        const LQ = (50 - FQ.screenBandPct.y) / 100 * wQ.height,
          qQ = {
            x: QQ.halfSize.width + 8,
            top: QQ.halfSize.height + 8,
            bottom: QQ.halfSize.height + QQ.labelsBelow + LQ
          },
          oQ = FQ.projectWorldPosToViewport(QQ.target),
          DQ = null !== oQ && void 0 !== oQ ? oQ : FQ.projectWorldPosToScreenPos(QQ.target),
          kQ = (0, wF.c)({
            x: DQ.x,
            y: DQ.y,
            text: oQ
          }, qQ, wQ);
        (0, FF.e)(QQ.root, Math.round(100 * kQ.x) / 100, Math.round(100 * kQ.y) / 100)
      }
      kL(QQ, FQ) {
        if (null === FQ) return void(null !== QQ.metres && (QQ.metres = null, QQ.distance.textContent = ""));
        const wQ = Date.now();
        (null === QQ.metres || (0, dQ.e)(FQ, QQ.metres, QQ.metresShownAt)) && (QQ.metres = Math.round(FQ), QQ.metresShownAt = wQ, QQ.distance.textContent = (0, UQ.u)(QF.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(QQ.metres)
        }))
      }
      mount(QQ) {
        const FQ = {
            root: QQ,
            distance: QQ.querySelector(".FrontlinePointMarkerDistance"),
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
          wQ = QQ.querySelector(".FrontlinePointMarkerLabels"),
          LQ = new ResizeObserver((() => {
            FQ.halfSize = {
              width: Math.max(QQ.offsetWidth, wQ.offsetWidth) / 2,
              height: QQ.offsetHeight / 2
            }, FQ.labelsBelow = wQ.offsetTop + wQ.offsetHeight - QQ.offsetHeight, this.place(FQ)
          }));
        return LQ.observe(QQ, {
          box: "border-box"
        }), LQ.observe(wQ, {
          box: "border-box"
        }), FQ.stopObserving = () => {
          LQ.disconnect()
        }, FQ
      }
    }
    var qF = wQ(6283),
      oF = wQ(2511);
    const DF = "frontlineRoundEndChanged";
    class kF {
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
      bx(QQ) {
        const FQ = "roundEnd" === QQ[0] ? performance.now() + QQ[5] : 0;
        this.view = {
          wire: QQ,
          key: this.view.key + 1,
          endsAt: FQ
        }, mQ.l.GA(DF, this.view, !0)
      }
    }
    const vF = (0, qQ.lazy)((() => (0, oF.b)(wQ.e(192).then((() => wQ(41155))), (QQ => QQ.FrontlineMvpLineup)))),
      mF = [4800, 4e3, 3200],
      uF = [1, 0, 2],
      HF = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      bF = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function YF(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, NQ.i)(DF, FQ.getView()),
        LQ = aQ(wQ.endsAt);
      return "roundEnd" !== wQ.wire[0] || 1e3 * LQ < -2e3 ? null : (0, lQ.jsx)(xF, {
        wire: wQ.wire,
        secondsLeft: Math.max(0, Math.ceil(LQ))
      }, wQ.key)
    }
    const xF = (0, qQ.memo)((function(QQ) {
      let {
        wire: FQ,
        secondsLeft: wQ
      } = QQ;
      const {
        t: oQ
      } = (0, UQ.y)(), [, DQ, kQ, vQ, mQ, , uQ, HQ] = FQ, bQ = (0, qQ.useMemo)((() => uF.filter((QQ => QQ < HQ.length))), [HQ]), YQ = (0, qQ.useMemo)((() => bQ.map((QQ => {
        const [, , , , , FQ, wQ] = HQ[QQ];
        return {
          cosmetics: LQ.map(((QQ, wQ) => [QQ, FQ[wQ]])),
          size: 0 === QQ ? 1.15 : .85,
          heldGun: {
            name: wQ,
            aimed: 0 === QQ
          },
          showAfterMs: mF[QQ]
        }
      }))), [HQ, bQ]);
      return (0, lQ.jsxs)("div", {
        className: sQ()("FrontlineRoundEnd", `Result-${DQ}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, lQ.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, lQ.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, lQ.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, lQ.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, lQ.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (xQ = oQ(HF[DQ]), /\p{Script=Arabic}/u.test(xQ) ? [xQ] : (0, qF.b)(xQ)).map(((QQ, FQ) => (0, lQ.jsx)("span", {
              style: {
                "--letter": FQ
              },
              children: QQ
            }, FQ)))]
          }), (0, lQ.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [kQ && "victory" === DQ && (0, lQ.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: oQ("frontlineRoundEnd:comeback")
            }), (0, lQ.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, lQ.jsx)("b", {
                className: "Friendly",
                children: vQ
              }), " \u2013 ", (0, lQ.jsx)("b", {
                className: "Enemy",
                children: mQ
              })]
            })]
          })]
        }), bQ.length > 0 && (0, lQ.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": bQ.length
          },
          children: [(0, lQ.jsx)(qQ.Suspense, {
            fallback: null,
            children: (0, lQ.jsx)(vF, {
              className: "FrontlineRoundEndLineup",
              players: YQ
            })
          }), bQ.map((QQ => (0, lQ.jsx)(AF, {
            mvp: HQ[QQ],
            place: QQ
          }, QQ)))]
        }), (0, lQ.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: oQ("frontlineRoundEnd:nextFront", {
            map: uQ,
            seconds: String(wQ)
          })
        })]
      });
      var xQ
    }));

    function AF(QQ) {
      let {
        mvp: FQ,
        place: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, UQ.y)(), [qQ, oQ, DQ, kQ, vQ] = FQ, [mQ, uQ] = LQ(function(QQ, FQ) {
        return 1 === FQ && "damage" !== QQ ? `frontlineRoundEnd:${QQ}One` : `frontlineRoundEnd:${QQ}`
      }(DQ, kQ), {
        name: "\0",
        count: kQ.toLocaleString()
      }).split("\0");
      return (0, lQ.jsxs)("div", {
        className: sQ()("FrontlineMvpCard", `Place-${wQ+1}`, `Team-${oQ}`),
        style: {
          "--revealMs": `${mF[wQ]}ms`
        },
        children: [(0, lQ.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, lQ.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, lQ.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: LQ(bF[wQ])
        }), (0, lQ.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [mQ, (0, lQ.jsx)("span", {
            className: "FrontlineMvpName",
            children: qQ
          }), uQ]
        }), (0, lQ.jsx)("div", {
          className: "FrontlineMvpKit",
          children: vQ
        })]
      })
    }
    const tF = function(QQ, FQ, wQ, LQ) {
      let {
        localPlayerId: DQ
      } = LQ;
      const kQ = new zQ,
        vQ = new kF;
      let mQ = null,
        uQ = null,
        HQ = null,
        bQ = null,
        YQ = null,
        xQ = [!1, !1];
      const AQ = () => {
        var QQ, FQ;
        const [wQ, LQ] = xQ;
        null === (QQ = uQ) || void 0 === QQ || QQ.Qr(!wQ), null === (FQ = HQ) || void 0 === FQ || FQ.Qr(!LQ)
      };
      return {
        onCreate: QQ => {
          mQ = QQ, uQ = new GQ(QQ, DQ), HQ = new SQ(QQ, DQ), bQ = new LF(kQ), AQ(), YQ = (0, oQ.u)((0, qQ.createElement)(qQ.Fragment, null, (0, qQ.createElement)(JQ, {
            hud: kQ,
            crosshair: uQ,
            damage: HQ,
            markers: bQ
          }), (0, qQ.createElement)(YF, {
            controller: vQ
          })))
        },
        onClose: () => {
          var QQ, FQ, wQ, LQ;
          null === (QQ = YQ) || void 0 === QQ || QQ(), null === (FQ = uQ) || void 0 === FQ || FQ.dispose(), uQ = null, null === (wQ = HQ) || void 0 === wQ || wQ.dispose(), HQ = null, null === (LQ = bQ) || void 0 === LQ || LQ.dispose(), bQ = null, mQ = null
        },
        onAfterRender: (QQ, FQ) => {
          var wQ, LQ, qQ, oQ;
          null === (wQ = uQ) || void 0 === wQ || wQ.frame(QQ, FQ.tanHalfFovY), null === (LQ = HQ) || void 0 === LQ || LQ.frame(FQ.cameraHeading), null === (qQ = bQ) || void 0 === qQ || qQ.frame(FQ, null !== (oQ = mQ) && void 0 !== oQ && oQ.checkValid(DQ) ? mQ.Qp(DQ) : null)
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          "frontlineHud" === QQ ? kQ.bx(FQ) : "frontlineScoreboard" === QQ ? kQ.receiveScoreboard(FQ) : "frontlineRoundEnd" === QQ ? vQ.bx(FQ) : "frontlinePrefs" === QQ && (xQ = FQ, AQ())
        }
      }
    }
  },
  6283: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ
    });
    const LQ = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function qQ(QQ) {
      return null === LQ ? Array.from(QQ) : Array.from(LQ.segment(QQ), (QQ => {
        let {
          segment: FQ
        } = QQ;
        return FQ
      }))
    }
  },
  38026: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      g: () => oQ
    });
    const LQ = new WeakMap;

    function qQ(QQ) {
      let FQ = LQ.get(QQ);
      return FQ || (FQ = {
        hidden: QQ.hidden,
        x: NaN,
        y: NaN
      }, LQ.set(QQ, FQ)), FQ
    }

    function oQ(QQ, FQ) {
      const wQ = qQ(QQ);
      wQ.hidden !== FQ && (wQ.hidden = FQ, QQ.hidden = FQ)
    }

    function DQ(QQ, FQ, wQ) {
      const LQ = qQ(QQ);
      LQ.x === FQ && LQ.y === wQ || (LQ.x = FQ, LQ.y = wQ, QQ.style.translate = `${FQ}vw ${wQ}vh`)
    }
  },
  36672: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    const LQ = {
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
for (const QQ in modules) Object.freeze(modules[QQ]);