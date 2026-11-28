export const id = 28;
export const ids = [28];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  38141: (dd, Od, md) => {
    md.d(Od, {
      e: () => Bd,
      h: () => Jd,
      j: () => Ud,
      l: () => wd,
      m: () => Ed
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(4308),
      Kd = md(387),
      hd = md(3403),
      vd = md(32),
      Qd = md(2116),
      td = md(46),
      od = md(2125),
      Nd = md(29),
      qd = md(2130),
      Hd = md(1498),
      yd = md(9965),
      bd = md(2149),
      Td = md(1238),
      pd = md(38143),
      Yd = md(1341);
    const gd = 7e3;

    function wd() {
      const {
        loadingOverlayVisible: dd,
        openInGameMenuName: Od,
        openEverythingMenuName: md
      } = (0, Nd.p)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return dd || null !== Od || null !== md
    }

    function Ed(dd, Od, md) {
      const Fd = (0, Wd.useRef)(md);
      Fd.current = md;
      const Rd = (0, Wd.useRef)({
        card: dd,
        ms: 0
      });
      (0, Wd.useEffect)((() => {
        if (Od || null === dd) return;
        Rd.current.card !== dd && (Rd.current = {
          card: dd,
          ms: 0
        });
        const md = Rd.current,
          Wd = performance.now(),
          Xd = setTimeout((() => {
            Fd.current()
          }), gd - md.ms);
        return () => {
          clearTimeout(Xd), md.ms += performance.now() - Wd
        }
      }), [Od, dd])
    }
    const Jd = (0, Wd.memo)((function() {
      const {
        isTouchScreen: dd
      } = (0, Nd.p)(["isTouchScreen"]), Od = (0, Hd.C)();
      (0, Xd.b)();
      const md = (0, hd.j)("showBasicMovementControls"),
        [Fd, Qd] = (0, Wd.useState)("movement"),
        od = "movement" === Fd,
        qd = Od && !1 !== md;
      (0, Wd.useEffect)((() => {
        "padActions" !== Fd || qd || Qd("done")
      }), [Fd, qd]);
      const yd = wd();
      Ed("done" === Fd ? null : Fd, yd, (() => {
        Qd("movement" === Fd && (0, Hd.m)() ? "padActions" : "done")
      }));
      const bd = td.k.getItem(Kd.Ib) > 2,
        Td = (!dd || Od) && od && !1 !== md,
        gd = "padActions" === Fd && qd,
        Jd = (0, Wd.useRef)(null);
      (0, pd.g)(!bd && !yd && Td, Jd), (0, pd.g)(!bd && !yd && gd);
      const sd = !bd && Td;
      return (0, Wd.useEffect)((() => {
        sd && !yd && vd.j.lQ("controlsTutorialShown", "movement")
      }), [sd, yd]), bd ? (0, Yd.jsx)(Sd, {
        showingMovementControls: !1
      }) : (0, Yd.jsxs)(Yd.Fragment, {
        children: [Td ? (0, Yd.jsxs)("div", {
          ref: Jd,
          className: Rd()("ControlsTutorialDiv", {
            Covered: yd
          }),
          children: [(0, Yd.jsx)(Ud, {}), (0, Yd.jsx)(Bd, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Yd.jsx)(Bd, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, gd && (0, Yd.jsx)(xd, {
          covered: yd
        }), (0, Yd.jsx)(Sd, {
          showingMovementControls: "done" !== Fd
        })]
      })
    }));

    function Ud() {
      const dd = (0, Hd.C)();
      return (0, Yd.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Yd.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), dd && (0, Yd.jsx)(qd.b, {
          noaAction: "forward"
        }), !dd && (0, Yd.jsxs)(Yd.Fragment, {
          children: [(0, Yd.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Yd.jsx)(qd.b, {
              noaAction: "forward"
            })
          }), (0, Yd.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Yd.jsx)(qd.b, {
              noaAction: "left"
            }), (0, Yd.jsx)(qd.b, {
              noaAction: "backward"
            }), (0, Yd.jsx)(qd.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function xd(dd) {
      let {
        covered: Od
      } = dd;
      const {
        t: md
      } = (0, Td.G)(), Wd = (0, hd.j)("useInventory");
      return (0, Yd.jsxs)("div", {
        className: Rd()("ControlsTutorialDiv", {
          Covered: Od
        }),
        children: [(0, Yd.jsx)(Bd, {
          header: md("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Yd.jsx)(Bd, {
          header: md("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Wd && (0, Yd.jsx)(Bd, {
          header: md("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Yd.jsx)(Bd, {
          header: md("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Bd(dd) {
      let {
        header: Od,
        noaAction: md
      } = dd;
      return (0, Yd.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Yd.jsx)("div", {
          className: "KeyHeader",
          children: Od
        }), (0, Yd.jsx)(qd.b, {
          noaAction: md
        })]
      })
    }

    function Sd(dd) {
      let {
        showingMovementControls: Od
      } = dd;
      const {
        isTouchScreen: md
      } = (0, Nd.p)(["isTouchScreen"]), Fd = (0, Hd.C)(), Rd = (0, bd.c)("OpenShop"), [Xd, Kd] = (0, Wd.useState)(!1), qd = `SeenShopControls|${(0,od.f)("connectedGame",(dd=>dd.gameNameWithVariation))}`, Td = () => (!(0, Hd.m)() || null !== (0, yd.d)("OpenShop")) && !td.k.getItem(qd) && Qd.e.get("shopInfo") && !Od, pd = () => (Kd(!0), td.k.setItem(qd, !0), (0, Hd.m)() || vd.j.lQ("showShopTouchTutorial"), setTimeout((() => {
        Kd(!1)
      }), 7e3));
      (0, Wd.useEffect)((() => {
        let dd;
        const Od = vd.j.subscribe("showShopTutorial", (() => {
          Td() && (dd = pd())
        }));
        return () => {
          clearTimeout(dd), vd.j.unsubscribe(Od)
        }
      }), [Od]);
      const gd = (0, Wd.useRef)();
      return (0, hd.g)("currencyAmounts", (dd => {
        if (Td()) {
          let md = !1;
          const Wd = Qd.e.get("shopInfo");
          for (const Fd in Wd) {
            for (const Rd in Wd[Fd].items) {
              var Od;
              const Xd = Wd[Fd].items[Rd];
              if (void 0 !== Xd.currency && dd[Xd.currency] && Xd.cost <= dd[Xd.currency].amount && (null === (Od = Xd.hidden) || void 0 === Od || !Od)) {
                md = !0;
                break
              }
            }
            if (md) break
          }
          md && (gd.current = pd())
        }
      })), (0, Wd.useEffect)((() => () => {
        clearTimeout(gd.current)
      }), [Od]), !Xd || Fd && !Rd ? null : (0, Yd.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: md && !Fd ? null : (0, Yd.jsx)(Bd, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  38143: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      g: () => Kd,
      k: () => vd
    });
    var Wd = md(66);
    const Fd = new Set,
      Rd = new Set;

    function Xd() {
      for (const dd of Rd) dd()
    }

    function Kd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, Wd.useEffect)((() => dd ? function() {
        const dd = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return Fd.add(dd), Xd(), () => {
          Fd.delete(dd) && Xd()
        }
      }(Od) : void 0), [dd, Od]), (0, Wd.useEffect)((() => {
        dd && Xd()
      }), [dd, md])
    }

    function hd() {
      const dd = [];
      for (const {
          element: md
        }
        of Fd) {
        var Od;
        if (null === md) return {
          anywhere: !0,
          boxes: []
        };
        const Wd = null === (Od = md.current) || void 0 === Od ? void 0 : Od.getBoundingClientRect();
        Wd && Wd.width > 0 && dd.push(Wd)
      }
      return {
        anywhere: !1,
        boxes: dd
      }
    }

    function vd(dd) {
      return Rd.add(dd), () => {
        Rd.delete(dd)
      }
    }
  },
  38302: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => hd,
      h: () => vd,
      j: () => Qd,
      l: () => qd
    });
    var Wd = md(66),
      Fd = md(4308),
      Rd = md(3510),
      Xd = md(32);
    const Kd = 8,
      hd = "InGameHeaderContainer",
      vd = "TopRightElements";

    function Qd(dd) {
      const [Od] = (0, Fd.b)(), [md, Rd] = (0, Wd.useState)(!1);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Od = document.querySelector(`.${hd}`),
          md = document.querySelector(`.${vd}`),
          Wd = () => {
            const Wd = dd.getBoundingClientRect(),
              Fd = Od ? Od.getBoundingClientRect().right : 0,
              Xd = md ? md.getBoundingClientRect().left : window.innerWidth,
              hd = Wd.left < Fd + Kd,
              vd = Wd.right > Xd - Kd;
            Rd(hd || vd)
          };
        Wd();
        const Fd = new ResizeObserver(Wd);
        return Fd.observe(dd), Od && Fd.observe(Od), md && Fd.observe(md), () => {
          Fd.disconnect()
        }
      }), [dd, Od]), md
    }
    const td = `.InGameUi .${hd}`,
      od = [td, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nd = 1e3;

    function qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd,
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Fd, hd] = (0, Wd.useState)(null);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Wd = new ResizeObserver((() => {
          vd()
        }));
        Wd.observe(dd), Od && Od !== dd && Wd.observe(Od);
        let Fd = [];

        function vd() {
          var Rd, Xd, vd;
          const Qd = dd.getBoundingClientRect(),
            Nd = function() {
              const dd = od.map((dd => document.querySelector(dd))).filter((dd => null !== dd));
              for (const Od of dd) Fd.includes(Od) || Wd.observe(Od);
              for (const Od of Fd) dd.includes(Od) || Wd.unobserve(Od);
              return Fd = dd, dd
            }(),
            qd = Nd.filter((dd => {
              const Od = dd.getBoundingClientRect();
              return Od.width > 0 && Od.height > 0 && Qd.left < Od.right + Kd && Qd.right > Od.left - Kd
            }));
          if (0 === qd.length && !md) return void hd(null);
          const Hd = Nd.find((dd => dd.matches(td))),
            yd = Math.max(null !== (Rd = null === Hd || void 0 === Hd ? void 0 : Hd.getBoundingClientRect().bottom) && void 0 !== Rd ? Rd : 0, ...qd.map((dd => dd.getBoundingClientRect().bottom))),
            bd = null !== (Xd = null === Od || void 0 === Od || null === (vd = Od.offsetParent) || void 0 === vd ? void 0 : vd.getBoundingClientRect().top) && void 0 !== Xd ? Xd : 0;
          hd(Math.ceil(yd + Kd / 2) - Math.round(bd))
        }
        const Qd = setInterval(vd, Nd);
        vd(), window.addEventListener("resize", vd);
        const qd = (0, Xd.l)(Rd.c, vd);
        return () => {
          Wd.disconnect(), clearInterval(Qd), window.removeEventListener("resize", vd), qd()
        }
      }), [dd, Od, md]), Fd
    }
  },
  38259: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => Fd,
      h: () => Rd
    });
    var Wd = md(66);

    function Fd(dd) {
      return Kd(dd, hd)
    }

    function Rd(dd) {
      return Kd(dd, vd)
    }

    function Xd(dd) {
      return `${Math.floor(dd/60)}:${String(dd%60).padStart(2,"0")}`
    }

    function Kd(dd, Od) {
      const [, md] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        if (0 === dd) return;
        const Wd = window.setInterval((() => {
          const Wd = Od(dd);
          md((Od => (null === Od || void 0 === Od ? void 0 : Od.endsAt) === dd && Od.value === Wd ? Od : {
            endsAt: dd,
            value: Wd
          }))
        }), 250);
        return () => {
          window.clearInterval(Wd)
        }
      }), [dd, Od]), Od(dd)
    }

    function hd(dd) {
      return (dd - performance.now()) / 1e3
    }

    function vd(dd) {
      return Math.max(0, Math.ceil(hd(dd)))
    }
  },
  9965: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => vd,
      i: () => td,
      m: () => Qd,
      q: () => hd,
      r: () => Nd
    });
    var Wd = md(32),
      Fd = md(2152),
      Rd = md(1518),
      Xd = md(1498);
    const Kd = dd => {
        var Od, md;
        return (0, Xd.m)() && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getGlyphForNoaAction(dd)) && void 0 !== Od ? Od : null
      },
      hd = "controllerGlyph:",
      vd = dd => {
        var Od, md;
        return null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconName(dd)) && void 0 !== Od ? Od : `${hd}xbox/${dd}`
      },
      Qd = dd => dd.startsWith(hd),
      td = dd => {
        var Od, md;
        return Qd(dd) && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconUrl(dd)) && void 0 !== Od ? Od : null
      },
      od = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Xd.b, Fd.c, Fd.b],
      Nd = dd => {
        const Od = od.map((Od => Wd.j.subscribe(Od, dd)));
        return () => {
          for (const dd of Od) Wd.j.unsubscribe(dd)
        }
      }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  40123: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    const Wd = 4,
      Fd = 12e3,
      Rd = 1e3;
    class Xd {
      constructor() {
        let {
          limit: dd = Wd,
          windowMs: Od = Fd,
          spacingMs: md = Rd,
          now: Xd = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = dd, this.windowMs = Od, this.spacingMs = md, this.now = Xd
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const dd of this.priority) dd.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const dd = this.now();
        this.sent.push(dd), this.lastSentAt = dd, this.schedule(), this.notify()
      }
      addPriority(dd) {
        return this.priority.add(dd), () => {
          this.priority.delete(dd)
        }
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const dd of this.priority)
          if (dd.waiting()) return !0;
        return !1
      }
      prune() {
        const dd = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= dd;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const dd = this.now(),
          Od = this.lastSentAt + this.spacingMs,
          md = Math.min(Od > dd ? Od : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        md !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, md - dd)))
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  41232: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Sm
    });
    var Wd = md(218);
    const Fd = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var Rd = md(66),
      Xd = md(3428),
      Kd = md(1155),
      hd = md.n(Kd),
      vd = md(29),
      Qd = md(1498),
      td = md(46),
      od = md(1238),
      Nd = md(38141),
      qd = md(1566),
      Hd = md(32);
    var yd = md(40080),
      bd = md(40074);
    const Td = 2 * Math.PI * 17;

    function pd(dd, Od, md) {
      const {
        santaMarketMinX: Wd,
        santaMarketMinZ: Fd,
        santaMarketSize: Rd
      } = dd;
      return (0, bd.b)(Od, md, {
        mapMinX: Wd,
        mapMaxX: Wd + Rd,
        mapMinZ: Fd,
        mapMaxZ: Fd + Rd
      })
    }

    function Yd(dd, Od, md) {
      return function(dd, Od, md, Wd, Fd) {
        const Rd = md / 3,
          Xd = dd => Math.min(2, Math.max(0, Math.floor(dd / Rd)));
        return 3 * Xd(Fd - Od) + 2 - Xd(Wd - dd)
      }(dd.santaMarketMinX, dd.santaMarketMinZ, dd.santaMarketSize, Od, md)
    }
    const gd = "secretSantaDistrictEntered",
      wd = "data-here";
    class Ed {
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
      update(dd, Od, md, Wd, Fd) {
        const Rd = performance.now(),
          Xd = 100 / dd.santaMarketSize,
          Kd = 4 + .008 * Math.min(1e3, Rd - this.lastAt),
          hd = Math.hypot(Od - this.lastLeft, md - this.lastTop) > Kd * Xd;
        this.lastLeft = Od, this.lastTop = md, this.lastAt = Rd;
        const vd = hd ? -1 : this.here,
          Qd = function(dd, Od, md, Wd, Fd) {
            if (dd >= 0) {
              const Od = 100 / 3,
                Rd = dd % 3 * Od,
                Xd = Math.floor(dd / 3) * Od;
              if (md >= Rd - Fd && md <= Rd + Od + Fd && Wd >= Xd - Fd && Wd <= Xd + Od + Fd) return dd
            }
            return Od
          }(vd, Wd, Od, md, 1.5 * Xd);
        if (Qd !== this.here) {
          var td, od;
          this.here = Qd;
          const Od = dd.santaMarketDistricts[Qd];
          vd >= 0 && Rd - (null !== (td = this.bannerAt[Qd]) && void 0 !== td ? td : -1 / 0) >= 8e3 ? (this.bannerAt[Qd] = Rd, this.bannerSeq++, this.setBanner({
            key: Od,
            seq: this.bannerSeq,
            at: Rd
          })) : (null === (od = this.getBanner()) || void 0 === od ? void 0 : od.key) !== Od && this.setBanner(null)
        }
        var Nd, qd;
        this.here !== this.drawnHere && (null === (Nd = this.drawnCell) || void 0 === Nd || Nd.removeAttribute(wd), this.drawnCell = Fd.querySelector(`[data-district="${this.here}"]`), null === (qd = this.drawnCell) || void 0 === qd || qd.setAttribute(wd, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(dd) {
        null === dd && null === this.banner || (this.banner = dd, Hd.j.lQ(gd, dd))
      }
    }
    class Jd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.at = dd, this.minSpanMs = Od, this.element = null, this.animation = null
      }
      bind(dd, Od, md) {
        this.element = dd, this.run(Od, md)
      }
      run(dd) {
        var Od;
        let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
        if (null === (Od = this.animation) || void 0 === Od || Od.cancel(), this.animation = null, !this.element || null === dd) return;
        const Wd = Math.max(1, md, this.minSpanMs),
          Fd = Wd - md,
          Rd = dd => Math.max(0, Math.min(1, dd / Wd));
        this.animation = this.element.animate([this.at(Rd(Math.max(0, dd) + Fd)), this.at(Rd(Fd))], {
          duration: Math.max(1, dd),
          fill: "forwards"
        })
      }
    }

    function Ud() {
      return new Jd((dd => ({
        opacity: .5 + .5 * dd
      })), 5e3)
    }
    class xd {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(dd, Od, md) {
        var Wd, Fd;
        this.forgetOldRoundTrips(dd);
        const Rd = dd - this.lastPressAt;
        if (this.lastPressAt = dd, Rd < this.quietMs() || this.awaitingTimedOut(dd) || "idle" !== this.state || md || dd < this.cooldownUntil || null === Od) return 0;
        const Xd = Math.max(0, Od.awaySpeed) * ((null !== (Wd = this.averageRoundTrip) && void 0 !== Wd ? Wd : 300) / 1e3);
        return Od.distance + Xd > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = dd, this.ownRing = !0, this.faded = !1, 500 + (null !== (Fd = this.averageRoundTrip) && void 0 !== Fd ? Fd : 0))
      }
      turnedAway(dd, Od, md) {
        if (!this.mayTurnAway(dd)) return !1;
        const Wd = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(Od <= 40 + (Wd >= md ? 180 : 180 * Math.asin(Wd / md) / Math.PI) && md <= 5 + Math.max(.5, Wd)) && (this.faded = !0, !0)
      }
      mayTurnAway(dd) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && dd - this.predictedAt <= 350
      }
      Yt(dd, Od, md) {
        const Wd = Od > 0 || !md,
          Fd = "predicted" === this.state;
        return md && (this.cooldownUntil = dd + 1e3), Wd && Fd ? this.learnRoundTrip(dd, dd - this.predictedAt) : Wd && this.awaitingTimedOut(dd) && (this.timedOutPressAt = null), Od > 0 ? (this.state = "confirmed", Fd ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: Od
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !md ? null : {
          kind: "end",
          done: md
        })
      }
      expired(dd) {
        var Od;
        return !("predicted" !== this.state || dd - this.predictedAt < 1200 + (null !== (Od = this.averageRoundTrip) && void 0 !== Od ? Od : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(dd, dd - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var dd;
        const Od = this.recentRoundTrips.reduce(((dd, Od) => {
          let {
            ms: md
          } = Od;
          return Math.max(dd, md)
        }), null !== (dd = this.averageRoundTrip) && void 0 !== dd ? dd : 0);
        return Math.max(300, Od > 0 ? 1.5 * Od + 300 : 1e3)
      }
      awaitingTimedOut(dd) {
        return null !== this.timedOutPressAt && dd - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(dd) {
        for (; this.recentRoundTrips.length > 0 && dd - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(dd, Od) {
        const md = Math.min(2e3, Math.max(0, Od));
        this.averageRoundTrip = null === this.averageRoundTrip ? md : this.averageRoundTrip + .3 * (md - this.averageRoundTrip), this.recentRoundTrips.push({
          at: dd,
          ms: md
        })
      }
    }
    const Bd = "secretSantaHudChanged",
      Sd = "SecretSantaHudShown",
      sd = "SecretSantaMatchOrFinish",
      ud = "SecretSantaNaughtyLock",
      Vd = ["Wrapping", "Naughty", "Cancelled"],
      Ad = {
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
    class rd {
      constructor(dd) {
        this.onWrapStart = dd, this.view = Ad, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = new Jd((dd => ({
          strokeDashoffset: 1 - dd
        }))), this.targetGlow = Ud(), this.circleFade = Ud(), this.targetFreshAt = 0, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new xd, this.district = new Ed, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = dd => {
          this.map = dd, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = dd => {
          this.arrow = dd, this.drawnArrow = ""
        }, this.bindCountdown = dd => {
          this.countdown.bind(dd, this.hintMsLeft())
        }, this.bindTargetGlow = dd => {
          this.targetGlow.bind(dd, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindCircleFade = dd => {
          this.circleFade.bind(dd, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindRing = dd => {
          var Od;
          this.stopRing(), this.ring = dd, this.ringFill = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.querySelector(".SecretSantaRingFill")) && void 0 !== Od ? Od : null;
          const md = this.view.naughtyEndsAt - performance.now();
          dd && md > 0 && this.runRing("Naughty", md)
        }, this.bindFlash = dd => {
          var Od;
          null === (Od = this.flashAnimation) || void 0 === Od || Od.cancel(), this.flashAnimation = null, this.flash = dd
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(dd) {
        this.district.reset(), this.lQ({
          ...this.view,
          market: dd,
          bells: 0
        })
      }
      receiveBells(dd) {
        dd !== this.view.bells && this.lQ({
          ...this.view,
          bells: dd
        })
      }
      receiveHint(dd) {
        const Od = this.view.hint,
          md = Gd(this.view.nextHintAt, performance.now() + dd.santaHintNextInMs, 1e3),
          Wd = md > this.view.nextHintAt,
          Fd = !Od || Od.santaHintContract !== dd.santaHintContract || Od.santaHintDistrict !== dd.santaHintDistrict || Od.santaHintCircleX !== dd.santaHintCircleX || Od.santaHintCircleZ !== dd.santaHintCircleZ,
          Rd = "hunting" === dd.santaHintState && (Wd || Fd) ? this.view.pulse + 1 : this.view.pulse;
        Rd !== this.view.pulse && (this.targetFreshAt = performance.now()), this.lQ({
          ...this.view,
          hint: dd,
          nextHintAt: md,
          pulse: Rd
        }), this.restartCountdown()
      }
      receiveStatus(dd) {
        var Od, md;
        const Wd = performance.now(),
          Fd = Gd(this.view.endsAt, Wd + dd.santaStatusMsLeft),
          Rd = dd.santaStatusNaughtyMs > 0 ? Gd(this.view.naughtyEndsAt, Wd + dd.santaStatusNaughtyMs) : 0,
          Xd = 0 !== Rd && 0 === this.view.naughtyEndsAt,
          Kd = null !== (Od = dd.santaStatusTreeLitInMs) && void 0 !== Od ? Od : null,
          hd = null === Kd ? 0 : Gd(this.view.treeLitAt, Wd + Kd);
        this.lQ({
          ...this.view,
          status: dd,
          endsAt: Fd,
          naughtyEndsAt: Rd,
          treeLitAt: hd,
          shown: dd.santaStatusMsLeft > 0
        }), this.scheduleEnd(Fd - Wd), Xd ? this.runRing("Naughty", dd.santaStatusNaughtyMs) : 0 === Rd && null !== (md = this.ring) && void 0 !== md && md.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(dd, Od) {
        if (!this.view.shown) return !1;
        const md = this.wrap.press(dd, Od, this.view.naughtyEndsAt > dd);
        return md > 0 && this.startWrapRing(Math.max(1, md - (performance.now() - dd))), md > 0
      }
      aimAtWrap(dd, Od) {
        const md = performance.now();
        return this.wrap.turnedAway(md, dd, Od) && this.endWrapRing(!1), this.wrap.mayTurnAway(md)
      }
      receiveWrap(dd, Od) {
        const md = this.wrap.Yt(performance.now(), dd, Od);
        "start" === (null === md || void 0 === md ? void 0 : md.kind) ? this.startWrapRing(md.ms): "end" === (null === md || void 0 === md ? void 0 : md.kind) && (md.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(md.done))
      }
      snowBlink() {
        var dd, Od, md;
        null === (dd = this.flashAnimation) || void 0 === dd || dd.cancel();
        this.flashAnimation = null !== (Od = null === (md = this.flash) || void 0 === md ? void 0 : md.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== Od ? Od : null
      }
      frame(dd, Od) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: md,
          hint: Wd
        } = this.view;
        if (!this.view.shown || !md || !Od || !this.arrow || !this.map) return;
        const [Fd, Rd] = pd(md, Od[0], Od[2]), Xd = Math.min(100, Math.max(0, Fd)), Kd = Math.min(100, Math.max(0, Rd)), hd = Math.min(95, Math.max(5, Xd)), vd = Math.min(95, Math.max(5, Kd)), Qd = Math.round(180 * function(dd) {
          return dd - yd.h
        }(dd) / Math.PI), td = `${hd.toFixed(1)}% ${vd.toFixed(1)}% ${Qd}`;
        td !== this.drawnArrow && (this.drawnArrow = td, this.arrow.style.left = `${hd.toFixed(1)}%`, this.arrow.style.top = `${vd.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${Qd}deg)`), this.district.update(md, Xd, Kd, Yd(md, Od[0], Od[2]), this.map);
        const od = "hunting" === (null === Wd || void 0 === Wd ? void 0 : Wd.santaHintState) ? Wd : null,
          Nd = null !== od && function(dd, Od) {
            let [md, , Wd] = Od;
            const {
              santaHintCircleX: Fd,
              santaHintCircleZ: Rd,
              santaHintCircleR: Xd
            } = dd;
            return null !== Fd && null !== Rd && Xd > 0 && Math.hypot(md - Fd, Wd - Rd) <= Xd
          }(od, Od);
        Nd !== this.drawnInCircle && (this.drawnInCircle = Nd, this.map.toggleAttribute("data-in-circle", Nd))
      }
      dispose() {
        var dd;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(sd), this.countdown.bind(null, null), this.targetGlow.bind(null, null), this.circleFade.bind(null, null), this.stopRing(), null === (dd = this.flashAnimation) || void 0 === dd || dd.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.ringFill = null, this.district.dispose(), document.body.classList.remove(Sd, ud), this.view = Ad
      }
      lQ(dd) {
        this.view = dd, document.body.classList.toggle(Sd, dd.shown), document.body.classList.toggle(ud, dd.shown && 0 !== dd.naughtyEndsAt), dd.shown && (this.clearFinishEnd(), document.body.classList.add(sd)), Hd.j.lQ(Bd, dd, !0)
      }
      scheduleEnd(dd) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.lQ({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(sd)
          }), 13e3)
        }), dd)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      targetFadeMs() {
        return this.view.nextHintAt - this.targetFreshAt
      }
      hintMsLeft() {
        var dd;
        return "hunting" === (null === (dd = this.view.hint) || void 0 === dd ? void 0 : dd.santaHintState) ? this.view.nextHintAt - performance.now() : null
      }
      restartCountdown() {
        const dd = this.hintMsLeft();
        this.countdown.run(dd), this.targetGlow.run(dd, this.targetFadeMs()), this.circleFade.run(dd, this.targetFadeMs())
      }
      runRing(dd, Od) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(dd);
        const [md, Wd] = "Wrapping" === dd ? [Td, 0] : [0, Td], Fd = [{
          strokeDashoffset: md
        }, {
          strokeDashoffset: Wd
        }], Rd = this.ringFill.animate(Fd, {
          duration: Od,
          fill: "forwards"
        });
        this.ringAnimation = Rd, "Naughty" === dd && (Rd.onfinish = () => {
          this.ringAnimation === Rd && this.stopRing()
        })
      }
      startWrapRing(dd) {
        this.runRing("Wrapping", dd), this.onWrapStart()
      }
      endWrapRing(dd) {
        const Od = this.ring;
        if (null === Od || void 0 === Od || !Od.classList.contains("Wrapping")) return;
        var md, Wd;
        dd ? null === (md = this.ringAnimation) || void 0 === md || md.finish() : null === (Wd = this.ringAnimation) || void 0 === Wd || Wd.pause();
        Od.classList.toggle("Cancelled", !dd);
        const Fd = Od.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: dd ? 1.6 : .8
        }], {
          duration: dd ? 350 : 300,
          easing: dd ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = Fd, Fd.onfinish = () => {
          this.ringEndAnimation === Fd && this.stopRing()
        }
      }
      stopRing() {
        var dd, Od, md;
        null === (dd = this.ringAnimation) || void 0 === dd || dd.cancel(), null === (Od = this.ringEndAnimation) || void 0 === Od || Od.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (md = this.ring) || void 0 === md || md.classList.remove(...Vd)
      }
    }

    function Gd(dd, Od) {
      return 0 === dd || Od - dd > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? Od : Math.min(dd, Od)
    }
    var nd = md(1341);
    const Ld = "secretSantaControlsShown",
      Pd = (0, Rd.memo)((function(dd) {
        let {
          controller: Od
        } = dd;
        const {
          isTouchScreen: md
        } = (0, vd.p)(["isTouchScreen"]), Wd = (0, Qd.C)(), {
          t: Fd
        } = (0, od.G)(), Xd = (0, qd.i)(Bd, Od.getView()).shown, Kd = (0, Nd.l)(), [Hd] = (0, Rd.useState)((() => {
          var dd;
          return null !== (dd = td.k.getItem(Ld)) && void 0 !== dd ? dd : 0
        })), [yd, bd] = (0, Rd.useState)(Hd >= 2), [Td, pd] = (0, Rd.useState)(!1), Yd = (0, Rd.useRef)(!1), gd = !yd && Td && Xd && (!md || Wd);
        return (0, Rd.useEffect)((() => {
          if (!Xd || Td || yd) return;
          const dd = setTimeout((() => {
            pd(!0)
          }), 15500);
          return () => {
            clearTimeout(dd)
          }
        }), [Xd, Td, yd]), (0, Rd.useEffect)((() => {
          !gd || Kd || Yd.current || (Yd.current = !0, td.k.setItem(Ld, Hd + 1))
        }), [gd, Kd, Hd]), (0, Nd.m)(gd ? "secretSanta" : null, Kd, (() => {
          bd(!0)
        })), gd ? (0, nd.jsxs)("div", {
          className: hd()("ControlsTutorialDiv", {
            Covered: Kd
          }),
          children: [(0, nd.jsx)(Nd.j, {}), (0, nd.jsx)(Nd.e, {
            header: "Jump",
            noaAction: "jump"
          }), (0, nd.jsx)(Nd.e, {
            header: Fd("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), Wd && (0, nd.jsx)(Nd.e, {
            header: Fd("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var zd = md(38243),
      cd = md(4627),
      jd = md(38302),
      Dd = md(1170),
      ed = md(1443),
      Id = md(38259);
    const ld = (0, Rd.memo)((function(dd) {
      let {
        controller: Od,
        naughtyEndsAt: md
      } = dd;
      return (0, nd.jsxs)("div", {
        ref: Od.bindRing,
        className: "SecretSantaRing",
        children: [(0, nd.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, nd.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, nd.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: Td,
              strokeDashoffset: Td
            }
          })]
        }), md > 0 && (0, nd.jsx)(Cd, {
          endsAt: md
        })]
      })
    }));

    function Cd(dd) {
      let {
        endsAt: Od
      } = dd;
      const {
        t: md
      } = (0, od.G)(), Wd = (0, Id.h)(Od);
      return Wd <= 0 ? null : (0, nd.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, nd.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, nd.jsx)(ed.c, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", md("secretSantaHud:naughty")]
        }), (0, nd.jsx)("span", {
          children: md("secretSantaHud:naughtyWait", {
            seconds: Wd
          })
        })]
      })
    }
    const Zd = "user-magnifying-glass",
      kd = "tree-christmas",
      fd = {
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

    function Md(dd) {
      return dd && fd[dd] || "snowflake"
    }
    const dO = "SecretSantaDistrictBanner",
      OO = {
        animationDuration: "2200ms"
      },
      mO = (0, Rd.memo)((function(dd) {
        let {
          controller: Od
        } = dd;
        const {
          t: md
        } = (0, od.G)(), Wd = (0, qd.i)(gd, Od.district.getBanner());
        return Wd ? (0, nd.jsxs)("div", {
          className: hd()(dO, `District-${Wd.key}`),
          style: OO,
          children: [(0, nd.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, nd.jsx)(ed.c, {
              name: Md(Wd.key)
            })
          }), md(`secretSantaHud:district_${Wd.key}`)]
        }, Wd.seq) : null
      }));
    var WO = md(2125),
      FO = md(1315);
    const RO = "\x01",
      XO = "\x02";

    function KO(dd) {
      let {
        scarf: Od,
        className: md
      } = dd;
      const {
        t: Wd
      } = (0, od.G)();
      return (0, nd.jsxs)("span", {
        className: hd()("SecretSantaScarf", `Scarf-${Od}`, md),
        children: [(0, nd.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), Wd(`secretSantaHud:scarfName_${Od}`)]
      })
    }
    const hO = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function vO(dd) {
      let {
        hat: Od,
        className: md
      } = dd;
      const {
        t: Wd
      } = (0, od.G)();
      return (0, nd.jsxs)("span", {
        className: hd()("SecretSantaHat", `Hat-${Od}`, md),
        children: [(0, nd.jsx)(ed.c, {
          name: hO[Od]
        }), " ", Wd(`secretSantaHud:hatName_${Od}`)]
      })
    }

    function QO(dd) {
      let {
        scarf: Od,
        hat: md
      } = dd;
      const {
        t: Wd
      } = (0, od.G)();
      return (0, nd.jsx)(nd.Fragment, {
        children: tO(Wd("secretSantaHud:lookName", {
          scarf: RO,
          hat: XO
        }), (0, nd.jsx)(KO, {
          scarf: Od
        }), (0, nd.jsx)(vO, {
          hat: md
        }))
      })
    }

    function tO(dd) {
      for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
      const Fd = [];
      return dd.split(RO).forEach(((dd, Od) => {
        Od > 0 && Fd.push(md[0]), dd.split(XO).forEach(((dd, Od) => {
          Od > 0 && Fd.push(md[1]), Fd.push(dd)
        }))
      })), Fd.map(((dd, Od) => (0, nd.jsx)(Rd.Fragment, {
        children: dd
      }, Od)))
    }
    const oO = {
        circle: {
          icon: Zd,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: kd,
          text: "secretSantaHud:targetLit"
        }
      },
      NO = (0, Rd.memo)((function(dd) {
        var Od, md, Wd;
        let {
          controller: Fd,
          market: Xd,
          hint: Kd,
          nextHintAt: vd,
          pulse: Qd
        } = dd;
        const {
          t: td
        } = (0, od.G)(), Nd = (0, WO.h)("hiddenPlayerNames"), qd = null !== (Od = null === Kd || void 0 === Kd ? void 0 : Kd.santaHintState) && void 0 !== Od ? Od : "none", Hd = null !== (md = null === Kd || void 0 === Kd ? void 0 : Kd.santaHintTargetName) && void 0 !== md ? md : null, yd = null !== Hd && (0, nd.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, FO.e)(Hd, Nd)
        }), bd = "hunting" === qd && null !== Kd, Td = bd && !0 === Kd.santaHintTreeLit, pd = function(dd, Od) {
          const [md, Wd] = (0, Rd.useState)(null);
          Od && (null === md || void 0 === md ? void 0 : md.contract) !== dd && Wd({
            contract: dd,
            until: performance.now() + 8e3
          });
          const Fd = (null === md || void 0 === md ? void 0 : md.contract) === dd ? md.until : 0,
            Xd = (0, Id.h)(Fd);
          0 !== Fd && 0 === Xd && Wd({
            contract: dd,
            until: 0
          });
          return Od && Xd > 0
        }(null !== (Wd = null === Kd || void 0 === Kd ? void 0 : Kd.santaHintContract) && void 0 !== Wd ? Wd : 0, bd && Kd.santaHintCircleR > 0 && !Td);
        let Yd, gd = `${qd}-${null!==Hd&&void 0!==Hd?Hd:""}`;
        if (Kd && "none" !== qd && yd)
          if ("lost" === qd) Yd = (0, nd.jsxs)(nd.Fragment, {
            children: [(0, nd.jsx)(ed.c, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", tO(td("secretSantaHud:lostLine", {
              name: RO
            }), yd)]
          });
          else if (null !== Kd.santaHintScarf) {
          var wd, Ed;
          gd += `-scarf-${Kd.santaHintScarf}-${null!==(wd=Kd.santaHintHat)&&void 0!==wd?wd:""}`, Yd = tO(td("secretSantaHud:lookingFor", {
            name: RO,
            clue: XO
          }), yd, (0, nd.jsx)(HO, {
            scarf: Kd.santaHintScarf,
            hat: null !== (Ed = Kd.santaHintHat) && void 0 !== Ed ? Ed : null
          }))
        } else {
          const dd = null === Xd || void 0 === Xd ? void 0 : Xd.santaMarketDistricts[Kd.santaHintDistrict];
          gd += `-district-${null!==dd&&void 0!==dd?dd:"?"}`, Yd = tO(td("secretSantaHud:findIn", {
            name: RO,
            district: XO
          }), yd, (0, nd.jsxs)("span", {
            className: hd()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== dd && `District-${dd}`),
            children: [(0, nd.jsx)(ed.c, {
              name: Md(dd)
            }), " ", void 0 !== dd ? td(`secretSantaHud:district_${dd}`) : "?"]
          }))
        } else Yd = td("secretSantaHud:finding");
        const [Jd, Ud] = (0, Rd.useState)({
          key: gd,
          pulse: Qd
        });
        Jd.key !== gd && Ud({
          key: gd,
          pulse: Qd
        });
        const xd = Jd.key === gd && Qd !== Jd.pulse;
        return (0, nd.jsxs)("div", {
          className: hd()("SecretSantaTarget", `State-${qd}`),
          children: [Yd, "hunting" === qd && (0, nd.jsxs)(nd.Fragment, {
            children: [(0, nd.jsx)(qO, {
              controller: Fd,
              nextHintAt: vd,
              note: Td ? "lit" : pd ? "circle" : null
            }), xd && (0, nd.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, Qd)]
          })]
        }, gd)
      }));

    function qO(dd) {
      let {
        controller: Od,
        nextHintAt: md,
        note: Wd
      } = dd;
      const {
        t: Fd
      } = (0, od.G)(), Xd = (0, Id.h)(md), [Kd, hd] = (0, Rd.useState)(null), [vd, Qd] = (0, Rd.useState)(null);
      (0, Rd.useLayoutEffect)((() => {
        if (!Kd) return;
        const dd = () => {
          const dd = Kd.offsetWidth,
            Od = Kd.offsetHeight;
          Qd((md => md && md.width === dd && md.height === Od ? md : {
            width: dd,
            height: Od
          }))
        };
        dd();
        const Od = new ResizeObserver(dd);
        return Od.observe(Kd), () => {
          Od.disconnect()
        }
      }), [Kd]);
      return (0, nd.jsxs)(nd.Fragment, {
        children: [(0, nd.jsx)("div", {
          ref: hd,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: vd && vd.width > 8 && vd.height > 8 && (0, nd.jsx)("svg", {
            viewBox: `0 0 ${vd.width} ${vd.height}`,
            children: (0, nd.jsx)("path", {
              ref: Od.bindCountdown,
              d: `M${vd.width/2} 2H${vd.width-2}V${vd.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === Wd ? (0, nd.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, nd.jsx)(ed.c, {
            name: "arrows-rotate"
          }), " ", Fd("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, Xd)
          })]
        }) : (0, nd.jsx)(yO, {
          kind: Wd
        }, Wd)]
      })
    }

    function HO(dd) {
      let {
        scarf: Od,
        hat: md
      } = dd;
      return (0, nd.jsxs)(nd.Fragment, {
        children: [(0, nd.jsx)(KO, {
          scarf: Od,
          className: "SecretSantaClueChip"
        }), null !== md && (0, nd.jsxs)(nd.Fragment, {
          children: [(0, nd.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, nd.jsx)(vO, {
            hat: md,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function yO(dd) {
      let {
        kind: Od
      } = dd;
      const {
        t: md
      } = (0, od.G)(), {
        icon: Wd,
        text: Fd
      } = oO[Od];
      return (0, nd.jsxs)("div", {
        className: hd()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${Od}`),
        children: [(0, nd.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, nd.jsx)(ed.c, {
            name: Wd
          })
        }), " ", md(Fd)]
      })
    }

    function bO(dd) {
      let {
        litAt: Od,
        hunters: md
      } = dd;
      const {
        t: Wd
      } = (0, od.G)(), Fd = (0, Id.h)(Od);
      return (0, nd.jsxs)("span", {
        className: hd()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: Fd <= 0
        }),
        children: [(0, nd.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, nd.jsx)(ed.c, {
            name: kd
          })
        }), " ", Fd > 0 ? Wd("secretSantaHud:treeLightsOn", {
          seconds: Fd
        }) : Wd(md > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function TO(dd) {
      let {
        on: Od
      } = dd;
      return (0, nd.jsx)("span", {
        className: hd()("SecretSantaTreeLightString", {
          On: Od
        }),
        "aria-hidden": "true"
      })
    }
    const pO = (0, Rd.memo)((function(dd) {
      var Od, md;
      let {
        controller: Wd,
        market: Rd,
        hint: Xd,
        pulse: Kd,
        treeLightsOn: vd
      } = dd;
      const {
        t: Qd
      } = (0, od.G)(), td = null !== (Od = null === Xd || void 0 === Xd ? void 0 : Xd.santaHintState) && void 0 !== Od ? Od : "none", Nd = "hunting" === td && Xd ? Xd.santaHintDistrict : -1, qd = null !== (md = null === Rd || void 0 === Rd ? void 0 : Rd.santaMarketDistricts) && void 0 !== md ? md : Fd, Hd = "hunting" === td && Rd && Xd ? function(dd, Od) {
        const {
          santaHintCircleX: md,
          santaHintCircleZ: Wd,
          santaHintCircleR: Fd,
          santaHintContract: Rd
        } = Od;
        if (null === md || null === Wd || Fd <= 0) return null;
        const [Xd, Kd] = pd(dd, md, Wd), hd = 200 * Fd / dd.santaMarketSize, vd = YO(Xd), Qd = Math.sqrt(Math.max(0, (hd / 2) ** 2 - (vd - Xd) ** 2)), td = YO(Kd - Qd >= 9 ? Kd - Qd : Kd + Qd);
        return {
          left: Xd,
          top: Kd,
          size: hd,
          contract: Rd,
          badgeLeft: vd,
          badgeTop: td
        }
      }(Rd, Xd) : null;
      return (0, nd.jsxs)("div", {
        ref: Wd.bindMap,
        className: hd()("SecretSantaMinimap", `State-${td}`, {
          WithCircle: null !== Hd
        }),
        children: [(0, nd.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,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",
          alt: "",
          draggable: !1
        }), (0, nd.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: qd.map(((dd, Od) => (0, nd.jsxs)("div", {
            className: hd()("SecretSantaDistrict", `District-${dd}`, {
              Target: Od === Nd
            }),
            "data-district": Od,
            children: [(0, nd.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, nd.jsx)(ed.c, {
                name: Md(dd)
              })
            }), (0, nd.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: Qd(`secretSantaHud:district_${dd}`)
            }), "greatTree" === dd && (0, nd.jsx)(TO, {
              on: vd
            })]
          }, dd)))
        }), Nd >= 0 && (0, nd.jsxs)("div", {
          className: "SecretSantaTargetCell",
          style: {
            left: Nd % 3 * (100 / 3) + "%",
            top: Math.floor(Nd / 3) * (100 / 3) + "%"
          },
          children: [(0, nd.jsx)("div", {
            ref: Wd.bindTargetGlow,
            className: "SecretSantaTargetGlow"
          }), (0, nd.jsx)("div", {
            className: "SecretSantaDistrictPulse"
          }, Kd)]
        }), Hd && (0, nd.jsxs)("div", {
          ref: Wd.bindCircleFade,
          className: "SecretSantaCircleClip",
          children: [(0, nd.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${Hd.left}%`,
              top: `${Hd.top}%`,
              width: `${Hd.size}%`,
              height: `${Hd.size}%`
            }
          }, Hd.contract), (0, nd.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${Hd.badgeLeft}%`,
              top: `${Hd.badgeTop}%`
            },
            children: (0, nd.jsx)(ed.c, {
              name: Zd
            })
          }, `badge-${Hd.contract}`)]
        }), (0, nd.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, nd.jsx)("div", {
            ref: Wd.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, nd.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, nd.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, nd.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, nd.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === td && (0, nd.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, nd.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, nd.jsx)(ed.c, {
              name: "snowflake"
            })
          }), (0, nd.jsx)("span", {
            className: "SmallTextBold",
            children: Qd("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function YO(dd) {
      return Math.min(91, Math.max(9, dd))
    }

    function gO(dd) {
      let {
        bells: Od
      } = dd;
      return (0, nd.jsx)("div", {
        className: hd()("SecretSantaFrost", `Bells-${Od}`),
        "aria-hidden": "true",
        children: (0, nd.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function wO(dd) {
      let {
        bells: Od
      } = dd;
      const {
        t: md
      } = (0, od.G)();
      return (0, nd.jsxs)("span", {
        className: hd()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${Od}`),
        children: [(0, nd.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, nd.jsx)(ed.c, {
            name: "bell"
          })
        }), " ", md(2 === Od ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function aO(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, qd.i)(Bd, Od.getView());
      return (0, nd.jsxs)(nd.Fragment, {
        children: [md.shown && (0, nd.jsx)(gO, {
          bells: md.bells
        }), (0, nd.jsx)("div", {
          ref: Od.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, nd.jsx)(ld, {
          controller: Od,
          naughtyEndsAt: md.naughtyEndsAt
        }), md.shown && (0, nd.jsxs)(nd.Fragment, {
          children: [(0, nd.jsx)(SO, {
            controller: Od,
            status: md.status,
            endsAt: md.endsAt,
            bells: md.bells,
            treeLitAt: md.treeLitAt
          }), (0, nd.jsx)(EO, {
            controller: Od,
            market: md.market,
            hint: md.hint,
            pulse: md.pulse,
            treeLightsOn: 0 !== md.treeLitAt
          }), (0, nd.jsx)(zd.h, {
            children: (0, nd.jsx)(NO, {
              controller: Od,
              market: md.market,
              hint: md.hint,
              nextHintAt: md.nextHintAt,
              pulse: md.pulse
            })
          })]
        })]
      })
    }

    function EO(dd) {
      let {
        controller: Od,
        market: md,
        hint: Wd,
        pulse: Fd,
        treeLightsOn: Xd
      } = dd;
      const [Kd, hd] = (0, Rd.useState)(null);
      return (0, cd.o)(Kd, JO), (0, nd.jsx)("div", {
        ref: hd,
        className: "SecretSantaMapPanel",
        children: (0, nd.jsx)(pO, {
          controller: Od,
          market: md,
          hint: Wd,
          pulse: Fd,
          treeLightsOn: Xd
        })
      })
    }

    function JO(dd) {
      const Od = () => {
        const Od = dd.getBoundingClientRect();
        let md = 0;
        for (const dd of BO()) dd.left < Od.right && dd.right > Od.left && (md = Math.max(md, dd.bottom));
        const Wd = (0, cd.i)(Od.left, Od.right, md);
        UO(dd, "--ss-map-top", md + 6), UO(dd, "--ss-map-bottom", null === Wd ? null : (0, cd.f)(dd) - Wd + 6)
      };
      Od();
      const md = xO(Od);
      return {
        layout: Od,
        clear: () => {
          md(), dd.style.removeProperty("--ss-map-top"), dd.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function UO(dd, Od, md) {
      const Wd = null === md ? "" : `${Math.ceil(md)}px`;
      dd.style.getPropertyValue(Od) !== Wd && dd.style.setProperty(Od, Wd)
    }

    function xO(dd) {
      const Od = document.querySelector(`.${jd.h}`),
        md = new ResizeObserver(dd);
      for (const Rd of [document.querySelector(`.${jd.e}`), Od]) Rd && md.observe(Rd);
      const Wd = new MutationObserver(dd),
        Fd = null === Od || void 0 === Od ? void 0 : Od.querySelector(".TopRightElementsRight");
      return Fd && Wd.observe(Fd, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        md.disconnect(), Wd.disconnect()
      }
    }

    function BO() {
      const dd = `.${jd.h}`,
        Od = document.querySelectorAll(`.${jd.e}, ${dd} .TopRightIcon:not(.TopRightTray *), ${dd} .CondensedSocialBarInner`);
      return Array.from(Od, (dd => dd.getBoundingClientRect())).filter((dd => dd.width > 0 && dd.height > 0))
    }
    const SO = (0, Rd.memo)((function(dd) {
      let {
        controller: Od,
        status: md,
        endsAt: Wd,
        bells: Fd,
        treeLitAt: Xd
      } = dd;
      const {
        t: Kd
      } = (0, od.G)(), [hd, vd] = (0, Rd.useState)(null);
      return function(dd) {
        (0, Rd.useLayoutEffect)((() => {
          if (!dd) return;
          const Od = document.documentElement;
          let md = 0,
            Wd = window.innerWidth;
          const Fd = () => {
              dd.style.removeProperty("top");
              const Wd = BO(),
                Fd = Array.from(dd.children).filter((dd => dd instanceof HTMLElement && !dd.classList.contains(dO))),
                Rd = dd.getBoundingClientRect(),
                Xd = Fd.map((dd => {
                  const Od = Rd.left + dd.offsetLeft,
                    md = Rd.top + dd.offsetTop;
                  return {
                    left: Od,
                    right: Od + dd.offsetWidth,
                    top: md,
                    bottom: md + dd.offsetHeight
                  }
                }));
              let Kd = 0;
              for (let dd = 0; dd < Wd.length; dd++) {
                let dd = Kd;
                for (const Od of Xd)
                  for (const md of Wd) {
                    Od.left < md.right + jd.d && Od.right > md.left - jd.d && Od.top + Kd < md.bottom + 4 && Od.bottom + Kd > md.top && (dd = Math.max(dd, Math.ceil(md.bottom + 4 - Od.top)))
                  }
                if (dd === Kd) break;
                Kd = dd
              }
              Kd > 0 && (dd.style.top = `${dd.getBoundingClientRect().top+Kd}px`);
              const hd = Math.max(0, ...Xd.map((dd => dd.bottom - Rd.top)));
              (0, Dd.g)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (md = Math.max(md, Math.ceil(dd.getBoundingClientRect().top + hd)), Od.style.setProperty("--ss-top-bar-bottom", `${md}px`))
            },
            Rd = () => {
              window.innerWidth !== Wd && (Wd = window.innerWidth, md = 0), Fd()
            };
          Fd();
          const Xd = new ResizeObserver(Fd);
          Xd.observe(dd);
          const Kd = xO(Fd),
            hd = new MutationObserver((dd => {
              dd.some((dd => {
                const Od = dd.target instanceof Element ? dd.target : dd.target.parentElement;
                return !(null !== Od && void 0 !== Od && Od.closest(".SecretSantaClock"))
              })) && Fd()
            }));
          hd.observe(dd, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const vd = new MutationObserver((dd => {
              dd.some((dd => dd.target instanceof Element && dd.target.classList.contains("Chat"))) && Fd()
            })),
            Qd = document.querySelector(".TopLeftElements");
          return Qd && vd.observe(Qd, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", Rd), () => {
            Xd.disconnect(), Kd(), hd.disconnect(), vd.disconnect(), window.removeEventListener("resize", Rd), Od.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [dd])
      }(hd), (0, nd.jsxs)("div", {
        ref: vd,
        className: "SecretSantaTop",
        children: [(0, nd.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, nd.jsx)(sO, {
            endsAt: Wd
          }), md && (0, nd.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, nd.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, nd.jsx)(ed.c, {
                name: "star"
              }), " ", md.santaStatusPoints]
            }, md.santaStatusPoints), (0, nd.jsx)("span", {
              className: "SecretSantaRank",
              children: Kd("secretSantaHud:rank", {
                rank: md.santaStatusRank,
                players: md.santaStatusPlayers
              })
            })]
          })]
        }), md && (0, nd.jsx)(uO, {
          status: md,
          bells: Fd,
          treeLitAt: Xd
        }), (0, nd.jsx)(mO, {
          controller: Od
        })]
      })
    }));

    function sO(dd) {
      let {
        endsAt: Od
      } = dd;
      const md = (0, Id.h)(Od);
      return 0 === Od ? (0, nd.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, nd.jsxs)("span", {
        className: hd()("SecretSantaClock", {
          Urgent: md <= 30
        }),
        children: [(0, nd.jsx)(ed.c, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, Id.d)(md)]
      })
    }
    const uO = (0, Rd.memo)((function(dd) {
      let {
        status: Od,
        bells: md,
        treeLitAt: Wd
      } = dd;
      const {
        t: Fd
      } = (0, od.G)(), Rd = Math.min(2, Math.max(0, Od.santaStatusHunters)), Xd = Od.santaStatusScarf, Kd = (0, nd.jsx)(QO, {
        scarf: Xd,
        hat: Od.santaStatusHat
      });
      let hd = (0, nd.jsx)("span", {
        children: tO(Fd("secretSantaHud:youWearLook", {
          look: RO
        }), Kd)
      });
      if (Od.santaStatusKnown) {
        const dd = Od.santaStatusHatKnown ? tO(Fd("secretSantaHud:spottedLook", {
          look: RO
        }), Kd) : tO(Fd("secretSantaHud:spottedScarf", {
          scarf: RO
        }), (0, nd.jsx)(KO, {
          scarf: Xd
        }));
        hd = (0, nd.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, nd.jsx)(ed.c, {
            name: "eye"
          }), " ", dd]
        })
      }
      let vd = null;
      return 0 !== Wd ? vd = (0, nd.jsx)(bO, {
        litAt: Wd,
        hunters: Rd
      }) : 0 !== md ? vd = (0, nd.jsx)(wO, {
        bells: md
      }) : Rd > 0 && (vd = (0, nd.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, nd.jsx)(ed.c, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", Fd(1 === Rd ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, nd.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [vd, hd]
      }, Rd)
    }));
    var VO = md(2991);
    const iO = [226, 36, 52],
      AO = [246, 250, 255],
      rO = [168, 214, 255],
      GO = [24, 24, 28],
      nO = [44, 44, 50],
      LO = [112, 112, 122],
      PO = [255, 112, 36];

    function zO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [dd[0], dd[1], dd[2], md],
        maxColor: [Od[0], Od[1], Od[2], md]
      }, {
        timeFraction: 1,
        minColor: [dd[0], dd[1], dd[2], 0],
        maxColor: [Od[0], Od[1], Od[2], 0]
      }]
    }

    function cO(dd, Od, md) {
      let [Wd, Fd, Rd] = dd;
      return {
        pos1: [Wd - Od, Fd, Rd - Od],
        pos2: [Wd + Od, Fd + md, Rd + Od]
      }
    }

    function jO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const md = .45 * Od;
      return [{
        texture: "square_particle",
        ...cO(dd, md, 1.4 * Od),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * Od,
        maxSize: .34 * Od,
        manualEmitCount: Math.round(26 * Od),
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
        colorGradients: zO(nO, LO, .95),
        hideDist: 48,
        blendMode: VO.g.Standard
      }, {
        texture: "square_particle",
        ...cO(dd, .6 * md, 1.2 * Od),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * Od),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [GO[0], GO[1], GO[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [GO[0], GO[1], GO[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: VO.g.Standard
      }, {
        texture: "glint",
        ...cO(dd, .7 * md, 1.2 * Od),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * Od),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: zO(PO, iO),
        hideDist: 48,
        blendMode: VO.g.Add
      }]
    }

    function DO(dd, Od) {
      return {
        texture: "glint",
        ...cO(dd, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: Od,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: zO(AO, rO),
        hideDist: 16,
        blendMode: VO.g.Add
      }
    }
    var eO = md(107);
    const IO = "harp_pling",
      lO = "cloth1",
      CO = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      ZO = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      kO = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      fO = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      MO = "keysJingle",
      dm = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function Om(dd, Od) {
      return 1 === Od ? dd : {
        ...dd,
        manualEmitCount: Math.max(1, Math.round(dd.manualEmitCount * Od))
      }
    }
    class mm {
      constructor(dd, Od) {
        this.api = dd, this.localPlayerId = Od, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, eO.isMobile)() ? .6 : 1, dd.preloadSounds([IO, MO, lO])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(dd) {
        const Od = this.hint;
        this.hint = dd, "none" !== dd.santaHintState && (Od && Od.santaHintContract === dd.santaHintContract ? null === Od.santaHintScarf && null !== dd.santaHintScarf ? this.play(ZO) : null === Od.santaHintHat && null !== dd.santaHintHat && this.play(kO) : this.play(CO))
      }
      receiveStatus(dd) {
        (dd.santaStatusKnown && !this.spotted || dd.santaStatusHatKnown && !this.hatSpotted) && this.play(fO), this.spotted = dd.santaStatusKnown, this.hatSpotted = dd.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, lO, .5, 1.2)
      }
      setBells(dd) {
        const Od = dm[dd];
        this.layers.forEach(((dd, md) => {
          var Wd;
          const [Fd, Rd] = null !== (Wd = Od[md]) && void 0 !== Wd ? Wd : [0, dd.rate];
          var Xd;
          (0 === Fd && dd.target > 0 && dd.sound && this.stopLater(dd), dd.target = Fd, Fd > 0 && Rd !== dd.rate) && (dd.rate = Rd, null === (Xd = dd.sound) || void 0 === Xd || Xd.rate(Rd))
        }))
      }
      receiveFx(dd) {
        let {
          santaFxKind: Od,
          santaFxAt: md
        } = dd;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === Od) md && this.burst(jO(md));
          else if ("toTunnel" === Od) this.later(300, (() => {
          const [dd, Od, md] = this.ahead();
          this.burst([DO([dd, Od - 1, md], 36)])
        }));
        else {
          const [dd, Od, md] = this.ahead();
          this.burst(jO([dd, Od - .6, md], .8))
        }
      }
      frame(dd) {
        const {
          cameraPosition: Od,
          cameraDirection: md
        } = dd;
        this.camera[0] = Od[0], this.camera[1] = Od[1], this.camera[2] = Od[2], this.look[0] = md[0], this.look[1] = md[1], this.look[2] = md[2];
        const Wd = performance.now(),
          Fd = Math.min(.1, (Wd - (this.lastFrameAt || Wd)) / 1e3);
        this.lastFrameAt = Wd;
        for (const Xd of this.layers) {
          if (0 === Xd.volume && 0 === Xd.target && !Xd.sound) continue;
          Xd.target > 0 && !Xd.sound && (Xd.sound = this.api.playSound(this.localPlayerId, MO, 0, Xd.rate, void 0, !0));
          const dd = (Xd.target > Xd.volume ? 3 : 1.2) * Fd;
          var Rd;
          if (Xd.volume = Xd.target > Xd.volume ? Math.min(Xd.target, Xd.volume + dd) : Math.max(Xd.target, Xd.volume - dd), Xd.volume <= 0 && 0 === Xd.target) this.silence(Xd);
          else null === (Rd = Xd.sound) || void 0 === Rd || Rd.setRelativeVolume(Xd.volume)
        }
      }
      dispose() {
        for (const dd of this.timers) window.clearTimeout(dd);
        this.timers.clear();
        for (const dd of this.layers) dd.target = 0, this.silence(dd)
      }
      silence(dd) {
        var Od;
        null === (Od = dd.sound) || void 0 === Od || Od.stop(), dd.sound = null, dd.volume = 0
      }
      stopLater(dd) {
        const Od = dd.sound,
          md = window.setTimeout((() => {
            this.timers.delete(md), dd.sound === Od && 0 === dd.target && this.silence(dd)
          }), dd.volume / 1.2 * 1e3 + 150);
        this.timers.add(md)
      }
      ahead() {
        const [dd, Od, md] = this.camera, [Wd, Fd, Rd] = this.look;
        return [dd + 1.8 * Wd, Od + 1.8 * Fd - .35, md + 1.8 * Rd]
      }
      later(dd, Od) {
        const md = window.setTimeout((() => {
          this.timers.delete(md), Od()
        }), dd);
        this.timers.add(md)
      }
      play(dd) {
        for (const [Od, md, Wd] of dd) 0 === Od ? this.api.playSound(this.localPlayerId, IO, md, Wd) : this.later(Od, (() => {
          this.api.playSound(this.localPlayerId, IO, md, Wd)
        }))
      }
      burst(dd) {
        for (const Od of dd) this.api.playParticleEffect(Om(Od, this.particleShare))
      }
    }
    class Wm {
      constructor(dd) {
        this.api = dd, this.wait = null
      }
      Yt(dd) {
        const Od = performance.now();
        this.wait = {
          min: dd.santaFlyoverMin,
          max: dd.santaFlyoverMax,
          start: dd.santaFlyoverStart,
          until: Od + dd.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: Od
        }
      }
      frame(dd) {
        const Od = this.wait;
        if (!Od) return;
        const md = performance.now(),
          Wd = md - Od.lastFrameAt;
        Od.lastFrameAt = md, md > Od.until ? this.wait = null : null !== Od.loadedAt ? (Od.settledFrames = Wd <= 60 ? Od.settledFrames + 1 : 0, Od.settledFrames >= 6 && md - Od.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : dd && this.isLoaded(Od, dd) && (Od.loadedAt = md)
      }
      isLoaded(dd, Od) {
        let {
          min: md,
          max: Fd,
          start: Rd
        } = dd;
        if (Od[0] < md[0] || Od[0] > Fd[0] || Od[2] < md[2] || Od[2] > Fd[2]) return !1;
        const Xd = Wd.i.Qt,
          Kd = dd => dd.map((dd => Math.floor(dd / Xd))),
          hd = [Kd(Od), Kd(Rd)],
          [vd, Qd] = [Kd(md), Kd(Fd)];
        for (let Wd = vd[0]; Wd <= Qd[0]; Wd++)
          for (let dd = vd[1]; dd <= Qd[1]; dd++)
            for (let Od = vd[2]; Od <= Qd[2]; Od++) {
              if (hd.some((md => {
                  let [Fd, Rd, Xd] = md;
                  return (Wd - Fd) ** 2 + (dd - Rd) ** 2 + (Od - Xd) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(Wd * Xd, dd * Xd, Od * Xd)) return !1
            }
        return !0
      }
    }
    var Fm = md(40455),
      Rm = md(1361),
      Xm = md(40123);
    class Km {
      constructor(dd) {
        this.api = dd, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.Wt()
        }), 5e3), this.pacer = new Xm.d({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.Wt()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.Wt())
        })), this.Wt()
      }
      resend() {
        this.sent = null, this.Wt()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      Wt() {
        var dd, Od;
        const md = null !== (dd = null === (Od = (0, Rm.V)().gameRender()) || void 0 === Od ? void 0 : Od.canvas.width) && void 0 !== dd ? dd : 0;
        if (md <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const Wd = window.innerWidth / window.innerHeight,
          Fd = (0, Fm.d)(md),
          Rd = this.sent;
        Rd && Math.abs(Wd / Rd.aspect - 1) < .02 && Math.abs(Fd / Rd.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: Wd,
          tagScale: Fd
        }, this.api.sendCommand(`santaView ${Math.round(1e3*Wd)} ${Math.round(1e3*Fd)}`)) : this.heldBack = !0)
      }
    }
    var hm = md(40748);
    const Qm = [20, 9, 20],
      tm = [8, 12],
      om = .3,
      Nm = [.05, .13],
      qm = {
        kind: "smokePuff"
      },
      Hm = [245, 250, 255],
      ym = {
        Mt: 900,
        perS: 80
      },
      bm = {
        Mt: 360,
        perS: 34
      };
    class Tm {
      constructor(dd) {
        this.api = dd, this.tier = (0, eO.isMobile)() ? bm : ym, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(dd) {
        const Od = performance.now(),
          md = 0 === this.lastMs ? 0 : Math.min(Od - this.lastMs, 250) / 1e3;
        if (this.lastMs = Od, !this.api.particlesEnabled()) return void this.dispose();
        const Wd = Math.hypot(dd[0] - this.last[0], dd[1] - this.last[1], dd[2] - this.last[2]) > 20;
        if (this.last[0] = dd[0], this.last[1] = dd[1], this.last[2] = dd[2], Wd && this.dispose(), (Wd || Od >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = Od + 250, this.roofed = this.hasRoof(dd)), this.roofed) return void(this.budget = 0);
        const Fd = this.at;
        let Rd;
        Fd[0] = dd[0], Fd[1] = dd[1] + 7, Fd[2] = dd[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * md, this.tier.perS / 4), Rd = Math.floor(this.budget), this.budget -= Rd) : (this.system = this.api.createParticles(this.opts(), {
          pos: Fd,
          half: Qm
        }), Rd = Math.floor(this.tier.Mt / 2)), Rd > 0 && (this.system.moveTo(Fd, Qm), this.system.emit(Rd))
      }
      dispose() {
        var dd;
        null === (dd = this.system) || void 0 === dd || dd.dispose(), this.system = null
      }
      hasRoof(dd) {
        let [Od, md, Wd] = dd;
        const Fd = Math.floor(Od),
          Rd = Math.floor(Wd);
        let Xd = 0;
        for (let Kd = Math.floor(md) + 1; Kd <= Math.floor(md) + 16; Kd++)
          if (Xd = this.api.isSolidToPlayerBlockId(this.api.getBlockId(Fd, Kd, Rd)) ? Xd + 1 : 0, Xd >= 4) return !0;
        return !1
      }
      opts() {
        const [dd, Od, md] = Hm;
        return {
          texture: qm,
          Mt: this.tier.Mt,
          minLifeTime: tm[0] / hm.c,
          maxLifeTime: tm[1] / hm.c,
          minEmitPower: 1.1 * hm.c * .8,
          maxEmitPower: 1.1 * hm.c * 1.2,
          minSize: Nm[0],
          maxSize: Nm[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [om, -1, om],
          colorGradients: [{
            timeFraction: 0,
            minColor: [dd, Od, md, 0]
          }, {
            timeFraction: .12,
            minColor: [dd, Od, md, .9]
          }, {
            timeFraction: .85,
            minColor: [dd, Od, md, .9]
          }, {
            timeFraction: 1,
            minColor: [dd, Od, md, 0]
          }],
          blendMode: VO.g.Standard
        }
      }
    }
    var pm = md(38218);
    const Ym = [{
        icon: "eyes",
        key: "secretSantaHud:introSantas"
      }, {
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }],
      gm = (0, Rd.memo)((function() {
        const {
          t: dd
        } = (0, od.G)();
        return (0, nd.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, nd.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, nd.jsx)(ed.c, {
              name: "user-secret"
            }), (0, nd.jsx)("span", {
              children: dd("secretSantaHud:introHeadline")
            })]
          }), Ym.map((Od => {
            let {
              icon: md,
              key: Wd
            } = Od;
            return (0, nd.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, nd.jsx)(ed.c, {
                name: md,
                fixedWidth: !0
              }), (0, nd.jsx)("span", {
                children: dd(Wd)
              })]
            }, Wd)
          }))]
        })
      })),
      wm = (0, Rd.memo)((function(dd) {
        let {
          controller: Od
        } = dd;
        return (0, nd.jsx)("div", {
          ref: Od.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, nd.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, nd.jsx)(gm, {})
          })
        })
      })),
      am = "secretSantaIntroShown";
    class Em {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = dd => {
          this.element = dd, this.drawn = -1
        }, this.bindIntro = dd => {
          this.intro = dd, this.drawnIntro = null
        }
      }
      receiveFlyover(dd) {
        this.armedUntil = performance.now() + dd + 3e3
      }
      frame(dd) {
        const Od = performance.now(),
          md = this.snowAlpha(Od);
        if (this.drawIntro(Od, md), md <= 0) return null !== this.shownAt && (Od < this.armedUntil && this.startIntro(Od), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (md < 1 || dd && Od >= this.armedUntil) return void this.draw(0);
          this.shownAt = Od
        }
        this.draw(Math.min(1, (Od - this.shownAt) / 300) * md)
      }
      startIntro(dd) {
        var Od;
        const md = null !== (Od = td.k.getItem(am)) && void 0 !== Od ? Od : 0;
        td.k.setItem(am, md + 1), this.introUntil = dd + (md < 3 ? 4900 : 3e3)
      }
      drawIntro(dd, Od) {
        0 !== this.introUntil && (dd >= this.introUntil || Od > 0) && (this.introUntil = 0);
        const md = 0 !== this.introUntil;
        this.intro && md !== this.drawnIntro && (this.drawnIntro = md, this.intro.classList.toggle("Shown", md))
      }
      snowAlpha(dd) {
        var Od, md, Wd, Fd;
        (null === (Od = this.fade) || void 0 === Od || !Od.isConnected) && dd - this.fadeLookedAt >= 250 && (this.fadeLookedAt = dd, this.fade = document.querySelector(`[${pm.d}]`));
        const Rd = null === (md = this.fade) || void 0 === md ? void 0 : md.style;
        if (!Rd || "none" === Rd.display) return 0;
        const Xd = null !== (Wd = null === (Fd = Rd.backgroundColor.match(/\d+/g)) || void 0 === Fd ? void 0 : Fd.slice(0, 3).map(Number)) && void 0 !== Wd ? Wd : [];
        return 3 === Xd.length && Xd.every((dd => dd >= 200)) && Number(Rd.opacity) || 0
      }
      draw(dd) {
        const Od = Math.round(100 * dd) / 100;
        this.element && Od !== this.drawn && (this.drawn = Od, this.element.style.opacity = String(Od), this.element.style.display = Od > 0 ? "flex" : "none")
      }
    }
    const Jm = (0, Rd.memo)((function(dd) {
        let {
          controller: Od
        } = dd;
        const {
          t: md
        } = (0, od.G)();
        return (0, nd.jsx)("div", {
          ref: Od.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, nd.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, nd.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, nd.jsx)(ed.c, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), md("secretSantaHud:titleName")]
            }), (0, nd.jsx)(gm, {})]
          })
        })
      })),
      Um = "SecretSantaMode",
      xm = Wd.i.yb * Wd.i.playerEyeToHeightRatio;

    function Bm(dd) {
      document.body.classList.toggle("SecretSantaPodium", dd)
    }
    const Sm = function(dd, Od, md, Wd) {
      let {
        localPlayerId: Fd
      } = Wd;
      const Kd = new rd((() => {
          var dd;
          null === (dd = Hd) || void 0 === dd || dd.wrapStarted()
        })),
        hd = new Em,
        vd = [0, 0, 0];
      let Qd = null;
      const td = [0, 0, 0],
        od = [0, 0, 0];
      let Nd = null,
        qd = null,
        Hd = null,
        yd = null,
        bd = null,
        Td = null,
        pd = null;
      const Yd = dd => {
          Nd && null !== dd && dd !== Fd && !pd && (pd = {
            target: dd,
            at: performance.now(),
            first: null
          })
        },
        gd = (dd, Od) => {
          pd = null, Kd.pressGift(dd.at, Od) && (Qd = dd.target)
        },
        wd = (dd, Od) => {
          if (null === Qd) return;
          if (!dd.readDrawnPosition(Qd, td)) return void(Qd = null);
          od[0] = Od[0], od[1] = Od[1] + xm, od[2] = Od[2];
          const md = Math.hypot(td[0] - Od[0], td[1] - Od[1], td[2] - Od[2]);
          Kd.aimAtWrap(function(dd, Od, md) {
            const Wd = md[0] - dd[0],
              Fd = md[2] - dd[2],
              Rd = Math.hypot(Od[0], Od[2]);
            let Xd = dd[1];
            const Kd = Rd > 0 ? (Wd * Od[0] + Fd * Od[2]) / Rd : 0;
            Kd > 0 && (Xd += Od[1] / Rd * Kd), Xd = Math.max(md[1], Math.min(md[1] + 1.8, Xd));
            const hd = [Wd, Xd - dd[1], Fd],
              vd = Math.hypot(hd[0], hd[1], hd[2]),
              Qd = Math.hypot(Od[0], Od[1], Od[2]);
            if (0 === vd || 0 === Qd) return 0;
            const td = (hd[0] * Od[0] + hd[1] * Od[1] + hd[2] * Od[2]) / (vd * Qd);
            return 180 * Math.acos(Math.max(-1, Math.min(1, td))) / Math.PI
          }(od, dd.getActionRay().direction, td), md) || (Qd = null)
        },
        Ed = (dd, Od, md) => {
          const Wd = [0, 0, 0];
          md && dd.readDrawnPosition(Od.target, Wd) ? Od.first ? gd(Od, function(dd, Od, md, Wd) {
            const Fd = md[0] - dd[0],
              Rd = md[1] - dd[1],
              Xd = md[2] - dd[2],
              Kd = Math.hypot(Fd, Rd, Xd);
            return 0 === Kd || Wd <= 0 ? {
              distance: Kd,
              awaySpeed: 0
            } : {
              distance: Kd,
              awaySpeed: (Fd * (md[0] - Od[0]) + Rd * (md[1] - Od[1]) + Xd * (md[2] - Od[2])) / Kd / Wd
            }
          }(md, Od.first.pos, Wd, (performance.now() - Od.first.at) / 1e3)) : Od.first = {
            pos: Wd,
            at: performance.now()
          } : gd(Od, null)
        };
      return {
        onCreate: dd => {
          Nd = dd, document.body.classList.add(Um), Hd = new mm(dd, Fd), yd = new Tm(dd), bd = new Wm(dd), Td = new Km(dd), qd = (0, Xd.F)((0, Rd.createElement)(Rd.Fragment, null, (0, Rd.createElement)(aO, {
            controller: Kd
          }), (0, Rd.createElement)(Pd, {
            controller: Kd
          }), (0, Rd.createElement)(Jm, {
            controller: hd
          }), (0, Rd.createElement)(wm, {
            controller: hd
          })))
        },
        onClose: () => {
          var dd, Od, md, Wd;
          document.body.classList.remove(Um), Bm(!1), null === (dd = qd) || void 0 === dd || dd(), qd = null, Kd.dispose(), null === (Od = Hd) || void 0 === Od || Od.dispose(), Hd = null, null === (md = yd) || void 0 === md || md.dispose(), yd = null, bd = null, null === (Wd = Td) || void 0 === Wd || Wd.dispose(), Td = null, Nd = null
        },
        onPlayerAltAction: (dd, Od, md, Wd, Fd, Rd) => {
          Yd(Rd)
        },
        onPlayerAttackEntity: (dd, Od) => {
          Yd(Od)
        },
        onAfterRender: (dd, Od) => {
          var md, Wd, Rd, Xd;
          const Qd = null !== (md = Nd) && void 0 !== md && md.readDrawnPosition(Fd, vd) ? vd : null;
          pd && Nd && Ed(Nd, pd, Qd), Nd && Qd && wd(Nd, Qd), Kd.frame(Od.cameraHeading, Qd), null === (Wd = Hd) || void 0 === Wd || Wd.frame(Od), null === (Rd = yd) || void 0 === Rd || Rd.onAfterRender(Od.cameraPosition), null === (Xd = bd) || void 0 === Xd || Xd.frame(Qd), hd.frame(Kd.getView().shown)
        },
        onReceivedMessageFromServer: (dd, Od) => {
          var md;
          if ("secretSantaHint" === dd) Kd.receiveHint(Od), null === (md = Hd) || void 0 === md || md.receiveHint(Od);
          else if ("secretSantaStatus" === dd) {
            var Wd;
            Kd.receiveStatus(Od), null === (Wd = Hd) || void 0 === Wd || Wd.receiveStatus(Od)
          } else if ("secretSantaWrap" === dd) {
            pd && gd(pd, null);
            const {
              santaWrapMs: dd,
              santaWrapDone: md
            } = Od;
            Kd.receiveWrap(dd, md)
          } else if ("secretSantaMarket" === dd) {
            var Fd;
            null === (Fd = Hd) || void 0 === Fd || Fd.reset(), Kd.receiveMarket(Od)
          } else if ("secretSantaBells" === dd) {
            var Rd;
            const {
              santaBellsLevel: dd
            } = Od;
            Kd.receiveBells(dd), null === (Rd = Hd) || void 0 === Rd || Rd.setBells(dd)
          } else if ("secretSantaFx" === dd) {
            var Xd;
            const dd = Od;
            "toTunnel" === dd.santaFxKind && Kd.snowBlink(), null === (Xd = Hd) || void 0 === Xd || Xd.receiveFx(dd)
          } else if ("secretSantaFlyover" === dd) {
            var vd;
            null === (vd = bd) || void 0 === vd || vd.Yt(Od), hd.receiveFlyover(Od.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === dd) {
            const {
              santaPodiumShown: dd
            } = Od;
            var Qd;
            if (Bm(dd), !dd) null === (Qd = Td) || void 0 === Qd || Qd.resend()
          }
        }
      }
    }
  },
  40080: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      h: () => Fd
    });
    var Wd = md(405);
    const Fd = (0, Wd.rb)([0, 0, -1]),
      Rd = [{
        name: "S",
        bearing: (0, Wd.rb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Wd.rb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Fd
      }, {
        name: "W",
        bearing: (0, Wd.rb)([1, 0, 0])
      }]
  },
  40074: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      d: () => Rd
    });
    var Wd = md(40080);

    function Fd(dd, Od, md) {
      return [100 * (md.mapMaxX - dd) / (md.mapMaxX - md.mapMinX), 100 * (Od - md.mapMinZ) / (md.mapMaxZ - md.mapMinZ)]
    }

    function Rd(dd, Od, md, Rd) {
      const [Xd, Kd] = Fd(dd, Od, Rd), hd = Wd.h - md;
      return {
        rotation: hd,
        transform: `rotate(${hd}rad) translate(-${Xd}%, -${Kd}%)`
      }
    }
  },
  40748: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      f: () => Rd
    });
    const Wd = 1 / .6,
      Fd = {
        kind: "smokePuff"
      };
    class Rd {
      constructor(dd, Od, md) {
        this.style = dd, this.Mt = Od, this.half = md, this.particles = null, this.lastFrame = -1
      }
      emit(dd, Od, md) {
        let Rd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return md !== this.lastFrame && (this.lastFrame = md, this.particles || (this.particles = dd.createParticles(function(dd, Od) {
          const [
            [md, Rd, Xd],
            [Kd, hd, vd]
          ] = dd.colours;
          return {
            texture: dd.soft ? Fd : "square_particle",
            Mt: Od,
            minLifeTime: dd.life[0] / Wd,
            maxLifeTime: dd.life[1] / Wd,
            minEmitPower: dd.power[0] * Wd,
            maxEmitPower: dd.power[1] * Wd,
            minSize: dd.size[0],
            maxSize: dd.size[1],
            emitRate: 0,
            gravity: [0, dd.lift * Wd * Wd, 0],
            dir1: [-dd.spread, 1, -dd.spread],
            dir2: [dd.spread, 1, dd.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [md, Rd, Xd, dd.alpha],
              maxColor: [Kd, hd, vd, dd.alpha]
            }, {
              timeFraction: 1,
              minColor: [md, Rd, Xd, 0],
              maxColor: [Kd, hd, vd, 0]
            }],
            blendMode: dd.blendMode
          }
        }(this.style, this.Mt), {
          pos: Od,
          half: this.half
        })), this.particles.moveTo(Od, this.half), this.particles.emit(Rd), !0)
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null
      }
    }
  },
  40455: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    const Wd = 1400,
      Fd = .45;

    function Rd(dd) {
      return dd < Wd ? Math.pow(Wd / dd, Fd) : 1
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);