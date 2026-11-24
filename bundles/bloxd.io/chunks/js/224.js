export const id = 224;
export const ids = [224];
export const modules = {
  36909: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => wB,
      e: () => QB,
      f: () => sB,
      h: () => NB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(63),
      GB = ZB(82),
      vB = ZB(1429),
      kB = ZB(1516),
      cB = ZB(1421),
      nB = ZB(1343),
      hB = ZB(1248),
      zB = ZB(36916),
      FB = ZB(1153);

    function NB(BB) {
      const [IB, ZB] = (0, oB.useState)((() => (0, zB.j)(BB)));
      return (0, oB.useEffect)((() => (ZB((0, zB.j)(BB)), (0, zB.I)((() => {
        ZB((0, zB.j)(BB))
      })))), [BB]), IB
    }

    function gB(BB, IB) {
      "function" === typeof BB ? BB(IB) : BB && (BB.current = IB)
    }

    function qB(BB) {
      let {
        tutorial: IB,
        step: ZB,
        enabled: TB = !0
      } = BB;
      const JB = NB(IB);
      return TB && JB === ZB
    }

    function yB(BB, IB) {
      const ZB = (0, zB.k)(BB),
        TB = ZB.indexOf(IB);
      return !ZB.slice(TB + 1).some((IB => (0, zB.r)(BB, IB)))
    }

    function UB(BB, IB, ZB, TB) {
      let {
        tutorial: JB,
        step: oB,
        waitForClick: GB = !1,
        onPrevious: vB
      } = BB;
      const kB = IB && (0, zB.o)(JB, oB),
        cB = IB && !yB(JB, oB),
        hB = GB ? TB : ZB;
      let FB = null;
      kB ? FB = () => {
        null === vB || void 0 === vB || vB(), (0, zB.n)(JB, oB)
      } : cB && (FB = () => {
        (0, zB.h)(JB)
      }), (0, nB.t)("popup", null !== hB && void 0 !== hB ? hB : ZB, FB, IB && null !== hB, null, kB ? void 0 : "controller:menusSkipTutorial")
    }

    function WB(BB) {
      let {
        tutorial: IB,
        step: ZB,
        text: TB,
        waitForClick: JB = !1,
        onPrevious: oB
      } = BB;
      const {
        t: GB
      } = (0, hB.G)(), vB = yB(IB, ZB);
      return (0, FB.jsxs)(FB.Fragment, {
        children: [(0, FB.jsx)("div", {
          className: "TutorialStepText",
          children: TB
        }), (0, FB.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, zB.o)(IB, ZB) && (0, FB.jsx)(kB.k, {
            className: "TutorialStepButton",
            onClick: () => {
              null === oB || void 0 === oB || oB(), (0, zB.n)(IB, ZB)
            },
            children: GB("tutorial:back")
          }), !JB && (0, FB.jsx)(kB.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, zB.f)(ZB)
            },
            padDefaultFocus: !0,
            children: GB(vB ? "tutorial:done" : "tutorial:next")
          }), !vB && (0, FB.jsx)(kB.k, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, zB.h)(IB)
            },
            children: GB("tutorial:skip")
          })]
        })]
      })
    }
    const dB = 6;

    function CB(BB) {
      let {
        rect: IB,
        margin: ZB
      } = BB;
      const TB = Math.max(0, IB.top - ZB),
        JB = IB.bottom + ZB,
        oB = Math.max(0, IB.left - ZB),
        GB = IB.right + ZB;
      return (0, FB.jsxs)(FB.Fragment, {
        children: [(0, FB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: TB
          }
        }), (0, FB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: JB,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, FB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: TB,
            left: 0,
            width: oB,
            height: JB - TB
          }
        }), (0, FB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: TB,
            left: GB,
            right: 0,
            height: JB - TB
          }
        })]
      })
    }

    function QB(BB) {
      let {
        target: IB,
        placement: ZB,
        boxRef: TB,
        className: kB,
        spotlight: nB = !0,
        spotlightMargin: hB = dB,
        children: zB
      } = BB;
      const {
        getArrowProps: NB,
        getTooltipProps: gB,
        setTooltipRef: qB,
        setTriggerRef: yB,
        update: UB
      } = (0, vB.b)({
        placement: ZB,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, hB]
      });
      (0, oB.useLayoutEffect)((() => {
        yB(IB)
      }), [IB, yB]);
      const WB = function(BB, IB) {
        const [ZB, TB] = (0, oB.useState)(null);
        return (0, oB.useEffect)((() => {
          if (!IB || !BB) return void TB(null);
          let ZB = 0,
            JB = null;
          const oB = () => {
            const IB = BB.getBoundingClientRect();
            JB && IB.left === JB.left && IB.top === JB.top && IB.width === JB.width && IB.height === JB.height || (JB = IB, TB(IB)), ZB = requestAnimationFrame(oB)
          };
          return oB(), () => {
            cancelAnimationFrame(ZB)
          }
        }), [BB, IB]), ZB
      }(IB, nB);
      (0, oB.useEffect)((() => {
        null === UB || void 0 === UB || UB()
      }), [WB, UB]), (0, oB.useEffect)((() => {
        if (nB || !IB || !UB) return;
        const BB = new ResizeObserver((() => {
          UB()
        }));
        return BB.observe(IB), IB.parentElement && BB.observe(IB.parentElement), () => {
          BB.disconnect()
        }
      }), [IB, nB, UB]), (0, oB.useEffect)((() => {
        nB && (null === IB || void 0 === IB || IB.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [IB, nB]);
      const QB = (0, oB.useCallback)((BB => {
        qB(BB), TB && (TB.current = BB)
      }), [qB, TB]);
      return (0, GB.createPortal)((0, FB.jsxs)(FB.Fragment, {
        children: [WB && (0, FB.jsx)(CB, {
          rect: WB,
          margin: hB
        }), (0, FB.jsxs)("div", {
          ref: QB,
          ...gB({
            className: JB()("tooltip-container SmallTextLight TutorialStep", kB)
          }),
          children: [zB, (0, FB.jsx)("div", {
            ...NB({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, cB.i)())
    }
    const sB = (0, oB.forwardRef)((function(BB, IB) {
      let {
        placement: ZB = "right",
        children: TB,
        ...JB
      } = BB;
      const GB = qB(JB),
        vB = (0, oB.useRef)(null),
        kB = (0, oB.useRef)(null);
      UB(JB, GB, vB, kB);
      const [cB, nB] = (0, oB.useState)(null), hB = TB.ref, zB = (0, oB.useCallback)((BB => {
        kB.current = BB, nB(BB), gB(IB, BB), gB(hB, BB)
      }), [IB, hB]);
      return (0, FB.jsxs)(FB.Fragment, {
        children: [(0, oB.cloneElement)(TB, {
          ref: zB
        }), GB && (0, FB.jsx)(QB, {
          target: cB,
          placement: ZB,
          boxRef: vB,
          children: (0, FB.jsx)(WB, {
            ...JB
          })
        })]
      })
    }));

    function wB(BB) {
      const IB = qB(BB),
        ZB = (0, oB.useRef)(null);
      return UB(BB, IB, ZB, null), IB ? (0, GB.createPortal)((0, FB.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, FB.jsx)("div", {
          ref: ZB,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, FB.jsx)(WB, {
            ...BB
          })
        })
      }), (0, cB.i)()) : null
    }
  },
  36625: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => gB,
      g: () => qB,
      h: () => vB,
      l: () => zB,
      p: () => yB,
      q: () => hB,
      s: () => WB,
      t: () => NB,
      w: () => UB
    });
    var TB = ZB(20),
      JB = ZB(24);
    const oB = "clientGameInventoryButtonsChanged",
      GB = new Map;

    function vB() {
      return [...GB.values()].sort(((BB, IB) => {
        var ZB, TB;
        return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
      }))
    }
    let kB = null;

    function cB(BB) {
      kB = BB
    }
    let nB = !1;

    function hB(BB) {
      nB = !0;
      try {
        BB.onClick()
      } finally {
        nB = !1
      }
      BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
    }

    function zB() {
      return nB
    }

    function FB() {
      return vB().filter((BB => BB.panel && !BB.disabled))
    }

    function NB(BB) {
      const IB = FB(),
        ZB = IB.findIndex((BB => BB.id === kB));
      return !(ZB < 0 || IB.length < 2) && (hB(IB[(ZB + BB + IB.length) % IB.length]), !0)
    }

    function gB() {
      return null !== kB && FB().length > 1
    }

    function qB() {
      cB(null)
    }

    function yB() {
      "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
    }

    function UB() {
      const BB = kB;
      return cB(null), BB
    }

    function WB(BB) {
      return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
        GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
      }
    }
  },
  36619: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => qB,
      i: () => yB,
      m: () => zB,
      q: () => cB,
      t: () => gB,
      v: () => FB,
      x: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(36625);
    const vB = "clientGameUiChanged";
    let kB = null;

    function cB() {
      return kB
    }

    function nB(BB, IB) {
      const ZB = {
        content: BB,
        menu: IB
      };
      return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
        kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
      }
    }
    let hB = null;

    function zB() {
      return hB
    }

    function FB(BB) {
      return hB = BB, () => {
        hB === BB && (hB = null)
      }
    }
    let NB = !1;

    function gB() {
      const BB = TB.d.get("openInGameMenuName");
      "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qB() {
      UB(!1)
    }

    function yB() {
      UB(NB)
    }

    function UB(BB) {
      "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, GB.g)(), NB = !1
    }
  },
  36916: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => mB,
      E: () => PB,
      I: () => XB,
      e: () => kB,
      f: () => pB,
      g: () => vB,
      h: () => jB,
      j: () => YB,
      k: () => QB,
      n: () => MB,
      o: () => HB,
      r: () => OB,
      v: () => RB,
      z: () => rB
    });
    var TB = ZB(36);
    const JB = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      oB = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      GB = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      vB = oB.filter((BB => "docsButton" !== BB)),
      kB = GB.filter((BB => "aiHelperButton" !== BB)),
      cB = "codeEditorTutorials",
      nB = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      hB = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let zB = null,
      FB = null;
    const NB = new Set,
      gB = new Set;
    let qB = null;
    const yB = new Set,
      UB = new Set;

    function WB() {
      UB.forEach((BB => {
        BB()
      }))
    }

    function dB() {
      if (!zB) {
        const BB = TB.m.getItem(cB);
        zB = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof BB && null !== BB ? BB : {}
        }
      }
      return zB
    }

    function CB(BB) {
      const IB = dB();
      IB[BB] || (zB = {
        ...IB,
        [BB]: !0
      }, TB.m.setItem(cB, zB))
    }

    function QB(BB) {
      return "docsOverview" === BB ? oB : "aiHelperOverview" === BB ? GB : FB ? JB[FB] : []
    }

    function sB(BB) {
      return ("worldCodeButton" !== BB || !dB().worldCodeIntroShown) && !yB.has(BB)
    }

    function wB(BB) {
      var IB;
      return (null === (IB = qB) || void 0 === IB ? void 0 : IB.name) === BB ? qB.stepsDone : NB
    }

    function OB(BB, IB) {
      if (! function(BB) {
          return qB ? qB.name === BB : "welcome" === BB
        }(BB) || !sB(IB) || wB(BB).has(IB)) return !1;
      if (qB) return !0;
      const ZB = nB[IB];
      return ZB ? !dB()[ZB] || gB.has(IB) : !dB()[hB[BB]]
    }

    function YB(BB) {
      var IB;
      return null !== (IB = QB(BB).find((IB => OB(BB, IB)))) && void 0 !== IB ? IB : null
    }

    function iB(BB) {
      var IB;
      CB(hB[BB]), (null === (IB = qB) || void 0 === IB ? void 0 : IB.name) === BB && (qB = null)
    }

    function pB(BB) {
      const IB = (qB ? [qB.name] : ["welcome", "docsOverview"]).find((IB => YB(IB) === BB));
      if (!IB) return;
      wB(IB).add(BB);
      const ZB = nB[BB];
      ZB && (CB(ZB), qB || gB.add(BB)), null === YB(IB) && iB(IB), WB()
    }

    function aB(BB, IB) {
      const ZB = QB(BB),
        TB = wB(BB);
      for (let JB = ZB.indexOf(IB) - 1; JB >= 0; JB--)
        if (TB.has(ZB[JB]) && sB(ZB[JB])) return ZB[JB];
      return null
    }

    function HB(BB, IB) {
      return null !== aB(BB, IB)
    }

    function MB(BB, IB) {
      const ZB = aB(BB, IB);
      ZB && (wB(BB).delete(ZB), WB())
    }

    function jB(BB) {
      iB(BB), "welcome" === BB && QB("welcome").forEach((BB => {
        const IB = nB[BB];
        IB && CB(IB)
      })), WB()
    }

    function PB(BB) {
      qB = {
        name: BB,
        stepsDone: new Set
      }, WB()
    }

    function RB() {
      (qB || 0 !== NB.size || 0 !== gB.size) && (qB = null, NB.clear(), gB.clear(), WB())
    }

    function rB(BB, IB) {
      const ZB = IB ? BB : FB === BB ? null : FB;
      ZB !== FB && (FB = ZB, WB())
    }

    function mB(BB, IB) {
      yB.has(BB) === IB && (IB ? yB.delete(BB) : yB.add(BB), WB())
    }

    function XB(BB) {
      return UB.add(BB), () => {
        UB.delete(BB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);