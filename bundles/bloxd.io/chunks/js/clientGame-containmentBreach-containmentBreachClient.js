export const id = 14;
export const ids = [14];
export const modules = {
  36712: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => PT,
      g: () => FT,
      i: () => rT,
      l: () => vT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(94),
      yT = cT(1382),
      fT = cT(1470),
      xT = cT(1379),
      IT = cT(1289),
      AT = cT(1195),
      CT = cT(36717),
      jT = cT(1099);

    function vT(TT) {
      const [kT, cT] = (0, KT.useState)((() => (0, CT.n)(TT)));
      return (0, KT.useEffect)((() => (cT((0, CT.n)(TT)), (0, CT.D)((() => {
        cT((0, CT.n)(TT))
      })))), [TT]), kT
    }

    function tT(TT, kT) {
      "function" === typeof TT ? TT(kT) : TT && (TT.current = kT)
    }

    function hT(TT) {
      let {
        tutorial: kT,
        step: cT,
        enabled: lT = !0
      } = TT;
      const MT = vT(kT);
      return lT && MT === cT
    }

    function NT(TT, kT) {
      const cT = (0, CT.o)(TT),
        lT = cT.indexOf(kT);
      return !cT.slice(lT + 1).some((kT => (0, CT.u)(TT, kT)))
    }

    function QT(TT, kT, cT, lT) {
      let {
        tutorial: MT,
        step: KT,
        waitForClick: OT = !1,
        onPrevious: yT
      } = TT;
      const fT = kT && (0, CT.t)(MT, KT),
        xT = kT && !NT(MT, KT),
        AT = OT ? lT : cT;
      let jT = null;
      fT ? jT = () => {
        null === yT || void 0 === yT || yT(), (0, CT.q)(MT, KT)
      } : xT && (jT = () => {
        (0, CT.l)(MT)
      }), (0, IT.q)("popup", null !== AT && void 0 !== AT ? AT : cT, jT, kT && null !== AT, null, fT ? void 0 : "controller:menusSkipTutorial")
    }

    function ST(TT) {
      let {
        tutorial: kT,
        step: cT,
        text: lT,
        waitForClick: MT = !1,
        onPrevious: KT
      } = TT;
      const {
        t: OT
      } = (0, AT.B)(), yT = NT(kT, cT);
      return (0, jT.jsxs)(jT.Fragment, {
        children: [(0, jT.jsx)("div", {
          className: "TutorialStepText",
          children: lT
        }), (0, jT.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, CT.t)(kT, cT) && (0, jT.jsx)(fT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === KT || void 0 === KT || KT(), (0, CT.q)(kT, cT)
            },
            children: OT("tutorial:back")
          }), !MT && (0, jT.jsx)(fT.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, CT.f)(cT)
            },
            padDefaultFocus: !0,
            children: OT(yT ? "tutorial:done" : "tutorial:next")
          }), !yT && (0, jT.jsx)(fT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, CT.l)(kT)
            },
            children: OT("tutorial:skip")
          })]
        })]
      })
    }
    const DT = 6;

    function aT(TT) {
      let {
        rect: kT,
        margin: cT
      } = TT;
      const lT = Math.max(0, kT.top - cT),
        MT = kT.bottom + cT,
        KT = Math.max(0, kT.left - cT),
        OT = kT.right + cT;
      return (0, jT.jsxs)(jT.Fragment, {
        children: [(0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: lT
          }
        }), (0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: MT,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: lT,
            left: 0,
            width: KT,
            height: MT - lT
          }
        }), (0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: lT,
            left: OT,
            right: 0,
            height: MT - lT
          }
        })]
      })
    }

    function FT(TT) {
      let {
        target: kT,
        placement: cT,
        boxRef: lT,
        className: fT,
        spotlightMargin: IT = DT,
        children: AT
      } = TT;
      const {
        getArrowProps: CT,
        getTooltipProps: vT,
        setTooltipRef: tT,
        setTriggerRef: hT
      } = (0, yT.e)({
        placement: cT,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, IT]
      });
      (0, KT.useLayoutEffect)((() => {
        hT(kT)
      }), [kT, hT]);
      const NT = function(TT, kT) {
        const [cT, lT] = (0, KT.useState)(null);
        return (0, KT.useEffect)((() => {
          if (!kT || !TT) return void lT(null);
          let cT = 0,
            MT = null;
          const KT = () => {
            const kT = TT.getBoundingClientRect();
            MT && kT.left === MT.left && kT.top === MT.top && kT.width === MT.width && kT.height === MT.height || (MT = kT, lT(kT)), cT = requestAnimationFrame(KT)
          };
          return KT(), () => {
            cancelAnimationFrame(cT)
          }
        }), [TT, kT]), cT
      }(kT, !0);
      (0, KT.useEffect)((() => {
        null === kT || void 0 === kT || kT.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [kT]);
      const QT = (0, KT.useCallback)((TT => {
        tT(TT), lT && (lT.current = TT)
      }), [tT, lT]);
      return (0, OT.createPortal)((0, jT.jsxs)(jT.Fragment, {
        children: [NT && (0, jT.jsx)(aT, {
          rect: NT,
          margin: IT
        }), (0, jT.jsxs)("div", {
          ref: QT,
          ...vT({
            className: MT()("tooltip-container SmallTextLight TutorialStep", fT)
          }),
          children: [AT, (0, jT.jsx)("div", {
            ...CT({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, xT.e)())
    }
    const rT = (0, KT.forwardRef)((function(TT, kT) {
      let {
        placement: cT = "right",
        children: lT,
        ...MT
      } = TT;
      const OT = hT(MT),
        yT = (0, KT.useRef)(null),
        fT = (0, KT.useRef)(null);
      QT(MT, OT, yT, fT);
      const [xT, IT] = (0, KT.useState)(null), AT = lT.ref, CT = (0, KT.useCallback)((TT => {
        fT.current = TT, IT(TT), tT(kT, TT), tT(AT, TT)
      }), [kT, AT]);
      return (0, jT.jsxs)(jT.Fragment, {
        children: [(0, KT.cloneElement)(lT, {
          ref: CT
        }), OT && (0, jT.jsx)(FT, {
          target: xT,
          placement: cT,
          boxRef: yT,
          children: (0, jT.jsx)(ST, {
            ...MT
          })
        })]
      })
    }));

    function PT(TT) {
      const kT = hT(TT),
        cT = (0, KT.useRef)(null);
      return QT(TT, kT, cT, null), kT ? (0, OT.createPortal)((0, jT.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, jT.jsx)("div", {
          ref: cT,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, jT.jsx)(ST, {
            ...TT
          })
        })
      }), (0, xT.e)()) : null
    }
  },
  38397: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    const lT = 4,
      MT = 12e3,
      KT = 1e3;
    class OT {
      constructor() {
        let {
          limit: TT = lT,
          windowMs: kT = MT,
          spacingMs: cT = KT,
          now: OT = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = TT, this.windowMs = kT, this.spacingMs = cT, this.now = OT
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const TT of this.priority) TT.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const TT = this.now();
        this.sent.push(TT), this.lastSentAt = TT, this.schedule(), this.notify()
      }
      addPriority(TT) {
        return this.priority.add(TT), () => {
          this.priority.delete(TT)
        }
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const TT of this.priority)
          if (TT.waiting()) return !0;
        return !1
      }
      prune() {
        const TT = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= TT;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const TT = this.now(),
          kT = this.lastSentAt + this.spacingMs,
          cT = Math.min(kT > TT ? kT : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        cT !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, cT - TT)))
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  38379: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      constructor(TT, kT, cT) {
        this.nt = TT, this.beforeOpen = kT, this.afterClose = cT, this.open = !1, this.yv = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.yv && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(TT) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(TT)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.yv = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.yv || (this.snapshot = this.buildSnapshot(), this.nt(this.snapshot))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  39071: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => Ac
    });
    var lT = cT(71);
    var MT = cT(31),
      KT = cT(1936),
      OT = cT(36),
      yT = cT(36423),
      fT = cT(1046),
      xT = cT.n(fT),
      IT = cT(1461),
      AT = cT(1195),
      CT = cT(4515),
      jT = cT(1356),
      vT = cT(1470),
      tT = cT(1943),
      hT = cT(1379),
      NT = cT(1921),
      QT = cT(1996),
      ST = cT(229);
    const DT = cT(39074),
      aT = Object.fromEntries(DT.keys().map((TT => [TT.replace(/^\.\/(.*)\.webp$/, "$1"), DT(TT)]))),
      FT = new Set;

    function rT(TT, kT) {
      const cT = kT ? TT : `${TT}-uncaught`,
        lT = (0, ST.d)(aT, cT);
      return void 0 !== lT || FT.has(cT) || (FT.add(cT), console.warn(`Containment Breach has no mugshot ${cT}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), lT
    }
    var PT = cT(1099);
    const wT = "containmentBreach",
      mT = "Gold Coin";

    function bT(TT) {
      let {
        open: kT,
        onDismiss: cT,
        title: lT,
        className: MT,
        decor: KT,
        headerExtra: OT,
        status: yT,
        statusRefused: fT = !1,
        children: IT
      } = TT;
      const AT = `${MT}Title`;
      return (0, PT.jsx)(CT.c, {
        show: kT,
        close: cT,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, PT.jsxs)("section", {
          className: xT()("ContainmentBoardPanel", MT),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": AT,
          children: [KT && (0, PT.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: KT
          }), (0, PT.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, PT.jsx)("h2", {
              id: AT,
              className: "VisuallyHidden",
              children: lT
            }), OT, (0, PT.jsx)(vT.l, {
              onClick: cT
            })]
          }), (0, PT.jsx)("div", {
            className: "BoardBody",
            children: IT
          }), void 0 !== yT && (0, PT.jsx)("footer", {
            className: xT()("BoardStatus", {
              Refused: fT
            }),
            children: yT
          })]
        })
      })
    }

    function zT(TT) {
      let {
        itemName: kT
      } = TT;
      return (0, PT.jsx)(tT.d, {
        itemName: kT,
        amount: 0
      })
    }

    function JT(TT) {
      let {
        anomalyId: kT,
        caught: cT
      } = TT;
      const MT = (0, lT.useRef)(null);
      return (0, jT.b)(MT, !cT), (0, PT.jsx)("span", {
        ref: MT,
        className: xT()("BoardMugshot", {
          Uncaught: !cT
        }),
        children: (0, PT.jsx)("img", {
          src: rT(kT, cT),
          alt: "",
          draggable: !1
        })
      })
    }

    function oT(TT) {
      let {
        itemName: kT,
        amount: cT,
        ty: lT,
        inTile: MT = !1
      } = TT;
      return (0, PT.jsx)(hT.c, {
        delayShow: 200,
        hoverOnly: MT,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, PT.jsx)(eT, {
          itemName: kT,
          amount: cT,
          ty: lT
        }),
        children: (0, PT.jsxs)("span", {
          className: xT()("BoardChip", {
            Short: void 0 !== lT && lT < cT
          }),
          children: [(0, PT.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, PT.jsx)(zT, {
              itemName: kT
            })
          }), cT.toLocaleString()]
        })
      })
    }
    const HT = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function eT(TT) {
      var kT;
      let {
        itemName: cT,
        amount: lT,
        ty: MT
      } = TT;
      const {
        t: KT
      } = (0, AT.B)(), OT = (0, QT.e)("itemInfo", (TT => TT[cT])), {
        lore: yT,
        droppedBy: fT
      } = function(TT) {
        if ("string" !== typeof TT) return {
          lore: TT,
          droppedBy: null
        };
        const kT = HT.exec(TT);
        return null === kT ? {
          lore: TT,
          droppedBy: null
        } : {
          lore: "" === kT[1] ? void 0 : kT[1],
          droppedBy: kT[2]
        }
      }(null === OT || void 0 === OT ? void 0 : OT.description);
      return (0, PT.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, PT.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, PT.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, PT.jsx)(zT, {
              itemName: cT
            })
          }), (0, PT.jsx)(NT.b, {
            text: null !== (kT = null === OT || void 0 === OT ? void 0 : OT.displayName) && void 0 !== kT ? kT : cT,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== yT || null !== fT) && (0, PT.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== yT && (0, PT.jsx)(NT.b, {
            text: yT,
            className: "BoardChipTooltipDescription"
          }), null !== fT && (0, PT.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, PT.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: KT(`${wT}:chipDroppedBy`)
            }), fT]
          })]
        }), void 0 !== MT && (0, PT.jsxs)("div", {
          className: xT()("BoardChipTooltipHeld", {
            Short: MT < lT
          }),
          children: [(0, PT.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: KT(`${wT}:chipYouHave`)
          }), (0, PT.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, PT.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: MT.toLocaleString()
            }), ` / ${lT.toLocaleString()}`]
          }), (0, PT.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, PT.jsx)("span", {
              style: {
                width: (lT > 0 ? 100 * Math.min(1, MT / lT) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function GT(TT) {
      let {
        icon: kT,
        name: cT,
        selected: lT,
        locked: MT,
        className: KT,
        buttonRef: OT,
        onSelect: yT,
        children: fT
      } = TT;
      return (0, PT.jsxs)("button", {
        ref: OT,
        type: "button",
        className: xT()("BoardTile", KT, {
          Selected: lT,
          Locked: MT
        }),
        onClick: yT,
        children: [(0, PT.jsx)("span", {
          className: "BoardTileIcon",
          children: kT
        }), (0, PT.jsx)("span", {
          className: "BoardTileName",
          children: cT
        }), fT]
      })
    }

    function VT(TT) {
      let {
        icon: kT,
        name: cT,
        children: lT
      } = TT;
      return (0, PT.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, PT.jsx)("span", {
          className: "BoardDetailIcon",
          children: kT
        }), (0, PT.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, PT.jsx)("h3", {
            children: cT
          }), (0, PT.jsx)("span", {
            className: "BoardDetailStatus",
            children: lT
          })]
        })]
      })
    }

    function ET(TT) {
      let {
        coins: kT,
        children: cT
      } = TT;
      return (0, PT.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, PT.jsx)(oT, {
          itemName: mT,
          amount: kT
        }), cT]
      })
    }
    var ZT = cT(38379);
    const uT = "containmentCodexView";
    class XT extends ZT.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = TT => {
          this.selectedId = TT, this.emit()
        }
      }
      Av(TT) {
        this.entries = TT.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const dT = {
        codexAnyDifficulty: `${wT}:codexNeedsAny`,
        codexNormalOnly: `${wT}:codexNeedsNormal`,
        codexHardOnly: `${wT}:codexNeedsHard`
      },
      LT = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      RT = {
        codexContained: `${wT}:codexContainedBadge`,
        codexEncountered: `${wT}:codexEncounteredBadge`,
        codexUnidentified: `${wT}:codexUnidentifiedBadge`
      },
      gT = ["94%", "81%", "88%", "46%", "72%"];

    function UT(TT) {
      let {
        entry: kT
      } = TT;
      const {
        t: cT
      } = (0, AT.B)();
      return (0, PT.jsx)("span", {
        className: xT()("BoardBadge", LT[kT.codexEntryState]),
        children: cT(RT[kT.codexEntryState])
      })
    }

    function YT(TT) {
      const {
        t: kT
      } = (0, AT.B)();
      return "codexUnidentified" === TT.codexEntryState ? kT(`${wT}:codexUnidentifiedName`) : TT.codexEntryName
    }

    function BT(TT) {
      let {
        entry: kT
      } = TT;
      return "codexUnidentified" === kT.codexEntryState ? (0, PT.jsx)(zT, {
        itemName: "Book"
      }) : (0, PT.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, PT.jsx)(JT, {
          anomalyId: kT.codexEntryId,
          caught: "codexContained" === kT.codexEntryState
        }), (0, PT.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function WT(TT) {
      let {
        entry: kT,
        selected: cT,
        onSelect: lT
      } = TT;
      const MT = "codexUnidentified" === kT.codexEntryState;
      return (0, PT.jsxs)(GT, {
        icon: (0, PT.jsx)(BT, {
          entry: kT
        }),
        name: YT(kT),
        selected: cT,
        locked: MT,
        className: xT()("CodexFolder", LT[kT.codexEntryState]),
        onSelect: () => {
          lT(kT.codexEntryId)
        },
        children: [!MT && (0, PT.jsx)(UT, {
          entry: kT
        }), MT && (0, PT.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function nT(TT) {
      let {
        count: kT
      } = TT;
      const cT = [];
      for (let lT = Math.min(kT, 25); lT > 0; lT -= 5) cT.push(Math.min(lT, 5));
      return (0, PT.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: cT.map(((TT, kT) => (0, PT.jsx)("span", {
          className: xT()("CodexTallyGroup", {
            Gate: 5 === TT
          }),
          children: Array.from({
            length: Math.min(TT, 4)
          }, ((TT, kT) => (0, PT.jsx)("span", {
            className: "CodexTallyMark"
          }, kT)))
        }, kT)))
      })
    }

    function pT(TT) {
      let {
        contained: kT,
        total: cT
      } = TT;
      const {
        t: lT
      } = (0, AT.B)();
      return (0, PT.jsxs)("div", {
        className: "CodexProgress",
        children: [lT(`${wT}:codexProgress`, {
          contained: String(kT),
          total: String(cT)
        }), (0, PT.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, PT.jsx)("span", {
            style: {
              width: kT / cT * 100 + "%"
            }
          })
        })]
      })
    }

    function iT(TT) {
      let {
        entry: kT,
        fileNumber: cT
      } = TT;
      const {
        t: lT
      } = (0, AT.B)(), MT = "codexContained" === kT.codexEntryState;
      return (0, PT.jsx)("section", {
        className: "BoardDetail",
        children: (0, PT.jsxs)("article", {
          className: xT()("CodexDossier", LT[kT.codexEntryState]),
          children: [(0, PT.jsx)("span", {
            className: "CodexFileNumber",
            children: lT(`${wT}:codexFileNumber`, {
              number: String(cT).padStart(3, "0")
            })
          }), (0, PT.jsx)(VT, {
            icon: (0, PT.jsx)(BT, {
              entry: kT
            }),
            name: YT(kT),
            children: (0, PT.jsx)(UT, {
              entry: kT
            })
          }), MT && (0, PT.jsxs)(PT.Fragment, {
            children: [(0, PT.jsx)("p", {
              className: "BoardDescription",
              children: kT.codexEntryLore
            }), (0, PT.jsxs)("p", {
              className: "CodexTally",
              children: [lT(`${wT}:codexContainments`, {
                count: String(kT.codexEntryContainedCount)
              }), (0, PT.jsx)(nT, {
                count: kT.codexEntryContainedCount
              })]
            }), (0, PT.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: lT(`${wT}:codexContainedBadge`)
            })]
          }), !MT && (0, PT.jsxs)(PT.Fragment, {
            children: [(0, PT.jsxs)("div", {
              className: "CodexRedaction",
              children: [gT.map((TT => (0, PT.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: TT
                }
              }, TT))), (0, PT.jsx)("p", {
                className: "CodexRedacted",
                children: lT(`${wT}:codexRedacted`)
              })]
            }), "" !== kT.codexEntryHint && (0, PT.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, PT.jsx)("h4", {
                children: lT(`${wT}:codexHintLabel`)
              }), (0, PT.jsx)("p", {
                children: kT.codexEntryHint
              })]
            }), (0, PT.jsx)("p", {
              className: "CodexClearance",
              children: lT(dT[kT.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function qT(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, IT.i)(uT, kT.getSnapshot()),
        {
          t: lT
        } = (0, AT.B)();
      if (0 === cT.entries.length) return null;
      const MT = cT.entries.find((TT => TT.codexEntryId === cT.selectedId)),
        KT = cT.entries.filter((TT => "codexContained" === TT.codexEntryState)).length,
        OT = cT.entries.map((TT => TT.codexEntryId)).sort().indexOf(MT.codexEntryId) + 1;
      return (0, PT.jsxs)(bT, {
        open: cT.open,
        onDismiss: kT.dismiss,
        title: lT(`${wT}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, PT.jsx)(pT, {
          contained: KT,
          total: cT.entries.length
        }),
        children: [(0, PT.jsx)("div", {
          className: "BoardTiles",
          children: cT.entries.map((TT => (0, PT.jsx)(WT, {
            entry: TT,
            selected: TT === MT,
            onSelect: kT.select
          }, TT.codexEntryId)))
        }), (0, PT.jsx)(iT, {
          entry: MT,
          fileNumber: OT
        })]
      })
    }
    var sT = cT(339);
    class Tk extends ZT.b {
      constructor(TT, kT, cT, lT, MT, KT) {
        super(TT, kT, cT), this.pacer = lT, this.command = MT, this.predict = KT, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = TT => {
          this.selectedId = TT, this.emit()
        }, this.act = (TT, kT) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${TT} ${kT}`, this.rollBack)) return;
          const cT = this.predict(this.board, TT, kT);
          null !== cT && (this.board = cT.board, this.notice = cT.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = lT.subscribe((() => {
          this.emit()
        }))
      }
      Av(TT) {
        const kT = this.messageOpens(TT);
        if (kT && this.open) return this.board === this.confirmed && (this.board = TT), this.confirmed = TT, void this.emit();
        if (this.board = TT, this.confirmed = TT, this.pacer.onReply(), kT) return this.notice = null, this.selectedId = this.openingSelection(TT), void this.show();
        const cT = this.messageNotice(TT);
        null !== cT && (this.notice = cT), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function kk(TT, kT) {
      return TT.loadoutCoins >= kT.loadoutCostCoins && kT.loadoutCostParts.every((kT => function(TT, kT) {
        return ck(TT, kT).loadoutHeldPartAmount
      }(TT, kT.loadoutPartCurrency) >= kT.loadoutPartAmount))
    }

    function ck(TT, kT) {
      return TT.loadoutHeldParts.find((TT => TT.loadoutHeldPartCurrency === kT))
    }

    function lk(TT, kT) {
      return TT.loadoutSlots.find((TT => TT.loadoutSlotKind === kT))
    }

    function Mk(TT) {
      return TT.loadoutPerks.filter((TT => TT.loadoutPerkEquipped)).length >= TT.loadoutMaxPerks
    }

    function Kk(TT, kT, cT) {
      for (const MT of TT.loadoutSlots) {
        const lT = MT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === cT));
        if (lT) return "loadoutArmour" === MT.loadoutSlotKind ? yk(TT, MT, lT, kT) : Ok(TT, MT, lT, kT)
      }
      const lT = TT.loadoutPerks.find((TT => TT.loadoutPerkId === cT));
      return lT ? function(TT, kT, cT) {
        const lT = kT.loadoutPerkOwned,
          MT = kT.loadoutPerkEquipped,
          KT = kT.loadoutPerkName,
          OT = Mk(TT);
        if ("loadoutUnlock" === cT) {
          if (lT || !kk(TT, kT.loadoutPerkCost)) return null;
          const cT = {
            ...kT,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !OT
          };
          return {
            board: xk(Ik(TT, kT.loadoutPerkCost), cT),
            notice: Ak(OT ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", KT)
          }
        }
        if ("loadoutUpgrade" === cT || !lT || "loadoutEquip" === cT === MT || !MT && OT) return null;
        return {
          board: xk(TT, {
            ...kT,
            loadoutPerkEquipped: !MT
          }),
          notice: Ak(MT ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", KT)
        }
      }(TT, lT, kT) : null
    }

    function Ok(TT, kT, cT, lT) {
      const MT = cT.loadoutOptionOwnedTier,
        KT = cT.loadoutOptionName;
      if ("loadoutEquip" === lT) return 0 === MT ? null : {
        board: fk(TT, kT, cT.loadoutOptionId, null),
        notice: Ak("loadoutNoticeEquipped", KT)
      };
      const OT = "loadoutUnlock" === lT;
      if (OT && 0 !== MT || "loadoutUpgrade" === lT && (0 === MT || MT >= cT.loadoutOptionTiers.length) || "loadoutUnequip" === lT) return null;
      const yT = cT.loadoutOptionTiers[MT].loadoutTierCost;
      if (!kk(TT, yT)) return null;
      const fT = {
          ...cT,
          loadoutOptionOwnedTier: MT + 1
        },
        xT = OT ? cT.loadoutOptionId : kT.loadoutSlotEquippedId;
      return {
        board: fk(Ik(TT, yT), kT, xT, fT),
        notice: OT ? Ak("loadoutNoticeUnlocked", KT) : Ak("loadoutNoticeUpgraded", KT, MT + 1)
      }
    }

    function yk(TT, kT, cT, lT) {
      const MT = cT.loadoutOptionOwnedTier > 0,
        KT = cT.loadoutOptionName;
      if ("loadoutEquip" === lT && MT) return {
        board: fk(TT, kT, cT.loadoutOptionId, null),
        notice: Ak("loadoutNoticeEquipped", KT)
      };
      const OT = cT.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== lT || MT || !kk(TT, OT) ? null : {
        board: fk(Ik(TT, OT), kT, cT.loadoutOptionId, {
          ...cT,
          loadoutOptionOwnedTier: 1
        }),
        notice: Ak("loadoutNoticeUnlocked", KT)
      }
    }

    function fk(TT, kT, cT, lT) {
      const MT = {
        ...kT,
        loadoutSlotEquippedId: cT,
        loadoutSlotOptions: kT.loadoutSlotOptions.map((TT => null !== lT && TT.loadoutOptionId === lT.loadoutOptionId ? lT : TT))
      };
      return {
        ...TT,
        loadoutSlots: TT.loadoutSlots.map((TT => TT === kT ? MT : TT))
      }
    }

    function xk(TT, kT) {
      return {
        ...TT,
        loadoutPerks: TT.loadoutPerks.map((TT => TT.loadoutPerkId === kT.loadoutPerkId ? kT : TT))
      }
    }

    function Ik(TT, kT) {
      return {
        ...TT,
        loadoutCoins: TT.loadoutCoins - kT.loadoutCostCoins,
        loadoutHeldParts: TT.loadoutHeldParts.map((TT => {
          const cT = kT.loadoutCostParts.find((kT => kT.loadoutPartCurrency === TT.loadoutHeldPartCurrency));
          return cT ? {
            ...TT,
            loadoutHeldPartAmount: TT.loadoutHeldPartAmount - cT.loadoutPartAmount
          } : TT
        }))
      }
    }

    function Ak(TT, kT) {
      return {
        loadoutNoticeKey: TT,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: kT,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Ck = "containmentLoadoutView";
    class jk extends Tk {
      constructor(TT, kT, cT, lT) {
        super(TT, kT, cT, lT, "loadout", Kk), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = TT => {
          this.slot = TT, this.selectedId = vk(this.board, TT), this.emit()
        }
      }
      messageOpens(TT) {
        return TT.loadoutMessageOpens
      }
      messageNotice(TT) {
        return TT.loadoutNotice
      }
      openingSelection(TT) {
        return vk(TT, this.slot)
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

    function vk(TT, kT) {
      if ("loadoutPerks" === kT) {
        var cT;
        const kT = TT.loadoutPerks;
        return (null !== (cT = kT.find((TT => TT.loadoutPerkEquipped))) && void 0 !== cT ? cT : kT[0]).loadoutPerkId
      }
      return lk(TT, kT).loadoutSlotEquippedId
    }
    const tk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var hk = cT(36712),
      Nk = cT(1289);
    const Qk = {
        loadoutPrimary: `${wT}:loadoutSlotPrimary`,
        loadoutSecondary: `${wT}:loadoutSlotSecondary`,
        loadoutOffensive: `${wT}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${wT}:loadoutSlotSelfHelp`,
        loadoutArmour: `${wT}:loadoutSlotArmour`,
        loadoutPerks: `${wT}:loadoutSlotPerks`
      },
      Sk = {
        section: "right",
        gC: "bottom",
        act: "top"
      },
      Dk = (0, lT.createContext)({
        step: null,
        targetRef: () => {}
      });

    function ak() {
      const {
        step: TT,
        targetRef: kT
      } = (0, lT.useContext)(Dk);
      return (cT, lT) => (null === TT || void 0 === TT ? void 0 : TT.kind) === cT && TT.id === lT ? kT : void 0
    }

    function Fk(TT, kT) {
      const cT = kT.loadoutTargetId;
      if ("loadoutPerks" === kT.loadoutTargetSection) {
        const kT = TT.loadoutPerks.find((TT => TT.loadoutPerkId === cT));
        return {
          name: kT.loadoutPerkName,
          owned: kT.loadoutPerkOwned,
          equipped: kT.loadoutPerkEquipped
        }
      }
      const lT = lk(TT, kT.loadoutTargetSection),
        MT = lT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === cT));
      return {
        name: MT.loadoutOptionName,
        owned: MT.loadoutOptionOwnedTier > 0,
        equipped: lT.loadoutSlotEquippedId === cT
      }
    }

    function rk(TT, kT, cT, lT) {
      const [MT, KT] = TT(`${wT}:${kT}`, {
        [cT]: "\x01"
      }).split("\x01");
      return (0, PT.jsxs)(PT.Fragment, {
        children: [MT, (0, PT.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: lT
        }), KT]
      })
    }

    function Pk(TT) {
      let {
        view: kT,
        onDismiss: cT,
        children: MT
      } = TT;
      const {
        t: KT
      } = (0, AT.B)(), OT = kT.loadout, yT = kT.open ? OT.loadoutWalkthrough.map((TT => ({
        target: TT,
        info: Fk(OT, TT)
      }))).find((TT => {
        let {
          info: kT
        } = TT;
        return !kT.equipped
      })) : void 0;
      let fT = null,
        xT = null;
      if (void 0 !== yT) {
        const {
          target: TT,
          info: cT
        } = yT;
        kT.slot !== TT.loadoutTargetSection ? (fT = {
          kind: "section",
          id: TT.loadoutTargetSection
        }, xT = rk(KT, "loadoutWalkthroughSection", "section", KT(Qk[TT.loadoutTargetSection]))) : kT.selectedId !== TT.loadoutTargetId ? (fT = {
          kind: "gC",
          id: TT.loadoutTargetId
        }, xT = rk(KT, "loadoutWalkthroughPick", "name", cT.name)) : (fT = {
          kind: "act",
          id: TT.loadoutTargetId
        }, xT = rk(KT, cT.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", cT.name))
      }
      const IT = null === fT ? null : function(TT) {
          return `${TT.kind}:${TT.id}`
        }(fT),
        [CT, jT] = (0, lT.useState)(null),
        vT = (0, lT.useCallback)((TT => {
          jT((kT => null !== TT ? {
            key: IT,
            node: TT
          } : (null === kT || void 0 === kT ? void 0 : kT.key) === IT ? null : kT))
        }), [IT]),
        tT = null !== IT && (null === CT || void 0 === CT ? void 0 : CT.key) === IT ? CT.node : null;
      return (0, PT.jsxs)(Dk.Provider, {
        value: {
          step: fT,
          targetRef: vT
        },
        children: [MT, null !== fT && null !== tT && (0, PT.jsx)(wk, {
          target: tT,
          placement: Sk[fT.kind],
          onDismiss: cT,
          children: xT
        }, IT)]
      })
    }

    function wk(TT) {
      let {
        target: kT,
        placement: cT,
        onDismiss: MT,
        children: KT
      } = TT;
      const {
        t: OT
      } = (0, AT.B)(), yT = (0, lT.useRef)(kT);
      return yT.current = kT, (0, Nk.q)("popup", yT, MT), (0, PT.jsxs)(hk.g, {
        target: kT,
        placement: cT,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, PT.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, PT.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: tk,
            alt: "",
            draggable: !1
          }), (0, PT.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: OT(`${wT}:operatorName`)
          }), (0, PT.jsx)(vT.l, {
            onClick: MT,
            ariaLabel: OT(`${wT}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, PT.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: KT
        })]
      })
    }
    const mk = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function bk(TT) {
      let {
        cost: kT,
        loadout: cT
      } = TT;
      const {
        t: lT
      } = (0, AT.B)();
      return kT.loadoutCostCoins <= 0 && 0 === kT.loadoutCostParts.length ? (0, PT.jsx)("span", {
        className: "LoadoutCost",
        children: lT(`${wT}:loadoutFree`)
      }) : (0, PT.jsxs)("span", {
        className: "LoadoutCost",
        children: [kT.loadoutCostCoins > 0 && (0, PT.jsx)(oT, {
          itemName: mT,
          amount: kT.loadoutCostCoins,
          ty: cT.loadoutCoins
        }), kT.loadoutCostParts.map((TT => {
          const kT = ck(cT, TT.loadoutPartCurrency);
          return (0, PT.jsx)(oT, {
            itemName: kT.loadoutHeldPartItem,
            amount: TT.loadoutPartAmount,
            ty: kT.loadoutHeldPartAmount
          }, TT.loadoutPartCurrency)
        }))]
      })
    }
    const zk = {
      loadoutStatFireRate: `${wT}:loadoutUnitPerMinute`,
      loadoutStatReload: `${wT}:loadoutUnitSeconds`,
      loadoutStatResupply: `${wT}:loadoutUnitSeconds`
    };

    function Jk(TT) {
      return "loadoutStatPotency" === TT.loadoutStatKind ? (0, sT.N)(TT.loadoutStatValue) : String(TT.loadoutStatValue)
    }

    function Hk(TT) {
      var kT;
      let {
        option: cT
      } = TT;
      const {
        t: lT
      } = (0, AT.B)(), MT = cT.loadoutOptionTiers, KT = null === (kT = MT[0]) || void 0 === kT ? void 0 : kT.loadoutTierStats.map((TT => TT.loadoutStatKind));
      if (!KT || 0 === KT.length) return null;
      const OT = cT.loadoutOptionOwnedTier,
        yT = (TT, kT) => {
          var cT;
          return null === (cT = MT[TT]) || void 0 === cT ? void 0 : cT.loadoutTierStats.find((TT => TT.loadoutStatKind === kT))
        };
      return (0, PT.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, PT.jsx)("thead", {
          children: (0, PT.jsxs)("tr", {
            children: [(0, PT.jsx)("th", {}), MT.map(((TT, kT) => (0, PT.jsx)("th", {
              className: xT()({
                Current: kT + 1 === OT,
                Next: kT === OT
              }),
              children: lT(`${wT}:loadoutTier`, {
                tier: (0, sT.N)(kT + 1)
              })
            }, kT)))]
          })
        }), (0, PT.jsx)("tbody", {
          children: KT.map((TT => {
            const kT = zk[TT];
            return (0, PT.jsxs)("tr", {
              children: [(0, PT.jsxs)("th", {
                scope: "row",
                children: [lT(`${wT}:${TT}`), kT && (0, PT.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: lT(kT)
                })]
              }), MT.map(((kT, cT) => {
                const lT = yT(cT, TT),
                  MT = cT > 0 ? yT(cT - 1, TT) : void 0,
                  KT = lT && MT ? lT.loadoutStatValue - MT.loadoutStatValue : 0,
                  fT = mk.has(TT) ? KT < 0 : KT > 0,
                  IT = cT === OT;
                return (0, PT.jsxs)("td", {
                  className: xT()({
                    Current: cT + 1 === OT,
                    Next: IT,
                    Gain: fT,
                    Owned: cT < OT
                  }),
                  children: [IT && fT && (0, PT.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: KT < 0 ? "\u25bc" : "\u25b2"
                  }), lT ? Jk(lT) : "-"]
                }, cT)
              }))]
            }, TT)
          }))
        })]
      })
    }

    function ek(TT) {
      let {
        view: kT,
        controller: cT,
        slot: lT,
        option: MT
      } = TT;
      const {
        t: KT
      } = (0, AT.B)(), OT = kT.loadout, yT = MT.loadoutOptionOwnedTier, fT = MT.loadoutOptionTiers.length, xT = lT.loadoutSlotEquippedId === MT.loadoutOptionId, IT = yT < fT ? MT.loadoutOptionTiers[yT].loadoutTierCost : null, CT = null !== IT && kk(OT, IT), jT = MT.loadoutOptionId, tT = ak();
      return (0, PT.jsxs)(PT.Fragment, {
        children: [(0, PT.jsx)(Vk, {
          icon: MT.loadoutOptionIcon,
          name: MT.loadoutOptionName,
          status: 0 === yT ? KT(`${wT}:loadoutLocked`) : fT > 1 ? KT(`${wT}:loadoutTier`, {
            tier: (0, sT.N)(yT)
          }) : null,
          locked: 0 === yT,
          equipped: xT
        }), (0, PT.jsx)("p", {
          className: "BoardDescription",
          children: MT.loadoutOptionDescription
        }), (0, PT.jsx)(Hk, {
          option: MT
        }), (0, PT.jsxs)("div", {
          ref: tT("act", jT),
          className: "BoardActions",
          children: [null !== IT && (0, PT.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, PT.jsx)(bk, {
              cost: IT,
              loadout: OT
            }), (0, PT.jsx)(vT.m, {
              disabled: !CT || kT.pending,
              onClick: () => {
                cT.act(0 === yT ? "loadoutUnlock" : "loadoutUpgrade", jT)
              },
              children: 0 === yT ? KT(`${wT}:loadoutUnlock`) : KT(`${wT}:loadoutUpgrade`, {
                tier: (0, sT.N)(yT + 1)
              })
            })]
          }), null === IT && fT > 1 && (0, PT.jsx)("span", {
            className: "BoardHint",
            children: KT(`${wT}:loadoutMaxed`)
          }), yT > 0 && !xT && (0, PT.jsx)(vT.e, {
            disabled: kT.pending,
            onClick: () => {
              cT.act("loadoutEquip", jT)
            },
            children: KT(`${wT}:loadoutEquip`)
          })]
        })]
      })
    }

    function Gk(TT) {
      let {
        view: kT,
        controller: cT,
        perk: lT
      } = TT;
      const {
        t: MT
      } = (0, AT.B)(), KT = kT.loadout, OT = Mk(KT), yT = lT.loadoutPerkId, fT = ak();
      return (0, PT.jsxs)(PT.Fragment, {
        children: [(0, PT.jsx)(Vk, {
          icon: lT.loadoutPerkIcon,
          name: lT.loadoutPerkName,
          status: lT.loadoutPerkOwned ? null : MT(`${wT}:loadoutLocked`),
          locked: !lT.loadoutPerkOwned,
          equipped: lT.loadoutPerkEquipped
        }), (0, PT.jsx)("p", {
          className: "BoardDescription",
          children: lT.loadoutPerkDescription
        }), (0, PT.jsxs)("div", {
          ref: fT("act", yT),
          className: "BoardActions",
          children: [!lT.loadoutPerkOwned && (0, PT.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, PT.jsx)(bk, {
              cost: lT.loadoutPerkCost,
              loadout: KT
            }), (0, PT.jsx)(vT.m, {
              disabled: !kk(KT, lT.loadoutPerkCost) || kT.pending,
              onClick: () => {
                cT.act("loadoutUnlock", yT)
              },
              children: MT(`${wT}:loadoutUnlock`)
            })]
          }), lT.loadoutPerkOwned && !lT.loadoutPerkEquipped && (0, PT.jsx)(vT.e, {
            disabled: OT || kT.pending,
            onClick: () => {
              cT.act("loadoutEquip", yT)
            },
            children: MT(`${wT}:loadoutEquip`)
          }), lT.loadoutPerkOwned && !lT.loadoutPerkEquipped && OT && (0, PT.jsx)("span", {
            className: "BoardHint",
            children: MT(`${wT}:loadoutSocketsFullHint`)
          }), lT.loadoutPerkEquipped && (0, PT.jsx)(vT.P, {
            disabled: kT.pending,
            onClick: () => {
              cT.act("loadoutUnequip", yT)
            },
            children: MT(`${wT}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Vk(TT) {
      let {
        icon: kT,
        name: cT,
        status: lT,
        locked: MT,
        equipped: KT
      } = TT;
      const {
        t: OT
      } = (0, AT.B)();
      return (0, PT.jsxs)(VT, {
        icon: (0, PT.jsx)(zT, {
          itemName: kT
        }),
        name: cT,
        children: [null !== lT && (0, PT.jsx)("span", {
          className: xT()("LoadoutStatusText", {
            Locked: MT
          }),
          children: lT
        }), KT && (0, PT.jsx)("span", {
          className: "BoardBadge",
          children: OT(`${wT}:loadoutEquippedBadge`)
        })]
      })
    }

    function Ek(TT) {
      let {
        view: kT,
        controller: cT
      } = TT;
      const lT = kT.loadout;
      if ("loadoutPerks" === kT.slot) {
        const TT = lT.loadoutPerks.find((TT => TT.loadoutPerkId === kT.selectedId));
        return (0, PT.jsx)("section", {
          className: "BoardDetail",
          children: TT && (0, PT.jsx)(Gk, {
            view: kT,
            controller: cT,
            perk: TT
          })
        })
      }
      const MT = lk(lT, kT.slot),
        KT = MT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === kT.selectedId));
      return (0, PT.jsx)("section", {
        className: "BoardDetail",
        children: KT && (0, PT.jsx)(ek, {
          view: kT,
          controller: cT,
          slot: MT,
          option: KT
        })
      })
    }

    function Zk(TT) {
      let {
        owned: kT,
        total: cT
      } = TT;
      return cT <= 1 ? null : (0, PT.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: cT
        }, ((TT, cT) => (0, PT.jsx)("span", {
          className: xT()("LoadoutPip", {
            Filled: cT < kT
          })
        }, cT)))
      })
    }

    function uk(TT) {
      let {
        view: kT,
        controller: cT
      } = TT;
      const {
        t: lT
      } = (0, AT.B)(), MT = kT.loadout, KT = ak();
      return (0, PT.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": lT(`${wT}:loadoutKit`),
        children: [MT.loadoutSlots.map((TT => {
          const MT = TT.loadoutSlotOptions.find((kT => kT.loadoutOptionId === TT.loadoutSlotEquippedId));
          return (0, PT.jsxs)("button", {
            ref: KT("section", TT.loadoutSlotKind),
            type: "button",
            className: xT()("LoadoutKitSlot", {
              Selected: kT.slot === TT.loadoutSlotKind
            }),
            onClick: () => {
              cT.selectSlot(TT.loadoutSlotKind)
            },
            children: [(0, PT.jsx)("span", {
              className: "LoadoutKitIcon",
              children: MT && (0, PT.jsx)(zT, {
                itemName: MT.loadoutOptionIcon
              })
            }), (0, PT.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, PT.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, PT.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: lT(Qk[TT.loadoutSlotKind])
                }), MT && (0, PT.jsx)(Zk, {
                  owned: MT.loadoutOptionOwnedTier,
                  total: MT.loadoutOptionTiers.length
                })]
              }), (0, PT.jsx)("span", {
                className: "LoadoutKitName",
                children: null === MT || void 0 === MT ? void 0 : MT.loadoutOptionName
              })]
            })]
          }, TT.loadoutSlotKind)
        })), (0, PT.jsx)(Xk, {
          view: kT,
          controller: cT
        })]
      })
    }

    function Xk(TT) {
      let {
        view: kT,
        controller: cT
      } = TT;
      const {
        t: lT
      } = (0, AT.B)(), MT = kT.loadout, KT = MT.loadoutPerks.filter((TT => TT.loadoutPerkEquipped)), OT = ak();
      return (0, PT.jsxs)("button", {
        ref: OT("section", "loadoutPerks"),
        type: "button",
        className: xT()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === kT.slot
        }),
        onClick: () => {
          cT.selectSlot("loadoutPerks")
        },
        children: [(0, PT.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, PT.jsx)("span", {
            className: "LoadoutKitLabel",
            children: lT(Qk.loadoutPerks)
          }), (0, PT.jsx)("span", {
            className: "LoadoutPerkCount",
            children: lT(`${wT}:loadoutPerkCount`, {
              equipped: String(KT.length),
              max: String(MT.loadoutMaxPerks)
            })
          })]
        }), (0, PT.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: MT.loadoutMaxPerks
          }, ((TT, kT) => {
            const cT = KT[kT];
            return (0, PT.jsxs)("span", {
              className: xT()("LoadoutSocket", {
                Filled: cT,
                Empty: !cT
              }),
              children: [(0, PT.jsx)("span", {
                className: "LoadoutSocketWell",
                children: cT && (0, PT.jsx)(zT, {
                  itemName: cT.loadoutPerkIcon
                })
              }), (0, PT.jsx)("span", {
                className: "LoadoutSocketName",
                children: cT ? cT.loadoutPerkName : lT(`${wT}:loadoutPerkSocketEmpty`)
              })]
            }, kT)
          }))
        })]
      })
    }

    function dk(TT) {
      let {
        icon: kT,
        name: cT,
        selected: lT,
        equipped: MT,
        locked: KT,
        ownedTier: OT,
        tiers: yT,
        buttonRef: fT,
        onSelect: xT
      } = TT;
      const {
        t: IT
      } = (0, AT.B)();
      return (0, PT.jsxs)(GT, {
        icon: (0, PT.jsx)(zT, {
          itemName: kT
        }),
        name: cT,
        selected: lT,
        locked: KT,
        buttonRef: fT,
        onSelect: xT,
        children: [MT && (0, PT.jsx)("span", {
          className: "BoardBadge",
          children: IT(`${wT}:loadoutEquippedBadge`)
        }), KT && (0, PT.jsx)("span", {
          className: "BoardBadge Muted",
          children: IT(`${wT}:loadoutLocked`)
        }), !KT && (0, PT.jsx)(Zk, {
          owned: OT,
          total: yT
        })]
      })
    }

    function Lk(TT) {
      let {
        view: kT,
        controller: cT
      } = TT;
      const lT = kT.loadout,
        MT = ak();
      if ("loadoutPerks" === kT.slot) return (0, PT.jsx)("div", {
        className: "BoardTiles",
        children: lT.loadoutPerks.map((TT => (0, PT.jsx)(dk, {
          icon: TT.loadoutPerkIcon,
          name: TT.loadoutPerkName,
          selected: kT.selectedId === TT.loadoutPerkId,
          equipped: TT.loadoutPerkEquipped,
          locked: !TT.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: MT("gC", TT.loadoutPerkId),
          onSelect: () => {
            cT.select(TT.loadoutPerkId)
          }
        }, TT.loadoutPerkId)))
      });
      const KT = lk(lT, kT.slot);
      return (0, PT.jsx)("div", {
        className: "BoardTiles",
        children: KT.loadoutSlotOptions.map((TT => (0, PT.jsx)(dk, {
          icon: TT.loadoutOptionIcon,
          name: TT.loadoutOptionName,
          selected: kT.selectedId === TT.loadoutOptionId,
          equipped: KT.loadoutSlotEquippedId === TT.loadoutOptionId,
          locked: 0 === TT.loadoutOptionOwnedTier,
          ownedTier: TT.loadoutOptionOwnedTier,
          tiers: TT.loadoutOptionTiers.length,
          buttonRef: MT("gC", TT.loadoutOptionId),
          onSelect: () => {
            cT.select(TT.loadoutOptionId)
          }
        }, TT.loadoutOptionId)))
      })
    }

    function Rk(TT) {
      let {
        loadout: kT
      } = TT;
      return (0, PT.jsx)(ET, {
        coins: kT.loadoutCoins,
        children: kT.loadoutHeldParts.filter((TT => TT.loadoutHeldPartAmount > 0)).map((TT => (0, PT.jsx)(oT, {
          itemName: TT.loadoutHeldPartItem,
          amount: TT.loadoutHeldPartAmount
        }, TT.loadoutHeldPartCurrency)))
      })
    }

    function gk(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, IT.i)(Ck, kT.getSnapshot()),
        {
          t: lT
        } = (0, AT.B)();
      if (null === cT.loadout) return null;
      const MT = cT.notice;
      return (0, PT.jsx)(Pk, {
        view: cT,
        onDismiss: kT.dismiss,
        children: (0, PT.jsxs)(bT, {
          open: cT.open,
          onDismiss: kT.dismiss,
          title: lT(`${wT}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, PT.jsx)(Rk, {
            loadout: cT.loadout
          }),
          statusRefused: null === MT || void 0 === MT ? void 0 : MT.loadoutNoticeRefused,
          status: (0, PT.jsxs)(PT.Fragment, {
            children: [(0, PT.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: lT(`${wT}:loadoutRadioBadge`)
            }), null !== MT && lT(`${wT}:${MT.loadoutNoticeKey}`, {
              name: MT.loadoutNoticeName,
              tier: (0, sT.N)(MT.loadoutNoticeTier),
              max: String(cT.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, PT.jsx)(uk, {
            view: cT,
            controller: kT
          }), (0, PT.jsx)(Lk, {
            view: cT,
            controller: kT
          }), (0, PT.jsx)(Ek, {
            view: cT,
            controller: kT
          })]
        })
      })
    }

    function Uk(TT, kT, cT) {
      const lT = TT.locatorEntries.find((TT => TT.locatorEntryId === cT));
      if (!lT) return null;
      const MT = lT.locatorEntryName;
      if ("locatorDisarm" === kT) return lT.locatorEntryArmed ? {
        board: Yk(TT, null),
        notice: Bk("locatorNoticeDisarmed", MT)
      } : null;
      if ("locatorArm" === kT) return lT.locatorEntryOwned && !lT.locatorEntryArmed ? {
        board: Yk(TT, cT),
        notice: Bk("locatorNoticeArmed", MT)
      } : null;
      if (lT.locatorEntryOwned || TT.locatorCoins < lT.locatorEntryPrice) return null;
      const KT = Yk({
        ...TT,
        locatorCoins: TT.locatorCoins - lT.locatorEntryPrice
      }, cT);
      return {
        board: {
          ...KT,
          locatorEntries: KT.locatorEntries.map((TT => TT.locatorEntryId === cT ? {
            ...TT,
            locatorEntryOwned: !0
          } : TT))
        },
        notice: Bk("locatorNoticeBought", MT)
      }
    }

    function Yk(TT, kT) {
      return {
        ...TT,
        locatorEntries: TT.locatorEntries.map((TT => {
          const cT = TT.locatorEntryId === kT;
          return TT.locatorEntryArmed === cT ? TT : {
            ...TT,
            locatorEntryArmed: cT
          }
        }))
      }
    }

    function Bk(TT, kT) {
      return {
        locatorNoticeKey: TT,
        locatorNoticeRefused: !1,
        locatorNoticeName: kT
      }
    }
    const Wk = "containmentLocatorView";
    class nk extends Tk {
      constructor(TT, kT, cT, lT) {
        super(TT, kT, cT, lT, "locator", Uk), this.snapshot = this.buildSnapshot()
      }
      messageOpens(TT) {
        return TT.locatorMessageOpens
      }
      messageNotice(TT) {
        return TT.locatorNotice
      }
      openingSelection(TT) {
        var kT;
        const cT = TT.locatorEntries;
        return (null !== (kT = cT.find((TT => TT.locatorEntryArmed))) && void 0 !== kT ? kT : cT[0]).locatorEntryId
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
    const pk = {
        locatorContained: `${wT}:locatorFlavourContained`,
        locatorEncountered: `${wT}:locatorFlavourEncountered`,
        locatorUnseen: `${wT}:locatorFlavourUnseen`
      },
      ik = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${wT}:locatorAttunedNormal`,
        codexHardOnly: `${wT}:locatorAttunedHard`
      };

    function qk() {
      return (0, PT.jsx)(PT.Fragment, {
        children: Array.from({
          length: 5
        }, ((TT, kT) => (0, PT.jsx)("span", {
          className: "LocatorFly",
          children: (0, PT.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, kT)))
      })
    }

    function sk(TT) {
      let {
        entry: kT
      } = TT;
      const {
        t: cT
      } = (0, AT.B)();
      return kT.locatorEntryArmed ? (0, PT.jsx)("span", {
        className: "BoardBadge Armed",
        children: cT(`${wT}:locatorArmedBadge`)
      }) : kT.locatorEntryOwned ? (0, PT.jsx)("span", {
        className: "BoardBadge",
        children: cT(`${wT}:locatorOwnedBadge`)
      }) : null
    }

    function Tc(TT) {
      let {
        entry: kT,
        coins: cT,
        inTile: lT = !1
      } = TT;
      return (0, PT.jsx)(oT, {
        itemName: mT,
        amount: kT.locatorEntryPrice,
        ty: cT,
        inTile: lT
      })
    }

    function kc(TT) {
      let {
        view: kT,
        controller: cT,
        entry: lT
      } = TT;
      const {
        t: MT
      } = (0, AT.B)(), KT = lT.locatorEntryId, OT = kT.locators.locatorEntries.find((TT => TT.locatorEntryArmed && TT !== lT));
      return (0, PT.jsxs)("div", {
        className: "BoardActions",
        children: [lT.locatorEntryArmed && (0, PT.jsx)(vT.P, {
          disabled: kT.pending,
          onClick: () => {
            cT.act("locatorDisarm", KT)
          },
          children: MT(`${wT}:locatorDisarm`)
        }), lT.locatorEntryOwned && !lT.locatorEntryArmed && (0, PT.jsx)(vT.e, {
          disabled: kT.pending,
          onClick: () => {
            cT.act("locatorArm", KT)
          },
          children: MT(`${wT}:locatorArm`)
        }), !lT.locatorEntryOwned && (0, PT.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, PT.jsx)(Tc, {
            entry: lT,
            coins: kT.locators.locatorCoins
          }), (0, PT.jsx)(vT.m, {
            disabled: kT.locators.locatorCoins < lT.locatorEntryPrice || kT.pending,
            onClick: () => {
              cT.act("locatorBuy", KT)
            },
            children: MT(`${wT}:locatorBuy`)
          })]
        }), OT && !lT.locatorEntryArmed && (0, PT.jsx)("span", {
          className: "BoardHint",
          children: MT(`${wT}:locatorReplacesHint`, {
            name: OT.locatorEntryName
          })
        })]
      })
    }

    function cc(TT) {
      let {
        entry: kT
      } = TT;
      return "locatorUnseen" === kT.locatorEntryStanding ? (0, PT.jsx)(zT, {
        itemName: "Compass"
      }) : (0, PT.jsx)(JT, {
        anomalyId: kT.locatorEntryId,
        caught: "locatorContained" === kT.locatorEntryStanding
      })
    }

    function lc(TT) {
      let {
        view: kT,
        controller: cT,
        entry: lT
      } = TT;
      const {
        t: MT
      } = (0, AT.B)(), KT = ik[lT.locatorEntryDifficulty];
      return (0, PT.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, PT.jsxs)("div", {
          className: xT()("LocatorLabel", {
            Armed: lT.locatorEntryArmed
          }),
          children: [(0, PT.jsx)(VT, {
            icon: (0, PT.jsx)(cc, {
              entry: lT
            }),
            name: MT(`${wT}:locatorName`, {
              name: lT.locatorEntryName
            }),
            children: (0, PT.jsx)(sk, {
              entry: lT
            })
          }), (0, PT.jsx)("p", {
            className: "BoardDescription",
            children: MT(lT.locatorEntryArmed ? `${wT}:locatorFlavourArmed` : pk[lT.locatorEntryStanding])
          }), null !== KT && (0, PT.jsx)("p", {
            className: "LocatorAttuned",
            children: MT(KT)
          }), (0, PT.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: MT(`${wT}:locatorUsage`)
          })]
        }), (0, PT.jsx)(kc, {
          view: kT,
          controller: cT,
          entry: lT
        })]
      })
    }

    function Mc(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, IT.i)(Wk, kT.getSnapshot()),
        {
          t: lT
        } = (0, AT.B)(),
        MT = cT.locators;
      if (null === MT) return null;
      const KT = MT.locatorEntries.find((TT => TT.locatorEntryId === cT.selectedId)),
        OT = cT.notice;
      return (0, PT.jsxs)(bT, {
        open: cT.open,
        onDismiss: kT.dismiss,
        title: lT(`${wT}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, PT.jsx)(qk, {}),
        headerExtra: (0, PT.jsx)(ET, {
          coins: MT.locatorCoins
        }),
        statusRefused: null === OT || void 0 === OT ? void 0 : OT.locatorNoticeRefused,
        status: (0, PT.jsxs)(PT.Fragment, {
          children: [(0, PT.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: lT(`${wT}:locatorKeeperName`)
          }), null !== OT && lT(`${wT}:${OT.locatorNoticeKey}`, {
            name: OT.locatorNoticeName
          })]
        }),
        children: [(0, PT.jsx)("div", {
          className: "BoardTiles",
          children: MT.locatorEntries.map((TT => (0, PT.jsxs)(GT, {
            icon: (0, PT.jsx)(cc, {
              entry: TT
            }),
            name: TT.locatorEntryName,
            selected: TT === KT,
            locked: !1,
            className: xT()("LocatorTag", {
              Armed: TT.locatorEntryArmed
            }),
            onSelect: () => {
              kT.select(TT.locatorEntryId)
            },
            children: [(0, PT.jsx)(sk, {
              entry: TT
            }), !TT.locatorEntryOwned && (0, PT.jsx)(Tc, {
              entry: TT,
              coins: MT.locatorCoins,
              inTile: !0
            })]
          }, TT.locatorEntryId)))
        }), (0, PT.jsx)(lc, {
          view: cT,
          controller: kT,
          entry: KT
        })]
      })
    }

    function Kc(TT) {
      let {
        loadout: kT,
        codex: cT,
        locator: lT
      } = TT;
      return (0, PT.jsxs)(PT.Fragment, {
        children: [(0, PT.jsx)(gk, {
          controller: kT
        }), (0, PT.jsx)(qT, {
          controller: cT
        }), (0, PT.jsx)(Mc, {
          controller: lT
        })]
      })
    }
    var Oc = cT(38397);
    class yc {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = TT, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Oc.b({
          spacingMs: 0,
          now: kT
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(TT, kT) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, kT(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(TT), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
    }
    var fc = cT(38394);
    const xc = new Map([
      ["npc_general", tk],
      ["npc_tentacle_guy", fc]
    ]);

    function Ic(TT) {
      const kT = xc.get(TT);
      if (void 0 === kT) return null;
      const cT = document.createElement("img");
      return cT.src = kT, cT.alt = "", cT.draggable = !1, cT.style.imageRendering = "pixelated", cT
    }
    const Ac = function() {
      let TT, kT = !1,
        cT = null,
        fT = null;
      const xT = [],
        IT = TT => {
          for (const kT of xT) kT !== TT && kT.close();
          (0, yT.m)()
        },
        AT = TT => {
          TT && (0, yT.f)()
        },
        CT = new yc((kT => {
          TT.sendCommand(kT)
        })),
        jT = new jk((TT => {
          OT.k.nt(Ck, TT, !0)
        }), IT, AT, CT),
        vT = new XT((TT => {
          OT.k.nt(uT, TT, !0)
        }), IT, AT),
        tT = new nk((TT => {
          OT.k.nt(Wk, TT, !0)
        }), IT, AT, CT);
      xT.push(jT, vT, tT);
      return {
        onCreate: kT => {
          TT = kT, cT = (0, yT.q)(null, {
            content: (0, lT.createElement)(Kc, {
              loadout: jT,
              codex: vT,
              locator: tT
            }),
            onClose: () => {
              for (const TT of xT) TT.close()
            }
          }), fT = (0, KT.h)(Ic)
        },
        onReceivedMessageFromServer: (TT, kT) => {
          "containmentLoadout" === TT ? jT.Av(kT) : "containmentLoadoutClose" === TT ? jT.isOpen() && (jT.close(), (0, yT.d)()) : "containmentCodex" === TT ? vT.Av(kT) : "containmentLocator" === TT && tT.Av(kT)
        },
        UA: () => {
          kT || MT.e.get("loadingOverlayVisible") || (kT = !0, TT.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var TT, kT;
          null === (TT = cT) || void 0 === TT || TT(), cT = null, null === (kT = fT) || void 0 === kT || kT(), fT = null;
          for (const cT of xT) cT.dispose();
          CT.dispose()
        }
      }
    }
  },
  36717: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => ET,
      B: () => ZT,
      C: () => GT,
      D: () => uT,
      d: () => fT,
      f: () => zT,
      h: () => yT,
      l: () => eT,
      n: () => mT,
      o: () => FT,
      q: () => HT,
      t: () => oT,
      u: () => wT,
      w: () => VT
    });
    var lT = cT(47);
    const MT = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      KT = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      OT = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      yT = KT.filter((TT => "docsButton" !== TT)),
      fT = OT.filter((TT => "aiHelperButton" !== TT)),
      xT = "codeEditorTutorials",
      IT = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      AT = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let CT = null,
      jT = null;
    const vT = new Set,
      tT = new Set;
    let hT = null;
    const NT = new Set,
      QT = new Set;

    function ST() {
      QT.forEach((TT => {
        TT()
      }))
    }

    function DT() {
      if (!CT) {
        const TT = lT.e.getItem(xT);
        CT = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof TT && null !== TT ? TT : {}
        }
      }
      return CT
    }

    function aT(TT) {
      const kT = DT();
      kT[TT] || (CT = {
        ...kT,
        [TT]: !0
      }, lT.e.setItem(xT, CT))
    }

    function FT(TT) {
      return "docsOverview" === TT ? KT : "aiHelperOverview" === TT ? OT : jT ? MT[jT] : []
    }

    function rT(TT) {
      return ("worldCodeButton" !== TT || !DT().worldCodeIntroShown) && !NT.has(TT)
    }

    function PT(TT) {
      var kT;
      return (null === (kT = hT) || void 0 === kT ? void 0 : kT.name) === TT ? hT.stepsDone : vT
    }

    function wT(TT, kT) {
      if (! function(TT) {
          return hT ? hT.name === TT : "welcome" === TT
        }(TT) || !rT(kT) || PT(TT).has(kT)) return !1;
      if (hT) return !0;
      const cT = IT[kT];
      return cT ? !DT()[cT] || tT.has(kT) : !DT()[AT[TT]]
    }

    function mT(TT) {
      var kT;
      return null !== (kT = FT(TT).find((kT => wT(TT, kT)))) && void 0 !== kT ? kT : null
    }

    function bT(TT) {
      var kT;
      aT(AT[TT]), (null === (kT = hT) || void 0 === kT ? void 0 : kT.name) === TT && (hT = null)
    }

    function zT(TT) {
      const kT = (hT ? [hT.name] : ["welcome", "docsOverview"]).find((kT => mT(kT) === TT));
      if (!kT) return;
      PT(kT).add(TT);
      const cT = IT[TT];
      cT && (aT(cT), hT || tT.add(TT)), null === mT(kT) && bT(kT), ST()
    }

    function JT(TT, kT) {
      const cT = FT(TT),
        lT = PT(TT);
      for (let MT = cT.indexOf(kT) - 1; MT >= 0; MT--)
        if (lT.has(cT[MT]) && rT(cT[MT])) return cT[MT];
      return null
    }

    function oT(TT, kT) {
      return null !== JT(TT, kT)
    }

    function HT(TT, kT) {
      const cT = JT(TT, kT);
      cT && (PT(TT).delete(cT), ST())
    }

    function eT(TT) {
      bT(TT), "welcome" === TT && FT("welcome").forEach((TT => {
        const kT = IT[TT];
        kT && aT(kT)
      })), ST()
    }

    function GT(TT) {
      hT = {
        name: TT,
        stepsDone: new Set
      }, ST()
    }

    function VT() {
      (hT || 0 !== vT.size || 0 !== tT.size) && (hT = null, vT.clear(), tT.clear(), ST())
    }

    function ET(TT, kT) {
      const cT = kT ? TT : jT === TT ? null : jT;
      cT !== jT && (jT = cT, ST())
    }

    function ZT(TT, kT) {
      NT.has(TT) === kT && (kT ? NT.delete(TT) : NT.add(TT), ST())
    }

    function uT(TT) {
      return QT.add(TT), () => {
        QT.delete(TT)
      }
    }
  },
  39074: (TT, kT, cT) => {
    var lT = {
      "./breach-zero-uncaught.webp": 39076,
      "./breach-zero.webp": 39084,
      "./brood-father-uncaught.webp": 39089,
      "./brood-father.webp": 39091,
      "./carousel-uncaught.webp": 39099,
      "./carousel.webp": 39104,
      "./deadlock-uncaught.webp": 39108,
      "./deadlock.webp": 39112,
      "./frost-revenant-uncaught.webp": 39116,
      "./frost-revenant.webp": 39120,
      "./hollow-choir-uncaught.webp": 39128,
      "./hollow-choir.webp": 39134,
      "./magma-warden-uncaught.webp": 39136,
      "./magma-warden.webp": 39144,
      "./patient-zero-uncaught.webp": 39152,
      "./patient-zero.webp": 39161,
      "./siege-engine-uncaught.webp": 39170,
      "./siege-engine.webp": 39174,
      "./warp-stalker-uncaught.webp": 39177,
      "./warp-stalker.webp": 39179
    };

    function MT(TT) {
      var kT = KT(TT);
      return cT(kT)
    }

    function KT(TT) {
      if (!cT.o(lT, TT)) {
        var kT = new Error("Cannot find module '" + TT + "'");
        throw kT.code = "MODULE_NOT_FOUND", kT
      }
      return lT[TT]
    }
    MT.keys = function() {
      return Object.keys(lT)
    }, MT.resolve = KT, TT.exports = MT, MT.id = 39074
  },
  39076: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39084: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39089: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39091: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39099: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39104: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39108: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39112: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39116: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39120: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39128: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39134: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39136: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39144: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39152: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39161: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39170: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39174: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39177: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39179: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38394: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);