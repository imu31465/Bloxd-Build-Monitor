export const id = 247;
export const ids = [247];
export const modules = {
  37708: (ee, ie, He) => {
    He.d(ie, {
      b: () => We,
      d: () => Oe,
      h: () => de,
      i: () => fe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(59),
      Ke = He(77),
      Ue = He(1359),
      Fe = He(1438),
      Je = He(1351),
      oe = He(1215),
      Re = He(1127),
      ke = He(37716),
      qe = He(1228);

    function fe(ee) {
      const [ie, He] = (0, Me.useState)((() => (0, ke.n)(ee)));
      return (0, Me.useEffect)((() => (He((0, ke.n)(ee)), (0, ke.N)((() => {
        He((0, ke.n)(ee))
      })))), [ee]), ie
    }

    function Te(ee, ie) {
      "function" === typeof ee ? ee(ie) : ee && (ee.current = ie)
    }

    function pe(ee) {
      let {
        tutorial: ie,
        step: He,
        enabled: ye = !0
      } = ee;
      const be = fe(ie);
      return ye && be === He
    }

    function Xe(ee, ie) {
      const He = (0, ke.q)(ee),
        ye = He.indexOf(ie);
      return !He.slice(ye + 1).some((ie => (0, ke.A)(ee, ie)))
    }

    function ze(ee, ie, He, ye) {
      let {
        tutorial: be,
        step: Me,
        waitForClick: Ke = !1,
        onPrevious: Ue
      } = ee;
      const Fe = ie && (0, ke.y)(be, Me),
        Je = ie && !Xe(be, Me),
        Re = Ke ? ye : He;
      let qe = null;
      Fe ? qe = () => {
        null === Ue || void 0 === Ue || Ue(), (0, ke.u)(be, Me)
      } : Je && (qe = () => {
        (0, ke.l)(be)
      }), (0, oe.t)("popup", null !== Re && void 0 !== Re ? Re : He, qe, ie && null !== Re, null, Fe ? void 0 : "controller:menusSkipTutorial")
    }

    function Be(ee) {
      let {
        tutorial: ie,
        step: He,
        text: ye,
        waitForClick: be = !1,
        onPrevious: Me
      } = ee;
      const {
        t: Ke
      } = (0, Re.v)(), Ue = Xe(ie, He);
      return (0, qe.jsxs)(qe.Fragment, {
        children: [(0, qe.jsx)("div", {
          className: "TutorialStepText",
          children: ye
        }), (0, qe.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, ke.y)(ie, He) && (0, qe.jsx)(Fe.e, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Me || void 0 === Me || Me(), (0, ke.u)(ie, He)
            },
            children: Ke("tutorial:back")
          }), !be && (0, qe.jsx)(Fe.c, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ke.f)(He)
            },
            padDefaultFocus: !0,
            children: Ke(Ue ? "tutorial:done" : "tutorial:next")
          }), !Ue && (0, qe.jsx)(Fe.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ke.l)(ie)
            },
            children: Ke("tutorial:skip")
          })]
        })]
      })
    }
    const Ee = 6;

    function ge(ee) {
      let {
        rect: ie,
        margin: He
      } = ee;
      const ye = Math.max(0, ie.top - He),
        be = ie.bottom + He,
        Me = Math.max(0, ie.left - He),
        Ke = ie.right + He;
      return (0, qe.jsxs)(qe.Fragment, {
        children: [(0, qe.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: ye
          }
        }), (0, qe.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: be,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, qe.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: ye,
            left: 0,
            width: Me,
            height: be - ye
          }
        }), (0, qe.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: ye,
            left: Ke,
            right: 0,
            height: be - ye
          }
        })]
      })
    }

    function Oe(ee) {
      let {
        target: ie,
        placement: He,
        boxRef: ye,
        className: Fe,
        spotlight: oe = !0,
        spotlightMargin: Re = Ee,
        children: ke
      } = ee;
      const {
        getArrowProps: fe,
        getTooltipProps: Te,
        setTooltipRef: pe,
        setTriggerRef: Xe,
        update: ze
      } = (0, Ue.c)({
        placement: He,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Re]
      });
      (0, Me.useLayoutEffect)((() => {
        Xe(ie)
      }), [ie, Xe]);
      const Be = function(ee, ie) {
        const [He, ye] = (0, Me.useState)(null);
        return (0, Me.useEffect)((() => {
          if (!ie || !ee) return void ye(null);
          let He = 0,
            be = null;
          const Me = () => {
            const ie = ee.getBoundingClientRect();
            be && ie.left === be.left && ie.top === be.top && ie.width === be.width && ie.height === be.height || (be = ie, ye(ie)), He = requestAnimationFrame(Me)
          };
          return Me(), () => {
            cancelAnimationFrame(He)
          }
        }), [ee, ie]), He
      }(ie, oe);
      (0, Me.useEffect)((() => {
        null === ze || void 0 === ze || ze()
      }), [Be, ze]), (0, Me.useEffect)((() => {
        if (oe || !ie || !ze) return;
        const ee = new ResizeObserver((() => {
          ze()
        }));
        return ee.observe(ie), ie.parentElement && ee.observe(ie.parentElement), () => {
          ee.disconnect()
        }
      }), [ie, oe, ze]), (0, Me.useEffect)((() => {
        oe && (null === ie || void 0 === ie || ie.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [ie, oe]);
      const Oe = (0, Me.useCallback)((ee => {
        pe(ee), ye && (ye.current = ee)
      }), [pe, ye]);
      return (0, Ke.createPortal)((0, qe.jsxs)(qe.Fragment, {
        children: [Be && (0, qe.jsx)(ge, {
          rect: Be,
          margin: Re
        }), (0, qe.jsxs)("div", {
          ref: Oe,
          ...Te({
            className: be()("tooltip-container SmallTextLight TutorialStep", Fe)
          }),
          children: [ke, (0, qe.jsx)("div", {
            ...fe({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Je.k)())
    }
    const de = (0, Me.forwardRef)((function(ee, ie) {
      let {
        placement: He = "right",
        children: ye,
        ...be
      } = ee;
      const Ke = pe(be),
        Ue = (0, Me.useRef)(null),
        Fe = (0, Me.useRef)(null);
      ze(be, Ke, Ue, Fe);
      const [Je, oe] = (0, Me.useState)(null), Re = ye.ref, ke = (0, Me.useCallback)((ee => {
        Fe.current = ee, oe(ee), Te(ie, ee), Te(Re, ee)
      }), [ie, Re]);
      return (0, qe.jsxs)(qe.Fragment, {
        children: [(0, Me.cloneElement)(ye, {
          ref: ke
        }), Ke && (0, qe.jsx)(Oe, {
          target: Je,
          placement: He,
          boxRef: Ue,
          children: (0, qe.jsx)(Be, {
            ...be
          })
        })]
      })
    }));

    function We(ee) {
      const ie = pe(ee),
        He = (0, Me.useRef)(null);
      return ze(ee, ie, He, null), ie ? (0, Ke.createPortal)((0, qe.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, qe.jsx)("div", {
          ref: He,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, qe.jsx)(Be, {
            ...ee
          })
        })
      }), (0, Je.k)()) : null
    }
  },
  37427: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => Te,
      f: () => pe,
      h: () => Ue,
      j: () => ke,
      l: () => Xe,
      n: () => Re,
      p: () => Be,
      r: () => fe,
      u: () => ze
    });
    var ye = He(18),
      be = He(27);
    const Me = "clientGameInventoryButtonsChanged",
      Ke = new Map;

    function Ue() {
      return [...Ke.values()].sort(((ee, ie) => {
        var He, ye;
        return (null !== (He = ee.order) && void 0 !== He ? He : 0) - (null !== (ye = ie.order) && void 0 !== ye ? ye : 0)
      }))
    }
    let Fe = null;

    function Je(ee) {
      Fe = ee
    }
    let oe = !1;

    function Re(ee) {
      oe = !0;
      try {
        ee.onClick()
      } finally {
        oe = !1
      }
      ee.panel && "clientGame" === ye.e.get("openInGameMenuName") && Je(ee.id)
    }

    function ke() {
      return oe
    }

    function qe() {
      return Ue().filter((ee => ee.panel && !ee.disabled))
    }

    function fe(ee) {
      const ie = qe(),
        He = ie.findIndex((ee => ee.id === Fe));
      return !(He < 0 || ie.length < 2) && (Re(ie[(He + ee + ie.length) % ie.length]), !0)
    }

    function Te() {
      return null !== Fe && qe().length > 1
    }

    function pe() {
      Je(null)
    }

    function Xe() {
      "inventory" !== ye.e.get("openInGameMenuName") && Je(null)
    }

    function ze() {
      const ee = Fe;
      return Je(null), ee
    }

    function Be(ee) {
      return Ke.set(ee.id, ee), be.h.yR(Me, Ue(), !0), () => {
        Ke.get(ee.id) === ee && (Ke.delete(ee.id), be.h.yR(Me, Ue()))
      }
    }
  },
  37424: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => ze,
      h: () => pe,
      l: () => Xe,
      m: () => ke,
      p: () => Je,
      s: () => Te,
      v: () => qe,
      z: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(37427);
    const Ue = "clientGameUiChanged";
    let Fe = null;

    function Je() {
      return Fe
    }

    function oe(ee, ie) {
      const He = {
        content: ee,
        menu: ie
      };
      return Fe = He, be.h.yR(Ue, Fe, !0), () => {
        Fe === He && (Fe = null, fe = !1, pe(), be.h.yR(Ue, null))
      }
    }
    let Re = null;

    function ke() {
      return Re
    }

    function qe(ee) {
      return Re = ee, () => {
        Re === ee && (Re = null)
      }
    }
    let fe = !1;

    function Te() {
      const ee = ye.e.get("openInGameMenuName");
      "clientGame" !== ee && (fe = "inventory" === ee), (0, Ke.j)() || (0, Ke.f)(), (0, Me.w)(Me.c), ye.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pe() {
      Be(!1)
    }

    function Xe() {
      Be(fe)
    }

    function ze() {
      fe && Be(!1)
    }

    function Be(ee) {
      "clientGame" === ye.e.get("openInGameMenuName") && ye.e.set({
        openInGameMenuName: ee ? "inventory" : null
      }), ee || (0, Ke.f)(), fe = !1
    }
  },
  37716: (ee, ie, He) => {
    He.d(ie, {
      A: () => te,
      D: () => ce,
      G: () => xe,
      J: () => Le,
      K: () => ae,
      N: () => Ce,
      e: () => Fe,
      f: () => De,
      i: () => Ue,
      l: () => Ve,
      n: () => Ze,
      q: () => Oe,
      u: () => Ye,
      y: () => Ae
    });
    var ye = He(35);
    const be = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Me = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Ke = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Ue = Me.filter((ee => "docsButton" !== ee)),
      Fe = Ke.filter((ee => "aiHelperButton" !== ee)),
      Je = "codeEditorTutorials",
      oe = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Re = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let ke = null,
      qe = null;
    const fe = new Set,
      Te = new Set;
    let pe = null;
    const Xe = new Set,
      ze = new Set;

    function Be() {
      ze.forEach((ee => {
        ee()
      }))
    }

    function Ee() {
      if (!ke) {
        const ee = ye.i.getItem(Je);
        ke = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof ee && null !== ee ? ee : {}
        }
      }
      return ke
    }

    function ge(ee) {
      const ie = Ee();
      ie[ee] || (ke = {
        ...ie,
        [ee]: !0
      }, ye.i.setItem(Je, ke))
    }

    function Oe(ee) {
      return "docsOverview" === ee ? Me : "aiHelperOverview" === ee ? Ke : qe ? be[qe] : []
    }

    function de(ee) {
      return ("worldCodeButton" !== ee || !Ee().worldCodeIntroShown) && !Xe.has(ee)
    }

    function We(ee) {
      var ie;
      return (null === (ie = pe) || void 0 === ie ? void 0 : ie.name) === ee ? pe.stepsDone : fe
    }

    function te(ee, ie) {
      if (! function(ee) {
          return pe ? pe.name === ee : "welcome" === ee
        }(ee) || !de(ie) || We(ee).has(ie)) return !1;
      if (pe) return !0;
      const He = oe[ie];
      return He ? !Ee()[He] || Te.has(ie) : !Ee()[Re[ee]]
    }

    function Ze(ee) {
      var ie;
      return null !== (ie = Oe(ee).find((ie => te(ee, ie)))) && void 0 !== ie ? ie : null
    }

    function we(ee) {
      var ie;
      ge(Re[ee]), (null === (ie = pe) || void 0 === ie ? void 0 : ie.name) === ee && (pe = null)
    }

    function De(ee) {
      const ie = (pe ? [pe.name] : ["welcome", "docsOverview"]).find((ie => Ze(ie) === ee));
      if (!ie) return;
      We(ie).add(ee);
      const He = oe[ee];
      He && (ge(He), pe || Te.add(ee)), null === Ze(ie) && we(ie), Be()
    }

    function Pe(ee, ie) {
      const He = Oe(ee),
        ye = We(ee);
      for (let be = He.indexOf(ie) - 1; be >= 0; be--)
        if (ye.has(He[be]) && de(He[be])) return He[be];
      return null
    }

    function Ae(ee, ie) {
      return null !== Pe(ee, ie)
    }

    function Ye(ee, ie) {
      const He = Pe(ee, ie);
      He && (We(ee).delete(He), Be())
    }

    function Ve(ee) {
      we(ee), "welcome" === ee && Oe("welcome").forEach((ee => {
        const ie = oe[ee];
        ie && ge(ie)
      })), Be()
    }

    function ae(ee) {
      pe = {
        name: ee,
        stepsDone: new Set
      }, Be()
    }

    function ce() {
      (pe || 0 !== fe.size || 0 !== Te.size) && (pe = null, fe.clear(), Te.clear(), Be())
    }

    function xe(ee, ie) {
      const He = ie ? ee : qe === ee ? null : qe;
      He !== qe && (qe = He, Be())
    }

    function Le(ee, ie) {
      Xe.has(ee) === ie && (ie ? Xe.delete(ee) : Xe.add(ee), Be())
    }

    function Ce(ee) {
      return ze.add(ee), () => {
        ze.delete(ee)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);