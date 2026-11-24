export const id = 224;
export const ids = [224];
export const modules = {
  36974: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => YT,
      d: () => OT,
      f: () => eT,
      i: () => BT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(63),
      gT = mT(85),
      nT = mT(1482),
      HT = mT(1569),
      kT = mT(1475),
      jT = mT(1376),
      lT = mT(1288),
      LT = mT(36982),
      pT = mT(1188);

    function BT(TT) {
      const [UT, mT] = (0, MT.useState)((() => (0, LT.p)(TT)));
      return (0, MT.useEffect)((() => (mT((0, LT.p)(TT)), (0, LT.Q)((() => {
        mT((0, LT.p)(TT))
      })))), [TT]), UT
    }

    function ZT(TT, UT) {
      "function" === typeof TT ? TT(UT) : TT && (TT.current = UT)
    }

    function cT(TT) {
      let {
        tutorial: UT,
        step: mT,
        enabled: WT = !0
      } = TT;
      const zT = BT(UT);
      return WT && zT === mT
    }

    function vT(TT, UT) {
      const mT = (0, LT.q)(TT),
        WT = mT.indexOf(UT);
      return !mT.slice(WT + 1).some((UT => (0, LT.y)(TT, UT)))
    }

    function fT(TT, UT, mT, WT) {
      let {
        tutorial: zT,
        step: MT,
        waitForClick: gT = !1,
        onPrevious: nT
      } = TT;
      const HT = UT && (0, LT.u)(zT, MT),
        kT = UT && !vT(zT, MT),
        lT = gT ? WT : mT;
      let pT = null;
      HT ? pT = () => {
        null === nT || void 0 === nT || nT(), (0, LT.s)(zT, MT)
      } : kT && (pT = () => {
        (0, LT.m)(zT)
      }), (0, jT.p)("popup", null !== lT && void 0 !== lT ? lT : mT, pT, UT && null !== lT, null, HT ? void 0 : "controller:menusSkipTutorial")
    }

    function qT(TT) {
      let {
        tutorial: UT,
        step: mT,
        text: WT,
        waitForClick: zT = !1,
        onPrevious: MT
      } = TT;
      const {
        t: gT
      } = (0, lT.z)(), nT = vT(UT, mT);
      return (0, pT.jsxs)(pT.Fragment, {
        children: [(0, pT.jsx)("div", {
          className: "TutorialStepText",
          children: WT
        }), (0, pT.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, LT.u)(UT, mT) && (0, pT.jsx)(HT.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === MT || void 0 === MT || MT(), (0, LT.s)(UT, mT)
            },
            children: gT("tutorial:back")
          }), !zT && (0, pT.jsx)(HT.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LT.g)(mT)
            },
            padDefaultFocus: !0,
            children: gT(nT ? "tutorial:done" : "tutorial:next")
          }), !nT && (0, pT.jsx)(HT.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LT.m)(UT)
            },
            children: gT("tutorial:skip")
          })]
        })]
      })
    }
    const iT = 6;

    function bT(TT) {
      let {
        rect: UT,
        margin: mT
      } = TT;
      const WT = Math.max(0, UT.top - mT),
        zT = UT.bottom + mT,
        MT = Math.max(0, UT.left - mT),
        gT = UT.right + mT;
      return (0, pT.jsxs)(pT.Fragment, {
        children: [(0, pT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: WT
          }
        }), (0, pT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: zT,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, pT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: WT,
            left: 0,
            width: MT,
            height: zT - WT
          }
        }), (0, pT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: WT,
            left: gT,
            right: 0,
            height: zT - WT
          }
        })]
      })
    }

    function OT(TT) {
      let {
        target: UT,
        placement: mT,
        boxRef: WT,
        className: HT,
        spotlight: jT = !0,
        spotlightMargin: lT = iT,
        children: LT
      } = TT;
      const {
        getArrowProps: BT,
        getTooltipProps: ZT,
        setTooltipRef: cT,
        setTriggerRef: vT,
        update: fT
      } = (0, nT.c)({
        placement: mT,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, lT]
      });
      (0, MT.useLayoutEffect)((() => {
        vT(UT)
      }), [UT, vT]);
      const qT = function(TT, UT) {
        const [mT, WT] = (0, MT.useState)(null);
        return (0, MT.useEffect)((() => {
          if (!UT || !TT) return void WT(null);
          let mT = 0,
            zT = null;
          const MT = () => {
            const UT = TT.getBoundingClientRect();
            zT && UT.left === zT.left && UT.top === zT.top && UT.width === zT.width && UT.height === zT.height || (zT = UT, WT(UT)), mT = requestAnimationFrame(MT)
          };
          return MT(), () => {
            cancelAnimationFrame(mT)
          }
        }), [TT, UT]), mT
      }(UT, jT);
      (0, MT.useEffect)((() => {
        null === fT || void 0 === fT || fT()
      }), [qT, fT]), (0, MT.useEffect)((() => {
        if (jT || !UT || !fT) return;
        const TT = new ResizeObserver((() => {
          fT()
        }));
        return TT.observe(UT), UT.parentElement && TT.observe(UT.parentElement), () => {
          TT.disconnect()
        }
      }), [UT, jT, fT]), (0, MT.useEffect)((() => {
        jT && (null === UT || void 0 === UT || UT.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [UT, jT]);
      const OT = (0, MT.useCallback)((TT => {
        cT(TT), WT && (WT.current = TT)
      }), [cT, WT]);
      return (0, gT.createPortal)((0, pT.jsxs)(pT.Fragment, {
        children: [qT && (0, pT.jsx)(bT, {
          rect: qT,
          margin: lT
        }), (0, pT.jsxs)("div", {
          ref: OT,
          ...ZT({
            className: zT()("tooltip-container SmallTextLight TutorialStep", HT)
          }),
          children: [LT, (0, pT.jsx)("div", {
            ...BT({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, kT.f)())
    }
    const eT = (0, MT.forwardRef)((function(TT, UT) {
      let {
        placement: mT = "right",
        children: WT,
        ...zT
      } = TT;
      const gT = cT(zT),
        nT = (0, MT.useRef)(null),
        HT = (0, MT.useRef)(null);
      fT(zT, gT, nT, HT);
      const [kT, jT] = (0, MT.useState)(null), lT = WT.ref, LT = (0, MT.useCallback)((TT => {
        HT.current = TT, jT(TT), ZT(UT, TT), ZT(lT, TT)
      }), [UT, lT]);
      return (0, pT.jsxs)(pT.Fragment, {
        children: [(0, MT.cloneElement)(WT, {
          ref: LT
        }), gT && (0, pT.jsx)(OT, {
          target: kT,
          placement: mT,
          boxRef: nT,
          children: (0, pT.jsx)(qT, {
            ...zT
          })
        })]
      })
    }));

    function YT(TT) {
      const UT = cT(TT),
        mT = (0, MT.useRef)(null);
      return fT(TT, UT, mT, null), UT ? (0, gT.createPortal)((0, pT.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, pT.jsx)("div", {
          ref: mT,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, pT.jsx)(qT, {
            ...TT
          })
        })
      }), (0, kT.f)()) : null
    }
  },
  36698: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => ZT,
      h: () => cT,
      j: () => nT,
      l: () => LT,
      n: () => vT,
      p: () => lT,
      r: () => qT,
      s: () => BT,
      v: () => fT
    });
    var WT = mT(25),
      zT = mT(31);
    const MT = "clientGameInventoryButtonsChanged",
      gT = new Map;

    function nT() {
      return [...gT.values()].sort(((TT, UT) => {
        var mT, WT;
        return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
      }))
    }
    let HT = null;

    function kT(TT) {
      HT = TT
    }
    let jT = !1;

    function lT(TT) {
      jT = !0;
      try {
        TT.onClick()
      } finally {
        jT = !1
      }
      TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
    }

    function LT() {
      return jT
    }

    function pT() {
      return nT().filter((TT => TT.panel && !TT.disabled))
    }

    function BT(TT) {
      const UT = pT(),
        mT = UT.findIndex((TT => TT.id === HT));
      return !(mT < 0 || UT.length < 2) && (lT(UT[(mT + TT + UT.length) % UT.length]), !0)
    }

    function ZT() {
      return null !== HT && pT().length > 1
    }

    function cT() {
      kT(null)
    }

    function vT() {
      "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
    }

    function fT() {
      const TT = HT;
      return kT(null), TT
    }

    function qT(TT) {
      return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
        gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
      }
    }
  },
  36693: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      d: () => cT,
      f: () => vT,
      i: () => LT,
      j: () => kT,
      l: () => ZT,
      n: () => pT,
      q: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(36698);
    const nT = "clientGameUiChanged";
    let HT = null;

    function kT() {
      return HT
    }

    function jT(TT, UT) {
      const mT = {
        content: TT,
        menu: UT
      };
      return HT = mT, zT.j.EZ(nT, HT, !0), () => {
        HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
      }
    }
    let lT = null;

    function LT() {
      return lT
    }

    function pT(TT) {
      return lT = TT, () => {
        lT === TT && (lT = null)
      }
    }
    let BT = !1;

    function ZT() {
      const TT = WT.b.get("openInGameMenuName");
      "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function cT() {
      fT(!1)
    }

    function vT() {
      fT(BT)
    }

    function fT(TT) {
      "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, gT.h)(), BT = !1
    }
  },
  36982: (TT, UT, mT) => {
    mT.d(UT, {
      C: () => QT,
      G: () => sT,
      I: () => FT,
      M: () => IT,
      Q: () => PT,
      c: () => HT,
      g: () => wT,
      i: () => nT,
      m: () => XT,
      p: () => xT,
      q: () => OT,
      s: () => yT,
      u: () => aT,
      y: () => JT
    });
    var WT = mT(44);
    const zT = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      MT = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      gT = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      nT = MT.filter((TT => "docsButton" !== TT)),
      HT = gT.filter((TT => "aiHelperButton" !== TT)),
      kT = "codeEditorTutorials",
      jT = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      lT = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let LT = null,
      pT = null;
    const BT = new Set,
      ZT = new Set;
    let cT = null;
    const vT = new Set,
      fT = new Set;

    function qT() {
      fT.forEach((TT => {
        TT()
      }))
    }

    function iT() {
      if (!LT) {
        const TT = WT.l.getItem(kT);
        LT = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof TT && null !== TT ? TT : {}
        }
      }
      return LT
    }

    function bT(TT) {
      const UT = iT();
      UT[TT] || (LT = {
        ...UT,
        [TT]: !0
      }, WT.l.setItem(kT, LT))
    }

    function OT(TT) {
      return "docsOverview" === TT ? MT : "aiHelperOverview" === TT ? gT : pT ? zT[pT] : []
    }

    function eT(TT) {
      return ("worldCodeButton" !== TT || !iT().worldCodeIntroShown) && !vT.has(TT)
    }

    function YT(TT) {
      var UT;
      return (null === (UT = cT) || void 0 === UT ? void 0 : UT.name) === TT ? cT.stepsDone : BT
    }

    function JT(TT, UT) {
      if (! function(TT) {
          return cT ? cT.name === TT : "welcome" === TT
        }(TT) || !eT(UT) || YT(TT).has(UT)) return !1;
      if (cT) return !0;
      const mT = jT[UT];
      return mT ? !iT()[mT] || ZT.has(UT) : !iT()[lT[TT]]
    }

    function xT(TT) {
      var UT;
      return null !== (UT = OT(TT).find((UT => JT(TT, UT)))) && void 0 !== UT ? UT : null
    }

    function dT(TT) {
      var UT;
      bT(lT[TT]), (null === (UT = cT) || void 0 === UT ? void 0 : UT.name) === TT && (cT = null)
    }

    function wT(TT) {
      const UT = (cT ? [cT.name] : ["welcome", "docsOverview"]).find((UT => xT(UT) === TT));
      if (!UT) return;
      YT(UT).add(TT);
      const mT = jT[TT];
      mT && (bT(mT), cT || ZT.add(TT)), null === xT(UT) && dT(UT), qT()
    }

    function tT(TT, UT) {
      const mT = OT(TT),
        WT = YT(TT);
      for (let zT = mT.indexOf(UT) - 1; zT >= 0; zT--)
        if (WT.has(mT[zT]) && eT(mT[zT])) return mT[zT];
      return null
    }

    function aT(TT, UT) {
      return null !== tT(TT, UT)
    }

    function yT(TT, UT) {
      const mT = tT(TT, UT);
      mT && (YT(TT).delete(mT), qT())
    }

    function XT(TT) {
      dT(TT), "welcome" === TT && OT("welcome").forEach((TT => {
        const UT = jT[TT];
        UT && bT(UT)
      })), qT()
    }

    function IT(TT) {
      cT = {
        name: TT,
        stepsDone: new Set
      }, qT()
    }

    function QT() {
      (cT || 0 !== BT.size || 0 !== ZT.size) && (cT = null, BT.clear(), ZT.clear(), qT())
    }

    function sT(TT, UT) {
      const mT = UT ? TT : pT === TT ? null : pT;
      mT !== pT && (pT = mT, qT())
    }

    function FT(TT, UT) {
      vT.has(TT) === UT && (UT ? vT.delete(TT) : vT.add(TT), qT())
    }

    function PT(TT) {
      return fT.add(TT), () => {
        fT.delete(TT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);