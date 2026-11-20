export const id = 17;
export const ids = [17];
export const modules = {
  36078: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => bz,
      e: () => wz,
      g: () => Nz,
      h: () => uz
    });
    var Fz = sz(8843),
      Wz = sz(36086),
      Xz = sz(36090),
      Oz = sz(8238),
      oz = sz(1416),
      vz = sz(65),
      Uz = sz(78),
      Kz = sz(1087);

    function uz() {
      var zz;
      return (0, oz.h)(Wz.e, (0, Wz.o)()), (0, Kz.jsx)(Kz.Fragment, {
        children: null === (zz = (0, Wz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function Nz(zz) {
      var tz;
      let {
        show: sz
      } = zz;
      (0, oz.h)(Wz.e, (0, Wz.o)());
      const Uz = null === (tz = (0, Wz.o)()) || void 0 === tz ? void 0 : tz.menu;
      return (0, vz.useEffect)((() => {
        var zz;
        sz || (null === Uz || void 0 === Uz || null === (zz = Uz.onClose) || void 0 === zz || zz.call(Uz), (0, Xz.p)())
      }), [sz, Uz]), (0, vz.useEffect)((() => sz ? (0, Oz.f)(Xz.w, Xz.e) : void 0), [sz]), (0, Kz.jsx)(Fz.c, {
        showing: sz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Uz || void 0 === Uz ? void 0 : Uz.content
      })
    }

    function bz(zz) {
      let {
        placement: tz = "bottom"
      } = zz;
      return (0, Kz.jsx)("div", {
        id: `clientGameHud-${tz}`,
        style: {
          display: "contents"
        }
      })
    }

    function wz(zz) {
      let {
        children: tz,
        placement: sz = "bottom"
      } = zz;
      const [Fz, Wz] = (0, vz.useState)(null);
      return (0, vz.useEffect)((() => {
        Wz(document.getElementById(`clientGameHud-${sz}`))
      }), [sz]), Fz ? (0, Uz.createPortal)(tz, Fz) : null
    }
  },
  8843: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(4178),
      Wz = sz(4180);

    function Xz(zz) {
      let {
        children: tz,
        showing: sz,
        globallyUniqueKey: Xz,
        alwaysMountChildren: Oz = !1,
        doGameplayStartStopOnShow: oz = !0,
        keepsMovement: vz = !1
      } = zz;
      return (0, Wz.b)(!0, sz, Xz, vz), (0, Fz.e)(oz, sz), sz || Oz ? tz : null
    }
  },
  36169: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Oz,
      j: () => oz,
      k: () => vz
    });
    var Fz = sz(65),
      Wz = sz(1113);
    const Xz = 8,
      Oz = "InGameHeaderContainer",
      oz = "TopRightElements";

    function vz(zz) {
      const [tz] = (0, Wz.c)(), [sz, vz] = (0, Fz.useState)(!1);
      return (0, Fz.useLayoutEffect)((() => {
        if (!zz) return;
        const tz = document.querySelector(`.${Oz}`),
          sz = document.querySelector(`.${oz}`),
          Fz = () => {
            const Fz = zz.getBoundingClientRect(),
              Wz = tz ? tz.getBoundingClientRect().right : 0,
              Oz = sz ? sz.getBoundingClientRect().left : window.innerWidth,
              oz = Fz.left < Wz + Xz,
              Uz = Fz.right > Oz - Xz;
            vz(oz || Uz)
          };
        Fz();
        const Wz = new ResizeObserver(Fz);
        return Wz.observe(zz), tz && Wz.observe(tz), sz && Wz.observe(sz), () => {
          Wz.disconnect()
        }
      }), [zz, tz]), sz
    }
  },
  36164: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    const Fz = [{
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

    function Wz(zz, tz, sz) {
      const Wz = Math.abs(zz - tz),
        Xz = Date.now() - sz;
      for (const Oz of Fz)
        if (zz < Oz.maxDist) return Wz >= Oz.hardUpdateDist || Xz > Oz.timeBetweenSoftChecks && Wz >= Oz.softUpdateDist;
      return !1
    }
  },
  8238: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      f: () => Wz
    });
    let Fz = null;
    const Wz = function(zz) {
        const tz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Fz = tz, () => {
          Fz === tz && (Fz = null)
        }
      },
      Xz = () => {
        var zz;
        return null !== (zz = Fz) && void 0 !== zz && zz.canCycle() ? Fz.cycle : null
      }
  },
  37961: (zz, tz, sz) => {
    function Fz(zz, tz, sz) {
      var Fz;
      const {
        width: Wz,
        height: Xz
      } = sz, Oz = null !== (Fz = zz.text) && void 0 !== Fz ? Fz : zz, oz = (Oz.x / 100 - .5) * Wz, vz = (Oz.y / 100 - .5) * Xz, Uz = Wz / 2 - tz.x;
      if (null !== zz.text && Math.abs(oz) <= Uz && vz >= tz.top - Xz / 2 && vz <= Xz / 2 - tz.bottom) return {
        x: Oz.x,
        y: Oz.y
      };
      const Kz = Math.min(0 === oz ? 1 / 0 : Uz / Math.abs(oz), vz > 0 ? (Xz / 2 - tz.bottom) / vz : vz < 0 ? (tz.top - Xz / 2) / vz : 1 / 0);
      return !Number.isFinite(Kz) || Kz < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + oz * Kz / Wz * 100,
        y: 50 + vz * Kz / Xz * 100
      }
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  36090: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Dz,
      i: () => gz,
      k: () => oz,
      m: () => Nz,
      p: () => Hz,
      r: () => uz,
      t: () => Pz,
      w: () => wz,
      z: () => Bz
    });
    var Fz = sz(30),
      Wz = sz(34);
    const Xz = "clientGameInventoryButtonsChanged",
      Oz = new Map;

    function oz() {
      return [...Oz.values()].sort(((zz, tz) => {
        var sz, Fz;
        return (null !== (sz = zz.order) && void 0 !== sz ? sz : 0) - (null !== (Fz = tz.order) && void 0 !== Fz ? Fz : 0)
      }))
    }
    let vz = null;

    function Uz(zz) {
      vz = zz
    }
    let Kz = !1;

    function uz(zz) {
      Kz = !0;
      try {
        zz.onClick()
      } finally {
        Kz = !1
      }
      zz.panel && "clientGame" === Fz.b.get("openInGameMenuName") && Uz(zz.id)
    }

    function Nz() {
      return Kz
    }

    function bz() {
      return oz().filter((zz => zz.panel && !zz.disabled))
    }

    function wz(zz) {
      const tz = bz(),
        sz = tz.findIndex((zz => zz.id === vz));
      return !(sz < 0 || tz.length < 2) && (uz(tz[(sz + zz + tz.length) % tz.length]), !0)
    }

    function Dz() {
      return null !== vz && bz().length > 1
    }

    function gz() {
      Uz(null)
    }

    function Hz() {
      "inventory" !== Fz.b.get("openInGameMenuName") && Uz(null)
    }

    function Bz() {
      const zz = vz;
      return Uz(null), zz
    }

    function Pz(zz) {
      return Oz.set(zz.id, zz), Wz.o.Yg(Xz, oz(), !0), () => {
        Oz.get(zz.id) === zz && (Oz.delete(zz.id), Wz.o.Yg(Xz, oz()))
      }
    }
  },
  36086: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => gz,
      j: () => Hz,
      l: () => Nz,
      o: () => Uz,
      s: () => Dz,
      w: () => bz,
      x: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(36090);
    const oz = "clientGameUiChanged";
    let vz = null;

    function Uz() {
      return vz
    }

    function Kz(zz, tz) {
      const sz = {
        content: zz,
        menu: tz
      };
      return vz = sz, Wz.o.Yg(oz, vz, !0), () => {
        vz === sz && (vz = null, wz = !1, gz(), Wz.o.Yg(oz, null))
      }
    }
    let uz = null;

    function Nz() {
      return uz
    }

    function bz(zz) {
      return uz = zz, () => {
        uz === zz && (uz = null)
      }
    }
    let wz = !1;

    function Dz() {
      const zz = Fz.b.get("openInGameMenuName");
      "clientGame" !== zz && (wz = "inventory" === zz), (0, Oz.m)() || (0, Oz.i)(), (0, Xz.n)(Xz.c), Fz.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gz() {
      Bz(!1)
    }

    function Hz() {
      Bz(wz)
    }

    function Bz(zz) {
      "clientGame" === Fz.b.get("openInGameMenuName") && Fz.b.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, Oz.i)(), wz = !1
    }
  },
  38788: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => gt
    });
    const Fz = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Wz = sz(65),
      Xz = sz(36086),
      Oz = sz(36437),
      oz = sz(36103),
      vz = sz(1664),
      Uz = sz(34);
    const Kz = {
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
    const uz = 32;

    function Nz(zz, tz, sz, Fz) {
      return {
        tag: "line",
        attrs: {
          x1: zz,
          y1: tz,
          x2: sz,
          y2: Fz,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function bz(zz) {
      return {
        tag: "circle",
        attrs: {
          cx: uz,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uz,
          r: zz,
          class: "Fill"
        }
      }
    }

    function wz(zz, tz) {
      return {
        tag: "path",
        attrs: {
          d: zz,
          "stroke-width": tz
        }
      }
    }

    function Dz(zz, tz, sz) {
      return {
        tag: "circle",
        attrs: {
          cx: uz,
          cy: uz,
          r: zz,
          "stroke-width": tz,
          class: sz
        }
      }
    }

    function gz(zz, tz, sz) {
      return {
        tag: "text",
        attrs: {
          x: zz,
          y: tz,
          class: "Fill Label"
        },
        text: sz
      }
    }
    const Hz = {
      pistol: zz => [Nz(uz, uz - zz - 5, uz, uz - zz), Nz(uz - zz - 5, uz, uz - zz, uz), Nz(uz + zz, uz, uz + zz + 5, uz), bz(1.4)],
      rifle: zz => [Nz(uz, uz - zz - 8, uz, uz - zz), Nz(uz, uz + zz, uz, uz + zz + 8), Nz(uz - zz - 8, uz, uz - zz, uz), Nz(uz + zz, uz, uz + zz + 8, uz), bz(1)],
      smg: zz => {
        const tz = Math.PI / 2,
          sz = [];
        for (let Oz = 0; Oz < 4; Oz++) sz.push((Wz = Oz * tz + .35, Xz = (Oz + 1) * tz - .35, wz(`M${uz+(Fz=6+zz)*Math.cos(Wz)} ${uz+Fz*Math.sin(Wz)} A${Fz} ${Fz} 0 0 1 ${uz+Fz*Math.cos(Xz)} ${uz+Fz*Math.sin(Xz)}`, 2)));
        var Fz, Wz, Xz;
        return [...sz, bz(1.4)]
      },
      shotgun: zz => [Dz(zz, 3, "Ring Outline"), Dz(zz, 1.5, "Ring")],
      marksman: zz => [wz(`M${26-zz/2} ${39+zz/2} L32 33 L${38+zz/2} ${39+zz/2}`, 2), Nz(14 - zz, uz, 24 - zz, uz, 1.5), Nz(40 + zz, uz, 50 + zz, uz, 1.5), Nz(14 - zz, 30, 14 - zz, 34, 1.5), Nz(50 + zz, 30, 50 + zz, 34, 1.5)],
      machineGun: zz => {
        const tz = 10 + zz,
          sz = [];
        for (const [Fz, Wz] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) sz.push(wz(`M${uz+Fz*tz} ${uz+Wz*(tz-5)} L${uz+Fz*tz} ${uz+Wz*tz} L${uz+Fz*(tz-5)} ${uz+Wz*tz}`, 2));
        return [...sz, Nz(uz, 28, uz, 36, 1.5), Nz(28, uz, 36, uz, 1.5)]
      },
      launcher: () => [Nz(14, 30, 50, 30, 1.5), Nz(uz, 24, uz, 52, 1.5), Nz(28, 38, 36, 38, 1.5), Nz(29, 44, 35, 44, 1.5), Nz(30, 50, 34, 50, 1.5), gz(38, 40, "100"), gz(37, 46, "200"), bz(1.4, 30)],
      melee: () => [wz("M32 26 L38 32 L32 38 L26 32 Z", 1.5), bz(1.2)],
      throwable: () => [bz(1.6)]
    };

    function Bz(zz) {
      let {
        tag: tz,
        attrs: sz,
        text: Fz
      } = zz, Wz = `<${tz}`;
      for (const [Xz, Oz] of Object.entries(sz)) Wz += ` ${Xz}="${Oz}"`;
      return void 0 === Fz ? `${Wz}/>` : `${Wz}>${Fz}</${tz}>`
    }
    class Pz {
      constructor(zz, tz) {
        this.api = zz, this.localPlayerId = tz, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = zz => {
          this.element = zz, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, zz && !this.enabled && (zz.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, vz.getRemInPx)()))
        }, this.tokens = [Uz.o.subscribe("aimingOverlay", (zz => {
          this.sniperOverlay = "sniper" === zz
        })), Uz.o.subscribe("mouseState", (zz => {
          let {
            isDown: tz
          } = zz;
          this.mouseDown = tz
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Xx(zz) {
        zz !== this.enabled && (this.enabled = zz, this.drawnVisible = null, zz || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(zz, tz) {
        var sz, Fz;
        if (!this.enabled) return;
        const {
          api: Wz
        } = this, Xz = Wz.isAlive(this.localPlayerId) && null !== (sz = null === (Fz = Wz.rtz(this.localPlayerId)) || void 0 === Fz ? void 0 : Fz.name) && void 0 !== sz ? sz : null, Oz = (oz = Xz) && Kz[oz] || null;
        var oz;
        if (this.setOwnsCrosshair(null !== Oz), !this.element) return;
        const vz = Wz.getHeldGunInaccuracy(),
          Uz = null !== vz,
          uz = null !== Oz && !this.sniperOverlay && Wz.isCrosshairShown();
        if (uz !== this.drawnVisible && (this.drawnVisible = uz, this.element.style.display = uz ? "block" : "none"), !uz) return;
        const Nz = Uz ? function(zz) {
            return "launcher" === zz || "melee" === zz || "throwable" === zz ? "none" : "shotgun" === zz ? "cone" : "offset"
          }(Oz) : "none",
          bz = null !== vz && void 0 !== vz ? vz : 0;
        "cone" === Nz ? this.drawCone(Oz, this.coneRadiusVh(bz, tz) * this.gapPerVh, zz) : (this.coneDrawn = !1, this.draw(Oz, "none" === Nz ? 2 : this.offsetGap(bz)));
        const wz = !Uz && this.mouseDown;
        wz !== this.drawnPressed && (this.drawnPressed = wz, this.element.classList.toggle("Pressed", wz))
      }
      dispose() {
        for (const zz of this.tokens) Uz.o.unsubscribe(zz);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(zz, tz) {
        var sz, Fz;
        zz !== this.drawnFamily ? (this.drawnFamily = zz, this.drawnGap = tz, this.element.innerHTML = function(zz, tz) {
          return `<svg viewBox="0 0 64 64">${Hz[zz](tz).map(Bz).join("")}</svg>`
        }(zz, tz), this.shapes = Array.from(null !== (sz = null === (Fz = this.element.firstElementChild) || void 0 === Fz ? void 0 : Fz.children) && void 0 !== sz ? sz : [])) : tz !== this.drawnGap && (this.drawnGap = tz, function(zz, tz, sz) {
          const Fz = Hz[tz](sz);
          for (let Wz = 0; Wz < Fz.length; Wz++)
            for (const [tz, sz] of Object.entries(Fz[Wz].attrs)) {
              const Fz = String(sz);
              zz[Wz].getAttribute(tz) !== Fz && zz[Wz].setAttribute(tz, Fz)
            }
        }(this.shapes, zz, tz))
      }
      drawCone(zz, tz, sz) {
        zz === this.drawnFamily && this.coneDrawn ? this.shownRadius += (tz - this.shownRadius) * (1 - Math.exp(-sz / 80)) : this.shownRadius = tz, this.coneDrawn = !0, this.draw(zz, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(zz, tz) {
        if (!(tz > 0)) return 1;
        const sz = zz * Oz.h / 2;
        return Math.max(50 * Math.tan(sz) / tz, 1)
      }
      offsetGap(zz) {
        const tz = 2 + ((0, oz.g)(zz) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * tz) / 2)
      }
      setOwnsCrosshair(zz) {
        zz !== this.ownsCrosshair && (this.ownsCrosshair = zz, document.body.classList.toggle("FrontlineCustomCrosshair", zz))
      }
    }
    const rz = "FrontlineCustomDamage",
      Yz = .45,
      xz = .2;
    class mz {
      constructor(zz, tz) {
        this.api = zz, this.localPlayerId = tz, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.aW = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = zz => {
          var tz, sz;
          this.clearHits(), this.root = zz, this.lowLayer = null !== (tz = null === zz || void 0 === zz ? void 0 : zz.querySelector(".FrontlineDamageLow")) && void 0 !== tz ? tz : null, this.arcLayer = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.querySelector(".FrontlineDamageArcs")) && void 0 !== sz ? sz : null, this.showRoot(), this.drawLow()
        }, this.token = Uz.o.subscribe("damagedByOtherPlayer", (zz => {
          let {
            direction: tz,
            lW: sz
          } = zz;
          this.onHurt(tz, sz)
        })), this.syncHealth(), document.body.classList.add(rz)
      }
      Xx(zz) {
        zz !== this.enabled && (this.enabled = zz, document.body.classList.toggle(rz, zz), zz || this.clearHits(), this.showRoot())
      }
      frame(zz) {
        this.syncHealth(), this.cameraHeading = zz;
        for (const tz of this.arcs) this.drawArcAngle(tz)
      }
      dispose() {
        Uz.o.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(rz)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const zz = this.api.getClientOption(this.localPlayerId, "_health"),
          tz = this.api.getClientOption(this.localPlayerId, "_shield"),
          sz = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(zz, this.readHealth) && Object.is(tz, this.readShield) && Object.is(sz, this.readMaxHealth)) return;
        if (this.readHealth = zz, this.readShield = tz, this.readMaxHealth = sz, null === zz || void 0 === zz || !sz) return this.lastHealthPool = null, this.maxHealth = null, this.aW = 1, this.dead = !1, void this.drawLow();
        const Fz = zz + (null !== tz && void 0 !== tz ? tz : 0);
        if (null !== this.lastHealthPool && Fz < this.lastHealthPool) {
          const zz = performance.now(),
            tz = (this.lastHealthPool - Fz) / sz;
          this.lastDrop = zz - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + tz,
            at: this.lastDrop.at
          } : {
            frac: tz,
            at: zz
          }
        }
        this.dead = zz <= 0, this.dead && this.clearHits(), this.lastHealthPool = Fz, this.maxHealth = sz, this.aW = zz > 0 ? zz / sz : 1, this.drawLow()
      }
      onHurt(zz, tz) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const sz = Math.min(1, this.takeDamageFrac(tz) / .3);
        null !== zz && this.showArc(zz, sz), this.flashEdge(null === zz ? null : zz - this.cameraHeading, .4 + .6 * sz)
      }
      takeDamageFrac(zz) {
        if (void 0 !== zz && this.maxHealth) return zz / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: tz
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, tz
      }
      drawLow() {
        if (!this.lowLayer) return;
        const zz = Iz((Yz - this.aW) / .25),
          tz = Iz((xz - this.aW) / .15000000000000002),
          sz = this.aW < Yz;
        this.lowLayer.classList.toggle("Active", sz), this.lowLayer.classList.toggle("Critical", this.aW < xz), this.lowLayer.style.opacity = String(sz ? .55 + .3 * zz + .15 * tz : 0)
      }
      showArc(zz, tz) {
        var sz, Fz;
        if (!this.arcLayer) return;
        let Wz = this.arcs.find((tz => Jz(tz.direction, zz) < .6));
        if (!Wz) {
          const tz = document.createElement("div");
          tz.className = "FrontlineDamageArc", tz.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(tz), Wz = {
            element: tz,
            direction: zz,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Wz)
        }
        Wz.direction = zz, this.drawArcAngle(Wz);
        const Xz = Wz.fade ? Number(getComputedStyle(Wz.element).opacity) : 0;
        null === (sz = Wz.fade) || void 0 === sz || sz.cancel(), null === (Fz = Wz.pop) || void 0 === Fz || Fz.cancel(), Wz.element.style.opacity = "1";
        const Oz = Wz.element.animate([{
          opacity: Xz
        }, {
          opacity: 1
        }], 144);
        Wz.fade = Oz, Wz.pop = Wz.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * tz
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const oz = Wz;
        Oz.onfinish = () => {
          if (oz.fade !== Oz) return;
          const zz = oz.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          zz.startTime = Oz.startTime, oz.fade = zz, zz.onfinish = () => {
            oz.fade === zz && (oz.element.remove(), Cz(this.arcs, oz))
          }
        }
      }
      drawArcAngle(zz) {
        const tz = zz.direction - this.cameraHeading;
        (null === zz.drawnAngle || Math.abs(tz - zz.drawnAngle) > .005) && (zz.drawnAngle = tz, zz.element.style.rotate = `${tz}rad`)
      }
      flashEdge(zz, tz) {
        var sz, Fz, Wz;
        if (!this.root) return;
        let Xz = this.flashes.find((tz => null === tz.angle || null === zz ? tz.angle === zz : Jz(tz.angle, zz) < .5));
        if (!Xz) {
          const tz = document.createElement("div");
          tz.className = "FrontlineDamageFlash";
          const sz = tz.appendChild(document.createElement("div"));
          sz.className = "FrontlineDamageFlashGlow", this.root.insertBefore(tz, this.arcLayer), Xz = {
            element: tz,
            glow: sz,
            angle: zz,
            level: 0,
            animation: null
          }, this.flashes.push(Xz)
        }
        const Oz = null === (sz = Xz.animation) || void 0 === sz || null === (Fz = sz.effect) || void 0 === Fz ? void 0 : Fz.getComputedTiming().progress,
          oz = null === Oz || void 0 === Oz ? 0 : Xz.level * (1 - Oz);
        Xz.level = Math.min(1, Math.max(tz, oz + .6 * tz)), Xz.angle = zz;
        const {
          x: vz,
          y: Uz,
          rx: Kz,
          ry: uz
        } = function(zz, tz) {
          const sz = window.innerWidth,
            Fz = window.innerHeight;
          if (null === zz) return {
            x: sz / 2,
            y: Fz / 2,
            rx: 0,
            ry: 0
          };
          const Wz = Math.sin(zz),
            Xz = -Math.cos(zz),
            Oz = sz / 2 / Math.max(1e-6, Math.abs(Wz)),
            oz = Fz / 2 / Math.max(1e-6, Math.abs(Xz)),
            vz = Math.min(Oz, oz),
            Uz = Math.round(sz / 2 + Wz * vz),
            Kz = Math.round(Fz / 2 + Xz * vz),
            uz = Fz / 100 * (.85 + .25 * tz),
            Nz = Oz <= oz,
            bz = Math.round((Nz ? 30 : 74) * uz),
            wz = Math.round((Nz ? 58 : 26) * uz);
          return {
            x: Uz,
            y: Kz,
            rx: bz,
            ry: wz
          }
        }(zz, Xz.level), {
          style: Nz
        } = Xz.glow;
        Xz.glow.classList.toggle("Everywhere", null === zz), Nz.setProperty("--glowX", `${vz}px`), Nz.setProperty("--glowY", `${Uz}px`), Nz.setProperty("--glowRx", `${Kz}px`), Nz.setProperty("--glowRy", `${uz}px`), Xz.element.style.transformOrigin = `${vz}px ${Uz}px`, null === (Wz = Xz.animation) || void 0 === Wz || Wz.cancel();
        const bz = Xz.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Xz.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Xz.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Xz.level
        });
        Xz.animation = bz;
        const wz = Xz;
        bz.onfinish = () => {
          wz.animation === bz && (wz.element.remove(), Cz(this.flashes, wz))
        }
      }
      clearHits() {
        for (const Fz of this.arcs) {
          var zz, tz;
          null === (zz = Fz.fade) || void 0 === zz || zz.cancel(), Fz.fade = null, null === (tz = Fz.pop) || void 0 === tz || tz.cancel(), Fz.element.remove()
        }
        this.arcs.length = 0;
        for (const Fz of this.flashes) {
          var sz;
          null === (sz = Fz.animation) || void 0 === sz || sz.cancel(), Fz.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function Jz(zz, tz) {
      return Math.abs(Math.atan2(Math.sin(zz - tz), Math.cos(zz - tz)))
    }

    function Iz(zz) {
      return Math.max(0, Math.min(1, zz))
    }

    function Cz(zz, tz) {
      const sz = zz.indexOf(tz); - 1 !== sz && zz.splice(sz, 1)
    }
    var ez = sz(1020),
      Zz = sz.n(ez),
      Gz = sz(36078),
      Tz = sz(36169),
      cz = sz(1173),
      jz = sz(1416);
    const Az = "frontlineHudChanged",
      yz = "frontlineScoreboardChanged";
    class Mz {
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
      Sw(zz) {
        this.wire = zz, Uz.o.Yg(Az, zz, !0)
      }
      receiveScoreboard(zz) {
        let tz = "scoreboard" === zz[0] ? performance.now() + zz[5] : 0;
        const sz = this.scoreboard.endsAt;
        0 !== tz && 0 !== sz && Math.abs(tz - sz) < 1e3 && (tz = sz), this.scoreboard = {
          wire: zz,
          endsAt: tz
        }, Uz.o.Yg(yz, this.scoreboard, !0)
      }
    }
    var dz = sz(1087);
    const hz = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Qz(zz) {
      const [tz, sz] = (0, Wz.useState)((() => (zz - performance.now()) / 1e3));
      return (0, Wz.useEffect)((() => {
        if (0 === zz) return;
        const tz = () => {
          sz((zz - performance.now()) / 1e3)
        };
        tz();
        const Fz = window.setInterval(tz, 250);
        return () => {
          window.clearInterval(Fz)
        }
      }), [zz]), tz
    }

    function kz(zz) {
      let {
        className: tz,
        point: sz
      } = zz;
      const [Fz, Wz, Xz, Oz, oz, vz] = sz;
      return (0, dz.jsxs)("div", {
        className: Zz()(tz, `Owner-${Wz||"None"}`, `Leader-${Oz||"None"}`, {
          Contested: oz,
          Here: vz
        }),
        children: [(0, dz.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Fz
        }), (0, dz.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Xz}%`
          }
        })]
      })
    }
    const iz = (0, Wz.memo)((function(zz) {
        let {
          points: tz,
          markers: sz
        } = zz;
        const {
          t: Fz
        } = (0, cz.B)();
        return tz ? (0, dz.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: tz.map((zz => {
            const [tz, , , , , , , Wz] = zz;
            return (0, dz.jsxs)("div", {
              ref: sz.bindMarker(tz),
              className: "FrontlinePointMarker",
              children: [(0, dz.jsx)(kz, {
                className: "FrontlinePointMarkerTile",
                point: zz
              }), (0, dz.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Wz && (0, dz.jsx)("span", {
                  className: Zz()("FrontlinePointMarkerHomeTurf", `Team-${Wz}`),
                  children: Fz("frontlineHud:homeTurf", {
                    team: Fz(hz[Wz])
                  })
                }), (0, dz.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, tz)
          }))
        }) : null
      })),
      Lz = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      lz = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function nz(zz) {
      let {
        hud: tz,
        crosshair: sz,
        damage: Fz,
        markers: Wz
      } = zz;
      const Xz = (0, jz.h)(Az, tz.getWire()),
        Oz = (0, jz.h)(yz, tz.getScoreboard());
      return (0, dz.jsxs)(dz.Fragment, {
        children: [(0, dz.jsx)(az, {
          damage: Fz
        }), (0, dz.jsx)(iz, {
          points: "scoreboard" === Oz.wire[0] ? Oz.wire[6] : null,
          markers: Wz
        }), (0, dz.jsx)(Sz, {
          view: Oz
        }), (0, dz.jsx)("div", {
          className: "FrontlineReticle",
          ref: sz.bindElement
        }), (0, dz.jsx)(Gz.e, {
          children: (0, dz.jsx)(qz, {
            wire: Xz
          })
        })]
      })
    }
    const az = (0, Wz.memo)((function(zz) {
        let {
          damage: tz
        } = zz;
        return (0, dz.jsxs)("div", {
          className: "FrontlineDamage",
          ref: tz.bindElement,
          children: [(0, dz.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, dz.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, dz.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      qz = (0, Wz.memo)((function(zz) {
        let {
          wire: tz
        } = zz;
        const {
          t: sz
        } = (0, cz.B)();
        if ("capture" === tz[0]) {
          const [, zz, Fz, Wz, Xz, Oz, oz] = tz, vz = Math.round(Wz / 100 * 24);
          return (0, dz.jsxs)("div", {
            className: Zz()("FrontlinePlate", `Status-${Fz}`, `Leader-${Xz||"None"}`),
            children: [(0, dz.jsx)(fz, {}), (0, dz.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, dz.jsx)("span", {
                className: "FrontlineObjective",
                children: zz
              }), (0, dz.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, dz.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: sz("frontlineHud:objective", {
                    point: zz,
                    friendly: Oz,
                    enemy: oz
                  })
                }), (0, dz.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: sz(Lz[Fz])
                })]
              }), (0, dz.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Wz).padStart(3, "0"), (0, dz.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, dz.jsx)(Rz, {
              segments: 24,
              lit: vz
            })]
          })
        }
        if ("alert" === tz[0]) {
          const [, zz, Fz, Wz] = tz;
          return (0, dz.jsxs)("div", {
            className: Zz()("FrontlinePlate", "FrontlineAlert", `Tone-${Wz}`),
            children: [(0, dz.jsx)(fz, {}), (0, dz.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: sz(lz[zz])
            }), (0, dz.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Fz
            })]
          })
        }
        return null
      })),
      Sz = (0, Wz.memo)((function(zz) {
        let {
          view: tz
        } = zz;
        const {
          t: sz
        } = (0, cz.B)(), Fz = (0, Wz.useRef)(null), Xz = function(zz, tz) {
          const [sz, Fz] = (0, Wz.useState)(!1);
          return (0, Wz.useLayoutEffect)((() => {
            const tz = zz.current;
            if (!tz) return;
            const sz = document.querySelector(`.${Tz.g}`),
              Wz = document.querySelector(`.${Tz.j}`),
              Xz = () => {
                var zz;
                const Xz = tz.querySelector(".FrontlineTeamTrack"),
                  Oz = (0, vz.getRemInPx)(),
                  oz = tz.getBoundingClientRect().width - 2 * (null !== (zz = null === Xz || void 0 === Xz ? void 0 : Xz.getBoundingClientRect().width) && void 0 !== zz ? zz : 0),
                  Uz = window.innerWidth / 2,
                  Kz = sz ? sz.getBoundingClientRect().right : 0,
                  uz = Wz ? Wz.getBoundingClientRect().left : window.innerWidth,
                  Nz = Math.min(Uz - Kz, uz - Uz) - Tz.e - oz / 2,
                  bz = Nz < 6 * Oz,
                  wz = bz ? (window.innerWidth - oz) / 2 - Tz.e : Nz;
                tz.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(wz,14*Oz)))}px`), Fz(bz)
              };
            Xz();
            const Oz = new ResizeObserver(Xz);
            for (const zz of [tz, sz, Wz]) zz && Oz.observe(zz);
            return window.addEventListener("resize", Xz), () => {
              Oz.disconnect(), window.removeEventListener("resize", Xz)
            }
          }), [zz, tz]), sz
        }(Fz, "scoreboard" === tz.wire[0]);
        if ("scoreboard" !== tz.wire[0]) return null;
        const [, Oz, oz, Uz, Kz, , uz] = tz.wire, Nz = "Red" === Oz ? "Blue" : "Red";
        return (0, dz.jsxs)("div", {
          className: Zz()("FrontlineScoreboardContainer", {
            Below: Xz
          }),
          children: [(0, dz.jsxs)("div", {
            ref: Fz,
            className: "FrontlineScoreboard",
            children: [(0, dz.jsx)(fz, {}), (0, dz.jsx)(Vz, {
              team: Oz,
              tickets: oz,
              goal: Kz,
              side: "Friendly"
            }), (0, dz.jsx)("div", {
              className: "FrontlinePoints",
              children: uz.map((zz => (0, dz.jsx)(kz, {
                className: "FrontlinePoint",
                point: zz
              }, zz[0])))
            }), (0, dz.jsx)(Vz, {
              team: Nz,
              tickets: Uz,
              goal: Kz,
              side: "Enemy"
            })]
          }), (0, dz.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, dz.jsx)(pz, {
              endsAt: tz.endsAt
            }), (0, dz.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: sz("frontlineHud:ticketGoal", {
                goal: Kz
              })
            })]
          })]
        })
      }));

    function Vz(zz) {
      let {
        team: tz,
        tickets: sz,
        goal: Fz,
        side: Wz
      } = zz;
      const {
        t: Xz
      } = (0, cz.B)(), Oz = String(sz).padStart(3, "0"), oz = Oz.search(/[1-9]/), vz = -1 === oz ? Oz : Oz.slice(0, oz), Uz = Math.min(20, Math.floor(sz / Fz * 20));
      return (0, dz.jsxs)("div", {
        className: Zz()("FrontlineTeamScore", Wz, `Team-${tz}`),
        children: [(0, dz.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, dz.jsx)("span", {
            className: "Lead",
            children: vz
          }), -1 !== oz && Oz.slice(oz)]
        }), (0, dz.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, dz.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Xz(hz[tz])
          }), (0, dz.jsx)(Rz, {
            segments: 20,
            lit: Uz
          })]
        })]
      })
    }

    function Rz(zz) {
      let {
        segments: tz,
        lit: sz
      } = zz;
      return (0, dz.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: tz
        }, ((zz, tz) => (0, dz.jsx)("i", {
          className: Zz()({
            Lit: tz < sz
          })
        }, tz)))
      })
    }

    function pz(zz) {
      let {
        endsAt: tz
      } = zz;
      const sz = Math.max(0, Math.ceil(Qz(tz)));
      return (0, dz.jsxs)("div", {
        className: Zz()("FrontlineClock", {
          Urgent: sz <= 60
        }),
        children: [Math.floor(sz / 60), ":", String(sz % 60).padStart(2, "0")]
      })
    }

    function fz() {
      return (0, dz.jsxs)(dz.Fragment, {
        children: [(0, dz.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, dz.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Ez = sz(36164),
      zt = sz(1237),
      tt = sz(37917),
      st = sz(37961);
    class Ft {
      constructor(zz) {
        var tz;
        this.hud = zz, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.lw = !1, this.YB = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.YB), null === (tz = window.visualViewport) || void 0 === tz || tz.addEventListener("resize", this.YB)
      }
      bindMarker(zz) {
        let tz = this.refs.get(zz);
        return tz || (tz = tz => {
          var sz;
          null === (sz = this.markers.get(zz)) || void 0 === sz || sz.stopObserving(), this.markers.delete(zz), tz && !this.lw && this.markers.set(zz, this.mount(tz))
        }, this.refs.set(zz, tz)), tz
      }
      frame(zz, tz) {
        this.render = zz;
        const sz = this.hud.getScoreboard().wire;
        if ("scoreboard" === sz[0] && 0 !== this.markers.size)
          for (const [Fz, , , , , , Wz] of sz[6]) {
            const zz = this.markers.get(Fz);
            zz && Wz && (zz.target ??= [0, 0, 0], zz.target[0] = Wz[0], zz.target[1] = Wz[1] + 2.5, zz.target[2] = Wz[2], this.place(zz), this.rX(zz, tz && Math.hypot(Wz[0] - tz[0], Wz[1] - tz[1], Wz[2] - tz[2])))
          }
      }
      dispose() {
        var zz;
        this.lw = !0, window.removeEventListener("resize", this.YB), null === (zz = window.visualViewport) || void 0 === zz || zz.removeEventListener("resize", this.YB);
        for (const tz of this.markers.values()) tz.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(zz) {
        const {
          render: tz,
          viewport: sz
        } = this;
        if (!tz || !zz.target) return;
        const Fz = (50 - tz.screenBandPct.y) / 100 * sz.height,
          Wz = {
            x: zz.halfSize.width + 8,
            top: zz.halfSize.height + 8,
            bottom: zz.halfSize.height + zz.labelsBelow + Fz
          },
          Xz = tz.projectWorldPosToViewport(zz.target),
          Oz = null !== Xz && void 0 !== Xz ? Xz : tz.projectWorldPosToScreenPos(zz.target),
          oz = (0, st.d)({
            x: Oz.x,
            y: Oz.y,
            text: Xz
          }, Wz, sz);
        (0, tt.b)(zz.root, Math.round(100 * oz.x) / 100, Math.round(100 * oz.y) / 100)
      }
      rX(zz, tz) {
        if (null === tz) return void(null !== zz.metres && (zz.metres = null, zz.distance.textContent = ""));
        const sz = Date.now();
        (null === zz.metres || (0, Ez.d)(tz, zz.metres, zz.metresShownAt)) && (zz.metres = Math.round(tz), zz.metresShownAt = sz, zz.distance.textContent = (0, cz.v)(zt.g.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(zz.metres)
        }))
      }
      mount(zz) {
        const tz = {
            root: zz,
            distance: zz.querySelector(".FrontlinePointMarkerDistance"),
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
          sz = zz.querySelector(".FrontlinePointMarkerLabels"),
          Fz = new ResizeObserver((() => {
            tz.halfSize = {
              width: Math.max(zz.offsetWidth, sz.offsetWidth) / 2,
              height: zz.offsetHeight / 2
            }, tz.labelsBelow = sz.offsetTop + sz.offsetHeight - zz.offsetHeight, this.place(tz)
          }));
        return Fz.observe(zz, {
          box: "border-box"
        }), Fz.observe(sz, {
          box: "border-box"
        }), tz.stopObserving = () => {
          Fz.disconnect()
        }, tz
      }
    }
    var Wt = sz(6031),
      Xt = sz(2414);
    const Ot = "frontlineRoundEndChanged";
    class ot {
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
      Sw(zz) {
        const tz = "roundEnd" === zz[0] ? performance.now() + zz[5] : 0;
        this.view = {
          wire: zz,
          key: this.view.key + 1,
          endsAt: tz
        }, Uz.o.Yg(Ot, this.view, !0)
      }
    }
    const vt = (0, Wz.lazy)((() => (0, Xt.d)(sz.e(191).then((() => sz(40861))), (zz => zz.FrontlineMvpLineup)))),
      Ut = [4800, 4e3, 3200],
      Kt = [1, 0, 2],
      ut = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Nt = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function bt(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, jz.h)(Ot, tz.getView()),
        Fz = Qz(sz.endsAt);
      return "roundEnd" !== sz.wire[0] || 1e3 * Fz < -2e3 ? null : (0, dz.jsx)(wt, {
        wire: sz.wire,
        secondsLeft: Math.max(0, Math.ceil(Fz))
      }, sz.key)
    }
    const wt = (0, Wz.memo)((function(zz) {
      let {
        wire: tz,
        secondsLeft: sz
      } = zz;
      const {
        t: Xz
      } = (0, cz.B)(), [, Oz, oz, vz, Uz, , Kz, uz] = tz, Nz = (0, Wz.useMemo)((() => Kt.filter((zz => zz < uz.length))), [uz]), bz = (0, Wz.useMemo)((() => Nz.map((zz => {
        const [, , , , , tz, sz] = uz[zz];
        return {
          cosmetics: Fz.map(((zz, sz) => [zz, tz[sz]])),
          size: 0 === zz ? 1.15 : .85,
          heldGun: {
            name: sz,
            aimed: 0 === zz
          },
          showAfterMs: Ut[zz]
        }
      }))), [uz, Nz]);
      return (0, dz.jsxs)("div", {
        className: Zz()("FrontlineRoundEnd", `Result-${Oz}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, dz.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, dz.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, dz.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, dz.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, dz.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (wz = Xz(ut[Oz]), /\p{Script=Arabic}/u.test(wz) ? [wz] : (0, Wt.d)(wz)).map(((zz, tz) => (0, dz.jsx)("span", {
              style: {
                "--letter": tz
              },
              children: zz
            }, tz)))]
          }), (0, dz.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [oz && "victory" === Oz && (0, dz.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Xz("frontlineRoundEnd:comeback")
            }), (0, dz.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, dz.jsx)("b", {
                className: "Friendly",
                children: vz
              }), " \u2013 ", (0, dz.jsx)("b", {
                className: "Enemy",
                children: Uz
              })]
            })]
          })]
        }), Nz.length > 0 && (0, dz.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Nz.length
          },
          children: [(0, dz.jsx)(Wz.Suspense, {
            fallback: null,
            children: (0, dz.jsx)(vt, {
              className: "FrontlineRoundEndLineup",
              players: bz
            })
          }), Nz.map((zz => (0, dz.jsx)(Dt, {
            mvp: uz[zz],
            place: zz
          }, zz)))]
        }), (0, dz.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Xz("frontlineRoundEnd:nextFront", {
            map: Kz,
            seconds: String(sz)
          })
        })]
      });
      var wz
    }));

    function Dt(zz) {
      let {
        mvp: tz,
        place: sz
      } = zz;
      const {
        t: Fz
      } = (0, cz.B)(), [Wz, Xz, Oz, oz, vz] = tz, [Uz, Kz] = Fz(function(zz, tz) {
        return 1 === tz && "damage" !== zz ? `frontlineRoundEnd:${zz}One` : `frontlineRoundEnd:${zz}`
      }(Oz, oz), {
        name: "\0",
        count: oz.toLocaleString()
      }).split("\0");
      return (0, dz.jsxs)("div", {
        className: Zz()("FrontlineMvpCard", `Place-${sz+1}`, `Team-${Xz}`),
        style: {
          "--revealMs": `${Ut[sz]}ms`
        },
        children: [(0, dz.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, dz.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, dz.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Fz(Nt[sz])
        }), (0, dz.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Uz, (0, dz.jsx)("span", {
            className: "FrontlineMvpName",
            children: Wz
          }), Kz]
        }), (0, dz.jsx)("div", {
          className: "FrontlineMvpKit",
          children: vz
        })]
      })
    }
    const gt = function(zz, tz, sz, Fz) {
      let {
        localPlayerId: Oz
      } = Fz;
      const oz = new Mz,
        vz = new ot;
      let Uz = null,
        Kz = null,
        uz = null,
        Nz = null,
        bz = null,
        wz = [!1, !1];
      const Dz = () => {
        var zz, tz;
        const [sz, Fz] = wz;
        null === (zz = Kz) || void 0 === zz || zz.Xx(!sz), null === (tz = uz) || void 0 === tz || tz.Xx(!Fz)
      };
      return {
        onCreate: zz => {
          Uz = zz, Kz = new Pz(zz, Oz), uz = new mz(zz, Oz), Nz = new Ft(oz), Dz(), bz = (0, Xz.x)((0, Wz.createElement)(Wz.Fragment, null, (0, Wz.createElement)(nz, {
            hud: oz,
            crosshair: Kz,
            damage: uz,
            markers: Nz
          }), (0, Wz.createElement)(bt, {
            controller: vz
          })))
        },
        onClose: () => {
          var zz, tz, sz, Fz;
          null === (zz = bz) || void 0 === zz || zz(), null === (tz = Kz) || void 0 === tz || tz.dispose(), Kz = null, null === (sz = uz) || void 0 === sz || sz.dispose(), uz = null, null === (Fz = Nz) || void 0 === Fz || Fz.dispose(), Nz = null, Uz = null
        },
        onAfterRender: (zz, tz) => {
          var sz, Fz, Wz, Xz;
          null === (sz = Kz) || void 0 === sz || sz.frame(zz, tz.tanHalfFovY), null === (Fz = uz) || void 0 === Fz || Fz.frame(tz.cameraHeading), null === (Wz = Nz) || void 0 === Wz || Wz.frame(tz, null !== (Xz = Uz) && void 0 !== Xz && Xz.checkValid(Oz) ? Uz.yB(Oz) : null)
        },
        onReceivedMessageFromServer: (zz, tz) => {
          "frontlineHud" === zz ? oz.Sw(tz) : "frontlineScoreboard" === zz ? oz.receiveScoreboard(tz) : "frontlineRoundEnd" === zz ? vz.Sw(tz) : "frontlinePrefs" === zz && (wz = tz, Dz())
        }
      }
    }
  },
  6031: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    const Fz = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Wz(zz) {
      return null === Fz ? Array.from(zz) : Array.from(Fz.segment(zz), (zz => {
        let {
          segment: tz
        } = zz;
        return tz
      }))
    }
  },
  37917: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      e: () => Xz
    });
    const Fz = new WeakMap;

    function Wz(zz) {
      let tz = Fz.get(zz);
      return tz || (tz = {
        hidden: zz.hidden,
        x: NaN,
        y: NaN
      }, Fz.set(zz, tz)), tz
    }

    function Xz(zz, tz) {
      const sz = Wz(zz);
      sz.hidden !== tz && (sz.hidden = tz, zz.hidden = tz)
    }

    function Oz(zz, tz, sz) {
      const Fz = Wz(zz);
      Fz.x === tz && Fz.y === sz || (Fz.x = tz, Fz.y = sz, zz.style.translate = `${tz}vw ${sz}vh`)
    }
  },
  36453: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    const Fz = {
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
for (const zz in modules) Object.freeze(modules[zz]);