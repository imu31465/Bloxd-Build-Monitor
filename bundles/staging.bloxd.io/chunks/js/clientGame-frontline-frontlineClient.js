export const id = 17;
export const ids = [17];
export const modules = {
  36140: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => nk,
      h: () => Uk,
      l: () => xk,
      p: () => Kk
    });
    var Dk = ik(33763),
      fk = ik(36143),
      Sk = ik(36151),
      bk = ik(8560),
      rk = ik(1406),
      Pk = ik(60),
      mk = ik(75),
      Mk = ik(1066);

    function Kk() {
      var kk;
      return (0, rk.e)(fk.c, (0, fk.n)()), (0, Mk.jsx)(Mk.Fragment, {
        children: null === (kk = (0, fk.n)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function xk(kk) {
      var ek;
      let {
        show: ik
      } = kk;
      (0, rk.e)(fk.c, (0, fk.n)());
      const mk = null === (ek = (0, fk.n)()) || void 0 === ek ? void 0 : ek.menu;
      return (0, Pk.useEffect)((() => {
        var kk;
        ik || (null === mk || void 0 === mk || null === (kk = mk.onClose) || void 0 === kk || kk.call(mk), (0, Sk.t)())
      }), [ik, mk]), (0, Pk.useEffect)((() => ik ? (0, bk.f)(Sk.w, Sk.g) : void 0), [ik]), (0, Mk.jsx)(Dk.d, {
        showing: ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === mk || void 0 === mk ? void 0 : mk.content
      })
    }

    function nk(kk) {
      let {
        placement: ek = "bottom"
      } = kk;
      return (0, Mk.jsx)("div", {
        id: `clientGameHud-${ek}`,
        style: {
          display: "contents"
        }
      })
    }

    function Uk(kk) {
      let {
        children: ek,
        placement: ik = "bottom"
      } = kk;
      const [Dk, fk] = (0, Pk.useState)(null);
      return (0, Pk.useEffect)((() => {
        fk(document.getElementById(`clientGameHud-${ik}`))
      }), [ik]), Dk ? (0, mk.createPortal)(ek, Dk) : null
    }
  },
  33763: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(4479),
      fk = ik(4482);

    function Sk(kk) {
      let {
        children: ek,
        showing: ik,
        globallyUniqueKey: Sk,
        alwaysMountChildren: bk = !1,
        doGameplayStartStopOnShow: rk = !0,
        keepsMovement: Pk = !1
      } = kk;
      return (0, fk.c)(!0, ik, Sk, Pk), (0, Dk.c)(rk, ik), ik || bk ? ek : null
    }
  },
  36249: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk,
      i: () => rk,
      m: () => Pk
    });
    var Dk = ik(60),
      fk = ik(3079);
    const Sk = 8,
      bk = "InGameHeaderContainer",
      rk = "TopRightElements";

    function Pk(kk) {
      const [ek] = (0, fk.c)(), [ik, Pk] = (0, Dk.useState)(!1);
      return (0, Dk.useLayoutEffect)((() => {
        if (!kk) return;
        const ek = document.querySelector(`.${bk}`),
          ik = document.querySelector(`.${rk}`),
          Dk = () => {
            const Dk = kk.getBoundingClientRect(),
              fk = ek ? ek.getBoundingClientRect().right : 0,
              bk = ik ? ik.getBoundingClientRect().left : window.innerWidth,
              rk = Dk.left < fk + Sk,
              mk = Dk.right > bk - Sk;
            Pk(rk || mk)
          };
        Dk();
        const fk = new ResizeObserver(Dk);
        return fk.observe(kk), ek && fk.observe(ek), ik && fk.observe(ik), () => {
          fk.disconnect()
        }
      }), [kk, ek]), ik
    }
  },
  36241: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk
    });
    const Dk = [{
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

    function fk(kk, ek, ik) {
      const fk = Math.abs(kk - ek),
        Sk = Date.now() - ik;
      for (const bk of Dk)
        if (kk < bk.maxDist) return fk >= bk.hardUpdateDist || Sk > bk.timeBetweenSoftChecks && fk >= bk.softUpdateDist;
      return !1
    }
  },
  8560: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    let Dk = null;
    const fk = function(kk) {
        const ek = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Dk = ek, () => {
          Dk === ek && (Dk = null)
        }
      },
      Sk = () => {
        var kk;
        return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
      }
  },
  38111: (kk, ek, ik) => {
    function Dk(kk, ek, ik) {
      var Dk;
      const {
        width: fk,
        height: Sk
      } = ik, bk = null !== (Dk = kk.text) && void 0 !== Dk ? Dk : kk, rk = (bk.x / 100 - .5) * fk, Pk = (bk.y / 100 - .5) * Sk, mk = fk / 2 - ek.x;
      if (null !== kk.text && Math.abs(rk) <= mk && Pk >= ek.top - Sk / 2 && Pk <= Sk / 2 - ek.bottom) return {
        x: bk.x,
        y: bk.y
      };
      const Mk = Math.min(0 === rk ? 1 / 0 : mk / Math.abs(rk), Pk > 0 ? (Sk / 2 - ek.bottom) / Pk : Pk < 0 ? (ek.top - Sk / 2) / Pk : 1 / 0);
      return !Number.isFinite(Mk) || Mk < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + rk * Mk / fk * 100,
        y: 50 + Pk * Mk / Sk * 100
      }
    }
    ik.d(ek, {
      c: () => Dk
    })
  },
  36151: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => Hk,
      i: () => wk,
      m: () => rk,
      p: () => xk,
      t: () => lk,
      u: () => Kk,
      v: () => yk,
      w: () => Uk,
      x: () => pk
    });
    var Dk = ik(22),
      fk = ik(26);
    const Sk = "clientGameInventoryButtonsChanged",
      bk = new Map;

    function rk() {
      return [...bk.values()].sort(((kk, ek) => {
        var ik, Dk;
        return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
      }))
    }
    let Pk = null;

    function mk(kk) {
      Pk = kk
    }
    let Mk = !1;

    function Kk(kk) {
      Mk = !0;
      try {
        kk.onClick()
      } finally {
        Mk = !1
      }
      kk.panel && "clientGame" === Dk.b.get("openInGameMenuName") && mk(kk.id)
    }

    function xk() {
      return Mk
    }

    function nk() {
      return rk().filter((kk => kk.panel && !kk.disabled))
    }

    function Uk(kk) {
      const ek = nk(),
        ik = ek.findIndex((kk => kk.id === Pk));
      return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
    }

    function Hk() {
      return null !== Pk && nk().length > 1
    }

    function wk() {
      mk(null)
    }

    function lk() {
      "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
    }

    function pk() {
      const kk = Pk;
      return mk(null), kk
    }

    function yk(kk) {
      return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
        bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
      }
    }
  },
  36143: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => wk,
      h: () => lk,
      j: () => xk,
      n: () => mk,
      r: () => Hk,
      v: () => nk,
      z: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(36151);
    const rk = "clientGameUiChanged";
    let Pk = null;

    function mk() {
      return Pk
    }

    function Mk(kk, ek) {
      const ik = {
        content: kk,
        menu: ek
      };
      return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
        Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
      }
    }
    let Kk = null;

    function xk() {
      return Kk
    }

    function nk(kk) {
      return Kk = kk, () => {
        Kk === kk && (Kk = null)
      }
    }
    let Uk = !1;

    function Hk() {
      const kk = Dk.b.get("openInGameMenuName");
      "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wk() {
      pk(!1)
    }

    function lk() {
      pk(Uk)
    }

    function pk(kk) {
      "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, bk.i)(), Uk = !1
    }
  },
  39003: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => le
    });
    const Dk = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var fk = ik(60),
      Sk = ik(36143),
      bk = ik(36630),
      rk = ik(36164),
      Pk = ik(1688),
      mk = ik(26);
    const Mk = {
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
    const Kk = 32;

    function xk(kk, ek, ik, Dk) {
      return {
        tag: "line",
        attrs: {
          x1: kk,
          y1: ek,
          x2: ik,
          y2: Dk,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function nk(kk) {
      return {
        tag: "circle",
        attrs: {
          cx: Kk,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kk,
          r: kk,
          class: "Fill"
        }
      }
    }

    function Uk(kk, ek) {
      return {
        tag: "path",
        attrs: {
          d: kk,
          "stroke-width": ek
        }
      }
    }

    function Hk(kk, ek, ik) {
      return {
        tag: "circle",
        attrs: {
          cx: Kk,
          cy: Kk,
          r: kk,
          "stroke-width": ek,
          class: ik
        }
      }
    }

    function wk(kk, ek, ik) {
      return {
        tag: "text",
        attrs: {
          x: kk,
          y: ek,
          class: "Fill Label"
        },
        text: ik
      }
    }
    const lk = {
      pistol: kk => [xk(Kk, Kk - kk - 5, Kk, Kk - kk), xk(Kk - kk - 5, Kk, Kk - kk, Kk), xk(Kk + kk, Kk, Kk + kk + 5, Kk), nk(1.4)],
      rifle: kk => [xk(Kk, Kk - kk - 8, Kk, Kk - kk), xk(Kk, Kk + kk, Kk, Kk + kk + 8), xk(Kk - kk - 8, Kk, Kk - kk, Kk), xk(Kk + kk, Kk, Kk + kk + 8, Kk), nk(1)],
      smg: kk => {
        const ek = Math.PI / 2,
          ik = [];
        for (let bk = 0; bk < 4; bk++) ik.push((fk = bk * ek + .35, Sk = (bk + 1) * ek - .35, Uk(`M${Kk+(Dk=6+kk)*Math.cos(fk)} ${Kk+Dk*Math.sin(fk)} A${Dk} ${Dk} 0 0 1 ${Kk+Dk*Math.cos(Sk)} ${Kk+Dk*Math.sin(Sk)}`, 2)));
        var Dk, fk, Sk;
        return [...ik, nk(1.4)]
      },
      shotgun: kk => [Hk(kk, 3, "Ring Outline"), Hk(kk, 1.5, "Ring")],
      marksman: kk => [Uk(`M${26-kk/2} ${39+kk/2} L32 33 L${38+kk/2} ${39+kk/2}`, 2), xk(14 - kk, Kk, 24 - kk, Kk, 1.5), xk(40 + kk, Kk, 50 + kk, Kk, 1.5), xk(14 - kk, 30, 14 - kk, 34, 1.5), xk(50 + kk, 30, 50 + kk, 34, 1.5)],
      machineGun: kk => {
        const ek = 10 + kk,
          ik = [];
        for (const [Dk, fk] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) ik.push(Uk(`M${Kk+Dk*ek} ${Kk+fk*(ek-5)} L${Kk+Dk*ek} ${Kk+fk*ek} L${Kk+Dk*(ek-5)} ${Kk+fk*ek}`, 2));
        return [...ik, xk(Kk, 28, Kk, 36, 1.5), xk(28, Kk, 36, Kk, 1.5)]
      },
      launcher: () => [xk(14, 30, 50, 30, 1.5), xk(Kk, 24, Kk, 52, 1.5), xk(28, 38, 36, 38, 1.5), xk(29, 44, 35, 44, 1.5), xk(30, 50, 34, 50, 1.5), wk(38, 40, "100"), wk(37, 46, "200"), nk(1.4, 30)],
      melee: () => [Uk("M32 26 L38 32 L32 38 L26 32 Z", 1.5), nk(1.2)],
      throwable: () => [nk(1.6)]
    };

    function pk(kk) {
      let {
        tag: ek,
        attrs: ik,
        text: Dk
      } = kk, fk = `<${ek}`;
      for (const [Sk, bk] of Object.entries(ik)) fk += ` ${Sk}="${bk}"`;
      return void 0 === Dk ? `${fk}/>` : `${fk}>${Dk}</${ek}>`
    }
    class yk {
      constructor(kk, ek) {
        this.api = kk, this.localPlayerId = ek, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = kk => {
          this.element = kk, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, kk && !this.enabled && (kk.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Pk.getRemInPx)()))
        }, this.tokens = [mk.j.subscribe("aimingOverlay", (kk => {
          this.sniperOverlay = "sniper" === kk
        })), mk.j.subscribe("mouseState", (kk => {
          let {
            isDown: ek
          } = kk;
          this.mouseDown = ek
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      bV(kk) {
        kk !== this.enabled && (this.enabled = kk, this.drawnVisible = null, kk || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(kk, ek) {
        var ik, Dk;
        if (!this.enabled) return;
        const {
          api: fk
        } = this, Sk = fk.isAlive(this.localPlayerId) && null !== (ik = null === (Dk = fk.jek(this.localPlayerId)) || void 0 === Dk ? void 0 : Dk.name) && void 0 !== ik ? ik : null, bk = (rk = Sk) && Mk[rk] || null;
        var rk;
        if (this.setOwnsCrosshair(null !== bk), !this.element) return;
        const Pk = fk.getHeldGunInaccuracy(),
          mk = null !== Pk,
          Kk = null !== bk && !this.sniperOverlay && fk.isCrosshairShown();
        if (Kk !== this.drawnVisible && (this.drawnVisible = Kk, this.element.style.display = Kk ? "block" : "none"), !Kk) return;
        const xk = mk ? function(kk) {
            return "launcher" === kk || "melee" === kk || "throwable" === kk ? "none" : "shotgun" === kk ? "cone" : "offset"
          }(bk) : "none",
          nk = null !== Pk && void 0 !== Pk ? Pk : 0;
        "cone" === xk ? this.drawCone(bk, this.coneRadiusVh(nk, ek) * this.gapPerVh, kk) : (this.coneDrawn = !1, this.draw(bk, "none" === xk ? 2 : this.offsetGap(nk)));
        const Uk = !mk && this.mouseDown;
        Uk !== this.drawnPressed && (this.drawnPressed = Uk, this.element.classList.toggle("Pressed", Uk))
      }
      dispose() {
        for (const kk of this.tokens) mk.j.unsubscribe(kk);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(kk, ek) {
        var ik, Dk;
        kk !== this.drawnFamily ? (this.drawnFamily = kk, this.drawnGap = ek, this.element.innerHTML = function(kk, ek) {
          return `<svg viewBox="0 0 64 64">${lk[kk](ek).map(pk).join("")}</svg>`
        }(kk, ek), this.shapes = Array.from(null !== (ik = null === (Dk = this.element.firstElementChild) || void 0 === Dk ? void 0 : Dk.children) && void 0 !== ik ? ik : [])) : ek !== this.drawnGap && (this.drawnGap = ek, function(kk, ek, ik) {
          const Dk = lk[ek](ik);
          for (let fk = 0; fk < Dk.length; fk++)
            for (const [ek, ik] of Object.entries(Dk[fk].attrs)) {
              const Dk = String(ik);
              kk[fk].getAttribute(ek) !== Dk && kk[fk].setAttribute(ek, Dk)
            }
        }(this.shapes, kk, ek))
      }
      drawCone(kk, ek, ik) {
        kk === this.drawnFamily && this.coneDrawn ? this.shownRadius += (ek - this.shownRadius) * (1 - Math.exp(-ik / 80)) : this.shownRadius = ek, this.coneDrawn = !0, this.draw(kk, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(kk, ek) {
        if (!(ek > 0)) return 1;
        const ik = kk * bk.j / 2;
        return Math.max(50 * Math.tan(ik) / ek, 1)
      }
      offsetGap(kk) {
        const ek = 2 + ((0, rk.d)(kk) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * ek) / 2)
      }
      setOwnsCrosshair(kk) {
        kk !== this.ownsCrosshair && (this.ownsCrosshair = kk, document.body.classList.toggle("FrontlineCustomCrosshair", kk))
      }
    }
    const Yk = "FrontlineCustomDamage",
      Lk = .45,
      Ck = .2;
    class Ak {
      constructor(kk, ek) {
        this.api = kk, this.localPlayerId = ek, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.lb = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = kk => {
          var ek, ik;
          this.clearHits(), this.root = kk, this.lowLayer = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.querySelector(".FrontlineDamageLow")) && void 0 !== ek ? ek : null, this.arcLayer = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.querySelector(".FrontlineDamageArcs")) && void 0 !== ik ? ik : null, this.showRoot(), this.drawLow()
        }, this.token = mk.j.subscribe("damagedByOtherPlayer", (kk => {
          let {
            direction: ek,
            Ub: ik
          } = kk;
          this.onHurt(ek, ik)
        })), this.syncHealth(), document.body.classList.add(Yk)
      }
      bV(kk) {
        kk !== this.enabled && (this.enabled = kk, document.body.classList.toggle(Yk, kk), kk || this.clearHits(), this.showRoot())
      }
      frame(kk) {
        this.syncHealth(), this.cameraHeading = kk;
        for (const ek of this.arcs) this.drawArcAngle(ek)
      }
      dispose() {
        mk.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Yk)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const kk = this.api.getClientOption(this.localPlayerId, "_health"),
          ek = this.api.getClientOption(this.localPlayerId, "_shield"),
          ik = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(kk, this.readHealth) && Object.is(ek, this.readShield) && Object.is(ik, this.readMaxHealth)) return;
        if (this.readHealth = kk, this.readShield = ek, this.readMaxHealth = ik, null === kk || void 0 === kk || !ik) return this.lastHealthPool = null, this.maxHealth = null, this.lb = 1, this.dead = !1, void this.drawLow();
        const Dk = kk + (null !== ek && void 0 !== ek ? ek : 0);
        if (null !== this.lastHealthPool && Dk < this.lastHealthPool) {
          const kk = performance.now(),
            ek = (this.lastHealthPool - Dk) / ik;
          this.lastDrop = kk - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + ek,
            at: this.lastDrop.at
          } : {
            frac: ek,
            at: kk
          }
        }
        this.dead = kk <= 0, this.dead && this.clearHits(), this.lastHealthPool = Dk, this.maxHealth = ik, this.lb = kk > 0 ? kk / ik : 1, this.drawLow()
      }
      onHurt(kk, ek) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const ik = Math.min(1, this.takeDamageFrac(ek) / .3);
        null !== kk && this.showArc(kk, ik), this.flashEdge(null === kk ? null : kk - this.cameraHeading, .4 + .6 * ik)
      }
      takeDamageFrac(kk) {
        if (void 0 !== kk && this.maxHealth) return kk / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: ek
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, ek
      }
      drawLow() {
        if (!this.lowLayer) return;
        const kk = sk((Lk - this.lb) / .25),
          ek = sk((Ck - this.lb) / .15000000000000002),
          ik = this.lb < Lk;
        this.lowLayer.classList.toggle("Active", ik), this.lowLayer.classList.toggle("Critical", this.lb < Ck), this.lowLayer.style.opacity = String(ik ? .55 + .3 * kk + .15 * ek : 0)
      }
      showArc(kk, ek) {
        var ik, Dk;
        if (!this.arcLayer) return;
        let fk = this.arcs.find((ek => jk(ek.direction, kk) < .6));
        if (!fk) {
          const ek = document.createElement("div");
          ek.className = "FrontlineDamageArc", ek.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(ek), fk = {
            element: ek,
            direction: kk,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(fk)
        }
        fk.direction = kk, this.drawArcAngle(fk);
        const Sk = fk.fade ? Number(getComputedStyle(fk.element).opacity) : 0;
        null === (ik = fk.fade) || void 0 === ik || ik.cancel(), null === (Dk = fk.pop) || void 0 === Dk || Dk.cancel(), fk.element.style.opacity = "1";
        const bk = fk.element.animate([{
          opacity: Sk
        }, {
          opacity: 1
        }], 144);
        fk.fade = bk, fk.pop = fk.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * ek
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const rk = fk;
        bk.onfinish = () => {
          if (rk.fade !== bk) return;
          const kk = rk.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          kk.startTime = bk.startTime, rk.fade = kk, kk.onfinish = () => {
            rk.fade === kk && (rk.element.remove(), dk(this.arcs, rk))
          }
        }
      }
      drawArcAngle(kk) {
        const ek = kk.direction - this.cameraHeading;
        (null === kk.drawnAngle || Math.abs(ek - kk.drawnAngle) > .005) && (kk.drawnAngle = ek, kk.element.style.rotate = `${ek}rad`)
      }
      flashEdge(kk, ek) {
        var ik, Dk, fk;
        if (!this.root) return;
        let Sk = this.flashes.find((ek => null === ek.angle || null === kk ? ek.angle === kk : jk(ek.angle, kk) < .5));
        if (!Sk) {
          const ek = document.createElement("div");
          ek.className = "FrontlineDamageFlash";
          const ik = ek.appendChild(document.createElement("div"));
          ik.className = "FrontlineDamageFlashGlow", this.root.insertBefore(ek, this.arcLayer), Sk = {
            element: ek,
            glow: ik,
            angle: kk,
            level: 0,
            animation: null
          }, this.flashes.push(Sk)
        }
        const bk = null === (ik = Sk.animation) || void 0 === ik || null === (Dk = ik.effect) || void 0 === Dk ? void 0 : Dk.getComputedTiming().progress,
          rk = null === bk || void 0 === bk ? 0 : Sk.level * (1 - bk);
        Sk.level = Math.min(1, Math.max(ek, rk + .6 * ek)), Sk.angle = kk;
        const {
          x: Pk,
          y: mk,
          rx: Mk,
          ry: Kk
        } = function(kk, ek) {
          const ik = window.innerWidth,
            Dk = window.innerHeight;
          if (null === kk) return {
            x: ik / 2,
            y: Dk / 2,
            rx: 0,
            ry: 0
          };
          const fk = Math.sin(kk),
            Sk = -Math.cos(kk),
            bk = ik / 2 / Math.max(1e-6, Math.abs(fk)),
            rk = Dk / 2 / Math.max(1e-6, Math.abs(Sk)),
            Pk = Math.min(bk, rk),
            mk = Math.round(ik / 2 + fk * Pk),
            Mk = Math.round(Dk / 2 + Sk * Pk),
            Kk = Dk / 100 * (.85 + .25 * ek),
            xk = bk <= rk,
            nk = Math.round((xk ? 30 : 74) * Kk),
            Uk = Math.round((xk ? 58 : 26) * Kk);
          return {
            x: mk,
            y: Mk,
            rx: nk,
            ry: Uk
          }
        }(kk, Sk.level), {
          style: xk
        } = Sk.glow;
        Sk.glow.classList.toggle("Everywhere", null === kk), xk.setProperty("--glowX", `${Pk}px`), xk.setProperty("--glowY", `${mk}px`), xk.setProperty("--glowRx", `${Mk}px`), xk.setProperty("--glowRy", `${Kk}px`), Sk.element.style.transformOrigin = `${Pk}px ${mk}px`, null === (fk = Sk.animation) || void 0 === fk || fk.cancel();
        const nk = Sk.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Sk.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Sk.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Sk.level
        });
        Sk.animation = nk;
        const Uk = Sk;
        nk.onfinish = () => {
          Uk.animation === nk && (Uk.element.remove(), dk(this.flashes, Uk))
        }
      }
      clearHits() {
        for (const Dk of this.arcs) {
          var kk, ek;
          null === (kk = Dk.fade) || void 0 === kk || kk.cancel(), Dk.fade = null, null === (ek = Dk.pop) || void 0 === ek || ek.cancel(), Dk.element.remove()
        }
        this.arcs.length = 0;
        for (const Dk of this.flashes) {
          var ik;
          null === (ik = Dk.animation) || void 0 === ik || ik.cancel(), Dk.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function jk(kk, ek) {
      return Math.abs(Math.atan2(Math.sin(kk - ek), Math.cos(kk - ek)))
    }

    function sk(kk) {
      return Math.max(0, Math.min(1, kk))
    }

    function dk(kk, ek) {
      const ik = kk.indexOf(ek); - 1 !== ik && kk.splice(ik, 1)
    }
    var Vk = ik(1021),
      Fk = ik.n(Vk),
      uk = ik(36140),
      qk = ik(36249),
      Ik = ik(1172),
      zk = ik(1406);
    const Qk = "frontlineHudChanged",
      vk = "frontlineScoreboardChanged";
    class Ek {
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
      BU(kk) {
        this.wire = kk, mk.j.tm(Qk, kk, !0)
      }
      receiveScoreboard(kk) {
        let ek = "scoreboard" === kk[0] ? performance.now() + kk[5] : 0;
        const ik = this.scoreboard.endsAt;
        0 !== ek && 0 !== ik && Math.abs(ek - ik) < 1e3 && (ek = ik), this.scoreboard = {
          wire: kk,
          endsAt: ek
        }, mk.j.tm(vk, this.scoreboard, !0)
      }
    }
    var hk = ik(1066);
    const ak = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Wk(kk) {
      const [ek, ik] = (0, fk.useState)((() => (kk - performance.now()) / 1e3));
      return (0, fk.useEffect)((() => {
        if (0 === kk) return;
        const ek = () => {
          ik((kk - performance.now()) / 1e3)
        };
        ek();
        const Dk = window.setInterval(ek, 250);
        return () => {
          window.clearInterval(Dk)
        }
      }), [kk]), ek
    }

    function tk(kk) {
      let {
        className: ek,
        point: ik
      } = kk;
      const [Dk, fk, Sk, bk, rk, Pk] = ik;
      return (0, hk.jsxs)("div", {
        className: Fk()(ek, `Owner-${fk||"None"}`, `Leader-${bk||"None"}`, {
          Contested: rk,
          Here: Pk
        }),
        children: [(0, hk.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Dk
        }), (0, hk.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Sk}%`
          }
        })]
      })
    }
    const Xk = (0, fk.memo)((function(kk) {
        let {
          points: ek,
          markers: ik
        } = kk;
        const {
          t: Dk
        } = (0, Ik.D)();
        return ek ? (0, hk.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: ek.map((kk => {
            const [ek, , , , , , , fk] = kk;
            return (0, hk.jsxs)("div", {
              ref: ik.bindMarker(ek),
              className: "FrontlinePointMarker",
              children: [(0, hk.jsx)(tk, {
                className: "FrontlinePointMarkerTile",
                point: kk
              }), (0, hk.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [fk && (0, hk.jsx)("span", {
                  className: Fk()("FrontlinePointMarkerHomeTurf", `Team-${fk}`),
                  children: Dk("frontlineHud:homeTurf", {
                    team: Dk(ak[fk])
                  })
                }), (0, hk.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, ek)
          }))
        }) : null
      })),
      Bk = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      ck = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Tk(kk) {
      let {
        hud: ek,
        crosshair: ik,
        damage: Dk,
        markers: fk
      } = kk;
      const Sk = (0, zk.e)(Qk, ek.getWire()),
        bk = (0, zk.e)(vk, ek.getScoreboard());
      return (0, hk.jsxs)(hk.Fragment, {
        children: [(0, hk.jsx)(Zk, {
          damage: Dk
        }), (0, hk.jsx)(Xk, {
          points: "scoreboard" === bk.wire[0] ? bk.wire[6] : null,
          markers: fk
        }), (0, hk.jsx)(gk, {
          view: bk
        }), (0, hk.jsx)("div", {
          className: "FrontlineReticle",
          ref: ik.bindElement
        }), (0, hk.jsx)(uk.h, {
          children: (0, hk.jsx)(Ok, {
            wire: Sk
          })
        })]
      })
    }
    const Zk = (0, fk.memo)((function(kk) {
        let {
          damage: ek
        } = kk;
        return (0, hk.jsxs)("div", {
          className: "FrontlineDamage",
          ref: ek.bindElement,
          children: [(0, hk.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, hk.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, hk.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Ok = (0, fk.memo)((function(kk) {
        let {
          wire: ek
        } = kk;
        const {
          t: ik
        } = (0, Ik.D)();
        if ("capture" === ek[0]) {
          const [, kk, Dk, fk, Sk, bk, rk] = ek, Pk = Math.round(fk / 100 * 24);
          return (0, hk.jsxs)("div", {
            className: Fk()("FrontlinePlate", `Status-${Dk}`, `Leader-${Sk||"None"}`),
            children: [(0, hk.jsx)(Jk, {}), (0, hk.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, hk.jsx)("span", {
                className: "FrontlineObjective",
                children: kk
              }), (0, hk.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, hk.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: ik("frontlineHud:objective", {
                    point: kk,
                    friendly: bk,
                    enemy: rk
                  })
                }), (0, hk.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: ik(Bk[Dk])
                })]
              }), (0, hk.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(fk).padStart(3, "0"), (0, hk.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, hk.jsx)(Nk, {
              segments: 24,
              lit: Pk
            })]
          })
        }
        if ("alert" === ek[0]) {
          const [, kk, Dk, fk] = ek;
          return (0, hk.jsxs)("div", {
            className: Fk()("FrontlinePlate", "FrontlineAlert", `Tone-${fk}`),
            children: [(0, hk.jsx)(Jk, {}), (0, hk.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ik(ck[kk])
            }), (0, hk.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Dk
            })]
          })
        }
        return null
      })),
      gk = (0, fk.memo)((function(kk) {
        let {
          view: ek
        } = kk;
        const {
          t: ik
        } = (0, Ik.D)(), Dk = (0, fk.useRef)(null), Sk = function(kk, ek) {
          const [ik, Dk] = (0, fk.useState)(!1);
          return (0, fk.useLayoutEffect)((() => {
            const ek = kk.current;
            if (!ek) return;
            const ik = document.querySelector(`.${qk.f}`),
              fk = document.querySelector(`.${qk.i}`),
              Sk = () => {
                var kk;
                const Sk = ek.querySelector(".FrontlineTeamTrack"),
                  bk = (0, Pk.getRemInPx)(),
                  rk = ek.getBoundingClientRect().width - 2 * (null !== (kk = null === Sk || void 0 === Sk ? void 0 : Sk.getBoundingClientRect().width) && void 0 !== kk ? kk : 0),
                  mk = window.innerWidth / 2,
                  Mk = ik ? ik.getBoundingClientRect().right : 0,
                  Kk = fk ? fk.getBoundingClientRect().left : window.innerWidth,
                  xk = Math.min(mk - Mk, Kk - mk) - qk.c - rk / 2,
                  nk = xk < 6 * bk,
                  Uk = nk ? (window.innerWidth - rk) / 2 - qk.c : xk;
                ek.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Uk,14*bk)))}px`), Dk(nk)
              };
            Sk();
            const bk = new ResizeObserver(Sk);
            for (const kk of [ek, ik, fk]) kk && bk.observe(kk);
            return window.addEventListener("resize", Sk), () => {
              bk.disconnect(), window.removeEventListener("resize", Sk)
            }
          }), [kk, ek]), ik
        }(Dk, "scoreboard" === ek.wire[0]);
        if ("scoreboard" !== ek.wire[0]) return null;
        const [, bk, rk, mk, Mk, , Kk] = ek.wire, xk = "Red" === bk ? "Blue" : "Red";
        return (0, hk.jsxs)("div", {
          className: Fk()("FrontlineScoreboardContainer", {
            Below: Sk
          }),
          children: [(0, hk.jsxs)("div", {
            ref: Dk,
            className: "FrontlineScoreboard",
            children: [(0, hk.jsx)(Jk, {}), (0, hk.jsx)(Gk, {
              team: bk,
              tickets: rk,
              goal: Mk,
              side: "Friendly"
            }), (0, hk.jsx)("div", {
              className: "FrontlinePoints",
              children: Kk.map((kk => (0, hk.jsx)(tk, {
                className: "FrontlinePoint",
                point: kk
              }, kk[0])))
            }), (0, hk.jsx)(Gk, {
              team: xk,
              tickets: mk,
              goal: Mk,
              side: "Enemy"
            })]
          }), (0, hk.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, hk.jsx)(Rk, {
              endsAt: ek.endsAt
            }), (0, hk.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ik("frontlineHud:ticketGoal", {
                goal: Mk
              })
            })]
          })]
        })
      }));

    function Gk(kk) {
      let {
        team: ek,
        tickets: ik,
        goal: Dk,
        side: fk
      } = kk;
      const {
        t: Sk
      } = (0, Ik.D)(), bk = String(ik).padStart(3, "0"), rk = bk.search(/[1-9]/), Pk = -1 === rk ? bk : bk.slice(0, rk), mk = Math.min(20, Math.floor(ik / Dk * 20));
      return (0, hk.jsxs)("div", {
        className: Fk()("FrontlineTeamScore", fk, `Team-${ek}`),
        children: [(0, hk.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, hk.jsx)("span", {
            className: "Lead",
            children: Pk
          }), -1 !== rk && bk.slice(rk)]
        }), (0, hk.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, hk.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Sk(ak[ek])
          }), (0, hk.jsx)(Nk, {
            segments: 20,
            lit: mk
          })]
        })]
      })
    }

    function Nk(kk) {
      let {
        segments: ek,
        lit: ik
      } = kk;
      return (0, hk.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: ek
        }, ((kk, ek) => (0, hk.jsx)("i", {
          className: Fk()({
            Lit: ek < ik
          })
        }, ek)))
      })
    }

    function Rk(kk) {
      let {
        endsAt: ek
      } = kk;
      const ik = Math.max(0, Math.ceil(Wk(ek)));
      return (0, hk.jsxs)("div", {
        className: Fk()("FrontlineClock", {
          Urgent: ik <= 60
        }),
        children: [Math.floor(ik / 60), ":", String(ik % 60).padStart(2, "0")]
      })
    }

    function Jk() {
      return (0, hk.jsxs)(hk.Fragment, {
        children: [(0, hk.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, hk.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var ke = ik(36241),
      ee = ik(1223),
      ie = ik(38081),
      De = ik(38111);
    class fe {
      constructor(kk) {
        var ek;
        this.hud = kk, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.aU = !1, this.Ay = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Ay), null === (ek = window.visualViewport) || void 0 === ek || ek.addEventListener("resize", this.Ay)
      }
      bindMarker(kk) {
        let ek = this.refs.get(kk);
        return ek || (ek = ek => {
          var ik;
          null === (ik = this.markers.get(kk)) || void 0 === ik || ik.stopObserving(), this.markers.delete(kk), ek && !this.aU && this.markers.set(kk, this.mount(ek))
        }, this.refs.set(kk, ek)), ek
      }
      frame(kk, ek) {
        this.render = kk;
        const ik = this.hud.getScoreboard().wire;
        if ("scoreboard" === ik[0] && 0 !== this.markers.size)
          for (const [Dk, , , , , , fk] of ik[6]) {
            const kk = this.markers.get(Dk);
            kk && fk && (kk.target ??= [0, 0, 0], kk.target[0] = fk[0], kk.target[1] = fk[1] + 2.5, kk.target[2] = fk[2], this.place(kk), this.RS(kk, ek && Math.hypot(fk[0] - ek[0], fk[1] - ek[1], fk[2] - ek[2])))
          }
      }
      dispose() {
        var kk;
        this.aU = !0, window.removeEventListener("resize", this.Ay), null === (kk = window.visualViewport) || void 0 === kk || kk.removeEventListener("resize", this.Ay);
        for (const ek of this.markers.values()) ek.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(kk) {
        const {
          render: ek,
          viewport: ik
        } = this;
        if (!ek || !kk.target) return;
        const Dk = (50 - ek.screenBandPct.y) / 100 * ik.height,
          fk = {
            x: kk.halfSize.width + 8,
            top: kk.halfSize.height + 8,
            bottom: kk.halfSize.height + kk.labelsBelow + Dk
          },
          Sk = ek.projectWorldPosToViewport(kk.target),
          bk = null !== Sk && void 0 !== Sk ? Sk : ek.projectWorldPosToScreenPos(kk.target),
          rk = (0, De.c)({
            x: bk.x,
            y: bk.y,
            text: Sk
          }, fk, ik);
        (0, ie.c)(kk.root, Math.round(100 * rk.x) / 100, Math.round(100 * rk.y) / 100)
      }
      RS(kk, ek) {
        if (null === ek) return void(null !== kk.metres && (kk.metres = null, kk.distance.textContent = ""));
        const ik = Date.now();
        (null === kk.metres || (0, ke.d)(ek, kk.metres, kk.metresShownAt)) && (kk.metres = Math.round(ek), kk.metresShownAt = ik, kk.distance.textContent = (0, Ik.x)(ee.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(kk.metres)
        }))
      }
      mount(kk) {
        const ek = {
            root: kk,
            distance: kk.querySelector(".FrontlinePointMarkerDistance"),
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
          ik = kk.querySelector(".FrontlinePointMarkerLabels"),
          Dk = new ResizeObserver((() => {
            ek.halfSize = {
              width: Math.max(kk.offsetWidth, ik.offsetWidth) / 2,
              height: kk.offsetHeight / 2
            }, ek.labelsBelow = ik.offsetTop + ik.offsetHeight - kk.offsetHeight, this.place(ek)
          }));
        return Dk.observe(kk, {
          box: "border-box"
        }), Dk.observe(ik, {
          box: "border-box"
        }), ek.stopObserving = () => {
          Dk.disconnect()
        }, ek
      }
    }
    var Se = ik(6298),
      be = ik(2567);
    const re = "frontlineRoundEndChanged";
    class Pe {
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
      BU(kk) {
        const ek = "roundEnd" === kk[0] ? performance.now() + kk[5] : 0;
        this.view = {
          wire: kk,
          key: this.view.key + 1,
          endsAt: ek
        }, mk.j.tm(re, this.view, !0)
      }
    }
    const me = (0, fk.lazy)((() => (0, be.e)(ik.e(201).then((() => ik(41334))), (kk => kk.FrontlineMvpLineup)))),
      Me = [4800, 4e3, 3200],
      Ke = [1, 0, 2],
      xe = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      ne = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Ue(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zk.e)(re, ek.getView()),
        Dk = Wk(ik.endsAt);
      return "roundEnd" !== ik.wire[0] || 1e3 * Dk < -2e3 ? null : (0, hk.jsx)(He, {
        wire: ik.wire,
        secondsLeft: Math.max(0, Math.ceil(Dk))
      }, ik.key)
    }
    const He = (0, fk.memo)((function(kk) {
      let {
        wire: ek,
        secondsLeft: ik
      } = kk;
      const {
        t: Sk
      } = (0, Ik.D)(), [, bk, rk, Pk, mk, , Mk, Kk] = ek, xk = (0, fk.useMemo)((() => Ke.filter((kk => kk < Kk.length))), [Kk]), nk = (0, fk.useMemo)((() => xk.map((kk => {
        const [, , , , , ek, ik] = Kk[kk];
        return {
          cosmetics: Dk.map(((kk, ik) => [kk, ek[ik]])),
          size: 0 === kk ? 1.15 : .85,
          heldGun: {
            name: ik,
            aimed: 0 === kk
          },
          showAfterMs: Me[kk]
        }
      }))), [Kk, xk]);
      return (0, hk.jsxs)("div", {
        className: Fk()("FrontlineRoundEnd", `Result-${bk}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, hk.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, hk.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, hk.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, hk.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, hk.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Uk = Sk(xe[bk]), /\p{Script=Arabic}/u.test(Uk) ? [Uk] : (0, Se.b)(Uk)).map(((kk, ek) => (0, hk.jsx)("span", {
              style: {
                "--letter": ek
              },
              children: kk
            }, ek)))]
          }), (0, hk.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [rk && "victory" === bk && (0, hk.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Sk("frontlineRoundEnd:comeback")
            }), (0, hk.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, hk.jsx)("b", {
                className: "Friendly",
                children: Pk
              }), " \u2013 ", (0, hk.jsx)("b", {
                className: "Enemy",
                children: mk
              })]
            })]
          })]
        }), xk.length > 0 && (0, hk.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": xk.length
          },
          children: [(0, hk.jsx)(fk.Suspense, {
            fallback: null,
            children: (0, hk.jsx)(me, {
              className: "FrontlineRoundEndLineup",
              players: nk
            })
          }), xk.map((kk => (0, hk.jsx)(we, {
            mvp: Kk[kk],
            place: kk
          }, kk)))]
        }), (0, hk.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Sk("frontlineRoundEnd:nextFront", {
            map: Mk,
            seconds: String(ik)
          })
        })]
      });
      var Uk
    }));

    function we(kk) {
      let {
        mvp: ek,
        place: ik
      } = kk;
      const {
        t: Dk
      } = (0, Ik.D)(), [fk, Sk, bk, rk, Pk] = ek, [mk, Mk] = Dk(function(kk, ek) {
        return 1 === ek && "damage" !== kk ? `frontlineRoundEnd:${kk}One` : `frontlineRoundEnd:${kk}`
      }(bk, rk), {
        name: "\0",
        count: rk.toLocaleString()
      }).split("\0");
      return (0, hk.jsxs)("div", {
        className: Fk()("FrontlineMvpCard", `Place-${ik+1}`, `Team-${Sk}`),
        style: {
          "--revealMs": `${Me[ik]}ms`
        },
        children: [(0, hk.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, hk.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, hk.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Dk(ne[ik])
        }), (0, hk.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [mk, (0, hk.jsx)("span", {
            className: "FrontlineMvpName",
            children: fk
          }), Mk]
        }), (0, hk.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Pk
        })]
      })
    }
    const le = function(kk, ek, ik, Dk) {
      let {
        localPlayerId: bk
      } = Dk;
      const rk = new Ek,
        Pk = new Pe;
      let mk = null,
        Mk = null,
        Kk = null,
        xk = null,
        nk = null,
        Uk = [!1, !1];
      const Hk = () => {
        var kk, ek;
        const [ik, Dk] = Uk;
        null === (kk = Mk) || void 0 === kk || kk.bV(!ik), null === (ek = Kk) || void 0 === ek || ek.bV(!Dk)
      };
      return {
        onCreate: kk => {
          mk = kk, Mk = new yk(kk, bk), Kk = new Ak(kk, bk), xk = new fe(rk), Hk(), nk = (0, Sk.z)((0, fk.createElement)(fk.Fragment, null, (0, fk.createElement)(Tk, {
            hud: rk,
            crosshair: Mk,
            damage: Kk,
            markers: xk
          }), (0, fk.createElement)(Ue, {
            controller: Pk
          })))
        },
        onClose: () => {
          var kk, ek, ik, Dk;
          null === (kk = nk) || void 0 === kk || kk(), null === (ek = Mk) || void 0 === ek || ek.dispose(), Mk = null, null === (ik = Kk) || void 0 === ik || ik.dispose(), Kk = null, null === (Dk = xk) || void 0 === Dk || Dk.dispose(), xk = null, mk = null
        },
        onAfterRender: (kk, ek) => {
          var ik, Dk, fk, Sk;
          null === (ik = Mk) || void 0 === ik || ik.frame(kk, ek.tanHalfFovY), null === (Dk = Kk) || void 0 === Dk || Dk.frame(ek.cameraHeading), null === (fk = xk) || void 0 === fk || fk.frame(ek, null !== (Sk = mk) && void 0 !== Sk && Sk.checkValid(bk) ? mk.vy(bk) : null)
        },
        onReceivedMessageFromServer: (kk, ek) => {
          "frontlineHud" === kk ? rk.BU(ek) : "frontlineScoreboard" === kk ? rk.receiveScoreboard(ek) : "frontlineRoundEnd" === kk ? Pk.BU(ek) : "frontlinePrefs" === kk && (Uk = ek, Hk())
        }
      }
    }
  },
  6298: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    const Dk = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function fk(kk) {
      return null === Dk ? Array.from(kk) : Array.from(Dk.segment(kk), (kk => {
        let {
          segment: ek
        } = kk;
        return ek
      }))
    }
  },
  38081: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      g: () => Sk
    });
    const Dk = new WeakMap;

    function fk(kk) {
      let ek = Dk.get(kk);
      return ek || (ek = {
        hidden: kk.hidden,
        x: NaN,
        y: NaN
      }, Dk.set(kk, ek)), ek
    }

    function Sk(kk, ek) {
      const ik = fk(kk);
      ik.hidden !== ek && (ik.hidden = ek, kk.hidden = ek)
    }

    function bk(kk, ek, ik) {
      const Dk = fk(kk);
      Dk.x === ek && Dk.y === ik || (Dk.x = ek, Dk.y = ik, kk.style.translate = `${ek}vw ${ik}vh`)
    }
  },
  36668: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    const Dk = {
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
for (const kk in modules) Object.freeze(modules[kk]);