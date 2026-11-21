export const id = 14;
export const ids = [14];
export const modules = {
  36508: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => iQ,
      e: () => CQ,
      i: () => SQ,
      l: () => xQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(71),
      kQ = wQ(1370),
      vQ = wQ(1451),
      mQ = wQ(1367),
      uQ = wQ(1295),
      HQ = wQ(1207),
      bQ = wQ(36514),
      YQ = wQ(1107);

    function xQ(QQ) {
      const [FQ, wQ] = (0, oQ.useState)((() => (0, bQ.n)(QQ)));
      return (0, oQ.useEffect)((() => (wQ((0, bQ.n)(QQ)), (0, bQ.J)((() => {
        wQ((0, bQ.n)(QQ))
      })))), [QQ]), FQ
    }

    function AQ(QQ, FQ) {
      "function" === typeof QQ ? QQ(FQ) : QQ && (QQ.current = FQ)
    }

    function tQ(QQ) {
      let {
        tutorial: FQ,
        step: wQ,
        enabled: LQ = !0
      } = QQ;
      const qQ = xQ(FQ);
      return LQ && qQ === wQ
    }

    function eQ(QQ, FQ) {
      const wQ = (0, bQ.o)(QQ),
        LQ = wQ.indexOf(FQ);
      return !wQ.slice(LQ + 1).some((FQ => (0, bQ.u)(QQ, FQ)))
    }

    function MQ(QQ, FQ, wQ, LQ) {
      let {
        tutorial: qQ,
        step: oQ,
        waitForClick: DQ = !1,
        onPrevious: kQ
      } = QQ;
      const vQ = FQ && (0, bQ.s)(qQ, oQ),
        mQ = FQ && !eQ(qQ, oQ),
        HQ = DQ ? LQ : wQ;
      let YQ = null;
      vQ ? YQ = () => {
        null === kQ || void 0 === kQ || kQ(), (0, bQ.r)(qQ, oQ)
      } : mQ && (YQ = () => {
        (0, bQ.l)(qQ)
      }), (0, uQ.m)("popup", null !== HQ && void 0 !== HQ ? HQ : wQ, YQ, FQ && null !== HQ, null, vQ ? void 0 : "controller:menusSkipTutorial")
    }

    function GQ(QQ) {
      let {
        tutorial: FQ,
        step: wQ,
        text: LQ,
        waitForClick: qQ = !1,
        onPrevious: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, HQ.y)(), kQ = eQ(FQ, wQ);
      return (0, YQ.jsxs)(YQ.Fragment, {
        children: [(0, YQ.jsx)("div", {
          className: "TutorialStepText",
          children: LQ
        }), (0, YQ.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, bQ.s)(FQ, wQ) && (0, YQ.jsx)(vQ.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === oQ || void 0 === oQ || oQ(), (0, bQ.r)(FQ, wQ)
            },
            children: DQ("tutorial:back")
          }), !qQ && (0, YQ.jsx)(vQ.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, bQ.f)(wQ)
            },
            padDefaultFocus: !0,
            children: DQ(kQ ? "tutorial:done" : "tutorial:next")
          }), !kQ && (0, YQ.jsx)(vQ.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, bQ.l)(FQ)
            },
            children: DQ("tutorial:skip")
          })]
        })]
      })
    }
    const pQ = 6;

    function cQ(QQ) {
      let {
        rect: FQ,
        margin: wQ
      } = QQ;
      const LQ = Math.max(0, FQ.top - wQ),
        qQ = FQ.bottom + wQ,
        oQ = Math.max(0, FQ.left - wQ),
        DQ = FQ.right + wQ;
      return (0, YQ.jsxs)(YQ.Fragment, {
        children: [(0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: LQ
          }
        }), (0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: qQ,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: LQ,
            left: 0,
            width: oQ,
            height: qQ - LQ
          }
        }), (0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: LQ,
            left: DQ,
            right: 0,
            height: qQ - LQ
          }
        })]
      })
    }

    function CQ(QQ) {
      let {
        target: FQ,
        placement: wQ,
        boxRef: LQ,
        className: vQ,
        spotlightMargin: uQ = pQ,
        children: HQ
      } = QQ;
      const {
        getArrowProps: bQ,
        getTooltipProps: xQ,
        setTooltipRef: AQ,
        setTriggerRef: tQ
      } = (0, kQ.c)({
        placement: wQ,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, uQ]
      });
      (0, oQ.useLayoutEffect)((() => {
        tQ(FQ)
      }), [FQ, tQ]);
      const eQ = function(QQ, FQ) {
        const [wQ, LQ] = (0, oQ.useState)(null);
        return (0, oQ.useEffect)((() => {
          if (!FQ || !QQ) return void LQ(null);
          let wQ = 0,
            qQ = null;
          const oQ = () => {
            const FQ = QQ.getBoundingClientRect();
            qQ && FQ.left === qQ.left && FQ.top === qQ.top && FQ.width === qQ.width && FQ.height === qQ.height || (qQ = FQ, LQ(FQ)), wQ = requestAnimationFrame(oQ)
          };
          return oQ(), () => {
            cancelAnimationFrame(wQ)
          }
        }), [QQ, FQ]), wQ
      }(FQ, !0);
      (0, oQ.useEffect)((() => {
        null === FQ || void 0 === FQ || FQ.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [FQ]);
      const MQ = (0, oQ.useCallback)((QQ => {
        AQ(QQ), LQ && (LQ.current = QQ)
      }), [AQ, LQ]);
      return (0, DQ.createPortal)((0, YQ.jsxs)(YQ.Fragment, {
        children: [eQ && (0, YQ.jsx)(cQ, {
          rect: eQ,
          margin: uQ
        }), (0, YQ.jsxs)("div", {
          ref: MQ,
          ...xQ({
            className: qQ()("tooltip-container SmallTextLight TutorialStep", vQ)
          }),
          children: [HQ, (0, YQ.jsx)("div", {
            ...bQ({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, mQ.g)())
    }
    const SQ = (0, oQ.forwardRef)((function(QQ, FQ) {
      let {
        placement: wQ = "right",
        children: LQ,
        ...qQ
      } = QQ;
      const DQ = tQ(qQ),
        kQ = (0, oQ.useRef)(null),
        vQ = (0, oQ.useRef)(null);
      MQ(qQ, DQ, kQ, vQ);
      const [mQ, uQ] = (0, oQ.useState)(null), HQ = LQ.ref, bQ = (0, oQ.useCallback)((QQ => {
        vQ.current = QQ, uQ(QQ), AQ(FQ, QQ), AQ(HQ, QQ)
      }), [FQ, HQ]);
      return (0, YQ.jsxs)(YQ.Fragment, {
        children: [(0, oQ.cloneElement)(LQ, {
          ref: bQ
        }), DQ && (0, YQ.jsx)(CQ, {
          target: mQ,
          placement: wQ,
          boxRef: kQ,
          children: (0, YQ.jsx)(GQ, {
            ...qQ
          })
        })]
      })
    }));

    function iQ(QQ) {
      const FQ = tQ(QQ),
        wQ = (0, oQ.useRef)(null);
      return MQ(QQ, FQ, wQ, null), FQ ? (0, DQ.createPortal)((0, YQ.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, YQ.jsx)("div", {
          ref: wQ,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, YQ.jsx)(GQ, {
            ...QQ
          })
        })
      }), (0, mQ.g)()) : null
    }
  },
  38077: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    const LQ = 4,
      qQ = 12e3,
      oQ = 1e3;
    class DQ {
      constructor() {
        let {
          limit: QQ = LQ,
          windowMs: FQ = qQ,
          spacingMs: wQ = oQ,
          now: DQ = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = QQ, this.windowMs = FQ, this.spacingMs = wQ, this.now = DQ
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const QQ of this.priority) QQ.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const QQ = this.now();
        this.sent.push(QQ), this.lastSentAt = QQ, this.schedule(), this.notify()
      }
      addPriority(QQ) {
        return this.priority.add(QQ), () => {
          this.priority.delete(QQ)
        }
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const QQ of this.priority)
          if (QQ.waiting()) return !0;
        return !1
      }
      prune() {
        const QQ = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= QQ;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const QQ = this.now(),
          FQ = this.lastSentAt + this.spacingMs,
          wQ = Math.min(FQ > QQ ? FQ : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        wQ !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, wQ - QQ)))
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  38060: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ) {
        this.GA = QQ, this.beforeOpen = FQ, this.afterClose = wQ, this.open = !1, this.kx = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.kx && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(QQ) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(QQ)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.kx = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.kx || (this.snapshot = this.buildSnapshot(), this.GA(this.snapshot))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  38815: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => uw
    });
    var LQ = wQ(53);
    var qQ = wQ(17),
      oQ = wQ(1880),
      DQ = wQ(22),
      kQ = wQ(36235),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(1447),
      HQ = wQ(1207),
      bQ = wQ(4376),
      YQ = wQ(1353),
      xQ = wQ(1451),
      AQ = wQ(1887),
      tQ = wQ(1367),
      eQ = wQ(1873),
      MQ = wQ(1927),
      GQ = wQ(217);
    const pQ = wQ(38818),
      cQ = Object.fromEntries(pQ.keys().map((QQ => [QQ.replace(/^\.\/(.*)\.webp$/, "$1"), pQ(QQ)]))),
      CQ = new Set;

    function SQ(QQ, FQ) {
      const wQ = FQ ? QQ : `${QQ}-uncaught`,
        LQ = (0, GQ.b)(cQ, wQ);
      return void 0 !== LQ || CQ.has(wQ) || (CQ.add(wQ), console.warn(`Containment Breach has no mugshot ${wQ}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), LQ
    }
    var iQ = wQ(1107);
    const WQ = "containmentBreach",
      RQ = "Gold Coin";

    function OQ(QQ) {
      let {
        open: FQ,
        onDismiss: wQ,
        title: LQ,
        className: qQ,
        decor: oQ,
        headerExtra: DQ,
        status: kQ,
        statusRefused: vQ = !1,
        children: uQ
      } = QQ;
      const HQ = `${qQ}Title`;
      return (0, iQ.jsx)(bQ.d, {
        show: FQ,
        close: wQ,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, iQ.jsxs)("section", {
          className: mQ()("ContainmentBoardPanel", qQ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": HQ,
          children: [oQ && (0, iQ.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: oQ
          }), (0, iQ.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, iQ.jsx)("h2", {
              id: HQ,
              className: "VisuallyHidden",
              children: LQ
            }), DQ, (0, iQ.jsx)(xQ.j, {
              onClick: wQ
            })]
          }), (0, iQ.jsx)("div", {
            className: "BoardBody",
            children: uQ
          }), void 0 !== kQ && (0, iQ.jsx)("footer", {
            className: mQ()("BoardStatus", {
              Refused: vQ
            }),
            children: kQ
          })]
        })
      })
    }

    function sQ(QQ) {
      let {
        itemName: FQ
      } = QQ;
      return (0, iQ.jsx)(AQ.e, {
        itemName: FQ,
        amount: 0
      })
    }

    function rQ(QQ) {
      let {
        anomalyId: FQ,
        caught: wQ
      } = QQ;
      const qQ = (0, LQ.useRef)(null);
      return (0, YQ.d)(qQ, !wQ), (0, iQ.jsx)("span", {
        ref: qQ,
        className: mQ()("BoardMugshot", {
          Uncaught: !wQ
        }),
        children: (0, iQ.jsx)("img", {
          src: SQ(FQ, wQ),
          alt: "",
          draggable: !1
        })
      })
    }

    function IQ(QQ) {
      let {
        itemName: FQ,
        amount: wQ,
        ym: LQ,
        inTile: qQ = !1
      } = QQ;
      return (0, iQ.jsx)(tQ.f, {
        delayShow: 200,
        hoverOnly: qQ,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, iQ.jsx)(NQ, {
          itemName: FQ,
          amount: wQ,
          ym: LQ
        }),
        children: (0, iQ.jsxs)("span", {
          className: mQ()("BoardChip", {
            Short: void 0 !== LQ && LQ < wQ
          }),
          children: [(0, iQ.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, iQ.jsx)(sQ, {
              itemName: FQ
            })
          }), wQ.toLocaleString()]
        })
      })
    }
    const UQ = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function NQ(QQ) {
      var FQ;
      let {
        itemName: wQ,
        amount: LQ,
        ym: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, HQ.y)(), DQ = (0, MQ.g)("itemInfo", (QQ => QQ[wQ])), {
        lore: kQ,
        droppedBy: vQ
      } = function(QQ) {
        if ("string" !== typeof QQ) return {
          lore: QQ,
          droppedBy: null
        };
        const FQ = UQ.exec(QQ);
        return null === FQ ? {
          lore: QQ,
          droppedBy: null
        } : {
          lore: "" === FQ[1] ? void 0 : FQ[1],
          droppedBy: FQ[2]
        }
      }(null === DQ || void 0 === DQ ? void 0 : DQ.description);
      return (0, iQ.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, iQ.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, iQ.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, iQ.jsx)(sQ, {
              itemName: wQ
            })
          }), (0, iQ.jsx)(eQ.e, {
            text: null !== (FQ = null === DQ || void 0 === DQ ? void 0 : DQ.displayName) && void 0 !== FQ ? FQ : wQ,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== kQ || null !== vQ) && (0, iQ.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== kQ && (0, iQ.jsx)(eQ.e, {
            text: kQ,
            className: "BoardChipTooltipDescription"
          }), null !== vQ && (0, iQ.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, iQ.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: oQ(`${WQ}:chipDroppedBy`)
            }), vQ]
          })]
        }), void 0 !== qQ && (0, iQ.jsxs)("div", {
          className: mQ()("BoardChipTooltipHeld", {
            Short: qQ < LQ
          }),
          children: [(0, iQ.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: oQ(`${WQ}:chipYouHave`)
          }), (0, iQ.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, iQ.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: qQ.toLocaleString()
            }), ` / ${LQ.toLocaleString()}`]
          }), (0, iQ.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, iQ.jsx)("span", {
              style: {
                width: (LQ > 0 ? 100 * Math.min(1, qQ / LQ) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function TQ(QQ) {
      let {
        icon: FQ,
        name: wQ,
        selected: LQ,
        locked: qQ,
        className: oQ,
        buttonRef: DQ,
        onSelect: kQ,
        children: vQ
      } = QQ;
      return (0, iQ.jsxs)("button", {
        ref: DQ,
        type: "button",
        className: mQ()("BoardTile", oQ, {
          Selected: LQ,
          Locked: qQ
        }),
        onClick: kQ,
        children: [(0, iQ.jsx)("span", {
          className: "BoardTileIcon",
          children: FQ
        }), (0, iQ.jsx)("span", {
          className: "BoardTileName",
          children: wQ
        }), vQ]
      })
    }

    function KQ(QQ) {
      let {
        icon: FQ,
        name: wQ,
        children: LQ
      } = QQ;
      return (0, iQ.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, iQ.jsx)("span", {
          className: "BoardDetailIcon",
          children: FQ
        }), (0, iQ.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, iQ.jsx)("h3", {
            children: wQ
          }), (0, iQ.jsx)("span", {
            className: "BoardDetailStatus",
            children: LQ
          })]
        })]
      })
    }

    function zQ(QQ) {
      let {
        coins: FQ,
        children: wQ
      } = QQ;
      return (0, iQ.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, iQ.jsx)(IQ, {
          itemName: RQ,
          amount: FQ
        }), wQ]
      })
    }
    var lQ = wQ(38060);
    const jQ = "containmentCodexView";
    class aQ extends lQ.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = QQ => {
          this.selectedId = QQ, this.emit()
        }
      }
      bx(QQ) {
        this.entries = QQ.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const XQ = {
        codexAnyDifficulty: `${WQ}:codexNeedsAny`,
        codexNormalOnly: `${WQ}:codexNeedsNormal`,
        codexHardOnly: `${WQ}:codexNeedsHard`
      },
      fQ = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      VQ = {
        codexContained: `${WQ}:codexContainedBadge`,
        codexEncountered: `${WQ}:codexEncounteredBadge`,
        codexUnidentified: `${WQ}:codexUnidentifiedBadge`
      },
      hQ = ["94%", "81%", "88%", "46%", "72%"];

    function JQ(QQ) {
      let {
        entry: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, HQ.y)();
      return (0, iQ.jsx)("span", {
        className: mQ()("BoardBadge", fQ[FQ.codexEntryState]),
        children: wQ(VQ[FQ.codexEntryState])
      })
    }

    function EQ(QQ) {
      const {
        t: FQ
      } = (0, HQ.y)();
      return "codexUnidentified" === QQ.codexEntryState ? FQ(`${WQ}:codexUnidentifiedName`) : QQ.codexEntryName
    }

    function nQ(QQ) {
      let {
        entry: FQ
      } = QQ;
      return "codexUnidentified" === FQ.codexEntryState ? (0, iQ.jsx)(sQ, {
        itemName: "Book"
      }) : (0, iQ.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, iQ.jsx)(rQ, {
          anomalyId: FQ.codexEntryId,
          caught: "codexContained" === FQ.codexEntryState
        }), (0, iQ.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function gQ(QQ) {
      let {
        entry: FQ,
        selected: wQ,
        onSelect: LQ
      } = QQ;
      const qQ = "codexUnidentified" === FQ.codexEntryState;
      return (0, iQ.jsxs)(TQ, {
        icon: (0, iQ.jsx)(nQ, {
          entry: FQ
        }),
        name: EQ(FQ),
        selected: wQ,
        locked: qQ,
        className: mQ()("CodexFolder", fQ[FQ.codexEntryState]),
        onSelect: () => {
          LQ(FQ.codexEntryId)
        },
        children: [!qQ && (0, iQ.jsx)(JQ, {
          entry: FQ
        }), qQ && (0, iQ.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function PQ(QQ) {
      let {
        count: FQ
      } = QQ;
      const wQ = [];
      for (let LQ = Math.min(FQ, 25); LQ > 0; LQ -= 5) wQ.push(Math.min(LQ, 5));
      return (0, iQ.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: wQ.map(((QQ, FQ) => (0, iQ.jsx)("span", {
          className: mQ()("CodexTallyGroup", {
            Gate: 5 === QQ
          }),
          children: Array.from({
            length: Math.min(QQ, 4)
          }, ((QQ, FQ) => (0, iQ.jsx)("span", {
            className: "CodexTallyMark"
          }, FQ)))
        }, FQ)))
      })
    }

    function ZQ(QQ) {
      let {
        contained: FQ,
        total: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, HQ.y)();
      return (0, iQ.jsxs)("div", {
        className: "CodexProgress",
        children: [LQ(`${WQ}:codexProgress`, {
          contained: String(FQ),
          total: String(wQ)
        }), (0, iQ.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, iQ.jsx)("span", {
            style: {
              width: FQ / wQ * 100 + "%"
            }
          })
        })]
      })
    }

    function yQ(QQ) {
      let {
        entry: FQ,
        fileNumber: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, HQ.y)(), qQ = "codexContained" === FQ.codexEntryState;
      return (0, iQ.jsx)("section", {
        className: "BoardDetail",
        children: (0, iQ.jsxs)("article", {
          className: mQ()("CodexDossier", fQ[FQ.codexEntryState]),
          children: [(0, iQ.jsx)("span", {
            className: "CodexFileNumber",
            children: LQ(`${WQ}:codexFileNumber`, {
              number: String(wQ).padStart(3, "0")
            })
          }), (0, iQ.jsx)(KQ, {
            icon: (0, iQ.jsx)(nQ, {
              entry: FQ
            }),
            name: EQ(FQ),
            children: (0, iQ.jsx)(JQ, {
              entry: FQ
            })
          }), qQ && (0, iQ.jsxs)(iQ.Fragment, {
            children: [(0, iQ.jsx)("p", {
              className: "BoardDescription",
              children: FQ.codexEntryLore
            }), (0, iQ.jsxs)("p", {
              className: "CodexTally",
              children: [LQ(`${WQ}:codexContainments`, {
                count: String(FQ.codexEntryContainedCount)
              }), (0, iQ.jsx)(PQ, {
                count: FQ.codexEntryContainedCount
              })]
            }), (0, iQ.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: LQ(`${WQ}:codexContainedBadge`)
            })]
          }), !qQ && (0, iQ.jsxs)(iQ.Fragment, {
            children: [(0, iQ.jsxs)("div", {
              className: "CodexRedaction",
              children: [hQ.map((QQ => (0, iQ.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: QQ
                }
              }, QQ))), (0, iQ.jsx)("p", {
                className: "CodexRedacted",
                children: LQ(`${WQ}:codexRedacted`)
              })]
            }), "" !== FQ.codexEntryHint && (0, iQ.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, iQ.jsx)("h4", {
                children: LQ(`${WQ}:codexHintLabel`)
              }), (0, iQ.jsx)("p", {
                children: FQ.codexEntryHint
              })]
            }), (0, iQ.jsx)("p", {
              className: "CodexClearance",
              children: LQ(XQ[FQ.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function BQ(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, uQ.i)(jQ, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, HQ.y)();
      if (0 === wQ.entries.length) return null;
      const qQ = wQ.entries.find((QQ => QQ.codexEntryId === wQ.selectedId)),
        oQ = wQ.entries.filter((QQ => "codexContained" === QQ.codexEntryState)).length,
        DQ = wQ.entries.map((QQ => QQ.codexEntryId)).sort().indexOf(qQ.codexEntryId) + 1;
      return (0, iQ.jsxs)(OQ, {
        open: wQ.open,
        onDismiss: FQ.dismiss,
        title: LQ(`${WQ}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, iQ.jsx)(ZQ, {
          contained: oQ,
          total: wQ.entries.length
        }),
        children: [(0, iQ.jsx)("div", {
          className: "BoardTiles",
          children: wQ.entries.map((QQ => (0, iQ.jsx)(gQ, {
            entry: QQ,
            selected: QQ === qQ,
            onSelect: FQ.select
          }, QQ.codexEntryId)))
        }), (0, iQ.jsx)(yQ, {
          entry: qQ,
          fileNumber: DQ
        })]
      })
    }
    var dQ = wQ(317);
    class QF extends lQ.c {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        super(QQ, FQ, wQ), this.pacer = LQ, this.command = qQ, this.predict = oQ, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = QQ => {
          this.selectedId = QQ, this.emit()
        }, this.act = (QQ, FQ) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${QQ} ${FQ}`, this.rollBack)) return;
          const wQ = this.predict(this.board, QQ, FQ);
          null !== wQ && (this.board = wQ.board, this.notice = wQ.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = LQ.subscribe((() => {
          this.emit()
        }))
      }
      bx(QQ) {
        const FQ = this.messageOpens(QQ);
        if (FQ && this.open) return this.board === this.confirmed && (this.board = QQ), this.confirmed = QQ, void this.emit();
        if (this.board = QQ, this.confirmed = QQ, this.pacer.onReply(), FQ) return this.notice = null, this.selectedId = this.openingSelection(QQ), void this.show();
        const wQ = this.messageNotice(QQ);
        null !== wQ && (this.notice = wQ), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function FF(QQ, FQ) {
      return QQ.loadoutCoins >= FQ.loadoutCostCoins && FQ.loadoutCostParts.every((FQ => function(QQ, FQ) {
        return wF(QQ, FQ).loadoutHeldPartAmount
      }(QQ, FQ.loadoutPartCurrency) >= FQ.loadoutPartAmount))
    }

    function wF(QQ, FQ) {
      return QQ.loadoutHeldParts.find((QQ => QQ.loadoutHeldPartCurrency === FQ))
    }

    function LF(QQ, FQ) {
      return QQ.loadoutSlots.find((QQ => QQ.loadoutSlotKind === FQ))
    }

    function qF(QQ) {
      return QQ.loadoutPerks.filter((QQ => QQ.loadoutPerkEquipped)).length >= QQ.loadoutMaxPerks
    }

    function oF(QQ, FQ, wQ) {
      for (const qQ of QQ.loadoutSlots) {
        const LQ = qQ.loadoutSlotOptions.find((QQ => QQ.loadoutOptionId === wQ));
        if (LQ) return "loadoutArmour" === qQ.loadoutSlotKind ? kF(QQ, qQ, LQ, FQ) : DF(QQ, qQ, LQ, FQ)
      }
      const LQ = QQ.loadoutPerks.find((QQ => QQ.loadoutPerkId === wQ));
      return LQ ? function(QQ, FQ, wQ) {
        const LQ = FQ.loadoutPerkOwned,
          qQ = FQ.loadoutPerkEquipped,
          oQ = FQ.loadoutPerkName,
          DQ = qF(QQ);
        if ("loadoutUnlock" === wQ) {
          if (LQ || !FF(QQ, FQ.loadoutPerkCost)) return null;
          const wQ = {
            ...FQ,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !DQ
          };
          return {
            board: mF(uF(QQ, FQ.loadoutPerkCost), wQ),
            notice: HF(DQ ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", oQ)
          }
        }
        if ("loadoutUpgrade" === wQ || !LQ || "loadoutEquip" === wQ === qQ || !qQ && DQ) return null;
        return {
          board: mF(QQ, {
            ...FQ,
            loadoutPerkEquipped: !qQ
          }),
          notice: HF(qQ ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", oQ)
        }
      }(QQ, LQ, FQ) : null
    }

    function DF(QQ, FQ, wQ, LQ) {
      const qQ = wQ.loadoutOptionOwnedTier,
        oQ = wQ.loadoutOptionName;
      if ("loadoutEquip" === LQ) return 0 === qQ ? null : {
        board: vF(QQ, FQ, wQ.loadoutOptionId, null),
        notice: HF("loadoutNoticeEquipped", oQ)
      };
      const DQ = "loadoutUnlock" === LQ;
      if (DQ && 0 !== qQ || "loadoutUpgrade" === LQ && (0 === qQ || qQ >= wQ.loadoutOptionTiers.length) || "loadoutUnequip" === LQ) return null;
      const kQ = wQ.loadoutOptionTiers[qQ].loadoutTierCost;
      if (!FF(QQ, kQ)) return null;
      const vQ = {
          ...wQ,
          loadoutOptionOwnedTier: qQ + 1
        },
        mQ = DQ ? wQ.loadoutOptionId : FQ.loadoutSlotEquippedId;
      return {
        board: vF(uF(QQ, kQ), FQ, mQ, vQ),
        notice: DQ ? HF("loadoutNoticeUnlocked", oQ) : HF("loadoutNoticeUpgraded", oQ, qQ + 1)
      }
    }

    function kF(QQ, FQ, wQ, LQ) {
      const qQ = wQ.loadoutOptionOwnedTier > 0,
        oQ = wQ.loadoutOptionName;
      if ("loadoutEquip" === LQ && qQ) return {
        board: vF(QQ, FQ, wQ.loadoutOptionId, null),
        notice: HF("loadoutNoticeEquipped", oQ)
      };
      const DQ = wQ.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== LQ || qQ || !FF(QQ, DQ) ? null : {
        board: vF(uF(QQ, DQ), FQ, wQ.loadoutOptionId, {
          ...wQ,
          loadoutOptionOwnedTier: 1
        }),
        notice: HF("loadoutNoticeUnlocked", oQ)
      }
    }

    function vF(QQ, FQ, wQ, LQ) {
      const qQ = {
        ...FQ,
        loadoutSlotEquippedId: wQ,
        loadoutSlotOptions: FQ.loadoutSlotOptions.map((QQ => null !== LQ && QQ.loadoutOptionId === LQ.loadoutOptionId ? LQ : QQ))
      };
      return {
        ...QQ,
        loadoutSlots: QQ.loadoutSlots.map((QQ => QQ === FQ ? qQ : QQ))
      }
    }

    function mF(QQ, FQ) {
      return {
        ...QQ,
        loadoutPerks: QQ.loadoutPerks.map((QQ => QQ.loadoutPerkId === FQ.loadoutPerkId ? FQ : QQ))
      }
    }

    function uF(QQ, FQ) {
      return {
        ...QQ,
        loadoutCoins: QQ.loadoutCoins - FQ.loadoutCostCoins,
        loadoutHeldParts: QQ.loadoutHeldParts.map((QQ => {
          const wQ = FQ.loadoutCostParts.find((FQ => FQ.loadoutPartCurrency === QQ.loadoutHeldPartCurrency));
          return wQ ? {
            ...QQ,
            loadoutHeldPartAmount: QQ.loadoutHeldPartAmount - wQ.loadoutPartAmount
          } : QQ
        }))
      }
    }

    function HF(QQ, FQ) {
      return {
        loadoutNoticeKey: QQ,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: FQ,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const bF = "containmentLoadoutView";
    class YF extends QF {
      constructor(QQ, FQ, wQ, LQ) {
        super(QQ, FQ, wQ, LQ, "loadout", oF), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = QQ => {
          this.slot = QQ, this.selectedId = xF(this.board, QQ), this.emit()
        }
      }
      messageOpens(QQ) {
        return QQ.loadoutMessageOpens
      }
      messageNotice(QQ) {
        return QQ.loadoutNotice
      }
      openingSelection(QQ) {
        return xF(QQ, this.slot)
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

    function xF(QQ, FQ) {
      if ("loadoutPerks" === FQ) {
        var wQ;
        const FQ = QQ.loadoutPerks;
        return (null !== (wQ = FQ.find((QQ => QQ.loadoutPerkEquipped))) && void 0 !== wQ ? wQ : FQ[0]).loadoutPerkId
      }
      return LF(QQ, FQ).loadoutSlotEquippedId
    }
    const AF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var tF = wQ(36508),
      eF = wQ(1295);
    const MF = {
        loadoutPrimary: `${WQ}:loadoutSlotPrimary`,
        loadoutSecondary: `${WQ}:loadoutSlotSecondary`,
        loadoutOffensive: `${WQ}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${WQ}:loadoutSlotSelfHelp`,
        loadoutArmour: `${WQ}:loadoutSlotArmour`,
        loadoutPerks: `${WQ}:loadoutSlotPerks`
      },
      GF = {
        section: "right",
        Vb: "bottom",
        act: "top"
      },
      pF = (0, LQ.createContext)({
        step: null,
        targetRef: () => {}
      });

    function cF() {
      const {
        step: QQ,
        targetRef: FQ
      } = (0, LQ.useContext)(pF);
      return (wQ, LQ) => (null === QQ || void 0 === QQ ? void 0 : QQ.kind) === wQ && QQ.id === LQ ? FQ : void 0
    }

    function CF(QQ, FQ) {
      const wQ = FQ.loadoutTargetId;
      if ("loadoutPerks" === FQ.loadoutTargetSection) {
        const FQ = QQ.loadoutPerks.find((QQ => QQ.loadoutPerkId === wQ));
        return {
          name: FQ.loadoutPerkName,
          owned: FQ.loadoutPerkOwned,
          equipped: FQ.loadoutPerkEquipped
        }
      }
      const LQ = LF(QQ, FQ.loadoutTargetSection),
        qQ = LQ.loadoutSlotOptions.find((QQ => QQ.loadoutOptionId === wQ));
      return {
        name: qQ.loadoutOptionName,
        owned: qQ.loadoutOptionOwnedTier > 0,
        equipped: LQ.loadoutSlotEquippedId === wQ
      }
    }

    function SF(QQ, FQ, wQ, LQ) {
      const [qQ, oQ] = QQ(`${WQ}:${FQ}`, {
        [wQ]: "\x01"
      }).split("\x01");
      return (0, iQ.jsxs)(iQ.Fragment, {
        children: [qQ, (0, iQ.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: LQ
        }), oQ]
      })
    }

    function iF(QQ) {
      let {
        view: FQ,
        onDismiss: wQ,
        children: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, HQ.y)(), DQ = FQ.loadout, kQ = FQ.open ? DQ.loadoutWalkthrough.map((QQ => ({
        target: QQ,
        info: CF(DQ, QQ)
      }))).find((QQ => {
        let {
          info: FQ
        } = QQ;
        return !FQ.equipped
      })) : void 0;
      let vQ = null,
        mQ = null;
      if (void 0 !== kQ) {
        const {
          target: QQ,
          info: wQ
        } = kQ;
        FQ.slot !== QQ.loadoutTargetSection ? (vQ = {
          kind: "section",
          id: QQ.loadoutTargetSection
        }, mQ = SF(oQ, "loadoutWalkthroughSection", "section", oQ(MF[QQ.loadoutTargetSection]))) : FQ.selectedId !== QQ.loadoutTargetId ? (vQ = {
          kind: "Vb",
          id: QQ.loadoutTargetId
        }, mQ = SF(oQ, "loadoutWalkthroughPick", "name", wQ.name)) : (vQ = {
          kind: "act",
          id: QQ.loadoutTargetId
        }, mQ = SF(oQ, wQ.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", wQ.name))
      }
      const uQ = null === vQ ? null : function(QQ) {
          return `${QQ.kind}:${QQ.id}`
        }(vQ),
        [bQ, YQ] = (0, LQ.useState)(null),
        xQ = (0, LQ.useCallback)((QQ => {
          YQ((FQ => null !== QQ ? {
            key: uQ,
            node: QQ
          } : (null === FQ || void 0 === FQ ? void 0 : FQ.key) === uQ ? null : FQ))
        }), [uQ]),
        AQ = null !== uQ && (null === bQ || void 0 === bQ ? void 0 : bQ.key) === uQ ? bQ.node : null;
      return (0, iQ.jsxs)(pF.Provider, {
        value: {
          step: vQ,
          targetRef: xQ
        },
        children: [qQ, null !== vQ && null !== AQ && (0, iQ.jsx)(WF, {
          target: AQ,
          placement: GF[vQ.kind],
          onDismiss: wQ,
          children: mQ
        }, uQ)]
      })
    }

    function WF(QQ) {
      let {
        target: FQ,
        placement: wQ,
        onDismiss: qQ,
        children: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, HQ.y)(), kQ = (0, LQ.useRef)(FQ);
      return kQ.current = FQ, (0, eF.m)("popup", kQ, qQ), (0, iQ.jsxs)(tF.e, {
        target: FQ,
        placement: wQ,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, iQ.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, iQ.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: AF,
            alt: "",
            draggable: !1
          }), (0, iQ.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: DQ(`${WQ}:operatorName`)
          }), (0, iQ.jsx)(xQ.j, {
            onClick: qQ,
            ariaLabel: DQ(`${WQ}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, iQ.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: oQ
        })]
      })
    }
    const RF = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function OF(QQ) {
      let {
        cost: FQ,
        loadout: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, HQ.y)();
      return FQ.loadoutCostCoins <= 0 && 0 === FQ.loadoutCostParts.length ? (0, iQ.jsx)("span", {
        className: "LoadoutCost",
        children: LQ(`${WQ}:loadoutFree`)
      }) : (0, iQ.jsxs)("span", {
        className: "LoadoutCost",
        children: [FQ.loadoutCostCoins > 0 && (0, iQ.jsx)(IQ, {
          itemName: RQ,
          amount: FQ.loadoutCostCoins,
          ym: wQ.loadoutCoins
        }), FQ.loadoutCostParts.map((QQ => {
          const FQ = wF(wQ, QQ.loadoutPartCurrency);
          return (0, iQ.jsx)(IQ, {
            itemName: FQ.loadoutHeldPartItem,
            amount: QQ.loadoutPartAmount,
            ym: FQ.loadoutHeldPartAmount
          }, QQ.loadoutPartCurrency)
        }))]
      })
    }
    const sF = {
      loadoutStatFireRate: `${WQ}:loadoutUnitPerMinute`,
      loadoutStatReload: `${WQ}:loadoutUnitSeconds`,
      loadoutStatResupply: `${WQ}:loadoutUnitSeconds`
    };

    function rF(QQ) {
      return "loadoutStatPotency" === QQ.loadoutStatKind ? (0, dQ.S)(QQ.loadoutStatValue) : String(QQ.loadoutStatValue)
    }

    function IF(QQ) {
      var FQ;
      let {
        option: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, HQ.y)(), qQ = wQ.loadoutOptionTiers, oQ = null === (FQ = qQ[0]) || void 0 === FQ ? void 0 : FQ.loadoutTierStats.map((QQ => QQ.loadoutStatKind));
      if (!oQ || 0 === oQ.length) return null;
      const DQ = wQ.loadoutOptionOwnedTier,
        kQ = (QQ, FQ) => {
          var wQ;
          return null === (wQ = qQ[QQ]) || void 0 === wQ ? void 0 : wQ.loadoutTierStats.find((QQ => QQ.loadoutStatKind === FQ))
        };
      return (0, iQ.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, iQ.jsx)("thead", {
          children: (0, iQ.jsxs)("tr", {
            children: [(0, iQ.jsx)("th", {}), qQ.map(((QQ, FQ) => (0, iQ.jsx)("th", {
              className: mQ()({
                Current: FQ + 1 === DQ,
                Next: FQ === DQ
              }),
              children: LQ(`${WQ}:loadoutTier`, {
                tier: (0, dQ.S)(FQ + 1)
              })
            }, FQ)))]
          })
        }), (0, iQ.jsx)("tbody", {
          children: oQ.map((QQ => {
            const FQ = sF[QQ];
            return (0, iQ.jsxs)("tr", {
              children: [(0, iQ.jsxs)("th", {
                scope: "row",
                children: [LQ(`${WQ}:${QQ}`), FQ && (0, iQ.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: LQ(FQ)
                })]
              }), qQ.map(((FQ, wQ) => {
                const LQ = kQ(wQ, QQ),
                  qQ = wQ > 0 ? kQ(wQ - 1, QQ) : void 0,
                  oQ = LQ && qQ ? LQ.loadoutStatValue - qQ.loadoutStatValue : 0,
                  vQ = RF.has(QQ) ? oQ < 0 : oQ > 0,
                  uQ = wQ === DQ;
                return (0, iQ.jsxs)("td", {
                  className: mQ()({
                    Current: wQ + 1 === DQ,
                    Next: uQ,
                    Gain: vQ,
                    Owned: wQ < DQ
                  }),
                  children: [uQ && vQ && (0, iQ.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: oQ < 0 ? "\u25bc" : "\u25b2"
                  }), LQ ? rF(LQ) : "-"]
                }, wQ)
              }))]
            }, QQ)
          }))
        })]
      })
    }

    function UF(QQ) {
      let {
        view: FQ,
        controller: wQ,
        slot: LQ,
        option: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, HQ.y)(), DQ = FQ.loadout, kQ = qQ.loadoutOptionOwnedTier, vQ = qQ.loadoutOptionTiers.length, mQ = LQ.loadoutSlotEquippedId === qQ.loadoutOptionId, uQ = kQ < vQ ? qQ.loadoutOptionTiers[kQ].loadoutTierCost : null, bQ = null !== uQ && FF(DQ, uQ), YQ = qQ.loadoutOptionId, AQ = cF();
      return (0, iQ.jsxs)(iQ.Fragment, {
        children: [(0, iQ.jsx)(TF, {
          icon: qQ.loadoutOptionIcon,
          name: qQ.loadoutOptionName,
          status: 0 === kQ ? oQ(`${WQ}:loadoutLocked`) : vQ > 1 ? oQ(`${WQ}:loadoutTier`, {
            tier: (0, dQ.S)(kQ)
          }) : null,
          locked: 0 === kQ,
          equipped: mQ
        }), (0, iQ.jsx)("p", {
          className: "BoardDescription",
          children: qQ.loadoutOptionDescription
        }), (0, iQ.jsx)(IF, {
          option: qQ
        }), (0, iQ.jsxs)("div", {
          ref: AQ("act", YQ),
          className: "BoardActions",
          children: [null !== uQ && (0, iQ.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, iQ.jsx)(OF, {
              cost: uQ,
              loadout: DQ
            }), (0, iQ.jsx)(xQ.m, {
              disabled: !bQ || FQ.pending,
              onClick: () => {
                wQ.act(0 === kQ ? "loadoutUnlock" : "loadoutUpgrade", YQ)
              },
              children: 0 === kQ ? oQ(`${WQ}:loadoutUnlock`) : oQ(`${WQ}:loadoutUpgrade`, {
                tier: (0, dQ.S)(kQ + 1)
              })
            })]
          }), null === uQ && vQ > 1 && (0, iQ.jsx)("span", {
            className: "BoardHint",
            children: oQ(`${WQ}:loadoutMaxed`)
          }), kQ > 0 && !mQ && (0, iQ.jsx)(xQ.f, {
            disabled: FQ.pending,
            onClick: () => {
              wQ.act("loadoutEquip", YQ)
            },
            children: oQ(`${WQ}:loadoutEquip`)
          })]
        })]
      })
    }

    function NF(QQ) {
      let {
        view: FQ,
        controller: wQ,
        perk: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, HQ.y)(), oQ = FQ.loadout, DQ = qF(oQ), kQ = LQ.loadoutPerkId, vQ = cF();
      return (0, iQ.jsxs)(iQ.Fragment, {
        children: [(0, iQ.jsx)(TF, {
          icon: LQ.loadoutPerkIcon,
          name: LQ.loadoutPerkName,
          status: LQ.loadoutPerkOwned ? null : qQ(`${WQ}:loadoutLocked`),
          locked: !LQ.loadoutPerkOwned,
          equipped: LQ.loadoutPerkEquipped
        }), (0, iQ.jsx)("p", {
          className: "BoardDescription",
          children: LQ.loadoutPerkDescription
        }), (0, iQ.jsxs)("div", {
          ref: vQ("act", kQ),
          className: "BoardActions",
          children: [!LQ.loadoutPerkOwned && (0, iQ.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, iQ.jsx)(OF, {
              cost: LQ.loadoutPerkCost,
              loadout: oQ
            }), (0, iQ.jsx)(xQ.m, {
              disabled: !FF(oQ, LQ.loadoutPerkCost) || FQ.pending,
              onClick: () => {
                wQ.act("loadoutUnlock", kQ)
              },
              children: qQ(`${WQ}:loadoutUnlock`)
            })]
          }), LQ.loadoutPerkOwned && !LQ.loadoutPerkEquipped && (0, iQ.jsx)(xQ.f, {
            disabled: DQ || FQ.pending,
            onClick: () => {
              wQ.act("loadoutEquip", kQ)
            },
            children: qQ(`${WQ}:loadoutEquip`)
          }), LQ.loadoutPerkOwned && !LQ.loadoutPerkEquipped && DQ && (0, iQ.jsx)("span", {
            className: "BoardHint",
            children: qQ(`${WQ}:loadoutSocketsFullHint`)
          }), LQ.loadoutPerkEquipped && (0, iQ.jsx)(xQ.L, {
            disabled: FQ.pending,
            onClick: () => {
              wQ.act("loadoutUnequip", kQ)
            },
            children: qQ(`${WQ}:loadoutUnequip`)
          })]
        })]
      })
    }

    function TF(QQ) {
      let {
        icon: FQ,
        name: wQ,
        status: LQ,
        locked: qQ,
        equipped: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, HQ.y)();
      return (0, iQ.jsxs)(KQ, {
        icon: (0, iQ.jsx)(sQ, {
          itemName: FQ
        }),
        name: wQ,
        children: [null !== LQ && (0, iQ.jsx)("span", {
          className: mQ()("LoadoutStatusText", {
            Locked: qQ
          }),
          children: LQ
        }), oQ && (0, iQ.jsx)("span", {
          className: "BoardBadge",
          children: DQ(`${WQ}:loadoutEquippedBadge`)
        })]
      })
    }

    function KF(QQ) {
      let {
        view: FQ,
        controller: wQ
      } = QQ;
      const LQ = FQ.loadout;
      if ("loadoutPerks" === FQ.slot) {
        const QQ = LQ.loadoutPerks.find((QQ => QQ.loadoutPerkId === FQ.selectedId));
        return (0, iQ.jsx)("section", {
          className: "BoardDetail",
          children: QQ && (0, iQ.jsx)(NF, {
            view: FQ,
            controller: wQ,
            perk: QQ
          })
        })
      }
      const qQ = LF(LQ, FQ.slot),
        oQ = qQ.loadoutSlotOptions.find((QQ => QQ.loadoutOptionId === FQ.selectedId));
      return (0, iQ.jsx)("section", {
        className: "BoardDetail",
        children: oQ && (0, iQ.jsx)(UF, {
          view: FQ,
          controller: wQ,
          slot: qQ,
          option: oQ
        })
      })
    }

    function zF(QQ) {
      let {
        owned: FQ,
        total: wQ
      } = QQ;
      return wQ <= 1 ? null : (0, iQ.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: wQ
        }, ((QQ, wQ) => (0, iQ.jsx)("span", {
          className: mQ()("LoadoutPip", {
            Filled: wQ < FQ
          })
        }, wQ)))
      })
    }

    function lF(QQ) {
      let {
        view: FQ,
        controller: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, HQ.y)(), qQ = FQ.loadout, oQ = cF();
      return (0, iQ.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": LQ(`${WQ}:loadoutKit`),
        children: [qQ.loadoutSlots.map((QQ => {
          const qQ = QQ.loadoutSlotOptions.find((FQ => FQ.loadoutOptionId === QQ.loadoutSlotEquippedId));
          return (0, iQ.jsxs)("button", {
            ref: oQ("section", QQ.loadoutSlotKind),
            type: "button",
            className: mQ()("LoadoutKitSlot", {
              Selected: FQ.slot === QQ.loadoutSlotKind
            }),
            onClick: () => {
              wQ.selectSlot(QQ.loadoutSlotKind)
            },
            children: [(0, iQ.jsx)("span", {
              className: "LoadoutKitIcon",
              children: qQ && (0, iQ.jsx)(sQ, {
                itemName: qQ.loadoutOptionIcon
              })
            }), (0, iQ.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, iQ.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, iQ.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: LQ(MF[QQ.loadoutSlotKind])
                }), qQ && (0, iQ.jsx)(zF, {
                  owned: qQ.loadoutOptionOwnedTier,
                  total: qQ.loadoutOptionTiers.length
                })]
              }), (0, iQ.jsx)("span", {
                className: "LoadoutKitName",
                children: null === qQ || void 0 === qQ ? void 0 : qQ.loadoutOptionName
              })]
            })]
          }, QQ.loadoutSlotKind)
        })), (0, iQ.jsx)(jF, {
          view: FQ,
          controller: wQ
        })]
      })
    }

    function jF(QQ) {
      let {
        view: FQ,
        controller: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, HQ.y)(), qQ = FQ.loadout, oQ = qQ.loadoutPerks.filter((QQ => QQ.loadoutPerkEquipped)), DQ = cF();
      return (0, iQ.jsxs)("button", {
        ref: DQ("section", "loadoutPerks"),
        type: "button",
        className: mQ()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === FQ.slot
        }),
        onClick: () => {
          wQ.selectSlot("loadoutPerks")
        },
        children: [(0, iQ.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, iQ.jsx)("span", {
            className: "LoadoutKitLabel",
            children: LQ(MF.loadoutPerks)
          }), (0, iQ.jsx)("span", {
            className: "LoadoutPerkCount",
            children: LQ(`${WQ}:loadoutPerkCount`, {
              equipped: String(oQ.length),
              max: String(qQ.loadoutMaxPerks)
            })
          })]
        }), (0, iQ.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: qQ.loadoutMaxPerks
          }, ((QQ, FQ) => {
            const wQ = oQ[FQ];
            return (0, iQ.jsxs)("span", {
              className: mQ()("LoadoutSocket", {
                Filled: wQ,
                Empty: !wQ
              }),
              children: [(0, iQ.jsx)("span", {
                className: "LoadoutSocketWell",
                children: wQ && (0, iQ.jsx)(sQ, {
                  itemName: wQ.loadoutPerkIcon
                })
              }), (0, iQ.jsx)("span", {
                className: "LoadoutSocketName",
                children: wQ ? wQ.loadoutPerkName : LQ(`${WQ}:loadoutPerkSocketEmpty`)
              })]
            }, FQ)
          }))
        })]
      })
    }

    function aF(QQ) {
      let {
        icon: FQ,
        name: wQ,
        selected: LQ,
        equipped: qQ,
        locked: oQ,
        ownedTier: DQ,
        tiers: kQ,
        buttonRef: vQ,
        onSelect: mQ
      } = QQ;
      const {
        t: uQ
      } = (0, HQ.y)();
      return (0, iQ.jsxs)(TQ, {
        icon: (0, iQ.jsx)(sQ, {
          itemName: FQ
        }),
        name: wQ,
        selected: LQ,
        locked: oQ,
        buttonRef: vQ,
        onSelect: mQ,
        children: [qQ && (0, iQ.jsx)("span", {
          className: "BoardBadge",
          children: uQ(`${WQ}:loadoutEquippedBadge`)
        }), oQ && (0, iQ.jsx)("span", {
          className: "BoardBadge Muted",
          children: uQ(`${WQ}:loadoutLocked`)
        }), !oQ && (0, iQ.jsx)(zF, {
          owned: DQ,
          total: kQ
        })]
      })
    }

    function XF(QQ) {
      let {
        view: FQ,
        controller: wQ
      } = QQ;
      const LQ = FQ.loadout,
        qQ = cF();
      if ("loadoutPerks" === FQ.slot) return (0, iQ.jsx)("div", {
        className: "BoardTiles",
        children: LQ.loadoutPerks.map((QQ => (0, iQ.jsx)(aF, {
          icon: QQ.loadoutPerkIcon,
          name: QQ.loadoutPerkName,
          selected: FQ.selectedId === QQ.loadoutPerkId,
          equipped: QQ.loadoutPerkEquipped,
          locked: !QQ.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: qQ("Vb", QQ.loadoutPerkId),
          onSelect: () => {
            wQ.select(QQ.loadoutPerkId)
          }
        }, QQ.loadoutPerkId)))
      });
      const oQ = LF(LQ, FQ.slot);
      return (0, iQ.jsx)("div", {
        className: "BoardTiles",
        children: oQ.loadoutSlotOptions.map((QQ => (0, iQ.jsx)(aF, {
          icon: QQ.loadoutOptionIcon,
          name: QQ.loadoutOptionName,
          selected: FQ.selectedId === QQ.loadoutOptionId,
          equipped: oQ.loadoutSlotEquippedId === QQ.loadoutOptionId,
          locked: 0 === QQ.loadoutOptionOwnedTier,
          ownedTier: QQ.loadoutOptionOwnedTier,
          tiers: QQ.loadoutOptionTiers.length,
          buttonRef: qQ("Vb", QQ.loadoutOptionId),
          onSelect: () => {
            wQ.select(QQ.loadoutOptionId)
          }
        }, QQ.loadoutOptionId)))
      })
    }

    function fF(QQ) {
      let {
        loadout: FQ
      } = QQ;
      return (0, iQ.jsx)(zQ, {
        coins: FQ.loadoutCoins,
        children: FQ.loadoutHeldParts.filter((QQ => QQ.loadoutHeldPartAmount > 0)).map((QQ => (0, iQ.jsx)(IQ, {
          itemName: QQ.loadoutHeldPartItem,
          amount: QQ.loadoutHeldPartAmount
        }, QQ.loadoutHeldPartCurrency)))
      })
    }

    function VF(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, uQ.i)(bF, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, HQ.y)();
      if (null === wQ.loadout) return null;
      const qQ = wQ.notice;
      return (0, iQ.jsx)(iF, {
        view: wQ,
        onDismiss: FQ.dismiss,
        children: (0, iQ.jsxs)(OQ, {
          open: wQ.open,
          onDismiss: FQ.dismiss,
          title: LQ(`${WQ}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, iQ.jsx)(fF, {
            loadout: wQ.loadout
          }),
          statusRefused: null === qQ || void 0 === qQ ? void 0 : qQ.loadoutNoticeRefused,
          status: (0, iQ.jsxs)(iQ.Fragment, {
            children: [(0, iQ.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: LQ(`${WQ}:loadoutRadioBadge`)
            }), null !== qQ && LQ(`${WQ}:${qQ.loadoutNoticeKey}`, {
              name: qQ.loadoutNoticeName,
              tier: (0, dQ.S)(qQ.loadoutNoticeTier),
              max: String(wQ.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, iQ.jsx)(lF, {
            view: wQ,
            controller: FQ
          }), (0, iQ.jsx)(XF, {
            view: wQ,
            controller: FQ
          }), (0, iQ.jsx)(KF, {
            view: wQ,
            controller: FQ
          })]
        })
      })
    }

    function hF(QQ, FQ, wQ) {
      const LQ = QQ.locatorEntries.find((QQ => QQ.locatorEntryId === wQ));
      if (!LQ) return null;
      const qQ = LQ.locatorEntryName;
      if ("locatorDisarm" === FQ) return LQ.locatorEntryArmed ? {
        board: JF(QQ, null),
        notice: EF("locatorNoticeDisarmed", qQ)
      } : null;
      if ("locatorArm" === FQ) return LQ.locatorEntryOwned && !LQ.locatorEntryArmed ? {
        board: JF(QQ, wQ),
        notice: EF("locatorNoticeArmed", qQ)
      } : null;
      if (LQ.locatorEntryOwned || QQ.locatorCoins < LQ.locatorEntryPrice) return null;
      const oQ = JF({
        ...QQ,
        locatorCoins: QQ.locatorCoins - LQ.locatorEntryPrice
      }, wQ);
      return {
        board: {
          ...oQ,
          locatorEntries: oQ.locatorEntries.map((QQ => QQ.locatorEntryId === wQ ? {
            ...QQ,
            locatorEntryOwned: !0
          } : QQ))
        },
        notice: EF("locatorNoticeBought", qQ)
      }
    }

    function JF(QQ, FQ) {
      return {
        ...QQ,
        locatorEntries: QQ.locatorEntries.map((QQ => {
          const wQ = QQ.locatorEntryId === FQ;
          return QQ.locatorEntryArmed === wQ ? QQ : {
            ...QQ,
            locatorEntryArmed: wQ
          }
        }))
      }
    }

    function EF(QQ, FQ) {
      return {
        locatorNoticeKey: QQ,
        locatorNoticeRefused: !1,
        locatorNoticeName: FQ
      }
    }
    const nF = "containmentLocatorView";
    class gF extends QF {
      constructor(QQ, FQ, wQ, LQ) {
        super(QQ, FQ, wQ, LQ, "locator", hF), this.snapshot = this.buildSnapshot()
      }
      messageOpens(QQ) {
        return QQ.locatorMessageOpens
      }
      messageNotice(QQ) {
        return QQ.locatorNotice
      }
      openingSelection(QQ) {
        var FQ;
        const wQ = QQ.locatorEntries;
        return (null !== (FQ = wQ.find((QQ => QQ.locatorEntryArmed))) && void 0 !== FQ ? FQ : wQ[0]).locatorEntryId
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
    const PF = {
        locatorContained: `${WQ}:locatorFlavourContained`,
        locatorEncountered: `${WQ}:locatorFlavourEncountered`,
        locatorUnseen: `${WQ}:locatorFlavourUnseen`
      },
      ZF = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${WQ}:locatorAttunedNormal`,
        codexHardOnly: `${WQ}:locatorAttunedHard`
      };

    function yF() {
      return (0, iQ.jsx)(iQ.Fragment, {
        children: Array.from({
          length: 5
        }, ((QQ, FQ) => (0, iQ.jsx)("span", {
          className: "LocatorFly",
          children: (0, iQ.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, FQ)))
      })
    }

    function BF(QQ) {
      let {
        entry: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, HQ.y)();
      return FQ.locatorEntryArmed ? (0, iQ.jsx)("span", {
        className: "BoardBadge Armed",
        children: wQ(`${WQ}:locatorArmedBadge`)
      }) : FQ.locatorEntryOwned ? (0, iQ.jsx)("span", {
        className: "BoardBadge",
        children: wQ(`${WQ}:locatorOwnedBadge`)
      }) : null
    }

    function dF(QQ) {
      let {
        entry: FQ,
        coins: wQ,
        inTile: LQ = !1
      } = QQ;
      return (0, iQ.jsx)(IQ, {
        itemName: RQ,
        amount: FQ.locatorEntryPrice,
        ym: wQ,
        inTile: LQ
      })
    }

    function Qw(QQ) {
      let {
        view: FQ,
        controller: wQ,
        entry: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, HQ.y)(), oQ = LQ.locatorEntryId, DQ = FQ.locators.locatorEntries.find((QQ => QQ.locatorEntryArmed && QQ !== LQ));
      return (0, iQ.jsxs)("div", {
        className: "BoardActions",
        children: [LQ.locatorEntryArmed && (0, iQ.jsx)(xQ.L, {
          disabled: FQ.pending,
          onClick: () => {
            wQ.act("locatorDisarm", oQ)
          },
          children: qQ(`${WQ}:locatorDisarm`)
        }), LQ.locatorEntryOwned && !LQ.locatorEntryArmed && (0, iQ.jsx)(xQ.f, {
          disabled: FQ.pending,
          onClick: () => {
            wQ.act("locatorArm", oQ)
          },
          children: qQ(`${WQ}:locatorArm`)
        }), !LQ.locatorEntryOwned && (0, iQ.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, iQ.jsx)(dF, {
            entry: LQ,
            coins: FQ.locators.locatorCoins
          }), (0, iQ.jsx)(xQ.m, {
            disabled: FQ.locators.locatorCoins < LQ.locatorEntryPrice || FQ.pending,
            onClick: () => {
              wQ.act("locatorBuy", oQ)
            },
            children: qQ(`${WQ}:locatorBuy`)
          })]
        }), DQ && !LQ.locatorEntryArmed && (0, iQ.jsx)("span", {
          className: "BoardHint",
          children: qQ(`${WQ}:locatorReplacesHint`, {
            name: DQ.locatorEntryName
          })
        })]
      })
    }

    function Fw(QQ) {
      let {
        entry: FQ
      } = QQ;
      return "locatorUnseen" === FQ.locatorEntryStanding ? (0, iQ.jsx)(sQ, {
        itemName: "Compass"
      }) : (0, iQ.jsx)(rQ, {
        anomalyId: FQ.locatorEntryId,
        caught: "locatorContained" === FQ.locatorEntryStanding
      })
    }

    function ww(QQ) {
      let {
        view: FQ,
        controller: wQ,
        entry: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, HQ.y)(), oQ = ZF[LQ.locatorEntryDifficulty];
      return (0, iQ.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, iQ.jsxs)("div", {
          className: mQ()("LocatorLabel", {
            Armed: LQ.locatorEntryArmed
          }),
          children: [(0, iQ.jsx)(KQ, {
            icon: (0, iQ.jsx)(Fw, {
              entry: LQ
            }),
            name: qQ(`${WQ}:locatorName`, {
              name: LQ.locatorEntryName
            }),
            children: (0, iQ.jsx)(BF, {
              entry: LQ
            })
          }), (0, iQ.jsx)("p", {
            className: "BoardDescription",
            children: qQ(LQ.locatorEntryArmed ? `${WQ}:locatorFlavourArmed` : PF[LQ.locatorEntryStanding])
          }), null !== oQ && (0, iQ.jsx)("p", {
            className: "LocatorAttuned",
            children: qQ(oQ)
          }), (0, iQ.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: qQ(`${WQ}:locatorUsage`)
          })]
        }), (0, iQ.jsx)(Qw, {
          view: FQ,
          controller: wQ,
          entry: LQ
        })]
      })
    }

    function Lw(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, uQ.i)(nF, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, HQ.y)(),
        qQ = wQ.locators;
      if (null === qQ) return null;
      const oQ = qQ.locatorEntries.find((QQ => QQ.locatorEntryId === wQ.selectedId)),
        DQ = wQ.notice;
      return (0, iQ.jsxs)(OQ, {
        open: wQ.open,
        onDismiss: FQ.dismiss,
        title: LQ(`${WQ}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, iQ.jsx)(yF, {}),
        headerExtra: (0, iQ.jsx)(zQ, {
          coins: qQ.locatorCoins
        }),
        statusRefused: null === DQ || void 0 === DQ ? void 0 : DQ.locatorNoticeRefused,
        status: (0, iQ.jsxs)(iQ.Fragment, {
          children: [(0, iQ.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: LQ(`${WQ}:locatorKeeperName`)
          }), null !== DQ && LQ(`${WQ}:${DQ.locatorNoticeKey}`, {
            name: DQ.locatorNoticeName
          })]
        }),
        children: [(0, iQ.jsx)("div", {
          className: "BoardTiles",
          children: qQ.locatorEntries.map((QQ => (0, iQ.jsxs)(TQ, {
            icon: (0, iQ.jsx)(Fw, {
              entry: QQ
            }),
            name: QQ.locatorEntryName,
            selected: QQ === oQ,
            locked: !1,
            className: mQ()("LocatorTag", {
              Armed: QQ.locatorEntryArmed
            }),
            onSelect: () => {
              FQ.select(QQ.locatorEntryId)
            },
            children: [(0, iQ.jsx)(BF, {
              entry: QQ
            }), !QQ.locatorEntryOwned && (0, iQ.jsx)(dF, {
              entry: QQ,
              coins: qQ.locatorCoins,
              inTile: !0
            })]
          }, QQ.locatorEntryId)))
        }), (0, iQ.jsx)(ww, {
          view: wQ,
          controller: FQ,
          entry: oQ
        })]
      })
    }

    function qw(QQ) {
      let {
        loadout: FQ,
        codex: wQ,
        locator: LQ
      } = QQ;
      return (0, iQ.jsxs)(iQ.Fragment, {
        children: [(0, iQ.jsx)(VF, {
          controller: FQ
        }), (0, iQ.jsx)(BQ, {
          controller: wQ
        }), (0, iQ.jsx)(Lw, {
          controller: LQ
        })]
      })
    }
    var ow = wQ(38077);
    class Dw {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = QQ, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new ow.b({
          spacingMs: 0,
          now: FQ
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(QQ, FQ) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, FQ(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(QQ), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
    }
    var kw = wQ(38072);
    const vw = new Map([
      ["npc_general", AF],
      ["npc_tentacle_guy", kw]
    ]);

    function mw(QQ) {
      const FQ = vw.get(QQ);
      if (void 0 === FQ) return null;
      const wQ = document.createElement("img");
      return wQ.src = FQ, wQ.alt = "", wQ.draggable = !1, wQ.style.imageRendering = "pixelated", wQ
    }
    const uw = function() {
      let QQ, FQ = !1,
        wQ = null,
        vQ = null;
      const mQ = [],
        uQ = QQ => {
          for (const FQ of mQ) FQ !== QQ && FQ.close();
          (0, kQ.o)()
        },
        HQ = QQ => {
          QQ && (0, kQ.i)()
        },
        bQ = new Dw((FQ => {
          QQ.sendCommand(FQ)
        })),
        YQ = new YF((QQ => {
          DQ.l.GA(bF, QQ, !0)
        }), uQ, HQ, bQ),
        xQ = new aQ((QQ => {
          DQ.l.GA(jQ, QQ, !0)
        }), uQ, HQ),
        AQ = new gF((QQ => {
          DQ.l.GA(nF, QQ, !0)
        }), uQ, HQ, bQ);
      mQ.push(YQ, xQ, AQ);
      return {
        onCreate: FQ => {
          QQ = FQ, wQ = (0, kQ.u)(null, {
            content: (0, LQ.createElement)(qw, {
              loadout: YQ,
              codex: xQ,
              locator: AQ
            }),
            onClose: () => {
              for (const QQ of mQ) QQ.close()
            }
          }), vQ = (0, oQ.g)(mw)
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          "containmentLoadout" === QQ ? YQ.bx(FQ) : "containmentLoadoutClose" === QQ ? YQ.isOpen() && (YQ.close(), (0, kQ.f)()) : "containmentCodex" === QQ ? xQ.bx(FQ) : "containmentLocator" === QQ && AQ.bx(FQ)
        },
        fH: () => {
          FQ || qQ.c.get("loadingOverlayVisible") || (FQ = !0, QQ.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var QQ, FQ;
          null === (QQ = wQ) || void 0 === QQ || QQ(), wQ = null, null === (FQ = vQ) || void 0 === FQ || FQ(), vQ = null;
          for (const wQ of mQ) wQ.dispose();
          bQ.dispose()
        }
      }
    }
  },
  36514: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => zQ,
      G: () => lQ,
      I: () => TQ,
      J: () => jQ,
      b: () => vQ,
      f: () => sQ,
      j: () => kQ,
      l: () => NQ,
      n: () => RQ,
      o: () => CQ,
      r: () => UQ,
      s: () => IQ,
      u: () => WQ,
      y: () => KQ
    });
    var LQ = wQ(27);
    const qQ = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      oQ = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      DQ = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      kQ = oQ.filter((QQ => "docsButton" !== QQ)),
      vQ = DQ.filter((QQ => "aiHelperButton" !== QQ)),
      mQ = "codeEditorTutorials",
      uQ = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      HQ = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let bQ = null,
      YQ = null;
    const xQ = new Set,
      AQ = new Set;
    let tQ = null;
    const eQ = new Set,
      MQ = new Set;

    function GQ() {
      MQ.forEach((QQ => {
        QQ()
      }))
    }

    function pQ() {
      if (!bQ) {
        const QQ = LQ.i.getItem(mQ);
        bQ = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof QQ && null !== QQ ? QQ : {}
        }
      }
      return bQ
    }

    function cQ(QQ) {
      const FQ = pQ();
      FQ[QQ] || (bQ = {
        ...FQ,
        [QQ]: !0
      }, LQ.i.setItem(mQ, bQ))
    }

    function CQ(QQ) {
      return "docsOverview" === QQ ? oQ : "aiHelperOverview" === QQ ? DQ : YQ ? qQ[YQ] : []
    }

    function SQ(QQ) {
      return ("worldCodeButton" !== QQ || !pQ().worldCodeIntroShown) && !eQ.has(QQ)
    }

    function iQ(QQ) {
      var FQ;
      return (null === (FQ = tQ) || void 0 === FQ ? void 0 : FQ.name) === QQ ? tQ.stepsDone : xQ
    }

    function WQ(QQ, FQ) {
      if (! function(QQ) {
          return tQ ? tQ.name === QQ : "welcome" === QQ
        }(QQ) || !SQ(FQ) || iQ(QQ).has(FQ)) return !1;
      if (tQ) return !0;
      const wQ = uQ[FQ];
      return wQ ? !pQ()[wQ] || AQ.has(FQ) : !pQ()[HQ[QQ]]
    }

    function RQ(QQ) {
      var FQ;
      return null !== (FQ = CQ(QQ).find((FQ => WQ(QQ, FQ)))) && void 0 !== FQ ? FQ : null
    }

    function OQ(QQ) {
      var FQ;
      cQ(HQ[QQ]), (null === (FQ = tQ) || void 0 === FQ ? void 0 : FQ.name) === QQ && (tQ = null)
    }

    function sQ(QQ) {
      const FQ = (tQ ? [tQ.name] : ["welcome", "docsOverview"]).find((FQ => RQ(FQ) === QQ));
      if (!FQ) return;
      iQ(FQ).add(QQ);
      const wQ = uQ[QQ];
      wQ && (cQ(wQ), tQ || AQ.add(QQ)), null === RQ(FQ) && OQ(FQ), GQ()
    }

    function rQ(QQ, FQ) {
      const wQ = CQ(QQ),
        LQ = iQ(QQ);
      for (let qQ = wQ.indexOf(FQ) - 1; qQ >= 0; qQ--)
        if (LQ.has(wQ[qQ]) && SQ(wQ[qQ])) return wQ[qQ];
      return null
    }

    function IQ(QQ, FQ) {
      return null !== rQ(QQ, FQ)
    }

    function UQ(QQ, FQ) {
      const wQ = rQ(QQ, FQ);
      wQ && (iQ(QQ).delete(wQ), GQ())
    }

    function NQ(QQ) {
      OQ(QQ), "welcome" === QQ && CQ("welcome").forEach((QQ => {
        const FQ = uQ[QQ];
        FQ && cQ(FQ)
      })), GQ()
    }

    function TQ(QQ) {
      tQ = {
        name: QQ,
        stepsDone: new Set
      }, GQ()
    }

    function KQ() {
      (tQ || 0 !== xQ.size || 0 !== AQ.size) && (tQ = null, xQ.clear(), AQ.clear(), GQ())
    }

    function zQ(QQ, FQ) {
      const wQ = FQ ? QQ : YQ === QQ ? null : YQ;
      wQ !== YQ && (YQ = wQ, GQ())
    }

    function lQ(QQ, FQ) {
      eQ.has(QQ) === FQ && (FQ ? eQ.delete(QQ) : eQ.add(QQ), GQ())
    }

    function jQ(QQ) {
      return MQ.add(QQ), () => {
        MQ.delete(QQ)
      }
    }
  },
  38818: (QQ, FQ, wQ) => {
    var LQ = {
      "./breach-zero-uncaught.webp": 38824,
      "./breach-zero.webp": 38829,
      "./brood-father-uncaught.webp": 38833,
      "./brood-father.webp": 38836,
      "./carousel-uncaught.webp": 38843,
      "./carousel.webp": 38851,
      "./deadlock-uncaught.webp": 38857,
      "./deadlock.webp": 38860,
      "./frost-revenant-uncaught.webp": 38866,
      "./frost-revenant.webp": 38872,
      "./hollow-choir-uncaught.webp": 38874,
      "./hollow-choir.webp": 38883,
      "./magma-warden-uncaught.webp": 38885,
      "./magma-warden.webp": 38893,
      "./patient-zero-uncaught.webp": 38900,
      "./patient-zero.webp": 38902,
      "./siege-engine-uncaught.webp": 38911,
      "./siege-engine.webp": 38917,
      "./warp-stalker-uncaught.webp": 38920,
      "./warp-stalker.webp": 38922
    };

    function qQ(QQ) {
      var FQ = oQ(QQ);
      return wQ(FQ)
    }

    function oQ(QQ) {
      if (!wQ.o(LQ, QQ)) {
        var FQ = new Error("Cannot find module '" + QQ + "'");
        throw FQ.code = "MODULE_NOT_FOUND", FQ
      }
      return LQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(LQ)
    }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 38818
  },
  38824: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38829: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38833: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38836: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38843: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38851: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38857: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38860: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38866: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38872: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38874: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38883: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38885: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38893: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38900: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38902: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38911: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38917: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38920: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38922: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38072: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);