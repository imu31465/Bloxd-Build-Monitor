export const id = 243;
export const ids = [243];
export const modules = {
  38067: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => AV,
      h: () => TV,
      l: () => PV,
      p: () => kV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(62),
      yV = xV(78),
      pV = xV(1455),
      QV = xV(1551),
      nV = xV(1446),
      wV = xV(1309),
      ZV = xV(1220),
      vV = xV(38073),
      rV = xV(1321);

    function kV(VV) {
      const [eV, xV] = (0, UV.useState)((() => (0, vV.m)(VV)));
      return (0, UV.useEffect)((() => (xV((0, vV.m)(VV)), (0, vV.L)((() => {
        xV((0, vV.m)(VV))
      })))), [VV]), eV
    }

    function bV(VV, eV) {
      "function" === typeof VV ? VV(eV) : VV && (VV.current = eV)
    }

    function EV(VV) {
      let {
        tutorial: eV,
        step: xV,
        enabled: JV = !0
      } = VV;
      const YV = kV(eV);
      return JV && YV === xV
    }

    function BV(VV, eV) {
      const xV = (0, vV.q)(VV),
        JV = xV.indexOf(eV);
      return !xV.slice(JV + 1).some((eV => (0, vV.x)(VV, eV)))
    }

    function jV(VV, eV, xV, JV) {
      let {
        tutorial: YV,
        step: UV,
        waitForClick: yV = !1,
        onPrevious: pV
      } = VV;
      const QV = eV && (0, vV.t)(YV, UV),
        nV = eV && !BV(YV, UV),
        ZV = yV ? JV : xV;
      let rV = null;
      QV ? rV = () => {
        null === pV || void 0 === pV || pV(), (0, vV.s)(YV, UV)
      } : nV && (rV = () => {
        (0, vV.k)(YV)
      }), (0, wV.s)("popup", null !== ZV && void 0 !== ZV ? ZV : xV, rV, eV && null !== ZV, null, QV ? void 0 : "controller:menusSkipTutorial")
    }

    function qV(VV) {
      let {
        tutorial: eV,
        step: xV,
        text: JV,
        waitForClick: YV = !1,
        onPrevious: UV
      } = VV;
      const {
        t: yV
      } = (0, ZV.A)(), pV = BV(eV, xV);
      return (0, rV.jsxs)(rV.Fragment, {
        children: [(0, rV.jsx)("div", {
          className: "TutorialStepText",
          children: JV
        }), (0, rV.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, vV.t)(eV, xV) && (0, rV.jsx)(QV.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === UV || void 0 === UV || UV(), (0, vV.s)(eV, xV)
            },
            children: yV("tutorial:back")
          }), !YV && (0, rV.jsx)(QV.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, vV.f)(xV)
            },
            padDefaultFocus: !0,
            children: yV(pV ? "tutorial:done" : "tutorial:next")
          }), !pV && (0, rV.jsx)(QV.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, vV.k)(eV)
            },
            children: yV("tutorial:skip")
          })]
        })]
      })
    }
    const tV = 6;

    function FV(VV) {
      let {
        rect: eV,
        margin: xV
      } = VV;
      const JV = Math.max(0, eV.top - xV),
        YV = eV.bottom + xV,
        UV = Math.max(0, eV.left - xV),
        yV = eV.right + xV;
      return (0, rV.jsxs)(rV.Fragment, {
        children: [(0, rV.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: JV
          }
        }), (0, rV.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: YV,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, rV.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: JV,
            left: 0,
            width: UV,
            height: YV - JV
          }
        }), (0, rV.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: JV,
            left: yV,
            right: 0,
            height: YV - JV
          }
        })]
      })
    }

    function TV(VV) {
      let {
        target: eV,
        placement: xV,
        boxRef: JV,
        className: QV,
        spotlight: wV = !0,
        spotlightMargin: ZV = tV,
        children: vV
      } = VV;
      const {
        getArrowProps: kV,
        getTooltipProps: bV,
        setTooltipRef: EV,
        setTriggerRef: BV,
        update: jV
      } = (0, pV.b)({
        placement: xV,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, ZV]
      });
      (0, UV.useLayoutEffect)((() => {
        BV(eV)
      }), [eV, BV]);
      const qV = function(VV, eV) {
        const [xV, JV] = (0, UV.useState)(null);
        return (0, UV.useEffect)((() => {
          if (!eV || !VV) return void JV(null);
          let xV = 0,
            YV = null;
          const UV = () => {
            const eV = VV.getBoundingClientRect();
            YV && eV.left === YV.left && eV.top === YV.top && eV.width === YV.width && eV.height === YV.height || (YV = eV, JV(eV)), xV = requestAnimationFrame(UV)
          };
          return UV(), () => {
            cancelAnimationFrame(xV)
          }
        }), [VV, eV]), xV
      }(eV, wV);
      (0, UV.useEffect)((() => {
        null === jV || void 0 === jV || jV()
      }), [qV, jV]), (0, UV.useEffect)((() => {
        if (wV || !eV || !jV) return;
        const VV = new ResizeObserver((() => {
          jV()
        }));
        return VV.observe(eV), eV.parentElement && VV.observe(eV.parentElement), () => {
          VV.disconnect()
        }
      }), [eV, wV, jV]), (0, UV.useEffect)((() => {
        wV && (null === eV || void 0 === eV || eV.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [eV, wV]);
      const TV = (0, UV.useCallback)((VV => {
        EV(VV), JV && (JV.current = VV)
      }), [EV, JV]);
      return (0, yV.createPortal)((0, rV.jsxs)(rV.Fragment, {
        children: [qV && (0, rV.jsx)(FV, {
          rect: qV,
          margin: ZV
        }), (0, rV.jsxs)("div", {
          ref: TV,
          ...bV({
            className: YV()("tooltip-container SmallTextLight TutorialStep", QV)
          }),
          children: [vV, (0, rV.jsx)("div", {
            ...kV({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, nV.g)())
    }
    const PV = (0, UV.forwardRef)((function(VV, eV) {
      let {
        placement: xV = "right",
        children: JV,
        ...YV
      } = VV;
      const yV = EV(YV),
        pV = (0, UV.useRef)(null),
        QV = (0, UV.useRef)(null);
      jV(YV, yV, pV, QV);
      const [nV, wV] = (0, UV.useState)(null), ZV = JV.ref, vV = (0, UV.useCallback)((VV => {
        QV.current = VV, wV(VV), bV(eV, VV), bV(ZV, VV)
      }), [eV, ZV]);
      return (0, rV.jsxs)(rV.Fragment, {
        children: [(0, UV.cloneElement)(JV, {
          ref: vV
        }), yV && (0, rV.jsx)(TV, {
          target: nV,
          placement: xV,
          boxRef: pV,
          children: (0, rV.jsx)(qV, {
            ...YV
          })
        })]
      })
    }));

    function AV(VV) {
      const eV = EV(VV),
        xV = (0, UV.useRef)(null);
      return jV(VV, eV, xV, null), eV ? (0, yV.createPortal)((0, rV.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, rV.jsx)("div", {
          ref: xV,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, rV.jsx)(qV, {
            ...VV
          })
        })
      }), (0, nV.g)()) : null
    }
  },
  37771: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => bV,
      j: () => EV,
      m: () => pV,
      o: () => vV,
      q: () => BV,
      r: () => ZV,
      s: () => qV,
      t: () => kV,
      u: () => jV
    });
    var JV = xV(27),
      YV = xV(32);
    const UV = "clientGameInventoryButtonsChanged",
      yV = new Map;

    function pV() {
      return [...yV.values()].sort(((VV, eV) => {
        var xV, JV;
        return (null !== (xV = VV.order) && void 0 !== xV ? xV : 0) - (null !== (JV = eV.order) && void 0 !== JV ? JV : 0)
      }))
    }
    let QV = null;

    function nV(VV) {
      QV = VV
    }
    let wV = !1;

    function ZV(VV) {
      wV = !0;
      try {
        VV.onClick()
      } finally {
        wV = !1
      }
      VV.panel && "clientGame" === JV.b.get("openInGameMenuName") && nV(VV.id)
    }

    function vV() {
      return wV
    }

    function rV() {
      return pV().filter((VV => VV.panel && !VV.disabled))
    }

    function kV(VV) {
      const eV = rV(),
        xV = eV.findIndex((VV => VV.id === QV));
      return !(xV < 0 || eV.length < 2) && (ZV(eV[(xV + VV + eV.length) % eV.length]), !0)
    }

    function bV() {
      return null !== QV && rV().length > 1
    }

    function EV() {
      nV(null)
    }

    function BV() {
      "inventory" !== JV.b.get("openInGameMenuName") && nV(null)
    }

    function jV() {
      const VV = QV;
      return nV(null), VV
    }

    function qV(VV) {
      return yV.set(VV.id, VV), YV.h.QZ(UV, pV(), !0), () => {
        yV.get(VV.id) === VV && (yV.delete(VV.id), YV.h.QZ(UV, pV()))
      }
    }
  },
  37762: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      h: () => jV,
      i: () => EV,
      m: () => BV,
      o: () => vV,
      p: () => nV,
      r: () => bV,
      v: () => rV,
      z: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(37771);
    const pV = "clientGameUiChanged";
    let QV = null;

    function nV() {
      return QV
    }

    function wV(VV, eV) {
      const xV = {
        content: VV,
        menu: eV
      };
      return QV = xV, YV.h.QZ(pV, QV, !0), () => {
        QV === xV && (QV = null, kV = !1, EV(), YV.h.QZ(pV, null))
      }
    }
    let ZV = null;

    function vV() {
      return ZV
    }

    function rV(VV) {
      return ZV = VV, () => {
        ZV === VV && (ZV = null)
      }
    }
    let kV = !1;

    function bV() {
      const VV = JV.b.get("openInGameMenuName");
      "clientGame" !== VV && (kV = "inventory" === VV), (0, yV.o)() || (0, yV.j)(), (0, UV.p)(UV.d), JV.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function EV() {
      qV(!1)
    }

    function BV() {
      qV(kV)
    }

    function jV() {
      kV && qV(!1)
    }

    function qV(VV) {
      "clientGame" === JV.b.get("openInGameMenuName") && JV.b.set({
        openInGameMenuName: VV ? "inventory" : null
      }), VV || (0, yV.j)(), kV = !1
    }
  },
  38073: (VV, eV, xV) => {
    xV.d(eV, {
      C: () => CV,
      E: () => aV,
      I: () => DV,
      L: () => oV,
      e: () => QV,
      f: () => zV,
      g: () => pV,
      k: () => gV,
      m: () => XV,
      q: () => TV,
      s: () => RV,
      t: () => WV,
      x: () => NV,
      y: () => iV
    });
    var JV = xV(40);
    const YV = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      UV = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      yV = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      pV = UV.filter((VV => "docsButton" !== VV)),
      QV = yV.filter((VV => "aiHelperButton" !== VV)),
      nV = "codeEditorTutorials",
      wV = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      ZV = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let vV = null,
      rV = null;
    const kV = new Set,
      bV = new Set;
    let EV = null;
    const BV = new Set,
      jV = new Set;

    function qV() {
      jV.forEach((VV => {
        VV()
      }))
    }

    function tV() {
      if (!vV) {
        const VV = JV.m.getItem(nV);
        vV = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof VV && null !== VV ? VV : {}
        }
      }
      return vV
    }

    function FV(VV) {
      const eV = tV();
      eV[VV] || (vV = {
        ...eV,
        [VV]: !0
      }, JV.m.setItem(nV, vV))
    }

    function TV(VV) {
      return "docsOverview" === VV ? UV : "aiHelperOverview" === VV ? yV : rV ? YV[rV] : []
    }

    function PV(VV) {
      return ("worldCodeButton" !== VV || !tV().worldCodeIntroShown) && !BV.has(VV)
    }

    function AV(VV) {
      var eV;
      return (null === (eV = EV) || void 0 === eV ? void 0 : eV.name) === VV ? EV.stepsDone : kV
    }

    function NV(VV, eV) {
      if (! function(VV) {
          return EV ? EV.name === VV : "welcome" === VV
        }(VV) || !PV(eV) || AV(VV).has(eV)) return !1;
      if (EV) return !0;
      const xV = wV[eV];
      return xV ? !tV()[xV] || bV.has(eV) : !tV()[ZV[VV]]
    }

    function XV(VV) {
      var eV;
      return null !== (eV = TV(VV).find((eV => NV(VV, eV)))) && void 0 !== eV ? eV : null
    }

    function MV(VV) {
      var eV;
      FV(ZV[VV]), (null === (eV = EV) || void 0 === eV ? void 0 : eV.name) === VV && (EV = null)
    }

    function zV(VV) {
      const eV = (EV ? [EV.name] : ["welcome", "docsOverview"]).find((eV => XV(eV) === VV));
      if (!eV) return;
      AV(eV).add(VV);
      const xV = wV[VV];
      xV && (FV(xV), EV || bV.add(VV)), null === XV(eV) && MV(eV), qV()
    }

    function GV(VV, eV) {
      const xV = TV(VV),
        JV = AV(VV);
      for (let YV = xV.indexOf(eV) - 1; YV >= 0; YV--)
        if (JV.has(xV[YV]) && PV(xV[YV])) return xV[YV];
      return null
    }

    function WV(VV, eV) {
      return null !== GV(VV, eV)
    }

    function RV(VV, eV) {
      const xV = GV(VV, eV);
      xV && (AV(VV).delete(xV), qV())
    }

    function gV(VV) {
      MV(VV), "welcome" === VV && TV("welcome").forEach((VV => {
        const eV = wV[VV];
        eV && FV(eV)
      })), qV()
    }

    function DV(VV) {
      EV = {
        name: VV,
        stepsDone: new Set
      }, qV()
    }

    function iV() {
      (EV || 0 !== kV.size || 0 !== bV.size) && (EV = null, kV.clear(), bV.clear(), qV())
    }

    function CV(VV, eV) {
      const xV = eV ? VV : rV === VV ? null : rV;
      xV !== rV && (rV = xV, qV())
    }

    function aV(VV, eV) {
      BV.has(VV) === eV && (eV ? BV.delete(VV) : BV.add(VV), qV())
    }

    function oV(VV) {
      return jV.add(VV), () => {
        jV.delete(VV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);