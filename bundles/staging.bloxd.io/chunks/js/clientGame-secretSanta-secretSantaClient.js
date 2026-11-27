export const id = 28;
export const ids = [28];
export const modules = {
  37796: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR,
      d: () => nR,
      g: () => wR,
      j: () => KR
    });
    var yR = GR(35140),
      tR = GR(3494),
      uR = GR(3498),
      ZR = GR(10048),
      qR = GR(1581),
      iR = GR(66),
      fR = GR(83),
      VR = GR(1378);

    function KR() {
      var RR;
      return (0, qR.h)(tR.e, (0, tR.r)()), (0, VR.jsx)(VR.Fragment, {
        children: null === (RR = (0, tR.r)()) || void 0 === RR ? void 0 : RR.content
      })
    }

    function wR(RR) {
      var JR;
      let {
        show: GR
      } = RR;
      (0, qR.h)(tR.e, (0, tR.r)());
      const fR = null === (JR = (0, tR.r)()) || void 0 === JR ? void 0 : JR.menu;
      return (0, iR.useEffect)((() => {
        var RR;
        GR || (null === fR || void 0 === fR || null === (RR = fR.onClose) || void 0 === RR || RR.call(fR), (0, uR.m)())
      }), [GR, fR]), (0, iR.useEffect)((() => GR ? (0, ZR.e)(uR.q, uR.e) : void 0), [GR]), (0, VR.jsx)(yR.b, {
        showing: GR,
        globallyUniqueKey: "clientGameMenu",
        children: null === fR || void 0 === fR ? void 0 : fR.content
      })
    }
    const rR = new Map,
      eR = new Set;

    function aR(RR, JR) {
      JR ? rR.set(RR, JR) : rR.delete(RR);
      for (const GR of eR) GR()
    }

    function LR(RR) {
      let {
        placement: JR = "bottom"
      } = RR;
      const GR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const RR = GR.current;
        return aR(JR, RR), () => {
          rR.get(JR) === RR && aR(JR, null)
        }
      }), [JR]), (0, VR.jsx)("div", {
        ref: GR,
        id: `clientGameHud-${JR}`,
        style: {
          display: "contents"
        }
      })
    }

    function nR(RR) {
      let {
        children: JR,
        placement: GR = "bottom"
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => {
        var RR;
        return null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null
      }));
      return (0, iR.useEffect)((() => {
        const RR = () => {
          var RR;
          tR(null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null)
        };
        return eR.add(RR), RR(), () => {
          eR.delete(RR)
        }
      }), [GR]), yR ? (0, fR.createPortal)(JR, yR) : null
    }
  },
  37676: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => gR,
      e: () => BR,
      g: () => lR,
      k: () => XR,
      n: () => MR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(4352),
      qR = GR(359),
      iR = GR(3465),
      fR = GR(32),
      VR = GR(2163),
      KR = GR(46),
      wR = GR(2173),
      rR = GR(25),
      eR = GR(2186),
      aR = GR(1532),
      LR = GR(10178),
      nR = GR(2211),
      UR = GR(1270),
      WR = GR(37685),
      AR = GR(1378);
    const CR = 7e3;

    function XR() {
      const {
        loadingOverlayVisible: RR,
        openInGameMenuName: JR,
        openEverythingMenuName: GR
      } = (0, rR.o)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return RR || null !== JR || null !== GR
    }

    function MR(RR, JR, GR) {
      const tR = (0, yR.useRef)(GR);
      tR.current = GR;
      const uR = (0, yR.useRef)({
        card: RR,
        ms: 0
      });
      (0, yR.useEffect)((() => {
        if (JR || null === RR) return;
        uR.current.card !== RR && (uR.current = {
          card: RR,
          ms: 0
        });
        const GR = uR.current,
          yR = performance.now(),
          ZR = setTimeout((() => {
            tR.current()
          }), CR - GR.ms);
        return () => {
          clearTimeout(ZR), GR.ms += performance.now() - yR
        }
      }), [JR, RR])
    }
    const BR = (0, yR.memo)((function() {
      const {
        isTouchScreen: RR
      } = (0, rR.o)(["isTouchScreen"]), JR = (0, aR.s)();
      (0, ZR.e)();
      const GR = (0, iR.f)("showBasicMovementControls"),
        [tR, VR] = (0, yR.useState)("movement"),
        wR = "movement" === tR,
        eR = JR && !1 !== GR;
      (0, yR.useEffect)((() => {
        "padActions" !== tR || eR || VR("done")
      }), [tR, eR]);
      const LR = XR();
      MR("done" === tR ? null : tR, LR, (() => {
        VR("movement" === tR && (0, aR.j)() ? "padActions" : "done")
      }));
      const nR = KR.i.getItem(qR.Eb) > 2,
        UR = (!RR || JR) && wR && !1 !== GR,
        CR = "padActions" === tR && eR,
        BR = (0, yR.useRef)(null);
      (0, WR.f)(!nR && !LR && UR, BR), (0, WR.f)(!nR && !LR && CR);
      const vR = !nR && UR;
      return (0, yR.useEffect)((() => {
        vR && !LR && fR.n.JK("controlsTutorialShown", "movement")
      }), [vR, LR]), nR ? (0, AR.jsx)(bR, {
        showingMovementControls: !1
      }) : (0, AR.jsxs)(AR.Fragment, {
        children: [UR ? (0, AR.jsxs)("div", {
          ref: BR,
          className: uR()("ControlsTutorialDiv", {
            Covered: LR
          }),
          children: [(0, AR.jsx)(lR, {}), (0, AR.jsx)(gR, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, AR.jsx)(gR, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, CR && (0, AR.jsx)(pR, {
          covered: LR
        }), (0, AR.jsx)(bR, {
          showingMovementControls: "done" !== tR
        })]
      })
    }));

    function lR() {
      const RR = (0, aR.s)();
      return (0, AR.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, AR.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), RR && (0, AR.jsx)(eR.c, {
          noaAction: "forward"
        }), !RR && (0, AR.jsxs)(AR.Fragment, {
          children: [(0, AR.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, AR.jsx)(eR.c, {
              noaAction: "forward"
            })
          }), (0, AR.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, AR.jsx)(eR.c, {
              noaAction: "left"
            }), (0, AR.jsx)(eR.c, {
              noaAction: "backward"
            }), (0, AR.jsx)(eR.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function pR(RR) {
      let {
        covered: JR
      } = RR;
      const {
        t: GR
      } = (0, UR.A)(), yR = (0, iR.f)("useInventory");
      return (0, AR.jsxs)("div", {
        className: uR()("ControlsTutorialDiv", {
          Covered: JR
        }),
        children: [(0, AR.jsx)(gR, {
          header: GR("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, AR.jsx)(gR, {
          header: GR("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== yR && (0, AR.jsx)(gR, {
          header: GR("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, AR.jsx)(gR, {
          header: GR("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function gR(RR) {
      let {
        header: JR,
        noaAction: GR
      } = RR;
      return (0, AR.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, AR.jsx)("div", {
          className: "KeyHeader",
          children: JR
        }), (0, AR.jsx)(eR.c, {
          noaAction: GR
        })]
      })
    }

    function bR(RR) {
      let {
        showingMovementControls: JR
      } = RR;
      const {
        isTouchScreen: GR
      } = (0, rR.o)(["isTouchScreen"]), tR = (0, aR.s)(), uR = (0, nR.c)("OpenShop"), [ZR, qR] = (0, yR.useState)(!1), eR = `SeenShopControls|${(0,wR.e)("connectedGame",(RR=>RR.gameNameWithVariation))}`, UR = () => (!(0, aR.j)() || null !== (0, LR.e)("OpenShop")) && !KR.i.getItem(eR) && VR.c.get("shopInfo") && !JR, WR = () => (qR(!0), KR.i.setItem(eR, !0), (0, aR.j)() || fR.n.JK("showShopTouchTutorial"), setTimeout((() => {
        qR(!1)
      }), 7e3));
      (0, yR.useEffect)((() => {
        let RR;
        const JR = fR.n.subscribe("showShopTutorial", (() => {
          UR() && (RR = WR())
        }));
        return () => {
          clearTimeout(RR), fR.n.unsubscribe(JR)
        }
      }), [JR]);
      const CR = (0, yR.useRef)();
      return (0, iR.e)("currencyAmounts", (RR => {
        if (UR()) {
          let GR = !1;
          const yR = VR.c.get("shopInfo");
          for (const tR in yR) {
            for (const uR in yR[tR].items) {
              var JR;
              const ZR = yR[tR].items[uR];
              if (void 0 !== ZR.currency && RR[ZR.currency] && ZR.cost <= RR[ZR.currency].amount && (null === (JR = ZR.hidden) || void 0 === JR || !JR)) {
                GR = !0;
                break
              }
            }
            if (GR) break
          }
          GR && (CR.current = WR())
        }
      })), (0, yR.useEffect)((() => () => {
        clearTimeout(CR.current)
      }), [JR]), !ZR || tR && !uR ? null : (0, AR.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: GR && !tR ? null : (0, AR.jsx)(gR, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  37685: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      f: () => qR,
      j: () => fR
    });
    var yR = GR(66);
    const tR = new Set,
      uR = new Set;

    function ZR() {
      for (const RR of uR) RR()
    }

    function qR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, yR.useEffect)((() => RR ? function() {
        const RR = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return tR.add(RR), ZR(), () => {
          tR.delete(RR) && ZR()
        }
      }(JR) : void 0), [RR, JR]), (0, yR.useEffect)((() => {
        RR && ZR()
      }), [RR, GR])
    }

    function iR() {
      const RR = [];
      for (const {
          element: GR
        }
        of tR) {
        var JR;
        if (null === GR) return {
          anywhere: !0,
          boxes: []
        };
        const yR = null === (JR = GR.current) || void 0 === JR ? void 0 : JR.getBoundingClientRect();
        yR && yR.width > 0 && RR.push(yR)
      }
      return {
        anywhere: !1,
        boxes: RR
      }
    }

    function fR(RR) {
      return uR.add(RR), () => {
        uR.delete(RR)
      }
    }
  },
  37849: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR,
      i: () => fR,
      k: () => VR,
      l: () => eR
    });
    var yR = GR(66),
      tR = GR(4352),
      uR = GR(3593),
      ZR = GR(32);
    const qR = 8,
      iR = "InGameHeaderContainer",
      fR = "TopRightElements";

    function VR(RR) {
      const [JR] = (0, tR.e)(), [GR, uR] = (0, yR.useState)(!1);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const JR = document.querySelector(`.${iR}`),
          GR = document.querySelector(`.${fR}`),
          yR = () => {
            const yR = RR.getBoundingClientRect(),
              tR = JR ? JR.getBoundingClientRect().right : 0,
              ZR = GR ? GR.getBoundingClientRect().left : window.innerWidth,
              iR = yR.left < tR + qR,
              fR = yR.right > ZR - qR;
            uR(iR || fR)
          };
        yR();
        const tR = new ResizeObserver(yR);
        return tR.observe(RR), JR && tR.observe(JR), GR && tR.observe(GR), () => {
          tR.disconnect()
        }
      }), [RR, JR]), GR
    }
    const KR = `.InGameUi .${iR}`,
      wR = [KR, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      rR = 1e3;

    function eR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR,
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [tR, iR] = (0, yR.useState)(null);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const yR = new ResizeObserver((() => {
          fR()
        }));
        yR.observe(RR), JR && JR !== RR && yR.observe(JR);
        let tR = [];

        function fR() {
          var uR, ZR, fR;
          const VR = RR.getBoundingClientRect(),
            rR = function() {
              const RR = wR.map((RR => document.querySelector(RR))).filter((RR => null !== RR));
              for (const JR of RR) tR.includes(JR) || yR.observe(JR);
              for (const JR of tR) RR.includes(JR) || yR.unobserve(JR);
              return tR = RR, RR
            }(),
            eR = rR.filter((RR => {
              const JR = RR.getBoundingClientRect();
              return JR.width > 0 && JR.height > 0 && VR.left < JR.right + qR && VR.right > JR.left - qR
            }));
          if (0 === eR.length && !GR) return void iR(null);
          const aR = rR.find((RR => RR.matches(KR))),
            LR = Math.max(null !== (uR = null === aR || void 0 === aR ? void 0 : aR.getBoundingClientRect().bottom) && void 0 !== uR ? uR : 0, ...eR.map((RR => RR.getBoundingClientRect().bottom))),
            nR = null !== (ZR = null === JR || void 0 === JR || null === (fR = JR.offsetParent) || void 0 === fR ? void 0 : fR.getBoundingClientRect().top) && void 0 !== ZR ? ZR : 0;
          iR(Math.ceil(LR + qR / 2) - Math.round(nR))
        }
        const VR = setInterval(fR, rR);
        fR(), window.addEventListener("resize", fR);
        const eR = (0, ZR.q)(uR.h, fR);
        return () => {
          yR.disconnect(), clearInterval(VR), window.removeEventListener("resize", fR), eR()
        }
      }), [RR, JR, GR]), tR
    }
  },
  37810: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      g: () => tR,
      j: () => uR
    });
    var yR = GR(66);

    function tR(RR) {
      return qR(RR, iR)
    }

    function uR(RR) {
      return qR(RR, fR)
    }

    function ZR(RR) {
      return `${Math.floor(RR/60)}:${String(RR%60).padStart(2,"0")}`
    }

    function qR(RR, JR) {
      const [, GR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        if (0 === RR) return;
        const yR = window.setInterval((() => {
          const yR = JR(RR);
          GR((JR => (null === JR || void 0 === JR ? void 0 : JR.endsAt) === RR && JR.value === yR ? JR : {
            endsAt: RR,
            value: yR
          }))
        }), 250);
        return () => {
          window.clearInterval(yR)
        }
      }), [RR, JR]), JR(RR)
    }

    function iR(RR) {
      return (RR - performance.now()) / 1e3
    }

    function fR(RR) {
      return Math.max(0, Math.ceil(iR(RR)))
    }
  },
  10178: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      g: () => fR,
      k: () => KR,
      m: () => VR,
      q: () => iR,
      s: () => rR
    });
    var yR = GR(32),
      tR = GR(2218),
      uR = GR(1547),
      ZR = GR(1532);
    const qR = RR => {
        var JR, GR;
        return (0, ZR.j)() && null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getGlyphForNoaAction(RR)) && void 0 !== JR ? JR : null
      },
      iR = "controllerGlyph:",
      fR = RR => {
        var JR, GR;
        return null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getPadGlyphIconName(RR)) && void 0 !== JR ? JR : `${iR}xbox/${RR}`
      },
      VR = RR => RR.startsWith(iR),
      KR = RR => {
        var JR, GR;
        return VR(RR) && null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getPadGlyphIconUrl(RR)) && void 0 !== JR ? JR : null
      },
      wR = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", ZR.d, tR.d, tR.c],
      rR = RR => {
        const JR = wR.map((JR => yR.n.subscribe(JR, RR)));
        return () => {
          for (const RR of JR) yR.n.unsubscribe(RR)
        }
      }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  39767: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    const yR = 4,
      tR = 12e3,
      uR = 1e3;
    class ZR {
      constructor() {
        let {
          limit: RR = yR,
          windowMs: JR = tR,
          spacingMs: GR = uR,
          now: ZR = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = RR, this.windowMs = JR, this.spacingMs = GR, this.now = ZR
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const RR of this.priority) RR.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const RR = this.now();
        this.sent.push(RR), this.lastSentAt = RR, this.schedule(), this.notify()
      }
      addPriority(RR) {
        return this.priority.add(RR), () => {
          this.priority.delete(RR)
        }
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const RR of this.priority)
          if (RR.waiting()) return !0;
        return !1
      }
      prune() {
        const RR = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= RR;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const RR = this.now(),
          JR = this.lastSentAt + this.spacingMs,
          GR = Math.min(JR > RR ? JR : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        GR !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, GR - RR)))
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  40879: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => pG
    });
    var yR = GR(203);
    const tR = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var uR = GR(66),
      ZR = GR(3494),
      qR = GR(1163),
      iR = GR.n(qR),
      fR = GR(25),
      VR = GR(1532),
      KR = GR(46),
      wR = GR(1270),
      rR = GR(37676),
      eR = GR(1581),
      aR = GR(32);
    var LR = GR(39722),
      nR = GR(39713);
    const UR = 2 * Math.PI * 17;

    function WR(RR, JR, GR) {
      const {
        santaMarketMinX: yR,
        santaMarketMinZ: tR,
        santaMarketSize: uR
      } = RR;
      return (0, nR.d)(JR, GR, {
        mapMinX: yR,
        mapMaxX: yR + uR,
        mapMinZ: tR,
        mapMaxZ: tR + uR
      })
    }

    function AR(RR, JR, GR) {
      return function(RR, JR, GR, yR, tR) {
        const uR = GR / 3,
          ZR = RR => Math.min(2, Math.max(0, Math.floor(RR / uR)));
        return 3 * ZR(tR - JR) + 2 - ZR(yR - RR)
      }(RR.santaMarketMinX, RR.santaMarketMinZ, RR.santaMarketSize, JR, GR)
    }
    const CR = "secretSantaDistrictEntered",
      XR = "data-here";
    class MR {
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
      update(RR, JR, GR, yR, tR) {
        const uR = performance.now(),
          ZR = 100 / RR.santaMarketSize,
          qR = 4 + .008 * Math.min(1e3, uR - this.lastAt),
          iR = Math.hypot(JR - this.lastLeft, GR - this.lastTop) > qR * ZR;
        this.lastLeft = JR, this.lastTop = GR, this.lastAt = uR;
        const fR = iR ? -1 : this.here,
          VR = function(RR, JR, GR, yR, tR) {
            if (RR >= 0) {
              const JR = 100 / 3,
                uR = RR % 3 * JR,
                ZR = Math.floor(RR / 3) * JR;
              if (GR >= uR - tR && GR <= uR + JR + tR && yR >= ZR - tR && yR <= ZR + JR + tR) return RR
            }
            return JR
          }(fR, yR, JR, GR, 1.5 * ZR);
        if (VR !== this.here) {
          var KR, wR;
          this.here = VR;
          const JR = RR.santaMarketDistricts[VR];
          fR >= 0 && uR - (null !== (KR = this.bannerAt[VR]) && void 0 !== KR ? KR : -1 / 0) >= 8e3 ? (this.bannerAt[VR] = uR, this.bannerSeq++, this.setBanner({
            key: JR,
            seq: this.bannerSeq,
            at: uR
          })) : (null === (wR = this.getBanner()) || void 0 === wR ? void 0 : wR.key) !== JR && this.setBanner(null)
        }
        var rR, eR;
        this.here !== this.drawnHere && (null === (rR = this.drawnCell) || void 0 === rR || rR.removeAttribute(XR), this.drawnCell = tR.querySelector(`[data-district="${this.here}"]`), null === (eR = this.drawnCell) || void 0 === eR || eR.setAttribute(XR, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(RR) {
        null === RR && null === this.banner || (this.banner = RR, aR.n.JK(CR, RR))
      }
    }
    class BR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.at = RR, this.minSpanMs = JR, this.element = null, this.animation = null
      }
      bind(RR, JR, GR) {
        this.element = RR, this.run(JR, GR)
      }
      run(RR) {
        var JR;
        let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
        if (null === (JR = this.animation) || void 0 === JR || JR.cancel(), this.animation = null, !this.element || null === RR) return;
        const yR = Math.max(1, GR, this.minSpanMs),
          tR = yR - GR,
          uR = RR => Math.max(0, Math.min(1, RR / yR));
        this.animation = this.element.animate([this.at(uR(Math.max(0, RR) + tR)), this.at(uR(tR))], {
          duration: Math.max(1, RR),
          fill: "forwards"
        })
      }
    }

    function lR() {
      return new BR((RR => ({
        opacity: .5 + .5 * RR
      })), 5e3)
    }
    class pR {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(RR, JR, GR) {
        var yR, tR;
        this.forgetOldRoundTrips(RR);
        const uR = RR - this.lastPressAt;
        if (this.lastPressAt = RR, uR < this.quietMs() || this.awaitingTimedOut(RR) || "idle" !== this.state || GR || RR < this.cooldownUntil || null === JR) return 0;
        const ZR = Math.max(0, JR.awaySpeed) * ((null !== (yR = this.averageRoundTrip) && void 0 !== yR ? yR : 300) / 1e3);
        return JR.distance + ZR > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = RR, this.ownRing = !0, this.faded = !1, 500 + (null !== (tR = this.averageRoundTrip) && void 0 !== tR ? tR : 0))
      }
      turnedAway(RR, JR, GR) {
        if (!this.mayTurnAway(RR)) return !1;
        const yR = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(JR <= 40 + (yR >= GR ? 180 : 180 * Math.asin(yR / GR) / Math.PI) && GR <= 5 + Math.max(.5, yR)) && (this.faded = !0, !0)
      }
      mayTurnAway(RR) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && RR - this.predictedAt <= 350
      }
      BK(RR, JR, GR) {
        const yR = JR > 0 || !GR,
          tR = "predicted" === this.state;
        return GR && (this.cooldownUntil = RR + 1e3), yR && tR ? this.learnRoundTrip(RR, RR - this.predictedAt) : yR && this.awaitingTimedOut(RR) && (this.timedOutPressAt = null), JR > 0 ? (this.state = "confirmed", tR ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: JR
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !GR ? null : {
          kind: "end",
          done: GR
        })
      }
      expired(RR) {
        var JR;
        return !("predicted" !== this.state || RR - this.predictedAt < 1200 + (null !== (JR = this.averageRoundTrip) && void 0 !== JR ? JR : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(RR, RR - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var RR;
        const JR = this.recentRoundTrips.reduce(((RR, JR) => {
          let {
            ms: GR
          } = JR;
          return Math.max(RR, GR)
        }), null !== (RR = this.averageRoundTrip) && void 0 !== RR ? RR : 0);
        return Math.max(300, JR > 0 ? 1.5 * JR + 300 : 1e3)
      }
      awaitingTimedOut(RR) {
        return null !== this.timedOutPressAt && RR - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(RR) {
        for (; this.recentRoundTrips.length > 0 && RR - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(RR, JR) {
        const GR = Math.min(2e3, Math.max(0, JR));
        this.averageRoundTrip = null === this.averageRoundTrip ? GR : this.averageRoundTrip + .3 * (GR - this.averageRoundTrip), this.recentRoundTrips.push({
          at: RR,
          ms: GR
        })
      }
    }
    const gR = "secretSantaHudChanged",
      bR = "SecretSantaHudShown",
      vR = "SecretSantaMatchOrFinish",
      OR = "SecretSantaNaughtyLock",
      xR = ["Wrapping", "Naughty", "Cancelled"],
      NR = {
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
    class DR {
      constructor(RR) {
        this.onWrapStart = RR, this.view = NR, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = new BR((RR => ({
          strokeDashoffset: 1 - RR
        }))), this.targetGlow = lR(), this.circleFade = lR(), this.targetFreshAt = 0, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new pR, this.district = new MR, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = RR => {
          this.map = RR, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = RR => {
          this.arrow = RR, this.drawnArrow = ""
        }, this.bindCountdown = RR => {
          this.countdown.bind(RR, this.hintMsLeft())
        }, this.bindTargetGlow = RR => {
          this.targetGlow.bind(RR, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindCircleFade = RR => {
          this.circleFade.bind(RR, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindRing = RR => {
          var JR;
          this.stopRing(), this.ring = RR, this.ringFill = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".SecretSantaRingFill")) && void 0 !== JR ? JR : null;
          const GR = this.view.naughtyEndsAt - performance.now();
          RR && GR > 0 && this.runRing("Naughty", GR)
        }, this.bindFlash = RR => {
          var JR;
          null === (JR = this.flashAnimation) || void 0 === JR || JR.cancel(), this.flashAnimation = null, this.flash = RR
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(RR) {
        this.district.reset(), this.JK({
          ...this.view,
          market: RR,
          bells: 0
        })
      }
      receiveBells(RR) {
        RR !== this.view.bells && this.JK({
          ...this.view,
          bells: RR
        })
      }
      receiveHint(RR) {
        const JR = this.view.hint,
          GR = HR(this.view.nextHintAt, performance.now() + RR.santaHintNextInMs, 1e3),
          yR = GR > this.view.nextHintAt,
          tR = !JR || JR.santaHintContract !== RR.santaHintContract || JR.santaHintDistrict !== RR.santaHintDistrict || JR.santaHintCircleX !== RR.santaHintCircleX || JR.santaHintCircleZ !== RR.santaHintCircleZ,
          uR = "hunting" === RR.santaHintState && (yR || tR) ? this.view.pulse + 1 : this.view.pulse;
        uR !== this.view.pulse && (this.targetFreshAt = performance.now()), this.JK({
          ...this.view,
          hint: RR,
          nextHintAt: GR,
          pulse: uR
        }), this.restartCountdown()
      }
      receiveStatus(RR) {
        var JR, GR;
        const yR = performance.now(),
          tR = HR(this.view.endsAt, yR + RR.santaStatusMsLeft),
          uR = RR.santaStatusNaughtyMs > 0 ? HR(this.view.naughtyEndsAt, yR + RR.santaStatusNaughtyMs) : 0,
          ZR = 0 !== uR && 0 === this.view.naughtyEndsAt,
          qR = null !== (JR = RR.santaStatusTreeLitInMs) && void 0 !== JR ? JR : null,
          iR = null === qR ? 0 : HR(this.view.treeLitAt, yR + qR);
        this.JK({
          ...this.view,
          status: RR,
          endsAt: tR,
          naughtyEndsAt: uR,
          treeLitAt: iR,
          shown: RR.santaStatusMsLeft > 0
        }), this.scheduleEnd(tR - yR), ZR ? this.runRing("Naughty", RR.santaStatusNaughtyMs) : 0 === uR && null !== (GR = this.ring) && void 0 !== GR && GR.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(RR, JR) {
        if (!this.view.shown) return !1;
        const GR = this.wrap.press(RR, JR, this.view.naughtyEndsAt > RR);
        return GR > 0 && this.startWrapRing(Math.max(1, GR - (performance.now() - RR))), GR > 0
      }
      aimAtWrap(RR, JR) {
        const GR = performance.now();
        return this.wrap.turnedAway(GR, RR, JR) && this.endWrapRing(!1), this.wrap.mayTurnAway(GR)
      }
      receiveWrap(RR, JR) {
        const GR = this.wrap.BK(performance.now(), RR, JR);
        "start" === (null === GR || void 0 === GR ? void 0 : GR.kind) ? this.startWrapRing(GR.ms): "end" === (null === GR || void 0 === GR ? void 0 : GR.kind) && (GR.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(GR.done))
      }
      snowBlink() {
        var RR, JR, GR;
        null === (RR = this.flashAnimation) || void 0 === RR || RR.cancel();
        this.flashAnimation = null !== (JR = null === (GR = this.flash) || void 0 === GR ? void 0 : GR.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== JR ? JR : null
      }
      frame(RR, JR) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: GR,
          hint: yR
        } = this.view;
        if (!this.view.shown || !GR || !JR || !this.arrow || !this.map) return;
        const [tR, uR] = WR(GR, JR[0], JR[2]), ZR = Math.min(100, Math.max(0, tR)), qR = Math.min(100, Math.max(0, uR)), iR = Math.min(95, Math.max(5, ZR)), fR = Math.min(95, Math.max(5, qR)), VR = Math.round(180 * function(RR) {
          return RR - LR.g
        }(RR) / Math.PI), KR = `${iR.toFixed(1)}% ${fR.toFixed(1)}% ${VR}`;
        KR !== this.drawnArrow && (this.drawnArrow = KR, this.arrow.style.left = `${iR.toFixed(1)}%`, this.arrow.style.top = `${fR.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${VR}deg)`), this.district.update(GR, ZR, qR, AR(GR, JR[0], JR[2]), this.map);
        const wR = "hunting" === (null === yR || void 0 === yR ? void 0 : yR.santaHintState) ? yR : null,
          rR = null !== wR && function(RR, JR) {
            let [GR, , yR] = JR;
            const {
              santaHintCircleX: tR,
              santaHintCircleZ: uR,
              santaHintCircleR: ZR
            } = RR;
            return null !== tR && null !== uR && ZR > 0 && Math.hypot(GR - tR, yR - uR) <= ZR
          }(wR, JR);
        rR !== this.drawnInCircle && (this.drawnInCircle = rR, this.map.toggleAttribute("data-in-circle", rR))
      }
      dispose() {
        var RR;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(vR), this.countdown.bind(null, null), this.targetGlow.bind(null, null), this.circleFade.bind(null, null), this.stopRing(), null === (RR = this.flashAnimation) || void 0 === RR || RR.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.ringFill = null, this.district.dispose(), document.body.classList.remove(bR, OR), this.view = NR
      }
      JK(RR) {
        this.view = RR, document.body.classList.toggle(bR, RR.shown), document.body.classList.toggle(OR, RR.shown && 0 !== RR.naughtyEndsAt), RR.shown && (this.clearFinishEnd(), document.body.classList.add(vR)), aR.n.JK(gR, RR, !0)
      }
      scheduleEnd(RR) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.JK({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(vR)
          }), 13e3)
        }), RR)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      targetFadeMs() {
        return this.view.nextHintAt - this.targetFreshAt
      }
      hintMsLeft() {
        var RR;
        return "hunting" === (null === (RR = this.view.hint) || void 0 === RR ? void 0 : RR.santaHintState) ? this.view.nextHintAt - performance.now() : null
      }
      restartCountdown() {
        const RR = this.hintMsLeft();
        this.countdown.run(RR), this.targetGlow.run(RR, this.targetFadeMs()), this.circleFade.run(RR, this.targetFadeMs())
      }
      runRing(RR, JR) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(RR);
        const [GR, yR] = "Wrapping" === RR ? [UR, 0] : [0, UR], tR = [{
          strokeDashoffset: GR
        }, {
          strokeDashoffset: yR
        }], uR = this.ringFill.animate(tR, {
          duration: JR,
          fill: "forwards"
        });
        this.ringAnimation = uR, "Naughty" === RR && (uR.onfinish = () => {
          this.ringAnimation === uR && this.stopRing()
        })
      }
      startWrapRing(RR) {
        this.runRing("Wrapping", RR), this.onWrapStart()
      }
      endWrapRing(RR) {
        const JR = this.ring;
        if (null === JR || void 0 === JR || !JR.classList.contains("Wrapping")) return;
        var GR, yR;
        RR ? null === (GR = this.ringAnimation) || void 0 === GR || GR.finish() : null === (yR = this.ringAnimation) || void 0 === yR || yR.pause();
        JR.classList.toggle("Cancelled", !RR);
        const tR = JR.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: RR ? 1.6 : .8
        }], {
          duration: RR ? 350 : 300,
          easing: RR ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = tR, tR.onfinish = () => {
          this.ringEndAnimation === tR && this.stopRing()
        }
      }
      stopRing() {
        var RR, JR, GR;
        null === (RR = this.ringAnimation) || void 0 === RR || RR.cancel(), null === (JR = this.ringEndAnimation) || void 0 === JR || JR.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (GR = this.ring) || void 0 === GR || GR.classList.remove(...xR)
      }
    }

    function HR(RR, JR) {
      return 0 === RR || JR - RR > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? JR : Math.min(RR, JR)
    }
    var oR = GR(1378);
    const cR = "secretSantaControlsShown",
      PR = (0, uR.memo)((function(RR) {
        let {
          controller: JR
        } = RR;
        const {
          isTouchScreen: GR
        } = (0, fR.o)(["isTouchScreen"]), yR = (0, VR.s)(), {
          t: tR
        } = (0, wR.A)(), ZR = (0, eR.h)(gR, JR.getView()).shown, qR = (0, rR.k)(), [aR] = (0, uR.useState)((() => {
          var RR;
          return null !== (RR = KR.i.getItem(cR)) && void 0 !== RR ? RR : 0
        })), [LR, nR] = (0, uR.useState)(aR >= 2), [UR, WR] = (0, uR.useState)(!1), AR = (0, uR.useRef)(!1), CR = !LR && UR && ZR && (!GR || yR);
        return (0, uR.useEffect)((() => {
          if (!ZR || UR || LR) return;
          const RR = setTimeout((() => {
            WR(!0)
          }), 15500);
          return () => {
            clearTimeout(RR)
          }
        }), [ZR, UR, LR]), (0, uR.useEffect)((() => {
          !CR || qR || AR.current || (AR.current = !0, KR.i.setItem(cR, aR + 1))
        }), [CR, qR, aR]), (0, rR.n)(CR ? "secretSanta" : null, qR, (() => {
          nR(!0)
        })), CR ? (0, oR.jsxs)("div", {
          className: iR()("ControlsTutorialDiv", {
            Covered: qR
          }),
          children: [(0, oR.jsx)(rR.g, {}), (0, oR.jsx)(rR.d, {
            header: "Jump",
            noaAction: "jump"
          }), (0, oR.jsx)(rR.d, {
            header: tR("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), yR && (0, oR.jsx)(rR.d, {
            header: tR("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var IR = GR(37796),
      mR = GR(4717),
      zR = GR(37849),
      SR = GR(1179),
      jR = GR(1468),
      dR = GR(37810);
    const ER = (0, uR.memo)((function(RR) {
      let {
        controller: JR,
        naughtyEndsAt: GR
      } = RR;
      return (0, oR.jsxs)("div", {
        ref: JR.bindRing,
        className: "SecretSantaRing",
        children: [(0, oR.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, oR.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, oR.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: UR,
              strokeDashoffset: UR
            }
          })]
        }), GR > 0 && (0, oR.jsx)(YR, {
          endsAt: GR
        })]
      })
    }));

    function YR(RR) {
      let {
        endsAt: JR
      } = RR;
      const {
        t: GR
      } = (0, wR.A)(), yR = (0, dR.j)(JR);
      return yR <= 0 ? null : (0, oR.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, oR.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, oR.jsx)(jR.d, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", GR("secretSantaHud:naughty")]
        }), (0, oR.jsx)("span", {
          children: GR("secretSantaHud:naughtyWait", {
            seconds: yR
          })
        })]
      })
    }
    const kR = "user-magnifying-glass",
      QR = "tree-christmas",
      FR = {
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

    function TR(RR) {
      return RR && FR[RR] || "snowflake"
    }
    const sR = "SecretSantaDistrictBanner",
      hR = {
        animationDuration: "2200ms"
      },
      RJ = (0, uR.memo)((function(RR) {
        let {
          controller: JR
        } = RR;
        const {
          t: GR
        } = (0, wR.A)(), yR = (0, eR.h)(CR, JR.district.getBanner());
        return yR ? (0, oR.jsxs)("div", {
          className: iR()(sR, `District-${yR.key}`),
          style: hR,
          children: [(0, oR.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, oR.jsx)(jR.d, {
              name: TR(yR.key)
            })
          }), GR(`secretSantaHud:district_${yR.key}`)]
        }, yR.seq) : null
      }));
    var JJ = GR(2173),
      GJ = GR(1351);
    const yJ = "\x01",
      tJ = "\x02";

    function uJ(RR) {
      let {
        scarf: JR,
        className: GR
      } = RR;
      const {
        t: yR
      } = (0, wR.A)();
      return (0, oR.jsxs)("span", {
        className: iR()("SecretSantaScarf", `Scarf-${JR}`, GR),
        children: [(0, oR.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), yR(`secretSantaHud:scarfName_${JR}`)]
      })
    }
    const ZJ = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function qJ(RR) {
      let {
        hat: JR,
        className: GR
      } = RR;
      const {
        t: yR
      } = (0, wR.A)();
      return (0, oR.jsxs)("span", {
        className: iR()("SecretSantaHat", `Hat-${JR}`, GR),
        children: [(0, oR.jsx)(jR.d, {
          name: ZJ[JR]
        }), " ", yR(`secretSantaHud:hatName_${JR}`)]
      })
    }

    function iJ(RR) {
      let {
        scarf: JR,
        hat: GR
      } = RR;
      const {
        t: yR
      } = (0, wR.A)();
      return (0, oR.jsx)(oR.Fragment, {
        children: fJ(yR("secretSantaHud:lookName", {
          scarf: yJ,
          hat: tJ
        }), (0, oR.jsx)(uJ, {
          scarf: JR
        }), (0, oR.jsx)(qJ, {
          hat: GR
        }))
      })
    }

    function fJ(RR) {
      for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
      const tR = [];
      return RR.split(yJ).forEach(((RR, JR) => {
        JR > 0 && tR.push(GR[0]), RR.split(tJ).forEach(((RR, JR) => {
          JR > 0 && tR.push(GR[1]), tR.push(RR)
        }))
      })), tR.map(((RR, JR) => (0, oR.jsx)(uR.Fragment, {
        children: RR
      }, JR)))
    }
    const VJ = {
        circle: {
          icon: kR,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: QR,
          text: "secretSantaHud:targetLit"
        }
      },
      KJ = (0, uR.memo)((function(RR) {
        var JR, GR, yR;
        let {
          controller: tR,
          market: ZR,
          hint: qR,
          nextHintAt: fR,
          pulse: VR
        } = RR;
        const {
          t: KR
        } = (0, wR.A)(), rR = (0, JJ.i)("hiddenPlayerNames"), eR = null !== (JR = null === qR || void 0 === qR ? void 0 : qR.santaHintState) && void 0 !== JR ? JR : "none", aR = null !== (GR = null === qR || void 0 === qR ? void 0 : qR.santaHintTargetName) && void 0 !== GR ? GR : null, LR = null !== aR && (0, oR.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, GJ.e)(aR, rR)
        }), nR = "hunting" === eR && null !== qR, UR = nR && !0 === qR.santaHintTreeLit, WR = function(RR, JR) {
          const [GR, yR] = (0, uR.useState)(null);
          JR && (null === GR || void 0 === GR ? void 0 : GR.contract) !== RR && yR({
            contract: RR,
            until: performance.now() + 8e3
          });
          const tR = (null === GR || void 0 === GR ? void 0 : GR.contract) === RR ? GR.until : 0,
            ZR = (0, dR.j)(tR);
          0 !== tR && 0 === ZR && yR({
            contract: RR,
            until: 0
          });
          return JR && ZR > 0
        }(null !== (yR = null === qR || void 0 === qR ? void 0 : qR.santaHintContract) && void 0 !== yR ? yR : 0, nR && qR.santaHintCircleR > 0 && !UR);
        let AR, CR = `${eR}-${null!==aR&&void 0!==aR?aR:""}`;
        if (qR && "none" !== eR && LR)
          if ("lost" === eR) AR = (0, oR.jsxs)(oR.Fragment, {
            children: [(0, oR.jsx)(jR.d, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", fJ(KR("secretSantaHud:lostLine", {
              name: yJ
            }), LR)]
          });
          else if (null !== qR.santaHintScarf) {
          var XR, MR;
          CR += `-scarf-${qR.santaHintScarf}-${null!==(XR=qR.santaHintHat)&&void 0!==XR?XR:""}`, AR = fJ(KR("secretSantaHud:lookingFor", {
            name: yJ,
            clue: tJ
          }), LR, (0, oR.jsx)(rJ, {
            scarf: qR.santaHintScarf,
            hat: null !== (MR = qR.santaHintHat) && void 0 !== MR ? MR : null
          }))
        } else {
          const RR = null === ZR || void 0 === ZR ? void 0 : ZR.santaMarketDistricts[qR.santaHintDistrict];
          CR += `-district-${null!==RR&&void 0!==RR?RR:"?"}`, AR = fJ(KR("secretSantaHud:findIn", {
            name: yJ,
            district: tJ
          }), LR, (0, oR.jsxs)("span", {
            className: iR()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== RR && `District-${RR}`),
            children: [(0, oR.jsx)(jR.d, {
              name: TR(RR)
            }), " ", void 0 !== RR ? KR(`secretSantaHud:district_${RR}`) : "?"]
          }))
        } else AR = KR("secretSantaHud:finding");
        const [BR, lR] = (0, uR.useState)({
          key: CR,
          pulse: VR
        });
        BR.key !== CR && lR({
          key: CR,
          pulse: VR
        });
        const pR = BR.key === CR && VR !== BR.pulse;
        return (0, oR.jsxs)("div", {
          className: iR()("SecretSantaTarget", `State-${eR}`),
          children: [AR, "hunting" === eR && (0, oR.jsxs)(oR.Fragment, {
            children: [(0, oR.jsx)(wJ, {
              controller: tR,
              nextHintAt: fR,
              note: UR ? "lit" : WR ? "circle" : null
            }), pR && (0, oR.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, VR)]
          })]
        }, CR)
      }));

    function wJ(RR) {
      let {
        controller: JR,
        nextHintAt: GR,
        note: yR
      } = RR;
      const {
        t: tR
      } = (0, wR.A)(), ZR = (0, dR.j)(GR), [qR, iR] = (0, uR.useState)(null), [fR, VR] = (0, uR.useState)(null);
      (0, uR.useLayoutEffect)((() => {
        if (!qR) return;
        const RR = () => {
          const RR = qR.offsetWidth,
            JR = qR.offsetHeight;
          VR((GR => GR && GR.width === RR && GR.height === JR ? GR : {
            width: RR,
            height: JR
          }))
        };
        RR();
        const JR = new ResizeObserver(RR);
        return JR.observe(qR), () => {
          JR.disconnect()
        }
      }), [qR]);
      return (0, oR.jsxs)(oR.Fragment, {
        children: [(0, oR.jsx)("div", {
          ref: iR,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: fR && fR.width > 8 && fR.height > 8 && (0, oR.jsx)("svg", {
            viewBox: `0 0 ${fR.width} ${fR.height}`,
            children: (0, oR.jsx)("path", {
              ref: JR.bindCountdown,
              d: `M${fR.width/2} 2H${fR.width-2}V${fR.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === yR ? (0, oR.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, oR.jsx)(jR.d, {
            name: "arrows-rotate"
          }), " ", tR("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, ZR)
          })]
        }) : (0, oR.jsx)(eJ, {
          kind: yR
        }, yR)]
      })
    }

    function rJ(RR) {
      let {
        scarf: JR,
        hat: GR
      } = RR;
      return (0, oR.jsxs)(oR.Fragment, {
        children: [(0, oR.jsx)(uJ, {
          scarf: JR,
          className: "SecretSantaClueChip"
        }), null !== GR && (0, oR.jsxs)(oR.Fragment, {
          children: [(0, oR.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, oR.jsx)(qJ, {
            hat: GR,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function eJ(RR) {
      let {
        kind: JR
      } = RR;
      const {
        t: GR
      } = (0, wR.A)(), {
        icon: yR,
        text: tR
      } = VJ[JR];
      return (0, oR.jsxs)("div", {
        className: iR()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${JR}`),
        children: [(0, oR.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, oR.jsx)(jR.d, {
            name: yR
          })
        }), " ", GR(tR)]
      })
    }

    function aJ(RR) {
      let {
        litAt: JR,
        hunters: GR
      } = RR;
      const {
        t: yR
      } = (0, wR.A)(), tR = (0, dR.j)(JR);
      return (0, oR.jsxs)("span", {
        className: iR()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: tR <= 0
        }),
        children: [(0, oR.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, oR.jsx)(jR.d, {
            name: QR
          })
        }), " ", tR > 0 ? yR("secretSantaHud:treeLightsOn", {
          seconds: tR
        }) : yR(GR > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function LJ(RR) {
      let {
        on: JR
      } = RR;
      return (0, oR.jsx)("span", {
        className: iR()("SecretSantaTreeLightString", {
          On: JR
        }),
        "aria-hidden": "true"
      })
    }
    const nJ = (0, uR.memo)((function(RR) {
      var JR, GR;
      let {
        controller: yR,
        market: uR,
        hint: ZR,
        pulse: qR,
        treeLightsOn: fR
      } = RR;
      const {
        t: VR
      } = (0, wR.A)(), KR = null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.santaHintState) && void 0 !== JR ? JR : "none", rR = "hunting" === KR && ZR ? ZR.santaHintDistrict : -1, eR = null !== (GR = null === uR || void 0 === uR ? void 0 : uR.santaMarketDistricts) && void 0 !== GR ? GR : tR, aR = "hunting" === KR && uR && ZR ? function(RR, JR) {
        const {
          santaHintCircleX: GR,
          santaHintCircleZ: yR,
          santaHintCircleR: tR,
          santaHintContract: uR
        } = JR;
        if (null === GR || null === yR || tR <= 0) return null;
        const [ZR, qR] = WR(RR, GR, yR), iR = 200 * tR / RR.santaMarketSize, fR = UJ(ZR), VR = Math.sqrt(Math.max(0, (iR / 2) ** 2 - (fR - ZR) ** 2)), KR = UJ(qR - VR >= 9 ? qR - VR : qR + VR);
        return {
          left: ZR,
          top: qR,
          size: iR,
          contract: uR,
          badgeLeft: fR,
          badgeTop: KR
        }
      }(uR, ZR) : null;
      return (0, oR.jsxs)("div", {
        ref: yR.bindMap,
        className: iR()("SecretSantaMinimap", `State-${KR}`, {
          WithCircle: null !== aR
        }),
        children: [(0, oR.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,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",
          alt: "",
          draggable: !1
        }), (0, oR.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: eR.map(((RR, JR) => (0, oR.jsxs)("div", {
            className: iR()("SecretSantaDistrict", `District-${RR}`, {
              Target: JR === rR
            }),
            "data-district": JR,
            children: [(0, oR.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, oR.jsx)(jR.d, {
                name: TR(RR)
              })
            }), (0, oR.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: VR(`secretSantaHud:district_${RR}`)
            }), "greatTree" === RR && (0, oR.jsx)(LJ, {
              on: fR
            })]
          }, RR)))
        }), rR >= 0 && (0, oR.jsxs)("div", {
          className: "SecretSantaTargetCell",
          style: {
            left: rR % 3 * (100 / 3) + "%",
            top: Math.floor(rR / 3) * (100 / 3) + "%"
          },
          children: [(0, oR.jsx)("div", {
            ref: yR.bindTargetGlow,
            className: "SecretSantaTargetGlow"
          }), (0, oR.jsx)("div", {
            className: "SecretSantaDistrictPulse"
          }, qR)]
        }), aR && (0, oR.jsxs)("div", {
          ref: yR.bindCircleFade,
          className: "SecretSantaCircleClip",
          children: [(0, oR.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${aR.left}%`,
              top: `${aR.top}%`,
              width: `${aR.size}%`,
              height: `${aR.size}%`
            }
          }, aR.contract), (0, oR.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${aR.badgeLeft}%`,
              top: `${aR.badgeTop}%`
            },
            children: (0, oR.jsx)(jR.d, {
              name: kR
            })
          }, `badge-${aR.contract}`)]
        }), (0, oR.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, oR.jsx)("div", {
            ref: yR.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, oR.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, oR.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, oR.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, oR.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === KR && (0, oR.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, oR.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, oR.jsx)(jR.d, {
              name: "snowflake"
            })
          }), (0, oR.jsx)("span", {
            className: "SmallTextBold",
            children: VR("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function UJ(RR) {
      return Math.min(91, Math.max(9, RR))
    }

    function WJ(RR) {
      let {
        bells: JR
      } = RR;
      return (0, oR.jsx)("div", {
        className: iR()("SecretSantaFrost", `Bells-${JR}`),
        "aria-hidden": "true",
        children: (0, oR.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function AJ(RR) {
      let {
        bells: JR
      } = RR;
      const {
        t: GR
      } = (0, wR.A)();
      return (0, oR.jsxs)("span", {
        className: iR()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${JR}`),
        children: [(0, oR.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, oR.jsx)(jR.d, {
            name: "bell"
          })
        }), " ", GR(2 === JR ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function CJ(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, eR.h)(gR, JR.getView());
      return (0, oR.jsxs)(oR.Fragment, {
        children: [GR.shown && (0, oR.jsx)(WJ, {
          bells: GR.bells
        }), (0, oR.jsx)("div", {
          ref: JR.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, oR.jsx)(ER, {
          controller: JR,
          naughtyEndsAt: GR.naughtyEndsAt
        }), GR.shown && (0, oR.jsxs)(oR.Fragment, {
          children: [(0, oR.jsx)(gJ, {
            controller: JR,
            status: GR.status,
            endsAt: GR.endsAt,
            bells: GR.bells,
            treeLitAt: GR.treeLitAt
          }), (0, oR.jsx)(XJ, {
            controller: JR,
            market: GR.market,
            hint: GR.hint,
            pulse: GR.pulse,
            treeLightsOn: 0 !== GR.treeLitAt
          }), (0, oR.jsx)(IR.d, {
            children: (0, oR.jsx)(KJ, {
              controller: JR,
              market: GR.market,
              hint: GR.hint,
              nextHintAt: GR.nextHintAt,
              pulse: GR.pulse
            })
          })]
        })]
      })
    }

    function XJ(RR) {
      let {
        controller: JR,
        market: GR,
        hint: yR,
        pulse: tR,
        treeLightsOn: ZR
      } = RR;
      const [qR, iR] = (0, uR.useState)(null);
      return (0, mR.n)(qR, MJ), (0, oR.jsx)("div", {
        ref: iR,
        className: "SecretSantaMapPanel",
        children: (0, oR.jsx)(nJ, {
          controller: JR,
          market: GR,
          hint: yR,
          pulse: tR,
          treeLightsOn: ZR
        })
      })
    }

    function MJ(RR) {
      const JR = () => {
        const JR = RR.getBoundingClientRect();
        let GR = 0;
        for (const RR of pJ()) RR.left < JR.right && RR.right > JR.left && (GR = Math.max(GR, RR.bottom));
        const yR = (0, mR.i)(JR.left, JR.right, GR);
        BJ(RR, "--ss-map-top", GR + 6), BJ(RR, "--ss-map-bottom", null === yR ? null : (0, mR.h)(RR) - yR + 6)
      };
      JR();
      const GR = lJ(JR);
      return {
        layout: JR,
        clear: () => {
          GR(), RR.style.removeProperty("--ss-map-top"), RR.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function BJ(RR, JR, GR) {
      const yR = null === GR ? "" : `${Math.ceil(GR)}px`;
      RR.style.getPropertyValue(JR) !== yR && RR.style.setProperty(JR, yR)
    }

    function lJ(RR) {
      const JR = document.querySelector(`.${zR.i}`),
        GR = new ResizeObserver(RR);
      for (const uR of [document.querySelector(`.${zR.e}`), JR]) uR && GR.observe(uR);
      const yR = new MutationObserver(RR),
        tR = null === JR || void 0 === JR ? void 0 : JR.querySelector(".TopRightElementsRight");
      return tR && yR.observe(tR, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        GR.disconnect(), yR.disconnect()
      }
    }

    function pJ() {
      const RR = `.${zR.i}`,
        JR = document.querySelectorAll(`.${zR.e}, ${RR} .TopRightIcon:not(.TopRightTray *), ${RR} .CondensedSocialBarInner`);
      return Array.from(JR, (RR => RR.getBoundingClientRect())).filter((RR => RR.width > 0 && RR.height > 0))
    }
    const gJ = (0, uR.memo)((function(RR) {
      let {
        controller: JR,
        status: GR,
        endsAt: yR,
        bells: tR,
        treeLitAt: ZR
      } = RR;
      const {
        t: qR
      } = (0, wR.A)(), [iR, fR] = (0, uR.useState)(null);
      return function(RR) {
        (0, uR.useLayoutEffect)((() => {
          if (!RR) return;
          const JR = document.documentElement;
          let GR = 0,
            yR = window.innerWidth;
          const tR = () => {
              RR.style.removeProperty("top");
              const yR = pJ(),
                tR = Array.from(RR.children).filter((RR => RR instanceof HTMLElement && !RR.classList.contains(sR))),
                uR = RR.getBoundingClientRect(),
                ZR = tR.map((RR => {
                  const JR = uR.left + RR.offsetLeft,
                    GR = uR.top + RR.offsetTop;
                  return {
                    left: JR,
                    right: JR + RR.offsetWidth,
                    top: GR,
                    bottom: GR + RR.offsetHeight
                  }
                }));
              let qR = 0;
              for (let RR = 0; RR < yR.length; RR++) {
                let RR = qR;
                for (const JR of ZR)
                  for (const GR of yR) {
                    JR.left < GR.right + zR.b && JR.right > GR.left - zR.b && JR.top + qR < GR.bottom + 4 && JR.bottom + qR > GR.top && (RR = Math.max(RR, Math.ceil(GR.bottom + 4 - JR.top)))
                  }
                if (RR === qR) break;
                qR = RR
              }
              qR > 0 && (RR.style.top = `${RR.getBoundingClientRect().top+qR}px`);
              const iR = Math.max(0, ...ZR.map((RR => RR.bottom - uR.top)));
              (0, SR.d)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (GR = Math.max(GR, Math.ceil(RR.getBoundingClientRect().top + iR)), JR.style.setProperty("--ss-top-bar-bottom", `${GR}px`))
            },
            uR = () => {
              window.innerWidth !== yR && (yR = window.innerWidth, GR = 0), tR()
            };
          tR();
          const ZR = new ResizeObserver(tR);
          ZR.observe(RR);
          const qR = lJ(tR),
            iR = new MutationObserver((RR => {
              RR.some((RR => {
                const JR = RR.target instanceof Element ? RR.target : RR.target.parentElement;
                return !(null !== JR && void 0 !== JR && JR.closest(".SecretSantaClock"))
              })) && tR()
            }));
          iR.observe(RR, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const fR = new MutationObserver((RR => {
              RR.some((RR => RR.target instanceof Element && RR.target.classList.contains("Chat"))) && tR()
            })),
            VR = document.querySelector(".TopLeftElements");
          return VR && fR.observe(VR, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", uR), () => {
            ZR.disconnect(), qR(), iR.disconnect(), fR.disconnect(), window.removeEventListener("resize", uR), JR.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [RR])
      }(iR), (0, oR.jsxs)("div", {
        ref: fR,
        className: "SecretSantaTop",
        children: [(0, oR.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, oR.jsx)(bJ, {
            endsAt: yR
          }), GR && (0, oR.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, oR.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, oR.jsx)(jR.d, {
                name: "star"
              }), " ", GR.santaStatusPoints]
            }, GR.santaStatusPoints), (0, oR.jsx)("span", {
              className: "SecretSantaRank",
              children: qR("secretSantaHud:rank", {
                rank: GR.santaStatusRank,
                players: GR.santaStatusPlayers
              })
            })]
          })]
        }), GR && (0, oR.jsx)(vJ, {
          status: GR,
          bells: tR,
          treeLitAt: ZR
        }), (0, oR.jsx)(RJ, {
          controller: JR
        })]
      })
    }));

    function bJ(RR) {
      let {
        endsAt: JR
      } = RR;
      const GR = (0, dR.j)(JR);
      return 0 === JR ? (0, oR.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, oR.jsxs)("span", {
        className: iR()("SecretSantaClock", {
          Urgent: GR <= 30
        }),
        children: [(0, oR.jsx)(jR.d, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, dR.e)(GR)]
      })
    }
    const vJ = (0, uR.memo)((function(RR) {
      let {
        status: JR,
        bells: GR,
        treeLitAt: yR
      } = RR;
      const {
        t: tR
      } = (0, wR.A)(), uR = Math.min(2, Math.max(0, JR.santaStatusHunters)), ZR = JR.santaStatusScarf, qR = (0, oR.jsx)(iJ, {
        scarf: ZR,
        hat: JR.santaStatusHat
      });
      let iR = (0, oR.jsx)("span", {
        children: fJ(tR("secretSantaHud:youWearLook", {
          look: yJ
        }), qR)
      });
      if (JR.santaStatusKnown) {
        const RR = JR.santaStatusHatKnown ? fJ(tR("secretSantaHud:spottedLook", {
          look: yJ
        }), qR) : fJ(tR("secretSantaHud:spottedScarf", {
          scarf: yJ
        }), (0, oR.jsx)(uJ, {
          scarf: ZR
        }));
        iR = (0, oR.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, oR.jsx)(jR.d, {
            name: "eye"
          }), " ", RR]
        })
      }
      let fR = null;
      return 0 !== yR ? fR = (0, oR.jsx)(aJ, {
        litAt: yR,
        hunters: uR
      }) : 0 !== GR ? fR = (0, oR.jsx)(AJ, {
        bells: GR
      }) : uR > 0 && (fR = (0, oR.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, oR.jsx)(jR.d, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", tR(1 === uR ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, oR.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [fR, iR]
      }, uR)
    }));
    var OJ = GR(3017);
    const xJ = [226, 36, 52],
      NJ = [246, 250, 255],
      DJ = [168, 214, 255],
      HJ = [24, 24, 28],
      oJ = [44, 44, 50],
      cJ = [112, 112, 122],
      PJ = [255, 112, 36];

    function IJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [RR[0], RR[1], RR[2], GR],
        maxColor: [JR[0], JR[1], JR[2], GR]
      }, {
        timeFraction: 1,
        minColor: [RR[0], RR[1], RR[2], 0],
        maxColor: [JR[0], JR[1], JR[2], 0]
      }]
    }

    function mJ(RR, JR, GR) {
      let [yR, tR, uR] = RR;
      return {
        pos1: [yR - JR, tR, uR - JR],
        pos2: [yR + JR, tR + GR, uR + JR]
      }
    }

    function zJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GR = .45 * JR;
      return [{
        texture: "square_particle",
        ...mJ(RR, GR, 1.4 * JR),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * JR,
        maxSize: .34 * JR,
        manualEmitCount: Math.round(26 * JR),
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
        colorGradients: IJ(oJ, cJ, .95),
        hideDist: 48,
        blendMode: OJ.c.Standard
      }, {
        texture: "square_particle",
        ...mJ(RR, .6 * GR, 1.2 * JR),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * JR),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [HJ[0], HJ[1], HJ[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [HJ[0], HJ[1], HJ[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: OJ.c.Standard
      }, {
        texture: "glint",
        ...mJ(RR, .7 * GR, 1.2 * JR),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * JR),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: IJ(PJ, xJ),
        hideDist: 48,
        blendMode: OJ.c.Add
      }]
    }

    function SJ(RR, JR) {
      return {
        texture: "glint",
        ...mJ(RR, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: JR,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: IJ(NJ, DJ),
        hideDist: 16,
        blendMode: OJ.c.Add
      }
    }
    var jJ = GR(103);
    const dJ = "harp_pling",
      EJ = "cloth1",
      YJ = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      kJ = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      QJ = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      FJ = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      TJ = "keysJingle",
      sJ = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function hJ(RR, JR) {
      return 1 === JR ? RR : {
        ...RR,
        manualEmitCount: Math.max(1, Math.round(RR.manualEmitCount * JR))
      }
    }
    class RG {
      constructor(RR, JR) {
        this.api = RR, this.localPlayerId = JR, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, jJ.isMobile)() ? .6 : 1, RR.preloadSounds([dJ, TJ, EJ])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(RR) {
        const JR = this.hint;
        this.hint = RR, "none" !== RR.santaHintState && (JR && JR.santaHintContract === RR.santaHintContract ? null === JR.santaHintScarf && null !== RR.santaHintScarf ? this.play(kJ) : null === JR.santaHintHat && null !== RR.santaHintHat && this.play(QJ) : this.play(YJ))
      }
      receiveStatus(RR) {
        (RR.santaStatusKnown && !this.spotted || RR.santaStatusHatKnown && !this.hatSpotted) && this.play(FJ), this.spotted = RR.santaStatusKnown, this.hatSpotted = RR.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, EJ, .5, 1.2)
      }
      setBells(RR) {
        const JR = sJ[RR];
        this.layers.forEach(((RR, GR) => {
          var yR;
          const [tR, uR] = null !== (yR = JR[GR]) && void 0 !== yR ? yR : [0, RR.rate];
          var ZR;
          (0 === tR && RR.target > 0 && RR.sound && this.stopLater(RR), RR.target = tR, tR > 0 && uR !== RR.rate) && (RR.rate = uR, null === (ZR = RR.sound) || void 0 === ZR || ZR.rate(uR))
        }))
      }
      receiveFx(RR) {
        let {
          santaFxKind: JR,
          santaFxAt: GR
        } = RR;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === JR) GR && this.burst(zJ(GR));
          else if ("toTunnel" === JR) this.later(300, (() => {
          const [RR, JR, GR] = this.ahead();
          this.burst([SJ([RR, JR - 1, GR], 36)])
        }));
        else {
          const [RR, JR, GR] = this.ahead();
          this.burst(zJ([RR, JR - .6, GR], .8))
        }
      }
      frame(RR) {
        const {
          cameraPosition: JR,
          cameraDirection: GR
        } = RR;
        this.camera[0] = JR[0], this.camera[1] = JR[1], this.camera[2] = JR[2], this.look[0] = GR[0], this.look[1] = GR[1], this.look[2] = GR[2];
        const yR = performance.now(),
          tR = Math.min(.1, (yR - (this.lastFrameAt || yR)) / 1e3);
        this.lastFrameAt = yR;
        for (const ZR of this.layers) {
          if (0 === ZR.volume && 0 === ZR.target && !ZR.sound) continue;
          ZR.target > 0 && !ZR.sound && (ZR.sound = this.api.playSound(this.localPlayerId, TJ, 0, ZR.rate, void 0, !0));
          const RR = (ZR.target > ZR.volume ? 3 : 1.2) * tR;
          var uR;
          if (ZR.volume = ZR.target > ZR.volume ? Math.min(ZR.target, ZR.volume + RR) : Math.max(ZR.target, ZR.volume - RR), ZR.volume <= 0 && 0 === ZR.target) this.silence(ZR);
          else null === (uR = ZR.sound) || void 0 === uR || uR.setRelativeVolume(ZR.volume)
        }
      }
      dispose() {
        for (const RR of this.timers) window.clearTimeout(RR);
        this.timers.clear();
        for (const RR of this.layers) RR.target = 0, this.silence(RR)
      }
      silence(RR) {
        var JR;
        null === (JR = RR.sound) || void 0 === JR || JR.stop(), RR.sound = null, RR.volume = 0
      }
      stopLater(RR) {
        const JR = RR.sound,
          GR = window.setTimeout((() => {
            this.timers.delete(GR), RR.sound === JR && 0 === RR.target && this.silence(RR)
          }), RR.volume / 1.2 * 1e3 + 150);
        this.timers.add(GR)
      }
      ahead() {
        const [RR, JR, GR] = this.camera, [yR, tR, uR] = this.look;
        return [RR + 1.8 * yR, JR + 1.8 * tR - .35, GR + 1.8 * uR]
      }
      later(RR, JR) {
        const GR = window.setTimeout((() => {
          this.timers.delete(GR), JR()
        }), RR);
        this.timers.add(GR)
      }
      play(RR) {
        for (const [JR, GR, yR] of RR) 0 === JR ? this.api.playSound(this.localPlayerId, dJ, GR, yR) : this.later(JR, (() => {
          this.api.playSound(this.localPlayerId, dJ, GR, yR)
        }))
      }
      burst(RR) {
        for (const JR of RR) this.api.playParticleEffect(hJ(JR, this.particleShare))
      }
    }
    class JG {
      constructor(RR) {
        this.api = RR, this.wait = null
      }
      BK(RR) {
        const JR = performance.now();
        this.wait = {
          min: RR.santaFlyoverMin,
          max: RR.santaFlyoverMax,
          start: RR.santaFlyoverStart,
          until: JR + RR.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: JR
        }
      }
      frame(RR) {
        const JR = this.wait;
        if (!JR) return;
        const GR = performance.now(),
          yR = GR - JR.lastFrameAt;
        JR.lastFrameAt = GR, GR > JR.until ? this.wait = null : null !== JR.loadedAt ? (JR.settledFrames = yR <= 60 ? JR.settledFrames + 1 : 0, JR.settledFrames >= 6 && GR - JR.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : RR && this.isLoaded(JR, RR) && (JR.loadedAt = GR)
      }
      isLoaded(RR, JR) {
        let {
          min: GR,
          max: tR,
          start: uR
        } = RR;
        if (JR[0] < GR[0] || JR[0] > tR[0] || JR[2] < GR[2] || JR[2] > tR[2]) return !1;
        const ZR = yR.g.LK,
          qR = RR => RR.map((RR => Math.floor(RR / ZR))),
          iR = [qR(JR), qR(uR)],
          [fR, VR] = [qR(GR), qR(tR)];
        for (let yR = fR[0]; yR <= VR[0]; yR++)
          for (let RR = fR[1]; RR <= VR[1]; RR++)
            for (let JR = fR[2]; JR <= VR[2]; JR++) {
              if (iR.some((GR => {
                  let [tR, uR, ZR] = GR;
                  return (yR - tR) ** 2 + (RR - uR) ** 2 + (JR - ZR) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(yR * ZR, RR * ZR, JR * ZR)) return !1
            }
        return !0
      }
    }
    var GG = GR(40118),
      yG = GR(1397),
      tG = GR(39767);
    class uG {
      constructor(RR) {
        this.api = RR, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.fK()
        }), 5e3), this.pacer = new tG.c({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.fK()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.fK())
        })), this.fK()
      }
      resend() {
        this.sent = null, this.fK()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      fK() {
        var RR, JR;
        const GR = null !== (RR = null === (JR = (0, yG.J)().gameRender()) || void 0 === JR ? void 0 : JR.canvas.width) && void 0 !== RR ? RR : 0;
        if (GR <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const yR = window.innerWidth / window.innerHeight,
          tR = (0, GG.e)(GR),
          uR = this.sent;
        uR && Math.abs(yR / uR.aspect - 1) < .02 && Math.abs(tR / uR.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: yR,
          tagScale: tR
        }, this.api.sendCommand(`santaView ${Math.round(1e3*yR)} ${Math.round(1e3*tR)}`)) : this.heldBack = !0)
      }
    }
    var ZG = GR(40422);
    const qG = [20, 9, 20],
      iG = [8, 12],
      fG = .3,
      VG = [.05, .13],
      KG = {
        kind: "smokePuff"
      },
      wG = [245, 250, 255],
      rG = {
        hK: 900,
        perS: 80
      },
      eG = {
        hK: 360,
        perS: 34
      };
    class aG {
      constructor(RR) {
        this.api = RR, this.tier = (0, jJ.isMobile)() ? eG : rG, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(RR) {
        const JR = performance.now(),
          GR = 0 === this.lastMs ? 0 : Math.min(JR - this.lastMs, 250) / 1e3;
        if (this.lastMs = JR, !this.api.particlesEnabled()) return void this.dispose();
        const yR = Math.hypot(RR[0] - this.last[0], RR[1] - this.last[1], RR[2] - this.last[2]) > 20;
        if (this.last[0] = RR[0], this.last[1] = RR[1], this.last[2] = RR[2], yR && this.dispose(), (yR || JR >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = JR + 250, this.roofed = this.hasRoof(RR)), this.roofed) return void(this.budget = 0);
        const tR = this.at;
        let uR;
        tR[0] = RR[0], tR[1] = RR[1] + 7, tR[2] = RR[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * GR, this.tier.perS / 4), uR = Math.floor(this.budget), this.budget -= uR) : (this.system = this.api.createParticles(this.opts(), {
          pos: tR,
          half: qG
        }), uR = Math.floor(this.tier.hK / 2)), uR > 0 && (this.system.moveTo(tR, qG), this.system.emit(uR))
      }
      dispose() {
        var RR;
        null === (RR = this.system) || void 0 === RR || RR.dispose(), this.system = null
      }
      hasRoof(RR) {
        let [JR, GR, yR] = RR;
        const tR = Math.floor(JR),
          uR = Math.floor(yR);
        let ZR = 0;
        for (let qR = Math.floor(GR) + 1; qR <= Math.floor(GR) + 16; qR++)
          if (ZR = this.api.isSolidToPlayerBlockId(this.api.getBlockId(tR, qR, uR)) ? ZR + 1 : 0, ZR >= 4) return !0;
        return !1
      }
      opts() {
        const [RR, JR, GR] = wG;
        return {
          texture: KG,
          hK: this.tier.hK,
          minLifeTime: iG[0] / ZG.b,
          maxLifeTime: iG[1] / ZG.b,
          minEmitPower: 1.1 * ZG.b * .8,
          maxEmitPower: 1.1 * ZG.b * 1.2,
          minSize: VG[0],
          maxSize: VG[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [fG, -1, fG],
          colorGradients: [{
            timeFraction: 0,
            minColor: [RR, JR, GR, 0]
          }, {
            timeFraction: .12,
            minColor: [RR, JR, GR, .9]
          }, {
            timeFraction: .85,
            minColor: [RR, JR, GR, .9]
          }, {
            timeFraction: 1,
            minColor: [RR, JR, GR, 0]
          }],
          blendMode: OJ.c.Standard
        }
      }
    }
    var LG = GR(37766);
    const nG = [{
        icon: "eyes",
        key: "secretSantaHud:introSantas"
      }, {
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }],
      UG = (0, uR.memo)((function() {
        const {
          t: RR
        } = (0, wR.A)();
        return (0, oR.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, oR.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, oR.jsx)(jR.d, {
              name: "user-secret"
            }), (0, oR.jsx)("span", {
              children: RR("secretSantaHud:introHeadline")
            })]
          }), nG.map((JR => {
            let {
              icon: GR,
              key: yR
            } = JR;
            return (0, oR.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, oR.jsx)(jR.d, {
                name: GR,
                fixedWidth: !0
              }), (0, oR.jsx)("span", {
                children: RR(yR)
              })]
            }, yR)
          }))]
        })
      })),
      WG = (0, uR.memo)((function(RR) {
        let {
          controller: JR
        } = RR;
        return (0, oR.jsx)("div", {
          ref: JR.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, oR.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, oR.jsx)(UG, {})
          })
        })
      })),
      AG = "secretSantaIntroShown";
    class CG {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = RR => {
          this.element = RR, this.drawn = -1
        }, this.bindIntro = RR => {
          this.intro = RR, this.drawnIntro = null
        }
      }
      receiveFlyover(RR) {
        this.armedUntil = performance.now() + RR + 3e3
      }
      frame(RR) {
        const JR = performance.now(),
          GR = this.snowAlpha(JR);
        if (this.drawIntro(JR, GR), GR <= 0) return null !== this.shownAt && (JR < this.armedUntil && this.startIntro(JR), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (GR < 1 || RR && JR >= this.armedUntil) return void this.draw(0);
          this.shownAt = JR
        }
        this.draw(Math.min(1, (JR - this.shownAt) / 300) * GR)
      }
      startIntro(RR) {
        var JR;
        const GR = null !== (JR = KR.i.getItem(AG)) && void 0 !== JR ? JR : 0;
        KR.i.setItem(AG, GR + 1), this.introUntil = RR + (GR < 3 ? 4900 : 3e3)
      }
      drawIntro(RR, JR) {
        0 !== this.introUntil && (RR >= this.introUntil || JR > 0) && (this.introUntil = 0);
        const GR = 0 !== this.introUntil;
        this.intro && GR !== this.drawnIntro && (this.drawnIntro = GR, this.intro.classList.toggle("Shown", GR))
      }
      snowAlpha(RR) {
        var JR, GR, yR, tR;
        (null === (JR = this.fade) || void 0 === JR || !JR.isConnected) && RR - this.fadeLookedAt >= 250 && (this.fadeLookedAt = RR, this.fade = document.querySelector(`[${LG.c}]`));
        const uR = null === (GR = this.fade) || void 0 === GR ? void 0 : GR.style;
        if (!uR || "none" === uR.display) return 0;
        const ZR = null !== (yR = null === (tR = uR.backgroundColor.match(/\d+/g)) || void 0 === tR ? void 0 : tR.slice(0, 3).map(Number)) && void 0 !== yR ? yR : [];
        return 3 === ZR.length && ZR.every((RR => RR >= 200)) && Number(uR.opacity) || 0
      }
      draw(RR) {
        const JR = Math.round(100 * RR) / 100;
        this.element && JR !== this.drawn && (this.drawn = JR, this.element.style.opacity = String(JR), this.element.style.display = JR > 0 ? "flex" : "none")
      }
    }
    const XG = (0, uR.memo)((function(RR) {
        let {
          controller: JR
        } = RR;
        const {
          t: GR
        } = (0, wR.A)();
        return (0, oR.jsx)("div", {
          ref: JR.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, oR.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, oR.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, oR.jsx)(jR.d, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), GR("secretSantaHud:titleName")]
            }), (0, oR.jsx)(UG, {})]
          })
        })
      })),
      MG = "SecretSantaMode",
      BG = yR.g.Kn * yR.g.playerEyeToHeightRatio;

    function lG(RR) {
      document.body.classList.toggle("SecretSantaPodium", RR)
    }
    const pG = function(RR, JR, GR, yR) {
      let {
        localPlayerId: tR
      } = yR;
      const qR = new DR((() => {
          var RR;
          null === (RR = aR) || void 0 === RR || RR.wrapStarted()
        })),
        iR = new CG,
        fR = [0, 0, 0];
      let VR = null;
      const KR = [0, 0, 0],
        wR = [0, 0, 0];
      let rR = null,
        eR = null,
        aR = null,
        LR = null,
        nR = null,
        UR = null,
        WR = null;
      const AR = RR => {
          rR && null !== RR && RR !== tR && !WR && (WR = {
            target: RR,
            at: performance.now(),
            first: null
          })
        },
        CR = (RR, JR) => {
          WR = null, qR.pressGift(RR.at, JR) && (VR = RR.target)
        },
        XR = (RR, JR) => {
          if (null === VR) return;
          if (!RR.readDrawnPosition(VR, KR)) return void(VR = null);
          wR[0] = JR[0], wR[1] = JR[1] + BG, wR[2] = JR[2];
          const GR = Math.hypot(KR[0] - JR[0], KR[1] - JR[1], KR[2] - JR[2]);
          qR.aimAtWrap(function(RR, JR, GR) {
            const yR = GR[0] - RR[0],
              tR = GR[2] - RR[2],
              uR = Math.hypot(JR[0], JR[2]);
            let ZR = RR[1];
            const qR = uR > 0 ? (yR * JR[0] + tR * JR[2]) / uR : 0;
            qR > 0 && (ZR += JR[1] / uR * qR), ZR = Math.max(GR[1], Math.min(GR[1] + 1.8, ZR));
            const iR = [yR, ZR - RR[1], tR],
              fR = Math.hypot(iR[0], iR[1], iR[2]),
              VR = Math.hypot(JR[0], JR[1], JR[2]);
            if (0 === fR || 0 === VR) return 0;
            const KR = (iR[0] * JR[0] + iR[1] * JR[1] + iR[2] * JR[2]) / (fR * VR);
            return 180 * Math.acos(Math.max(-1, Math.min(1, KR))) / Math.PI
          }(wR, RR.getActionRay().direction, KR), GR) || (VR = null)
        },
        MR = (RR, JR, GR) => {
          const yR = [0, 0, 0];
          GR && RR.readDrawnPosition(JR.target, yR) ? JR.first ? CR(JR, function(RR, JR, GR, yR) {
            const tR = GR[0] - RR[0],
              uR = GR[1] - RR[1],
              ZR = GR[2] - RR[2],
              qR = Math.hypot(tR, uR, ZR);
            return 0 === qR || yR <= 0 ? {
              distance: qR,
              awaySpeed: 0
            } : {
              distance: qR,
              awaySpeed: (tR * (GR[0] - JR[0]) + uR * (GR[1] - JR[1]) + ZR * (GR[2] - JR[2])) / qR / yR
            }
          }(GR, JR.first.pos, yR, (performance.now() - JR.first.at) / 1e3)) : JR.first = {
            pos: yR,
            at: performance.now()
          } : CR(JR, null)
        };
      return {
        onCreate: RR => {
          rR = RR, document.body.classList.add(MG), aR = new RG(RR, tR), LR = new aG(RR), nR = new JG(RR), UR = new uG(RR), eR = (0, ZR.G)((0, uR.createElement)(uR.Fragment, null, (0, uR.createElement)(CJ, {
            controller: qR
          }), (0, uR.createElement)(PR, {
            controller: qR
          }), (0, uR.createElement)(XG, {
            controller: iR
          }), (0, uR.createElement)(WG, {
            controller: iR
          })))
        },
        onClose: () => {
          var RR, JR, GR, yR;
          document.body.classList.remove(MG), lG(!1), null === (RR = eR) || void 0 === RR || RR(), eR = null, qR.dispose(), null === (JR = aR) || void 0 === JR || JR.dispose(), aR = null, null === (GR = LR) || void 0 === GR || GR.dispose(), LR = null, nR = null, null === (yR = UR) || void 0 === yR || yR.dispose(), UR = null, rR = null
        },
        onPlayerAltAction: (RR, JR, GR, yR, tR, uR) => {
          AR(uR)
        },
        onPlayerAttackEntity: (RR, JR) => {
          AR(JR)
        },
        onAfterRender: (RR, JR) => {
          var GR, yR, uR, ZR;
          const VR = null !== (GR = rR) && void 0 !== GR && GR.readDrawnPosition(tR, fR) ? fR : null;
          WR && rR && MR(rR, WR, VR), rR && VR && XR(rR, VR), qR.frame(JR.cameraHeading, VR), null === (yR = aR) || void 0 === yR || yR.frame(JR), null === (uR = LR) || void 0 === uR || uR.onAfterRender(JR.cameraPosition), null === (ZR = nR) || void 0 === ZR || ZR.frame(VR), iR.frame(qR.getView().shown)
        },
        onReceivedMessageFromServer: (RR, JR) => {
          var GR;
          if ("secretSantaHint" === RR) qR.receiveHint(JR), null === (GR = aR) || void 0 === GR || GR.receiveHint(JR);
          else if ("secretSantaStatus" === RR) {
            var yR;
            qR.receiveStatus(JR), null === (yR = aR) || void 0 === yR || yR.receiveStatus(JR)
          } else if ("secretSantaWrap" === RR) {
            WR && CR(WR, null);
            const {
              santaWrapMs: RR,
              santaWrapDone: GR
            } = JR;
            qR.receiveWrap(RR, GR)
          } else if ("secretSantaMarket" === RR) {
            var tR;
            null === (tR = aR) || void 0 === tR || tR.reset(), qR.receiveMarket(JR)
          } else if ("secretSantaBells" === RR) {
            var uR;
            const {
              santaBellsLevel: RR
            } = JR;
            qR.receiveBells(RR), null === (uR = aR) || void 0 === uR || uR.setBells(RR)
          } else if ("secretSantaFx" === RR) {
            var ZR;
            const RR = JR;
            "toTunnel" === RR.santaFxKind && qR.snowBlink(), null === (ZR = aR) || void 0 === ZR || ZR.receiveFx(RR)
          } else if ("secretSantaFlyover" === RR) {
            var fR;
            null === (fR = nR) || void 0 === fR || fR.BK(JR), iR.receiveFlyover(JR.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === RR) {
            const {
              santaPodiumShown: RR
            } = JR;
            var VR;
            if (lG(RR), !RR) null === (VR = UR) || void 0 === VR || VR.resend()
          }
        }
      }
    }
  },
  39722: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      g: () => tR
    });
    var yR = GR(377);
    const tR = (0, yR.Bb)([0, 0, -1]),
      uR = [{
        name: "S",
        bearing: (0, yR.Bb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, yR.Bb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: tR
      }, {
        name: "W",
        bearing: (0, yR.Bb)([1, 0, 0])
      }]
  },
  39713: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      h: () => uR
    });
    var yR = GR(39722);

    function tR(RR, JR, GR) {
      return [100 * (GR.mapMaxX - RR) / (GR.mapMaxX - GR.mapMinX), 100 * (JR - GR.mapMinZ) / (GR.mapMaxZ - GR.mapMinZ)]
    }

    function uR(RR, JR, GR, uR) {
      const [ZR, qR] = tR(RR, JR, uR), iR = yR.g - GR;
      return {
        rotation: iR,
        transform: `rotate(${iR}rad) translate(-${ZR}%, -${qR}%)`
      }
    }
  },
  40422: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      d: () => uR
    });
    const yR = 1 / .6,
      tR = {
        kind: "smokePuff"
      };
    class uR {
      constructor(RR, JR, GR) {
        this.style = RR, this.hK = JR, this.half = GR, this.particles = null, this.lastFrame = -1
      }
      emit(RR, JR, GR) {
        let uR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return GR !== this.lastFrame && (this.lastFrame = GR, this.particles || (this.particles = RR.createParticles(function(RR, JR) {
          const [
            [GR, uR, ZR],
            [qR, iR, fR]
          ] = RR.colours;
          return {
            texture: RR.soft ? tR : "square_particle",
            hK: JR,
            minLifeTime: RR.life[0] / yR,
            maxLifeTime: RR.life[1] / yR,
            minEmitPower: RR.power[0] * yR,
            maxEmitPower: RR.power[1] * yR,
            minSize: RR.size[0],
            maxSize: RR.size[1],
            emitRate: 0,
            gravity: [0, RR.lift * yR * yR, 0],
            dir1: [-RR.spread, 1, -RR.spread],
            dir2: [RR.spread, 1, RR.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [GR, uR, ZR, RR.alpha],
              maxColor: [qR, iR, fR, RR.alpha]
            }, {
              timeFraction: 1,
              minColor: [GR, uR, ZR, 0],
              maxColor: [qR, iR, fR, 0]
            }],
            blendMode: RR.blendMode
          }
        }(this.style, this.hK), {
          pos: JR,
          half: this.half
        })), this.particles.moveTo(JR, this.half), this.particles.emit(uR), !0)
      }
      dispose() {
        var RR;
        null === (RR = this.particles) || void 0 === RR || RR.stop(), this.particles = null
      }
    }
  },
  40118: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    const yR = 1400,
      tR = .45;

    function uR(RR) {
      return RR < yR ? Math.pow(yR / RR, tR) : 1
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);