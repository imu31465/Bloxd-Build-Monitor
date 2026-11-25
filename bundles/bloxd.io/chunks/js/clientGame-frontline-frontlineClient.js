export const id = 17;
export const ids = [17];
export const modules = {
  36990: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      h: () => Ou,
      k: () => cu,
      n: () => bu
    });
    var su = ju(34547),
      Uu = ju(36992),
      Zu = ju(36998),
      Xu = ju(8942),
      lu = ju(1499),
      qu = ju(58),
      fu = ju(65),
      Cu = ju(1154);

    function bu() {
      var uu;
      return (0, lu.g)(Uu.c, (0, Uu.l)()), (0, Cu.jsx)(Cu.Fragment, {
        children: null === (uu = (0, Uu.l)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function cu(uu) {
      var Eu;
      let {
        show: ju
      } = uu;
      (0, lu.g)(Uu.c, (0, Uu.l)());
      const fu = null === (Eu = (0, Uu.l)()) || void 0 === Eu ? void 0 : Eu.menu;
      return (0, qu.useEffect)((() => {
        var uu;
        ju || (null === fu || void 0 === fu || null === (uu = fu.onClose) || void 0 === uu || uu.call(fu), (0, Zu.q)())
      }), [ju, fu]), (0, qu.useEffect)((() => ju ? (0, Xu.f)(Zu.x, Zu.h) : void 0), [ju]), (0, Cu.jsx)(su.b, {
        showing: ju,
        globallyUniqueKey: "clientGameMenu",
        children: null === fu || void 0 === fu ? void 0 : fu.content
      })
    }

    function Nu(uu) {
      let {
        placement: Eu = "bottom"
      } = uu;
      return (0, Cu.jsx)("div", {
        id: `clientGameHud-${Eu}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ou(uu) {
      let {
        children: Eu,
        placement: ju = "bottom"
      } = uu;
      const [su, Uu] = (0, qu.useState)(null);
      return (0, qu.useEffect)((() => {
        Uu(document.getElementById(`clientGameHud-${ju}`))
      }), [ju]), su ? (0, fu.createPortal)(Eu, su) : null
    }
  },
  34547: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(4723),
      Uu = ju(4726);

    function Zu(uu) {
      let {
        children: Eu,
        showing: ju,
        globallyUniqueKey: Zu,
        alwaysMountChildren: Xu = !1,
        doGameplayStartStopOnShow: lu = !0,
        keepsMovement: qu = !1
      } = uu;
      return (0, Uu.e)(!0, ju, Zu, qu), (0, su.e)(lu, ju), ju || Xu ? Eu : null
    }
  },
  37075: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      f: () => Xu,
      i: () => lu,
      l: () => qu
    });
    var su = ju(58),
      Uu = ju(3285);
    const Zu = 8,
      Xu = "InGameHeaderContainer",
      lu = "TopRightElements";

    function qu(uu) {
      const [Eu] = (0, Uu.d)(), [ju, qu] = (0, su.useState)(!1);
      return (0, su.useLayoutEffect)((() => {
        if (!uu) return;
        const Eu = document.querySelector(`.${Xu}`),
          ju = document.querySelector(`.${lu}`),
          su = () => {
            const su = uu.getBoundingClientRect(),
              Uu = Eu ? Eu.getBoundingClientRect().right : 0,
              Xu = ju ? ju.getBoundingClientRect().left : window.innerWidth,
              lu = su.left < Uu + Zu,
              fu = su.right > Xu - Zu;
            qu(lu || fu)
          };
        su();
        const Uu = new ResizeObserver(su);
        return Uu.observe(uu), Eu && Uu.observe(Eu), ju && Uu.observe(ju), () => {
          Uu.disconnect()
        }
      }), [uu, Eu]), ju
    }
  },
  37066: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    const su = [{
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

    function Uu(uu, Eu, ju) {
      const Uu = Math.abs(uu - Eu),
        Zu = Date.now() - ju;
      for (const Xu of su)
        if (uu < Xu.maxDist) return Uu >= Xu.hardUpdateDist || Zu > Xu.timeBetweenSoftChecks && Uu >= Xu.softUpdateDist;
      return !1
    }
  },
  8942: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    let su = null;
    const Uu = function(uu) {
        const Eu = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return su = Eu, () => {
          su === Eu && (su = null)
        }
      },
      Zu = () => {
        var uu;
        return null !== (uu = su) && void 0 !== uu && uu.canCycle() ? su.cycle : null
      }
  },
  38857: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      var su;
      const {
        width: Uu,
        height: Zu
      } = ju, Xu = null !== (su = uu.text) && void 0 !== su ? su : uu, lu = (Xu.x / 100 - .5) * Uu, qu = (Xu.y / 100 - .5) * Zu, fu = Uu / 2 - Eu.x;
      if (null !== uu.text && Math.abs(lu) <= fu && qu >= Eu.top - Zu / 2 && qu <= Zu / 2 - Eu.bottom) return {
        x: Xu.x,
        y: Xu.y
      };
      const Cu = Math.min(0 === lu ? 1 / 0 : fu / Math.abs(lu), qu > 0 ? (Zu / 2 - Eu.bottom) / qu : qu < 0 ? (Eu.top - Zu / 2) / qu : 1 / 0);
      return !Number.isFinite(Cu) || Cu < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + lu * Cu / Uu * 100,
        y: 50 + qu * Cu / Zu * 100
      }
    }
    ju.d(Eu, {
      d: () => su
    })
  },
  36998: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Yu,
      j: () => hu,
      k: () => lu,
      o: () => cu,
      q: () => Du,
      r: () => bu,
      t: () => Mu,
      x: () => Ou,
      y: () => gu
    });
    var su = ju(22),
      Uu = ju(24);
    const Zu = "clientGameInventoryButtonsChanged",
      Xu = new Map;

    function lu() {
      return [...Xu.values()].sort(((uu, Eu) => {
        var ju, su;
        return (null !== (ju = uu.order) && void 0 !== ju ? ju : 0) - (null !== (su = Eu.order) && void 0 !== su ? su : 0)
      }))
    }
    let qu = null;

    function fu(uu) {
      qu = uu
    }
    let Cu = !1;

    function bu(uu) {
      Cu = !0;
      try {
        uu.onClick()
      } finally {
        Cu = !1
      }
      uu.panel && "clientGame" === su.d.get("openInGameMenuName") && fu(uu.id)
    }

    function cu() {
      return Cu
    }

    function Nu() {
      return lu().filter((uu => uu.panel && !uu.disabled))
    }

    function Ou(uu) {
      const Eu = Nu(),
        ju = Eu.findIndex((uu => uu.id === qu));
      return !(ju < 0 || Eu.length < 2) && (bu(Eu[(ju + uu + Eu.length) % Eu.length]), !0)
    }

    function Yu() {
      return null !== qu && Nu().length > 1
    }

    function hu() {
      fu(null)
    }

    function Du() {
      "inventory" !== su.d.get("openInGameMenuName") && fu(null)
    }

    function gu() {
      const uu = qu;
      return fu(null), uu
    }

    function Mu(uu) {
      return Xu.set(uu.id, uu), Uu.h.TY(Zu, lu(), !0), () => {
        Xu.get(uu.id) === uu && (Xu.delete(uu.id), Uu.h.TY(Zu, lu()))
      }
    }
  },
  36992: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => hu,
      g: () => Du,
      k: () => cu,
      l: () => fu,
      m: () => Yu,
      n: () => Nu,
      o: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(36998);
    const lu = "clientGameUiChanged";
    let qu = null;

    function fu() {
      return qu
    }

    function Cu(uu, Eu) {
      const ju = {
        content: uu,
        menu: Eu
      };
      return qu = ju, Uu.h.TY(lu, qu, !0), () => {
        qu === ju && (qu = null, Ou = !1, hu(), Uu.h.TY(lu, null))
      }
    }
    let bu = null;

    function cu() {
      return bu
    }

    function Nu(uu) {
      return bu = uu, () => {
        bu === uu && (bu = null)
      }
    }
    let Ou = !1;

    function Yu() {
      const uu = su.d.get("openInGameMenuName");
      "clientGame" !== uu && (Ou = "inventory" === uu), (0, Xu.o)() || (0, Xu.j)(), (0, Zu.t)(Zu.b), su.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hu() {
      gu(!1)
    }

    function Du() {
      gu(Ou)
    }

    function gu(uu) {
      "clientGame" === su.d.get("openInGameMenuName") && su.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, Xu.j)(), Ou = !1
    }
  },
  39728: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => hE
    });
    const su = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Uu = ju(58),
      Zu = ju(36992),
      Xu = ju(37428),
      lu = ju(37007),
      qu = ju(1779),
      fu = ju(24);
    const Cu = {
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
    const bu = 32;

    function cu(uu, Eu, ju, su) {
      return {
        tag: "line",
        attrs: {
          x1: uu,
          y1: Eu,
          x2: ju,
          y2: su,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Nu(uu) {
      return {
        tag: "circle",
        attrs: {
          cx: bu,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bu,
          r: uu,
          class: "Fill"
        }
      }
    }

    function Ou(uu, Eu) {
      return {
        tag: "path",
        attrs: {
          d: uu,
          "stroke-width": Eu
        }
      }
    }

    function Yu(uu, Eu, ju) {
      return {
        tag: "circle",
        attrs: {
          cx: bu,
          cy: bu,
          r: uu,
          "stroke-width": Eu,
          class: ju
        }
      }
    }

    function hu(uu, Eu, ju) {
      return {
        tag: "text",
        attrs: {
          x: uu,
          y: Eu,
          class: "Fill Label"
        },
        text: ju
      }
    }
    const Du = {
      pistol: uu => [cu(bu, bu - uu - 5, bu, bu - uu), cu(bu - uu - 5, bu, bu - uu, bu), cu(bu + uu, bu, bu + uu + 5, bu), Nu(1.4)],
      rifle: uu => [cu(bu, bu - uu - 8, bu, bu - uu), cu(bu, bu + uu, bu, bu + uu + 8), cu(bu - uu - 8, bu, bu - uu, bu), cu(bu + uu, bu, bu + uu + 8, bu), Nu(1)],
      smg: uu => {
        const Eu = Math.PI / 2,
          ju = [];
        for (let Xu = 0; Xu < 4; Xu++) ju.push((Uu = Xu * Eu + .35, Zu = (Xu + 1) * Eu - .35, Ou(`M${bu+(su=6+uu)*Math.cos(Uu)} ${bu+su*Math.sin(Uu)} A${su} ${su} 0 0 1 ${bu+su*Math.cos(Zu)} ${bu+su*Math.sin(Zu)}`, 2)));
        var su, Uu, Zu;
        return [...ju, Nu(1.4)]
      },
      shotgun: uu => [Yu(uu, 3, "Ring Outline"), Yu(uu, 1.5, "Ring")],
      marksman: uu => [Ou(`M${26-uu/2} ${39+uu/2} L32 33 L${38+uu/2} ${39+uu/2}`, 2), cu(14 - uu, bu, 24 - uu, bu, 1.5), cu(40 + uu, bu, 50 + uu, bu, 1.5), cu(14 - uu, 30, 14 - uu, 34, 1.5), cu(50 + uu, 30, 50 + uu, 34, 1.5)],
      machineGun: uu => {
        const Eu = 10 + uu,
          ju = [];
        for (const [su, Uu] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) ju.push(Ou(`M${bu+su*Eu} ${bu+Uu*(Eu-5)} L${bu+su*Eu} ${bu+Uu*Eu} L${bu+su*(Eu-5)} ${bu+Uu*Eu}`, 2));
        return [...ju, cu(bu, 28, bu, 36, 1.5), cu(28, bu, 36, bu, 1.5)]
      },
      launcher: () => [cu(14, 30, 50, 30, 1.5), cu(bu, 24, bu, 52, 1.5), cu(28, 38, 36, 38, 1.5), cu(29, 44, 35, 44, 1.5), cu(30, 50, 34, 50, 1.5), hu(38, 40, "100"), hu(37, 46, "200"), Nu(1.4, 30)],
      melee: () => [Ou("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Nu(1.2)],
      throwable: () => [Nu(1.6)]
    };

    function gu(uu) {
      let {
        tag: Eu,
        attrs: ju,
        text: su
      } = uu, Uu = `<${Eu}`;
      for (const [Zu, Xu] of Object.entries(ju)) Uu += ` ${Zu}="${Xu}"`;
      return void 0 === su ? `${Uu}/>` : `${Uu}>${su}</${Eu}>`
    }
    class Mu {
      constructor(uu, Eu) {
        this.api = uu, this.localPlayerId = Eu, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = uu => {
          this.element = uu, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, uu && !this.enabled && (uu.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, qu.getRemInPx)()))
        }, this.tokens = [fu.h.subscribe("aimingOverlay", (uu => {
          this.sniperOverlay = "sniper" === uu
        })), fu.h.subscribe("mouseState", (uu => {
          let {
            isDown: Eu
          } = uu;
          this.mouseDown = Eu
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Wk(uu) {
        uu !== this.enabled && (this.enabled = uu, this.drawnVisible = null, uu || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(uu, Eu) {
        var ju, su;
        if (!this.enabled) return;
        const {
          api: Uu
        } = this, Zu = Uu.isAlive(this.localPlayerId) && null !== (ju = null === (su = Uu.yEu(this.localPlayerId)) || void 0 === su ? void 0 : su.name) && void 0 !== ju ? ju : null, Xu = (lu = Zu) && Cu[lu] || null;
        var lu;
        if (this.setOwnsCrosshair(null !== Xu), !this.element) return;
        const qu = Uu.getHeldGunInaccuracy(),
          fu = null !== qu,
          bu = null !== Xu && !this.sniperOverlay && Uu.isCrosshairShown();
        if (bu !== this.drawnVisible && (this.drawnVisible = bu, this.element.style.display = bu ? "block" : "none"), !bu) return;
        const cu = fu ? function(uu) {
            return "launcher" === uu || "melee" === uu || "throwable" === uu ? "none" : "shotgun" === uu ? "cone" : "offset"
          }(Xu) : "none",
          Nu = null !== qu && void 0 !== qu ? qu : 0;
        "cone" === cu ? this.drawCone(Xu, this.coneRadiusVh(Nu, Eu) * this.gapPerVh, uu) : (this.coneDrawn = !1, this.draw(Xu, "none" === cu ? 2 : this.offsetGap(Nu)));
        const Ou = !fu && this.mouseDown;
        Ou !== this.drawnPressed && (this.drawnPressed = Ou, this.element.classList.toggle("Pressed", Ou))
      }
      dispose() {
        for (const uu of this.tokens) fu.h.unsubscribe(uu);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(uu, Eu) {
        var ju, su;
        uu !== this.drawnFamily ? (this.drawnFamily = uu, this.drawnGap = Eu, this.element.innerHTML = function(uu, Eu) {
          return `<svg viewBox="0 0 64 64">${Du[uu](Eu).map(gu).join("")}</svg>`
        }(uu, Eu), this.shapes = Array.from(null !== (ju = null === (su = this.element.firstElementChild) || void 0 === su ? void 0 : su.children) && void 0 !== ju ? ju : [])) : Eu !== this.drawnGap && (this.drawnGap = Eu, function(uu, Eu, ju) {
          const su = Du[Eu](ju);
          for (let Uu = 0; Uu < su.length; Uu++)
            for (const [Eu, ju] of Object.entries(su[Uu].attrs)) {
              const su = String(ju);
              uu[Uu].getAttribute(Eu) !== su && uu[Uu].setAttribute(Eu, su)
            }
        }(this.shapes, uu, Eu))
      }
      drawCone(uu, Eu, ju) {
        uu === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Eu - this.shownRadius) * (1 - Math.exp(-ju / 80)) : this.shownRadius = Eu, this.coneDrawn = !0, this.draw(uu, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(uu, Eu) {
        if (!(Eu > 0)) return 1;
        const ju = uu * Xu.h / 2;
        return Math.max(50 * Math.tan(ju) / Eu, 1)
      }
      offsetGap(uu) {
        const Eu = 2 + ((0, lu.e)(uu) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Eu) / 2)
      }
      setOwnsCrosshair(uu) {
        uu !== this.ownsCrosshair && (this.ownsCrosshair = uu, document.body.classList.toggle("FrontlineCustomCrosshair", uu))
      }
    }
    const eu = "FrontlineCustomDamage",
      Gu = .45,
      pu = .2;
    class wu {
      constructor(uu, Eu) {
        this.api = uu, this.localPlayerId = Eu, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.ru = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = uu => {
          var Eu, ju;
          this.clearHits(), this.root = uu, this.lowLayer = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.querySelector(".FrontlineDamageLow")) && void 0 !== Eu ? Eu : null, this.arcLayer = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.querySelector(".FrontlineDamageArcs")) && void 0 !== ju ? ju : null, this.showRoot(), this.drawLow()
        }, this.token = fu.h.subscribe("damagedByOtherPlayer", (uu => {
          let {
            direction: Eu,
            Ku: ju
          } = uu;
          this.onHurt(Eu, ju)
        })), this.syncHealth(), document.body.classList.add(eu)
      }
      Wk(uu) {
        uu !== this.enabled && (this.enabled = uu, document.body.classList.toggle(eu, uu), uu || this.clearHits(), this.showRoot())
      }
      frame(uu) {
        this.syncHealth(), this.cameraHeading = uu;
        for (const Eu of this.arcs) this.drawArcAngle(Eu)
      }
      dispose() {
        fu.h.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(eu)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const uu = this.api.getClientOption(this.localPlayerId, "_health"),
          Eu = this.api.getClientOption(this.localPlayerId, "_shield"),
          ju = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(uu, this.readHealth) && Object.is(Eu, this.readShield) && Object.is(ju, this.readMaxHealth)) return;
        if (this.readHealth = uu, this.readShield = Eu, this.readMaxHealth = ju, null === uu || void 0 === uu || !ju) return this.lastHealthPool = null, this.maxHealth = null, this.ru = 1, this.dead = !1, void this.drawLow();
        const su = uu + (null !== Eu && void 0 !== Eu ? Eu : 0);
        if (null !== this.lastHealthPool && su < this.lastHealthPool) {
          const uu = performance.now(),
            Eu = (this.lastHealthPool - su) / ju;
          this.lastDrop = uu - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Eu,
            at: this.lastDrop.at
          } : {
            frac: Eu,
            at: uu
          }
        }
        this.dead = uu <= 0, this.dead && this.clearHits(), this.lastHealthPool = su, this.maxHealth = ju, this.ru = uu > 0 ? uu / ju : 1, this.drawLow()
      }
      onHurt(uu, Eu) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const ju = Math.min(1, this.takeDamageFrac(Eu) / .3);
        null !== uu && this.showArc(uu, ju), this.flashEdge(null === uu ? null : uu - this.cameraHeading, .4 + .6 * ju)
      }
      takeDamageFrac(uu) {
        if (void 0 !== uu && this.maxHealth) return uu / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Eu
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Eu
      }
      drawLow() {
        if (!this.lowLayer) return;
        const uu = du((Gu - this.ru) / .25),
          Eu = du((pu - this.ru) / .15000000000000002),
          ju = this.ru < Gu;
        this.lowLayer.classList.toggle("Active", ju), this.lowLayer.classList.toggle("Critical", this.ru < pu), this.lowLayer.style.opacity = String(ju ? .55 + .3 * uu + .15 * Eu : 0)
      }
      showArc(uu, Eu) {
        var ju, su;
        if (!this.arcLayer) return;
        let Uu = this.arcs.find((Eu => Ju(Eu.direction, uu) < .6));
        if (!Uu) {
          const Eu = document.createElement("div");
          Eu.className = "FrontlineDamageArc", Eu.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(Eu), Uu = {
            element: Eu,
            direction: uu,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Uu)
        }
        Uu.direction = uu, this.drawArcAngle(Uu);
        const Zu = Uu.fade ? Number(getComputedStyle(Uu.element).opacity) : 0;
        null === (ju = Uu.fade) || void 0 === ju || ju.cancel(), null === (su = Uu.pop) || void 0 === su || su.cancel(), Uu.element.style.opacity = "1";
        const Xu = Uu.element.animate([{
          opacity: Zu
        }, {
          opacity: 1
        }], 144);
        Uu.fade = Xu, Uu.pop = Uu.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Eu
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const lu = Uu;
        Xu.onfinish = () => {
          if (lu.fade !== Xu) return;
          const uu = lu.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          uu.startTime = Xu.startTime, lu.fade = uu, uu.onfinish = () => {
            lu.fade === uu && (lu.element.remove(), au(this.arcs, lu))
          }
        }
      }
      drawArcAngle(uu) {
        const Eu = uu.direction - this.cameraHeading;
        (null === uu.drawnAngle || Math.abs(Eu - uu.drawnAngle) > .005) && (uu.drawnAngle = Eu, uu.element.style.rotate = `${Eu}rad`)
      }
      flashEdge(uu, Eu) {
        var ju, su, Uu;
        if (!this.root) return;
        let Zu = this.flashes.find((Eu => null === Eu.angle || null === uu ? Eu.angle === uu : Ju(Eu.angle, uu) < .5));
        if (!Zu) {
          const Eu = document.createElement("div");
          Eu.className = "FrontlineDamageFlash";
          const ju = Eu.appendChild(document.createElement("div"));
          ju.className = "FrontlineDamageFlashGlow", this.root.insertBefore(Eu, this.arcLayer), Zu = {
            element: Eu,
            glow: ju,
            angle: uu,
            level: 0,
            animation: null
          }, this.flashes.push(Zu)
        }
        const Xu = null === (ju = Zu.animation) || void 0 === ju || null === (su = ju.effect) || void 0 === su ? void 0 : su.getComputedTiming().progress,
          lu = null === Xu || void 0 === Xu ? 0 : Zu.level * (1 - Xu);
        Zu.level = Math.min(1, Math.max(Eu, lu + .6 * Eu)), Zu.angle = uu;
        const {
          x: qu,
          y: fu,
          rx: Cu,
          ry: bu
        } = function(uu, Eu) {
          const ju = window.innerWidth,
            su = window.innerHeight;
          if (null === uu) return {
            x: ju / 2,
            y: su / 2,
            rx: 0,
            ry: 0
          };
          const Uu = Math.sin(uu),
            Zu = -Math.cos(uu),
            Xu = ju / 2 / Math.max(1e-6, Math.abs(Uu)),
            lu = su / 2 / Math.max(1e-6, Math.abs(Zu)),
            qu = Math.min(Xu, lu),
            fu = Math.round(ju / 2 + Uu * qu),
            Cu = Math.round(su / 2 + Zu * qu),
            bu = su / 100 * (.85 + .25 * Eu),
            cu = Xu <= lu,
            Nu = Math.round((cu ? 30 : 74) * bu),
            Ou = Math.round((cu ? 58 : 26) * bu);
          return {
            x: fu,
            y: Cu,
            rx: Nu,
            ry: Ou
          }
        }(uu, Zu.level), {
          style: cu
        } = Zu.glow;
        Zu.glow.classList.toggle("Everywhere", null === uu), cu.setProperty("--glowX", `${qu}px`), cu.setProperty("--glowY", `${fu}px`), cu.setProperty("--glowRx", `${Cu}px`), cu.setProperty("--glowRy", `${bu}px`), Zu.element.style.transformOrigin = `${qu}px ${fu}px`, null === (Uu = Zu.animation) || void 0 === Uu || Uu.cancel();
        const Nu = Zu.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Zu.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Zu.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Zu.level
        });
        Zu.animation = Nu;
        const Ou = Zu;
        Nu.onfinish = () => {
          Ou.animation === Nu && (Ou.element.remove(), au(this.flashes, Ou))
        }
      }
      clearHits() {
        for (const su of this.arcs) {
          var uu, Eu;
          null === (uu = su.fade) || void 0 === uu || uu.cancel(), su.fade = null, null === (Eu = su.pop) || void 0 === Eu || Eu.cancel(), su.element.remove()
        }
        this.arcs.length = 0;
        for (const su of this.flashes) {
          var ju;
          null === (ju = su.animation) || void 0 === ju || ju.cancel(), su.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function Ju(uu, Eu) {
      return Math.abs(Math.atan2(Math.sin(uu - Eu), Math.cos(uu - Eu)))
    }

    function du(uu) {
      return Math.max(0, Math.min(1, uu))
    }

    function au(uu, Eu) {
      const ju = uu.indexOf(Eu); - 1 !== ju && uu.splice(ju, 1)
    }
    var Pu = ju(1105),
      ou = ju.n(Pu),
      ku = ju(36990),
      mu = ju(37075),
      vu = ju(1244),
      Ku = ju(1499);
    const Vu = "frontlineHudChanged",
      ru = "frontlineScoreboardChanged";
    class Qu {
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
      NO(uu) {
        this.wire = uu, fu.h.TY(Vu, uu, !0)
      }
      receiveScoreboard(uu) {
        let Eu = "scoreboard" === uu[0] ? performance.now() + uu[5] : 0;
        const ju = this.scoreboard.endsAt;
        0 !== Eu && 0 !== ju && Math.abs(Eu - ju) < 1e3 && (Eu = ju), this.scoreboard = {
          wire: uu,
          endsAt: Eu
        }, fu.h.TY(ru, this.scoreboard, !0)
      }
    }
    var iu = ju(1154);
    const Wu = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Su(uu) {
      const [Eu, ju] = (0, Uu.useState)((() => (uu - performance.now()) / 1e3));
      return (0, Uu.useEffect)((() => {
        if (0 === uu) return;
        const Eu = () => {
          ju((uu - performance.now()) / 1e3)
        };
        Eu();
        const su = window.setInterval(Eu, 250);
        return () => {
          window.clearInterval(su)
        }
      }), [uu]), Eu
    }

    function Iu(uu) {
      let {
        className: Eu,
        point: ju
      } = uu;
      const [su, Uu, Zu, Xu, lu, qu] = ju;
      return (0, iu.jsxs)("div", {
        className: ou()(Eu, `Owner-${Uu||"None"}`, `Leader-${Xu||"None"}`, {
          Contested: lu,
          Here: qu
        }),
        children: [(0, iu.jsx)("span", {
          className: "FrontlinePointLetter",
          children: su
        }), (0, iu.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Zu}%`
          }
        })]
      })
    }
    const Fu = (0, Uu.memo)((function(uu) {
        let {
          points: Eu,
          markers: ju
        } = uu;
        const {
          t: su
        } = (0, vu.A)();
        return Eu ? (0, iu.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Eu.map((uu => {
            const [Eu, , , , , , , Uu] = uu;
            return (0, iu.jsxs)("div", {
              ref: ju.bindMarker(Eu),
              className: "FrontlinePointMarker",
              children: [(0, iu.jsx)(Iu, {
                className: "FrontlinePointMarkerTile",
                point: uu
              }), (0, iu.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Uu && (0, iu.jsx)("span", {
                  className: ou()("FrontlinePointMarkerHomeTurf", `Team-${Uu}`),
                  children: su("frontlineHud:homeTurf", {
                    team: su(Wu[Uu])
                  })
                }), (0, iu.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Eu)
          }))
        }) : null
      })),
      Bu = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Lu = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function tu(uu) {
      let {
        hud: Eu,
        crosshair: ju,
        damage: su,
        markers: Uu
      } = uu;
      const Zu = (0, Ku.g)(Vu, Eu.getWire()),
        Xu = (0, Ku.g)(ru, Eu.getScoreboard());
      return (0, iu.jsxs)(iu.Fragment, {
        children: [(0, iu.jsx)(xu, {
          damage: su
        }), (0, iu.jsx)(Fu, {
          points: "scoreboard" === Xu.wire[0] ? Xu.wire[6] : null,
          markers: Uu
        }), (0, iu.jsx)(Hu, {
          view: Xu
        }), (0, iu.jsx)("div", {
          className: "FrontlineReticle",
          ref: ju.bindElement
        }), (0, iu.jsx)(ku.h, {
          children: (0, iu.jsx)(Tu, {
            wire: Zu
          })
        })]
      })
    }
    const xu = (0, Uu.memo)((function(uu) {
        let {
          damage: Eu
        } = uu;
        return (0, iu.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Eu.bindElement,
          children: [(0, iu.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, iu.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, iu.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Tu = (0, Uu.memo)((function(uu) {
        let {
          wire: Eu
        } = uu;
        const {
          t: ju
        } = (0, vu.A)();
        if ("capture" === Eu[0]) {
          const [, uu, su, Uu, Zu, Xu, lu] = Eu, qu = Math.round(Uu / 100 * 24);
          return (0, iu.jsxs)("div", {
            className: ou()("FrontlinePlate", `Status-${su}`, `Leader-${Zu||"None"}`),
            children: [(0, iu.jsx)(zu, {}), (0, iu.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, iu.jsx)("span", {
                className: "FrontlineObjective",
                children: uu
              }), (0, iu.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, iu.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: ju("frontlineHud:objective", {
                    point: uu,
                    friendly: Xu,
                    enemy: lu
                  })
                }), (0, iu.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: ju(Bu[su])
                })]
              }), (0, iu.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Uu).padStart(3, "0"), (0, iu.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, iu.jsx)(nu, {
              segments: 24,
              lit: qu
            })]
          })
        }
        if ("alert" === Eu[0]) {
          const [, uu, su, Uu] = Eu;
          return (0, iu.jsxs)("div", {
            className: ou()("FrontlinePlate", "FrontlineAlert", `Tone-${Uu}`),
            children: [(0, iu.jsx)(zu, {}), (0, iu.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ju(Lu[uu])
            }), (0, iu.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: su
            })]
          })
        }
        return null
      })),
      Hu = (0, Uu.memo)((function(uu) {
        let {
          view: Eu
        } = uu;
        const {
          t: ju
        } = (0, vu.A)(), su = (0, Uu.useRef)(null), Zu = function(uu, Eu) {
          const [ju, su] = (0, Uu.useState)(!1);
          return (0, Uu.useLayoutEffect)((() => {
            const Eu = uu.current;
            if (!Eu) return;
            const ju = document.querySelector(`.${mu.f}`),
              Uu = document.querySelector(`.${mu.i}`),
              Zu = () => {
                var uu;
                const Zu = Eu.querySelector(".FrontlineTeamTrack"),
                  Xu = (0, qu.getRemInPx)(),
                  lu = Eu.getBoundingClientRect().width - 2 * (null !== (uu = null === Zu || void 0 === Zu ? void 0 : Zu.getBoundingClientRect().width) && void 0 !== uu ? uu : 0),
                  fu = window.innerWidth / 2,
                  Cu = ju ? ju.getBoundingClientRect().right : 0,
                  bu = Uu ? Uu.getBoundingClientRect().left : window.innerWidth,
                  cu = Math.min(fu - Cu, bu - fu) - mu.e - lu / 2,
                  Nu = cu < 6 * Xu,
                  Ou = Nu ? (window.innerWidth - lu) / 2 - mu.e : cu;
                Eu.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Ou,14*Xu)))}px`), su(Nu)
              };
            Zu();
            const Xu = new ResizeObserver(Zu);
            for (const uu of [Eu, ju, Uu]) uu && Xu.observe(uu);
            return window.addEventListener("resize", Zu), () => {
              Xu.disconnect(), window.removeEventListener("resize", Zu)
            }
          }), [uu, Eu]), ju
        }(su, "scoreboard" === Eu.wire[0]);
        if ("scoreboard" !== Eu.wire[0]) return null;
        const [, Xu, lu, fu, Cu, , bu] = Eu.wire, cu = "Red" === Xu ? "Blue" : "Red";
        return (0, iu.jsxs)("div", {
          className: ou()("FrontlineScoreboardContainer", {
            Below: Zu
          }),
          children: [(0, iu.jsxs)("div", {
            ref: su,
            className: "FrontlineScoreboard",
            children: [(0, iu.jsx)(zu, {}), (0, iu.jsx)(Au, {
              team: Xu,
              tickets: lu,
              goal: Cu,
              side: "Friendly"
            }), (0, iu.jsx)("div", {
              className: "FrontlinePoints",
              children: bu.map((uu => (0, iu.jsx)(Iu, {
                className: "FrontlinePoint",
                point: uu
              }, uu[0])))
            }), (0, iu.jsx)(Au, {
              team: cu,
              tickets: fu,
              goal: Cu,
              side: "Enemy"
            })]
          }), (0, iu.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, iu.jsx)(yu, {
              endsAt: Eu.endsAt
            }), (0, iu.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ju("frontlineHud:ticketGoal", {
                goal: Cu
              })
            })]
          })]
        })
      }));

    function Au(uu) {
      let {
        team: Eu,
        tickets: ju,
        goal: su,
        side: Uu
      } = uu;
      const {
        t: Zu
      } = (0, vu.A)(), Xu = String(ju).padStart(3, "0"), lu = Xu.search(/[1-9]/), qu = -1 === lu ? Xu : Xu.slice(0, lu), fu = Math.min(20, Math.floor(ju / su * 20));
      return (0, iu.jsxs)("div", {
        className: ou()("FrontlineTeamScore", Uu, `Team-${Eu}`),
        children: [(0, iu.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, iu.jsx)("span", {
            className: "Lead",
            children: qu
          }), -1 !== lu && Xu.slice(lu)]
        }), (0, iu.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, iu.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Zu(Wu[Eu])
          }), (0, iu.jsx)(nu, {
            segments: 20,
            lit: fu
          })]
        })]
      })
    }

    function nu(uu) {
      let {
        segments: Eu,
        lit: ju
      } = uu;
      return (0, iu.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Eu
        }, ((uu, Eu) => (0, iu.jsx)("i", {
          className: ou()({
            Lit: Eu < ju
          })
        }, Eu)))
      })
    }

    function yu(uu) {
      let {
        endsAt: Eu
      } = uu;
      const ju = Math.max(0, Math.ceil(Su(Eu)));
      return (0, iu.jsxs)("div", {
        className: ou()("FrontlineClock", {
          Urgent: ju <= 60
        }),
        children: [Math.floor(ju / 60), ":", String(ju % 60).padStart(2, "0")]
      })
    }

    function zu() {
      return (0, iu.jsxs)(iu.Fragment, {
        children: [(0, iu.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, iu.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Ru = ju(37066),
      uE = ju(1303),
      EE = ju(38813),
      jE = ju(38857);
    class sE {
      constructor(uu) {
        var Eu;
        this.hud = uu, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.fO = !1, this.rD = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.rD), null === (Eu = window.visualViewport) || void 0 === Eu || Eu.addEventListener("resize", this.rD)
      }
      bindMarker(uu) {
        let Eu = this.refs.get(uu);
        return Eu || (Eu = Eu => {
          var ju;
          null === (ju = this.markers.get(uu)) || void 0 === ju || ju.stopObserving(), this.markers.delete(uu), Eu && !this.fO && this.markers.set(uu, this.mount(Eu))
        }, this.refs.set(uu, Eu)), Eu
      }
      frame(uu, Eu) {
        this.render = uu;
        const ju = this.hud.getScoreboard().wire;
        if ("scoreboard" === ju[0] && 0 !== this.markers.size)
          for (const [su, , , , , , Uu] of ju[6]) {
            const uu = this.markers.get(su);
            uu && Uu && (uu.target ??= [0, 0, 0], uu.target[0] = Uu[0], uu.target[1] = Uu[1] + 2.5, uu.target[2] = Uu[2], this.place(uu), this.rE(uu, Eu && Math.hypot(Uu[0] - Eu[0], Uu[1] - Eu[1], Uu[2] - Eu[2])))
          }
      }
      dispose() {
        var uu;
        this.fO = !0, window.removeEventListener("resize", this.rD), null === (uu = window.visualViewport) || void 0 === uu || uu.removeEventListener("resize", this.rD);
        for (const Eu of this.markers.values()) Eu.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(uu) {
        const {
          render: Eu,
          viewport: ju
        } = this;
        if (!Eu || !uu.target) return;
        const su = (50 - Eu.screenBandPct.y) / 100 * ju.height,
          Uu = {
            x: uu.halfSize.width + 8,
            top: uu.halfSize.height + 8,
            bottom: uu.halfSize.height + uu.labelsBelow + su
          },
          Zu = Eu.projectWorldPosToViewport(uu.target),
          Xu = null !== Zu && void 0 !== Zu ? Zu : Eu.projectWorldPosToScreenPos(uu.target),
          lu = (0, jE.d)({
            x: Xu.x,
            y: Xu.y,
            text: Zu
          }, Uu, ju);
        (0, EE.d)(uu.root, Math.round(100 * lu.x) / 100, Math.round(100 * lu.y) / 100)
      }
      rE(uu, Eu) {
        if (null === Eu) return void(null !== uu.metres && (uu.metres = null, uu.distance.textContent = ""));
        const ju = Date.now();
        (null === uu.metres || (0, Ru.c)(Eu, uu.metres, uu.metresShownAt)) && (uu.metres = Math.round(Eu), uu.metresShownAt = ju, uu.distance.textContent = (0, vu.x)(uE.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(uu.metres)
        }))
      }
      mount(uu) {
        const Eu = {
            root: uu,
            distance: uu.querySelector(".FrontlinePointMarkerDistance"),
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
          ju = uu.querySelector(".FrontlinePointMarkerLabels"),
          su = new ResizeObserver((() => {
            Eu.halfSize = {
              width: Math.max(uu.offsetWidth, ju.offsetWidth) / 2,
              height: uu.offsetHeight / 2
            }, Eu.labelsBelow = ju.offsetTop + ju.offsetHeight - uu.offsetHeight, this.place(Eu)
          }));
        return su.observe(uu, {
          box: "border-box"
        }), su.observe(ju, {
          box: "border-box"
        }), Eu.stopObserving = () => {
          su.disconnect()
        }, Eu
      }
    }
    var UE = ju(6644),
      ZE = ju(2742);
    const XE = "frontlineRoundEndChanged";
    class lE {
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
      NO(uu) {
        const Eu = "roundEnd" === uu[0] ? performance.now() + uu[5] : 0;
        this.view = {
          wire: uu,
          key: this.view.key + 1,
          endsAt: Eu
        }, fu.h.TY(XE, this.view, !0)
      }
    }
    const qE = (0, Uu.lazy)((() => (0, ZE.d)(Promise.all([ju.e(239), ju.e(202)]).then((() => ju(42023))), (uu => uu.FrontlineMvpLineup)))),
      fE = [4800, 4e3, 3200],
      CE = [1, 0, 2],
      bE = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      cE = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function NE(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, Ku.g)(XE, Eu.getView()),
        su = Su(ju.endsAt);
      return "roundEnd" !== ju.wire[0] || 1e3 * su < -2e3 ? null : (0, iu.jsx)(OE, {
        wire: ju.wire,
        secondsLeft: Math.max(0, Math.ceil(su))
      }, ju.key)
    }
    const OE = (0, Uu.memo)((function(uu) {
      let {
        wire: Eu,
        secondsLeft: ju
      } = uu;
      const {
        t: Zu
      } = (0, vu.A)(), [, Xu, lu, qu, fu, , Cu, bu] = Eu, cu = (0, Uu.useMemo)((() => CE.filter((uu => uu < bu.length))), [bu]), Nu = (0, Uu.useMemo)((() => cu.map((uu => {
        const [, , , , , Eu, ju] = bu[uu];
        return {
          cosmetics: su.map(((uu, ju) => [uu, Eu[ju]])),
          size: 0 === uu ? 1.15 : .85,
          heldGun: {
            name: ju,
            aimed: 0 === uu
          },
          showAfterMs: fE[uu]
        }
      }))), [bu, cu]);
      return (0, iu.jsxs)("div", {
        className: ou()("FrontlineRoundEnd", `Result-${Xu}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, iu.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, iu.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, iu.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, iu.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, iu.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Ou = Zu(bE[Xu]), /\p{Script=Arabic}/u.test(Ou) ? [Ou] : (0, UE.c)(Ou)).map(((uu, Eu) => (0, iu.jsx)("span", {
              style: {
                "--letter": Eu
              },
              children: uu
            }, Eu)))]
          }), (0, iu.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [lu && "victory" === Xu && (0, iu.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Zu("frontlineRoundEnd:comeback")
            }), (0, iu.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, iu.jsx)("b", {
                className: "Friendly",
                children: qu
              }), " \u2013 ", (0, iu.jsx)("b", {
                className: "Enemy",
                children: fu
              })]
            })]
          })]
        }), cu.length > 0 && (0, iu.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": cu.length
          },
          children: [(0, iu.jsx)(Uu.Suspense, {
            fallback: null,
            children: (0, iu.jsx)(qE, {
              className: "FrontlineRoundEndLineup",
              players: Nu
            })
          }), cu.map((uu => (0, iu.jsx)(YE, {
            mvp: bu[uu],
            place: uu
          }, uu)))]
        }), (0, iu.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Zu("frontlineRoundEnd:nextFront", {
            map: Cu,
            seconds: String(ju)
          })
        })]
      });
      var Ou
    }));

    function YE(uu) {
      let {
        mvp: Eu,
        place: ju
      } = uu;
      const {
        t: su
      } = (0, vu.A)(), [Uu, Zu, Xu, lu, qu] = Eu, [fu, Cu] = su(function(uu, Eu) {
        return 1 === Eu && "damage" !== uu ? `frontlineRoundEnd:${uu}One` : `frontlineRoundEnd:${uu}`
      }(Xu, lu), {
        name: "\0",
        count: lu.toLocaleString()
      }).split("\0");
      return (0, iu.jsxs)("div", {
        className: ou()("FrontlineMvpCard", `Place-${ju+1}`, `Team-${Zu}`),
        style: {
          "--revealMs": `${fE[ju]}ms`
        },
        children: [(0, iu.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, iu.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, iu.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: su(cE[ju])
        }), (0, iu.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [fu, (0, iu.jsx)("span", {
            className: "FrontlineMvpName",
            children: Uu
          }), Cu]
        }), (0, iu.jsx)("div", {
          className: "FrontlineMvpKit",
          children: qu
        })]
      })
    }
    const hE = function(uu, Eu, ju, su) {
      let {
        localPlayerId: Xu
      } = su;
      const lu = new Qu,
        qu = new lE;
      let fu = null,
        Cu = null,
        bu = null,
        cu = null,
        Nu = null,
        Ou = [!1, !1];
      const Yu = () => {
        var uu, Eu;
        const [ju, su] = Ou;
        null === (uu = Cu) || void 0 === uu || uu.Wk(!ju), null === (Eu = bu) || void 0 === Eu || Eu.Wk(!su)
      };
      return {
        onCreate: uu => {
          fu = uu, Cu = new Mu(uu, Xu), bu = new wu(uu, Xu), cu = new sE(lu), Yu(), Nu = (0, Zu.o)((0, Uu.createElement)(Uu.Fragment, null, (0, Uu.createElement)(tu, {
            hud: lu,
            crosshair: Cu,
            damage: bu,
            markers: cu
          }), (0, Uu.createElement)(NE, {
            controller: qu
          })))
        },
        onClose: () => {
          var uu, Eu, ju, su;
          null === (uu = Nu) || void 0 === uu || uu(), null === (Eu = Cu) || void 0 === Eu || Eu.dispose(), Cu = null, null === (ju = bu) || void 0 === ju || ju.dispose(), bu = null, null === (su = cu) || void 0 === su || su.dispose(), cu = null, fu = null
        },
        onAfterRender: (uu, Eu) => {
          var ju, su, Uu, Zu;
          null === (ju = Cu) || void 0 === ju || ju.frame(uu, Eu.tanHalfFovY), null === (su = bu) || void 0 === su || su.frame(Eu.cameraHeading), null === (Uu = cu) || void 0 === Uu || Uu.frame(Eu, null !== (Zu = fu) && void 0 !== Zu && Zu.checkValid(Xu) ? fu.bM(Xu) : null)
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          "frontlineHud" === uu ? lu.NO(Eu) : "frontlineScoreboard" === uu ? lu.receiveScoreboard(Eu) : "frontlineRoundEnd" === uu ? qu.NO(Eu) : "frontlinePrefs" === uu && (Ou = Eu, Yu())
        }
      }
    }
  },
  6644: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    const su = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Uu(uu) {
      return null === su ? Array.from(uu) : Array.from(su.segment(uu), (uu => {
        let {
          segment: Eu
        } = uu;
        return Eu
      }))
    }
  },
  38813: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      f: () => Zu
    });
    const su = new WeakMap;

    function Uu(uu) {
      let Eu = su.get(uu);
      return Eu || (Eu = {
        hidden: uu.hidden,
        x: NaN,
        y: NaN
      }, su.set(uu, Eu)), Eu
    }

    function Zu(uu, Eu) {
      const ju = Uu(uu);
      ju.hidden !== Eu && (ju.hidden = Eu, uu.hidden = Eu)
    }

    function Xu(uu, Eu, ju) {
      const su = Uu(uu);
      su.x === Eu && su.y === ju || (su.x = Eu, su.y = ju, uu.style.translate = `${Eu}vw ${ju}vh`)
    }
  },
  37467: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    const su = {
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
for (const uu in modules) Object.freeze(modules[uu]);