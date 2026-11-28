export const id = 29;
export const ids = [29];
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
  5817: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ub
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1475),
      Vb = Mb(1468),
      gb = Mb(4896),
      lb = Mb(160),
      Lb = Mb(4929),
      Ib = Mb(4920),
      Ob = Mb(1364);

    function Ub(bb) {
      let {
        game: wb
      } = bb;
      const Mb = (0, lb.is99NightsCrazyGamesBundle)() ? "large" : "small",
        eb = (0, Lb.f)(wb, Mb),
        Ub = (0, gb.i)(eb),
        tb = void 0 !== Ub.blurhash;
      return (0, Ob.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Ub.isLoading && !tb && (0, Ob.jsx)(Vb.c, {
          loaderType: "Secondary"
        }), !Ub.failed && (null !== Ub.src || tb) && (0, Ob.jsx)("div", {
          className: Hb()("SchematicImage", Ib.h, {
            SchematicImageFadeIn: Ub.fadeIn && !tb
          }),
          style: (0, Ib.d)(Ub),
          children: (0, Ob.jsx)(Ib.b, {
            image: Ub
          })
        }), Ub.failed && (0, Ob.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ob.jsx)(pb.b, {
            name: "face-dizzy"
          })
        })]
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
  5822: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1364);

    function gb(bb) {
      let {
        columns: wb,
        rows: Mb,
        getRowKey: Hb,
        renderRow: gb,
        className: lb
      } = bb;
      return (0, Vb.jsxs)("table", {
        className: pb()("Table", lb),
        children: [(0, Vb.jsx)("thead", {
          children: (0, Vb.jsx)("tr", {
            children: wb.map((bb => (0, Vb.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Vb.jsx)("tbody", {
          children: Mb.map(((bb, wb) => (0, Vb.jsx)(eb.Fragment, {
            children: gb(bb, wb)
          }, Hb(bb))))
        })]
      })
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
  37820: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      g: () => Ib,
      h: () => Vb,
      j: () => Ob,
      k: () => gb
    });
    var eb = Mb(29),
      Hb = Mb(1447);
    let pb = null;

    function Vb() {
      return (0, Hb.f)() ? null : pb
    }

    function gb(bb) {
      return pb = bb, () => {
        pb === bb && (pb = null)
      }
    }
    const lb = "clientGameHeldItemLabelChanged";
    let Lb = null;

    function Ib() {
      return (0, Hb.f)() ? null : Lb
    }

    function Ob(bb) {
      return Lb = bb, eb.k.iI(lb), () => {
        Lb === bb && (Lb = null, eb.k.iI(lb))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);