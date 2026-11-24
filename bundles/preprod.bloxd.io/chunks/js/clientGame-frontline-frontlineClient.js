export const id = 17;
export const ids = [17];
export const modules = {
  36791: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      h: () => yp,
      i: () => Pp,
      k: () => Ap
    });
    var Op = cp(34430),
      op = cp(36799),
      Ip = cp(36804),
      Sp = cp(8852),
      xp = cp(1476),
      Lp = cp(62),
      Yp = cp(82),
      Dp = cp(1112);

    function Ap() {
      var pp;
      return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
        children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
      })
    }

    function Pp(pp) {
      var ip;
      let {
        show: cp
      } = pp;
      (0, xp.i)(op.d, (0, op.s)());
      const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
      return (0, Lp.useEffect)((() => {
        var pp;
        cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
      }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
        showing: cp,
        globallyUniqueKey: "clientGameMenu",
        children: null === Yp || void 0 === Yp ? void 0 : Yp.content
      })
    }

    function Wp(pp) {
      let {
        placement: ip = "bottom"
      } = pp;
      return (0, Dp.jsx)("div", {
        id: `clientGameHud-${ip}`,
        style: {
          display: "contents"
        }
      })
    }

    function yp(pp) {
      let {
        children: ip,
        placement: cp = "bottom"
      } = pp;
      const [Op, op] = (0, Lp.useState)(null);
      return (0, Lp.useEffect)((() => {
        op(document.getElementById(`clientGameHud-${cp}`))
      }), [cp]), Op ? (0, Yp.createPortal)(ip, Op) : null
    }
  },
  34430: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(4628),
      op = cp(4635);

    function Ip(pp) {
      let {
        children: ip,
        showing: cp,
        globallyUniqueKey: Ip,
        alwaysMountChildren: Sp = !1,
        doGameplayStartStopOnShow: xp = !0,
        keepsMovement: Lp = !1
      } = pp;
      return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
    }
  },
  36879: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => Sp,
      l: () => xp,
      m: () => Lp
    });
    var Op = cp(62),
      op = cp(3209);
    const Ip = 8,
      Sp = "InGameHeaderContainer",
      xp = "TopRightElements";

    function Lp(pp) {
      const [ip] = (0, op.b)(), [cp, Lp] = (0, Op.useState)(!1);
      return (0, Op.useLayoutEffect)((() => {
        if (!pp) return;
        const ip = document.querySelector(`.${Sp}`),
          cp = document.querySelector(`.${xp}`),
          Op = () => {
            const Op = pp.getBoundingClientRect(),
              op = ip ? ip.getBoundingClientRect().right : 0,
              Sp = cp ? cp.getBoundingClientRect().left : window.innerWidth,
              xp = Op.left < op + Ip,
              Yp = Op.right > Sp - Ip;
            Lp(xp || Yp)
          };
        Op();
        const op = new ResizeObserver(Op);
        return op.observe(pp), ip && op.observe(ip), cp && op.observe(cp), () => {
          op.disconnect()
        }
      }), [pp, ip]), cp
    }
  },
  36872: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    const Op = [{
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

    function op(pp, ip, cp) {
      const op = Math.abs(pp - ip),
        Ip = Date.now() - cp;
      for (const Sp of Op)
        if (pp < Sp.maxDist) return op >= Sp.hardUpdateDist || Ip > Sp.timeBetweenSoftChecks && op >= Sp.softUpdateDist;
      return !1
    }
  },
  8852: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      e: () => op
    });
    let Op = null;
    const op = function(pp) {
        const ip = {
          cycle: pp,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Op = ip, () => {
          Op === ip && (Op = null)
        }
      },
      Ip = () => {
        var pp;
        return null !== (pp = Op) && void 0 !== pp && pp.canCycle() ? Op.cycle : null
      }
  },
  38751: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      var Op;
      const {
        width: op,
        height: Ip
      } = cp, Sp = null !== (Op = pp.text) && void 0 !== Op ? Op : pp, xp = (Sp.x / 100 - .5) * op, Lp = (Sp.y / 100 - .5) * Ip, Yp = op / 2 - ip.x;
      if (null !== pp.text && Math.abs(xp) <= Yp && Lp >= ip.top - Ip / 2 && Lp <= Ip / 2 - ip.bottom) return {
        x: Sp.x,
        y: Sp.y
      };
      const Dp = Math.min(0 === xp ? 1 / 0 : Yp / Math.abs(xp), Lp > 0 ? (Ip / 2 - ip.bottom) / Lp : Lp < 0 ? (ip.top - Ip / 2) / Lp : 1 / 0);
      return !Number.isFinite(Dp) || Dp < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + xp * Dp / op * 100,
        y: 50 + Lp * Dp / Ip * 100
      }
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  36804: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => tp,
      b: () => Ip,
      d: () => Up,
      f: () => wp,
      j: () => xp,
      n: () => Pp,
      q: () => vp,
      u: () => Ap,
      w: () => Hp
    });
    var Op = cp(25),
      op = cp(34);
    const Ip = "clientGameInventoryButtonsChanged",
      Sp = new Map;

    function xp() {
      return [...Sp.values()].sort(((pp, ip) => {
        var cp, Op;
        return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
      }))
    }
    let Lp = null;

    function Yp(pp) {
      Lp = pp
    }
    let Dp = !1;

    function Ap(pp) {
      Dp = !0;
      try {
        pp.onClick()
      } finally {
        Dp = !1
      }
      pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
    }

    function Pp() {
      return Dp
    }

    function Wp() {
      return xp().filter((pp => pp.panel && !pp.disabled))
    }

    function yp(pp) {
      const ip = Wp(),
        cp = ip.findIndex((pp => pp.id === Lp));
      return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
    }

    function Up() {
      return null !== Lp && Wp().length > 1
    }

    function wp() {
      Yp(null)
    }

    function vp() {
      "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
    }

    function tp() {
      const pp = Lp;
      return Yp(null), pp
    }

    function Hp(pp) {
      return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
        Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
      }
    }
  },
  36799: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Dp,
      d: () => xp,
      h: () => wp,
      l: () => vp,
      o: () => Pp,
      s: () => Yp,
      t: () => Up,
      x: () => Wp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(36804);
    const xp = "clientGameUiChanged";
    let Lp = null;

    function Yp() {
      return Lp
    }

    function Dp(pp, ip) {
      const cp = {
        content: pp,
        menu: ip
      };
      return Lp = cp, op.m.GA(xp, Lp, !0), () => {
        Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
      }
    }
    let Ap = null;

    function Pp() {
      return Ap
    }

    function Wp(pp) {
      return Ap = pp, () => {
        Ap === pp && (Ap = null)
      }
    }
    let yp = !1;

    function Up() {
      const pp = Op.c.get("openInGameMenuName");
      "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wp() {
      tp(!1)
    }

    function vp() {
      tp(yp)
    }

    function tp(pp) {
      "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
        openInGameMenuName: pp ? "inventory" : null
      }), pp || (0, Sp.f)(), yp = !1
    }
  },
  39623: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => ti
    });
    const Op = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var op = cp(62),
      Ip = cp(36799),
      Sp = cp(37246),
      xp = cp(36819),
      Lp = cp(1765),
      Yp = cp(34);
    const Dp = {
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
    const Ap = 32;

    function Pp(pp, ip, cp, Op) {
      return {
        tag: "line",
        attrs: {
          x1: pp,
          y1: ip,
          x2: cp,
          y2: Op,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Wp(pp) {
      return {
        tag: "circle",
        attrs: {
          cx: Ap,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ap,
          r: pp,
          class: "Fill"
        }
      }
    }

    function yp(pp, ip) {
      return {
        tag: "path",
        attrs: {
          d: pp,
          "stroke-width": ip
        }
      }
    }

    function Up(pp, ip, cp) {
      return {
        tag: "circle",
        attrs: {
          cx: Ap,
          cy: Ap,
          r: pp,
          "stroke-width": ip,
          class: cp
        }
      }
    }

    function wp(pp, ip, cp) {
      return {
        tag: "text",
        attrs: {
          x: pp,
          y: ip,
          class: "Fill Label"
        },
        text: cp
      }
    }
    const vp = {
      pistol: pp => [Pp(Ap, Ap - pp - 5, Ap, Ap - pp), Pp(Ap - pp - 5, Ap, Ap - pp, Ap), Pp(Ap + pp, Ap, Ap + pp + 5, Ap), Wp(1.4)],
      rifle: pp => [Pp(Ap, Ap - pp - 8, Ap, Ap - pp), Pp(Ap, Ap + pp, Ap, Ap + pp + 8), Pp(Ap - pp - 8, Ap, Ap - pp, Ap), Pp(Ap + pp, Ap, Ap + pp + 8, Ap), Wp(1)],
      smg: pp => {
        const ip = Math.PI / 2,
          cp = [];
        for (let Sp = 0; Sp < 4; Sp++) cp.push((op = Sp * ip + .35, Ip = (Sp + 1) * ip - .35, yp(`M${Ap+(Op=6+pp)*Math.cos(op)} ${Ap+Op*Math.sin(op)} A${Op} ${Op} 0 0 1 ${Ap+Op*Math.cos(Ip)} ${Ap+Op*Math.sin(Ip)}`, 2)));
        var Op, op, Ip;
        return [...cp, Wp(1.4)]
      },
      shotgun: pp => [Up(pp, 3, "Ring Outline"), Up(pp, 1.5, "Ring")],
      marksman: pp => [yp(`M${26-pp/2} ${39+pp/2} L32 33 L${38+pp/2} ${39+pp/2}`, 2), Pp(14 - pp, Ap, 24 - pp, Ap, 1.5), Pp(40 + pp, Ap, 50 + pp, Ap, 1.5), Pp(14 - pp, 30, 14 - pp, 34, 1.5), Pp(50 + pp, 30, 50 + pp, 34, 1.5)],
      machineGun: pp => {
        const ip = 10 + pp,
          cp = [];
        for (const [Op, op] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) cp.push(yp(`M${Ap+Op*ip} ${Ap+op*(ip-5)} L${Ap+Op*ip} ${Ap+op*ip} L${Ap+Op*(ip-5)} ${Ap+op*ip}`, 2));
        return [...cp, Pp(Ap, 28, Ap, 36, 1.5), Pp(28, Ap, 36, Ap, 1.5)]
      },
      launcher: () => [Pp(14, 30, 50, 30, 1.5), Pp(Ap, 24, Ap, 52, 1.5), Pp(28, 38, 36, 38, 1.5), Pp(29, 44, 35, 44, 1.5), Pp(30, 50, 34, 50, 1.5), wp(38, 40, "100"), wp(37, 46, "200"), Wp(1.4, 30)],
      melee: () => [yp("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Wp(1.2)],
      throwable: () => [Wp(1.6)]
    };

    function tp(pp) {
      let {
        tag: ip,
        attrs: cp,
        text: Op
      } = pp, op = `<${ip}`;
      for (const [Ip, Sp] of Object.entries(cp)) op += ` ${Ip}="${Sp}"`;
      return void 0 === Op ? `${op}/>` : `${op}>${Op}</${ip}>`
    }
    class Hp {
      constructor(pp, ip) {
        this.api = pp, this.localPlayerId = ip, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = pp => {
          this.element = pp, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, pp && !this.enabled && (pp.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Lp.getRemInPx)()))
        }, this.tokens = [Yp.m.subscribe("aimingOverlay", (pp => {
          this.sniperOverlay = "sniper" === pp
        })), Yp.m.subscribe("mouseState", (pp => {
          let {
            isDown: ip
          } = pp;
          this.mouseDown = ip
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      eC(pp) {
        pp !== this.enabled && (this.enabled = pp, this.drawnVisible = null, pp || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(pp, ip) {
        var cp, Op;
        if (!this.enabled) return;
        const {
          api: op
        } = this, Ip = op.isAlive(this.localPlayerId) && null !== (cp = null === (Op = op.Acp(this.localPlayerId)) || void 0 === Op ? void 0 : Op.name) && void 0 !== cp ? cp : null, Sp = (xp = Ip) && Dp[xp] || null;
        var xp;
        if (this.setOwnsCrosshair(null !== Sp), !this.element) return;
        const Lp = op.getHeldGunInaccuracy(),
          Yp = null !== Lp,
          Ap = null !== Sp && !this.sniperOverlay && op.isCrosshairShown();
        if (Ap !== this.drawnVisible && (this.drawnVisible = Ap, this.element.style.display = Ap ? "block" : "none"), !Ap) return;
        const Pp = Yp ? function(pp) {
            return "launcher" === pp || "melee" === pp || "throwable" === pp ? "none" : "shotgun" === pp ? "cone" : "offset"
          }(Sp) : "none",
          Wp = null !== Lp && void 0 !== Lp ? Lp : 0;
        "cone" === Pp ? this.drawCone(Sp, this.coneRadiusVh(Wp, ip) * this.gapPerVh, pp) : (this.coneDrawn = !1, this.draw(Sp, "none" === Pp ? 2 : this.offsetGap(Wp)));
        const yp = !Yp && this.mouseDown;
        yp !== this.drawnPressed && (this.drawnPressed = yp, this.element.classList.toggle("Pressed", yp))
      }
      dispose() {
        for (const pp of this.tokens) Yp.m.unsubscribe(pp);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(pp, ip) {
        var cp, Op;
        pp !== this.drawnFamily ? (this.drawnFamily = pp, this.drawnGap = ip, this.element.innerHTML = function(pp, ip) {
          return `<svg viewBox="0 0 64 64">${vp[pp](ip).map(tp).join("")}</svg>`
        }(pp, ip), this.shapes = Array.from(null !== (cp = null === (Op = this.element.firstElementChild) || void 0 === Op ? void 0 : Op.children) && void 0 !== cp ? cp : [])) : ip !== this.drawnGap && (this.drawnGap = ip, function(pp, ip, cp) {
          const Op = vp[ip](cp);
          for (let op = 0; op < Op.length; op++)
            for (const [ip, cp] of Object.entries(Op[op].attrs)) {
              const Op = String(cp);
              pp[op].getAttribute(ip) !== Op && pp[op].setAttribute(ip, Op)
            }
        }(this.shapes, pp, ip))
      }
      drawCone(pp, ip, cp) {
        pp === this.drawnFamily && this.coneDrawn ? this.shownRadius += (ip - this.shownRadius) * (1 - Math.exp(-cp / 80)) : this.shownRadius = ip, this.coneDrawn = !0, this.draw(pp, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(pp, ip) {
        if (!(ip > 0)) return 1;
        const cp = pp * Sp.j / 2;
        return Math.max(50 * Math.tan(cp) / ip, 1)
      }
      offsetGap(pp) {
        const ip = 2 + ((0, xp.e)(pp) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * ip) / 2)
      }
      setOwnsCrosshair(pp) {
        pp !== this.ownsCrosshair && (this.ownsCrosshair = pp, document.body.classList.toggle("FrontlineCustomCrosshair", pp))
      }
    }
    const dp = "FrontlineCustomDamage",
      ep = .45,
      jp = .2;
    class kp {
      constructor(pp, ip) {
        this.api = pp, this.localPlayerId = ip, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Bp = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = pp => {
          var ip, cp;
          this.clearHits(), this.root = pp, this.lowLayer = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.querySelector(".FrontlineDamageLow")) && void 0 !== ip ? ip : null, this.arcLayer = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.querySelector(".FrontlineDamageArcs")) && void 0 !== cp ? cp : null, this.showRoot(), this.drawLow()
        }, this.token = Yp.m.subscribe("damagedByOtherPlayer", (pp => {
          let {
            direction: ip,
            Qp: cp
          } = pp;
          this.onHurt(ip, cp)
        })), this.syncHealth(), document.body.classList.add(dp)
      }
      eC(pp) {
        pp !== this.enabled && (this.enabled = pp, document.body.classList.toggle(dp, pp), pp || this.clearHits(), this.showRoot())
      }
      frame(pp) {
        this.syncHealth(), this.cameraHeading = pp;
        for (const ip of this.arcs) this.drawArcAngle(ip)
      }
      dispose() {
        Yp.m.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(dp)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const pp = this.api.getClientOption(this.localPlayerId, "_health"),
          ip = this.api.getClientOption(this.localPlayerId, "_shield"),
          cp = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(pp, this.readHealth) && Object.is(ip, this.readShield) && Object.is(cp, this.readMaxHealth)) return;
        if (this.readHealth = pp, this.readShield = ip, this.readMaxHealth = cp, null === pp || void 0 === pp || !cp) return this.lastHealthPool = null, this.maxHealth = null, this.Bp = 1, this.dead = !1, void this.drawLow();
        const Op = pp + (null !== ip && void 0 !== ip ? ip : 0);
        if (null !== this.lastHealthPool && Op < this.lastHealthPool) {
          const pp = performance.now(),
            ip = (this.lastHealthPool - Op) / cp;
          this.lastDrop = pp - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + ip,
            at: this.lastDrop.at
          } : {
            frac: ip,
            at: pp
          }
        }
        this.dead = pp <= 0, this.dead && this.clearHits(), this.lastHealthPool = Op, this.maxHealth = cp, this.Bp = pp > 0 ? pp / cp : 1, this.drawLow()
      }
      onHurt(pp, ip) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const cp = Math.min(1, this.takeDamageFrac(ip) / .3);
        null !== pp && this.showArc(pp, cp), this.flashEdge(null === pp ? null : pp - this.cameraHeading, .4 + .6 * cp)
      }
      takeDamageFrac(pp) {
        if (void 0 !== pp && this.maxHealth) return pp / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: ip
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, ip
      }
      drawLow() {
        if (!this.lowLayer) return;
        const pp = Rp((ep - this.Bp) / .25),
          ip = Rp((jp - this.Bp) / .15000000000000002),
          cp = this.Bp < ep;
        this.lowLayer.classList.toggle("Active", cp), this.lowLayer.classList.toggle("Critical", this.Bp < jp), this.lowLayer.style.opacity = String(cp ? .55 + .3 * pp + .15 * ip : 0)
      }
      showArc(pp, ip) {
        var cp, Op;
        if (!this.arcLayer) return;
        let op = this.arcs.find((ip => mp(ip.direction, pp) < .6));
        if (!op) {
          const ip = document.createElement("div");
          ip.className = "FrontlineDamageArc", ip.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(ip), op = {
            element: ip,
            direction: pp,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(op)
        }
        op.direction = pp, this.drawArcAngle(op);
        const Ip = op.fade ? Number(getComputedStyle(op.element).opacity) : 0;
        null === (cp = op.fade) || void 0 === cp || cp.cancel(), null === (Op = op.pop) || void 0 === Op || Op.cancel(), op.element.style.opacity = "1";
        const Sp = op.element.animate([{
          opacity: Ip
        }, {
          opacity: 1
        }], 144);
        op.fade = Sp, op.pop = op.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * ip
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const xp = op;
        Sp.onfinish = () => {
          if (xp.fade !== Sp) return;
          const pp = xp.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          pp.startTime = Sp.startTime, xp.fade = pp, pp.onfinish = () => {
            xp.fade === pp && (xp.element.remove(), qp(this.arcs, xp))
          }
        }
      }
      drawArcAngle(pp) {
        const ip = pp.direction - this.cameraHeading;
        (null === pp.drawnAngle || Math.abs(ip - pp.drawnAngle) > .005) && (pp.drawnAngle = ip, pp.element.style.rotate = `${ip}rad`)
      }
      flashEdge(pp, ip) {
        var cp, Op, op;
        if (!this.root) return;
        let Ip = this.flashes.find((ip => null === ip.angle || null === pp ? ip.angle === pp : mp(ip.angle, pp) < .5));
        if (!Ip) {
          const ip = document.createElement("div");
          ip.className = "FrontlineDamageFlash";
          const cp = ip.appendChild(document.createElement("div"));
          cp.className = "FrontlineDamageFlashGlow", this.root.insertBefore(ip, this.arcLayer), Ip = {
            element: ip,
            glow: cp,
            angle: pp,
            level: 0,
            animation: null
          }, this.flashes.push(Ip)
        }
        const Sp = null === (cp = Ip.animation) || void 0 === cp || null === (Op = cp.effect) || void 0 === Op ? void 0 : Op.getComputedTiming().progress,
          xp = null === Sp || void 0 === Sp ? 0 : Ip.level * (1 - Sp);
        Ip.level = Math.min(1, Math.max(ip, xp + .6 * ip)), Ip.angle = pp;
        const {
          x: Lp,
          y: Yp,
          rx: Dp,
          ry: Ap
        } = function(pp, ip) {
          const cp = window.innerWidth,
            Op = window.innerHeight;
          if (null === pp) return {
            x: cp / 2,
            y: Op / 2,
            rx: 0,
            ry: 0
          };
          const op = Math.sin(pp),
            Ip = -Math.cos(pp),
            Sp = cp / 2 / Math.max(1e-6, Math.abs(op)),
            xp = Op / 2 / Math.max(1e-6, Math.abs(Ip)),
            Lp = Math.min(Sp, xp),
            Yp = Math.round(cp / 2 + op * Lp),
            Dp = Math.round(Op / 2 + Ip * Lp),
            Ap = Op / 100 * (.85 + .25 * ip),
            Pp = Sp <= xp,
            Wp = Math.round((Pp ? 30 : 74) * Ap),
            yp = Math.round((Pp ? 58 : 26) * Ap);
          return {
            x: Yp,
            y: Dp,
            rx: Wp,
            ry: yp
          }
        }(pp, Ip.level), {
          style: Pp
        } = Ip.glow;
        Ip.glow.classList.toggle("Everywhere", null === pp), Pp.setProperty("--glowX", `${Lp}px`), Pp.setProperty("--glowY", `${Yp}px`), Pp.setProperty("--glowRx", `${Dp}px`), Pp.setProperty("--glowRy", `${Ap}px`), Ip.element.style.transformOrigin = `${Lp}px ${Yp}px`, null === (op = Ip.animation) || void 0 === op || op.cancel();
        const Wp = Ip.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Ip.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Ip.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Ip.level
        });
        Ip.animation = Wp;
        const yp = Ip;
        Wp.onfinish = () => {
          yp.animation === Wp && (yp.element.remove(), qp(this.flashes, yp))
        }
      }
      clearHits() {
        for (const Op of this.arcs) {
          var pp, ip;
          null === (pp = Op.fade) || void 0 === pp || pp.cancel(), Op.fade = null, null === (ip = Op.pop) || void 0 === ip || ip.cancel(), Op.element.remove()
        }
        this.arcs.length = 0;
        for (const Op of this.flashes) {
          var cp;
          null === (cp = Op.animation) || void 0 === cp || cp.cancel(), Op.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function mp(pp, ip) {
      return Math.abs(Math.atan2(Math.sin(pp - ip), Math.cos(pp - ip)))
    }

    function Rp(pp) {
      return Math.max(0, Math.min(1, pp))
    }

    function qp(pp, ip) {
      const cp = pp.indexOf(ip); - 1 !== cp && pp.splice(cp, 1)
    }
    var Mp = cp(1049),
      Cp = cp.n(Mp),
      Ep = cp(36791),
      Xp = cp(36879),
      lp = cp(1201),
      Qp = cp(1476);
    const Jp = "frontlineHudChanged",
      Bp = "frontlineScoreboardChanged";
    class Np {
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
      Ey(pp) {
        this.wire = pp, Yp.m.GA(Jp, pp, !0)
      }
      receiveScoreboard(pp) {
        let ip = "scoreboard" === pp[0] ? performance.now() + pp[5] : 0;
        const cp = this.scoreboard.endsAt;
        0 !== ip && 0 !== cp && Math.abs(ip - cp) < 1e3 && (ip = cp), this.scoreboard = {
          wire: pp,
          endsAt: ip
        }, Yp.m.GA(Bp, this.scoreboard, !0)
      }
    }
    var Tp = cp(1112);
    const fp = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function bp(pp) {
      const [ip, cp] = (0, op.useState)((() => (pp - performance.now()) / 1e3));
      return (0, op.useEffect)((() => {
        if (0 === pp) return;
        const ip = () => {
          cp((pp - performance.now()) / 1e3)
        };
        ip();
        const Op = window.setInterval(ip, 250);
        return () => {
          window.clearInterval(Op)
        }
      }), [pp]), ip
    }

    function hp(pp) {
      let {
        className: ip,
        point: cp
      } = pp;
      const [Op, op, Ip, Sp, xp, Lp] = cp;
      return (0, Tp.jsxs)("div", {
        className: Cp()(ip, `Owner-${op||"None"}`, `Leader-${Sp||"None"}`, {
          Contested: xp,
          Here: Lp
        }),
        children: [(0, Tp.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Op
        }), (0, Tp.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Ip}%`
          }
        })]
      })
    }
    const ap = (0, op.memo)((function(pp) {
        let {
          points: ip,
          markers: cp
        } = pp;
        const {
          t: Op
        } = (0, lp.H)();
        return ip ? (0, Tp.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: ip.map((pp => {
            const [ip, , , , , , , op] = pp;
            return (0, Tp.jsxs)("div", {
              ref: cp.bindMarker(ip),
              className: "FrontlinePointMarker",
              children: [(0, Tp.jsx)(hp, {
                className: "FrontlinePointMarkerTile",
                point: pp
              }), (0, Tp.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [op && (0, Tp.jsx)("span", {
                  className: Cp()("FrontlinePointMarkerHomeTurf", `Team-${op}`),
                  children: Op("frontlineHud:homeTurf", {
                    team: Op(fp[op])
                  })
                }), (0, Tp.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, ip)
          }))
        }) : null
      })),
      np = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Fp = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function gp(pp) {
      let {
        hud: ip,
        crosshair: cp,
        damage: Op,
        markers: op
      } = pp;
      const Ip = (0, Qp.i)(Jp, ip.getWire()),
        Sp = (0, Qp.i)(Bp, ip.getScoreboard());
      return (0, Tp.jsxs)(Tp.Fragment, {
        children: [(0, Tp.jsx)(Gp, {
          damage: Op
        }), (0, Tp.jsx)(ap, {
          points: "scoreboard" === Sp.wire[0] ? Sp.wire[6] : null,
          markers: op
        }), (0, Tp.jsx)(Zp, {
          view: Sp
        }), (0, Tp.jsx)("div", {
          className: "FrontlineReticle",
          ref: cp.bindElement
        }), (0, Tp.jsx)(Ep.h, {
          children: (0, Tp.jsx)(rp, {
            wire: Ip
          })
        })]
      })
    }
    const Gp = (0, op.memo)((function(pp) {
        let {
          damage: ip
        } = pp;
        return (0, Tp.jsxs)("div", {
          className: "FrontlineDamage",
          ref: ip.bindElement,
          children: [(0, Tp.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Tp.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Tp.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      rp = (0, op.memo)((function(pp) {
        let {
          wire: ip
        } = pp;
        const {
          t: cp
        } = (0, lp.H)();
        if ("capture" === ip[0]) {
          const [, pp, Op, op, Ip, Sp, xp] = ip, Lp = Math.round(op / 100 * 24);
          return (0, Tp.jsxs)("div", {
            className: Cp()("FrontlinePlate", `Status-${Op}`, `Leader-${Ip||"None"}`),
            children: [(0, Tp.jsx)(Vp, {}), (0, Tp.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Tp.jsx)("span", {
                className: "FrontlineObjective",
                children: pp
              }), (0, Tp.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Tp.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: cp("frontlineHud:objective", {
                    point: pp,
                    friendly: Sp,
                    enemy: xp
                  })
                }), (0, Tp.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: cp(np[Op])
                })]
              }), (0, Tp.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(op).padStart(3, "0"), (0, Tp.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Tp.jsx)(sp, {
              segments: 24,
              lit: Lp
            })]
          })
        }
        if ("alert" === ip[0]) {
          const [, pp, Op, op] = ip;
          return (0, Tp.jsxs)("div", {
            className: Cp()("FrontlinePlate", "FrontlineAlert", `Tone-${op}`),
            children: [(0, Tp.jsx)(Vp, {}), (0, Tp.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: cp(Fp[pp])
            }), (0, Tp.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Op
            })]
          })
        }
        return null
      })),
      Zp = (0, op.memo)((function(pp) {
        let {
          view: ip
        } = pp;
        const {
          t: cp
        } = (0, lp.H)(), Op = (0, op.useRef)(null), Ip = function(pp, ip) {
          const [cp, Op] = (0, op.useState)(!1);
          return (0, op.useLayoutEffect)((() => {
            const ip = pp.current;
            if (!ip) return;
            const cp = document.querySelector(`.${Xp.h}`),
              op = document.querySelector(`.${Xp.l}`),
              Ip = () => {
                var pp;
                const Ip = ip.querySelector(".FrontlineTeamTrack"),
                  Sp = (0, Lp.getRemInPx)(),
                  xp = ip.getBoundingClientRect().width - 2 * (null !== (pp = null === Ip || void 0 === Ip ? void 0 : Ip.getBoundingClientRect().width) && void 0 !== pp ? pp : 0),
                  Yp = window.innerWidth / 2,
                  Dp = cp ? cp.getBoundingClientRect().right : 0,
                  Ap = op ? op.getBoundingClientRect().left : window.innerWidth,
                  Pp = Math.min(Yp - Dp, Ap - Yp) - Xp.e - xp / 2,
                  Wp = Pp < 6 * Sp,
                  yp = Wp ? (window.innerWidth - xp) / 2 - Xp.e : Pp;
                ip.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(yp,14*Sp)))}px`), Op(Wp)
              };
            Ip();
            const Sp = new ResizeObserver(Ip);
            for (const pp of [ip, cp, op]) pp && Sp.observe(pp);
            return window.addEventListener("resize", Ip), () => {
              Sp.disconnect(), window.removeEventListener("resize", Ip)
            }
          }), [pp, ip]), cp
        }(Op, "scoreboard" === ip.wire[0]);
        if ("scoreboard" !== ip.wire[0]) return null;
        const [, Sp, xp, Yp, Dp, , Ap] = ip.wire, Pp = "Red" === Sp ? "Blue" : "Red";
        return (0, Tp.jsxs)("div", {
          className: Cp()("FrontlineScoreboardContainer", {
            Below: Ip
          }),
          children: [(0, Tp.jsxs)("div", {
            ref: Op,
            className: "FrontlineScoreboard",
            children: [(0, Tp.jsx)(Vp, {}), (0, Tp.jsx)(zp, {
              team: Sp,
              tickets: xp,
              goal: Dp,
              side: "Friendly"
            }), (0, Tp.jsx)("div", {
              className: "FrontlinePoints",
              children: Ap.map((pp => (0, Tp.jsx)(hp, {
                className: "FrontlinePoint",
                point: pp
              }, pp[0])))
            }), (0, Tp.jsx)(zp, {
              team: Pp,
              tickets: Yp,
              goal: Dp,
              side: "Enemy"
            })]
          }), (0, Tp.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Tp.jsx)(Kp, {
              endsAt: ip.endsAt
            }), (0, Tp.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: cp("frontlineHud:ticketGoal", {
                goal: Dp
              })
            })]
          })]
        })
      }));

    function zp(pp) {
      let {
        team: ip,
        tickets: cp,
        goal: Op,
        side: op
      } = pp;
      const {
        t: Ip
      } = (0, lp.H)(), Sp = String(cp).padStart(3, "0"), xp = Sp.search(/[1-9]/), Lp = -1 === xp ? Sp : Sp.slice(0, xp), Yp = Math.min(20, Math.floor(cp / Op * 20));
      return (0, Tp.jsxs)("div", {
        className: Cp()("FrontlineTeamScore", op, `Team-${ip}`),
        children: [(0, Tp.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Tp.jsx)("span", {
            className: "Lead",
            children: Lp
          }), -1 !== xp && Sp.slice(xp)]
        }), (0, Tp.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Tp.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Ip(fp[ip])
          }), (0, Tp.jsx)(sp, {
            segments: 20,
            lit: Yp
          })]
        })]
      })
    }

    function sp(pp) {
      let {
        segments: ip,
        lit: cp
      } = pp;
      return (0, Tp.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: ip
        }, ((pp, ip) => (0, Tp.jsx)("i", {
          className: Cp()({
            Lit: ip < cp
          })
        }, ip)))
      })
    }

    function Kp(pp) {
      let {
        endsAt: ip
      } = pp;
      const cp = Math.max(0, Math.ceil(bp(ip)));
      return (0, Tp.jsxs)("div", {
        className: Cp()("FrontlineClock", {
          Urgent: cp <= 60
        }),
        children: [Math.floor(cp / 60), ":", String(cp % 60).padStart(2, "0")]
      })
    }

    function Vp() {
      return (0, Tp.jsxs)(Tp.Fragment, {
        children: [(0, Tp.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Tp.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var ii = cp(36872),
      ci = cp(1260),
      Oi = cp(38712),
      oi = cp(38751);
    class Ii {
      constructor(pp) {
        var ip;
        this.hud = pp, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Ry = !1, this.mH = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.mH), null === (ip = window.visualViewport) || void 0 === ip || ip.addEventListener("resize", this.mH)
      }
      bindMarker(pp) {
        let ip = this.refs.get(pp);
        return ip || (ip = ip => {
          var cp;
          null === (cp = this.markers.get(pp)) || void 0 === cp || cp.stopObserving(), this.markers.delete(pp), ip && !this.Ry && this.markers.set(pp, this.mount(ip))
        }, this.refs.set(pp, ip)), ip
      }
      frame(pp, ip) {
        this.render = pp;
        const cp = this.hud.getScoreboard().wire;
        if ("scoreboard" === cp[0] && 0 !== this.markers.size)
          for (const [Op, , , , , , op] of cp[6]) {
            const pp = this.markers.get(Op);
            pp && op && (pp.target ??= [0, 0, 0], pp.target[0] = op[0], pp.target[1] = op[1] + 2.5, pp.target[2] = op[2], this.place(pp), this.ri(pp, ip && Math.hypot(op[0] - ip[0], op[1] - ip[1], op[2] - ip[2])))
          }
      }
      dispose() {
        var pp;
        this.Ry = !0, window.removeEventListener("resize", this.mH), null === (pp = window.visualViewport) || void 0 === pp || pp.removeEventListener("resize", this.mH);
        for (const ip of this.markers.values()) ip.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(pp) {
        const {
          render: ip,
          viewport: cp
        } = this;
        if (!ip || !pp.target) return;
        const Op = (50 - ip.screenBandPct.y) / 100 * cp.height,
          op = {
            x: pp.halfSize.width + 8,
            top: pp.halfSize.height + 8,
            bottom: pp.halfSize.height + pp.labelsBelow + Op
          },
          Ip = ip.projectWorldPosToViewport(pp.target),
          Sp = null !== Ip && void 0 !== Ip ? Ip : ip.projectWorldPosToScreenPos(pp.target),
          xp = (0, oi.d)({
            x: Sp.x,
            y: Sp.y,
            text: Ip
          }, op, cp);
        (0, Oi.b)(pp.root, Math.round(100 * xp.x) / 100, Math.round(100 * xp.y) / 100)
      }
      ri(pp, ip) {
        if (null === ip) return void(null !== pp.metres && (pp.metres = null, pp.distance.textContent = ""));
        const cp = Date.now();
        (null === pp.metres || (0, ii.c)(ip, pp.metres, pp.metresShownAt)) && (pp.metres = Math.round(ip), pp.metresShownAt = cp, pp.distance.textContent = (0, lp.B)(ci.g.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(pp.metres)
        }))
      }
      mount(pp) {
        const ip = {
            root: pp,
            distance: pp.querySelector(".FrontlinePointMarkerDistance"),
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
          cp = pp.querySelector(".FrontlinePointMarkerLabels"),
          Op = new ResizeObserver((() => {
            ip.halfSize = {
              width: Math.max(pp.offsetWidth, cp.offsetWidth) / 2,
              height: pp.offsetHeight / 2
            }, ip.labelsBelow = cp.offsetTop + cp.offsetHeight - pp.offsetHeight, this.place(ip)
          }));
        return Op.observe(pp, {
          box: "border-box"
        }), Op.observe(cp, {
          box: "border-box"
        }), ip.stopObserving = () => {
          Op.disconnect()
        }, ip
      }
    }
    var Si = cp(6566),
      xi = cp(2695);
    const Li = "frontlineRoundEndChanged";
    class Yi {
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
      Ey(pp) {
        const ip = "roundEnd" === pp[0] ? performance.now() + pp[5] : 0;
        this.view = {
          wire: pp,
          key: this.view.key + 1,
          endsAt: ip
        }, Yp.m.GA(Li, this.view, !0)
      }
    }
    const Di = (0, op.lazy)((() => (0, xi.c)(Promise.all([cp.e(239), cp.e(202)]).then((() => cp(42012))), (pp => pp.FrontlineMvpLineup)))),
      Ai = [4800, 4e3, 3200],
      Pi = [1, 0, 2],
      Wi = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      yi = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Ui(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Qp.i)(Li, ip.getView()),
        Op = bp(cp.endsAt);
      return "roundEnd" !== cp.wire[0] || 1e3 * Op < -2e3 ? null : (0, Tp.jsx)(wi, {
        wire: cp.wire,
        secondsLeft: Math.max(0, Math.ceil(Op))
      }, cp.key)
    }
    const wi = (0, op.memo)((function(pp) {
      let {
        wire: ip,
        secondsLeft: cp
      } = pp;
      const {
        t: Ip
      } = (0, lp.H)(), [, Sp, xp, Lp, Yp, , Dp, Ap] = ip, Pp = (0, op.useMemo)((() => Pi.filter((pp => pp < Ap.length))), [Ap]), Wp = (0, op.useMemo)((() => Pp.map((pp => {
        const [, , , , , ip, cp] = Ap[pp];
        return {
          cosmetics: Op.map(((pp, cp) => [pp, ip[cp]])),
          size: 0 === pp ? 1.15 : .85,
          heldGun: {
            name: cp,
            aimed: 0 === pp
          },
          showAfterMs: Ai[pp]
        }
      }))), [Ap, Pp]);
      return (0, Tp.jsxs)("div", {
        className: Cp()("FrontlineRoundEnd", `Result-${Sp}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Tp.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Tp.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Tp.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Tp.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Tp.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (yp = Ip(Wi[Sp]), /\p{Script=Arabic}/u.test(yp) ? [yp] : (0, Si.d)(yp)).map(((pp, ip) => (0, Tp.jsx)("span", {
              style: {
                "--letter": ip
              },
              children: pp
            }, ip)))]
          }), (0, Tp.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [xp && "victory" === Sp && (0, Tp.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Ip("frontlineRoundEnd:comeback")
            }), (0, Tp.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Tp.jsx)("b", {
                className: "Friendly",
                children: Lp
              }), " \u2013 ", (0, Tp.jsx)("b", {
                className: "Enemy",
                children: Yp
              })]
            })]
          })]
        }), Pp.length > 0 && (0, Tp.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Pp.length
          },
          children: [(0, Tp.jsx)(op.Suspense, {
            fallback: null,
            children: (0, Tp.jsx)(Di, {
              className: "FrontlineRoundEndLineup",
              players: Wp
            })
          }), Pp.map((pp => (0, Tp.jsx)(vi, {
            mvp: Ap[pp],
            place: pp
          }, pp)))]
        }), (0, Tp.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Ip("frontlineRoundEnd:nextFront", {
            map: Dp,
            seconds: String(cp)
          })
        })]
      });
      var yp
    }));

    function vi(pp) {
      let {
        mvp: ip,
        place: cp
      } = pp;
      const {
        t: Op
      } = (0, lp.H)(), [op, Ip, Sp, xp, Lp] = ip, [Yp, Dp] = Op(function(pp, ip) {
        return 1 === ip && "damage" !== pp ? `frontlineRoundEnd:${pp}One` : `frontlineRoundEnd:${pp}`
      }(Sp, xp), {
        name: "\0",
        count: xp.toLocaleString()
      }).split("\0");
      return (0, Tp.jsxs)("div", {
        className: Cp()("FrontlineMvpCard", `Place-${cp+1}`, `Team-${Ip}`),
        style: {
          "--revealMs": `${Ai[cp]}ms`
        },
        children: [(0, Tp.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Tp.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Tp.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Op(yi[cp])
        }), (0, Tp.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Yp, (0, Tp.jsx)("span", {
            className: "FrontlineMvpName",
            children: op
          }), Dp]
        }), (0, Tp.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Lp
        })]
      })
    }
    const ti = function(pp, ip, cp, Op) {
      let {
        localPlayerId: Sp
      } = Op;
      const xp = new Np,
        Lp = new Yi;
      let Yp = null,
        Dp = null,
        Ap = null,
        Pp = null,
        Wp = null,
        yp = [!1, !1];
      const Up = () => {
        var pp, ip;
        const [cp, Op] = yp;
        null === (pp = Dp) || void 0 === pp || pp.eC(!cp), null === (ip = Ap) || void 0 === ip || ip.eC(!Op)
      };
      return {
        onCreate: pp => {
          Yp = pp, Dp = new Hp(pp, Sp), Ap = new kp(pp, Sp), Pp = new Ii(xp), Up(), Wp = (0, Ip.A)((0, op.createElement)(op.Fragment, null, (0, op.createElement)(gp, {
            hud: xp,
            crosshair: Dp,
            damage: Ap,
            markers: Pp
          }), (0, op.createElement)(Ui, {
            controller: Lp
          })))
        },
        onClose: () => {
          var pp, ip, cp, Op;
          null === (pp = Wp) || void 0 === pp || pp(), null === (ip = Dp) || void 0 === ip || ip.dispose(), Dp = null, null === (cp = Ap) || void 0 === cp || cp.dispose(), Ap = null, null === (Op = Pp) || void 0 === Op || Op.dispose(), Pp = null, Yp = null
        },
        onAfterRender: (pp, ip) => {
          var cp, Op, op, Ip;
          null === (cp = Dp) || void 0 === cp || cp.frame(pp, ip.tanHalfFovY), null === (Op = Ap) || void 0 === Op || Op.frame(ip.cameraHeading), null === (op = Pp) || void 0 === op || op.frame(ip, null !== (Ip = Yp) && void 0 !== Ip && Ip.checkValid(Sp) ? Yp.sH(Sp) : null)
        },
        onReceivedMessageFromServer: (pp, ip) => {
          "frontlineHud" === pp ? xp.Ey(ip) : "frontlineScoreboard" === pp ? xp.receiveScoreboard(ip) : "frontlineRoundEnd" === pp ? Lp.Ey(ip) : "frontlinePrefs" === pp && (yp = ip, Up())
        }
      }
    }
  },
  6566: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    const Op = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function op(pp) {
      return null === Op ? Array.from(pp) : Array.from(Op.segment(pp), (pp => {
        let {
          segment: ip
        } = pp;
        return ip
      }))
    }
  },
  38712: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      d: () => Ip
    });
    const Op = new WeakMap;

    function op(pp) {
      let ip = Op.get(pp);
      return ip || (ip = {
        hidden: pp.hidden,
        x: NaN,
        y: NaN
      }, Op.set(pp, ip)), ip
    }

    function Ip(pp, ip) {
      const cp = op(pp);
      cp.hidden !== ip && (cp.hidden = ip, pp.hidden = ip)
    }

    function Sp(pp, ip, cp) {
      const Op = op(pp);
      Op.x === ip && Op.y === cp || (Op.x = ip, Op.y = cp, pp.style.translate = `${ip}vw ${cp}vh`)
    }
  },
  37286: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    const Op = {
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
for (const pp in modules) Object.freeze(modules[pp]);