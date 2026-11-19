export const id = 14;
export const ids = [14];
export const modules = {
  38612: (YY, rY, DY) => {
    var FY = {
      "./breach-zero-uncaught.webp": 38614,
      "./breach-zero.webp": 38622,
      "./brood-father-uncaught.webp": 38631,
      "./brood-father.webp": 38637,
      "./carousel-uncaught.webp": 38645,
      "./carousel.webp": 38648,
      "./deadlock-uncaught.webp": 38650,
      "./deadlock.webp": 38659,
      "./frost-revenant-uncaught.webp": 38663,
      "./frost-revenant.webp": 38670,
      "./hollow-choir-uncaught.webp": 38678,
      "./hollow-choir.webp": 38681,
      "./magma-warden-uncaught.webp": 38686,
      "./magma-warden.webp": 38694,
      "./patient-zero-uncaught.webp": 38698,
      "./patient-zero.webp": 38702,
      "./siege-engine-uncaught.webp": 38709,
      "./siege-engine.webp": 38717,
      "./warp-stalker-uncaught.webp": 38726,
      "./warp-stalker.webp": 38733
    };

    function AY(YY) {
      var rY = IY(YY);
      return DY(rY)
    }

    function IY(YY) {
      if (!DY.o(FY, YY)) {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }
      return FY[YY]
    }
    AY.keys = function() {
      return Object.keys(FY)
    }, AY.resolve = IY, YY.exports = AY, AY.id = 38612
  },
  36263: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => eY,
      d: () => lY,
      f: () => TY,
      j: () => yY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(76),
      OY = DY(1359),
      gY = DY(1437),
      aY = DY(1354),
      vY = DY(1284),
      uY = DY(1211),
      sY = DY(36268),
      iY = DY(1125);

    function yY(YY) {
      const [rY, DY] = (0, IY.useState)((() => (0, sY.o)(YY)));
      return (0, IY.useEffect)((() => (DY((0, sY.o)(YY)), (0, sY.O)((() => {
        DY((0, sY.o)(YY))
      })))), [YY]), rY
    }

    function QY(YY, rY) {
      "function" === typeof YY ? YY(rY) : YY && (YY.current = rY)
    }

    function oY(YY) {
      let {
        tutorial: rY,
        step: DY,
        enabled: FY = !0
      } = YY;
      const AY = yY(rY);
      return FY && AY === DY
    }

    function WY(YY, rY) {
      const DY = (0, sY.r)(YY),
        FY = DY.indexOf(rY);
      return !DY.slice(FY + 1).some((rY => (0, sY.B)(YY, rY)))
    }

    function EY(YY, rY, DY, FY) {
      let {
        tutorial: AY,
        step: IY,
        waitForClick: RY = !1,
        onPrevious: OY
      } = YY;
      const gY = rY && (0, sY.x)(AY, IY),
        aY = rY && !WY(AY, IY),
        uY = RY ? FY : DY;
      let iY = null;
      gY ? iY = () => {
        null === OY || void 0 === OY || OY(), (0, sY.v)(AY, IY)
      } : aY && (iY = () => {
        (0, sY.k)(AY)
      }), (0, vY.t)("popup", null !== uY && void 0 !== uY ? uY : DY, iY, rY && null !== uY, null, gY ? void 0 : "controller:menusSkipTutorial")
    }

    function mY(YY) {
      let {
        tutorial: rY,
        step: DY,
        text: FY,
        waitForClick: AY = !1,
        onPrevious: IY
      } = YY;
      const {
        t: RY
      } = (0, uY.C)(), OY = WY(rY, DY);
      return (0, iY.jsxs)(iY.Fragment, {
        children: [(0, iY.jsx)("div", {
          className: "TutorialStepText",
          children: FY
        }), (0, iY.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, sY.x)(rY, DY) && (0, iY.jsx)(gY.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === IY || void 0 === IY || IY(), (0, sY.v)(rY, DY)
            },
            children: RY("tutorial:back")
          }), !AY && (0, iY.jsx)(gY.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, sY.d)(DY)
            },
            padDefaultFocus: !0,
            children: RY(OY ? "tutorial:done" : "tutorial:next")
          }), !OY && (0, iY.jsx)(gY.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, sY.k)(rY)
            },
            children: RY("tutorial:skip")
          })]
        })]
      })
    }
    const VY = 6;

    function SY(YY) {
      let {
        rect: rY,
        margin: DY
      } = YY;
      const FY = Math.max(0, rY.top - DY),
        AY = rY.bottom + DY,
        IY = Math.max(0, rY.left - DY),
        RY = rY.right + DY;
      return (0, iY.jsxs)(iY.Fragment, {
        children: [(0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: FY
          }
        }), (0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: AY,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FY,
            left: 0,
            width: IY,
            height: AY - FY
          }
        }), (0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FY,
            left: RY,
            right: 0,
            height: AY - FY
          }
        })]
      })
    }

    function lY(YY) {
      let {
        target: rY,
        placement: DY,
        boxRef: FY,
        className: gY,
        spotlightMargin: vY = VY,
        children: uY
      } = YY;
      const {
        getArrowProps: sY,
        getTooltipProps: yY,
        setTooltipRef: QY,
        setTriggerRef: oY
      } = (0, OY.d)({
        placement: DY,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, vY]
      });
      (0, IY.useLayoutEffect)((() => {
        oY(rY)
      }), [rY, oY]);
      const WY = function(YY, rY) {
        const [DY, FY] = (0, IY.useState)(null);
        return (0, IY.useEffect)((() => {
          if (!rY || !YY) return void FY(null);
          let DY = 0,
            AY = null;
          const IY = () => {
            const rY = YY.getBoundingClientRect();
            AY && rY.left === AY.left && rY.top === AY.top && rY.width === AY.width && rY.height === AY.height || (AY = rY, FY(rY)), DY = requestAnimationFrame(IY)
          };
          return IY(), () => {
            cancelAnimationFrame(DY)
          }
        }), [YY, rY]), DY
      }(rY, !0);
      (0, IY.useEffect)((() => {
        null === rY || void 0 === rY || rY.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [rY]);
      const EY = (0, IY.useCallback)((YY => {
        QY(YY), FY && (FY.current = YY)
      }), [QY, FY]);
      return (0, RY.createPortal)((0, iY.jsxs)(iY.Fragment, {
        children: [WY && (0, iY.jsx)(SY, {
          rect: WY,
          margin: vY
        }), (0, iY.jsxs)("div", {
          ref: EY,
          ...yY({
            className: AY()("tooltip-container SmallTextLight TutorialStep", gY)
          }),
          children: [uY, (0, iY.jsx)("div", {
            ...sY({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, aY.h)())
    }
    const TY = (0, IY.forwardRef)((function(YY, rY) {
      let {
        placement: DY = "right",
        children: FY,
        ...AY
      } = YY;
      const RY = oY(AY),
        OY = (0, IY.useRef)(null),
        gY = (0, IY.useRef)(null);
      EY(AY, RY, OY, gY);
      const [aY, vY] = (0, IY.useState)(null), uY = FY.ref, sY = (0, IY.useCallback)((YY => {
        gY.current = YY, vY(YY), QY(rY, YY), QY(uY, YY)
      }), [rY, uY]);
      return (0, iY.jsxs)(iY.Fragment, {
        children: [(0, IY.cloneElement)(FY, {
          ref: sY
        }), RY && (0, iY.jsx)(lY, {
          target: aY,
          placement: DY,
          boxRef: OY,
          children: (0, iY.jsx)(mY, {
            ...AY
          })
        })]
      })
    }));

    function eY(YY) {
      const rY = oY(YY),
        DY = (0, IY.useRef)(null);
      return EY(YY, rY, DY, null), rY ? (0, RY.createPortal)((0, iY.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, iY.jsx)("div", {
          ref: DY,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, iY.jsx)(mY, {
            ...YY
          })
        })
      }), (0, aY.h)()) : null
    }
  },
  37926: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    const FY = 4,
      AY = 12e3,
      IY = 1e3;
    class RY {
      constructor() {
        let {
          limit: YY = FY,
          windowMs: rY = AY,
          spacingMs: DY = IY,
          now: RY = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = YY, this.windowMs = rY, this.spacingMs = DY, this.now = RY
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const YY of this.priority) YY.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const YY = this.now();
        this.sent.push(YY), this.lastSentAt = YY, this.schedule(), this.notify()
      }
      addPriority(YY) {
        return this.priority.add(YY), () => {
          this.priority.delete(YY)
        }
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const YY of this.priority)
          if (YY.waiting()) return !0;
        return !1
      }
      prune() {
        const YY = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= YY;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const YY = this.now(),
          rY = this.lastSentAt + this.spacingMs,
          DY = Math.min(rY > YY ? rY : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        DY !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, DY - YY)))
      }
      notify() {
        for (const YY of this.listeners) YY()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  37910: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      constructor(YY, rY, DY) {
        this.vo = YY, this.beforeOpen = rY, this.afterClose = DY, this.open = !1, this.Ky = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Ky && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(YY) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(YY)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Ky = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Ky || (this.snapshot = this.buildSnapshot(), this.vo(this.snapshot))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  38609: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => vD
    });
    var FY = DY(61);
    var AY = DY(19),
      IY = DY(1786),
      RY = DY(25),
      OY = DY(36032),
      gY = DY(1092),
      aY = DY.n(gY),
      vY = DY(1430),
      uY = DY(1211),
      sY = DY(4086),
      iY = DY(1343),
      yY = DY(1437),
      QY = DY(1793),
      oY = DY(1354),
      WY = DY(1778),
      EY = DY(1834),
      mY = DY(229);
    const VY = DY(38612),
      SY = Object.fromEntries(VY.keys().map((YY => [YY.replace(/^\.\/(.*)\.webp$/, "$1"), VY(YY)]))),
      lY = new Set;

    function TY(YY, rY) {
      const DY = rY ? YY : `${YY}-uncaught`,
        FY = (0, mY.c)(SY, DY);
      return void 0 !== FY || lY.has(DY) || (lY.add(DY), console.warn(`Containment Breach has no mugshot ${DY}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), FY
    }
    var eY = DY(1125);
    const NY = "containmentBreach",
      BY = "Gold Coin";

    function cY(YY) {
      let {
        open: rY,
        onDismiss: DY,
        title: FY,
        className: AY,
        decor: IY,
        headerExtra: RY,
        status: OY,
        statusRefused: gY = !1,
        children: vY
      } = YY;
      const uY = `${AY}Title`;
      return (0, eY.jsx)(sY.e, {
        show: rY,
        close: DY,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, eY.jsxs)("section", {
          className: aY()("ContainmentBoardPanel", AY),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": uY,
          children: [IY && (0, eY.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: IY
          }), (0, eY.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, eY.jsx)("h2", {
              id: uY,
              className: "VisuallyHidden",
              children: FY
            }), RY, (0, eY.jsx)(yY.k, {
              onClick: DY
            })]
          }), (0, eY.jsx)("div", {
            className: "BoardBody",
            children: vY
          }), void 0 !== OY && (0, eY.jsx)("footer", {
            className: aY()("BoardStatus", {
              Refused: gY
            }),
            children: OY
          })]
        })
      })
    }

    function KY(YY) {
      let {
        itemName: rY
      } = YY;
      return (0, eY.jsx)(QY.c, {
        itemName: rY,
        amount: 0
      })
    }

    function HY(YY) {
      let {
        anomalyId: rY,
        caught: DY
      } = YY;
      const AY = (0, FY.useRef)(null);
      return (0, iY.b)(AY, !DY), (0, eY.jsx)("span", {
        ref: AY,
        className: aY()("BoardMugshot", {
          Uncaught: !DY
        }),
        children: (0, eY.jsx)("img", {
          src: TY(rY, DY),
          alt: "",
          draggable: !1
        })
      })
    }

    function zY(YY) {
      let {
        itemName: rY,
        amount: DY,
        ja: FY,
        inTile: AY = !1
      } = YY;
      return (0, eY.jsx)(oY.g, {
        delayShow: 200,
        hoverOnly: AY,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, eY.jsx)(CY, {
          itemName: rY,
          amount: DY,
          ja: FY
        }),
        children: (0, eY.jsxs)("span", {
          className: aY()("BoardChip", {
            Short: void 0 !== FY && FY < DY
          }),
          children: [(0, eY.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, eY.jsx)(KY, {
              itemName: rY
            })
          }), DY.toLocaleString()]
        })
      })
    }
    const ZY = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function CY(YY) {
      var rY;
      let {
        itemName: DY,
        amount: FY,
        ja: AY
      } = YY;
      const {
        t: IY
      } = (0, uY.C)(), RY = (0, EY.f)("itemInfo", (YY => YY[DY])), {
        lore: OY,
        droppedBy: gY
      } = function(YY) {
        if ("string" !== typeof YY) return {
          lore: YY,
          droppedBy: null
        };
        const rY = ZY.exec(YY);
        return null === rY ? {
          lore: YY,
          droppedBy: null
        } : {
          lore: "" === rY[1] ? void 0 : rY[1],
          droppedBy: rY[2]
        }
      }(null === RY || void 0 === RY ? void 0 : RY.description);
      return (0, eY.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, eY.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, eY.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, eY.jsx)(KY, {
              itemName: DY
            })
          }), (0, eY.jsx)(WY.b, {
            text: null !== (rY = null === RY || void 0 === RY ? void 0 : RY.displayName) && void 0 !== rY ? rY : DY,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== OY || null !== gY) && (0, eY.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== OY && (0, eY.jsx)(WY.b, {
            text: OY,
            className: "BoardChipTooltipDescription"
          }), null !== gY && (0, eY.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, eY.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: IY(`${NY}:chipDroppedBy`)
            }), gY]
          })]
        }), void 0 !== AY && (0, eY.jsxs)("div", {
          className: aY()("BoardChipTooltipHeld", {
            Short: AY < FY
          }),
          children: [(0, eY.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: IY(`${NY}:chipYouHave`)
          }), (0, eY.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, eY.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: AY.toLocaleString()
            }), ` / ${FY.toLocaleString()}`]
          }), (0, eY.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, eY.jsx)("span", {
              style: {
                width: (FY > 0 ? 100 * Math.min(1, AY / FY) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function fY(YY) {
      let {
        icon: rY,
        name: DY,
        selected: FY,
        locked: AY,
        className: IY,
        buttonRef: RY,
        onSelect: OY,
        children: gY
      } = YY;
      return (0, eY.jsxs)("button", {
        ref: RY,
        type: "button",
        className: aY()("BoardTile", IY, {
          Selected: FY,
          Locked: AY
        }),
        onClick: OY,
        children: [(0, eY.jsx)("span", {
          className: "BoardTileIcon",
          children: rY
        }), (0, eY.jsx)("span", {
          className: "BoardTileName",
          children: DY
        }), gY]
      })
    }

    function jY(YY) {
      let {
        icon: rY,
        name: DY,
        children: FY
      } = YY;
      return (0, eY.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, eY.jsx)("span", {
          className: "BoardDetailIcon",
          children: rY
        }), (0, eY.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, eY.jsx)("h3", {
            children: DY
          }), (0, eY.jsx)("span", {
            className: "BoardDetailStatus",
            children: FY
          })]
        })]
      })
    }

    function hY(YY) {
      let {
        coins: rY,
        children: DY
      } = YY;
      return (0, eY.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, eY.jsx)(zY, {
          itemName: BY,
          amount: rY
        }), DY]
      })
    }
    var dY = DY(37910);
    const JY = "containmentCodexView";
    class MY extends dY.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = YY => {
          this.selectedId = YY, this.emit()
        }
      }
      Cy(YY) {
        this.entries = YY.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const wY = {
        codexAnyDifficulty: `${NY}:codexNeedsAny`,
        codexNormalOnly: `${NY}:codexNeedsNormal`,
        codexHardOnly: `${NY}:codexNeedsHard`
      },
      bY = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      XY = {
        codexContained: `${NY}:codexContainedBadge`,
        codexEncountered: `${NY}:codexEncounteredBadge`,
        codexUnidentified: `${NY}:codexUnidentifiedBadge`
      },
      qY = ["94%", "81%", "88%", "46%", "72%"];

    function pY(YY) {
      let {
        entry: rY
      } = YY;
      const {
        t: DY
      } = (0, uY.C)();
      return (0, eY.jsx)("span", {
        className: aY()("BoardBadge", bY[rY.codexEntryState]),
        children: DY(XY[rY.codexEntryState])
      })
    }

    function kY(YY) {
      const {
        t: rY
      } = (0, uY.C)();
      return "codexUnidentified" === YY.codexEntryState ? rY(`${NY}:codexUnidentifiedName`) : YY.codexEntryName
    }

    function GY(YY) {
      let {
        entry: rY
      } = YY;
      return "codexUnidentified" === rY.codexEntryState ? (0, eY.jsx)(KY, {
        itemName: "Book"
      }) : (0, eY.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, eY.jsx)(HY, {
          anomalyId: rY.codexEntryId,
          caught: "codexContained" === rY.codexEntryState
        }), (0, eY.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function xY(YY) {
      let {
        entry: rY,
        selected: DY,
        onSelect: FY
      } = YY;
      const AY = "codexUnidentified" === rY.codexEntryState;
      return (0, eY.jsxs)(fY, {
        icon: (0, eY.jsx)(GY, {
          entry: rY
        }),
        name: kY(rY),
        selected: DY,
        locked: AY,
        className: aY()("CodexFolder", bY[rY.codexEntryState]),
        onSelect: () => {
          FY(rY.codexEntryId)
        },
        children: [!AY && (0, eY.jsx)(pY, {
          entry: rY
        }), AY && (0, eY.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function nY(YY) {
      let {
        count: rY
      } = YY;
      const DY = [];
      for (let FY = Math.min(rY, 25); FY > 0; FY -= 5) DY.push(Math.min(FY, 5));
      return (0, eY.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: DY.map(((YY, rY) => (0, eY.jsx)("span", {
          className: aY()("CodexTallyGroup", {
            Gate: 5 === YY
          }),
          children: Array.from({
            length: Math.min(YY, 4)
          }, ((YY, rY) => (0, eY.jsx)("span", {
            className: "CodexTallyMark"
          }, rY)))
        }, rY)))
      })
    }

    function PY(YY) {
      let {
        contained: rY,
        total: DY
      } = YY;
      const {
        t: FY
      } = (0, uY.C)();
      return (0, eY.jsxs)("div", {
        className: "CodexProgress",
        children: [FY(`${NY}:codexProgress`, {
          contained: String(rY),
          total: String(DY)
        }), (0, eY.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, eY.jsx)("span", {
            style: {
              width: rY / DY * 100 + "%"
            }
          })
        })]
      })
    }

    function UY(YY) {
      let {
        entry: rY,
        fileNumber: DY
      } = YY;
      const {
        t: FY
      } = (0, uY.C)(), AY = "codexContained" === rY.codexEntryState;
      return (0, eY.jsx)("section", {
        className: "BoardDetail",
        children: (0, eY.jsxs)("article", {
          className: aY()("CodexDossier", bY[rY.codexEntryState]),
          children: [(0, eY.jsx)("span", {
            className: "CodexFileNumber",
            children: FY(`${NY}:codexFileNumber`, {
              number: String(DY).padStart(3, "0")
            })
          }), (0, eY.jsx)(jY, {
            icon: (0, eY.jsx)(GY, {
              entry: rY
            }),
            name: kY(rY),
            children: (0, eY.jsx)(pY, {
              entry: rY
            })
          }), AY && (0, eY.jsxs)(eY.Fragment, {
            children: [(0, eY.jsx)("p", {
              className: "BoardDescription",
              children: rY.codexEntryLore
            }), (0, eY.jsxs)("p", {
              className: "CodexTally",
              children: [FY(`${NY}:codexContainments`, {
                count: String(rY.codexEntryContainedCount)
              }), (0, eY.jsx)(nY, {
                count: rY.codexEntryContainedCount
              })]
            }), (0, eY.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: FY(`${NY}:codexContainedBadge`)
            })]
          }), !AY && (0, eY.jsxs)(eY.Fragment, {
            children: [(0, eY.jsxs)("div", {
              className: "CodexRedaction",
              children: [qY.map((YY => (0, eY.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: YY
                }
              }, YY))), (0, eY.jsx)("p", {
                className: "CodexRedacted",
                children: FY(`${NY}:codexRedacted`)
              })]
            }), "" !== rY.codexEntryHint && (0, eY.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, eY.jsx)("h4", {
                children: FY(`${NY}:codexHintLabel`)
              }), (0, eY.jsx)("p", {
                children: rY.codexEntryHint
              })]
            }), (0, eY.jsx)("p", {
              className: "CodexClearance",
              children: FY(wY[rY.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function LY(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, vY.k)(JY, rY.getSnapshot()),
        {
          t: FY
        } = (0, uY.C)();
      if (0 === DY.entries.length) return null;
      const AY = DY.entries.find((YY => YY.codexEntryId === DY.selectedId)),
        IY = DY.entries.filter((YY => "codexContained" === YY.codexEntryState)).length,
        RY = DY.entries.map((YY => YY.codexEntryId)).sort().indexOf(AY.codexEntryId) + 1;
      return (0, eY.jsxs)(cY, {
        open: DY.open,
        onDismiss: rY.dismiss,
        title: FY(`${NY}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, eY.jsx)(PY, {
          contained: IY,
          total: DY.entries.length
        }),
        children: [(0, eY.jsx)("div", {
          className: "BoardTiles",
          children: DY.entries.map((YY => (0, eY.jsx)(xY, {
            entry: YY,
            selected: YY === AY,
            onSelect: rY.select
          }, YY.codexEntryId)))
        }), (0, eY.jsx)(UY, {
          entry: AY,
          fileNumber: RY
        })]
      })
    }
    var tY = DY(341);
    class Yr extends dY.c {
      constructor(YY, rY, DY, FY, AY, IY) {
        super(YY, rY, DY), this.pacer = FY, this.command = AY, this.predict = IY, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = YY => {
          this.selectedId = YY, this.emit()
        }, this.act = (YY, rY) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${YY} ${rY}`, this.rollBack)) return;
          const DY = this.predict(this.board, YY, rY);
          null !== DY && (this.board = DY.board, this.notice = DY.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = FY.subscribe((() => {
          this.emit()
        }))
      }
      Cy(YY) {
        const rY = this.messageOpens(YY);
        if (rY && this.open) return this.board === this.confirmed && (this.board = YY), this.confirmed = YY, void this.emit();
        if (this.board = YY, this.confirmed = YY, this.pacer.onReply(), rY) return this.notice = null, this.selectedId = this.openingSelection(YY), void this.show();
        const DY = this.messageNotice(YY);
        null !== DY && (this.notice = DY), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function rr(YY, rY) {
      return YY.loadoutCoins >= rY.loadoutCostCoins && rY.loadoutCostParts.every((rY => function(YY, rY) {
        return Dr(YY, rY).loadoutHeldPartAmount
      }(YY, rY.loadoutPartCurrency) >= rY.loadoutPartAmount))
    }

    function Dr(YY, rY) {
      return YY.loadoutHeldParts.find((YY => YY.loadoutHeldPartCurrency === rY))
    }

    function Fr(YY, rY) {
      return YY.loadoutSlots.find((YY => YY.loadoutSlotKind === rY))
    }

    function Ar(YY) {
      return YY.loadoutPerks.filter((YY => YY.loadoutPerkEquipped)).length >= YY.loadoutMaxPerks
    }

    function Ir(YY, rY, DY) {
      for (const AY of YY.loadoutSlots) {
        const FY = AY.loadoutSlotOptions.find((YY => YY.loadoutOptionId === DY));
        if (FY) return "loadoutArmour" === AY.loadoutSlotKind ? Or(YY, AY, FY, rY) : Rr(YY, AY, FY, rY)
      }
      const FY = YY.loadoutPerks.find((YY => YY.loadoutPerkId === DY));
      return FY ? function(YY, rY, DY) {
        const FY = rY.loadoutPerkOwned,
          AY = rY.loadoutPerkEquipped,
          IY = rY.loadoutPerkName,
          RY = Ar(YY);
        if ("loadoutUnlock" === DY) {
          if (FY || !rr(YY, rY.loadoutPerkCost)) return null;
          const DY = {
            ...rY,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !RY
          };
          return {
            board: ar(vr(YY, rY.loadoutPerkCost), DY),
            notice: ur(RY ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", IY)
          }
        }
        if ("loadoutUpgrade" === DY || !FY || "loadoutEquip" === DY === AY || !AY && RY) return null;
        return {
          board: ar(YY, {
            ...rY,
            loadoutPerkEquipped: !AY
          }),
          notice: ur(AY ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", IY)
        }
      }(YY, FY, rY) : null
    }

    function Rr(YY, rY, DY, FY) {
      const AY = DY.loadoutOptionOwnedTier,
        IY = DY.loadoutOptionName;
      if ("loadoutEquip" === FY) return 0 === AY ? null : {
        board: gr(YY, rY, DY.loadoutOptionId, null),
        notice: ur("loadoutNoticeEquipped", IY)
      };
      const RY = "loadoutUnlock" === FY;
      if (RY && 0 !== AY || "loadoutUpgrade" === FY && (0 === AY || AY >= DY.loadoutOptionTiers.length) || "loadoutUnequip" === FY) return null;
      const OY = DY.loadoutOptionTiers[AY].loadoutTierCost;
      if (!rr(YY, OY)) return null;
      const gY = {
          ...DY,
          loadoutOptionOwnedTier: AY + 1
        },
        aY = RY ? DY.loadoutOptionId : rY.loadoutSlotEquippedId;
      return {
        board: gr(vr(YY, OY), rY, aY, gY),
        notice: RY ? ur("loadoutNoticeUnlocked", IY) : ur("loadoutNoticeUpgraded", IY, AY + 1)
      }
    }

    function Or(YY, rY, DY, FY) {
      const AY = DY.loadoutOptionOwnedTier > 0,
        IY = DY.loadoutOptionName;
      if ("loadoutEquip" === FY && AY) return {
        board: gr(YY, rY, DY.loadoutOptionId, null),
        notice: ur("loadoutNoticeEquipped", IY)
      };
      const RY = DY.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== FY || AY || !rr(YY, RY) ? null : {
        board: gr(vr(YY, RY), rY, DY.loadoutOptionId, {
          ...DY,
          loadoutOptionOwnedTier: 1
        }),
        notice: ur("loadoutNoticeUnlocked", IY)
      }
    }

    function gr(YY, rY, DY, FY) {
      const AY = {
        ...rY,
        loadoutSlotEquippedId: DY,
        loadoutSlotOptions: rY.loadoutSlotOptions.map((YY => null !== FY && YY.loadoutOptionId === FY.loadoutOptionId ? FY : YY))
      };
      return {
        ...YY,
        loadoutSlots: YY.loadoutSlots.map((YY => YY === rY ? AY : YY))
      }
    }

    function ar(YY, rY) {
      return {
        ...YY,
        loadoutPerks: YY.loadoutPerks.map((YY => YY.loadoutPerkId === rY.loadoutPerkId ? rY : YY))
      }
    }

    function vr(YY, rY) {
      return {
        ...YY,
        loadoutCoins: YY.loadoutCoins - rY.loadoutCostCoins,
        loadoutHeldParts: YY.loadoutHeldParts.map((YY => {
          const DY = rY.loadoutCostParts.find((rY => rY.loadoutPartCurrency === YY.loadoutHeldPartCurrency));
          return DY ? {
            ...YY,
            loadoutHeldPartAmount: YY.loadoutHeldPartAmount - DY.loadoutPartAmount
          } : YY
        }))
      }
    }

    function ur(YY, rY) {
      return {
        loadoutNoticeKey: YY,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: rY,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const sr = "containmentLoadoutView";
    class ir extends Yr {
      constructor(YY, rY, DY, FY) {
        super(YY, rY, DY, FY, "loadout", Ir), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = YY => {
          this.slot = YY, this.selectedId = yr(this.board, YY), this.emit()
        }
      }
      messageOpens(YY) {
        return YY.loadoutMessageOpens
      }
      messageNotice(YY) {
        return YY.loadoutNotice
      }
      openingSelection(YY) {
        return yr(YY, this.slot)
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

    function yr(YY, rY) {
      if ("loadoutPerks" === rY) {
        var DY;
        const rY = YY.loadoutPerks;
        return (null !== (DY = rY.find((YY => YY.loadoutPerkEquipped))) && void 0 !== DY ? DY : rY[0]).loadoutPerkId
      }
      return Fr(YY, rY).loadoutSlotEquippedId
    }
    const Qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var or = DY(36263),
      Wr = DY(1284);
    const Er = {
        loadoutPrimary: `${NY}:loadoutSlotPrimary`,
        loadoutSecondary: `${NY}:loadoutSlotSecondary`,
        loadoutOffensive: `${NY}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${NY}:loadoutSlotSelfHelp`,
        loadoutArmour: `${NY}:loadoutSlotArmour`,
        loadoutPerks: `${NY}:loadoutSlotPerks`
      },
      mr = {
        section: "right",
        Ps: "bottom",
        act: "top"
      },
      Vr = (0, FY.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Sr() {
      const {
        step: YY,
        targetRef: rY
      } = (0, FY.useContext)(Vr);
      return (DY, FY) => (null === YY || void 0 === YY ? void 0 : YY.kind) === DY && YY.id === FY ? rY : void 0
    }

    function lr(YY, rY) {
      const DY = rY.loadoutTargetId;
      if ("loadoutPerks" === rY.loadoutTargetSection) {
        const rY = YY.loadoutPerks.find((YY => YY.loadoutPerkId === DY));
        return {
          name: rY.loadoutPerkName,
          owned: rY.loadoutPerkOwned,
          equipped: rY.loadoutPerkEquipped
        }
      }
      const FY = Fr(YY, rY.loadoutTargetSection),
        AY = FY.loadoutSlotOptions.find((YY => YY.loadoutOptionId === DY));
      return {
        name: AY.loadoutOptionName,
        owned: AY.loadoutOptionOwnedTier > 0,
        equipped: FY.loadoutSlotEquippedId === DY
      }
    }

    function Tr(YY, rY, DY, FY) {
      const [AY, IY] = YY(`${NY}:${rY}`, {
        [DY]: "\x01"
      }).split("\x01");
      return (0, eY.jsxs)(eY.Fragment, {
        children: [AY, (0, eY.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: FY
        }), IY]
      })
    }

    function er(YY) {
      let {
        view: rY,
        onDismiss: DY,
        children: AY
      } = YY;
      const {
        t: IY
      } = (0, uY.C)(), RY = rY.loadout, OY = rY.open ? RY.loadoutWalkthrough.map((YY => ({
        target: YY,
        info: lr(RY, YY)
      }))).find((YY => {
        let {
          info: rY
        } = YY;
        return !rY.equipped
      })) : void 0;
      let gY = null,
        aY = null;
      if (void 0 !== OY) {
        const {
          target: YY,
          info: DY
        } = OY;
        rY.slot !== YY.loadoutTargetSection ? (gY = {
          kind: "section",
          id: YY.loadoutTargetSection
        }, aY = Tr(IY, "loadoutWalkthroughSection", "section", IY(Er[YY.loadoutTargetSection]))) : rY.selectedId !== YY.loadoutTargetId ? (gY = {
          kind: "Ps",
          id: YY.loadoutTargetId
        }, aY = Tr(IY, "loadoutWalkthroughPick", "name", DY.name)) : (gY = {
          kind: "act",
          id: YY.loadoutTargetId
        }, aY = Tr(IY, DY.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", DY.name))
      }
      const vY = null === gY ? null : function(YY) {
          return `${YY.kind}:${YY.id}`
        }(gY),
        [sY, iY] = (0, FY.useState)(null),
        yY = (0, FY.useCallback)((YY => {
          iY((rY => null !== YY ? {
            key: vY,
            node: YY
          } : (null === rY || void 0 === rY ? void 0 : rY.key) === vY ? null : rY))
        }), [vY]),
        QY = null !== vY && (null === sY || void 0 === sY ? void 0 : sY.key) === vY ? sY.node : null;
      return (0, eY.jsxs)(Vr.Provider, {
        value: {
          step: gY,
          targetRef: yY
        },
        children: [AY, null !== gY && null !== QY && (0, eY.jsx)(Nr, {
          target: QY,
          placement: mr[gY.kind],
          onDismiss: DY,
          children: aY
        }, vY)]
      })
    }

    function Nr(YY) {
      let {
        target: rY,
        placement: DY,
        onDismiss: AY,
        children: IY
      } = YY;
      const {
        t: RY
      } = (0, uY.C)(), OY = (0, FY.useRef)(rY);
      return OY.current = rY, (0, Wr.t)("popup", OY, AY), (0, eY.jsxs)(or.d, {
        target: rY,
        placement: DY,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, eY.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, eY.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Qr,
            alt: "",
            draggable: !1
          }), (0, eY.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: RY(`${NY}:operatorName`)
          }), (0, eY.jsx)(yY.k, {
            onClick: AY,
            ariaLabel: RY(`${NY}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, eY.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: IY
        })]
      })
    }
    const Br = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function cr(YY) {
      let {
        cost: rY,
        loadout: DY
      } = YY;
      const {
        t: FY
      } = (0, uY.C)();
      return rY.loadoutCostCoins <= 0 && 0 === rY.loadoutCostParts.length ? (0, eY.jsx)("span", {
        className: "LoadoutCost",
        children: FY(`${NY}:loadoutFree`)
      }) : (0, eY.jsxs)("span", {
        className: "LoadoutCost",
        children: [rY.loadoutCostCoins > 0 && (0, eY.jsx)(zY, {
          itemName: BY,
          amount: rY.loadoutCostCoins,
          ja: DY.loadoutCoins
        }), rY.loadoutCostParts.map((YY => {
          const rY = Dr(DY, YY.loadoutPartCurrency);
          return (0, eY.jsx)(zY, {
            itemName: rY.loadoutHeldPartItem,
            amount: YY.loadoutPartAmount,
            ja: rY.loadoutHeldPartAmount
          }, YY.loadoutPartCurrency)
        }))]
      })
    }
    const Kr = {
      loadoutStatFireRate: `${NY}:loadoutUnitPerMinute`,
      loadoutStatReload: `${NY}:loadoutUnitSeconds`,
      loadoutStatResupply: `${NY}:loadoutUnitSeconds`
    };

    function Hr(YY) {
      return "loadoutStatPotency" === YY.loadoutStatKind ? (0, tY.R)(YY.loadoutStatValue) : String(YY.loadoutStatValue)
    }

    function zr(YY) {
      var rY;
      let {
        option: DY
      } = YY;
      const {
        t: FY
      } = (0, uY.C)(), AY = DY.loadoutOptionTiers, IY = null === (rY = AY[0]) || void 0 === rY ? void 0 : rY.loadoutTierStats.map((YY => YY.loadoutStatKind));
      if (!IY || 0 === IY.length) return null;
      const RY = DY.loadoutOptionOwnedTier,
        OY = (YY, rY) => {
          var DY;
          return null === (DY = AY[YY]) || void 0 === DY ? void 0 : DY.loadoutTierStats.find((YY => YY.loadoutStatKind === rY))
        };
      return (0, eY.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, eY.jsx)("thead", {
          children: (0, eY.jsxs)("tr", {
            children: [(0, eY.jsx)("th", {}), AY.map(((YY, rY) => (0, eY.jsx)("th", {
              className: aY()({
                Current: rY + 1 === RY,
                Next: rY === RY
              }),
              children: FY(`${NY}:loadoutTier`, {
                tier: (0, tY.R)(rY + 1)
              })
            }, rY)))]
          })
        }), (0, eY.jsx)("tbody", {
          children: IY.map((YY => {
            const rY = Kr[YY];
            return (0, eY.jsxs)("tr", {
              children: [(0, eY.jsxs)("th", {
                scope: "row",
                children: [FY(`${NY}:${YY}`), rY && (0, eY.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: FY(rY)
                })]
              }), AY.map(((rY, DY) => {
                const FY = OY(DY, YY),
                  AY = DY > 0 ? OY(DY - 1, YY) : void 0,
                  IY = FY && AY ? FY.loadoutStatValue - AY.loadoutStatValue : 0,
                  gY = Br.has(YY) ? IY < 0 : IY > 0,
                  vY = DY === RY;
                return (0, eY.jsxs)("td", {
                  className: aY()({
                    Current: DY + 1 === RY,
                    Next: vY,
                    Gain: gY,
                    Owned: DY < RY
                  }),
                  children: [vY && gY && (0, eY.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: IY < 0 ? "\u25bc" : "\u25b2"
                  }), FY ? Hr(FY) : "-"]
                }, DY)
              }))]
            }, YY)
          }))
        })]
      })
    }

    function Zr(YY) {
      let {
        view: rY,
        controller: DY,
        slot: FY,
        option: AY
      } = YY;
      const {
        t: IY
      } = (0, uY.C)(), RY = rY.loadout, OY = AY.loadoutOptionOwnedTier, gY = AY.loadoutOptionTiers.length, aY = FY.loadoutSlotEquippedId === AY.loadoutOptionId, vY = OY < gY ? AY.loadoutOptionTiers[OY].loadoutTierCost : null, sY = null !== vY && rr(RY, vY), iY = AY.loadoutOptionId, QY = Sr();
      return (0, eY.jsxs)(eY.Fragment, {
        children: [(0, eY.jsx)(fr, {
          icon: AY.loadoutOptionIcon,
          name: AY.loadoutOptionName,
          status: 0 === OY ? IY(`${NY}:loadoutLocked`) : gY > 1 ? IY(`${NY}:loadoutTier`, {
            tier: (0, tY.R)(OY)
          }) : null,
          locked: 0 === OY,
          equipped: aY
        }), (0, eY.jsx)("p", {
          className: "BoardDescription",
          children: AY.loadoutOptionDescription
        }), (0, eY.jsx)(zr, {
          option: AY
        }), (0, eY.jsxs)("div", {
          ref: QY("act", iY),
          className: "BoardActions",
          children: [null !== vY && (0, eY.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, eY.jsx)(cr, {
              cost: vY,
              loadout: RY
            }), (0, eY.jsx)(yY.n, {
              disabled: !sY || rY.pending,
              onClick: () => {
                DY.act(0 === OY ? "loadoutUnlock" : "loadoutUpgrade", iY)
              },
              children: 0 === OY ? IY(`${NY}:loadoutUnlock`) : IY(`${NY}:loadoutUpgrade`, {
                tier: (0, tY.R)(OY + 1)
              })
            })]
          }), null === vY && gY > 1 && (0, eY.jsx)("span", {
            className: "BoardHint",
            children: IY(`${NY}:loadoutMaxed`)
          }), OY > 0 && !aY && (0, eY.jsx)(yY.f, {
            disabled: rY.pending,
            onClick: () => {
              DY.act("loadoutEquip", iY)
            },
            children: IY(`${NY}:loadoutEquip`)
          })]
        })]
      })
    }

    function Cr(YY) {
      let {
        view: rY,
        controller: DY,
        perk: FY
      } = YY;
      const {
        t: AY
      } = (0, uY.C)(), IY = rY.loadout, RY = Ar(IY), OY = FY.loadoutPerkId, gY = Sr();
      return (0, eY.jsxs)(eY.Fragment, {
        children: [(0, eY.jsx)(fr, {
          icon: FY.loadoutPerkIcon,
          name: FY.loadoutPerkName,
          status: FY.loadoutPerkOwned ? null : AY(`${NY}:loadoutLocked`),
          locked: !FY.loadoutPerkOwned,
          equipped: FY.loadoutPerkEquipped
        }), (0, eY.jsx)("p", {
          className: "BoardDescription",
          children: FY.loadoutPerkDescription
        }), (0, eY.jsxs)("div", {
          ref: gY("act", OY),
          className: "BoardActions",
          children: [!FY.loadoutPerkOwned && (0, eY.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, eY.jsx)(cr, {
              cost: FY.loadoutPerkCost,
              loadout: IY
            }), (0, eY.jsx)(yY.n, {
              disabled: !rr(IY, FY.loadoutPerkCost) || rY.pending,
              onClick: () => {
                DY.act("loadoutUnlock", OY)
              },
              children: AY(`${NY}:loadoutUnlock`)
            })]
          }), FY.loadoutPerkOwned && !FY.loadoutPerkEquipped && (0, eY.jsx)(yY.f, {
            disabled: RY || rY.pending,
            onClick: () => {
              DY.act("loadoutEquip", OY)
            },
            children: AY(`${NY}:loadoutEquip`)
          }), FY.loadoutPerkOwned && !FY.loadoutPerkEquipped && RY && (0, eY.jsx)("span", {
            className: "BoardHint",
            children: AY(`${NY}:loadoutSocketsFullHint`)
          }), FY.loadoutPerkEquipped && (0, eY.jsx)(yY.J, {
            disabled: rY.pending,
            onClick: () => {
              DY.act("loadoutUnequip", OY)
            },
            children: AY(`${NY}:loadoutUnequip`)
          })]
        })]
      })
    }

    function fr(YY) {
      let {
        icon: rY,
        name: DY,
        status: FY,
        locked: AY,
        equipped: IY
      } = YY;
      const {
        t: RY
      } = (0, uY.C)();
      return (0, eY.jsxs)(jY, {
        icon: (0, eY.jsx)(KY, {
          itemName: rY
        }),
        name: DY,
        children: [null !== FY && (0, eY.jsx)("span", {
          className: aY()("LoadoutStatusText", {
            Locked: AY
          }),
          children: FY
        }), IY && (0, eY.jsx)("span", {
          className: "BoardBadge",
          children: RY(`${NY}:loadoutEquippedBadge`)
        })]
      })
    }

    function jr(YY) {
      let {
        view: rY,
        controller: DY
      } = YY;
      const FY = rY.loadout;
      if ("loadoutPerks" === rY.slot) {
        const YY = FY.loadoutPerks.find((YY => YY.loadoutPerkId === rY.selectedId));
        return (0, eY.jsx)("section", {
          className: "BoardDetail",
          children: YY && (0, eY.jsx)(Cr, {
            view: rY,
            controller: DY,
            perk: YY
          })
        })
      }
      const AY = Fr(FY, rY.slot),
        IY = AY.loadoutSlotOptions.find((YY => YY.loadoutOptionId === rY.selectedId));
      return (0, eY.jsx)("section", {
        className: "BoardDetail",
        children: IY && (0, eY.jsx)(Zr, {
          view: rY,
          controller: DY,
          slot: AY,
          option: IY
        })
      })
    }

    function hr(YY) {
      let {
        owned: rY,
        total: DY
      } = YY;
      return DY <= 1 ? null : (0, eY.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: DY
        }, ((YY, DY) => (0, eY.jsx)("span", {
          className: aY()("LoadoutPip", {
            Filled: DY < rY
          })
        }, DY)))
      })
    }

    function dr(YY) {
      let {
        view: rY,
        controller: DY
      } = YY;
      const {
        t: FY
      } = (0, uY.C)(), AY = rY.loadout, IY = Sr();
      return (0, eY.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": FY(`${NY}:loadoutKit`),
        children: [AY.loadoutSlots.map((YY => {
          const AY = YY.loadoutSlotOptions.find((rY => rY.loadoutOptionId === YY.loadoutSlotEquippedId));
          return (0, eY.jsxs)("button", {
            ref: IY("section", YY.loadoutSlotKind),
            type: "button",
            className: aY()("LoadoutKitSlot", {
              Selected: rY.slot === YY.loadoutSlotKind
            }),
            onClick: () => {
              DY.selectSlot(YY.loadoutSlotKind)
            },
            children: [(0, eY.jsx)("span", {
              className: "LoadoutKitIcon",
              children: AY && (0, eY.jsx)(KY, {
                itemName: AY.loadoutOptionIcon
              })
            }), (0, eY.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, eY.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, eY.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: FY(Er[YY.loadoutSlotKind])
                }), AY && (0, eY.jsx)(hr, {
                  owned: AY.loadoutOptionOwnedTier,
                  total: AY.loadoutOptionTiers.length
                })]
              }), (0, eY.jsx)("span", {
                className: "LoadoutKitName",
                children: null === AY || void 0 === AY ? void 0 : AY.loadoutOptionName
              })]
            })]
          }, YY.loadoutSlotKind)
        })), (0, eY.jsx)(Jr, {
          view: rY,
          controller: DY
        })]
      })
    }

    function Jr(YY) {
      let {
        view: rY,
        controller: DY
      } = YY;
      const {
        t: FY
      } = (0, uY.C)(), AY = rY.loadout, IY = AY.loadoutPerks.filter((YY => YY.loadoutPerkEquipped)), RY = Sr();
      return (0, eY.jsxs)("button", {
        ref: RY("section", "loadoutPerks"),
        type: "button",
        className: aY()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === rY.slot
        }),
        onClick: () => {
          DY.selectSlot("loadoutPerks")
        },
        children: [(0, eY.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, eY.jsx)("span", {
            className: "LoadoutKitLabel",
            children: FY(Er.loadoutPerks)
          }), (0, eY.jsx)("span", {
            className: "LoadoutPerkCount",
            children: FY(`${NY}:loadoutPerkCount`, {
              equipped: String(IY.length),
              max: String(AY.loadoutMaxPerks)
            })
          })]
        }), (0, eY.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: AY.loadoutMaxPerks
          }, ((YY, rY) => {
            const DY = IY[rY];
            return (0, eY.jsxs)("span", {
              className: aY()("LoadoutSocket", {
                Filled: DY,
                Empty: !DY
              }),
              children: [(0, eY.jsx)("span", {
                className: "LoadoutSocketWell",
                children: DY && (0, eY.jsx)(KY, {
                  itemName: DY.loadoutPerkIcon
                })
              }), (0, eY.jsx)("span", {
                className: "LoadoutSocketName",
                children: DY ? DY.loadoutPerkName : FY(`${NY}:loadoutPerkSocketEmpty`)
              })]
            }, rY)
          }))
        })]
      })
    }

    function Mr(YY) {
      let {
        icon: rY,
        name: DY,
        selected: FY,
        equipped: AY,
        locked: IY,
        ownedTier: RY,
        tiers: OY,
        buttonRef: gY,
        onSelect: aY
      } = YY;
      const {
        t: vY
      } = (0, uY.C)();
      return (0, eY.jsxs)(fY, {
        icon: (0, eY.jsx)(KY, {
          itemName: rY
        }),
        name: DY,
        selected: FY,
        locked: IY,
        buttonRef: gY,
        onSelect: aY,
        children: [AY && (0, eY.jsx)("span", {
          className: "BoardBadge",
          children: vY(`${NY}:loadoutEquippedBadge`)
        }), IY && (0, eY.jsx)("span", {
          className: "BoardBadge Muted",
          children: vY(`${NY}:loadoutLocked`)
        }), !IY && (0, eY.jsx)(hr, {
          owned: RY,
          total: OY
        })]
      })
    }

    function wr(YY) {
      let {
        view: rY,
        controller: DY
      } = YY;
      const FY = rY.loadout,
        AY = Sr();
      if ("loadoutPerks" === rY.slot) return (0, eY.jsx)("div", {
        className: "BoardTiles",
        children: FY.loadoutPerks.map((YY => (0, eY.jsx)(Mr, {
          icon: YY.loadoutPerkIcon,
          name: YY.loadoutPerkName,
          selected: rY.selectedId === YY.loadoutPerkId,
          equipped: YY.loadoutPerkEquipped,
          locked: !YY.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: AY("Ps", YY.loadoutPerkId),
          onSelect: () => {
            DY.select(YY.loadoutPerkId)
          }
        }, YY.loadoutPerkId)))
      });
      const IY = Fr(FY, rY.slot);
      return (0, eY.jsx)("div", {
        className: "BoardTiles",
        children: IY.loadoutSlotOptions.map((YY => (0, eY.jsx)(Mr, {
          icon: YY.loadoutOptionIcon,
          name: YY.loadoutOptionName,
          selected: rY.selectedId === YY.loadoutOptionId,
          equipped: IY.loadoutSlotEquippedId === YY.loadoutOptionId,
          locked: 0 === YY.loadoutOptionOwnedTier,
          ownedTier: YY.loadoutOptionOwnedTier,
          tiers: YY.loadoutOptionTiers.length,
          buttonRef: AY("Ps", YY.loadoutOptionId),
          onSelect: () => {
            DY.select(YY.loadoutOptionId)
          }
        }, YY.loadoutOptionId)))
      })
    }

    function br(YY) {
      let {
        loadout: rY
      } = YY;
      return (0, eY.jsx)(hY, {
        coins: rY.loadoutCoins,
        children: rY.loadoutHeldParts.filter((YY => YY.loadoutHeldPartAmount > 0)).map((YY => (0, eY.jsx)(zY, {
          itemName: YY.loadoutHeldPartItem,
          amount: YY.loadoutHeldPartAmount
        }, YY.loadoutHeldPartCurrency)))
      })
    }

    function Xr(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, vY.k)(sr, rY.getSnapshot()),
        {
          t: FY
        } = (0, uY.C)();
      if (null === DY.loadout) return null;
      const AY = DY.notice;
      return (0, eY.jsx)(er, {
        view: DY,
        onDismiss: rY.dismiss,
        children: (0, eY.jsxs)(cY, {
          open: DY.open,
          onDismiss: rY.dismiss,
          title: FY(`${NY}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, eY.jsx)(br, {
            loadout: DY.loadout
          }),
          statusRefused: null === AY || void 0 === AY ? void 0 : AY.loadoutNoticeRefused,
          status: (0, eY.jsxs)(eY.Fragment, {
            children: [(0, eY.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: FY(`${NY}:loadoutRadioBadge`)
            }), null !== AY && FY(`${NY}:${AY.loadoutNoticeKey}`, {
              name: AY.loadoutNoticeName,
              tier: (0, tY.R)(AY.loadoutNoticeTier),
              max: String(DY.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, eY.jsx)(dr, {
            view: DY,
            controller: rY
          }), (0, eY.jsx)(wr, {
            view: DY,
            controller: rY
          }), (0, eY.jsx)(jr, {
            view: DY,
            controller: rY
          })]
        })
      })
    }

    function qr(YY, rY, DY) {
      const FY = YY.locatorEntries.find((YY => YY.locatorEntryId === DY));
      if (!FY) return null;
      const AY = FY.locatorEntryName;
      if ("locatorDisarm" === rY) return FY.locatorEntryArmed ? {
        board: pr(YY, null),
        notice: kr("locatorNoticeDisarmed", AY)
      } : null;
      if ("locatorArm" === rY) return FY.locatorEntryOwned && !FY.locatorEntryArmed ? {
        board: pr(YY, DY),
        notice: kr("locatorNoticeArmed", AY)
      } : null;
      if (FY.locatorEntryOwned || YY.locatorCoins < FY.locatorEntryPrice) return null;
      const IY = pr({
        ...YY,
        locatorCoins: YY.locatorCoins - FY.locatorEntryPrice
      }, DY);
      return {
        board: {
          ...IY,
          locatorEntries: IY.locatorEntries.map((YY => YY.locatorEntryId === DY ? {
            ...YY,
            locatorEntryOwned: !0
          } : YY))
        },
        notice: kr("locatorNoticeBought", AY)
      }
    }

    function pr(YY, rY) {
      return {
        ...YY,
        locatorEntries: YY.locatorEntries.map((YY => {
          const DY = YY.locatorEntryId === rY;
          return YY.locatorEntryArmed === DY ? YY : {
            ...YY,
            locatorEntryArmed: DY
          }
        }))
      }
    }

    function kr(YY, rY) {
      return {
        locatorNoticeKey: YY,
        locatorNoticeRefused: !1,
        locatorNoticeName: rY
      }
    }
    const Gr = "containmentLocatorView";
    class xr extends Yr {
      constructor(YY, rY, DY, FY) {
        super(YY, rY, DY, FY, "locator", qr), this.snapshot = this.buildSnapshot()
      }
      messageOpens(YY) {
        return YY.locatorMessageOpens
      }
      messageNotice(YY) {
        return YY.locatorNotice
      }
      openingSelection(YY) {
        var rY;
        const DY = YY.locatorEntries;
        return (null !== (rY = DY.find((YY => YY.locatorEntryArmed))) && void 0 !== rY ? rY : DY[0]).locatorEntryId
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
    const nr = {
        locatorContained: `${NY}:locatorFlavourContained`,
        locatorEncountered: `${NY}:locatorFlavourEncountered`,
        locatorUnseen: `${NY}:locatorFlavourUnseen`
      },
      Pr = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${NY}:locatorAttunedNormal`,
        codexHardOnly: `${NY}:locatorAttunedHard`
      };

    function Ur() {
      return (0, eY.jsx)(eY.Fragment, {
        children: Array.from({
          length: 5
        }, ((YY, rY) => (0, eY.jsx)("span", {
          className: "LocatorFly",
          children: (0, eY.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, rY)))
      })
    }

    function Lr(YY) {
      let {
        entry: rY
      } = YY;
      const {
        t: DY
      } = (0, uY.C)();
      return rY.locatorEntryArmed ? (0, eY.jsx)("span", {
        className: "BoardBadge Armed",
        children: DY(`${NY}:locatorArmedBadge`)
      }) : rY.locatorEntryOwned ? (0, eY.jsx)("span", {
        className: "BoardBadge",
        children: DY(`${NY}:locatorOwnedBadge`)
      }) : null
    }

    function tr(YY) {
      let {
        entry: rY,
        coins: DY,
        inTile: FY = !1
      } = YY;
      return (0, eY.jsx)(zY, {
        itemName: BY,
        amount: rY.locatorEntryPrice,
        ja: DY,
        inTile: FY
      })
    }

    function YD(YY) {
      let {
        view: rY,
        controller: DY,
        entry: FY
      } = YY;
      const {
        t: AY
      } = (0, uY.C)(), IY = FY.locatorEntryId, RY = rY.locators.locatorEntries.find((YY => YY.locatorEntryArmed && YY !== FY));
      return (0, eY.jsxs)("div", {
        className: "BoardActions",
        children: [FY.locatorEntryArmed && (0, eY.jsx)(yY.J, {
          disabled: rY.pending,
          onClick: () => {
            DY.act("locatorDisarm", IY)
          },
          children: AY(`${NY}:locatorDisarm`)
        }), FY.locatorEntryOwned && !FY.locatorEntryArmed && (0, eY.jsx)(yY.f, {
          disabled: rY.pending,
          onClick: () => {
            DY.act("locatorArm", IY)
          },
          children: AY(`${NY}:locatorArm`)
        }), !FY.locatorEntryOwned && (0, eY.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, eY.jsx)(tr, {
            entry: FY,
            coins: rY.locators.locatorCoins
          }), (0, eY.jsx)(yY.n, {
            disabled: rY.locators.locatorCoins < FY.locatorEntryPrice || rY.pending,
            onClick: () => {
              DY.act("locatorBuy", IY)
            },
            children: AY(`${NY}:locatorBuy`)
          })]
        }), RY && !FY.locatorEntryArmed && (0, eY.jsx)("span", {
          className: "BoardHint",
          children: AY(`${NY}:locatorReplacesHint`, {
            name: RY.locatorEntryName
          })
        })]
      })
    }

    function rD(YY) {
      let {
        entry: rY
      } = YY;
      return "locatorUnseen" === rY.locatorEntryStanding ? (0, eY.jsx)(KY, {
        itemName: "Compass"
      }) : (0, eY.jsx)(HY, {
        anomalyId: rY.locatorEntryId,
        caught: "locatorContained" === rY.locatorEntryStanding
      })
    }

    function DD(YY) {
      let {
        view: rY,
        controller: DY,
        entry: FY
      } = YY;
      const {
        t: AY
      } = (0, uY.C)(), IY = Pr[FY.locatorEntryDifficulty];
      return (0, eY.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, eY.jsxs)("div", {
          className: aY()("LocatorLabel", {
            Armed: FY.locatorEntryArmed
          }),
          children: [(0, eY.jsx)(jY, {
            icon: (0, eY.jsx)(rD, {
              entry: FY
            }),
            name: AY(`${NY}:locatorName`, {
              name: FY.locatorEntryName
            }),
            children: (0, eY.jsx)(Lr, {
              entry: FY
            })
          }), (0, eY.jsx)("p", {
            className: "BoardDescription",
            children: AY(FY.locatorEntryArmed ? `${NY}:locatorFlavourArmed` : nr[FY.locatorEntryStanding])
          }), null !== IY && (0, eY.jsx)("p", {
            className: "LocatorAttuned",
            children: AY(IY)
          }), (0, eY.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: AY(`${NY}:locatorUsage`)
          })]
        }), (0, eY.jsx)(YD, {
          view: rY,
          controller: DY,
          entry: FY
        })]
      })
    }

    function FD(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, vY.k)(Gr, rY.getSnapshot()),
        {
          t: FY
        } = (0, uY.C)(),
        AY = DY.locators;
      if (null === AY) return null;
      const IY = AY.locatorEntries.find((YY => YY.locatorEntryId === DY.selectedId)),
        RY = DY.notice;
      return (0, eY.jsxs)(cY, {
        open: DY.open,
        onDismiss: rY.dismiss,
        title: FY(`${NY}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, eY.jsx)(Ur, {}),
        headerExtra: (0, eY.jsx)(hY, {
          coins: AY.locatorCoins
        }),
        statusRefused: null === RY || void 0 === RY ? void 0 : RY.locatorNoticeRefused,
        status: (0, eY.jsxs)(eY.Fragment, {
          children: [(0, eY.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: FY(`${NY}:locatorKeeperName`)
          }), null !== RY && FY(`${NY}:${RY.locatorNoticeKey}`, {
            name: RY.locatorNoticeName
          })]
        }),
        children: [(0, eY.jsx)("div", {
          className: "BoardTiles",
          children: AY.locatorEntries.map((YY => (0, eY.jsxs)(fY, {
            icon: (0, eY.jsx)(rD, {
              entry: YY
            }),
            name: YY.locatorEntryName,
            selected: YY === IY,
            locked: !1,
            className: aY()("LocatorTag", {
              Armed: YY.locatorEntryArmed
            }),
            onSelect: () => {
              rY.select(YY.locatorEntryId)
            },
            children: [(0, eY.jsx)(Lr, {
              entry: YY
            }), !YY.locatorEntryOwned && (0, eY.jsx)(tr, {
              entry: YY,
              coins: AY.locatorCoins,
              inTile: !0
            })]
          }, YY.locatorEntryId)))
        }), (0, eY.jsx)(DD, {
          view: DY,
          controller: rY,
          entry: IY
        })]
      })
    }

    function AD(YY) {
      let {
        loadout: rY,
        codex: DY,
        locator: FY
      } = YY;
      return (0, eY.jsxs)(eY.Fragment, {
        children: [(0, eY.jsx)(Xr, {
          controller: rY
        }), (0, eY.jsx)(LY, {
          controller: DY
        }), (0, eY.jsx)(FD, {
          controller: FY
        })]
      })
    }
    var ID = DY(37926);
    class RD {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = YY, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new ID.e({
          spacingMs: 0,
          now: rY
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(YY, rY) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, rY(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(YY), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const YY of this.listeners) YY()
      }
    }
    var OD = DY(37918);
    const gD = new Map([
      ["npc_general", Qr],
      ["npc_tentacle_guy", OD]
    ]);

    function aD(YY) {
      const rY = gD.get(YY);
      if (void 0 === rY) return null;
      const DY = document.createElement("img");
      return DY.src = rY, DY.alt = "", DY.draggable = !1, DY.style.imageRendering = "pixelated", DY
    }
    const vD = function() {
      let YY, rY = !1,
        DY = null,
        gY = null;
      const aY = [],
        vY = YY => {
          for (const rY of aY) rY !== YY && rY.close();
          (0, OY.o)()
        },
        uY = YY => {
          YY && (0, OY.h)()
        },
        sY = new RD((rY => {
          YY.sendCommand(rY)
        })),
        iY = new ir((YY => {
          RY.g.vo(sr, YY, !0)
        }), vY, uY, sY),
        yY = new MY((YY => {
          RY.g.vo(JY, YY, !0)
        }), vY, uY),
        QY = new xr((YY => {
          RY.g.vo(Gr, YY, !0)
        }), vY, uY, sY);
      aY.push(iY, yY, QY);
      return {
        onCreate: rY => {
          YY = rY, DY = (0, OY.q)(null, {
            content: (0, FY.createElement)(AD, {
              loadout: iY,
              codex: yY,
              locator: QY
            }),
            onClose: () => {
              for (const YY of aY) YY.close()
            }
          }), gY = (0, IY.c)(aD)
        },
        onReceivedMessageFromServer: (YY, rY) => {
          "containmentLoadout" === YY ? iY.Cy(rY) : "containmentLoadoutClose" === YY ? iY.isOpen() && (iY.close(), (0, OY.f)()) : "containmentCodex" === YY ? yY.Cy(rY) : "containmentLocator" === YY && QY.Cy(rY)
        },
        Zu: () => {
          rY || AY.b.get("loadingOverlayVisible") || (rY = !0, YY.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var YY, rY;
          null === (YY = DY) || void 0 === YY || YY(), DY = null, null === (rY = gY) || void 0 === rY || rY(), gY = null;
          for (const DY of aY) DY.dispose();
          sY.dispose()
        }
      }
    }
  },
  36268: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => NY,
      E: () => jY,
      G: () => hY,
      H: () => dY,
      K: () => fY,
      O: () => JY,
      b: () => gY,
      d: () => KY,
      g: () => OY,
      k: () => CY,
      o: () => BY,
      r: () => lY,
      v: () => ZY,
      x: () => zY
    });
    var FY = DY(40);
    const AY = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      IY = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      RY = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      OY = IY.filter((YY => "docsButton" !== YY)),
      gY = RY.filter((YY => "aiHelperButton" !== YY)),
      aY = "codeEditorTutorials",
      vY = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      uY = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let sY = null,
      iY = null;
    const yY = new Set,
      QY = new Set;
    let oY = null;
    const WY = new Set,
      EY = new Set;

    function mY() {
      EY.forEach((YY => {
        YY()
      }))
    }

    function VY() {
      if (!sY) {
        const YY = FY.m.getItem(aY);
        sY = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof YY && null !== YY ? YY : {}
        }
      }
      return sY
    }

    function SY(YY) {
      const rY = VY();
      rY[YY] || (sY = {
        ...rY,
        [YY]: !0
      }, FY.m.setItem(aY, sY))
    }

    function lY(YY) {
      return "docsOverview" === YY ? IY : "aiHelperOverview" === YY ? RY : iY ? AY[iY] : []
    }

    function TY(YY) {
      return ("worldCodeButton" !== YY || !VY().worldCodeIntroShown) && !WY.has(YY)
    }

    function eY(YY) {
      var rY;
      return (null === (rY = oY) || void 0 === rY ? void 0 : rY.name) === YY ? oY.stepsDone : yY
    }

    function NY(YY, rY) {
      if (! function(YY) {
          return oY ? oY.name === YY : "welcome" === YY
        }(YY) || !TY(rY) || eY(YY).has(rY)) return !1;
      if (oY) return !0;
      const DY = vY[rY];
      return DY ? !VY()[DY] || QY.has(rY) : !VY()[uY[YY]]
    }

    function BY(YY) {
      var rY;
      return null !== (rY = lY(YY).find((rY => NY(YY, rY)))) && void 0 !== rY ? rY : null
    }

    function cY(YY) {
      var rY;
      SY(uY[YY]), (null === (rY = oY) || void 0 === rY ? void 0 : rY.name) === YY && (oY = null)
    }

    function KY(YY) {
      const rY = (oY ? [oY.name] : ["welcome", "docsOverview"]).find((rY => BY(rY) === YY));
      if (!rY) return;
      eY(rY).add(YY);
      const DY = vY[YY];
      DY && (SY(DY), oY || QY.add(YY)), null === BY(rY) && cY(rY), mY()
    }

    function HY(YY, rY) {
      const DY = lY(YY),
        FY = eY(YY);
      for (let AY = DY.indexOf(rY) - 1; AY >= 0; AY--)
        if (FY.has(DY[AY]) && TY(DY[AY])) return DY[AY];
      return null
    }

    function zY(YY, rY) {
      return null !== HY(YY, rY)
    }

    function ZY(YY, rY) {
      const DY = HY(YY, rY);
      DY && (eY(YY).delete(DY), mY())
    }

    function CY(YY) {
      cY(YY), "welcome" === YY && lY("welcome").forEach((YY => {
        const rY = vY[YY];
        rY && SY(rY)
      })), mY()
    }

    function fY(YY) {
      oY = {
        name: YY,
        stepsDone: new Set
      }, mY()
    }

    function jY() {
      (oY || 0 !== yY.size || 0 !== QY.size) && (oY = null, yY.clear(), QY.clear(), mY())
    }

    function hY(YY, rY) {
      const DY = rY ? YY : iY === YY ? null : iY;
      DY !== iY && (iY = DY, mY())
    }

    function dY(YY, rY) {
      WY.has(YY) === rY && (rY ? WY.delete(YY) : WY.add(YY), mY())
    }

    function JY(YY) {
      return EY.add(YY), () => {
        EY.delete(YY)
      }
    }
  },
  38614: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38622: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38631: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38637: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38645: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38648: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38650: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38659: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38663: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38670: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38678: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38681: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38686: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38694: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38698: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38702: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38709: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38717: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38726: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38733: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37918: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);