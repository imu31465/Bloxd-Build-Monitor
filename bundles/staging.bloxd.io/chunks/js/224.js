export const id = 224;
export const ids = [224];
export const modules = {
  37110: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => ht,
      h: () => ut,
      i: () => Kt,
      k: () => ft
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(63),
      mt = Vt(83),
      dt = Vt(1472),
      jt = Vt(1556),
      Ht = Vt(1464),
      Xt = Vt(1371),
      Qt = Vt(1286),
      lt = Vt(37112),
      Et = Vt(1188);

    function ft(tt) {
      const [et, Vt] = (0, Dt.useState)((() => (0, lt.j)(tt)));
      return (0, Dt.useEffect)((() => (Vt((0, lt.j)(tt)), (0, lt.G)((() => {
        Vt((0, lt.j)(tt))
      })))), [tt]), et
    }

    function wt(tt, et) {
      "function" === typeof tt ? tt(et) : tt && (tt.current = et)
    }

    function yt(tt) {
      let {
        tutorial: et,
        step: Vt,
        enabled: Ot = !0
      } = tt;
      const qt = ft(et);
      return Ot && qt === Vt
    }

    function Nt(tt, et) {
      const Vt = (0, lt.n)(tt),
        Ot = Vt.indexOf(et);
      return !Vt.slice(Ot + 1).some((et => (0, lt.u)(tt, et)))
    }

    function Mt(tt, et, Vt, Ot) {
      let {
        tutorial: qt,
        step: Dt,
        waitForClick: mt = !1,
        onPrevious: dt
      } = tt;
      const jt = et && (0, lt.s)(qt, Dt),
        Ht = et && !Nt(qt, Dt),
        Qt = mt ? Ot : Vt;
      let Et = null;
      jt ? Et = () => {
        null === dt || void 0 === dt || dt(), (0, lt.o)(qt, Dt)
      } : Ht && (Et = () => {
        (0, lt.h)(qt)
      }), (0, Xt.w)("popup", null !== Qt && void 0 !== Qt ? Qt : Vt, Et, et && null !== Qt, null, jt ? void 0 : "controller:menusSkipTutorial")
    }

    function bt(tt) {
      let {
        tutorial: et,
        step: Vt,
        text: Ot,
        waitForClick: qt = !1,
        onPrevious: Dt
      } = tt;
      const {
        t: mt
      } = (0, Qt.H)(), dt = Nt(et, Vt);
      return (0, Et.jsxs)(Et.Fragment, {
        children: [(0, Et.jsx)("div", {
          className: "TutorialStepText",
          children: Ot
        }), (0, Et.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, lt.s)(et, Vt) && (0, Et.jsx)(jt.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Dt || void 0 === Dt || Dt(), (0, lt.o)(et, Vt)
            },
            children: mt("tutorial:back")
          }), !qt && (0, Et.jsx)(jt.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, lt.d)(Vt)
            },
            padDefaultFocus: !0,
            children: mt(dt ? "tutorial:done" : "tutorial:next")
          }), !dt && (0, Et.jsx)(jt.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, lt.h)(et)
            },
            children: mt("tutorial:skip")
          })]
        })]
      })
    }
    const Jt = 6;

    function Ct(tt) {
      let {
        rect: et,
        margin: Vt
      } = tt;
      const Ot = Math.max(0, et.top - Vt),
        qt = et.bottom + Vt,
        Dt = Math.max(0, et.left - Vt),
        mt = et.right + Vt;
      return (0, Et.jsxs)(Et.Fragment, {
        children: [(0, Et.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Ot
          }
        }), (0, Et.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: qt,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Et.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ot,
            left: 0,
            width: Dt,
            height: qt - Ot
          }
        }), (0, Et.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ot,
            left: mt,
            right: 0,
            height: qt - Ot
          }
        })]
      })
    }

    function ut(tt) {
      let {
        target: et,
        placement: Vt,
        boxRef: Ot,
        className: jt,
        spotlight: Xt = !0,
        spotlightMargin: Qt = Jt,
        children: lt
      } = tt;
      const {
        getArrowProps: ft,
        getTooltipProps: wt,
        setTooltipRef: yt,
        setTriggerRef: Nt,
        update: Mt
      } = (0, dt.c)({
        placement: Vt,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Qt]
      });
      (0, Dt.useLayoutEffect)((() => {
        Nt(et)
      }), [et, Nt]);
      const bt = function(tt, et) {
        const [Vt, Ot] = (0, Dt.useState)(null);
        return (0, Dt.useEffect)((() => {
          if (!et || !tt) return void Ot(null);
          let Vt = 0,
            qt = null;
          const Dt = () => {
            const et = tt.getBoundingClientRect();
            qt && et.left === qt.left && et.top === qt.top && et.width === qt.width && et.height === qt.height || (qt = et, Ot(et)), Vt = requestAnimationFrame(Dt)
          };
          return Dt(), () => {
            cancelAnimationFrame(Vt)
          }
        }), [tt, et]), Vt
      }(et, Xt);
      (0, Dt.useEffect)((() => {
        null === Mt || void 0 === Mt || Mt()
      }), [bt, Mt]), (0, Dt.useEffect)((() => {
        if (Xt || !et || !Mt) return;
        const tt = new ResizeObserver((() => {
          Mt()
        }));
        return tt.observe(et), et.parentElement && tt.observe(et.parentElement), () => {
          tt.disconnect()
        }
      }), [et, Xt, Mt]), (0, Dt.useEffect)((() => {
        Xt && (null === et || void 0 === et || et.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [et, Xt]);
      const ut = (0, Dt.useCallback)((tt => {
        yt(tt), Ot && (Ot.current = tt)
      }), [yt, Ot]);
      return (0, mt.createPortal)((0, Et.jsxs)(Et.Fragment, {
        children: [bt && (0, Et.jsx)(Ct, {
          rect: bt,
          margin: Qt
        }), (0, Et.jsxs)("div", {
          ref: ut,
          ...wt({
            className: qt()("tooltip-container SmallTextLight TutorialStep", jt)
          }),
          children: [lt, (0, Et.jsx)("div", {
            ...ft({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Ht.k)())
    }
    const Kt = (0, Dt.forwardRef)((function(tt, et) {
      let {
        placement: Vt = "right",
        children: Ot,
        ...qt
      } = tt;
      const mt = yt(qt),
        dt = (0, Dt.useRef)(null),
        jt = (0, Dt.useRef)(null);
      Mt(qt, mt, dt, jt);
      const [Ht, Xt] = (0, Dt.useState)(null), Qt = Ot.ref, lt = (0, Dt.useCallback)((tt => {
        jt.current = tt, Xt(tt), wt(et, tt), wt(Qt, tt)
      }), [et, Qt]);
      return (0, Et.jsxs)(Et.Fragment, {
        children: [(0, Dt.cloneElement)(Ot, {
          ref: lt
        }), mt && (0, Et.jsx)(ut, {
          target: Ht,
          placement: Vt,
          boxRef: dt,
          children: (0, Et.jsx)(bt, {
            ...qt
          })
        })]
      })
    }));

    function ht(tt) {
      const et = yt(tt),
        Vt = (0, Dt.useRef)(null);
      return Mt(tt, et, Vt, null), et ? (0, mt.createPortal)((0, Et.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Et.jsx)("div", {
          ref: Vt,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Et.jsx)(bt, {
            ...tt
          })
        })
      }), (0, Ht.k)()) : null
    }
  },
  36867: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ft,
      E: () => Mt,
      d: () => Dt,
      f: () => wt,
      j: () => yt,
      n: () => dt,
      q: () => lt,
      t: () => Nt,
      w: () => Qt,
      y: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(31);
    const Dt = "clientGameInventoryButtonsChanged",
      mt = new Map;

    function dt() {
      return [...mt.values()].sort(((tt, et) => {
        var Vt, Ot;
        return (null !== (Vt = tt.order) && void 0 !== Vt ? Vt : 0) - (null !== (Ot = et.order) && void 0 !== Ot ? Ot : 0)
      }))
    }
    let jt = null;

    function Ht(tt) {
      jt = tt
    }
    let Xt = !1;

    function Qt(tt) {
      Xt = !0;
      try {
        tt.onClick()
      } finally {
        Xt = !1
      }
      tt.panel && "clientGame" === Ot.b.get("openInGameMenuName") && Ht(tt.id)
    }

    function lt() {
      return Xt
    }

    function Et() {
      return dt().filter((tt => tt.panel && !tt.disabled))
    }

    function ft(tt) {
      const et = Et(),
        Vt = et.findIndex((tt => tt.id === jt));
      return !(Vt < 0 || et.length < 2) && (Qt(et[(Vt + tt + et.length) % et.length]), !0)
    }

    function wt() {
      return null !== jt && Et().length > 1
    }

    function yt() {
      Ht(null)
    }

    function Nt() {
      "inventory" !== Ot.b.get("openInGameMenuName") && Ht(null)
    }

    function Mt() {
      const tt = jt;
      return Ht(null), tt
    }

    function bt(tt) {
      return mt.set(tt.id, tt), qt.j.sw(Dt, dt(), !0), () => {
        mt.get(tt.id) === tt && (mt.delete(tt.id), qt.j.sw(Dt, dt()))
      }
    }
  },
  36861: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      g: () => Nt,
      i: () => lt,
      l: () => Ht,
      m: () => wt,
      o: () => Et,
      q: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(36867);
    const dt = "clientGameUiChanged";
    let jt = null;

    function Ht() {
      return jt
    }

    function Xt(tt, et) {
      const Vt = {
        content: tt,
        menu: et
      };
      return jt = Vt, qt.j.sw(dt, jt, !0), () => {
        jt === Vt && (jt = null, ft = !1, yt(), qt.j.sw(dt, null))
      }
    }
    let Qt = null;

    function lt() {
      return Qt
    }

    function Et(tt) {
      return Qt = tt, () => {
        Qt === tt && (Qt = null)
      }
    }
    let ft = !1;

    function wt() {
      const tt = Ot.b.get("openInGameMenuName");
      "clientGame" !== tt && (ft = "inventory" === tt), (0, mt.q)() || (0, mt.j)(), (0, Dt.p)(Dt.c), Ot.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yt() {
      Mt(!1)
    }

    function Nt() {
      Mt(ft)
    }

    function Mt(tt) {
      "clientGame" === Ot.b.get("openInGameMenuName") && Ot.b.set({
        openInGameMenuName: tt ? "inventory" : null
      }), tt || (0, mt.j)(), ft = !1
    }
  },
  37112: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => Gt,
      F: () => Lt,
      G: () => zt,
      b: () => jt,
      d: () => ct,
      g: () => dt,
      h: () => Zt,
      j: () => Wt,
      n: () => ut,
      o: () => Pt,
      s: () => It,
      u: () => vt,
      v: () => Ft,
      y: () => kt
    });
    var Ot = Vt(39);
    const qt = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Dt = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      mt = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      dt = Dt.filter((tt => "docsButton" !== tt)),
      jt = mt.filter((tt => "aiHelperButton" !== tt)),
      Ht = "codeEditorTutorials",
      Xt = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Qt = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let lt = null,
      Et = null;
    const ft = new Set,
      wt = new Set;
    let yt = null;
    const Nt = new Set,
      Mt = new Set;

    function bt() {
      Mt.forEach((tt => {
        tt()
      }))
    }

    function Jt() {
      if (!lt) {
        const tt = Ot.e.getItem(Ht);
        lt = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof tt && null !== tt ? tt : {}
        }
      }
      return lt
    }

    function Ct(tt) {
      const et = Jt();
      et[tt] || (lt = {
        ...et,
        [tt]: !0
      }, Ot.e.setItem(Ht, lt))
    }

    function ut(tt) {
      return "docsOverview" === tt ? Dt : "aiHelperOverview" === tt ? mt : Et ? qt[Et] : []
    }

    function Kt(tt) {
      return ("worldCodeButton" !== tt || !Jt().worldCodeIntroShown) && !Nt.has(tt)
    }

    function ht(tt) {
      var et;
      return (null === (et = yt) || void 0 === et ? void 0 : et.name) === tt ? yt.stepsDone : ft
    }

    function vt(tt, et) {
      if (! function(tt) {
          return yt ? yt.name === tt : "welcome" === tt
        }(tt) || !Kt(et) || ht(tt).has(et)) return !1;
      if (yt) return !0;
      const Vt = Xt[et];
      return Vt ? !Jt()[Vt] || wt.has(et) : !Jt()[Qt[tt]]
    }

    function Wt(tt) {
      var et;
      return null !== (et = ut(tt).find((et => vt(tt, et)))) && void 0 !== et ? et : null
    }

    function St(tt) {
      var et;
      Ct(Qt[tt]), (null === (et = yt) || void 0 === et ? void 0 : et.name) === tt && (yt = null)
    }

    function ct(tt) {
      const et = (yt ? [yt.name] : ["welcome", "docsOverview"]).find((et => Wt(et) === tt));
      if (!et) return;
      ht(et).add(tt);
      const Vt = Xt[tt];
      Vt && (Ct(Vt), yt || wt.add(tt)), null === Wt(et) && St(et), bt()
    }

    function Rt(tt, et) {
      const Vt = ut(tt),
        Ot = ht(tt);
      for (let qt = Vt.indexOf(et) - 1; qt >= 0; qt--)
        if (Ot.has(Vt[qt]) && Kt(Vt[qt])) return Vt[qt];
      return null
    }

    function It(tt, et) {
      return null !== Rt(tt, et)
    }

    function Pt(tt, et) {
      const Vt = Rt(tt, et);
      Vt && (ht(tt).delete(Vt), bt())
    }

    function Zt(tt) {
      St(tt), "welcome" === tt && ut("welcome").forEach((tt => {
        const et = Xt[tt];
        et && Ct(et)
      })), bt()
    }

    function Lt(tt) {
      yt = {
        name: tt,
        stepsDone: new Set
      }, bt()
    }

    function Ft() {
      (yt || 0 !== ft.size || 0 !== wt.size) && (yt = null, ft.clear(), wt.clear(), bt())
    }

    function kt(tt, et) {
      const Vt = et ? tt : Et === tt ? null : Et;
      Vt !== Et && (Et = Vt, bt())
    }

    function Gt(tt, et) {
      Nt.has(tt) === et && (et ? Nt.delete(tt) : Nt.add(tt), bt())
    }

    function zt(tt) {
      return Mt.add(tt), () => {
        Mt.delete(tt)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);