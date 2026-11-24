export const id = 17;
export const ids = [17];
export const modules = {
  36687: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => pT,
      d: () => BT,
      h: () => LT,
      i: () => lT
    });
    var WT = mT(34270),
      zT = mT(36693),
      MT = mT(36698),
      gT = mT(8852),
      nT = mT(1567),
      HT = mT(63),
      kT = mT(85),
      jT = mT(1188);

    function lT() {
      var TT;
      return (0, nT.j)(zT.b, (0, zT.j)()), (0, jT.jsx)(jT.Fragment, {
        children: null === (TT = (0, zT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var UT;
      let {
        show: mT
      } = TT;
      (0, nT.j)(zT.b, (0, zT.j)());
      const kT = null === (UT = (0, zT.j)()) || void 0 === UT ? void 0 : UT.menu;
      return (0, HT.useEffect)((() => {
        var TT;
        mT || (null === kT || void 0 === kT || null === (TT = kT.onClose) || void 0 === TT || TT.call(kT), (0, MT.n)())
      }), [mT, kT]), (0, HT.useEffect)((() => mT ? (0, gT.f)(MT.s, MT.d) : void 0), [mT]), (0, jT.jsx)(WT.e, {
        showing: mT,
        globallyUniqueKey: "clientGameMenu",
        children: null === kT || void 0 === kT ? void 0 : kT.content
      })
    }

    function pT(TT) {
      let {
        placement: UT = "bottom"
      } = TT;
      return (0, jT.jsx)("div", {
        id: `clientGameHud-${UT}`,
        style: {
          display: "contents"
        }
      })
    }

    function BT(TT) {
      let {
        children: UT,
        placement: mT = "bottom"
      } = TT;
      const [WT, zT] = (0, HT.useState)(null);
      return (0, HT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${mT}`))
      }), [mT]), WT ? (0, kT.createPortal)(UT, WT) : null
    }
  },
  34270: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(4641),
      zT = mT(4650);

    function MT(TT) {
      let {
        children: UT,
        showing: mT,
        globallyUniqueKey: MT,
        alwaysMountChildren: gT = !1,
        doGameplayStartStopOnShow: nT = !0,
        keepsMovement: HT = !1
      } = TT;
      return (0, zT.d)(!0, mT, MT, HT), (0, WT.c)(nT, mT), mT || gT ? UT : null
    }
  },
  36776: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      e: () => gT,
      h: () => nT,
      j: () => HT
    });
    var WT = mT(63),
      zT = mT(3239);
    const MT = 8,
      gT = "InGameHeaderContainer",
      nT = "TopRightElements";

    function HT(TT) {
      const [UT] = (0, zT.e)(), [mT, HT] = (0, WT.useState)(!1);
      return (0, WT.useLayoutEffect)((() => {
        if (!TT) return;
        const UT = document.querySelector(`.${gT}`),
          mT = document.querySelector(`.${nT}`),
          WT = () => {
            const WT = TT.getBoundingClientRect(),
              zT = UT ? UT.getBoundingClientRect().right : 0,
              gT = mT ? mT.getBoundingClientRect().left : window.innerWidth,
              nT = WT.left < zT + MT,
              kT = WT.right > gT - MT;
            HT(nT || kT)
          };
        WT();
        const zT = new ResizeObserver(WT);
        return zT.observe(TT), UT && zT.observe(UT), mT && zT.observe(mT), () => {
          zT.disconnect()
        }
      }), [TT, UT]), mT
    }
  },
  36772: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    const WT = [{
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

    function zT(TT, UT, mT) {
      const zT = Math.abs(TT - UT),
        MT = Date.now() - mT;
      for (const gT of WT)
        if (TT < gT.maxDist) return zT >= gT.hardUpdateDist || MT > gT.timeBetweenSoftChecks && zT >= gT.softUpdateDist;
      return !1
    }
  },
  8852: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      f: () => zT
    });
    let WT = null;
    const zT = function(TT) {
        const UT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return WT = UT, () => {
          WT === UT && (WT = null)
        }
      },
      MT = () => {
        var TT;
        return null !== (TT = WT) && void 0 !== TT && TT.canCycle() ? WT.cycle : null
      }
  },
  38669: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      var WT;
      const {
        width: zT,
        height: MT
      } = mT, gT = null !== (WT = TT.text) && void 0 !== WT ? WT : TT, nT = (gT.x / 100 - .5) * zT, HT = (gT.y / 100 - .5) * MT, kT = zT / 2 - UT.x;
      if (null !== TT.text && Math.abs(nT) <= kT && HT >= UT.top - MT / 2 && HT <= MT / 2 - UT.bottom) return {
        x: gT.x,
        y: gT.y
      };
      const jT = Math.min(0 === nT ? 1 / 0 : kT / Math.abs(nT), HT > 0 ? (MT / 2 - UT.bottom) / HT : HT < 0 ? (UT.top - MT / 2) / HT : 1 / 0);
      return !Number.isFinite(jT) || jT < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + nT * jT / zT * 100,
        y: 50 + HT * jT / MT * 100
      }
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  36698: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => ZT,
      h: () => cT,
      j: () => nT,
      l: () => LT,
      n: () => vT,
      p: () => lT,
      r: () => qT,
      s: () => BT,
      v: () => fT
    });
    var WT = mT(25),
      zT = mT(31);
    const MT = "clientGameInventoryButtonsChanged",
      gT = new Map;

    function nT() {
      return [...gT.values()].sort(((TT, UT) => {
        var mT, WT;
        return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
      }))
    }
    let HT = null;

    function kT(TT) {
      HT = TT
    }
    let jT = !1;

    function lT(TT) {
      jT = !0;
      try {
        TT.onClick()
      } finally {
        jT = !1
      }
      TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
    }

    function LT() {
      return jT
    }

    function pT() {
      return nT().filter((TT => TT.panel && !TT.disabled))
    }

    function BT(TT) {
      const UT = pT(),
        mT = UT.findIndex((TT => TT.id === HT));
      return !(mT < 0 || UT.length < 2) && (lT(UT[(mT + TT + UT.length) % UT.length]), !0)
    }

    function ZT() {
      return null !== HT && pT().length > 1
    }

    function cT() {
      kT(null)
    }

    function vT() {
      "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
    }

    function fT() {
      const TT = HT;
      return kT(null), TT
    }

    function qT(TT) {
      return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
        gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
      }
    }
  },
  36693: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      d: () => cT,
      f: () => vT,
      i: () => LT,
      j: () => kT,
      l: () => ZT,
      n: () => pT,
      q: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(36698);
    const nT = "clientGameUiChanged";
    let HT = null;

    function kT() {
      return HT
    }

    function jT(TT, UT) {
      const mT = {
        content: TT,
        menu: UT
      };
      return HT = mT, zT.j.EZ(nT, HT, !0), () => {
        HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
      }
    }
    let lT = null;

    function LT() {
      return lT
    }

    function pT(TT) {
      return lT = TT, () => {
        lT === TT && (lT = null)
      }
    }
    let BT = !1;

    function ZT() {
      const TT = WT.b.get("openInGameMenuName");
      "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function cT() {
      fT(!1)
    }

    function vT() {
      fT(BT)
    }

    function fT(TT) {
      "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, gT.h)(), BT = !1
    }
  },
  39557: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => cU
    });
    const WT = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var zT = mT(63),
      MT = mT(36693),
      gT = mT(37125),
      nT = mT(36710),
      HT = mT(1863),
      kT = mT(31);
    const jT = {
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
    const lT = 32;

    function LT(TT, UT, mT, WT) {
      return {
        tag: "line",
        attrs: {
          x1: TT,
          y1: UT,
          x2: mT,
          y2: WT,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function pT(TT) {
      return {
        tag: "circle",
        attrs: {
          cx: lT,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT,
          r: TT,
          class: "Fill"
        }
      }
    }

    function BT(TT, UT) {
      return {
        tag: "path",
        attrs: {
          d: TT,
          "stroke-width": UT
        }
      }
    }

    function ZT(TT, UT, mT) {
      return {
        tag: "circle",
        attrs: {
          cx: lT,
          cy: lT,
          r: TT,
          "stroke-width": UT,
          class: mT
        }
      }
    }

    function cT(TT, UT, mT) {
      return {
        tag: "text",
        attrs: {
          x: TT,
          y: UT,
          class: "Fill Label"
        },
        text: mT
      }
    }
    const vT = {
      pistol: TT => [LT(lT, lT - TT - 5, lT, lT - TT), LT(lT - TT - 5, lT, lT - TT, lT), LT(lT + TT, lT, lT + TT + 5, lT), pT(1.4)],
      rifle: TT => [LT(lT, lT - TT - 8, lT, lT - TT), LT(lT, lT + TT, lT, lT + TT + 8), LT(lT - TT - 8, lT, lT - TT, lT), LT(lT + TT, lT, lT + TT + 8, lT), pT(1)],
      smg: TT => {
        const UT = Math.PI / 2,
          mT = [];
        for (let gT = 0; gT < 4; gT++) mT.push((zT = gT * UT + .35, MT = (gT + 1) * UT - .35, BT(`M${lT+(WT=6+TT)*Math.cos(zT)} ${lT+WT*Math.sin(zT)} A${WT} ${WT} 0 0 1 ${lT+WT*Math.cos(MT)} ${lT+WT*Math.sin(MT)}`, 2)));
        var WT, zT, MT;
        return [...mT, pT(1.4)]
      },
      shotgun: TT => [ZT(TT, 3, "Ring Outline"), ZT(TT, 1.5, "Ring")],
      marksman: TT => [BT(`M${26-TT/2} ${39+TT/2} L32 33 L${38+TT/2} ${39+TT/2}`, 2), LT(14 - TT, lT, 24 - TT, lT, 1.5), LT(40 + TT, lT, 50 + TT, lT, 1.5), LT(14 - TT, 30, 14 - TT, 34, 1.5), LT(50 + TT, 30, 50 + TT, 34, 1.5)],
      machineGun: TT => {
        const UT = 10 + TT,
          mT = [];
        for (const [WT, zT] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) mT.push(BT(`M${lT+WT*UT} ${lT+zT*(UT-5)} L${lT+WT*UT} ${lT+zT*UT} L${lT+WT*(UT-5)} ${lT+zT*UT}`, 2));
        return [...mT, LT(lT, 28, lT, 36, 1.5), LT(28, lT, 36, lT, 1.5)]
      },
      launcher: () => [LT(14, 30, 50, 30, 1.5), LT(lT, 24, lT, 52, 1.5), LT(28, 38, 36, 38, 1.5), LT(29, 44, 35, 44, 1.5), LT(30, 50, 34, 50, 1.5), cT(38, 40, "100"), cT(37, 46, "200"), pT(1.4, 30)],
      melee: () => [BT("M32 26 L38 32 L32 38 L26 32 Z", 1.5), pT(1.2)],
      throwable: () => [pT(1.6)]
    };

    function fT(TT) {
      let {
        tag: UT,
        attrs: mT,
        text: WT
      } = TT, zT = `<${UT}`;
      for (const [MT, gT] of Object.entries(mT)) zT += ` ${MT}="${gT}"`;
      return void 0 === WT ? `${zT}/>` : `${zT}>${WT}</${UT}>`
    }
    class qT {
      constructor(TT, UT) {
        this.api = TT, this.localPlayerId = UT, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = TT => {
          this.element = TT, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, TT && !this.enabled && (TT.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, HT.getRemInPx)()))
        }, this.tokens = [kT.j.subscribe("aimingOverlay", (TT => {
          this.sniperOverlay = "sniper" === TT
        })), kT.j.subscribe("mouseState", (TT => {
          let {
            isDown: UT
          } = TT;
          this.mouseDown = UT
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Qy(TT) {
        TT !== this.enabled && (this.enabled = TT, this.drawnVisible = null, TT || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(TT, UT) {
        var mT, WT;
        if (!this.enabled) return;
        const {
          api: zT
        } = this, MT = zT.isAlive(this.localPlayerId) && null !== (mT = null === (WT = zT.RUT(this.localPlayerId)) || void 0 === WT ? void 0 : WT.name) && void 0 !== mT ? mT : null, gT = (nT = MT) && jT[nT] || null;
        var nT;
        if (this.setOwnsCrosshair(null !== gT), !this.element) return;
        const HT = zT.getHeldGunInaccuracy(),
          kT = null !== HT,
          lT = null !== gT && !this.sniperOverlay && zT.isCrosshairShown();
        if (lT !== this.drawnVisible && (this.drawnVisible = lT, this.element.style.display = lT ? "block" : "none"), !lT) return;
        const LT = kT ? function(TT) {
            return "launcher" === TT || "melee" === TT || "throwable" === TT ? "none" : "shotgun" === TT ? "cone" : "offset"
          }(gT) : "none",
          pT = null !== HT && void 0 !== HT ? HT : 0;
        "cone" === LT ? this.drawCone(gT, this.coneRadiusVh(pT, UT) * this.gapPerVh, TT) : (this.coneDrawn = !1, this.draw(gT, "none" === LT ? 2 : this.offsetGap(pT)));
        const BT = !kT && this.mouseDown;
        BT !== this.drawnPressed && (this.drawnPressed = BT, this.element.classList.toggle("Pressed", BT))
      }
      dispose() {
        for (const TT of this.tokens) kT.j.unsubscribe(TT);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(TT, UT) {
        var mT, WT;
        TT !== this.drawnFamily ? (this.drawnFamily = TT, this.drawnGap = UT, this.element.innerHTML = function(TT, UT) {
          return `<svg viewBox="0 0 64 64">${vT[TT](UT).map(fT).join("")}</svg>`
        }(TT, UT), this.shapes = Array.from(null !== (mT = null === (WT = this.element.firstElementChild) || void 0 === WT ? void 0 : WT.children) && void 0 !== mT ? mT : [])) : UT !== this.drawnGap && (this.drawnGap = UT, function(TT, UT, mT) {
          const WT = vT[UT](mT);
          for (let zT = 0; zT < WT.length; zT++)
            for (const [UT, mT] of Object.entries(WT[zT].attrs)) {
              const WT = String(mT);
              TT[zT].getAttribute(UT) !== WT && TT[zT].setAttribute(UT, WT)
            }
        }(this.shapes, TT, UT))
      }
      drawCone(TT, UT, mT) {
        TT === this.drawnFamily && this.coneDrawn ? this.shownRadius += (UT - this.shownRadius) * (1 - Math.exp(-mT / 80)) : this.shownRadius = UT, this.coneDrawn = !0, this.draw(TT, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(TT, UT) {
        if (!(UT > 0)) return 1;
        const mT = TT * gT.h / 2;
        return Math.max(50 * Math.tan(mT) / UT, 1)
      }
      offsetGap(TT) {
        const UT = 2 + ((0, nT.h)(TT) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * UT) / 2)
      }
      setOwnsCrosshair(TT) {
        TT !== this.ownsCrosshair && (this.ownsCrosshair = TT, document.body.classList.toggle("FrontlineCustomCrosshair", TT))
      }
    }
    const iT = "FrontlineCustomDamage",
      bT = .45,
      OT = .2;
    class eT {
      constructor(TT, UT) {
        this.api = TT, this.localPlayerId = UT, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.yT = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = TT => {
          var UT, mT;
          this.clearHits(), this.root = TT, this.lowLayer = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".FrontlineDamageLow")) && void 0 !== UT ? UT : null, this.arcLayer = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".FrontlineDamageArcs")) && void 0 !== mT ? mT : null, this.showRoot(), this.drawLow()
        }, this.token = kT.j.subscribe("damagedByOtherPlayer", (TT => {
          let {
            direction: UT,
            tT: mT
          } = TT;
          this.onHurt(UT, mT)
        })), this.syncHealth(), document.body.classList.add(iT)
      }
      Qy(TT) {
        TT !== this.enabled && (this.enabled = TT, document.body.classList.toggle(iT, TT), TT || this.clearHits(), this.showRoot())
      }
      frame(TT) {
        this.syncHealth(), this.cameraHeading = TT;
        for (const UT of this.arcs) this.drawArcAngle(UT)
      }
      dispose() {
        kT.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(iT)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const TT = this.api.getClientOption(this.localPlayerId, "_health"),
          UT = this.api.getClientOption(this.localPlayerId, "_shield"),
          mT = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(TT, this.readHealth) && Object.is(UT, this.readShield) && Object.is(mT, this.readMaxHealth)) return;
        if (this.readHealth = TT, this.readShield = UT, this.readMaxHealth = mT, null === TT || void 0 === TT || !mT) return this.lastHealthPool = null, this.maxHealth = null, this.yT = 1, this.dead = !1, void this.drawLow();
        const WT = TT + (null !== UT && void 0 !== UT ? UT : 0);
        if (null !== this.lastHealthPool && WT < this.lastHealthPool) {
          const TT = performance.now(),
            UT = (this.lastHealthPool - WT) / mT;
          this.lastDrop = TT - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + UT,
            at: this.lastDrop.at
          } : {
            frac: UT,
            at: TT
          }
        }
        this.dead = TT <= 0, this.dead && this.clearHits(), this.lastHealthPool = WT, this.maxHealth = mT, this.yT = TT > 0 ? TT / mT : 1, this.drawLow()
      }
      onHurt(TT, UT) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const mT = Math.min(1, this.takeDamageFrac(UT) / .3);
        null !== TT && this.showArc(TT, mT), this.flashEdge(null === TT ? null : TT - this.cameraHeading, .4 + .6 * mT)
      }
      takeDamageFrac(TT) {
        if (void 0 !== TT && this.maxHealth) return TT / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: UT
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, UT
      }
      drawLow() {
        if (!this.lowLayer) return;
        const TT = JT((bT - this.yT) / .25),
          UT = JT((OT - this.yT) / .15000000000000002),
          mT = this.yT < bT;
        this.lowLayer.classList.toggle("Active", mT), this.lowLayer.classList.toggle("Critical", this.yT < OT), this.lowLayer.style.opacity = String(mT ? .55 + .3 * TT + .15 * UT : 0)
      }
      showArc(TT, UT) {
        var mT, WT;
        if (!this.arcLayer) return;
        let zT = this.arcs.find((UT => YT(UT.direction, TT) < .6));
        if (!zT) {
          const UT = document.createElement("div");
          UT.className = "FrontlineDamageArc", UT.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(UT), zT = {
            element: UT,
            direction: TT,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(zT)
        }
        zT.direction = TT, this.drawArcAngle(zT);
        const MT = zT.fade ? Number(getComputedStyle(zT.element).opacity) : 0;
        null === (mT = zT.fade) || void 0 === mT || mT.cancel(), null === (WT = zT.pop) || void 0 === WT || WT.cancel(), zT.element.style.opacity = "1";
        const gT = zT.element.animate([{
          opacity: MT
        }, {
          opacity: 1
        }], 144);
        zT.fade = gT, zT.pop = zT.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * UT
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const nT = zT;
        gT.onfinish = () => {
          if (nT.fade !== gT) return;
          const TT = nT.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          TT.startTime = gT.startTime, nT.fade = TT, TT.onfinish = () => {
            nT.fade === TT && (nT.element.remove(), xT(this.arcs, nT))
          }
        }
      }
      drawArcAngle(TT) {
        const UT = TT.direction - this.cameraHeading;
        (null === TT.drawnAngle || Math.abs(UT - TT.drawnAngle) > .005) && (TT.drawnAngle = UT, TT.element.style.rotate = `${UT}rad`)
      }
      flashEdge(TT, UT) {
        var mT, WT, zT;
        if (!this.root) return;
        let MT = this.flashes.find((UT => null === UT.angle || null === TT ? UT.angle === TT : YT(UT.angle, TT) < .5));
        if (!MT) {
          const UT = document.createElement("div");
          UT.className = "FrontlineDamageFlash";
          const mT = UT.appendChild(document.createElement("div"));
          mT.className = "FrontlineDamageFlashGlow", this.root.insertBefore(UT, this.arcLayer), MT = {
            element: UT,
            glow: mT,
            angle: TT,
            level: 0,
            animation: null
          }, this.flashes.push(MT)
        }
        const gT = null === (mT = MT.animation) || void 0 === mT || null === (WT = mT.effect) || void 0 === WT ? void 0 : WT.getComputedTiming().progress,
          nT = null === gT || void 0 === gT ? 0 : MT.level * (1 - gT);
        MT.level = Math.min(1, Math.max(UT, nT + .6 * UT)), MT.angle = TT;
        const {
          x: HT,
          y: kT,
          rx: jT,
          ry: lT
        } = function(TT, UT) {
          const mT = window.innerWidth,
            WT = window.innerHeight;
          if (null === TT) return {
            x: mT / 2,
            y: WT / 2,
            rx: 0,
            ry: 0
          };
          const zT = Math.sin(TT),
            MT = -Math.cos(TT),
            gT = mT / 2 / Math.max(1e-6, Math.abs(zT)),
            nT = WT / 2 / Math.max(1e-6, Math.abs(MT)),
            HT = Math.min(gT, nT),
            kT = Math.round(mT / 2 + zT * HT),
            jT = Math.round(WT / 2 + MT * HT),
            lT = WT / 100 * (.85 + .25 * UT),
            LT = gT <= nT,
            pT = Math.round((LT ? 30 : 74) * lT),
            BT = Math.round((LT ? 58 : 26) * lT);
          return {
            x: kT,
            y: jT,
            rx: pT,
            ry: BT
          }
        }(TT, MT.level), {
          style: LT
        } = MT.glow;
        MT.glow.classList.toggle("Everywhere", null === TT), LT.setProperty("--glowX", `${HT}px`), LT.setProperty("--glowY", `${kT}px`), LT.setProperty("--glowRx", `${jT}px`), LT.setProperty("--glowRy", `${lT}px`), MT.element.style.transformOrigin = `${HT}px ${kT}px`, null === (zT = MT.animation) || void 0 === zT || zT.cancel();
        const pT = MT.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: MT.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * MT.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * MT.level
        });
        MT.animation = pT;
        const BT = MT;
        pT.onfinish = () => {
          BT.animation === pT && (BT.element.remove(), xT(this.flashes, BT))
        }
      }
      clearHits() {
        for (const WT of this.arcs) {
          var TT, UT;
          null === (TT = WT.fade) || void 0 === TT || TT.cancel(), WT.fade = null, null === (UT = WT.pop) || void 0 === UT || UT.cancel(), WT.element.remove()
        }
        this.arcs.length = 0;
        for (const WT of this.flashes) {
          var mT;
          null === (mT = WT.animation) || void 0 === mT || mT.cancel(), WT.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function YT(TT, UT) {
      return Math.abs(Math.atan2(Math.sin(TT - UT), Math.cos(TT - UT)))
    }

    function JT(TT) {
      return Math.max(0, Math.min(1, TT))
    }

    function xT(TT, UT) {
      const mT = TT.indexOf(UT); - 1 !== mT && TT.splice(mT, 1)
    }
    var dT = mT(1126),
      wT = mT.n(dT),
      tT = mT(36687),
      aT = mT(36776),
      yT = mT(1288),
      XT = mT(1567);
    const IT = "frontlineHudChanged",
      QT = "frontlineScoreboardChanged";
    class sT {
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
      pB(TT) {
        this.wire = TT, kT.j.EZ(IT, TT, !0)
      }
      receiveScoreboard(TT) {
        let UT = "scoreboard" === TT[0] ? performance.now() + TT[5] : 0;
        const mT = this.scoreboard.endsAt;
        0 !== UT && 0 !== mT && Math.abs(UT - mT) < 1e3 && (UT = mT), this.scoreboard = {
          wire: TT,
          endsAt: UT
        }, kT.j.EZ(QT, this.scoreboard, !0)
      }
    }
    var FT = mT(1188);
    const PT = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function VT(TT) {
      const [UT, mT] = (0, zT.useState)((() => (TT - performance.now()) / 1e3));
      return (0, zT.useEffect)((() => {
        if (0 === TT) return;
        const UT = () => {
          mT((TT - performance.now()) / 1e3)
        };
        UT();
        const WT = window.setInterval(UT, 250);
        return () => {
          window.clearInterval(WT)
        }
      }), [TT]), UT
    }

    function uT(TT) {
      let {
        className: UT,
        point: mT
      } = TT;
      const [WT, zT, MT, gT, nT, HT] = mT;
      return (0, FT.jsxs)("div", {
        className: wT()(UT, `Owner-${zT||"None"}`, `Leader-${gT||"None"}`, {
          Contested: nT,
          Here: HT
        }),
        children: [(0, FT.jsx)("span", {
          className: "FrontlinePointLetter",
          children: WT
        }), (0, FT.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${MT}%`
          }
        })]
      })
    }
    const CT = (0, zT.memo)((function(TT) {
        let {
          points: UT,
          markers: mT
        } = TT;
        const {
          t: WT
        } = (0, yT.z)();
        return UT ? (0, FT.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: UT.map((TT => {
            const [UT, , , , , , , zT] = TT;
            return (0, FT.jsxs)("div", {
              ref: mT.bindMarker(UT),
              className: "FrontlinePointMarker",
              children: [(0, FT.jsx)(uT, {
                className: "FrontlinePointMarkerTile",
                point: TT
              }), (0, FT.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [zT && (0, FT.jsx)("span", {
                  className: wT()("FrontlinePointMarkerHomeTurf", `Team-${zT}`),
                  children: WT("frontlineHud:homeTurf", {
                    team: WT(PT[zT])
                  })
                }), (0, FT.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, UT)
          }))
        }) : null
      })),
      rT = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      KT = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function ST(TT) {
      let {
        hud: UT,
        crosshair: mT,
        damage: WT,
        markers: zT
      } = TT;
      const MT = (0, XT.j)(IT, UT.getWire()),
        gT = (0, XT.j)(QT, UT.getScoreboard());
      return (0, FT.jsxs)(FT.Fragment, {
        children: [(0, FT.jsx)(GT, {
          damage: WT
        }), (0, FT.jsx)(CT, {
          points: "scoreboard" === gT.wire[0] ? gT.wire[6] : null,
          markers: zT
        }), (0, FT.jsx)(ET, {
          view: gT
        }), (0, FT.jsx)("div", {
          className: "FrontlineReticle",
          ref: mT.bindElement
        }), (0, FT.jsx)(tT.d, {
          children: (0, FT.jsx)(NT, {
            wire: MT
          })
        })]
      })
    }
    const GT = (0, zT.memo)((function(TT) {
        let {
          damage: UT
        } = TT;
        return (0, FT.jsxs)("div", {
          className: "FrontlineDamage",
          ref: UT.bindElement,
          children: [(0, FT.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, FT.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, FT.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      NT = (0, zT.memo)((function(TT) {
        let {
          wire: UT
        } = TT;
        const {
          t: mT
        } = (0, yT.z)();
        if ("capture" === UT[0]) {
          const [, TT, WT, zT, MT, gT, nT] = UT, HT = Math.round(zT / 100 * 24);
          return (0, FT.jsxs)("div", {
            className: wT()("FrontlinePlate", `Status-${WT}`, `Leader-${MT||"None"}`),
            children: [(0, FT.jsx)(AT, {}), (0, FT.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, FT.jsx)("span", {
                className: "FrontlineObjective",
                children: TT
              }), (0, FT.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, FT.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: mT("frontlineHud:objective", {
                    point: TT,
                    friendly: gT,
                    enemy: nT
                  })
                }), (0, FT.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: mT(rT[WT])
                })]
              }), (0, FT.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(zT).padStart(3, "0"), (0, FT.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, FT.jsx)(DT, {
              segments: 24,
              lit: HT
            })]
          })
        }
        if ("alert" === UT[0]) {
          const [, TT, WT, zT] = UT;
          return (0, FT.jsxs)("div", {
            className: wT()("FrontlinePlate", "FrontlineAlert", `Tone-${zT}`),
            children: [(0, FT.jsx)(AT, {}), (0, FT.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: mT(KT[TT])
            }), (0, FT.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: WT
            })]
          })
        }
        return null
      })),
      ET = (0, zT.memo)((function(TT) {
        let {
          view: UT
        } = TT;
        const {
          t: mT
        } = (0, yT.z)(), WT = (0, zT.useRef)(null), MT = function(TT, UT) {
          const [mT, WT] = (0, zT.useState)(!1);
          return (0, zT.useLayoutEffect)((() => {
            const UT = TT.current;
            if (!UT) return;
            const mT = document.querySelector(`.${aT.e}`),
              zT = document.querySelector(`.${aT.h}`),
              MT = () => {
                var TT;
                const MT = UT.querySelector(".FrontlineTeamTrack"),
                  gT = (0, HT.getRemInPx)(),
                  nT = UT.getBoundingClientRect().width - 2 * (null !== (TT = null === MT || void 0 === MT ? void 0 : MT.getBoundingClientRect().width) && void 0 !== TT ? TT : 0),
                  kT = window.innerWidth / 2,
                  jT = mT ? mT.getBoundingClientRect().right : 0,
                  lT = zT ? zT.getBoundingClientRect().left : window.innerWidth,
                  LT = Math.min(kT - jT, lT - kT) - aT.c - nT / 2,
                  pT = LT < 6 * gT,
                  BT = pT ? (window.innerWidth - nT) / 2 - aT.c : LT;
                UT.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(BT,14*gT)))}px`), WT(pT)
              };
            MT();
            const gT = new ResizeObserver(MT);
            for (const TT of [UT, mT, zT]) TT && gT.observe(TT);
            return window.addEventListener("resize", MT), () => {
              gT.disconnect(), window.removeEventListener("resize", MT)
            }
          }), [TT, UT]), mT
        }(WT, "scoreboard" === UT.wire[0]);
        if ("scoreboard" !== UT.wire[0]) return null;
        const [, gT, nT, kT, jT, , lT] = UT.wire, LT = "Red" === gT ? "Blue" : "Red";
        return (0, FT.jsxs)("div", {
          className: wT()("FrontlineScoreboardContainer", {
            Below: MT
          }),
          children: [(0, FT.jsxs)("div", {
            ref: WT,
            className: "FrontlineScoreboard",
            children: [(0, FT.jsx)(AT, {}), (0, FT.jsx)(hT, {
              team: gT,
              tickets: nT,
              goal: jT,
              side: "Friendly"
            }), (0, FT.jsx)("div", {
              className: "FrontlinePoints",
              children: lT.map((TT => (0, FT.jsx)(uT, {
                className: "FrontlinePoint",
                point: TT
              }, TT[0])))
            }), (0, FT.jsx)(hT, {
              team: LT,
              tickets: kT,
              goal: jT,
              side: "Enemy"
            })]
          }), (0, FT.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, FT.jsx)(oT, {
              endsAt: UT.endsAt
            }), (0, FT.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: mT("frontlineHud:ticketGoal", {
                goal: jT
              })
            })]
          })]
        })
      }));

    function hT(TT) {
      let {
        team: UT,
        tickets: mT,
        goal: WT,
        side: zT
      } = TT;
      const {
        t: MT
      } = (0, yT.z)(), gT = String(mT).padStart(3, "0"), nT = gT.search(/[1-9]/), HT = -1 === nT ? gT : gT.slice(0, nT), kT = Math.min(20, Math.floor(mT / WT * 20));
      return (0, FT.jsxs)("div", {
        className: wT()("FrontlineTeamScore", zT, `Team-${UT}`),
        children: [(0, FT.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, FT.jsx)("span", {
            className: "Lead",
            children: HT
          }), -1 !== nT && gT.slice(nT)]
        }), (0, FT.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, FT.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: MT(PT[UT])
          }), (0, FT.jsx)(DT, {
            segments: 20,
            lit: kT
          })]
        })]
      })
    }

    function DT(TT) {
      let {
        segments: UT,
        lit: mT
      } = TT;
      return (0, FT.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: UT
        }, ((TT, UT) => (0, FT.jsx)("i", {
          className: wT()({
            Lit: UT < mT
          })
        }, UT)))
      })
    }

    function oT(TT) {
      let {
        endsAt: UT
      } = TT;
      const mT = Math.max(0, Math.ceil(VT(UT)));
      return (0, FT.jsxs)("div", {
        className: wT()("FrontlineClock", {
          Urgent: mT <= 60
        }),
        children: [Math.floor(mT / 60), ":", String(mT % 60).padStart(2, "0")]
      })
    }

    function AT() {
      return (0, FT.jsxs)(FT.Fragment, {
        children: [(0, FT.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, FT.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var RT = mT(36772),
      TU = mT(1345),
      UU = mT(38622),
      mU = mT(38669);
    class WU {
      constructor(TT) {
        var UT;
        this.hud = TT, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.kB = !1, this.Qq = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Qq), null === (UT = window.visualViewport) || void 0 === UT || UT.addEventListener("resize", this.Qq)
      }
      bindMarker(TT) {
        let UT = this.refs.get(TT);
        return UT || (UT = UT => {
          var mT;
          null === (mT = this.markers.get(TT)) || void 0 === mT || mT.stopObserving(), this.markers.delete(TT), UT && !this.kB && this.markers.set(TT, this.mount(UT))
        }, this.refs.set(TT, UT)), UT
      }
      frame(TT, UT) {
        this.render = TT;
        const mT = this.hud.getScoreboard().wire;
        if ("scoreboard" === mT[0] && 0 !== this.markers.size)
          for (const [WT, , , , , , zT] of mT[6]) {
            const TT = this.markers.get(WT);
            TT && zT && (TT.target ??= [0, 0, 0], TT.target[0] = zT[0], TT.target[1] = zT[1] + 2.5, TT.target[2] = zT[2], this.place(TT), this.yU(TT, UT && Math.hypot(zT[0] - UT[0], zT[1] - UT[1], zT[2] - UT[2])))
          }
      }
      dispose() {
        var TT;
        this.kB = !0, window.removeEventListener("resize", this.Qq), null === (TT = window.visualViewport) || void 0 === TT || TT.removeEventListener("resize", this.Qq);
        for (const UT of this.markers.values()) UT.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(TT) {
        const {
          render: UT,
          viewport: mT
        } = this;
        if (!UT || !TT.target) return;
        const WT = (50 - UT.screenBandPct.y) / 100 * mT.height,
          zT = {
            x: TT.halfSize.width + 8,
            top: TT.halfSize.height + 8,
            bottom: TT.halfSize.height + TT.labelsBelow + WT
          },
          MT = UT.projectWorldPosToViewport(TT.target),
          gT = null !== MT && void 0 !== MT ? MT : UT.projectWorldPosToScreenPos(TT.target),
          nT = (0, mU.e)({
            x: gT.x,
            y: gT.y,
            text: MT
          }, zT, mT);
        (0, UU.d)(TT.root, Math.round(100 * nT.x) / 100, Math.round(100 * nT.y) / 100)
      }
      yU(TT, UT) {
        if (null === UT) return void(null !== TT.metres && (TT.metres = null, TT.distance.textContent = ""));
        const mT = Date.now();
        (null === TT.metres || (0, RT.b)(UT, TT.metres, TT.metresShownAt)) && (TT.metres = Math.round(UT), TT.metresShownAt = mT, TT.distance.textContent = (0, yT.v)(TU.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(TT.metres)
        }))
      }
      mount(TT) {
        const UT = {
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
          mT = TT.querySelector(".FrontlinePointMarkerLabels"),
          WT = new ResizeObserver((() => {
            UT.halfSize = {
              width: Math.max(TT.offsetWidth, mT.offsetWidth) / 2,
              height: TT.offsetHeight / 2
            }, UT.labelsBelow = mT.offsetTop + mT.offsetHeight - TT.offsetHeight, this.place(UT)
          }));
        return WT.observe(TT, {
          box: "border-box"
        }), WT.observe(mT, {
          box: "border-box"
        }), UT.stopObserving = () => {
          WT.disconnect()
        }, UT
      }
    }
    var zU = mT(6508),
      MU = mT(2731);
    const gU = "frontlineRoundEndChanged";
    class nU {
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
      pB(TT) {
        const UT = "roundEnd" === TT[0] ? performance.now() + TT[5] : 0;
        this.view = {
          wire: TT,
          key: this.view.key + 1,
          endsAt: UT
        }, kT.j.EZ(gU, this.view, !0)
      }
    }
    const HU = (0, zT.lazy)((() => (0, MU.b)(Promise.all([mT.e(239), mT.e(202)]).then((() => mT(41901))), (TT => TT.FrontlineMvpLineup)))),
      kU = [4800, 4e3, 3200],
      jU = [1, 0, 2],
      lU = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      LU = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function pU(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, XT.j)(gU, UT.getView()),
        WT = VT(mT.endsAt);
      return "roundEnd" !== mT.wire[0] || 1e3 * WT < -2e3 ? null : (0, FT.jsx)(BU, {
        wire: mT.wire,
        secondsLeft: Math.max(0, Math.ceil(WT))
      }, mT.key)
    }
    const BU = (0, zT.memo)((function(TT) {
      let {
        wire: UT,
        secondsLeft: mT
      } = TT;
      const {
        t: MT
      } = (0, yT.z)(), [, gT, nT, HT, kT, , jT, lT] = UT, LT = (0, zT.useMemo)((() => jU.filter((TT => TT < lT.length))), [lT]), pT = (0, zT.useMemo)((() => LT.map((TT => {
        const [, , , , , UT, mT] = lT[TT];
        return {
          cosmetics: WT.map(((TT, mT) => [TT, UT[mT]])),
          size: 0 === TT ? 1.15 : .85,
          heldGun: {
            name: mT,
            aimed: 0 === TT
          },
          showAfterMs: kU[TT]
        }
      }))), [lT, LT]);
      return (0, FT.jsxs)("div", {
        className: wT()("FrontlineRoundEnd", `Result-${gT}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, FT.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, FT.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, FT.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, FT.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, FT.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (BT = MT(lU[gT]), /\p{Script=Arabic}/u.test(BT) ? [BT] : (0, zU.c)(BT)).map(((TT, UT) => (0, FT.jsx)("span", {
              style: {
                "--letter": UT
              },
              children: TT
            }, UT)))]
          }), (0, FT.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [nT && "victory" === gT && (0, FT.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: MT("frontlineRoundEnd:comeback")
            }), (0, FT.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, FT.jsx)("b", {
                className: "Friendly",
                children: HT
              }), " \u2013 ", (0, FT.jsx)("b", {
                className: "Enemy",
                children: kT
              })]
            })]
          })]
        }), LT.length > 0 && (0, FT.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": LT.length
          },
          children: [(0, FT.jsx)(zT.Suspense, {
            fallback: null,
            children: (0, FT.jsx)(HU, {
              className: "FrontlineRoundEndLineup",
              players: pT
            })
          }), LT.map((TT => (0, FT.jsx)(ZU, {
            mvp: lT[TT],
            place: TT
          }, TT)))]
        }), (0, FT.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: MT("frontlineRoundEnd:nextFront", {
            map: jT,
            seconds: String(mT)
          })
        })]
      });
      var BT
    }));

    function ZU(TT) {
      let {
        mvp: UT,
        place: mT
      } = TT;
      const {
        t: WT
      } = (0, yT.z)(), [zT, MT, gT, nT, HT] = UT, [kT, jT] = WT(function(TT, UT) {
        return 1 === UT && "damage" !== TT ? `frontlineRoundEnd:${TT}One` : `frontlineRoundEnd:${TT}`
      }(gT, nT), {
        name: "\0",
        count: nT.toLocaleString()
      }).split("\0");
      return (0, FT.jsxs)("div", {
        className: wT()("FrontlineMvpCard", `Place-${mT+1}`, `Team-${MT}`),
        style: {
          "--revealMs": `${kU[mT]}ms`
        },
        children: [(0, FT.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, FT.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, FT.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: WT(LU[mT])
        }), (0, FT.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [kT, (0, FT.jsx)("span", {
            className: "FrontlineMvpName",
            children: zT
          }), jT]
        }), (0, FT.jsx)("div", {
          className: "FrontlineMvpKit",
          children: HT
        })]
      })
    }
    const cU = function(TT, UT, mT, WT) {
      let {
        localPlayerId: gT
      } = WT;
      const nT = new sT,
        HT = new nU;
      let kT = null,
        jT = null,
        lT = null,
        LT = null,
        pT = null,
        BT = [!1, !1];
      const ZT = () => {
        var TT, UT;
        const [mT, WT] = BT;
        null === (TT = jT) || void 0 === TT || TT.Qy(!mT), null === (UT = lT) || void 0 === UT || UT.Qy(!WT)
      };
      return {
        onCreate: TT => {
          kT = TT, jT = new qT(TT, gT), lT = new eT(TT, gT), LT = new WU(nT), ZT(), pT = (0, MT.q)((0, zT.createElement)(zT.Fragment, null, (0, zT.createElement)(ST, {
            hud: nT,
            crosshair: jT,
            damage: lT,
            markers: LT
          }), (0, zT.createElement)(pU, {
            controller: HT
          })))
        },
        onClose: () => {
          var TT, UT, mT, WT;
          null === (TT = pT) || void 0 === TT || TT(), null === (UT = jT) || void 0 === UT || UT.dispose(), jT = null, null === (mT = lT) || void 0 === mT || mT.dispose(), lT = null, null === (WT = LT) || void 0 === WT || WT.dispose(), LT = null, kT = null
        },
        onAfterRender: (TT, UT) => {
          var mT, WT, zT, MT;
          null === (mT = jT) || void 0 === mT || mT.frame(TT, UT.tanHalfFovY), null === (WT = lT) || void 0 === WT || WT.frame(UT.cameraHeading), null === (zT = LT) || void 0 === zT || zT.frame(UT, null !== (MT = kT) && void 0 !== MT && MT.checkValid(gT) ? kT.Aq(gT) : null)
        },
        onReceivedMessageFromServer: (TT, UT) => {
          "frontlineHud" === TT ? nT.pB(UT) : "frontlineScoreboard" === TT ? nT.receiveScoreboard(UT) : "frontlineRoundEnd" === TT ? HT.pB(UT) : "frontlinePrefs" === TT && (BT = UT, ZT())
        }
      }
    }
  },
  6508: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    const WT = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function zT(TT) {
      return null === WT ? Array.from(TT) : Array.from(WT.segment(TT), (TT => {
        let {
          segment: UT
        } = TT;
        return UT
      }))
    }
  },
  38622: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      h: () => MT
    });
    const WT = new WeakMap;

    function zT(TT) {
      let UT = WT.get(TT);
      return UT || (UT = {
        hidden: TT.hidden,
        x: NaN,
        y: NaN
      }, WT.set(TT, UT)), UT
    }

    function MT(TT, UT) {
      const mT = zT(TT);
      mT.hidden !== UT && (mT.hidden = UT, TT.hidden = UT)
    }

    function gT(TT, UT, mT) {
      const WT = zT(TT);
      WT.x === UT && WT.y === mT || (WT.x = UT, WT.y = mT, TT.style.translate = `${UT}vw ${mT}vh`)
    }
  },
  37162: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    const WT = {
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