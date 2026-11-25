export const id = 224;
export const ids = [224];
export const modules = {
  37282: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ju,
      d: () => pu,
      h: () => wu,
      i: () => Ou
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(58),
      Xu = ju(65),
      lu = ju(1425),
      qu = ju(1506),
      fu = ju(1419),
      Cu = ju(1330),
      bu = ju(1244),
      cu = ju(37284),
      Nu = ju(1154);

    function Ou(uu) {
      const [Eu, ju] = (0, Zu.useState)((() => (0, cu.n)(uu)));
      return (0, Zu.useEffect)((() => (ju((0, cu.n)(uu)), (0, cu.N)((() => {
        ju((0, cu.n)(uu))
      })))), [uu]), Eu
    }

    function Yu(uu, Eu) {
      "function" === typeof uu ? uu(Eu) : uu && (uu.current = Eu)
    }

    function hu(uu) {
      let {
        tutorial: Eu,
        step: ju,
        enabled: su = !0
      } = uu;
      const Uu = Ou(Eu);
      return su && Uu === ju
    }

    function Du(uu, Eu) {
      const ju = (0, cu.p)(uu),
        su = ju.indexOf(Eu);
      return !ju.slice(su + 1).some((Eu => (0, cu.w)(uu, Eu)))
    }

    function gu(uu, Eu, ju, su) {
      let {
        tutorial: Uu,
        step: Zu,
        waitForClick: Xu = !1,
        onPrevious: lu
      } = uu;
      const qu = Eu && (0, cu.s)(Uu, Zu),
        fu = Eu && !Du(Uu, Zu),
        bu = Xu ? su : ju;
      let Nu = null;
      qu ? Nu = () => {
        null === lu || void 0 === lu || lu(), (0, cu.q)(Uu, Zu)
      } : fu && (Nu = () => {
        (0, cu.k)(Uu)
      }), (0, Cu.w)("popup", null !== bu && void 0 !== bu ? bu : ju, Nu, Eu && null !== bu, null, qu ? void 0 : "controller:menusSkipTutorial")
    }

    function Mu(uu) {
      let {
        tutorial: Eu,
        step: ju,
        text: su,
        waitForClick: Uu = !1,
        onPrevious: Zu
      } = uu;
      const {
        t: Xu
      } = (0, bu.A)(), lu = Du(Eu, ju);
      return (0, Nu.jsxs)(Nu.Fragment, {
        children: [(0, Nu.jsx)("div", {
          className: "TutorialStepText",
          children: su
        }), (0, Nu.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, cu.s)(Eu, ju) && (0, Nu.jsx)(qu.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Zu || void 0 === Zu || Zu(), (0, cu.q)(Eu, ju)
            },
            children: Xu("tutorial:back")
          }), !Uu && (0, Nu.jsx)(qu.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, cu.f)(ju)
            },
            padDefaultFocus: !0,
            children: Xu(lu ? "tutorial:done" : "tutorial:next")
          }), !lu && (0, Nu.jsx)(qu.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, cu.k)(Eu)
            },
            children: Xu("tutorial:skip")
          })]
        })]
      })
    }
    const eu = 6;

    function Gu(uu) {
      let {
        rect: Eu,
        margin: ju
      } = uu;
      const su = Math.max(0, Eu.top - ju),
        Uu = Eu.bottom + ju,
        Zu = Math.max(0, Eu.left - ju),
        Xu = Eu.right + ju;
      return (0, Nu.jsxs)(Nu.Fragment, {
        children: [(0, Nu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: su
          }
        }), (0, Nu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Uu,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Nu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: su,
            left: 0,
            width: Zu,
            height: Uu - su
          }
        }), (0, Nu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: su,
            left: Xu,
            right: 0,
            height: Uu - su
          }
        })]
      })
    }

    function pu(uu) {
      let {
        target: Eu,
        placement: ju,
        boxRef: su,
        className: qu,
        spotlight: Cu = !0,
        spotlightMargin: bu = eu,
        children: cu
      } = uu;
      const {
        getArrowProps: Ou,
        getTooltipProps: Yu,
        setTooltipRef: hu,
        setTriggerRef: Du,
        update: gu
      } = (0, lu.e)({
        placement: ju,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, bu]
      });
      (0, Zu.useLayoutEffect)((() => {
        Du(Eu)
      }), [Eu, Du]);
      const Mu = function(uu, Eu) {
        const [ju, su] = (0, Zu.useState)(null);
        return (0, Zu.useEffect)((() => {
          if (!Eu || !uu) return void su(null);
          let ju = 0,
            Uu = null;
          const Zu = () => {
            const Eu = uu.getBoundingClientRect();
            Uu && Eu.left === Uu.left && Eu.top === Uu.top && Eu.width === Uu.width && Eu.height === Uu.height || (Uu = Eu, su(Eu)), ju = requestAnimationFrame(Zu)
          };
          return Zu(), () => {
            cancelAnimationFrame(ju)
          }
        }), [uu, Eu]), ju
      }(Eu, Cu);
      (0, Zu.useEffect)((() => {
        null === gu || void 0 === gu || gu()
      }), [Mu, gu]), (0, Zu.useEffect)((() => {
        if (Cu || !Eu || !gu) return;
        const uu = new ResizeObserver((() => {
          gu()
        }));
        return uu.observe(Eu), Eu.parentElement && uu.observe(Eu.parentElement), () => {
          uu.disconnect()
        }
      }), [Eu, Cu, gu]), (0, Zu.useEffect)((() => {
        Cu && (null === Eu || void 0 === Eu || Eu.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [Eu, Cu]);
      const pu = (0, Zu.useCallback)((uu => {
        hu(uu), su && (su.current = uu)
      }), [hu, su]);
      return (0, Xu.createPortal)((0, Nu.jsxs)(Nu.Fragment, {
        children: [Mu && (0, Nu.jsx)(Gu, {
          rect: Mu,
          margin: bu
        }), (0, Nu.jsxs)("div", {
          ref: pu,
          ...Yu({
            className: Uu()("tooltip-container SmallTextLight TutorialStep", qu)
          }),
          children: [cu, (0, Nu.jsx)("div", {
            ...Ou({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, fu.g)())
    }
    const wu = (0, Zu.forwardRef)((function(uu, Eu) {
      let {
        placement: ju = "right",
        children: su,
        ...Uu
      } = uu;
      const Xu = hu(Uu),
        lu = (0, Zu.useRef)(null),
        qu = (0, Zu.useRef)(null);
      gu(Uu, Xu, lu, qu);
      const [fu, Cu] = (0, Zu.useState)(null), bu = su.ref, cu = (0, Zu.useCallback)((uu => {
        qu.current = uu, Cu(uu), Yu(Eu, uu), Yu(bu, uu)
      }), [Eu, bu]);
      return (0, Nu.jsxs)(Nu.Fragment, {
        children: [(0, Zu.cloneElement)(su, {
          ref: cu
        }), Xu && (0, Nu.jsx)(pu, {
          target: fu,
          placement: ju,
          boxRef: lu,
          children: (0, Nu.jsx)(Mu, {
            ...Uu
          })
        })]
      })
    }));

    function Ju(uu) {
      const Eu = hu(uu),
        ju = (0, Zu.useRef)(null);
      return gu(uu, Eu, ju, null), Eu ? (0, Xu.createPortal)((0, Nu.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Nu.jsx)("div", {
          ref: ju,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Nu.jsx)(Mu, {
            ...uu
          })
        })
      }), (0, fu.g)()) : null
    }
  },
  36998: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Yu,
      j: () => hu,
      k: () => lu,
      o: () => cu,
      q: () => Du,
      r: () => bu,
      t: () => Mu,
      x: () => Ou,
      y: () => gu
    });
    var su = ju(22),
      Uu = ju(24);
    const Zu = "clientGameInventoryButtonsChanged",
      Xu = new Map;

    function lu() {
      return [...Xu.values()].sort(((uu, Eu) => {
        var ju, su;
        return (null !== (ju = uu.order) && void 0 !== ju ? ju : 0) - (null !== (su = Eu.order) && void 0 !== su ? su : 0)
      }))
    }
    let qu = null;

    function fu(uu) {
      qu = uu
    }
    let Cu = !1;

    function bu(uu) {
      Cu = !0;
      try {
        uu.onClick()
      } finally {
        Cu = !1
      }
      uu.panel && "clientGame" === su.d.get("openInGameMenuName") && fu(uu.id)
    }

    function cu() {
      return Cu
    }

    function Nu() {
      return lu().filter((uu => uu.panel && !uu.disabled))
    }

    function Ou(uu) {
      const Eu = Nu(),
        ju = Eu.findIndex((uu => uu.id === qu));
      return !(ju < 0 || Eu.length < 2) && (bu(Eu[(ju + uu + Eu.length) % Eu.length]), !0)
    }

    function Yu() {
      return null !== qu && Nu().length > 1
    }

    function hu() {
      fu(null)
    }

    function Du() {
      "inventory" !== su.d.get("openInGameMenuName") && fu(null)
    }

    function gu() {
      const uu = qu;
      return fu(null), uu
    }

    function Mu(uu) {
      return Xu.set(uu.id, uu), Uu.h.TY(Zu, lu(), !0), () => {
        Xu.get(uu.id) === uu && (Xu.delete(uu.id), Uu.h.TY(Zu, lu()))
      }
    }
  },
  36992: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => hu,
      g: () => Du,
      k: () => cu,
      l: () => fu,
      m: () => Yu,
      n: () => Nu,
      o: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(36998);
    const lu = "clientGameUiChanged";
    let qu = null;

    function fu() {
      return qu
    }

    function Cu(uu, Eu) {
      const ju = {
        content: uu,
        menu: Eu
      };
      return qu = ju, Uu.h.TY(lu, qu, !0), () => {
        qu === ju && (qu = null, Ou = !1, hu(), Uu.h.TY(lu, null))
      }
    }
    let bu = null;

    function cu() {
      return bu
    }

    function Nu(uu) {
      return bu = uu, () => {
        bu === uu && (bu = null)
      }
    }
    let Ou = !1;

    function Yu() {
      const uu = su.d.get("openInGameMenuName");
      "clientGame" !== uu && (Ou = "inventory" === uu), (0, Xu.o)() || (0, Xu.j)(), (0, Zu.t)(Zu.b), su.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hu() {
      gu(!1)
    }

    function Du() {
      gu(Ou)
    }

    function gu(uu) {
      "clientGame" === su.d.get("openInGameMenuName") && su.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, Xu.j)(), Ou = !1
    }
  },
  37284: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => ru,
      E: () => Qu,
      G: () => iu,
      K: () => Vu,
      N: () => Wu,
      d: () => qu,
      f: () => ou,
      i: () => lu,
      k: () => Ku,
      n: () => au,
      p: () => pu,
      q: () => vu,
      s: () => mu,
      w: () => du
    });
    var su = ju(31);
    const Uu = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Zu = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Xu = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      lu = Zu.filter((uu => "docsButton" !== uu)),
      qu = Xu.filter((uu => "aiHelperButton" !== uu)),
      fu = "codeEditorTutorials",
      Cu = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      bu = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let cu = null,
      Nu = null;
    const Ou = new Set,
      Yu = new Set;
    let hu = null;
    const Du = new Set,
      gu = new Set;

    function Mu() {
      gu.forEach((uu => {
        uu()
      }))
    }

    function eu() {
      if (!cu) {
        const uu = su.k.getItem(fu);
        cu = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof uu && null !== uu ? uu : {}
        }
      }
      return cu
    }

    function Gu(uu) {
      const Eu = eu();
      Eu[uu] || (cu = {
        ...Eu,
        [uu]: !0
      }, su.k.setItem(fu, cu))
    }

    function pu(uu) {
      return "docsOverview" === uu ? Zu : "aiHelperOverview" === uu ? Xu : Nu ? Uu[Nu] : []
    }

    function wu(uu) {
      return ("worldCodeButton" !== uu || !eu().worldCodeIntroShown) && !Du.has(uu)
    }

    function Ju(uu) {
      var Eu;
      return (null === (Eu = hu) || void 0 === Eu ? void 0 : Eu.name) === uu ? hu.stepsDone : Ou
    }

    function du(uu, Eu) {
      if (! function(uu) {
          return hu ? hu.name === uu : "welcome" === uu
        }(uu) || !wu(Eu) || Ju(uu).has(Eu)) return !1;
      if (hu) return !0;
      const ju = Cu[Eu];
      return ju ? !eu()[ju] || Yu.has(Eu) : !eu()[bu[uu]]
    }

    function au(uu) {
      var Eu;
      return null !== (Eu = pu(uu).find((Eu => du(uu, Eu)))) && void 0 !== Eu ? Eu : null
    }

    function Pu(uu) {
      var Eu;
      Gu(bu[uu]), (null === (Eu = hu) || void 0 === Eu ? void 0 : Eu.name) === uu && (hu = null)
    }

    function ou(uu) {
      const Eu = (hu ? [hu.name] : ["welcome", "docsOverview"]).find((Eu => au(Eu) === uu));
      if (!Eu) return;
      Ju(Eu).add(uu);
      const ju = Cu[uu];
      ju && (Gu(ju), hu || Yu.add(uu)), null === au(Eu) && Pu(Eu), Mu()
    }

    function ku(uu, Eu) {
      const ju = pu(uu),
        su = Ju(uu);
      for (let Uu = ju.indexOf(Eu) - 1; Uu >= 0; Uu--)
        if (su.has(ju[Uu]) && wu(ju[Uu])) return ju[Uu];
      return null
    }

    function mu(uu, Eu) {
      return null !== ku(uu, Eu)
    }

    function vu(uu, Eu) {
      const ju = ku(uu, Eu);
      ju && (Ju(uu).delete(ju), Mu())
    }

    function Ku(uu) {
      Pu(uu), "welcome" === uu && pu("welcome").forEach((uu => {
        const Eu = Cu[uu];
        Eu && Gu(Eu)
      })), Mu()
    }

    function Vu(uu) {
      hu = {
        name: uu,
        stepsDone: new Set
      }, Mu()
    }

    function ru() {
      (hu || 0 !== Ou.size || 0 !== Yu.size) && (hu = null, Ou.clear(), Yu.clear(), Mu())
    }

    function Qu(uu, Eu) {
      const ju = Eu ? uu : Nu === uu ? null : Nu;
      ju !== Nu && (Nu = ju, Mu())
    }

    function iu(uu, Eu) {
      Du.has(uu) === Eu && (Eu ? Du.delete(uu) : Du.add(uu), Mu())
    }

    function Wu(uu) {
      return gu.add(uu), () => {
        gu.delete(uu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);