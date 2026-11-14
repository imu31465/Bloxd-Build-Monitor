export const id = 15;
export const ids = [15];
export const modules = {
  35122: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      e: () => QF,
      f: () => eF,
      h: () => iW
    });
    var CF = SF(8210),
      AF = SF(35131),
      uF = SF(35133),
      hF = SF(7700),
      bW = SF(1262),
      dF = SF(46),
      PF = SF(61),
      RF = SF(971);

    function iW() {
      var FF;
      return (0, bW.i)(AF.b, (0, AF.j)()), (0, RF.jsx)(RF.Fragment, {
        children: null === (FF = (0, AF.j)()) || void 0 === FF ? void 0 : FF.content
      })
    }

    function eF(FF) {
      var WF;
      let {
        show: SF
      } = FF;
      (0, bW.i)(AF.b, (0, AF.j)());
      const PF = null === (WF = (0, AF.j)()) || void 0 === WF ? void 0 : WF.menu;
      return (0, dF.useEffect)((() => {
        SF || (null === PF || void 0 === PF || PF.onClose(), (0, uF.r)())
      }), [SF, PF]), (0, dF.useEffect)((() => SF ? (0, hF.i)(uF.A, uF.h) : void 0), [SF]), (0, RF.jsx)(CF.d, {
        showing: SF,
        globallyUniqueKey: "clientGameMenu",
        children: null === PF || void 0 === PF ? void 0 : PF.content
      })
    }

    function EF(FF) {
      let {
        placement: WF = "bottom"
      } = FF;
      return (0, RF.jsx)("div", {
        id: `clientGameHud-${WF}`,
        style: {
          display: "contents"
        }
      })
    }

    function QF(FF) {
      let {
        children: WF,
        placement: SF = "bottom"
      } = FF;
      const [CF, AF] = (0, dF.useState)(null);
      return (0, dF.useEffect)((() => {
        AF(document.getElementById(`clientGameHud-${SF}`))
      }), [SF]), CF ? (0, PF.createPortal)(WF, CF) : null
    }
  },
  35414: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => dF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(46),
      hF = SF(1546),
      bW = SF(971);
    const dF = (0, uF.forwardRef)((function(FF, WF) {
      let {
        text: SF,
        className: CF,
        children: uF
      } = FF;
      return SF.hasText ? (0, bW.jsx)("div", {
        ref: WF,
        className: AF()("HudTextPanel", CF, {
          NoBackground: !SF.showBackground
        }),
        children: null !== uF && void 0 !== uF ? uF : (0, bW.jsx)(hF.d, {
          text: SF.content
        })
      }) : null
    }))
  },
  35410: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      g: () => iW,
      h: () => eF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(35414),
      hF = SF(46),
      bW = SF(1955),
      dF = SF(990),
      PF = SF(971);
    const RF = "InGameHeaderContainer",
      iW = "TopRightElements",
      eF = (0, hF.memo)((function() {
        const [FF] = (0, dF.e)(), WF = (0, bW.l)("middleTextTop"), SF = (0, hF.useRef)(null), [CF, eF] = (0, hF.useState)(!1), EF = WF.hasText;
        return (0, hF.useLayoutEffect)((() => {
          const FF = SF.current;
          if (!FF) return;
          const WF = document.querySelector(`.${RF}`),
            CF = document.querySelector(`.${iW}`),
            AF = () => {
              const SF = FF.getBoundingClientRect(),
                AF = WF ? WF.getBoundingClientRect().right : 0,
                uF = CF ? CF.getBoundingClientRect().left : window.innerWidth,
                hF = SF.left < AF + 8,
                bW = SF.right > uF - 8;
              eF(hF || bW)
            };
          AF();
          const uF = new ResizeObserver(AF);
          return uF.observe(FF), WF && uF.observe(WF), CF && uF.observe(CF), () => {
            uF.disconnect()
          }
        }), [EF, WF.content, FF]), EF ? (0, PF.jsx)("div", {
          className: AF()("MiddleTextTopContainer", {
            MiddleTextTopBelow: CF
          }),
          children: (0, PF.jsx)(uF.b, {
            ref: SF,
            className: "MiddleTextTop",
            text: WF
          })
        }) : null
      }))
  },
  8210: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(3618),
      AF = SF(3621);

    function uF(FF) {
      let {
        children: WF,
        showing: SF,
        globallyUniqueKey: uF,
        alwaysMountChildren: hF = !1,
        doGameplayStartStopOnShow: bW = !0
      } = FF;
      return (0, AF.d)(!0, SF, uF), (0, CF.b)(bW, SF), SF || hF ? WF : null
    }
  },
  35221: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF
    });
    const CF = [{
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

    function AF(FF, WF, SF) {
      const AF = Math.abs(FF - WF),
        uF = Date.now() - SF;
      for (const hF of CF)
        if (FF < hF.maxDist) return AF >= hF.hardUpdateDist || uF > hF.timeBetweenSoftChecks && AF >= hF.softUpdateDist;
      return !1
    }
  },
  7700: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      i: () => AF
    });
    let CF = null;
    const AF = function(FF) {
        const WF = {
          cycle: FF,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return CF = WF, () => {
          CF === WF && (CF = null)
        }
      },
      uF = () => {
        var FF;
        return null !== (FF = CF) && void 0 !== FF && FF.canCycle() ? CF.cycle : null
      }
  },
  36945: (FF, WF, SF) => {
    function CF(FF, WF, SF) {
      var CF;
      const {
        width: AF,
        height: uF
      } = SF, hF = null !== (CF = FF.text) && void 0 !== CF ? CF : FF, bW = (hF.x / 100 - .5) * AF, dF = (hF.y / 100 - .5) * uF, PF = AF / 2 - WF.x;
      if (null !== FF.text && Math.abs(bW) <= PF && dF >= WF.top - uF / 2 && dF <= uF / 2 - WF.bottom) return {
        x: hF.x,
        y: hF.y
      };
      const RF = Math.min(0 === bW ? 1 / 0 : PF / Math.abs(bW), dF > 0 ? (uF / 2 - WF.bottom) / dF : dF < 0 ? (WF.top - uF / 2) / dF : 1 / 0);
      return !Number.isFinite(RF) || RF < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bW * RF / AF * 100,
        y: 50 + dF * RF / uF * 100
      }
    }
    SF.d(WF, {
      d: () => CF
    })
  },
  35133: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => QF,
      D: () => TF,
      e: () => uF,
      h: () => rW,
      i: () => gW,
      l: () => bW,
      p: () => eF,
      r: () => tW,
      t: () => iW,
      w: () => aW
    });
    var CF = SF(11),
      AF = SF(20);
    const uF = "clientGameInventoryButtonsChanged",
      hF = new Map;

    function bW() {
      return [...hF.values()].sort(((FF, WF) => {
        var SF, CF;
        return (null !== (SF = FF.order) && void 0 !== SF ? SF : 0) - (null !== (CF = WF.order) && void 0 !== CF ? CF : 0)
      }))
    }
    let dF = null;

    function PF(FF) {
      dF = FF
    }
    let RF = !1;

    function iW(FF) {
      RF = !0;
      try {
        FF.onClick()
      } finally {
        RF = !1
      }
      FF.panel && "clientGame" === CF.b.get("openInGameMenuName") && PF(FF.id)
    }

    function eF() {
      return RF
    }

    function EF() {
      return bW().filter((FF => FF.panel && !FF.disabled))
    }

    function QF(FF) {
      const WF = EF(),
        SF = WF.findIndex((FF => FF.id === dF));
      return !(SF < 0 || WF.length < 2) && (iW(WF[(SF + FF + WF.length) % WF.length]), !0)
    }

    function rW() {
      return null !== dF && EF().length > 1
    }

    function gW() {
      PF(null)
    }

    function tW() {
      "inventory" !== CF.b.get("openInGameMenuName") && PF(null)
    }

    function TF() {
      const FF = dF;
      return PF(null), FF
    }

    function aW(FF) {
      return hF.set(FF.id, FF), AF.j.Uu(uF, bW(), !0), () => {
        hF.get(FF.id) === FF && (hF.delete(FF.id), AF.j.Uu(uF, bW()))
      }
    }
  },
  35131: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => gW,
      e: () => tW,
      h: () => eF,
      j: () => PF,
      n: () => rW,
      p: () => EF,
      r: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(1144),
      hF = SF(35133);
    const bW = "clientGameUiChanged";
    let dF = null;

    function PF() {
      return dF
    }

    function RF(FF, WF) {
      const SF = {
        content: FF,
        menu: WF
      };
      return dF = SF, AF.j.Uu(bW, dF, !0), () => {
        dF === SF && (dF = null, QF = !1, gW(), AF.j.Uu(bW, null))
      }
    }
    let iW = null;

    function eF() {
      return iW
    }

    function EF(FF) {
      return iW = FF, () => {
        iW === FF && (iW = null)
      }
    }
    let QF = !1;

    function rW() {
      const FF = CF.b.get("openInGameMenuName");
      "clientGame" !== FF && (QF = "inventory" === FF), (0, hF.p)() || (0, hF.i)(), (0, uF.h)("InGameMenu"), CF.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gW() {
      TF(!1)
    }

    function tW() {
      TF(QF)
    }

    function TF(FF) {
      "clientGame" === CF.b.get("openInGameMenuName") && CF.b.set({
        openInGameMenuName: FF ? "inventory" : null
      }), FF || (0, hF.i)(), QF = !1
    }
  },
  37620: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => EW
    });
    const CF = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var AF = SF(46),
      uF = SF(35131),
      hF = SF(35498),
      bW = SF(35141),
      dF = SF(1510),
      PF = SF(20);
    const RF = {
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
    const iW = 32;

    function eF(FF, WF, SF, CF) {
      return `<line x1="${FF}" y1="${WF}" x2="${SF}" y2="${CF}" stroke-width="${arguments.length>4&&void 0!==arguments[4]?arguments[4]:2}"/>`
    }

    function EF(FF) {
      return `<circle cx="32" cy="${arguments.length>1&&void 0!==arguments[1]?arguments[1]:iW}" r="${FF}" class="Fill"/>`
    }
    const QF = {
      pistol: FF => eF(iW, iW - FF - 5, iW, iW - FF) + eF(iW - FF - 5, iW, iW - FF, iW) + eF(iW + FF, iW, iW + FF + 5, iW) + EF(1.4),
      rifle: FF => eF(iW, iW - FF - 8, iW, iW - FF) + eF(iW, iW + FF, iW, iW + FF + 8) + eF(iW - FF - 8, iW, iW - FF, iW) + eF(iW + FF, iW, iW + FF + 8, iW) + EF(1),
      smg: FF => {
        const WF = Math.PI / 2;
        let SF = "";
        for (let hF = 0; hF < 4; hF++) SF += (AF = hF * WF + .35, uF = (hF + 1) * WF - .35, `<path d="M${iW+(CF=6+FF)*Math.cos(AF)} ${iW+CF*Math.sin(AF)} A${CF} ${CF} 0 0 1 ${iW+CF*Math.cos(uF)} ${iW+CF*Math.sin(uF)}" stroke-width="2"/>`);
        var CF, AF, uF;
        return SF + EF(1.4)
      },
      shotgun: FF => `<circle cx="32" cy="32" r="${FF}" stroke-width="3" class="Ring Outline"/><circle cx="32" cy="32" r="${FF}" stroke-width="1.5" class="Ring"/>`,
      marksman: FF => `<path d="M${26-FF/2} ${39+FF/2} L32 33 L${38+FF/2} ${39+FF/2}" stroke-width="2"/>` + eF(14 - FF, iW, 24 - FF, iW, 1.5) + eF(40 + FF, iW, 50 + FF, iW, 1.5) + eF(14 - FF, 30, 14 - FF, 34, 1.5) + eF(50 + FF, 30, 50 + FF, 34, 1.5),
      machineGun: FF => {
        const WF = 10 + FF;
        let SF = "";
        for (const [CF, AF] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) SF += `<path d="M${iW+CF*WF} ${iW+AF*(WF-5)} L${iW+CF*WF} ${iW+AF*WF} L${iW+CF*(WF-5)} ${iW+AF*WF}" stroke-width="2"/>`;
        return SF + eF(iW, 28, iW, 36, 1.5) + eF(28, iW, 36, iW, 1.5)
      },
      launcher: () => eF(14, 30, 50, 30, 1.5) + eF(iW, 24, iW, 52, 1.5) + eF(28, 38, 36, 38, 1.5) + eF(29, 44, 35, 44, 1.5) + eF(30, 50, 34, 50, 1.5) + '<text x="38" y="40" class="Fill Label">100</text><text x="37" y="46" class="Fill Label">200</text>' + EF(1.4, 30),
      melee: () => '<path d="M32 26 L38 32 L32 38 L26 32 Z" stroke-width="1.5"/>' + EF(1.2),
      throwable: () => EF(1.6)
    };

    function rW(FF, WF) {
      return `<svg viewBox="0 0 64 64">${QF[FF](WF)}</svg>`
    }
    class gW {
      constructor(FF, WF) {
        this.api = FF, this.localPlayerId = WF, this.element = null, this.drawnKey = "", this.drawnVisible = null, this.drawnPressed = null, this.rings = [], this.shownRadius = 0, this.drawnRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = FF => {
          this.element = FF, this.drawnKey = "", this.drawnVisible = null, this.drawnPressed = null, FF && !this.enabled && (FF.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, dF.getRemInPx)()))
        }, this.tokens = [PF.j.subscribe("aimingOverlay", (FF => {
          this.sniperOverlay = "sniper" === FF
        })), PF.j.subscribe("mouseState", (FF => {
          let {
            isDown: WF
          } = FF;
          this.mouseDown = WF
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      MWF(FF) {
        FF !== this.enabled && (this.enabled = FF, this.drawnVisible = null, FF || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(FF, WF) {
        var SF, CF;
        if (!this.enabled) return;
        const {
          api: AF
        } = this, uF = AF.isAlive(this.localPlayerId) && null !== (SF = null === (CF = AF.pbF(this.localPlayerId)) || void 0 === CF ? void 0 : CF.name) && void 0 !== SF ? SF : null, hF = (bW = uF) && RF[bW] || null;
        var bW;
        if (this.setOwnsCrosshair(null !== hF), !this.element) return;
        const dF = AF.getHeldGunInaccuracy(),
          PF = null !== dF,
          iW = null !== hF && !this.sniperOverlay && AF.isCrosshairShown();
        if (iW !== this.drawnVisible && (this.drawnVisible = iW, this.element.style.display = iW ? "block" : "none"), !iW) return;
        const eF = PF ? function(FF) {
            return "launcher" === FF || "melee" === FF || "throwable" === FF ? "none" : "shotgun" === FF ? "cone" : "offset"
          }(hF) : "none",
          EF = null !== dF && void 0 !== dF ? dF : 0;
        "cone" === eF ? this.drawCone(hF, this.coneRadiusVh(EF, WF) * this.gapPerVh, FF) : this.draw(hF, "none" === eF ? 2 : this.offsetGap(EF));
        const QF = !PF && this.mouseDown;
        QF !== this.drawnPressed && (this.drawnPressed = QF, this.element.classList.toggle("Pressed", QF))
      }
      dispose() {
        for (const FF of this.tokens) PF.j.unsubscribe(FF);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(FF, WF) {
        const SF = `${FF}|${WF}`;
        SF !== this.drawnKey && (this.drawnKey = SF, this.element.innerHTML = rW(FF, WF))
      }
      drawCone(FF, WF, SF) {
        if (FF !== this.drawnKey) return this.drawnKey = FF, this.shownRadius = WF, this.drawnRadius = WF, this.element.innerHTML = rW(FF, WF), void(this.rings = Array.from(this.element.querySelectorAll("circle")));
        this.shownRadius += (WF - this.shownRadius) * (1 - Math.exp(-SF / 80));
        const CF = Math.round(4 * this.shownRadius) / 4;
        if (CF !== this.drawnRadius) {
          this.drawnRadius = CF;
          for (const FF of this.rings) FF.setAttribute("r", String(CF))
        }
      }
      coneRadiusVh(FF, WF) {
        if (!(WF > 0)) return 1;
        const SF = FF * hF.i / 2;
        return Math.max(50 * Math.tan(SF) / WF, 1)
      }
      offsetGap(FF) {
        const WF = 2 + ((0, bW.d)(FF) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * WF) / 2)
      }
      setOwnsCrosshair(FF) {
        FF !== this.ownsCrosshair && (this.ownsCrosshair = FF, document.body.classList.toggle("FrontlineCustomCrosshair", FF))
      }
    }
    const tW = "FrontlineCustomDamage",
      TF = .45,
      aW = .2;
    class kW {
      constructor(FF, WF) {
        this.api = FF, this.localPlayerId = WF, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.UFF = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = FF => {
          var WF, SF;
          this.clearHits(), this.root = FF, this.lowLayer = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.querySelector(".FrontlineDamageLow")) && void 0 !== WF ? WF : null, this.arcLayer = null !== (SF = null === FF || void 0 === FF ? void 0 : FF.querySelector(".FrontlineDamageArcs")) && void 0 !== SF ? SF : null, this.showRoot(), this.drawLow()
        }, this.token = PF.j.subscribe("damagedByOtherPlayer", (FF => {
          let {
            direction: WF,
            wFF: SF
          } = FF;
          this.onHurt(WF, SF)
        })), this.syncHealth(), document.body.classList.add(tW)
      }
      MWF(FF) {
        FF !== this.enabled && (this.enabled = FF, document.body.classList.toggle(tW, FF), FF || this.clearHits(), this.showRoot())
      }
      frame(FF) {
        this.syncHealth(), this.cameraHeading = FF;
        for (const WF of this.arcs) this.drawArcAngle(WF)
      }
      dispose() {
        PF.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(tW)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const FF = this.api.getClientOption(this.localPlayerId, "_health"),
          WF = this.api.getClientOption(this.localPlayerId, "_shield"),
          SF = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(FF, this.readHealth) && Object.is(WF, this.readShield) && Object.is(SF, this.readMaxHealth)) return;
        if (this.readHealth = FF, this.readShield = WF, this.readMaxHealth = SF, null === FF || void 0 === FF || !SF) return this.lastHealthPool = null, this.maxHealth = null, this.UFF = 1, this.dead = !1, void this.drawLow();
        const CF = FF + (null !== WF && void 0 !== WF ? WF : 0);
        if (null !== this.lastHealthPool && CF < this.lastHealthPool) {
          const FF = performance.now(),
            WF = (this.lastHealthPool - CF) / SF;
          this.lastDrop = FF - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + WF,
            at: this.lastDrop.at
          } : {
            frac: WF,
            at: FF
          }
        }
        this.dead = FF <= 0, this.dead && this.clearHits(), this.lastHealthPool = CF, this.maxHealth = SF, this.UFF = FF > 0 ? FF / SF : 1, this.drawLow()
      }
      onHurt(FF, WF) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const SF = Math.min(1, this.takeDamageFrac(WF) / .3);
        null !== FF && this.showArc(FF, SF), this.flashEdge(null === FF ? null : FF - this.cameraHeading, .4 + .6 * SF)
      }
      takeDamageFrac(FF) {
        if (void 0 !== FF && this.maxHealth) return FF / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: WF
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, WF
      }
      drawLow() {
        if (!this.lowLayer) return;
        const FF = VF((TF - this.UFF) / .25),
          WF = VF((aW - this.UFF) / .15000000000000002),
          SF = this.UFF < TF;
        this.lowLayer.classList.toggle("Active", SF), this.lowLayer.classList.toggle("Critical", this.UFF < aW), this.lowLayer.style.opacity = String(SF ? .55 + .3 * FF + .15 * WF : 0)
      }
      showArc(FF, WF) {
        var SF, CF;
        if (!this.arcLayer) return;
        let AF = this.arcs.find((WF => qW(WF.direction, FF) < .6));
        if (!AF) {
          const WF = document.createElement("div");
          WF.className = "FrontlineDamageArc", this.arcLayer.appendChild(WF), AF = {
            element: WF,
            direction: FF,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(AF)
        }
        AF.direction = FF, this.drawArcAngle(AF);
        const uF = AF.fade ? Number(getComputedStyle(AF.element).opacity) : 0;
        null === (SF = AF.fade) || void 0 === SF || SF.cancel(), null === (CF = AF.pop) || void 0 === CF || CF.cancel();
        const hF = AF.element.animate([{
          opacity: uF
        }, {
          opacity: 1,
          offset: .08
        }, {
          opacity: 1,
          offset: .52,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0
        }], {
          duration: 1800,
          fill: "forwards"
        });
        AF.fade = hF, AF.pop = AF.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * WF
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const bW = AF;
        hF.onfinish = () => {
          bW.fade === hF && (bW.element.remove(), NF(this.arcs, bW))
        }
      }
      drawArcAngle(FF) {
        const WF = FF.direction - this.cameraHeading;
        (null === FF.drawnAngle || Math.abs(WF - FF.drawnAngle) > .005) && (FF.drawnAngle = WF, FF.element.style.rotate = `${WF}rad`)
      }
      flashEdge(FF, WF) {
        var SF, CF, AF;
        if (!this.root) return;
        let uF = this.flashes.find((WF => null === WF.angle || null === FF ? WF.angle === FF : qW(WF.angle, FF) < .5));
        if (!uF) {
          const WF = document.createElement("div");
          WF.className = "FrontlineDamageFlash", this.root.insertBefore(WF, this.arcLayer), uF = {
            element: WF,
            angle: FF,
            level: 0,
            animation: null
          }, this.flashes.push(uF)
        }
        const hF = null === (SF = uF.animation) || void 0 === SF || null === (CF = SF.effect) || void 0 === CF ? void 0 : CF.getComputedTiming().progress,
          bW = null === hF || void 0 === hF ? 0 : uF.level * (1 - hF);
        uF.level = Math.min(1, Math.max(WF, bW + .6 * WF)), uF.angle = FF;
        const {
          x: dF,
          y: PF,
          rx: RF,
          ry: iW
        } = function(FF, WF) {
          const SF = window.innerWidth,
            CF = window.innerHeight;
          if (null === FF) return {
            x: SF / 2,
            y: CF / 2,
            rx: 0,
            ry: 0
          };
          const AF = Math.sin(FF),
            uF = -Math.cos(FF),
            hF = SF / 2 / Math.max(1e-6, Math.abs(AF)),
            bW = CF / 2 / Math.max(1e-6, Math.abs(uF)),
            dF = Math.min(hF, bW),
            PF = Math.round(SF / 2 + AF * dF),
            RF = Math.round(CF / 2 + uF * dF),
            iW = CF / 100 * (.85 + .25 * WF),
            eF = hF <= bW,
            EF = Math.round((eF ? 30 : 74) * iW),
            QF = Math.round((eF ? 58 : 26) * iW);
          return {
            x: PF,
            y: RF,
            rx: EF,
            ry: QF
          }
        }(FF, uF.level), {
          style: eF
        } = uF.element;
        uF.element.classList.toggle("Everywhere", null === FF), eF.setProperty("--glowX", `${dF}px`), eF.setProperty("--glowY", `${PF}px`), eF.setProperty("--glowRx", `${RF}px`), eF.setProperty("--glowRy", `${iW}px`), eF.transformOrigin = `${dF}px ${PF}px`, null === (AF = uF.animation) || void 0 === AF || AF.cancel();
        const EF = uF.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: uF.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * uF.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * uF.level
        });
        uF.animation = EF;
        const QF = uF;
        EF.onfinish = () => {
          QF.animation === EF && (QF.element.remove(), NF(this.flashes, QF))
        }
      }
      clearHits() {
        for (const CF of this.arcs) {
          var FF, WF;
          null === (FF = CF.fade) || void 0 === FF || FF.cancel(), null === (WF = CF.pop) || void 0 === WF || WF.cancel(), CF.element.remove()
        }
        this.arcs.length = 0;
        for (const CF of this.flashes) {
          var SF;
          null === (SF = CF.animation) || void 0 === SF || SF.cancel(), CF.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function qW(FF, WF) {
      return Math.abs(Math.atan2(Math.sin(FF - WF), Math.cos(FF - WF)))
    }

    function VF(FF) {
      return Math.max(0, Math.min(1, FF))
    }

    function NF(FF, WF) {
      const SF = FF.indexOf(WF); - 1 !== SF && FF.splice(SF, 1)
    }
    var DF = SF(918),
      LF = SF.n(DF),
      mW = SF(35122),
      OF = SF(35410),
      xW = SF(1046),
      ZF = SF(1262);
    const oF = "frontlineHudChanged",
      YF = "frontlineScoreboardChanged";
    class MF {
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
      xA(FF) {
        this.wire = FF, PF.j.Uu(oF, FF, !0)
      }
      receiveScoreboard(FF) {
        let WF = "scoreboard" === FF[0] ? performance.now() + FF[5] : 0;
        const SF = this.scoreboard.endsAt;
        0 !== WF && 0 !== SF && Math.abs(WF - SF) < 1e3 && (WF = SF), this.scoreboard = {
          wire: FF,
          endsAt: WF
        }, PF.j.Uu(YF, this.scoreboard, !0)
      }
    }
    var cW = SF(971);
    const GF = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function zW(FF) {
      const [WF, SF] = (0, AF.useState)((() => (FF - performance.now()) / 1e3));
      return (0, AF.useEffect)((() => {
        if (0 === FF) return;
        const WF = () => {
          SF((FF - performance.now()) / 1e3)
        };
        WF();
        const CF = window.setInterval(WF, 250);
        return () => {
          window.clearInterval(CF)
        }
      }), [FF]), WF
    }

    function IF(FF) {
      let {
        className: WF,
        point: SF
      } = FF;
      const [CF, AF, uF, hF, bW, dF] = SF;
      return (0, cW.jsxs)("div", {
        className: LF()(WF, `Owner-${AF||"None"}`, `Leader-${hF||"None"}`, {
          Contested: bW,
          Here: dF
        }),
        children: [(0, cW.jsx)("span", {
          className: "FrontlinePointLetter",
          children: CF
        }), (0, cW.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${uF}%`
          }
        })]
      })
    }
    const fF = (0, AF.memo)((function(FF) {
        let {
          points: WF,
          markers: SF
        } = FF;
        const {
          t: CF
        } = (0, xW.B)();
        return WF ? (0, cW.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: WF.map((FF => {
            const [WF, , , , , , , AF] = FF;
            return (0, cW.jsxs)("div", {
              ref: SF.bindMarker(WF),
              className: "FrontlinePointMarker",
              children: [(0, cW.jsx)(IF, {
                className: "FrontlinePointMarkerTile",
                point: FF
              }), (0, cW.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [AF && (0, cW.jsx)("span", {
                  className: LF()("FrontlinePointMarkerHomeTurf", `Team-${AF}`),
                  children: CF("frontlineHud:homeTurf", {
                    team: CF(GF[AF])
                  })
                }), (0, cW.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, WF)
          }))
        }) : null
      })),
      yW = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      sF = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function nF(FF) {
      let {
        hud: WF,
        crosshair: SF,
        damage: CF,
        markers: AF
      } = FF;
      const uF = (0, ZF.i)(oF, WF.getWire()),
        hF = (0, ZF.i)(YF, WF.getScoreboard());
      return (0, cW.jsxs)(cW.Fragment, {
        children: [(0, cW.jsx)(HF, {
          damage: CF
        }), (0, cW.jsx)(fF, {
          points: "scoreboard" === hF.wire[0] ? hF.wire[6] : null,
          markers: AF
        }), (0, cW.jsx)(wF, {
          view: hF
        }), (0, cW.jsx)("div", {
          className: "FrontlineReticle",
          ref: SF.bindElement
        }), (0, cW.jsx)(mW.e, {
          children: (0, cW.jsx)(KF, {
            wire: uF
          })
        })]
      })
    }
    const HF = (0, AF.memo)((function(FF) {
        let {
          damage: WF
        } = FF;
        return (0, cW.jsxs)("div", {
          className: "FrontlineDamage",
          ref: WF.bindElement,
          children: [(0, cW.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, cW.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, cW.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      KF = (0, AF.memo)((function(FF) {
        let {
          wire: WF
        } = FF;
        const {
          t: SF
        } = (0, xW.B)();
        if ("capture" === WF[0]) {
          const [, FF, CF, AF, uF, hF, bW] = WF, dF = Math.round(AF / 100 * 24);
          return (0, cW.jsxs)("div", {
            className: LF()("FrontlinePlate", `Status-${CF}`, `Leader-${uF||"None"}`),
            children: [(0, cW.jsx)(vW, {}), (0, cW.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, cW.jsx)("span", {
                className: "FrontlineObjective",
                children: FF
              }), (0, cW.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, cW.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: SF("frontlineHud:objective", {
                    point: FF,
                    friendly: hF,
                    enemy: bW
                  })
                }), (0, cW.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: SF(yW[CF])
                })]
              }), (0, cW.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(AF).padStart(3, "0"), (0, cW.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, cW.jsx)(UF, {
              segments: 24,
              lit: dF
            })]
          })
        }
        if ("alert" === WF[0]) {
          const [, FF, CF, AF] = WF;
          return (0, cW.jsxs)("div", {
            className: LF()("FrontlinePlate", "FrontlineAlert", `Tone-${AF}`),
            children: [(0, cW.jsx)(vW, {}), (0, cW.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: SF(sF[FF])
            }), (0, cW.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: CF
            })]
          })
        }
        return null
      })),
      wF = (0, AF.memo)((function(FF) {
        let {
          view: WF
        } = FF;
        const {
          t: SF
        } = (0, xW.B)(), CF = (0, AF.useRef)(null), uF = function(FF, WF) {
          const [SF, CF] = (0, AF.useState)(!1);
          return (0, AF.useLayoutEffect)((() => {
            const WF = FF.current;
            if (!WF) return;
            const SF = document.querySelector(`.${OF.d}`),
              AF = document.querySelector(`.${OF.g}`),
              uF = () => {
                var FF;
                const uF = WF.querySelector(".FrontlineTeamTrack"),
                  hF = (0, dF.getRemInPx)(),
                  bW = WF.getBoundingClientRect().width - 2 * (null !== (FF = null === uF || void 0 === uF ? void 0 : uF.getBoundingClientRect().width) && void 0 !== FF ? FF : 0),
                  PF = window.innerWidth / 2,
                  RF = SF ? SF.getBoundingClientRect().right : 0,
                  iW = AF ? AF.getBoundingClientRect().left : window.innerWidth,
                  eF = Math.min(PF - RF, iW - PF) - jW - bW / 2,
                  EF = eF < 6 * hF,
                  QF = EF ? (window.innerWidth - bW) / 2 - jW : eF;
                WF.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(QF,14*hF)))}px`), CF(EF)
              };
            uF();
            const hF = new ResizeObserver(uF);
            for (const FF of [WF, SF, AF]) FF && hF.observe(FF);
            return window.addEventListener("resize", uF), () => {
              hF.disconnect(), window.removeEventListener("resize", uF)
            }
          }), [FF, WF]), SF
        }(CF, "scoreboard" === WF.wire[0]);
        if ("scoreboard" !== WF.wire[0]) return null;
        const [, hF, bW, PF, RF, , iW] = WF.wire, eF = "Red" === hF ? "Blue" : "Red";
        return (0, cW.jsxs)("div", {
          className: LF()("FrontlineScoreboardContainer", {
            Below: uF
          }),
          children: [(0, cW.jsxs)("div", {
            ref: CF,
            className: "FrontlineScoreboard",
            children: [(0, cW.jsx)(vW, {}), (0, cW.jsx)(XF, {
              team: hF,
              tickets: bW,
              goal: RF,
              side: "Friendly"
            }), (0, cW.jsx)("div", {
              className: "FrontlinePoints",
              children: iW.map((FF => (0, cW.jsx)(IF, {
                className: "FrontlinePoint",
                point: FF
              }, FF[0])))
            }), (0, cW.jsx)(XF, {
              team: eF,
              tickets: PF,
              goal: RF,
              side: "Enemy"
            })]
          }), (0, cW.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, cW.jsx)(BF, {
              endsAt: WF.endsAt
            }), (0, cW.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: SF("frontlineHud:ticketGoal", {
                goal: RF
              })
            })]
          })]
        })
      }));

    function XF(FF) {
      let {
        team: WF,
        tickets: SF,
        goal: CF,
        side: AF
      } = FF;
      const {
        t: uF
      } = (0, xW.B)(), hF = String(SF).padStart(3, "0"), bW = hF.search(/[1-9]/), dF = -1 === bW ? hF : hF.slice(0, bW), PF = Math.min(20, Math.floor(SF / CF * 20));
      return (0, cW.jsxs)("div", {
        className: LF()("FrontlineTeamScore", AF, `Team-${WF}`),
        children: [(0, cW.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, cW.jsx)("span", {
            className: "Lead",
            children: dF
          }), -1 !== bW && hF.slice(bW)]
        }), (0, cW.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, cW.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: uF(GF[WF])
          }), (0, cW.jsx)(UF, {
            segments: 20,
            lit: PF
          })]
        })]
      })
    }

    function UF(FF) {
      let {
        segments: WF,
        lit: SF
      } = FF;
      return (0, cW.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: WF
        }, ((FF, WF) => (0, cW.jsx)("i", {
          className: LF()({
            Lit: WF < SF
          })
        }, WF)))
      })
    }

    function BF(FF) {
      let {
        endsAt: WF
      } = FF;
      const SF = Math.max(0, Math.ceil(zW(WF)));
      return (0, cW.jsxs)("div", {
        className: LF()("FrontlineClock", {
          Urgent: SF <= 60
        }),
        children: [Math.floor(SF / 60), ":", String(SF % 60).padStart(2, "0")]
      })
    }
    const jW = 8;

    function vW() {
      return (0, cW.jsxs)(cW.Fragment, {
        children: [(0, cW.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, cW.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var JF = SF(35221),
      pF = SF(1115),
      lF = SF(36945);
    class FW {
      constructor(FF) {
        var WF;
        this.hud = FF, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.DC = !1, this.tL = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.tL), null === (WF = window.visualViewport) || void 0 === WF || WF.addEventListener("resize", this.tL)
      }
      bindMarker(FF) {
        let WF = this.refs.get(FF);
        return WF || (WF = WF => {
          var SF;
          null === (SF = this.markers.get(FF)) || void 0 === SF || SF.stopObserving(), this.markers.delete(FF), WF && !this.DC && this.markers.set(FF, this.mount(WF))
        }, this.refs.set(FF, WF)), WF
      }
      frame(FF, WF) {
        this.render = FF;
        const SF = this.hud.getScoreboard().wire;
        if ("scoreboard" === SF[0] && 0 !== this.markers.size)
          for (const [CF, , , , , , AF] of SF[6]) {
            const FF = this.markers.get(CF);
            FF && AF && (FF.target ??= [0, 0, 0], FF.target[0] = AF[0], FF.target[1] = AF[1] + 2.5, FF.target[2] = AF[2], this.place(FF), this.o3(FF, WF && Math.hypot(AF[0] - WF[0], AF[1] - WF[1], AF[2] - WF[2])))
          }
      }
      dispose() {
        var FF;
        this.DC = !0, window.removeEventListener("resize", this.tL), null === (FF = window.visualViewport) || void 0 === FF || FF.removeEventListener("resize", this.tL);
        for (const WF of this.markers.values()) WF.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(FF) {
        const {
          render: WF,
          viewport: SF
        } = this;
        if (!WF || !FF.target) return;
        const CF = (50 - WF.screenBandPct.y) / 100 * SF.height,
          AF = {
            x: FF.halfSize.width + 8,
            top: FF.halfSize.height + 8,
            bottom: FF.halfSize.height + FF.labelsBelow + CF
          },
          uF = WF.projectWorldPosToViewport(FF.target),
          hF = null !== uF && void 0 !== uF ? uF : WF.projectWorldPosToScreenPos(FF.target),
          bW = (0, lF.d)({
            x: hF.x,
            y: hF.y,
            text: uF
          }, AF, SF);
        FF.root.style.translate = `${bW.x}vw ${bW.y}vh`
      }
      o3(FF, WF) {
        if (null === WF) return void(null !== FF.metres && (FF.metres = null, FF.distance.textContent = ""));
        const SF = Date.now();
        (null === FF.metres || (0, JF.c)(WF, FF.metres, FF.metresShownAt)) && (FF.metres = Math.round(WF), FF.metresShownAt = SF, FF.distance.textContent = (0, xW.w)(pF.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(FF.metres)
        }))
      }
      mount(FF) {
        const WF = {
            root: FF,
            distance: FF.querySelector(".FrontlinePointMarkerDistance"),
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
          SF = FF.querySelector(".FrontlinePointMarkerLabels"),
          CF = new ResizeObserver((() => {
            WF.halfSize = {
              width: Math.max(FF.offsetWidth, SF.offsetWidth) / 2,
              height: FF.offsetHeight / 2
            }, WF.labelsBelow = SF.offsetTop + SF.offsetHeight - FF.offsetHeight, this.place(WF)
          }));
        return CF.observe(FF, {
          box: "border-box"
        }), CF.observe(SF, {
          box: "border-box"
        }), WF.stopObserving = () => {
          CF.disconnect()
        }, WF
      }
    }
    var WW = SF(5414),
      SW = SF(2038);
    const CW = "frontlineRoundEndChanged";
    class AW {
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
      xA(FF) {
        const WF = "roundEnd" === FF[0] ? performance.now() + FF[5] : 0;
        this.view = {
          wire: FF,
          key: this.view.key + 1,
          endsAt: WF
        }, PF.j.Uu(CW, this.view, !0)
      }
    }
    const uW = (0, AF.lazy)((() => (0, SW.e)(SF.e(196).then((() => SF(39613))), (FF => FF.FrontlineMvpLineup)))),
      hW = [4800, 4e3, 3200],
      bS = [1, 0, 2],
      dW = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      PW = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function RW(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, ZF.i)(CW, WF.getView()),
        CF = zW(SF.endsAt);
      return "roundEnd" !== SF.wire[0] || 1e3 * CF < -2e3 ? null : (0, cW.jsx)(iS, {
        wire: SF.wire,
        secondsLeft: Math.max(0, Math.ceil(CF))
      }, SF.key)
    }
    const iS = (0, AF.memo)((function(FF) {
      let {
        wire: WF,
        secondsLeft: SF
      } = FF;
      const {
        t: uF
      } = (0, xW.B)(), [, hF, bW, dF, PF, , RF, iW] = WF, eF = (0, AF.useMemo)((() => bS.filter((FF => FF < iW.length))), [iW]), EF = (0, AF.useMemo)((() => eF.map((FF => {
        const [, , , , , WF, SF] = iW[FF];
        return {
          cosmetics: CF.map(((FF, SF) => [FF, WF[SF]])),
          size: 0 === FF ? 1.15 : .85,
          heldGun: {
            name: SF,
            aimed: 0 === FF
          },
          showAfterMs: hW[FF]
        }
      }))), [iW, eF]);
      return (0, cW.jsxs)("div", {
        className: LF()("FrontlineRoundEnd", `Result-${hF}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, cW.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, cW.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, cW.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, cW.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, cW.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (QF = uF(dW[hF]), /\p{Script=Arabic}/u.test(QF) ? [QF] : (0, WW.d)(QF)).map(((FF, WF) => (0, cW.jsx)("span", {
              style: {
                "--letter": WF
              },
              children: FF
            }, WF)))]
          }), (0, cW.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [bW && "victory" === hF && (0, cW.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: uF("frontlineRoundEnd:comeback")
            }), (0, cW.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, cW.jsx)("b", {
                className: "Friendly",
                children: dF
              }), " \u2013 ", (0, cW.jsx)("b", {
                className: "Enemy",
                children: PF
              })]
            })]
          })]
        }), eF.length > 0 && (0, cW.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": eF.length
          },
          children: [(0, cW.jsx)(AF.Suspense, {
            fallback: null,
            children: (0, cW.jsx)(uW, {
              className: "FrontlineRoundEndLineup",
              players: EF
            })
          }), eF.map((FF => (0, cW.jsx)(eW, {
            mvp: iW[FF],
            place: FF
          }, FF)))]
        }), (0, cW.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: uF("frontlineRoundEnd:nextFront", {
            map: RF,
            seconds: String(SF)
          })
        })]
      });
      var QF
    }));

    function eW(FF) {
      let {
        mvp: WF,
        place: SF
      } = FF;
      const {
        t: CF
      } = (0, xW.B)(), [AF, uF, hF, bW, dF] = WF, [PF, RF] = CF(function(FF, WF) {
        return 1 === WF && "damage" !== FF ? `frontlineRoundEnd:${FF}One` : `frontlineRoundEnd:${FF}`
      }(hF, bW), {
        name: "\0",
        count: bW.toLocaleString()
      }).split("\0");
      return (0, cW.jsxs)("div", {
        className: LF()("FrontlineMvpCard", `Place-${SF+1}`, `Team-${uF}`),
        style: {
          "--revealMs": `${hW[SF]}ms`
        },
        children: [(0, cW.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, cW.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, cW.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: CF(PW[SF])
        }), (0, cW.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [PF, (0, cW.jsx)("span", {
            className: "FrontlineMvpName",
            children: AF
          }), RF]
        }), (0, cW.jsx)("div", {
          className: "FrontlineMvpKit",
          children: dF
        })]
      })
    }
    const EW = function(FF, WF, SF, CF) {
      let {
        localPlayerId: hF
      } = CF;
      const bW = new MF,
        dF = new AW;
      let PF = null,
        RF = null,
        iW = null,
        eF = null,
        EF = null,
        QF = [!1, !1];
      const rW = () => {
        var FF, WF;
        const [SF, CF] = QF;
        null === (FF = RF) || void 0 === FF || FF.MWF(!SF), null === (WF = iW) || void 0 === WF || WF.MWF(!CF)
      };
      return {
        onCreate: FF => {
          PF = FF, RF = new gW(FF, hF), iW = new kW(FF, hF), eF = new FW(bW), rW(), EF = (0, uF.r)((0, AF.createElement)(AF.Fragment, null, (0, AF.createElement)(nF, {
            hud: bW,
            crosshair: RF,
            damage: iW,
            markers: eF
          }), (0, AF.createElement)(RW, {
            controller: dF
          })))
        },
        onClose: () => {
          var FF, WF, SF, CF;
          null === (FF = EF) || void 0 === FF || FF(), null === (WF = RF) || void 0 === WF || WF.dispose(), RF = null, null === (SF = iW) || void 0 === SF || SF.dispose(), iW = null, null === (CF = eF) || void 0 === CF || CF.dispose(), eF = null, PF = null
        },
        onAfterRender: (FF, WF) => {
          var SF, CF, AF, uF;
          null === (SF = RF) || void 0 === SF || SF.frame(FF, WF.tanHalfFovY), null === (CF = iW) || void 0 === CF || CF.frame(WF.cameraHeading), null === (AF = eF) || void 0 === AF || AF.frame(WF, null !== (uF = PF) && void 0 !== uF && uF.checkValid(hF) ? PF.fD(hF) : null)
        },
        onReceivedMessageFromServer: (FF, WF) => {
          "frontlineHud" === FF ? bW.xA(WF) : "frontlineScoreboard" === FF ? bW.receiveScoreboard(WF) : "frontlineRoundEnd" === FF ? dF.xA(WF) : "frontlinePrefs" === FF && (QF = WF, rW())
        }
      }
    }
  },
  5414: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    const CF = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function AF(FF) {
      return null === CF ? Array.from(FF) : Array.from(CF.segment(FF), (FF => {
        let {
          segment: WF
        } = FF;
        return WF
      }))
    }
  },
  35520: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    const CF = {
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
for (const FF in modules) Object.freeze(modules[FF]);