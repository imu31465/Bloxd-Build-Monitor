export const id = 26;
export const ids = [26];
export const modules = {
  37868: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => UW,
      l: () => xW,
      o: () => ZW
    });
    var mW = OW(35220),
      EW = OW(3361),
      NW = OW(3368),
      PW = OW(9954),
      LW = OW(1526),
      cW = OW(62),
      wW = OW(80),
      tW = OW(1283);

    function ZW() {
      var WW;
      return (0, LW.g)(EW.g, (0, EW.F)()), (0, tW.jsx)(tW.Fragment, {
        children: null === (WW = (0, EW.F)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function xW(WW) {
      var iW;
      let {
        show: OW
      } = WW;
      (0, LW.g)(EW.g, (0, EW.F)());
      const wW = null === (iW = (0, EW.F)()) || void 0 === iW ? void 0 : iW.menu;
      return (0, cW.useEffect)((() => {
        var WW;
        OW || (null === wW || void 0 === wW || null === (WW = wW.onClose) || void 0 === WW || WW.call(wW), (0, NW.s)())
      }), [OW, wW]), (0, cW.useEffect)((() => OW ? (0, PW.e)(NW.C, NW.f) : void 0), [OW]), (0, tW.jsx)(mW.d, {
        showing: OW,
        globallyUniqueKey: "clientGameMenu",
        children: null === wW || void 0 === wW ? void 0 : wW.content
      })
    }
    const lW = new Map,
      AW = new Set;

    function bW(WW, iW) {
      iW ? lW.set(WW, iW) : lW.delete(WW);
      for (const OW of AW) OW()
    }

    function jW(WW) {
      let {
        placement: iW = "bottom"
      } = WW;
      const OW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const WW = OW.current;
        return bW(iW, WW), () => {
          lW.get(iW) === WW && bW(iW, null)
        }
      }), [iW]), (0, tW.jsx)("div", {
        ref: OW,
        id: `clientGameHud-${iW}`,
        style: {
          display: "contents"
        }
      })
    }

    function UW(WW) {
      let {
        children: iW,
        placement: OW = "bottom"
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => {
        var WW;
        return null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null
      }));
      return (0, cW.useEffect)((() => {
        const WW = () => {
          var WW;
          EW(null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null)
        };
        return AW.add(WW), WW(), () => {
          AW.delete(WW)
        }
      }), [OW]), mW ? (0, wW.createPortal)(iW, mW) : null
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  38030: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => yW,
      h: () => SW,
      j: () => YW,
      n: () => AW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(62),
      PW = OW(80),
      LW = OW(1436),
      cW = OW(1532),
      wW = OW(1434),
      tW = OW(1269),
      ZW = OW(1172),
      xW = OW(38039),
      lW = OW(1283);

    function AW(WW) {
      const [iW, OW] = (0, NW.useState)((() => (0, xW.o)(WW)));
      return (0, NW.useEffect)((() => (OW((0, xW.o)(WW)), (0, xW.M)((() => {
        OW((0, xW.o)(WW))
      })))), [WW]), iW
    }

    function bW(WW, iW) {
      "function" === typeof WW ? WW(iW) : WW && (WW.current = iW)
    }

    function jW(WW) {
      let {
        tutorial: iW,
        step: OW,
        enabled: mW = !0
      } = WW;
      const EW = AW(iW);
      return mW && EW === OW
    }

    function UW(WW, iW) {
      const OW = (0, xW.s)(WW),
        mW = OW.indexOf(iW);
      return !OW.slice(mW + 1).some((iW => (0, xW.x)(WW, iW)))
    }

    function kW(WW, iW, OW, mW) {
      let {
        tutorial: EW,
        step: NW,
        waitForClick: PW = !1,
        onPrevious: LW
      } = WW;
      const cW = iW && (0, xW.w)(EW, NW),
        wW = iW && !UW(EW, NW),
        ZW = PW ? mW : OW;
      let lW = null;
      cW ? lW = () => {
        null === LW || void 0 === LW || LW(), (0, xW.u)(EW, NW)
      } : wW && (lW = () => {
        (0, xW.m)(EW)
      }), (0, tW.r)("popup", null !== ZW && void 0 !== ZW ? ZW : OW, lW, iW && null !== ZW, null, cW ? void 0 : "controller:menusSkipTutorial")
    }

    function sW(WW) {
      let {
        tutorial: iW,
        step: OW,
        text: mW,
        waitForClick: EW = !1,
        onPrevious: NW
      } = WW;
      const {
        t: PW
      } = (0, ZW.B)(), LW = UW(iW, OW);
      return (0, lW.jsxs)(lW.Fragment, {
        children: [(0, lW.jsx)("div", {
          className: "TutorialStepText",
          children: mW
        }), (0, lW.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, xW.w)(iW, OW) && (0, lW.jsx)(cW.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === NW || void 0 === NW || NW(), (0, xW.u)(iW, OW)
            },
            children: PW("tutorial:back")
          }), !EW && (0, lW.jsx)(cW.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, xW.h)(OW)
            },
            padDefaultFocus: !0,
            children: PW(LW ? "tutorial:done" : "tutorial:next")
          }), !LW && (0, lW.jsx)(cW.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, xW.m)(iW)
            },
            children: PW("tutorial:skip")
          })]
        })]
      })
    }
    const MW = 6;

    function KW(WW) {
      let {
        rect: iW,
        margin: OW
      } = WW;
      const mW = Math.max(0, iW.top - OW),
        EW = iW.bottom + OW,
        NW = Math.max(0, iW.left - OW),
        PW = iW.right + OW;
      return (0, lW.jsxs)(lW.Fragment, {
        children: [(0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: mW
          }
        }), (0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: EW,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: mW,
            left: 0,
            width: NW,
            height: EW - mW
          }
        }), (0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: mW,
            left: PW,
            right: 0,
            height: EW - mW
          }
        })]
      })
    }

    function SW(WW) {
      let {
        target: iW,
        placement: OW,
        boxRef: mW,
        className: cW,
        spotlight: tW = !0,
        spotlightMargin: ZW = MW,
        children: xW
      } = WW;
      const {
        getArrowProps: AW,
        getTooltipProps: bW,
        setTooltipRef: jW,
        setTriggerRef: UW,
        update: kW
      } = (0, LW.c)({
        placement: OW,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, ZW]
      });
      (0, NW.useLayoutEffect)((() => {
        UW(iW)
      }), [iW, UW]);
      const sW = function(WW, iW) {
        const [OW, mW] = (0, NW.useState)(null);
        return (0, NW.useEffect)((() => {
          if (!iW || !WW) return void mW(null);
          let OW = 0,
            EW = null;
          const NW = () => {
            const iW = WW.getBoundingClientRect();
            EW && iW.left === EW.left && iW.top === EW.top && iW.width === EW.width && iW.height === EW.height || (EW = iW, mW(iW)), OW = requestAnimationFrame(NW)
          };
          return NW(), () => {
            cancelAnimationFrame(OW)
          }
        }), [WW, iW]), OW
      }(iW, tW);
      (0, NW.useEffect)((() => {
        null === kW || void 0 === kW || kW()
      }), [sW, kW]), (0, NW.useEffect)((() => {
        if (tW || !iW || !kW) return;
        const WW = new ResizeObserver((() => {
          kW()
        }));
        return WW.observe(iW), iW.parentElement && WW.observe(iW.parentElement), () => {
          WW.disconnect()
        }
      }), [iW, tW, kW]), (0, NW.useEffect)((() => {
        tW && (null === iW || void 0 === iW || iW.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [iW, tW]);
      const SW = (0, NW.useCallback)((WW => {
        jW(WW), mW && (mW.current = WW)
      }), [jW, mW]);
      return (0, PW.createPortal)((0, lW.jsxs)(lW.Fragment, {
        children: [sW && (0, lW.jsx)(KW, {
          rect: sW,
          margin: ZW
        }), (0, lW.jsxs)("div", {
          ref: SW,
          ...bW({
            className: EW()("tooltip-container SmallTextLight TutorialStep", cW)
          }),
          children: [xW, (0, lW.jsx)("div", {
            ...AW({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, wW.g)())
    }
    const YW = (0, NW.forwardRef)((function(WW, iW) {
      let {
        placement: OW = "right",
        children: mW,
        ...EW
      } = WW;
      const PW = jW(EW),
        LW = (0, NW.useRef)(null),
        cW = (0, NW.useRef)(null);
      kW(EW, PW, LW, cW);
      const [wW, tW] = (0, NW.useState)(null), ZW = mW.ref, xW = (0, NW.useCallback)((WW => {
        cW.current = WW, tW(WW), bW(iW, WW), bW(ZW, WW)
      }), [iW, ZW]);
      return (0, lW.jsxs)(lW.Fragment, {
        children: [(0, NW.cloneElement)(mW, {
          ref: xW
        }), PW && (0, lW.jsx)(SW, {
          target: wW,
          placement: OW,
          boxRef: LW,
          children: (0, lW.jsx)(sW, {
            ...EW
          })
        })]
      })
    }));

    function yW(WW) {
      const iW = jW(WW),
        OW = (0, NW.useRef)(null);
      return kW(WW, iW, OW, null), iW ? (0, PW.createPortal)((0, lW.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, lW.jsx)("div", {
          ref: OW,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, lW.jsx)(sW, {
            ...WW
          })
        })
      }), (0, wW.g)()) : null
    }
  },
  37919: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW,
      h: () => wW,
      i: () => tW,
      j: () => AW
    });
    var mW = OW(62),
      EW = OW(4275),
      NW = OW(3457),
      PW = OW(27);
    const LW = 8,
      cW = "InGameHeaderContainer",
      wW = "TopRightElements";

    function tW(WW) {
      const [iW] = (0, EW.d)(), [OW, NW] = (0, mW.useState)(!1);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const iW = document.querySelector(`.${cW}`),
          OW = document.querySelector(`.${wW}`),
          mW = () => {
            const mW = WW.getBoundingClientRect(),
              EW = iW ? iW.getBoundingClientRect().right : 0,
              PW = OW ? OW.getBoundingClientRect().left : window.innerWidth,
              cW = mW.left < EW + LW,
              wW = mW.right > PW - LW;
            NW(cW || wW)
          };
        mW();
        const EW = new ResizeObserver(mW);
        return EW.observe(WW), iW && EW.observe(iW), OW && EW.observe(OW), () => {
          EW.disconnect()
        }
      }), [WW, iW]), OW
    }
    const ZW = `.InGameUi .${cW}`,
      xW = [ZW, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      lW = 1e3;

    function AW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW,
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [EW, cW] = (0, mW.useState)(null);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const mW = new ResizeObserver((() => {
          wW()
        }));
        mW.observe(WW), iW && iW !== WW && mW.observe(iW);
        let EW = [];

        function wW() {
          var NW, PW, wW;
          const tW = WW.getBoundingClientRect(),
            lW = function() {
              const WW = xW.map((WW => document.querySelector(WW))).filter((WW => null !== WW));
              for (const iW of WW) EW.includes(iW) || mW.observe(iW);
              for (const iW of EW) WW.includes(iW) || mW.unobserve(iW);
              return EW = WW, WW
            }(),
            AW = lW.filter((WW => {
              const iW = WW.getBoundingClientRect();
              return iW.width > 0 && iW.height > 0 && tW.left < iW.right + LW && tW.right > iW.left - LW
            }));
          if (0 === AW.length && !OW) return void cW(null);
          const bW = lW.find((WW => WW.matches(ZW))),
            jW = Math.max(null !== (NW = null === bW || void 0 === bW ? void 0 : bW.getBoundingClientRect().bottom) && void 0 !== NW ? NW : 0, ...AW.map((WW => WW.getBoundingClientRect().bottom))),
            UW = null !== (PW = null === iW || void 0 === iW || null === (wW = iW.offsetParent) || void 0 === wW ? void 0 : wW.getBoundingClientRect().top) && void 0 !== PW ? PW : 0;
          cW(Math.ceil(jW + LW / 2) - Math.round(UW))
        }
        const tW = setInterval(wW, lW);
        wW(), window.addEventListener("resize", wW);
        const AW = (0, PW.n)(NW.d, wW);
        return () => {
          mW.disconnect(), clearInterval(tW), window.removeEventListener("resize", wW), AW()
        }
      }), [WW, iW, OW]), EW
    }
  },
  39244: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      f: () => mW,
      h: () => LW,
      k: () => EW,
      o: () => PW,
      q: () => NW
    });
    const mW = 1.001,
      EW = .501,
      NW = .025,
      PW = .75,
      LW = .08,
      cW = 4;

    function wW() {
      const WW = EW,
        iW = NW,
        OW = WW - iW / 2,
        mW = (2 * WW - 2 * iW) / (2 * cW - 1),
        PW = [];
      for (const EW of [-OW, OW])
        for (const NW of [-OW, OW])
          for (let OW = 0; OW < cW; OW++) {
            const LW = -WW + iW + mW * (2 * OW + .5);
            PW.push([mW, iW, iW, LW, EW, NW]), PW.push([iW, mW, iW, EW, LW, NW]), PW.push([iW, iW, mW, EW, NW, LW])
          }
      for (const EW of [-OW, OW])
        for (const WW of [-OW, OW])
          for (const mW of [-OW, OW]) PW.push([iW, iW, iW, EW, WW, mW]);
      return PW
    }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  39708: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      h: () => LW,
      k: () => cW
    });
    const mW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      EW = [0, 1, 2, 0, 2, 3],
      NW = [4, 5];

    function PW(WW, iW, OW, mW, EW) {
      for (let PW = 0; PW < 6; PW++) NW.includes(PW) === EW && wW(WW, iW, OW, mW, PW)
    }

    function LW(WW, iW, OW, mW) {
      for (let EW = 0; EW < 6; EW++) wW(WW, iW, OW, mW, EW)
    }

    function cW(WW, iW, OW, NW, PW) {
      for (let LW = 0; LW < 6; LW++)
        for (const cW of [0, 1]) {
          const [wW, tW, ZW] = [cW + 2, cW + 1, (cW + 3) % 4], xW = WW.length / 3;
          for (const [iW, EW] of [
              [cW, tW],
              [wW, tW],
              [wW, ZW],
              [cW, ZW]
            ])
            for (let cW = 0; cW < 3; cW++) {
              const wW = mW[3 * (4 * LW + iW) + cW],
                tW = mW[3 * (4 * LW + EW) + cW];
              WW.push((wW + (tW - wW) * PW) * NW / 2 + OW[cW])
            }
          for (const WW of EW) iW.push(xW + WW)
        }
    }

    function wW(WW, iW, OW, NW, PW) {
      let [LW, cW, wW] = OW, [tW, ZW, xW] = NW;
      const lW = WW.length / 3;
      for (let EW = 4 * PW; EW < 4 * PW + 4; EW++) WW.push(mW[3 * EW] * tW / 2 + LW, mW[3 * EW + 1] * ZW / 2 + cW, mW[3 * EW + 2] * xW / 2 + wW);
      for (const mW of EW) iW.push(lW + mW)
    }
  },
  40798: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => cW,
      h: () => PW,
      j: () => wW,
      n: () => tW
    });
    var mW = OW(40804),
      EW = OW(39708);
    const NW = .35,
      PW = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      LW = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      cW = [.95, .2, .15];
    class wW {
      constructor() {
        this.groups = []
      }
      add(WW, iW, OW, EW, NW) {
        let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mW.d;
        for (const mW of this.groups)
          if (xW(mW, EW, NW)) return mW.cells.push(WW, iW, OW), void mW.boxes.push(PW);
        this.groups.push({
          rgb: EW,
          look: NW,
          cells: [WW, iW, OW],
          boxes: [PW]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class tW {
      constructor(WW) {
        this.api = WW, this.shown = []
      }
      show(WW) {
        const iW = [];
        for (const OW of WW) {
          const WW = this.shown.findIndex((WW => {
            let {
              group: iW
            } = WW;
            return xW(iW, OW.rgb, OW.look) && lW(iW, OW)
          })); - 1 === WW ? iW.push(this.build(OW)) : (iW.push(this.shown[WW]), this.shown.splice(WW, 1))
        }
        this.dispose(), this.shown = iW
      }
      dispose() {
        for (const {
            meshes: WW
          }
          of this.shown)
          for (const iW of WW) this.api.disposeGameMesh(iW);
        this.shown = []
      }
      build(WW) {
        const {
          rgb: iW,
          look: OW,
          boxes: mW
        } = WW, PW = [iW[0] + (1 - iW[0]) * NW, iW[1] + (1 - iW[1]) * NW, iW[2] + (1 - iW[2]) * NW], LW = [this.buildMesh(WW.cells, iW, OW.alpha, ((WW, iW, EW, NW) => {
          ZW(WW, iW, EW, mW[NW], OW.size, !1)
        })), this.buildMesh(WW.cells, PW, OW.alpha, ((WW, iW, EW, NW) => {
          ZW(WW, iW, EW, mW[NW], OW.size, !0)
        }))];
        return OW.crossed && LW.push(this.buildMesh(WW.cells, iW, .9, ((WW, iW, mW) => {
          (0, EW.k)(WW, iW, mW, OW.size + .01, .12)
        }))), {
          group: WW,
          meshes: LW
        }
      }
      buildMesh(WW, iW, OW, mW) {
        const EW = [WW[0], WW[1], WW[2]],
          NW = [],
          PW = [];
        for (let LW = 0; LW < WW.length; LW += 3) mW(NW, PW, [WW[LW] - EW[0] + .5, WW[LW + 1] - EW[1] + .5, WW[LW + 2] - EW[2] + .5], LW / 3);
        return this.api.createGameMesh({
          positions: NW,
          indices: PW
        }, {
          rgb: [iW[0], iW[1], iW[2]],
          alpha: OW
        }, EW)
      }
    }

    function ZW(WW, iW, OW, mW, NW, PW) {
      for (let LW = 0; LW < mW.length; LW += 6) {
        const cW = [0, 0, 0],
          wW = [0, 0, 0];
        for (let WW = 0; WW < 3; WW++) cW[WW] = OW[WW] + ((mW[LW + WW] + mW[LW + WW + 3]) / 2 - .5) * NW, wW[WW] = (mW[LW + WW + 3] - mW[LW + WW]) * NW;
        (0, EW.d)(WW, iW, cW, wW, PW)
      }
    }

    function xW(WW, iW, OW) {
      return WW.rgb[0] === iW[0] && WW.rgb[1] === iW[1] && WW.rgb[2] === iW[2] && WW.look === OW
    }

    function lW(WW, iW) {
      if (WW.cells.length !== iW.cells.length) return !1;
      for (let OW = 0; OW < WW.cells.length; OW++)
        if (WW.cells[OW] !== iW.cells[OW]) return !1;
      return WW.boxes.every(((WW, OW) => WW === iW.boxes[OW]))
    }
  },
  40809: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => lm
    });
    const mW = [0, 90, 180, 270],
      EW = "plotsblueprint";
    var NW = OW(62),
      PW = OW(3361),
      LW = OW(25),
      cW = OW(1526),
      wW = OW(2085),
      tW = OW(1172),
      ZW = OW(1089),
      xW = OW.n(ZW),
      lW = OW(1729),
      AW = OW(40814),
      bW = OW(37868),
      jW = OW(1391),
      UW = OW(2032),
      kW = OW(2080),
      sW = OW(4619),
      MW = OW(1856);

    function KW() {}
    const SW = (0, NW.createContext)({
      hint: null,
      journalRef: KW,
      placementCardRef: KW,
      buildRef: KW
    });
    var YW = OW(27);
    const yW = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      TW = {
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
      JW = ["small", "medium", "large"].flatMap((WW => yW.flat().filter((iW => TW[iW].tier === WW))));

    function hW(WW) {
      return TW[WW]
    }
    const HW = new Map(yW.flatMap((WW => WW.slice(1).map(((iW, OW) => [iW, WW[OW]])))));

    function nW(WW) {
      var iW;
      return null !== (iW = HW.get(WW)) && void 0 !== iW ? iW : null
    }
    const uW = {
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

    function oW(WW, iW) {
      const OW = new Set(WW),
        mW = function(WW) {
          const iW = new Set(WW);
          return new Set(JW.filter((WW => {
            const OW = nW(WW);
            return null === OW || iW.has(OW)
          })))
        }(OW);
      return JW.map((WW => {
        const EW = WW === iW;
        if (OW.has(WW)) return {
          id: WW,
          active: EW,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const NW = uW[WW],
          PW = void 0 === NW || NW.firstBuild && OW.size > 0 ? null : NW.key;
        return mW.has(WW) ? {
          id: WW,
          active: EW,
          note: PW,
          state: "open",
          unlockedBy: null
        } : {
          id: WW,
          active: EW,
          note: PW,
          state: "locked",
          unlockedBy: nW(WW)
        }
      }))
    }
    const dW = "plotsJournalChanged";
    class eW {
      constructor(WW, iW) {
        this.api = WW, this.placement = iW, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.wZ(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = WW => {
          this.placement.start(WW), (0, PW.m)()
        }, this.putAway = () => {
          this.api.sendCommand(`${EW} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      yZ(WW) {
        let [, iW, OW] = WW;
        this.pages = oW(iW, OW), YW.l.iZ(dW, this.pages, !0)
      }
      openFromServer(WW) {
        let [, iW] = WW;
        this.openRequested = iW, this.hZ()
      }
      hZ() {
        const WW = this.openRequested;
        null === WW || LW.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, lW.l)() || (0, MW.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = WW, (0, PW.H)()))
      }
      wZ(WW) {
        this.reported.has(WW) || (this.reported.add(WW), this.api.sendCommand(`${EW} report ${WW}`))
      }
    }
    var vW = OW(1283);
    const gW = "KeyJ";

    function DW(WW) {
      let {
        journal: iW
      } = WW;
      const OW = (0, cW.g)(dW, iW.getPages()),
        {
          isTouchScreen: mW
        } = (0, LW.p)(["isTouchScreen"]),
        {
          t: EW
        } = (0, tW.B)(),
        wW = (0, NW.useContext)(SW),
        ZW = null !== OW;
      return (0, NW.useEffect)((() => ZW ? (0, AW.d)(gW) : void 0), [ZW]), (0, sW.c)((WW => ZW && WW.code === gW && !WW.repeat && !(0, MW.isTypingInInput)()), (WW => {
        (0, lW.A)(WW, !0, PW.H)
      })), null === OW ? null : (0, vW.jsx)(bW.h, {
        placement: "topRight",
        children: (0, vW.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, vW.jsxs)("button", {
            ref: wW.journalRef,
            type: "button",
            className: xW()("PlotsJournalButton SmallTextBold", {
              Touch: mW
            }),
            onClick: PW.H,
            children: [(0, vW.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, vW.jsx)(UW.b, {
                itemName: "Book",
                amount: 0
              })
            }), EW("plotsGame:journalButton"), !mW && (0, vW.jsx)(kW.e, {
              className: "PlotsJournalButtonKey",
              keyCode: gW
            }), "openJournal" === wW.hint && (0, vW.jsx)(jW.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var VW = OW(5725);
    const pW = [0, 90, 180, 270],
      fW = /^(meta\|rot\d)\|([lrud]+)$/,
      CW = "nesw",
      XW = /^meta\|([nesw]*)\|?(Stacked)?$/,
      BW = function(WW) {
        const iW = new WeakMap;
        return (OW, mW) => {
          let EW = iW.get(OW);
          return void 0 === EW && (EW = WW(OW, mW), iW.set(OW, EW)), EW
        }
      }((WW => new qW(WW)));
    class qW {
      constructor(WW) {
        this.blockMetadata = WW, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const iW = new Set(Object.keys(WW).map((iW => WW[iW].id)));
        iW.add(0), this.maxBlockId = Math.max(...iW)
      }
      static
      for (WW) {
        return BW(WW)
      }
      getBlockIdMapping(WW, iW) {
        const OW = this.getBlockIdMappingKey(WW, iW);
        let mW = this.blockIdMappings.get(OW);
        return void 0 === mW && pW.includes(WW) && (mW = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, WW, iW), this.blockIdMappings.set(OW, mW)), mW
      }
      turnBlockId(WW, iW, OW) {
        return this.mapBlockId(this.blockMetadata[WW], iW, this.getRotationMapping(iW, OW), OW)
      }
      getBlockIdMappingKey(WW, iW) {
        return `r${WW}|m${Number(iW)}`
      }
      createBlockIdMapping(WW, iW, OW, mW) {
        const EW = new Uint16Array(iW + 1),
          NW = this.getRotationMapping(OW, mW);
        for (const PW in WW) {
          const iW = WW[PW];
          EW[iW.id] = this.mapBlockId(iW, OW, NW, mW)
        }
        return EW
      }
      getRotationMapping(WW, iW) {
        const OW = Math.round(WW / 90),
          mW = new Uint8Array(4);
        for (let EW = 0; EW < 4; EW++) mW[EW] = (4 + EW - OW) % 4;
        if (iW) {
          let WW = mW[0];
          mW[0] = mW[1], mW[1] = WW, WW = mW[2], mW[2] = mW[3], mW[3] = WW
        }
        return mW
      }
      mapBlockId(WW, iW, OW, mW) {
        var EW;
        const {
          blockMetadata: NW
        } = this, PW = Math.round(iW / 90), {
          id: LW,
          meta: cW
        } = WW, {
          rot: wW,
          rootName: tW,
          metaStr: ZW
        } = cW;
        let xW;
        const [, lW, AW] = null !== (EW = XW.exec(ZW)) && void 0 !== EW ? EW : [];
        if (void 0 !== lW) {
          var bW, jW;
          xW = null !== (bW = null === (jW = NW[`${tW}|meta|${[CW.split("").filter(((WW,iW)=>lW.split("").some((WW=>{const OW=CW.indexOf(WW);return((mW?3-OW:OW)+PW)%4===iW})))).join(""),AW].filter(Boolean).join("|")}`]) || void 0 === jW ? void 0 : jW.id) && void 0 !== bW ? bW : LW
        } else if (null === wW) xW = LW;
        else {
          var UW, kW;
          const WW = OW[wW - 1] + 1;
          let iW = ZW.replace(`rot${wW}`, `rot${WW}`);
          mW && cW.stairsCorner && (iW = iW.replace(/(Left|Right)$/, (WW => "Left" === WW ? "Right" : "Left"))), mW && "Chest" === tW && (iW = iW.replace(/\|(left|right)$/, ((WW, iW) => "left" === iW ? "|right" : "|left")));
          const EW = fW.exec(iW);
          if (mW && null !== EW) {
            const WW = "lrud".split("").filter((WW => EW[2].includes("l" === WW ? "r" : "r" === WW ? "l" : WW)));
            iW = `${EW[1]}|${WW.join("")}`
          }
          const PW = `${tW}|${iW}`;
          if (xW = null !== (UW = null === (kW = NW[PW]) || void 0 === kW ? void 0 : kW.id) && void 0 !== UW ? UW : null, null === xW) {
            const WW = NW[tW];
            xW = WW.rootMetaDesc === PW ? WW.id : LW
          }
        }
        return xW
      }
    }

    function RW(WW, iW, OW) {
      let {
        xRotationMappedOrigin: mW,
        shouldSwapXZ: EW
      } = OW;
      const NW = EW ? iW : WW;
      return null === mW ? NW : mW - NW
    }

    function GW(WW, iW, OW) {
      let {
        zRotationMappedOrigin: mW,
        shouldSwapXZ: EW
      } = OW;
      const NW = EW ? WW : iW;
      return null === mW ? NW : mW - NW
    }
    const IW = {
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
      aW = new Map;

    function rW(WW, iW) {
      const OW = `${WW}|${iW}`;
      let mW = aW.get(OW);
      if (void 0 === mW) {
        const {
          size: EW,
          palette: NW,
          layers: PW
        } = IW[WW], LW = 90 === iW || 270 === iW, [cW, wW] = LW ? [EW[2], EW[0]] : [EW[0], EW[2]], tW = function(WW, iW, OW) {
          let mW = null,
            EW = null,
            NW = !1;
          switch (WW) {
            case 0:
              break;
            case 90:
              mW = iW - 1, NW = !0;
              break;
            case 180:
              mW = iW - 1, EW = OW - 1;
              break;
            case 270:
              EW = OW - 1, NW = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${WW}`)
          }
          return {
            xRotationMappedOrigin: mW,
            zRotationMappedOrigin: EW,
            shouldSwapXZ: NW
          }
        }(iW, cW, wW), ZW = qW.for(VW.j), xW = NW.map((WW => (0, VW.f)(ZW.turnBlockId((0, VW.l)(WW), iW, !1)))), lW = [];
        PW.forEach(((WW, iW) => {
          WW.split(" ").forEach(((WW, OW) => {
            for (let mW = 0; mW < WW.length; mW++)
              if ("." !== WW[mW]) {
                const EW = [RW(mW, OW, tW), iW, GW(mW, OW, tW)];
                lW.push({
                  offset: EW,
                  block: xW[WW.charCodeAt(mW) - "a".charCodeAt(0)]
                })
              }
          }))
        })), mW = {
          size: [cW, EW[1], wW],
          cells: lW
        }, aW.set(OW, mW)
      }
      return mW
    }
    const zW = "plotsBuildProgressChanged",
      FW = new Map;

    function QW(WW, iW, OW) {
      let mW = 0,
        EW = 0;
      return function(WW) {
        let iW = FW.get(WW);
        if (void 0 === iW) {
          const mW = [];
          for (const {
              offset: iW
            }
            of rW(WW, 0).cells) {
            var OW;
            mW[iW[1]] = (null !== (OW = mW[iW[1]]) && void 0 !== OW ? OW : 0) + 1
          }
          iW = mW, FW.set(WW, iW)
        }
        return iW
      }(WW).forEach(((WW, OW) => {
        mW += WW, OW > iW && (EW += WW)
      })), {
        id: WW,
        filled: mW - EW - OW,
        total: mW
      }
    }
    class Wi {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(WW) {
        this.shown = WW, this.topOpen = 0, null === WW && this.iZ(null)
      }
      update(WW, iW, OW) {
        const mW = this.shown;
        null !== mW && (WW >= iW && (this.topOpen = OW), this.iZ(QW(mW.id, iW - mW.y, WW >= iW ? OW : this.topOpen + OW)))
      }
      iZ(WW) {
        const iW = this.progress;
        (null === WW || void 0 === WW ? void 0 : WW.id) === (null === iW || void 0 === iW ? void 0 : iW.id) && (null === WW || void 0 === WW ? void 0 : WW.filled) === (null === iW || void 0 === iW ? void 0 : iW.filled) && (null === WW || void 0 === WW ? void 0 : WW.total) === (null === iW || void 0 === iW ? void 0 : iW.total) || (this.progress = WW, YW.l.iZ(zW, WW, !0))
      }
    }
    const ii = "plotsPlotChanged",
      Oi = "plotsGuideChanged",
      mi = "plotsGuideDone";
    class Ei {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(WW) {
        this.plot = WW, YW.l.iZ(ii, WW, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(WW) {
        this.guide = WW, YW.l.iZ(Oi, WW, !0)
      }
      receiveGuideDone() {
        YW.l.iZ(mi, void 0, !0)
      }
    }
    var Ni = OW(1269),
      Pi = OW(39759),
      Li = OW(38030),
      ci = OW(1551);

    function wi(WW) {
      let {
        onSkip: iW,
        className: OW
      } = WW;
      const {
        t: mW
      } = (0, tW.B)();
      return (0, vW.jsx)("button", {
        type: "button",
        className: xW()("PlotsGuideSkipButton", OW),
        ...(0, ci.d)(iW, "pointerup"),
        children: mW("tutorial:skip")
      })
    }

    function ti(WW) {
      let {
        target: iW,
        placement: OW,
        spotlight: mW = null,
        children: EW
      } = WW;
      const {
        t: PW
      } = (0, tW.B)(), LW = (0, NW.useRef)(iW);
      return LW.current = iW, (0, Ni.r)("popup", LW, null === mW ? null : mW.onSkip, null !== mW, null, "controller:menusSkipTutorial"), (0, vW.jsxs)(Li.h, {
        target: iW,
        placement: OW,
        className: xW()("PlotsGuideBubble", {
          Passive: null === mW
        }),
        spotlight: null !== mW,
        spotlightMargin: 30,
        children: [(0, vW.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, vW.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: Pi,
            alt: "",
            draggable: !1
          }), (0, vW.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: PW("plotsGame:maverickName")
          }), null !== mW && (0, vW.jsx)(wi, {
            onSkip: mW.onSkip
          })]
        }), (0, vW.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: EW
        })]
      })
    }

    function Zi(WW) {
      let {
        className: iW,
        icon: OW,
        title: mW,
        children: EW
      } = WW;
      return (0, vW.jsxs)("div", {
        className: xW()("PlotsCard", iW),
        role: "status",
        children: [(0, vW.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, vW.jsx)(jW.c, {
            name: OW
          })
        }), (0, vW.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, vW.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: mW
          }), EW]
        })]
      })
    }

    function xi(WW) {
      let {
        progress: iW,
        goal: OW
      } = WW;
      const mW = Math.min(iW, OW);
      return (0, vW.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, vW.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": OW,
          "aria-valuenow": mW,
          children: (0, vW.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${mW/OW})`
            }
          })
        }), (0, vW.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [mW, "/", OW]
        })]
      })
    }

    function li(WW) {
      let {
        progress: iW,
        guide: OW
      } = WW;
      const {
        t: mW
      } = (0, tW.B)(), {
        isTouchScreen: EW
      } = (0, LW.p)(["isTouchScreen"]), NW = iW.filled < 5;
      return (0, vW.jsxs)(vW.Fragment, {
        children: [(NW || iW.total - iW.filled <= 5) && (0, vW.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, vW.jsx)("div", {
            ref: OW.bindHand,
            className: "PlotsGuideHand",
            children: (0, vW.jsx)(jW.c, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, vW.jsx)(bW.h, {
          placement: "bottom",
          children: (0, vW.jsxs)(Zi, {
            icon: "hammer",
            title: mW(hW(iW.id).displayName.translationKey),
            children: [NW && (0, vW.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: EW ? mW("plotsGame:guideBuildTouch") : Ai(mW)
            }), (0, vW.jsx)(xi, {
              progress: iW.filled,
              goal: iW.total
            })]
          })
        })]
      })
    }

    function Ai(WW) {
      const iW = wW.v["alt-fire"][0];
      return "Mouse3" === iW ? WW("plotsGame:guideBuildRightClick") : WW("plotsGame:guideBuildKeys", {
        key: (0, wW.m)(iW)
      })
    }

    function bi() {
      return (0, vW.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, vW.jsx)(jW.c, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var ji = OW(1294),
      Ui = OW(3599),
      ki = OW(39595),
      si = OW(39352),
      Mi = OW(38088),
      Ki = OW(5754),
      Si = OW(5772),
      Yi = OW(344),
      yi = OW(38986);
    const Ti = new Map([
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
      Ji = [...Mi.b.blockRemoveActionRoots, ...si.b, ...Ki.k, "Board", "Code Block", "Custom Lobby Block"],
      Hi = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let ni = null;

    function ui() {
      return ni ??= function() {
        const WW = oi(),
          iW = Math.max(...WW.map((WW => VW.j[WW].id))) + 1,
          OW = new Int32Array(iW),
          mW = new Int32Array(iW),
          EW = new Uint8Array(iW).fill(1),
          NW = new Uint8Array(iW),
          PW = new Uint8Array(iW),
          LW = new Array(iW).fill("Air"),
          cW = new Map,
          wW = WW => {
            let iW = cW.get(WW);
            return void 0 === iW && (iW = cW.size + 1, cW.set(WW, iW)), iW
          },
          tW = new Set(Ji);
        for (const xW of WW) {
          var ZW;
          const {
            id: WW,
            meta: iW,
            altActionable: cW,
            canBePlacedOver: lW
          } = VW.j[xW];
          OW[WW] = wW(di(xW));
          const AW = iW.stairsCorner;
          if (null === AW) mW[WW] = OW[WW];
          else {
            const OW = AW.endsWith("Right");
            mW[WW] = wW(`${iW.rootName}|rot${OW?iW.rot%4+1:iW.rot}|${iW.halfblockPlacement}|${AW.replace("Right","Left")}`)
          }
          EW[WW] = lW ? 1 : 0, NW[WW] = cW || null !== iW.open || xW in yi.d || tW.has(iW.rootName) || void 0 !== (0, si.e)(iW.rootName) ? 1 : 0;
          const {
            rootName: bW
          } = iW;
          PW[WW] = null !== iW.open || si.b.includes(bW) || bW.includes("Bookshelf") || bW.includes("Mailbox") ? 1 : 0, LW[WW] = null !== (ZW = (0, ki.f)(WW)) && void 0 !== ZW ? ZW : bW
        }
        return {
          kinds: OW,
          shapes: mW,
          empty: EW,
          inUse: NW,
          ownAltActionMessage: PW,
          placingItems: LW
        }
      }(), ni
    }

    function oi() {
      return Object.keys(VW.j).filter((WW => VW.j[WW].name === WW))
    }

    function di(WW) {
      var iW;
      const OW = VW.j[WW],
        {
          rootName: mW,
          rot: EW
        } = OW.meta,
        [, ...NW] = (null !== (iW = OW.rootMetaDesc) && void 0 !== iW ? iW : WW).split("|"),
        PW = NW.filter((WW => !("meta" === WW || Hi.test(WW) || (0, Si.w)(OW) && /^[nesw]+$/.test(WW) || Ki.k.includes(mW) && /^[lrud]+$/.test(WW) || Yi.L.includes(mW) && /^(left|right)$/.test(WW))));
      return [mW, ...PW].map((WW => "fenceGate" === OW.model && WW === `rot${EW}` ? "rot" + ((EW - 1) % 2 + 1) : WW)).join("|")
    }

    function ei(WW, iW) {
      const {
        kinds: OW,
        shapes: mW
      } = ui();
      return OW[WW] === OW[iW] || mW[WW] === mW[iW]
    }

    function vi(WW) {
      return 1 === ui().empty[WW]
    }

    function gi(WW) {
      return ui().placingItems[WW]
    }

    function Di(WW) {
      return Ti.get(VW.j[WW].meta.rootName)
    }
    var Vi = OW(40804),
      fi = OW(182);
    class Ci {
      constructor(WW) {
        this.api = WW, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(WW) {
        const iW = fi.f.jZ;
        this.chunks = [];
        for (let OW = 0; OW < WW.length; OW += 3) {
          const mW = Math.floor(WW[OW] / iW),
            EW = Math.floor(WW[OW + 1] / iW),
            NW = Math.floor(WW[OW + 2] / iW);
          this.watches(mW, EW, NW) || this.chunks.push(mW, EW, NW)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const WW = performance.now();
        if (WW - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = WW;
        let iW = !1;
        for (let OW = 0; OW < this.chunks.length; OW += 3) {
          const WW = this.api.getChunkVersion(this.chunks[OW], this.chunks[OW + 1], this.chunks[OW + 2]);
          this.versions[OW / 3] !== WW && (this.versions[OW / 3] = WW, iW = !0)
        }
        return iW
      }
      watches(WW, iW, OW) {
        for (let mW = 0; mW < this.chunks.length; mW += 3)
          if (this.chunks[mW] === WW && this.chunks[mW + 1] === iW && this.chunks[mW + 2] === OW) return !0;
        return !1
      }
    }
    var Xi = OW(40798);

    function Bi(WW, iW, OW, mW, EW) {
      if (!WW.isBlockInLoadedChunk(iW, mW - 6, OW) || !WW.isBlockInLoadedChunk(iW, mW + 6 + EW, OW) || !WW.canModifyBlockAt(iW, mW, OW)) return NaN;
      let NW = mW - 1;
      if (0 !== WW.getBlockId(iW, NW, OW)) {
        for (; NW < mW + 6 && 0 !== WW.getBlockId(iW, NW + 1, OW);) NW++;
        return NW
      }
      for (; NW > mW - 6;)
        if (NW--, 0 !== WW.getBlockId(iW, NW, OW)) return NW;
      return NaN
    }

    function qi(WW, iW, OW, mW, EW) {
      let NW = 0;
      for (let PW = mW + 1; PW <= mW + EW; PW++) 0 !== WW.getBlockId(iW, PW, OW) && NW++;
      return NW
    }

    function Ri(WW) {
      const iW = new Map;
      for (const PW of WW) {
        var OW;
        if (Number.isNaN(PW)) return null;
        iW.set(PW, (null !== (OW = iW.get(PW)) && void 0 !== OW ? OW : 0) + 1)
      }
      let mW = NaN,
        EW = 0;
      for (const [PW, LW] of iW)(LW > EW || LW === EW && PW < mW) && (mW = PW, EW = LW);
      let NW = 0;
      for (const PW of WW) NW += Math.abs(PW - mW);
      return NW
    }

    function Gi(WW, iW, OW, mW) {
      const {
        eye: EW,
        forward: NW,
        tanHalfFovX: PW,
        tanHalfFovY: LW
      } = WW, [cW, wW] = function(WW) {
        let [iW, OW, mW] = WW;
        const EW = Math.hypot(iW, mW),
          [NW, PW] = [mW / EW, -iW / EW];
        return [
          [NW, 0, PW],
          [OW * PW, mW * NW - iW * PW, -OW * NW]
        ]
      }(NW), [tW, ZW] = [iW * PW, OW * LW], xW = NW[0] + tW * cW[0] + ZW * wW[0], lW = NW[1] + ZW * wW[1], AW = NW[2] + tW * cW[2] + ZW * wW[2], bW = (mW - EW[1]) / lW;
      return bW > 0 && bW < 1 / 0 ? [EW[0] + bW * xW, EW[2] + bW * AW] : null
    }
    const Ii = "plotsBlueprintPlacementChanged",
      ai = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class ri {
      constructor(WW, iW) {
        this.api = WW, this.localPlayerId = iW, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = WW => {
          var iW, OW, mW, NW;
          const PW = null !== (iW = null === (OW = this.placing) || void 0 === OW ? void 0 : OW.rotation) && void 0 !== iW ? iW : 0,
            {
              size: LW
            } = rW(WW, PW),
            cW = this.api.Vk(this.localPlayerId),
            [wW, tW] = null !== (mW = null !== (NW = function(WW, iW, OW, mW) {
              const [EW, NW, PW] = iW, [LW, cW, wW] = [Math.floor(OW[0]), Math.floor(OW[1]), Math.floor(OW[2])], tW = 6 + Math.max(EW, PW) / 2, [ZW, xW] = [Math.ceil(tW + EW / 2), Math.ceil(tW + PW / 2)], [lW, AW] = [LW - ZW, wW - xW], [bW, jW] = [2 * ZW + 1, 2 * xW + 1], UW = new Float64Array(bW * jW), kW = new Uint16Array(bW * jW);
              for (let YW = 0; YW < bW; YW++)
                for (let iW = 0; iW < jW; iW++) {
                  const OW = Bi(WW, lW + YW, AW + iW, cW, NW);
                  UW[YW * jW + iW] = OW, Number.isNaN(OW) || (kW[YW * jW + iW] = qi(WW, lW + YW, AW + iW, OW, NW))
                }
              const sW = Math.hypot(mW[0], mW[2]),
                MW = [];
              let KW = null,
                SW = 1 / 0;
              for (let YW = 0; YW + EW <= bW; YW++)
                for (let WW = 0; WW + PW <= jW; WW++) {
                  const [iW, NW] = [lW + YW, AW + WW], [cW, ZW] = [iW + EW / 2 - OW[0], NW + PW / 2 - OW[2]], xW = Math.hypot(cW, ZW);
                  if (xW > tW || LW >= iW - 2 && LW < iW + EW + 2 && wW >= NW - 2 && wW < NW + PW + 2) continue;
                  MW.length = 0;
                  let bW = 0;
                  for (let OW = 0; OW < EW; OW++)
                    for (let iW = 0; iW < PW; iW++) MW.push(UW[(YW + OW) * jW + WW + iW]), bW += kW[(YW + OW) * jW + WW + iW];
                  const yW = Ri(MW);
                  if (null === yW) continue;
                  const TW = xW + 3 * (yW + bW) + (1 - (0 === sW ? 1 : (cW * mW[0] + ZW * mW[2]) / (xW * sW))) / 2 * 6;
                  TW < SW && (SW = TW, KW = [iW, NW])
                }
              return KW
            }(this.api, LW, cW, this.camera.forward)) && void 0 !== NW ? NW : this.cornerOnTarget(LW)) && void 0 !== mW ? mW : [Math.floor(cW[0]) + 2, Math.floor(cW[2])];
          this.placing = {
            id: WW,
            rotation: PW,
            corner: [wW, this.playerLevel(), tW],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${EW} preview`)
        }, this.rotate = () => {
          const {
            id: WW,
            rotation: iW,
            corner: OW
          } = this.placing, EW = mW[(mW.indexOf(iW) + 1) % mW.length], [NW, , PW] = rW(WW, iW).size, [LW, , cW] = rW(WW, EW).size;
          this.moveTo(OW[0] + Math.floor(NW / 2) - Math.floor(LW / 2), OW[2] + Math.floor(PW / 2) - Math.floor(cW / 2), EW)
        }, this.hoverAt = (WW, iW) => {
          this.placing.hover = [WW, iW], this.moveCentreTo(this.camera, WW, iW)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (WW, iW) => {
          const OW = this.placing,
            {
              eye: mW,
              forward: EW,
              tanHalfFovX: NW,
              tanHalfFovY: PW
            } = this.camera,
            LW = {
              eye: [mW[0], mW[1], mW[2]],
              forward: [EW[0], EW[1], EW[2]],
              tanHalfFovX: NW,
              tanHalfFovY: PW
            },
            cW = OW.corner[1],
            wW = Gi(LW, WW, iW, cW);
          OW.hover = null, OW.drag = wW && {
            view: LW,
            ground: wW,
            corner: [OW.corner[0], OW.corner[2]],
            level: cW
          }
        }, this.dragTo = (WW, iW) => {
          const OW = this.placing.drag,
            mW = OW && Gi(OW.view, WW, iW, OW.level);
          null !== OW && null !== mW && this.moveTo(OW.corner[0] + Math.round(mW[0] - OW.ground[0]), OW.corner[1] + Math.round(mW[1] - OW.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const WW = this.view;
          WW.waiting || (WW.blocked ? this.iZ({
            ...WW,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const WW = this.placing,
            {
              id: iW,
              rotation: OW,
              corner: mW
            } = WW;
          this.api.sendCommand(`${EW} place ${iW} ${mW.join(" ")} ${OW}`), WW.sent = {
            atMs: performance.now(),
            corner: [...mW],
            rotation: OW,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${EW} preview off`))
        }, this.chunkWatch = new Ci(WW), this.meshes = new Xi.n(WW)
      }
      getView() {
        return this.view
      }
      hZ() {
        const WW = this.placing;
        null !== WW && (null !== WW.sent && !WW.sent.timedOut && performance.now() - WW.sent.atMs > 3e3 ? (WW.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(WW) || this.chunkWatch.changed() || this.view.settled !== zi(WW, this.view.blocked)) && this.update())
      }
      afterRender(WW) {
        ! function(WW, iW) {
          for (let OW = 0; OW < 3; OW++) iW.eye[OW] = WW.cameraPosition[OW], iW.forward[OW] = WW.cameraDirection[OW];
          iW.tanHalfFovX = WW.tanHalfFovX, iW.tanHalfFovY = WW.tanHalfFovY
        }(WW, this.camera);
        const iW = this.placing;
        null !== iW && null !== iW.hover && this.moveCentreTo(this.camera, iW.hover[0], iW.hover[1])
      }
      yZ(WW) {
        const iW = this.placing;
        if (null === iW || null === iW.sent || "active" !== WW[0]) return;
        const {
          sent: OW
        } = iW, [, mW, EW, NW, PW, LW, cW] = WW;
        EW && mW === iW.id && cW === OW.rotation && NW === OW.corner[0] && PW === OW.corner[1] && LW === OW.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(WW) {
        let [iW, , OW] = WW;
        const mW = this.api.getTargetedBlock();
        if (null === mW) return null;
        const [EW, , NW] = mW.position;
        return [EW - Math.floor(iW / 2), NW - Math.floor(OW / 2)]
      }
      playerLevel() {
        var WW;
        const [iW, OW, mW] = this.api.Vk(this.localPlayerId);
        if (null !== (WW = this.api.getLocalPlayerMovement()) && void 0 !== WW && WW.onGround) return Math.ceil(OW - .01);
        const [EW, NW, PW] = [Math.floor(iW), Math.floor(OW), Math.floor(mW)];
        for (let LW = NW; LW >= NW - 2; LW--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(EW, LW, PW))) return LW + 1;
        return NW
      }
      followPlayerLevel(WW) {
        if (Fi(WW)) return !1;
        const iW = this.playerLevel();
        return iW !== WW.corner[1] && (WW.corner[1] = iW, !0)
      }
      moveCentreTo(WW, iW, OW) {
        const mW = this.placing,
          EW = Gi(WW, iW, OW, mW.corner[1]);
        if (null !== EW) {
          const [WW, , iW] = rW(mW.id, mW.rotation).size;
          this.moveTo(Math.round(EW[0] - WW / 2), Math.round(EW[1] - iW / 2))
        }
      }
      moveTo(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const mW = this.placing;
        if (Fi(mW)) return;
        const [EW, NW, PW] = mW.corner;
        if (this.centreOnPlot(EW, PW) && !this.centreOnPlot(WW, iW, OW))
          if (this.centreOnPlot(WW, PW, OW)) iW = PW;
          else {
            if (!this.centreOnPlot(EW, iW, OW)) return;
            WW = EW
          } WW === EW && iW === PW && OW === mW.rotation || (mW.rotation = OW, mW.corner = [WW, NW, iW], mW.moved = !0, mW.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: mW,
          corner: EW
        } = this.placing, [NW, , PW] = rW(mW, OW).size;
        return this.api.canModifyBlockAt(WW + Math.floor(NW / 2), EW[1], iW + Math.floor(PW / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.iZ(null)
      }
      update() {
        const {
          id: WW,
          rotation: iW,
          corner: OW,
          refusals: mW
        } = this.placing, EW = new Xi.j, NW = [];
        let PW = !1,
          LW = 0;
        for (const {
            offset: ZW,
            block: xW
          }
          of rW(WW, iW).cells) {
          const [WW, iW, mW] = [OW[0] + ZW[0], OW[1] + ZW[1], OW[2] + ZW[2]];
          NW.push(WW, iW, mW);
          const cW = !this.api.canModifyBlockAt(WW, iW, mW),
            wW = this.api.getBlockId(WW, iW, mW),
            tW = !vi(wW) && !ei(this.api.blockNameToBlockId(xW), wW);
          PW ||= cW, LW += tW ? 1 : 0, cW || tW ? EW.add(WW, iW, mW, Xi.e, Xi.d) : EW.add(WW, iW, mW, Di(xW), ai, (0, Vi.e)(xW))
        }
        this.chunkWatch.watch(NW), this.meshes.show(EW.toArray());
        const cW = this.view,
          wW = Fi(this.placing),
          tW = zi(this.placing, PW);
        (null === cW || void 0 === cW ? void 0 : cW.id) === WW && cW.blocked === PW && cW.toClear === LW && cW.waiting === wW && cW.refusals === mW && cW.settled === tW || this.iZ({
          id: WW,
          blocked: PW,
          toClear: LW,
          waiting: wW,
          refusals: mW,
          settled: tW
        })
      }
      iZ(WW) {
        this.view = WW, YW.l.iZ(Ii, WW, !0)
      }
    }

    function zi(WW, iW) {
      let {
        moved: OW,
        stillSinceMs: mW
      } = WW;
      return !iW && performance.now() - mW >= (OW ? 1500 : 6e3)
    }

    function Fi(WW) {
      let {
        sent: iW
      } = WW;
      return null !== iW && !iW.timedOut
    }
    var Qi = OW(5251);
    class WO {
      constructor(WW) {
        this.placement = WW, this.press = null
      }
      down(WW) {
        if (null !== this.press) return !1;
        const {
          id: iW,
          mouse: OW,
          x: mW,
          y: EW,
          atMs: NW
        } = WW;
        return this.press = {
          id: iW,
          mouse: OW,
          x: mW,
          y: EW,
          atMs: NW,
          moved: !1
        }, OW || this.placement.beginDrag(WW.ndcX, WW.ndcY), !0
      }
      move(WW) {
        const iW = this.press;
        null !== iW && iW.id === WW.id && (iW.moved ||= Math.hypot(WW.x - iW.x, WW.y - iW.y) > 8), WW.mouse ? this.placement.hoverAt(WW.ndcX, WW.ndcY) : (null === iW || void 0 === iW ? void 0 : iW.id) === WW.id && this.placement.dragTo(WW.ndcX, WW.ndcY)
      }
      up(WW) {
        const iW = this.press;
        (null === iW || void 0 === iW ? void 0 : iW.id) === WW.id && (this.move(WW), this.end(), !iW.moved && (iW.mouse || WW.atMs - iW.atMs <= 250) && this.placement.tap())
      }
      cancel(WW) {
        var iW;
        (null === (iW = this.press) || void 0 === iW ? void 0 : iW.id) === WW && this.end()
      }
      leave(WW) {
        let {
          id: iW,
          mouse: OW
        } = WW;
        OW && this.placement.endHover(), this.cancel(iW)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const iO = "PlotsPlacementLayer";

    function OO(WW) {
      let {
        placement: iW
      } = WW;
      return null === (0, cW.g)(Ii, iW.getView()) ? null : (0, vW.jsx)(mO, {
        placement: iW
      })
    }

    function mO(WW) {
      let {
        placement: iW
      } = WW;
      (0, Qi.b)(!0, !0, iO);
      const OW = (0, NW.useMemo)((() => new WO(iW)), [iW]);
      return (0, vW.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: WW => {
          "mouse" === WW.pointerType && 0 !== WW.button || !OW.down(EO(WW)) || WW.currentTarget.setPointerCapture(WW.pointerId)
        },
        onPointerMove: WW => {
          OW.move(EO(WW))
        },
        onPointerUp: WW => {
          OW.up(EO(WW))
        },
        onPointerCancel: WW => {
          OW.cancel(WW.pointerId)
        },
        onLostPointerCapture: WW => {
          OW.cancel(WW.pointerId)
        },
        onPointerLeave: WW => {
          OW.leave(EO(WW))
        },
        "aria-hidden": !0
      })
    }

    function EO(WW) {
      const {
        left: iW,
        top: OW,
        width: mW,
        height: EW
      } = WW.currentTarget.getBoundingClientRect();
      return {
        id: WW.pointerId,
        mouse: "mouse" === WW.pointerType,
        x: WW.clientX,
        y: WW.clientY,
        ndcX: (WW.clientX - iW) / mW * 2 - 1,
        ndcY: 1 - (WW.clientY - OW) / EW * 2,
        atMs: WW.timeStamp
      }
    }

    function NO() {
      return (0, ji.t)().some((WW => WW !== ji.b && WW !== iO))
    }
    const PO = 2500;

    function LO(WW) {
      let {
        hud: iW,
        guide: OW,
        tracker: mW,
        placement: EW,
        children: PW
      } = WW;
      const {
        t: ZW
      } = (0, tW.B)(), {
        isTouchScreen: xW
      } = (0, LW.p)(["isTouchScreen"]), lW = (0, cW.g)(Oi, iW.getGuide()), AW = (0, cW.g)(ii, iW.getPlot()), bW = (0, cW.g)(zW, mW.get()), jW = function(WW) {
        const {
          openInGameMenuName: iW,
          openEverythingMenuName: OW,
          loadingOverlayVisible: mW
        } = (0, LW.p)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), EW = (0, Ui.e)(), [PW, wW] = (0, NW.useState)(NO);
        (0, NW.useEffect)((() => {
          const WW = () => {
            wW(NO())
          };
          WW();
          const iW = (0, ji.r)(WW),
            OW = (0, ji.n)(WW);
          return () => {
            iW(), OW()
          }
        }), []);
        const tW = (0, cW.g)(Ii, WW.getView()),
          ZW = "clientGame" === iW;
        return {
          hudHidden: EW || mW,
          journalOpen: ZW,
          covered: PW || null !== OW || null !== iW && !ZW,
          placing: null === tW ? null : tW.settled ? "placeBuild" : "placeSpot"
        }
      }(EW), UW = function(WW, iW, OW) {
        return "none" === WW[0] || OW.hudHidden || OW.journalOpen || OW.covered ? null : null !== OW.placing ? OW.placing : null !== iW ? "build" : "choose" === WW[1] ? "openJournal" : null
      }(lW, null === bW ? null : bW.id, jW), kW = function() {
        const [WW, iW] = (0, NW.useState)(null), [OW, mW] = (0, NW.useState)(!1);
        return (0, cW.e)(mi, (() => {
          iW(performance.now())
        })), (0, NW.useEffect)((() => {
          if (null === WW) return;
          const iW = window.setTimeout((() => {
              mW(!0)
            }), PO),
            OW = window.setTimeout((() => {
              mW(!1)
            }), 7500);
          return () => {
            window.clearTimeout(iW), window.clearTimeout(OW)
          }
        }), [WW]), OW
      }() && !jW.hudHidden && !jW.covered && !jW.journalOpen && null === jW.placing, [sW, MW] = (0, NW.useState)(!1);
      (0, NW.useEffect)((() => {
        jW.journalOpen && MW(!0)
      }), [jW.journalOpen]);
      const [KW, YW] = (0, NW.useState)(null), [yW, TW] = (0, NW.useState)(null), [JW, hW] = (0, NW.useState)(null), HW = (0, NW.useMemo)((() => ({
        hint: UW,
        journalRef: YW,
        placementCardRef: TW,
        buildRef: hW
      })), [UW]), nW = "plot" === AW[0] && "own" === AW[5], uW = xW && !sW && nW ? {
        onSkip: OW.skip
      } : null;
      return (0, vW.jsxs)(SW.Provider, {
        value: HW,
        children: [PW, "openJournal" === UW && null !== KW && (0, vW.jsx)(ti, {
          target: KW,
          placement: "left",
          spotlight: uW,
          children: xW ? ZW("plotsGame:guideOpenJournal") : ZW("plotsGame:guideOpenJournalKeys", {
            key: (0, wW.m)(gW)
          })
        }), "placeSpot" === UW && null !== yW && (0, vW.jsxs)(vW.Fragment, {
          children: [xW && (0, vW.jsx)(bi, {}), (0, vW.jsx)(ti, {
            target: yW,
            placement: "top",
            children: ZW(xW ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === UW && null !== JW && null !== yW && (0, vW.jsx)(ti, {
          target: xW ? JW : yW,
          placement: "top",
          children: ZW(xW ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === UW && null !== bW && (0, vW.jsx)(li, {
          progress: bW,
          guide: OW
        }), kW && null !== KW && (0, vW.jsx)(ti, {
          target: KW,
          placement: "left",
          children: ZW("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var cO = OW(39679),
      wO = OW(39687);
    class tO {
      constructor(WW, iW, OW) {
        this.api = WW, this.localPlayerId = iW, this.nextCell = OW, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = WW => {
          this.hand = WW
        }
      }
      afterRender(WW) {
        const iW = this.hand;
        if (null === iW) return;
        const OW = this.nextCell.get();
        if (null === OW) return void(0, cO.h)(iW, !0);
        const mW = (0, wO.c)(iW, WW, this.api.getPositionView(this.localPlayerId), OW, 1, 40);
        null !== mW && (0, cO.e)(iW, Math.round(100 * mW.x) / 100, Math.round(100 * mW.y) / 100)
      }
    }
    var ZO = OW(1532),
      xO = OW(5238),
      lO = OW(1102);
    const AO = {
        farm_hut: OW.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: OW.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: OW.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: OW.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: OW.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: OW.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: OW.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: OW.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: OW.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: OW.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: OW.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: OW.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      bO = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      jO = ["market_stand", "rusticHome_tent", "farm_hut"].map((WW => ({
        id: WW,
        blocks: rW(WW, 0).cells.length
      }))).sort(((WW, iW) => WW.blocks - iW.blocks)).map(((WW, iW) => ({
        ...WW,
        effortKey: bO[iW]
      })));

    function UO(WW) {
      let {
        onBuild: iW
      } = WW;
      const {
        t: OW
      } = (0, tW.B)();
      return (0, vW.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, vW.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, vW.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: OW("plotsGame:guidePickTitle")
          }), (0, vW.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, vW.jsx)("img", {
              src: Pi,
              alt: "",
              draggable: !1
            }), OW("plotsGame:guidePickNote")]
          }), (0, vW.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: jO.map((WW => {
              let {
                id: mW,
                blocks: EW,
                effortKey: NW
              } = WW;
              return (0, vW.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, vW.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    iW(mW)
                  },
                  children: (0, vW.jsx)("img", {
                    src: AO[mW],
                    alt: "",
                    draggable: !1
                  })
                }), (0, vW.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, vW.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, vW.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: OW(hW(mW).displayName.translationKey)
                    }), (0, vW.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: OW(NW)
                    }), (0, vW.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: OW("plotsGame:journalBlocks", {
                        blocks: String(EW)
                      })
                    })]
                  }), (0, vW.jsx)(ZO.n, {
                    onClick: () => {
                      iW(mW)
                    },
                    children: OW("plotsGame:placementBuild")
                  })]
                })]
              }, mW)
            }))
          })]
        })
      })
    }

    function kO(WW) {
      let {
        direction: iW,
        disabled: OW,
        onTurn: mW
      } = WW;
      const {
        t: EW
      } = (0, tW.B)();
      return (0, vW.jsx)("div", {
        className: xW()("PlotsJournalArrow", iW),
        children: (0, vW.jsx)(ZO.f, {
          disabled: OW,
          ariaLabel: EW("Forward" === iW ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            mW(iW)
          },
          children: (0, vW.jsx)(jW.c, {
            name: "angle-up"
          })
        })
      })
    }
    const sO = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function MO(WW) {
      let {
        page: iW,
        building: OW,
        onBuild: mW,
        onPutAway: EW
      } = WW;
      const {
        t: NW
      } = (0, tW.B)(), {
        displayName: PW,
        tier: LW
      } = hW(iW.id), cW = rW(iW.id, 0).cells.length, wW = "locked" === iW.state, ZW = OW ? ZO.f : ZO.n;
      return (0, vW.jsxs)("article", {
        className: xW()("PlotsJournalPage", {
          Locked: wW
        }),
        children: [(0, vW.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: NW(PW.translationKey)
        }), (0, vW.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [NW(sO[LW]), " \xb7 ", NW("plotsGame:journalBlocks", {
            blocks: String(cW)
          })]
        }), (0, vW.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [JW.map((WW => (0, vW.jsx)("img", {
            className: xW()({
              Shown: WW === iW.id
            }),
            src: AO[WW],
            alt: "",
            draggable: !1
          }, WW))), "completed" === iW.state && (0, vW.jsx)("span", {
            className: "PlotsJournalStamp",
            children: NW("plotsGame:journalBuilt")
          }), wW && (0, vW.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, vW.jsx)(jW.c, {
              name: "lock"
            })
          })]
        }), null !== iW.note && (0, vW.jsx)("p", {
          className: "PlotsJournalNote",
          children: NW(iW.note)
        }), (0, vW.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === iW.state && (0, vW.jsx)("p", {
            className: "PlotsJournalHint",
            children: NW("plotsGame:journalLocked", {
              name: NW(hW(iW.unlockedBy).displayName.translationKey)
            })
          }), iW.active && (0, vW.jsxs)(vW.Fragment, {
            children: [(0, vW.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: NW("plotsGame:journalBuilding")
            }), (0, vW.jsx)(ZO.h, {
              onClick: EW,
              children: NW("plotsGame:journalPutAway")
            })]
          }), !wW && !iW.active && (0, vW.jsx)(ZW, {
            onClick: () => {
              mW(iW.id)
            },
            children: NW("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function KO(WW) {
      let {
        className: iW,
        page: OW,
        hidden: mW,
        building: EW,
        journal: NW
      } = WW;
      return (0, vW.jsxs)("div", {
        ref: WW => {
          null !== WW && (WW.inert = mW)
        },
        className: xW()("PlotsJournalSide", iW),
        children: [void 0 !== OW && (0, vW.jsx)(MO, {
          page: OW,
          building: EW,
          onBuild: NW.build,
          onPutAway: NW.putAway
        }), void 0 === OW && (0, vW.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var SO = OW(2012);

    function YO(WW) {
      return Math.cos((0, SO.i)(WW))
    }

    function yO(WW) {
      return (0, SO.x)(Math.acos(Yi.e.clamp(WW, -1, 1)))
    }

    function TO(WW, iW, OW, mW, EW) {
      const NW = Math.abs(iW - WW),
        PW = (0, SO.x)(EW / (OW * Math.abs(Math.sin((0, SO.i)(WW))))),
        LW = 450 * Math.min(1, NW / mW),
        cW = PW > 0 ? 3 * NW / PW : 1 / 0;
      return Math.round(Math.max(120, Math.min(LW, cW)))
    }
    class JO {
      constructor() {
        this.samples = []
      }
      add(WW, iW) {
        for (this.samples.push({
            x: WW,
            at: iW
          }); iW - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const WW = this.samples[0],
          iW = this.samples[this.samples.length - 1];
        return iW.at > WW.at ? (iW.x - WW.x) / (iW.at - WW.at) : 0
      }
    }

    function hO(WW) {
      return yO(new DOMMatrixReadOnly(getComputedStyle(WW).transform).m11)
    }

    function HO(WW, iW) {
      WW.style.transform = `rotateY(${-iW}deg)`, WW.classList.add("Turning")
    }

    function nO(WW, iW, OW) {
      const [mW, EW] = (0, NW.useState)(OW), PW = (0, NW.useRef)(null), LW = (0, NW.useRef)(null), cW = (0, NW.useRef)({
        Forward: null,
        Back: null
      }), wW = iW ? 2 : 1, tW = iW ? 180 : 90, ZW = mW - mW % wW, xW = ZW > 0, lW = ZW + wW < WW, AW = (0, NW.useCallback)((() => {
        const WW = LW.current;
        return null === WW ? ZW : (LW.current = null, WW.animation.cancel(), (iW = cW.current[WW.direction]).style.transform = "", iW.classList.remove("Turning"), null === WW.next ? ZW : (EW(WW.next), WW.next));
        var iW
      }), [ZW]), bW = (0, NW.useCallback)(((WW, iW, OW, mW) => {
        const EW = cW.current[WW],
          NW = hO(EW),
          PW = iW === ("Forward" === WW) ? tW : 0;
        HO(EW, PW);
        const ZW = EW.animate([{
          transform: `rotateY(${-NW}deg)`
        }, {
          transform: `rotateY(${-PW}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : TO(NW, PW, EW.offsetWidth, tW, PW > NW ? -OW : OW),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        LW.current = {
          direction: WW,
          animation: ZW,
          next: iW ? mW + ("Forward" === WW ? wW : -wW) : null
        }, ZW.onfinish = () => {
          var WW;
          (null === (WW = LW.current) || void 0 === WW ? void 0 : WW.animation) === ZW && AW()
        }
      }), [wW, tW, AW]), jW = (0, NW.useCallback)((iW => {
        if (null !== PW.current) return;
        const OW = AW();
        ("Forward" === iW ? OW + wW < WW : OW > 0) && bW(iW, !0, 0, OW)
      }), [AW, bW, wW, WW]);
      (0, NW.useEffect)((() => () => {
        var WW;
        null === (WW = LW.current) || void 0 === WW || WW.animation.cancel()
      }), []), (0, NW.useEffect)((() => {
        const WW = WW => {
          var iW;
          WW.pointerId !== (null === (iW = PW.current) || void 0 === iW ? void 0 : iW.pointerId) || PW.current.following || (PW.current = null)
        };
        return window.addEventListener("pointerup", WW), () => {
          window.removeEventListener("pointerup", WW)
        }
      }), []);
      const UW = (WW, iW, OW) => {
          const mW = function(WW, iW, OW, mW) {
            return (WW < 0 ? OW : mW) ? Yi.e.clampAbs(WW, iW) : Math.sign(WW) * iW * (1 - 1 / (.55 * Math.abs(WW) / iW + 1))
          }(WW.base + OW, wW * WW.width, lW, xW);
          return "Forward" === iW ? Math.min(mW, 0) : Math.max(mW, 0)
        },
        kW = (WW, iW) => {
          const OW = PW.current;
          if (PW.current = null, null === OW.direction) return;
          OW.speed.add(WW, iW);
          const mW = OW.speed.get(),
            EW = UW(OW, OW.direction, WW - OW.x);
          bW(OW.direction, null !== function(WW, iW, OW, mW, EW) {
            if (Math.abs(iW) >= .3 ? Math.sign(iW) !== Math.sign(WW) : Math.abs(WW) < .5 * OW) return null;
            const NW = WW < 0 ? "Forward" : "Back";
            return ("Forward" === NW ? mW : EW) ? NW : null
          }(EW, mW, wW * OW.width, lW, xW), mW, ZW)
        },
        sW = {
          onPointerDown: WW => {
            var iW;
            if (!WW.isPrimary || 0 !== WW.button || null !== LW.current && null !== WW.target.closest("button")) return;
            const OW = new JO;
            OW.add(WW.clientX, WW.timeStamp);
            const mW = cW.current.Forward.offsetWidth,
              EW = LW.current;
            LW.current = null;
            let NW = 0;
            if (null !== EW) {
              const iW = cW.current[EW.direction],
                OW = hO(iW);
              EW.animation.cancel(), HO(iW, OW), NW = function(WW, iW, OW, mW) {
                return (WW < 0 ? OW : mW) ? WW : Math.sign(WW) * iW * (1 / (1 - Math.min(Math.abs(WW) / iW, .99)) - 1) / .55
              }(function(WW, iW, OW, mW) {
                return OW * (YO(iW) - YO("Forward" === WW ? 0 : mW))
              }(EW.direction, OW, mW, tW), wW * mW, lW, xW), WW.currentTarget.setPointerCapture(WW.pointerId)
            }
            PW.current = {
              pointerId: WW.pointerId,
              x: WW.clientX,
              y: WW.clientY,
              base: NW,
              width: mW,
              following: null !== EW,
              direction: null !== (iW = null === EW || void 0 === EW ? void 0 : EW.direction) && void 0 !== iW ? iW : null,
              speed: OW
            }
          },
          onPointerMove: WW => {
            const iW = PW.current;
            if (null === iW || WW.pointerId !== iW.pointerId) return;
            if (0 === WW.buttons) return void kW(WW.clientX, WW.timeStamp);
            const OW = WW.clientX - iW.x;
            !iW.following && function(WW, iW) {
              return Math.abs(WW) > 8 && Math.abs(WW) > Math.abs(iW)
            }(OW, WW.clientY - iW.y) && (iW.following = !0, iW.direction = OW < 0 ? "Forward" : "Back", WW.currentTarget.setPointerCapture(WW.pointerId)), null !== iW.direction && (iW.speed.add(WW.clientX, WW.timeStamp), HO(cW.current[iW.direction], function(WW, iW, OW, mW) {
              const EW = OW * YO("Forward" === WW ? 0 : mW) + iW;
              return Yi.e.clamp(yO(EW / OW), 0, mW)
            }(iW.direction, UW(iW, iW.direction, OW), iW.width, tW)))
          },
          onPointerUp: WW => {
            var iW;
            WW.pointerId === (null === (iW = PW.current) || void 0 === iW ? void 0 : iW.pointerId) && kW(WW.clientX, WW.timeStamp)
          },
          onPointerCancel: WW => {
            const iW = PW.current;
            WW.pointerId === (null === iW || void 0 === iW ? void 0 : iW.pointerId) && (PW.current = null, null !== iW.direction && bW(iW.direction, !1, 0, ZW))
          }
        };
      return {
        first: ZW,
        step: wW,
        canGoBack: xW,
        canGoForward: lW,
        turnPage: jW,
        leaves: cW,
        pagesHandlers: sW
      }
    }

    function uO(WW, iW) {
      return WW > iW && WW >= 600
    }

    function oO(WW) {
      let {
        journal: iW,
        hud: OW,
        guide: mW
      } = WW;
      const {
        t: EW
      } = (0, tW.B)(), LW = (0, cW.g)(dW, iW.getPages()), wW = (0, cW.g)(Oi, OW.getGuide()), ZW = LW.find((WW => WW.active)), lW = (AW = wW, bW = void 0 === ZW ? null : ZW.id, "active" === AW[0] && null === bW);
      var AW, bW;
      const jW = (0, lO.l)(uO),
        {
          first: UW,
          step: kW,
          canGoBack: KW,
          canGoForward: SW,
          turnPage: YW,
          leaves: yW,
          pagesHandlers: TW
        } = nO(LW.length, jW, (() => function(WW) {
          const iW = WW.findIndex((WW => WW.active));
          return -1 !== iW ? iW : Math.max(0, WW.findIndex((WW => "open" === WW.state)))
        }(LW)));
      (0, NW.useEffect)((() => {
        iW.onOpened()
      }), [iW]), (0, sW.c)((WW => !lW && ("ArrowLeft" === WW.code || "ArrowRight" === WW.code) && !(0, MW.isTypingInInput)()), (WW => {
        WW.stopPropagation(), YW("ArrowLeft" === WW.code ? "Back" : "Forward")
      }));
      const JW = void 0 !== ZW,
        hW = (WW, OW, mW) => (0, vW.jsx)(KO, {
          className: WW,
          page: OW >= 0 && OW < LW.length ? LW[OW] : void 0,
          hidden: mW,
          building: JW,
          journal: iW
        });
      return (0, vW.jsx)(xO.b, {
        close: PW.q,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, vW.jsxs)("section", {
          className: xW()("PlotsJournal", {
            Spread: jW
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": EW("plotsGame:journalTitle"),
          children: [(0, vW.jsx)(ZO.l, {
            className: "PlotsJournalClose",
            onClick: PW.q
          }), "active" === wW[0] && (0, vW.jsx)(wi, {
            className: "PlotsJournalGuideSkip",
            onSkip: mW.skip
          }), lW && (0, vW.jsx)(UO, {
            onBuild: iW.build
          }), !lW && (0, vW.jsx)(kO, {
            direction: "Back",
            disabled: !KW,
            onTurn: YW
          }), (0, vW.jsx)("div", {
            hidden: lW,
            className: "PlotsJournalBookPages",
            ...TW,
            children: (0, vW.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [jW && hW("Left", UW - 2, !0), hW("Right", UW + 2 * kW - 1, !0), (0, vW.jsxs)("div", {
                ref: WW => {
                  yW.current.Back = WW
                },
                className: "PlotsJournalLeaf Back",
                children: [hW("Recto", UW - 1, !0), jW && hW("Verso", UW, !1)]
              }), (0, vW.jsxs)("div", {
                ref: WW => {
                  yW.current.Forward = WW
                },
                className: "PlotsJournalLeaf Forward",
                children: [hW("Recto", UW + kW - 1, !1), jW && hW("Verso", UW + kW, !0)]
              })]
            })
          }), !lW && (0, vW.jsx)(kO, {
            direction: "Forward",
            disabled: !SW,
            onTurn: YW
          })]
        })
      })
    }

    function dO(WW, iW, OW, mW, EW) {
      const NW = Math.hypot(...iW.dir);
      if (!Number.isFinite(NW) || 0 === NW) return -1;
      const {
        from: PW,
        reach: LW,
        solid: cW
      } = iW, wW = [iW.dir[0] / NW, iW.dir[1] / NW, iW.dir[2] / NW], tW = null === cW ? LW : Math.min(LW, function(WW, iW, OW) {
        const mW = eO(WW, iW, OW);
        if (mW !== 1 / 0) return mW;
        return (OW[0] + .5 - WW[0]) * iW[0] + (OW[1] + .5 - WW[1]) * iW[1] + (OW[2] + .5 - WW[2]) * iW[2]
      }(PW, wW, cW) + .75);
      let ZW = -1,
        xW = 1 / 0,
        lW = 1 / 0;
      for (let AW = 0; AW < WW.length; AW += 4) {
        const iW = [WW[AW], WW[AW + 1], WW[AW + 2]],
          NW = EW(AW) ? LW : tW;
        let cW = -1,
          bW = eO(PW, wW, iW);
        if (bW > NW) {
          const WW = [iW[0] + .5 - PW[0], iW[1] + .5 - PW[1], iW[2] + .5 - PW[2]];
          if (bW = WW[0] * wW[0] + WW[1] * wW[1] + WW[2] * wW[2], bW <= 0 || bW > NW) continue;
          if (cW = Math.hypot(WW[0] - bW * wW[0], WW[1] - bW * wW[1], WW[2] - bW * wW[2]), cW > .7 || !mW(AW)) continue
        }(cW < xW || cW === xW && bW < lW) && OW(AW) && (ZW = AW, xW = cW, lW = bW)
      }
      return ZW
    }

    function eO(WW, iW, OW) {
      let mW = 0,
        EW = 1 / 0;
      for (let NW = 0; NW < 3; NW++) {
        const PW = OW[NW] - WW[NW];
        if (0 === iW[NW]) {
          if (PW > 0 || PW + 1 < 0) return 1 / 0;
          continue
        }
        const LW = PW / iW[NW],
          cW = (PW + 1) / iW[NW];
        mW = Math.max(mW, Math.min(LW, cW)), EW = Math.min(EW, Math.max(LW, cW))
      }
      return mW <= EW ? mW : 1 / 0
    }
    var vO = OW(38048),
      gO = OW(39244),
      DO = OW(39708);
    const VO = [1, 1, 1];
    class pO {
      constructor(WW) {
        this.api = WW, this.meshes = null, this.shown = null
      }
      show(WW) {
        if (!(0, vO.f)(WW, this.shown))
          if (this.shown = null === WW ? null : [WW[0], WW[1], WW[2]], null !== this.meshes)
            for (const iW of this.meshes) this.api.setGameMesh(iW, null === WW ? {
              visible: !1
            } : {
              anchor: WW,
              visible: !0
            });
          else if (null !== WW) {
          const iW = [gO.f, gO.f, gO.f, 0, 0, 0];
          this.meshes = [this.build([iW], gO.h, WW), this.build((0, gO.c)(), gO.o, WW)]
        }
      }
      dispose() {
        for (const iW of null !== (WW = this.meshes) && void 0 !== WW ? WW : []) {
          var WW;
          this.api.disposeGameMesh(iW)
        }
        this.meshes = null, this.shown = null
      }
      build(WW, iW, OW) {
        const mW = [],
          EW = [];
        for (const [NW, PW, LW, cW, wW, tW] of WW)(0, DO.h)(mW, EW, [cW + .5, wW + .5, tW + .5], [NW, PW, LW]);
        return this.api.createGameMesh({
          positions: mW,
          indices: EW
        }, {
          rgb: VO,
          alpha: iW,
          onTop: !0
        }, OW)
      }
    }

    function fO(WW, iW) {
      const OW = fi.f.tU / 2;
      return WW[0] < iW[0] + OW && WW[0] + 1 > iW[0] - OW && WW[1] < iW[1] + fi.f.ZU && WW[1] + 1 > iW[1] && WW[2] < iW[2] + OW && WW[2] + 1 > iW[2] - OW
    }

    function CO(WW, iW) {
      return WW.getClientOption(iW, "blockReach") + 1
    }
    class XO {
      constructor(WW, iW, OW) {
        this.api = WW, this.localPlayerId = iW, this.foreseen = OW, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(WW) {
        this.cells = WW
      }
      playerMoved() {
        return BO(this.api.getPositionView(this.localPlayerId)).some(((WW, iW) => WW !== this.playerCells[iW]))
      }
      Kl(WW) {
        const iW = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...BO(iW)), this.next = this.pickFrom(null === WW ? [iW[0], iW[1] + 1, iW[2]] : (0, vO.b)(WW), (() => !1)), this.next
      }
      pickFrom(WW, iW) {
        const OW = this.api.getPositionView(this.localPlayerId),
          mW = [OW[0], OW[1] + fi.f.ZU * fi.f.playerEyeToHeightRatio, OW[2]],
          EW = CO(this.api, this.localPlayerId),
          {
            cells: NW
          } = this,
          PW = WW => [NW[WW], NW[WW + 1], NW[WW + 2]],
          LW = function(WW, iW, OW, mW, EW, NW) {
            let PW = -1,
              LW = -1,
              cW = 1 / 0;
            for (let wW = 0; wW < WW.length; wW += iW) {
              const iW = (NW(wW) ? 2 : 0) + (mW(wW) ? 1 : 0);
              if (iW < LW || EW(wW)) continue;
              const tW = (WW[wW] + .5 - OW[0]) ** 2 + (WW[wW + 1] + .5 - OW[1]) ** 2 + (WW[wW + 2] + .5 - OW[2]) ** 2;
              (iW > LW || tW < cW) && (PW = wW, LW = iW, cW = tW)
            }
            return PW
          }(NW, 4, WW, (WW => 1 === NW[WW + 3]), (WW => {
            const mW = PW(WW);
            return fO(mW, OW) || this.foreseen.has(mW.join()) || iW(mW)
          }), (WW => function(WW, iW, OW) {
            return (iW[0] + .5 - WW[0]) ** 2 + (iW[1] + .5 - WW[1]) ** 2 + (iW[2] + .5 - WW[2]) ** 2 <= OW ** 2
          }(mW, PW(WW), EW)));
        return -1 === LW ? null : PW(LW)
      }
    }

    function BO(WW) {
      let [iW, OW, mW] = WW;
      const EW = fi.f.tU / 2;
      return [Math.floor(iW), Math.floor(OW), Math.floor(mW), Math.floor(iW - EW), Math.floor(iW + EW), Math.floor(OW + fi.f.ZU), Math.floor(mW - EW), Math.floor(mW + EW)]
    }
    class qO {
      constructor(WW, iW, OW) {
        this.api = WW, this.localPlayerId = iW, this.pickNext = OW, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(WW) {
        const [iW, , OW] = WW.cameraDirection, mW = Math.hypot(iW, OW);
        mW > .001 && (this.heading = [iW / mW, OW / mW])
      }
      tapped(WW, iW, OW) {
        const mW = CO(this.api, this.localPlayerId),
          {
            origin: EW,
            direction: NW
          } = this.api.getActionRay(),
          PW = [...EW],
          LW = [
            [PW, [PW[0] + NW[0] * mW, PW[1] + NW[1] * mW, PW[2] + NW[2] * mW]]
          ];
        null !== WW && LW.push([PW, (0, vO.b)(WW)]), this.tap = {
          lines: LW,
          next: iW,
          ms: OW
        }
      }
      filled(WW, iW) {
        this.tap = null, this.turnFrom(WW, iW), this.retry(iW)
      }
      arrived(WW, iW) {
        const {
          tap: OW
        } = this;
        if (null === OW || iW - OW.ms > 1500) return null;
        const mW = (0, vO.b)(WW);
        return (0, vO.f)(OW.next, WW) || OW.lines.some((WW => {
          let [iW, OW] = WW;
          return function(WW, iW, OW) {
            const mW = [OW[0] - iW[0], OW[1] - iW[1], OW[2] - iW[2]],
              EW = [WW[0] - iW[0], WW[1] - iW[1], WW[2] - iW[2]],
              NW = mW[0] ** 2 + mW[1] ** 2 + mW[2] ** 2,
              PW = 0 === NW ? 0 : Math.min(1, Math.max(0, (EW[0] * mW[0] + EW[1] * mW[1] + EW[2] * mW[2]) / NW));
            return Math.hypot(EW[0] - mW[0] * PW, EW[1] - mW[1] * PW, EW[2] - mW[2] * PW)
          }(mW, iW, OW) <= .9
        })) ? (this.tap = null, this.turnFrom(WW, iW), OW.ms) : null
      }
      turnFrom(WW, iW) {
        this.pending = {
          from: WW,
          ms: iW,
          turnMs: Math.max(50, Math.min(250, iW - this.lastFillMs))
        }, this.lastFillMs = iW
      }
      retry(WW) {
        const {
          pending: iW
        } = this;
        if (null === iW) return;
        if (WW - iW.ms > 1500) return void(this.pending = null);
        const OW = this.pickNext((0, vO.b)(iW.from), (WW => (0, vO.f)(WW, iW.from)));
        if (null === OW) return;
        this.pending = null;
        const {
          turning: mW
        } = this;
        if (null !== mW && WW < mW.endMs && (0, vO.f)(mW.to, OW)) return;
        const EW = this.api.getActionRay().origin,
          NW = [OW[0] + .5 - EW[0], OW[1] + .5 - EW[1], OW[2] + .5 - EW[2]],
          PW = Math.hypot(NW[0], NW[2]);
        if (PW < .3) {
          const WW = Math.max(PW, .001);
          NW[0] = this.heading[0] * WW, NW[2] = this.heading[1] * WW
        }
        this.api.turnCamera(NW, iW.turnMs), this.turning = {
          to: OW,
          endMs: WW + iW.turnMs
        }
      }
    }
    class RO {
      constructor(WW, iW, OW, mW) {
        this.api = WW, this.localPlayerId = iW, this.juice = OW, this.tracker = mW, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Ci(WW), this.meshes = new Xi.n(WW), this.outline = new pO(WW), this.nextCell = new XO(WW, iW, this.foreseen), this.turn = new qO(WW, iW, ((WW, iW) => this.nextCell.pickFrom(WW, iW)))
      }
      yZ(WW) {
        const iW = "active" === WW[0] ? `${WW[1]}|${WW[3]}|${WW[4]}|${WW[5]}|${WW[6]}` : "";
        if ("active" !== WW[0]) "built" === WW[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , OW, mW, EW, NW] = WW;
          iW !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = OW) : OW === this.layerY ? this.burstUnlisted(mW) : OW > this.layerY && this.finishLayer(OW), this.layerY = OW, this.layerCells.has(OW) || this.layerCells.set(OW, mW.filter(GO)), this.ghostCells = mW, this.palette = EW, this.occupiedCells = NW
        }
        iW !== this.blueprint && (this.tracker.show("active" === WW[0] && WW[2] ? {
          id: WW[1],
          y: WW[4]
        } : null), this.blueprint = iW, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((WW => this.api.blockNameToBlockId(WW))), this.chunkWatch.watch([...this.ghostCells.filter(GO), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(WW) {
        this.burstUnlisted([]), WW > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = WW)
      }
      hZ() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const WW = performance.now();
        let iW = !1;
        for (const [mW, EW] of this.foreseen) {
          var OW;
          if (WW - EW > 1e3) this.foreseen.delete(mW), iW = !0, (null === (OW = this.lastFilled) || void 0 === OW ? void 0 : OW.join()) === mW && (this.lastFilled = this.lastSeenFilled)
        }(iW || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(WW) {
        const iW = new Set;
        for (let EW = 0; EW < WW.length; EW += 4) iW.add(`${WW[EW]},${WW[EW+1]},${WW[EW+2]}`);
        const OW = [],
          {
            ghostCells: mW
          } = this;
        for (let EW = 0; EW < mW.length; EW += 4) {
          const WW = `${mW[EW]},${mW[EW+1]},${mW[EW+2]}`;
          !iW.has(WW) && this.open.delete(WW) && OW.push(this.filledCell(EW))
        }
        this.burst(OW)
      }
      refresh() {
        const {
          ghostCells: WW,
          palette: iW,
          occupiedCells: OW
        } = this, mW = new Xi.j, EW = new Set, NW = [], PW = [];
        let LW = 0;
        for (let cW = 0; cW < WW.length; cW += 4) {
          const [OW, wW, tW, ZW] = [WW[cW], WW[cW + 1], WW[cW + 2], WW[cW + 3]], xW = this.api.getBlockId(OW, wW, tW), lW = `${OW},${wW},${tW}`, AW = ei(this.blockIds[ZW], xW);
          !AW && vi(xW) ? mW.add(OW, wW, tW, Di(iW[ZW]), Xi.h, (0, Vi.e)(iW[ZW])) : AW ? this.open.has(lW) && NW.push(this.filledCell(cW)) : mW.add(OW, wW, tW, Xi.e, Xi.d), AW || LW++, !AW && this.api.isBlockInLoadedChunk(OW, wW, tW) && (EW.add(lW), PW.push(OW, wW, tW, vi(xW) ? 0 : 1))
        }
        this.open = EW, this.nextCell.setCells(PW), this.tracker.update(this.layerY, this.topLayerY, LW);
        for (let cW = 0; cW < OW.length; cW += 3) {
          const [WW, iW, EW] = [OW[cW], OW[cW + 1], OW[cW + 2]];
          vi(this.api.getBlockId(WW, iW, EW)) || mW.add(WW, iW, EW, Xi.e, Xi.d)
        }
        this.meshes.show(mW.toArray()), this.burst(NW), this.showNext(), this.turn.retry(performance.now())
      }
      burst(WW) {
        const iW = performance.now(),
          OW = [];
        for (const [EW, NW, PW] of WW) {
          const WW = [EW, NW, PW];
          this.lastSeenFilled = WW, this.foreseen.delete(WW.join()) || OW.push(WW)
        }
        const mW = this.isHolding(iW);
        for (const EW of OW) {
          if (this.lastFilled = EW, mW && this.pressFilled) {
            this.turn.filled(EW, iW);
            continue
          }
          const WW = this.turn.arrived(EW, iW);
          if (null !== WW) {
            this.pressFilled = mW;
            for (const [iW, OW] of this.foreseen) OW <= WW && this.foreseen.delete(iW)
          }
        }
        this.juice.filled(WW)
      }
      showNext() {
        var WW;
        this.outline.show(null !== (WW = this.aimed) && void 0 !== WW ? WW : this.nextCell.Kl(this.lastFilled))
      }
      afterRender(WW) {
        var iW;
        this.turn.look(WW);
        const OW = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === OW ? null : OW.position), this.outline.show(null !== (iW = this.aimed) && void 0 !== iW ? iW : this.nextCell.get())
      }
      isHolding(WW) {
        return null !== this.altMs && WW - this.altMs <= 500
      }
      attemptAltAction(WW) {
        const iW = performance.now();
        if (this.isHolding(iW) || (this.pressFilled = !1), this.altMs = iW, this.pressFilled) return "preventPlacement";
        const OW = this.findAimed(WW);
        if (null !== OW) return this.foreseen.set(OW.join(), iW), this.lastFilled = OW, this.aimed = null, this.showNext(), this.turn.filled(OW, iW), this.pressFilled = !0, "preventPlacement";
        {
          const OW = this.nextCell.get();
          null !== OW && this.turn.tapped(WW, OW, iW)
        }
      }
      holdPressOnEntity() {
        const WW = performance.now();
        this.pressFilled && this.isHolding(WW) && (this.altMs = WW)
      }
      findAimed(WW) {
        return function(WW, iW, OW, mW, EW, NW, PW) {
          const LW = WW.kOW(iW),
            cW = null === LW || null === WW.blockNameToBlockId(LW.name, !0) ? null : LW.name,
            wW = WW.getPositionView(iW),
            {
              origin: tW,
              direction: ZW
            } = WW.getActionRay(),
            xW = dO(mW, {
              from: tW,
              dir: ZW,
              reach: CO(WW, iW),
              solid: OW
            }, (iW => {
              const OW = [mW[iW], mW[iW + 1], mW[iW + 2]];
              return !ei(EW[mW[iW + 3]], WW.getBlockId(...OW)) && !PW.has(OW.join()) && WW.isBlockInLoadedChunk(...OW) && !fO(OW, wW)
            }), (WW => null === cW || cW === gi(EW[mW[WW + 3]])), (WW => null !== NW && mW[WW] === NW[0] && mW[WW + 1] === NW[1] && mW[WW + 2] === NW[2]));
          return -1 === xW ? null : [mW[xW], mW[xW + 1], mW[xW + 2]]
        }(this.api, this.localPlayerId, WW, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(WW) {
        const {
          ghostCells: iW
        } = this, [OW, mW, EW] = Di(this.palette[iW[WW + 3]]);
        return [iW[WW], iW[WW + 1], iW[WW + 2], OW, mW, EW]
      }
    }

    function GO(WW, iW) {
      return iW % 4 !== 3
    }
    class IO {
      constructor(WW) {
        this.api = WW, this.sent = !1
      }
      hZ() {
        this.sent || LW.d.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var aO = OW(2937),
      rO = OW(40371);

    function zO(WW, iW, OW) {
      const mW = [255 * WW, 255 * iW, 255 * OW],
        [EW, NW, PW] = mW.map((WW => WW + .4 * (255 - WW)));
      return {
        texture: "square_particle",
        aZ: 48,
        minLifeTime: .3 / rO.d,
        maxLifeTime: .55 / rO.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * rO.d * rO.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...mW, 1],
          maxColor: [EW, NW, PW, 1]
        }, {
          timeFraction: 1,
          minColor: [...mW, 0],
          maxColor: [EW, NW, PW, 0]
        }],
        blendMode: aO.d.Standard
      }
    }
    const FO = {
      texture: "glint",
      mipmaps: !1,
      aZ: 96,
      minLifeTime: .5 / rO.d,
      maxLifeTime: .9 / rO.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * rO.d * rO.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: aO.d.OneOne
    };
    class QO {
      constructor(WW, iW) {
        this.api = WW, this.localPlayerId = iW, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(WW) {
        if (this.api.particlesEnabled())
          for (const [iW, OW, mW, EW, NW, PW] of WW.slice(0, 3)) {
            const WW = `${EW},${NW},${PW}`;
            let LW = this.chips.get(WW);
            void 0 === LW && (LW = this.api.createParticles(zO(EW, NW, PW), {
              pos: [iW + .5, OW + .5, mW + .5]
            }), this.chips.set(WW, LW));
            for (let iW = 0; iW < 8; iW++) this.setPoint(iW, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            LW.emitPoints([iW + .5, OW + .5, mW + .5], this.points, 8)
          }
      }
      layerDone(WW) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const iW = WW.length / 3;
        if (0 === iW || !this.api.particlesEnabled()) return;
        const OW = Math.min(iW, 48),
          [mW, EW, NW] = [WW[0] + .5, WW[1] + 1, WW[2] + .5];
        let PW = 0;
        for (let LW = 0; LW < OW; LW++) {
          const cW = 3 * Math.floor(LW * iW / OW);
          for (let iW = 0; iW < 2; iW++) this.setPoint(PW++, WW[cW] + Math.random() - mW, WW[cW + 1] + 1 - EW, WW[cW + 2] + Math.random() - NW, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(FO, {
          pos: [mW, EW, NW]
        }), this.sparkles.emitPoints([mW, EW, NW], this.points, PW)
      }
      dispose() {
        var WW;
        for (const iW of this.chips.values()) iW.stop();
        this.chips.clear(), null === (WW = this.sparkles) || void 0 === WW || WW.stop(), this.sparkles = null
      }
      setPoint(WW, iW, OW, mW, EW) {
        const NW = 4 * WW;
        this.points[NW] = iW, this.points[NW + 1] = OW, this.points[NW + 2] = mW, this.points[NW + 3] = EW
      }
    }
    const Wm = "SpecialAction1",
      im = "KeyY",
      Om = "KeyX";

    function mm(WW) {
      let {
        placement: iW
      } = WW;
      const OW = (0, cW.g)(Ii, iW.getView()),
        {
          t: mW
        } = (0, tW.B)(),
        {
          isTouchScreen: EW
        } = (0, LW.p)(["isTouchScreen"]),
        PW = (0, NW.useContext)(SW),
        ZW = null !== OW,
        AW = ZW && !OW.blocked && !OW.waiting;
      if ((0, sW.c)((WW => ZW && !WW.repeat && !(0, MW.isTypingInInput)() && !(0, lW.l)() && !EW), (WW => {
          const OW = function(WW, iW, OW) {
            if (WW === Om) return iW.stop;
            if (WW === im) return OW ? iW.build : Nm;
            return wW.v[Wm].includes(WW) ? iW.rotate : null
          }(WW.code, iW, AW);
          null !== OW && (WW.stopPropagation(), OW())
        })), !ZW) return null;
      let jW = EW ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return OW.blocked ? jW = "plotsGame:placementOffPlot" : OW.toClear > 0 ? jW = "plotsGame:placementClear" : "placeSpot" !== PW.hint && "placeBuild" !== PW.hint || (jW = null), (0, vW.jsx)(bW.h, {
        placement: "bottom",
        children: (0, vW.jsxs)("div", {
          ref: PW.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, vW.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: mW(hW(OW.id).displayName.translationKey)
          }), null !== jW && (0, vW.jsx)("div", {
            className: xW()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: OW.refusals > 0
            }),
            children: mW(jW)
          }, OW.refusals), (0, vW.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, vW.jsxs)(ZO.f, {
              onClick: iW.rotate,
              children: [(0, vW.jsx)(Em, {
                noaAction: Wm
              }), mW("plotsGame:placementRotate")]
            }), (0, vW.jsxs)(ZO.O, {
              onClick: iW.stop,
              children: [(0, vW.jsx)(Em, {
                keyCode: Om
              }), mW("general:cancel")]
            }), (0, vW.jsx)("span", {
              ref: PW.buildRef,
              className: xW()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === PW.hint && AW && EW
              }),
              children: (0, vW.jsxs)(ZO.n, {
                disabled: !AW,
                onClick: iW.build,
                children: [(0, vW.jsx)(Em, {
                  keyCode: im
                }), mW("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function Em(WW) {
      return (0, vW.jsx)(kW.e, {
        className: "PlotsPlacementKey",
        ...WW
      })
    }

    function Nm() {}
    var Pm = OW(3247),
      Lm = OW(37919),
      cm = OW(2075),
      wm = OW(1255);
    const tm = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Zm(WW) {
      let {
        hud: iW
      } = WW;
      const OW = (0, cW.g)(ii, iW.getPlot()),
        [mW, EW] = (0, NW.useState)(null),
        PW = (0, Lm.i)(mW);
      if ("none" === OW[0]) return null;
      const [, LW, wW, tW, ZW, lW] = OW;
      return (0, vW.jsx)("div", {
        className: xW()("PlotsPlotBannerContainer", {
          Below: PW
        }),
        children: (0, vW.jsx)(xm, {
          plotX: LW,
          plotZ: wW,
          ownerName: tW,
          ownerId: ZW,
          relation: lW,
          plaqueRef: EW
        }, `${LW},${wW}`)
      })
    }

    function xm(WW) {
      var iW, OW;
      let {
        plotX: mW,
        plotZ: EW,
        ownerName: NW,
        ownerId: PW,
        relation: LW,
        plaqueRef: cW
      } = WW;
      const {
        t: wW
      } = (0, tW.B)(), ZW = (0, cm.g)("hiddenPlayerNames"), lW = (0, cm.g)("players"), AW = null === PW ? null : null !== (iW = null === (OW = lW.byId[PW]) || void 0 === OW ? void 0 : OW.cosmetics) && void 0 !== iW ? iW : null, bW = wW("plotsGame:plotBannerCoords", {
        x: mW,
        z: EW
      }), UW = "own" === LW || null !== NW;
      return (0, vW.jsxs)("div", {
        ref: cW,
        className: xW()("PlotsPlotBanner", {
          Own: "own" === LW,
          Shared: "shared" === LW
        }),
        role: "status",
        children: [(0, vW.jsxs)("span", {
          className: xW()("PlotsPlotBannerSeal", {
            Face: null !== AW
          }),
          children: [null !== AW && (0, vW.jsx)(Pm.e, {
            cosmetics: AW
          }), null === AW && (0, vW.jsx)(jW.c, {
            name: tm[LW]
          })]
        }), (0, vW.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, vW.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === LW && wW("plotsGame:plotBannerYours"), "own" !== LW && null !== NW && wW("plotsGame:plotBannerOwner", {
              name: (0, wm.g)(NW, ZW)
            }), !UW && bW]
          }), UW && (0, vW.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [bW, "shared" === LW && (0, vW.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: wW("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const lm = function(WW, iW, OW, mW) {
      let {
        localPlayerId: EW
      } = mW;
      const LW = new Ei;
      let cW = null,
        wW = null,
        tW = null,
        ZW = null,
        xW = null,
        lW = null;
      const AW = [];
      return {
        onCreate: WW => {
          cW = new QO(WW, EW);
          const iW = new Wi;
          wW = new RO(WW, EW, cW, iW), tW = new ri(WW, EW), ZW = new eW(WW, tW), xW = new tO(WW, EW, wW.nextCell), lW = new IO(WW), AW.push((0, PW.O)((0, NW.createElement)(LO, {
            hud: LW,
            guide: xW,
            tracker: iW,
            placement: tW
          }, (0, NW.createElement)(Zm, {
            hud: LW
          }), (0, NW.createElement)(DW, {
            journal: ZW
          }), (0, NW.createElement)(OO, {
            placement: tW
          }), (0, NW.createElement)(mm, {
            placement: tW
          })), {
            content: (0, NW.createElement)(oO, {
              journal: ZW,
              hud: LW,
              guide: xW
            })
          }))
        },
        hZ: () => {
          lW.hZ(), wW.hZ(), tW.hZ(), ZW.hZ()
        },
        onPlayerAttemptAltAction: (WW, iW, OW, mW, EW, NW) => {
          if (null !== NW) return void wW.holdPressOnEntity();
          const PW = void 0 === iW ? null : [iW, OW, mW];
          return wW.attemptAltAction(PW)
        },
        onPlayerClickUp: () => {
          wW.endPress()
        },
        onAfterRender: (WW, iW) => {
          tW.afterRender(iW), wW.afterRender(iW), xW.afterRender(iW)
        },
        onClose: () => {
          for (const WW of AW) WW();
          cW.dispose(), wW.dispose(), tW.dispose(), cW = null, wW = null, tW = null, ZW = null, xW = null, lW = null
        },
        onReceivedMessageFromServer: (WW, iW) => {
          if ("plotsPlot" === WW) LW.receivePlot(iW);
          else if ("plotsBlueprint" === WW) {
            const WW = iW;
            wW.yZ(WW), tW.yZ(WW)
          } else "plotsJournal" === WW ? ZW.yZ(iW) : "plotsJournalOpen" === WW ? ZW.openFromServer(iW) : "plotsPreviewEnd" === WW ? tW.endFromServer() : "plotsGuide" === WW ? LW.receiveGuide(iW) : "plotsGuideDone" === WW && LW.receiveGuideDone()
        }
      }
    }
  },
  39687: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW
    });
    var mW = OW(39679);
    const EW = 5,
      NW = [0, 0, 0],
      PW = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function LW(WW, iW, OW, LW, cW, wW) {
      let [tW, ZW, xW] = LW;
      const lW = (tW + .5 - OW[0]) ** 2 + (ZW - OW[1]) ** 2 + (xW + .5 - OW[2]) ** 2;
      let AW = null;
      lW <= wW ** 2 && (NW[0] = tW + .5, NW[1] = ZW + cW, NW[2] = xW + .5, AW = iW.projectWorldPosToViewport(NW));
      const bW = null !== AW && AW.x > -EW && AW.x < 100 + EW && AW.y > -EW && AW.y < 100 + EW;
      return (0, mW.h)(WW, !bW), bW ? (PW.x = AW.x, PW.y = AW.y, PW.distSq = lW, PW) : null
    }
  },
  40371: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW,
      h: () => NW
    });
    const mW = 1 / .6,
      EW = {
        kind: "smokePuff"
      };
    class NW {
      constructor(WW, iW, OW) {
        this.style = WW, this.aZ = iW, this.half = OW, this.particles = null, this.lastFrame = -1
      }
      emit(WW, iW, OW) {
        let NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return OW !== this.lastFrame && (this.lastFrame = OW, this.particles || (this.particles = WW.createParticles(function(WW, iW) {
          const [
            [OW, NW, PW],
            [LW, cW, wW]
          ] = WW.colours;
          return {
            texture: WW.soft ? EW : "square_particle",
            aZ: iW,
            minLifeTime: WW.life[0] / mW,
            maxLifeTime: WW.life[1] / mW,
            minEmitPower: WW.power[0] * mW,
            maxEmitPower: WW.power[1] * mW,
            minSize: WW.size[0],
            maxSize: WW.size[1],
            emitRate: 0,
            gravity: [0, WW.lift * mW * mW, 0],
            dir1: [-WW.spread, 1, -WW.spread],
            dir2: [WW.spread, 1, WW.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [OW, NW, PW, WW.alpha],
              maxColor: [LW, cW, wW, WW.alpha]
            }, {
              timeFraction: 1,
              minColor: [OW, NW, PW, 0],
              maxColor: [LW, cW, wW, 0]
            }],
            blendMode: WW.blendMode
          }
        }(this.style, this.aZ), {
          pos: iW,
          half: this.half
        })), this.particles.moveTo(iW, this.half), this.particles.emit(NW), !0)
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.stop(), this.particles = null
      }
    }
  },
  40814: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      g: () => LW,
      k: () => cW
    });
    const mW = new Map,
      EW = [];

    function NW() {
      for (const WW of EW) WW()
    }

    function PW(WW) {
      var iW;
      return mW.set(WW, (null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : 0) + 1), NW(), () => {
        const iW = mW.get(WW) - 1;
        0 === iW ? mW.delete(WW) : mW.set(WW, iW), NW()
      }
    }

    function LW() {
      return [...mW.keys()]
    }

    function cW(WW) {
      EW.push(WW)
    }
  },
  38039: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => gW,
      G: () => DW,
      I: () => eW,
      M: () => VW,
      d: () => cW,
      h: () => HW,
      i: () => LW,
      m: () => dW,
      o: () => JW,
      s: () => SW,
      u: () => oW,
      w: () => uW,
      x: () => TW,
      y: () => vW
    });
    var mW = OW(39);
    const EW = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      NW = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      PW = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      LW = NW.filter((WW => "docsButton" !== WW)),
      cW = PW.filter((WW => "aiHelperButton" !== WW)),
      wW = "codeEditorTutorials",
      tW = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      ZW = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let xW = null,
      lW = null;
    const AW = new Set,
      bW = new Set;
    let jW = null;
    const UW = new Set,
      kW = new Set;

    function sW() {
      kW.forEach((WW => {
        WW()
      }))
    }

    function MW() {
      if (!xW) {
        const WW = mW.i.getItem(wW);
        xW = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof WW && null !== WW ? WW : {}
        }
      }
      return xW
    }

    function KW(WW) {
      const iW = MW();
      iW[WW] || (xW = {
        ...iW,
        [WW]: !0
      }, mW.i.setItem(wW, xW))
    }

    function SW(WW) {
      return "docsOverview" === WW ? NW : "aiHelperOverview" === WW ? PW : lW ? EW[lW] : []
    }

    function YW(WW) {
      return ("worldCodeButton" !== WW || !MW().worldCodeIntroShown) && !UW.has(WW)
    }

    function yW(WW) {
      var iW;
      return (null === (iW = jW) || void 0 === iW ? void 0 : iW.name) === WW ? jW.stepsDone : AW
    }

    function TW(WW, iW) {
      if (! function(WW) {
          return jW ? jW.name === WW : "welcome" === WW
        }(WW) || !YW(iW) || yW(WW).has(iW)) return !1;
      if (jW) return !0;
      const OW = tW[iW];
      return OW ? !MW()[OW] || bW.has(iW) : !MW()[ZW[WW]]
    }

    function JW(WW) {
      var iW;
      return null !== (iW = SW(WW).find((iW => TW(WW, iW)))) && void 0 !== iW ? iW : null
    }

    function hW(WW) {
      var iW;
      KW(ZW[WW]), (null === (iW = jW) || void 0 === iW ? void 0 : iW.name) === WW && (jW = null)
    }

    function HW(WW) {
      const iW = (jW ? [jW.name] : ["welcome", "docsOverview"]).find((iW => JW(iW) === WW));
      if (!iW) return;
      yW(iW).add(WW);
      const OW = tW[WW];
      OW && (KW(OW), jW || bW.add(WW)), null === JW(iW) && hW(iW), sW()
    }

    function nW(WW, iW) {
      const OW = SW(WW),
        mW = yW(WW);
      for (let EW = OW.indexOf(iW) - 1; EW >= 0; EW--)
        if (mW.has(OW[EW]) && YW(OW[EW])) return OW[EW];
      return null
    }

    function uW(WW, iW) {
      return null !== nW(WW, iW)
    }

    function oW(WW, iW) {
      const OW = nW(WW, iW);
      OW && (yW(WW).delete(OW), sW())
    }

    function dW(WW) {
      hW(WW), "welcome" === WW && SW("welcome").forEach((WW => {
        const iW = tW[WW];
        iW && KW(iW)
      })), sW()
    }

    function eW(WW) {
      jW = {
        name: WW,
        stepsDone: new Set
      }, sW()
    }

    function vW() {
      (jW || 0 !== AW.size || 0 !== bW.size) && (jW = null, AW.clear(), bW.clear(), sW())
    }

    function gW(WW, iW) {
      const OW = iW ? WW : lW === WW ? null : lW;
      OW !== lW && (lW = OW, sW())
    }

    function DW(WW, iW) {
      UW.has(WW) === iW && (iW ? UW.delete(WW) : UW.add(WW), sW())
    }

    function VW(WW) {
      return kW.add(WW), () => {
        kW.delete(WW)
      }
    }
  },
  39679: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW) {
      let iW = mW.get(WW);
      return iW || (iW = {
        hidden: WW.hidden,
        x: NaN,
        y: NaN
      }, mW.set(WW, iW)), iW
    }

    function NW(WW, iW) {
      const OW = EW(WW);
      OW.hidden !== iW && (OW.hidden = iW, WW.hidden = iW)
    }

    function PW(WW, iW, OW) {
      const mW = EW(WW);
      mW.x === iW && mW.y === OW || (mW.x = iW, mW.y = OW, WW.style.translate = `${iW}vw ${OW}vh`)
    }
  },
  39606: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => yW,
      F: () => KW,
      G: () => MW,
      J: () => xW,
      M: () => bW,
      N: () => UW,
      O: () => EW,
      c: () => tW,
      f: () => cW,
      j: () => sW,
      l: () => wW,
      n: () => LW,
      q: () => PW,
      t: () => NW,
      w: () => YW,
      x: () => lW,
      y: () => SW
    });
    var mW = OW(5797);

    function EW(WW) {
      return Math.floor(WW).toLocaleString("en-US")
    }
    const NW = 2e3,
      PW = .005,
      LW = .001,
      cW = 2,
      wW = "Fluid Tank",
      tW = "Coolant Mixer",
      ZW = 144;

    function xW(WW) {
      const iW = WW.split("|")[0];
      return (0, mW.p)(iW) ? iW === mW.e ? "cryo" : "water" : null
    }
    const lW = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      AW = 63;

    function bW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const OW = iW ? function(WW, iW, OW) {
        const mW = lW.findIndex((mW => {
          let [EW, NW, PW] = mW;
          return EW === WW && NW === iW && PW === OW
        }));
        return mW < 0 ? 0 : 1 << mW
      }(iW[0], iW[1], iW[2]) : 0;
      return "maker" === WW ? {
        kind: WW,
        faces: OW
      } : "user" === WW ? {
        kind: WW,
        faces: AW & ~OW
      } : {
        kind: WW,
        faces: AW
      }
    }

    function jW(WW) {
      return "pipe" === WW || "tank" === WW || "maker" === WW
    }

    function UW(WW, iW, OW) {
      return 0 !== (WW.faces & 1 << OW) && 0 !== (iW.faces & 1 << (1 ^ OW)) && (jW(WW.kind) || jW(iW.kind))
    }
    const kW = (WW, iW, OW, mW) => ({
        input: WW,
        inputAmount: mW,
        output: iW,
        outputAmount: OW
      }),
      sW = {
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
          recipes: [kW("Uranium Grit", "Uranium Pellet", 1, 12), kW("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [kW("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: ZW,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function MW(WW, iW) {
      return 1e3 * (null !== iW && void 0 !== iW ? iW : 0) / WW.opMs
    }

    function KW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const OW = MW(sW["Coolant Mixer"], ZW) * iW;
      return WW <= 0 ? 0 : Math.ceil(WW / OW - 1e-9)
    }
    const SW = "baf2Water",
      YW = "baf2waterclose",
      yW = "baf2wateropen"
  },
  40804: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      e: () => ZW
    });
    var mW = OW(5725),
      EW = OW(5747),
      NW = OW(5766);
    const PW = [0, 0, 0, 1, 1, 1],
      LW = (0, EW.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      cW = (0, EW.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      wW = (0, EW.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      tW = [0, 1, 2, 3].map((WW => (0, EW.c)((0, EW.q)([
        [3, 2, 0, 5, 7, 3]
      ], WW))));

    function ZW(WW) {
      const {
        sj: iW,
        model: OW,
        blockModel: EW,
        meta: ZW
      } = mW.j[WW];
      return void 0 !== iW ? iW : "CentreCross" === OW ? LW : null !== EW && void 0 !== EW && EW.startsWith("torch") ? ZW.halfblockPlacement === NW.d.side ? tW[ZW.rot - 1] : ZW.halfblockPlacement === NW.d.top ? wW : cW : PW
    }
  },
  39595: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => dW,
      f: () => eW
    });
    var mW = OW(5725),
      EW = OW(5754);
    const NW = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var PW = OW(5772),
      LW = OW(39392),
      cW = OW(5766);
    const wW = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function tW(WW) {
      let [iW, OW] = WW;
      return [-OW, iW]
    }

    function ZW(WW, iW) {
      return WW[0] === iW[0] && WW[1] === iW[1]
    }

    function xW(WW, iW) {
      return WW[0] * iW[0] + WW[1] * iW[1] === 0
    }
    const lW = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var AW = OW(5790);

    function bW(WW, iW, OW, mW, EW) {
      return iW < AW.p || iW >= AW.p + AW.t || Math.floor(WW / AW.A) === Math.floor(mW / AW.A) && Math.floor(OW / AW.A) === Math.floor(EW / AW.A)
    }
    const jW = "Splitter",
      UW = "Sorting Gate",
      kW = new Set(AW.O),
      sW = new Set([...AW.O, "Belt Loader", "Fast Loader", UW]),
      MW = new Set(AW.w),
      KW = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function SW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.meta.rootName) && void 0 !== iW ? iW : ""
    }

    function YW(WW) {
      return SW(WW) === AW.i && (0, AW.V)(mW.j[WW].name)
    }
    var yW = OW(5762),
      TW = OW(5780);
    const JW = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function hW(WW) {
      var iW, OW;
      const EW = null === (iW = mW.j[WW]) || void 0 === iW ? void 0 : iW.meta;
      return (null === EW || void 0 === EW ? void 0 : EW.rootName) !== TW.i ? null : {
        rot: null !== (OW = EW.rot) && void 0 !== OW ? OW : 1,
        half: (0, TW.e)(EW.rootName, EW.metaStr)
      }
    }

    function HW(WW, iW, OW, mW) {
      return hW(WW(iW, OW, mW))
    }

    function nW(WW, iW, OW, mW, EW) {
      let {
        rot: NW,
        half: PW
      } = EW;
      const [LW, cW] = (0, TW.h)(NW, PW), wW = HW(WW, iW + LW, OW, mW + cW);
      return null !== wW && wW.rot === NW && wW.half === TW.l[PW]
    }
    var uW = OW(39602);
    const oW = [new class {
      constructor() {
        this.reshapeOffsets = lW
      }
      handles(WW) {
        var iW;
        return "Stairs" === (null === (iW = mW.j[WW]) || void 0 === iW ? void 0 : iW.model)
      }
      affects(WW) {
        return this.handles(WW)
      }
      shape(WW, iW, OW, EW, NW) {
        const PW = this.stairsOf(NW),
          LW = this.cornerAt(WW, iW, OW, EW, PW),
          wW = PW.half === cW.d.top ? "top" : "bot";
        return (0, mW.l)(`${mW.j[NW].meta.rootName}|meta|rot${PW.rot}|${wW}${null===LW?"":`|${LW}`}`)
      }
      stairsOf(WW) {
        const {
          rot: iW,
          halfblockPlacement: OW
        } = mW.j[WW].meta;
        return {
          rot: iW,
          half: OW
        }
      }
      stairsAt(WW, iW, OW, mW) {
        const EW = WW(iW, OW, mW);
        return this.handles(EW) ? this.stairsOf(EW) : null
      }
      cornerAt(WW, iW, OW, mW, EW) {
        let {
          rot: NW,
          half: PW
        } = EW;
        const LW = wW[NW],
          cW = EW => {
            let [LW, cW] = EW;
            const wW = this.stairsAt(WW, iW + LW, OW, mW + cW);
            return null !== wW && wW.rot === NW && wW.half === PW
          },
          lW = this.stairsAt(WW, iW + LW[0], OW, mW + LW[1]);
        if (null !== lW && lW.half === PW) {
          const WW = wW[lW.rot];
          if (xW(LW, WW) && !cW([-WW[0], -WW[1]])) return ZW(WW, tW(LW)) ? "outerLeft" : "outerRight"
        }
        const AW = this.stairsAt(WW, iW - LW[0], OW, mW - LW[1]);
        if (null !== AW && AW.half === PW) {
          const WW = wW[AW.rot];
          if (xW(LW, WW) && !cW(WW)) return ZW(WW, tW(LW)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = NW, this.rootIds = new Set(EW.k.map((WW => (0, mW.l)(WW))))
      }
      handles(WW) {
        var iW;
        const OW = null === (iW = mW.j[WW]) || void 0 === iW ? void 0 : iW.meta;
        return void 0 !== OW && this.rootIds.has(OW.rootId)
      }
      affects(WW) {
        return this.handles(WW)
      }
      placedBy(WW) {
        return mW.j[WW].meta.rootName === EW.t ? null : EW.t
      }
      shape(WW, iW, OW, NW, PW) {
        const {
          rootId: LW,
          rootName: cW,
          rot: wW
        } = mW.j[PW].meta;
        let tW = 0;
        return EW.y[wW].forEach(((EW, PW) => {
          var cW;
          let [ZW, xW, lW] = EW;
          const AW = null === (cW = mW.j[WW(iW + ZW, OW + xW, NW + lW)]) || void 0 === cW ? void 0 : cW.meta;
          (null === AW || void 0 === AW ? void 0 : AW.rootId) === LW && AW.rot === wW && (tW |= 1 << PW)
        })), (0, mW.l)((0, EW.g)(cW, wW, tW))
      }
    }, ...PW.c.map((WW => new LW.d(WW))), new class {
      constructor() {
        this.reshapeOffsets = KW
      }
      handles(WW) {
        const iW = SW(WW);
        return kW.has(iW) || iW === AW.i
      }
      affects(WW) {
        const iW = SW(WW);
        return sW.has(iW) || MW.has(iW) || iW === jW || iW === AW.i || void 0 !== AW.d[iW]
      }
      shape(WW, iW, OW, EW, NW, PW) {
        const {
          rootName: LW,
          rot: cW
        } = mW.j[NW].meta;
        return LW === AW.i ? PW ? NW : function(WW, iW, OW, EW, NW) {
          const [PW, LW] = AW.h[NW - 1];
          for (let cW = 1; cW <= AW.L; cW++) {
            const [wW, tW] = [iW - PW * cW, EW - LW * cW], ZW = WW(wW, OW, tW);
            if (SW(ZW) === AW.i && mW.j[ZW].meta.rot === NW && bW(iW, OW, EW, wW, tW)) return (0, mW.l)((0, AW.bb)(NW, !YW(ZW)))
          }
          return (0, mW.l)((0, AW.bb)(NW, !1))
        }(WW, iW, OW, EW, cW) : (0, mW.l)((0, AW.Q)(LW, cW, function(WW, iW, OW, EW, NW) {
          const [PW, LW] = AW.h[NW - 1], cW = (NW, PW) => function(WW, iW, OW) {
            var EW;
            const NW = null === (EW = mW.j[WW]) || void 0 === EW ? void 0 : EW.meta;
            if (!NW) return !1;
            const PW = NW.rootName,
              LW = sW.has(PW) || YW(WW);
            if (!LW && !MW.has(PW) && PW !== jW) return !1;
            const [cW, wW] = AW.h[NW.rot - 1];
            if (LW && cW === -iW && wW === -OW) return !0;
            if (MW.has(PW)) return cW === iW && wW === OW;
            const tW = mW.j[WW].name;
            return (PW === jW ? (0, AW.$)(tW, cW, wW) : PW === UW ? [(0, AW.R)(tW, cW, wW)] : []).some((WW => {
              let [mW, EW] = WW;
              return mW === -iW && EW === -OW
            }))
          }(WW(iW + NW, OW, EW + PW), NW, PW), wW = WW(iW - PW, OW, EW - LW), tW = SW(wW) === jW && mW.j[wW].meta.rot === NW, ZW = 1 === AW.d[SW(WW(iW, OW - 1, EW))] || -1 === AW.d[SW(WW(iW, OW + 1, EW))];
          if (ZW || tW || cW(-PW, -LW)) return null;
          const xW = cW(-LW, PW),
            lW = cW(LW, -PW);
          if (xW === lW) return null;
          return xW ? "turnLeft" : "turnRight"
        }(WW, iW, OW, EW, cW)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = JW, this.rootId = (0, mW.l)(TW.i)
      }
      handles(WW) {
        var iW;
        return (null === (iW = mW.j[WW]) || void 0 === iW ? void 0 : iW.meta.rootId) === this.rootId
      }
      affects(WW) {
        return this.handles(WW)
      }
      shape(WW, iW, OW, EW, NW, PW) {
        const LW = hW(NW);
        return (0, mW.l)((cW = LW.rot, null !== (wW = PW ? this.reshapedHalf(WW, iW, OW, EW, LW) : this.placedHalf(WW, iW, OW, EW, LW.rot)) ? (0, TW.b)(TW.i, cW, wW) : 1 === cW ? TW.i : `${TW.i}|meta|rot${cW}`));
        var cW, wW
      }
      placedHalf(WW, iW, OW, mW, EW) {
        const [NW, PW] = yW.d[EW];
        for (const [LW, cW] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const wW = iW + cW * NW,
            tW = mW + cW * PW,
            ZW = HW(WW, wW, OW, tW);
          if (null !== ZW && ZW.rot === EW && (null === ZW.half || !nW(WW, wW, OW, tW, ZW))) return LW
        }
        return null
      }
      reshapedHalf(WW, iW, OW, mW, EW) {
        if (null !== EW.half && nW(WW, iW, OW, mW, EW)) return EW.half;
        for (const NW of ["right", "left"]) {
          const [PW, LW] = (0, TW.h)(EW.rot, NW), cW = HW(WW, iW + PW, OW, mW + LW);
          if (null !== cW && cW.rot === EW.rot && cW.half === TW.l[NW]) return NW
        }
        return null
      }
    }, new uW.c];

    function dW(WW, iW, OW, mW, EW) {
      let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const PW of oW)
        if (PW.handles(EW)) return PW.shape(WW, iW, OW, mW, EW, NW);
      return EW
    }

    function eW(WW) {
      for (const mW of oW) {
        var iW, OW;
        if (mW.handles(WW)) return null !== (iW = null === (OW = mW.placedBy) || void 0 === OW ? void 0 : OW.call(mW, WW)) && void 0 !== iW ? iW : null
      }
      return null
    }
  },
  39602: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => TW,
      g: () => MW,
      i: () => sW
    });
    var mW = OW(5725),
      EW = OW(5745),
      NW = OW(5797),
      PW = OW(39606),
      LW = OW(5790);
    const cW = (0, PW.M)("pipe"),
      wW = (0, PW.M)("tank"),
      tW = (0, PW.M)("port"),
      ZW = "Reactor Port";

    function xW(WW, iW, OW) {
      const mW = new Set([NW.h, NW.e, ZW, ...iW, ...OW, ...WW ? [PW.l] : []]);
      return {
        makers: new Set(iW),
        roots: mW
      }
    }
    const lW = {
        water: xW(!0, ["Condenser"], ["Centrifuge", "Synthesizer", PW.c]),
        cryo: xW(!1, [PW.c], [])
      },
      AW = new Set([...lW.water.roots, ...lW.cryo.roots]),
      bW = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      jW = EW.g.map((WW => bW[WW])),
      UW = jW.map((WW => {
        let [iW, OW, mW] = WW;
        return PW.x.findIndex((WW => {
          let [EW, NW, PW] = WW;
          return EW === iW && NW === OW && PW === mW
        }))
      }));

    function kW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const OW = mW.j[WW],
        EW = null === OW || void 0 === OW ? void 0 : OW.meta.rootName,
        xW = lW[iW];
      if (!EW || !xW.roots.has(EW)) return null;
      if ((0, NW.p)(EW)) return (0, PW.J)(OW.name) === iW ? cW : null;
      if (EW === PW.l) return wW;
      if (EW === ZW) return OW.name.endsWith("|Water") ? tW : null;
      const [AW, bW] = LW.h[(OW.meta.rot || 1) - 1];
      return (0, PW.M)(xW.makers.has(EW) ? "maker" : "user", [-AW, 0, -bW])
    }

    function sW(WW, iW, OW, EW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: LW
      } = lW[NW];
      return jW.some(((wW, tW) => {
        var ZW, xW;
        let [lW, AW, bW] = wW;
        const jW = WW(iW + lW, OW + AW, EW + bW),
          sW = kW(jW, NW);
        return null !== sW && LW.has(null !== (ZW = null === (xW = mW.j[jW]) || void 0 === xW ? void 0 : xW.meta.rootName) && void 0 !== ZW ? ZW : "") && !(0, PW.N)(cW, sW, UW[tW])
      }))
    }

    function MW(WW) {
      const iW = mW.j[WW];
      return iW ? (0, PW.J)(iW.name) : null
    }
    let KW = null;

    function SW(WW) {
      if (!KW) {
        KW = new Map;
        for (const WW of ["water", "cryo"])
          for (let iW = 0; iW < 64; iW++)
            for (const OW of [!1, !0]) KW.set((0, NW.s)(WW, iW, OW), {
              dl: WW,
              mask: iW,
              full: OW
            })
      }
      return KW.get(WW)
    }
    const YW = new Map(Array.from({
      length: NW.l + 1
    }, ((WW, iW) => [(0, NW.u)(iW), iW])));

    function yW(WW, iW, OW, EW, NW, PW) {
      return jW.some(((LW, cW) => {
        var wW, tW, ZW;
        let [xW, lW, AW] = LW;
        if (0 === (PW >> cW & 1)) return !1;
        const bW = null !== (wW = null === (tW = mW.j[WW(iW + xW, OW + lW, EW + AW)]) || void 0 === tW ? void 0 : tW.name) && void 0 !== wW ? wW : "",
          jW = SW(bW);
        return jW ? jW.dl === NW && jW.full : (null !== (ZW = function(WW) {
          var iW;
          return null !== (iW = YW.get(WW)) && void 0 !== iW ? iW : null
        }(bW)) && void 0 !== ZW ? ZW : 0) > 0
      }))
    }
    class TW {
      constructor() {
        this.reshapeOffsets = jW
      }
      handles(WW) {
        return null !== MW(WW)
      }
      affects(WW) {
        var iW, OW;
        return AW.has(null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.meta.rootName) && void 0 !== iW ? iW : "")
      }
      placedBy(WW) {
        var iW;
        return (null === (iW = mW.j[WW]) || void 0 === iW ? void 0 : iW.meta.rootName) === NW.e ? NW.h : null
      }
      shape(WW, iW, OW, EW, LW, wW) {
        var tW, ZW, xW;
        const lW = null !== (tW = null === (ZW = mW.j[LW]) || void 0 === ZW ? void 0 : ZW.name) && void 0 !== tW ? tW : "",
          AW = wW || lW !== NW.h ? null !== (xW = (0, PW.J)(lW)) && void 0 !== xW ? xW : "water" : function(WW, iW, OW, mW) {
            return jW.some(((EW, NW) => {
              let [LW, wW, tW] = EW;
              const ZW = kW(WW(iW + LW, OW + wW, mW + tW), "cryo");
              return null !== ZW && "port" !== ZW.kind && (0, PW.N)(cW, ZW, UW[NW])
            })) ? "cryo" : "water"
          }(WW, iW, OW, EW),
          bW = function(WW, iW, OW, mW) {
            let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              NW = 0;
            return jW.forEach(((LW, wW) => {
              let [tW, ZW, xW] = LW;
              const lW = kW(WW(iW + tW, OW + ZW, mW + xW), EW);
              lW && (0, PW.N)(cW, lW, UW[wW]) && (NW |= 1 << wW)
            })), NW
          }(WW, iW, OW, EW, AW),
          sW = wW ? function(WW) {
            var iW;
            return !0 === (null === (iW = SW(WW)) || void 0 === iW ? void 0 : iW.full)
          }(lW) : yW(WW, iW, OW, EW, AW, bW);
        return (0, mW.l)((0, NW.s)(AW, bW, sW))
      }
    }
  },
  38048: (WW, iW, OW) => {
    function mW(WW, iW) {
      return null === WW || null === iW ? WW === iW : WW[0] === iW[0] && WW[1] === iW[1] && WW[2] === iW[2]
    }

    function EW(WW) {
      return [WW[0] + .5, WW[1] + .5, WW[2] + .5]
    }
    OW.d(iW, {
      b: () => EW,
      f: () => mW
    })
  },
  39352: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      e: () => NW
    });
    const mW = ["Chest", "Loot Chest", "Moonstone Chest"],
      EW = [{
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

    function NW(WW) {
      return EW.find((iW => iW.exactMatch ? WW === iW.name : WW.includes(iW.name)))
    }
  },
  38097: (WW, iW, OW) => {
    function mW(WW) {
      return WW.includes("Leaf Bed")
    }

    function EW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !mW(WW)
    }

    function NW(WW) {
      return WW.includes(" Strongbed")
    }

    function PW(WW) {
      return mW(WW) || EW(WW) || NW(WW)
    }
    OW.d(iW, {
      d: () => PW,
      f: () => mW,
      j: () => NW,
      l: () => EW
    })
  },
  38088: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(38097),
      EW = OW(5725);
    const NW = [],
      PW = [],
      LW = [],
      cW = [];
    for (const tW of Object.keys(EW.p))(0, mW.f)(tW) ? NW.push(tW) : (0, mW.l)(tW) && PW.push(tW), (0, mW.j)(tW) && LW.push(tW), (tW.includes(" Bed Head") || tW.includes(" Strongbed Head")) && cW.push(tW);
    const wW = {
      leafBeds: NW,
      woolBeds: PW,
      strongBeds: LW,
      beds: [...NW, ...PW, ...LW],
      bedHeads: cW,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39759: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);