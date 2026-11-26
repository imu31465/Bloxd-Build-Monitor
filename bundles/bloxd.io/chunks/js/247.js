export const id = 247;
export const ids = [247];
export const modules = {
  37572: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => UB,
      f: () => SB,
      j: () => nB,
      m: () => pB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(56),
      oB = GB(70),
      jB = GB(1408),
      yB = GB(1485),
      JB = GB(1405),
      MB = GB(1268),
      PB = GB(1175),
      zB = GB(37576),
      lB = GB(1282);

    function pB(BB) {
      const [OB, GB] = (0, QB.useState)((() => (0, zB.n)(BB)));
      return (0, QB.useEffect)((() => (GB((0, zB.n)(BB)), (0, zB.K)((() => {
        GB((0, zB.n)(BB))
      })))), [BB]), OB
    }

    function qB(BB, OB) {
      "function" === typeof BB ? BB(OB) : BB && (BB.current = OB)
    }

    function ZB(BB) {
      let {
        tutorial: OB,
        step: GB,
        enabled: YB = !0
      } = BB;
      const DB = pB(OB);
      return YB && DB === GB
    }

    function NB(BB, OB) {
      const GB = (0, zB.o)(BB),
        YB = GB.indexOf(OB);
      return !GB.slice(YB + 1).some((OB => (0, zB.y)(BB, OB)))
    }

    function RB(BB, OB, GB, YB) {
      let {
        tutorial: DB,
        step: QB,
        waitForClick: oB = !1,
        onPrevious: jB
      } = BB;
      const yB = OB && (0, zB.v)(DB, QB),
        JB = OB && !NB(DB, QB),
        PB = oB ? YB : GB;
      let lB = null;
      yB ? lB = () => {
        null === jB || void 0 === jB || jB(), (0, zB.s)(DB, QB)
      } : JB && (lB = () => {
        (0, zB.m)(DB)
      }), (0, MB.v)("popup", null !== PB && void 0 !== PB ? PB : GB, lB, OB && null !== PB, null, yB ? void 0 : "controller:menusSkipTutorial")
    }

    function WB(BB) {
      let {
        tutorial: OB,
        step: GB,
        text: YB,
        waitForClick: DB = !1,
        onPrevious: QB
      } = BB;
      const {
        t: oB
      } = (0, PB.H)(), jB = NB(OB, GB);
      return (0, lB.jsxs)(lB.Fragment, {
        children: [(0, lB.jsx)("div", {
          className: "TutorialStepText",
          children: YB
        }), (0, lB.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, zB.v)(OB, GB) && (0, lB.jsx)(yB.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === QB || void 0 === QB || QB(), (0, zB.s)(OB, GB)
            },
            children: oB("tutorial:back")
          }), !DB && (0, lB.jsx)(yB.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, zB.h)(GB)
            },
            padDefaultFocus: !0,
            children: oB(jB ? "tutorial:done" : "tutorial:next")
          }), !jB && (0, lB.jsx)(yB.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, zB.m)(OB)
            },
            children: oB("tutorial:skip")
          })]
        })]
      })
    }
    const AB = 6;

    function VB(BB) {
      let {
        rect: OB,
        margin: GB
      } = BB;
      const YB = Math.max(0, OB.top - GB),
        DB = OB.bottom + GB,
        QB = Math.max(0, OB.left - GB),
        oB = OB.right + GB;
      return (0, lB.jsxs)(lB.Fragment, {
        children: [(0, lB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: YB
          }
        }), (0, lB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: DB,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, lB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: YB,
            left: 0,
            width: QB,
            height: DB - YB
          }
        }), (0, lB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: YB,
            left: oB,
            right: 0,
            height: DB - YB
          }
        })]
      })
    }

    function SB(BB) {
      let {
        target: OB,
        placement: GB,
        boxRef: YB,
        className: yB,
        spotlight: MB = !0,
        spotlightMargin: PB = AB,
        children: zB
      } = BB;
      const {
        getArrowProps: pB,
        getTooltipProps: qB,
        setTooltipRef: ZB,
        setTriggerRef: NB,
        update: RB
      } = (0, jB.d)({
        placement: GB,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, PB]
      });
      (0, QB.useLayoutEffect)((() => {
        NB(OB)
      }), [OB, NB]);
      const WB = function(BB, OB) {
        const [GB, YB] = (0, QB.useState)(null);
        return (0, QB.useEffect)((() => {
          if (!OB || !BB) return void YB(null);
          let GB = 0,
            DB = null;
          const QB = () => {
            const OB = BB.getBoundingClientRect();
            DB && OB.left === DB.left && OB.top === DB.top && OB.width === DB.width && OB.height === DB.height || (DB = OB, YB(OB)), GB = requestAnimationFrame(QB)
          };
          return QB(), () => {
            cancelAnimationFrame(GB)
          }
        }), [BB, OB]), GB
      }(OB, MB);
      (0, QB.useEffect)((() => {
        null === RB || void 0 === RB || RB()
      }), [WB, RB]), (0, QB.useEffect)((() => {
        if (MB || !OB || !RB) return;
        const BB = new ResizeObserver((() => {
          RB()
        }));
        return BB.observe(OB), OB.parentElement && BB.observe(OB.parentElement), () => {
          BB.disconnect()
        }
      }), [OB, MB, RB]), (0, QB.useEffect)((() => {
        MB && (null === OB || void 0 === OB || OB.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [OB, MB]);
      const SB = (0, QB.useCallback)((BB => {
        ZB(BB), YB && (YB.current = BB)
      }), [ZB, YB]);
      return (0, oB.createPortal)((0, lB.jsxs)(lB.Fragment, {
        children: [WB && (0, lB.jsx)(VB, {
          rect: WB,
          margin: PB
        }), (0, lB.jsxs)("div", {
          ref: SB,
          ...qB({
            className: DB()("tooltip-container SmallTextLight TutorialStep", yB)
          }),
          children: [zB, (0, lB.jsx)("div", {
            ...pB({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, JB.i)())
    }
    const nB = (0, QB.forwardRef)((function(BB, OB) {
      let {
        placement: GB = "right",
        children: YB,
        ...DB
      } = BB;
      const oB = ZB(DB),
        jB = (0, QB.useRef)(null),
        yB = (0, QB.useRef)(null);
      RB(DB, oB, jB, yB);
      const [JB, MB] = (0, QB.useState)(null), PB = YB.ref, zB = (0, QB.useCallback)((BB => {
        yB.current = BB, MB(BB), qB(OB, BB), qB(PB, BB)
      }), [OB, PB]);
      return (0, lB.jsxs)(lB.Fragment, {
        children: [(0, QB.cloneElement)(YB, {
          ref: zB
        }), oB && (0, lB.jsx)(SB, {
          target: JB,
          placement: GB,
          boxRef: jB,
          children: (0, lB.jsx)(WB, {
            ...DB
          })
        })]
      })
    }));

    function UB(BB) {
      const OB = ZB(BB),
        GB = (0, QB.useRef)(null);
      return RB(BB, OB, GB, null), OB ? (0, oB.createPortal)((0, lB.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, lB.jsx)("div", {
          ref: GB,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, lB.jsx)(WB, {
            ...BB
          })
        })
      }), (0, JB.i)()) : null
    }
  },
  37270: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => pB,
      G: () => RB,
      e: () => QB,
      i: () => qB,
      l: () => ZB,
      m: () => jB,
      q: () => zB,
      u: () => NB,
      y: () => PB,
      z: () => WB
    });
    var YB = GB(16),
      DB = GB(25);
    const QB = "clientGameInventoryButtonsChanged",
      oB = new Map;

    function jB() {
      return [...oB.values()].sort(((BB, OB) => {
        var GB, YB;
        return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
      }))
    }
    let yB = null;

    function JB(BB) {
      yB = BB
    }
    let MB = !1;

    function PB(BB) {
      MB = !0;
      try {
        BB.onClick()
      } finally {
        MB = !1
      }
      BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
    }

    function zB() {
      return MB
    }

    function lB() {
      return jB().filter((BB => BB.panel && !BB.disabled))
    }

    function pB(BB) {
      const OB = lB(),
        GB = OB.findIndex((BB => BB.id === yB));
      return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
    }

    function qB() {
      return null !== yB && lB().length > 1
    }

    function ZB() {
      JB(null)
    }

    function NB() {
      "inventory" !== YB.c.get("openInGameMenuName") && JB(null)
    }

    function RB() {
      const BB = yB;
      return JB(null), BB
    }

    function WB(BB) {
      return oB.set(BB.id, BB), DB.o.tM(QB, jB(), !0), () => {
        oB.get(BB.id) === BB && (oB.delete(BB.id), DB.o.tM(QB, jB()))
      }
    }
  },
  37267: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      f: () => RB,
      g: () => ZB,
      i: () => NB,
      m: () => zB,
      n: () => JB,
      o: () => qB,
      r: () => lB,
      s: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(37270);
    const jB = "clientGameUiChanged";
    let yB = null;

    function JB() {
      return yB
    }

    function MB(BB, OB) {
      const GB = {
        content: BB,
        menu: OB
      };
      return yB = GB, DB.o.tM(jB, yB, !0), () => {
        yB === GB && (yB = null, pB = !1, ZB(), DB.o.tM(jB, null))
      }
    }
    let PB = null;

    function zB() {
      return PB
    }

    function lB(BB) {
      return PB = BB, () => {
        PB === BB && (PB = null)
      }
    }
    let pB = !1;

    function qB() {
      const BB = YB.c.get("openInGameMenuName");
      "clientGame" !== BB && (pB = "inventory" === BB), (0, oB.q)() || (0, oB.l)(), (0, QB.p)(QB.b), YB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ZB() {
      WB(!1)
    }

    function NB() {
      WB(pB)
    }

    function RB() {
      pB && WB(!1)
    }

    function WB(BB) {
      "clientGame" === YB.c.get("openInGameMenuName") && YB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, oB.l)(), pB = !1
    }
  },
  37576: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => gB,
      D: () => rB,
      G: () => iB,
      K: () => XB,
      d: () => yB,
      h: () => KB,
      j: () => jB,
      m: () => FB,
      n: () => kB,
      o: () => SB,
      s: () => IB,
      v: () => mB,
      y: () => fB,
      z: () => LB
    });
    var YB = GB(31);
    const DB = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      QB = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      oB = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      jB = QB.filter((BB => "docsButton" !== BB)),
      yB = oB.filter((BB => "aiHelperButton" !== BB)),
      JB = "codeEditorTutorials",
      MB = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      PB = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let zB = null,
      lB = null;
    const pB = new Set,
      qB = new Set;
    let ZB = null;
    const NB = new Set,
      RB = new Set;

    function WB() {
      RB.forEach((BB => {
        BB()
      }))
    }

    function AB() {
      if (!zB) {
        const BB = YB.g.getItem(JB);
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

    function VB(BB) {
      const OB = AB();
      OB[BB] || (zB = {
        ...OB,
        [BB]: !0
      }, YB.g.setItem(JB, zB))
    }

    function SB(BB) {
      return "docsOverview" === BB ? QB : "aiHelperOverview" === BB ? oB : lB ? DB[lB] : []
    }

    function nB(BB) {
      return ("worldCodeButton" !== BB || !AB().worldCodeIntroShown) && !NB.has(BB)
    }

    function UB(BB) {
      var OB;
      return (null === (OB = ZB) || void 0 === OB ? void 0 : OB.name) === BB ? ZB.stepsDone : pB
    }

    function fB(BB, OB) {
      if (! function(BB) {
          return ZB ? ZB.name === BB : "welcome" === BB
        }(BB) || !nB(OB) || UB(BB).has(OB)) return !1;
      if (ZB) return !0;
      const GB = MB[OB];
      return GB ? !AB()[GB] || qB.has(OB) : !AB()[PB[BB]]
    }

    function kB(BB) {
      var OB;
      return null !== (OB = SB(BB).find((OB => fB(BB, OB)))) && void 0 !== OB ? OB : null
    }

    function dB(BB) {
      var OB;
      VB(PB[BB]), (null === (OB = ZB) || void 0 === OB ? void 0 : OB.name) === BB && (ZB = null)
    }

    function KB(BB) {
      const OB = (ZB ? [ZB.name] : ["welcome", "docsOverview"]).find((OB => kB(OB) === BB));
      if (!OB) return;
      UB(OB).add(BB);
      const GB = MB[BB];
      GB && (VB(GB), ZB || qB.add(BB)), null === kB(OB) && dB(OB), WB()
    }

    function uB(BB, OB) {
      const GB = SB(BB),
        YB = UB(BB);
      for (let DB = GB.indexOf(OB) - 1; DB >= 0; DB--)
        if (YB.has(GB[DB]) && nB(GB[DB])) return GB[DB];
      return null
    }

    function mB(BB, OB) {
      return null !== uB(BB, OB)
    }

    function IB(BB, OB) {
      const GB = uB(BB, OB);
      GB && (UB(BB).delete(GB), WB())
    }

    function FB(BB) {
      dB(BB), "welcome" === BB && SB("welcome").forEach((BB => {
        const OB = MB[BB];
        OB && VB(OB)
      })), WB()
    }

    function iB(BB) {
      ZB = {
        name: BB,
        stepsDone: new Set
      }, WB()
    }

    function LB() {
      (ZB || 0 !== pB.size || 0 !== qB.size) && (ZB = null, pB.clear(), qB.clear(), WB())
    }

    function gB(BB, OB) {
      const GB = OB ? BB : lB === BB ? null : lB;
      GB !== lB && (lB = GB, WB())
    }

    function rB(BB, OB) {
      NB.has(BB) === OB && (OB ? NB.delete(BB) : NB.add(BB), WB())
    }

    function XB(BB) {
      return RB.add(BB), () => {
        RB.delete(BB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);