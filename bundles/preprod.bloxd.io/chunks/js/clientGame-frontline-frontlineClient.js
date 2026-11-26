export const id = 18;
export const ids = [18];
export const modules = {
  37263: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB,
      e: () => NB,
      h: () => zB,
      l: () => PB
    });
    var YB = GB(34790),
      DB = GB(37267),
      QB = GB(37270),
      oB = GB(9391),
      jB = GB(1480),
      yB = GB(56),
      JB = GB(70),
      MB = GB(1282);

    function PB() {
      var BB;
      return (0, jB.i)(DB.d, (0, DB.n)()), (0, MB.jsx)(MB.Fragment, {
        children: null === (BB = (0, DB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var OB;
      let {
        show: GB
      } = BB;
      (0, jB.i)(DB.d, (0, DB.n)());
      const JB = null === (OB = (0, DB.n)()) || void 0 === OB ? void 0 : OB.menu;
      return (0, yB.useEffect)((() => {
        var BB;
        GB || (null === JB || void 0 === JB || null === (BB = JB.onClose) || void 0 === BB || BB.call(JB), (0, QB.u)())
      }), [GB, JB]), (0, yB.useEffect)((() => GB ? (0, oB.d)(QB.D, QB.i) : void 0), [GB]), (0, MB.jsx)(YB.d, {
        showing: GB,
        globallyUniqueKey: "clientGameMenu",
        children: null === JB || void 0 === JB ? void 0 : JB.content
      })
    }
    const lB = new Map,
      pB = new Set;

    function qB(BB, OB) {
      OB ? lB.set(BB, OB) : lB.delete(BB);
      for (const GB of pB) GB()
    }

    function ZB(BB) {
      let {
        placement: OB = "bottom"
      } = BB;
      const GB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = GB.current;
        return qB(OB, BB), () => {
          lB.get(OB) === BB && qB(OB, null)
        }
      }), [OB]), (0, MB.jsx)("div", {
        ref: GB,
        id: `clientGameHud-${OB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: OB,
        placement: GB = "bottom"
      } = BB;
      const [YB, DB] = (0, yB.useState)((() => {
        var BB;
        return null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null
      }));
      return (0, yB.useEffect)((() => {
        const BB = () => {
          var BB;
          DB(null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null)
        };
        return pB.add(BB), BB(), () => {
          pB.delete(BB)
        }
      }), [GB]), YB ? (0, JB.createPortal)(OB, YB) : null
    }
  },
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  37367: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      i: () => oB,
      k: () => jB,
      n: () => yB
    });
    var YB = GB(56),
      DB = GB(3528);
    const QB = 8,
      oB = "InGameHeaderContainer",
      jB = "TopRightElements";

    function yB(BB) {
      const [OB] = (0, DB.e)(), [GB, yB] = (0, YB.useState)(!1);
      return (0, YB.useLayoutEffect)((() => {
        if (!BB) return;
        const OB = document.querySelector(`.${oB}`),
          GB = document.querySelector(`.${jB}`),
          YB = () => {
            const YB = BB.getBoundingClientRect(),
              DB = OB ? OB.getBoundingClientRect().right : 0,
              oB = GB ? GB.getBoundingClientRect().left : window.innerWidth,
              jB = YB.left < DB + QB,
              JB = YB.right > oB - QB;
            yB(jB || JB)
          };
        YB();
        const DB = new ResizeObserver(YB);
        return DB.observe(BB), OB && DB.observe(OB), GB && DB.observe(GB), () => {
          DB.disconnect()
        }
      }), [BB, OB]), GB
    }
  },
  40167: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      i: () => DB,
      k: () => QB
    });
    var YB = GB(56);

    function DB(BB) {
      return jB(BB, yB)
    }

    function QB(BB) {
      return jB(BB, JB)
    }

    function oB(BB) {
      return `${Math.floor(BB/60)}:${String(BB%60).padStart(2,"0")}`
    }

    function jB(BB, OB) {
      const [, GB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        if (0 === BB) return;
        const YB = window.setInterval((() => {
          const YB = OB(BB);
          GB((OB => (null === OB || void 0 === OB ? void 0 : OB.endsAt) === BB && OB.value === YB ? OB : {
            endsAt: BB,
            value: YB
          }))
        }), 250);
        return () => {
          window.clearInterval(YB)
        }
      }), [BB, OB]), OB(BB)
    }

    function yB(BB) {
      return (BB - performance.now()) / 1e3
    }

    function JB(BB) {
      return Math.max(0, Math.ceil(yB(BB)))
    }
  },
  37361: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    const YB = [{
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

    function DB(BB, OB, GB) {
      const DB = Math.abs(BB - OB),
        QB = Date.now() - GB;
      for (const oB of YB)
        if (BB < oB.maxDist) return DB >= oB.hardUpdateDist || QB > oB.timeBetweenSoftChecks && DB >= oB.softUpdateDist;
      return !1
    }
  },
  9391: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = null;
    const DB = function(BB) {
        const OB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return YB = OB, () => {
          YB === OB && (YB = null)
        }
      },
      QB = () => {
        var BB;
        return null !== (BB = YB) && void 0 !== BB && BB.canCycle() ? YB.cycle : null
      }
  },
  39205: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      var YB;
      const {
        width: DB,
        height: QB
      } = GB, oB = null !== (YB = BB.text) && void 0 !== YB ? YB : BB, jB = (oB.x / 100 - .5) * DB, yB = (oB.y / 100 - .5) * QB, JB = DB / 2 - OB.x;
      if (null !== BB.text && Math.abs(jB) <= JB && yB >= OB.top - QB / 2 && yB <= QB / 2 - OB.bottom) return {
        x: oB.x,
        y: oB.y
      };
      const MB = Math.min(0 === jB ? 1 / 0 : JB / Math.abs(jB), yB > 0 ? (QB / 2 - OB.bottom) / yB : yB < 0 ? (OB.top - QB / 2) / yB : 1 / 0);
      return !Number.isFinite(MB) || MB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + jB * MB / DB * 100,
        y: 50 + yB * MB / QB * 100
      }
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  37270: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => pB,
      G: () => RB,
      e: () => QB,
      i: () => qB,
      l: () => ZB,
      m: () => jB,
      q: () => zB,
      u: () => NB,
      y: () => PB,
      z: () => WB
    });
    var YB = GB(16),
      DB = GB(25);
    const QB = "clientGameInventoryButtonsChanged",
      oB = new Map;

    function jB() {
      return [...oB.values()].sort(((BB, OB) => {
        var GB, YB;
        return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
      }))
    }
    let yB = null;

    function JB(BB) {
      yB = BB
    }
    let MB = !1;

    function PB(BB) {
      MB = !0;
      try {
        BB.onClick()
      } finally {
        MB = !1
      }
      BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
    }

    function zB() {
      return MB
    }

    function lB() {
      return jB().filter((BB => BB.panel && !BB.disabled))
    }

    function pB(BB) {
      const OB = lB(),
        GB = OB.findIndex((BB => BB.id === yB));
      return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
    }

    function qB() {
      return null !== yB && lB().length > 1
    }

    function ZB() {
      JB(null)
    }

    function NB() {
      "inventory" !== YB.c.get("openInGameMenuName") && JB(null)
    }

    function RB() {
      const BB = yB;
      return JB(null), BB
    }

    function WB(BB) {
      return oB.set(BB.id, BB), DB.o.tM(QB, jB(), !0), () => {
        oB.get(BB.id) === BB && (oB.delete(BB.id), DB.o.tM(QB, jB()))
      }
    }
  },
  37267: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      f: () => RB,
      g: () => ZB,
      i: () => NB,
      m: () => zB,
      n: () => JB,
      o: () => qB,
      r: () => lB,
      s: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(37270);
    const jB = "clientGameUiChanged";
    let yB = null;

    function JB() {
      return yB
    }

    function MB(BB, OB) {
      const GB = {
        content: BB,
        menu: OB
      };
      return yB = GB, DB.o.tM(jB, yB, !0), () => {
        yB === GB && (yB = null, pB = !1, ZB(), DB.o.tM(jB, null))
      }
    }
    let PB = null;

    function zB() {
      return PB
    }

    function lB(BB) {
      return PB = BB, () => {
        PB === BB && (PB = null)
      }
    }
    let pB = !1;

    function qB() {
      const BB = YB.c.get("openInGameMenuName");
      "clientGame" !== BB && (pB = "inventory" === BB), (0, oB.q)() || (0, oB.l)(), (0, QB.p)(QB.b), YB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ZB() {
      WB(!1)
    }

    function NB() {
      WB(pB)
    }

    function RB() {
      pB && WB(!1)
    }

    function WB(BB) {
      "clientGame" === YB.c.get("openInGameMenuName") && YB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, oB.l)(), pB = !1
    }
  },
  40172: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB
    });
    var YB = GB(37361),
      DB = GB(1175),
      QB = GB(1253),
      oB = GB(39154),
      jB = GB(39205);
    class yB {
      constructor(BB, OB) {
        var GB;
        this.classes = BB, this.distanceKey = OB, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Vp = !1, this.vN = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.vN), null === (GB = window.visualViewport) || void 0 === GB || GB.addEventListener("resize", this.vN)
      }
      bindMarker(BB) {
        const OB = this.refs.get(BB);
        if (OB) return OB;
        const GB = OB => {
          var YB;
          null === (YB = this.markers.get(BB)) || void 0 === YB || YB.stopObserving(), this.markers.delete(BB), OB && !this.Vp ? (this.markers.set(BB, this.mount(OB)), this.refs.set(BB, GB)) : this.refs.delete(BB)
        };
        return this.refs.set(BB, GB), GB
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(BB) {
        this.render = BB
      }
      update(BB, OB, GB, YB, DB) {
        const QB = this.markers.get(BB);
        QB && (QB.target ??= [0, 0, 0], QB.target[0] = OB, QB.target[1] = GB, QB.target[2] = YB, this.place(QB), this.oO(QB, DB && Math.hypot(OB - DB[0], GB - DB[1], YB - DB[2])))
      }
      dispose() {
        var BB;
        this.Vp = !0, window.removeEventListener("resize", this.vN), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", this.vN);
        for (const OB of this.markers.values()) OB.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(BB) {
        const {
          render: OB,
          viewport: GB
        } = this;
        if (!OB || !BB.target) return;
        const YB = (50 - OB.screenBandPct.y) / 100 * GB.height,
          DB = {
            x: BB.halfSize.width + 8,
            top: BB.halfSize.height + 8,
            bottom: BB.halfSize.height + BB.labelsBelow + YB
          },
          QB = OB.projectWorldPosToViewport(BB.target),
          yB = null !== QB && void 0 !== QB ? QB : OB.projectWorldPosToScreenPos(BB.target),
          JB = (0, jB.b)({
            x: yB.x,
            y: yB.y,
            text: QB
          }, DB, GB);
        (0, oB.d)(BB.root, Math.round(100 * JB.x) / 100, Math.round(100 * JB.y) / 100)
      }
      oO(BB, OB) {
        if (null === OB) return void(null !== BB.metres && (BB.metres = null, BB.distance.textContent = ""));
        const GB = Date.now();
        (null === BB.metres || (0, YB.b)(OB, BB.metres, BB.metresShownAt)) && (BB.metres = Math.round(OB), BB.metresShownAt = GB, BB.distance.textContent = (0, DB.C)(QB.e.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(BB.metres)
        }))
      }
      mount(BB) {
        const OB = {
            root: BB,
            distance: BB.querySelector(`.${this.classes.distance}`),
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
          GB = BB.querySelector(`.${this.classes.labels}`),
          YB = new ResizeObserver((() => {
            OB.halfSize = {
              width: Math.max(BB.offsetWidth, GB.offsetWidth) / 2,
              height: BB.offsetHeight / 2
            }, OB.labelsBelow = GB.offsetTop + GB.offsetHeight - BB.offsetHeight, this.place(OB)
          }));
        return YB.observe(BB, {
          box: "border-box"
        }), YB.observe(GB, {
          box: "border-box"
        }), OB.stopObserving = () => {
          YB.disconnect()
        }, OB
      }
    }
  },
  40161: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => lO
    });
    const YB = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var DB = GB(56),
      QB = GB(37267),
      oB = GB(37723),
      jB = GB(37288),
      yB = GB(1822),
      JB = GB(25);
    const MB = {
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
    const PB = 32;

    function zB(BB, OB, GB, YB) {
      return {
        tag: "line",
        attrs: {
          x1: BB,
          y1: OB,
          x2: GB,
          y2: YB,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function lB(BB) {
      return {
        tag: "circle",
        attrs: {
          cx: PB,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PB,
          r: BB,
          class: "Fill"
        }
      }
    }

    function pB(BB, OB) {
      return {
        tag: "path",
        attrs: {
          d: BB,
          "stroke-width": OB
        }
      }
    }

    function qB(BB, OB, GB) {
      return {
        tag: "circle",
        attrs: {
          cx: PB,
          cy: PB,
          r: BB,
          "stroke-width": OB,
          class: GB
        }
      }
    }

    function ZB(BB, OB, GB) {
      return {
        tag: "text",
        attrs: {
          x: BB,
          y: OB,
          class: "Fill Label"
        },
        text: GB
      }
    }
    const NB = {
      pistol: BB => [zB(PB, PB - BB - 5, PB, PB - BB), zB(PB - BB - 5, PB, PB - BB, PB), zB(PB + BB, PB, PB + BB + 5, PB), lB(1.4)],
      rifle: BB => [zB(PB, PB - BB - 8, PB, PB - BB), zB(PB, PB + BB, PB, PB + BB + 8), zB(PB - BB - 8, PB, PB - BB, PB), zB(PB + BB, PB, PB + BB + 8, PB), lB(1)],
      smg: BB => {
        const OB = Math.PI / 2,
          GB = [];
        for (let oB = 0; oB < 4; oB++) GB.push((DB = oB * OB + .35, QB = (oB + 1) * OB - .35, pB(`M${PB+(YB=6+BB)*Math.cos(DB)} ${PB+YB*Math.sin(DB)} A${YB} ${YB} 0 0 1 ${PB+YB*Math.cos(QB)} ${PB+YB*Math.sin(QB)}`, 2)));
        var YB, DB, QB;
        return [...GB, lB(1.4)]
      },
      shotgun: BB => [qB(BB, 3, "Ring Outline"), qB(BB, 1.5, "Ring")],
      marksman: BB => [pB(`M${26-BB/2} ${39+BB/2} L32 33 L${38+BB/2} ${39+BB/2}`, 2), zB(14 - BB, PB, 24 - BB, PB, 1.5), zB(40 + BB, PB, 50 + BB, PB, 1.5), zB(14 - BB, 30, 14 - BB, 34, 1.5), zB(50 + BB, 30, 50 + BB, 34, 1.5)],
      machineGun: BB => {
        const OB = 10 + BB,
          GB = [];
        for (const [YB, DB] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) GB.push(pB(`M${PB+YB*OB} ${PB+DB*(OB-5)} L${PB+YB*OB} ${PB+DB*OB} L${PB+YB*(OB-5)} ${PB+DB*OB}`, 2));
        return [...GB, zB(PB, 28, PB, 36, 1.5), zB(28, PB, 36, PB, 1.5)]
      },
      launcher: () => [zB(14, 30, 50, 30, 1.5), zB(PB, 24, PB, 52, 1.5), zB(28, 38, 36, 38, 1.5), zB(29, 44, 35, 44, 1.5), zB(30, 50, 34, 50, 1.5), ZB(38, 40, "100"), ZB(37, 46, "200"), lB(1.4, 30)],
      melee: () => [pB("M32 26 L38 32 L32 38 L26 32 Z", 1.5), lB(1.2)],
      throwable: () => [lB(1.6)]
    };

    function RB(BB) {
      let {
        tag: OB,
        attrs: GB,
        text: YB
      } = BB, DB = `<${OB}`;
      for (const [QB, oB] of Object.entries(GB)) DB += ` ${QB}="${oB}"`;
      return void 0 === YB ? `${DB}/>` : `${DB}>${YB}</${OB}>`
    }
    class WB {
      constructor(BB, OB) {
        this.api = BB, this.localPlayerId = OB, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = BB => {
          this.element = BB, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, BB && !this.enabled && (BB.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, yB.getRemInPx)()))
        }, this.tokens = [JB.o.subscribe("aimingOverlay", (BB => {
          this.sniperOverlay = "sniper" === BB
        })), JB.o.subscribe("mouseState", (BB => {
          let {
            isDown: OB
          } = BB;
          this.mouseDown = OB
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Zk(BB) {
        BB !== this.enabled && (this.enabled = BB, this.drawnVisible = null, BB || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(BB, OB) {
        var GB, YB;
        if (!this.enabled) return;
        const {
          api: DB
        } = this, QB = DB.isAlive(this.localPlayerId) && null !== (GB = null === (YB = DB.MYB(this.localPlayerId)) || void 0 === YB ? void 0 : YB.name) && void 0 !== GB ? GB : null, oB = (jB = QB) && MB[jB] || null;
        var jB;
        if (this.setOwnsCrosshair(null !== oB), !this.element) return;
        const yB = DB.getHeldGunInaccuracy(),
          JB = null !== yB,
          PB = null !== oB && !this.sniperOverlay && DB.isCrosshairShown();
        if (PB !== this.drawnVisible && (this.drawnVisible = PB, this.element.style.display = PB ? "block" : "none"), !PB) return;
        const zB = JB ? function(BB) {
            return "launcher" === BB || "melee" === BB || "throwable" === BB ? "none" : "shotgun" === BB ? "cone" : "offset"
          }(oB) : "none",
          lB = null !== yB && void 0 !== yB ? yB : 0;
        "cone" === zB ? this.drawCone(oB, this.coneRadiusVh(lB, OB) * this.gapPerVh, BB) : (this.coneDrawn = !1, this.draw(oB, "none" === zB ? 2 : this.offsetGap(lB)));
        const pB = !JB && this.mouseDown;
        pB !== this.drawnPressed && (this.drawnPressed = pB, this.element.classList.toggle("Pressed", pB))
      }
      dispose() {
        for (const BB of this.tokens) JB.o.unsubscribe(BB);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(BB, OB) {
        var GB, YB;
        BB !== this.drawnFamily ? (this.drawnFamily = BB, this.drawnGap = OB, this.element.innerHTML = function(BB, OB) {
          return `<svg viewBox="0 0 64 64">${NB[BB](OB).map(RB).join("")}</svg>`
        }(BB, OB), this.shapes = Array.from(null !== (GB = null === (YB = this.element.firstElementChild) || void 0 === YB ? void 0 : YB.children) && void 0 !== GB ? GB : [])) : OB !== this.drawnGap && (this.drawnGap = OB, function(BB, OB, GB) {
          const YB = NB[OB](GB);
          for (let DB = 0; DB < YB.length; DB++)
            for (const [OB, GB] of Object.entries(YB[DB].attrs)) {
              const YB = String(GB);
              BB[DB].getAttribute(OB) !== YB && BB[DB].setAttribute(OB, YB)
            }
        }(this.shapes, BB, OB))
      }
      drawCone(BB, OB, GB) {
        BB === this.drawnFamily && this.coneDrawn ? this.shownRadius += (OB - this.shownRadius) * (1 - Math.exp(-GB / 80)) : this.shownRadius = OB, this.coneDrawn = !0, this.draw(BB, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(BB, OB) {
        if (!(OB > 0)) return 1;
        const GB = BB * oB.i / 2;
        return Math.max(50 * Math.tan(GB) / OB, 1)
      }
      offsetGap(BB) {
        const OB = 2 + ((0, jB.f)(BB) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * OB) / 2)
      }
      setOwnsCrosshair(BB) {
        BB !== this.ownsCrosshair && (this.ownsCrosshair = BB, document.body.classList.toggle("FrontlineCustomCrosshair", BB))
      }
    }
    const AB = "FrontlineCustomDamage",
      VB = .45,
      SB = .2;
    class nB {
      constructor(BB, OB) {
        this.api = BB, this.localPlayerId = OB, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.xG = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = BB => {
          var OB, GB;
          this.clearHits(), this.root = BB, this.lowLayer = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageLow")) && void 0 !== OB ? OB : null, this.arcLayer = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageArcs")) && void 0 !== GB ? GB : null, this.showRoot(), this.drawLow()
        }, this.token = JB.o.subscribe("damagedByOtherPlayer", (BB => {
          let {
            direction: OB,
            vG: GB
          } = BB;
          this.onHurt(OB, GB)
        })), this.syncHealth(), document.body.classList.add(AB)
      }
      Zk(BB) {
        BB !== this.enabled && (this.enabled = BB, document.body.classList.toggle(AB, BB), BB || this.clearHits(), this.showRoot())
      }
      frame(BB) {
        this.syncHealth(), this.cameraHeading = BB;
        for (const OB of this.arcs) this.drawArcAngle(OB)
      }
      dispose() {
        JB.o.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(AB)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const BB = this.api.getClientOption(this.localPlayerId, "_health"),
          OB = this.api.getClientOption(this.localPlayerId, "_shield"),
          GB = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(BB, this.readHealth) && Object.is(OB, this.readShield) && Object.is(GB, this.readMaxHealth)) return;
        if (this.readHealth = BB, this.readShield = OB, this.readMaxHealth = GB, null === BB || void 0 === BB || !GB) return this.lastHealthPool = null, this.maxHealth = null, this.xG = 1, this.dead = !1, void this.drawLow();
        const YB = BB + (null !== OB && void 0 !== OB ? OB : 0);
        if (null !== this.lastHealthPool && YB < this.lastHealthPool) {
          const BB = performance.now(),
            OB = (this.lastHealthPool - YB) / GB;
          this.lastDrop = BB - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + OB,
            at: this.lastDrop.at
          } : {
            frac: OB,
            at: BB
          }
        }
        this.dead = BB <= 0, this.dead && this.clearHits(), this.lastHealthPool = YB, this.maxHealth = GB, this.xG = BB > 0 ? BB / GB : 1, this.drawLow()
      }
      onHurt(BB, OB) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const GB = Math.min(1, this.takeDamageFrac(OB) / .3);
        null !== BB && this.showArc(BB, GB), this.flashEdge(null === BB ? null : BB - this.cameraHeading, .4 + .6 * GB)
      }
      takeDamageFrac(BB) {
        if (void 0 !== BB && this.maxHealth) return BB / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: OB
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, OB
      }
      drawLow() {
        if (!this.lowLayer) return;
        const BB = fB((VB - this.xG) / .25),
          OB = fB((SB - this.xG) / .15000000000000002),
          GB = this.xG < VB;
        this.lowLayer.classList.toggle("Active", GB), this.lowLayer.classList.toggle("Critical", this.xG < SB), this.lowLayer.style.opacity = String(GB ? .55 + .3 * BB + .15 * OB : 0)
      }
      showArc(BB, OB) {
        var GB, YB;
        if (!this.arcLayer) return;
        let DB = this.arcs.find((OB => UB(OB.direction, BB) < .6));
        if (!DB) {
          const OB = document.createElement("div");
          OB.className = "FrontlineDamageArc", OB.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(OB), DB = {
            element: OB,
            direction: BB,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(DB)
        }
        DB.direction = BB, this.drawArcAngle(DB);
        const QB = DB.fade ? Number(getComputedStyle(DB.element).opacity) : 0;
        null === (GB = DB.fade) || void 0 === GB || GB.cancel(), null === (YB = DB.pop) || void 0 === YB || YB.cancel(), DB.element.style.opacity = "1";
        const oB = DB.element.animate([{
          opacity: QB
        }, {
          opacity: 1
        }], 144);
        DB.fade = oB, DB.pop = DB.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * OB
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const jB = DB;
        oB.onfinish = () => {
          if (jB.fade !== oB) return;
          const BB = jB.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          BB.startTime = oB.startTime, jB.fade = BB, BB.onfinish = () => {
            jB.fade === BB && (jB.element.remove(), kB(this.arcs, jB))
          }
        }
      }
      drawArcAngle(BB) {
        const OB = BB.direction - this.cameraHeading;
        (null === BB.drawnAngle || Math.abs(OB - BB.drawnAngle) > .005) && (BB.drawnAngle = OB, BB.element.style.rotate = `${OB}rad`)
      }
      flashEdge(BB, OB) {
        var GB, YB, DB;
        if (!this.root) return;
        let QB = this.flashes.find((OB => null === OB.angle || null === BB ? OB.angle === BB : UB(OB.angle, BB) < .5));
        if (!QB) {
          const OB = document.createElement("div");
          OB.className = "FrontlineDamageFlash";
          const GB = OB.appendChild(document.createElement("div"));
          GB.className = "FrontlineDamageFlashGlow", this.root.insertBefore(OB, this.arcLayer), QB = {
            element: OB,
            glow: GB,
            angle: BB,
            level: 0,
            animation: null
          }, this.flashes.push(QB)
        }
        const oB = null === (GB = QB.animation) || void 0 === GB || null === (YB = GB.effect) || void 0 === YB ? void 0 : YB.getComputedTiming().progress,
          jB = null === oB || void 0 === oB ? 0 : QB.level * (1 - oB);
        QB.level = Math.min(1, Math.max(OB, jB + .6 * OB)), QB.angle = BB;
        const {
          x: yB,
          y: JB,
          rx: MB,
          ry: PB
        } = function(BB, OB) {
          const GB = window.innerWidth,
            YB = window.innerHeight;
          if (null === BB) return {
            x: GB / 2,
            y: YB / 2,
            rx: 0,
            ry: 0
          };
          const DB = Math.sin(BB),
            QB = -Math.cos(BB),
            oB = GB / 2 / Math.max(1e-6, Math.abs(DB)),
            jB = YB / 2 / Math.max(1e-6, Math.abs(QB)),
            yB = Math.min(oB, jB),
            JB = Math.round(GB / 2 + DB * yB),
            MB = Math.round(YB / 2 + QB * yB),
            PB = YB / 100 * (.85 + .25 * OB),
            zB = oB <= jB,
            lB = Math.round((zB ? 30 : 74) * PB),
            pB = Math.round((zB ? 58 : 26) * PB);
          return {
            x: JB,
            y: MB,
            rx: lB,
            ry: pB
          }
        }(BB, QB.level), {
          style: zB
        } = QB.glow;
        QB.glow.classList.toggle("Everywhere", null === BB), zB.setProperty("--glowX", `${yB}px`), zB.setProperty("--glowY", `${JB}px`), zB.setProperty("--glowRx", `${MB}px`), zB.setProperty("--glowRy", `${PB}px`), QB.element.style.transformOrigin = `${yB}px ${JB}px`, null === (DB = QB.animation) || void 0 === DB || DB.cancel();
        const lB = QB.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: QB.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * QB.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * QB.level
        });
        QB.animation = lB;
        const pB = QB;
        lB.onfinish = () => {
          pB.animation === lB && (pB.element.remove(), kB(this.flashes, pB))
        }
      }
      clearHits() {
        for (const YB of this.arcs) {
          var BB, OB;
          null === (BB = YB.fade) || void 0 === BB || BB.cancel(), YB.fade = null, null === (OB = YB.pop) || void 0 === OB || OB.cancel(), YB.element.remove()
        }
        this.arcs.length = 0;
        for (const YB of this.flashes) {
          var GB;
          null === (GB = YB.animation) || void 0 === GB || GB.cancel(), YB.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function UB(BB, OB) {
      return Math.abs(Math.atan2(Math.sin(BB - OB), Math.cos(BB - OB)))
    }

    function fB(BB) {
      return Math.max(0, Math.min(1, BB))
    }

    function kB(BB, OB) {
      const GB = BB.indexOf(OB); - 1 !== GB && BB.splice(GB, 1)
    }
    var dB = GB(1090),
      KB = GB.n(dB),
      uB = GB(37263),
      mB = GB(37367),
      IB = GB(1175),
      FB = GB(1480),
      iB = GB(40167);
    const LB = "frontlineHudChanged",
      gB = "frontlineScoreboardChanged";
    class rB {
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
      nP(BB) {
        this.wire = BB, JB.o.tM(LB, BB, !0)
      }
      receiveScoreboard(BB) {
        let OB = "scoreboard" === BB[0] ? performance.now() + BB[5] : 0;
        const GB = this.scoreboard.endsAt;
        0 !== OB && 0 !== GB && Math.abs(OB - GB) < 1e3 && (OB = GB), this.scoreboard = {
          wire: BB,
          endsAt: OB
        }, JB.o.tM(gB, this.scoreboard, !0)
      }
    }
    var XB = GB(1282);
    const wB = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function EB(BB) {
      let {
        className: OB,
        point: GB
      } = BB;
      const [YB, DB, QB, oB, jB, yB] = GB;
      return (0, XB.jsxs)("div", {
        className: KB()(OB, `Owner-${DB||"None"}`, `Leader-${oB||"None"}`, {
          Contested: jB,
          Here: yB
        }),
        children: [(0, XB.jsx)("span", {
          className: "FrontlinePointLetter",
          children: YB
        }), (0, XB.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${QB}%`
          }
        })]
      })
    }
    const cB = (0, DB.memo)((function(BB) {
        let {
          points: OB,
          markers: GB
        } = BB;
        const {
          t: YB
        } = (0, IB.H)();
        return OB ? (0, XB.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: OB.map((BB => {
            const [OB, , , , , , , DB] = BB;
            return (0, XB.jsxs)("div", {
              ref: GB.points.bindMarker(OB),
              className: "FrontlinePointMarker",
              children: [(0, XB.jsx)(EB, {
                className: "FrontlinePointMarkerTile",
                point: BB
              }), (0, XB.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [DB && (0, XB.jsx)("span", {
                  className: KB()("FrontlinePointMarkerHomeTurf", `Team-${DB}`),
                  children: YB("frontlineHud:homeTurf", {
                    team: YB(wB[DB])
                  })
                }), (0, XB.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, OB)
          }))
        }) : null
      })),
      hB = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      aB = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function eB(BB) {
      let {
        hud: OB,
        crosshair: GB,
        damage: YB,
        markers: DB
      } = BB;
      const QB = (0, FB.i)(LB, OB.getWire()),
        oB = (0, FB.i)(gB, OB.getScoreboard());
      return (0, XB.jsxs)(XB.Fragment, {
        children: [(0, XB.jsx)(TB, {
          damage: YB
        }), (0, XB.jsx)(cB, {
          points: "scoreboard" === oB.wire[0] ? oB.wire[6] : null,
          markers: DB
        }), (0, XB.jsx)(CB, {
          view: oB
        }), (0, XB.jsx)("div", {
          className: "FrontlineReticle",
          ref: GB.bindElement
        }), (0, XB.jsx)(uB.e, {
          children: (0, XB.jsx)(bB, {
            wire: QB
          })
        })]
      })
    }
    const TB = (0, DB.memo)((function(BB) {
        let {
          damage: OB
        } = BB;
        return (0, XB.jsxs)("div", {
          className: "FrontlineDamage",
          ref: OB.bindElement,
          children: [(0, XB.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, XB.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, XB.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      bB = (0, DB.memo)((function(BB) {
        let {
          wire: OB
        } = BB;
        const {
          t: GB
        } = (0, IB.H)();
        if ("capture" === OB[0]) {
          const [, BB, YB, DB, QB, oB, jB] = OB, yB = Math.round(DB / 100 * 24);
          return (0, XB.jsxs)("div", {
            className: KB()("FrontlinePlate", `Status-${YB}`, `Leader-${QB||"None"}`),
            children: [(0, XB.jsx)(xB, {}), (0, XB.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, XB.jsx)("span", {
                className: "FrontlineObjective",
                children: BB
              }), (0, XB.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, XB.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: GB("frontlineHud:objective", {
                    point: BB,
                    friendly: oB,
                    enemy: jB
                  })
                }), (0, XB.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: GB(hB[YB])
                })]
              }), (0, XB.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(DB).padStart(3, "0"), (0, XB.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, XB.jsx)(vB, {
              segments: 24,
              lit: yB
            })]
          })
        }
        if ("alert" === OB[0]) {
          const [, BB, YB, DB] = OB;
          return (0, XB.jsxs)("div", {
            className: KB()("FrontlinePlate", "FrontlineAlert", `Tone-${DB}`),
            children: [(0, XB.jsx)(xB, {}), (0, XB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: GB(aB[BB])
            }), (0, XB.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: YB
            })]
          })
        }
        return null
      })),
      CB = (0, DB.memo)((function(BB) {
        let {
          view: OB
        } = BB;
        const {
          t: GB
        } = (0, IB.H)(), YB = (0, DB.useRef)(null), QB = function(BB, OB) {
          const [GB, YB] = (0, DB.useState)(!1);
          return (0, DB.useLayoutEffect)((() => {
            const OB = BB.current;
            if (!OB) return;
            const GB = document.querySelector(`.${mB.i}`),
              DB = document.querySelector(`.${mB.k}`),
              QB = () => {
                var BB;
                const QB = OB.querySelector(".FrontlineTeamTrack"),
                  oB = (0, yB.getRemInPx)(),
                  jB = OB.getBoundingClientRect().width - 2 * (null !== (BB = null === QB || void 0 === QB ? void 0 : QB.getBoundingClientRect().width) && void 0 !== BB ? BB : 0),
                  JB = window.innerWidth / 2,
                  MB = GB ? GB.getBoundingClientRect().right : 0,
                  PB = DB ? DB.getBoundingClientRect().left : window.innerWidth,
                  zB = Math.min(JB - MB, PB - JB) - mB.e - jB / 2,
                  lB = zB < 6 * oB,
                  pB = lB ? (window.innerWidth - jB) / 2 - mB.e : zB;
                OB.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(pB,14*oB)))}px`), YB(lB)
              };
            QB();
            const oB = new ResizeObserver(QB);
            for (const BB of [OB, GB, DB]) BB && oB.observe(BB);
            return window.addEventListener("resize", QB), () => {
              oB.disconnect(), window.removeEventListener("resize", QB)
            }
          }), [BB, OB]), GB
        }(YB, "scoreboard" === OB.wire[0]);
        if ("scoreboard" !== OB.wire[0]) return null;
        const [, oB, jB, JB, MB, , PB] = OB.wire, zB = "Red" === oB ? "Blue" : "Red";
        return (0, XB.jsxs)("div", {
          className: KB()("FrontlineScoreboardContainer", {
            Below: QB
          }),
          children: [(0, XB.jsxs)("div", {
            ref: YB,
            className: "FrontlineScoreboard",
            children: [(0, XB.jsx)(xB, {}), (0, XB.jsx)(HB, {
              team: oB,
              tickets: jB,
              goal: MB,
              side: "Friendly"
            }), (0, XB.jsx)("div", {
              className: "FrontlinePoints",
              children: PB.map((BB => (0, XB.jsx)(EB, {
                className: "FrontlinePoint",
                point: BB
              }, BB[0])))
            }), (0, XB.jsx)(HB, {
              team: zB,
              tickets: JB,
              goal: MB,
              side: "Enemy"
            })]
          }), (0, XB.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, XB.jsx)(sB, {
              endsAt: OB.endsAt
            }), (0, XB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: GB("frontlineHud:ticketGoal", {
                goal: MB
              })
            })]
          })]
        })
      }));

    function HB(BB) {
      let {
        team: OB,
        tickets: GB,
        goal: YB,
        side: DB
      } = BB;
      const {
        t: QB
      } = (0, IB.H)(), oB = String(GB).padStart(3, "0"), jB = oB.search(/[1-9]/), yB = -1 === jB ? oB : oB.slice(0, jB), JB = Math.min(20, Math.floor(GB / YB * 20));
      return (0, XB.jsxs)("div", {
        className: KB()("FrontlineTeamScore", DB, `Team-${OB}`),
        children: [(0, XB.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, XB.jsx)("span", {
            className: "Lead",
            children: yB
          }), -1 !== jB && oB.slice(jB)]
        }), (0, XB.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, XB.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: QB(wB[OB])
          }), (0, XB.jsx)(vB, {
            segments: 20,
            lit: JB
          })]
        })]
      })
    }

    function vB(BB) {
      let {
        segments: OB,
        lit: GB
      } = BB;
      return (0, XB.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: OB
        }, ((BB, OB) => (0, XB.jsx)("i", {
          className: KB()({
            Lit: OB < GB
          })
        }, OB)))
      })
    }

    function sB(BB) {
      let {
        endsAt: OB
      } = BB;
      const GB = (0, iB.k)(OB);
      return (0, XB.jsx)("div", {
        className: KB()("FrontlineClock", {
          Urgent: GB <= 60
        }),
        children: (0, iB.e)(GB)
      })
    }

    function xB() {
      return (0, XB.jsxs)(XB.Fragment, {
        children: [(0, XB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, XB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var tB = GB(40172);
    class BO {
      constructor(BB) {
        this.hud = BB, this.points = new tB.e({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(BB, OB) {
        this.points.setRender(BB);
        const GB = this.hud.getScoreboard().wire;
        if ("scoreboard" === GB[0] && this.points.hasMarkers())
          for (const [YB, , , , , , DB] of GB[6]) DB && this.points.update(YB, DB[0], DB[1] + 2.5, DB[2], OB)
      }
    }
    var OO = GB(6954),
      GO = GB(2898);
    const YO = "frontlineRoundEndChanged";
    class DO {
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
      nP(BB) {
        const OB = "roundEnd" === BB[0] ? performance.now() + BB[5] : 0;
        this.view = {
          wire: BB,
          key: this.view.key + 1,
          endsAt: OB
        }, JB.o.tM(YO, this.view, !0)
      }
    }
    const QO = (0, DB.lazy)((() => (0, GO.e)(Promise.all([GB.e(261), GB.e(222)]).then((() => GB(44896))), (BB => BB.FrontlineMvpLineup)))),
      oO = [4800, 4e3, 3200],
      jO = [1, 0, 2],
      yO = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      JO = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function MO(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, FB.i)(YO, OB.getView()),
        YB = (0, iB.i)(GB.endsAt);
      return "roundEnd" !== GB.wire[0] || 1e3 * YB < -2e3 ? null : (0, XB.jsx)(PO, {
        wire: GB.wire,
        secondsLeft: Math.max(0, Math.ceil(YB))
      }, GB.key)
    }
    const PO = (0, DB.memo)((function(BB) {
      let {
        wire: OB,
        secondsLeft: GB
      } = BB;
      const {
        t: QB
      } = (0, IB.H)(), [, oB, jB, yB, JB, , MB, PB] = OB, zB = (0, DB.useMemo)((() => jO.filter((BB => BB < PB.length))), [PB]), lB = (0, DB.useMemo)((() => zB.map((BB => {
        const [, , , , , OB, GB] = PB[BB];
        return {
          cosmetics: YB.map(((BB, GB) => [BB, OB[GB]])),
          size: 0 === BB ? 1.15 : .85,
          heldGun: {
            name: GB,
            aimed: 0 === BB
          },
          showAfterMs: oO[BB]
        }
      }))), [PB, zB]);
      return (0, XB.jsxs)("div", {
        className: KB()("FrontlineRoundEnd", `Result-${oB}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, XB.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, XB.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, XB.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, XB.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, XB.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (pB = QB(yO[oB]), /\p{Script=Arabic}/u.test(pB) ? [pB] : (0, OO.c)(pB)).map(((BB, OB) => (0, XB.jsx)("span", {
              style: {
                "--letter": OB
              },
              children: BB
            }, OB)))]
          }), (0, XB.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [jB && "victory" === oB && (0, XB.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: QB("frontlineRoundEnd:comeback")
            }), (0, XB.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, XB.jsx)("b", {
                className: "Friendly",
                children: yB
              }), " \u2013 ", (0, XB.jsx)("b", {
                className: "Enemy",
                children: JB
              })]
            })]
          })]
        }), zB.length > 0 && (0, XB.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": zB.length
          },
          children: [(0, XB.jsx)(DB.Suspense, {
            fallback: null,
            children: (0, XB.jsx)(QO, {
              className: "FrontlineRoundEndLineup",
              players: lB
            })
          }), zB.map((BB => (0, XB.jsx)(zO, {
            mvp: PB[BB],
            place: BB
          }, BB)))]
        }), (0, XB.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: QB("frontlineRoundEnd:nextFront", {
            map: MB,
            seconds: String(GB)
          })
        })]
      });
      var pB
    }));

    function zO(BB) {
      let {
        mvp: OB,
        place: GB
      } = BB;
      const {
        t: YB
      } = (0, IB.H)(), [DB, QB, oB, jB, yB] = OB, [JB, MB] = YB(function(BB, OB) {
        return 1 === OB && "damage" !== BB ? `frontlineRoundEnd:${BB}One` : `frontlineRoundEnd:${BB}`
      }(oB, jB), {
        name: "\0",
        count: jB.toLocaleString()
      }).split("\0");
      return (0, XB.jsxs)("div", {
        className: KB()("FrontlineMvpCard", `Place-${GB+1}`, `Team-${QB}`),
        style: {
          "--revealMs": `${oO[GB]}ms`
        },
        children: [(0, XB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, XB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, XB.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: YB(JO[GB])
        }), (0, XB.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [JB, (0, XB.jsx)("span", {
            className: "FrontlineMvpName",
            children: DB
          }), MB]
        }), (0, XB.jsx)("div", {
          className: "FrontlineMvpKit",
          children: yB
        })]
      })
    }
    const lO = function(BB, OB, GB, YB) {
      let {
        localPlayerId: oB
      } = YB;
      const jB = new rB,
        yB = new DO;
      let JB = null,
        MB = null,
        PB = null,
        zB = null,
        lB = null,
        pB = [!1, !1];
      const qB = () => {
        var BB, OB;
        const [GB, YB] = pB;
        null === (BB = MB) || void 0 === BB || BB.Zk(!GB), null === (OB = PB) || void 0 === OB || OB.Zk(!YB)
      };
      return {
        onCreate: BB => {
          JB = BB, MB = new WB(BB, oB), PB = new nB(BB, oB), zB = new BO(jB), qB(), lB = (0, QB.s)((0, DB.createElement)(DB.Fragment, null, (0, DB.createElement)(eB, {
            hud: jB,
            crosshair: MB,
            damage: PB,
            markers: zB
          }), (0, DB.createElement)(MO, {
            controller: yB
          })))
        },
        onClose: () => {
          var BB, OB, GB, YB;
          null === (BB = lB) || void 0 === BB || BB(), null === (OB = MB) || void 0 === OB || OB.dispose(), MB = null, null === (GB = PB) || void 0 === GB || GB.dispose(), PB = null, null === (YB = zB) || void 0 === YB || YB.points.dispose(), zB = null, JB = null
        },
        onAfterRender: (BB, OB) => {
          var GB, YB, DB, QB, jB;
          null === (GB = MB) || void 0 === GB || GB.frame(BB, OB.tanHalfFovY), null === (YB = PB) || void 0 === YB || YB.frame(OB.cameraHeading), null === (DB = zB) || void 0 === DB || DB.frame(OB, null !== (QB = null === (jB = JB) || void 0 === jB ? void 0 : jB.getPositionView(oB)) && void 0 !== QB ? QB : null)
        },
        onReceivedMessageFromServer: (BB, OB) => {
          "frontlineHud" === BB ? jB.nP(OB) : "frontlineScoreboard" === BB ? jB.receiveScoreboard(OB) : "frontlineRoundEnd" === BB ? yB.nP(OB) : "frontlinePrefs" === BB && (pB = OB, qB())
        }
      }
    }
  },
  6954: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    const YB = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function DB(BB) {
      return null === YB ? Array.from(BB) : Array.from(YB.segment(BB), (BB => {
        let {
          segment: OB
        } = BB;
        return OB
      }))
    }
  },
  39154: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => QB
    });
    const YB = new WeakMap;

    function DB(BB) {
      let OB = YB.get(BB);
      return OB || (OB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, YB.set(BB, OB)), OB
    }

    function QB(BB, OB) {
      const GB = DB(BB);
      GB.hidden !== OB && (GB.hidden = OB, BB.hidden = OB)
    }

    function oB(BB, OB, GB) {
      const YB = DB(BB);
      YB.x === OB && YB.y === GB || (YB.x = OB, YB.y = GB, BB.style.translate = `${OB}vw ${GB}vh`)
    }
  },
  37753: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = {
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
for (const BB in modules) Object.freeze(modules[BB]);