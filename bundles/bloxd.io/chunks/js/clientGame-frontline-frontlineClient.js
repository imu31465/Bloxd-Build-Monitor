export const id = 18;
export const ids = [18];
export const modules = {
  37898: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      d: () => Bb,
      e: () => Ub,
      g: () => Ob
    });
    var eb = Mb(35320),
      Hb = Mb(3531),
      pb = Mb(3538),
      Vb = Mb(10064),
      gb = Mb(1611),
      lb = Mb(64),
      Lb = Mb(81),
      Ib = Mb(1364);

    function Ob() {
      var bb;
      return (0, gb.h)(Hb.e, (0, Hb.x)()), (0, Ib.jsx)(Ib.Fragment, {
        children: null === (bb = (0, Hb.x)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Ub(bb) {
      var wb;
      let {
        show: Mb
      } = bb;
      (0, gb.h)(Hb.e, (0, Hb.x)());
      const Lb = null === (wb = (0, Hb.x)()) || void 0 === wb ? void 0 : wb.menu;
      return (0, lb.useEffect)((() => {
        var bb;
        Mb || (null === Lb || void 0 === Lb || null === (bb = Lb.onClose) || void 0 === bb || bb.call(Lb), (0, pb.l)())
      }), [Mb, Lb]), (0, lb.useEffect)((() => Mb ? (0, Vb.g)(pb.u, pb.g) : void 0), [Mb]), (0, Ib.jsx)(eb.c, {
        showing: Mb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Lb || void 0 === Lb ? void 0 : Lb.content
      })
    }
    const tb = new Map,
      Cb = new Set;

    function Eb(bb, wb) {
      wb ? tb.set(bb, wb) : tb.delete(bb);
      for (const Mb of Cb) Mb()
    }

    function Fb(bb) {
      let {
        placement: wb = "bottom"
      } = bb;
      const Mb = (0, lb.useRef)(null);
      return (0, lb.useLayoutEffect)((() => {
        const bb = Mb.current;
        return Eb(wb, bb), () => {
          tb.get(wb) === bb && Eb(wb, null)
        }
      }), [wb]), (0, Ib.jsx)("div", {
        ref: Mb,
        id: `clientGameHud-${wb}`,
        style: {
          display: "contents"
        }
      })
    }

    function Bb(bb) {
      let {
        children: wb,
        placement: Mb = "bottom"
      } = bb;
      const [eb, Hb] = (0, lb.useState)((() => {
        var bb;
        return null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null
      }));
      return (0, lb.useEffect)((() => {
        const bb = () => {
          var bb;
          Hb(null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null)
        };
        return Cb.add(bb), bb(), () => {
          Cb.delete(bb)
        }
      }), [Mb]), eb ? (0, Lb.createPortal)(wb, eb) : null
    }
  },
  35320: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(5387),
      Hb = Mb(5395);

    function pb(bb) {
      let {
        children: wb,
        showing: Mb,
        globallyUniqueKey: pb,
        alwaysMountChildren: Vb = !1,
        doGameplayStartStopOnShow: gb = !0,
        keepsMovement: lb = !1
      } = bb;
      return (0, Hb.d)(!0, Mb, pb, lb), (0, eb.b)(gb, Mb), Mb || Vb ? wb : null
    }
  },
  37956: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      i: () => lb,
      k: () => Lb,
      o: () => Ib,
      s: () => Cb
    });
    var eb = Mb(64),
      Hb = Mb(4472),
      pb = Mb(3642),
      Vb = Mb(29);
    const gb = 8,
      lb = "InGameHeaderContainer",
      Lb = "TopRightElements";

    function Ib(bb) {
      const [wb] = (0, Hb.c)(), [Mb, pb] = (0, eb.useState)(!1);
      return (0, eb.useLayoutEffect)((() => {
        if (!bb) return;
        const wb = document.querySelector(`.${lb}`),
          Mb = document.querySelector(`.${Lb}`),
          eb = () => {
            const eb = bb.getBoundingClientRect(),
              Hb = wb ? wb.getBoundingClientRect().right : 0,
              Vb = Mb ? Mb.getBoundingClientRect().left : window.innerWidth,
              lb = eb.left < Hb + gb,
              Lb = eb.right > Vb - gb;
            pb(lb || Lb)
          };
        eb();
        const Hb = new ResizeObserver(eb);
        return Hb.observe(bb), wb && Hb.observe(wb), Mb && Hb.observe(Mb), () => {
          Hb.disconnect()
        }
      }), [bb, wb]), Mb
    }
    const Ob = `.InGameUi .${lb}`,
      Ub = [Ob, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      tb = 1e3;

    function Cb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb,
        Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Hb, lb] = (0, eb.useState)(null);
      return (0, eb.useLayoutEffect)((() => {
        if (!bb) return;
        const eb = new ResizeObserver((() => {
          Lb()
        }));
        eb.observe(bb), wb && wb !== bb && eb.observe(wb);
        let Hb = [];

        function Lb() {
          var pb, Vb, Lb;
          const Ib = bb.getBoundingClientRect(),
            tb = function() {
              const bb = Ub.map((bb => document.querySelector(bb))).filter((bb => null !== bb));
              for (const wb of bb) Hb.includes(wb) || eb.observe(wb);
              for (const wb of Hb) bb.includes(wb) || eb.unobserve(wb);
              return Hb = bb, bb
            }(),
            Cb = tb.filter((bb => {
              const wb = bb.getBoundingClientRect();
              return wb.width > 0 && wb.height > 0 && Ib.left < wb.right + gb && Ib.right > wb.left - gb
            }));
          if (0 === Cb.length && !Mb) return void lb(null);
          const Eb = tb.find((bb => bb.matches(Ob))),
            Fb = Math.max(null !== (pb = null === Eb || void 0 === Eb ? void 0 : Eb.getBoundingClientRect().bottom) && void 0 !== pb ? pb : 0, ...Cb.map((bb => bb.getBoundingClientRect().bottom))),
            Bb = null !== (Vb = null === wb || void 0 === wb || null === (Lb = wb.offsetParent) || void 0 === Lb ? void 0 : Lb.getBoundingClientRect().top) && void 0 !== Vb ? Vb : 0;
          lb(Math.ceil(Fb + gb / 2) - Math.round(Bb))
        }
        const Ib = setInterval(Lb, tb);
        Lb(), window.addEventListener("resize", Lb);
        const Cb = (0, Vb.o)(pb.e, Lb);
        return () => {
          eb.disconnect(), clearInterval(Ib), window.removeEventListener("resize", Lb), Cb()
        }
      }), [bb, wb, Mb]), Hb
    }
  },
  37923: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      e: () => Hb,
      i: () => pb
    });
    var eb = Mb(64);

    function Hb(bb) {
      return gb(bb, lb)
    }

    function pb(bb) {
      return gb(bb, Lb)
    }

    function Vb(bb) {
      return `${Math.floor(bb/60)}:${String(bb%60).padStart(2,"0")}`
    }

    function gb(bb, wb) {
      const [, Mb] = (0, eb.useState)(null);
      return (0, eb.useEffect)((() => {
        if (0 === bb) return;
        const eb = window.setInterval((() => {
          const eb = wb(bb);
          Mb((wb => (null === wb || void 0 === wb ? void 0 : wb.endsAt) === bb && wb.value === eb ? wb : {
            endsAt: bb,
            value: eb
          }))
        }), 250);
        return () => {
          window.clearInterval(eb)
        }
      }), [bb, wb]), wb(bb)
    }

    function lb(bb) {
      return (bb - performance.now()) / 1e3
    }

    function Lb(bb) {
      return Math.max(0, Math.ceil(lb(bb)))
    }
  },
  37952: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    const eb = [{
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

    function Hb(bb, wb, Mb) {
      const Hb = Math.abs(bb - wb),
        pb = Date.now() - Mb;
      for (const Vb of eb)
        if (bb < Vb.maxDist) return Hb >= Vb.hardUpdateDist || pb > Vb.timeBetweenSoftChecks && Hb >= Vb.softUpdateDist;
      return !1
    }
  },
  10064: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Hb
    });
    let eb = null;
    const Hb = function(bb) {
        const wb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return eb = wb, () => {
          eb === wb && (eb = null)
        }
      },
      pb = () => {
        var bb;
        return null !== (bb = eb) && void 0 !== bb && bb.canCycle() ? eb.cycle : null
      }
  },
  39786: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      var eb;
      const {
        width: Hb,
        height: pb
      } = Mb, Vb = null !== (eb = bb.text) && void 0 !== eb ? eb : bb, gb = (Vb.x / 100 - .5) * Hb, lb = (Vb.y / 100 - .5) * pb, Lb = Hb / 2 - wb.x;
      if (null !== bb.text && Math.abs(gb) <= Lb && lb >= wb.top - pb / 2 && lb <= pb / 2 - wb.bottom) return {
        x: Vb.x,
        y: Vb.y
      };
      const Ib = Math.min(0 === gb ? 1 / 0 : Lb / Math.abs(gb), lb > 0 ? (pb / 2 - wb.bottom) / lb : lb < 0 ? (wb.top - pb / 2) / lb : 1 / 0);
      return !Number.isFinite(Ib) || Ib < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + gb * Ib / Hb * 100,
        y: 50 + lb * Ib / pb * 100
      }
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  40831: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    const eb = 1e3;

    function Hb(bb, wb) {
      const Mb = performance.now() + bb;
      return 0 !== wb && Math.abs(Mb - wb) < eb ? wb : Mb
    }
  },
  40837: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb
    });
    var eb = Mb(37952),
      Hb = Mb(1259),
      pb = Mb(1321),
      Vb = Mb(39723),
      gb = Mb(39786);
    class lb {
      constructor(bb, wb) {
        var Mb;
        this.classes = bb, this.distanceKey = wb, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.BC = !1, this.Rm = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Rm), null === (Mb = window.visualViewport) || void 0 === Mb || Mb.addEventListener("resize", this.Rm)
      }
      bindMarker(bb) {
        const wb = this.refs.get(bb);
        if (wb) return wb;
        const Mb = wb => {
          var eb;
          null === (eb = this.markers.get(bb)) || void 0 === eb || eb.stopObserving(), this.markers.delete(bb), wb && !this.BC ? (this.markers.set(bb, this.mount(wb)), this.refs.set(bb, Mb)) : this.refs.delete(bb)
        };
        return this.refs.set(bb, Mb), Mb
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(bb) {
        this.render = bb
      }
      update(bb, wb, Mb, eb, Hb) {
        const pb = this.markers.get(bb);
        pb && (pb.target ??= [0, 0, 0], pb.target[0] = wb, pb.target[1] = Mb, pb.target[2] = eb, this.place(pb), this.ow(pb, Hb && Math.hypot(wb - Hb[0], Mb - Hb[1], eb - Hb[2])))
      }
      dispose() {
        var bb;
        this.BC = !0, window.removeEventListener("resize", this.Rm), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", this.Rm);
        for (const wb of this.markers.values()) wb.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(bb) {
        const {
          render: wb,
          viewport: Mb
        } = this;
        if (!wb || !bb.target) return;
        const eb = (50 - wb.screenBandPct.y) / 100 * Mb.height,
          Hb = {
            x: bb.halfSize.width + 8,
            top: bb.halfSize.height + 8,
            bottom: bb.halfSize.height + bb.labelsBelow + eb
          },
          pb = wb.projectWorldPosToViewport(bb.target),
          lb = null !== pb && void 0 !== pb ? pb : wb.projectWorldPosToScreenPos(bb.target),
          Lb = (0, gb.c)({
            x: lb.x,
            y: lb.y,
            text: pb
          }, Hb, Mb);
        (0, Vb.b)(bb.root, Math.round(100 * Lb.x) / 100, Math.round(100 * Lb.y) / 100)
      }
      ow(bb, wb) {
        if (null === wb) return void(null !== bb.metres && (bb.metres = null, bb.distance.textContent = ""));
        const Mb = Date.now();
        (null === bb.metres || (0, eb.c)(wb, bb.metres, bb.metresShownAt)) && (bb.metres = Math.round(wb), bb.metresShownAt = Mb, bb.distance.textContent = (0, Hb.x)(pb.g.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(bb.metres)
        }))
      }
      mount(bb) {
        const wb = {
            root: bb,
            distance: bb.querySelector(`.${this.classes.distance}`),
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
          Mb = bb.querySelector(`.${this.classes.labels}`),
          eb = new ResizeObserver((() => {
            wb.halfSize = {
              width: Math.max(bb.offsetWidth, Mb.offsetWidth) / 2,
              height: bb.offsetHeight / 2
            }, wb.labelsBelow = Mb.offsetTop + Mb.offsetHeight - bb.offsetHeight, this.place(wb)
          }));
        return eb.observe(bb, {
          box: "border-box"
        }), eb.observe(Mb, {
          box: "border-box"
        }), wb.stopObserving = () => {
          eb.disconnect()
        }, wb
      }
    }
  },
  40819: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Lw
    });
    const eb = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var Hb = Mb(64),
      pb = Mb(3531),
      Vb = Mb(40827),
      gb = Mb(38227),
      lb = Mb(37933),
      Lb = Mb(1965),
      Ib = Mb(29);
    const Ob = {
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
    const Ub = 32;

    function tb(bb, wb, Mb, eb) {
      return {
        tag: "line",
        attrs: {
          x1: bb,
          y1: wb,
          x2: Mb,
          y2: eb,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Cb(bb) {
      return {
        tag: "circle",
        attrs: {
          cx: Ub,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub,
          r: bb,
          class: "Fill"
        }
      }
    }

    function Eb(bb, wb) {
      return {
        tag: "path",
        attrs: {
          d: bb,
          "stroke-width": wb
        }
      }
    }

    function Fb(bb, wb, Mb) {
      return {
        tag: "circle",
        attrs: {
          cx: Ub,
          cy: Ub,
          r: bb,
          "stroke-width": wb,
          class: Mb
        }
      }
    }

    function Bb(bb, wb, Mb) {
      return {
        tag: "text",
        attrs: {
          x: bb,
          y: wb,
          class: "Fill Label"
        },
        text: Mb
      }
    }
    const sb = {
      pistol: bb => [tb(Ub, Ub - bb - 5, Ub, Ub - bb), tb(Ub - bb - 5, Ub, Ub - bb, Ub), tb(Ub + bb, Ub, Ub + bb + 5, Ub), Cb(1.4)],
      rifle: bb => [tb(Ub, Ub - bb - 8, Ub, Ub - bb), tb(Ub, Ub + bb, Ub, Ub + bb + 8), tb(Ub - bb - 8, Ub, Ub - bb, Ub), tb(Ub + bb, Ub, Ub + bb + 8, Ub), Cb(1)],
      smg: bb => {
        const wb = Math.PI / 2,
          Mb = [];
        for (let Vb = 0; Vb < 4; Vb++) Mb.push((Hb = Vb * wb + .35, pb = (Vb + 1) * wb - .35, Eb(`M${Ub+(eb=6+bb)*Math.cos(Hb)} ${Ub+eb*Math.sin(Hb)} A${eb} ${eb} 0 0 1 ${Ub+eb*Math.cos(pb)} ${Ub+eb*Math.sin(pb)}`, 2)));
        var eb, Hb, pb;
        return [...Mb, Cb(1.4)]
      },
      shotgun: bb => [Fb(bb, 3, "Ring Outline"), Fb(bb, 1.5, "Ring")],
      marksman: bb => [Eb(`M${26-bb/2} ${39+bb/2} L32 33 L${38+bb/2} ${39+bb/2}`, 2), tb(14 - bb, Ub, 24 - bb, Ub, 1.5), tb(40 + bb, Ub, 50 + bb, Ub, 1.5), tb(14 - bb, 30, 14 - bb, 34, 1.5), tb(50 + bb, 30, 50 + bb, 34, 1.5)],
      machineGun: bb => {
        const wb = 10 + bb,
          Mb = [];
        for (const [eb, Hb] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Mb.push(Eb(`M${Ub+eb*wb} ${Ub+Hb*(wb-5)} L${Ub+eb*wb} ${Ub+Hb*wb} L${Ub+eb*(wb-5)} ${Ub+Hb*wb}`, 2));
        return [...Mb, tb(Ub, 28, Ub, 36, 1.5), tb(28, Ub, 36, Ub, 1.5)]
      },
      launcher: () => [tb(14, 30, 50, 30, 1.5), tb(Ub, 24, Ub, 52, 1.5), tb(28, 38, 36, 38, 1.5), tb(29, 44, 35, 44, 1.5), tb(30, 50, 34, 50, 1.5), Bb(38, 40, "100"), Bb(37, 46, "200"), Cb(1.4, 30)],
      melee: () => [Eb("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Cb(1.2)],
      throwable: () => [Cb(1.6)]
    };

    function mb(bb) {
      let {
        tag: wb,
        attrs: Mb,
        text: eb
      } = bb, Hb = `<${wb}`;
      for (const [pb, Vb] of Object.entries(Mb)) Hb += ` ${pb}="${Vb}"`;
      return void 0 === eb ? `${Hb}/>` : `${Hb}>${eb}</${wb}>`
    }
    class hb {
      constructor(bb, wb) {
        this.api = bb, this.localPlayerId = wb, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = bb => {
          this.element = bb, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, bb && !this.enabled && (bb.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Lb.getRemInPx)()))
        }, this.tokens = [Ib.k.subscribe("aimingOverlay", (bb => {
          this.sniperOverlay = "sniper" === bb
        })), Ib.k.subscribe("mouseState", (bb => {
          let {
            isDown: wb
          } = bb;
          this.mouseDown = wb
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Bx(bb) {
        bb !== this.enabled && (this.enabled = bb, this.drawnVisible = null, bb || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(bb, wb) {
        var Mb, eb;
        if (!this.enabled) return;
        const {
          api: Hb
        } = this, pb = Hb.isAlive(this.localPlayerId) && null !== (Mb = null === (eb = Hb.Leb(this.localPlayerId)) || void 0 === eb ? void 0 : eb.name) && void 0 !== Mb ? Mb : null, Vb = (gb = pb) && Ob[gb] || null;
        var gb;
        if (this.setOwnsCrosshair(null !== Vb), !this.element) return;
        const lb = Hb.getHeldGunInaccuracy(),
          Lb = null !== lb,
          Ib = null !== Vb && !this.sniperOverlay && Hb.isCrosshairShown();
        if (Ib !== this.drawnVisible && (this.drawnVisible = Ib, this.element.style.display = Ib ? "block" : "none"), !Ib) return;
        const Ub = Lb ? function(bb) {
            return "launcher" === bb || "melee" === bb || "throwable" === bb ? "none" : "shotgun" === bb ? "cone" : "offset"
          }(Vb) : "none",
          tb = null !== lb && void 0 !== lb ? lb : 0;
        "cone" === Ub ? this.drawCone(Vb, this.coneRadiusVh(tb, wb) * this.gapPerVh, bb) : (this.coneDrawn = !1, this.draw(Vb, "none" === Ub ? 2 : this.offsetGap(tb)));
        const Cb = !Lb && this.mouseDown;
        Cb !== this.drawnPressed && (this.drawnPressed = Cb, this.element.classList.toggle("Pressed", Cb))
      }
      dispose() {
        for (const bb of this.tokens) Ib.k.unsubscribe(bb);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(bb, wb) {
        var Mb, eb;
        bb !== this.drawnFamily ? (this.drawnFamily = bb, this.drawnGap = wb, this.element.innerHTML = function(bb, wb) {
          return `<svg viewBox="0 0 64 64">${sb[bb](wb).map(mb).join("")}</svg>`
        }(bb, wb), this.shapes = Array.from(null !== (Mb = null === (eb = this.element.firstElementChild) || void 0 === eb ? void 0 : eb.children) && void 0 !== Mb ? Mb : [])) : wb !== this.drawnGap && (this.drawnGap = wb, function(bb, wb, Mb) {
          const eb = sb[wb](Mb);
          for (let Hb = 0; Hb < eb.length; Hb++)
            for (const [wb, Mb] of Object.entries(eb[Hb].attrs)) {
              const eb = String(Mb);
              bb[Hb].getAttribute(wb) !== eb && bb[Hb].setAttribute(wb, eb)
            }
        }(this.shapes, bb, wb))
      }
      drawCone(bb, wb, Mb) {
        bb === this.drawnFamily && this.coneDrawn ? this.shownRadius += (wb - this.shownRadius) * (1 - Math.exp(-Mb / 80)) : this.shownRadius = wb, this.coneDrawn = !0, this.draw(bb, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(bb, wb) {
        if (!(wb > 0)) return 1;
        const Mb = bb * gb.j / 2;
        return Math.max(50 * Math.tan(Mb) / wb, 1)
      }
      offsetGap(bb) {
        const wb = 2 + ((0, lb.f)(bb) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * wb) / 2)
      }
      setOwnsCrosshair(bb) {
        bb !== this.ownsCrosshair && (this.ownsCrosshair = bb, document.body.classList.toggle("FrontlineCustomCrosshair", bb))
      }
    }
    var zb = Mb(1159),
      Xb = Mb.n(zb),
      xb = Mb(37898),
      jb = Mb(37956),
      Kb = Mb(1259),
      rb = Mb(1611),
      Rb = Mb(37923),
      Db = Mb(40829),
      cb = Mb(40831);
    const Yb = "frontlineHudChanged",
      Zb = "frontlineScoreboardChanged";
    class fb {
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
      EO(bb) {
        this.wire = bb, Ib.k.iI(Yb, bb, !0)
      }
      receiveScoreboard(bb) {
        const wb = "scoreboard" === bb[0] ? (0, cb.b)(bb[5], this.scoreboard.endsAt) : 0;
        this.scoreboard = {
          wire: bb,
          endsAt: wb
        }, Ib.k.iI(Zb, this.scoreboard, !0)
      }
    }
    var Ab = Mb(1364);
    const Wb = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Jb(bb) {
      let {
        className: wb,
        point: Mb
      } = bb;
      const [eb, Hb, pb, Vb, gb, lb] = Mb;
      return (0, Ab.jsxs)("div", {
        className: Xb()(wb, `Owner-${Hb||"None"}`, `Leader-${Vb||"None"}`, {
          Contested: gb,
          Here: lb
        }),
        children: [(0, Ab.jsx)("span", {
          className: "FrontlinePointLetter",
          children: eb
        }), (0, Ab.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${pb}%`
          }
        })]
      })
    }
    const Sb = (0, Hb.memo)((function(bb) {
        let {
          points: wb,
          markers: Mb
        } = bb;
        const {
          t: eb
        } = (0, Kb.C)();
        return wb ? (0, Ab.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: wb.map((bb => {
            const [wb, , , , , , , Hb] = bb;
            return (0, Ab.jsxs)("div", {
              ref: Mb.points.bindMarker(wb),
              className: "FrontlinePointMarker",
              children: [(0, Ab.jsx)(Jb, {
                className: "FrontlinePointMarkerTile",
                point: bb
              }), (0, Ab.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Hb && (0, Ab.jsx)("span", {
                  className: Xb()("FrontlinePointMarkerHomeTurf", `Team-${Hb}`),
                  children: eb("frontlineHud:homeTurf", {
                    team: eb(Wb[Hb])
                  })
                }), (0, Ab.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, wb)
          }))
        }) : null
      })),
      Nb = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      vb = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Qb(bb) {
      let {
        hud: wb,
        crosshair: Mb,
        damage: eb,
        markers: Hb
      } = bb;
      const pb = (0, rb.h)(Yb, wb.getWire()),
        Vb = (0, rb.h)(Zb, wb.getScoreboard());
      return (0, Ab.jsxs)(Ab.Fragment, {
        children: [(0, Ab.jsx)(Db.c, {
          controller: eb
        }), (0, Ab.jsx)(Sb, {
          points: "scoreboard" === Vb.wire[0] ? Vb.wire[6] : null,
          markers: Hb
        }), (0, Ab.jsx)(qb, {
          view: Vb
        }), (0, Ab.jsx)("div", {
          className: "FrontlineReticle",
          ref: Mb.bindElement
        }), (0, Ab.jsx)(xb.d, {
          children: (0, Ab.jsx)(Gb, {
            wire: pb
          })
        })]
      })
    }
    const Gb = (0, Hb.memo)((function(bb) {
        let {
          wire: wb
        } = bb;
        const {
          t: Mb
        } = (0, Kb.C)();
        if ("capture" === wb[0]) {
          const [, bb, eb, Hb, pb, Vb, gb] = wb, lb = Math.round(Hb / 100 * 24);
          return (0, Ab.jsxs)("div", {
            className: Xb()("FrontlinePlate", `Status-${eb}`, `Leader-${pb||"None"}`),
            children: [(0, Ab.jsx)(db, {}), (0, Ab.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Ab.jsx)("span", {
                className: "FrontlineObjective",
                children: bb
              }), (0, Ab.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Ab.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Mb("frontlineHud:objective", {
                    point: bb,
                    friendly: Vb,
                    enemy: gb
                  })
                }), (0, Ab.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Mb(Nb[eb])
                })]
              }), (0, Ab.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Hb).padStart(3, "0"), (0, Ab.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Ab.jsx)(ib, {
              segments: 24,
              lit: lb
            })]
          })
        }
        if ("alert" === wb[0]) {
          const [, bb, eb, Hb] = wb;
          return (0, Ab.jsxs)("div", {
            className: Xb()("FrontlinePlate", "FrontlineAlert", `Tone-${Hb}`),
            children: [(0, Ab.jsx)(db, {}), (0, Ab.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Mb(vb[bb])
            }), (0, Ab.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: eb
            })]
          })
        }
        return null
      })),
      qb = (0, Hb.memo)((function(bb) {
        let {
          view: wb
        } = bb;
        const {
          t: Mb
        } = (0, Kb.C)(), eb = (0, Hb.useRef)(null), pb = function(bb, wb) {
          const [Mb, eb] = (0, Hb.useState)(!1);
          return (0, Hb.useLayoutEffect)((() => {
            const wb = bb.current;
            if (!wb) return;
            const Mb = document.querySelector(`.${jb.i}`),
              Hb = document.querySelector(`.${jb.k}`),
              pb = () => {
                var bb;
                const pb = wb.querySelector(".FrontlineTeamTrack"),
                  Vb = (0, Lb.getRemInPx)(),
                  gb = wb.getBoundingClientRect().width - 2 * (null !== (bb = null === pb || void 0 === pb ? void 0 : pb.getBoundingClientRect().width) && void 0 !== bb ? bb : 0),
                  lb = window.innerWidth / 2,
                  Ib = Mb ? Mb.getBoundingClientRect().right : 0,
                  Ob = Hb ? Hb.getBoundingClientRect().left : window.innerWidth,
                  Ub = Math.min(lb - Ib, Ob - lb) - jb.e - gb / 2,
                  tb = Ub < 6 * Vb,
                  Cb = tb ? (window.innerWidth - gb) / 2 - jb.e : Ub;
                wb.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Cb,14*Vb)))}px`), eb(tb)
              };
            pb();
            const Vb = new ResizeObserver(pb);
            for (const bb of [wb, Mb, Hb]) bb && Vb.observe(bb);
            return window.addEventListener("resize", pb), () => {
              Vb.disconnect(), window.removeEventListener("resize", pb)
            }
          }), [bb, wb]), Mb
        }(eb, "scoreboard" === wb.wire[0]);
        if ("scoreboard" !== wb.wire[0]) return null;
        const [, Vb, gb, lb, Ib, , Ob] = wb.wire, Ub = "Red" === Vb ? "Blue" : "Red";
        return (0, Ab.jsxs)("div", {
          className: Xb()("FrontlineScoreboardContainer", {
            Below: pb
          }),
          children: [(0, Ab.jsxs)("div", {
            ref: eb,
            className: "FrontlineScoreboard",
            children: [(0, Ab.jsx)(db, {}), (0, Ab.jsx)(ab, {
              team: Vb,
              tickets: gb,
              goal: Ib,
              side: "Friendly"
            }), (0, Ab.jsx)("div", {
              className: "FrontlinePoints",
              children: Ob.map((bb => (0, Ab.jsx)(Jb, {
                className: "FrontlinePoint",
                point: bb
              }, bb[0])))
            }), (0, Ab.jsx)(ab, {
              team: Ub,
              tickets: lb,
              goal: Ib,
              side: "Enemy"
            })]
          }), (0, Ab.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Ab.jsx)(ub, {
              endsAt: wb.endsAt
            }), (0, Ab.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Mb("frontlineHud:ticketGoal", {
                goal: Ib
              })
            })]
          })]
        })
      }));

    function ab(bb) {
      let {
        team: wb,
        tickets: Mb,
        goal: eb,
        side: Hb
      } = bb;
      const {
        t: pb
      } = (0, Kb.C)(), Vb = String(Mb).padStart(3, "0"), gb = Vb.search(/[1-9]/), lb = -1 === gb ? Vb : Vb.slice(0, gb), Lb = Math.min(20, Math.floor(Mb / eb * 20));
      return (0, Ab.jsxs)("div", {
        className: Xb()("FrontlineTeamScore", Hb, `Team-${wb}`),
        children: [(0, Ab.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Ab.jsx)("span", {
            className: "Lead",
            children: lb
          }), -1 !== gb && Vb.slice(gb)]
        }), (0, Ab.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Ab.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: pb(Wb[wb])
          }), (0, Ab.jsx)(ib, {
            segments: 20,
            lit: Lb
          })]
        })]
      })
    }

    function ib(bb) {
      let {
        segments: wb,
        lit: Mb
      } = bb;
      return (0, Ab.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: wb
        }, ((bb, wb) => (0, Ab.jsx)("i", {
          className: Xb()({
            Lit: wb < Mb
          })
        }, wb)))
      })
    }

    function ub(bb) {
      let {
        endsAt: wb
      } = bb;
      const Mb = (0, Rb.i)(wb);
      return (0, Ab.jsx)("div", {
        className: Xb()("FrontlineClock", {
          Urgent: Mb <= 60
        }),
        children: (0, Rb.b)(Mb)
      })
    }

    function db() {
      return (0, Ab.jsxs)(Ab.Fragment, {
        children: [(0, Ab.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ab.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Pb = Mb(40837);
    class nb {
      constructor(bb) {
        this.hud = bb, this.points = new Pb.e({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(bb, wb) {
        this.points.setRender(bb);
        const Mb = this.hud.getScoreboard().wire;
        if ("scoreboard" === Mb[0] && this.points.hasMarkers())
          for (const [eb, , , , , , Hb] of Mb[6]) Hb && this.points.update(eb, Hb[0], Hb[1] + 2.5, Hb[2], wb)
      }
    }
    var yb = Mb(7610),
      ob = Mb(3822);
    const Tb = "frontlineRoundEndChanged";
    class kb {
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
      EO(bb) {
        const wb = "roundEnd" === bb[0] ? performance.now() + bb[5] : 0;
        this.view = {
          wire: bb,
          key: this.view.key + 1,
          endsAt: wb
        }, Ib.k.iI(Tb, this.view, !0)
      }
    }
    var bw = Mb(3108);
    const ww = (0, Hb.lazy)((() => (0, ob.c)(Promise.all([Mb.e(267), Mb.e(229)]).then((() => Mb(53982))), (bb => bb.FrontlineMvpLineup)))),
      Mw = [4800, 4e3, 3200],
      ew = [1, 0, 2],
      Hw = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      pw = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Vw(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, rb.h)(Tb, wb.getView()),
        eb = (0, Rb.e)(Mb.endsAt);
      return "roundEnd" !== Mb.wire[0] || 1e3 * eb < -2e3 ? null : (0, Ab.jsx)(gw, {
        wire: Mb.wire,
        secondsLeft: Math.max(0, Math.ceil(eb))
      }, Mb.key)
    }
    const gw = (0, Hb.memo)((function(bb) {
      let {
        wire: wb,
        secondsLeft: Mb
      } = bb;
      const {
        t: pb
      } = (0, Kb.C)();
      (0, Hb.useEffect)((() => (0, bw.f)()), []);
      const [, Vb, gb, lb, Lb, , Ib, Ob] = wb, Ub = (0, Hb.useMemo)((() => ew.filter((bb => bb < Ob.length))), [Ob]), tb = (0, Hb.useMemo)((() => Ub.map((bb => {
        const [, , , , , wb, Mb] = Ob[bb];
        return {
          cosmetics: eb.map(((bb, Mb) => [bb, wb[Mb]])),
          size: 0 === bb ? 1.15 : .85,
          heldGun: {
            name: Mb,
            aimed: 0 === bb
          },
          showAfterMs: Mw[bb]
        }
      }))), [Ob, Ub]);
      return (0, Ab.jsxs)("div", {
        className: Xb()("FrontlineRoundEnd", `Result-${Vb}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Ab.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Ab.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Ab.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Ab.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Ab.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Cb = pb(Hw[Vb]), /\p{Script=Arabic}/u.test(Cb) ? [Cb] : (0, yb.b)(Cb)).map(((bb, wb) => (0, Ab.jsx)("span", {
              style: {
                "--letter": wb
              },
              children: bb
            }, wb)))]
          }), (0, Ab.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [gb && "victory" === Vb && (0, Ab.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: pb("frontlineRoundEnd:comeback")
            }), (0, Ab.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Ab.jsx)("b", {
                className: "Friendly",
                children: lb
              }), " \u2013 ", (0, Ab.jsx)("b", {
                className: "Enemy",
                children: Lb
              })]
            })]
          })]
        }), Ub.length > 0 && (0, Ab.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Ub.length
          },
          children: [(0, Ab.jsx)(Hb.Suspense, {
            fallback: null,
            children: (0, Ab.jsx)(ww, {
              className: "FrontlineRoundEndLineup",
              players: tb
            })
          }), Ub.map((bb => (0, Ab.jsx)(lw, {
            mvp: Ob[bb],
            place: bb
          }, bb)))]
        }), (0, Ab.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: pb("frontlineRoundEnd:nextFront", {
            map: Ib,
            seconds: String(Mb)
          })
        })]
      });
      var Cb
    }));

    function lw(bb) {
      let {
        mvp: wb,
        place: Mb
      } = bb;
      const {
        t: eb
      } = (0, Kb.C)(), [Hb, pb, Vb, gb, lb] = wb, [Lb, Ib] = eb(function(bb, wb) {
        return 1 === wb && "damage" !== bb ? `frontlineRoundEnd:${bb}One` : `frontlineRoundEnd:${bb}`
      }(Vb, gb), {
        name: "\0",
        count: gb.toLocaleString()
      }).split("\0");
      return (0, Ab.jsxs)("div", {
        className: Xb()("FrontlineMvpCard", `Place-${Mb+1}`, `Team-${pb}`),
        style: {
          "--revealMs": `${Mw[Mb]}ms`
        },
        children: [(0, Ab.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ab.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Ab.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: eb(pw[Mb])
        }), (0, Ab.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Lb, (0, Ab.jsx)("span", {
            className: "FrontlineMvpName",
            children: Hb
          }), Ib]
        }), (0, Ab.jsx)("div", {
          className: "FrontlineMvpKit",
          children: lb
        })]
      })
    }
    const Lw = function(bb, wb, Mb, eb) {
      let {
        localPlayerId: gb
      } = eb;
      const lb = new fb,
        Lb = new kb;
      let Ib = null,
        Ob = null,
        Ub = null,
        tb = null,
        Cb = null,
        Eb = [!1, !1];
      const Fb = () => {
        var bb, wb;
        const [Mb, eb] = Eb;
        null === (bb = Ob) || void 0 === bb || bb.Bx(!Mb), null === (wb = Ub) || void 0 === wb || wb.Bx(!eb)
      };
      return {
        onCreate: bb => {
          Ib = bb, Ob = new hb(bb, gb), Ub = new Vb.b(bb, gb), tb = new nb(lb), Fb(), Cb = (0, pb.J)((0, Hb.createElement)(Hb.Fragment, null, (0, Hb.createElement)(Qb, {
            hud: lb,
            crosshair: Ob,
            damage: Ub,
            markers: tb
          }), (0, Hb.createElement)(Vw, {
            controller: Lb
          })))
        },
        onClose: () => {
          var bb, wb, Mb, eb;
          null === (bb = Cb) || void 0 === bb || bb(), null === (wb = Ob) || void 0 === wb || wb.dispose(), Ob = null, null === (Mb = Ub) || void 0 === Mb || Mb.dispose(), Ub = null, null === (eb = tb) || void 0 === eb || eb.points.dispose(), tb = null, Ib = null
        },
        onAfterRender: (bb, wb) => {
          var Mb, eb, Hb, pb, Vb;
          null === (Mb = Ob) || void 0 === Mb || Mb.frame(bb, wb.tanHalfFovY), null === (eb = Ub) || void 0 === eb || eb.frame(wb.cameraHeading), null === (Hb = tb) || void 0 === Hb || Hb.frame(wb, null !== (pb = null === (Vb = Ib) || void 0 === Vb ? void 0 : Vb.getPositionView(gb)) && void 0 !== pb ? pb : null)
        },
        onReceivedMessageFromServer: (bb, wb) => {
          "frontlineHud" === bb ? lb.EO(wb) : "frontlineScoreboard" === bb ? lb.receiveScoreboard(wb) : "frontlineRoundEnd" === bb ? Lb.EO(wb) : "frontlinePrefs" === bb && (Eb = wb, Fb())
        }
      }
    }
  },
  40829: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(1364);
    const pb = (0, eb.memo)((function(bb) {
      let {
        controller: wb
      } = bb;
      return (0, Hb.jsxs)("div", {
        className: "DamageFeedback",
        ref: wb.bindElement,
        children: [(0, Hb.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, Hb.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, Hb.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  40827: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(29);
    const Hb = "DamageFeedbackArcsShown",
      pb = .45,
      Vb = .2;
    class gb {
      constructor(bb, wb) {
        let {
          arcs: Mb = !0,
          edgeGlow: Hb = !0,
          lowHealthShade: pb = !0,
          enabled: Vb = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = bb, this.localPlayerId = wb, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.vH = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = bb => {
          var wb, Mb;
          this.clearHits(), this.root = bb, this.lowLayer = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".DamageFeedbackLow")) && void 0 !== wb ? wb : null, this.arcLayer = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".DamageFeedbackArcs")) && void 0 !== Mb ? Mb : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: Mb,
          edgeGlow: Hb,
          lowHealthShade: pb
        }, this.enabled = Vb, this.token = eb.k.subscribe("damagedByOtherPlayer", (bb => {
          let {
            direction: wb,
            SH: Mb
          } = bb;
          this.onHurt(wb, Mb)
        })), this.syncHealth(), this.showCustomDamage()
      }
      Bx(bb) {
        bb !== this.enabled && (this.enabled = bb, this.showCustomDamage(), bb || this.clearHits(), this.showRoot())
      }
      frame(bb) {
        this.syncHealth(), this.cameraHeading = bb;
        for (const wb of this.arcs) this.drawArcAngle(wb)
      }
      dispose() {
        eb.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Hb)
      }
      showCustomDamage() {
        document.body.classList.toggle(Hb, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const bb = this.api.getClientOption(this.localPlayerId, "_health"),
          wb = this.api.getClientOption(this.localPlayerId, "_shield"),
          Mb = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(bb, this.readHealth) && Object.is(wb, this.readShield) && Object.is(Mb, this.readMaxHealth)) return;
        if (this.readHealth = bb, this.readShield = wb, this.readMaxHealth = Mb, null === bb || void 0 === bb || !Mb) return this.lastHealthPool = null, this.maxHealth = null, this.vH = 1, this.dead = !1, void this.drawLow();
        const eb = bb + (null !== wb && void 0 !== wb ? wb : 0);
        if (null !== this.lastHealthPool && eb < this.lastHealthPool) {
          const bb = performance.now(),
            wb = (this.lastHealthPool - eb) / Mb;
          this.lastDrop = bb - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + wb,
            at: this.lastDrop.at
          } : {
            frac: wb,
            at: bb
          }
        }
        this.dead = bb <= 0, this.dead && this.clearHits(), this.lastHealthPool = eb, this.maxHealth = Mb, this.vH = bb > 0 ? bb / Mb : 1, this.drawLow()
      }
      onHurt(bb, wb) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Mb = Math.min(1, this.takeDamageFrac(wb) / .3);
        null !== bb && this.parts.arcs && this.showArc(bb, Mb), this.parts.edgeGlow && this.flashEdge(null === bb ? null : bb - this.cameraHeading, .4 + .6 * Mb)
      }
      takeDamageFrac(bb) {
        if (void 0 !== bb && this.maxHealth) return bb / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: wb
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, wb
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const bb = Lb((pb - this.vH) / .25),
          wb = Lb((Vb - this.vH) / .15000000000000002),
          Mb = this.vH < pb;
        this.lowLayer.classList.toggle("Active", Mb), this.lowLayer.classList.toggle("Critical", this.vH < Vb), this.lowLayer.style.opacity = String(Mb ? .55 + .3 * bb + .15 * wb : 0)
      }
      showArc(bb, wb) {
        var Mb, eb;
        if (!this.arcLayer) return;
        let Hb = this.arcs.find((wb => lb(wb.direction, bb) < .6));
        if (!Hb) {
          const wb = document.createElement("div");
          wb.className = "DamageFeedbackArc", wb.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(wb), Hb = {
            element: wb,
            direction: bb,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Hb)
        }
        Hb.direction = bb, this.drawArcAngle(Hb);
        const pb = Hb.fade ? Number(getComputedStyle(Hb.element).opacity) : 0;
        null === (Mb = Hb.fade) || void 0 === Mb || Mb.cancel(), null === (eb = Hb.pop) || void 0 === eb || eb.cancel(), Hb.element.style.opacity = "1";
        const Vb = Hb.element.animate([{
          opacity: pb
        }, {
          opacity: 1
        }], 144);
        Hb.fade = Vb, Hb.pop = Hb.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * wb
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const gb = Hb;
        Vb.onfinish = () => {
          if (gb.fade !== Vb) return;
          const bb = gb.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          bb.startTime = Vb.startTime, gb.fade = bb, bb.onfinish = () => {
            gb.fade === bb && (gb.element.remove(), Ib(this.arcs, gb))
          }
        }
      }
      drawArcAngle(bb) {
        const wb = bb.direction - this.cameraHeading;
        (null === bb.drawnAngle || Math.abs(wb - bb.drawnAngle) > .005) && (bb.drawnAngle = wb, bb.element.style.rotate = `${wb}rad`)
      }
      flashEdge(bb, wb) {
        var Mb, eb, Hb;
        if (!this.root) return;
        let pb = this.flashes.find((wb => null === wb.angle || null === bb ? wb.angle === bb : lb(wb.angle, bb) < .5));
        if (!pb) {
          const wb = document.createElement("div");
          wb.className = "DamageFeedbackFlash";
          const Mb = wb.appendChild(document.createElement("div"));
          Mb.className = "DamageFeedbackFlashGlow", this.root.insertBefore(wb, this.arcLayer), pb = {
            element: wb,
            glow: Mb,
            angle: bb,
            level: 0,
            animation: null
          }, this.flashes.push(pb)
        }
        const Vb = null === (Mb = pb.animation) || void 0 === Mb || null === (eb = Mb.effect) || void 0 === eb ? void 0 : eb.getComputedTiming().progress,
          gb = null === Vb || void 0 === Vb ? 0 : pb.level * (1 - Vb);
        pb.level = Math.min(1, Math.max(wb, gb + .6 * wb)), pb.angle = bb;
        const {
          x: Lb,
          y: Ob,
          rx: Ub,
          ry: tb
        } = function(bb, wb) {
          const Mb = window.innerWidth,
            eb = window.innerHeight;
          if (null === bb) return {
            x: Mb / 2,
            y: eb / 2,
            rx: 0,
            ry: 0
          };
          const Hb = Math.sin(bb),
            pb = -Math.cos(bb),
            Vb = Mb / 2 / Math.max(1e-6, Math.abs(Hb)),
            gb = eb / 2 / Math.max(1e-6, Math.abs(pb)),
            lb = Math.min(Vb, gb),
            Lb = Math.round(Mb / 2 + Hb * lb),
            Ib = Math.round(eb / 2 + pb * lb),
            Ob = eb / 100 * (.85 + .25 * wb),
            Ub = Vb <= gb,
            tb = Math.round((Ub ? 30 : 74) * Ob),
            Cb = Math.round((Ub ? 58 : 26) * Ob);
          return {
            x: Lb,
            y: Ib,
            rx: tb,
            ry: Cb
          }
        }(bb, pb.level), {
          style: Cb
        } = pb.glow;
        pb.glow.classList.toggle("Everywhere", null === bb), Cb.setProperty("--glowX", `${Lb}px`), Cb.setProperty("--glowY", `${Ob}px`), Cb.setProperty("--glowRx", `${Ub}px`), Cb.setProperty("--glowRy", `${tb}px`), pb.element.style.transformOrigin = `${Lb}px ${Ob}px`, null === (Hb = pb.animation) || void 0 === Hb || Hb.cancel();
        const Eb = pb.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: pb.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * pb.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * pb.level
        });
        pb.animation = Eb;
        const Fb = pb;
        Eb.onfinish = () => {
          Fb.animation === Eb && (Fb.element.remove(), Ib(this.flashes, Fb))
        }
      }
      clearHits() {
        for (const eb of this.arcs) {
          var bb, wb;
          null === (bb = eb.fade) || void 0 === bb || bb.cancel(), eb.fade = null, null === (wb = eb.pop) || void 0 === wb || wb.cancel(), eb.element.remove()
        }
        this.arcs.length = 0;
        for (const eb of this.flashes) {
          var Mb;
          null === (Mb = eb.animation) || void 0 === Mb || Mb.cancel(), eb.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function lb(bb, wb) {
      return Math.abs(Math.atan2(Math.sin(bb - wb), Math.cos(bb - wb)))
    }

    function Lb(bb) {
      return Math.max(0, Math.min(1, bb))
    }

    function Ib(bb, wb) {
      const Mb = bb.indexOf(wb); - 1 !== Mb && bb.splice(Mb, 1)
    }
  },
  7610: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    const eb = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Hb(bb) {
      return null === eb ? Array.from(bb) : Array.from(eb.segment(bb), (bb => {
        let {
          segment: wb
        } = bb;
        return wb
      }))
    }
  },
  39723: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => pb
    });
    const eb = new WeakMap;

    function Hb(bb) {
      let wb = eb.get(bb);
      return wb || (wb = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, eb.set(bb, wb)), wb
    }

    function pb(bb, wb) {
      const Mb = Hb(bb);
      Mb.hidden !== wb && (Mb.hidden = wb, bb.hidden = wb)
    }

    function Vb(bb, wb, Mb) {
      const eb = Hb(bb);
      eb.x === wb && eb.y === Mb || (eb.x = wb, eb.y = Mb, bb.style.translate = `${wb}vw ${Mb}vh`)
    }
  },
  38258: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    const eb = {
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