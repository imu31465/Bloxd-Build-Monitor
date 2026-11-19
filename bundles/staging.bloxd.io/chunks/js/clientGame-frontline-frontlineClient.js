export const id = 17;
export const ids = [17];
export const modules = {
  36066: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz,
      d: () => Zz,
      g: () => dz,
      h: () => pz
    });
    var Ez = bz(8982),
      nz = bz(36071),
      iz = bz(36080),
      lz = bz(8378),
      Mz = bz(1417),
      tz = bz(56),
      Hz = bz(79),
      Oz = bz(1089);

    function pz() {
      var zz;
      return (0, Mz.h)(nz.e, (0, nz.o)()), (0, Oz.jsx)(Oz.Fragment, {
        children: null === (zz = (0, nz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function dz(zz) {
      var uz;
      let {
        show: bz
      } = zz;
      (0, Mz.h)(nz.e, (0, nz.o)());
      const Hz = null === (uz = (0, nz.o)()) || void 0 === uz ? void 0 : uz.menu;
      return (0, tz.useEffect)((() => {
        var zz;
        bz || (null === Hz || void 0 === Hz || null === (zz = Hz.onClose) || void 0 === zz || zz.call(Hz), (0, iz.j)())
      }), [bz, Hz]), (0, tz.useEffect)((() => bz ? (0, lz.e)(iz.u, iz.d) : void 0), [bz]), (0, Oz.jsx)(Ez.d, {
        showing: bz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hz || void 0 === Hz ? void 0 : Hz.content
      })
    }

    function Fz(zz) {
      let {
        placement: uz = "bottom"
      } = zz;
      return (0, Oz.jsx)("div", {
        id: `clientGameHud-${uz}`,
        style: {
          display: "contents"
        }
      })
    }

    function Zz(zz) {
      let {
        children: uz,
        placement: bz = "bottom"
      } = zz;
      const [Ez, nz] = (0, tz.useState)(null);
      return (0, tz.useEffect)((() => {
        nz(document.getElementById(`clientGameHud-${bz}`))
      }), [bz]), Ez ? (0, Hz.createPortal)(uz, Ez) : null
    }
  },
  8982: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(4298),
      nz = bz(4300);

    function iz(zz) {
      let {
        children: uz,
        showing: bz,
        globallyUniqueKey: iz,
        alwaysMountChildren: lz = !1,
        doGameplayStartStopOnShow: Mz = !0,
        keepsMovement: tz = !1
      } = zz;
      return (0, nz.e)(!0, bz, iz, tz), (0, Ez.d)(Mz, bz), bz || lz ? uz : null
    }
  },
  36162: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      d: () => lz,
      g: () => Mz,
      j: () => tz
    });
    var Ez = bz(56),
      nz = bz(1108);
    const iz = 8,
      lz = "InGameHeaderContainer",
      Mz = "TopRightElements";

    function tz(zz) {
      const [uz] = (0, nz.b)(), [bz, tz] = (0, Ez.useState)(!1);
      return (0, Ez.useLayoutEffect)((() => {
        if (!zz) return;
        const uz = document.querySelector(`.${lz}`),
          bz = document.querySelector(`.${Mz}`),
          Ez = () => {
            const Ez = zz.getBoundingClientRect(),
              nz = uz ? uz.getBoundingClientRect().right : 0,
              lz = bz ? bz.getBoundingClientRect().left : window.innerWidth,
              Mz = Ez.left < nz + iz,
              Hz = Ez.right > lz - iz;
            tz(Mz || Hz)
          };
        Ez();
        const nz = new ResizeObserver(Ez);
        return nz.observe(zz), uz && nz.observe(uz), bz && nz.observe(bz), () => {
          nz.disconnect()
        }
      }), [zz, uz]), bz
    }
  },
  36158: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    const Ez = [{
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

    function nz(zz, uz, bz) {
      const nz = Math.abs(zz - uz),
        iz = Date.now() - bz;
      for (const lz of Ez)
        if (zz < lz.maxDist) return nz >= lz.hardUpdateDist || iz > lz.timeBetweenSoftChecks && nz >= lz.softUpdateDist;
      return !1
    }
  },
  8378: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      e: () => nz
    });
    let Ez = null;
    const nz = function(zz) {
        const uz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ez = uz, () => {
          Ez === uz && (Ez = null)
        }
      },
      iz = () => {
        var zz;
        return null !== (zz = Ez) && void 0 !== zz && zz.canCycle() ? Ez.cycle : null
      }
  },
  37920: (zz, uz, bz) => {
    function Ez(zz, uz, bz) {
      var Ez;
      const {
        width: nz,
        height: iz
      } = bz, lz = null !== (Ez = zz.text) && void 0 !== Ez ? Ez : zz, Mz = (lz.x / 100 - .5) * nz, tz = (lz.y / 100 - .5) * iz, Hz = nz / 2 - uz.x;
      if (null !== zz.text && Math.abs(Mz) <= Hz && tz >= uz.top - iz / 2 && tz <= iz / 2 - uz.bottom) return {
        x: lz.x,
        y: lz.y
      };
      const Oz = Math.min(0 === Mz ? 1 / 0 : Hz / Math.abs(Mz), tz > 0 ? (iz / 2 - uz.bottom) / tz : tz < 0 ? (uz.top - iz / 2) / tz : 1 / 0);
      return !Number.isFinite(Oz) || Oz < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Mz * Oz / nz * 100,
        y: 50 + tz * Oz / iz * 100
      }
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  36080: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => Rz,
      g: () => Kz,
      h: () => Mz,
      i: () => dz,
      j: () => wz,
      n: () => pz,
      q: () => fz,
      u: () => Zz,
      x: () => Xz
    });
    var Ez = bz(20),
      nz = bz(22);
    const iz = "clientGameInventoryButtonsChanged",
      lz = new Map;

    function Mz() {
      return [...lz.values()].sort(((zz, uz) => {
        var bz, Ez;
        return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
      }))
    }
    let tz = null;

    function Hz(zz) {
      tz = zz
    }
    let Oz = !1;

    function pz(zz) {
      Oz = !0;
      try {
        zz.onClick()
      } finally {
        Oz = !1
      }
      zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
    }

    function dz() {
      return Oz
    }

    function Fz() {
      return Mz().filter((zz => zz.panel && !zz.disabled))
    }

    function Zz(zz) {
      const uz = Fz(),
        bz = uz.findIndex((zz => zz.id === tz));
      return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
    }

    function Rz() {
      return null !== tz && Fz().length > 1
    }

    function Kz() {
      Hz(null)
    }

    function wz() {
      "inventory" !== Ez.e.get("openInGameMenuName") && Hz(null)
    }

    function Xz() {
      const zz = tz;
      return Hz(null), zz
    }

    function fz(zz) {
      return lz.set(zz.id, zz), nz.k.sK(iz, Mz(), !0), () => {
        lz.get(zz.id) === zz && (lz.delete(zz.id), nz.k.sK(iz, Mz()))
      }
    }
  },
  36071: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => Kz,
      l: () => wz,
      n: () => dz,
      o: () => Hz,
      p: () => Rz,
      t: () => Fz,
      x: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(36080);
    const Mz = "clientGameUiChanged";
    let tz = null;

    function Hz() {
      return tz
    }

    function Oz(zz, uz) {
      const bz = {
        content: zz,
        menu: uz
      };
      return tz = bz, nz.k.sK(Mz, tz, !0), () => {
        tz === bz && (tz = null, Zz = !1, Kz(), nz.k.sK(Mz, null))
      }
    }
    let pz = null;

    function dz() {
      return pz
    }

    function Fz(zz) {
      return pz = zz, () => {
        pz === zz && (pz = null)
      }
    }
    let Zz = !1;

    function Rz() {
      const zz = Ez.e.get("openInGameMenuName");
      "clientGame" !== zz && (Zz = "inventory" === zz), (0, lz.i)() || (0, lz.g)(), (0, iz.m)(iz.b), Ez.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Kz() {
      Xz(!1)
    }

    function wz() {
      Xz(Zz)
    }

    function Xz(zz) {
      "clientGame" === Ez.e.get("openInGameMenuName") && Ez.e.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, lz.g)(), Zz = !1
    }
  },
  38791: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Ku
    });
    const Ez = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var nz = bz(56),
      iz = bz(36071),
      lz = bz(36465),
      Mz = bz(36096),
      tz = bz(1673),
      Hz = bz(22);
    const Oz = {
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
    const pz = 32;

    function dz(zz, uz, bz, Ez) {
      return {
        tag: "line",
        attrs: {
          x1: zz,
          y1: uz,
          x2: bz,
          y2: Ez,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Fz(zz) {
      return {
        tag: "circle",
        attrs: {
          cx: pz,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pz,
          r: zz,
          class: "Fill"
        }
      }
    }

    function Zz(zz, uz) {
      return {
        tag: "path",
        attrs: {
          d: zz,
          "stroke-width": uz
        }
      }
    }

    function Rz(zz, uz, bz) {
      return {
        tag: "circle",
        attrs: {
          cx: pz,
          cy: pz,
          r: zz,
          "stroke-width": uz,
          class: bz
        }
      }
    }

    function Kz(zz, uz, bz) {
      return {
        tag: "text",
        attrs: {
          x: zz,
          y: uz,
          class: "Fill Label"
        },
        text: bz
      }
    }
    const wz = {
      pistol: zz => [dz(pz, pz - zz - 5, pz, pz - zz), dz(pz - zz - 5, pz, pz - zz, pz), dz(pz + zz, pz, pz + zz + 5, pz), Fz(1.4)],
      rifle: zz => [dz(pz, pz - zz - 8, pz, pz - zz), dz(pz, pz + zz, pz, pz + zz + 8), dz(pz - zz - 8, pz, pz - zz, pz), dz(pz + zz, pz, pz + zz + 8, pz), Fz(1)],
      smg: zz => {
        const uz = Math.PI / 2,
          bz = [];
        for (let lz = 0; lz < 4; lz++) bz.push((nz = lz * uz + .35, iz = (lz + 1) * uz - .35, Zz(`M${pz+(Ez=6+zz)*Math.cos(nz)} ${pz+Ez*Math.sin(nz)} A${Ez} ${Ez} 0 0 1 ${pz+Ez*Math.cos(iz)} ${pz+Ez*Math.sin(iz)}`, 2)));
        var Ez, nz, iz;
        return [...bz, Fz(1.4)]
      },
      shotgun: zz => [Rz(zz, 3, "Ring Outline"), Rz(zz, 1.5, "Ring")],
      marksman: zz => [Zz(`M${26-zz/2} ${39+zz/2} L32 33 L${38+zz/2} ${39+zz/2}`, 2), dz(14 - zz, pz, 24 - zz, pz, 1.5), dz(40 + zz, pz, 50 + zz, pz, 1.5), dz(14 - zz, 30, 14 - zz, 34, 1.5), dz(50 + zz, 30, 50 + zz, 34, 1.5)],
      machineGun: zz => {
        const uz = 10 + zz,
          bz = [];
        for (const [Ez, nz] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) bz.push(Zz(`M${pz+Ez*uz} ${pz+nz*(uz-5)} L${pz+Ez*uz} ${pz+nz*uz} L${pz+Ez*(uz-5)} ${pz+nz*uz}`, 2));
        return [...bz, dz(pz, 28, pz, 36, 1.5), dz(28, pz, 36, pz, 1.5)]
      },
      launcher: () => [dz(14, 30, 50, 30, 1.5), dz(pz, 24, pz, 52, 1.5), dz(28, 38, 36, 38, 1.5), dz(29, 44, 35, 44, 1.5), dz(30, 50, 34, 50, 1.5), Kz(38, 40, "100"), Kz(37, 46, "200"), Fz(1.4, 30)],
      melee: () => [Zz("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Fz(1.2)],
      throwable: () => [Fz(1.6)]
    };

    function Xz(zz) {
      let {
        tag: uz,
        attrs: bz,
        text: Ez
      } = zz, nz = `<${uz}`;
      for (const [iz, lz] of Object.entries(bz)) nz += ` ${iz}="${lz}"`;
      return void 0 === Ez ? `${nz}/>` : `${nz}>${Ez}</${uz}>`
    }
    class fz {
      constructor(zz, uz) {
        this.api = zz, this.localPlayerId = uz, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = zz => {
          this.element = zz, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, zz && !this.enabled && (zz.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, tz.getRemInPx)()))
        }, this.tokens = [Hz.k.subscribe("aimingOverlay", (zz => {
          this.sniperOverlay = "sniper" === zz
        })), Hz.k.subscribe("mouseState", (zz => {
          let {
            isDown: uz
          } = zz;
          this.mouseDown = uz
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Zx(zz) {
        zz !== this.enabled && (this.enabled = zz, this.drawnVisible = null, zz || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(zz, uz) {
        var bz, Ez;
        if (!this.enabled) return;
        const {
          api: nz
        } = this, iz = nz.isAlive(this.localPlayerId) && null !== (bz = null === (Ez = nz.luz(this.localPlayerId)) || void 0 === Ez ? void 0 : Ez.name) && void 0 !== bz ? bz : null, lz = (Mz = iz) && Oz[Mz] || null;
        var Mz;
        if (this.setOwnsCrosshair(null !== lz), !this.element) return;
        const tz = nz.getHeldGunInaccuracy(),
          Hz = null !== tz,
          pz = null !== lz && !this.sniperOverlay && nz.isCrosshairShown();
        if (pz !== this.drawnVisible && (this.drawnVisible = pz, this.element.style.display = pz ? "block" : "none"), !pz) return;
        const dz = Hz ? function(zz) {
            return "launcher" === zz || "melee" === zz || "throwable" === zz ? "none" : "shotgun" === zz ? "cone" : "offset"
          }(lz) : "none",
          Fz = null !== tz && void 0 !== tz ? tz : 0;
        "cone" === dz ? this.drawCone(lz, this.coneRadiusVh(Fz, uz) * this.gapPerVh, zz) : (this.coneDrawn = !1, this.draw(lz, "none" === dz ? 2 : this.offsetGap(Fz)));
        const Zz = !Hz && this.mouseDown;
        Zz !== this.drawnPressed && (this.drawnPressed = Zz, this.element.classList.toggle("Pressed", Zz))
      }
      dispose() {
        for (const zz of this.tokens) Hz.k.unsubscribe(zz);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(zz, uz) {
        var bz, Ez;
        zz !== this.drawnFamily ? (this.drawnFamily = zz, this.drawnGap = uz, this.element.innerHTML = function(zz, uz) {
          return `<svg viewBox="0 0 64 64">${wz[zz](uz).map(Xz).join("")}</svg>`
        }(zz, uz), this.shapes = Array.from(null !== (bz = null === (Ez = this.element.firstElementChild) || void 0 === Ez ? void 0 : Ez.children) && void 0 !== bz ? bz : [])) : uz !== this.drawnGap && (this.drawnGap = uz, function(zz, uz, bz) {
          const Ez = wz[uz](bz);
          for (let nz = 0; nz < Ez.length; nz++)
            for (const [uz, bz] of Object.entries(Ez[nz].attrs)) {
              const Ez = String(bz);
              zz[nz].getAttribute(uz) !== Ez && zz[nz].setAttribute(uz, Ez)
            }
        }(this.shapes, zz, uz))
      }
      drawCone(zz, uz, bz) {
        zz === this.drawnFamily && this.coneDrawn ? this.shownRadius += (uz - this.shownRadius) * (1 - Math.exp(-bz / 80)) : this.shownRadius = uz, this.coneDrawn = !0, this.draw(zz, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(zz, uz) {
        if (!(uz > 0)) return 1;
        const bz = zz * lz.g / 2;
        return Math.max(50 * Math.tan(bz) / uz, 1)
      }
      offsetGap(zz) {
        const uz = 2 + ((0, Mz.e)(zz) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * uz) / 2)
      }
      setOwnsCrosshair(zz) {
        zz !== this.ownsCrosshair && (this.ownsCrosshair = zz, document.body.classList.toggle("FrontlineCustomCrosshair", zz))
      }
    }
    const sz = "FrontlineCustomDamage",
      rz = .45,
      oz = .2;
    class Nz {
      constructor(zz, uz) {
        this.api = zz, this.localPlayerId = uz, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.hn = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = zz => {
          var uz, bz;
          this.clearHits(), this.root = zz, this.lowLayer = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.querySelector(".FrontlineDamageLow")) && void 0 !== uz ? uz : null, this.arcLayer = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.querySelector(".FrontlineDamageArcs")) && void 0 !== bz ? bz : null, this.showRoot(), this.drawLow()
        }, this.token = Hz.k.subscribe("damagedByOtherPlayer", (zz => {
          let {
            direction: uz,
            mn: bz
          } = zz;
          this.onHurt(uz, bz)
        })), this.syncHealth(), document.body.classList.add(sz)
      }
      Zx(zz) {
        zz !== this.enabled && (this.enabled = zz, document.body.classList.toggle(sz, zz), zz || this.clearHits(), this.showRoot())
      }
      frame(zz) {
        this.syncHealth(), this.cameraHeading = zz;
        for (const uz of this.arcs) this.drawArcAngle(uz)
      }
      dispose() {
        Hz.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(sz)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const zz = this.api.getClientOption(this.localPlayerId, "_health"),
          uz = this.api.getClientOption(this.localPlayerId, "_shield"),
          bz = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(zz, this.readHealth) && Object.is(uz, this.readShield) && Object.is(bz, this.readMaxHealth)) return;
        if (this.readHealth = zz, this.readShield = uz, this.readMaxHealth = bz, null === zz || void 0 === zz || !bz) return this.lastHealthPool = null, this.maxHealth = null, this.hn = 1, this.dead = !1, void this.drawLow();
        const Ez = zz + (null !== uz && void 0 !== uz ? uz : 0);
        if (null !== this.lastHealthPool && Ez < this.lastHealthPool) {
          const zz = performance.now(),
            uz = (this.lastHealthPool - Ez) / bz;
          this.lastDrop = zz - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + uz,
            at: this.lastDrop.at
          } : {
            frac: uz,
            at: zz
          }
        }
        this.dead = zz <= 0, this.dead && this.clearHits(), this.lastHealthPool = Ez, this.maxHealth = bz, this.hn = zz > 0 ? zz / bz : 1, this.drawLow()
      }
      onHurt(zz, uz) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const bz = Math.min(1, this.takeDamageFrac(uz) / .3);
        null !== zz && this.showArc(zz, bz), this.flashEdge(null === zz ? null : zz - this.cameraHeading, .4 + .6 * bz)
      }
      takeDamageFrac(zz) {
        if (void 0 !== zz && this.maxHealth) return zz / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: uz
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, uz
      }
      drawLow() {
        if (!this.lowLayer) return;
        const zz = xz((rz - this.hn) / .25),
          uz = xz((oz - this.hn) / .15000000000000002),
          bz = this.hn < rz;
        this.lowLayer.classList.toggle("Active", bz), this.lowLayer.classList.toggle("Critical", this.hn < oz), this.lowLayer.style.opacity = String(bz ? .55 + .3 * zz + .15 * uz : 0)
      }
      showArc(zz, uz) {
        var bz, Ez;
        if (!this.arcLayer) return;
        let nz = this.arcs.find((uz => vz(uz.direction, zz) < .6));
        if (!nz) {
          const uz = document.createElement("div");
          uz.className = "FrontlineDamageArc", uz.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(uz), nz = {
            element: uz,
            direction: zz,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(nz)
        }
        nz.direction = zz, this.drawArcAngle(nz);
        const iz = nz.fade ? Number(getComputedStyle(nz.element).opacity) : 0;
        null === (bz = nz.fade) || void 0 === bz || bz.cancel(), null === (Ez = nz.pop) || void 0 === Ez || Ez.cancel(), nz.element.style.opacity = "1";
        const lz = nz.element.animate([{
          opacity: iz
        }, {
          opacity: 1
        }], 144);
        nz.fade = lz, nz.pop = nz.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * uz
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Mz = nz;
        lz.onfinish = () => {
          if (Mz.fade !== lz) return;
          const zz = Mz.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          zz.startTime = lz.startTime, Mz.fade = zz, zz.onfinish = () => {
            Mz.fade === zz && (Mz.element.remove(), Jz(this.arcs, Mz))
          }
        }
      }
      drawArcAngle(zz) {
        const uz = zz.direction - this.cameraHeading;
        (null === zz.drawnAngle || Math.abs(uz - zz.drawnAngle) > .005) && (zz.drawnAngle = uz, zz.element.style.rotate = `${uz}rad`)
      }
      flashEdge(zz, uz) {
        var bz, Ez, nz;
        if (!this.root) return;
        let iz = this.flashes.find((uz => null === uz.angle || null === zz ? uz.angle === zz : vz(uz.angle, zz) < .5));
        if (!iz) {
          const uz = document.createElement("div");
          uz.className = "FrontlineDamageFlash";
          const bz = uz.appendChild(document.createElement("div"));
          bz.className = "FrontlineDamageFlashGlow", this.root.insertBefore(uz, this.arcLayer), iz = {
            element: uz,
            glow: bz,
            angle: zz,
            level: 0,
            animation: null
          }, this.flashes.push(iz)
        }
        const lz = null === (bz = iz.animation) || void 0 === bz || null === (Ez = bz.effect) || void 0 === Ez ? void 0 : Ez.getComputedTiming().progress,
          Mz = null === lz || void 0 === lz ? 0 : iz.level * (1 - lz);
        iz.level = Math.min(1, Math.max(uz, Mz + .6 * uz)), iz.angle = zz;
        const {
          x: tz,
          y: Hz,
          rx: Oz,
          ry: pz
        } = function(zz, uz) {
          const bz = window.innerWidth,
            Ez = window.innerHeight;
          if (null === zz) return {
            x: bz / 2,
            y: Ez / 2,
            rx: 0,
            ry: 0
          };
          const nz = Math.sin(zz),
            iz = -Math.cos(zz),
            lz = bz / 2 / Math.max(1e-6, Math.abs(nz)),
            Mz = Ez / 2 / Math.max(1e-6, Math.abs(iz)),
            tz = Math.min(lz, Mz),
            Hz = Math.round(bz / 2 + nz * tz),
            Oz = Math.round(Ez / 2 + iz * tz),
            pz = Ez / 100 * (.85 + .25 * uz),
            dz = lz <= Mz,
            Fz = Math.round((dz ? 30 : 74) * pz),
            Zz = Math.round((dz ? 58 : 26) * pz);
          return {
            x: Hz,
            y: Oz,
            rx: Fz,
            ry: Zz
          }
        }(zz, iz.level), {
          style: dz
        } = iz.glow;
        iz.glow.classList.toggle("Everywhere", null === zz), dz.setProperty("--glowX", `${tz}px`), dz.setProperty("--glowY", `${Hz}px`), dz.setProperty("--glowRx", `${Oz}px`), dz.setProperty("--glowRy", `${pz}px`), iz.element.style.transformOrigin = `${tz}px ${Hz}px`, null === (nz = iz.animation) || void 0 === nz || nz.cancel();
        const Fz = iz.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: iz.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * iz.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * iz.level
        });
        iz.animation = Fz;
        const Zz = iz;
        Fz.onfinish = () => {
          Zz.animation === Fz && (Zz.element.remove(), Jz(this.flashes, Zz))
        }
      }
      clearHits() {
        for (const Ez of this.arcs) {
          var zz, uz;
          null === (zz = Ez.fade) || void 0 === zz || zz.cancel(), Ez.fade = null, null === (uz = Ez.pop) || void 0 === uz || uz.cancel(), Ez.element.remove()
        }
        this.arcs.length = 0;
        for (const Ez of this.flashes) {
          var bz;
          null === (bz = Ez.animation) || void 0 === bz || bz.cancel(), Ez.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function vz(zz, uz) {
      return Math.abs(Math.atan2(Math.sin(zz - uz), Math.cos(zz - uz)))
    }

    function xz(zz) {
      return Math.max(0, Math.min(1, zz))
    }

    function Jz(zz, uz) {
      const bz = zz.indexOf(uz); - 1 !== bz && zz.splice(bz, 1)
    }
    var Az = bz(1038),
      Tz = bz.n(Az),
      Lz = bz(36066),
      Pz = bz(36162),
      Gz = bz(1181),
      az = bz(1417);
    const Vz = "frontlineHudChanged",
      mz = "frontlineScoreboardChanged";
    class qz {
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
      WZ(zz) {
        this.wire = zz, Hz.k.sK(Vz, zz, !0)
      }
      receiveScoreboard(zz) {
        let uz = "scoreboard" === zz[0] ? performance.now() + zz[5] : 0;
        const bz = this.scoreboard.endsAt;
        0 !== uz && 0 !== bz && Math.abs(uz - bz) < 1e3 && (uz = bz), this.scoreboard = {
          wire: zz,
          endsAt: uz
        }, Hz.k.sK(mz, this.scoreboard, !0)
      }
    }
    var hz = bz(1089);
    const Uz = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function cz(zz) {
      const [uz, bz] = (0, nz.useState)((() => (zz - performance.now()) / 1e3));
      return (0, nz.useEffect)((() => {
        if (0 === zz) return;
        const uz = () => {
          bz((zz - performance.now()) / 1e3)
        };
        uz();
        const Ez = window.setInterval(uz, 250);
        return () => {
          window.clearInterval(Ez)
        }
      }), [zz]), uz
    }

    function gz(zz) {
      let {
        className: uz,
        point: bz
      } = zz;
      const [Ez, nz, iz, lz, Mz, tz] = bz;
      return (0, hz.jsxs)("div", {
        className: Tz()(uz, `Owner-${nz||"None"}`, `Leader-${lz||"None"}`, {
          Contested: Mz,
          Here: tz
        }),
        children: [(0, hz.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Ez
        }), (0, hz.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${iz}%`
          }
        })]
      })
    }
    const Sz = (0, nz.memo)((function(zz) {
        let {
          points: uz,
          markers: bz
        } = zz;
        const {
          t: Ez
        } = (0, Gz.F)();
        return uz ? (0, hz.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: uz.map((zz => {
            const [uz, , , , , , , nz] = zz;
            return (0, hz.jsxs)("div", {
              ref: bz.bindMarker(uz),
              className: "FrontlinePointMarker",
              children: [(0, hz.jsx)(gz, {
                className: "FrontlinePointMarkerTile",
                point: zz
              }), (0, hz.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [nz && (0, hz.jsx)("span", {
                  className: Tz()("FrontlinePointMarkerHomeTurf", `Team-${nz}`),
                  children: Ez("frontlineHud:homeTurf", {
                    team: Ez(Uz[nz])
                  })
                }), (0, hz.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, uz)
          }))
        }) : null
      })),
      yz = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Dz = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Qz(zz) {
      let {
        hud: uz,
        crosshair: bz,
        damage: Ez,
        markers: nz
      } = zz;
      const iz = (0, az.h)(Vz, uz.getWire()),
        lz = (0, az.h)(mz, uz.getScoreboard());
      return (0, hz.jsxs)(hz.Fragment, {
        children: [(0, hz.jsx)(Wz, {
          damage: Ez
        }), (0, hz.jsx)(Sz, {
          points: "scoreboard" === lz.wire[0] ? lz.wire[6] : null,
          markers: nz
        }), (0, hz.jsx)(jz, {
          view: lz
        }), (0, hz.jsx)("div", {
          className: "FrontlineReticle",
          ref: bz.bindElement
        }), (0, hz.jsx)(Lz.d, {
          children: (0, hz.jsx)(ez, {
            wire: iz
          })
        })]
      })
    }
    const Wz = (0, nz.memo)((function(zz) {
        let {
          damage: uz
        } = zz;
        return (0, hz.jsxs)("div", {
          className: "FrontlineDamage",
          ref: uz.bindElement,
          children: [(0, hz.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, hz.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, hz.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      ez = (0, nz.memo)((function(zz) {
        let {
          wire: uz
        } = zz;
        const {
          t: bz
        } = (0, Gz.F)();
        if ("capture" === uz[0]) {
          const [, zz, Ez, nz, iz, lz, Mz] = uz, tz = Math.round(nz / 100 * 24);
          return (0, hz.jsxs)("div", {
            className: Tz()("FrontlinePlate", `Status-${Ez}`, `Leader-${iz||"None"}`),
            children: [(0, hz.jsx)(Yz, {}), (0, hz.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, hz.jsx)("span", {
                className: "FrontlineObjective",
                children: zz
              }), (0, hz.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, hz.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: bz("frontlineHud:objective", {
                    point: zz,
                    friendly: lz,
                    enemy: Mz
                  })
                }), (0, hz.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: bz(yz[Ez])
                })]
              }), (0, hz.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(nz).padStart(3, "0"), (0, hz.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, hz.jsx)(Bz, {
              segments: 24,
              lit: tz
            })]
          })
        }
        if ("alert" === uz[0]) {
          const [, zz, Ez, nz] = uz;
          return (0, hz.jsxs)("div", {
            className: Tz()("FrontlinePlate", "FrontlineAlert", `Tone-${nz}`),
            children: [(0, hz.jsx)(Yz, {}), (0, hz.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: bz(Dz[zz])
            }), (0, hz.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Ez
            })]
          })
        }
        return null
      })),
      jz = (0, nz.memo)((function(zz) {
        let {
          view: uz
        } = zz;
        const {
          t: bz
        } = (0, Gz.F)(), Ez = (0, nz.useRef)(null), iz = function(zz, uz) {
          const [bz, Ez] = (0, nz.useState)(!1);
          return (0, nz.useLayoutEffect)((() => {
            const uz = zz.current;
            if (!uz) return;
            const bz = document.querySelector(`.${Pz.d}`),
              nz = document.querySelector(`.${Pz.g}`),
              iz = () => {
                var zz;
                const iz = uz.querySelector(".FrontlineTeamTrack"),
                  lz = (0, tz.getRemInPx)(),
                  Mz = uz.getBoundingClientRect().width - 2 * (null !== (zz = null === iz || void 0 === iz ? void 0 : iz.getBoundingClientRect().width) && void 0 !== zz ? zz : 0),
                  Hz = window.innerWidth / 2,
                  Oz = bz ? bz.getBoundingClientRect().right : 0,
                  pz = nz ? nz.getBoundingClientRect().left : window.innerWidth,
                  dz = Math.min(Hz - Oz, pz - Hz) - Pz.b - Mz / 2,
                  Fz = dz < 6 * lz,
                  Zz = Fz ? (window.innerWidth - Mz) / 2 - Pz.b : dz;
                uz.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Zz,14*lz)))}px`), Ez(Fz)
              };
            iz();
            const lz = new ResizeObserver(iz);
            for (const zz of [uz, bz, nz]) zz && lz.observe(zz);
            return window.addEventListener("resize", iz), () => {
              lz.disconnect(), window.removeEventListener("resize", iz)
            }
          }), [zz, uz]), bz
        }(Ez, "scoreboard" === uz.wire[0]);
        if ("scoreboard" !== uz.wire[0]) return null;
        const [, lz, Mz, Hz, Oz, , pz] = uz.wire, dz = "Red" === lz ? "Blue" : "Red";
        return (0, hz.jsxs)("div", {
          className: Tz()("FrontlineScoreboardContainer", {
            Below: iz
          }),
          children: [(0, hz.jsxs)("div", {
            ref: Ez,
            className: "FrontlineScoreboard",
            children: [(0, hz.jsx)(Yz, {}), (0, hz.jsx)(Iz, {
              team: lz,
              tickets: Mz,
              goal: Oz,
              side: "Friendly"
            }), (0, hz.jsx)("div", {
              className: "FrontlinePoints",
              children: pz.map((zz => (0, hz.jsx)(gz, {
                className: "FrontlinePoint",
                point: zz
              }, zz[0])))
            }), (0, hz.jsx)(Iz, {
              team: dz,
              tickets: Hz,
              goal: Oz,
              side: "Enemy"
            })]
          }), (0, hz.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, hz.jsx)(Cz, {
              endsAt: uz.endsAt
            }), (0, hz.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: bz("frontlineHud:ticketGoal", {
                goal: Oz
              })
            })]
          })]
        })
      }));

    function Iz(zz) {
      let {
        team: uz,
        tickets: bz,
        goal: Ez,
        side: nz
      } = zz;
      const {
        t: iz
      } = (0, Gz.F)(), lz = String(bz).padStart(3, "0"), Mz = lz.search(/[1-9]/), tz = -1 === Mz ? lz : lz.slice(0, Mz), Hz = Math.min(20, Math.floor(bz / Ez * 20));
      return (0, hz.jsxs)("div", {
        className: Tz()("FrontlineTeamScore", nz, `Team-${uz}`),
        children: [(0, hz.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, hz.jsx)("span", {
            className: "Lead",
            children: tz
          }), -1 !== Mz && lz.slice(Mz)]
        }), (0, hz.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, hz.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: iz(Uz[uz])
          }), (0, hz.jsx)(Bz, {
            segments: 20,
            lit: Hz
          })]
        })]
      })
    }

    function Bz(zz) {
      let {
        segments: uz,
        lit: bz
      } = zz;
      return (0, hz.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: uz
        }, ((zz, uz) => (0, hz.jsx)("i", {
          className: Tz()({
            Lit: uz < bz
          })
        }, uz)))
      })
    }

    function Cz(zz) {
      let {
        endsAt: uz
      } = zz;
      const bz = Math.max(0, Math.ceil(cz(uz)));
      return (0, hz.jsxs)("div", {
        className: Tz()("FrontlineClock", {
          Urgent: bz <= 60
        }),
        children: [Math.floor(bz / 60), ":", String(bz % 60).padStart(2, "0")]
      })
    }

    function Yz() {
      return (0, hz.jsxs)(hz.Fragment, {
        children: [(0, hz.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, hz.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var kz = bz(36158),
      zu = bz(1241),
      uu = bz(37876),
      bu = bz(37920);
    class Eu {
      constructor(zz) {
        var uz;
        this.hud = zz, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.SZ = !1, this.Fs = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Fs), null === (uz = window.visualViewport) || void 0 === uz || uz.addEventListener("resize", this.Fs)
      }
      bindMarker(zz) {
        let uz = this.refs.get(zz);
        return uz || (uz = uz => {
          var bz;
          null === (bz = this.markers.get(zz)) || void 0 === bz || bz.stopObserving(), this.markers.delete(zz), uz && !this.SZ && this.markers.set(zz, this.mount(uz))
        }, this.refs.set(zz, uz)), uz
      }
      frame(zz, uz) {
        this.render = zz;
        const bz = this.hud.getScoreboard().wire;
        if ("scoreboard" === bz[0] && 0 !== this.markers.size)
          for (const [Ez, , , , , , nz] of bz[6]) {
            const zz = this.markers.get(Ez);
            zz && nz && (zz.target ??= [0, 0, 0], zz.target[0] = nz[0], zz.target[1] = nz[1] + 2.5, zz.target[2] = nz[2], this.place(zz), this.Ki(zz, uz && Math.hypot(nz[0] - uz[0], nz[1] - uz[1], nz[2] - uz[2])))
          }
      }
      dispose() {
        var zz;
        this.SZ = !0, window.removeEventListener("resize", this.Fs), null === (zz = window.visualViewport) || void 0 === zz || zz.removeEventListener("resize", this.Fs);
        for (const uz of this.markers.values()) uz.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(zz) {
        const {
          render: uz,
          viewport: bz
        } = this;
        if (!uz || !zz.target) return;
        const Ez = (50 - uz.screenBandPct.y) / 100 * bz.height,
          nz = {
            x: zz.halfSize.width + 8,
            top: zz.halfSize.height + 8,
            bottom: zz.halfSize.height + zz.labelsBelow + Ez
          },
          iz = uz.projectWorldPosToViewport(zz.target),
          lz = null !== iz && void 0 !== iz ? iz : uz.projectWorldPosToScreenPos(zz.target),
          Mz = (0, bu.d)({
            x: lz.x,
            y: lz.y,
            text: iz
          }, nz, bz);
        (0, uu.d)(zz.root, Math.round(100 * Mz.x) / 100, Math.round(100 * Mz.y) / 100)
      }
      Ki(zz, uz) {
        if (null === uz) return void(null !== zz.metres && (zz.metres = null, zz.distance.textContent = ""));
        const bz = Date.now();
        (null === zz.metres || (0, kz.d)(uz, zz.metres, zz.metresShownAt)) && (zz.metres = Math.round(uz), zz.metresShownAt = bz, zz.distance.textContent = (0, Gz.x)(zu.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(zz.metres)
        }))
      }
      mount(zz) {
        const uz = {
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
          bz = zz.querySelector(".FrontlinePointMarkerLabels"),
          Ez = new ResizeObserver((() => {
            uz.halfSize = {
              width: Math.max(zz.offsetWidth, bz.offsetWidth) / 2,
              height: zz.offsetHeight / 2
            }, uz.labelsBelow = bz.offsetTop + bz.offsetHeight - zz.offsetHeight, this.place(uz)
          }));
        return Ez.observe(zz, {
          box: "border-box"
        }), Ez.observe(bz, {
          box: "border-box"
        }), uz.stopObserving = () => {
          Ez.disconnect()
        }, uz
      }
    }
    var nu = bz(6174),
      iu = bz(2471);
    const lu = "frontlineRoundEndChanged";
    class Mu {
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
      WZ(zz) {
        const uz = "roundEnd" === zz[0] ? performance.now() + zz[5] : 0;
        this.view = {
          wire: zz,
          key: this.view.key + 1,
          endsAt: uz
        }, Hz.k.sK(lu, this.view, !0)
      }
    }
    const tu = (0, nz.lazy)((() => (0, iu.d)(bz.e(191).then((() => bz(40963))), (zz => zz.FrontlineMvpLineup)))),
      Hu = [4800, 4e3, 3200],
      Ou = [1, 0, 2],
      pu = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      du = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Fu(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, az.h)(lu, uz.getView()),
        Ez = cz(bz.endsAt);
      return "roundEnd" !== bz.wire[0] || 1e3 * Ez < -2e3 ? null : (0, hz.jsx)(Zu, {
        wire: bz.wire,
        secondsLeft: Math.max(0, Math.ceil(Ez))
      }, bz.key)
    }
    const Zu = (0, nz.memo)((function(zz) {
      let {
        wire: uz,
        secondsLeft: bz
      } = zz;
      const {
        t: iz
      } = (0, Gz.F)(), [, lz, Mz, tz, Hz, , Oz, pz] = uz, dz = (0, nz.useMemo)((() => Ou.filter((zz => zz < pz.length))), [pz]), Fz = (0, nz.useMemo)((() => dz.map((zz => {
        const [, , , , , uz, bz] = pz[zz];
        return {
          cosmetics: Ez.map(((zz, bz) => [zz, uz[bz]])),
          size: 0 === zz ? 1.15 : .85,
          heldGun: {
            name: bz,
            aimed: 0 === zz
          },
          showAfterMs: Hu[zz]
        }
      }))), [pz, dz]);
      return (0, hz.jsxs)("div", {
        className: Tz()("FrontlineRoundEnd", `Result-${lz}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, hz.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, hz.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, hz.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, hz.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, hz.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Zz = iz(pu[lz]), /\p{Script=Arabic}/u.test(Zz) ? [Zz] : (0, nu.c)(Zz)).map(((zz, uz) => (0, hz.jsx)("span", {
              style: {
                "--letter": uz
              },
              children: zz
            }, uz)))]
          }), (0, hz.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Mz && "victory" === lz && (0, hz.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: iz("frontlineRoundEnd:comeback")
            }), (0, hz.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, hz.jsx)("b", {
                className: "Friendly",
                children: tz
              }), " \u2013 ", (0, hz.jsx)("b", {
                className: "Enemy",
                children: Hz
              })]
            })]
          })]
        }), dz.length > 0 && (0, hz.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": dz.length
          },
          children: [(0, hz.jsx)(nz.Suspense, {
            fallback: null,
            children: (0, hz.jsx)(tu, {
              className: "FrontlineRoundEndLineup",
              players: Fz
            })
          }), dz.map((zz => (0, hz.jsx)(Ru, {
            mvp: pz[zz],
            place: zz
          }, zz)))]
        }), (0, hz.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: iz("frontlineRoundEnd:nextFront", {
            map: Oz,
            seconds: String(bz)
          })
        })]
      });
      var Zz
    }));

    function Ru(zz) {
      let {
        mvp: uz,
        place: bz
      } = zz;
      const {
        t: Ez
      } = (0, Gz.F)(), [nz, iz, lz, Mz, tz] = uz, [Hz, Oz] = Ez(function(zz, uz) {
        return 1 === uz && "damage" !== zz ? `frontlineRoundEnd:${zz}One` : `frontlineRoundEnd:${zz}`
      }(lz, Mz), {
        name: "\0",
        count: Mz.toLocaleString()
      }).split("\0");
      return (0, hz.jsxs)("div", {
        className: Tz()("FrontlineMvpCard", `Place-${bz+1}`, `Team-${iz}`),
        style: {
          "--revealMs": `${Hu[bz]}ms`
        },
        children: [(0, hz.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, hz.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, hz.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Ez(du[bz])
        }), (0, hz.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Hz, (0, hz.jsx)("span", {
            className: "FrontlineMvpName",
            children: nz
          }), Oz]
        }), (0, hz.jsx)("div", {
          className: "FrontlineMvpKit",
          children: tz
        })]
      })
    }
    const Ku = function(zz, uz, bz, Ez) {
      let {
        localPlayerId: lz
      } = Ez;
      const Mz = new qz,
        tz = new Mu;
      let Hz = null,
        Oz = null,
        pz = null,
        dz = null,
        Fz = null,
        Zz = [!1, !1];
      const Rz = () => {
        var zz, uz;
        const [bz, Ez] = Zz;
        null === (zz = Oz) || void 0 === zz || zz.Zx(!bz), null === (uz = pz) || void 0 === uz || uz.Zx(!Ez)
      };
      return {
        onCreate: zz => {
          Hz = zz, Oz = new fz(zz, lz), pz = new Nz(zz, lz), dz = new Eu(Mz), Rz(), Fz = (0, iz.x)((0, nz.createElement)(nz.Fragment, null, (0, nz.createElement)(Qz, {
            hud: Mz,
            crosshair: Oz,
            damage: pz,
            markers: dz
          }), (0, nz.createElement)(Fu, {
            controller: tz
          })))
        },
        onClose: () => {
          var zz, uz, bz, Ez;
          null === (zz = Fz) || void 0 === zz || zz(), null === (uz = Oz) || void 0 === uz || uz.dispose(), Oz = null, null === (bz = pz) || void 0 === bz || bz.dispose(), pz = null, null === (Ez = dz) || void 0 === Ez || Ez.dispose(), dz = null, Hz = null
        },
        onAfterRender: (zz, uz) => {
          var bz, Ez, nz, iz;
          null === (bz = Oz) || void 0 === bz || bz.frame(zz, uz.tanHalfFovY), null === (Ez = pz) || void 0 === Ez || Ez.frame(uz.cameraHeading), null === (nz = dz) || void 0 === nz || nz.frame(uz, null !== (iz = Hz) && void 0 !== iz && iz.checkValid(lz) ? Hz.Gs(lz) : null)
        },
        onReceivedMessageFromServer: (zz, uz) => {
          "frontlineHud" === zz ? Mz.WZ(uz) : "frontlineScoreboard" === zz ? Mz.receiveScoreboard(uz) : "frontlineRoundEnd" === zz ? tz.WZ(uz) : "frontlinePrefs" === zz && (Zz = uz, Rz())
        }
      }
    }
  },
  6174: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    const Ez = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function nz(zz) {
      return null === Ez ? Array.from(zz) : Array.from(Ez.segment(zz), (zz => {
        let {
          segment: uz
        } = zz;
        return uz
      }))
    }
  },
  37876: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      f: () => iz
    });
    const Ez = new WeakMap;

    function nz(zz) {
      let uz = Ez.get(zz);
      return uz || (uz = {
        hidden: zz.hidden,
        x: NaN,
        y: NaN
      }, Ez.set(zz, uz)), uz
    }

    function iz(zz, uz) {
      const bz = nz(zz);
      bz.hidden !== uz && (bz.hidden = uz, zz.hidden = uz)
    }

    function lz(zz, uz, bz) {
      const Ez = nz(zz);
      Ez.x === uz && Ez.y === bz || (Ez.x = uz, Ez.y = bz, zz.style.translate = `${uz}vw ${bz}vh`)
    }
  },
  36491: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    const Ez = {
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