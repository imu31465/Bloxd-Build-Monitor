export const id = 224;
export const ids = [224];
export const modules = {
  37084: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => mp,
      h: () => jp,
      k: () => kp,
      o: () => yp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(62),
      Sp = cp(82),
      xp = cp(1396),
      Lp = cp(1480),
      Yp = cp(1387),
      Dp = cp(1295),
      Ap = cp(1201),
      Pp = cp(37089),
      Wp = cp(1112);

    function yp(pp) {
      const [ip, cp] = (0, Ip.useState)((() => (0, Pp.k)(pp)));
      return (0, Ip.useEffect)((() => (cp((0, Pp.k)(pp)), (0, Pp.I)((() => {
        cp((0, Pp.k)(pp))
      })))), [pp]), ip
    }

    function Up(pp, ip) {
      "function" === typeof pp ? pp(ip) : pp && (pp.current = ip)
    }

    function wp(pp) {
      let {
        tutorial: ip,
        step: cp,
        enabled: Op = !0
      } = pp;
      const op = yp(ip);
      return Op && op === cp
    }

    function vp(pp, ip) {
      const cp = (0, Pp.n)(pp),
        Op = cp.indexOf(ip);
      return !cp.slice(Op + 1).some((ip => (0, Pp.u)(pp, ip)))
    }

    function tp(pp, ip, cp, Op) {
      let {
        tutorial: op,
        step: Ip,
        waitForClick: Sp = !1,
        onPrevious: xp
      } = pp;
      const Lp = ip && (0, Pp.t)(op, Ip),
        Yp = ip && !vp(op, Ip),
        Ap = Sp ? Op : cp;
      let Wp = null;
      Lp ? Wp = () => {
        null === xp || void 0 === xp || xp(), (0, Pp.r)(op, Ip)
      } : Yp && (Wp = () => {
        (0, Pp.j)(op)
      }), (0, Dp.x)("popup", null !== Ap && void 0 !== Ap ? Ap : cp, Wp, ip && null !== Ap, null, Lp ? void 0 : "controller:menusSkipTutorial")
    }

    function Hp(pp) {
      let {
        tutorial: ip,
        step: cp,
        text: Op,
        waitForClick: op = !1,
        onPrevious: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Ap.H)(), xp = vp(ip, cp);
      return (0, Wp.jsxs)(Wp.Fragment, {
        children: [(0, Wp.jsx)("div", {
          className: "TutorialStepText",
          children: Op
        }), (0, Wp.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Pp.t)(ip, cp) && (0, Wp.jsx)(Lp.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Ip || void 0 === Ip || Ip(), (0, Pp.r)(ip, cp)
            },
            children: Sp("tutorial:back")
          }), !op && (0, Wp.jsx)(Lp.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Pp.d)(cp)
            },
            padDefaultFocus: !0,
            children: Sp(xp ? "tutorial:done" : "tutorial:next")
          }), !xp && (0, Wp.jsx)(Lp.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Pp.j)(ip)
            },
            children: Sp("tutorial:skip")
          })]
        })]
      })
    }
    const dp = 6;

    function ep(pp) {
      let {
        rect: ip,
        margin: cp
      } = pp;
      const Op = Math.max(0, ip.top - cp),
        op = ip.bottom + cp,
        Ip = Math.max(0, ip.left - cp),
        Sp = ip.right + cp;
      return (0, Wp.jsxs)(Wp.Fragment, {
        children: [(0, Wp.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Op
          }
        }), (0, Wp.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: op,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Wp.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Op,
            left: 0,
            width: Ip,
            height: op - Op
          }
        }), (0, Wp.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Op,
            left: Sp,
            right: 0,
            height: op - Op
          }
        })]
      })
    }

    function jp(pp) {
      let {
        target: ip,
        placement: cp,
        boxRef: Op,
        className: Lp,
        spotlight: Dp = !0,
        spotlightMargin: Ap = dp,
        children: Pp
      } = pp;
      const {
        getArrowProps: yp,
        getTooltipProps: Up,
        setTooltipRef: wp,
        setTriggerRef: vp,
        update: tp
      } = (0, xp.c)({
        placement: cp,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Ap]
      });
      (0, Ip.useLayoutEffect)((() => {
        vp(ip)
      }), [ip, vp]);
      const Hp = function(pp, ip) {
        const [cp, Op] = (0, Ip.useState)(null);
        return (0, Ip.useEffect)((() => {
          if (!ip || !pp) return void Op(null);
          let cp = 0,
            op = null;
          const Ip = () => {
            const ip = pp.getBoundingClientRect();
            op && ip.left === op.left && ip.top === op.top && ip.width === op.width && ip.height === op.height || (op = ip, Op(ip)), cp = requestAnimationFrame(Ip)
          };
          return Ip(), () => {
            cancelAnimationFrame(cp)
          }
        }), [pp, ip]), cp
      }(ip, Dp);
      (0, Ip.useEffect)((() => {
        null === tp || void 0 === tp || tp()
      }), [Hp, tp]), (0, Ip.useEffect)((() => {
        if (Dp || !ip || !tp) return;
        const pp = new ResizeObserver((() => {
          tp()
        }));
        return pp.observe(ip), ip.parentElement && pp.observe(ip.parentElement), () => {
          pp.disconnect()
        }
      }), [ip, Dp, tp]), (0, Ip.useEffect)((() => {
        Dp && (null === ip || void 0 === ip || ip.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [ip, Dp]);
      const jp = (0, Ip.useCallback)((pp => {
        wp(pp), Op && (Op.current = pp)
      }), [wp, Op]);
      return (0, Sp.createPortal)((0, Wp.jsxs)(Wp.Fragment, {
        children: [Hp && (0, Wp.jsx)(ep, {
          rect: Hp,
          margin: Ap
        }), (0, Wp.jsxs)("div", {
          ref: jp,
          ...Up({
            className: op()("tooltip-container SmallTextLight TutorialStep", Lp)
          }),
          children: [Pp, (0, Wp.jsx)("div", {
            ...yp({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Yp.g)())
    }
    const kp = (0, Ip.forwardRef)((function(pp, ip) {
      let {
        placement: cp = "right",
        children: Op,
        ...op
      } = pp;
      const Sp = wp(op),
        xp = (0, Ip.useRef)(null),
        Lp = (0, Ip.useRef)(null);
      tp(op, Sp, xp, Lp);
      const [Yp, Dp] = (0, Ip.useState)(null), Ap = Op.ref, Pp = (0, Ip.useCallback)((pp => {
        Lp.current = pp, Dp(pp), Up(ip, pp), Up(Ap, pp)
      }), [ip, Ap]);
      return (0, Wp.jsxs)(Wp.Fragment, {
        children: [(0, Ip.cloneElement)(Op, {
          ref: Pp
        }), Sp && (0, Wp.jsx)(jp, {
          target: Yp,
          placement: cp,
          boxRef: xp,
          children: (0, Wp.jsx)(Hp, {
            ...op
          })
        })]
      })
    }));

    function mp(pp) {
      const ip = wp(pp),
        cp = (0, Ip.useRef)(null);
      return tp(pp, ip, cp, null), ip ? (0, Sp.createPortal)((0, Wp.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Wp.jsx)("div", {
          ref: cp,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Wp.jsx)(Hp, {
            ...pp
          })
        })
      }), (0, Yp.g)()) : null
    }
  },
  36804: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => tp,
      b: () => Ip,
      d: () => Up,
      f: () => wp,
      j: () => xp,
      n: () => Pp,
      q: () => vp,
      u: () => Ap,
      w: () => Hp
    });
    var Op = cp(25),
      op = cp(34);
    const Ip = "clientGameInventoryButtonsChanged",
      Sp = new Map;

    function xp() {
      return [...Sp.values()].sort(((pp, ip) => {
        var cp, Op;
        return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
      }))
    }
    let Lp = null;

    function Yp(pp) {
      Lp = pp
    }
    let Dp = !1;

    function Ap(pp) {
      Dp = !0;
      try {
        pp.onClick()
      } finally {
        Dp = !1
      }
      pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
    }

    function Pp() {
      return Dp
    }

    function Wp() {
      return xp().filter((pp => pp.panel && !pp.disabled))
    }

    function yp(pp) {
      const ip = Wp(),
        cp = ip.findIndex((pp => pp.id === Lp));
      return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
    }

    function Up() {
      return null !== Lp && Wp().length > 1
    }

    function wp() {
      Yp(null)
    }

    function vp() {
      "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
    }

    function tp() {
      const pp = Lp;
      return Yp(null), pp
    }

    function Hp(pp) {
      return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
        Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
      }
    }
  },
  36799: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Dp,
      d: () => xp,
      h: () => wp,
      l: () => vp,
      o: () => Pp,
      s: () => Yp,
      t: () => Up,
      x: () => Wp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(36804);
    const xp = "clientGameUiChanged";
    let Lp = null;

    function Yp() {
      return Lp
    }

    function Dp(pp, ip) {
      const cp = {
        content: pp,
        menu: ip
      };
      return Lp = cp, op.m.GA(xp, Lp, !0), () => {
        Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
      }
    }
    let Ap = null;

    function Pp() {
      return Ap
    }

    function Wp(pp) {
      return Ap = pp, () => {
        Ap === pp && (Ap = null)
      }
    }
    let yp = !1;

    function Up() {
      const pp = Op.c.get("openInGameMenuName");
      "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wp() {
      tp(!1)
    }

    function vp() {
      tp(yp)
    }

    function tp(pp) {
      "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
        openInGameMenuName: pp ? "inventory" : null
      }), pp || (0, Sp.f)(), yp = !1
    }
  },
  37089: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => Np,
      D: () => Tp,
      H: () => Jp,
      I: () => fp,
      b: () => Lp,
      d: () => Cp,
      g: () => xp,
      j: () => Qp,
      k: () => qp,
      n: () => jp,
      r: () => lp,
      t: () => Xp,
      u: () => Rp,
      y: () => Bp
    });
    var Op = cp(44);
    const op = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Ip = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Sp = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      xp = Ip.filter((pp => "docsButton" !== pp)),
      Lp = Sp.filter((pp => "aiHelperButton" !== pp)),
      Yp = "codeEditorTutorials",
      Dp = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Ap = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Pp = null,
      Wp = null;
    const yp = new Set,
      Up = new Set;
    let wp = null;
    const vp = new Set,
      tp = new Set;

    function Hp() {
      tp.forEach((pp => {
        pp()
      }))
    }

    function dp() {
      if (!Pp) {
        const pp = Op.h.getItem(Yp);
        Pp = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof pp && null !== pp ? pp : {}
        }
      }
      return Pp
    }

    function ep(pp) {
      const ip = dp();
      ip[pp] || (Pp = {
        ...ip,
        [pp]: !0
      }, Op.h.setItem(Yp, Pp))
    }

    function jp(pp) {
      return "docsOverview" === pp ? Ip : "aiHelperOverview" === pp ? Sp : Wp ? op[Wp] : []
    }

    function kp(pp) {
      return ("worldCodeButton" !== pp || !dp().worldCodeIntroShown) && !vp.has(pp)
    }

    function mp(pp) {
      var ip;
      return (null === (ip = wp) || void 0 === ip ? void 0 : ip.name) === pp ? wp.stepsDone : yp
    }

    function Rp(pp, ip) {
      if (! function(pp) {
          return wp ? wp.name === pp : "welcome" === pp
        }(pp) || !kp(ip) || mp(pp).has(ip)) return !1;
      if (wp) return !0;
      const cp = Dp[ip];
      return cp ? !dp()[cp] || Up.has(ip) : !dp()[Ap[pp]]
    }

    function qp(pp) {
      var ip;
      return null !== (ip = jp(pp).find((ip => Rp(pp, ip)))) && void 0 !== ip ? ip : null
    }

    function Mp(pp) {
      var ip;
      ep(Ap[pp]), (null === (ip = wp) || void 0 === ip ? void 0 : ip.name) === pp && (wp = null)
    }

    function Cp(pp) {
      const ip = (wp ? [wp.name] : ["welcome", "docsOverview"]).find((ip => qp(ip) === pp));
      if (!ip) return;
      mp(ip).add(pp);
      const cp = Dp[pp];
      cp && (ep(cp), wp || Up.add(pp)), null === qp(ip) && Mp(ip), Hp()
    }

    function Ep(pp, ip) {
      const cp = jp(pp),
        Op = mp(pp);
      for (let op = cp.indexOf(ip) - 1; op >= 0; op--)
        if (Op.has(cp[op]) && kp(cp[op])) return cp[op];
      return null
    }

    function Xp(pp, ip) {
      return null !== Ep(pp, ip)
    }

    function lp(pp, ip) {
      const cp = Ep(pp, ip);
      cp && (mp(pp).delete(cp), Hp())
    }

    function Qp(pp) {
      Mp(pp), "welcome" === pp && jp("welcome").forEach((pp => {
        const ip = Dp[pp];
        ip && ep(ip)
      })), Hp()
    }

    function Jp(pp) {
      wp = {
        name: pp,
        stepsDone: new Set
      }, Hp()
    }

    function Bp() {
      (wp || 0 !== yp.size || 0 !== Up.size) && (wp = null, yp.clear(), Up.clear(), Hp())
    }

    function Np(pp, ip) {
      const cp = ip ? pp : Wp === pp ? null : Wp;
      cp !== Wp && (Wp = cp, Hp())
    }

    function Tp(pp, ip) {
      vp.has(pp) === ip && (ip ? vp.delete(pp) : vp.add(pp), Hp())
    }

    function fp(pp) {
      return tp.add(pp), () => {
        tp.delete(pp)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);