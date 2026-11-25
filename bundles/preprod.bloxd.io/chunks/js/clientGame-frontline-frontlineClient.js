export const id = 18;
export const ids = [18];
export const modules = {
  36891: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      g: () => jQ,
      k: () => rQ,
      o: () => JQ
    });
    var wQ = XQ(34500),
      qQ = XQ(36900),
      TQ = XQ(36906),
      zQ = XQ(9099),
      sQ = XQ(1498),
      FQ = XQ(61),
      PQ = XQ(78),
      gQ = XQ(1145);

    function JQ() {
      var QQ;
      return (0, sQ.j)(qQ.c, (0, qQ.s)()), (0, gQ.jsx)(gQ.Fragment, {
        children: null === (QQ = (0, qQ.s)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function rQ(QQ) {
      var WQ;
      let {
        show: XQ
      } = QQ;
      (0, sQ.j)(qQ.c, (0, qQ.s)());
      const PQ = null === (WQ = (0, qQ.s)()) || void 0 === WQ ? void 0 : WQ.menu;
      return (0, FQ.useEffect)((() => {
        var QQ;
        XQ || (null === PQ || void 0 === PQ || null === (QQ = PQ.onClose) || void 0 === QQ || QQ.call(PQ), (0, TQ.r)())
      }), [XQ, PQ]), (0, FQ.useEffect)((() => XQ ? (0, zQ.e)(TQ.y, TQ.f) : void 0), [XQ]), (0, gQ.jsx)(wQ.c, {
        showing: XQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === PQ || void 0 === PQ ? void 0 : PQ.content
      })
    }

    function IQ(QQ) {
      let {
        placement: WQ = "bottom"
      } = QQ;
      return (0, gQ.jsx)("div", {
        id: `clientGameHud-${WQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function jQ(QQ) {
      let {
        children: WQ,
        placement: XQ = "bottom"
      } = QQ;
      const [wQ, qQ] = (0, FQ.useState)(null);
      return (0, FQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${XQ}`))
      }), [XQ]), wQ ? (0, PQ.createPortal)(WQ, wQ) : null
    }
  },
  34500: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(4859),
      qQ = XQ(4863);

    function TQ(QQ) {
      let {
        children: WQ,
        showing: XQ,
        globallyUniqueKey: TQ,
        alwaysMountChildren: zQ = !1,
        doGameplayStartStopOnShow: sQ = !0,
        keepsMovement: FQ = !1
      } = QQ;
      return (0, qQ.c)(!0, XQ, TQ, FQ), (0, wQ.c)(sQ, XQ), XQ || zQ ? WQ : null
    }
  },
  36987: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      h: () => zQ,
      i: () => sQ,
      k: () => FQ
    });
    var wQ = XQ(61),
      qQ = XQ(3379);
    const TQ = 8,
      zQ = "InGameHeaderContainer",
      sQ = "TopRightElements";

    function FQ(QQ) {
      const [WQ] = (0, qQ.d)(), [XQ, FQ] = (0, wQ.useState)(!1);
      return (0, wQ.useLayoutEffect)((() => {
        if (!QQ) return;
        const WQ = document.querySelector(`.${zQ}`),
          XQ = document.querySelector(`.${sQ}`),
          wQ = () => {
            const wQ = QQ.getBoundingClientRect(),
              qQ = WQ ? WQ.getBoundingClientRect().right : 0,
              zQ = XQ ? XQ.getBoundingClientRect().left : window.innerWidth,
              sQ = wQ.left < qQ + TQ,
              PQ = wQ.right > zQ - TQ;
            FQ(sQ || PQ)
          };
        wQ();
        const qQ = new ResizeObserver(wQ);
        return qQ.observe(QQ), WQ && qQ.observe(WQ), XQ && qQ.observe(XQ), () => {
          qQ.disconnect()
        }
      }), [QQ, WQ]), XQ
    }
  },
  36982: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    const wQ = [{
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

    function qQ(QQ, WQ, XQ) {
      const qQ = Math.abs(QQ - WQ),
        TQ = Date.now() - XQ;
      for (const zQ of wQ)
        if (QQ < zQ.maxDist) return qQ >= zQ.hardUpdateDist || TQ > zQ.timeBetweenSoftChecks && qQ >= zQ.softUpdateDist;
      return !1
    }
  },
  9099: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => qQ
    });
    let wQ = null;
    const qQ = function(QQ) {
        const WQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wQ = WQ, () => {
          wQ === WQ && (wQ = null)
        }
      },
      TQ = () => {
        var QQ;
        return null !== (QQ = wQ) && void 0 !== QQ && QQ.canCycle() ? wQ.cycle : null
      }
  },
  38816: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      var wQ;
      const {
        width: qQ,
        height: TQ
      } = XQ, zQ = null !== (wQ = QQ.text) && void 0 !== wQ ? wQ : QQ, sQ = (zQ.x / 100 - .5) * qQ, FQ = (zQ.y / 100 - .5) * TQ, PQ = qQ / 2 - WQ.x;
      if (null !== QQ.text && Math.abs(sQ) <= PQ && FQ >= WQ.top - TQ / 2 && FQ <= TQ / 2 - WQ.bottom) return {
        x: zQ.x,
        y: zQ.y
      };
      const gQ = Math.min(0 === sQ ? 1 / 0 : PQ / Math.abs(sQ), FQ > 0 ? (TQ / 2 - WQ.bottom) / FQ : FQ < 0 ? (WQ.top - TQ / 2) / FQ : 1 / 0);
      return !Number.isFinite(gQ) || gQ < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + sQ * gQ / qQ * 100,
        y: 50 + FQ * gQ / TQ * 100
      }
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  36906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      b: () => TQ,
      f: () => BQ,
      h: () => yQ,
      j: () => sQ,
      n: () => rQ,
      r: () => VQ,
      t: () => JQ,
      u: () => pQ,
      y: () => jQ
    });
    var wQ = XQ(26),
      qQ = XQ(31);
    const TQ = "clientGameInventoryButtonsChanged",
      zQ = new Map;

    function sQ() {
      return [...zQ.values()].sort(((QQ, WQ) => {
        var XQ, wQ;
        return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
      }))
    }
    let FQ = null;

    function PQ(QQ) {
      FQ = QQ
    }
    let gQ = !1;

    function JQ(QQ) {
      gQ = !0;
      try {
        QQ.onClick()
      } finally {
        gQ = !1
      }
      QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
    }

    function rQ() {
      return gQ
    }

    function IQ() {
      return sQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function jQ(QQ) {
      const WQ = IQ(),
        XQ = WQ.findIndex((QQ => QQ.id === FQ));
      return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
    }

    function BQ() {
      return null !== FQ && IQ().length > 1
    }

    function yQ() {
      PQ(null)
    }

    function VQ() {
      "inventory" !== wQ.b.get("openInGameMenuName") && PQ(null)
    }

    function DQ() {
      const QQ = FQ;
      return PQ(null), QQ
    }

    function pQ(QQ) {
      return zQ.set(QQ.id, QQ), qQ.k.mB(TQ, sQ(), !0), () => {
        zQ.get(QQ.id) === QQ && (zQ.delete(QQ.id), qQ.k.mB(TQ, sQ()))
      }
    }
  },
  36900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      c: () => sQ,
      g: () => DQ,
      j: () => yQ,
      n: () => VQ,
      q: () => rQ,
      s: () => PQ,
      u: () => BQ,
      y: () => IQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(36906);
    const sQ = "clientGameUiChanged";
    let FQ = null;

    function PQ() {
      return FQ
    }

    function gQ(QQ, WQ) {
      const XQ = {
        content: QQ,
        menu: WQ
      };
      return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
        FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
      }
    }
    let JQ = null;

    function rQ() {
      return JQ
    }

    function IQ(QQ) {
      return JQ = QQ, () => {
        JQ === QQ && (JQ = null)
      }
    }
    let jQ = !1;

    function BQ() {
      const QQ = wQ.b.get("openInGameMenuName");
      "clientGame" !== QQ && (jQ = "inventory" === QQ), (0, zQ.n)() || (0, zQ.h)(), (0, TQ.z)(TQ.e), wQ.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yQ() {
      pQ(!1)
    }

    function VQ() {
      pQ(jQ)
    }

    function DQ() {
      jQ && pQ(!1)
    }

    function pQ(QQ) {
      "clientGame" === wQ.b.get("openInGameMenuName") && wQ.b.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, zQ.h)(), jQ = !1
    }
  },
  39712: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => yW
    });
    const wQ = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var qQ = XQ(61),
      TQ = XQ(36900),
      zQ = XQ(37311),
      sQ = XQ(36920),
      FQ = XQ(1802),
      PQ = XQ(31);
    const gQ = {
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
    const JQ = 32;

    function rQ(QQ, WQ, XQ, wQ) {
      return {
        tag: "line",
        attrs: {
          x1: QQ,
          y1: WQ,
          x2: XQ,
          y2: wQ,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function IQ(QQ) {
      return {
        tag: "circle",
        attrs: {
          cx: JQ,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JQ,
          r: QQ,
          class: "Fill"
        }
      }
    }

    function jQ(QQ, WQ) {
      return {
        tag: "path",
        attrs: {
          d: QQ,
          "stroke-width": WQ
        }
      }
    }

    function BQ(QQ, WQ, XQ) {
      return {
        tag: "circle",
        attrs: {
          cx: JQ,
          cy: JQ,
          r: QQ,
          "stroke-width": WQ,
          class: XQ
        }
      }
    }

    function yQ(QQ, WQ, XQ) {
      return {
        tag: "text",
        attrs: {
          x: QQ,
          y: WQ,
          class: "Fill Label"
        },
        text: XQ
      }
    }
    const VQ = {
      pistol: QQ => [rQ(JQ, JQ - QQ - 5, JQ, JQ - QQ), rQ(JQ - QQ - 5, JQ, JQ - QQ, JQ), rQ(JQ + QQ, JQ, JQ + QQ + 5, JQ), IQ(1.4)],
      rifle: QQ => [rQ(JQ, JQ - QQ - 8, JQ, JQ - QQ), rQ(JQ, JQ + QQ, JQ, JQ + QQ + 8), rQ(JQ - QQ - 8, JQ, JQ - QQ, JQ), rQ(JQ + QQ, JQ, JQ + QQ + 8, JQ), IQ(1)],
      smg: QQ => {
        const WQ = Math.PI / 2,
          XQ = [];
        for (let zQ = 0; zQ < 4; zQ++) XQ.push((qQ = zQ * WQ + .35, TQ = (zQ + 1) * WQ - .35, jQ(`M${JQ+(wQ=6+QQ)*Math.cos(qQ)} ${JQ+wQ*Math.sin(qQ)} A${wQ} ${wQ} 0 0 1 ${JQ+wQ*Math.cos(TQ)} ${JQ+wQ*Math.sin(TQ)}`, 2)));
        var wQ, qQ, TQ;
        return [...XQ, IQ(1.4)]
      },
      shotgun: QQ => [BQ(QQ, 3, "Ring Outline"), BQ(QQ, 1.5, "Ring")],
      marksman: QQ => [jQ(`M${26-QQ/2} ${39+QQ/2} L32 33 L${38+QQ/2} ${39+QQ/2}`, 2), rQ(14 - QQ, JQ, 24 - QQ, JQ, 1.5), rQ(40 + QQ, JQ, 50 + QQ, JQ, 1.5), rQ(14 - QQ, 30, 14 - QQ, 34, 1.5), rQ(50 + QQ, 30, 50 + QQ, 34, 1.5)],
      machineGun: QQ => {
        const WQ = 10 + QQ,
          XQ = [];
        for (const [wQ, qQ] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) XQ.push(jQ(`M${JQ+wQ*WQ} ${JQ+qQ*(WQ-5)} L${JQ+wQ*WQ} ${JQ+qQ*WQ} L${JQ+wQ*(WQ-5)} ${JQ+qQ*WQ}`, 2));
        return [...XQ, rQ(JQ, 28, JQ, 36, 1.5), rQ(28, JQ, 36, JQ, 1.5)]
      },
      launcher: () => [rQ(14, 30, 50, 30, 1.5), rQ(JQ, 24, JQ, 52, 1.5), rQ(28, 38, 36, 38, 1.5), rQ(29, 44, 35, 44, 1.5), rQ(30, 50, 34, 50, 1.5), yQ(38, 40, "100"), yQ(37, 46, "200"), IQ(1.4, 30)],
      melee: () => [jQ("M32 26 L38 32 L32 38 L26 32 Z", 1.5), IQ(1.2)],
      throwable: () => [IQ(1.6)]
    };

    function DQ(QQ) {
      let {
        tag: WQ,
        attrs: XQ,
        text: wQ
      } = QQ, qQ = `<${WQ}`;
      for (const [TQ, zQ] of Object.entries(XQ)) qQ += ` ${TQ}="${zQ}"`;
      return void 0 === wQ ? `${qQ}/>` : `${qQ}>${wQ}</${WQ}>`
    }
    class pQ {
      constructor(QQ, WQ) {
        this.api = QQ, this.localPlayerId = WQ, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = QQ => {
          this.element = QQ, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, QQ && !this.enabled && (QQ.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, FQ.getRemInPx)()))
        }, this.tokens = [PQ.k.subscribe("aimingOverlay", (QQ => {
          this.sniperOverlay = "sniper" === QQ
        })), PQ.k.subscribe("mouseState", (QQ => {
          let {
            isDown: WQ
          } = QQ;
          this.mouseDown = WQ
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      UH(QQ) {
        QQ !== this.enabled && (this.enabled = QQ, this.drawnVisible = null, QQ || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(QQ, WQ) {
        var XQ, wQ;
        if (!this.enabled) return;
        const {
          api: qQ
        } = this, TQ = qQ.isAlive(this.localPlayerId) && null !== (XQ = null === (wQ = qQ.wXQ(this.localPlayerId)) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== XQ ? XQ : null, zQ = (sQ = TQ) && gQ[sQ] || null;
        var sQ;
        if (this.setOwnsCrosshair(null !== zQ), !this.element) return;
        const FQ = qQ.getHeldGunInaccuracy(),
          PQ = null !== FQ,
          JQ = null !== zQ && !this.sniperOverlay && qQ.isCrosshairShown();
        if (JQ !== this.drawnVisible && (this.drawnVisible = JQ, this.element.style.display = JQ ? "block" : "none"), !JQ) return;
        const rQ = PQ ? function(QQ) {
            return "launcher" === QQ || "melee" === QQ || "throwable" === QQ ? "none" : "shotgun" === QQ ? "cone" : "offset"
          }(zQ) : "none",
          IQ = null !== FQ && void 0 !== FQ ? FQ : 0;
        "cone" === rQ ? this.drawCone(zQ, this.coneRadiusVh(IQ, WQ) * this.gapPerVh, QQ) : (this.coneDrawn = !1, this.draw(zQ, "none" === rQ ? 2 : this.offsetGap(IQ)));
        const jQ = !PQ && this.mouseDown;
        jQ !== this.drawnPressed && (this.drawnPressed = jQ, this.element.classList.toggle("Pressed", jQ))
      }
      dispose() {
        for (const QQ of this.tokens) PQ.k.unsubscribe(QQ);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(QQ, WQ) {
        var XQ, wQ;
        QQ !== this.drawnFamily ? (this.drawnFamily = QQ, this.drawnGap = WQ, this.element.innerHTML = function(QQ, WQ) {
          return `<svg viewBox="0 0 64 64">${VQ[QQ](WQ).map(DQ).join("")}</svg>`
        }(QQ, WQ), this.shapes = Array.from(null !== (XQ = null === (wQ = this.element.firstElementChild) || void 0 === wQ ? void 0 : wQ.children) && void 0 !== XQ ? XQ : [])) : WQ !== this.drawnGap && (this.drawnGap = WQ, function(QQ, WQ, XQ) {
          const wQ = VQ[WQ](XQ);
          for (let qQ = 0; qQ < wQ.length; qQ++)
            for (const [WQ, XQ] of Object.entries(wQ[qQ].attrs)) {
              const wQ = String(XQ);
              QQ[qQ].getAttribute(WQ) !== wQ && QQ[qQ].setAttribute(WQ, wQ)
            }
        }(this.shapes, QQ, WQ))
      }
      drawCone(QQ, WQ, XQ) {
        QQ === this.drawnFamily && this.coneDrawn ? this.shownRadius += (WQ - this.shownRadius) * (1 - Math.exp(-XQ / 80)) : this.shownRadius = WQ, this.coneDrawn = !0, this.draw(QQ, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(QQ, WQ) {
        if (!(WQ > 0)) return 1;
        const XQ = QQ * zQ.g / 2;
        return Math.max(50 * Math.tan(XQ) / WQ, 1)
      }
      offsetGap(QQ) {
        const WQ = 2 + ((0, sQ.i)(QQ) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * WQ) / 2)
      }
      setOwnsCrosshair(QQ) {
        QQ !== this.ownsCrosshair && (this.ownsCrosshair = QQ, document.body.classList.toggle("FrontlineCustomCrosshair", QQ))
      }
    }
    const GQ = "FrontlineCustomDamage",
      UQ = .45,
      bQ = .2;
    class vQ {
      constructor(QQ, WQ) {
        this.api = QQ, this.localPlayerId = WQ, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.AQ = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = QQ => {
          var WQ, XQ;
          this.clearHits(), this.root = QQ, this.lowLayer = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.querySelector(".FrontlineDamageLow")) && void 0 !== WQ ? WQ : null, this.arcLayer = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.querySelector(".FrontlineDamageArcs")) && void 0 !== XQ ? XQ : null, this.showRoot(), this.drawLow()
        }, this.token = PQ.k.subscribe("damagedByOtherPlayer", (QQ => {
          let {
            direction: WQ,
            iQ: XQ
          } = QQ;
          this.onHurt(WQ, XQ)
        })), this.syncHealth(), document.body.classList.add(GQ)
      }
      UH(QQ) {
        QQ !== this.enabled && (this.enabled = QQ, document.body.classList.toggle(GQ, QQ), QQ || this.clearHits(), this.showRoot())
      }
      frame(QQ) {
        this.syncHealth(), this.cameraHeading = QQ;
        for (const WQ of this.arcs) this.drawArcAngle(WQ)
      }
      dispose() {
        PQ.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(GQ)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const QQ = this.api.getClientOption(this.localPlayerId, "_health"),
          WQ = this.api.getClientOption(this.localPlayerId, "_shield"),
          XQ = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(QQ, this.readHealth) && Object.is(WQ, this.readShield) && Object.is(XQ, this.readMaxHealth)) return;
        if (this.readHealth = QQ, this.readShield = WQ, this.readMaxHealth = XQ, null === QQ || void 0 === QQ || !XQ) return this.lastHealthPool = null, this.maxHealth = null, this.AQ = 1, this.dead = !1, void this.drawLow();
        const wQ = QQ + (null !== WQ && void 0 !== WQ ? WQ : 0);
        if (null !== this.lastHealthPool && wQ < this.lastHealthPool) {
          const QQ = performance.now(),
            WQ = (this.lastHealthPool - wQ) / XQ;
          this.lastDrop = QQ - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + WQ,
            at: this.lastDrop.at
          } : {
            frac: WQ,
            at: QQ
          }
        }
        this.dead = QQ <= 0, this.dead && this.clearHits(), this.lastHealthPool = wQ, this.maxHealth = XQ, this.AQ = QQ > 0 ? QQ / XQ : 1, this.drawLow()
      }
      onHurt(QQ, WQ) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const XQ = Math.min(1, this.takeDamageFrac(WQ) / .3);
        null !== QQ && this.showArc(QQ, XQ), this.flashEdge(null === QQ ? null : QQ - this.cameraHeading, .4 + .6 * XQ)
      }
      takeDamageFrac(QQ) {
        if (void 0 !== QQ && this.maxHealth) return QQ / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: WQ
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, WQ
      }
      drawLow() {
        if (!this.lowLayer) return;
        const QQ = HQ((UQ - this.AQ) / .25),
          WQ = HQ((bQ - this.AQ) / .15000000000000002),
          XQ = this.AQ < UQ;
        this.lowLayer.classList.toggle("Active", XQ), this.lowLayer.classList.toggle("Critical", this.AQ < bQ), this.lowLayer.style.opacity = String(XQ ? .55 + .3 * QQ + .15 * WQ : 0)
      }
      showArc(QQ, WQ) {
        var XQ, wQ;
        if (!this.arcLayer) return;
        let qQ = this.arcs.find((WQ => dQ(WQ.direction, QQ) < .6));
        if (!qQ) {
          const WQ = document.createElement("div");
          WQ.className = "FrontlineDamageArc", WQ.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(WQ), qQ = {
            element: WQ,
            direction: QQ,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(qQ)
        }
        qQ.direction = QQ, this.drawArcAngle(qQ);
        const TQ = qQ.fade ? Number(getComputedStyle(qQ.element).opacity) : 0;
        null === (XQ = qQ.fade) || void 0 === XQ || XQ.cancel(), null === (wQ = qQ.pop) || void 0 === wQ || wQ.cancel(), qQ.element.style.opacity = "1";
        const zQ = qQ.element.animate([{
          opacity: TQ
        }, {
          opacity: 1
        }], 144);
        qQ.fade = zQ, qQ.pop = qQ.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * WQ
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const sQ = qQ;
        zQ.onfinish = () => {
          if (sQ.fade !== zQ) return;
          const QQ = sQ.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          QQ.startTime = zQ.startTime, sQ.fade = QQ, QQ.onfinish = () => {
            sQ.fade === QQ && (sQ.element.remove(), aQ(this.arcs, sQ))
          }
        }
      }
      drawArcAngle(QQ) {
        const WQ = QQ.direction - this.cameraHeading;
        (null === QQ.drawnAngle || Math.abs(WQ - QQ.drawnAngle) > .005) && (QQ.drawnAngle = WQ, QQ.element.style.rotate = `${WQ}rad`)
      }
      flashEdge(QQ, WQ) {
        var XQ, wQ, qQ;
        if (!this.root) return;
        let TQ = this.flashes.find((WQ => null === WQ.angle || null === QQ ? WQ.angle === QQ : dQ(WQ.angle, QQ) < .5));
        if (!TQ) {
          const WQ = document.createElement("div");
          WQ.className = "FrontlineDamageFlash";
          const XQ = WQ.appendChild(document.createElement("div"));
          XQ.className = "FrontlineDamageFlashGlow", this.root.insertBefore(WQ, this.arcLayer), TQ = {
            element: WQ,
            glow: XQ,
            angle: QQ,
            level: 0,
            animation: null
          }, this.flashes.push(TQ)
        }
        const zQ = null === (XQ = TQ.animation) || void 0 === XQ || null === (wQ = XQ.effect) || void 0 === wQ ? void 0 : wQ.getComputedTiming().progress,
          sQ = null === zQ || void 0 === zQ ? 0 : TQ.level * (1 - zQ);
        TQ.level = Math.min(1, Math.max(WQ, sQ + .6 * WQ)), TQ.angle = QQ;
        const {
          x: FQ,
          y: PQ,
          rx: gQ,
          ry: JQ
        } = function(QQ, WQ) {
          const XQ = window.innerWidth,
            wQ = window.innerHeight;
          if (null === QQ) return {
            x: XQ / 2,
            y: wQ / 2,
            rx: 0,
            ry: 0
          };
          const qQ = Math.sin(QQ),
            TQ = -Math.cos(QQ),
            zQ = XQ / 2 / Math.max(1e-6, Math.abs(qQ)),
            sQ = wQ / 2 / Math.max(1e-6, Math.abs(TQ)),
            FQ = Math.min(zQ, sQ),
            PQ = Math.round(XQ / 2 + qQ * FQ),
            gQ = Math.round(wQ / 2 + TQ * FQ),
            JQ = wQ / 100 * (.85 + .25 * WQ),
            rQ = zQ <= sQ,
            IQ = Math.round((rQ ? 30 : 74) * JQ),
            jQ = Math.round((rQ ? 58 : 26) * JQ);
          return {
            x: PQ,
            y: gQ,
            rx: IQ,
            ry: jQ
          }
        }(QQ, TQ.level), {
          style: rQ
        } = TQ.glow;
        TQ.glow.classList.toggle("Everywhere", null === QQ), rQ.setProperty("--glowX", `${FQ}px`), rQ.setProperty("--glowY", `${PQ}px`), rQ.setProperty("--glowRx", `${gQ}px`), rQ.setProperty("--glowRy", `${JQ}px`), TQ.element.style.transformOrigin = `${FQ}px ${PQ}px`, null === (qQ = TQ.animation) || void 0 === qQ || qQ.cancel();
        const IQ = TQ.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: TQ.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * TQ.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * TQ.level
        });
        TQ.animation = IQ;
        const jQ = TQ;
        IQ.onfinish = () => {
          jQ.animation === IQ && (jQ.element.remove(), aQ(this.flashes, jQ))
        }
      }
      clearHits() {
        for (const wQ of this.arcs) {
          var QQ, WQ;
          null === (QQ = wQ.fade) || void 0 === QQ || QQ.cancel(), wQ.fade = null, null === (WQ = wQ.pop) || void 0 === WQ || WQ.cancel(), wQ.element.remove()
        }
        this.arcs.length = 0;
        for (const wQ of this.flashes) {
          var XQ;
          null === (XQ = wQ.animation) || void 0 === XQ || XQ.cancel(), wQ.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function dQ(QQ, WQ) {
      return Math.abs(Math.atan2(Math.sin(QQ - WQ), Math.cos(QQ - WQ)))
    }

    function HQ(QQ) {
      return Math.max(0, Math.min(1, QQ))
    }

    function aQ(QQ, WQ) {
      const XQ = QQ.indexOf(WQ); - 1 !== XQ && QQ.splice(XQ, 1)
    }
    var lQ = XQ(1081),
      hQ = XQ.n(lQ),
      iQ = XQ(36891),
      cQ = XQ(36987),
      AQ = XQ(1226),
      RQ = XQ(1498);
    const EQ = "frontlineHudChanged",
      CQ = "frontlineScoreboardChanged";
    class uQ {
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
      gj(QQ) {
        this.wire = QQ, PQ.k.mB(EQ, QQ, !0)
      }
      receiveScoreboard(QQ) {
        let WQ = "scoreboard" === QQ[0] ? performance.now() + QQ[5] : 0;
        const XQ = this.scoreboard.endsAt;
        0 !== WQ && 0 !== XQ && Math.abs(WQ - XQ) < 1e3 && (WQ = XQ), this.scoreboard = {
          wire: QQ,
          endsAt: WQ
        }, PQ.k.mB(CQ, this.scoreboard, !0)
      }
    }
    var LQ = XQ(1145);
    const kQ = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function fQ(QQ) {
      const [WQ, XQ] = (0, qQ.useState)((() => (QQ - performance.now()) / 1e3));
      return (0, qQ.useEffect)((() => {
        if (0 === QQ) return;
        const WQ = () => {
          XQ((QQ - performance.now()) / 1e3)
        };
        WQ();
        const wQ = window.setInterval(WQ, 250);
        return () => {
          window.clearInterval(wQ)
        }
      }), [QQ]), WQ
    }

    function SQ(QQ) {
      let {
        className: WQ,
        point: XQ
      } = QQ;
      const [wQ, qQ, TQ, zQ, sQ, FQ] = XQ;
      return (0, LQ.jsxs)("div", {
        className: hQ()(WQ, `Owner-${qQ||"None"}`, `Leader-${zQ||"None"}`, {
          Contested: sQ,
          Here: FQ
        }),
        children: [(0, LQ.jsx)("span", {
          className: "FrontlinePointLetter",
          children: wQ
        }), (0, LQ.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${TQ}%`
          }
        })]
      })
    }
    const tQ = (0, qQ.memo)((function(QQ) {
        let {
          points: WQ,
          markers: XQ
        } = QQ;
        const {
          t: wQ
        } = (0, AQ.C)();
        return WQ ? (0, LQ.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: WQ.map((QQ => {
            const [WQ, , , , , , , qQ] = QQ;
            return (0, LQ.jsxs)("div", {
              ref: XQ.bindMarker(WQ),
              className: "FrontlinePointMarker",
              children: [(0, LQ.jsx)(SQ, {
                className: "FrontlinePointMarkerTile",
                point: QQ
              }), (0, LQ.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [qQ && (0, LQ.jsx)("span", {
                  className: hQ()("FrontlinePointMarkerHomeTurf", `Team-${qQ}`),
                  children: wQ("frontlineHud:homeTurf", {
                    team: wQ(kQ[qQ])
                  })
                }), (0, LQ.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, WQ)
          }))
        }) : null
      })),
      oQ = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      eQ = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function nQ(QQ) {
      let {
        hud: WQ,
        crosshair: XQ,
        damage: wQ,
        markers: qQ
      } = QQ;
      const TQ = (0, RQ.j)(EQ, WQ.getWire()),
        zQ = (0, RQ.j)(CQ, WQ.getScoreboard());
      return (0, LQ.jsxs)(LQ.Fragment, {
        children: [(0, LQ.jsx)(xQ, {
          damage: wQ
        }), (0, LQ.jsx)(tQ, {
          points: "scoreboard" === zQ.wire[0] ? zQ.wire[6] : null,
          markers: qQ
        }), (0, LQ.jsx)(NQ, {
          view: zQ
        }), (0, LQ.jsx)("div", {
          className: "FrontlineReticle",
          ref: XQ.bindElement
        }), (0, LQ.jsx)(iQ.g, {
          children: (0, LQ.jsx)(YQ, {
            wire: TQ
          })
        })]
      })
    }
    const xQ = (0, qQ.memo)((function(QQ) {
        let {
          damage: WQ
        } = QQ;
        return (0, LQ.jsxs)("div", {
          className: "FrontlineDamage",
          ref: WQ.bindElement,
          children: [(0, LQ.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, LQ.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, LQ.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      YQ = (0, qQ.memo)((function(QQ) {
        let {
          wire: WQ
        } = QQ;
        const {
          t: XQ
        } = (0, AQ.C)();
        if ("capture" === WQ[0]) {
          const [, QQ, wQ, qQ, TQ, zQ, sQ] = WQ, FQ = Math.round(qQ / 100 * 24);
          return (0, LQ.jsxs)("div", {
            className: hQ()("FrontlinePlate", `Status-${wQ}`, `Leader-${TQ||"None"}`),
            children: [(0, LQ.jsx)(mQ, {}), (0, LQ.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, LQ.jsx)("span", {
                className: "FrontlineObjective",
                children: QQ
              }), (0, LQ.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, LQ.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: XQ("frontlineHud:objective", {
                    point: QQ,
                    friendly: zQ,
                    enemy: sQ
                  })
                }), (0, LQ.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: XQ(oQ[wQ])
                })]
              }), (0, LQ.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(qQ).padStart(3, "0"), (0, LQ.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, LQ.jsx)(OQ, {
              segments: 24,
              lit: FQ
            })]
          })
        }
        if ("alert" === WQ[0]) {
          const [, QQ, wQ, qQ] = WQ;
          return (0, LQ.jsxs)("div", {
            className: hQ()("FrontlinePlate", "FrontlineAlert", `Tone-${qQ}`),
            children: [(0, LQ.jsx)(mQ, {}), (0, LQ.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: XQ(eQ[QQ])
            }), (0, LQ.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: wQ
            })]
          })
        }
        return null
      })),
      NQ = (0, qQ.memo)((function(QQ) {
        let {
          view: WQ
        } = QQ;
        const {
          t: XQ
        } = (0, AQ.C)(), wQ = (0, qQ.useRef)(null), TQ = function(QQ, WQ) {
          const [XQ, wQ] = (0, qQ.useState)(!1);
          return (0, qQ.useLayoutEffect)((() => {
            const WQ = QQ.current;
            if (!WQ) return;
            const XQ = document.querySelector(`.${cQ.h}`),
              qQ = document.querySelector(`.${cQ.i}`),
              TQ = () => {
                var QQ;
                const TQ = WQ.querySelector(".FrontlineTeamTrack"),
                  zQ = (0, FQ.getRemInPx)(),
                  sQ = WQ.getBoundingClientRect().width - 2 * (null !== (QQ = null === TQ || void 0 === TQ ? void 0 : TQ.getBoundingClientRect().width) && void 0 !== QQ ? QQ : 0),
                  PQ = window.innerWidth / 2,
                  gQ = XQ ? XQ.getBoundingClientRect().right : 0,
                  JQ = qQ ? qQ.getBoundingClientRect().left : window.innerWidth,
                  rQ = Math.min(PQ - gQ, JQ - PQ) - cQ.e - sQ / 2,
                  IQ = rQ < 6 * zQ,
                  jQ = IQ ? (window.innerWidth - sQ) / 2 - cQ.e : rQ;
                WQ.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(jQ,14*zQ)))}px`), wQ(IQ)
              };
            TQ();
            const zQ = new ResizeObserver(TQ);
            for (const QQ of [WQ, XQ, qQ]) QQ && zQ.observe(QQ);
            return window.addEventListener("resize", TQ), () => {
              zQ.disconnect(), window.removeEventListener("resize", TQ)
            }
          }), [QQ, WQ]), XQ
        }(wQ, "scoreboard" === WQ.wire[0]);
        if ("scoreboard" !== WQ.wire[0]) return null;
        const [, zQ, sQ, PQ, gQ, , JQ] = WQ.wire, rQ = "Red" === zQ ? "Blue" : "Red";
        return (0, LQ.jsxs)("div", {
          className: hQ()("FrontlineScoreboardContainer", {
            Below: TQ
          }),
          children: [(0, LQ.jsxs)("div", {
            ref: wQ,
            className: "FrontlineScoreboard",
            children: [(0, LQ.jsx)(mQ, {}), (0, LQ.jsx)(ZQ, {
              team: zQ,
              tickets: sQ,
              goal: gQ,
              side: "Friendly"
            }), (0, LQ.jsx)("div", {
              className: "FrontlinePoints",
              children: JQ.map((QQ => (0, LQ.jsx)(SQ, {
                className: "FrontlinePoint",
                point: QQ
              }, QQ[0])))
            }), (0, LQ.jsx)(ZQ, {
              team: rQ,
              tickets: PQ,
              goal: gQ,
              side: "Enemy"
            })]
          }), (0, LQ.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, LQ.jsx)(KQ, {
              endsAt: WQ.endsAt
            }), (0, LQ.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: XQ("frontlineHud:ticketGoal", {
                goal: gQ
              })
            })]
          })]
        })
      }));

    function ZQ(QQ) {
      let {
        team: WQ,
        tickets: XQ,
        goal: wQ,
        side: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, AQ.C)(), zQ = String(XQ).padStart(3, "0"), sQ = zQ.search(/[1-9]/), FQ = -1 === sQ ? zQ : zQ.slice(0, sQ), PQ = Math.min(20, Math.floor(XQ / wQ * 20));
      return (0, LQ.jsxs)("div", {
        className: hQ()("FrontlineTeamScore", qQ, `Team-${WQ}`),
        children: [(0, LQ.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, LQ.jsx)("span", {
            className: "Lead",
            children: FQ
          }), -1 !== sQ && zQ.slice(sQ)]
        }), (0, LQ.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, LQ.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: TQ(kQ[WQ])
          }), (0, LQ.jsx)(OQ, {
            segments: 20,
            lit: PQ
          })]
        })]
      })
    }

    function OQ(QQ) {
      let {
        segments: WQ,
        lit: XQ
      } = QQ;
      return (0, LQ.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: WQ
        }, ((QQ, WQ) => (0, LQ.jsx)("i", {
          className: hQ()({
            Lit: WQ < XQ
          })
        }, WQ)))
      })
    }

    function KQ(QQ) {
      let {
        endsAt: WQ
      } = QQ;
      const XQ = Math.max(0, Math.ceil(fQ(WQ)));
      return (0, LQ.jsxs)("div", {
        className: hQ()("FrontlineClock", {
          Urgent: XQ <= 60
        }),
        children: [Math.floor(XQ / 60), ":", String(XQ % 60).padStart(2, "0")]
      })
    }

    function mQ() {
      return (0, LQ.jsxs)(LQ.Fragment, {
        children: [(0, LQ.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, LQ.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var MQ = XQ(36982),
      QW = XQ(1285),
      WW = XQ(38777),
      XW = XQ(38816);
    class wW {
      constructor(QQ) {
        var WQ;
        this.hud = QQ, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.zj = !1, this.cV = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.cV), null === (WQ = window.visualViewport) || void 0 === WQ || WQ.addEventListener("resize", this.cV)
      }
      bindMarker(QQ) {
        let WQ = this.refs.get(QQ);
        return WQ || (WQ = WQ => {
          var XQ;
          null === (XQ = this.markers.get(QQ)) || void 0 === XQ || XQ.stopObserving(), this.markers.delete(QQ), WQ && !this.zj && this.markers.set(QQ, this.mount(WQ))
        }, this.refs.set(QQ, WQ)), WQ
      }
      frame(QQ, WQ) {
        this.render = QQ;
        const XQ = this.hud.getScoreboard().wire;
        if ("scoreboard" === XQ[0] && 0 !== this.markers.size)
          for (const [wQ, , , , , , qQ] of XQ[6]) {
            const QQ = this.markers.get(wQ);
            QQ && qQ && (QQ.target ??= [0, 0, 0], QQ.target[0] = qQ[0], QQ.target[1] = qQ[1] + 2.5, QQ.target[2] = qQ[2], this.place(QQ), this.AW(QQ, WQ && Math.hypot(qQ[0] - WQ[0], qQ[1] - WQ[1], qQ[2] - WQ[2])))
          }
      }
      dispose() {
        var QQ;
        this.zj = !0, window.removeEventListener("resize", this.cV), null === (QQ = window.visualViewport) || void 0 === QQ || QQ.removeEventListener("resize", this.cV);
        for (const WQ of this.markers.values()) WQ.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(QQ) {
        const {
          render: WQ,
          viewport: XQ
        } = this;
        if (!WQ || !QQ.target) return;
        const wQ = (50 - WQ.screenBandPct.y) / 100 * XQ.height,
          qQ = {
            x: QQ.halfSize.width + 8,
            top: QQ.halfSize.height + 8,
            bottom: QQ.halfSize.height + QQ.labelsBelow + wQ
          },
          TQ = WQ.projectWorldPosToViewport(QQ.target),
          zQ = null !== TQ && void 0 !== TQ ? TQ : WQ.projectWorldPosToScreenPos(QQ.target),
          sQ = (0, XW.c)({
            x: zQ.x,
            y: zQ.y,
            text: TQ
          }, qQ, XQ);
        (0, WW.d)(QQ.root, Math.round(100 * sQ.x) / 100, Math.round(100 * sQ.y) / 100)
      }
      AW(QQ, WQ) {
        if (null === WQ) return void(null !== QQ.metres && (QQ.metres = null, QQ.distance.textContent = ""));
        const XQ = Date.now();
        (null === QQ.metres || (0, MQ.e)(WQ, QQ.metres, QQ.metresShownAt)) && (QQ.metres = Math.round(WQ), QQ.metresShownAt = XQ, QQ.distance.textContent = (0, AQ.x)(QW.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(QQ.metres)
        }))
      }
      mount(QQ) {
        const WQ = {
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
          XQ = QQ.querySelector(".FrontlinePointMarkerLabels"),
          wQ = new ResizeObserver((() => {
            WQ.halfSize = {
              width: Math.max(QQ.offsetWidth, XQ.offsetWidth) / 2,
              height: QQ.offsetHeight / 2
            }, WQ.labelsBelow = XQ.offsetTop + XQ.offsetHeight - QQ.offsetHeight, this.place(WQ)
          }));
        return wQ.observe(QQ, {
          box: "border-box"
        }), wQ.observe(XQ, {
          box: "border-box"
        }), WQ.stopObserving = () => {
          wQ.disconnect()
        }, WQ
      }
    }
    var qW = XQ(6834),
      TW = XQ(2780);
    const zW = "frontlineRoundEndChanged";
    class sW {
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
      gj(QQ) {
        const WQ = "roundEnd" === QQ[0] ? performance.now() + QQ[5] : 0;
        this.view = {
          wire: QQ,
          key: this.view.key + 1,
          endsAt: WQ
        }, PQ.k.mB(zW, this.view, !0)
      }
    }
    const FW = (0, qQ.lazy)((() => (0, TW.b)(Promise.all([XQ.e(243), XQ.e(207)]).then((() => XQ(42004))), (QQ => QQ.FrontlineMvpLineup)))),
      PW = [4800, 4e3, 3200],
      gW = [1, 0, 2],
      JW = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      rW = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function IW(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, RQ.j)(zW, WQ.getView()),
        wQ = fQ(XQ.endsAt);
      return "roundEnd" !== XQ.wire[0] || 1e3 * wQ < -2e3 ? null : (0, LQ.jsx)(jW, {
        wire: XQ.wire,
        secondsLeft: Math.max(0, Math.ceil(wQ))
      }, XQ.key)
    }
    const jW = (0, qQ.memo)((function(QQ) {
      let {
        wire: WQ,
        secondsLeft: XQ
      } = QQ;
      const {
        t: TQ
      } = (0, AQ.C)(), [, zQ, sQ, FQ, PQ, , gQ, JQ] = WQ, rQ = (0, qQ.useMemo)((() => gW.filter((QQ => QQ < JQ.length))), [JQ]), IQ = (0, qQ.useMemo)((() => rQ.map((QQ => {
        const [, , , , , WQ, XQ] = JQ[QQ];
        return {
          cosmetics: wQ.map(((QQ, XQ) => [QQ, WQ[XQ]])),
          size: 0 === QQ ? 1.15 : .85,
          heldGun: {
            name: XQ,
            aimed: 0 === QQ
          },
          showAfterMs: PW[QQ]
        }
      }))), [JQ, rQ]);
      return (0, LQ.jsxs)("div", {
        className: hQ()("FrontlineRoundEnd", `Result-${zQ}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, LQ.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, LQ.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, LQ.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, LQ.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, LQ.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (jQ = TQ(JW[zQ]), /\p{Script=Arabic}/u.test(jQ) ? [jQ] : (0, qW.c)(jQ)).map(((QQ, WQ) => (0, LQ.jsx)("span", {
              style: {
                "--letter": WQ
              },
              children: QQ
            }, WQ)))]
          }), (0, LQ.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [sQ && "victory" === zQ && (0, LQ.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: TQ("frontlineRoundEnd:comeback")
            }), (0, LQ.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, LQ.jsx)("b", {
                className: "Friendly",
                children: FQ
              }), " \u2013 ", (0, LQ.jsx)("b", {
                className: "Enemy",
                children: PQ
              })]
            })]
          })]
        }), rQ.length > 0 && (0, LQ.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": rQ.length
          },
          children: [(0, LQ.jsx)(qQ.Suspense, {
            fallback: null,
            children: (0, LQ.jsx)(FW, {
              className: "FrontlineRoundEndLineup",
              players: IQ
            })
          }), rQ.map((QQ => (0, LQ.jsx)(BW, {
            mvp: JQ[QQ],
            place: QQ
          }, QQ)))]
        }), (0, LQ.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: TQ("frontlineRoundEnd:nextFront", {
            map: gQ,
            seconds: String(XQ)
          })
        })]
      });
      var jQ
    }));

    function BW(QQ) {
      let {
        mvp: WQ,
        place: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, AQ.C)(), [qQ, TQ, zQ, sQ, FQ] = WQ, [PQ, gQ] = wQ(function(QQ, WQ) {
        return 1 === WQ && "damage" !== QQ ? `frontlineRoundEnd:${QQ}One` : `frontlineRoundEnd:${QQ}`
      }(zQ, sQ), {
        name: "\0",
        count: sQ.toLocaleString()
      }).split("\0");
      return (0, LQ.jsxs)("div", {
        className: hQ()("FrontlineMvpCard", `Place-${XQ+1}`, `Team-${TQ}`),
        style: {
          "--revealMs": `${PW[XQ]}ms`
        },
        children: [(0, LQ.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, LQ.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, LQ.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: wQ(rW[XQ])
        }), (0, LQ.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [PQ, (0, LQ.jsx)("span", {
            className: "FrontlineMvpName",
            children: qQ
          }), gQ]
        }), (0, LQ.jsx)("div", {
          className: "FrontlineMvpKit",
          children: FQ
        })]
      })
    }
    const yW = function(QQ, WQ, XQ, wQ) {
      let {
        localPlayerId: zQ
      } = wQ;
      const sQ = new uQ,
        FQ = new sW;
      let PQ = null,
        gQ = null,
        JQ = null,
        rQ = null,
        IQ = null,
        jQ = [!1, !1];
      const BQ = () => {
        var QQ, WQ;
        const [XQ, wQ] = jQ;
        null === (QQ = gQ) || void 0 === QQ || QQ.UH(!XQ), null === (WQ = JQ) || void 0 === WQ || WQ.UH(!wQ)
      };
      return {
        onCreate: QQ => {
          PQ = QQ, gQ = new pQ(QQ, zQ), JQ = new vQ(QQ, zQ), rQ = new wW(sQ), BQ(), IQ = (0, TQ.A)((0, qQ.createElement)(qQ.Fragment, null, (0, qQ.createElement)(nQ, {
            hud: sQ,
            crosshair: gQ,
            damage: JQ,
            markers: rQ
          }), (0, qQ.createElement)(IW, {
            controller: FQ
          })))
        },
        onClose: () => {
          var QQ, WQ, XQ, wQ;
          null === (QQ = IQ) || void 0 === QQ || QQ(), null === (WQ = gQ) || void 0 === WQ || WQ.dispose(), gQ = null, null === (XQ = JQ) || void 0 === XQ || XQ.dispose(), JQ = null, null === (wQ = rQ) || void 0 === wQ || wQ.dispose(), rQ = null, PQ = null
        },
        onAfterRender: (QQ, WQ) => {
          var XQ, wQ, qQ, TQ;
          null === (XQ = gQ) || void 0 === XQ || XQ.frame(QQ, WQ.tanHalfFovY), null === (wQ = JQ) || void 0 === wQ || wQ.frame(WQ.cameraHeading), null === (qQ = rQ) || void 0 === qQ || qQ.frame(WQ, null !== (TQ = PQ) && void 0 !== TQ && TQ.checkValid(zQ) ? PQ.xV(zQ) : null)
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          "frontlineHud" === QQ ? sQ.gj(WQ) : "frontlineScoreboard" === QQ ? sQ.receiveScoreboard(WQ) : "frontlineRoundEnd" === QQ ? FQ.gj(WQ) : "frontlinePrefs" === QQ && (jQ = WQ, BQ())
        }
      }
    }
  },
  6834: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ
    });
    const wQ = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function qQ(QQ) {
      return null === wQ ? Array.from(QQ) : Array.from(wQ.segment(QQ), (QQ => {
        let {
          segment: WQ
        } = QQ;
        return WQ
      }))
    }
  },
  38777: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      h: () => TQ
    });
    const wQ = new WeakMap;

    function qQ(QQ) {
      let WQ = wQ.get(QQ);
      return WQ || (WQ = {
        hidden: QQ.hidden,
        x: NaN,
        y: NaN
      }, wQ.set(QQ, WQ)), WQ
    }

    function TQ(QQ, WQ) {
      const XQ = qQ(QQ);
      XQ.hidden !== WQ && (XQ.hidden = WQ, QQ.hidden = WQ)
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = qQ(QQ);
      wQ.x === WQ && wQ.y === XQ || (wQ.x = WQ, wQ.y = XQ, QQ.style.translate = `${WQ}vw ${XQ}vh`)
    }
  },
  37343: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = {
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