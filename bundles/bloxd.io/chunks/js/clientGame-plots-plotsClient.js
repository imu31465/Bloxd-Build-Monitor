export const id = 26;
export const ids = [26];
export const modules = {
  37796: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR,
      d: () => nR,
      g: () => wR,
      j: () => KR
    });
    var yR = GR(35140),
      tR = GR(3494),
      uR = GR(3498),
      ZR = GR(10048),
      qR = GR(1581),
      iR = GR(66),
      fR = GR(83),
      VR = GR(1378);

    function KR() {
      var RR;
      return (0, qR.h)(tR.e, (0, tR.r)()), (0, VR.jsx)(VR.Fragment, {
        children: null === (RR = (0, tR.r)()) || void 0 === RR ? void 0 : RR.content
      })
    }

    function wR(RR) {
      var JR;
      let {
        show: GR
      } = RR;
      (0, qR.h)(tR.e, (0, tR.r)());
      const fR = null === (JR = (0, tR.r)()) || void 0 === JR ? void 0 : JR.menu;
      return (0, iR.useEffect)((() => {
        var RR;
        GR || (null === fR || void 0 === fR || null === (RR = fR.onClose) || void 0 === RR || RR.call(fR), (0, uR.m)())
      }), [GR, fR]), (0, iR.useEffect)((() => GR ? (0, ZR.e)(uR.q, uR.e) : void 0), [GR]), (0, VR.jsx)(yR.b, {
        showing: GR,
        globallyUniqueKey: "clientGameMenu",
        children: null === fR || void 0 === fR ? void 0 : fR.content
      })
    }
    const rR = new Map,
      eR = new Set;

    function aR(RR, JR) {
      JR ? rR.set(RR, JR) : rR.delete(RR);
      for (const GR of eR) GR()
    }

    function LR(RR) {
      let {
        placement: JR = "bottom"
      } = RR;
      const GR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const RR = GR.current;
        return aR(JR, RR), () => {
          rR.get(JR) === RR && aR(JR, null)
        }
      }), [JR]), (0, VR.jsx)("div", {
        ref: GR,
        id: `clientGameHud-${JR}`,
        style: {
          display: "contents"
        }
      })
    }

    function nR(RR) {
      let {
        children: JR,
        placement: GR = "bottom"
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => {
        var RR;
        return null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null
      }));
      return (0, iR.useEffect)((() => {
        const RR = () => {
          var RR;
          tR(null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null)
        };
        return eR.add(RR), RR(), () => {
          eR.delete(RR)
        }
      }), [GR]), yR ? (0, fR.createPortal)(JR, yR) : null
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  37994: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => BR,
      d: () => XR,
      f: () => MR,
      h: () => eR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(66),
      ZR = GR(83),
      qR = GR(1504),
      iR = GR(1590),
      fR = GR(1501),
      VR = GR(1366),
      KR = GR(1270),
      wR = GR(37999),
      rR = GR(1378);

    function eR(RR) {
      const [JR, GR] = (0, uR.useState)((() => (0, wR.j)(RR)));
      return (0, uR.useEffect)((() => (GR((0, wR.j)(RR)), (0, wR.D)((() => {
        GR((0, wR.j)(RR))
      })))), [RR]), JR
    }

    function aR(RR, JR) {
      "function" === typeof RR ? RR(JR) : RR && (RR.current = JR)
    }

    function LR(RR) {
      let {
        tutorial: JR,
        step: GR,
        enabled: yR = !0
      } = RR;
      const tR = eR(JR);
      return yR && tR === GR
    }

    function nR(RR, JR) {
      const GR = (0, wR.l)(RR),
        yR = GR.indexOf(JR);
      return !GR.slice(yR + 1).some((JR => (0, wR.p)(RR, JR)))
    }

    function UR(RR, JR, GR, yR) {
      let {
        tutorial: tR,
        step: uR,
        waitForClick: ZR = !1,
        onPrevious: qR
      } = RR;
      const iR = JR && (0, wR.o)(tR, uR),
        fR = JR && !nR(tR, uR),
        KR = ZR ? yR : GR;
      let rR = null;
      iR ? rR = () => {
        null === qR || void 0 === qR || qR(), (0, wR.m)(tR, uR)
      } : fR && (rR = () => {
        (0, wR.g)(tR)
      }), (0, VR.u)("popup", null !== KR && void 0 !== KR ? KR : GR, rR, JR && null !== KR, null, iR ? void 0 : "controller:menusSkipTutorial")
    }

    function WR(RR) {
      let {
        tutorial: JR,
        step: GR,
        text: yR,
        waitForClick: tR = !1,
        onPrevious: uR
      } = RR;
      const {
        t: ZR
      } = (0, KR.A)(), qR = nR(JR, GR);
      return (0, rR.jsxs)(rR.Fragment, {
        children: [(0, rR.jsx)("div", {
          className: "TutorialStepText",
          children: yR
        }), (0, rR.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, wR.o)(JR, GR) && (0, rR.jsx)(iR.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === uR || void 0 === uR || uR(), (0, wR.m)(JR, GR)
            },
            children: ZR("tutorial:back")
          }), !tR && (0, rR.jsx)(iR.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wR.e)(GR)
            },
            padDefaultFocus: !0,
            children: ZR(qR ? "tutorial:done" : "tutorial:next")
          }), !qR && (0, rR.jsx)(iR.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wR.g)(JR)
            },
            children: ZR("tutorial:skip")
          })]
        })]
      })
    }
    const AR = 6;

    function CR(RR) {
      let {
        rect: JR,
        margin: GR
      } = RR;
      const yR = Math.max(0, JR.top - GR),
        tR = JR.bottom + GR,
        uR = Math.max(0, JR.left - GR),
        ZR = JR.right + GR;
      return (0, rR.jsxs)(rR.Fragment, {
        children: [(0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: yR
          }
        }), (0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tR,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: yR,
            left: 0,
            width: uR,
            height: tR - yR
          }
        }), (0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: yR,
            left: ZR,
            right: 0,
            height: tR - yR
          }
        })]
      })
    }

    function XR(RR) {
      let {
        target: JR,
        placement: GR,
        boxRef: yR,
        className: iR,
        spotlight: VR = !0,
        spotlightMargin: KR = AR,
        children: wR
      } = RR;
      const {
        getArrowProps: eR,
        getTooltipProps: aR,
        setTooltipRef: LR,
        setTriggerRef: nR,
        update: UR
      } = (0, qR.b)({
        placement: GR,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, KR]
      });
      (0, uR.useLayoutEffect)((() => {
        nR(JR)
      }), [JR, nR]);
      const WR = function(RR, JR) {
        const [GR, yR] = (0, uR.useState)(null);
        return (0, uR.useEffect)((() => {
          if (!JR || !RR) return void yR(null);
          let GR = 0,
            tR = null;
          const uR = () => {
            const JR = RR.getBoundingClientRect();
            tR && JR.left === tR.left && JR.top === tR.top && JR.width === tR.width && JR.height === tR.height || (tR = JR, yR(JR)), GR = requestAnimationFrame(uR)
          };
          return uR(), () => {
            cancelAnimationFrame(GR)
          }
        }), [RR, JR]), GR
      }(JR, VR);
      (0, uR.useEffect)((() => {
        null === UR || void 0 === UR || UR()
      }), [WR, UR]), (0, uR.useEffect)((() => {
        if (VR || !JR || !UR) return;
        const RR = new ResizeObserver((() => {
          UR()
        }));
        return RR.observe(JR), JR.parentElement && RR.observe(JR.parentElement), () => {
          RR.disconnect()
        }
      }), [JR, VR, UR]), (0, uR.useEffect)((() => {
        VR && (null === JR || void 0 === JR || JR.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [JR, VR]);
      const XR = (0, uR.useCallback)((RR => {
        LR(RR), yR && (yR.current = RR)
      }), [LR, yR]);
      return (0, ZR.createPortal)((0, rR.jsxs)(rR.Fragment, {
        children: [WR && (0, rR.jsx)(CR, {
          rect: WR,
          margin: KR
        }), (0, rR.jsxs)("div", {
          ref: XR,
          ...aR({
            className: tR()("tooltip-container SmallTextLight TutorialStep", iR)
          }),
          children: [wR, (0, rR.jsx)("div", {
            ...eR({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, fR.k)())
    }
    const MR = (0, uR.forwardRef)((function(RR, JR) {
      let {
        placement: GR = "right",
        children: yR,
        ...tR
      } = RR;
      const ZR = LR(tR),
        qR = (0, uR.useRef)(null),
        iR = (0, uR.useRef)(null);
      UR(tR, ZR, qR, iR);
      const [fR, VR] = (0, uR.useState)(null), KR = yR.ref, wR = (0, uR.useCallback)((RR => {
        iR.current = RR, VR(RR), aR(JR, RR), aR(KR, RR)
      }), [JR, KR]);
      return (0, rR.jsxs)(rR.Fragment, {
        children: [(0, uR.cloneElement)(yR, {
          ref: wR
        }), ZR && (0, rR.jsx)(XR, {
          target: fR,
          placement: GR,
          boxRef: qR,
          children: (0, rR.jsx)(WR, {
            ...tR
          })
        })]
      })
    }));

    function BR(RR) {
      const JR = LR(RR),
        GR = (0, uR.useRef)(null);
      return UR(RR, JR, GR, null), JR ? (0, ZR.createPortal)((0, rR.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, rR.jsx)("div", {
          ref: GR,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, rR.jsx)(WR, {
            ...RR
          })
        })
      }), (0, fR.k)()) : null
    }
  },
  37849: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR,
      i: () => fR,
      k: () => VR,
      l: () => eR
    });
    var yR = GR(66),
      tR = GR(4352),
      uR = GR(3593),
      ZR = GR(32);
    const qR = 8,
      iR = "InGameHeaderContainer",
      fR = "TopRightElements";

    function VR(RR) {
      const [JR] = (0, tR.e)(), [GR, uR] = (0, yR.useState)(!1);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const JR = document.querySelector(`.${iR}`),
          GR = document.querySelector(`.${fR}`),
          yR = () => {
            const yR = RR.getBoundingClientRect(),
              tR = JR ? JR.getBoundingClientRect().right : 0,
              ZR = GR ? GR.getBoundingClientRect().left : window.innerWidth,
              iR = yR.left < tR + qR,
              fR = yR.right > ZR - qR;
            uR(iR || fR)
          };
        yR();
        const tR = new ResizeObserver(yR);
        return tR.observe(RR), JR && tR.observe(JR), GR && tR.observe(GR), () => {
          tR.disconnect()
        }
      }), [RR, JR]), GR
    }
    const KR = `.InGameUi .${iR}`,
      wR = [KR, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      rR = 1e3;

    function eR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR,
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [tR, iR] = (0, yR.useState)(null);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const yR = new ResizeObserver((() => {
          fR()
        }));
        yR.observe(RR), JR && JR !== RR && yR.observe(JR);
        let tR = [];

        function fR() {
          var uR, ZR, fR;
          const VR = RR.getBoundingClientRect(),
            rR = function() {
              const RR = wR.map((RR => document.querySelector(RR))).filter((RR => null !== RR));
              for (const JR of RR) tR.includes(JR) || yR.observe(JR);
              for (const JR of tR) RR.includes(JR) || yR.unobserve(JR);
              return tR = RR, RR
            }(),
            eR = rR.filter((RR => {
              const JR = RR.getBoundingClientRect();
              return JR.width > 0 && JR.height > 0 && VR.left < JR.right + qR && VR.right > JR.left - qR
            }));
          if (0 === eR.length && !GR) return void iR(null);
          const aR = rR.find((RR => RR.matches(KR))),
            LR = Math.max(null !== (uR = null === aR || void 0 === aR ? void 0 : aR.getBoundingClientRect().bottom) && void 0 !== uR ? uR : 0, ...eR.map((RR => RR.getBoundingClientRect().bottom))),
            nR = null !== (ZR = null === JR || void 0 === JR || null === (fR = JR.offsetParent) || void 0 === fR ? void 0 : fR.getBoundingClientRect().top) && void 0 !== ZR ? ZR : 0;
          iR(Math.ceil(LR + qR / 2) - Math.round(nR))
        }
        const VR = setInterval(fR, rR);
        fR(), window.addEventListener("resize", fR);
        const eR = (0, ZR.q)(uR.h, fR);
        return () => {
          yR.disconnect(), clearInterval(VR), window.removeEventListener("resize", fR), eR()
        }
      }), [RR, JR, GR]), tR
    }
  },
  39221: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => fR,
      f: () => yR,
      j: () => qR,
      m: () => tR,
      p: () => ZR,
      q: () => uR
    });
    const yR = 1.001,
      tR = .501,
      uR = .025,
      ZR = .75,
      qR = .08,
      iR = 4;

    function fR() {
      const RR = tR,
        JR = uR,
        GR = RR - JR / 2,
        yR = (2 * RR - 2 * JR) / (2 * iR - 1),
        ZR = [];
      for (const tR of [-GR, GR])
        for (const uR of [-GR, GR])
          for (let GR = 0; GR < iR; GR++) {
            const qR = -RR + JR + yR * (2 * GR + .5);
            ZR.push([yR, JR, JR, qR, tR, uR]), ZR.push([JR, yR, JR, tR, qR, uR]), ZR.push([JR, JR, yR, tR, uR, qR])
          }
      for (const tR of [-GR, GR])
        for (const RR of [-GR, GR])
          for (const yR of [-GR, GR]) ZR.push([JR, JR, JR, tR, RR, yR]);
      return ZR
    }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  39700: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      g: () => qR,
      i: () => iR
    });
    const yR = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      tR = [0, 1, 2, 0, 2, 3],
      uR = [4, 5];

    function ZR(RR, JR, GR, yR, tR) {
      for (let ZR = 0; ZR < 6; ZR++) uR.includes(ZR) === tR && fR(RR, JR, GR, yR, ZR)
    }

    function qR(RR, JR, GR, yR) {
      for (let tR = 0; tR < 6; tR++) fR(RR, JR, GR, yR, tR)
    }

    function iR(RR, JR, GR, uR, ZR) {
      for (let qR = 0; qR < 6; qR++)
        for (const iR of [0, 1]) {
          const [fR, VR, KR] = [iR + 2, iR + 1, (iR + 3) % 4], wR = RR.length / 3;
          for (const [JR, tR] of [
              [iR, VR],
              [fR, VR],
              [fR, KR],
              [iR, KR]
            ])
            for (let iR = 0; iR < 3; iR++) {
              const fR = yR[3 * (4 * qR + JR) + iR],
                VR = yR[3 * (4 * qR + tR) + iR];
              RR.push((fR + (VR - fR) * ZR) * uR / 2 + GR[iR])
            }
          for (const RR of tR) JR.push(wR + RR)
        }
    }

    function fR(RR, JR, GR, uR, ZR) {
      let [qR, iR, fR] = GR, [VR, KR, wR] = uR;
      const rR = RR.length / 3;
      for (let tR = 4 * ZR; tR < 4 * ZR + 4; tR++) RR.push(yR[3 * tR] * VR / 2 + qR, yR[3 * tR + 1] * KR / 2 + iR, yR[3 * tR + 2] * wR / 2 + fR);
      for (const yR of tR) JR.push(rR + yR)
    }
  },
  40788: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      d: () => iR,
      e: () => ZR,
      g: () => fR,
      i: () => VR
    });
    var yR = GR(40792),
      tR = GR(39700);
    const uR = .35,
      ZR = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      qR = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      iR = [.95, .2, .15];
    class fR {
      constructor() {
        this.groups = []
      }
      add(RR, JR, GR, tR, uR) {
        let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yR.b;
        for (const yR of this.groups)
          if (wR(yR, tR, uR)) return yR.cells.push(RR, JR, GR), void yR.boxes.push(ZR);
        this.groups.push({
          rgb: tR,
          look: uR,
          cells: [RR, JR, GR],
          boxes: [ZR]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class VR {
      constructor(RR) {
        this.api = RR, this.shown = []
      }
      show(RR) {
        const JR = [];
        for (const GR of RR) {
          const RR = this.shown.findIndex((RR => {
            let {
              group: JR
            } = RR;
            return wR(JR, GR.rgb, GR.look) && rR(JR, GR)
          })); - 1 === RR ? JR.push(this.build(GR)) : (JR.push(this.shown[RR]), this.shown.splice(RR, 1))
        }
        this.dispose(), this.shown = JR
      }
      dispose() {
        for (const {
            meshes: RR
          }
          of this.shown)
          for (const JR of RR) this.api.disposeGameMesh(JR);
        this.shown = []
      }
      build(RR) {
        const {
          rgb: JR,
          look: GR,
          boxes: yR
        } = RR, ZR = [JR[0] + (1 - JR[0]) * uR, JR[1] + (1 - JR[1]) * uR, JR[2] + (1 - JR[2]) * uR], qR = [this.buildMesh(RR.cells, JR, GR.alpha, ((RR, JR, tR, uR) => {
          KR(RR, JR, tR, yR[uR], GR.size, !1)
        })), this.buildMesh(RR.cells, ZR, GR.alpha, ((RR, JR, tR, uR) => {
          KR(RR, JR, tR, yR[uR], GR.size, !0)
        }))];
        return GR.crossed && qR.push(this.buildMesh(RR.cells, JR, .9, ((RR, JR, yR) => {
          (0, tR.i)(RR, JR, yR, GR.size + .01, .12)
        }))), {
          group: RR,
          meshes: qR
        }
      }
      buildMesh(RR, JR, GR, yR) {
        const tR = [RR[0], RR[1], RR[2]],
          uR = [],
          ZR = [];
        for (let qR = 0; qR < RR.length; qR += 3) yR(uR, ZR, [RR[qR] - tR[0] + .5, RR[qR + 1] - tR[1] + .5, RR[qR + 2] - tR[2] + .5], qR / 3);
        return this.api.createGameMesh({
          positions: uR,
          indices: ZR
        }, {
          rgb: [JR[0], JR[1], JR[2]],
          alpha: GR
        }, tR)
      }
    }

    function KR(RR, JR, GR, yR, uR, ZR) {
      for (let qR = 0; qR < yR.length; qR += 6) {
        const iR = [0, 0, 0],
          fR = [0, 0, 0];
        for (let RR = 0; RR < 3; RR++) iR[RR] = GR[RR] + ((yR[qR + RR] + yR[qR + RR + 3]) / 2 - .5) * uR, fR[RR] = (yR[qR + RR + 3] - yR[qR + RR]) * uR;
        (0, tR.c)(RR, JR, iR, fR, ZR)
      }
    }

    function wR(RR, JR, GR) {
      return RR.rgb[0] === JR[0] && RR.rgb[1] === JR[1] && RR.rgb[2] === JR[2] && RR.look === GR
    }

    function rR(RR, JR) {
      if (RR.cells.length !== JR.cells.length) return !1;
      for (let GR = 0; GR < RR.cells.length; GR++)
        if (RR.cells[GR] !== JR.cells[GR]) return !1;
      return RR.boxes.every(((RR, GR) => RR === JR.boxes[GR]))
    }
  },
  40799: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => Ky
    });
    const yR = [0, 90, 180, 270],
      tR = "plotsblueprint";
    var uR = GR(66),
      ZR = GR(3494),
      qR = GR(25),
      iR = GR(1581),
      fR = GR(2194),
      VR = GR(1270),
      KR = GR(1163),
      wR = GR.n(KR),
      rR = GR(1800),
      eR = GR(40801),
      aR = GR(37796),
      LR = GR(1468),
      nR = GR(2123),
      UR = GR(2186),
      WR = GR(4724),
      AR = GR(1943);

    function CR() {}
    const XR = (0, uR.createContext)({
      hint: null,
      journalRef: CR,
      placementCardRef: CR,
      buildRef: CR
    });
    var MR = GR(32);
    const BR = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      lR = {
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
      pR = ["small", "medium", "large"].flatMap((RR => BR.flat().filter((JR => lR[JR].tier === RR))));

    function gR(RR) {
      return lR[RR]
    }
    const bR = new Map(BR.flatMap((RR => RR.slice(1).map(((JR, GR) => [JR, RR[GR]])))));

    function vR(RR) {
      var JR;
      return null !== (JR = bR.get(RR)) && void 0 !== JR ? JR : null
    }
    const OR = {
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

    function xR(RR, JR) {
      const GR = new Set(RR),
        yR = function(RR) {
          const JR = new Set(RR);
          return new Set(pR.filter((RR => {
            const GR = vR(RR);
            return null === GR || JR.has(GR)
          })))
        }(GR);
      return pR.map((RR => {
        const tR = RR === JR;
        if (GR.has(RR)) return {
          id: RR,
          active: tR,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const uR = OR[RR],
          ZR = void 0 === uR || uR.firstBuild && GR.size > 0 ? null : uR.key;
        return yR.has(RR) ? {
          id: RR,
          active: tR,
          note: ZR,
          state: "open",
          unlockedBy: null
        } : {
          id: RR,
          active: tR,
          note: ZR,
          state: "locked",
          unlockedBy: vR(RR)
        }
      }))
    }
    const NR = "plotsJournalChanged";
    class DR {
      constructor(RR, JR) {
        this.api = RR, this.placement = JR, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.fK(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = RR => {
          this.placement.start(RR), (0, ZR.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${tR} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      BK(RR) {
        let [, JR, GR] = RR;
        this.pages = xR(JR, GR), MR.n.JK(NR, this.pages, !0)
      }
      openFromServer(RR) {
        let [, JR] = RR;
        this.openRequested = JR, this.gK()
      }
      gK() {
        const RR = this.openRequested;
        null === RR || qR.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, rR.o)() || (0, AR.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = RR, (0, ZR.t)()))
      }
      fK(RR) {
        this.reported.has(RR) || (this.reported.add(RR), this.api.sendCommand(`${tR} report ${RR}`))
      }
    }
    var HR = GR(1378);
    const oR = "KeyJ";

    function cR(RR) {
      let {
        journal: JR
      } = RR;
      const GR = (0, iR.h)(NR, JR.getPages()),
        {
          isTouchScreen: yR
        } = (0, qR.o)(["isTouchScreen"]),
        {
          t: tR
        } = (0, VR.A)(),
        fR = (0, uR.useContext)(XR),
        KR = null !== GR;
      return (0, uR.useEffect)((() => KR ? (0, eR.d)(oR) : void 0), [KR]), (0, WR.e)((RR => KR && RR.code === oR && !RR.repeat && !(0, AR.isTypingInInput)()), (RR => {
        (0, rR.B)(RR, !0, ZR.t)
      })), null === GR ? null : (0, HR.jsx)(aR.d, {
        placement: "topRight",
        children: (0, HR.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, HR.jsxs)("button", {
            ref: fR.journalRef,
            type: "button",
            className: wR()("PlotsJournalButton SmallTextBold", {
              Touch: yR
            }),
            onClick: ZR.t,
            children: [(0, HR.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, HR.jsx)(nR.b, {
                itemName: "Book",
                amount: 0
              })
            }), tR("plotsGame:journalButton"), !yR && (0, HR.jsx)(UR.c, {
              className: "PlotsJournalButtonKey",
              keyCode: oR
            }), "openJournal" === fR.hint && (0, HR.jsx)(LR.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var PR = GR(5844);
    const IR = [0, 90, 180, 270],
      mR = /^(meta\|rot\d)\|([lrud]+)$/,
      zR = "nesw",
      SR = /^meta\|([nesw]*)\|?(Stacked)?$/,
      jR = function(RR) {
        const JR = new WeakMap;
        return (GR, yR) => {
          let tR = JR.get(GR);
          return void 0 === tR && (tR = RR(GR, yR), JR.set(GR, tR)), tR
        }
      }((RR => new dR(RR)));
    class dR {
      constructor(RR) {
        this.blockMetadata = RR, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const JR = new Set(Object.keys(RR).map((JR => RR[JR].id)));
        JR.add(0), this.maxBlockId = Math.max(...JR)
      }
      static
      for (RR) {
        return jR(RR)
      }
      getBlockIdMapping(RR, JR) {
        const GR = this.getBlockIdMappingKey(RR, JR);
        let yR = this.blockIdMappings.get(GR);
        return void 0 === yR && IR.includes(RR) && (yR = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, RR, JR), this.blockIdMappings.set(GR, yR)), yR
      }
      turnBlockId(RR, JR, GR) {
        return this.mapBlockId(this.blockMetadata[RR], JR, this.getRotationMapping(JR, GR), GR)
      }
      getBlockIdMappingKey(RR, JR) {
        return `r${RR}|m${Number(JR)}`
      }
      createBlockIdMapping(RR, JR, GR, yR) {
        const tR = new Uint16Array(JR + 1),
          uR = this.getRotationMapping(GR, yR);
        for (const ZR in RR) {
          const JR = RR[ZR];
          tR[JR.id] = this.mapBlockId(JR, GR, uR, yR)
        }
        return tR
      }
      getRotationMapping(RR, JR) {
        const GR = Math.round(RR / 90),
          yR = new Uint8Array(4);
        for (let tR = 0; tR < 4; tR++) yR[tR] = (4 + tR - GR) % 4;
        if (JR) {
          let RR = yR[0];
          yR[0] = yR[1], yR[1] = RR, RR = yR[2], yR[2] = yR[3], yR[3] = RR
        }
        return yR
      }
      mapBlockId(RR, JR, GR, yR) {
        var tR;
        const {
          blockMetadata: uR
        } = this, ZR = Math.round(JR / 90), {
          id: qR,
          meta: iR
        } = RR, {
          rot: fR,
          rootName: VR,
          metaStr: KR
        } = iR;
        let wR;
        const [, rR, eR] = null !== (tR = SR.exec(KR)) && void 0 !== tR ? tR : [];
        if (void 0 !== rR) {
          var aR, LR;
          wR = null !== (aR = null === (LR = uR[`${VR}|meta|${[zR.split("").filter(((RR,JR)=>rR.split("").some((RR=>{const GR=zR.indexOf(RR);return((yR?3-GR:GR)+ZR)%4===JR})))).join(""),eR].filter(Boolean).join("|")}`]) || void 0 === LR ? void 0 : LR.id) && void 0 !== aR ? aR : qR
        } else if (null === fR) wR = qR;
        else {
          var nR, UR;
          const RR = GR[fR - 1] + 1;
          let JR = KR.replace(`rot${fR}`, `rot${RR}`);
          yR && iR.stairsCorner && (JR = JR.replace(/(Left|Right)$/, (RR => "Left" === RR ? "Right" : "Left"))), yR && "Chest" === VR && (JR = JR.replace(/\|(left|right)$/, ((RR, JR) => "left" === JR ? "|right" : "|left")));
          const tR = mR.exec(JR);
          if (yR && null !== tR) {
            const RR = "lrud".split("").filter((RR => tR[2].includes("l" === RR ? "r" : "r" === RR ? "l" : RR)));
            JR = `${tR[1]}|${RR.join("")}`
          }
          const ZR = `${VR}|${JR}`;
          if (wR = null !== (nR = null === (UR = uR[ZR]) || void 0 === UR ? void 0 : UR.id) && void 0 !== nR ? nR : null, null === wR) {
            const RR = uR[VR];
            wR = RR.rootMetaDesc === ZR ? RR.id : qR
          }
        }
        return wR
      }
    }

    function ER(RR, JR, GR) {
      let {
        xRotationMappedOrigin: yR,
        shouldSwapXZ: tR
      } = GR;
      const uR = tR ? JR : RR;
      return null === yR ? uR : yR - uR
    }

    function YR(RR, JR, GR) {
      let {
        zRotationMappedOrigin: yR,
        shouldSwapXZ: tR
      } = GR;
      const uR = tR ? RR : JR;
      return null === yR ? uR : yR - uR
    }
    const kR = {
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
      QR = new Map;

    function FR(RR, JR) {
      const GR = `${RR}|${JR}`;
      let yR = QR.get(GR);
      if (void 0 === yR) {
        const {
          size: tR,
          palette: uR,
          layers: ZR
        } = kR[RR], qR = 90 === JR || 270 === JR, [iR, fR] = qR ? [tR[2], tR[0]] : [tR[0], tR[2]], VR = function(RR, JR, GR) {
          let yR = null,
            tR = null,
            uR = !1;
          switch (RR) {
            case 0:
              break;
            case 90:
              yR = JR - 1, uR = !0;
              break;
            case 180:
              yR = JR - 1, tR = GR - 1;
              break;
            case 270:
              tR = GR - 1, uR = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${RR}`)
          }
          return {
            xRotationMappedOrigin: yR,
            zRotationMappedOrigin: tR,
            shouldSwapXZ: uR
          }
        }(JR, iR, fR), KR = dR.for(PR.l), wR = uR.map((RR => (0, PR.h)(KR.turnBlockId((0, PR.n)(RR), JR, !1)))), rR = [];
        ZR.forEach(((RR, JR) => {
          RR.split(" ").forEach(((RR, GR) => {
            for (let yR = 0; yR < RR.length; yR++)
              if ("." !== RR[yR]) {
                const tR = [ER(yR, GR, VR), JR, YR(yR, GR, VR)];
                rR.push({
                  offset: tR,
                  block: wR[RR.charCodeAt(yR) - "a".charCodeAt(0)]
                })
              }
          }))
        })), yR = {
          size: [iR, tR[1], fR],
          cells: rR
        }, QR.set(GR, yR)
      }
      return yR
    }
    const TR = "plotsBuildProgressChanged",
      sR = new Map;

    function hR(RR, JR, GR) {
      let yR = 0,
        tR = 0;
      return function(RR) {
        let JR = sR.get(RR);
        if (void 0 === JR) {
          const yR = [];
          for (const {
              offset: JR
            }
            of FR(RR, 0).cells) {
            var GR;
            yR[JR[1]] = (null !== (GR = yR[JR[1]]) && void 0 !== GR ? GR : 0) + 1
          }
          JR = yR, sR.set(RR, JR)
        }
        return JR
      }(RR).forEach(((RR, GR) => {
        yR += RR, GR > JR && (tR += RR)
      })), {
        id: RR,
        filled: yR - tR - GR,
        total: yR
      }
    }
    class RJ {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(RR) {
        this.shown = RR, this.topOpen = 0, null === RR && this.JK(null)
      }
      update(RR, JR, GR) {
        const yR = this.shown;
        null !== yR && (RR >= JR && (this.topOpen = GR), this.JK(hR(yR.id, JR - yR.y, RR >= JR ? GR : this.topOpen + GR)))
      }
      JK(RR) {
        const JR = this.progress;
        (null === RR || void 0 === RR ? void 0 : RR.id) === (null === JR || void 0 === JR ? void 0 : JR.id) && (null === RR || void 0 === RR ? void 0 : RR.filled) === (null === JR || void 0 === JR ? void 0 : JR.filled) && (null === RR || void 0 === RR ? void 0 : RR.total) === (null === JR || void 0 === JR ? void 0 : JR.total) || (this.progress = RR, MR.n.JK(TR, RR, !0))
      }
    }
    const JJ = "plotsPlotChanged",
      GJ = "plotsGuideChanged",
      yJ = "plotsGuideDone";
    class tJ {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(RR) {
        this.plot = RR, MR.n.JK(JJ, RR, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(RR) {
        this.guide = RR, MR.n.JK(GJ, RR, !0)
      }
      receiveGuideDone() {
        MR.n.JK(yJ, void 0, !0)
      }
    }
    var uJ = GR(1366),
      ZJ = GR(39750),
      qJ = GR(37994),
      iJ = GR(1614);

    function fJ(RR) {
      let {
        onSkip: JR,
        className: GR
      } = RR;
      const {
        t: yR
      } = (0, VR.A)();
      return (0, HR.jsx)("button", {
        type: "button",
        className: wR()("PlotsGuideSkipButton", GR),
        ...(0, iJ.f)(JR, "pointerup"),
        children: yR("tutorial:skip")
      })
    }

    function VJ(RR) {
      let {
        target: JR,
        placement: GR,
        spotlight: yR = null,
        children: tR
      } = RR;
      const {
        t: ZR
      } = (0, VR.A)(), qR = (0, uR.useRef)(JR);
      return qR.current = JR, (0, uJ.u)("popup", qR, null === yR ? null : yR.onSkip, null !== yR, null, "controller:menusSkipTutorial"), (0, HR.jsxs)(qJ.d, {
        target: JR,
        placement: GR,
        className: wR()("PlotsGuideBubble", {
          Passive: null === yR
        }),
        spotlight: null !== yR,
        spotlightMargin: 30,
        children: [(0, HR.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, HR.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: ZJ,
            alt: "",
            draggable: !1
          }), (0, HR.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: ZR("plotsGame:maverickName")
          }), null !== yR && (0, HR.jsx)(fJ, {
            onSkip: yR.onSkip
          })]
        }), (0, HR.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: tR
        })]
      })
    }

    function KJ(RR) {
      let {
        className: JR,
        icon: GR,
        title: yR,
        children: tR
      } = RR;
      return (0, HR.jsxs)("div", {
        className: wR()("PlotsCard", JR),
        role: "status",
        children: [(0, HR.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, HR.jsx)(LR.d, {
            name: GR
          })
        }), (0, HR.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, HR.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: yR
          }), tR]
        })]
      })
    }

    function wJ(RR) {
      let {
        progress: JR,
        goal: GR
      } = RR;
      const yR = Math.min(JR, GR);
      return (0, HR.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, HR.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": GR,
          "aria-valuenow": yR,
          children: (0, HR.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${yR/GR})`
            }
          })
        }), (0, HR.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [yR, "/", GR]
        })]
      })
    }

    function rJ(RR) {
      let {
        progress: JR,
        guide: GR
      } = RR;
      const {
        t: yR
      } = (0, VR.A)(), {
        isTouchScreen: tR
      } = (0, qR.o)(["isTouchScreen"]), uR = JR.filled < 5;
      return (0, HR.jsxs)(HR.Fragment, {
        children: [(uR || JR.total - JR.filled <= 5) && (0, HR.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, HR.jsx)("div", {
            ref: GR.bindHand,
            className: "PlotsGuideHand",
            children: (0, HR.jsx)(LR.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, HR.jsx)(aR.d, {
          placement: "bottom",
          children: (0, HR.jsxs)(KJ, {
            icon: "hammer",
            title: yR(gR(JR.id).displayName.translationKey),
            children: [uR && (0, HR.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: tR ? yR("plotsGame:guideBuildTouch") : eJ(yR)
            }), (0, HR.jsx)(wJ, {
              progress: JR.filled,
              goal: JR.total
            })]
          })
        })]
      })
    }

    function eJ(RR) {
      const JR = fR.t["alt-fire"][0];
      return "Mouse3" === JR ? RR("plotsGame:guideBuildRightClick") : RR("plotsGame:guideBuildKeys", {
        key: (0, fR.m)(JR)
      })
    }

    function aJ() {
      return (0, HR.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, HR.jsx)(LR.d, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var LJ = GR(1383),
      nJ = GR(3701),
      UJ = GR(39571),
      WJ = GR(39329),
      AJ = GR(38034),
      CJ = GR(5886),
      XJ = GR(5907),
      MJ = GR(377),
      BJ = GR(38977);
    const lJ = new Map([
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
      pJ = [...AJ.b.blockRemoveActionRoots, ...WJ.d, ...CJ.i, "Board", "Code Block", "Custom Lobby Block"],
      gJ = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let bJ = null;

    function vJ() {
      return bJ ??= function() {
        const RR = OJ(),
          JR = Math.max(...RR.map((RR => PR.l[RR].id))) + 1,
          GR = new Int32Array(JR),
          yR = new Int32Array(JR),
          tR = new Uint8Array(JR).fill(1),
          uR = new Uint8Array(JR),
          ZR = new Uint8Array(JR),
          qR = new Array(JR).fill("Air"),
          iR = new Map,
          fR = RR => {
            let JR = iR.get(RR);
            return void 0 === JR && (JR = iR.size + 1, iR.set(RR, JR)), JR
          },
          VR = new Set(pJ);
        for (const wR of RR) {
          var KR;
          const {
            id: RR,
            meta: JR,
            altActionable: iR,
            canBePlacedOver: rR
          } = PR.l[wR];
          GR[RR] = fR(xJ(wR));
          const eR = JR.stairsCorner;
          if (null === eR) yR[RR] = GR[RR];
          else {
            const GR = eR.endsWith("Right");
            yR[RR] = fR(`${JR.rootName}|rot${GR?JR.rot%4+1:JR.rot}|${JR.halfblockPlacement}|${eR.replace("Right","Left")}`)
          }
          tR[RR] = rR ? 1 : 0, uR[RR] = iR || null !== JR.open || wR in BJ.c || VR.has(JR.rootName) || void 0 !== (0, WJ.g)(JR.rootName) ? 1 : 0;
          const {
            rootName: aR
          } = JR;
          ZR[RR] = null !== JR.open || WJ.d.includes(aR) || aR.includes("Bookshelf") || aR.includes("Mailbox") ? 1 : 0, qR[RR] = null !== (KR = (0, UJ.g)(RR)) && void 0 !== KR ? KR : aR
        }
        return {
          kinds: GR,
          shapes: yR,
          empty: tR,
          inUse: uR,
          ownAltActionMessage: ZR,
          placingItems: qR
        }
      }(), bJ
    }

    function OJ() {
      return Object.keys(PR.l).filter((RR => PR.l[RR].name === RR))
    }

    function xJ(RR) {
      var JR;
      const GR = PR.l[RR],
        {
          rootName: yR,
          rot: tR
        } = GR.meta,
        [, ...uR] = (null !== (JR = GR.rootMetaDesc) && void 0 !== JR ? JR : RR).split("|"),
        ZR = uR.filter((RR => !("meta" === RR || gJ.test(RR) || (0, XJ.G)(GR) && /^[nesw]+$/.test(RR) || CJ.i.includes(yR) && /^[lrud]+$/.test(RR) || MJ.B.includes(yR) && /^(left|right)$/.test(RR))));
      return [yR, ...ZR].map((RR => "fenceGate" === GR.model && RR === `rot${tR}` ? "rot" + ((tR - 1) % 2 + 1) : RR)).join("|")
    }

    function NJ(RR, JR) {
      const {
        kinds: GR,
        shapes: yR
      } = vJ();
      return GR[RR] === GR[JR] || yR[RR] === yR[JR]
    }

    function DJ(RR) {
      return 1 === vJ().empty[RR]
    }

    function HJ(RR) {
      return vJ().placingItems[RR]
    }

    function oJ(RR) {
      return lJ.get(PR.l[RR].meta.rootName)
    }
    var cJ = GR(40792),
      PJ = GR(203);
    class IJ {
      constructor(RR) {
        this.api = RR, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(RR) {
        const JR = PJ.g.LK;
        this.chunks = [];
        for (let GR = 0; GR < RR.length; GR += 3) {
          const yR = Math.floor(RR[GR] / JR),
            tR = Math.floor(RR[GR + 1] / JR),
            uR = Math.floor(RR[GR + 2] / JR);
          this.watches(yR, tR, uR) || this.chunks.push(yR, tR, uR)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const RR = performance.now();
        if (RR - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = RR;
        let JR = !1;
        for (let GR = 0; GR < this.chunks.length; GR += 3) {
          const RR = this.api.getChunkVersion(this.chunks[GR], this.chunks[GR + 1], this.chunks[GR + 2]);
          this.versions[GR / 3] !== RR && (this.versions[GR / 3] = RR, JR = !0)
        }
        return JR
      }
      watches(RR, JR, GR) {
        for (let yR = 0; yR < this.chunks.length; yR += 3)
          if (this.chunks[yR] === RR && this.chunks[yR + 1] === JR && this.chunks[yR + 2] === GR) return !0;
        return !1
      }
    }
    var mJ = GR(40788);

    function zJ(RR, JR, GR, yR, tR) {
      if (!RR.isBlockInLoadedChunk(JR, yR - 6, GR) || !RR.isBlockInLoadedChunk(JR, yR + 6 + tR, GR) || !RR.canModifyBlockAt(JR, yR, GR)) return NaN;
      let uR = yR - 1;
      if (0 !== RR.getBlockId(JR, uR, GR)) {
        for (; uR < yR + 6 && 0 !== RR.getBlockId(JR, uR + 1, GR);) uR++;
        return uR
      }
      for (; uR > yR - 6;)
        if (uR--, 0 !== RR.getBlockId(JR, uR, GR)) return uR;
      return NaN
    }

    function SJ(RR, JR, GR, yR, tR) {
      let uR = 0;
      for (let ZR = yR + 1; ZR <= yR + tR; ZR++) 0 !== RR.getBlockId(JR, ZR, GR) && uR++;
      return uR
    }

    function jJ(RR) {
      const JR = new Map;
      for (const ZR of RR) {
        var GR;
        if (Number.isNaN(ZR)) return null;
        JR.set(ZR, (null !== (GR = JR.get(ZR)) && void 0 !== GR ? GR : 0) + 1)
      }
      let yR = NaN,
        tR = 0;
      for (const [ZR, qR] of JR)(qR > tR || qR === tR && ZR < yR) && (yR = ZR, tR = qR);
      let uR = 0;
      for (const ZR of RR) uR += Math.abs(ZR - yR);
      return uR
    }

    function dJ(RR, JR, GR, yR) {
      const {
        eye: tR,
        forward: uR,
        tanHalfFovX: ZR,
        tanHalfFovY: qR
      } = RR, [iR, fR] = function(RR) {
        let [JR, GR, yR] = RR;
        const tR = Math.hypot(JR, yR),
          [uR, ZR] = [yR / tR, -JR / tR];
        return [
          [uR, 0, ZR],
          [GR * ZR, yR * uR - JR * ZR, -GR * uR]
        ]
      }(uR), [VR, KR] = [JR * ZR, GR * qR], wR = uR[0] + VR * iR[0] + KR * fR[0], rR = uR[1] + KR * fR[1], eR = uR[2] + VR * iR[2] + KR * fR[2], aR = (yR - tR[1]) / rR;
      return aR > 0 && aR < 1 / 0 ? [tR[0] + aR * wR, tR[2] + aR * eR] : null
    }
    const EJ = "plotsBlueprintPlacementChanged",
      YJ = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class kJ {
      constructor(RR, JR) {
        this.api = RR, this.localPlayerId = JR, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = RR => {
          var JR, GR, yR, uR;
          const ZR = null !== (JR = null === (GR = this.placing) || void 0 === GR ? void 0 : GR.rotation) && void 0 !== JR ? JR : 0,
            {
              size: qR
            } = FR(RR, ZR),
            iR = this.api.vW(this.localPlayerId),
            [fR, VR] = null !== (yR = null !== (uR = function(RR, JR, GR, yR) {
              const [tR, uR, ZR] = JR, [qR, iR, fR] = [Math.floor(GR[0]), Math.floor(GR[1]), Math.floor(GR[2])], VR = 6 + Math.max(tR, ZR) / 2, [KR, wR] = [Math.ceil(VR + tR / 2), Math.ceil(VR + ZR / 2)], [rR, eR] = [qR - KR, fR - wR], [aR, LR] = [2 * KR + 1, 2 * wR + 1], nR = new Float64Array(aR * LR), UR = new Uint16Array(aR * LR);
              for (let MR = 0; MR < aR; MR++)
                for (let JR = 0; JR < LR; JR++) {
                  const GR = zJ(RR, rR + MR, eR + JR, iR, uR);
                  nR[MR * LR + JR] = GR, Number.isNaN(GR) || (UR[MR * LR + JR] = SJ(RR, rR + MR, eR + JR, GR, uR))
                }
              const WR = Math.hypot(yR[0], yR[2]),
                AR = [];
              let CR = null,
                XR = 1 / 0;
              for (let MR = 0; MR + tR <= aR; MR++)
                for (let RR = 0; RR + ZR <= LR; RR++) {
                  const [JR, uR] = [rR + MR, eR + RR], [iR, KR] = [JR + tR / 2 - GR[0], uR + ZR / 2 - GR[2]], wR = Math.hypot(iR, KR);
                  if (wR > VR || qR >= JR - 2 && qR < JR + tR + 2 && fR >= uR - 2 && fR < uR + ZR + 2) continue;
                  AR.length = 0;
                  let aR = 0;
                  for (let GR = 0; GR < tR; GR++)
                    for (let JR = 0; JR < ZR; JR++) AR.push(nR[(MR + GR) * LR + RR + JR]), aR += UR[(MR + GR) * LR + RR + JR];
                  const BR = jJ(AR);
                  if (null === BR) continue;
                  const lR = wR + 3 * (BR + aR) + (1 - (0 === WR ? 1 : (iR * yR[0] + KR * yR[2]) / (wR * WR))) / 2 * 6;
                  lR < XR && (XR = lR, CR = [JR, uR])
                }
              return CR
            }(this.api, qR, iR, this.camera.forward)) && void 0 !== uR ? uR : this.cornerOnTarget(qR)) && void 0 !== yR ? yR : [Math.floor(iR[0]) + 2, Math.floor(iR[2])];
          this.placing = {
            id: RR,
            rotation: ZR,
            corner: [fR, this.playerLevel(), VR],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${tR} preview`)
        }, this.rotate = () => {
          const {
            id: RR,
            rotation: JR,
            corner: GR
          } = this.placing, tR = yR[(yR.indexOf(JR) + 1) % yR.length], [uR, , ZR] = FR(RR, JR).size, [qR, , iR] = FR(RR, tR).size;
          this.moveTo(GR[0] + Math.floor(uR / 2) - Math.floor(qR / 2), GR[2] + Math.floor(ZR / 2) - Math.floor(iR / 2), tR)
        }, this.hoverAt = (RR, JR) => {
          this.placing.hover = [RR, JR], this.moveCentreTo(this.camera, RR, JR)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (RR, JR) => {
          const GR = this.placing,
            {
              eye: yR,
              forward: tR,
              tanHalfFovX: uR,
              tanHalfFovY: ZR
            } = this.camera,
            qR = {
              eye: [yR[0], yR[1], yR[2]],
              forward: [tR[0], tR[1], tR[2]],
              tanHalfFovX: uR,
              tanHalfFovY: ZR
            },
            iR = GR.corner[1],
            fR = dJ(qR, RR, JR, iR);
          GR.hover = null, GR.drag = fR && {
            view: qR,
            ground: fR,
            corner: [GR.corner[0], GR.corner[2]],
            level: iR
          }
        }, this.dragTo = (RR, JR) => {
          const GR = this.placing.drag,
            yR = GR && dJ(GR.view, RR, JR, GR.level);
          null !== GR && null !== yR && this.moveTo(GR.corner[0] + Math.round(yR[0] - GR.ground[0]), GR.corner[1] + Math.round(yR[1] - GR.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const RR = this.view;
          RR.waiting || (RR.blocked ? this.JK({
            ...RR,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const RR = this.placing,
            {
              id: JR,
              rotation: GR,
              corner: yR
            } = RR;
          this.api.sendCommand(`${tR} place ${JR} ${yR.join(" ")} ${GR}`), RR.sent = {
            atMs: performance.now(),
            corner: [...yR],
            rotation: GR,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${tR} preview off`))
        }, this.chunkWatch = new IJ(RR), this.meshes = new mJ.i(RR)
      }
      getView() {
        return this.view
      }
      gK() {
        const RR = this.placing;
        null !== RR && (null !== RR.sent && !RR.sent.timedOut && performance.now() - RR.sent.atMs > 3e3 ? (RR.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(RR) || this.chunkWatch.changed() || this.view.settled !== QJ(RR, this.view.blocked)) && this.update())
      }
      afterRender(RR) {
        ! function(RR, JR) {
          for (let GR = 0; GR < 3; GR++) JR.eye[GR] = RR.cameraPosition[GR], JR.forward[GR] = RR.cameraDirection[GR];
          JR.tanHalfFovX = RR.tanHalfFovX, JR.tanHalfFovY = RR.tanHalfFovY
        }(RR, this.camera);
        const JR = this.placing;
        null !== JR && null !== JR.hover && this.moveCentreTo(this.camera, JR.hover[0], JR.hover[1])
      }
      BK(RR) {
        const JR = this.placing;
        if (null === JR || null === JR.sent || "active" !== RR[0]) return;
        const {
          sent: GR
        } = JR, [, yR, tR, uR, ZR, qR, iR] = RR;
        tR && yR === JR.id && iR === GR.rotation && uR === GR.corner[0] && ZR === GR.corner[1] && qR === GR.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(RR) {
        let [JR, , GR] = RR;
        const yR = this.api.getTargetedBlock();
        if (null === yR) return null;
        const [tR, , uR] = yR.position;
        return [tR - Math.floor(JR / 2), uR - Math.floor(GR / 2)]
      }
      playerLevel() {
        var RR;
        const [JR, GR, yR] = this.api.vW(this.localPlayerId);
        if (null !== (RR = this.api.getLocalPlayerMovement()) && void 0 !== RR && RR.onGround) return Math.ceil(GR - .01);
        const [tR, uR, ZR] = [Math.floor(JR), Math.floor(GR), Math.floor(yR)];
        for (let qR = uR; qR >= uR - 2; qR--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(tR, qR, ZR))) return qR + 1;
        return uR
      }
      followPlayerLevel(RR) {
        if (FJ(RR)) return !1;
        const JR = this.playerLevel();
        return JR !== RR.corner[1] && (RR.corner[1] = JR, !0)
      }
      moveCentreTo(RR, JR, GR) {
        const yR = this.placing,
          tR = dJ(RR, JR, GR, yR.corner[1]);
        if (null !== tR) {
          const [RR, , JR] = FR(yR.id, yR.rotation).size;
          this.moveTo(Math.round(tR[0] - RR / 2), Math.round(tR[1] - JR / 2))
        }
      }
      moveTo(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const yR = this.placing;
        if (FJ(yR)) return;
        const [tR, uR, ZR] = yR.corner;
        if (this.centreOnPlot(tR, ZR) && !this.centreOnPlot(RR, JR, GR))
          if (this.centreOnPlot(RR, ZR, GR)) JR = ZR;
          else {
            if (!this.centreOnPlot(tR, JR, GR)) return;
            RR = tR
          } RR === tR && JR === ZR && GR === yR.rotation || (yR.rotation = GR, yR.corner = [RR, uR, JR], yR.moved = !0, yR.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: yR,
          corner: tR
        } = this.placing, [uR, , ZR] = FR(yR, GR).size;
        return this.api.canModifyBlockAt(RR + Math.floor(uR / 2), tR[1], JR + Math.floor(ZR / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.JK(null)
      }
      update() {
        const {
          id: RR,
          rotation: JR,
          corner: GR,
          refusals: yR
        } = this.placing, tR = new mJ.g, uR = [];
        let ZR = !1,
          qR = 0;
        for (const {
            offset: KR,
            block: wR
          }
          of FR(RR, JR).cells) {
          const [RR, JR, yR] = [GR[0] + KR[0], GR[1] + KR[1], GR[2] + KR[2]];
          uR.push(RR, JR, yR);
          const iR = !this.api.canModifyBlockAt(RR, JR, yR),
            fR = this.api.getBlockId(RR, JR, yR),
            VR = !DJ(fR) && !NJ(this.api.blockNameToBlockId(wR), fR);
          ZR ||= iR, qR += VR ? 1 : 0, iR || VR ? tR.add(RR, JR, yR, mJ.d, mJ.c) : tR.add(RR, JR, yR, oJ(wR), YJ, (0, cJ.c)(wR))
        }
        this.chunkWatch.watch(uR), this.meshes.show(tR.toArray());
        const iR = this.view,
          fR = FJ(this.placing),
          VR = QJ(this.placing, ZR);
        (null === iR || void 0 === iR ? void 0 : iR.id) === RR && iR.blocked === ZR && iR.toClear === qR && iR.waiting === fR && iR.refusals === yR && iR.settled === VR || this.JK({
          id: RR,
          blocked: ZR,
          toClear: qR,
          waiting: fR,
          refusals: yR,
          settled: VR
        })
      }
      JK(RR) {
        this.view = RR, MR.n.JK(EJ, RR, !0)
      }
    }

    function QJ(RR, JR) {
      let {
        moved: GR,
        stillSinceMs: yR
      } = RR;
      return !JR && performance.now() - yR >= (GR ? 1500 : 6e3)
    }

    function FJ(RR) {
      let {
        sent: JR
      } = RR;
      return null !== JR && !JR.timedOut
    }
    var TJ = GR(5347);
    class sJ {
      constructor(RR) {
        this.placement = RR, this.press = null
      }
      down(RR) {
        if (null !== this.press) return !1;
        const {
          id: JR,
          mouse: GR,
          x: yR,
          y: tR,
          atMs: uR
        } = RR;
        return this.press = {
          id: JR,
          mouse: GR,
          x: yR,
          y: tR,
          atMs: uR,
          moved: !1
        }, GR || this.placement.beginDrag(RR.ndcX, RR.ndcY), !0
      }
      move(RR) {
        const JR = this.press;
        null !== JR && JR.id === RR.id && (JR.moved ||= Math.hypot(RR.x - JR.x, RR.y - JR.y) > 8), RR.mouse ? this.placement.hoverAt(RR.ndcX, RR.ndcY) : (null === JR || void 0 === JR ? void 0 : JR.id) === RR.id && this.placement.dragTo(RR.ndcX, RR.ndcY)
      }
      up(RR) {
        const JR = this.press;
        (null === JR || void 0 === JR ? void 0 : JR.id) === RR.id && (this.move(RR), this.end(), !JR.moved && (JR.mouse || RR.atMs - JR.atMs <= 250) && this.placement.tap())
      }
      cancel(RR) {
        var JR;
        (null === (JR = this.press) || void 0 === JR ? void 0 : JR.id) === RR && this.end()
      }
      leave(RR) {
        let {
          id: JR,
          mouse: GR
        } = RR;
        GR && this.placement.endHover(), this.cancel(JR)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const hJ = "PlotsPlacementLayer";

    function RG(RR) {
      let {
        placement: JR
      } = RR;
      return null === (0, iR.h)(EJ, JR.getView()) ? null : (0, HR.jsx)(JG, {
        placement: JR
      })
    }

    function JG(RR) {
      let {
        placement: JR
      } = RR;
      (0, TJ.d)(!0, !0, hJ);
      const GR = (0, uR.useMemo)((() => new sJ(JR)), [JR]);
      return (0, HR.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: RR => {
          "mouse" === RR.pointerType && 0 !== RR.button || !GR.down(GG(RR)) || RR.currentTarget.setPointerCapture(RR.pointerId)
        },
        onPointerMove: RR => {
          GR.move(GG(RR))
        },
        onPointerUp: RR => {
          GR.up(GG(RR))
        },
        onPointerCancel: RR => {
          GR.cancel(RR.pointerId)
        },
        onLostPointerCapture: RR => {
          GR.cancel(RR.pointerId)
        },
        onPointerLeave: RR => {
          GR.leave(GG(RR))
        },
        "aria-hidden": !0
      })
    }

    function GG(RR) {
      const {
        left: JR,
        top: GR,
        width: yR,
        height: tR
      } = RR.currentTarget.getBoundingClientRect();
      return {
        id: RR.pointerId,
        mouse: "mouse" === RR.pointerType,
        x: RR.clientX,
        y: RR.clientY,
        ndcX: (RR.clientX - JR) / yR * 2 - 1,
        ndcY: 1 - (RR.clientY - GR) / tR * 2,
        atMs: RR.timeStamp
      }
    }

    function yG() {
      return (0, LJ.n)().some((RR => RR !== LJ.d && RR !== hJ))
    }
    const tG = 2500;

    function uG(RR) {
      let {
        hud: JR,
        guide: GR,
        tracker: yR,
        placement: tR,
        children: ZR
      } = RR;
      const {
        t: KR
      } = (0, VR.A)(), {
        isTouchScreen: wR
      } = (0, qR.o)(["isTouchScreen"]), rR = (0, iR.h)(GJ, JR.getGuide()), eR = (0, iR.h)(JJ, JR.getPlot()), aR = (0, iR.h)(TR, yR.get()), LR = function(RR) {
        const {
          openInGameMenuName: JR,
          openEverythingMenuName: GR,
          loadingOverlayVisible: yR
        } = (0, qR.o)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), tR = (0, nJ.c)(), [ZR, fR] = (0, uR.useState)(yG);
        (0, uR.useEffect)((() => {
          const RR = () => {
            fR(yG())
          };
          RR();
          const JR = (0, LJ.k)(RR),
            GR = (0, LJ.i)(RR);
          return () => {
            JR(), GR()
          }
        }), []);
        const VR = (0, iR.h)(EJ, RR.getView()),
          KR = "clientGame" === JR;
        return {
          hudHidden: tR || yR,
          journalOpen: KR,
          covered: ZR || null !== GR || null !== JR && !KR,
          placing: null === VR ? null : VR.settled ? "placeBuild" : "placeSpot"
        }
      }(tR), nR = function(RR, JR, GR) {
        return "none" === RR[0] || GR.hudHidden || GR.journalOpen || GR.covered ? null : null !== GR.placing ? GR.placing : null !== JR ? "build" : "choose" === RR[1] ? "openJournal" : null
      }(rR, null === aR ? null : aR.id, LR), UR = function() {
        const [RR, JR] = (0, uR.useState)(null), [GR, yR] = (0, uR.useState)(!1);
        return (0, iR.f)(yJ, (() => {
          JR(performance.now())
        })), (0, uR.useEffect)((() => {
          if (null === RR) return;
          const JR = window.setTimeout((() => {
              yR(!0)
            }), tG),
            GR = window.setTimeout((() => {
              yR(!1)
            }), 7500);
          return () => {
            window.clearTimeout(JR), window.clearTimeout(GR)
          }
        }), [RR]), GR
      }() && !LR.hudHidden && !LR.covered && !LR.journalOpen && null === LR.placing, [WR, AR] = (0, uR.useState)(!1);
      (0, uR.useEffect)((() => {
        LR.journalOpen && AR(!0)
      }), [LR.journalOpen]);
      const [CR, MR] = (0, uR.useState)(null), [BR, lR] = (0, uR.useState)(null), [pR, gR] = (0, uR.useState)(null), bR = (0, uR.useMemo)((() => ({
        hint: nR,
        journalRef: MR,
        placementCardRef: lR,
        buildRef: gR
      })), [nR]), vR = "plot" === eR[0] && "own" === eR[5], OR = wR && !WR && vR ? {
        onSkip: GR.skip
      } : null;
      return (0, HR.jsxs)(XR.Provider, {
        value: bR,
        children: [ZR, "openJournal" === nR && null !== CR && (0, HR.jsx)(VJ, {
          target: CR,
          placement: "left",
          spotlight: OR,
          children: wR ? KR("plotsGame:guideOpenJournal") : KR("plotsGame:guideOpenJournalKeys", {
            key: (0, fR.m)(oR)
          })
        }), "placeSpot" === nR && null !== BR && (0, HR.jsxs)(HR.Fragment, {
          children: [wR && (0, HR.jsx)(aJ, {}), (0, HR.jsx)(VJ, {
            target: BR,
            placement: "top",
            children: KR(wR ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === nR && null !== pR && null !== BR && (0, HR.jsx)(VJ, {
          target: wR ? pR : BR,
          placement: "top",
          children: KR(wR ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === nR && null !== aR && (0, HR.jsx)(rJ, {
          progress: aR,
          guide: GR
        }), UR && null !== CR && (0, HR.jsx)(VJ, {
          target: CR,
          placement: "left",
          children: KR("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var ZG = GR(39672),
      qG = GR(39679);
    class iG {
      constructor(RR, JR, GR) {
        this.api = RR, this.localPlayerId = JR, this.nextCell = GR, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = RR => {
          this.hand = RR
        }
      }
      afterRender(RR) {
        const JR = this.hand;
        if (null === JR) return;
        const GR = this.nextCell.get();
        if (null === GR) return void(0, ZG.h)(JR, !0);
        const yR = (0, qG.d)(JR, RR, this.api.getPositionView(this.localPlayerId), GR, 1, 40);
        null !== yR && (0, ZG.d)(JR, Math.round(100 * yR.x) / 100, Math.round(100 * yR.y) / 100)
      }
    }
    var fG = GR(1590),
      VG = GR(5338),
      KG = GR(1187);
    const wG = {
        farm_hut: GR.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: GR.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: GR.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: GR.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: GR.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: GR.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: GR.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: GR.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: GR.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: GR.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: GR.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: GR.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      rG = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      eG = ["market_stand", "rusticHome_tent", "farm_hut"].map((RR => ({
        id: RR,
        blocks: FR(RR, 0).cells.length
      }))).sort(((RR, JR) => RR.blocks - JR.blocks)).map(((RR, JR) => ({
        ...RR,
        effortKey: rG[JR]
      })));

    function aG(RR) {
      let {
        onBuild: JR
      } = RR;
      const {
        t: GR
      } = (0, VR.A)();
      return (0, HR.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, HR.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, HR.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: GR("plotsGame:guidePickTitle")
          }), (0, HR.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, HR.jsx)("img", {
              src: ZJ,
              alt: "",
              draggable: !1
            }), GR("plotsGame:guidePickNote")]
          }), (0, HR.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: eG.map((RR => {
              let {
                id: yR,
                blocks: tR,
                effortKey: uR
              } = RR;
              return (0, HR.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, HR.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    JR(yR)
                  },
                  children: (0, HR.jsx)("img", {
                    src: wG[yR],
                    alt: "",
                    draggable: !1
                  })
                }), (0, HR.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, HR.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, HR.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: GR(gR(yR).displayName.translationKey)
                    }), (0, HR.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: GR(uR)
                    }), (0, HR.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: GR("plotsGame:journalBlocks", {
                        blocks: String(tR)
                      })
                    })]
                  }), (0, HR.jsx)(fG.n, {
                    onClick: () => {
                      JR(yR)
                    },
                    children: GR("plotsGame:placementBuild")
                  })]
                })]
              }, yR)
            }))
          })]
        })
      })
    }

    function LG(RR) {
      let {
        direction: JR,
        disabled: GR,
        onTurn: yR
      } = RR;
      const {
        t: tR
      } = (0, VR.A)();
      return (0, HR.jsx)("div", {
        className: wR()("PlotsJournalArrow", JR),
        children: (0, HR.jsx)(fG.g, {
          disabled: GR,
          ariaLabel: tR("Forward" === JR ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            yR(JR)
          },
          children: (0, HR.jsx)(LR.d, {
            name: "angle-up"
          })
        })
      })
    }
    const nG = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function UG(RR) {
      let {
        page: JR,
        building: GR,
        onBuild: yR,
        onPutAway: tR
      } = RR;
      const {
        t: uR
      } = (0, VR.A)(), {
        displayName: ZR,
        tier: qR
      } = gR(JR.id), iR = FR(JR.id, 0).cells.length, fR = "locked" === JR.state, KR = GR ? fG.g : fG.n;
      return (0, HR.jsxs)("article", {
        className: wR()("PlotsJournalPage", {
          Locked: fR
        }),
        children: [(0, HR.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: uR(ZR.translationKey)
        }), (0, HR.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [uR(nG[qR]), " \xb7 ", uR("plotsGame:journalBlocks", {
            blocks: String(iR)
          })]
        }), (0, HR.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [pR.map((RR => (0, HR.jsx)("img", {
            className: wR()({
              Shown: RR === JR.id
            }),
            src: wG[RR],
            alt: "",
            draggable: !1
          }, RR))), "completed" === JR.state && (0, HR.jsx)("span", {
            className: "PlotsJournalStamp",
            children: uR("plotsGame:journalBuilt")
          }), fR && (0, HR.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, HR.jsx)(LR.d, {
              name: "lock"
            })
          })]
        }), null !== JR.note && (0, HR.jsx)("p", {
          className: "PlotsJournalNote",
          children: uR(JR.note)
        }), (0, HR.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === JR.state && (0, HR.jsx)("p", {
            className: "PlotsJournalHint",
            children: uR("plotsGame:journalLocked", {
              name: uR(gR(JR.unlockedBy).displayName.translationKey)
            })
          }), JR.active && (0, HR.jsxs)(HR.Fragment, {
            children: [(0, HR.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: uR("plotsGame:journalBuilding")
            }), (0, HR.jsx)(fG.i, {
              onClick: tR,
              children: uR("plotsGame:journalPutAway")
            })]
          }), !fR && !JR.active && (0, HR.jsx)(KR, {
            onClick: () => {
              yR(JR.id)
            },
            children: uR("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function WG(RR) {
      let {
        className: JR,
        page: GR,
        hidden: yR,
        building: tR,
        journal: uR
      } = RR;
      return (0, HR.jsxs)("div", {
        ref: RR => {
          null !== RR && (RR.inert = yR)
        },
        className: wR()("PlotsJournalSide", JR),
        children: [void 0 !== GR && (0, HR.jsx)(UG, {
          page: GR,
          building: tR,
          onBuild: uR.build,
          onPutAway: uR.putAway
        }), void 0 === GR && (0, HR.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var AG = GR(2102);

    function CG(RR) {
      return Math.cos((0, AG.g)(RR))
    }

    function XG(RR) {
      return (0, AG.y)(Math.acos(MJ.e.clamp(RR, -1, 1)))
    }

    function MG(RR, JR, GR, yR, tR) {
      const uR = Math.abs(JR - RR),
        ZR = (0, AG.y)(tR / (GR * Math.abs(Math.sin((0, AG.g)(RR))))),
        qR = 450 * Math.min(1, uR / yR),
        iR = ZR > 0 ? 3 * uR / ZR : 1 / 0;
      return Math.round(Math.max(120, Math.min(qR, iR)))
    }
    class BG {
      constructor() {
        this.samples = []
      }
      add(RR, JR) {
        for (this.samples.push({
            x: RR,
            at: JR
          }); JR - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const RR = this.samples[0],
          JR = this.samples[this.samples.length - 1];
        return JR.at > RR.at ? (JR.x - RR.x) / (JR.at - RR.at) : 0
      }
    }

    function lG(RR) {
      return XG(new DOMMatrixReadOnly(getComputedStyle(RR).transform).m11)
    }

    function pG(RR, JR) {
      RR.style.transform = `rotateY(${-JR}deg)`, RR.classList.add("Turning")
    }

    function gG(RR, JR, GR) {
      const [yR, tR] = (0, uR.useState)(GR), ZR = (0, uR.useRef)(null), qR = (0, uR.useRef)(null), iR = (0, uR.useRef)({
        Forward: null,
        Back: null
      }), fR = JR ? 2 : 1, VR = JR ? 180 : 90, KR = yR - yR % fR, wR = KR > 0, rR = KR + fR < RR, eR = (0, uR.useCallback)((() => {
        const RR = qR.current;
        return null === RR ? KR : (qR.current = null, RR.animation.cancel(), (JR = iR.current[RR.direction]).style.transform = "", JR.classList.remove("Turning"), null === RR.next ? KR : (tR(RR.next), RR.next));
        var JR
      }), [KR]), aR = (0, uR.useCallback)(((RR, JR, GR, yR) => {
        const tR = iR.current[RR],
          uR = lG(tR),
          ZR = JR === ("Forward" === RR) ? VR : 0;
        pG(tR, ZR);
        const KR = tR.animate([{
          transform: `rotateY(${-uR}deg)`
        }, {
          transform: `rotateY(${-ZR}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : MG(uR, ZR, tR.offsetWidth, VR, ZR > uR ? -GR : GR),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        qR.current = {
          direction: RR,
          animation: KR,
          next: JR ? yR + ("Forward" === RR ? fR : -fR) : null
        }, KR.onfinish = () => {
          var RR;
          (null === (RR = qR.current) || void 0 === RR ? void 0 : RR.animation) === KR && eR()
        }
      }), [fR, VR, eR]), LR = (0, uR.useCallback)((JR => {
        if (null !== ZR.current) return;
        const GR = eR();
        ("Forward" === JR ? GR + fR < RR : GR > 0) && aR(JR, !0, 0, GR)
      }), [eR, aR, fR, RR]);
      (0, uR.useEffect)((() => () => {
        var RR;
        null === (RR = qR.current) || void 0 === RR || RR.animation.cancel()
      }), []), (0, uR.useEffect)((() => {
        const RR = RR => {
          var JR;
          RR.pointerId !== (null === (JR = ZR.current) || void 0 === JR ? void 0 : JR.pointerId) || ZR.current.following || (ZR.current = null)
        };
        return window.addEventListener("pointerup", RR), () => {
          window.removeEventListener("pointerup", RR)
        }
      }), []);
      const nR = (RR, JR, GR) => {
          const yR = function(RR, JR, GR, yR) {
            return (RR < 0 ? GR : yR) ? MJ.e.clampAbs(RR, JR) : Math.sign(RR) * JR * (1 - 1 / (.55 * Math.abs(RR) / JR + 1))
          }(RR.base + GR, fR * RR.width, rR, wR);
          return "Forward" === JR ? Math.min(yR, 0) : Math.max(yR, 0)
        },
        UR = (RR, JR) => {
          const GR = ZR.current;
          if (ZR.current = null, null === GR.direction) return;
          GR.speed.add(RR, JR);
          const yR = GR.speed.get(),
            tR = nR(GR, GR.direction, RR - GR.x);
          aR(GR.direction, null !== function(RR, JR, GR, yR, tR) {
            if (Math.abs(JR) >= .3 ? Math.sign(JR) !== Math.sign(RR) : Math.abs(RR) < .5 * GR) return null;
            const uR = RR < 0 ? "Forward" : "Back";
            return ("Forward" === uR ? yR : tR) ? uR : null
          }(tR, yR, fR * GR.width, rR, wR), yR, KR)
        },
        WR = {
          onPointerDown: RR => {
            var JR;
            if (!RR.isPrimary || 0 !== RR.button || null !== qR.current && null !== RR.target.closest("button")) return;
            const GR = new BG;
            GR.add(RR.clientX, RR.timeStamp);
            const yR = iR.current.Forward.offsetWidth,
              tR = qR.current;
            qR.current = null;
            let uR = 0;
            if (null !== tR) {
              const JR = iR.current[tR.direction],
                GR = lG(JR);
              tR.animation.cancel(), pG(JR, GR), uR = function(RR, JR, GR, yR) {
                return (RR < 0 ? GR : yR) ? RR : Math.sign(RR) * JR * (1 / (1 - Math.min(Math.abs(RR) / JR, .99)) - 1) / .55
              }(function(RR, JR, GR, yR) {
                return GR * (CG(JR) - CG("Forward" === RR ? 0 : yR))
              }(tR.direction, GR, yR, VR), fR * yR, rR, wR), RR.currentTarget.setPointerCapture(RR.pointerId)
            }
            ZR.current = {
              pointerId: RR.pointerId,
              x: RR.clientX,
              y: RR.clientY,
              base: uR,
              width: yR,
              following: null !== tR,
              direction: null !== (JR = null === tR || void 0 === tR ? void 0 : tR.direction) && void 0 !== JR ? JR : null,
              speed: GR
            }
          },
          onPointerMove: RR => {
            const JR = ZR.current;
            if (null === JR || RR.pointerId !== JR.pointerId) return;
            if (0 === RR.buttons) return void UR(RR.clientX, RR.timeStamp);
            const GR = RR.clientX - JR.x;
            !JR.following && function(RR, JR) {
              return Math.abs(RR) > 8 && Math.abs(RR) > Math.abs(JR)
            }(GR, RR.clientY - JR.y) && (JR.following = !0, JR.direction = GR < 0 ? "Forward" : "Back", RR.currentTarget.setPointerCapture(RR.pointerId)), null !== JR.direction && (JR.speed.add(RR.clientX, RR.timeStamp), pG(iR.current[JR.direction], function(RR, JR, GR, yR) {
              const tR = GR * CG("Forward" === RR ? 0 : yR) + JR;
              return MJ.e.clamp(XG(tR / GR), 0, yR)
            }(JR.direction, nR(JR, JR.direction, GR), JR.width, VR)))
          },
          onPointerUp: RR => {
            var JR;
            RR.pointerId === (null === (JR = ZR.current) || void 0 === JR ? void 0 : JR.pointerId) && UR(RR.clientX, RR.timeStamp)
          },
          onPointerCancel: RR => {
            const JR = ZR.current;
            RR.pointerId === (null === JR || void 0 === JR ? void 0 : JR.pointerId) && (ZR.current = null, null !== JR.direction && aR(JR.direction, !1, 0, KR))
          }
        };
      return {
        first: KR,
        step: fR,
        canGoBack: wR,
        canGoForward: rR,
        turnPage: LR,
        leaves: iR,
        pagesHandlers: WR
      }
    }

    function bG(RR, JR) {
      return RR > JR && RR >= 600
    }

    function vG(RR) {
      let {
        journal: JR,
        hud: GR,
        guide: yR
      } = RR;
      const {
        t: tR
      } = (0, VR.A)(), qR = (0, iR.h)(NR, JR.getPages()), fR = (0, iR.h)(GJ, GR.getGuide()), KR = qR.find((RR => RR.active)), rR = (eR = fR, aR = void 0 === KR ? null : KR.id, "active" === eR[0] && null === aR);
      var eR, aR;
      const LR = (0, KG.o)(bG),
        {
          first: nR,
          step: UR,
          canGoBack: CR,
          canGoForward: XR,
          turnPage: MR,
          leaves: BR,
          pagesHandlers: lR
        } = gG(qR.length, LR, (() => function(RR) {
          const JR = RR.findIndex((RR => RR.active));
          return -1 !== JR ? JR : Math.max(0, RR.findIndex((RR => "open" === RR.state)))
        }(qR)));
      (0, uR.useEffect)((() => {
        JR.onOpened()
      }), [JR]), (0, WR.e)((RR => !rR && ("ArrowLeft" === RR.code || "ArrowRight" === RR.code) && !(0, AR.isTypingInInput)()), (RR => {
        RR.stopPropagation(), MR("ArrowLeft" === RR.code ? "Back" : "Forward")
      }));
      const pR = void 0 !== KR,
        gR = (RR, GR, yR) => (0, HR.jsx)(WG, {
          className: RR,
          page: GR >= 0 && GR < qR.length ? qR[GR] : void 0,
          hidden: yR,
          building: pR,
          journal: JR
        });
      return (0, HR.jsx)(VG.e, {
        close: ZR.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, HR.jsxs)("section", {
          className: wR()("PlotsJournal", {
            Spread: LR
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": tR("plotsGame:journalTitle"),
          children: [(0, HR.jsx)(fG.l, {
            className: "PlotsJournalClose",
            onClick: ZR.j
          }), "active" === fR[0] && (0, HR.jsx)(fJ, {
            className: "PlotsJournalGuideSkip",
            onSkip: yR.skip
          }), rR && (0, HR.jsx)(aG, {
            onBuild: JR.build
          }), !rR && (0, HR.jsx)(LG, {
            direction: "Back",
            disabled: !CR,
            onTurn: MR
          }), (0, HR.jsx)("div", {
            hidden: rR,
            className: "PlotsJournalBookPages",
            ...lR,
            children: (0, HR.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [LR && gR("Left", nR - 2, !0), gR("Right", nR + 2 * UR - 1, !0), (0, HR.jsxs)("div", {
                ref: RR => {
                  BR.current.Back = RR
                },
                className: "PlotsJournalLeaf Back",
                children: [gR("Recto", nR - 1, !0), LR && gR("Verso", nR, !1)]
              }), (0, HR.jsxs)("div", {
                ref: RR => {
                  BR.current.Forward = RR
                },
                className: "PlotsJournalLeaf Forward",
                children: [gR("Recto", nR + UR - 1, !1), LR && gR("Verso", nR + UR, !0)]
              })]
            })
          }), !rR && (0, HR.jsx)(LG, {
            direction: "Forward",
            disabled: !XR,
            onTurn: MR
          })]
        })
      })
    }

    function OG(RR, JR, GR, yR, tR) {
      const uR = Math.hypot(...JR.dir);
      if (!Number.isFinite(uR) || 0 === uR) return -1;
      const {
        from: ZR,
        reach: qR,
        solid: iR
      } = JR, fR = [JR.dir[0] / uR, JR.dir[1] / uR, JR.dir[2] / uR], VR = null === iR ? qR : Math.min(qR, function(RR, JR, GR) {
        const yR = xG(RR, JR, GR);
        if (yR !== 1 / 0) return yR;
        return (GR[0] + .5 - RR[0]) * JR[0] + (GR[1] + .5 - RR[1]) * JR[1] + (GR[2] + .5 - RR[2]) * JR[2]
      }(ZR, fR, iR) + .75);
      let KR = -1,
        wR = 1 / 0,
        rR = 1 / 0;
      for (let eR = 0; eR < RR.length; eR += 4) {
        const JR = [RR[eR], RR[eR + 1], RR[eR + 2]],
          uR = tR(eR) ? qR : VR;
        let iR = -1,
          aR = xG(ZR, fR, JR);
        if (aR > uR) {
          const RR = [JR[0] + .5 - ZR[0], JR[1] + .5 - ZR[1], JR[2] + .5 - ZR[2]];
          if (aR = RR[0] * fR[0] + RR[1] * fR[1] + RR[2] * fR[2], aR <= 0 || aR > uR) continue;
          if (iR = Math.hypot(RR[0] - aR * fR[0], RR[1] - aR * fR[1], RR[2] - aR * fR[2]), iR > .7 || !yR(eR)) continue
        }(iR < wR || iR === wR && aR < rR) && GR(eR) && (KR = eR, wR = iR, rR = aR)
      }
      return KR
    }

    function xG(RR, JR, GR) {
      let yR = 0,
        tR = 1 / 0;
      for (let uR = 0; uR < 3; uR++) {
        const ZR = GR[uR] - RR[uR];
        if (0 === JR[uR]) {
          if (ZR > 0 || ZR + 1 < 0) return 1 / 0;
          continue
        }
        const qR = ZR / JR[uR],
          iR = (ZR + 1) / JR[uR];
        yR = Math.max(yR, Math.min(qR, iR)), tR = Math.min(tR, Math.max(qR, iR))
      }
      return yR <= tR ? yR : 1 / 0
    }
    var NG = GR(38007),
      DG = GR(39221),
      HG = GR(39700);
    const oG = [1, 1, 1];
    class cG {
      constructor(RR) {
        this.api = RR, this.meshes = null, this.shown = null
      }
      show(RR) {
        if (!(0, NG.e)(RR, this.shown))
          if (this.shown = null === RR ? null : [RR[0], RR[1], RR[2]], null !== this.meshes)
            for (const JR of this.meshes) this.api.setGameMesh(JR, null === RR ? {
              visible: !1
            } : {
              anchor: RR,
              visible: !0
            });
          else if (null !== RR) {
          const JR = [DG.f, DG.f, DG.f, 0, 0, 0];
          this.meshes = [this.build([JR], DG.j, RR), this.build((0, DG.c)(), DG.p, RR)]
        }
      }
      dispose() {
        for (const JR of null !== (RR = this.meshes) && void 0 !== RR ? RR : []) {
          var RR;
          this.api.disposeGameMesh(JR)
        }
        this.meshes = null, this.shown = null
      }
      build(RR, JR, GR) {
        const yR = [],
          tR = [];
        for (const [uR, ZR, qR, iR, fR, VR] of RR)(0, HG.g)(yR, tR, [iR + .5, fR + .5, VR + .5], [uR, ZR, qR]);
        return this.api.createGameMesh({
          positions: yR,
          indices: tR
        }, {
          rgb: oG,
          alpha: JR,
          onTop: !0
        }, GR)
      }
    }

    function PG(RR, JR) {
      const GR = PJ.g.Vn / 2;
      return RR[0] < JR[0] + GR && RR[0] + 1 > JR[0] - GR && RR[1] < JR[1] + PJ.g.Kn && RR[1] + 1 > JR[1] && RR[2] < JR[2] + GR && RR[2] + 1 > JR[2] - GR
    }

    function IG(RR, JR) {
      return RR.getClientOption(JR, "blockReach") + 1
    }
    class mG {
      constructor(RR, JR, GR) {
        this.api = RR, this.localPlayerId = JR, this.foreseen = GR, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(RR) {
        this.cells = RR
      }
      playerMoved() {
        return zG(this.api.getPositionView(this.localPlayerId)).some(((RR, JR) => RR !== this.playerCells[JR]))
      }
      Ur(RR) {
        const JR = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...zG(JR)), this.next = this.pickFrom(null === RR ? [JR[0], JR[1] + 1, JR[2]] : (0, NG.b)(RR), (() => !1)), this.next
      }
      pickFrom(RR, JR) {
        const GR = this.api.getPositionView(this.localPlayerId),
          yR = [GR[0], GR[1] + PJ.g.Kn * PJ.g.playerEyeToHeightRatio, GR[2]],
          tR = IG(this.api, this.localPlayerId),
          {
            cells: uR
          } = this,
          ZR = RR => [uR[RR], uR[RR + 1], uR[RR + 2]],
          qR = function(RR, JR, GR, yR, tR, uR) {
            let ZR = -1,
              qR = -1,
              iR = 1 / 0;
            for (let fR = 0; fR < RR.length; fR += JR) {
              const JR = (uR(fR) ? 2 : 0) + (yR(fR) ? 1 : 0);
              if (JR < qR || tR(fR)) continue;
              const VR = (RR[fR] + .5 - GR[0]) ** 2 + (RR[fR + 1] + .5 - GR[1]) ** 2 + (RR[fR + 2] + .5 - GR[2]) ** 2;
              (JR > qR || VR < iR) && (ZR = fR, qR = JR, iR = VR)
            }
            return ZR
          }(uR, 4, RR, (RR => 1 === uR[RR + 3]), (RR => {
            const yR = ZR(RR);
            return PG(yR, GR) || this.foreseen.has(yR.join()) || JR(yR)
          }), (RR => function(RR, JR, GR) {
            return (JR[0] + .5 - RR[0]) ** 2 + (JR[1] + .5 - RR[1]) ** 2 + (JR[2] + .5 - RR[2]) ** 2 <= GR ** 2
          }(yR, ZR(RR), tR)));
        return -1 === qR ? null : ZR(qR)
      }
    }

    function zG(RR) {
      let [JR, GR, yR] = RR;
      const tR = PJ.g.Vn / 2;
      return [Math.floor(JR), Math.floor(GR), Math.floor(yR), Math.floor(JR - tR), Math.floor(JR + tR), Math.floor(GR + PJ.g.Kn), Math.floor(yR - tR), Math.floor(yR + tR)]
    }
    class SG {
      constructor(RR, JR, GR) {
        this.api = RR, this.localPlayerId = JR, this.pickNext = GR, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(RR) {
        const [JR, , GR] = RR.cameraDirection, yR = Math.hypot(JR, GR);
        yR > .001 && (this.heading = [JR / yR, GR / yR])
      }
      tapped(RR, JR, GR) {
        const yR = IG(this.api, this.localPlayerId),
          {
            origin: tR,
            direction: uR
          } = this.api.getActionRay(),
          ZR = [...tR],
          qR = [
            [ZR, [ZR[0] + uR[0] * yR, ZR[1] + uR[1] * yR, ZR[2] + uR[2] * yR]]
          ];
        null !== RR && qR.push([ZR, (0, NG.b)(RR)]), this.tap = {
          lines: qR,
          next: JR,
          ms: GR
        }
      }
      filled(RR, JR) {
        this.tap = null, this.turnFrom(RR, JR), this.retry(JR)
      }
      arrived(RR, JR) {
        const {
          tap: GR
        } = this;
        if (null === GR || JR - GR.ms > 1500) return null;
        const yR = (0, NG.b)(RR);
        return (0, NG.e)(GR.next, RR) || GR.lines.some((RR => {
          let [JR, GR] = RR;
          return function(RR, JR, GR) {
            const yR = [GR[0] - JR[0], GR[1] - JR[1], GR[2] - JR[2]],
              tR = [RR[0] - JR[0], RR[1] - JR[1], RR[2] - JR[2]],
              uR = yR[0] ** 2 + yR[1] ** 2 + yR[2] ** 2,
              ZR = 0 === uR ? 0 : Math.min(1, Math.max(0, (tR[0] * yR[0] + tR[1] * yR[1] + tR[2] * yR[2]) / uR));
            return Math.hypot(tR[0] - yR[0] * ZR, tR[1] - yR[1] * ZR, tR[2] - yR[2] * ZR)
          }(yR, JR, GR) <= .9
        })) ? (this.tap = null, this.turnFrom(RR, JR), GR.ms) : null
      }
      turnFrom(RR, JR) {
        this.pending = {
          from: RR,
          ms: JR,
          turnMs: Math.max(50, Math.min(250, JR - this.lastFillMs))
        }, this.lastFillMs = JR
      }
      retry(RR) {
        const {
          pending: JR
        } = this;
        if (null === JR) return;
        if (RR - JR.ms > 1500) return void(this.pending = null);
        const GR = this.pickNext((0, NG.b)(JR.from), (RR => (0, NG.e)(RR, JR.from)));
        if (null === GR) return;
        this.pending = null;
        const {
          turning: yR
        } = this;
        if (null !== yR && RR < yR.endMs && (0, NG.e)(yR.to, GR)) return;
        const tR = this.api.getActionRay().origin,
          uR = [GR[0] + .5 - tR[0], GR[1] + .5 - tR[1], GR[2] + .5 - tR[2]],
          ZR = Math.hypot(uR[0], uR[2]);
        if (ZR < .3) {
          const RR = Math.max(ZR, .001);
          uR[0] = this.heading[0] * RR, uR[2] = this.heading[1] * RR
        }
        this.api.turnCamera(uR, JR.turnMs), this.turning = {
          to: GR,
          endMs: RR + JR.turnMs
        }
      }
    }
    class jG {
      constructor(RR, JR, GR, yR) {
        this.api = RR, this.localPlayerId = JR, this.juice = GR, this.tracker = yR, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new IJ(RR), this.meshes = new mJ.i(RR), this.outline = new cG(RR), this.nextCell = new mG(RR, JR, this.foreseen), this.turn = new SG(RR, JR, ((RR, JR) => this.nextCell.pickFrom(RR, JR)))
      }
      BK(RR) {
        const JR = "active" === RR[0] ? `${RR[1]}|${RR[3]}|${RR[4]}|${RR[5]}|${RR[6]}` : "";
        if ("active" !== RR[0]) "built" === RR[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , GR, yR, tR, uR] = RR;
          JR !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = GR) : GR === this.layerY ? this.burstUnlisted(yR) : GR > this.layerY && this.finishLayer(GR), this.layerY = GR, this.layerCells.has(GR) || this.layerCells.set(GR, yR.filter(dG)), this.ghostCells = yR, this.palette = tR, this.occupiedCells = uR
        }
        JR !== this.blueprint && (this.tracker.show("active" === RR[0] && RR[2] ? {
          id: RR[1],
          y: RR[4]
        } : null), this.blueprint = JR, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((RR => this.api.blockNameToBlockId(RR))), this.chunkWatch.watch([...this.ghostCells.filter(dG), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(RR) {
        this.burstUnlisted([]), RR > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = RR)
      }
      gK() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const RR = performance.now();
        let JR = !1;
        for (const [yR, tR] of this.foreseen) {
          var GR;
          if (RR - tR > 1e3) this.foreseen.delete(yR), JR = !0, (null === (GR = this.lastFilled) || void 0 === GR ? void 0 : GR.join()) === yR && (this.lastFilled = this.lastSeenFilled)
        }(JR || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(RR) {
        const JR = new Set;
        for (let tR = 0; tR < RR.length; tR += 4) JR.add(`${RR[tR]},${RR[tR+1]},${RR[tR+2]}`);
        const GR = [],
          {
            ghostCells: yR
          } = this;
        for (let tR = 0; tR < yR.length; tR += 4) {
          const RR = `${yR[tR]},${yR[tR+1]},${yR[tR+2]}`;
          !JR.has(RR) && this.open.delete(RR) && GR.push(this.filledCell(tR))
        }
        this.burst(GR)
      }
      refresh() {
        const {
          ghostCells: RR,
          palette: JR,
          occupiedCells: GR
        } = this, yR = new mJ.g, tR = new Set, uR = [], ZR = [];
        let qR = 0;
        for (let iR = 0; iR < RR.length; iR += 4) {
          const [GR, fR, VR, KR] = [RR[iR], RR[iR + 1], RR[iR + 2], RR[iR + 3]], wR = this.api.getBlockId(GR, fR, VR), rR = `${GR},${fR},${VR}`, eR = NJ(this.blockIds[KR], wR);
          !eR && DJ(wR) ? yR.add(GR, fR, VR, oJ(JR[KR]), mJ.e, (0, cJ.c)(JR[KR])) : eR ? this.open.has(rR) && uR.push(this.filledCell(iR)) : yR.add(GR, fR, VR, mJ.d, mJ.c), eR || qR++, !eR && this.api.isBlockInLoadedChunk(GR, fR, VR) && (tR.add(rR), ZR.push(GR, fR, VR, DJ(wR) ? 0 : 1))
        }
        this.open = tR, this.nextCell.setCells(ZR), this.tracker.update(this.layerY, this.topLayerY, qR);
        for (let iR = 0; iR < GR.length; iR += 3) {
          const [RR, JR, tR] = [GR[iR], GR[iR + 1], GR[iR + 2]];
          DJ(this.api.getBlockId(RR, JR, tR)) || yR.add(RR, JR, tR, mJ.d, mJ.c)
        }
        this.meshes.show(yR.toArray()), this.burst(uR), this.showNext(), this.turn.retry(performance.now())
      }
      burst(RR) {
        const JR = performance.now(),
          GR = [];
        for (const [tR, uR, ZR] of RR) {
          const RR = [tR, uR, ZR];
          this.lastSeenFilled = RR, this.foreseen.delete(RR.join()) || GR.push(RR)
        }
        const yR = this.isHolding(JR);
        for (const tR of GR) {
          if (this.lastFilled = tR, yR && this.pressFilled) {
            this.turn.filled(tR, JR);
            continue
          }
          const RR = this.turn.arrived(tR, JR);
          if (null !== RR) {
            this.pressFilled = yR;
            for (const [JR, GR] of this.foreseen) GR <= RR && this.foreseen.delete(JR)
          }
        }
        this.juice.filled(RR)
      }
      showNext() {
        var RR;
        this.outline.show(null !== (RR = this.aimed) && void 0 !== RR ? RR : this.nextCell.Ur(this.lastFilled))
      }
      afterRender(RR) {
        var JR;
        this.turn.look(RR);
        const GR = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === GR ? null : GR.position), this.outline.show(null !== (JR = this.aimed) && void 0 !== JR ? JR : this.nextCell.get())
      }
      isHolding(RR) {
        return null !== this.altMs && RR - this.altMs <= 500
      }
      attemptAltAction(RR) {
        const JR = performance.now();
        if (this.isHolding(JR) || (this.pressFilled = !1), this.altMs = JR, this.pressFilled) return "preventPlacement";
        const GR = this.findAimed(RR);
        if (null !== GR) return this.foreseen.set(GR.join(), JR), this.lastFilled = GR, this.aimed = null, this.showNext(), this.turn.filled(GR, JR), this.pressFilled = !0, "preventPlacement";
        {
          const GR = this.nextCell.get();
          null !== GR && this.turn.tapped(RR, GR, JR)
        }
      }
      holdPressOnEntity() {
        const RR = performance.now();
        this.pressFilled && this.isHolding(RR) && (this.altMs = RR)
      }
      findAimed(RR) {
        return function(RR, JR, GR, yR, tR, uR, ZR) {
          const qR = RR.uyR(JR),
            iR = null === qR || null === RR.blockNameToBlockId(qR.name, !0) ? null : qR.name,
            fR = RR.getPositionView(JR),
            {
              origin: VR,
              direction: KR
            } = RR.getActionRay(),
            wR = OG(yR, {
              from: VR,
              dir: KR,
              reach: IG(RR, JR),
              solid: GR
            }, (JR => {
              const GR = [yR[JR], yR[JR + 1], yR[JR + 2]];
              return !NJ(tR[yR[JR + 3]], RR.getBlockId(...GR)) && !ZR.has(GR.join()) && RR.isBlockInLoadedChunk(...GR) && !PG(GR, fR)
            }), (RR => null === iR || iR === HJ(tR[yR[RR + 3]])), (RR => null !== uR && yR[RR] === uR[0] && yR[RR + 1] === uR[1] && yR[RR + 2] === uR[2]));
          return -1 === wR ? null : [yR[wR], yR[wR + 1], yR[wR + 2]]
        }(this.api, this.localPlayerId, RR, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(RR) {
        const {
          ghostCells: JR
        } = this, [GR, yR, tR] = oJ(this.palette[JR[RR + 3]]);
        return [JR[RR], JR[RR + 1], JR[RR + 2], GR, yR, tR]
      }
    }

    function dG(RR, JR) {
      return JR % 4 !== 3
    }
    class EG {
      constructor(RR) {
        this.api = RR, this.sent = !1
      }
      gK() {
        this.sent || qR.d.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var YG = GR(3017),
      kG = GR(40422);

    function QG(RR, JR, GR) {
      const yR = [255 * RR, 255 * JR, 255 * GR],
        [tR, uR, ZR] = yR.map((RR => RR + .4 * (255 - RR)));
      return {
        texture: "square_particle",
        hK: 48,
        minLifeTime: .3 / kG.b,
        maxLifeTime: .55 / kG.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * kG.b * kG.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...yR, 1],
          maxColor: [tR, uR, ZR, 1]
        }, {
          timeFraction: 1,
          minColor: [...yR, 0],
          maxColor: [tR, uR, ZR, 0]
        }],
        blendMode: YG.c.Standard
      }
    }
    const FG = {
      texture: "glint",
      mipmaps: !1,
      hK: 96,
      minLifeTime: .5 / kG.b,
      maxLifeTime: .9 / kG.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * kG.b * kG.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: YG.c.OneOne
    };
    class TG {
      constructor(RR, JR) {
        this.api = RR, this.localPlayerId = JR, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(RR) {
        if (this.api.particlesEnabled())
          for (const [JR, GR, yR, tR, uR, ZR] of RR.slice(0, 3)) {
            const RR = `${tR},${uR},${ZR}`;
            let qR = this.chips.get(RR);
            void 0 === qR && (qR = this.api.createParticles(QG(tR, uR, ZR), {
              pos: [JR + .5, GR + .5, yR + .5]
            }), this.chips.set(RR, qR));
            for (let JR = 0; JR < 8; JR++) this.setPoint(JR, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            qR.emitPoints([JR + .5, GR + .5, yR + .5], this.points, 8)
          }
      }
      layerDone(RR) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const JR = RR.length / 3;
        if (0 === JR || !this.api.particlesEnabled()) return;
        const GR = Math.min(JR, 48),
          [yR, tR, uR] = [RR[0] + .5, RR[1] + 1, RR[2] + .5];
        let ZR = 0;
        for (let qR = 0; qR < GR; qR++) {
          const iR = 3 * Math.floor(qR * JR / GR);
          for (let JR = 0; JR < 2; JR++) this.setPoint(ZR++, RR[iR] + Math.random() - yR, RR[iR + 1] + 1 - tR, RR[iR + 2] + Math.random() - uR, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(FG, {
          pos: [yR, tR, uR]
        }), this.sparkles.emitPoints([yR, tR, uR], this.points, ZR)
      }
      dispose() {
        var RR;
        for (const JR of this.chips.values()) JR.stop();
        this.chips.clear(), null === (RR = this.sparkles) || void 0 === RR || RR.stop(), this.sparkles = null
      }
      setPoint(RR, JR, GR, yR, tR) {
        const uR = 4 * RR;
        this.points[uR] = JR, this.points[uR + 1] = GR, this.points[uR + 2] = yR, this.points[uR + 3] = tR
      }
    }
    const sG = "SpecialAction1",
      hG = "KeyY",
      Ry = "KeyX";

    function Jy(RR) {
      let {
        placement: JR
      } = RR;
      const GR = (0, iR.h)(EJ, JR.getView()),
        {
          t: yR
        } = (0, VR.A)(),
        {
          isTouchScreen: tR
        } = (0, qR.o)(["isTouchScreen"]),
        ZR = (0, uR.useContext)(XR),
        KR = null !== GR,
        eR = KR && !GR.blocked && !GR.waiting;
      if ((0, WR.e)((RR => KR && !RR.repeat && !(0, AR.isTypingInInput)() && !(0, rR.o)() && !tR), (RR => {
          const GR = function(RR, JR, GR) {
            if (RR === Ry) return JR.stop;
            if (RR === hG) return GR ? JR.build : yy;
            return fR.t[sG].includes(RR) ? JR.rotate : null
          }(RR.code, JR, eR);
          null !== GR && (RR.stopPropagation(), GR())
        })), !KR) return null;
      let LR = tR ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return GR.blocked ? LR = "plotsGame:placementOffPlot" : GR.toClear > 0 ? LR = "plotsGame:placementClear" : "placeSpot" !== ZR.hint && "placeBuild" !== ZR.hint || (LR = null), (0, HR.jsx)(aR.d, {
        placement: "bottom",
        children: (0, HR.jsxs)("div", {
          ref: ZR.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, HR.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: yR(gR(GR.id).displayName.translationKey)
          }), null !== LR && (0, HR.jsx)("div", {
            className: wR()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: GR.refusals > 0
            }),
            children: yR(LR)
          }, GR.refusals), (0, HR.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, HR.jsxs)(fG.g, {
              onClick: JR.rotate,
              children: [(0, HR.jsx)(Gy, {
                noaAction: sG
              }), yR("plotsGame:placementRotate")]
            }), (0, HR.jsxs)(fG.M, {
              onClick: JR.stop,
              children: [(0, HR.jsx)(Gy, {
                keyCode: Ry
              }), yR("general:cancel")]
            }), (0, HR.jsx)("span", {
              ref: ZR.buildRef,
              className: wR()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === ZR.hint && eR && tR
              }),
              children: (0, HR.jsxs)(fG.n, {
                disabled: !eR,
                onClick: JR.build,
                children: [(0, HR.jsx)(Gy, {
                  keyCode: hG
                }), yR("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function Gy(RR) {
      return (0, HR.jsx)(UR.c, {
        className: "PlotsPlacementKey",
        ...RR
      })
    }

    function yy() {}
    var ty = GR(3361),
      uy = GR(37849),
      Zy = GR(2173),
      qy = GR(1351);
    const iy = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function fy(RR) {
      let {
        hud: JR
      } = RR;
      const GR = (0, iR.h)(JJ, JR.getPlot()),
        [yR, tR] = (0, uR.useState)(null),
        ZR = (0, uy.k)(yR);
      if ("none" === GR[0]) return null;
      const [, qR, fR, VR, KR, rR] = GR;
      return (0, HR.jsx)("div", {
        className: wR()("PlotsPlotBannerContainer", {
          Below: ZR
        }),
        children: (0, HR.jsx)(Vy, {
          plotX: qR,
          plotZ: fR,
          ownerName: VR,
          ownerId: KR,
          relation: rR,
          plaqueRef: tR
        }, `${qR},${fR}`)
      })
    }

    function Vy(RR) {
      var JR, GR;
      let {
        plotX: yR,
        plotZ: tR,
        ownerName: uR,
        ownerId: ZR,
        relation: qR,
        plaqueRef: iR
      } = RR;
      const {
        t: fR
      } = (0, VR.A)(), KR = (0, Zy.i)("hiddenPlayerNames"), rR = (0, Zy.i)("players"), eR = null === ZR ? null : null !== (JR = null === (GR = rR.byId[ZR]) || void 0 === GR ? void 0 : GR.cosmetics) && void 0 !== JR ? JR : null, aR = fR("plotsGame:plotBannerCoords", {
        x: yR,
        z: tR
      }), nR = "own" === qR || null !== uR;
      return (0, HR.jsxs)("div", {
        ref: iR,
        className: wR()("PlotsPlotBanner", {
          Own: "own" === qR,
          Shared: "shared" === qR
        }),
        role: "status",
        children: [(0, HR.jsxs)("span", {
          className: wR()("PlotsPlotBannerSeal", {
            Face: null !== eR
          }),
          children: [null !== eR && (0, HR.jsx)(ty.c, {
            cosmetics: eR
          }), null === eR && (0, HR.jsx)(LR.d, {
            name: iy[qR]
          })]
        }), (0, HR.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, HR.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === qR && fR("plotsGame:plotBannerYours"), "own" !== qR && null !== uR && fR("plotsGame:plotBannerOwner", {
              name: (0, qy.e)(uR, KR)
            }), !nR && aR]
          }), nR && (0, HR.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [aR, "shared" === qR && (0, HR.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: fR("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const Ky = function(RR, JR, GR, yR) {
      let {
        localPlayerId: tR
      } = yR;
      const qR = new tJ;
      let iR = null,
        fR = null,
        VR = null,
        KR = null,
        wR = null,
        rR = null;
      const eR = [];
      return {
        onCreate: RR => {
          iR = new TG(RR, tR);
          const JR = new RJ;
          fR = new jG(RR, tR, iR, JR), VR = new kJ(RR, tR), KR = new DR(RR, VR), wR = new iG(RR, tR, fR.nextCell), rR = new EG(RR), eR.push((0, ZR.G)((0, uR.createElement)(uG, {
            hud: qR,
            guide: wR,
            tracker: JR,
            placement: VR
          }, (0, uR.createElement)(fy, {
            hud: qR
          }), (0, uR.createElement)(cR, {
            journal: KR
          }), (0, uR.createElement)(RG, {
            placement: VR
          }), (0, uR.createElement)(Jy, {
            placement: VR
          })), {
            content: (0, uR.createElement)(vG, {
              journal: KR,
              hud: qR,
              guide: wR
            })
          }))
        },
        gK: () => {
          rR.gK(), fR.gK(), VR.gK(), KR.gK()
        },
        onPlayerAttemptAltAction: (RR, JR, GR, yR, tR, uR) => {
          if (null !== uR) return void fR.holdPressOnEntity();
          const ZR = void 0 === JR ? null : [JR, GR, yR];
          return fR.attemptAltAction(ZR)
        },
        onPlayerClickUp: () => {
          fR.endPress()
        },
        onAfterRender: (RR, JR) => {
          VR.afterRender(JR), fR.afterRender(JR), wR.afterRender(JR)
        },
        onClose: () => {
          for (const RR of eR) RR();
          iR.dispose(), fR.dispose(), VR.dispose(), iR = null, fR = null, VR = null, KR = null, wR = null, rR = null
        },
        onReceivedMessageFromServer: (RR, JR) => {
          if ("plotsPlot" === RR) qR.receivePlot(JR);
          else if ("plotsBlueprint" === RR) {
            const RR = JR;
            fR.BK(RR), VR.BK(RR)
          } else "plotsJournal" === RR ? KR.BK(JR) : "plotsJournalOpen" === RR ? KR.openFromServer(JR) : "plotsPreviewEnd" === RR ? VR.endFromServer() : "plotsGuide" === RR ? qR.receiveGuide(JR) : "plotsGuideDone" === RR && qR.receiveGuideDone()
        }
      }
    }
  },
  39679: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR
    });
    var yR = GR(39672);
    const tR = 5,
      uR = [0, 0, 0],
      ZR = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function qR(RR, JR, GR, qR, iR, fR) {
      let [VR, KR, wR] = qR;
      const rR = (VR + .5 - GR[0]) ** 2 + (KR - GR[1]) ** 2 + (wR + .5 - GR[2]) ** 2;
      let eR = null;
      rR <= fR ** 2 && (uR[0] = VR + .5, uR[1] = KR + iR, uR[2] = wR + .5, eR = JR.projectWorldPosToViewport(uR));
      const aR = null !== eR && eR.x > -tR && eR.x < 100 + tR && eR.y > -tR && eR.y < 100 + tR;
      return (0, yR.h)(RR, !aR), aR ? (ZR.x = eR.x, ZR.y = eR.y, ZR.distSq = rR, ZR) : null
    }
  },
  40422: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      d: () => uR
    });
    const yR = 1 / .6,
      tR = {
        kind: "smokePuff"
      };
    class uR {
      constructor(RR, JR, GR) {
        this.style = RR, this.hK = JR, this.half = GR, this.particles = null, this.lastFrame = -1
      }
      emit(RR, JR, GR) {
        let uR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return GR !== this.lastFrame && (this.lastFrame = GR, this.particles || (this.particles = RR.createParticles(function(RR, JR) {
          const [
            [GR, uR, ZR],
            [qR, iR, fR]
          ] = RR.colours;
          return {
            texture: RR.soft ? tR : "square_particle",
            hK: JR,
            minLifeTime: RR.life[0] / yR,
            maxLifeTime: RR.life[1] / yR,
            minEmitPower: RR.power[0] * yR,
            maxEmitPower: RR.power[1] * yR,
            minSize: RR.size[0],
            maxSize: RR.size[1],
            emitRate: 0,
            gravity: [0, RR.lift * yR * yR, 0],
            dir1: [-RR.spread, 1, -RR.spread],
            dir2: [RR.spread, 1, RR.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [GR, uR, ZR, RR.alpha],
              maxColor: [qR, iR, fR, RR.alpha]
            }, {
              timeFraction: 1,
              minColor: [GR, uR, ZR, 0],
              maxColor: [qR, iR, fR, 0]
            }],
            blendMode: RR.blendMode
          }
        }(this.style, this.hK), {
          pos: JR,
          half: this.half
        })), this.particles.moveTo(JR, this.half), this.particles.emit(uR), !0)
      }
      dispose() {
        var RR;
        null === (RR = this.particles) || void 0 === RR || RR.stop(), this.particles = null
      }
    }
  },
  40801: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => qR,
      g: () => iR
    });
    const yR = new Map,
      tR = [];

    function uR() {
      for (const RR of tR) RR()
    }

    function ZR(RR) {
      var JR;
      return yR.set(RR, (null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : 0) + 1), uR(), () => {
        const JR = yR.get(RR) - 1;
        0 === JR ? yR.delete(RR) : yR.set(RR, JR), uR()
      }
    }

    function qR() {
      return [...yR.keys()]
    }

    function iR(RR) {
      tR.push(RR)
    }
  },
  37999: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => DR,
      D: () => PR,
      c: () => iR,
      e: () => bR,
      f: () => qR,
      g: () => NR,
      j: () => pR,
      l: () => XR,
      m: () => xR,
      o: () => OR,
      p: () => lR,
      t: () => HR,
      u: () => oR,
      x: () => cR
    });
    var yR = GR(46);
    const tR = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      uR = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      ZR = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      qR = uR.filter((RR => "docsButton" !== RR)),
      iR = ZR.filter((RR => "aiHelperButton" !== RR)),
      fR = "codeEditorTutorials",
      VR = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      KR = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let wR = null,
      rR = null;
    const eR = new Set,
      aR = new Set;
    let LR = null;
    const nR = new Set,
      UR = new Set;

    function WR() {
      UR.forEach((RR => {
        RR()
      }))
    }

    function AR() {
      if (!wR) {
        const RR = yR.i.getItem(fR);
        wR = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof RR && null !== RR ? RR : {}
        }
      }
      return wR
    }

    function CR(RR) {
      const JR = AR();
      JR[RR] || (wR = {
        ...JR,
        [RR]: !0
      }, yR.i.setItem(fR, wR))
    }

    function XR(RR) {
      return "docsOverview" === RR ? uR : "aiHelperOverview" === RR ? ZR : rR ? tR[rR] : []
    }

    function MR(RR) {
      return ("worldCodeButton" !== RR || !AR().worldCodeIntroShown) && !nR.has(RR)
    }

    function BR(RR) {
      var JR;
      return (null === (JR = LR) || void 0 === JR ? void 0 : JR.name) === RR ? LR.stepsDone : eR
    }

    function lR(RR, JR) {
      if (! function(RR) {
          return LR ? LR.name === RR : "welcome" === RR
        }(RR) || !MR(JR) || BR(RR).has(JR)) return !1;
      if (LR) return !0;
      const GR = VR[JR];
      return GR ? !AR()[GR] || aR.has(JR) : !AR()[KR[RR]]
    }

    function pR(RR) {
      var JR;
      return null !== (JR = XR(RR).find((JR => lR(RR, JR)))) && void 0 !== JR ? JR : null
    }

    function gR(RR) {
      var JR;
      CR(KR[RR]), (null === (JR = LR) || void 0 === JR ? void 0 : JR.name) === RR && (LR = null)
    }

    function bR(RR) {
      const JR = (LR ? [LR.name] : ["welcome", "docsOverview"]).find((JR => pR(JR) === RR));
      if (!JR) return;
      BR(JR).add(RR);
      const GR = VR[RR];
      GR && (CR(GR), LR || aR.add(RR)), null === pR(JR) && gR(JR), WR()
    }

    function vR(RR, JR) {
      const GR = XR(RR),
        yR = BR(RR);
      for (let tR = GR.indexOf(JR) - 1; tR >= 0; tR--)
        if (yR.has(GR[tR]) && MR(GR[tR])) return GR[tR];
      return null
    }

    function OR(RR, JR) {
      return null !== vR(RR, JR)
    }

    function xR(RR, JR) {
      const GR = vR(RR, JR);
      GR && (BR(RR).delete(GR), WR())
    }

    function NR(RR) {
      gR(RR), "welcome" === RR && XR("welcome").forEach((RR => {
        const JR = VR[RR];
        JR && CR(JR)
      })), WR()
    }

    function DR(RR) {
      LR = {
        name: RR,
        stepsDone: new Set
      }, WR()
    }

    function HR() {
      (LR || 0 !== eR.size || 0 !== aR.size) && (LR = null, eR.clear(), aR.clear(), WR())
    }

    function oR(RR, JR) {
      const GR = JR ? RR : rR === RR ? null : rR;
      GR !== rR && (rR = GR, WR())
    }

    function cR(RR, JR) {
      nR.has(RR) === JR && (JR ? nR.delete(RR) : nR.add(RR), WR())
    }

    function PR(RR) {
      return UR.add(RR), () => {
        UR.delete(RR)
      }
    }
  },
  39672: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      h: () => uR
    });
    const yR = new WeakMap;

    function tR(RR) {
      let JR = yR.get(RR);
      return JR || (JR = {
        hidden: RR.hidden,
        x: NaN,
        y: NaN
      }, yR.set(RR, JR)), JR
    }

    function uR(RR, JR) {
      const GR = tR(RR);
      GR.hidden !== JR && (GR.hidden = JR, RR.hidden = JR)
    }

    function ZR(RR, JR, GR) {
      const yR = tR(RR);
      yR.x === JR && yR.y === GR || (yR.x = JR, yR.y = GR, RR.style.translate = `${JR}vw ${GR}vh`)
    }
  },
  39585: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => CR,
      E: () => AR,
      H: () => wR,
      J: () => aR,
      N: () => nR,
      R: () => tR,
      b: () => VR,
      c: () => iR,
      d: () => WR,
      e: () => fR,
      g: () => qR,
      i: () => ZR,
      l: () => uR,
      o: () => MR,
      s: () => rR,
      v: () => XR,
      y: () => BR
    });
    var yR = GR(5938);

    function tR(RR) {
      return Math.floor(RR).toLocaleString("en-US")
    }
    const uR = 2e3,
      ZR = .005,
      qR = .001,
      iR = 2,
      fR = "Fluid Tank",
      VR = "Coolant Mixer",
      KR = 144;

    function wR(RR) {
      const JR = RR.split("|")[0];
      return (0, yR.i)(JR) ? JR === yR.c ? "cryo" : "water" : null
    }
    const rR = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      eR = 63;

    function aR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const GR = JR ? function(RR, JR, GR) {
        const yR = rR.findIndex((yR => {
          let [tR, uR, ZR] = yR;
          return tR === RR && uR === JR && ZR === GR
        }));
        return yR < 0 ? 0 : 1 << yR
      }(JR[0], JR[1], JR[2]) : 0;
      return "maker" === RR ? {
        kind: RR,
        faces: GR
      } : "user" === RR ? {
        kind: RR,
        faces: eR & ~GR
      } : {
        kind: RR,
        faces: eR
      }
    }

    function LR(RR) {
      return "pipe" === RR || "tank" === RR || "maker" === RR
    }

    function nR(RR, JR, GR) {
      return 0 !== (RR.faces & 1 << GR) && 0 !== (JR.faces & 1 << (1 ^ GR)) && (LR(RR.kind) || LR(JR.kind))
    }
    const UR = (RR, JR, GR, yR) => ({
        input: RR,
        inputAmount: yR,
        output: JR,
        outputAmount: GR
      }),
      WR = {
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
          recipes: [UR("Uranium Grit", "Uranium Pellet", 1, 12), UR("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [UR("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: KR,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function AR(RR, JR) {
      return 1e3 * (null !== JR && void 0 !== JR ? JR : 0) / RR.opMs
    }

    function CR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GR = AR(WR["Coolant Mixer"], KR) * JR;
      return RR <= 0 ? 0 : Math.ceil(RR / GR - 1e-9)
    }
    const XR = "baf2Water",
      MR = "baf2waterclose",
      BR = "baf2wateropen"
  },
  40792: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => KR
    });
    var yR = GR(5844),
      tR = GR(5879),
      uR = GR(5898);
    const ZR = [0, 0, 0, 1, 1, 1],
      qR = (0, tR.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      iR = (0, tR.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      fR = (0, tR.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      VR = [0, 1, 2, 3].map((RR => (0, tR.d)((0, tR.m)([
        [3, 2, 0, 5, 7, 3]
      ], RR))));

    function KR(RR) {
      const {
        AL: JR,
        model: GR,
        blockModel: tR,
        meta: KR
      } = yR.l[RR];
      return void 0 !== JR ? JR : "CentreCross" === GR ? qR : null !== tR && void 0 !== tR && tR.startsWith("torch") ? KR.halfblockPlacement === uR.d.side ? VR[KR.rot - 1] : KR.halfblockPlacement === uR.d.top ? fR : iR : ZR
    }
  },
  39571: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => NR,
      g: () => DR
    });
    var yR = GR(5844),
      tR = GR(5886);
    const uR = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var ZR = GR(5907),
      qR = GR(39380),
      iR = GR(5898);
    const fR = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function VR(RR) {
      let [JR, GR] = RR;
      return [-GR, JR]
    }

    function KR(RR, JR) {
      return RR[0] === JR[0] && RR[1] === JR[1]
    }

    function wR(RR, JR) {
      return RR[0] * JR[0] + RR[1] * JR[1] === 0
    }
    const rR = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var eR = GR(5935);

    function aR(RR, JR, GR, yR, tR) {
      return JR < eR.t || JR >= eR.t + eR.v || Math.floor(RR / eR.B) === Math.floor(yR / eR.B) && Math.floor(GR / eR.B) === Math.floor(tR / eR.B)
    }
    const LR = "Splitter",
      nR = "Sorting Gate",
      UR = new Set(eR.S),
      WR = new Set([...eR.S, "Belt Loader", "Fast Loader", nR]),
      AR = new Set(eR.y),
      CR = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function XR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = yR.l[RR]) || void 0 === GR ? void 0 : GR.meta.rootName) && void 0 !== JR ? JR : ""
    }

    function MR(RR) {
      return XR(RR) === eR.l && (0, eR.eb)(yR.l[RR].name)
    }
    var BR = GR(5895),
      lR = GR(5919);
    const pR = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function gR(RR) {
      var JR, GR;
      const tR = null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta;
      return (null === tR || void 0 === tR ? void 0 : tR.rootName) !== lR.n ? null : {
        rot: null !== (GR = tR.rot) && void 0 !== GR ? GR : 1,
        half: (0, lR.f)(tR.rootName, tR.metaStr)
      }
    }

    function bR(RR, JR, GR, yR) {
      return gR(RR(JR, GR, yR))
    }

    function vR(RR, JR, GR, yR, tR) {
      let {
        rot: uR,
        half: ZR
      } = tR;
      const [qR, iR] = (0, lR.l)(uR, ZR), fR = bR(RR, JR + qR, GR, yR + iR);
      return null !== fR && fR.rot === uR && fR.half === lR.r[ZR]
    }
    var OR = GR(39576);
    const xR = [new class {
      constructor() {
        this.reshapeOffsets = rR
      }
      handles(RR) {
        var JR;
        return "Stairs" === (null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.model)
      }
      affects(RR) {
        return this.handles(RR)
      }
      shape(RR, JR, GR, tR, uR) {
        const ZR = this.stairsOf(uR),
          qR = this.cornerAt(RR, JR, GR, tR, ZR),
          fR = ZR.half === iR.d.top ? "top" : "bot";
        return (0, yR.n)(`${yR.l[uR].meta.rootName}|meta|rot${ZR.rot}|${fR}${null===qR?"":`|${qR}`}`)
      }
      stairsOf(RR) {
        const {
          rot: JR,
          halfblockPlacement: GR
        } = yR.l[RR].meta;
        return {
          rot: JR,
          half: GR
        }
      }
      stairsAt(RR, JR, GR, yR) {
        const tR = RR(JR, GR, yR);
        return this.handles(tR) ? this.stairsOf(tR) : null
      }
      cornerAt(RR, JR, GR, yR, tR) {
        let {
          rot: uR,
          half: ZR
        } = tR;
        const qR = fR[uR],
          iR = tR => {
            let [qR, iR] = tR;
            const fR = this.stairsAt(RR, JR + qR, GR, yR + iR);
            return null !== fR && fR.rot === uR && fR.half === ZR
          },
          rR = this.stairsAt(RR, JR + qR[0], GR, yR + qR[1]);
        if (null !== rR && rR.half === ZR) {
          const RR = fR[rR.rot];
          if (wR(qR, RR) && !iR([-RR[0], -RR[1]])) return KR(RR, VR(qR)) ? "outerLeft" : "outerRight"
        }
        const eR = this.stairsAt(RR, JR - qR[0], GR, yR - qR[1]);
        if (null !== eR && eR.half === ZR) {
          const RR = fR[eR.rot];
          if (wR(qR, RR) && !iR(RR)) return KR(RR, VR(qR)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = uR, this.rootIds = new Set(tR.i.map((RR => (0, yR.n)(RR))))
      }
      handles(RR) {
        var JR;
        const GR = null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta;
        return void 0 !== GR && this.rootIds.has(GR.rootId)
      }
      affects(RR) {
        return this.handles(RR)
      }
      placedBy(RR) {
        return yR.l[RR].meta.rootName === tR.p ? null : tR.p
      }
      shape(RR, JR, GR, uR, ZR) {
        const {
          rootId: qR,
          rootName: iR,
          rot: fR
        } = yR.l[ZR].meta;
        let VR = 0;
        return tR.t[fR].forEach(((tR, ZR) => {
          var iR;
          let [KR, wR, rR] = tR;
          const eR = null === (iR = yR.l[RR(JR + KR, GR + wR, uR + rR)]) || void 0 === iR ? void 0 : iR.meta;
          (null === eR || void 0 === eR ? void 0 : eR.rootId) === qR && eR.rot === fR && (VR |= 1 << ZR)
        })), (0, yR.n)((0, tR.h)(iR, fR, VR))
      }
    }, ...ZR.d.map((RR => new qR.d(RR))), new class {
      constructor() {
        this.reshapeOffsets = CR
      }
      handles(RR) {
        const JR = XR(RR);
        return UR.has(JR) || JR === eR.l
      }
      affects(RR) {
        const JR = XR(RR);
        return WR.has(JR) || AR.has(JR) || JR === LR || JR === eR.l || void 0 !== eR.d[JR]
      }
      shape(RR, JR, GR, tR, uR, ZR) {
        const {
          rootName: qR,
          rot: iR
        } = yR.l[uR].meta;
        return qR === eR.l ? ZR ? uR : function(RR, JR, GR, tR, uR) {
          const [ZR, qR] = eR.h[uR - 1];
          for (let iR = 1; iR <= eR.O; iR++) {
            const [fR, VR] = [JR - ZR * iR, tR - qR * iR], KR = RR(fR, GR, VR);
            if (XR(KR) === eR.l && yR.l[KR].meta.rot === uR && aR(JR, GR, tR, fR, VR)) return (0, yR.n)((0, eR.lb)(uR, !MR(KR)))
          }
          return (0, yR.n)((0, eR.lb)(uR, !1))
        }(RR, JR, GR, tR, iR) : (0, yR.n)((0, eR.V)(qR, iR, function(RR, JR, GR, tR, uR) {
          const [ZR, qR] = eR.h[uR - 1], iR = (uR, ZR) => function(RR, JR, GR) {
            var tR;
            const uR = null === (tR = yR.l[RR]) || void 0 === tR ? void 0 : tR.meta;
            if (!uR) return !1;
            const ZR = uR.rootName,
              qR = WR.has(ZR) || MR(RR);
            if (!qR && !AR.has(ZR) && ZR !== LR) return !1;
            const [iR, fR] = eR.h[uR.rot - 1];
            if (qR && iR === -JR && fR === -GR) return !0;
            if (AR.has(ZR)) return iR === JR && fR === GR;
            const VR = yR.l[RR].name;
            return (ZR === LR ? (0, eR.hb)(VR, iR, fR) : ZR === nR ? [(0, eR.Z)(VR, iR, fR)] : []).some((RR => {
              let [yR, tR] = RR;
              return yR === -JR && tR === -GR
            }))
          }(RR(JR + uR, GR, tR + ZR), uR, ZR), fR = RR(JR - ZR, GR, tR - qR), VR = XR(fR) === LR && yR.l[fR].meta.rot === uR, KR = 1 === eR.d[XR(RR(JR, GR - 1, tR))] || -1 === eR.d[XR(RR(JR, GR + 1, tR))];
          if (KR || VR || iR(-ZR, -qR)) return null;
          const wR = iR(-qR, ZR),
            rR = iR(qR, -ZR);
          if (wR === rR) return null;
          return wR ? "turnLeft" : "turnRight"
        }(RR, JR, GR, tR, iR)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = pR, this.rootId = (0, yR.n)(lR.n)
      }
      handles(RR) {
        var JR;
        return (null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta.rootId) === this.rootId
      }
      affects(RR) {
        return this.handles(RR)
      }
      shape(RR, JR, GR, tR, uR, ZR) {
        const qR = gR(uR);
        return (0, yR.n)((iR = qR.rot, null !== (fR = ZR ? this.reshapedHalf(RR, JR, GR, tR, qR) : this.placedHalf(RR, JR, GR, tR, qR.rot)) ? (0, lR.d)(lR.n, iR, fR) : 1 === iR ? lR.n : `${lR.n}|meta|rot${iR}`));
        var iR, fR
      }
      placedHalf(RR, JR, GR, yR, tR) {
        const [uR, ZR] = BR.c[tR];
        for (const [qR, iR] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const fR = JR + iR * uR,
            VR = yR + iR * ZR,
            KR = bR(RR, fR, GR, VR);
          if (null !== KR && KR.rot === tR && (null === KR.half || !vR(RR, fR, GR, VR, KR))) return qR
        }
        return null
      }
      reshapedHalf(RR, JR, GR, yR, tR) {
        if (null !== tR.half && vR(RR, JR, GR, yR, tR)) return tR.half;
        for (const uR of ["right", "left"]) {
          const [ZR, qR] = (0, lR.l)(tR.rot, uR), iR = bR(RR, JR + ZR, GR, yR + qR);
          if (null !== iR && iR.rot === tR.rot && iR.half === lR.r[uR]) return uR
        }
        return null
      }
    }, new OR.c];

    function NR(RR, JR, GR, yR, tR) {
      let uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const ZR of xR)
        if (ZR.handles(tR)) return ZR.shape(RR, JR, GR, yR, tR, uR);
      return tR
    }

    function DR(RR) {
      for (const yR of xR) {
        var JR, GR;
        if (yR.handles(RR)) return null !== (JR = null === (GR = yR.placedBy) || void 0 === GR ? void 0 : GR.call(yR, RR)) && void 0 !== JR ? JR : null
      }
      return null
    }
  },
  39576: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => lR,
      e: () => AR,
      g: () => WR
    });
    var yR = GR(5844),
      tR = GR(5871),
      uR = GR(5938),
      ZR = GR(39585),
      qR = GR(5935);
    const iR = (0, ZR.J)("pipe"),
      fR = (0, ZR.J)("tank"),
      VR = (0, ZR.J)("port"),
      KR = "Reactor Port";

    function wR(RR, JR, GR) {
      const yR = new Set([uR.f, uR.c, KR, ...JR, ...GR, ...RR ? [ZR.e] : []]);
      return {
        makers: new Set(JR),
        roots: yR
      }
    }
    const rR = {
        water: wR(!0, ["Condenser"], ["Centrifuge", "Synthesizer", ZR.b]),
        cryo: wR(!1, [ZR.b], [])
      },
      eR = new Set([...rR.water.roots, ...rR.cryo.roots]),
      aR = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      LR = tR.f.map((RR => aR[RR])),
      nR = LR.map((RR => {
        let [JR, GR, yR] = RR;
        return ZR.s.findIndex((RR => {
          let [tR, uR, ZR] = RR;
          return tR === JR && uR === GR && ZR === yR
        }))
      }));

    function UR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const GR = yR.l[RR],
        tR = null === GR || void 0 === GR ? void 0 : GR.meta.rootName,
        wR = rR[JR];
      if (!tR || !wR.roots.has(tR)) return null;
      if ((0, uR.i)(tR)) return (0, ZR.H)(GR.name) === JR ? iR : null;
      if (tR === ZR.e) return fR;
      if (tR === KR) return GR.name.endsWith("|Water") ? VR : null;
      const [eR, aR] = qR.h[(GR.meta.rot || 1) - 1];
      return (0, ZR.J)(wR.makers.has(tR) ? "maker" : "user", [-eR, 0, -aR])
    }

    function WR(RR, JR, GR, tR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: qR
      } = rR[uR];
      return LR.some(((fR, VR) => {
        var KR, wR;
        let [rR, eR, aR] = fR;
        const LR = RR(JR + rR, GR + eR, tR + aR),
          WR = UR(LR, uR);
        return null !== WR && qR.has(null !== (KR = null === (wR = yR.l[LR]) || void 0 === wR ? void 0 : wR.meta.rootName) && void 0 !== KR ? KR : "") && !(0, ZR.N)(iR, WR, nR[VR])
      }))
    }

    function AR(RR) {
      const JR = yR.l[RR];
      return JR ? (0, ZR.H)(JR.name) : null
    }
    let CR = null;

    function XR(RR) {
      if (!CR) {
        CR = new Map;
        for (const RR of ["water", "cryo"])
          for (let JR = 0; JR < 64; JR++)
            for (const GR of [!1, !0]) CR.set((0, uR.l)(RR, JR, GR), {
              Nr: RR,
              mask: JR,
              full: GR
            })
      }
      return CR.get(RR)
    }
    const MR = new Map(Array.from({
      length: uR.g + 1
    }, ((RR, JR) => [(0, uR.p)(JR), JR])));

    function BR(RR, JR, GR, tR, uR, ZR) {
      return LR.some(((qR, iR) => {
        var fR, VR, KR;
        let [wR, rR, eR] = qR;
        if (0 === (ZR >> iR & 1)) return !1;
        const aR = null !== (fR = null === (VR = yR.l[RR(JR + wR, GR + rR, tR + eR)]) || void 0 === VR ? void 0 : VR.name) && void 0 !== fR ? fR : "",
          LR = XR(aR);
        return LR ? LR.Nr === uR && LR.full : (null !== (KR = function(RR) {
          var JR;
          return null !== (JR = MR.get(RR)) && void 0 !== JR ? JR : null
        }(aR)) && void 0 !== KR ? KR : 0) > 0
      }))
    }
    class lR {
      constructor() {
        this.reshapeOffsets = LR
      }
      handles(RR) {
        return null !== AR(RR)
      }
      affects(RR) {
        var JR, GR;
        return eR.has(null !== (JR = null === (GR = yR.l[RR]) || void 0 === GR ? void 0 : GR.meta.rootName) && void 0 !== JR ? JR : "")
      }
      placedBy(RR) {
        var JR;
        return (null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta.rootName) === uR.c ? uR.f : null
      }
      shape(RR, JR, GR, tR, qR, fR) {
        var VR, KR, wR;
        const rR = null !== (VR = null === (KR = yR.l[qR]) || void 0 === KR ? void 0 : KR.name) && void 0 !== VR ? VR : "",
          eR = fR || rR !== uR.f ? null !== (wR = (0, ZR.H)(rR)) && void 0 !== wR ? wR : "water" : function(RR, JR, GR, yR) {
            return LR.some(((tR, uR) => {
              let [qR, fR, VR] = tR;
              const KR = UR(RR(JR + qR, GR + fR, yR + VR), "cryo");
              return null !== KR && "port" !== KR.kind && (0, ZR.N)(iR, KR, nR[uR])
            })) ? "cryo" : "water"
          }(RR, JR, GR, tR),
          aR = function(RR, JR, GR, yR) {
            let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              uR = 0;
            return LR.forEach(((qR, fR) => {
              let [VR, KR, wR] = qR;
              const rR = UR(RR(JR + VR, GR + KR, yR + wR), tR);
              rR && (0, ZR.N)(iR, rR, nR[fR]) && (uR |= 1 << fR)
            })), uR
          }(RR, JR, GR, tR, eR),
          WR = fR ? function(RR) {
            var JR;
            return !0 === (null === (JR = XR(RR)) || void 0 === JR ? void 0 : JR.full)
          }(rR) : BR(RR, JR, GR, tR, eR, aR);
        return (0, yR.n)((0, uR.l)(eR, aR, WR))
      }
    }
  },
  38007: (RR, JR, GR) => {
    function yR(RR, JR) {
      return null === RR || null === JR ? RR === JR : RR[0] === JR[0] && RR[1] === JR[1] && RR[2] === JR[2]
    }

    function tR(RR) {
      return [RR[0] + .5, RR[1] + .5, RR[2] + .5]
    }
    GR.d(JR, {
      b: () => tR,
      e: () => yR
    })
  },
  39329: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      g: () => uR
    });
    const yR = ["Chest", "Loot Chest", "Moonstone Chest"],
      tR = [{
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

    function uR(RR) {
      return tR.find((JR => JR.exactMatch ? RR === JR.name : RR.includes(JR.name)))
    }
  },
  38040: (RR, JR, GR) => {
    function yR(RR) {
      return RR.includes("Leaf Bed")
    }

    function tR(RR) {
      return / Bed(?: Head)?(?:\||$)/.test(RR) && !yR(RR)
    }

    function uR(RR) {
      return RR.includes(" Strongbed")
    }

    function ZR(RR) {
      return yR(RR) || tR(RR) || uR(RR)
    }
    GR.d(JR, {
      d: () => ZR,
      f: () => yR,
      h: () => uR,
      k: () => tR
    })
  },
  38034: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR
    });
    var yR = GR(38040),
      tR = GR(5844);
    const uR = [],
      ZR = [],
      qR = [],
      iR = [];
    for (const VR of Object.keys(tR.q))(0, yR.f)(VR) ? uR.push(VR) : (0, yR.k)(VR) && ZR.push(VR), (0, yR.h)(VR) && qR.push(VR), (VR.includes(" Bed Head") || VR.includes(" Strongbed Head")) && iR.push(VR);
    const fR = {
      leafBeds: uR,
      woolBeds: ZR,
      strongBeds: qR,
      beds: [...uR, ...ZR, ...qR],
      bedHeads: iR,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39750: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);