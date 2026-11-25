export const id = 228;
export const ids = [228];
export const modules = {
  37169: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => dQ,
      g: () => bQ,
      h: () => vQ,
      i: () => jQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(61),
      zQ = XQ(78),
      sQ = XQ(1421),
      FQ = XQ(1507),
      PQ = XQ(1416),
      gQ = XQ(1318),
      JQ = XQ(1226),
      rQ = XQ(37172),
      IQ = XQ(1145);

    function jQ(QQ) {
      const [WQ, XQ] = (0, TQ.useState)((() => (0, rQ.p)(QQ)));
      return (0, TQ.useEffect)((() => (XQ((0, rQ.p)(QQ)), (0, rQ.G)((() => {
        XQ((0, rQ.p)(QQ))
      })))), [QQ]), WQ
    }

    function BQ(QQ, WQ) {
      "function" === typeof QQ ? QQ(WQ) : QQ && (QQ.current = WQ)
    }

    function yQ(QQ) {
      let {
        tutorial: WQ,
        step: XQ,
        enabled: wQ = !0
      } = QQ;
      const qQ = jQ(WQ);
      return wQ && qQ === XQ
    }

    function VQ(QQ, WQ) {
      const XQ = (0, rQ.t)(QQ),
        wQ = XQ.indexOf(WQ);
      return !XQ.slice(wQ + 1).some((WQ => (0, rQ.B)(QQ, WQ)))
    }

    function DQ(QQ, WQ, XQ, wQ) {
      let {
        tutorial: qQ,
        step: TQ,
        waitForClick: zQ = !1,
        onPrevious: sQ
      } = QQ;
      const FQ = WQ && (0, rQ.z)(qQ, TQ),
        PQ = WQ && !VQ(qQ, TQ),
        JQ = zQ ? wQ : XQ;
      let IQ = null;
      FQ ? IQ = () => {
        null === sQ || void 0 === sQ || sQ(), (0, rQ.v)(qQ, TQ)
      } : PQ && (IQ = () => {
        (0, rQ.l)(qQ)
      }), (0, gQ.k)("popup", null !== JQ && void 0 !== JQ ? JQ : XQ, IQ, WQ && null !== JQ, null, FQ ? void 0 : "controller:menusSkipTutorial")
    }

    function pQ(QQ) {
      let {
        tutorial: WQ,
        step: XQ,
        text: wQ,
        waitForClick: qQ = !1,
        onPrevious: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, JQ.C)(), sQ = VQ(WQ, XQ);
      return (0, IQ.jsxs)(IQ.Fragment, {
        children: [(0, IQ.jsx)("div", {
          className: "TutorialStepText",
          children: wQ
        }), (0, IQ.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, rQ.z)(WQ, XQ) && (0, IQ.jsx)(FQ.l, {
            className: "TutorialStepButton",
            onClick: () => {
              null === TQ || void 0 === TQ || TQ(), (0, rQ.v)(WQ, XQ)
            },
            children: zQ("tutorial:back")
          }), !qQ && (0, IQ.jsx)(FQ.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, rQ.e)(XQ)
            },
            padDefaultFocus: !0,
            children: zQ(sQ ? "tutorial:done" : "tutorial:next")
          }), !sQ && (0, IQ.jsx)(FQ.l, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, rQ.l)(WQ)
            },
            children: zQ("tutorial:skip")
          })]
        })]
      })
    }
    const GQ = 6;

    function UQ(QQ) {
      let {
        rect: WQ,
        margin: XQ
      } = QQ;
      const wQ = Math.max(0, WQ.top - XQ),
        qQ = WQ.bottom + XQ,
        TQ = Math.max(0, WQ.left - XQ),
        zQ = WQ.right + XQ;
      return (0, IQ.jsxs)(IQ.Fragment, {
        children: [(0, IQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: wQ
          }
        }), (0, IQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: qQ,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, IQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: wQ,
            left: 0,
            width: TQ,
            height: qQ - wQ
          }
        }), (0, IQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: wQ,
            left: zQ,
            right: 0,
            height: qQ - wQ
          }
        })]
      })
    }

    function bQ(QQ) {
      let {
        target: WQ,
        placement: XQ,
        boxRef: wQ,
        className: FQ,
        spotlight: gQ = !0,
        spotlightMargin: JQ = GQ,
        children: rQ
      } = QQ;
      const {
        getArrowProps: jQ,
        getTooltipProps: BQ,
        setTooltipRef: yQ,
        setTriggerRef: VQ,
        update: DQ
      } = (0, sQ.b)({
        placement: XQ,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, JQ]
      });
      (0, TQ.useLayoutEffect)((() => {
        VQ(WQ)
      }), [WQ, VQ]);
      const pQ = function(QQ, WQ) {
        const [XQ, wQ] = (0, TQ.useState)(null);
        return (0, TQ.useEffect)((() => {
          if (!WQ || !QQ) return void wQ(null);
          let XQ = 0,
            qQ = null;
          const TQ = () => {
            const WQ = QQ.getBoundingClientRect();
            qQ && WQ.left === qQ.left && WQ.top === qQ.top && WQ.width === qQ.width && WQ.height === qQ.height || (qQ = WQ, wQ(WQ)), XQ = requestAnimationFrame(TQ)
          };
          return TQ(), () => {
            cancelAnimationFrame(XQ)
          }
        }), [QQ, WQ]), XQ
      }(WQ, gQ);
      (0, TQ.useEffect)((() => {
        null === DQ || void 0 === DQ || DQ()
      }), [pQ, DQ]), (0, TQ.useEffect)((() => {
        if (gQ || !WQ || !DQ) return;
        const QQ = new ResizeObserver((() => {
          DQ()
        }));
        return QQ.observe(WQ), WQ.parentElement && QQ.observe(WQ.parentElement), () => {
          QQ.disconnect()
        }
      }), [WQ, gQ, DQ]), (0, TQ.useEffect)((() => {
        gQ && (null === WQ || void 0 === WQ || WQ.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [WQ, gQ]);
      const bQ = (0, TQ.useCallback)((QQ => {
        yQ(QQ), wQ && (wQ.current = QQ)
      }), [yQ, wQ]);
      return (0, zQ.createPortal)((0, IQ.jsxs)(IQ.Fragment, {
        children: [pQ && (0, IQ.jsx)(UQ, {
          rect: pQ,
          margin: JQ
        }), (0, IQ.jsxs)("div", {
          ref: bQ,
          ...BQ({
            className: qQ()("tooltip-container SmallTextLight TutorialStep", FQ)
          }),
          children: [rQ, (0, IQ.jsx)("div", {
            ...jQ({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, PQ.g)())
    }
    const vQ = (0, TQ.forwardRef)((function(QQ, WQ) {
      let {
        placement: XQ = "right",
        children: wQ,
        ...qQ
      } = QQ;
      const zQ = yQ(qQ),
        sQ = (0, TQ.useRef)(null),
        FQ = (0, TQ.useRef)(null);
      DQ(qQ, zQ, sQ, FQ);
      const [PQ, gQ] = (0, TQ.useState)(null), JQ = wQ.ref, rQ = (0, TQ.useCallback)((QQ => {
        FQ.current = QQ, gQ(QQ), BQ(WQ, QQ), BQ(JQ, QQ)
      }), [WQ, JQ]);
      return (0, IQ.jsxs)(IQ.Fragment, {
        children: [(0, TQ.cloneElement)(wQ, {
          ref: rQ
        }), zQ && (0, IQ.jsx)(bQ, {
          target: PQ,
          placement: XQ,
          boxRef: sQ,
          children: (0, IQ.jsx)(pQ, {
            ...qQ
          })
        })]
      })
    }));

    function dQ(QQ) {
      const WQ = yQ(QQ),
        XQ = (0, TQ.useRef)(null);
      return DQ(QQ, WQ, XQ, null), WQ ? (0, zQ.createPortal)((0, IQ.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, IQ.jsx)("div", {
          ref: XQ,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, IQ.jsx)(pQ, {
            ...QQ
          })
        })
      }), (0, PQ.g)()) : null
    }
  },
  36906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      b: () => TQ,
      f: () => BQ,
      h: () => yQ,
      j: () => sQ,
      n: () => rQ,
      r: () => VQ,
      t: () => JQ,
      u: () => pQ,
      y: () => jQ
    });
    var wQ = XQ(26),
      qQ = XQ(31);
    const TQ = "clientGameInventoryButtonsChanged",
      zQ = new Map;

    function sQ() {
      return [...zQ.values()].sort(((QQ, WQ) => {
        var XQ, wQ;
        return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
      }))
    }
    let FQ = null;

    function PQ(QQ) {
      FQ = QQ
    }
    let gQ = !1;

    function JQ(QQ) {
      gQ = !0;
      try {
        QQ.onClick()
      } finally {
        gQ = !1
      }
      QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
    }

    function rQ() {
      return gQ
    }

    function IQ() {
      return sQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function jQ(QQ) {
      const WQ = IQ(),
        XQ = WQ.findIndex((QQ => QQ.id === FQ));
      return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
    }

    function BQ() {
      return null !== FQ && IQ().length > 1
    }

    function yQ() {
      PQ(null)
    }

    function VQ() {
      "inventory" !== wQ.b.get("openInGameMenuName") && PQ(null)
    }

    function DQ() {
      const QQ = FQ;
      return PQ(null), QQ
    }

    function pQ(QQ) {
      return zQ.set(QQ.id, QQ), qQ.k.mB(TQ, sQ(), !0), () => {
        zQ.get(QQ.id) === QQ && (zQ.delete(QQ.id), qQ.k.mB(TQ, sQ()))
      }
    }
  },
  36900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      c: () => sQ,
      g: () => DQ,
      j: () => yQ,
      n: () => VQ,
      q: () => rQ,
      s: () => PQ,
      u: () => BQ,
      y: () => IQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(36906);
    const sQ = "clientGameUiChanged";
    let FQ = null;

    function PQ() {
      return FQ
    }

    function gQ(QQ, WQ) {
      const XQ = {
        content: QQ,
        menu: WQ
      };
      return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
        FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
      }
    }
    let JQ = null;

    function rQ() {
      return JQ
    }

    function IQ(QQ) {
      return JQ = QQ, () => {
        JQ === QQ && (JQ = null)
      }
    }
    let jQ = !1;

    function BQ() {
      const QQ = wQ.b.get("openInGameMenuName");
      "clientGame" !== QQ && (jQ = "inventory" === QQ), (0, zQ.n)() || (0, zQ.h)(), (0, TQ.z)(TQ.e), wQ.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yQ() {
      pQ(!1)
    }

    function VQ() {
      pQ(jQ)
    }

    function DQ() {
      jQ && pQ(!1)
    }

    function pQ(QQ) {
      "clientGame" === wQ.b.get("openInGameMenuName") && wQ.b.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, zQ.h)(), jQ = !1
    }
  },
  37172: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => HQ,
      C: () => CQ,
      D: () => uQ,
      E: () => LQ,
      F: () => EQ,
      G: () => kQ,
      d: () => FQ,
      e: () => hQ,
      i: () => sQ,
      l: () => RQ,
      p: () => aQ,
      t: () => bQ,
      v: () => AQ,
      z: () => cQ
    });
    var wQ = XQ(43);
    const qQ = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      TQ = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      zQ = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      sQ = TQ.filter((QQ => "docsButton" !== QQ)),
      FQ = zQ.filter((QQ => "aiHelperButton" !== QQ)),
      PQ = "codeEditorTutorials",
      gQ = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      JQ = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let rQ = null,
      IQ = null;
    const jQ = new Set,
      BQ = new Set;
    let yQ = null;
    const VQ = new Set,
      DQ = new Set;

    function pQ() {
      DQ.forEach((QQ => {
        QQ()
      }))
    }

    function GQ() {
      if (!rQ) {
        const QQ = wQ.i.getItem(PQ);
        rQ = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof QQ && null !== QQ ? QQ : {}
        }
      }
      return rQ
    }

    function UQ(QQ) {
      const WQ = GQ();
      WQ[QQ] || (rQ = {
        ...WQ,
        [QQ]: !0
      }, wQ.i.setItem(PQ, rQ))
    }

    function bQ(QQ) {
      return "docsOverview" === QQ ? TQ : "aiHelperOverview" === QQ ? zQ : IQ ? qQ[IQ] : []
    }

    function vQ(QQ) {
      return ("worldCodeButton" !== QQ || !GQ().worldCodeIntroShown) && !VQ.has(QQ)
    }

    function dQ(QQ) {
      var WQ;
      return (null === (WQ = yQ) || void 0 === WQ ? void 0 : WQ.name) === QQ ? yQ.stepsDone : jQ
    }

    function HQ(QQ, WQ) {
      if (! function(QQ) {
          return yQ ? yQ.name === QQ : "welcome" === QQ
        }(QQ) || !vQ(WQ) || dQ(QQ).has(WQ)) return !1;
      if (yQ) return !0;
      const XQ = gQ[WQ];
      return XQ ? !GQ()[XQ] || BQ.has(WQ) : !GQ()[JQ[QQ]]
    }

    function aQ(QQ) {
      var WQ;
      return null !== (WQ = bQ(QQ).find((WQ => HQ(QQ, WQ)))) && void 0 !== WQ ? WQ : null
    }

    function lQ(QQ) {
      var WQ;
      UQ(JQ[QQ]), (null === (WQ = yQ) || void 0 === WQ ? void 0 : WQ.name) === QQ && (yQ = null)
    }

    function hQ(QQ) {
      const WQ = (yQ ? [yQ.name] : ["welcome", "docsOverview"]).find((WQ => aQ(WQ) === QQ));
      if (!WQ) return;
      dQ(WQ).add(QQ);
      const XQ = gQ[QQ];
      XQ && (UQ(XQ), yQ || BQ.add(QQ)), null === aQ(WQ) && lQ(WQ), pQ()
    }

    function iQ(QQ, WQ) {
      const XQ = bQ(QQ),
        wQ = dQ(QQ);
      for (let qQ = XQ.indexOf(WQ) - 1; qQ >= 0; qQ--)
        if (wQ.has(XQ[qQ]) && vQ(XQ[qQ])) return XQ[qQ];
      return null
    }

    function cQ(QQ, WQ) {
      return null !== iQ(QQ, WQ)
    }

    function AQ(QQ, WQ) {
      const XQ = iQ(QQ, WQ);
      XQ && (dQ(QQ).delete(XQ), pQ())
    }

    function RQ(QQ) {
      lQ(QQ), "welcome" === QQ && bQ("welcome").forEach((QQ => {
        const WQ = gQ[QQ];
        WQ && UQ(WQ)
      })), pQ()
    }

    function EQ(QQ) {
      yQ = {
        name: QQ,
        stepsDone: new Set
      }, pQ()
    }

    function CQ() {
      (yQ || 0 !== jQ.size || 0 !== BQ.size) && (yQ = null, jQ.clear(), BQ.clear(), pQ())
    }

    function uQ(QQ, WQ) {
      const XQ = WQ ? QQ : IQ === QQ ? null : IQ;
      XQ !== IQ && (IQ = XQ, pQ())
    }

    function LQ(QQ, WQ) {
      VQ.has(QQ) === WQ && (WQ ? VQ.delete(QQ) : VQ.add(QQ), pQ())
    }

    function kQ(QQ) {
      return DQ.add(QQ), () => {
        DQ.delete(QQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);