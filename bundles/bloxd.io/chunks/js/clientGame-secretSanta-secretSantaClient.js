export const id = 28;
export const ids = [28];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  38054: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Lr,
      f: () => Tr,
      h: () => vr,
      k: () => yr,
      m: () => Br
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(4302),
      Ir = Qr(360),
      fr = Qr(3404),
      Er = Qr(34),
      pr = Qr(2114),
      xr = Qr(43),
      mr = Qr(2128),
      Nr = Qr(26),
      Ur = Qr(2132),
      tr = Qr(1518),
      hr = Qr(9937),
      zr = Qr(2154),
      Yr = Qr(1251),
      nr = Qr(38056),
      er = Qr(1338);
    const Kr = 7e3;

    function yr() {
      const {
        loadingOverlayVisible: rr,
        openInGameMenuName: Sr,
        openEverythingMenuName: Qr
      } = (0, Nr.n)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return rr || null !== Sr || null !== Qr
    }

    function Br(rr, Sr, Qr) {
      const Wr = (0, Zr.useRef)(Qr);
      Wr.current = Qr;
      const ar = (0, Zr.useRef)({
        card: rr,
        ms: 0
      });
      (0, Zr.useEffect)((() => {
        if (Sr || null === rr) return;
        ar.current.card !== rr && (ar.current = {
          card: rr,
          ms: 0
        });
        const Qr = ar.current,
          Zr = performance.now(),
          jr = setTimeout((() => {
            Wr.current()
          }), Kr - Qr.ms);
        return () => {
          clearTimeout(jr), Qr.ms += performance.now() - Zr
        }
      }), [Sr, rr])
    }
    const Tr = (0, Zr.memo)((function() {
      const {
        isTouchScreen: rr
      } = (0, Nr.n)(["isTouchScreen"]), Sr = (0, tr.z)();
      (0, jr.e)();
      const Qr = (0, fr.l)("showBasicMovementControls"),
        [Wr, pr] = (0, Zr.useState)("movement"),
        mr = "movement" === Wr,
        Ur = Sr && !1 !== Qr;
      (0, Zr.useEffect)((() => {
        "padActions" !== Wr || Ur || pr("done")
      }), [Wr, Ur]);
      const hr = yr();
      Br("done" === Wr ? null : Wr, hr, (() => {
        pr("movement" === Wr && (0, tr.j)() ? "padActions" : "done")
      }));
      const zr = xr.j.getItem(Ir.Ib) > 2,
        Yr = (!rr || Sr) && mr && !1 !== Qr,
        Kr = "padActions" === Wr && Ur,
        Tr = (0, Zr.useRef)(null);
      (0, nr.h)(!zr && !hr && Yr, Tr), (0, nr.h)(!zr && !hr && Kr);
      const Xr = !zr && Yr;
      return (0, Zr.useEffect)((() => {
        Xr && !hr && Er.i.Jp("controlsTutorialShown", "movement")
      }), [Xr, hr]), zr ? (0, er.jsx)(lr, {
        showingMovementControls: !1
      }) : (0, er.jsxs)(er.Fragment, {
        children: [Yr ? (0, er.jsxs)("div", {
          ref: Tr,
          className: ar()("ControlsTutorialDiv", {
            Covered: hr
          }),
          children: [(0, er.jsx)(vr, {}), (0, er.jsx)(Lr, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, er.jsx)(Lr, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, Kr && (0, er.jsx)(Or, {
          covered: hr
        }), (0, er.jsx)(lr, {
          showingMovementControls: "done" !== Wr
        })]
      })
    }));

    function vr() {
      const rr = (0, tr.z)();
      return (0, er.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, er.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), rr && (0, er.jsx)(Ur.c, {
          noaAction: "forward"
        }), !rr && (0, er.jsxs)(er.Fragment, {
          children: [(0, er.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, er.jsx)(Ur.c, {
              noaAction: "forward"
            })
          }), (0, er.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, er.jsx)(Ur.c, {
              noaAction: "left"
            }), (0, er.jsx)(Ur.c, {
              noaAction: "backward"
            }), (0, er.jsx)(Ur.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function Or(rr) {
      let {
        covered: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Yr.E)(), Zr = (0, fr.l)("useInventory");
      return (0, er.jsxs)("div", {
        className: ar()("ControlsTutorialDiv", {
          Covered: Sr
        }),
        children: [(0, er.jsx)(Lr, {
          header: Qr("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, er.jsx)(Lr, {
          header: Qr("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Zr && (0, er.jsx)(Lr, {
          header: Qr("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, er.jsx)(Lr, {
          header: Qr("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Lr(rr) {
      let {
        header: Sr,
        noaAction: Qr
      } = rr;
      return (0, er.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, er.jsx)("div", {
          className: "KeyHeader",
          children: Sr
        }), (0, er.jsx)(Ur.c, {
          noaAction: Qr
        })]
      })
    }

    function lr(rr) {
      let {
        showingMovementControls: Sr
      } = rr;
      const {
        isTouchScreen: Qr
      } = (0, Nr.n)(["isTouchScreen"]), Wr = (0, tr.z)(), ar = (0, zr.c)("OpenShop"), [jr, Ir] = (0, Zr.useState)(!1), Ur = `SeenShopControls|${(0,mr.f)("connectedGame",(rr=>rr.gameNameWithVariation))}`, Yr = () => (!(0, tr.j)() || null !== (0, hr.d)("OpenShop")) && !xr.j.getItem(Ur) && pr.d.get("shopInfo") && !Sr, nr = () => (Ir(!0), xr.j.setItem(Ur, !0), (0, tr.j)() || Er.i.Jp("showShopTouchTutorial"), setTimeout((() => {
        Ir(!1)
      }), 7e3));
      (0, Zr.useEffect)((() => {
        let rr;
        const Sr = Er.i.subscribe("showShopTutorial", (() => {
          Yr() && (rr = nr())
        }));
        return () => {
          clearTimeout(rr), Er.i.unsubscribe(Sr)
        }
      }), [Sr]);
      const Kr = (0, Zr.useRef)();
      return (0, fr.h)("currencyAmounts", (rr => {
        if (Yr()) {
          let Qr = !1;
          const Zr = pr.d.get("shopInfo");
          for (const Wr in Zr) {
            for (const ar in Zr[Wr].items) {
              var Sr;
              const jr = Zr[Wr].items[ar];
              if (void 0 !== jr.currency && rr[jr.currency] && jr.cost <= rr[jr.currency].amount && (null === (Sr = jr.hidden) || void 0 === Sr || !Sr)) {
                Qr = !0;
                break
              }
            }
            if (Qr) break
          }
          Qr && (Kr.current = nr())
        }
      })), (0, Zr.useEffect)((() => () => {
        clearTimeout(Kr.current)
      }), [Sr]), !jr || Wr && !ar ? null : (0, er.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: Qr && !Wr ? null : (0, er.jsx)(Lr, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  38056: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      h: () => Ir,
      k: () => Er
    });
    var Zr = Qr(72);
    const Wr = new Set,
      ar = new Set;

    function jr() {
      for (const rr of ar) rr()
    }

    function Ir(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, Zr.useEffect)((() => rr ? function() {
        const rr = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return Wr.add(rr), jr(), () => {
          Wr.delete(rr) && jr()
        }
      }(Sr) : void 0), [rr, Sr]), (0, Zr.useEffect)((() => {
        rr && jr()
      }), [rr, Qr])
    }

    function fr() {
      const rr = [];
      for (const {
          element: Qr
        }
        of Wr) {
        var Sr;
        if (null === Qr) return {
          anywhere: !0,
          boxes: []
        };
        const Zr = null === (Sr = Qr.current) || void 0 === Sr ? void 0 : Sr.getBoundingClientRect();
        Zr && Zr.width > 0 && rr.push(Zr)
      }
      return {
        anywhere: !1,
        boxes: rr
      }
    }

    function Er(rr) {
      return ar.add(rr), () => {
        ar.delete(rr)
      }
    }
  },
  38214: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      d: () => fr,
      e: () => Er,
      h: () => pr,
      l: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(4302),
      ar = Qr(3515),
      jr = Qr(34);
    const Ir = 8,
      fr = "InGameHeaderContainer",
      Er = "TopRightElements";

    function pr(rr) {
      const [Sr] = (0, Wr.e)(), [Qr, ar] = (0, Zr.useState)(!1);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Sr = document.querySelector(`.${fr}`),
          Qr = document.querySelector(`.${Er}`),
          Zr = () => {
            const Zr = rr.getBoundingClientRect(),
              Wr = Sr ? Sr.getBoundingClientRect().right : 0,
              jr = Qr ? Qr.getBoundingClientRect().left : window.innerWidth,
              fr = Zr.left < Wr + Ir,
              Er = Zr.right > jr - Ir;
            ar(fr || Er)
          };
        Zr();
        const Wr = new ResizeObserver(Zr);
        return Wr.observe(rr), Sr && Wr.observe(Sr), Qr && Wr.observe(Qr), () => {
          Wr.disconnect()
        }
      }), [rr, Sr]), Qr
    }
    const xr = `.InGameUi .${fr}`,
      mr = [xr, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nr = 1e3;

    function Ur(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr,
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Wr, fr] = (0, Zr.useState)(null);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Zr = new ResizeObserver((() => {
          Er()
        }));
        Zr.observe(rr), Sr && Sr !== rr && Zr.observe(Sr);
        let Wr = [];

        function Er() {
          var ar, jr, Er;
          const pr = rr.getBoundingClientRect(),
            Nr = function() {
              const rr = mr.map((rr => document.querySelector(rr))).filter((rr => null !== rr));
              for (const Sr of rr) Wr.includes(Sr) || Zr.observe(Sr);
              for (const Sr of Wr) rr.includes(Sr) || Zr.unobserve(Sr);
              return Wr = rr, rr
            }(),
            Ur = Nr.filter((rr => {
              const Sr = rr.getBoundingClientRect();
              return Sr.width > 0 && Sr.height > 0 && pr.left < Sr.right + Ir && pr.right > Sr.left - Ir
            }));
          if (0 === Ur.length && !Qr) return void fr(null);
          const tr = Nr.find((rr => rr.matches(xr))),
            hr = Math.max(null !== (ar = null === tr || void 0 === tr ? void 0 : tr.getBoundingClientRect().bottom) && void 0 !== ar ? ar : 0, ...Ur.map((rr => rr.getBoundingClientRect().bottom))),
            zr = null !== (jr = null === Sr || void 0 === Sr || null === (Er = Sr.offsetParent) || void 0 === Er ? void 0 : Er.getBoundingClientRect().top) && void 0 !== jr ? jr : 0;
          fr(Math.ceil(hr + Ir / 2) - Math.round(zr))
        }
        const pr = setInterval(Er, Nr);
        Er(), window.addEventListener("resize", Er);
        const Ur = (0, jr.j)(ar.g, Er);
        return () => {
          Zr.disconnect(), clearInterval(pr), window.removeEventListener("resize", Er), Ur()
        }
      }), [rr, Sr, Qr]), Wr
    }
  },
  38175: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Wr,
      h: () => ar
    });
    var Zr = Qr(72);

    function Wr(rr) {
      return Ir(rr, fr)
    }

    function ar(rr) {
      return Ir(rr, Er)
    }

    function jr(rr) {
      return `${Math.floor(rr/60)}:${String(rr%60).padStart(2,"0")}`
    }

    function Ir(rr, Sr) {
      const [, Qr] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        if (0 === rr) return;
        const Zr = window.setInterval((() => {
          const Zr = Sr(rr);
          Qr((Sr => (null === Sr || void 0 === Sr ? void 0 : Sr.endsAt) === rr && Sr.value === Zr ? Sr : {
            endsAt: rr,
            value: Zr
          }))
        }), 250);
        return () => {
          window.clearInterval(Zr)
        }
      }), [rr, Sr]), Sr(rr)
    }

    function fr(rr) {
      return (rr - performance.now()) / 1e3
    }

    function Er(rr) {
      return Math.max(0, Math.ceil(fr(rr)))
    }
  },
  9937: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      h: () => Er,
      l: () => xr,
      p: () => pr,
      r: () => fr,
      u: () => Nr
    });
    var Zr = Qr(34),
      Wr = Qr(2156),
      ar = Qr(1541),
      jr = Qr(1518);
    const Ir = rr => {
        var Sr, Qr;
        return (0, jr.j)() && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getGlyphForNoaAction(rr)) && void 0 !== Sr ? Sr : null
      },
      fr = "controllerGlyph:",
      Er = rr => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconName(rr)) && void 0 !== Sr ? Sr : `${fr}xbox/${rr}`
      },
      pr = rr => rr.startsWith(fr),
      xr = rr => {
        var Sr, Qr;
        return pr(rr) && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconUrl(rr)) && void 0 !== Sr ? Sr : null
      },
      mr = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", jr.e, Wr.f, Wr.d],
      Nr = rr => {
        const Sr = mr.map((Sr => Zr.i.subscribe(Sr, rr)));
        return () => {
          for (const rr of Sr) Zr.i.unsubscribe(rr)
        }
      }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  40092: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    const Zr = 4,
      Wr = 12e3,
      ar = 1e3;
    class jr {
      constructor() {
        let {
          limit: rr = Zr,
          windowMs: Sr = Wr,
          spacingMs: Qr = ar,
          now: jr = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = rr, this.windowMs = Sr, this.spacingMs = Qr, this.now = jr
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const rr of this.priority) rr.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const rr = this.now();
        this.sent.push(rr), this.lastSentAt = rr, this.schedule(), this.notify()
      }
      addPriority(rr) {
        return this.priority.add(rr), () => {
          this.priority.delete(rr)
        }
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const rr of this.priority)
          if (rr.waiting()) return !0;
        return !1
      }
      prune() {
        const rr = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= rr;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const rr = this.now(),
          Sr = this.lastSentAt + this.spacingMs,
          Qr = Math.min(Sr > rr ? Sr : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Qr !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Qr - rr)))
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  41223: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => OQ
    });
    var Zr = Qr(208);
    const Wr = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var ar = Qr(72),
      jr = Qr(3425),
      Ir = Qr(1155),
      fr = Qr.n(Ir),
      Er = Qr(26),
      pr = Qr(1518),
      xr = Qr(43),
      mr = Qr(1251),
      Nr = Qr(38054),
      Ur = Qr(1573),
      tr = Qr(34);
    var hr = Qr(40054),
      zr = Qr(40045);
    const Yr = 2 * Math.PI * 17;

    function nr(rr, Sr, Qr) {
      const {
        santaMarketMinX: Zr,
        santaMarketMinZ: Wr,
        santaMarketSize: ar
      } = rr;
      return (0, zr.b)(Sr, Qr, {
        mapMinX: Zr,
        mapMaxX: Zr + ar,
        mapMinZ: Wr,
        mapMaxZ: Wr + ar
      })
    }

    function er(rr, Sr, Qr) {
      return function(rr, Sr, Qr, Zr, Wr) {
        const ar = Qr / 3,
          jr = rr => Math.min(2, Math.max(0, Math.floor(rr / ar)));
        return 3 * jr(Wr - Sr) + 2 - jr(Zr - rr)
      }(rr.santaMarketMinX, rr.santaMarketMinZ, rr.santaMarketSize, Sr, Qr)
    }
    const Kr = "secretSantaDistrictEntered",
      yr = "data-here";
    class Br {
      constructor() {
        this.here = -1, this.lastLeft = 0, this.lastTop = 0, this.lastAt = 0, this.drawnHere = -1, this.drawnCell = null, this.bannerAt = [], this.banner = null, this.bannerSeq = 0
      }
      reset() {
        this.here = -1, this.bannerAt = [], this.setBanner(null)
      }
      unbind() {
        this.drawnHere = -1, this.drawnCell = null
      }
      getBanner() {
        return this.banner && performance.now() - this.banner.at < 2200 ? this.banner : null
      }
      update(rr, Sr, Qr, Zr, Wr) {
        const ar = performance.now(),
          jr = 100 / rr.santaMarketSize,
          Ir = 4 + .008 * Math.min(1e3, ar - this.lastAt),
          fr = Math.hypot(Sr - this.lastLeft, Qr - this.lastTop) > Ir * jr;
        this.lastLeft = Sr, this.lastTop = Qr, this.lastAt = ar;
        const Er = fr ? -1 : this.here,
          pr = function(rr, Sr, Qr, Zr, Wr) {
            if (rr >= 0) {
              const Sr = 100 / 3,
                ar = rr % 3 * Sr,
                jr = Math.floor(rr / 3) * Sr;
              if (Qr >= ar - Wr && Qr <= ar + Sr + Wr && Zr >= jr - Wr && Zr <= jr + Sr + Wr) return rr
            }
            return Sr
          }(Er, Zr, Sr, Qr, 1.5 * jr);
        if (pr !== this.here) {
          var xr, mr;
          this.here = pr;
          const Sr = rr.santaMarketDistricts[pr];
          Er >= 0 && ar - (null !== (xr = this.bannerAt[pr]) && void 0 !== xr ? xr : -1 / 0) >= 8e3 ? (this.bannerAt[pr] = ar, this.bannerSeq++, this.setBanner({
            key: Sr,
            seq: this.bannerSeq,
            at: ar
          })) : (null === (mr = this.getBanner()) || void 0 === mr ? void 0 : mr.key) !== Sr && this.setBanner(null)
        }
        var Nr, Ur;
        this.here !== this.drawnHere && (null === (Nr = this.drawnCell) || void 0 === Nr || Nr.removeAttribute(yr), this.drawnCell = Wr.querySelector(`[data-district="${this.here}"]`), null === (Ur = this.drawnCell) || void 0 === Ur || Ur.setAttribute(yr, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(rr) {
        null === rr && null === this.banner || (this.banner = rr, tr.i.Jp(Kr, rr))
      }
    }
    class Tr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.at = rr, this.minSpanMs = Sr, this.element = null, this.animation = null
      }
      bind(rr, Sr, Qr) {
        this.element = rr, this.run(Sr, Qr)
      }
      run(rr) {
        var Sr;
        let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
        if (null === (Sr = this.animation) || void 0 === Sr || Sr.cancel(), this.animation = null, !this.element || null === rr) return;
        const Zr = Math.max(1, Qr, this.minSpanMs),
          Wr = Zr - Qr,
          ar = rr => Math.max(0, Math.min(1, rr / Zr));
        this.animation = this.element.animate([this.at(ar(Math.max(0, rr) + Wr)), this.at(ar(Wr))], {
          duration: Math.max(1, rr),
          fill: "forwards"
        })
      }
    }

    function vr() {
      return new Tr((rr => ({
        opacity: .5 + .5 * rr
      })), 5e3)
    }
    class Or {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(rr, Sr, Qr) {
        var Zr, Wr;
        this.forgetOldRoundTrips(rr);
        const ar = rr - this.lastPressAt;
        if (this.lastPressAt = rr, ar < this.quietMs() || this.awaitingTimedOut(rr) || "idle" !== this.state || Qr || rr < this.cooldownUntil || null === Sr) return 0;
        const jr = Math.max(0, Sr.awaySpeed) * ((null !== (Zr = this.averageRoundTrip) && void 0 !== Zr ? Zr : 300) / 1e3);
        return Sr.distance + jr > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = rr, this.ownRing = !0, this.faded = !1, 500 + (null !== (Wr = this.averageRoundTrip) && void 0 !== Wr ? Wr : 0))
      }
      turnedAway(rr, Sr, Qr) {
        if (!this.mayTurnAway(rr)) return !1;
        const Zr = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(Sr <= 40 + (Zr >= Qr ? 180 : 180 * Math.asin(Zr / Qr) / Math.PI) && Qr <= 5 + Math.max(.5, Zr)) && (this.faded = !0, !0)
      }
      mayTurnAway(rr) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && rr - this.predictedAt <= 350
      }
      vx(rr, Sr, Qr) {
        const Zr = Sr > 0 || !Qr,
          Wr = "predicted" === this.state;
        return Qr && (this.cooldownUntil = rr + 1e3), Zr && Wr ? this.learnRoundTrip(rr, rr - this.predictedAt) : Zr && this.awaitingTimedOut(rr) && (this.timedOutPressAt = null), Sr > 0 ? (this.state = "confirmed", Wr ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: Sr
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !Qr ? null : {
          kind: "end",
          done: Qr
        })
      }
      expired(rr) {
        var Sr;
        return !("predicted" !== this.state || rr - this.predictedAt < 1200 + (null !== (Sr = this.averageRoundTrip) && void 0 !== Sr ? Sr : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(rr, rr - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var rr;
        const Sr = this.recentRoundTrips.reduce(((rr, Sr) => {
          let {
            ms: Qr
          } = Sr;
          return Math.max(rr, Qr)
        }), null !== (rr = this.averageRoundTrip) && void 0 !== rr ? rr : 0);
        return Math.max(300, Sr > 0 ? 1.5 * Sr + 300 : 1e3)
      }
      awaitingTimedOut(rr) {
        return null !== this.timedOutPressAt && rr - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(rr) {
        for (; this.recentRoundTrips.length > 0 && rr - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(rr, Sr) {
        const Qr = Math.min(2e3, Math.max(0, Sr));
        this.averageRoundTrip = null === this.averageRoundTrip ? Qr : this.averageRoundTrip + .3 * (Qr - this.averageRoundTrip), this.recentRoundTrips.push({
          at: rr,
          ms: Qr
        })
      }
    }
    const Lr = "secretSantaHudChanged",
      lr = "SecretSantaHudShown",
      Xr = "SecretSantaMatchOrFinish",
      Pr = "SecretSantaNaughtyLock",
      Hr = ["Wrapping", "Naughty", "Cancelled"],
      qr = {
        shown: !1,
        market: null,
        hint: null,
        status: null,
        endsAt: 0,
        naughtyEndsAt: 0,
        treeLitAt: 0,
        nextHintAt: 0,
        pulse: 0,
        bells: 0
      };
    class Rr {
      constructor(rr) {
        this.onWrapStart = rr, this.view = qr, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = new Tr((rr => ({
          strokeDashoffset: 1 - rr
        }))), this.targetGlow = vr(), this.circleFade = vr(), this.targetFreshAt = 0, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new Or, this.district = new Br, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = rr => {
          this.map = rr, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = rr => {
          this.arrow = rr, this.drawnArrow = ""
        }, this.bindCountdown = rr => {
          this.countdown.bind(rr, this.hintMsLeft())
        }, this.bindTargetGlow = rr => {
          this.targetGlow.bind(rr, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindCircleFade = rr => {
          this.circleFade.bind(rr, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindRing = rr => {
          var Sr;
          this.stopRing(), this.ring = rr, this.ringFill = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".SecretSantaRingFill")) && void 0 !== Sr ? Sr : null;
          const Qr = this.view.naughtyEndsAt - performance.now();
          rr && Qr > 0 && this.runRing("Naughty", Qr)
        }, this.bindFlash = rr => {
          var Sr;
          null === (Sr = this.flashAnimation) || void 0 === Sr || Sr.cancel(), this.flashAnimation = null, this.flash = rr
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(rr) {
        this.district.reset(), this.Jp({
          ...this.view,
          market: rr,
          bells: 0
        })
      }
      receiveBells(rr) {
        rr !== this.view.bells && this.Jp({
          ...this.view,
          bells: rr
        })
      }
      receiveHint(rr) {
        const Sr = this.view.hint,
          Qr = gr(this.view.nextHintAt, performance.now() + rr.santaHintNextInMs, 1e3),
          Zr = Qr > this.view.nextHintAt,
          Wr = !Sr || Sr.santaHintContract !== rr.santaHintContract || Sr.santaHintDistrict !== rr.santaHintDistrict || Sr.santaHintCircleX !== rr.santaHintCircleX || Sr.santaHintCircleZ !== rr.santaHintCircleZ,
          ar = "hunting" === rr.santaHintState && (Zr || Wr) ? this.view.pulse + 1 : this.view.pulse;
        ar !== this.view.pulse && (this.targetFreshAt = performance.now()), this.Jp({
          ...this.view,
          hint: rr,
          nextHintAt: Qr,
          pulse: ar
        }), this.restartCountdown()
      }
      receiveStatus(rr) {
        var Sr, Qr;
        const Zr = performance.now(),
          Wr = gr(this.view.endsAt, Zr + rr.santaStatusMsLeft),
          ar = rr.santaStatusNaughtyMs > 0 ? gr(this.view.naughtyEndsAt, Zr + rr.santaStatusNaughtyMs) : 0,
          jr = 0 !== ar && 0 === this.view.naughtyEndsAt,
          Ir = null !== (Sr = rr.santaStatusTreeLitInMs) && void 0 !== Sr ? Sr : null,
          fr = null === Ir ? 0 : gr(this.view.treeLitAt, Zr + Ir);
        this.Jp({
          ...this.view,
          status: rr,
          endsAt: Wr,
          naughtyEndsAt: ar,
          treeLitAt: fr,
          shown: rr.santaStatusMsLeft > 0
        }), this.scheduleEnd(Wr - Zr), jr ? this.runRing("Naughty", rr.santaStatusNaughtyMs) : 0 === ar && null !== (Qr = this.ring) && void 0 !== Qr && Qr.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(rr, Sr) {
        if (!this.view.shown) return !1;
        const Qr = this.wrap.press(rr, Sr, this.view.naughtyEndsAt > rr);
        return Qr > 0 && this.startWrapRing(Math.max(1, Qr - (performance.now() - rr))), Qr > 0
      }
      aimAtWrap(rr, Sr) {
        const Qr = performance.now();
        return this.wrap.turnedAway(Qr, rr, Sr) && this.endWrapRing(!1), this.wrap.mayTurnAway(Qr)
      }
      receiveWrap(rr, Sr) {
        const Qr = this.wrap.vx(performance.now(), rr, Sr);
        "start" === (null === Qr || void 0 === Qr ? void 0 : Qr.kind) ? this.startWrapRing(Qr.ms): "end" === (null === Qr || void 0 === Qr ? void 0 : Qr.kind) && (Qr.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(Qr.done))
      }
      snowBlink() {
        var rr, Sr, Qr;
        null === (rr = this.flashAnimation) || void 0 === rr || rr.cancel();
        this.flashAnimation = null !== (Sr = null === (Qr = this.flash) || void 0 === Qr ? void 0 : Qr.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== Sr ? Sr : null
      }
      frame(rr, Sr) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: Qr,
          hint: Zr
        } = this.view;
        if (!this.view.shown || !Qr || !Sr || !this.arrow || !this.map) return;
        const [Wr, ar] = nr(Qr, Sr[0], Sr[2]), jr = Math.min(100, Math.max(0, Wr)), Ir = Math.min(100, Math.max(0, ar)), fr = Math.min(95, Math.max(5, jr)), Er = Math.min(95, Math.max(5, Ir)), pr = Math.round(180 * function(rr) {
          return rr - hr.i
        }(rr) / Math.PI), xr = `${fr.toFixed(1)}% ${Er.toFixed(1)}% ${pr}`;
        xr !== this.drawnArrow && (this.drawnArrow = xr, this.arrow.style.left = `${fr.toFixed(1)}%`, this.arrow.style.top = `${Er.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${pr}deg)`), this.district.update(Qr, jr, Ir, er(Qr, Sr[0], Sr[2]), this.map);
        const mr = "hunting" === (null === Zr || void 0 === Zr ? void 0 : Zr.santaHintState) ? Zr : null,
          Nr = null !== mr && function(rr, Sr) {
            let [Qr, , Zr] = Sr;
            const {
              santaHintCircleX: Wr,
              santaHintCircleZ: ar,
              santaHintCircleR: jr
            } = rr;
            return null !== Wr && null !== ar && jr > 0 && Math.hypot(Qr - Wr, Zr - ar) <= jr
          }(mr, Sr);
        Nr !== this.drawnInCircle && (this.drawnInCircle = Nr, this.map.toggleAttribute("data-in-circle", Nr))
      }
      dispose() {
        var rr;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(Xr), this.countdown.bind(null, null), this.targetGlow.bind(null, null), this.circleFade.bind(null, null), this.stopRing(), null === (rr = this.flashAnimation) || void 0 === rr || rr.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.ringFill = null, this.district.dispose(), document.body.classList.remove(lr, Pr), this.view = qr
      }
      Jp(rr) {
        this.view = rr, document.body.classList.toggle(lr, rr.shown), document.body.classList.toggle(Pr, rr.shown && 0 !== rr.naughtyEndsAt), rr.shown && (this.clearFinishEnd(), document.body.classList.add(Xr)), tr.i.Jp(Lr, rr, !0)
      }
      scheduleEnd(rr) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.Jp({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(Xr)
          }), 13e3)
        }), rr)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      targetFadeMs() {
        return this.view.nextHintAt - this.targetFreshAt
      }
      hintMsLeft() {
        var rr;
        return "hunting" === (null === (rr = this.view.hint) || void 0 === rr ? void 0 : rr.santaHintState) ? this.view.nextHintAt - performance.now() : null
      }
      restartCountdown() {
        const rr = this.hintMsLeft();
        this.countdown.run(rr), this.targetGlow.run(rr, this.targetFadeMs()), this.circleFade.run(rr, this.targetFadeMs())
      }
      runRing(rr, Sr) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(rr);
        const [Qr, Zr] = "Wrapping" === rr ? [Yr, 0] : [0, Yr], Wr = [{
          strokeDashoffset: Qr
        }, {
          strokeDashoffset: Zr
        }], ar = this.ringFill.animate(Wr, {
          duration: Sr,
          fill: "forwards"
        });
        this.ringAnimation = ar, "Naughty" === rr && (ar.onfinish = () => {
          this.ringAnimation === ar && this.stopRing()
        })
      }
      startWrapRing(rr) {
        this.runRing("Wrapping", rr), this.onWrapStart()
      }
      endWrapRing(rr) {
        const Sr = this.ring;
        if (null === Sr || void 0 === Sr || !Sr.classList.contains("Wrapping")) return;
        var Qr, Zr;
        rr ? null === (Qr = this.ringAnimation) || void 0 === Qr || Qr.finish() : null === (Zr = this.ringAnimation) || void 0 === Zr || Zr.pause();
        Sr.classList.toggle("Cancelled", !rr);
        const Wr = Sr.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: rr ? 1.6 : .8
        }], {
          duration: rr ? 350 : 300,
          easing: rr ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = Wr, Wr.onfinish = () => {
          this.ringEndAnimation === Wr && this.stopRing()
        }
      }
      stopRing() {
        var rr, Sr, Qr;
        null === (rr = this.ringAnimation) || void 0 === rr || rr.cancel(), null === (Sr = this.ringEndAnimation) || void 0 === Sr || Sr.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (Qr = this.ring) || void 0 === Qr || Qr.classList.remove(...Hr)
      }
    }

    function gr(rr, Sr) {
      return 0 === rr || Sr - rr > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? Sr : Math.min(rr, Sr)
    }
    var Cr = Qr(1338);
    const Mr = "secretSantaControlsShown",
      Gr = (0, ar.memo)((function(rr) {
        let {
          controller: Sr
        } = rr;
        const {
          isTouchScreen: Qr
        } = (0, Er.n)(["isTouchScreen"]), Zr = (0, pr.z)(), {
          t: Wr
        } = (0, mr.E)(), jr = (0, Ur.g)(Lr, Sr.getView()).shown, Ir = (0, Nr.k)(), [tr] = (0, ar.useState)((() => {
          var rr;
          return null !== (rr = xr.j.getItem(Mr)) && void 0 !== rr ? rr : 0
        })), [hr, zr] = (0, ar.useState)(tr >= 2), [Yr, nr] = (0, ar.useState)(!1), er = (0, ar.useRef)(!1), Kr = !hr && Yr && jr && (!Qr || Zr);
        return (0, ar.useEffect)((() => {
          if (!jr || Yr || hr) return;
          const rr = setTimeout((() => {
            nr(!0)
          }), 15500);
          return () => {
            clearTimeout(rr)
          }
        }), [jr, Yr, hr]), (0, ar.useEffect)((() => {
          !Kr || Ir || er.current || (er.current = !0, xr.j.setItem(Mr, tr + 1))
        }), [Kr, Ir, tr]), (0, Nr.m)(Kr ? "secretSanta" : null, Ir, (() => {
          zr(!0)
        })), Kr ? (0, Cr.jsxs)("div", {
          className: fr()("ControlsTutorialDiv", {
            Covered: Ir
          }),
          children: [(0, Cr.jsx)(Nr.h, {}), (0, Cr.jsx)(Nr.d, {
            header: "Jump",
            noaAction: "jump"
          }), (0, Cr.jsx)(Nr.d, {
            header: Wr("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), Zr && (0, Cr.jsx)(Nr.d, {
            header: Wr("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var kr = Qr(38154),
      Ar = Qr(4645),
      Vr = Qr(38214),
      ir = Qr(1171),
      wr = Qr(1448),
      cr = Qr(38175);
    const Fr = (0, ar.memo)((function(rr) {
      let {
        controller: Sr,
        naughtyEndsAt: Qr
      } = rr;
      return (0, Cr.jsxs)("div", {
        ref: Sr.bindRing,
        className: "SecretSantaRing",
        children: [(0, Cr.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, Cr.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, Cr.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: Yr,
              strokeDashoffset: Yr
            }
          })]
        }), Qr > 0 && (0, Cr.jsx)(or, {
          endsAt: Qr
        })]
      })
    }));

    function or(rr) {
      let {
        endsAt: Sr
      } = rr;
      const {
        t: Qr
      } = (0, mr.E)(), Zr = (0, cr.h)(Sr);
      return Zr <= 0 ? null : (0, Cr.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, Cr.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, Cr.jsx)(wr.c, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", Qr("secretSantaHud:naughty")]
        }), (0, Cr.jsx)("span", {
          children: Qr("secretSantaHud:naughtyWait", {
            seconds: Zr
          })
        })]
      })
    }
    const br = "user-magnifying-glass",
      Jr = "tree-christmas",
      Dr = {
        gingerbreadLane: "gingerbread-man",
        toyRow: "teddy-bear",
        iceRink: "ice-skate",
        carousel: "horse-saddle",
        greatTree: "tree-christmas",
        cocoaCorner: "mug-hot",
        lanternWalk: "lamp-street",
        marketGate: "archway",
        santasGrotto: "hat-santa"
      };

    function dr(rr) {
      return rr && Dr[rr] || "snowflake"
    }
    const sr = "SecretSantaDistrictBanner",
      ur = {
        animationDuration: "2200ms"
      },
      rS = (0, ar.memo)((function(rr) {
        let {
          controller: Sr
        } = rr;
        const {
          t: Qr
        } = (0, mr.E)(), Zr = (0, Ur.g)(Kr, Sr.district.getBanner());
        return Zr ? (0, Cr.jsxs)("div", {
          className: fr()(sr, `District-${Zr.key}`),
          style: ur,
          children: [(0, Cr.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, Cr.jsx)(wr.c, {
              name: dr(Zr.key)
            })
          }), Qr(`secretSantaHud:district_${Zr.key}`)]
        }, Zr.seq) : null
      }));
    var SS = Qr(2128),
      QS = Qr(1317);
    const ZS = "\x01",
      WS = "\x02";

    function aS(rr) {
      let {
        scarf: Sr,
        className: Qr
      } = rr;
      const {
        t: Zr
      } = (0, mr.E)();
      return (0, Cr.jsxs)("span", {
        className: fr()("SecretSantaScarf", `Scarf-${Sr}`, Qr),
        children: [(0, Cr.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), Zr(`secretSantaHud:scarfName_${Sr}`)]
      })
    }
    const jS = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function IS(rr) {
      let {
        hat: Sr,
        className: Qr
      } = rr;
      const {
        t: Zr
      } = (0, mr.E)();
      return (0, Cr.jsxs)("span", {
        className: fr()("SecretSantaHat", `Hat-${Sr}`, Qr),
        children: [(0, Cr.jsx)(wr.c, {
          name: jS[Sr]
        }), " ", Zr(`secretSantaHud:hatName_${Sr}`)]
      })
    }

    function fS(rr) {
      let {
        scarf: Sr,
        hat: Qr
      } = rr;
      const {
        t: Zr
      } = (0, mr.E)();
      return (0, Cr.jsx)(Cr.Fragment, {
        children: ES(Zr("secretSantaHud:lookName", {
          scarf: ZS,
          hat: WS
        }), (0, Cr.jsx)(aS, {
          scarf: Sr
        }), (0, Cr.jsx)(IS, {
          hat: Qr
        }))
      })
    }

    function ES(rr) {
      for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
      const Wr = [];
      return rr.split(ZS).forEach(((rr, Sr) => {
        Sr > 0 && Wr.push(Qr[0]), rr.split(WS).forEach(((rr, Sr) => {
          Sr > 0 && Wr.push(Qr[1]), Wr.push(rr)
        }))
      })), Wr.map(((rr, Sr) => (0, Cr.jsx)(ar.Fragment, {
        children: rr
      }, Sr)))
    }
    const pS = {
        circle: {
          icon: br,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: Jr,
          text: "secretSantaHud:targetLit"
        }
      },
      xS = (0, ar.memo)((function(rr) {
        var Sr, Qr, Zr;
        let {
          controller: Wr,
          market: jr,
          hint: Ir,
          nextHintAt: Er,
          pulse: pr
        } = rr;
        const {
          t: xr
        } = (0, mr.E)(), Nr = (0, SS.j)("hiddenPlayerNames"), Ur = null !== (Sr = null === Ir || void 0 === Ir ? void 0 : Ir.santaHintState) && void 0 !== Sr ? Sr : "none", tr = null !== (Qr = null === Ir || void 0 === Ir ? void 0 : Ir.santaHintTargetName) && void 0 !== Qr ? Qr : null, hr = null !== tr && (0, Cr.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, QS.c)(tr, Nr)
        }), zr = "hunting" === Ur && null !== Ir, Yr = zr && !0 === Ir.santaHintTreeLit, nr = function(rr, Sr) {
          const [Qr, Zr] = (0, ar.useState)(null);
          Sr && (null === Qr || void 0 === Qr ? void 0 : Qr.contract) !== rr && Zr({
            contract: rr,
            until: performance.now() + 8e3
          });
          const Wr = (null === Qr || void 0 === Qr ? void 0 : Qr.contract) === rr ? Qr.until : 0,
            jr = (0, cr.h)(Wr);
          0 !== Wr && 0 === jr && Zr({
            contract: rr,
            until: 0
          });
          return Sr && jr > 0
        }(null !== (Zr = null === Ir || void 0 === Ir ? void 0 : Ir.santaHintContract) && void 0 !== Zr ? Zr : 0, zr && Ir.santaHintCircleR > 0 && !Yr);
        let er, Kr = `${Ur}-${null!==tr&&void 0!==tr?tr:""}`;
        if (Ir && "none" !== Ur && hr)
          if ("lost" === Ur) er = (0, Cr.jsxs)(Cr.Fragment, {
            children: [(0, Cr.jsx)(wr.c, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", ES(xr("secretSantaHud:lostLine", {
              name: ZS
            }), hr)]
          });
          else if (null !== Ir.santaHintScarf) {
          var yr, Br;
          Kr += `-scarf-${Ir.santaHintScarf}-${null!==(yr=Ir.santaHintHat)&&void 0!==yr?yr:""}`, er = ES(xr("secretSantaHud:lookingFor", {
            name: ZS,
            clue: WS
          }), hr, (0, Cr.jsx)(NS, {
            scarf: Ir.santaHintScarf,
            hat: null !== (Br = Ir.santaHintHat) && void 0 !== Br ? Br : null
          }))
        } else {
          const rr = null === jr || void 0 === jr ? void 0 : jr.santaMarketDistricts[Ir.santaHintDistrict];
          Kr += `-district-${null!==rr&&void 0!==rr?rr:"?"}`, er = ES(xr("secretSantaHud:findIn", {
            name: ZS,
            district: WS
          }), hr, (0, Cr.jsxs)("span", {
            className: fr()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== rr && `District-${rr}`),
            children: [(0, Cr.jsx)(wr.c, {
              name: dr(rr)
            }), " ", void 0 !== rr ? xr(`secretSantaHud:district_${rr}`) : "?"]
          }))
        } else er = xr("secretSantaHud:finding");
        const [Tr, vr] = (0, ar.useState)({
          key: Kr,
          pulse: pr
        });
        Tr.key !== Kr && vr({
          key: Kr,
          pulse: pr
        });
        const Or = Tr.key === Kr && pr !== Tr.pulse;
        return (0, Cr.jsxs)("div", {
          className: fr()("SecretSantaTarget", `State-${Ur}`),
          children: [er, "hunting" === Ur && (0, Cr.jsxs)(Cr.Fragment, {
            children: [(0, Cr.jsx)(mS, {
              controller: Wr,
              nextHintAt: Er,
              note: Yr ? "lit" : nr ? "circle" : null
            }), Or && (0, Cr.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, pr)]
          })]
        }, Kr)
      }));

    function mS(rr) {
      let {
        controller: Sr,
        nextHintAt: Qr,
        note: Zr
      } = rr;
      const {
        t: Wr
      } = (0, mr.E)(), jr = (0, cr.h)(Qr), [Ir, fr] = (0, ar.useState)(null), [Er, pr] = (0, ar.useState)(null);
      (0, ar.useLayoutEffect)((() => {
        if (!Ir) return;
        const rr = () => {
          const rr = Ir.offsetWidth,
            Sr = Ir.offsetHeight;
          pr((Qr => Qr && Qr.width === rr && Qr.height === Sr ? Qr : {
            width: rr,
            height: Sr
          }))
        };
        rr();
        const Sr = new ResizeObserver(rr);
        return Sr.observe(Ir), () => {
          Sr.disconnect()
        }
      }), [Ir]);
      return (0, Cr.jsxs)(Cr.Fragment, {
        children: [(0, Cr.jsx)("div", {
          ref: fr,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: Er && Er.width > 8 && Er.height > 8 && (0, Cr.jsx)("svg", {
            viewBox: `0 0 ${Er.width} ${Er.height}`,
            children: (0, Cr.jsx)("path", {
              ref: Sr.bindCountdown,
              d: `M${Er.width/2} 2H${Er.width-2}V${Er.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === Zr ? (0, Cr.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, Cr.jsx)(wr.c, {
            name: "arrows-rotate"
          }), " ", Wr("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, jr)
          })]
        }) : (0, Cr.jsx)(US, {
          kind: Zr
        }, Zr)]
      })
    }

    function NS(rr) {
      let {
        scarf: Sr,
        hat: Qr
      } = rr;
      return (0, Cr.jsxs)(Cr.Fragment, {
        children: [(0, Cr.jsx)(aS, {
          scarf: Sr,
          className: "SecretSantaClueChip"
        }), null !== Qr && (0, Cr.jsxs)(Cr.Fragment, {
          children: [(0, Cr.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, Cr.jsx)(IS, {
            hat: Qr,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function US(rr) {
      let {
        kind: Sr
      } = rr;
      const {
        t: Qr
      } = (0, mr.E)(), {
        icon: Zr,
        text: Wr
      } = pS[Sr];
      return (0, Cr.jsxs)("div", {
        className: fr()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${Sr}`),
        children: [(0, Cr.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, Cr.jsx)(wr.c, {
            name: Zr
          })
        }), " ", Qr(Wr)]
      })
    }

    function tS(rr) {
      let {
        litAt: Sr,
        hunters: Qr
      } = rr;
      const {
        t: Zr
      } = (0, mr.E)(), Wr = (0, cr.h)(Sr);
      return (0, Cr.jsxs)("span", {
        className: fr()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: Wr <= 0
        }),
        children: [(0, Cr.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, Cr.jsx)(wr.c, {
            name: Jr
          })
        }), " ", Wr > 0 ? Zr("secretSantaHud:treeLightsOn", {
          seconds: Wr
        }) : Zr(Qr > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function hS(rr) {
      let {
        on: Sr
      } = rr;
      return (0, Cr.jsx)("span", {
        className: fr()("SecretSantaTreeLightString", {
          On: Sr
        }),
        "aria-hidden": "true"
      })
    }
    const zS = (0, ar.memo)((function(rr) {
      var Sr, Qr;
      let {
        controller: Zr,
        market: ar,
        hint: jr,
        pulse: Ir,
        treeLightsOn: Er
      } = rr;
      const {
        t: pr
      } = (0, mr.E)(), xr = null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.santaHintState) && void 0 !== Sr ? Sr : "none", Nr = "hunting" === xr && jr ? jr.santaHintDistrict : -1, Ur = null !== (Qr = null === ar || void 0 === ar ? void 0 : ar.santaMarketDistricts) && void 0 !== Qr ? Qr : Wr, tr = "hunting" === xr && ar && jr ? function(rr, Sr) {
        const {
          santaHintCircleX: Qr,
          santaHintCircleZ: Zr,
          santaHintCircleR: Wr,
          santaHintContract: ar
        } = Sr;
        if (null === Qr || null === Zr || Wr <= 0) return null;
        const [jr, Ir] = nr(rr, Qr, Zr), fr = 200 * Wr / rr.santaMarketSize, Er = YS(jr), pr = Math.sqrt(Math.max(0, (fr / 2) ** 2 - (Er - jr) ** 2)), xr = YS(Ir - pr >= 9 ? Ir - pr : Ir + pr);
        return {
          left: jr,
          top: Ir,
          size: fr,
          contract: ar,
          badgeLeft: Er,
          badgeTop: xr
        }
      }(ar, jr) : null;
      return (0, Cr.jsxs)("div", {
        ref: Zr.bindMap,
        className: fr()("SecretSantaMinimap", `State-${xr}`, {
          WithCircle: null !== tr
        }),
        children: [(0, Cr.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,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",
          alt: "",
          draggable: !1
        }), (0, Cr.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: Ur.map(((rr, Sr) => (0, Cr.jsxs)("div", {
            className: fr()("SecretSantaDistrict", `District-${rr}`, {
              Target: Sr === Nr
            }),
            "data-district": Sr,
            children: [(0, Cr.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, Cr.jsx)(wr.c, {
                name: dr(rr)
              })
            }), (0, Cr.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: pr(`secretSantaHud:district_${rr}`)
            }), "greatTree" === rr && (0, Cr.jsx)(hS, {
              on: Er
            })]
          }, rr)))
        }), Nr >= 0 && (0, Cr.jsxs)("div", {
          className: "SecretSantaTargetCell",
          style: {
            left: Nr % 3 * (100 / 3) + "%",
            top: Math.floor(Nr / 3) * (100 / 3) + "%"
          },
          children: [(0, Cr.jsx)("div", {
            ref: Zr.bindTargetGlow,
            className: "SecretSantaTargetGlow"
          }), (0, Cr.jsx)("div", {
            className: "SecretSantaDistrictPulse"
          }, Ir)]
        }), tr && (0, Cr.jsxs)("div", {
          ref: Zr.bindCircleFade,
          className: "SecretSantaCircleClip",
          children: [(0, Cr.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${tr.left}%`,
              top: `${tr.top}%`,
              width: `${tr.size}%`,
              height: `${tr.size}%`
            }
          }, tr.contract), (0, Cr.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${tr.badgeLeft}%`,
              top: `${tr.badgeTop}%`
            },
            children: (0, Cr.jsx)(wr.c, {
              name: br
            })
          }, `badge-${tr.contract}`)]
        }), (0, Cr.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, Cr.jsx)("div", {
            ref: Zr.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, Cr.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, Cr.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, Cr.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, Cr.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === xr && (0, Cr.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, Cr.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, Cr.jsx)(wr.c, {
              name: "snowflake"
            })
          }), (0, Cr.jsx)("span", {
            className: "SmallTextBold",
            children: pr("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function YS(rr) {
      return Math.min(91, Math.max(9, rr))
    }

    function nS(rr) {
      let {
        bells: Sr
      } = rr;
      return (0, Cr.jsx)("div", {
        className: fr()("SecretSantaFrost", `Bells-${Sr}`),
        "aria-hidden": "true",
        children: (0, Cr.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function eS(rr) {
      let {
        bells: Sr
      } = rr;
      const {
        t: Qr
      } = (0, mr.E)();
      return (0, Cr.jsxs)("span", {
        className: fr()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${Sr}`),
        children: [(0, Cr.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, Cr.jsx)(wr.c, {
            name: "bell"
          })
        }), " ", Qr(2 === Sr ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function KS(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, Ur.g)(Lr, Sr.getView());
      return (0, Cr.jsxs)(Cr.Fragment, {
        children: [Qr.shown && (0, Cr.jsx)(nS, {
          bells: Qr.bells
        }), (0, Cr.jsx)("div", {
          ref: Sr.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, Cr.jsx)(Fr, {
          controller: Sr,
          naughtyEndsAt: Qr.naughtyEndsAt
        }), Qr.shown && (0, Cr.jsxs)(Cr.Fragment, {
          children: [(0, Cr.jsx)(LS, {
            controller: Sr,
            status: Qr.status,
            endsAt: Qr.endsAt,
            bells: Qr.bells,
            treeLitAt: Qr.treeLitAt
          }), (0, Cr.jsx)(yS, {
            controller: Sr,
            market: Qr.market,
            hint: Qr.hint,
            pulse: Qr.pulse,
            treeLightsOn: 0 !== Qr.treeLitAt
          }), (0, Cr.jsx)(kr.d, {
            children: (0, Cr.jsx)(xS, {
              controller: Sr,
              market: Qr.market,
              hint: Qr.hint,
              nextHintAt: Qr.nextHintAt,
              pulse: Qr.pulse
            })
          })]
        })]
      })
    }

    function yS(rr) {
      let {
        controller: Sr,
        market: Qr,
        hint: Zr,
        pulse: Wr,
        treeLightsOn: jr
      } = rr;
      const [Ir, fr] = (0, ar.useState)(null);
      return (0, Ar.n)(Ir, BS), (0, Cr.jsx)("div", {
        ref: fr,
        className: "SecretSantaMapPanel",
        children: (0, Cr.jsx)(zS, {
          controller: Sr,
          market: Qr,
          hint: Zr,
          pulse: Wr,
          treeLightsOn: jr
        })
      })
    }

    function BS(rr) {
      const Sr = () => {
        const Sr = rr.getBoundingClientRect();
        let Qr = 0;
        for (const rr of OS()) rr.left < Sr.right && rr.right > Sr.left && (Qr = Math.max(Qr, rr.bottom));
        const Zr = (0, Ar.i)(Sr.left, Sr.right, Qr);
        TS(rr, "--ss-map-top", Qr + 6), TS(rr, "--ss-map-bottom", null === Zr ? null : (0, Ar.f)(rr) - Zr + 6)
      };
      Sr();
      const Qr = vS(Sr);
      return {
        layout: Sr,
        clear: () => {
          Qr(), rr.style.removeProperty("--ss-map-top"), rr.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function TS(rr, Sr, Qr) {
      const Zr = null === Qr ? "" : `${Math.ceil(Qr)}px`;
      rr.style.getPropertyValue(Sr) !== Zr && rr.style.setProperty(Sr, Zr)
    }

    function vS(rr) {
      const Sr = document.querySelector(`.${Vr.e}`),
        Qr = new ResizeObserver(rr);
      for (const ar of [document.querySelector(`.${Vr.d}`), Sr]) ar && Qr.observe(ar);
      const Zr = new MutationObserver(rr),
        Wr = null === Sr || void 0 === Sr ? void 0 : Sr.querySelector(".TopRightElementsRight");
      return Wr && Zr.observe(Wr, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        Qr.disconnect(), Zr.disconnect()
      }
    }

    function OS() {
      const rr = `.${Vr.e}`,
        Sr = document.querySelectorAll(`.${Vr.d}, ${rr} .TopRightIcon:not(.TopRightTray *), ${rr} .CondensedSocialBarInner`);
      return Array.from(Sr, (rr => rr.getBoundingClientRect())).filter((rr => rr.width > 0 && rr.height > 0))
    }
    const LS = (0, ar.memo)((function(rr) {
      let {
        controller: Sr,
        status: Qr,
        endsAt: Zr,
        bells: Wr,
        treeLitAt: jr
      } = rr;
      const {
        t: Ir
      } = (0, mr.E)(), [fr, Er] = (0, ar.useState)(null);
      return function(rr) {
        (0, ar.useLayoutEffect)((() => {
          if (!rr) return;
          const Sr = document.documentElement;
          let Qr = 0,
            Zr = window.innerWidth;
          const Wr = () => {
              rr.style.removeProperty("top");
              const Zr = OS(),
                Wr = Array.from(rr.children).filter((rr => rr instanceof HTMLElement && !rr.classList.contains(sr))),
                ar = rr.getBoundingClientRect(),
                jr = Wr.map((rr => {
                  const Sr = ar.left + rr.offsetLeft,
                    Qr = ar.top + rr.offsetTop;
                  return {
                    left: Sr,
                    right: Sr + rr.offsetWidth,
                    top: Qr,
                    bottom: Qr + rr.offsetHeight
                  }
                }));
              let Ir = 0;
              for (let rr = 0; rr < Zr.length; rr++) {
                let rr = Ir;
                for (const Sr of jr)
                  for (const Qr of Zr) {
                    Sr.left < Qr.right + Vr.c && Sr.right > Qr.left - Vr.c && Sr.top + Ir < Qr.bottom + 4 && Sr.bottom + Ir > Qr.top && (rr = Math.max(rr, Math.ceil(Qr.bottom + 4 - Sr.top)))
                  }
                if (rr === Ir) break;
                Ir = rr
              }
              Ir > 0 && (rr.style.top = `${rr.getBoundingClientRect().top+Ir}px`);
              const fr = Math.max(0, ...jr.map((rr => rr.bottom - ar.top)));
              (0, ir.f)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (Qr = Math.max(Qr, Math.ceil(rr.getBoundingClientRect().top + fr)), Sr.style.setProperty("--ss-top-bar-bottom", `${Qr}px`))
            },
            ar = () => {
              window.innerWidth !== Zr && (Zr = window.innerWidth, Qr = 0), Wr()
            };
          Wr();
          const jr = new ResizeObserver(Wr);
          jr.observe(rr);
          const Ir = vS(Wr),
            fr = new MutationObserver((rr => {
              rr.some((rr => {
                const Sr = rr.target instanceof Element ? rr.target : rr.target.parentElement;
                return !(null !== Sr && void 0 !== Sr && Sr.closest(".SecretSantaClock"))
              })) && Wr()
            }));
          fr.observe(rr, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const Er = new MutationObserver((rr => {
              rr.some((rr => rr.target instanceof Element && rr.target.classList.contains("Chat"))) && Wr()
            })),
            pr = document.querySelector(".TopLeftElements");
          return pr && Er.observe(pr, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", ar), () => {
            jr.disconnect(), Ir(), fr.disconnect(), Er.disconnect(), window.removeEventListener("resize", ar), Sr.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [rr])
      }(fr), (0, Cr.jsxs)("div", {
        ref: Er,
        className: "SecretSantaTop",
        children: [(0, Cr.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, Cr.jsx)(lS, {
            endsAt: Zr
          }), Qr && (0, Cr.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, Cr.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, Cr.jsx)(wr.c, {
                name: "star"
              }), " ", Qr.santaStatusPoints]
            }, Qr.santaStatusPoints), (0, Cr.jsx)("span", {
              className: "SecretSantaRank",
              children: Ir("secretSantaHud:rank", {
                rank: Qr.santaStatusRank,
                players: Qr.santaStatusPlayers
              })
            })]
          })]
        }), Qr && (0, Cr.jsx)(XS, {
          status: Qr,
          bells: Wr,
          treeLitAt: jr
        }), (0, Cr.jsx)(rS, {
          controller: Sr
        })]
      })
    }));

    function lS(rr) {
      let {
        endsAt: Sr
      } = rr;
      const Qr = (0, cr.h)(Sr);
      return 0 === Sr ? (0, Cr.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, Cr.jsxs)("span", {
        className: fr()("SecretSantaClock", {
          Urgent: Qr <= 30
        }),
        children: [(0, Cr.jsx)(wr.c, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, cr.c)(Qr)]
      })
    }
    const XS = (0, ar.memo)((function(rr) {
      let {
        status: Sr,
        bells: Qr,
        treeLitAt: Zr
      } = rr;
      const {
        t: Wr
      } = (0, mr.E)(), ar = Math.min(2, Math.max(0, Sr.santaStatusHunters)), jr = Sr.santaStatusScarf, Ir = (0, Cr.jsx)(fS, {
        scarf: jr,
        hat: Sr.santaStatusHat
      });
      let fr = (0, Cr.jsx)("span", {
        children: ES(Wr("secretSantaHud:youWearLook", {
          look: ZS
        }), Ir)
      });
      if (Sr.santaStatusKnown) {
        const rr = Sr.santaStatusHatKnown ? ES(Wr("secretSantaHud:spottedLook", {
          look: ZS
        }), Ir) : ES(Wr("secretSantaHud:spottedScarf", {
          scarf: ZS
        }), (0, Cr.jsx)(aS, {
          scarf: jr
        }));
        fr = (0, Cr.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, Cr.jsx)(wr.c, {
            name: "eye"
          }), " ", rr]
        })
      }
      let Er = null;
      return 0 !== Zr ? Er = (0, Cr.jsx)(tS, {
        litAt: Zr,
        hunters: ar
      }) : 0 !== Qr ? Er = (0, Cr.jsx)(eS, {
        bells: Qr
      }) : ar > 0 && (Er = (0, Cr.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, Cr.jsx)(wr.c, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", Wr(1 === ar ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, Cr.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [Er, fr]
      }, ar)
    }));
    var PS = Qr(2984);
    const HS = [226, 36, 52],
      qS = [246, 250, 255],
      RS = [168, 214, 255],
      gS = [24, 24, 28],
      CS = [44, 44, 50],
      MS = [112, 112, 122],
      GS = [255, 112, 36];

    function kS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [rr[0], rr[1], rr[2], Qr],
        maxColor: [Sr[0], Sr[1], Sr[2], Qr]
      }, {
        timeFraction: 1,
        minColor: [rr[0], rr[1], rr[2], 0],
        maxColor: [Sr[0], Sr[1], Sr[2], 0]
      }]
    }

    function AS(rr, Sr, Qr) {
      let [Zr, Wr, ar] = rr;
      return {
        pos1: [Zr - Sr, Wr, ar - Sr],
        pos2: [Zr + Sr, Wr + Qr, ar + Sr]
      }
    }

    function VS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Qr = .45 * Sr;
      return [{
        texture: "square_particle",
        ...AS(rr, Qr, 1.4 * Sr),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * Sr,
        maxSize: .34 * Sr,
        manualEmitCount: Math.round(26 * Sr),
        gravity: [0, .6, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }, {
          timeFraction: 1,
          factor: .2,
          factor2: .3
        }],
        colorGradients: kS(CS, MS, .95),
        hideDist: 48,
        blendMode: PS.e.Standard
      }, {
        texture: "square_particle",
        ...AS(rr, .6 * Qr, 1.2 * Sr),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * Sr),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [gS[0], gS[1], gS[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [gS[0], gS[1], gS[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: PS.e.Standard
      }, {
        texture: "glint",
        ...AS(rr, .7 * Qr, 1.2 * Sr),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * Sr),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: kS(GS, HS),
        hideDist: 48,
        blendMode: PS.e.Add
      }]
    }

    function iS(rr, Sr) {
      return {
        texture: "glint",
        ...AS(rr, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: Sr,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: kS(qS, RS),
        hideDist: 16,
        blendMode: PS.e.Add
      }
    }
    var wS = Qr(109);
    const cS = "harp_pling",
      FS = "cloth1",
      oS = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      bS = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      JS = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      DS = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      dS = "keysJingle",
      sS = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function uS(rr, Sr) {
      return 1 === Sr ? rr : {
        ...rr,
        manualEmitCount: Math.max(1, Math.round(rr.manualEmitCount * Sr))
      }
    }
    class rQ {
      constructor(rr, Sr) {
        this.api = rr, this.localPlayerId = Sr, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, wS.isMobile)() ? .6 : 1, rr.preloadSounds([cS, dS, FS])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(rr) {
        const Sr = this.hint;
        this.hint = rr, "none" !== rr.santaHintState && (Sr && Sr.santaHintContract === rr.santaHintContract ? null === Sr.santaHintScarf && null !== rr.santaHintScarf ? this.play(bS) : null === Sr.santaHintHat && null !== rr.santaHintHat && this.play(JS) : this.play(oS))
      }
      receiveStatus(rr) {
        (rr.santaStatusKnown && !this.spotted || rr.santaStatusHatKnown && !this.hatSpotted) && this.play(DS), this.spotted = rr.santaStatusKnown, this.hatSpotted = rr.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, FS, .5, 1.2)
      }
      setBells(rr) {
        const Sr = sS[rr];
        this.layers.forEach(((rr, Qr) => {
          var Zr;
          const [Wr, ar] = null !== (Zr = Sr[Qr]) && void 0 !== Zr ? Zr : [0, rr.rate];
          var jr;
          (0 === Wr && rr.target > 0 && rr.sound && this.stopLater(rr), rr.target = Wr, Wr > 0 && ar !== rr.rate) && (rr.rate = ar, null === (jr = rr.sound) || void 0 === jr || jr.rate(ar))
        }))
      }
      receiveFx(rr) {
        let {
          santaFxKind: Sr,
          santaFxAt: Qr
        } = rr;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === Sr) Qr && this.burst(VS(Qr));
          else if ("toTunnel" === Sr) this.later(300, (() => {
          const [rr, Sr, Qr] = this.ahead();
          this.burst([iS([rr, Sr - 1, Qr], 36)])
        }));
        else {
          const [rr, Sr, Qr] = this.ahead();
          this.burst(VS([rr, Sr - .6, Qr], .8))
        }
      }
      frame(rr) {
        const {
          cameraPosition: Sr,
          cameraDirection: Qr
        } = rr;
        this.camera[0] = Sr[0], this.camera[1] = Sr[1], this.camera[2] = Sr[2], this.look[0] = Qr[0], this.look[1] = Qr[1], this.look[2] = Qr[2];
        const Zr = performance.now(),
          Wr = Math.min(.1, (Zr - (this.lastFrameAt || Zr)) / 1e3);
        this.lastFrameAt = Zr;
        for (const jr of this.layers) {
          if (0 === jr.volume && 0 === jr.target && !jr.sound) continue;
          jr.target > 0 && !jr.sound && (jr.sound = this.api.playSound(this.localPlayerId, dS, 0, jr.rate, void 0, !0));
          const rr = (jr.target > jr.volume ? 3 : 1.2) * Wr;
          var ar;
          if (jr.volume = jr.target > jr.volume ? Math.min(jr.target, jr.volume + rr) : Math.max(jr.target, jr.volume - rr), jr.volume <= 0 && 0 === jr.target) this.silence(jr);
          else null === (ar = jr.sound) || void 0 === ar || ar.setRelativeVolume(jr.volume)
        }
      }
      dispose() {
        for (const rr of this.timers) window.clearTimeout(rr);
        this.timers.clear();
        for (const rr of this.layers) rr.target = 0, this.silence(rr)
      }
      silence(rr) {
        var Sr;
        null === (Sr = rr.sound) || void 0 === Sr || Sr.stop(), rr.sound = null, rr.volume = 0
      }
      stopLater(rr) {
        const Sr = rr.sound,
          Qr = window.setTimeout((() => {
            this.timers.delete(Qr), rr.sound === Sr && 0 === rr.target && this.silence(rr)
          }), rr.volume / 1.2 * 1e3 + 150);
        this.timers.add(Qr)
      }
      ahead() {
        const [rr, Sr, Qr] = this.camera, [Zr, Wr, ar] = this.look;
        return [rr + 1.8 * Zr, Sr + 1.8 * Wr - .35, Qr + 1.8 * ar]
      }
      later(rr, Sr) {
        const Qr = window.setTimeout((() => {
          this.timers.delete(Qr), Sr()
        }), rr);
        this.timers.add(Qr)
      }
      play(rr) {
        for (const [Sr, Qr, Zr] of rr) 0 === Sr ? this.api.playSound(this.localPlayerId, cS, Qr, Zr) : this.later(Sr, (() => {
          this.api.playSound(this.localPlayerId, cS, Qr, Zr)
        }))
      }
      burst(rr) {
        for (const Sr of rr) this.api.playParticleEffect(uS(Sr, this.particleShare))
      }
    }
    class SQ {
      constructor(rr) {
        this.api = rr, this.wait = null
      }
      vx(rr) {
        const Sr = performance.now();
        this.wait = {
          min: rr.santaFlyoverMin,
          max: rr.santaFlyoverMax,
          start: rr.santaFlyoverStart,
          until: Sr + rr.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: Sr
        }
      }
      frame(rr) {
        const Sr = this.wait;
        if (!Sr) return;
        const Qr = performance.now(),
          Zr = Qr - Sr.lastFrameAt;
        Sr.lastFrameAt = Qr, Qr > Sr.until ? this.wait = null : null !== Sr.loadedAt ? (Sr.settledFrames = Zr <= 60 ? Sr.settledFrames + 1 : 0, Sr.settledFrames >= 6 && Qr - Sr.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : rr && this.isLoaded(Sr, rr) && (Sr.loadedAt = Qr)
      }
      isLoaded(rr, Sr) {
        let {
          min: Qr,
          max: Wr,
          start: ar
        } = rr;
        if (Sr[0] < Qr[0] || Sr[0] > Wr[0] || Sr[2] < Qr[2] || Sr[2] > Wr[2]) return !1;
        const jr = Zr.i.hx,
          Ir = rr => rr.map((rr => Math.floor(rr / jr))),
          fr = [Ir(Sr), Ir(ar)],
          [Er, pr] = [Ir(Qr), Ir(Wr)];
        for (let Zr = Er[0]; Zr <= pr[0]; Zr++)
          for (let rr = Er[1]; rr <= pr[1]; rr++)
            for (let Sr = Er[2]; Sr <= pr[2]; Sr++) {
              if (fr.some((Qr => {
                  let [Wr, ar, jr] = Qr;
                  return (Zr - Wr) ** 2 + (rr - ar) ** 2 + (Sr - jr) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(Zr * jr, rr * jr, Sr * jr)) return !1
            }
        return !0
      }
    }
    var QQ = Qr(40447),
      ZQ = Qr(1364),
      WQ = Qr(40092);
    class aQ {
      constructor(rr) {
        this.api = rr, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.jx()
        }), 5e3), this.pacer = new WQ.c({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.jx()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.jx())
        })), this.jx()
      }
      resend() {
        this.sent = null, this.jx()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      jx() {
        var rr, Sr;
        const Qr = null !== (rr = null === (Sr = (0, ZQ.U)().gameRender()) || void 0 === Sr ? void 0 : Sr.canvas.width) && void 0 !== rr ? rr : 0;
        if (Qr <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const Zr = window.innerWidth / window.innerHeight,
          Wr = (0, QQ.e)(Qr),
          ar = this.sent;
        ar && Math.abs(Zr / ar.aspect - 1) < .02 && Math.abs(Wr / ar.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: Zr,
          tagScale: Wr
        }, this.api.sendCommand(`santaView ${Math.round(1e3*Zr)} ${Math.round(1e3*Wr)}`)) : this.heldBack = !0)
      }
    }
    var jQ = Qr(40721);
    const IQ = [20, 9, 20],
      fQ = [8, 12],
      EQ = .3,
      pQ = [.05, .13],
      xQ = {
        kind: "smokePuff"
      },
      mQ = [245, 250, 255],
      NQ = {
        sx: 900,
        perS: 80
      },
      UQ = {
        sx: 360,
        perS: 34
      };
    class tQ {
      constructor(rr) {
        this.api = rr, this.tier = (0, wS.isMobile)() ? UQ : NQ, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(rr) {
        const Sr = performance.now(),
          Qr = 0 === this.lastMs ? 0 : Math.min(Sr - this.lastMs, 250) / 1e3;
        if (this.lastMs = Sr, !this.api.particlesEnabled()) return void this.dispose();
        const Zr = Math.hypot(rr[0] - this.last[0], rr[1] - this.last[1], rr[2] - this.last[2]) > 20;
        if (this.last[0] = rr[0], this.last[1] = rr[1], this.last[2] = rr[2], Zr && this.dispose(), (Zr || Sr >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = Sr + 250, this.roofed = this.hasRoof(rr)), this.roofed) return void(this.budget = 0);
        const Wr = this.at;
        let ar;
        Wr[0] = rr[0], Wr[1] = rr[1] + 7, Wr[2] = rr[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * Qr, this.tier.perS / 4), ar = Math.floor(this.budget), this.budget -= ar) : (this.system = this.api.createParticles(this.opts(), {
          pos: Wr,
          half: IQ
        }), ar = Math.floor(this.tier.sx / 2)), ar > 0 && (this.system.moveTo(Wr, IQ), this.system.emit(ar))
      }
      dispose() {
        var rr;
        null === (rr = this.system) || void 0 === rr || rr.dispose(), this.system = null
      }
      hasRoof(rr) {
        let [Sr, Qr, Zr] = rr;
        const Wr = Math.floor(Sr),
          ar = Math.floor(Zr);
        let jr = 0;
        for (let Ir = Math.floor(Qr) + 1; Ir <= Math.floor(Qr) + 16; Ir++)
          if (jr = this.api.isSolidToPlayerBlockId(this.api.getBlockId(Wr, Ir, ar)) ? jr + 1 : 0, jr >= 4) return !0;
        return !1
      }
      opts() {
        const [rr, Sr, Qr] = mQ;
        return {
          texture: xQ,
          sx: this.tier.sx,
          minLifeTime: fQ[0] / jQ.c,
          maxLifeTime: fQ[1] / jQ.c,
          minEmitPower: 1.1 * jQ.c * .8,
          maxEmitPower: 1.1 * jQ.c * 1.2,
          minSize: pQ[0],
          maxSize: pQ[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [EQ, -1, EQ],
          colorGradients: [{
            timeFraction: 0,
            minColor: [rr, Sr, Qr, 0]
          }, {
            timeFraction: .12,
            minColor: [rr, Sr, Qr, .9]
          }, {
            timeFraction: .85,
            minColor: [rr, Sr, Qr, .9]
          }, {
            timeFraction: 1,
            minColor: [rr, Sr, Qr, 0]
          }],
          blendMode: PS.e.Standard
        }
      }
    }
    var hQ = Qr(38124);
    const zQ = [{
        icon: "eyes",
        key: "secretSantaHud:introSantas"
      }, {
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }],
      YQ = (0, ar.memo)((function() {
        const {
          t: rr
        } = (0, mr.E)();
        return (0, Cr.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, Cr.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, Cr.jsx)(wr.c, {
              name: "user-secret"
            }), (0, Cr.jsx)("span", {
              children: rr("secretSantaHud:introHeadline")
            })]
          }), zQ.map((Sr => {
            let {
              icon: Qr,
              key: Zr
            } = Sr;
            return (0, Cr.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, Cr.jsx)(wr.c, {
                name: Qr,
                fixedWidth: !0
              }), (0, Cr.jsx)("span", {
                children: rr(Zr)
              })]
            }, Zr)
          }))]
        })
      })),
      nQ = (0, ar.memo)((function(rr) {
        let {
          controller: Sr
        } = rr;
        return (0, Cr.jsx)("div", {
          ref: Sr.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, Cr.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, Cr.jsx)(YQ, {})
          })
        })
      })),
      eQ = "secretSantaIntroShown";
    class KQ {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = rr => {
          this.element = rr, this.drawn = -1
        }, this.bindIntro = rr => {
          this.intro = rr, this.drawnIntro = null
        }
      }
      receiveFlyover(rr) {
        this.armedUntil = performance.now() + rr + 3e3
      }
      frame(rr) {
        const Sr = performance.now(),
          Qr = this.snowAlpha(Sr);
        if (this.drawIntro(Sr, Qr), Qr <= 0) return null !== this.shownAt && (Sr < this.armedUntil && this.startIntro(Sr), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (Qr < 1 || rr && Sr >= this.armedUntil) return void this.draw(0);
          this.shownAt = Sr
        }
        this.draw(Math.min(1, (Sr - this.shownAt) / 300) * Qr)
      }
      startIntro(rr) {
        var Sr;
        const Qr = null !== (Sr = xr.j.getItem(eQ)) && void 0 !== Sr ? Sr : 0;
        xr.j.setItem(eQ, Qr + 1), this.introUntil = rr + (Qr < 3 ? 4900 : 3e3)
      }
      drawIntro(rr, Sr) {
        0 !== this.introUntil && (rr >= this.introUntil || Sr > 0) && (this.introUntil = 0);
        const Qr = 0 !== this.introUntil;
        this.intro && Qr !== this.drawnIntro && (this.drawnIntro = Qr, this.intro.classList.toggle("Shown", Qr))
      }
      snowAlpha(rr) {
        var Sr, Qr, Zr, Wr;
        (null === (Sr = this.fade) || void 0 === Sr || !Sr.isConnected) && rr - this.fadeLookedAt >= 250 && (this.fadeLookedAt = rr, this.fade = document.querySelector(`[${hQ.c}]`));
        const ar = null === (Qr = this.fade) || void 0 === Qr ? void 0 : Qr.style;
        if (!ar || "none" === ar.display) return 0;
        const jr = null !== (Zr = null === (Wr = ar.backgroundColor.match(/\d+/g)) || void 0 === Wr ? void 0 : Wr.slice(0, 3).map(Number)) && void 0 !== Zr ? Zr : [];
        return 3 === jr.length && jr.every((rr => rr >= 200)) && Number(ar.opacity) || 0
      }
      draw(rr) {
        const Sr = Math.round(100 * rr) / 100;
        this.element && Sr !== this.drawn && (this.drawn = Sr, this.element.style.opacity = String(Sr), this.element.style.display = Sr > 0 ? "flex" : "none")
      }
    }
    const yQ = (0, ar.memo)((function(rr) {
        let {
          controller: Sr
        } = rr;
        const {
          t: Qr
        } = (0, mr.E)();
        return (0, Cr.jsx)("div", {
          ref: Sr.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, Cr.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, Cr.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, Cr.jsx)(wr.c, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), Qr("secretSantaHud:titleName")]
            }), (0, Cr.jsx)(YQ, {})]
          })
        })
      })),
      BQ = "SecretSantaMode",
      TQ = Zr.i.Uz * Zr.i.playerEyeToHeightRatio;

    function vQ(rr) {
      document.body.classList.toggle("SecretSantaPodium", rr)
    }
    const OQ = function(rr, Sr, Qr, Zr) {
      let {
        localPlayerId: Wr
      } = Zr;
      const Ir = new Rr((() => {
          var rr;
          null === (rr = tr) || void 0 === rr || rr.wrapStarted()
        })),
        fr = new KQ,
        Er = [0, 0, 0];
      let pr = null;
      const xr = [0, 0, 0],
        mr = [0, 0, 0];
      let Nr = null,
        Ur = null,
        tr = null,
        hr = null,
        zr = null,
        Yr = null,
        nr = null;
      const er = rr => {
          Nr && null !== rr && rr !== Wr && !nr && (nr = {
            target: rr,
            at: performance.now(),
            first: null
          })
        },
        Kr = (rr, Sr) => {
          nr = null, Ir.pressGift(rr.at, Sr) && (pr = rr.target)
        },
        yr = (rr, Sr) => {
          if (null === pr) return;
          if (!rr.readDrawnPosition(pr, xr)) return void(pr = null);
          mr[0] = Sr[0], mr[1] = Sr[1] + TQ, mr[2] = Sr[2];
          const Qr = Math.hypot(xr[0] - Sr[0], xr[1] - Sr[1], xr[2] - Sr[2]);
          Ir.aimAtWrap(function(rr, Sr, Qr) {
            const Zr = Qr[0] - rr[0],
              Wr = Qr[2] - rr[2],
              ar = Math.hypot(Sr[0], Sr[2]);
            let jr = rr[1];
            const Ir = ar > 0 ? (Zr * Sr[0] + Wr * Sr[2]) / ar : 0;
            Ir > 0 && (jr += Sr[1] / ar * Ir), jr = Math.max(Qr[1], Math.min(Qr[1] + 1.8, jr));
            const fr = [Zr, jr - rr[1], Wr],
              Er = Math.hypot(fr[0], fr[1], fr[2]),
              pr = Math.hypot(Sr[0], Sr[1], Sr[2]);
            if (0 === Er || 0 === pr) return 0;
            const xr = (fr[0] * Sr[0] + fr[1] * Sr[1] + fr[2] * Sr[2]) / (Er * pr);
            return 180 * Math.acos(Math.max(-1, Math.min(1, xr))) / Math.PI
          }(mr, rr.getActionRay().direction, xr), Qr) || (pr = null)
        },
        Br = (rr, Sr, Qr) => {
          const Zr = [0, 0, 0];
          Qr && rr.readDrawnPosition(Sr.target, Zr) ? Sr.first ? Kr(Sr, function(rr, Sr, Qr, Zr) {
            const Wr = Qr[0] - rr[0],
              ar = Qr[1] - rr[1],
              jr = Qr[2] - rr[2],
              Ir = Math.hypot(Wr, ar, jr);
            return 0 === Ir || Zr <= 0 ? {
              distance: Ir,
              awaySpeed: 0
            } : {
              distance: Ir,
              awaySpeed: (Wr * (Qr[0] - Sr[0]) + ar * (Qr[1] - Sr[1]) + jr * (Qr[2] - Sr[2])) / Ir / Zr
            }
          }(Qr, Sr.first.pos, Zr, (performance.now() - Sr.first.at) / 1e3)) : Sr.first = {
            pos: Zr,
            at: performance.now()
          } : Kr(Sr, null)
        };
      return {
        onCreate: rr => {
          Nr = rr, document.body.classList.add(BQ), tr = new rQ(rr, Wr), hr = new tQ(rr), zr = new SQ(rr), Yr = new aQ(rr), Ur = (0, jr.H)((0, ar.createElement)(ar.Fragment, null, (0, ar.createElement)(KS, {
            controller: Ir
          }), (0, ar.createElement)(Gr, {
            controller: Ir
          }), (0, ar.createElement)(yQ, {
            controller: fr
          }), (0, ar.createElement)(nQ, {
            controller: fr
          })))
        },
        onClose: () => {
          var rr, Sr, Qr, Zr;
          document.body.classList.remove(BQ), vQ(!1), null === (rr = Ur) || void 0 === rr || rr(), Ur = null, Ir.dispose(), null === (Sr = tr) || void 0 === Sr || Sr.dispose(), tr = null, null === (Qr = hr) || void 0 === Qr || Qr.dispose(), hr = null, zr = null, null === (Zr = Yr) || void 0 === Zr || Zr.dispose(), Yr = null, Nr = null
        },
        onPlayerAltAction: (rr, Sr, Qr, Zr, Wr, ar) => {
          er(ar)
        },
        onPlayerAttackEntity: (rr, Sr) => {
          er(Sr)
        },
        onAfterRender: (rr, Sr) => {
          var Qr, Zr, ar, jr;
          const pr = null !== (Qr = Nr) && void 0 !== Qr && Qr.readDrawnPosition(Wr, Er) ? Er : null;
          nr && Nr && Br(Nr, nr, pr), Nr && pr && yr(Nr, pr), Ir.frame(Sr.cameraHeading, pr), null === (Zr = tr) || void 0 === Zr || Zr.frame(Sr), null === (ar = hr) || void 0 === ar || ar.onAfterRender(Sr.cameraPosition), null === (jr = zr) || void 0 === jr || jr.frame(pr), fr.frame(Ir.getView().shown)
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          var Qr;
          if ("secretSantaHint" === rr) Ir.receiveHint(Sr), null === (Qr = tr) || void 0 === Qr || Qr.receiveHint(Sr);
          else if ("secretSantaStatus" === rr) {
            var Zr;
            Ir.receiveStatus(Sr), null === (Zr = tr) || void 0 === Zr || Zr.receiveStatus(Sr)
          } else if ("secretSantaWrap" === rr) {
            nr && Kr(nr, null);
            const {
              santaWrapMs: rr,
              santaWrapDone: Qr
            } = Sr;
            Ir.receiveWrap(rr, Qr)
          } else if ("secretSantaMarket" === rr) {
            var Wr;
            null === (Wr = tr) || void 0 === Wr || Wr.reset(), Ir.receiveMarket(Sr)
          } else if ("secretSantaBells" === rr) {
            var ar;
            const {
              santaBellsLevel: rr
            } = Sr;
            Ir.receiveBells(rr), null === (ar = tr) || void 0 === ar || ar.setBells(rr)
          } else if ("secretSantaFx" === rr) {
            var jr;
            const rr = Sr;
            "toTunnel" === rr.santaFxKind && Ir.snowBlink(), null === (jr = tr) || void 0 === jr || jr.receiveFx(rr)
          } else if ("secretSantaFlyover" === rr) {
            var Er;
            null === (Er = zr) || void 0 === Er || Er.vx(Sr), fr.receiveFlyover(Sr.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === rr) {
            const {
              santaPodiumShown: rr
            } = Sr;
            var pr;
            if (vQ(rr), !rr) null === (pr = Yr) || void 0 === pr || pr.resend()
          }
        }
      }
    }
  },
  40054: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      i: () => Wr
    });
    var Zr = Qr(379);
    const Wr = (0, Zr.ub)([0, 0, -1]),
      ar = [{
        name: "S",
        bearing: (0, Zr.ub)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Zr.ub)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Wr
      }, {
        name: "W",
        bearing: (0, Zr.ub)([1, 0, 0])
      }]
  },
  40045: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      d: () => ar
    });
    var Zr = Qr(40054);

    function Wr(rr, Sr, Qr) {
      return [100 * (Qr.mapMaxX - rr) / (Qr.mapMaxX - Qr.mapMinX), 100 * (Sr - Qr.mapMinZ) / (Qr.mapMaxZ - Qr.mapMinZ)]
    }

    function ar(rr, Sr, Qr, ar) {
      const [jr, Ir] = Wr(rr, Sr, ar), fr = Zr.i - Qr;
      return {
        rotation: fr,
        transform: `rotate(${fr}rad) translate(-${jr}%, -${Ir}%)`
      }
    }
  },
  40721: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr,
      d: () => ar
    });
    const Zr = 1 / .6,
      Wr = {
        kind: "smokePuff"
      };
    class ar {
      constructor(rr, Sr, Qr) {
        this.style = rr, this.sx = Sr, this.half = Qr, this.particles = null, this.lastFrame = -1
      }
      emit(rr, Sr, Qr) {
        let ar = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Qr !== this.lastFrame && (this.lastFrame = Qr, this.particles || (this.particles = rr.createParticles(function(rr, Sr) {
          const [
            [Qr, ar, jr],
            [Ir, fr, Er]
          ] = rr.colours;
          return {
            texture: rr.soft ? Wr : "square_particle",
            sx: Sr,
            minLifeTime: rr.life[0] / Zr,
            maxLifeTime: rr.life[1] / Zr,
            minEmitPower: rr.power[0] * Zr,
            maxEmitPower: rr.power[1] * Zr,
            minSize: rr.size[0],
            maxSize: rr.size[1],
            emitRate: 0,
            gravity: [0, rr.lift * Zr * Zr, 0],
            dir1: [-rr.spread, 1, -rr.spread],
            dir2: [rr.spread, 1, rr.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Qr, ar, jr, rr.alpha],
              maxColor: [Ir, fr, Er, rr.alpha]
            }, {
              timeFraction: 1,
              minColor: [Qr, ar, jr, 0],
              maxColor: [Ir, fr, Er, 0]
            }],
            blendMode: rr.blendMode
          }
        }(this.style, this.sx), {
          pos: Sr,
          half: this.half
        })), this.particles.moveTo(Sr, this.half), this.particles.emit(ar), !0)
      }
      dispose() {
        var rr;
        null === (rr = this.particles) || void 0 === rr || rr.stop(), this.particles = null
      }
    }
  },
  40447: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    const Zr = 1400,
      Wr = .45;

    function ar(rr) {
      return rr < Zr ? Math.pow(Zr / rr, Wr) : 1
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);