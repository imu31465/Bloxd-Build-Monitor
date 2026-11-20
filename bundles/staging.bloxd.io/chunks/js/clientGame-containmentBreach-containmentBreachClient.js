export const id = 14;
export const ids = [14];
export const modules = {
  38783: (vv, zv, Pv) => {
    var hv = {
      "./breach-zero-uncaught.webp": 38785,
      "./breach-zero.webp": 38791,
      "./brood-father-uncaught.webp": 38797,
      "./brood-father.webp": 38800,
      "./carousel-uncaught.webp": 38804,
      "./carousel.webp": 38807,
      "./deadlock-uncaught.webp": 38816,
      "./deadlock.webp": 38819,
      "./frost-revenant-uncaught.webp": 38822,
      "./frost-revenant.webp": 38829,
      "./hollow-choir-uncaught.webp": 38831,
      "./hollow-choir.webp": 38836,
      "./magma-warden-uncaught.webp": 38840,
      "./magma-warden.webp": 38847,
      "./patient-zero-uncaught.webp": 38850,
      "./patient-zero.webp": 38855,
      "./siege-engine-uncaught.webp": 38861,
      "./siege-engine.webp": 38865,
      "./warp-stalker-uncaught.webp": 38868,
      "./warp-stalker.webp": 38872
    };

    function Sv(vv) {
      var zv = ev(vv);
      return Pv(zv)
    }

    function ev(vv) {
      if (!Pv.o(hv, vv)) {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }
      return hv[vv]
    }
    Sv.keys = function() {
      return Object.keys(hv)
    }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 38783
  },
  36379: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Yv,
      i: () => fv,
      m: () => Fv,
      p: () => av
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(62),
      pv = Pv(1348),
      dv = Pv(1442),
      Nv = Pv(1344),
      lv = Pv(1265),
      Tv = Pv(1175),
      Wv = Pv(36387),
      wv = Pv(1082);

    function av(vv) {
      const [zv, Pv] = (0, ev.useState)((() => (0, Wv.m)(vv)));
      return (0, ev.useEffect)((() => (Pv((0, Wv.m)(vv)), (0, Wv.L)((() => {
        Pv((0, Wv.m)(vv))
      })))), [vv]), zv
    }

    function sv(vv, zv) {
      "function" === typeof vv ? vv(zv) : vv && (vv.current = zv)
    }

    function Cv(vv) {
      let {
        tutorial: zv,
        step: Pv,
        enabled: hv = !0
      } = vv;
      const Sv = av(zv);
      return hv && Sv === Pv
    }

    function iv(vv, zv) {
      const Pv = (0, Wv.p)(vv),
        hv = Pv.indexOf(zv);
      return !Pv.slice(hv + 1).some((zv => (0, Wv.x)(vv, zv)))
    }

    function cv(vv, zv, Pv, hv) {
      let {
        tutorial: Sv,
        step: ev,
        waitForClick: gv = !1,
        onPrevious: pv
      } = vv;
      const dv = zv && (0, Wv.t)(Sv, ev),
        Nv = zv && !iv(Sv, ev),
        Tv = gv ? hv : Pv;
      let wv = null;
      dv ? wv = () => {
        null === pv || void 0 === pv || pv(), (0, Wv.q)(Sv, ev)
      } : Nv && (wv = () => {
        (0, Wv.j)(Sv)
      }), (0, lv.q)("popup", null !== Tv && void 0 !== Tv ? Tv : Pv, wv, zv && null !== Tv, null, dv ? void 0 : "controller:menusSkipTutorial")
    }

    function Gv(vv) {
      let {
        tutorial: zv,
        step: Pv,
        text: hv,
        waitForClick: Sv = !1,
        onPrevious: ev
      } = vv;
      const {
        t: gv
      } = (0, Tv.x)(), pv = iv(zv, Pv);
      return (0, wv.jsxs)(wv.Fragment, {
        children: [(0, wv.jsx)("div", {
          className: "TutorialStepText",
          children: hv
        }), (0, wv.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Wv.t)(zv, Pv) && (0, wv.jsx)(dv.e, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ev || void 0 === ev || ev(), (0, Wv.q)(zv, Pv)
            },
            children: gv("tutorial:back")
          }), !Sv && (0, wv.jsx)(dv.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wv.f)(Pv)
            },
            padDefaultFocus: !0,
            children: gv(pv ? "tutorial:done" : "tutorial:next")
          }), !pv && (0, wv.jsx)(dv.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wv.j)(zv)
            },
            children: gv("tutorial:skip")
          })]
        })]
      })
    }
    const mv = 6;

    function jv(vv) {
      let {
        rect: zv,
        margin: Pv
      } = vv;
      const hv = Math.max(0, zv.top - Pv),
        Sv = zv.bottom + Pv,
        ev = Math.max(0, zv.left - Pv),
        gv = zv.right + Pv;
      return (0, wv.jsxs)(wv.Fragment, {
        children: [(0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: hv
          }
        }), (0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Sv,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hv,
            left: 0,
            width: ev,
            height: Sv - hv
          }
        }), (0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hv,
            left: gv,
            right: 0,
            height: Sv - hv
          }
        })]
      })
    }

    function fv(vv) {
      let {
        target: zv,
        placement: Pv,
        boxRef: hv,
        className: dv,
        spotlightMargin: lv = mv,
        children: Tv
      } = vv;
      const {
        getArrowProps: Wv,
        getTooltipProps: av,
        setTooltipRef: sv,
        setTriggerRef: Cv
      } = (0, pv.d)({
        placement: Pv,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, lv]
      });
      (0, ev.useLayoutEffect)((() => {
        Cv(zv)
      }), [zv, Cv]);
      const iv = function(vv, zv) {
        const [Pv, hv] = (0, ev.useState)(null);
        return (0, ev.useEffect)((() => {
          if (!zv || !vv) return void hv(null);
          let Pv = 0,
            Sv = null;
          const ev = () => {
            const zv = vv.getBoundingClientRect();
            Sv && zv.left === Sv.left && zv.top === Sv.top && zv.width === Sv.width && zv.height === Sv.height || (Sv = zv, hv(zv)), Pv = requestAnimationFrame(ev)
          };
          return ev(), () => {
            cancelAnimationFrame(Pv)
          }
        }), [vv, zv]), Pv
      }(zv, !0);
      (0, ev.useEffect)((() => {
        null === zv || void 0 === zv || zv.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [zv]);
      const cv = (0, ev.useCallback)((vv => {
        sv(vv), hv && (hv.current = vv)
      }), [sv, hv]);
      return (0, gv.createPortal)((0, wv.jsxs)(wv.Fragment, {
        children: [iv && (0, wv.jsx)(jv, {
          rect: iv,
          margin: lv
        }), (0, wv.jsxs)("div", {
          ref: cv,
          ...av({
            className: Sv()("tooltip-container SmallTextLight TutorialStep", dv)
          }),
          children: [Tv, (0, wv.jsx)("div", {
            ...Wv({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Nv.k)())
    }
    const Fv = (0, ev.forwardRef)((function(vv, zv) {
      let {
        placement: Pv = "right",
        children: hv,
        ...Sv
      } = vv;
      const gv = Cv(Sv),
        pv = (0, ev.useRef)(null),
        dv = (0, ev.useRef)(null);
      cv(Sv, gv, pv, dv);
      const [Nv, lv] = (0, ev.useState)(null), Tv = hv.ref, Wv = (0, ev.useCallback)((vv => {
        dv.current = vv, lv(vv), sv(zv, vv), sv(Tv, vv)
      }), [zv, Tv]);
      return (0, wv.jsxs)(wv.Fragment, {
        children: [(0, ev.cloneElement)(hv, {
          ref: Wv
        }), gv && (0, wv.jsx)(fv, {
          target: Nv,
          placement: Pv,
          boxRef: pv,
          children: (0, wv.jsx)(Gv, {
            ...Sv
          })
        })]
      })
    }));

    function Yv(vv) {
      const zv = Cv(vv),
        Pv = (0, ev.useRef)(null);
      return cv(vv, zv, Pv, null), zv ? (0, gv.createPortal)((0, wv.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, wv.jsx)("div", {
          ref: Pv,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, wv.jsx)(Gv, {
            ...vv
          })
        })
      }), (0, Nv.k)()) : null
    }
  },
  38083: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    const hv = 4,
      Sv = 12e3,
      ev = 1e3;
    class gv {
      constructor() {
        let {
          limit: vv = hv,
          windowMs: zv = Sv,
          spacingMs: Pv = ev,
          now: gv = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = vv, this.windowMs = zv, this.spacingMs = Pv, this.now = gv
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const vv of this.priority) vv.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const vv = this.now();
        this.sent.push(vv), this.lastSentAt = vv, this.schedule(), this.notify()
      }
      addPriority(vv) {
        return this.priority.add(vv), () => {
          this.priority.delete(vv)
        }
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const vv of this.priority)
          if (vv.waiting()) return !0;
        return !1
      }
      prune() {
        const vv = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= vv;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const vv = this.now(),
          zv = this.lastSentAt + this.spacingMs,
          Pv = Math.min(zv > vv ? zv : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Pv !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Pv - vv)))
      }
      notify() {
        for (const vv of this.listeners) vv()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  38064: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    class hv {
      constructor(vv, zv, Pv) {
        this.zC = vv, this.beforeOpen = zv, this.afterClose = Pv, this.open = !1, this.ea = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ea && (this.open = !0, this.beforeOpen(this), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      showOrRefresh() {
        this.open ? this.emit() : this.show()
      }
      closePanel(vv) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(vv)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.ea = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ea || (this.snapshot = this.buildSnapshot(), this.zC(this.snapshot))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  38776: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => lP
    });
    var hv = Pv(52);
    var Sv = Pv(22),
      ev = Pv(1863),
      gv = Pv(26),
      pv = Pv(36137),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(1439),
      Tv = Pv(1175),
      Wv = Pv(4285),
      wv = Pv(1329),
      av = Pv(1442),
      sv = Pv(1871),
      Cv = Pv(1344),
      iv = Pv(1858),
      cv = Pv(1923),
      Gv = Pv(202);
    const mv = Pv(38783),
      jv = Object.fromEntries(mv.keys().map((vv => [vv.replace(/^\.\/(.*)\.webp$/, "$1"), mv(vv)]))),
      fv = new Set;

    function Fv(vv, zv) {
      const Pv = zv ? vv : `${vv}-uncaught`,
        hv = (0, Gv.b)(jv, Pv);
      return void 0 !== hv || fv.has(Pv) || (fv.add(Pv), console.warn(`Containment Breach has no mugshot ${Pv}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), hv
    }
    var Yv = Pv(1082);
    const nv = "containmentBreach",
      Ov = "Gold Coin";

    function Dv(vv) {
      let {
        open: zv,
        onDismiss: Pv,
        title: hv,
        className: Sv,
        decor: ev,
        headerExtra: gv,
        status: pv,
        statusRefused: dv = !1,
        children: lv
      } = vv;
      const Tv = `${Sv}Title`;
      return (0, Yv.jsx)(Wv.c, {
        show: zv,
        close: Pv,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, Yv.jsxs)("section", {
          className: Nv()("ContainmentBoardPanel", Sv),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Tv,
          children: [ev && (0, Yv.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: ev
          }), (0, Yv.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, Yv.jsx)("h2", {
              id: Tv,
              className: "VisuallyHidden",
              children: hv
            }), gv, (0, Yv.jsx)(av.i, {
              onClick: Pv
            })]
          }), (0, Yv.jsx)("div", {
            className: "BoardBody",
            children: lv
          }), void 0 !== pv && (0, Yv.jsx)("footer", {
            className: Nv()("BoardStatus", {
              Refused: dv
            }),
            children: pv
          })]
        })
      })
    }

    function Kv(vv) {
      let {
        itemName: zv
      } = vv;
      return (0, Yv.jsx)(sv.b, {
        itemName: zv,
        amount: 0
      })
    }

    function Vv(vv) {
      let {
        anomalyId: zv,
        caught: Pv
      } = vv;
      const Sv = (0, hv.useRef)(null);
      return (0, wv.d)(Sv, !Pv), (0, Yv.jsx)("span", {
        ref: Sv,
        className: Nv()("BoardMugshot", {
          Uncaught: !Pv
        }),
        children: (0, Yv.jsx)("img", {
          src: Fv(zv, Pv),
          alt: "",
          draggable: !1
        })
      })
    }

    function Uv(vv) {
      let {
        itemName: zv,
        amount: Pv,
        Vp: hv,
        inTile: Sv = !1
      } = vv;
      return (0, Yv.jsx)(Cv.h, {
        delayShow: 200,
        hoverOnly: Sv,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, Yv.jsx)(xv, {
          itemName: zv,
          amount: Pv,
          Vp: hv
        }),
        children: (0, Yv.jsxs)("span", {
          className: Nv()("BoardChip", {
            Short: void 0 !== hv && hv < Pv
          }),
          children: [(0, Yv.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, Yv.jsx)(Kv, {
              itemName: zv
            })
          }), Pv.toLocaleString()]
        })
      })
    }
    const Rv = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function xv(vv) {
      var zv;
      let {
        itemName: Pv,
        amount: hv,
        Vp: Sv
      } = vv;
      const {
        t: ev
      } = (0, Tv.x)(), gv = (0, cv.g)("itemInfo", (vv => vv[Pv])), {
        lore: pv,
        droppedBy: dv
      } = function(vv) {
        if ("string" !== typeof vv) return {
          lore: vv,
          droppedBy: null
        };
        const zv = Rv.exec(vv);
        return null === zv ? {
          lore: vv,
          droppedBy: null
        } : {
          lore: "" === zv[1] ? void 0 : zv[1],
          droppedBy: zv[2]
        }
      }(null === gv || void 0 === gv ? void 0 : gv.description);
      return (0, Yv.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, Yv.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, Yv.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, Yv.jsx)(Kv, {
              itemName: Pv
            })
          }), (0, Yv.jsx)(iv.c, {
            text: null !== (zv = null === gv || void 0 === gv ? void 0 : gv.displayName) && void 0 !== zv ? zv : Pv,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== pv || null !== dv) && (0, Yv.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== pv && (0, Yv.jsx)(iv.c, {
            text: pv,
            className: "BoardChipTooltipDescription"
          }), null !== dv && (0, Yv.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, Yv.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: ev(`${nv}:chipDroppedBy`)
            }), dv]
          })]
        }), void 0 !== Sv && (0, Yv.jsxs)("div", {
          className: Nv()("BoardChipTooltipHeld", {
            Short: Sv < hv
          }),
          children: [(0, Yv.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: ev(`${nv}:chipYouHave`)
          }), (0, Yv.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, Yv.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Sv.toLocaleString()
            }), ` / ${hv.toLocaleString()}`]
          }), (0, Yv.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, Yv.jsx)("span", {
              style: {
                width: (hv > 0 ? 100 * Math.min(1, Sv / hv) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function tv(vv) {
      let {
        icon: zv,
        name: Pv,
        selected: hv,
        locked: Sv,
        className: ev,
        buttonRef: gv,
        onSelect: pv,
        children: dv
      } = vv;
      return (0, Yv.jsxs)("button", {
        ref: gv,
        type: "button",
        className: Nv()("BoardTile", ev, {
          Selected: hv,
          Locked: Sv
        }),
        onClick: pv,
        children: [(0, Yv.jsx)("span", {
          className: "BoardTileIcon",
          children: zv
        }), (0, Yv.jsx)("span", {
          className: "BoardTileName",
          children: Pv
        }), dv]
      })
    }

    function qv(vv) {
      let {
        icon: zv,
        name: Pv,
        children: hv
      } = vv;
      return (0, Yv.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, Yv.jsx)("span", {
          className: "BoardDetailIcon",
          children: zv
        }), (0, Yv.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, Yv.jsx)("h3", {
            children: Pv
          }), (0, Yv.jsx)("span", {
            className: "BoardDetailStatus",
            children: hv
          })]
        })]
      })
    }

    function Iv(vv) {
      let {
        coins: zv,
        children: Pv
      } = vv;
      return (0, Yv.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, Yv.jsx)(Uv, {
          itemName: Ov,
          amount: zv
        }), Pv]
      })
    }
    var Qv = Pv(38064);
    const Zv = "containmentCodexView";
    class Av extends Qv.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = vv => {
          this.selectedId = vv, this.emit()
        }
      }
      la(vv) {
        this.entries = vv.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const Lv = {
        codexAnyDifficulty: `${nv}:codexNeedsAny`,
        codexNormalOnly: `${nv}:codexNeedsNormal`,
        codexHardOnly: `${nv}:codexNeedsHard`
      },
      Hv = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Mv = {
        codexContained: `${nv}:codexContainedBadge`,
        codexEncountered: `${nv}:codexEncounteredBadge`,
        codexUnidentified: `${nv}:codexUnidentifiedBadge`
      },
      yv = ["94%", "81%", "88%", "46%", "72%"];

    function Bv(vv) {
      let {
        entry: zv
      } = vv;
      const {
        t: Pv
      } = (0, Tv.x)();
      return (0, Yv.jsx)("span", {
        className: Nv()("BoardBadge", Hv[zv.codexEntryState]),
        children: Pv(Mv[zv.codexEntryState])
      })
    }

    function Jv(vv) {
      const {
        t: zv
      } = (0, Tv.x)();
      return "codexUnidentified" === vv.codexEntryState ? zv(`${nv}:codexUnidentifiedName`) : vv.codexEntryName
    }

    function Ev(vv) {
      let {
        entry: zv
      } = vv;
      return "codexUnidentified" === zv.codexEntryState ? (0, Yv.jsx)(Kv, {
        itemName: "Book"
      }) : (0, Yv.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, Yv.jsx)(Vv, {
          anomalyId: zv.codexEntryId,
          caught: "codexContained" === zv.codexEntryState
        }), (0, Yv.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function ov(vv) {
      let {
        entry: zv,
        selected: Pv,
        onSelect: hv
      } = vv;
      const Sv = "codexUnidentified" === zv.codexEntryState;
      return (0, Yv.jsxs)(tv, {
        icon: (0, Yv.jsx)(Ev, {
          entry: zv
        }),
        name: Jv(zv),
        selected: Pv,
        locked: Sv,
        className: Nv()("CodexFolder", Hv[zv.codexEntryState]),
        onSelect: () => {
          hv(zv.codexEntryId)
        },
        children: [!Sv && (0, Yv.jsx)(Bv, {
          entry: zv
        }), Sv && (0, Yv.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function bv(vv) {
      let {
        count: zv
      } = vv;
      const Pv = [];
      for (let hv = Math.min(zv, 25); hv > 0; hv -= 5) Pv.push(Math.min(hv, 5));
      return (0, Yv.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Pv.map(((vv, zv) => (0, Yv.jsx)("span", {
          className: Nv()("CodexTallyGroup", {
            Gate: 5 === vv
          }),
          children: Array.from({
            length: Math.min(vv, 4)
          }, ((vv, zv) => (0, Yv.jsx)("span", {
            className: "CodexTallyMark"
          }, zv)))
        }, zv)))
      })
    }

    function rv(vv) {
      let {
        contained: zv,
        total: Pv
      } = vv;
      const {
        t: hv
      } = (0, Tv.x)();
      return (0, Yv.jsxs)("div", {
        className: "CodexProgress",
        children: [hv(`${nv}:codexProgress`, {
          contained: String(zv),
          total: String(Pv)
        }), (0, Yv.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, Yv.jsx)("span", {
            style: {
              width: zv / Pv * 100 + "%"
            }
          })
        })]
      })
    }

    function kv(vv) {
      let {
        entry: zv,
        fileNumber: Pv
      } = vv;
      const {
        t: hv
      } = (0, Tv.x)(), Sv = "codexContained" === zv.codexEntryState;
      return (0, Yv.jsx)("section", {
        className: "BoardDetail",
        children: (0, Yv.jsxs)("article", {
          className: Nv()("CodexDossier", Hv[zv.codexEntryState]),
          children: [(0, Yv.jsx)("span", {
            className: "CodexFileNumber",
            children: hv(`${nv}:codexFileNumber`, {
              number: String(Pv).padStart(3, "0")
            })
          }), (0, Yv.jsx)(qv, {
            icon: (0, Yv.jsx)(Ev, {
              entry: zv
            }),
            name: Jv(zv),
            children: (0, Yv.jsx)(Bv, {
              entry: zv
            })
          }), Sv && (0, Yv.jsxs)(Yv.Fragment, {
            children: [(0, Yv.jsx)("p", {
              className: "BoardDescription",
              children: zv.codexEntryLore
            }), (0, Yv.jsxs)("p", {
              className: "CodexTally",
              children: [hv(`${nv}:codexContainments`, {
                count: String(zv.codexEntryContainedCount)
              }), (0, Yv.jsx)(bv, {
                count: zv.codexEntryContainedCount
              })]
            }), (0, Yv.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: hv(`${nv}:codexContainedBadge`)
            })]
          }), !Sv && (0, Yv.jsxs)(Yv.Fragment, {
            children: [(0, Yv.jsxs)("div", {
              className: "CodexRedaction",
              children: [yv.map((vv => (0, Yv.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: vv
                }
              }, vv))), (0, Yv.jsx)("p", {
                className: "CodexRedacted",
                children: hv(`${nv}:codexRedacted`)
              })]
            }), "" !== zv.codexEntryHint && (0, Yv.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, Yv.jsx)("h4", {
                children: hv(`${nv}:codexHintLabel`)
              }), (0, Yv.jsx)("p", {
                children: zv.codexEntryHint
              })]
            }), (0, Yv.jsx)("p", {
              className: "CodexClearance",
              children: hv(Lv[zv.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Xv(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, lv.j)(Zv, zv.getSnapshot()),
        {
          t: hv
        } = (0, Tv.x)();
      if (0 === Pv.entries.length) return null;
      const Sv = Pv.entries.find((vv => vv.codexEntryId === Pv.selectedId)),
        ev = Pv.entries.filter((vv => "codexContained" === vv.codexEntryState)).length,
        gv = Pv.entries.map((vv => vv.codexEntryId)).sort().indexOf(Sv.codexEntryId) + 1;
      return (0, Yv.jsxs)(Dv, {
        open: Pv.open,
        onDismiss: zv.dismiss,
        title: hv(`${nv}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, Yv.jsx)(rv, {
          contained: ev,
          total: Pv.entries.length
        }),
        children: [(0, Yv.jsx)("div", {
          className: "BoardTiles",
          children: Pv.entries.map((vv => (0, Yv.jsx)(ov, {
            entry: vv,
            selected: vv === Sv,
            onSelect: zv.select
          }, vv.codexEntryId)))
        }), (0, Yv.jsx)(kv, {
          entry: Sv,
          fileNumber: gv
        })]
      })
    }
    var uv = Pv(312);
    class vz extends Qv.b {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        super(vv, zv, Pv), this.pacer = hv, this.command = Sv, this.predict = ev, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = vv => {
          this.selectedId = vv, this.emit()
        }, this.act = (vv, zv) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${vv} ${zv}`, this.rollBack)) return;
          const Pv = this.predict(this.board, vv, zv);
          null !== Pv && (this.board = Pv.board, this.notice = Pv.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = hv.subscribe((() => {
          this.emit()
        }))
      }
      la(vv) {
        const zv = this.messageOpens(vv);
        if (zv && this.open) return this.board === this.confirmed && (this.board = vv), this.confirmed = vv, void this.emit();
        if (this.board = vv, this.confirmed = vv, this.pacer.onReply(), zv) return this.notice = null, this.selectedId = this.openingSelection(vv), void this.show();
        const Pv = this.messageNotice(vv);
        null !== Pv && (this.notice = Pv), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function zz(vv, zv) {
      return vv.loadoutCoins >= zv.loadoutCostCoins && zv.loadoutCostParts.every((zv => function(vv, zv) {
        return Pz(vv, zv).loadoutHeldPartAmount
      }(vv, zv.loadoutPartCurrency) >= zv.loadoutPartAmount))
    }

    function Pz(vv, zv) {
      return vv.loadoutHeldParts.find((vv => vv.loadoutHeldPartCurrency === zv))
    }

    function hz(vv, zv) {
      return vv.loadoutSlots.find((vv => vv.loadoutSlotKind === zv))
    }

    function Sz(vv) {
      return vv.loadoutPerks.filter((vv => vv.loadoutPerkEquipped)).length >= vv.loadoutMaxPerks
    }

    function ez(vv, zv, Pv) {
      for (const Sv of vv.loadoutSlots) {
        const hv = Sv.loadoutSlotOptions.find((vv => vv.loadoutOptionId === Pv));
        if (hv) return "loadoutArmour" === Sv.loadoutSlotKind ? pz(vv, Sv, hv, zv) : gz(vv, Sv, hv, zv)
      }
      const hv = vv.loadoutPerks.find((vv => vv.loadoutPerkId === Pv));
      return hv ? function(vv, zv, Pv) {
        const hv = zv.loadoutPerkOwned,
          Sv = zv.loadoutPerkEquipped,
          ev = zv.loadoutPerkName,
          gv = Sz(vv);
        if ("loadoutUnlock" === Pv) {
          if (hv || !zz(vv, zv.loadoutPerkCost)) return null;
          const Pv = {
            ...zv,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !gv
          };
          return {
            board: Nz(lz(vv, zv.loadoutPerkCost), Pv),
            notice: Tz(gv ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", ev)
          }
        }
        if ("loadoutUpgrade" === Pv || !hv || "loadoutEquip" === Pv === Sv || !Sv && gv) return null;
        return {
          board: Nz(vv, {
            ...zv,
            loadoutPerkEquipped: !Sv
          }),
          notice: Tz(Sv ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", ev)
        }
      }(vv, hv, zv) : null
    }

    function gz(vv, zv, Pv, hv) {
      const Sv = Pv.loadoutOptionOwnedTier,
        ev = Pv.loadoutOptionName;
      if ("loadoutEquip" === hv) return 0 === Sv ? null : {
        board: dz(vv, zv, Pv.loadoutOptionId, null),
        notice: Tz("loadoutNoticeEquipped", ev)
      };
      const gv = "loadoutUnlock" === hv;
      if (gv && 0 !== Sv || "loadoutUpgrade" === hv && (0 === Sv || Sv >= Pv.loadoutOptionTiers.length) || "loadoutUnequip" === hv) return null;
      const pv = Pv.loadoutOptionTiers[Sv].loadoutTierCost;
      if (!zz(vv, pv)) return null;
      const dv = {
          ...Pv,
          loadoutOptionOwnedTier: Sv + 1
        },
        Nv = gv ? Pv.loadoutOptionId : zv.loadoutSlotEquippedId;
      return {
        board: dz(lz(vv, pv), zv, Nv, dv),
        notice: gv ? Tz("loadoutNoticeUnlocked", ev) : Tz("loadoutNoticeUpgraded", ev, Sv + 1)
      }
    }

    function pz(vv, zv, Pv, hv) {
      const Sv = Pv.loadoutOptionOwnedTier > 0,
        ev = Pv.loadoutOptionName;
      if ("loadoutEquip" === hv && Sv) return {
        board: dz(vv, zv, Pv.loadoutOptionId, null),
        notice: Tz("loadoutNoticeEquipped", ev)
      };
      const gv = Pv.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== hv || Sv || !zz(vv, gv) ? null : {
        board: dz(lz(vv, gv), zv, Pv.loadoutOptionId, {
          ...Pv,
          loadoutOptionOwnedTier: 1
        }),
        notice: Tz("loadoutNoticeUnlocked", ev)
      }
    }

    function dz(vv, zv, Pv, hv) {
      const Sv = {
        ...zv,
        loadoutSlotEquippedId: Pv,
        loadoutSlotOptions: zv.loadoutSlotOptions.map((vv => null !== hv && vv.loadoutOptionId === hv.loadoutOptionId ? hv : vv))
      };
      return {
        ...vv,
        loadoutSlots: vv.loadoutSlots.map((vv => vv === zv ? Sv : vv))
      }
    }

    function Nz(vv, zv) {
      return {
        ...vv,
        loadoutPerks: vv.loadoutPerks.map((vv => vv.loadoutPerkId === zv.loadoutPerkId ? zv : vv))
      }
    }

    function lz(vv, zv) {
      return {
        ...vv,
        loadoutCoins: vv.loadoutCoins - zv.loadoutCostCoins,
        loadoutHeldParts: vv.loadoutHeldParts.map((vv => {
          const Pv = zv.loadoutCostParts.find((zv => zv.loadoutPartCurrency === vv.loadoutHeldPartCurrency));
          return Pv ? {
            ...vv,
            loadoutHeldPartAmount: vv.loadoutHeldPartAmount - Pv.loadoutPartAmount
          } : vv
        }))
      }
    }

    function Tz(vv, zv) {
      return {
        loadoutNoticeKey: vv,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: zv,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Wz = "containmentLoadoutView";
    class wz extends vz {
      constructor(vv, zv, Pv, hv) {
        super(vv, zv, Pv, hv, "loadout", ez), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = vv => {
          this.slot = vv, this.selectedId = az(this.board, vv), this.emit()
        }
      }
      messageOpens(vv) {
        return vv.loadoutMessageOpens
      }
      messageNotice(vv) {
        return vv.loadoutNotice
      }
      openingSelection(vv) {
        return az(vv, this.slot)
      }
      buildSnapshot() {
        return {
          open: this.open,
          loadout: this.board,
          slot: this.slot,
          selectedId: this.selectedId,
          pending: this.pacer.isPending(),
          notice: this.notice
        }
      }
    }

    function az(vv, zv) {
      if ("loadoutPerks" === zv) {
        var Pv;
        const zv = vv.loadoutPerks;
        return (null !== (Pv = zv.find((vv => vv.loadoutPerkEquipped))) && void 0 !== Pv ? Pv : zv[0]).loadoutPerkId
      }
      return hz(vv, zv).loadoutSlotEquippedId
    }
    const sz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Cz = Pv(36379),
      iz = Pv(1265);
    const cz = {
        loadoutPrimary: `${nv}:loadoutSlotPrimary`,
        loadoutSecondary: `${nv}:loadoutSlotSecondary`,
        loadoutOffensive: `${nv}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${nv}:loadoutSlotSelfHelp`,
        loadoutArmour: `${nv}:loadoutSlotArmour`,
        loadoutPerks: `${nv}:loadoutSlotPerks`
      },
      Gz = {
        section: "right",
        HW: "bottom",
        act: "top"
      },
      mz = (0, hv.createContext)({
        step: null,
        targetRef: () => {}
      });

    function jz() {
      const {
        step: vv,
        targetRef: zv
      } = (0, hv.useContext)(mz);
      return (Pv, hv) => (null === vv || void 0 === vv ? void 0 : vv.kind) === Pv && vv.id === hv ? zv : void 0
    }

    function fz(vv, zv) {
      const Pv = zv.loadoutTargetId;
      if ("loadoutPerks" === zv.loadoutTargetSection) {
        const zv = vv.loadoutPerks.find((vv => vv.loadoutPerkId === Pv));
        return {
          name: zv.loadoutPerkName,
          owned: zv.loadoutPerkOwned,
          equipped: zv.loadoutPerkEquipped
        }
      }
      const hv = hz(vv, zv.loadoutTargetSection),
        Sv = hv.loadoutSlotOptions.find((vv => vv.loadoutOptionId === Pv));
      return {
        name: Sv.loadoutOptionName,
        owned: Sv.loadoutOptionOwnedTier > 0,
        equipped: hv.loadoutSlotEquippedId === Pv
      }
    }

    function Fz(vv, zv, Pv, hv) {
      const [Sv, ev] = vv(`${nv}:${zv}`, {
        [Pv]: "\x01"
      }).split("\x01");
      return (0, Yv.jsxs)(Yv.Fragment, {
        children: [Sv, (0, Yv.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: hv
        }), ev]
      })
    }

    function Yz(vv) {
      let {
        view: zv,
        onDismiss: Pv,
        children: Sv
      } = vv;
      const {
        t: ev
      } = (0, Tv.x)(), gv = zv.loadout, pv = zv.open ? gv.loadoutWalkthrough.map((vv => ({
        target: vv,
        info: fz(gv, vv)
      }))).find((vv => {
        let {
          info: zv
        } = vv;
        return !zv.equipped
      })) : void 0;
      let dv = null,
        Nv = null;
      if (void 0 !== pv) {
        const {
          target: vv,
          info: Pv
        } = pv;
        zv.slot !== vv.loadoutTargetSection ? (dv = {
          kind: "section",
          id: vv.loadoutTargetSection
        }, Nv = Fz(ev, "loadoutWalkthroughSection", "section", ev(cz[vv.loadoutTargetSection]))) : zv.selectedId !== vv.loadoutTargetId ? (dv = {
          kind: "HW",
          id: vv.loadoutTargetId
        }, Nv = Fz(ev, "loadoutWalkthroughPick", "name", Pv.name)) : (dv = {
          kind: "act",
          id: vv.loadoutTargetId
        }, Nv = Fz(ev, Pv.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Pv.name))
      }
      const lv = null === dv ? null : function(vv) {
          return `${vv.kind}:${vv.id}`
        }(dv),
        [Wv, wv] = (0, hv.useState)(null),
        av = (0, hv.useCallback)((vv => {
          wv((zv => null !== vv ? {
            key: lv,
            node: vv
          } : (null === zv || void 0 === zv ? void 0 : zv.key) === lv ? null : zv))
        }), [lv]),
        sv = null !== lv && (null === Wv || void 0 === Wv ? void 0 : Wv.key) === lv ? Wv.node : null;
      return (0, Yv.jsxs)(mz.Provider, {
        value: {
          step: dv,
          targetRef: av
        },
        children: [Sv, null !== dv && null !== sv && (0, Yv.jsx)(nz, {
          target: sv,
          placement: Gz[dv.kind],
          onDismiss: Pv,
          children: Nv
        }, lv)]
      })
    }

    function nz(vv) {
      let {
        target: zv,
        placement: Pv,
        onDismiss: Sv,
        children: ev
      } = vv;
      const {
        t: gv
      } = (0, Tv.x)(), pv = (0, hv.useRef)(zv);
      return pv.current = zv, (0, iz.q)("popup", pv, Sv), (0, Yv.jsxs)(Cz.i, {
        target: zv,
        placement: Pv,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, Yv.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, Yv.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: sz,
            alt: "",
            draggable: !1
          }), (0, Yv.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: gv(`${nv}:operatorName`)
          }), (0, Yv.jsx)(av.i, {
            onClick: Sv,
            ariaLabel: gv(`${nv}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, Yv.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: ev
        })]
      })
    }
    const Oz = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Dz(vv) {
      let {
        cost: zv,
        loadout: Pv
      } = vv;
      const {
        t: hv
      } = (0, Tv.x)();
      return zv.loadoutCostCoins <= 0 && 0 === zv.loadoutCostParts.length ? (0, Yv.jsx)("span", {
        className: "LoadoutCost",
        children: hv(`${nv}:loadoutFree`)
      }) : (0, Yv.jsxs)("span", {
        className: "LoadoutCost",
        children: [zv.loadoutCostCoins > 0 && (0, Yv.jsx)(Uv, {
          itemName: Ov,
          amount: zv.loadoutCostCoins,
          Vp: Pv.loadoutCoins
        }), zv.loadoutCostParts.map((vv => {
          const zv = Pz(Pv, vv.loadoutPartCurrency);
          return (0, Yv.jsx)(Uv, {
            itemName: zv.loadoutHeldPartItem,
            amount: vv.loadoutPartAmount,
            Vp: zv.loadoutHeldPartAmount
          }, vv.loadoutPartCurrency)
        }))]
      })
    }
    const Kz = {
      loadoutStatFireRate: `${nv}:loadoutUnitPerMinute`,
      loadoutStatReload: `${nv}:loadoutUnitSeconds`,
      loadoutStatResupply: `${nv}:loadoutUnitSeconds`
    };

    function Vz(vv) {
      return "loadoutStatPotency" === vv.loadoutStatKind ? (0, uv.S)(vv.loadoutStatValue) : String(vv.loadoutStatValue)
    }

    function Uz(vv) {
      var zv;
      let {
        option: Pv
      } = vv;
      const {
        t: hv
      } = (0, Tv.x)(), Sv = Pv.loadoutOptionTiers, ev = null === (zv = Sv[0]) || void 0 === zv ? void 0 : zv.loadoutTierStats.map((vv => vv.loadoutStatKind));
      if (!ev || 0 === ev.length) return null;
      const gv = Pv.loadoutOptionOwnedTier,
        pv = (vv, zv) => {
          var Pv;
          return null === (Pv = Sv[vv]) || void 0 === Pv ? void 0 : Pv.loadoutTierStats.find((vv => vv.loadoutStatKind === zv))
        };
      return (0, Yv.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, Yv.jsx)("thead", {
          children: (0, Yv.jsxs)("tr", {
            children: [(0, Yv.jsx)("th", {}), Sv.map(((vv, zv) => (0, Yv.jsx)("th", {
              className: Nv()({
                Current: zv + 1 === gv,
                Next: zv === gv
              }),
              children: hv(`${nv}:loadoutTier`, {
                tier: (0, uv.S)(zv + 1)
              })
            }, zv)))]
          })
        }), (0, Yv.jsx)("tbody", {
          children: ev.map((vv => {
            const zv = Kz[vv];
            return (0, Yv.jsxs)("tr", {
              children: [(0, Yv.jsxs)("th", {
                scope: "row",
                children: [hv(`${nv}:${vv}`), zv && (0, Yv.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: hv(zv)
                })]
              }), Sv.map(((zv, Pv) => {
                const hv = pv(Pv, vv),
                  Sv = Pv > 0 ? pv(Pv - 1, vv) : void 0,
                  ev = hv && Sv ? hv.loadoutStatValue - Sv.loadoutStatValue : 0,
                  dv = Oz.has(vv) ? ev < 0 : ev > 0,
                  lv = Pv === gv;
                return (0, Yv.jsxs)("td", {
                  className: Nv()({
                    Current: Pv + 1 === gv,
                    Next: lv,
                    Gain: dv,
                    Owned: Pv < gv
                  }),
                  children: [lv && dv && (0, Yv.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: ev < 0 ? "\u25bc" : "\u25b2"
                  }), hv ? Vz(hv) : "-"]
                }, Pv)
              }))]
            }, vv)
          }))
        })]
      })
    }

    function Rz(vv) {
      let {
        view: zv,
        controller: Pv,
        slot: hv,
        option: Sv
      } = vv;
      const {
        t: ev
      } = (0, Tv.x)(), gv = zv.loadout, pv = Sv.loadoutOptionOwnedTier, dv = Sv.loadoutOptionTiers.length, Nv = hv.loadoutSlotEquippedId === Sv.loadoutOptionId, lv = pv < dv ? Sv.loadoutOptionTiers[pv].loadoutTierCost : null, Wv = null !== lv && zz(gv, lv), wv = Sv.loadoutOptionId, sv = jz();
      return (0, Yv.jsxs)(Yv.Fragment, {
        children: [(0, Yv.jsx)(tz, {
          icon: Sv.loadoutOptionIcon,
          name: Sv.loadoutOptionName,
          status: 0 === pv ? ev(`${nv}:loadoutLocked`) : dv > 1 ? ev(`${nv}:loadoutTier`, {
            tier: (0, uv.S)(pv)
          }) : null,
          locked: 0 === pv,
          equipped: Nv
        }), (0, Yv.jsx)("p", {
          className: "BoardDescription",
          children: Sv.loadoutOptionDescription
        }), (0, Yv.jsx)(Uz, {
          option: Sv
        }), (0, Yv.jsxs)("div", {
          ref: sv("act", wv),
          className: "BoardActions",
          children: [null !== lv && (0, Yv.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Yv.jsx)(Dz, {
              cost: lv,
              loadout: gv
            }), (0, Yv.jsx)(av.j, {
              disabled: !Wv || zv.pending,
              onClick: () => {
                Pv.act(0 === pv ? "loadoutUnlock" : "loadoutUpgrade", wv)
              },
              children: 0 === pv ? ev(`${nv}:loadoutUnlock`) : ev(`${nv}:loadoutUpgrade`, {
                tier: (0, uv.S)(pv + 1)
              })
            })]
          }), null === lv && dv > 1 && (0, Yv.jsx)("span", {
            className: "BoardHint",
            children: ev(`${nv}:loadoutMaxed`)
          }), pv > 0 && !Nv && (0, Yv.jsx)(av.d, {
            disabled: zv.pending,
            onClick: () => {
              Pv.act("loadoutEquip", wv)
            },
            children: ev(`${nv}:loadoutEquip`)
          })]
        })]
      })
    }

    function xz(vv) {
      let {
        view: zv,
        controller: Pv,
        perk: hv
      } = vv;
      const {
        t: Sv
      } = (0, Tv.x)(), ev = zv.loadout, gv = Sz(ev), pv = hv.loadoutPerkId, dv = jz();
      return (0, Yv.jsxs)(Yv.Fragment, {
        children: [(0, Yv.jsx)(tz, {
          icon: hv.loadoutPerkIcon,
          name: hv.loadoutPerkName,
          status: hv.loadoutPerkOwned ? null : Sv(`${nv}:loadoutLocked`),
          locked: !hv.loadoutPerkOwned,
          equipped: hv.loadoutPerkEquipped
        }), (0, Yv.jsx)("p", {
          className: "BoardDescription",
          children: hv.loadoutPerkDescription
        }), (0, Yv.jsxs)("div", {
          ref: dv("act", pv),
          className: "BoardActions",
          children: [!hv.loadoutPerkOwned && (0, Yv.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Yv.jsx)(Dz, {
              cost: hv.loadoutPerkCost,
              loadout: ev
            }), (0, Yv.jsx)(av.j, {
              disabled: !zz(ev, hv.loadoutPerkCost) || zv.pending,
              onClick: () => {
                Pv.act("loadoutUnlock", pv)
              },
              children: Sv(`${nv}:loadoutUnlock`)
            })]
          }), hv.loadoutPerkOwned && !hv.loadoutPerkEquipped && (0, Yv.jsx)(av.d, {
            disabled: gv || zv.pending,
            onClick: () => {
              Pv.act("loadoutEquip", pv)
            },
            children: Sv(`${nv}:loadoutEquip`)
          }), hv.loadoutPerkOwned && !hv.loadoutPerkEquipped && gv && (0, Yv.jsx)("span", {
            className: "BoardHint",
            children: Sv(`${nv}:loadoutSocketsFullHint`)
          }), hv.loadoutPerkEquipped && (0, Yv.jsx)(av.K, {
            disabled: zv.pending,
            onClick: () => {
              Pv.act("loadoutUnequip", pv)
            },
            children: Sv(`${nv}:loadoutUnequip`)
          })]
        })]
      })
    }

    function tz(vv) {
      let {
        icon: zv,
        name: Pv,
        status: hv,
        locked: Sv,
        equipped: ev
      } = vv;
      const {
        t: gv
      } = (0, Tv.x)();
      return (0, Yv.jsxs)(qv, {
        icon: (0, Yv.jsx)(Kv, {
          itemName: zv
        }),
        name: Pv,
        children: [null !== hv && (0, Yv.jsx)("span", {
          className: Nv()("LoadoutStatusText", {
            Locked: Sv
          }),
          children: hv
        }), ev && (0, Yv.jsx)("span", {
          className: "BoardBadge",
          children: gv(`${nv}:loadoutEquippedBadge`)
        })]
      })
    }

    function qz(vv) {
      let {
        view: zv,
        controller: Pv
      } = vv;
      const hv = zv.loadout;
      if ("loadoutPerks" === zv.slot) {
        const vv = hv.loadoutPerks.find((vv => vv.loadoutPerkId === zv.selectedId));
        return (0, Yv.jsx)("section", {
          className: "BoardDetail",
          children: vv && (0, Yv.jsx)(xz, {
            view: zv,
            controller: Pv,
            perk: vv
          })
        })
      }
      const Sv = hz(hv, zv.slot),
        ev = Sv.loadoutSlotOptions.find((vv => vv.loadoutOptionId === zv.selectedId));
      return (0, Yv.jsx)("section", {
        className: "BoardDetail",
        children: ev && (0, Yv.jsx)(Rz, {
          view: zv,
          controller: Pv,
          slot: Sv,
          option: ev
        })
      })
    }

    function Iz(vv) {
      let {
        owned: zv,
        total: Pv
      } = vv;
      return Pv <= 1 ? null : (0, Yv.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Pv
        }, ((vv, Pv) => (0, Yv.jsx)("span", {
          className: Nv()("LoadoutPip", {
            Filled: Pv < zv
          })
        }, Pv)))
      })
    }

    function Qz(vv) {
      let {
        view: zv,
        controller: Pv
      } = vv;
      const {
        t: hv
      } = (0, Tv.x)(), Sv = zv.loadout, ev = jz();
      return (0, Yv.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": hv(`${nv}:loadoutKit`),
        children: [Sv.loadoutSlots.map((vv => {
          const Sv = vv.loadoutSlotOptions.find((zv => zv.loadoutOptionId === vv.loadoutSlotEquippedId));
          return (0, Yv.jsxs)("button", {
            ref: ev("section", vv.loadoutSlotKind),
            type: "button",
            className: Nv()("LoadoutKitSlot", {
              Selected: zv.slot === vv.loadoutSlotKind
            }),
            onClick: () => {
              Pv.selectSlot(vv.loadoutSlotKind)
            },
            children: [(0, Yv.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Sv && (0, Yv.jsx)(Kv, {
                itemName: Sv.loadoutOptionIcon
              })
            }), (0, Yv.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, Yv.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, Yv.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: hv(cz[vv.loadoutSlotKind])
                }), Sv && (0, Yv.jsx)(Iz, {
                  owned: Sv.loadoutOptionOwnedTier,
                  total: Sv.loadoutOptionTiers.length
                })]
              }), (0, Yv.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Sv || void 0 === Sv ? void 0 : Sv.loadoutOptionName
              })]
            })]
          }, vv.loadoutSlotKind)
        })), (0, Yv.jsx)(Zz, {
          view: zv,
          controller: Pv
        })]
      })
    }

    function Zz(vv) {
      let {
        view: zv,
        controller: Pv
      } = vv;
      const {
        t: hv
      } = (0, Tv.x)(), Sv = zv.loadout, ev = Sv.loadoutPerks.filter((vv => vv.loadoutPerkEquipped)), gv = jz();
      return (0, Yv.jsxs)("button", {
        ref: gv("section", "loadoutPerks"),
        type: "button",
        className: Nv()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === zv.slot
        }),
        onClick: () => {
          Pv.selectSlot("loadoutPerks")
        },
        children: [(0, Yv.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, Yv.jsx)("span", {
            className: "LoadoutKitLabel",
            children: hv(cz.loadoutPerks)
          }), (0, Yv.jsx)("span", {
            className: "LoadoutPerkCount",
            children: hv(`${nv}:loadoutPerkCount`, {
              equipped: String(ev.length),
              max: String(Sv.loadoutMaxPerks)
            })
          })]
        }), (0, Yv.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Sv.loadoutMaxPerks
          }, ((vv, zv) => {
            const Pv = ev[zv];
            return (0, Yv.jsxs)("span", {
              className: Nv()("LoadoutSocket", {
                Filled: Pv,
                Empty: !Pv
              }),
              children: [(0, Yv.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Pv && (0, Yv.jsx)(Kv, {
                  itemName: Pv.loadoutPerkIcon
                })
              }), (0, Yv.jsx)("span", {
                className: "LoadoutSocketName",
                children: Pv ? Pv.loadoutPerkName : hv(`${nv}:loadoutPerkSocketEmpty`)
              })]
            }, zv)
          }))
        })]
      })
    }

    function Az(vv) {
      let {
        icon: zv,
        name: Pv,
        selected: hv,
        equipped: Sv,
        locked: ev,
        ownedTier: gv,
        tiers: pv,
        buttonRef: dv,
        onSelect: Nv
      } = vv;
      const {
        t: lv
      } = (0, Tv.x)();
      return (0, Yv.jsxs)(tv, {
        icon: (0, Yv.jsx)(Kv, {
          itemName: zv
        }),
        name: Pv,
        selected: hv,
        locked: ev,
        buttonRef: dv,
        onSelect: Nv,
        children: [Sv && (0, Yv.jsx)("span", {
          className: "BoardBadge",
          children: lv(`${nv}:loadoutEquippedBadge`)
        }), ev && (0, Yv.jsx)("span", {
          className: "BoardBadge Muted",
          children: lv(`${nv}:loadoutLocked`)
        }), !ev && (0, Yv.jsx)(Iz, {
          owned: gv,
          total: pv
        })]
      })
    }

    function Lz(vv) {
      let {
        view: zv,
        controller: Pv
      } = vv;
      const hv = zv.loadout,
        Sv = jz();
      if ("loadoutPerks" === zv.slot) return (0, Yv.jsx)("div", {
        className: "BoardTiles",
        children: hv.loadoutPerks.map((vv => (0, Yv.jsx)(Az, {
          icon: vv.loadoutPerkIcon,
          name: vv.loadoutPerkName,
          selected: zv.selectedId === vv.loadoutPerkId,
          equipped: vv.loadoutPerkEquipped,
          locked: !vv.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Sv("HW", vv.loadoutPerkId),
          onSelect: () => {
            Pv.select(vv.loadoutPerkId)
          }
        }, vv.loadoutPerkId)))
      });
      const ev = hz(hv, zv.slot);
      return (0, Yv.jsx)("div", {
        className: "BoardTiles",
        children: ev.loadoutSlotOptions.map((vv => (0, Yv.jsx)(Az, {
          icon: vv.loadoutOptionIcon,
          name: vv.loadoutOptionName,
          selected: zv.selectedId === vv.loadoutOptionId,
          equipped: ev.loadoutSlotEquippedId === vv.loadoutOptionId,
          locked: 0 === vv.loadoutOptionOwnedTier,
          ownedTier: vv.loadoutOptionOwnedTier,
          tiers: vv.loadoutOptionTiers.length,
          buttonRef: Sv("HW", vv.loadoutOptionId),
          onSelect: () => {
            Pv.select(vv.loadoutOptionId)
          }
        }, vv.loadoutOptionId)))
      })
    }

    function Hz(vv) {
      let {
        loadout: zv
      } = vv;
      return (0, Yv.jsx)(Iv, {
        coins: zv.loadoutCoins,
        children: zv.loadoutHeldParts.filter((vv => vv.loadoutHeldPartAmount > 0)).map((vv => (0, Yv.jsx)(Uv, {
          itemName: vv.loadoutHeldPartItem,
          amount: vv.loadoutHeldPartAmount
        }, vv.loadoutHeldPartCurrency)))
      })
    }

    function Mz(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, lv.j)(Wz, zv.getSnapshot()),
        {
          t: hv
        } = (0, Tv.x)();
      if (null === Pv.loadout) return null;
      const Sv = Pv.notice;
      return (0, Yv.jsx)(Yz, {
        view: Pv,
        onDismiss: zv.dismiss,
        children: (0, Yv.jsxs)(Dv, {
          open: Pv.open,
          onDismiss: zv.dismiss,
          title: hv(`${nv}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, Yv.jsx)(Hz, {
            loadout: Pv.loadout
          }),
          statusRefused: null === Sv || void 0 === Sv ? void 0 : Sv.loadoutNoticeRefused,
          status: (0, Yv.jsxs)(Yv.Fragment, {
            children: [(0, Yv.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: hv(`${nv}:loadoutRadioBadge`)
            }), null !== Sv && hv(`${nv}:${Sv.loadoutNoticeKey}`, {
              name: Sv.loadoutNoticeName,
              tier: (0, uv.S)(Sv.loadoutNoticeTier),
              max: String(Pv.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, Yv.jsx)(Qz, {
            view: Pv,
            controller: zv
          }), (0, Yv.jsx)(Lz, {
            view: Pv,
            controller: zv
          }), (0, Yv.jsx)(qz, {
            view: Pv,
            controller: zv
          })]
        })
      })
    }

    function yz(vv, zv, Pv) {
      const hv = vv.locatorEntries.find((vv => vv.locatorEntryId === Pv));
      if (!hv) return null;
      const Sv = hv.locatorEntryName;
      if ("locatorDisarm" === zv) return hv.locatorEntryArmed ? {
        board: Bz(vv, null),
        notice: Jz("locatorNoticeDisarmed", Sv)
      } : null;
      if ("locatorArm" === zv) return hv.locatorEntryOwned && !hv.locatorEntryArmed ? {
        board: Bz(vv, Pv),
        notice: Jz("locatorNoticeArmed", Sv)
      } : null;
      if (hv.locatorEntryOwned || vv.locatorCoins < hv.locatorEntryPrice) return null;
      const ev = Bz({
        ...vv,
        locatorCoins: vv.locatorCoins - hv.locatorEntryPrice
      }, Pv);
      return {
        board: {
          ...ev,
          locatorEntries: ev.locatorEntries.map((vv => vv.locatorEntryId === Pv ? {
            ...vv,
            locatorEntryOwned: !0
          } : vv))
        },
        notice: Jz("locatorNoticeBought", Sv)
      }
    }

    function Bz(vv, zv) {
      return {
        ...vv,
        locatorEntries: vv.locatorEntries.map((vv => {
          const Pv = vv.locatorEntryId === zv;
          return vv.locatorEntryArmed === Pv ? vv : {
            ...vv,
            locatorEntryArmed: Pv
          }
        }))
      }
    }

    function Jz(vv, zv) {
      return {
        locatorNoticeKey: vv,
        locatorNoticeRefused: !1,
        locatorNoticeName: zv
      }
    }
    const Ez = "containmentLocatorView";
    class oz extends vz {
      constructor(vv, zv, Pv, hv) {
        super(vv, zv, Pv, hv, "locator", yz), this.snapshot = this.buildSnapshot()
      }
      messageOpens(vv) {
        return vv.locatorMessageOpens
      }
      messageNotice(vv) {
        return vv.locatorNotice
      }
      openingSelection(vv) {
        var zv;
        const Pv = vv.locatorEntries;
        return (null !== (zv = Pv.find((vv => vv.locatorEntryArmed))) && void 0 !== zv ? zv : Pv[0]).locatorEntryId
      }
      buildSnapshot() {
        return {
          open: this.open,
          locators: this.board,
          selectedId: this.selectedId,
          pending: this.pacer.isPending(),
          notice: this.notice
        }
      }
    }
    const bz = {
        locatorContained: `${nv}:locatorFlavourContained`,
        locatorEncountered: `${nv}:locatorFlavourEncountered`,
        locatorUnseen: `${nv}:locatorFlavourUnseen`
      },
      rz = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${nv}:locatorAttunedNormal`,
        codexHardOnly: `${nv}:locatorAttunedHard`
      };

    function kz() {
      return (0, Yv.jsx)(Yv.Fragment, {
        children: Array.from({
          length: 5
        }, ((vv, zv) => (0, Yv.jsx)("span", {
          className: "LocatorFly",
          children: (0, Yv.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, zv)))
      })
    }

    function Xz(vv) {
      let {
        entry: zv
      } = vv;
      const {
        t: Pv
      } = (0, Tv.x)();
      return zv.locatorEntryArmed ? (0, Yv.jsx)("span", {
        className: "BoardBadge Armed",
        children: Pv(`${nv}:locatorArmedBadge`)
      }) : zv.locatorEntryOwned ? (0, Yv.jsx)("span", {
        className: "BoardBadge",
        children: Pv(`${nv}:locatorOwnedBadge`)
      }) : null
    }

    function uz(vv) {
      let {
        entry: zv,
        coins: Pv,
        inTile: hv = !1
      } = vv;
      return (0, Yv.jsx)(Uv, {
        itemName: Ov,
        amount: zv.locatorEntryPrice,
        Vp: Pv,
        inTile: hv
      })
    }

    function vP(vv) {
      let {
        view: zv,
        controller: Pv,
        entry: hv
      } = vv;
      const {
        t: Sv
      } = (0, Tv.x)(), ev = hv.locatorEntryId, gv = zv.locators.locatorEntries.find((vv => vv.locatorEntryArmed && vv !== hv));
      return (0, Yv.jsxs)("div", {
        className: "BoardActions",
        children: [hv.locatorEntryArmed && (0, Yv.jsx)(av.K, {
          disabled: zv.pending,
          onClick: () => {
            Pv.act("locatorDisarm", ev)
          },
          children: Sv(`${nv}:locatorDisarm`)
        }), hv.locatorEntryOwned && !hv.locatorEntryArmed && (0, Yv.jsx)(av.d, {
          disabled: zv.pending,
          onClick: () => {
            Pv.act("locatorArm", ev)
          },
          children: Sv(`${nv}:locatorArm`)
        }), !hv.locatorEntryOwned && (0, Yv.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, Yv.jsx)(uz, {
            entry: hv,
            coins: zv.locators.locatorCoins
          }), (0, Yv.jsx)(av.j, {
            disabled: zv.locators.locatorCoins < hv.locatorEntryPrice || zv.pending,
            onClick: () => {
              Pv.act("locatorBuy", ev)
            },
            children: Sv(`${nv}:locatorBuy`)
          })]
        }), gv && !hv.locatorEntryArmed && (0, Yv.jsx)("span", {
          className: "BoardHint",
          children: Sv(`${nv}:locatorReplacesHint`, {
            name: gv.locatorEntryName
          })
        })]
      })
    }

    function zP(vv) {
      let {
        entry: zv
      } = vv;
      return "locatorUnseen" === zv.locatorEntryStanding ? (0, Yv.jsx)(Kv, {
        itemName: "Compass"
      }) : (0, Yv.jsx)(Vv, {
        anomalyId: zv.locatorEntryId,
        caught: "locatorContained" === zv.locatorEntryStanding
      })
    }

    function PP(vv) {
      let {
        view: zv,
        controller: Pv,
        entry: hv
      } = vv;
      const {
        t: Sv
      } = (0, Tv.x)(), ev = rz[hv.locatorEntryDifficulty];
      return (0, Yv.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, Yv.jsxs)("div", {
          className: Nv()("LocatorLabel", {
            Armed: hv.locatorEntryArmed
          }),
          children: [(0, Yv.jsx)(qv, {
            icon: (0, Yv.jsx)(zP, {
              entry: hv
            }),
            name: Sv(`${nv}:locatorName`, {
              name: hv.locatorEntryName
            }),
            children: (0, Yv.jsx)(Xz, {
              entry: hv
            })
          }), (0, Yv.jsx)("p", {
            className: "BoardDescription",
            children: Sv(hv.locatorEntryArmed ? `${nv}:locatorFlavourArmed` : bz[hv.locatorEntryStanding])
          }), null !== ev && (0, Yv.jsx)("p", {
            className: "LocatorAttuned",
            children: Sv(ev)
          }), (0, Yv.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Sv(`${nv}:locatorUsage`)
          })]
        }), (0, Yv.jsx)(vP, {
          view: zv,
          controller: Pv,
          entry: hv
        })]
      })
    }

    function hP(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, lv.j)(Ez, zv.getSnapshot()),
        {
          t: hv
        } = (0, Tv.x)(),
        Sv = Pv.locators;
      if (null === Sv) return null;
      const ev = Sv.locatorEntries.find((vv => vv.locatorEntryId === Pv.selectedId)),
        gv = Pv.notice;
      return (0, Yv.jsxs)(Dv, {
        open: Pv.open,
        onDismiss: zv.dismiss,
        title: hv(`${nv}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, Yv.jsx)(kz, {}),
        headerExtra: (0, Yv.jsx)(Iv, {
          coins: Sv.locatorCoins
        }),
        statusRefused: null === gv || void 0 === gv ? void 0 : gv.locatorNoticeRefused,
        status: (0, Yv.jsxs)(Yv.Fragment, {
          children: [(0, Yv.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: hv(`${nv}:locatorKeeperName`)
          }), null !== gv && hv(`${nv}:${gv.locatorNoticeKey}`, {
            name: gv.locatorNoticeName
          })]
        }),
        children: [(0, Yv.jsx)("div", {
          className: "BoardTiles",
          children: Sv.locatorEntries.map((vv => (0, Yv.jsxs)(tv, {
            icon: (0, Yv.jsx)(zP, {
              entry: vv
            }),
            name: vv.locatorEntryName,
            selected: vv === ev,
            locked: !1,
            className: Nv()("LocatorTag", {
              Armed: vv.locatorEntryArmed
            }),
            onSelect: () => {
              zv.select(vv.locatorEntryId)
            },
            children: [(0, Yv.jsx)(Xz, {
              entry: vv
            }), !vv.locatorEntryOwned && (0, Yv.jsx)(uz, {
              entry: vv,
              coins: Sv.locatorCoins,
              inTile: !0
            })]
          }, vv.locatorEntryId)))
        }), (0, Yv.jsx)(PP, {
          view: Pv,
          controller: zv,
          entry: ev
        })]
      })
    }

    function SP(vv) {
      let {
        loadout: zv,
        codex: Pv,
        locator: hv
      } = vv;
      return (0, Yv.jsxs)(Yv.Fragment, {
        children: [(0, Yv.jsx)(Mz, {
          controller: zv
        }), (0, Yv.jsx)(Xv, {
          controller: Pv
        }), (0, Yv.jsx)(hP, {
          controller: hv
        })]
      })
    }
    var eP = Pv(38083);
    class gP {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = vv, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new eP.e({
          spacingMs: 0,
          now: zv
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(vv, zv) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, zv(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(vv), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const vv of this.listeners) vv()
      }
    }
    var pP = Pv(38076);
    const dP = new Map([
      ["npc_general", sz],
      ["npc_tentacle_guy", pP]
    ]);

    function NP(vv) {
      const zv = dP.get(vv);
      if (void 0 === zv) return null;
      const Pv = document.createElement("img");
      return Pv.src = zv, Pv.alt = "", Pv.draggable = !1, Pv.style.imageRendering = "pixelated", Pv
    }
    const lP = function() {
      let vv, zv = !1,
        Pv = null,
        dv = null;
      const Nv = [],
        lv = vv => {
          for (const zv of Nv) zv !== vv && zv.close();
          (0, pv.r)()
        },
        Tv = vv => {
          vv && (0, pv.j)()
        },
        Wv = new gP((zv => {
          vv.sendCommand(zv)
        })),
        wv = new wz((vv => {
          gv.j.zC(Wz, vv, !0)
        }), lv, Tv, Wv),
        av = new Av((vv => {
          gv.j.zC(Zv, vv, !0)
        }), lv, Tv),
        sv = new oz((vv => {
          gv.j.zC(Ez, vv, !0)
        }), lv, Tv, Wv);
      Nv.push(wv, av, sv);
      return {
        onCreate: zv => {
          vv = zv, Pv = (0, pv.w)(null, {
            content: (0, hv.createElement)(SP, {
              loadout: wv,
              codex: av,
              locator: sv
            }),
            onClose: () => {
              for (const vv of Nv) vv.close()
            }
          }), dv = (0, ev.g)(NP)
        },
        onReceivedMessageFromServer: (vv, zv) => {
          "containmentLoadout" === vv ? wv.la(zv) : "containmentLoadoutClose" === vv ? wv.isOpen() && (wv.close(), (0, pv.g)()) : "containmentCodex" === vv ? av.la(zv) : "containmentLocator" === vv && sv.la(zv)
        },
        MT: () => {
          zv || Sv.c.get("loadingOverlayVisible") || (zv = !0, vv.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var vv, zv;
          null === (vv = Pv) || void 0 === vv || vv(), Pv = null, null === (zv = dv) || void 0 === zv || zv(), dv = null;
          for (const Pv of Nv) Pv.dispose();
          Wv.dispose()
        }
      }
    }
  },
  36387: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => Iv,
      F: () => Qv,
      J: () => tv,
      L: () => Zv,
      d: () => dv,
      f: () => Kv,
      h: () => pv,
      j: () => xv,
      m: () => Ov,
      p: () => fv,
      q: () => Rv,
      t: () => Uv,
      x: () => nv,
      z: () => qv
    });
    var hv = Pv(39);
    const Sv = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ev = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      gv = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      pv = ev.filter((vv => "docsButton" !== vv)),
      dv = gv.filter((vv => "aiHelperButton" !== vv)),
      Nv = "codeEditorTutorials",
      lv = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Tv = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Wv = null,
      wv = null;
    const av = new Set,
      sv = new Set;
    let Cv = null;
    const iv = new Set,
      cv = new Set;

    function Gv() {
      cv.forEach((vv => {
        vv()
      }))
    }

    function mv() {
      if (!Wv) {
        const vv = hv.h.getItem(Nv);
        Wv = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof vv && null !== vv ? vv : {}
        }
      }
      return Wv
    }

    function jv(vv) {
      const zv = mv();
      zv[vv] || (Wv = {
        ...zv,
        [vv]: !0
      }, hv.h.setItem(Nv, Wv))
    }

    function fv(vv) {
      return "docsOverview" === vv ? ev : "aiHelperOverview" === vv ? gv : wv ? Sv[wv] : []
    }

    function Fv(vv) {
      return ("worldCodeButton" !== vv || !mv().worldCodeIntroShown) && !iv.has(vv)
    }

    function Yv(vv) {
      var zv;
      return (null === (zv = Cv) || void 0 === zv ? void 0 : zv.name) === vv ? Cv.stepsDone : av
    }

    function nv(vv, zv) {
      if (! function(vv) {
          return Cv ? Cv.name === vv : "welcome" === vv
        }(vv) || !Fv(zv) || Yv(vv).has(zv)) return !1;
      if (Cv) return !0;
      const Pv = lv[zv];
      return Pv ? !mv()[Pv] || sv.has(zv) : !mv()[Tv[vv]]
    }

    function Ov(vv) {
      var zv;
      return null !== (zv = fv(vv).find((zv => nv(vv, zv)))) && void 0 !== zv ? zv : null
    }

    function Dv(vv) {
      var zv;
      jv(Tv[vv]), (null === (zv = Cv) || void 0 === zv ? void 0 : zv.name) === vv && (Cv = null)
    }

    function Kv(vv) {
      const zv = (Cv ? [Cv.name] : ["welcome", "docsOverview"]).find((zv => Ov(zv) === vv));
      if (!zv) return;
      Yv(zv).add(vv);
      const Pv = lv[vv];
      Pv && (jv(Pv), Cv || sv.add(vv)), null === Ov(zv) && Dv(zv), Gv()
    }

    function Vv(vv, zv) {
      const Pv = fv(vv),
        hv = Yv(vv);
      for (let Sv = Pv.indexOf(zv) - 1; Sv >= 0; Sv--)
        if (hv.has(Pv[Sv]) && Fv(Pv[Sv])) return Pv[Sv];
      return null
    }

    function Uv(vv, zv) {
      return null !== Vv(vv, zv)
    }

    function Rv(vv, zv) {
      const Pv = Vv(vv, zv);
      Pv && (Yv(vv).delete(Pv), Gv())
    }

    function xv(vv) {
      Dv(vv), "welcome" === vv && fv("welcome").forEach((vv => {
        const zv = lv[vv];
        zv && jv(zv)
      })), Gv()
    }

    function tv(vv) {
      Cv = {
        name: vv,
        stepsDone: new Set
      }, Gv()
    }

    function qv() {
      (Cv || 0 !== av.size || 0 !== sv.size) && (Cv = null, av.clear(), sv.clear(), Gv())
    }

    function Iv(vv, zv) {
      const Pv = zv ? vv : wv === vv ? null : wv;
      Pv !== wv && (wv = Pv, Gv())
    }

    function Qv(vv, zv) {
      iv.has(vv) === zv && (zv ? iv.delete(vv) : iv.add(vv), Gv())
    }

    function Zv(vv) {
      return cv.add(vv), () => {
        cv.delete(vv)
      }
    }
  },
  38785: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38791: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38797: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38800: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38804: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38807: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38816: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38819: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38822: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38829: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38831: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38836: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38840: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38847: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38850: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38855: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38861: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38865: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38868: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38872: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38076: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);