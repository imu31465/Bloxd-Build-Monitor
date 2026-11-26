export const id = 239;
export const ids = [239];
export const modules = {
  37604: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => WU,
      d: () => RU,
      h: () => PU,
      k: () => pU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(61),
      AU = zU(73),
      FU = zU(1427),
      oU = zU(1494),
      DU = zU(1420),
      EU = zU(1294),
      YU = zU(1193),
      NU = zU(37612),
      IU = zU(1305);

    function pU(UU) {
      const [XU, zU] = (0, QU.useState)((() => (0, NU.l)(UU)));
      return (0, QU.useEffect)((() => (zU((0, NU.l)(UU)), (0, NU.L)((() => {
        zU((0, NU.l)(UU))
      })))), [UU]), XU
    }

    function aU(UU, XU) {
      "function" === typeof UU ? UU(XU) : UU && (UU.current = XU)
    }

    function tU(UU) {
      let {
        tutorial: XU,
        step: zU,
        enabled: cU = !0
      } = UU;
      const yU = pU(XU);
      return cU && yU === zU
    }

    function gU(UU, XU) {
      const zU = (0, NU.p)(UU),
        cU = zU.indexOf(XU);
      return !zU.slice(cU + 1).some((XU => (0, NU.z)(UU, XU)))
    }

    function kU(UU, XU, zU, cU) {
      let {
        tutorial: yU,
        step: QU,
        waitForClick: AU = !1,
        onPrevious: FU
      } = UU;
      const oU = XU && (0, NU.w)(yU, QU),
        DU = XU && !gU(yU, QU),
        YU = AU ? cU : zU;
      let IU = null;
      oU ? IU = () => {
        null === FU || void 0 === FU || FU(), (0, NU.t)(yU, QU)
      } : DU && (IU = () => {
        (0, NU.j)(yU)
      }), (0, EU.t)("popup", null !== YU && void 0 !== YU ? YU : zU, IU, XU && null !== YU, null, oU ? void 0 : "controller:menusSkipTutorial")
    }

    function GU(UU) {
      let {
        tutorial: XU,
        step: zU,
        text: cU,
        waitForClick: yU = !1,
        onPrevious: QU
      } = UU;
      const {
        t: AU
      } = (0, YU.I)(), FU = gU(XU, zU);
      return (0, IU.jsxs)(IU.Fragment, {
        children: [(0, IU.jsx)("div", {
          className: "TutorialStepText",
          children: cU
        }), (0, IU.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, NU.w)(XU, zU) && (0, IU.jsx)(oU.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === QU || void 0 === QU || QU(), (0, NU.t)(XU, zU)
            },
            children: AU("tutorial:back")
          }), !yU && (0, IU.jsx)(oU.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, NU.d)(zU)
            },
            padDefaultFocus: !0,
            children: AU(FU ? "tutorial:done" : "tutorial:next")
          }), !FU && (0, IU.jsx)(oU.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, NU.j)(XU)
            },
            children: AU("tutorial:skip")
          })]
        })]
      })
    }
    const BU = 6;

    function ZU(UU) {
      let {
        rect: XU,
        margin: zU
      } = UU;
      const cU = Math.max(0, XU.top - zU),
        yU = XU.bottom + zU,
        QU = Math.max(0, XU.left - zU),
        AU = XU.right + zU;
      return (0, IU.jsxs)(IU.Fragment, {
        children: [(0, IU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: cU
          }
        }), (0, IU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: yU,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, IU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: cU,
            left: 0,
            width: QU,
            height: yU - cU
          }
        }), (0, IU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: cU,
            left: AU,
            right: 0,
            height: yU - cU
          }
        })]
      })
    }

    function RU(UU) {
      let {
        target: XU,
        placement: zU,
        boxRef: cU,
        className: oU,
        spotlight: EU = !0,
        spotlightMargin: YU = BU,
        children: NU
      } = UU;
      const {
        getArrowProps: pU,
        getTooltipProps: aU,
        setTooltipRef: tU,
        setTriggerRef: gU,
        update: kU
      } = (0, FU.e)({
        placement: zU,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, YU]
      });
      (0, QU.useLayoutEffect)((() => {
        gU(XU)
      }), [XU, gU]);
      const GU = function(UU, XU) {
        const [zU, cU] = (0, QU.useState)(null);
        return (0, QU.useEffect)((() => {
          if (!XU || !UU) return void cU(null);
          let zU = 0,
            yU = null;
          const QU = () => {
            const XU = UU.getBoundingClientRect();
            yU && XU.left === yU.left && XU.top === yU.top && XU.width === yU.width && XU.height === yU.height || (yU = XU, cU(XU)), zU = requestAnimationFrame(QU)
          };
          return QU(), () => {
            cancelAnimationFrame(zU)
          }
        }), [UU, XU]), zU
      }(XU, EU);
      (0, QU.useEffect)((() => {
        null === kU || void 0 === kU || kU()
      }), [GU, kU]), (0, QU.useEffect)((() => {
        if (EU || !XU || !kU) return;
        const UU = new ResizeObserver((() => {
          kU()
        }));
        return UU.observe(XU), XU.parentElement && UU.observe(XU.parentElement), () => {
          UU.disconnect()
        }
      }), [XU, EU, kU]), (0, QU.useEffect)((() => {
        EU && (null === XU || void 0 === XU || XU.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [XU, EU]);
      const RU = (0, QU.useCallback)((UU => {
        tU(UU), cU && (cU.current = UU)
      }), [tU, cU]);
      return (0, AU.createPortal)((0, IU.jsxs)(IU.Fragment, {
        children: [GU && (0, IU.jsx)(ZU, {
          rect: GU,
          margin: YU
        }), (0, IU.jsxs)("div", {
          ref: RU,
          ...aU({
            className: yU()("tooltip-container SmallTextLight TutorialStep", oU)
          }),
          children: [NU, (0, IU.jsx)("div", {
            ...pU({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, DU.e)())
    }
    const PU = (0, QU.forwardRef)((function(UU, XU) {
      let {
        placement: zU = "right",
        children: cU,
        ...yU
      } = UU;
      const AU = tU(yU),
        FU = (0, QU.useRef)(null),
        oU = (0, QU.useRef)(null);
      kU(yU, AU, FU, oU);
      const [DU, EU] = (0, QU.useState)(null), YU = cU.ref, NU = (0, QU.useCallback)((UU => {
        oU.current = UU, EU(UU), aU(XU, UU), aU(YU, UU)
      }), [XU, YU]);
      return (0, IU.jsxs)(IU.Fragment, {
        children: [(0, QU.cloneElement)(cU, {
          ref: NU
        }), AU && (0, IU.jsx)(RU, {
          target: DU,
          placement: zU,
          boxRef: FU,
          children: (0, IU.jsx)(GU, {
            ...yU
          })
        })]
      })
    }));

    function WU(UU) {
      const XU = tU(UU),
        zU = (0, QU.useRef)(null);
      return kU(UU, XU, zU, null), XU ? (0, AU.createPortal)((0, IU.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, IU.jsx)("div", {
          ref: zU,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, IU.jsx)(GU, {
            ...UU
          })
        })
      }), (0, DU.e)()) : null
    }
  },
  37334: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => aU,
      l: () => tU,
      o: () => FU,
      r: () => NU,
      t: () => gU,
      v: () => YU,
      w: () => GU,
      x: () => pU,
      y: () => kU
    });
    var cU = zU(27),
      yU = zU(31);
    const QU = "clientGameInventoryButtonsChanged",
      AU = new Map;

    function FU() {
      return [...AU.values()].sort(((UU, XU) => {
        var zU, cU;
        return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
      }))
    }
    let oU = null;

    function DU(UU) {
      oU = UU
    }
    let EU = !1;

    function YU(UU) {
      EU = !0;
      try {
        UU.onClick()
      } finally {
        EU = !1
      }
      UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
    }

    function NU() {
      return EU
    }

    function IU() {
      return FU().filter((UU => UU.panel && !UU.disabled))
    }

    function pU(UU) {
      const XU = IU(),
        zU = XU.findIndex((UU => UU.id === oU));
      return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
    }

    function aU() {
      return null !== oU && IU().length > 1
    }

    function tU() {
      DU(null)
    }

    function gU() {
      "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
    }

    function kU() {
      const UU = oU;
      return DU(null), UU
    }

    function GU(UU) {
      return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
        AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
      }
    }
  },
  37325: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => kU,
      j: () => tU,
      l: () => gU,
      n: () => NU,
      o: () => DU,
      r: () => aU,
      t: () => IU,
      u: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(37334);
    const FU = "clientGameUiChanged";
    let oU = null;

    function DU() {
      return oU
    }

    function EU(UU, XU) {
      const zU = {
        content: UU,
        menu: XU
      };
      return oU = zU, yU.k.UY(FU, oU, !0), () => {
        oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
      }
    }
    let YU = null;

    function NU() {
      return YU
    }

    function IU(UU) {
      return YU = UU, () => {
        YU === UU && (YU = null)
      }
    }
    let pU = !1;

    function aU() {
      const UU = cU.e.get("openInGameMenuName");
      "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tU() {
      GU(!1)
    }

    function gU() {
      GU(pU)
    }

    function kU() {
      pU && GU(!1)
    }

    function GU(UU) {
      "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, AU.l)(), pU = !1
    }
  },
  37612: (UU, XU, zU) => {
    zU.d(XU, {
      D: () => uU,
      G: () => fU,
      I: () => iU,
      J: () => rU,
      L: () => HU,
      b: () => oU,
      d: () => CU,
      h: () => FU,
      j: () => SU,
      l: () => LU,
      p: () => RU,
      t: () => OU,
      w: () => qU,
      z: () => dU
    });
    var cU = zU(42);
    const yU = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      QU = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      AU = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      FU = QU.filter((UU => "docsButton" !== UU)),
      oU = AU.filter((UU => "aiHelperButton" !== UU)),
      DU = "codeEditorTutorials",
      EU = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      YU = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let NU = null,
      IU = null;
    const pU = new Set,
      aU = new Set;
    let tU = null;
    const gU = new Set,
      kU = new Set;

    function GU() {
      kU.forEach((UU => {
        UU()
      }))
    }

    function BU() {
      if (!NU) {
        const UU = cU.k.getItem(DU);
        NU = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof UU && null !== UU ? UU : {}
        }
      }
      return NU
    }

    function ZU(UU) {
      const XU = BU();
      XU[UU] || (NU = {
        ...XU,
        [UU]: !0
      }, cU.k.setItem(DU, NU))
    }

    function RU(UU) {
      return "docsOverview" === UU ? QU : "aiHelperOverview" === UU ? AU : IU ? yU[IU] : []
    }

    function PU(UU) {
      return ("worldCodeButton" !== UU || !BU().worldCodeIntroShown) && !gU.has(UU)
    }

    function WU(UU) {
      var XU;
      return (null === (XU = tU) || void 0 === XU ? void 0 : XU.name) === UU ? tU.stepsDone : pU
    }

    function dU(UU, XU) {
      if (! function(UU) {
          return tU ? tU.name === UU : "welcome" === UU
        }(UU) || !PU(XU) || WU(UU).has(XU)) return !1;
      if (tU) return !0;
      const zU = EU[XU];
      return zU ? !BU()[zU] || aU.has(XU) : !BU()[YU[UU]]
    }

    function LU(UU) {
      var XU;
      return null !== (XU = RU(UU).find((XU => dU(UU, XU)))) && void 0 !== XU ? XU : null
    }

    function eU(UU) {
      var XU;
      ZU(YU[UU]), (null === (XU = tU) || void 0 === XU ? void 0 : XU.name) === UU && (tU = null)
    }

    function CU(UU) {
      const XU = (tU ? [tU.name] : ["welcome", "docsOverview"]).find((XU => LU(XU) === UU));
      if (!XU) return;
      WU(XU).add(UU);
      const zU = EU[UU];
      zU && (ZU(zU), tU || aU.add(UU)), null === LU(XU) && eU(XU), GU()
    }

    function wU(UU, XU) {
      const zU = RU(UU),
        cU = WU(UU);
      for (let yU = zU.indexOf(XU) - 1; yU >= 0; yU--)
        if (cU.has(zU[yU]) && PU(zU[yU])) return zU[yU];
      return null
    }

    function qU(UU, XU) {
      return null !== wU(UU, XU)
    }

    function OU(UU, XU) {
      const zU = wU(UU, XU);
      zU && (WU(UU).delete(zU), GU())
    }

    function SU(UU) {
      eU(UU), "welcome" === UU && RU("welcome").forEach((UU => {
        const XU = EU[UU];
        XU && ZU(XU)
      })), GU()
    }

    function rU(UU) {
      tU = {
        name: UU,
        stepsDone: new Set
      }, GU()
    }

    function uU() {
      (tU || 0 !== pU.size || 0 !== aU.size) && (tU = null, pU.clear(), aU.clear(), GU())
    }

    function fU(UU, XU) {
      const zU = XU ? UU : IU === UU ? null : IU;
      zU !== IU && (IU = zU, GU())
    }

    function iU(UU, XU) {
      gU.has(UU) === XU && (XU ? gU.delete(UU) : gU.add(UU), GU())
    }

    function HU(UU) {
      return kU.add(UU), () => {
        kU.delete(UU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);