export const id = 14;
export const ids = [14];
export const modules = {
  38235: (JJ, cJ, ZJ) => {
    var FJ = {
      "./breach-zero-uncaught.webp": 38244,
      "./breach-zero.webp": 38246,
      "./brood-father-uncaught.webp": 38253,
      "./brood-father.webp": 38260,
      "./carousel-uncaught.webp": 38264,
      "./carousel.webp": 38272,
      "./deadlock-uncaught.webp": 38279,
      "./deadlock.webp": 38285,
      "./frost-revenant-uncaught.webp": 38294,
      "./frost-revenant.webp": 38302,
      "./hollow-choir-uncaught.webp": 38308,
      "./hollow-choir.webp": 38312,
      "./magma-warden-uncaught.webp": 38321,
      "./magma-warden.webp": 38324,
      "./patient-zero-uncaught.webp": 38333,
      "./patient-zero.webp": 38337,
      "./siege-engine-uncaught.webp": 38342,
      "./siege-engine.webp": 38348,
      "./warp-stalker-uncaught.webp": 38356,
      "./warp-stalker.webp": 38364
    };

    function UJ(JJ) {
      var cJ = eJ(JJ);
      return ZJ(cJ)
    }

    function eJ(JJ) {
      if (!ZJ.o(FJ, JJ)) {
        var cJ = new Error("Cannot find module '" + JJ + "'");
        throw cJ.code = "MODULE_NOT_FOUND", cJ
      }
      return FJ[JJ]
    }
    UJ.keys = function() {
      return Object.keys(FJ)
    }, UJ.resolve = eJ, JJ.exports = UJ, UJ.id = 38235
  },
  35897: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => KJ,
      c: () => EJ,
      e: () => VJ,
      i: () => nJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(47),
      XJ = ZJ(60),
      AJ = ZJ(1266),
      qJ = ZJ(1329),
      jJ = ZJ(1259),
      YJ = ZJ(1181),
      hJ = ZJ(1086),
      DJ = ZJ(35901),
      sJ = ZJ(990);

    function nJ(JJ) {
      const [cJ, ZJ] = (0, eJ.useState)((() => (0, DJ.m)(JJ)));
      return (0, eJ.useEffect)((() => (ZJ((0, DJ.m)(JJ)), (0, DJ.L)((() => {
        ZJ((0, DJ.m)(JJ))
      })))), [JJ]), cJ
    }

    function GJ(JJ, cJ) {
      "function" === typeof JJ ? JJ(cJ) : JJ && (JJ.current = cJ)
    }

    function fJ(JJ) {
      let {
        tutorial: cJ,
        step: ZJ,
        enabled: FJ = !0
      } = JJ;
      const UJ = nJ(cJ);
      return FJ && UJ === ZJ
    }

    function xJ(JJ, cJ) {
      const ZJ = (0, DJ.q)(JJ),
        FJ = ZJ.indexOf(cJ);
      return !ZJ.slice(FJ + 1).some((cJ => (0, DJ.w)(JJ, cJ)))
    }

    function rJ(JJ, cJ, ZJ, FJ) {
      let {
        tutorial: UJ,
        step: eJ,
        waitForClick: XJ = !1,
        onPrevious: AJ
      } = JJ;
      const qJ = cJ && (0, DJ.t)(UJ, eJ),
        jJ = cJ && !xJ(UJ, eJ),
        hJ = XJ ? FJ : ZJ;
      let sJ = null;
      qJ ? sJ = () => {
        null === AJ || void 0 === AJ || AJ(), (0, DJ.r)(UJ, eJ)
      } : jJ && (sJ = () => {
        (0, DJ.i)(UJ)
      }), (0, YJ.p)("popup", null !== hJ && void 0 !== hJ ? hJ : ZJ, sJ, cJ && null !== hJ, null, qJ ? void 0 : "controller:menusSkipTutorial")
    }

    function vJ(JJ) {
      let {
        tutorial: cJ,
        step: ZJ,
        text: FJ,
        waitForClick: UJ = !1,
        onPrevious: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, hJ.F)(), AJ = xJ(cJ, ZJ);
      return (0, sJ.jsxs)(sJ.Fragment, {
        children: [(0, sJ.jsx)("div", {
          className: "TutorialStepText",
          children: FJ
        }), (0, sJ.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, DJ.t)(cJ, ZJ) && (0, sJ.jsx)(qJ.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === eJ || void 0 === eJ || eJ(), (0, DJ.r)(cJ, ZJ)
            },
            children: XJ("tutorial:back")
          }), !UJ && (0, sJ.jsx)(qJ.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, DJ.f)(ZJ)
            },
            padDefaultFocus: !0,
            children: XJ(AJ ? "tutorial:done" : "tutorial:next")
          }), !AJ && (0, sJ.jsx)(qJ.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, DJ.i)(cJ)
            },
            children: XJ("tutorial:skip")
          })]
        })]
      })
    }
    const mJ = 6;

    function QJ(JJ) {
      let {
        rect: cJ,
        margin: ZJ
      } = JJ;
      const FJ = Math.max(0, cJ.top - ZJ),
        UJ = cJ.bottom + ZJ,
        eJ = Math.max(0, cJ.left - ZJ),
        XJ = cJ.right + ZJ;
      return (0, sJ.jsxs)(sJ.Fragment, {
        children: [(0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: FJ
          }
        }), (0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: UJ,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FJ,
            left: 0,
            width: eJ,
            height: UJ - FJ
          }
        }), (0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FJ,
            left: XJ,
            right: 0,
            height: UJ - FJ
          }
        })]
      })
    }

    function EJ(JJ) {
      let {
        target: cJ,
        placement: ZJ,
        boxRef: FJ,
        className: qJ,
        spotlightMargin: YJ = mJ,
        children: hJ
      } = JJ;
      const {
        getArrowProps: DJ,
        getTooltipProps: nJ,
        setTooltipRef: GJ,
        setTriggerRef: fJ
      } = (0, AJ.d)({
        placement: ZJ,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, YJ]
      });
      (0, eJ.useLayoutEffect)((() => {
        fJ(cJ)
      }), [cJ, fJ]);
      const xJ = function(JJ, cJ) {
        const [ZJ, FJ] = (0, eJ.useState)(null);
        return (0, eJ.useEffect)((() => {
          if (!cJ || !JJ) return void FJ(null);
          let ZJ = 0,
            UJ = null;
          const eJ = () => {
            const cJ = JJ.getBoundingClientRect();
            UJ && cJ.left === UJ.left && cJ.top === UJ.top && cJ.width === UJ.width && cJ.height === UJ.height || (UJ = cJ, FJ(cJ)), ZJ = requestAnimationFrame(eJ)
          };
          return eJ(), () => {
            cancelAnimationFrame(ZJ)
          }
        }), [JJ, cJ]), ZJ
      }(cJ, !0);
      (0, eJ.useEffect)((() => {
        null === cJ || void 0 === cJ || cJ.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [cJ]);
      const rJ = (0, eJ.useCallback)((JJ => {
        GJ(JJ), FJ && (FJ.current = JJ)
      }), [GJ, FJ]);
      return (0, XJ.createPortal)((0, sJ.jsxs)(sJ.Fragment, {
        children: [xJ && (0, sJ.jsx)(QJ, {
          rect: xJ,
          margin: YJ
        }), (0, sJ.jsxs)("div", {
          ref: rJ,
          ...nJ({
            className: UJ()("tooltip-container SmallTextLight TutorialStep", qJ)
          }),
          children: [hJ, (0, sJ.jsx)("div", {
            ...DJ({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, jJ.j)())
    }
    const VJ = (0, eJ.forwardRef)((function(JJ, cJ) {
      let {
        placement: ZJ = "right",
        children: FJ,
        ...UJ
      } = JJ;
      const XJ = fJ(UJ),
        AJ = (0, eJ.useRef)(null),
        qJ = (0, eJ.useRef)(null);
      rJ(UJ, XJ, AJ, qJ);
      const [jJ, YJ] = (0, eJ.useState)(null), hJ = FJ.ref, DJ = (0, eJ.useCallback)((JJ => {
        qJ.current = JJ, YJ(JJ), GJ(cJ, JJ), GJ(hJ, JJ)
      }), [cJ, hJ]);
      return (0, sJ.jsxs)(sJ.Fragment, {
        children: [(0, eJ.cloneElement)(FJ, {
          ref: DJ
        }), XJ && (0, sJ.jsx)(EJ, {
          target: jJ,
          placement: ZJ,
          boxRef: AJ,
          children: (0, sJ.jsx)(vJ, {
            ...UJ
          })
        })]
      })
    }));

    function KJ(JJ) {
      const cJ = fJ(JJ),
        ZJ = (0, eJ.useRef)(null);
      return rJ(JJ, cJ, ZJ, null), cJ ? (0, XJ.createPortal)((0, sJ.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, sJ.jsx)("div", {
          ref: ZJ,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, sJ.jsx)(vJ, {
            ...JJ
          })
        })
      }), (0, jJ.j)()) : null
    }
  },
  37529: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    const FJ = 4,
      UJ = 12e3,
      eJ = 1e3;
    class XJ {
      constructor() {
        let {
          limit: JJ = FJ,
          windowMs: cJ = UJ,
          spacingMs: ZJ = eJ,
          now: XJ = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = JJ, this.windowMs = cJ, this.spacingMs = ZJ, this.now = XJ
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const JJ of this.priority) JJ.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const JJ = this.now();
        this.sent.push(JJ), this.lastSentAt = JJ, this.schedule(), this.notify()
      }
      addPriority(JJ) {
        return this.priority.add(JJ), () => {
          this.priority.delete(JJ)
        }
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const JJ of this.priority)
          if (JJ.waiting()) return !0;
        return !1
      }
      prune() {
        const JJ = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= JJ;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const JJ = this.now(),
          cJ = this.lastSentAt + this.spacingMs,
          ZJ = Math.min(cJ > JJ ? cJ : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZJ !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZJ - JJ)))
      }
      notify() {
        for (const JJ of this.listeners) JJ()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  37515: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ) {
        this.Uf = JJ, this.beforeOpen = cJ, this.afterClose = ZJ, this.open = !1, this.xn = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.xn && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(JJ) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(JJ)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.xn = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.xn || (this.snapshot = this.buildSnapshot(), this.Uf(this.snapshot))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  38226: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => YZ
    });
    var FJ = ZJ(47);
    var UJ = ZJ(13),
      eJ = ZJ(1685),
      XJ = ZJ(17),
      AJ = ZJ(35661),
      qJ = ZJ(926),
      jJ = ZJ.n(qJ),
      YJ = ZJ(1326),
      hJ = ZJ(1086),
      DJ = ZJ(3950),
      sJ = ZJ(1239),
      nJ = ZJ(1329),
      GJ = ZJ(1688),
      fJ = ZJ(1259),
      xJ = ZJ(1675),
      rJ = ZJ(1743),
      vJ = ZJ(629);
    const mJ = ZJ(38235),
      QJ = Object.fromEntries(mJ.keys().map((JJ => [JJ.replace(/^\.\/(.*)\.webp$/, "$1"), mJ(JJ)]))),
      EJ = new Set;

    function VJ(JJ, cJ) {
      const ZJ = cJ ? JJ : `${JJ}-uncaught`,
        FJ = (0, vJ.b)(QJ, ZJ);
      return void 0 !== FJ || EJ.has(ZJ) || (EJ.add(ZJ), console.warn(`Containment Breach has no mugshot ${ZJ}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), FJ
    }
    var KJ = ZJ(990);
    const yJ = "containmentBreach",
      SJ = "Gold Coin";

    function IJ(JJ) {
      let {
        open: cJ,
        onDismiss: ZJ,
        title: FJ,
        className: UJ,
        decor: eJ,
        headerExtra: XJ,
        status: AJ,
        statusRefused: qJ = !1,
        children: YJ
      } = JJ;
      const hJ = `${UJ}Title`;
      return (0, KJ.jsx)(DJ.c, {
        show: cJ,
        close: ZJ,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, KJ.jsxs)("section", {
          className: jJ()("ContainmentBoardPanel", UJ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": hJ,
          children: [eJ && (0, KJ.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: eJ
          }), (0, KJ.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, KJ.jsx)("h2", {
              id: hJ,
              className: "VisuallyHidden",
              children: FJ
            }), XJ, (0, KJ.jsx)(nJ.j, {
              onClick: ZJ
            })]
          }), (0, KJ.jsx)("div", {
            className: "BoardBody",
            children: YJ
          }), void 0 !== AJ && (0, KJ.jsx)("footer", {
            className: jJ()("BoardStatus", {
              Refused: qJ
            }),
            children: AJ
          })]
        })
      })
    }

    function MJ(JJ) {
      let {
        itemName: cJ
      } = JJ;
      return (0, KJ.jsx)(GJ.d, {
        itemName: cJ,
        amount: 0
      })
    }

    function bJ(JJ) {
      let {
        anomalyId: cJ,
        caught: ZJ
      } = JJ;
      const UJ = (0, FJ.useRef)(null);
      return (0, sJ.e)(UJ, !ZJ), (0, KJ.jsx)("span", {
        ref: UJ,
        className: jJ()("BoardMugshot", {
          Uncaught: !ZJ
        }),
        children: (0, KJ.jsx)("img", {
          src: VJ(cJ, ZJ),
          alt: "",
          draggable: !1
        })
      })
    }

    function wJ(JJ) {
      let {
        itemName: cJ,
        amount: ZJ,
        hj: FJ,
        inTile: UJ = !1
      } = JJ;
      return (0, KJ.jsx)(fJ.g, {
        delayShow: 200,
        hoverOnly: UJ,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, KJ.jsx)(gJ, {
          itemName: cJ,
          amount: ZJ,
          hj: FJ
        }),
        children: (0, KJ.jsxs)("span", {
          className: jJ()("BoardChip", {
            Short: void 0 !== FJ && FJ < ZJ
          }),
          children: [(0, KJ.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, KJ.jsx)(MJ, {
              itemName: cJ
            })
          }), ZJ.toLocaleString()]
        })
      })
    }
    const WJ = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function gJ(JJ) {
      var cJ;
      let {
        itemName: ZJ,
        amount: FJ,
        hj: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, hJ.F)(), XJ = (0, rJ.d)("itemInfo", (JJ => JJ[ZJ])), {
        lore: AJ,
        droppedBy: qJ
      } = function(JJ) {
        if ("string" !== typeof JJ) return {
          lore: JJ,
          droppedBy: null
        };
        const cJ = WJ.exec(JJ);
        return null === cJ ? {
          lore: JJ,
          droppedBy: null
        } : {
          lore: "" === cJ[1] ? void 0 : cJ[1],
          droppedBy: cJ[2]
        }
      }(null === XJ || void 0 === XJ ? void 0 : XJ.description);
      return (0, KJ.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, KJ.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, KJ.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, KJ.jsx)(MJ, {
              itemName: ZJ
            })
          }), (0, KJ.jsx)(xJ.d, {
            text: null !== (cJ = null === XJ || void 0 === XJ ? void 0 : XJ.displayName) && void 0 !== cJ ? cJ : ZJ,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== AJ || null !== qJ) && (0, KJ.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== AJ && (0, KJ.jsx)(xJ.d, {
            text: AJ,
            className: "BoardChipTooltipDescription"
          }), null !== qJ && (0, KJ.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, KJ.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: eJ(`${yJ}:chipDroppedBy`)
            }), qJ]
          })]
        }), void 0 !== UJ && (0, KJ.jsxs)("div", {
          className: jJ()("BoardChipTooltipHeld", {
            Short: UJ < FJ
          }),
          children: [(0, KJ.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: eJ(`${yJ}:chipYouHave`)
          }), (0, KJ.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, KJ.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: UJ.toLocaleString()
            }), ` / ${FJ.toLocaleString()}`]
          }), (0, KJ.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, KJ.jsx)("span", {
              style: {
                width: (FJ > 0 ? 100 * Math.min(1, UJ / FJ) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function HJ(JJ) {
      let {
        icon: cJ,
        name: ZJ,
        selected: FJ,
        locked: UJ,
        className: eJ,
        buttonRef: XJ,
        onSelect: AJ,
        children: qJ
      } = JJ;
      return (0, KJ.jsxs)("button", {
        ref: XJ,
        type: "button",
        className: jJ()("BoardTile", eJ, {
          Selected: FJ,
          Locked: UJ
        }),
        onClick: AJ,
        children: [(0, KJ.jsx)("span", {
          className: "BoardTileIcon",
          children: cJ
        }), (0, KJ.jsx)("span", {
          className: "BoardTileName",
          children: ZJ
        }), qJ]
      })
    }

    function PJ(JJ) {
      let {
        icon: cJ,
        name: ZJ,
        children: FJ
      } = JJ;
      return (0, KJ.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, KJ.jsx)("span", {
          className: "BoardDetailIcon",
          children: cJ
        }), (0, KJ.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, KJ.jsx)("h3", {
            children: ZJ
          }), (0, KJ.jsx)("span", {
            className: "BoardDetailStatus",
            children: FJ
          })]
        })]
      })
    }

    function kJ(JJ) {
      let {
        coins: cJ,
        children: ZJ
      } = JJ;
      return (0, KJ.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, KJ.jsx)(wJ, {
          itemName: SJ,
          amount: cJ
        }), ZJ]
      })
    }
    var pJ = ZJ(37515);
    const dJ = "containmentCodexView";
    class zJ extends pJ.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = JJ => {
          this.selectedId = JJ, this.emit()
        }
      }
      Qn(JJ) {
        this.entries = JJ.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const NJ = {
        codexAnyDifficulty: `${yJ}:codexNeedsAny`,
        codexNormalOnly: `${yJ}:codexNeedsNormal`,
        codexHardOnly: `${yJ}:codexNeedsHard`
      },
      OJ = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      TJ = {
        codexContained: `${yJ}:codexContainedBadge`,
        codexEncountered: `${yJ}:codexEncounteredBadge`,
        codexUnidentified: `${yJ}:codexUnidentifiedBadge`
      },
      CJ = ["94%", "81%", "88%", "46%", "72%"];

    function uJ(JJ) {
      let {
        entry: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, hJ.F)();
      return (0, KJ.jsx)("span", {
        className: jJ()("BoardBadge", OJ[cJ.codexEntryState]),
        children: ZJ(TJ[cJ.codexEntryState])
      })
    }

    function iJ(JJ) {
      const {
        t: cJ
      } = (0, hJ.F)();
      return "codexUnidentified" === JJ.codexEntryState ? cJ(`${yJ}:codexUnidentifiedName`) : JJ.codexEntryName
    }

    function RJ(JJ) {
      let {
        entry: cJ
      } = JJ;
      return "codexUnidentified" === cJ.codexEntryState ? (0, KJ.jsx)(MJ, {
        itemName: "Book"
      }) : (0, KJ.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, KJ.jsx)(bJ, {
          anomalyId: cJ.codexEntryId,
          caught: "codexContained" === cJ.codexEntryState
        }), (0, KJ.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function LJ(JJ) {
      let {
        entry: cJ,
        selected: ZJ,
        onSelect: FJ
      } = JJ;
      const UJ = "codexUnidentified" === cJ.codexEntryState;
      return (0, KJ.jsxs)(HJ, {
        icon: (0, KJ.jsx)(RJ, {
          entry: cJ
        }),
        name: iJ(cJ),
        selected: ZJ,
        locked: UJ,
        className: jJ()("CodexFolder", OJ[cJ.codexEntryState]),
        onSelect: () => {
          FJ(cJ.codexEntryId)
        },
        children: [!UJ && (0, KJ.jsx)(uJ, {
          entry: cJ
        }), UJ && (0, KJ.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function aJ(JJ) {
      let {
        count: cJ
      } = JJ;
      const ZJ = [];
      for (let FJ = Math.min(cJ, 25); FJ > 0; FJ -= 5) ZJ.push(Math.min(FJ, 5));
      return (0, KJ.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: ZJ.map(((JJ, cJ) => (0, KJ.jsx)("span", {
          className: jJ()("CodexTallyGroup", {
            Gate: 5 === JJ
          }),
          children: Array.from({
            length: Math.min(JJ, 4)
          }, ((JJ, cJ) => (0, KJ.jsx)("span", {
            className: "CodexTallyMark"
          }, cJ)))
        }, cJ)))
      })
    }

    function BJ(JJ) {
      let {
        contained: cJ,
        total: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, hJ.F)();
      return (0, KJ.jsxs)("div", {
        className: "CodexProgress",
        children: [FJ(`${yJ}:codexProgress`, {
          contained: String(cJ),
          total: String(ZJ)
        }), (0, KJ.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, KJ.jsx)("span", {
            style: {
              width: cJ / ZJ * 100 + "%"
            }
          })
        })]
      })
    }

    function tJ(JJ) {
      let {
        entry: cJ,
        fileNumber: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, hJ.F)(), UJ = "codexContained" === cJ.codexEntryState;
      return (0, KJ.jsx)("section", {
        className: "BoardDetail",
        children: (0, KJ.jsxs)("article", {
          className: jJ()("CodexDossier", OJ[cJ.codexEntryState]),
          children: [(0, KJ.jsx)("span", {
            className: "CodexFileNumber",
            children: FJ(`${yJ}:codexFileNumber`, {
              number: String(ZJ).padStart(3, "0")
            })
          }), (0, KJ.jsx)(PJ, {
            icon: (0, KJ.jsx)(RJ, {
              entry: cJ
            }),
            name: iJ(cJ),
            children: (0, KJ.jsx)(uJ, {
              entry: cJ
            })
          }), UJ && (0, KJ.jsxs)(KJ.Fragment, {
            children: [(0, KJ.jsx)("p", {
              className: "BoardDescription",
              children: cJ.codexEntryLore
            }), (0, KJ.jsxs)("p", {
              className: "CodexTally",
              children: [FJ(`${yJ}:codexContainments`, {
                count: String(cJ.codexEntryContainedCount)
              }), (0, KJ.jsx)(aJ, {
                count: cJ.codexEntryContainedCount
              })]
            }), (0, KJ.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: FJ(`${yJ}:codexContainedBadge`)
            })]
          }), !UJ && (0, KJ.jsxs)(KJ.Fragment, {
            children: [(0, KJ.jsxs)("div", {
              className: "CodexRedaction",
              children: [CJ.map((JJ => (0, KJ.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: JJ
                }
              }, JJ))), (0, KJ.jsx)("p", {
                className: "CodexRedacted",
                children: FJ(`${yJ}:codexRedacted`)
              })]
            }), "" !== cJ.codexEntryHint && (0, KJ.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, KJ.jsx)("h4", {
                children: FJ(`${yJ}:codexHintLabel`)
              }), (0, KJ.jsx)("p", {
                children: cJ.codexEntryHint
              })]
            }), (0, KJ.jsx)("p", {
              className: "CodexClearance",
              children: FJ(NJ[cJ.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function oJ(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, YJ.m)(dJ, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, hJ.F)();
      if (0 === ZJ.entries.length) return null;
      const UJ = ZJ.entries.find((JJ => JJ.codexEntryId === ZJ.selectedId)),
        eJ = ZJ.entries.filter((JJ => "codexContained" === JJ.codexEntryState)).length,
        XJ = ZJ.entries.map((JJ => JJ.codexEntryId)).sort().indexOf(UJ.codexEntryId) + 1;
      return (0, KJ.jsxs)(IJ, {
        open: ZJ.open,
        onDismiss: cJ.dismiss,
        title: FJ(`${yJ}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, KJ.jsx)(BJ, {
          contained: eJ,
          total: ZJ.entries.length
        }),
        children: [(0, KJ.jsx)("div", {
          className: "BoardTiles",
          children: ZJ.entries.map((JJ => (0, KJ.jsx)(LJ, {
            entry: JJ,
            selected: JJ === UJ,
            onSelect: cJ.select
          }, JJ.codexEntryId)))
        }), (0, KJ.jsx)(tJ, {
          entry: UJ,
          fileNumber: XJ
        })]
      })
    }
    var lJ = ZJ(235);
    class Jc extends pJ.b {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        super(JJ, cJ, ZJ), this.pacer = FJ, this.command = UJ, this.predict = eJ, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = JJ => {
          this.selectedId = JJ, this.emit()
        }, this.act = (JJ, cJ) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${JJ} ${cJ}`, this.rollBack)) return;
          const ZJ = this.predict(this.board, JJ, cJ);
          null !== ZJ && (this.board = ZJ.board, this.notice = ZJ.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = FJ.subscribe((() => {
          this.emit()
        }))
      }
      Qn(JJ) {
        const cJ = this.messageOpens(JJ);
        if (cJ && this.open) return this.board === this.confirmed && (this.board = JJ), this.confirmed = JJ, void this.emit();
        if (this.board = JJ, this.confirmed = JJ, this.pacer.onReply(), cJ) return this.notice = null, this.selectedId = this.openingSelection(JJ), void this.show();
        const ZJ = this.messageNotice(JJ);
        null !== ZJ && (this.notice = ZJ), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function cc(JJ, cJ) {
      return JJ.loadoutCoins >= cJ.loadoutCostCoins && cJ.loadoutCostParts.every((cJ => function(JJ, cJ) {
        return Zc(JJ, cJ).loadoutHeldPartAmount
      }(JJ, cJ.loadoutPartCurrency) >= cJ.loadoutPartAmount))
    }

    function Zc(JJ, cJ) {
      return JJ.loadoutHeldParts.find((JJ => JJ.loadoutHeldPartCurrency === cJ))
    }

    function Fc(JJ, cJ) {
      return JJ.loadoutSlots.find((JJ => JJ.loadoutSlotKind === cJ))
    }

    function Uc(JJ) {
      return JJ.loadoutPerks.filter((JJ => JJ.loadoutPerkEquipped)).length >= JJ.loadoutMaxPerks
    }

    function ec(JJ, cJ, ZJ) {
      for (const UJ of JJ.loadoutSlots) {
        const FJ = UJ.loadoutSlotOptions.find((JJ => JJ.loadoutOptionId === ZJ));
        if (FJ) return "loadoutArmour" === UJ.loadoutSlotKind ? Ac(JJ, UJ, FJ, cJ) : Xc(JJ, UJ, FJ, cJ)
      }
      const FJ = JJ.loadoutPerks.find((JJ => JJ.loadoutPerkId === ZJ));
      return FJ ? function(JJ, cJ, ZJ) {
        const FJ = cJ.loadoutPerkOwned,
          UJ = cJ.loadoutPerkEquipped,
          eJ = cJ.loadoutPerkName,
          XJ = Uc(JJ);
        if ("loadoutUnlock" === ZJ) {
          if (FJ || !cc(JJ, cJ.loadoutPerkCost)) return null;
          const ZJ = {
            ...cJ,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !XJ
          };
          return {
            board: jc(Yc(JJ, cJ.loadoutPerkCost), ZJ),
            notice: hc(XJ ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", eJ)
          }
        }
        if ("loadoutUpgrade" === ZJ || !FJ || "loadoutEquip" === ZJ === UJ || !UJ && XJ) return null;
        return {
          board: jc(JJ, {
            ...cJ,
            loadoutPerkEquipped: !UJ
          }),
          notice: hc(UJ ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", eJ)
        }
      }(JJ, FJ, cJ) : null
    }

    function Xc(JJ, cJ, ZJ, FJ) {
      const UJ = ZJ.loadoutOptionOwnedTier,
        eJ = ZJ.loadoutOptionName;
      if ("loadoutEquip" === FJ) return 0 === UJ ? null : {
        board: qc(JJ, cJ, ZJ.loadoutOptionId, null),
        notice: hc("loadoutNoticeEquipped", eJ)
      };
      const XJ = "loadoutUnlock" === FJ;
      if (XJ && 0 !== UJ || "loadoutUpgrade" === FJ && (0 === UJ || UJ >= ZJ.loadoutOptionTiers.length) || "loadoutUnequip" === FJ) return null;
      const AJ = ZJ.loadoutOptionTiers[UJ].loadoutTierCost;
      if (!cc(JJ, AJ)) return null;
      const qJ = {
          ...ZJ,
          loadoutOptionOwnedTier: UJ + 1
        },
        jJ = XJ ? ZJ.loadoutOptionId : cJ.loadoutSlotEquippedId;
      return {
        board: qc(Yc(JJ, AJ), cJ, jJ, qJ),
        notice: XJ ? hc("loadoutNoticeUnlocked", eJ) : hc("loadoutNoticeUpgraded", eJ, UJ + 1)
      }
    }

    function Ac(JJ, cJ, ZJ, FJ) {
      const UJ = ZJ.loadoutOptionOwnedTier > 0,
        eJ = ZJ.loadoutOptionName;
      if ("loadoutEquip" === FJ && UJ) return {
        board: qc(JJ, cJ, ZJ.loadoutOptionId, null),
        notice: hc("loadoutNoticeEquipped", eJ)
      };
      const XJ = ZJ.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== FJ || UJ || !cc(JJ, XJ) ? null : {
        board: qc(Yc(JJ, XJ), cJ, ZJ.loadoutOptionId, {
          ...ZJ,
          loadoutOptionOwnedTier: 1
        }),
        notice: hc("loadoutNoticeUnlocked", eJ)
      }
    }

    function qc(JJ, cJ, ZJ, FJ) {
      const UJ = {
        ...cJ,
        loadoutSlotEquippedId: ZJ,
        loadoutSlotOptions: cJ.loadoutSlotOptions.map((JJ => null !== FJ && JJ.loadoutOptionId === FJ.loadoutOptionId ? FJ : JJ))
      };
      return {
        ...JJ,
        loadoutSlots: JJ.loadoutSlots.map((JJ => JJ === cJ ? UJ : JJ))
      }
    }

    function jc(JJ, cJ) {
      return {
        ...JJ,
        loadoutPerks: JJ.loadoutPerks.map((JJ => JJ.loadoutPerkId === cJ.loadoutPerkId ? cJ : JJ))
      }
    }

    function Yc(JJ, cJ) {
      return {
        ...JJ,
        loadoutCoins: JJ.loadoutCoins - cJ.loadoutCostCoins,
        loadoutHeldParts: JJ.loadoutHeldParts.map((JJ => {
          const ZJ = cJ.loadoutCostParts.find((cJ => cJ.loadoutPartCurrency === JJ.loadoutHeldPartCurrency));
          return ZJ ? {
            ...JJ,
            loadoutHeldPartAmount: JJ.loadoutHeldPartAmount - ZJ.loadoutPartAmount
          } : JJ
        }))
      }
    }

    function hc(JJ, cJ) {
      return {
        loadoutNoticeKey: JJ,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: cJ,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Dc = "containmentLoadoutView";
    class sc extends Jc {
      constructor(JJ, cJ, ZJ, FJ) {
        super(JJ, cJ, ZJ, FJ, "loadout", ec), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = JJ => {
          this.slot = JJ, this.selectedId = nc(this.board, JJ), this.emit()
        }
      }
      messageOpens(JJ) {
        return JJ.loadoutMessageOpens
      }
      messageNotice(JJ) {
        return JJ.loadoutNotice
      }
      openingSelection(JJ) {
        return nc(JJ, this.slot)
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

    function nc(JJ, cJ) {
      if ("loadoutPerks" === cJ) {
        var ZJ;
        const cJ = JJ.loadoutPerks;
        return (null !== (ZJ = cJ.find((JJ => JJ.loadoutPerkEquipped))) && void 0 !== ZJ ? ZJ : cJ[0]).loadoutPerkId
      }
      return Fc(JJ, cJ).loadoutSlotEquippedId
    }
    const Gc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var fc = ZJ(35897),
      xc = ZJ(1181);
    const rc = {
        loadoutPrimary: `${yJ}:loadoutSlotPrimary`,
        loadoutSecondary: `${yJ}:loadoutSlotSecondary`,
        loadoutOffensive: `${yJ}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${yJ}:loadoutSlotSelfHelp`,
        loadoutArmour: `${yJ}:loadoutSlotArmour`,
        loadoutPerks: `${yJ}:loadoutSlotPerks`
      },
      vc = {
        section: "right",
        PD: "bottom",
        act: "top"
      },
      mc = (0, FJ.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Qc() {
      const {
        step: JJ,
        targetRef: cJ
      } = (0, FJ.useContext)(mc);
      return (ZJ, FJ) => (null === JJ || void 0 === JJ ? void 0 : JJ.kind) === ZJ && JJ.id === FJ ? cJ : void 0
    }

    function Ec(JJ, cJ) {
      const ZJ = cJ.loadoutTargetId;
      if ("loadoutPerks" === cJ.loadoutTargetSection) {
        const cJ = JJ.loadoutPerks.find((JJ => JJ.loadoutPerkId === ZJ));
        return {
          name: cJ.loadoutPerkName,
          owned: cJ.loadoutPerkOwned,
          equipped: cJ.loadoutPerkEquipped
        }
      }
      const FJ = Fc(JJ, cJ.loadoutTargetSection),
        UJ = FJ.loadoutSlotOptions.find((JJ => JJ.loadoutOptionId === ZJ));
      return {
        name: UJ.loadoutOptionName,
        owned: UJ.loadoutOptionOwnedTier > 0,
        equipped: FJ.loadoutSlotEquippedId === ZJ
      }
    }

    function Vc(JJ, cJ, ZJ, FJ) {
      const [UJ, eJ] = JJ(`${yJ}:${cJ}`, {
        [ZJ]: "\x01"
      }).split("\x01");
      return (0, KJ.jsxs)(KJ.Fragment, {
        children: [UJ, (0, KJ.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: FJ
        }), eJ]
      })
    }

    function Kc(JJ) {
      let {
        view: cJ,
        onDismiss: ZJ,
        children: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, hJ.F)(), XJ = cJ.loadout, AJ = cJ.open ? XJ.loadoutWalkthrough.map((JJ => ({
        target: JJ,
        info: Ec(XJ, JJ)
      }))).find((JJ => {
        let {
          info: cJ
        } = JJ;
        return !cJ.equipped
      })) : void 0;
      let qJ = null,
        jJ = null;
      if (void 0 !== AJ) {
        const {
          target: JJ,
          info: ZJ
        } = AJ;
        cJ.slot !== JJ.loadoutTargetSection ? (qJ = {
          kind: "section",
          id: JJ.loadoutTargetSection
        }, jJ = Vc(eJ, "loadoutWalkthroughSection", "section", eJ(rc[JJ.loadoutTargetSection]))) : cJ.selectedId !== JJ.loadoutTargetId ? (qJ = {
          kind: "PD",
          id: JJ.loadoutTargetId
        }, jJ = Vc(eJ, "loadoutWalkthroughPick", "name", ZJ.name)) : (qJ = {
          kind: "act",
          id: JJ.loadoutTargetId
        }, jJ = Vc(eJ, ZJ.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", ZJ.name))
      }
      const YJ = null === qJ ? null : function(JJ) {
          return `${JJ.kind}:${JJ.id}`
        }(qJ),
        [DJ, sJ] = (0, FJ.useState)(null),
        nJ = (0, FJ.useCallback)((JJ => {
          sJ((cJ => null !== JJ ? {
            key: YJ,
            node: JJ
          } : (null === cJ || void 0 === cJ ? void 0 : cJ.key) === YJ ? null : cJ))
        }), [YJ]),
        GJ = null !== YJ && (null === DJ || void 0 === DJ ? void 0 : DJ.key) === YJ ? DJ.node : null;
      return (0, KJ.jsxs)(mc.Provider, {
        value: {
          step: qJ,
          targetRef: nJ
        },
        children: [UJ, null !== qJ && null !== GJ && (0, KJ.jsx)(yc, {
          target: GJ,
          placement: vc[qJ.kind],
          onDismiss: ZJ,
          children: jJ
        }, YJ)]
      })
    }

    function yc(JJ) {
      let {
        target: cJ,
        placement: ZJ,
        onDismiss: UJ,
        children: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, hJ.F)(), AJ = (0, FJ.useRef)(cJ);
      return AJ.current = cJ, (0, xc.p)("popup", AJ, UJ), (0, KJ.jsxs)(fc.c, {
        target: cJ,
        placement: ZJ,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, KJ.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, KJ.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Gc,
            alt: "",
            draggable: !1
          }), (0, KJ.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: XJ(`${yJ}:operatorName`)
          }), (0, KJ.jsx)(nJ.j, {
            onClick: UJ,
            ariaLabel: XJ(`${yJ}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, KJ.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: eJ
        })]
      })
    }
    const Sc = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Ic(JJ) {
      let {
        cost: cJ,
        loadout: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, hJ.F)();
      return cJ.loadoutCostCoins <= 0 && 0 === cJ.loadoutCostParts.length ? (0, KJ.jsx)("span", {
        className: "LoadoutCost",
        children: FJ(`${yJ}:loadoutFree`)
      }) : (0, KJ.jsxs)("span", {
        className: "LoadoutCost",
        children: [cJ.loadoutCostCoins > 0 && (0, KJ.jsx)(wJ, {
          itemName: SJ,
          amount: cJ.loadoutCostCoins,
          hj: ZJ.loadoutCoins
        }), cJ.loadoutCostParts.map((JJ => {
          const cJ = Zc(ZJ, JJ.loadoutPartCurrency);
          return (0, KJ.jsx)(wJ, {
            itemName: cJ.loadoutHeldPartItem,
            amount: JJ.loadoutPartAmount,
            hj: cJ.loadoutHeldPartAmount
          }, JJ.loadoutPartCurrency)
        }))]
      })
    }
    const Mc = {
      loadoutStatFireRate: `${yJ}:loadoutUnitPerMinute`,
      loadoutStatReload: `${yJ}:loadoutUnitSeconds`,
      loadoutStatResupply: `${yJ}:loadoutUnitSeconds`
    };

    function bc(JJ) {
      return "loadoutStatPotency" === JJ.loadoutStatKind ? (0, lJ.O)(JJ.loadoutStatValue) : String(JJ.loadoutStatValue)
    }

    function wc(JJ) {
      var cJ;
      let {
        option: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, hJ.F)(), UJ = ZJ.loadoutOptionTiers, eJ = null === (cJ = UJ[0]) || void 0 === cJ ? void 0 : cJ.loadoutTierStats.map((JJ => JJ.loadoutStatKind));
      if (!eJ || 0 === eJ.length) return null;
      const XJ = ZJ.loadoutOptionOwnedTier,
        AJ = (JJ, cJ) => {
          var ZJ;
          return null === (ZJ = UJ[JJ]) || void 0 === ZJ ? void 0 : ZJ.loadoutTierStats.find((JJ => JJ.loadoutStatKind === cJ))
        };
      return (0, KJ.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, KJ.jsx)("thead", {
          children: (0, KJ.jsxs)("tr", {
            children: [(0, KJ.jsx)("th", {}), UJ.map(((JJ, cJ) => (0, KJ.jsx)("th", {
              className: jJ()({
                Current: cJ + 1 === XJ,
                Next: cJ === XJ
              }),
              children: FJ(`${yJ}:loadoutTier`, {
                tier: (0, lJ.O)(cJ + 1)
              })
            }, cJ)))]
          })
        }), (0, KJ.jsx)("tbody", {
          children: eJ.map((JJ => {
            const cJ = Mc[JJ];
            return (0, KJ.jsxs)("tr", {
              children: [(0, KJ.jsxs)("th", {
                scope: "row",
                children: [FJ(`${yJ}:${JJ}`), cJ && (0, KJ.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: FJ(cJ)
                })]
              }), UJ.map(((cJ, ZJ) => {
                const FJ = AJ(ZJ, JJ),
                  UJ = ZJ > 0 ? AJ(ZJ - 1, JJ) : void 0,
                  eJ = FJ && UJ ? FJ.loadoutStatValue - UJ.loadoutStatValue : 0,
                  qJ = Sc.has(JJ) ? eJ < 0 : eJ > 0,
                  YJ = ZJ === XJ;
                return (0, KJ.jsxs)("td", {
                  className: jJ()({
                    Current: ZJ + 1 === XJ,
                    Next: YJ,
                    Gain: qJ,
                    Owned: ZJ < XJ
                  }),
                  children: [YJ && qJ && (0, KJ.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: eJ < 0 ? "\u25bc" : "\u25b2"
                  }), FJ ? bc(FJ) : "-"]
                }, ZJ)
              }))]
            }, JJ)
          }))
        })]
      })
    }

    function Wc(JJ) {
      let {
        view: cJ,
        controller: ZJ,
        slot: FJ,
        option: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, hJ.F)(), XJ = cJ.loadout, AJ = UJ.loadoutOptionOwnedTier, qJ = UJ.loadoutOptionTiers.length, jJ = FJ.loadoutSlotEquippedId === UJ.loadoutOptionId, YJ = AJ < qJ ? UJ.loadoutOptionTiers[AJ].loadoutTierCost : null, DJ = null !== YJ && cc(XJ, YJ), sJ = UJ.loadoutOptionId, GJ = Qc();
      return (0, KJ.jsxs)(KJ.Fragment, {
        children: [(0, KJ.jsx)(Hc, {
          icon: UJ.loadoutOptionIcon,
          name: UJ.loadoutOptionName,
          status: 0 === AJ ? eJ(`${yJ}:loadoutLocked`) : qJ > 1 ? eJ(`${yJ}:loadoutTier`, {
            tier: (0, lJ.O)(AJ)
          }) : null,
          locked: 0 === AJ,
          equipped: jJ
        }), (0, KJ.jsx)("p", {
          className: "BoardDescription",
          children: UJ.loadoutOptionDescription
        }), (0, KJ.jsx)(wc, {
          option: UJ
        }), (0, KJ.jsxs)("div", {
          ref: GJ("act", sJ),
          className: "BoardActions",
          children: [null !== YJ && (0, KJ.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, KJ.jsx)(Ic, {
              cost: YJ,
              loadout: XJ
            }), (0, KJ.jsx)(nJ.m, {
              disabled: !DJ || cJ.pending,
              onClick: () => {
                ZJ.act(0 === AJ ? "loadoutUnlock" : "loadoutUpgrade", sJ)
              },
              children: 0 === AJ ? eJ(`${yJ}:loadoutUnlock`) : eJ(`${yJ}:loadoutUpgrade`, {
                tier: (0, lJ.O)(AJ + 1)
              })
            })]
          }), null === YJ && qJ > 1 && (0, KJ.jsx)("span", {
            className: "BoardHint",
            children: eJ(`${yJ}:loadoutMaxed`)
          }), AJ > 0 && !jJ && (0, KJ.jsx)(nJ.d, {
            disabled: cJ.pending,
            onClick: () => {
              ZJ.act("loadoutEquip", sJ)
            },
            children: eJ(`${yJ}:loadoutEquip`)
          })]
        })]
      })
    }

    function gc(JJ) {
      let {
        view: cJ,
        controller: ZJ,
        perk: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, hJ.F)(), eJ = cJ.loadout, XJ = Uc(eJ), AJ = FJ.loadoutPerkId, qJ = Qc();
      return (0, KJ.jsxs)(KJ.Fragment, {
        children: [(0, KJ.jsx)(Hc, {
          icon: FJ.loadoutPerkIcon,
          name: FJ.loadoutPerkName,
          status: FJ.loadoutPerkOwned ? null : UJ(`${yJ}:loadoutLocked`),
          locked: !FJ.loadoutPerkOwned,
          equipped: FJ.loadoutPerkEquipped
        }), (0, KJ.jsx)("p", {
          className: "BoardDescription",
          children: FJ.loadoutPerkDescription
        }), (0, KJ.jsxs)("div", {
          ref: qJ("act", AJ),
          className: "BoardActions",
          children: [!FJ.loadoutPerkOwned && (0, KJ.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, KJ.jsx)(Ic, {
              cost: FJ.loadoutPerkCost,
              loadout: eJ
            }), (0, KJ.jsx)(nJ.m, {
              disabled: !cc(eJ, FJ.loadoutPerkCost) || cJ.pending,
              onClick: () => {
                ZJ.act("loadoutUnlock", AJ)
              },
              children: UJ(`${yJ}:loadoutUnlock`)
            })]
          }), FJ.loadoutPerkOwned && !FJ.loadoutPerkEquipped && (0, KJ.jsx)(nJ.d, {
            disabled: XJ || cJ.pending,
            onClick: () => {
              ZJ.act("loadoutEquip", AJ)
            },
            children: UJ(`${yJ}:loadoutEquip`)
          }), FJ.loadoutPerkOwned && !FJ.loadoutPerkEquipped && XJ && (0, KJ.jsx)("span", {
            className: "BoardHint",
            children: UJ(`${yJ}:loadoutSocketsFullHint`)
          }), FJ.loadoutPerkEquipped && (0, KJ.jsx)(nJ.O, {
            disabled: cJ.pending,
            onClick: () => {
              ZJ.act("loadoutUnequip", AJ)
            },
            children: UJ(`${yJ}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Hc(JJ) {
      let {
        icon: cJ,
        name: ZJ,
        status: FJ,
        locked: UJ,
        equipped: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, hJ.F)();
      return (0, KJ.jsxs)(PJ, {
        icon: (0, KJ.jsx)(MJ, {
          itemName: cJ
        }),
        name: ZJ,
        children: [null !== FJ && (0, KJ.jsx)("span", {
          className: jJ()("LoadoutStatusText", {
            Locked: UJ
          }),
          children: FJ
        }), eJ && (0, KJ.jsx)("span", {
          className: "BoardBadge",
          children: XJ(`${yJ}:loadoutEquippedBadge`)
        })]
      })
    }

    function Pc(JJ) {
      let {
        view: cJ,
        controller: ZJ
      } = JJ;
      const FJ = cJ.loadout;
      if ("loadoutPerks" === cJ.slot) {
        const JJ = FJ.loadoutPerks.find((JJ => JJ.loadoutPerkId === cJ.selectedId));
        return (0, KJ.jsx)("section", {
          className: "BoardDetail",
          children: JJ && (0, KJ.jsx)(gc, {
            view: cJ,
            controller: ZJ,
            perk: JJ
          })
        })
      }
      const UJ = Fc(FJ, cJ.slot),
        eJ = UJ.loadoutSlotOptions.find((JJ => JJ.loadoutOptionId === cJ.selectedId));
      return (0, KJ.jsx)("section", {
        className: "BoardDetail",
        children: eJ && (0, KJ.jsx)(Wc, {
          view: cJ,
          controller: ZJ,
          slot: UJ,
          option: eJ
        })
      })
    }

    function kc(JJ) {
      let {
        owned: cJ,
        total: ZJ
      } = JJ;
      return ZJ <= 1 ? null : (0, KJ.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: ZJ
        }, ((JJ, ZJ) => (0, KJ.jsx)("span", {
          className: jJ()("LoadoutPip", {
            Filled: ZJ < cJ
          })
        }, ZJ)))
      })
    }

    function pc(JJ) {
      let {
        view: cJ,
        controller: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, hJ.F)(), UJ = cJ.loadout, eJ = Qc();
      return (0, KJ.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": FJ(`${yJ}:loadoutKit`),
        children: [UJ.loadoutSlots.map((JJ => {
          const UJ = JJ.loadoutSlotOptions.find((cJ => cJ.loadoutOptionId === JJ.loadoutSlotEquippedId));
          return (0, KJ.jsxs)("button", {
            ref: eJ("section", JJ.loadoutSlotKind),
            type: "button",
            className: jJ()("LoadoutKitSlot", {
              Selected: cJ.slot === JJ.loadoutSlotKind
            }),
            onClick: () => {
              ZJ.selectSlot(JJ.loadoutSlotKind)
            },
            children: [(0, KJ.jsx)("span", {
              className: "LoadoutKitIcon",
              children: UJ && (0, KJ.jsx)(MJ, {
                itemName: UJ.loadoutOptionIcon
              })
            }), (0, KJ.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, KJ.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, KJ.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: FJ(rc[JJ.loadoutSlotKind])
                }), UJ && (0, KJ.jsx)(kc, {
                  owned: UJ.loadoutOptionOwnedTier,
                  total: UJ.loadoutOptionTiers.length
                })]
              }), (0, KJ.jsx)("span", {
                className: "LoadoutKitName",
                children: null === UJ || void 0 === UJ ? void 0 : UJ.loadoutOptionName
              })]
            })]
          }, JJ.loadoutSlotKind)
        })), (0, KJ.jsx)(dc, {
          view: cJ,
          controller: ZJ
        })]
      })
    }

    function dc(JJ) {
      let {
        view: cJ,
        controller: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, hJ.F)(), UJ = cJ.loadout, eJ = UJ.loadoutPerks.filter((JJ => JJ.loadoutPerkEquipped)), XJ = Qc();
      return (0, KJ.jsxs)("button", {
        ref: XJ("section", "loadoutPerks"),
        type: "button",
        className: jJ()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === cJ.slot
        }),
        onClick: () => {
          ZJ.selectSlot("loadoutPerks")
        },
        children: [(0, KJ.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, KJ.jsx)("span", {
            className: "LoadoutKitLabel",
            children: FJ(rc.loadoutPerks)
          }), (0, KJ.jsx)("span", {
            className: "LoadoutPerkCount",
            children: FJ(`${yJ}:loadoutPerkCount`, {
              equipped: String(eJ.length),
              max: String(UJ.loadoutMaxPerks)
            })
          })]
        }), (0, KJ.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: UJ.loadoutMaxPerks
          }, ((JJ, cJ) => {
            const ZJ = eJ[cJ];
            return (0, KJ.jsxs)("span", {
              className: jJ()("LoadoutSocket", {
                Filled: ZJ,
                Empty: !ZJ
              }),
              children: [(0, KJ.jsx)("span", {
                className: "LoadoutSocketWell",
                children: ZJ && (0, KJ.jsx)(MJ, {
                  itemName: ZJ.loadoutPerkIcon
                })
              }), (0, KJ.jsx)("span", {
                className: "LoadoutSocketName",
                children: ZJ ? ZJ.loadoutPerkName : FJ(`${yJ}:loadoutPerkSocketEmpty`)
              })]
            }, cJ)
          }))
        })]
      })
    }

    function zc(JJ) {
      let {
        icon: cJ,
        name: ZJ,
        selected: FJ,
        equipped: UJ,
        locked: eJ,
        ownedTier: XJ,
        tiers: AJ,
        buttonRef: qJ,
        onSelect: jJ
      } = JJ;
      const {
        t: YJ
      } = (0, hJ.F)();
      return (0, KJ.jsxs)(HJ, {
        icon: (0, KJ.jsx)(MJ, {
          itemName: cJ
        }),
        name: ZJ,
        selected: FJ,
        locked: eJ,
        buttonRef: qJ,
        onSelect: jJ,
        children: [UJ && (0, KJ.jsx)("span", {
          className: "BoardBadge",
          children: YJ(`${yJ}:loadoutEquippedBadge`)
        }), eJ && (0, KJ.jsx)("span", {
          className: "BoardBadge Muted",
          children: YJ(`${yJ}:loadoutLocked`)
        }), !eJ && (0, KJ.jsx)(kc, {
          owned: XJ,
          total: AJ
        })]
      })
    }

    function Nc(JJ) {
      let {
        view: cJ,
        controller: ZJ
      } = JJ;
      const FJ = cJ.loadout,
        UJ = Qc();
      if ("loadoutPerks" === cJ.slot) return (0, KJ.jsx)("div", {
        className: "BoardTiles",
        children: FJ.loadoutPerks.map((JJ => (0, KJ.jsx)(zc, {
          icon: JJ.loadoutPerkIcon,
          name: JJ.loadoutPerkName,
          selected: cJ.selectedId === JJ.loadoutPerkId,
          equipped: JJ.loadoutPerkEquipped,
          locked: !JJ.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: UJ("PD", JJ.loadoutPerkId),
          onSelect: () => {
            ZJ.select(JJ.loadoutPerkId)
          }
        }, JJ.loadoutPerkId)))
      });
      const eJ = Fc(FJ, cJ.slot);
      return (0, KJ.jsx)("div", {
        className: "BoardTiles",
        children: eJ.loadoutSlotOptions.map((JJ => (0, KJ.jsx)(zc, {
          icon: JJ.loadoutOptionIcon,
          name: JJ.loadoutOptionName,
          selected: cJ.selectedId === JJ.loadoutOptionId,
          equipped: eJ.loadoutSlotEquippedId === JJ.loadoutOptionId,
          locked: 0 === JJ.loadoutOptionOwnedTier,
          ownedTier: JJ.loadoutOptionOwnedTier,
          tiers: JJ.loadoutOptionTiers.length,
          buttonRef: UJ("PD", JJ.loadoutOptionId),
          onSelect: () => {
            ZJ.select(JJ.loadoutOptionId)
          }
        }, JJ.loadoutOptionId)))
      })
    }

    function Oc(JJ) {
      let {
        loadout: cJ
      } = JJ;
      return (0, KJ.jsx)(kJ, {
        coins: cJ.loadoutCoins,
        children: cJ.loadoutHeldParts.filter((JJ => JJ.loadoutHeldPartAmount > 0)).map((JJ => (0, KJ.jsx)(wJ, {
          itemName: JJ.loadoutHeldPartItem,
          amount: JJ.loadoutHeldPartAmount
        }, JJ.loadoutHeldPartCurrency)))
      })
    }

    function Tc(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, YJ.m)(Dc, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, hJ.F)();
      if (null === ZJ.loadout) return null;
      const UJ = ZJ.notice;
      return (0, KJ.jsx)(Kc, {
        view: ZJ,
        onDismiss: cJ.dismiss,
        children: (0, KJ.jsxs)(IJ, {
          open: ZJ.open,
          onDismiss: cJ.dismiss,
          title: FJ(`${yJ}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, KJ.jsx)(Oc, {
            loadout: ZJ.loadout
          }),
          statusRefused: null === UJ || void 0 === UJ ? void 0 : UJ.loadoutNoticeRefused,
          status: (0, KJ.jsxs)(KJ.Fragment, {
            children: [(0, KJ.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: FJ(`${yJ}:loadoutRadioBadge`)
            }), null !== UJ && FJ(`${yJ}:${UJ.loadoutNoticeKey}`, {
              name: UJ.loadoutNoticeName,
              tier: (0, lJ.O)(UJ.loadoutNoticeTier),
              max: String(ZJ.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, KJ.jsx)(pc, {
            view: ZJ,
            controller: cJ
          }), (0, KJ.jsx)(Nc, {
            view: ZJ,
            controller: cJ
          }), (0, KJ.jsx)(Pc, {
            view: ZJ,
            controller: cJ
          })]
        })
      })
    }

    function Cc(JJ, cJ, ZJ) {
      const FJ = JJ.locatorEntries.find((JJ => JJ.locatorEntryId === ZJ));
      if (!FJ) return null;
      const UJ = FJ.locatorEntryName;
      if ("locatorDisarm" === cJ) return FJ.locatorEntryArmed ? {
        board: uc(JJ, null),
        notice: ic("locatorNoticeDisarmed", UJ)
      } : null;
      if ("locatorArm" === cJ) return FJ.locatorEntryOwned && !FJ.locatorEntryArmed ? {
        board: uc(JJ, ZJ),
        notice: ic("locatorNoticeArmed", UJ)
      } : null;
      if (FJ.locatorEntryOwned || JJ.locatorCoins < FJ.locatorEntryPrice) return null;
      const eJ = uc({
        ...JJ,
        locatorCoins: JJ.locatorCoins - FJ.locatorEntryPrice
      }, ZJ);
      return {
        board: {
          ...eJ,
          locatorEntries: eJ.locatorEntries.map((JJ => JJ.locatorEntryId === ZJ ? {
            ...JJ,
            locatorEntryOwned: !0
          } : JJ))
        },
        notice: ic("locatorNoticeBought", UJ)
      }
    }

    function uc(JJ, cJ) {
      return {
        ...JJ,
        locatorEntries: JJ.locatorEntries.map((JJ => {
          const ZJ = JJ.locatorEntryId === cJ;
          return JJ.locatorEntryArmed === ZJ ? JJ : {
            ...JJ,
            locatorEntryArmed: ZJ
          }
        }))
      }
    }

    function ic(JJ, cJ) {
      return {
        locatorNoticeKey: JJ,
        locatorNoticeRefused: !1,
        locatorNoticeName: cJ
      }
    }
    const Rc = "containmentLocatorView";
    class Lc extends Jc {
      constructor(JJ, cJ, ZJ, FJ) {
        super(JJ, cJ, ZJ, FJ, "locator", Cc), this.snapshot = this.buildSnapshot()
      }
      messageOpens(JJ) {
        return JJ.locatorMessageOpens
      }
      messageNotice(JJ) {
        return JJ.locatorNotice
      }
      openingSelection(JJ) {
        var cJ;
        const ZJ = JJ.locatorEntries;
        return (null !== (cJ = ZJ.find((JJ => JJ.locatorEntryArmed))) && void 0 !== cJ ? cJ : ZJ[0]).locatorEntryId
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
    const ac = {
        locatorContained: `${yJ}:locatorFlavourContained`,
        locatorEncountered: `${yJ}:locatorFlavourEncountered`,
        locatorUnseen: `${yJ}:locatorFlavourUnseen`
      },
      Bc = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${yJ}:locatorAttunedNormal`,
        codexHardOnly: `${yJ}:locatorAttunedHard`
      };

    function tc() {
      return (0, KJ.jsx)(KJ.Fragment, {
        children: Array.from({
          length: 5
        }, ((JJ, cJ) => (0, KJ.jsx)("span", {
          className: "LocatorFly",
          children: (0, KJ.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, cJ)))
      })
    }

    function oc(JJ) {
      let {
        entry: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, hJ.F)();
      return cJ.locatorEntryArmed ? (0, KJ.jsx)("span", {
        className: "BoardBadge Armed",
        children: ZJ(`${yJ}:locatorArmedBadge`)
      }) : cJ.locatorEntryOwned ? (0, KJ.jsx)("span", {
        className: "BoardBadge",
        children: ZJ(`${yJ}:locatorOwnedBadge`)
      }) : null
    }

    function lc(JJ) {
      let {
        entry: cJ,
        coins: ZJ,
        inTile: FJ = !1
      } = JJ;
      return (0, KJ.jsx)(wJ, {
        itemName: SJ,
        amount: cJ.locatorEntryPrice,
        hj: ZJ,
        inTile: FJ
      })
    }

    function JZ(JJ) {
      let {
        view: cJ,
        controller: ZJ,
        entry: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, hJ.F)(), eJ = FJ.locatorEntryId, XJ = cJ.locators.locatorEntries.find((JJ => JJ.locatorEntryArmed && JJ !== FJ));
      return (0, KJ.jsxs)("div", {
        className: "BoardActions",
        children: [FJ.locatorEntryArmed && (0, KJ.jsx)(nJ.O, {
          disabled: cJ.pending,
          onClick: () => {
            ZJ.act("locatorDisarm", eJ)
          },
          children: UJ(`${yJ}:locatorDisarm`)
        }), FJ.locatorEntryOwned && !FJ.locatorEntryArmed && (0, KJ.jsx)(nJ.d, {
          disabled: cJ.pending,
          onClick: () => {
            ZJ.act("locatorArm", eJ)
          },
          children: UJ(`${yJ}:locatorArm`)
        }), !FJ.locatorEntryOwned && (0, KJ.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, KJ.jsx)(lc, {
            entry: FJ,
            coins: cJ.locators.locatorCoins
          }), (0, KJ.jsx)(nJ.m, {
            disabled: cJ.locators.locatorCoins < FJ.locatorEntryPrice || cJ.pending,
            onClick: () => {
              ZJ.act("locatorBuy", eJ)
            },
            children: UJ(`${yJ}:locatorBuy`)
          })]
        }), XJ && !FJ.locatorEntryArmed && (0, KJ.jsx)("span", {
          className: "BoardHint",
          children: UJ(`${yJ}:locatorReplacesHint`, {
            name: XJ.locatorEntryName
          })
        })]
      })
    }

    function cZ(JJ) {
      let {
        entry: cJ
      } = JJ;
      return "locatorUnseen" === cJ.locatorEntryStanding ? (0, KJ.jsx)(MJ, {
        itemName: "Compass"
      }) : (0, KJ.jsx)(bJ, {
        anomalyId: cJ.locatorEntryId,
        caught: "locatorContained" === cJ.locatorEntryStanding
      })
    }

    function ZZ(JJ) {
      let {
        view: cJ,
        controller: ZJ,
        entry: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, hJ.F)(), eJ = Bc[FJ.locatorEntryDifficulty];
      return (0, KJ.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, KJ.jsxs)("div", {
          className: jJ()("LocatorLabel", {
            Armed: FJ.locatorEntryArmed
          }),
          children: [(0, KJ.jsx)(PJ, {
            icon: (0, KJ.jsx)(cZ, {
              entry: FJ
            }),
            name: UJ(`${yJ}:locatorName`, {
              name: FJ.locatorEntryName
            }),
            children: (0, KJ.jsx)(oc, {
              entry: FJ
            })
          }), (0, KJ.jsx)("p", {
            className: "BoardDescription",
            children: UJ(FJ.locatorEntryArmed ? `${yJ}:locatorFlavourArmed` : ac[FJ.locatorEntryStanding])
          }), null !== eJ && (0, KJ.jsx)("p", {
            className: "LocatorAttuned",
            children: UJ(eJ)
          }), (0, KJ.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: UJ(`${yJ}:locatorUsage`)
          })]
        }), (0, KJ.jsx)(JZ, {
          view: cJ,
          controller: ZJ,
          entry: FJ
        })]
      })
    }

    function FZ(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, YJ.m)(Rc, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, hJ.F)(),
        UJ = ZJ.locators;
      if (null === UJ) return null;
      const eJ = UJ.locatorEntries.find((JJ => JJ.locatorEntryId === ZJ.selectedId)),
        XJ = ZJ.notice;
      return (0, KJ.jsxs)(IJ, {
        open: ZJ.open,
        onDismiss: cJ.dismiss,
        title: FJ(`${yJ}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, KJ.jsx)(tc, {}),
        headerExtra: (0, KJ.jsx)(kJ, {
          coins: UJ.locatorCoins
        }),
        statusRefused: null === XJ || void 0 === XJ ? void 0 : XJ.locatorNoticeRefused,
        status: (0, KJ.jsxs)(KJ.Fragment, {
          children: [(0, KJ.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: FJ(`${yJ}:locatorKeeperName`)
          }), null !== XJ && FJ(`${yJ}:${XJ.locatorNoticeKey}`, {
            name: XJ.locatorNoticeName
          })]
        }),
        children: [(0, KJ.jsx)("div", {
          className: "BoardTiles",
          children: UJ.locatorEntries.map((JJ => (0, KJ.jsxs)(HJ, {
            icon: (0, KJ.jsx)(cZ, {
              entry: JJ
            }),
            name: JJ.locatorEntryName,
            selected: JJ === eJ,
            locked: !1,
            className: jJ()("LocatorTag", {
              Armed: JJ.locatorEntryArmed
            }),
            onSelect: () => {
              cJ.select(JJ.locatorEntryId)
            },
            children: [(0, KJ.jsx)(oc, {
              entry: JJ
            }), !JJ.locatorEntryOwned && (0, KJ.jsx)(lc, {
              entry: JJ,
              coins: UJ.locatorCoins,
              inTile: !0
            })]
          }, JJ.locatorEntryId)))
        }), (0, KJ.jsx)(ZZ, {
          view: ZJ,
          controller: cJ,
          entry: eJ
        })]
      })
    }

    function UZ(JJ) {
      let {
        loadout: cJ,
        codex: ZJ,
        locator: FJ
      } = JJ;
      return (0, KJ.jsxs)(KJ.Fragment, {
        children: [(0, KJ.jsx)(Tc, {
          controller: cJ
        }), (0, KJ.jsx)(oJ, {
          controller: ZJ
        }), (0, KJ.jsx)(FZ, {
          controller: FJ
        })]
      })
    }
    var eZ = ZJ(37529);
    class XZ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = JJ, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new eZ.e({
          spacingMs: 0,
          now: cJ
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(JJ, cJ) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, cJ(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(JJ), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const JJ of this.listeners) JJ()
      }
    }
    var AZ = ZJ(37519);
    const qZ = new Map([
      ["npc_general", Gc],
      ["npc_tentacle_guy", AZ]
    ]);

    function jZ(JJ) {
      const cJ = qZ.get(JJ);
      if (void 0 === cJ) return null;
      const ZJ = document.createElement("img");
      return ZJ.src = cJ, ZJ.alt = "", ZJ.draggable = !1, ZJ.style.imageRendering = "pixelated", ZJ
    }
    const YZ = function() {
      let JJ, cJ = !1,
        ZJ = null,
        qJ = null;
      const jJ = [],
        YJ = JJ => {
          for (const cJ of jJ) cJ !== JJ && cJ.close();
          (0, AJ.n)()
        },
        hJ = JJ => {
          JJ && (0, AJ.j)()
        },
        DJ = new XZ((cJ => {
          JJ.sendCommand(cJ)
        })),
        sJ = new sc((JJ => {
          XJ.i.Uf(Dc, JJ, !0)
        }), YJ, hJ, DJ),
        nJ = new zJ((JJ => {
          XJ.i.Uf(dJ, JJ, !0)
        }), YJ, hJ),
        GJ = new Lc((JJ => {
          XJ.i.Uf(Rc, JJ, !0)
        }), YJ, hJ, DJ);
      jJ.push(sJ, nJ, GJ);
      return {
        onCreate: cJ => {
          JJ = cJ, ZJ = (0, AJ.u)(null, {
            content: (0, FJ.createElement)(UZ, {
              loadout: sJ,
              codex: nJ,
              locator: GJ
            }),
            onClose: () => {
              for (const JJ of jJ) JJ.close()
            }
          }), qJ = (0, eJ.f)(jZ)
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          "containmentLoadout" === JJ ? sJ.Qn(cJ) : "containmentLoadoutClose" === JJ ? sJ.isOpen() && (sJ.close(), (0, AJ.f)()) : "containmentCodex" === JJ ? nJ.Qn(cJ) : "containmentLocator" === JJ && GJ.Qn(cJ)
        },
        Hh: () => {
          cJ || UJ.d.get("loadingOverlayVisible") || (cJ = !0, JJ.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var JJ, cJ;
          null === (JJ = ZJ) || void 0 === JJ || JJ(), ZJ = null, null === (cJ = qJ) || void 0 === cJ || cJ(), qJ = null;
          for (const ZJ of jJ) ZJ.dispose();
          DJ.dispose()
        }
      }
    }
  },
  35901: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      D: () => kJ,
      F: () => pJ,
      J: () => HJ,
      L: () => dJ,
      c: () => qJ,
      f: () => MJ,
      g: () => AJ,
      i: () => gJ,
      m: () => SJ,
      q: () => EJ,
      r: () => WJ,
      t: () => wJ,
      w: () => yJ,
      z: () => PJ
    });
    var FJ = ZJ(29);
    const UJ = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      eJ = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      XJ = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      AJ = eJ.filter((JJ => "docsButton" !== JJ)),
      qJ = XJ.filter((JJ => "aiHelperButton" !== JJ)),
      jJ = "codeEditorTutorials",
      YJ = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      hJ = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let DJ = null,
      sJ = null;
    const nJ = new Set,
      GJ = new Set;
    let fJ = null;
    const xJ = new Set,
      rJ = new Set;

    function vJ() {
      rJ.forEach((JJ => {
        JJ()
      }))
    }

    function mJ() {
      if (!DJ) {
        const JJ = FJ.j.getItem(jJ);
        DJ = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof JJ && null !== JJ ? JJ : {}
        }
      }
      return DJ
    }

    function QJ(JJ) {
      const cJ = mJ();
      cJ[JJ] || (DJ = {
        ...cJ,
        [JJ]: !0
      }, FJ.j.setItem(jJ, DJ))
    }

    function EJ(JJ) {
      return "docsOverview" === JJ ? eJ : "aiHelperOverview" === JJ ? XJ : sJ ? UJ[sJ] : []
    }

    function VJ(JJ) {
      return ("worldCodeButton" !== JJ || !mJ().worldCodeIntroShown) && !xJ.has(JJ)
    }

    function KJ(JJ) {
      var cJ;
      return (null === (cJ = fJ) || void 0 === cJ ? void 0 : cJ.name) === JJ ? fJ.stepsDone : nJ
    }

    function yJ(JJ, cJ) {
      if (! function(JJ) {
          return fJ ? fJ.name === JJ : "welcome" === JJ
        }(JJ) || !VJ(cJ) || KJ(JJ).has(cJ)) return !1;
      if (fJ) return !0;
      const ZJ = YJ[cJ];
      return ZJ ? !mJ()[ZJ] || GJ.has(cJ) : !mJ()[hJ[JJ]]
    }

    function SJ(JJ) {
      var cJ;
      return null !== (cJ = EJ(JJ).find((cJ => yJ(JJ, cJ)))) && void 0 !== cJ ? cJ : null
    }

    function IJ(JJ) {
      var cJ;
      QJ(hJ[JJ]), (null === (cJ = fJ) || void 0 === cJ ? void 0 : cJ.name) === JJ && (fJ = null)
    }

    function MJ(JJ) {
      const cJ = (fJ ? [fJ.name] : ["welcome", "docsOverview"]).find((cJ => SJ(cJ) === JJ));
      if (!cJ) return;
      KJ(cJ).add(JJ);
      const ZJ = YJ[JJ];
      ZJ && (QJ(ZJ), fJ || GJ.add(JJ)), null === SJ(cJ) && IJ(cJ), vJ()
    }

    function bJ(JJ, cJ) {
      const ZJ = EJ(JJ),
        FJ = KJ(JJ);
      for (let UJ = ZJ.indexOf(cJ) - 1; UJ >= 0; UJ--)
        if (FJ.has(ZJ[UJ]) && VJ(ZJ[UJ])) return ZJ[UJ];
      return null
    }

    function wJ(JJ, cJ) {
      return null !== bJ(JJ, cJ)
    }

    function WJ(JJ, cJ) {
      const ZJ = bJ(JJ, cJ);
      ZJ && (KJ(JJ).delete(ZJ), vJ())
    }

    function gJ(JJ) {
      IJ(JJ), "welcome" === JJ && EJ("welcome").forEach((JJ => {
        const cJ = YJ[JJ];
        cJ && QJ(cJ)
      })), vJ()
    }

    function HJ(JJ) {
      fJ = {
        name: JJ,
        stepsDone: new Set
      }, vJ()
    }

    function PJ() {
      (fJ || 0 !== nJ.size || 0 !== GJ.size) && (fJ = null, nJ.clear(), GJ.clear(), vJ())
    }

    function kJ(JJ, cJ) {
      const ZJ = cJ ? JJ : sJ === JJ ? null : sJ;
      ZJ !== sJ && (sJ = ZJ, vJ())
    }

    function pJ(JJ, cJ) {
      xJ.has(JJ) === cJ && (cJ ? xJ.delete(JJ) : xJ.add(JJ), vJ())
    }

    function dJ(JJ) {
      return rJ.add(JJ), () => {
        rJ.delete(JJ)
      }
    }
  },
  38244: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38246: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38253: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38260: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38264: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38272: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38279: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38285: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38294: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38302: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38308: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38312: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38321: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38324: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38333: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38337: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38342: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38348: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38356: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38364: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37519: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);