export const id = 243;
export const ids = [243];
export const modules = {
  37821: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => bM,
      e: () => CM,
      g: () => eM,
      k: () => hM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(44),
      aM = iM(65),
      PM = iM(1446),
      nM = iM(1520),
      QM = iM(1440),
      zM = iM(1287),
      LM = iM(1188),
      mM = iM(37828),
      HM = iM(1303);

    function hM(MM) {
      const [rM, iM] = (0, jM.useState)((() => (0, mM.n)(MM)));
      return (0, jM.useEffect)((() => (iM((0, mM.n)(MM)), (0, mM.G)((() => {
        iM((0, mM.n)(MM))
      })))), [MM]), rM
    }

    function JM(MM, rM) {
      "function" === typeof MM ? MM(rM) : MM && (MM.current = rM)
    }

    function dM(MM) {
      let {
        tutorial: rM,
        step: iM,
        enabled: OM = !0
      } = MM;
      const SM = hM(rM);
      return OM && SM === iM
    }

    function yM(MM, rM) {
      const iM = (0, mM.o)(MM),
        OM = iM.indexOf(rM);
      return !iM.slice(OM + 1).some((rM => (0, mM.u)(MM, rM)))
    }

    function lM(MM, rM, iM, OM) {
      let {
        tutorial: SM,
        step: jM,
        waitForClick: aM = !1,
        onPrevious: PM
      } = MM;
      const nM = rM && (0, mM.t)(SM, jM),
        QM = rM && !yM(SM, jM),
        LM = aM ? OM : iM;
      let HM = null;
      nM ? HM = () => {
        null === PM || void 0 === PM || PM(), (0, mM.s)(SM, jM)
      } : QM && (HM = () => {
        (0, mM.k)(SM)
      }), (0, zM.v)("popup", null !== LM && void 0 !== LM ? LM : iM, HM, rM && null !== LM, null, nM ? void 0 : "controller:menusSkipTutorial")
    }

    function EM(MM) {
      let {
        tutorial: rM,
        step: iM,
        text: OM,
        waitForClick: SM = !1,
        onPrevious: jM
      } = MM;
      const {
        t: aM
      } = (0, LM.A)(), PM = yM(rM, iM);
      return (0, HM.jsxs)(HM.Fragment, {
        children: [(0, HM.jsx)("div", {
          className: "TutorialStepText",
          children: OM
        }), (0, HM.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, mM.t)(rM, iM) && (0, HM.jsx)(nM.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === jM || void 0 === jM || jM(), (0, mM.s)(rM, iM)
            },
            children: aM("tutorial:back")
          }), !SM && (0, HM.jsx)(nM.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, mM.h)(iM)
            },
            padDefaultFocus: !0,
            children: aM(PM ? "tutorial:done" : "tutorial:next")
          }), !PM && (0, HM.jsx)(nM.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, mM.k)(rM)
            },
            children: aM("tutorial:skip")
          })]
        })]
      })
    }
    const UM = 6;

    function GM(MM) {
      let {
        rect: rM,
        margin: iM
      } = MM;
      const OM = Math.max(0, rM.top - iM),
        SM = rM.bottom + iM,
        jM = Math.max(0, rM.left - iM),
        aM = rM.right + iM;
      return (0, HM.jsxs)(HM.Fragment, {
        children: [(0, HM.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: OM
          }
        }), (0, HM.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: SM,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, HM.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: OM,
            left: 0,
            width: jM,
            height: SM - OM
          }
        }), (0, HM.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: OM,
            left: aM,
            right: 0,
            height: SM - OM
          }
        })]
      })
    }

    function CM(MM) {
      let {
        target: rM,
        placement: iM,
        boxRef: OM,
        className: nM,
        spotlight: zM = !0,
        spotlightMargin: LM = UM,
        children: mM
      } = MM;
      const {
        getArrowProps: hM,
        getTooltipProps: JM,
        setTooltipRef: dM,
        setTriggerRef: yM,
        update: lM
      } = (0, PM.d)({
        placement: iM,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, LM]
      });
      (0, jM.useLayoutEffect)((() => {
        yM(rM)
      }), [rM, yM]);
      const EM = function(MM, rM) {
        const [iM, OM] = (0, jM.useState)(null);
        return (0, jM.useEffect)((() => {
          if (!rM || !MM) return void OM(null);
          let iM = 0,
            SM = null;
          const jM = () => {
            const rM = MM.getBoundingClientRect();
            SM && rM.left === SM.left && rM.top === SM.top && rM.width === SM.width && rM.height === SM.height || (SM = rM, OM(rM)), iM = requestAnimationFrame(jM)
          };
          return jM(), () => {
            cancelAnimationFrame(iM)
          }
        }), [MM, rM]), iM
      }(rM, zM);
      (0, jM.useEffect)((() => {
        null === lM || void 0 === lM || lM()
      }), [EM, lM]), (0, jM.useEffect)((() => {
        if (zM || !rM || !lM) return;
        const MM = new ResizeObserver((() => {
          lM()
        }));
        return MM.observe(rM), rM.parentElement && MM.observe(rM.parentElement), () => {
          MM.disconnect()
        }
      }), [rM, zM, lM]), (0, jM.useEffect)((() => {
        zM && (null === rM || void 0 === rM || rM.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [rM, zM]);
      const CM = (0, jM.useCallback)((MM => {
        dM(MM), OM && (OM.current = MM)
      }), [dM, OM]);
      return (0, aM.createPortal)((0, HM.jsxs)(HM.Fragment, {
        children: [EM && (0, HM.jsx)(GM, {
          rect: EM,
          margin: LM
        }), (0, HM.jsxs)("div", {
          ref: CM,
          ...JM({
            className: SM()("tooltip-container SmallTextLight TutorialStep", nM)
          }),
          children: [mM, (0, HM.jsx)("div", {
            ...hM({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, QM.m)())
    }
    const eM = (0, jM.forwardRef)((function(MM, rM) {
      let {
        placement: iM = "right",
        children: OM,
        ...SM
      } = MM;
      const aM = dM(SM),
        PM = (0, jM.useRef)(null),
        nM = (0, jM.useRef)(null);
      lM(SM, aM, PM, nM);
      const [QM, zM] = (0, jM.useState)(null), LM = OM.ref, mM = (0, jM.useCallback)((MM => {
        nM.current = MM, zM(MM), JM(rM, MM), JM(LM, MM)
      }), [rM, LM]);
      return (0, HM.jsxs)(HM.Fragment, {
        children: [(0, jM.cloneElement)(OM, {
          ref: mM
        }), aM && (0, HM.jsx)(CM, {
          target: QM,
          placement: iM,
          boxRef: PM,
          children: (0, HM.jsx)(EM, {
            ...SM
          })
        })]
      })
    }));

    function bM(MM) {
      const rM = dM(MM),
        iM = (0, jM.useRef)(null);
      return lM(MM, rM, iM, null), rM ? (0, aM.createPortal)((0, HM.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, HM.jsx)("div", {
          ref: iM,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, HM.jsx)(EM, {
            ...MM
          })
        })
      }), (0, QM.m)()) : null
    }
  },
  37544: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => lM,
      b: () => jM,
      f: () => JM,
      i: () => dM,
      j: () => PM,
      m: () => mM,
      q: () => yM,
      u: () => LM,
      x: () => EM,
      y: () => hM
    });
    var OM = iM(19),
      SM = iM(22);
    const jM = "clientGameInventoryButtonsChanged",
      aM = new Map;

    function PM() {
      return [...aM.values()].sort(((MM, rM) => {
        var iM, OM;
        return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
      }))
    }
    let nM = null;

    function QM(MM) {
      nM = MM
    }
    let zM = !1;

    function LM(MM) {
      zM = !0;
      try {
        MM.onClick()
      } finally {
        zM = !1
      }
      MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
    }

    function mM() {
      return zM
    }

    function HM() {
      return PM().filter((MM => MM.panel && !MM.disabled))
    }

    function hM(MM) {
      const rM = HM(),
        iM = rM.findIndex((MM => MM.id === nM));
      return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
    }

    function JM() {
      return null !== nM && HM().length > 1
    }

    function dM() {
      QM(null)
    }

    function yM() {
      "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
    }

    function lM() {
      const MM = nM;
      return QM(null), MM
    }

    function EM(MM) {
      return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
        aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
      }
    }
  },
  37542: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      C: () => zM,
      e: () => PM,
      g: () => lM,
      k: () => dM,
      n: () => yM,
      p: () => mM,
      t: () => QM,
      w: () => JM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(37544);
    const PM = "clientGameUiChanged";
    let nM = null;

    function QM() {
      return nM
    }

    function zM(MM, rM) {
      const iM = {
        content: MM,
        menu: rM
      };
      return nM = iM, SM.i.Tz(PM, nM, !0), () => {
        nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
      }
    }
    let LM = null;

    function mM() {
      return LM
    }

    function HM(MM) {
      return LM = MM, () => {
        LM === MM && (LM = null)
      }
    }
    let hM = !1;

    function JM() {
      const MM = OM.d.get("openInGameMenuName");
      "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dM() {
      EM(!1)
    }

    function yM() {
      EM(hM)
    }

    function lM() {
      hM && EM(!1)
    }

    function EM(MM) {
      "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
        openInGameMenuName: MM ? "inventory" : null
      }), MM || (0, aM.i)(), hM = !1
    }
  },
  37828: (MM, rM, iM) => {
    iM.d(rM, {
      D: () => oM,
      E: () => DM,
      G: () => fM,
      d: () => nM,
      h: () => uM,
      j: () => PM,
      k: () => sM,
      n: () => tM,
      o: () => CM,
      s: () => WM,
      t: () => pM,
      u: () => wM,
      y: () => kM,
      z: () => ZM
    });
    var OM = iM(30);
    const SM = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      jM = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      aM = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      PM = jM.filter((MM => "docsButton" !== MM)),
      nM = aM.filter((MM => "aiHelperButton" !== MM)),
      QM = "codeEditorTutorials",
      zM = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      LM = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let mM = null,
      HM = null;
    const hM = new Set,
      JM = new Set;
    let dM = null;
    const yM = new Set,
      lM = new Set;

    function EM() {
      lM.forEach((MM => {
        MM()
      }))
    }

    function UM() {
      if (!mM) {
        const MM = OM.g.getItem(QM);
        mM = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof MM && null !== MM ? MM : {}
        }
      }
      return mM
    }

    function GM(MM) {
      const rM = UM();
      rM[MM] || (mM = {
        ...rM,
        [MM]: !0
      }, OM.g.setItem(QM, mM))
    }

    function CM(MM) {
      return "docsOverview" === MM ? jM : "aiHelperOverview" === MM ? aM : HM ? SM[HM] : []
    }

    function eM(MM) {
      return ("worldCodeButton" !== MM || !UM().worldCodeIntroShown) && !yM.has(MM)
    }

    function bM(MM) {
      var rM;
      return (null === (rM = dM) || void 0 === rM ? void 0 : rM.name) === MM ? dM.stepsDone : hM
    }

    function wM(MM, rM) {
      if (! function(MM) {
          return dM ? dM.name === MM : "welcome" === MM
        }(MM) || !eM(rM) || bM(MM).has(rM)) return !1;
      if (dM) return !0;
      const iM = zM[rM];
      return iM ? !UM()[iM] || JM.has(rM) : !UM()[LM[MM]]
    }

    function tM(MM) {
      var rM;
      return null !== (rM = CM(MM).find((rM => wM(MM, rM)))) && void 0 !== rM ? rM : null
    }

    function gM(MM) {
      var rM;
      GM(LM[MM]), (null === (rM = dM) || void 0 === rM ? void 0 : rM.name) === MM && (dM = null)
    }

    function uM(MM) {
      const rM = (dM ? [dM.name] : ["welcome", "docsOverview"]).find((rM => tM(rM) === MM));
      if (!rM) return;
      bM(rM).add(MM);
      const iM = zM[MM];
      iM && (GM(iM), dM || JM.add(MM)), null === tM(rM) && gM(rM), EM()
    }

    function RM(MM, rM) {
      const iM = CM(MM),
        OM = bM(MM);
      for (let SM = iM.indexOf(rM) - 1; SM >= 0; SM--)
        if (OM.has(iM[SM]) && eM(iM[SM])) return iM[SM];
      return null
    }

    function pM(MM, rM) {
      return null !== RM(MM, rM)
    }

    function WM(MM, rM) {
      const iM = RM(MM, rM);
      iM && (bM(MM).delete(iM), EM())
    }

    function sM(MM) {
      gM(MM), "welcome" === MM && CM("welcome").forEach((MM => {
        const rM = zM[MM];
        rM && GM(rM)
      })), EM()
    }

    function DM(MM) {
      dM = {
        name: MM,
        stepsDone: new Set
      }, EM()
    }

    function kM() {
      (dM || 0 !== hM.size || 0 !== JM.size) && (dM = null, hM.clear(), JM.clear(), EM())
    }

    function ZM(MM, rM) {
      const iM = rM ? MM : HM === MM ? null : HM;
      iM !== HM && (HM = iM, EM())
    }

    function oM(MM, rM) {
      yM.has(MM) === rM && (rM ? yM.delete(MM) : yM.add(MM), EM())
    }

    function fM(MM) {
      return lM.add(MM), () => {
        lM.delete(MM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);