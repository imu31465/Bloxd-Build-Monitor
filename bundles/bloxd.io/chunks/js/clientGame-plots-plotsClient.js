export const id = 26;
export const ids = [26];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  38431: (dd, Od, md) => {
    md.d(Od, {
      b: () => Jd,
      f: () => wd,
      h: () => Ed,
      j: () => qd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(66),
      Xd = md(86),
      Kd = md(1480),
      hd = md(1572),
      vd = md(1471),
      Qd = md(1333),
      td = md(1238),
      od = md(38439),
      Nd = md(1341);

    function qd(dd) {
      const [Od, md] = (0, Rd.useState)((() => (0, od.l)(dd)));
      return (0, Rd.useEffect)((() => (md((0, od.l)(dd)), (0, od.D)((() => {
        md((0, od.l)(dd))
      })))), [dd]), Od
    }

    function Hd(dd, Od) {
      "function" === typeof dd ? dd(Od) : dd && (dd.current = Od)
    }

    function yd(dd) {
      let {
        tutorial: Od,
        step: md,
        enabled: Wd = !0
      } = dd;
      const Fd = qd(Od);
      return Wd && Fd === md
    }

    function bd(dd, Od) {
      const md = (0, od.m)(dd),
        Wd = md.indexOf(Od);
      return !md.slice(Wd + 1).some((Od => (0, od.v)(dd, Od)))
    }

    function Td(dd, Od, md, Wd) {
      let {
        tutorial: Fd,
        step: Rd,
        waitForClick: Xd = !1,
        onPrevious: Kd
      } = dd;
      const hd = Od && (0, od.r)(Fd, Rd),
        vd = Od && !bd(Fd, Rd),
        td = Xd ? Wd : md;
      let Nd = null;
      hd ? Nd = () => {
        null === Kd || void 0 === Kd || Kd(), (0, od.q)(Fd, Rd)
      } : vd && (Nd = () => {
        (0, od.h)(Fd)
      }), (0, Qd.m)("popup", null !== td && void 0 !== td ? td : md, Nd, Od && null !== td, null, hd ? void 0 : "controller:menusSkipTutorial")
    }

    function pd(dd) {
      let {
        tutorial: Od,
        step: md,
        text: Wd,
        waitForClick: Fd = !1,
        onPrevious: Rd
      } = dd;
      const {
        t: Xd
      } = (0, td.G)(), Kd = bd(Od, md);
      return (0, Nd.jsxs)(Nd.Fragment, {
        children: [(0, Nd.jsx)("div", {
          className: "TutorialStepText",
          children: Wd
        }), (0, Nd.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, od.r)(Od, md) && (0, Nd.jsx)(hd.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Rd || void 0 === Rd || Rd(), (0, od.q)(Od, md)
            },
            children: Xd("tutorial:back")
          }), !Fd && (0, Nd.jsx)(hd.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, od.e)(md)
            },
            padDefaultFocus: !0,
            children: Xd(Kd ? "tutorial:done" : "tutorial:next")
          }), !Kd && (0, Nd.jsx)(hd.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, od.h)(Od)
            },
            children: Xd("tutorial:skip")
          })]
        })]
      })
    }
    const Yd = 6;

    function gd(dd) {
      let {
        rect: Od,
        margin: md
      } = dd;
      const Wd = Math.max(0, Od.top - md),
        Fd = Od.bottom + md,
        Rd = Math.max(0, Od.left - md),
        Xd = Od.right + md;
      return (0, Nd.jsxs)(Nd.Fragment, {
        children: [(0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Wd
          }
        }), (0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Fd,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wd,
            left: 0,
            width: Rd,
            height: Fd - Wd
          }
        }), (0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wd,
            left: Xd,
            right: 0,
            height: Fd - Wd
          }
        })]
      })
    }

    function wd(dd) {
      let {
        target: Od,
        placement: md,
        boxRef: Wd,
        className: hd,
        spotlight: Qd = !0,
        spotlightMargin: td = Yd,
        children: od
      } = dd;
      const {
        getArrowProps: qd,
        getTooltipProps: Hd,
        setTooltipRef: yd,
        setTriggerRef: bd,
        update: Td
      } = (0, Kd.e)({
        placement: md,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, td]
      });
      (0, Rd.useLayoutEffect)((() => {
        bd(Od)
      }), [Od, bd]);
      const pd = function(dd, Od) {
        const [md, Wd] = (0, Rd.useState)(null);
        return (0, Rd.useEffect)((() => {
          if (!Od || !dd) return void Wd(null);
          let md = 0,
            Fd = null;
          const Rd = () => {
            const Od = dd.getBoundingClientRect();
            Fd && Od.left === Fd.left && Od.top === Fd.top && Od.width === Fd.width && Od.height === Fd.height || (Fd = Od, Wd(Od)), md = requestAnimationFrame(Rd)
          };
          return Rd(), () => {
            cancelAnimationFrame(md)
          }
        }), [dd, Od]), md
      }(Od, Qd);
      (0, Rd.useEffect)((() => {
        null === Td || void 0 === Td || Td()
      }), [pd, Td]), (0, Rd.useEffect)((() => {
        if (Qd || !Od || !Td) return;
        const dd = new ResizeObserver((() => {
          Td()
        }));
        return dd.observe(Od), Od.parentElement && dd.observe(Od.parentElement), () => {
          dd.disconnect()
        }
      }), [Od, Qd, Td]), (0, Rd.useEffect)((() => {
        Qd && (null === Od || void 0 === Od || Od.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [Od, Qd]);
      const wd = (0, Rd.useCallback)((dd => {
        yd(dd), Wd && (Wd.current = dd)
      }), [yd, Wd]);
      return (0, Xd.createPortal)((0, Nd.jsxs)(Nd.Fragment, {
        children: [pd && (0, Nd.jsx)(gd, {
          rect: pd,
          margin: td
        }), (0, Nd.jsxs)("div", {
          ref: wd,
          ...Hd({
            className: Fd()("tooltip-container SmallTextLight TutorialStep", hd)
          }),
          children: [od, (0, Nd.jsx)("div", {
            ...qd({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, vd.h)())
    }
    const Ed = (0, Rd.forwardRef)((function(dd, Od) {
      let {
        placement: md = "right",
        children: Wd,
        ...Fd
      } = dd;
      const Xd = yd(Fd),
        Kd = (0, Rd.useRef)(null),
        hd = (0, Rd.useRef)(null);
      Td(Fd, Xd, Kd, hd);
      const [vd, Qd] = (0, Rd.useState)(null), td = Wd.ref, od = (0, Rd.useCallback)((dd => {
        hd.current = dd, Qd(dd), Hd(Od, dd), Hd(td, dd)
      }), [Od, td]);
      return (0, Nd.jsxs)(Nd.Fragment, {
        children: [(0, Rd.cloneElement)(Wd, {
          ref: od
        }), Xd && (0, Nd.jsx)(wd, {
          target: vd,
          placement: md,
          boxRef: Kd,
          children: (0, Nd.jsx)(pd, {
            ...Fd
          })
        })]
      })
    }));

    function Jd(dd) {
      const Od = yd(dd),
        md = (0, Rd.useRef)(null);
      return Td(dd, Od, md, null), Od ? (0, Xd.createPortal)((0, Nd.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Nd.jsx)("div", {
          ref: md,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Nd.jsx)(pd, {
            ...dd
          })
        })
      }), (0, vd.h)()) : null
    }
  },
  38302: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => hd,
      h: () => vd,
      j: () => Qd,
      l: () => qd
    });
    var Wd = md(66),
      Fd = md(4308),
      Rd = md(3510),
      Xd = md(32);
    const Kd = 8,
      hd = "InGameHeaderContainer",
      vd = "TopRightElements";

    function Qd(dd) {
      const [Od] = (0, Fd.b)(), [md, Rd] = (0, Wd.useState)(!1);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Od = document.querySelector(`.${hd}`),
          md = document.querySelector(`.${vd}`),
          Wd = () => {
            const Wd = dd.getBoundingClientRect(),
              Fd = Od ? Od.getBoundingClientRect().right : 0,
              Xd = md ? md.getBoundingClientRect().left : window.innerWidth,
              hd = Wd.left < Fd + Kd,
              vd = Wd.right > Xd - Kd;
            Rd(hd || vd)
          };
        Wd();
        const Fd = new ResizeObserver(Wd);
        return Fd.observe(dd), Od && Fd.observe(Od), md && Fd.observe(md), () => {
          Fd.disconnect()
        }
      }), [dd, Od]), md
    }
    const td = `.InGameUi .${hd}`,
      od = [td, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nd = 1e3;

    function qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd,
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Fd, hd] = (0, Wd.useState)(null);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Wd = new ResizeObserver((() => {
          vd()
        }));
        Wd.observe(dd), Od && Od !== dd && Wd.observe(Od);
        let Fd = [];

        function vd() {
          var Rd, Xd, vd;
          const Qd = dd.getBoundingClientRect(),
            Nd = function() {
              const dd = od.map((dd => document.querySelector(dd))).filter((dd => null !== dd));
              for (const Od of dd) Fd.includes(Od) || Wd.observe(Od);
              for (const Od of Fd) dd.includes(Od) || Wd.unobserve(Od);
              return Fd = dd, dd
            }(),
            qd = Nd.filter((dd => {
              const Od = dd.getBoundingClientRect();
              return Od.width > 0 && Od.height > 0 && Qd.left < Od.right + Kd && Qd.right > Od.left - Kd
            }));
          if (0 === qd.length && !md) return void hd(null);
          const Hd = Nd.find((dd => dd.matches(td))),
            yd = Math.max(null !== (Rd = null === Hd || void 0 === Hd ? void 0 : Hd.getBoundingClientRect().bottom) && void 0 !== Rd ? Rd : 0, ...qd.map((dd => dd.getBoundingClientRect().bottom))),
            bd = null !== (Xd = null === Od || void 0 === Od || null === (vd = Od.offsetParent) || void 0 === vd ? void 0 : vd.getBoundingClientRect().top) && void 0 !== Xd ? Xd : 0;
          hd(Math.ceil(yd + Kd / 2) - Math.round(bd))
        }
        const Qd = setInterval(vd, Nd);
        vd(), window.addEventListener("resize", vd);
        const qd = (0, Xd.l)(Rd.c, vd);
        return () => {
          Wd.disconnect(), clearInterval(Qd), window.removeEventListener("resize", vd), qd()
        }
      }), [dd, Od, md]), Fd
    }
  },
  39619: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd,
      d: () => Wd,
      f: () => Kd,
      i: () => Fd,
      k: () => Xd,
      n: () => Rd
    });
    const Wd = 1.001,
      Fd = .501,
      Rd = .025,
      Xd = .75,
      Kd = .08,
      hd = 4;

    function vd() {
      const dd = Fd,
        Od = Rd,
        md = dd - Od / 2,
        Wd = (2 * dd - 2 * Od) / (2 * hd - 1),
        Xd = [];
      for (const Fd of [-md, md])
        for (const Rd of [-md, md])
          for (let md = 0; md < hd; md++) {
            const Kd = -dd + Od + Wd * (2 * md + .5);
            Xd.push([Wd, Od, Od, Kd, Fd, Rd]), Xd.push([Od, Wd, Od, Fd, Kd, Rd]), Xd.push([Od, Od, Wd, Fd, Rd, Kd])
          }
      for (const Fd of [-md, md])
        for (const dd of [-md, md])
          for (const Wd of [-md, md]) Xd.push([Od, Od, Od, Fd, dd, Wd]);
      return Xd
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  40062: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      g: () => Kd,
      h: () => hd
    });
    const Wd = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Fd = [0, 1, 2, 0, 2, 3],
      Rd = [4, 5];

    function Xd(dd, Od, md, Wd, Fd) {
      for (let Xd = 0; Xd < 6; Xd++) Rd.includes(Xd) === Fd && vd(dd, Od, md, Wd, Xd)
    }

    function Kd(dd, Od, md, Wd) {
      for (let Fd = 0; Fd < 6; Fd++) vd(dd, Od, md, Wd, Fd)
    }

    function hd(dd, Od, md, Rd, Xd) {
      for (let Kd = 0; Kd < 6; Kd++)
        for (const hd of [0, 1]) {
          const [vd, Qd, td] = [hd + 2, hd + 1, (hd + 3) % 4], od = dd.length / 3;
          for (const [Od, Fd] of [
              [hd, Qd],
              [vd, Qd],
              [vd, td],
              [hd, td]
            ])
            for (let hd = 0; hd < 3; hd++) {
              const vd = Wd[3 * (4 * Kd + Od) + hd],
                Qd = Wd[3 * (4 * Kd + Fd) + hd];
              dd.push((vd + (Qd - vd) * Xd) * Rd / 2 + md[hd])
            }
          for (const dd of Fd) Od.push(od + dd)
        }
    }

    function vd(dd, Od, md, Rd, Xd) {
      let [Kd, hd, vd] = md, [Qd, td, od] = Rd;
      const Nd = dd.length / 3;
      for (let Fd = 4 * Xd; Fd < 4 * Xd + 4; Fd++) dd.push(Wd[3 * Fd] * Qd / 2 + Kd, Wd[3 * Fd + 1] * td / 2 + hd, Wd[3 * Fd + 2] * od / 2 + vd);
      for (const Wd of Fd) Od.push(Nd + Wd)
    }
  },
  41135: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      h: () => hd,
      i: () => Xd,
      k: () => vd,
      n: () => Qd
    });
    var Wd = md(41143),
      Fd = md(40062);
    const Rd = .35,
      Xd = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Kd = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      hd = [.95, .2, .15];
    class vd {
      constructor() {
        this.groups = []
      }
      add(dd, Od, md, Fd, Rd) {
        let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Wd.c;
        for (const Wd of this.groups)
          if (od(Wd, Fd, Rd)) return Wd.cells.push(dd, Od, md), void Wd.boxes.push(Xd);
        this.groups.push({
          rgb: Fd,
          look: Rd,
          cells: [dd, Od, md],
          boxes: [Xd]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Qd {
      constructor(dd) {
        this.api = dd, this.shown = []
      }
      show(dd) {
        const Od = [];
        for (const md of dd) {
          const dd = this.shown.findIndex((dd => {
            let {
              group: Od
            } = dd;
            return od(Od, md.rgb, md.look) && Nd(Od, md)
          })); - 1 === dd ? Od.push(this.build(md)) : (Od.push(this.shown[dd]), this.shown.splice(dd, 1))
        }
        this.dispose(), this.shown = Od
      }
      dispose() {
        for (const {
            meshes: dd
          }
          of this.shown)
          for (const Od of dd) this.api.disposeGameMesh(Od);
        this.shown = []
      }
      build(dd) {
        const {
          rgb: Od,
          look: md,
          boxes: Wd
        } = dd, Xd = [Od[0] + (1 - Od[0]) * Rd, Od[1] + (1 - Od[1]) * Rd, Od[2] + (1 - Od[2]) * Rd], Kd = [this.buildMesh(dd.cells, Od, md.alpha, ((dd, Od, Fd, Rd) => {
          td(dd, Od, Fd, Wd[Rd], md.size, !1)
        })), this.buildMesh(dd.cells, Xd, md.alpha, ((dd, Od, Fd, Rd) => {
          td(dd, Od, Fd, Wd[Rd], md.size, !0)
        }))];
        return md.crossed && Kd.push(this.buildMesh(dd.cells, Od, .9, ((dd, Od, Wd) => {
          (0, Fd.h)(dd, Od, Wd, md.size + .01, .12)
        }))), {
          group: dd,
          meshes: Kd
        }
      }
      buildMesh(dd, Od, md, Wd) {
        const Fd = [dd[0], dd[1], dd[2]],
          Rd = [],
          Xd = [];
        for (let Kd = 0; Kd < dd.length; Kd += 3) Wd(Rd, Xd, [dd[Kd] - Fd[0] + .5, dd[Kd + 1] - Fd[1] + .5, dd[Kd + 2] - Fd[2] + .5], Kd / 3);
        return this.api.createGameMesh({
          positions: Rd,
          indices: Xd
        }, {
          rgb: [Od[0], Od[1], Od[2]],
          alpha: md
        }, Fd)
      }
    }

    function td(dd, Od, md, Wd, Rd, Xd) {
      for (let Kd = 0; Kd < Wd.length; Kd += 6) {
        const hd = [0, 0, 0],
          vd = [0, 0, 0];
        for (let dd = 0; dd < 3; dd++) hd[dd] = md[dd] + ((Wd[Kd + dd] + Wd[Kd + dd + 3]) / 2 - .5) * Rd, vd[dd] = (Wd[Kd + dd + 3] - Wd[Kd + dd]) * Rd;
        (0, Fd.c)(dd, Od, hd, vd, Xd)
      }
    }

    function od(dd, Od, md) {
      return dd.rgb[0] === Od[0] && dd.rgb[1] === Od[1] && dd.rgb[2] === Od[2] && dd.look === md
    }

    function Nd(dd, Od) {
      if (dd.cells.length !== Od.cells.length) return !1;
      for (let md = 0; md < dd.cells.length; md++)
        if (dd.cells[md] !== Od.cells[md]) return !1;
      return dd.boxes.every(((dd, md) => dd === Od.boxes[md]))
    }
  },
  41151: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => qW
    });
    const Wd = [0, 90, 180, 270],
      Fd = "plotsblueprint";
    var Rd = md(66),
      Xd = md(3428),
      Kd = md(29),
      hd = md(1566),
      vd = md(2134),
      Qd = md(1238),
      td = md(1155),
      od = md.n(td),
      Nd = md(1765),
      qd = md(41159),
      Hd = md(38243),
      yd = md(1443),
      bd = md(2079),
      Td = md(2130),
      pd = md(4629),
      Yd = md(1890);

    function gd() {}
    const wd = (0, Rd.createContext)({
      hint: null,
      journalRef: gd,
      placementCardRef: gd,
      buildRef: gd
    });
    var Ed = md(32);
    const Jd = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Ud = {
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
      xd = ["small", "medium", "large"].flatMap((dd => Jd.flat().filter((Od => Ud[Od].tier === dd))));

    function Bd(dd) {
      return Ud[dd]
    }
    const Sd = new Map(Jd.flatMap((dd => dd.slice(1).map(((Od, md) => [Od, dd[md]])))));

    function sd(dd) {
      var Od;
      return null !== (Od = Sd.get(dd)) && void 0 !== Od ? Od : null
    }
    const ud = {
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

    function Vd(dd, Od) {
      const md = new Set(dd),
        Wd = function(dd) {
          const Od = new Set(dd);
          return new Set(xd.filter((dd => {
            const md = sd(dd);
            return null === md || Od.has(md)
          })))
        }(md);
      return xd.map((dd => {
        const Fd = dd === Od;
        if (md.has(dd)) return {
          id: dd,
          active: Fd,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const Rd = ud[dd],
          Xd = void 0 === Rd || Rd.firstBuild && md.size > 0 ? null : Rd.key;
        return Wd.has(dd) ? {
          id: dd,
          active: Fd,
          note: Xd,
          state: "open",
          unlockedBy: null
        } : {
          id: dd,
          active: Fd,
          note: Xd,
          state: "locked",
          unlockedBy: sd(dd)
        }
      }))
    }
    const Ad = "plotsJournalChanged";
    class rd {
      constructor(dd, Od) {
        this.api = dd, this.placement = Od, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Wt(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = dd => {
          this.placement.start(dd), (0, Xd.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Fd} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Yt(dd) {
        let [, Od, md] = dd;
        this.pages = Vd(Od, md), Ed.j.lQ(Ad, this.pages, !0)
      }
      openFromServer(dd) {
        let [, Od] = dd;
        this.openRequested = Od, this.Et()
      }
      Et() {
        const dd = this.openRequested;
        null === dd || Kd.e.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, Nd.m)() || (0, Yd.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = dd, (0, Xd.q)()))
      }
      Wt(dd) {
        this.reported.has(dd) || (this.reported.add(dd), this.api.sendCommand(`${Fd} report ${dd}`))
      }
    }
    var Gd = md(1341);
    const nd = "KeyJ";

    function Ld(dd) {
      let {
        journal: Od
      } = dd;
      const md = (0, hd.i)(Ad, Od.getPages()),
        {
          isTouchScreen: Wd
        } = (0, Kd.p)(["isTouchScreen"]),
        {
          t: Fd
        } = (0, Qd.G)(),
        vd = (0, Rd.useContext)(wd),
        td = null !== md;
      return (0, Rd.useEffect)((() => td ? (0, qd.e)(nd) : void 0), [td]), (0, pd.d)((dd => td && dd.code === nd && !dd.repeat && !(0, Yd.isTypingInInput)()), (dd => {
        (0, Nd.A)(dd, !0, Xd.q)
      })), null === md ? null : (0, Gd.jsx)(Hd.h, {
        placement: "topRight",
        children: (0, Gd.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Gd.jsxs)("button", {
            ref: vd.journalRef,
            type: "button",
            className: od()("PlotsJournalButton SmallTextBold", {
              Touch: Wd
            }),
            onClick: Xd.q,
            children: [(0, Gd.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Gd.jsx)(bd.c, {
                itemName: "Book",
                amount: 0
              })
            }), Fd("plotsGame:journalButton"), !Wd && (0, Gd.jsx)(Td.b, {
              className: "PlotsJournalButtonKey",
              keyCode: nd
            }), "openJournal" === vd.hint && (0, Gd.jsx)(yd.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var Pd = md(5733);
    const zd = [0, 90, 180, 270],
      cd = /^(meta\|rot\d)\|([lrud]+)$/,
      jd = "nesw",
      Dd = /^meta\|([nesw]*)\|?(Stacked)?$/,
      ed = function(dd) {
        const Od = new WeakMap;
        return (md, Wd) => {
          let Fd = Od.get(md);
          return void 0 === Fd && (Fd = dd(md, Wd), Od.set(md, Fd)), Fd
        }
      }((dd => new Id(dd)));
    class Id {
      constructor(dd) {
        this.blockMetadata = dd, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Od = new Set(Object.keys(dd).map((Od => dd[Od].id)));
        Od.add(0), this.maxBlockId = Math.max(...Od)
      }
      static
      for (dd) {
        return ed(dd)
      }
      getBlockIdMapping(dd, Od) {
        const md = this.getBlockIdMappingKey(dd, Od);
        let Wd = this.blockIdMappings.get(md);
        return void 0 === Wd && zd.includes(dd) && (Wd = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, dd, Od), this.blockIdMappings.set(md, Wd)), Wd
      }
      turnBlockId(dd, Od, md) {
        return this.mapBlockId(this.blockMetadata[dd], Od, this.getRotationMapping(Od, md), md)
      }
      getBlockIdMappingKey(dd, Od) {
        return `r${dd}|m${Number(Od)}`
      }
      createBlockIdMapping(dd, Od, md, Wd) {
        const Fd = new Uint16Array(Od + 1),
          Rd = this.getRotationMapping(md, Wd);
        for (const Xd in dd) {
          const Od = dd[Xd];
          Fd[Od.id] = this.mapBlockId(Od, md, Rd, Wd)
        }
        return Fd
      }
      getRotationMapping(dd, Od) {
        const md = Math.round(dd / 90),
          Wd = new Uint8Array(4);
        for (let Fd = 0; Fd < 4; Fd++) Wd[Fd] = (4 + Fd - md) % 4;
        if (Od) {
          let dd = Wd[0];
          Wd[0] = Wd[1], Wd[1] = dd, dd = Wd[2], Wd[2] = Wd[3], Wd[3] = dd
        }
        return Wd
      }
      mapBlockId(dd, Od, md, Wd) {
        var Fd;
        const {
          blockMetadata: Rd
        } = this, Xd = Math.round(Od / 90), {
          id: Kd,
          meta: hd
        } = dd, {
          rot: vd,
          rootName: Qd,
          metaStr: td
        } = hd;
        let od;
        const [, Nd, qd] = null !== (Fd = Dd.exec(td)) && void 0 !== Fd ? Fd : [];
        if (void 0 !== Nd) {
          var Hd, yd;
          od = null !== (Hd = null === (yd = Rd[`${Qd}|meta|${[jd.split("").filter(((dd,Od)=>Nd.split("").some((dd=>{const md=jd.indexOf(dd);return((Wd?3-md:md)+Xd)%4===Od})))).join(""),qd].filter(Boolean).join("|")}`]) || void 0 === yd ? void 0 : yd.id) && void 0 !== Hd ? Hd : Kd
        } else if (null === vd) od = Kd;
        else {
          var bd, Td;
          const dd = md[vd - 1] + 1;
          let Od = td.replace(`rot${vd}`, `rot${dd}`);
          Wd && hd.stairsCorner && (Od = Od.replace(/(Left|Right)$/, (dd => "Left" === dd ? "Right" : "Left"))), Wd && "Chest" === Qd && (Od = Od.replace(/\|(left|right)$/, ((dd, Od) => "left" === Od ? "|right" : "|left")));
          const Fd = cd.exec(Od);
          if (Wd && null !== Fd) {
            const dd = "lrud".split("").filter((dd => Fd[2].includes("l" === dd ? "r" : "r" === dd ? "l" : dd)));
            Od = `${Fd[1]}|${dd.join("")}`
          }
          const Xd = `${Qd}|${Od}`;
          if (od = null !== (bd = null === (Td = Rd[Xd]) || void 0 === Td ? void 0 : Td.id) && void 0 !== bd ? bd : null, null === od) {
            const dd = Rd[Qd];
            od = dd.rootMetaDesc === Xd ? dd.id : Kd
          }
        }
        return od
      }
    }

    function ld(dd, Od, md) {
      let {
        xRotationMappedOrigin: Wd,
        shouldSwapXZ: Fd
      } = md;
      const Rd = Fd ? Od : dd;
      return null === Wd ? Rd : Wd - Rd
    }

    function Cd(dd, Od, md) {
      let {
        zRotationMappedOrigin: Wd,
        shouldSwapXZ: Fd
      } = md;
      const Rd = Fd ? dd : Od;
      return null === Wd ? Rd : Wd - Rd
    }
    const Zd = {
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
      kd = new Map;

    function fd(dd, Od) {
      const md = `${dd}|${Od}`;
      let Wd = kd.get(md);
      if (void 0 === Wd) {
        const {
          size: Fd,
          palette: Rd,
          layers: Xd
        } = Zd[dd], Kd = 90 === Od || 270 === Od, [hd, vd] = Kd ? [Fd[2], Fd[0]] : [Fd[0], Fd[2]], Qd = function(dd, Od, md) {
          let Wd = null,
            Fd = null,
            Rd = !1;
          switch (dd) {
            case 0:
              break;
            case 90:
              Wd = Od - 1, Rd = !0;
              break;
            case 180:
              Wd = Od - 1, Fd = md - 1;
              break;
            case 270:
              Fd = md - 1, Rd = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${dd}`)
          }
          return {
            xRotationMappedOrigin: Wd,
            zRotationMappedOrigin: Fd,
            shouldSwapXZ: Rd
          }
        }(Od, hd, vd), td = Id.for(Pd.i), od = Rd.map((dd => (0, Pd.g)(td.turnBlockId((0, Pd.j)(dd), Od, !1)))), Nd = [];
        Xd.forEach(((dd, Od) => {
          dd.split(" ").forEach(((dd, md) => {
            for (let Wd = 0; Wd < dd.length; Wd++)
              if ("." !== dd[Wd]) {
                const Fd = [ld(Wd, md, Qd), Od, Cd(Wd, md, Qd)];
                Nd.push({
                  offset: Fd,
                  block: od[dd.charCodeAt(Wd) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Wd = {
          size: [hd, Fd[1], vd],
          cells: Nd
        }, kd.set(md, Wd)
      }
      return Wd
    }
    const Md = "plotsBuildProgressChanged",
      dO = new Map;

    function OO(dd, Od, md) {
      let Wd = 0,
        Fd = 0;
      return function(dd) {
        let Od = dO.get(dd);
        if (void 0 === Od) {
          const Wd = [];
          for (const {
              offset: Od
            }
            of fd(dd, 0).cells) {
            var md;
            Wd[Od[1]] = (null !== (md = Wd[Od[1]]) && void 0 !== md ? md : 0) + 1
          }
          Od = Wd, dO.set(dd, Od)
        }
        return Od
      }(dd).forEach(((dd, md) => {
        Wd += dd, md > Od && (Fd += dd)
      })), {
        id: dd,
        filled: Wd - Fd - md,
        total: Wd
      }
    }
    class mO {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(dd) {
        this.shown = dd, this.topOpen = 0, null === dd && this.lQ(null)
      }
      update(dd, Od, md) {
        const Wd = this.shown;
        null !== Wd && (dd >= Od && (this.topOpen = md), this.lQ(OO(Wd.id, Od - Wd.y, dd >= Od ? md : this.topOpen + md)))
      }
      lQ(dd) {
        const Od = this.progress;
        (null === dd || void 0 === dd ? void 0 : dd.id) === (null === Od || void 0 === Od ? void 0 : Od.id) && (null === dd || void 0 === dd ? void 0 : dd.filled) === (null === Od || void 0 === Od ? void 0 : Od.filled) && (null === dd || void 0 === dd ? void 0 : dd.total) === (null === Od || void 0 === Od ? void 0 : Od.total) || (this.progress = dd, Ed.j.lQ(Md, dd, !0))
      }
    }
    const WO = "plotsPlotChanged",
      FO = "plotsGuideChanged",
      RO = "plotsGuideDone";
    class XO {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(dd) {
        this.plot = dd, Ed.j.lQ(WO, dd, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(dd) {
        this.guide = dd, Ed.j.lQ(FO, dd, !0)
      }
      receiveGuideDone() {
        Ed.j.lQ(RO, void 0, !0)
      }
    }
    var KO = md(1333),
      hO = md(40112),
      vO = md(38431),
      QO = md(1596);

    function tO(dd) {
      let {
        onSkip: Od,
        className: md
      } = dd;
      const {
        t: Wd
      } = (0, Qd.G)();
      return (0, Gd.jsx)("button", {
        type: "button",
        className: od()("PlotsGuideSkipButton", md),
        ...(0, QO.i)(Od, "pointerup"),
        children: Wd("tutorial:skip")
      })
    }

    function oO(dd) {
      let {
        target: Od,
        placement: md,
        spotlight: Wd = null,
        children: Fd
      } = dd;
      const {
        t: Xd
      } = (0, Qd.G)(), Kd = (0, Rd.useRef)(Od);
      return Kd.current = Od, (0, KO.m)("popup", Kd, null === Wd ? null : Wd.onSkip, null !== Wd, null, "controller:menusSkipTutorial"), (0, Gd.jsxs)(vO.f, {
        target: Od,
        placement: md,
        className: od()("PlotsGuideBubble", {
          Passive: null === Wd
        }),
        spotlight: null !== Wd,
        spotlightMargin: 30,
        children: [(0, Gd.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, Gd.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: hO,
            alt: "",
            draggable: !1
          }), (0, Gd.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: Xd("plotsGame:maverickName")
          }), null !== Wd && (0, Gd.jsx)(tO, {
            onSkip: Wd.onSkip
          })]
        }), (0, Gd.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: Fd
        })]
      })
    }

    function NO(dd) {
      let {
        className: Od,
        icon: md,
        title: Wd,
        children: Fd
      } = dd;
      return (0, Gd.jsxs)("div", {
        className: od()("PlotsCard", Od),
        role: "status",
        children: [(0, Gd.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, Gd.jsx)(yd.c, {
            name: md
          })
        }), (0, Gd.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, Gd.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: Wd
          }), Fd]
        })]
      })
    }

    function qO(dd) {
      let {
        progress: Od,
        goal: md
      } = dd;
      const Wd = Math.min(Od, md);
      return (0, Gd.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Gd.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": md,
          "aria-valuenow": Wd,
          children: (0, Gd.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Wd/md})`
            }
          })
        }), (0, Gd.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Wd, "/", md]
        })]
      })
    }

    function HO(dd) {
      let {
        progress: Od,
        guide: md
      } = dd;
      const {
        t: Wd
      } = (0, Qd.G)(), {
        isTouchScreen: Fd
      } = (0, Kd.p)(["isTouchScreen"]), Rd = Od.filled < 5;
      return (0, Gd.jsxs)(Gd.Fragment, {
        children: [(Rd || Od.total - Od.filled <= 5) && (0, Gd.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, Gd.jsx)("div", {
            ref: md.bindHand,
            className: "PlotsGuideHand",
            children: (0, Gd.jsx)(yd.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, Gd.jsx)(Hd.h, {
          placement: "bottom",
          children: (0, Gd.jsxs)(NO, {
            icon: "hammer",
            title: Wd(Bd(Od.id).displayName.translationKey),
            children: [Rd && (0, Gd.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: Fd ? Wd("plotsGame:guideBuildTouch") : yO(Wd)
            }), (0, Gd.jsx)(qO, {
              progress: Od.filled,
              goal: Od.total
            })]
          })
        })]
      })
    }

    function yO(dd) {
      const Od = vd.y["alt-fire"][0];
      return "Mouse3" === Od ? dd("plotsGame:guideBuildRightClick") : dd("plotsGame:guideBuildKeys", {
        key: (0, vd.r)(Od)
      })
    }

    function bO() {
      return (0, Gd.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, Gd.jsx)(yd.c, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var TO = md(1349),
      pO = md(3645),
      YO = md(39951),
      gO = md(39716),
      wO = md(38469),
      aO = md(5759),
      EO = md(5774),
      JO = md(405),
      UO = md(39354);
    const xO = new Map([
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
      BO = [...wO.c.blockRemoveActionRoots, ...gO.b, ...aO.j, "Board", "Code Block", "Custom Lobby Block"],
      SO = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let sO = null;

    function uO() {
      return sO ??= function() {
        const dd = VO(),
          Od = Math.max(...dd.map((dd => Pd.i[dd].id))) + 1,
          md = new Int32Array(Od),
          Wd = new Int32Array(Od),
          Fd = new Uint8Array(Od).fill(1),
          Rd = new Uint8Array(Od),
          Xd = new Uint8Array(Od),
          Kd = new Array(Od).fill("Air"),
          hd = new Map,
          vd = dd => {
            let Od = hd.get(dd);
            return void 0 === Od && (Od = hd.size + 1, hd.set(dd, Od)), Od
          },
          Qd = new Set(BO);
        for (const od of dd) {
          var td;
          const {
            id: dd,
            meta: Od,
            altActionable: hd,
            canBePlacedOver: Nd
          } = Pd.i[od];
          md[dd] = vd(iO(od));
          const qd = Od.stairsCorner;
          if (null === qd) Wd[dd] = md[dd];
          else {
            const md = qd.endsWith("Right");
            Wd[dd] = vd(`${Od.rootName}|rot${md?Od.rot%4+1:Od.rot}|${Od.halfblockPlacement}|${qd.replace("Right","Left")}`)
          }
          Fd[dd] = Nd ? 1 : 0, Rd[dd] = hd || null !== Od.open || od in UO.d || Qd.has(Od.rootName) || void 0 !== (0, gO.f)(Od.rootName) ? 1 : 0;
          const {
            rootName: Hd
          } = Od;
          Xd[dd] = null !== Od.open || gO.b.includes(Hd) || Hd.includes("Bookshelf") || Hd.includes("Mailbox") ? 1 : 0, Kd[dd] = null !== (td = (0, YO.f)(dd)) && void 0 !== td ? td : Hd
        }
        return {
          kinds: md,
          shapes: Wd,
          empty: Fd,
          inUse: Rd,
          ownAltActionMessage: Xd,
          placingItems: Kd
        }
      }(), sO
    }

    function VO() {
      return Object.keys(Pd.i).filter((dd => Pd.i[dd].name === dd))
    }

    function iO(dd) {
      var Od;
      const md = Pd.i[dd],
        {
          rootName: Wd,
          rot: Fd
        } = md.meta,
        [, ...Rd] = (null !== (Od = md.rootMetaDesc) && void 0 !== Od ? Od : dd).split("|"),
        Xd = Rd.filter((dd => !("meta" === dd || SO.test(dd) || (0, EO.H)(md) && /^[nesw]+$/.test(dd) || aO.j.includes(Wd) && /^[lrud]+$/.test(dd) || JO.C.includes(Wd) && /^(left|right)$/.test(dd))));
      return [Wd, ...Xd].map((dd => "fenceGate" === md.model && dd === `rot${Fd}` ? "rot" + ((Fd - 1) % 2 + 1) : dd)).join("|")
    }

    function AO(dd, Od) {
      const {
        kinds: md,
        shapes: Wd
      } = uO();
      return md[dd] === md[Od] || Wd[dd] === Wd[Od]
    }

    function rO(dd) {
      return 1 === uO().empty[dd]
    }

    function GO(dd) {
      return uO().placingItems[dd]
    }

    function nO(dd) {
      return xO.get(Pd.i[dd].meta.rootName)
    }
    var LO = md(41143),
      PO = md(218);
    class zO {
      constructor(dd) {
        this.api = dd, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(dd) {
        const Od = PO.i.Qt;
        this.chunks = [];
        for (let md = 0; md < dd.length; md += 3) {
          const Wd = Math.floor(dd[md] / Od),
            Fd = Math.floor(dd[md + 1] / Od),
            Rd = Math.floor(dd[md + 2] / Od);
          this.watches(Wd, Fd, Rd) || this.chunks.push(Wd, Fd, Rd)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const dd = performance.now();
        if (dd - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = dd;
        let Od = !1;
        for (let md = 0; md < this.chunks.length; md += 3) {
          const dd = this.api.getChunkVersion(this.chunks[md], this.chunks[md + 1], this.chunks[md + 2]);
          this.versions[md / 3] !== dd && (this.versions[md / 3] = dd, Od = !0)
        }
        return Od
      }
      watches(dd, Od, md) {
        for (let Wd = 0; Wd < this.chunks.length; Wd += 3)
          if (this.chunks[Wd] === dd && this.chunks[Wd + 1] === Od && this.chunks[Wd + 2] === md) return !0;
        return !1
      }
    }
    var cO = md(41135);

    function jO(dd, Od, md, Wd, Fd) {
      if (!dd.isBlockInLoadedChunk(Od, Wd - 6, md) || !dd.isBlockInLoadedChunk(Od, Wd + 6 + Fd, md) || !dd.canModifyBlockAt(Od, Wd, md)) return NaN;
      let Rd = Wd - 1;
      if (0 !== dd.getBlockId(Od, Rd, md)) {
        for (; Rd < Wd + 6 && 0 !== dd.getBlockId(Od, Rd + 1, md);) Rd++;
        return Rd
      }
      for (; Rd > Wd - 6;)
        if (Rd--, 0 !== dd.getBlockId(Od, Rd, md)) return Rd;
      return NaN
    }

    function DO(dd, Od, md, Wd, Fd) {
      let Rd = 0;
      for (let Xd = Wd + 1; Xd <= Wd + Fd; Xd++) 0 !== dd.getBlockId(Od, Xd, md) && Rd++;
      return Rd
    }

    function eO(dd) {
      const Od = new Map;
      for (const Xd of dd) {
        var md;
        if (Number.isNaN(Xd)) return null;
        Od.set(Xd, (null !== (md = Od.get(Xd)) && void 0 !== md ? md : 0) + 1)
      }
      let Wd = NaN,
        Fd = 0;
      for (const [Xd, Kd] of Od)(Kd > Fd || Kd === Fd && Xd < Wd) && (Wd = Xd, Fd = Kd);
      let Rd = 0;
      for (const Xd of dd) Rd += Math.abs(Xd - Wd);
      return Rd
    }

    function IO(dd, Od, md, Wd) {
      const {
        eye: Fd,
        forward: Rd,
        tanHalfFovX: Xd,
        tanHalfFovY: Kd
      } = dd, [hd, vd] = function(dd) {
        let [Od, md, Wd] = dd;
        const Fd = Math.hypot(Od, Wd),
          [Rd, Xd] = [Wd / Fd, -Od / Fd];
        return [
          [Rd, 0, Xd],
          [md * Xd, Wd * Rd - Od * Xd, -md * Rd]
        ]
      }(Rd), [Qd, td] = [Od * Xd, md * Kd], od = Rd[0] + Qd * hd[0] + td * vd[0], Nd = Rd[1] + td * vd[1], qd = Rd[2] + Qd * hd[2] + td * vd[2], Hd = (Wd - Fd[1]) / Nd;
      return Hd > 0 && Hd < 1 / 0 ? [Fd[0] + Hd * od, Fd[2] + Hd * qd] : null
    }
    const lO = "plotsBlueprintPlacementChanged",
      CO = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class ZO {
      constructor(dd, Od) {
        this.api = dd, this.localPlayerId = Od, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = dd => {
          var Od, md, Wd, Rd;
          const Xd = null !== (Od = null === (md = this.placing) || void 0 === md ? void 0 : md.rotation) && void 0 !== Od ? Od : 0,
            {
              size: Kd
            } = fd(dd, Xd),
            hd = this.api.hY(this.localPlayerId),
            [vd, Qd] = null !== (Wd = null !== (Rd = function(dd, Od, md, Wd) {
              const [Fd, Rd, Xd] = Od, [Kd, hd, vd] = [Math.floor(md[0]), Math.floor(md[1]), Math.floor(md[2])], Qd = 6 + Math.max(Fd, Xd) / 2, [td, od] = [Math.ceil(Qd + Fd / 2), Math.ceil(Qd + Xd / 2)], [Nd, qd] = [Kd - td, vd - od], [Hd, yd] = [2 * td + 1, 2 * od + 1], bd = new Float64Array(Hd * yd), Td = new Uint16Array(Hd * yd);
              for (let Ed = 0; Ed < Hd; Ed++)
                for (let Od = 0; Od < yd; Od++) {
                  const md = jO(dd, Nd + Ed, qd + Od, hd, Rd);
                  bd[Ed * yd + Od] = md, Number.isNaN(md) || (Td[Ed * yd + Od] = DO(dd, Nd + Ed, qd + Od, md, Rd))
                }
              const pd = Math.hypot(Wd[0], Wd[2]),
                Yd = [];
              let gd = null,
                wd = 1 / 0;
              for (let Ed = 0; Ed + Fd <= Hd; Ed++)
                for (let dd = 0; dd + Xd <= yd; dd++) {
                  const [Od, Rd] = [Nd + Ed, qd + dd], [hd, td] = [Od + Fd / 2 - md[0], Rd + Xd / 2 - md[2]], od = Math.hypot(hd, td);
                  if (od > Qd || Kd >= Od - 2 && Kd < Od + Fd + 2 && vd >= Rd - 2 && vd < Rd + Xd + 2) continue;
                  Yd.length = 0;
                  let Hd = 0;
                  for (let md = 0; md < Fd; md++)
                    for (let Od = 0; Od < Xd; Od++) Yd.push(bd[(Ed + md) * yd + dd + Od]), Hd += Td[(Ed + md) * yd + dd + Od];
                  const Jd = eO(Yd);
                  if (null === Jd) continue;
                  const Ud = od + 3 * (Jd + Hd) + (1 - (0 === pd ? 1 : (hd * Wd[0] + td * Wd[2]) / (od * pd))) / 2 * 6;
                  Ud < wd && (wd = Ud, gd = [Od, Rd])
                }
              return gd
            }(this.api, Kd, hd, this.camera.forward)) && void 0 !== Rd ? Rd : this.cornerOnTarget(Kd)) && void 0 !== Wd ? Wd : [Math.floor(hd[0]) + 2, Math.floor(hd[2])];
          this.placing = {
            id: dd,
            rotation: Xd,
            corner: [vd, this.playerLevel(), Qd],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${Fd} preview`)
        }, this.rotate = () => {
          const {
            id: dd,
            rotation: Od,
            corner: md
          } = this.placing, Fd = Wd[(Wd.indexOf(Od) + 1) % Wd.length], [Rd, , Xd] = fd(dd, Od).size, [Kd, , hd] = fd(dd, Fd).size;
          this.moveTo(md[0] + Math.floor(Rd / 2) - Math.floor(Kd / 2), md[2] + Math.floor(Xd / 2) - Math.floor(hd / 2), Fd)
        }, this.hoverAt = (dd, Od) => {
          this.placing.hover = [dd, Od], this.moveCentreTo(this.camera, dd, Od)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (dd, Od) => {
          const md = this.placing,
            {
              eye: Wd,
              forward: Fd,
              tanHalfFovX: Rd,
              tanHalfFovY: Xd
            } = this.camera,
            Kd = {
              eye: [Wd[0], Wd[1], Wd[2]],
              forward: [Fd[0], Fd[1], Fd[2]],
              tanHalfFovX: Rd,
              tanHalfFovY: Xd
            },
            hd = md.corner[1],
            vd = IO(Kd, dd, Od, hd);
          md.hover = null, md.drag = vd && {
            view: Kd,
            ground: vd,
            corner: [md.corner[0], md.corner[2]],
            level: hd
          }
        }, this.dragTo = (dd, Od) => {
          const md = this.placing.drag,
            Wd = md && IO(md.view, dd, Od, md.level);
          null !== md && null !== Wd && this.moveTo(md.corner[0] + Math.round(Wd[0] - md.ground[0]), md.corner[1] + Math.round(Wd[1] - md.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const dd = this.view;
          dd.waiting || (dd.blocked ? this.lQ({
            ...dd,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const dd = this.placing,
            {
              id: Od,
              rotation: md,
              corner: Wd
            } = dd;
          this.api.sendCommand(`${Fd} place ${Od} ${Wd.join(" ")} ${md}`), dd.sent = {
            atMs: performance.now(),
            corner: [...Wd],
            rotation: md,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Fd} preview off`))
        }, this.chunkWatch = new zO(dd), this.meshes = new cO.n(dd)
      }
      getView() {
        return this.view
      }
      Et() {
        const dd = this.placing;
        null !== dd && (null !== dd.sent && !dd.sent.timedOut && performance.now() - dd.sent.atMs > 3e3 ? (dd.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(dd) || this.chunkWatch.changed() || this.view.settled !== kO(dd, this.view.blocked)) && this.update())
      }
      afterRender(dd) {
        ! function(dd, Od) {
          for (let md = 0; md < 3; md++) Od.eye[md] = dd.cameraPosition[md], Od.forward[md] = dd.cameraDirection[md];
          Od.tanHalfFovX = dd.tanHalfFovX, Od.tanHalfFovY = dd.tanHalfFovY
        }(dd, this.camera);
        const Od = this.placing;
        null !== Od && null !== Od.hover && this.moveCentreTo(this.camera, Od.hover[0], Od.hover[1])
      }
      Yt(dd) {
        const Od = this.placing;
        if (null === Od || null === Od.sent || "active" !== dd[0]) return;
        const {
          sent: md
        } = Od, [, Wd, Fd, Rd, Xd, Kd, hd] = dd;
        Fd && Wd === Od.id && hd === md.rotation && Rd === md.corner[0] && Xd === md.corner[1] && Kd === md.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(dd) {
        let [Od, , md] = dd;
        const Wd = this.api.getTargetedBlock();
        if (null === Wd) return null;
        const [Fd, , Rd] = Wd.position;
        return [Fd - Math.floor(Od / 2), Rd - Math.floor(md / 2)]
      }
      playerLevel() {
        var dd;
        const [Od, md, Wd] = this.api.hY(this.localPlayerId);
        if (null !== (dd = this.api.getLocalPlayerMovement()) && void 0 !== dd && dd.onGround) return Math.ceil(md - .01);
        const [Fd, Rd, Xd] = [Math.floor(Od), Math.floor(md), Math.floor(Wd)];
        for (let Kd = Rd; Kd >= Rd - 2; Kd--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Fd, Kd, Xd))) return Kd + 1;
        return Rd
      }
      followPlayerLevel(dd) {
        if (fO(dd)) return !1;
        const Od = this.playerLevel();
        return Od !== dd.corner[1] && (dd.corner[1] = Od, !0)
      }
      moveCentreTo(dd, Od, md) {
        const Wd = this.placing,
          Fd = IO(dd, Od, md, Wd.corner[1]);
        if (null !== Fd) {
          const [dd, , Od] = fd(Wd.id, Wd.rotation).size;
          this.moveTo(Math.round(Fd[0] - dd / 2), Math.round(Fd[1] - Od / 2))
        }
      }
      moveTo(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Wd = this.placing;
        if (fO(Wd)) return;
        const [Fd, Rd, Xd] = Wd.corner;
        if (this.centreOnPlot(Fd, Xd) && !this.centreOnPlot(dd, Od, md))
          if (this.centreOnPlot(dd, Xd, md)) Od = Xd;
          else {
            if (!this.centreOnPlot(Fd, Od, md)) return;
            dd = Fd
          } dd === Fd && Od === Xd && md === Wd.rotation || (Wd.rotation = md, Wd.corner = [dd, Rd, Od], Wd.moved = !0, Wd.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Wd,
          corner: Fd
        } = this.placing, [Rd, , Xd] = fd(Wd, md).size;
        return this.api.canModifyBlockAt(dd + Math.floor(Rd / 2), Fd[1], Od + Math.floor(Xd / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.lQ(null)
      }
      update() {
        const {
          id: dd,
          rotation: Od,
          corner: md,
          refusals: Wd
        } = this.placing, Fd = new cO.k, Rd = [];
        let Xd = !1,
          Kd = 0;
        for (const {
            offset: td,
            block: od
          }
          of fd(dd, Od).cells) {
          const [dd, Od, Wd] = [md[0] + td[0], md[1] + td[1], md[2] + td[2]];
          Rd.push(dd, Od, Wd);
          const hd = !this.api.canModifyBlockAt(dd, Od, Wd),
            vd = this.api.getBlockId(dd, Od, Wd),
            Qd = !rO(vd) && !AO(this.api.blockNameToBlockId(od), vd);
          Xd ||= hd, Kd += Qd ? 1 : 0, hd || Qd ? Fd.add(dd, Od, Wd, cO.h, cO.e) : Fd.add(dd, Od, Wd, nO(od), CO, (0, LO.g)(od))
        }
        this.chunkWatch.watch(Rd), this.meshes.show(Fd.toArray());
        const hd = this.view,
          vd = fO(this.placing),
          Qd = kO(this.placing, Xd);
        (null === hd || void 0 === hd ? void 0 : hd.id) === dd && hd.blocked === Xd && hd.toClear === Kd && hd.waiting === vd && hd.refusals === Wd && hd.settled === Qd || this.lQ({
          id: dd,
          blocked: Xd,
          toClear: Kd,
          waiting: vd,
          refusals: Wd,
          settled: Qd
        })
      }
      lQ(dd) {
        this.view = dd, Ed.j.lQ(lO, dd, !0)
      }
    }

    function kO(dd, Od) {
      let {
        moved: md,
        stillSinceMs: Wd
      } = dd;
      return !Od && performance.now() - Wd >= (md ? 1500 : 6e3)
    }

    function fO(dd) {
      let {
        sent: Od
      } = dd;
      return null !== Od && !Od.timedOut
    }
    var MO = md(5206);
    class dm {
      constructor(dd) {
        this.placement = dd, this.press = null
      }
      down(dd) {
        if (null !== this.press) return !1;
        const {
          id: Od,
          mouse: md,
          x: Wd,
          y: Fd,
          atMs: Rd
        } = dd;
        return this.press = {
          id: Od,
          mouse: md,
          x: Wd,
          y: Fd,
          atMs: Rd,
          moved: !1
        }, md || this.placement.beginDrag(dd.ndcX, dd.ndcY), !0
      }
      move(dd) {
        const Od = this.press;
        null !== Od && Od.id === dd.id && (Od.moved ||= Math.hypot(dd.x - Od.x, dd.y - Od.y) > 8), dd.mouse ? this.placement.hoverAt(dd.ndcX, dd.ndcY) : (null === Od || void 0 === Od ? void 0 : Od.id) === dd.id && this.placement.dragTo(dd.ndcX, dd.ndcY)
      }
      up(dd) {
        const Od = this.press;
        (null === Od || void 0 === Od ? void 0 : Od.id) === dd.id && (this.move(dd), this.end(), !Od.moved && (Od.mouse || dd.atMs - Od.atMs <= 250) && this.placement.tap())
      }
      cancel(dd) {
        var Od;
        (null === (Od = this.press) || void 0 === Od ? void 0 : Od.id) === dd && this.end()
      }
      leave(dd) {
        let {
          id: Od,
          mouse: md
        } = dd;
        md && this.placement.endHover(), this.cancel(Od)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const Om = "PlotsPlacementLayer";

    function mm(dd) {
      let {
        placement: Od
      } = dd;
      return null === (0, hd.i)(lO, Od.getView()) ? null : (0, Gd.jsx)(Wm, {
        placement: Od
      })
    }

    function Wm(dd) {
      let {
        placement: Od
      } = dd;
      (0, MO.e)(!0, !0, Om);
      const md = (0, Rd.useMemo)((() => new dm(Od)), [Od]);
      return (0, Gd.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: dd => {
          "mouse" === dd.pointerType && 0 !== dd.button || !md.down(Fm(dd)) || dd.currentTarget.setPointerCapture(dd.pointerId)
        },
        onPointerMove: dd => {
          md.move(Fm(dd))
        },
        onPointerUp: dd => {
          md.up(Fm(dd))
        },
        onPointerCancel: dd => {
          md.cancel(dd.pointerId)
        },
        onLostPointerCapture: dd => {
          md.cancel(dd.pointerId)
        },
        onPointerLeave: dd => {
          md.leave(Fm(dd))
        },
        "aria-hidden": !0
      })
    }

    function Fm(dd) {
      const {
        left: Od,
        top: md,
        width: Wd,
        height: Fd
      } = dd.currentTarget.getBoundingClientRect();
      return {
        id: dd.pointerId,
        mouse: "mouse" === dd.pointerType,
        x: dd.clientX,
        y: dd.clientY,
        ndcX: (dd.clientX - Od) / Wd * 2 - 1,
        ndcY: 1 - (dd.clientY - md) / Fd * 2,
        atMs: dd.timeStamp
      }
    }

    function Rm() {
      return (0, TO.q)().some((dd => dd !== TO.e && dd !== Om))
    }
    const Xm = 2500;

    function Km(dd) {
      let {
        hud: Od,
        guide: md,
        tracker: Wd,
        placement: Fd,
        children: Xd
      } = dd;
      const {
        t: td
      } = (0, Qd.G)(), {
        isTouchScreen: od
      } = (0, Kd.p)(["isTouchScreen"]), Nd = (0, hd.i)(FO, Od.getGuide()), qd = (0, hd.i)(WO, Od.getPlot()), Hd = (0, hd.i)(Md, Wd.get()), yd = function(dd) {
        const {
          openInGameMenuName: Od,
          openEverythingMenuName: md,
          loadingOverlayVisible: Wd
        } = (0, Kd.p)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), Fd = (0, pO.d)(), [Xd, vd] = (0, Rd.useState)(Rm);
        (0, Rd.useEffect)((() => {
          const dd = () => {
            vd(Rm())
          };
          dd();
          const Od = (0, TO.n)(dd),
            md = (0, TO.m)(dd);
          return () => {
            Od(), md()
          }
        }), []);
        const Qd = (0, hd.i)(lO, dd.getView()),
          td = "clientGame" === Od;
        return {
          hudHidden: Fd || Wd,
          journalOpen: td,
          covered: Xd || null !== md || null !== Od && !td,
          placing: null === Qd ? null : Qd.settled ? "placeBuild" : "placeSpot"
        }
      }(Fd), bd = function(dd, Od, md) {
        return "none" === dd[0] || md.hudHidden || md.journalOpen || md.covered ? null : null !== md.placing ? md.placing : null !== Od ? "build" : "choose" === dd[1] ? "openJournal" : null
      }(Nd, null === Hd ? null : Hd.id, yd), Td = function() {
        const [dd, Od] = (0, Rd.useState)(null), [md, Wd] = (0, Rd.useState)(!1);
        return (0, hd.f)(RO, (() => {
          Od(performance.now())
        })), (0, Rd.useEffect)((() => {
          if (null === dd) return;
          const Od = window.setTimeout((() => {
              Wd(!0)
            }), Xm),
            md = window.setTimeout((() => {
              Wd(!1)
            }), 7500);
          return () => {
            window.clearTimeout(Od), window.clearTimeout(md)
          }
        }), [dd]), md
      }() && !yd.hudHidden && !yd.covered && !yd.journalOpen && null === yd.placing, [pd, Yd] = (0, Rd.useState)(!1);
      (0, Rd.useEffect)((() => {
        yd.journalOpen && Yd(!0)
      }), [yd.journalOpen]);
      const [gd, Ed] = (0, Rd.useState)(null), [Jd, Ud] = (0, Rd.useState)(null), [xd, Bd] = (0, Rd.useState)(null), Sd = (0, Rd.useMemo)((() => ({
        hint: bd,
        journalRef: Ed,
        placementCardRef: Ud,
        buildRef: Bd
      })), [bd]), sd = "plot" === qd[0] && "own" === qd[5], ud = od && !pd && sd ? {
        onSkip: md.skip
      } : null;
      return (0, Gd.jsxs)(wd.Provider, {
        value: Sd,
        children: [Xd, "openJournal" === bd && null !== gd && (0, Gd.jsx)(oO, {
          target: gd,
          placement: "left",
          spotlight: ud,
          children: od ? td("plotsGame:guideOpenJournal") : td("plotsGame:guideOpenJournalKeys", {
            key: (0, vd.r)(nd)
          })
        }), "placeSpot" === bd && null !== Jd && (0, Gd.jsxs)(Gd.Fragment, {
          children: [od && (0, Gd.jsx)(bO, {}), (0, Gd.jsx)(oO, {
            target: Jd,
            placement: "top",
            children: td(od ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === bd && null !== xd && null !== Jd && (0, Gd.jsx)(oO, {
          target: od ? xd : Jd,
          placement: "top",
          children: td(od ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === bd && null !== Hd && (0, Gd.jsx)(HO, {
          progress: Hd,
          guide: md
        }), Td && null !== gd && (0, Gd.jsx)(oO, {
          target: gd,
          placement: "left",
          children: td("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var hm = md(40028),
      Qm = md(40036);
    class tm {
      constructor(dd, Od, md) {
        this.api = dd, this.localPlayerId = Od, this.nextCell = md, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = dd => {
          this.hand = dd
        }
      }
      afterRender(dd) {
        const Od = this.hand;
        if (null === Od) return;
        const md = this.nextCell.get();
        if (null === md) return void(0, hm.h)(Od, !0);
        const Wd = (0, Qm.c)(Od, dd, this.api.getPositionView(this.localPlayerId), md, 1, 40);
        null !== Wd && (0, hm.e)(Od, Math.round(100 * Wd.x) / 100, Math.round(100 * Wd.y) / 100)
      }
    }
    var om = md(1572),
      Nm = md(5194),
      qm = md(1178);
    const Hm = {
        farm_hut: md.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: md.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: md.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: md.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: md.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: md.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: md.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: md.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: md.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: md.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: md.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: md.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      ym = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      bm = ["market_stand", "rusticHome_tent", "farm_hut"].map((dd => ({
        id: dd,
        blocks: fd(dd, 0).cells.length
      }))).sort(((dd, Od) => dd.blocks - Od.blocks)).map(((dd, Od) => ({
        ...dd,
        effortKey: ym[Od]
      })));

    function Tm(dd) {
      let {
        onBuild: Od
      } = dd;
      const {
        t: md
      } = (0, Qd.G)();
      return (0, Gd.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, Gd.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, Gd.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: md("plotsGame:guidePickTitle")
          }), (0, Gd.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, Gd.jsx)("img", {
              src: hO,
              alt: "",
              draggable: !1
            }), md("plotsGame:guidePickNote")]
          }), (0, Gd.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: bm.map((dd => {
              let {
                id: Wd,
                blocks: Fd,
                effortKey: Rd
              } = dd;
              return (0, Gd.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, Gd.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    Od(Wd)
                  },
                  children: (0, Gd.jsx)("img", {
                    src: Hm[Wd],
                    alt: "",
                    draggable: !1
                  })
                }), (0, Gd.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, Gd.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, Gd.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: md(Bd(Wd).displayName.translationKey)
                    }), (0, Gd.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: md(Rd)
                    }), (0, Gd.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: md("plotsGame:journalBlocks", {
                        blocks: String(Fd)
                      })
                    })]
                  }), (0, Gd.jsx)(om.m, {
                    onClick: () => {
                      Od(Wd)
                    },
                    children: md("plotsGame:placementBuild")
                  })]
                })]
              }, Wd)
            }))
          })]
        })
      })
    }

    function pm(dd) {
      let {
        direction: Od,
        disabled: md,
        onTurn: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Qd.G)();
      return (0, Gd.jsx)("div", {
        className: od()("PlotsJournalArrow", Od),
        children: (0, Gd.jsx)(om.g, {
          disabled: md,
          ariaLabel: Fd("Forward" === Od ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Wd(Od)
          },
          children: (0, Gd.jsx)(yd.c, {
            name: "angle-up"
          })
        })
      })
    }
    const Ym = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function gm(dd) {
      let {
        page: Od,
        building: md,
        onBuild: Wd,
        onPutAway: Fd
      } = dd;
      const {
        t: Rd
      } = (0, Qd.G)(), {
        displayName: Xd,
        tier: Kd
      } = Bd(Od.id), hd = fd(Od.id, 0).cells.length, vd = "locked" === Od.state, td = md ? om.g : om.m;
      return (0, Gd.jsxs)("article", {
        className: od()("PlotsJournalPage", {
          Locked: vd
        }),
        children: [(0, Gd.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Rd(Xd.translationKey)
        }), (0, Gd.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Rd(Ym[Kd]), " \xb7 ", Rd("plotsGame:journalBlocks", {
            blocks: String(hd)
          })]
        }), (0, Gd.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [xd.map((dd => (0, Gd.jsx)("img", {
            className: od()({
              Shown: dd === Od.id
            }),
            src: Hm[dd],
            alt: "",
            draggable: !1
          }, dd))), "completed" === Od.state && (0, Gd.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Rd("plotsGame:journalBuilt")
          }), vd && (0, Gd.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Gd.jsx)(yd.c, {
              name: "lock"
            })
          })]
        }), null !== Od.note && (0, Gd.jsx)("p", {
          className: "PlotsJournalNote",
          children: Rd(Od.note)
        }), (0, Gd.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Od.state && (0, Gd.jsx)("p", {
            className: "PlotsJournalHint",
            children: Rd("plotsGame:journalLocked", {
              name: Rd(Bd(Od.unlockedBy).displayName.translationKey)
            })
          }), Od.active && (0, Gd.jsxs)(Gd.Fragment, {
            children: [(0, Gd.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Rd("plotsGame:journalBuilding")
            }), (0, Gd.jsx)(om.i, {
              onClick: Fd,
              children: Rd("plotsGame:journalPutAway")
            })]
          }), !vd && !Od.active && (0, Gd.jsx)(td, {
            onClick: () => {
              Wd(Od.id)
            },
            children: Rd("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function wm(dd) {
      let {
        className: Od,
        page: md,
        hidden: Wd,
        building: Fd,
        journal: Rd
      } = dd;
      return (0, Gd.jsxs)("div", {
        ref: dd => {
          null !== dd && (dd.inert = Wd)
        },
        className: od()("PlotsJournalSide", Od),
        children: [void 0 !== md && (0, Gd.jsx)(gm, {
          page: md,
          building: Fd,
          onBuild: Rd.build,
          onPutAway: Rd.putAway
        }), void 0 === md && (0, Gd.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var am = md(2057);

    function Em(dd) {
      return Math.cos((0, am.n)(dd))
    }

    function Jm(dd) {
      return (0, am.B)(Math.acos(JO.b.clamp(dd, -1, 1)))
    }

    function Um(dd, Od, md, Wd, Fd) {
      const Rd = Math.abs(Od - dd),
        Xd = (0, am.B)(Fd / (md * Math.abs(Math.sin((0, am.n)(dd))))),
        Kd = 450 * Math.min(1, Rd / Wd),
        hd = Xd > 0 ? 3 * Rd / Xd : 1 / 0;
      return Math.round(Math.max(120, Math.min(Kd, hd)))
    }
    class xm {
      constructor() {
        this.samples = []
      }
      add(dd, Od) {
        for (this.samples.push({
            x: dd,
            at: Od
          }); Od - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const dd = this.samples[0],
          Od = this.samples[this.samples.length - 1];
        return Od.at > dd.at ? (Od.x - dd.x) / (Od.at - dd.at) : 0
      }
    }

    function Bm(dd) {
      return Jm(new DOMMatrixReadOnly(getComputedStyle(dd).transform).m11)
    }

    function Sm(dd, Od) {
      dd.style.transform = `rotateY(${-Od}deg)`, dd.classList.add("Turning")
    }

    function sm(dd, Od, md) {
      const [Wd, Fd] = (0, Rd.useState)(md), Xd = (0, Rd.useRef)(null), Kd = (0, Rd.useRef)(null), hd = (0, Rd.useRef)({
        Forward: null,
        Back: null
      }), vd = Od ? 2 : 1, Qd = Od ? 180 : 90, td = Wd - Wd % vd, od = td > 0, Nd = td + vd < dd, qd = (0, Rd.useCallback)((() => {
        const dd = Kd.current;
        return null === dd ? td : (Kd.current = null, dd.animation.cancel(), (Od = hd.current[dd.direction]).style.transform = "", Od.classList.remove("Turning"), null === dd.next ? td : (Fd(dd.next), dd.next));
        var Od
      }), [td]), Hd = (0, Rd.useCallback)(((dd, Od, md, Wd) => {
        const Fd = hd.current[dd],
          Rd = Bm(Fd),
          Xd = Od === ("Forward" === dd) ? Qd : 0;
        Sm(Fd, Xd);
        const td = Fd.animate([{
          transform: `rotateY(${-Rd}deg)`
        }, {
          transform: `rotateY(${-Xd}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Um(Rd, Xd, Fd.offsetWidth, Qd, Xd > Rd ? -md : md),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Kd.current = {
          direction: dd,
          animation: td,
          next: Od ? Wd + ("Forward" === dd ? vd : -vd) : null
        }, td.onfinish = () => {
          var dd;
          (null === (dd = Kd.current) || void 0 === dd ? void 0 : dd.animation) === td && qd()
        }
      }), [vd, Qd, qd]), yd = (0, Rd.useCallback)((Od => {
        if (null !== Xd.current) return;
        const md = qd();
        ("Forward" === Od ? md + vd < dd : md > 0) && Hd(Od, !0, 0, md)
      }), [qd, Hd, vd, dd]);
      (0, Rd.useEffect)((() => () => {
        var dd;
        null === (dd = Kd.current) || void 0 === dd || dd.animation.cancel()
      }), []), (0, Rd.useEffect)((() => {
        const dd = dd => {
          var Od;
          dd.pointerId !== (null === (Od = Xd.current) || void 0 === Od ? void 0 : Od.pointerId) || Xd.current.following || (Xd.current = null)
        };
        return window.addEventListener("pointerup", dd), () => {
          window.removeEventListener("pointerup", dd)
        }
      }), []);
      const bd = (dd, Od, md) => {
          const Wd = function(dd, Od, md, Wd) {
            return (dd < 0 ? md : Wd) ? JO.b.clampAbs(dd, Od) : Math.sign(dd) * Od * (1 - 1 / (.55 * Math.abs(dd) / Od + 1))
          }(dd.base + md, vd * dd.width, Nd, od);
          return "Forward" === Od ? Math.min(Wd, 0) : Math.max(Wd, 0)
        },
        Td = (dd, Od) => {
          const md = Xd.current;
          if (Xd.current = null, null === md.direction) return;
          md.speed.add(dd, Od);
          const Wd = md.speed.get(),
            Fd = bd(md, md.direction, dd - md.x);
          Hd(md.direction, null !== function(dd, Od, md, Wd, Fd) {
            if (Math.abs(Od) >= .3 ? Math.sign(Od) !== Math.sign(dd) : Math.abs(dd) < .5 * md) return null;
            const Rd = dd < 0 ? "Forward" : "Back";
            return ("Forward" === Rd ? Wd : Fd) ? Rd : null
          }(Fd, Wd, vd * md.width, Nd, od), Wd, td)
        },
        pd = {
          onPointerDown: dd => {
            var Od;
            if (!dd.isPrimary || 0 !== dd.button || null !== Kd.current && null !== dd.target.closest("button")) return;
            const md = new xm;
            md.add(dd.clientX, dd.timeStamp);
            const Wd = hd.current.Forward.offsetWidth,
              Fd = Kd.current;
            Kd.current = null;
            let Rd = 0;
            if (null !== Fd) {
              const Od = hd.current[Fd.direction],
                md = Bm(Od);
              Fd.animation.cancel(), Sm(Od, md), Rd = function(dd, Od, md, Wd) {
                return (dd < 0 ? md : Wd) ? dd : Math.sign(dd) * Od * (1 / (1 - Math.min(Math.abs(dd) / Od, .99)) - 1) / .55
              }(function(dd, Od, md, Wd) {
                return md * (Em(Od) - Em("Forward" === dd ? 0 : Wd))
              }(Fd.direction, md, Wd, Qd), vd * Wd, Nd, od), dd.currentTarget.setPointerCapture(dd.pointerId)
            }
            Xd.current = {
              pointerId: dd.pointerId,
              x: dd.clientX,
              y: dd.clientY,
              base: Rd,
              width: Wd,
              following: null !== Fd,
              direction: null !== (Od = null === Fd || void 0 === Fd ? void 0 : Fd.direction) && void 0 !== Od ? Od : null,
              speed: md
            }
          },
          onPointerMove: dd => {
            const Od = Xd.current;
            if (null === Od || dd.pointerId !== Od.pointerId) return;
            if (0 === dd.buttons) return void Td(dd.clientX, dd.timeStamp);
            const md = dd.clientX - Od.x;
            !Od.following && function(dd, Od) {
              return Math.abs(dd) > 8 && Math.abs(dd) > Math.abs(Od)
            }(md, dd.clientY - Od.y) && (Od.following = !0, Od.direction = md < 0 ? "Forward" : "Back", dd.currentTarget.setPointerCapture(dd.pointerId)), null !== Od.direction && (Od.speed.add(dd.clientX, dd.timeStamp), Sm(hd.current[Od.direction], function(dd, Od, md, Wd) {
              const Fd = md * Em("Forward" === dd ? 0 : Wd) + Od;
              return JO.b.clamp(Jm(Fd / md), 0, Wd)
            }(Od.direction, bd(Od, Od.direction, md), Od.width, Qd)))
          },
          onPointerUp: dd => {
            var Od;
            dd.pointerId === (null === (Od = Xd.current) || void 0 === Od ? void 0 : Od.pointerId) && Td(dd.clientX, dd.timeStamp)
          },
          onPointerCancel: dd => {
            const Od = Xd.current;
            dd.pointerId === (null === Od || void 0 === Od ? void 0 : Od.pointerId) && (Xd.current = null, null !== Od.direction && Hd(Od.direction, !1, 0, td))
          }
        };
      return {
        first: td,
        step: vd,
        canGoBack: od,
        canGoForward: Nd,
        turnPage: yd,
        leaves: hd,
        pagesHandlers: pd
      }
    }

    function um(dd, Od) {
      return dd > Od && dd >= 600
    }

    function Vm(dd) {
      let {
        journal: Od,
        hud: md,
        guide: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Qd.G)(), Kd = (0, hd.i)(Ad, Od.getPages()), vd = (0, hd.i)(FO, md.getGuide()), td = Kd.find((dd => dd.active)), Nd = (qd = vd, Hd = void 0 === td ? null : td.id, "active" === qd[0] && null === Hd);
      var qd, Hd;
      const yd = (0, qm.l)(um),
        {
          first: bd,
          step: Td,
          canGoBack: gd,
          canGoForward: wd,
          turnPage: Ed,
          leaves: Jd,
          pagesHandlers: Ud
        } = sm(Kd.length, yd, (() => function(dd) {
          const Od = dd.findIndex((dd => dd.active));
          return -1 !== Od ? Od : Math.max(0, dd.findIndex((dd => "open" === dd.state)))
        }(Kd)));
      (0, Rd.useEffect)((() => {
        Od.onOpened()
      }), [Od]), (0, pd.d)((dd => !Nd && ("ArrowLeft" === dd.code || "ArrowRight" === dd.code) && !(0, Yd.isTypingInInput)()), (dd => {
        dd.stopPropagation(), Ed("ArrowLeft" === dd.code ? "Back" : "Forward")
      }));
      const xd = void 0 !== td,
        Bd = (dd, md, Wd) => (0, Gd.jsx)(wm, {
          className: dd,
          page: md >= 0 && md < Kd.length ? Kd[md] : void 0,
          hidden: Wd,
          building: xd,
          journal: Od
        });
      return (0, Gd.jsx)(Nm.c, {
        close: Xd.h,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Gd.jsxs)("section", {
          className: od()("PlotsJournal", {
            Spread: yd
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Fd("plotsGame:journalTitle"),
          children: [(0, Gd.jsx)(om.j, {
            className: "PlotsJournalClose",
            onClick: Xd.h
          }), "active" === vd[0] && (0, Gd.jsx)(tO, {
            className: "PlotsJournalGuideSkip",
            onSkip: Wd.skip
          }), Nd && (0, Gd.jsx)(Tm, {
            onBuild: Od.build
          }), !Nd && (0, Gd.jsx)(pm, {
            direction: "Back",
            disabled: !gd,
            onTurn: Ed
          }), (0, Gd.jsx)("div", {
            hidden: Nd,
            className: "PlotsJournalBookPages",
            ...Ud,
            children: (0, Gd.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [yd && Bd("Left", bd - 2, !0), Bd("Right", bd + 2 * Td - 1, !0), (0, Gd.jsxs)("div", {
                ref: dd => {
                  Jd.current.Back = dd
                },
                className: "PlotsJournalLeaf Back",
                children: [Bd("Recto", bd - 1, !0), yd && Bd("Verso", bd, !1)]
              }), (0, Gd.jsxs)("div", {
                ref: dd => {
                  Jd.current.Forward = dd
                },
                className: "PlotsJournalLeaf Forward",
                children: [Bd("Recto", bd + Td - 1, !1), yd && Bd("Verso", bd + Td, !0)]
              })]
            })
          }), !Nd && (0, Gd.jsx)(pm, {
            direction: "Forward",
            disabled: !wd,
            onTurn: Ed
          })]
        })
      })
    }

    function im(dd, Od, md, Wd, Fd) {
      const Rd = Math.hypot(...Od.dir);
      if (!Number.isFinite(Rd) || 0 === Rd) return -1;
      const {
        from: Xd,
        reach: Kd,
        solid: hd
      } = Od, vd = [Od.dir[0] / Rd, Od.dir[1] / Rd, Od.dir[2] / Rd], Qd = null === hd ? Kd : Math.min(Kd, function(dd, Od, md) {
        const Wd = Am(dd, Od, md);
        if (Wd !== 1 / 0) return Wd;
        return (md[0] + .5 - dd[0]) * Od[0] + (md[1] + .5 - dd[1]) * Od[1] + (md[2] + .5 - dd[2]) * Od[2]
      }(Xd, vd, hd) + .75);
      let td = -1,
        od = 1 / 0,
        Nd = 1 / 0;
      for (let qd = 0; qd < dd.length; qd += 4) {
        const Od = [dd[qd], dd[qd + 1], dd[qd + 2]],
          Rd = Fd(qd) ? Kd : Qd;
        let hd = -1,
          Hd = Am(Xd, vd, Od);
        if (Hd > Rd) {
          const dd = [Od[0] + .5 - Xd[0], Od[1] + .5 - Xd[1], Od[2] + .5 - Xd[2]];
          if (Hd = dd[0] * vd[0] + dd[1] * vd[1] + dd[2] * vd[2], Hd <= 0 || Hd > Rd) continue;
          if (hd = Math.hypot(dd[0] - Hd * vd[0], dd[1] - Hd * vd[1], dd[2] - Hd * vd[2]), hd > .7 || !Wd(qd)) continue
        }(hd < od || hd === od && Hd < Nd) && md(qd) && (td = qd, od = hd, Nd = Hd)
      }
      return td
    }

    function Am(dd, Od, md) {
      let Wd = 0,
        Fd = 1 / 0;
      for (let Rd = 0; Rd < 3; Rd++) {
        const Xd = md[Rd] - dd[Rd];
        if (0 === Od[Rd]) {
          if (Xd > 0 || Xd + 1 < 0) return 1 / 0;
          continue
        }
        const Kd = Xd / Od[Rd],
          hd = (Xd + 1) / Od[Rd];
        Wd = Math.max(Wd, Math.min(Kd, hd)), Fd = Math.min(Fd, Math.max(Kd, hd))
      }
      return Wd <= Fd ? Wd : 1 / 0
    }
    var rm = md(38448),
      Gm = md(39619),
      nm = md(40062);
    const Lm = [1, 1, 1];
    class Pm {
      constructor(dd) {
        this.api = dd, this.meshes = null, this.shown = null
      }
      show(dd) {
        if (!(0, rm.f)(dd, this.shown))
          if (this.shown = null === dd ? null : [dd[0], dd[1], dd[2]], null !== this.meshes)
            for (const Od of this.meshes) this.api.setGameMesh(Od, null === dd ? {
              visible: !1
            } : {
              anchor: dd,
              visible: !0
            });
          else if (null !== dd) {
          const Od = [Gm.d, Gm.d, Gm.d, 0, 0, 0];
          this.meshes = [this.build([Od], Gm.f, dd), this.build((0, Gm.b)(), Gm.k, dd)]
        }
      }
      dispose() {
        for (const Od of null !== (dd = this.meshes) && void 0 !== dd ? dd : []) {
          var dd;
          this.api.disposeGameMesh(Od)
        }
        this.meshes = null, this.shown = null
      }
      build(dd, Od, md) {
        const Wd = [],
          Fd = [];
        for (const [Rd, Xd, Kd, hd, vd, Qd] of dd)(0, nm.g)(Wd, Fd, [hd + .5, vd + .5, Qd + .5], [Rd, Xd, Kd]);
        return this.api.createGameMesh({
          positions: Wd,
          indices: Fd
        }, {
          rgb: Lm,
          alpha: Od,
          onTop: !0
        }, md)
      }
    }

    function zm(dd, Od) {
      const md = PO.i.Hb / 2;
      return dd[0] < Od[0] + md && dd[0] + 1 > Od[0] - md && dd[1] < Od[1] + PO.i.yb && dd[1] + 1 > Od[1] && dd[2] < Od[2] + md && dd[2] + 1 > Od[2] - md
    }

    function cm(dd, Od) {
      return dd.getClientOption(Od, "blockReach") + 1
    }
    class jm {
      constructor(dd, Od, md) {
        this.api = dd, this.localPlayerId = Od, this.foreseen = md, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(dd) {
        this.cells = dd
      }
      playerMoved() {
        return Dm(this.api.getPositionView(this.localPlayerId)).some(((dd, Od) => dd !== this.playerCells[Od]))
      }
      xN(dd) {
        const Od = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...Dm(Od)), this.next = this.pickFrom(null === dd ? [Od[0], Od[1] + 1, Od[2]] : (0, rm.d)(dd), (() => !1)), this.next
      }
      pickFrom(dd, Od) {
        const md = this.api.getPositionView(this.localPlayerId),
          Wd = [md[0], md[1] + PO.i.yb * PO.i.playerEyeToHeightRatio, md[2]],
          Fd = cm(this.api, this.localPlayerId),
          {
            cells: Rd
          } = this,
          Xd = dd => [Rd[dd], Rd[dd + 1], Rd[dd + 2]],
          Kd = function(dd, Od, md, Wd, Fd, Rd) {
            let Xd = -1,
              Kd = -1,
              hd = 1 / 0;
            for (let vd = 0; vd < dd.length; vd += Od) {
              const Od = (Rd(vd) ? 2 : 0) + (Wd(vd) ? 1 : 0);
              if (Od < Kd || Fd(vd)) continue;
              const Qd = (dd[vd] + .5 - md[0]) ** 2 + (dd[vd + 1] + .5 - md[1]) ** 2 + (dd[vd + 2] + .5 - md[2]) ** 2;
              (Od > Kd || Qd < hd) && (Xd = vd, Kd = Od, hd = Qd)
            }
            return Xd
          }(Rd, 4, dd, (dd => 1 === Rd[dd + 3]), (dd => {
            const Wd = Xd(dd);
            return zm(Wd, md) || this.foreseen.has(Wd.join()) || Od(Wd)
          }), (dd => function(dd, Od, md) {
            return (Od[0] + .5 - dd[0]) ** 2 + (Od[1] + .5 - dd[1]) ** 2 + (Od[2] + .5 - dd[2]) ** 2 <= md ** 2
          }(Wd, Xd(dd), Fd)));
        return -1 === Kd ? null : Xd(Kd)
      }
    }

    function Dm(dd) {
      let [Od, md, Wd] = dd;
      const Fd = PO.i.Hb / 2;
      return [Math.floor(Od), Math.floor(md), Math.floor(Wd), Math.floor(Od - Fd), Math.floor(Od + Fd), Math.floor(md + PO.i.yb), Math.floor(Wd - Fd), Math.floor(Wd + Fd)]
    }
    class em {
      constructor(dd, Od, md) {
        this.api = dd, this.localPlayerId = Od, this.pickNext = md, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(dd) {
        const [Od, , md] = dd.cameraDirection, Wd = Math.hypot(Od, md);
        Wd > .001 && (this.heading = [Od / Wd, md / Wd])
      }
      tapped(dd, Od, md) {
        const Wd = cm(this.api, this.localPlayerId),
          {
            origin: Fd,
            direction: Rd
          } = this.api.getActionRay(),
          Xd = [...Fd],
          Kd = [
            [Xd, [Xd[0] + Rd[0] * Wd, Xd[1] + Rd[1] * Wd, Xd[2] + Rd[2] * Wd]]
          ];
        null !== dd && Kd.push([Xd, (0, rm.d)(dd)]), this.tap = {
          lines: Kd,
          next: Od,
          ms: md
        }
      }
      filled(dd, Od) {
        this.tap = null, this.turnFrom(dd, Od), this.retry(Od)
      }
      arrived(dd, Od) {
        const {
          tap: md
        } = this;
        if (null === md || Od - md.ms > 1500) return null;
        const Wd = (0, rm.d)(dd);
        return (0, rm.f)(md.next, dd) || md.lines.some((dd => {
          let [Od, md] = dd;
          return function(dd, Od, md) {
            const Wd = [md[0] - Od[0], md[1] - Od[1], md[2] - Od[2]],
              Fd = [dd[0] - Od[0], dd[1] - Od[1], dd[2] - Od[2]],
              Rd = Wd[0] ** 2 + Wd[1] ** 2 + Wd[2] ** 2,
              Xd = 0 === Rd ? 0 : Math.min(1, Math.max(0, (Fd[0] * Wd[0] + Fd[1] * Wd[1] + Fd[2] * Wd[2]) / Rd));
            return Math.hypot(Fd[0] - Wd[0] * Xd, Fd[1] - Wd[1] * Xd, Fd[2] - Wd[2] * Xd)
          }(Wd, Od, md) <= .9
        })) ? (this.tap = null, this.turnFrom(dd, Od), md.ms) : null
      }
      turnFrom(dd, Od) {
        this.pending = {
          from: dd,
          ms: Od,
          turnMs: Math.max(50, Math.min(250, Od - this.lastFillMs))
        }, this.lastFillMs = Od
      }
      retry(dd) {
        const {
          pending: Od
        } = this;
        if (null === Od) return;
        if (dd - Od.ms > 1500) return void(this.pending = null);
        const md = this.pickNext((0, rm.d)(Od.from), (dd => (0, rm.f)(dd, Od.from)));
        if (null === md) return;
        this.pending = null;
        const {
          turning: Wd
        } = this;
        if (null !== Wd && dd < Wd.endMs && (0, rm.f)(Wd.to, md)) return;
        const Fd = this.api.getActionRay().origin,
          Rd = [md[0] + .5 - Fd[0], md[1] + .5 - Fd[1], md[2] + .5 - Fd[2]],
          Xd = Math.hypot(Rd[0], Rd[2]);
        if (Xd < .3) {
          const dd = Math.max(Xd, .001);
          Rd[0] = this.heading[0] * dd, Rd[2] = this.heading[1] * dd
        }
        this.api.turnCamera(Rd, Od.turnMs), this.turning = {
          to: md,
          endMs: dd + Od.turnMs
        }
      }
    }
    class Im {
      constructor(dd, Od, md, Wd) {
        this.api = dd, this.localPlayerId = Od, this.juice = md, this.tracker = Wd, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new zO(dd), this.meshes = new cO.n(dd), this.outline = new Pm(dd), this.nextCell = new jm(dd, Od, this.foreseen), this.turn = new em(dd, Od, ((dd, Od) => this.nextCell.pickFrom(dd, Od)))
      }
      Yt(dd) {
        const Od = "active" === dd[0] ? `${dd[1]}|${dd[3]}|${dd[4]}|${dd[5]}|${dd[6]}` : "";
        if ("active" !== dd[0]) "built" === dd[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , md, Wd, Fd, Rd] = dd;
          Od !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = md) : md === this.layerY ? this.burstUnlisted(Wd) : md > this.layerY && this.finishLayer(md), this.layerY = md, this.layerCells.has(md) || this.layerCells.set(md, Wd.filter(lm)), this.ghostCells = Wd, this.palette = Fd, this.occupiedCells = Rd
        }
        Od !== this.blueprint && (this.tracker.show("active" === dd[0] && dd[2] ? {
          id: dd[1],
          y: dd[4]
        } : null), this.blueprint = Od, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((dd => this.api.blockNameToBlockId(dd))), this.chunkWatch.watch([...this.ghostCells.filter(lm), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(dd) {
        this.burstUnlisted([]), dd > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = dd)
      }
      Et() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const dd = performance.now();
        let Od = !1;
        for (const [Wd, Fd] of this.foreseen) {
          var md;
          if (dd - Fd > 1e3) this.foreseen.delete(Wd), Od = !0, (null === (md = this.lastFilled) || void 0 === md ? void 0 : md.join()) === Wd && (this.lastFilled = this.lastSeenFilled)
        }(Od || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(dd) {
        const Od = new Set;
        for (let Fd = 0; Fd < dd.length; Fd += 4) Od.add(`${dd[Fd]},${dd[Fd+1]},${dd[Fd+2]}`);
        const md = [],
          {
            ghostCells: Wd
          } = this;
        for (let Fd = 0; Fd < Wd.length; Fd += 4) {
          const dd = `${Wd[Fd]},${Wd[Fd+1]},${Wd[Fd+2]}`;
          !Od.has(dd) && this.open.delete(dd) && md.push(this.filledCell(Fd))
        }
        this.burst(md)
      }
      refresh() {
        const {
          ghostCells: dd,
          palette: Od,
          occupiedCells: md
        } = this, Wd = new cO.k, Fd = new Set, Rd = [], Xd = [];
        let Kd = 0;
        for (let hd = 0; hd < dd.length; hd += 4) {
          const [md, vd, Qd, td] = [dd[hd], dd[hd + 1], dd[hd + 2], dd[hd + 3]], od = this.api.getBlockId(md, vd, Qd), Nd = `${md},${vd},${Qd}`, qd = AO(this.blockIds[td], od);
          !qd && rO(od) ? Wd.add(md, vd, Qd, nO(Od[td]), cO.i, (0, LO.g)(Od[td])) : qd ? this.open.has(Nd) && Rd.push(this.filledCell(hd)) : Wd.add(md, vd, Qd, cO.h, cO.e), qd || Kd++, !qd && this.api.isBlockInLoadedChunk(md, vd, Qd) && (Fd.add(Nd), Xd.push(md, vd, Qd, rO(od) ? 0 : 1))
        }
        this.open = Fd, this.nextCell.setCells(Xd), this.tracker.update(this.layerY, this.topLayerY, Kd);
        for (let hd = 0; hd < md.length; hd += 3) {
          const [dd, Od, Fd] = [md[hd], md[hd + 1], md[hd + 2]];
          rO(this.api.getBlockId(dd, Od, Fd)) || Wd.add(dd, Od, Fd, cO.h, cO.e)
        }
        this.meshes.show(Wd.toArray()), this.burst(Rd), this.showNext(), this.turn.retry(performance.now())
      }
      burst(dd) {
        const Od = performance.now(),
          md = [];
        for (const [Fd, Rd, Xd] of dd) {
          const dd = [Fd, Rd, Xd];
          this.lastSeenFilled = dd, this.foreseen.delete(dd.join()) || md.push(dd)
        }
        const Wd = this.isHolding(Od);
        for (const Fd of md) {
          if (this.lastFilled = Fd, Wd && this.pressFilled) {
            this.turn.filled(Fd, Od);
            continue
          }
          const dd = this.turn.arrived(Fd, Od);
          if (null !== dd) {
            this.pressFilled = Wd;
            for (const [Od, md] of this.foreseen) md <= dd && this.foreseen.delete(Od)
          }
        }
        this.juice.filled(dd)
      }
      showNext() {
        var dd;
        this.outline.show(null !== (dd = this.aimed) && void 0 !== dd ? dd : this.nextCell.xN(this.lastFilled))
      }
      afterRender(dd) {
        var Od;
        this.turn.look(dd);
        const md = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === md ? null : md.position), this.outline.show(null !== (Od = this.aimed) && void 0 !== Od ? Od : this.nextCell.get())
      }
      isHolding(dd) {
        return null !== this.altMs && dd - this.altMs <= 500
      }
      attemptAltAction(dd) {
        const Od = performance.now();
        if (this.isHolding(Od) || (this.pressFilled = !1), this.altMs = Od, this.pressFilled) return "preventPlacement";
        const md = this.findAimed(dd);
        if (null !== md) return this.foreseen.set(md.join(), Od), this.lastFilled = md, this.aimed = null, this.showNext(), this.turn.filled(md, Od), this.pressFilled = !0, "preventPlacement";
        {
          const md = this.nextCell.get();
          null !== md && this.turn.tapped(dd, md, Od)
        }
      }
      holdPressOnEntity() {
        const dd = performance.now();
        this.pressFilled && this.isHolding(dd) && (this.altMs = dd)
      }
      findAimed(dd) {
        return function(dd, Od, md, Wd, Fd, Rd, Xd) {
          const Kd = dd.NWd(Od),
            hd = null === Kd || null === dd.blockNameToBlockId(Kd.name, !0) ? null : Kd.name,
            vd = dd.getPositionView(Od),
            {
              origin: Qd,
              direction: td
            } = dd.getActionRay(),
            od = im(Wd, {
              from: Qd,
              dir: td,
              reach: cm(dd, Od),
              solid: md
            }, (Od => {
              const md = [Wd[Od], Wd[Od + 1], Wd[Od + 2]];
              return !AO(Fd[Wd[Od + 3]], dd.getBlockId(...md)) && !Xd.has(md.join()) && dd.isBlockInLoadedChunk(...md) && !zm(md, vd)
            }), (dd => null === hd || hd === GO(Fd[Wd[dd + 3]])), (dd => null !== Rd && Wd[dd] === Rd[0] && Wd[dd + 1] === Rd[1] && Wd[dd + 2] === Rd[2]));
          return -1 === od ? null : [Wd[od], Wd[od + 1], Wd[od + 2]]
        }(this.api, this.localPlayerId, dd, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(dd) {
        const {
          ghostCells: Od
        } = this, [md, Wd, Fd] = nO(this.palette[Od[dd + 3]]);
        return [Od[dd], Od[dd + 1], Od[dd + 2], md, Wd, Fd]
      }
    }

    function lm(dd, Od) {
      return Od % 4 !== 3
    }
    class Cm {
      constructor(dd) {
        this.api = dd, this.sent = !1
      }
      Et() {
        this.sent || Kd.e.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var Zm = md(2991),
      km = md(40748);

    function fm(dd, Od, md) {
      const Wd = [255 * dd, 255 * Od, 255 * md],
        [Fd, Rd, Xd] = Wd.map((dd => dd + .4 * (255 - dd)));
      return {
        texture: "square_particle",
        Mt: 48,
        minLifeTime: .3 / km.c,
        maxLifeTime: .55 / km.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * km.c * km.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Wd, 1],
          maxColor: [Fd, Rd, Xd, 1]
        }, {
          timeFraction: 1,
          minColor: [...Wd, 0],
          maxColor: [Fd, Rd, Xd, 0]
        }],
        blendMode: Zm.g.Standard
      }
    }
    const Mm = {
      texture: "glint",
      mipmaps: !1,
      Mt: 96,
      minLifeTime: .5 / km.c,
      maxLifeTime: .9 / km.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * km.c * km.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Zm.g.OneOne
    };
    class dW {
      constructor(dd, Od) {
        this.api = dd, this.localPlayerId = Od, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(dd) {
        if (this.api.particlesEnabled())
          for (const [Od, md, Wd, Fd, Rd, Xd] of dd.slice(0, 3)) {
            const dd = `${Fd},${Rd},${Xd}`;
            let Kd = this.chips.get(dd);
            void 0 === Kd && (Kd = this.api.createParticles(fm(Fd, Rd, Xd), {
              pos: [Od + .5, md + .5, Wd + .5]
            }), this.chips.set(dd, Kd));
            for (let Od = 0; Od < 8; Od++) this.setPoint(Od, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Kd.emitPoints([Od + .5, md + .5, Wd + .5], this.points, 8)
          }
      }
      layerDone(dd) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Od = dd.length / 3;
        if (0 === Od || !this.api.particlesEnabled()) return;
        const md = Math.min(Od, 48),
          [Wd, Fd, Rd] = [dd[0] + .5, dd[1] + 1, dd[2] + .5];
        let Xd = 0;
        for (let Kd = 0; Kd < md; Kd++) {
          const hd = 3 * Math.floor(Kd * Od / md);
          for (let Od = 0; Od < 2; Od++) this.setPoint(Xd++, dd[hd] + Math.random() - Wd, dd[hd + 1] + 1 - Fd, dd[hd + 2] + Math.random() - Rd, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(Mm, {
          pos: [Wd, Fd, Rd]
        }), this.sparkles.emitPoints([Wd, Fd, Rd], this.points, Xd)
      }
      dispose() {
        var dd;
        for (const Od of this.chips.values()) Od.stop();
        this.chips.clear(), null === (dd = this.sparkles) || void 0 === dd || dd.stop(), this.sparkles = null
      }
      setPoint(dd, Od, md, Wd, Fd) {
        const Rd = 4 * dd;
        this.points[Rd] = Od, this.points[Rd + 1] = md, this.points[Rd + 2] = Wd, this.points[Rd + 3] = Fd
      }
    }
    const OW = "SpecialAction1",
      mW = "KeyY",
      WW = "KeyX";

    function FW(dd) {
      let {
        placement: Od
      } = dd;
      const md = (0, hd.i)(lO, Od.getView()),
        {
          t: Wd
        } = (0, Qd.G)(),
        {
          isTouchScreen: Fd
        } = (0, Kd.p)(["isTouchScreen"]),
        Xd = (0, Rd.useContext)(wd),
        td = null !== md,
        qd = td && !md.blocked && !md.waiting;
      if ((0, pd.d)((dd => td && !dd.repeat && !(0, Yd.isTypingInInput)() && !(0, Nd.m)() && !Fd), (dd => {
          const md = function(dd, Od, md) {
            if (dd === WW) return Od.stop;
            if (dd === mW) return md ? Od.build : XW;
            return vd.y[OW].includes(dd) ? Od.rotate : null
          }(dd.code, Od, qd);
          null !== md && (dd.stopPropagation(), md())
        })), !td) return null;
      let yd = Fd ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return md.blocked ? yd = "plotsGame:placementOffPlot" : md.toClear > 0 ? yd = "plotsGame:placementClear" : "placeSpot" !== Xd.hint && "placeBuild" !== Xd.hint || (yd = null), (0, Gd.jsx)(Hd.h, {
        placement: "bottom",
        children: (0, Gd.jsxs)("div", {
          ref: Xd.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, Gd.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Wd(Bd(md.id).displayName.translationKey)
          }), null !== yd && (0, Gd.jsx)("div", {
            className: od()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: md.refusals > 0
            }),
            children: Wd(yd)
          }, md.refusals), (0, Gd.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Gd.jsxs)(om.g, {
              onClick: Od.rotate,
              children: [(0, Gd.jsx)(RW, {
                noaAction: OW
              }), Wd("plotsGame:placementRotate")]
            }), (0, Gd.jsxs)(om.G, {
              onClick: Od.stop,
              children: [(0, Gd.jsx)(RW, {
                keyCode: WW
              }), Wd("general:cancel")]
            }), (0, Gd.jsx)("span", {
              ref: Xd.buildRef,
              className: od()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === Xd.hint && qd && Fd
              }),
              children: (0, Gd.jsxs)(om.m, {
                disabled: !qd,
                onClick: Od.build,
                children: [(0, Gd.jsx)(RW, {
                  keyCode: mW
                }), Wd("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function RW(dd) {
      return (0, Gd.jsx)(Td.b, {
        className: "PlotsPlacementKey",
        ...dd
      })
    }

    function XW() {}
    var KW = md(3307),
      hW = md(38302),
      vW = md(2125),
      QW = md(1315);
    const tW = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function oW(dd) {
      let {
        hud: Od
      } = dd;
      const md = (0, hd.i)(WO, Od.getPlot()),
        [Wd, Fd] = (0, Rd.useState)(null),
        Xd = (0, hW.j)(Wd);
      if ("none" === md[0]) return null;
      const [, Kd, vd, Qd, td, Nd] = md;
      return (0, Gd.jsx)("div", {
        className: od()("PlotsPlotBannerContainer", {
          Below: Xd
        }),
        children: (0, Gd.jsx)(NW, {
          plotX: Kd,
          plotZ: vd,
          ownerName: Qd,
          ownerId: td,
          relation: Nd,
          plaqueRef: Fd
        }, `${Kd},${vd}`)
      })
    }

    function NW(dd) {
      var Od, md;
      let {
        plotX: Wd,
        plotZ: Fd,
        ownerName: Rd,
        ownerId: Xd,
        relation: Kd,
        plaqueRef: hd
      } = dd;
      const {
        t: vd
      } = (0, Qd.G)(), td = (0, vW.h)("hiddenPlayerNames"), Nd = (0, vW.h)("players"), qd = null === Xd ? null : null !== (Od = null === (md = Nd.byId[Xd]) || void 0 === md ? void 0 : md.cosmetics) && void 0 !== Od ? Od : null, Hd = vd("plotsGame:plotBannerCoords", {
        x: Wd,
        z: Fd
      }), bd = "own" === Kd || null !== Rd;
      return (0, Gd.jsxs)("div", {
        ref: hd,
        className: od()("PlotsPlotBanner", {
          Own: "own" === Kd,
          Shared: "shared" === Kd
        }),
        role: "status",
        children: [(0, Gd.jsxs)("span", {
          className: od()("PlotsPlotBannerSeal", {
            Face: null !== qd
          }),
          children: [null !== qd && (0, Gd.jsx)(KW.e, {
            cosmetics: qd
          }), null === qd && (0, Gd.jsx)(yd.c, {
            name: tW[Kd]
          })]
        }), (0, Gd.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Gd.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Kd && vd("plotsGame:plotBannerYours"), "own" !== Kd && null !== Rd && vd("plotsGame:plotBannerOwner", {
              name: (0, QW.e)(Rd, td)
            }), !bd && Hd]
          }), bd && (0, Gd.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Hd, "shared" === Kd && (0, Gd.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: vd("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const qW = function(dd, Od, md, Wd) {
      let {
        localPlayerId: Fd
      } = Wd;
      const Kd = new XO;
      let hd = null,
        vd = null,
        Qd = null,
        td = null,
        od = null,
        Nd = null;
      const qd = [];
      return {
        onCreate: dd => {
          hd = new dW(dd, Fd);
          const Od = new mO;
          vd = new Im(dd, Fd, hd, Od), Qd = new ZO(dd, Fd), td = new rd(dd, Qd), od = new tm(dd, Fd, vd.nextCell), Nd = new Cm(dd), qd.push((0, Xd.F)((0, Rd.createElement)(Km, {
            hud: Kd,
            guide: od,
            tracker: Od,
            placement: Qd
          }, (0, Rd.createElement)(oW, {
            hud: Kd
          }), (0, Rd.createElement)(Ld, {
            journal: td
          }), (0, Rd.createElement)(mm, {
            placement: Qd
          }), (0, Rd.createElement)(FW, {
            placement: Qd
          })), {
            content: (0, Rd.createElement)(Vm, {
              journal: td,
              hud: Kd,
              guide: od
            })
          }))
        },
        Et: () => {
          Nd.Et(), vd.Et(), Qd.Et(), td.Et()
        },
        onPlayerAttemptAltAction: (dd, Od, md, Wd, Fd, Rd) => {
          if (null !== Rd) return void vd.holdPressOnEntity();
          const Xd = void 0 === Od ? null : [Od, md, Wd];
          return vd.attemptAltAction(Xd)
        },
        onPlayerClickUp: () => {
          vd.endPress()
        },
        onAfterRender: (dd, Od) => {
          Qd.afterRender(Od), vd.afterRender(Od), od.afterRender(Od)
        },
        onClose: () => {
          for (const dd of qd) dd();
          hd.dispose(), vd.dispose(), Qd.dispose(), hd = null, vd = null, Qd = null, td = null, od = null, Nd = null
        },
        onReceivedMessageFromServer: (dd, Od) => {
          if ("plotsPlot" === dd) Kd.receivePlot(Od);
          else if ("plotsBlueprint" === dd) {
            const dd = Od;
            vd.Yt(dd), Qd.Yt(dd)
          } else "plotsJournal" === dd ? td.Yt(Od) : "plotsJournalOpen" === dd ? td.openFromServer(Od) : "plotsPreviewEnd" === dd ? Qd.endFromServer() : "plotsGuide" === dd ? Kd.receiveGuide(Od) : "plotsGuideDone" === dd && Kd.receiveGuideDone()
        }
      }
    }
  },
  40036: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd
    });
    var Wd = md(40028);
    const Fd = 5,
      Rd = [0, 0, 0],
      Xd = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Kd(dd, Od, md, Kd, hd, vd) {
      let [Qd, td, od] = Kd;
      const Nd = (Qd + .5 - md[0]) ** 2 + (td - md[1]) ** 2 + (od + .5 - md[2]) ** 2;
      let qd = null;
      Nd <= vd ** 2 && (Rd[0] = Qd + .5, Rd[1] = td + hd, Rd[2] = od + .5, qd = Od.projectWorldPosToViewport(Rd));
      const Hd = null !== qd && qd.x > -Fd && qd.x < 100 + Fd && qd.y > -Fd && qd.y < 100 + Fd;
      return (0, Wd.h)(dd, !Hd), Hd ? (Xd.x = qd.x, Xd.y = qd.y, Xd.distSq = Nd, Xd) : null
    }
  },
  40748: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      f: () => Rd
    });
    const Wd = 1 / .6,
      Fd = {
        kind: "smokePuff"
      };
    class Rd {
      constructor(dd, Od, md) {
        this.style = dd, this.Mt = Od, this.half = md, this.particles = null, this.lastFrame = -1
      }
      emit(dd, Od, md) {
        let Rd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return md !== this.lastFrame && (this.lastFrame = md, this.particles || (this.particles = dd.createParticles(function(dd, Od) {
          const [
            [md, Rd, Xd],
            [Kd, hd, vd]
          ] = dd.colours;
          return {
            texture: dd.soft ? Fd : "square_particle",
            Mt: Od,
            minLifeTime: dd.life[0] / Wd,
            maxLifeTime: dd.life[1] / Wd,
            minEmitPower: dd.power[0] * Wd,
            maxEmitPower: dd.power[1] * Wd,
            minSize: dd.size[0],
            maxSize: dd.size[1],
            emitRate: 0,
            gravity: [0, dd.lift * Wd * Wd, 0],
            dir1: [-dd.spread, 1, -dd.spread],
            dir2: [dd.spread, 1, dd.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [md, Rd, Xd, dd.alpha],
              maxColor: [Kd, hd, vd, dd.alpha]
            }, {
              timeFraction: 1,
              minColor: [md, Rd, Xd, 0],
              maxColor: [Kd, hd, vd, 0]
            }],
            blendMode: dd.blendMode
          }
        }(this.style, this.Mt), {
          pos: Od,
          half: this.half
        })), this.particles.moveTo(Od, this.half), this.particles.emit(Rd), !0)
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null
      }
    }
  },
  41159: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Kd,
      j: () => hd
    });
    const Wd = new Map,
      Fd = [];

    function Rd() {
      for (const dd of Fd) dd()
    }

    function Xd(dd) {
      var Od;
      return Wd.set(dd, (null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : 0) + 1), Rd(), () => {
        const Od = Wd.get(dd) - 1;
        0 === Od ? Wd.delete(dd) : Wd.set(dd, Od), Rd()
      }
    }

    function Kd() {
      return [...Wd.keys()]
    }

    function hd(dd) {
      Fd.push(dd)
    }
  },
  38439: (dd, Od, md) => {
    md.d(Od, {
      A: () => nd,
      B: () => Ld,
      C: () => rd,
      D: () => Pd,
      c: () => hd,
      e: () => Sd,
      f: () => Kd,
      h: () => Ad,
      l: () => xd,
      m: () => wd,
      q: () => Vd,
      r: () => ud,
      v: () => Ud,
      y: () => Gd
    });
    var Wd = md(46);
    const Fd = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Rd = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Xd = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Kd = Rd.filter((dd => "docsButton" !== dd)),
      hd = Xd.filter((dd => "aiHelperButton" !== dd)),
      vd = "codeEditorTutorials",
      Qd = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      td = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let od = null,
      Nd = null;
    const qd = new Set,
      Hd = new Set;
    let yd = null;
    const bd = new Set,
      Td = new Set;

    function pd() {
      Td.forEach((dd => {
        dd()
      }))
    }

    function Yd() {
      if (!od) {
        const dd = Wd.k.getItem(vd);
        od = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof dd && null !== dd ? dd : {}
        }
      }
      return od
    }

    function gd(dd) {
      const Od = Yd();
      Od[dd] || (od = {
        ...Od,
        [dd]: !0
      }, Wd.k.setItem(vd, od))
    }

    function wd(dd) {
      return "docsOverview" === dd ? Rd : "aiHelperOverview" === dd ? Xd : Nd ? Fd[Nd] : []
    }

    function Ed(dd) {
      return ("worldCodeButton" !== dd || !Yd().worldCodeIntroShown) && !bd.has(dd)
    }

    function Jd(dd) {
      var Od;
      return (null === (Od = yd) || void 0 === Od ? void 0 : Od.name) === dd ? yd.stepsDone : qd
    }

    function Ud(dd, Od) {
      if (! function(dd) {
          return yd ? yd.name === dd : "welcome" === dd
        }(dd) || !Ed(Od) || Jd(dd).has(Od)) return !1;
      if (yd) return !0;
      const md = Qd[Od];
      return md ? !Yd()[md] || Hd.has(Od) : !Yd()[td[dd]]
    }

    function xd(dd) {
      var Od;
      return null !== (Od = wd(dd).find((Od => Ud(dd, Od)))) && void 0 !== Od ? Od : null
    }

    function Bd(dd) {
      var Od;
      gd(td[dd]), (null === (Od = yd) || void 0 === Od ? void 0 : Od.name) === dd && (yd = null)
    }

    function Sd(dd) {
      const Od = (yd ? [yd.name] : ["welcome", "docsOverview"]).find((Od => xd(Od) === dd));
      if (!Od) return;
      Jd(Od).add(dd);
      const md = Qd[dd];
      md && (gd(md), yd || Hd.add(dd)), null === xd(Od) && Bd(Od), pd()
    }

    function sd(dd, Od) {
      const md = wd(dd),
        Wd = Jd(dd);
      for (let Fd = md.indexOf(Od) - 1; Fd >= 0; Fd--)
        if (Wd.has(md[Fd]) && Ed(md[Fd])) return md[Fd];
      return null
    }

    function ud(dd, Od) {
      return null !== sd(dd, Od)
    }

    function Vd(dd, Od) {
      const md = sd(dd, Od);
      md && (Jd(dd).delete(md), pd())
    }

    function Ad(dd) {
      Bd(dd), "welcome" === dd && wd("welcome").forEach((dd => {
        const Od = Qd[dd];
        Od && gd(Od)
      })), pd()
    }

    function rd(dd) {
      yd = {
        name: dd,
        stepsDone: new Set
      }, pd()
    }

    function Gd() {
      (yd || 0 !== qd.size || 0 !== Hd.size) && (yd = null, qd.clear(), Hd.clear(), pd())
    }

    function nd(dd, Od) {
      const md = Od ? dd : Nd === dd ? null : Nd;
      md !== Nd && (Nd = md, pd())
    }

    function Ld(dd, Od) {
      bd.has(dd) === Od && (Od ? bd.delete(dd) : bd.add(dd), pd())
    }

    function Pd(dd) {
      return Td.add(dd), () => {
        Td.delete(dd)
      }
    }
  },
  40028: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd) {
      let Od = Wd.get(dd);
      return Od || (Od = {
        hidden: dd.hidden,
        x: NaN,
        y: NaN
      }, Wd.set(dd, Od)), Od
    }

    function Rd(dd, Od) {
      const md = Fd(dd);
      md.hidden !== Od && (md.hidden = Od, dd.hidden = Od)
    }

    function Xd(dd, Od, md) {
      const Wd = Fd(dd);
      Wd.x === Od && Wd.y === md || (Wd.x = Od, Wd.y = md, dd.style.translate = `${Od}vw ${md}vh`)
    }
  },
  39958: (dd, Od, md) => {
    md.d(Od, {
      A: () => Jd,
      E: () => gd,
      F: () => Yd,
      G: () => od,
      K: () => Hd,
      L: () => bd,
      O: () => Fd,
      b: () => Qd,
      e: () => hd,
      i: () => pd,
      m: () => vd,
      o: () => Kd,
      q: () => Xd,
      t: () => Rd,
      w: () => Ed,
      x: () => Nd,
      y: () => wd
    });
    var Wd = md(5813);

    function Fd(dd) {
      return Math.floor(dd).toLocaleString("en-US")
    }
    const Rd = 2e3,
      Xd = .005,
      Kd = .001,
      hd = 2,
      vd = "Fluid Tank",
      Qd = "Coolant Mixer",
      td = 144;

    function od(dd) {
      const Od = dd.split("|")[0];
      return (0, Wd.n)(Od) ? Od === Wd.d ? "cryo" : "water" : null
    }
    const Nd = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      qd = 63;

    function Hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const md = Od ? function(dd, Od, md) {
        const Wd = Nd.findIndex((Wd => {
          let [Fd, Rd, Xd] = Wd;
          return Fd === dd && Rd === Od && Xd === md
        }));
        return Wd < 0 ? 0 : 1 << Wd
      }(Od[0], Od[1], Od[2]) : 0;
      return "maker" === dd ? {
        kind: dd,
        faces: md
      } : "user" === dd ? {
        kind: dd,
        faces: qd & ~md
      } : {
        kind: dd,
        faces: qd
      }
    }

    function yd(dd) {
      return "pipe" === dd || "tank" === dd || "maker" === dd
    }

    function bd(dd, Od, md) {
      return 0 !== (dd.faces & 1 << md) && 0 !== (Od.faces & 1 << (1 ^ md)) && (yd(dd.kind) || yd(Od.kind))
    }
    const Td = (dd, Od, md, Wd) => ({
        input: dd,
        inputAmount: Wd,
        output: Od,
        outputAmount: md
      }),
      pd = {
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
          recipes: [Td("Uranium Grit", "Uranium Pellet", 1, 12), Td("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Td("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: td,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Yd(dd, Od) {
      return 1e3 * (null !== Od && void 0 !== Od ? Od : 0) / dd.opMs
    }

    function gd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const md = Yd(pd["Coolant Mixer"], td) * Od;
      return dd <= 0 ? 0 : Math.ceil(dd / md - 1e-9)
    }
    const wd = "baf2Water",
      Ed = "baf2waterclose",
      Jd = "baf2wateropen"
  },
  41143: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      g: () => td
    });
    var Wd = md(5733),
      Fd = md(5756),
      Rd = md(5769);
    const Xd = [0, 0, 0, 1, 1, 1],
      Kd = (0, Fd.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      hd = (0, Fd.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      vd = (0, Fd.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Qd = [0, 1, 2, 3].map((dd => (0, Fd.d)((0, Fd.n)([
        [3, 2, 0, 5, 7, 3]
      ], dd))));

    function td(dd) {
      const {
        Sy: Od,
        model: md,
        blockModel: Fd,
        meta: td
      } = Wd.i[dd];
      return void 0 !== Od ? Od : "CentreCross" === md ? Kd : null !== Fd && void 0 !== Fd && Fd.startsWith("torch") ? td.halfblockPlacement === Rd.c.side ? Qd[td.rot - 1] : td.halfblockPlacement === Rd.c.top ? vd : hd : Xd
    }
  },
  39951: (dd, Od, md) => {
    md.d(Od, {
      d: () => Ad,
      f: () => rd
    });
    var Wd = md(5733),
      Fd = md(5759);
    const Rd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Xd = md(5774),
      Kd = md(39756),
      hd = md(5769);
    const vd = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Qd(dd) {
      let [Od, md] = dd;
      return [-md, Od]
    }

    function td(dd, Od) {
      return dd[0] === Od[0] && dd[1] === Od[1]
    }

    function od(dd, Od) {
      return dd[0] * Od[0] + dd[1] * Od[1] === 0
    }
    const Nd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var qd = md(5804);

    function Hd(dd, Od, md, Wd, Fd) {
      return Od < qd.p || Od >= qd.p + qd.t || Math.floor(dd / qd.y) === Math.floor(Wd / qd.y) && Math.floor(md / qd.y) === Math.floor(Fd / qd.y)
    }
    const yd = "Splitter",
      bd = "Sorting Gate",
      Td = new Set(qd.N),
      pd = new Set([...qd.N, "Belt Loader", "Fast Loader", bd]),
      Yd = new Set(qd.x),
      gd = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function wd(dd) {
      var Od, md;
      return null !== (Od = null === (md = Wd.i[dd]) || void 0 === md ? void 0 : md.meta.rootName) && void 0 !== Od ? Od : ""
    }

    function Ed(dd) {
      return wd(dd) === qd.i && (0, qd.Z)(Wd.i[dd].name)
    }
    var Jd = md(5766),
      Ud = md(5781);
    const xd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Bd(dd) {
      var Od, md;
      const Fd = null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta;
      return (null === Fd || void 0 === Fd ? void 0 : Fd.rootName) !== Ud.g ? null : {
        rot: null !== (md = Fd.rot) && void 0 !== md ? md : 1,
        half: (0, Ud.c)(Fd.rootName, Fd.metaStr)
      }
    }

    function Sd(dd, Od, md, Wd) {
      return Bd(dd(Od, md, Wd))
    }

    function sd(dd, Od, md, Wd, Fd) {
      let {
        rot: Rd,
        half: Xd
      } = Fd;
      const [Kd, hd] = (0, Ud.e)(Rd, Xd), vd = Sd(dd, Od + Kd, md, Wd + hd);
      return null !== vd && vd.rot === Rd && vd.half === Ud.h[Xd]
    }
    var ud = md(39955);
    const Vd = [new class {
      constructor() {
        this.reshapeOffsets = Nd
      }
      handles(dd) {
        var Od;
        return "Stairs" === (null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.model)
      }
      affects(dd) {
        return this.handles(dd)
      }
      shape(dd, Od, md, Fd, Rd) {
        const Xd = this.stairsOf(Rd),
          Kd = this.cornerAt(dd, Od, md, Fd, Xd),
          vd = Xd.half === hd.c.top ? "top" : "bot";
        return (0, Wd.j)(`${Wd.i[Rd].meta.rootName}|meta|rot${Xd.rot}|${vd}${null===Kd?"":`|${Kd}`}`)
      }
      stairsOf(dd) {
        const {
          rot: Od,
          halfblockPlacement: md
        } = Wd.i[dd].meta;
        return {
          rot: Od,
          half: md
        }
      }
      stairsAt(dd, Od, md, Wd) {
        const Fd = dd(Od, md, Wd);
        return this.handles(Fd) ? this.stairsOf(Fd) : null
      }
      cornerAt(dd, Od, md, Wd, Fd) {
        let {
          rot: Rd,
          half: Xd
        } = Fd;
        const Kd = vd[Rd],
          hd = Fd => {
            let [Kd, hd] = Fd;
            const vd = this.stairsAt(dd, Od + Kd, md, Wd + hd);
            return null !== vd && vd.rot === Rd && vd.half === Xd
          },
          Nd = this.stairsAt(dd, Od + Kd[0], md, Wd + Kd[1]);
        if (null !== Nd && Nd.half === Xd) {
          const dd = vd[Nd.rot];
          if (od(Kd, dd) && !hd([-dd[0], -dd[1]])) return td(dd, Qd(Kd)) ? "outerLeft" : "outerRight"
        }
        const qd = this.stairsAt(dd, Od - Kd[0], md, Wd - Kd[1]);
        if (null !== qd && qd.half === Xd) {
          const dd = vd[qd.rot];
          if (od(Kd, dd) && !hd(dd)) return td(dd, Qd(Kd)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Rd, this.rootIds = new Set(Fd.j.map((dd => (0, Wd.j)(dd))))
      }
      handles(dd) {
        var Od;
        const md = null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta;
        return void 0 !== md && this.rootIds.has(md.rootId)
      }
      affects(dd) {
        return this.handles(dd)
      }
      placedBy(dd) {
        return Wd.i[dd].meta.rootName === Fd.s ? null : Fd.s
      }
      shape(dd, Od, md, Rd, Xd) {
        const {
          rootId: Kd,
          rootName: hd,
          rot: vd
        } = Wd.i[Xd].meta;
        let Qd = 0;
        return Fd.A[vd].forEach(((Fd, Xd) => {
          var hd;
          let [td, od, Nd] = Fd;
          const qd = null === (hd = Wd.i[dd(Od + td, md + od, Rd + Nd)]) || void 0 === hd ? void 0 : hd.meta;
          (null === qd || void 0 === qd ? void 0 : qd.rootId) === Kd && qd.rot === vd && (Qd |= 1 << Xd)
        })), (0, Wd.j)((0, Fd.g)(hd, vd, Qd))
      }
    }, ...Xd.c.map((dd => new Kd.e(dd))), new class {
      constructor() {
        this.reshapeOffsets = gd
      }
      handles(dd) {
        const Od = wd(dd);
        return Td.has(Od) || Od === qd.i
      }
      affects(dd) {
        const Od = wd(dd);
        return pd.has(Od) || Yd.has(Od) || Od === yd || Od === qd.i || void 0 !== qd.d[Od]
      }
      shape(dd, Od, md, Fd, Rd, Xd) {
        const {
          rootName: Kd,
          rot: hd
        } = Wd.i[Rd].meta;
        return Kd === qd.i ? Xd ? Rd : function(dd, Od, md, Fd, Rd) {
          const [Xd, Kd] = qd.g[Rd - 1];
          for (let hd = 1; hd <= qd.L; hd++) {
            const [vd, Qd] = [Od - Xd * hd, Fd - Kd * hd], td = dd(vd, md, Qd);
            if (wd(td) === qd.i && Wd.i[td].meta.rot === Rd && Hd(Od, md, Fd, vd, Qd)) return (0, Wd.j)((0, qd.fb)(Rd, !Ed(td)))
          }
          return (0, Wd.j)((0, qd.fb)(Rd, !1))
        }(dd, Od, md, Fd, hd) : (0, Wd.j)((0, qd.P)(Kd, hd, function(dd, Od, md, Fd, Rd) {
          const [Xd, Kd] = qd.g[Rd - 1], hd = (Rd, Xd) => function(dd, Od, md) {
            var Fd;
            const Rd = null === (Fd = Wd.i[dd]) || void 0 === Fd ? void 0 : Fd.meta;
            if (!Rd) return !1;
            const Xd = Rd.rootName,
              Kd = pd.has(Xd) || Ed(dd);
            if (!Kd && !Yd.has(Xd) && Xd !== yd) return !1;
            const [hd, vd] = qd.g[Rd.rot - 1];
            if (Kd && hd === -Od && vd === -md) return !0;
            if (Yd.has(Xd)) return hd === Od && vd === md;
            const Qd = Wd.i[dd].name;
            return (Xd === yd ? (0, qd.db)(Qd, hd, vd) : Xd === bd ? [(0, qd.T)(Qd, hd, vd)] : []).some((dd => {
              let [Wd, Fd] = dd;
              return Wd === -Od && Fd === -md
            }))
          }(dd(Od + Rd, md, Fd + Xd), Rd, Xd), vd = dd(Od - Xd, md, Fd - Kd), Qd = wd(vd) === yd && Wd.i[vd].meta.rot === Rd, td = 1 === qd.d[wd(dd(Od, md - 1, Fd))] || -1 === qd.d[wd(dd(Od, md + 1, Fd))];
          if (td || Qd || hd(-Xd, -Kd)) return null;
          const od = hd(-Kd, Xd),
            Nd = hd(Kd, -Xd);
          if (od === Nd) return null;
          return od ? "turnLeft" : "turnRight"
        }(dd, Od, md, Fd, hd)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = xd, this.rootId = (0, Wd.j)(Ud.g)
      }
      handles(dd) {
        var Od;
        return (null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta.rootId) === this.rootId
      }
      affects(dd) {
        return this.handles(dd)
      }
      shape(dd, Od, md, Fd, Rd, Xd) {
        const Kd = Bd(Rd);
        return (0, Wd.j)((hd = Kd.rot, null !== (vd = Xd ? this.reshapedHalf(dd, Od, md, Fd, Kd) : this.placedHalf(dd, Od, md, Fd, Kd.rot)) ? (0, Ud.b)(Ud.g, hd, vd) : 1 === hd ? Ud.g : `${Ud.g}|meta|rot${hd}`));
        var hd, vd
      }
      placedHalf(dd, Od, md, Wd, Fd) {
        const [Rd, Xd] = Jd.e[Fd];
        for (const [Kd, hd] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const vd = Od + hd * Rd,
            Qd = Wd + hd * Xd,
            td = Sd(dd, vd, md, Qd);
          if (null !== td && td.rot === Fd && (null === td.half || !sd(dd, vd, md, Qd, td))) return Kd
        }
        return null
      }
      reshapedHalf(dd, Od, md, Wd, Fd) {
        if (null !== Fd.half && sd(dd, Od, md, Wd, Fd)) return Fd.half;
        for (const Rd of ["right", "left"]) {
          const [Xd, Kd] = (0, Ud.e)(Fd.rot, Rd), hd = Sd(dd, Od + Xd, md, Wd + Kd);
          if (null !== hd && hd.rot === Fd.rot && hd.half === Ud.h[Rd]) return Rd
        }
        return null
      }
    }, new ud.e];

    function Ad(dd, Od, md, Wd, Fd) {
      let Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Xd of Vd)
        if (Xd.handles(Fd)) return Xd.shape(dd, Od, md, Wd, Fd, Rd);
      return Fd
    }

    function rd(dd) {
      for (const Wd of Vd) {
        var Od, md;
        if (Wd.handles(dd)) return null !== (Od = null === (md = Wd.placedBy) || void 0 === md ? void 0 : md.call(Wd, dd)) && void 0 !== Od ? Od : null
      }
      return null
    }
  },
  39955: (dd, Od, md) => {
    md.d(Od, {
      e: () => Ud,
      h: () => Yd,
      l: () => pd
    });
    var Wd = md(5733),
      Fd = md(5752),
      Rd = md(5813),
      Xd = md(39958),
      Kd = md(5804);
    const hd = (0, Xd.K)("pipe"),
      vd = (0, Xd.K)("tank"),
      Qd = (0, Xd.K)("port"),
      td = "Reactor Port";

    function od(dd, Od, md) {
      const Wd = new Set([Rd.h, Rd.d, td, ...Od, ...md, ...dd ? [Xd.m] : []]);
      return {
        makers: new Set(Od),
        roots: Wd
      }
    }
    const Nd = {
        water: od(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Xd.b]),
        cryo: od(!1, [Xd.b], [])
      },
      qd = new Set([...Nd.water.roots, ...Nd.cryo.roots]),
      Hd = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      yd = Fd.c.map((dd => Hd[dd])),
      bd = yd.map((dd => {
        let [Od, md, Wd] = dd;
        return Xd.x.findIndex((dd => {
          let [Fd, Rd, Xd] = dd;
          return Fd === Od && Rd === md && Xd === Wd
        }))
      }));

    function Td(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const md = Wd.i[dd],
        Fd = null === md || void 0 === md ? void 0 : md.meta.rootName,
        od = Nd[Od];
      if (!Fd || !od.roots.has(Fd)) return null;
      if ((0, Rd.n)(Fd)) return (0, Xd.G)(md.name) === Od ? hd : null;
      if (Fd === Xd.m) return vd;
      if (Fd === td) return md.name.endsWith("|Water") ? Qd : null;
      const [qd, Hd] = Kd.g[(md.meta.rot || 1) - 1];
      return (0, Xd.K)(od.makers.has(Fd) ? "maker" : "user", [-qd, 0, -Hd])
    }

    function pd(dd, Od, md, Fd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Kd
      } = Nd[Rd];
      return yd.some(((vd, Qd) => {
        var td, od;
        let [Nd, qd, Hd] = vd;
        const yd = dd(Od + Nd, md + qd, Fd + Hd),
          pd = Td(yd, Rd);
        return null !== pd && Kd.has(null !== (td = null === (od = Wd.i[yd]) || void 0 === od ? void 0 : od.meta.rootName) && void 0 !== td ? td : "") && !(0, Xd.L)(hd, pd, bd[Qd])
      }))
    }

    function Yd(dd) {
      const Od = Wd.i[dd];
      return Od ? (0, Xd.G)(Od.name) : null
    }
    let gd = null;

    function wd(dd) {
      if (!gd) {
        gd = new Map;
        for (const dd of ["water", "cryo"])
          for (let Od = 0; Od < 64; Od++)
            for (const md of [!1, !0]) gd.set((0, Rd.o)(dd, Od, md), {
              LN: dd,
              mask: Od,
              full: md
            })
      }
      return gd.get(dd)
    }
    const Ed = new Map(Array.from({
      length: Rd.k + 1
    }, ((dd, Od) => [(0, Rd.s)(Od), Od])));

    function Jd(dd, Od, md, Fd, Rd, Xd) {
      return yd.some(((Kd, hd) => {
        var vd, Qd, td;
        let [od, Nd, qd] = Kd;
        if (0 === (Xd >> hd & 1)) return !1;
        const Hd = null !== (vd = null === (Qd = Wd.i[dd(Od + od, md + Nd, Fd + qd)]) || void 0 === Qd ? void 0 : Qd.name) && void 0 !== vd ? vd : "",
          yd = wd(Hd);
        return yd ? yd.LN === Rd && yd.full : (null !== (td = function(dd) {
          var Od;
          return null !== (Od = Ed.get(dd)) && void 0 !== Od ? Od : null
        }(Hd)) && void 0 !== td ? td : 0) > 0
      }))
    }
    class Ud {
      constructor() {
        this.reshapeOffsets = yd
      }
      handles(dd) {
        return null !== Yd(dd)
      }
      affects(dd) {
        var Od, md;
        return qd.has(null !== (Od = null === (md = Wd.i[dd]) || void 0 === md ? void 0 : md.meta.rootName) && void 0 !== Od ? Od : "")
      }
      placedBy(dd) {
        var Od;
        return (null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta.rootName) === Rd.d ? Rd.h : null
      }
      shape(dd, Od, md, Fd, Kd, vd) {
        var Qd, td, od;
        const Nd = null !== (Qd = null === (td = Wd.i[Kd]) || void 0 === td ? void 0 : td.name) && void 0 !== Qd ? Qd : "",
          qd = vd || Nd !== Rd.h ? null !== (od = (0, Xd.G)(Nd)) && void 0 !== od ? od : "water" : function(dd, Od, md, Wd) {
            return yd.some(((Fd, Rd) => {
              let [Kd, vd, Qd] = Fd;
              const td = Td(dd(Od + Kd, md + vd, Wd + Qd), "cryo");
              return null !== td && "port" !== td.kind && (0, Xd.L)(hd, td, bd[Rd])
            })) ? "cryo" : "water"
          }(dd, Od, md, Fd),
          Hd = function(dd, Od, md, Wd) {
            let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Rd = 0;
            return yd.forEach(((Kd, vd) => {
              let [Qd, td, od] = Kd;
              const Nd = Td(dd(Od + Qd, md + td, Wd + od), Fd);
              Nd && (0, Xd.L)(hd, Nd, bd[vd]) && (Rd |= 1 << vd)
            })), Rd
          }(dd, Od, md, Fd, qd),
          pd = vd ? function(dd) {
            var Od;
            return !0 === (null === (Od = wd(dd)) || void 0 === Od ? void 0 : Od.full)
          }(Nd) : Jd(dd, Od, md, Fd, qd, Hd);
        return (0, Wd.j)((0, Rd.o)(qd, Hd, pd))
      }
    }
  },
  38448: (dd, Od, md) => {
    function Wd(dd, Od) {
      return null === dd || null === Od ? dd === Od : dd[0] === Od[0] && dd[1] === Od[1] && dd[2] === Od[2]
    }

    function Fd(dd) {
      return [dd[0] + .5, dd[1] + .5, dd[2] + .5]
    }
    md.d(Od, {
      d: () => Fd,
      f: () => Wd
    })
  },
  39716: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      f: () => Rd
    });
    const Wd = ["Chest", "Loot Chest", "Moonstone Chest"],
      Fd = [{
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

    function Rd(dd) {
      return Fd.find((Od => Od.exactMatch ? dd === Od.name : dd.includes(Od.name)))
    }
  },
  38474: (dd, Od, md) => {
    function Wd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Fd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !Wd(dd)
    }

    function Rd(dd) {
      return dd.includes(" Strongbed")
    }

    function Xd(dd) {
      return Wd(dd) || Fd(dd) || Rd(dd)
    }
    md.d(Od, {
      e: () => Xd,
      f: () => Wd,
      j: () => Rd,
      l: () => Fd
    })
  },
  38469: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(38474),
      Fd = md(5733);
    const Rd = [],
      Xd = [],
      Kd = [],
      hd = [];
    for (const Qd of Object.keys(Fd.k))(0, Wd.f)(Qd) ? Rd.push(Qd) : (0, Wd.l)(Qd) && Xd.push(Qd), (0, Wd.j)(Qd) && Kd.push(Qd), (Qd.includes(" Bed Head") || Qd.includes(" Strongbed Head")) && hd.push(Qd);
    const vd = {
      leafBeds: Rd,
      woolBeds: Xd,
      strongBeds: Kd,
      beds: [...Rd, ...Xd, ...Kd],
      bedHeads: hd,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  40112: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);