export const id = 224;
export const ids = [224];
export const modules = {
  36946: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => EB,
      f: () => SB,
      h: () => MB,
      l: () => JB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(62),
      IB = zB(83),
      NB = zB(1391),
      uB = zB(1478),
      UB = zB(1388),
      aB = zB(1306),
      pB = zB(1240),
      rB = zB(36955),
      sB = zB(1148);

    function JB(BB) {
      const [jB, zB] = (0, dB.useState)((() => (0, rB.l)(BB)));
      return (0, dB.useEffect)((() => (zB((0, rB.l)(BB)), (0, rB.G)((() => {
        zB((0, rB.l)(BB))
      })))), [BB]), jB
    }

    function mB(BB, jB) {
      "function" === typeof BB ? BB(jB) : BB && (BB.current = jB)
    }

    function yB(BB) {
      let {
        tutorial: jB,
        step: zB,
        enabled: QB = !0
      } = BB;
      const nB = JB(jB);
      return QB && nB === zB
    }

    function kB(BB, jB) {
      const zB = (0, rB.m)(BB),
        QB = zB.indexOf(jB);
      return !zB.slice(QB + 1).some((jB => (0, rB.x)(BB, jB)))
    }

    function GB(BB, jB, zB, QB) {
      let {
        tutorial: nB,
        step: dB,
        waitForClick: IB = !1,
        onPrevious: NB
      } = BB;
      const uB = jB && (0, rB.u)(nB, dB),
        UB = jB && !kB(nB, dB),
        pB = IB ? QB : zB;
      let sB = null;
      uB ? sB = () => {
        null === NB || void 0 === NB || NB(), (0, rB.q)(nB, dB)
      } : UB && (sB = () => {
        (0, rB.j)(nB)
      }), (0, aB.v)("popup", null !== pB && void 0 !== pB ? pB : zB, sB, jB && null !== pB, null, uB ? void 0 : "controller:menusSkipTutorial")
    }

    function LB(BB) {
      let {
        tutorial: jB,
        step: zB,
        text: QB,
        waitForClick: nB = !1,
        onPrevious: dB
      } = BB;
      const {
        t: IB
      } = (0, pB.D)(), NB = kB(jB, zB);
      return (0, sB.jsxs)(sB.Fragment, {
        children: [(0, sB.jsx)("div", {
          className: "TutorialStepText",
          children: QB
        }), (0, sB.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, rB.u)(jB, zB) && (0, sB.jsx)(uB.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === dB || void 0 === dB || dB(), (0, rB.q)(jB, zB)
            },
            children: IB("tutorial:back")
          }), !nB && (0, sB.jsx)(uB.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, rB.e)(zB)
            },
            padDefaultFocus: !0,
            children: IB(NB ? "tutorial:done" : "tutorial:next")
          }), !NB && (0, sB.jsx)(uB.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, rB.j)(jB)
            },
            children: IB("tutorial:skip")
          })]
        })]
      })
    }
    const gB = 6;

    function tB(BB) {
      let {
        rect: jB,
        margin: zB
      } = BB;
      const QB = Math.max(0, jB.top - zB),
        nB = jB.bottom + zB,
        dB = Math.max(0, jB.left - zB),
        IB = jB.right + zB;
      return (0, sB.jsxs)(sB.Fragment, {
        children: [(0, sB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: QB
          }
        }), (0, sB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: nB,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, sB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: QB,
            left: 0,
            width: dB,
            height: nB - QB
          }
        }), (0, sB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: QB,
            left: IB,
            right: 0,
            height: nB - QB
          }
        })]
      })
    }

    function SB(BB) {
      let {
        target: jB,
        placement: zB,
        boxRef: QB,
        className: uB,
        spotlight: aB = !0,
        spotlightMargin: pB = gB,
        children: rB
      } = BB;
      const {
        getArrowProps: JB,
        getTooltipProps: mB,
        setTooltipRef: yB,
        setTriggerRef: kB,
        update: GB
      } = (0, NB.e)({
        placement: zB,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, pB]
      });
      (0, dB.useLayoutEffect)((() => {
        kB(jB)
      }), [jB, kB]);
      const LB = function(BB, jB) {
        const [zB, QB] = (0, dB.useState)(null);
        return (0, dB.useEffect)((() => {
          if (!jB || !BB) return void QB(null);
          let zB = 0,
            nB = null;
          const dB = () => {
            const jB = BB.getBoundingClientRect();
            nB && jB.left === nB.left && jB.top === nB.top && jB.width === nB.width && jB.height === nB.height || (nB = jB, QB(jB)), zB = requestAnimationFrame(dB)
          };
          return dB(), () => {
            cancelAnimationFrame(zB)
          }
        }), [BB, jB]), zB
      }(jB, aB);
      (0, dB.useEffect)((() => {
        null === GB || void 0 === GB || GB()
      }), [LB, GB]), (0, dB.useEffect)((() => {
        if (aB || !jB || !GB) return;
        const BB = new ResizeObserver((() => {
          GB()
        }));
        return BB.observe(jB), jB.parentElement && BB.observe(jB.parentElement), () => {
          BB.disconnect()
        }
      }), [jB, aB, GB]), (0, dB.useEffect)((() => {
        aB && (null === jB || void 0 === jB || jB.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [jB, aB]);
      const SB = (0, dB.useCallback)((BB => {
        yB(BB), QB && (QB.current = BB)
      }), [yB, QB]);
      return (0, IB.createPortal)((0, sB.jsxs)(sB.Fragment, {
        children: [LB && (0, sB.jsx)(tB, {
          rect: LB,
          margin: pB
        }), (0, sB.jsxs)("div", {
          ref: SB,
          ...mB({
            className: nB()("tooltip-container SmallTextLight TutorialStep", uB)
          }),
          children: [rB, (0, sB.jsx)("div", {
            ...JB({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, UB.i)())
    }
    const MB = (0, dB.forwardRef)((function(BB, jB) {
      let {
        placement: zB = "right",
        children: QB,
        ...nB
      } = BB;
      const IB = yB(nB),
        NB = (0, dB.useRef)(null),
        uB = (0, dB.useRef)(null);
      GB(nB, IB, NB, uB);
      const [UB, aB] = (0, dB.useState)(null), pB = QB.ref, rB = (0, dB.useCallback)((BB => {
        uB.current = BB, aB(BB), mB(jB, BB), mB(pB, BB)
      }), [jB, pB]);
      return (0, sB.jsxs)(sB.Fragment, {
        children: [(0, dB.cloneElement)(QB, {
          ref: rB
        }), IB && (0, sB.jsx)(SB, {
          target: UB,
          placement: zB,
          boxRef: NB,
          children: (0, sB.jsx)(LB, {
            ...nB
          })
        })]
      })
    }));

    function EB(BB) {
      const jB = yB(BB),
        zB = (0, dB.useRef)(null);
      return GB(BB, jB, zB, null), jB ? (0, IB.createPortal)((0, sB.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, sB.jsx)("div", {
          ref: zB,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, sB.jsx)(LB, {
            ...BB
          })
        })
      }), (0, UB.i)()) : null
    }
  },
  36687: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => GB,
      e: () => dB,
      f: () => mB,
      i: () => yB,
      l: () => NB,
      m: () => rB,
      n: () => kB,
      r: () => pB,
      t: () => LB,
      w: () => JB
    });
    var QB = zB(28),
      nB = zB(31);
    const dB = "clientGameInventoryButtonsChanged",
      IB = new Map;

    function NB() {
      return [...IB.values()].sort(((BB, jB) => {
        var zB, QB;
        return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
      }))
    }
    let uB = null;

    function UB(BB) {
      uB = BB
    }
    let aB = !1;

    function pB(BB) {
      aB = !0;
      try {
        BB.onClick()
      } finally {
        aB = !1
      }
      BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
    }

    function rB() {
      return aB
    }

    function sB() {
      return NB().filter((BB => BB.panel && !BB.disabled))
    }

    function JB(BB) {
      const jB = sB(),
        zB = jB.findIndex((BB => BB.id === uB));
      return !(zB < 0 || jB.length < 2) && (pB(jB[(zB + BB + jB.length) % jB.length]), !0)
    }

    function mB() {
      return null !== uB && sB().length > 1
    }

    function yB() {
      UB(null)
    }

    function kB() {
      "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
    }

    function GB() {
      const BB = uB;
      return UB(null), BB
    }

    function LB(BB) {
      return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
        IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
      }
    }
  },
  36682: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      d: () => yB,
      f: () => kB,
      j: () => rB,
      n: () => UB,
      o: () => mB,
      r: () => sB,
      t: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(36687);
    const NB = "clientGameUiChanged";
    let uB = null;

    function UB() {
      return uB
    }

    function aB(BB, jB) {
      const zB = {
        content: BB,
        menu: jB
      };
      return uB = zB, nB.n.Ly(NB, uB, !0), () => {
        uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
      }
    }
    let pB = null;

    function rB() {
      return pB
    }

    function sB(BB) {
      return pB = BB, () => {
        pB === BB && (pB = null)
      }
    }
    let JB = !1;

    function mB() {
      const BB = QB.c.get("openInGameMenuName");
      "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yB() {
      GB(!1)
    }

    function kB() {
      GB(JB)
    }

    function GB(BB) {
      "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, IB.i)(), JB = !1
    }
  },
  36955: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => XB,
      C: () => ZB,
      D: () => VB,
      G: () => AB,
      b: () => uB,
      e: () => oB,
      f: () => NB,
      j: () => YB,
      l: () => qB,
      m: () => SB,
      q: () => FB,
      u: () => DB,
      x: () => iB,
      y: () => hB
    });
    var QB = zB(41);
    const nB = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      dB = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      IB = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      NB = dB.filter((BB => "docsButton" !== BB)),
      uB = IB.filter((BB => "aiHelperButton" !== BB)),
      UB = "codeEditorTutorials",
      aB = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      pB = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let rB = null,
      sB = null;
    const JB = new Set,
      mB = new Set;
    let yB = null;
    const kB = new Set,
      GB = new Set;

    function LB() {
      GB.forEach((BB => {
        BB()
      }))
    }

    function gB() {
      if (!rB) {
        const BB = QB.j.getItem(UB);
        rB = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof BB && null !== BB ? BB : {}
        }
      }
      return rB
    }

    function tB(BB) {
      const jB = gB();
      jB[BB] || (rB = {
        ...jB,
        [BB]: !0
      }, QB.j.setItem(UB, rB))
    }

    function SB(BB) {
      return "docsOverview" === BB ? dB : "aiHelperOverview" === BB ? IB : sB ? nB[sB] : []
    }

    function MB(BB) {
      return ("worldCodeButton" !== BB || !gB().worldCodeIntroShown) && !kB.has(BB)
    }

    function EB(BB) {
      var jB;
      return (null === (jB = yB) || void 0 === jB ? void 0 : jB.name) === BB ? yB.stepsDone : JB
    }

    function iB(BB, jB) {
      if (! function(BB) {
          return yB ? yB.name === BB : "welcome" === BB
        }(BB) || !MB(jB) || EB(BB).has(jB)) return !1;
      if (yB) return !0;
      const zB = aB[jB];
      return zB ? !gB()[zB] || mB.has(jB) : !gB()[pB[BB]]
    }

    function qB(BB) {
      var jB;
      return null !== (jB = SB(BB).find((jB => iB(BB, jB)))) && void 0 !== jB ? jB : null
    }

    function fB(BB) {
      var jB;
      tB(pB[BB]), (null === (jB = yB) || void 0 === jB ? void 0 : jB.name) === BB && (yB = null)
    }

    function oB(BB) {
      const jB = (yB ? [yB.name] : ["welcome", "docsOverview"]).find((jB => qB(jB) === BB));
      if (!jB) return;
      EB(jB).add(BB);
      const zB = aB[BB];
      zB && (tB(zB), yB || mB.add(BB)), null === qB(jB) && fB(jB), LB()
    }

    function HB(BB, jB) {
      const zB = SB(BB),
        QB = EB(BB);
      for (let nB = zB.indexOf(jB) - 1; nB >= 0; nB--)
        if (QB.has(zB[nB]) && MB(zB[nB])) return zB[nB];
      return null
    }

    function DB(BB, jB) {
      return null !== HB(BB, jB)
    }

    function FB(BB, jB) {
      const zB = HB(BB, jB);
      zB && (EB(BB).delete(zB), LB())
    }

    function YB(BB) {
      fB(BB), "welcome" === BB && SB("welcome").forEach((BB => {
        const jB = aB[BB];
        jB && tB(jB)
      })), LB()
    }

    function VB(BB) {
      yB = {
        name: BB,
        stepsDone: new Set
      }, LB()
    }

    function hB() {
      (yB || 0 !== JB.size || 0 !== mB.size) && (yB = null, JB.clear(), mB.clear(), LB())
    }

    function XB(BB, jB) {
      const zB = jB ? BB : sB === BB ? null : sB;
      zB !== sB && (sB = zB, LB())
    }

    function ZB(BB, jB) {
      kB.has(BB) === jB && (jB ? kB.delete(BB) : kB.add(BB), LB())
    }

    function AB(BB) {
      return GB.add(BB), () => {
        GB.delete(BB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);