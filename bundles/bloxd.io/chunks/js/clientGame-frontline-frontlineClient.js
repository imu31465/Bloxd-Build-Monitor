export const id = 17;
export const ids = [17];
export const modules = {
  36013: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xb,
      e: () => jb,
      h: () => Pb,
      k: () => Lb
    });
    var Ab = Ub(8906),
      Mb = Ub(36017),
      Tb = Ub(36023),
      Eb = Ub(8280),
      Yb = Ub(1345),
      Bb = Ub(52),
      eb = Ub(75),
      vb = Ub(1023);

    function Lb() {
      var bb;
      return (0, Yb.i)(Mb.c, (0, Mb.l)()), (0, vb.jsx)(vb.Fragment, {
        children: null === (bb = (0, Mb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Pb(bb) {
      var ab;
      let {
        show: Ub
      } = bb;
      (0, Yb.i)(Mb.c, (0, Mb.l)());
      const eb = null === (ab = (0, Mb.l)()) || void 0 === ab ? void 0 : ab.menu;
      return (0, Bb.useEffect)((() => {
        var bb;
        Ub || (null === eb || void 0 === eb || null === (bb = eb.onClose) || void 0 === bb || bb.call(eb), (0, Tb.p)())
      }), [Ub, eb]), (0, Bb.useEffect)((() => Ub ? (0, Eb.g)(Tb.v, Tb.i) : void 0), [Ub]), (0, vb.jsx)(Ab.d, {
        showing: Ub,
        globallyUniqueKey: "clientGameMenu",
        children: null === eb || void 0 === eb ? void 0 : eb.content
      })
    }

    function Xb(bb) {
      let {
        placement: ab = "bottom"
      } = bb;
      return (0, vb.jsx)("div", {
        id: `clientGameHud-${ab}`,
        style: {
          display: "contents"
        }
      })
    }

    function jb(bb) {
      let {
        children: ab,
        placement: Ub = "bottom"
      } = bb;
      const [Ab, Mb] = (0, Bb.useState)(null);
      return (0, Bb.useEffect)((() => {
        Mb(document.getElementById(`clientGameHud-${Ub}`))
      }), [Ub]), Ab ? (0, eb.createPortal)(ab, Ab) : null
    }
  },
  8906: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(4218),
      Mb = Ub(4225);

    function Tb(bb) {
      let {
        children: ab,
        showing: Ub,
        globallyUniqueKey: Tb,
        alwaysMountChildren: Eb = !1,
        doGameplayStartStopOnShow: Yb = !0,
        keepsMovement: Bb = !1
      } = bb;
      return (0, Mb.b)(!0, Ub, Tb, Bb), (0, Ab.c)(Yb, Ub), Ub || Eb ? ab : null
    }
  },
  36090: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      e: () => Eb,
      g: () => Yb,
      j: () => Bb
    });
    var Ab = Ub(52),
      Mb = Ub(1055);
    const Tb = 8,
      Eb = "InGameHeaderContainer",
      Yb = "TopRightElements";

    function Bb(bb) {
      const [ab] = (0, Mb.e)(), [Ub, Bb] = (0, Ab.useState)(!1);
      return (0, Ab.useLayoutEffect)((() => {
        if (!bb) return;
        const ab = document.querySelector(`.${Eb}`),
          Ub = document.querySelector(`.${Yb}`),
          Ab = () => {
            const Ab = bb.getBoundingClientRect(),
              Mb = ab ? ab.getBoundingClientRect().right : 0,
              Eb = Ub ? Ub.getBoundingClientRect().left : window.innerWidth,
              Yb = Ab.left < Mb + Tb,
              eb = Ab.right > Eb - Tb;
            Bb(Yb || eb)
          };
        Ab();
        const Mb = new ResizeObserver(Ab);
        return Mb.observe(bb), ab && Mb.observe(ab), Ub && Mb.observe(Ub), () => {
          Mb.disconnect()
        }
      }), [bb, ab]), Ub
    }
  },
  36086: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    const Ab = [{
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

    function Mb(bb, ab, Ub) {
      const Mb = Math.abs(bb - ab),
        Tb = Date.now() - Ub;
      for (const Eb of Ab)
        if (bb < Eb.maxDist) return Mb >= Eb.hardUpdateDist || Tb > Eb.timeBetweenSoftChecks && Mb >= Eb.softUpdateDist;
      return !1
    }
  },
  8280: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      g: () => Mb
    });
    let Ab = null;
    const Mb = function(bb) {
        const ab = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ab = ab, () => {
          Ab === ab && (Ab = null)
        }
      },
      Tb = () => {
        var bb;
        return null !== (bb = Ab) && void 0 !== bb && bb.canCycle() ? Ab.cycle : null
      }
  },
  37865: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub) {
      var Ab;
      const {
        width: Mb,
        height: Tb
      } = Ub, Eb = null !== (Ab = bb.text) && void 0 !== Ab ? Ab : bb, Yb = (Eb.x / 100 - .5) * Mb, Bb = (Eb.y / 100 - .5) * Tb, eb = Mb / 2 - ab.x;
      if (null !== bb.text && Math.abs(Yb) <= eb && Bb >= ab.top - Tb / 2 && Bb <= Tb / 2 - ab.bottom) return {
        x: Eb.x,
        y: Eb.y
      };
      const vb = Math.min(0 === Yb ? 1 / 0 : eb / Math.abs(Yb), Bb > 0 ? (Tb / 2 - ab.bottom) / Bb : Bb < 0 ? (ab.top - Tb / 2) / Bb : 1 / 0);
      return !Number.isFinite(vb) || vb < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Yb * vb / Mb * 100,
        y: 50 + Bb * vb / Tb * 100
      }
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
    }
  },
  38651: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => ka
    });
    const Ab = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Mb = Ub(52),
      Tb = Ub(36017),
      Eb = Ub(36359),
      Yb = Ub(36034),
      Bb = Ub(1639),
      eb = Ub(22);
    const vb = {
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
    const Lb = 32;

    function Pb(bb, ab, Ub, Ab) {
      return {
        tag: "line",
        attrs: {
          x1: bb,
          y1: ab,
          x2: Ub,
          y2: Ab,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Xb(bb) {
      return {
        tag: "circle",
        attrs: {
          cx: Lb,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lb,
          r: bb,
          class: "Fill"
        }
      }
    }

    function jb(bb, ab) {
      return {
        tag: "path",
        attrs: {
          d: bb,
          "stroke-width": ab
        }
      }
    }

    function Rb(bb, ab, Ub) {
      return {
        tag: "circle",
        attrs: {
          cx: Lb,
          cy: Lb,
          r: bb,
          "stroke-width": ab,
          class: Ub
        }
      }
    }

    function kb(bb, ab, Ub) {
      return {
        tag: "text",
        attrs: {
          x: bb,
          y: ab,
          class: "Fill Label"
        },
        text: Ub
      }
    }
    const yb = {
      pistol: bb => [Pb(Lb, Lb - bb - 5, Lb, Lb - bb), Pb(Lb - bb - 5, Lb, Lb - bb, Lb), Pb(Lb + bb, Lb, Lb + bb + 5, Lb), Xb(1.4)],
      rifle: bb => [Pb(Lb, Lb - bb - 8, Lb, Lb - bb), Pb(Lb, Lb + bb, Lb, Lb + bb + 8), Pb(Lb - bb - 8, Lb, Lb - bb, Lb), Pb(Lb + bb, Lb, Lb + bb + 8, Lb), Xb(1)],
      smg: bb => {
        const ab = Math.PI / 2,
          Ub = [];
        for (let Eb = 0; Eb < 4; Eb++) Ub.push((Mb = Eb * ab + .35, Tb = (Eb + 1) * ab - .35, jb(`M${Lb+(Ab=6+bb)*Math.cos(Mb)} ${Lb+Ab*Math.sin(Mb)} A${Ab} ${Ab} 0 0 1 ${Lb+Ab*Math.cos(Tb)} ${Lb+Ab*Math.sin(Tb)}`, 2)));
        var Ab, Mb, Tb;
        return [...Ub, Xb(1.4)]
      },
      shotgun: bb => [Rb(bb, 3, "Ring Outline"), Rb(bb, 1.5, "Ring")],
      marksman: bb => [jb(`M${26-bb/2} ${39+bb/2} L32 33 L${38+bb/2} ${39+bb/2}`, 2), Pb(14 - bb, Lb, 24 - bb, Lb, 1.5), Pb(40 + bb, Lb, 50 + bb, Lb, 1.5), Pb(14 - bb, 30, 14 - bb, 34, 1.5), Pb(50 + bb, 30, 50 + bb, 34, 1.5)],
      machineGun: bb => {
        const ab = 10 + bb,
          Ub = [];
        for (const [Ab, Mb] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Ub.push(jb(`M${Lb+Ab*ab} ${Lb+Mb*(ab-5)} L${Lb+Ab*ab} ${Lb+Mb*ab} L${Lb+Ab*(ab-5)} ${Lb+Mb*ab}`, 2));
        return [...Ub, Pb(Lb, 28, Lb, 36, 1.5), Pb(28, Lb, 36, Lb, 1.5)]
      },
      launcher: () => [Pb(14, 30, 50, 30, 1.5), Pb(Lb, 24, Lb, 52, 1.5), Pb(28, 38, 36, 38, 1.5), Pb(29, 44, 35, 44, 1.5), Pb(30, 50, 34, 50, 1.5), kb(38, 40, "100"), kb(37, 46, "200"), Xb(1.4, 30)],
      melee: () => [jb("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Xb(1.2)],
      throwable: () => [Xb(1.6)]
    };

    function Zb(bb) {
      let {
        tag: ab,
        attrs: Ub,
        text: Ab
      } = bb, Mb = `<${ab}`;
      for (const [Tb, Eb] of Object.entries(Ub)) Mb += ` ${Tb}="${Eb}"`;
      return void 0 === Ab ? `${Mb}/>` : `${Mb}>${Ab}</${ab}>`
    }
    class Db {
      constructor(bb, ab) {
        this.api = bb, this.localPlayerId = ab, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = bb => {
          this.element = bb, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, bb && !this.enabled && (bb.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Bb.getRemInPx)()))
        }, this.tokens = [eb.m.subscribe("aimingOverlay", (bb => {
          this.sniperOverlay = "sniper" === bb
        })), eb.m.subscribe("mouseState", (bb => {
          let {
            isDown: ab
          } = bb;
          this.mouseDown = ab
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Yz(bb) {
        bb !== this.enabled && (this.enabled = bb, this.drawnVisible = null, bb || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(bb, ab) {
        var Ub, Ab;
        if (!this.enabled) return;
        const {
          api: Mb
        } = this, Tb = Mb.isAlive(this.localPlayerId) && null !== (Ub = null === (Ab = Mb.vab(this.localPlayerId)) || void 0 === Ab ? void 0 : Ab.name) && void 0 !== Ub ? Ub : null, Eb = (Yb = Tb) && vb[Yb] || null;
        var Yb;
        if (this.setOwnsCrosshair(null !== Eb), !this.element) return;
        const Bb = Mb.getHeldGunInaccuracy(),
          eb = null !== Bb,
          Lb = null !== Eb && !this.sniperOverlay && Mb.isCrosshairShown();
        if (Lb !== this.drawnVisible && (this.drawnVisible = Lb, this.element.style.display = Lb ? "block" : "none"), !Lb) return;
        const Pb = eb ? function(bb) {
            return "launcher" === bb || "melee" === bb || "throwable" === bb ? "none" : "shotgun" === bb ? "cone" : "offset"
          }(Eb) : "none",
          Xb = null !== Bb && void 0 !== Bb ? Bb : 0;
        "cone" === Pb ? this.drawCone(Eb, this.coneRadiusVh(Xb, ab) * this.gapPerVh, bb) : (this.coneDrawn = !1, this.draw(Eb, "none" === Pb ? 2 : this.offsetGap(Xb)));
        const jb = !eb && this.mouseDown;
        jb !== this.drawnPressed && (this.drawnPressed = jb, this.element.classList.toggle("Pressed", jb))
      }
      dispose() {
        for (const bb of this.tokens) eb.m.unsubscribe(bb);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(bb, ab) {
        var Ub, Ab;
        bb !== this.drawnFamily ? (this.drawnFamily = bb, this.drawnGap = ab, this.element.innerHTML = function(bb, ab) {
          return `<svg viewBox="0 0 64 64">${yb[bb](ab).map(Zb).join("")}</svg>`
        }(bb, ab), this.shapes = Array.from(null !== (Ub = null === (Ab = this.element.firstElementChild) || void 0 === Ab ? void 0 : Ab.children) && void 0 !== Ub ? Ub : [])) : ab !== this.drawnGap && (this.drawnGap = ab, function(bb, ab, Ub) {
          const Ab = yb[ab](Ub);
          for (let Mb = 0; Mb < Ab.length; Mb++)
            for (const [ab, Ub] of Object.entries(Ab[Mb].attrs)) {
              const Ab = String(Ub);
              bb[Mb].getAttribute(ab) !== Ab && bb[Mb].setAttribute(ab, Ab)
            }
        }(this.shapes, bb, ab))
      }
      drawCone(bb, ab, Ub) {
        bb === this.drawnFamily && this.coneDrawn ? this.shownRadius += (ab - this.shownRadius) * (1 - Math.exp(-Ub / 80)) : this.shownRadius = ab, this.coneDrawn = !0, this.draw(bb, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(bb, ab) {
        if (!(ab > 0)) return 1;
        const Ub = bb * Eb.d / 2;
        return Math.max(50 * Math.tan(Ub) / ab, 1)
      }
      offsetGap(bb) {
        const ab = 2 + ((0, Yb.i)(bb) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * ab) / 2)
      }
      setOwnsCrosshair(bb) {
        bb !== this.ownsCrosshair && (this.ownsCrosshair = bb, document.body.classList.toggle("FrontlineCustomCrosshair", bb))
      }
    }
    const zb = "FrontlineCustomDamage",
      xb = .45,
      ib = .2;
    class fb {
      constructor(bb, ab) {
        this.api = bb, this.localPlayerId = ab, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.iM = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = bb => {
          var ab, Ub;
          this.clearHits(), this.root = bb, this.lowLayer = null !== (ab = null === bb || void 0 === bb ? void 0 : bb.querySelector(".FrontlineDamageLow")) && void 0 !== ab ? ab : null, this.arcLayer = null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.querySelector(".FrontlineDamageArcs")) && void 0 !== Ub ? Ub : null, this.showRoot(), this.drawLow()
        }, this.token = eb.m.subscribe("damagedByOtherPlayer", (bb => {
          let {
            direction: ab,
            zM: Ub
          } = bb;
          this.onHurt(ab, Ub)
        })), this.syncHealth(), document.body.classList.add(zb)
      }
      Yz(bb) {
        bb !== this.enabled && (this.enabled = bb, document.body.classList.toggle(zb, bb), bb || this.clearHits(), this.showRoot())
      }
      frame(bb) {
        this.syncHealth(), this.cameraHeading = bb;
        for (const ab of this.arcs) this.drawArcAngle(ab)
      }
      dispose() {
        eb.m.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(zb)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const bb = this.api.getClientOption(this.localPlayerId, "_health"),
          ab = this.api.getClientOption(this.localPlayerId, "_shield"),
          Ub = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(bb, this.readHealth) && Object.is(ab, this.readShield) && Object.is(Ub, this.readMaxHealth)) return;
        if (this.readHealth = bb, this.readShield = ab, this.readMaxHealth = Ub, null === bb || void 0 === bb || !Ub) return this.lastHealthPool = null, this.maxHealth = null, this.iM = 1, this.dead = !1, void this.drawLow();
        const Ab = bb + (null !== ab && void 0 !== ab ? ab : 0);
        if (null !== this.lastHealthPool && Ab < this.lastHealthPool) {
          const bb = performance.now(),
            ab = (this.lastHealthPool - Ab) / Ub;
          this.lastDrop = bb - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + ab,
            at: this.lastDrop.at
          } : {
            frac: ab,
            at: bb
          }
        }
        this.dead = bb <= 0, this.dead && this.clearHits(), this.lastHealthPool = Ab, this.maxHealth = Ub, this.iM = bb > 0 ? bb / Ub : 1, this.drawLow()
      }
      onHurt(bb, ab) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Ub = Math.min(1, this.takeDamageFrac(ab) / .3);
        null !== bb && this.showArc(bb, Ub), this.flashEdge(null === bb ? null : bb - this.cameraHeading, .4 + .6 * Ub)
      }
      takeDamageFrac(bb) {
        if (void 0 !== bb && this.maxHealth) return bb / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: ab
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, ab
      }
      drawLow() {
        if (!this.lowLayer) return;
        const bb = pb((xb - this.iM) / .25),
          ab = pb((ib - this.iM) / .15000000000000002),
          Ub = this.iM < xb;
        this.lowLayer.classList.toggle("Active", Ub), this.lowLayer.classList.toggle("Critical", this.iM < ib), this.lowLayer.style.opacity = String(Ub ? .55 + .3 * bb + .15 * ab : 0)
      }
      showArc(bb, ab) {
        var Ub, Ab;
        if (!this.arcLayer) return;
        let Mb = this.arcs.find((ab => mb(ab.direction, bb) < .6));
        if (!Mb) {
          const ab = document.createElement("div");
          ab.className = "FrontlineDamageArc", ab.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(ab), Mb = {
            element: ab,
            direction: bb,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Mb)
        }
        Mb.direction = bb, this.drawArcAngle(Mb);
        const Tb = Mb.fade ? Number(getComputedStyle(Mb.element).opacity) : 0;
        null === (Ub = Mb.fade) || void 0 === Ub || Ub.cancel(), null === (Ab = Mb.pop) || void 0 === Ab || Ab.cancel(), Mb.element.style.opacity = "1";
        const Eb = Mb.element.animate([{
          opacity: Tb
        }, {
          opacity: 1
        }], 144);
        Mb.fade = Eb, Mb.pop = Mb.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * ab
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Yb = Mb;
        Eb.onfinish = () => {
          if (Yb.fade !== Eb) return;
          const bb = Yb.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          bb.startTime = Eb.startTime, Yb.fade = bb, bb.onfinish = () => {
            Yb.fade === bb && (Yb.element.remove(), Nb(this.arcs, Yb))
          }
        }
      }
      drawArcAngle(bb) {
        const ab = bb.direction - this.cameraHeading;
        (null === bb.drawnAngle || Math.abs(ab - bb.drawnAngle) > .005) && (bb.drawnAngle = ab, bb.element.style.rotate = `${ab}rad`)
      }
      flashEdge(bb, ab) {
        var Ub, Ab, Mb;
        if (!this.root) return;
        let Tb = this.flashes.find((ab => null === ab.angle || null === bb ? ab.angle === bb : mb(ab.angle, bb) < .5));
        if (!Tb) {
          const ab = document.createElement("div");
          ab.className = "FrontlineDamageFlash";
          const Ub = ab.appendChild(document.createElement("div"));
          Ub.className = "FrontlineDamageFlashGlow", this.root.insertBefore(ab, this.arcLayer), Tb = {
            element: ab,
            glow: Ub,
            angle: bb,
            level: 0,
            animation: null
          }, this.flashes.push(Tb)
        }
        const Eb = null === (Ub = Tb.animation) || void 0 === Ub || null === (Ab = Ub.effect) || void 0 === Ab ? void 0 : Ab.getComputedTiming().progress,
          Yb = null === Eb || void 0 === Eb ? 0 : Tb.level * (1 - Eb);
        Tb.level = Math.min(1, Math.max(ab, Yb + .6 * ab)), Tb.angle = bb;
        const {
          x: Bb,
          y: eb,
          rx: vb,
          ry: Lb
        } = function(bb, ab) {
          const Ub = window.innerWidth,
            Ab = window.innerHeight;
          if (null === bb) return {
            x: Ub / 2,
            y: Ab / 2,
            rx: 0,
            ry: 0
          };
          const Mb = Math.sin(bb),
            Tb = -Math.cos(bb),
            Eb = Ub / 2 / Math.max(1e-6, Math.abs(Mb)),
            Yb = Ab / 2 / Math.max(1e-6, Math.abs(Tb)),
            Bb = Math.min(Eb, Yb),
            eb = Math.round(Ub / 2 + Mb * Bb),
            vb = Math.round(Ab / 2 + Tb * Bb),
            Lb = Ab / 100 * (.85 + .25 * ab),
            Pb = Eb <= Yb,
            Xb = Math.round((Pb ? 30 : 74) * Lb),
            jb = Math.round((Pb ? 58 : 26) * Lb);
          return {
            x: eb,
            y: vb,
            rx: Xb,
            ry: jb
          }
        }(bb, Tb.level), {
          style: Pb
        } = Tb.glow;
        Tb.glow.classList.toggle("Everywhere", null === bb), Pb.setProperty("--glowX", `${Bb}px`), Pb.setProperty("--glowY", `${eb}px`), Pb.setProperty("--glowRx", `${vb}px`), Pb.setProperty("--glowRy", `${Lb}px`), Tb.element.style.transformOrigin = `${Bb}px ${eb}px`, null === (Mb = Tb.animation) || void 0 === Mb || Mb.cancel();
        const Xb = Tb.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Tb.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Tb.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Tb.level
        });
        Tb.animation = Xb;
        const jb = Tb;
        Xb.onfinish = () => {
          jb.animation === Xb && (jb.element.remove(), Nb(this.flashes, jb))
        }
      }
      clearHits() {
        for (const Ab of this.arcs) {
          var bb, ab;
          null === (bb = Ab.fade) || void 0 === bb || bb.cancel(), Ab.fade = null, null === (ab = Ab.pop) || void 0 === ab || ab.cancel(), Ab.element.remove()
        }
        this.arcs.length = 0;
        for (const Ab of this.flashes) {
          var Ub;
          null === (Ub = Ab.animation) || void 0 === Ub || Ub.cancel(), Ab.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function mb(bb, ab) {
      return Math.abs(Math.atan2(Math.sin(bb - ab), Math.cos(bb - ab)))
    }

    function pb(bb) {
      return Math.max(0, Math.min(1, bb))
    }

    function Nb(bb, ab) {
      const Ub = bb.indexOf(ab); - 1 !== Ub && bb.splice(Ub, 1)
    }
    var Wb = Ub(984),
      Hb = Ub.n(Wb),
      Ib = Ub(36013),
      db = Ub(36090),
      Fb = Ub(1134),
      hb = Ub(1345);
    const Gb = "frontlineHudChanged",
      Qb = "frontlineScoreboardChanged";
    class qb {
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
      aj(bb) {
        this.wire = bb, eb.m.IR(Gb, bb, !0)
      }
      receiveScoreboard(bb) {
        let ab = "scoreboard" === bb[0] ? performance.now() + bb[5] : 0;
        const Ub = this.scoreboard.endsAt;
        0 !== ab && 0 !== Ub && Math.abs(ab - Ub) < 1e3 && (ab = Ub), this.scoreboard = {
          wire: bb,
          endsAt: ab
        }, eb.m.IR(Qb, this.scoreboard, !0)
      }
    }
    var ub = Ub(1023);
    const rb = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Kb(bb) {
      const [ab, Ub] = (0, Mb.useState)((() => (bb - performance.now()) / 1e3));
      return (0, Mb.useEffect)((() => {
        if (0 === bb) return;
        const ab = () => {
          Ub((bb - performance.now()) / 1e3)
        };
        ab();
        const Ab = window.setInterval(ab, 250);
        return () => {
          window.clearInterval(Ab)
        }
      }), [bb]), ab
    }

    function ob(bb) {
      let {
        className: ab,
        point: Ub
      } = bb;
      const [Ab, Mb, Tb, Eb, Yb, Bb] = Ub;
      return (0, ub.jsxs)("div", {
        className: Hb()(ab, `Owner-${Mb||"None"}`, `Leader-${Eb||"None"}`, {
          Contested: Yb,
          Here: Bb
        }),
        children: [(0, ub.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Ab
        }), (0, ub.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Tb}%`
          }
        })]
      })
    }
    const lb = (0, Mb.memo)((function(bb) {
        let {
          points: ab,
          markers: Ub
        } = bb;
        const {
          t: Ab
        } = (0, Fb.A)();
        return ab ? (0, ub.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: ab.map((bb => {
            const [ab, , , , , , , Mb] = bb;
            return (0, ub.jsxs)("div", {
              ref: Ub.bindMarker(ab),
              className: "FrontlinePointMarker",
              children: [(0, ub.jsx)(ob, {
                className: "FrontlinePointMarkerTile",
                point: bb
              }), (0, ub.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Mb && (0, ub.jsx)("span", {
                  className: Hb()("FrontlinePointMarkerHomeTurf", `Team-${Mb}`),
                  children: Ab("frontlineHud:homeTurf", {
                    team: Ab(rb[Mb])
                  })
                }), (0, ub.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, ab)
          }))
        }) : null
      })),
      tb = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      wb = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function sb(bb) {
      let {
        hud: ab,
        crosshair: Ub,
        damage: Ab,
        markers: Mb
      } = bb;
      const Tb = (0, hb.i)(Gb, ab.getWire()),
        Eb = (0, hb.i)(Qb, ab.getScoreboard());
      return (0, ub.jsxs)(ub.Fragment, {
        children: [(0, ub.jsx)(gb, {
          damage: Ab
        }), (0, ub.jsx)(lb, {
          points: "scoreboard" === Eb.wire[0] ? Eb.wire[6] : null,
          markers: Mb
        }), (0, ub.jsx)(Vb, {
          view: Eb
        }), (0, ub.jsx)("div", {
          className: "FrontlineReticle",
          ref: Ub.bindElement
        }), (0, ub.jsx)(Ib.e, {
          children: (0, ub.jsx)(Cb, {
            wire: Tb
          })
        })]
      })
    }
    const gb = (0, Mb.memo)((function(bb) {
        let {
          damage: ab
        } = bb;
        return (0, ub.jsxs)("div", {
          className: "FrontlineDamage",
          ref: ab.bindElement,
          children: [(0, ub.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, ub.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, ub.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Cb = (0, Mb.memo)((function(bb) {
        let {
          wire: ab
        } = bb;
        const {
          t: Ub
        } = (0, Fb.A)();
        if ("capture" === ab[0]) {
          const [, bb, Ab, Mb, Tb, Eb, Yb] = ab, Bb = Math.round(Mb / 100 * 24);
          return (0, ub.jsxs)("div", {
            className: Hb()("FrontlinePlate", `Status-${Ab}`, `Leader-${Tb||"None"}`),
            children: [(0, ub.jsx)(nb, {}), (0, ub.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, ub.jsx)("span", {
                className: "FrontlineObjective",
                children: bb
              }), (0, ub.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, ub.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Ub("frontlineHud:objective", {
                    point: bb,
                    friendly: Eb,
                    enemy: Yb
                  })
                }), (0, ub.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Ub(tb[Ab])
                })]
              }), (0, ub.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Mb).padStart(3, "0"), (0, ub.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, ub.jsx)(cb, {
              segments: 24,
              lit: Bb
            })]
          })
        }
        if ("alert" === ab[0]) {
          const [, bb, Ab, Mb] = ab;
          return (0, ub.jsxs)("div", {
            className: Hb()("FrontlinePlate", "FrontlineAlert", `Tone-${Mb}`),
            children: [(0, ub.jsx)(nb, {}), (0, ub.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Ub(wb[bb])
            }), (0, ub.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Ab
            })]
          })
        }
        return null
      })),
      Vb = (0, Mb.memo)((function(bb) {
        let {
          view: ab
        } = bb;
        const {
          t: Ub
        } = (0, Fb.A)(), Ab = (0, Mb.useRef)(null), Tb = function(bb, ab) {
          const [Ub, Ab] = (0, Mb.useState)(!1);
          return (0, Mb.useLayoutEffect)((() => {
            const ab = bb.current;
            if (!ab) return;
            const Ub = document.querySelector(`.${db.e}`),
              Mb = document.querySelector(`.${db.g}`),
              Tb = () => {
                var bb;
                const Tb = ab.querySelector(".FrontlineTeamTrack"),
                  Eb = (0, Bb.getRemInPx)(),
                  Yb = ab.getBoundingClientRect().width - 2 * (null !== (bb = null === Tb || void 0 === Tb ? void 0 : Tb.getBoundingClientRect().width) && void 0 !== bb ? bb : 0),
                  eb = window.innerWidth / 2,
                  vb = Ub ? Ub.getBoundingClientRect().right : 0,
                  Lb = Mb ? Mb.getBoundingClientRect().left : window.innerWidth,
                  Pb = Math.min(eb - vb, Lb - eb) - db.c - Yb / 2,
                  Xb = Pb < 6 * Eb,
                  jb = Xb ? (window.innerWidth - Yb) / 2 - db.c : Pb;
                ab.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(jb,14*Eb)))}px`), Ab(Xb)
              };
            Tb();
            const Eb = new ResizeObserver(Tb);
            for (const bb of [ab, Ub, Mb]) bb && Eb.observe(bb);
            return window.addEventListener("resize", Tb), () => {
              Eb.disconnect(), window.removeEventListener("resize", Tb)
            }
          }), [bb, ab]), Ub
        }(Ab, "scoreboard" === ab.wire[0]);
        if ("scoreboard" !== ab.wire[0]) return null;
        const [, Eb, Yb, eb, vb, , Lb] = ab.wire, Pb = "Red" === Eb ? "Blue" : "Red";
        return (0, ub.jsxs)("div", {
          className: Hb()("FrontlineScoreboardContainer", {
            Below: Tb
          }),
          children: [(0, ub.jsxs)("div", {
            ref: Ab,
            className: "FrontlineScoreboard",
            children: [(0, ub.jsx)(nb, {}), (0, ub.jsx)(Ob, {
              team: Eb,
              tickets: Yb,
              goal: vb,
              side: "Friendly"
            }), (0, ub.jsx)("div", {
              className: "FrontlinePoints",
              children: Lb.map((bb => (0, ub.jsx)(ob, {
                className: "FrontlinePoint",
                point: bb
              }, bb[0])))
            }), (0, ub.jsx)(Ob, {
              team: Pb,
              tickets: eb,
              goal: vb,
              side: "Enemy"
            })]
          }), (0, ub.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, ub.jsx)(Jb, {
              endsAt: ab.endsAt
            }), (0, ub.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Ub("frontlineHud:ticketGoal", {
                goal: vb
              })
            })]
          })]
        })
      }));

    function Ob(bb) {
      let {
        team: ab,
        tickets: Ub,
        goal: Ab,
        side: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Fb.A)(), Eb = String(Ub).padStart(3, "0"), Yb = Eb.search(/[1-9]/), Bb = -1 === Yb ? Eb : Eb.slice(0, Yb), eb = Math.min(20, Math.floor(Ub / Ab * 20));
      return (0, ub.jsxs)("div", {
        className: Hb()("FrontlineTeamScore", Mb, `Team-${ab}`),
        children: [(0, ub.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, ub.jsx)("span", {
            className: "Lead",
            children: Bb
          }), -1 !== Yb && Eb.slice(Yb)]
        }), (0, ub.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, ub.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Tb(rb[ab])
          }), (0, ub.jsx)(cb, {
            segments: 20,
            lit: eb
          })]
        })]
      })
    }

    function cb(bb) {
      let {
        segments: ab,
        lit: Ub
      } = bb;
      return (0, ub.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: ab
        }, ((bb, ab) => (0, ub.jsx)("i", {
          className: Hb()({
            Lit: ab < Ub
          })
        }, ab)))
      })
    }

    function Jb(bb) {
      let {
        endsAt: ab
      } = bb;
      const Ub = Math.max(0, Math.ceil(Kb(ab)));
      return (0, ub.jsxs)("div", {
        className: Hb()("FrontlineClock", {
          Urgent: Ub <= 60
        }),
        children: [Math.floor(Ub / 60), ":", String(Ub % 60).padStart(2, "0")]
      })
    }

    function nb() {
      return (0, ub.jsxs)(ub.Fragment, {
        children: [(0, ub.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ub.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Sb = Ub(36086),
      ba = Ub(1198),
      aa = Ub(37827),
      Ua = Ub(37865);
    class Aa {
      constructor(bb) {
        var ab;
        this.hud = bb, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.cX = !1, this.bZ = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.bZ), null === (ab = window.visualViewport) || void 0 === ab || ab.addEventListener("resize", this.bZ)
      }
      bindMarker(bb) {
        let ab = this.refs.get(bb);
        return ab || (ab = ab => {
          var Ub;
          null === (Ub = this.markers.get(bb)) || void 0 === Ub || Ub.stopObserving(), this.markers.delete(bb), ab && !this.cX && this.markers.set(bb, this.mount(ab))
        }, this.refs.set(bb, ab)), ab
      }
      frame(bb, ab) {
        this.render = bb;
        const Ub = this.hud.getScoreboard().wire;
        if ("scoreboard" === Ub[0] && 0 !== this.markers.size)
          for (const [Ab, , , , , , Mb] of Ub[6]) {
            const bb = this.markers.get(Ab);
            bb && Mb && (bb.target ??= [0, 0, 0], bb.target[0] = Mb[0], bb.target[1] = Mb[1] + 2.5, bb.target[2] = Mb[2], this.place(bb), this.nM(bb, ab && Math.hypot(Mb[0] - ab[0], Mb[1] - ab[1], Mb[2] - ab[2])))
          }
      }
      dispose() {
        var bb;
        this.cX = !0, window.removeEventListener("resize", this.bZ), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", this.bZ);
        for (const ab of this.markers.values()) ab.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(bb) {
        const {
          render: ab,
          viewport: Ub
        } = this;
        if (!ab || !bb.target) return;
        const Ab = (50 - ab.screenBandPct.y) / 100 * Ub.height,
          Mb = {
            x: bb.halfSize.width + 8,
            top: bb.halfSize.height + 8,
            bottom: bb.halfSize.height + bb.labelsBelow + Ab
          },
          Tb = ab.projectWorldPosToViewport(bb.target),
          Eb = null !== Tb && void 0 !== Tb ? Tb : ab.projectWorldPosToScreenPos(bb.target),
          Yb = (0, Ua.b)({
            x: Eb.x,
            y: Eb.y,
            text: Tb
          }, Mb, Ub);
        (0, aa.d)(bb.root, Math.round(100 * Yb.x) / 100, Math.round(100 * Yb.y) / 100)
      }
      nM(bb, ab) {
        if (null === ab) return void(null !== bb.metres && (bb.metres = null, bb.distance.textContent = ""));
        const Ub = Date.now();
        (null === bb.metres || (0, Sb.d)(ab, bb.metres, bb.metresShownAt)) && (bb.metres = Math.round(ab), bb.metresShownAt = Ub, bb.distance.textContent = (0, Fb.w)(ba.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(bb.metres)
        }))
      }
      mount(bb) {
        const ab = {
            root: bb,
            distance: bb.querySelector(".FrontlinePointMarkerDistance"),
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
          Ub = bb.querySelector(".FrontlinePointMarkerLabels"),
          Ab = new ResizeObserver((() => {
            ab.halfSize = {
              width: Math.max(bb.offsetWidth, Ub.offsetWidth) / 2,
              height: bb.offsetHeight / 2
            }, ab.labelsBelow = Ub.offsetTop + Ub.offsetHeight - bb.offsetHeight, this.place(ab)
          }));
        return Ab.observe(bb, {
          box: "border-box"
        }), Ab.observe(Ub, {
          box: "border-box"
        }), ab.stopObserving = () => {
          Ab.disconnect()
        }, ab
      }
    }
    var Ma = Ub(6050),
      Ta = Ub(2424);
    const Ea = "frontlineRoundEndChanged";
    class Ya {
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
      aj(bb) {
        const ab = "roundEnd" === bb[0] ? performance.now() + bb[5] : 0;
        this.view = {
          wire: bb,
          key: this.view.key + 1,
          endsAt: ab
        }, eb.m.IR(Ea, this.view, !0)
      }
    }
    const Ba = (0, Mb.lazy)((() => (0, Ta.e)(Ub.e(191).then((() => Ub(40863))), (bb => bb.FrontlineMvpLineup)))),
      ea = [4800, 4e3, 3200],
      va = [1, 0, 2],
      La = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Pa = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Xa(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, hb.i)(Ea, ab.getView()),
        Ab = Kb(Ub.endsAt);
      return "roundEnd" !== Ub.wire[0] || 1e3 * Ab < -2e3 ? null : (0, ub.jsx)(ja, {
        wire: Ub.wire,
        secondsLeft: Math.max(0, Math.ceil(Ab))
      }, Ub.key)
    }
    const ja = (0, Mb.memo)((function(bb) {
      let {
        wire: ab,
        secondsLeft: Ub
      } = bb;
      const {
        t: Tb
      } = (0, Fb.A)(), [, Eb, Yb, Bb, eb, , vb, Lb] = ab, Pb = (0, Mb.useMemo)((() => va.filter((bb => bb < Lb.length))), [Lb]), Xb = (0, Mb.useMemo)((() => Pb.map((bb => {
        const [, , , , , ab, Ub] = Lb[bb];
        return {
          cosmetics: Ab.map(((bb, Ub) => [bb, ab[Ub]])),
          size: 0 === bb ? 1.15 : .85,
          heldGun: {
            name: Ub,
            aimed: 0 === bb
          },
          showAfterMs: ea[bb]
        }
      }))), [Lb, Pb]);
      return (0, ub.jsxs)("div", {
        className: Hb()("FrontlineRoundEnd", `Result-${Eb}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, ub.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, ub.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, ub.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, ub.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, ub.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (jb = Tb(La[Eb]), /\p{Script=Arabic}/u.test(jb) ? [jb] : (0, Ma.c)(jb)).map(((bb, ab) => (0, ub.jsx)("span", {
              style: {
                "--letter": ab
              },
              children: bb
            }, ab)))]
          }), (0, ub.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Yb && "victory" === Eb && (0, ub.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Tb("frontlineRoundEnd:comeback")
            }), (0, ub.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, ub.jsx)("b", {
                className: "Friendly",
                children: Bb
              }), " \u2013 ", (0, ub.jsx)("b", {
                className: "Enemy",
                children: eb
              })]
            })]
          })]
        }), Pb.length > 0 && (0, ub.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Pb.length
          },
          children: [(0, ub.jsx)(Mb.Suspense, {
            fallback: null,
            children: (0, ub.jsx)(Ba, {
              className: "FrontlineRoundEndLineup",
              players: Xb
            })
          }), Pb.map((bb => (0, ub.jsx)(Ra, {
            mvp: Lb[bb],
            place: bb
          }, bb)))]
        }), (0, ub.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Tb("frontlineRoundEnd:nextFront", {
            map: vb,
            seconds: String(Ub)
          })
        })]
      });
      var jb
    }));

    function Ra(bb) {
      let {
        mvp: ab,
        place: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Fb.A)(), [Mb, Tb, Eb, Yb, Bb] = ab, [eb, vb] = Ab(function(bb, ab) {
        return 1 === ab && "damage" !== bb ? `frontlineRoundEnd:${bb}One` : `frontlineRoundEnd:${bb}`
      }(Eb, Yb), {
        name: "\0",
        count: Yb.toLocaleString()
      }).split("\0");
      return (0, ub.jsxs)("div", {
        className: Hb()("FrontlineMvpCard", `Place-${Ub+1}`, `Team-${Tb}`),
        style: {
          "--revealMs": `${ea[Ub]}ms`
        },
        children: [(0, ub.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ub.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, ub.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Ab(Pa[Ub])
        }), (0, ub.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [eb, (0, ub.jsx)("span", {
            className: "FrontlineMvpName",
            children: Mb
          }), vb]
        }), (0, ub.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Bb
        })]
      })
    }
    const ka = function(bb, ab, Ub, Ab) {
      let {
        localPlayerId: Eb
      } = Ab;
      const Yb = new qb,
        Bb = new Ya;
      let eb = null,
        vb = null,
        Lb = null,
        Pb = null,
        Xb = null,
        jb = [!1, !1];
      const Rb = () => {
        var bb, ab;
        const [Ub, Ab] = jb;
        null === (bb = vb) || void 0 === bb || bb.Yz(!Ub), null === (ab = Lb) || void 0 === ab || ab.Yz(!Ab)
      };
      return {
        onCreate: bb => {
          eb = bb, vb = new Db(bb, Eb), Lb = new fb(bb, Eb), Pb = new Aa(Yb), Rb(), Xb = (0, Tb.w)((0, Mb.createElement)(Mb.Fragment, null, (0, Mb.createElement)(sb, {
            hud: Yb,
            crosshair: vb,
            damage: Lb,
            markers: Pb
          }), (0, Mb.createElement)(Xa, {
            controller: Bb
          })))
        },
        onClose: () => {
          var bb, ab, Ub, Ab;
          null === (bb = Xb) || void 0 === bb || bb(), null === (ab = vb) || void 0 === ab || ab.dispose(), vb = null, null === (Ub = Lb) || void 0 === Ub || Ub.dispose(), Lb = null, null === (Ab = Pb) || void 0 === Ab || Ab.dispose(), Pb = null, eb = null
        },
        onAfterRender: (bb, ab) => {
          var Ub, Ab, Mb, Tb;
          null === (Ub = vb) || void 0 === Ub || Ub.frame(bb, ab.tanHalfFovY), null === (Ab = Lb) || void 0 === Ab || Ab.frame(ab.cameraHeading), null === (Mb = Pb) || void 0 === Mb || Mb.frame(ab, null !== (Tb = eb) && void 0 !== Tb && Tb.checkValid(Eb) ? eb.eZ(Eb) : null)
        },
        onReceivedMessageFromServer: (bb, ab) => {
          "frontlineHud" === bb ? Yb.aj(ab) : "frontlineScoreboard" === bb ? Yb.receiveScoreboard(ab) : "frontlineRoundEnd" === bb ? Bb.aj(ab) : "frontlinePrefs" === bb && (jb = ab, Rb())
        }
      }
    }
  },
  6050: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb
    });
    const Ab = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Mb(bb) {
      return null === Ab ? Array.from(bb) : Array.from(Ab.segment(bb), (bb => {
        let {
          segment: ab
        } = bb;
        return ab
      }))
    }
  },
  37827: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      e: () => Tb
    });
    const Ab = new WeakMap;

    function Mb(bb) {
      let ab = Ab.get(bb);
      return ab || (ab = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, Ab.set(bb, ab)), ab
    }

    function Tb(bb, ab) {
      const Ub = Mb(bb);
      Ub.hidden !== ab && (Ub.hidden = ab, bb.hidden = ab)
    }

    function Eb(bb, ab, Ub) {
      const Ab = Mb(bb);
      Ab.x === ab && Ab.y === Ub || (Ab.x = ab, Ab.y = Ub, bb.style.translate = `${ab}vw ${Ub}vh`)
    }
  },
  36373: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    const Ab = {
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
for (const bb in modules) Object.freeze(modules[bb]);