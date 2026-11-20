export const id = 14;
export const ids = [14];
export const modules = {
  36425: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => wU,
      d: () => IU,
      h: () => JU,
      j: () => CU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(74),
      TU = gU(1347),
      qU = gU(1412),
      KU = gU(1344),
      cU = gU(1283),
      GU = gU(1181),
      jU = gU(36427),
      uU = gU(1090);

    function CU(UU) {
      const [RU, gU] = (0, EU.useState)((() => (0, jU.p)(UU)));
      return (0, EU.useEffect)((() => (gU((0, jU.p)(UU)), (0, jU.N)((() => {
        gU((0, jU.p)(UU))
      })))), [UU]), RU
    }

    function hU(UU, RU) {
      "function" === typeof UU ? UU(RU) : UU && (UU.current = RU)
    }

    function QU(UU) {
      let {
        tutorial: RU,
        step: gU,
        enabled: tU = !0
      } = UU;
      const pU = CU(RU);
      return tU && pU === gU
    }

    function eU(UU, RU) {
      const gU = (0, jU.t)(UU),
        tU = gU.indexOf(RU);
      return !gU.slice(tU + 1).some((RU => (0, jU.C)(UU, RU)))
    }

    function WU(UU, RU, gU, tU) {
      let {
        tutorial: pU,
        step: EU,
        waitForClick: PU = !1,
        onPrevious: TU
      } = UU;
      const qU = RU && (0, jU.y)(pU, EU),
        KU = RU && !eU(pU, EU),
        GU = PU ? tU : gU;
      let uU = null;
      qU ? uU = () => {
        null === TU || void 0 === TU || TU(), (0, jU.v)(pU, EU)
      } : KU && (uU = () => {
        (0, jU.m)(pU)
      }), (0, cU.q)("popup", null !== GU && void 0 !== GU ? GU : gU, uU, RU && null !== GU, null, qU ? void 0 : "controller:menusSkipTutorial")
    }

    function fU(UU) {
      let {
        tutorial: RU,
        step: gU,
        text: tU,
        waitForClick: pU = !1,
        onPrevious: EU
      } = UU;
      const {
        t: PU
      } = (0, GU.B)(), TU = eU(RU, gU);
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(0, uU.jsx)("div", {
          className: "TutorialStepText",
          children: tU
        }), (0, uU.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, jU.y)(RU, gU) && (0, uU.jsx)(qU.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === EU || void 0 === EU || EU(), (0, jU.v)(RU, gU)
            },
            children: PU("tutorial:back")
          }), !pU && (0, uU.jsx)(qU.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, jU.g)(gU)
            },
            padDefaultFocus: !0,
            children: PU(TU ? "tutorial:done" : "tutorial:next")
          }), !TU && (0, uU.jsx)(qU.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, jU.m)(RU)
            },
            children: PU("tutorial:skip")
          })]
        })]
      })
    }
    const xU = 6;

    function mU(UU) {
      let {
        rect: RU,
        margin: gU
      } = UU;
      const tU = Math.max(0, RU.top - gU),
        pU = RU.bottom + gU,
        EU = Math.max(0, RU.left - gU),
        PU = RU.right + gU;
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: tU
          }
        }), (0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pU,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tU,
            left: 0,
            width: EU,
            height: pU - tU
          }
        }), (0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tU,
            left: PU,
            right: 0,
            height: pU - tU
          }
        })]
      })
    }

    function IU(UU) {
      let {
        target: RU,
        placement: gU,
        boxRef: tU,
        className: qU,
        spotlightMargin: cU = xU,
        children: GU
      } = UU;
      const {
        getArrowProps: jU,
        getTooltipProps: CU,
        setTooltipRef: hU,
        setTriggerRef: QU
      } = (0, TU.e)({
        placement: gU,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, cU]
      });
      (0, EU.useLayoutEffect)((() => {
        QU(RU)
      }), [RU, QU]);
      const eU = function(UU, RU) {
        const [gU, tU] = (0, EU.useState)(null);
        return (0, EU.useEffect)((() => {
          if (!RU || !UU) return void tU(null);
          let gU = 0,
            pU = null;
          const EU = () => {
            const RU = UU.getBoundingClientRect();
            pU && RU.left === pU.left && RU.top === pU.top && RU.width === pU.width && RU.height === pU.height || (pU = RU, tU(RU)), gU = requestAnimationFrame(EU)
          };
          return EU(), () => {
            cancelAnimationFrame(gU)
          }
        }), [UU, RU]), gU
      }(RU, !0);
      (0, EU.useEffect)((() => {
        null === RU || void 0 === RU || RU.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [RU]);
      const WU = (0, EU.useCallback)((UU => {
        hU(UU), tU && (tU.current = UU)
      }), [hU, tU]);
      return (0, PU.createPortal)((0, uU.jsxs)(uU.Fragment, {
        children: [eU && (0, uU.jsx)(mU, {
          rect: eU,
          margin: cU
        }), (0, uU.jsxs)("div", {
          ref: WU,
          ...CU({
            className: pU()("tooltip-container SmallTextLight TutorialStep", qU)
          }),
          children: [GU, (0, uU.jsx)("div", {
            ...jU({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, KU.k)())
    }
    const JU = (0, EU.forwardRef)((function(UU, RU) {
      let {
        placement: gU = "right",
        children: tU,
        ...pU
      } = UU;
      const PU = QU(pU),
        TU = (0, EU.useRef)(null),
        qU = (0, EU.useRef)(null);
      WU(pU, PU, TU, qU);
      const [KU, cU] = (0, EU.useState)(null), GU = tU.ref, jU = (0, EU.useCallback)((UU => {
        qU.current = UU, cU(UU), hU(RU, UU), hU(GU, UU)
      }), [RU, GU]);
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(0, EU.cloneElement)(tU, {
          ref: jU
        }), PU && (0, uU.jsx)(IU, {
          target: KU,
          placement: gU,
          boxRef: TU,
          children: (0, uU.jsx)(fU, {
            ...pU
          })
        })]
      })
    }));

    function wU(UU) {
      const RU = QU(UU),
        gU = (0, EU.useRef)(null);
      return WU(UU, RU, gU, null), RU ? (0, PU.createPortal)((0, uU.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, uU.jsx)("div", {
          ref: gU,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, uU.jsx)(fU, {
            ...UU
          })
        })
      }), (0, KU.k)()) : null
    }
  },
  38092: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    const tU = 4,
      pU = 12e3,
      EU = 1e3;
    class PU {
      constructor() {
        let {
          limit: UU = tU,
          windowMs: RU = pU,
          spacingMs: gU = EU,
          now: PU = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = UU, this.windowMs = RU, this.spacingMs = gU, this.now = PU
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const UU of this.priority) UU.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const UU = this.now();
        this.sent.push(UU), this.lastSentAt = UU, this.schedule(), this.notify()
      }
      addPriority(UU) {
        return this.priority.add(UU), () => {
          this.priority.delete(UU)
        }
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const UU of this.priority)
          if (UU.waiting()) return !0;
        return !1
      }
      prune() {
        const UU = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= UU;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const UU = this.now(),
          RU = this.lastSentAt + this.spacingMs,
          gU = Math.min(RU > UU ? RU : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        gU !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, gU - UU)))
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  38076: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor(UU, RU, gU) {
        this.yh = UU, this.beforeOpen = RU, this.afterClose = gU, this.open = !1, this.pC = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.pC && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(UU) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(UU)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.pC = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.pC || (this.snapshot = this.buildSnapshot(), this.yh(this.snapshot))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  38824: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => cg
    });
    var tU = gU(56);
    var pU = gU(21),
      EU = gU(1786),
      PU = gU(24),
      TU = gU(36191),
      qU = gU(1037),
      KU = gU.n(qU),
      cU = gU(1410),
      GU = gU(1181),
      jU = gU(4195),
      uU = gU(1328),
      CU = gU(1412),
      hU = gU(1790),
      QU = gU(1344),
      eU = gU(1777),
      WU = gU(1834),
      fU = gU(201);
    const xU = gU(38831),
      mU = Object.fromEntries(xU.keys().map((UU => [UU.replace(/^\.\/(.*)\.webp$/, "$1"), xU(UU)]))),
      IU = new Set;

    function JU(UU, RU) {
      const gU = RU ? UU : `${UU}-uncaught`,
        tU = (0, fU.b)(mU, gU);
      return void 0 !== tU || IU.has(gU) || (IU.add(gU), console.warn(`Containment Breach has no mugshot ${gU}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), tU
    }
    var wU = gU(1090);
    const nU = "containmentBreach",
      bU = "Gold Coin";

    function oU(UU) {
      let {
        open: RU,
        onDismiss: gU,
        title: tU,
        className: pU,
        decor: EU,
        headerExtra: PU,
        status: TU,
        statusRefused: qU = !1,
        children: cU
      } = UU;
      const GU = `${pU}Title`;
      return (0, wU.jsx)(jU.d, {
        show: RU,
        close: gU,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, wU.jsxs)("section", {
          className: KU()("ContainmentBoardPanel", pU),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": GU,
          children: [EU && (0, wU.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: EU
          }), (0, wU.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, wU.jsx)("h2", {
              id: GU,
              className: "VisuallyHidden",
              children: tU
            }), PU, (0, wU.jsx)(CU.h, {
              onClick: gU
            })]
          }), (0, wU.jsx)("div", {
            className: "BoardBody",
            children: cU
          }), void 0 !== TU && (0, wU.jsx)("footer", {
            className: KU()("BoardStatus", {
              Refused: qU
            }),
            children: TU
          })]
        })
      })
    }

    function ZU(UU) {
      let {
        itemName: RU
      } = UU;
      return (0, wU.jsx)(hU.c, {
        itemName: RU,
        amount: 0
      })
    }

    function aU(UU) {
      let {
        anomalyId: RU,
        caught: gU
      } = UU;
      const pU = (0, tU.useRef)(null);
      return (0, uU.b)(pU, !gU), (0, wU.jsx)("span", {
        ref: pU,
        className: KU()("BoardMugshot", {
          Uncaught: !gU
        }),
        children: (0, wU.jsx)("img", {
          src: JU(RU, gU),
          alt: "",
          draggable: !1
        })
      })
    }

    function YU(UU) {
      let {
        itemName: RU,
        amount: gU,
        WT: tU,
        inTile: pU = !1
      } = UU;
      return (0, wU.jsx)(QU.g, {
        delayShow: 200,
        hoverOnly: pU,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, wU.jsx)(VU, {
          itemName: RU,
          amount: gU,
          WT: tU
        }),
        children: (0, wU.jsxs)("span", {
          className: KU()("BoardChip", {
            Short: void 0 !== tU && tU < gU
          }),
          children: [(0, wU.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, wU.jsx)(ZU, {
              itemName: RU
            })
          }), gU.toLocaleString()]
        })
      })
    }
    const BU = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function VU(UU) {
      var RU;
      let {
        itemName: gU,
        amount: tU,
        WT: pU
      } = UU;
      const {
        t: EU
      } = (0, GU.B)(), PU = (0, WU.h)("itemInfo", (UU => UU[gU])), {
        lore: TU,
        droppedBy: qU
      } = function(UU) {
        if ("string" !== typeof UU) return {
          lore: UU,
          droppedBy: null
        };
        const RU = BU.exec(UU);
        return null === RU ? {
          lore: UU,
          droppedBy: null
        } : {
          lore: "" === RU[1] ? void 0 : RU[1],
          droppedBy: RU[2]
        }
      }(null === PU || void 0 === PU ? void 0 : PU.description);
      return (0, wU.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, wU.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, wU.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, wU.jsx)(ZU, {
              itemName: gU
            })
          }), (0, wU.jsx)(eU.e, {
            text: null !== (RU = null === PU || void 0 === PU ? void 0 : PU.displayName) && void 0 !== RU ? RU : gU,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== TU || null !== qU) && (0, wU.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== TU && (0, wU.jsx)(eU.e, {
            text: TU,
            className: "BoardChipTooltipDescription"
          }), null !== qU && (0, wU.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, wU.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: EU(`${nU}:chipDroppedBy`)
            }), qU]
          })]
        }), void 0 !== pU && (0, wU.jsxs)("div", {
          className: KU()("BoardChipTooltipHeld", {
            Short: pU < tU
          }),
          children: [(0, wU.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: EU(`${nU}:chipYouHave`)
          }), (0, wU.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, wU.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: pU.toLocaleString()
            }), ` / ${tU.toLocaleString()}`]
          }), (0, wU.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, wU.jsx)("span", {
              style: {
                width: (tU > 0 ? 100 * Math.min(1, pU / tU) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function rU(UU) {
      let {
        icon: RU,
        name: gU,
        selected: tU,
        locked: pU,
        className: EU,
        buttonRef: PU,
        onSelect: TU,
        children: qU
      } = UU;
      return (0, wU.jsxs)("button", {
        ref: PU,
        type: "button",
        className: KU()("BoardTile", EU, {
          Selected: tU,
          Locked: pU
        }),
        onClick: TU,
        children: [(0, wU.jsx)("span", {
          className: "BoardTileIcon",
          children: RU
        }), (0, wU.jsx)("span", {
          className: "BoardTileName",
          children: gU
        }), qU]
      })
    }

    function XU(UU) {
      let {
        icon: RU,
        name: gU,
        children: tU
      } = UU;
      return (0, wU.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, wU.jsx)("span", {
          className: "BoardDetailIcon",
          children: RU
        }), (0, wU.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, wU.jsx)("h3", {
            children: gU
          }), (0, wU.jsx)("span", {
            className: "BoardDetailStatus",
            children: tU
          })]
        })]
      })
    }

    function vU(UU) {
      let {
        coins: RU,
        children: gU
      } = UU;
      return (0, wU.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, wU.jsx)(YU, {
          itemName: bU,
          amount: RU
        }), gU]
      })
    }
    var dU = gU(38076);
    const HU = "containmentCodexView";
    class SU extends dU.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = UU => {
          this.selectedId = UU, this.emit()
        }
      }
      qC(UU) {
        this.entries = UU.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const sU = {
        codexAnyDifficulty: `${nU}:codexNeedsAny`,
        codexNormalOnly: `${nU}:codexNeedsNormal`,
        codexHardOnly: `${nU}:codexNeedsHard`
      },
      yU = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      kU = {
        codexContained: `${nU}:codexContainedBadge`,
        codexEncountered: `${nU}:codexEncounteredBadge`,
        codexUnidentified: `${nU}:codexUnidentifiedBadge`
      },
      FU = ["94%", "81%", "88%", "46%", "72%"];

    function iU(UU) {
      let {
        entry: RU
      } = UU;
      const {
        t: gU
      } = (0, GU.B)();
      return (0, wU.jsx)("span", {
        className: KU()("BoardBadge", yU[RU.codexEntryState]),
        children: gU(kU[RU.codexEntryState])
      })
    }

    function AU(UU) {
      const {
        t: RU
      } = (0, GU.B)();
      return "codexUnidentified" === UU.codexEntryState ? RU(`${nU}:codexUnidentifiedName`) : UU.codexEntryName
    }

    function zU(UU) {
      let {
        entry: RU
      } = UU;
      return "codexUnidentified" === RU.codexEntryState ? (0, wU.jsx)(ZU, {
        itemName: "Book"
      }) : (0, wU.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, wU.jsx)(aU, {
          anomalyId: RU.codexEntryId,
          caught: "codexContained" === RU.codexEntryState
        }), (0, wU.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function MU(UU) {
      let {
        entry: RU,
        selected: gU,
        onSelect: tU
      } = UU;
      const pU = "codexUnidentified" === RU.codexEntryState;
      return (0, wU.jsxs)(rU, {
        icon: (0, wU.jsx)(zU, {
          entry: RU
        }),
        name: AU(RU),
        selected: gU,
        locked: pU,
        className: KU()("CodexFolder", yU[RU.codexEntryState]),
        onSelect: () => {
          tU(RU.codexEntryId)
        },
        children: [!pU && (0, wU.jsx)(iU, {
          entry: RU
        }), pU && (0, wU.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function DU(UU) {
      let {
        count: RU
      } = UU;
      const gU = [];
      for (let tU = Math.min(RU, 25); tU > 0; tU -= 5) gU.push(Math.min(tU, 5));
      return (0, wU.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: gU.map(((UU, RU) => (0, wU.jsx)("span", {
          className: KU()("CodexTallyGroup", {
            Gate: 5 === UU
          }),
          children: Array.from({
            length: Math.min(UU, 4)
          }, ((UU, RU) => (0, wU.jsx)("span", {
            className: "CodexTallyMark"
          }, RU)))
        }, RU)))
      })
    }

    function LU(UU) {
      let {
        contained: RU,
        total: gU
      } = UU;
      const {
        t: tU
      } = (0, GU.B)();
      return (0, wU.jsxs)("div", {
        className: "CodexProgress",
        children: [tU(`${nU}:codexProgress`, {
          contained: String(RU),
          total: String(gU)
        }), (0, wU.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, wU.jsx)("span", {
            style: {
              width: RU / gU * 100 + "%"
            }
          })
        })]
      })
    }

    function NU(UU) {
      let {
        entry: RU,
        fileNumber: gU
      } = UU;
      const {
        t: tU
      } = (0, GU.B)(), pU = "codexContained" === RU.codexEntryState;
      return (0, wU.jsx)("section", {
        className: "BoardDetail",
        children: (0, wU.jsxs)("article", {
          className: KU()("CodexDossier", yU[RU.codexEntryState]),
          children: [(0, wU.jsx)("span", {
            className: "CodexFileNumber",
            children: tU(`${nU}:codexFileNumber`, {
              number: String(gU).padStart(3, "0")
            })
          }), (0, wU.jsx)(XU, {
            icon: (0, wU.jsx)(zU, {
              entry: RU
            }),
            name: AU(RU),
            children: (0, wU.jsx)(iU, {
              entry: RU
            })
          }), pU && (0, wU.jsxs)(wU.Fragment, {
            children: [(0, wU.jsx)("p", {
              className: "BoardDescription",
              children: RU.codexEntryLore
            }), (0, wU.jsxs)("p", {
              className: "CodexTally",
              children: [tU(`${nU}:codexContainments`, {
                count: String(RU.codexEntryContainedCount)
              }), (0, wU.jsx)(DU, {
                count: RU.codexEntryContainedCount
              })]
            }), (0, wU.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: tU(`${nU}:codexContainedBadge`)
            })]
          }), !pU && (0, wU.jsxs)(wU.Fragment, {
            children: [(0, wU.jsxs)("div", {
              className: "CodexRedaction",
              children: [FU.map((UU => (0, wU.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: UU
                }
              }, UU))), (0, wU.jsx)("p", {
                className: "CodexRedacted",
                children: tU(`${nU}:codexRedacted`)
              })]
            }), "" !== RU.codexEntryHint && (0, wU.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, wU.jsx)("h4", {
                children: tU(`${nU}:codexHintLabel`)
              }), (0, wU.jsx)("p", {
                children: RU.codexEntryHint
              })]
            }), (0, wU.jsx)("p", {
              className: "CodexClearance",
              children: tU(sU[RU.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function lU(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, cU.h)(HU, RU.getSnapshot()),
        {
          t: tU
        } = (0, GU.B)();
      if (0 === gU.entries.length) return null;
      const pU = gU.entries.find((UU => UU.codexEntryId === gU.selectedId)),
        EU = gU.entries.filter((UU => "codexContained" === UU.codexEntryState)).length,
        PU = gU.entries.map((UU => UU.codexEntryId)).sort().indexOf(pU.codexEntryId) + 1;
      return (0, wU.jsxs)(oU, {
        open: gU.open,
        onDismiss: RU.dismiss,
        title: tU(`${nU}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, wU.jsx)(LU, {
          contained: EU,
          total: gU.entries.length
        }),
        children: [(0, wU.jsx)("div", {
          className: "BoardTiles",
          children: gU.entries.map((UU => (0, wU.jsx)(MU, {
            entry: UU,
            selected: UU === pU,
            onSelect: RU.select
          }, UU.codexEntryId)))
        }), (0, wU.jsx)(NU, {
          entry: pU,
          fileNumber: PU
        })]
      })
    }
    var OU = gU(311);
    class UR extends dU.b {
      constructor(UU, RU, gU, tU, pU, EU) {
        super(UU, RU, gU), this.pacer = tU, this.command = pU, this.predict = EU, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = UU => {
          this.selectedId = UU, this.emit()
        }, this.act = (UU, RU) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${UU} ${RU}`, this.rollBack)) return;
          const gU = this.predict(this.board, UU, RU);
          null !== gU && (this.board = gU.board, this.notice = gU.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = tU.subscribe((() => {
          this.emit()
        }))
      }
      qC(UU) {
        const RU = this.messageOpens(UU);
        if (RU && this.open) return this.board === this.confirmed && (this.board = UU), this.confirmed = UU, void this.emit();
        if (this.board = UU, this.confirmed = UU, this.pacer.onReply(), RU) return this.notice = null, this.selectedId = this.openingSelection(UU), void this.show();
        const gU = this.messageNotice(UU);
        null !== gU && (this.notice = gU), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function RR(UU, RU) {
      return UU.loadoutCoins >= RU.loadoutCostCoins && RU.loadoutCostParts.every((RU => function(UU, RU) {
        return gR(UU, RU).loadoutHeldPartAmount
      }(UU, RU.loadoutPartCurrency) >= RU.loadoutPartAmount))
    }

    function gR(UU, RU) {
      return UU.loadoutHeldParts.find((UU => UU.loadoutHeldPartCurrency === RU))
    }

    function tR(UU, RU) {
      return UU.loadoutSlots.find((UU => UU.loadoutSlotKind === RU))
    }

    function pR(UU) {
      return UU.loadoutPerks.filter((UU => UU.loadoutPerkEquipped)).length >= UU.loadoutMaxPerks
    }

    function ER(UU, RU, gU) {
      for (const pU of UU.loadoutSlots) {
        const tU = pU.loadoutSlotOptions.find((UU => UU.loadoutOptionId === gU));
        if (tU) return "loadoutArmour" === pU.loadoutSlotKind ? TR(UU, pU, tU, RU) : PR(UU, pU, tU, RU)
      }
      const tU = UU.loadoutPerks.find((UU => UU.loadoutPerkId === gU));
      return tU ? function(UU, RU, gU) {
        const tU = RU.loadoutPerkOwned,
          pU = RU.loadoutPerkEquipped,
          EU = RU.loadoutPerkName,
          PU = pR(UU);
        if ("loadoutUnlock" === gU) {
          if (tU || !RR(UU, RU.loadoutPerkCost)) return null;
          const gU = {
            ...RU,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !PU
          };
          return {
            board: KR(cR(UU, RU.loadoutPerkCost), gU),
            notice: GR(PU ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", EU)
          }
        }
        if ("loadoutUpgrade" === gU || !tU || "loadoutEquip" === gU === pU || !pU && PU) return null;
        return {
          board: KR(UU, {
            ...RU,
            loadoutPerkEquipped: !pU
          }),
          notice: GR(pU ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", EU)
        }
      }(UU, tU, RU) : null
    }

    function PR(UU, RU, gU, tU) {
      const pU = gU.loadoutOptionOwnedTier,
        EU = gU.loadoutOptionName;
      if ("loadoutEquip" === tU) return 0 === pU ? null : {
        board: qR(UU, RU, gU.loadoutOptionId, null),
        notice: GR("loadoutNoticeEquipped", EU)
      };
      const PU = "loadoutUnlock" === tU;
      if (PU && 0 !== pU || "loadoutUpgrade" === tU && (0 === pU || pU >= gU.loadoutOptionTiers.length) || "loadoutUnequip" === tU) return null;
      const TU = gU.loadoutOptionTiers[pU].loadoutTierCost;
      if (!RR(UU, TU)) return null;
      const qU = {
          ...gU,
          loadoutOptionOwnedTier: pU + 1
        },
        KU = PU ? gU.loadoutOptionId : RU.loadoutSlotEquippedId;
      return {
        board: qR(cR(UU, TU), RU, KU, qU),
        notice: PU ? GR("loadoutNoticeUnlocked", EU) : GR("loadoutNoticeUpgraded", EU, pU + 1)
      }
    }

    function TR(UU, RU, gU, tU) {
      const pU = gU.loadoutOptionOwnedTier > 0,
        EU = gU.loadoutOptionName;
      if ("loadoutEquip" === tU && pU) return {
        board: qR(UU, RU, gU.loadoutOptionId, null),
        notice: GR("loadoutNoticeEquipped", EU)
      };
      const PU = gU.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== tU || pU || !RR(UU, PU) ? null : {
        board: qR(cR(UU, PU), RU, gU.loadoutOptionId, {
          ...gU,
          loadoutOptionOwnedTier: 1
        }),
        notice: GR("loadoutNoticeUnlocked", EU)
      }
    }

    function qR(UU, RU, gU, tU) {
      const pU = {
        ...RU,
        loadoutSlotEquippedId: gU,
        loadoutSlotOptions: RU.loadoutSlotOptions.map((UU => null !== tU && UU.loadoutOptionId === tU.loadoutOptionId ? tU : UU))
      };
      return {
        ...UU,
        loadoutSlots: UU.loadoutSlots.map((UU => UU === RU ? pU : UU))
      }
    }

    function KR(UU, RU) {
      return {
        ...UU,
        loadoutPerks: UU.loadoutPerks.map((UU => UU.loadoutPerkId === RU.loadoutPerkId ? RU : UU))
      }
    }

    function cR(UU, RU) {
      return {
        ...UU,
        loadoutCoins: UU.loadoutCoins - RU.loadoutCostCoins,
        loadoutHeldParts: UU.loadoutHeldParts.map((UU => {
          const gU = RU.loadoutCostParts.find((RU => RU.loadoutPartCurrency === UU.loadoutHeldPartCurrency));
          return gU ? {
            ...UU,
            loadoutHeldPartAmount: UU.loadoutHeldPartAmount - gU.loadoutPartAmount
          } : UU
        }))
      }
    }

    function GR(UU, RU) {
      return {
        loadoutNoticeKey: UU,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: RU,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const jR = "containmentLoadoutView";
    class uR extends UR {
      constructor(UU, RU, gU, tU) {
        super(UU, RU, gU, tU, "loadout", ER), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = UU => {
          this.slot = UU, this.selectedId = CR(this.board, UU), this.emit()
        }
      }
      messageOpens(UU) {
        return UU.loadoutMessageOpens
      }
      messageNotice(UU) {
        return UU.loadoutNotice
      }
      openingSelection(UU) {
        return CR(UU, this.slot)
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

    function CR(UU, RU) {
      if ("loadoutPerks" === RU) {
        var gU;
        const RU = UU.loadoutPerks;
        return (null !== (gU = RU.find((UU => UU.loadoutPerkEquipped))) && void 0 !== gU ? gU : RU[0]).loadoutPerkId
      }
      return tR(UU, RU).loadoutSlotEquippedId
    }
    const hR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var QR = gU(36425),
      eR = gU(1283);
    const WR = {
        loadoutPrimary: `${nU}:loadoutSlotPrimary`,
        loadoutSecondary: `${nU}:loadoutSlotSecondary`,
        loadoutOffensive: `${nU}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${nU}:loadoutSlotSelfHelp`,
        loadoutArmour: `${nU}:loadoutSlotArmour`,
        loadoutPerks: `${nU}:loadoutSlotPerks`
      },
      fR = {
        section: "right",
        Hj: "bottom",
        act: "top"
      },
      xR = (0, tU.createContext)({
        step: null,
        targetRef: () => {}
      });

    function mR() {
      const {
        step: UU,
        targetRef: RU
      } = (0, tU.useContext)(xR);
      return (gU, tU) => (null === UU || void 0 === UU ? void 0 : UU.kind) === gU && UU.id === tU ? RU : void 0
    }

    function IR(UU, RU) {
      const gU = RU.loadoutTargetId;
      if ("loadoutPerks" === RU.loadoutTargetSection) {
        const RU = UU.loadoutPerks.find((UU => UU.loadoutPerkId === gU));
        return {
          name: RU.loadoutPerkName,
          owned: RU.loadoutPerkOwned,
          equipped: RU.loadoutPerkEquipped
        }
      }
      const tU = tR(UU, RU.loadoutTargetSection),
        pU = tU.loadoutSlotOptions.find((UU => UU.loadoutOptionId === gU));
      return {
        name: pU.loadoutOptionName,
        owned: pU.loadoutOptionOwnedTier > 0,
        equipped: tU.loadoutSlotEquippedId === gU
      }
    }

    function JR(UU, RU, gU, tU) {
      const [pU, EU] = UU(`${nU}:${RU}`, {
        [gU]: "\x01"
      }).split("\x01");
      return (0, wU.jsxs)(wU.Fragment, {
        children: [pU, (0, wU.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: tU
        }), EU]
      })
    }

    function wR(UU) {
      let {
        view: RU,
        onDismiss: gU,
        children: pU
      } = UU;
      const {
        t: EU
      } = (0, GU.B)(), PU = RU.loadout, TU = RU.open ? PU.loadoutWalkthrough.map((UU => ({
        target: UU,
        info: IR(PU, UU)
      }))).find((UU => {
        let {
          info: RU
        } = UU;
        return !RU.equipped
      })) : void 0;
      let qU = null,
        KU = null;
      if (void 0 !== TU) {
        const {
          target: UU,
          info: gU
        } = TU;
        RU.slot !== UU.loadoutTargetSection ? (qU = {
          kind: "section",
          id: UU.loadoutTargetSection
        }, KU = JR(EU, "loadoutWalkthroughSection", "section", EU(WR[UU.loadoutTargetSection]))) : RU.selectedId !== UU.loadoutTargetId ? (qU = {
          kind: "Hj",
          id: UU.loadoutTargetId
        }, KU = JR(EU, "loadoutWalkthroughPick", "name", gU.name)) : (qU = {
          kind: "act",
          id: UU.loadoutTargetId
        }, KU = JR(EU, gU.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", gU.name))
      }
      const cU = null === qU ? null : function(UU) {
          return `${UU.kind}:${UU.id}`
        }(qU),
        [jU, uU] = (0, tU.useState)(null),
        CU = (0, tU.useCallback)((UU => {
          uU((RU => null !== UU ? {
            key: cU,
            node: UU
          } : (null === RU || void 0 === RU ? void 0 : RU.key) === cU ? null : RU))
        }), [cU]),
        hU = null !== cU && (null === jU || void 0 === jU ? void 0 : jU.key) === cU ? jU.node : null;
      return (0, wU.jsxs)(xR.Provider, {
        value: {
          step: qU,
          targetRef: CU
        },
        children: [pU, null !== qU && null !== hU && (0, wU.jsx)(nR, {
          target: hU,
          placement: fR[qU.kind],
          onDismiss: gU,
          children: KU
        }, cU)]
      })
    }

    function nR(UU) {
      let {
        target: RU,
        placement: gU,
        onDismiss: pU,
        children: EU
      } = UU;
      const {
        t: PU
      } = (0, GU.B)(), TU = (0, tU.useRef)(RU);
      return TU.current = RU, (0, eR.q)("popup", TU, pU), (0, wU.jsxs)(QR.d, {
        target: RU,
        placement: gU,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, wU.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, wU.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: hR,
            alt: "",
            draggable: !1
          }), (0, wU.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: PU(`${nU}:operatorName`)
          }), (0, wU.jsx)(CU.h, {
            onClick: pU,
            ariaLabel: PU(`${nU}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, wU.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: EU
        })]
      })
    }
    const bR = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function oR(UU) {
      let {
        cost: RU,
        loadout: gU
      } = UU;
      const {
        t: tU
      } = (0, GU.B)();
      return RU.loadoutCostCoins <= 0 && 0 === RU.loadoutCostParts.length ? (0, wU.jsx)("span", {
        className: "LoadoutCost",
        children: tU(`${nU}:loadoutFree`)
      }) : (0, wU.jsxs)("span", {
        className: "LoadoutCost",
        children: [RU.loadoutCostCoins > 0 && (0, wU.jsx)(YU, {
          itemName: bU,
          amount: RU.loadoutCostCoins,
          WT: gU.loadoutCoins
        }), RU.loadoutCostParts.map((UU => {
          const RU = gR(gU, UU.loadoutPartCurrency);
          return (0, wU.jsx)(YU, {
            itemName: RU.loadoutHeldPartItem,
            amount: UU.loadoutPartAmount,
            WT: RU.loadoutHeldPartAmount
          }, UU.loadoutPartCurrency)
        }))]
      })
    }
    const ZR = {
      loadoutStatFireRate: `${nU}:loadoutUnitPerMinute`,
      loadoutStatReload: `${nU}:loadoutUnitSeconds`,
      loadoutStatResupply: `${nU}:loadoutUnitSeconds`
    };

    function aR(UU) {
      return "loadoutStatPotency" === UU.loadoutStatKind ? (0, OU.V)(UU.loadoutStatValue) : String(UU.loadoutStatValue)
    }

    function YR(UU) {
      var RU;
      let {
        option: gU
      } = UU;
      const {
        t: tU
      } = (0, GU.B)(), pU = gU.loadoutOptionTiers, EU = null === (RU = pU[0]) || void 0 === RU ? void 0 : RU.loadoutTierStats.map((UU => UU.loadoutStatKind));
      if (!EU || 0 === EU.length) return null;
      const PU = gU.loadoutOptionOwnedTier,
        TU = (UU, RU) => {
          var gU;
          return null === (gU = pU[UU]) || void 0 === gU ? void 0 : gU.loadoutTierStats.find((UU => UU.loadoutStatKind === RU))
        };
      return (0, wU.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, wU.jsx)("thead", {
          children: (0, wU.jsxs)("tr", {
            children: [(0, wU.jsx)("th", {}), pU.map(((UU, RU) => (0, wU.jsx)("th", {
              className: KU()({
                Current: RU + 1 === PU,
                Next: RU === PU
              }),
              children: tU(`${nU}:loadoutTier`, {
                tier: (0, OU.V)(RU + 1)
              })
            }, RU)))]
          })
        }), (0, wU.jsx)("tbody", {
          children: EU.map((UU => {
            const RU = ZR[UU];
            return (0, wU.jsxs)("tr", {
              children: [(0, wU.jsxs)("th", {
                scope: "row",
                children: [tU(`${nU}:${UU}`), RU && (0, wU.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: tU(RU)
                })]
              }), pU.map(((RU, gU) => {
                const tU = TU(gU, UU),
                  pU = gU > 0 ? TU(gU - 1, UU) : void 0,
                  EU = tU && pU ? tU.loadoutStatValue - pU.loadoutStatValue : 0,
                  qU = bR.has(UU) ? EU < 0 : EU > 0,
                  cU = gU === PU;
                return (0, wU.jsxs)("td", {
                  className: KU()({
                    Current: gU + 1 === PU,
                    Next: cU,
                    Gain: qU,
                    Owned: gU < PU
                  }),
                  children: [cU && qU && (0, wU.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: EU < 0 ? "\u25bc" : "\u25b2"
                  }), tU ? aR(tU) : "-"]
                }, gU)
              }))]
            }, UU)
          }))
        })]
      })
    }

    function BR(UU) {
      let {
        view: RU,
        controller: gU,
        slot: tU,
        option: pU
      } = UU;
      const {
        t: EU
      } = (0, GU.B)(), PU = RU.loadout, TU = pU.loadoutOptionOwnedTier, qU = pU.loadoutOptionTiers.length, KU = tU.loadoutSlotEquippedId === pU.loadoutOptionId, cU = TU < qU ? pU.loadoutOptionTiers[TU].loadoutTierCost : null, jU = null !== cU && RR(PU, cU), uU = pU.loadoutOptionId, hU = mR();
      return (0, wU.jsxs)(wU.Fragment, {
        children: [(0, wU.jsx)(rR, {
          icon: pU.loadoutOptionIcon,
          name: pU.loadoutOptionName,
          status: 0 === TU ? EU(`${nU}:loadoutLocked`) : qU > 1 ? EU(`${nU}:loadoutTier`, {
            tier: (0, OU.V)(TU)
          }) : null,
          locked: 0 === TU,
          equipped: KU
        }), (0, wU.jsx)("p", {
          className: "BoardDescription",
          children: pU.loadoutOptionDescription
        }), (0, wU.jsx)(YR, {
          option: pU
        }), (0, wU.jsxs)("div", {
          ref: hU("act", uU),
          className: "BoardActions",
          children: [null !== cU && (0, wU.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, wU.jsx)(oR, {
              cost: cU,
              loadout: PU
            }), (0, wU.jsx)(CU.j, {
              disabled: !jU || RU.pending,
              onClick: () => {
                gU.act(0 === TU ? "loadoutUnlock" : "loadoutUpgrade", uU)
              },
              children: 0 === TU ? EU(`${nU}:loadoutUnlock`) : EU(`${nU}:loadoutUpgrade`, {
                tier: (0, OU.V)(TU + 1)
              })
            })]
          }), null === cU && qU > 1 && (0, wU.jsx)("span", {
            className: "BoardHint",
            children: EU(`${nU}:loadoutMaxed`)
          }), TU > 0 && !KU && (0, wU.jsx)(CU.e, {
            disabled: RU.pending,
            onClick: () => {
              gU.act("loadoutEquip", uU)
            },
            children: EU(`${nU}:loadoutEquip`)
          })]
        })]
      })
    }

    function VR(UU) {
      let {
        view: RU,
        controller: gU,
        perk: tU
      } = UU;
      const {
        t: pU
      } = (0, GU.B)(), EU = RU.loadout, PU = pR(EU), TU = tU.loadoutPerkId, qU = mR();
      return (0, wU.jsxs)(wU.Fragment, {
        children: [(0, wU.jsx)(rR, {
          icon: tU.loadoutPerkIcon,
          name: tU.loadoutPerkName,
          status: tU.loadoutPerkOwned ? null : pU(`${nU}:loadoutLocked`),
          locked: !tU.loadoutPerkOwned,
          equipped: tU.loadoutPerkEquipped
        }), (0, wU.jsx)("p", {
          className: "BoardDescription",
          children: tU.loadoutPerkDescription
        }), (0, wU.jsxs)("div", {
          ref: qU("act", TU),
          className: "BoardActions",
          children: [!tU.loadoutPerkOwned && (0, wU.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, wU.jsx)(oR, {
              cost: tU.loadoutPerkCost,
              loadout: EU
            }), (0, wU.jsx)(CU.j, {
              disabled: !RR(EU, tU.loadoutPerkCost) || RU.pending,
              onClick: () => {
                gU.act("loadoutUnlock", TU)
              },
              children: pU(`${nU}:loadoutUnlock`)
            })]
          }), tU.loadoutPerkOwned && !tU.loadoutPerkEquipped && (0, wU.jsx)(CU.e, {
            disabled: PU || RU.pending,
            onClick: () => {
              gU.act("loadoutEquip", TU)
            },
            children: pU(`${nU}:loadoutEquip`)
          }), tU.loadoutPerkOwned && !tU.loadoutPerkEquipped && PU && (0, wU.jsx)("span", {
            className: "BoardHint",
            children: pU(`${nU}:loadoutSocketsFullHint`)
          }), tU.loadoutPerkEquipped && (0, wU.jsx)(CU.M, {
            disabled: RU.pending,
            onClick: () => {
              gU.act("loadoutUnequip", TU)
            },
            children: pU(`${nU}:loadoutUnequip`)
          })]
        })]
      })
    }

    function rR(UU) {
      let {
        icon: RU,
        name: gU,
        status: tU,
        locked: pU,
        equipped: EU
      } = UU;
      const {
        t: PU
      } = (0, GU.B)();
      return (0, wU.jsxs)(XU, {
        icon: (0, wU.jsx)(ZU, {
          itemName: RU
        }),
        name: gU,
        children: [null !== tU && (0, wU.jsx)("span", {
          className: KU()("LoadoutStatusText", {
            Locked: pU
          }),
          children: tU
        }), EU && (0, wU.jsx)("span", {
          className: "BoardBadge",
          children: PU(`${nU}:loadoutEquippedBadge`)
        })]
      })
    }

    function XR(UU) {
      let {
        view: RU,
        controller: gU
      } = UU;
      const tU = RU.loadout;
      if ("loadoutPerks" === RU.slot) {
        const UU = tU.loadoutPerks.find((UU => UU.loadoutPerkId === RU.selectedId));
        return (0, wU.jsx)("section", {
          className: "BoardDetail",
          children: UU && (0, wU.jsx)(VR, {
            view: RU,
            controller: gU,
            perk: UU
          })
        })
      }
      const pU = tR(tU, RU.slot),
        EU = pU.loadoutSlotOptions.find((UU => UU.loadoutOptionId === RU.selectedId));
      return (0, wU.jsx)("section", {
        className: "BoardDetail",
        children: EU && (0, wU.jsx)(BR, {
          view: RU,
          controller: gU,
          slot: pU,
          option: EU
        })
      })
    }

    function vR(UU) {
      let {
        owned: RU,
        total: gU
      } = UU;
      return gU <= 1 ? null : (0, wU.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: gU
        }, ((UU, gU) => (0, wU.jsx)("span", {
          className: KU()("LoadoutPip", {
            Filled: gU < RU
          })
        }, gU)))
      })
    }

    function dR(UU) {
      let {
        view: RU,
        controller: gU
      } = UU;
      const {
        t: tU
      } = (0, GU.B)(), pU = RU.loadout, EU = mR();
      return (0, wU.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": tU(`${nU}:loadoutKit`),
        children: [pU.loadoutSlots.map((UU => {
          const pU = UU.loadoutSlotOptions.find((RU => RU.loadoutOptionId === UU.loadoutSlotEquippedId));
          return (0, wU.jsxs)("button", {
            ref: EU("section", UU.loadoutSlotKind),
            type: "button",
            className: KU()("LoadoutKitSlot", {
              Selected: RU.slot === UU.loadoutSlotKind
            }),
            onClick: () => {
              gU.selectSlot(UU.loadoutSlotKind)
            },
            children: [(0, wU.jsx)("span", {
              className: "LoadoutKitIcon",
              children: pU && (0, wU.jsx)(ZU, {
                itemName: pU.loadoutOptionIcon
              })
            }), (0, wU.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, wU.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, wU.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: tU(WR[UU.loadoutSlotKind])
                }), pU && (0, wU.jsx)(vR, {
                  owned: pU.loadoutOptionOwnedTier,
                  total: pU.loadoutOptionTiers.length
                })]
              }), (0, wU.jsx)("span", {
                className: "LoadoutKitName",
                children: null === pU || void 0 === pU ? void 0 : pU.loadoutOptionName
              })]
            })]
          }, UU.loadoutSlotKind)
        })), (0, wU.jsx)(HR, {
          view: RU,
          controller: gU
        })]
      })
    }

    function HR(UU) {
      let {
        view: RU,
        controller: gU
      } = UU;
      const {
        t: tU
      } = (0, GU.B)(), pU = RU.loadout, EU = pU.loadoutPerks.filter((UU => UU.loadoutPerkEquipped)), PU = mR();
      return (0, wU.jsxs)("button", {
        ref: PU("section", "loadoutPerks"),
        type: "button",
        className: KU()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === RU.slot
        }),
        onClick: () => {
          gU.selectSlot("loadoutPerks")
        },
        children: [(0, wU.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, wU.jsx)("span", {
            className: "LoadoutKitLabel",
            children: tU(WR.loadoutPerks)
          }), (0, wU.jsx)("span", {
            className: "LoadoutPerkCount",
            children: tU(`${nU}:loadoutPerkCount`, {
              equipped: String(EU.length),
              max: String(pU.loadoutMaxPerks)
            })
          })]
        }), (0, wU.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: pU.loadoutMaxPerks
          }, ((UU, RU) => {
            const gU = EU[RU];
            return (0, wU.jsxs)("span", {
              className: KU()("LoadoutSocket", {
                Filled: gU,
                Empty: !gU
              }),
              children: [(0, wU.jsx)("span", {
                className: "LoadoutSocketWell",
                children: gU && (0, wU.jsx)(ZU, {
                  itemName: gU.loadoutPerkIcon
                })
              }), (0, wU.jsx)("span", {
                className: "LoadoutSocketName",
                children: gU ? gU.loadoutPerkName : tU(`${nU}:loadoutPerkSocketEmpty`)
              })]
            }, RU)
          }))
        })]
      })
    }

    function SR(UU) {
      let {
        icon: RU,
        name: gU,
        selected: tU,
        equipped: pU,
        locked: EU,
        ownedTier: PU,
        tiers: TU,
        buttonRef: qU,
        onSelect: KU
      } = UU;
      const {
        t: cU
      } = (0, GU.B)();
      return (0, wU.jsxs)(rU, {
        icon: (0, wU.jsx)(ZU, {
          itemName: RU
        }),
        name: gU,
        selected: tU,
        locked: EU,
        buttonRef: qU,
        onSelect: KU,
        children: [pU && (0, wU.jsx)("span", {
          className: "BoardBadge",
          children: cU(`${nU}:loadoutEquippedBadge`)
        }), EU && (0, wU.jsx)("span", {
          className: "BoardBadge Muted",
          children: cU(`${nU}:loadoutLocked`)
        }), !EU && (0, wU.jsx)(vR, {
          owned: PU,
          total: TU
        })]
      })
    }

    function sR(UU) {
      let {
        view: RU,
        controller: gU
      } = UU;
      const tU = RU.loadout,
        pU = mR();
      if ("loadoutPerks" === RU.slot) return (0, wU.jsx)("div", {
        className: "BoardTiles",
        children: tU.loadoutPerks.map((UU => (0, wU.jsx)(SR, {
          icon: UU.loadoutPerkIcon,
          name: UU.loadoutPerkName,
          selected: RU.selectedId === UU.loadoutPerkId,
          equipped: UU.loadoutPerkEquipped,
          locked: !UU.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: pU("Hj", UU.loadoutPerkId),
          onSelect: () => {
            gU.select(UU.loadoutPerkId)
          }
        }, UU.loadoutPerkId)))
      });
      const EU = tR(tU, RU.slot);
      return (0, wU.jsx)("div", {
        className: "BoardTiles",
        children: EU.loadoutSlotOptions.map((UU => (0, wU.jsx)(SR, {
          icon: UU.loadoutOptionIcon,
          name: UU.loadoutOptionName,
          selected: RU.selectedId === UU.loadoutOptionId,
          equipped: EU.loadoutSlotEquippedId === UU.loadoutOptionId,
          locked: 0 === UU.loadoutOptionOwnedTier,
          ownedTier: UU.loadoutOptionOwnedTier,
          tiers: UU.loadoutOptionTiers.length,
          buttonRef: pU("Hj", UU.loadoutOptionId),
          onSelect: () => {
            gU.select(UU.loadoutOptionId)
          }
        }, UU.loadoutOptionId)))
      })
    }

    function yR(UU) {
      let {
        loadout: RU
      } = UU;
      return (0, wU.jsx)(vU, {
        coins: RU.loadoutCoins,
        children: RU.loadoutHeldParts.filter((UU => UU.loadoutHeldPartAmount > 0)).map((UU => (0, wU.jsx)(YU, {
          itemName: UU.loadoutHeldPartItem,
          amount: UU.loadoutHeldPartAmount
        }, UU.loadoutHeldPartCurrency)))
      })
    }

    function kR(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, cU.h)(jR, RU.getSnapshot()),
        {
          t: tU
        } = (0, GU.B)();
      if (null === gU.loadout) return null;
      const pU = gU.notice;
      return (0, wU.jsx)(wR, {
        view: gU,
        onDismiss: RU.dismiss,
        children: (0, wU.jsxs)(oU, {
          open: gU.open,
          onDismiss: RU.dismiss,
          title: tU(`${nU}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, wU.jsx)(yR, {
            loadout: gU.loadout
          }),
          statusRefused: null === pU || void 0 === pU ? void 0 : pU.loadoutNoticeRefused,
          status: (0, wU.jsxs)(wU.Fragment, {
            children: [(0, wU.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: tU(`${nU}:loadoutRadioBadge`)
            }), null !== pU && tU(`${nU}:${pU.loadoutNoticeKey}`, {
              name: pU.loadoutNoticeName,
              tier: (0, OU.V)(pU.loadoutNoticeTier),
              max: String(gU.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, wU.jsx)(dR, {
            view: gU,
            controller: RU
          }), (0, wU.jsx)(sR, {
            view: gU,
            controller: RU
          }), (0, wU.jsx)(XR, {
            view: gU,
            controller: RU
          })]
        })
      })
    }

    function FR(UU, RU, gU) {
      const tU = UU.locatorEntries.find((UU => UU.locatorEntryId === gU));
      if (!tU) return null;
      const pU = tU.locatorEntryName;
      if ("locatorDisarm" === RU) return tU.locatorEntryArmed ? {
        board: iR(UU, null),
        notice: AR("locatorNoticeDisarmed", pU)
      } : null;
      if ("locatorArm" === RU) return tU.locatorEntryOwned && !tU.locatorEntryArmed ? {
        board: iR(UU, gU),
        notice: AR("locatorNoticeArmed", pU)
      } : null;
      if (tU.locatorEntryOwned || UU.locatorCoins < tU.locatorEntryPrice) return null;
      const EU = iR({
        ...UU,
        locatorCoins: UU.locatorCoins - tU.locatorEntryPrice
      }, gU);
      return {
        board: {
          ...EU,
          locatorEntries: EU.locatorEntries.map((UU => UU.locatorEntryId === gU ? {
            ...UU,
            locatorEntryOwned: !0
          } : UU))
        },
        notice: AR("locatorNoticeBought", pU)
      }
    }

    function iR(UU, RU) {
      return {
        ...UU,
        locatorEntries: UU.locatorEntries.map((UU => {
          const gU = UU.locatorEntryId === RU;
          return UU.locatorEntryArmed === gU ? UU : {
            ...UU,
            locatorEntryArmed: gU
          }
        }))
      }
    }

    function AR(UU, RU) {
      return {
        locatorNoticeKey: UU,
        locatorNoticeRefused: !1,
        locatorNoticeName: RU
      }
    }
    const zR = "containmentLocatorView";
    class MR extends UR {
      constructor(UU, RU, gU, tU) {
        super(UU, RU, gU, tU, "locator", FR), this.snapshot = this.buildSnapshot()
      }
      messageOpens(UU) {
        return UU.locatorMessageOpens
      }
      messageNotice(UU) {
        return UU.locatorNotice
      }
      openingSelection(UU) {
        var RU;
        const gU = UU.locatorEntries;
        return (null !== (RU = gU.find((UU => UU.locatorEntryArmed))) && void 0 !== RU ? RU : gU[0]).locatorEntryId
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
    const DR = {
        locatorContained: `${nU}:locatorFlavourContained`,
        locatorEncountered: `${nU}:locatorFlavourEncountered`,
        locatorUnseen: `${nU}:locatorFlavourUnseen`
      },
      LR = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${nU}:locatorAttunedNormal`,
        codexHardOnly: `${nU}:locatorAttunedHard`
      };

    function NR() {
      return (0, wU.jsx)(wU.Fragment, {
        children: Array.from({
          length: 5
        }, ((UU, RU) => (0, wU.jsx)("span", {
          className: "LocatorFly",
          children: (0, wU.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, RU)))
      })
    }

    function lR(UU) {
      let {
        entry: RU
      } = UU;
      const {
        t: gU
      } = (0, GU.B)();
      return RU.locatorEntryArmed ? (0, wU.jsx)("span", {
        className: "BoardBadge Armed",
        children: gU(`${nU}:locatorArmedBadge`)
      }) : RU.locatorEntryOwned ? (0, wU.jsx)("span", {
        className: "BoardBadge",
        children: gU(`${nU}:locatorOwnedBadge`)
      }) : null
    }

    function OR(UU) {
      let {
        entry: RU,
        coins: gU,
        inTile: tU = !1
      } = UU;
      return (0, wU.jsx)(YU, {
        itemName: bU,
        amount: RU.locatorEntryPrice,
        WT: gU,
        inTile: tU
      })
    }

    function Ug(UU) {
      let {
        view: RU,
        controller: gU,
        entry: tU
      } = UU;
      const {
        t: pU
      } = (0, GU.B)(), EU = tU.locatorEntryId, PU = RU.locators.locatorEntries.find((UU => UU.locatorEntryArmed && UU !== tU));
      return (0, wU.jsxs)("div", {
        className: "BoardActions",
        children: [tU.locatorEntryArmed && (0, wU.jsx)(CU.M, {
          disabled: RU.pending,
          onClick: () => {
            gU.act("locatorDisarm", EU)
          },
          children: pU(`${nU}:locatorDisarm`)
        }), tU.locatorEntryOwned && !tU.locatorEntryArmed && (0, wU.jsx)(CU.e, {
          disabled: RU.pending,
          onClick: () => {
            gU.act("locatorArm", EU)
          },
          children: pU(`${nU}:locatorArm`)
        }), !tU.locatorEntryOwned && (0, wU.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, wU.jsx)(OR, {
            entry: tU,
            coins: RU.locators.locatorCoins
          }), (0, wU.jsx)(CU.j, {
            disabled: RU.locators.locatorCoins < tU.locatorEntryPrice || RU.pending,
            onClick: () => {
              gU.act("locatorBuy", EU)
            },
            children: pU(`${nU}:locatorBuy`)
          })]
        }), PU && !tU.locatorEntryArmed && (0, wU.jsx)("span", {
          className: "BoardHint",
          children: pU(`${nU}:locatorReplacesHint`, {
            name: PU.locatorEntryName
          })
        })]
      })
    }

    function Rg(UU) {
      let {
        entry: RU
      } = UU;
      return "locatorUnseen" === RU.locatorEntryStanding ? (0, wU.jsx)(ZU, {
        itemName: "Compass"
      }) : (0, wU.jsx)(aU, {
        anomalyId: RU.locatorEntryId,
        caught: "locatorContained" === RU.locatorEntryStanding
      })
    }

    function gg(UU) {
      let {
        view: RU,
        controller: gU,
        entry: tU
      } = UU;
      const {
        t: pU
      } = (0, GU.B)(), EU = LR[tU.locatorEntryDifficulty];
      return (0, wU.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, wU.jsxs)("div", {
          className: KU()("LocatorLabel", {
            Armed: tU.locatorEntryArmed
          }),
          children: [(0, wU.jsx)(XU, {
            icon: (0, wU.jsx)(Rg, {
              entry: tU
            }),
            name: pU(`${nU}:locatorName`, {
              name: tU.locatorEntryName
            }),
            children: (0, wU.jsx)(lR, {
              entry: tU
            })
          }), (0, wU.jsx)("p", {
            className: "BoardDescription",
            children: pU(tU.locatorEntryArmed ? `${nU}:locatorFlavourArmed` : DR[tU.locatorEntryStanding])
          }), null !== EU && (0, wU.jsx)("p", {
            className: "LocatorAttuned",
            children: pU(EU)
          }), (0, wU.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: pU(`${nU}:locatorUsage`)
          })]
        }), (0, wU.jsx)(Ug, {
          view: RU,
          controller: gU,
          entry: tU
        })]
      })
    }

    function tg(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, cU.h)(zR, RU.getSnapshot()),
        {
          t: tU
        } = (0, GU.B)(),
        pU = gU.locators;
      if (null === pU) return null;
      const EU = pU.locatorEntries.find((UU => UU.locatorEntryId === gU.selectedId)),
        PU = gU.notice;
      return (0, wU.jsxs)(oU, {
        open: gU.open,
        onDismiss: RU.dismiss,
        title: tU(`${nU}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, wU.jsx)(NR, {}),
        headerExtra: (0, wU.jsx)(vU, {
          coins: pU.locatorCoins
        }),
        statusRefused: null === PU || void 0 === PU ? void 0 : PU.locatorNoticeRefused,
        status: (0, wU.jsxs)(wU.Fragment, {
          children: [(0, wU.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: tU(`${nU}:locatorKeeperName`)
          }), null !== PU && tU(`${nU}:${PU.locatorNoticeKey}`, {
            name: PU.locatorNoticeName
          })]
        }),
        children: [(0, wU.jsx)("div", {
          className: "BoardTiles",
          children: pU.locatorEntries.map((UU => (0, wU.jsxs)(rU, {
            icon: (0, wU.jsx)(Rg, {
              entry: UU
            }),
            name: UU.locatorEntryName,
            selected: UU === EU,
            locked: !1,
            className: KU()("LocatorTag", {
              Armed: UU.locatorEntryArmed
            }),
            onSelect: () => {
              RU.select(UU.locatorEntryId)
            },
            children: [(0, wU.jsx)(lR, {
              entry: UU
            }), !UU.locatorEntryOwned && (0, wU.jsx)(OR, {
              entry: UU,
              coins: pU.locatorCoins,
              inTile: !0
            })]
          }, UU.locatorEntryId)))
        }), (0, wU.jsx)(gg, {
          view: gU,
          controller: RU,
          entry: EU
        })]
      })
    }

    function pg(UU) {
      let {
        loadout: RU,
        codex: gU,
        locator: tU
      } = UU;
      return (0, wU.jsxs)(wU.Fragment, {
        children: [(0, wU.jsx)(kR, {
          controller: RU
        }), (0, wU.jsx)(lU, {
          controller: gU
        }), (0, wU.jsx)(tg, {
          controller: tU
        })]
      })
    }
    var Eg = gU(38092);
    class Pg {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = UU, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Eg.d({
          spacingMs: 0,
          now: RU
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(UU, RU) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, RU(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(UU), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
    }
    var Tg = gU(38090);
    const qg = new Map([
      ["npc_general", hR],
      ["npc_tentacle_guy", Tg]
    ]);

    function Kg(UU) {
      const RU = qg.get(UU);
      if (void 0 === RU) return null;
      const gU = document.createElement("img");
      return gU.src = RU, gU.alt = "", gU.draggable = !1, gU.style.imageRendering = "pixelated", gU
    }
    const cg = function() {
      let UU, RU = !1,
        gU = null,
        qU = null;
      const KU = [],
        cU = UU => {
          for (const RU of KU) RU !== UU && RU.close();
          (0, TU.w)()
        },
        GU = UU => {
          UU && (0, TU.l)()
        },
        jU = new Pg((RU => {
          UU.sendCommand(RU)
        })),
        uU = new uR((UU => {
          PU.p.yh(jR, UU, !0)
        }), cU, GU, jU),
        CU = new SU((UU => {
          PU.p.yh(HU, UU, !0)
        }), cU, GU),
        hU = new MR((UU => {
          PU.p.yh(zR, UU, !0)
        }), cU, GU, jU);
      KU.push(uU, CU, hU);
      return {
        onCreate: RU => {
          UU = RU, gU = (0, TU.y)(null, {
            content: (0, tU.createElement)(pg, {
              loadout: uU,
              codex: CU,
              locator: hU
            }),
            onClose: () => {
              for (const UU of KU) UU.close()
            }
          }), qU = (0, EU.h)(Kg)
        },
        onReceivedMessageFromServer: (UU, RU) => {
          "containmentLoadout" === UU ? uU.qC(RU) : "containmentLoadoutClose" === UU ? uU.isOpen() && (uU.close(), (0, TU.h)()) : "containmentCodex" === UU ? CU.qC(RU) : "containmentLocator" === UU && hU.qC(RU)
        },
        HG: () => {
          RU || pU.b.get("loadingOverlayVisible") || (RU = !0, UU.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var UU, RU;
          null === (UU = gU) || void 0 === UU || UU(), gU = null, null === (RU = qU) || void 0 === RU || RU(), qU = null;
          for (const gU of KU) gU.dispose();
          jU.dispose()
        }
      }
    }
  },
  36427: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => nU,
      D: () => XU,
      F: () => vU,
      H: () => dU,
      K: () => rU,
      N: () => HU,
      e: () => qU,
      g: () => ZU,
      k: () => TU,
      m: () => VU,
      p: () => bU,
      t: () => IU,
      v: () => BU,
      y: () => YU
    });
    var tU = gU(34);
    const pU = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      EU = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      PU = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      TU = EU.filter((UU => "docsButton" !== UU)),
      qU = PU.filter((UU => "aiHelperButton" !== UU)),
      KU = "codeEditorTutorials",
      cU = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      GU = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let jU = null,
      uU = null;
    const CU = new Set,
      hU = new Set;
    let QU = null;
    const eU = new Set,
      WU = new Set;

    function fU() {
      WU.forEach((UU => {
        UU()
      }))
    }

    function xU() {
      if (!jU) {
        const UU = tU.k.getItem(KU);
        jU = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof UU && null !== UU ? UU : {}
        }
      }
      return jU
    }

    function mU(UU) {
      const RU = xU();
      RU[UU] || (jU = {
        ...RU,
        [UU]: !0
      }, tU.k.setItem(KU, jU))
    }

    function IU(UU) {
      return "docsOverview" === UU ? EU : "aiHelperOverview" === UU ? PU : uU ? pU[uU] : []
    }

    function JU(UU) {
      return ("worldCodeButton" !== UU || !xU().worldCodeIntroShown) && !eU.has(UU)
    }

    function wU(UU) {
      var RU;
      return (null === (RU = QU) || void 0 === RU ? void 0 : RU.name) === UU ? QU.stepsDone : CU
    }

    function nU(UU, RU) {
      if (! function(UU) {
          return QU ? QU.name === UU : "welcome" === UU
        }(UU) || !JU(RU) || wU(UU).has(RU)) return !1;
      if (QU) return !0;
      const gU = cU[RU];
      return gU ? !xU()[gU] || hU.has(RU) : !xU()[GU[UU]]
    }

    function bU(UU) {
      var RU;
      return null !== (RU = IU(UU).find((RU => nU(UU, RU)))) && void 0 !== RU ? RU : null
    }

    function oU(UU) {
      var RU;
      mU(GU[UU]), (null === (RU = QU) || void 0 === RU ? void 0 : RU.name) === UU && (QU = null)
    }

    function ZU(UU) {
      const RU = (QU ? [QU.name] : ["welcome", "docsOverview"]).find((RU => bU(RU) === UU));
      if (!RU) return;
      wU(RU).add(UU);
      const gU = cU[UU];
      gU && (mU(gU), QU || hU.add(UU)), null === bU(RU) && oU(RU), fU()
    }

    function aU(UU, RU) {
      const gU = IU(UU),
        tU = wU(UU);
      for (let pU = gU.indexOf(RU) - 1; pU >= 0; pU--)
        if (tU.has(gU[pU]) && JU(gU[pU])) return gU[pU];
      return null
    }

    function YU(UU, RU) {
      return null !== aU(UU, RU)
    }

    function BU(UU, RU) {
      const gU = aU(UU, RU);
      gU && (wU(UU).delete(gU), fU())
    }

    function VU(UU) {
      oU(UU), "welcome" === UU && IU("welcome").forEach((UU => {
        const RU = cU[UU];
        RU && mU(RU)
      })), fU()
    }

    function rU(UU) {
      QU = {
        name: UU,
        stepsDone: new Set
      }, fU()
    }

    function XU() {
      (QU || 0 !== CU.size || 0 !== hU.size) && (QU = null, CU.clear(), hU.clear(), fU())
    }

    function vU(UU, RU) {
      const gU = RU ? UU : uU === UU ? null : uU;
      gU !== uU && (uU = gU, fU())
    }

    function dU(UU, RU) {
      eU.has(UU) === RU && (RU ? eU.delete(UU) : eU.add(UU), fU())
    }

    function HU(UU) {
      return WU.add(UU), () => {
        WU.delete(UU)
      }
    }
  },
  38831: (UU, RU, gU) => {
    var tU = {
      "./breach-zero-uncaught.webp": 38835,
      "./breach-zero.webp": 38840,
      "./brood-father-uncaught.webp": 38847,
      "./brood-father.webp": 38852,
      "./carousel-uncaught.webp": 38860,
      "./carousel.webp": 38865,
      "./deadlock-uncaught.webp": 38867,
      "./deadlock.webp": 38874,
      "./frost-revenant-uncaught.webp": 38877,
      "./frost-revenant.webp": 38886,
      "./hollow-choir-uncaught.webp": 38892,
      "./hollow-choir.webp": 38897,
      "./magma-warden-uncaught.webp": 38903,
      "./magma-warden.webp": 38907,
      "./patient-zero-uncaught.webp": 38916,
      "./patient-zero.webp": 38922,
      "./siege-engine-uncaught.webp": 38924,
      "./siege-engine.webp": 38929,
      "./warp-stalker-uncaught.webp": 38933,
      "./warp-stalker.webp": 38939
    };

    function pU(UU) {
      var RU = EU(UU);
      return gU(RU)
    }

    function EU(UU) {
      if (!gU.o(tU, UU)) {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }
      return tU[UU]
    }
    pU.keys = function() {
      return Object.keys(tU)
    }, pU.resolve = EU, UU.exports = pU, pU.id = 38831
  },
  38835: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38840: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38847: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38852: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38860: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38865: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38867: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38874: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38877: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38886: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38892: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38897: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38903: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38907: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38916: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38922: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38924: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38929: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38933: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38939: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38090: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);