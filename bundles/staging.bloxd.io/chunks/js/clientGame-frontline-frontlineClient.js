export const id = 17;
export const ids = [17];
export const modules = {
  36597: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => jk,
      f: () => ek,
      g: () => Zk,
      j: () => tk
    });
    var Xk = Ik(34164),
      Tk = Ik(36600),
      ik = Ik(36607),
      yk = Ik(8691),
      lk = Ik(1402),
      ak = Ik(58),
      qk = Ik(74),
      Lk = Ik(1096);

    function tk() {
      var kk;
      return (0, lk.f)(Tk.c, (0, Tk.m)()), (0, Lk.jsx)(Lk.Fragment, {
        children: null === (kk = (0, Tk.m)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Zk(kk) {
      var Fk;
      let {
        show: Ik
      } = kk;
      (0, lk.f)(Tk.c, (0, Tk.m)());
      const qk = null === (Fk = (0, Tk.m)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, ak.useEffect)((() => {
        var kk;
        Ik || (null === qk || void 0 === qk || null === (kk = qk.onClose) || void 0 === kk || kk.call(qk), (0, ik.r)())
      }), [Ik, qk]), (0, ak.useEffect)((() => Ik ? (0, yk.f)(ik.y, ik.i) : void 0), [Ik]), (0, Lk.jsx)(Xk.e, {
        showing: Ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === qk || void 0 === qk ? void 0 : qk.content
      })
    }

    function jk(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, Lk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Ik = "bottom"
      } = kk;
      const [Xk, Tk] = (0, ak.useState)(null);
      return (0, ak.useEffect)((() => {
        Tk(document.getElementById(`clientGameHud-${Ik}`))
      }), [Ik]), Xk ? (0, qk.createPortal)(Fk, Xk) : null
    }
  },
  34164: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(4525),
      Tk = Ik(4529);

    function ik(kk) {
      let {
        children: Fk,
        showing: Ik,
        globallyUniqueKey: ik,
        alwaysMountChildren: yk = !1,
        doGameplayStartStopOnShow: lk = !0,
        keepsMovement: ak = !1
      } = kk;
      return (0, Tk.e)(!0, Ik, ik, ak), (0, Xk.b)(lk, Ik), Ik || yk ? Fk : null
    }
  },
  36691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      g: () => yk,
      k: () => lk,
      m: () => ak
    });
    var Xk = Ik(58),
      Tk = Ik(3042);
    const ik = 8,
      yk = "InGameHeaderContainer",
      lk = "TopRightElements";

    function ak(kk) {
      const [Fk] = (0, Tk.c)(), [Ik, ak] = (0, Xk.useState)(!1);
      return (0, Xk.useLayoutEffect)((() => {
        if (!kk) return;
        const Fk = document.querySelector(`.${yk}`),
          Ik = document.querySelector(`.${lk}`),
          Xk = () => {
            const Xk = kk.getBoundingClientRect(),
              Tk = Fk ? Fk.getBoundingClientRect().right : 0,
              yk = Ik ? Ik.getBoundingClientRect().left : window.innerWidth,
              lk = Xk.left < Tk + ik,
              qk = Xk.right > yk - ik;
            ak(lk || qk)
          };
        Xk();
        const Tk = new ResizeObserver(Xk);
        return Tk.observe(kk), Fk && Tk.observe(Fk), Ik && Tk.observe(Ik), () => {
          Tk.disconnect()
        }
      }), [kk, Fk]), Ik
    }
  },
  36682: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    const Xk = [{
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

    function Tk(kk, Fk, Ik) {
      const Tk = Math.abs(kk - Fk),
        ik = Date.now() - Ik;
      for (const yk of Xk)
        if (kk < yk.maxDist) return Tk >= yk.hardUpdateDist || ik > yk.timeBetweenSoftChecks && Tk >= yk.softUpdateDist;
      return !1
    }
  },
  8691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      f: () => Tk
    });
    let Xk = null;
    const Tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Xk = Fk, () => {
          Xk === Fk && (Xk = null)
        }
      },
      ik = () => {
        var kk;
        return null !== (kk = Xk) && void 0 !== kk && kk.canCycle() ? Xk.cycle : null
      }
  },
  38534: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik) {
      var Xk;
      const {
        width: Tk,
        height: ik
      } = Ik, yk = null !== (Xk = kk.text) && void 0 !== Xk ? Xk : kk, lk = (yk.x / 100 - .5) * Tk, ak = (yk.y / 100 - .5) * ik, qk = Tk / 2 - Fk.x;
      if (null !== kk.text && Math.abs(lk) <= qk && ak >= Fk.top - ik / 2 && ak <= ik / 2 - Fk.bottom) return {
        x: yk.x,
        y: yk.y
      };
      const Lk = Math.min(0 === lk ? 1 / 0 : qk / Math.abs(lk), ak > 0 ? (ik / 2 - Fk.bottom) / ak : ak < 0 ? (Fk.top - ik / 2) / ak : 1 / 0);
      return !Number.isFinite(Lk) || Lk < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + lk * Lk / Tk * 100,
        y: 50 + ak * Lk / ik * 100
      }
    }
    Ik.d(Fk, {
      c: () => Xk
    })
  },
  36607: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => xk,
      e: () => ik,
      i: () => wk,
      k: () => Hk,
      o: () => lk,
      q: () => Zk,
      r: () => Jk,
      v: () => tk,
      x: () => Pk,
      y: () => ek
    });
    var Xk = Ik(25),
      Tk = Ik(34);
    const ik = "clientGameInventoryButtonsChanged",
      yk = new Map;

    function lk() {
      return [...yk.values()].sort(((kk, Fk) => {
        var Ik, Xk;
        return (null !== (Ik = kk.order) && void 0 !== Ik ? Ik : 0) - (null !== (Xk = Fk.order) && void 0 !== Xk ? Xk : 0)
      }))
    }
    let ak = null;

    function qk(kk) {
      ak = kk
    }
    let Lk = !1;

    function tk(kk) {
      Lk = !0;
      try {
        kk.onClick()
      } finally {
        Lk = !1
      }
      kk.panel && "clientGame" === Xk.d.get("openInGameMenuName") && qk(kk.id)
    }

    function Zk() {
      return Lk
    }

    function jk() {
      return lk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = jk(),
        Ik = Fk.findIndex((kk => kk.id === ak));
      return !(Ik < 0 || Fk.length < 2) && (tk(Fk[(Ik + kk + Fk.length) % Fk.length]), !0)
    }

    function wk() {
      return null !== ak && jk().length > 1
    }

    function Hk() {
      qk(null)
    }

    function Jk() {
      "inventory" !== Xk.d.get("openInGameMenuName") && qk(null)
    }

    function xk() {
      const kk = ak;
      return qk(null), kk
    }

    function Pk(kk) {
      return yk.set(kk.id, kk), Tk.g.GL(ik, lk(), !0), () => {
        yk.get(kk.id) === kk && (yk.delete(kk.id), Tk.g.GL(ik, lk()))
      }
    }
  },
  36600: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      e: () => Hk,
      f: () => Jk,
      j: () => Zk,
      m: () => qk,
      p: () => wk,
      r: () => jk,
      v: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(36607);
    const lk = "clientGameUiChanged";
    let ak = null;

    function qk() {
      return ak
    }

    function Lk(kk, Fk) {
      const Ik = {
        content: kk,
        menu: Fk
      };
      return ak = Ik, Tk.g.GL(lk, ak, !0), () => {
        ak === Ik && (ak = null, ek = !1, Hk(), Tk.g.GL(lk, null))
      }
    }
    let tk = null;

    function Zk() {
      return tk
    }

    function jk(kk) {
      return tk = kk, () => {
        tk === kk && (tk = null)
      }
    }
    let ek = !1;

    function wk() {
      const kk = Xk.d.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, yk.q)() || (0, yk.k)(), (0, ik.m)(ik.c), Xk.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Hk() {
      xk(!1)
    }

    function Jk() {
      xk(ek)
    }

    function xk(kk) {
      "clientGame" === Xk.d.get("openInGameMenuName") && Xk.d.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, yk.k)(), ek = !1
    }
  },
  39445: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => JF
    });
    const Xk = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Tk = Ik(58),
      ik = Ik(36600),
      yk = Ik(37079),
      lk = Ik(36618),
      ak = Ik(1665),
      qk = Ik(34);
    const Lk = {
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
    const tk = 32;

    function Zk(kk, Fk, Ik, Xk) {
      return {
        tag: "line",
        attrs: {
          x1: kk,
          y1: Fk,
          x2: Ik,
          y2: Xk,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function jk(kk) {
      return {
        tag: "circle",
        attrs: {
          cx: tk,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk,
          r: kk,
          class: "Fill"
        }
      }
    }

    function ek(kk, Fk) {
      return {
        tag: "path",
        attrs: {
          d: kk,
          "stroke-width": Fk
        }
      }
    }

    function wk(kk, Fk, Ik) {
      return {
        tag: "circle",
        attrs: {
          cx: tk,
          cy: tk,
          r: kk,
          "stroke-width": Fk,
          class: Ik
        }
      }
    }

    function Hk(kk, Fk, Ik) {
      return {
        tag: "text",
        attrs: {
          x: kk,
          y: Fk,
          class: "Fill Label"
        },
        text: Ik
      }
    }
    const Jk = {
      pistol: kk => [Zk(tk, tk - kk - 5, tk, tk - kk), Zk(tk - kk - 5, tk, tk - kk, tk), Zk(tk + kk, tk, tk + kk + 5, tk), jk(1.4)],
      rifle: kk => [Zk(tk, tk - kk - 8, tk, tk - kk), Zk(tk, tk + kk, tk, tk + kk + 8), Zk(tk - kk - 8, tk, tk - kk, tk), Zk(tk + kk, tk, tk + kk + 8, tk), jk(1)],
      smg: kk => {
        const Fk = Math.PI / 2,
          Ik = [];
        for (let yk = 0; yk < 4; yk++) Ik.push((Tk = yk * Fk + .35, ik = (yk + 1) * Fk - .35, ek(`M${tk+(Xk=6+kk)*Math.cos(Tk)} ${tk+Xk*Math.sin(Tk)} A${Xk} ${Xk} 0 0 1 ${tk+Xk*Math.cos(ik)} ${tk+Xk*Math.sin(ik)}`, 2)));
        var Xk, Tk, ik;
        return [...Ik, jk(1.4)]
      },
      shotgun: kk => [wk(kk, 3, "Ring Outline"), wk(kk, 1.5, "Ring")],
      marksman: kk => [ek(`M${26-kk/2} ${39+kk/2} L32 33 L${38+kk/2} ${39+kk/2}`, 2), Zk(14 - kk, tk, 24 - kk, tk, 1.5), Zk(40 + kk, tk, 50 + kk, tk, 1.5), Zk(14 - kk, 30, 14 - kk, 34, 1.5), Zk(50 + kk, 30, 50 + kk, 34, 1.5)],
      machineGun: kk => {
        const Fk = 10 + kk,
          Ik = [];
        for (const [Xk, Tk] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Ik.push(ek(`M${tk+Xk*Fk} ${tk+Tk*(Fk-5)} L${tk+Xk*Fk} ${tk+Tk*Fk} L${tk+Xk*(Fk-5)} ${tk+Tk*Fk}`, 2));
        return [...Ik, Zk(tk, 28, tk, 36, 1.5), Zk(28, tk, 36, tk, 1.5)]
      },
      launcher: () => [Zk(14, 30, 50, 30, 1.5), Zk(tk, 24, tk, 52, 1.5), Zk(28, 38, 36, 38, 1.5), Zk(29, 44, 35, 44, 1.5), Zk(30, 50, 34, 50, 1.5), Hk(38, 40, "100"), Hk(37, 46, "200"), jk(1.4, 30)],
      melee: () => [ek("M32 26 L38 32 L32 38 L26 32 Z", 1.5), jk(1.2)],
      throwable: () => [jk(1.6)]
    };

    function xk(kk) {
      let {
        tag: Fk,
        attrs: Ik,
        text: Xk
      } = kk, Tk = `<${Fk}`;
      for (const [ik, yk] of Object.entries(Ik)) Tk += ` ${ik}="${yk}"`;
      return void 0 === Xk ? `${Tk}/>` : `${Tk}>${Xk}</${Fk}>`
    }
    class Pk {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = kk => {
          this.element = kk, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, kk && !this.enabled && (kk.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, ak.getRemInPx)()))
        }, this.tokens = [qk.g.subscribe("aimingOverlay", (kk => {
          this.sniperOverlay = "sniper" === kk
        })), qk.g.subscribe("mouseState", (kk => {
          let {
            isDown: Fk
          } = kk;
          this.mouseDown = Fk
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Av(kk) {
        kk !== this.enabled && (this.enabled = kk, this.drawnVisible = null, kk || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(kk, Fk) {
        var Ik, Xk;
        if (!this.enabled) return;
        const {
          api: Tk
        } = this, ik = Tk.isAlive(this.localPlayerId) && null !== (Ik = null === (Xk = Tk.BFk(this.localPlayerId)) || void 0 === Xk ? void 0 : Xk.name) && void 0 !== Ik ? Ik : null, yk = (lk = ik) && Lk[lk] || null;
        var lk;
        if (this.setOwnsCrosshair(null !== yk), !this.element) return;
        const ak = Tk.getHeldGunInaccuracy(),
          qk = null !== ak,
          tk = null !== yk && !this.sniperOverlay && Tk.isCrosshairShown();
        if (tk !== this.drawnVisible && (this.drawnVisible = tk, this.element.style.display = tk ? "block" : "none"), !tk) return;
        const Zk = qk ? function(kk) {
            return "launcher" === kk || "melee" === kk || "throwable" === kk ? "none" : "shotgun" === kk ? "cone" : "offset"
          }(yk) : "none",
          jk = null !== ak && void 0 !== ak ? ak : 0;
        "cone" === Zk ? this.drawCone(yk, this.coneRadiusVh(jk, Fk) * this.gapPerVh, kk) : (this.coneDrawn = !1, this.draw(yk, "none" === Zk ? 2 : this.offsetGap(jk)));
        const ek = !qk && this.mouseDown;
        ek !== this.drawnPressed && (this.drawnPressed = ek, this.element.classList.toggle("Pressed", ek))
      }
      dispose() {
        for (const kk of this.tokens) qk.g.unsubscribe(kk);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(kk, Fk) {
        var Ik, Xk;
        kk !== this.drawnFamily ? (this.drawnFamily = kk, this.drawnGap = Fk, this.element.innerHTML = function(kk, Fk) {
          return `<svg viewBox="0 0 64 64">${Jk[kk](Fk).map(xk).join("")}</svg>`
        }(kk, Fk), this.shapes = Array.from(null !== (Ik = null === (Xk = this.element.firstElementChild) || void 0 === Xk ? void 0 : Xk.children) && void 0 !== Ik ? Ik : [])) : Fk !== this.drawnGap && (this.drawnGap = Fk, function(kk, Fk, Ik) {
          const Xk = Jk[Fk](Ik);
          for (let Tk = 0; Tk < Xk.length; Tk++)
            for (const [Fk, Ik] of Object.entries(Xk[Tk].attrs)) {
              const Xk = String(Ik);
              kk[Tk].getAttribute(Fk) !== Xk && kk[Tk].setAttribute(Fk, Xk)
            }
        }(this.shapes, kk, Fk))
      }
      drawCone(kk, Fk, Ik) {
        kk === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Fk - this.shownRadius) * (1 - Math.exp(-Ik / 80)) : this.shownRadius = Fk, this.coneDrawn = !0, this.draw(kk, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(kk, Fk) {
        if (!(Fk > 0)) return 1;
        const Ik = kk * yk.e / 2;
        return Math.max(50 * Math.tan(Ik) / Fk, 1)
      }
      offsetGap(kk) {
        const Fk = 2 + ((0, lk.h)(kk) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Fk) / 2)
      }
      setOwnsCrosshair(kk) {
        kk !== this.ownsCrosshair && (this.ownsCrosshair = kk, document.body.classList.toggle("FrontlineCustomCrosshair", kk))
      }
    }
    const Kk = "FrontlineCustomDamage",
      Qk = .45,
      sk = .2;
    class Vk {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Ri = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = kk => {
          var Fk, Ik;
          this.clearHits(), this.root = kk, this.lowLayer = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.querySelector(".FrontlineDamageLow")) && void 0 !== Fk ? Fk : null, this.arcLayer = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.querySelector(".FrontlineDamageArcs")) && void 0 !== Ik ? Ik : null, this.showRoot(), this.drawLow()
        }, this.token = qk.g.subscribe("damagedByOtherPlayer", (kk => {
          let {
            direction: Fk,
            ui: Ik
          } = kk;
          this.onHurt(Fk, Ik)
        })), this.syncHealth(), document.body.classList.add(Kk)
      }
      Av(kk) {
        kk !== this.enabled && (this.enabled = kk, document.body.classList.toggle(Kk, kk), kk || this.clearHits(), this.showRoot())
      }
      frame(kk) {
        this.syncHealth(), this.cameraHeading = kk;
        for (const Fk of this.arcs) this.drawArcAngle(Fk)
      }
      dispose() {
        qk.g.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Kk)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const kk = this.api.getClientOption(this.localPlayerId, "_health"),
          Fk = this.api.getClientOption(this.localPlayerId, "_shield"),
          Ik = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(kk, this.readHealth) && Object.is(Fk, this.readShield) && Object.is(Ik, this.readMaxHealth)) return;
        if (this.readHealth = kk, this.readShield = Fk, this.readMaxHealth = Ik, null === kk || void 0 === kk || !Ik) return this.lastHealthPool = null, this.maxHealth = null, this.Ri = 1, this.dead = !1, void this.drawLow();
        const Xk = kk + (null !== Fk && void 0 !== Fk ? Fk : 0);
        if (null !== this.lastHealthPool && Xk < this.lastHealthPool) {
          const kk = performance.now(),
            Fk = (this.lastHealthPool - Xk) / Ik;
          this.lastDrop = kk - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Fk,
            at: this.lastDrop.at
          } : {
            frac: Fk,
            at: kk
          }
        }
        this.dead = kk <= 0, this.dead && this.clearHits(), this.lastHealthPool = Xk, this.maxHealth = Ik, this.Ri = kk > 0 ? kk / Ik : 1, this.drawLow()
      }
      onHurt(kk, Fk) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Ik = Math.min(1, this.takeDamageFrac(Fk) / .3);
        null !== kk && this.showArc(kk, Ik), this.flashEdge(null === kk ? null : kk - this.cameraHeading, .4 + .6 * Ik)
      }
      takeDamageFrac(kk) {
        if (void 0 !== kk && this.maxHealth) return kk / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Fk
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Fk
      }
      drawLow() {
        if (!this.lowLayer) return;
        const kk = Sk((Qk - this.Ri) / .25),
          Fk = Sk((sk - this.Ri) / .15000000000000002),
          Ik = this.Ri < Qk;
        this.lowLayer.classList.toggle("Active", Ik), this.lowLayer.classList.toggle("Critical", this.Ri < sk), this.lowLayer.style.opacity = String(Ik ? .55 + .3 * kk + .15 * Fk : 0)
      }
      showArc(kk, Fk) {
        var Ik, Xk;
        if (!this.arcLayer) return;
        let Tk = this.arcs.find((Fk => zk(Fk.direction, kk) < .6));
        if (!Tk) {
          const Fk = document.createElement("div");
          Fk.className = "FrontlineDamageArc", Fk.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(Fk), Tk = {
            element: Fk,
            direction: kk,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Tk)
        }
        Tk.direction = kk, this.drawArcAngle(Tk);
        const ik = Tk.fade ? Number(getComputedStyle(Tk.element).opacity) : 0;
        null === (Ik = Tk.fade) || void 0 === Ik || Ik.cancel(), null === (Xk = Tk.pop) || void 0 === Xk || Xk.cancel(), Tk.element.style.opacity = "1";
        const yk = Tk.element.animate([{
          opacity: ik
        }, {
          opacity: 1
        }], 144);
        Tk.fade = yk, Tk.pop = Tk.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Fk
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const lk = Tk;
        yk.onfinish = () => {
          if (lk.fade !== yk) return;
          const kk = lk.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          kk.startTime = yk.startTime, lk.fade = kk, kk.onfinish = () => {
            lk.fade === kk && (lk.element.remove(), vk(this.arcs, lk))
          }
        }
      }
      drawArcAngle(kk) {
        const Fk = kk.direction - this.cameraHeading;
        (null === kk.drawnAngle || Math.abs(Fk - kk.drawnAngle) > .005) && (kk.drawnAngle = Fk, kk.element.style.rotate = `${Fk}rad`)
      }
      flashEdge(kk, Fk) {
        var Ik, Xk, Tk;
        if (!this.root) return;
        let ik = this.flashes.find((Fk => null === Fk.angle || null === kk ? Fk.angle === kk : zk(Fk.angle, kk) < .5));
        if (!ik) {
          const Fk = document.createElement("div");
          Fk.className = "FrontlineDamageFlash";
          const Ik = Fk.appendChild(document.createElement("div"));
          Ik.className = "FrontlineDamageFlashGlow", this.root.insertBefore(Fk, this.arcLayer), ik = {
            element: Fk,
            glow: Ik,
            angle: kk,
            level: 0,
            animation: null
          }, this.flashes.push(ik)
        }
        const yk = null === (Ik = ik.animation) || void 0 === Ik || null === (Xk = Ik.effect) || void 0 === Xk ? void 0 : Xk.getComputedTiming().progress,
          lk = null === yk || void 0 === yk ? 0 : ik.level * (1 - yk);
        ik.level = Math.min(1, Math.max(Fk, lk + .6 * Fk)), ik.angle = kk;
        const {
          x: ak,
          y: qk,
          rx: Lk,
          ry: tk
        } = function(kk, Fk) {
          const Ik = window.innerWidth,
            Xk = window.innerHeight;
          if (null === kk) return {
            x: Ik / 2,
            y: Xk / 2,
            rx: 0,
            ry: 0
          };
          const Tk = Math.sin(kk),
            ik = -Math.cos(kk),
            yk = Ik / 2 / Math.max(1e-6, Math.abs(Tk)),
            lk = Xk / 2 / Math.max(1e-6, Math.abs(ik)),
            ak = Math.min(yk, lk),
            qk = Math.round(Ik / 2 + Tk * ak),
            Lk = Math.round(Xk / 2 + ik * ak),
            tk = Xk / 100 * (.85 + .25 * Fk),
            Zk = yk <= lk,
            jk = Math.round((Zk ? 30 : 74) * tk),
            ek = Math.round((Zk ? 58 : 26) * tk);
          return {
            x: qk,
            y: Lk,
            rx: jk,
            ry: ek
          }
        }(kk, ik.level), {
          style: Zk
        } = ik.glow;
        ik.glow.classList.toggle("Everywhere", null === kk), Zk.setProperty("--glowX", `${ak}px`), Zk.setProperty("--glowY", `${qk}px`), Zk.setProperty("--glowRx", `${Lk}px`), Zk.setProperty("--glowRy", `${tk}px`), ik.element.style.transformOrigin = `${ak}px ${qk}px`, null === (Tk = ik.animation) || void 0 === Tk || Tk.cancel();
        const jk = ik.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: ik.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * ik.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * ik.level
        });
        ik.animation = jk;
        const ek = ik;
        jk.onfinish = () => {
          ek.animation === jk && (ek.element.remove(), vk(this.flashes, ek))
        }
      }
      clearHits() {
        for (const Xk of this.arcs) {
          var kk, Fk;
          null === (kk = Xk.fade) || void 0 === kk || kk.cancel(), Xk.fade = null, null === (Fk = Xk.pop) || void 0 === Fk || Fk.cancel(), Xk.element.remove()
        }
        this.arcs.length = 0;
        for (const Xk of this.flashes) {
          var Ik;
          null === (Ik = Xk.animation) || void 0 === Ik || Ik.cancel(), Xk.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function zk(kk, Fk) {
      return Math.abs(Math.atan2(Math.sin(kk - Fk), Math.cos(kk - Fk)))
    }

    function Sk(kk) {
      return Math.max(0, Math.min(1, kk))
    }

    function vk(kk, Fk) {
      const Ik = kk.indexOf(Fk); - 1 !== Ik && kk.splice(Ik, 1)
    }
    var Ek = Ik(1055),
      Ok = Ik.n(Ek),
      nk = Ik(36597),
      Gk = Ik(36691),
      pk = Ik(1179),
      uk = Ik(1402);
    const bk = "frontlineHudChanged",
      Rk = "frontlineScoreboardChanged";
    class Uk {
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
      Pe(kk) {
        this.wire = kk, qk.g.GL(bk, kk, !0)
      }
      receiveScoreboard(kk) {
        let Fk = "scoreboard" === kk[0] ? performance.now() + kk[5] : 0;
        const Ik = this.scoreboard.endsAt;
        0 !== Fk && 0 !== Ik && Math.abs(Fk - Ik) < 1e3 && (Fk = Ik), this.scoreboard = {
          wire: kk,
          endsAt: Fk
        }, qk.g.GL(Rk, this.scoreboard, !0)
      }
    }
    var Ck = Ik(1096);
    const Nk = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function ck(kk) {
      const [Fk, Ik] = (0, Tk.useState)((() => (kk - performance.now()) / 1e3));
      return (0, Tk.useEffect)((() => {
        if (0 === kk) return;
        const Fk = () => {
          Ik((kk - performance.now()) / 1e3)
        };
        Fk();
        const Xk = window.setInterval(Fk, 250);
        return () => {
          window.clearInterval(Xk)
        }
      }), [kk]), Fk
    }

    function Wk(kk) {
      let {
        className: Fk,
        point: Ik
      } = kk;
      const [Xk, Tk, ik, yk, lk, ak] = Ik;
      return (0, Ck.jsxs)("div", {
        className: Ok()(Fk, `Owner-${Tk||"None"}`, `Leader-${yk||"None"}`, {
          Contested: lk,
          Here: ak
        }),
        children: [(0, Ck.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Xk
        }), (0, Ck.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${ik}%`
          }
        })]
      })
    }
    const fk = (0, Tk.memo)((function(kk) {
        let {
          points: Fk,
          markers: Ik
        } = kk;
        const {
          t: Xk
        } = (0, pk.y)();
        return Fk ? (0, Ck.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Fk.map((kk => {
            const [Fk, , , , , , , Tk] = kk;
            return (0, Ck.jsxs)("div", {
              ref: Ik.bindMarker(Fk),
              className: "FrontlinePointMarker",
              children: [(0, Ck.jsx)(Wk, {
                className: "FrontlinePointMarkerTile",
                point: kk
              }), (0, Ck.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Tk && (0, Ck.jsx)("span", {
                  className: Ok()("FrontlinePointMarkerHomeTurf", `Team-${Tk}`),
                  children: Xk("frontlineHud:homeTurf", {
                    team: Xk(Nk[Tk])
                  })
                }), (0, Ck.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Fk)
          }))
        }) : null
      })),
      Bk = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      dk = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Yk(kk) {
      let {
        hud: Fk,
        crosshair: Ik,
        damage: Xk,
        markers: Tk
      } = kk;
      const ik = (0, uk.f)(bk, Fk.getWire()),
        yk = (0, uk.f)(Rk, Fk.getScoreboard());
      return (0, Ck.jsxs)(Ck.Fragment, {
        children: [(0, Ck.jsx)(Ak, {
          damage: Xk
        }), (0, Ck.jsx)(fk, {
          points: "scoreboard" === yk.wire[0] ? yk.wire[6] : null,
          markers: Tk
        }), (0, Ck.jsx)(mk, {
          view: yk
        }), (0, Ck.jsx)("div", {
          className: "FrontlineReticle",
          ref: Ik.bindElement
        }), (0, Ck.jsx)(nk.f, {
          children: (0, Ck.jsx)(gk, {
            wire: ik
          })
        })]
      })
    }
    const Ak = (0, Tk.memo)((function(kk) {
        let {
          damage: Fk
        } = kk;
        return (0, Ck.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Fk.bindElement,
          children: [(0, Ck.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Ck.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Ck.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      gk = (0, Tk.memo)((function(kk) {
        let {
          wire: Fk
        } = kk;
        const {
          t: Ik
        } = (0, pk.y)();
        if ("capture" === Fk[0]) {
          const [, kk, Xk, Tk, ik, yk, lk] = Fk, ak = Math.round(Tk / 100 * 24);
          return (0, Ck.jsxs)("div", {
            className: Ok()("FrontlinePlate", `Status-${Xk}`, `Leader-${ik||"None"}`),
            children: [(0, Ck.jsx)(Mk, {}), (0, Ck.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Ck.jsx)("span", {
                className: "FrontlineObjective",
                children: kk
              }), (0, Ck.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Ck.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Ik("frontlineHud:objective", {
                    point: kk,
                    friendly: yk,
                    enemy: lk
                  })
                }), (0, Ck.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Ik(Bk[Xk])
                })]
              }), (0, Ck.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Tk).padStart(3, "0"), (0, Ck.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Ck.jsx)(rk, {
              segments: 24,
              lit: ak
            })]
          })
        }
        if ("alert" === Fk[0]) {
          const [, kk, Xk, Tk] = Fk;
          return (0, Ck.jsxs)("div", {
            className: Ok()("FrontlinePlate", "FrontlineAlert", `Tone-${Tk}`),
            children: [(0, Ck.jsx)(Mk, {}), (0, Ck.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Ik(dk[kk])
            }), (0, Ck.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Xk
            })]
          })
        }
        return null
      })),
      mk = (0, Tk.memo)((function(kk) {
        let {
          view: Fk
        } = kk;
        const {
          t: Ik
        } = (0, pk.y)(), Xk = (0, Tk.useRef)(null), ik = function(kk, Fk) {
          const [Ik, Xk] = (0, Tk.useState)(!1);
          return (0, Tk.useLayoutEffect)((() => {
            const Fk = kk.current;
            if (!Fk) return;
            const Ik = document.querySelector(`.${Gk.g}`),
              Tk = document.querySelector(`.${Gk.k}`),
              ik = () => {
                var kk;
                const ik = Fk.querySelector(".FrontlineTeamTrack"),
                  yk = (0, ak.getRemInPx)(),
                  lk = Fk.getBoundingClientRect().width - 2 * (null !== (kk = null === ik || void 0 === ik ? void 0 : ik.getBoundingClientRect().width) && void 0 !== kk ? kk : 0),
                  qk = window.innerWidth / 2,
                  Lk = Ik ? Ik.getBoundingClientRect().right : 0,
                  tk = Tk ? Tk.getBoundingClientRect().left : window.innerWidth,
                  Zk = Math.min(qk - Lk, tk - qk) - Gk.d - lk / 2,
                  jk = Zk < 6 * yk,
                  ek = jk ? (window.innerWidth - lk) / 2 - Gk.d : Zk;
                Fk.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(ek,14*yk)))}px`), Xk(jk)
              };
            ik();
            const yk = new ResizeObserver(ik);
            for (const kk of [Fk, Ik, Tk]) kk && yk.observe(kk);
            return window.addEventListener("resize", ik), () => {
              yk.disconnect(), window.removeEventListener("resize", ik)
            }
          }), [kk, Fk]), Ik
        }(Xk, "scoreboard" === Fk.wire[0]);
        if ("scoreboard" !== Fk.wire[0]) return null;
        const [, yk, lk, qk, Lk, , tk] = Fk.wire, Zk = "Red" === yk ? "Blue" : "Red";
        return (0, Ck.jsxs)("div", {
          className: Ok()("FrontlineScoreboardContainer", {
            Below: ik
          }),
          children: [(0, Ck.jsxs)("div", {
            ref: Xk,
            className: "FrontlineScoreboard",
            children: [(0, Ck.jsx)(Mk, {}), (0, Ck.jsx)(hk, {
              team: yk,
              tickets: lk,
              goal: Lk,
              side: "Friendly"
            }), (0, Ck.jsx)("div", {
              className: "FrontlinePoints",
              children: tk.map((kk => (0, Ck.jsx)(Wk, {
                className: "FrontlinePoint",
                point: kk
              }, kk[0])))
            }), (0, Ck.jsx)(hk, {
              team: Zk,
              tickets: qk,
              goal: Lk,
              side: "Enemy"
            })]
          }), (0, Ck.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Ck.jsx)(Dk, {
              endsAt: Fk.endsAt
            }), (0, Ck.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Ik("frontlineHud:ticketGoal", {
                goal: Lk
              })
            })]
          })]
        })
      }));

    function hk(kk) {
      let {
        team: Fk,
        tickets: Ik,
        goal: Xk,
        side: Tk
      } = kk;
      const {
        t: ik
      } = (0, pk.y)(), yk = String(Ik).padStart(3, "0"), lk = yk.search(/[1-9]/), ak = -1 === lk ? yk : yk.slice(0, lk), qk = Math.min(20, Math.floor(Ik / Xk * 20));
      return (0, Ck.jsxs)("div", {
        className: Ok()("FrontlineTeamScore", Tk, `Team-${Fk}`),
        children: [(0, Ck.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Ck.jsx)("span", {
            className: "Lead",
            children: ak
          }), -1 !== lk && yk.slice(lk)]
        }), (0, Ck.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Ck.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: ik(Nk[Fk])
          }), (0, Ck.jsx)(rk, {
            segments: 20,
            lit: qk
          })]
        })]
      })
    }

    function rk(kk) {
      let {
        segments: Fk,
        lit: Ik
      } = kk;
      return (0, Ck.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Fk
        }, ((kk, Fk) => (0, Ck.jsx)("i", {
          className: Ok()({
            Lit: Fk < Ik
          })
        }, Fk)))
      })
    }

    function Dk(kk) {
      let {
        endsAt: Fk
      } = kk;
      const Ik = Math.max(0, Math.ceil(ck(Fk)));
      return (0, Ck.jsxs)("div", {
        className: Ok()("FrontlineClock", {
          Urgent: Ik <= 60
        }),
        children: [Math.floor(Ik / 60), ":", String(Ik % 60).padStart(2, "0")]
      })
    }

    function Mk() {
      return (0, Ck.jsxs)(Ck.Fragment, {
        children: [(0, Ck.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ck.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var kF = Ik(36682),
      FF = Ik(1241),
      IF = Ik(38490),
      XF = Ik(38534);
    class TF {
      constructor(kk) {
        var Fk;
        this.hud = kk, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.ee = !1, this.PJ = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.PJ), null === (Fk = window.visualViewport) || void 0 === Fk || Fk.addEventListener("resize", this.PJ)
      }
      bindMarker(kk) {
        let Fk = this.refs.get(kk);
        return Fk || (Fk = Fk => {
          var Ik;
          null === (Ik = this.markers.get(kk)) || void 0 === Ik || Ik.stopObserving(), this.markers.delete(kk), Fk && !this.ee && this.markers.set(kk, this.mount(Fk))
        }, this.refs.set(kk, Fk)), Fk
      }
      frame(kk, Fk) {
        this.render = kk;
        const Ik = this.hud.getScoreboard().wire;
        if ("scoreboard" === Ik[0] && 0 !== this.markers.size)
          for (const [Xk, , , , , , Tk] of Ik[6]) {
            const kk = this.markers.get(Xk);
            kk && Tk && (kk.target ??= [0, 0, 0], kk.target[0] = Tk[0], kk.target[1] = Tk[1] + 2.5, kk.target[2] = Tk[2], this.place(kk), this.eX(kk, Fk && Math.hypot(Tk[0] - Fk[0], Tk[1] - Fk[1], Tk[2] - Fk[2])))
          }
      }
      dispose() {
        var kk;
        this.ee = !0, window.removeEventListener("resize", this.PJ), null === (kk = window.visualViewport) || void 0 === kk || kk.removeEventListener("resize", this.PJ);
        for (const Fk of this.markers.values()) Fk.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(kk) {
        const {
          render: Fk,
          viewport: Ik
        } = this;
        if (!Fk || !kk.target) return;
        const Xk = (50 - Fk.screenBandPct.y) / 100 * Ik.height,
          Tk = {
            x: kk.halfSize.width + 8,
            top: kk.halfSize.height + 8,
            bottom: kk.halfSize.height + kk.labelsBelow + Xk
          },
          ik = Fk.projectWorldPosToViewport(kk.target),
          yk = null !== ik && void 0 !== ik ? ik : Fk.projectWorldPosToScreenPos(kk.target),
          lk = (0, XF.c)({
            x: yk.x,
            y: yk.y,
            text: ik
          }, Tk, Ik);
        (0, IF.b)(kk.root, Math.round(100 * lk.x) / 100, Math.round(100 * lk.y) / 100)
      }
      eX(kk, Fk) {
        if (null === Fk) return void(null !== kk.metres && (kk.metres = null, kk.distance.textContent = ""));
        const Ik = Date.now();
        (null === kk.metres || (0, kF.b)(Fk, kk.metres, kk.metresShownAt)) && (kk.metres = Math.round(Fk), kk.metresShownAt = Ik, kk.distance.textContent = (0, pk.w)(FF.d.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(kk.metres)
        }))
      }
      mount(kk) {
        const Fk = {
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
          Ik = kk.querySelector(".FrontlinePointMarkerLabels"),
          Xk = new ResizeObserver((() => {
            Fk.halfSize = {
              width: Math.max(kk.offsetWidth, Ik.offsetWidth) / 2,
              height: kk.offsetHeight / 2
            }, Fk.labelsBelow = Ik.offsetTop + Ik.offsetHeight - kk.offsetHeight, this.place(Fk)
          }));
        return Xk.observe(kk, {
          box: "border-box"
        }), Xk.observe(Ik, {
          box: "border-box"
        }), Fk.stopObserving = () => {
          Xk.disconnect()
        }, Fk
      }
    }
    var iF = Ik(6449),
      yF = Ik(2546);
    const lF = "frontlineRoundEndChanged";
    class aF {
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
      Pe(kk) {
        const Fk = "roundEnd" === kk[0] ? performance.now() + kk[5] : 0;
        this.view = {
          wire: kk,
          key: this.view.key + 1,
          endsAt: Fk
        }, qk.g.GL(lF, this.view, !0)
      }
    }
    const qF = (0, Tk.lazy)((() => (0, yF.e)(Ik.e(199).then((() => Ik(41748))), (kk => kk.FrontlineMvpLineup)))),
      LF = [4800, 4e3, 3200],
      tF = [1, 0, 2],
      ZF = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      jF = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function eF(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, uk.f)(lF, Fk.getView()),
        Xk = ck(Ik.endsAt);
      return "roundEnd" !== Ik.wire[0] || 1e3 * Xk < -2e3 ? null : (0, Ck.jsx)(wF, {
        wire: Ik.wire,
        secondsLeft: Math.max(0, Math.ceil(Xk))
      }, Ik.key)
    }
    const wF = (0, Tk.memo)((function(kk) {
      let {
        wire: Fk,
        secondsLeft: Ik
      } = kk;
      const {
        t: ik
      } = (0, pk.y)(), [, yk, lk, ak, qk, , Lk, tk] = Fk, Zk = (0, Tk.useMemo)((() => tF.filter((kk => kk < tk.length))), [tk]), jk = (0, Tk.useMemo)((() => Zk.map((kk => {
        const [, , , , , Fk, Ik] = tk[kk];
        return {
          cosmetics: Xk.map(((kk, Ik) => [kk, Fk[Ik]])),
          size: 0 === kk ? 1.15 : .85,
          heldGun: {
            name: Ik,
            aimed: 0 === kk
          },
          showAfterMs: LF[kk]
        }
      }))), [tk, Zk]);
      return (0, Ck.jsxs)("div", {
        className: Ok()("FrontlineRoundEnd", `Result-${yk}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Ck.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Ck.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Ck.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Ck.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Ck.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (ek = ik(ZF[yk]), /\p{Script=Arabic}/u.test(ek) ? [ek] : (0, iF.c)(ek)).map(((kk, Fk) => (0, Ck.jsx)("span", {
              style: {
                "--letter": Fk
              },
              children: kk
            }, Fk)))]
          }), (0, Ck.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [lk && "victory" === yk && (0, Ck.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: ik("frontlineRoundEnd:comeback")
            }), (0, Ck.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Ck.jsx)("b", {
                className: "Friendly",
                children: ak
              }), " \u2013 ", (0, Ck.jsx)("b", {
                className: "Enemy",
                children: qk
              })]
            })]
          })]
        }), Zk.length > 0 && (0, Ck.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Zk.length
          },
          children: [(0, Ck.jsx)(Tk.Suspense, {
            fallback: null,
            children: (0, Ck.jsx)(qF, {
              className: "FrontlineRoundEndLineup",
              players: jk
            })
          }), Zk.map((kk => (0, Ck.jsx)(HF, {
            mvp: tk[kk],
            place: kk
          }, kk)))]
        }), (0, Ck.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: ik("frontlineRoundEnd:nextFront", {
            map: Lk,
            seconds: String(Ik)
          })
        })]
      });
      var ek
    }));

    function HF(kk) {
      let {
        mvp: Fk,
        place: Ik
      } = kk;
      const {
        t: Xk
      } = (0, pk.y)(), [Tk, ik, yk, lk, ak] = Fk, [qk, Lk] = Xk(function(kk, Fk) {
        return 1 === Fk && "damage" !== kk ? `frontlineRoundEnd:${kk}One` : `frontlineRoundEnd:${kk}`
      }(yk, lk), {
        name: "\0",
        count: lk.toLocaleString()
      }).split("\0");
      return (0, Ck.jsxs)("div", {
        className: Ok()("FrontlineMvpCard", `Place-${Ik+1}`, `Team-${ik}`),
        style: {
          "--revealMs": `${LF[Ik]}ms`
        },
        children: [(0, Ck.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ck.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Ck.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Xk(jF[Ik])
        }), (0, Ck.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [qk, (0, Ck.jsx)("span", {
            className: "FrontlineMvpName",
            children: Tk
          }), Lk]
        }), (0, Ck.jsx)("div", {
          className: "FrontlineMvpKit",
          children: ak
        })]
      })
    }
    const JF = function(kk, Fk, Ik, Xk) {
      let {
        localPlayerId: yk
      } = Xk;
      const lk = new Uk,
        ak = new aF;
      let qk = null,
        Lk = null,
        tk = null,
        Zk = null,
        jk = null,
        ek = [!1, !1];
      const wk = () => {
        var kk, Fk;
        const [Ik, Xk] = ek;
        null === (kk = Lk) || void 0 === kk || kk.Av(!Ik), null === (Fk = tk) || void 0 === Fk || Fk.Av(!Xk)
      };
      return {
        onCreate: kk => {
          qk = kk, Lk = new Pk(kk, yk), tk = new Vk(kk, yk), Zk = new TF(lk), wk(), jk = (0, ik.v)((0, Tk.createElement)(Tk.Fragment, null, (0, Tk.createElement)(Yk, {
            hud: lk,
            crosshair: Lk,
            damage: tk,
            markers: Zk
          }), (0, Tk.createElement)(eF, {
            controller: ak
          })))
        },
        onClose: () => {
          var kk, Fk, Ik, Xk;
          null === (kk = jk) || void 0 === kk || kk(), null === (Fk = Lk) || void 0 === Fk || Fk.dispose(), Lk = null, null === (Ik = tk) || void 0 === Ik || Ik.dispose(), tk = null, null === (Xk = Zk) || void 0 === Xk || Xk.dispose(), Zk = null, qk = null
        },
        onAfterRender: (kk, Fk) => {
          var Ik, Xk, Tk, ik;
          null === (Ik = Lk) || void 0 === Ik || Ik.frame(kk, Fk.tanHalfFovY), null === (Xk = tk) || void 0 === Xk || Xk.frame(Fk.cameraHeading), null === (Tk = Zk) || void 0 === Tk || Tk.frame(Fk, null !== (ik = qk) && void 0 !== ik && ik.checkValid(yk) ? qk.OJ(yk) : null)
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "frontlineHud" === kk ? lk.Pe(Fk) : "frontlineScoreboard" === kk ? lk.receiveScoreboard(Fk) : "frontlineRoundEnd" === kk ? ak.Pe(Fk) : "frontlinePrefs" === kk && (ek = Fk, wk())
        }
      }
    }
  },
  6449: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    const Xk = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Tk(kk) {
      return null === Xk ? Array.from(kk) : Array.from(Xk.segment(kk), (kk => {
        let {
          segment: Fk
        } = kk;
        return Fk
      }))
    }
  },
  38490: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      c: () => ik
    });
    const Xk = new WeakMap;

    function Tk(kk) {
      let Fk = Xk.get(kk);
      return Fk || (Fk = {
        hidden: kk.hidden,
        x: NaN,
        y: NaN
      }, Xk.set(kk, Fk)), Fk
    }

    function ik(kk, Fk) {
      const Ik = Tk(kk);
      Ik.hidden !== Fk && (Ik.hidden = Fk, kk.hidden = Fk)
    }

    function yk(kk, Fk, Ik) {
      const Xk = Tk(kk);
      Xk.x === Fk && Xk.y === Ik || (Xk.x = Fk, Xk.y = Ik, kk.style.translate = `${Fk}vw ${Ik}vh`)
    }
  },
  37118: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    const Xk = {
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