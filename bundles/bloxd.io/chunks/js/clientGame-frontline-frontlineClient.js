export const id = 17;
export const ids = [17];
export const modules = {
  36235: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => nb,
      e: () => mb,
      i: () => Xb,
      j: () => Mb
    });
    var kb = sb(8917),
      Wb = sb(36240),
      ab = sb(36247),
      Tb = sb(8330),
      Ub = sb(1423),
      Ib = sb(64),
      Hb = sb(89),
      fb = sb(1087);

    function Mb() {
      var bb;
      return (0, Ub.h)(Wb.c, (0, Wb.l)()), (0, fb.jsx)(fb.Fragment, {
        children: null === (bb = (0, Wb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Xb(bb) {
      var cb;
      let {
        show: sb
      } = bb;
      (0, Ub.h)(Wb.c, (0, Wb.l)());
      const Hb = null === (cb = (0, Wb.l)()) || void 0 === cb ? void 0 : cb.menu;
      return (0, Ib.useEffect)((() => {
        var bb;
        sb || (null === Hb || void 0 === Hb || null === (bb = Hb.onClose) || void 0 === bb || bb.call(Hb), (0, ab.o)())
      }), [sb, Hb]), (0, Ib.useEffect)((() => sb ? (0, Tb.e)(ab.v, ab.g) : void 0), [sb]), (0, fb.jsx)(kb.b, {
        showing: sb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hb || void 0 === Hb ? void 0 : Hb.content
      })
    }

    function nb(bb) {
      let {
        placement: cb = "bottom"
      } = bb;
      return (0, fb.jsx)("div", {
        id: `clientGameHud-${cb}`,
        style: {
          display: "contents"
        }
      })
    }

    function mb(bb) {
      let {
        children: cb,
        placement: sb = "bottom"
      } = bb;
      const [kb, Wb] = (0, Ib.useState)(null);
      return (0, Ib.useEffect)((() => {
        Wb(document.getElementById(`clientGameHud-${sb}`))
      }), [sb]), kb ? (0, Hb.createPortal)(cb, kb) : null
    }
  },
  8917: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(4275),
      Wb = sb(4282);

    function ab(bb) {
      let {
        children: cb,
        showing: sb,
        globallyUniqueKey: ab,
        alwaysMountChildren: Tb = !1,
        doGameplayStartStopOnShow: Ub = !0,
        keepsMovement: Ib = !1
      } = bb;
      return (0, Wb.d)(!0, sb, ab, Ib), (0, kb.e)(Ub, sb), sb || Tb ? cb : null
    }
  },
  36334: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      i: () => Tb,
      l: () => Ub,
      n: () => Ib
    });
    var kb = sb(64),
      Wb = sb(1113);
    const ab = 8,
      Tb = "InGameHeaderContainer",
      Ub = "TopRightElements";

    function Ib(bb) {
      const [cb] = (0, Wb.c)(), [sb, Ib] = (0, kb.useState)(!1);
      return (0, kb.useLayoutEffect)((() => {
        if (!bb) return;
        const cb = document.querySelector(`.${Tb}`),
          sb = document.querySelector(`.${Ub}`),
          kb = () => {
            const kb = bb.getBoundingClientRect(),
              Wb = cb ? cb.getBoundingClientRect().right : 0,
              Tb = sb ? sb.getBoundingClientRect().left : window.innerWidth,
              Ub = kb.left < Wb + ab,
              Hb = kb.right > Tb - ab;
            Ib(Ub || Hb)
          };
        kb();
        const Wb = new ResizeObserver(kb);
        return Wb.observe(bb), cb && Wb.observe(cb), sb && Wb.observe(sb), () => {
          Wb.disconnect()
        }
      }), [bb, cb]), sb
    }
  },
  36328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    const kb = [{
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

    function Wb(bb, cb, sb) {
      const Wb = Math.abs(bb - cb),
        ab = Date.now() - sb;
      for (const Tb of kb)
        if (bb < Tb.maxDist) return Wb >= Tb.hardUpdateDist || ab > Tb.timeBetweenSoftChecks && Wb >= Tb.softUpdateDist;
      return !1
    }
  },
  8330: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      e: () => Wb
    });
    let kb = null;
    const Wb = function(bb) {
        const cb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return kb = cb, () => {
          kb === cb && (kb = null)
        }
      },
      ab = () => {
        var bb;
        return null !== (bb = kb) && void 0 !== bb && bb.canCycle() ? kb.cycle : null
      }
  },
  38137: (bb, cb, sb) => {
    function kb(bb, cb, sb) {
      var kb;
      const {
        width: Wb,
        height: ab
      } = sb, Tb = null !== (kb = bb.text) && void 0 !== kb ? kb : bb, Ub = (Tb.x / 100 - .5) * Wb, Ib = (Tb.y / 100 - .5) * ab, Hb = Wb / 2 - cb.x;
      if (null !== bb.text && Math.abs(Ub) <= Hb && Ib >= cb.top - ab / 2 && Ib <= ab / 2 - cb.bottom) return {
        x: Tb.x,
        y: Tb.y
      };
      const fb = Math.min(0 === Ub ? 1 / 0 : Hb / Math.abs(Ub), Ib > 0 ? (ab / 2 - cb.bottom) / Ib : Ib < 0 ? (cb.top - ab / 2) / Ib : 1 / 0);
      return !Number.isFinite(fb) || fb < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Ub * fb / Wb * 100,
        y: 50 + Ib * fb / ab * 100
      }
    }
    sb.d(cb, {
      e: () => kb
    })
  },
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  39007: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Qc
    });
    const kb = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Wb = sb(64),
      ab = sb(36240),
      Tb = sb(36604),
      Ub = sb(36258),
      Ib = sb(1704),
      Hb = sb(26);
    const fb = {
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
    const Mb = 32;

    function Xb(bb, cb, sb, kb) {
      return {
        tag: "line",
        attrs: {
          x1: bb,
          y1: cb,
          x2: sb,
          y2: kb,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function nb(bb) {
      return {
        tag: "circle",
        attrs: {
          cx: Mb,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb,
          r: bb,
          class: "Fill"
        }
      }
    }

    function mb(bb, cb) {
      return {
        tag: "path",
        attrs: {
          d: bb,
          "stroke-width": cb
        }
      }
    }

    function lb(bb, cb, sb) {
      return {
        tag: "circle",
        attrs: {
          cx: Mb,
          cy: Mb,
          r: bb,
          "stroke-width": cb,
          class: sb
        }
      }
    }

    function Qb(bb, cb, sb) {
      return {
        tag: "text",
        attrs: {
          x: bb,
          y: cb,
          class: "Fill Label"
        },
        text: sb
      }
    }
    const eb = {
      pistol: bb => [Xb(Mb, Mb - bb - 5, Mb, Mb - bb), Xb(Mb - bb - 5, Mb, Mb - bb, Mb), Xb(Mb + bb, Mb, Mb + bb + 5, Mb), nb(1.4)],
      rifle: bb => [Xb(Mb, Mb - bb - 8, Mb, Mb - bb), Xb(Mb, Mb + bb, Mb, Mb + bb + 8), Xb(Mb - bb - 8, Mb, Mb - bb, Mb), Xb(Mb + bb, Mb, Mb + bb + 8, Mb), nb(1)],
      smg: bb => {
        const cb = Math.PI / 2,
          sb = [];
        for (let Tb = 0; Tb < 4; Tb++) sb.push((Wb = Tb * cb + .35, ab = (Tb + 1) * cb - .35, mb(`M${Mb+(kb=6+bb)*Math.cos(Wb)} ${Mb+kb*Math.sin(Wb)} A${kb} ${kb} 0 0 1 ${Mb+kb*Math.cos(ab)} ${Mb+kb*Math.sin(ab)}`, 2)));
        var kb, Wb, ab;
        return [...sb, nb(1.4)]
      },
      shotgun: bb => [lb(bb, 3, "Ring Outline"), lb(bb, 1.5, "Ring")],
      marksman: bb => [mb(`M${26-bb/2} ${39+bb/2} L32 33 L${38+bb/2} ${39+bb/2}`, 2), Xb(14 - bb, Mb, 24 - bb, Mb, 1.5), Xb(40 + bb, Mb, 50 + bb, Mb, 1.5), Xb(14 - bb, 30, 14 - bb, 34, 1.5), Xb(50 + bb, 30, 50 + bb, 34, 1.5)],
      machineGun: bb => {
        const cb = 10 + bb,
          sb = [];
        for (const [kb, Wb] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) sb.push(mb(`M${Mb+kb*cb} ${Mb+Wb*(cb-5)} L${Mb+kb*cb} ${Mb+Wb*cb} L${Mb+kb*(cb-5)} ${Mb+Wb*cb}`, 2));
        return [...sb, Xb(Mb, 28, Mb, 36, 1.5), Xb(28, Mb, 36, Mb, 1.5)]
      },
      launcher: () => [Xb(14, 30, 50, 30, 1.5), Xb(Mb, 24, Mb, 52, 1.5), Xb(28, 38, 36, 38, 1.5), Xb(29, 44, 35, 44, 1.5), Xb(30, 50, 34, 50, 1.5), Qb(38, 40, "100"), Qb(37, 46, "200"), nb(1.4, 30)],
      melee: () => [mb("M32 26 L38 32 L32 38 L26 32 Z", 1.5), nb(1.2)],
      throwable: () => [nb(1.6)]
    };

    function Cb(bb) {
      let {
        tag: cb,
        attrs: sb,
        text: kb
      } = bb, Wb = `<${cb}`;
      for (const [ab, Tb] of Object.entries(sb)) Wb += ` ${ab}="${Tb}"`;
      return void 0 === kb ? `${Wb}/>` : `${Wb}>${kb}</${cb}>`
    }
    class Nb {
      constructor(bb, cb) {
        this.api = bb, this.localPlayerId = cb, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = bb => {
          this.element = bb, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, bb && !this.enabled && (bb.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Ib.getRemInPx)()))
        }, this.tokens = [Hb.j.subscribe("aimingOverlay", (bb => {
          this.sniperOverlay = "sniper" === bb
        })), Hb.j.subscribe("mouseState", (bb => {
          let {
            isDown: cb
          } = bb;
          this.mouseDown = cb
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      GV(bb) {
        bb !== this.enabled && (this.enabled = bb, this.drawnVisible = null, bb || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(bb, cb) {
        var sb, kb;
        if (!this.enabled) return;
        const {
          api: Wb
        } = this, ab = Wb.isAlive(this.localPlayerId) && null !== (sb = null === (kb = Wb.Xcb(this.localPlayerId)) || void 0 === kb ? void 0 : kb.name) && void 0 !== sb ? sb : null, Tb = (Ub = ab) && fb[Ub] || null;
        var Ub;
        if (this.setOwnsCrosshair(null !== Tb), !this.element) return;
        const Ib = Wb.getHeldGunInaccuracy(),
          Hb = null !== Ib,
          Mb = null !== Tb && !this.sniperOverlay && Wb.isCrosshairShown();
        if (Mb !== this.drawnVisible && (this.drawnVisible = Mb, this.element.style.display = Mb ? "block" : "none"), !Mb) return;
        const Xb = Hb ? function(bb) {
            return "launcher" === bb || "melee" === bb || "throwable" === bb ? "none" : "shotgun" === bb ? "cone" : "offset"
          }(Tb) : "none",
          nb = null !== Ib && void 0 !== Ib ? Ib : 0;
        "cone" === Xb ? this.drawCone(Tb, this.coneRadiusVh(nb, cb) * this.gapPerVh, bb) : (this.coneDrawn = !1, this.draw(Tb, "none" === Xb ? 2 : this.offsetGap(nb)));
        const mb = !Hb && this.mouseDown;
        mb !== this.drawnPressed && (this.drawnPressed = mb, this.element.classList.toggle("Pressed", mb))
      }
      dispose() {
        for (const bb of this.tokens) Hb.j.unsubscribe(bb);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(bb, cb) {
        var sb, kb;
        bb !== this.drawnFamily ? (this.drawnFamily = bb, this.drawnGap = cb, this.element.innerHTML = function(bb, cb) {
          return `<svg viewBox="0 0 64 64">${eb[bb](cb).map(Cb).join("")}</svg>`
        }(bb, cb), this.shapes = Array.from(null !== (sb = null === (kb = this.element.firstElementChild) || void 0 === kb ? void 0 : kb.children) && void 0 !== sb ? sb : [])) : cb !== this.drawnGap && (this.drawnGap = cb, function(bb, cb, sb) {
          const kb = eb[cb](sb);
          for (let Wb = 0; Wb < kb.length; Wb++)
            for (const [cb, sb] of Object.entries(kb[Wb].attrs)) {
              const kb = String(sb);
              bb[Wb].getAttribute(cb) !== kb && bb[Wb].setAttribute(cb, kb)
            }
        }(this.shapes, bb, cb))
      }
      drawCone(bb, cb, sb) {
        bb === this.drawnFamily && this.coneDrawn ? this.shownRadius += (cb - this.shownRadius) * (1 - Math.exp(-sb / 80)) : this.shownRadius = cb, this.coneDrawn = !0, this.draw(bb, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(bb, cb) {
        if (!(cb > 0)) return 1;
        const sb = bb * Tb.h / 2;
        return Math.max(50 * Math.tan(sb) / cb, 1)
      }
      offsetGap(bb) {
        const cb = 2 + ((0, Ub.g)(bb) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * cb) / 2)
      }
      setOwnsCrosshair(bb) {
        bb !== this.ownsCrosshair && (this.ownsCrosshair = bb, document.body.classList.toggle("FrontlineCustomCrosshair", bb))
      }
    }
    const Vb = "FrontlineCustomDamage",
      Lb = .45,
      ub = .2;
    class Yb {
      constructor(bb, cb) {
        this.api = bb, this.localPlayerId = cb, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.vW = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = bb => {
          var cb, sb;
          this.clearHits(), this.root = bb, this.lowLayer = null !== (cb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".FrontlineDamageLow")) && void 0 !== cb ? cb : null, this.arcLayer = null !== (sb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".FrontlineDamageArcs")) && void 0 !== sb ? sb : null, this.showRoot(), this.drawLow()
        }, this.token = Hb.j.subscribe("damagedByOtherPlayer", (bb => {
          let {
            direction: cb,
            SW: sb
          } = bb;
          this.onHurt(cb, sb)
        })), this.syncHealth(), document.body.classList.add(Vb)
      }
      GV(bb) {
        bb !== this.enabled && (this.enabled = bb, document.body.classList.toggle(Vb, bb), bb || this.clearHits(), this.showRoot())
      }
      frame(bb) {
        this.syncHealth(), this.cameraHeading = bb;
        for (const cb of this.arcs) this.drawArcAngle(cb)
      }
      dispose() {
        Hb.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Vb)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const bb = this.api.getClientOption(this.localPlayerId, "_health"),
          cb = this.api.getClientOption(this.localPlayerId, "_shield"),
          sb = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(bb, this.readHealth) && Object.is(cb, this.readShield) && Object.is(sb, this.readMaxHealth)) return;
        if (this.readHealth = bb, this.readShield = cb, this.readMaxHealth = sb, null === bb || void 0 === bb || !sb) return this.lastHealthPool = null, this.maxHealth = null, this.vW = 1, this.dead = !1, void this.drawLow();
        const kb = bb + (null !== cb && void 0 !== cb ? cb : 0);
        if (null !== this.lastHealthPool && kb < this.lastHealthPool) {
          const bb = performance.now(),
            cb = (this.lastHealthPool - kb) / sb;
          this.lastDrop = bb - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + cb,
            at: this.lastDrop.at
          } : {
            frac: cb,
            at: bb
          }
        }
        this.dead = bb <= 0, this.dead && this.clearHits(), this.lastHealthPool = kb, this.maxHealth = sb, this.vW = bb > 0 ? bb / sb : 1, this.drawLow()
      }
      onHurt(bb, cb) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const sb = Math.min(1, this.takeDamageFrac(cb) / .3);
        null !== bb && this.showArc(bb, sb), this.flashEdge(null === bb ? null : bb - this.cameraHeading, .4 + .6 * sb)
      }
      takeDamageFrac(bb) {
        if (void 0 !== bb && this.maxHealth) return bb / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: cb
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, cb
      }
      drawLow() {
        if (!this.lowLayer) return;
        const bb = Jb((Lb - this.vW) / .25),
          cb = Jb((ub - this.vW) / .15000000000000002),
          sb = this.vW < Lb;
        this.lowLayer.classList.toggle("Active", sb), this.lowLayer.classList.toggle("Critical", this.vW < ub), this.lowLayer.style.opacity = String(sb ? .55 + .3 * bb + .15 * cb : 0)
      }
      showArc(bb, cb) {
        var sb, kb;
        if (!this.arcLayer) return;
        let Wb = this.arcs.find((cb => hb(cb.direction, bb) < .6));
        if (!Wb) {
          const cb = document.createElement("div");
          cb.className = "FrontlineDamageArc", cb.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(cb), Wb = {
            element: cb,
            direction: bb,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Wb)
        }
        Wb.direction = bb, this.drawArcAngle(Wb);
        const ab = Wb.fade ? Number(getComputedStyle(Wb.element).opacity) : 0;
        null === (sb = Wb.fade) || void 0 === sb || sb.cancel(), null === (kb = Wb.pop) || void 0 === kb || kb.cancel(), Wb.element.style.opacity = "1";
        const Tb = Wb.element.animate([{
          opacity: ab
        }, {
          opacity: 1
        }], 144);
        Wb.fade = Tb, Wb.pop = Wb.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * cb
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Ub = Wb;
        Tb.onfinish = () => {
          if (Ub.fade !== Tb) return;
          const bb = Ub.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          bb.startTime = Tb.startTime, Ub.fade = bb, bb.onfinish = () => {
            Ub.fade === bb && (Ub.element.remove(), gb(this.arcs, Ub))
          }
        }
      }
      drawArcAngle(bb) {
        const cb = bb.direction - this.cameraHeading;
        (null === bb.drawnAngle || Math.abs(cb - bb.drawnAngle) > .005) && (bb.drawnAngle = cb, bb.element.style.rotate = `${cb}rad`)
      }
      flashEdge(bb, cb) {
        var sb, kb, Wb;
        if (!this.root) return;
        let ab = this.flashes.find((cb => null === cb.angle || null === bb ? cb.angle === bb : hb(cb.angle, bb) < .5));
        if (!ab) {
          const cb = document.createElement("div");
          cb.className = "FrontlineDamageFlash";
          const sb = cb.appendChild(document.createElement("div"));
          sb.className = "FrontlineDamageFlashGlow", this.root.insertBefore(cb, this.arcLayer), ab = {
            element: cb,
            glow: sb,
            angle: bb,
            level: 0,
            animation: null
          }, this.flashes.push(ab)
        }
        const Tb = null === (sb = ab.animation) || void 0 === sb || null === (kb = sb.effect) || void 0 === kb ? void 0 : kb.getComputedTiming().progress,
          Ub = null === Tb || void 0 === Tb ? 0 : ab.level * (1 - Tb);
        ab.level = Math.min(1, Math.max(cb, Ub + .6 * cb)), ab.angle = bb;
        const {
          x: Ib,
          y: Hb,
          rx: fb,
          ry: Mb
        } = function(bb, cb) {
          const sb = window.innerWidth,
            kb = window.innerHeight;
          if (null === bb) return {
            x: sb / 2,
            y: kb / 2,
            rx: 0,
            ry: 0
          };
          const Wb = Math.sin(bb),
            ab = -Math.cos(bb),
            Tb = sb / 2 / Math.max(1e-6, Math.abs(Wb)),
            Ub = kb / 2 / Math.max(1e-6, Math.abs(ab)),
            Ib = Math.min(Tb, Ub),
            Hb = Math.round(sb / 2 + Wb * Ib),
            fb = Math.round(kb / 2 + ab * Ib),
            Mb = kb / 100 * (.85 + .25 * cb),
            Xb = Tb <= Ub,
            nb = Math.round((Xb ? 30 : 74) * Mb),
            mb = Math.round((Xb ? 58 : 26) * Mb);
          return {
            x: Hb,
            y: fb,
            rx: nb,
            ry: mb
          }
        }(bb, ab.level), {
          style: Xb
        } = ab.glow;
        ab.glow.classList.toggle("Everywhere", null === bb), Xb.setProperty("--glowX", `${Ib}px`), Xb.setProperty("--glowY", `${Hb}px`), Xb.setProperty("--glowRx", `${fb}px`), Xb.setProperty("--glowRy", `${Mb}px`), ab.element.style.transformOrigin = `${Ib}px ${Hb}px`, null === (Wb = ab.animation) || void 0 === Wb || Wb.cancel();
        const nb = ab.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: ab.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * ab.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * ab.level
        });
        ab.animation = nb;
        const mb = ab;
        nb.onfinish = () => {
          mb.animation === nb && (mb.element.remove(), gb(this.flashes, mb))
        }
      }
      clearHits() {
        for (const kb of this.arcs) {
          var bb, cb;
          null === (bb = kb.fade) || void 0 === bb || bb.cancel(), kb.fade = null, null === (cb = kb.pop) || void 0 === cb || cb.cancel(), kb.element.remove()
        }
        this.arcs.length = 0;
        for (const kb of this.flashes) {
          var sb;
          null === (sb = kb.animation) || void 0 === sb || sb.cancel(), kb.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function hb(bb, cb) {
      return Math.abs(Math.atan2(Math.sin(bb - cb), Math.cos(bb - cb)))
    }

    function Jb(bb) {
      return Math.max(0, Math.min(1, bb))
    }

    function gb(bb, cb) {
      const sb = bb.indexOf(cb); - 1 !== sb && bb.splice(sb, 1)
    }
    var Bb = sb(1033),
      tb = sb.n(Bb),
      yb = sb(36235),
      Pb = sb(36334),
      Db = sb(1197),
      Eb = sb(1423);
    const ib = "frontlineHudChanged",
      Ob = "frontlineScoreboardChanged";
    class Gb {
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
      Km(bb) {
        this.wire = bb, Hb.j.QQ(ib, bb, !0)
      }
      receiveScoreboard(bb) {
        let cb = "scoreboard" === bb[0] ? performance.now() + bb[5] : 0;
        const sb = this.scoreboard.endsAt;
        0 !== cb && 0 !== sb && Math.abs(cb - sb) < 1e3 && (cb = sb), this.scoreboard = {
          wire: bb,
          endsAt: cb
        }, Hb.j.QQ(Ob, this.scoreboard, !0)
      }
    }
    var Kb = sb(1087);
    const Zb = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function zb(bb) {
      const [cb, sb] = (0, Wb.useState)((() => (bb - performance.now()) / 1e3));
      return (0, Wb.useEffect)((() => {
        if (0 === bb) return;
        const cb = () => {
          sb((bb - performance.now()) / 1e3)
        };
        cb();
        const kb = window.setInterval(cb, 250);
        return () => {
          window.clearInterval(kb)
        }
      }), [bb]), cb
    }

    function qb(bb) {
      let {
        className: cb,
        point: sb
      } = bb;
      const [kb, Wb, ab, Tb, Ub, Ib] = sb;
      return (0, Kb.jsxs)("div", {
        className: tb()(cb, `Owner-${Wb||"None"}`, `Leader-${Tb||"None"}`, {
          Contested: Ub,
          Here: Ib
        }),
        children: [(0, Kb.jsx)("span", {
          className: "FrontlinePointLetter",
          children: kb
        }), (0, Kb.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${ab}%`
          }
        })]
      })
    }
    const db = (0, Wb.memo)((function(bb) {
        let {
          points: cb,
          markers: sb
        } = bb;
        const {
          t: kb
        } = (0, Db.E)();
        return cb ? (0, Kb.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: cb.map((bb => {
            const [cb, , , , , , , Wb] = bb;
            return (0, Kb.jsxs)("div", {
              ref: sb.bindMarker(cb),
              className: "FrontlinePointMarker",
              children: [(0, Kb.jsx)(qb, {
                className: "FrontlinePointMarkerTile",
                point: bb
              }), (0, Kb.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Wb && (0, Kb.jsx)("span", {
                  className: tb()("FrontlinePointMarkerHomeTurf", `Team-${Wb}`),
                  children: kb("frontlineHud:homeTurf", {
                    team: kb(Zb[Wb])
                  })
                }), (0, Kb.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, cb)
          }))
        }) : null
      })),
      Ab = {
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

    function rb(bb) {
      let {
        hud: cb,
        crosshair: sb,
        damage: kb,
        markers: Wb
      } = bb;
      const ab = (0, Eb.h)(ib, cb.getWire()),
        Tb = (0, Eb.h)(Ob, cb.getScoreboard());
      return (0, Kb.jsxs)(Kb.Fragment, {
        children: [(0, Kb.jsx)(ob, {
          damage: kb
        }), (0, Kb.jsx)(db, {
          points: "scoreboard" === Tb.wire[0] ? Tb.wire[6] : null,
          markers: Wb
        }), (0, Kb.jsx)(Rb, {
          view: Tb
        }), (0, Kb.jsx)("div", {
          className: "FrontlineReticle",
          ref: sb.bindElement
        }), (0, Kb.jsx)(yb.e, {
          children: (0, Kb.jsx)(Sb, {
            wire: ab
          })
        })]
      })
    }
    const ob = (0, Wb.memo)((function(bb) {
        let {
          damage: cb
        } = bb;
        return (0, Kb.jsxs)("div", {
          className: "FrontlineDamage",
          ref: cb.bindElement,
          children: [(0, Kb.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Kb.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Kb.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Sb = (0, Wb.memo)((function(bb) {
        let {
          wire: cb
        } = bb;
        const {
          t: sb
        } = (0, Db.E)();
        if ("capture" === cb[0]) {
          const [, bb, kb, Wb, ab, Tb, Ub] = cb, Ib = Math.round(Wb / 100 * 24);
          return (0, Kb.jsxs)("div", {
            className: tb()("FrontlinePlate", `Status-${kb}`, `Leader-${ab||"None"}`),
            children: [(0, Kb.jsx)(jb, {}), (0, Kb.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Kb.jsx)("span", {
                className: "FrontlineObjective",
                children: bb
              }), (0, Kb.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Kb.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: sb("frontlineHud:objective", {
                    point: bb,
                    friendly: Tb,
                    enemy: Ub
                  })
                }), (0, Kb.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: sb(Ab[kb])
                })]
              }), (0, Kb.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Wb).padStart(3, "0"), (0, Kb.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Kb.jsx)(Fb, {
              segments: 24,
              lit: Ib
            })]
          })
        }
        if ("alert" === cb[0]) {
          const [, bb, kb, Wb] = cb;
          return (0, Kb.jsxs)("div", {
            className: tb()("FrontlinePlate", "FrontlineAlert", `Tone-${Wb}`),
            children: [(0, Kb.jsx)(jb, {}), (0, Kb.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: sb(wb[bb])
            }), (0, Kb.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: kb
            })]
          })
        }
        return null
      })),
      Rb = (0, Wb.memo)((function(bb) {
        let {
          view: cb
        } = bb;
        const {
          t: sb
        } = (0, Db.E)(), kb = (0, Wb.useRef)(null), ab = function(bb, cb) {
          const [sb, kb] = (0, Wb.useState)(!1);
          return (0, Wb.useLayoutEffect)((() => {
            const cb = bb.current;
            if (!cb) return;
            const sb = document.querySelector(`.${Pb.i}`),
              Wb = document.querySelector(`.${Pb.l}`),
              ab = () => {
                var bb;
                const ab = cb.querySelector(".FrontlineTeamTrack"),
                  Tb = (0, Ib.getRemInPx)(),
                  Ub = cb.getBoundingClientRect().width - 2 * (null !== (bb = null === ab || void 0 === ab ? void 0 : ab.getBoundingClientRect().width) && void 0 !== bb ? bb : 0),
                  Hb = window.innerWidth / 2,
                  fb = sb ? sb.getBoundingClientRect().right : 0,
                  Mb = Wb ? Wb.getBoundingClientRect().left : window.innerWidth,
                  Xb = Math.min(Hb - fb, Mb - Hb) - Pb.e - Ub / 2,
                  nb = Xb < 6 * Tb,
                  mb = nb ? (window.innerWidth - Ub) / 2 - Pb.e : Xb;
                cb.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(mb,14*Tb)))}px`), kb(nb)
              };
            ab();
            const Tb = new ResizeObserver(ab);
            for (const bb of [cb, sb, Wb]) bb && Tb.observe(bb);
            return window.addEventListener("resize", ab), () => {
              Tb.disconnect(), window.removeEventListener("resize", ab)
            }
          }), [bb, cb]), sb
        }(kb, "scoreboard" === cb.wire[0]);
        if ("scoreboard" !== cb.wire[0]) return null;
        const [, Tb, Ub, Hb, fb, , Mb] = cb.wire, Xb = "Red" === Tb ? "Blue" : "Red";
        return (0, Kb.jsxs)("div", {
          className: tb()("FrontlineScoreboardContainer", {
            Below: ab
          }),
          children: [(0, Kb.jsxs)("div", {
            ref: kb,
            className: "FrontlineScoreboard",
            children: [(0, Kb.jsx)(jb, {}), (0, Kb.jsx)(vb, {
              team: Tb,
              tickets: Ub,
              goal: fb,
              side: "Friendly"
            }), (0, Kb.jsx)("div", {
              className: "FrontlinePoints",
              children: Mb.map((bb => (0, Kb.jsx)(qb, {
                className: "FrontlinePoint",
                point: bb
              }, bb[0])))
            }), (0, Kb.jsx)(vb, {
              team: Xb,
              tickets: Hb,
              goal: fb,
              side: "Enemy"
            })]
          }), (0, Kb.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Kb.jsx)(xb, {
              endsAt: cb.endsAt
            }), (0, Kb.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: sb("frontlineHud:ticketGoal", {
                goal: fb
              })
            })]
          })]
        })
      }));

    function vb(bb) {
      let {
        team: cb,
        tickets: sb,
        goal: kb,
        side: Wb
      } = bb;
      const {
        t: ab
      } = (0, Db.E)(), Tb = String(sb).padStart(3, "0"), Ub = Tb.search(/[1-9]/), Ib = -1 === Ub ? Tb : Tb.slice(0, Ub), Hb = Math.min(20, Math.floor(sb / kb * 20));
      return (0, Kb.jsxs)("div", {
        className: tb()("FrontlineTeamScore", Wb, `Team-${cb}`),
        children: [(0, Kb.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Kb.jsx)("span", {
            className: "Lead",
            children: Ib
          }), -1 !== Ub && Tb.slice(Ub)]
        }), (0, Kb.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Kb.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: ab(Zb[cb])
          }), (0, Kb.jsx)(Fb, {
            segments: 20,
            lit: Hb
          })]
        })]
      })
    }

    function Fb(bb) {
      let {
        segments: cb,
        lit: sb
      } = bb;
      return (0, Kb.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: cb
        }, ((bb, cb) => (0, Kb.jsx)("i", {
          className: tb()({
            Lit: cb < sb
          })
        }, cb)))
      })
    }

    function xb(bb) {
      let {
        endsAt: cb
      } = bb;
      const sb = Math.max(0, Math.ceil(zb(cb)));
      return (0, Kb.jsxs)("div", {
        className: tb()("FrontlineClock", {
          Urgent: sb <= 60
        }),
        children: [Math.floor(sb / 60), ":", String(sb % 60).padStart(2, "0")]
      })
    }

    function jb() {
      return (0, Kb.jsxs)(Kb.Fragment, {
        children: [(0, Kb.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Kb.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var pb = sb(36328),
      bc = sb(1258),
      cc = sb(38108),
      sc = sb(38137);
    class kc {
      constructor(bb) {
        var cb;
        this.hud = bb, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Em = !1, this.pC = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.pC), null === (cb = window.visualViewport) || void 0 === cb || cb.addEventListener("resize", this.pC)
      }
      bindMarker(bb) {
        let cb = this.refs.get(bb);
        return cb || (cb = cb => {
          var sb;
          null === (sb = this.markers.get(bb)) || void 0 === sb || sb.stopObserving(), this.markers.delete(bb), cb && !this.Em && this.markers.set(bb, this.mount(cb))
        }, this.refs.set(bb, cb)), cb
      }
      frame(bb, cb) {
        this.render = bb;
        const sb = this.hud.getScoreboard().wire;
        if ("scoreboard" === sb[0] && 0 !== this.markers.size)
          for (const [kb, , , , , , Wb] of sb[6]) {
            const bb = this.markers.get(kb);
            bb && Wb && (bb.target ??= [0, 0, 0], bb.target[0] = Wb[0], bb.target[1] = Wb[1] + 2.5, bb.target[2] = Wb[2], this.place(bb), this.Ya(bb, cb && Math.hypot(Wb[0] - cb[0], Wb[1] - cb[1], Wb[2] - cb[2])))
          }
      }
      dispose() {
        var bb;
        this.Em = !0, window.removeEventListener("resize", this.pC), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", this.pC);
        for (const cb of this.markers.values()) cb.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(bb) {
        const {
          render: cb,
          viewport: sb
        } = this;
        if (!cb || !bb.target) return;
        const kb = (50 - cb.screenBandPct.y) / 100 * sb.height,
          Wb = {
            x: bb.halfSize.width + 8,
            top: bb.halfSize.height + 8,
            bottom: bb.halfSize.height + bb.labelsBelow + kb
          },
          ab = cb.projectWorldPosToViewport(bb.target),
          Tb = null !== ab && void 0 !== ab ? ab : cb.projectWorldPosToScreenPos(bb.target),
          Ub = (0, sc.e)({
            x: Tb.x,
            y: Tb.y,
            text: ab
          }, Wb, sb);
        (0, cc.e)(bb.root, Math.round(100 * Ub.x) / 100, Math.round(100 * Ub.y) / 100)
      }
      Ya(bb, cb) {
        if (null === cb) return void(null !== bb.metres && (bb.metres = null, bb.distance.textContent = ""));
        const sb = Date.now();
        (null === bb.metres || (0, pb.b)(cb, bb.metres, bb.metresShownAt)) && (bb.metres = Math.round(cb), bb.metresShownAt = sb, bb.distance.textContent = (0, Db.y)(bc.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(bb.metres)
        }))
      }
      mount(bb) {
        const cb = {
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
          sb = bb.querySelector(".FrontlinePointMarkerLabels"),
          kb = new ResizeObserver((() => {
            cb.halfSize = {
              width: Math.max(bb.offsetWidth, sb.offsetWidth) / 2,
              height: bb.offsetHeight / 2
            }, cb.labelsBelow = sb.offsetTop + sb.offsetHeight - bb.offsetHeight, this.place(cb)
          }));
        return kb.observe(bb, {
          box: "border-box"
        }), kb.observe(sb, {
          box: "border-box"
        }), cb.stopObserving = () => {
          kb.disconnect()
        }, cb
      }
    }
    var Wc = sb(6102),
      ac = sb(2459);
    const Tc = "frontlineRoundEndChanged";
    class Uc {
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
      Km(bb) {
        const cb = "roundEnd" === bb[0] ? performance.now() + bb[5] : 0;
        this.view = {
          wire: bb,
          key: this.view.key + 1,
          endsAt: cb
        }, Hb.j.QQ(Tc, this.view, !0)
      }
    }
    const Ic = (0, Wb.lazy)((() => (0, ac.c)(sb.e(191).then((() => sb(41149))), (bb => bb.FrontlineMvpLineup)))),
      Hc = [4800, 4e3, 3200],
      fc = [1, 0, 2],
      Mc = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Xc = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function nc(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, Eb.h)(Tc, cb.getView()),
        kb = zb(sb.endsAt);
      return "roundEnd" !== sb.wire[0] || 1e3 * kb < -2e3 ? null : (0, Kb.jsx)(mc, {
        wire: sb.wire,
        secondsLeft: Math.max(0, Math.ceil(kb))
      }, sb.key)
    }
    const mc = (0, Wb.memo)((function(bb) {
      let {
        wire: cb,
        secondsLeft: sb
      } = bb;
      const {
        t: ab
      } = (0, Db.E)(), [, Tb, Ub, Ib, Hb, , fb, Mb] = cb, Xb = (0, Wb.useMemo)((() => fc.filter((bb => bb < Mb.length))), [Mb]), nb = (0, Wb.useMemo)((() => Xb.map((bb => {
        const [, , , , , cb, sb] = Mb[bb];
        return {
          cosmetics: kb.map(((bb, sb) => [bb, cb[sb]])),
          size: 0 === bb ? 1.15 : .85,
          heldGun: {
            name: sb,
            aimed: 0 === bb
          },
          showAfterMs: Hc[bb]
        }
      }))), [Mb, Xb]);
      return (0, Kb.jsxs)("div", {
        className: tb()("FrontlineRoundEnd", `Result-${Tb}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Kb.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Kb.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Kb.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Kb.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Kb.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (mb = ab(Mc[Tb]), /\p{Script=Arabic}/u.test(mb) ? [mb] : (0, Wc.b)(mb)).map(((bb, cb) => (0, Kb.jsx)("span", {
              style: {
                "--letter": cb
              },
              children: bb
            }, cb)))]
          }), (0, Kb.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Ub && "victory" === Tb && (0, Kb.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: ab("frontlineRoundEnd:comeback")
            }), (0, Kb.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Kb.jsx)("b", {
                className: "Friendly",
                children: Ib
              }), " \u2013 ", (0, Kb.jsx)("b", {
                className: "Enemy",
                children: Hb
              })]
            })]
          })]
        }), Xb.length > 0 && (0, Kb.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Xb.length
          },
          children: [(0, Kb.jsx)(Wb.Suspense, {
            fallback: null,
            children: (0, Kb.jsx)(Ic, {
              className: "FrontlineRoundEndLineup",
              players: nb
            })
          }), Xb.map((bb => (0, Kb.jsx)(lc, {
            mvp: Mb[bb],
            place: bb
          }, bb)))]
        }), (0, Kb.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: ab("frontlineRoundEnd:nextFront", {
            map: fb,
            seconds: String(sb)
          })
        })]
      });
      var mb
    }));

    function lc(bb) {
      let {
        mvp: cb,
        place: sb
      } = bb;
      const {
        t: kb
      } = (0, Db.E)(), [Wb, ab, Tb, Ub, Ib] = cb, [Hb, fb] = kb(function(bb, cb) {
        return 1 === cb && "damage" !== bb ? `frontlineRoundEnd:${bb}One` : `frontlineRoundEnd:${bb}`
      }(Tb, Ub), {
        name: "\0",
        count: Ub.toLocaleString()
      }).split("\0");
      return (0, Kb.jsxs)("div", {
        className: tb()("FrontlineMvpCard", `Place-${sb+1}`, `Team-${ab}`),
        style: {
          "--revealMs": `${Hc[sb]}ms`
        },
        children: [(0, Kb.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Kb.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Kb.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: kb(Xc[sb])
        }), (0, Kb.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Hb, (0, Kb.jsx)("span", {
            className: "FrontlineMvpName",
            children: Wb
          }), fb]
        }), (0, Kb.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Ib
        })]
      })
    }
    const Qc = function(bb, cb, sb, kb) {
      let {
        localPlayerId: Tb
      } = kb;
      const Ub = new Gb,
        Ib = new Uc;
      let Hb = null,
        fb = null,
        Mb = null,
        Xb = null,
        nb = null,
        mb = [!1, !1];
      const lb = () => {
        var bb, cb;
        const [sb, kb] = mb;
        null === (bb = fb) || void 0 === bb || bb.GV(!sb), null === (cb = Mb) || void 0 === cb || cb.GV(!kb)
      };
      return {
        onCreate: bb => {
          Hb = bb, fb = new Nb(bb, Tb), Mb = new Yb(bb, Tb), Xb = new kc(Ub), lb(), nb = (0, ab.s)((0, Wb.createElement)(Wb.Fragment, null, (0, Wb.createElement)(rb, {
            hud: Ub,
            crosshair: fb,
            damage: Mb,
            markers: Xb
          }), (0, Wb.createElement)(nc, {
            controller: Ib
          })))
        },
        onClose: () => {
          var bb, cb, sb, kb;
          null === (bb = nb) || void 0 === bb || bb(), null === (cb = fb) || void 0 === cb || cb.dispose(), fb = null, null === (sb = Mb) || void 0 === sb || sb.dispose(), Mb = null, null === (kb = Xb) || void 0 === kb || kb.dispose(), Xb = null, Hb = null
        },
        onAfterRender: (bb, cb) => {
          var sb, kb, Wb, ab;
          null === (sb = fb) || void 0 === sb || sb.frame(bb, cb.tanHalfFovY), null === (kb = Mb) || void 0 === kb || kb.frame(cb.cameraHeading), null === (Wb = Xb) || void 0 === Wb || Wb.frame(cb, null !== (ab = Hb) && void 0 !== ab && ab.checkValid(Tb) ? Hb.aN(Tb) : null)
        },
        onReceivedMessageFromServer: (bb, cb) => {
          "frontlineHud" === bb ? Ub.Km(cb) : "frontlineScoreboard" === bb ? Ub.receiveScoreboard(cb) : "frontlineRoundEnd" === bb ? Ib.Km(cb) : "frontlinePrefs" === bb && (mb = cb, lb())
        }
      }
    }
  },
  6102: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    const kb = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Wb(bb) {
      return null === kb ? Array.from(bb) : Array.from(kb.segment(bb), (bb => {
        let {
          segment: cb
        } = bb;
        return cb
      }))
    }
  },
  38108: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      i: () => ab
    });
    const kb = new WeakMap;

    function Wb(bb) {
      let cb = kb.get(bb);
      return cb || (cb = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, kb.set(bb, cb)), cb
    }

    function ab(bb, cb) {
      const sb = Wb(bb);
      sb.hidden !== cb && (sb.hidden = cb, bb.hidden = cb)
    }

    function Tb(bb, cb, sb) {
      const kb = Wb(bb);
      kb.x === cb && kb.y === sb || (kb.x = cb, kb.y = sb, bb.style.translate = `${cb}vw ${sb}vh`)
    }
  },
  36632: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    const kb = {
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