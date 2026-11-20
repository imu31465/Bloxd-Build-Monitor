export const id = 17;
export const ids = [17];
export const modules = {
  36648: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => aq,
      h: () => Wq,
      j: () => Bq
    });
    var Yq = gq(9277),
      lq = gq(36657),
      Oq = gq(36662),
      mq = gq(8669),
      xq = gq(1416),
      Aq = gq(57),
      cq = gq(71),
      uq = gq(1070);

    function Bq() {
      var qq;
      return (0, xq.h)(lq.c, (0, lq.l)()), (0, uq.jsx)(uq.Fragment, {
        children: null === (qq = (0, lq.l)()) || void 0 === qq ? void 0 : qq.content
      })
    }

    function Wq(qq) {
      var Eq;
      let {
        show: gq
      } = qq;
      (0, xq.h)(lq.c, (0, lq.l)());
      const cq = null === (Eq = (0, lq.l)()) || void 0 === Eq ? void 0 : Eq.menu;
      return (0, Aq.useEffect)((() => {
        var qq;
        gq || (null === cq || void 0 === cq || null === (qq = cq.onClose) || void 0 === qq || qq.call(cq), (0, Oq.m)())
      }), [gq, cq]), (0, Aq.useEffect)((() => gq ? (0, mq.i)(Oq.r, Oq.d) : void 0), [gq]), (0, uq.jsx)(Yq.b, {
        showing: gq,
        globallyUniqueKey: "clientGameMenu",
        children: null === cq || void 0 === cq ? void 0 : cq.content
      })
    }

    function Nq(qq) {
      let {
        placement: Eq = "bottom"
      } = qq;
      return (0, uq.jsx)("div", {
        id: `clientGameHud-${Eq}`,
        style: {
          display: "contents"
        }
      })
    }

    function aq(qq) {
      let {
        children: Eq,
        placement: gq = "bottom"
      } = qq;
      const [Yq, lq] = (0, Aq.useState)(null);
      return (0, Aq.useEffect)((() => {
        lq(document.getElementById(`clientGameHud-${gq}`))
      }), [gq]), Yq ? (0, cq.createPortal)(Eq, Yq) : null
    }
  },
  9277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(4364),
      lq = gq(4367);

    function Oq(qq) {
      let {
        children: Eq,
        showing: gq,
        globallyUniqueKey: Oq,
        alwaysMountChildren: mq = !1,
        doGameplayStartStopOnShow: xq = !0,
        keepsMovement: Aq = !1
      } = qq;
      return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
    }
  },
  36740: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      e: () => mq,
      i: () => xq,
      j: () => Aq
    });
    var Yq = gq(57),
      lq = gq(3018);
    const Oq = 8,
      mq = "InGameHeaderContainer",
      xq = "TopRightElements";

    function Aq(qq) {
      const [Eq] = (0, lq.b)(), [gq, Aq] = (0, Yq.useState)(!1);
      return (0, Yq.useLayoutEffect)((() => {
        if (!qq) return;
        const Eq = document.querySelector(`.${mq}`),
          gq = document.querySelector(`.${xq}`),
          Yq = () => {
            const Yq = qq.getBoundingClientRect(),
              lq = Eq ? Eq.getBoundingClientRect().right : 0,
              mq = gq ? gq.getBoundingClientRect().left : window.innerWidth,
              xq = Yq.left < lq + Oq,
              cq = Yq.right > mq - Oq;
            Aq(xq || cq)
          };
        Yq();
        const lq = new ResizeObserver(Yq);
        return lq.observe(qq), Eq && lq.observe(Eq), gq && lq.observe(gq), () => {
          lq.disconnect()
        }
      }), [qq, Eq]), gq
    }
  },
  36736: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    const Yq = [{
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

    function lq(qq, Eq, gq) {
      const lq = Math.abs(qq - Eq),
        Oq = Date.now() - gq;
      for (const mq of Yq)
        if (qq < mq.maxDist) return lq >= mq.hardUpdateDist || Oq > mq.timeBetweenSoftChecks && lq >= mq.softUpdateDist;
      return !1
    }
  },
  8669: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => lq
    });
    let Yq = null;
    const lq = function(qq) {
        const Eq = {
          cycle: qq,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Yq = Eq, () => {
          Yq === Eq && (Yq = null)
        }
      },
      Oq = () => {
        var qq;
        return null !== (qq = Yq) && void 0 !== qq && qq.canCycle() ? Yq.cycle : null
      }
  },
  38505: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq) {
      var Yq;
      const {
        width: lq,
        height: Oq
      } = gq, mq = null !== (Yq = qq.text) && void 0 !== Yq ? Yq : qq, xq = (mq.x / 100 - .5) * lq, Aq = (mq.y / 100 - .5) * Oq, cq = lq / 2 - Eq.x;
      if (null !== qq.text && Math.abs(xq) <= cq && Aq >= Eq.top - Oq / 2 && Aq <= Oq / 2 - Eq.bottom) return {
        x: mq.x,
        y: mq.y
      };
      const uq = Math.min(0 === xq ? 1 / 0 : cq / Math.abs(xq), Aq > 0 ? (Oq / 2 - Eq.bottom) / Aq : Aq < 0 ? (Eq.top - Oq / 2) / Aq : 1 / 0);
      return !Number.isFinite(uq) || uq < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + xq * uq / lq * 100,
        y: 50 + Aq * uq / Oq * 100
      }
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  39349: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => dE
    });
    const Yq = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var lq = gq(57),
      Oq = gq(36657),
      mq = gq(37086),
      xq = gq(36674),
      Aq = gq(1710),
      cq = gq(31);
    const uq = {
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
    const Bq = 32;

    function Wq(qq, Eq, gq, Yq) {
      return {
        tag: "line",
        attrs: {
          x1: qq,
          y1: Eq,
          x2: gq,
          y2: Yq,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Nq(qq) {
      return {
        tag: "circle",
        attrs: {
          cx: Bq,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bq,
          r: qq,
          class: "Fill"
        }
      }
    }

    function aq(qq, Eq) {
      return {
        tag: "path",
        attrs: {
          d: qq,
          "stroke-width": Eq
        }
      }
    }

    function Vq(qq, Eq, gq) {
      return {
        tag: "circle",
        attrs: {
          cx: Bq,
          cy: Bq,
          r: qq,
          "stroke-width": Eq,
          class: gq
        }
      }
    }

    function dq(qq, Eq, gq) {
      return {
        tag: "text",
        attrs: {
          x: qq,
          y: Eq,
          class: "Fill Label"
        },
        text: gq
      }
    }
    const jq = {
      pistol: qq => [Wq(Bq, Bq - qq - 5, Bq, Bq - qq), Wq(Bq - qq - 5, Bq, Bq - qq, Bq), Wq(Bq + qq, Bq, Bq + qq + 5, Bq), Nq(1.4)],
      rifle: qq => [Wq(Bq, Bq - qq - 8, Bq, Bq - qq), Wq(Bq, Bq + qq, Bq, Bq + qq + 8), Wq(Bq - qq - 8, Bq, Bq - qq, Bq), Wq(Bq + qq, Bq, Bq + qq + 8, Bq), Nq(1)],
      smg: qq => {
        const Eq = Math.PI / 2,
          gq = [];
        for (let mq = 0; mq < 4; mq++) gq.push((lq = mq * Eq + .35, Oq = (mq + 1) * Eq - .35, aq(`M${Bq+(Yq=6+qq)*Math.cos(lq)} ${Bq+Yq*Math.sin(lq)} A${Yq} ${Yq} 0 0 1 ${Bq+Yq*Math.cos(Oq)} ${Bq+Yq*Math.sin(Oq)}`, 2)));
        var Yq, lq, Oq;
        return [...gq, Nq(1.4)]
      },
      shotgun: qq => [Vq(qq, 3, "Ring Outline"), Vq(qq, 1.5, "Ring")],
      marksman: qq => [aq(`M${26-qq/2} ${39+qq/2} L32 33 L${38+qq/2} ${39+qq/2}`, 2), Wq(14 - qq, Bq, 24 - qq, Bq, 1.5), Wq(40 + qq, Bq, 50 + qq, Bq, 1.5), Wq(14 - qq, 30, 14 - qq, 34, 1.5), Wq(50 + qq, 30, 50 + qq, 34, 1.5)],
      machineGun: qq => {
        const Eq = 10 + qq,
          gq = [];
        for (const [Yq, lq] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) gq.push(aq(`M${Bq+Yq*Eq} ${Bq+lq*(Eq-5)} L${Bq+Yq*Eq} ${Bq+lq*Eq} L${Bq+Yq*(Eq-5)} ${Bq+lq*Eq}`, 2));
        return [...gq, Wq(Bq, 28, Bq, 36, 1.5), Wq(28, Bq, 36, Bq, 1.5)]
      },
      launcher: () => [Wq(14, 30, 50, 30, 1.5), Wq(Bq, 24, Bq, 52, 1.5), Wq(28, 38, 36, 38, 1.5), Wq(29, 44, 35, 44, 1.5), Wq(30, 50, 34, 50, 1.5), dq(38, 40, "100"), dq(37, 46, "200"), Nq(1.4, 30)],
      melee: () => [aq("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Nq(1.2)],
      throwable: () => [Nq(1.6)]
    };

    function Hq(qq) {
      let {
        tag: Eq,
        attrs: gq,
        text: Yq
      } = qq, lq = `<${Eq}`;
      for (const [Oq, mq] of Object.entries(gq)) lq += ` ${Oq}="${mq}"`;
      return void 0 === Yq ? `${lq}/>` : `${lq}>${Yq}</${Eq}>`
    }
    class oq {
      constructor(qq, Eq) {
        this.api = qq, this.localPlayerId = Eq, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = qq => {
          this.element = qq, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, qq && !this.enabled && (qq.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Aq.getRemInPx)()))
        }, this.tokens = [cq.i.subscribe("aimingOverlay", (qq => {
          this.sniperOverlay = "sniper" === qq
        })), cq.i.subscribe("mouseState", (qq => {
          let {
            isDown: Eq
          } = qq;
          this.mouseDown = Eq
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      hG(qq) {
        qq !== this.enabled && (this.enabled = qq, this.drawnVisible = null, qq || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(qq, Eq) {
        var gq, Yq;
        if (!this.enabled) return;
        const {
          api: lq
        } = this, Oq = lq.isAlive(this.localPlayerId) && null !== (gq = null === (Yq = lq.Ngq(this.localPlayerId)) || void 0 === Yq ? void 0 : Yq.name) && void 0 !== gq ? gq : null, mq = (xq = Oq) && uq[xq] || null;
        var xq;
        if (this.setOwnsCrosshair(null !== mq), !this.element) return;
        const Aq = lq.getHeldGunInaccuracy(),
          cq = null !== Aq,
          Bq = null !== mq && !this.sniperOverlay && lq.isCrosshairShown();
        if (Bq !== this.drawnVisible && (this.drawnVisible = Bq, this.element.style.display = Bq ? "block" : "none"), !Bq) return;
        const Wq = cq ? function(qq) {
            return "launcher" === qq || "melee" === qq || "throwable" === qq ? "none" : "shotgun" === qq ? "cone" : "offset"
          }(mq) : "none",
          Nq = null !== Aq && void 0 !== Aq ? Aq : 0;
        "cone" === Wq ? this.drawCone(mq, this.coneRadiusVh(Nq, Eq) * this.gapPerVh, qq) : (this.coneDrawn = !1, this.draw(mq, "none" === Wq ? 2 : this.offsetGap(Nq)));
        const aq = !cq && this.mouseDown;
        aq !== this.drawnPressed && (this.drawnPressed = aq, this.element.classList.toggle("Pressed", aq))
      }
      dispose() {
        for (const qq of this.tokens) cq.i.unsubscribe(qq);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(qq, Eq) {
        var gq, Yq;
        qq !== this.drawnFamily ? (this.drawnFamily = qq, this.drawnGap = Eq, this.element.innerHTML = function(qq, Eq) {
          return `<svg viewBox="0 0 64 64">${jq[qq](Eq).map(Hq).join("")}</svg>`
        }(qq, Eq), this.shapes = Array.from(null !== (gq = null === (Yq = this.element.firstElementChild) || void 0 === Yq ? void 0 : Yq.children) && void 0 !== gq ? gq : [])) : Eq !== this.drawnGap && (this.drawnGap = Eq, function(qq, Eq, gq) {
          const Yq = jq[Eq](gq);
          for (let lq = 0; lq < Yq.length; lq++)
            for (const [Eq, gq] of Object.entries(Yq[lq].attrs)) {
              const Yq = String(gq);
              qq[lq].getAttribute(Eq) !== Yq && qq[lq].setAttribute(Eq, Yq)
            }
        }(this.shapes, qq, Eq))
      }
      drawCone(qq, Eq, gq) {
        qq === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Eq - this.shownRadius) * (1 - Math.exp(-gq / 80)) : this.shownRadius = Eq, this.coneDrawn = !0, this.draw(qq, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(qq, Eq) {
        if (!(Eq > 0)) return 1;
        const gq = qq * mq.i / 2;
        return Math.max(50 * Math.tan(gq) / Eq, 1)
      }
      offsetGap(qq) {
        const Eq = 2 + ((0, xq.f)(qq) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Eq) / 2)
      }
      setOwnsCrosshair(qq) {
        qq !== this.ownsCrosshair && (this.ownsCrosshair = qq, document.body.classList.toggle("FrontlineCustomCrosshair", qq))
      }
    }
    const Pq = "FrontlineCustomDamage",
      Qq = .45,
      yq = .2;
    class tq {
      constructor(qq, Eq) {
        this.api = qq, this.localPlayerId = Eq, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.zq = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = qq => {
          var Eq, gq;
          this.clearHits(), this.root = qq, this.lowLayer = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.querySelector(".FrontlineDamageLow")) && void 0 !== Eq ? Eq : null, this.arcLayer = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.querySelector(".FrontlineDamageArcs")) && void 0 !== gq ? gq : null, this.showRoot(), this.drawLow()
        }, this.token = cq.i.subscribe("damagedByOtherPlayer", (qq => {
          let {
            direction: Eq,
            Mq: gq
          } = qq;
          this.onHurt(Eq, gq)
        })), this.syncHealth(), document.body.classList.add(Pq)
      }
      hG(qq) {
        qq !== this.enabled && (this.enabled = qq, document.body.classList.toggle(Pq, qq), qq || this.clearHits(), this.showRoot())
      }
      frame(qq) {
        this.syncHealth(), this.cameraHeading = qq;
        for (const Eq of this.arcs) this.drawArcAngle(Eq)
      }
      dispose() {
        cq.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Pq)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const qq = this.api.getClientOption(this.localPlayerId, "_health"),
          Eq = this.api.getClientOption(this.localPlayerId, "_shield"),
          gq = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(qq, this.readHealth) && Object.is(Eq, this.readShield) && Object.is(gq, this.readMaxHealth)) return;
        if (this.readHealth = qq, this.readShield = Eq, this.readMaxHealth = gq, null === qq || void 0 === qq || !gq) return this.lastHealthPool = null, this.maxHealth = null, this.zq = 1, this.dead = !1, void this.drawLow();
        const Yq = qq + (null !== Eq && void 0 !== Eq ? Eq : 0);
        if (null !== this.lastHealthPool && Yq < this.lastHealthPool) {
          const qq = performance.now(),
            Eq = (this.lastHealthPool - Yq) / gq;
          this.lastDrop = qq - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Eq,
            at: this.lastDrop.at
          } : {
            frac: Eq,
            at: qq
          }
        }
        this.dead = qq <= 0, this.dead && this.clearHits(), this.lastHealthPool = Yq, this.maxHealth = gq, this.zq = qq > 0 ? qq / gq : 1, this.drawLow()
      }
      onHurt(qq, Eq) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const gq = Math.min(1, this.takeDamageFrac(Eq) / .3);
        null !== qq && this.showArc(qq, gq), this.flashEdge(null === qq ? null : qq - this.cameraHeading, .4 + .6 * gq)
      }
      takeDamageFrac(qq) {
        if (void 0 !== qq && this.maxHealth) return qq / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Eq
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Eq
      }
      drawLow() {
        if (!this.lowLayer) return;
        const qq = vq((Qq - this.zq) / .25),
          Eq = vq((yq - this.zq) / .15000000000000002),
          gq = this.zq < Qq;
        this.lowLayer.classList.toggle("Active", gq), this.lowLayer.classList.toggle("Critical", this.zq < yq), this.lowLayer.style.opacity = String(gq ? .55 + .3 * qq + .15 * Eq : 0)
      }
      showArc(qq, Eq) {
        var gq, Yq;
        if (!this.arcLayer) return;
        let lq = this.arcs.find((Eq => rq(Eq.direction, qq) < .6));
        if (!lq) {
          const Eq = document.createElement("div");
          Eq.className = "FrontlineDamageArc", Eq.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(Eq), lq = {
            element: Eq,
            direction: qq,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(lq)
        }
        lq.direction = qq, this.drawArcAngle(lq);
        const Oq = lq.fade ? Number(getComputedStyle(lq.element).opacity) : 0;
        null === (gq = lq.fade) || void 0 === gq || gq.cancel(), null === (Yq = lq.pop) || void 0 === Yq || Yq.cancel(), lq.element.style.opacity = "1";
        const mq = lq.element.animate([{
          opacity: Oq
        }, {
          opacity: 1
        }], 144);
        lq.fade = mq, lq.pop = lq.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Eq
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const xq = lq;
        mq.onfinish = () => {
          if (xq.fade !== mq) return;
          const qq = xq.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          qq.startTime = mq.startTime, xq.fade = qq, qq.onfinish = () => {
            xq.fade === qq && (xq.element.remove(), hq(this.arcs, xq))
          }
        }
      }
      drawArcAngle(qq) {
        const Eq = qq.direction - this.cameraHeading;
        (null === qq.drawnAngle || Math.abs(Eq - qq.drawnAngle) > .005) && (qq.drawnAngle = Eq, qq.element.style.rotate = `${Eq}rad`)
      }
      flashEdge(qq, Eq) {
        var gq, Yq, lq;
        if (!this.root) return;
        let Oq = this.flashes.find((Eq => null === Eq.angle || null === qq ? Eq.angle === qq : rq(Eq.angle, qq) < .5));
        if (!Oq) {
          const Eq = document.createElement("div");
          Eq.className = "FrontlineDamageFlash";
          const gq = Eq.appendChild(document.createElement("div"));
          gq.className = "FrontlineDamageFlashGlow", this.root.insertBefore(Eq, this.arcLayer), Oq = {
            element: Eq,
            glow: gq,
            angle: qq,
            level: 0,
            animation: null
          }, this.flashes.push(Oq)
        }
        const mq = null === (gq = Oq.animation) || void 0 === gq || null === (Yq = gq.effect) || void 0 === Yq ? void 0 : Yq.getComputedTiming().progress,
          xq = null === mq || void 0 === mq ? 0 : Oq.level * (1 - mq);
        Oq.level = Math.min(1, Math.max(Eq, xq + .6 * Eq)), Oq.angle = qq;
        const {
          x: Aq,
          y: cq,
          rx: uq,
          ry: Bq
        } = function(qq, Eq) {
          const gq = window.innerWidth,
            Yq = window.innerHeight;
          if (null === qq) return {
            x: gq / 2,
            y: Yq / 2,
            rx: 0,
            ry: 0
          };
          const lq = Math.sin(qq),
            Oq = -Math.cos(qq),
            mq = gq / 2 / Math.max(1e-6, Math.abs(lq)),
            xq = Yq / 2 / Math.max(1e-6, Math.abs(Oq)),
            Aq = Math.min(mq, xq),
            cq = Math.round(gq / 2 + lq * Aq),
            uq = Math.round(Yq / 2 + Oq * Aq),
            Bq = Yq / 100 * (.85 + .25 * Eq),
            Wq = mq <= xq,
            Nq = Math.round((Wq ? 30 : 74) * Bq),
            aq = Math.round((Wq ? 58 : 26) * Bq);
          return {
            x: cq,
            y: uq,
            rx: Nq,
            ry: aq
          }
        }(qq, Oq.level), {
          style: Wq
        } = Oq.glow;
        Oq.glow.classList.toggle("Everywhere", null === qq), Wq.setProperty("--glowX", `${Aq}px`), Wq.setProperty("--glowY", `${cq}px`), Wq.setProperty("--glowRx", `${uq}px`), Wq.setProperty("--glowRy", `${Bq}px`), Oq.element.style.transformOrigin = `${Aq}px ${cq}px`, null === (lq = Oq.animation) || void 0 === lq || lq.cancel();
        const Nq = Oq.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Oq.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Oq.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Oq.level
        });
        Oq.animation = Nq;
        const aq = Oq;
        Nq.onfinish = () => {
          aq.animation === Nq && (aq.element.remove(), hq(this.flashes, aq))
        }
      }
      clearHits() {
        for (const Yq of this.arcs) {
          var qq, Eq;
          null === (qq = Yq.fade) || void 0 === qq || qq.cancel(), Yq.fade = null, null === (Eq = Yq.pop) || void 0 === Eq || Eq.cancel(), Yq.element.remove()
        }
        this.arcs.length = 0;
        for (const Yq of this.flashes) {
          var gq;
          null === (gq = Yq.animation) || void 0 === gq || gq.cancel(), Yq.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function rq(qq, Eq) {
      return Math.abs(Math.atan2(Math.sin(qq - Eq), Math.cos(qq - Eq)))
    }

    function vq(qq) {
      return Math.max(0, Math.min(1, qq))
    }

    function hq(qq, Eq) {
      const gq = qq.indexOf(Eq); - 1 !== gq && qq.splice(gq, 1)
    }
    var nq = gq(1018),
      bq = gq.n(nq),
      iq = gq(36648),
      Zq = gq(36740),
      fq = gq(1183),
      Mq = gq(1416);
    const Tq = "frontlineHudChanged",
      zq = "frontlineScoreboardChanged";
    class Sq {
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
      ga(qq) {
        this.wire = qq, cq.i.TV(Tq, qq, !0)
      }
      receiveScoreboard(qq) {
        let Eq = "scoreboard" === qq[0] ? performance.now() + qq[5] : 0;
        const gq = this.scoreboard.endsAt;
        0 !== Eq && 0 !== gq && Math.abs(Eq - gq) < 1e3 && (Eq = gq), this.scoreboard = {
          wire: qq,
          endsAt: Eq
        }, cq.i.TV(zq, this.scoreboard, !0)
      }
    }
    var pq = gq(1070);
    const Gq = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Lq(qq) {
      const [Eq, gq] = (0, lq.useState)((() => (qq - performance.now()) / 1e3));
      return (0, lq.useEffect)((() => {
        if (0 === qq) return;
        const Eq = () => {
          gq((qq - performance.now()) / 1e3)
        };
        Eq();
        const Yq = window.setInterval(Eq, 250);
        return () => {
          window.clearInterval(Yq)
        }
      }), [qq]), Eq
    }

    function Jq(qq) {
      let {
        className: Eq,
        point: gq
      } = qq;
      const [Yq, lq, Oq, mq, xq, Aq] = gq;
      return (0, pq.jsxs)("div", {
        className: bq()(Eq, `Owner-${lq||"None"}`, `Leader-${mq||"None"}`, {
          Contested: xq,
          Here: Aq
        }),
        children: [(0, pq.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Yq
        }), (0, pq.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Oq}%`
          }
        })]
      })
    }
    const kq = (0, lq.memo)((function(qq) {
        let {
          points: Eq,
          markers: gq
        } = qq;
        const {
          t: Yq
        } = (0, fq.v)();
        return Eq ? (0, pq.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Eq.map((qq => {
            const [Eq, , , , , , , lq] = qq;
            return (0, pq.jsxs)("div", {
              ref: gq.bindMarker(Eq),
              className: "FrontlinePointMarker",
              children: [(0, pq.jsx)(Jq, {
                className: "FrontlinePointMarkerTile",
                point: qq
              }), (0, pq.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [lq && (0, pq.jsx)("span", {
                  className: bq()("FrontlinePointMarkerHomeTurf", `Team-${lq}`),
                  children: Yq("frontlineHud:homeTurf", {
                    team: Yq(Gq[lq])
                  })
                }), (0, pq.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Eq)
          }))
        }) : null
      })),
      Rq = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Uq = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Fq(qq) {
      let {
        hud: Eq,
        crosshair: gq,
        damage: Yq,
        markers: lq
      } = qq;
      const Oq = (0, Mq.h)(Tq, Eq.getWire()),
        mq = (0, Mq.h)(zq, Eq.getScoreboard());
      return (0, pq.jsxs)(pq.Fragment, {
        children: [(0, pq.jsx)(sq, {
          damage: Yq
        }), (0, pq.jsx)(kq, {
          points: "scoreboard" === mq.wire[0] ? mq.wire[6] : null,
          markers: lq
        }), (0, pq.jsx)(wq, {
          view: mq
        }), (0, pq.jsx)("div", {
          className: "FrontlineReticle",
          ref: gq.bindElement
        }), (0, pq.jsx)(iq.g, {
          children: (0, pq.jsx)(Xq, {
            wire: Oq
          })
        })]
      })
    }
    const sq = (0, lq.memo)((function(qq) {
        let {
          damage: Eq
        } = qq;
        return (0, pq.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Eq.bindElement,
          children: [(0, pq.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, pq.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, pq.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Xq = (0, lq.memo)((function(qq) {
        let {
          wire: Eq
        } = qq;
        const {
          t: gq
        } = (0, fq.v)();
        if ("capture" === Eq[0]) {
          const [, qq, Yq, lq, Oq, mq, xq] = Eq, Aq = Math.round(lq / 100 * 24);
          return (0, pq.jsxs)("div", {
            className: bq()("FrontlinePlate", `Status-${Yq}`, `Leader-${Oq||"None"}`),
            children: [(0, pq.jsx)(eq, {}), (0, pq.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, pq.jsx)("span", {
                className: "FrontlineObjective",
                children: qq
              }), (0, pq.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, pq.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: gq("frontlineHud:objective", {
                    point: qq,
                    friendly: mq,
                    enemy: xq
                  })
                }), (0, pq.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: gq(Rq[Yq])
                })]
              }), (0, pq.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(lq).padStart(3, "0"), (0, pq.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, pq.jsx)(Cq, {
              segments: 24,
              lit: Aq
            })]
          })
        }
        if ("alert" === Eq[0]) {
          const [, qq, Yq, lq] = Eq;
          return (0, pq.jsxs)("div", {
            className: bq()("FrontlinePlate", "FrontlineAlert", `Tone-${lq}`),
            children: [(0, pq.jsx)(eq, {}), (0, pq.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: gq(Uq[qq])
            }), (0, pq.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Yq
            })]
          })
        }
        return null
      })),
      wq = (0, lq.memo)((function(qq) {
        let {
          view: Eq
        } = qq;
        const {
          t: gq
        } = (0, fq.v)(), Yq = (0, lq.useRef)(null), Oq = function(qq, Eq) {
          const [gq, Yq] = (0, lq.useState)(!1);
          return (0, lq.useLayoutEffect)((() => {
            const Eq = qq.current;
            if (!Eq) return;
            const gq = document.querySelector(`.${Zq.e}`),
              lq = document.querySelector(`.${Zq.i}`),
              Oq = () => {
                var qq;
                const Oq = Eq.querySelector(".FrontlineTeamTrack"),
                  mq = (0, Aq.getRemInPx)(),
                  xq = Eq.getBoundingClientRect().width - 2 * (null !== (qq = null === Oq || void 0 === Oq ? void 0 : Oq.getBoundingClientRect().width) && void 0 !== qq ? qq : 0),
                  cq = window.innerWidth / 2,
                  uq = gq ? gq.getBoundingClientRect().right : 0,
                  Bq = lq ? lq.getBoundingClientRect().left : window.innerWidth,
                  Wq = Math.min(cq - uq, Bq - cq) - Zq.d - xq / 2,
                  Nq = Wq < 6 * mq,
                  aq = Nq ? (window.innerWidth - xq) / 2 - Zq.d : Wq;
                Eq.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(aq,14*mq)))}px`), Yq(Nq)
              };
            Oq();
            const mq = new ResizeObserver(Oq);
            for (const qq of [Eq, gq, lq]) qq && mq.observe(qq);
            return window.addEventListener("resize", Oq), () => {
              mq.disconnect(), window.removeEventListener("resize", Oq)
            }
          }), [qq, Eq]), gq
        }(Yq, "scoreboard" === Eq.wire[0]);
        if ("scoreboard" !== Eq.wire[0]) return null;
        const [, mq, xq, cq, uq, , Bq] = Eq.wire, Wq = "Red" === mq ? "Blue" : "Red";
        return (0, pq.jsxs)("div", {
          className: bq()("FrontlineScoreboardContainer", {
            Below: Oq
          }),
          children: [(0, pq.jsxs)("div", {
            ref: Yq,
            className: "FrontlineScoreboard",
            children: [(0, pq.jsx)(eq, {}), (0, pq.jsx)(Kq, {
              team: mq,
              tickets: xq,
              goal: uq,
              side: "Friendly"
            }), (0, pq.jsx)("div", {
              className: "FrontlinePoints",
              children: Bq.map((qq => (0, pq.jsx)(Jq, {
                className: "FrontlinePoint",
                point: qq
              }, qq[0])))
            }), (0, pq.jsx)(Kq, {
              team: Wq,
              tickets: cq,
              goal: uq,
              side: "Enemy"
            })]
          }), (0, pq.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, pq.jsx)(Iq, {
              endsAt: Eq.endsAt
            }), (0, pq.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: gq("frontlineHud:ticketGoal", {
                goal: uq
              })
            })]
          })]
        })
      }));

    function Kq(qq) {
      let {
        team: Eq,
        tickets: gq,
        goal: Yq,
        side: lq
      } = qq;
      const {
        t: Oq
      } = (0, fq.v)(), mq = String(gq).padStart(3, "0"), xq = mq.search(/[1-9]/), Aq = -1 === xq ? mq : mq.slice(0, xq), cq = Math.min(20, Math.floor(gq / Yq * 20));
      return (0, pq.jsxs)("div", {
        className: bq()("FrontlineTeamScore", lq, `Team-${Eq}`),
        children: [(0, pq.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, pq.jsx)("span", {
            className: "Lead",
            children: Aq
          }), -1 !== xq && mq.slice(xq)]
        }), (0, pq.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, pq.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Oq(Gq[Eq])
          }), (0, pq.jsx)(Cq, {
            segments: 20,
            lit: cq
          })]
        })]
      })
    }

    function Cq(qq) {
      let {
        segments: Eq,
        lit: gq
      } = qq;
      return (0, pq.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Eq
        }, ((qq, Eq) => (0, pq.jsx)("i", {
          className: bq()({
            Lit: Eq < gq
          })
        }, Eq)))
      })
    }

    function Iq(qq) {
      let {
        endsAt: Eq
      } = qq;
      const gq = Math.max(0, Math.ceil(Lq(Eq)));
      return (0, pq.jsxs)("div", {
        className: bq()("FrontlineClock", {
          Urgent: gq <= 60
        }),
        children: [Math.floor(gq / 60), ":", String(gq % 60).padStart(2, "0")]
      })
    }

    function eq() {
      return (0, pq.jsxs)(pq.Fragment, {
        children: [(0, pq.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, pq.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Dq = gq(36736),
      qE = gq(1241),
      EE = gq(38471),
      gE = gq(38505);
    class YE {
      constructor(qq) {
        var Eq;
        this.hud = qq, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.eN = !1, this.EQ = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.EQ), null === (Eq = window.visualViewport) || void 0 === Eq || Eq.addEventListener("resize", this.EQ)
      }
      bindMarker(qq) {
        let Eq = this.refs.get(qq);
        return Eq || (Eq = Eq => {
          var gq;
          null === (gq = this.markers.get(qq)) || void 0 === gq || gq.stopObserving(), this.markers.delete(qq), Eq && !this.eN && this.markers.set(qq, this.mount(Eq))
        }, this.refs.set(qq, Eq)), Eq
      }
      frame(qq, Eq) {
        this.render = qq;
        const gq = this.hud.getScoreboard().wire;
        if ("scoreboard" === gq[0] && 0 !== this.markers.size)
          for (const [Yq, , , , , , lq] of gq[6]) {
            const qq = this.markers.get(Yq);
            qq && lq && (qq.target ??= [0, 0, 0], qq.target[0] = lq[0], qq.target[1] = lq[1] + 2.5, qq.target[2] = lq[2], this.place(qq), this.AY(qq, Eq && Math.hypot(lq[0] - Eq[0], lq[1] - Eq[1], lq[2] - Eq[2])))
          }
      }
      dispose() {
        var qq;
        this.eN = !0, window.removeEventListener("resize", this.EQ), null === (qq = window.visualViewport) || void 0 === qq || qq.removeEventListener("resize", this.EQ);
        for (const Eq of this.markers.values()) Eq.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(qq) {
        const {
          render: Eq,
          viewport: gq
        } = this;
        if (!Eq || !qq.target) return;
        const Yq = (50 - Eq.screenBandPct.y) / 100 * gq.height,
          lq = {
            x: qq.halfSize.width + 8,
            top: qq.halfSize.height + 8,
            bottom: qq.halfSize.height + qq.labelsBelow + Yq
          },
          Oq = Eq.projectWorldPosToViewport(qq.target),
          mq = null !== Oq && void 0 !== Oq ? Oq : Eq.projectWorldPosToScreenPos(qq.target),
          xq = (0, gE.c)({
            x: mq.x,
            y: mq.y,
            text: Oq
          }, lq, gq);
        (0, EE.d)(qq.root, Math.round(100 * xq.x) / 100, Math.round(100 * xq.y) / 100)
      }
      AY(qq, Eq) {
        if (null === Eq) return void(null !== qq.metres && (qq.metres = null, qq.distance.textContent = ""));
        const gq = Date.now();
        (null === qq.metres || (0, Dq.b)(Eq, qq.metres, qq.metresShownAt)) && (qq.metres = Math.round(Eq), qq.metresShownAt = gq, qq.distance.textContent = (0, fq.s)(qE.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(qq.metres)
        }))
      }
      mount(qq) {
        const Eq = {
            root: qq,
            distance: qq.querySelector(".FrontlinePointMarkerDistance"),
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
          gq = qq.querySelector(".FrontlinePointMarkerLabels"),
          Yq = new ResizeObserver((() => {
            Eq.halfSize = {
              width: Math.max(qq.offsetWidth, gq.offsetWidth) / 2,
              height: qq.offsetHeight / 2
            }, Eq.labelsBelow = gq.offsetTop + gq.offsetHeight - qq.offsetHeight, this.place(Eq)
          }));
        return Yq.observe(qq, {
          box: "border-box"
        }), Yq.observe(gq, {
          box: "border-box"
        }), Eq.stopObserving = () => {
          Yq.disconnect()
        }, Eq
      }
    }
    var lE = gq(6310),
      OE = gq(2538);
    const mE = "frontlineRoundEndChanged";
    class xE {
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
      ga(qq) {
        const Eq = "roundEnd" === qq[0] ? performance.now() + qq[5] : 0;
        this.view = {
          wire: qq,
          key: this.view.key + 1,
          endsAt: Eq
        }, cq.i.TV(mE, this.view, !0)
      }
    }
    const AE = (0, lq.lazy)((() => (0, OE.b)(gq.e(192).then((() => gq(41509))), (qq => qq.FrontlineMvpLineup)))),
      cE = [4800, 4e3, 3200],
      uE = [1, 0, 2],
      BE = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      WE = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function NE(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, Mq.h)(mE, Eq.getView()),
        Yq = Lq(gq.endsAt);
      return "roundEnd" !== gq.wire[0] || 1e3 * Yq < -2e3 ? null : (0, pq.jsx)(aE, {
        wire: gq.wire,
        secondsLeft: Math.max(0, Math.ceil(Yq))
      }, gq.key)
    }
    const aE = (0, lq.memo)((function(qq) {
      let {
        wire: Eq,
        secondsLeft: gq
      } = qq;
      const {
        t: Oq
      } = (0, fq.v)(), [, mq, xq, Aq, cq, , uq, Bq] = Eq, Wq = (0, lq.useMemo)((() => uE.filter((qq => qq < Bq.length))), [Bq]), Nq = (0, lq.useMemo)((() => Wq.map((qq => {
        const [, , , , , Eq, gq] = Bq[qq];
        return {
          cosmetics: Yq.map(((qq, gq) => [qq, Eq[gq]])),
          size: 0 === qq ? 1.15 : .85,
          heldGun: {
            name: gq,
            aimed: 0 === qq
          },
          showAfterMs: cE[qq]
        }
      }))), [Bq, Wq]);
      return (0, pq.jsxs)("div", {
        className: bq()("FrontlineRoundEnd", `Result-${mq}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, pq.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, pq.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, pq.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, pq.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, pq.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (aq = Oq(BE[mq]), /\p{Script=Arabic}/u.test(aq) ? [aq] : (0, lE.b)(aq)).map(((qq, Eq) => (0, pq.jsx)("span", {
              style: {
                "--letter": Eq
              },
              children: qq
            }, Eq)))]
          }), (0, pq.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [xq && "victory" === mq && (0, pq.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Oq("frontlineRoundEnd:comeback")
            }), (0, pq.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, pq.jsx)("b", {
                className: "Friendly",
                children: Aq
              }), " \u2013 ", (0, pq.jsx)("b", {
                className: "Enemy",
                children: cq
              })]
            })]
          })]
        }), Wq.length > 0 && (0, pq.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Wq.length
          },
          children: [(0, pq.jsx)(lq.Suspense, {
            fallback: null,
            children: (0, pq.jsx)(AE, {
              className: "FrontlineRoundEndLineup",
              players: Nq
            })
          }), Wq.map((qq => (0, pq.jsx)(VE, {
            mvp: Bq[qq],
            place: qq
          }, qq)))]
        }), (0, pq.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Oq("frontlineRoundEnd:nextFront", {
            map: uq,
            seconds: String(gq)
          })
        })]
      });
      var aq
    }));

    function VE(qq) {
      let {
        mvp: Eq,
        place: gq
      } = qq;
      const {
        t: Yq
      } = (0, fq.v)(), [lq, Oq, mq, xq, Aq] = Eq, [cq, uq] = Yq(function(qq, Eq) {
        return 1 === Eq && "damage" !== qq ? `frontlineRoundEnd:${qq}One` : `frontlineRoundEnd:${qq}`
      }(mq, xq), {
        name: "\0",
        count: xq.toLocaleString()
      }).split("\0");
      return (0, pq.jsxs)("div", {
        className: bq()("FrontlineMvpCard", `Place-${gq+1}`, `Team-${Oq}`),
        style: {
          "--revealMs": `${cE[gq]}ms`
        },
        children: [(0, pq.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, pq.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, pq.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Yq(WE[gq])
        }), (0, pq.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [cq, (0, pq.jsx)("span", {
            className: "FrontlineMvpName",
            children: lq
          }), uq]
        }), (0, pq.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Aq
        })]
      })
    }
    const dE = function(qq, Eq, gq, Yq) {
      let {
        localPlayerId: mq
      } = Yq;
      const xq = new Sq,
        Aq = new xE;
      let cq = null,
        uq = null,
        Bq = null,
        Wq = null,
        Nq = null,
        aq = [!1, !1];
      const Vq = () => {
        var qq, Eq;
        const [gq, Yq] = aq;
        null === (qq = uq) || void 0 === qq || qq.hG(!gq), null === (Eq = Bq) || void 0 === Eq || Eq.hG(!Yq)
      };
      return {
        onCreate: qq => {
          cq = qq, uq = new oq(qq, mq), Bq = new tq(qq, mq), Wq = new YE(xq), Vq(), Nq = (0, Oq.r)((0, lq.createElement)(lq.Fragment, null, (0, lq.createElement)(Fq, {
            hud: xq,
            crosshair: uq,
            damage: Bq,
            markers: Wq
          }), (0, lq.createElement)(NE, {
            controller: Aq
          })))
        },
        onClose: () => {
          var qq, Eq, gq, Yq;
          null === (qq = Nq) || void 0 === qq || qq(), null === (Eq = uq) || void 0 === Eq || Eq.dispose(), uq = null, null === (gq = Bq) || void 0 === gq || gq.dispose(), Bq = null, null === (Yq = Wq) || void 0 === Yq || Yq.dispose(), Wq = null, cq = null
        },
        onAfterRender: (qq, Eq) => {
          var gq, Yq, lq, Oq;
          null === (gq = uq) || void 0 === gq || gq.frame(qq, Eq.tanHalfFovY), null === (Yq = Bq) || void 0 === Yq || Yq.frame(Eq.cameraHeading), null === (lq = Wq) || void 0 === lq || lq.frame(Eq, null !== (Oq = cq) && void 0 !== Oq && Oq.checkValid(mq) ? cq.Py(mq) : null)
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          "frontlineHud" === qq ? xq.ga(Eq) : "frontlineScoreboard" === qq ? xq.receiveScoreboard(Eq) : "frontlineRoundEnd" === qq ? Aq.ga(Eq) : "frontlinePrefs" === qq && (aq = Eq, Vq())
        }
      }
    }
  },
  6310: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    const Yq = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function lq(qq) {
      return null === Yq ? Array.from(qq) : Array.from(Yq.segment(qq), (qq => {
        let {
          segment: Eq
        } = qq;
        return Eq
      }))
    }
  },
  38471: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      e: () => Oq
    });
    const Yq = new WeakMap;

    function lq(qq) {
      let Eq = Yq.get(qq);
      return Eq || (Eq = {
        hidden: qq.hidden,
        x: NaN,
        y: NaN
      }, Yq.set(qq, Eq)), Eq
    }

    function Oq(qq, Eq) {
      const gq = lq(qq);
      gq.hidden !== Eq && (gq.hidden = Eq, qq.hidden = Eq)
    }

    function mq(qq, Eq, gq) {
      const Yq = lq(qq);
      Yq.x === Eq && Yq.y === gq || (Yq.x = Eq, Yq.y = gq, qq.style.translate = `${Eq}vw ${gq}vh`)
    }
  },
  37111: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
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
for (const qq in modules) Object.freeze(modules[qq]);