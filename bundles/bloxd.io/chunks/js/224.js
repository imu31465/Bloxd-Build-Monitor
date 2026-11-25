export const id = 224;
export const ids = [224];
export const modules = {
  37224: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => iG,
      e: () => XG,
      i: () => uG,
      l: () => KG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(51),
      yG = ZG(59),
      kG = ZG(1329),
      UG = ZG(1393),
      YG = ZG(1320),
      VG = ZG(1239),
      pG = ZG(1151),
      fG = ZG(37231),
      QG = ZG(1067);

    function KG(GG) {
      const [bG, ZG] = (0, LG.useState)((() => (0, fG.o)(GG)));
      return (0, LG.useEffect)((() => (ZG((0, fG.o)(GG)), (0, fG.F)((() => {
        ZG((0, fG.o)(GG))
      })))), [GG]), bG
    }

    function hG(GG, bG) {
      "function" === typeof GG ? GG(bG) : GG && (GG.current = bG)
    }

    function dG(GG) {
      let {
        tutorial: bG,
        step: ZG,
        enabled: wG = !0
      } = GG;
      const SG = KG(bG);
      return wG && SG === ZG
    }

    function JG(GG, bG) {
      const ZG = (0, fG.r)(GG),
        wG = ZG.indexOf(bG);
      return !ZG.slice(wG + 1).some((bG => (0, fG.x)(GG, bG)))
    }

    function rG(GG, bG, ZG, wG) {
      let {
        tutorial: SG,
        step: LG,
        waitForClick: yG = !1,
        onPrevious: kG
      } = GG;
      const UG = bG && (0, fG.w)(SG, LG),
        YG = bG && !JG(SG, LG),
        pG = yG ? wG : ZG;
      let QG = null;
      UG ? QG = () => {
        null === kG || void 0 === kG || kG(), (0, fG.t)(SG, LG)
      } : YG && (QG = () => {
        (0, fG.k)(SG)
      }), (0, VG.w)("popup", null !== pG && void 0 !== pG ? pG : ZG, QG, bG && null !== pG, null, UG ? void 0 : "controller:menusSkipTutorial")
    }

    function zG(GG) {
      let {
        tutorial: bG,
        step: ZG,
        text: wG,
        waitForClick: SG = !1,
        onPrevious: LG
      } = GG;
      const {
        t: yG
      } = (0, pG.w)(), kG = JG(bG, ZG);
      return (0, QG.jsxs)(QG.Fragment, {
        children: [(0, QG.jsx)("div", {
          className: "TutorialStepText",
          children: wG
        }), (0, QG.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, fG.w)(bG, ZG) && (0, QG.jsx)(UG.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === LG || void 0 === LG || LG(), (0, fG.t)(bG, ZG)
            },
            children: yG("tutorial:back")
          }), !SG && (0, QG.jsx)(UG.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, fG.e)(ZG)
            },
            padDefaultFocus: !0,
            children: yG(kG ? "tutorial:done" : "tutorial:next")
          }), !kG && (0, QG.jsx)(UG.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, fG.k)(bG)
            },
            children: yG("tutorial:skip")
          })]
        })]
      })
    }
    const EG = 6;

    function oG(GG) {
      let {
        rect: bG,
        margin: ZG
      } = GG;
      const wG = Math.max(0, bG.top - ZG),
        SG = bG.bottom + ZG,
        LG = Math.max(0, bG.left - ZG),
        yG = bG.right + ZG;
      return (0, QG.jsxs)(QG.Fragment, {
        children: [(0, QG.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: wG
          }
        }), (0, QG.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: SG,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, QG.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: wG,
            left: 0,
            width: LG,
            height: SG - wG
          }
        }), (0, QG.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: wG,
            left: yG,
            right: 0,
            height: SG - wG
          }
        })]
      })
    }

    function XG(GG) {
      let {
        target: bG,
        placement: ZG,
        boxRef: wG,
        className: UG,
        spotlight: VG = !0,
        spotlightMargin: pG = EG,
        children: fG
      } = GG;
      const {
        getArrowProps: KG,
        getTooltipProps: hG,
        setTooltipRef: dG,
        setTriggerRef: JG,
        update: rG
      } = (0, kG.d)({
        placement: ZG,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, pG]
      });
      (0, LG.useLayoutEffect)((() => {
        JG(bG)
      }), [bG, JG]);
      const zG = function(GG, bG) {
        const [ZG, wG] = (0, LG.useState)(null);
        return (0, LG.useEffect)((() => {
          if (!bG || !GG) return void wG(null);
          let ZG = 0,
            SG = null;
          const LG = () => {
            const bG = GG.getBoundingClientRect();
            SG && bG.left === SG.left && bG.top === SG.top && bG.width === SG.width && bG.height === SG.height || (SG = bG, wG(bG)), ZG = requestAnimationFrame(LG)
          };
          return LG(), () => {
            cancelAnimationFrame(ZG)
          }
        }), [GG, bG]), ZG
      }(bG, VG);
      (0, LG.useEffect)((() => {
        null === rG || void 0 === rG || rG()
      }), [zG, rG]), (0, LG.useEffect)((() => {
        if (VG || !bG || !rG) return;
        const GG = new ResizeObserver((() => {
          rG()
        }));
        return GG.observe(bG), bG.parentElement && GG.observe(bG.parentElement), () => {
          GG.disconnect()
        }
      }), [bG, VG, rG]), (0, LG.useEffect)((() => {
        VG && (null === bG || void 0 === bG || bG.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [bG, VG]);
      const XG = (0, LG.useCallback)((GG => {
        dG(GG), wG && (wG.current = GG)
      }), [dG, wG]);
      return (0, yG.createPortal)((0, QG.jsxs)(QG.Fragment, {
        children: [zG && (0, QG.jsx)(oG, {
          rect: zG,
          margin: pG
        }), (0, QG.jsxs)("div", {
          ref: XG,
          ...hG({
            className: SG()("tooltip-container SmallTextLight TutorialStep", UG)
          }),
          children: [fG, (0, QG.jsx)("div", {
            ...KG({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, YG.k)())
    }
    const uG = (0, LG.forwardRef)((function(GG, bG) {
      let {
        placement: ZG = "right",
        children: wG,
        ...SG
      } = GG;
      const yG = dG(SG),
        kG = (0, LG.useRef)(null),
        UG = (0, LG.useRef)(null);
      rG(SG, yG, kG, UG);
      const [YG, VG] = (0, LG.useState)(null), pG = wG.ref, fG = (0, LG.useCallback)((GG => {
        UG.current = GG, VG(GG), hG(bG, GG), hG(pG, GG)
      }), [bG, pG]);
      return (0, QG.jsxs)(QG.Fragment, {
        children: [(0, LG.cloneElement)(wG, {
          ref: fG
        }), yG && (0, QG.jsx)(XG, {
          target: YG,
          placement: ZG,
          boxRef: kG,
          children: (0, QG.jsx)(zG, {
            ...SG
          })
        })]
      })
    }));

    function iG(GG) {
      const bG = dG(GG),
        ZG = (0, LG.useRef)(null);
      return rG(GG, bG, ZG, null), bG ? (0, yG.createPortal)((0, QG.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, QG.jsx)("div", {
          ref: ZG,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, QG.jsx)(zG, {
            ...GG
          })
        })
      }), (0, YG.k)()) : null
    }
  },
  36955: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => hG,
      h: () => dG,
      j: () => kG,
      k: () => fG,
      m: () => JG,
      p: () => pG,
      r: () => zG,
      t: () => KG,
      x: () => rG
    });
    var wG = ZG(17),
      SG = ZG(19);
    const LG = "clientGameInventoryButtonsChanged",
      yG = new Map;

    function kG() {
      return [...yG.values()].sort(((GG, bG) => {
        var ZG, wG;
        return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
      }))
    }
    let UG = null;

    function YG(GG) {
      UG = GG
    }
    let VG = !1;

    function pG(GG) {
      VG = !0;
      try {
        GG.onClick()
      } finally {
        VG = !1
      }
      GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
    }

    function fG() {
      return VG
    }

    function QG() {
      return kG().filter((GG => GG.panel && !GG.disabled))
    }

    function KG(GG) {
      const bG = QG(),
        ZG = bG.findIndex((GG => GG.id === UG));
      return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
    }

    function hG() {
      return null !== UG && QG().length > 1
    }

    function dG() {
      YG(null)
    }

    function JG() {
      "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
    }

    function rG() {
      const GG = UG;
      return YG(null), GG
    }

    function zG(GG) {
      return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
        yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
      }
    }
  },
  36951: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => dG,
      i: () => JG,
      j: () => fG,
      l: () => YG,
      m: () => hG,
      n: () => QG,
      q: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(36955);
    const kG = "clientGameUiChanged";
    let UG = null;

    function YG() {
      return UG
    }

    function VG(GG, bG) {
      const ZG = {
        content: GG,
        menu: bG
      };
      return UG = ZG, SG.l.xh(kG, UG, !0), () => {
        UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
      }
    }
    let pG = null;

    function fG() {
      return pG
    }

    function QG(GG) {
      return pG = GG, () => {
        pG === GG && (pG = null)
      }
    }
    let KG = !1;

    function hG() {
      const GG = wG.e.get("openInGameMenuName");
      "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dG() {
      rG(!1)
    }

    function JG() {
      rG(KG)
    }

    function rG(GG) {
      "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
        openInGameMenuName: GG ? "inventory" : null
      }), GG || (0, yG.h)(), KG = !1
    }
  },
  37231: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => MG,
      C: () => lG,
      F: () => AG,
      d: () => UG,
      e: () => IG,
      i: () => kG,
      k: () => cG,
      o: () => WG,
      r: () => XG,
      t: () => aG,
      w: () => vG,
      x: () => CG,
      y: () => jG,
      z: () => PG
    });
    var wG = ZG(29);
    const SG = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      LG = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      yG = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      kG = LG.filter((GG => "docsButton" !== GG)),
      UG = yG.filter((GG => "aiHelperButton" !== GG)),
      YG = "codeEditorTutorials",
      VG = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      pG = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let fG = null,
      QG = null;
    const KG = new Set,
      hG = new Set;
    let dG = null;
    const JG = new Set,
      rG = new Set;

    function zG() {
      rG.forEach((GG => {
        GG()
      }))
    }

    function EG() {
      if (!fG) {
        const GG = wG.h.getItem(YG);
        fG = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof GG && null !== GG ? GG : {}
        }
      }
      return fG
    }

    function oG(GG) {
      const bG = EG();
      bG[GG] || (fG = {
        ...bG,
        [GG]: !0
      }, wG.h.setItem(YG, fG))
    }

    function XG(GG) {
      return "docsOverview" === GG ? LG : "aiHelperOverview" === GG ? yG : QG ? SG[QG] : []
    }

    function uG(GG) {
      return ("worldCodeButton" !== GG || !EG().worldCodeIntroShown) && !JG.has(GG)
    }

    function iG(GG) {
      var bG;
      return (null === (bG = dG) || void 0 === bG ? void 0 : bG.name) === GG ? dG.stepsDone : KG
    }

    function CG(GG, bG) {
      if (! function(GG) {
          return dG ? dG.name === GG : "welcome" === GG
        }(GG) || !uG(bG) || iG(GG).has(bG)) return !1;
      if (dG) return !0;
      const ZG = VG[bG];
      return ZG ? !EG()[ZG] || hG.has(bG) : !EG()[pG[GG]]
    }

    function WG(GG) {
      var bG;
      return null !== (bG = XG(GG).find((bG => CG(GG, bG)))) && void 0 !== bG ? bG : null
    }

    function mG(GG) {
      var bG;
      oG(pG[GG]), (null === (bG = dG) || void 0 === bG ? void 0 : bG.name) === GG && (dG = null)
    }

    function IG(GG) {
      const bG = (dG ? [dG.name] : ["welcome", "docsOverview"]).find((bG => WG(bG) === GG));
      if (!bG) return;
      iG(bG).add(GG);
      const ZG = VG[GG];
      ZG && (oG(ZG), dG || hG.add(GG)), null === WG(bG) && mG(bG), zG()
    }

    function FG(GG, bG) {
      const ZG = XG(GG),
        wG = iG(GG);
      for (let SG = ZG.indexOf(bG) - 1; SG >= 0; SG--)
        if (wG.has(ZG[SG]) && uG(ZG[SG])) return ZG[SG];
      return null
    }

    function vG(GG, bG) {
      return null !== FG(GG, bG)
    }

    function aG(GG, bG) {
      const ZG = FG(GG, bG);
      ZG && (iG(GG).delete(ZG), zG())
    }

    function cG(GG) {
      mG(GG), "welcome" === GG && XG("welcome").forEach((GG => {
        const bG = VG[GG];
        bG && oG(bG)
      })), zG()
    }

    function lG(GG) {
      dG = {
        name: GG,
        stepsDone: new Set
      }, zG()
    }

    function jG() {
      (dG || 0 !== KG.size || 0 !== hG.size) && (dG = null, KG.clear(), hG.clear(), zG())
    }

    function PG(GG, bG) {
      const ZG = bG ? GG : QG === GG ? null : QG;
      ZG !== QG && (QG = ZG, zG())
    }

    function MG(GG, bG) {
      JG.has(GG) === bG && (bG ? JG.delete(GG) : JG.add(GG), zG())
    }

    function AG(GG) {
      return rG.add(GG), () => {
        rG.delete(GG)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);