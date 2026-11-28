export const id = 26;
export const ids = [26];
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
  38095: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => jb,
      f: () => Xb,
      i: () => xb,
      l: () => Cb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(64),
      Vb = Mb(81),
      gb = Mb(1525),
      lb = Mb(1616),
      Lb = Mb(1516),
      Ib = Mb(1350),
      Ob = Mb(1259),
      Ub = Mb(38103),
      tb = Mb(1364);

    function Cb(bb) {
      const [wb, Mb] = (0, pb.useState)((() => (0, Ub.m)(bb)));
      return (0, pb.useEffect)((() => (Mb((0, Ub.m)(bb)), (0, Ub.K)((() => {
        Mb((0, Ub.m)(bb))
      })))), [bb]), wb
    }

    function Eb(bb, wb) {
      "function" === typeof bb ? bb(wb) : bb && (bb.current = wb)
    }

    function Fb(bb) {
      let {
        tutorial: wb,
        step: Mb,
        enabled: eb = !0
      } = bb;
      const Hb = Cb(wb);
      return eb && Hb === Mb
    }

    function Bb(bb, wb) {
      const Mb = (0, Ub.n)(bb),
        eb = Mb.indexOf(wb);
      return !Mb.slice(eb + 1).some((wb => (0, Ub.v)(bb, wb)))
    }

    function sb(bb, wb, Mb, eb) {
      let {
        tutorial: Hb,
        step: pb,
        waitForClick: Vb = !1,
        onPrevious: gb
      } = bb;
      const lb = wb && (0, Ub.r)(Hb, pb),
        Lb = wb && !Bb(Hb, pb),
        Ob = Vb ? eb : Mb;
      let tb = null;
      lb ? tb = () => {
        null === gb || void 0 === gb || gb(), (0, Ub.o)(Hb, pb)
      } : Lb && (tb = () => {
        (0, Ub.j)(Hb)
      }), (0, Ib.r)("popup", null !== Ob && void 0 !== Ob ? Ob : Mb, tb, wb && null !== Ob, null, lb ? void 0 : "controller:menusSkipTutorial")
    }

    function mb(bb) {
      let {
        tutorial: wb,
        step: Mb,
        text: eb,
        waitForClick: Hb = !1,
        onPrevious: pb
      } = bb;
      const {
        t: Vb
      } = (0, Ob.C)(), gb = Bb(wb, Mb);
      return (0, tb.jsxs)(tb.Fragment, {
        children: [(0, tb.jsx)("div", {
          className: "TutorialStepText",
          children: eb
        }), (0, tb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Ub.r)(wb, Mb) && (0, tb.jsx)(lb.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === pb || void 0 === pb || pb(), (0, Ub.o)(wb, Mb)
            },
            children: Vb("tutorial:back")
          }), !Hb && (0, tb.jsx)(lb.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Ub.f)(Mb)
            },
            padDefaultFocus: !0,
            children: Vb(gb ? "tutorial:done" : "tutorial:next")
          }), !gb && (0, tb.jsx)(lb.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Ub.j)(wb)
            },
            children: Vb("tutorial:skip")
          })]
        })]
      })
    }
    const hb = 6;

    function zb(bb) {
      let {
        rect: wb,
        margin: Mb
      } = bb;
      const eb = Math.max(0, wb.top - Mb),
        Hb = wb.bottom + Mb,
        pb = Math.max(0, wb.left - Mb),
        Vb = wb.right + Mb;
      return (0, tb.jsxs)(tb.Fragment, {
        children: [(0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: eb
          }
        }), (0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Hb,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: eb,
            left: 0,
            width: pb,
            height: Hb - eb
          }
        }), (0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: eb,
            left: Vb,
            right: 0,
            height: Hb - eb
          }
        })]
      })
    }

    function Xb(bb) {
      let {
        target: wb,
        placement: Mb,
        boxRef: eb,
        className: lb,
        spotlight: Ib = !0,
        spotlightMargin: Ob = hb,
        children: Ub
      } = bb;
      const {
        getArrowProps: Cb,
        getTooltipProps: Eb,
        setTooltipRef: Fb,
        setTriggerRef: Bb,
        update: sb
      } = (0, gb.e)({
        placement: Mb,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Ob]
      });
      (0, pb.useLayoutEffect)((() => {
        Bb(wb)
      }), [wb, Bb]);
      const mb = function(bb, wb) {
        const [Mb, eb] = (0, pb.useState)(null);
        return (0, pb.useEffect)((() => {
          if (!wb || !bb) return void eb(null);
          let Mb = 0,
            Hb = null;
          const pb = () => {
            const wb = bb.getBoundingClientRect();
            Hb && wb.left === Hb.left && wb.top === Hb.top && wb.width === Hb.width && wb.height === Hb.height || (Hb = wb, eb(wb)), Mb = requestAnimationFrame(pb)
          };
          return pb(), () => {
            cancelAnimationFrame(Mb)
          }
        }), [bb, wb]), Mb
      }(wb, Ib);
      (0, pb.useEffect)((() => {
        null === sb || void 0 === sb || sb()
      }), [mb, sb]), (0, pb.useEffect)((() => {
        if (Ib || !wb || !sb) return;
        const bb = new ResizeObserver((() => {
          sb()
        }));
        return bb.observe(wb), wb.parentElement && bb.observe(wb.parentElement), () => {
          bb.disconnect()
        }
      }), [wb, Ib, sb]), (0, pb.useEffect)((() => {
        Ib && (null === wb || void 0 === wb || wb.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [wb, Ib]);
      const Xb = (0, pb.useCallback)((bb => {
        Fb(bb), eb && (eb.current = bb)
      }), [Fb, eb]);
      return (0, Vb.createPortal)((0, tb.jsxs)(tb.Fragment, {
        children: [mb && (0, tb.jsx)(zb, {
          rect: mb,
          margin: Ob
        }), (0, tb.jsxs)("div", {
          ref: Xb,
          ...Eb({
            className: Hb()("tooltip-container SmallTextLight TutorialStep", lb)
          }),
          children: [Ub, (0, tb.jsx)("div", {
            ...Cb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Lb.h)())
    }
    const xb = (0, pb.forwardRef)((function(bb, wb) {
      let {
        placement: Mb = "right",
        children: eb,
        ...Hb
      } = bb;
      const Vb = Fb(Hb),
        gb = (0, pb.useRef)(null),
        lb = (0, pb.useRef)(null);
      sb(Hb, Vb, gb, lb);
      const [Lb, Ib] = (0, pb.useState)(null), Ob = eb.ref, Ub = (0, pb.useCallback)((bb => {
        lb.current = bb, Ib(bb), Eb(wb, bb), Eb(Ob, bb)
      }), [wb, Ob]);
      return (0, tb.jsxs)(tb.Fragment, {
        children: [(0, pb.cloneElement)(eb, {
          ref: Ub
        }), Vb && (0, tb.jsx)(Xb, {
          target: Lb,
          placement: Mb,
          boxRef: gb,
          children: (0, tb.jsx)(mb, {
            ...Hb
          })
        })]
      })
    }));

    function jb(bb) {
      const wb = Fb(bb),
        Mb = (0, pb.useRef)(null);
      return sb(bb, wb, Mb, null), wb ? (0, Vb.createPortal)((0, tb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, tb.jsx)("div", {
          ref: Mb,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, tb.jsx)(mb, {
            ...bb
          })
        })
      }), (0, Lb.h)()) : null
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
  39297: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      g: () => eb,
      k: () => gb,
      o: () => Hb,
      q: () => Vb,
      t: () => pb
    });
    const eb = 1.001,
      Hb = .501,
      pb = .025,
      Vb = .75,
      gb = .08,
      lb = 4;

    function Lb() {
      const bb = Hb,
        wb = pb,
        Mb = bb - wb / 2,
        eb = (2 * bb - 2 * wb) / (2 * lb - 1),
        Vb = [];
      for (const Hb of [-Mb, Mb])
        for (const pb of [-Mb, Mb])
          for (let Mb = 0; Mb < lb; Mb++) {
            const gb = -bb + wb + eb * (2 * Mb + .5);
            Vb.push([eb, wb, wb, gb, Hb, pb]), Vb.push([wb, eb, wb, Hb, gb, pb]), Vb.push([wb, wb, eb, Hb, pb, gb])
          }
      for (const Hb of [-Mb, Mb])
        for (const bb of [-Mb, Mb])
          for (const eb of [-Mb, Mb]) Vb.push([wb, wb, wb, Hb, bb, eb]);
      return Vb
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
  39756: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      g: () => gb,
      i: () => lb
    });
    const eb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Hb = [0, 1, 2, 0, 2, 3],
      pb = [4, 5];

    function Vb(bb, wb, Mb, eb, Hb) {
      for (let Vb = 0; Vb < 6; Vb++) pb.includes(Vb) === Hb && Lb(bb, wb, Mb, eb, Vb)
    }

    function gb(bb, wb, Mb, eb) {
      for (let Hb = 0; Hb < 6; Hb++) Lb(bb, wb, Mb, eb, Hb)
    }

    function lb(bb, wb, Mb, pb, Vb) {
      for (let gb = 0; gb < 6; gb++)
        for (const lb of [0, 1]) {
          const [Lb, Ib, Ob] = [lb + 2, lb + 1, (lb + 3) % 4], Ub = bb.length / 3;
          for (const [wb, Hb] of [
              [lb, Ib],
              [Lb, Ib],
              [Lb, Ob],
              [lb, Ob]
            ])
            for (let lb = 0; lb < 3; lb++) {
              const Lb = eb[3 * (4 * gb + wb) + lb],
                Ib = eb[3 * (4 * gb + Hb) + lb];
              bb.push((Lb + (Ib - Lb) * Vb) * pb / 2 + Mb[lb])
            }
          for (const bb of Hb) wb.push(Ub + bb)
        }
    }

    function Lb(bb, wb, Mb, pb, Vb) {
      let [gb, lb, Lb] = Mb, [Ib, Ob, Ub] = pb;
      const tb = bb.length / 3;
      for (let Hb = 4 * Vb; Hb < 4 * Vb + 4; Hb++) bb.push(eb[3 * Hb] * Ib / 2 + gb, eb[3 * Hb + 1] * Ob / 2 + lb, eb[3 * Hb + 2] * Ub / 2 + Lb);
      for (const eb of Hb) wb.push(tb + eb)
    }
  },
  40928: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      e: () => lb,
      h: () => Vb,
      i: () => Lb,
      l: () => Ib
    });
    var eb = Mb(40931),
      Hb = Mb(39756);
    const pb = .35,
      Vb = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      gb = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      lb = [.95, .2, .15];
    class Lb {
      constructor() {
        this.groups = []
      }
      add(bb, wb, Mb, Hb, pb) {
        let Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : eb.c;
        for (const eb of this.groups)
          if (Ub(eb, Hb, pb)) return eb.cells.push(bb, wb, Mb), void eb.boxes.push(Vb);
        this.groups.push({
          rgb: Hb,
          look: pb,
          cells: [bb, wb, Mb],
          boxes: [Vb]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Ib {
      constructor(bb) {
        this.api = bb, this.shown = []
      }
      show(bb) {
        const wb = [];
        for (const Mb of bb) {
          const bb = this.shown.findIndex((bb => {
            let {
              group: wb
            } = bb;
            return Ub(wb, Mb.rgb, Mb.look) && tb(wb, Mb)
          })); - 1 === bb ? wb.push(this.build(Mb)) : (wb.push(this.shown[bb]), this.shown.splice(bb, 1))
        }
        this.dispose(), this.shown = wb
      }
      dispose() {
        for (const {
            meshes: bb
          }
          of this.shown)
          for (const wb of bb) this.api.disposeGameMesh(wb);
        this.shown = []
      }
      build(bb) {
        const {
          rgb: wb,
          look: Mb,
          boxes: eb
        } = bb, Vb = [wb[0] + (1 - wb[0]) * pb, wb[1] + (1 - wb[1]) * pb, wb[2] + (1 - wb[2]) * pb], gb = [this.buildMesh(bb.cells, wb, Mb.alpha, ((bb, wb, Hb, pb) => {
          Ob(bb, wb, Hb, eb[pb], Mb.size, !1)
        })), this.buildMesh(bb.cells, Vb, Mb.alpha, ((bb, wb, Hb, pb) => {
          Ob(bb, wb, Hb, eb[pb], Mb.size, !0)
        }))];
        return Mb.crossed && gb.push(this.buildMesh(bb.cells, wb, .9, ((bb, wb, eb) => {
          (0, Hb.i)(bb, wb, eb, Mb.size + .01, .12)
        }))), {
          group: bb,
          meshes: gb
        }
      }
      buildMesh(bb, wb, Mb, eb) {
        const Hb = [bb[0], bb[1], bb[2]],
          pb = [],
          Vb = [];
        for (let gb = 0; gb < bb.length; gb += 3) eb(pb, Vb, [bb[gb] - Hb[0] + .5, bb[gb + 1] - Hb[1] + .5, bb[gb + 2] - Hb[2] + .5], gb / 3);
        return this.api.createGameMesh({
          positions: pb,
          indices: Vb
        }, {
          rgb: [wb[0], wb[1], wb[2]],
          alpha: Mb
        }, Hb)
      }
    }

    function Ob(bb, wb, Mb, eb, pb, Vb) {
      for (let gb = 0; gb < eb.length; gb += 6) {
        const lb = [0, 0, 0],
          Lb = [0, 0, 0];
        for (let bb = 0; bb < 3; bb++) lb[bb] = Mb[bb] + ((eb[gb + bb] + eb[gb + bb + 3]) / 2 - .5) * pb, Lb[bb] = (eb[gb + bb + 3] - eb[gb + bb]) * pb;
        (0, Hb.c)(bb, wb, lb, Lb, Vb)
      }
    }

    function Ub(bb, wb, Mb) {
      return bb.rgb[0] === wb[0] && bb.rgb[1] === wb[1] && bb.rgb[2] === wb[2] && bb.look === Mb
    }

    function tb(bb, wb) {
      if (bb.cells.length !== wb.cells.length) return !1;
      for (let Mb = 0; Mb < bb.cells.length; Mb++)
        if (bb.cells[Mb] !== wb.cells[Mb]) return !1;
      return bb.boxes.every(((bb, Mb) => bb === wb.boxes[Mb]))
    }
  },
  40935: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Ue
    });
    const eb = [0, 90, 180, 270],
      Hb = "plotsblueprint";
    var pb = Mb(64),
      Vb = Mb(3531),
      gb = Mb(26),
      lb = Mb(1611),
      Lb = Mb(2194),
      Ib = Mb(1259),
      Ob = Mb(1159),
      Ub = Mb.n(Ob),
      tb = Mb(1821),
      Cb = Mb(40939),
      Eb = Mb(37898),
      Fb = Mb(1475),
      Bb = Mb(2130),
      sb = Mb(2190),
      mb = Mb(4800),
      hb = Mb(1965);

    function zb() {}
    const Xb = (0, pb.createContext)({
      hint: null,
      journalRef: zb,
      placementCardRef: zb,
      buildRef: zb
    });
    var xb = Mb(29);
    const jb = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Kb = {
        farm_hut: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHut"
          },
          tier: "small"
        },
        farm_house: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHouse"
          },
          tier: "medium"
        },
        farm_barn: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmBarn"
          },
          tier: "large"
        },
        rusticHome_tent: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeTent"
          },
          tier: "small"
        },
        rusticHome_cabin: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeCabin"
          },
          tier: "medium"
        },
        rusticHome_house: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeHouse"
          },
          tier: "large"
        },
        market_stand: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStand"
          },
          tier: "small"
        },
        market_stall: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStall"
          },
          tier: "medium"
        },
        market_shop: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketShop"
          },
          tier: "large"
        },
        castle_wall: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleWall"
          },
          tier: "small"
        },
        castle_gate: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleGate"
          },
          tier: "large"
        },
        castle_tower: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleTower"
          },
          tier: "large"
        }
      },
      rb = ["small", "medium", "large"].flatMap((bb => jb.flat().filter((wb => Kb[wb].tier === bb))));

    function Rb(bb) {
      return Kb[bb]
    }
    const Db = new Map(jb.flatMap((bb => bb.slice(1).map(((wb, Mb) => [wb, bb[Mb]])))));

    function cb(bb) {
      var wb;
      return null !== (wb = Db.get(bb)) && void 0 !== wb ? wb : null
    }
    const Yb = {
      farm_hut: {
        key: "plotsGame:journalNoteFarmHut",
        firstBuild: !0
      },
      rusticHome_tent: {
        key: "plotsGame:journalNoteRusticHomeTent",
        firstBuild: !1
      },
      castle_tower: {
        key: "plotsGame:journalNoteCastleTower",
        firstBuild: !1
      },
      farm_house: {
        key: "plotsGame:journalNoteFarmHouse",
        firstBuild: !1
      },
      farm_barn: {
        key: "plotsGame:journalNoteFarmBarn",
        firstBuild: !1
      }
    };

    function Zb(bb, wb) {
      const Mb = new Set(bb),
        eb = function(bb) {
          const wb = new Set(bb);
          return new Set(rb.filter((bb => {
            const Mb = cb(bb);
            return null === Mb || wb.has(Mb)
          })))
        }(Mb);
      return rb.map((bb => {
        const Hb = bb === wb;
        if (Mb.has(bb)) return {
          id: bb,
          active: Hb,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const pb = Yb[bb],
          Vb = void 0 === pb || pb.firstBuild && Mb.size > 0 ? null : pb.key;
        return eb.has(bb) ? {
          id: bb,
          active: Hb,
          note: Vb,
          state: "open",
          unlockedBy: null
        } : {
          id: bb,
          active: Hb,
          note: Vb,
          state: "locked",
          unlockedBy: cb(bb)
        }
      }))
    }
    const fb = "plotsJournalChanged";
    class Ab {
      constructor(bb, wb) {
        this.api = bb, this.placement = wb, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.bO(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = bb => {
          this.placement.start(bb), (0, Vb.l)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Hb} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      EO(bb) {
        let [, wb, Mb] = bb;
        this.pages = Zb(wb, Mb), xb.k.iI(fb, this.pages, !0)
      }
      openFromServer(bb) {
        let [, wb] = bb;
        this.openRequested = wb, this.sO()
      }
      sO() {
        const bb = this.openRequested;
        null === bb || gb.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, tb.q)() || (0, hb.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = bb, (0, Vb.y)()))
      }
      bO(bb) {
        this.reported.has(bb) || (this.reported.add(bb), this.api.sendCommand(`${Hb} report ${bb}`))
      }
    }
    var Wb = Mb(1364);
    const Jb = "KeyJ";

    function Sb(bb) {
      let {
        journal: wb
      } = bb;
      const Mb = (0, lb.h)(fb, wb.getPages()),
        {
          isTouchScreen: eb
        } = (0, gb.o)(["isTouchScreen"]),
        {
          t: Hb
        } = (0, Ib.C)(),
        Lb = (0, pb.useContext)(Xb),
        Ob = null !== Mb;
      return (0, pb.useEffect)((() => Ob ? (0, Cb.e)(Jb) : void 0), [Ob]), (0, mb.d)((bb => Ob && bb.code === Jb && !bb.repeat && !(0, hb.isTypingInInput)()), (bb => {
        (0, tb.G)(bb, !0, Vb.y)
      })), null === Mb ? null : (0, Wb.jsx)(Eb.d, {
        placement: "topRight",
        children: (0, Wb.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Wb.jsxs)("button", {
            ref: Lb.journalRef,
            type: "button",
            className: Ub()("PlotsJournalButton SmallTextBold", {
              Touch: eb
            }),
            onClick: Vb.y,
            children: [(0, Wb.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Wb.jsx)(Bb.c, {
                itemName: "Book",
                amount: 0
              })
            }), Hb("plotsGame:journalButton"), !eb && (0, Wb.jsx)(sb.e, {
              className: "PlotsJournalButtonKey",
              keyCode: Jb
            }), "openJournal" === Lb.hint && (0, Wb.jsx)(Fb.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var Nb = Mb(5868);
    const vb = [0, 90, 180, 270],
      Qb = /^(meta\|rot\d)\|([lrud]+)$/,
      Gb = "nesw",
      qb = /^meta\|([nesw]*)\|?(Stacked)?$/,
      ab = function(bb) {
        const wb = new WeakMap;
        return (Mb, eb) => {
          let Hb = wb.get(Mb);
          return void 0 === Hb && (Hb = bb(Mb, eb), wb.set(Mb, Hb)), Hb
        }
      }((bb => new ib(bb)));
    class ib {
      constructor(bb) {
        this.blockMetadata = bb, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const wb = new Set(Object.keys(bb).map((wb => bb[wb].id)));
        wb.add(0), this.maxBlockId = Math.max(...wb)
      }
      static
      for (bb) {
        return ab(bb)
      }
      getBlockIdMapping(bb, wb) {
        const Mb = this.getBlockIdMappingKey(bb, wb);
        let eb = this.blockIdMappings.get(Mb);
        return void 0 === eb && vb.includes(bb) && (eb = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, bb, wb), this.blockIdMappings.set(Mb, eb)), eb
      }
      turnBlockId(bb, wb, Mb) {
        return this.mapBlockId(this.blockMetadata[bb], wb, this.getRotationMapping(wb, Mb), Mb)
      }
      getBlockIdMappingKey(bb, wb) {
        return `r${bb}|m${Number(wb)}`
      }
      createBlockIdMapping(bb, wb, Mb, eb) {
        const Hb = new Uint16Array(wb + 1),
          pb = this.getRotationMapping(Mb, eb);
        for (const Vb in bb) {
          const wb = bb[Vb];
          Hb[wb.id] = this.mapBlockId(wb, Mb, pb, eb)
        }
        return Hb
      }
      getRotationMapping(bb, wb) {
        const Mb = Math.round(bb / 90),
          eb = new Uint8Array(4);
        for (let Hb = 0; Hb < 4; Hb++) eb[Hb] = (4 + Hb - Mb) % 4;
        if (wb) {
          let bb = eb[0];
          eb[0] = eb[1], eb[1] = bb, bb = eb[2], eb[2] = eb[3], eb[3] = bb
        }
        return eb
      }
      mapBlockId(bb, wb, Mb, eb) {
        var Hb;
        const {
          blockMetadata: pb
        } = this, Vb = Math.round(wb / 90), {
          id: gb,
          meta: lb
        } = bb, {
          rot: Lb,
          rootName: Ib,
          metaStr: Ob
        } = lb;
        let Ub;
        const [, tb, Cb] = null !== (Hb = qb.exec(Ob)) && void 0 !== Hb ? Hb : [];
        if (void 0 !== tb) {
          var Eb, Fb;
          Ub = null !== (Eb = null === (Fb = pb[`${Ib}|meta|${[Gb.split("").filter(((bb,wb)=>tb.split("").some((bb=>{const Mb=Gb.indexOf(bb);return((eb?3-Mb:Mb)+Vb)%4===wb})))).join(""),Cb].filter(Boolean).join("|")}`]) || void 0 === Fb ? void 0 : Fb.id) && void 0 !== Eb ? Eb : gb
        } else if (null === Lb) Ub = gb;
        else {
          var Bb, sb;
          const bb = Mb[Lb - 1] + 1;
          let wb = Ob.replace(`rot${Lb}`, `rot${bb}`);
          eb && lb.stairsCorner && (wb = wb.replace(/(Left|Right)$/, (bb => "Left" === bb ? "Right" : "Left"))), eb && "Chest" === Ib && (wb = wb.replace(/\|(left|right)$/, ((bb, wb) => "left" === wb ? "|right" : "|left")));
          const Hb = Qb.exec(wb);
          if (eb && null !== Hb) {
            const bb = "lrud".split("").filter((bb => Hb[2].includes("l" === bb ? "r" : "r" === bb ? "l" : bb)));
            wb = `${Hb[1]}|${bb.join("")}`
          }
          const Vb = `${Ib}|${wb}`;
          if (Ub = null !== (Bb = null === (sb = pb[Vb]) || void 0 === sb ? void 0 : sb.id) && void 0 !== Bb ? Bb : null, null === Ub) {
            const bb = pb[Ib];
            Ub = bb.rootMetaDesc === Vb ? bb.id : gb
          }
        }
        return Ub
      }
    }

    function ub(bb, wb, Mb) {
      let {
        xRotationMappedOrigin: eb,
        shouldSwapXZ: Hb
      } = Mb;
      const pb = Hb ? wb : bb;
      return null === eb ? pb : eb - pb
    }

    function db(bb, wb, Mb) {
      let {
        zRotationMappedOrigin: eb,
        shouldSwapXZ: Hb
      } = Mb;
      const pb = Hb ? bb : wb;
      return null === eb ? pb : eb - pb
    }
    const Pb = {
        farm_hut: {
          size: [7, 7, 7],
          palette: ["Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Barkless Pine Log", "Maple Wood Planks", "Smooth Stone"],
          layers: ["....... .cbhbc. .bgggb. .bgggb. .bgggb. .cbbbc. .......", "....... .cd.dc. .d...d. .d...d. .d...d. .cdddc. .......", "....... .cd.dc. .d...d. .e...d. .d...d. .cdddc. .......", "aa...aa bfdadfb bd...db bd...db bd...db bfdddfb aa...aa", ".aa.aa. .bbdbb. .bb.bb. .bb.bb. .bb.bb. .bbdbb. .aa.aa.", "..aaa.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..aaa..", "...a... ...b... ...b... ...b... ...b... ...b... ...a..."]
        },
        rusticHome_tent: {
          size: [7, 6, 7],
          palette: ["Barkless Pine Log", "White Wool", "Pine Wood Planks"],
          layers: ["a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "cc.a.cc b.....b b.....b b.....b b.....b b.....b cc.a.cc", ".ccacc. .b...b. .b...b. .b...b. .b...b. .b...b. .ccacc.", "..ccc.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..ccc..", "...c... ...b... ...b... ...b... ...b... ...b... ...c..."]
        },
        market_stand: {
          size: [7, 4, 4],
          palette: ["Barkless Pine Log", "Pine Wood Planks", "White Wool", "Green Wool"],
          layers: ["a.bbbba ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "bcdcdcb bcdcdcb bcdcdcb bcdcdcb"]
        },
        castle_wall: {
          size: [8, 7, 2],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks"],
          layers: ["aaaaaaaa aaaaaaaa", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "cccccccc bbbbbbbb", "........ bbbbbbbb", "........ bb.bb.bb"]
        },
        farm_house: {
          size: [13, 10, 11],
          palette: ["Aspen Wood Planks", "Messy Stone", "Stone Bricks", "Smooth Stone", "Barkless Aspen Log", "Red Planks", "Maple Wood Planks", "Glass"],
          layers: ["............. .cbbdbbc..dcd .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .cbbbbbcccccd .............", "............. .dbb.bbd..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b........... .b.....b..... .dbbbbbd..... .............", "............. .eff.ffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f........... .f.....f..... .effhffe..... .............", "............. .effaffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....a..... .f.....f..... .effhffe..... .............", "............. .efffffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .effaffe..... .............", "aa.....aa.... beaaaaaeb.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... beaaaaaeb.... aa.....aa....", ".aa...aa..... .bfffffb..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .bfffffb..... .aa...aa.....", "..aa.aa...... ..bfffb...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..bfffb...... ..aa.aa......", "...aaa....... ...bfb....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...bfb....... ...aaa.......", "....a........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....a........"]
        },
        rusticHome_cabin: {
          size: [11, 10, 11],
          palette: ["Pine Wood Planks", "Messy Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["........... .cbbbcbbbc. .bdddddddb. .bdddddddb. .bdddddddb. .cdddddddc. .bdddddddb. .bdddddddb. .bdddddddb. .cbbbcbbbc. ...........", "........... .cb.bcbbbc. .b.......b. .b.......b. .b.......b. .c.......c. .b.......b. .b.......b. .b.......b. .cbbbcbbbc. ...........", "........... .cd.dcdedc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdedcdedc. ...........", "........... .cdddcdddc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdddcdddc. ...........", "aa.......aa baaaaaaaaab ba.......ab ba.......ab ba.......ab aa.......aa ba.......ab ba.......ab ba.......ab baaaaaaaaab aa.......aa", ".aa.....aa. .bdddcdddb. .b.......b. .b.......b. .b.......b. .a.......a. .b.......b. .b.......b. .b.......b. .bdddcdddb. .aa.....aa.", "..aa...aa.. ..bddcddb.. ..b.....b.. ..b.....b.. ..b.....b.. ..a.....a.. ..b.....b.. ..b.....b.. ..b.....b.. ..bddcddb.. ..aa...aa..", "...aa.aa... ...bdcdb... ...b...b... ...b...b... ...b...b... ...a...a... ...b...b... ...b...b... ...b...b... ...bdcdb... ...aa.aa...", "....aaa.... ....bcb.... ....b.b.... ....b.b.... ....b.b.... ....a.a.... ....b.b.... ....b.b.... ....b.b.... ....bcb.... ....aaa....", ".....a..... .....b..... .....b..... .....b..... .....b..... .....a..... .....b..... .....b..... .....b..... .....b..... .....a....."]
        },
        market_stall: {
          size: [11, 8, 9],
          palette: ["Pine Wood Planks", "Barkless Pine Log", "Messy Stone", "Maple Wood Planks", "Orange Planks", "White Wool", "Orange Wool"],
          layers: ["..bcccccb.. ..cdddddc.. ..cdddddc.. .bcdddddcb. .cdddddddc. .cdddddddc. .cdddddddc. .bcccccccb. ...........", "..b.....b.. ........... ........... .bdddddddb. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bd.....db. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bdaaaaadb. .d.......d. .d.......a. .d.......d. .bdddddddb. ...........", "..afgfgfa.. ..afgfgfa.. aeafgfgfaea abdddddddba .ddddddddd. .ddddddddd. .ddddddddd. abdddddddba aeeeeeeeeea", "........... ........... ........... aeeeeeeeeea ad.......da .d.......d. ad.......da aeeeeeeeeea ...........", "........... ........... ........... ........... aeeeeeeeeea ad.......da aeeeeeeeeea ........... ...........", "........... ........... ........... ........... ........... aeeeeeeeeea ........... ........... ..........."]
        },
        farm_barn: {
          size: [21, 13, 17],
          palette: ["Smooth Stone", "Stone Bricks", "Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["..................... aba..bbbbbabbbbb..aba b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b aba..bbbbbbbbbbb..aba .....................", "..................... .....aaaaa.aaaaa..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a....i....a..... .....aaaaaaaaaaa..... .....................", "..................... .....effef.feffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefcfeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....c.........c..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....ecccccccccc..... .....f.........f..... .....f.........f..... .....f.........f..... .....eccccccccce..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "....cc.........cc.... ....deccecccecced.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhihhhhcd.... ....deccecccecced.... ....cc.........cc....", ".....c.........c..... .....dffefffeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d....i....d..... .....dffefffeffd..... .....c.........c.....", ".....c.........c..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....c.........c.....", ".....cc.......cc..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....cc.......cc.....", "......cc.....cc...... ......dfefcfefd...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......dfefcfefd...... ......cc.....cc......", ".......ccc.ccc....... .......ddfffdd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......ddfffdd....... .......ccc.ccc.......", ".........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc........."]
        },
        rusticHome_house: {
          size: [17, 14, 15],
          palette: ["Pine Wood Planks", "Stone Bricks", "Smooth Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["................. .....cbbbbbc..... .....beeeeeb..... .....beeeeeb..... .cbbbbeeeeebbbbc. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .cbbbeeeeeeebbbc. .....beeeeeb..... .....beeeeeb..... .....cbbbbbc..... .................", "................. .....cbb.bbc..... .....b.....b..... .....b.....b..... .cbbbd.....dbbbc. .b.............b. .b.............b. .b.............b. .b.............b. .b.............b. .cbbbdeed..dbbbc. .....b.....b..... .....b.....b..... .....cbbbbbc..... .................", "................. .....dee.eed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....eee...e..... .....eee...e..... .....deeeeed..... .................", "................. .....deeaeed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....e..e..e..... .....e..e..e..... .....deeeeed..... .................", "................. .....deeeeed..... .....e.....e..... .....e.....e..... .deeed.....deeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .deeed..d..deeed. .....e...eee..... .....e...eee..... .....deeeeed..... .................", "................. .....aaaaaaa..... .....aeeeeea..... aa...aeeeeea...aa baaaaaaaaaaaaaaab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baaaaaaadaaaaaaab aa...a.....a...aa .....a.....a..... .....aaaaaaa..... .................", "................. .....deeeeed..... .....e.....e..... .aa..e.....e..aa. .beeed.....deeeb. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .beeed..d..deeeb. .aa..e.....e..aa. .....e.....e..... .....deeeeed..... .................", "................. .....defefed..... .....e.....e..... ..aa.e.....e.aa.. ..beed.....deeb.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..beed.....deeb.. ..aa.e.....e.aa.. .....e.....e..... .....defefed..... .................", "................. .....deeeeed..... .....e.....e..... ...aae.....eaa... ...bed.....deb... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...bed.....deb... ...aae.....eaa... .....e.....e..... .....deeeeed..... .................", "....aa.....aa.... ....baaaaaaab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....baaaaaaab.... ....aa.....aa....", ".....aa...aa..... .....beeeeeb..... .....b.....b..... .....a.....a..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....a.....a..... .....b.....b..... .....beeeeeb..... .....aa...aa.....", "......aa.aa...... ......beeeb...... ......b...b...... ......a...a...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......a...a...... ......b...b...... ......beeeb...... ......aa.aa......", ".......aaa....... .......beb....... .......b.b....... .......a.a....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......a.a....... .......b.b....... .......beb....... .......aaa.......", "........a........ ........b........ ........b........ ........a........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........a........ ........b........ ........b........ ........a........"]
        },
        market_shop: {
          size: [17, 16, 12],
          palette: ["Pine Wood Planks", "Smooth Stone", "Stone Bricks", "Barkless Pine Log", "Maple Wood Planks", "Blue Planks", "Glass", "White Wool", "Blue Wool", "Maple Ladder|meta|rot3"],
          layers: [".....bcccccb..... .....ccccccc..... .....ccccccc..... .....ccccccc..... .bcccbcccccbcccb. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ccccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .bc.cbcccccbc.cb. .c.............c. .c.............c. .c.............c. .c.............c. .c.......j.....c. .bcccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .de.ed.....de.ed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .degedeeeeedeged. .................", ".....d.....d..... ................. ................. ................. .deaedaaaaadeaed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deaedeeeeedeaed. .................", ".....ahihiha..... .....ahihiha..... .....ahihiha..... .....ahihiha..... .deeedeeeeedeeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deeedeeeeedeeed. .................", "................. ................. ................. afffffffffffffffa aaaaaaaaaaaaaaaaa .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeejeaeeea. aaaaaaaaaaaaaaaaa affffa.....affffa", "................. ................. ................. ................. affffdeeeeedffffa ae...e.....e...ea .e...e.....e...e. .e...e.....e...e. .e...e.....e...e. ae...e...j.e...ea affffdeeeeedffffa .................", "................. ................. ................. ................. .....degeged..... affffe.....effffa ae...e.....e...ea .e...e.....e...e. ae...e.....e...ea affffe.....effffa .....degeged..... .................", "................. ................. ................. ................. .....degeged..... .....e.....e..... affffe.....effffa ae...e.....e...ea affffe.....effffa .....e.....e..... .....degeged..... .................", "................. ................. ................. ................. .....deaeaed..... .....e.....e..... .....e.....e..... affffe.....effffa .....e.....e..... .....e.....e..... .....deaeaed..... .................", "................. ................. ................. ................. .....deeeeed..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....deeeeed..... .................", "................. ................. ................. ....aa.....aa.... ....faaaaaaaf.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....faaaaaaaf.... ....aa.....aa....", "................. ................. ................. .....aa...aa..... .....feeeeef..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....feeeeef..... .....aa...aa.....", "................. ................. ................. ......aa.aa...... ......feeef...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......feeef...... ......aa.aa......", "................. ................. ................. .......aaa....... .......fef....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......fef....... .......aaa.......", "................. ................. ................. ........a........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........a........"]
        },
        castle_gate: {
          size: [17, 11, 5],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["...aaa.....aaa... .d.a.a.....a.a.d. aaaa.a.....a.aaaa aaaa.a.....a.aaaa ...aaa.....aaa...", "...bbb.....bbb... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...bbb.....bbb...", "...abb.....bba... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...abb.....bba...", "...bbbb...bbbb... .d.b.bc...cb.b.d. bbbb.bc...cb.bbbb bbbb.bc...cb.bbbb ...bbbb...bbbb...", "...abbbbbbbbba... .d.bcccccccccb.d. ccccccccccccccccc bbbbcccccccccbbbb ...abbbbbbbbba...", "...bbabbabbabb... ...b.........b... ................. bbbb.........bbbb ...bbabbabbabb...", "...ab.bb.bb.ba... ...b.........b... ................. bb.b.........b.bb ...ab.bb.bb.ba...", "...bbabbabbabb... ...b.........b... ...a.........a... ...b.........b... ...bbabbabbabb...", "...abbbbbbbbba... ...bcccccccccb... ...bcccccccccb... ...bcccccccccb... ...abbbbbbbbba...", "...bbbbbbbbbbb... ...b.........b... ...b.........b... ...b.........b... ...bbbbbbbbbbb...", "...ab.bb.bb.ba... ...b.........b... ................. ...b.........b... ...ab.bb.bb.ba..."]
        },
        castle_tower: {
          size: [9, 20, 9],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Barkless Pine Log", "Red Wool", "Maple Ladder|meta|rot3"],
          layers: ["aaaaaaaaa accccccca accccccca accccccca accccccca accccccca accccccca accccccca aaaaaaaaa", "bbbb.bbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbb.bbba b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b abbbbbbba", "bbbbabbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbbbbbb b.......b b.......b b.......b b...d...b b.......b b.......b b.......b bbbbbbbbb", "ab.bbb.ba b.......b ......... b.......b b...d...b b.......b ......... b.......b ab.bbb.ba", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....a.... ......... ......... ......... ........."]
        }
      },
      nb = new Map;

    function yb(bb, wb) {
      const Mb = `${bb}|${wb}`;
      let eb = nb.get(Mb);
      if (void 0 === eb) {
        const {
          size: Hb,
          palette: pb,
          layers: Vb
        } = Pb[bb], gb = 90 === wb || 270 === wb, [lb, Lb] = gb ? [Hb[2], Hb[0]] : [Hb[0], Hb[2]], Ib = function(bb, wb, Mb) {
          let eb = null,
            Hb = null,
            pb = !1;
          switch (bb) {
            case 0:
              break;
            case 90:
              eb = wb - 1, pb = !0;
              break;
            case 180:
              eb = wb - 1, Hb = Mb - 1;
              break;
            case 270:
              Hb = Mb - 1, pb = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${bb}`)
          }
          return {
            xRotationMappedOrigin: eb,
            zRotationMappedOrigin: Hb,
            shouldSwapXZ: pb
          }
        }(wb, lb, Lb), Ob = ib.for(Nb.g), Ub = pb.map((bb => (0, Nb.f)(Ob.turnBlockId((0, Nb.i)(bb), wb, !1)))), tb = [];
        Vb.forEach(((bb, wb) => {
          bb.split(" ").forEach(((bb, Mb) => {
            for (let eb = 0; eb < bb.length; eb++)
              if ("." !== bb[eb]) {
                const Hb = [ub(eb, Mb, Ib), wb, db(eb, Mb, Ib)];
                tb.push({
                  offset: Hb,
                  block: Ub[bb.charCodeAt(eb) - "a".charCodeAt(0)]
                })
              }
          }))
        })), eb = {
          size: [lb, Hb[1], Lb],
          cells: tb
        }, nb.set(Mb, eb)
      }
      return eb
    }
    const ob = "plotsBuildProgressChanged",
      Tb = new Map;

    function kb(bb, wb, Mb) {
      let eb = 0,
        Hb = 0;
      return function(bb) {
        let wb = Tb.get(bb);
        if (void 0 === wb) {
          const eb = [];
          for (const {
              offset: wb
            }
            of yb(bb, 0).cells) {
            var Mb;
            eb[wb[1]] = (null !== (Mb = eb[wb[1]]) && void 0 !== Mb ? Mb : 0) + 1
          }
          wb = eb, Tb.set(bb, wb)
        }
        return wb
      }(bb).forEach(((bb, Mb) => {
        eb += bb, Mb > wb && (Hb += bb)
      })), {
        id: bb,
        filled: eb - Hb - Mb,
        total: eb
      }
    }
    class bw {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(bb) {
        this.shown = bb, this.topOpen = 0, null === bb && this.iI(null)
      }
      update(bb, wb, Mb) {
        const eb = this.shown;
        null !== eb && (bb >= wb && (this.topOpen = Mb), this.iI(kb(eb.id, wb - eb.y, bb >= wb ? Mb : this.topOpen + Mb)))
      }
      iI(bb) {
        const wb = this.progress;
        (null === bb || void 0 === bb ? void 0 : bb.id) === (null === wb || void 0 === wb ? void 0 : wb.id) && (null === bb || void 0 === bb ? void 0 : bb.filled) === (null === wb || void 0 === wb ? void 0 : wb.filled) && (null === bb || void 0 === bb ? void 0 : bb.total) === (null === wb || void 0 === wb ? void 0 : wb.total) || (this.progress = bb, xb.k.iI(ob, bb, !0))
      }
    }
    const ww = "plotsPlotChanged",
      Mw = "plotsGuideChanged",
      ew = "plotsGuideDone";
    class Hw {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(bb) {
        this.plot = bb, xb.k.iI(ww, bb, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(bb) {
        this.guide = bb, xb.k.iI(Mw, bb, !0)
      }
      receiveGuideDone() {
        xb.k.iI(ew, void 0, !0)
      }
    }
    var pw = Mb(1350),
      Vw = Mb(39804),
      gw = Mb(38095),
      lw = Mb(1646);

    function Lw(bb) {
      let {
        onSkip: wb,
        className: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ib.C)();
      return (0, Wb.jsx)("button", {
        type: "button",
        className: Ub()("PlotsGuideSkipButton", Mb),
        ...(0, lw.e)(wb, "pointerup"),
        children: eb("tutorial:skip")
      })
    }

    function Iw(bb) {
      let {
        target: wb,
        placement: Mb,
        spotlight: eb = null,
        children: Hb
      } = bb;
      const {
        t: Vb
      } = (0, Ib.C)(), gb = (0, pb.useRef)(wb);
      return gb.current = wb, (0, pw.r)("popup", gb, null === eb ? null : eb.onSkip, null !== eb, null, "controller:menusSkipTutorial"), (0, Wb.jsxs)(gw.f, {
        target: wb,
        placement: Mb,
        className: Ub()("PlotsGuideBubble", {
          Passive: null === eb
        }),
        spotlight: null !== eb,
        spotlightMargin: 30,
        children: [(0, Wb.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, Wb.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: Vw,
            alt: "",
            draggable: !1
          }), (0, Wb.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: Vb("plotsGame:maverickName")
          }), null !== eb && (0, Wb.jsx)(Lw, {
            onSkip: eb.onSkip
          })]
        }), (0, Wb.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: Hb
        })]
      })
    }

    function Ow(bb) {
      let {
        className: wb,
        icon: Mb,
        title: eb,
        children: Hb
      } = bb;
      return (0, Wb.jsxs)("div", {
        className: Ub()("PlotsCard", wb),
        role: "status",
        children: [(0, Wb.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, Wb.jsx)(Fb.b, {
            name: Mb
          })
        }), (0, Wb.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, Wb.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: eb
          }), Hb]
        })]
      })
    }

    function Uw(bb) {
      let {
        progress: wb,
        goal: Mb
      } = bb;
      const eb = Math.min(wb, Mb);
      return (0, Wb.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Wb.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Mb,
          "aria-valuenow": eb,
          children: (0, Wb.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${eb/Mb})`
            }
          })
        }), (0, Wb.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [eb, "/", Mb]
        })]
      })
    }

    function tw(bb) {
      let {
        progress: wb,
        guide: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ib.C)(), {
        isTouchScreen: Hb
      } = (0, gb.o)(["isTouchScreen"]), pb = wb.filled < 5;
      return (0, Wb.jsxs)(Wb.Fragment, {
        children: [(pb || wb.total - wb.filled <= 5) && (0, Wb.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, Wb.jsx)("div", {
            ref: Mb.bindHand,
            className: "PlotsGuideHand",
            children: (0, Wb.jsx)(Fb.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, Wb.jsx)(Eb.d, {
          placement: "bottom",
          children: (0, Wb.jsxs)(Ow, {
            icon: "hammer",
            title: eb(Rb(wb.id).displayName.translationKey),
            children: [pb && (0, Wb.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: Hb ? eb("plotsGame:guideBuildTouch") : Cw(eb)
            }), (0, Wb.jsx)(Uw, {
              progress: wb.filled,
              goal: wb.total
            })]
          })
        })]
      })
    }

    function Cw(bb) {
      const wb = Lb.p["alt-fire"][0];
      return "Mouse3" === wb ? bb("plotsGame:guideBuildRightClick") : bb("plotsGame:guideBuildKeys", {
        key: (0, Lb.m)(wb)
      })
    }

    function Ew() {
      return (0, Wb.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, Wb.jsx)(Fb.b, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var Fw = Mb(1373),
      Bw = Mb(3778),
      sw = Mb(39633),
      mw = Mb(39406),
      hw = Mb(38139),
      zw = Mb(5901),
      Xw = Mb(5923),
      xw = Mb(382),
      jw = Mb(39047);
    const Kw = new Map([
        ["Aspen Wood Planks", [.78, .706, .502]],
        ["Barkless Aspen Log", [.792, .718, .518]],
        ["Barkless Pine Log", [.49, .353, .275]],
        ["Blue Planks", [.247, .267, .588]],
        ["Blue Wool", [.227, .267, .651]],
        ["Glass", [.702, .902, .882]],
        ["Green Wool", [.373, .467, .125]],
        ["Maple Ladder", [.612, .471, .29]],
        ["Maple Wood Planks", [.682, .561, .353]],
        ["Messy Stone", [.557, .58, .608]],
        ["Orange Planks", [.949, .549, .231]],
        ["Orange Wool", [.988, .522, .129]],
        ["Pine Wood Planks", [.475, .341, .263]],
        ["Red Planks", [.608, .2, .184]],
        ["Red Wool", [.69, .173, .145]],
        ["Smooth Stone", [.627, .651, .678]],
        ["Stone Bricks", [.522, .545, .573]],
        ["White Wool", [.98, .98, .98]]
      ]),
      rw = [...hw.b.blockRemoveActionRoots, ...mw.b, ...zw.i, "Board", "Code Block", "Custom Lobby Block"],
      Rw = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Dw = null;

    function Yw() {
      return Dw ??= function() {
        const bb = Zw(),
          wb = Math.max(...bb.map((bb => Nb.g[bb].id))) + 1,
          Mb = new Int32Array(wb),
          eb = new Int32Array(wb),
          Hb = new Uint8Array(wb).fill(1),
          pb = new Uint8Array(wb),
          Vb = new Uint8Array(wb),
          gb = new Array(wb).fill("Air"),
          lb = new Map,
          Lb = bb => {
            let wb = lb.get(bb);
            return void 0 === wb && (wb = lb.size + 1, lb.set(bb, wb)), wb
          },
          Ib = new Set(rw);
        for (const Ub of bb) {
          var Ob;
          const {
            id: bb,
            meta: wb,
            altActionable: lb,
            canBePlacedOver: tb
          } = Nb.g[Ub];
          Mb[bb] = Lb(fw(Ub));
          const Cb = wb.stairsCorner;
          if (null === Cb) eb[bb] = Mb[bb];
          else {
            const Mb = Cb.endsWith("Right");
            eb[bb] = Lb(`${wb.rootName}|rot${Mb?wb.rot%4+1:wb.rot}|${wb.halfblockPlacement}|${Cb.replace("Right","Left")}`)
          }
          Hb[bb] = tb ? 1 : 0, pb[bb] = lb || null !== wb.open || Ub in jw.d || Ib.has(wb.rootName) || void 0 !== (0, mw.f)(wb.rootName) ? 1 : 0;
          const {
            rootName: Eb
          } = wb;
          Vb[bb] = null !== wb.open || mw.b.includes(Eb) || Eb.includes("Bookshelf") || Eb.includes("Mailbox") ? 1 : 0, gb[bb] = null !== (Ob = (0, sw.g)(bb)) && void 0 !== Ob ? Ob : Eb
        }
        return {
          kinds: Mb,
          shapes: eb,
          empty: Hb,
          inUse: pb,
          ownAltActionMessage: Vb,
          placingItems: gb
        }
      }(), Dw
    }

    function Zw() {
      return Object.keys(Nb.g).filter((bb => Nb.g[bb].name === bb))
    }

    function fw(bb) {
      var wb;
      const Mb = Nb.g[bb],
        {
          rootName: eb,
          rot: Hb
        } = Mb.meta,
        [, ...pb] = (null !== (wb = Mb.rootMetaDesc) && void 0 !== wb ? wb : bb).split("|"),
        Vb = pb.filter((bb => !("meta" === bb || Rw.test(bb) || (0, Xw.v)(Mb) && /^[nesw]+$/.test(bb) || zw.i.includes(eb) && /^[lrud]+$/.test(bb) || xw.M.includes(eb) && /^(left|right)$/.test(bb))));
      return [eb, ...Vb].map((bb => "fenceGate" === Mb.model && bb === `rot${Hb}` ? "rot" + ((Hb - 1) % 2 + 1) : bb)).join("|")
    }

    function Aw(bb, wb) {
      const {
        kinds: Mb,
        shapes: eb
      } = Yw();
      return Mb[bb] === Mb[wb] || eb[bb] === eb[wb]
    }

    function Ww(bb) {
      return 1 === Yw().empty[bb]
    }

    function Jw(bb) {
      return Yw().placingItems[bb]
    }

    function Sw(bb) {
      return Kw.get(Nb.g[bb].meta.rootName)
    }
    var Nw = Mb(40931),
      vw = Mb(225);
    class Qw {
      constructor(bb) {
        this.api = bb, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(bb) {
        const wb = vw.e.gO;
        this.chunks = [];
        for (let Mb = 0; Mb < bb.length; Mb += 3) {
          const eb = Math.floor(bb[Mb] / wb),
            Hb = Math.floor(bb[Mb + 1] / wb),
            pb = Math.floor(bb[Mb + 2] / wb);
          this.watches(eb, Hb, pb) || this.chunks.push(eb, Hb, pb)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const bb = performance.now();
        if (bb - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = bb;
        let wb = !1;
        for (let Mb = 0; Mb < this.chunks.length; Mb += 3) {
          const bb = this.api.getChunkVersion(this.chunks[Mb], this.chunks[Mb + 1], this.chunks[Mb + 2]);
          this.versions[Mb / 3] !== bb && (this.versions[Mb / 3] = bb, wb = !0)
        }
        return wb
      }
      watches(bb, wb, Mb) {
        for (let eb = 0; eb < this.chunks.length; eb += 3)
          if (this.chunks[eb] === bb && this.chunks[eb + 1] === wb && this.chunks[eb + 2] === Mb) return !0;
        return !1
      }
    }
    var Gw = Mb(40928);

    function qw(bb, wb, Mb, eb, Hb) {
      if (!bb.isBlockInLoadedChunk(wb, eb - 6, Mb) || !bb.isBlockInLoadedChunk(wb, eb + 6 + Hb, Mb) || !bb.canModifyBlockAt(wb, eb, Mb)) return NaN;
      let pb = eb - 1;
      if (0 !== bb.getBlockId(wb, pb, Mb)) {
        for (; pb < eb + 6 && 0 !== bb.getBlockId(wb, pb + 1, Mb);) pb++;
        return pb
      }
      for (; pb > eb - 6;)
        if (pb--, 0 !== bb.getBlockId(wb, pb, Mb)) return pb;
      return NaN
    }

    function aw(bb, wb, Mb, eb, Hb) {
      let pb = 0;
      for (let Vb = eb + 1; Vb <= eb + Hb; Vb++) 0 !== bb.getBlockId(wb, Vb, Mb) && pb++;
      return pb
    }

    function iw(bb) {
      const wb = new Map;
      for (const Vb of bb) {
        var Mb;
        if (Number.isNaN(Vb)) return null;
        wb.set(Vb, (null !== (Mb = wb.get(Vb)) && void 0 !== Mb ? Mb : 0) + 1)
      }
      let eb = NaN,
        Hb = 0;
      for (const [Vb, gb] of wb)(gb > Hb || gb === Hb && Vb < eb) && (eb = Vb, Hb = gb);
      let pb = 0;
      for (const Vb of bb) pb += Math.abs(Vb - eb);
      return pb
    }

    function uw(bb, wb, Mb, eb) {
      const {
        eye: Hb,
        forward: pb,
        tanHalfFovX: Vb,
        tanHalfFovY: gb
      } = bb, [lb, Lb] = function(bb) {
        let [wb, Mb, eb] = bb;
        const Hb = Math.hypot(wb, eb),
          [pb, Vb] = [eb / Hb, -wb / Hb];
        return [
          [pb, 0, Vb],
          [Mb * Vb, eb * pb - wb * Vb, -Mb * pb]
        ]
      }(pb), [Ib, Ob] = [wb * Vb, Mb * gb], Ub = pb[0] + Ib * lb[0] + Ob * Lb[0], tb = pb[1] + Ob * Lb[1], Cb = pb[2] + Ib * lb[2] + Ob * Lb[2], Eb = (eb - Hb[1]) / tb;
      return Eb > 0 && Eb < 1 / 0 ? [Hb[0] + Eb * Ub, Hb[2] + Eb * Cb] : null
    }
    const dw = "plotsBlueprintPlacementChanged",
      Pw = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class nw {
      constructor(bb, wb) {
        this.api = bb, this.localPlayerId = wb, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = bb => {
          var wb, Mb, eb, pb;
          const Vb = null !== (wb = null === (Mb = this.placing) || void 0 === Mb ? void 0 : Mb.rotation) && void 0 !== wb ? wb : 0,
            {
              size: gb
            } = yb(bb, Vb),
            lb = this.api.Qm(this.localPlayerId),
            [Lb, Ib] = null !== (eb = null !== (pb = function(bb, wb, Mb, eb) {
              const [Hb, pb, Vb] = wb, [gb, lb, Lb] = [Math.floor(Mb[0]), Math.floor(Mb[1]), Math.floor(Mb[2])], Ib = 6 + Math.max(Hb, Vb) / 2, [Ob, Ub] = [Math.ceil(Ib + Hb / 2), Math.ceil(Ib + Vb / 2)], [tb, Cb] = [gb - Ob, Lb - Ub], [Eb, Fb] = [2 * Ob + 1, 2 * Ub + 1], Bb = new Float64Array(Eb * Fb), sb = new Uint16Array(Eb * Fb);
              for (let xb = 0; xb < Eb; xb++)
                for (let wb = 0; wb < Fb; wb++) {
                  const Mb = qw(bb, tb + xb, Cb + wb, lb, pb);
                  Bb[xb * Fb + wb] = Mb, Number.isNaN(Mb) || (sb[xb * Fb + wb] = aw(bb, tb + xb, Cb + wb, Mb, pb))
                }
              const mb = Math.hypot(eb[0], eb[2]),
                hb = [];
              let zb = null,
                Xb = 1 / 0;
              for (let xb = 0; xb + Hb <= Eb; xb++)
                for (let bb = 0; bb + Vb <= Fb; bb++) {
                  const [wb, pb] = [tb + xb, Cb + bb], [lb, Ob] = [wb + Hb / 2 - Mb[0], pb + Vb / 2 - Mb[2]], Ub = Math.hypot(lb, Ob);
                  if (Ub > Ib || gb >= wb - 2 && gb < wb + Hb + 2 && Lb >= pb - 2 && Lb < pb + Vb + 2) continue;
                  hb.length = 0;
                  let Eb = 0;
                  for (let Mb = 0; Mb < Hb; Mb++)
                    for (let wb = 0; wb < Vb; wb++) hb.push(Bb[(xb + Mb) * Fb + bb + wb]), Eb += sb[(xb + Mb) * Fb + bb + wb];
                  const jb = iw(hb);
                  if (null === jb) continue;
                  const Kb = Ub + 3 * (jb + Eb) + (1 - (0 === mb ? 1 : (lb * eb[0] + Ob * eb[2]) / (Ub * mb))) / 2 * 6;
                  Kb < Xb && (Xb = Kb, zb = [wb, pb])
                }
              return zb
            }(this.api, gb, lb, this.camera.forward)) && void 0 !== pb ? pb : this.cornerOnTarget(gb)) && void 0 !== eb ? eb : [Math.floor(lb[0]) + 2, Math.floor(lb[2])];
          this.placing = {
            id: bb,
            rotation: Vb,
            corner: [Lb, this.playerLevel(), Ib],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${Hb} preview`)
        }, this.rotate = () => {
          const {
            id: bb,
            rotation: wb,
            corner: Mb
          } = this.placing, Hb = eb[(eb.indexOf(wb) + 1) % eb.length], [pb, , Vb] = yb(bb, wb).size, [gb, , lb] = yb(bb, Hb).size;
          this.moveTo(Mb[0] + Math.floor(pb / 2) - Math.floor(gb / 2), Mb[2] + Math.floor(Vb / 2) - Math.floor(lb / 2), Hb)
        }, this.hoverAt = (bb, wb) => {
          this.placing.hover = [bb, wb], this.moveCentreTo(this.camera, bb, wb)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (bb, wb) => {
          const Mb = this.placing,
            {
              eye: eb,
              forward: Hb,
              tanHalfFovX: pb,
              tanHalfFovY: Vb
            } = this.camera,
            gb = {
              eye: [eb[0], eb[1], eb[2]],
              forward: [Hb[0], Hb[1], Hb[2]],
              tanHalfFovX: pb,
              tanHalfFovY: Vb
            },
            lb = Mb.corner[1],
            Lb = uw(gb, bb, wb, lb);
          Mb.hover = null, Mb.drag = Lb && {
            view: gb,
            ground: Lb,
            corner: [Mb.corner[0], Mb.corner[2]],
            level: lb
          }
        }, this.dragTo = (bb, wb) => {
          const Mb = this.placing.drag,
            eb = Mb && uw(Mb.view, bb, wb, Mb.level);
          null !== Mb && null !== eb && this.moveTo(Mb.corner[0] + Math.round(eb[0] - Mb.ground[0]), Mb.corner[1] + Math.round(eb[1] - Mb.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const bb = this.view;
          bb.waiting || (bb.blocked ? this.iI({
            ...bb,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const bb = this.placing,
            {
              id: wb,
              rotation: Mb,
              corner: eb
            } = bb;
          this.api.sendCommand(`${Hb} place ${wb} ${eb.join(" ")} ${Mb}`), bb.sent = {
            atMs: performance.now(),
            corner: [...eb],
            rotation: Mb,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Hb} preview off`))
        }, this.chunkWatch = new Qw(bb), this.meshes = new Gw.l(bb)
      }
      getView() {
        return this.view
      }
      sO() {
        const bb = this.placing;
        null !== bb && (null !== bb.sent && !bb.sent.timedOut && performance.now() - bb.sent.atMs > 3e3 ? (bb.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(bb) || this.chunkWatch.changed() || this.view.settled !== yw(bb, this.view.blocked)) && this.update())
      }
      afterRender(bb) {
        ! function(bb, wb) {
          for (let Mb = 0; Mb < 3; Mb++) wb.eye[Mb] = bb.cameraPosition[Mb], wb.forward[Mb] = bb.cameraDirection[Mb];
          wb.tanHalfFovX = bb.tanHalfFovX, wb.tanHalfFovY = bb.tanHalfFovY
        }(bb, this.camera);
        const wb = this.placing;
        null !== wb && null !== wb.hover && this.moveCentreTo(this.camera, wb.hover[0], wb.hover[1])
      }
      EO(bb) {
        const wb = this.placing;
        if (null === wb || null === wb.sent || "active" !== bb[0]) return;
        const {
          sent: Mb
        } = wb, [, eb, Hb, pb, Vb, gb, lb] = bb;
        Hb && eb === wb.id && lb === Mb.rotation && pb === Mb.corner[0] && Vb === Mb.corner[1] && gb === Mb.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(bb) {
        let [wb, , Mb] = bb;
        const eb = this.api.getTargetedBlock();
        if (null === eb) return null;
        const [Hb, , pb] = eb.position;
        return [Hb - Math.floor(wb / 2), pb - Math.floor(Mb / 2)]
      }
      playerLevel() {
        var bb;
        const [wb, Mb, eb] = this.api.Qm(this.localPlayerId);
        if (null !== (bb = this.api.getLocalPlayerMovement()) && void 0 !== bb && bb.onGround) return Math.ceil(Mb - .01);
        const [Hb, pb, Vb] = [Math.floor(wb), Math.floor(Mb), Math.floor(eb)];
        for (let gb = pb; gb >= pb - 2; gb--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Hb, gb, Vb))) return gb + 1;
        return pb
      }
      followPlayerLevel(bb) {
        if (ow(bb)) return !1;
        const wb = this.playerLevel();
        return wb !== bb.corner[1] && (bb.corner[1] = wb, !0)
      }
      moveCentreTo(bb, wb, Mb) {
        const eb = this.placing,
          Hb = uw(bb, wb, Mb, eb.corner[1]);
        if (null !== Hb) {
          const [bb, , wb] = yb(eb.id, eb.rotation).size;
          this.moveTo(Math.round(Hb[0] - bb / 2), Math.round(Hb[1] - wb / 2))
        }
      }
      moveTo(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const eb = this.placing;
        if (ow(eb)) return;
        const [Hb, pb, Vb] = eb.corner;
        if (this.centreOnPlot(Hb, Vb) && !this.centreOnPlot(bb, wb, Mb))
          if (this.centreOnPlot(bb, Vb, Mb)) wb = Vb;
          else {
            if (!this.centreOnPlot(Hb, wb, Mb)) return;
            bb = Hb
          } bb === Hb && wb === Vb && Mb === eb.rotation || (eb.rotation = Mb, eb.corner = [bb, pb, wb], eb.moved = !0, eb.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: eb,
          corner: Hb
        } = this.placing, [pb, , Vb] = yb(eb, Mb).size;
        return this.api.canModifyBlockAt(bb + Math.floor(pb / 2), Hb[1], wb + Math.floor(Vb / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.iI(null)
      }
      update() {
        const {
          id: bb,
          rotation: wb,
          corner: Mb,
          refusals: eb
        } = this.placing, Hb = new Gw.i, pb = [];
        let Vb = !1,
          gb = 0;
        for (const {
            offset: Ob,
            block: Ub
          }
          of yb(bb, wb).cells) {
          const [bb, wb, eb] = [Mb[0] + Ob[0], Mb[1] + Ob[1], Mb[2] + Ob[2]];
          pb.push(bb, wb, eb);
          const lb = !this.api.canModifyBlockAt(bb, wb, eb),
            Lb = this.api.getBlockId(bb, wb, eb),
            Ib = !Ww(Lb) && !Aw(this.api.blockNameToBlockId(Ub), Lb);
          Vb ||= lb, gb += Ib ? 1 : 0, lb || Ib ? Hb.add(bb, wb, eb, Gw.e, Gw.d) : Hb.add(bb, wb, eb, Sw(Ub), Pw, (0, Nw.e)(Ub))
        }
        this.chunkWatch.watch(pb), this.meshes.show(Hb.toArray());
        const lb = this.view,
          Lb = ow(this.placing),
          Ib = yw(this.placing, Vb);
        (null === lb || void 0 === lb ? void 0 : lb.id) === bb && lb.blocked === Vb && lb.toClear === gb && lb.waiting === Lb && lb.refusals === eb && lb.settled === Ib || this.iI({
          id: bb,
          blocked: Vb,
          toClear: gb,
          waiting: Lb,
          refusals: eb,
          settled: Ib
        })
      }
      iI(bb) {
        this.view = bb, xb.k.iI(dw, bb, !0)
      }
    }

    function yw(bb, wb) {
      let {
        moved: Mb,
        stillSinceMs: eb
      } = bb;
      return !wb && performance.now() - eb >= (Mb ? 1500 : 6e3)
    }

    function ow(bb) {
      let {
        sent: wb
      } = bb;
      return null !== wb && !wb.timedOut
    }
    var Tw = Mb(5395);
    class kw {
      constructor(bb) {
        this.placement = bb, this.press = null
      }
      down(bb) {
        if (null !== this.press) return !1;
        const {
          id: wb,
          mouse: Mb,
          x: eb,
          y: Hb,
          atMs: pb
        } = bb;
        return this.press = {
          id: wb,
          mouse: Mb,
          x: eb,
          y: Hb,
          atMs: pb,
          moved: !1
        }, Mb || this.placement.beginDrag(bb.ndcX, bb.ndcY), !0
      }
      move(bb) {
        const wb = this.press;
        null !== wb && wb.id === bb.id && (wb.moved ||= Math.hypot(bb.x - wb.x, bb.y - wb.y) > 8), bb.mouse ? this.placement.hoverAt(bb.ndcX, bb.ndcY) : (null === wb || void 0 === wb ? void 0 : wb.id) === bb.id && this.placement.dragTo(bb.ndcX, bb.ndcY)
      }
      up(bb) {
        const wb = this.press;
        (null === wb || void 0 === wb ? void 0 : wb.id) === bb.id && (this.move(bb), this.end(), !wb.moved && (wb.mouse || bb.atMs - wb.atMs <= 250) && this.placement.tap())
      }
      cancel(bb) {
        var wb;
        (null === (wb = this.press) || void 0 === wb ? void 0 : wb.id) === bb && this.end()
      }
      leave(bb) {
        let {
          id: wb,
          mouse: Mb
        } = bb;
        Mb && this.placement.endHover(), this.cancel(wb)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const bM = "PlotsPlacementLayer";

    function wM(bb) {
      let {
        placement: wb
      } = bb;
      return null === (0, lb.h)(dw, wb.getView()) ? null : (0, Wb.jsx)(MM, {
        placement: wb
      })
    }

    function MM(bb) {
      let {
        placement: wb
      } = bb;
      (0, Tw.d)(!0, !0, bM);
      const Mb = (0, pb.useMemo)((() => new kw(wb)), [wb]);
      return (0, Wb.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: bb => {
          "mouse" === bb.pointerType && 0 !== bb.button || !Mb.down(eM(bb)) || bb.currentTarget.setPointerCapture(bb.pointerId)
        },
        onPointerMove: bb => {
          Mb.move(eM(bb))
        },
        onPointerUp: bb => {
          Mb.up(eM(bb))
        },
        onPointerCancel: bb => {
          Mb.cancel(bb.pointerId)
        },
        onLostPointerCapture: bb => {
          Mb.cancel(bb.pointerId)
        },
        onPointerLeave: bb => {
          Mb.leave(eM(bb))
        },
        "aria-hidden": !0
      })
    }

    function eM(bb) {
      const {
        left: wb,
        top: Mb,
        width: eb,
        height: Hb
      } = bb.currentTarget.getBoundingClientRect();
      return {
        id: bb.pointerId,
        mouse: "mouse" === bb.pointerType,
        x: bb.clientX,
        y: bb.clientY,
        ndcX: (bb.clientX - wb) / eb * 2 - 1,
        ndcY: 1 - (bb.clientY - Mb) / Hb * 2,
        atMs: bb.timeStamp
      }
    }

    function HM() {
      return (0, Fw.u)().some((bb => bb !== Fw.e && bb !== bM))
    }
    const pM = 2500;

    function VM(bb) {
      let {
        hud: wb,
        guide: Mb,
        tracker: eb,
        placement: Hb,
        children: Vb
      } = bb;
      const {
        t: Ob
      } = (0, Ib.C)(), {
        isTouchScreen: Ub
      } = (0, gb.o)(["isTouchScreen"]), tb = (0, lb.h)(Mw, wb.getGuide()), Cb = (0, lb.h)(ww, wb.getPlot()), Eb = (0, lb.h)(ob, eb.get()), Fb = function(bb) {
        const {
          openInGameMenuName: wb,
          openEverythingMenuName: Mb,
          loadingOverlayVisible: eb
        } = (0, gb.o)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), Hb = (0, Bw.b)(), [Vb, Lb] = (0, pb.useState)(HM);
        (0, pb.useEffect)((() => {
          const bb = () => {
            Lb(HM())
          };
          bb();
          const wb = (0, Fw.s)(bb),
            Mb = (0, Fw.p)(bb);
          return () => {
            wb(), Mb()
          }
        }), []);
        const Ib = (0, lb.h)(dw, bb.getView()),
          Ob = "clientGame" === wb;
        return {
          hudHidden: Hb || eb,
          journalOpen: Ob,
          covered: Vb || null !== Mb || null !== wb && !Ob,
          placing: null === Ib ? null : Ib.settled ? "placeBuild" : "placeSpot"
        }
      }(Hb), Bb = function(bb, wb, Mb) {
        return "none" === bb[0] || Mb.hudHidden || Mb.journalOpen || Mb.covered ? null : null !== Mb.placing ? Mb.placing : null !== wb ? "build" : "choose" === bb[1] ? "openJournal" : null
      }(tb, null === Eb ? null : Eb.id, Fb), sb = function() {
        const [bb, wb] = (0, pb.useState)(null), [Mb, eb] = (0, pb.useState)(!1);
        return (0, lb.e)(ew, (() => {
          wb(performance.now())
        })), (0, pb.useEffect)((() => {
          if (null === bb) return;
          const wb = window.setTimeout((() => {
              eb(!0)
            }), pM),
            Mb = window.setTimeout((() => {
              eb(!1)
            }), 7500);
          return () => {
            window.clearTimeout(wb), window.clearTimeout(Mb)
          }
        }), [bb]), Mb
      }() && !Fb.hudHidden && !Fb.covered && !Fb.journalOpen && null === Fb.placing, [mb, hb] = (0, pb.useState)(!1);
      (0, pb.useEffect)((() => {
        Fb.journalOpen && hb(!0)
      }), [Fb.journalOpen]);
      const [zb, xb] = (0, pb.useState)(null), [jb, Kb] = (0, pb.useState)(null), [rb, Rb] = (0, pb.useState)(null), Db = (0, pb.useMemo)((() => ({
        hint: Bb,
        journalRef: xb,
        placementCardRef: Kb,
        buildRef: Rb
      })), [Bb]), cb = "plot" === Cb[0] && "own" === Cb[5], Yb = Ub && !mb && cb ? {
        onSkip: Mb.skip
      } : null;
      return (0, Wb.jsxs)(Xb.Provider, {
        value: Db,
        children: [Vb, "openJournal" === Bb && null !== zb && (0, Wb.jsx)(Iw, {
          target: zb,
          placement: "left",
          spotlight: Yb,
          children: Ub ? Ob("plotsGame:guideOpenJournal") : Ob("plotsGame:guideOpenJournalKeys", {
            key: (0, Lb.m)(Jb)
          })
        }), "placeSpot" === Bb && null !== jb && (0, Wb.jsxs)(Wb.Fragment, {
          children: [Ub && (0, Wb.jsx)(Ew, {}), (0, Wb.jsx)(Iw, {
            target: jb,
            placement: "top",
            children: Ob(Ub ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === Bb && null !== rb && null !== jb && (0, Wb.jsx)(Iw, {
          target: Ub ? rb : jb,
          placement: "top",
          children: Ob(Ub ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === Bb && null !== Eb && (0, Wb.jsx)(tw, {
          progress: Eb,
          guide: Mb
        }), sb && null !== zb && (0, Wb.jsx)(Iw, {
          target: zb,
          placement: "left",
          children: Ob("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var gM = Mb(39723),
      lM = Mb(39727);
    class LM {
      constructor(bb, wb, Mb) {
        this.api = bb, this.localPlayerId = wb, this.nextCell = Mb, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = bb => {
          this.hand = bb
        }
      }
      afterRender(bb) {
        const wb = this.hand;
        if (null === wb) return;
        const Mb = this.nextCell.get();
        if (null === Mb) return void(0, gM.f)(wb, !0);
        const eb = (0, lM.d)(wb, bb, this.api.getPositionView(this.localPlayerId), Mb, 1, 40);
        null !== eb && (0, gM.b)(wb, Math.round(100 * eb.x) / 100, Math.round(100 * eb.y) / 100)
      }
    }
    var IM = Mb(1616),
      OM = Mb(5384),
      UM = Mb(1174);
    const tM = {
        farm_hut: Mb.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: Mb.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: Mb.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: Mb.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: Mb.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: Mb.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: Mb.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: Mb.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: Mb.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: Mb.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: Mb.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: Mb.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      CM = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      EM = ["market_stand", "rusticHome_tent", "farm_hut"].map((bb => ({
        id: bb,
        blocks: yb(bb, 0).cells.length
      }))).sort(((bb, wb) => bb.blocks - wb.blocks)).map(((bb, wb) => ({
        ...bb,
        effortKey: CM[wb]
      })));

    function FM(bb) {
      let {
        onBuild: wb
      } = bb;
      const {
        t: Mb
      } = (0, Ib.C)();
      return (0, Wb.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, Wb.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, Wb.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: Mb("plotsGame:guidePickTitle")
          }), (0, Wb.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, Wb.jsx)("img", {
              src: Vw,
              alt: "",
              draggable: !1
            }), Mb("plotsGame:guidePickNote")]
          }), (0, Wb.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: EM.map((bb => {
              let {
                id: eb,
                blocks: Hb,
                effortKey: pb
              } = bb;
              return (0, Wb.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, Wb.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    wb(eb)
                  },
                  children: (0, Wb.jsx)("img", {
                    src: tM[eb],
                    alt: "",
                    draggable: !1
                  })
                }), (0, Wb.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, Wb.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, Wb.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: Mb(Rb(eb).displayName.translationKey)
                    }), (0, Wb.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: Mb(pb)
                    }), (0, Wb.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: Mb("plotsGame:journalBlocks", {
                        blocks: String(Hb)
                      })
                    })]
                  }), (0, Wb.jsx)(IM.p, {
                    onClick: () => {
                      wb(eb)
                    },
                    children: Mb("plotsGame:placementBuild")
                  })]
                })]
              }, eb)
            }))
          })]
        })
      })
    }

    function BM(bb) {
      let {
        direction: wb,
        disabled: Mb,
        onTurn: eb
      } = bb;
      const {
        t: Hb
      } = (0, Ib.C)();
      return (0, Wb.jsx)("div", {
        className: Ub()("PlotsJournalArrow", wb),
        children: (0, Wb.jsx)(IM.f, {
          disabled: Mb,
          ariaLabel: Hb("Forward" === wb ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            eb(wb)
          },
          children: (0, Wb.jsx)(Fb.b, {
            name: "angle-up"
          })
        })
      })
    }
    const sM = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function mM(bb) {
      let {
        page: wb,
        building: Mb,
        onBuild: eb,
        onPutAway: Hb
      } = bb;
      const {
        t: pb
      } = (0, Ib.C)(), {
        displayName: Vb,
        tier: gb
      } = Rb(wb.id), lb = yb(wb.id, 0).cells.length, Lb = "locked" === wb.state, Ob = Mb ? IM.f : IM.p;
      return (0, Wb.jsxs)("article", {
        className: Ub()("PlotsJournalPage", {
          Locked: Lb
        }),
        children: [(0, Wb.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: pb(Vb.translationKey)
        }), (0, Wb.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [pb(sM[gb]), " \xb7 ", pb("plotsGame:journalBlocks", {
            blocks: String(lb)
          })]
        }), (0, Wb.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [rb.map((bb => (0, Wb.jsx)("img", {
            className: Ub()({
              Shown: bb === wb.id
            }),
            src: tM[bb],
            alt: "",
            draggable: !1
          }, bb))), "completed" === wb.state && (0, Wb.jsx)("span", {
            className: "PlotsJournalStamp",
            children: pb("plotsGame:journalBuilt")
          }), Lb && (0, Wb.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Wb.jsx)(Fb.b, {
              name: "lock"
            })
          })]
        }), null !== wb.note && (0, Wb.jsx)("p", {
          className: "PlotsJournalNote",
          children: pb(wb.note)
        }), (0, Wb.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === wb.state && (0, Wb.jsx)("p", {
            className: "PlotsJournalHint",
            children: pb("plotsGame:journalLocked", {
              name: pb(Rb(wb.unlockedBy).displayName.translationKey)
            })
          }), wb.active && (0, Wb.jsxs)(Wb.Fragment, {
            children: [(0, Wb.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: pb("plotsGame:journalBuilding")
            }), (0, Wb.jsx)(IM.j, {
              onClick: Hb,
              children: pb("plotsGame:journalPutAway")
            })]
          }), !Lb && !wb.active && (0, Wb.jsx)(Ob, {
            onClick: () => {
              eb(wb.id)
            },
            children: pb("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function hM(bb) {
      let {
        className: wb,
        page: Mb,
        hidden: eb,
        building: Hb,
        journal: pb
      } = bb;
      return (0, Wb.jsxs)("div", {
        ref: bb => {
          null !== bb && (bb.inert = eb)
        },
        className: Ub()("PlotsJournalSide", wb),
        children: [void 0 !== Mb && (0, Wb.jsx)(mM, {
          page: Mb,
          building: Hb,
          onBuild: pb.build,
          onPutAway: pb.putAway
        }), void 0 === Mb && (0, Wb.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var zM = Mb(2107);

    function XM(bb) {
      return Math.cos((0, zM.o)(bb))
    }

    function xM(bb) {
      return (0, zM.E)(Math.acos(xw.e.clamp(bb, -1, 1)))
    }

    function jM(bb, wb, Mb, eb, Hb) {
      const pb = Math.abs(wb - bb),
        Vb = (0, zM.E)(Hb / (Mb * Math.abs(Math.sin((0, zM.o)(bb))))),
        gb = 450 * Math.min(1, pb / eb),
        lb = Vb > 0 ? 3 * pb / Vb : 1 / 0;
      return Math.round(Math.max(120, Math.min(gb, lb)))
    }
    class KM {
      constructor() {
        this.samples = []
      }
      add(bb, wb) {
        for (this.samples.push({
            x: bb,
            at: wb
          }); wb - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const bb = this.samples[0],
          wb = this.samples[this.samples.length - 1];
        return wb.at > bb.at ? (wb.x - bb.x) / (wb.at - bb.at) : 0
      }
    }

    function rM(bb) {
      return xM(new DOMMatrixReadOnly(getComputedStyle(bb).transform).m11)
    }

    function RM(bb, wb) {
      bb.style.transform = `rotateY(${-wb}deg)`, bb.classList.add("Turning")
    }

    function DM(bb, wb, Mb) {
      const [eb, Hb] = (0, pb.useState)(Mb), Vb = (0, pb.useRef)(null), gb = (0, pb.useRef)(null), lb = (0, pb.useRef)({
        Forward: null,
        Back: null
      }), Lb = wb ? 2 : 1, Ib = wb ? 180 : 90, Ob = eb - eb % Lb, Ub = Ob > 0, tb = Ob + Lb < bb, Cb = (0, pb.useCallback)((() => {
        const bb = gb.current;
        return null === bb ? Ob : (gb.current = null, bb.animation.cancel(), (wb = lb.current[bb.direction]).style.transform = "", wb.classList.remove("Turning"), null === bb.next ? Ob : (Hb(bb.next), bb.next));
        var wb
      }), [Ob]), Eb = (0, pb.useCallback)(((bb, wb, Mb, eb) => {
        const Hb = lb.current[bb],
          pb = rM(Hb),
          Vb = wb === ("Forward" === bb) ? Ib : 0;
        RM(Hb, Vb);
        const Ob = Hb.animate([{
          transform: `rotateY(${-pb}deg)`
        }, {
          transform: `rotateY(${-Vb}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : jM(pb, Vb, Hb.offsetWidth, Ib, Vb > pb ? -Mb : Mb),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        gb.current = {
          direction: bb,
          animation: Ob,
          next: wb ? eb + ("Forward" === bb ? Lb : -Lb) : null
        }, Ob.onfinish = () => {
          var bb;
          (null === (bb = gb.current) || void 0 === bb ? void 0 : bb.animation) === Ob && Cb()
        }
      }), [Lb, Ib, Cb]), Fb = (0, pb.useCallback)((wb => {
        if (null !== Vb.current) return;
        const Mb = Cb();
        ("Forward" === wb ? Mb + Lb < bb : Mb > 0) && Eb(wb, !0, 0, Mb)
      }), [Cb, Eb, Lb, bb]);
      (0, pb.useEffect)((() => () => {
        var bb;
        null === (bb = gb.current) || void 0 === bb || bb.animation.cancel()
      }), []), (0, pb.useEffect)((() => {
        const bb = bb => {
          var wb;
          bb.pointerId !== (null === (wb = Vb.current) || void 0 === wb ? void 0 : wb.pointerId) || Vb.current.following || (Vb.current = null)
        };
        return window.addEventListener("pointerup", bb), () => {
          window.removeEventListener("pointerup", bb)
        }
      }), []);
      const Bb = (bb, wb, Mb) => {
          const eb = function(bb, wb, Mb, eb) {
            return (bb < 0 ? Mb : eb) ? xw.e.clampAbs(bb, wb) : Math.sign(bb) * wb * (1 - 1 / (.55 * Math.abs(bb) / wb + 1))
          }(bb.base + Mb, Lb * bb.width, tb, Ub);
          return "Forward" === wb ? Math.min(eb, 0) : Math.max(eb, 0)
        },
        sb = (bb, wb) => {
          const Mb = Vb.current;
          if (Vb.current = null, null === Mb.direction) return;
          Mb.speed.add(bb, wb);
          const eb = Mb.speed.get(),
            Hb = Bb(Mb, Mb.direction, bb - Mb.x);
          Eb(Mb.direction, null !== function(bb, wb, Mb, eb, Hb) {
            if (Math.abs(wb) >= .3 ? Math.sign(wb) !== Math.sign(bb) : Math.abs(bb) < .5 * Mb) return null;
            const pb = bb < 0 ? "Forward" : "Back";
            return ("Forward" === pb ? eb : Hb) ? pb : null
          }(Hb, eb, Lb * Mb.width, tb, Ub), eb, Ob)
        },
        mb = {
          onPointerDown: bb => {
            var wb;
            if (!bb.isPrimary || 0 !== bb.button || null !== gb.current && null !== bb.target.closest("button")) return;
            const Mb = new KM;
            Mb.add(bb.clientX, bb.timeStamp);
            const eb = lb.current.Forward.offsetWidth,
              Hb = gb.current;
            gb.current = null;
            let pb = 0;
            if (null !== Hb) {
              const wb = lb.current[Hb.direction],
                Mb = rM(wb);
              Hb.animation.cancel(), RM(wb, Mb), pb = function(bb, wb, Mb, eb) {
                return (bb < 0 ? Mb : eb) ? bb : Math.sign(bb) * wb * (1 / (1 - Math.min(Math.abs(bb) / wb, .99)) - 1) / .55
              }(function(bb, wb, Mb, eb) {
                return Mb * (XM(wb) - XM("Forward" === bb ? 0 : eb))
              }(Hb.direction, Mb, eb, Ib), Lb * eb, tb, Ub), bb.currentTarget.setPointerCapture(bb.pointerId)
            }
            Vb.current = {
              pointerId: bb.pointerId,
              x: bb.clientX,
              y: bb.clientY,
              base: pb,
              width: eb,
              following: null !== Hb,
              direction: null !== (wb = null === Hb || void 0 === Hb ? void 0 : Hb.direction) && void 0 !== wb ? wb : null,
              speed: Mb
            }
          },
          onPointerMove: bb => {
            const wb = Vb.current;
            if (null === wb || bb.pointerId !== wb.pointerId) return;
            if (0 === bb.buttons) return void sb(bb.clientX, bb.timeStamp);
            const Mb = bb.clientX - wb.x;
            !wb.following && function(bb, wb) {
              return Math.abs(bb) > 8 && Math.abs(bb) > Math.abs(wb)
            }(Mb, bb.clientY - wb.y) && (wb.following = !0, wb.direction = Mb < 0 ? "Forward" : "Back", bb.currentTarget.setPointerCapture(bb.pointerId)), null !== wb.direction && (wb.speed.add(bb.clientX, bb.timeStamp), RM(lb.current[wb.direction], function(bb, wb, Mb, eb) {
              const Hb = Mb * XM("Forward" === bb ? 0 : eb) + wb;
              return xw.e.clamp(xM(Hb / Mb), 0, eb)
            }(wb.direction, Bb(wb, wb.direction, Mb), wb.width, Ib)))
          },
          onPointerUp: bb => {
            var wb;
            bb.pointerId === (null === (wb = Vb.current) || void 0 === wb ? void 0 : wb.pointerId) && sb(bb.clientX, bb.timeStamp)
          },
          onPointerCancel: bb => {
            const wb = Vb.current;
            bb.pointerId === (null === wb || void 0 === wb ? void 0 : wb.pointerId) && (Vb.current = null, null !== wb.direction && Eb(wb.direction, !1, 0, Ob))
          }
        };
      return {
        first: Ob,
        step: Lb,
        canGoBack: Ub,
        canGoForward: tb,
        turnPage: Fb,
        leaves: lb,
        pagesHandlers: mb
      }
    }

    function cM(bb, wb) {
      return bb > wb && bb >= 600
    }

    function YM(bb) {
      let {
        journal: wb,
        hud: Mb,
        guide: eb
      } = bb;
      const {
        t: Hb
      } = (0, Ib.C)(), gb = (0, lb.h)(fb, wb.getPages()), Lb = (0, lb.h)(Mw, Mb.getGuide()), Ob = gb.find((bb => bb.active)), tb = (Cb = Lb, Eb = void 0 === Ob ? null : Ob.id, "active" === Cb[0] && null === Eb);
      var Cb, Eb;
      const Fb = (0, UM.q)(cM),
        {
          first: Bb,
          step: sb,
          canGoBack: zb,
          canGoForward: Xb,
          turnPage: xb,
          leaves: jb,
          pagesHandlers: Kb
        } = DM(gb.length, Fb, (() => function(bb) {
          const wb = bb.findIndex((bb => bb.active));
          return -1 !== wb ? wb : Math.max(0, bb.findIndex((bb => "open" === bb.state)))
        }(gb)));
      (0, pb.useEffect)((() => {
        wb.onOpened()
      }), [wb]), (0, mb.d)((bb => !tb && ("ArrowLeft" === bb.code || "ArrowRight" === bb.code) && !(0, hb.isTypingInInput)()), (bb => {
        bb.stopPropagation(), xb("ArrowLeft" === bb.code ? "Back" : "Forward")
      }));
      const rb = void 0 !== Ob,
        Rb = (bb, Mb, eb) => (0, Wb.jsx)(hM, {
          className: bb,
          page: Mb >= 0 && Mb < gb.length ? gb[Mb] : void 0,
          hidden: eb,
          building: rb,
          journal: wb
        });
      return (0, Wb.jsx)(OM.e, {
        close: Vb.o,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Wb.jsxs)("section", {
          className: Ub()("PlotsJournal", {
            Spread: Fb
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Hb("plotsGame:journalTitle"),
          children: [(0, Wb.jsx)(IM.l, {
            className: "PlotsJournalClose",
            onClick: Vb.o
          }), "active" === Lb[0] && (0, Wb.jsx)(Lw, {
            className: "PlotsJournalGuideSkip",
            onSkip: eb.skip
          }), tb && (0, Wb.jsx)(FM, {
            onBuild: wb.build
          }), !tb && (0, Wb.jsx)(BM, {
            direction: "Back",
            disabled: !zb,
            onTurn: xb
          }), (0, Wb.jsx)("div", {
            hidden: tb,
            className: "PlotsJournalBookPages",
            ...Kb,
            children: (0, Wb.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Fb && Rb("Left", Bb - 2, !0), Rb("Right", Bb + 2 * sb - 1, !0), (0, Wb.jsxs)("div", {
                ref: bb => {
                  jb.current.Back = bb
                },
                className: "PlotsJournalLeaf Back",
                children: [Rb("Recto", Bb - 1, !0), Fb && Rb("Verso", Bb, !1)]
              }), (0, Wb.jsxs)("div", {
                ref: bb => {
                  jb.current.Forward = bb
                },
                className: "PlotsJournalLeaf Forward",
                children: [Rb("Recto", Bb + sb - 1, !1), Fb && Rb("Verso", Bb + sb, !0)]
              })]
            })
          }), !tb && (0, Wb.jsx)(BM, {
            direction: "Forward",
            disabled: !Xb,
            onTurn: xb
          })]
        })
      })
    }

    function ZM(bb, wb, Mb, eb, Hb) {
      const pb = Math.hypot(...wb.dir);
      if (!Number.isFinite(pb) || 0 === pb) return -1;
      const {
        from: Vb,
        reach: gb,
        solid: lb
      } = wb, Lb = [wb.dir[0] / pb, wb.dir[1] / pb, wb.dir[2] / pb], Ib = null === lb ? gb : Math.min(gb, function(bb, wb, Mb) {
        const eb = fM(bb, wb, Mb);
        if (eb !== 1 / 0) return eb;
        return (Mb[0] + .5 - bb[0]) * wb[0] + (Mb[1] + .5 - bb[1]) * wb[1] + (Mb[2] + .5 - bb[2]) * wb[2]
      }(Vb, Lb, lb) + .75);
      let Ob = -1,
        Ub = 1 / 0,
        tb = 1 / 0;
      for (let Cb = 0; Cb < bb.length; Cb += 4) {
        const wb = [bb[Cb], bb[Cb + 1], bb[Cb + 2]],
          pb = Hb(Cb) ? gb : Ib;
        let lb = -1,
          Eb = fM(Vb, Lb, wb);
        if (Eb > pb) {
          const bb = [wb[0] + .5 - Vb[0], wb[1] + .5 - Vb[1], wb[2] + .5 - Vb[2]];
          if (Eb = bb[0] * Lb[0] + bb[1] * Lb[1] + bb[2] * Lb[2], Eb <= 0 || Eb > pb) continue;
          if (lb = Math.hypot(bb[0] - Eb * Lb[0], bb[1] - Eb * Lb[1], bb[2] - Eb * Lb[2]), lb > .7 || !eb(Cb)) continue
        }(lb < Ub || lb === Ub && Eb < tb) && Mb(Cb) && (Ob = Cb, Ub = lb, tb = Eb)
      }
      return Ob
    }

    function fM(bb, wb, Mb) {
      let eb = 0,
        Hb = 1 / 0;
      for (let pb = 0; pb < 3; pb++) {
        const Vb = Mb[pb] - bb[pb];
        if (0 === wb[pb]) {
          if (Vb > 0 || Vb + 1 < 0) return 1 / 0;
          continue
        }
        const gb = Vb / wb[pb],
          lb = (Vb + 1) / wb[pb];
        eb = Math.max(eb, Math.min(gb, lb)), Hb = Math.min(Hb, Math.max(gb, lb))
      }
      return eb <= Hb ? eb : 1 / 0
    }
    var AM = Mb(38109),
      WM = Mb(39297),
      JM = Mb(39756);
    const SM = [1, 1, 1];
    class NM {
      constructor(bb) {
        this.api = bb, this.meshes = null, this.shown = null
      }
      show(bb) {
        if (!(0, AM.g)(bb, this.shown))
          if (this.shown = null === bb ? null : [bb[0], bb[1], bb[2]], null !== this.meshes)
            for (const wb of this.meshes) this.api.setGameMesh(wb, null === bb ? {
              visible: !1
            } : {
              anchor: bb,
              visible: !0
            });
          else if (null !== bb) {
          const wb = [WM.g, WM.g, WM.g, 0, 0, 0];
          this.meshes = [this.build([wb], WM.k, bb), this.build((0, WM.d)(), WM.q, bb)]
        }
      }
      dispose() {
        for (const wb of null !== (bb = this.meshes) && void 0 !== bb ? bb : []) {
          var bb;
          this.api.disposeGameMesh(wb)
        }
        this.meshes = null, this.shown = null
      }
      build(bb, wb, Mb) {
        const eb = [],
          Hb = [];
        for (const [pb, Vb, gb, lb, Lb, Ib] of bb)(0, JM.g)(eb, Hb, [lb + .5, Lb + .5, Ib + .5], [pb, Vb, gb]);
        return this.api.createGameMesh({
          positions: eb,
          indices: Hb
        }, {
          rgb: SM,
          alpha: wb,
          onTop: !0
        }, Mb)
      }
    }

    function vM(bb, wb) {
      const Mb = vw.e.yF / 2;
      return bb[0] < wb[0] + Mb && bb[0] + 1 > wb[0] - Mb && bb[1] < wb[1] + vw.e.oF && bb[1] + 1 > wb[1] && bb[2] < wb[2] + Mb && bb[2] + 1 > wb[2] - Mb
    }

    function QM(bb, wb) {
      return bb.getClientOption(wb, "blockReach") + 1
    }
    class GM {
      constructor(bb, wb, Mb) {
        this.api = bb, this.localPlayerId = wb, this.foreseen = Mb, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(bb) {
        this.cells = bb
      }
      playerMoved() {
        return qM(this.api.getPositionView(this.localPlayerId)).some(((bb, wb) => bb !== this.playerCells[wb]))
      }
      Vt(bb) {
        const wb = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...qM(wb)), this.next = this.pickFrom(null === bb ? [wb[0], wb[1] + 1, wb[2]] : (0, AM.e)(bb), (() => !1)), this.next
      }
      pickFrom(bb, wb) {
        const Mb = this.api.getPositionView(this.localPlayerId),
          eb = [Mb[0], Mb[1] + vw.e.oF * vw.e.playerEyeToHeightRatio, Mb[2]],
          Hb = QM(this.api, this.localPlayerId),
          {
            cells: pb
          } = this,
          Vb = bb => [pb[bb], pb[bb + 1], pb[bb + 2]],
          gb = function(bb, wb, Mb, eb, Hb, pb) {
            let Vb = -1,
              gb = -1,
              lb = 1 / 0;
            for (let Lb = 0; Lb < bb.length; Lb += wb) {
              const wb = (pb(Lb) ? 2 : 0) + (eb(Lb) ? 1 : 0);
              if (wb < gb || Hb(Lb)) continue;
              const Ib = (bb[Lb] + .5 - Mb[0]) ** 2 + (bb[Lb + 1] + .5 - Mb[1]) ** 2 + (bb[Lb + 2] + .5 - Mb[2]) ** 2;
              (wb > gb || Ib < lb) && (Vb = Lb, gb = wb, lb = Ib)
            }
            return Vb
          }(pb, 4, bb, (bb => 1 === pb[bb + 3]), (bb => {
            const eb = Vb(bb);
            return vM(eb, Mb) || this.foreseen.has(eb.join()) || wb(eb)
          }), (bb => function(bb, wb, Mb) {
            return (wb[0] + .5 - bb[0]) ** 2 + (wb[1] + .5 - bb[1]) ** 2 + (wb[2] + .5 - bb[2]) ** 2 <= Mb ** 2
          }(eb, Vb(bb), Hb)));
        return -1 === gb ? null : Vb(gb)
      }
    }

    function qM(bb) {
      let [wb, Mb, eb] = bb;
      const Hb = vw.e.yF / 2;
      return [Math.floor(wb), Math.floor(Mb), Math.floor(eb), Math.floor(wb - Hb), Math.floor(wb + Hb), Math.floor(Mb + vw.e.oF), Math.floor(eb - Hb), Math.floor(eb + Hb)]
    }
    class aM {
      constructor(bb, wb, Mb) {
        this.api = bb, this.localPlayerId = wb, this.pickNext = Mb, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(bb) {
        const [wb, , Mb] = bb.cameraDirection, eb = Math.hypot(wb, Mb);
        eb > .001 && (this.heading = [wb / eb, Mb / eb])
      }
      tapped(bb, wb, Mb) {
        const eb = QM(this.api, this.localPlayerId),
          {
            origin: Hb,
            direction: pb
          } = this.api.getActionRay(),
          Vb = [...Hb],
          gb = [
            [Vb, [Vb[0] + pb[0] * eb, Vb[1] + pb[1] * eb, Vb[2] + pb[2] * eb]]
          ];
        null !== bb && gb.push([Vb, (0, AM.e)(bb)]), this.tap = {
          lines: gb,
          next: wb,
          ms: Mb
        }
      }
      filled(bb, wb) {
        this.tap = null, this.turnFrom(bb, wb), this.retry(wb)
      }
      arrived(bb, wb) {
        const {
          tap: Mb
        } = this;
        if (null === Mb || wb - Mb.ms > 1500) return null;
        const eb = (0, AM.e)(bb);
        return (0, AM.g)(Mb.next, bb) || Mb.lines.some((bb => {
          let [wb, Mb] = bb;
          return function(bb, wb, Mb) {
            const eb = [Mb[0] - wb[0], Mb[1] - wb[1], Mb[2] - wb[2]],
              Hb = [bb[0] - wb[0], bb[1] - wb[1], bb[2] - wb[2]],
              pb = eb[0] ** 2 + eb[1] ** 2 + eb[2] ** 2,
              Vb = 0 === pb ? 0 : Math.min(1, Math.max(0, (Hb[0] * eb[0] + Hb[1] * eb[1] + Hb[2] * eb[2]) / pb));
            return Math.hypot(Hb[0] - eb[0] * Vb, Hb[1] - eb[1] * Vb, Hb[2] - eb[2] * Vb)
          }(eb, wb, Mb) <= .9
        })) ? (this.tap = null, this.turnFrom(bb, wb), Mb.ms) : null
      }
      turnFrom(bb, wb) {
        this.pending = {
          from: bb,
          ms: wb,
          turnMs: Math.max(50, Math.min(250, wb - this.lastFillMs))
        }, this.lastFillMs = wb
      }
      retry(bb) {
        const {
          pending: wb
        } = this;
        if (null === wb) return;
        if (bb - wb.ms > 1500) return void(this.pending = null);
        const Mb = this.pickNext((0, AM.e)(wb.from), (bb => (0, AM.g)(bb, wb.from)));
        if (null === Mb) return;
        this.pending = null;
        const {
          turning: eb
        } = this;
        if (null !== eb && bb < eb.endMs && (0, AM.g)(eb.to, Mb)) return;
        const Hb = this.api.getActionRay().origin,
          pb = [Mb[0] + .5 - Hb[0], Mb[1] + .5 - Hb[1], Mb[2] + .5 - Hb[2]],
          Vb = Math.hypot(pb[0], pb[2]);
        if (Vb < .3) {
          const bb = Math.max(Vb, .001);
          pb[0] = this.heading[0] * bb, pb[2] = this.heading[1] * bb
        }
        this.api.turnCamera(pb, wb.turnMs), this.turning = {
          to: Mb,
          endMs: bb + wb.turnMs
        }
      }
    }
    class iM {
      constructor(bb, wb, Mb, eb) {
        this.api = bb, this.localPlayerId = wb, this.juice = Mb, this.tracker = eb, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Qw(bb), this.meshes = new Gw.l(bb), this.outline = new NM(bb), this.nextCell = new GM(bb, wb, this.foreseen), this.turn = new aM(bb, wb, ((bb, wb) => this.nextCell.pickFrom(bb, wb)))
      }
      EO(bb) {
        const wb = "active" === bb[0] ? `${bb[1]}|${bb[3]}|${bb[4]}|${bb[5]}|${bb[6]}` : "";
        if ("active" !== bb[0]) "built" === bb[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Mb, eb, Hb, pb] = bb;
          wb !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Mb) : Mb === this.layerY ? this.burstUnlisted(eb) : Mb > this.layerY && this.finishLayer(Mb), this.layerY = Mb, this.layerCells.has(Mb) || this.layerCells.set(Mb, eb.filter(uM)), this.ghostCells = eb, this.palette = Hb, this.occupiedCells = pb
        }
        wb !== this.blueprint && (this.tracker.show("active" === bb[0] && bb[2] ? {
          id: bb[1],
          y: bb[4]
        } : null), this.blueprint = wb, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((bb => this.api.blockNameToBlockId(bb))), this.chunkWatch.watch([...this.ghostCells.filter(uM), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(bb) {
        this.burstUnlisted([]), bb > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = bb)
      }
      sO() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const bb = performance.now();
        let wb = !1;
        for (const [eb, Hb] of this.foreseen) {
          var Mb;
          if (bb - Hb > 1e3) this.foreseen.delete(eb), wb = !0, (null === (Mb = this.lastFilled) || void 0 === Mb ? void 0 : Mb.join()) === eb && (this.lastFilled = this.lastSeenFilled)
        }(wb || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(bb) {
        const wb = new Set;
        for (let Hb = 0; Hb < bb.length; Hb += 4) wb.add(`${bb[Hb]},${bb[Hb+1]},${bb[Hb+2]}`);
        const Mb = [],
          {
            ghostCells: eb
          } = this;
        for (let Hb = 0; Hb < eb.length; Hb += 4) {
          const bb = `${eb[Hb]},${eb[Hb+1]},${eb[Hb+2]}`;
          !wb.has(bb) && this.open.delete(bb) && Mb.push(this.filledCell(Hb))
        }
        this.burst(Mb)
      }
      refresh() {
        const {
          ghostCells: bb,
          palette: wb,
          occupiedCells: Mb
        } = this, eb = new Gw.i, Hb = new Set, pb = [], Vb = [];
        let gb = 0;
        for (let lb = 0; lb < bb.length; lb += 4) {
          const [Mb, Lb, Ib, Ob] = [bb[lb], bb[lb + 1], bb[lb + 2], bb[lb + 3]], Ub = this.api.getBlockId(Mb, Lb, Ib), tb = `${Mb},${Lb},${Ib}`, Cb = Aw(this.blockIds[Ob], Ub);
          !Cb && Ww(Ub) ? eb.add(Mb, Lb, Ib, Sw(wb[Ob]), Gw.h, (0, Nw.e)(wb[Ob])) : Cb ? this.open.has(tb) && pb.push(this.filledCell(lb)) : eb.add(Mb, Lb, Ib, Gw.e, Gw.d), Cb || gb++, !Cb && this.api.isBlockInLoadedChunk(Mb, Lb, Ib) && (Hb.add(tb), Vb.push(Mb, Lb, Ib, Ww(Ub) ? 0 : 1))
        }
        this.open = Hb, this.nextCell.setCells(Vb), this.tracker.update(this.layerY, this.topLayerY, gb);
        for (let lb = 0; lb < Mb.length; lb += 3) {
          const [bb, wb, Hb] = [Mb[lb], Mb[lb + 1], Mb[lb + 2]];
          Ww(this.api.getBlockId(bb, wb, Hb)) || eb.add(bb, wb, Hb, Gw.e, Gw.d)
        }
        this.meshes.show(eb.toArray()), this.burst(pb), this.showNext(), this.turn.retry(performance.now())
      }
      burst(bb) {
        const wb = performance.now(),
          Mb = [];
        for (const [Hb, pb, Vb] of bb) {
          const bb = [Hb, pb, Vb];
          this.lastSeenFilled = bb, this.foreseen.delete(bb.join()) || Mb.push(bb)
        }
        const eb = this.isHolding(wb);
        for (const Hb of Mb) {
          if (this.lastFilled = Hb, eb && this.pressFilled) {
            this.turn.filled(Hb, wb);
            continue
          }
          const bb = this.turn.arrived(Hb, wb);
          if (null !== bb) {
            this.pressFilled = eb;
            for (const [wb, Mb] of this.foreseen) Mb <= bb && this.foreseen.delete(wb)
          }
        }
        this.juice.filled(bb)
      }
      showNext() {
        var bb;
        this.outline.show(null !== (bb = this.aimed) && void 0 !== bb ? bb : this.nextCell.Vt(this.lastFilled))
      }
      afterRender(bb) {
        var wb;
        this.turn.look(bb);
        const Mb = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Mb ? null : Mb.position), this.outline.show(null !== (wb = this.aimed) && void 0 !== wb ? wb : this.nextCell.get())
      }
      isHolding(bb) {
        return null !== this.altMs && bb - this.altMs <= 500
      }
      attemptAltAction(bb) {
        const wb = performance.now();
        if (this.isHolding(wb) || (this.pressFilled = !1), this.altMs = wb, this.pressFilled) return "preventPlacement";
        const Mb = this.findAimed(bb);
        if (null !== Mb) return this.foreseen.set(Mb.join(), wb), this.lastFilled = Mb, this.aimed = null, this.showNext(), this.turn.filled(Mb, wb), this.pressFilled = !0, "preventPlacement";
        {
          const Mb = this.nextCell.get();
          null !== Mb && this.turn.tapped(bb, Mb, wb)
        }
      }
      holdPressOnEntity() {
        const bb = performance.now();
        this.pressFilled && this.isHolding(bb) && (this.altMs = bb)
      }
      findAimed(bb) {
        return function(bb, wb, Mb, eb, Hb, pb, Vb) {
          const gb = bb.Leb(wb),
            lb = null === gb || null === bb.blockNameToBlockId(gb.name, !0) ? null : gb.name,
            Lb = bb.getPositionView(wb),
            {
              origin: Ib,
              direction: Ob
            } = bb.getActionRay(),
            Ub = ZM(eb, {
              from: Ib,
              dir: Ob,
              reach: QM(bb, wb),
              solid: Mb
            }, (wb => {
              const Mb = [eb[wb], eb[wb + 1], eb[wb + 2]];
              return !Aw(Hb[eb[wb + 3]], bb.getBlockId(...Mb)) && !Vb.has(Mb.join()) && bb.isBlockInLoadedChunk(...Mb) && !vM(Mb, Lb)
            }), (bb => null === lb || lb === Jw(Hb[eb[bb + 3]])), (bb => null !== pb && eb[bb] === pb[0] && eb[bb + 1] === pb[1] && eb[bb + 2] === pb[2]));
          return -1 === Ub ? null : [eb[Ub], eb[Ub + 1], eb[Ub + 2]]
        }(this.api, this.localPlayerId, bb, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(bb) {
        const {
          ghostCells: wb
        } = this, [Mb, eb, Hb] = Sw(this.palette[wb[bb + 3]]);
        return [wb[bb], wb[bb + 1], wb[bb + 2], Mb, eb, Hb]
      }
    }

    function uM(bb, wb) {
      return wb % 4 !== 3
    }
    class dM {
      constructor(bb) {
        this.api = bb, this.sent = !1
      }
      sO() {
        this.sent || gb.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var PM = Mb(3059),
      nM = Mb(40495);

    function yM(bb, wb, Mb) {
      const eb = [255 * bb, 255 * wb, 255 * Mb],
        [Hb, pb, Vb] = eb.map((bb => bb + .4 * (255 - bb)));
      return {
        texture: "square_particle",
        qO: 48,
        minLifeTime: .3 / nM.e,
        maxLifeTime: .55 / nM.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * nM.e * nM.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...eb, 1],
          maxColor: [Hb, pb, Vb, 1]
        }, {
          timeFraction: 1,
          minColor: [...eb, 0],
          maxColor: [Hb, pb, Vb, 0]
        }],
        blendMode: PM.d.Standard
      }
    }
    const oM = {
      texture: "glint",
      mipmaps: !1,
      qO: 96,
      minLifeTime: .5 / nM.e,
      maxLifeTime: .9 / nM.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * nM.e * nM.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: PM.d.OneOne
    };
    class TM {
      constructor(bb, wb) {
        this.api = bb, this.localPlayerId = wb, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(bb) {
        if (this.api.particlesEnabled())
          for (const [wb, Mb, eb, Hb, pb, Vb] of bb.slice(0, 3)) {
            const bb = `${Hb},${pb},${Vb}`;
            let gb = this.chips.get(bb);
            void 0 === gb && (gb = this.api.createParticles(yM(Hb, pb, Vb), {
              pos: [wb + .5, Mb + .5, eb + .5]
            }), this.chips.set(bb, gb));
            for (let wb = 0; wb < 8; wb++) this.setPoint(wb, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            gb.emitPoints([wb + .5, Mb + .5, eb + .5], this.points, 8)
          }
      }
      layerDone(bb) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const wb = bb.length / 3;
        if (0 === wb || !this.api.particlesEnabled()) return;
        const Mb = Math.min(wb, 48),
          [eb, Hb, pb] = [bb[0] + .5, bb[1] + 1, bb[2] + .5];
        let Vb = 0;
        for (let gb = 0; gb < Mb; gb++) {
          const lb = 3 * Math.floor(gb * wb / Mb);
          for (let wb = 0; wb < 2; wb++) this.setPoint(Vb++, bb[lb] + Math.random() - eb, bb[lb + 1] + 1 - Hb, bb[lb + 2] + Math.random() - pb, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(oM, {
          pos: [eb, Hb, pb]
        }), this.sparkles.emitPoints([eb, Hb, pb], this.points, Vb)
      }
      dispose() {
        var bb;
        for (const wb of this.chips.values()) wb.stop();
        this.chips.clear(), null === (bb = this.sparkles) || void 0 === bb || bb.stop(), this.sparkles = null
      }
      setPoint(bb, wb, Mb, eb, Hb) {
        const pb = 4 * bb;
        this.points[pb] = wb, this.points[pb + 1] = Mb, this.points[pb + 2] = eb, this.points[pb + 3] = Hb
      }
    }
    const kM = "SpecialAction1",
      be = "KeyY",
      we = "KeyX";

    function Me(bb) {
      let {
        placement: wb
      } = bb;
      const Mb = (0, lb.h)(dw, wb.getView()),
        {
          t: eb
        } = (0, Ib.C)(),
        {
          isTouchScreen: Hb
        } = (0, gb.o)(["isTouchScreen"]),
        Vb = (0, pb.useContext)(Xb),
        Ob = null !== Mb,
        Cb = Ob && !Mb.blocked && !Mb.waiting;
      if ((0, mb.d)((bb => Ob && !bb.repeat && !(0, hb.isTypingInInput)() && !(0, tb.q)() && !Hb), (bb => {
          const Mb = function(bb, wb, Mb) {
            if (bb === we) return wb.stop;
            if (bb === be) return Mb ? wb.build : He;
            return Lb.p[kM].includes(bb) ? wb.rotate : null
          }(bb.code, wb, Cb);
          null !== Mb && (bb.stopPropagation(), Mb())
        })), !Ob) return null;
      let Fb = Hb ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Mb.blocked ? Fb = "plotsGame:placementOffPlot" : Mb.toClear > 0 ? Fb = "plotsGame:placementClear" : "placeSpot" !== Vb.hint && "placeBuild" !== Vb.hint || (Fb = null), (0, Wb.jsx)(Eb.d, {
        placement: "bottom",
        children: (0, Wb.jsxs)("div", {
          ref: Vb.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, Wb.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: eb(Rb(Mb.id).displayName.translationKey)
          }), null !== Fb && (0, Wb.jsx)("div", {
            className: Ub()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Mb.refusals > 0
            }),
            children: eb(Fb)
          }, Mb.refusals), (0, Wb.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Wb.jsxs)(IM.f, {
              onClick: wb.rotate,
              children: [(0, Wb.jsx)(ee, {
                noaAction: kM
              }), eb("plotsGame:placementRotate")]
            }), (0, Wb.jsxs)(IM.Q, {
              onClick: wb.stop,
              children: [(0, Wb.jsx)(ee, {
                keyCode: we
              }), eb("general:cancel")]
            }), (0, Wb.jsx)("span", {
              ref: Vb.buildRef,
              className: Ub()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === Vb.hint && Cb && Hb
              }),
              children: (0, Wb.jsxs)(IM.p, {
                disabled: !Cb,
                onClick: wb.build,
                children: [(0, Wb.jsx)(ee, {
                  keyCode: be
                }), eb("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function ee(bb) {
      return (0, Wb.jsx)(sb.e, {
        className: "PlotsPlacementKey",
        ...bb
      })
    }

    function He() {}
    var pe = Mb(3402),
      Ve = Mb(37956),
      ge = Mb(2183),
      le = Mb(1329);
    const Le = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Ie(bb) {
      let {
        hud: wb
      } = bb;
      const Mb = (0, lb.h)(ww, wb.getPlot()),
        [eb, Hb] = (0, pb.useState)(null),
        Vb = (0, Ve.o)(eb);
      if ("none" === Mb[0]) return null;
      const [, gb, Lb, Ib, Ob, tb] = Mb;
      return (0, Wb.jsx)("div", {
        className: Ub()("PlotsPlotBannerContainer", {
          Below: Vb
        }),
        children: (0, Wb.jsx)(Oe, {
          plotX: gb,
          plotZ: Lb,
          ownerName: Ib,
          ownerId: Ob,
          relation: tb,
          plaqueRef: Hb
        }, `${gb},${Lb}`)
      })
    }

    function Oe(bb) {
      var wb, Mb;
      let {
        plotX: eb,
        plotZ: Hb,
        ownerName: pb,
        ownerId: Vb,
        relation: gb,
        plaqueRef: lb
      } = bb;
      const {
        t: Lb
      } = (0, Ib.C)(), Ob = (0, ge.h)("hiddenPlayerNames"), tb = (0, ge.h)("players"), Cb = null === Vb ? null : null !== (wb = null === (Mb = tb.byId[Vb]) || void 0 === Mb ? void 0 : Mb.cosmetics) && void 0 !== wb ? wb : null, Eb = Lb("plotsGame:plotBannerCoords", {
        x: eb,
        z: Hb
      }), Bb = "own" === gb || null !== pb;
      return (0, Wb.jsxs)("div", {
        ref: lb,
        className: Ub()("PlotsPlotBanner", {
          Own: "own" === gb,
          Shared: "shared" === gb
        }),
        role: "status",
        children: [(0, Wb.jsxs)("span", {
          className: Ub()("PlotsPlotBannerSeal", {
            Face: null !== Cb
          }),
          children: [null !== Cb && (0, Wb.jsx)(pe.e, {
            cosmetics: Cb
          }), null === Cb && (0, Wb.jsx)(Fb.b, {
            name: Le[gb]
          })]
        }), (0, Wb.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Wb.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === gb && Lb("plotsGame:plotBannerYours"), "own" !== gb && null !== pb && Lb("plotsGame:plotBannerOwner", {
              name: (0, le.c)(pb, Ob)
            }), !Bb && Eb]
          }), Bb && (0, Wb.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Eb, "shared" === gb && (0, Wb.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Lb("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const Ue = function(bb, wb, Mb, eb) {
      let {
        localPlayerId: Hb
      } = eb;
      const gb = new Hw;
      let lb = null,
        Lb = null,
        Ib = null,
        Ob = null,
        Ub = null,
        tb = null;
      const Cb = [];
      return {
        onCreate: bb => {
          lb = new TM(bb, Hb);
          const wb = new bw;
          Lb = new iM(bb, Hb, lb, wb), Ib = new nw(bb, Hb), Ob = new Ab(bb, Ib), Ub = new LM(bb, Hb, Lb.nextCell), tb = new dM(bb), Cb.push((0, Vb.J)((0, pb.createElement)(VM, {
            hud: gb,
            guide: Ub,
            tracker: wb,
            placement: Ib
          }, (0, pb.createElement)(Ie, {
            hud: gb
          }), (0, pb.createElement)(Sb, {
            journal: Ob
          }), (0, pb.createElement)(wM, {
            placement: Ib
          }), (0, pb.createElement)(Me, {
            placement: Ib
          })), {
            content: (0, pb.createElement)(YM, {
              journal: Ob,
              hud: gb,
              guide: Ub
            })
          }))
        },
        sO: () => {
          tb.sO(), Lb.sO(), Ib.sO(), Ob.sO()
        },
        onPlayerAttemptAltAction: (bb, wb, Mb, eb, Hb, pb) => {
          if (null !== pb) return void Lb.holdPressOnEntity();
          const Vb = void 0 === wb ? null : [wb, Mb, eb];
          return Lb.attemptAltAction(Vb)
        },
        onPlayerClickUp: () => {
          Lb.endPress()
        },
        onAfterRender: (bb, wb) => {
          Ib.afterRender(wb), Lb.afterRender(wb), Ub.afterRender(wb)
        },
        onClose: () => {
          for (const bb of Cb) bb();
          lb.dispose(), Lb.dispose(), Ib.dispose(), lb = null, Lb = null, Ib = null, Ob = null, Ub = null, tb = null
        },
        onReceivedMessageFromServer: (bb, wb) => {
          if ("plotsPlot" === bb) gb.receivePlot(wb);
          else if ("plotsBlueprint" === bb) {
            const bb = wb;
            Lb.EO(bb), Ib.EO(bb)
          } else "plotsJournal" === bb ? Ob.EO(wb) : "plotsJournalOpen" === bb ? Ob.openFromServer(wb) : "plotsPreviewEnd" === bb ? Ib.endFromServer() : "plotsGuide" === bb ? gb.receiveGuide(wb) : "plotsGuideDone" === bb && gb.receiveGuideDone()
        }
      }
    }
  },
  39727: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb
    });
    var eb = Mb(39723);
    const Hb = 5,
      pb = [0, 0, 0],
      Vb = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function gb(bb, wb, Mb, gb, lb, Lb) {
      let [Ib, Ob, Ub] = gb;
      const tb = (Ib + .5 - Mb[0]) ** 2 + (Ob - Mb[1]) ** 2 + (Ub + .5 - Mb[2]) ** 2;
      let Cb = null;
      tb <= Lb ** 2 && (pb[0] = Ib + .5, pb[1] = Ob + lb, pb[2] = Ub + .5, Cb = wb.projectWorldPosToViewport(pb));
      const Eb = null !== Cb && Cb.x > -Hb && Cb.x < 100 + Hb && Cb.y > -Hb && Cb.y < 100 + Hb;
      return (0, eb.f)(bb, !Eb), Eb ? (Vb.x = Cb.x, Vb.y = Cb.y, Vb.distSq = tb, Vb) : null
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
  40939: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      f: () => gb,
      j: () => lb
    });
    const eb = new Map,
      Hb = [];

    function pb() {
      for (const bb of Hb) bb()
    }

    function Vb(bb) {
      var wb;
      return eb.set(bb, (null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : 0) + 1), pb(), () => {
        const wb = eb.get(bb) - 1;
        0 === wb ? eb.delete(bb) : eb.set(bb, wb), pb()
      }
    }

    function gb() {
      return [...eb.keys()]
    }

    function lb(bb) {
      Hb.push(bb)
    }
  },
  38103: (bb, wb, Mb) => {
    Mb.d(wb, {
      D: () => Jb,
      G: () => Sb,
      J: () => Ab,
      K: () => Nb,
      b: () => lb,
      f: () => Db,
      i: () => gb,
      j: () => fb,
      m: () => rb,
      n: () => Xb,
      o: () => Zb,
      r: () => Yb,
      v: () => Kb,
      z: () => Wb
    });
    var eb = Mb(43);
    const Hb = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      pb = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Vb = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      gb = pb.filter((bb => "docsButton" !== bb)),
      lb = Vb.filter((bb => "aiHelperButton" !== bb)),
      Lb = "codeEditorTutorials",
      Ib = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Ob = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Ub = null,
      tb = null;
    const Cb = new Set,
      Eb = new Set;
    let Fb = null;
    const Bb = new Set,
      sb = new Set;

    function mb() {
      sb.forEach((bb => {
        bb()
      }))
    }

    function hb() {
      if (!Ub) {
        const bb = eb.i.getItem(Lb);
        Ub = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return Ub
    }

    function zb(bb) {
      const wb = hb();
      wb[bb] || (Ub = {
        ...wb,
        [bb]: !0
      }, eb.i.setItem(Lb, Ub))
    }

    function Xb(bb) {
      return "docsOverview" === bb ? pb : "aiHelperOverview" === bb ? Vb : tb ? Hb[tb] : []
    }

    function xb(bb) {
      return ("worldCodeButton" !== bb || !hb().worldCodeIntroShown) && !Bb.has(bb)
    }

    function jb(bb) {
      var wb;
      return (null === (wb = Fb) || void 0 === wb ? void 0 : wb.name) === bb ? Fb.stepsDone : Cb
    }

    function Kb(bb, wb) {
      if (! function(bb) {
          return Fb ? Fb.name === bb : "welcome" === bb
        }(bb) || !xb(wb) || jb(bb).has(wb)) return !1;
      if (Fb) return !0;
      const Mb = Ib[wb];
      return Mb ? !hb()[Mb] || Eb.has(wb) : !hb()[Ob[bb]]
    }

    function rb(bb) {
      var wb;
      return null !== (wb = Xb(bb).find((wb => Kb(bb, wb)))) && void 0 !== wb ? wb : null
    }

    function Rb(bb) {
      var wb;
      zb(Ob[bb]), (null === (wb = Fb) || void 0 === wb ? void 0 : wb.name) === bb && (Fb = null)
    }

    function Db(bb) {
      const wb = (Fb ? [Fb.name] : ["welcome", "docsOverview"]).find((wb => rb(wb) === bb));
      if (!wb) return;
      jb(wb).add(bb);
      const Mb = Ib[bb];
      Mb && (zb(Mb), Fb || Eb.add(bb)), null === rb(wb) && Rb(wb), mb()
    }

    function cb(bb, wb) {
      const Mb = Xb(bb),
        eb = jb(bb);
      for (let Hb = Mb.indexOf(wb) - 1; Hb >= 0; Hb--)
        if (eb.has(Mb[Hb]) && xb(Mb[Hb])) return Mb[Hb];
      return null
    }

    function Yb(bb, wb) {
      return null !== cb(bb, wb)
    }

    function Zb(bb, wb) {
      const Mb = cb(bb, wb);
      Mb && (jb(bb).delete(Mb), mb())
    }

    function fb(bb) {
      Rb(bb), "welcome" === bb && Xb("welcome").forEach((bb => {
        const wb = Ib[bb];
        wb && zb(wb)
      })), mb()
    }

    function Ab(bb) {
      Fb = {
        name: bb,
        stepsDone: new Set
      }, mb()
    }

    function Wb() {
      (Fb || 0 !== Cb.size || 0 !== Eb.size) && (Fb = null, Cb.clear(), Eb.clear(), mb())
    }

    function Jb(bb, wb) {
      const Mb = wb ? bb : tb === bb ? null : tb;
      Mb !== tb && (tb = Mb, mb())
    }

    function Sb(bb, wb) {
      Bb.has(bb) === wb && (wb ? Bb.delete(bb) : Bb.add(bb), mb())
    }

    function Nb(bb) {
      return sb.add(bb), () => {
        sb.delete(bb)
      }
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
  39637: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => tb,
      B: () => Xb,
      E: () => jb,
      I: () => zb,
      J: () => hb,
      M: () => Ub,
      Q: () => Eb,
      R: () => Bb,
      T: () => Hb,
      c: () => Ib,
      g: () => lb,
      i: () => mb,
      l: () => Lb,
      o: () => gb,
      q: () => Vb,
      u: () => pb,
      w: () => xb
    });
    var eb = Mb(5953);

    function Hb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    const pb = 2e3,
      Vb = .005,
      gb = .001,
      lb = 2,
      Lb = "Fluid Tank",
      Ib = "Coolant Mixer",
      Ob = 144;

    function Ub(bb) {
      const wb = bb.split("|")[0];
      return (0, eb.j)(wb) ? wb === eb.e ? "cryo" : "water" : null
    }
    const tb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Cb = 63;

    function Eb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Mb = wb ? function(bb, wb, Mb) {
        const eb = tb.findIndex((eb => {
          let [Hb, pb, Vb] = eb;
          return Hb === bb && pb === wb && Vb === Mb
        }));
        return eb < 0 ? 0 : 1 << eb
      }(wb[0], wb[1], wb[2]) : 0;
      return "maker" === bb ? {
        kind: bb,
        faces: Mb
      } : "user" === bb ? {
        kind: bb,
        faces: Cb & ~Mb
      } : {
        kind: bb,
        faces: Cb
      }
    }

    function Fb(bb) {
      return "pipe" === bb || "tank" === bb || "maker" === bb
    }

    function Bb(bb, wb, Mb) {
      return 0 !== (bb.faces & 1 << Mb) && 0 !== (wb.faces & 1 << (1 ^ Mb)) && (Fb(bb.kind) || Fb(wb.kind))
    }
    const sb = (bb, wb, Mb, eb) => ({
        input: bb,
        inputAmount: eb,
        output: wb,
        outputAmount: Mb
      }),
      mb = {
        Condenser: {
          kind: "Condenser",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [],
          recipes: [],
          powerPerOp: 60,
          fluidMade: 12,
          couplable: !0,
          couplerSlot: 0
        },
        Centrifuge: {
          kind: "Centrifuge",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [sb("Uranium Grit", "Uranium Pellet", 1, 12), sb("Spent Pellet", "Plutonium Pellet", 1, 4)],
          powerPerOp: 600,
          waterPerOp: 24
        },
        Synthesizer: {
          kind: "Synthesizer",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 120,
          waterPerOp: 12,
          synth: !0
        },
        "Coolant Mixer": {
          kind: "Coolant Mixer",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [],
          recipes: [sb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Ob,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function hb(bb, wb) {
      return 1e3 * (null !== wb && void 0 !== wb ? wb : 0) / bb.opMs
    }

    function zb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Mb = hb(mb["Coolant Mixer"], Ob) * wb;
      return bb <= 0 ? 0 : Math.ceil(bb / Mb - 1e-9)
    }
    const Xb = "baf2Water",
      xb = "baf2waterclose",
      jb = "baf2wateropen"
  },
  40931: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      e: () => Ob
    });
    var eb = Mb(5868),
      Hb = Mb(5899),
      pb = Mb(5914);
    const Vb = [0, 0, 0, 1, 1, 1],
      gb = (0, Hb.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      lb = (0, Hb.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Lb = (0, Hb.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Ib = [0, 1, 2, 3].map((bb => (0, Hb.d)((0, Hb.m)([
        [3, 2, 0, 5, 7, 3]
      ], bb))));

    function Ob(bb) {
      const {
        lF: wb,
        model: Mb,
        blockModel: Hb,
        meta: Ob
      } = eb.g[bb];
      return void 0 !== wb ? wb : "CentreCross" === Mb ? gb : null !== Hb && void 0 !== Hb && Hb.startsWith("torch") ? Ob.halfblockPlacement === pb.c.side ? Ib[Ob.rot - 1] : Ob.halfblockPlacement === pb.c.top ? Lb : lb : Vb
    }
  },
  39633: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => fb,
      g: () => Ab
    });
    var eb = Mb(5868),
      Hb = Mb(5901);
    const pb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Vb = Mb(5923),
      gb = Mb(39455),
      lb = Mb(5914);
    const Lb = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Ib(bb) {
      let [wb, Mb] = bb;
      return [-Mb, wb]
    }

    function Ob(bb, wb) {
      return bb[0] === wb[0] && bb[1] === wb[1]
    }

    function Ub(bb, wb) {
      return bb[0] * wb[0] + bb[1] * wb[1] === 0
    }
    const tb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Cb = Mb(5945);

    function Eb(bb, wb, Mb, eb, Hb) {
      return wb < Cb.n || wb >= Cb.n + Cb.o || Math.floor(bb / Cb.v) === Math.floor(eb / Cb.v) && Math.floor(Mb / Cb.v) === Math.floor(Hb / Cb.v)
    }
    const Fb = "Splitter",
      Bb = "Sorting Gate",
      sb = new Set(Cb.H),
      mb = new Set([...Cb.H, "Belt Loader", "Fast Loader", Bb]),
      hb = new Set(Cb.r),
      zb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function Xb(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = eb.g[bb]) || void 0 === Mb ? void 0 : Mb.meta.rootName) && void 0 !== wb ? wb : ""
    }

    function xb(bb) {
      return Xb(bb) === Cb.g && (0, Cb.P)(eb.g[bb].name)
    }
    var jb = Mb(5908),
      Kb = Mb(5933);
    const rb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Rb(bb) {
      var wb, Mb;
      const Hb = null === (wb = eb.g[bb]) || void 0 === wb ? void 0 : wb.meta;
      return (null === Hb || void 0 === Hb ? void 0 : Hb.rootName) !== Kb.n ? null : {
        rot: null !== (Mb = Hb.rot) && void 0 !== Mb ? Mb : 1,
        half: (0, Kb.e)(Hb.rootName, Hb.metaStr)
      }
    }

    function Db(bb, wb, Mb, eb) {
      return Rb(bb(wb, Mb, eb))
    }

    function cb(bb, wb, Mb, eb, Hb) {
      let {
        rot: pb,
        half: Vb
      } = Hb;
      const [gb, lb] = (0, Kb.j)(pb, Vb), Lb = Db(bb, wb + gb, Mb, eb + lb);
      return null !== Lb && Lb.rot === pb && Lb.half === Kb.o[Vb]
    }
    var Yb = Mb(39635);
    const Zb = [new class {
      constructor() {
        this.reshapeOffsets = tb
      }
      handles(bb) {
        var wb;
        return "Stairs" === (null === (wb = eb.g[bb]) || void 0 === wb ? void 0 : wb.model)
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, wb, Mb, Hb, pb) {
        const Vb = this.stairsOf(pb),
          gb = this.cornerAt(bb, wb, Mb, Hb, Vb),
          Lb = Vb.half === lb.c.top ? "top" : "bot";
        return (0, eb.i)(`${eb.g[pb].meta.rootName}|meta|rot${Vb.rot}|${Lb}${null===gb?"":`|${gb}`}`)
      }
      stairsOf(bb) {
        const {
          rot: wb,
          halfblockPlacement: Mb
        } = eb.g[bb].meta;
        return {
          rot: wb,
          half: Mb
        }
      }
      stairsAt(bb, wb, Mb, eb) {
        const Hb = bb(wb, Mb, eb);
        return this.handles(Hb) ? this.stairsOf(Hb) : null
      }
      cornerAt(bb, wb, Mb, eb, Hb) {
        let {
          rot: pb,
          half: Vb
        } = Hb;
        const gb = Lb[pb],
          lb = Hb => {
            let [gb, lb] = Hb;
            const Lb = this.stairsAt(bb, wb + gb, Mb, eb + lb);
            return null !== Lb && Lb.rot === pb && Lb.half === Vb
          },
          tb = this.stairsAt(bb, wb + gb[0], Mb, eb + gb[1]);
        if (null !== tb && tb.half === Vb) {
          const bb = Lb[tb.rot];
          if (Ub(gb, bb) && !lb([-bb[0], -bb[1]])) return Ob(bb, Ib(gb)) ? "outerLeft" : "outerRight"
        }
        const Cb = this.stairsAt(bb, wb - gb[0], Mb, eb - gb[1]);
        if (null !== Cb && Cb.half === Vb) {
          const bb = Lb[Cb.rot];
          if (Ub(gb, bb) && !lb(bb)) return Ob(bb, Ib(gb)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = pb, this.rootIds = new Set(Hb.i.map((bb => (0, eb.i)(bb))))
      }
      handles(bb) {
        var wb;
        const Mb = null === (wb = eb.g[bb]) || void 0 === wb ? void 0 : wb.meta;
        return void 0 !== Mb && this.rootIds.has(Mb.rootId)
      }
      affects(bb) {
        return this.handles(bb)
      }
      placedBy(bb) {
        return eb.g[bb].meta.rootName === Hb.m ? null : Hb.m
      }
      shape(bb, wb, Mb, pb, Vb) {
        const {
          rootId: gb,
          rootName: lb,
          rot: Lb
        } = eb.g[Vb].meta;
        let Ib = 0;
        return Hb.s[Lb].forEach(((Hb, Vb) => {
          var lb;
          let [Ob, Ub, tb] = Hb;
          const Cb = null === (lb = eb.g[bb(wb + Ob, Mb + Ub, pb + tb)]) || void 0 === lb ? void 0 : lb.meta;
          (null === Cb || void 0 === Cb ? void 0 : Cb.rootId) === gb && Cb.rot === Lb && (Ib |= 1 << Vb)
        })), (0, eb.i)((0, Hb.e)(lb, Lb, Ib))
      }
    }, ...Vb.c.map((bb => new gb.e(bb))), new class {
      constructor() {
        this.reshapeOffsets = zb
      }
      handles(bb) {
        const wb = Xb(bb);
        return sb.has(wb) || wb === Cb.g
      }
      affects(bb) {
        const wb = Xb(bb);
        return mb.has(wb) || hb.has(wb) || wb === Fb || wb === Cb.g || void 0 !== Cb.c[wb]
      }
      shape(bb, wb, Mb, Hb, pb, Vb) {
        const {
          rootName: gb,
          rot: lb
        } = eb.g[pb].meta;
        return gb === Cb.g ? Vb ? pb : function(bb, wb, Mb, Hb, pb) {
          const [Vb, gb] = Cb.d[pb - 1];
          for (let lb = 1; lb <= Cb.F; lb++) {
            const [Lb, Ib] = [wb - Vb * lb, Hb - gb * lb], Ob = bb(Lb, Mb, Ib);
            if (Xb(Ob) === Cb.g && eb.g[Ob].meta.rot === pb && Eb(wb, Mb, Hb, Lb, Ib)) return (0, eb.i)((0, Cb.W)(pb, !xb(Ob)))
          }
          return (0, eb.i)((0, Cb.W)(pb, !1))
        }(bb, wb, Mb, Hb, lb) : (0, eb.i)((0, Cb.I)(gb, lb, function(bb, wb, Mb, Hb, pb) {
          const [Vb, gb] = Cb.d[pb - 1], lb = (pb, Vb) => function(bb, wb, Mb) {
            var Hb;
            const pb = null === (Hb = eb.g[bb]) || void 0 === Hb ? void 0 : Hb.meta;
            if (!pb) return !1;
            const Vb = pb.rootName,
              gb = mb.has(Vb) || xb(bb);
            if (!gb && !hb.has(Vb) && Vb !== Fb) return !1;
            const [lb, Lb] = Cb.d[pb.rot - 1];
            if (gb && lb === -wb && Lb === -Mb) return !0;
            if (hb.has(Vb)) return lb === wb && Lb === Mb;
            const Ib = eb.g[bb].name;
            return (Vb === Fb ? (0, Cb.V)(Ib, lb, Lb) : Vb === Bb ? [(0, Cb.K)(Ib, lb, Lb)] : []).some((bb => {
              let [eb, Hb] = bb;
              return eb === -wb && Hb === -Mb
            }))
          }(bb(wb + pb, Mb, Hb + Vb), pb, Vb), Lb = bb(wb - Vb, Mb, Hb - gb), Ib = Xb(Lb) === Fb && eb.g[Lb].meta.rot === pb, Ob = 1 === Cb.c[Xb(bb(wb, Mb - 1, Hb))] || -1 === Cb.c[Xb(bb(wb, Mb + 1, Hb))];
          if (Ob || Ib || lb(-Vb, -gb)) return null;
          const Ub = lb(-gb, Vb),
            tb = lb(gb, -Vb);
          if (Ub === tb) return null;
          return Ub ? "turnLeft" : "turnRight"
        }(bb, wb, Mb, Hb, lb)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = rb, this.rootId = (0, eb.i)(Kb.n)
      }
      handles(bb) {
        var wb;
        return (null === (wb = eb.g[bb]) || void 0 === wb ? void 0 : wb.meta.rootId) === this.rootId
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, wb, Mb, Hb, pb, Vb) {
        const gb = Rb(pb);
        return (0, eb.i)((lb = gb.rot, null !== (Lb = Vb ? this.reshapedHalf(bb, wb, Mb, Hb, gb) : this.placedHalf(bb, wb, Mb, Hb, gb.rot)) ? (0, Kb.b)(Kb.n, lb, Lb) : 1 === lb ? Kb.n : `${Kb.n}|meta|rot${lb}`));
        var lb, Lb
      }
      placedHalf(bb, wb, Mb, eb, Hb) {
        const [pb, Vb] = jb.c[Hb];
        for (const [gb, lb] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Lb = wb + lb * pb,
            Ib = eb + lb * Vb,
            Ob = Db(bb, Lb, Mb, Ib);
          if (null !== Ob && Ob.rot === Hb && (null === Ob.half || !cb(bb, Lb, Mb, Ib, Ob))) return gb
        }
        return null
      }
      reshapedHalf(bb, wb, Mb, eb, Hb) {
        if (null !== Hb.half && cb(bb, wb, Mb, eb, Hb)) return Hb.half;
        for (const pb of ["right", "left"]) {
          const [Vb, gb] = (0, Kb.j)(Hb.rot, pb), lb = Db(bb, wb + Vb, Mb, eb + gb);
          if (null !== lb && lb.rot === Hb.rot && lb.half === Kb.o[pb]) return pb
        }
        return null
      }
    }, new Yb.d];

    function fb(bb, wb, Mb, eb, Hb) {
      let pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Vb of Zb)
        if (Vb.handles(Hb)) return Vb.shape(bb, wb, Mb, eb, Hb, pb);
      return Hb
    }

    function Ab(bb) {
      for (const eb of Zb) {
        var wb, Mb;
        if (eb.handles(bb)) return null !== (wb = null === (Mb = eb.placedBy) || void 0 === Mb ? void 0 : Mb.call(eb, bb)) && void 0 !== wb ? wb : null
      }
      return null
    }
  },
  39635: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Kb,
      f: () => hb,
      j: () => mb
    });
    var eb = Mb(5868),
      Hb = Mb(5890),
      pb = Mb(5953),
      Vb = Mb(39637),
      gb = Mb(5945);
    const lb = (0, Vb.Q)("pipe"),
      Lb = (0, Vb.Q)("tank"),
      Ib = (0, Vb.Q)("port"),
      Ob = "Reactor Port";

    function Ub(bb, wb, Mb) {
      const eb = new Set([pb.f, pb.e, Ob, ...wb, ...Mb, ...bb ? [Vb.l] : []]);
      return {
        makers: new Set(wb),
        roots: eb
      }
    }
    const tb = {
        water: Ub(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Vb.c]),
        cryo: Ub(!1, [Vb.c], [])
      },
      Cb = new Set([...tb.water.roots, ...tb.cryo.roots]),
      Eb = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Fb = Hb.g.map((bb => Eb[bb])),
      Bb = Fb.map((bb => {
        let [wb, Mb, eb] = bb;
        return Vb.A.findIndex((bb => {
          let [Hb, pb, Vb] = bb;
          return Hb === wb && pb === Mb && Vb === eb
        }))
      }));

    function sb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Mb = eb.g[bb],
        Hb = null === Mb || void 0 === Mb ? void 0 : Mb.meta.rootName,
        Ub = tb[wb];
      if (!Hb || !Ub.roots.has(Hb)) return null;
      if ((0, pb.j)(Hb)) return (0, Vb.M)(Mb.name) === wb ? lb : null;
      if (Hb === Vb.l) return Lb;
      if (Hb === Ob) return Mb.name.endsWith("|Water") ? Ib : null;
      const [Cb, Eb] = gb.d[(Mb.meta.rot || 1) - 1];
      return (0, Vb.Q)(Ub.makers.has(Hb) ? "maker" : "user", [-Cb, 0, -Eb])
    }

    function mb(bb, wb, Mb, Hb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: gb
      } = tb[pb];
      return Fb.some(((Lb, Ib) => {
        var Ob, Ub;
        let [tb, Cb, Eb] = Lb;
        const Fb = bb(wb + tb, Mb + Cb, Hb + Eb),
          mb = sb(Fb, pb);
        return null !== mb && gb.has(null !== (Ob = null === (Ub = eb.g[Fb]) || void 0 === Ub ? void 0 : Ub.meta.rootName) && void 0 !== Ob ? Ob : "") && !(0, Vb.R)(lb, mb, Bb[Ib])
      }))
    }

    function hb(bb) {
      const wb = eb.g[bb];
      return wb ? (0, Vb.M)(wb.name) : null
    }
    let zb = null;

    function Xb(bb) {
      if (!zb) {
        zb = new Map;
        for (const bb of ["water", "cryo"])
          for (let wb = 0; wb < 64; wb++)
            for (const Mb of [!1, !0]) zb.set((0, pb.l)(bb, wb, Mb), {
              ht: bb,
              mask: wb,
              full: Mb
            })
      }
      return zb.get(bb)
    }
    const xb = new Map(Array.from({
      length: pb.h + 1
    }, ((bb, wb) => [(0, pb.n)(wb), wb])));

    function jb(bb, wb, Mb, Hb, pb, Vb) {
      return Fb.some(((gb, lb) => {
        var Lb, Ib, Ob;
        let [Ub, tb, Cb] = gb;
        if (0 === (Vb >> lb & 1)) return !1;
        const Eb = null !== (Lb = null === (Ib = eb.g[bb(wb + Ub, Mb + tb, Hb + Cb)]) || void 0 === Ib ? void 0 : Ib.name) && void 0 !== Lb ? Lb : "",
          Fb = Xb(Eb);
        return Fb ? Fb.ht === pb && Fb.full : (null !== (Ob = function(bb) {
          var wb;
          return null !== (wb = xb.get(bb)) && void 0 !== wb ? wb : null
        }(Eb)) && void 0 !== Ob ? Ob : 0) > 0
      }))
    }
    class Kb {
      constructor() {
        this.reshapeOffsets = Fb
      }
      handles(bb) {
        return null !== hb(bb)
      }
      affects(bb) {
        var wb, Mb;
        return Cb.has(null !== (wb = null === (Mb = eb.g[bb]) || void 0 === Mb ? void 0 : Mb.meta.rootName) && void 0 !== wb ? wb : "")
      }
      placedBy(bb) {
        var wb;
        return (null === (wb = eb.g[bb]) || void 0 === wb ? void 0 : wb.meta.rootName) === pb.e ? pb.f : null
      }
      shape(bb, wb, Mb, Hb, gb, Lb) {
        var Ib, Ob, Ub;
        const tb = null !== (Ib = null === (Ob = eb.g[gb]) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Ib ? Ib : "",
          Cb = Lb || tb !== pb.f ? null !== (Ub = (0, Vb.M)(tb)) && void 0 !== Ub ? Ub : "water" : function(bb, wb, Mb, eb) {
            return Fb.some(((Hb, pb) => {
              let [gb, Lb, Ib] = Hb;
              const Ob = sb(bb(wb + gb, Mb + Lb, eb + Ib), "cryo");
              return null !== Ob && "port" !== Ob.kind && (0, Vb.R)(lb, Ob, Bb[pb])
            })) ? "cryo" : "water"
          }(bb, wb, Mb, Hb),
          Eb = function(bb, wb, Mb, eb) {
            let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              pb = 0;
            return Fb.forEach(((gb, Lb) => {
              let [Ib, Ob, Ub] = gb;
              const tb = sb(bb(wb + Ib, Mb + Ob, eb + Ub), Hb);
              tb && (0, Vb.R)(lb, tb, Bb[Lb]) && (pb |= 1 << Lb)
            })), pb
          }(bb, wb, Mb, Hb, Cb),
          mb = Lb ? function(bb) {
            var wb;
            return !0 === (null === (wb = Xb(bb)) || void 0 === wb ? void 0 : wb.full)
          }(tb) : jb(bb, wb, Mb, Hb, Cb, Eb);
        return (0, eb.i)((0, pb.l)(Cb, Eb, mb))
      }
    }
  },
  38109: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return null === bb || null === wb ? bb === wb : bb[0] === wb[0] && bb[1] === wb[1] && bb[2] === wb[2]
    }

    function Hb(bb) {
      return [bb[0] + .5, bb[1] + .5, bb[2] + .5]
    }
    Mb.d(wb, {
      e: () => Hb,
      g: () => eb
    })
  },
  39406: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      f: () => pb
    });
    const eb = ["Chest", "Loot Chest", "Moonstone Chest"],
      Hb = [{
        name: "Workbench",
        exactMatch: !0
      }, {
        name: "Furnace",
        exactMatch: !0
      }, {
        name: "Artisan Bench",
        exactMatch: !0
      }, {
        name: "Potion Table",
        exactMatch: !0
      }, {
        name: "Salvaging Table",
        exactMatch: !0
      }, {
        name: "Enchanting Table",
        exactMatch: !1
      }];

    function pb(bb) {
      return Hb.find((wb => wb.exactMatch ? bb === wb.name : bb.includes(wb.name)))
    }
  },
  38145: (bb, wb, Mb) => {
    function eb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Hb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !eb(bb)
    }

    function pb(bb) {
      return bb.includes(" Strongbed")
    }

    function Vb(bb) {
      return eb(bb) || Hb(bb) || pb(bb)
    }
    Mb.d(wb, {
      e: () => Vb,
      f: () => eb,
      g: () => pb,
      i: () => Hb
    })
  },
  38139: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb
    });
    var eb = Mb(38145),
      Hb = Mb(5868);
    const pb = [],
      Vb = [],
      gb = [],
      lb = [];
    for (const Ib of Object.keys(Hb.l))(0, eb.f)(Ib) ? pb.push(Ib) : (0, eb.i)(Ib) && Vb.push(Ib), (0, eb.g)(Ib) && gb.push(Ib), (Ib.includes(" Bed Head") || Ib.includes(" Strongbed Head")) && lb.push(Ib);
    const Lb = {
      leafBeds: pb,
      woolBeds: Vb,
      strongBeds: gb,
      beds: [...pb, ...Vb, ...gb],
      bedHeads: lb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39804: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);