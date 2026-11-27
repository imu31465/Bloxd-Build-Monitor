export const id = 15;
export const ids = [15];
export const modules = {
  37994: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => BR,
      d: () => XR,
      f: () => MR,
      h: () => eR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(66),
      ZR = GR(83),
      qR = GR(1504),
      iR = GR(1590),
      fR = GR(1501),
      VR = GR(1366),
      KR = GR(1270),
      wR = GR(37999),
      rR = GR(1378);

    function eR(RR) {
      const [JR, GR] = (0, uR.useState)((() => (0, wR.j)(RR)));
      return (0, uR.useEffect)((() => (GR((0, wR.j)(RR)), (0, wR.D)((() => {
        GR((0, wR.j)(RR))
      })))), [RR]), JR
    }

    function aR(RR, JR) {
      "function" === typeof RR ? RR(JR) : RR && (RR.current = JR)
    }

    function LR(RR) {
      let {
        tutorial: JR,
        step: GR,
        enabled: yR = !0
      } = RR;
      const tR = eR(JR);
      return yR && tR === GR
    }

    function nR(RR, JR) {
      const GR = (0, wR.l)(RR),
        yR = GR.indexOf(JR);
      return !GR.slice(yR + 1).some((JR => (0, wR.p)(RR, JR)))
    }

    function UR(RR, JR, GR, yR) {
      let {
        tutorial: tR,
        step: uR,
        waitForClick: ZR = !1,
        onPrevious: qR
      } = RR;
      const iR = JR && (0, wR.o)(tR, uR),
        fR = JR && !nR(tR, uR),
        KR = ZR ? yR : GR;
      let rR = null;
      iR ? rR = () => {
        null === qR || void 0 === qR || qR(), (0, wR.m)(tR, uR)
      } : fR && (rR = () => {
        (0, wR.g)(tR)
      }), (0, VR.u)("popup", null !== KR && void 0 !== KR ? KR : GR, rR, JR && null !== KR, null, iR ? void 0 : "controller:menusSkipTutorial")
    }

    function WR(RR) {
      let {
        tutorial: JR,
        step: GR,
        text: yR,
        waitForClick: tR = !1,
        onPrevious: uR
      } = RR;
      const {
        t: ZR
      } = (0, KR.A)(), qR = nR(JR, GR);
      return (0, rR.jsxs)(rR.Fragment, {
        children: [(0, rR.jsx)("div", {
          className: "TutorialStepText",
          children: yR
        }), (0, rR.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, wR.o)(JR, GR) && (0, rR.jsx)(iR.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === uR || void 0 === uR || uR(), (0, wR.m)(JR, GR)
            },
            children: ZR("tutorial:back")
          }), !tR && (0, rR.jsx)(iR.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wR.e)(GR)
            },
            padDefaultFocus: !0,
            children: ZR(qR ? "tutorial:done" : "tutorial:next")
          }), !qR && (0, rR.jsx)(iR.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wR.g)(JR)
            },
            children: ZR("tutorial:skip")
          })]
        })]
      })
    }
    const AR = 6;

    function CR(RR) {
      let {
        rect: JR,
        margin: GR
      } = RR;
      const yR = Math.max(0, JR.top - GR),
        tR = JR.bottom + GR,
        uR = Math.max(0, JR.left - GR),
        ZR = JR.right + GR;
      return (0, rR.jsxs)(rR.Fragment, {
        children: [(0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: yR
          }
        }), (0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tR,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: yR,
            left: 0,
            width: uR,
            height: tR - yR
          }
        }), (0, rR.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: yR,
            left: ZR,
            right: 0,
            height: tR - yR
          }
        })]
      })
    }

    function XR(RR) {
      let {
        target: JR,
        placement: GR,
        boxRef: yR,
        className: iR,
        spotlight: VR = !0,
        spotlightMargin: KR = AR,
        children: wR
      } = RR;
      const {
        getArrowProps: eR,
        getTooltipProps: aR,
        setTooltipRef: LR,
        setTriggerRef: nR,
        update: UR
      } = (0, qR.b)({
        placement: GR,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, KR]
      });
      (0, uR.useLayoutEffect)((() => {
        nR(JR)
      }), [JR, nR]);
      const WR = function(RR, JR) {
        const [GR, yR] = (0, uR.useState)(null);
        return (0, uR.useEffect)((() => {
          if (!JR || !RR) return void yR(null);
          let GR = 0,
            tR = null;
          const uR = () => {
            const JR = RR.getBoundingClientRect();
            tR && JR.left === tR.left && JR.top === tR.top && JR.width === tR.width && JR.height === tR.height || (tR = JR, yR(JR)), GR = requestAnimationFrame(uR)
          };
          return uR(), () => {
            cancelAnimationFrame(GR)
          }
        }), [RR, JR]), GR
      }(JR, VR);
      (0, uR.useEffect)((() => {
        null === UR || void 0 === UR || UR()
      }), [WR, UR]), (0, uR.useEffect)((() => {
        if (VR || !JR || !UR) return;
        const RR = new ResizeObserver((() => {
          UR()
        }));
        return RR.observe(JR), JR.parentElement && RR.observe(JR.parentElement), () => {
          RR.disconnect()
        }
      }), [JR, VR, UR]), (0, uR.useEffect)((() => {
        VR && (null === JR || void 0 === JR || JR.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [JR, VR]);
      const XR = (0, uR.useCallback)((RR => {
        LR(RR), yR && (yR.current = RR)
      }), [LR, yR]);
      return (0, ZR.createPortal)((0, rR.jsxs)(rR.Fragment, {
        children: [WR && (0, rR.jsx)(CR, {
          rect: WR,
          margin: KR
        }), (0, rR.jsxs)("div", {
          ref: XR,
          ...aR({
            className: tR()("tooltip-container SmallTextLight TutorialStep", iR)
          }),
          children: [wR, (0, rR.jsx)("div", {
            ...eR({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, fR.k)())
    }
    const MR = (0, uR.forwardRef)((function(RR, JR) {
      let {
        placement: GR = "right",
        children: yR,
        ...tR
      } = RR;
      const ZR = LR(tR),
        qR = (0, uR.useRef)(null),
        iR = (0, uR.useRef)(null);
      UR(tR, ZR, qR, iR);
      const [fR, VR] = (0, uR.useState)(null), KR = yR.ref, wR = (0, uR.useCallback)((RR => {
        iR.current = RR, VR(RR), aR(JR, RR), aR(KR, RR)
      }), [JR, KR]);
      return (0, rR.jsxs)(rR.Fragment, {
        children: [(0, uR.cloneElement)(yR, {
          ref: wR
        }), ZR && (0, rR.jsx)(XR, {
          target: fR,
          placement: GR,
          boxRef: qR,
          children: (0, rR.jsx)(WR, {
            ...tR
          })
        })]
      })
    }));

    function BR(RR) {
      const JR = LR(RR),
        GR = (0, uR.useRef)(null);
      return UR(RR, JR, GR, null), JR ? (0, ZR.createPortal)((0, rR.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, rR.jsx)("div", {
          ref: GR,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, rR.jsx)(WR, {
            ...RR
          })
        })
      }), (0, fR.k)()) : null
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
  39727: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor(RR, JR, GR) {
        this.JK = RR, this.beforeOpen = JR, this.afterClose = GR, this.open = !1, this.He = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.He && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(RR) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(RR)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.He = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.He || (this.snapshot = this.buildSnapshot(), this.JK(this.snapshot))
      }
    }
  },
  40575: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => VG
    });
    var yR = GR(66);
    var tR = GR(25),
      uR = GR(2115),
      ZR = GR(32),
      qR = GR(3494),
      iR = GR(1163),
      fR = GR.n(iR),
      VR = GR(1581),
      KR = GR(1270),
      wR = GR(5338),
      rR = GR(1487),
      eR = GR(1590),
      aR = GR(2123),
      LR = GR(1501),
      nR = GR(2105),
      UR = GR(2173),
      WR = GR(216);
    const AR = GR(40582),
      CR = Object.fromEntries(AR.keys().map((RR => [RR.replace(/^\.\/(.*)\.webp$/, "$1"), AR(RR)]))),
      XR = new Set;

    function MR(RR, JR) {
      const GR = JR ? RR : `${RR}-uncaught`,
        yR = (0, WR.b)(CR, GR);
      return void 0 !== yR || XR.has(GR) || (XR.add(GR), console.warn(`Containment Breach has no mugshot ${GR}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), yR
    }
    var BR = GR(1378);
    const lR = "containmentBreach",
      pR = "Gold Coin";

    function gR(RR) {
      let {
        open: JR,
        onDismiss: GR,
        title: yR,
        className: tR,
        decor: uR,
        headerExtra: ZR,
        status: qR,
        statusRefused: iR = !1,
        children: VR
      } = RR;
      const KR = `${tR}Title`;
      return (0, BR.jsx)(wR.e, {
        show: JR,
        close: GR,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, BR.jsxs)("section", {
          className: fR()("ContainmentBoardPanel", tR),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": KR,
          children: [uR && (0, BR.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: uR
          }), (0, BR.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, BR.jsx)("h2", {
              id: KR,
              className: "VisuallyHidden",
              children: yR
            }), ZR, (0, BR.jsx)(eR.l, {
              onClick: GR
            })]
          }), (0, BR.jsx)("div", {
            className: "BoardBody",
            children: VR
          }), void 0 !== qR && (0, BR.jsx)("footer", {
            className: fR()("BoardStatus", {
              Refused: iR
            }),
            children: qR
          })]
        })
      })
    }

    function bR(RR) {
      let {
        itemName: JR
      } = RR;
      return (0, BR.jsx)(aR.b, {
        itemName: JR,
        amount: 0
      })
    }

    function vR(RR) {
      let {
        anomalyId: JR,
        caught: GR
      } = RR;
      const tR = (0, yR.useRef)(null);
      return (0, rR.b)(tR, !GR), (0, BR.jsx)("span", {
        ref: tR,
        className: fR()("BoardMugshot", {
          Uncaught: !GR
        }),
        children: (0, BR.jsx)("img", {
          src: MR(JR, GR),
          alt: "",
          draggable: !1
        })
      })
    }

    function OR(RR) {
      let {
        itemName: JR,
        amount: GR,
        Qq: yR,
        inTile: tR = !1
      } = RR;
      return (0, BR.jsx)(LR.h, {
        delayShow: 200,
        hoverOnly: tR,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, BR.jsx)(NR, {
          itemName: JR,
          amount: GR,
          Qq: yR
        }),
        children: (0, BR.jsxs)("span", {
          className: fR()("BoardChip", {
            Short: void 0 !== yR && yR < GR
          }),
          children: [(0, BR.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, BR.jsx)(bR, {
              itemName: JR
            })
          }), GR.toLocaleString()]
        })
      })
    }
    const xR = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function NR(RR) {
      var JR;
      let {
        itemName: GR,
        amount: yR,
        Qq: tR
      } = RR;
      const {
        t: uR
      } = (0, KR.A)(), ZR = (0, UR.e)("itemInfo", (RR => RR[GR])), {
        lore: qR,
        droppedBy: iR
      } = function(RR) {
        if ("string" !== typeof RR) return {
          lore: RR,
          droppedBy: null
        };
        const JR = xR.exec(RR);
        return null === JR ? {
          lore: RR,
          droppedBy: null
        } : {
          lore: "" === JR[1] ? void 0 : JR[1],
          droppedBy: JR[2]
        }
      }(null === ZR || void 0 === ZR ? void 0 : ZR.description);
      return (0, BR.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, BR.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, BR.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, BR.jsx)(bR, {
              itemName: GR
            })
          }), (0, BR.jsx)(nR.c, {
            text: null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.displayName) && void 0 !== JR ? JR : GR,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== qR || null !== iR) && (0, BR.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== qR && (0, BR.jsx)(nR.c, {
            text: qR,
            className: "BoardChipTooltipDescription"
          }), null !== iR && (0, BR.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, BR.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: uR(`${lR}:chipDroppedBy`)
            }), iR]
          })]
        }), void 0 !== tR && (0, BR.jsxs)("div", {
          className: fR()("BoardChipTooltipHeld", {
            Short: tR < yR
          }),
          children: [(0, BR.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: uR(`${lR}:chipYouHave`)
          }), (0, BR.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, BR.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: tR.toLocaleString()
            }), ` / ${yR.toLocaleString()}`]
          }), (0, BR.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, BR.jsx)("span", {
              style: {
                width: (yR > 0 ? 100 * Math.min(1, tR / yR) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function DR(RR) {
      let {
        icon: JR,
        name: GR,
        selected: yR,
        locked: tR,
        className: uR,
        buttonRef: ZR,
        onSelect: qR,
        children: iR
      } = RR;
      return (0, BR.jsxs)("button", {
        ref: ZR,
        type: "button",
        className: fR()("BoardTile", uR, {
          Selected: yR,
          Locked: tR
        }),
        onClick: qR,
        children: [(0, BR.jsx)("span", {
          className: "BoardTileIcon",
          children: JR
        }), (0, BR.jsx)("span", {
          className: "BoardTileName",
          children: GR
        }), iR]
      })
    }

    function HR(RR) {
      let {
        icon: JR,
        name: GR,
        children: yR
      } = RR;
      return (0, BR.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, BR.jsx)("span", {
          className: "BoardDetailIcon",
          children: JR
        }), (0, BR.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, BR.jsx)("h3", {
            children: GR
          }), (0, BR.jsx)("span", {
            className: "BoardDetailStatus",
            children: yR
          })]
        })]
      })
    }

    function oR(RR) {
      let {
        coins: JR,
        children: GR
      } = RR;
      return (0, BR.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, BR.jsx)(OR, {
          itemName: pR,
          amount: JR
        }), GR]
      })
    }
    var cR = GR(39727);
    const PR = "containmentCodexView";
    class IR extends cR.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = RR => {
          this.selectedId = RR, this.emit()
        }
      }
      BK(RR) {
        this.entries = RR.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const mR = {
        codexAnyDifficulty: `${lR}:codexNeedsAny`,
        codexNormalOnly: `${lR}:codexNeedsNormal`,
        codexHardOnly: `${lR}:codexNeedsHard`
      },
      zR = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      SR = {
        codexContained: `${lR}:codexContainedBadge`,
        codexEncountered: `${lR}:codexEncounteredBadge`,
        codexUnidentified: `${lR}:codexUnidentifiedBadge`
      },
      jR = ["94%", "81%", "88%", "46%", "72%"];

    function dR(RR) {
      let {
        entry: JR
      } = RR;
      const {
        t: GR
      } = (0, KR.A)();
      return (0, BR.jsx)("span", {
        className: fR()("BoardBadge", zR[JR.codexEntryState]),
        children: GR(SR[JR.codexEntryState])
      })
    }

    function ER(RR) {
      const {
        t: JR
      } = (0, KR.A)();
      return "codexUnidentified" === RR.codexEntryState ? JR(`${lR}:codexUnidentifiedName`) : RR.codexEntryName
    }

    function YR(RR) {
      let {
        entry: JR
      } = RR;
      return "codexUnidentified" === JR.codexEntryState ? (0, BR.jsx)(bR, {
        itemName: "Book"
      }) : (0, BR.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, BR.jsx)(vR, {
          anomalyId: JR.codexEntryId,
          caught: "codexContained" === JR.codexEntryState
        }), (0, BR.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function kR(RR) {
      let {
        entry: JR,
        selected: GR,
        onSelect: yR
      } = RR;
      const tR = "codexUnidentified" === JR.codexEntryState;
      return (0, BR.jsxs)(DR, {
        icon: (0, BR.jsx)(YR, {
          entry: JR
        }),
        name: ER(JR),
        selected: GR,
        locked: tR,
        className: fR()("CodexFolder", zR[JR.codexEntryState]),
        onSelect: () => {
          yR(JR.codexEntryId)
        },
        children: [!tR && (0, BR.jsx)(dR, {
          entry: JR
        }), tR && (0, BR.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function QR(RR) {
      let {
        count: JR
      } = RR;
      const GR = [];
      for (let yR = Math.min(JR, 25); yR > 0; yR -= 5) GR.push(Math.min(yR, 5));
      return (0, BR.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: GR.map(((RR, JR) => (0, BR.jsx)("span", {
          className: fR()("CodexTallyGroup", {
            Gate: 5 === RR
          }),
          children: Array.from({
            length: Math.min(RR, 4)
          }, ((RR, JR) => (0, BR.jsx)("span", {
            className: "CodexTallyMark"
          }, JR)))
        }, JR)))
      })
    }

    function FR(RR) {
      let {
        contained: JR,
        total: GR
      } = RR;
      const {
        t: yR
      } = (0, KR.A)();
      return (0, BR.jsxs)("div", {
        className: "CodexProgress",
        children: [yR(`${lR}:codexProgress`, {
          contained: String(JR),
          total: String(GR)
        }), (0, BR.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, BR.jsx)("span", {
            style: {
              width: JR / GR * 100 + "%"
            }
          })
        })]
      })
    }

    function TR(RR) {
      let {
        entry: JR,
        fileNumber: GR
      } = RR;
      const {
        t: yR
      } = (0, KR.A)(), tR = "codexContained" === JR.codexEntryState;
      return (0, BR.jsx)("section", {
        className: "BoardDetail",
        children: (0, BR.jsxs)("article", {
          className: fR()("CodexDossier", zR[JR.codexEntryState]),
          children: [(0, BR.jsx)("span", {
            className: "CodexFileNumber",
            children: yR(`${lR}:codexFileNumber`, {
              number: String(GR).padStart(3, "0")
            })
          }), (0, BR.jsx)(HR, {
            icon: (0, BR.jsx)(YR, {
              entry: JR
            }),
            name: ER(JR),
            children: (0, BR.jsx)(dR, {
              entry: JR
            })
          }), tR && (0, BR.jsxs)(BR.Fragment, {
            children: [(0, BR.jsx)("p", {
              className: "BoardDescription",
              children: JR.codexEntryLore
            }), (0, BR.jsxs)("p", {
              className: "CodexTally",
              children: [yR(`${lR}:codexContainments`, {
                count: String(JR.codexEntryContainedCount)
              }), (0, BR.jsx)(QR, {
                count: JR.codexEntryContainedCount
              })]
            }), (0, BR.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: yR(`${lR}:codexContainedBadge`)
            })]
          }), !tR && (0, BR.jsxs)(BR.Fragment, {
            children: [(0, BR.jsxs)("div", {
              className: "CodexRedaction",
              children: [jR.map((RR => (0, BR.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: RR
                }
              }, RR))), (0, BR.jsx)("p", {
                className: "CodexRedacted",
                children: yR(`${lR}:codexRedacted`)
              })]
            }), "" !== JR.codexEntryHint && (0, BR.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, BR.jsx)("h4", {
                children: yR(`${lR}:codexHintLabel`)
              }), (0, BR.jsx)("p", {
                children: JR.codexEntryHint
              })]
            }), (0, BR.jsx)("p", {
              className: "CodexClearance",
              children: yR(mR[JR.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function sR(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, VR.h)(PR, JR.getSnapshot()),
        {
          t: yR
        } = (0, KR.A)();
      if (0 === GR.entries.length) return null;
      const tR = GR.entries.find((RR => RR.codexEntryId === GR.selectedId)),
        uR = GR.entries.filter((RR => "codexContained" === RR.codexEntryState)).length,
        ZR = GR.entries.map((RR => RR.codexEntryId)).sort().indexOf(tR.codexEntryId) + 1;
      return (0, BR.jsxs)(gR, {
        open: GR.open,
        onDismiss: JR.dismiss,
        title: yR(`${lR}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, BR.jsx)(FR, {
          contained: uR,
          total: GR.entries.length
        }),
        children: [(0, BR.jsx)("div", {
          className: "BoardTiles",
          children: GR.entries.map((RR => (0, BR.jsx)(kR, {
            entry: RR,
            selected: RR === tR,
            onSelect: JR.select
          }, RR.codexEntryId)))
        }), (0, BR.jsx)(TR, {
          entry: tR,
          fileNumber: ZR
        })]
      })
    }
    var hR = GR(377);
    class RJ extends cR.d {
      constructor(RR, JR, GR, yR, tR, uR) {
        super(RR, JR, GR), this.pacer = yR, this.command = tR, this.predict = uR, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = RR => {
          this.selectedId = RR, this.emit()
        }, this.act = (RR, JR) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${RR} ${JR}`, this.rollBack)) return;
          const GR = this.predict(this.board, RR, JR);
          null !== GR && (this.board = GR.board, this.notice = GR.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = yR.subscribe((() => {
          this.emit()
        }))
      }
      BK(RR) {
        const JR = this.messageOpens(RR);
        if (JR && this.open) return this.board === this.confirmed && (this.board = RR), this.confirmed = RR, void this.emit();
        if (this.board = RR, this.confirmed = RR, this.pacer.onReply(), JR) return this.notice = null, this.selectedId = this.openingSelection(RR), void this.show();
        const GR = this.messageNotice(RR);
        null !== GR && (this.notice = GR), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function JJ(RR, JR) {
      return RR.loadoutCoins >= JR.loadoutCostCoins && JR.loadoutCostParts.every((JR => function(RR, JR) {
        return GJ(RR, JR).loadoutHeldPartAmount
      }(RR, JR.loadoutPartCurrency) >= JR.loadoutPartAmount))
    }

    function GJ(RR, JR) {
      return RR.loadoutHeldParts.find((RR => RR.loadoutHeldPartCurrency === JR))
    }

    function yJ(RR, JR) {
      return RR.loadoutSlots.find((RR => RR.loadoutSlotKind === JR))
    }

    function tJ(RR) {
      return RR.loadoutPerks.filter((RR => RR.loadoutPerkEquipped)).length >= RR.loadoutMaxPerks
    }

    function uJ(RR, JR, GR) {
      for (const tR of RR.loadoutSlots) {
        const yR = tR.loadoutSlotOptions.find((RR => RR.loadoutOptionId === GR));
        if (yR) return "loadoutArmour" === tR.loadoutSlotKind ? qJ(RR, tR, yR, JR) : ZJ(RR, tR, yR, JR)
      }
      const yR = RR.loadoutPerks.find((RR => RR.loadoutPerkId === GR));
      return yR ? function(RR, JR, GR) {
        const yR = JR.loadoutPerkOwned,
          tR = JR.loadoutPerkEquipped,
          uR = JR.loadoutPerkName,
          ZR = tJ(RR);
        if ("loadoutUnlock" === GR) {
          if (yR || !JJ(RR, JR.loadoutPerkCost)) return null;
          const GR = {
            ...JR,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !ZR
          };
          return {
            board: fJ(VJ(RR, JR.loadoutPerkCost), GR),
            notice: KJ(ZR ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", uR)
          }
        }
        if ("loadoutUpgrade" === GR || !yR || "loadoutEquip" === GR === tR || !tR && ZR) return null;
        return {
          board: fJ(RR, {
            ...JR,
            loadoutPerkEquipped: !tR
          }),
          notice: KJ(tR ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", uR)
        }
      }(RR, yR, JR) : null
    }

    function ZJ(RR, JR, GR, yR) {
      const tR = GR.loadoutOptionOwnedTier,
        uR = GR.loadoutOptionName;
      if ("loadoutEquip" === yR) return 0 === tR ? null : {
        board: iJ(RR, JR, GR.loadoutOptionId, null),
        notice: KJ("loadoutNoticeEquipped", uR)
      };
      const ZR = "loadoutUnlock" === yR;
      if (ZR && 0 !== tR || "loadoutUpgrade" === yR && (0 === tR || tR >= GR.loadoutOptionTiers.length) || "loadoutUnequip" === yR) return null;
      const qR = GR.loadoutOptionTiers[tR].loadoutTierCost;
      if (!JJ(RR, qR)) return null;
      const iR = {
          ...GR,
          loadoutOptionOwnedTier: tR + 1
        },
        fR = ZR ? GR.loadoutOptionId : JR.loadoutSlotEquippedId;
      return {
        board: iJ(VJ(RR, qR), JR, fR, iR),
        notice: ZR ? KJ("loadoutNoticeUnlocked", uR) : KJ("loadoutNoticeUpgraded", uR, tR + 1)
      }
    }

    function qJ(RR, JR, GR, yR) {
      const tR = GR.loadoutOptionOwnedTier > 0,
        uR = GR.loadoutOptionName;
      if ("loadoutEquip" === yR && tR) return {
        board: iJ(RR, JR, GR.loadoutOptionId, null),
        notice: KJ("loadoutNoticeEquipped", uR)
      };
      const ZR = GR.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== yR || tR || !JJ(RR, ZR) ? null : {
        board: iJ(VJ(RR, ZR), JR, GR.loadoutOptionId, {
          ...GR,
          loadoutOptionOwnedTier: 1
        }),
        notice: KJ("loadoutNoticeUnlocked", uR)
      }
    }

    function iJ(RR, JR, GR, yR) {
      const tR = {
        ...JR,
        loadoutSlotEquippedId: GR,
        loadoutSlotOptions: JR.loadoutSlotOptions.map((RR => null !== yR && RR.loadoutOptionId === yR.loadoutOptionId ? yR : RR))
      };
      return {
        ...RR,
        loadoutSlots: RR.loadoutSlots.map((RR => RR === JR ? tR : RR))
      }
    }

    function fJ(RR, JR) {
      return {
        ...RR,
        loadoutPerks: RR.loadoutPerks.map((RR => RR.loadoutPerkId === JR.loadoutPerkId ? JR : RR))
      }
    }

    function VJ(RR, JR) {
      return {
        ...RR,
        loadoutCoins: RR.loadoutCoins - JR.loadoutCostCoins,
        loadoutHeldParts: RR.loadoutHeldParts.map((RR => {
          const GR = JR.loadoutCostParts.find((JR => JR.loadoutPartCurrency === RR.loadoutHeldPartCurrency));
          return GR ? {
            ...RR,
            loadoutHeldPartAmount: RR.loadoutHeldPartAmount - GR.loadoutPartAmount
          } : RR
        }))
      }
    }

    function KJ(RR, JR) {
      return {
        loadoutNoticeKey: RR,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: JR,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const wJ = "containmentLoadoutView";
    class rJ extends RJ {
      constructor(RR, JR, GR, yR) {
        super(RR, JR, GR, yR, "loadout", uJ), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = RR => {
          this.slot = RR, this.selectedId = eJ(this.board, RR), this.emit()
        }
      }
      messageOpens(RR) {
        return RR.loadoutMessageOpens
      }
      messageNotice(RR) {
        return RR.loadoutNotice
      }
      openingSelection(RR) {
        return eJ(RR, this.slot)
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

    function eJ(RR, JR) {
      if ("loadoutPerks" === JR) {
        var GR;
        const JR = RR.loadoutPerks;
        return (null !== (GR = JR.find((RR => RR.loadoutPerkEquipped))) && void 0 !== GR ? GR : JR[0]).loadoutPerkId
      }
      return yJ(RR, JR).loadoutSlotEquippedId
    }
    const aJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var LJ = GR(37994),
      nJ = GR(1366);
    const UJ = {
        loadoutPrimary: `${lR}:loadoutSlotPrimary`,
        loadoutSecondary: `${lR}:loadoutSlotSecondary`,
        loadoutOffensive: `${lR}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${lR}:loadoutSlotSelfHelp`,
        loadoutArmour: `${lR}:loadoutSlotArmour`,
        loadoutPerks: `${lR}:loadoutSlotPerks`
      },
      WJ = {
        section: "right",
        Ur: "bottom",
        act: "top"
      },
      AJ = (0, yR.createContext)({
        step: null,
        targetRef: () => {}
      });

    function CJ() {
      const {
        step: RR,
        targetRef: JR
      } = (0, yR.useContext)(AJ);
      return (GR, yR) => (null === RR || void 0 === RR ? void 0 : RR.kind) === GR && RR.id === yR ? JR : void 0
    }

    function XJ(RR, JR) {
      const GR = JR.loadoutTargetId;
      if ("loadoutPerks" === JR.loadoutTargetSection) {
        const JR = RR.loadoutPerks.find((RR => RR.loadoutPerkId === GR));
        return {
          name: JR.loadoutPerkName,
          owned: JR.loadoutPerkOwned,
          equipped: JR.loadoutPerkEquipped
        }
      }
      const yR = yJ(RR, JR.loadoutTargetSection),
        tR = yR.loadoutSlotOptions.find((RR => RR.loadoutOptionId === GR));
      return {
        name: tR.loadoutOptionName,
        owned: tR.loadoutOptionOwnedTier > 0,
        equipped: yR.loadoutSlotEquippedId === GR
      }
    }

    function MJ(RR, JR, GR, yR) {
      const [tR, uR] = RR(`${lR}:${JR}`, {
        [GR]: "\x01"
      }).split("\x01");
      return (0, BR.jsxs)(BR.Fragment, {
        children: [tR, (0, BR.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: yR
        }), uR]
      })
    }

    function BJ(RR) {
      let {
        view: JR,
        onDismiss: GR,
        children: tR
      } = RR;
      const {
        t: uR
      } = (0, KR.A)(), ZR = JR.loadout, qR = JR.open ? ZR.loadoutWalkthrough.map((RR => ({
        target: RR,
        info: XJ(ZR, RR)
      }))).find((RR => {
        let {
          info: JR
        } = RR;
        return !JR.equipped
      })) : void 0;
      let iR = null,
        fR = null;
      if (void 0 !== qR) {
        const {
          target: RR,
          info: GR
        } = qR;
        JR.slot !== RR.loadoutTargetSection ? (iR = {
          kind: "section",
          id: RR.loadoutTargetSection
        }, fR = MJ(uR, "loadoutWalkthroughSection", "section", uR(UJ[RR.loadoutTargetSection]))) : JR.selectedId !== RR.loadoutTargetId ? (iR = {
          kind: "Ur",
          id: RR.loadoutTargetId
        }, fR = MJ(uR, "loadoutWalkthroughPick", "name", GR.name)) : (iR = {
          kind: "act",
          id: RR.loadoutTargetId
        }, fR = MJ(uR, GR.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", GR.name))
      }
      const VR = null === iR ? null : function(RR) {
          return `${RR.kind}:${RR.id}`
        }(iR),
        [wR, rR] = (0, yR.useState)(null),
        eR = (0, yR.useCallback)((RR => {
          rR((JR => null !== RR ? {
            key: VR,
            node: RR
          } : (null === JR || void 0 === JR ? void 0 : JR.key) === VR ? null : JR))
        }), [VR]),
        aR = null !== VR && (null === wR || void 0 === wR ? void 0 : wR.key) === VR ? wR.node : null;
      return (0, BR.jsxs)(AJ.Provider, {
        value: {
          step: iR,
          targetRef: eR
        },
        children: [tR, null !== iR && null !== aR && (0, BR.jsx)(lJ, {
          target: aR,
          placement: WJ[iR.kind],
          onDismiss: GR,
          children: fR
        }, VR)]
      })
    }

    function lJ(RR) {
      let {
        target: JR,
        placement: GR,
        onDismiss: tR,
        children: uR
      } = RR;
      const {
        t: ZR
      } = (0, KR.A)(), qR = (0, yR.useRef)(JR);
      return qR.current = JR, (0, nJ.u)("popup", qR, tR), (0, BR.jsxs)(LJ.d, {
        target: JR,
        placement: GR,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, BR.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, BR.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: aJ,
            alt: "",
            draggable: !1
          }), (0, BR.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: ZR(`${lR}:operatorName`)
          }), (0, BR.jsx)(eR.l, {
            onClick: tR,
            ariaLabel: ZR(`${lR}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, BR.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: uR
        })]
      })
    }
    const pJ = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function gJ(RR) {
      let {
        cost: JR,
        loadout: GR
      } = RR;
      const {
        t: yR
      } = (0, KR.A)();
      return JR.loadoutCostCoins <= 0 && 0 === JR.loadoutCostParts.length ? (0, BR.jsx)("span", {
        className: "LoadoutCost",
        children: yR(`${lR}:loadoutFree`)
      }) : (0, BR.jsxs)("span", {
        className: "LoadoutCost",
        children: [JR.loadoutCostCoins > 0 && (0, BR.jsx)(OR, {
          itemName: pR,
          amount: JR.loadoutCostCoins,
          Qq: GR.loadoutCoins
        }), JR.loadoutCostParts.map((RR => {
          const JR = GJ(GR, RR.loadoutPartCurrency);
          return (0, BR.jsx)(OR, {
            itemName: JR.loadoutHeldPartItem,
            amount: RR.loadoutPartAmount,
            Qq: JR.loadoutHeldPartAmount
          }, RR.loadoutPartCurrency)
        }))]
      })
    }
    const bJ = {
      loadoutStatFireRate: `${lR}:loadoutUnitPerMinute`,
      loadoutStatReload: `${lR}:loadoutUnitSeconds`,
      loadoutStatResupply: `${lR}:loadoutUnitSeconds`
    };

    function vJ(RR) {
      return "loadoutStatPotency" === RR.loadoutStatKind ? (0, hR.J)(RR.loadoutStatValue) : String(RR.loadoutStatValue)
    }

    function OJ(RR) {
      var JR;
      let {
        option: GR
      } = RR;
      const {
        t: yR
      } = (0, KR.A)(), tR = GR.loadoutOptionTiers, uR = null === (JR = tR[0]) || void 0 === JR ? void 0 : JR.loadoutTierStats.map((RR => RR.loadoutStatKind));
      if (!uR || 0 === uR.length) return null;
      const ZR = GR.loadoutOptionOwnedTier,
        qR = (RR, JR) => {
          var GR;
          return null === (GR = tR[RR]) || void 0 === GR ? void 0 : GR.loadoutTierStats.find((RR => RR.loadoutStatKind === JR))
        };
      return (0, BR.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, BR.jsx)("thead", {
          children: (0, BR.jsxs)("tr", {
            children: [(0, BR.jsx)("th", {}), tR.map(((RR, JR) => (0, BR.jsx)("th", {
              className: fR()({
                Current: JR + 1 === ZR,
                Next: JR === ZR
              }),
              children: yR(`${lR}:loadoutTier`, {
                tier: (0, hR.J)(JR + 1)
              })
            }, JR)))]
          })
        }), (0, BR.jsx)("tbody", {
          children: uR.map((RR => {
            const JR = bJ[RR];
            return (0, BR.jsxs)("tr", {
              children: [(0, BR.jsxs)("th", {
                scope: "row",
                children: [yR(`${lR}:${RR}`), JR && (0, BR.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: yR(JR)
                })]
              }), tR.map(((JR, GR) => {
                const yR = qR(GR, RR),
                  tR = GR > 0 ? qR(GR - 1, RR) : void 0,
                  uR = yR && tR ? yR.loadoutStatValue - tR.loadoutStatValue : 0,
                  iR = pJ.has(RR) ? uR < 0 : uR > 0,
                  VR = GR === ZR;
                return (0, BR.jsxs)("td", {
                  className: fR()({
                    Current: GR + 1 === ZR,
                    Next: VR,
                    Gain: iR,
                    Owned: GR < ZR
                  }),
                  children: [VR && iR && (0, BR.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: uR < 0 ? "\u25bc" : "\u25b2"
                  }), yR ? vJ(yR) : "-"]
                }, GR)
              }))]
            }, RR)
          }))
        })]
      })
    }

    function xJ(RR) {
      let {
        view: JR,
        controller: GR,
        slot: yR,
        option: tR
      } = RR;
      const {
        t: uR
      } = (0, KR.A)(), ZR = JR.loadout, qR = tR.loadoutOptionOwnedTier, iR = tR.loadoutOptionTiers.length, fR = yR.loadoutSlotEquippedId === tR.loadoutOptionId, VR = qR < iR ? tR.loadoutOptionTiers[qR].loadoutTierCost : null, wR = null !== VR && JJ(ZR, VR), rR = tR.loadoutOptionId, aR = CJ();
      return (0, BR.jsxs)(BR.Fragment, {
        children: [(0, BR.jsx)(DJ, {
          icon: tR.loadoutOptionIcon,
          name: tR.loadoutOptionName,
          status: 0 === qR ? uR(`${lR}:loadoutLocked`) : iR > 1 ? uR(`${lR}:loadoutTier`, {
            tier: (0, hR.J)(qR)
          }) : null,
          locked: 0 === qR,
          equipped: fR
        }), (0, BR.jsx)("p", {
          className: "BoardDescription",
          children: tR.loadoutOptionDescription
        }), (0, BR.jsx)(OJ, {
          option: tR
        }), (0, BR.jsxs)("div", {
          ref: aR("act", rR),
          className: "BoardActions",
          children: [null !== VR && (0, BR.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, BR.jsx)(gJ, {
              cost: VR,
              loadout: ZR
            }), (0, BR.jsx)(eR.n, {
              disabled: !wR || JR.pending,
              onClick: () => {
                GR.act(0 === qR ? "loadoutUnlock" : "loadoutUpgrade", rR)
              },
              children: 0 === qR ? uR(`${lR}:loadoutUnlock`) : uR(`${lR}:loadoutUpgrade`, {
                tier: (0, hR.J)(qR + 1)
              })
            })]
          }), null === VR && iR > 1 && (0, BR.jsx)("span", {
            className: "BoardHint",
            children: uR(`${lR}:loadoutMaxed`)
          }), qR > 0 && !fR && (0, BR.jsx)(eR.g, {
            disabled: JR.pending,
            onClick: () => {
              GR.act("loadoutEquip", rR)
            },
            children: uR(`${lR}:loadoutEquip`)
          })]
        })]
      })
    }

    function NJ(RR) {
      let {
        view: JR,
        controller: GR,
        perk: yR
      } = RR;
      const {
        t: tR
      } = (0, KR.A)(), uR = JR.loadout, ZR = tJ(uR), qR = yR.loadoutPerkId, iR = CJ();
      return (0, BR.jsxs)(BR.Fragment, {
        children: [(0, BR.jsx)(DJ, {
          icon: yR.loadoutPerkIcon,
          name: yR.loadoutPerkName,
          status: yR.loadoutPerkOwned ? null : tR(`${lR}:loadoutLocked`),
          locked: !yR.loadoutPerkOwned,
          equipped: yR.loadoutPerkEquipped
        }), (0, BR.jsx)("p", {
          className: "BoardDescription",
          children: yR.loadoutPerkDescription
        }), (0, BR.jsxs)("div", {
          ref: iR("act", qR),
          className: "BoardActions",
          children: [!yR.loadoutPerkOwned && (0, BR.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, BR.jsx)(gJ, {
              cost: yR.loadoutPerkCost,
              loadout: uR
            }), (0, BR.jsx)(eR.n, {
              disabled: !JJ(uR, yR.loadoutPerkCost) || JR.pending,
              onClick: () => {
                GR.act("loadoutUnlock", qR)
              },
              children: tR(`${lR}:loadoutUnlock`)
            })]
          }), yR.loadoutPerkOwned && !yR.loadoutPerkEquipped && (0, BR.jsx)(eR.g, {
            disabled: ZR || JR.pending,
            onClick: () => {
              GR.act("loadoutEquip", qR)
            },
            children: tR(`${lR}:loadoutEquip`)
          }), yR.loadoutPerkOwned && !yR.loadoutPerkEquipped && ZR && (0, BR.jsx)("span", {
            className: "BoardHint",
            children: tR(`${lR}:loadoutSocketsFullHint`)
          }), yR.loadoutPerkEquipped && (0, BR.jsx)(eR.U, {
            disabled: JR.pending,
            onClick: () => {
              GR.act("loadoutUnequip", qR)
            },
            children: tR(`${lR}:loadoutUnequip`)
          })]
        })]
      })
    }

    function DJ(RR) {
      let {
        icon: JR,
        name: GR,
        status: yR,
        locked: tR,
        equipped: uR
      } = RR;
      const {
        t: ZR
      } = (0, KR.A)();
      return (0, BR.jsxs)(HR, {
        icon: (0, BR.jsx)(bR, {
          itemName: JR
        }),
        name: GR,
        children: [null !== yR && (0, BR.jsx)("span", {
          className: fR()("LoadoutStatusText", {
            Locked: tR
          }),
          children: yR
        }), uR && (0, BR.jsx)("span", {
          className: "BoardBadge",
          children: ZR(`${lR}:loadoutEquippedBadge`)
        })]
      })
    }

    function HJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const yR = JR.loadout;
      if ("loadoutPerks" === JR.slot) {
        const RR = yR.loadoutPerks.find((RR => RR.loadoutPerkId === JR.selectedId));
        return (0, BR.jsx)("section", {
          className: "BoardDetail",
          children: RR && (0, BR.jsx)(NJ, {
            view: JR,
            controller: GR,
            perk: RR
          })
        })
      }
      const tR = yJ(yR, JR.slot),
        uR = tR.loadoutSlotOptions.find((RR => RR.loadoutOptionId === JR.selectedId));
      return (0, BR.jsx)("section", {
        className: "BoardDetail",
        children: uR && (0, BR.jsx)(xJ, {
          view: JR,
          controller: GR,
          slot: tR,
          option: uR
        })
      })
    }

    function oJ(RR) {
      let {
        owned: JR,
        total: GR
      } = RR;
      return GR <= 1 ? null : (0, BR.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: GR
        }, ((RR, GR) => (0, BR.jsx)("span", {
          className: fR()("LoadoutPip", {
            Filled: GR < JR
          })
        }, GR)))
      })
    }

    function cJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, KR.A)(), tR = JR.loadout, uR = CJ();
      return (0, BR.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": yR(`${lR}:loadoutKit`),
        children: [tR.loadoutSlots.map((RR => {
          const tR = RR.loadoutSlotOptions.find((JR => JR.loadoutOptionId === RR.loadoutSlotEquippedId));
          return (0, BR.jsxs)("button", {
            ref: uR("section", RR.loadoutSlotKind),
            type: "button",
            className: fR()("LoadoutKitSlot", {
              Selected: JR.slot === RR.loadoutSlotKind
            }),
            onClick: () => {
              GR.selectSlot(RR.loadoutSlotKind)
            },
            children: [(0, BR.jsx)("span", {
              className: "LoadoutKitIcon",
              children: tR && (0, BR.jsx)(bR, {
                itemName: tR.loadoutOptionIcon
              })
            }), (0, BR.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, BR.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, BR.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: yR(UJ[RR.loadoutSlotKind])
                }), tR && (0, BR.jsx)(oJ, {
                  owned: tR.loadoutOptionOwnedTier,
                  total: tR.loadoutOptionTiers.length
                })]
              }), (0, BR.jsx)("span", {
                className: "LoadoutKitName",
                children: null === tR || void 0 === tR ? void 0 : tR.loadoutOptionName
              })]
            })]
          }, RR.loadoutSlotKind)
        })), (0, BR.jsx)(PJ, {
          view: JR,
          controller: GR
        })]
      })
    }

    function PJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, KR.A)(), tR = JR.loadout, uR = tR.loadoutPerks.filter((RR => RR.loadoutPerkEquipped)), ZR = CJ();
      return (0, BR.jsxs)("button", {
        ref: ZR("section", "loadoutPerks"),
        type: "button",
        className: fR()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === JR.slot
        }),
        onClick: () => {
          GR.selectSlot("loadoutPerks")
        },
        children: [(0, BR.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, BR.jsx)("span", {
            className: "LoadoutKitLabel",
            children: yR(UJ.loadoutPerks)
          }), (0, BR.jsx)("span", {
            className: "LoadoutPerkCount",
            children: yR(`${lR}:loadoutPerkCount`, {
              equipped: String(uR.length),
              max: String(tR.loadoutMaxPerks)
            })
          })]
        }), (0, BR.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: tR.loadoutMaxPerks
          }, ((RR, JR) => {
            const GR = uR[JR];
            return (0, BR.jsxs)("span", {
              className: fR()("LoadoutSocket", {
                Filled: GR,
                Empty: !GR
              }),
              children: [(0, BR.jsx)("span", {
                className: "LoadoutSocketWell",
                children: GR && (0, BR.jsx)(bR, {
                  itemName: GR.loadoutPerkIcon
                })
              }), (0, BR.jsx)("span", {
                className: "LoadoutSocketName",
                children: GR ? GR.loadoutPerkName : yR(`${lR}:loadoutPerkSocketEmpty`)
              })]
            }, JR)
          }))
        })]
      })
    }

    function IJ(RR) {
      let {
        icon: JR,
        name: GR,
        selected: yR,
        equipped: tR,
        locked: uR,
        ownedTier: ZR,
        tiers: qR,
        buttonRef: iR,
        onSelect: fR
      } = RR;
      const {
        t: VR
      } = (0, KR.A)();
      return (0, BR.jsxs)(DR, {
        icon: (0, BR.jsx)(bR, {
          itemName: JR
        }),
        name: GR,
        selected: yR,
        locked: uR,
        buttonRef: iR,
        onSelect: fR,
        children: [tR && (0, BR.jsx)("span", {
          className: "BoardBadge",
          children: VR(`${lR}:loadoutEquippedBadge`)
        }), uR && (0, BR.jsx)("span", {
          className: "BoardBadge Muted",
          children: VR(`${lR}:loadoutLocked`)
        }), !uR && (0, BR.jsx)(oJ, {
          owned: ZR,
          total: qR
        })]
      })
    }

    function mJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const yR = JR.loadout,
        tR = CJ();
      if ("loadoutPerks" === JR.slot) return (0, BR.jsx)("div", {
        className: "BoardTiles",
        children: yR.loadoutPerks.map((RR => (0, BR.jsx)(IJ, {
          icon: RR.loadoutPerkIcon,
          name: RR.loadoutPerkName,
          selected: JR.selectedId === RR.loadoutPerkId,
          equipped: RR.loadoutPerkEquipped,
          locked: !RR.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: tR("Ur", RR.loadoutPerkId),
          onSelect: () => {
            GR.select(RR.loadoutPerkId)
          }
        }, RR.loadoutPerkId)))
      });
      const uR = yJ(yR, JR.slot);
      return (0, BR.jsx)("div", {
        className: "BoardTiles",
        children: uR.loadoutSlotOptions.map((RR => (0, BR.jsx)(IJ, {
          icon: RR.loadoutOptionIcon,
          name: RR.loadoutOptionName,
          selected: JR.selectedId === RR.loadoutOptionId,
          equipped: uR.loadoutSlotEquippedId === RR.loadoutOptionId,
          locked: 0 === RR.loadoutOptionOwnedTier,
          ownedTier: RR.loadoutOptionOwnedTier,
          tiers: RR.loadoutOptionTiers.length,
          buttonRef: tR("Ur", RR.loadoutOptionId),
          onSelect: () => {
            GR.select(RR.loadoutOptionId)
          }
        }, RR.loadoutOptionId)))
      })
    }

    function zJ(RR) {
      let {
        loadout: JR
      } = RR;
      return (0, BR.jsx)(oR, {
        coins: JR.loadoutCoins,
        children: JR.loadoutHeldParts.filter((RR => RR.loadoutHeldPartAmount > 0)).map((RR => (0, BR.jsx)(OR, {
          itemName: RR.loadoutHeldPartItem,
          amount: RR.loadoutHeldPartAmount
        }, RR.loadoutHeldPartCurrency)))
      })
    }

    function SJ(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, VR.h)(wJ, JR.getSnapshot()),
        {
          t: yR
        } = (0, KR.A)();
      if (null === GR.loadout) return null;
      const tR = GR.notice;
      return (0, BR.jsx)(BJ, {
        view: GR,
        onDismiss: JR.dismiss,
        children: (0, BR.jsxs)(gR, {
          open: GR.open,
          onDismiss: JR.dismiss,
          title: yR(`${lR}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, BR.jsx)(zJ, {
            loadout: GR.loadout
          }),
          statusRefused: null === tR || void 0 === tR ? void 0 : tR.loadoutNoticeRefused,
          status: (0, BR.jsxs)(BR.Fragment, {
            children: [(0, BR.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: yR(`${lR}:loadoutRadioBadge`)
            }), null !== tR && yR(`${lR}:${tR.loadoutNoticeKey}`, {
              name: tR.loadoutNoticeName,
              tier: (0, hR.J)(tR.loadoutNoticeTier),
              max: String(GR.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, BR.jsx)(cJ, {
            view: GR,
            controller: JR
          }), (0, BR.jsx)(mJ, {
            view: GR,
            controller: JR
          }), (0, BR.jsx)(HJ, {
            view: GR,
            controller: JR
          })]
        })
      })
    }

    function jJ(RR, JR, GR) {
      const yR = RR.locatorEntries.find((RR => RR.locatorEntryId === GR));
      if (!yR) return null;
      const tR = yR.locatorEntryName;
      if ("locatorDisarm" === JR) return yR.locatorEntryArmed ? {
        board: dJ(RR, null),
        notice: EJ("locatorNoticeDisarmed", tR)
      } : null;
      if ("locatorArm" === JR) return yR.locatorEntryOwned && !yR.locatorEntryArmed ? {
        board: dJ(RR, GR),
        notice: EJ("locatorNoticeArmed", tR)
      } : null;
      if (yR.locatorEntryOwned || RR.locatorCoins < yR.locatorEntryPrice) return null;
      const uR = dJ({
        ...RR,
        locatorCoins: RR.locatorCoins - yR.locatorEntryPrice
      }, GR);
      return {
        board: {
          ...uR,
          locatorEntries: uR.locatorEntries.map((RR => RR.locatorEntryId === GR ? {
            ...RR,
            locatorEntryOwned: !0
          } : RR))
        },
        notice: EJ("locatorNoticeBought", tR)
      }
    }

    function dJ(RR, JR) {
      return {
        ...RR,
        locatorEntries: RR.locatorEntries.map((RR => {
          const GR = RR.locatorEntryId === JR;
          return RR.locatorEntryArmed === GR ? RR : {
            ...RR,
            locatorEntryArmed: GR
          }
        }))
      }
    }

    function EJ(RR, JR) {
      return {
        locatorNoticeKey: RR,
        locatorNoticeRefused: !1,
        locatorNoticeName: JR
      }
    }
    const YJ = "containmentLocatorView";
    class kJ extends RJ {
      constructor(RR, JR, GR, yR) {
        super(RR, JR, GR, yR, "locator", jJ), this.snapshot = this.buildSnapshot()
      }
      messageOpens(RR) {
        return RR.locatorMessageOpens
      }
      messageNotice(RR) {
        return RR.locatorNotice
      }
      openingSelection(RR) {
        var JR;
        const GR = RR.locatorEntries;
        return (null !== (JR = GR.find((RR => RR.locatorEntryArmed))) && void 0 !== JR ? JR : GR[0]).locatorEntryId
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
    const QJ = {
        locatorContained: `${lR}:locatorFlavourContained`,
        locatorEncountered: `${lR}:locatorFlavourEncountered`,
        locatorUnseen: `${lR}:locatorFlavourUnseen`
      },
      FJ = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${lR}:locatorAttunedNormal`,
        codexHardOnly: `${lR}:locatorAttunedHard`
      };

    function TJ() {
      return (0, BR.jsx)(BR.Fragment, {
        children: Array.from({
          length: 5
        }, ((RR, JR) => (0, BR.jsx)("span", {
          className: "LocatorFly",
          children: (0, BR.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, JR)))
      })
    }

    function sJ(RR) {
      let {
        entry: JR
      } = RR;
      const {
        t: GR
      } = (0, KR.A)();
      return JR.locatorEntryArmed ? (0, BR.jsx)("span", {
        className: "BoardBadge Armed",
        children: GR(`${lR}:locatorArmedBadge`)
      }) : JR.locatorEntryOwned ? (0, BR.jsx)("span", {
        className: "BoardBadge",
        children: GR(`${lR}:locatorOwnedBadge`)
      }) : null
    }

    function hJ(RR) {
      let {
        entry: JR,
        coins: GR,
        inTile: yR = !1
      } = RR;
      return (0, BR.jsx)(OR, {
        itemName: pR,
        amount: JR.locatorEntryPrice,
        Qq: GR,
        inTile: yR
      })
    }

    function RG(RR) {
      let {
        view: JR,
        controller: GR,
        entry: yR
      } = RR;
      const {
        t: tR
      } = (0, KR.A)(), uR = yR.locatorEntryId, ZR = JR.locators.locatorEntries.find((RR => RR.locatorEntryArmed && RR !== yR));
      return (0, BR.jsxs)("div", {
        className: "BoardActions",
        children: [yR.locatorEntryArmed && (0, BR.jsx)(eR.U, {
          disabled: JR.pending,
          onClick: () => {
            GR.act("locatorDisarm", uR)
          },
          children: tR(`${lR}:locatorDisarm`)
        }), yR.locatorEntryOwned && !yR.locatorEntryArmed && (0, BR.jsx)(eR.g, {
          disabled: JR.pending,
          onClick: () => {
            GR.act("locatorArm", uR)
          },
          children: tR(`${lR}:locatorArm`)
        }), !yR.locatorEntryOwned && (0, BR.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, BR.jsx)(hJ, {
            entry: yR,
            coins: JR.locators.locatorCoins
          }), (0, BR.jsx)(eR.n, {
            disabled: JR.locators.locatorCoins < yR.locatorEntryPrice || JR.pending,
            onClick: () => {
              GR.act("locatorBuy", uR)
            },
            children: tR(`${lR}:locatorBuy`)
          })]
        }), ZR && !yR.locatorEntryArmed && (0, BR.jsx)("span", {
          className: "BoardHint",
          children: tR(`${lR}:locatorReplacesHint`, {
            name: ZR.locatorEntryName
          })
        })]
      })
    }

    function JG(RR) {
      let {
        entry: JR
      } = RR;
      return "locatorUnseen" === JR.locatorEntryStanding ? (0, BR.jsx)(bR, {
        itemName: "Compass"
      }) : (0, BR.jsx)(vR, {
        anomalyId: JR.locatorEntryId,
        caught: "locatorContained" === JR.locatorEntryStanding
      })
    }

    function GG(RR) {
      let {
        view: JR,
        controller: GR,
        entry: yR
      } = RR;
      const {
        t: tR
      } = (0, KR.A)(), uR = FJ[yR.locatorEntryDifficulty];
      return (0, BR.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, BR.jsxs)("div", {
          className: fR()("LocatorLabel", {
            Armed: yR.locatorEntryArmed
          }),
          children: [(0, BR.jsx)(HR, {
            icon: (0, BR.jsx)(JG, {
              entry: yR
            }),
            name: tR(`${lR}:locatorName`, {
              name: yR.locatorEntryName
            }),
            children: (0, BR.jsx)(sJ, {
              entry: yR
            })
          }), (0, BR.jsx)("p", {
            className: "BoardDescription",
            children: tR(yR.locatorEntryArmed ? `${lR}:locatorFlavourArmed` : QJ[yR.locatorEntryStanding])
          }), null !== uR && (0, BR.jsx)("p", {
            className: "LocatorAttuned",
            children: tR(uR)
          }), (0, BR.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: tR(`${lR}:locatorUsage`)
          })]
        }), (0, BR.jsx)(RG, {
          view: JR,
          controller: GR,
          entry: yR
        })]
      })
    }

    function yG(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, VR.h)(YJ, JR.getSnapshot()),
        {
          t: yR
        } = (0, KR.A)(),
        tR = GR.locators;
      if (null === tR) return null;
      const uR = tR.locatorEntries.find((RR => RR.locatorEntryId === GR.selectedId)),
        ZR = GR.notice;
      return (0, BR.jsxs)(gR, {
        open: GR.open,
        onDismiss: JR.dismiss,
        title: yR(`${lR}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, BR.jsx)(TJ, {}),
        headerExtra: (0, BR.jsx)(oR, {
          coins: tR.locatorCoins
        }),
        statusRefused: null === ZR || void 0 === ZR ? void 0 : ZR.locatorNoticeRefused,
        status: (0, BR.jsxs)(BR.Fragment, {
          children: [(0, BR.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: yR(`${lR}:locatorKeeperName`)
          }), null !== ZR && yR(`${lR}:${ZR.locatorNoticeKey}`, {
            name: ZR.locatorNoticeName
          })]
        }),
        children: [(0, BR.jsx)("div", {
          className: "BoardTiles",
          children: tR.locatorEntries.map((RR => (0, BR.jsxs)(DR, {
            icon: (0, BR.jsx)(JG, {
              entry: RR
            }),
            name: RR.locatorEntryName,
            selected: RR === uR,
            locked: !1,
            className: fR()("LocatorTag", {
              Armed: RR.locatorEntryArmed
            }),
            onSelect: () => {
              JR.select(RR.locatorEntryId)
            },
            children: [(0, BR.jsx)(sJ, {
              entry: RR
            }), !RR.locatorEntryOwned && (0, BR.jsx)(hJ, {
              entry: RR,
              coins: tR.locatorCoins,
              inTile: !0
            })]
          }, RR.locatorEntryId)))
        }), (0, BR.jsx)(GG, {
          view: GR,
          controller: JR,
          entry: uR
        })]
      })
    }

    function tG(RR) {
      let {
        loadout: JR,
        codex: GR,
        locator: yR
      } = RR;
      return (0, BR.jsxs)(BR.Fragment, {
        children: [(0, BR.jsx)(SJ, {
          controller: JR
        }), (0, BR.jsx)(sR, {
          controller: GR
        }), (0, BR.jsx)(yG, {
          controller: yR
        })]
      })
    }
    var uG = GR(39767);
    class ZG {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = RR, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new uG.c({
          spacingMs: 0,
          now: JR
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(RR, JR) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, JR(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(RR), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
    }
    var qG = GR(39752);
    const iG = new Map([
      ["npc_general", aJ],
      ["npc_tentacle_guy", qG]
    ]);

    function fG(RR) {
      const JR = iG.get(RR);
      if (void 0 === JR) return null;
      const GR = document.createElement("img");
      return GR.src = JR, GR.alt = "", GR.draggable = !1, GR.style.imageRendering = "pixelated", GR
    }
    const VG = function() {
      let RR, JR = !1,
        GR = null,
        iR = null;
      const fR = [],
        VR = RR => {
          for (const JR of fR) JR !== RR && JR.close();
          (0, qR.t)()
        },
        KR = RR => {
          RR && (0, qR.j)()
        },
        wR = new ZG((JR => {
          RR.sendCommand(JR)
        })),
        rR = new rJ((RR => {
          ZR.n.JK(wJ, RR, !0)
        }), VR, KR, wR),
        eR = new IR((RR => {
          ZR.n.JK(PR, RR, !0)
        }), VR, KR),
        aR = new kJ((RR => {
          ZR.n.JK(YJ, RR, !0)
        }), VR, KR, wR);
      fR.push(rR, eR, aR);
      return {
        onCreate: JR => {
          RR = JR, GR = (0, qR.G)(null, {
            content: (0, yR.createElement)(tG, {
              loadout: rR,
              codex: eR,
              locator: aR
            }),
            onClose: () => {
              for (const RR of fR) RR.close()
            }
          }), iR = (0, uR.h)(fG)
        },
        onReceivedMessageFromServer: (RR, JR) => {
          "containmentLoadout" === RR ? rR.BK(JR) : "containmentLoadoutClose" === RR ? rR.isOpen() && (rR.close(), (0, qR.h)()) : "containmentCodex" === RR ? eR.BK(JR) : "containmentLocator" === RR && aR.BK(JR)
        },
        gK: () => {
          JR || tR.d.get("loadingOverlayVisible") || (JR = !0, RR.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var RR, JR;
          null === (RR = GR) || void 0 === RR || RR(), GR = null, null === (JR = iR) || void 0 === JR || JR(), iR = null;
          for (const GR of fR) GR.dispose();
          wR.dispose()
        }
      }
    }
  },
  37999: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => DR,
      D: () => PR,
      c: () => iR,
      e: () => bR,
      f: () => qR,
      g: () => NR,
      j: () => pR,
      l: () => XR,
      m: () => xR,
      o: () => OR,
      p: () => lR,
      t: () => HR,
      u: () => oR,
      x: () => cR
    });
    var yR = GR(46);
    const tR = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      uR = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      ZR = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      qR = uR.filter((RR => "docsButton" !== RR)),
      iR = ZR.filter((RR => "aiHelperButton" !== RR)),
      fR = "codeEditorTutorials",
      VR = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      KR = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let wR = null,
      rR = null;
    const eR = new Set,
      aR = new Set;
    let LR = null;
    const nR = new Set,
      UR = new Set;

    function WR() {
      UR.forEach((RR => {
        RR()
      }))
    }

    function AR() {
      if (!wR) {
        const RR = yR.i.getItem(fR);
        wR = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof RR && null !== RR ? RR : {}
        }
      }
      return wR
    }

    function CR(RR) {
      const JR = AR();
      JR[RR] || (wR = {
        ...JR,
        [RR]: !0
      }, yR.i.setItem(fR, wR))
    }

    function XR(RR) {
      return "docsOverview" === RR ? uR : "aiHelperOverview" === RR ? ZR : rR ? tR[rR] : []
    }

    function MR(RR) {
      return ("worldCodeButton" !== RR || !AR().worldCodeIntroShown) && !nR.has(RR)
    }

    function BR(RR) {
      var JR;
      return (null === (JR = LR) || void 0 === JR ? void 0 : JR.name) === RR ? LR.stepsDone : eR
    }

    function lR(RR, JR) {
      if (! function(RR) {
          return LR ? LR.name === RR : "welcome" === RR
        }(RR) || !MR(JR) || BR(RR).has(JR)) return !1;
      if (LR) return !0;
      const GR = VR[JR];
      return GR ? !AR()[GR] || aR.has(JR) : !AR()[KR[RR]]
    }

    function pR(RR) {
      var JR;
      return null !== (JR = XR(RR).find((JR => lR(RR, JR)))) && void 0 !== JR ? JR : null
    }

    function gR(RR) {
      var JR;
      CR(KR[RR]), (null === (JR = LR) || void 0 === JR ? void 0 : JR.name) === RR && (LR = null)
    }

    function bR(RR) {
      const JR = (LR ? [LR.name] : ["welcome", "docsOverview"]).find((JR => pR(JR) === RR));
      if (!JR) return;
      BR(JR).add(RR);
      const GR = VR[RR];
      GR && (CR(GR), LR || aR.add(RR)), null === pR(JR) && gR(JR), WR()
    }

    function vR(RR, JR) {
      const GR = XR(RR),
        yR = BR(RR);
      for (let tR = GR.indexOf(JR) - 1; tR >= 0; tR--)
        if (yR.has(GR[tR]) && MR(GR[tR])) return GR[tR];
      return null
    }

    function OR(RR, JR) {
      return null !== vR(RR, JR)
    }

    function xR(RR, JR) {
      const GR = vR(RR, JR);
      GR && (BR(RR).delete(GR), WR())
    }

    function NR(RR) {
      gR(RR), "welcome" === RR && XR("welcome").forEach((RR => {
        const JR = VR[RR];
        JR && CR(JR)
      })), WR()
    }

    function DR(RR) {
      LR = {
        name: RR,
        stepsDone: new Set
      }, WR()
    }

    function HR() {
      (LR || 0 !== eR.size || 0 !== aR.size) && (LR = null, eR.clear(), aR.clear(), WR())
    }

    function oR(RR, JR) {
      const GR = JR ? RR : rR === RR ? null : rR;
      GR !== rR && (rR = GR, WR())
    }

    function cR(RR, JR) {
      nR.has(RR) === JR && (JR ? nR.delete(RR) : nR.add(RR), WR())
    }

    function PR(RR) {
      return UR.add(RR), () => {
        UR.delete(RR)
      }
    }
  },
  40582: (RR, JR, GR) => {
    var yR = {
      "./breach-zero-uncaught.webp": 40587,
      "./breach-zero.webp": 40592,
      "./brood-father-uncaught.webp": 40595,
      "./brood-father.webp": 40599,
      "./carousel-uncaught.webp": 40605,
      "./carousel.webp": 40607,
      "./deadlock-uncaught.webp": 40610,
      "./deadlock.webp": 40615,
      "./doom-warlord-uncaught.webp": 40617,
      "./doom-warlord.webp": 40619,
      "./frost-revenant-uncaught.webp": 40626,
      "./frost-revenant.webp": 40631,
      "./hollow-choir-uncaught.webp": 40638,
      "./hollow-choir.webp": 40642,
      "./magma-warden-uncaught.webp": 40647,
      "./magma-warden.webp": 40654,
      "./patient-zero-uncaught.webp": 40656,
      "./patient-zero.webp": 40662,
      "./siege-engine-uncaught.webp": 40669,
      "./siege-engine.webp": 40677,
      "./warp-stalker-uncaught.webp": 40686,
      "./warp-stalker.webp": 40693
    };

    function tR(RR) {
      var JR = uR(RR);
      return GR(JR)
    }

    function uR(RR) {
      if (!GR.o(yR, RR)) {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }
      return yR[RR]
    }
    tR.keys = function() {
      return Object.keys(yR)
    }, tR.resolve = uR, RR.exports = tR, tR.id = 40582
  },
  40587: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40592: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40595: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40599: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40605: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40607: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40610: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40615: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40617: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40619: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40626: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40631: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40638: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40642: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40647: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40654: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40656: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40662: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40669: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40677: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40686: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40693: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39752: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);