export const id = 17;
export const ids = [17];
export const modules = {
  36329: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => ek,
      j: () => Jk,
      n: () => Vk
    });
    var Rk = Bk(9004),
      tk = Bk(36332),
      ak = Bk(36340),
      Xk = Bk(8372),
      bk = Bk(1387),
      wk = Bk(61),
      dk = Bk(67),
      sk = Bk(1069);

    function Vk() {
      var kk;
      return (0, bk.g)(tk.c, (0, tk.o)()), (0, sk.jsx)(sk.Fragment, {
        children: null === (kk = (0, tk.o)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Jk(kk) {
      var Fk;
      let {
        show: Bk
      } = kk;
      (0, bk.g)(tk.c, (0, tk.o)());
      const dk = null === (Fk = (0, tk.o)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, wk.useEffect)((() => {
        var kk;
        Bk || (null === dk || void 0 === dk || null === (kk = dk.onClose) || void 0 === kk || kk.call(dk), (0, ak.u)())
      }), [Bk, dk]), (0, wk.useEffect)((() => Bk ? (0, Xk.h)(ak.C, ak.h) : void 0), [Bk]), (0, sk.jsx)(Rk.d, {
        showing: Bk,
        globallyUniqueKey: "clientGameMenu",
        children: null === dk || void 0 === dk ? void 0 : dk.content
      })
    }

    function Ak(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, sk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Bk = "bottom"
      } = kk;
      const [Rk, tk] = (0, wk.useState)(null);
      return (0, wk.useEffect)((() => {
        tk(document.getElementById(`clientGameHud-${Bk}`))
      }), [Bk]), Rk ? (0, dk.createPortal)(Fk, Rk) : null
    }
  },
  9004: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(4277),
      tk = Bk(4283);

    function ak(kk) {
      let {
        children: Fk,
        showing: Bk,
        globallyUniqueKey: ak,
        alwaysMountChildren: Xk = !1,
        doGameplayStartStopOnShow: bk = !0,
        keepsMovement: wk = !1
      } = kk;
      return (0, tk.d)(!0, Bk, ak, wk), (0, Rk.e)(bk, Bk), Bk || Xk ? Fk : null
    }
  },
  36423: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      i: () => Xk,
      m: () => bk,
      q: () => wk
    });
    var Rk = Bk(61),
      tk = Bk(1090);
    const ak = 8,
      Xk = "InGameHeaderContainer",
      bk = "TopRightElements";

    function wk(kk) {
      const [Fk] = (0, tk.c)(), [Bk, wk] = (0, Rk.useState)(!1);
      return (0, Rk.useLayoutEffect)((() => {
        if (!kk) return;
        const Fk = document.querySelector(`.${Xk}`),
          Bk = document.querySelector(`.${bk}`),
          Rk = () => {
            const Rk = kk.getBoundingClientRect(),
              tk = Fk ? Fk.getBoundingClientRect().right : 0,
              Xk = Bk ? Bk.getBoundingClientRect().left : window.innerWidth,
              bk = Rk.left < tk + ak,
              dk = Rk.right > Xk - ak;
            wk(bk || dk)
          };
        Rk();
        const tk = new ResizeObserver(Rk);
        return tk.observe(kk), Fk && tk.observe(Fk), Bk && tk.observe(Bk), () => {
          tk.disconnect()
        }
      }), [kk, Fk]), Bk
    }
  },
  36421: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    const Rk = [{
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

    function tk(kk, Fk, Bk) {
      const tk = Math.abs(kk - Fk),
        ak = Date.now() - Bk;
      for (const Xk of Rk)
        if (kk < Xk.maxDist) return tk >= Xk.hardUpdateDist || ak > Xk.timeBetweenSoftChecks && tk >= Xk.softUpdateDist;
      return !1
    }
  },
  8372: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      h: () => tk
    });
    let Rk = null;
    const tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Rk = Fk, () => {
          Rk === Fk && (Rk = null)
        }
      },
      ak = () => {
        var kk;
        return null !== (kk = Rk) && void 0 !== kk && kk.canCycle() ? Rk.cycle : null
      }
  },
  38173: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk) {
      var Rk;
      const {
        width: tk,
        height: ak
      } = Bk, Xk = null !== (Rk = kk.text) && void 0 !== Rk ? Rk : kk, bk = (Xk.x / 100 - .5) * tk, wk = (Xk.y / 100 - .5) * ak, dk = tk / 2 - Fk.x;
      if (null !== kk.text && Math.abs(bk) <= dk && wk >= Fk.top - ak / 2 && wk <= ak / 2 - Fk.bottom) return {
        x: Xk.x,
        y: Xk.y
      };
      const sk = Math.min(0 === bk ? 1 / 0 : dk / Math.abs(bk), wk > 0 ? (ak / 2 - Fk.bottom) / wk : wk < 0 ? (Fk.top - ak / 2) / wk : 1 / 0);
      return !Number.isFinite(sk) || sk < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bk * sk / tk * 100,
        y: 50 + wk * sk / ak * 100
      }
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  36340: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => ek,
      G: () => Wk,
      d: () => ak,
      h: () => yk,
      l: () => fk,
      p: () => bk,
      s: () => Jk,
      u: () => mk,
      w: () => Vk,
      z: () => vk
    });
    var Rk = Bk(22),
      tk = Bk(29);
    const ak = "clientGameInventoryButtonsChanged",
      Xk = new Map;

    function bk() {
      return [...Xk.values()].sort(((kk, Fk) => {
        var Bk, Rk;
        return (null !== (Bk = kk.order) && void 0 !== Bk ? Bk : 0) - (null !== (Rk = Fk.order) && void 0 !== Rk ? Rk : 0)
      }))
    }
    let wk = null;

    function dk(kk) {
      wk = kk
    }
    let sk = !1;

    function Vk(kk) {
      sk = !0;
      try {
        kk.onClick()
      } finally {
        sk = !1
      }
      kk.panel && "clientGame" === Rk.c.get("openInGameMenuName") && dk(kk.id)
    }

    function Jk() {
      return sk
    }

    function Ak() {
      return bk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = Ak(),
        Bk = Fk.findIndex((kk => kk.id === wk));
      return !(Bk < 0 || Fk.length < 2) && (Vk(Fk[(Bk + kk + Fk.length) % Fk.length]), !0)
    }

    function yk() {
      return null !== wk && Ak().length > 1
    }

    function fk() {
      dk(null)
    }

    function mk() {
      "inventory" !== Rk.c.get("openInGameMenuName") && dk(null)
    }

    function Wk() {
      const kk = wk;
      return dk(null), kk
    }

    function vk(kk) {
      return Xk.set(kk.id, kk), tk.o.Hf(ak, bk(), !0), () => {
        Xk.get(kk.id) === kk && (Xk.delete(kk.id), tk.o.Hf(ak, bk()))
      }
    }
  },
  36332: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      f: () => fk,
      i: () => mk,
      l: () => Jk,
      o: () => dk,
      q: () => yk,
      s: () => Ak,
      w: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(36340);
    const bk = "clientGameUiChanged";
    let wk = null;

    function dk() {
      return wk
    }

    function sk(kk, Fk) {
      const Bk = {
        content: kk,
        menu: Fk
      };
      return wk = Bk, tk.o.Hf(bk, wk, !0), () => {
        wk === Bk && (wk = null, ek = !1, fk(), tk.o.Hf(bk, null))
      }
    }
    let Vk = null;

    function Jk() {
      return Vk
    }

    function Ak(kk) {
      return Vk = kk, () => {
        Vk === kk && (Vk = null)
      }
    }
    let ek = !1;

    function yk() {
      const kk = Rk.c.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, Xk.s)() || (0, Xk.l)(), (0, ak.m)(ak.e), Rk.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fk() {
      Wk(!1)
    }

    function mk() {
      Wk(ek)
    }

    function Wk(kk) {
      "clientGame" === Rk.c.get("openInGameMenuName") && Rk.c.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, Xk.l)(), ek = !1
    }
  },
  39012: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => mF
    });
    const Rk = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var tk = Bk(61),
      ak = Bk(36332),
      Xk = Bk(36708),
      bk = Bk(36355),
      wk = Bk(1650),
      dk = Bk(29);
    const sk = {
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
    const Vk = 32;

    function Jk(kk, Fk, Bk, Rk) {
      return {
        tag: "line",
        attrs: {
          x1: kk,
          y1: Fk,
          x2: Bk,
          y2: Rk,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Ak(kk) {
      return {
        tag: "circle",
        attrs: {
          cx: Vk,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vk,
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

    function yk(kk, Fk, Bk) {
      return {
        tag: "circle",
        attrs: {
          cx: Vk,
          cy: Vk,
          r: kk,
          "stroke-width": Fk,
          class: Bk
        }
      }
    }

    function fk(kk, Fk, Bk) {
      return {
        tag: "text",
        attrs: {
          x: kk,
          y: Fk,
          class: "Fill Label"
        },
        text: Bk
      }
    }
    const mk = {
      pistol: kk => [Jk(Vk, Vk - kk - 5, Vk, Vk - kk), Jk(Vk - kk - 5, Vk, Vk - kk, Vk), Jk(Vk + kk, Vk, Vk + kk + 5, Vk), Ak(1.4)],
      rifle: kk => [Jk(Vk, Vk - kk - 8, Vk, Vk - kk), Jk(Vk, Vk + kk, Vk, Vk + kk + 8), Jk(Vk - kk - 8, Vk, Vk - kk, Vk), Jk(Vk + kk, Vk, Vk + kk + 8, Vk), Ak(1)],
      smg: kk => {
        const Fk = Math.PI / 2,
          Bk = [];
        for (let Xk = 0; Xk < 4; Xk++) Bk.push((tk = Xk * Fk + .35, ak = (Xk + 1) * Fk - .35, ek(`M${Vk+(Rk=6+kk)*Math.cos(tk)} ${Vk+Rk*Math.sin(tk)} A${Rk} ${Rk} 0 0 1 ${Vk+Rk*Math.cos(ak)} ${Vk+Rk*Math.sin(ak)}`, 2)));
        var Rk, tk, ak;
        return [...Bk, Ak(1.4)]
      },
      shotgun: kk => [yk(kk, 3, "Ring Outline"), yk(kk, 1.5, "Ring")],
      marksman: kk => [ek(`M${26-kk/2} ${39+kk/2} L32 33 L${38+kk/2} ${39+kk/2}`, 2), Jk(14 - kk, Vk, 24 - kk, Vk, 1.5), Jk(40 + kk, Vk, 50 + kk, Vk, 1.5), Jk(14 - kk, 30, 14 - kk, 34, 1.5), Jk(50 + kk, 30, 50 + kk, 34, 1.5)],
      machineGun: kk => {
        const Fk = 10 + kk,
          Bk = [];
        for (const [Rk, tk] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Bk.push(ek(`M${Vk+Rk*Fk} ${Vk+tk*(Fk-5)} L${Vk+Rk*Fk} ${Vk+tk*Fk} L${Vk+Rk*(Fk-5)} ${Vk+tk*Fk}`, 2));
        return [...Bk, Jk(Vk, 28, Vk, 36, 1.5), Jk(28, Vk, 36, Vk, 1.5)]
      },
      launcher: () => [Jk(14, 30, 50, 30, 1.5), Jk(Vk, 24, Vk, 52, 1.5), Jk(28, 38, 36, 38, 1.5), Jk(29, 44, 35, 44, 1.5), Jk(30, 50, 34, 50, 1.5), fk(38, 40, "100"), fk(37, 46, "200"), Ak(1.4, 30)],
      melee: () => [ek("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Ak(1.2)],
      throwable: () => [Ak(1.6)]
    };

    function Wk(kk) {
      let {
        tag: Fk,
        attrs: Bk,
        text: Rk
      } = kk, tk = `<${Fk}`;
      for (const [ak, Xk] of Object.entries(Bk)) tk += ` ${ak}="${Xk}"`;
      return void 0 === Rk ? `${tk}/>` : `${tk}>${Rk}</${Fk}>`
    }
    class vk {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = kk => {
          this.element = kk, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, kk && !this.enabled && (kk.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, wk.getRemInPx)()))
        }, this.tokens = [dk.o.subscribe("aimingOverlay", (kk => {
          this.sniperOverlay = "sniper" === kk
        })), dk.o.subscribe("mouseState", (kk => {
          let {
            isDown: Fk
          } = kk;
          this.mouseDown = Fk
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      lY(kk) {
        kk !== this.enabled && (this.enabled = kk, this.drawnVisible = null, kk || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(kk, Fk) {
        var Bk, Rk;
        if (!this.enabled) return;
        const {
          api: tk
        } = this, ak = tk.isAlive(this.localPlayerId) && null !== (Bk = null === (Rk = tk.LFk(this.localPlayerId)) || void 0 === Rk ? void 0 : Rk.name) && void 0 !== Bk ? Bk : null, Xk = (bk = ak) && sk[bk] || null;
        var bk;
        if (this.setOwnsCrosshair(null !== Xk), !this.element) return;
        const wk = tk.getHeldGunInaccuracy(),
          dk = null !== wk,
          Vk = null !== Xk && !this.sniperOverlay && tk.isCrosshairShown();
        if (Vk !== this.drawnVisible && (this.drawnVisible = Vk, this.element.style.display = Vk ? "block" : "none"), !Vk) return;
        const Jk = dk ? function(kk) {
            return "launcher" === kk || "melee" === kk || "throwable" === kk ? "none" : "shotgun" === kk ? "cone" : "offset"
          }(Xk) : "none",
          Ak = null !== wk && void 0 !== wk ? wk : 0;
        "cone" === Jk ? this.drawCone(Xk, this.coneRadiusVh(Ak, Fk) * this.gapPerVh, kk) : (this.coneDrawn = !1, this.draw(Xk, "none" === Jk ? 2 : this.offsetGap(Ak)));
        const ek = !dk && this.mouseDown;
        ek !== this.drawnPressed && (this.drawnPressed = ek, this.element.classList.toggle("Pressed", ek))
      }
      dispose() {
        for (const kk of this.tokens) dk.o.unsubscribe(kk);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(kk, Fk) {
        var Bk, Rk;
        kk !== this.drawnFamily ? (this.drawnFamily = kk, this.drawnGap = Fk, this.element.innerHTML = function(kk, Fk) {
          return `<svg viewBox="0 0 64 64">${mk[kk](Fk).map(Wk).join("")}</svg>`
        }(kk, Fk), this.shapes = Array.from(null !== (Bk = null === (Rk = this.element.firstElementChild) || void 0 === Rk ? void 0 : Rk.children) && void 0 !== Bk ? Bk : [])) : Fk !== this.drawnGap && (this.drawnGap = Fk, function(kk, Fk, Bk) {
          const Rk = mk[Fk](Bk);
          for (let tk = 0; tk < Rk.length; tk++)
            for (const [Fk, Bk] of Object.entries(Rk[tk].attrs)) {
              const Rk = String(Bk);
              kk[tk].getAttribute(Fk) !== Rk && kk[tk].setAttribute(Fk, Rk)
            }
        }(this.shapes, kk, Fk))
      }
      drawCone(kk, Fk, Bk) {
        kk === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Fk - this.shownRadius) * (1 - Math.exp(-Bk / 80)) : this.shownRadius = Fk, this.coneDrawn = !0, this.draw(kk, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(kk, Fk) {
        if (!(Fk > 0)) return 1;
        const Bk = kk * Xk.h / 2;
        return Math.max(50 * Math.tan(Bk) / Fk, 1)
      }
      offsetGap(kk) {
        const Fk = 2 + ((0, bk.e)(kk) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Fk) / 2)
      }
      setOwnsCrosshair(kk) {
        kk !== this.ownsCrosshair && (this.ownsCrosshair = kk, document.body.classList.toggle("FrontlineCustomCrosshair", kk))
      }
    }
    const ik = "FrontlineCustomDamage",
      Yk = .45,
      Lk = .2;
    class Ok {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Et = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = kk => {
          var Fk, Bk;
          this.clearHits(), this.root = kk, this.lowLayer = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.querySelector(".FrontlineDamageLow")) && void 0 !== Fk ? Fk : null, this.arcLayer = null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.querySelector(".FrontlineDamageArcs")) && void 0 !== Bk ? Bk : null, this.showRoot(), this.drawLow()
        }, this.token = dk.o.subscribe("damagedByOtherPlayer", (kk => {
          let {
            direction: Fk,
            Lt: Bk
          } = kk;
          this.onHurt(Fk, Bk)
        })), this.syncHealth(), document.body.classList.add(ik)
      }
      lY(kk) {
        kk !== this.enabled && (this.enabled = kk, document.body.classList.toggle(ik, kk), kk || this.clearHits(), this.showRoot())
      }
      frame(kk) {
        this.syncHealth(), this.cameraHeading = kk;
        for (const Fk of this.arcs) this.drawArcAngle(Fk)
      }
      dispose() {
        dk.o.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(ik)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const kk = this.api.getClientOption(this.localPlayerId, "_health"),
          Fk = this.api.getClientOption(this.localPlayerId, "_shield"),
          Bk = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(kk, this.readHealth) && Object.is(Fk, this.readShield) && Object.is(Bk, this.readMaxHealth)) return;
        if (this.readHealth = kk, this.readShield = Fk, this.readMaxHealth = Bk, null === kk || void 0 === kk || !Bk) return this.lastHealthPool = null, this.maxHealth = null, this.Et = 1, this.dead = !1, void this.drawLow();
        const Rk = kk + (null !== Fk && void 0 !== Fk ? Fk : 0);
        if (null !== this.lastHealthPool && Rk < this.lastHealthPool) {
          const kk = performance.now(),
            Fk = (this.lastHealthPool - Rk) / Bk;
          this.lastDrop = kk - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Fk,
            at: this.lastDrop.at
          } : {
            frac: Fk,
            at: kk
          }
        }
        this.dead = kk <= 0, this.dead && this.clearHits(), this.lastHealthPool = Rk, this.maxHealth = Bk, this.Et = kk > 0 ? kk / Bk : 1, this.drawLow()
      }
      onHurt(kk, Fk) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Bk = Math.min(1, this.takeDamageFrac(Fk) / .3);
        null !== kk && this.showArc(kk, Bk), this.flashEdge(null === kk ? null : kk - this.cameraHeading, .4 + .6 * Bk)
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
        const kk = Sk((Yk - this.Et) / .25),
          Fk = Sk((Lk - this.Et) / .15000000000000002),
          Bk = this.Et < Yk;
        this.lowLayer.classList.toggle("Active", Bk), this.lowLayer.classList.toggle("Critical", this.Et < Lk), this.lowLayer.style.opacity = String(Bk ? .55 + .3 * kk + .15 * Fk : 0)
      }
      showArc(kk, Fk) {
        var Bk, Rk;
        if (!this.arcLayer) return;
        let tk = this.arcs.find((Fk => Ek(Fk.direction, kk) < .6));
        if (!tk) {
          const Fk = document.createElement("div");
          Fk.className = "FrontlineDamageArc", Fk.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(Fk), tk = {
            element: Fk,
            direction: kk,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(tk)
        }
        tk.direction = kk, this.drawArcAngle(tk);
        const ak = tk.fade ? Number(getComputedStyle(tk.element).opacity) : 0;
        null === (Bk = tk.fade) || void 0 === Bk || Bk.cancel(), null === (Rk = tk.pop) || void 0 === Rk || Rk.cancel(), tk.element.style.opacity = "1";
        const Xk = tk.element.animate([{
          opacity: ak
        }, {
          opacity: 1
        }], 144);
        tk.fade = Xk, tk.pop = tk.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Fk
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const bk = tk;
        Xk.onfinish = () => {
          if (bk.fade !== Xk) return;
          const kk = bk.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          kk.startTime = Xk.startTime, bk.fade = kk, kk.onfinish = () => {
            bk.fade === kk && (bk.element.remove(), Nk(this.arcs, bk))
          }
        }
      }
      drawArcAngle(kk) {
        const Fk = kk.direction - this.cameraHeading;
        (null === kk.drawnAngle || Math.abs(Fk - kk.drawnAngle) > .005) && (kk.drawnAngle = Fk, kk.element.style.rotate = `${Fk}rad`)
      }
      flashEdge(kk, Fk) {
        var Bk, Rk, tk;
        if (!this.root) return;
        let ak = this.flashes.find((Fk => null === Fk.angle || null === kk ? Fk.angle === kk : Ek(Fk.angle, kk) < .5));
        if (!ak) {
          const Fk = document.createElement("div");
          Fk.className = "FrontlineDamageFlash";
          const Bk = Fk.appendChild(document.createElement("div"));
          Bk.className = "FrontlineDamageFlashGlow", this.root.insertBefore(Fk, this.arcLayer), ak = {
            element: Fk,
            glow: Bk,
            angle: kk,
            level: 0,
            animation: null
          }, this.flashes.push(ak)
        }
        const Xk = null === (Bk = ak.animation) || void 0 === Bk || null === (Rk = Bk.effect) || void 0 === Rk ? void 0 : Rk.getComputedTiming().progress,
          bk = null === Xk || void 0 === Xk ? 0 : ak.level * (1 - Xk);
        ak.level = Math.min(1, Math.max(Fk, bk + .6 * Fk)), ak.angle = kk;
        const {
          x: wk,
          y: dk,
          rx: sk,
          ry: Vk
        } = function(kk, Fk) {
          const Bk = window.innerWidth,
            Rk = window.innerHeight;
          if (null === kk) return {
            x: Bk / 2,
            y: Rk / 2,
            rx: 0,
            ry: 0
          };
          const tk = Math.sin(kk),
            ak = -Math.cos(kk),
            Xk = Bk / 2 / Math.max(1e-6, Math.abs(tk)),
            bk = Rk / 2 / Math.max(1e-6, Math.abs(ak)),
            wk = Math.min(Xk, bk),
            dk = Math.round(Bk / 2 + tk * wk),
            sk = Math.round(Rk / 2 + ak * wk),
            Vk = Rk / 100 * (.85 + .25 * Fk),
            Jk = Xk <= bk,
            Ak = Math.round((Jk ? 30 : 74) * Vk),
            ek = Math.round((Jk ? 58 : 26) * Vk);
          return {
            x: dk,
            y: sk,
            rx: Ak,
            ry: ek
          }
        }(kk, ak.level), {
          style: Jk
        } = ak.glow;
        ak.glow.classList.toggle("Everywhere", null === kk), Jk.setProperty("--glowX", `${wk}px`), Jk.setProperty("--glowY", `${dk}px`), Jk.setProperty("--glowRx", `${sk}px`), Jk.setProperty("--glowRy", `${Vk}px`), ak.element.style.transformOrigin = `${wk}px ${dk}px`, null === (tk = ak.animation) || void 0 === tk || tk.cancel();
        const Ak = ak.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: ak.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * ak.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * ak.level
        });
        ak.animation = Ak;
        const ek = ak;
        Ak.onfinish = () => {
          ek.animation === Ak && (ek.element.remove(), Nk(this.flashes, ek))
        }
      }
      clearHits() {
        for (const Rk of this.arcs) {
          var kk, Fk;
          null === (kk = Rk.fade) || void 0 === kk || kk.cancel(), Rk.fade = null, null === (Fk = Rk.pop) || void 0 === Fk || Fk.cancel(), Rk.element.remove()
        }
        this.arcs.length = 0;
        for (const Rk of this.flashes) {
          var Bk;
          null === (Bk = Rk.animation) || void 0 === Bk || Bk.cancel(), Rk.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function Ek(kk, Fk) {
      return Math.abs(Math.atan2(Math.sin(kk - Fk), Math.cos(kk - Fk)))
    }

    function Sk(kk) {
      return Math.max(0, Math.min(1, kk))
    }

    function Nk(kk, Fk) {
      const Bk = kk.indexOf(Fk); - 1 !== Bk && kk.splice(Bk, 1)
    }
    var Hk = Bk(1020),
      uk = Bk.n(Hk),
      Mk = Bk(36329),
      gk = Bk(36423),
      Uk = Bk(1149),
      ck = Bk(1387);
    const Gk = "frontlineHudChanged",
      Tk = "frontlineScoreboardChanged";
    class rk {
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
      he(kk) {
        this.wire = kk, dk.o.Hf(Gk, kk, !0)
      }
      receiveScoreboard(kk) {
        let Fk = "scoreboard" === kk[0] ? performance.now() + kk[5] : 0;
        const Bk = this.scoreboard.endsAt;
        0 !== Fk && 0 !== Bk && Math.abs(Fk - Bk) < 1e3 && (Fk = Bk), this.scoreboard = {
          wire: kk,
          endsAt: Fk
        }, dk.o.Hf(Tk, this.scoreboard, !0)
      }
    }
    var Dk = Bk(1069);
    const zk = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Pk(kk) {
      const [Fk, Bk] = (0, tk.useState)((() => (kk - performance.now()) / 1e3));
      return (0, tk.useEffect)((() => {
        if (0 === kk) return;
        const Fk = () => {
          Bk((kk - performance.now()) / 1e3)
        };
        Fk();
        const Rk = window.setInterval(Fk, 250);
        return () => {
          window.clearInterval(Rk)
        }
      }), [kk]), Fk
    }

    function hk(kk) {
      let {
        className: Fk,
        point: Bk
      } = kk;
      const [Rk, tk, ak, Xk, bk, wk] = Bk;
      return (0, Dk.jsxs)("div", {
        className: uk()(Fk, `Owner-${tk||"None"}`, `Leader-${Xk||"None"}`, {
          Contested: bk,
          Here: wk
        }),
        children: [(0, Dk.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Rk
        }), (0, Dk.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${ak}%`
          }
        })]
      })
    }
    const qk = (0, tk.memo)((function(kk) {
        let {
          points: Fk,
          markers: Bk
        } = kk;
        const {
          t: Rk
        } = (0, Uk.x)();
        return Fk ? (0, Dk.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Fk.map((kk => {
            const [Fk, , , , , , , tk] = kk;
            return (0, Dk.jsxs)("div", {
              ref: Bk.bindMarker(Fk),
              className: "FrontlinePointMarker",
              children: [(0, Dk.jsx)(hk, {
                className: "FrontlinePointMarkerTile",
                point: kk
              }), (0, Dk.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [tk && (0, Dk.jsx)("span", {
                  className: uk()("FrontlinePointMarkerHomeTurf", `Team-${tk}`),
                  children: Rk("frontlineHud:homeTurf", {
                    team: Rk(zk[tk])
                  })
                }), (0, Dk.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Fk)
          }))
        }) : null
      })),
      Ck = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Zk = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function pk(kk) {
      let {
        hud: Fk,
        crosshair: Bk,
        damage: Rk,
        markers: tk
      } = kk;
      const ak = (0, ck.g)(Gk, Fk.getWire()),
        Xk = (0, ck.g)(Tk, Fk.getScoreboard());
      return (0, Dk.jsxs)(Dk.Fragment, {
        children: [(0, Dk.jsx)(Kk, {
          damage: Rk
        }), (0, Dk.jsx)(qk, {
          points: "scoreboard" === Xk.wire[0] ? Xk.wire[6] : null,
          markers: tk
        }), (0, Dk.jsx)(jk, {
          view: Xk
        }), (0, Dk.jsx)("div", {
          className: "FrontlineReticle",
          ref: Bk.bindElement
        }), (0, Dk.jsx)(Mk.g, {
          children: (0, Dk.jsx)(xk, {
            wire: ak
          })
        })]
      })
    }
    const Kk = (0, tk.memo)((function(kk) {
        let {
          damage: Fk
        } = kk;
        return (0, Dk.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Fk.bindElement,
          children: [(0, Dk.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Dk.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Dk.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      xk = (0, tk.memo)((function(kk) {
        let {
          wire: Fk
        } = kk;
        const {
          t: Bk
        } = (0, Uk.x)();
        if ("capture" === Fk[0]) {
          const [, kk, Rk, tk, ak, Xk, bk] = Fk, wk = Math.round(tk / 100 * 24);
          return (0, Dk.jsxs)("div", {
            className: uk()("FrontlinePlate", `Status-${Rk}`, `Leader-${ak||"None"}`),
            children: [(0, Dk.jsx)(Qk, {}), (0, Dk.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Dk.jsx)("span", {
                className: "FrontlineObjective",
                children: kk
              }), (0, Dk.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Dk.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Bk("frontlineHud:objective", {
                    point: kk,
                    friendly: Xk,
                    enemy: bk
                  })
                }), (0, Dk.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Bk(Ck[Rk])
                })]
              }), (0, Dk.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(tk).padStart(3, "0"), (0, Dk.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Dk.jsx)(nk, {
              segments: 24,
              lit: wk
            })]
          })
        }
        if ("alert" === Fk[0]) {
          const [, kk, Rk, tk] = Fk;
          return (0, Dk.jsxs)("div", {
            className: uk()("FrontlinePlate", "FrontlineAlert", `Tone-${tk}`),
            children: [(0, Dk.jsx)(Qk, {}), (0, Dk.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Bk(Zk[kk])
            }), (0, Dk.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Rk
            })]
          })
        }
        return null
      })),
      jk = (0, tk.memo)((function(kk) {
        let {
          view: Fk
        } = kk;
        const {
          t: Bk
        } = (0, Uk.x)(), Rk = (0, tk.useRef)(null), ak = function(kk, Fk) {
          const [Bk, Rk] = (0, tk.useState)(!1);
          return (0, tk.useLayoutEffect)((() => {
            const Fk = kk.current;
            if (!Fk) return;
            const Bk = document.querySelector(`.${gk.i}`),
              tk = document.querySelector(`.${gk.m}`),
              ak = () => {
                var kk;
                const ak = Fk.querySelector(".FrontlineTeamTrack"),
                  Xk = (0, wk.getRemInPx)(),
                  bk = Fk.getBoundingClientRect().width - 2 * (null !== (kk = null === ak || void 0 === ak ? void 0 : ak.getBoundingClientRect().width) && void 0 !== kk ? kk : 0),
                  dk = window.innerWidth / 2,
                  sk = Bk ? Bk.getBoundingClientRect().right : 0,
                  Vk = tk ? tk.getBoundingClientRect().left : window.innerWidth,
                  Jk = Math.min(dk - sk, Vk - dk) - gk.e - bk / 2,
                  Ak = Jk < 6 * Xk,
                  ek = Ak ? (window.innerWidth - bk) / 2 - gk.e : Jk;
                Fk.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(ek,14*Xk)))}px`), Rk(Ak)
              };
            ak();
            const Xk = new ResizeObserver(ak);
            for (const kk of [Fk, Bk, tk]) kk && Xk.observe(kk);
            return window.addEventListener("resize", ak), () => {
              Xk.disconnect(), window.removeEventListener("resize", ak)
            }
          }), [kk, Fk]), Bk
        }(Rk, "scoreboard" === Fk.wire[0]);
        if ("scoreboard" !== Fk.wire[0]) return null;
        const [, Xk, bk, dk, sk, , Vk] = Fk.wire, Jk = "Red" === Xk ? "Blue" : "Red";
        return (0, Dk.jsxs)("div", {
          className: uk()("FrontlineScoreboardContainer", {
            Below: ak
          }),
          children: [(0, Dk.jsxs)("div", {
            ref: Rk,
            className: "FrontlineScoreboard",
            children: [(0, Dk.jsx)(Qk, {}), (0, Dk.jsx)(lk, {
              team: Xk,
              tickets: bk,
              goal: sk,
              side: "Friendly"
            }), (0, Dk.jsx)("div", {
              className: "FrontlinePoints",
              children: Vk.map((kk => (0, Dk.jsx)(hk, {
                className: "FrontlinePoint",
                point: kk
              }, kk[0])))
            }), (0, Dk.jsx)(lk, {
              team: Jk,
              tickets: dk,
              goal: sk,
              side: "Enemy"
            })]
          }), (0, Dk.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Dk.jsx)(Ik, {
              endsAt: Fk.endsAt
            }), (0, Dk.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Bk("frontlineHud:ticketGoal", {
                goal: sk
              })
            })]
          })]
        })
      }));

    function lk(kk) {
      let {
        team: Fk,
        tickets: Bk,
        goal: Rk,
        side: tk
      } = kk;
      const {
        t: ak
      } = (0, Uk.x)(), Xk = String(Bk).padStart(3, "0"), bk = Xk.search(/[1-9]/), wk = -1 === bk ? Xk : Xk.slice(0, bk), dk = Math.min(20, Math.floor(Bk / Rk * 20));
      return (0, Dk.jsxs)("div", {
        className: uk()("FrontlineTeamScore", tk, `Team-${Fk}`),
        children: [(0, Dk.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Dk.jsx)("span", {
            className: "Lead",
            children: wk
          }), -1 !== bk && Xk.slice(bk)]
        }), (0, Dk.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Dk.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: ak(zk[Fk])
          }), (0, Dk.jsx)(nk, {
            segments: 20,
            lit: dk
          })]
        })]
      })
    }

    function nk(kk) {
      let {
        segments: Fk,
        lit: Bk
      } = kk;
      return (0, Dk.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Fk
        }, ((kk, Fk) => (0, Dk.jsx)("i", {
          className: uk()({
            Lit: Fk < Bk
          })
        }, Fk)))
      })
    }

    function Ik(kk) {
      let {
        endsAt: Fk
      } = kk;
      const Bk = Math.max(0, Math.ceil(Pk(Fk)));
      return (0, Dk.jsxs)("div", {
        className: uk()("FrontlineClock", {
          Urgent: Bk <= 60
        }),
        children: [Math.floor(Bk / 60), ":", String(Bk % 60).padStart(2, "0")]
      })
    }

    function Qk() {
      return (0, Dk.jsxs)(Dk.Fragment, {
        children: [(0, Dk.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Dk.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var kF = Bk(36421),
      FF = Bk(1203),
      BF = Bk(38136),
      RF = Bk(38173);
    class tF {
      constructor(kk) {
        var Fk;
        this.hud = kk, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Te = !1, this.UW = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.UW), null === (Fk = window.visualViewport) || void 0 === Fk || Fk.addEventListener("resize", this.UW)
      }
      bindMarker(kk) {
        let Fk = this.refs.get(kk);
        return Fk || (Fk = Fk => {
          var Bk;
          null === (Bk = this.markers.get(kk)) || void 0 === Bk || Bk.stopObserving(), this.markers.delete(kk), Fk && !this.Te && this.markers.set(kk, this.mount(Fk))
        }, this.refs.set(kk, Fk)), Fk
      }
      frame(kk, Fk) {
        this.render = kk;
        const Bk = this.hud.getScoreboard().wire;
        if ("scoreboard" === Bk[0] && 0 !== this.markers.size)
          for (const [Rk, , , , , , tk] of Bk[6]) {
            const kk = this.markers.get(Rk);
            kk && tk && (kk.target ??= [0, 0, 0], kk.target[0] = tk[0], kk.target[1] = tk[1] + 2.5, kk.target[2] = tk[2], this.place(kk), this.Xa(kk, Fk && Math.hypot(tk[0] - Fk[0], tk[1] - Fk[1], tk[2] - Fk[2])))
          }
      }
      dispose() {
        var kk;
        this.Te = !0, window.removeEventListener("resize", this.UW), null === (kk = window.visualViewport) || void 0 === kk || kk.removeEventListener("resize", this.UW);
        for (const Fk of this.markers.values()) Fk.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(kk) {
        const {
          render: Fk,
          viewport: Bk
        } = this;
        if (!Fk || !kk.target) return;
        const Rk = (50 - Fk.screenBandPct.y) / 100 * Bk.height,
          tk = {
            x: kk.halfSize.width + 8,
            top: kk.halfSize.height + 8,
            bottom: kk.halfSize.height + kk.labelsBelow + Rk
          },
          ak = Fk.projectWorldPosToViewport(kk.target),
          Xk = null !== ak && void 0 !== ak ? ak : Fk.projectWorldPosToScreenPos(kk.target),
          bk = (0, RF.e)({
            x: Xk.x,
            y: Xk.y,
            text: ak
          }, tk, Bk);
        (0, BF.c)(kk.root, Math.round(100 * bk.x) / 100, Math.round(100 * bk.y) / 100)
      }
      Xa(kk, Fk) {
        if (null === Fk) return void(null !== kk.metres && (kk.metres = null, kk.distance.textContent = ""));
        const Bk = Date.now();
        (null === kk.metres || (0, kF.b)(Fk, kk.metres, kk.metresShownAt)) && (kk.metres = Math.round(Fk), kk.metresShownAt = Bk, kk.distance.textContent = (0, Uk.r)(FF.c.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
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
          Bk = kk.querySelector(".FrontlinePointMarkerLabels"),
          Rk = new ResizeObserver((() => {
            Fk.halfSize = {
              width: Math.max(kk.offsetWidth, Bk.offsetWidth) / 2,
              height: kk.offsetHeight / 2
            }, Fk.labelsBelow = Bk.offsetTop + Bk.offsetHeight - kk.offsetHeight, this.place(Fk)
          }));
        return Rk.observe(kk, {
          box: "border-box"
        }), Rk.observe(Bk, {
          box: "border-box"
        }), Fk.stopObserving = () => {
          Rk.disconnect()
        }, Fk
      }
    }
    var aF = Bk(6134),
      XF = Bk(2466);
    const bF = "frontlineRoundEndChanged";
    class wF {
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
      he(kk) {
        const Fk = "roundEnd" === kk[0] ? performance.now() + kk[5] : 0;
        this.view = {
          wire: kk,
          key: this.view.key + 1,
          endsAt: Fk
        }, dk.o.Hf(bF, this.view, !0)
      }
    }
    const dF = (0, tk.lazy)((() => (0, XF.e)(Bk.e(191).then((() => Bk(41169))), (kk => kk.FrontlineMvpLineup)))),
      sF = [4800, 4e3, 3200],
      VF = [1, 0, 2],
      JF = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      AF = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function eF(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, ck.g)(bF, Fk.getView()),
        Rk = Pk(Bk.endsAt);
      return "roundEnd" !== Bk.wire[0] || 1e3 * Rk < -2e3 ? null : (0, Dk.jsx)(yF, {
        wire: Bk.wire,
        secondsLeft: Math.max(0, Math.ceil(Rk))
      }, Bk.key)
    }
    const yF = (0, tk.memo)((function(kk) {
      let {
        wire: Fk,
        secondsLeft: Bk
      } = kk;
      const {
        t: ak
      } = (0, Uk.x)(), [, Xk, bk, wk, dk, , sk, Vk] = Fk, Jk = (0, tk.useMemo)((() => VF.filter((kk => kk < Vk.length))), [Vk]), Ak = (0, tk.useMemo)((() => Jk.map((kk => {
        const [, , , , , Fk, Bk] = Vk[kk];
        return {
          cosmetics: Rk.map(((kk, Bk) => [kk, Fk[Bk]])),
          size: 0 === kk ? 1.15 : .85,
          heldGun: {
            name: Bk,
            aimed: 0 === kk
          },
          showAfterMs: sF[kk]
        }
      }))), [Vk, Jk]);
      return (0, Dk.jsxs)("div", {
        className: uk()("FrontlineRoundEnd", `Result-${Xk}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Dk.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Dk.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Dk.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Dk.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Dk.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (ek = ak(JF[Xk]), /\p{Script=Arabic}/u.test(ek) ? [ek] : (0, aF.d)(ek)).map(((kk, Fk) => (0, Dk.jsx)("span", {
              style: {
                "--letter": Fk
              },
              children: kk
            }, Fk)))]
          }), (0, Dk.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [bk && "victory" === Xk && (0, Dk.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: ak("frontlineRoundEnd:comeback")
            }), (0, Dk.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Dk.jsx)("b", {
                className: "Friendly",
                children: wk
              }), " \u2013 ", (0, Dk.jsx)("b", {
                className: "Enemy",
                children: dk
              })]
            })]
          })]
        }), Jk.length > 0 && (0, Dk.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Jk.length
          },
          children: [(0, Dk.jsx)(tk.Suspense, {
            fallback: null,
            children: (0, Dk.jsx)(dF, {
              className: "FrontlineRoundEndLineup",
              players: Ak
            })
          }), Jk.map((kk => (0, Dk.jsx)(fF, {
            mvp: Vk[kk],
            place: kk
          }, kk)))]
        }), (0, Dk.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: ak("frontlineRoundEnd:nextFront", {
            map: sk,
            seconds: String(Bk)
          })
        })]
      });
      var ek
    }));

    function fF(kk) {
      let {
        mvp: Fk,
        place: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Uk.x)(), [tk, ak, Xk, bk, wk] = Fk, [dk, sk] = Rk(function(kk, Fk) {
        return 1 === Fk && "damage" !== kk ? `frontlineRoundEnd:${kk}One` : `frontlineRoundEnd:${kk}`
      }(Xk, bk), {
        name: "\0",
        count: bk.toLocaleString()
      }).split("\0");
      return (0, Dk.jsxs)("div", {
        className: uk()("FrontlineMvpCard", `Place-${Bk+1}`, `Team-${ak}`),
        style: {
          "--revealMs": `${sF[Bk]}ms`
        },
        children: [(0, Dk.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Dk.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Dk.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Rk(AF[Bk])
        }), (0, Dk.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [dk, (0, Dk.jsx)("span", {
            className: "FrontlineMvpName",
            children: tk
          }), sk]
        }), (0, Dk.jsx)("div", {
          className: "FrontlineMvpKit",
          children: wk
        })]
      })
    }
    const mF = function(kk, Fk, Bk, Rk) {
      let {
        localPlayerId: Xk
      } = Rk;
      const bk = new rk,
        wk = new wF;
      let dk = null,
        sk = null,
        Vk = null,
        Jk = null,
        Ak = null,
        ek = [!1, !1];
      const yk = () => {
        var kk, Fk;
        const [Bk, Rk] = ek;
        null === (kk = sk) || void 0 === kk || kk.lY(!Bk), null === (Fk = Vk) || void 0 === Fk || Fk.lY(!Rk)
      };
      return {
        onCreate: kk => {
          dk = kk, sk = new vk(kk, Xk), Vk = new Ok(kk, Xk), Jk = new tF(bk), yk(), Ak = (0, ak.w)((0, tk.createElement)(tk.Fragment, null, (0, tk.createElement)(pk, {
            hud: bk,
            crosshair: sk,
            damage: Vk,
            markers: Jk
          }), (0, tk.createElement)(eF, {
            controller: wk
          })))
        },
        onClose: () => {
          var kk, Fk, Bk, Rk;
          null === (kk = Ak) || void 0 === kk || kk(), null === (Fk = sk) || void 0 === Fk || Fk.dispose(), sk = null, null === (Bk = Vk) || void 0 === Bk || Bk.dispose(), Vk = null, null === (Rk = Jk) || void 0 === Rk || Rk.dispose(), Jk = null, dk = null
        },
        onAfterRender: (kk, Fk) => {
          var Bk, Rk, tk, ak;
          null === (Bk = sk) || void 0 === Bk || Bk.frame(kk, Fk.tanHalfFovY), null === (Rk = Vk) || void 0 === Rk || Rk.frame(Fk.cameraHeading), null === (tk = Jk) || void 0 === tk || tk.frame(Fk, null !== (ak = dk) && void 0 !== ak && ak.checkValid(Xk) ? dk.rW(Xk) : null)
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "frontlineHud" === kk ? bk.he(Fk) : "frontlineScoreboard" === kk ? bk.receiveScoreboard(Fk) : "frontlineRoundEnd" === kk ? wk.he(Fk) : "frontlinePrefs" === kk && (ek = Fk, yk())
        }
      }
    }
  },
  6134: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    const Rk = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function tk(kk) {
      return null === Rk ? Array.from(kk) : Array.from(Rk.segment(kk), (kk => {
        let {
          segment: Fk
        } = kk;
        return Fk
      }))
    }
  },
  38136: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      e: () => ak
    });
    const Rk = new WeakMap;

    function tk(kk) {
      let Fk = Rk.get(kk);
      return Fk || (Fk = {
        hidden: kk.hidden,
        x: NaN,
        y: NaN
      }, Rk.set(kk, Fk)), Fk
    }

    function ak(kk, Fk) {
      const Bk = tk(kk);
      Bk.hidden !== Fk && (Bk.hidden = Fk, kk.hidden = Fk)
    }

    function Xk(kk, Fk, Bk) {
      const Rk = tk(kk);
      Rk.x === Fk && Rk.y === Bk || (Rk.x = Fk, Rk.y = Bk, kk.style.translate = `${Fk}vw ${Bk}vh`)
    }
  },
  36728: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    const Rk = {
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