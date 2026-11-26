export const id = 247;
export const ids = [247];
export const modules = {
  37747: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => OH,
      g: () => UH,
      h: () => VH,
      j: () => uH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(45),
      hH = LH(69),
      tH = LH(1369),
      zH = LH(1455),
      CH = LH(1365),
      EH = LH(1214),
      XH = LH(1123),
      GH = LH(37754),
      YH = LH(1225);

    function uH(HH) {
      const [BH, LH] = (0, SH.useState)((() => (0, GH.l)(HH)));
      return (0, SH.useEffect)((() => (LH((0, GH.l)(HH)), (0, GH.F)((() => {
        LH((0, GH.l)(HH))
      })))), [HH]), BH
    }

    function QH(HH, BH) {
      "function" === typeof HH ? HH(BH) : HH && (HH.current = BH)
    }

    function WH(HH) {
      let {
        tutorial: BH,
        step: LH,
        enabled: AH = !0
      } = HH;
      const rH = uH(BH);
      return AH && rH === LH
    }

    function MH(HH, BH) {
      const LH = (0, GH.m)(HH),
        AH = LH.indexOf(BH);
      return !LH.slice(AH + 1).some((BH => (0, GH.s)(HH, BH)))
    }

    function xH(HH, BH, LH, AH) {
      let {
        tutorial: rH,
        step: SH,
        waitForClick: hH = !1,
        onPrevious: tH
      } = HH;
      const zH = BH && (0, GH.p)(rH, SH),
        CH = BH && !MH(rH, SH),
        XH = hH ? AH : LH;
      let YH = null;
      zH ? YH = () => {
        null === tH || void 0 === tH || tH(), (0, GH.o)(rH, SH)
      } : CH && (YH = () => {
        (0, GH.j)(rH)
      }), (0, EH.r)("popup", null !== XH && void 0 !== XH ? XH : LH, YH, BH && null !== XH, null, zH ? void 0 : "controller:menusSkipTutorial")
    }

    function vH(HH) {
      let {
        tutorial: BH,
        step: LH,
        text: AH,
        waitForClick: rH = !1,
        onPrevious: SH
      } = HH;
      const {
        t: hH
      } = (0, XH.B)(), tH = MH(BH, LH);
      return (0, YH.jsxs)(YH.Fragment, {
        children: [(0, YH.jsx)("div", {
          className: "TutorialStepText",
          children: AH
        }), (0, YH.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, GH.p)(BH, LH) && (0, YH.jsx)(zH.m, {
            className: "TutorialStepButton",
            onClick: () => {
              null === SH || void 0 === SH || SH(), (0, GH.o)(BH, LH)
            },
            children: hH("tutorial:back")
          }), !rH && (0, YH.jsx)(zH.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, GH.e)(LH)
            },
            padDefaultFocus: !0,
            children: hH(tH ? "tutorial:done" : "tutorial:next")
          }), !tH && (0, YH.jsx)(zH.m, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, GH.j)(BH)
            },
            children: hH("tutorial:skip")
          })]
        })]
      })
    }
    const PH = 6;

    function TH(HH) {
      let {
        rect: BH,
        margin: LH
      } = HH;
      const AH = Math.max(0, BH.top - LH),
        rH = BH.bottom + LH,
        SH = Math.max(0, BH.left - LH),
        hH = BH.right + LH;
      return (0, YH.jsxs)(YH.Fragment, {
        children: [(0, YH.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: AH
          }
        }), (0, YH.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: rH,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, YH.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: AH,
            left: 0,
            width: SH,
            height: rH - AH
          }
        }), (0, YH.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: AH,
            left: hH,
            right: 0,
            height: rH - AH
          }
        })]
      })
    }

    function UH(HH) {
      let {
        target: BH,
        placement: LH,
        boxRef: AH,
        className: zH,
        spotlight: EH = !0,
        spotlightMargin: XH = PH,
        children: GH
      } = HH;
      const {
        getArrowProps: uH,
        getTooltipProps: QH,
        setTooltipRef: WH,
        setTriggerRef: MH,
        update: xH
      } = (0, tH.b)({
        placement: LH,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, XH]
      });
      (0, SH.useLayoutEffect)((() => {
        MH(BH)
      }), [BH, MH]);
      const vH = function(HH, BH) {
        const [LH, AH] = (0, SH.useState)(null);
        return (0, SH.useEffect)((() => {
          if (!BH || !HH) return void AH(null);
          let LH = 0,
            rH = null;
          const SH = () => {
            const BH = HH.getBoundingClientRect();
            rH && BH.left === rH.left && BH.top === rH.top && BH.width === rH.width && BH.height === rH.height || (rH = BH, AH(BH)), LH = requestAnimationFrame(SH)
          };
          return SH(), () => {
            cancelAnimationFrame(LH)
          }
        }), [HH, BH]), LH
      }(BH, EH);
      (0, SH.useEffect)((() => {
        null === xH || void 0 === xH || xH()
      }), [vH, xH]), (0, SH.useEffect)((() => {
        if (EH || !BH || !xH) return;
        const HH = new ResizeObserver((() => {
          xH()
        }));
        return HH.observe(BH), BH.parentElement && HH.observe(BH.parentElement), () => {
          HH.disconnect()
        }
      }), [BH, EH, xH]), (0, SH.useEffect)((() => {
        EH && (null === BH || void 0 === BH || BH.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [BH, EH]);
      const UH = (0, SH.useCallback)((HH => {
        WH(HH), AH && (AH.current = HH)
      }), [WH, AH]);
      return (0, hH.createPortal)((0, YH.jsxs)(YH.Fragment, {
        children: [vH && (0, YH.jsx)(TH, {
          rect: vH,
          margin: XH
        }), (0, YH.jsxs)("div", {
          ref: UH,
          ...QH({
            className: rH()("tooltip-container SmallTextLight TutorialStep", zH)
          }),
          children: [GH, (0, YH.jsx)("div", {
            ...uH({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, CH.j)())
    }
    const VH = (0, SH.forwardRef)((function(HH, BH) {
      let {
        placement: LH = "right",
        children: AH,
        ...rH
      } = HH;
      const hH = WH(rH),
        tH = (0, SH.useRef)(null),
        zH = (0, SH.useRef)(null);
      xH(rH, hH, tH, zH);
      const [CH, EH] = (0, SH.useState)(null), XH = AH.ref, GH = (0, SH.useCallback)((HH => {
        zH.current = HH, EH(HH), QH(BH, HH), QH(XH, HH)
      }), [BH, XH]);
      return (0, YH.jsxs)(YH.Fragment, {
        children: [(0, SH.cloneElement)(AH, {
          ref: GH
        }), hH && (0, YH.jsx)(UH, {
          target: CH,
          placement: LH,
          boxRef: tH,
          children: (0, YH.jsx)(vH, {
            ...rH
          })
        })]
      })
    }));

    function OH(HH) {
      const BH = WH(HH),
        LH = (0, SH.useRef)(null);
      return xH(HH, BH, LH, null), BH ? (0, hH.createPortal)((0, YH.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, YH.jsx)("div", {
          ref: LH,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, YH.jsx)(vH, {
            ...HH
          })
        })
      }), (0, CH.j)()) : null
    }
  },
  37479: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => uH,
      C: () => xH,
      c: () => SH,
      g: () => QH,
      j: () => WH,
      k: () => tH,
      n: () => GH,
      r: () => MH,
      t: () => XH,
      x: () => vH
    });
    var AH = LH(15),
      rH = LH(18);
    const SH = "clientGameInventoryButtonsChanged",
      hH = new Map;

    function tH() {
      return [...hH.values()].sort(((HH, BH) => {
        var LH, AH;
        return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
      }))
    }
    let zH = null;

    function CH(HH) {
      zH = HH
    }
    let EH = !1;

    function XH(HH) {
      EH = !0;
      try {
        HH.onClick()
      } finally {
        EH = !1
      }
      HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
    }

    function GH() {
      return EH
    }

    function YH() {
      return tH().filter((HH => HH.panel && !HH.disabled))
    }

    function uH(HH) {
      const BH = YH(),
        LH = BH.findIndex((HH => HH.id === zH));
      return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
    }

    function QH() {
      return null !== zH && YH().length > 1
    }

    function WH() {
      CH(null)
    }

    function MH() {
      "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
    }

    function xH() {
      const HH = zH;
      return CH(null), HH
    }

    function vH(HH) {
      return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
        hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
      }
    }
  },
  37474: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => xH,
      g: () => WH,
      j: () => MH,
      n: () => GH,
      p: () => CH,
      t: () => QH,
      u: () => YH,
      v: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(37479);
    const tH = "clientGameUiChanged";
    let zH = null;

    function CH() {
      return zH
    }

    function EH(HH, BH) {
      const LH = {
        content: HH,
        menu: BH
      };
      return zH = LH, rH.k.AX(tH, zH, !0), () => {
        zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
      }
    }
    let XH = null;

    function GH() {
      return XH
    }

    function YH(HH) {
      return XH = HH, () => {
        XH === HH && (XH = null)
      }
    }
    let uH = !1;

    function QH() {
      const HH = AH.c.get("openInGameMenuName");
      "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function WH() {
      vH(!1)
    }

    function MH() {
      vH(uH)
    }

    function xH() {
      uH && vH(!1)
    }

    function vH(HH) {
      "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
        openInGameMenuName: HH ? "inventory" : null
      }), HH || (0, hH.j)(), uH = !1
    }
  },
  37754: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => gH,
      E: () => cH,
      F: () => NH,
      d: () => zH,
      e: () => oH,
      i: () => tH,
      j: () => KH,
      l: () => kH,
      m: () => UH,
      o: () => lH,
      p: () => fH,
      s: () => bH,
      w: () => eH,
      z: () => qH
    });
    var AH = LH(30);
    const rH = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      SH = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      hH = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      tH = SH.filter((HH => "docsButton" !== HH)),
      zH = hH.filter((HH => "aiHelperButton" !== HH)),
      CH = "codeEditorTutorials",
      EH = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      XH = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let GH = null,
      YH = null;
    const uH = new Set,
      QH = new Set;
    let WH = null;
    const MH = new Set,
      xH = new Set;

    function vH() {
      xH.forEach((HH => {
        HH()
      }))
    }

    function PH() {
      if (!GH) {
        const HH = AH.e.getItem(CH);
        GH = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof HH && null !== HH ? HH : {}
        }
      }
      return GH
    }

    function TH(HH) {
      const BH = PH();
      BH[HH] || (GH = {
        ...BH,
        [HH]: !0
      }, AH.e.setItem(CH, GH))
    }

    function UH(HH) {
      return "docsOverview" === HH ? SH : "aiHelperOverview" === HH ? hH : YH ? rH[YH] : []
    }

    function VH(HH) {
      return ("worldCodeButton" !== HH || !PH().worldCodeIntroShown) && !MH.has(HH)
    }

    function OH(HH) {
      var BH;
      return (null === (BH = WH) || void 0 === BH ? void 0 : BH.name) === HH ? WH.stepsDone : uH
    }

    function bH(HH, BH) {
      if (! function(HH) {
          return WH ? WH.name === HH : "welcome" === HH
        }(HH) || !VH(BH) || OH(HH).has(BH)) return !1;
      if (WH) return !0;
      const LH = EH[BH];
      return LH ? !PH()[LH] || QH.has(BH) : !PH()[XH[HH]]
    }

    function kH(HH) {
      var BH;
      return null !== (BH = UH(HH).find((BH => bH(HH, BH)))) && void 0 !== BH ? BH : null
    }

    function mH(HH) {
      var BH;
      TH(XH[HH]), (null === (BH = WH) || void 0 === BH ? void 0 : BH.name) === HH && (WH = null)
    }

    function oH(HH) {
      const BH = (WH ? [WH.name] : ["welcome", "docsOverview"]).find((BH => kH(BH) === HH));
      if (!BH) return;
      OH(BH).add(HH);
      const LH = EH[HH];
      LH && (TH(LH), WH || QH.add(HH)), null === kH(BH) && mH(BH), vH()
    }

    function IH(HH, BH) {
      const LH = UH(HH),
        AH = OH(HH);
      for (let rH = LH.indexOf(BH) - 1; rH >= 0; rH--)
        if (AH.has(LH[rH]) && VH(LH[rH])) return LH[rH];
      return null
    }

    function fH(HH, BH) {
      return null !== IH(HH, BH)
    }

    function lH(HH, BH) {
      const LH = IH(HH, BH);
      LH && (OH(HH).delete(LH), vH())
    }

    function KH(HH) {
      mH(HH), "welcome" === HH && UH("welcome").forEach((HH => {
        const BH = EH[HH];
        BH && TH(BH)
      })), vH()
    }

    function cH(HH) {
      WH = {
        name: HH,
        stepsDone: new Set
      }, vH()
    }

    function eH() {
      (WH || 0 !== uH.size || 0 !== QH.size) && (WH = null, uH.clear(), QH.clear(), vH())
    }

    function qH(HH, BH) {
      const LH = BH ? HH : YH === HH ? null : YH;
      LH !== YH && (YH = LH, vH())
    }

    function gH(HH, BH) {
      MH.has(HH) === BH && (BH ? MH.delete(HH) : MH.add(HH), vH())
    }

    function NH(HH) {
      return xH.add(HH), () => {
        xH.delete(HH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);