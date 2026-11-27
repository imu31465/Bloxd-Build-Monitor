export const id = 26;
export const ids = [26];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  38361: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Tr,
      e: () => yr,
      h: () => Br,
      i: () => Ur
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(72),
      jr = Qr(92),
      Ir = Qr(1497),
      fr = Qr(1576),
      Er = Qr(1489),
      pr = Qr(1330),
      xr = Qr(1251),
      mr = Qr(38363),
      Nr = Qr(1338);

    function Ur(rr) {
      const [Sr, Qr] = (0, ar.useState)((() => (0, mr.m)(rr)));
      return (0, ar.useEffect)((() => (Qr((0, mr.m)(rr)), (0, mr.I)((() => {
        Qr((0, mr.m)(rr))
      })))), [rr]), Sr
    }

    function tr(rr, Sr) {
      "function" === typeof rr ? rr(Sr) : rr && (rr.current = Sr)
    }

    function hr(rr) {
      let {
        tutorial: Sr,
        step: Qr,
        enabled: Zr = !0
      } = rr;
      const Wr = Ur(Sr);
      return Zr && Wr === Qr
    }

    function zr(rr, Sr) {
      const Qr = (0, mr.o)(rr),
        Zr = Qr.indexOf(Sr);
      return !Qr.slice(Zr + 1).some((Sr => (0, mr.y)(rr, Sr)))
    }

    function Yr(rr, Sr, Qr, Zr) {
      let {
        tutorial: Wr,
        step: ar,
        waitForClick: jr = !1,
        onPrevious: Ir
      } = rr;
      const fr = Sr && (0, mr.u)(Wr, ar),
        Er = Sr && !zr(Wr, ar),
        xr = jr ? Zr : Qr;
      let Nr = null;
      fr ? Nr = () => {
        null === Ir || void 0 === Ir || Ir(), (0, mr.s)(Wr, ar)
      } : Er && (Nr = () => {
        (0, mr.l)(Wr)
      }), (0, pr.u)("popup", null !== xr && void 0 !== xr ? xr : Qr, Nr, Sr && null !== xr, null, fr ? void 0 : "controller:menusSkipTutorial")
    }

    function nr(rr) {
      let {
        tutorial: Sr,
        step: Qr,
        text: Zr,
        waitForClick: Wr = !1,
        onPrevious: ar
      } = rr;
      const {
        t: jr
      } = (0, xr.E)(), Ir = zr(Sr, Qr);
      return (0, Nr.jsxs)(Nr.Fragment, {
        children: [(0, Nr.jsx)("div", {
          className: "TutorialStepText",
          children: Zr
        }), (0, Nr.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, mr.u)(Sr, Qr) && (0, Nr.jsx)(fr.k, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ar || void 0 === ar || ar(), (0, mr.s)(Sr, Qr)
            },
            children: jr("tutorial:back")
          }), !Wr && (0, Nr.jsx)(fr.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, mr.i)(Qr)
            },
            padDefaultFocus: !0,
            children: jr(Ir ? "tutorial:done" : "tutorial:next")
          }), !Ir && (0, Nr.jsx)(fr.k, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, mr.l)(Sr)
            },
            children: jr("tutorial:skip")
          })]
        })]
      })
    }
    const er = 6;

    function Kr(rr) {
      let {
        rect: Sr,
        margin: Qr
      } = rr;
      const Zr = Math.max(0, Sr.top - Qr),
        Wr = Sr.bottom + Qr,
        ar = Math.max(0, Sr.left - Qr),
        jr = Sr.right + Qr;
      return (0, Nr.jsxs)(Nr.Fragment, {
        children: [(0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Zr
          }
        }), (0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wr,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Zr,
            left: 0,
            width: ar,
            height: Wr - Zr
          }
        }), (0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Zr,
            left: jr,
            right: 0,
            height: Wr - Zr
          }
        })]
      })
    }

    function yr(rr) {
      let {
        target: Sr,
        placement: Qr,
        boxRef: Zr,
        className: fr,
        spotlight: pr = !0,
        spotlightMargin: xr = er,
        children: mr
      } = rr;
      const {
        getArrowProps: Ur,
        getTooltipProps: tr,
        setTooltipRef: hr,
        setTriggerRef: zr,
        update: Yr
      } = (0, Ir.d)({
        placement: Qr,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, xr]
      });
      (0, ar.useLayoutEffect)((() => {
        zr(Sr)
      }), [Sr, zr]);
      const nr = function(rr, Sr) {
        const [Qr, Zr] = (0, ar.useState)(null);
        return (0, ar.useEffect)((() => {
          if (!Sr || !rr) return void Zr(null);
          let Qr = 0,
            Wr = null;
          const ar = () => {
            const Sr = rr.getBoundingClientRect();
            Wr && Sr.left === Wr.left && Sr.top === Wr.top && Sr.width === Wr.width && Sr.height === Wr.height || (Wr = Sr, Zr(Sr)), Qr = requestAnimationFrame(ar)
          };
          return ar(), () => {
            cancelAnimationFrame(Qr)
          }
        }), [rr, Sr]), Qr
      }(Sr, pr);
      (0, ar.useEffect)((() => {
        null === Yr || void 0 === Yr || Yr()
      }), [nr, Yr]), (0, ar.useEffect)((() => {
        if (pr || !Sr || !Yr) return;
        const rr = new ResizeObserver((() => {
          Yr()
        }));
        return rr.observe(Sr), Sr.parentElement && rr.observe(Sr.parentElement), () => {
          rr.disconnect()
        }
      }), [Sr, pr, Yr]), (0, ar.useEffect)((() => {
        pr && (null === Sr || void 0 === Sr || Sr.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [Sr, pr]);
      const yr = (0, ar.useCallback)((rr => {
        hr(rr), Zr && (Zr.current = rr)
      }), [hr, Zr]);
      return (0, jr.createPortal)((0, Nr.jsxs)(Nr.Fragment, {
        children: [nr && (0, Nr.jsx)(Kr, {
          rect: nr,
          margin: xr
        }), (0, Nr.jsxs)("div", {
          ref: yr,
          ...tr({
            className: Wr()("tooltip-container SmallTextLight TutorialStep", fr)
          }),
          children: [mr, (0, Nr.jsx)("div", {
            ...Ur({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Er.h)())
    }
    const Br = (0, ar.forwardRef)((function(rr, Sr) {
      let {
        placement: Qr = "right",
        children: Zr,
        ...Wr
      } = rr;
      const jr = hr(Wr),
        Ir = (0, ar.useRef)(null),
        fr = (0, ar.useRef)(null);
      Yr(Wr, jr, Ir, fr);
      const [Er, pr] = (0, ar.useState)(null), xr = Zr.ref, mr = (0, ar.useCallback)((rr => {
        fr.current = rr, pr(rr), tr(Sr, rr), tr(xr, rr)
      }), [Sr, xr]);
      return (0, Nr.jsxs)(Nr.Fragment, {
        children: [(0, ar.cloneElement)(Zr, {
          ref: mr
        }), jr && (0, Nr.jsx)(yr, {
          target: Er,
          placement: Qr,
          boxRef: Ir,
          children: (0, Nr.jsx)(nr, {
            ...Wr
          })
        })]
      })
    }));

    function Tr(rr) {
      const Sr = hr(rr),
        Qr = (0, ar.useRef)(null);
      return Yr(rr, Sr, Qr, null), Sr ? (0, jr.createPortal)((0, Nr.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Nr.jsx)("div", {
          ref: Qr,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Nr.jsx)(nr, {
            ...rr
          })
        })
      }), (0, Er.h)()) : null
    }
  },
  38214: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      d: () => fr,
      e: () => Er,
      h: () => pr,
      l: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(4302),
      ar = Qr(3515),
      jr = Qr(34);
    const Ir = 8,
      fr = "InGameHeaderContainer",
      Er = "TopRightElements";

    function pr(rr) {
      const [Sr] = (0, Wr.e)(), [Qr, ar] = (0, Zr.useState)(!1);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Sr = document.querySelector(`.${fr}`),
          Qr = document.querySelector(`.${Er}`),
          Zr = () => {
            const Zr = rr.getBoundingClientRect(),
              Wr = Sr ? Sr.getBoundingClientRect().right : 0,
              jr = Qr ? Qr.getBoundingClientRect().left : window.innerWidth,
              fr = Zr.left < Wr + Ir,
              Er = Zr.right > jr - Ir;
            ar(fr || Er)
          };
        Zr();
        const Wr = new ResizeObserver(Zr);
        return Wr.observe(rr), Sr && Wr.observe(Sr), Qr && Wr.observe(Qr), () => {
          Wr.disconnect()
        }
      }), [rr, Sr]), Qr
    }
    const xr = `.InGameUi .${fr}`,
      mr = [xr, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nr = 1e3;

    function Ur(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr,
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Wr, fr] = (0, Zr.useState)(null);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Zr = new ResizeObserver((() => {
          Er()
        }));
        Zr.observe(rr), Sr && Sr !== rr && Zr.observe(Sr);
        let Wr = [];

        function Er() {
          var ar, jr, Er;
          const pr = rr.getBoundingClientRect(),
            Nr = function() {
              const rr = mr.map((rr => document.querySelector(rr))).filter((rr => null !== rr));
              for (const Sr of rr) Wr.includes(Sr) || Zr.observe(Sr);
              for (const Sr of Wr) rr.includes(Sr) || Zr.unobserve(Sr);
              return Wr = rr, rr
            }(),
            Ur = Nr.filter((rr => {
              const Sr = rr.getBoundingClientRect();
              return Sr.width > 0 && Sr.height > 0 && pr.left < Sr.right + Ir && pr.right > Sr.left - Ir
            }));
          if (0 === Ur.length && !Qr) return void fr(null);
          const tr = Nr.find((rr => rr.matches(xr))),
            hr = Math.max(null !== (ar = null === tr || void 0 === tr ? void 0 : tr.getBoundingClientRect().bottom) && void 0 !== ar ? ar : 0, ...Ur.map((rr => rr.getBoundingClientRect().bottom))),
            zr = null !== (jr = null === Sr || void 0 === Sr || null === (Er = Sr.offsetParent) || void 0 === Er ? void 0 : Er.getBoundingClientRect().top) && void 0 !== jr ? jr : 0;
          fr(Math.ceil(hr + Ir / 2) - Math.round(zr))
        }
        const pr = setInterval(Er, Nr);
        Er(), window.addEventListener("resize", Er);
        const Ur = (0, jr.j)(ar.g, Er);
        return () => {
          Zr.disconnect(), clearInterval(pr), window.removeEventListener("resize", Er), Ur()
        }
      }), [rr, Sr, Qr]), Wr
    }
  },
  39562: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er,
      f: () => Zr,
      i: () => Ir,
      k: () => Wr,
      m: () => jr,
      o: () => ar
    });
    const Zr = 1.001,
      Wr = .501,
      ar = .025,
      jr = .75,
      Ir = .08,
      fr = 4;

    function Er() {
      const rr = Wr,
        Sr = ar,
        Qr = rr - Sr / 2,
        Zr = (2 * rr - 2 * Sr) / (2 * fr - 1),
        jr = [];
      for (const Wr of [-Qr, Qr])
        for (const ar of [-Qr, Qr])
          for (let Qr = 0; Qr < fr; Qr++) {
            const Ir = -rr + Sr + Zr * (2 * Qr + .5);
            jr.push([Zr, Sr, Sr, Ir, Wr, ar]), jr.push([Sr, Zr, Sr, Wr, Ir, ar]), jr.push([Sr, Sr, Zr, Wr, ar, Ir])
          }
      for (const Wr of [-Qr, Qr])
        for (const rr of [-Qr, Qr])
          for (const Zr of [-Qr, Qr]) jr.push([Sr, Sr, Sr, Wr, rr, Zr]);
      return jr
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  40035: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Ir,
      i: () => fr
    });
    const Zr = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Wr = [0, 1, 2, 0, 2, 3],
      ar = [4, 5];

    function jr(rr, Sr, Qr, Zr, Wr) {
      for (let jr = 0; jr < 6; jr++) ar.includes(jr) === Wr && Er(rr, Sr, Qr, Zr, jr)
    }

    function Ir(rr, Sr, Qr, Zr) {
      for (let Wr = 0; Wr < 6; Wr++) Er(rr, Sr, Qr, Zr, Wr)
    }

    function fr(rr, Sr, Qr, ar, jr) {
      for (let Ir = 0; Ir < 6; Ir++)
        for (const fr of [0, 1]) {
          const [Er, pr, xr] = [fr + 2, fr + 1, (fr + 3) % 4], mr = rr.length / 3;
          for (const [Sr, Wr] of [
              [fr, pr],
              [Er, pr],
              [Er, xr],
              [fr, xr]
            ])
            for (let fr = 0; fr < 3; fr++) {
              const Er = Zr[3 * (4 * Ir + Sr) + fr],
                pr = Zr[3 * (4 * Ir + Wr) + fr];
              rr.push((Er + (pr - Er) * jr) * ar / 2 + Qr[fr])
            }
          for (const rr of Wr) Sr.push(mr + rr)
        }
    }

    function Er(rr, Sr, Qr, ar, jr) {
      let [Ir, fr, Er] = Qr, [pr, xr, mr] = ar;
      const Nr = rr.length / 3;
      for (let Wr = 4 * jr; Wr < 4 * jr + 4; Wr++) rr.push(Zr[3 * Wr] * pr / 2 + Ir, Zr[3 * Wr + 1] * xr / 2 + fr, Zr[3 * Wr + 2] * mr / 2 + Er);
      for (const Zr of Wr) Sr.push(Nr + Zr)
    }
  },
  41145: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => fr,
      i: () => jr,
      m: () => Er,
      p: () => pr
    });
    var Zr = Qr(41149),
      Wr = Qr(40035);
    const ar = .35,
      jr = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Ir = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      fr = [.95, .2, .15];
    class Er {
      constructor() {
        this.groups = []
      }
      add(rr, Sr, Qr, Wr, ar) {
        let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Zr.d;
        for (const Zr of this.groups)
          if (mr(Zr, Wr, ar)) return Zr.cells.push(rr, Sr, Qr), void Zr.boxes.push(jr);
        this.groups.push({
          rgb: Wr,
          look: ar,
          cells: [rr, Sr, Qr],
          boxes: [jr]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class pr {
      constructor(rr) {
        this.api = rr, this.shown = []
      }
      show(rr) {
        const Sr = [];
        for (const Qr of rr) {
          const rr = this.shown.findIndex((rr => {
            let {
              group: Sr
            } = rr;
            return mr(Sr, Qr.rgb, Qr.look) && Nr(Sr, Qr)
          })); - 1 === rr ? Sr.push(this.build(Qr)) : (Sr.push(this.shown[rr]), this.shown.splice(rr, 1))
        }
        this.dispose(), this.shown = Sr
      }
      dispose() {
        for (const {
            meshes: rr
          }
          of this.shown)
          for (const Sr of rr) this.api.disposeGameMesh(Sr);
        this.shown = []
      }
      build(rr) {
        const {
          rgb: Sr,
          look: Qr,
          boxes: Zr
        } = rr, jr = [Sr[0] + (1 - Sr[0]) * ar, Sr[1] + (1 - Sr[1]) * ar, Sr[2] + (1 - Sr[2]) * ar], Ir = [this.buildMesh(rr.cells, Sr, Qr.alpha, ((rr, Sr, Wr, ar) => {
          xr(rr, Sr, Wr, Zr[ar], Qr.size, !1)
        })), this.buildMesh(rr.cells, jr, Qr.alpha, ((rr, Sr, Wr, ar) => {
          xr(rr, Sr, Wr, Zr[ar], Qr.size, !0)
        }))];
        return Qr.crossed && Ir.push(this.buildMesh(rr.cells, Sr, .9, ((rr, Sr, Zr) => {
          (0, Wr.i)(rr, Sr, Zr, Qr.size + .01, .12)
        }))), {
          group: rr,
          meshes: Ir
        }
      }
      buildMesh(rr, Sr, Qr, Zr) {
        const Wr = [rr[0], rr[1], rr[2]],
          ar = [],
          jr = [];
        for (let Ir = 0; Ir < rr.length; Ir += 3) Zr(ar, jr, [rr[Ir] - Wr[0] + .5, rr[Ir + 1] - Wr[1] + .5, rr[Ir + 2] - Wr[2] + .5], Ir / 3);
        return this.api.createGameMesh({
          positions: ar,
          indices: jr
        }, {
          rgb: [Sr[0], Sr[1], Sr[2]],
          alpha: Qr
        }, Wr)
      }
    }

    function xr(rr, Sr, Qr, Zr, ar, jr) {
      for (let Ir = 0; Ir < Zr.length; Ir += 6) {
        const fr = [0, 0, 0],
          Er = [0, 0, 0];
        for (let rr = 0; rr < 3; rr++) fr[rr] = Qr[rr] + ((Zr[Ir + rr] + Zr[Ir + rr + 3]) / 2 - .5) * ar, Er[rr] = (Zr[Ir + rr + 3] - Zr[Ir + rr]) * ar;
        (0, Wr.c)(rr, Sr, fr, Er, jr)
      }
    }

    function mr(rr, Sr, Qr) {
      return rr.rgb[0] === Sr[0] && rr.rgb[1] === Sr[1] && rr.rgb[2] === Sr[2] && rr.look === Qr
    }

    function Nr(rr, Sr) {
      if (rr.cells.length !== Sr.cells.length) return !1;
      for (let Qr = 0; Qr < rr.cells.length; Qr++)
        if (rr.cells[Qr] !== Sr.cells[Qr]) return !1;
      return rr.boxes.every(((rr, Qr) => rr === Sr.boxes[Qr]))
    }
  },
  41151: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => xZ
    });
    const Zr = [0, 90, 180, 270],
      Wr = "plotsblueprint";
    var ar = Qr(72),
      jr = Qr(3425),
      Ir = Qr(26),
      fr = Qr(1573),
      Er = Qr(2135),
      pr = Qr(1251),
      xr = Qr(1155),
      mr = Qr.n(xr),
      Nr = Qr(1758),
      Ur = Qr(41159),
      tr = Qr(38154),
      hr = Qr(1448),
      zr = Qr(2075),
      Yr = Qr(2132),
      nr = Qr(4650),
      er = Qr(1885);

    function Kr() {}
    const yr = (0, ar.createContext)({
      hint: null,
      journalRef: Kr,
      placementCardRef: Kr,
      buildRef: Kr
    });
    var Br = Qr(34);
    const Tr = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      vr = {
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
      Or = ["small", "medium", "large"].flatMap((rr => Tr.flat().filter((Sr => vr[Sr].tier === rr))));

    function Lr(rr) {
      return vr[rr]
    }
    const lr = new Map(Tr.flatMap((rr => rr.slice(1).map(((Sr, Qr) => [Sr, rr[Qr]])))));

    function Xr(rr) {
      var Sr;
      return null !== (Sr = lr.get(rr)) && void 0 !== Sr ? Sr : null
    }
    const Pr = {
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

    function Hr(rr, Sr) {
      const Qr = new Set(rr),
        Zr = function(rr) {
          const Sr = new Set(rr);
          return new Set(Or.filter((rr => {
            const Qr = Xr(rr);
            return null === Qr || Sr.has(Qr)
          })))
        }(Qr);
      return Or.map((rr => {
        const Wr = rr === Sr;
        if (Qr.has(rr)) return {
          id: rr,
          active: Wr,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const ar = Pr[rr],
          jr = void 0 === ar || ar.firstBuild && Qr.size > 0 ? null : ar.key;
        return Zr.has(rr) ? {
          id: rr,
          active: Wr,
          note: jr,
          state: "open",
          unlockedBy: null
        } : {
          id: rr,
          active: Wr,
          note: jr,
          state: "locked",
          unlockedBy: Xr(rr)
        }
      }))
    }
    const qr = "plotsJournalChanged";
    class Rr {
      constructor(rr, Sr) {
        this.api = rr, this.placement = Sr, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.jx(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = rr => {
          this.placement.start(rr), (0, jr.j)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Wr} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      vx(rr) {
        let [, Sr, Qr] = rr;
        this.pages = Hr(Sr, Qr), Br.i.Jp(qr, this.pages, !0)
      }
      openFromServer(rr) {
        let [, Sr] = rr;
        this.openRequested = Sr, this.lx()
      }
      lx() {
        const rr = this.openRequested;
        null === rr || Ir.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, Nr.l)() || (0, er.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = rr, (0, jr.y)()))
      }
      jx(rr) {
        this.reported.has(rr) || (this.reported.add(rr), this.api.sendCommand(`${Wr} report ${rr}`))
      }
    }
    var gr = Qr(1338);
    const Cr = "KeyJ";

    function Mr(rr) {
      let {
        journal: Sr
      } = rr;
      const Qr = (0, fr.g)(qr, Sr.getPages()),
        {
          isTouchScreen: Zr
        } = (0, Ir.n)(["isTouchScreen"]),
        {
          t: Wr
        } = (0, pr.E)(),
        Er = (0, ar.useContext)(yr),
        xr = null !== Qr;
      return (0, ar.useEffect)((() => xr ? (0, Ur.c)(Cr) : void 0), [xr]), (0, nr.d)((rr => xr && rr.code === Cr && !rr.repeat && !(0, er.isTypingInInput)()), (rr => {
        (0, Nr.y)(rr, !0, jr.y)
      })), null === Qr ? null : (0, gr.jsx)(tr.d, {
        placement: "topRight",
        children: (0, gr.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, gr.jsxs)("button", {
            ref: Er.journalRef,
            type: "button",
            className: mr()("PlotsJournalButton SmallTextBold", {
              Touch: Zr
            }),
            onClick: jr.y,
            children: [(0, gr.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, gr.jsx)(zr.d, {
                itemName: "Book",
                amount: 0
              })
            }), Wr("plotsGame:journalButton"), !Zr && (0, gr.jsx)(Yr.c, {
              className: "PlotsJournalButtonKey",
              keyCode: Cr
            }), "openJournal" === Er.hint && (0, gr.jsx)(hr.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var Gr = Qr(5779);
    const kr = [0, 90, 180, 270],
      Ar = /^(meta\|rot\d)\|([lrud]+)$/,
      Vr = "nesw",
      ir = /^meta\|([nesw]*)\|?(Stacked)?$/,
      wr = function(rr) {
        const Sr = new WeakMap;
        return (Qr, Zr) => {
          let Wr = Sr.get(Qr);
          return void 0 === Wr && (Wr = rr(Qr, Zr), Sr.set(Qr, Wr)), Wr
        }
      }((rr => new cr(rr)));
    class cr {
      constructor(rr) {
        this.blockMetadata = rr, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Sr = new Set(Object.keys(rr).map((Sr => rr[Sr].id)));
        Sr.add(0), this.maxBlockId = Math.max(...Sr)
      }
      static
      for (rr) {
        return wr(rr)
      }
      getBlockIdMapping(rr, Sr) {
        const Qr = this.getBlockIdMappingKey(rr, Sr);
        let Zr = this.blockIdMappings.get(Qr);
        return void 0 === Zr && kr.includes(rr) && (Zr = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, rr, Sr), this.blockIdMappings.set(Qr, Zr)), Zr
      }
      turnBlockId(rr, Sr, Qr) {
        return this.mapBlockId(this.blockMetadata[rr], Sr, this.getRotationMapping(Sr, Qr), Qr)
      }
      getBlockIdMappingKey(rr, Sr) {
        return `r${rr}|m${Number(Sr)}`
      }
      createBlockIdMapping(rr, Sr, Qr, Zr) {
        const Wr = new Uint16Array(Sr + 1),
          ar = this.getRotationMapping(Qr, Zr);
        for (const jr in rr) {
          const Sr = rr[jr];
          Wr[Sr.id] = this.mapBlockId(Sr, Qr, ar, Zr)
        }
        return Wr
      }
      getRotationMapping(rr, Sr) {
        const Qr = Math.round(rr / 90),
          Zr = new Uint8Array(4);
        for (let Wr = 0; Wr < 4; Wr++) Zr[Wr] = (4 + Wr - Qr) % 4;
        if (Sr) {
          let rr = Zr[0];
          Zr[0] = Zr[1], Zr[1] = rr, rr = Zr[2], Zr[2] = Zr[3], Zr[3] = rr
        }
        return Zr
      }
      mapBlockId(rr, Sr, Qr, Zr) {
        var Wr;
        const {
          blockMetadata: ar
        } = this, jr = Math.round(Sr / 90), {
          id: Ir,
          meta: fr
        } = rr, {
          rot: Er,
          rootName: pr,
          metaStr: xr
        } = fr;
        let mr;
        const [, Nr, Ur] = null !== (Wr = ir.exec(xr)) && void 0 !== Wr ? Wr : [];
        if (void 0 !== Nr) {
          var tr, hr;
          mr = null !== (tr = null === (hr = ar[`${pr}|meta|${[Vr.split("").filter(((rr,Sr)=>Nr.split("").some((rr=>{const Qr=Vr.indexOf(rr);return((Zr?3-Qr:Qr)+jr)%4===Sr})))).join(""),Ur].filter(Boolean).join("|")}`]) || void 0 === hr ? void 0 : hr.id) && void 0 !== tr ? tr : Ir
        } else if (null === Er) mr = Ir;
        else {
          var zr, Yr;
          const rr = Qr[Er - 1] + 1;
          let Sr = xr.replace(`rot${Er}`, `rot${rr}`);
          Zr && fr.stairsCorner && (Sr = Sr.replace(/(Left|Right)$/, (rr => "Left" === rr ? "Right" : "Left"))), Zr && "Chest" === pr && (Sr = Sr.replace(/\|(left|right)$/, ((rr, Sr) => "left" === Sr ? "|right" : "|left")));
          const Wr = Ar.exec(Sr);
          if (Zr && null !== Wr) {
            const rr = "lrud".split("").filter((rr => Wr[2].includes("l" === rr ? "r" : "r" === rr ? "l" : rr)));
            Sr = `${Wr[1]}|${rr.join("")}`
          }
          const jr = `${pr}|${Sr}`;
          if (mr = null !== (zr = null === (Yr = ar[jr]) || void 0 === Yr ? void 0 : Yr.id) && void 0 !== zr ? zr : null, null === mr) {
            const rr = ar[pr];
            mr = rr.rootMetaDesc === jr ? rr.id : Ir
          }
        }
        return mr
      }
    }

    function Fr(rr, Sr, Qr) {
      let {
        xRotationMappedOrigin: Zr,
        shouldSwapXZ: Wr
      } = Qr;
      const ar = Wr ? Sr : rr;
      return null === Zr ? ar : Zr - ar
    }

    function or(rr, Sr, Qr) {
      let {
        zRotationMappedOrigin: Zr,
        shouldSwapXZ: Wr
      } = Qr;
      const ar = Wr ? rr : Sr;
      return null === Zr ? ar : Zr - ar
    }
    const br = {
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
      Jr = new Map;

    function Dr(rr, Sr) {
      const Qr = `${rr}|${Sr}`;
      let Zr = Jr.get(Qr);
      if (void 0 === Zr) {
        const {
          size: Wr,
          palette: ar,
          layers: jr
        } = br[rr], Ir = 90 === Sr || 270 === Sr, [fr, Er] = Ir ? [Wr[2], Wr[0]] : [Wr[0], Wr[2]], pr = function(rr, Sr, Qr) {
          let Zr = null,
            Wr = null,
            ar = !1;
          switch (rr) {
            case 0:
              break;
            case 90:
              Zr = Sr - 1, ar = !0;
              break;
            case 180:
              Zr = Sr - 1, Wr = Qr - 1;
              break;
            case 270:
              Wr = Qr - 1, ar = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${rr}`)
          }
          return {
            xRotationMappedOrigin: Zr,
            zRotationMappedOrigin: Wr,
            shouldSwapXZ: ar
          }
        }(Sr, fr, Er), xr = cr.for(Gr.j), mr = ar.map((rr => (0, Gr.g)(xr.turnBlockId((0, Gr.k)(rr), Sr, !1)))), Nr = [];
        jr.forEach(((rr, Sr) => {
          rr.split(" ").forEach(((rr, Qr) => {
            for (let Zr = 0; Zr < rr.length; Zr++)
              if ("." !== rr[Zr]) {
                const Wr = [Fr(Zr, Qr, pr), Sr, or(Zr, Qr, pr)];
                Nr.push({
                  offset: Wr,
                  block: mr[rr.charCodeAt(Zr) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Zr = {
          size: [fr, Wr[1], Er],
          cells: Nr
        }, Jr.set(Qr, Zr)
      }
      return Zr
    }
    const dr = "plotsBuildProgressChanged",
      sr = new Map;

    function ur(rr, Sr, Qr) {
      let Zr = 0,
        Wr = 0;
      return function(rr) {
        let Sr = sr.get(rr);
        if (void 0 === Sr) {
          const Zr = [];
          for (const {
              offset: Sr
            }
            of Dr(rr, 0).cells) {
            var Qr;
            Zr[Sr[1]] = (null !== (Qr = Zr[Sr[1]]) && void 0 !== Qr ? Qr : 0) + 1
          }
          Sr = Zr, sr.set(rr, Sr)
        }
        return Sr
      }(rr).forEach(((rr, Qr) => {
        Zr += rr, Qr > Sr && (Wr += rr)
      })), {
        id: rr,
        filled: Zr - Wr - Qr,
        total: Zr
      }
    }
    class rS {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(rr) {
        this.shown = rr, this.topOpen = 0, null === rr && this.Jp(null)
      }
      update(rr, Sr, Qr) {
        const Zr = this.shown;
        null !== Zr && (rr >= Sr && (this.topOpen = Qr), this.Jp(ur(Zr.id, Sr - Zr.y, rr >= Sr ? Qr : this.topOpen + Qr)))
      }
      Jp(rr) {
        const Sr = this.progress;
        (null === rr || void 0 === rr ? void 0 : rr.id) === (null === Sr || void 0 === Sr ? void 0 : Sr.id) && (null === rr || void 0 === rr ? void 0 : rr.filled) === (null === Sr || void 0 === Sr ? void 0 : Sr.filled) && (null === rr || void 0 === rr ? void 0 : rr.total) === (null === Sr || void 0 === Sr ? void 0 : Sr.total) || (this.progress = rr, Br.i.Jp(dr, rr, !0))
      }
    }
    const SS = "plotsPlotChanged",
      QS = "plotsGuideChanged",
      ZS = "plotsGuideDone";
    class WS {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(rr) {
        this.plot = rr, Br.i.Jp(SS, rr, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(rr) {
        this.guide = rr, Br.i.Jp(QS, rr, !0)
      }
      receiveGuideDone() {
        Br.i.Jp(ZS, void 0, !0)
      }
    }
    var aS = Qr(1330),
      jS = Qr(40079),
      IS = Qr(38361),
      fS = Qr(1597);

    function ES(rr) {
      let {
        onSkip: Sr,
        className: Qr
      } = rr;
      const {
        t: Zr
      } = (0, pr.E)();
      return (0, gr.jsx)("button", {
        type: "button",
        className: mr()("PlotsGuideSkipButton", Qr),
        ...(0, fS.g)(Sr, "pointerup"),
        children: Zr("tutorial:skip")
      })
    }

    function pS(rr) {
      let {
        target: Sr,
        placement: Qr,
        spotlight: Zr = null,
        children: Wr
      } = rr;
      const {
        t: jr
      } = (0, pr.E)(), Ir = (0, ar.useRef)(Sr);
      return Ir.current = Sr, (0, aS.u)("popup", Ir, null === Zr ? null : Zr.onSkip, null !== Zr, null, "controller:menusSkipTutorial"), (0, gr.jsxs)(IS.e, {
        target: Sr,
        placement: Qr,
        className: mr()("PlotsGuideBubble", {
          Passive: null === Zr
        }),
        spotlight: null !== Zr,
        spotlightMargin: 30,
        children: [(0, gr.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, gr.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: jS,
            alt: "",
            draggable: !1
          }), (0, gr.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: jr("plotsGame:maverickName")
          }), null !== Zr && (0, gr.jsx)(ES, {
            onSkip: Zr.onSkip
          })]
        }), (0, gr.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: Wr
        })]
      })
    }

    function xS(rr) {
      let {
        className: Sr,
        icon: Qr,
        title: Zr,
        children: Wr
      } = rr;
      return (0, gr.jsxs)("div", {
        className: mr()("PlotsCard", Sr),
        role: "status",
        children: [(0, gr.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, gr.jsx)(hr.c, {
            name: Qr
          })
        }), (0, gr.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, gr.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: Zr
          }), Wr]
        })]
      })
    }

    function mS(rr) {
      let {
        progress: Sr,
        goal: Qr
      } = rr;
      const Zr = Math.min(Sr, Qr);
      return (0, gr.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, gr.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Qr,
          "aria-valuenow": Zr,
          children: (0, gr.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Zr/Qr})`
            }
          })
        }), (0, gr.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Zr, "/", Qr]
        })]
      })
    }

    function NS(rr) {
      let {
        progress: Sr,
        guide: Qr
      } = rr;
      const {
        t: Zr
      } = (0, pr.E)(), {
        isTouchScreen: Wr
      } = (0, Ir.n)(["isTouchScreen"]), ar = Sr.filled < 5;
      return (0, gr.jsxs)(gr.Fragment, {
        children: [(ar || Sr.total - Sr.filled <= 5) && (0, gr.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, gr.jsx)("div", {
            ref: Qr.bindHand,
            className: "PlotsGuideHand",
            children: (0, gr.jsx)(hr.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, gr.jsx)(tr.d, {
          placement: "bottom",
          children: (0, gr.jsxs)(xS, {
            icon: "hammer",
            title: Zr(Lr(Sr.id).displayName.translationKey),
            children: [ar && (0, gr.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: Wr ? Zr("plotsGame:guideBuildTouch") : US(Zr)
            }), (0, gr.jsx)(mS, {
              progress: Sr.filled,
              goal: Sr.total
            })]
          })
        })]
      })
    }

    function US(rr) {
      const Sr = Er.q["alt-fire"][0];
      return "Mouse3" === Sr ? rr("plotsGame:guideBuildRightClick") : rr("plotsGame:guideBuildKeys", {
        key: (0, Er.j)(Sr)
      })
    }

    function tS() {
      return (0, gr.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, gr.jsx)(hr.c, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var hS = Qr(1353),
      zS = Qr(3640),
      YS = Qr(39907),
      nS = Qr(39679),
      eS = Qr(38390),
      KS = Qr(5817),
      yS = Qr(5833),
      BS = Qr(379),
      TS = Qr(39311);
    const vS = new Map([
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
      OS = [...eS.c.blockRemoveActionRoots, ...nS.e, ...KS.l, "Board", "Code Block", "Custom Lobby Block"],
      LS = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let lS = null;

    function XS() {
      return lS ??= function() {
        const rr = PS(),
          Sr = Math.max(...rr.map((rr => Gr.j[rr].id))) + 1,
          Qr = new Int32Array(Sr),
          Zr = new Int32Array(Sr),
          Wr = new Uint8Array(Sr).fill(1),
          ar = new Uint8Array(Sr),
          jr = new Uint8Array(Sr),
          Ir = new Array(Sr).fill("Air"),
          fr = new Map,
          Er = rr => {
            let Sr = fr.get(rr);
            return void 0 === Sr && (Sr = fr.size + 1, fr.set(rr, Sr)), Sr
          },
          pr = new Set(OS);
        for (const mr of rr) {
          var xr;
          const {
            id: rr,
            meta: Sr,
            altActionable: fr,
            canBePlacedOver: Nr
          } = Gr.j[mr];
          Qr[rr] = Er(HS(mr));
          const Ur = Sr.stairsCorner;
          if (null === Ur) Zr[rr] = Qr[rr];
          else {
            const Qr = Ur.endsWith("Right");
            Zr[rr] = Er(`${Sr.rootName}|rot${Qr?Sr.rot%4+1:Sr.rot}|${Sr.halfblockPlacement}|${Ur.replace("Right","Left")}`)
          }
          Wr[rr] = Nr ? 1 : 0, ar[rr] = fr || null !== Sr.open || mr in TS.d || pr.has(Sr.rootName) || void 0 !== (0, nS.i)(Sr.rootName) ? 1 : 0;
          const {
            rootName: tr
          } = Sr;
          jr[rr] = null !== Sr.open || nS.e.includes(tr) || tr.includes("Bookshelf") || tr.includes("Mailbox") ? 1 : 0, Ir[rr] = null !== (xr = (0, YS.h)(rr)) && void 0 !== xr ? xr : tr
        }
        return {
          kinds: Qr,
          shapes: Zr,
          empty: Wr,
          inUse: ar,
          ownAltActionMessage: jr,
          placingItems: Ir
        }
      }(), lS
    }

    function PS() {
      return Object.keys(Gr.j).filter((rr => Gr.j[rr].name === rr))
    }

    function HS(rr) {
      var Sr;
      const Qr = Gr.j[rr],
        {
          rootName: Zr,
          rot: Wr
        } = Qr.meta,
        [, ...ar] = (null !== (Sr = Qr.rootMetaDesc) && void 0 !== Sr ? Sr : rr).split("|"),
        jr = ar.filter((rr => !("meta" === rr || LS.test(rr) || (0, yS.B)(Qr) && /^[nesw]+$/.test(rr) || KS.l.includes(Zr) && /^[lrud]+$/.test(rr) || BS.I.includes(Zr) && /^(left|right)$/.test(rr))));
      return [Zr, ...jr].map((rr => "fenceGate" === Qr.model && rr === `rot${Wr}` ? "rot" + ((Wr - 1) % 2 + 1) : rr)).join("|")
    }

    function qS(rr, Sr) {
      const {
        kinds: Qr,
        shapes: Zr
      } = XS();
      return Qr[rr] === Qr[Sr] || Zr[rr] === Zr[Sr]
    }

    function RS(rr) {
      return 1 === XS().empty[rr]
    }

    function gS(rr) {
      return XS().placingItems[rr]
    }

    function CS(rr) {
      return vS.get(Gr.j[rr].meta.rootName)
    }
    var MS = Qr(41149),
      GS = Qr(208);
    class kS {
      constructor(rr) {
        this.api = rr, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(rr) {
        const Sr = GS.i.hx;
        this.chunks = [];
        for (let Qr = 0; Qr < rr.length; Qr += 3) {
          const Zr = Math.floor(rr[Qr] / Sr),
            Wr = Math.floor(rr[Qr + 1] / Sr),
            ar = Math.floor(rr[Qr + 2] / Sr);
          this.watches(Zr, Wr, ar) || this.chunks.push(Zr, Wr, ar)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const rr = performance.now();
        if (rr - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = rr;
        let Sr = !1;
        for (let Qr = 0; Qr < this.chunks.length; Qr += 3) {
          const rr = this.api.getChunkVersion(this.chunks[Qr], this.chunks[Qr + 1], this.chunks[Qr + 2]);
          this.versions[Qr / 3] !== rr && (this.versions[Qr / 3] = rr, Sr = !0)
        }
        return Sr
      }
      watches(rr, Sr, Qr) {
        for (let Zr = 0; Zr < this.chunks.length; Zr += 3)
          if (this.chunks[Zr] === rr && this.chunks[Zr + 1] === Sr && this.chunks[Zr + 2] === Qr) return !0;
        return !1
      }
    }
    var AS = Qr(41145);

    function VS(rr, Sr, Qr, Zr, Wr) {
      if (!rr.isBlockInLoadedChunk(Sr, Zr - 6, Qr) || !rr.isBlockInLoadedChunk(Sr, Zr + 6 + Wr, Qr) || !rr.canModifyBlockAt(Sr, Zr, Qr)) return NaN;
      let ar = Zr - 1;
      if (0 !== rr.getBlockId(Sr, ar, Qr)) {
        for (; ar < Zr + 6 && 0 !== rr.getBlockId(Sr, ar + 1, Qr);) ar++;
        return ar
      }
      for (; ar > Zr - 6;)
        if (ar--, 0 !== rr.getBlockId(Sr, ar, Qr)) return ar;
      return NaN
    }

    function iS(rr, Sr, Qr, Zr, Wr) {
      let ar = 0;
      for (let jr = Zr + 1; jr <= Zr + Wr; jr++) 0 !== rr.getBlockId(Sr, jr, Qr) && ar++;
      return ar
    }

    function wS(rr) {
      const Sr = new Map;
      for (const jr of rr) {
        var Qr;
        if (Number.isNaN(jr)) return null;
        Sr.set(jr, (null !== (Qr = Sr.get(jr)) && void 0 !== Qr ? Qr : 0) + 1)
      }
      let Zr = NaN,
        Wr = 0;
      for (const [jr, Ir] of Sr)(Ir > Wr || Ir === Wr && jr < Zr) && (Zr = jr, Wr = Ir);
      let ar = 0;
      for (const jr of rr) ar += Math.abs(jr - Zr);
      return ar
    }

    function cS(rr, Sr, Qr, Zr) {
      const {
        eye: Wr,
        forward: ar,
        tanHalfFovX: jr,
        tanHalfFovY: Ir
      } = rr, [fr, Er] = function(rr) {
        let [Sr, Qr, Zr] = rr;
        const Wr = Math.hypot(Sr, Zr),
          [ar, jr] = [Zr / Wr, -Sr / Wr];
        return [
          [ar, 0, jr],
          [Qr * jr, Zr * ar - Sr * jr, -Qr * ar]
        ]
      }(ar), [pr, xr] = [Sr * jr, Qr * Ir], mr = ar[0] + pr * fr[0] + xr * Er[0], Nr = ar[1] + xr * Er[1], Ur = ar[2] + pr * fr[2] + xr * Er[2], tr = (Zr - Wr[1]) / Nr;
      return tr > 0 && tr < 1 / 0 ? [Wr[0] + tr * mr, Wr[2] + tr * Ur] : null
    }
    const FS = "plotsBlueprintPlacementChanged",
      oS = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class bS {
      constructor(rr, Sr) {
        this.api = rr, this.localPlayerId = Sr, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = rr => {
          var Sr, Qr, Zr, ar;
          const jr = null !== (Sr = null === (Qr = this.placing) || void 0 === Qr ? void 0 : Qr.rotation) && void 0 !== Sr ? Sr : 0,
            {
              size: Ir
            } = Dr(rr, jr),
            fr = this.api.JY(this.localPlayerId),
            [Er, pr] = null !== (Zr = null !== (ar = function(rr, Sr, Qr, Zr) {
              const [Wr, ar, jr] = Sr, [Ir, fr, Er] = [Math.floor(Qr[0]), Math.floor(Qr[1]), Math.floor(Qr[2])], pr = 6 + Math.max(Wr, jr) / 2, [xr, mr] = [Math.ceil(pr + Wr / 2), Math.ceil(pr + jr / 2)], [Nr, Ur] = [Ir - xr, Er - mr], [tr, hr] = [2 * xr + 1, 2 * mr + 1], zr = new Float64Array(tr * hr), Yr = new Uint16Array(tr * hr);
              for (let Br = 0; Br < tr; Br++)
                for (let Sr = 0; Sr < hr; Sr++) {
                  const Qr = VS(rr, Nr + Br, Ur + Sr, fr, ar);
                  zr[Br * hr + Sr] = Qr, Number.isNaN(Qr) || (Yr[Br * hr + Sr] = iS(rr, Nr + Br, Ur + Sr, Qr, ar))
                }
              const nr = Math.hypot(Zr[0], Zr[2]),
                er = [];
              let Kr = null,
                yr = 1 / 0;
              for (let Br = 0; Br + Wr <= tr; Br++)
                for (let rr = 0; rr + jr <= hr; rr++) {
                  const [Sr, ar] = [Nr + Br, Ur + rr], [fr, xr] = [Sr + Wr / 2 - Qr[0], ar + jr / 2 - Qr[2]], mr = Math.hypot(fr, xr);
                  if (mr > pr || Ir >= Sr - 2 && Ir < Sr + Wr + 2 && Er >= ar - 2 && Er < ar + jr + 2) continue;
                  er.length = 0;
                  let tr = 0;
                  for (let Qr = 0; Qr < Wr; Qr++)
                    for (let Sr = 0; Sr < jr; Sr++) er.push(zr[(Br + Qr) * hr + rr + Sr]), tr += Yr[(Br + Qr) * hr + rr + Sr];
                  const Tr = wS(er);
                  if (null === Tr) continue;
                  const vr = mr + 3 * (Tr + tr) + (1 - (0 === nr ? 1 : (fr * Zr[0] + xr * Zr[2]) / (mr * nr))) / 2 * 6;
                  vr < yr && (yr = vr, Kr = [Sr, ar])
                }
              return Kr
            }(this.api, Ir, fr, this.camera.forward)) && void 0 !== ar ? ar : this.cornerOnTarget(Ir)) && void 0 !== Zr ? Zr : [Math.floor(fr[0]) + 2, Math.floor(fr[2])];
          this.placing = {
            id: rr,
            rotation: jr,
            corner: [Er, this.playerLevel(), pr],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${Wr} preview`)
        }, this.rotate = () => {
          const {
            id: rr,
            rotation: Sr,
            corner: Qr
          } = this.placing, Wr = Zr[(Zr.indexOf(Sr) + 1) % Zr.length], [ar, , jr] = Dr(rr, Sr).size, [Ir, , fr] = Dr(rr, Wr).size;
          this.moveTo(Qr[0] + Math.floor(ar / 2) - Math.floor(Ir / 2), Qr[2] + Math.floor(jr / 2) - Math.floor(fr / 2), Wr)
        }, this.hoverAt = (rr, Sr) => {
          this.placing.hover = [rr, Sr], this.moveCentreTo(this.camera, rr, Sr)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (rr, Sr) => {
          const Qr = this.placing,
            {
              eye: Zr,
              forward: Wr,
              tanHalfFovX: ar,
              tanHalfFovY: jr
            } = this.camera,
            Ir = {
              eye: [Zr[0], Zr[1], Zr[2]],
              forward: [Wr[0], Wr[1], Wr[2]],
              tanHalfFovX: ar,
              tanHalfFovY: jr
            },
            fr = Qr.corner[1],
            Er = cS(Ir, rr, Sr, fr);
          Qr.hover = null, Qr.drag = Er && {
            view: Ir,
            ground: Er,
            corner: [Qr.corner[0], Qr.corner[2]],
            level: fr
          }
        }, this.dragTo = (rr, Sr) => {
          const Qr = this.placing.drag,
            Zr = Qr && cS(Qr.view, rr, Sr, Qr.level);
          null !== Qr && null !== Zr && this.moveTo(Qr.corner[0] + Math.round(Zr[0] - Qr.ground[0]), Qr.corner[1] + Math.round(Zr[1] - Qr.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const rr = this.view;
          rr.waiting || (rr.blocked ? this.Jp({
            ...rr,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const rr = this.placing,
            {
              id: Sr,
              rotation: Qr,
              corner: Zr
            } = rr;
          this.api.sendCommand(`${Wr} place ${Sr} ${Zr.join(" ")} ${Qr}`), rr.sent = {
            atMs: performance.now(),
            corner: [...Zr],
            rotation: Qr,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Wr} preview off`))
        }, this.chunkWatch = new kS(rr), this.meshes = new AS.p(rr)
      }
      getView() {
        return this.view
      }
      lx() {
        const rr = this.placing;
        null !== rr && (null !== rr.sent && !rr.sent.timedOut && performance.now() - rr.sent.atMs > 3e3 ? (rr.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(rr) || this.chunkWatch.changed() || this.view.settled !== JS(rr, this.view.blocked)) && this.update())
      }
      afterRender(rr) {
        ! function(rr, Sr) {
          for (let Qr = 0; Qr < 3; Qr++) Sr.eye[Qr] = rr.cameraPosition[Qr], Sr.forward[Qr] = rr.cameraDirection[Qr];
          Sr.tanHalfFovX = rr.tanHalfFovX, Sr.tanHalfFovY = rr.tanHalfFovY
        }(rr, this.camera);
        const Sr = this.placing;
        null !== Sr && null !== Sr.hover && this.moveCentreTo(this.camera, Sr.hover[0], Sr.hover[1])
      }
      vx(rr) {
        const Sr = this.placing;
        if (null === Sr || null === Sr.sent || "active" !== rr[0]) return;
        const {
          sent: Qr
        } = Sr, [, Zr, Wr, ar, jr, Ir, fr] = rr;
        Wr && Zr === Sr.id && fr === Qr.rotation && ar === Qr.corner[0] && jr === Qr.corner[1] && Ir === Qr.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(rr) {
        let [Sr, , Qr] = rr;
        const Zr = this.api.getTargetedBlock();
        if (null === Zr) return null;
        const [Wr, , ar] = Zr.position;
        return [Wr - Math.floor(Sr / 2), ar - Math.floor(Qr / 2)]
      }
      playerLevel() {
        var rr;
        const [Sr, Qr, Zr] = this.api.JY(this.localPlayerId);
        if (null !== (rr = this.api.getLocalPlayerMovement()) && void 0 !== rr && rr.onGround) return Math.ceil(Qr - .01);
        const [Wr, ar, jr] = [Math.floor(Sr), Math.floor(Qr), Math.floor(Zr)];
        for (let Ir = ar; Ir >= ar - 2; Ir--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Wr, Ir, jr))) return Ir + 1;
        return ar
      }
      followPlayerLevel(rr) {
        if (DS(rr)) return !1;
        const Sr = this.playerLevel();
        return Sr !== rr.corner[1] && (rr.corner[1] = Sr, !0)
      }
      moveCentreTo(rr, Sr, Qr) {
        const Zr = this.placing,
          Wr = cS(rr, Sr, Qr, Zr.corner[1]);
        if (null !== Wr) {
          const [rr, , Sr] = Dr(Zr.id, Zr.rotation).size;
          this.moveTo(Math.round(Wr[0] - rr / 2), Math.round(Wr[1] - Sr / 2))
        }
      }
      moveTo(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Zr = this.placing;
        if (DS(Zr)) return;
        const [Wr, ar, jr] = Zr.corner;
        if (this.centreOnPlot(Wr, jr) && !this.centreOnPlot(rr, Sr, Qr))
          if (this.centreOnPlot(rr, jr, Qr)) Sr = jr;
          else {
            if (!this.centreOnPlot(Wr, Sr, Qr)) return;
            rr = Wr
          } rr === Wr && Sr === jr && Qr === Zr.rotation || (Zr.rotation = Qr, Zr.corner = [rr, ar, Sr], Zr.moved = !0, Zr.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Zr,
          corner: Wr
        } = this.placing, [ar, , jr] = Dr(Zr, Qr).size;
        return this.api.canModifyBlockAt(rr + Math.floor(ar / 2), Wr[1], Sr + Math.floor(jr / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Jp(null)
      }
      update() {
        const {
          id: rr,
          rotation: Sr,
          corner: Qr,
          refusals: Zr
        } = this.placing, Wr = new AS.m, ar = [];
        let jr = !1,
          Ir = 0;
        for (const {
            offset: xr,
            block: mr
          }
          of Dr(rr, Sr).cells) {
          const [rr, Sr, Zr] = [Qr[0] + xr[0], Qr[1] + xr[1], Qr[2] + xr[2]];
          ar.push(rr, Sr, Zr);
          const fr = !this.api.canModifyBlockAt(rr, Sr, Zr),
            Er = this.api.getBlockId(rr, Sr, Zr),
            pr = !RS(Er) && !qS(this.api.blockNameToBlockId(mr), Er);
          jr ||= fr, Ir += pr ? 1 : 0, fr || pr ? Wr.add(rr, Sr, Zr, AS.e, AS.b) : Wr.add(rr, Sr, Zr, CS(mr), oS, (0, MS.f)(mr))
        }
        this.chunkWatch.watch(ar), this.meshes.show(Wr.toArray());
        const fr = this.view,
          Er = DS(this.placing),
          pr = JS(this.placing, jr);
        (null === fr || void 0 === fr ? void 0 : fr.id) === rr && fr.blocked === jr && fr.toClear === Ir && fr.waiting === Er && fr.refusals === Zr && fr.settled === pr || this.Jp({
          id: rr,
          blocked: jr,
          toClear: Ir,
          waiting: Er,
          refusals: Zr,
          settled: pr
        })
      }
      Jp(rr) {
        this.view = rr, Br.i.Jp(FS, rr, !0)
      }
    }

    function JS(rr, Sr) {
      let {
        moved: Qr,
        stillSinceMs: Zr
      } = rr;
      return !Sr && performance.now() - Zr >= (Qr ? 1500 : 6e3)
    }

    function DS(rr) {
      let {
        sent: Sr
      } = rr;
      return null !== Sr && !Sr.timedOut
    }
    var dS = Qr(5308);
    class sS {
      constructor(rr) {
        this.placement = rr, this.press = null
      }
      down(rr) {
        if (null !== this.press) return !1;
        const {
          id: Sr,
          mouse: Qr,
          x: Zr,
          y: Wr,
          atMs: ar
        } = rr;
        return this.press = {
          id: Sr,
          mouse: Qr,
          x: Zr,
          y: Wr,
          atMs: ar,
          moved: !1
        }, Qr || this.placement.beginDrag(rr.ndcX, rr.ndcY), !0
      }
      move(rr) {
        const Sr = this.press;
        null !== Sr && Sr.id === rr.id && (Sr.moved ||= Math.hypot(rr.x - Sr.x, rr.y - Sr.y) > 8), rr.mouse ? this.placement.hoverAt(rr.ndcX, rr.ndcY) : (null === Sr || void 0 === Sr ? void 0 : Sr.id) === rr.id && this.placement.dragTo(rr.ndcX, rr.ndcY)
      }
      up(rr) {
        const Sr = this.press;
        (null === Sr || void 0 === Sr ? void 0 : Sr.id) === rr.id && (this.move(rr), this.end(), !Sr.moved && (Sr.mouse || rr.atMs - Sr.atMs <= 250) && this.placement.tap())
      }
      cancel(rr) {
        var Sr;
        (null === (Sr = this.press) || void 0 === Sr ? void 0 : Sr.id) === rr && this.end()
      }
      leave(rr) {
        let {
          id: Sr,
          mouse: Qr
        } = rr;
        Qr && this.placement.endHover(), this.cancel(Sr)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const uS = "PlotsPlacementLayer";

    function rQ(rr) {
      let {
        placement: Sr
      } = rr;
      return null === (0, fr.g)(FS, Sr.getView()) ? null : (0, gr.jsx)(SQ, {
        placement: Sr
      })
    }

    function SQ(rr) {
      let {
        placement: Sr
      } = rr;
      (0, dS.b)(!0, !0, uS);
      const Qr = (0, ar.useMemo)((() => new sS(Sr)), [Sr]);
      return (0, gr.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: rr => {
          "mouse" === rr.pointerType && 0 !== rr.button || !Qr.down(QQ(rr)) || rr.currentTarget.setPointerCapture(rr.pointerId)
        },
        onPointerMove: rr => {
          Qr.move(QQ(rr))
        },
        onPointerUp: rr => {
          Qr.up(QQ(rr))
        },
        onPointerCancel: rr => {
          Qr.cancel(rr.pointerId)
        },
        onLostPointerCapture: rr => {
          Qr.cancel(rr.pointerId)
        },
        onPointerLeave: rr => {
          Qr.leave(QQ(rr))
        },
        "aria-hidden": !0
      })
    }

    function QQ(rr) {
      const {
        left: Sr,
        top: Qr,
        width: Zr,
        height: Wr
      } = rr.currentTarget.getBoundingClientRect();
      return {
        id: rr.pointerId,
        mouse: "mouse" === rr.pointerType,
        x: rr.clientX,
        y: rr.clientY,
        ndcX: (rr.clientX - Sr) / Zr * 2 - 1,
        ndcY: 1 - (rr.clientY - Qr) / Wr * 2,
        atMs: rr.timeStamp
      }
    }

    function ZQ() {
      return (0, hS.p)().some((rr => rr !== hS.e && rr !== uS))
    }
    const WQ = 2500;

    function aQ(rr) {
      let {
        hud: Sr,
        guide: Qr,
        tracker: Zr,
        placement: Wr,
        children: jr
      } = rr;
      const {
        t: xr
      } = (0, pr.E)(), {
        isTouchScreen: mr
      } = (0, Ir.n)(["isTouchScreen"]), Nr = (0, fr.g)(QS, Sr.getGuide()), Ur = (0, fr.g)(SS, Sr.getPlot()), tr = (0, fr.g)(dr, Zr.get()), hr = function(rr) {
        const {
          openInGameMenuName: Sr,
          openEverythingMenuName: Qr,
          loadingOverlayVisible: Zr
        } = (0, Ir.n)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), Wr = (0, zS.b)(), [jr, Er] = (0, ar.useState)(ZQ);
        (0, ar.useEffect)((() => {
          const rr = () => {
            Er(ZQ())
          };
          rr();
          const Sr = (0, hS.n)(rr),
            Qr = (0, hS.m)(rr);
          return () => {
            Sr(), Qr()
          }
        }), []);
        const pr = (0, fr.g)(FS, rr.getView()),
          xr = "clientGame" === Sr;
        return {
          hudHidden: Wr || Zr,
          journalOpen: xr,
          covered: jr || null !== Qr || null !== Sr && !xr,
          placing: null === pr ? null : pr.settled ? "placeBuild" : "placeSpot"
        }
      }(Wr), zr = function(rr, Sr, Qr) {
        return "none" === rr[0] || Qr.hudHidden || Qr.journalOpen || Qr.covered ? null : null !== Qr.placing ? Qr.placing : null !== Sr ? "build" : "choose" === rr[1] ? "openJournal" : null
      }(Nr, null === tr ? null : tr.id, hr), Yr = function() {
        const [rr, Sr] = (0, ar.useState)(null), [Qr, Zr] = (0, ar.useState)(!1);
        return (0, fr.c)(ZS, (() => {
          Sr(performance.now())
        })), (0, ar.useEffect)((() => {
          if (null === rr) return;
          const Sr = window.setTimeout((() => {
              Zr(!0)
            }), WQ),
            Qr = window.setTimeout((() => {
              Zr(!1)
            }), 7500);
          return () => {
            window.clearTimeout(Sr), window.clearTimeout(Qr)
          }
        }), [rr]), Qr
      }() && !hr.hudHidden && !hr.covered && !hr.journalOpen && null === hr.placing, [nr, er] = (0, ar.useState)(!1);
      (0, ar.useEffect)((() => {
        hr.journalOpen && er(!0)
      }), [hr.journalOpen]);
      const [Kr, Br] = (0, ar.useState)(null), [Tr, vr] = (0, ar.useState)(null), [Or, Lr] = (0, ar.useState)(null), lr = (0, ar.useMemo)((() => ({
        hint: zr,
        journalRef: Br,
        placementCardRef: vr,
        buildRef: Lr
      })), [zr]), Xr = "plot" === Ur[0] && "own" === Ur[5], Pr = mr && !nr && Xr ? {
        onSkip: Qr.skip
      } : null;
      return (0, gr.jsxs)(yr.Provider, {
        value: lr,
        children: [jr, "openJournal" === zr && null !== Kr && (0, gr.jsx)(pS, {
          target: Kr,
          placement: "left",
          spotlight: Pr,
          children: mr ? xr("plotsGame:guideOpenJournal") : xr("plotsGame:guideOpenJournalKeys", {
            key: (0, Er.j)(Cr)
          })
        }), "placeSpot" === zr && null !== Tr && (0, gr.jsxs)(gr.Fragment, {
          children: [mr && (0, gr.jsx)(tS, {}), (0, gr.jsx)(pS, {
            target: Tr,
            placement: "top",
            children: xr(mr ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === zr && null !== Or && null !== Tr && (0, gr.jsx)(pS, {
          target: mr ? Or : Tr,
          placement: "top",
          children: xr(mr ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === zr && null !== tr && (0, gr.jsx)(NS, {
          progress: tr,
          guide: Qr
        }), Yr && null !== Kr && (0, gr.jsx)(pS, {
          target: Kr,
          placement: "left",
          children: xr("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var jQ = Qr(40013),
      IQ = Qr(40020);
    class fQ {
      constructor(rr, Sr, Qr) {
        this.api = rr, this.localPlayerId = Sr, this.nextCell = Qr, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = rr => {
          this.hand = rr
        }
      }
      afterRender(rr) {
        const Sr = this.hand;
        if (null === Sr) return;
        const Qr = this.nextCell.get();
        if (null === Qr) return void(0, jQ.f)(Sr, !0);
        const Zr = (0, IQ.b)(Sr, rr, this.api.getPositionView(this.localPlayerId), Qr, 1, 40);
        null !== Zr && (0, jQ.e)(Sr, Math.round(100 * Zr.x) / 100, Math.round(100 * Zr.y) / 100)
      }
    }
    var EQ = Qr(1576),
      pQ = Qr(5297),
      xQ = Qr(1177);
    const mQ = {
        farm_hut: Qr.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: Qr.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: Qr.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: Qr.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: Qr.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: Qr.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: Qr.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: Qr.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: Qr.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: Qr.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: Qr.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: Qr.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      NQ = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      UQ = ["market_stand", "rusticHome_tent", "farm_hut"].map((rr => ({
        id: rr,
        blocks: Dr(rr, 0).cells.length
      }))).sort(((rr, Sr) => rr.blocks - Sr.blocks)).map(((rr, Sr) => ({
        ...rr,
        effortKey: NQ[Sr]
      })));

    function tQ(rr) {
      let {
        onBuild: Sr
      } = rr;
      const {
        t: Qr
      } = (0, pr.E)();
      return (0, gr.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, gr.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, gr.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: Qr("plotsGame:guidePickTitle")
          }), (0, gr.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, gr.jsx)("img", {
              src: jS,
              alt: "",
              draggable: !1
            }), Qr("plotsGame:guidePickNote")]
          }), (0, gr.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: UQ.map((rr => {
              let {
                id: Zr,
                blocks: Wr,
                effortKey: ar
              } = rr;
              return (0, gr.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, gr.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    Sr(Zr)
                  },
                  children: (0, gr.jsx)("img", {
                    src: mQ[Zr],
                    alt: "",
                    draggable: !1
                  })
                }), (0, gr.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, gr.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, gr.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: Qr(Lr(Zr).displayName.translationKey)
                    }), (0, gr.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: Qr(ar)
                    }), (0, gr.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: Qr("plotsGame:journalBlocks", {
                        blocks: String(Wr)
                      })
                    })]
                  }), (0, gr.jsx)(EQ.p, {
                    onClick: () => {
                      Sr(Zr)
                    },
                    children: Qr("plotsGame:placementBuild")
                  })]
                })]
              }, Zr)
            }))
          })]
        })
      })
    }

    function hQ(rr) {
      let {
        direction: Sr,
        disabled: Qr,
        onTurn: Zr
      } = rr;
      const {
        t: Wr
      } = (0, pr.E)();
      return (0, gr.jsx)("div", {
        className: mr()("PlotsJournalArrow", Sr),
        children: (0, gr.jsx)(EQ.h, {
          disabled: Qr,
          ariaLabel: Wr("Forward" === Sr ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Zr(Sr)
          },
          children: (0, gr.jsx)(hr.c, {
            name: "angle-up"
          })
        })
      })
    }
    const zQ = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function YQ(rr) {
      let {
        page: Sr,
        building: Qr,
        onBuild: Zr,
        onPutAway: Wr
      } = rr;
      const {
        t: ar
      } = (0, pr.E)(), {
        displayName: jr,
        tier: Ir
      } = Lr(Sr.id), fr = Dr(Sr.id, 0).cells.length, Er = "locked" === Sr.state, xr = Qr ? EQ.h : EQ.p;
      return (0, gr.jsxs)("article", {
        className: mr()("PlotsJournalPage", {
          Locked: Er
        }),
        children: [(0, gr.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: ar(jr.translationKey)
        }), (0, gr.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [ar(zQ[Ir]), " \xb7 ", ar("plotsGame:journalBlocks", {
            blocks: String(fr)
          })]
        }), (0, gr.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Or.map((rr => (0, gr.jsx)("img", {
            className: mr()({
              Shown: rr === Sr.id
            }),
            src: mQ[rr],
            alt: "",
            draggable: !1
          }, rr))), "completed" === Sr.state && (0, gr.jsx)("span", {
            className: "PlotsJournalStamp",
            children: ar("plotsGame:journalBuilt")
          }), Er && (0, gr.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, gr.jsx)(hr.c, {
              name: "lock"
            })
          })]
        }), null !== Sr.note && (0, gr.jsx)("p", {
          className: "PlotsJournalNote",
          children: ar(Sr.note)
        }), (0, gr.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Sr.state && (0, gr.jsx)("p", {
            className: "PlotsJournalHint",
            children: ar("plotsGame:journalLocked", {
              name: ar(Lr(Sr.unlockedBy).displayName.translationKey)
            })
          }), Sr.active && (0, gr.jsxs)(gr.Fragment, {
            children: [(0, gr.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: ar("plotsGame:journalBuilding")
            }), (0, gr.jsx)(EQ.k, {
              onClick: Wr,
              children: ar("plotsGame:journalPutAway")
            })]
          }), !Er && !Sr.active && (0, gr.jsx)(xr, {
            onClick: () => {
              Zr(Sr.id)
            },
            children: ar("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function nQ(rr) {
      let {
        className: Sr,
        page: Qr,
        hidden: Zr,
        building: Wr,
        journal: ar
      } = rr;
      return (0, gr.jsxs)("div", {
        ref: rr => {
          null !== rr && (rr.inert = Zr)
        },
        className: mr()("PlotsJournalSide", Sr),
        children: [void 0 !== Qr && (0, gr.jsx)(YQ, {
          page: Qr,
          building: Wr,
          onBuild: ar.build,
          onPutAway: ar.putAway
        }), void 0 === Qr && (0, gr.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var eQ = Qr(2049);

    function KQ(rr) {
      return Math.cos((0, eQ.k)(rr))
    }

    function yQ(rr) {
      return (0, eQ.B)(Math.acos(BS.b.clamp(rr, -1, 1)))
    }

    function BQ(rr, Sr, Qr, Zr, Wr) {
      const ar = Math.abs(Sr - rr),
        jr = (0, eQ.B)(Wr / (Qr * Math.abs(Math.sin((0, eQ.k)(rr))))),
        Ir = 450 * Math.min(1, ar / Zr),
        fr = jr > 0 ? 3 * ar / jr : 1 / 0;
      return Math.round(Math.max(120, Math.min(Ir, fr)))
    }
    class TQ {
      constructor() {
        this.samples = []
      }
      add(rr, Sr) {
        for (this.samples.push({
            x: rr,
            at: Sr
          }); Sr - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const rr = this.samples[0],
          Sr = this.samples[this.samples.length - 1];
        return Sr.at > rr.at ? (Sr.x - rr.x) / (Sr.at - rr.at) : 0
      }
    }

    function vQ(rr) {
      return yQ(new DOMMatrixReadOnly(getComputedStyle(rr).transform).m11)
    }

    function OQ(rr, Sr) {
      rr.style.transform = `rotateY(${-Sr}deg)`, rr.classList.add("Turning")
    }

    function LQ(rr, Sr, Qr) {
      const [Zr, Wr] = (0, ar.useState)(Qr), jr = (0, ar.useRef)(null), Ir = (0, ar.useRef)(null), fr = (0, ar.useRef)({
        Forward: null,
        Back: null
      }), Er = Sr ? 2 : 1, pr = Sr ? 180 : 90, xr = Zr - Zr % Er, mr = xr > 0, Nr = xr + Er < rr, Ur = (0, ar.useCallback)((() => {
        const rr = Ir.current;
        return null === rr ? xr : (Ir.current = null, rr.animation.cancel(), (Sr = fr.current[rr.direction]).style.transform = "", Sr.classList.remove("Turning"), null === rr.next ? xr : (Wr(rr.next), rr.next));
        var Sr
      }), [xr]), tr = (0, ar.useCallback)(((rr, Sr, Qr, Zr) => {
        const Wr = fr.current[rr],
          ar = vQ(Wr),
          jr = Sr === ("Forward" === rr) ? pr : 0;
        OQ(Wr, jr);
        const xr = Wr.animate([{
          transform: `rotateY(${-ar}deg)`
        }, {
          transform: `rotateY(${-jr}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : BQ(ar, jr, Wr.offsetWidth, pr, jr > ar ? -Qr : Qr),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Ir.current = {
          direction: rr,
          animation: xr,
          next: Sr ? Zr + ("Forward" === rr ? Er : -Er) : null
        }, xr.onfinish = () => {
          var rr;
          (null === (rr = Ir.current) || void 0 === rr ? void 0 : rr.animation) === xr && Ur()
        }
      }), [Er, pr, Ur]), hr = (0, ar.useCallback)((Sr => {
        if (null !== jr.current) return;
        const Qr = Ur();
        ("Forward" === Sr ? Qr + Er < rr : Qr > 0) && tr(Sr, !0, 0, Qr)
      }), [Ur, tr, Er, rr]);
      (0, ar.useEffect)((() => () => {
        var rr;
        null === (rr = Ir.current) || void 0 === rr || rr.animation.cancel()
      }), []), (0, ar.useEffect)((() => {
        const rr = rr => {
          var Sr;
          rr.pointerId !== (null === (Sr = jr.current) || void 0 === Sr ? void 0 : Sr.pointerId) || jr.current.following || (jr.current = null)
        };
        return window.addEventListener("pointerup", rr), () => {
          window.removeEventListener("pointerup", rr)
        }
      }), []);
      const zr = (rr, Sr, Qr) => {
          const Zr = function(rr, Sr, Qr, Zr) {
            return (rr < 0 ? Qr : Zr) ? BS.b.clampAbs(rr, Sr) : Math.sign(rr) * Sr * (1 - 1 / (.55 * Math.abs(rr) / Sr + 1))
          }(rr.base + Qr, Er * rr.width, Nr, mr);
          return "Forward" === Sr ? Math.min(Zr, 0) : Math.max(Zr, 0)
        },
        Yr = (rr, Sr) => {
          const Qr = jr.current;
          if (jr.current = null, null === Qr.direction) return;
          Qr.speed.add(rr, Sr);
          const Zr = Qr.speed.get(),
            Wr = zr(Qr, Qr.direction, rr - Qr.x);
          tr(Qr.direction, null !== function(rr, Sr, Qr, Zr, Wr) {
            if (Math.abs(Sr) >= .3 ? Math.sign(Sr) !== Math.sign(rr) : Math.abs(rr) < .5 * Qr) return null;
            const ar = rr < 0 ? "Forward" : "Back";
            return ("Forward" === ar ? Zr : Wr) ? ar : null
          }(Wr, Zr, Er * Qr.width, Nr, mr), Zr, xr)
        },
        nr = {
          onPointerDown: rr => {
            var Sr;
            if (!rr.isPrimary || 0 !== rr.button || null !== Ir.current && null !== rr.target.closest("button")) return;
            const Qr = new TQ;
            Qr.add(rr.clientX, rr.timeStamp);
            const Zr = fr.current.Forward.offsetWidth,
              Wr = Ir.current;
            Ir.current = null;
            let ar = 0;
            if (null !== Wr) {
              const Sr = fr.current[Wr.direction],
                Qr = vQ(Sr);
              Wr.animation.cancel(), OQ(Sr, Qr), ar = function(rr, Sr, Qr, Zr) {
                return (rr < 0 ? Qr : Zr) ? rr : Math.sign(rr) * Sr * (1 / (1 - Math.min(Math.abs(rr) / Sr, .99)) - 1) / .55
              }(function(rr, Sr, Qr, Zr) {
                return Qr * (KQ(Sr) - KQ("Forward" === rr ? 0 : Zr))
              }(Wr.direction, Qr, Zr, pr), Er * Zr, Nr, mr), rr.currentTarget.setPointerCapture(rr.pointerId)
            }
            jr.current = {
              pointerId: rr.pointerId,
              x: rr.clientX,
              y: rr.clientY,
              base: ar,
              width: Zr,
              following: null !== Wr,
              direction: null !== (Sr = null === Wr || void 0 === Wr ? void 0 : Wr.direction) && void 0 !== Sr ? Sr : null,
              speed: Qr
            }
          },
          onPointerMove: rr => {
            const Sr = jr.current;
            if (null === Sr || rr.pointerId !== Sr.pointerId) return;
            if (0 === rr.buttons) return void Yr(rr.clientX, rr.timeStamp);
            const Qr = rr.clientX - Sr.x;
            !Sr.following && function(rr, Sr) {
              return Math.abs(rr) > 8 && Math.abs(rr) > Math.abs(Sr)
            }(Qr, rr.clientY - Sr.y) && (Sr.following = !0, Sr.direction = Qr < 0 ? "Forward" : "Back", rr.currentTarget.setPointerCapture(rr.pointerId)), null !== Sr.direction && (Sr.speed.add(rr.clientX, rr.timeStamp), OQ(fr.current[Sr.direction], function(rr, Sr, Qr, Zr) {
              const Wr = Qr * KQ("Forward" === rr ? 0 : Zr) + Sr;
              return BS.b.clamp(yQ(Wr / Qr), 0, Zr)
            }(Sr.direction, zr(Sr, Sr.direction, Qr), Sr.width, pr)))
          },
          onPointerUp: rr => {
            var Sr;
            rr.pointerId === (null === (Sr = jr.current) || void 0 === Sr ? void 0 : Sr.pointerId) && Yr(rr.clientX, rr.timeStamp)
          },
          onPointerCancel: rr => {
            const Sr = jr.current;
            rr.pointerId === (null === Sr || void 0 === Sr ? void 0 : Sr.pointerId) && (jr.current = null, null !== Sr.direction && tr(Sr.direction, !1, 0, xr))
          }
        };
      return {
        first: xr,
        step: Er,
        canGoBack: mr,
        canGoForward: Nr,
        turnPage: hr,
        leaves: fr,
        pagesHandlers: nr
      }
    }

    function lQ(rr, Sr) {
      return rr > Sr && rr >= 600
    }

    function XQ(rr) {
      let {
        journal: Sr,
        hud: Qr,
        guide: Zr
      } = rr;
      const {
        t: Wr
      } = (0, pr.E)(), Ir = (0, fr.g)(qr, Sr.getPages()), Er = (0, fr.g)(QS, Qr.getGuide()), xr = Ir.find((rr => rr.active)), Nr = (Ur = Er, tr = void 0 === xr ? null : xr.id, "active" === Ur[0] && null === tr);
      var Ur, tr;
      const hr = (0, xQ.t)(lQ),
        {
          first: zr,
          step: Yr,
          canGoBack: Kr,
          canGoForward: yr,
          turnPage: Br,
          leaves: Tr,
          pagesHandlers: vr
        } = LQ(Ir.length, hr, (() => function(rr) {
          const Sr = rr.findIndex((rr => rr.active));
          return -1 !== Sr ? Sr : Math.max(0, rr.findIndex((rr => "open" === rr.state)))
        }(Ir)));
      (0, ar.useEffect)((() => {
        Sr.onOpened()
      }), [Sr]), (0, nr.d)((rr => !Nr && ("ArrowLeft" === rr.code || "ArrowRight" === rr.code) && !(0, er.isTypingInInput)()), (rr => {
        rr.stopPropagation(), Br("ArrowLeft" === rr.code ? "Back" : "Forward")
      }));
      const Or = void 0 !== xr,
        Lr = (rr, Qr, Zr) => (0, gr.jsx)(nQ, {
          className: rr,
          page: Qr >= 0 && Qr < Ir.length ? Ir[Qr] : void 0,
          hidden: Zr,
          building: Or,
          journal: Sr
        });
      return (0, gr.jsx)(pQ.b, {
        close: jr.m,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, gr.jsxs)("section", {
          className: mr()("PlotsJournal", {
            Spread: hr
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Wr("plotsGame:journalTitle"),
          children: [(0, gr.jsx)(EQ.l, {
            className: "PlotsJournalClose",
            onClick: jr.m
          }), "active" === Er[0] && (0, gr.jsx)(ES, {
            className: "PlotsJournalGuideSkip",
            onSkip: Zr.skip
          }), Nr && (0, gr.jsx)(tQ, {
            onBuild: Sr.build
          }), !Nr && (0, gr.jsx)(hQ, {
            direction: "Back",
            disabled: !Kr,
            onTurn: Br
          }), (0, gr.jsx)("div", {
            hidden: Nr,
            className: "PlotsJournalBookPages",
            ...vr,
            children: (0, gr.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [hr && Lr("Left", zr - 2, !0), Lr("Right", zr + 2 * Yr - 1, !0), (0, gr.jsxs)("div", {
                ref: rr => {
                  Tr.current.Back = rr
                },
                className: "PlotsJournalLeaf Back",
                children: [Lr("Recto", zr - 1, !0), hr && Lr("Verso", zr, !1)]
              }), (0, gr.jsxs)("div", {
                ref: rr => {
                  Tr.current.Forward = rr
                },
                className: "PlotsJournalLeaf Forward",
                children: [Lr("Recto", zr + Yr - 1, !1), hr && Lr("Verso", zr + Yr, !0)]
              })]
            })
          }), !Nr && (0, gr.jsx)(hQ, {
            direction: "Forward",
            disabled: !yr,
            onTurn: Br
          })]
        })
      })
    }

    function PQ(rr, Sr, Qr, Zr, Wr) {
      const ar = Math.hypot(...Sr.dir);
      if (!Number.isFinite(ar) || 0 === ar) return -1;
      const {
        from: jr,
        reach: Ir,
        solid: fr
      } = Sr, Er = [Sr.dir[0] / ar, Sr.dir[1] / ar, Sr.dir[2] / ar], pr = null === fr ? Ir : Math.min(Ir, function(rr, Sr, Qr) {
        const Zr = HQ(rr, Sr, Qr);
        if (Zr !== 1 / 0) return Zr;
        return (Qr[0] + .5 - rr[0]) * Sr[0] + (Qr[1] + .5 - rr[1]) * Sr[1] + (Qr[2] + .5 - rr[2]) * Sr[2]
      }(jr, Er, fr) + .75);
      let xr = -1,
        mr = 1 / 0,
        Nr = 1 / 0;
      for (let Ur = 0; Ur < rr.length; Ur += 4) {
        const Sr = [rr[Ur], rr[Ur + 1], rr[Ur + 2]],
          ar = Wr(Ur) ? Ir : pr;
        let fr = -1,
          tr = HQ(jr, Er, Sr);
        if (tr > ar) {
          const rr = [Sr[0] + .5 - jr[0], Sr[1] + .5 - jr[1], Sr[2] + .5 - jr[2]];
          if (tr = rr[0] * Er[0] + rr[1] * Er[1] + rr[2] * Er[2], tr <= 0 || tr > ar) continue;
          if (fr = Math.hypot(rr[0] - tr * Er[0], rr[1] - tr * Er[1], rr[2] - tr * Er[2]), fr > .7 || !Zr(Ur)) continue
        }(fr < mr || fr === mr && tr < Nr) && Qr(Ur) && (xr = Ur, mr = fr, Nr = tr)
      }
      return xr
    }

    function HQ(rr, Sr, Qr) {
      let Zr = 0,
        Wr = 1 / 0;
      for (let ar = 0; ar < 3; ar++) {
        const jr = Qr[ar] - rr[ar];
        if (0 === Sr[ar]) {
          if (jr > 0 || jr + 1 < 0) return 1 / 0;
          continue
        }
        const Ir = jr / Sr[ar],
          fr = (jr + 1) / Sr[ar];
        Zr = Math.max(Zr, Math.min(Ir, fr)), Wr = Math.min(Wr, Math.max(Ir, fr))
      }
      return Zr <= Wr ? Zr : 1 / 0
    }
    var qQ = Qr(38368),
      RQ = Qr(39562),
      gQ = Qr(40035);
    const CQ = [1, 1, 1];
    class MQ {
      constructor(rr) {
        this.api = rr, this.meshes = null, this.shown = null
      }
      show(rr) {
        if (!(0, qQ.h)(rr, this.shown))
          if (this.shown = null === rr ? null : [rr[0], rr[1], rr[2]], null !== this.meshes)
            for (const Sr of this.meshes) this.api.setGameMesh(Sr, null === rr ? {
              visible: !1
            } : {
              anchor: rr,
              visible: !0
            });
          else if (null !== rr) {
          const Sr = [RQ.f, RQ.f, RQ.f, 0, 0, 0];
          this.meshes = [this.build([Sr], RQ.i, rr), this.build((0, RQ.e)(), RQ.m, rr)]
        }
      }
      dispose() {
        for (const Sr of null !== (rr = this.meshes) && void 0 !== rr ? rr : []) {
          var rr;
          this.api.disposeGameMesh(Sr)
        }
        this.meshes = null, this.shown = null
      }
      build(rr, Sr, Qr) {
        const Zr = [],
          Wr = [];
        for (const [ar, jr, Ir, fr, Er, pr] of rr)(0, gQ.f)(Zr, Wr, [fr + .5, Er + .5, pr + .5], [ar, jr, Ir]);
        return this.api.createGameMesh({
          positions: Zr,
          indices: Wr
        }, {
          rgb: CQ,
          alpha: Sr,
          onTop: !0
        }, Qr)
      }
    }

    function GQ(rr, Sr) {
      const Qr = GS.i.Nz / 2;
      return rr[0] < Sr[0] + Qr && rr[0] + 1 > Sr[0] - Qr && rr[1] < Sr[1] + GS.i.Uz && rr[1] + 1 > Sr[1] && rr[2] < Sr[2] + Qr && rr[2] + 1 > Sr[2] - Qr
    }

    function kQ(rr, Sr) {
      return rr.getClientOption(Sr, "blockReach") + 1
    }
    class AQ {
      constructor(rr, Sr, Qr) {
        this.api = rr, this.localPlayerId = Sr, this.foreseen = Qr, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(rr) {
        this.cells = rr
      }
      playerMoved() {
        return VQ(this.api.getPositionView(this.localPlayerId)).some(((rr, Sr) => rr !== this.playerCells[Sr]))
      }
      eN(rr) {
        const Sr = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...VQ(Sr)), this.next = this.pickFrom(null === rr ? [Sr[0], Sr[1] + 1, Sr[2]] : (0, qQ.e)(rr), (() => !1)), this.next
      }
      pickFrom(rr, Sr) {
        const Qr = this.api.getPositionView(this.localPlayerId),
          Zr = [Qr[0], Qr[1] + GS.i.Uz * GS.i.playerEyeToHeightRatio, Qr[2]],
          Wr = kQ(this.api, this.localPlayerId),
          {
            cells: ar
          } = this,
          jr = rr => [ar[rr], ar[rr + 1], ar[rr + 2]],
          Ir = function(rr, Sr, Qr, Zr, Wr, ar) {
            let jr = -1,
              Ir = -1,
              fr = 1 / 0;
            for (let Er = 0; Er < rr.length; Er += Sr) {
              const Sr = (ar(Er) ? 2 : 0) + (Zr(Er) ? 1 : 0);
              if (Sr < Ir || Wr(Er)) continue;
              const pr = (rr[Er] + .5 - Qr[0]) ** 2 + (rr[Er + 1] + .5 - Qr[1]) ** 2 + (rr[Er + 2] + .5 - Qr[2]) ** 2;
              (Sr > Ir || pr < fr) && (jr = Er, Ir = Sr, fr = pr)
            }
            return jr
          }(ar, 4, rr, (rr => 1 === ar[rr + 3]), (rr => {
            const Zr = jr(rr);
            return GQ(Zr, Qr) || this.foreseen.has(Zr.join()) || Sr(Zr)
          }), (rr => function(rr, Sr, Qr) {
            return (Sr[0] + .5 - rr[0]) ** 2 + (Sr[1] + .5 - rr[1]) ** 2 + (Sr[2] + .5 - rr[2]) ** 2 <= Qr ** 2
          }(Zr, jr(rr), Wr)));
        return -1 === Ir ? null : jr(Ir)
      }
    }

    function VQ(rr) {
      let [Sr, Qr, Zr] = rr;
      const Wr = GS.i.Nz / 2;
      return [Math.floor(Sr), Math.floor(Qr), Math.floor(Zr), Math.floor(Sr - Wr), Math.floor(Sr + Wr), Math.floor(Qr + GS.i.Uz), Math.floor(Zr - Wr), Math.floor(Zr + Wr)]
    }
    class iQ {
      constructor(rr, Sr, Qr) {
        this.api = rr, this.localPlayerId = Sr, this.pickNext = Qr, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(rr) {
        const [Sr, , Qr] = rr.cameraDirection, Zr = Math.hypot(Sr, Qr);
        Zr > .001 && (this.heading = [Sr / Zr, Qr / Zr])
      }
      tapped(rr, Sr, Qr) {
        const Zr = kQ(this.api, this.localPlayerId),
          {
            origin: Wr,
            direction: ar
          } = this.api.getActionRay(),
          jr = [...Wr],
          Ir = [
            [jr, [jr[0] + ar[0] * Zr, jr[1] + ar[1] * Zr, jr[2] + ar[2] * Zr]]
          ];
        null !== rr && Ir.push([jr, (0, qQ.e)(rr)]), this.tap = {
          lines: Ir,
          next: Sr,
          ms: Qr
        }
      }
      filled(rr, Sr) {
        this.tap = null, this.turnFrom(rr, Sr), this.retry(Sr)
      }
      arrived(rr, Sr) {
        const {
          tap: Qr
        } = this;
        if (null === Qr || Sr - Qr.ms > 1500) return null;
        const Zr = (0, qQ.e)(rr);
        return (0, qQ.h)(Qr.next, rr) || Qr.lines.some((rr => {
          let [Sr, Qr] = rr;
          return function(rr, Sr, Qr) {
            const Zr = [Qr[0] - Sr[0], Qr[1] - Sr[1], Qr[2] - Sr[2]],
              Wr = [rr[0] - Sr[0], rr[1] - Sr[1], rr[2] - Sr[2]],
              ar = Zr[0] ** 2 + Zr[1] ** 2 + Zr[2] ** 2,
              jr = 0 === ar ? 0 : Math.min(1, Math.max(0, (Wr[0] * Zr[0] + Wr[1] * Zr[1] + Wr[2] * Zr[2]) / ar));
            return Math.hypot(Wr[0] - Zr[0] * jr, Wr[1] - Zr[1] * jr, Wr[2] - Zr[2] * jr)
          }(Zr, Sr, Qr) <= .9
        })) ? (this.tap = null, this.turnFrom(rr, Sr), Qr.ms) : null
      }
      turnFrom(rr, Sr) {
        this.pending = {
          from: rr,
          ms: Sr,
          turnMs: Math.max(50, Math.min(250, Sr - this.lastFillMs))
        }, this.lastFillMs = Sr
      }
      retry(rr) {
        const {
          pending: Sr
        } = this;
        if (null === Sr) return;
        if (rr - Sr.ms > 1500) return void(this.pending = null);
        const Qr = this.pickNext((0, qQ.e)(Sr.from), (rr => (0, qQ.h)(rr, Sr.from)));
        if (null === Qr) return;
        this.pending = null;
        const {
          turning: Zr
        } = this;
        if (null !== Zr && rr < Zr.endMs && (0, qQ.h)(Zr.to, Qr)) return;
        const Wr = this.api.getActionRay().origin,
          ar = [Qr[0] + .5 - Wr[0], Qr[1] + .5 - Wr[1], Qr[2] + .5 - Wr[2]],
          jr = Math.hypot(ar[0], ar[2]);
        if (jr < .3) {
          const rr = Math.max(jr, .001);
          ar[0] = this.heading[0] * rr, ar[2] = this.heading[1] * rr
        }
        this.api.turnCamera(ar, Sr.turnMs), this.turning = {
          to: Qr,
          endMs: rr + Sr.turnMs
        }
      }
    }
    class wQ {
      constructor(rr, Sr, Qr, Zr) {
        this.api = rr, this.localPlayerId = Sr, this.juice = Qr, this.tracker = Zr, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new kS(rr), this.meshes = new AS.p(rr), this.outline = new MQ(rr), this.nextCell = new AQ(rr, Sr, this.foreseen), this.turn = new iQ(rr, Sr, ((rr, Sr) => this.nextCell.pickFrom(rr, Sr)))
      }
      vx(rr) {
        const Sr = "active" === rr[0] ? `${rr[1]}|${rr[3]}|${rr[4]}|${rr[5]}|${rr[6]}` : "";
        if ("active" !== rr[0]) "built" === rr[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Qr, Zr, Wr, ar] = rr;
          Sr !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Qr) : Qr === this.layerY ? this.burstUnlisted(Zr) : Qr > this.layerY && this.finishLayer(Qr), this.layerY = Qr, this.layerCells.has(Qr) || this.layerCells.set(Qr, Zr.filter(cQ)), this.ghostCells = Zr, this.palette = Wr, this.occupiedCells = ar
        }
        Sr !== this.blueprint && (this.tracker.show("active" === rr[0] && rr[2] ? {
          id: rr[1],
          y: rr[4]
        } : null), this.blueprint = Sr, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((rr => this.api.blockNameToBlockId(rr))), this.chunkWatch.watch([...this.ghostCells.filter(cQ), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(rr) {
        this.burstUnlisted([]), rr > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = rr)
      }
      lx() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const rr = performance.now();
        let Sr = !1;
        for (const [Zr, Wr] of this.foreseen) {
          var Qr;
          if (rr - Wr > 1e3) this.foreseen.delete(Zr), Sr = !0, (null === (Qr = this.lastFilled) || void 0 === Qr ? void 0 : Qr.join()) === Zr && (this.lastFilled = this.lastSeenFilled)
        }(Sr || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(rr) {
        const Sr = new Set;
        for (let Wr = 0; Wr < rr.length; Wr += 4) Sr.add(`${rr[Wr]},${rr[Wr+1]},${rr[Wr+2]}`);
        const Qr = [],
          {
            ghostCells: Zr
          } = this;
        for (let Wr = 0; Wr < Zr.length; Wr += 4) {
          const rr = `${Zr[Wr]},${Zr[Wr+1]},${Zr[Wr+2]}`;
          !Sr.has(rr) && this.open.delete(rr) && Qr.push(this.filledCell(Wr))
        }
        this.burst(Qr)
      }
      refresh() {
        const {
          ghostCells: rr,
          palette: Sr,
          occupiedCells: Qr
        } = this, Zr = new AS.m, Wr = new Set, ar = [], jr = [];
        let Ir = 0;
        for (let fr = 0; fr < rr.length; fr += 4) {
          const [Qr, Er, pr, xr] = [rr[fr], rr[fr + 1], rr[fr + 2], rr[fr + 3]], mr = this.api.getBlockId(Qr, Er, pr), Nr = `${Qr},${Er},${pr}`, Ur = qS(this.blockIds[xr], mr);
          !Ur && RS(mr) ? Zr.add(Qr, Er, pr, CS(Sr[xr]), AS.i, (0, MS.f)(Sr[xr])) : Ur ? this.open.has(Nr) && ar.push(this.filledCell(fr)) : Zr.add(Qr, Er, pr, AS.e, AS.b), Ur || Ir++, !Ur && this.api.isBlockInLoadedChunk(Qr, Er, pr) && (Wr.add(Nr), jr.push(Qr, Er, pr, RS(mr) ? 0 : 1))
        }
        this.open = Wr, this.nextCell.setCells(jr), this.tracker.update(this.layerY, this.topLayerY, Ir);
        for (let fr = 0; fr < Qr.length; fr += 3) {
          const [rr, Sr, Wr] = [Qr[fr], Qr[fr + 1], Qr[fr + 2]];
          RS(this.api.getBlockId(rr, Sr, Wr)) || Zr.add(rr, Sr, Wr, AS.e, AS.b)
        }
        this.meshes.show(Zr.toArray()), this.burst(ar), this.showNext(), this.turn.retry(performance.now())
      }
      burst(rr) {
        const Sr = performance.now(),
          Qr = [];
        for (const [Wr, ar, jr] of rr) {
          const rr = [Wr, ar, jr];
          this.lastSeenFilled = rr, this.foreseen.delete(rr.join()) || Qr.push(rr)
        }
        const Zr = this.isHolding(Sr);
        for (const Wr of Qr) {
          if (this.lastFilled = Wr, Zr && this.pressFilled) {
            this.turn.filled(Wr, Sr);
            continue
          }
          const rr = this.turn.arrived(Wr, Sr);
          if (null !== rr) {
            this.pressFilled = Zr;
            for (const [Sr, Qr] of this.foreseen) Qr <= rr && this.foreseen.delete(Sr)
          }
        }
        this.juice.filled(rr)
      }
      showNext() {
        var rr;
        this.outline.show(null !== (rr = this.aimed) && void 0 !== rr ? rr : this.nextCell.eN(this.lastFilled))
      }
      afterRender(rr) {
        var Sr;
        this.turn.look(rr);
        const Qr = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Qr ? null : Qr.position), this.outline.show(null !== (Sr = this.aimed) && void 0 !== Sr ? Sr : this.nextCell.get())
      }
      isHolding(rr) {
        return null !== this.altMs && rr - this.altMs <= 500
      }
      attemptAltAction(rr) {
        const Sr = performance.now();
        if (this.isHolding(Sr) || (this.pressFilled = !1), this.altMs = Sr, this.pressFilled) return "preventPlacement";
        const Qr = this.findAimed(rr);
        if (null !== Qr) return this.foreseen.set(Qr.join(), Sr), this.lastFilled = Qr, this.aimed = null, this.showNext(), this.turn.filled(Qr, Sr), this.pressFilled = !0, "preventPlacement";
        {
          const Qr = this.nextCell.get();
          null !== Qr && this.turn.tapped(rr, Qr, Sr)
        }
      }
      holdPressOnEntity() {
        const rr = performance.now();
        this.pressFilled && this.isHolding(rr) && (this.altMs = rr)
      }
      findAimed(rr) {
        return function(rr, Sr, Qr, Zr, Wr, ar, jr) {
          const Ir = rr.XQr(Sr),
            fr = null === Ir || null === rr.blockNameToBlockId(Ir.name, !0) ? null : Ir.name,
            Er = rr.getPositionView(Sr),
            {
              origin: pr,
              direction: xr
            } = rr.getActionRay(),
            mr = PQ(Zr, {
              from: pr,
              dir: xr,
              reach: kQ(rr, Sr),
              solid: Qr
            }, (Sr => {
              const Qr = [Zr[Sr], Zr[Sr + 1], Zr[Sr + 2]];
              return !qS(Wr[Zr[Sr + 3]], rr.getBlockId(...Qr)) && !jr.has(Qr.join()) && rr.isBlockInLoadedChunk(...Qr) && !GQ(Qr, Er)
            }), (rr => null === fr || fr === gS(Wr[Zr[rr + 3]])), (rr => null !== ar && Zr[rr] === ar[0] && Zr[rr + 1] === ar[1] && Zr[rr + 2] === ar[2]));
          return -1 === mr ? null : [Zr[mr], Zr[mr + 1], Zr[mr + 2]]
        }(this.api, this.localPlayerId, rr, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(rr) {
        const {
          ghostCells: Sr
        } = this, [Qr, Zr, Wr] = CS(this.palette[Sr[rr + 3]]);
        return [Sr[rr], Sr[rr + 1], Sr[rr + 2], Qr, Zr, Wr]
      }
    }

    function cQ(rr, Sr) {
      return Sr % 4 !== 3
    }
    class FQ {
      constructor(rr) {
        this.api = rr, this.sent = !1
      }
      lx() {
        this.sent || Ir.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var oQ = Qr(2984),
      bQ = Qr(40721);

    function JQ(rr, Sr, Qr) {
      const Zr = [255 * rr, 255 * Sr, 255 * Qr],
        [Wr, ar, jr] = Zr.map((rr => rr + .4 * (255 - rr)));
      return {
        texture: "square_particle",
        sx: 48,
        minLifeTime: .3 / bQ.c,
        maxLifeTime: .55 / bQ.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * bQ.c * bQ.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Zr, 1],
          maxColor: [Wr, ar, jr, 1]
        }, {
          timeFraction: 1,
          minColor: [...Zr, 0],
          maxColor: [Wr, ar, jr, 0]
        }],
        blendMode: oQ.e.Standard
      }
    }
    const DQ = {
      texture: "glint",
      mipmaps: !1,
      sx: 96,
      minLifeTime: .5 / bQ.c,
      maxLifeTime: .9 / bQ.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * bQ.c * bQ.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: oQ.e.OneOne
    };
    class dQ {
      constructor(rr, Sr) {
        this.api = rr, this.localPlayerId = Sr, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(rr) {
        if (this.api.particlesEnabled())
          for (const [Sr, Qr, Zr, Wr, ar, jr] of rr.slice(0, 3)) {
            const rr = `${Wr},${ar},${jr}`;
            let Ir = this.chips.get(rr);
            void 0 === Ir && (Ir = this.api.createParticles(JQ(Wr, ar, jr), {
              pos: [Sr + .5, Qr + .5, Zr + .5]
            }), this.chips.set(rr, Ir));
            for (let Sr = 0; Sr < 8; Sr++) this.setPoint(Sr, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Ir.emitPoints([Sr + .5, Qr + .5, Zr + .5], this.points, 8)
          }
      }
      layerDone(rr) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Sr = rr.length / 3;
        if (0 === Sr || !this.api.particlesEnabled()) return;
        const Qr = Math.min(Sr, 48),
          [Zr, Wr, ar] = [rr[0] + .5, rr[1] + 1, rr[2] + .5];
        let jr = 0;
        for (let Ir = 0; Ir < Qr; Ir++) {
          const fr = 3 * Math.floor(Ir * Sr / Qr);
          for (let Sr = 0; Sr < 2; Sr++) this.setPoint(jr++, rr[fr] + Math.random() - Zr, rr[fr + 1] + 1 - Wr, rr[fr + 2] + Math.random() - ar, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(DQ, {
          pos: [Zr, Wr, ar]
        }), this.sparkles.emitPoints([Zr, Wr, ar], this.points, jr)
      }
      dispose() {
        var rr;
        for (const Sr of this.chips.values()) Sr.stop();
        this.chips.clear(), null === (rr = this.sparkles) || void 0 === rr || rr.stop(), this.sparkles = null
      }
      setPoint(rr, Sr, Qr, Zr, Wr) {
        const ar = 4 * rr;
        this.points[ar] = Sr, this.points[ar + 1] = Qr, this.points[ar + 2] = Zr, this.points[ar + 3] = Wr
      }
    }
    const sQ = "SpecialAction1",
      uQ = "KeyY",
      rZ = "KeyX";

    function SZ(rr) {
      let {
        placement: Sr
      } = rr;
      const Qr = (0, fr.g)(FS, Sr.getView()),
        {
          t: Zr
        } = (0, pr.E)(),
        {
          isTouchScreen: Wr
        } = (0, Ir.n)(["isTouchScreen"]),
        jr = (0, ar.useContext)(yr),
        xr = null !== Qr,
        Ur = xr && !Qr.blocked && !Qr.waiting;
      if ((0, nr.d)((rr => xr && !rr.repeat && !(0, er.isTypingInInput)() && !(0, Nr.l)() && !Wr), (rr => {
          const Qr = function(rr, Sr, Qr) {
            if (rr === rZ) return Sr.stop;
            if (rr === uQ) return Qr ? Sr.build : ZZ;
            return Er.q[sQ].includes(rr) ? Sr.rotate : null
          }(rr.code, Sr, Ur);
          null !== Qr && (rr.stopPropagation(), Qr())
        })), !xr) return null;
      let hr = Wr ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Qr.blocked ? hr = "plotsGame:placementOffPlot" : Qr.toClear > 0 ? hr = "plotsGame:placementClear" : "placeSpot" !== jr.hint && "placeBuild" !== jr.hint || (hr = null), (0, gr.jsx)(tr.d, {
        placement: "bottom",
        children: (0, gr.jsxs)("div", {
          ref: jr.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, gr.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Zr(Lr(Qr.id).displayName.translationKey)
          }), null !== hr && (0, gr.jsx)("div", {
            className: mr()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Qr.refusals > 0
            }),
            children: Zr(hr)
          }, Qr.refusals), (0, gr.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, gr.jsxs)(EQ.h, {
              onClick: Sr.rotate,
              children: [(0, gr.jsx)(QZ, {
                noaAction: sQ
              }), Zr("plotsGame:placementRotate")]
            }), (0, gr.jsxs)(EQ.L, {
              onClick: Sr.stop,
              children: [(0, gr.jsx)(QZ, {
                keyCode: rZ
              }), Zr("general:cancel")]
            }), (0, gr.jsx)("span", {
              ref: jr.buildRef,
              className: mr()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === jr.hint && Ur && Wr
              }),
              children: (0, gr.jsxs)(EQ.p, {
                disabled: !Ur,
                onClick: Sr.build,
                children: [(0, gr.jsx)(QZ, {
                  keyCode: uQ
                }), Zr("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function QZ(rr) {
      return (0, gr.jsx)(Yr.c, {
        className: "PlotsPlacementKey",
        ...rr
      })
    }

    function ZZ() {}
    var WZ = Qr(3320),
      aZ = Qr(38214),
      jZ = Qr(2128),
      IZ = Qr(1317);
    const fZ = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function EZ(rr) {
      let {
        hud: Sr
      } = rr;
      const Qr = (0, fr.g)(SS, Sr.getPlot()),
        [Zr, Wr] = (0, ar.useState)(null),
        jr = (0, aZ.h)(Zr);
      if ("none" === Qr[0]) return null;
      const [, Ir, Er, pr, xr, Nr] = Qr;
      return (0, gr.jsx)("div", {
        className: mr()("PlotsPlotBannerContainer", {
          Below: jr
        }),
        children: (0, gr.jsx)(pZ, {
          plotX: Ir,
          plotZ: Er,
          ownerName: pr,
          ownerId: xr,
          relation: Nr,
          plaqueRef: Wr
        }, `${Ir},${Er}`)
      })
    }

    function pZ(rr) {
      var Sr, Qr;
      let {
        plotX: Zr,
        plotZ: Wr,
        ownerName: ar,
        ownerId: jr,
        relation: Ir,
        plaqueRef: fr
      } = rr;
      const {
        t: Er
      } = (0, pr.E)(), xr = (0, jZ.j)("hiddenPlayerNames"), Nr = (0, jZ.j)("players"), Ur = null === jr ? null : null !== (Sr = null === (Qr = Nr.byId[jr]) || void 0 === Qr ? void 0 : Qr.cosmetics) && void 0 !== Sr ? Sr : null, tr = Er("plotsGame:plotBannerCoords", {
        x: Zr,
        z: Wr
      }), zr = "own" === Ir || null !== ar;
      return (0, gr.jsxs)("div", {
        ref: fr,
        className: mr()("PlotsPlotBanner", {
          Own: "own" === Ir,
          Shared: "shared" === Ir
        }),
        role: "status",
        children: [(0, gr.jsxs)("span", {
          className: mr()("PlotsPlotBannerSeal", {
            Face: null !== Ur
          }),
          children: [null !== Ur && (0, gr.jsx)(WZ.b, {
            cosmetics: Ur
          }), null === Ur && (0, gr.jsx)(hr.c, {
            name: fZ[Ir]
          })]
        }), (0, gr.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, gr.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Ir && Er("plotsGame:plotBannerYours"), "own" !== Ir && null !== ar && Er("plotsGame:plotBannerOwner", {
              name: (0, IZ.c)(ar, xr)
            }), !zr && tr]
          }), zr && (0, gr.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [tr, "shared" === Ir && (0, gr.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Er("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const xZ = function(rr, Sr, Qr, Zr) {
      let {
        localPlayerId: Wr
      } = Zr;
      const Ir = new WS;
      let fr = null,
        Er = null,
        pr = null,
        xr = null,
        mr = null,
        Nr = null;
      const Ur = [];
      return {
        onCreate: rr => {
          fr = new dQ(rr, Wr);
          const Sr = new rS;
          Er = new wQ(rr, Wr, fr, Sr), pr = new bS(rr, Wr), xr = new Rr(rr, pr), mr = new fQ(rr, Wr, Er.nextCell), Nr = new FQ(rr), Ur.push((0, jr.H)((0, ar.createElement)(aQ, {
            hud: Ir,
            guide: mr,
            tracker: Sr,
            placement: pr
          }, (0, ar.createElement)(EZ, {
            hud: Ir
          }), (0, ar.createElement)(Mr, {
            journal: xr
          }), (0, ar.createElement)(rQ, {
            placement: pr
          }), (0, ar.createElement)(SZ, {
            placement: pr
          })), {
            content: (0, ar.createElement)(XQ, {
              journal: xr,
              hud: Ir,
              guide: mr
            })
          }))
        },
        lx: () => {
          Nr.lx(), Er.lx(), pr.lx(), xr.lx()
        },
        onPlayerAttemptAltAction: (rr, Sr, Qr, Zr, Wr, ar) => {
          if (null !== ar) return void Er.holdPressOnEntity();
          const jr = void 0 === Sr ? null : [Sr, Qr, Zr];
          return Er.attemptAltAction(jr)
        },
        onPlayerClickUp: () => {
          Er.endPress()
        },
        onAfterRender: (rr, Sr) => {
          pr.afterRender(Sr), Er.afterRender(Sr), mr.afterRender(Sr)
        },
        onClose: () => {
          for (const rr of Ur) rr();
          fr.dispose(), Er.dispose(), pr.dispose(), fr = null, Er = null, pr = null, xr = null, mr = null, Nr = null
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          if ("plotsPlot" === rr) Ir.receivePlot(Sr);
          else if ("plotsBlueprint" === rr) {
            const rr = Sr;
            Er.vx(rr), pr.vx(rr)
          } else "plotsJournal" === rr ? xr.vx(Sr) : "plotsJournalOpen" === rr ? xr.openFromServer(Sr) : "plotsPreviewEnd" === rr ? pr.endFromServer() : "plotsGuide" === rr ? Ir.receiveGuide(Sr) : "plotsGuideDone" === rr && Ir.receiveGuideDone()
        }
      }
    }
  },
  40020: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir
    });
    var Zr = Qr(40013);
    const Wr = 5,
      ar = [0, 0, 0],
      jr = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ir(rr, Sr, Qr, Ir, fr, Er) {
      let [pr, xr, mr] = Ir;
      const Nr = (pr + .5 - Qr[0]) ** 2 + (xr - Qr[1]) ** 2 + (mr + .5 - Qr[2]) ** 2;
      let Ur = null;
      Nr <= Er ** 2 && (ar[0] = pr + .5, ar[1] = xr + fr, ar[2] = mr + .5, Ur = Sr.projectWorldPosToViewport(ar));
      const tr = null !== Ur && Ur.x > -Wr && Ur.x < 100 + Wr && Ur.y > -Wr && Ur.y < 100 + Wr;
      return (0, Zr.f)(rr, !tr), tr ? (jr.x = Ur.x, jr.y = Ur.y, jr.distSq = Nr, jr) : null
    }
  },
  40721: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr,
      d: () => ar
    });
    const Zr = 1 / .6,
      Wr = {
        kind: "smokePuff"
      };
    class ar {
      constructor(rr, Sr, Qr) {
        this.style = rr, this.sx = Sr, this.half = Qr, this.particles = null, this.lastFrame = -1
      }
      emit(rr, Sr, Qr) {
        let ar = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Qr !== this.lastFrame && (this.lastFrame = Qr, this.particles || (this.particles = rr.createParticles(function(rr, Sr) {
          const [
            [Qr, ar, jr],
            [Ir, fr, Er]
          ] = rr.colours;
          return {
            texture: rr.soft ? Wr : "square_particle",
            sx: Sr,
            minLifeTime: rr.life[0] / Zr,
            maxLifeTime: rr.life[1] / Zr,
            minEmitPower: rr.power[0] * Zr,
            maxEmitPower: rr.power[1] * Zr,
            minSize: rr.size[0],
            maxSize: rr.size[1],
            emitRate: 0,
            gravity: [0, rr.lift * Zr * Zr, 0],
            dir1: [-rr.spread, 1, -rr.spread],
            dir2: [rr.spread, 1, rr.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Qr, ar, jr, rr.alpha],
              maxColor: [Ir, fr, Er, rr.alpha]
            }, {
              timeFraction: 1,
              minColor: [Qr, ar, jr, 0],
              maxColor: [Ir, fr, Er, 0]
            }],
            blendMode: rr.blendMode
          }
        }(this.style, this.sx), {
          pos: Sr,
          half: this.half
        })), this.particles.moveTo(Sr, this.half), this.particles.emit(ar), !0)
      }
      dispose() {
        var rr;
        null === (rr = this.particles) || void 0 === rr || rr.stop(), this.particles = null
      }
    }
  },
  41159: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      d: () => Ir,
      h: () => fr
    });
    const Zr = new Map,
      Wr = [];

    function ar() {
      for (const rr of Wr) rr()
    }

    function jr(rr) {
      var Sr;
      return Zr.set(rr, (null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : 0) + 1), ar(), () => {
        const Sr = Zr.get(rr) - 1;
        0 === Sr ? Zr.delete(rr) : Zr.set(rr, Sr), ar()
      }
    }

    function Ir() {
      return [...Zr.keys()]
    }

    function fr(rr) {
      Wr.push(rr)
    }
  },
  38363: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => gr,
      F: () => Cr,
      G: () => Mr,
      H: () => Rr,
      I: () => Gr,
      e: () => fr,
      i: () => lr,
      j: () => Ir,
      l: () => qr,
      m: () => Or,
      o: () => yr,
      s: () => Hr,
      u: () => Pr,
      y: () => vr
    });
    var Zr = Qr(43);
    const Wr = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ar = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      jr = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Ir = ar.filter((rr => "docsButton" !== rr)),
      fr = jr.filter((rr => "aiHelperButton" !== rr)),
      Er = "codeEditorTutorials",
      pr = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      xr = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let mr = null,
      Nr = null;
    const Ur = new Set,
      tr = new Set;
    let hr = null;
    const zr = new Set,
      Yr = new Set;

    function nr() {
      Yr.forEach((rr => {
        rr()
      }))
    }

    function er() {
      if (!mr) {
        const rr = Zr.j.getItem(Er);
        mr = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof rr && null !== rr ? rr : {}
        }
      }
      return mr
    }

    function Kr(rr) {
      const Sr = er();
      Sr[rr] || (mr = {
        ...Sr,
        [rr]: !0
      }, Zr.j.setItem(Er, mr))
    }

    function yr(rr) {
      return "docsOverview" === rr ? ar : "aiHelperOverview" === rr ? jr : Nr ? Wr[Nr] : []
    }

    function Br(rr) {
      return ("worldCodeButton" !== rr || !er().worldCodeIntroShown) && !zr.has(rr)
    }

    function Tr(rr) {
      var Sr;
      return (null === (Sr = hr) || void 0 === Sr ? void 0 : Sr.name) === rr ? hr.stepsDone : Ur
    }

    function vr(rr, Sr) {
      if (! function(rr) {
          return hr ? hr.name === rr : "welcome" === rr
        }(rr) || !Br(Sr) || Tr(rr).has(Sr)) return !1;
      if (hr) return !0;
      const Qr = pr[Sr];
      return Qr ? !er()[Qr] || tr.has(Sr) : !er()[xr[rr]]
    }

    function Or(rr) {
      var Sr;
      return null !== (Sr = yr(rr).find((Sr => vr(rr, Sr)))) && void 0 !== Sr ? Sr : null
    }

    function Lr(rr) {
      var Sr;
      Kr(xr[rr]), (null === (Sr = hr) || void 0 === Sr ? void 0 : Sr.name) === rr && (hr = null)
    }

    function lr(rr) {
      const Sr = (hr ? [hr.name] : ["welcome", "docsOverview"]).find((Sr => Or(Sr) === rr));
      if (!Sr) return;
      Tr(Sr).add(rr);
      const Qr = pr[rr];
      Qr && (Kr(Qr), hr || tr.add(rr)), null === Or(Sr) && Lr(Sr), nr()
    }

    function Xr(rr, Sr) {
      const Qr = yr(rr),
        Zr = Tr(rr);
      for (let Wr = Qr.indexOf(Sr) - 1; Wr >= 0; Wr--)
        if (Zr.has(Qr[Wr]) && Br(Qr[Wr])) return Qr[Wr];
      return null
    }

    function Pr(rr, Sr) {
      return null !== Xr(rr, Sr)
    }

    function Hr(rr, Sr) {
      const Qr = Xr(rr, Sr);
      Qr && (Tr(rr).delete(Qr), nr())
    }

    function qr(rr) {
      Lr(rr), "welcome" === rr && yr("welcome").forEach((rr => {
        const Sr = pr[rr];
        Sr && Kr(Sr)
      })), nr()
    }

    function Rr(rr) {
      hr = {
        name: rr,
        stepsDone: new Set
      }, nr()
    }

    function gr() {
      (hr || 0 !== Ur.size || 0 !== tr.size) && (hr = null, Ur.clear(), tr.clear(), nr())
    }

    function Cr(rr, Sr) {
      const Qr = Sr ? rr : Nr === rr ? null : Nr;
      Qr !== Nr && (Nr = Qr, nr())
    }

    function Mr(rr, Sr) {
      zr.has(rr) === Sr && (Sr ? zr.delete(rr) : zr.add(rr), nr())
    }

    function Gr(rr) {
      return Yr.add(rr), () => {
        Yr.delete(rr)
      }
    }
  },
  40013: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr) {
      let Sr = Zr.get(rr);
      return Sr || (Sr = {
        hidden: rr.hidden,
        x: NaN,
        y: NaN
      }, Zr.set(rr, Sr)), Sr
    }

    function ar(rr, Sr) {
      const Qr = Wr(rr);
      Qr.hidden !== Sr && (Qr.hidden = Sr, rr.hidden = Sr)
    }

    function jr(rr, Sr, Qr) {
      const Zr = Wr(rr);
      Zr.x === Sr && Zr.y === Qr || (Zr.x = Sr, Zr.y = Qr, rr.style.translate = `${Sr}vw ${Qr}vh`)
    }
  },
  39920: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => yr,
      D: () => Tr,
      G: () => Kr,
      I: () => er,
      K: () => mr,
      N: () => tr,
      P: () => zr,
      S: () => Wr,
      b: () => pr,
      d: () => fr,
      e: () => nr,
      i: () => Er,
      m: () => Ir,
      q: () => jr,
      t: () => ar,
      w: () => Br,
      z: () => Nr
    });
    var Zr = Qr(5870);

    function Wr(rr) {
      return Math.floor(rr).toLocaleString("en-US")
    }
    const ar = 2e3,
      jr = .005,
      Ir = .001,
      fr = 2,
      Er = "Fluid Tank",
      pr = "Coolant Mixer",
      xr = 144;

    function mr(rr) {
      const Sr = rr.split("|")[0];
      return (0, Zr.k)(Sr) ? Sr === Zr.d ? "cryo" : "water" : null
    }
    const Nr = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Ur = 63;

    function tr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Qr = Sr ? function(rr, Sr, Qr) {
        const Zr = Nr.findIndex((Zr => {
          let [Wr, ar, jr] = Zr;
          return Wr === rr && ar === Sr && jr === Qr
        }));
        return Zr < 0 ? 0 : 1 << Zr
      }(Sr[0], Sr[1], Sr[2]) : 0;
      return "maker" === rr ? {
        kind: rr,
        faces: Qr
      } : "user" === rr ? {
        kind: rr,
        faces: Ur & ~Qr
      } : {
        kind: rr,
        faces: Ur
      }
    }

    function hr(rr) {
      return "pipe" === rr || "tank" === rr || "maker" === rr
    }

    function zr(rr, Sr, Qr) {
      return 0 !== (rr.faces & 1 << Qr) && 0 !== (Sr.faces & 1 << (1 ^ Qr)) && (hr(rr.kind) || hr(Sr.kind))
    }
    const Yr = (rr, Sr, Qr, Zr) => ({
        input: rr,
        inputAmount: Zr,
        output: Sr,
        outputAmount: Qr
      }),
      nr = {
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
          recipes: [Yr("Uranium Grit", "Uranium Pellet", 1, 12), Yr("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Yr("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: xr,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function er(rr, Sr) {
      return 1e3 * (null !== Sr && void 0 !== Sr ? Sr : 0) / rr.opMs
    }

    function Kr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Qr = er(nr["Coolant Mixer"], xr) * Sr;
      return rr <= 0 ? 0 : Math.ceil(rr / Qr - 1e-9)
    }
    const yr = "baf2Water",
      Br = "baf2waterclose",
      Tr = "baf2wateropen"
  },
  41149: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      f: () => xr
    });
    var Zr = Qr(5779),
      Wr = Qr(5811),
      ar = Qr(5830);
    const jr = [0, 0, 0, 1, 1, 1],
      Ir = (0, Wr.e)([
        [2, 0, 2, 6, 6, 6]
      ]),
      fr = (0, Wr.e)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Er = (0, Wr.e)([
        [3, 3, 3, 5, 8, 5]
      ]),
      pr = [0, 1, 2, 3].map((rr => (0, Wr.e)((0, Wr.n)([
        [3, 2, 0, 5, 7, 3]
      ], rr))));

    function xr(rr) {
      const {
        Bh: Sr,
        model: Qr,
        blockModel: Wr,
        meta: xr
      } = Zr.j[rr];
      return void 0 !== Sr ? Sr : "CentreCross" === Qr ? Ir : null !== Wr && void 0 !== Wr && Wr.startsWith("torch") ? xr.halfblockPlacement === ar.b.side ? pr[xr.rot - 1] : xr.halfblockPlacement === ar.b.top ? Er : fr : jr
    }
  },
  39907: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => qr,
      h: () => Rr
    });
    var Zr = Qr(5779),
      Wr = Qr(5817);
    const ar = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var jr = Qr(5833),
      Ir = Qr(39717),
      fr = Qr(5830);
    const Er = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function pr(rr) {
      let [Sr, Qr] = rr;
      return [-Qr, Sr]
    }

    function xr(rr, Sr) {
      return rr[0] === Sr[0] && rr[1] === Sr[1]
    }

    function mr(rr, Sr) {
      return rr[0] * Sr[0] + rr[1] * Sr[1] === 0
    }
    const Nr = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Ur = Qr(5861);

    function tr(rr, Sr, Qr, Zr, Wr) {
      return Sr < Ur.r || Sr >= Ur.r + Ur.s || Math.floor(rr / Ur.y) === Math.floor(Zr / Ur.y) && Math.floor(Qr / Ur.y) === Math.floor(Wr / Ur.y)
    }
    const hr = "Splitter",
      zr = "Sorting Gate",
      Yr = new Set(Ur.L),
      nr = new Set([...Ur.L, "Belt Loader", "Fast Loader", zr]),
      er = new Set(Ur.w),
      Kr = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function yr(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.meta.rootName) && void 0 !== Sr ? Sr : ""
    }

    function Br(rr) {
      return yr(rr) === Ur.g && (0, Ur.W)(Zr.j[rr].name)
    }
    var Tr = Qr(5825),
      vr = Qr(5843);
    const Or = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Lr(rr) {
      var Sr, Qr;
      const Wr = null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta;
      return (null === Wr || void 0 === Wr ? void 0 : Wr.rootName) !== vr.r ? null : {
        rot: null !== (Qr = Wr.rot) && void 0 !== Qr ? Qr : 1,
        half: (0, vr.h)(Wr.rootName, Wr.metaStr)
      }
    }

    function lr(rr, Sr, Qr, Zr) {
      return Lr(rr(Sr, Qr, Zr))
    }

    function Xr(rr, Sr, Qr, Zr, Wr) {
      let {
        rot: ar,
        half: jr
      } = Wr;
      const [Ir, fr] = (0, vr.n)(ar, jr), Er = lr(rr, Sr + Ir, Qr, Zr + fr);
      return null !== Er && Er.rot === ar && Er.half === vr.u[jr]
    }
    var Pr = Qr(39914);
    const Hr = [new class {
      constructor() {
        this.reshapeOffsets = Nr
      }
      handles(rr) {
        var Sr;
        return "Stairs" === (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.model)
      }
      affects(rr) {
        return this.handles(rr)
      }
      shape(rr, Sr, Qr, Wr, ar) {
        const jr = this.stairsOf(ar),
          Ir = this.cornerAt(rr, Sr, Qr, Wr, jr),
          Er = jr.half === fr.b.top ? "top" : "bot";
        return (0, Zr.k)(`${Zr.j[ar].meta.rootName}|meta|rot${jr.rot}|${Er}${null===Ir?"":`|${Ir}`}`)
      }
      stairsOf(rr) {
        const {
          rot: Sr,
          halfblockPlacement: Qr
        } = Zr.j[rr].meta;
        return {
          rot: Sr,
          half: Qr
        }
      }
      stairsAt(rr, Sr, Qr, Zr) {
        const Wr = rr(Sr, Qr, Zr);
        return this.handles(Wr) ? this.stairsOf(Wr) : null
      }
      cornerAt(rr, Sr, Qr, Zr, Wr) {
        let {
          rot: ar,
          half: jr
        } = Wr;
        const Ir = Er[ar],
          fr = Wr => {
            let [Ir, fr] = Wr;
            const Er = this.stairsAt(rr, Sr + Ir, Qr, Zr + fr);
            return null !== Er && Er.rot === ar && Er.half === jr
          },
          Nr = this.stairsAt(rr, Sr + Ir[0], Qr, Zr + Ir[1]);
        if (null !== Nr && Nr.half === jr) {
          const rr = Er[Nr.rot];
          if (mr(Ir, rr) && !fr([-rr[0], -rr[1]])) return xr(rr, pr(Ir)) ? "outerLeft" : "outerRight"
        }
        const Ur = this.stairsAt(rr, Sr - Ir[0], Qr, Zr - Ir[1]);
        if (null !== Ur && Ur.half === jr) {
          const rr = Er[Ur.rot];
          if (mr(Ir, rr) && !fr(rr)) return xr(rr, pr(Ir)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = ar, this.rootIds = new Set(Wr.l.map((rr => (0, Zr.k)(rr))))
      }
      handles(rr) {
        var Sr;
        const Qr = null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta;
        return void 0 !== Qr && this.rootIds.has(Qr.rootId)
      }
      affects(rr) {
        return this.handles(rr)
      }
      placedBy(rr) {
        return Zr.j[rr].meta.rootName === Wr.u ? null : Wr.u
      }
      shape(rr, Sr, Qr, ar, jr) {
        const {
          rootId: Ir,
          rootName: fr,
          rot: Er
        } = Zr.j[jr].meta;
        let pr = 0;
        return Wr.A[Er].forEach(((Wr, jr) => {
          var fr;
          let [xr, mr, Nr] = Wr;
          const Ur = null === (fr = Zr.j[rr(Sr + xr, Qr + mr, ar + Nr)]) || void 0 === fr ? void 0 : fr.meta;
          (null === Ur || void 0 === Ur ? void 0 : Ur.rootId) === Ir && Ur.rot === Er && (pr |= 1 << jr)
        })), (0, Zr.k)((0, Wr.h)(fr, Er, pr))
      }
    }, ...jr.d.map((rr => new Ir.b(rr))), new class {
      constructor() {
        this.reshapeOffsets = Kr
      }
      handles(rr) {
        const Sr = yr(rr);
        return Yr.has(Sr) || Sr === Ur.g
      }
      affects(rr) {
        const Sr = yr(rr);
        return nr.has(Sr) || er.has(Sr) || Sr === hr || Sr === Ur.g || void 0 !== Ur.b[Sr]
      }
      shape(rr, Sr, Qr, Wr, ar, jr) {
        const {
          rootName: Ir,
          rot: fr
        } = Zr.j[ar].meta;
        return Ir === Ur.g ? jr ? ar : function(rr, Sr, Qr, Wr, ar) {
          const [jr, Ir] = Ur.d[ar - 1];
          for (let fr = 1; fr <= Ur.J; fr++) {
            const [Er, pr] = [Sr - jr * fr, Wr - Ir * fr], xr = rr(Er, Qr, pr);
            if (yr(xr) === Ur.g && Zr.j[xr].meta.rot === ar && tr(Sr, Qr, Wr, Er, pr)) return (0, Zr.k)((0, Ur.ab)(ar, !Br(xr)))
          }
          return (0, Zr.k)((0, Ur.ab)(ar, !1))
        }(rr, Sr, Qr, Wr, fr) : (0, Zr.k)((0, Ur.P)(Ir, fr, function(rr, Sr, Qr, Wr, ar) {
          const [jr, Ir] = Ur.d[ar - 1], fr = (ar, jr) => function(rr, Sr, Qr) {
            var Wr;
            const ar = null === (Wr = Zr.j[rr]) || void 0 === Wr ? void 0 : Wr.meta;
            if (!ar) return !1;
            const jr = ar.rootName,
              Ir = nr.has(jr) || Br(rr);
            if (!Ir && !er.has(jr) && jr !== hr) return !1;
            const [fr, Er] = Ur.d[ar.rot - 1];
            if (Ir && fr === -Sr && Er === -Qr) return !0;
            if (er.has(jr)) return fr === Sr && Er === Qr;
            const pr = Zr.j[rr].name;
            return (jr === hr ? (0, Ur._)(pr, fr, Er) : jr === zr ? [(0, Ur.R)(pr, fr, Er)] : []).some((rr => {
              let [Zr, Wr] = rr;
              return Zr === -Sr && Wr === -Qr
            }))
          }(rr(Sr + ar, Qr, Wr + jr), ar, jr), Er = rr(Sr - jr, Qr, Wr - Ir), pr = yr(Er) === hr && Zr.j[Er].meta.rot === ar, xr = 1 === Ur.b[yr(rr(Sr, Qr - 1, Wr))] || -1 === Ur.b[yr(rr(Sr, Qr + 1, Wr))];
          if (xr || pr || fr(-jr, -Ir)) return null;
          const mr = fr(-Ir, jr),
            Nr = fr(Ir, -jr);
          if (mr === Nr) return null;
          return mr ? "turnLeft" : "turnRight"
        }(rr, Sr, Qr, Wr, fr)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Or, this.rootId = (0, Zr.k)(vr.r)
      }
      handles(rr) {
        var Sr;
        return (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta.rootId) === this.rootId
      }
      affects(rr) {
        return this.handles(rr)
      }
      shape(rr, Sr, Qr, Wr, ar, jr) {
        const Ir = Lr(ar);
        return (0, Zr.k)((fr = Ir.rot, null !== (Er = jr ? this.reshapedHalf(rr, Sr, Qr, Wr, Ir) : this.placedHalf(rr, Sr, Qr, Wr, Ir.rot)) ? (0, vr.e)(vr.r, fr, Er) : 1 === fr ? vr.r : `${vr.r}|meta|rot${fr}`));
        var fr, Er
      }
      placedHalf(rr, Sr, Qr, Zr, Wr) {
        const [ar, jr] = Tr.b[Wr];
        for (const [Ir, fr] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Er = Sr + fr * ar,
            pr = Zr + fr * jr,
            xr = lr(rr, Er, Qr, pr);
          if (null !== xr && xr.rot === Wr && (null === xr.half || !Xr(rr, Er, Qr, pr, xr))) return Ir
        }
        return null
      }
      reshapedHalf(rr, Sr, Qr, Zr, Wr) {
        if (null !== Wr.half && Xr(rr, Sr, Qr, Zr, Wr)) return Wr.half;
        for (const ar of ["right", "left"]) {
          const [jr, Ir] = (0, vr.n)(Wr.rot, ar), fr = lr(rr, Sr + jr, Qr, Zr + Ir);
          if (null !== fr && fr.rot === Wr.rot && fr.half === vr.u[ar]) return ar
        }
        return null
      }
    }, new Pr.e];

    function qr(rr, Sr, Qr, Zr, Wr) {
      let ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const jr of Hr)
        if (jr.handles(Wr)) return jr.shape(rr, Sr, Qr, Zr, Wr, ar);
      return Wr
    }

    function Rr(rr) {
      for (const Zr of Hr) {
        var Sr, Qr;
        if (Zr.handles(rr)) return null !== (Sr = null === (Qr = Zr.placedBy) || void 0 === Qr ? void 0 : Qr.call(Zr, rr)) && void 0 !== Sr ? Sr : null
      }
      return null
    }
  },
  39914: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => vr,
      f: () => er,
      h: () => nr
    });
    var Zr = Qr(5779),
      Wr = Qr(5806),
      ar = Qr(5870),
      jr = Qr(39920),
      Ir = Qr(5861);
    const fr = (0, jr.N)("pipe"),
      Er = (0, jr.N)("tank"),
      pr = (0, jr.N)("port"),
      xr = "Reactor Port";

    function mr(rr, Sr, Qr) {
      const Zr = new Set([ar.g, ar.d, xr, ...Sr, ...Qr, ...rr ? [jr.i] : []]);
      return {
        makers: new Set(Sr),
        roots: Zr
      }
    }
    const Nr = {
        water: mr(!0, ["Condenser"], ["Centrifuge", "Synthesizer", jr.b]),
        cryo: mr(!1, [jr.b], [])
      },
      Ur = new Set([...Nr.water.roots, ...Nr.cryo.roots]),
      tr = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      hr = Wr.f.map((rr => tr[rr])),
      zr = hr.map((rr => {
        let [Sr, Qr, Zr] = rr;
        return jr.z.findIndex((rr => {
          let [Wr, ar, jr] = rr;
          return Wr === Sr && ar === Qr && jr === Zr
        }))
      }));

    function Yr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Qr = Zr.j[rr],
        Wr = null === Qr || void 0 === Qr ? void 0 : Qr.meta.rootName,
        mr = Nr[Sr];
      if (!Wr || !mr.roots.has(Wr)) return null;
      if ((0, ar.k)(Wr)) return (0, jr.K)(Qr.name) === Sr ? fr : null;
      if (Wr === jr.i) return Er;
      if (Wr === xr) return Qr.name.endsWith("|Water") ? pr : null;
      const [Ur, tr] = Ir.d[(Qr.meta.rot || 1) - 1];
      return (0, jr.N)(mr.makers.has(Wr) ? "maker" : "user", [-Ur, 0, -tr])
    }

    function nr(rr, Sr, Qr, Wr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ir
      } = Nr[ar];
      return hr.some(((Er, pr) => {
        var xr, mr;
        let [Nr, Ur, tr] = Er;
        const hr = rr(Sr + Nr, Qr + Ur, Wr + tr),
          nr = Yr(hr, ar);
        return null !== nr && Ir.has(null !== (xr = null === (mr = Zr.j[hr]) || void 0 === mr ? void 0 : mr.meta.rootName) && void 0 !== xr ? xr : "") && !(0, jr.P)(fr, nr, zr[pr])
      }))
    }

    function er(rr) {
      const Sr = Zr.j[rr];
      return Sr ? (0, jr.K)(Sr.name) : null
    }
    let Kr = null;

    function yr(rr) {
      if (!Kr) {
        Kr = new Map;
        for (const rr of ["water", "cryo"])
          for (let Sr = 0; Sr < 64; Sr++)
            for (const Qr of [!1, !0]) Kr.set((0, ar.o)(rr, Sr, Qr), {
              HN: rr,
              mask: Sr,
              full: Qr
            })
      }
      return Kr.get(rr)
    }
    const Br = new Map(Array.from({
      length: ar.h + 1
    }, ((rr, Sr) => [(0, ar.p)(Sr), Sr])));

    function Tr(rr, Sr, Qr, Wr, ar, jr) {
      return hr.some(((Ir, fr) => {
        var Er, pr, xr;
        let [mr, Nr, Ur] = Ir;
        if (0 === (jr >> fr & 1)) return !1;
        const tr = null !== (Er = null === (pr = Zr.j[rr(Sr + mr, Qr + Nr, Wr + Ur)]) || void 0 === pr ? void 0 : pr.name) && void 0 !== Er ? Er : "",
          hr = yr(tr);
        return hr ? hr.HN === ar && hr.full : (null !== (xr = function(rr) {
          var Sr;
          return null !== (Sr = Br.get(rr)) && void 0 !== Sr ? Sr : null
        }(tr)) && void 0 !== xr ? xr : 0) > 0
      }))
    }
    class vr {
      constructor() {
        this.reshapeOffsets = hr
      }
      handles(rr) {
        return null !== er(rr)
      }
      affects(rr) {
        var Sr, Qr;
        return Ur.has(null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.meta.rootName) && void 0 !== Sr ? Sr : "")
      }
      placedBy(rr) {
        var Sr;
        return (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta.rootName) === ar.d ? ar.g : null
      }
      shape(rr, Sr, Qr, Wr, Ir, Er) {
        var pr, xr, mr;
        const Nr = null !== (pr = null === (xr = Zr.j[Ir]) || void 0 === xr ? void 0 : xr.name) && void 0 !== pr ? pr : "",
          Ur = Er || Nr !== ar.g ? null !== (mr = (0, jr.K)(Nr)) && void 0 !== mr ? mr : "water" : function(rr, Sr, Qr, Zr) {
            return hr.some(((Wr, ar) => {
              let [Ir, Er, pr] = Wr;
              const xr = Yr(rr(Sr + Ir, Qr + Er, Zr + pr), "cryo");
              return null !== xr && "port" !== xr.kind && (0, jr.P)(fr, xr, zr[ar])
            })) ? "cryo" : "water"
          }(rr, Sr, Qr, Wr),
          tr = function(rr, Sr, Qr, Zr) {
            let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              ar = 0;
            return hr.forEach(((Ir, Er) => {
              let [pr, xr, mr] = Ir;
              const Nr = Yr(rr(Sr + pr, Qr + xr, Zr + mr), Wr);
              Nr && (0, jr.P)(fr, Nr, zr[Er]) && (ar |= 1 << Er)
            })), ar
          }(rr, Sr, Qr, Wr, Ur),
          nr = Er ? function(rr) {
            var Sr;
            return !0 === (null === (Sr = yr(rr)) || void 0 === Sr ? void 0 : Sr.full)
          }(Nr) : Tr(rr, Sr, Qr, Wr, Ur, tr);
        return (0, Zr.k)((0, ar.o)(Ur, tr, nr))
      }
    }
  },
  38368: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return null === rr || null === Sr ? rr === Sr : rr[0] === Sr[0] && rr[1] === Sr[1] && rr[2] === Sr[2]
    }

    function Wr(rr) {
      return [rr[0] + .5, rr[1] + .5, rr[2] + .5]
    }
    Qr.d(Sr, {
      e: () => Wr,
      h: () => Zr
    })
  },
  39679: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      i: () => ar
    });
    const Zr = ["Chest", "Loot Chest", "Moonstone Chest"],
      Wr = [{
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

    function ar(rr) {
      return Wr.find((Sr => Sr.exactMatch ? rr === Sr.name : rr.includes(Sr.name)))
    }
  },
  38397: (rr, Sr, Qr) => {
    function Zr(rr) {
      return rr.includes("Leaf Bed")
    }

    function Wr(rr) {
      return / Bed(?: Head)?(?:\||$)/.test(rr) && !Zr(rr)
    }

    function ar(rr) {
      return rr.includes(" Strongbed")
    }

    function jr(rr) {
      return Zr(rr) || Wr(rr) || ar(rr)
    }
    Qr.d(Sr, {
      c: () => jr,
      f: () => Zr,
      h: () => ar,
      i: () => Wr
    })
  },
  38390: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er
    });
    var Zr = Qr(38397),
      Wr = Qr(5779);
    const ar = [],
      jr = [],
      Ir = [],
      fr = [];
    for (const pr of Object.keys(Wr.n))(0, Zr.f)(pr) ? ar.push(pr) : (0, Zr.i)(pr) && jr.push(pr), (0, Zr.h)(pr) && Ir.push(pr), (pr.includes(" Bed Head") || pr.includes(" Strongbed Head")) && fr.push(pr);
    const Er = {
      leafBeds: ar,
      woolBeds: jr,
      strongBeds: Ir,
      beds: [...ar, ...jr, ...Ir],
      bedHeads: fr,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  40079: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);