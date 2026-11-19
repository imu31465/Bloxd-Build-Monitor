export const id = 17;
export const ids = [17];
export const modules = {
  35594: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => xT,
      e: () => cT,
      h: () => LT,
      l: () => DT
    });
    var iT = IT(8743),
      zT = IT(35599),
      kT = IT(35601),
      WT = IT(8139),
      XT = IT(1403),
      BT = IT(46),
      FT = IT(68),
      ST = IT(1083);

    function DT() {
      var TT;
      return (0, XT.i)(zT.c, (0, zT.k)()), (0, ST.jsx)(ST.Fragment, {
        children: null === (TT = (0, zT.k)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var oT;
      let {
        show: IT
      } = TT;
      (0, XT.i)(zT.c, (0, zT.k)());
      const FT = null === (oT = (0, zT.k)()) || void 0 === oT ? void 0 : oT.menu;
      return (0, BT.useEffect)((() => {
        var TT;
        IT || (null === FT || void 0 === FT || null === (TT = FT.onClose) || void 0 === TT || TT.call(FT), (0, kT.r)())
      }), [IT, FT]), (0, BT.useEffect)((() => IT ? (0, WT.f)(kT.x, kT.g) : void 0), [IT]), (0, ST.jsx)(iT.c, {
        showing: IT,
        globallyUniqueKey: "clientGameMenu",
        children: null === FT || void 0 === FT ? void 0 : FT.content
      })
    }

    function xT(TT) {
      let {
        placement: oT = "bottom"
      } = TT;
      return (0, ST.jsx)("div", {
        id: `clientGameHud-${oT}`,
        style: {
          display: "contents"
        }
      })
    }

    function cT(TT) {
      let {
        children: oT,
        placement: IT = "bottom"
      } = TT;
      const [iT, zT] = (0, BT.useState)(null);
      return (0, BT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${IT}`))
      }), [IT]), iT ? (0, FT.createPortal)(oT, iT) : null
    }
  },
  8743: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(4057),
      zT = IT(4061);

    function kT(TT) {
      let {
        children: oT,
        showing: IT,
        globallyUniqueKey: kT,
        alwaysMountChildren: WT = !1,
        doGameplayStartStopOnShow: XT = !0,
        keepsMovement: BT = !1
      } = TT;
      return (0, zT.d)(!0, IT, kT, BT), (0, iT.e)(XT, IT), IT || WT ? oT : null
    }
  },
  35692: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      g: () => WT,
      k: () => XT,
      l: () => BT
    });
    var iT = IT(46),
      zT = IT(1108);
    const kT = 8,
      WT = "InGameHeaderContainer",
      XT = "TopRightElements";

    function BT(TT) {
      const [oT] = (0, zT.e)(), [IT, BT] = (0, iT.useState)(!1);
      return (0, iT.useLayoutEffect)((() => {
        if (!TT) return;
        const oT = document.querySelector(`.${WT}`),
          IT = document.querySelector(`.${XT}`),
          iT = () => {
            const iT = TT.getBoundingClientRect(),
              zT = oT ? oT.getBoundingClientRect().right : 0,
              WT = IT ? IT.getBoundingClientRect().left : window.innerWidth,
              XT = iT.left < zT + kT,
              FT = iT.right > WT - kT;
            BT(XT || FT)
          };
        iT();
        const zT = new ResizeObserver(iT);
        return zT.observe(TT), oT && zT.observe(oT), IT && zT.observe(IT), () => {
          zT.disconnect()
        }
      }), [TT, oT]), IT
    }
  },
  35686: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    const iT = [{
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

    function zT(TT, oT, IT) {
      const zT = Math.abs(TT - oT),
        kT = Date.now() - IT;
      for (const WT of iT)
        if (TT < WT.maxDist) return zT >= WT.hardUpdateDist || kT > WT.timeBetweenSoftChecks && zT >= WT.softUpdateDist;
      return !1
    }
  },
  8139: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => zT
    });
    let iT = null;
    const zT = function(TT) {
        const oT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return iT = oT, () => {
          iT === oT && (iT = null)
        }
      },
      kT = () => {
        var TT;
        return null !== (TT = iT) && void 0 !== TT && TT.canCycle() ? iT.cycle : null
      }
  },
  37514: (TT, oT, IT) => {
    function iT(TT, oT, IT) {
      var iT;
      const {
        width: zT,
        height: kT
      } = IT, WT = null !== (iT = TT.text) && void 0 !== iT ? iT : TT, XT = (WT.x / 100 - .5) * zT, BT = (WT.y / 100 - .5) * kT, FT = zT / 2 - oT.x;
      if (null !== TT.text && Math.abs(XT) <= FT && BT >= oT.top - kT / 2 && BT <= kT / 2 - oT.bottom) return {
        x: WT.x,
        y: WT.y
      };
      const ST = Math.min(0 === XT ? 1 / 0 : FT / Math.abs(XT), BT > 0 ? (kT / 2 - oT.bottom) / BT : BT < 0 ? (oT.top - kT / 2) / BT : 1 / 0);
      return !Number.isFinite(ST) || ST < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + XT * ST / zT * 100,
        y: 50 + BT * ST / kT * 100
      }
    }
    IT.d(oT, {
      d: () => iT
    })
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  38356: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => Mo
    });
    const iT = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var zT = IT(46),
      kT = IT(35599),
      WT = IT(35995),
      XT = IT(35618),
      BT = IT(1665),
      FT = IT(16);
    const ST = {
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
    const DT = 32;

    function LT(TT, oT, IT, iT) {
      return {
        tag: "line",
        attrs: {
          x1: TT,
          y1: oT,
          x2: IT,
          y2: iT,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function xT(TT) {
      return {
        tag: "circle",
        attrs: {
          cx: DT,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DT,
          r: TT,
          class: "Fill"
        }
      }
    }

    function cT(TT, oT) {
      return {
        tag: "path",
        attrs: {
          d: TT,
          "stroke-width": oT
        }
      }
    }

    function KT(TT, oT, IT) {
      return {
        tag: "circle",
        attrs: {
          cx: DT,
          cy: DT,
          r: TT,
          "stroke-width": oT,
          class: IT
        }
      }
    }

    function MT(TT, oT, IT) {
      return {
        tag: "text",
        attrs: {
          x: TT,
          y: oT,
          class: "Fill Label"
        },
        text: IT
      }
    }
    const rT = {
      pistol: TT => [LT(DT, DT - TT - 5, DT, DT - TT), LT(DT - TT - 5, DT, DT - TT, DT), LT(DT + TT, DT, DT + TT + 5, DT), xT(1.4)],
      rifle: TT => [LT(DT, DT - TT - 8, DT, DT - TT), LT(DT, DT + TT, DT, DT + TT + 8), LT(DT - TT - 8, DT, DT - TT, DT), LT(DT + TT, DT, DT + TT + 8, DT), xT(1)],
      smg: TT => {
        const oT = Math.PI / 2,
          IT = [];
        for (let WT = 0; WT < 4; WT++) IT.push((zT = WT * oT + .35, kT = (WT + 1) * oT - .35, cT(`M${DT+(iT=6+TT)*Math.cos(zT)} ${DT+iT*Math.sin(zT)} A${iT} ${iT} 0 0 1 ${DT+iT*Math.cos(kT)} ${DT+iT*Math.sin(kT)}`, 2)));
        var iT, zT, kT;
        return [...IT, xT(1.4)]
      },
      shotgun: TT => [KT(TT, 3, "Ring Outline"), KT(TT, 1.5, "Ring")],
      marksman: TT => [cT(`M${26-TT/2} ${39+TT/2} L32 33 L${38+TT/2} ${39+TT/2}`, 2), LT(14 - TT, DT, 24 - TT, DT, 1.5), LT(40 + TT, DT, 50 + TT, DT, 1.5), LT(14 - TT, 30, 14 - TT, 34, 1.5), LT(50 + TT, 30, 50 + TT, 34, 1.5)],
      machineGun: TT => {
        const oT = 10 + TT,
          IT = [];
        for (const [iT, zT] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) IT.push(cT(`M${DT+iT*oT} ${DT+zT*(oT-5)} L${DT+iT*oT} ${DT+zT*oT} L${DT+iT*(oT-5)} ${DT+zT*oT}`, 2));
        return [...IT, LT(DT, 28, DT, 36, 1.5), LT(28, DT, 36, DT, 1.5)]
      },
      launcher: () => [LT(14, 30, 50, 30, 1.5), LT(DT, 24, DT, 52, 1.5), LT(28, 38, 36, 38, 1.5), LT(29, 44, 35, 44, 1.5), LT(30, 50, 34, 50, 1.5), MT(38, 40, "100"), MT(37, 46, "200"), xT(1.4, 30)],
      melee: () => [cT("M32 26 L38 32 L32 38 L26 32 Z", 1.5), xT(1.2)],
      throwable: () => [xT(1.6)]
    };

    function AT(TT) {
      let {
        tag: oT,
        attrs: IT,
        text: iT
      } = TT, zT = `<${oT}`;
      for (const [kT, WT] of Object.entries(IT)) zT += ` ${kT}="${WT}"`;
      return void 0 === iT ? `${zT}/>` : `${zT}>${iT}</${oT}>`
    }
    class gT {
      constructor(TT, oT) {
        this.api = TT, this.localPlayerId = oT, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = TT => {
          this.element = TT, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, TT && !this.enabled && (TT.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, BT.getRemInPx)()))
        }, this.tokens = [FT.h.subscribe("aimingOverlay", (TT => {
          this.sniperOverlay = "sniper" === TT
        })), FT.h.subscribe("mouseState", (TT => {
          let {
            isDown: oT
          } = TT;
          this.mouseDown = oT
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Fv(TT) {
        TT !== this.enabled && (this.enabled = TT, this.drawnVisible = null, TT || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(TT, oT) {
        var IT, iT;
        if (!this.enabled) return;
        const {
          api: zT
        } = this, kT = zT.isAlive(this.localPlayerId) && null !== (IT = null === (iT = zT.eoT(this.localPlayerId)) || void 0 === iT ? void 0 : iT.name) && void 0 !== IT ? IT : null, WT = (XT = kT) && ST[XT] || null;
        var XT;
        if (this.setOwnsCrosshair(null !== WT), !this.element) return;
        const BT = zT.getHeldGunInaccuracy(),
          FT = null !== BT,
          DT = null !== WT && !this.sniperOverlay && zT.isCrosshairShown();
        if (DT !== this.drawnVisible && (this.drawnVisible = DT, this.element.style.display = DT ? "block" : "none"), !DT) return;
        const LT = FT ? function(TT) {
            return "launcher" === TT || "melee" === TT || "throwable" === TT ? "none" : "shotgun" === TT ? "cone" : "offset"
          }(WT) : "none",
          xT = null !== BT && void 0 !== BT ? BT : 0;
        "cone" === LT ? this.drawCone(WT, this.coneRadiusVh(xT, oT) * this.gapPerVh, TT) : (this.coneDrawn = !1, this.draw(WT, "none" === LT ? 2 : this.offsetGap(xT)));
        const cT = !FT && this.mouseDown;
        cT !== this.drawnPressed && (this.drawnPressed = cT, this.element.classList.toggle("Pressed", cT))
      }
      dispose() {
        for (const TT of this.tokens) FT.h.unsubscribe(TT);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(TT, oT) {
        var IT, iT;
        TT !== this.drawnFamily ? (this.drawnFamily = TT, this.drawnGap = oT, this.element.innerHTML = function(TT, oT) {
          return `<svg viewBox="0 0 64 64">${rT[TT](oT).map(AT).join("")}</svg>`
        }(TT, oT), this.shapes = Array.from(null !== (IT = null === (iT = this.element.firstElementChild) || void 0 === iT ? void 0 : iT.children) && void 0 !== IT ? IT : [])) : oT !== this.drawnGap && (this.drawnGap = oT, function(TT, oT, IT) {
          const iT = rT[oT](IT);
          for (let zT = 0; zT < iT.length; zT++)
            for (const [oT, IT] of Object.entries(iT[zT].attrs)) {
              const iT = String(IT);
              TT[zT].getAttribute(oT) !== iT && TT[zT].setAttribute(oT, iT)
            }
        }(this.shapes, TT, oT))
      }
      drawCone(TT, oT, IT) {
        TT === this.drawnFamily && this.coneDrawn ? this.shownRadius += (oT - this.shownRadius) * (1 - Math.exp(-IT / 80)) : this.shownRadius = oT, this.coneDrawn = !0, this.draw(TT, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(TT, oT) {
        if (!(oT > 0)) return 1;
        const IT = TT * WT.m / 2;
        return Math.max(50 * Math.tan(IT) / oT, 1)
      }
      offsetGap(TT) {
        const oT = 2 + ((0, XT.c)(TT) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * oT) / 2)
      }
      setOwnsCrosshair(TT) {
        TT !== this.ownsCrosshair && (this.ownsCrosshair = TT, document.body.classList.toggle("FrontlineCustomCrosshair", TT))
      }
    }
    const hT = "FrontlineCustomDamage",
      wT = .45,
      mT = .2;
    class eT {
      constructor(TT, oT) {
        this.api = TT, this.localPlayerId = oT, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.AT = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = TT => {
          var oT, IT;
          this.clearHits(), this.root = TT, this.lowLayer = null !== (oT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".FrontlineDamageLow")) && void 0 !== oT ? oT : null, this.arcLayer = null !== (IT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".FrontlineDamageArcs")) && void 0 !== IT ? IT : null, this.showRoot(), this.drawLow()
        }, this.token = FT.h.subscribe("damagedByOtherPlayer", (TT => {
          let {
            direction: oT,
            MT: IT
          } = TT;
          this.onHurt(oT, IT)
        })), this.syncHealth(), document.body.classList.add(hT)
      }
      Fv(TT) {
        TT !== this.enabled && (this.enabled = TT, document.body.classList.toggle(hT, TT), TT || this.clearHits(), this.showRoot())
      }
      frame(TT) {
        this.syncHealth(), this.cameraHeading = TT;
        for (const oT of this.arcs) this.drawArcAngle(oT)
      }
      dispose() {
        FT.h.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(hT)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const TT = this.api.getClientOption(this.localPlayerId, "_health"),
          oT = this.api.getClientOption(this.localPlayerId, "_shield"),
          IT = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(TT, this.readHealth) && Object.is(oT, this.readShield) && Object.is(IT, this.readMaxHealth)) return;
        if (this.readHealth = TT, this.readShield = oT, this.readMaxHealth = IT, null === TT || void 0 === TT || !IT) return this.lastHealthPool = null, this.maxHealth = null, this.AT = 1, this.dead = !1, void this.drawLow();
        const iT = TT + (null !== oT && void 0 !== oT ? oT : 0);
        if (null !== this.lastHealthPool && iT < this.lastHealthPool) {
          const TT = performance.now(),
            oT = (this.lastHealthPool - iT) / IT;
          this.lastDrop = TT - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + oT,
            at: this.lastDrop.at
          } : {
            frac: oT,
            at: TT
          }
        }
        this.dead = TT <= 0, this.dead && this.clearHits(), this.lastHealthPool = iT, this.maxHealth = IT, this.AT = TT > 0 ? TT / IT : 1, this.drawLow()
      }
      onHurt(TT, oT) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const IT = Math.min(1, this.takeDamageFrac(oT) / .3);
        null !== TT && this.showArc(TT, IT), this.flashEdge(null === TT ? null : TT - this.cameraHeading, .4 + .6 * IT)
      }
      takeDamageFrac(TT) {
        if (void 0 !== TT && this.maxHealth) return TT / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: oT
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, oT
      }
      drawLow() {
        if (!this.lowLayer) return;
        const TT = uT((wT - this.AT) / .25),
          oT = uT((mT - this.AT) / .15000000000000002),
          IT = this.AT < wT;
        this.lowLayer.classList.toggle("Active", IT), this.lowLayer.classList.toggle("Critical", this.AT < mT), this.lowLayer.style.opacity = String(IT ? .55 + .3 * TT + .15 * oT : 0)
      }
      showArc(TT, oT) {
        var IT, iT;
        if (!this.arcLayer) return;
        let zT = this.arcs.find((oT => RT(oT.direction, TT) < .6));
        if (!zT) {
          const oT = document.createElement("div");
          oT.className = "FrontlineDamageArc", oT.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(oT), zT = {
            element: oT,
            direction: TT,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(zT)
        }
        zT.direction = TT, this.drawArcAngle(zT);
        const kT = zT.fade ? Number(getComputedStyle(zT.element).opacity) : 0;
        null === (IT = zT.fade) || void 0 === IT || IT.cancel(), null === (iT = zT.pop) || void 0 === iT || iT.cancel(), zT.element.style.opacity = "1";
        const WT = zT.element.animate([{
          opacity: kT
        }, {
          opacity: 1
        }], 144);
        zT.fade = WT, zT.pop = zT.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * oT
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const XT = zT;
        WT.onfinish = () => {
          if (XT.fade !== WT) return;
          const TT = XT.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          TT.startTime = WT.startTime, XT.fade = TT, TT.onfinish = () => {
            XT.fade === TT && (XT.element.remove(), vT(this.arcs, XT))
          }
        }
      }
      drawArcAngle(TT) {
        const oT = TT.direction - this.cameraHeading;
        (null === TT.drawnAngle || Math.abs(oT - TT.drawnAngle) > .005) && (TT.drawnAngle = oT, TT.element.style.rotate = `${oT}rad`)
      }
      flashEdge(TT, oT) {
        var IT, iT, zT;
        if (!this.root) return;
        let kT = this.flashes.find((oT => null === oT.angle || null === TT ? oT.angle === TT : RT(oT.angle, TT) < .5));
        if (!kT) {
          const oT = document.createElement("div");
          oT.className = "FrontlineDamageFlash";
          const IT = oT.appendChild(document.createElement("div"));
          IT.className = "FrontlineDamageFlashGlow", this.root.insertBefore(oT, this.arcLayer), kT = {
            element: oT,
            glow: IT,
            angle: TT,
            level: 0,
            animation: null
          }, this.flashes.push(kT)
        }
        const WT = null === (IT = kT.animation) || void 0 === IT || null === (iT = IT.effect) || void 0 === iT ? void 0 : iT.getComputedTiming().progress,
          XT = null === WT || void 0 === WT ? 0 : kT.level * (1 - WT);
        kT.level = Math.min(1, Math.max(oT, XT + .6 * oT)), kT.angle = TT;
        const {
          x: BT,
          y: FT,
          rx: ST,
          ry: DT
        } = function(TT, oT) {
          const IT = window.innerWidth,
            iT = window.innerHeight;
          if (null === TT) return {
            x: IT / 2,
            y: iT / 2,
            rx: 0,
            ry: 0
          };
          const zT = Math.sin(TT),
            kT = -Math.cos(TT),
            WT = IT / 2 / Math.max(1e-6, Math.abs(zT)),
            XT = iT / 2 / Math.max(1e-6, Math.abs(kT)),
            BT = Math.min(WT, XT),
            FT = Math.round(IT / 2 + zT * BT),
            ST = Math.round(iT / 2 + kT * BT),
            DT = iT / 100 * (.85 + .25 * oT),
            LT = WT <= XT,
            xT = Math.round((LT ? 30 : 74) * DT),
            cT = Math.round((LT ? 58 : 26) * DT);
          return {
            x: FT,
            y: ST,
            rx: xT,
            ry: cT
          }
        }(TT, kT.level), {
          style: LT
        } = kT.glow;
        kT.glow.classList.toggle("Everywhere", null === TT), LT.setProperty("--glowX", `${BT}px`), LT.setProperty("--glowY", `${FT}px`), LT.setProperty("--glowRx", `${ST}px`), LT.setProperty("--glowRy", `${DT}px`), kT.element.style.transformOrigin = `${BT}px ${FT}px`, null === (zT = kT.animation) || void 0 === zT || zT.cancel();
        const xT = kT.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: kT.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * kT.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * kT.level
        });
        kT.animation = xT;
        const cT = kT;
        xT.onfinish = () => {
          cT.animation === xT && (cT.element.remove(), vT(this.flashes, cT))
        }
      }
      clearHits() {
        for (const iT of this.arcs) {
          var TT, oT;
          null === (TT = iT.fade) || void 0 === TT || TT.cancel(), iT.fade = null, null === (oT = iT.pop) || void 0 === oT || oT.cancel(), iT.element.remove()
        }
        this.arcs.length = 0;
        for (const iT of this.flashes) {
          var IT;
          null === (IT = iT.animation) || void 0 === IT || IT.cancel(), iT.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function RT(TT, oT) {
      return Math.abs(Math.atan2(Math.sin(TT - oT), Math.cos(TT - oT)))
    }

    function uT(TT) {
      return Math.max(0, Math.min(1, TT))
    }

    function vT(TT, oT) {
      const IT = TT.indexOf(oT); - 1 !== IT && TT.splice(IT, 1)
    }
    var ET = IT(1042),
      fT = IT.n(ET),
      CT = IT(35594),
      jT = IT(35692),
      JT = IT(1171),
      UT = IT(1403);
    const aT = "frontlineHudChanged",
      YT = "frontlineScoreboardChanged";
    class QT {
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
      Jc(TT) {
        this.wire = TT, FT.h.XM(aT, TT, !0)
      }
      receiveScoreboard(TT) {
        let oT = "scoreboard" === TT[0] ? performance.now() + TT[5] : 0;
        const IT = this.scoreboard.endsAt;
        0 !== oT && 0 !== IT && Math.abs(oT - IT) < 1e3 && (oT = IT), this.scoreboard = {
          wire: TT,
          endsAt: oT
        }, FT.h.XM(YT, this.scoreboard, !0)
      }
    }
    var OT = IT(1083);
    const HT = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function nT(TT) {
      const [oT, IT] = (0, zT.useState)((() => (TT - performance.now()) / 1e3));
      return (0, zT.useEffect)((() => {
        if (0 === TT) return;
        const oT = () => {
          IT((TT - performance.now()) / 1e3)
        };
        oT();
        const iT = window.setInterval(oT, 250);
        return () => {
          window.clearInterval(iT)
        }
      }), [TT]), oT
    }

    function qT(TT) {
      let {
        className: oT,
        point: IT
      } = TT;
      const [iT, zT, kT, WT, XT, BT] = IT;
      return (0, OT.jsxs)("div", {
        className: fT()(oT, `Owner-${zT||"None"}`, `Leader-${WT||"None"}`, {
          Contested: XT,
          Here: BT
        }),
        children: [(0, OT.jsx)("span", {
          className: "FrontlinePointLetter",
          children: iT
        }), (0, OT.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${kT}%`
          }
        })]
      })
    }
    const ZT = (0, zT.memo)((function(TT) {
        let {
          points: oT,
          markers: IT
        } = TT;
        const {
          t: iT
        } = (0, JT.t)();
        return oT ? (0, OT.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: oT.map((TT => {
            const [oT, , , , , , , zT] = TT;
            return (0, OT.jsxs)("div", {
              ref: IT.bindMarker(oT),
              className: "FrontlinePointMarker",
              children: [(0, OT.jsx)(qT, {
                className: "FrontlinePointMarkerTile",
                point: TT
              }), (0, OT.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [zT && (0, OT.jsx)("span", {
                  className: fT()("FrontlinePointMarkerHomeTurf", `Team-${zT}`),
                  children: iT("frontlineHud:homeTurf", {
                    team: iT(HT[zT])
                  })
                }), (0, OT.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, oT)
          }))
        }) : null
      })),
      lT = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      sT = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function tT(TT) {
      let {
        hud: oT,
        crosshair: IT,
        damage: iT,
        markers: zT
      } = TT;
      const kT = (0, UT.i)(aT, oT.getWire()),
        WT = (0, UT.i)(YT, oT.getScoreboard());
      return (0, OT.jsxs)(OT.Fragment, {
        children: [(0, OT.jsx)(GT, {
          damage: iT
        }), (0, OT.jsx)(ZT, {
          points: "scoreboard" === WT.wire[0] ? WT.wire[6] : null,
          markers: zT
        }), (0, OT.jsx)(bT, {
          view: WT
        }), (0, OT.jsx)("div", {
          className: "FrontlineReticle",
          ref: IT.bindElement
        }), (0, OT.jsx)(CT.e, {
          children: (0, OT.jsx)(pT, {
            wire: kT
          })
        })]
      })
    }
    const GT = (0, zT.memo)((function(TT) {
        let {
          damage: oT
        } = TT;
        return (0, OT.jsxs)("div", {
          className: "FrontlineDamage",
          ref: oT.bindElement,
          children: [(0, OT.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, OT.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, OT.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      pT = (0, zT.memo)((function(TT) {
        let {
          wire: oT
        } = TT;
        const {
          t: IT
        } = (0, JT.t)();
        if ("capture" === oT[0]) {
          const [, TT, iT, zT, kT, WT, XT] = oT, BT = Math.round(zT / 100 * 24);
          return (0, OT.jsxs)("div", {
            className: fT()("FrontlinePlate", `Status-${iT}`, `Leader-${kT||"None"}`),
            children: [(0, OT.jsx)(dT, {}), (0, OT.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, OT.jsx)("span", {
                className: "FrontlineObjective",
                children: TT
              }), (0, OT.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, OT.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: IT("frontlineHud:objective", {
                    point: TT,
                    friendly: WT,
                    enemy: XT
                  })
                }), (0, OT.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: IT(lT[iT])
                })]
              }), (0, OT.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(zT).padStart(3, "0"), (0, OT.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, OT.jsx)(NT, {
              segments: 24,
              lit: BT
            })]
          })
        }
        if ("alert" === oT[0]) {
          const [, TT, iT, zT] = oT;
          return (0, OT.jsxs)("div", {
            className: fT()("FrontlinePlate", "FrontlineAlert", `Tone-${zT}`),
            children: [(0, OT.jsx)(dT, {}), (0, OT.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: IT(sT[TT])
            }), (0, OT.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: iT
            })]
          })
        }
        return null
      })),
      bT = (0, zT.memo)((function(TT) {
        let {
          view: oT
        } = TT;
        const {
          t: IT
        } = (0, JT.t)(), iT = (0, zT.useRef)(null), kT = function(TT, oT) {
          const [IT, iT] = (0, zT.useState)(!1);
          return (0, zT.useLayoutEffect)((() => {
            const oT = TT.current;
            if (!oT) return;
            const IT = document.querySelector(`.${jT.g}`),
              zT = document.querySelector(`.${jT.k}`),
              kT = () => {
                var TT;
                const kT = oT.querySelector(".FrontlineTeamTrack"),
                  WT = (0, BT.getRemInPx)(),
                  XT = oT.getBoundingClientRect().width - 2 * (null !== (TT = null === kT || void 0 === kT ? void 0 : kT.getBoundingClientRect().width) && void 0 !== TT ? TT : 0),
                  FT = window.innerWidth / 2,
                  ST = IT ? IT.getBoundingClientRect().right : 0,
                  DT = zT ? zT.getBoundingClientRect().left : window.innerWidth,
                  LT = Math.min(FT - ST, DT - FT) - jT.e - XT / 2,
                  xT = LT < 6 * WT,
                  cT = xT ? (window.innerWidth - XT) / 2 - jT.e : LT;
                oT.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(cT,14*WT)))}px`), iT(xT)
              };
            kT();
            const WT = new ResizeObserver(kT);
            for (const TT of [oT, IT, zT]) TT && WT.observe(TT);
            return window.addEventListener("resize", kT), () => {
              WT.disconnect(), window.removeEventListener("resize", kT)
            }
          }), [TT, oT]), IT
        }(iT, "scoreboard" === oT.wire[0]);
        if ("scoreboard" !== oT.wire[0]) return null;
        const [, WT, XT, FT, ST, , DT] = oT.wire, LT = "Red" === WT ? "Blue" : "Red";
        return (0, OT.jsxs)("div", {
          className: fT()("FrontlineScoreboardContainer", {
            Below: kT
          }),
          children: [(0, OT.jsxs)("div", {
            ref: iT,
            className: "FrontlineScoreboard",
            children: [(0, OT.jsx)(dT, {}), (0, OT.jsx)(yT, {
              team: WT,
              tickets: XT,
              goal: ST,
              side: "Friendly"
            }), (0, OT.jsx)("div", {
              className: "FrontlinePoints",
              children: DT.map((TT => (0, OT.jsx)(qT, {
                className: "FrontlinePoint",
                point: TT
              }, TT[0])))
            }), (0, OT.jsx)(yT, {
              team: LT,
              tickets: FT,
              goal: ST,
              side: "Enemy"
            })]
          }), (0, OT.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, OT.jsx)(PT, {
              endsAt: oT.endsAt
            }), (0, OT.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: IT("frontlineHud:ticketGoal", {
                goal: ST
              })
            })]
          })]
        })
      }));

    function yT(TT) {
      let {
        team: oT,
        tickets: IT,
        goal: iT,
        side: zT
      } = TT;
      const {
        t: kT
      } = (0, JT.t)(), WT = String(IT).padStart(3, "0"), XT = WT.search(/[1-9]/), BT = -1 === XT ? WT : WT.slice(0, XT), FT = Math.min(20, Math.floor(IT / iT * 20));
      return (0, OT.jsxs)("div", {
        className: fT()("FrontlineTeamScore", zT, `Team-${oT}`),
        children: [(0, OT.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, OT.jsx)("span", {
            className: "Lead",
            children: BT
          }), -1 !== XT && WT.slice(XT)]
        }), (0, OT.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, OT.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: kT(HT[oT])
          }), (0, OT.jsx)(NT, {
            segments: 20,
            lit: FT
          })]
        })]
      })
    }

    function NT(TT) {
      let {
        segments: oT,
        lit: IT
      } = TT;
      return (0, OT.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: oT
        }, ((TT, oT) => (0, OT.jsx)("i", {
          className: fT()({
            Lit: oT < IT
          })
        }, oT)))
      })
    }

    function PT(TT) {
      let {
        endsAt: oT
      } = TT;
      const IT = Math.max(0, Math.ceil(nT(oT)));
      return (0, OT.jsxs)("div", {
        className: fT()("FrontlineClock", {
          Urgent: IT <= 60
        }),
        children: [Math.floor(IT / 60), ":", String(IT % 60).padStart(2, "0")]
      })
    }

    function dT() {
      return (0, OT.jsxs)(OT.Fragment, {
        children: [(0, OT.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, OT.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var VT = IT(35686),
      To = IT(1220),
      oo = IT(37475),
      Io = IT(37514);
    class io {
      constructor(TT) {
        var oT;
        this.hud = TT, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Ec = !1, this.Tm = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Tm), null === (oT = window.visualViewport) || void 0 === oT || oT.addEventListener("resize", this.Tm)
      }
      bindMarker(TT) {
        let oT = this.refs.get(TT);
        return oT || (oT = oT => {
          var IT;
          null === (IT = this.markers.get(TT)) || void 0 === IT || IT.stopObserving(), this.markers.delete(TT), oT && !this.Ec && this.markers.set(TT, this.mount(oT))
        }, this.refs.set(TT, oT)), oT
      }
      frame(TT, oT) {
        this.render = TT;
        const IT = this.hud.getScoreboard().wire;
        if ("scoreboard" === IT[0] && 0 !== this.markers.size)
          for (const [iT, , , , , , zT] of IT[6]) {
            const TT = this.markers.get(iT);
            TT && zT && (TT.target ??= [0, 0, 0], TT.target[0] = zT[0], TT.target[1] = zT[1] + 2.5, TT.target[2] = zT[2], this.place(TT), this.FT(TT, oT && Math.hypot(zT[0] - oT[0], zT[1] - oT[1], zT[2] - oT[2])))
          }
      }
      dispose() {
        var TT;
        this.Ec = !0, window.removeEventListener("resize", this.Tm), null === (TT = window.visualViewport) || void 0 === TT || TT.removeEventListener("resize", this.Tm);
        for (const oT of this.markers.values()) oT.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(TT) {
        const {
          render: oT,
          viewport: IT
        } = this;
        if (!oT || !TT.target) return;
        const iT = (50 - oT.screenBandPct.y) / 100 * IT.height,
          zT = {
            x: TT.halfSize.width + 8,
            top: TT.halfSize.height + 8,
            bottom: TT.halfSize.height + TT.labelsBelow + iT
          },
          kT = oT.projectWorldPosToViewport(TT.target),
          WT = null !== kT && void 0 !== kT ? kT : oT.projectWorldPosToScreenPos(TT.target),
          XT = (0, Io.d)({
            x: WT.x,
            y: WT.y,
            text: kT
          }, zT, IT);
        (0, oo.c)(TT.root, Math.round(100 * XT.x) / 100, Math.round(100 * XT.y) / 100)
      }
      FT(TT, oT) {
        if (null === oT) return void(null !== TT.metres && (TT.metres = null, TT.distance.textContent = ""));
        const IT = Date.now();
        (null === TT.metres || (0, VT.c)(oT, TT.metres, TT.metresShownAt)) && (TT.metres = Math.round(oT), TT.metresShownAt = IT, TT.distance.textContent = (0, JT.p)(To.d.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(TT.metres)
        }))
      }
      mount(TT) {
        const oT = {
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
          IT = TT.querySelector(".FrontlinePointMarkerLabels"),
          iT = new ResizeObserver((() => {
            oT.halfSize = {
              width: Math.max(TT.offsetWidth, IT.offsetWidth) / 2,
              height: TT.offsetHeight / 2
            }, oT.labelsBelow = IT.offsetTop + IT.offsetHeight - TT.offsetHeight, this.place(oT)
          }));
        return iT.observe(TT, {
          box: "border-box"
        }), iT.observe(IT, {
          box: "border-box"
        }), oT.stopObserving = () => {
          iT.disconnect()
        }, oT
      }
    }
    var zo = IT(5934),
      ko = IT(2327);
    const Wo = "frontlineRoundEndChanged";
    class Xo {
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
      Jc(TT) {
        const oT = "roundEnd" === TT[0] ? performance.now() + TT[5] : 0;
        this.view = {
          wire: TT,
          key: this.view.key + 1,
          endsAt: oT
        }, FT.h.XM(Wo, this.view, !0)
      }
    }
    const Bo = (0, zT.lazy)((() => (0, ko.e)(IT.e(212).then((() => IT(40583))), (TT => TT.FrontlineMvpLineup)))),
      Fo = [4800, 4e3, 3200],
      So = [1, 0, 2],
      Do = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Lo = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function xo(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, UT.i)(Wo, oT.getView()),
        iT = nT(IT.endsAt);
      return "roundEnd" !== IT.wire[0] || 1e3 * iT < -2e3 ? null : (0, OT.jsx)(co, {
        wire: IT.wire,
        secondsLeft: Math.max(0, Math.ceil(iT))
      }, IT.key)
    }
    const co = (0, zT.memo)((function(TT) {
      let {
        wire: oT,
        secondsLeft: IT
      } = TT;
      const {
        t: kT
      } = (0, JT.t)(), [, WT, XT, BT, FT, , ST, DT] = oT, LT = (0, zT.useMemo)((() => So.filter((TT => TT < DT.length))), [DT]), xT = (0, zT.useMemo)((() => LT.map((TT => {
        const [, , , , , oT, IT] = DT[TT];
        return {
          cosmetics: iT.map(((TT, IT) => [TT, oT[IT]])),
          size: 0 === TT ? 1.15 : .85,
          heldGun: {
            name: IT,
            aimed: 0 === TT
          },
          showAfterMs: Fo[TT]
        }
      }))), [DT, LT]);
      return (0, OT.jsxs)("div", {
        className: fT()("FrontlineRoundEnd", `Result-${WT}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, OT.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, OT.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, OT.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, OT.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, OT.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (cT = kT(Do[WT]), /\p{Script=Arabic}/u.test(cT) ? [cT] : (0, zo.d)(cT)).map(((TT, oT) => (0, OT.jsx)("span", {
              style: {
                "--letter": oT
              },
              children: TT
            }, oT)))]
          }), (0, OT.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [XT && "victory" === WT && (0, OT.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: kT("frontlineRoundEnd:comeback")
            }), (0, OT.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, OT.jsx)("b", {
                className: "Friendly",
                children: BT
              }), " \u2013 ", (0, OT.jsx)("b", {
                className: "Enemy",
                children: FT
              })]
            })]
          })]
        }), LT.length > 0 && (0, OT.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": LT.length
          },
          children: [(0, OT.jsx)(zT.Suspense, {
            fallback: null,
            children: (0, OT.jsx)(Bo, {
              className: "FrontlineRoundEndLineup",
              players: xT
            })
          }), LT.map((TT => (0, OT.jsx)(Ko, {
            mvp: DT[TT],
            place: TT
          }, TT)))]
        }), (0, OT.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: kT("frontlineRoundEnd:nextFront", {
            map: ST,
            seconds: String(IT)
          })
        })]
      });
      var cT
    }));

    function Ko(TT) {
      let {
        mvp: oT,
        place: IT
      } = TT;
      const {
        t: iT
      } = (0, JT.t)(), [zT, kT, WT, XT, BT] = oT, [FT, ST] = iT(function(TT, oT) {
        return 1 === oT && "damage" !== TT ? `frontlineRoundEnd:${TT}One` : `frontlineRoundEnd:${TT}`
      }(WT, XT), {
        name: "\0",
        count: XT.toLocaleString()
      }).split("\0");
      return (0, OT.jsxs)("div", {
        className: fT()("FrontlineMvpCard", `Place-${IT+1}`, `Team-${kT}`),
        style: {
          "--revealMs": `${Fo[IT]}ms`
        },
        children: [(0, OT.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, OT.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, OT.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: iT(Lo[IT])
        }), (0, OT.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [FT, (0, OT.jsx)("span", {
            className: "FrontlineMvpName",
            children: zT
          }), ST]
        }), (0, OT.jsx)("div", {
          className: "FrontlineMvpKit",
          children: BT
        })]
      })
    }
    const Mo = function(TT, oT, IT, iT) {
      let {
        localPlayerId: WT
      } = iT;
      const XT = new QT,
        BT = new Xo;
      let FT = null,
        ST = null,
        DT = null,
        LT = null,
        xT = null,
        cT = [!1, !1];
      const KT = () => {
        var TT, oT;
        const [IT, iT] = cT;
        null === (TT = ST) || void 0 === TT || TT.Fv(!IT), null === (oT = DT) || void 0 === oT || oT.Fv(!iT)
      };
      return {
        onCreate: TT => {
          FT = TT, ST = new gT(TT, WT), DT = new eT(TT, WT), LT = new io(XT), KT(), xT = (0, kT.u)((0, zT.createElement)(zT.Fragment, null, (0, zT.createElement)(tT, {
            hud: XT,
            crosshair: ST,
            damage: DT,
            markers: LT
          }), (0, zT.createElement)(xo, {
            controller: BT
          })))
        },
        onClose: () => {
          var TT, oT, IT, iT;
          null === (TT = xT) || void 0 === TT || TT(), null === (oT = ST) || void 0 === oT || oT.dispose(), ST = null, null === (IT = DT) || void 0 === IT || IT.dispose(), DT = null, null === (iT = LT) || void 0 === iT || iT.dispose(), LT = null, FT = null
        },
        onAfterRender: (TT, oT) => {
          var IT, iT, zT, kT;
          null === (IT = ST) || void 0 === IT || IT.frame(TT, oT.tanHalfFovY), null === (iT = DT) || void 0 === iT || iT.frame(oT.cameraHeading), null === (zT = LT) || void 0 === zT || zT.frame(oT, null !== (kT = FT) && void 0 !== kT && kT.checkValid(WT) ? FT.Wm(WT) : null)
        },
        onReceivedMessageFromServer: (TT, oT) => {
          "frontlineHud" === TT ? XT.Jc(oT) : "frontlineScoreboard" === TT ? XT.receiveScoreboard(oT) : "frontlineRoundEnd" === TT ? BT.Jc(oT) : "frontlinePrefs" === TT && (cT = oT, KT())
        }
      }
    }
  },
  5934: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT
    });
    const iT = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function zT(TT) {
      return null === iT ? Array.from(TT) : Array.from(iT.segment(TT), (TT => {
        let {
          segment: oT
        } = TT;
        return oT
      }))
    }
  },
  37475: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      d: () => kT
    });
    const iT = new WeakMap;

    function zT(TT) {
      let oT = iT.get(TT);
      return oT || (oT = {
        hidden: TT.hidden,
        x: NaN,
        y: NaN
      }, iT.set(TT, oT)), oT
    }

    function kT(TT, oT) {
      const IT = zT(TT);
      IT.hidden !== oT && (IT.hidden = oT, TT.hidden = oT)
    }

    function WT(TT, oT, IT) {
      const iT = zT(TT);
      iT.x === oT && iT.y === IT || (iT.x = oT, iT.y = IT, TT.style.translate = `${oT}vw ${IT}vh`)
    }
  },
  36017: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    const iT = {
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