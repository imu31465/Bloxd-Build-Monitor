export const id = 18;
export const ids = [18];
export const modules = {
  37538: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      i: () => hM,
      m: () => mM,
      p: () => LM
    });
    var OM = iM(35017),
      SM = iM(37542),
      jM = iM(37544),
      aM = iM(9328),
      PM = iM(1516),
      nM = iM(44),
      QM = iM(65),
      zM = iM(1303);

    function LM() {
      var MM;
      return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
        children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
      })
    }

    function mM(MM) {
      var rM;
      let {
        show: iM
      } = MM;
      (0, PM.e)(SM.e, (0, SM.t)());
      const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
      return (0, nM.useEffect)((() => {
        var MM;
        iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
      }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
        showing: iM,
        globallyUniqueKey: "clientGameMenu",
        children: null === QM || void 0 === QM ? void 0 : QM.content
      })
    }

    function HM(MM) {
      let {
        placement: rM = "bottom"
      } = MM;
      return (0, zM.jsx)("div", {
        id: `clientGameHud-${rM}`,
        style: {
          display: "contents"
        }
      })
    }

    function hM(MM) {
      let {
        children: rM,
        placement: iM = "bottom"
      } = MM;
      const [OM, SM] = (0, nM.useState)(null);
      return (0, nM.useEffect)((() => {
        SM(document.getElementById(`clientGameHud-${iM}`))
      }), [iM]), OM ? (0, QM.createPortal)(rM, OM) : null
    }
  },
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  37629: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => aM,
      g: () => PM,
      h: () => nM
    });
    var OM = iM(44),
      SM = iM(3508);
    const jM = 8,
      aM = "InGameHeaderContainer",
      PM = "TopRightElements";

    function nM(MM) {
      const [rM] = (0, SM.d)(), [iM, nM] = (0, OM.useState)(!1);
      return (0, OM.useLayoutEffect)((() => {
        if (!MM) return;
        const rM = document.querySelector(`.${aM}`),
          iM = document.querySelector(`.${PM}`),
          OM = () => {
            const OM = MM.getBoundingClientRect(),
              SM = rM ? rM.getBoundingClientRect().right : 0,
              aM = iM ? iM.getBoundingClientRect().left : window.innerWidth,
              PM = OM.left < SM + jM,
              QM = OM.right > aM - jM;
            nM(PM || QM)
          };
        OM();
        const SM = new ResizeObserver(OM);
        return SM.observe(MM), rM && SM.observe(rM), iM && SM.observe(iM), () => {
          SM.disconnect()
        }
      }), [MM, rM]), iM
    }
  },
  40515: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      g: () => SM,
      j: () => jM
    });
    var OM = iM(44);

    function SM(MM) {
      return PM(MM, nM)
    }

    function jM(MM) {
      return PM(MM, QM)
    }

    function aM(MM) {
      return `${Math.floor(MM/60)}:${String(MM%60).padStart(2,"0")}`
    }

    function PM(MM, rM) {
      const [, iM] = (0, OM.useState)(null);
      return (0, OM.useEffect)((() => {
        if (0 === MM) return;
        const OM = window.setInterval((() => {
          const OM = rM(MM);
          iM((rM => (null === rM || void 0 === rM ? void 0 : rM.endsAt) === MM && rM.value === OM ? rM : {
            endsAt: MM,
            value: OM
          }))
        }), 250);
        return () => {
          window.clearInterval(OM)
        }
      }), [MM, rM]), rM(MM)
    }

    function nM(MM) {
      return (MM - performance.now()) / 1e3
    }

    function QM(MM) {
      return Math.max(0, Math.ceil(nM(MM)))
    }
  },
  37624: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    const OM = [{
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

    function SM(MM, rM, iM) {
      const SM = Math.abs(MM - rM),
        jM = Date.now() - iM;
      for (const aM of OM)
        if (MM < aM.maxDist) return SM >= aM.hardUpdateDist || jM > aM.timeBetweenSoftChecks && SM >= aM.softUpdateDist;
      return !1
    }
  },
  9328: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => SM
    });
    let OM = null;
    const SM = function(MM) {
        const rM = {
          cycle: MM,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return OM = rM, () => {
          OM === rM && (OM = null)
        }
      },
      jM = () => {
        var MM;
        return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
      }
  },
  39543: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      var OM;
      const {
        width: SM,
        height: jM
      } = iM, aM = null !== (OM = MM.text) && void 0 !== OM ? OM : MM, PM = (aM.x / 100 - .5) * SM, nM = (aM.y / 100 - .5) * jM, QM = SM / 2 - rM.x;
      if (null !== MM.text && Math.abs(PM) <= QM && nM >= rM.top - jM / 2 && nM <= jM / 2 - rM.bottom) return {
        x: aM.x,
        y: aM.y
      };
      const zM = Math.min(0 === PM ? 1 / 0 : QM / Math.abs(PM), nM > 0 ? (jM / 2 - rM.bottom) / nM : nM < 0 ? (rM.top - jM / 2) / nM : 1 / 0);
      return !Number.isFinite(zM) || zM < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + PM * zM / SM * 100,
        y: 50 + nM * zM / jM * 100
      }
    }
    iM.d(rM, {
      c: () => OM
    })
  },
  37544: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => lM,
      b: () => jM,
      f: () => JM,
      i: () => dM,
      j: () => PM,
      m: () => mM,
      q: () => yM,
      u: () => LM,
      x: () => EM,
      y: () => hM
    });
    var OM = iM(19),
      SM = iM(22);
    const jM = "clientGameInventoryButtonsChanged",
      aM = new Map;

    function PM() {
      return [...aM.values()].sort(((MM, rM) => {
        var iM, OM;
        return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
      }))
    }
    let nM = null;

    function QM(MM) {
      nM = MM
    }
    let zM = !1;

    function LM(MM) {
      zM = !0;
      try {
        MM.onClick()
      } finally {
        zM = !1
      }
      MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
    }

    function mM() {
      return zM
    }

    function HM() {
      return PM().filter((MM => MM.panel && !MM.disabled))
    }

    function hM(MM) {
      const rM = HM(),
        iM = rM.findIndex((MM => MM.id === nM));
      return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
    }

    function JM() {
      return null !== nM && HM().length > 1
    }

    function dM() {
      QM(null)
    }

    function yM() {
      "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
    }

    function lM() {
      const MM = nM;
      return QM(null), MM
    }

    function EM(MM) {
      return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
        aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
      }
    }
  },
  37542: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      C: () => zM,
      e: () => PM,
      g: () => lM,
      k: () => dM,
      n: () => yM,
      p: () => mM,
      t: () => QM,
      w: () => JM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(37544);
    const PM = "clientGameUiChanged";
    let nM = null;

    function QM() {
      return nM
    }

    function zM(MM, rM) {
      const iM = {
        content: MM,
        menu: rM
      };
      return nM = iM, SM.i.Tz(PM, nM, !0), () => {
        nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
      }
    }
    let LM = null;

    function mM() {
      return LM
    }

    function HM(MM) {
      return LM = MM, () => {
        LM === MM && (LM = null)
      }
    }
    let hM = !1;

    function JM() {
      const MM = OM.d.get("openInGameMenuName");
      "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dM() {
      EM(!1)
    }

    function yM() {
      EM(hM)
    }

    function lM() {
      hM && EM(!1)
    }

    function EM(MM) {
      "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
        openInGameMenuName: MM ? "inventory" : null
      }), MM || (0, aM.i)(), hM = !1
    }
  },
  40520: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM
    });
    var OM = iM(37624),
      SM = iM(1188),
      jM = iM(1258),
      aM = iM(39491),
      PM = iM(39543);
    class nM {
      constructor(MM, rM) {
        var iM;
        this.classes = MM, this.distanceKey = rM, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.dh = !1, this.pE = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.pE), null === (iM = window.visualViewport) || void 0 === iM || iM.addEventListener("resize", this.pE)
      }
      bindMarker(MM) {
        const rM = this.refs.get(MM);
        if (rM) return rM;
        const iM = rM => {
          var OM;
          null === (OM = this.markers.get(MM)) || void 0 === OM || OM.stopObserving(), this.markers.delete(MM), rM && !this.dh ? (this.markers.set(MM, this.mount(rM)), this.refs.set(MM, iM)) : this.refs.delete(MM)
        };
        return this.refs.set(MM, iM), iM
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(MM) {
        this.render = MM
      }
      update(MM, rM, iM, OM, SM) {
        const jM = this.markers.get(MM);
        jM && (jM.target ??= [0, 0, 0], jM.target[0] = rM, jM.target[1] = iM, jM.target[2] = OM, this.place(jM), this.dO(jM, SM && Math.hypot(rM - SM[0], iM - SM[1], OM - SM[2])))
      }
      dispose() {
        var MM;
        this.dh = !0, window.removeEventListener("resize", this.pE), null === (MM = window.visualViewport) || void 0 === MM || MM.removeEventListener("resize", this.pE);
        for (const rM of this.markers.values()) rM.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(MM) {
        const {
          render: rM,
          viewport: iM
        } = this;
        if (!rM || !MM.target) return;
        const OM = (50 - rM.screenBandPct.y) / 100 * iM.height,
          SM = {
            x: MM.halfSize.width + 8,
            top: MM.halfSize.height + 8,
            bottom: MM.halfSize.height + MM.labelsBelow + OM
          },
          jM = rM.projectWorldPosToViewport(MM.target),
          nM = null !== jM && void 0 !== jM ? jM : rM.projectWorldPosToScreenPos(MM.target),
          QM = (0, PM.c)({
            x: nM.x,
            y: nM.y,
            text: jM
          }, SM, iM);
        (0, aM.b)(MM.root, Math.round(100 * QM.x) / 100, Math.round(100 * QM.y) / 100)
      }
      dO(MM, rM) {
        if (null === rM) return void(null !== MM.metres && (MM.metres = null, MM.distance.textContent = ""));
        const iM = Date.now();
        (null === MM.metres || (0, OM.c)(rM, MM.metres, MM.metresShownAt)) && (MM.metres = Math.round(rM), MM.metresShownAt = iM, MM.distance.textContent = (0, SM.x)(jM.e.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(MM.metres)
        }))
      }
      mount(MM) {
        const rM = {
            root: MM,
            distance: MM.querySelector(`.${this.classes.distance}`),
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
          iM = MM.querySelector(`.${this.classes.labels}`),
          OM = new ResizeObserver((() => {
            rM.halfSize = {
              width: Math.max(MM.offsetWidth, iM.offsetWidth) / 2,
              height: MM.offsetHeight / 2
            }, rM.labelsBelow = iM.offsetTop + iM.offsetHeight - MM.offsetHeight, this.place(rM)
          }));
        return OM.observe(MM, {
          box: "border-box"
        }), OM.observe(iM, {
          box: "border-box"
        }), rM.stopObserving = () => {
          OM.disconnect()
        }, rM
      }
    }
  },
  40513: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => Hr
    });
    const OM = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var SM = iM(44),
      jM = iM(37542),
      aM = iM(37975),
      PM = iM(37554),
      nM = iM(1830),
      QM = iM(22);
    const zM = {
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
    const LM = 32;

    function mM(MM, rM, iM, OM) {
      return {
        tag: "line",
        attrs: {
          x1: MM,
          y1: rM,
          x2: iM,
          y2: OM,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function HM(MM) {
      return {
        tag: "circle",
        attrs: {
          cx: LM,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LM,
          r: MM,
          class: "Fill"
        }
      }
    }

    function hM(MM, rM) {
      return {
        tag: "path",
        attrs: {
          d: MM,
          "stroke-width": rM
        }
      }
    }

    function JM(MM, rM, iM) {
      return {
        tag: "circle",
        attrs: {
          cx: LM,
          cy: LM,
          r: MM,
          "stroke-width": rM,
          class: iM
        }
      }
    }

    function dM(MM, rM, iM) {
      return {
        tag: "text",
        attrs: {
          x: MM,
          y: rM,
          class: "Fill Label"
        },
        text: iM
      }
    }
    const yM = {
      pistol: MM => [mM(LM, LM - MM - 5, LM, LM - MM), mM(LM - MM - 5, LM, LM - MM, LM), mM(LM + MM, LM, LM + MM + 5, LM), HM(1.4)],
      rifle: MM => [mM(LM, LM - MM - 8, LM, LM - MM), mM(LM, LM + MM, LM, LM + MM + 8), mM(LM - MM - 8, LM, LM - MM, LM), mM(LM + MM, LM, LM + MM + 8, LM), HM(1)],
      smg: MM => {
        const rM = Math.PI / 2,
          iM = [];
        for (let aM = 0; aM < 4; aM++) iM.push((SM = aM * rM + .35, jM = (aM + 1) * rM - .35, hM(`M${LM+(OM=6+MM)*Math.cos(SM)} ${LM+OM*Math.sin(SM)} A${OM} ${OM} 0 0 1 ${LM+OM*Math.cos(jM)} ${LM+OM*Math.sin(jM)}`, 2)));
        var OM, SM, jM;
        return [...iM, HM(1.4)]
      },
      shotgun: MM => [JM(MM, 3, "Ring Outline"), JM(MM, 1.5, "Ring")],
      marksman: MM => [hM(`M${26-MM/2} ${39+MM/2} L32 33 L${38+MM/2} ${39+MM/2}`, 2), mM(14 - MM, LM, 24 - MM, LM, 1.5), mM(40 + MM, LM, 50 + MM, LM, 1.5), mM(14 - MM, 30, 14 - MM, 34, 1.5), mM(50 + MM, 30, 50 + MM, 34, 1.5)],
      machineGun: MM => {
        const rM = 10 + MM,
          iM = [];
        for (const [OM, SM] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) iM.push(hM(`M${LM+OM*rM} ${LM+SM*(rM-5)} L${LM+OM*rM} ${LM+SM*rM} L${LM+OM*(rM-5)} ${LM+SM*rM}`, 2));
        return [...iM, mM(LM, 28, LM, 36, 1.5), mM(28, LM, 36, LM, 1.5)]
      },
      launcher: () => [mM(14, 30, 50, 30, 1.5), mM(LM, 24, LM, 52, 1.5), mM(28, 38, 36, 38, 1.5), mM(29, 44, 35, 44, 1.5), mM(30, 50, 34, 50, 1.5), dM(38, 40, "100"), dM(37, 46, "200"), HM(1.4, 30)],
      melee: () => [hM("M32 26 L38 32 L32 38 L26 32 Z", 1.5), HM(1.2)],
      throwable: () => [HM(1.6)]
    };

    function lM(MM) {
      let {
        tag: rM,
        attrs: iM,
        text: OM
      } = MM, SM = `<${rM}`;
      for (const [jM, aM] of Object.entries(iM)) SM += ` ${jM}="${aM}"`;
      return void 0 === OM ? `${SM}/>` : `${SM}>${OM}</${rM}>`
    }
    class EM {
      constructor(MM, rM) {
        this.api = MM, this.localPlayerId = rM, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = MM => {
          this.element = MM, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, MM && !this.enabled && (MM.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, nM.getRemInPx)()))
        }, this.tokens = [QM.i.subscribe("aimingOverlay", (MM => {
          this.sniperOverlay = "sniper" === MM
        })), QM.i.subscribe("mouseState", (MM => {
          let {
            isDown: rM
          } = MM;
          this.mouseDown = rM
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      kR(MM) {
        MM !== this.enabled && (this.enabled = MM, this.drawnVisible = null, MM || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(MM, rM) {
        var iM, OM;
        if (!this.enabled) return;
        const {
          api: SM
        } = this, jM = SM.isAlive(this.localPlayerId) && null !== (iM = null === (OM = SM.TrM(this.localPlayerId)) || void 0 === OM ? void 0 : OM.name) && void 0 !== iM ? iM : null, aM = (PM = jM) && zM[PM] || null;
        var PM;
        if (this.setOwnsCrosshair(null !== aM), !this.element) return;
        const nM = SM.getHeldGunInaccuracy(),
          QM = null !== nM,
          LM = null !== aM && !this.sniperOverlay && SM.isCrosshairShown();
        if (LM !== this.drawnVisible && (this.drawnVisible = LM, this.element.style.display = LM ? "block" : "none"), !LM) return;
        const mM = QM ? function(MM) {
            return "launcher" === MM || "melee" === MM || "throwable" === MM ? "none" : "shotgun" === MM ? "cone" : "offset"
          }(aM) : "none",
          HM = null !== nM && void 0 !== nM ? nM : 0;
        "cone" === mM ? this.drawCone(aM, this.coneRadiusVh(HM, rM) * this.gapPerVh, MM) : (this.coneDrawn = !1, this.draw(aM, "none" === mM ? 2 : this.offsetGap(HM)));
        const hM = !QM && this.mouseDown;
        hM !== this.drawnPressed && (this.drawnPressed = hM, this.element.classList.toggle("Pressed", hM))
      }
      dispose() {
        for (const MM of this.tokens) QM.i.unsubscribe(MM);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(MM, rM) {
        var iM, OM;
        MM !== this.drawnFamily ? (this.drawnFamily = MM, this.drawnGap = rM, this.element.innerHTML = function(MM, rM) {
          return `<svg viewBox="0 0 64 64">${yM[MM](rM).map(lM).join("")}</svg>`
        }(MM, rM), this.shapes = Array.from(null !== (iM = null === (OM = this.element.firstElementChild) || void 0 === OM ? void 0 : OM.children) && void 0 !== iM ? iM : [])) : rM !== this.drawnGap && (this.drawnGap = rM, function(MM, rM, iM) {
          const OM = yM[rM](iM);
          for (let SM = 0; SM < OM.length; SM++)
            for (const [rM, iM] of Object.entries(OM[SM].attrs)) {
              const OM = String(iM);
              MM[SM].getAttribute(rM) !== OM && MM[SM].setAttribute(rM, OM)
            }
        }(this.shapes, MM, rM))
      }
      drawCone(MM, rM, iM) {
        MM === this.drawnFamily && this.coneDrawn ? this.shownRadius += (rM - this.shownRadius) * (1 - Math.exp(-iM / 80)) : this.shownRadius = rM, this.coneDrawn = !0, this.draw(MM, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(MM, rM) {
        if (!(rM > 0)) return 1;
        const iM = MM * aM.e / 2;
        return Math.max(50 * Math.tan(iM) / rM, 1)
      }
      offsetGap(MM) {
        const rM = 2 + ((0, PM.g)(MM) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * rM) / 2)
      }
      setOwnsCrosshair(MM) {
        MM !== this.ownsCrosshair && (this.ownsCrosshair = MM, document.body.classList.toggle("FrontlineCustomCrosshair", MM))
      }
    }
    const UM = "FrontlineCustomDamage",
      GM = .45,
      CM = .2;
    class eM {
      constructor(MM, rM) {
        this.api = MM, this.localPlayerId = rM, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.fj = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = MM => {
          var rM, iM;
          this.clearHits(), this.root = MM, this.lowLayer = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.querySelector(".FrontlineDamageLow")) && void 0 !== rM ? rM : null, this.arcLayer = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.querySelector(".FrontlineDamageArcs")) && void 0 !== iM ? iM : null, this.showRoot(), this.drawLow()
        }, this.token = QM.i.subscribe("damagedByOtherPlayer", (MM => {
          let {
            direction: rM,
            Zj: iM
          } = MM;
          this.onHurt(rM, iM)
        })), this.syncHealth(), document.body.classList.add(UM)
      }
      kR(MM) {
        MM !== this.enabled && (this.enabled = MM, document.body.classList.toggle(UM, MM), MM || this.clearHits(), this.showRoot())
      }
      frame(MM) {
        this.syncHealth(), this.cameraHeading = MM;
        for (const rM of this.arcs) this.drawArcAngle(rM)
      }
      dispose() {
        QM.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(UM)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const MM = this.api.getClientOption(this.localPlayerId, "_health"),
          rM = this.api.getClientOption(this.localPlayerId, "_shield"),
          iM = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(MM, this.readHealth) && Object.is(rM, this.readShield) && Object.is(iM, this.readMaxHealth)) return;
        if (this.readHealth = MM, this.readShield = rM, this.readMaxHealth = iM, null === MM || void 0 === MM || !iM) return this.lastHealthPool = null, this.maxHealth = null, this.fj = 1, this.dead = !1, void this.drawLow();
        const OM = MM + (null !== rM && void 0 !== rM ? rM : 0);
        if (null !== this.lastHealthPool && OM < this.lastHealthPool) {
          const MM = performance.now(),
            rM = (this.lastHealthPool - OM) / iM;
          this.lastDrop = MM - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + rM,
            at: this.lastDrop.at
          } : {
            frac: rM,
            at: MM
          }
        }
        this.dead = MM <= 0, this.dead && this.clearHits(), this.lastHealthPool = OM, this.maxHealth = iM, this.fj = MM > 0 ? MM / iM : 1, this.drawLow()
      }
      onHurt(MM, rM) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const iM = Math.min(1, this.takeDamageFrac(rM) / .3);
        null !== MM && this.showArc(MM, iM), this.flashEdge(null === MM ? null : MM - this.cameraHeading, .4 + .6 * iM)
      }
      takeDamageFrac(MM) {
        if (void 0 !== MM && this.maxHealth) return MM / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: rM
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, rM
      }
      drawLow() {
        if (!this.lowLayer) return;
        const MM = wM((GM - this.fj) / .25),
          rM = wM((CM - this.fj) / .15000000000000002),
          iM = this.fj < GM;
        this.lowLayer.classList.toggle("Active", iM), this.lowLayer.classList.toggle("Critical", this.fj < CM), this.lowLayer.style.opacity = String(iM ? .55 + .3 * MM + .15 * rM : 0)
      }
      showArc(MM, rM) {
        var iM, OM;
        if (!this.arcLayer) return;
        let SM = this.arcs.find((rM => bM(rM.direction, MM) < .6));
        if (!SM) {
          const rM = document.createElement("div");
          rM.className = "FrontlineDamageArc", rM.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(rM), SM = {
            element: rM,
            direction: MM,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(SM)
        }
        SM.direction = MM, this.drawArcAngle(SM);
        const jM = SM.fade ? Number(getComputedStyle(SM.element).opacity) : 0;
        null === (iM = SM.fade) || void 0 === iM || iM.cancel(), null === (OM = SM.pop) || void 0 === OM || OM.cancel(), SM.element.style.opacity = "1";
        const aM = SM.element.animate([{
          opacity: jM
        }, {
          opacity: 1
        }], 144);
        SM.fade = aM, SM.pop = SM.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * rM
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const PM = SM;
        aM.onfinish = () => {
          if (PM.fade !== aM) return;
          const MM = PM.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          MM.startTime = aM.startTime, PM.fade = MM, MM.onfinish = () => {
            PM.fade === MM && (PM.element.remove(), tM(this.arcs, PM))
          }
        }
      }
      drawArcAngle(MM) {
        const rM = MM.direction - this.cameraHeading;
        (null === MM.drawnAngle || Math.abs(rM - MM.drawnAngle) > .005) && (MM.drawnAngle = rM, MM.element.style.rotate = `${rM}rad`)
      }
      flashEdge(MM, rM) {
        var iM, OM, SM;
        if (!this.root) return;
        let jM = this.flashes.find((rM => null === rM.angle || null === MM ? rM.angle === MM : bM(rM.angle, MM) < .5));
        if (!jM) {
          const rM = document.createElement("div");
          rM.className = "FrontlineDamageFlash";
          const iM = rM.appendChild(document.createElement("div"));
          iM.className = "FrontlineDamageFlashGlow", this.root.insertBefore(rM, this.arcLayer), jM = {
            element: rM,
            glow: iM,
            angle: MM,
            level: 0,
            animation: null
          }, this.flashes.push(jM)
        }
        const aM = null === (iM = jM.animation) || void 0 === iM || null === (OM = iM.effect) || void 0 === OM ? void 0 : OM.getComputedTiming().progress,
          PM = null === aM || void 0 === aM ? 0 : jM.level * (1 - aM);
        jM.level = Math.min(1, Math.max(rM, PM + .6 * rM)), jM.angle = MM;
        const {
          x: nM,
          y: QM,
          rx: zM,
          ry: LM
        } = function(MM, rM) {
          const iM = window.innerWidth,
            OM = window.innerHeight;
          if (null === MM) return {
            x: iM / 2,
            y: OM / 2,
            rx: 0,
            ry: 0
          };
          const SM = Math.sin(MM),
            jM = -Math.cos(MM),
            aM = iM / 2 / Math.max(1e-6, Math.abs(SM)),
            PM = OM / 2 / Math.max(1e-6, Math.abs(jM)),
            nM = Math.min(aM, PM),
            QM = Math.round(iM / 2 + SM * nM),
            zM = Math.round(OM / 2 + jM * nM),
            LM = OM / 100 * (.85 + .25 * rM),
            mM = aM <= PM,
            HM = Math.round((mM ? 30 : 74) * LM),
            hM = Math.round((mM ? 58 : 26) * LM);
          return {
            x: QM,
            y: zM,
            rx: HM,
            ry: hM
          }
        }(MM, jM.level), {
          style: mM
        } = jM.glow;
        jM.glow.classList.toggle("Everywhere", null === MM), mM.setProperty("--glowX", `${nM}px`), mM.setProperty("--glowY", `${QM}px`), mM.setProperty("--glowRx", `${zM}px`), mM.setProperty("--glowRy", `${LM}px`), jM.element.style.transformOrigin = `${nM}px ${QM}px`, null === (SM = jM.animation) || void 0 === SM || SM.cancel();
        const HM = jM.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: jM.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * jM.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * jM.level
        });
        jM.animation = HM;
        const hM = jM;
        HM.onfinish = () => {
          hM.animation === HM && (hM.element.remove(), tM(this.flashes, hM))
        }
      }
      clearHits() {
        for (const OM of this.arcs) {
          var MM, rM;
          null === (MM = OM.fade) || void 0 === MM || MM.cancel(), OM.fade = null, null === (rM = OM.pop) || void 0 === rM || rM.cancel(), OM.element.remove()
        }
        this.arcs.length = 0;
        for (const OM of this.flashes) {
          var iM;
          null === (iM = OM.animation) || void 0 === iM || iM.cancel(), OM.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function bM(MM, rM) {
      return Math.abs(Math.atan2(Math.sin(MM - rM), Math.cos(MM - rM)))
    }

    function wM(MM) {
      return Math.max(0, Math.min(1, MM))
    }

    function tM(MM, rM) {
      const iM = MM.indexOf(rM); - 1 !== iM && MM.splice(iM, 1)
    }
    var gM = iM(1116),
      uM = iM.n(gM),
      RM = iM(37538),
      pM = iM(37629),
      WM = iM(1188),
      sM = iM(1516),
      DM = iM(40515);
    const kM = "frontlineHudChanged",
      ZM = "frontlineScoreboardChanged";
    class oM {
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
      GL(MM) {
        this.wire = MM, QM.i.Tz(kM, MM, !0)
      }
      receiveScoreboard(MM) {
        let rM = "scoreboard" === MM[0] ? performance.now() + MM[5] : 0;
        const iM = this.scoreboard.endsAt;
        0 !== rM && 0 !== iM && Math.abs(rM - iM) < 1e3 && (rM = iM), this.scoreboard = {
          wire: MM,
          endsAt: rM
        }, QM.i.Tz(ZM, this.scoreboard, !0)
      }
    }
    var fM = iM(1303);
    const YM = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function NM(MM) {
      let {
        className: rM,
        point: iM
      } = MM;
      const [OM, SM, jM, aM, PM, nM] = iM;
      return (0, fM.jsxs)("div", {
        className: uM()(rM, `Owner-${SM||"None"}`, `Leader-${aM||"None"}`, {
          Contested: PM,
          Here: nM
        }),
        children: [(0, fM.jsx)("span", {
          className: "FrontlinePointLetter",
          children: OM
        }), (0, fM.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${jM}%`
          }
        })]
      })
    }
    const AM = (0, SM.memo)((function(MM) {
        let {
          points: rM,
          markers: iM
        } = MM;
        const {
          t: OM
        } = (0, WM.A)();
        return rM ? (0, fM.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: rM.map((MM => {
            const [rM, , , , , , , SM] = MM;
            return (0, fM.jsxs)("div", {
              ref: iM.points.bindMarker(rM),
              className: "FrontlinePointMarker",
              children: [(0, fM.jsx)(NM, {
                className: "FrontlinePointMarkerTile",
                point: MM
              }), (0, fM.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [SM && (0, fM.jsx)("span", {
                  className: uM()("FrontlinePointMarkerHomeTurf", `Team-${SM}`),
                  children: OM("frontlineHud:homeTurf", {
                    team: OM(YM[SM])
                  })
                }), (0, fM.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, rM)
          }))
        }) : null
      })),
      xM = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      vM = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function FM(MM) {
      let {
        hud: rM,
        crosshair: iM,
        damage: OM,
        markers: SM
      } = MM;
      const jM = (0, sM.e)(kM, rM.getWire()),
        aM = (0, sM.e)(ZM, rM.getScoreboard());
      return (0, fM.jsxs)(fM.Fragment, {
        children: [(0, fM.jsx)(BM, {
          damage: OM
        }), (0, fM.jsx)(AM, {
          points: "scoreboard" === aM.wire[0] ? aM.wire[6] : null,
          markers: SM
        }), (0, fM.jsx)(IM, {
          view: aM
        }), (0, fM.jsx)("div", {
          className: "FrontlineReticle",
          ref: iM.bindElement
        }), (0, fM.jsx)(RM.i, {
          children: (0, fM.jsx)(XM, {
            wire: jM
          })
        })]
      })
    }
    const BM = (0, SM.memo)((function(MM) {
        let {
          damage: rM
        } = MM;
        return (0, fM.jsxs)("div", {
          className: "FrontlineDamage",
          ref: rM.bindElement,
          children: [(0, fM.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, fM.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, fM.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      XM = (0, SM.memo)((function(MM) {
        let {
          wire: rM
        } = MM;
        const {
          t: iM
        } = (0, WM.A)();
        if ("capture" === rM[0]) {
          const [, MM, OM, SM, jM, aM, PM] = rM, nM = Math.round(SM / 100 * 24);
          return (0, fM.jsxs)("div", {
            className: uM()("FrontlinePlate", `Status-${OM}`, `Leader-${jM||"None"}`),
            children: [(0, fM.jsx)(VM, {}), (0, fM.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, fM.jsx)("span", {
                className: "FrontlineObjective",
                children: MM
              }), (0, fM.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, fM.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: iM("frontlineHud:objective", {
                    point: MM,
                    friendly: aM,
                    enemy: PM
                  })
                }), (0, fM.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: iM(xM[OM])
                })]
              }), (0, fM.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(SM).padStart(3, "0"), (0, fM.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, fM.jsx)(qM, {
              segments: 24,
              lit: nM
            })]
          })
        }
        if ("alert" === rM[0]) {
          const [, MM, OM, SM] = rM;
          return (0, fM.jsxs)("div", {
            className: uM()("FrontlinePlate", "FrontlineAlert", `Tone-${SM}`),
            children: [(0, fM.jsx)(VM, {}), (0, fM.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: iM(vM[MM])
            }), (0, fM.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: OM
            })]
          })
        }
        return null
      })),
      IM = (0, SM.memo)((function(MM) {
        let {
          view: rM
        } = MM;
        const {
          t: iM
        } = (0, WM.A)(), OM = (0, SM.useRef)(null), jM = function(MM, rM) {
          const [iM, OM] = (0, SM.useState)(!1);
          return (0, SM.useLayoutEffect)((() => {
            const rM = MM.current;
            if (!rM) return;
            const iM = document.querySelector(`.${pM.e}`),
              SM = document.querySelector(`.${pM.g}`),
              jM = () => {
                var MM;
                const jM = rM.querySelector(".FrontlineTeamTrack"),
                  aM = (0, nM.getRemInPx)(),
                  PM = rM.getBoundingClientRect().width - 2 * (null !== (MM = null === jM || void 0 === jM ? void 0 : jM.getBoundingClientRect().width) && void 0 !== MM ? MM : 0),
                  QM = window.innerWidth / 2,
                  zM = iM ? iM.getBoundingClientRect().right : 0,
                  LM = SM ? SM.getBoundingClientRect().left : window.innerWidth,
                  mM = Math.min(QM - zM, LM - QM) - pM.c - PM / 2,
                  HM = mM < 6 * aM,
                  hM = HM ? (window.innerWidth - PM) / 2 - pM.c : mM;
                rM.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(hM,14*aM)))}px`), OM(HM)
              };
            jM();
            const aM = new ResizeObserver(jM);
            for (const MM of [rM, iM, SM]) MM && aM.observe(MM);
            return window.addEventListener("resize", jM), () => {
              aM.disconnect(), window.removeEventListener("resize", jM)
            }
          }), [MM, rM]), iM
        }(OM, "scoreboard" === rM.wire[0]);
        if ("scoreboard" !== rM.wire[0]) return null;
        const [, aM, PM, QM, zM, , LM] = rM.wire, mM = "Red" === aM ? "Blue" : "Red";
        return (0, fM.jsxs)("div", {
          className: uM()("FrontlineScoreboardContainer", {
            Below: jM
          }),
          children: [(0, fM.jsxs)("div", {
            ref: OM,
            className: "FrontlineScoreboard",
            children: [(0, fM.jsx)(VM, {}), (0, fM.jsx)(KM, {
              team: aM,
              tickets: PM,
              goal: zM,
              side: "Friendly"
            }), (0, fM.jsx)("div", {
              className: "FrontlinePoints",
              children: LM.map((MM => (0, fM.jsx)(NM, {
                className: "FrontlinePoint",
                point: MM
              }, MM[0])))
            }), (0, fM.jsx)(KM, {
              team: mM,
              tickets: QM,
              goal: zM,
              side: "Enemy"
            })]
          }), (0, fM.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, fM.jsx)(TM, {
              endsAt: rM.endsAt
            }), (0, fM.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: iM("frontlineHud:ticketGoal", {
                goal: zM
              })
            })]
          })]
        })
      }));

    function KM(MM) {
      let {
        team: rM,
        tickets: iM,
        goal: OM,
        side: SM
      } = MM;
      const {
        t: jM
      } = (0, WM.A)(), aM = String(iM).padStart(3, "0"), PM = aM.search(/[1-9]/), nM = -1 === PM ? aM : aM.slice(0, PM), QM = Math.min(20, Math.floor(iM / OM * 20));
      return (0, fM.jsxs)("div", {
        className: uM()("FrontlineTeamScore", SM, `Team-${rM}`),
        children: [(0, fM.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, fM.jsx)("span", {
            className: "Lead",
            children: nM
          }), -1 !== PM && aM.slice(PM)]
        }), (0, fM.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, fM.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: jM(YM[rM])
          }), (0, fM.jsx)(qM, {
            segments: 20,
            lit: QM
          })]
        })]
      })
    }

    function qM(MM) {
      let {
        segments: rM,
        lit: iM
      } = MM;
      return (0, fM.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: rM
        }, ((MM, rM) => (0, fM.jsx)("i", {
          className: uM()({
            Lit: rM < iM
          })
        }, rM)))
      })
    }

    function TM(MM) {
      let {
        endsAt: rM
      } = MM;
      const iM = (0, DM.j)(rM);
      return (0, fM.jsx)("div", {
        className: uM()("FrontlineClock", {
          Urgent: iM <= 60
        }),
        children: (0, DM.d)(iM)
      })
    }

    function VM() {
      return (0, fM.jsxs)(fM.Fragment, {
        children: [(0, fM.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, fM.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var cM = iM(40520);
    class Mr {
      constructor(MM) {
        this.hud = MM, this.points = new cM.e({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(MM, rM) {
        this.points.setRender(MM);
        const iM = this.hud.getScoreboard().wire;
        if ("scoreboard" === iM[0] && this.points.hasMarkers())
          for (const [OM, , , , , , SM] of iM[6]) SM && this.points.update(OM, SM[0], SM[1] + 2.5, SM[2], rM)
      }
    }
    var rr = iM(6897),
      ir = iM(2843);
    const Or = "frontlineRoundEndChanged";
    class Sr {
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
      GL(MM) {
        const rM = "roundEnd" === MM[0] ? performance.now() + MM[5] : 0;
        this.view = {
          wire: MM,
          key: this.view.key + 1,
          endsAt: rM
        }, QM.i.Tz(Or, this.view, !0)
      }
    }
    const jr = (0, SM.lazy)((() => (0, ir.e)(Promise.all([iM.e(257), iM.e(225)]).then((() => iM(44401))), (MM => MM.FrontlineMvpLineup)))),
      ar = [4800, 4e3, 3200],
      Pr = [1, 0, 2],
      nr = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Qr = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function zr(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, sM.e)(Or, rM.getView()),
        OM = (0, DM.g)(iM.endsAt);
      return "roundEnd" !== iM.wire[0] || 1e3 * OM < -2e3 ? null : (0, fM.jsx)(Lr, {
        wire: iM.wire,
        secondsLeft: Math.max(0, Math.ceil(OM))
      }, iM.key)
    }
    const Lr = (0, SM.memo)((function(MM) {
      let {
        wire: rM,
        secondsLeft: iM
      } = MM;
      const {
        t: jM
      } = (0, WM.A)(), [, aM, PM, nM, QM, , zM, LM] = rM, mM = (0, SM.useMemo)((() => Pr.filter((MM => MM < LM.length))), [LM]), HM = (0, SM.useMemo)((() => mM.map((MM => {
        const [, , , , , rM, iM] = LM[MM];
        return {
          cosmetics: OM.map(((MM, iM) => [MM, rM[iM]])),
          size: 0 === MM ? 1.15 : .85,
          heldGun: {
            name: iM,
            aimed: 0 === MM
          },
          showAfterMs: ar[MM]
        }
      }))), [LM, mM]);
      return (0, fM.jsxs)("div", {
        className: uM()("FrontlineRoundEnd", `Result-${aM}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, fM.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, fM.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, fM.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, fM.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, fM.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (hM = jM(nr[aM]), /\p{Script=Arabic}/u.test(hM) ? [hM] : (0, rr.b)(hM)).map(((MM, rM) => (0, fM.jsx)("span", {
              style: {
                "--letter": rM
              },
              children: MM
            }, rM)))]
          }), (0, fM.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [PM && "victory" === aM && (0, fM.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: jM("frontlineRoundEnd:comeback")
            }), (0, fM.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, fM.jsx)("b", {
                className: "Friendly",
                children: nM
              }), " \u2013 ", (0, fM.jsx)("b", {
                className: "Enemy",
                children: QM
              })]
            })]
          })]
        }), mM.length > 0 && (0, fM.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": mM.length
          },
          children: [(0, fM.jsx)(SM.Suspense, {
            fallback: null,
            children: (0, fM.jsx)(jr, {
              className: "FrontlineRoundEndLineup",
              players: HM
            })
          }), mM.map((MM => (0, fM.jsx)(mr, {
            mvp: LM[MM],
            place: MM
          }, MM)))]
        }), (0, fM.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: jM("frontlineRoundEnd:nextFront", {
            map: zM,
            seconds: String(iM)
          })
        })]
      });
      var hM
    }));

    function mr(MM) {
      let {
        mvp: rM,
        place: iM
      } = MM;
      const {
        t: OM
      } = (0, WM.A)(), [SM, jM, aM, PM, nM] = rM, [QM, zM] = OM(function(MM, rM) {
        return 1 === rM && "damage" !== MM ? `frontlineRoundEnd:${MM}One` : `frontlineRoundEnd:${MM}`
      }(aM, PM), {
        name: "\0",
        count: PM.toLocaleString()
      }).split("\0");
      return (0, fM.jsxs)("div", {
        className: uM()("FrontlineMvpCard", `Place-${iM+1}`, `Team-${jM}`),
        style: {
          "--revealMs": `${ar[iM]}ms`
        },
        children: [(0, fM.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, fM.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, fM.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: OM(Qr[iM])
        }), (0, fM.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [QM, (0, fM.jsx)("span", {
            className: "FrontlineMvpName",
            children: SM
          }), zM]
        }), (0, fM.jsx)("div", {
          className: "FrontlineMvpKit",
          children: nM
        })]
      })
    }
    const Hr = function(MM, rM, iM, OM) {
      let {
        localPlayerId: aM
      } = OM;
      const PM = new oM,
        nM = new Sr;
      let QM = null,
        zM = null,
        LM = null,
        mM = null,
        HM = null,
        hM = [!1, !1];
      const JM = () => {
        var MM, rM;
        const [iM, OM] = hM;
        null === (MM = zM) || void 0 === MM || MM.kR(!iM), null === (rM = LM) || void 0 === rM || rM.kR(!OM)
      };
      return {
        onCreate: MM => {
          QM = MM, zM = new EM(MM, aM), LM = new eM(MM, aM), mM = new Mr(PM), JM(), HM = (0, jM.C)((0, SM.createElement)(SM.Fragment, null, (0, SM.createElement)(FM, {
            hud: PM,
            crosshair: zM,
            damage: LM,
            markers: mM
          }), (0, SM.createElement)(zr, {
            controller: nM
          })))
        },
        onClose: () => {
          var MM, rM, iM, OM;
          null === (MM = HM) || void 0 === MM || MM(), null === (rM = zM) || void 0 === rM || rM.dispose(), zM = null, null === (iM = LM) || void 0 === iM || iM.dispose(), LM = null, null === (OM = mM) || void 0 === OM || OM.points.dispose(), mM = null, QM = null
        },
        onAfterRender: (MM, rM) => {
          var iM, OM, SM, jM, PM;
          null === (iM = zM) || void 0 === iM || iM.frame(MM, rM.tanHalfFovY), null === (OM = LM) || void 0 === OM || OM.frame(rM.cameraHeading), null === (SM = mM) || void 0 === SM || SM.frame(rM, null !== (jM = null === (PM = QM) || void 0 === PM ? void 0 : PM.getPositionView(aM)) && void 0 !== jM ? jM : null)
        },
        onReceivedMessageFromServer: (MM, rM) => {
          "frontlineHud" === MM ? PM.GL(rM) : "frontlineScoreboard" === MM ? PM.receiveScoreboard(rM) : "frontlineRoundEnd" === MM ? nM.GL(rM) : "frontlinePrefs" === MM && (hM = rM, JM())
        }
      }
    }
  },
  6897: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    const OM = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function SM(MM) {
      return null === OM ? Array.from(MM) : Array.from(OM.segment(MM), (MM => {
        let {
          segment: rM
        } = MM;
        return rM
      }))
    }
  },
  39491: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      e: () => jM
    });
    const OM = new WeakMap;

    function SM(MM) {
      let rM = OM.get(MM);
      return rM || (rM = {
        hidden: MM.hidden,
        x: NaN,
        y: NaN
      }, OM.set(MM, rM)), rM
    }

    function jM(MM, rM) {
      const iM = SM(MM);
      iM.hidden !== rM && (iM.hidden = rM, MM.hidden = rM)
    }

    function aM(MM, rM, iM) {
      const OM = SM(MM);
      OM.x === rM && OM.y === iM || (OM.x = rM, OM.y = iM, MM.style.translate = `${rM}vw ${iM}vh`)
    }
  },
  38005: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    const OM = {
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
for (const MM in modules) Object.freeze(modules[MM]);