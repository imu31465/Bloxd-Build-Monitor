export const id = 17;
export const ids = [17];
export const modules = {
  36436: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => xu,
      d: () => Su,
      g: () => Bu,
      h: () => ru
    });
    var Eu = yu(9048),
      Ku = yu(36445),
      Qu = yu(36449),
      mu = yu(8447),
      Ju = yu(1400),
      Nu = yu(64),
      Xu = yu(80),
      Vu = yu(1079);

    function ru() {
      var uu;
      return (0, Ju.h)(Ku.c, (0, Ku.o)()), (0, Vu.jsx)(Vu.Fragment, {
        children: null === (uu = (0, Ku.o)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function Bu(uu) {
      var Ru;
      let {
        show: yu
      } = uu;
      (0, Ju.h)(Ku.c, (0, Ku.o)());
      const Xu = null === (Ru = (0, Ku.o)()) || void 0 === Ru ? void 0 : Ru.menu;
      return (0, Nu.useEffect)((() => {
        var uu;
        yu || (null === Xu || void 0 === Xu || null === (uu = Xu.onClose) || void 0 === uu || uu.call(Xu), (0, Qu.p)())
      }), [yu, Xu]), (0, Nu.useEffect)((() => yu ? (0, mu.g)(Qu.v, Qu.d) : void 0), [yu]), (0, Vu.jsx)(Eu.c, {
        showing: yu,
        globallyUniqueKey: "clientGameMenu",
        children: null === Xu || void 0 === Xu ? void 0 : Xu.content
      })
    }

    function xu(uu) {
      let {
        placement: Ru = "bottom"
      } = uu;
      return (0, Vu.jsx)("div", {
        id: `clientGameHud-${Ru}`,
        style: {
          display: "contents"
        }
      })
    }

    function Su(uu) {
      let {
        children: Ru,
        placement: yu = "bottom"
      } = uu;
      const [Eu, Ku] = (0, Nu.useState)(null);
      return (0, Nu.useEffect)((() => {
        Ku(document.getElementById(`clientGameHud-${yu}`))
      }), [yu]), Eu ? (0, Xu.createPortal)(Ru, Eu) : null
    }
  },
  9048: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(4307),
      Ku = yu(4314);

    function Qu(uu) {
      let {
        children: Ru,
        showing: yu,
        globallyUniqueKey: Qu,
        alwaysMountChildren: mu = !1,
        doGameplayStartStopOnShow: Ju = !0,
        keepsMovement: Nu = !1
      } = uu;
      return (0, Ku.c)(!0, yu, Qu, Nu), (0, Eu.e)(Ju, yu), yu || mu ? Ru : null
    }
  },
  36532: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => mu,
      d: () => Ju,
      g: () => Nu
    });
    var Eu = yu(64),
      Ku = yu(1100);
    const Qu = 8,
      mu = "InGameHeaderContainer",
      Ju = "TopRightElements";

    function Nu(uu) {
      const [Ru] = (0, Ku.d)(), [yu, Nu] = (0, Eu.useState)(!1);
      return (0, Eu.useLayoutEffect)((() => {
        if (!uu) return;
        const Ru = document.querySelector(`.${mu}`),
          yu = document.querySelector(`.${Ju}`),
          Eu = () => {
            const Eu = uu.getBoundingClientRect(),
              Ku = Ru ? Ru.getBoundingClientRect().right : 0,
              mu = yu ? yu.getBoundingClientRect().left : window.innerWidth,
              Ju = Eu.left < Ku + Qu,
              Xu = Eu.right > mu - Qu;
            Nu(Ju || Xu)
          };
        Eu();
        const Ku = new ResizeObserver(Eu);
        return Ku.observe(uu), Ru && Ku.observe(Ru), yu && Ku.observe(yu), () => {
          Ku.disconnect()
        }
      }), [uu, Ru]), yu
    }
  },
  36524: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    const Eu = [{
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

    function Ku(uu, Ru, yu) {
      const Ku = Math.abs(uu - Ru),
        Qu = Date.now() - yu;
      for (const mu of Eu)
        if (uu < mu.maxDist) return Ku >= mu.hardUpdateDist || Qu > mu.timeBetweenSoftChecks && Ku >= mu.softUpdateDist;
      return !1
    }
  },
  8447: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    let Eu = null;
    const Ku = function(uu) {
        const Ru = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Eu = Ru, () => {
          Eu === Ru && (Eu = null)
        }
      },
      Qu = () => {
        var uu;
        return null !== (uu = Eu) && void 0 !== uu && uu.canCycle() ? Eu.cycle : null
      }
  },
  38303: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu) {
      var Eu;
      const {
        width: Ku,
        height: Qu
      } = yu, mu = null !== (Eu = uu.text) && void 0 !== Eu ? Eu : uu, Ju = (mu.x / 100 - .5) * Ku, Nu = (mu.y / 100 - .5) * Qu, Xu = Ku / 2 - Ru.x;
      if (null !== uu.text && Math.abs(Ju) <= Xu && Nu >= Ru.top - Qu / 2 && Nu <= Qu / 2 - Ru.bottom) return {
        x: mu.x,
        y: mu.y
      };
      const Vu = Math.min(0 === Ju ? 1 / 0 : Xu / Math.abs(Ju), Nu > 0 ? (Qu / 2 - Ru.bottom) / Nu : Nu < 0 ? (Ru.top - Qu / 2) / Nu : 1 / 0);
      return !Number.isFinite(Vu) || Vu < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Ju * Vu / Ku * 100,
        y: 50 + Nu * Vu / Qu * 100
      }
    }
    yu.d(Ru, {
      d: () => Eu
    })
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  39143: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => TR
    });
    const Eu = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Ku = yu(64),
      Qu = yu(36445),
      mu = yu(36788),
      Ju = yu(36457),
      Nu = yu(1661),
      Xu = yu(34);
    const Vu = {
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
    const ru = 32;

    function Bu(uu, Ru, yu, Eu) {
      return {
        tag: "line",
        attrs: {
          x1: uu,
          y1: Ru,
          x2: yu,
          y2: Eu,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function xu(uu) {
      return {
        tag: "circle",
        attrs: {
          cx: ru,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ru,
          r: uu,
          class: "Fill"
        }
      }
    }

    function Su(uu, Ru) {
      return {
        tag: "path",
        attrs: {
          d: uu,
          "stroke-width": Ru
        }
      }
    }

    function pu(uu, Ru, yu) {
      return {
        tag: "circle",
        attrs: {
          cx: ru,
          cy: ru,
          r: uu,
          "stroke-width": Ru,
          class: yu
        }
      }
    }

    function Tu(uu, Ru, yu) {
      return {
        tag: "text",
        attrs: {
          x: uu,
          y: Ru,
          class: "Fill Label"
        },
        text: yu
      }
    }
    const Wu = {
      pistol: uu => [Bu(ru, ru - uu - 5, ru, ru - uu), Bu(ru - uu - 5, ru, ru - uu, ru), Bu(ru + uu, ru, ru + uu + 5, ru), xu(1.4)],
      rifle: uu => [Bu(ru, ru - uu - 8, ru, ru - uu), Bu(ru, ru + uu, ru, ru + uu + 8), Bu(ru - uu - 8, ru, ru - uu, ru), Bu(ru + uu, ru, ru + uu + 8, ru), xu(1)],
      smg: uu => {
        const Ru = Math.PI / 2,
          yu = [];
        for (let mu = 0; mu < 4; mu++) yu.push((Ku = mu * Ru + .35, Qu = (mu + 1) * Ru - .35, Su(`M${ru+(Eu=6+uu)*Math.cos(Ku)} ${ru+Eu*Math.sin(Ku)} A${Eu} ${Eu} 0 0 1 ${ru+Eu*Math.cos(Qu)} ${ru+Eu*Math.sin(Qu)}`, 2)));
        var Eu, Ku, Qu;
        return [...yu, xu(1.4)]
      },
      shotgun: uu => [pu(uu, 3, "Ring Outline"), pu(uu, 1.5, "Ring")],
      marksman: uu => [Su(`M${26-uu/2} ${39+uu/2} L32 33 L${38+uu/2} ${39+uu/2}`, 2), Bu(14 - uu, ru, 24 - uu, ru, 1.5), Bu(40 + uu, ru, 50 + uu, ru, 1.5), Bu(14 - uu, 30, 14 - uu, 34, 1.5), Bu(50 + uu, 30, 50 + uu, 34, 1.5)],
      machineGun: uu => {
        const Ru = 10 + uu,
          yu = [];
        for (const [Eu, Ku] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) yu.push(Su(`M${ru+Eu*Ru} ${ru+Ku*(Ru-5)} L${ru+Eu*Ru} ${ru+Ku*Ru} L${ru+Eu*(Ru-5)} ${ru+Ku*Ru}`, 2));
        return [...yu, Bu(ru, 28, ru, 36, 1.5), Bu(28, ru, 36, ru, 1.5)]
      },
      launcher: () => [Bu(14, 30, 50, 30, 1.5), Bu(ru, 24, ru, 52, 1.5), Bu(28, 38, 36, 38, 1.5), Bu(29, 44, 35, 44, 1.5), Bu(30, 50, 34, 50, 1.5), Tu(38, 40, "100"), Tu(37, 46, "200"), xu(1.4, 30)],
      melee: () => [Su("M32 26 L38 32 L32 38 L26 32 Z", 1.5), xu(1.2)],
      throwable: () => [xu(1.6)]
    };

    function ju(uu) {
      let {
        tag: Ru,
        attrs: yu,
        text: Eu
      } = uu, Ku = `<${Ru}`;
      for (const [Qu, mu] of Object.entries(yu)) Ku += ` ${Qu}="${mu}"`;
      return void 0 === Eu ? `${Ku}/>` : `${Ku}>${Eu}</${Ru}>`
    }
    class Hu {
      constructor(uu, Ru) {
        this.api = uu, this.localPlayerId = Ru, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = uu => {
          this.element = uu, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, uu && !this.enabled && (uu.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Nu.getRemInPx)()))
        }, this.tokens = [Xu.k.subscribe("aimingOverlay", (uu => {
          this.sniperOverlay = "sniper" === uu
        })), Xu.k.subscribe("mouseState", (uu => {
          let {
            isDown: Ru
          } = uu;
          this.mouseDown = Ru
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      tC(uu) {
        uu !== this.enabled && (this.enabled = uu, this.drawnVisible = null, uu || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(uu, Ru) {
        var yu, Eu;
        if (!this.enabled) return;
        const {
          api: Ku
        } = this, Qu = Ku.isAlive(this.localPlayerId) && null !== (yu = null === (Eu = Ku.Xyu(this.localPlayerId)) || void 0 === Eu ? void 0 : Eu.name) && void 0 !== yu ? yu : null, mu = (Ju = Qu) && Vu[Ju] || null;
        var Ju;
        if (this.setOwnsCrosshair(null !== mu), !this.element) return;
        const Nu = Ku.getHeldGunInaccuracy(),
          Xu = null !== Nu,
          ru = null !== mu && !this.sniperOverlay && Ku.isCrosshairShown();
        if (ru !== this.drawnVisible && (this.drawnVisible = ru, this.element.style.display = ru ? "block" : "none"), !ru) return;
        const Bu = Xu ? function(uu) {
            return "launcher" === uu || "melee" === uu || "throwable" === uu ? "none" : "shotgun" === uu ? "cone" : "offset"
          }(mu) : "none",
          xu = null !== Nu && void 0 !== Nu ? Nu : 0;
        "cone" === Bu ? this.drawCone(mu, this.coneRadiusVh(xu, Ru) * this.gapPerVh, uu) : (this.coneDrawn = !1, this.draw(mu, "none" === Bu ? 2 : this.offsetGap(xu)));
        const Su = !Xu && this.mouseDown;
        Su !== this.drawnPressed && (this.drawnPressed = Su, this.element.classList.toggle("Pressed", Su))
      }
      dispose() {
        for (const uu of this.tokens) Xu.k.unsubscribe(uu);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(uu, Ru) {
        var yu, Eu;
        uu !== this.drawnFamily ? (this.drawnFamily = uu, this.drawnGap = Ru, this.element.innerHTML = function(uu, Ru) {
          return `<svg viewBox="0 0 64 64">${Wu[uu](Ru).map(ju).join("")}</svg>`
        }(uu, Ru), this.shapes = Array.from(null !== (yu = null === (Eu = this.element.firstElementChild) || void 0 === Eu ? void 0 : Eu.children) && void 0 !== yu ? yu : [])) : Ru !== this.drawnGap && (this.drawnGap = Ru, function(uu, Ru, yu) {
          const Eu = Wu[Ru](yu);
          for (let Ku = 0; Ku < Eu.length; Ku++)
            for (const [Ru, yu] of Object.entries(Eu[Ku].attrs)) {
              const Eu = String(yu);
              uu[Ku].getAttribute(Ru) !== Eu && uu[Ku].setAttribute(Ru, Eu)
            }
        }(this.shapes, uu, Ru))
      }
      drawCone(uu, Ru, yu) {
        uu === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Ru - this.shownRadius) * (1 - Math.exp(-yu / 80)) : this.shownRadius = Ru, this.coneDrawn = !0, this.draw(uu, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(uu, Ru) {
        if (!(Ru > 0)) return 1;
        const yu = uu * mu.g / 2;
        return Math.max(50 * Math.tan(yu) / Ru, 1)
      }
      offsetGap(uu) {
        const Ru = 2 + ((0, Ju.e)(uu) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Ru) / 2)
      }
      setOwnsCrosshair(uu) {
        uu !== this.ownsCrosshair && (this.ownsCrosshair = uu, document.body.classList.toggle("FrontlineCustomCrosshair", uu))
      }
    }
    const du = "FrontlineCustomDamage",
      bu = .45,
      Cu = .2;
    class ku {
      constructor(uu, Ru) {
        this.api = uu, this.localPlayerId = Ru, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.kK = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = uu => {
          var Ru, yu;
          this.clearHits(), this.root = uu, this.lowLayer = null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.querySelector(".FrontlineDamageLow")) && void 0 !== Ru ? Ru : null, this.arcLayer = null !== (yu = null === uu || void 0 === uu ? void 0 : uu.querySelector(".FrontlineDamageArcs")) && void 0 !== yu ? yu : null, this.showRoot(), this.drawLow()
        }, this.token = Xu.k.subscribe("damagedByOtherPlayer", (uu => {
          let {
            direction: Ru,
            bK: yu
          } = uu;
          this.onHurt(Ru, yu)
        })), this.syncHealth(), document.body.classList.add(du)
      }
      tC(uu) {
        uu !== this.enabled && (this.enabled = uu, document.body.classList.toggle(du, uu), uu || this.clearHits(), this.showRoot())
      }
      frame(uu) {
        this.syncHealth(), this.cameraHeading = uu;
        for (const Ru of this.arcs) this.drawArcAngle(Ru)
      }
      dispose() {
        Xu.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(du)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const uu = this.api.getClientOption(this.localPlayerId, "_health"),
          Ru = this.api.getClientOption(this.localPlayerId, "_shield"),
          yu = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(uu, this.readHealth) && Object.is(Ru, this.readShield) && Object.is(yu, this.readMaxHealth)) return;
        if (this.readHealth = uu, this.readShield = Ru, this.readMaxHealth = yu, null === uu || void 0 === uu || !yu) return this.lastHealthPool = null, this.maxHealth = null, this.kK = 1, this.dead = !1, void this.drawLow();
        const Eu = uu + (null !== Ru && void 0 !== Ru ? Ru : 0);
        if (null !== this.lastHealthPool && Eu < this.lastHealthPool) {
          const uu = performance.now(),
            Ru = (this.lastHealthPool - Eu) / yu;
          this.lastDrop = uu - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Ru,
            at: this.lastDrop.at
          } : {
            frac: Ru,
            at: uu
          }
        }
        this.dead = uu <= 0, this.dead && this.clearHits(), this.lastHealthPool = Eu, this.maxHealth = yu, this.kK = uu > 0 ? uu / yu : 1, this.drawLow()
      }
      onHurt(uu, Ru) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const yu = Math.min(1, this.takeDamageFrac(Ru) / .3);
        null !== uu && this.showArc(uu, yu), this.flashEdge(null === uu ? null : uu - this.cameraHeading, .4 + .6 * yu)
      }
      takeDamageFrac(uu) {
        if (void 0 !== uu && this.maxHealth) return uu / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Ru
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Ru
      }
      drawLow() {
        if (!this.lowLayer) return;
        const uu = Au((bu - this.kK) / .25),
          Ru = Au((Cu - this.kK) / .15000000000000002),
          yu = this.kK < bu;
        this.lowLayer.classList.toggle("Active", yu), this.lowLayer.classList.toggle("Critical", this.kK < Cu), this.lowLayer.style.opacity = String(yu ? .55 + .3 * uu + .15 * Ru : 0)
      }
      showArc(uu, Ru) {
        var yu, Eu;
        if (!this.arcLayer) return;
        let Ku = this.arcs.find((Ru => eu(Ru.direction, uu) < .6));
        if (!Ku) {
          const Ru = document.createElement("div");
          Ru.className = "FrontlineDamageArc", Ru.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(Ru), Ku = {
            element: Ru,
            direction: uu,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Ku)
        }
        Ku.direction = uu, this.drawArcAngle(Ku);
        const Qu = Ku.fade ? Number(getComputedStyle(Ku.element).opacity) : 0;
        null === (yu = Ku.fade) || void 0 === yu || yu.cancel(), null === (Eu = Ku.pop) || void 0 === Eu || Eu.cancel(), Ku.element.style.opacity = "1";
        const mu = Ku.element.animate([{
          opacity: Qu
        }, {
          opacity: 1
        }], 144);
        Ku.fade = mu, Ku.pop = Ku.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Ru
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Ju = Ku;
        mu.onfinish = () => {
          if (Ju.fade !== mu) return;
          const uu = Ju.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          uu.startTime = mu.startTime, Ju.fade = uu, uu.onfinish = () => {
            Ju.fade === uu && (Ju.element.remove(), Du(this.arcs, Ju))
          }
        }
      }
      drawArcAngle(uu) {
        const Ru = uu.direction - this.cameraHeading;
        (null === uu.drawnAngle || Math.abs(Ru - uu.drawnAngle) > .005) && (uu.drawnAngle = Ru, uu.element.style.rotate = `${Ru}rad`)
      }
      flashEdge(uu, Ru) {
        var yu, Eu, Ku;
        if (!this.root) return;
        let Qu = this.flashes.find((Ru => null === Ru.angle || null === uu ? Ru.angle === uu : eu(Ru.angle, uu) < .5));
        if (!Qu) {
          const Ru = document.createElement("div");
          Ru.className = "FrontlineDamageFlash";
          const yu = Ru.appendChild(document.createElement("div"));
          yu.className = "FrontlineDamageFlashGlow", this.root.insertBefore(Ru, this.arcLayer), Qu = {
            element: Ru,
            glow: yu,
            angle: uu,
            level: 0,
            animation: null
          }, this.flashes.push(Qu)
        }
        const mu = null === (yu = Qu.animation) || void 0 === yu || null === (Eu = yu.effect) || void 0 === Eu ? void 0 : Eu.getComputedTiming().progress,
          Ju = null === mu || void 0 === mu ? 0 : Qu.level * (1 - mu);
        Qu.level = Math.min(1, Math.max(Ru, Ju + .6 * Ru)), Qu.angle = uu;
        const {
          x: Nu,
          y: Xu,
          rx: Vu,
          ry: ru
        } = function(uu, Ru) {
          const yu = window.innerWidth,
            Eu = window.innerHeight;
          if (null === uu) return {
            x: yu / 2,
            y: Eu / 2,
            rx: 0,
            ry: 0
          };
          const Ku = Math.sin(uu),
            Qu = -Math.cos(uu),
            mu = yu / 2 / Math.max(1e-6, Math.abs(Ku)),
            Ju = Eu / 2 / Math.max(1e-6, Math.abs(Qu)),
            Nu = Math.min(mu, Ju),
            Xu = Math.round(yu / 2 + Ku * Nu),
            Vu = Math.round(Eu / 2 + Qu * Nu),
            ru = Eu / 100 * (.85 + .25 * Ru),
            Bu = mu <= Ju,
            xu = Math.round((Bu ? 30 : 74) * ru),
            Su = Math.round((Bu ? 58 : 26) * ru);
          return {
            x: Xu,
            y: Vu,
            rx: xu,
            ry: Su
          }
        }(uu, Qu.level), {
          style: Bu
        } = Qu.glow;
        Qu.glow.classList.toggle("Everywhere", null === uu), Bu.setProperty("--glowX", `${Nu}px`), Bu.setProperty("--glowY", `${Xu}px`), Bu.setProperty("--glowRx", `${Vu}px`), Bu.setProperty("--glowRy", `${ru}px`), Qu.element.style.transformOrigin = `${Nu}px ${Xu}px`, null === (Ku = Qu.animation) || void 0 === Ku || Ku.cancel();
        const xu = Qu.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Qu.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Qu.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Qu.level
        });
        Qu.animation = xu;
        const Su = Qu;
        xu.onfinish = () => {
          Su.animation === xu && (Su.element.remove(), Du(this.flashes, Su))
        }
      }
      clearHits() {
        for (const Eu of this.arcs) {
          var uu, Ru;
          null === (uu = Eu.fade) || void 0 === uu || uu.cancel(), Eu.fade = null, null === (Ru = Eu.pop) || void 0 === Ru || Ru.cancel(), Eu.element.remove()
        }
        this.arcs.length = 0;
        for (const Eu of this.flashes) {
          var yu;
          null === (yu = Eu.animation) || void 0 === yu || yu.cancel(), Eu.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function eu(uu, Ru) {
      return Math.abs(Math.atan2(Math.sin(uu - Ru), Math.cos(uu - Ru)))
    }

    function Au(uu) {
      return Math.max(0, Math.min(1, uu))
    }

    function Du(uu, Ru) {
      const yu = uu.indexOf(Ru); - 1 !== yu && uu.splice(yu, 1)
    }
    var Mu = yu(1035),
      Iu = yu.n(Mu),
      Gu = yu(36436),
      Uu = yu(36532),
      nu = yu(1170),
      su = yu(1400);
    const tu = "frontlineHudChanged",
      lu = "frontlineScoreboardChanged";
    class gu {
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
      SS(uu) {
        this.wire = uu, Xu.k.Op(tu, uu, !0)
      }
      receiveScoreboard(uu) {
        let Ru = "scoreboard" === uu[0] ? performance.now() + uu[5] : 0;
        const yu = this.scoreboard.endsAt;
        0 !== Ru && 0 !== yu && Math.abs(Ru - yu) < 1e3 && (Ru = yu), this.scoreboard = {
          wire: uu,
          endsAt: Ru
        }, Xu.k.Op(lu, this.scoreboard, !0)
      }
    }
    var cu = yu(1079);
    const Lu = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function zu(uu) {
      const [Ru, yu] = (0, Ku.useState)((() => (uu - performance.now()) / 1e3));
      return (0, Ku.useEffect)((() => {
        if (0 === uu) return;
        const Ru = () => {
          yu((uu - performance.now()) / 1e3)
        };
        Ru();
        const Eu = window.setInterval(Ru, 250);
        return () => {
          window.clearInterval(Eu)
        }
      }), [uu]), Ru
    }

    function Fu(uu) {
      let {
        className: Ru,
        point: yu
      } = uu;
      const [Eu, Ku, Qu, mu, Ju, Nu] = yu;
      return (0, cu.jsxs)("div", {
        className: Iu()(Ru, `Owner-${Ku||"None"}`, `Leader-${mu||"None"}`, {
          Contested: Ju,
          Here: Nu
        }),
        children: [(0, cu.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Eu
        }), (0, cu.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Qu}%`
          }
        })]
      })
    }
    const wu = (0, Ku.memo)((function(uu) {
        let {
          points: Ru,
          markers: yu
        } = uu;
        const {
          t: Eu
        } = (0, nu.E)();
        return Ru ? (0, cu.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Ru.map((uu => {
            const [Ru, , , , , , , Ku] = uu;
            return (0, cu.jsxs)("div", {
              ref: yu.bindMarker(Ru),
              className: "FrontlinePointMarker",
              children: [(0, cu.jsx)(Fu, {
                className: "FrontlinePointMarkerTile",
                point: uu
              }), (0, cu.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Ku && (0, cu.jsx)("span", {
                  className: Iu()("FrontlinePointMarkerHomeTurf", `Team-${Ku}`),
                  children: Eu("frontlineHud:homeTurf", {
                    team: Eu(Lu[Ku])
                  })
                }), (0, cu.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Ru)
          }))
        }) : null
      })),
      Zu = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      hu = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Pu(uu) {
      let {
        hud: Ru,
        crosshair: yu,
        damage: Eu,
        markers: Ku
      } = uu;
      const Qu = (0, su.h)(tu, Ru.getWire()),
        mu = (0, su.h)(lu, Ru.getScoreboard());
      return (0, cu.jsxs)(cu.Fragment, {
        children: [(0, cu.jsx)(iu, {
          damage: Eu
        }), (0, cu.jsx)(wu, {
          points: "scoreboard" === mu.wire[0] ? mu.wire[6] : null,
          markers: Ku
        }), (0, cu.jsx)(ou, {
          view: mu
        }), (0, cu.jsx)("div", {
          className: "FrontlineReticle",
          ref: yu.bindElement
        }), (0, cu.jsx)(Gu.d, {
          children: (0, cu.jsx)(Yu, {
            wire: Qu
          })
        })]
      })
    }
    const iu = (0, Ku.memo)((function(uu) {
        let {
          damage: Ru
        } = uu;
        return (0, cu.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Ru.bindElement,
          children: [(0, cu.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, cu.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, cu.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Yu = (0, Ku.memo)((function(uu) {
        let {
          wire: Ru
        } = uu;
        const {
          t: yu
        } = (0, nu.E)();
        if ("capture" === Ru[0]) {
          const [, uu, Eu, Ku, Qu, mu, Ju] = Ru, Nu = Math.round(Ku / 100 * 24);
          return (0, cu.jsxs)("div", {
            className: Iu()("FrontlinePlate", `Status-${Eu}`, `Leader-${Qu||"None"}`),
            children: [(0, cu.jsx)(au, {}), (0, cu.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, cu.jsx)("span", {
                className: "FrontlineObjective",
                children: uu
              }), (0, cu.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, cu.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: yu("frontlineHud:objective", {
                    point: uu,
                    friendly: mu,
                    enemy: Ju
                  })
                }), (0, cu.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: yu(Zu[Eu])
                })]
              }), (0, cu.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Ku).padStart(3, "0"), (0, cu.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, cu.jsx)(Ou, {
              segments: 24,
              lit: Nu
            })]
          })
        }
        if ("alert" === Ru[0]) {
          const [, uu, Eu, Ku] = Ru;
          return (0, cu.jsxs)("div", {
            className: Iu()("FrontlinePlate", "FrontlineAlert", `Tone-${Ku}`),
            children: [(0, cu.jsx)(au, {}), (0, cu.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: yu(hu[uu])
            }), (0, cu.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Eu
            })]
          })
        }
        return null
      })),
      ou = (0, Ku.memo)((function(uu) {
        let {
          view: Ru
        } = uu;
        const {
          t: yu
        } = (0, nu.E)(), Eu = (0, Ku.useRef)(null), Qu = function(uu, Ru) {
          const [yu, Eu] = (0, Ku.useState)(!1);
          return (0, Ku.useLayoutEffect)((() => {
            const Ru = uu.current;
            if (!Ru) return;
            const yu = document.querySelector(`.${Uu.c}`),
              Ku = document.querySelector(`.${Uu.d}`),
              Qu = () => {
                var uu;
                const Qu = Ru.querySelector(".FrontlineTeamTrack"),
                  mu = (0, Nu.getRemInPx)(),
                  Ju = Ru.getBoundingClientRect().width - 2 * (null !== (uu = null === Qu || void 0 === Qu ? void 0 : Qu.getBoundingClientRect().width) && void 0 !== uu ? uu : 0),
                  Xu = window.innerWidth / 2,
                  Vu = yu ? yu.getBoundingClientRect().right : 0,
                  ru = Ku ? Ku.getBoundingClientRect().left : window.innerWidth,
                  Bu = Math.min(Xu - Vu, ru - Xu) - Uu.b - Ju / 2,
                  xu = Bu < 6 * mu,
                  Su = xu ? (window.innerWidth - Ju) / 2 - Uu.b : Bu;
                Ru.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Su,14*mu)))}px`), Eu(xu)
              };
            Qu();
            const mu = new ResizeObserver(Qu);
            for (const uu of [Ru, yu, Ku]) uu && mu.observe(uu);
            return window.addEventListener("resize", Qu), () => {
              mu.disconnect(), window.removeEventListener("resize", Qu)
            }
          }), [uu, Ru]), yu
        }(Eu, "scoreboard" === Ru.wire[0]);
        if ("scoreboard" !== Ru.wire[0]) return null;
        const [, mu, Ju, Xu, Vu, , ru] = Ru.wire, Bu = "Red" === mu ? "Blue" : "Red";
        return (0, cu.jsxs)("div", {
          className: Iu()("FrontlineScoreboardContainer", {
            Below: Qu
          }),
          children: [(0, cu.jsxs)("div", {
            ref: Eu,
            className: "FrontlineScoreboard",
            children: [(0, cu.jsx)(au, {}), (0, cu.jsx)(qu, {
              team: mu,
              tickets: Ju,
              goal: Vu,
              side: "Friendly"
            }), (0, cu.jsx)("div", {
              className: "FrontlinePoints",
              children: ru.map((uu => (0, cu.jsx)(Fu, {
                className: "FrontlinePoint",
                point: uu
              }, uu[0])))
            }), (0, cu.jsx)(qu, {
              team: Bu,
              tickets: Xu,
              goal: Vu,
              side: "Enemy"
            })]
          }), (0, cu.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, cu.jsx)(vu, {
              endsAt: Ru.endsAt
            }), (0, cu.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: yu("frontlineHud:ticketGoal", {
                goal: Vu
              })
            })]
          })]
        })
      }));

    function qu(uu) {
      let {
        team: Ru,
        tickets: yu,
        goal: Eu,
        side: Ku
      } = uu;
      const {
        t: Qu
      } = (0, nu.E)(), mu = String(yu).padStart(3, "0"), Ju = mu.search(/[1-9]/), Nu = -1 === Ju ? mu : mu.slice(0, Ju), Xu = Math.min(20, Math.floor(yu / Eu * 20));
      return (0, cu.jsxs)("div", {
        className: Iu()("FrontlineTeamScore", Ku, `Team-${Ru}`),
        children: [(0, cu.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, cu.jsx)("span", {
            className: "Lead",
            children: Nu
          }), -1 !== Ju && mu.slice(Ju)]
        }), (0, cu.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, cu.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Qu(Lu[Ru])
          }), (0, cu.jsx)(Ou, {
            segments: 20,
            lit: Xu
          })]
        })]
      })
    }

    function Ou(uu) {
      let {
        segments: Ru,
        lit: yu
      } = uu;
      return (0, cu.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Ru
        }, ((uu, Ru) => (0, cu.jsx)("i", {
          className: Iu()({
            Lit: Ru < yu
          })
        }, Ru)))
      })
    }

    function vu(uu) {
      let {
        endsAt: Ru
      } = uu;
      const yu = Math.max(0, Math.ceil(zu(Ru)));
      return (0, cu.jsxs)("div", {
        className: Iu()("FrontlineClock", {
          Urgent: yu <= 60
        }),
        children: [Math.floor(yu / 60), ":", String(yu % 60).padStart(2, "0")]
      })
    }

    function au() {
      return (0, cu.jsxs)(cu.Fragment, {
        children: [(0, cu.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, cu.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var fu = yu(36524),
      uR = yu(1224),
      RR = yu(38260),
      yR = yu(38303);
    class ER {
      constructor(uu) {
        var Ru;
        this.hud = uu, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.VS = !1, this.fW = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.fW), null === (Ru = window.visualViewport) || void 0 === Ru || Ru.addEventListener("resize", this.fW)
      }
      bindMarker(uu) {
        let Ru = this.refs.get(uu);
        return Ru || (Ru = Ru => {
          var yu;
          null === (yu = this.markers.get(uu)) || void 0 === yu || yu.stopObserving(), this.markers.delete(uu), Ru && !this.VS && this.markers.set(uu, this.mount(Ru))
        }, this.refs.set(uu, Ru)), Ru
      }
      frame(uu, Ru) {
        this.render = uu;
        const yu = this.hud.getScoreboard().wire;
        if ("scoreboard" === yu[0] && 0 !== this.markers.size)
          for (const [Eu, , , , , , Ku] of yu[6]) {
            const uu = this.markers.get(Eu);
            uu && Ku && (uu.target ??= [0, 0, 0], uu.target[0] = Ku[0], uu.target[1] = Ku[1] + 2.5, uu.target[2] = Ku[2], this.place(uu), this.uQ(uu, Ru && Math.hypot(Ku[0] - Ru[0], Ku[1] - Ru[1], Ku[2] - Ru[2])))
          }
      }
      dispose() {
        var uu;
        this.VS = !0, window.removeEventListener("resize", this.fW), null === (uu = window.visualViewport) || void 0 === uu || uu.removeEventListener("resize", this.fW);
        for (const Ru of this.markers.values()) Ru.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(uu) {
        const {
          render: Ru,
          viewport: yu
        } = this;
        if (!Ru || !uu.target) return;
        const Eu = (50 - Ru.screenBandPct.y) / 100 * yu.height,
          Ku = {
            x: uu.halfSize.width + 8,
            top: uu.halfSize.height + 8,
            bottom: uu.halfSize.height + uu.labelsBelow + Eu
          },
          Qu = Ru.projectWorldPosToViewport(uu.target),
          mu = null !== Qu && void 0 !== Qu ? Qu : Ru.projectWorldPosToScreenPos(uu.target),
          Ju = (0, yR.d)({
            x: mu.x,
            y: mu.y,
            text: Qu
          }, Ku, yu);
        (0, RR.e)(uu.root, Math.round(100 * Ju.x) / 100, Math.round(100 * Ju.y) / 100)
      }
      uQ(uu, Ru) {
        if (null === Ru) return void(null !== uu.metres && (uu.metres = null, uu.distance.textContent = ""));
        const yu = Date.now();
        (null === uu.metres || (0, fu.b)(Ru, uu.metres, uu.metresShownAt)) && (uu.metres = Math.round(Ru), uu.metresShownAt = yu, uu.distance.textContent = (0, nu.w)(uR.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(uu.metres)
        }))
      }
      mount(uu) {
        const Ru = {
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
          yu = uu.querySelector(".FrontlinePointMarkerLabels"),
          Eu = new ResizeObserver((() => {
            Ru.halfSize = {
              width: Math.max(uu.offsetWidth, yu.offsetWidth) / 2,
              height: uu.offsetHeight / 2
            }, Ru.labelsBelow = yu.offsetTop + yu.offsetHeight - uu.offsetHeight, this.place(Ru)
          }));
        return Eu.observe(uu, {
          box: "border-box"
        }), Eu.observe(yu, {
          box: "border-box"
        }), Ru.stopObserving = () => {
          Eu.disconnect()
        }, Ru
      }
    }
    var KR = yu(6234),
      QR = yu(2481);
    const mR = "frontlineRoundEndChanged";
    class JR {
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
      SS(uu) {
        const Ru = "roundEnd" === uu[0] ? performance.now() + uu[5] : 0;
        this.view = {
          wire: uu,
          key: this.view.key + 1,
          endsAt: Ru
        }, Xu.k.Op(mR, this.view, !0)
      }
    }
    const NR = (0, Ku.lazy)((() => (0, QR.d)(yu.e(191).then((() => yu(41334))), (uu => uu.FrontlineMvpLineup)))),
      XR = [4800, 4e3, 3200],
      VR = [1, 0, 2],
      rR = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      BR = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function xR(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, su.h)(mR, Ru.getView()),
        Eu = zu(yu.endsAt);
      return "roundEnd" !== yu.wire[0] || 1e3 * Eu < -2e3 ? null : (0, cu.jsx)(SR, {
        wire: yu.wire,
        secondsLeft: Math.max(0, Math.ceil(Eu))
      }, yu.key)
    }
    const SR = (0, Ku.memo)((function(uu) {
      let {
        wire: Ru,
        secondsLeft: yu
      } = uu;
      const {
        t: Qu
      } = (0, nu.E)(), [, mu, Ju, Nu, Xu, , Vu, ru] = Ru, Bu = (0, Ku.useMemo)((() => VR.filter((uu => uu < ru.length))), [ru]), xu = (0, Ku.useMemo)((() => Bu.map((uu => {
        const [, , , , , Ru, yu] = ru[uu];
        return {
          cosmetics: Eu.map(((uu, yu) => [uu, Ru[yu]])),
          size: 0 === uu ? 1.15 : .85,
          heldGun: {
            name: yu,
            aimed: 0 === uu
          },
          showAfterMs: XR[uu]
        }
      }))), [ru, Bu]);
      return (0, cu.jsxs)("div", {
        className: Iu()("FrontlineRoundEnd", `Result-${mu}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, cu.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, cu.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, cu.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, cu.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, cu.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Su = Qu(rR[mu]), /\p{Script=Arabic}/u.test(Su) ? [Su] : (0, KR.b)(Su)).map(((uu, Ru) => (0, cu.jsx)("span", {
              style: {
                "--letter": Ru
              },
              children: uu
            }, Ru)))]
          }), (0, cu.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Ju && "victory" === mu && (0, cu.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Qu("frontlineRoundEnd:comeback")
            }), (0, cu.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, cu.jsx)("b", {
                className: "Friendly",
                children: Nu
              }), " \u2013 ", (0, cu.jsx)("b", {
                className: "Enemy",
                children: Xu
              })]
            })]
          })]
        }), Bu.length > 0 && (0, cu.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Bu.length
          },
          children: [(0, cu.jsx)(Ku.Suspense, {
            fallback: null,
            children: (0, cu.jsx)(NR, {
              className: "FrontlineRoundEndLineup",
              players: xu
            })
          }), Bu.map((uu => (0, cu.jsx)(pR, {
            mvp: ru[uu],
            place: uu
          }, uu)))]
        }), (0, cu.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Qu("frontlineRoundEnd:nextFront", {
            map: Vu,
            seconds: String(yu)
          })
        })]
      });
      var Su
    }));

    function pR(uu) {
      let {
        mvp: Ru,
        place: yu
      } = uu;
      const {
        t: Eu
      } = (0, nu.E)(), [Ku, Qu, mu, Ju, Nu] = Ru, [Xu, Vu] = Eu(function(uu, Ru) {
        return 1 === Ru && "damage" !== uu ? `frontlineRoundEnd:${uu}One` : `frontlineRoundEnd:${uu}`
      }(mu, Ju), {
        name: "\0",
        count: Ju.toLocaleString()
      }).split("\0");
      return (0, cu.jsxs)("div", {
        className: Iu()("FrontlineMvpCard", `Place-${yu+1}`, `Team-${Qu}`),
        style: {
          "--revealMs": `${XR[yu]}ms`
        },
        children: [(0, cu.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, cu.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, cu.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Eu(BR[yu])
        }), (0, cu.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Xu, (0, cu.jsx)("span", {
            className: "FrontlineMvpName",
            children: Ku
          }), Vu]
        }), (0, cu.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Nu
        })]
      })
    }
    const TR = function(uu, Ru, yu, Eu) {
      let {
        localPlayerId: mu
      } = Eu;
      const Ju = new gu,
        Nu = new JR;
      let Xu = null,
        Vu = null,
        ru = null,
        Bu = null,
        xu = null,
        Su = [!1, !1];
      const pu = () => {
        var uu, Ru;
        const [yu, Eu] = Su;
        null === (uu = Vu) || void 0 === uu || uu.tC(!yu), null === (Ru = ru) || void 0 === Ru || Ru.tC(!Eu)
      };
      return {
        onCreate: uu => {
          Xu = uu, Vu = new Hu(uu, mu), ru = new ku(uu, mu), Bu = new ER(Ju), pu(), xu = (0, Qu.w)((0, Ku.createElement)(Ku.Fragment, null, (0, Ku.createElement)(Pu, {
            hud: Ju,
            crosshair: Vu,
            damage: ru,
            markers: Bu
          }), (0, Ku.createElement)(xR, {
            controller: Nu
          })))
        },
        onClose: () => {
          var uu, Ru, yu, Eu;
          null === (uu = xu) || void 0 === uu || uu(), null === (Ru = Vu) || void 0 === Ru || Ru.dispose(), Vu = null, null === (yu = ru) || void 0 === yu || yu.dispose(), ru = null, null === (Eu = Bu) || void 0 === Eu || Eu.dispose(), Bu = null, Xu = null
        },
        onAfterRender: (uu, Ru) => {
          var yu, Eu, Ku, Qu;
          null === (yu = Vu) || void 0 === yu || yu.frame(uu, Ru.tanHalfFovY), null === (Eu = ru) || void 0 === Eu || Eu.frame(Ru.cameraHeading), null === (Ku = Bu) || void 0 === Ku || Ku.frame(Ru, null !== (Qu = Xu) && void 0 !== Qu && Qu.checkValid(mu) ? Xu.mH(mu) : null)
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          "frontlineHud" === uu ? Ju.SS(Ru) : "frontlineScoreboard" === uu ? Ju.receiveScoreboard(Ru) : "frontlineRoundEnd" === uu ? Nu.SS(Ru) : "frontlinePrefs" === uu && (Su = Ru, pu())
        }
      }
    }
  },
  6234: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    const Eu = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Ku(uu) {
      return null === Eu ? Array.from(uu) : Array.from(Eu.segment(uu), (uu => {
        let {
          segment: Ru
        } = uu;
        return Ru
      }))
    }
  },
  38260: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      i: () => Qu
    });
    const Eu = new WeakMap;

    function Ku(uu) {
      let Ru = Eu.get(uu);
      return Ru || (Ru = {
        hidden: uu.hidden,
        x: NaN,
        y: NaN
      }, Eu.set(uu, Ru)), Ru
    }

    function Qu(uu, Ru) {
      const yu = Ku(uu);
      yu.hidden !== Ru && (yu.hidden = Ru, uu.hidden = Ru)
    }

    function mu(uu, Ru, yu) {
      const Eu = Ku(uu);
      Eu.x === Ru && Eu.y === yu || (Eu.x = Ru, Eu.y = yu, uu.style.translate = `${Ru}vw ${yu}vh`)
    }
  },
  36807: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
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