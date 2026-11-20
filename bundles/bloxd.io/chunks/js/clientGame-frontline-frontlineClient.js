export const id = 17;
export const ids = [17];
export const modules = {
  36416: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => jT,
      g: () => vT,
      j: () => CT,
      k: () => AT
    });
    var lT = cT(9359),
      MT = cT(36423),
      KT = cT(36432),
      OT = cT(8746),
      yT = cT(1461),
      fT = cT(71),
      xT = cT(94),
      IT = cT(1099);

    function AT() {
      var TT;
      return (0, yT.i)(MT.b, (0, MT.j)()), (0, IT.jsx)(IT.Fragment, {
        children: null === (TT = (0, MT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function CT(TT) {
      var kT;
      let {
        show: cT
      } = TT;
      (0, yT.i)(MT.b, (0, MT.j)());
      const xT = null === (kT = (0, MT.j)()) || void 0 === kT ? void 0 : kT.menu;
      return (0, fT.useEffect)((() => {
        var TT;
        cT || (null === xT || void 0 === xT || null === (TT = xT.onClose) || void 0 === TT || TT.call(xT), (0, KT.q)())
      }), [cT, xT]), (0, fT.useEffect)((() => cT ? (0, OT.e)(KT.A, KT.h) : void 0), [cT]), (0, IT.jsx)(lT.b, {
        showing: cT,
        globallyUniqueKey: "clientGameMenu",
        children: null === xT || void 0 === xT ? void 0 : xT.content
      })
    }

    function jT(TT) {
      let {
        placement: kT = "bottom"
      } = TT;
      return (0, IT.jsx)("div", {
        id: `clientGameHud-${kT}`,
        style: {
          display: "contents"
        }
      })
    }

    function vT(TT) {
      let {
        children: kT,
        placement: cT = "bottom"
      } = TT;
      const [lT, MT] = (0, fT.useState)(null);
      return (0, fT.useEffect)((() => {
        MT(document.getElementById(`clientGameHud-${cT}`))
      }), [cT]), lT ? (0, xT.createPortal)(kT, lT) : null
    }
  },
  9359: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(4521),
      MT = cT(4528);

    function KT(TT) {
      let {
        children: kT,
        showing: cT,
        globallyUniqueKey: KT,
        alwaysMountChildren: OT = !1,
        doGameplayStartStopOnShow: yT = !0,
        keepsMovement: fT = !1
      } = TT;
      return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
    }
  },
  36506: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      g: () => OT,
      j: () => yT,
      m: () => fT
    });
    var lT = cT(71),
      MT = cT(3041);
    const KT = 8,
      OT = "InGameHeaderContainer",
      yT = "TopRightElements";

    function fT(TT) {
      const [kT] = (0, MT.d)(), [cT, fT] = (0, lT.useState)(!1);
      return (0, lT.useLayoutEffect)((() => {
        if (!TT) return;
        const kT = document.querySelector(`.${OT}`),
          cT = document.querySelector(`.${yT}`),
          lT = () => {
            const lT = TT.getBoundingClientRect(),
              MT = kT ? kT.getBoundingClientRect().right : 0,
              OT = cT ? cT.getBoundingClientRect().left : window.innerWidth,
              yT = lT.left < MT + KT,
              xT = lT.right > OT - KT;
            fT(yT || xT)
          };
        lT();
        const MT = new ResizeObserver(lT);
        return MT.observe(TT), kT && MT.observe(kT), cT && MT.observe(cT), () => {
          MT.disconnect()
        }
      }), [TT, kT]), cT
    }
  },
  36504: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    const lT = [{
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

    function MT(TT, kT, cT) {
      const MT = Math.abs(TT - kT),
        KT = Date.now() - cT;
      for (const OT of lT)
        if (TT < OT.maxDist) return MT >= OT.hardUpdateDist || KT > OT.timeBetweenSoftChecks && MT >= OT.softUpdateDist;
      return !1
    }
  },
  8746: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      e: () => MT
    });
    let lT = null;
    const MT = function(TT) {
        const kT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return lT = kT, () => {
          lT === kT && (lT = null)
        }
      },
      KT = () => {
        var TT;
        return null !== (TT = lT) && void 0 !== TT && TT.canCycle() ? lT.cycle : null
      }
  },
  38388: (TT, kT, cT) => {
    function lT(TT, kT, cT) {
      var lT;
      const {
        width: MT,
        height: KT
      } = cT, OT = null !== (lT = TT.text) && void 0 !== lT ? lT : TT, yT = (OT.x / 100 - .5) * MT, fT = (OT.y / 100 - .5) * KT, xT = MT / 2 - kT.x;
      if (null !== TT.text && Math.abs(yT) <= xT && fT >= kT.top - KT / 2 && fT <= KT / 2 - kT.bottom) return {
        x: OT.x,
        y: OT.y
      };
      const IT = Math.min(0 === yT ? 1 / 0 : xT / Math.abs(yT), fT > 0 ? (KT / 2 - kT.bottom) / fT : fT < 0 ? (kT.top - KT / 2) / fT : 1 / 0);
      return !Number.isFinite(IT) || IT < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + yT * IT / MT * 100,
        y: 50 + fT * IT / KT * 100
      }
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  39197: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => hk
    });
    const lT = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var MT = cT(71),
      KT = cT(36423),
      OT = cT(36845),
      yT = cT(36440),
      fT = cT(1741),
      xT = cT(36);
    const IT = {
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
    const AT = 32;

    function CT(TT, kT, cT, lT) {
      return {
        tag: "line",
        attrs: {
          x1: TT,
          y1: kT,
          x2: cT,
          y2: lT,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function jT(TT) {
      return {
        tag: "circle",
        attrs: {
          cx: AT,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AT,
          r: TT,
          class: "Fill"
        }
      }
    }

    function vT(TT, kT) {
      return {
        tag: "path",
        attrs: {
          d: TT,
          "stroke-width": kT
        }
      }
    }

    function tT(TT, kT, cT) {
      return {
        tag: "circle",
        attrs: {
          cx: AT,
          cy: AT,
          r: TT,
          "stroke-width": kT,
          class: cT
        }
      }
    }

    function hT(TT, kT, cT) {
      return {
        tag: "text",
        attrs: {
          x: TT,
          y: kT,
          class: "Fill Label"
        },
        text: cT
      }
    }
    const NT = {
      pistol: TT => [CT(AT, AT - TT - 5, AT, AT - TT), CT(AT - TT - 5, AT, AT - TT, AT), CT(AT + TT, AT, AT + TT + 5, AT), jT(1.4)],
      rifle: TT => [CT(AT, AT - TT - 8, AT, AT - TT), CT(AT, AT + TT, AT, AT + TT + 8), CT(AT - TT - 8, AT, AT - TT, AT), CT(AT + TT, AT, AT + TT + 8, AT), jT(1)],
      smg: TT => {
        const kT = Math.PI / 2,
          cT = [];
        for (let OT = 0; OT < 4; OT++) cT.push((MT = OT * kT + .35, KT = (OT + 1) * kT - .35, vT(`M${AT+(lT=6+TT)*Math.cos(MT)} ${AT+lT*Math.sin(MT)} A${lT} ${lT} 0 0 1 ${AT+lT*Math.cos(KT)} ${AT+lT*Math.sin(KT)}`, 2)));
        var lT, MT, KT;
        return [...cT, jT(1.4)]
      },
      shotgun: TT => [tT(TT, 3, "Ring Outline"), tT(TT, 1.5, "Ring")],
      marksman: TT => [vT(`M${26-TT/2} ${39+TT/2} L32 33 L${38+TT/2} ${39+TT/2}`, 2), CT(14 - TT, AT, 24 - TT, AT, 1.5), CT(40 + TT, AT, 50 + TT, AT, 1.5), CT(14 - TT, 30, 14 - TT, 34, 1.5), CT(50 + TT, 30, 50 + TT, 34, 1.5)],
      machineGun: TT => {
        const kT = 10 + TT,
          cT = [];
        for (const [lT, MT] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) cT.push(vT(`M${AT+lT*kT} ${AT+MT*(kT-5)} L${AT+lT*kT} ${AT+MT*kT} L${AT+lT*(kT-5)} ${AT+MT*kT}`, 2));
        return [...cT, CT(AT, 28, AT, 36, 1.5), CT(28, AT, 36, AT, 1.5)]
      },
      launcher: () => [CT(14, 30, 50, 30, 1.5), CT(AT, 24, AT, 52, 1.5), CT(28, 38, 36, 38, 1.5), CT(29, 44, 35, 44, 1.5), CT(30, 50, 34, 50, 1.5), hT(38, 40, "100"), hT(37, 46, "200"), jT(1.4, 30)],
      melee: () => [vT("M32 26 L38 32 L32 38 L26 32 Z", 1.5), jT(1.2)],
      throwable: () => [jT(1.6)]
    };

    function QT(TT) {
      let {
        tag: kT,
        attrs: cT,
        text: lT
      } = TT, MT = `<${kT}`;
      for (const [KT, OT] of Object.entries(cT)) MT += ` ${KT}="${OT}"`;
      return void 0 === lT ? `${MT}/>` : `${MT}>${lT}</${kT}>`
    }
    class ST {
      constructor(TT, kT) {
        this.api = TT, this.localPlayerId = kT, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = TT => {
          this.element = TT, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, TT && !this.enabled && (TT.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, fT.getRemInPx)()))
        }, this.tokens = [xT.k.subscribe("aimingOverlay", (TT => {
          this.sniperOverlay = "sniper" === TT
        })), xT.k.subscribe("mouseState", (TT => {
          let {
            isDown: kT
          } = TT;
          this.mouseDown = kT
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      PD(TT) {
        TT !== this.enabled && (this.enabled = TT, this.drawnVisible = null, TT || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(TT, kT) {
        var cT, lT;
        if (!this.enabled) return;
        const {
          api: MT
        } = this, KT = MT.isAlive(this.localPlayerId) && null !== (cT = null === (lT = MT.ckT(this.localPlayerId)) || void 0 === lT ? void 0 : lT.name) && void 0 !== cT ? cT : null, OT = (yT = KT) && IT[yT] || null;
        var yT;
        if (this.setOwnsCrosshair(null !== OT), !this.element) return;
        const fT = MT.getHeldGunInaccuracy(),
          xT = null !== fT,
          AT = null !== OT && !this.sniperOverlay && MT.isCrosshairShown();
        if (AT !== this.drawnVisible && (this.drawnVisible = AT, this.element.style.display = AT ? "block" : "none"), !AT) return;
        const CT = xT ? function(TT) {
            return "launcher" === TT || "melee" === TT || "throwable" === TT ? "none" : "shotgun" === TT ? "cone" : "offset"
          }(OT) : "none",
          jT = null !== fT && void 0 !== fT ? fT : 0;
        "cone" === CT ? this.drawCone(OT, this.coneRadiusVh(jT, kT) * this.gapPerVh, TT) : (this.coneDrawn = !1, this.draw(OT, "none" === CT ? 2 : this.offsetGap(jT)));
        const vT = !xT && this.mouseDown;
        vT !== this.drawnPressed && (this.drawnPressed = vT, this.element.classList.toggle("Pressed", vT))
      }
      dispose() {
        for (const TT of this.tokens) xT.k.unsubscribe(TT);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(TT, kT) {
        var cT, lT;
        TT !== this.drawnFamily ? (this.drawnFamily = TT, this.drawnGap = kT, this.element.innerHTML = function(TT, kT) {
          return `<svg viewBox="0 0 64 64">${NT[TT](kT).map(QT).join("")}</svg>`
        }(TT, kT), this.shapes = Array.from(null !== (cT = null === (lT = this.element.firstElementChild) || void 0 === lT ? void 0 : lT.children) && void 0 !== cT ? cT : [])) : kT !== this.drawnGap && (this.drawnGap = kT, function(TT, kT, cT) {
          const lT = NT[kT](cT);
          for (let MT = 0; MT < lT.length; MT++)
            for (const [kT, cT] of Object.entries(lT[MT].attrs)) {
              const lT = String(cT);
              TT[MT].getAttribute(kT) !== lT && TT[MT].setAttribute(kT, lT)
            }
        }(this.shapes, TT, kT))
      }
      drawCone(TT, kT, cT) {
        TT === this.drawnFamily && this.coneDrawn ? this.shownRadius += (kT - this.shownRadius) * (1 - Math.exp(-cT / 80)) : this.shownRadius = kT, this.coneDrawn = !0, this.draw(TT, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(TT, kT) {
        if (!(kT > 0)) return 1;
        const cT = TT * OT.g / 2;
        return Math.max(50 * Math.tan(cT) / kT, 1)
      }
      offsetGap(TT) {
        const kT = 2 + ((0, yT.f)(TT) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * kT) / 2)
      }
      setOwnsCrosshair(TT) {
        TT !== this.ownsCrosshair && (this.ownsCrosshair = TT, document.body.classList.toggle("FrontlineCustomCrosshair", TT))
      }
    }
    const DT = "FrontlineCustomDamage",
      aT = .45,
      FT = .2;
    class rT {
      constructor(TT, kT) {
        this.api = TT, this.localPlayerId = kT, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.JT = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = TT => {
          var kT, cT;
          this.clearHits(), this.root = TT, this.lowLayer = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".FrontlineDamageLow")) && void 0 !== kT ? kT : null, this.arcLayer = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".FrontlineDamageArcs")) && void 0 !== cT ? cT : null, this.showRoot(), this.drawLow()
        }, this.token = xT.k.subscribe("damagedByOtherPlayer", (TT => {
          let {
            direction: kT,
            bT: cT
          } = TT;
          this.onHurt(kT, cT)
        })), this.syncHealth(), document.body.classList.add(DT)
      }
      PD(TT) {
        TT !== this.enabled && (this.enabled = TT, document.body.classList.toggle(DT, TT), TT || this.clearHits(), this.showRoot())
      }
      frame(TT) {
        this.syncHealth(), this.cameraHeading = TT;
        for (const kT of this.arcs) this.drawArcAngle(kT)
      }
      dispose() {
        xT.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(DT)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const TT = this.api.getClientOption(this.localPlayerId, "_health"),
          kT = this.api.getClientOption(this.localPlayerId, "_shield"),
          cT = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(TT, this.readHealth) && Object.is(kT, this.readShield) && Object.is(cT, this.readMaxHealth)) return;
        if (this.readHealth = TT, this.readShield = kT, this.readMaxHealth = cT, null === TT || void 0 === TT || !cT) return this.lastHealthPool = null, this.maxHealth = null, this.JT = 1, this.dead = !1, void this.drawLow();
        const lT = TT + (null !== kT && void 0 !== kT ? kT : 0);
        if (null !== this.lastHealthPool && lT < this.lastHealthPool) {
          const TT = performance.now(),
            kT = (this.lastHealthPool - lT) / cT;
          this.lastDrop = TT - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + kT,
            at: this.lastDrop.at
          } : {
            frac: kT,
            at: TT
          }
        }
        this.dead = TT <= 0, this.dead && this.clearHits(), this.lastHealthPool = lT, this.maxHealth = cT, this.JT = TT > 0 ? TT / cT : 1, this.drawLow()
      }
      onHurt(TT, kT) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const cT = Math.min(1, this.takeDamageFrac(kT) / .3);
        null !== TT && this.showArc(TT, cT), this.flashEdge(null === TT ? null : TT - this.cameraHeading, .4 + .6 * cT)
      }
      takeDamageFrac(TT) {
        if (void 0 !== TT && this.maxHealth) return TT / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: kT
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, kT
      }
      drawLow() {
        if (!this.lowLayer) return;
        const TT = wT((aT - this.JT) / .25),
          kT = wT((FT - this.JT) / .15000000000000002),
          cT = this.JT < aT;
        this.lowLayer.classList.toggle("Active", cT), this.lowLayer.classList.toggle("Critical", this.JT < FT), this.lowLayer.style.opacity = String(cT ? .55 + .3 * TT + .15 * kT : 0)
      }
      showArc(TT, kT) {
        var cT, lT;
        if (!this.arcLayer) return;
        let MT = this.arcs.find((kT => PT(kT.direction, TT) < .6));
        if (!MT) {
          const kT = document.createElement("div");
          kT.className = "FrontlineDamageArc", kT.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(kT), MT = {
            element: kT,
            direction: TT,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(MT)
        }
        MT.direction = TT, this.drawArcAngle(MT);
        const KT = MT.fade ? Number(getComputedStyle(MT.element).opacity) : 0;
        null === (cT = MT.fade) || void 0 === cT || cT.cancel(), null === (lT = MT.pop) || void 0 === lT || lT.cancel(), MT.element.style.opacity = "1";
        const OT = MT.element.animate([{
          opacity: KT
        }, {
          opacity: 1
        }], 144);
        MT.fade = OT, MT.pop = MT.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * kT
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const yT = MT;
        OT.onfinish = () => {
          if (yT.fade !== OT) return;
          const TT = yT.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          TT.startTime = OT.startTime, yT.fade = TT, TT.onfinish = () => {
            yT.fade === TT && (yT.element.remove(), mT(this.arcs, yT))
          }
        }
      }
      drawArcAngle(TT) {
        const kT = TT.direction - this.cameraHeading;
        (null === TT.drawnAngle || Math.abs(kT - TT.drawnAngle) > .005) && (TT.drawnAngle = kT, TT.element.style.rotate = `${kT}rad`)
      }
      flashEdge(TT, kT) {
        var cT, lT, MT;
        if (!this.root) return;
        let KT = this.flashes.find((kT => null === kT.angle || null === TT ? kT.angle === TT : PT(kT.angle, TT) < .5));
        if (!KT) {
          const kT = document.createElement("div");
          kT.className = "FrontlineDamageFlash";
          const cT = kT.appendChild(document.createElement("div"));
          cT.className = "FrontlineDamageFlashGlow", this.root.insertBefore(kT, this.arcLayer), KT = {
            element: kT,
            glow: cT,
            angle: TT,
            level: 0,
            animation: null
          }, this.flashes.push(KT)
        }
        const OT = null === (cT = KT.animation) || void 0 === cT || null === (lT = cT.effect) || void 0 === lT ? void 0 : lT.getComputedTiming().progress,
          yT = null === OT || void 0 === OT ? 0 : KT.level * (1 - OT);
        KT.level = Math.min(1, Math.max(kT, yT + .6 * kT)), KT.angle = TT;
        const {
          x: fT,
          y: xT,
          rx: IT,
          ry: AT
        } = function(TT, kT) {
          const cT = window.innerWidth,
            lT = window.innerHeight;
          if (null === TT) return {
            x: cT / 2,
            y: lT / 2,
            rx: 0,
            ry: 0
          };
          const MT = Math.sin(TT),
            KT = -Math.cos(TT),
            OT = cT / 2 / Math.max(1e-6, Math.abs(MT)),
            yT = lT / 2 / Math.max(1e-6, Math.abs(KT)),
            fT = Math.min(OT, yT),
            xT = Math.round(cT / 2 + MT * fT),
            IT = Math.round(lT / 2 + KT * fT),
            AT = lT / 100 * (.85 + .25 * kT),
            CT = OT <= yT,
            jT = Math.round((CT ? 30 : 74) * AT),
            vT = Math.round((CT ? 58 : 26) * AT);
          return {
            x: xT,
            y: IT,
            rx: jT,
            ry: vT
          }
        }(TT, KT.level), {
          style: CT
        } = KT.glow;
        KT.glow.classList.toggle("Everywhere", null === TT), CT.setProperty("--glowX", `${fT}px`), CT.setProperty("--glowY", `${xT}px`), CT.setProperty("--glowRx", `${IT}px`), CT.setProperty("--glowRy", `${AT}px`), KT.element.style.transformOrigin = `${fT}px ${xT}px`, null === (MT = KT.animation) || void 0 === MT || MT.cancel();
        const jT = KT.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: KT.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * KT.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * KT.level
        });
        KT.animation = jT;
        const vT = KT;
        jT.onfinish = () => {
          vT.animation === jT && (vT.element.remove(), mT(this.flashes, vT))
        }
      }
      clearHits() {
        for (const lT of this.arcs) {
          var TT, kT;
          null === (TT = lT.fade) || void 0 === TT || TT.cancel(), lT.fade = null, null === (kT = lT.pop) || void 0 === kT || kT.cancel(), lT.element.remove()
        }
        this.arcs.length = 0;
        for (const lT of this.flashes) {
          var cT;
          null === (cT = lT.animation) || void 0 === cT || cT.cancel(), lT.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function PT(TT, kT) {
      return Math.abs(Math.atan2(Math.sin(TT - kT), Math.cos(TT - kT)))
    }

    function wT(TT) {
      return Math.max(0, Math.min(1, TT))
    }

    function mT(TT, kT) {
      const cT = TT.indexOf(kT); - 1 !== cT && TT.splice(cT, 1)
    }
    var bT = cT(1046),
      zT = cT.n(bT),
      JT = cT(36416),
      oT = cT(36506),
      HT = cT(1195),
      eT = cT(1461);
    const GT = "frontlineHudChanged",
      VT = "frontlineScoreboardChanged";
    class ET {
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
      Av(TT) {
        this.wire = TT, xT.k.nt(GT, TT, !0)
      }
      receiveScoreboard(TT) {
        let kT = "scoreboard" === TT[0] ? performance.now() + TT[5] : 0;
        const cT = this.scoreboard.endsAt;
        0 !== kT && 0 !== cT && Math.abs(kT - cT) < 1e3 && (kT = cT), this.scoreboard = {
          wire: TT,
          endsAt: kT
        }, xT.k.nt(VT, this.scoreboard, !0)
      }
    }
    var ZT = cT(1099);
    const uT = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function XT(TT) {
      const [kT, cT] = (0, MT.useState)((() => (TT - performance.now()) / 1e3));
      return (0, MT.useEffect)((() => {
        if (0 === TT) return;
        const kT = () => {
          cT((TT - performance.now()) / 1e3)
        };
        kT();
        const lT = window.setInterval(kT, 250);
        return () => {
          window.clearInterval(lT)
        }
      }), [TT]), kT
    }

    function dT(TT) {
      let {
        className: kT,
        point: cT
      } = TT;
      const [lT, MT, KT, OT, yT, fT] = cT;
      return (0, ZT.jsxs)("div", {
        className: zT()(kT, `Owner-${MT||"None"}`, `Leader-${OT||"None"}`, {
          Contested: yT,
          Here: fT
        }),
        children: [(0, ZT.jsx)("span", {
          className: "FrontlinePointLetter",
          children: lT
        }), (0, ZT.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${KT}%`
          }
        })]
      })
    }
    const LT = (0, MT.memo)((function(TT) {
        let {
          points: kT,
          markers: cT
        } = TT;
        const {
          t: lT
        } = (0, HT.B)();
        return kT ? (0, ZT.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: kT.map((TT => {
            const [kT, , , , , , , MT] = TT;
            return (0, ZT.jsxs)("div", {
              ref: cT.bindMarker(kT),
              className: "FrontlinePointMarker",
              children: [(0, ZT.jsx)(dT, {
                className: "FrontlinePointMarkerTile",
                point: TT
              }), (0, ZT.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [MT && (0, ZT.jsx)("span", {
                  className: zT()("FrontlinePointMarkerHomeTurf", `Team-${MT}`),
                  children: lT("frontlineHud:homeTurf", {
                    team: lT(uT[MT])
                  })
                }), (0, ZT.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, kT)
          }))
        }) : null
      })),
      RT = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      gT = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function UT(TT) {
      let {
        hud: kT,
        crosshair: cT,
        damage: lT,
        markers: MT
      } = TT;
      const KT = (0, eT.i)(GT, kT.getWire()),
        OT = (0, eT.i)(VT, kT.getScoreboard());
      return (0, ZT.jsxs)(ZT.Fragment, {
        children: [(0, ZT.jsx)(YT, {
          damage: lT
        }), (0, ZT.jsx)(LT, {
          points: "scoreboard" === OT.wire[0] ? OT.wire[6] : null,
          markers: MT
        }), (0, ZT.jsx)(WT, {
          view: OT
        }), (0, ZT.jsx)("div", {
          className: "FrontlineReticle",
          ref: cT.bindElement
        }), (0, ZT.jsx)(JT.g, {
          children: (0, ZT.jsx)(BT, {
            wire: KT
          })
        })]
      })
    }
    const YT = (0, MT.memo)((function(TT) {
        let {
          damage: kT
        } = TT;
        return (0, ZT.jsxs)("div", {
          className: "FrontlineDamage",
          ref: kT.bindElement,
          children: [(0, ZT.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, ZT.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, ZT.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      BT = (0, MT.memo)((function(TT) {
        let {
          wire: kT
        } = TT;
        const {
          t: cT
        } = (0, HT.B)();
        if ("capture" === kT[0]) {
          const [, TT, lT, MT, KT, OT, yT] = kT, fT = Math.round(MT / 100 * 24);
          return (0, ZT.jsxs)("div", {
            className: zT()("FrontlinePlate", `Status-${lT}`, `Leader-${KT||"None"}`),
            children: [(0, ZT.jsx)(qT, {}), (0, ZT.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, ZT.jsx)("span", {
                className: "FrontlineObjective",
                children: TT
              }), (0, ZT.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, ZT.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: cT("frontlineHud:objective", {
                    point: TT,
                    friendly: OT,
                    enemy: yT
                  })
                }), (0, ZT.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: cT(RT[lT])
                })]
              }), (0, ZT.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(MT).padStart(3, "0"), (0, ZT.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, ZT.jsx)(pT, {
              segments: 24,
              lit: fT
            })]
          })
        }
        if ("alert" === kT[0]) {
          const [, TT, lT, MT] = kT;
          return (0, ZT.jsxs)("div", {
            className: zT()("FrontlinePlate", "FrontlineAlert", `Tone-${MT}`),
            children: [(0, ZT.jsx)(qT, {}), (0, ZT.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: cT(gT[TT])
            }), (0, ZT.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: lT
            })]
          })
        }
        return null
      })),
      WT = (0, MT.memo)((function(TT) {
        let {
          view: kT
        } = TT;
        const {
          t: cT
        } = (0, HT.B)(), lT = (0, MT.useRef)(null), KT = function(TT, kT) {
          const [cT, lT] = (0, MT.useState)(!1);
          return (0, MT.useLayoutEffect)((() => {
            const kT = TT.current;
            if (!kT) return;
            const cT = document.querySelector(`.${oT.g}`),
              MT = document.querySelector(`.${oT.j}`),
              KT = () => {
                var TT;
                const KT = kT.querySelector(".FrontlineTeamTrack"),
                  OT = (0, fT.getRemInPx)(),
                  yT = kT.getBoundingClientRect().width - 2 * (null !== (TT = null === KT || void 0 === KT ? void 0 : KT.getBoundingClientRect().width) && void 0 !== TT ? TT : 0),
                  xT = window.innerWidth / 2,
                  IT = cT ? cT.getBoundingClientRect().right : 0,
                  AT = MT ? MT.getBoundingClientRect().left : window.innerWidth,
                  CT = Math.min(xT - IT, AT - xT) - oT.c - yT / 2,
                  jT = CT < 6 * OT,
                  vT = jT ? (window.innerWidth - yT) / 2 - oT.c : CT;
                kT.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(vT,14*OT)))}px`), lT(jT)
              };
            KT();
            const OT = new ResizeObserver(KT);
            for (const TT of [kT, cT, MT]) TT && OT.observe(TT);
            return window.addEventListener("resize", KT), () => {
              OT.disconnect(), window.removeEventListener("resize", KT)
            }
          }), [TT, kT]), cT
        }(lT, "scoreboard" === kT.wire[0]);
        if ("scoreboard" !== kT.wire[0]) return null;
        const [, OT, yT, xT, IT, , AT] = kT.wire, CT = "Red" === OT ? "Blue" : "Red";
        return (0, ZT.jsxs)("div", {
          className: zT()("FrontlineScoreboardContainer", {
            Below: KT
          }),
          children: [(0, ZT.jsxs)("div", {
            ref: lT,
            className: "FrontlineScoreboard",
            children: [(0, ZT.jsx)(qT, {}), (0, ZT.jsx)(nT, {
              team: OT,
              tickets: yT,
              goal: IT,
              side: "Friendly"
            }), (0, ZT.jsx)("div", {
              className: "FrontlinePoints",
              children: AT.map((TT => (0, ZT.jsx)(dT, {
                className: "FrontlinePoint",
                point: TT
              }, TT[0])))
            }), (0, ZT.jsx)(nT, {
              team: CT,
              tickets: xT,
              goal: IT,
              side: "Enemy"
            })]
          }), (0, ZT.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, ZT.jsx)(iT, {
              endsAt: kT.endsAt
            }), (0, ZT.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: cT("frontlineHud:ticketGoal", {
                goal: IT
              })
            })]
          })]
        })
      }));

    function nT(TT) {
      let {
        team: kT,
        tickets: cT,
        goal: lT,
        side: MT
      } = TT;
      const {
        t: KT
      } = (0, HT.B)(), OT = String(cT).padStart(3, "0"), yT = OT.search(/[1-9]/), fT = -1 === yT ? OT : OT.slice(0, yT), xT = Math.min(20, Math.floor(cT / lT * 20));
      return (0, ZT.jsxs)("div", {
        className: zT()("FrontlineTeamScore", MT, `Team-${kT}`),
        children: [(0, ZT.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, ZT.jsx)("span", {
            className: "Lead",
            children: fT
          }), -1 !== yT && OT.slice(yT)]
        }), (0, ZT.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, ZT.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: KT(uT[kT])
          }), (0, ZT.jsx)(pT, {
            segments: 20,
            lit: xT
          })]
        })]
      })
    }

    function pT(TT) {
      let {
        segments: kT,
        lit: cT
      } = TT;
      return (0, ZT.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: kT
        }, ((TT, kT) => (0, ZT.jsx)("i", {
          className: zT()({
            Lit: kT < cT
          })
        }, kT)))
      })
    }

    function iT(TT) {
      let {
        endsAt: kT
      } = TT;
      const cT = Math.max(0, Math.ceil(XT(kT)));
      return (0, ZT.jsxs)("div", {
        className: zT()("FrontlineClock", {
          Urgent: cT <= 60
        }),
        children: [Math.floor(cT / 60), ":", String(cT % 60).padStart(2, "0")]
      })
    }

    function qT() {
      return (0, ZT.jsxs)(ZT.Fragment, {
        children: [(0, ZT.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ZT.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var sT = cT(36504),
      Tk = cT(1261),
      kk = cT(38332),
      ck = cT(38388);
    class lk {
      constructor(TT) {
        var kT;
        this.hud = TT, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.yv = !1, this.zN = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.zN), null === (kT = window.visualViewport) || void 0 === kT || kT.addEventListener("resize", this.zN)
      }
      bindMarker(TT) {
        let kT = this.refs.get(TT);
        return kT || (kT = kT => {
          var cT;
          null === (cT = this.markers.get(TT)) || void 0 === cT || cT.stopObserving(), this.markers.delete(TT), kT && !this.yv && this.markers.set(TT, this.mount(kT))
        }, this.refs.set(TT, kT)), kT
      }
      frame(TT, kT) {
        this.render = TT;
        const cT = this.hud.getScoreboard().wire;
        if ("scoreboard" === cT[0] && 0 !== this.markers.size)
          for (const [lT, , , , , , MT] of cT[6]) {
            const TT = this.markers.get(lT);
            TT && MT && (TT.target ??= [0, 0, 0], TT.target[0] = MT[0], TT.target[1] = MT[1] + 2.5, TT.target[2] = MT[2], this.place(TT), this.vT(TT, kT && Math.hypot(MT[0] - kT[0], MT[1] - kT[1], MT[2] - kT[2])))
          }
      }
      dispose() {
        var TT;
        this.yv = !0, window.removeEventListener("resize", this.zN), null === (TT = window.visualViewport) || void 0 === TT || TT.removeEventListener("resize", this.zN);
        for (const kT of this.markers.values()) kT.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(TT) {
        const {
          render: kT,
          viewport: cT
        } = this;
        if (!kT || !TT.target) return;
        const lT = (50 - kT.screenBandPct.y) / 100 * cT.height,
          MT = {
            x: TT.halfSize.width + 8,
            top: TT.halfSize.height + 8,
            bottom: TT.halfSize.height + TT.labelsBelow + lT
          },
          KT = kT.projectWorldPosToViewport(TT.target),
          OT = null !== KT && void 0 !== KT ? KT : kT.projectWorldPosToScreenPos(TT.target),
          yT = (0, ck.d)({
            x: OT.x,
            y: OT.y,
            text: KT
          }, MT, cT);
        (0, kk.e)(TT.root, Math.round(100 * yT.x) / 100, Math.round(100 * yT.y) / 100)
      }
      vT(TT, kT) {
        if (null === kT) return void(null !== TT.metres && (TT.metres = null, TT.distance.textContent = ""));
        const cT = Date.now();
        (null === TT.metres || (0, sT.c)(kT, TT.metres, TT.metresShownAt)) && (TT.metres = Math.round(kT), TT.metresShownAt = cT, TT.distance.textContent = (0, HT.w)(Tk.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(TT.metres)
        }))
      }
      mount(TT) {
        const kT = {
            root: TT,
            distance: TT.querySelector(".FrontlinePointMarkerDistance"),
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
          cT = TT.querySelector(".FrontlinePointMarkerLabels"),
          lT = new ResizeObserver((() => {
            kT.halfSize = {
              width: Math.max(TT.offsetWidth, cT.offsetWidth) / 2,
              height: TT.offsetHeight / 2
            }, kT.labelsBelow = cT.offsetTop + cT.offsetHeight - TT.offsetHeight, this.place(kT)
          }));
        return lT.observe(TT, {
          box: "border-box"
        }), lT.observe(cT, {
          box: "border-box"
        }), kT.stopObserving = () => {
          lT.disconnect()
        }, kT
      }
    }
    var Mk = cT(6440),
      Kk = cT(2623);
    const Ok = "frontlineRoundEndChanged";
    class yk {
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
      Av(TT) {
        const kT = "roundEnd" === TT[0] ? performance.now() + TT[5] : 0;
        this.view = {
          wire: TT,
          key: this.view.key + 1,
          endsAt: kT
        }, xT.k.nt(Ok, this.view, !0)
      }
    }
    const fk = (0, MT.lazy)((() => (0, Kk.e)(cT.e(191).then((() => cT(41323))), (TT => TT.FrontlineMvpLineup)))),
      xk = [4800, 4e3, 3200],
      Ik = [1, 0, 2],
      Ak = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Ck = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function jk(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, eT.i)(Ok, kT.getView()),
        lT = XT(cT.endsAt);
      return "roundEnd" !== cT.wire[0] || 1e3 * lT < -2e3 ? null : (0, ZT.jsx)(vk, {
        wire: cT.wire,
        secondsLeft: Math.max(0, Math.ceil(lT))
      }, cT.key)
    }
    const vk = (0, MT.memo)((function(TT) {
      let {
        wire: kT,
        secondsLeft: cT
      } = TT;
      const {
        t: KT
      } = (0, HT.B)(), [, OT, yT, fT, xT, , IT, AT] = kT, CT = (0, MT.useMemo)((() => Ik.filter((TT => TT < AT.length))), [AT]), jT = (0, MT.useMemo)((() => CT.map((TT => {
        const [, , , , , kT, cT] = AT[TT];
        return {
          cosmetics: lT.map(((TT, cT) => [TT, kT[cT]])),
          size: 0 === TT ? 1.15 : .85,
          heldGun: {
            name: cT,
            aimed: 0 === TT
          },
          showAfterMs: xk[TT]
        }
      }))), [AT, CT]);
      return (0, ZT.jsxs)("div", {
        className: zT()("FrontlineRoundEnd", `Result-${OT}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, ZT.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, ZT.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, ZT.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, ZT.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, ZT.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (vT = KT(Ak[OT]), /\p{Script=Arabic}/u.test(vT) ? [vT] : (0, Mk.e)(vT)).map(((TT, kT) => (0, ZT.jsx)("span", {
              style: {
                "--letter": kT
              },
              children: TT
            }, kT)))]
          }), (0, ZT.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [yT && "victory" === OT && (0, ZT.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: KT("frontlineRoundEnd:comeback")
            }), (0, ZT.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, ZT.jsx)("b", {
                className: "Friendly",
                children: fT
              }), " \u2013 ", (0, ZT.jsx)("b", {
                className: "Enemy",
                children: xT
              })]
            })]
          })]
        }), CT.length > 0 && (0, ZT.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": CT.length
          },
          children: [(0, ZT.jsx)(MT.Suspense, {
            fallback: null,
            children: (0, ZT.jsx)(fk, {
              className: "FrontlineRoundEndLineup",
              players: jT
            })
          }), CT.map((TT => (0, ZT.jsx)(tk, {
            mvp: AT[TT],
            place: TT
          }, TT)))]
        }), (0, ZT.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: KT("frontlineRoundEnd:nextFront", {
            map: IT,
            seconds: String(cT)
          })
        })]
      });
      var vT
    }));

    function tk(TT) {
      let {
        mvp: kT,
        place: cT
      } = TT;
      const {
        t: lT
      } = (0, HT.B)(), [MT, KT, OT, yT, fT] = kT, [xT, IT] = lT(function(TT, kT) {
        return 1 === kT && "damage" !== TT ? `frontlineRoundEnd:${TT}One` : `frontlineRoundEnd:${TT}`
      }(OT, yT), {
        name: "\0",
        count: yT.toLocaleString()
      }).split("\0");
      return (0, ZT.jsxs)("div", {
        className: zT()("FrontlineMvpCard", `Place-${cT+1}`, `Team-${KT}`),
        style: {
          "--revealMs": `${xk[cT]}ms`
        },
        children: [(0, ZT.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ZT.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, ZT.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: lT(Ck[cT])
        }), (0, ZT.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [xT, (0, ZT.jsx)("span", {
            className: "FrontlineMvpName",
            children: MT
          }), IT]
        }), (0, ZT.jsx)("div", {
          className: "FrontlineMvpKit",
          children: fT
        })]
      })
    }
    const hk = function(TT, kT, cT, lT) {
      let {
        localPlayerId: OT
      } = lT;
      const yT = new ET,
        fT = new yk;
      let xT = null,
        IT = null,
        AT = null,
        CT = null,
        jT = null,
        vT = [!1, !1];
      const tT = () => {
        var TT, kT;
        const [cT, lT] = vT;
        null === (TT = IT) || void 0 === TT || TT.PD(!cT), null === (kT = AT) || void 0 === kT || kT.PD(!lT)
      };
      return {
        onCreate: TT => {
          xT = TT, IT = new ST(TT, OT), AT = new rT(TT, OT), CT = new lk(yT), tT(), jT = (0, KT.q)((0, MT.createElement)(MT.Fragment, null, (0, MT.createElement)(UT, {
            hud: yT,
            crosshair: IT,
            damage: AT,
            markers: CT
          }), (0, MT.createElement)(jk, {
            controller: fT
          })))
        },
        onClose: () => {
          var TT, kT, cT, lT;
          null === (TT = jT) || void 0 === TT || TT(), null === (kT = IT) || void 0 === kT || kT.dispose(), IT = null, null === (cT = AT) || void 0 === cT || cT.dispose(), AT = null, null === (lT = CT) || void 0 === lT || lT.dispose(), CT = null, xT = null
        },
        onAfterRender: (TT, kT) => {
          var cT, lT, MT, KT;
          null === (cT = IT) || void 0 === cT || cT.frame(TT, kT.tanHalfFovY), null === (lT = AT) || void 0 === lT || lT.frame(kT.cameraHeading), null === (MT = CT) || void 0 === MT || MT.frame(kT, null !== (KT = xT) && void 0 !== KT && KT.checkValid(OT) ? xT.kN(OT) : null)
        },
        onReceivedMessageFromServer: (TT, kT) => {
          "frontlineHud" === TT ? yT.Av(kT) : "frontlineScoreboard" === TT ? yT.receiveScoreboard(kT) : "frontlineRoundEnd" === TT ? fT.Av(kT) : "frontlinePrefs" === TT && (vT = kT, tT())
        }
      }
    }
  },
  6440: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    const lT = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function MT(TT) {
      return null === lT ? Array.from(TT) : Array.from(lT.segment(TT), (TT => {
        let {
          segment: kT
        } = TT;
        return kT
      }))
    }
  },
  38332: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      g: () => KT
    });
    const lT = new WeakMap;

    function MT(TT) {
      let kT = lT.get(TT);
      return kT || (kT = {
        hidden: TT.hidden,
        x: NaN,
        y: NaN
      }, lT.set(TT, kT)), kT
    }

    function KT(TT, kT) {
      const cT = MT(TT);
      cT.hidden !== kT && (cT.hidden = kT, TT.hidden = kT)
    }

    function OT(TT, kT, cT) {
      const lT = MT(TT);
      lT.x === kT && lT.y === cT || (lT.x = kT, lT.y = cT, TT.style.translate = `${kT}vw ${cT}vh`)
    }
  },
  36864: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    const lT = {
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
for (const TT in modules) Object.freeze(modules[TT]);