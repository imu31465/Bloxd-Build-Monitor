export const id = 15;
export const ids = [15];
export const modules = {
  40554: (WW, iW, OW) => {
    var mW = {
      "./breach-zero-uncaught.webp": 40559,
      "./breach-zero.webp": 40568,
      "./brood-father-uncaught.webp": 40574,
      "./brood-father.webp": 40576,
      "./carousel-uncaught.webp": 40580,
      "./carousel.webp": 40583,
      "./deadlock-uncaught.webp": 40591,
      "./deadlock.webp": 40598,
      "./doom-warlord-uncaught.webp": 40607,
      "./doom-warlord.webp": 40616,
      "./frost-revenant-uncaught.webp": 40619,
      "./frost-revenant.webp": 40626,
      "./hollow-choir-uncaught.webp": 40635,
      "./hollow-choir.webp": 40640,
      "./magma-warden-uncaught.webp": 40648,
      "./magma-warden.webp": 40652,
      "./patient-zero-uncaught.webp": 40661,
      "./patient-zero.webp": 40665,
      "./siege-engine-uncaught.webp": 40667,
      "./siege-engine.webp": 40673,
      "./warp-stalker-uncaught.webp": 40682,
      "./warp-stalker.webp": 40686
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 40554
  },
  38030: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => yW,
      h: () => SW,
      j: () => YW,
      n: () => AW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(62),
      PW = OW(80),
      LW = OW(1436),
      cW = OW(1532),
      wW = OW(1434),
      tW = OW(1269),
      ZW = OW(1172),
      xW = OW(38039),
      lW = OW(1283);

    function AW(WW) {
      const [iW, OW] = (0, NW.useState)((() => (0, xW.o)(WW)));
      return (0, NW.useEffect)((() => (OW((0, xW.o)(WW)), (0, xW.M)((() => {
        OW((0, xW.o)(WW))
      })))), [WW]), iW
    }

    function bW(WW, iW) {
      "function" === typeof WW ? WW(iW) : WW && (WW.current = iW)
    }

    function jW(WW) {
      let {
        tutorial: iW,
        step: OW,
        enabled: mW = !0
      } = WW;
      const EW = AW(iW);
      return mW && EW === OW
    }

    function UW(WW, iW) {
      const OW = (0, xW.s)(WW),
        mW = OW.indexOf(iW);
      return !OW.slice(mW + 1).some((iW => (0, xW.x)(WW, iW)))
    }

    function kW(WW, iW, OW, mW) {
      let {
        tutorial: EW,
        step: NW,
        waitForClick: PW = !1,
        onPrevious: LW
      } = WW;
      const cW = iW && (0, xW.w)(EW, NW),
        wW = iW && !UW(EW, NW),
        ZW = PW ? mW : OW;
      let lW = null;
      cW ? lW = () => {
        null === LW || void 0 === LW || LW(), (0, xW.u)(EW, NW)
      } : wW && (lW = () => {
        (0, xW.m)(EW)
      }), (0, tW.r)("popup", null !== ZW && void 0 !== ZW ? ZW : OW, lW, iW && null !== ZW, null, cW ? void 0 : "controller:menusSkipTutorial")
    }

    function sW(WW) {
      let {
        tutorial: iW,
        step: OW,
        text: mW,
        waitForClick: EW = !1,
        onPrevious: NW
      } = WW;
      const {
        t: PW
      } = (0, ZW.B)(), LW = UW(iW, OW);
      return (0, lW.jsxs)(lW.Fragment, {
        children: [(0, lW.jsx)("div", {
          className: "TutorialStepText",
          children: mW
        }), (0, lW.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, xW.w)(iW, OW) && (0, lW.jsx)(cW.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === NW || void 0 === NW || NW(), (0, xW.u)(iW, OW)
            },
            children: PW("tutorial:back")
          }), !EW && (0, lW.jsx)(cW.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, xW.h)(OW)
            },
            padDefaultFocus: !0,
            children: PW(LW ? "tutorial:done" : "tutorial:next")
          }), !LW && (0, lW.jsx)(cW.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, xW.m)(iW)
            },
            children: PW("tutorial:skip")
          })]
        })]
      })
    }
    const MW = 6;

    function KW(WW) {
      let {
        rect: iW,
        margin: OW
      } = WW;
      const mW = Math.max(0, iW.top - OW),
        EW = iW.bottom + OW,
        NW = Math.max(0, iW.left - OW),
        PW = iW.right + OW;
      return (0, lW.jsxs)(lW.Fragment, {
        children: [(0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: mW
          }
        }), (0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: EW,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: mW,
            left: 0,
            width: NW,
            height: EW - mW
          }
        }), (0, lW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: mW,
            left: PW,
            right: 0,
            height: EW - mW
          }
        })]
      })
    }

    function SW(WW) {
      let {
        target: iW,
        placement: OW,
        boxRef: mW,
        className: cW,
        spotlight: tW = !0,
        spotlightMargin: ZW = MW,
        children: xW
      } = WW;
      const {
        getArrowProps: AW,
        getTooltipProps: bW,
        setTooltipRef: jW,
        setTriggerRef: UW,
        update: kW
      } = (0, LW.c)({
        placement: OW,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, ZW]
      });
      (0, NW.useLayoutEffect)((() => {
        UW(iW)
      }), [iW, UW]);
      const sW = function(WW, iW) {
        const [OW, mW] = (0, NW.useState)(null);
        return (0, NW.useEffect)((() => {
          if (!iW || !WW) return void mW(null);
          let OW = 0,
            EW = null;
          const NW = () => {
            const iW = WW.getBoundingClientRect();
            EW && iW.left === EW.left && iW.top === EW.top && iW.width === EW.width && iW.height === EW.height || (EW = iW, mW(iW)), OW = requestAnimationFrame(NW)
          };
          return NW(), () => {
            cancelAnimationFrame(OW)
          }
        }), [WW, iW]), OW
      }(iW, tW);
      (0, NW.useEffect)((() => {
        null === kW || void 0 === kW || kW()
      }), [sW, kW]), (0, NW.useEffect)((() => {
        if (tW || !iW || !kW) return;
        const WW = new ResizeObserver((() => {
          kW()
        }));
        return WW.observe(iW), iW.parentElement && WW.observe(iW.parentElement), () => {
          WW.disconnect()
        }
      }), [iW, tW, kW]), (0, NW.useEffect)((() => {
        tW && (null === iW || void 0 === iW || iW.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [iW, tW]);
      const SW = (0, NW.useCallback)((WW => {
        jW(WW), mW && (mW.current = WW)
      }), [jW, mW]);
      return (0, PW.createPortal)((0, lW.jsxs)(lW.Fragment, {
        children: [sW && (0, lW.jsx)(KW, {
          rect: sW,
          margin: ZW
        }), (0, lW.jsxs)("div", {
          ref: SW,
          ...bW({
            className: EW()("tooltip-container SmallTextLight TutorialStep", cW)
          }),
          children: [xW, (0, lW.jsx)("div", {
            ...AW({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, wW.g)())
    }
    const YW = (0, NW.forwardRef)((function(WW, iW) {
      let {
        placement: OW = "right",
        children: mW,
        ...EW
      } = WW;
      const PW = jW(EW),
        LW = (0, NW.useRef)(null),
        cW = (0, NW.useRef)(null);
      kW(EW, PW, LW, cW);
      const [wW, tW] = (0, NW.useState)(null), ZW = mW.ref, xW = (0, NW.useCallback)((WW => {
        cW.current = WW, tW(WW), bW(iW, WW), bW(ZW, WW)
      }), [iW, ZW]);
      return (0, lW.jsxs)(lW.Fragment, {
        children: [(0, NW.cloneElement)(mW, {
          ref: xW
        }), PW && (0, lW.jsx)(SW, {
          target: wW,
          placement: OW,
          boxRef: LW,
          children: (0, lW.jsx)(sW, {
            ...EW
          })
        })]
      })
    }));

    function yW(WW) {
      const iW = jW(WW),
        OW = (0, NW.useRef)(null);
      return kW(WW, iW, OW, null), iW ? (0, PW.createPortal)((0, lW.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, lW.jsx)("div", {
          ref: OW,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, lW.jsx)(sW, {
            ...WW
          })
        })
      }), (0, wW.g)()) : null
    }
  },
  39775: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    const mW = 4,
      EW = 12e3,
      NW = 1e3;
    class PW {
      constructor() {
        let {
          limit: WW = mW,
          windowMs: iW = EW,
          spacingMs: OW = NW,
          now: PW = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = WW, this.windowMs = iW, this.spacingMs = OW, this.now = PW
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const WW of this.priority) WW.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const WW = this.now();
        this.sent.push(WW), this.lastSentAt = WW, this.schedule(), this.notify()
      }
      addPriority(WW) {
        return this.priority.add(WW), () => {
          this.priority.delete(WW)
        }
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const WW of this.priority)
          if (WW.waiting()) return !0;
        return !1
      }
      prune() {
        const WW = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= WW;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const WW = this.now(),
          iW = this.lastSentAt + this.spacingMs,
          OW = Math.min(iW > WW ? iW : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        OW !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, OW - WW)))
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39733: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW, OW) {
        this.iZ = WW, this.beforeOpen = iW, this.afterClose = OW, this.open = !1, this.JA = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.JA && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(WW) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(WW)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.JA = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.JA || (this.snapshot = this.buildSnapshot(), this.iZ(this.snapshot))
      }
    }
  },
  40552: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => xO
    });
    var mW = OW(62);
    var EW = OW(25),
      NW = OW(2029),
      PW = OW(27),
      LW = OW(3361),
      cW = OW(1089),
      wW = OW.n(cW),
      tW = OW(1526),
      ZW = OW(1172),
      xW = OW(5238),
      lW = OW(1414),
      AW = OW(1532),
      bW = OW(2032),
      jW = OW(1434),
      UW = OW(2021),
      kW = OW(2075),
      sW = OW(192);
    const MW = OW(40554),
      KW = Object.fromEntries(MW.keys().map((WW => [WW.replace(/^\.\/(.*)\.webp$/, "$1"), MW(WW)]))),
      SW = new Set;

    function YW(WW, iW) {
      const OW = iW ? WW : `${WW}-uncaught`,
        mW = (0, sW.c)(KW, OW);
      return void 0 !== mW || SW.has(OW) || (SW.add(OW), console.warn(`Containment Breach has no mugshot ${OW}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), mW
    }
    var yW = OW(1283);
    const TW = "containmentBreach",
      JW = "Gold Coin";

    function hW(WW) {
      let {
        open: iW,
        onDismiss: OW,
        title: mW,
        className: EW,
        decor: NW,
        headerExtra: PW,
        status: LW,
        statusRefused: cW = !1,
        children: tW
      } = WW;
      const ZW = `${EW}Title`;
      return (0, yW.jsx)(xW.b, {
        show: iW,
        close: OW,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, yW.jsxs)("section", {
          className: wW()("ContainmentBoardPanel", EW),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": ZW,
          children: [NW && (0, yW.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: NW
          }), (0, yW.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, yW.jsx)("h2", {
              id: ZW,
              className: "VisuallyHidden",
              children: mW
            }), PW, (0, yW.jsx)(AW.l, {
              onClick: OW
            })]
          }), (0, yW.jsx)("div", {
            className: "BoardBody",
            children: tW
          }), void 0 !== LW && (0, yW.jsx)("footer", {
            className: wW()("BoardStatus", {
              Refused: cW
            }),
            children: LW
          })]
        })
      })
    }

    function HW(WW) {
      let {
        itemName: iW
      } = WW;
      return (0, yW.jsx)(bW.b, {
        itemName: iW,
        amount: 0
      })
    }

    function nW(WW) {
      let {
        anomalyId: iW,
        caught: OW
      } = WW;
      const EW = (0, mW.useRef)(null);
      return (0, lW.b)(EW, !OW), (0, yW.jsx)("span", {
        ref: EW,
        className: wW()("BoardMugshot", {
          Uncaught: !OW
        }),
        children: (0, yW.jsx)("img", {
          src: YW(iW, OW),
          alt: "",
          draggable: !1
        })
      })
    }

    function uW(WW) {
      let {
        itemName: iW,
        amount: OW,
        BL: mW,
        inTile: EW = !1
      } = WW;
      return (0, yW.jsx)(jW.f, {
        delayShow: 200,
        hoverOnly: EW,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, yW.jsx)(dW, {
          itemName: iW,
          amount: OW,
          BL: mW
        }),
        children: (0, yW.jsxs)("span", {
          className: wW()("BoardChip", {
            Short: void 0 !== mW && mW < OW
          }),
          children: [(0, yW.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, yW.jsx)(HW, {
              itemName: iW
            })
          }), OW.toLocaleString()]
        })
      })
    }
    const oW = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function dW(WW) {
      var iW;
      let {
        itemName: OW,
        amount: mW,
        BL: EW
      } = WW;
      const {
        t: NW
      } = (0, ZW.B)(), PW = (0, kW.f)("itemInfo", (WW => WW[OW])), {
        lore: LW,
        droppedBy: cW
      } = function(WW) {
        if ("string" !== typeof WW) return {
          lore: WW,
          droppedBy: null
        };
        const iW = oW.exec(WW);
        return null === iW ? {
          lore: WW,
          droppedBy: null
        } : {
          lore: "" === iW[1] ? void 0 : iW[1],
          droppedBy: iW[2]
        }
      }(null === PW || void 0 === PW ? void 0 : PW.description);
      return (0, yW.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, yW.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, yW.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, yW.jsx)(HW, {
              itemName: OW
            })
          }), (0, yW.jsx)(UW.d, {
            text: null !== (iW = null === PW || void 0 === PW ? void 0 : PW.displayName) && void 0 !== iW ? iW : OW,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== LW || null !== cW) && (0, yW.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== LW && (0, yW.jsx)(UW.d, {
            text: LW,
            className: "BoardChipTooltipDescription"
          }), null !== cW && (0, yW.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, yW.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: NW(`${TW}:chipDroppedBy`)
            }), cW]
          })]
        }), void 0 !== EW && (0, yW.jsxs)("div", {
          className: wW()("BoardChipTooltipHeld", {
            Short: EW < mW
          }),
          children: [(0, yW.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: NW(`${TW}:chipYouHave`)
          }), (0, yW.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, yW.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: EW.toLocaleString()
            }), ` / ${mW.toLocaleString()}`]
          }), (0, yW.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, yW.jsx)("span", {
              style: {
                width: (mW > 0 ? 100 * Math.min(1, EW / mW) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function eW(WW) {
      let {
        icon: iW,
        name: OW,
        selected: mW,
        locked: EW,
        className: NW,
        buttonRef: PW,
        onSelect: LW,
        children: cW
      } = WW;
      return (0, yW.jsxs)("button", {
        ref: PW,
        type: "button",
        className: wW()("BoardTile", NW, {
          Selected: mW,
          Locked: EW
        }),
        onClick: LW,
        children: [(0, yW.jsx)("span", {
          className: "BoardTileIcon",
          children: iW
        }), (0, yW.jsx)("span", {
          className: "BoardTileName",
          children: OW
        }), cW]
      })
    }

    function vW(WW) {
      let {
        icon: iW,
        name: OW,
        children: mW
      } = WW;
      return (0, yW.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, yW.jsx)("span", {
          className: "BoardDetailIcon",
          children: iW
        }), (0, yW.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, yW.jsx)("h3", {
            children: OW
          }), (0, yW.jsx)("span", {
            className: "BoardDetailStatus",
            children: mW
          })]
        })]
      })
    }

    function gW(WW) {
      let {
        coins: iW,
        children: OW
      } = WW;
      return (0, yW.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, yW.jsx)(uW, {
          itemName: JW,
          amount: iW
        }), OW]
      })
    }
    var DW = OW(39733);
    const VW = "containmentCodexView";
    class pW extends DW.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = WW => {
          this.selectedId = WW, this.emit()
        }
      }
      yZ(WW) {
        this.entries = WW.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const fW = {
        codexAnyDifficulty: `${TW}:codexNeedsAny`,
        codexNormalOnly: `${TW}:codexNeedsNormal`,
        codexHardOnly: `${TW}:codexNeedsHard`
      },
      CW = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      XW = {
        codexContained: `${TW}:codexContainedBadge`,
        codexEncountered: `${TW}:codexEncounteredBadge`,
        codexUnidentified: `${TW}:codexUnidentifiedBadge`
      },
      BW = ["94%", "81%", "88%", "46%", "72%"];

    function qW(WW) {
      let {
        entry: iW
      } = WW;
      const {
        t: OW
      } = (0, ZW.B)();
      return (0, yW.jsx)("span", {
        className: wW()("BoardBadge", CW[iW.codexEntryState]),
        children: OW(XW[iW.codexEntryState])
      })
    }

    function RW(WW) {
      const {
        t: iW
      } = (0, ZW.B)();
      return "codexUnidentified" === WW.codexEntryState ? iW(`${TW}:codexUnidentifiedName`) : WW.codexEntryName
    }

    function GW(WW) {
      let {
        entry: iW
      } = WW;
      return "codexUnidentified" === iW.codexEntryState ? (0, yW.jsx)(HW, {
        itemName: "Book"
      }) : (0, yW.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, yW.jsx)(nW, {
          anomalyId: iW.codexEntryId,
          caught: "codexContained" === iW.codexEntryState
        }), (0, yW.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function IW(WW) {
      let {
        entry: iW,
        selected: OW,
        onSelect: mW
      } = WW;
      const EW = "codexUnidentified" === iW.codexEntryState;
      return (0, yW.jsxs)(eW, {
        icon: (0, yW.jsx)(GW, {
          entry: iW
        }),
        name: RW(iW),
        selected: OW,
        locked: EW,
        className: wW()("CodexFolder", CW[iW.codexEntryState]),
        onSelect: () => {
          mW(iW.codexEntryId)
        },
        children: [!EW && (0, yW.jsx)(qW, {
          entry: iW
        }), EW && (0, yW.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function aW(WW) {
      let {
        count: iW
      } = WW;
      const OW = [];
      for (let mW = Math.min(iW, 25); mW > 0; mW -= 5) OW.push(Math.min(mW, 5));
      return (0, yW.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: OW.map(((WW, iW) => (0, yW.jsx)("span", {
          className: wW()("CodexTallyGroup", {
            Gate: 5 === WW
          }),
          children: Array.from({
            length: Math.min(WW, 4)
          }, ((WW, iW) => (0, yW.jsx)("span", {
            className: "CodexTallyMark"
          }, iW)))
        }, iW)))
      })
    }

    function rW(WW) {
      let {
        contained: iW,
        total: OW
      } = WW;
      const {
        t: mW
      } = (0, ZW.B)();
      return (0, yW.jsxs)("div", {
        className: "CodexProgress",
        children: [mW(`${TW}:codexProgress`, {
          contained: String(iW),
          total: String(OW)
        }), (0, yW.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, yW.jsx)("span", {
            style: {
              width: iW / OW * 100 + "%"
            }
          })
        })]
      })
    }

    function zW(WW) {
      let {
        entry: iW,
        fileNumber: OW
      } = WW;
      const {
        t: mW
      } = (0, ZW.B)(), EW = "codexContained" === iW.codexEntryState;
      return (0, yW.jsx)("section", {
        className: "BoardDetail",
        children: (0, yW.jsxs)("article", {
          className: wW()("CodexDossier", CW[iW.codexEntryState]),
          children: [(0, yW.jsx)("span", {
            className: "CodexFileNumber",
            children: mW(`${TW}:codexFileNumber`, {
              number: String(OW).padStart(3, "0")
            })
          }), (0, yW.jsx)(vW, {
            icon: (0, yW.jsx)(GW, {
              entry: iW
            }),
            name: RW(iW),
            children: (0, yW.jsx)(qW, {
              entry: iW
            })
          }), EW && (0, yW.jsxs)(yW.Fragment, {
            children: [(0, yW.jsx)("p", {
              className: "BoardDescription",
              children: iW.codexEntryLore
            }), (0, yW.jsxs)("p", {
              className: "CodexTally",
              children: [mW(`${TW}:codexContainments`, {
                count: String(iW.codexEntryContainedCount)
              }), (0, yW.jsx)(aW, {
                count: iW.codexEntryContainedCount
              })]
            }), (0, yW.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: mW(`${TW}:codexContainedBadge`)
            })]
          }), !EW && (0, yW.jsxs)(yW.Fragment, {
            children: [(0, yW.jsxs)("div", {
              className: "CodexRedaction",
              children: [BW.map((WW => (0, yW.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: WW
                }
              }, WW))), (0, yW.jsx)("p", {
                className: "CodexRedacted",
                children: mW(`${TW}:codexRedacted`)
              })]
            }), "" !== iW.codexEntryHint && (0, yW.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, yW.jsx)("h4", {
                children: mW(`${TW}:codexHintLabel`)
              }), (0, yW.jsx)("p", {
                children: iW.codexEntryHint
              })]
            }), (0, yW.jsx)("p", {
              className: "CodexClearance",
              children: mW(fW[iW.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function FW(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, tW.g)(VW, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZW.B)();
      if (0 === OW.entries.length) return null;
      const EW = OW.entries.find((WW => WW.codexEntryId === OW.selectedId)),
        NW = OW.entries.filter((WW => "codexContained" === WW.codexEntryState)).length,
        PW = OW.entries.map((WW => WW.codexEntryId)).sort().indexOf(EW.codexEntryId) + 1;
      return (0, yW.jsxs)(hW, {
        open: OW.open,
        onDismiss: iW.dismiss,
        title: mW(`${TW}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, yW.jsx)(rW, {
          contained: NW,
          total: OW.entries.length
        }),
        children: [(0, yW.jsx)("div", {
          className: "BoardTiles",
          children: OW.entries.map((WW => (0, yW.jsx)(IW, {
            entry: WW,
            selected: WW === EW,
            onSelect: iW.select
          }, WW.codexEntryId)))
        }), (0, yW.jsx)(zW, {
          entry: EW,
          fileNumber: PW
        })]
      })
    }
    var QW = OW(344);
    class Wi extends DW.e {
      constructor(WW, iW, OW, mW, EW, NW) {
        super(WW, iW, OW), this.pacer = mW, this.command = EW, this.predict = NW, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = WW => {
          this.selectedId = WW, this.emit()
        }, this.act = (WW, iW) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${WW} ${iW}`, this.rollBack)) return;
          const OW = this.predict(this.board, WW, iW);
          null !== OW && (this.board = OW.board, this.notice = OW.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = mW.subscribe((() => {
          this.emit()
        }))
      }
      yZ(WW) {
        const iW = this.messageOpens(WW);
        if (iW && this.open) return this.board === this.confirmed && (this.board = WW), this.confirmed = WW, void this.emit();
        if (this.board = WW, this.confirmed = WW, this.pacer.onReply(), iW) return this.notice = null, this.selectedId = this.openingSelection(WW), void this.show();
        const OW = this.messageNotice(WW);
        null !== OW && (this.notice = OW), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function ii(WW, iW) {
      return WW.loadoutCoins >= iW.loadoutCostCoins && iW.loadoutCostParts.every((iW => function(WW, iW) {
        return Oi(WW, iW).loadoutHeldPartAmount
      }(WW, iW.loadoutPartCurrency) >= iW.loadoutPartAmount))
    }

    function Oi(WW, iW) {
      return WW.loadoutHeldParts.find((WW => WW.loadoutHeldPartCurrency === iW))
    }

    function mi(WW, iW) {
      return WW.loadoutSlots.find((WW => WW.loadoutSlotKind === iW))
    }

    function Ei(WW) {
      return WW.loadoutPerks.filter((WW => WW.loadoutPerkEquipped)).length >= WW.loadoutMaxPerks
    }

    function Ni(WW, iW, OW) {
      for (const EW of WW.loadoutSlots) {
        const mW = EW.loadoutSlotOptions.find((WW => WW.loadoutOptionId === OW));
        if (mW) return "loadoutArmour" === EW.loadoutSlotKind ? Li(WW, EW, mW, iW) : Pi(WW, EW, mW, iW)
      }
      const mW = WW.loadoutPerks.find((WW => WW.loadoutPerkId === OW));
      return mW ? function(WW, iW, OW) {
        const mW = iW.loadoutPerkOwned,
          EW = iW.loadoutPerkEquipped,
          NW = iW.loadoutPerkName,
          PW = Ei(WW);
        if ("loadoutUnlock" === OW) {
          if (mW || !ii(WW, iW.loadoutPerkCost)) return null;
          const OW = {
            ...iW,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !PW
          };
          return {
            board: wi(ti(WW, iW.loadoutPerkCost), OW),
            notice: Zi(PW ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", NW)
          }
        }
        if ("loadoutUpgrade" === OW || !mW || "loadoutEquip" === OW === EW || !EW && PW) return null;
        return {
          board: wi(WW, {
            ...iW,
            loadoutPerkEquipped: !EW
          }),
          notice: Zi(EW ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", NW)
        }
      }(WW, mW, iW) : null
    }

    function Pi(WW, iW, OW, mW) {
      const EW = OW.loadoutOptionOwnedTier,
        NW = OW.loadoutOptionName;
      if ("loadoutEquip" === mW) return 0 === EW ? null : {
        board: ci(WW, iW, OW.loadoutOptionId, null),
        notice: Zi("loadoutNoticeEquipped", NW)
      };
      const PW = "loadoutUnlock" === mW;
      if (PW && 0 !== EW || "loadoutUpgrade" === mW && (0 === EW || EW >= OW.loadoutOptionTiers.length) || "loadoutUnequip" === mW) return null;
      const LW = OW.loadoutOptionTiers[EW].loadoutTierCost;
      if (!ii(WW, LW)) return null;
      const cW = {
          ...OW,
          loadoutOptionOwnedTier: EW + 1
        },
        wW = PW ? OW.loadoutOptionId : iW.loadoutSlotEquippedId;
      return {
        board: ci(ti(WW, LW), iW, wW, cW),
        notice: PW ? Zi("loadoutNoticeUnlocked", NW) : Zi("loadoutNoticeUpgraded", NW, EW + 1)
      }
    }

    function Li(WW, iW, OW, mW) {
      const EW = OW.loadoutOptionOwnedTier > 0,
        NW = OW.loadoutOptionName;
      if ("loadoutEquip" === mW && EW) return {
        board: ci(WW, iW, OW.loadoutOptionId, null),
        notice: Zi("loadoutNoticeEquipped", NW)
      };
      const PW = OW.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== mW || EW || !ii(WW, PW) ? null : {
        board: ci(ti(WW, PW), iW, OW.loadoutOptionId, {
          ...OW,
          loadoutOptionOwnedTier: 1
        }),
        notice: Zi("loadoutNoticeUnlocked", NW)
      }
    }

    function ci(WW, iW, OW, mW) {
      const EW = {
        ...iW,
        loadoutSlotEquippedId: OW,
        loadoutSlotOptions: iW.loadoutSlotOptions.map((WW => null !== mW && WW.loadoutOptionId === mW.loadoutOptionId ? mW : WW))
      };
      return {
        ...WW,
        loadoutSlots: WW.loadoutSlots.map((WW => WW === iW ? EW : WW))
      }
    }

    function wi(WW, iW) {
      return {
        ...WW,
        loadoutPerks: WW.loadoutPerks.map((WW => WW.loadoutPerkId === iW.loadoutPerkId ? iW : WW))
      }
    }

    function ti(WW, iW) {
      return {
        ...WW,
        loadoutCoins: WW.loadoutCoins - iW.loadoutCostCoins,
        loadoutHeldParts: WW.loadoutHeldParts.map((WW => {
          const OW = iW.loadoutCostParts.find((iW => iW.loadoutPartCurrency === WW.loadoutHeldPartCurrency));
          return OW ? {
            ...WW,
            loadoutHeldPartAmount: WW.loadoutHeldPartAmount - OW.loadoutPartAmount
          } : WW
        }))
      }
    }

    function Zi(WW, iW) {
      return {
        loadoutNoticeKey: WW,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: iW,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const xi = "containmentLoadoutView";
    class li extends Wi {
      constructor(WW, iW, OW, mW) {
        super(WW, iW, OW, mW, "loadout", Ni), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = WW => {
          this.slot = WW, this.selectedId = Ai(this.board, WW), this.emit()
        }
      }
      messageOpens(WW) {
        return WW.loadoutMessageOpens
      }
      messageNotice(WW) {
        return WW.loadoutNotice
      }
      openingSelection(WW) {
        return Ai(WW, this.slot)
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

    function Ai(WW, iW) {
      if ("loadoutPerks" === iW) {
        var OW;
        const iW = WW.loadoutPerks;
        return (null !== (OW = iW.find((WW => WW.loadoutPerkEquipped))) && void 0 !== OW ? OW : iW[0]).loadoutPerkId
      }
      return mi(WW, iW).loadoutSlotEquippedId
    }
    const bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var ji = OW(38030),
      Ui = OW(1269);
    const ki = {
        loadoutPrimary: `${TW}:loadoutSlotPrimary`,
        loadoutSecondary: `${TW}:loadoutSlotSecondary`,
        loadoutOffensive: `${TW}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${TW}:loadoutSlotSelfHelp`,
        loadoutArmour: `${TW}:loadoutSlotArmour`,
        loadoutPerks: `${TW}:loadoutSlotPerks`
      },
      si = {
        section: "right",
        Kl: "bottom",
        act: "top"
      },
      Mi = (0, mW.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Ki() {
      const {
        step: WW,
        targetRef: iW
      } = (0, mW.useContext)(Mi);
      return (OW, mW) => (null === WW || void 0 === WW ? void 0 : WW.kind) === OW && WW.id === mW ? iW : void 0
    }

    function Si(WW, iW) {
      const OW = iW.loadoutTargetId;
      if ("loadoutPerks" === iW.loadoutTargetSection) {
        const iW = WW.loadoutPerks.find((WW => WW.loadoutPerkId === OW));
        return {
          name: iW.loadoutPerkName,
          owned: iW.loadoutPerkOwned,
          equipped: iW.loadoutPerkEquipped
        }
      }
      const mW = mi(WW, iW.loadoutTargetSection),
        EW = mW.loadoutSlotOptions.find((WW => WW.loadoutOptionId === OW));
      return {
        name: EW.loadoutOptionName,
        owned: EW.loadoutOptionOwnedTier > 0,
        equipped: mW.loadoutSlotEquippedId === OW
      }
    }

    function Yi(WW, iW, OW, mW) {
      const [EW, NW] = WW(`${TW}:${iW}`, {
        [OW]: "\x01"
      }).split("\x01");
      return (0, yW.jsxs)(yW.Fragment, {
        children: [EW, (0, yW.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: mW
        }), NW]
      })
    }

    function yi(WW) {
      let {
        view: iW,
        onDismiss: OW,
        children: EW
      } = WW;
      const {
        t: NW
      } = (0, ZW.B)(), PW = iW.loadout, LW = iW.open ? PW.loadoutWalkthrough.map((WW => ({
        target: WW,
        info: Si(PW, WW)
      }))).find((WW => {
        let {
          info: iW
        } = WW;
        return !iW.equipped
      })) : void 0;
      let cW = null,
        wW = null;
      if (void 0 !== LW) {
        const {
          target: WW,
          info: OW
        } = LW;
        iW.slot !== WW.loadoutTargetSection ? (cW = {
          kind: "section",
          id: WW.loadoutTargetSection
        }, wW = Yi(NW, "loadoutWalkthroughSection", "section", NW(ki[WW.loadoutTargetSection]))) : iW.selectedId !== WW.loadoutTargetId ? (cW = {
          kind: "Kl",
          id: WW.loadoutTargetId
        }, wW = Yi(NW, "loadoutWalkthroughPick", "name", OW.name)) : (cW = {
          kind: "act",
          id: WW.loadoutTargetId
        }, wW = Yi(NW, OW.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", OW.name))
      }
      const tW = null === cW ? null : function(WW) {
          return `${WW.kind}:${WW.id}`
        }(cW),
        [xW, lW] = (0, mW.useState)(null),
        AW = (0, mW.useCallback)((WW => {
          lW((iW => null !== WW ? {
            key: tW,
            node: WW
          } : (null === iW || void 0 === iW ? void 0 : iW.key) === tW ? null : iW))
        }), [tW]),
        bW = null !== tW && (null === xW || void 0 === xW ? void 0 : xW.key) === tW ? xW.node : null;
      return (0, yW.jsxs)(Mi.Provider, {
        value: {
          step: cW,
          targetRef: AW
        },
        children: [EW, null !== cW && null !== bW && (0, yW.jsx)(Ti, {
          target: bW,
          placement: si[cW.kind],
          onDismiss: OW,
          children: wW
        }, tW)]
      })
    }

    function Ti(WW) {
      let {
        target: iW,
        placement: OW,
        onDismiss: EW,
        children: NW
      } = WW;
      const {
        t: PW
      } = (0, ZW.B)(), LW = (0, mW.useRef)(iW);
      return LW.current = iW, (0, Ui.r)("popup", LW, EW), (0, yW.jsxs)(ji.h, {
        target: iW,
        placement: OW,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, yW.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, yW.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: bi,
            alt: "",
            draggable: !1
          }), (0, yW.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: PW(`${TW}:operatorName`)
          }), (0, yW.jsx)(AW.l, {
            onClick: EW,
            ariaLabel: PW(`${TW}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, yW.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: NW
        })]
      })
    }
    const Ji = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Hi(WW) {
      let {
        cost: iW,
        loadout: OW
      } = WW;
      const {
        t: mW
      } = (0, ZW.B)();
      return iW.loadoutCostCoins <= 0 && 0 === iW.loadoutCostParts.length ? (0, yW.jsx)("span", {
        className: "LoadoutCost",
        children: mW(`${TW}:loadoutFree`)
      }) : (0, yW.jsxs)("span", {
        className: "LoadoutCost",
        children: [iW.loadoutCostCoins > 0 && (0, yW.jsx)(uW, {
          itemName: JW,
          amount: iW.loadoutCostCoins,
          BL: OW.loadoutCoins
        }), iW.loadoutCostParts.map((WW => {
          const iW = Oi(OW, WW.loadoutPartCurrency);
          return (0, yW.jsx)(uW, {
            itemName: iW.loadoutHeldPartItem,
            amount: WW.loadoutPartAmount,
            BL: iW.loadoutHeldPartAmount
          }, WW.loadoutPartCurrency)
        }))]
      })
    }
    const ni = {
      loadoutStatFireRate: `${TW}:loadoutUnitPerMinute`,
      loadoutStatReload: `${TW}:loadoutUnitSeconds`,
      loadoutStatResupply: `${TW}:loadoutUnitSeconds`
    };

    function ui(WW) {
      return "loadoutStatPotency" === WW.loadoutStatKind ? (0, QW.V)(WW.loadoutStatValue) : String(WW.loadoutStatValue)
    }

    function oi(WW) {
      var iW;
      let {
        option: OW
      } = WW;
      const {
        t: mW
      } = (0, ZW.B)(), EW = OW.loadoutOptionTiers, NW = null === (iW = EW[0]) || void 0 === iW ? void 0 : iW.loadoutTierStats.map((WW => WW.loadoutStatKind));
      if (!NW || 0 === NW.length) return null;
      const PW = OW.loadoutOptionOwnedTier,
        LW = (WW, iW) => {
          var OW;
          return null === (OW = EW[WW]) || void 0 === OW ? void 0 : OW.loadoutTierStats.find((WW => WW.loadoutStatKind === iW))
        };
      return (0, yW.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, yW.jsx)("thead", {
          children: (0, yW.jsxs)("tr", {
            children: [(0, yW.jsx)("th", {}), EW.map(((WW, iW) => (0, yW.jsx)("th", {
              className: wW()({
                Current: iW + 1 === PW,
                Next: iW === PW
              }),
              children: mW(`${TW}:loadoutTier`, {
                tier: (0, QW.V)(iW + 1)
              })
            }, iW)))]
          })
        }), (0, yW.jsx)("tbody", {
          children: NW.map((WW => {
            const iW = ni[WW];
            return (0, yW.jsxs)("tr", {
              children: [(0, yW.jsxs)("th", {
                scope: "row",
                children: [mW(`${TW}:${WW}`), iW && (0, yW.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: mW(iW)
                })]
              }), EW.map(((iW, OW) => {
                const mW = LW(OW, WW),
                  EW = OW > 0 ? LW(OW - 1, WW) : void 0,
                  NW = mW && EW ? mW.loadoutStatValue - EW.loadoutStatValue : 0,
                  cW = Ji.has(WW) ? NW < 0 : NW > 0,
                  tW = OW === PW;
                return (0, yW.jsxs)("td", {
                  className: wW()({
                    Current: OW + 1 === PW,
                    Next: tW,
                    Gain: cW,
                    Owned: OW < PW
                  }),
                  children: [tW && cW && (0, yW.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: NW < 0 ? "\u25bc" : "\u25b2"
                  }), mW ? ui(mW) : "-"]
                }, OW)
              }))]
            }, WW)
          }))
        })]
      })
    }

    function di(WW) {
      let {
        view: iW,
        controller: OW,
        slot: mW,
        option: EW
      } = WW;
      const {
        t: NW
      } = (0, ZW.B)(), PW = iW.loadout, LW = EW.loadoutOptionOwnedTier, cW = EW.loadoutOptionTiers.length, wW = mW.loadoutSlotEquippedId === EW.loadoutOptionId, tW = LW < cW ? EW.loadoutOptionTiers[LW].loadoutTierCost : null, xW = null !== tW && ii(PW, tW), lW = EW.loadoutOptionId, bW = Ki();
      return (0, yW.jsxs)(yW.Fragment, {
        children: [(0, yW.jsx)(vi, {
          icon: EW.loadoutOptionIcon,
          name: EW.loadoutOptionName,
          status: 0 === LW ? NW(`${TW}:loadoutLocked`) : cW > 1 ? NW(`${TW}:loadoutTier`, {
            tier: (0, QW.V)(LW)
          }) : null,
          locked: 0 === LW,
          equipped: wW
        }), (0, yW.jsx)("p", {
          className: "BoardDescription",
          children: EW.loadoutOptionDescription
        }), (0, yW.jsx)(oi, {
          option: EW
        }), (0, yW.jsxs)("div", {
          ref: bW("act", lW),
          className: "BoardActions",
          children: [null !== tW && (0, yW.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, yW.jsx)(Hi, {
              cost: tW,
              loadout: PW
            }), (0, yW.jsx)(AW.n, {
              disabled: !xW || iW.pending,
              onClick: () => {
                OW.act(0 === LW ? "loadoutUnlock" : "loadoutUpgrade", lW)
              },
              children: 0 === LW ? NW(`${TW}:loadoutUnlock`) : NW(`${TW}:loadoutUpgrade`, {
                tier: (0, QW.V)(LW + 1)
              })
            })]
          }), null === tW && cW > 1 && (0, yW.jsx)("span", {
            className: "BoardHint",
            children: NW(`${TW}:loadoutMaxed`)
          }), LW > 0 && !wW && (0, yW.jsx)(AW.f, {
            disabled: iW.pending,
            onClick: () => {
              OW.act("loadoutEquip", lW)
            },
            children: NW(`${TW}:loadoutEquip`)
          })]
        })]
      })
    }

    function ei(WW) {
      let {
        view: iW,
        controller: OW,
        perk: mW
      } = WW;
      const {
        t: EW
      } = (0, ZW.B)(), NW = iW.loadout, PW = Ei(NW), LW = mW.loadoutPerkId, cW = Ki();
      return (0, yW.jsxs)(yW.Fragment, {
        children: [(0, yW.jsx)(vi, {
          icon: mW.loadoutPerkIcon,
          name: mW.loadoutPerkName,
          status: mW.loadoutPerkOwned ? null : EW(`${TW}:loadoutLocked`),
          locked: !mW.loadoutPerkOwned,
          equipped: mW.loadoutPerkEquipped
        }), (0, yW.jsx)("p", {
          className: "BoardDescription",
          children: mW.loadoutPerkDescription
        }), (0, yW.jsxs)("div", {
          ref: cW("act", LW),
          className: "BoardActions",
          children: [!mW.loadoutPerkOwned && (0, yW.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, yW.jsx)(Hi, {
              cost: mW.loadoutPerkCost,
              loadout: NW
            }), (0, yW.jsx)(AW.n, {
              disabled: !ii(NW, mW.loadoutPerkCost) || iW.pending,
              onClick: () => {
                OW.act("loadoutUnlock", LW)
              },
              children: EW(`${TW}:loadoutUnlock`)
            })]
          }), mW.loadoutPerkOwned && !mW.loadoutPerkEquipped && (0, yW.jsx)(AW.f, {
            disabled: PW || iW.pending,
            onClick: () => {
              OW.act("loadoutEquip", LW)
            },
            children: EW(`${TW}:loadoutEquip`)
          }), mW.loadoutPerkOwned && !mW.loadoutPerkEquipped && PW && (0, yW.jsx)("span", {
            className: "BoardHint",
            children: EW(`${TW}:loadoutSocketsFullHint`)
          }), mW.loadoutPerkEquipped && (0, yW.jsx)(AW.Z, {
            disabled: iW.pending,
            onClick: () => {
              OW.act("loadoutUnequip", LW)
            },
            children: EW(`${TW}:loadoutUnequip`)
          })]
        })]
      })
    }

    function vi(WW) {
      let {
        icon: iW,
        name: OW,
        status: mW,
        locked: EW,
        equipped: NW
      } = WW;
      const {
        t: PW
      } = (0, ZW.B)();
      return (0, yW.jsxs)(vW, {
        icon: (0, yW.jsx)(HW, {
          itemName: iW
        }),
        name: OW,
        children: [null !== mW && (0, yW.jsx)("span", {
          className: wW()("LoadoutStatusText", {
            Locked: EW
          }),
          children: mW
        }), NW && (0, yW.jsx)("span", {
          className: "BoardBadge",
          children: PW(`${TW}:loadoutEquippedBadge`)
        })]
      })
    }

    function gi(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const mW = iW.loadout;
      if ("loadoutPerks" === iW.slot) {
        const WW = mW.loadoutPerks.find((WW => WW.loadoutPerkId === iW.selectedId));
        return (0, yW.jsx)("section", {
          className: "BoardDetail",
          children: WW && (0, yW.jsx)(ei, {
            view: iW,
            controller: OW,
            perk: WW
          })
        })
      }
      const EW = mi(mW, iW.slot),
        NW = EW.loadoutSlotOptions.find((WW => WW.loadoutOptionId === iW.selectedId));
      return (0, yW.jsx)("section", {
        className: "BoardDetail",
        children: NW && (0, yW.jsx)(di, {
          view: iW,
          controller: OW,
          slot: EW,
          option: NW
        })
      })
    }

    function Di(WW) {
      let {
        owned: iW,
        total: OW
      } = WW;
      return OW <= 1 ? null : (0, yW.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: OW
        }, ((WW, OW) => (0, yW.jsx)("span", {
          className: wW()("LoadoutPip", {
            Filled: OW < iW
          })
        }, OW)))
      })
    }

    function Vi(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, ZW.B)(), EW = iW.loadout, NW = Ki();
      return (0, yW.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": mW(`${TW}:loadoutKit`),
        children: [EW.loadoutSlots.map((WW => {
          const EW = WW.loadoutSlotOptions.find((iW => iW.loadoutOptionId === WW.loadoutSlotEquippedId));
          return (0, yW.jsxs)("button", {
            ref: NW("section", WW.loadoutSlotKind),
            type: "button",
            className: wW()("LoadoutKitSlot", {
              Selected: iW.slot === WW.loadoutSlotKind
            }),
            onClick: () => {
              OW.selectSlot(WW.loadoutSlotKind)
            },
            children: [(0, yW.jsx)("span", {
              className: "LoadoutKitIcon",
              children: EW && (0, yW.jsx)(HW, {
                itemName: EW.loadoutOptionIcon
              })
            }), (0, yW.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, yW.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, yW.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: mW(ki[WW.loadoutSlotKind])
                }), EW && (0, yW.jsx)(Di, {
                  owned: EW.loadoutOptionOwnedTier,
                  total: EW.loadoutOptionTiers.length
                })]
              }), (0, yW.jsx)("span", {
                className: "LoadoutKitName",
                children: null === EW || void 0 === EW ? void 0 : EW.loadoutOptionName
              })]
            })]
          }, WW.loadoutSlotKind)
        })), (0, yW.jsx)(fi, {
          view: iW,
          controller: OW
        })]
      })
    }

    function fi(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, ZW.B)(), EW = iW.loadout, NW = EW.loadoutPerks.filter((WW => WW.loadoutPerkEquipped)), PW = Ki();
      return (0, yW.jsxs)("button", {
        ref: PW("section", "loadoutPerks"),
        type: "button",
        className: wW()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === iW.slot
        }),
        onClick: () => {
          OW.selectSlot("loadoutPerks")
        },
        children: [(0, yW.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, yW.jsx)("span", {
            className: "LoadoutKitLabel",
            children: mW(ki.loadoutPerks)
          }), (0, yW.jsx)("span", {
            className: "LoadoutPerkCount",
            children: mW(`${TW}:loadoutPerkCount`, {
              equipped: String(NW.length),
              max: String(EW.loadoutMaxPerks)
            })
          })]
        }), (0, yW.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: EW.loadoutMaxPerks
          }, ((WW, iW) => {
            const OW = NW[iW];
            return (0, yW.jsxs)("span", {
              className: wW()("LoadoutSocket", {
                Filled: OW,
                Empty: !OW
              }),
              children: [(0, yW.jsx)("span", {
                className: "LoadoutSocketWell",
                children: OW && (0, yW.jsx)(HW, {
                  itemName: OW.loadoutPerkIcon
                })
              }), (0, yW.jsx)("span", {
                className: "LoadoutSocketName",
                children: OW ? OW.loadoutPerkName : mW(`${TW}:loadoutPerkSocketEmpty`)
              })]
            }, iW)
          }))
        })]
      })
    }

    function Ci(WW) {
      let {
        icon: iW,
        name: OW,
        selected: mW,
        equipped: EW,
        locked: NW,
        ownedTier: PW,
        tiers: LW,
        buttonRef: cW,
        onSelect: wW
      } = WW;
      const {
        t: tW
      } = (0, ZW.B)();
      return (0, yW.jsxs)(eW, {
        icon: (0, yW.jsx)(HW, {
          itemName: iW
        }),
        name: OW,
        selected: mW,
        locked: NW,
        buttonRef: cW,
        onSelect: wW,
        children: [EW && (0, yW.jsx)("span", {
          className: "BoardBadge",
          children: tW(`${TW}:loadoutEquippedBadge`)
        }), NW && (0, yW.jsx)("span", {
          className: "BoardBadge Muted",
          children: tW(`${TW}:loadoutLocked`)
        }), !NW && (0, yW.jsx)(Di, {
          owned: PW,
          total: LW
        })]
      })
    }

    function Xi(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const mW = iW.loadout,
        EW = Ki();
      if ("loadoutPerks" === iW.slot) return (0, yW.jsx)("div", {
        className: "BoardTiles",
        children: mW.loadoutPerks.map((WW => (0, yW.jsx)(Ci, {
          icon: WW.loadoutPerkIcon,
          name: WW.loadoutPerkName,
          selected: iW.selectedId === WW.loadoutPerkId,
          equipped: WW.loadoutPerkEquipped,
          locked: !WW.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: EW("Kl", WW.loadoutPerkId),
          onSelect: () => {
            OW.select(WW.loadoutPerkId)
          }
        }, WW.loadoutPerkId)))
      });
      const NW = mi(mW, iW.slot);
      return (0, yW.jsx)("div", {
        className: "BoardTiles",
        children: NW.loadoutSlotOptions.map((WW => (0, yW.jsx)(Ci, {
          icon: WW.loadoutOptionIcon,
          name: WW.loadoutOptionName,
          selected: iW.selectedId === WW.loadoutOptionId,
          equipped: NW.loadoutSlotEquippedId === WW.loadoutOptionId,
          locked: 0 === WW.loadoutOptionOwnedTier,
          ownedTier: WW.loadoutOptionOwnedTier,
          tiers: WW.loadoutOptionTiers.length,
          buttonRef: EW("Kl", WW.loadoutOptionId),
          onSelect: () => {
            OW.select(WW.loadoutOptionId)
          }
        }, WW.loadoutOptionId)))
      })
    }

    function Bi(WW) {
      let {
        loadout: iW
      } = WW;
      return (0, yW.jsx)(gW, {
        coins: iW.loadoutCoins,
        children: iW.loadoutHeldParts.filter((WW => WW.loadoutHeldPartAmount > 0)).map((WW => (0, yW.jsx)(uW, {
          itemName: WW.loadoutHeldPartItem,
          amount: WW.loadoutHeldPartAmount
        }, WW.loadoutHeldPartCurrency)))
      })
    }

    function qi(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, tW.g)(xi, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZW.B)();
      if (null === OW.loadout) return null;
      const EW = OW.notice;
      return (0, yW.jsx)(yi, {
        view: OW,
        onDismiss: iW.dismiss,
        children: (0, yW.jsxs)(hW, {
          open: OW.open,
          onDismiss: iW.dismiss,
          title: mW(`${TW}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, yW.jsx)(Bi, {
            loadout: OW.loadout
          }),
          statusRefused: null === EW || void 0 === EW ? void 0 : EW.loadoutNoticeRefused,
          status: (0, yW.jsxs)(yW.Fragment, {
            children: [(0, yW.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: mW(`${TW}:loadoutRadioBadge`)
            }), null !== EW && mW(`${TW}:${EW.loadoutNoticeKey}`, {
              name: EW.loadoutNoticeName,
              tier: (0, QW.V)(EW.loadoutNoticeTier),
              max: String(OW.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, yW.jsx)(Vi, {
            view: OW,
            controller: iW
          }), (0, yW.jsx)(Xi, {
            view: OW,
            controller: iW
          }), (0, yW.jsx)(gi, {
            view: OW,
            controller: iW
          })]
        })
      })
    }

    function Ri(WW, iW, OW) {
      const mW = WW.locatorEntries.find((WW => WW.locatorEntryId === OW));
      if (!mW) return null;
      const EW = mW.locatorEntryName;
      if ("locatorDisarm" === iW) return mW.locatorEntryArmed ? {
        board: Gi(WW, null),
        notice: Ii("locatorNoticeDisarmed", EW)
      } : null;
      if ("locatorArm" === iW) return mW.locatorEntryOwned && !mW.locatorEntryArmed ? {
        board: Gi(WW, OW),
        notice: Ii("locatorNoticeArmed", EW)
      } : null;
      if (mW.locatorEntryOwned || WW.locatorCoins < mW.locatorEntryPrice) return null;
      const NW = Gi({
        ...WW,
        locatorCoins: WW.locatorCoins - mW.locatorEntryPrice
      }, OW);
      return {
        board: {
          ...NW,
          locatorEntries: NW.locatorEntries.map((WW => WW.locatorEntryId === OW ? {
            ...WW,
            locatorEntryOwned: !0
          } : WW))
        },
        notice: Ii("locatorNoticeBought", EW)
      }
    }

    function Gi(WW, iW) {
      return {
        ...WW,
        locatorEntries: WW.locatorEntries.map((WW => {
          const OW = WW.locatorEntryId === iW;
          return WW.locatorEntryArmed === OW ? WW : {
            ...WW,
            locatorEntryArmed: OW
          }
        }))
      }
    }

    function Ii(WW, iW) {
      return {
        locatorNoticeKey: WW,
        locatorNoticeRefused: !1,
        locatorNoticeName: iW
      }
    }
    const ai = "containmentLocatorView";
    class ri extends Wi {
      constructor(WW, iW, OW, mW) {
        super(WW, iW, OW, mW, "locator", Ri), this.snapshot = this.buildSnapshot()
      }
      messageOpens(WW) {
        return WW.locatorMessageOpens
      }
      messageNotice(WW) {
        return WW.locatorNotice
      }
      openingSelection(WW) {
        var iW;
        const OW = WW.locatorEntries;
        return (null !== (iW = OW.find((WW => WW.locatorEntryArmed))) && void 0 !== iW ? iW : OW[0]).locatorEntryId
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
    const zi = {
        locatorContained: `${TW}:locatorFlavourContained`,
        locatorEncountered: `${TW}:locatorFlavourEncountered`,
        locatorUnseen: `${TW}:locatorFlavourUnseen`
      },
      Fi = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${TW}:locatorAttunedNormal`,
        codexHardOnly: `${TW}:locatorAttunedHard`
      };

    function Qi() {
      return (0, yW.jsx)(yW.Fragment, {
        children: Array.from({
          length: 5
        }, ((WW, iW) => (0, yW.jsx)("span", {
          className: "LocatorFly",
          children: (0, yW.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, iW)))
      })
    }

    function WO(WW) {
      let {
        entry: iW
      } = WW;
      const {
        t: OW
      } = (0, ZW.B)();
      return iW.locatorEntryArmed ? (0, yW.jsx)("span", {
        className: "BoardBadge Armed",
        children: OW(`${TW}:locatorArmedBadge`)
      }) : iW.locatorEntryOwned ? (0, yW.jsx)("span", {
        className: "BoardBadge",
        children: OW(`${TW}:locatorOwnedBadge`)
      }) : null
    }

    function iO(WW) {
      let {
        entry: iW,
        coins: OW,
        inTile: mW = !1
      } = WW;
      return (0, yW.jsx)(uW, {
        itemName: JW,
        amount: iW.locatorEntryPrice,
        BL: OW,
        inTile: mW
      })
    }

    function OO(WW) {
      let {
        view: iW,
        controller: OW,
        entry: mW
      } = WW;
      const {
        t: EW
      } = (0, ZW.B)(), NW = mW.locatorEntryId, PW = iW.locators.locatorEntries.find((WW => WW.locatorEntryArmed && WW !== mW));
      return (0, yW.jsxs)("div", {
        className: "BoardActions",
        children: [mW.locatorEntryArmed && (0, yW.jsx)(AW.Z, {
          disabled: iW.pending,
          onClick: () => {
            OW.act("locatorDisarm", NW)
          },
          children: EW(`${TW}:locatorDisarm`)
        }), mW.locatorEntryOwned && !mW.locatorEntryArmed && (0, yW.jsx)(AW.f, {
          disabled: iW.pending,
          onClick: () => {
            OW.act("locatorArm", NW)
          },
          children: EW(`${TW}:locatorArm`)
        }), !mW.locatorEntryOwned && (0, yW.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, yW.jsx)(iO, {
            entry: mW,
            coins: iW.locators.locatorCoins
          }), (0, yW.jsx)(AW.n, {
            disabled: iW.locators.locatorCoins < mW.locatorEntryPrice || iW.pending,
            onClick: () => {
              OW.act("locatorBuy", NW)
            },
            children: EW(`${TW}:locatorBuy`)
          })]
        }), PW && !mW.locatorEntryArmed && (0, yW.jsx)("span", {
          className: "BoardHint",
          children: EW(`${TW}:locatorReplacesHint`, {
            name: PW.locatorEntryName
          })
        })]
      })
    }

    function mO(WW) {
      let {
        entry: iW
      } = WW;
      return "locatorUnseen" === iW.locatorEntryStanding ? (0, yW.jsx)(HW, {
        itemName: "Compass"
      }) : (0, yW.jsx)(nW, {
        anomalyId: iW.locatorEntryId,
        caught: "locatorContained" === iW.locatorEntryStanding
      })
    }

    function EO(WW) {
      let {
        view: iW,
        controller: OW,
        entry: mW
      } = WW;
      const {
        t: EW
      } = (0, ZW.B)(), NW = Fi[mW.locatorEntryDifficulty];
      return (0, yW.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, yW.jsxs)("div", {
          className: wW()("LocatorLabel", {
            Armed: mW.locatorEntryArmed
          }),
          children: [(0, yW.jsx)(vW, {
            icon: (0, yW.jsx)(mO, {
              entry: mW
            }),
            name: EW(`${TW}:locatorName`, {
              name: mW.locatorEntryName
            }),
            children: (0, yW.jsx)(WO, {
              entry: mW
            })
          }), (0, yW.jsx)("p", {
            className: "BoardDescription",
            children: EW(mW.locatorEntryArmed ? `${TW}:locatorFlavourArmed` : zi[mW.locatorEntryStanding])
          }), null !== NW && (0, yW.jsx)("p", {
            className: "LocatorAttuned",
            children: EW(NW)
          }), (0, yW.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: EW(`${TW}:locatorUsage`)
          })]
        }), (0, yW.jsx)(OO, {
          view: iW,
          controller: OW,
          entry: mW
        })]
      })
    }

    function NO(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, tW.g)(ai, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZW.B)(),
        EW = OW.locators;
      if (null === EW) return null;
      const NW = EW.locatorEntries.find((WW => WW.locatorEntryId === OW.selectedId)),
        PW = OW.notice;
      return (0, yW.jsxs)(hW, {
        open: OW.open,
        onDismiss: iW.dismiss,
        title: mW(`${TW}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, yW.jsx)(Qi, {}),
        headerExtra: (0, yW.jsx)(gW, {
          coins: EW.locatorCoins
        }),
        statusRefused: null === PW || void 0 === PW ? void 0 : PW.locatorNoticeRefused,
        status: (0, yW.jsxs)(yW.Fragment, {
          children: [(0, yW.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: mW(`${TW}:locatorKeeperName`)
          }), null !== PW && mW(`${TW}:${PW.locatorNoticeKey}`, {
            name: PW.locatorNoticeName
          })]
        }),
        children: [(0, yW.jsx)("div", {
          className: "BoardTiles",
          children: EW.locatorEntries.map((WW => (0, yW.jsxs)(eW, {
            icon: (0, yW.jsx)(mO, {
              entry: WW
            }),
            name: WW.locatorEntryName,
            selected: WW === NW,
            locked: !1,
            className: wW()("LocatorTag", {
              Armed: WW.locatorEntryArmed
            }),
            onSelect: () => {
              iW.select(WW.locatorEntryId)
            },
            children: [(0, yW.jsx)(WO, {
              entry: WW
            }), !WW.locatorEntryOwned && (0, yW.jsx)(iO, {
              entry: WW,
              coins: EW.locatorCoins,
              inTile: !0
            })]
          }, WW.locatorEntryId)))
        }), (0, yW.jsx)(EO, {
          view: OW,
          controller: iW,
          entry: NW
        })]
      })
    }

    function PO(WW) {
      let {
        loadout: iW,
        codex: OW,
        locator: mW
      } = WW;
      return (0, yW.jsxs)(yW.Fragment, {
        children: [(0, yW.jsx)(qi, {
          controller: iW
        }), (0, yW.jsx)(FW, {
          controller: OW
        }), (0, yW.jsx)(NO, {
          controller: mW
        })]
      })
    }
    var LO = OW(39775);
    class cO {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = WW, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new LO.c({
          spacingMs: 0,
          now: iW
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(WW, iW) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, iW(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(WW), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
    }
    var wO = OW(39767);
    const tO = new Map([
      ["npc_general", bi],
      ["npc_tentacle_guy", wO]
    ]);

    function ZO(WW) {
      const iW = tO.get(WW);
      if (void 0 === iW) return null;
      const OW = document.createElement("img");
      return OW.src = iW, OW.alt = "", OW.draggable = !1, OW.style.imageRendering = "pixelated", OW
    }
    const xO = function() {
      let WW, iW = !1,
        OW = null,
        cW = null;
      const wW = [],
        tW = WW => {
          for (const iW of wW) iW !== WW && iW.close();
          (0, LW.H)()
        },
        ZW = WW => {
          WW && (0, LW.q)()
        },
        xW = new cO((iW => {
          WW.sendCommand(iW)
        })),
        lW = new li((WW => {
          PW.l.iZ(xi, WW, !0)
        }), tW, ZW, xW),
        AW = new pW((WW => {
          PW.l.iZ(VW, WW, !0)
        }), tW, ZW),
        bW = new ri((WW => {
          PW.l.iZ(ai, WW, !0)
        }), tW, ZW, xW);
      wW.push(lW, AW, bW);
      return {
        onCreate: iW => {
          WW = iW, OW = (0, LW.O)(null, {
            content: (0, mW.createElement)(PO, {
              loadout: lW,
              codex: AW,
              locator: bW
            }),
            onClose: () => {
              for (const WW of wW) WW.close()
            }
          }), cW = (0, NW.f)(ZO)
        },
        onReceivedMessageFromServer: (WW, iW) => {
          "containmentLoadout" === WW ? lW.yZ(iW) : "containmentLoadoutClose" === WW ? lW.isOpen() && (lW.close(), (0, LW.m)()) : "containmentCodex" === WW ? AW.yZ(iW) : "containmentLocator" === WW && bW.yZ(iW)
        },
        hZ: () => {
          iW || EW.d.get("loadingOverlayVisible") || (iW = !0, WW.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var WW, iW;
          null === (WW = OW) || void 0 === WW || WW(), OW = null, null === (iW = cW) || void 0 === iW || iW(), cW = null;
          for (const OW of wW) OW.dispose();
          xW.dispose()
        }
      }
    }
  },
  38039: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => gW,
      G: () => DW,
      I: () => eW,
      M: () => VW,
      d: () => cW,
      h: () => HW,
      i: () => LW,
      m: () => dW,
      o: () => JW,
      s: () => SW,
      u: () => oW,
      w: () => uW,
      x: () => TW,
      y: () => vW
    });
    var mW = OW(39);
    const EW = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      NW = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      PW = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      LW = NW.filter((WW => "docsButton" !== WW)),
      cW = PW.filter((WW => "aiHelperButton" !== WW)),
      wW = "codeEditorTutorials",
      tW = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      ZW = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let xW = null,
      lW = null;
    const AW = new Set,
      bW = new Set;
    let jW = null;
    const UW = new Set,
      kW = new Set;

    function sW() {
      kW.forEach((WW => {
        WW()
      }))
    }

    function MW() {
      if (!xW) {
        const WW = mW.i.getItem(wW);
        xW = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof WW && null !== WW ? WW : {}
        }
      }
      return xW
    }

    function KW(WW) {
      const iW = MW();
      iW[WW] || (xW = {
        ...iW,
        [WW]: !0
      }, mW.i.setItem(wW, xW))
    }

    function SW(WW) {
      return "docsOverview" === WW ? NW : "aiHelperOverview" === WW ? PW : lW ? EW[lW] : []
    }

    function YW(WW) {
      return ("worldCodeButton" !== WW || !MW().worldCodeIntroShown) && !UW.has(WW)
    }

    function yW(WW) {
      var iW;
      return (null === (iW = jW) || void 0 === iW ? void 0 : iW.name) === WW ? jW.stepsDone : AW
    }

    function TW(WW, iW) {
      if (! function(WW) {
          return jW ? jW.name === WW : "welcome" === WW
        }(WW) || !YW(iW) || yW(WW).has(iW)) return !1;
      if (jW) return !0;
      const OW = tW[iW];
      return OW ? !MW()[OW] || bW.has(iW) : !MW()[ZW[WW]]
    }

    function JW(WW) {
      var iW;
      return null !== (iW = SW(WW).find((iW => TW(WW, iW)))) && void 0 !== iW ? iW : null
    }

    function hW(WW) {
      var iW;
      KW(ZW[WW]), (null === (iW = jW) || void 0 === iW ? void 0 : iW.name) === WW && (jW = null)
    }

    function HW(WW) {
      const iW = (jW ? [jW.name] : ["welcome", "docsOverview"]).find((iW => JW(iW) === WW));
      if (!iW) return;
      yW(iW).add(WW);
      const OW = tW[WW];
      OW && (KW(OW), jW || bW.add(WW)), null === JW(iW) && hW(iW), sW()
    }

    function nW(WW, iW) {
      const OW = SW(WW),
        mW = yW(WW);
      for (let EW = OW.indexOf(iW) - 1; EW >= 0; EW--)
        if (mW.has(OW[EW]) && YW(OW[EW])) return OW[EW];
      return null
    }

    function uW(WW, iW) {
      return null !== nW(WW, iW)
    }

    function oW(WW, iW) {
      const OW = nW(WW, iW);
      OW && (yW(WW).delete(OW), sW())
    }

    function dW(WW) {
      hW(WW), "welcome" === WW && SW("welcome").forEach((WW => {
        const iW = tW[WW];
        iW && KW(iW)
      })), sW()
    }

    function eW(WW) {
      jW = {
        name: WW,
        stepsDone: new Set
      }, sW()
    }

    function vW() {
      (jW || 0 !== AW.size || 0 !== bW.size) && (jW = null, AW.clear(), bW.clear(), sW())
    }

    function gW(WW, iW) {
      const OW = iW ? WW : lW === WW ? null : lW;
      OW !== lW && (lW = OW, sW())
    }

    function DW(WW, iW) {
      UW.has(WW) === iW && (iW ? UW.delete(WW) : UW.add(WW), sW())
    }

    function VW(WW) {
      return kW.add(WW), () => {
        kW.delete(WW)
      }
    }
  },
  40559: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40568: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40574: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40576: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40580: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40583: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40591: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40598: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40607: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40616: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40619: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40626: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40635: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40640: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40648: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40652: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40661: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40665: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40667: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40673: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40682: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40686: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39767: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);