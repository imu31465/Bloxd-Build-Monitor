export const id = 14;
export const ids = [14];
export const modules = {
  39132: (CC, zC, ZC) => {
    var QC = {
      "./breach-zero-uncaught.webp": 39141,
      "./breach-zero.webp": 39150,
      "./brood-father-uncaught.webp": 39156,
      "./brood-father.webp": 39161,
      "./carousel-uncaught.webp": 39166,
      "./carousel.webp": 39173,
      "./deadlock-uncaught.webp": 39175,
      "./deadlock.webp": 39179,
      "./frost-revenant-uncaught.webp": 39187,
      "./frost-revenant.webp": 39191,
      "./hollow-choir-uncaught.webp": 39200,
      "./hollow-choir.webp": 39203,
      "./magma-warden-uncaught.webp": 39208,
      "./magma-warden.webp": 39210,
      "./patient-zero-uncaught.webp": 39218,
      "./patient-zero.webp": 39225,
      "./siege-engine-uncaught.webp": 39232,
      "./siege-engine.webp": 39234,
      "./warp-stalker-uncaught.webp": 39239,
      "./warp-stalker.webp": 39243
    };

    function wC(CC) {
      var zC = bC(CC);
      return ZC(zC)
    }

    function bC(CC) {
      if (!ZC.o(QC, CC)) {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }
      return QC[CC]
    }
    wC.keys = function() {
      return Object.keys(QC)
    }, wC.resolve = bC, CC.exports = wC, wC.id = 39132
  },
  36747: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => iC,
      g: () => JC,
      h: () => IC,
      i: () => gC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(48),
      nC = ZC(60),
      fC = ZC(1325),
      oC = ZC(1388),
      qC = ZC(1321),
      FC = ZC(1228),
      WC = ZC(1143),
      NC = ZC(36750),
      MC = ZC(1056);

    function gC(CC) {
      const [zC, ZC] = (0, bC.useState)((() => (0, NC.m)(CC)));
      return (0, bC.useEffect)((() => (ZC((0, NC.m)(CC)), (0, NC.D)((() => {
        ZC((0, NC.m)(CC))
      })))), [CC]), zC
    }

    function SC(CC, zC) {
      "function" === typeof CC ? CC(zC) : CC && (CC.current = zC)
    }

    function pC(CC) {
      let {
        tutorial: zC,
        step: ZC,
        enabled: QC = !0
      } = CC;
      const wC = gC(zC);
      return QC && wC === ZC
    }

    function PC(CC, zC) {
      const ZC = (0, NC.n)(CC),
        QC = ZC.indexOf(zC);
      return !ZC.slice(QC + 1).some((zC => (0, NC.t)(CC, zC)))
    }

    function GC(CC, zC, ZC, QC) {
      let {
        tutorial: wC,
        step: bC,
        waitForClick: nC = !1,
        onPrevious: fC
      } = CC;
      const oC = zC && (0, NC.r)(wC, bC),
        qC = zC && !PC(wC, bC),
        WC = nC ? QC : ZC;
      let MC = null;
      oC ? MC = () => {
        null === fC || void 0 === fC || fC(), (0, NC.o)(wC, bC)
      } : qC && (MC = () => {
        (0, NC.k)(wC)
      }), (0, FC.u)("popup", null !== WC && void 0 !== WC ? WC : ZC, MC, zC && null !== WC, null, oC ? void 0 : "controller:menusSkipTutorial")
    }

    function RC(CC) {
      let {
        tutorial: zC,
        step: ZC,
        text: QC,
        waitForClick: wC = !1,
        onPrevious: bC
      } = CC;
      const {
        t: nC
      } = (0, WC.y)(), fC = PC(zC, ZC);
      return (0, MC.jsxs)(MC.Fragment, {
        children: [(0, MC.jsx)("div", {
          className: "TutorialStepText",
          children: QC
        }), (0, MC.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, NC.r)(zC, ZC) && (0, MC.jsx)(oC.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === bC || void 0 === bC || bC(), (0, NC.o)(zC, ZC)
            },
            children: nC("tutorial:back")
          }), !wC && (0, MC.jsx)(oC.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, NC.f)(ZC)
            },
            padDefaultFocus: !0,
            children: nC(fC ? "tutorial:done" : "tutorial:next")
          }), !fC && (0, MC.jsx)(oC.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, NC.k)(zC)
            },
            children: nC("tutorial:skip")
          })]
        })]
      })
    }
    const AC = 6;

    function xC(CC) {
      let {
        rect: zC,
        margin: ZC
      } = CC;
      const QC = Math.max(0, zC.top - ZC),
        wC = zC.bottom + ZC,
        bC = Math.max(0, zC.left - ZC),
        nC = zC.right + ZC;
      return (0, MC.jsxs)(MC.Fragment, {
        children: [(0, MC.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: QC
          }
        }), (0, MC.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: wC,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, MC.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: QC,
            left: 0,
            width: bC,
            height: wC - QC
          }
        }), (0, MC.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: QC,
            left: nC,
            right: 0,
            height: wC - QC
          }
        })]
      })
    }

    function JC(CC) {
      let {
        target: zC,
        placement: ZC,
        boxRef: QC,
        className: oC,
        spotlightMargin: FC = AC,
        children: WC
      } = CC;
      const {
        getArrowProps: NC,
        getTooltipProps: gC,
        setTooltipRef: SC,
        setTriggerRef: pC
      } = (0, fC.b)({
        placement: ZC,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, FC]
      });
      (0, bC.useLayoutEffect)((() => {
        pC(zC)
      }), [zC, pC]);
      const PC = function(CC, zC) {
        const [ZC, QC] = (0, bC.useState)(null);
        return (0, bC.useEffect)((() => {
          if (!zC || !CC) return void QC(null);
          let ZC = 0,
            wC = null;
          const bC = () => {
            const zC = CC.getBoundingClientRect();
            wC && zC.left === wC.left && zC.top === wC.top && zC.width === wC.width && zC.height === wC.height || (wC = zC, QC(zC)), ZC = requestAnimationFrame(bC)
          };
          return bC(), () => {
            cancelAnimationFrame(ZC)
          }
        }), [CC, zC]), ZC
      }(zC, !0);
      (0, bC.useEffect)((() => {
        null === zC || void 0 === zC || zC.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [zC]);
      const GC = (0, bC.useCallback)((CC => {
        SC(CC), QC && (QC.current = CC)
      }), [SC, QC]);
      return (0, nC.createPortal)((0, MC.jsxs)(MC.Fragment, {
        children: [PC && (0, MC.jsx)(xC, {
          rect: PC,
          margin: FC
        }), (0, MC.jsxs)("div", {
          ref: GC,
          ...gC({
            className: wC()("tooltip-container SmallTextLight TutorialStep", oC)
          }),
          children: [WC, (0, MC.jsx)("div", {
            ...NC({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, qC.f)())
    }
    const IC = (0, bC.forwardRef)((function(CC, zC) {
      let {
        placement: ZC = "right",
        children: QC,
        ...wC
      } = CC;
      const nC = pC(wC),
        fC = (0, bC.useRef)(null),
        oC = (0, bC.useRef)(null);
      GC(wC, nC, fC, oC);
      const [qC, FC] = (0, bC.useState)(null), WC = QC.ref, NC = (0, bC.useCallback)((CC => {
        oC.current = CC, FC(CC), SC(zC, CC), SC(WC, CC)
      }), [zC, WC]);
      return (0, MC.jsxs)(MC.Fragment, {
        children: [(0, bC.cloneElement)(QC, {
          ref: NC
        }), nC && (0, MC.jsx)(JC, {
          target: qC,
          placement: ZC,
          boxRef: fC,
          children: (0, MC.jsx)(RC, {
            ...wC
          })
        })]
      })
    }));

    function iC(CC) {
      const zC = pC(CC),
        ZC = (0, bC.useRef)(null);
      return GC(CC, zC, ZC, null), zC ? (0, nC.createPortal)((0, MC.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, MC.jsx)("div", {
          ref: ZC,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, MC.jsx)(RC, {
            ...CC
          })
        })
      }), (0, qC.f)()) : null
    }
  },
  38375: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    const QC = 4,
      wC = 12e3,
      bC = 1e3;
    class nC {
      constructor() {
        let {
          limit: CC = QC,
          windowMs: zC = wC,
          spacingMs: ZC = bC,
          now: nC = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = CC, this.windowMs = zC, this.spacingMs = ZC, this.now = nC
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const CC of this.priority) CC.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const CC = this.now();
        this.sent.push(CC), this.lastSentAt = CC, this.schedule(), this.notify()
      }
      addPriority(CC) {
        return this.priority.add(CC), () => {
          this.priority.delete(CC)
        }
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const CC of this.priority)
          if (CC.waiting()) return !0;
        return !1
      }
      prune() {
        const CC = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= CC;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const CC = this.now(),
          zC = this.lastSentAt + this.spacingMs,
          ZC = Math.min(zC > CC ? zC : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZC !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZC - CC)))
      }
      notify() {
        for (const CC of this.listeners) CC()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  38360: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    class QC {
      constructor(CC, zC, ZC) {
        this.bp = CC, this.beforeOpen = zC, this.afterClose = ZC, this.open = !1, this.Sg = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Sg && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(CC) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(CC)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Sg = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Sg || (this.snapshot = this.buildSnapshot(), this.bp(this.snapshot))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  39124: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => FZ
    });
    var QC = ZC(48);
    var wC = ZC(20),
      bC = ZC(1815),
      nC = ZC(28),
      fC = ZC(36488),
      oC = ZC(1002),
      qC = ZC.n(oC),
      FC = ZC(1383),
      WC = ZC(1143),
      NC = ZC(4469),
      MC = ZC(1299),
      gC = ZC(1388),
      SC = ZC(1822),
      pC = ZC(1321),
      PC = ZC(1811),
      GC = ZC(1877),
      RC = ZC(191);
    const AC = ZC(39132),
      xC = Object.fromEntries(AC.keys().map((CC => [CC.replace(/^\.\/(.*)\.webp$/, "$1"), AC(CC)]))),
      JC = new Set;

    function IC(CC, zC) {
      const ZC = zC ? CC : `${CC}-uncaught`,
        QC = (0, RC.d)(xC, ZC);
      return void 0 !== QC || JC.has(ZC) || (JC.add(ZC), console.warn(`Containment Breach has no mugshot ${ZC}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), QC
    }
    var iC = ZC(1056);
    const vC = "containmentBreach",
      eC = "Gold Coin";

    function hC(CC) {
      let {
        open: zC,
        onDismiss: ZC,
        title: QC,
        className: wC,
        decor: bC,
        headerExtra: nC,
        status: fC,
        statusRefused: oC = !1,
        children: FC
      } = CC;
      const WC = `${wC}Title`;
      return (0, iC.jsx)(NC.c, {
        show: zC,
        close: ZC,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, iC.jsxs)("section", {
          className: qC()("ContainmentBoardPanel", wC),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": WC,
          children: [bC && (0, iC.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: bC
          }), (0, iC.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, iC.jsx)("h2", {
              id: WC,
              className: "VisuallyHidden",
              children: QC
            }), nC, (0, iC.jsx)(gC.k, {
              onClick: ZC
            })]
          }), (0, iC.jsx)("div", {
            className: "BoardBody",
            children: FC
          }), void 0 !== fC && (0, iC.jsx)("footer", {
            className: qC()("BoardStatus", {
              Refused: oC
            }),
            children: fC
          })]
        })
      })
    }

    function KC(CC) {
      let {
        itemName: zC
      } = CC;
      return (0, iC.jsx)(SC.e, {
        itemName: zC,
        amount: 0
      })
    }

    function YC(CC) {
      let {
        anomalyId: zC,
        caught: ZC
      } = CC;
      const wC = (0, QC.useRef)(null);
      return (0, MC.c)(wC, !ZC), (0, iC.jsx)("span", {
        ref: wC,
        className: qC()("BoardMugshot", {
          Uncaught: !ZC
        }),
        children: (0, iC.jsx)("img", {
          src: IC(zC, ZC),
          alt: "",
          draggable: !1
        })
      })
    }

    function dC(CC) {
      let {
        itemName: zC,
        amount: ZC,
        vq: QC,
        inTile: wC = !1
      } = CC;
      return (0, iC.jsx)(pC.d, {
        delayShow: 200,
        hoverOnly: wC,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, iC.jsx)(HC, {
          itemName: zC,
          amount: ZC,
          vq: QC
        }),
        children: (0, iC.jsxs)("span", {
          className: qC()("BoardChip", {
            Short: void 0 !== QC && QC < ZC
          }),
          children: [(0, iC.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, iC.jsx)(KC, {
              itemName: zC
            })
          }), ZC.toLocaleString()]
        })
      })
    }
    const mC = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function HC(CC) {
      var zC;
      let {
        itemName: ZC,
        amount: QC,
        vq: wC
      } = CC;
      const {
        t: bC
      } = (0, WC.y)(), nC = (0, GC.e)("itemInfo", (CC => CC[ZC])), {
        lore: fC,
        droppedBy: oC
      } = function(CC) {
        if ("string" !== typeof CC) return {
          lore: CC,
          droppedBy: null
        };
        const zC = mC.exec(CC);
        return null === zC ? {
          lore: CC,
          droppedBy: null
        } : {
          lore: "" === zC[1] ? void 0 : zC[1],
          droppedBy: zC[2]
        }
      }(null === nC || void 0 === nC ? void 0 : nC.description);
      return (0, iC.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, iC.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, iC.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, iC.jsx)(KC, {
              itemName: ZC
            })
          }), (0, iC.jsx)(PC.e, {
            text: null !== (zC = null === nC || void 0 === nC ? void 0 : nC.displayName) && void 0 !== zC ? zC : ZC,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== fC || null !== oC) && (0, iC.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== fC && (0, iC.jsx)(PC.e, {
            text: fC,
            className: "BoardChipTooltipDescription"
          }), null !== oC && (0, iC.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, iC.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: bC(`${vC}:chipDroppedBy`)
            }), oC]
          })]
        }), void 0 !== wC && (0, iC.jsxs)("div", {
          className: qC()("BoardChipTooltipHeld", {
            Short: wC < QC
          }),
          children: [(0, iC.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: bC(`${vC}:chipYouHave`)
          }), (0, iC.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, iC.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: wC.toLocaleString()
            }), ` / ${QC.toLocaleString()}`]
          }), (0, iC.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, iC.jsx)("span", {
              style: {
                width: (QC > 0 ? 100 * Math.min(1, wC / QC) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function EC(CC) {
      let {
        icon: zC,
        name: ZC,
        selected: QC,
        locked: wC,
        className: bC,
        buttonRef: nC,
        onSelect: fC,
        children: oC
      } = CC;
      return (0, iC.jsxs)("button", {
        ref: nC,
        type: "button",
        className: qC()("BoardTile", bC, {
          Selected: QC,
          Locked: wC
        }),
        onClick: fC,
        children: [(0, iC.jsx)("span", {
          className: "BoardTileIcon",
          children: zC
        }), (0, iC.jsx)("span", {
          className: "BoardTileName",
          children: ZC
        }), oC]
      })
    }

    function lC(CC) {
      let {
        icon: zC,
        name: ZC,
        children: QC
      } = CC;
      return (0, iC.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, iC.jsx)("span", {
          className: "BoardDetailIcon",
          children: zC
        }), (0, iC.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, iC.jsx)("h3", {
            children: ZC
          }), (0, iC.jsx)("span", {
            className: "BoardDetailStatus",
            children: QC
          })]
        })]
      })
    }

    function XC(CC) {
      let {
        coins: zC,
        children: ZC
      } = CC;
      return (0, iC.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, iC.jsx)(dC, {
          itemName: eC,
          amount: zC
        }), ZC]
      })
    }
    var cC = ZC(38360);
    const uC = "containmentCodexView";
    class rC extends cC.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = CC => {
          this.selectedId = CC, this.emit()
        }
      }
      Ag(CC) {
        this.entries = CC.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const sC = {
        codexAnyDifficulty: `${vC}:codexNeedsAny`,
        codexNormalOnly: `${vC}:codexNeedsNormal`,
        codexHardOnly: `${vC}:codexNeedsHard`
      },
      TC = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      aC = {
        codexContained: `${vC}:codexContainedBadge`,
        codexEncountered: `${vC}:codexEncounteredBadge`,
        codexUnidentified: `${vC}:codexUnidentifiedBadge`
      },
      tC = ["94%", "81%", "88%", "46%", "72%"];

    function DC(CC) {
      let {
        entry: zC
      } = CC;
      const {
        t: ZC
      } = (0, WC.y)();
      return (0, iC.jsx)("span", {
        className: qC()("BoardBadge", TC[zC.codexEntryState]),
        children: ZC(aC[zC.codexEntryState])
      })
    }

    function jC(CC) {
      const {
        t: zC
      } = (0, WC.y)();
      return "codexUnidentified" === CC.codexEntryState ? zC(`${vC}:codexUnidentifiedName`) : CC.codexEntryName
    }

    function yC(CC) {
      let {
        entry: zC
      } = CC;
      return "codexUnidentified" === zC.codexEntryState ? (0, iC.jsx)(KC, {
        itemName: "Book"
      }) : (0, iC.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, iC.jsx)(YC, {
          anomalyId: zC.codexEntryId,
          caught: "codexContained" === zC.codexEntryState
        }), (0, iC.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function LC(CC) {
      let {
        entry: zC,
        selected: ZC,
        onSelect: QC
      } = CC;
      const wC = "codexUnidentified" === zC.codexEntryState;
      return (0, iC.jsxs)(EC, {
        icon: (0, iC.jsx)(yC, {
          entry: zC
        }),
        name: jC(zC),
        selected: ZC,
        locked: wC,
        className: qC()("CodexFolder", TC[zC.codexEntryState]),
        onSelect: () => {
          QC(zC.codexEntryId)
        },
        children: [!wC && (0, iC.jsx)(DC, {
          entry: zC
        }), wC && (0, iC.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function UC(CC) {
      let {
        count: zC
      } = CC;
      const ZC = [];
      for (let QC = Math.min(zC, 25); QC > 0; QC -= 5) ZC.push(Math.min(QC, 5));
      return (0, iC.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: ZC.map(((CC, zC) => (0, iC.jsx)("span", {
          className: qC()("CodexTallyGroup", {
            Gate: 5 === CC
          }),
          children: Array.from({
            length: Math.min(CC, 4)
          }, ((CC, zC) => (0, iC.jsx)("span", {
            className: "CodexTallyMark"
          }, zC)))
        }, zC)))
      })
    }

    function BC(CC) {
      let {
        contained: zC,
        total: ZC
      } = CC;
      const {
        t: QC
      } = (0, WC.y)();
      return (0, iC.jsxs)("div", {
        className: "CodexProgress",
        children: [QC(`${vC}:codexProgress`, {
          contained: String(zC),
          total: String(ZC)
        }), (0, iC.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, iC.jsx)("span", {
            style: {
              width: zC / ZC * 100 + "%"
            }
          })
        })]
      })
    }

    function OC(CC) {
      let {
        entry: zC,
        fileNumber: ZC
      } = CC;
      const {
        t: QC
      } = (0, WC.y)(), wC = "codexContained" === zC.codexEntryState;
      return (0, iC.jsx)("section", {
        className: "BoardDetail",
        children: (0, iC.jsxs)("article", {
          className: qC()("CodexDossier", TC[zC.codexEntryState]),
          children: [(0, iC.jsx)("span", {
            className: "CodexFileNumber",
            children: QC(`${vC}:codexFileNumber`, {
              number: String(ZC).padStart(3, "0")
            })
          }), (0, iC.jsx)(lC, {
            icon: (0, iC.jsx)(yC, {
              entry: zC
            }),
            name: jC(zC),
            children: (0, iC.jsx)(DC, {
              entry: zC
            })
          }), wC && (0, iC.jsxs)(iC.Fragment, {
            children: [(0, iC.jsx)("p", {
              className: "BoardDescription",
              children: zC.codexEntryLore
            }), (0, iC.jsxs)("p", {
              className: "CodexTally",
              children: [QC(`${vC}:codexContainments`, {
                count: String(zC.codexEntryContainedCount)
              }), (0, iC.jsx)(UC, {
                count: zC.codexEntryContainedCount
              })]
            }), (0, iC.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: QC(`${vC}:codexContainedBadge`)
            })]
          }), !wC && (0, iC.jsxs)(iC.Fragment, {
            children: [(0, iC.jsxs)("div", {
              className: "CodexRedaction",
              children: [tC.map((CC => (0, iC.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: CC
                }
              }, CC))), (0, iC.jsx)("p", {
                className: "CodexRedacted",
                children: QC(`${vC}:codexRedacted`)
              })]
            }), "" !== zC.codexEntryHint && (0, iC.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, iC.jsx)("h4", {
                children: QC(`${vC}:codexHintLabel`)
              }), (0, iC.jsx)("p", {
                children: zC.codexEntryHint
              })]
            }), (0, iC.jsx)("p", {
              className: "CodexClearance",
              children: QC(sC[zC.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function kC(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, FC.f)(uC, zC.getSnapshot()),
        {
          t: QC
        } = (0, WC.y)();
      if (0 === ZC.entries.length) return null;
      const wC = ZC.entries.find((CC => CC.codexEntryId === ZC.selectedId)),
        bC = ZC.entries.filter((CC => "codexContained" === CC.codexEntryState)).length,
        nC = ZC.entries.map((CC => CC.codexEntryId)).sort().indexOf(wC.codexEntryId) + 1;
      return (0, iC.jsxs)(hC, {
        open: ZC.open,
        onDismiss: zC.dismiss,
        title: QC(`${vC}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, iC.jsx)(BC, {
          contained: bC,
          total: ZC.entries.length
        }),
        children: [(0, iC.jsx)("div", {
          className: "BoardTiles",
          children: ZC.entries.map((CC => (0, iC.jsx)(LC, {
            entry: CC,
            selected: CC === wC,
            onSelect: zC.select
          }, CC.codexEntryId)))
        }), (0, iC.jsx)(OC, {
          entry: wC,
          fileNumber: nC
        })]
      })
    }
    var VC = ZC(326);
    class Cz extends cC.e {
      constructor(CC, zC, ZC, QC, wC, bC) {
        super(CC, zC, ZC), this.pacer = QC, this.command = wC, this.predict = bC, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = CC => {
          this.selectedId = CC, this.emit()
        }, this.act = (CC, zC) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${CC} ${zC}`, this.rollBack)) return;
          const ZC = this.predict(this.board, CC, zC);
          null !== ZC && (this.board = ZC.board, this.notice = ZC.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = QC.subscribe((() => {
          this.emit()
        }))
      }
      Ag(CC) {
        const zC = this.messageOpens(CC);
        if (zC && this.open) return this.board === this.confirmed && (this.board = CC), this.confirmed = CC, void this.emit();
        if (this.board = CC, this.confirmed = CC, this.pacer.onReply(), zC) return this.notice = null, this.selectedId = this.openingSelection(CC), void this.show();
        const ZC = this.messageNotice(CC);
        null !== ZC && (this.notice = ZC), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function zz(CC, zC) {
      return CC.loadoutCoins >= zC.loadoutCostCoins && zC.loadoutCostParts.every((zC => function(CC, zC) {
        return Zz(CC, zC).loadoutHeldPartAmount
      }(CC, zC.loadoutPartCurrency) >= zC.loadoutPartAmount))
    }

    function Zz(CC, zC) {
      return CC.loadoutHeldParts.find((CC => CC.loadoutHeldPartCurrency === zC))
    }

    function Qz(CC, zC) {
      return CC.loadoutSlots.find((CC => CC.loadoutSlotKind === zC))
    }

    function wz(CC) {
      return CC.loadoutPerks.filter((CC => CC.loadoutPerkEquipped)).length >= CC.loadoutMaxPerks
    }

    function bz(CC, zC, ZC) {
      for (const wC of CC.loadoutSlots) {
        const QC = wC.loadoutSlotOptions.find((CC => CC.loadoutOptionId === ZC));
        if (QC) return "loadoutArmour" === wC.loadoutSlotKind ? fz(CC, wC, QC, zC) : nz(CC, wC, QC, zC)
      }
      const QC = CC.loadoutPerks.find((CC => CC.loadoutPerkId === ZC));
      return QC ? function(CC, zC, ZC) {
        const QC = zC.loadoutPerkOwned,
          wC = zC.loadoutPerkEquipped,
          bC = zC.loadoutPerkName,
          nC = wz(CC);
        if ("loadoutUnlock" === ZC) {
          if (QC || !zz(CC, zC.loadoutPerkCost)) return null;
          const ZC = {
            ...zC,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !nC
          };
          return {
            board: qz(Fz(CC, zC.loadoutPerkCost), ZC),
            notice: Wz(nC ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", bC)
          }
        }
        if ("loadoutUpgrade" === ZC || !QC || "loadoutEquip" === ZC === wC || !wC && nC) return null;
        return {
          board: qz(CC, {
            ...zC,
            loadoutPerkEquipped: !wC
          }),
          notice: Wz(wC ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", bC)
        }
      }(CC, QC, zC) : null
    }

    function nz(CC, zC, ZC, QC) {
      const wC = ZC.loadoutOptionOwnedTier,
        bC = ZC.loadoutOptionName;
      if ("loadoutEquip" === QC) return 0 === wC ? null : {
        board: oz(CC, zC, ZC.loadoutOptionId, null),
        notice: Wz("loadoutNoticeEquipped", bC)
      };
      const nC = "loadoutUnlock" === QC;
      if (nC && 0 !== wC || "loadoutUpgrade" === QC && (0 === wC || wC >= ZC.loadoutOptionTiers.length) || "loadoutUnequip" === QC) return null;
      const fC = ZC.loadoutOptionTiers[wC].loadoutTierCost;
      if (!zz(CC, fC)) return null;
      const oC = {
          ...ZC,
          loadoutOptionOwnedTier: wC + 1
        },
        qC = nC ? ZC.loadoutOptionId : zC.loadoutSlotEquippedId;
      return {
        board: oz(Fz(CC, fC), zC, qC, oC),
        notice: nC ? Wz("loadoutNoticeUnlocked", bC) : Wz("loadoutNoticeUpgraded", bC, wC + 1)
      }
    }

    function fz(CC, zC, ZC, QC) {
      const wC = ZC.loadoutOptionOwnedTier > 0,
        bC = ZC.loadoutOptionName;
      if ("loadoutEquip" === QC && wC) return {
        board: oz(CC, zC, ZC.loadoutOptionId, null),
        notice: Wz("loadoutNoticeEquipped", bC)
      };
      const nC = ZC.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== QC || wC || !zz(CC, nC) ? null : {
        board: oz(Fz(CC, nC), zC, ZC.loadoutOptionId, {
          ...ZC,
          loadoutOptionOwnedTier: 1
        }),
        notice: Wz("loadoutNoticeUnlocked", bC)
      }
    }

    function oz(CC, zC, ZC, QC) {
      const wC = {
        ...zC,
        loadoutSlotEquippedId: ZC,
        loadoutSlotOptions: zC.loadoutSlotOptions.map((CC => null !== QC && CC.loadoutOptionId === QC.loadoutOptionId ? QC : CC))
      };
      return {
        ...CC,
        loadoutSlots: CC.loadoutSlots.map((CC => CC === zC ? wC : CC))
      }
    }

    function qz(CC, zC) {
      return {
        ...CC,
        loadoutPerks: CC.loadoutPerks.map((CC => CC.loadoutPerkId === zC.loadoutPerkId ? zC : CC))
      }
    }

    function Fz(CC, zC) {
      return {
        ...CC,
        loadoutCoins: CC.loadoutCoins - zC.loadoutCostCoins,
        loadoutHeldParts: CC.loadoutHeldParts.map((CC => {
          const ZC = zC.loadoutCostParts.find((zC => zC.loadoutPartCurrency === CC.loadoutHeldPartCurrency));
          return ZC ? {
            ...CC,
            loadoutHeldPartAmount: CC.loadoutHeldPartAmount - ZC.loadoutPartAmount
          } : CC
        }))
      }
    }

    function Wz(CC, zC) {
      return {
        loadoutNoticeKey: CC,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: zC,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Nz = "containmentLoadoutView";
    class Mz extends Cz {
      constructor(CC, zC, ZC, QC) {
        super(CC, zC, ZC, QC, "loadout", bz), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = CC => {
          this.slot = CC, this.selectedId = gz(this.board, CC), this.emit()
        }
      }
      messageOpens(CC) {
        return CC.loadoutMessageOpens
      }
      messageNotice(CC) {
        return CC.loadoutNotice
      }
      openingSelection(CC) {
        return gz(CC, this.slot)
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

    function gz(CC, zC) {
      if ("loadoutPerks" === zC) {
        var ZC;
        const zC = CC.loadoutPerks;
        return (null !== (ZC = zC.find((CC => CC.loadoutPerkEquipped))) && void 0 !== ZC ? ZC : zC[0]).loadoutPerkId
      }
      return Qz(CC, zC).loadoutSlotEquippedId
    }
    const Sz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var pz = ZC(36747),
      Pz = ZC(1228);
    const Gz = {
        loadoutPrimary: `${vC}:loadoutSlotPrimary`,
        loadoutSecondary: `${vC}:loadoutSlotSecondary`,
        loadoutOffensive: `${vC}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${vC}:loadoutSlotSelfHelp`,
        loadoutArmour: `${vC}:loadoutSlotArmour`,
        loadoutPerks: `${vC}:loadoutSlotPerks`
      },
      Rz = {
        section: "right",
        CM: "bottom",
        act: "top"
      },
      Az = (0, QC.createContext)({
        step: null,
        targetRef: () => {}
      });

    function xz() {
      const {
        step: CC,
        targetRef: zC
      } = (0, QC.useContext)(Az);
      return (ZC, QC) => (null === CC || void 0 === CC ? void 0 : CC.kind) === ZC && CC.id === QC ? zC : void 0
    }

    function Jz(CC, zC) {
      const ZC = zC.loadoutTargetId;
      if ("loadoutPerks" === zC.loadoutTargetSection) {
        const zC = CC.loadoutPerks.find((CC => CC.loadoutPerkId === ZC));
        return {
          name: zC.loadoutPerkName,
          owned: zC.loadoutPerkOwned,
          equipped: zC.loadoutPerkEquipped
        }
      }
      const QC = Qz(CC, zC.loadoutTargetSection),
        wC = QC.loadoutSlotOptions.find((CC => CC.loadoutOptionId === ZC));
      return {
        name: wC.loadoutOptionName,
        owned: wC.loadoutOptionOwnedTier > 0,
        equipped: QC.loadoutSlotEquippedId === ZC
      }
    }

    function Iz(CC, zC, ZC, QC) {
      const [wC, bC] = CC(`${vC}:${zC}`, {
        [ZC]: "\x01"
      }).split("\x01");
      return (0, iC.jsxs)(iC.Fragment, {
        children: [wC, (0, iC.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: QC
        }), bC]
      })
    }

    function iz(CC) {
      let {
        view: zC,
        onDismiss: ZC,
        children: wC
      } = CC;
      const {
        t: bC
      } = (0, WC.y)(), nC = zC.loadout, fC = zC.open ? nC.loadoutWalkthrough.map((CC => ({
        target: CC,
        info: Jz(nC, CC)
      }))).find((CC => {
        let {
          info: zC
        } = CC;
        return !zC.equipped
      })) : void 0;
      let oC = null,
        qC = null;
      if (void 0 !== fC) {
        const {
          target: CC,
          info: ZC
        } = fC;
        zC.slot !== CC.loadoutTargetSection ? (oC = {
          kind: "section",
          id: CC.loadoutTargetSection
        }, qC = Iz(bC, "loadoutWalkthroughSection", "section", bC(Gz[CC.loadoutTargetSection]))) : zC.selectedId !== CC.loadoutTargetId ? (oC = {
          kind: "CM",
          id: CC.loadoutTargetId
        }, qC = Iz(bC, "loadoutWalkthroughPick", "name", ZC.name)) : (oC = {
          kind: "act",
          id: CC.loadoutTargetId
        }, qC = Iz(bC, ZC.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", ZC.name))
      }
      const FC = null === oC ? null : function(CC) {
          return `${CC.kind}:${CC.id}`
        }(oC),
        [NC, MC] = (0, QC.useState)(null),
        gC = (0, QC.useCallback)((CC => {
          MC((zC => null !== CC ? {
            key: FC,
            node: CC
          } : (null === zC || void 0 === zC ? void 0 : zC.key) === FC ? null : zC))
        }), [FC]),
        SC = null !== FC && (null === NC || void 0 === NC ? void 0 : NC.key) === FC ? NC.node : null;
      return (0, iC.jsxs)(Az.Provider, {
        value: {
          step: oC,
          targetRef: gC
        },
        children: [wC, null !== oC && null !== SC && (0, iC.jsx)(vz, {
          target: SC,
          placement: Rz[oC.kind],
          onDismiss: ZC,
          children: qC
        }, FC)]
      })
    }

    function vz(CC) {
      let {
        target: zC,
        placement: ZC,
        onDismiss: wC,
        children: bC
      } = CC;
      const {
        t: nC
      } = (0, WC.y)(), fC = (0, QC.useRef)(zC);
      return fC.current = zC, (0, Pz.u)("popup", fC, wC), (0, iC.jsxs)(pz.g, {
        target: zC,
        placement: ZC,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, iC.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, iC.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Sz,
            alt: "",
            draggable: !1
          }), (0, iC.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: nC(`${vC}:operatorName`)
          }), (0, iC.jsx)(gC.k, {
            onClick: wC,
            ariaLabel: nC(`${vC}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, iC.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: bC
        })]
      })
    }
    const ez = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function hz(CC) {
      let {
        cost: zC,
        loadout: ZC
      } = CC;
      const {
        t: QC
      } = (0, WC.y)();
      return zC.loadoutCostCoins <= 0 && 0 === zC.loadoutCostParts.length ? (0, iC.jsx)("span", {
        className: "LoadoutCost",
        children: QC(`${vC}:loadoutFree`)
      }) : (0, iC.jsxs)("span", {
        className: "LoadoutCost",
        children: [zC.loadoutCostCoins > 0 && (0, iC.jsx)(dC, {
          itemName: eC,
          amount: zC.loadoutCostCoins,
          vq: ZC.loadoutCoins
        }), zC.loadoutCostParts.map((CC => {
          const zC = Zz(ZC, CC.loadoutPartCurrency);
          return (0, iC.jsx)(dC, {
            itemName: zC.loadoutHeldPartItem,
            amount: CC.loadoutPartAmount,
            vq: zC.loadoutHeldPartAmount
          }, CC.loadoutPartCurrency)
        }))]
      })
    }
    const Kz = {
      loadoutStatFireRate: `${vC}:loadoutUnitPerMinute`,
      loadoutStatReload: `${vC}:loadoutUnitSeconds`,
      loadoutStatResupply: `${vC}:loadoutUnitSeconds`
    };

    function Yz(CC) {
      return "loadoutStatPotency" === CC.loadoutStatKind ? (0, VC.M)(CC.loadoutStatValue) : String(CC.loadoutStatValue)
    }

    function dz(CC) {
      var zC;
      let {
        option: ZC
      } = CC;
      const {
        t: QC
      } = (0, WC.y)(), wC = ZC.loadoutOptionTiers, bC = null === (zC = wC[0]) || void 0 === zC ? void 0 : zC.loadoutTierStats.map((CC => CC.loadoutStatKind));
      if (!bC || 0 === bC.length) return null;
      const nC = ZC.loadoutOptionOwnedTier,
        fC = (CC, zC) => {
          var ZC;
          return null === (ZC = wC[CC]) || void 0 === ZC ? void 0 : ZC.loadoutTierStats.find((CC => CC.loadoutStatKind === zC))
        };
      return (0, iC.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, iC.jsx)("thead", {
          children: (0, iC.jsxs)("tr", {
            children: [(0, iC.jsx)("th", {}), wC.map(((CC, zC) => (0, iC.jsx)("th", {
              className: qC()({
                Current: zC + 1 === nC,
                Next: zC === nC
              }),
              children: QC(`${vC}:loadoutTier`, {
                tier: (0, VC.M)(zC + 1)
              })
            }, zC)))]
          })
        }), (0, iC.jsx)("tbody", {
          children: bC.map((CC => {
            const zC = Kz[CC];
            return (0, iC.jsxs)("tr", {
              children: [(0, iC.jsxs)("th", {
                scope: "row",
                children: [QC(`${vC}:${CC}`), zC && (0, iC.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: QC(zC)
                })]
              }), wC.map(((zC, ZC) => {
                const QC = fC(ZC, CC),
                  wC = ZC > 0 ? fC(ZC - 1, CC) : void 0,
                  bC = QC && wC ? QC.loadoutStatValue - wC.loadoutStatValue : 0,
                  oC = ez.has(CC) ? bC < 0 : bC > 0,
                  FC = ZC === nC;
                return (0, iC.jsxs)("td", {
                  className: qC()({
                    Current: ZC + 1 === nC,
                    Next: FC,
                    Gain: oC,
                    Owned: ZC < nC
                  }),
                  children: [FC && oC && (0, iC.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: bC < 0 ? "\u25bc" : "\u25b2"
                  }), QC ? Yz(QC) : "-"]
                }, ZC)
              }))]
            }, CC)
          }))
        })]
      })
    }

    function mz(CC) {
      let {
        view: zC,
        controller: ZC,
        slot: QC,
        option: wC
      } = CC;
      const {
        t: bC
      } = (0, WC.y)(), nC = zC.loadout, fC = wC.loadoutOptionOwnedTier, oC = wC.loadoutOptionTiers.length, qC = QC.loadoutSlotEquippedId === wC.loadoutOptionId, FC = fC < oC ? wC.loadoutOptionTiers[fC].loadoutTierCost : null, NC = null !== FC && zz(nC, FC), MC = wC.loadoutOptionId, SC = xz();
      return (0, iC.jsxs)(iC.Fragment, {
        children: [(0, iC.jsx)(Ez, {
          icon: wC.loadoutOptionIcon,
          name: wC.loadoutOptionName,
          status: 0 === fC ? bC(`${vC}:loadoutLocked`) : oC > 1 ? bC(`${vC}:loadoutTier`, {
            tier: (0, VC.M)(fC)
          }) : null,
          locked: 0 === fC,
          equipped: qC
        }), (0, iC.jsx)("p", {
          className: "BoardDescription",
          children: wC.loadoutOptionDescription
        }), (0, iC.jsx)(dz, {
          option: wC
        }), (0, iC.jsxs)("div", {
          ref: SC("act", MC),
          className: "BoardActions",
          children: [null !== FC && (0, iC.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, iC.jsx)(hz, {
              cost: FC,
              loadout: nC
            }), (0, iC.jsx)(gC.o, {
              disabled: !NC || zC.pending,
              onClick: () => {
                ZC.act(0 === fC ? "loadoutUnlock" : "loadoutUpgrade", MC)
              },
              children: 0 === fC ? bC(`${vC}:loadoutUnlock`) : bC(`${vC}:loadoutUpgrade`, {
                tier: (0, VC.M)(fC + 1)
              })
            })]
          }), null === FC && oC > 1 && (0, iC.jsx)("span", {
            className: "BoardHint",
            children: bC(`${vC}:loadoutMaxed`)
          }), fC > 0 && !qC && (0, iC.jsx)(gC.g, {
            disabled: zC.pending,
            onClick: () => {
              ZC.act("loadoutEquip", MC)
            },
            children: bC(`${vC}:loadoutEquip`)
          })]
        })]
      })
    }

    function Hz(CC) {
      let {
        view: zC,
        controller: ZC,
        perk: QC
      } = CC;
      const {
        t: wC
      } = (0, WC.y)(), bC = zC.loadout, nC = wz(bC), fC = QC.loadoutPerkId, oC = xz();
      return (0, iC.jsxs)(iC.Fragment, {
        children: [(0, iC.jsx)(Ez, {
          icon: QC.loadoutPerkIcon,
          name: QC.loadoutPerkName,
          status: QC.loadoutPerkOwned ? null : wC(`${vC}:loadoutLocked`),
          locked: !QC.loadoutPerkOwned,
          equipped: QC.loadoutPerkEquipped
        }), (0, iC.jsx)("p", {
          className: "BoardDescription",
          children: QC.loadoutPerkDescription
        }), (0, iC.jsxs)("div", {
          ref: oC("act", fC),
          className: "BoardActions",
          children: [!QC.loadoutPerkOwned && (0, iC.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, iC.jsx)(hz, {
              cost: QC.loadoutPerkCost,
              loadout: bC
            }), (0, iC.jsx)(gC.o, {
              disabled: !zz(bC, QC.loadoutPerkCost) || zC.pending,
              onClick: () => {
                ZC.act("loadoutUnlock", fC)
              },
              children: wC(`${vC}:loadoutUnlock`)
            })]
          }), QC.loadoutPerkOwned && !QC.loadoutPerkEquipped && (0, iC.jsx)(gC.g, {
            disabled: nC || zC.pending,
            onClick: () => {
              ZC.act("loadoutEquip", fC)
            },
            children: wC(`${vC}:loadoutEquip`)
          }), QC.loadoutPerkOwned && !QC.loadoutPerkEquipped && nC && (0, iC.jsx)("span", {
            className: "BoardHint",
            children: wC(`${vC}:loadoutSocketsFullHint`)
          }), QC.loadoutPerkEquipped && (0, iC.jsx)(gC.O, {
            disabled: zC.pending,
            onClick: () => {
              ZC.act("loadoutUnequip", fC)
            },
            children: wC(`${vC}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Ez(CC) {
      let {
        icon: zC,
        name: ZC,
        status: QC,
        locked: wC,
        equipped: bC
      } = CC;
      const {
        t: nC
      } = (0, WC.y)();
      return (0, iC.jsxs)(lC, {
        icon: (0, iC.jsx)(KC, {
          itemName: zC
        }),
        name: ZC,
        children: [null !== QC && (0, iC.jsx)("span", {
          className: qC()("LoadoutStatusText", {
            Locked: wC
          }),
          children: QC
        }), bC && (0, iC.jsx)("span", {
          className: "BoardBadge",
          children: nC(`${vC}:loadoutEquippedBadge`)
        })]
      })
    }

    function lz(CC) {
      let {
        view: zC,
        controller: ZC
      } = CC;
      const QC = zC.loadout;
      if ("loadoutPerks" === zC.slot) {
        const CC = QC.loadoutPerks.find((CC => CC.loadoutPerkId === zC.selectedId));
        return (0, iC.jsx)("section", {
          className: "BoardDetail",
          children: CC && (0, iC.jsx)(Hz, {
            view: zC,
            controller: ZC,
            perk: CC
          })
        })
      }
      const wC = Qz(QC, zC.slot),
        bC = wC.loadoutSlotOptions.find((CC => CC.loadoutOptionId === zC.selectedId));
      return (0, iC.jsx)("section", {
        className: "BoardDetail",
        children: bC && (0, iC.jsx)(mz, {
          view: zC,
          controller: ZC,
          slot: wC,
          option: bC
        })
      })
    }

    function Xz(CC) {
      let {
        owned: zC,
        total: ZC
      } = CC;
      return ZC <= 1 ? null : (0, iC.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: ZC
        }, ((CC, ZC) => (0, iC.jsx)("span", {
          className: qC()("LoadoutPip", {
            Filled: ZC < zC
          })
        }, ZC)))
      })
    }

    function cz(CC) {
      let {
        view: zC,
        controller: ZC
      } = CC;
      const {
        t: QC
      } = (0, WC.y)(), wC = zC.loadout, bC = xz();
      return (0, iC.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": QC(`${vC}:loadoutKit`),
        children: [wC.loadoutSlots.map((CC => {
          const wC = CC.loadoutSlotOptions.find((zC => zC.loadoutOptionId === CC.loadoutSlotEquippedId));
          return (0, iC.jsxs)("button", {
            ref: bC("section", CC.loadoutSlotKind),
            type: "button",
            className: qC()("LoadoutKitSlot", {
              Selected: zC.slot === CC.loadoutSlotKind
            }),
            onClick: () => {
              ZC.selectSlot(CC.loadoutSlotKind)
            },
            children: [(0, iC.jsx)("span", {
              className: "LoadoutKitIcon",
              children: wC && (0, iC.jsx)(KC, {
                itemName: wC.loadoutOptionIcon
              })
            }), (0, iC.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, iC.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, iC.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: QC(Gz[CC.loadoutSlotKind])
                }), wC && (0, iC.jsx)(Xz, {
                  owned: wC.loadoutOptionOwnedTier,
                  total: wC.loadoutOptionTiers.length
                })]
              }), (0, iC.jsx)("span", {
                className: "LoadoutKitName",
                children: null === wC || void 0 === wC ? void 0 : wC.loadoutOptionName
              })]
            })]
          }, CC.loadoutSlotKind)
        })), (0, iC.jsx)(uz, {
          view: zC,
          controller: ZC
        })]
      })
    }

    function uz(CC) {
      let {
        view: zC,
        controller: ZC
      } = CC;
      const {
        t: QC
      } = (0, WC.y)(), wC = zC.loadout, bC = wC.loadoutPerks.filter((CC => CC.loadoutPerkEquipped)), nC = xz();
      return (0, iC.jsxs)("button", {
        ref: nC("section", "loadoutPerks"),
        type: "button",
        className: qC()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === zC.slot
        }),
        onClick: () => {
          ZC.selectSlot("loadoutPerks")
        },
        children: [(0, iC.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, iC.jsx)("span", {
            className: "LoadoutKitLabel",
            children: QC(Gz.loadoutPerks)
          }), (0, iC.jsx)("span", {
            className: "LoadoutPerkCount",
            children: QC(`${vC}:loadoutPerkCount`, {
              equipped: String(bC.length),
              max: String(wC.loadoutMaxPerks)
            })
          })]
        }), (0, iC.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: wC.loadoutMaxPerks
          }, ((CC, zC) => {
            const ZC = bC[zC];
            return (0, iC.jsxs)("span", {
              className: qC()("LoadoutSocket", {
                Filled: ZC,
                Empty: !ZC
              }),
              children: [(0, iC.jsx)("span", {
                className: "LoadoutSocketWell",
                children: ZC && (0, iC.jsx)(KC, {
                  itemName: ZC.loadoutPerkIcon
                })
              }), (0, iC.jsx)("span", {
                className: "LoadoutSocketName",
                children: ZC ? ZC.loadoutPerkName : QC(`${vC}:loadoutPerkSocketEmpty`)
              })]
            }, zC)
          }))
        })]
      })
    }

    function rz(CC) {
      let {
        icon: zC,
        name: ZC,
        selected: QC,
        equipped: wC,
        locked: bC,
        ownedTier: nC,
        tiers: fC,
        buttonRef: oC,
        onSelect: qC
      } = CC;
      const {
        t: FC
      } = (0, WC.y)();
      return (0, iC.jsxs)(EC, {
        icon: (0, iC.jsx)(KC, {
          itemName: zC
        }),
        name: ZC,
        selected: QC,
        locked: bC,
        buttonRef: oC,
        onSelect: qC,
        children: [wC && (0, iC.jsx)("span", {
          className: "BoardBadge",
          children: FC(`${vC}:loadoutEquippedBadge`)
        }), bC && (0, iC.jsx)("span", {
          className: "BoardBadge Muted",
          children: FC(`${vC}:loadoutLocked`)
        }), !bC && (0, iC.jsx)(Xz, {
          owned: nC,
          total: fC
        })]
      })
    }

    function sz(CC) {
      let {
        view: zC,
        controller: ZC
      } = CC;
      const QC = zC.loadout,
        wC = xz();
      if ("loadoutPerks" === zC.slot) return (0, iC.jsx)("div", {
        className: "BoardTiles",
        children: QC.loadoutPerks.map((CC => (0, iC.jsx)(rz, {
          icon: CC.loadoutPerkIcon,
          name: CC.loadoutPerkName,
          selected: zC.selectedId === CC.loadoutPerkId,
          equipped: CC.loadoutPerkEquipped,
          locked: !CC.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: wC("CM", CC.loadoutPerkId),
          onSelect: () => {
            ZC.select(CC.loadoutPerkId)
          }
        }, CC.loadoutPerkId)))
      });
      const bC = Qz(QC, zC.slot);
      return (0, iC.jsx)("div", {
        className: "BoardTiles",
        children: bC.loadoutSlotOptions.map((CC => (0, iC.jsx)(rz, {
          icon: CC.loadoutOptionIcon,
          name: CC.loadoutOptionName,
          selected: zC.selectedId === CC.loadoutOptionId,
          equipped: bC.loadoutSlotEquippedId === CC.loadoutOptionId,
          locked: 0 === CC.loadoutOptionOwnedTier,
          ownedTier: CC.loadoutOptionOwnedTier,
          tiers: CC.loadoutOptionTiers.length,
          buttonRef: wC("CM", CC.loadoutOptionId),
          onSelect: () => {
            ZC.select(CC.loadoutOptionId)
          }
        }, CC.loadoutOptionId)))
      })
    }

    function Tz(CC) {
      let {
        loadout: zC
      } = CC;
      return (0, iC.jsx)(XC, {
        coins: zC.loadoutCoins,
        children: zC.loadoutHeldParts.filter((CC => CC.loadoutHeldPartAmount > 0)).map((CC => (0, iC.jsx)(dC, {
          itemName: CC.loadoutHeldPartItem,
          amount: CC.loadoutHeldPartAmount
        }, CC.loadoutHeldPartCurrency)))
      })
    }

    function az(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, FC.f)(Nz, zC.getSnapshot()),
        {
          t: QC
        } = (0, WC.y)();
      if (null === ZC.loadout) return null;
      const wC = ZC.notice;
      return (0, iC.jsx)(iz, {
        view: ZC,
        onDismiss: zC.dismiss,
        children: (0, iC.jsxs)(hC, {
          open: ZC.open,
          onDismiss: zC.dismiss,
          title: QC(`${vC}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, iC.jsx)(Tz, {
            loadout: ZC.loadout
          }),
          statusRefused: null === wC || void 0 === wC ? void 0 : wC.loadoutNoticeRefused,
          status: (0, iC.jsxs)(iC.Fragment, {
            children: [(0, iC.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: QC(`${vC}:loadoutRadioBadge`)
            }), null !== wC && QC(`${vC}:${wC.loadoutNoticeKey}`, {
              name: wC.loadoutNoticeName,
              tier: (0, VC.M)(wC.loadoutNoticeTier),
              max: String(ZC.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, iC.jsx)(cz, {
            view: ZC,
            controller: zC
          }), (0, iC.jsx)(sz, {
            view: ZC,
            controller: zC
          }), (0, iC.jsx)(lz, {
            view: ZC,
            controller: zC
          })]
        })
      })
    }

    function tz(CC, zC, ZC) {
      const QC = CC.locatorEntries.find((CC => CC.locatorEntryId === ZC));
      if (!QC) return null;
      const wC = QC.locatorEntryName;
      if ("locatorDisarm" === zC) return QC.locatorEntryArmed ? {
        board: Dz(CC, null),
        notice: jz("locatorNoticeDisarmed", wC)
      } : null;
      if ("locatorArm" === zC) return QC.locatorEntryOwned && !QC.locatorEntryArmed ? {
        board: Dz(CC, ZC),
        notice: jz("locatorNoticeArmed", wC)
      } : null;
      if (QC.locatorEntryOwned || CC.locatorCoins < QC.locatorEntryPrice) return null;
      const bC = Dz({
        ...CC,
        locatorCoins: CC.locatorCoins - QC.locatorEntryPrice
      }, ZC);
      return {
        board: {
          ...bC,
          locatorEntries: bC.locatorEntries.map((CC => CC.locatorEntryId === ZC ? {
            ...CC,
            locatorEntryOwned: !0
          } : CC))
        },
        notice: jz("locatorNoticeBought", wC)
      }
    }

    function Dz(CC, zC) {
      return {
        ...CC,
        locatorEntries: CC.locatorEntries.map((CC => {
          const ZC = CC.locatorEntryId === zC;
          return CC.locatorEntryArmed === ZC ? CC : {
            ...CC,
            locatorEntryArmed: ZC
          }
        }))
      }
    }

    function jz(CC, zC) {
      return {
        locatorNoticeKey: CC,
        locatorNoticeRefused: !1,
        locatorNoticeName: zC
      }
    }
    const yz = "containmentLocatorView";
    class Lz extends Cz {
      constructor(CC, zC, ZC, QC) {
        super(CC, zC, ZC, QC, "locator", tz), this.snapshot = this.buildSnapshot()
      }
      messageOpens(CC) {
        return CC.locatorMessageOpens
      }
      messageNotice(CC) {
        return CC.locatorNotice
      }
      openingSelection(CC) {
        var zC;
        const ZC = CC.locatorEntries;
        return (null !== (zC = ZC.find((CC => CC.locatorEntryArmed))) && void 0 !== zC ? zC : ZC[0]).locatorEntryId
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
    const Uz = {
        locatorContained: `${vC}:locatorFlavourContained`,
        locatorEncountered: `${vC}:locatorFlavourEncountered`,
        locatorUnseen: `${vC}:locatorFlavourUnseen`
      },
      Bz = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${vC}:locatorAttunedNormal`,
        codexHardOnly: `${vC}:locatorAttunedHard`
      };

    function Oz() {
      return (0, iC.jsx)(iC.Fragment, {
        children: Array.from({
          length: 5
        }, ((CC, zC) => (0, iC.jsx)("span", {
          className: "LocatorFly",
          children: (0, iC.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, zC)))
      })
    }

    function kz(CC) {
      let {
        entry: zC
      } = CC;
      const {
        t: ZC
      } = (0, WC.y)();
      return zC.locatorEntryArmed ? (0, iC.jsx)("span", {
        className: "BoardBadge Armed",
        children: ZC(`${vC}:locatorArmedBadge`)
      }) : zC.locatorEntryOwned ? (0, iC.jsx)("span", {
        className: "BoardBadge",
        children: ZC(`${vC}:locatorOwnedBadge`)
      }) : null
    }

    function Vz(CC) {
      let {
        entry: zC,
        coins: ZC,
        inTile: QC = !1
      } = CC;
      return (0, iC.jsx)(dC, {
        itemName: eC,
        amount: zC.locatorEntryPrice,
        vq: ZC,
        inTile: QC
      })
    }

    function CZ(CC) {
      let {
        view: zC,
        controller: ZC,
        entry: QC
      } = CC;
      const {
        t: wC
      } = (0, WC.y)(), bC = QC.locatorEntryId, nC = zC.locators.locatorEntries.find((CC => CC.locatorEntryArmed && CC !== QC));
      return (0, iC.jsxs)("div", {
        className: "BoardActions",
        children: [QC.locatorEntryArmed && (0, iC.jsx)(gC.O, {
          disabled: zC.pending,
          onClick: () => {
            ZC.act("locatorDisarm", bC)
          },
          children: wC(`${vC}:locatorDisarm`)
        }), QC.locatorEntryOwned && !QC.locatorEntryArmed && (0, iC.jsx)(gC.g, {
          disabled: zC.pending,
          onClick: () => {
            ZC.act("locatorArm", bC)
          },
          children: wC(`${vC}:locatorArm`)
        }), !QC.locatorEntryOwned && (0, iC.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, iC.jsx)(Vz, {
            entry: QC,
            coins: zC.locators.locatorCoins
          }), (0, iC.jsx)(gC.o, {
            disabled: zC.locators.locatorCoins < QC.locatorEntryPrice || zC.pending,
            onClick: () => {
              ZC.act("locatorBuy", bC)
            },
            children: wC(`${vC}:locatorBuy`)
          })]
        }), nC && !QC.locatorEntryArmed && (0, iC.jsx)("span", {
          className: "BoardHint",
          children: wC(`${vC}:locatorReplacesHint`, {
            name: nC.locatorEntryName
          })
        })]
      })
    }

    function zZ(CC) {
      let {
        entry: zC
      } = CC;
      return "locatorUnseen" === zC.locatorEntryStanding ? (0, iC.jsx)(KC, {
        itemName: "Compass"
      }) : (0, iC.jsx)(YC, {
        anomalyId: zC.locatorEntryId,
        caught: "locatorContained" === zC.locatorEntryStanding
      })
    }

    function ZZ(CC) {
      let {
        view: zC,
        controller: ZC,
        entry: QC
      } = CC;
      const {
        t: wC
      } = (0, WC.y)(), bC = Bz[QC.locatorEntryDifficulty];
      return (0, iC.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, iC.jsxs)("div", {
          className: qC()("LocatorLabel", {
            Armed: QC.locatorEntryArmed
          }),
          children: [(0, iC.jsx)(lC, {
            icon: (0, iC.jsx)(zZ, {
              entry: QC
            }),
            name: wC(`${vC}:locatorName`, {
              name: QC.locatorEntryName
            }),
            children: (0, iC.jsx)(kz, {
              entry: QC
            })
          }), (0, iC.jsx)("p", {
            className: "BoardDescription",
            children: wC(QC.locatorEntryArmed ? `${vC}:locatorFlavourArmed` : Uz[QC.locatorEntryStanding])
          }), null !== bC && (0, iC.jsx)("p", {
            className: "LocatorAttuned",
            children: wC(bC)
          }), (0, iC.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: wC(`${vC}:locatorUsage`)
          })]
        }), (0, iC.jsx)(CZ, {
          view: zC,
          controller: ZC,
          entry: QC
        })]
      })
    }

    function QZ(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, FC.f)(yz, zC.getSnapshot()),
        {
          t: QC
        } = (0, WC.y)(),
        wC = ZC.locators;
      if (null === wC) return null;
      const bC = wC.locatorEntries.find((CC => CC.locatorEntryId === ZC.selectedId)),
        nC = ZC.notice;
      return (0, iC.jsxs)(hC, {
        open: ZC.open,
        onDismiss: zC.dismiss,
        title: QC(`${vC}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, iC.jsx)(Oz, {}),
        headerExtra: (0, iC.jsx)(XC, {
          coins: wC.locatorCoins
        }),
        statusRefused: null === nC || void 0 === nC ? void 0 : nC.locatorNoticeRefused,
        status: (0, iC.jsxs)(iC.Fragment, {
          children: [(0, iC.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: QC(`${vC}:locatorKeeperName`)
          }), null !== nC && QC(`${vC}:${nC.locatorNoticeKey}`, {
            name: nC.locatorNoticeName
          })]
        }),
        children: [(0, iC.jsx)("div", {
          className: "BoardTiles",
          children: wC.locatorEntries.map((CC => (0, iC.jsxs)(EC, {
            icon: (0, iC.jsx)(zZ, {
              entry: CC
            }),
            name: CC.locatorEntryName,
            selected: CC === bC,
            locked: !1,
            className: qC()("LocatorTag", {
              Armed: CC.locatorEntryArmed
            }),
            onSelect: () => {
              zC.select(CC.locatorEntryId)
            },
            children: [(0, iC.jsx)(kz, {
              entry: CC
            }), !CC.locatorEntryOwned && (0, iC.jsx)(Vz, {
              entry: CC,
              coins: wC.locatorCoins,
              inTile: !0
            })]
          }, CC.locatorEntryId)))
        }), (0, iC.jsx)(ZZ, {
          view: ZC,
          controller: zC,
          entry: bC
        })]
      })
    }

    function wZ(CC) {
      let {
        loadout: zC,
        codex: ZC,
        locator: QC
      } = CC;
      return (0, iC.jsxs)(iC.Fragment, {
        children: [(0, iC.jsx)(az, {
          controller: zC
        }), (0, iC.jsx)(kC, {
          controller: ZC
        }), (0, iC.jsx)(QZ, {
          controller: QC
        })]
      })
    }
    var bZ = ZC(38375);
    class nZ {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = CC, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new bZ.b({
          spacingMs: 0,
          now: zC
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(CC, zC) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, zC(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(CC), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const CC of this.listeners) CC()
      }
    }
    var fZ = ZC(38373);
    const oZ = new Map([
      ["npc_general", Sz],
      ["npc_tentacle_guy", fZ]
    ]);

    function qZ(CC) {
      const zC = oZ.get(CC);
      if (void 0 === zC) return null;
      const ZC = document.createElement("img");
      return ZC.src = zC, ZC.alt = "", ZC.draggable = !1, ZC.style.imageRendering = "pixelated", ZC
    }
    const FZ = function() {
      let CC, zC = !1,
        ZC = null,
        oC = null;
      const qC = [],
        FC = CC => {
          for (const zC of qC) zC !== CC && zC.close();
          (0, fC.u)()
        },
        WC = CC => {
          CC && (0, fC.k)()
        },
        NC = new nZ((zC => {
          CC.sendCommand(zC)
        })),
        MC = new Mz((CC => {
          nC.o.bp(Nz, CC, !0)
        }), FC, WC, NC),
        gC = new rC((CC => {
          nC.o.bp(uC, CC, !0)
        }), FC, WC),
        SC = new Lz((CC => {
          nC.o.bp(yz, CC, !0)
        }), FC, WC, NC);
      qC.push(MC, gC, SC);
      return {
        onCreate: zC => {
          CC = zC, ZC = (0, fC.C)(null, {
            content: (0, QC.createElement)(wZ, {
              loadout: MC,
              codex: gC,
              locator: SC
            }),
            onClose: () => {
              for (const CC of qC) CC.close()
            }
          }), oC = (0, bC.g)(qZ)
        },
        onReceivedMessageFromServer: (CC, zC) => {
          "containmentLoadout" === CC ? MC.Ag(zC) : "containmentLoadoutClose" === CC ? MC.isOpen() && (MC.close(), (0, fC.h)()) : "containmentCodex" === CC ? gC.Ag(zC) : "containmentLocator" === CC && SC.Ag(zC)
        },
        ZN: () => {
          zC || wC.b.get("loadingOverlayVisible") || (zC = !0, CC.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var CC, zC;
          null === (CC = ZC) || void 0 === CC || CC(), ZC = null, null === (zC = oC) || void 0 === zC || zC(), oC = null;
          for (const ZC of qC) ZC.dispose();
          NC.dispose()
        }
      }
    }
  },
  36750: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => cC,
      C: () => EC,
      D: () => uC,
      d: () => oC,
      f: () => KC,
      j: () => fC,
      k: () => HC,
      m: () => eC,
      n: () => JC,
      o: () => mC,
      r: () => dC,
      t: () => vC,
      w: () => lC,
      y: () => XC
    });
    var QC = ZC(38);
    const wC = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      bC = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      nC = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      fC = bC.filter((CC => "docsButton" !== CC)),
      oC = nC.filter((CC => "aiHelperButton" !== CC)),
      qC = "codeEditorTutorials",
      FC = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      WC = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let NC = null,
      MC = null;
    const gC = new Set,
      SC = new Set;
    let pC = null;
    const PC = new Set,
      GC = new Set;

    function RC() {
      GC.forEach((CC => {
        CC()
      }))
    }

    function AC() {
      if (!NC) {
        const CC = QC.i.getItem(qC);
        NC = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof CC && null !== CC ? CC : {}
        }
      }
      return NC
    }

    function xC(CC) {
      const zC = AC();
      zC[CC] || (NC = {
        ...zC,
        [CC]: !0
      }, QC.i.setItem(qC, NC))
    }

    function JC(CC) {
      return "docsOverview" === CC ? bC : "aiHelperOverview" === CC ? nC : MC ? wC[MC] : []
    }

    function IC(CC) {
      return ("worldCodeButton" !== CC || !AC().worldCodeIntroShown) && !PC.has(CC)
    }

    function iC(CC) {
      var zC;
      return (null === (zC = pC) || void 0 === zC ? void 0 : zC.name) === CC ? pC.stepsDone : gC
    }

    function vC(CC, zC) {
      if (! function(CC) {
          return pC ? pC.name === CC : "welcome" === CC
        }(CC) || !IC(zC) || iC(CC).has(zC)) return !1;
      if (pC) return !0;
      const ZC = FC[zC];
      return ZC ? !AC()[ZC] || SC.has(zC) : !AC()[WC[CC]]
    }

    function eC(CC) {
      var zC;
      return null !== (zC = JC(CC).find((zC => vC(CC, zC)))) && void 0 !== zC ? zC : null
    }

    function hC(CC) {
      var zC;
      xC(WC[CC]), (null === (zC = pC) || void 0 === zC ? void 0 : zC.name) === CC && (pC = null)
    }

    function KC(CC) {
      const zC = (pC ? [pC.name] : ["welcome", "docsOverview"]).find((zC => eC(zC) === CC));
      if (!zC) return;
      iC(zC).add(CC);
      const ZC = FC[CC];
      ZC && (xC(ZC), pC || SC.add(CC)), null === eC(zC) && hC(zC), RC()
    }

    function YC(CC, zC) {
      const ZC = JC(CC),
        QC = iC(CC);
      for (let wC = ZC.indexOf(zC) - 1; wC >= 0; wC--)
        if (QC.has(ZC[wC]) && IC(ZC[wC])) return ZC[wC];
      return null
    }

    function dC(CC, zC) {
      return null !== YC(CC, zC)
    }

    function mC(CC, zC) {
      const ZC = YC(CC, zC);
      ZC && (iC(CC).delete(ZC), RC())
    }

    function HC(CC) {
      hC(CC), "welcome" === CC && JC("welcome").forEach((CC => {
        const zC = FC[CC];
        zC && xC(zC)
      })), RC()
    }

    function EC(CC) {
      pC = {
        name: CC,
        stepsDone: new Set
      }, RC()
    }

    function lC() {
      (pC || 0 !== gC.size || 0 !== SC.size) && (pC = null, gC.clear(), SC.clear(), RC())
    }

    function XC(CC, zC) {
      const ZC = zC ? CC : MC === CC ? null : MC;
      ZC !== MC && (MC = ZC, RC())
    }

    function cC(CC, zC) {
      PC.has(CC) === zC && (zC ? PC.delete(CC) : PC.add(CC), RC())
    }

    function uC(CC) {
      return GC.add(CC), () => {
        GC.delete(CC)
      }
    }
  },
  39141: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39150: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39156: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39161: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39166: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39173: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39175: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39179: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39187: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39191: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39200: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39203: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39208: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39210: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39218: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39225: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39232: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39234: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39239: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39243: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38373: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);