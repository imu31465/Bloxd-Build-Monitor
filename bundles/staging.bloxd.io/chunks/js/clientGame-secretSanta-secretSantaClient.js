export const id = 28;
export const ids = [28];
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
  37795: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Rb,
      h: () => jb,
      j: () => Kb,
      k: () => Xb,
      m: () => xb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(4472),
      gb = Mb(366),
      lb = Mb(3503),
      Lb = Mb(29),
      Ib = Mb(2167),
      Ob = Mb(43),
      Ub = Mb(2183),
      tb = Mb(26),
      Cb = Mb(2190),
      Eb = Mb(1549),
      Fb = Mb(10155),
      Bb = Mb(2210),
      sb = Mb(1259),
      mb = Mb(37797),
      hb = Mb(1364);
    const zb = 7e3;

    function Xb() {
      const {
        loadingOverlayVisible: bb,
        openInGameMenuName: wb,
        openEverythingMenuName: Mb
      } = (0, tb.o)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return bb || null !== wb || null !== Mb
    }

    function xb(bb, wb, Mb) {
      const Hb = (0, eb.useRef)(Mb);
      Hb.current = Mb;
      const pb = (0, eb.useRef)({
        card: bb,
        ms: 0
      });
      (0, eb.useEffect)((() => {
        if (wb || null === bb) return;
        pb.current.card !== bb && (pb.current = {
          card: bb,
          ms: 0
        });
        const Mb = pb.current,
          eb = performance.now(),
          Vb = setTimeout((() => {
            Hb.current()
          }), zb - Mb.ms);
        return () => {
          clearTimeout(Vb), Mb.ms += performance.now() - eb
        }
      }), [wb, bb])
    }
    const jb = (0, eb.memo)((function() {
      const {
        isTouchScreen: bb
      } = (0, tb.o)(["isTouchScreen"]), wb = (0, Eb.z)();
      (0, Vb.c)();
      const Mb = (0, lb.k)("showBasicMovementControls"),
        [Hb, Ib] = (0, eb.useState)("movement"),
        Ub = "movement" === Hb,
        Cb = wb && !1 !== Mb;
      (0, eb.useEffect)((() => {
        "padActions" !== Hb || Cb || Ib("done")
      }), [Hb, Cb]);
      const Fb = Xb();
      xb("done" === Hb ? null : Hb, Fb, (() => {
        Ib("movement" === Hb && (0, Eb.j)() ? "padActions" : "done")
      }));
      const Bb = Ob.i.getItem(gb.Jb) > 2,
        sb = (!bb || wb) && Ub && !1 !== Mb,
        zb = "padActions" === Hb && Cb,
        jb = (0, eb.useRef)(null);
      (0, mb.f)(!Bb && !Fb && sb, jb), (0, mb.f)(!Bb && !Fb && zb);
      const cb = !Bb && sb;
      return (0, eb.useEffect)((() => {
        cb && !Fb && Lb.k.iI("controlsTutorialShown", "movement")
      }), [cb, Fb]), Bb ? (0, hb.jsx)(Db, {
        showingMovementControls: !1
      }) : (0, hb.jsxs)(hb.Fragment, {
        children: [sb ? (0, hb.jsxs)("div", {
          ref: jb,
          className: pb()("ControlsTutorialDiv", {
            Covered: Fb
          }),
          children: [(0, hb.jsx)(Kb, {}), (0, hb.jsx)(Rb, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, hb.jsx)(Rb, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, zb && (0, hb.jsx)(rb, {
          covered: Fb
        }), (0, hb.jsx)(Db, {
          showingMovementControls: "done" !== Hb
        })]
      })
    }));

    function Kb() {
      const bb = (0, Eb.z)();
      return (0, hb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, hb.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), bb && (0, hb.jsx)(Cb.e, {
          noaAction: "forward"
        }), !bb && (0, hb.jsxs)(hb.Fragment, {
          children: [(0, hb.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, hb.jsx)(Cb.e, {
              noaAction: "forward"
            })
          }), (0, hb.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, hb.jsx)(Cb.e, {
              noaAction: "left"
            }), (0, hb.jsx)(Cb.e, {
              noaAction: "backward"
            }), (0, hb.jsx)(Cb.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function rb(bb) {
      let {
        covered: wb
      } = bb;
      const {
        t: Mb
      } = (0, sb.C)(), eb = (0, lb.k)("useInventory");
      return (0, hb.jsxs)("div", {
        className: pb()("ControlsTutorialDiv", {
          Covered: wb
        }),
        children: [(0, hb.jsx)(Rb, {
          header: Mb("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, hb.jsx)(Rb, {
          header: Mb("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== eb && (0, hb.jsx)(Rb, {
          header: Mb("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, hb.jsx)(Rb, {
          header: Mb("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Rb(bb) {
      let {
        header: wb,
        noaAction: Mb
      } = bb;
      return (0, hb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, hb.jsx)("div", {
          className: "KeyHeader",
          children: wb
        }), (0, hb.jsx)(Cb.e, {
          noaAction: Mb
        })]
      })
    }

    function Db(bb) {
      let {
        showingMovementControls: wb
      } = bb;
      const {
        isTouchScreen: Mb
      } = (0, tb.o)(["isTouchScreen"]), Hb = (0, Eb.z)(), pb = (0, Bb.d)("OpenShop"), [Vb, gb] = (0, eb.useState)(!1), Cb = `SeenShopControls|${(0,Ub.e)("connectedGame",(bb=>bb.gameNameWithVariation))}`, sb = () => (!(0, Eb.j)() || null !== (0, Fb.c)("OpenShop")) && !Ob.i.getItem(Cb) && Ib.c.get("shopInfo") && !wb, mb = () => (gb(!0), Ob.i.setItem(Cb, !0), (0, Eb.j)() || Lb.k.iI("showShopTouchTutorial"), setTimeout((() => {
        gb(!1)
      }), 7e3));
      (0, eb.useEffect)((() => {
        let bb;
        const wb = Lb.k.subscribe("showShopTutorial", (() => {
          sb() && (bb = mb())
        }));
        return () => {
          clearTimeout(bb), Lb.k.unsubscribe(wb)
        }
      }), [wb]);
      const zb = (0, eb.useRef)();
      return (0, lb.h)("currencyAmounts", (bb => {
        if (sb()) {
          let Mb = !1;
          const eb = Ib.c.get("shopInfo");
          for (const Hb in eb) {
            for (const pb in eb[Hb].items) {
              var wb;
              const Vb = eb[Hb].items[pb];
              if (void 0 !== Vb.currency && bb[Vb.currency] && Vb.cost <= bb[Vb.currency].amount && (null === (wb = Vb.hidden) || void 0 === wb || !wb)) {
                Mb = !0;
                break
              }
            }
            if (Mb) break
          }
          Mb && (zb.current = mb())
        }
      })), (0, eb.useEffect)((() => () => {
        clearTimeout(zb.current)
      }), [wb]), !Vb || Hb && !pb ? null : (0, hb.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: Mb && !Hb ? null : (0, hb.jsx)(Rb, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
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
  37797: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb,
      f: () => gb,
      i: () => Lb
    });
    var eb = Mb(64);
    const Hb = new Set,
      pb = new Set;

    function Vb() {
      for (const bb of pb) bb()
    }

    function gb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, eb.useEffect)((() => bb ? function() {
        const bb = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return Hb.add(bb), Vb(), () => {
          Hb.delete(bb) && Vb()
        }
      }(wb) : void 0), [bb, wb]), (0, eb.useEffect)((() => {
        bb && Vb()
      }), [bb, Mb])
    }

    function lb() {
      const bb = [];
      for (const {
          element: Mb
        }
        of Hb) {
        var wb;
        if (null === Mb) return {
          anywhere: !0,
          boxes: []
        };
        const eb = null === (wb = Mb.current) || void 0 === wb ? void 0 : wb.getBoundingClientRect();
        eb && eb.width > 0 && bb.push(eb)
      }
      return {
        anywhere: !1,
        boxes: bb
      }
    }

    function Lb(bb) {
      return pb.add(bb), () => {
        pb.delete(bb)
      }
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
  10155: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      e: () => Lb,
      i: () => Ob,
      j: () => Ib,
      m: () => lb,
      p: () => tb
    });
    var eb = Mb(29),
      Hb = Mb(2212),
      pb = Mb(1567),
      Vb = Mb(1549);
    const gb = bb => {
        var wb, Mb;
        return (0, Vb.j)() && null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getGlyphForNoaAction(bb)) && void 0 !== wb ? wb : null
      },
      lb = "controllerGlyph:",
      Lb = bb => {
        var wb, Mb;
        return null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getPadGlyphIconName(bb)) && void 0 !== wb ? wb : `${lb}xbox/${bb}`
      },
      Ib = bb => bb.startsWith(lb),
      Ob = bb => {
        var wb, Mb;
        return Ib(bb) && null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getPadGlyphIconUrl(bb)) && void 0 !== wb ? wb : null
      },
      Ub = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Vb.b, Hb.f, Hb.d],
      tb = bb => {
        const wb = Ub.map((wb => eb.k.subscribe(wb, bb)));
        return () => {
          for (const bb of wb) eb.k.unsubscribe(bb)
        }
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
  39819: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    const eb = 4,
      Hb = 12e3,
      pb = 1e3;
    class Vb {
      constructor() {
        let {
          limit: bb = eb,
          windowMs: wb = Hb,
          spacingMs: Mb = pb,
          now: Vb = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = wb, this.spacingMs = Mb, this.now = Vb
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const bb of this.priority) bb.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const bb = this.now();
        this.sent.push(bb), this.lastSentAt = bb, this.schedule(), this.notify()
      }
      addPriority(bb) {
        return this.priority.add(bb), () => {
          this.priority.delete(bb)
        }
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const bb of this.priority)
          if (bb.waiting()) return !0;
        return !1
      }
      prune() {
        const bb = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= bb;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const bb = this.now(),
          wb = this.lastSentAt + this.spacingMs,
          Mb = Math.min(wb > bb ? wb : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Mb !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Mb - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  41004: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => RM
    });
    var eb = Mb(225);
    const Hb = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var pb = Mb(64),
      Vb = Mb(3531),
      gb = Mb(1159),
      lb = Mb.n(gb),
      Lb = Mb(26),
      Ib = Mb(1549),
      Ob = Mb(43),
      Ub = Mb(1259),
      tb = Mb(37795),
      Cb = Mb(1611),
      Eb = Mb(29);
    var Fb = Mb(39776),
      Bb = Mb(39767);
    const sb = 2 * Math.PI * 17;

    function mb(bb, wb, Mb) {
      const {
        santaMarketMinX: eb,
        santaMarketMinZ: Hb,
        santaMarketSize: pb
      } = bb;
      return (0, Bb.c)(wb, Mb, {
        mapMinX: eb,
        mapMaxX: eb + pb,
        mapMinZ: Hb,
        mapMaxZ: Hb + pb
      })
    }

    function hb(bb, wb, Mb) {
      return function(bb, wb, Mb, eb, Hb) {
        const pb = Mb / 3,
          Vb = bb => Math.min(2, Math.max(0, Math.floor(bb / pb)));
        return 3 * Vb(Hb - wb) + 2 - Vb(eb - bb)
      }(bb.santaMarketMinX, bb.santaMarketMinZ, bb.santaMarketSize, wb, Mb)
    }
    const zb = "secretSantaDistrictEntered",
      Xb = "data-here";
    class xb {
      constructor() {
        this.here = -1, this.lastLeft = 0, this.lastTop = 0, this.lastAt = 0, this.drawnHere = -1, this.drawnCell = null, this.bannerAt = [], this.banner = null, this.bannerSeq = 0
      }
      reset() {
        this.here = -1, this.bannerAt = [], this.setBanner(null)
      }
      unbind() {
        this.drawnHere = -1, this.drawnCell = null
      }
      getBanner() {
        return this.banner && performance.now() - this.banner.at < 2200 ? this.banner : null
      }
      update(bb, wb, Mb, eb, Hb) {
        const pb = performance.now(),
          Vb = 100 / bb.santaMarketSize,
          gb = 4 + .008 * Math.min(1e3, pb - this.lastAt),
          lb = Math.hypot(wb - this.lastLeft, Mb - this.lastTop) > gb * Vb;
        this.lastLeft = wb, this.lastTop = Mb, this.lastAt = pb;
        const Lb = lb ? -1 : this.here,
          Ib = function(bb, wb, Mb, eb, Hb) {
            if (bb >= 0) {
              const wb = 100 / 3,
                pb = bb % 3 * wb,
                Vb = Math.floor(bb / 3) * wb;
              if (Mb >= pb - Hb && Mb <= pb + wb + Hb && eb >= Vb - Hb && eb <= Vb + wb + Hb) return bb
            }
            return wb
          }(Lb, eb, wb, Mb, 1.5 * Vb);
        if (Ib !== this.here) {
          var Ob, Ub;
          this.here = Ib;
          const wb = bb.santaMarketDistricts[Ib];
          Lb >= 0 && pb - (null !== (Ob = this.bannerAt[Ib]) && void 0 !== Ob ? Ob : -1 / 0) >= 8e3 ? (this.bannerAt[Ib] = pb, this.bannerSeq++, this.setBanner({
            key: wb,
            seq: this.bannerSeq,
            at: pb
          })) : (null === (Ub = this.getBanner()) || void 0 === Ub ? void 0 : Ub.key) !== wb && this.setBanner(null)
        }
        var tb, Cb;
        this.here !== this.drawnHere && (null === (tb = this.drawnCell) || void 0 === tb || tb.removeAttribute(Xb), this.drawnCell = Hb.querySelector(`[data-district="${this.here}"]`), null === (Cb = this.drawnCell) || void 0 === Cb || Cb.setAttribute(Xb, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(bb) {
        null === bb && null === this.banner || (this.banner = bb, Eb.k.iI(zb, bb))
      }
    }
    class jb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.at = bb, this.minSpanMs = wb, this.element = null, this.animation = null
      }
      bind(bb, wb, Mb) {
        this.element = bb, this.run(wb, Mb)
      }
      run(bb) {
        var wb;
        let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
        if (null === (wb = this.animation) || void 0 === wb || wb.cancel(), this.animation = null, !this.element || null === bb) return;
        const eb = Math.max(1, Mb, this.minSpanMs),
          Hb = eb - Mb,
          pb = bb => Math.max(0, Math.min(1, bb / eb));
        this.animation = this.element.animate([this.at(pb(Math.max(0, bb) + Hb)), this.at(pb(Hb))], {
          duration: Math.max(1, bb),
          fill: "forwards"
        })
      }
    }

    function Kb() {
      return new jb((bb => ({
        opacity: .5 + .5 * bb
      })), 5e3)
    }
    class rb {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(bb, wb, Mb) {
        var eb, Hb;
        this.forgetOldRoundTrips(bb);
        const pb = bb - this.lastPressAt;
        if (this.lastPressAt = bb, pb < this.quietMs() || this.awaitingTimedOut(bb) || "idle" !== this.state || Mb || bb < this.cooldownUntil || null === wb) return 0;
        const Vb = Math.max(0, wb.awaySpeed) * ((null !== (eb = this.averageRoundTrip) && void 0 !== eb ? eb : 300) / 1e3);
        return wb.distance + Vb > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = bb, this.ownRing = !0, this.faded = !1, 500 + (null !== (Hb = this.averageRoundTrip) && void 0 !== Hb ? Hb : 0))
      }
      turnedAway(bb, wb, Mb) {
        if (!this.mayTurnAway(bb)) return !1;
        const eb = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(wb <= 40 + (eb >= Mb ? 180 : 180 * Math.asin(eb / Mb) / Math.PI) && Mb <= 5 + Math.max(.5, eb)) && (this.faded = !0, !0)
      }
      mayTurnAway(bb) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && bb - this.predictedAt <= 350
      }
      EO(bb, wb, Mb) {
        const eb = wb > 0 || !Mb,
          Hb = "predicted" === this.state;
        return Mb && (this.cooldownUntil = bb + 1e3), eb && Hb ? this.learnRoundTrip(bb, bb - this.predictedAt) : eb && this.awaitingTimedOut(bb) && (this.timedOutPressAt = null), wb > 0 ? (this.state = "confirmed", Hb ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: wb
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !Mb ? null : {
          kind: "end",
          done: Mb
        })
      }
      expired(bb) {
        var wb;
        return !("predicted" !== this.state || bb - this.predictedAt < 1200 + (null !== (wb = this.averageRoundTrip) && void 0 !== wb ? wb : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(bb, bb - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var bb;
        const wb = this.recentRoundTrips.reduce(((bb, wb) => {
          let {
            ms: Mb
          } = wb;
          return Math.max(bb, Mb)
        }), null !== (bb = this.averageRoundTrip) && void 0 !== bb ? bb : 0);
        return Math.max(300, wb > 0 ? 1.5 * wb + 300 : 1e3)
      }
      awaitingTimedOut(bb) {
        return null !== this.timedOutPressAt && bb - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(bb) {
        for (; this.recentRoundTrips.length > 0 && bb - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(bb, wb) {
        const Mb = Math.min(2e3, Math.max(0, wb));
        this.averageRoundTrip = null === this.averageRoundTrip ? Mb : this.averageRoundTrip + .3 * (Mb - this.averageRoundTrip), this.recentRoundTrips.push({
          at: bb,
          ms: Mb
        })
      }
    }
    const Rb = "secretSantaHudChanged",
      Db = "SecretSantaHudShown",
      cb = "SecretSantaMatchOrFinish",
      Yb = "SecretSantaNaughtyLock",
      Zb = ["Wrapping", "Naughty", "Cancelled"],
      fb = {
        shown: !1,
        market: null,
        hint: null,
        status: null,
        endsAt: 0,
        naughtyEndsAt: 0,
        treeLitAt: 0,
        nextHintAt: 0,
        pulse: 0,
        bells: 0
      };
    class Ab {
      constructor(bb) {
        this.onWrapStart = bb, this.view = fb, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = new jb((bb => ({
          strokeDashoffset: 1 - bb
        }))), this.targetGlow = Kb(), this.circleFade = Kb(), this.targetFreshAt = 0, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new rb, this.district = new xb, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = bb => {
          this.map = bb, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = bb => {
          this.arrow = bb, this.drawnArrow = ""
        }, this.bindCountdown = bb => {
          this.countdown.bind(bb, this.hintMsLeft())
        }, this.bindTargetGlow = bb => {
          this.targetGlow.bind(bb, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindCircleFade = bb => {
          this.circleFade.bind(bb, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindRing = bb => {
          var wb;
          this.stopRing(), this.ring = bb, this.ringFill = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".SecretSantaRingFill")) && void 0 !== wb ? wb : null;
          const Mb = this.view.naughtyEndsAt - performance.now();
          bb && Mb > 0 && this.runRing("Naughty", Mb)
        }, this.bindFlash = bb => {
          var wb;
          null === (wb = this.flashAnimation) || void 0 === wb || wb.cancel(), this.flashAnimation = null, this.flash = bb
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(bb) {
        this.district.reset(), this.iI({
          ...this.view,
          market: bb,
          bells: 0
        })
      }
      receiveBells(bb) {
        bb !== this.view.bells && this.iI({
          ...this.view,
          bells: bb
        })
      }
      receiveHint(bb) {
        const wb = this.view.hint,
          Mb = Wb(this.view.nextHintAt, performance.now() + bb.santaHintNextInMs, 1e3),
          eb = Mb > this.view.nextHintAt,
          Hb = !wb || wb.santaHintContract !== bb.santaHintContract || wb.santaHintDistrict !== bb.santaHintDistrict || wb.santaHintCircleX !== bb.santaHintCircleX || wb.santaHintCircleZ !== bb.santaHintCircleZ,
          pb = "hunting" === bb.santaHintState && (eb || Hb) ? this.view.pulse + 1 : this.view.pulse;
        pb !== this.view.pulse && (this.targetFreshAt = performance.now()), this.iI({
          ...this.view,
          hint: bb,
          nextHintAt: Mb,
          pulse: pb
        }), this.restartCountdown()
      }
      receiveStatus(bb) {
        var wb, Mb;
        const eb = performance.now(),
          Hb = Wb(this.view.endsAt, eb + bb.santaStatusMsLeft),
          pb = bb.santaStatusNaughtyMs > 0 ? Wb(this.view.naughtyEndsAt, eb + bb.santaStatusNaughtyMs) : 0,
          Vb = 0 !== pb && 0 === this.view.naughtyEndsAt,
          gb = null !== (wb = bb.santaStatusTreeLitInMs) && void 0 !== wb ? wb : null,
          lb = null === gb ? 0 : Wb(this.view.treeLitAt, eb + gb);
        this.iI({
          ...this.view,
          status: bb,
          endsAt: Hb,
          naughtyEndsAt: pb,
          treeLitAt: lb,
          shown: bb.santaStatusMsLeft > 0
        }), this.scheduleEnd(Hb - eb), Vb ? this.runRing("Naughty", bb.santaStatusNaughtyMs) : 0 === pb && null !== (Mb = this.ring) && void 0 !== Mb && Mb.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(bb, wb) {
        if (!this.view.shown) return !1;
        const Mb = this.wrap.press(bb, wb, this.view.naughtyEndsAt > bb);
        return Mb > 0 && this.startWrapRing(Math.max(1, Mb - (performance.now() - bb))), Mb > 0
      }
      aimAtWrap(bb, wb) {
        const Mb = performance.now();
        return this.wrap.turnedAway(Mb, bb, wb) && this.endWrapRing(!1), this.wrap.mayTurnAway(Mb)
      }
      receiveWrap(bb, wb) {
        const Mb = this.wrap.EO(performance.now(), bb, wb);
        "start" === (null === Mb || void 0 === Mb ? void 0 : Mb.kind) ? this.startWrapRing(Mb.ms): "end" === (null === Mb || void 0 === Mb ? void 0 : Mb.kind) && (Mb.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(Mb.done))
      }
      snowBlink() {
        var bb, wb, Mb;
        null === (bb = this.flashAnimation) || void 0 === bb || bb.cancel();
        this.flashAnimation = null !== (wb = null === (Mb = this.flash) || void 0 === Mb ? void 0 : Mb.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== wb ? wb : null
      }
      frame(bb, wb) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: Mb,
          hint: eb
        } = this.view;
        if (!this.view.shown || !Mb || !wb || !this.arrow || !this.map) return;
        const [Hb, pb] = mb(Mb, wb[0], wb[2]), Vb = Math.min(100, Math.max(0, Hb)), gb = Math.min(100, Math.max(0, pb)), lb = Math.min(95, Math.max(5, Vb)), Lb = Math.min(95, Math.max(5, gb)), Ib = Math.round(180 * function(bb) {
          return bb - Fb.d
        }(bb) / Math.PI), Ob = `${lb.toFixed(1)}% ${Lb.toFixed(1)}% ${Ib}`;
        Ob !== this.drawnArrow && (this.drawnArrow = Ob, this.arrow.style.left = `${lb.toFixed(1)}%`, this.arrow.style.top = `${Lb.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${Ib}deg)`), this.district.update(Mb, Vb, gb, hb(Mb, wb[0], wb[2]), this.map);
        const Ub = "hunting" === (null === eb || void 0 === eb ? void 0 : eb.santaHintState) ? eb : null,
          tb = null !== Ub && function(bb, wb) {
            let [Mb, , eb] = wb;
            const {
              santaHintCircleX: Hb,
              santaHintCircleZ: pb,
              santaHintCircleR: Vb
            } = bb;
            return null !== Hb && null !== pb && Vb > 0 && Math.hypot(Mb - Hb, eb - pb) <= Vb
          }(Ub, wb);
        tb !== this.drawnInCircle && (this.drawnInCircle = tb, this.map.toggleAttribute("data-in-circle", tb))
      }
      dispose() {
        var bb;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(cb), this.countdown.bind(null, null), this.targetGlow.bind(null, null), this.circleFade.bind(null, null), this.stopRing(), null === (bb = this.flashAnimation) || void 0 === bb || bb.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.ringFill = null, this.district.dispose(), document.body.classList.remove(Db, Yb), this.view = fb
      }
      iI(bb) {
        this.view = bb, document.body.classList.toggle(Db, bb.shown), document.body.classList.toggle(Yb, bb.shown && 0 !== bb.naughtyEndsAt), bb.shown && (this.clearFinishEnd(), document.body.classList.add(cb)), Eb.k.iI(Rb, bb, !0)
      }
      scheduleEnd(bb) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.iI({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(cb)
          }), 13e3)
        }), bb)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      targetFadeMs() {
        return this.view.nextHintAt - this.targetFreshAt
      }
      hintMsLeft() {
        var bb;
        return "hunting" === (null === (bb = this.view.hint) || void 0 === bb ? void 0 : bb.santaHintState) ? this.view.nextHintAt - performance.now() : null
      }
      restartCountdown() {
        const bb = this.hintMsLeft();
        this.countdown.run(bb), this.targetGlow.run(bb, this.targetFadeMs()), this.circleFade.run(bb, this.targetFadeMs())
      }
      runRing(bb, wb) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(bb);
        const [Mb, eb] = "Wrapping" === bb ? [sb, 0] : [0, sb], Hb = [{
          strokeDashoffset: Mb
        }, {
          strokeDashoffset: eb
        }], pb = this.ringFill.animate(Hb, {
          duration: wb,
          fill: "forwards"
        });
        this.ringAnimation = pb, "Naughty" === bb && (pb.onfinish = () => {
          this.ringAnimation === pb && this.stopRing()
        })
      }
      startWrapRing(bb) {
        this.runRing("Wrapping", bb), this.onWrapStart()
      }
      endWrapRing(bb) {
        const wb = this.ring;
        if (null === wb || void 0 === wb || !wb.classList.contains("Wrapping")) return;
        var Mb, eb;
        bb ? null === (Mb = this.ringAnimation) || void 0 === Mb || Mb.finish() : null === (eb = this.ringAnimation) || void 0 === eb || eb.pause();
        wb.classList.toggle("Cancelled", !bb);
        const Hb = wb.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: bb ? 1.6 : .8
        }], {
          duration: bb ? 350 : 300,
          easing: bb ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = Hb, Hb.onfinish = () => {
          this.ringEndAnimation === Hb && this.stopRing()
        }
      }
      stopRing() {
        var bb, wb, Mb;
        null === (bb = this.ringAnimation) || void 0 === bb || bb.cancel(), null === (wb = this.ringEndAnimation) || void 0 === wb || wb.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (Mb = this.ring) || void 0 === Mb || Mb.classList.remove(...Zb)
      }
    }

    function Wb(bb, wb) {
      return 0 === bb || wb - bb > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? wb : Math.min(bb, wb)
    }
    var Jb = Mb(1364);
    const Sb = "secretSantaControlsShown",
      Nb = (0, pb.memo)((function(bb) {
        let {
          controller: wb
        } = bb;
        const {
          isTouchScreen: Mb
        } = (0, Lb.o)(["isTouchScreen"]), eb = (0, Ib.z)(), {
          t: Hb
        } = (0, Ub.C)(), Vb = (0, Cb.h)(Rb, wb.getView()).shown, gb = (0, tb.k)(), [Eb] = (0, pb.useState)((() => {
          var bb;
          return null !== (bb = Ob.i.getItem(Sb)) && void 0 !== bb ? bb : 0
        })), [Fb, Bb] = (0, pb.useState)(Eb >= 2), [sb, mb] = (0, pb.useState)(!1), hb = (0, pb.useRef)(!1), zb = !Fb && sb && Vb && (!Mb || eb);
        return (0, pb.useEffect)((() => {
          if (!Vb || sb || Fb) return;
          const bb = setTimeout((() => {
            mb(!0)
          }), 15500);
          return () => {
            clearTimeout(bb)
          }
        }), [Vb, sb, Fb]), (0, pb.useEffect)((() => {
          !zb || gb || hb.current || (hb.current = !0, Ob.i.setItem(Sb, Eb + 1))
        }), [zb, gb, Eb]), (0, tb.m)(zb ? "secretSanta" : null, gb, (() => {
          Bb(!0)
        })), zb ? (0, Jb.jsxs)("div", {
          className: lb()("ControlsTutorialDiv", {
            Covered: gb
          }),
          children: [(0, Jb.jsx)(tb.j, {}), (0, Jb.jsx)(tb.d, {
            header: "Jump",
            noaAction: "jump"
          }), (0, Jb.jsx)(tb.d, {
            header: Hb("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), eb && (0, Jb.jsx)(tb.d, {
            header: Hb("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var vb = Mb(37898),
      Qb = Mb(4792),
      Gb = Mb(37956),
      qb = Mb(1168),
      ab = Mb(1475),
      ib = Mb(37923);
    const ub = (0, pb.memo)((function(bb) {
      let {
        controller: wb,
        naughtyEndsAt: Mb
      } = bb;
      return (0, Jb.jsxs)("div", {
        ref: wb.bindRing,
        className: "SecretSantaRing",
        children: [(0, Jb.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, Jb.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, Jb.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: sb,
              strokeDashoffset: sb
            }
          })]
        }), Mb > 0 && (0, Jb.jsx)(db, {
          endsAt: Mb
        })]
      })
    }));

    function db(bb) {
      let {
        endsAt: wb
      } = bb;
      const {
        t: Mb
      } = (0, Ub.C)(), eb = (0, ib.i)(wb);
      return eb <= 0 ? null : (0, Jb.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, Jb.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, Jb.jsx)(ab.b, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", Mb("secretSantaHud:naughty")]
        }), (0, Jb.jsx)("span", {
          children: Mb("secretSantaHud:naughtyWait", {
            seconds: eb
          })
        })]
      })
    }
    const Pb = "user-magnifying-glass",
      nb = "tree-christmas",
      yb = {
        gingerbreadLane: "gingerbread-man",
        toyRow: "teddy-bear",
        iceRink: "ice-skate",
        carousel: "horse-saddle",
        greatTree: "tree-christmas",
        cocoaCorner: "mug-hot",
        lanternWalk: "lamp-street",
        marketGate: "archway",
        santasGrotto: "hat-santa"
      };

    function ob(bb) {
      return bb && yb[bb] || "snowflake"
    }
    const Tb = "SecretSantaDistrictBanner",
      kb = {
        animationDuration: "2200ms"
      },
      bw = (0, pb.memo)((function(bb) {
        let {
          controller: wb
        } = bb;
        const {
          t: Mb
        } = (0, Ub.C)(), eb = (0, Cb.h)(zb, wb.district.getBanner());
        return eb ? (0, Jb.jsxs)("div", {
          className: lb()(Tb, `District-${eb.key}`),
          style: kb,
          children: [(0, Jb.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, Jb.jsx)(ab.b, {
              name: ob(eb.key)
            })
          }), Mb(`secretSantaHud:district_${eb.key}`)]
        }, eb.seq) : null
      }));
    var ww = Mb(2183),
      Mw = Mb(1329);
    const ew = "\x01",
      Hw = "\x02";

    function pw(bb) {
      let {
        scarf: wb,
        className: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ub.C)();
      return (0, Jb.jsxs)("span", {
        className: lb()("SecretSantaScarf", `Scarf-${wb}`, Mb),
        children: [(0, Jb.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), eb(`secretSantaHud:scarfName_${wb}`)]
      })
    }
    const Vw = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function gw(bb) {
      let {
        hat: wb,
        className: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ub.C)();
      return (0, Jb.jsxs)("span", {
        className: lb()("SecretSantaHat", `Hat-${wb}`, Mb),
        children: [(0, Jb.jsx)(ab.b, {
          name: Vw[wb]
        }), " ", eb(`secretSantaHud:hatName_${wb}`)]
      })
    }

    function lw(bb) {
      let {
        scarf: wb,
        hat: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ub.C)();
      return (0, Jb.jsx)(Jb.Fragment, {
        children: Lw(eb("secretSantaHud:lookName", {
          scarf: ew,
          hat: Hw
        }), (0, Jb.jsx)(pw, {
          scarf: wb
        }), (0, Jb.jsx)(gw, {
          hat: Mb
        }))
      })
    }

    function Lw(bb) {
      for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
      const Hb = [];
      return bb.split(ew).forEach(((bb, wb) => {
        wb > 0 && Hb.push(Mb[0]), bb.split(Hw).forEach(((bb, wb) => {
          wb > 0 && Hb.push(Mb[1]), Hb.push(bb)
        }))
      })), Hb.map(((bb, wb) => (0, Jb.jsx)(pb.Fragment, {
        children: bb
      }, wb)))
    }
    const Iw = {
        circle: {
          icon: Pb,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: nb,
          text: "secretSantaHud:targetLit"
        }
      },
      Ow = (0, pb.memo)((function(bb) {
        var wb, Mb, eb;
        let {
          controller: Hb,
          market: Vb,
          hint: gb,
          nextHintAt: Lb,
          pulse: Ib
        } = bb;
        const {
          t: Ob
        } = (0, Ub.C)(), tb = (0, ww.h)("hiddenPlayerNames"), Cb = null !== (wb = null === gb || void 0 === gb ? void 0 : gb.santaHintState) && void 0 !== wb ? wb : "none", Eb = null !== (Mb = null === gb || void 0 === gb ? void 0 : gb.santaHintTargetName) && void 0 !== Mb ? Mb : null, Fb = null !== Eb && (0, Jb.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, Mw.c)(Eb, tb)
        }), Bb = "hunting" === Cb && null !== gb, sb = Bb && !0 === gb.santaHintTreeLit, mb = function(bb, wb) {
          const [Mb, eb] = (0, pb.useState)(null);
          wb && (null === Mb || void 0 === Mb ? void 0 : Mb.contract) !== bb && eb({
            contract: bb,
            until: performance.now() + 8e3
          });
          const Hb = (null === Mb || void 0 === Mb ? void 0 : Mb.contract) === bb ? Mb.until : 0,
            Vb = (0, ib.i)(Hb);
          0 !== Hb && 0 === Vb && eb({
            contract: bb,
            until: 0
          });
          return wb && Vb > 0
        }(null !== (eb = null === gb || void 0 === gb ? void 0 : gb.santaHintContract) && void 0 !== eb ? eb : 0, Bb && gb.santaHintCircleR > 0 && !sb);
        let hb, zb = `${Cb}-${null!==Eb&&void 0!==Eb?Eb:""}`;
        if (gb && "none" !== Cb && Fb)
          if ("lost" === Cb) hb = (0, Jb.jsxs)(Jb.Fragment, {
            children: [(0, Jb.jsx)(ab.b, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", Lw(Ob("secretSantaHud:lostLine", {
              name: ew
            }), Fb)]
          });
          else if (null !== gb.santaHintScarf) {
          var Xb, xb;
          zb += `-scarf-${gb.santaHintScarf}-${null!==(Xb=gb.santaHintHat)&&void 0!==Xb?Xb:""}`, hb = Lw(Ob("secretSantaHud:lookingFor", {
            name: ew,
            clue: Hw
          }), Fb, (0, Jb.jsx)(tw, {
            scarf: gb.santaHintScarf,
            hat: null !== (xb = gb.santaHintHat) && void 0 !== xb ? xb : null
          }))
        } else {
          const bb = null === Vb || void 0 === Vb ? void 0 : Vb.santaMarketDistricts[gb.santaHintDistrict];
          zb += `-district-${null!==bb&&void 0!==bb?bb:"?"}`, hb = Lw(Ob("secretSantaHud:findIn", {
            name: ew,
            district: Hw
          }), Fb, (0, Jb.jsxs)("span", {
            className: lb()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== bb && `District-${bb}`),
            children: [(0, Jb.jsx)(ab.b, {
              name: ob(bb)
            }), " ", void 0 !== bb ? Ob(`secretSantaHud:district_${bb}`) : "?"]
          }))
        } else hb = Ob("secretSantaHud:finding");
        const [jb, Kb] = (0, pb.useState)({
          key: zb,
          pulse: Ib
        });
        jb.key !== zb && Kb({
          key: zb,
          pulse: Ib
        });
        const rb = jb.key === zb && Ib !== jb.pulse;
        return (0, Jb.jsxs)("div", {
          className: lb()("SecretSantaTarget", `State-${Cb}`),
          children: [hb, "hunting" === Cb && (0, Jb.jsxs)(Jb.Fragment, {
            children: [(0, Jb.jsx)(Uw, {
              controller: Hb,
              nextHintAt: Lb,
              note: sb ? "lit" : mb ? "circle" : null
            }), rb && (0, Jb.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, Ib)]
          })]
        }, zb)
      }));

    function Uw(bb) {
      let {
        controller: wb,
        nextHintAt: Mb,
        note: eb
      } = bb;
      const {
        t: Hb
      } = (0, Ub.C)(), Vb = (0, ib.i)(Mb), [gb, lb] = (0, pb.useState)(null), [Lb, Ib] = (0, pb.useState)(null);
      (0, pb.useLayoutEffect)((() => {
        if (!gb) return;
        const bb = () => {
          const bb = gb.offsetWidth,
            wb = gb.offsetHeight;
          Ib((Mb => Mb && Mb.width === bb && Mb.height === wb ? Mb : {
            width: bb,
            height: wb
          }))
        };
        bb();
        const wb = new ResizeObserver(bb);
        return wb.observe(gb), () => {
          wb.disconnect()
        }
      }), [gb]);
      return (0, Jb.jsxs)(Jb.Fragment, {
        children: [(0, Jb.jsx)("div", {
          ref: lb,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: Lb && Lb.width > 8 && Lb.height > 8 && (0, Jb.jsx)("svg", {
            viewBox: `0 0 ${Lb.width} ${Lb.height}`,
            children: (0, Jb.jsx)("path", {
              ref: wb.bindCountdown,
              d: `M${Lb.width/2} 2H${Lb.width-2}V${Lb.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === eb ? (0, Jb.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, Jb.jsx)(ab.b, {
            name: "arrows-rotate"
          }), " ", Hb("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, Vb)
          })]
        }) : (0, Jb.jsx)(Cw, {
          kind: eb
        }, eb)]
      })
    }

    function tw(bb) {
      let {
        scarf: wb,
        hat: Mb
      } = bb;
      return (0, Jb.jsxs)(Jb.Fragment, {
        children: [(0, Jb.jsx)(pw, {
          scarf: wb,
          className: "SecretSantaClueChip"
        }), null !== Mb && (0, Jb.jsxs)(Jb.Fragment, {
          children: [(0, Jb.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, Jb.jsx)(gw, {
            hat: Mb,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function Cw(bb) {
      let {
        kind: wb
      } = bb;
      const {
        t: Mb
      } = (0, Ub.C)(), {
        icon: eb,
        text: Hb
      } = Iw[wb];
      return (0, Jb.jsxs)("div", {
        className: lb()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${wb}`),
        children: [(0, Jb.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, Jb.jsx)(ab.b, {
            name: eb
          })
        }), " ", Mb(Hb)]
      })
    }

    function Ew(bb) {
      let {
        litAt: wb,
        hunters: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ub.C)(), Hb = (0, ib.i)(wb);
      return (0, Jb.jsxs)("span", {
        className: lb()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: Hb <= 0
        }),
        children: [(0, Jb.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, Jb.jsx)(ab.b, {
            name: nb
          })
        }), " ", Hb > 0 ? eb("secretSantaHud:treeLightsOn", {
          seconds: Hb
        }) : eb(Mb > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function Fw(bb) {
      let {
        on: wb
      } = bb;
      return (0, Jb.jsx)("span", {
        className: lb()("SecretSantaTreeLightString", {
          On: wb
        }),
        "aria-hidden": "true"
      })
    }
    const Bw = (0, pb.memo)((function(bb) {
      var wb, Mb;
      let {
        controller: eb,
        market: pb,
        hint: Vb,
        pulse: gb,
        treeLightsOn: Lb
      } = bb;
      const {
        t: Ib
      } = (0, Ub.C)(), Ob = null !== (wb = null === Vb || void 0 === Vb ? void 0 : Vb.santaHintState) && void 0 !== wb ? wb : "none", tb = "hunting" === Ob && Vb ? Vb.santaHintDistrict : -1, Cb = null !== (Mb = null === pb || void 0 === pb ? void 0 : pb.santaMarketDistricts) && void 0 !== Mb ? Mb : Hb, Eb = "hunting" === Ob && pb && Vb ? function(bb, wb) {
        const {
          santaHintCircleX: Mb,
          santaHintCircleZ: eb,
          santaHintCircleR: Hb,
          santaHintContract: pb
        } = wb;
        if (null === Mb || null === eb || Hb <= 0) return null;
        const [Vb, gb] = mb(bb, Mb, eb), lb = 200 * Hb / bb.santaMarketSize, Lb = sw(Vb), Ib = Math.sqrt(Math.max(0, (lb / 2) ** 2 - (Lb - Vb) ** 2)), Ob = sw(gb - Ib >= 9 ? gb - Ib : gb + Ib);
        return {
          left: Vb,
          top: gb,
          size: lb,
          contract: pb,
          badgeLeft: Lb,
          badgeTop: Ob
        }
      }(pb, Vb) : null;
      return (0, Jb.jsxs)("div", {
        ref: eb.bindMap,
        className: lb()("SecretSantaMinimap", `State-${Ob}`, {
          WithCircle: null !== Eb
        }),
        children: [(0, Jb.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,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",
          alt: "",
          draggable: !1
        }), (0, Jb.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: Cb.map(((bb, wb) => (0, Jb.jsxs)("div", {
            className: lb()("SecretSantaDistrict", `District-${bb}`, {
              Target: wb === tb
            }),
            "data-district": wb,
            children: [(0, Jb.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, Jb.jsx)(ab.b, {
                name: ob(bb)
              })
            }), (0, Jb.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: Ib(`secretSantaHud:district_${bb}`)
            }), "greatTree" === bb && (0, Jb.jsx)(Fw, {
              on: Lb
            })]
          }, bb)))
        }), tb >= 0 && (0, Jb.jsxs)("div", {
          className: "SecretSantaTargetCell",
          style: {
            left: tb % 3 * (100 / 3) + "%",
            top: Math.floor(tb / 3) * (100 / 3) + "%"
          },
          children: [(0, Jb.jsx)("div", {
            ref: eb.bindTargetGlow,
            className: "SecretSantaTargetGlow"
          }), (0, Jb.jsx)("div", {
            className: "SecretSantaDistrictPulse"
          }, gb)]
        }), Eb && (0, Jb.jsxs)("div", {
          ref: eb.bindCircleFade,
          className: "SecretSantaCircleClip",
          children: [(0, Jb.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${Eb.left}%`,
              top: `${Eb.top}%`,
              width: `${Eb.size}%`,
              height: `${Eb.size}%`
            }
          }, Eb.contract), (0, Jb.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${Eb.badgeLeft}%`,
              top: `${Eb.badgeTop}%`
            },
            children: (0, Jb.jsx)(ab.b, {
              name: Pb
            })
          }, `badge-${Eb.contract}`)]
        }), (0, Jb.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, Jb.jsx)("div", {
            ref: eb.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, Jb.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, Jb.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, Jb.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, Jb.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === Ob && (0, Jb.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, Jb.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, Jb.jsx)(ab.b, {
              name: "snowflake"
            })
          }), (0, Jb.jsx)("span", {
            className: "SmallTextBold",
            children: Ib("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function sw(bb) {
      return Math.min(91, Math.max(9, bb))
    }

    function mw(bb) {
      let {
        bells: wb
      } = bb;
      return (0, Jb.jsx)("div", {
        className: lb()("SecretSantaFrost", `Bells-${wb}`),
        "aria-hidden": "true",
        children: (0, Jb.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function hw(bb) {
      let {
        bells: wb
      } = bb;
      const {
        t: Mb
      } = (0, Ub.C)();
      return (0, Jb.jsxs)("span", {
        className: lb()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${wb}`),
        children: [(0, Jb.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, Jb.jsx)(ab.b, {
            name: "bell"
          })
        }), " ", Mb(2 === wb ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function zw(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Cb.h)(Rb, wb.getView());
      return (0, Jb.jsxs)(Jb.Fragment, {
        children: [Mb.shown && (0, Jb.jsx)(mw, {
          bells: Mb.bells
        }), (0, Jb.jsx)("div", {
          ref: wb.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, Jb.jsx)(ub, {
          controller: wb,
          naughtyEndsAt: Mb.naughtyEndsAt
        }), Mb.shown && (0, Jb.jsxs)(Jb.Fragment, {
          children: [(0, Jb.jsx)(Rw, {
            controller: wb,
            status: Mb.status,
            endsAt: Mb.endsAt,
            bells: Mb.bells,
            treeLitAt: Mb.treeLitAt
          }), (0, Jb.jsx)(Xw, {
            controller: wb,
            market: Mb.market,
            hint: Mb.hint,
            pulse: Mb.pulse,
            treeLightsOn: 0 !== Mb.treeLitAt
          }), (0, Jb.jsx)(vb.d, {
            children: (0, Jb.jsx)(Ow, {
              controller: wb,
              market: Mb.market,
              hint: Mb.hint,
              nextHintAt: Mb.nextHintAt,
              pulse: Mb.pulse
            })
          })]
        })]
      })
    }

    function Xw(bb) {
      let {
        controller: wb,
        market: Mb,
        hint: eb,
        pulse: Hb,
        treeLightsOn: Vb
      } = bb;
      const [gb, lb] = (0, pb.useState)(null);
      return (0, Qb.o)(gb, xw), (0, Jb.jsx)("div", {
        ref: lb,
        className: "SecretSantaMapPanel",
        children: (0, Jb.jsx)(Bw, {
          controller: wb,
          market: Mb,
          hint: eb,
          pulse: Hb,
          treeLightsOn: Vb
        })
      })
    }

    function xw(bb) {
      const wb = () => {
        const wb = bb.getBoundingClientRect();
        let Mb = 0;
        for (const bb of rw()) bb.left < wb.right && bb.right > wb.left && (Mb = Math.max(Mb, bb.bottom));
        const eb = (0, Qb.h)(wb.left, wb.right, Mb);
        jw(bb, "--ss-map-top", Mb + 6), jw(bb, "--ss-map-bottom", null === eb ? null : (0, Qb.e)(bb) - eb + 6)
      };
      wb();
      const Mb = Kw(wb);
      return {
        layout: wb,
        clear: () => {
          Mb(), bb.style.removeProperty("--ss-map-top"), bb.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function jw(bb, wb, Mb) {
      const eb = null === Mb ? "" : `${Math.ceil(Mb)}px`;
      bb.style.getPropertyValue(wb) !== eb && bb.style.setProperty(wb, eb)
    }

    function Kw(bb) {
      const wb = document.querySelector(`.${Gb.k}`),
        Mb = new ResizeObserver(bb);
      for (const pb of [document.querySelector(`.${Gb.i}`), wb]) pb && Mb.observe(pb);
      const eb = new MutationObserver(bb),
        Hb = null === wb || void 0 === wb ? void 0 : wb.querySelector(".TopRightElementsRight");
      return Hb && eb.observe(Hb, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        Mb.disconnect(), eb.disconnect()
      }
    }

    function rw() {
      const bb = `.${Gb.k}`,
        wb = document.querySelectorAll(`.${Gb.i}, ${bb} .TopRightIcon:not(.TopRightTray *), ${bb} .CondensedSocialBarInner`);
      return Array.from(wb, (bb => bb.getBoundingClientRect())).filter((bb => bb.width > 0 && bb.height > 0))
    }
    const Rw = (0, pb.memo)((function(bb) {
      let {
        controller: wb,
        status: Mb,
        endsAt: eb,
        bells: Hb,
        treeLitAt: Vb
      } = bb;
      const {
        t: gb
      } = (0, Ub.C)(), [lb, Lb] = (0, pb.useState)(null);
      return function(bb) {
        (0, pb.useLayoutEffect)((() => {
          if (!bb) return;
          const wb = document.documentElement;
          let Mb = 0,
            eb = window.innerWidth;
          const Hb = () => {
              bb.style.removeProperty("top");
              const eb = rw(),
                Hb = Array.from(bb.children).filter((bb => bb instanceof HTMLElement && !bb.classList.contains(Tb))),
                pb = bb.getBoundingClientRect(),
                Vb = Hb.map((bb => {
                  const wb = pb.left + bb.offsetLeft,
                    Mb = pb.top + bb.offsetTop;
                  return {
                    left: wb,
                    right: wb + bb.offsetWidth,
                    top: Mb,
                    bottom: Mb + bb.offsetHeight
                  }
                }));
              let gb = 0;
              for (let bb = 0; bb < eb.length; bb++) {
                let bb = gb;
                for (const wb of Vb)
                  for (const Mb of eb) {
                    wb.left < Mb.right + Gb.e && wb.right > Mb.left - Gb.e && wb.top + gb < Mb.bottom + 4 && wb.bottom + gb > Mb.top && (bb = Math.max(bb, Math.ceil(Mb.bottom + 4 - wb.top)))
                  }
                if (bb === gb) break;
                gb = bb
              }
              gb > 0 && (bb.style.top = `${bb.getBoundingClientRect().top+gb}px`);
              const lb = Math.max(0, ...Vb.map((bb => bb.bottom - pb.top)));
              (0, qb.g)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (Mb = Math.max(Mb, Math.ceil(bb.getBoundingClientRect().top + lb)), wb.style.setProperty("--ss-top-bar-bottom", `${Mb}px`))
            },
            pb = () => {
              window.innerWidth !== eb && (eb = window.innerWidth, Mb = 0), Hb()
            };
          Hb();
          const Vb = new ResizeObserver(Hb);
          Vb.observe(bb);
          const gb = Kw(Hb),
            lb = new MutationObserver((bb => {
              bb.some((bb => {
                const wb = bb.target instanceof Element ? bb.target : bb.target.parentElement;
                return !(null !== wb && void 0 !== wb && wb.closest(".SecretSantaClock"))
              })) && Hb()
            }));
          lb.observe(bb, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const Lb = new MutationObserver((bb => {
              bb.some((bb => bb.target instanceof Element && bb.target.classList.contains("Chat"))) && Hb()
            })),
            Ib = document.querySelector(".TopLeftElements");
          return Ib && Lb.observe(Ib, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", pb), () => {
            Vb.disconnect(), gb(), lb.disconnect(), Lb.disconnect(), window.removeEventListener("resize", pb), wb.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [bb])
      }(lb), (0, Jb.jsxs)("div", {
        ref: Lb,
        className: "SecretSantaTop",
        children: [(0, Jb.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, Jb.jsx)(Dw, {
            endsAt: eb
          }), Mb && (0, Jb.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, Jb.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, Jb.jsx)(ab.b, {
                name: "star"
              }), " ", Mb.santaStatusPoints]
            }, Mb.santaStatusPoints), (0, Jb.jsx)("span", {
              className: "SecretSantaRank",
              children: gb("secretSantaHud:rank", {
                rank: Mb.santaStatusRank,
                players: Mb.santaStatusPlayers
              })
            })]
          })]
        }), Mb && (0, Jb.jsx)(Yw, {
          status: Mb,
          bells: Hb,
          treeLitAt: Vb
        }), (0, Jb.jsx)(bw, {
          controller: wb
        })]
      })
    }));

    function Dw(bb) {
      let {
        endsAt: wb
      } = bb;
      const Mb = (0, ib.i)(wb);
      return 0 === wb ? (0, Jb.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, Jb.jsxs)("span", {
        className: lb()("SecretSantaClock", {
          Urgent: Mb <= 30
        }),
        children: [(0, Jb.jsx)(ab.b, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, ib.b)(Mb)]
      })
    }
    const Yw = (0, pb.memo)((function(bb) {
      let {
        status: wb,
        bells: Mb,
        treeLitAt: eb
      } = bb;
      const {
        t: Hb
      } = (0, Ub.C)(), pb = Math.min(2, Math.max(0, wb.santaStatusHunters)), Vb = wb.santaStatusScarf, gb = (0, Jb.jsx)(lw, {
        scarf: Vb,
        hat: wb.santaStatusHat
      });
      let lb = (0, Jb.jsx)("span", {
        children: Lw(Hb("secretSantaHud:youWearLook", {
          look: ew
        }), gb)
      });
      if (wb.santaStatusKnown) {
        const bb = wb.santaStatusHatKnown ? Lw(Hb("secretSantaHud:spottedLook", {
          look: ew
        }), gb) : Lw(Hb("secretSantaHud:spottedScarf", {
          scarf: ew
        }), (0, Jb.jsx)(pw, {
          scarf: Vb
        }));
        lb = (0, Jb.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, Jb.jsx)(ab.b, {
            name: "eye"
          }), " ", bb]
        })
      }
      let Lb = null;
      return 0 !== eb ? Lb = (0, Jb.jsx)(Ew, {
        litAt: eb,
        hunters: pb
      }) : 0 !== Mb ? Lb = (0, Jb.jsx)(hw, {
        bells: Mb
      }) : pb > 0 && (Lb = (0, Jb.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, Jb.jsx)(ab.b, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", Hb(1 === pb ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, Jb.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [Lb, lb]
      }, pb)
    }));
    var Zw = Mb(3059);
    const fw = [226, 36, 52],
      Aw = [246, 250, 255],
      Ww = [168, 214, 255],
      Jw = [24, 24, 28],
      Sw = [44, 44, 50],
      Nw = [112, 112, 122],
      vw = [255, 112, 36];

    function Qw(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [bb[0], bb[1], bb[2], Mb],
        maxColor: [wb[0], wb[1], wb[2], Mb]
      }, {
        timeFraction: 1,
        minColor: [bb[0], bb[1], bb[2], 0],
        maxColor: [wb[0], wb[1], wb[2], 0]
      }]
    }

    function Gw(bb, wb, Mb) {
      let [eb, Hb, pb] = bb;
      return {
        pos1: [eb - wb, Hb, pb - wb],
        pos2: [eb + wb, Hb + Mb, pb + wb]
      }
    }

    function qw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Mb = .45 * wb;
      return [{
        texture: "square_particle",
        ...Gw(bb, Mb, 1.4 * wb),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * wb,
        maxSize: .34 * wb,
        manualEmitCount: Math.round(26 * wb),
        gravity: [0, .6, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }, {
          timeFraction: 1,
          factor: .2,
          factor2: .3
        }],
        colorGradients: Qw(Sw, Nw, .95),
        hideDist: 48,
        blendMode: Zw.d.Standard
      }, {
        texture: "square_particle",
        ...Gw(bb, .6 * Mb, 1.2 * wb),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * wb),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Jw[0], Jw[1], Jw[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [Jw[0], Jw[1], Jw[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: Zw.d.Standard
      }, {
        texture: "glint",
        ...Gw(bb, .7 * Mb, 1.2 * wb),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * wb),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: Qw(vw, fw),
        hideDist: 48,
        blendMode: Zw.d.Add
      }]
    }

    function aw(bb, wb) {
      return {
        texture: "glint",
        ...Gw(bb, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: wb,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: Qw(Aw, Ww),
        hideDist: 16,
        blendMode: Zw.d.Add
      }
    }
    var iw = Mb(110);
    const uw = "harp_pling",
      dw = "cloth1",
      Pw = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      nw = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      yw = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      ow = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      Tw = "keysJingle",
      kw = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function bM(bb, wb) {
      return 1 === wb ? bb : {
        ...bb,
        manualEmitCount: Math.max(1, Math.round(bb.manualEmitCount * wb))
      }
    }
    class wM {
      constructor(bb, wb) {
        this.api = bb, this.localPlayerId = wb, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, iw.isMobile)() ? .6 : 1, bb.preloadSounds([uw, Tw, dw])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(bb) {
        const wb = this.hint;
        this.hint = bb, "none" !== bb.santaHintState && (wb && wb.santaHintContract === bb.santaHintContract ? null === wb.santaHintScarf && null !== bb.santaHintScarf ? this.play(nw) : null === wb.santaHintHat && null !== bb.santaHintHat && this.play(yw) : this.play(Pw))
      }
      receiveStatus(bb) {
        (bb.santaStatusKnown && !this.spotted || bb.santaStatusHatKnown && !this.hatSpotted) && this.play(ow), this.spotted = bb.santaStatusKnown, this.hatSpotted = bb.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, dw, .5, 1.2)
      }
      setBells(bb) {
        const wb = kw[bb];
        this.layers.forEach(((bb, Mb) => {
          var eb;
          const [Hb, pb] = null !== (eb = wb[Mb]) && void 0 !== eb ? eb : [0, bb.rate];
          var Vb;
          (0 === Hb && bb.target > 0 && bb.sound && this.stopLater(bb), bb.target = Hb, Hb > 0 && pb !== bb.rate) && (bb.rate = pb, null === (Vb = bb.sound) || void 0 === Vb || Vb.rate(pb))
        }))
      }
      receiveFx(bb) {
        let {
          santaFxKind: wb,
          santaFxAt: Mb
        } = bb;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === wb) Mb && this.burst(qw(Mb));
          else if ("toTunnel" === wb) this.later(300, (() => {
          const [bb, wb, Mb] = this.ahead();
          this.burst([aw([bb, wb - 1, Mb], 36)])
        }));
        else {
          const [bb, wb, Mb] = this.ahead();
          this.burst(qw([bb, wb - .6, Mb], .8))
        }
      }
      frame(bb) {
        const {
          cameraPosition: wb,
          cameraDirection: Mb
        } = bb;
        this.camera[0] = wb[0], this.camera[1] = wb[1], this.camera[2] = wb[2], this.look[0] = Mb[0], this.look[1] = Mb[1], this.look[2] = Mb[2];
        const eb = performance.now(),
          Hb = Math.min(.1, (eb - (this.lastFrameAt || eb)) / 1e3);
        this.lastFrameAt = eb;
        for (const Vb of this.layers) {
          if (0 === Vb.volume && 0 === Vb.target && !Vb.sound) continue;
          Vb.target > 0 && !Vb.sound && (Vb.sound = this.api.playSound(this.localPlayerId, Tw, 0, Vb.rate, void 0, !0));
          const bb = (Vb.target > Vb.volume ? 3 : 1.2) * Hb;
          var pb;
          if (Vb.volume = Vb.target > Vb.volume ? Math.min(Vb.target, Vb.volume + bb) : Math.max(Vb.target, Vb.volume - bb), Vb.volume <= 0 && 0 === Vb.target) this.silence(Vb);
          else null === (pb = Vb.sound) || void 0 === pb || pb.setRelativeVolume(Vb.volume)
        }
      }
      dispose() {
        for (const bb of this.timers) window.clearTimeout(bb);
        this.timers.clear();
        for (const bb of this.layers) bb.target = 0, this.silence(bb)
      }
      silence(bb) {
        var wb;
        null === (wb = bb.sound) || void 0 === wb || wb.stop(), bb.sound = null, bb.volume = 0
      }
      stopLater(bb) {
        const wb = bb.sound,
          Mb = window.setTimeout((() => {
            this.timers.delete(Mb), bb.sound === wb && 0 === bb.target && this.silence(bb)
          }), bb.volume / 1.2 * 1e3 + 150);
        this.timers.add(Mb)
      }
      ahead() {
        const [bb, wb, Mb] = this.camera, [eb, Hb, pb] = this.look;
        return [bb + 1.8 * eb, wb + 1.8 * Hb - .35, Mb + 1.8 * pb]
      }
      later(bb, wb) {
        const Mb = window.setTimeout((() => {
          this.timers.delete(Mb), wb()
        }), bb);
        this.timers.add(Mb)
      }
      play(bb) {
        for (const [wb, Mb, eb] of bb) 0 === wb ? this.api.playSound(this.localPlayerId, uw, Mb, eb) : this.later(wb, (() => {
          this.api.playSound(this.localPlayerId, uw, Mb, eb)
        }))
      }
      burst(bb) {
        for (const wb of bb) this.api.playParticleEffect(bM(wb, this.particleShare))
      }
    }
    class MM {
      constructor(bb) {
        this.api = bb, this.wait = null
      }
      EO(bb) {
        const wb = performance.now();
        this.wait = {
          min: bb.santaFlyoverMin,
          max: bb.santaFlyoverMax,
          start: bb.santaFlyoverStart,
          until: wb + bb.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: wb
        }
      }
      frame(bb) {
        const wb = this.wait;
        if (!wb) return;
        const Mb = performance.now(),
          eb = Mb - wb.lastFrameAt;
        wb.lastFrameAt = Mb, Mb > wb.until ? this.wait = null : null !== wb.loadedAt ? (wb.settledFrames = eb <= 60 ? wb.settledFrames + 1 : 0, wb.settledFrames >= 6 && Mb - wb.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : bb && this.isLoaded(wb, bb) && (wb.loadedAt = Mb)
      }
      isLoaded(bb, wb) {
        let {
          min: Mb,
          max: Hb,
          start: pb
        } = bb;
        if (wb[0] < Mb[0] || wb[0] > Hb[0] || wb[2] < Mb[2] || wb[2] > Hb[2]) return !1;
        const Vb = eb.e.gO,
          gb = bb => bb.map((bb => Math.floor(bb / Vb))),
          lb = [gb(wb), gb(pb)],
          [Lb, Ib] = [gb(Mb), gb(Hb)];
        for (let eb = Lb[0]; eb <= Ib[0]; eb++)
          for (let bb = Lb[1]; bb <= Ib[1]; bb++)
            for (let wb = Lb[2]; wb <= Ib[2]; wb++) {
              if (lb.some((Mb => {
                  let [Hb, pb, Vb] = Mb;
                  return (eb - Hb) ** 2 + (bb - pb) ** 2 + (wb - Vb) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(eb * Vb, bb * Vb, wb * Vb)) return !1
            }
        return !0
      }
    }
    var eM = Mb(40185),
      HM = Mb(1391),
      pM = Mb(39819);
    class VM {
      constructor(bb) {
        this.api = bb, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.bO()
        }), 5e3), this.pacer = new pM.d({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.bO()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.bO())
        })), this.bO()
      }
      resend() {
        this.sent = null, this.bO()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      bO() {
        var bb, wb;
        const Mb = null !== (bb = null === (wb = (0, HM.K)().gameRender()) || void 0 === wb ? void 0 : wb.canvas.width) && void 0 !== bb ? bb : 0;
        if (Mb <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const eb = window.innerWidth / window.innerHeight,
          Hb = (0, eM.e)(Mb),
          pb = this.sent;
        pb && Math.abs(eb / pb.aspect - 1) < .02 && Math.abs(Hb / pb.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: eb,
          tagScale: Hb
        }, this.api.sendCommand(`santaView ${Math.round(1e3*eb)} ${Math.round(1e3*Hb)}`)) : this.heldBack = !0)
      }
    }
    var gM = Mb(40495);
    const lM = [20, 9, 20],
      LM = [8, 12],
      IM = .3,
      OM = [.05, .13],
      UM = {
        kind: "smokePuff"
      },
      tM = [245, 250, 255],
      CM = {
        qO: 900,
        perS: 80
      },
      EM = {
        qO: 360,
        perS: 34
      };
    class FM {
      constructor(bb) {
        this.api = bb, this.tier = (0, iw.isMobile)() ? EM : CM, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(bb) {
        const wb = performance.now(),
          Mb = 0 === this.lastMs ? 0 : Math.min(wb - this.lastMs, 250) / 1e3;
        if (this.lastMs = wb, !this.api.particlesEnabled()) return void this.dispose();
        const eb = Math.hypot(bb[0] - this.last[0], bb[1] - this.last[1], bb[2] - this.last[2]) > 20;
        if (this.last[0] = bb[0], this.last[1] = bb[1], this.last[2] = bb[2], eb && this.dispose(), (eb || wb >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = wb + 250, this.roofed = this.hasRoof(bb)), this.roofed) return void(this.budget = 0);
        const Hb = this.at;
        let pb;
        Hb[0] = bb[0], Hb[1] = bb[1] + 7, Hb[2] = bb[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * Mb, this.tier.perS / 4), pb = Math.floor(this.budget), this.budget -= pb) : (this.system = this.api.createParticles(this.opts(), {
          pos: Hb,
          half: lM
        }), pb = Math.floor(this.tier.qO / 2)), pb > 0 && (this.system.moveTo(Hb, lM), this.system.emit(pb))
      }
      dispose() {
        var bb;
        null === (bb = this.system) || void 0 === bb || bb.dispose(), this.system = null
      }
      hasRoof(bb) {
        let [wb, Mb, eb] = bb;
        const Hb = Math.floor(wb),
          pb = Math.floor(eb);
        let Vb = 0;
        for (let gb = Math.floor(Mb) + 1; gb <= Math.floor(Mb) + 16; gb++)
          if (Vb = this.api.isSolidToPlayerBlockId(this.api.getBlockId(Hb, gb, pb)) ? Vb + 1 : 0, Vb >= 4) return !0;
        return !1
      }
      opts() {
        const [bb, wb, Mb] = tM;
        return {
          texture: UM,
          qO: this.tier.qO,
          minLifeTime: LM[0] / gM.e,
          maxLifeTime: LM[1] / gM.e,
          minEmitPower: 1.1 * gM.e * .8,
          maxEmitPower: 1.1 * gM.e * 1.2,
          minSize: OM[0],
          maxSize: OM[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [IM, -1, IM],
          colorGradients: [{
            timeFraction: 0,
            minColor: [bb, wb, Mb, 0]
          }, {
            timeFraction: .12,
            minColor: [bb, wb, Mb, .9]
          }, {
            timeFraction: .85,
            minColor: [bb, wb, Mb, .9]
          }, {
            timeFraction: 1,
            minColor: [bb, wb, Mb, 0]
          }],
          blendMode: Zw.d.Standard
        }
      }
    }
    var BM = Mb(37865);
    const sM = [{
        icon: "eyes",
        key: "secretSantaHud:introSantas"
      }, {
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }],
      mM = (0, pb.memo)((function() {
        const {
          t: bb
        } = (0, Ub.C)();
        return (0, Jb.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, Jb.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, Jb.jsx)(ab.b, {
              name: "user-secret"
            }), (0, Jb.jsx)("span", {
              children: bb("secretSantaHud:introHeadline")
            })]
          }), sM.map((wb => {
            let {
              icon: Mb,
              key: eb
            } = wb;
            return (0, Jb.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, Jb.jsx)(ab.b, {
                name: Mb,
                fixedWidth: !0
              }), (0, Jb.jsx)("span", {
                children: bb(eb)
              })]
            }, eb)
          }))]
        })
      })),
      hM = (0, pb.memo)((function(bb) {
        let {
          controller: wb
        } = bb;
        return (0, Jb.jsx)("div", {
          ref: wb.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, Jb.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, Jb.jsx)(mM, {})
          })
        })
      })),
      zM = "secretSantaIntroShown";
    class XM {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = bb => {
          this.element = bb, this.drawn = -1
        }, this.bindIntro = bb => {
          this.intro = bb, this.drawnIntro = null
        }
      }
      receiveFlyover(bb) {
        this.armedUntil = performance.now() + bb + 3e3
      }
      frame(bb) {
        const wb = performance.now(),
          Mb = this.snowAlpha(wb);
        if (this.drawIntro(wb, Mb), Mb <= 0) return null !== this.shownAt && (wb < this.armedUntil && this.startIntro(wb), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (Mb < 1 || bb && wb >= this.armedUntil) return void this.draw(0);
          this.shownAt = wb
        }
        this.draw(Math.min(1, (wb - this.shownAt) / 300) * Mb)
      }
      startIntro(bb) {
        var wb;
        const Mb = null !== (wb = Ob.i.getItem(zM)) && void 0 !== wb ? wb : 0;
        Ob.i.setItem(zM, Mb + 1), this.introUntil = bb + (Mb < 3 ? 4900 : 3e3)
      }
      drawIntro(bb, wb) {
        0 !== this.introUntil && (bb >= this.introUntil || wb > 0) && (this.introUntil = 0);
        const Mb = 0 !== this.introUntil;
        this.intro && Mb !== this.drawnIntro && (this.drawnIntro = Mb, this.intro.classList.toggle("Shown", Mb))
      }
      snowAlpha(bb) {
        var wb, Mb, eb, Hb;
        (null === (wb = this.fade) || void 0 === wb || !wb.isConnected) && bb - this.fadeLookedAt >= 250 && (this.fadeLookedAt = bb, this.fade = document.querySelector(`[${BM.e}]`));
        const pb = null === (Mb = this.fade) || void 0 === Mb ? void 0 : Mb.style;
        if (!pb || "none" === pb.display) return 0;
        const Vb = null !== (eb = null === (Hb = pb.backgroundColor.match(/\d+/g)) || void 0 === Hb ? void 0 : Hb.slice(0, 3).map(Number)) && void 0 !== eb ? eb : [];
        return 3 === Vb.length && Vb.every((bb => bb >= 200)) && Number(pb.opacity) || 0
      }
      draw(bb) {
        const wb = Math.round(100 * bb) / 100;
        this.element && wb !== this.drawn && (this.drawn = wb, this.element.style.opacity = String(wb), this.element.style.display = wb > 0 ? "flex" : "none")
      }
    }
    const xM = (0, pb.memo)((function(bb) {
        let {
          controller: wb
        } = bb;
        const {
          t: Mb
        } = (0, Ub.C)();
        return (0, Jb.jsx)("div", {
          ref: wb.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, Jb.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, Jb.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, Jb.jsx)(ab.b, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), Mb("secretSantaHud:titleName")]
            }), (0, Jb.jsx)(mM, {})]
          })
        })
      })),
      jM = "SecretSantaMode",
      KM = eb.e.oF * eb.e.playerEyeToHeightRatio;

    function rM(bb) {
      document.body.classList.toggle("SecretSantaPodium", bb)
    }
    const RM = function(bb, wb, Mb, eb) {
      let {
        localPlayerId: Hb
      } = eb;
      const gb = new Ab((() => {
          var bb;
          null === (bb = Eb) || void 0 === bb || bb.wrapStarted()
        })),
        lb = new XM,
        Lb = [0, 0, 0];
      let Ib = null;
      const Ob = [0, 0, 0],
        Ub = [0, 0, 0];
      let tb = null,
        Cb = null,
        Eb = null,
        Fb = null,
        Bb = null,
        sb = null,
        mb = null;
      const hb = bb => {
          tb && null !== bb && bb !== Hb && !mb && (mb = {
            target: bb,
            at: performance.now(),
            first: null
          })
        },
        zb = (bb, wb) => {
          mb = null, gb.pressGift(bb.at, wb) && (Ib = bb.target)
        },
        Xb = (bb, wb) => {
          if (null === Ib) return;
          if (!bb.readDrawnPosition(Ib, Ob)) return void(Ib = null);
          Ub[0] = wb[0], Ub[1] = wb[1] + KM, Ub[2] = wb[2];
          const Mb = Math.hypot(Ob[0] - wb[0], Ob[1] - wb[1], Ob[2] - wb[2]);
          gb.aimAtWrap(function(bb, wb, Mb) {
            const eb = Mb[0] - bb[0],
              Hb = Mb[2] - bb[2],
              pb = Math.hypot(wb[0], wb[2]);
            let Vb = bb[1];
            const gb = pb > 0 ? (eb * wb[0] + Hb * wb[2]) / pb : 0;
            gb > 0 && (Vb += wb[1] / pb * gb), Vb = Math.max(Mb[1], Math.min(Mb[1] + 1.8, Vb));
            const lb = [eb, Vb - bb[1], Hb],
              Lb = Math.hypot(lb[0], lb[1], lb[2]),
              Ib = Math.hypot(wb[0], wb[1], wb[2]);
            if (0 === Lb || 0 === Ib) return 0;
            const Ob = (lb[0] * wb[0] + lb[1] * wb[1] + lb[2] * wb[2]) / (Lb * Ib);
            return 180 * Math.acos(Math.max(-1, Math.min(1, Ob))) / Math.PI
          }(Ub, bb.getActionRay().direction, Ob), Mb) || (Ib = null)
        },
        xb = (bb, wb, Mb) => {
          const eb = [0, 0, 0];
          Mb && bb.readDrawnPosition(wb.target, eb) ? wb.first ? zb(wb, function(bb, wb, Mb, eb) {
            const Hb = Mb[0] - bb[0],
              pb = Mb[1] - bb[1],
              Vb = Mb[2] - bb[2],
              gb = Math.hypot(Hb, pb, Vb);
            return 0 === gb || eb <= 0 ? {
              distance: gb,
              awaySpeed: 0
            } : {
              distance: gb,
              awaySpeed: (Hb * (Mb[0] - wb[0]) + pb * (Mb[1] - wb[1]) + Vb * (Mb[2] - wb[2])) / gb / eb
            }
          }(Mb, wb.first.pos, eb, (performance.now() - wb.first.at) / 1e3)) : wb.first = {
            pos: eb,
            at: performance.now()
          } : zb(wb, null)
        };
      return {
        onCreate: bb => {
          tb = bb, document.body.classList.add(jM), Eb = new wM(bb, Hb), Fb = new FM(bb), Bb = new MM(bb), sb = new VM(bb), Cb = (0, Vb.J)((0, pb.createElement)(pb.Fragment, null, (0, pb.createElement)(zw, {
            controller: gb
          }), (0, pb.createElement)(Nb, {
            controller: gb
          }), (0, pb.createElement)(xM, {
            controller: lb
          }), (0, pb.createElement)(hM, {
            controller: lb
          })))
        },
        onClose: () => {
          var bb, wb, Mb, eb;
          document.body.classList.remove(jM), rM(!1), null === (bb = Cb) || void 0 === bb || bb(), Cb = null, gb.dispose(), null === (wb = Eb) || void 0 === wb || wb.dispose(), Eb = null, null === (Mb = Fb) || void 0 === Mb || Mb.dispose(), Fb = null, Bb = null, null === (eb = sb) || void 0 === eb || eb.dispose(), sb = null, tb = null
        },
        onPlayerAltAction: (bb, wb, Mb, eb, Hb, pb) => {
          hb(pb)
        },
        onPlayerAttackEntity: (bb, wb) => {
          hb(wb)
        },
        onAfterRender: (bb, wb) => {
          var Mb, eb, pb, Vb;
          const Ib = null !== (Mb = tb) && void 0 !== Mb && Mb.readDrawnPosition(Hb, Lb) ? Lb : null;
          mb && tb && xb(tb, mb, Ib), tb && Ib && Xb(tb, Ib), gb.frame(wb.cameraHeading, Ib), null === (eb = Eb) || void 0 === eb || eb.frame(wb), null === (pb = Fb) || void 0 === pb || pb.onAfterRender(wb.cameraPosition), null === (Vb = Bb) || void 0 === Vb || Vb.frame(Ib), lb.frame(gb.getView().shown)
        },
        onReceivedMessageFromServer: (bb, wb) => {
          var Mb;
          if ("secretSantaHint" === bb) gb.receiveHint(wb), null === (Mb = Eb) || void 0 === Mb || Mb.receiveHint(wb);
          else if ("secretSantaStatus" === bb) {
            var eb;
            gb.receiveStatus(wb), null === (eb = Eb) || void 0 === eb || eb.receiveStatus(wb)
          } else if ("secretSantaWrap" === bb) {
            mb && zb(mb, null);
            const {
              santaWrapMs: bb,
              santaWrapDone: Mb
            } = wb;
            gb.receiveWrap(bb, Mb)
          } else if ("secretSantaMarket" === bb) {
            var Hb;
            null === (Hb = Eb) || void 0 === Hb || Hb.reset(), gb.receiveMarket(wb)
          } else if ("secretSantaBells" === bb) {
            var pb;
            const {
              santaBellsLevel: bb
            } = wb;
            gb.receiveBells(bb), null === (pb = Eb) || void 0 === pb || pb.setBells(bb)
          } else if ("secretSantaFx" === bb) {
            var Vb;
            const bb = wb;
            "toTunnel" === bb.santaFxKind && gb.snowBlink(), null === (Vb = Eb) || void 0 === Vb || Vb.receiveFx(bb)
          } else if ("secretSantaFlyover" === bb) {
            var Lb;
            null === (Lb = Bb) || void 0 === Lb || Lb.EO(wb), lb.receiveFlyover(wb.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === bb) {
            const {
              santaPodiumShown: bb
            } = wb;
            var Ib;
            if (rM(bb), !bb) null === (Ib = sb) || void 0 === Ib || Ib.resend()
          }
        }
      }
    }
  },
  39776: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => Hb
    });
    var eb = Mb(382);
    const Hb = (0, eb.Lb)([0, 0, -1]),
      pb = [{
        name: "S",
        bearing: (0, eb.Lb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, eb.Lb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Hb
      }, {
        name: "W",
        bearing: (0, eb.Lb)([1, 0, 0])
      }]
  },
  39767: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    var eb = Mb(39776);

    function Hb(bb, wb, Mb) {
      return [100 * (Mb.mapMaxX - bb) / (Mb.mapMaxX - Mb.mapMinX), 100 * (wb - Mb.mapMinZ) / (Mb.mapMaxZ - Mb.mapMinZ)]
    }

    function pb(bb, wb, Mb, pb) {
      const [Vb, gb] = Hb(bb, wb, pb), lb = eb.d - Mb;
      return {
        rotation: lb,
        transform: `rotate(${lb}rad) translate(-${Vb}%, -${gb}%)`
      }
    }
  },
  40495: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb,
      h: () => pb
    });
    const eb = 1 / .6,
      Hb = {
        kind: "smokePuff"
      };
    class pb {
      constructor(bb, wb, Mb) {
        this.style = bb, this.qO = wb, this.half = Mb, this.particles = null, this.lastFrame = -1
      }
      emit(bb, wb, Mb) {
        let pb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Mb !== this.lastFrame && (this.lastFrame = Mb, this.particles || (this.particles = bb.createParticles(function(bb, wb) {
          const [
            [Mb, pb, Vb],
            [gb, lb, Lb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Hb : "square_particle",
            qO: wb,
            minLifeTime: bb.life[0] / eb,
            maxLifeTime: bb.life[1] / eb,
            minEmitPower: bb.power[0] * eb,
            maxEmitPower: bb.power[1] * eb,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * eb * eb, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Mb, pb, Vb, bb.alpha],
              maxColor: [gb, lb, Lb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [Mb, pb, Vb, 0],
              maxColor: [gb, lb, Lb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.qO), {
          pos: wb,
          half: this.half
        })), this.particles.moveTo(wb, this.half), this.particles.emit(pb), !0)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
    }
  },
  40185: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    const eb = 1400,
      Hb = .45;

    function pb(bb) {
      return bb < eb ? Math.pow(eb / bb, Hb) : 1
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);