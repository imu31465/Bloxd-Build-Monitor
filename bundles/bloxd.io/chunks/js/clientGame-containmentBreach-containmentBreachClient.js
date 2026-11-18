export const id = 14;
export const ids = [14];
export const modules = {
  38233: (BB, TB, dB) => {
    var VB = {
      "./breach-zero-uncaught.webp": 38242,
      "./breach-zero.webp": 38245,
      "./brood-father-uncaught.webp": 38248,
      "./brood-father.webp": 38256,
      "./carousel-uncaught.webp": 38258,
      "./carousel.webp": 38265,
      "./deadlock-uncaught.webp": 38272,
      "./deadlock.webp": 38280,
      "./frost-revenant-uncaught.webp": 38288,
      "./frost-revenant.webp": 38293,
      "./hollow-choir-uncaught.webp": 38299,
      "./hollow-choir.webp": 38304,
      "./magma-warden-uncaught.webp": 38306,
      "./magma-warden.webp": 38315,
      "./patient-zero-uncaught.webp": 38318,
      "./patient-zero.webp": 38324,
      "./siege-engine-uncaught.webp": 38326,
      "./siege-engine.webp": 38330,
      "./warp-stalker-uncaught.webp": 38336,
      "./warp-stalker.webp": 38338
    };

    function yB(BB) {
      var TB = pB(BB);
      return dB(TB)
    }

    function pB(BB) {
      if (!dB.o(VB, BB)) {
        var TB = new Error("Cannot find module '" + BB + "'");
        throw TB.code = "MODULE_NOT_FOUND", TB
      }
      return VB[BB]
    }
    yB.keys = function() {
      return Object.keys(VB)
    }, yB.resolve = pB, BB.exports = yB, yB.id = 38233
  },
  35856: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => sB,
      f: () => tB,
      h: () => fB,
      l: () => DB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(62),
      lB = dB(72),
      JB = dB(1251),
      YB = dB(1324),
      gB = dB(1249),
      oB = dB(1165),
      kB = dB(1078),
      LB = dB(35860),
      OB = dB(980);

    function DB(BB) {
      const [TB, dB] = (0, pB.useState)((() => (0, LB.s)(BB)));
      return (0, pB.useEffect)((() => (dB((0, LB.s)(BB)), (0, LB.T)((() => {
        dB((0, LB.s)(BB))
      })))), [BB]), TB
    }

    function uB(BB, TB) {
      "function" === typeof BB ? BB(TB) : BB && (BB.current = TB)
    }

    function HB(BB) {
      let {
        tutorial: TB,
        step: dB,
        enabled: VB = !0
      } = BB;
      const yB = DB(TB);
      return VB && yB === dB
    }

    function EB(BB, TB) {
      const dB = (0, LB.w)(BB),
        VB = dB.indexOf(TB);
      return !dB.slice(VB + 1).some((TB => (0, LB.D)(BB, TB)))
    }

    function vB(BB, TB, dB, VB) {
      let {
        tutorial: yB,
        step: pB,
        waitForClick: lB = !1,
        onPrevious: JB
      } = BB;
      const YB = TB && (0, LB.C)(yB, pB),
        gB = TB && !EB(yB, pB),
        kB = lB ? VB : dB;
      let OB = null;
      YB ? OB = () => {
        null === JB || void 0 === JB || JB(), (0, LB.y)(yB, pB)
      } : gB && (OB = () => {
        (0, LB.o)(yB)
      }), (0, oB.y)("popup", null !== kB && void 0 !== kB ? kB : dB, OB, TB && null !== kB, null, YB ? void 0 : "controller:menusSkipTutorial")
    }

    function mB(BB) {
      let {
        tutorial: TB,
        step: dB,
        text: VB,
        waitForClick: yB = !1,
        onPrevious: pB
      } = BB;
      const {
        t: lB
      } = (0, kB.z)(), JB = EB(TB, dB);
      return (0, OB.jsxs)(OB.Fragment, {
        children: [(0, OB.jsx)("div", {
          className: "TutorialStepText",
          children: VB
        }), (0, OB.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, LB.C)(TB, dB) && (0, OB.jsx)(YB.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === pB || void 0 === pB || pB(), (0, LB.y)(TB, dB)
            },
            children: lB("tutorial:back")
          }), !yB && (0, OB.jsx)(YB.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LB.g)(dB)
            },
            padDefaultFocus: !0,
            children: lB(JB ? "tutorial:done" : "tutorial:next")
          }), !JB && (0, OB.jsx)(YB.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LB.o)(TB)
            },
            children: lB("tutorial:skip")
          })]
        })]
      })
    }
    const iB = 6;

    function NB(BB) {
      let {
        rect: TB,
        margin: dB
      } = BB;
      const VB = Math.max(0, TB.top - dB),
        yB = TB.bottom + dB,
        pB = Math.max(0, TB.left - dB),
        lB = TB.right + dB;
      return (0, OB.jsxs)(OB.Fragment, {
        children: [(0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: VB
          }
        }), (0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: yB,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: VB,
            left: 0,
            width: pB,
            height: yB - VB
          }
        }), (0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: VB,
            left: lB,
            right: 0,
            height: yB - VB
          }
        })]
      })
    }

    function tB(BB) {
      let {
        target: TB,
        placement: dB,
        boxRef: VB,
        className: YB,
        spotlightMargin: oB = iB,
        children: kB
      } = BB;
      const {
        getArrowProps: LB,
        getTooltipProps: DB,
        setTooltipRef: uB,
        setTriggerRef: HB
      } = (0, JB.c)({
        placement: dB,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, oB]
      });
      (0, pB.useLayoutEffect)((() => {
        HB(TB)
      }), [TB, HB]);
      const EB = function(BB, TB) {
        const [dB, VB] = (0, pB.useState)(null);
        return (0, pB.useEffect)((() => {
          if (!TB || !BB) return void VB(null);
          let dB = 0,
            yB = null;
          const pB = () => {
            const TB = BB.getBoundingClientRect();
            yB && TB.left === yB.left && TB.top === yB.top && TB.width === yB.width && TB.height === yB.height || (yB = TB, VB(TB)), dB = requestAnimationFrame(pB)
          };
          return pB(), () => {
            cancelAnimationFrame(dB)
          }
        }), [BB, TB]), dB
      }(TB, !0);
      (0, pB.useEffect)((() => {
        null === TB || void 0 === TB || TB.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [TB]);
      const vB = (0, pB.useCallback)((BB => {
        uB(BB), VB && (VB.current = BB)
      }), [uB, VB]);
      return (0, lB.createPortal)((0, OB.jsxs)(OB.Fragment, {
        children: [EB && (0, OB.jsx)(NB, {
          rect: EB,
          margin: oB
        }), (0, OB.jsxs)("div", {
          ref: vB,
          ...DB({
            className: yB()("tooltip-container SmallTextLight TutorialStep", YB)
          }),
          children: [kB, (0, OB.jsx)("div", {
            ...LB({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, gB.k)())
    }
    const fB = (0, pB.forwardRef)((function(BB, TB) {
      let {
        placement: dB = "right",
        children: VB,
        ...yB
      } = BB;
      const lB = HB(yB),
        JB = (0, pB.useRef)(null),
        YB = (0, pB.useRef)(null);
      vB(yB, lB, JB, YB);
      const [gB, oB] = (0, pB.useState)(null), kB = VB.ref, LB = (0, pB.useCallback)((BB => {
        YB.current = BB, oB(BB), uB(TB, BB), uB(kB, BB)
      }), [TB, kB]);
      return (0, OB.jsxs)(OB.Fragment, {
        children: [(0, pB.cloneElement)(VB, {
          ref: LB
        }), lB && (0, OB.jsx)(tB, {
          target: gB,
          placement: dB,
          boxRef: JB,
          children: (0, OB.jsx)(mB, {
            ...yB
          })
        })]
      })
    }));

    function sB(BB) {
      const TB = HB(BB),
        dB = (0, pB.useRef)(null);
      return vB(BB, TB, dB, null), TB ? (0, lB.createPortal)((0, OB.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, OB.jsx)("div", {
          ref: dB,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, OB.jsx)(mB, {
            ...BB
          })
        })
      }), (0, gB.k)()) : null
    }
  },
  37506: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    const VB = 4,
      yB = 12e3,
      pB = 1e3;
    class lB {
      constructor() {
        let {
          limit: BB = VB,
          windowMs: TB = yB,
          spacingMs: dB = pB,
          now: lB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = TB, this.spacingMs = dB, this.now = lB
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const BB of this.priority) BB.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const BB = this.now();
        this.sent.push(BB), this.lastSentAt = BB, this.schedule(), this.notify()
      }
      addPriority(BB) {
        return this.priority.add(BB), () => {
          this.priority.delete(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const BB of this.priority)
          if (BB.waiting()) return !0;
        return !1
      }
      prune() {
        const BB = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= BB;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const BB = this.now(),
          TB = this.lastSentAt + this.spacingMs,
          dB = Math.min(TB > BB ? TB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        dB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, dB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  37480: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB, TB, dB) {
        this.yH = BB, this.beforeOpen = TB, this.afterClose = dB, this.open = !1, this.ND = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ND && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(BB) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(BB)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.ND = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ND || (this.snapshot = this.buildSnapshot(), this.yH(this.snapshot))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  38224: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => od
    });
    var VB = dB(62);
    var yB = dB(21),
      pB = dB(1662),
      lB = dB(24),
      JB = dB(35595),
      YB = dB(933),
      gB = dB.n(YB),
      oB = dB(1317),
      kB = dB(1078),
      LB = dB(3942),
      OB = dB(1229),
      DB = dB(1324),
      uB = dB(1666),
      HB = dB(1249),
      EB = dB(1657),
      vB = dB(1727),
      mB = dB(670);
    const iB = dB(38233),
      NB = Object.fromEntries(iB.keys().map((BB => [BB.replace(/^\.\/(.*)\.webp$/, "$1"), iB(BB)]))),
      tB = new Set;

    function fB(BB, TB) {
      const dB = TB ? BB : `${BB}-uncaught`,
        VB = (0, mB.b)(NB, dB);
      return void 0 !== VB || tB.has(dB) || (tB.add(dB), console.warn(`Containment Breach has no mugshot ${dB}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), VB
    }
    var sB = dB(980);
    const MB = "containmentBreach",
      zB = "Gold Coin";

    function wB(BB) {
      let {
        open: TB,
        onDismiss: dB,
        title: VB,
        className: yB,
        decor: pB,
        headerExtra: lB,
        status: JB,
        statusRefused: YB = !1,
        children: oB
      } = BB;
      const kB = `${yB}Title`;
      return (0, sB.jsx)(LB.b, {
        show: TB,
        close: dB,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, sB.jsxs)("section", {
          className: gB()("ContainmentBoardPanel", yB),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": kB,
          children: [pB && (0, sB.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: pB
          }), (0, sB.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, sB.jsx)("h2", {
              id: kB,
              className: "VisuallyHidden",
              children: VB
            }), lB, (0, sB.jsx)(DB.i, {
              onClick: dB
            })]
          }), (0, sB.jsx)("div", {
            className: "BoardBody",
            children: oB
          }), void 0 !== JB && (0, sB.jsx)("footer", {
            className: gB()("BoardStatus", {
              Refused: YB
            }),
            children: JB
          })]
        })
      })
    }

    function UB(BB) {
      let {
        itemName: TB
      } = BB;
      return (0, sB.jsx)(uB.c, {
        itemName: TB,
        amount: 0
      })
    }

    function FB(BB) {
      let {
        anomalyId: TB,
        caught: dB
      } = BB;
      const yB = (0, VB.useRef)(null);
      return (0, OB.e)(yB, !dB), (0, sB.jsx)("span", {
        ref: yB,
        className: gB()("BoardMugshot", {
          Uncaught: !dB
        }),
        children: (0, sB.jsx)("img", {
          src: fB(TB, dB),
          alt: "",
          draggable: !1
        })
      })
    }

    function KB(BB) {
      let {
        itemName: TB,
        amount: dB,
        Dg: VB,
        inTile: yB = !1
      } = BB;
      return (0, sB.jsx)(HB.h, {
        delayShow: 200,
        hoverOnly: yB,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, sB.jsx)(IB, {
          itemName: TB,
          amount: dB,
          Dg: VB
        }),
        children: (0, sB.jsxs)("span", {
          className: gB()("BoardChip", {
            Short: void 0 !== VB && VB < dB
          }),
          children: [(0, sB.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, sB.jsx)(UB, {
              itemName: TB
            })
          }), dB.toLocaleString()]
        })
      })
    }
    const rB = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function IB(BB) {
      var TB;
      let {
        itemName: dB,
        amount: VB,
        Dg: yB
      } = BB;
      const {
        t: pB
      } = (0, kB.z)(), lB = (0, vB.g)("itemInfo", (BB => BB[dB])), {
        lore: JB,
        droppedBy: YB
      } = function(BB) {
        if ("string" !== typeof BB) return {
          lore: BB,
          droppedBy: null
        };
        const TB = rB.exec(BB);
        return null === TB ? {
          lore: BB,
          droppedBy: null
        } : {
          lore: "" === TB[1] ? void 0 : TB[1],
          droppedBy: TB[2]
        }
      }(null === lB || void 0 === lB ? void 0 : lB.description);
      return (0, sB.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, sB.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, sB.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, sB.jsx)(UB, {
              itemName: dB
            })
          }), (0, sB.jsx)(EB.e, {
            text: null !== (TB = null === lB || void 0 === lB ? void 0 : lB.displayName) && void 0 !== TB ? TB : dB,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== JB || null !== YB) && (0, sB.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== JB && (0, sB.jsx)(EB.e, {
            text: JB,
            className: "BoardChipTooltipDescription"
          }), null !== YB && (0, sB.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, sB.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: pB(`${MB}:chipDroppedBy`)
            }), YB]
          })]
        }), void 0 !== yB && (0, sB.jsxs)("div", {
          className: gB()("BoardChipTooltipHeld", {
            Short: yB < VB
          }),
          children: [(0, sB.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: pB(`${MB}:chipYouHave`)
          }), (0, sB.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, sB.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: yB.toLocaleString()
            }), ` / ${VB.toLocaleString()}`]
          }), (0, sB.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, sB.jsx)("span", {
              style: {
                width: (VB > 0 ? 100 * Math.min(1, yB / VB) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function cB(BB) {
      let {
        icon: TB,
        name: dB,
        selected: VB,
        locked: yB,
        className: pB,
        buttonRef: lB,
        onSelect: JB,
        children: YB
      } = BB;
      return (0, sB.jsxs)("button", {
        ref: lB,
        type: "button",
        className: gB()("BoardTile", pB, {
          Selected: VB,
          Locked: yB
        }),
        onClick: JB,
        children: [(0, sB.jsx)("span", {
          className: "BoardTileIcon",
          children: TB
        }), (0, sB.jsx)("span", {
          className: "BoardTileName",
          children: dB
        }), YB]
      })
    }

    function SB(BB) {
      let {
        icon: TB,
        name: dB,
        children: VB
      } = BB;
      return (0, sB.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, sB.jsx)("span", {
          className: "BoardDetailIcon",
          children: TB
        }), (0, sB.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, sB.jsx)("h3", {
            children: dB
          }), (0, sB.jsx)("span", {
            className: "BoardDetailStatus",
            children: VB
          })]
        })]
      })
    }

    function PB(BB) {
      let {
        coins: TB,
        children: dB
      } = BB;
      return (0, sB.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, sB.jsx)(KB, {
          itemName: zB,
          amount: TB
        }), dB]
      })
    }
    var QB = dB(37480);
    const RB = "containmentCodexView";
    class aB extends QB.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = BB => {
          this.selectedId = BB, this.emit()
        }
      }
      MD(BB) {
        this.entries = BB.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const ZB = {
        codexAnyDifficulty: `${MB}:codexNeedsAny`,
        codexNormalOnly: `${MB}:codexNeedsNormal`,
        codexHardOnly: `${MB}:codexNeedsHard`
      },
      XB = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      WB = {
        codexContained: `${MB}:codexContainedBadge`,
        codexEncountered: `${MB}:codexEncounteredBadge`,
        codexUnidentified: `${MB}:codexUnidentifiedBadge`
      },
      hB = ["94%", "81%", "88%", "46%", "72%"];

    function CB(BB) {
      let {
        entry: TB
      } = BB;
      const {
        t: dB
      } = (0, kB.z)();
      return (0, sB.jsx)("span", {
        className: gB()("BoardBadge", XB[TB.codexEntryState]),
        children: dB(WB[TB.codexEntryState])
      })
    }

    function GB(BB) {
      const {
        t: TB
      } = (0, kB.z)();
      return "codexUnidentified" === BB.codexEntryState ? TB(`${MB}:codexUnidentifiedName`) : BB.codexEntryName
    }

    function qB(BB) {
      let {
        entry: TB
      } = BB;
      return "codexUnidentified" === TB.codexEntryState ? (0, sB.jsx)(UB, {
        itemName: "Book"
      }) : (0, sB.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, sB.jsx)(FB, {
          anomalyId: TB.codexEntryId,
          caught: "codexContained" === TB.codexEntryState
        }), (0, sB.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function xB(BB) {
      let {
        entry: TB,
        selected: dB,
        onSelect: VB
      } = BB;
      const yB = "codexUnidentified" === TB.codexEntryState;
      return (0, sB.jsxs)(cB, {
        icon: (0, sB.jsx)(qB, {
          entry: TB
        }),
        name: GB(TB),
        selected: dB,
        locked: yB,
        className: gB()("CodexFolder", XB[TB.codexEntryState]),
        onSelect: () => {
          VB(TB.codexEntryId)
        },
        children: [!yB && (0, sB.jsx)(CB, {
          entry: TB
        }), yB && (0, sB.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function jB(BB) {
      let {
        count: TB
      } = BB;
      const dB = [];
      for (let VB = Math.min(TB, 25); VB > 0; VB -= 5) dB.push(Math.min(VB, 5));
      return (0, sB.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: dB.map(((BB, TB) => (0, sB.jsx)("span", {
          className: gB()("CodexTallyGroup", {
            Gate: 5 === BB
          }),
          children: Array.from({
            length: Math.min(BB, 4)
          }, ((BB, TB) => (0, sB.jsx)("span", {
            className: "CodexTallyMark"
          }, TB)))
        }, TB)))
      })
    }

    function AB(BB) {
      let {
        contained: TB,
        total: dB
      } = BB;
      const {
        t: VB
      } = (0, kB.z)();
      return (0, sB.jsxs)("div", {
        className: "CodexProgress",
        children: [VB(`${MB}:codexProgress`, {
          contained: String(TB),
          total: String(dB)
        }), (0, sB.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, sB.jsx)("span", {
            style: {
              width: TB / dB * 100 + "%"
            }
          })
        })]
      })
    }

    function bB(BB) {
      let {
        entry: TB,
        fileNumber: dB
      } = BB;
      const {
        t: VB
      } = (0, kB.z)(), yB = "codexContained" === TB.codexEntryState;
      return (0, sB.jsx)("section", {
        className: "BoardDetail",
        children: (0, sB.jsxs)("article", {
          className: gB()("CodexDossier", XB[TB.codexEntryState]),
          children: [(0, sB.jsx)("span", {
            className: "CodexFileNumber",
            children: VB(`${MB}:codexFileNumber`, {
              number: String(dB).padStart(3, "0")
            })
          }), (0, sB.jsx)(SB, {
            icon: (0, sB.jsx)(qB, {
              entry: TB
            }),
            name: GB(TB),
            children: (0, sB.jsx)(CB, {
              entry: TB
            })
          }), yB && (0, sB.jsxs)(sB.Fragment, {
            children: [(0, sB.jsx)("p", {
              className: "BoardDescription",
              children: TB.codexEntryLore
            }), (0, sB.jsxs)("p", {
              className: "CodexTally",
              children: [VB(`${MB}:codexContainments`, {
                count: String(TB.codexEntryContainedCount)
              }), (0, sB.jsx)(jB, {
                count: TB.codexEntryContainedCount
              })]
            }), (0, sB.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: VB(`${MB}:codexContainedBadge`)
            })]
          }), !yB && (0, sB.jsxs)(sB.Fragment, {
            children: [(0, sB.jsxs)("div", {
              className: "CodexRedaction",
              children: [hB.map((BB => (0, sB.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: BB
                }
              }, BB))), (0, sB.jsx)("p", {
                className: "CodexRedacted",
                children: VB(`${MB}:codexRedacted`)
              })]
            }), "" !== TB.codexEntryHint && (0, sB.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, sB.jsx)("h4", {
                children: VB(`${MB}:codexHintLabel`)
              }), (0, sB.jsx)("p", {
                children: TB.codexEntryHint
              })]
            }), (0, sB.jsx)("p", {
              className: "CodexClearance",
              children: VB(ZB[TB.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function nB(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, oB.f)(RB, TB.getSnapshot()),
        {
          t: VB
        } = (0, kB.z)();
      if (0 === dB.entries.length) return null;
      const yB = dB.entries.find((BB => BB.codexEntryId === dB.selectedId)),
        pB = dB.entries.filter((BB => "codexContained" === BB.codexEntryState)).length,
        lB = dB.entries.map((BB => BB.codexEntryId)).sort().indexOf(yB.codexEntryId) + 1;
      return (0, sB.jsxs)(wB, {
        open: dB.open,
        onDismiss: TB.dismiss,
        title: VB(`${MB}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, sB.jsx)(AB, {
          contained: pB,
          total: dB.entries.length
        }),
        children: [(0, sB.jsx)("div", {
          className: "BoardTiles",
          children: dB.entries.map((BB => (0, sB.jsx)(xB, {
            entry: BB,
            selected: BB === yB,
            onSelect: TB.select
          }, BB.codexEntryId)))
        }), (0, sB.jsx)(bB, {
          entry: yB,
          fileNumber: lB
        })]
      })
    }
    var eB = dB(279);
    class BT extends QB.c {
      constructor(BB, TB, dB, VB, yB, pB) {
        super(BB, TB, dB), this.pacer = VB, this.command = yB, this.predict = pB, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = BB => {
          this.selectedId = BB, this.emit()
        }, this.act = (BB, TB) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${BB} ${TB}`, this.rollBack)) return;
          const dB = this.predict(this.board, BB, TB);
          null !== dB && (this.board = dB.board, this.notice = dB.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = VB.subscribe((() => {
          this.emit()
        }))
      }
      MD(BB) {
        const TB = this.messageOpens(BB);
        if (TB && this.open) return this.board === this.confirmed && (this.board = BB), this.confirmed = BB, void this.emit();
        if (this.board = BB, this.confirmed = BB, this.pacer.onReply(), TB) return this.notice = null, this.selectedId = this.openingSelection(BB), void this.show();
        const dB = this.messageNotice(BB);
        null !== dB && (this.notice = dB), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function TT(BB, TB) {
      return BB.loadoutCoins >= TB.loadoutCostCoins && TB.loadoutCostParts.every((TB => function(BB, TB) {
        return dT(BB, TB).loadoutHeldPartAmount
      }(BB, TB.loadoutPartCurrency) >= TB.loadoutPartAmount))
    }

    function dT(BB, TB) {
      return BB.loadoutHeldParts.find((BB => BB.loadoutHeldPartCurrency === TB))
    }

    function VT(BB, TB) {
      return BB.loadoutSlots.find((BB => BB.loadoutSlotKind === TB))
    }

    function yT(BB) {
      return BB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)).length >= BB.loadoutMaxPerks
    }

    function pT(BB, TB, dB) {
      for (const yB of BB.loadoutSlots) {
        const VB = yB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === dB));
        if (VB) return "loadoutArmour" === yB.loadoutSlotKind ? JT(BB, yB, VB, TB) : lT(BB, yB, VB, TB)
      }
      const VB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === dB));
      return VB ? function(BB, TB, dB) {
        const VB = TB.loadoutPerkOwned,
          yB = TB.loadoutPerkEquipped,
          pB = TB.loadoutPerkName,
          lB = yT(BB);
        if ("loadoutUnlock" === dB) {
          if (VB || !TT(BB, TB.loadoutPerkCost)) return null;
          const dB = {
            ...TB,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !lB
          };
          return {
            board: gT(oT(BB, TB.loadoutPerkCost), dB),
            notice: kT(lB ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", pB)
          }
        }
        if ("loadoutUpgrade" === dB || !VB || "loadoutEquip" === dB === yB || !yB && lB) return null;
        return {
          board: gT(BB, {
            ...TB,
            loadoutPerkEquipped: !yB
          }),
          notice: kT(yB ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", pB)
        }
      }(BB, VB, TB) : null
    }

    function lT(BB, TB, dB, VB) {
      const yB = dB.loadoutOptionOwnedTier,
        pB = dB.loadoutOptionName;
      if ("loadoutEquip" === VB) return 0 === yB ? null : {
        board: YT(BB, TB, dB.loadoutOptionId, null),
        notice: kT("loadoutNoticeEquipped", pB)
      };
      const lB = "loadoutUnlock" === VB;
      if (lB && 0 !== yB || "loadoutUpgrade" === VB && (0 === yB || yB >= dB.loadoutOptionTiers.length) || "loadoutUnequip" === VB) return null;
      const JB = dB.loadoutOptionTiers[yB].loadoutTierCost;
      if (!TT(BB, JB)) return null;
      const YB = {
          ...dB,
          loadoutOptionOwnedTier: yB + 1
        },
        gB = lB ? dB.loadoutOptionId : TB.loadoutSlotEquippedId;
      return {
        board: YT(oT(BB, JB), TB, gB, YB),
        notice: lB ? kT("loadoutNoticeUnlocked", pB) : kT("loadoutNoticeUpgraded", pB, yB + 1)
      }
    }

    function JT(BB, TB, dB, VB) {
      const yB = dB.loadoutOptionOwnedTier > 0,
        pB = dB.loadoutOptionName;
      if ("loadoutEquip" === VB && yB) return {
        board: YT(BB, TB, dB.loadoutOptionId, null),
        notice: kT("loadoutNoticeEquipped", pB)
      };
      const lB = dB.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== VB || yB || !TT(BB, lB) ? null : {
        board: YT(oT(BB, lB), TB, dB.loadoutOptionId, {
          ...dB,
          loadoutOptionOwnedTier: 1
        }),
        notice: kT("loadoutNoticeUnlocked", pB)
      }
    }

    function YT(BB, TB, dB, VB) {
      const yB = {
        ...TB,
        loadoutSlotEquippedId: dB,
        loadoutSlotOptions: TB.loadoutSlotOptions.map((BB => null !== VB && BB.loadoutOptionId === VB.loadoutOptionId ? VB : BB))
      };
      return {
        ...BB,
        loadoutSlots: BB.loadoutSlots.map((BB => BB === TB ? yB : BB))
      }
    }

    function gT(BB, TB) {
      return {
        ...BB,
        loadoutPerks: BB.loadoutPerks.map((BB => BB.loadoutPerkId === TB.loadoutPerkId ? TB : BB))
      }
    }

    function oT(BB, TB) {
      return {
        ...BB,
        loadoutCoins: BB.loadoutCoins - TB.loadoutCostCoins,
        loadoutHeldParts: BB.loadoutHeldParts.map((BB => {
          const dB = TB.loadoutCostParts.find((TB => TB.loadoutPartCurrency === BB.loadoutHeldPartCurrency));
          return dB ? {
            ...BB,
            loadoutHeldPartAmount: BB.loadoutHeldPartAmount - dB.loadoutPartAmount
          } : BB
        }))
      }
    }

    function kT(BB, TB) {
      return {
        loadoutNoticeKey: BB,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: TB,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const LT = "containmentLoadoutView";
    class OT extends BT {
      constructor(BB, TB, dB, VB) {
        super(BB, TB, dB, VB, "loadout", pT), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = BB => {
          this.slot = BB, this.selectedId = DT(this.board, BB), this.emit()
        }
      }
      messageOpens(BB) {
        return BB.loadoutMessageOpens
      }
      messageNotice(BB) {
        return BB.loadoutNotice
      }
      openingSelection(BB) {
        return DT(BB, this.slot)
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

    function DT(BB, TB) {
      if ("loadoutPerks" === TB) {
        var dB;
        const TB = BB.loadoutPerks;
        return (null !== (dB = TB.find((BB => BB.loadoutPerkEquipped))) && void 0 !== dB ? dB : TB[0]).loadoutPerkId
      }
      return VT(BB, TB).loadoutSlotEquippedId
    }
    const uT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var HT = dB(35856),
      ET = dB(1165);
    const vT = {
        loadoutPrimary: `${MB}:loadoutSlotPrimary`,
        loadoutSecondary: `${MB}:loadoutSlotSecondary`,
        loadoutOffensive: `${MB}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${MB}:loadoutSlotSelfHelp`,
        loadoutArmour: `${MB}:loadoutSlotArmour`,
        loadoutPerks: `${MB}:loadoutSlotPerks`
      },
      mT = {
        section: "right",
        dO: "bottom",
        act: "top"
      },
      iT = (0, VB.createContext)({
        step: null,
        targetRef: () => {}
      });

    function NT() {
      const {
        step: BB,
        targetRef: TB
      } = (0, VB.useContext)(iT);
      return (dB, VB) => (null === BB || void 0 === BB ? void 0 : BB.kind) === dB && BB.id === VB ? TB : void 0
    }

    function tT(BB, TB) {
      const dB = TB.loadoutTargetId;
      if ("loadoutPerks" === TB.loadoutTargetSection) {
        const TB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === dB));
        return {
          name: TB.loadoutPerkName,
          owned: TB.loadoutPerkOwned,
          equipped: TB.loadoutPerkEquipped
        }
      }
      const VB = VT(BB, TB.loadoutTargetSection),
        yB = VB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === dB));
      return {
        name: yB.loadoutOptionName,
        owned: yB.loadoutOptionOwnedTier > 0,
        equipped: VB.loadoutSlotEquippedId === dB
      }
    }

    function fT(BB, TB, dB, VB) {
      const [yB, pB] = BB(`${MB}:${TB}`, {
        [dB]: "\x01"
      }).split("\x01");
      return (0, sB.jsxs)(sB.Fragment, {
        children: [yB, (0, sB.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: VB
        }), pB]
      })
    }

    function sT(BB) {
      let {
        view: TB,
        onDismiss: dB,
        children: yB
      } = BB;
      const {
        t: pB
      } = (0, kB.z)(), lB = TB.loadout, JB = TB.open ? lB.loadoutWalkthrough.map((BB => ({
        target: BB,
        info: tT(lB, BB)
      }))).find((BB => {
        let {
          info: TB
        } = BB;
        return !TB.equipped
      })) : void 0;
      let YB = null,
        gB = null;
      if (void 0 !== JB) {
        const {
          target: BB,
          info: dB
        } = JB;
        TB.slot !== BB.loadoutTargetSection ? (YB = {
          kind: "section",
          id: BB.loadoutTargetSection
        }, gB = fT(pB, "loadoutWalkthroughSection", "section", pB(vT[BB.loadoutTargetSection]))) : TB.selectedId !== BB.loadoutTargetId ? (YB = {
          kind: "dO",
          id: BB.loadoutTargetId
        }, gB = fT(pB, "loadoutWalkthroughPick", "name", dB.name)) : (YB = {
          kind: "act",
          id: BB.loadoutTargetId
        }, gB = fT(pB, dB.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", dB.name))
      }
      const oB = null === YB ? null : function(BB) {
          return `${BB.kind}:${BB.id}`
        }(YB),
        [LB, OB] = (0, VB.useState)(null),
        DB = (0, VB.useCallback)((BB => {
          OB((TB => null !== BB ? {
            key: oB,
            node: BB
          } : (null === TB || void 0 === TB ? void 0 : TB.key) === oB ? null : TB))
        }), [oB]),
        uB = null !== oB && (null === LB || void 0 === LB ? void 0 : LB.key) === oB ? LB.node : null;
      return (0, sB.jsxs)(iT.Provider, {
        value: {
          step: YB,
          targetRef: DB
        },
        children: [yB, null !== YB && null !== uB && (0, sB.jsx)(MT, {
          target: uB,
          placement: mT[YB.kind],
          onDismiss: dB,
          children: gB
        }, oB)]
      })
    }

    function MT(BB) {
      let {
        target: TB,
        placement: dB,
        onDismiss: yB,
        children: pB
      } = BB;
      const {
        t: lB
      } = (0, kB.z)(), JB = (0, VB.useRef)(TB);
      return JB.current = TB, (0, ET.y)("popup", JB, yB), (0, sB.jsxs)(HT.f, {
        target: TB,
        placement: dB,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, sB.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, sB.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: uT,
            alt: "",
            draggable: !1
          }), (0, sB.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: lB(`${MB}:operatorName`)
          }), (0, sB.jsx)(DB.i, {
            onClick: yB,
            ariaLabel: lB(`${MB}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, sB.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: pB
        })]
      })
    }
    const zT = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function wT(BB) {
      let {
        cost: TB,
        loadout: dB
      } = BB;
      const {
        t: VB
      } = (0, kB.z)();
      return TB.loadoutCostCoins <= 0 && 0 === TB.loadoutCostParts.length ? (0, sB.jsx)("span", {
        className: "LoadoutCost",
        children: VB(`${MB}:loadoutFree`)
      }) : (0, sB.jsxs)("span", {
        className: "LoadoutCost",
        children: [TB.loadoutCostCoins > 0 && (0, sB.jsx)(KB, {
          itemName: zB,
          amount: TB.loadoutCostCoins,
          Dg: dB.loadoutCoins
        }), TB.loadoutCostParts.map((BB => {
          const TB = dT(dB, BB.loadoutPartCurrency);
          return (0, sB.jsx)(KB, {
            itemName: TB.loadoutHeldPartItem,
            amount: BB.loadoutPartAmount,
            Dg: TB.loadoutHeldPartAmount
          }, BB.loadoutPartCurrency)
        }))]
      })
    }
    const UT = {
      loadoutStatFireRate: `${MB}:loadoutUnitPerMinute`,
      loadoutStatReload: `${MB}:loadoutUnitSeconds`,
      loadoutStatResupply: `${MB}:loadoutUnitSeconds`
    };

    function FT(BB) {
      return "loadoutStatPotency" === BB.loadoutStatKind ? (0, eB.U)(BB.loadoutStatValue) : String(BB.loadoutStatValue)
    }

    function KT(BB) {
      var TB;
      let {
        option: dB
      } = BB;
      const {
        t: VB
      } = (0, kB.z)(), yB = dB.loadoutOptionTiers, pB = null === (TB = yB[0]) || void 0 === TB ? void 0 : TB.loadoutTierStats.map((BB => BB.loadoutStatKind));
      if (!pB || 0 === pB.length) return null;
      const lB = dB.loadoutOptionOwnedTier,
        JB = (BB, TB) => {
          var dB;
          return null === (dB = yB[BB]) || void 0 === dB ? void 0 : dB.loadoutTierStats.find((BB => BB.loadoutStatKind === TB))
        };
      return (0, sB.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, sB.jsx)("thead", {
          children: (0, sB.jsxs)("tr", {
            children: [(0, sB.jsx)("th", {}), yB.map(((BB, TB) => (0, sB.jsx)("th", {
              className: gB()({
                Current: TB + 1 === lB,
                Next: TB === lB
              }),
              children: VB(`${MB}:loadoutTier`, {
                tier: (0, eB.U)(TB + 1)
              })
            }, TB)))]
          })
        }), (0, sB.jsx)("tbody", {
          children: pB.map((BB => {
            const TB = UT[BB];
            return (0, sB.jsxs)("tr", {
              children: [(0, sB.jsxs)("th", {
                scope: "row",
                children: [VB(`${MB}:${BB}`), TB && (0, sB.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: VB(TB)
                })]
              }), yB.map(((TB, dB) => {
                const VB = JB(dB, BB),
                  yB = dB > 0 ? JB(dB - 1, BB) : void 0,
                  pB = VB && yB ? VB.loadoutStatValue - yB.loadoutStatValue : 0,
                  YB = zT.has(BB) ? pB < 0 : pB > 0,
                  oB = dB === lB;
                return (0, sB.jsxs)("td", {
                  className: gB()({
                    Current: dB + 1 === lB,
                    Next: oB,
                    Gain: YB,
                    Owned: dB < lB
                  }),
                  children: [oB && YB && (0, sB.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: pB < 0 ? "\u25bc" : "\u25b2"
                  }), VB ? FT(VB) : "-"]
                }, dB)
              }))]
            }, BB)
          }))
        })]
      })
    }

    function rT(BB) {
      let {
        view: TB,
        controller: dB,
        slot: VB,
        option: yB
      } = BB;
      const {
        t: pB
      } = (0, kB.z)(), lB = TB.loadout, JB = yB.loadoutOptionOwnedTier, YB = yB.loadoutOptionTiers.length, gB = VB.loadoutSlotEquippedId === yB.loadoutOptionId, oB = JB < YB ? yB.loadoutOptionTiers[JB].loadoutTierCost : null, LB = null !== oB && TT(lB, oB), OB = yB.loadoutOptionId, uB = NT();
      return (0, sB.jsxs)(sB.Fragment, {
        children: [(0, sB.jsx)(cT, {
          icon: yB.loadoutOptionIcon,
          name: yB.loadoutOptionName,
          status: 0 === JB ? pB(`${MB}:loadoutLocked`) : YB > 1 ? pB(`${MB}:loadoutTier`, {
            tier: (0, eB.U)(JB)
          }) : null,
          locked: 0 === JB,
          equipped: gB
        }), (0, sB.jsx)("p", {
          className: "BoardDescription",
          children: yB.loadoutOptionDescription
        }), (0, sB.jsx)(KT, {
          option: yB
        }), (0, sB.jsxs)("div", {
          ref: uB("act", OB),
          className: "BoardActions",
          children: [null !== oB && (0, sB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, sB.jsx)(wT, {
              cost: oB,
              loadout: lB
            }), (0, sB.jsx)(DB.k, {
              disabled: !LB || TB.pending,
              onClick: () => {
                dB.act(0 === JB ? "loadoutUnlock" : "loadoutUpgrade", OB)
              },
              children: 0 === JB ? pB(`${MB}:loadoutUnlock`) : pB(`${MB}:loadoutUpgrade`, {
                tier: (0, eB.U)(JB + 1)
              })
            })]
          }), null === oB && YB > 1 && (0, sB.jsx)("span", {
            className: "BoardHint",
            children: pB(`${MB}:loadoutMaxed`)
          }), JB > 0 && !gB && (0, sB.jsx)(DB.d, {
            disabled: TB.pending,
            onClick: () => {
              dB.act("loadoutEquip", OB)
            },
            children: pB(`${MB}:loadoutEquip`)
          })]
        })]
      })
    }

    function IT(BB) {
      let {
        view: TB,
        controller: dB,
        perk: VB
      } = BB;
      const {
        t: yB
      } = (0, kB.z)(), pB = TB.loadout, lB = yT(pB), JB = VB.loadoutPerkId, YB = NT();
      return (0, sB.jsxs)(sB.Fragment, {
        children: [(0, sB.jsx)(cT, {
          icon: VB.loadoutPerkIcon,
          name: VB.loadoutPerkName,
          status: VB.loadoutPerkOwned ? null : yB(`${MB}:loadoutLocked`),
          locked: !VB.loadoutPerkOwned,
          equipped: VB.loadoutPerkEquipped
        }), (0, sB.jsx)("p", {
          className: "BoardDescription",
          children: VB.loadoutPerkDescription
        }), (0, sB.jsxs)("div", {
          ref: YB("act", JB),
          className: "BoardActions",
          children: [!VB.loadoutPerkOwned && (0, sB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, sB.jsx)(wT, {
              cost: VB.loadoutPerkCost,
              loadout: pB
            }), (0, sB.jsx)(DB.k, {
              disabled: !TT(pB, VB.loadoutPerkCost) || TB.pending,
              onClick: () => {
                dB.act("loadoutUnlock", JB)
              },
              children: yB(`${MB}:loadoutUnlock`)
            })]
          }), VB.loadoutPerkOwned && !VB.loadoutPerkEquipped && (0, sB.jsx)(DB.d, {
            disabled: lB || TB.pending,
            onClick: () => {
              dB.act("loadoutEquip", JB)
            },
            children: yB(`${MB}:loadoutEquip`)
          }), VB.loadoutPerkOwned && !VB.loadoutPerkEquipped && lB && (0, sB.jsx)("span", {
            className: "BoardHint",
            children: yB(`${MB}:loadoutSocketsFullHint`)
          }), VB.loadoutPerkEquipped && (0, sB.jsx)(DB.T, {
            disabled: TB.pending,
            onClick: () => {
              dB.act("loadoutUnequip", JB)
            },
            children: yB(`${MB}:loadoutUnequip`)
          })]
        })]
      })
    }

    function cT(BB) {
      let {
        icon: TB,
        name: dB,
        status: VB,
        locked: yB,
        equipped: pB
      } = BB;
      const {
        t: lB
      } = (0, kB.z)();
      return (0, sB.jsxs)(SB, {
        icon: (0, sB.jsx)(UB, {
          itemName: TB
        }),
        name: dB,
        children: [null !== VB && (0, sB.jsx)("span", {
          className: gB()("LoadoutStatusText", {
            Locked: yB
          }),
          children: VB
        }), pB && (0, sB.jsx)("span", {
          className: "BoardBadge",
          children: lB(`${MB}:loadoutEquippedBadge`)
        })]
      })
    }

    function ST(BB) {
      let {
        view: TB,
        controller: dB
      } = BB;
      const VB = TB.loadout;
      if ("loadoutPerks" === TB.slot) {
        const BB = VB.loadoutPerks.find((BB => BB.loadoutPerkId === TB.selectedId));
        return (0, sB.jsx)("section", {
          className: "BoardDetail",
          children: BB && (0, sB.jsx)(IT, {
            view: TB,
            controller: dB,
            perk: BB
          })
        })
      }
      const yB = VT(VB, TB.slot),
        pB = yB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === TB.selectedId));
      return (0, sB.jsx)("section", {
        className: "BoardDetail",
        children: pB && (0, sB.jsx)(rT, {
          view: TB,
          controller: dB,
          slot: yB,
          option: pB
        })
      })
    }

    function PT(BB) {
      let {
        owned: TB,
        total: dB
      } = BB;
      return dB <= 1 ? null : (0, sB.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: dB
        }, ((BB, dB) => (0, sB.jsx)("span", {
          className: gB()("LoadoutPip", {
            Filled: dB < TB
          })
        }, dB)))
      })
    }

    function QT(BB) {
      let {
        view: TB,
        controller: dB
      } = BB;
      const {
        t: VB
      } = (0, kB.z)(), yB = TB.loadout, pB = NT();
      return (0, sB.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": VB(`${MB}:loadoutKit`),
        children: [yB.loadoutSlots.map((BB => {
          const yB = BB.loadoutSlotOptions.find((TB => TB.loadoutOptionId === BB.loadoutSlotEquippedId));
          return (0, sB.jsxs)("button", {
            ref: pB("section", BB.loadoutSlotKind),
            type: "button",
            className: gB()("LoadoutKitSlot", {
              Selected: TB.slot === BB.loadoutSlotKind
            }),
            onClick: () => {
              dB.selectSlot(BB.loadoutSlotKind)
            },
            children: [(0, sB.jsx)("span", {
              className: "LoadoutKitIcon",
              children: yB && (0, sB.jsx)(UB, {
                itemName: yB.loadoutOptionIcon
              })
            }), (0, sB.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, sB.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, sB.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: VB(vT[BB.loadoutSlotKind])
                }), yB && (0, sB.jsx)(PT, {
                  owned: yB.loadoutOptionOwnedTier,
                  total: yB.loadoutOptionTiers.length
                })]
              }), (0, sB.jsx)("span", {
                className: "LoadoutKitName",
                children: null === yB || void 0 === yB ? void 0 : yB.loadoutOptionName
              })]
            })]
          }, BB.loadoutSlotKind)
        })), (0, sB.jsx)(RT, {
          view: TB,
          controller: dB
        })]
      })
    }

    function RT(BB) {
      let {
        view: TB,
        controller: dB
      } = BB;
      const {
        t: VB
      } = (0, kB.z)(), yB = TB.loadout, pB = yB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)), lB = NT();
      return (0, sB.jsxs)("button", {
        ref: lB("section", "loadoutPerks"),
        type: "button",
        className: gB()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === TB.slot
        }),
        onClick: () => {
          dB.selectSlot("loadoutPerks")
        },
        children: [(0, sB.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, sB.jsx)("span", {
            className: "LoadoutKitLabel",
            children: VB(vT.loadoutPerks)
          }), (0, sB.jsx)("span", {
            className: "LoadoutPerkCount",
            children: VB(`${MB}:loadoutPerkCount`, {
              equipped: String(pB.length),
              max: String(yB.loadoutMaxPerks)
            })
          })]
        }), (0, sB.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: yB.loadoutMaxPerks
          }, ((BB, TB) => {
            const dB = pB[TB];
            return (0, sB.jsxs)("span", {
              className: gB()("LoadoutSocket", {
                Filled: dB,
                Empty: !dB
              }),
              children: [(0, sB.jsx)("span", {
                className: "LoadoutSocketWell",
                children: dB && (0, sB.jsx)(UB, {
                  itemName: dB.loadoutPerkIcon
                })
              }), (0, sB.jsx)("span", {
                className: "LoadoutSocketName",
                children: dB ? dB.loadoutPerkName : VB(`${MB}:loadoutPerkSocketEmpty`)
              })]
            }, TB)
          }))
        })]
      })
    }

    function aT(BB) {
      let {
        icon: TB,
        name: dB,
        selected: VB,
        equipped: yB,
        locked: pB,
        ownedTier: lB,
        tiers: JB,
        buttonRef: YB,
        onSelect: gB
      } = BB;
      const {
        t: oB
      } = (0, kB.z)();
      return (0, sB.jsxs)(cB, {
        icon: (0, sB.jsx)(UB, {
          itemName: TB
        }),
        name: dB,
        selected: VB,
        locked: pB,
        buttonRef: YB,
        onSelect: gB,
        children: [yB && (0, sB.jsx)("span", {
          className: "BoardBadge",
          children: oB(`${MB}:loadoutEquippedBadge`)
        }), pB && (0, sB.jsx)("span", {
          className: "BoardBadge Muted",
          children: oB(`${MB}:loadoutLocked`)
        }), !pB && (0, sB.jsx)(PT, {
          owned: lB,
          total: JB
        })]
      })
    }

    function ZT(BB) {
      let {
        view: TB,
        controller: dB
      } = BB;
      const VB = TB.loadout,
        yB = NT();
      if ("loadoutPerks" === TB.slot) return (0, sB.jsx)("div", {
        className: "BoardTiles",
        children: VB.loadoutPerks.map((BB => (0, sB.jsx)(aT, {
          icon: BB.loadoutPerkIcon,
          name: BB.loadoutPerkName,
          selected: TB.selectedId === BB.loadoutPerkId,
          equipped: BB.loadoutPerkEquipped,
          locked: !BB.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: yB("dO", BB.loadoutPerkId),
          onSelect: () => {
            dB.select(BB.loadoutPerkId)
          }
        }, BB.loadoutPerkId)))
      });
      const pB = VT(VB, TB.slot);
      return (0, sB.jsx)("div", {
        className: "BoardTiles",
        children: pB.loadoutSlotOptions.map((BB => (0, sB.jsx)(aT, {
          icon: BB.loadoutOptionIcon,
          name: BB.loadoutOptionName,
          selected: TB.selectedId === BB.loadoutOptionId,
          equipped: pB.loadoutSlotEquippedId === BB.loadoutOptionId,
          locked: 0 === BB.loadoutOptionOwnedTier,
          ownedTier: BB.loadoutOptionOwnedTier,
          tiers: BB.loadoutOptionTiers.length,
          buttonRef: yB("dO", BB.loadoutOptionId),
          onSelect: () => {
            dB.select(BB.loadoutOptionId)
          }
        }, BB.loadoutOptionId)))
      })
    }

    function XT(BB) {
      let {
        loadout: TB
      } = BB;
      return (0, sB.jsx)(PB, {
        coins: TB.loadoutCoins,
        children: TB.loadoutHeldParts.filter((BB => BB.loadoutHeldPartAmount > 0)).map((BB => (0, sB.jsx)(KB, {
          itemName: BB.loadoutHeldPartItem,
          amount: BB.loadoutHeldPartAmount
        }, BB.loadoutHeldPartCurrency)))
      })
    }

    function WT(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, oB.f)(LT, TB.getSnapshot()),
        {
          t: VB
        } = (0, kB.z)();
      if (null === dB.loadout) return null;
      const yB = dB.notice;
      return (0, sB.jsx)(sT, {
        view: dB,
        onDismiss: TB.dismiss,
        children: (0, sB.jsxs)(wB, {
          open: dB.open,
          onDismiss: TB.dismiss,
          title: VB(`${MB}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, sB.jsx)(XT, {
            loadout: dB.loadout
          }),
          statusRefused: null === yB || void 0 === yB ? void 0 : yB.loadoutNoticeRefused,
          status: (0, sB.jsxs)(sB.Fragment, {
            children: [(0, sB.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: VB(`${MB}:loadoutRadioBadge`)
            }), null !== yB && VB(`${MB}:${yB.loadoutNoticeKey}`, {
              name: yB.loadoutNoticeName,
              tier: (0, eB.U)(yB.loadoutNoticeTier),
              max: String(dB.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, sB.jsx)(QT, {
            view: dB,
            controller: TB
          }), (0, sB.jsx)(ZT, {
            view: dB,
            controller: TB
          }), (0, sB.jsx)(ST, {
            view: dB,
            controller: TB
          })]
        })
      })
    }

    function hT(BB, TB, dB) {
      const VB = BB.locatorEntries.find((BB => BB.locatorEntryId === dB));
      if (!VB) return null;
      const yB = VB.locatorEntryName;
      if ("locatorDisarm" === TB) return VB.locatorEntryArmed ? {
        board: CT(BB, null),
        notice: GT("locatorNoticeDisarmed", yB)
      } : null;
      if ("locatorArm" === TB) return VB.locatorEntryOwned && !VB.locatorEntryArmed ? {
        board: CT(BB, dB),
        notice: GT("locatorNoticeArmed", yB)
      } : null;
      if (VB.locatorEntryOwned || BB.locatorCoins < VB.locatorEntryPrice) return null;
      const pB = CT({
        ...BB,
        locatorCoins: BB.locatorCoins - VB.locatorEntryPrice
      }, dB);
      return {
        board: {
          ...pB,
          locatorEntries: pB.locatorEntries.map((BB => BB.locatorEntryId === dB ? {
            ...BB,
            locatorEntryOwned: !0
          } : BB))
        },
        notice: GT("locatorNoticeBought", yB)
      }
    }

    function CT(BB, TB) {
      return {
        ...BB,
        locatorEntries: BB.locatorEntries.map((BB => {
          const dB = BB.locatorEntryId === TB;
          return BB.locatorEntryArmed === dB ? BB : {
            ...BB,
            locatorEntryArmed: dB
          }
        }))
      }
    }

    function GT(BB, TB) {
      return {
        locatorNoticeKey: BB,
        locatorNoticeRefused: !1,
        locatorNoticeName: TB
      }
    }
    const qT = "containmentLocatorView";
    class xT extends BT {
      constructor(BB, TB, dB, VB) {
        super(BB, TB, dB, VB, "locator", hT), this.snapshot = this.buildSnapshot()
      }
      messageOpens(BB) {
        return BB.locatorMessageOpens
      }
      messageNotice(BB) {
        return BB.locatorNotice
      }
      openingSelection(BB) {
        var TB;
        const dB = BB.locatorEntries;
        return (null !== (TB = dB.find((BB => BB.locatorEntryArmed))) && void 0 !== TB ? TB : dB[0]).locatorEntryId
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
    const jT = {
        locatorContained: `${MB}:locatorFlavourContained`,
        locatorEncountered: `${MB}:locatorFlavourEncountered`,
        locatorUnseen: `${MB}:locatorFlavourUnseen`
      },
      AT = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${MB}:locatorAttunedNormal`,
        codexHardOnly: `${MB}:locatorAttunedHard`
      };

    function bT() {
      return (0, sB.jsx)(sB.Fragment, {
        children: Array.from({
          length: 5
        }, ((BB, TB) => (0, sB.jsx)("span", {
          className: "LocatorFly",
          children: (0, sB.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, TB)))
      })
    }

    function nT(BB) {
      let {
        entry: TB
      } = BB;
      const {
        t: dB
      } = (0, kB.z)();
      return TB.locatorEntryArmed ? (0, sB.jsx)("span", {
        className: "BoardBadge Armed",
        children: dB(`${MB}:locatorArmedBadge`)
      }) : TB.locatorEntryOwned ? (0, sB.jsx)("span", {
        className: "BoardBadge",
        children: dB(`${MB}:locatorOwnedBadge`)
      }) : null
    }

    function eT(BB) {
      let {
        entry: TB,
        coins: dB,
        inTile: VB = !1
      } = BB;
      return (0, sB.jsx)(KB, {
        itemName: zB,
        amount: TB.locatorEntryPrice,
        Dg: dB,
        inTile: VB
      })
    }

    function Bd(BB) {
      let {
        view: TB,
        controller: dB,
        entry: VB
      } = BB;
      const {
        t: yB
      } = (0, kB.z)(), pB = VB.locatorEntryId, lB = TB.locators.locatorEntries.find((BB => BB.locatorEntryArmed && BB !== VB));
      return (0, sB.jsxs)("div", {
        className: "BoardActions",
        children: [VB.locatorEntryArmed && (0, sB.jsx)(DB.T, {
          disabled: TB.pending,
          onClick: () => {
            dB.act("locatorDisarm", pB)
          },
          children: yB(`${MB}:locatorDisarm`)
        }), VB.locatorEntryOwned && !VB.locatorEntryArmed && (0, sB.jsx)(DB.d, {
          disabled: TB.pending,
          onClick: () => {
            dB.act("locatorArm", pB)
          },
          children: yB(`${MB}:locatorArm`)
        }), !VB.locatorEntryOwned && (0, sB.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, sB.jsx)(eT, {
            entry: VB,
            coins: TB.locators.locatorCoins
          }), (0, sB.jsx)(DB.k, {
            disabled: TB.locators.locatorCoins < VB.locatorEntryPrice || TB.pending,
            onClick: () => {
              dB.act("locatorBuy", pB)
            },
            children: yB(`${MB}:locatorBuy`)
          })]
        }), lB && !VB.locatorEntryArmed && (0, sB.jsx)("span", {
          className: "BoardHint",
          children: yB(`${MB}:locatorReplacesHint`, {
            name: lB.locatorEntryName
          })
        })]
      })
    }

    function Td(BB) {
      let {
        entry: TB
      } = BB;
      return "locatorUnseen" === TB.locatorEntryStanding ? (0, sB.jsx)(UB, {
        itemName: "Compass"
      }) : (0, sB.jsx)(FB, {
        anomalyId: TB.locatorEntryId,
        caught: "locatorContained" === TB.locatorEntryStanding
      })
    }

    function dd(BB) {
      let {
        view: TB,
        controller: dB,
        entry: VB
      } = BB;
      const {
        t: yB
      } = (0, kB.z)(), pB = AT[VB.locatorEntryDifficulty];
      return (0, sB.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, sB.jsxs)("div", {
          className: gB()("LocatorLabel", {
            Armed: VB.locatorEntryArmed
          }),
          children: [(0, sB.jsx)(SB, {
            icon: (0, sB.jsx)(Td, {
              entry: VB
            }),
            name: yB(`${MB}:locatorName`, {
              name: VB.locatorEntryName
            }),
            children: (0, sB.jsx)(nT, {
              entry: VB
            })
          }), (0, sB.jsx)("p", {
            className: "BoardDescription",
            children: yB(VB.locatorEntryArmed ? `${MB}:locatorFlavourArmed` : jT[VB.locatorEntryStanding])
          }), null !== pB && (0, sB.jsx)("p", {
            className: "LocatorAttuned",
            children: yB(pB)
          }), (0, sB.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: yB(`${MB}:locatorUsage`)
          })]
        }), (0, sB.jsx)(Bd, {
          view: TB,
          controller: dB,
          entry: VB
        })]
      })
    }

    function Vd(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, oB.f)(qT, TB.getSnapshot()),
        {
          t: VB
        } = (0, kB.z)(),
        yB = dB.locators;
      if (null === yB) return null;
      const pB = yB.locatorEntries.find((BB => BB.locatorEntryId === dB.selectedId)),
        lB = dB.notice;
      return (0, sB.jsxs)(wB, {
        open: dB.open,
        onDismiss: TB.dismiss,
        title: VB(`${MB}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, sB.jsx)(bT, {}),
        headerExtra: (0, sB.jsx)(PB, {
          coins: yB.locatorCoins
        }),
        statusRefused: null === lB || void 0 === lB ? void 0 : lB.locatorNoticeRefused,
        status: (0, sB.jsxs)(sB.Fragment, {
          children: [(0, sB.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: VB(`${MB}:locatorKeeperName`)
          }), null !== lB && VB(`${MB}:${lB.locatorNoticeKey}`, {
            name: lB.locatorNoticeName
          })]
        }),
        children: [(0, sB.jsx)("div", {
          className: "BoardTiles",
          children: yB.locatorEntries.map((BB => (0, sB.jsxs)(cB, {
            icon: (0, sB.jsx)(Td, {
              entry: BB
            }),
            name: BB.locatorEntryName,
            selected: BB === pB,
            locked: !1,
            className: gB()("LocatorTag", {
              Armed: BB.locatorEntryArmed
            }),
            onSelect: () => {
              TB.select(BB.locatorEntryId)
            },
            children: [(0, sB.jsx)(nT, {
              entry: BB
            }), !BB.locatorEntryOwned && (0, sB.jsx)(eT, {
              entry: BB,
              coins: yB.locatorCoins,
              inTile: !0
            })]
          }, BB.locatorEntryId)))
        }), (0, sB.jsx)(dd, {
          view: dB,
          controller: TB,
          entry: pB
        })]
      })
    }

    function yd(BB) {
      let {
        loadout: TB,
        codex: dB,
        locator: VB
      } = BB;
      return (0, sB.jsxs)(sB.Fragment, {
        children: [(0, sB.jsx)(WT, {
          controller: TB
        }), (0, sB.jsx)(nB, {
          controller: dB
        }), (0, sB.jsx)(Vd, {
          controller: VB
        })]
      })
    }
    var pd = dB(37506);
    class ld {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = BB, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new pd.d({
          spacingMs: 0,
          now: TB
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(BB, TB) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, TB(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(BB), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
    }
    var Jd = dB(37493);
    const Yd = new Map([
      ["npc_general", uT],
      ["npc_tentacle_guy", Jd]
    ]);

    function gd(BB) {
      const TB = Yd.get(BB);
      if (void 0 === TB) return null;
      const dB = document.createElement("img");
      return dB.src = TB, dB.alt = "", dB.draggable = !1, dB.style.imageRendering = "pixelated", dB
    }
    const od = function() {
      let BB, TB = !1,
        dB = null,
        YB = null;
      const gB = [],
        oB = BB => {
          for (const TB of gB) TB !== BB && TB.close();
          (0, JB.o)()
        },
        kB = BB => {
          BB && (0, JB.h)()
        },
        LB = new ld((TB => {
          BB.sendCommand(TB)
        })),
        OB = new OT((BB => {
          lB.h.yH(LT, BB, !0)
        }), oB, kB, LB),
        DB = new aB((BB => {
          lB.h.yH(RB, BB, !0)
        }), oB, kB),
        uB = new xT((BB => {
          lB.h.yH(qT, BB, !0)
        }), oB, kB, LB);
      gB.push(OB, DB, uB);
      return {
        onCreate: TB => {
          BB = TB, dB = (0, JB.r)(null, {
            content: (0, VB.createElement)(yd, {
              loadout: OB,
              codex: DB,
              locator: uB
            }),
            onClose: () => {
              for (const BB of gB) BB.close()
            }
          }), YB = (0, pB.f)(gd)
        },
        onReceivedMessageFromServer: (BB, TB) => {
          "containmentLoadout" === BB ? OB.MD(TB) : "containmentLoadoutClose" === BB ? OB.isOpen() && (OB.close(), (0, JB.g)()) : "containmentCodex" === BB ? DB.MD(TB) : "containmentLocator" === BB && uB.MD(TB)
        },
        dL: () => {
          TB || yB.d.get("loadingOverlayVisible") || (TB = !0, BB.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var BB, TB;
          null === (BB = dB) || void 0 === BB || BB(), dB = null, null === (TB = YB) || void 0 === TB || TB(), YB = null;
          for (const dB of gB) dB.dispose();
          LB.dispose()
        }
      }
    }
  },
  35860: (BB, TB, dB) => {
    dB.d(TB, {
      C: () => KB,
      D: () => MB,
      G: () => SB,
      K: () => PB,
      O: () => QB,
      R: () => cB,
      T: () => RB,
      e: () => YB,
      g: () => UB,
      k: () => JB,
      o: () => IB,
      s: () => zB,
      w: () => tB,
      y: () => rB
    });
    var VB = dB(33);
    const yB = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      pB = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      lB = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      JB = pB.filter((BB => "docsButton" !== BB)),
      YB = lB.filter((BB => "aiHelperButton" !== BB)),
      gB = "codeEditorTutorials",
      oB = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      kB = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let LB = null,
      OB = null;
    const DB = new Set,
      uB = new Set;
    let HB = null;
    const EB = new Set,
      vB = new Set;

    function mB() {
      vB.forEach((BB => {
        BB()
      }))
    }

    function iB() {
      if (!LB) {
        const BB = VB.j.getItem(gB);
        LB = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof BB && null !== BB ? BB : {}
        }
      }
      return LB
    }

    function NB(BB) {
      const TB = iB();
      TB[BB] || (LB = {
        ...TB,
        [BB]: !0
      }, VB.j.setItem(gB, LB))
    }

    function tB(BB) {
      return "docsOverview" === BB ? pB : "aiHelperOverview" === BB ? lB : OB ? yB[OB] : []
    }

    function fB(BB) {
      return ("worldCodeButton" !== BB || !iB().worldCodeIntroShown) && !EB.has(BB)
    }

    function sB(BB) {
      var TB;
      return (null === (TB = HB) || void 0 === TB ? void 0 : TB.name) === BB ? HB.stepsDone : DB
    }

    function MB(BB, TB) {
      if (! function(BB) {
          return HB ? HB.name === BB : "welcome" === BB
        }(BB) || !fB(TB) || sB(BB).has(TB)) return !1;
      if (HB) return !0;
      const dB = oB[TB];
      return dB ? !iB()[dB] || uB.has(TB) : !iB()[kB[BB]]
    }

    function zB(BB) {
      var TB;
      return null !== (TB = tB(BB).find((TB => MB(BB, TB)))) && void 0 !== TB ? TB : null
    }

    function wB(BB) {
      var TB;
      NB(kB[BB]), (null === (TB = HB) || void 0 === TB ? void 0 : TB.name) === BB && (HB = null)
    }

    function UB(BB) {
      const TB = (HB ? [HB.name] : ["welcome", "docsOverview"]).find((TB => zB(TB) === BB));
      if (!TB) return;
      sB(TB).add(BB);
      const dB = oB[BB];
      dB && (NB(dB), HB || uB.add(BB)), null === zB(TB) && wB(TB), mB()
    }

    function FB(BB, TB) {
      const dB = tB(BB),
        VB = sB(BB);
      for (let yB = dB.indexOf(TB) - 1; yB >= 0; yB--)
        if (VB.has(dB[yB]) && fB(dB[yB])) return dB[yB];
      return null
    }

    function KB(BB, TB) {
      return null !== FB(BB, TB)
    }

    function rB(BB, TB) {
      const dB = FB(BB, TB);
      dB && (sB(BB).delete(dB), mB())
    }

    function IB(BB) {
      wB(BB), "welcome" === BB && tB("welcome").forEach((BB => {
        const TB = oB[BB];
        TB && NB(TB)
      })), mB()
    }

    function cB(BB) {
      HB = {
        name: BB,
        stepsDone: new Set
      }, mB()
    }

    function SB() {
      (HB || 0 !== DB.size || 0 !== uB.size) && (HB = null, DB.clear(), uB.clear(), mB())
    }

    function PB(BB, TB) {
      const dB = TB ? BB : OB === BB ? null : OB;
      dB !== OB && (OB = dB, mB())
    }

    function QB(BB, TB) {
      EB.has(BB) === TB && (TB ? EB.delete(BB) : EB.add(BB), mB())
    }

    function RB(BB) {
      return vB.add(BB), () => {
        vB.delete(BB)
      }
    }
  },
  38242: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38245: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38248: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38256: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38258: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38265: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38272: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38280: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38288: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38293: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38299: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38304: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38306: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38315: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38318: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38324: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38326: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38330: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38336: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38338: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37493: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);