export const id = 17;
export const ids = [17];
export const modules = {
  36616: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      g: () => KS,
      j: () => kS,
      k: () => fS
    });
    var tS = gS(34223),
      bS = gS(36624),
      XS = gS(36632),
      xS = gS(8920),
      NS = gS(1522),
      qS = gS(64),
      uS = gS(77),
      IS = gS(1181);

    function fS() {
      var SS;
      return (0, NS.i)(bS.e, (0, bS.s)()), (0, IS.jsx)(IS.Fragment, {
        children: null === (SS = (0, bS.s)()) || void 0 === SS ? void 0 : SS.content
      })
    }

    function kS(SS) {
      var HS;
      let {
        show: gS
      } = SS;
      (0, NS.i)(bS.e, (0, bS.s)());
      const uS = null === (HS = (0, bS.s)()) || void 0 === HS ? void 0 : HS.menu;
      return (0, qS.useEffect)((() => {
        var SS;
        gS || (null === uS || void 0 === uS || null === (SS = uS.onClose) || void 0 === SS || SS.call(uS), (0, XS.s)())
      }), [gS, uS]), (0, qS.useEffect)((() => gS ? (0, xS.c)(XS.v, XS.h) : void 0), [gS]), (0, IS.jsx)(tS.b, {
        showing: gS,
        globallyUniqueKey: "clientGameMenu",
        children: null === uS || void 0 === uS ? void 0 : uS.content
      })
    }

    function aS(SS) {
      let {
        placement: HS = "bottom"
      } = SS;
      return (0, IS.jsx)("div", {
        id: `clientGameHud-${HS}`,
        style: {
          display: "contents"
        }
      })
    }

    function KS(SS) {
      let {
        children: HS,
        placement: gS = "bottom"
      } = SS;
      const [tS, bS] = (0, qS.useState)(null);
      return (0, qS.useEffect)((() => {
        bS(document.getElementById(`clientGameHud-${gS}`))
      }), [gS]), tS ? (0, uS.createPortal)(HS, tS) : null
    }
  },
  34223: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(4669),
      bS = gS(4675);

    function XS(SS) {
      let {
        children: HS,
        showing: gS,
        globallyUniqueKey: XS,
        alwaysMountChildren: xS = !1,
        doGameplayStartStopOnShow: NS = !0,
        keepsMovement: qS = !1
      } = SS;
      return (0, bS.c)(!0, gS, XS, qS), (0, tS.c)(NS, gS), gS || xS ? HS : null
    }
  },
  36710: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      f: () => xS,
      j: () => NS,
      m: () => qS
    });
    var tS = gS(64),
      bS = gS(3283);
    const XS = 8,
      xS = "InGameHeaderContainer",
      NS = "TopRightElements";

    function qS(SS) {
      const [HS] = (0, bS.d)(), [gS, qS] = (0, tS.useState)(!1);
      return (0, tS.useLayoutEffect)((() => {
        if (!SS) return;
        const HS = document.querySelector(`.${xS}`),
          gS = document.querySelector(`.${NS}`),
          tS = () => {
            const tS = SS.getBoundingClientRect(),
              bS = HS ? HS.getBoundingClientRect().right : 0,
              xS = gS ? gS.getBoundingClientRect().left : window.innerWidth,
              NS = tS.left < bS + XS,
              uS = tS.right > xS - XS;
            qS(NS || uS)
          };
        tS();
        const bS = new ResizeObserver(tS);
        return bS.observe(SS), HS && bS.observe(HS), gS && bS.observe(gS), () => {
          bS.disconnect()
        }
      }), [SS, HS]), gS
    }
  },
  36706: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    const tS = [{
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

    function bS(SS, HS, gS) {
      const bS = Math.abs(SS - HS),
        XS = Date.now() - gS;
      for (const xS of tS)
        if (SS < xS.maxDist) return bS >= xS.hardUpdateDist || XS > xS.timeBetweenSoftChecks && bS >= xS.softUpdateDist;
      return !1
    }
  },
  8920: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      c: () => bS
    });
    let tS = null;
    const bS = function(SS) {
        const HS = {
          cycle: SS,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tS = HS, () => {
          tS === HS && (tS = null)
        }
      },
      XS = () => {
        var SS;
        return null !== (SS = tS) && void 0 !== SS && SS.canCycle() ? tS.cycle : null
      }
  },
  38555: (SS, HS, gS) => {
    function tS(SS, HS, gS) {
      var tS;
      const {
        width: bS,
        height: XS
      } = gS, xS = null !== (tS = SS.text) && void 0 !== tS ? tS : SS, NS = (xS.x / 100 - .5) * bS, qS = (xS.y / 100 - .5) * XS, uS = bS / 2 - HS.x;
      if (null !== SS.text && Math.abs(NS) <= uS && qS >= HS.top - XS / 2 && qS <= XS / 2 - HS.bottom) return {
        x: xS.x,
        y: xS.y
      };
      const IS = Math.min(0 === NS ? 1 / 0 : uS / Math.abs(NS), qS > 0 ? (XS / 2 - HS.bottom) / qS : qS < 0 ? (HS.top - XS / 2) / qS : 1 / 0);
      return !Number.isFinite(IS) || IS < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + NS * IS / bS * 100,
        y: 50 + qS * IS / XS * 100
      }
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  39450: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => GH
    });
    const tS = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var bS = gS(64),
      XS = gS(36624),
      xS = gS(37063),
      NS = gS(36647),
      qS = gS(1844),
      uS = gS(31);
    const IS = {
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
    const fS = 32;

    function kS(SS, HS, gS, tS) {
      return {
        tag: "line",
        attrs: {
          x1: SS,
          y1: HS,
          x2: gS,
          y2: tS,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function aS(SS) {
      return {
        tag: "circle",
        attrs: {
          cx: fS,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fS,
          r: SS,
          class: "Fill"
        }
      }
    }

    function KS(SS, HS) {
      return {
        tag: "path",
        attrs: {
          d: SS,
          "stroke-width": HS
        }
      }
    }

    function jS(SS, HS, gS) {
      return {
        tag: "circle",
        attrs: {
          cx: fS,
          cy: fS,
          r: SS,
          "stroke-width": HS,
          class: gS
        }
      }
    }

    function GS(SS, HS, gS) {
      return {
        tag: "text",
        attrs: {
          x: SS,
          y: HS,
          class: "Fill Label"
        },
        text: gS
      }
    }
    const CS = {
      pistol: SS => [kS(fS, fS - SS - 5, fS, fS - SS), kS(fS - SS - 5, fS, fS - SS, fS), kS(fS + SS, fS, fS + SS + 5, fS), aS(1.4)],
      rifle: SS => [kS(fS, fS - SS - 8, fS, fS - SS), kS(fS, fS + SS, fS, fS + SS + 8), kS(fS - SS - 8, fS, fS - SS, fS), kS(fS + SS, fS, fS + SS + 8, fS), aS(1)],
      smg: SS => {
        const HS = Math.PI / 2,
          gS = [];
        for (let xS = 0; xS < 4; xS++) gS.push((bS = xS * HS + .35, XS = (xS + 1) * HS - .35, KS(`M${fS+(tS=6+SS)*Math.cos(bS)} ${fS+tS*Math.sin(bS)} A${tS} ${tS} 0 0 1 ${fS+tS*Math.cos(XS)} ${fS+tS*Math.sin(XS)}`, 2)));
        var tS, bS, XS;
        return [...gS, aS(1.4)]
      },
      shotgun: SS => [jS(SS, 3, "Ring Outline"), jS(SS, 1.5, "Ring")],
      marksman: SS => [KS(`M${26-SS/2} ${39+SS/2} L32 33 L${38+SS/2} ${39+SS/2}`, 2), kS(14 - SS, fS, 24 - SS, fS, 1.5), kS(40 + SS, fS, 50 + SS, fS, 1.5), kS(14 - SS, 30, 14 - SS, 34, 1.5), kS(50 + SS, 30, 50 + SS, 34, 1.5)],
      machineGun: SS => {
        const HS = 10 + SS,
          gS = [];
        for (const [tS, bS] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) gS.push(KS(`M${fS+tS*HS} ${fS+bS*(HS-5)} L${fS+tS*HS} ${fS+bS*HS} L${fS+tS*(HS-5)} ${fS+bS*HS}`, 2));
        return [...gS, kS(fS, 28, fS, 36, 1.5), kS(28, fS, 36, fS, 1.5)]
      },
      launcher: () => [kS(14, 30, 50, 30, 1.5), kS(fS, 24, fS, 52, 1.5), kS(28, 38, 36, 38, 1.5), kS(29, 44, 35, 44, 1.5), kS(30, 50, 34, 50, 1.5), GS(38, 40, "100"), GS(37, 46, "200"), aS(1.4, 30)],
      melee: () => [KS("M32 26 L38 32 L32 38 L26 32 Z", 1.5), aS(1.2)],
      throwable: () => [aS(1.6)]
    };

    function nS(SS) {
      let {
        tag: HS,
        attrs: gS,
        text: tS
      } = SS, bS = `<${HS}`;
      for (const [XS, xS] of Object.entries(gS)) bS += ` ${XS}="${xS}"`;
      return void 0 === tS ? `${bS}/>` : `${bS}>${tS}</${HS}>`
    }
    class PS {
      constructor(SS, HS) {
        this.api = SS, this.localPlayerId = HS, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = SS => {
          this.element = SS, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, SS && !this.enabled && (SS.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, qS.getRemInPx)()))
        }, this.tokens = [uS.k.subscribe("aimingOverlay", (SS => {
          this.sniperOverlay = "sniper" === SS
        })), uS.k.subscribe("mouseState", (SS => {
          let {
            isDown: HS
          } = SS;
          this.mouseDown = HS
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      MJ(SS) {
        SS !== this.enabled && (this.enabled = SS, this.drawnVisible = null, SS || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(SS, HS) {
        var gS, tS;
        if (!this.enabled) return;
        const {
          api: bS
        } = this, XS = bS.isAlive(this.localPlayerId) && null !== (gS = null === (tS = bS.AHS(this.localPlayerId)) || void 0 === tS ? void 0 : tS.name) && void 0 !== gS ? gS : null, xS = (NS = XS) && IS[NS] || null;
        var NS;
        if (this.setOwnsCrosshair(null !== xS), !this.element) return;
        const qS = bS.getHeldGunInaccuracy(),
          uS = null !== qS,
          fS = null !== xS && !this.sniperOverlay && bS.isCrosshairShown();
        if (fS !== this.drawnVisible && (this.drawnVisible = fS, this.element.style.display = fS ? "block" : "none"), !fS) return;
        const kS = uS ? function(SS) {
            return "launcher" === SS || "melee" === SS || "throwable" === SS ? "none" : "shotgun" === SS ? "cone" : "offset"
          }(xS) : "none",
          aS = null !== qS && void 0 !== qS ? qS : 0;
        "cone" === kS ? this.drawCone(xS, this.coneRadiusVh(aS, HS) * this.gapPerVh, SS) : (this.coneDrawn = !1, this.draw(xS, "none" === kS ? 2 : this.offsetGap(aS)));
        const KS = !uS && this.mouseDown;
        KS !== this.drawnPressed && (this.drawnPressed = KS, this.element.classList.toggle("Pressed", KS))
      }
      dispose() {
        for (const SS of this.tokens) uS.k.unsubscribe(SS);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(SS, HS) {
        var gS, tS;
        SS !== this.drawnFamily ? (this.drawnFamily = SS, this.drawnGap = HS, this.element.innerHTML = function(SS, HS) {
          return `<svg viewBox="0 0 64 64">${CS[SS](HS).map(nS).join("")}</svg>`
        }(SS, HS), this.shapes = Array.from(null !== (gS = null === (tS = this.element.firstElementChild) || void 0 === tS ? void 0 : tS.children) && void 0 !== gS ? gS : [])) : HS !== this.drawnGap && (this.drawnGap = HS, function(SS, HS, gS) {
          const tS = CS[HS](gS);
          for (let bS = 0; bS < tS.length; bS++)
            for (const [HS, gS] of Object.entries(tS[bS].attrs)) {
              const tS = String(gS);
              SS[bS].getAttribute(HS) !== tS && SS[bS].setAttribute(HS, tS)
            }
        }(this.shapes, SS, HS))
      }
      drawCone(SS, HS, gS) {
        SS === this.drawnFamily && this.coneDrawn ? this.shownRadius += (HS - this.shownRadius) * (1 - Math.exp(-gS / 80)) : this.shownRadius = HS, this.coneDrawn = !0, this.draw(SS, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(SS, HS) {
        if (!(HS > 0)) return 1;
        const gS = SS * xS.g / 2;
        return Math.max(50 * Math.tan(gS) / HS, 1)
      }
      offsetGap(SS) {
        const HS = 2 + ((0, NS.e)(SS) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * HS) / 2)
      }
      setOwnsCrosshair(SS) {
        SS !== this.ownsCrosshair && (this.ownsCrosshair = SS, document.body.classList.toggle("FrontlineCustomCrosshair", SS))
      }
    }
    const QS = "FrontlineCustomDamage",
      DS = .45,
      wS = .2;
    class hS {
      constructor(SS, HS) {
        this.api = SS, this.localPlayerId = HS, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.zX = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = SS => {
          var HS, gS;
          this.clearHits(), this.root = SS, this.lowLayer = null !== (HS = null === SS || void 0 === SS ? void 0 : SS.querySelector(".FrontlineDamageLow")) && void 0 !== HS ? HS : null, this.arcLayer = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.querySelector(".FrontlineDamageArcs")) && void 0 !== gS ? gS : null, this.showRoot(), this.drawLow()
        }, this.token = uS.k.subscribe("damagedByOtherPlayer", (SS => {
          let {
            direction: HS,
            iX: gS
          } = SS;
          this.onHurt(HS, gS)
        })), this.syncHealth(), document.body.classList.add(QS)
      }
      MJ(SS) {
        SS !== this.enabled && (this.enabled = SS, document.body.classList.toggle(QS, SS), SS || this.clearHits(), this.showRoot())
      }
      frame(SS) {
        this.syncHealth(), this.cameraHeading = SS;
        for (const HS of this.arcs) this.drawArcAngle(HS)
      }
      dispose() {
        uS.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(QS)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const SS = this.api.getClientOption(this.localPlayerId, "_health"),
          HS = this.api.getClientOption(this.localPlayerId, "_shield"),
          gS = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(SS, this.readHealth) && Object.is(HS, this.readShield) && Object.is(gS, this.readMaxHealth)) return;
        if (this.readHealth = SS, this.readShield = HS, this.readMaxHealth = gS, null === SS || void 0 === SS || !gS) return this.lastHealthPool = null, this.maxHealth = null, this.zX = 1, this.dead = !1, void this.drawLow();
        const tS = SS + (null !== HS && void 0 !== HS ? HS : 0);
        if (null !== this.lastHealthPool && tS < this.lastHealthPool) {
          const SS = performance.now(),
            HS = (this.lastHealthPool - tS) / gS;
          this.lastDrop = SS - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + HS,
            at: this.lastDrop.at
          } : {
            frac: HS,
            at: SS
          }
        }
        this.dead = SS <= 0, this.dead && this.clearHits(), this.lastHealthPool = tS, this.maxHealth = gS, this.zX = SS > 0 ? SS / gS : 1, this.drawLow()
      }
      onHurt(SS, HS) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const gS = Math.min(1, this.takeDamageFrac(HS) / .3);
        null !== SS && this.showArc(SS, gS), this.flashEdge(null === SS ? null : SS - this.cameraHeading, .4 + .6 * gS)
      }
      takeDamageFrac(SS) {
        if (void 0 !== SS && this.maxHealth) return SS / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: HS
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, HS
      }
      drawLow() {
        if (!this.lowLayer) return;
        const SS = JS((DS - this.zX) / .25),
          HS = JS((wS - this.zX) / .15000000000000002),
          gS = this.zX < DS;
        this.lowLayer.classList.toggle("Active", gS), this.lowLayer.classList.toggle("Critical", this.zX < wS), this.lowLayer.style.opacity = String(gS ? .55 + .3 * SS + .15 * HS : 0)
      }
      showArc(SS, HS) {
        var gS, tS;
        if (!this.arcLayer) return;
        let bS = this.arcs.find((HS => ZS(HS.direction, SS) < .6));
        if (!bS) {
          const HS = document.createElement("div");
          HS.className = "FrontlineDamageArc", HS.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(HS), bS = {
            element: HS,
            direction: SS,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(bS)
        }
        bS.direction = SS, this.drawArcAngle(bS);
        const XS = bS.fade ? Number(getComputedStyle(bS.element).opacity) : 0;
        null === (gS = bS.fade) || void 0 === gS || gS.cancel(), null === (tS = bS.pop) || void 0 === tS || tS.cancel(), bS.element.style.opacity = "1";
        const xS = bS.element.animate([{
          opacity: XS
        }, {
          opacity: 1
        }], 144);
        bS.fade = xS, bS.pop = bS.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * HS
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const NS = bS;
        xS.onfinish = () => {
          if (NS.fade !== xS) return;
          const SS = NS.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          SS.startTime = xS.startTime, NS.fade = SS, SS.onfinish = () => {
            NS.fade === SS && (NS.element.remove(), OS(this.arcs, NS))
          }
        }
      }
      drawArcAngle(SS) {
        const HS = SS.direction - this.cameraHeading;
        (null === SS.drawnAngle || Math.abs(HS - SS.drawnAngle) > .005) && (SS.drawnAngle = HS, SS.element.style.rotate = `${HS}rad`)
      }
      flashEdge(SS, HS) {
        var gS, tS, bS;
        if (!this.root) return;
        let XS = this.flashes.find((HS => null === HS.angle || null === SS ? HS.angle === SS : ZS(HS.angle, SS) < .5));
        if (!XS) {
          const HS = document.createElement("div");
          HS.className = "FrontlineDamageFlash";
          const gS = HS.appendChild(document.createElement("div"));
          gS.className = "FrontlineDamageFlashGlow", this.root.insertBefore(HS, this.arcLayer), XS = {
            element: HS,
            glow: gS,
            angle: SS,
            level: 0,
            animation: null
          }, this.flashes.push(XS)
        }
        const xS = null === (gS = XS.animation) || void 0 === gS || null === (tS = gS.effect) || void 0 === tS ? void 0 : tS.getComputedTiming().progress,
          NS = null === xS || void 0 === xS ? 0 : XS.level * (1 - xS);
        XS.level = Math.min(1, Math.max(HS, NS + .6 * HS)), XS.angle = SS;
        const {
          x: qS,
          y: uS,
          rx: IS,
          ry: fS
        } = function(SS, HS) {
          const gS = window.innerWidth,
            tS = window.innerHeight;
          if (null === SS) return {
            x: gS / 2,
            y: tS / 2,
            rx: 0,
            ry: 0
          };
          const bS = Math.sin(SS),
            XS = -Math.cos(SS),
            xS = gS / 2 / Math.max(1e-6, Math.abs(bS)),
            NS = tS / 2 / Math.max(1e-6, Math.abs(XS)),
            qS = Math.min(xS, NS),
            uS = Math.round(gS / 2 + bS * qS),
            IS = Math.round(tS / 2 + XS * qS),
            fS = tS / 100 * (.85 + .25 * HS),
            kS = xS <= NS,
            aS = Math.round((kS ? 30 : 74) * fS),
            KS = Math.round((kS ? 58 : 26) * fS);
          return {
            x: uS,
            y: IS,
            rx: aS,
            ry: KS
          }
        }(SS, XS.level), {
          style: kS
        } = XS.glow;
        XS.glow.classList.toggle("Everywhere", null === SS), kS.setProperty("--glowX", `${qS}px`), kS.setProperty("--glowY", `${uS}px`), kS.setProperty("--glowRx", `${IS}px`), kS.setProperty("--glowRy", `${fS}px`), XS.element.style.transformOrigin = `${qS}px ${uS}px`, null === (bS = XS.animation) || void 0 === bS || bS.cancel();
        const aS = XS.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: XS.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * XS.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * XS.level
        });
        XS.animation = aS;
        const KS = XS;
        aS.onfinish = () => {
          KS.animation === aS && (KS.element.remove(), OS(this.flashes, KS))
        }
      }
      clearHits() {
        for (const tS of this.arcs) {
          var SS, HS;
          null === (SS = tS.fade) || void 0 === SS || SS.cancel(), tS.fade = null, null === (HS = tS.pop) || void 0 === HS || HS.cancel(), tS.element.remove()
        }
        this.arcs.length = 0;
        for (const tS of this.flashes) {
          var gS;
          null === (gS = tS.animation) || void 0 === gS || gS.cancel(), tS.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function ZS(SS, HS) {
      return Math.abs(Math.atan2(Math.sin(SS - HS), Math.cos(SS - HS)))
    }

    function JS(SS) {
      return Math.max(0, Math.min(1, SS))
    }

    function OS(SS, HS) {
      const gS = SS.indexOf(HS); - 1 !== gS && SS.splice(gS, 1)
    }
    var dS = gS(1121),
      cS = gS.n(dS),
      vS = gS(36616),
      ES = gS(36710),
      LS = gS(1281),
      YS = gS(1522);
    const AS = "frontlineHudChanged",
      yS = "frontlineScoreboardChanged";
    class VS {
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
      wK(SS) {
        this.wire = SS, uS.k.cj(AS, SS, !0)
      }
      receiveScoreboard(SS) {
        let HS = "scoreboard" === SS[0] ? performance.now() + SS[5] : 0;
        const gS = this.scoreboard.endsAt;
        0 !== HS && 0 !== gS && Math.abs(HS - gS) < 1e3 && (HS = gS), this.scoreboard = {
          wire: SS,
          endsAt: HS
        }, uS.k.cj(yS, this.scoreboard, !0)
      }
    }
    var iS = gS(1181);
    const WS = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function zS(SS) {
      const [HS, gS] = (0, bS.useState)((() => (SS - performance.now()) / 1e3));
      return (0, bS.useEffect)((() => {
        if (0 === SS) return;
        const HS = () => {
          gS((SS - performance.now()) / 1e3)
        };
        HS();
        const tS = window.setInterval(HS, 250);
        return () => {
          window.clearInterval(tS)
        }
      }), [SS]), HS
    }

    function US(SS) {
      let {
        className: HS,
        point: gS
      } = SS;
      const [tS, bS, XS, xS, NS, qS] = gS;
      return (0, iS.jsxs)("div", {
        className: cS()(HS, `Owner-${bS||"None"}`, `Leader-${xS||"None"}`, {
          Contested: NS,
          Here: qS
        }),
        children: [(0, iS.jsx)("span", {
          className: "FrontlinePointLetter",
          children: tS
        }), (0, iS.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${XS}%`
          }
        })]
      })
    }
    const pS = (0, bS.memo)((function(SS) {
        let {
          points: HS,
          markers: gS
        } = SS;
        const {
          t: tS
        } = (0, LS.F)();
        return HS ? (0, iS.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: HS.map((SS => {
            const [HS, , , , , , , bS] = SS;
            return (0, iS.jsxs)("div", {
              ref: gS.bindMarker(HS),
              className: "FrontlinePointMarker",
              children: [(0, iS.jsx)(US, {
                className: "FrontlinePointMarkerTile",
                point: SS
              }), (0, iS.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [bS && (0, iS.jsx)("span", {
                  className: cS()("FrontlinePointMarkerHomeTurf", `Team-${bS}`),
                  children: tS("frontlineHud:homeTurf", {
                    team: tS(WS[bS])
                  })
                }), (0, iS.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, HS)
          }))
        }) : null
      })),
      sS = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      BS = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function MS(SS) {
      let {
        hud: HS,
        crosshair: gS,
        damage: tS,
        markers: bS
      } = SS;
      const XS = (0, YS.i)(AS, HS.getWire()),
        xS = (0, YS.i)(yS, HS.getScoreboard());
      return (0, iS.jsxs)(iS.Fragment, {
        children: [(0, iS.jsx)(FS, {
          damage: tS
        }), (0, iS.jsx)(pS, {
          points: "scoreboard" === xS.wire[0] ? xS.wire[6] : null,
          markers: bS
        }), (0, iS.jsx)(TS, {
          view: xS
        }), (0, iS.jsx)("div", {
          className: "FrontlineReticle",
          ref: gS.bindElement
        }), (0, iS.jsx)(vS.g, {
          children: (0, iS.jsx)(RS, {
            wire: XS
          })
        })]
      })
    }
    const FS = (0, bS.memo)((function(SS) {
        let {
          damage: HS
        } = SS;
        return (0, iS.jsxs)("div", {
          className: "FrontlineDamage",
          ref: HS.bindElement,
          children: [(0, iS.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, iS.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, iS.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      RS = (0, bS.memo)((function(SS) {
        let {
          wire: HS
        } = SS;
        const {
          t: gS
        } = (0, LS.F)();
        if ("capture" === HS[0]) {
          const [, SS, tS, bS, XS, xS, NS] = HS, qS = Math.round(bS / 100 * 24);
          return (0, iS.jsxs)("div", {
            className: cS()("FrontlinePlate", `Status-${tS}`, `Leader-${XS||"None"}`),
            children: [(0, iS.jsx)(eS, {}), (0, iS.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, iS.jsx)("span", {
                className: "FrontlineObjective",
                children: SS
              }), (0, iS.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, iS.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: gS("frontlineHud:objective", {
                    point: SS,
                    friendly: xS,
                    enemy: NS
                  })
                }), (0, iS.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: gS(sS[tS])
                })]
              }), (0, iS.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(bS).padStart(3, "0"), (0, iS.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, iS.jsx)(lS, {
              segments: 24,
              lit: qS
            })]
          })
        }
        if ("alert" === HS[0]) {
          const [, SS, tS, bS] = HS;
          return (0, iS.jsxs)("div", {
            className: cS()("FrontlinePlate", "FrontlineAlert", `Tone-${bS}`),
            children: [(0, iS.jsx)(eS, {}), (0, iS.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: gS(BS[SS])
            }), (0, iS.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: tS
            })]
          })
        }
        return null
      })),
      TS = (0, bS.memo)((function(SS) {
        let {
          view: HS
        } = SS;
        const {
          t: gS
        } = (0, LS.F)(), tS = (0, bS.useRef)(null), XS = function(SS, HS) {
          const [gS, tS] = (0, bS.useState)(!1);
          return (0, bS.useLayoutEffect)((() => {
            const HS = SS.current;
            if (!HS) return;
            const gS = document.querySelector(`.${ES.f}`),
              bS = document.querySelector(`.${ES.j}`),
              XS = () => {
                var SS;
                const XS = HS.querySelector(".FrontlineTeamTrack"),
                  xS = (0, qS.getRemInPx)(),
                  NS = HS.getBoundingClientRect().width - 2 * (null !== (SS = null === XS || void 0 === XS ? void 0 : XS.getBoundingClientRect().width) && void 0 !== SS ? SS : 0),
                  uS = window.innerWidth / 2,
                  IS = gS ? gS.getBoundingClientRect().right : 0,
                  fS = bS ? bS.getBoundingClientRect().left : window.innerWidth,
                  kS = Math.min(uS - IS, fS - uS) - ES.c - NS / 2,
                  aS = kS < 6 * xS,
                  KS = aS ? (window.innerWidth - NS) / 2 - ES.c : kS;
                HS.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(KS,14*xS)))}px`), tS(aS)
              };
            XS();
            const xS = new ResizeObserver(XS);
            for (const SS of [HS, gS, bS]) SS && xS.observe(SS);
            return window.addEventListener("resize", XS), () => {
              xS.disconnect(), window.removeEventListener("resize", XS)
            }
          }), [SS, HS]), gS
        }(tS, "scoreboard" === HS.wire[0]);
        if ("scoreboard" !== HS.wire[0]) return null;
        const [, xS, NS, uS, IS, , fS] = HS.wire, kS = "Red" === xS ? "Blue" : "Red";
        return (0, iS.jsxs)("div", {
          className: cS()("FrontlineScoreboardContainer", {
            Below: XS
          }),
          children: [(0, iS.jsxs)("div", {
            ref: tS,
            className: "FrontlineScoreboard",
            children: [(0, iS.jsx)(eS, {}), (0, iS.jsx)(oS, {
              team: xS,
              tickets: NS,
              goal: IS,
              side: "Friendly"
            }), (0, iS.jsx)("div", {
              className: "FrontlinePoints",
              children: fS.map((SS => (0, iS.jsx)(US, {
                className: "FrontlinePoint",
                point: SS
              }, SS[0])))
            }), (0, iS.jsx)(oS, {
              team: kS,
              tickets: uS,
              goal: IS,
              side: "Enemy"
            })]
          }), (0, iS.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, iS.jsx)(mS, {
              endsAt: HS.endsAt
            }), (0, iS.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: gS("frontlineHud:ticketGoal", {
                goal: IS
              })
            })]
          })]
        })
      }));

    function oS(SS) {
      let {
        team: HS,
        tickets: gS,
        goal: tS,
        side: bS
      } = SS;
      const {
        t: XS
      } = (0, LS.F)(), xS = String(gS).padStart(3, "0"), NS = xS.search(/[1-9]/), qS = -1 === NS ? xS : xS.slice(0, NS), uS = Math.min(20, Math.floor(gS / tS * 20));
      return (0, iS.jsxs)("div", {
        className: cS()("FrontlineTeamScore", bS, `Team-${HS}`),
        children: [(0, iS.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, iS.jsx)("span", {
            className: "Lead",
            children: qS
          }), -1 !== NS && xS.slice(NS)]
        }), (0, iS.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, iS.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: XS(WS[HS])
          }), (0, iS.jsx)(lS, {
            segments: 20,
            lit: uS
          })]
        })]
      })
    }

    function lS(SS) {
      let {
        segments: HS,
        lit: gS
      } = SS;
      return (0, iS.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: HS
        }, ((SS, HS) => (0, iS.jsx)("i", {
          className: cS()({
            Lit: HS < gS
          })
        }, HS)))
      })
    }

    function mS(SS) {
      let {
        endsAt: HS
      } = SS;
      const gS = Math.max(0, Math.ceil(zS(HS)));
      return (0, iS.jsxs)("div", {
        className: cS()("FrontlineClock", {
          Urgent: gS <= 60
        }),
        children: [Math.floor(gS / 60), ":", String(gS % 60).padStart(2, "0")]
      })
    }

    function eS() {
      return (0, iS.jsxs)(iS.Fragment, {
        children: [(0, iS.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, iS.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var rS = gS(36706),
      SH = gS(1334),
      HH = gS(38518),
      gH = gS(38555);
    class tH {
      constructor(SS) {
        var HS;
        this.hud = SS, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.nK = !1, this.WC = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.WC), null === (HS = window.visualViewport) || void 0 === HS || HS.addEventListener("resize", this.WC)
      }
      bindMarker(SS) {
        let HS = this.refs.get(SS);
        return HS || (HS = HS => {
          var gS;
          null === (gS = this.markers.get(SS)) || void 0 === gS || gS.stopObserving(), this.markers.delete(SS), HS && !this.nK && this.markers.set(SS, this.mount(HS))
        }, this.refs.set(SS, HS)), HS
      }
      frame(SS, HS) {
        this.render = SS;
        const gS = this.hud.getScoreboard().wire;
        if ("scoreboard" === gS[0] && 0 !== this.markers.size)
          for (const [tS, , , , , , bS] of gS[6]) {
            const SS = this.markers.get(tS);
            SS && bS && (SS.target ??= [0, 0, 0], SS.target[0] = bS[0], SS.target[1] = bS[1] + 2.5, SS.target[2] = bS[2], this.place(SS), this.kt(SS, HS && Math.hypot(bS[0] - HS[0], bS[1] - HS[1], bS[2] - HS[2])))
          }
      }
      dispose() {
        var SS;
        this.nK = !0, window.removeEventListener("resize", this.WC), null === (SS = window.visualViewport) || void 0 === SS || SS.removeEventListener("resize", this.WC);
        for (const HS of this.markers.values()) HS.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(SS) {
        const {
          render: HS,
          viewport: gS
        } = this;
        if (!HS || !SS.target) return;
        const tS = (50 - HS.screenBandPct.y) / 100 * gS.height,
          bS = {
            x: SS.halfSize.width + 8,
            top: SS.halfSize.height + 8,
            bottom: SS.halfSize.height + SS.labelsBelow + tS
          },
          XS = HS.projectWorldPosToViewport(SS.target),
          xS = null !== XS && void 0 !== XS ? XS : HS.projectWorldPosToScreenPos(SS.target),
          NS = (0, gH.e)({
            x: xS.x,
            y: xS.y,
            text: XS
          }, bS, gS);
        (0, HH.c)(SS.root, Math.round(100 * NS.x) / 100, Math.round(100 * NS.y) / 100)
      }
      kt(SS, HS) {
        if (null === HS) return void(null !== SS.metres && (SS.metres = null, SS.distance.textContent = ""));
        const gS = Date.now();
        (null === SS.metres || (0, rS.e)(HS, SS.metres, SS.metresShownAt)) && (SS.metres = Math.round(HS), SS.metresShownAt = gS, SS.distance.textContent = (0, LS.C)(SH.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(SS.metres)
        }))
      }
      mount(SS) {
        const HS = {
            root: SS,
            distance: SS.querySelector(".FrontlinePointMarkerDistance"),
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
          gS = SS.querySelector(".FrontlinePointMarkerLabels"),
          tS = new ResizeObserver((() => {
            HS.halfSize = {
              width: Math.max(SS.offsetWidth, gS.offsetWidth) / 2,
              height: SS.offsetHeight / 2
            }, HS.labelsBelow = gS.offsetTop + gS.offsetHeight - SS.offsetHeight, this.place(HS)
          }));
        return tS.observe(SS, {
          box: "border-box"
        }), tS.observe(gS, {
          box: "border-box"
        }), HS.stopObserving = () => {
          tS.disconnect()
        }, HS
      }
    }
    var bH = gS(6640),
      XH = gS(2748);
    const xH = "frontlineRoundEndChanged";
    class NH {
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
      wK(SS) {
        const HS = "roundEnd" === SS[0] ? performance.now() + SS[5] : 0;
        this.view = {
          wire: SS,
          key: this.view.key + 1,
          endsAt: HS
        }, uS.k.cj(xH, this.view, !0)
      }
    }
    const qH = (0, bS.lazy)((() => (0, XH.e)(gS.e(199).then((() => gS(41775))), (SS => SS.FrontlineMvpLineup)))),
      uH = [4800, 4e3, 3200],
      IH = [1, 0, 2],
      fH = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      kH = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function aH(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, YS.i)(xH, HS.getView()),
        tS = zS(gS.endsAt);
      return "roundEnd" !== gS.wire[0] || 1e3 * tS < -2e3 ? null : (0, iS.jsx)(KH, {
        wire: gS.wire,
        secondsLeft: Math.max(0, Math.ceil(tS))
      }, gS.key)
    }
    const KH = (0, bS.memo)((function(SS) {
      let {
        wire: HS,
        secondsLeft: gS
      } = SS;
      const {
        t: XS
      } = (0, LS.F)(), [, xS, NS, qS, uS, , IS, fS] = HS, kS = (0, bS.useMemo)((() => IH.filter((SS => SS < fS.length))), [fS]), aS = (0, bS.useMemo)((() => kS.map((SS => {
        const [, , , , , HS, gS] = fS[SS];
        return {
          cosmetics: tS.map(((SS, gS) => [SS, HS[gS]])),
          size: 0 === SS ? 1.15 : .85,
          heldGun: {
            name: gS,
            aimed: 0 === SS
          },
          showAfterMs: uH[SS]
        }
      }))), [fS, kS]);
      return (0, iS.jsxs)("div", {
        className: cS()("FrontlineRoundEnd", `Result-${xS}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, iS.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, iS.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, iS.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, iS.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, iS.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (KS = XS(fH[xS]), /\p{Script=Arabic}/u.test(KS) ? [KS] : (0, bH.b)(KS)).map(((SS, HS) => (0, iS.jsx)("span", {
              style: {
                "--letter": HS
              },
              children: SS
            }, HS)))]
          }), (0, iS.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [NS && "victory" === xS && (0, iS.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: XS("frontlineRoundEnd:comeback")
            }), (0, iS.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, iS.jsx)("b", {
                className: "Friendly",
                children: qS
              }), " \u2013 ", (0, iS.jsx)("b", {
                className: "Enemy",
                children: uS
              })]
            })]
          })]
        }), kS.length > 0 && (0, iS.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": kS.length
          },
          children: [(0, iS.jsx)(bS.Suspense, {
            fallback: null,
            children: (0, iS.jsx)(qH, {
              className: "FrontlineRoundEndLineup",
              players: aS
            })
          }), kS.map((SS => (0, iS.jsx)(jH, {
            mvp: fS[SS],
            place: SS
          }, SS)))]
        }), (0, iS.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: XS("frontlineRoundEnd:nextFront", {
            map: IS,
            seconds: String(gS)
          })
        })]
      });
      var KS
    }));

    function jH(SS) {
      let {
        mvp: HS,
        place: gS
      } = SS;
      const {
        t: tS
      } = (0, LS.F)(), [bS, XS, xS, NS, qS] = HS, [uS, IS] = tS(function(SS, HS) {
        return 1 === HS && "damage" !== SS ? `frontlineRoundEnd:${SS}One` : `frontlineRoundEnd:${SS}`
      }(xS, NS), {
        name: "\0",
        count: NS.toLocaleString()
      }).split("\0");
      return (0, iS.jsxs)("div", {
        className: cS()("FrontlineMvpCard", `Place-${gS+1}`, `Team-${XS}`),
        style: {
          "--revealMs": `${uH[gS]}ms`
        },
        children: [(0, iS.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, iS.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, iS.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: tS(kH[gS])
        }), (0, iS.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [uS, (0, iS.jsx)("span", {
            className: "FrontlineMvpName",
            children: bS
          }), IS]
        }), (0, iS.jsx)("div", {
          className: "FrontlineMvpKit",
          children: qS
        })]
      })
    }
    const GH = function(SS, HS, gS, tS) {
      let {
        localPlayerId: xS
      } = tS;
      const NS = new VS,
        qS = new NH;
      let uS = null,
        IS = null,
        fS = null,
        kS = null,
        aS = null,
        KS = [!1, !1];
      const jS = () => {
        var SS, HS;
        const [gS, tS] = KS;
        null === (SS = IS) || void 0 === SS || SS.MJ(!gS), null === (HS = fS) || void 0 === HS || HS.MJ(!tS)
      };
      return {
        onCreate: SS => {
          uS = SS, IS = new PS(SS, xS), fS = new hS(SS, xS), kS = new tH(NS), jS(), aS = (0, XS.y)((0, bS.createElement)(bS.Fragment, null, (0, bS.createElement)(MS, {
            hud: NS,
            crosshair: IS,
            damage: fS,
            markers: kS
          }), (0, bS.createElement)(aH, {
            controller: qS
          })))
        },
        onClose: () => {
          var SS, HS, gS, tS;
          null === (SS = aS) || void 0 === SS || SS(), null === (HS = IS) || void 0 === HS || HS.dispose(), IS = null, null === (gS = fS) || void 0 === gS || gS.dispose(), fS = null, null === (tS = kS) || void 0 === tS || tS.dispose(), kS = null, uS = null
        },
        onAfterRender: (SS, HS) => {
          var gS, tS, bS, XS;
          null === (gS = IS) || void 0 === gS || gS.frame(SS, HS.tanHalfFovY), null === (tS = fS) || void 0 === tS || tS.frame(HS.cameraHeading), null === (bS = kS) || void 0 === bS || bS.frame(HS, null !== (XS = uS) && void 0 !== XS && XS.checkValid(xS) ? uS.lC(xS) : null)
        },
        onReceivedMessageFromServer: (SS, HS) => {
          "frontlineHud" === SS ? NS.wK(HS) : "frontlineScoreboard" === SS ? NS.receiveScoreboard(HS) : "frontlineRoundEnd" === SS ? qS.wK(HS) : "frontlinePrefs" === SS && (KS = HS, jS())
        }
      }
    }
  },
  6640: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    const tS = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function bS(SS) {
      return null === tS ? Array.from(SS) : Array.from(tS.segment(SS), (SS => {
        let {
          segment: HS
        } = SS;
        return HS
      }))
    }
  },
  38518: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      g: () => XS
    });
    const tS = new WeakMap;

    function bS(SS) {
      let HS = tS.get(SS);
      return HS || (HS = {
        hidden: SS.hidden,
        x: NaN,
        y: NaN
      }, tS.set(SS, HS)), HS
    }

    function XS(SS, HS) {
      const gS = bS(SS);
      gS.hidden !== HS && (gS.hidden = HS, SS.hidden = HS)
    }

    function xS(SS, HS, gS) {
      const tS = bS(SS);
      tS.x === HS && tS.y === gS || (tS.x = HS, tS.y = gS, SS.style.translate = `${HS}vw ${gS}vh`)
    }
  },
  37093: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    const tS = {
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
for (const SS in modules) Object.freeze(modules[SS]);