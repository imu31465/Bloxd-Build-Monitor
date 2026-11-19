export const id = 14;
export const ids = [14];
export const modules = {
  35839: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => RT,
      c: () => mT,
      g: () => eT,
      i: () => cT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(68),
      XT = IT(1340),
      BT = IT(1408),
      FT = IT(1337),
      ST = IT(1249),
      DT = IT(1171),
      LT = IT(35842),
      xT = IT(1083);

    function cT(TT) {
      const [oT, IT] = (0, kT.useState)((() => (0, LT.n)(TT)));
      return (0, kT.useEffect)((() => (IT((0, LT.n)(TT)), (0, LT.S)((() => {
        IT((0, LT.n)(TT))
      })))), [TT]), oT
    }

    function KT(TT, oT) {
      "function" === typeof TT ? TT(oT) : TT && (TT.current = oT)
    }

    function MT(TT) {
      let {
        tutorial: oT,
        step: IT,
        enabled: iT = !0
      } = TT;
      const zT = cT(oT);
      return iT && zT === IT
    }

    function rT(TT, oT) {
      const IT = (0, LT.r)(TT),
        iT = IT.indexOf(oT);
      return !IT.slice(iT + 1).some((oT => (0, LT.D)(TT, oT)))
    }

    function AT(TT, oT, IT, iT) {
      let {
        tutorial: zT,
        step: kT,
        waitForClick: WT = !1,
        onPrevious: XT
      } = TT;
      const BT = oT && (0, LT.z)(zT, kT),
        FT = oT && !rT(zT, kT),
        DT = WT ? iT : IT;
      let xT = null;
      BT ? xT = () => {
        null === XT || void 0 === XT || XT(), (0, LT.v)(zT, kT)
      } : FT && (xT = () => {
        (0, LT.m)(zT)
      }), (0, ST.s)("popup", null !== DT && void 0 !== DT ? DT : IT, xT, oT && null !== DT, null, BT ? void 0 : "controller:menusSkipTutorial")
    }

    function gT(TT) {
      let {
        tutorial: oT,
        step: IT,
        text: iT,
        waitForClick: zT = !1,
        onPrevious: kT
      } = TT;
      const {
        t: WT
      } = (0, DT.t)(), XT = rT(oT, IT);
      return (0, xT.jsxs)(xT.Fragment, {
        children: [(0, xT.jsx)("div", {
          className: "TutorialStepText",
          children: iT
        }), (0, xT.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, LT.z)(oT, IT) && (0, xT.jsx)(BT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === kT || void 0 === kT || kT(), (0, LT.v)(oT, IT)
            },
            children: WT("tutorial:back")
          }), !zT && (0, xT.jsx)(BT.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LT.e)(IT)
            },
            padDefaultFocus: !0,
            children: WT(XT ? "tutorial:done" : "tutorial:next")
          }), !XT && (0, xT.jsx)(BT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LT.m)(oT)
            },
            children: WT("tutorial:skip")
          })]
        })]
      })
    }
    const hT = 6;

    function wT(TT) {
      let {
        rect: oT,
        margin: IT
      } = TT;
      const iT = Math.max(0, oT.top - IT),
        zT = oT.bottom + IT,
        kT = Math.max(0, oT.left - IT),
        WT = oT.right + IT;
      return (0, xT.jsxs)(xT.Fragment, {
        children: [(0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: iT
          }
        }), (0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: zT,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: iT,
            left: 0,
            width: kT,
            height: zT - iT
          }
        }), (0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: iT,
            left: WT,
            right: 0,
            height: zT - iT
          }
        })]
      })
    }

    function mT(TT) {
      let {
        target: oT,
        placement: IT,
        boxRef: iT,
        className: BT,
        spotlightMargin: ST = hT,
        children: DT
      } = TT;
      const {
        getArrowProps: LT,
        getTooltipProps: cT,
        setTooltipRef: KT,
        setTriggerRef: MT
      } = (0, XT.b)({
        placement: IT,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, ST]
      });
      (0, kT.useLayoutEffect)((() => {
        MT(oT)
      }), [oT, MT]);
      const rT = function(TT, oT) {
        const [IT, iT] = (0, kT.useState)(null);
        return (0, kT.useEffect)((() => {
          if (!oT || !TT) return void iT(null);
          let IT = 0,
            zT = null;
          const kT = () => {
            const oT = TT.getBoundingClientRect();
            zT && oT.left === zT.left && oT.top === zT.top && oT.width === zT.width && oT.height === zT.height || (zT = oT, iT(oT)), IT = requestAnimationFrame(kT)
          };
          return kT(), () => {
            cancelAnimationFrame(IT)
          }
        }), [TT, oT]), IT
      }(oT, !0);
      (0, kT.useEffect)((() => {
        null === oT || void 0 === oT || oT.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [oT]);
      const AT = (0, kT.useCallback)((TT => {
        KT(TT), iT && (iT.current = TT)
      }), [KT, iT]);
      return (0, WT.createPortal)((0, xT.jsxs)(xT.Fragment, {
        children: [rT && (0, xT.jsx)(wT, {
          rect: rT,
          margin: ST
        }), (0, xT.jsxs)("div", {
          ref: AT,
          ...cT({
            className: zT()("tooltip-container SmallTextLight TutorialStep", BT)
          }),
          children: [DT, (0, xT.jsx)("div", {
            ...LT({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, FT.g)())
    }
    const eT = (0, kT.forwardRef)((function(TT, oT) {
      let {
        placement: IT = "right",
        children: iT,
        ...zT
      } = TT;
      const WT = MT(zT),
        XT = (0, kT.useRef)(null),
        BT = (0, kT.useRef)(null);
      AT(zT, WT, XT, BT);
      const [FT, ST] = (0, kT.useState)(null), DT = iT.ref, LT = (0, kT.useCallback)((TT => {
        BT.current = TT, ST(TT), KT(oT, TT), KT(DT, TT)
      }), [oT, DT]);
      return (0, xT.jsxs)(xT.Fragment, {
        children: [(0, kT.cloneElement)(iT, {
          ref: LT
        }), WT && (0, xT.jsx)(mT, {
          target: FT,
          placement: IT,
          boxRef: XT,
          children: (0, xT.jsx)(gT, {
            ...zT
          })
        })]
      })
    }));

    function RT(TT) {
      const oT = MT(TT),
        IT = (0, kT.useRef)(null);
      return AT(TT, oT, IT, null), oT ? (0, WT.createPortal)((0, xT.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, xT.jsx)("div", {
          ref: IT,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, xT.jsx)(gT, {
            ...TT
          })
        })
      }), (0, FT.g)()) : null
    }
  },
  37532: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    const iT = 4,
      zT = 12e3,
      kT = 1e3;
    class WT {
      constructor() {
        let {
          limit: TT = iT,
          windowMs: oT = zT,
          spacingMs: IT = kT,
          now: WT = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = TT, this.windowMs = oT, this.spacingMs = IT, this.now = WT
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
          oT = this.lastSentAt + this.spacingMs,
          IT = Math.min(oT > TT ? oT : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        IT !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, IT - TT)))
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  37506: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      constructor(TT, oT, IT) {
        this.XM = TT, this.beforeOpen = oT, this.afterClose = IT, this.open = !1, this.Ec = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Ec && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.Ec = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Ec || (this.snapshot = this.buildSnapshot(), this.XM(this.snapshot))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  38239: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => LI
    });
    var iT = IT(46);
    var zT = IT(12),
      kT = IT(1738),
      WT = IT(16),
      XT = IT(35599),
      BT = IT(1042),
      FT = IT.n(BT),
      ST = IT(1403),
      DT = IT(1171),
      LT = IT(4050),
      xT = IT(1316),
      cT = IT(1408),
      KT = IT(1747),
      MT = IT(1337),
      rT = IT(1729),
      AT = IT(1784),
      gT = IT(199);
    const hT = IT(38248),
      wT = Object.fromEntries(hT.keys().map((TT => [TT.replace(/^\.\/(.*)\.webp$/, "$1"), hT(TT)]))),
      mT = new Set;

    function eT(TT, oT) {
      const IT = oT ? TT : `${TT}-uncaught`,
        iT = (0, gT.b)(wT, IT);
      return void 0 !== iT || mT.has(IT) || (mT.add(IT), console.warn(`Containment Breach has no mugshot ${IT}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), iT
    }
    var RT = IT(1083);
    const uT = "containmentBreach",
      vT = "Gold Coin";

    function ET(TT) {
      let {
        open: oT,
        onDismiss: IT,
        title: iT,
        className: zT,
        decor: kT,
        headerExtra: WT,
        status: XT,
        statusRefused: BT = !1,
        children: ST
      } = TT;
      const DT = `${zT}Title`;
      return (0, RT.jsx)(LT.e, {
        show: oT,
        close: IT,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, RT.jsxs)("section", {
          className: FT()("ContainmentBoardPanel", zT),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": DT,
          children: [kT && (0, RT.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: kT
          }), (0, RT.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, RT.jsx)("h2", {
              id: DT,
              className: "VisuallyHidden",
              children: iT
            }), WT, (0, RT.jsx)(cT.j, {
              onClick: IT
            })]
          }), (0, RT.jsx)("div", {
            className: "BoardBody",
            children: ST
          }), void 0 !== XT && (0, RT.jsx)("footer", {
            className: FT()("BoardStatus", {
              Refused: BT
            }),
            children: XT
          })]
        })
      })
    }

    function fT(TT) {
      let {
        itemName: oT
      } = TT;
      return (0, RT.jsx)(KT.c, {
        itemName: oT,
        amount: 0
      })
    }

    function CT(TT) {
      let {
        anomalyId: oT,
        caught: IT
      } = TT;
      const zT = (0, iT.useRef)(null);
      return (0, xT.c)(zT, !IT), (0, RT.jsx)("span", {
        ref: zT,
        className: FT()("BoardMugshot", {
          Uncaught: !IT
        }),
        children: (0, RT.jsx)("img", {
          src: eT(oT, IT),
          alt: "",
          draggable: !1
        })
      })
    }

    function jT(TT) {
      let {
        itemName: oT,
        amount: IT,
        kS: iT,
        inTile: zT = !1
      } = TT;
      return (0, RT.jsx)(MT.e, {
        delayShow: 200,
        hoverOnly: zT,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, RT.jsx)(UT, {
          itemName: oT,
          amount: IT,
          kS: iT
        }),
        children: (0, RT.jsxs)("span", {
          className: FT()("BoardChip", {
            Short: void 0 !== iT && iT < IT
          }),
          children: [(0, RT.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, RT.jsx)(fT, {
              itemName: oT
            })
          }), IT.toLocaleString()]
        })
      })
    }
    const JT = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function UT(TT) {
      var oT;
      let {
        itemName: IT,
        amount: iT,
        kS: zT
      } = TT;
      const {
        t: kT
      } = (0, DT.t)(), WT = (0, AT.d)("itemInfo", (TT => TT[IT])), {
        lore: XT,
        droppedBy: BT
      } = function(TT) {
        if ("string" !== typeof TT) return {
          lore: TT,
          droppedBy: null
        };
        const oT = JT.exec(TT);
        return null === oT ? {
          lore: TT,
          droppedBy: null
        } : {
          lore: "" === oT[1] ? void 0 : oT[1],
          droppedBy: oT[2]
        }
      }(null === WT || void 0 === WT ? void 0 : WT.description);
      return (0, RT.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, RT.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, RT.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, RT.jsx)(fT, {
              itemName: IT
            })
          }), (0, RT.jsx)(rT.c, {
            text: null !== (oT = null === WT || void 0 === WT ? void 0 : WT.displayName) && void 0 !== oT ? oT : IT,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== XT || null !== BT) && (0, RT.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== XT && (0, RT.jsx)(rT.c, {
            text: XT,
            className: "BoardChipTooltipDescription"
          }), null !== BT && (0, RT.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, RT.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: kT(`${uT}:chipDroppedBy`)
            }), BT]
          })]
        }), void 0 !== zT && (0, RT.jsxs)("div", {
          className: FT()("BoardChipTooltipHeld", {
            Short: zT < iT
          }),
          children: [(0, RT.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: kT(`${uT}:chipYouHave`)
          }), (0, RT.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, RT.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: zT.toLocaleString()
            }), ` / ${iT.toLocaleString()}`]
          }), (0, RT.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, RT.jsx)("span", {
              style: {
                width: (iT > 0 ? 100 * Math.min(1, zT / iT) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function aT(TT) {
      let {
        icon: oT,
        name: IT,
        selected: iT,
        locked: zT,
        className: kT,
        buttonRef: WT,
        onSelect: XT,
        children: BT
      } = TT;
      return (0, RT.jsxs)("button", {
        ref: WT,
        type: "button",
        className: FT()("BoardTile", kT, {
          Selected: iT,
          Locked: zT
        }),
        onClick: XT,
        children: [(0, RT.jsx)("span", {
          className: "BoardTileIcon",
          children: oT
        }), (0, RT.jsx)("span", {
          className: "BoardTileName",
          children: IT
        }), BT]
      })
    }

    function YT(TT) {
      let {
        icon: oT,
        name: IT,
        children: iT
      } = TT;
      return (0, RT.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, RT.jsx)("span", {
          className: "BoardDetailIcon",
          children: oT
        }), (0, RT.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, RT.jsx)("h3", {
            children: IT
          }), (0, RT.jsx)("span", {
            className: "BoardDetailStatus",
            children: iT
          })]
        })]
      })
    }

    function QT(TT) {
      let {
        coins: oT,
        children: IT
      } = TT;
      return (0, RT.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, RT.jsx)(jT, {
          itemName: vT,
          amount: oT
        }), IT]
      })
    }
    var OT = IT(37506);
    const HT = "containmentCodexView";
    class nT extends OT.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = TT => {
          this.selectedId = TT, this.emit()
        }
      }
      Jc(TT) {
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
    const qT = {
        codexAnyDifficulty: `${uT}:codexNeedsAny`,
        codexNormalOnly: `${uT}:codexNeedsNormal`,
        codexHardOnly: `${uT}:codexNeedsHard`
      },
      ZT = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      lT = {
        codexContained: `${uT}:codexContainedBadge`,
        codexEncountered: `${uT}:codexEncounteredBadge`,
        codexUnidentified: `${uT}:codexUnidentifiedBadge`
      },
      sT = ["94%", "81%", "88%", "46%", "72%"];

    function tT(TT) {
      let {
        entry: oT
      } = TT;
      const {
        t: IT
      } = (0, DT.t)();
      return (0, RT.jsx)("span", {
        className: FT()("BoardBadge", ZT[oT.codexEntryState]),
        children: IT(lT[oT.codexEntryState])
      })
    }

    function GT(TT) {
      const {
        t: oT
      } = (0, DT.t)();
      return "codexUnidentified" === TT.codexEntryState ? oT(`${uT}:codexUnidentifiedName`) : TT.codexEntryName
    }

    function pT(TT) {
      let {
        entry: oT
      } = TT;
      return "codexUnidentified" === oT.codexEntryState ? (0, RT.jsx)(fT, {
        itemName: "Book"
      }) : (0, RT.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, RT.jsx)(CT, {
          anomalyId: oT.codexEntryId,
          caught: "codexContained" === oT.codexEntryState
        }), (0, RT.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function bT(TT) {
      let {
        entry: oT,
        selected: IT,
        onSelect: iT
      } = TT;
      const zT = "codexUnidentified" === oT.codexEntryState;
      return (0, RT.jsxs)(aT, {
        icon: (0, RT.jsx)(pT, {
          entry: oT
        }),
        name: GT(oT),
        selected: IT,
        locked: zT,
        className: FT()("CodexFolder", ZT[oT.codexEntryState]),
        onSelect: () => {
          iT(oT.codexEntryId)
        },
        children: [!zT && (0, RT.jsx)(tT, {
          entry: oT
        }), zT && (0, RT.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function yT(TT) {
      let {
        count: oT
      } = TT;
      const IT = [];
      for (let iT = Math.min(oT, 25); iT > 0; iT -= 5) IT.push(Math.min(iT, 5));
      return (0, RT.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: IT.map(((TT, oT) => (0, RT.jsx)("span", {
          className: FT()("CodexTallyGroup", {
            Gate: 5 === TT
          }),
          children: Array.from({
            length: Math.min(TT, 4)
          }, ((TT, oT) => (0, RT.jsx)("span", {
            className: "CodexTallyMark"
          }, oT)))
        }, oT)))
      })
    }

    function NT(TT) {
      let {
        contained: oT,
        total: IT
      } = TT;
      const {
        t: iT
      } = (0, DT.t)();
      return (0, RT.jsxs)("div", {
        className: "CodexProgress",
        children: [iT(`${uT}:codexProgress`, {
          contained: String(oT),
          total: String(IT)
        }), (0, RT.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, RT.jsx)("span", {
            style: {
              width: oT / IT * 100 + "%"
            }
          })
        })]
      })
    }

    function PT(TT) {
      let {
        entry: oT,
        fileNumber: IT
      } = TT;
      const {
        t: iT
      } = (0, DT.t)(), zT = "codexContained" === oT.codexEntryState;
      return (0, RT.jsx)("section", {
        className: "BoardDetail",
        children: (0, RT.jsxs)("article", {
          className: FT()("CodexDossier", ZT[oT.codexEntryState]),
          children: [(0, RT.jsx)("span", {
            className: "CodexFileNumber",
            children: iT(`${uT}:codexFileNumber`, {
              number: String(IT).padStart(3, "0")
            })
          }), (0, RT.jsx)(YT, {
            icon: (0, RT.jsx)(pT, {
              entry: oT
            }),
            name: GT(oT),
            children: (0, RT.jsx)(tT, {
              entry: oT
            })
          }), zT && (0, RT.jsxs)(RT.Fragment, {
            children: [(0, RT.jsx)("p", {
              className: "BoardDescription",
              children: oT.codexEntryLore
            }), (0, RT.jsxs)("p", {
              className: "CodexTally",
              children: [iT(`${uT}:codexContainments`, {
                count: String(oT.codexEntryContainedCount)
              }), (0, RT.jsx)(yT, {
                count: oT.codexEntryContainedCount
              })]
            }), (0, RT.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: iT(`${uT}:codexContainedBadge`)
            })]
          }), !zT && (0, RT.jsxs)(RT.Fragment, {
            children: [(0, RT.jsxs)("div", {
              className: "CodexRedaction",
              children: [sT.map((TT => (0, RT.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: TT
                }
              }, TT))), (0, RT.jsx)("p", {
                className: "CodexRedacted",
                children: iT(`${uT}:codexRedacted`)
              })]
            }), "" !== oT.codexEntryHint && (0, RT.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, RT.jsx)("h4", {
                children: iT(`${uT}:codexHintLabel`)
              }), (0, RT.jsx)("p", {
                children: oT.codexEntryHint
              })]
            }), (0, RT.jsx)("p", {
              className: "CodexClearance",
              children: iT(qT[oT.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function dT(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, ST.i)(HT, oT.getSnapshot()),
        {
          t: iT
        } = (0, DT.t)();
      if (0 === IT.entries.length) return null;
      const zT = IT.entries.find((TT => TT.codexEntryId === IT.selectedId)),
        kT = IT.entries.filter((TT => "codexContained" === TT.codexEntryState)).length,
        WT = IT.entries.map((TT => TT.codexEntryId)).sort().indexOf(zT.codexEntryId) + 1;
      return (0, RT.jsxs)(ET, {
        open: IT.open,
        onDismiss: oT.dismiss,
        title: iT(`${uT}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, RT.jsx)(NT, {
          contained: kT,
          total: IT.entries.length
        }),
        children: [(0, RT.jsx)("div", {
          className: "BoardTiles",
          children: IT.entries.map((TT => (0, RT.jsx)(bT, {
            entry: TT,
            selected: TT === zT,
            onSelect: oT.select
          }, TT.codexEntryId)))
        }), (0, RT.jsx)(PT, {
          entry: zT,
          fileNumber: WT
        })]
      })
    }
    var VT = IT(314);
    class To extends OT.d {
      constructor(TT, oT, IT, iT, zT, kT) {
        super(TT, oT, IT), this.pacer = iT, this.command = zT, this.predict = kT, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = TT => {
          this.selectedId = TT, this.emit()
        }, this.act = (TT, oT) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${TT} ${oT}`, this.rollBack)) return;
          const IT = this.predict(this.board, TT, oT);
          null !== IT && (this.board = IT.board, this.notice = IT.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = iT.subscribe((() => {
          this.emit()
        }))
      }
      Jc(TT) {
        const oT = this.messageOpens(TT);
        if (oT && this.open) return this.board === this.confirmed && (this.board = TT), this.confirmed = TT, void this.emit();
        if (this.board = TT, this.confirmed = TT, this.pacer.onReply(), oT) return this.notice = null, this.selectedId = this.openingSelection(TT), void this.show();
        const IT = this.messageNotice(TT);
        null !== IT && (this.notice = IT), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function oo(TT, oT) {
      return TT.loadoutCoins >= oT.loadoutCostCoins && oT.loadoutCostParts.every((oT => function(TT, oT) {
        return Io(TT, oT).loadoutHeldPartAmount
      }(TT, oT.loadoutPartCurrency) >= oT.loadoutPartAmount))
    }

    function Io(TT, oT) {
      return TT.loadoutHeldParts.find((TT => TT.loadoutHeldPartCurrency === oT))
    }

    function io(TT, oT) {
      return TT.loadoutSlots.find((TT => TT.loadoutSlotKind === oT))
    }

    function zo(TT) {
      return TT.loadoutPerks.filter((TT => TT.loadoutPerkEquipped)).length >= TT.loadoutMaxPerks
    }

    function ko(TT, oT, IT) {
      for (const zT of TT.loadoutSlots) {
        const iT = zT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === IT));
        if (iT) return "loadoutArmour" === zT.loadoutSlotKind ? Xo(TT, zT, iT, oT) : Wo(TT, zT, iT, oT)
      }
      const iT = TT.loadoutPerks.find((TT => TT.loadoutPerkId === IT));
      return iT ? function(TT, oT, IT) {
        const iT = oT.loadoutPerkOwned,
          zT = oT.loadoutPerkEquipped,
          kT = oT.loadoutPerkName,
          WT = zo(TT);
        if ("loadoutUnlock" === IT) {
          if (iT || !oo(TT, oT.loadoutPerkCost)) return null;
          const IT = {
            ...oT,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !WT
          };
          return {
            board: Fo(So(TT, oT.loadoutPerkCost), IT),
            notice: Do(WT ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", kT)
          }
        }
        if ("loadoutUpgrade" === IT || !iT || "loadoutEquip" === IT === zT || !zT && WT) return null;
        return {
          board: Fo(TT, {
            ...oT,
            loadoutPerkEquipped: !zT
          }),
          notice: Do(zT ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", kT)
        }
      }(TT, iT, oT) : null
    }

    function Wo(TT, oT, IT, iT) {
      const zT = IT.loadoutOptionOwnedTier,
        kT = IT.loadoutOptionName;
      if ("loadoutEquip" === iT) return 0 === zT ? null : {
        board: Bo(TT, oT, IT.loadoutOptionId, null),
        notice: Do("loadoutNoticeEquipped", kT)
      };
      const WT = "loadoutUnlock" === iT;
      if (WT && 0 !== zT || "loadoutUpgrade" === iT && (0 === zT || zT >= IT.loadoutOptionTiers.length) || "loadoutUnequip" === iT) return null;
      const XT = IT.loadoutOptionTiers[zT].loadoutTierCost;
      if (!oo(TT, XT)) return null;
      const BT = {
          ...IT,
          loadoutOptionOwnedTier: zT + 1
        },
        FT = WT ? IT.loadoutOptionId : oT.loadoutSlotEquippedId;
      return {
        board: Bo(So(TT, XT), oT, FT, BT),
        notice: WT ? Do("loadoutNoticeUnlocked", kT) : Do("loadoutNoticeUpgraded", kT, zT + 1)
      }
    }

    function Xo(TT, oT, IT, iT) {
      const zT = IT.loadoutOptionOwnedTier > 0,
        kT = IT.loadoutOptionName;
      if ("loadoutEquip" === iT && zT) return {
        board: Bo(TT, oT, IT.loadoutOptionId, null),
        notice: Do("loadoutNoticeEquipped", kT)
      };
      const WT = IT.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== iT || zT || !oo(TT, WT) ? null : {
        board: Bo(So(TT, WT), oT, IT.loadoutOptionId, {
          ...IT,
          loadoutOptionOwnedTier: 1
        }),
        notice: Do("loadoutNoticeUnlocked", kT)
      }
    }

    function Bo(TT, oT, IT, iT) {
      const zT = {
        ...oT,
        loadoutSlotEquippedId: IT,
        loadoutSlotOptions: oT.loadoutSlotOptions.map((TT => null !== iT && TT.loadoutOptionId === iT.loadoutOptionId ? iT : TT))
      };
      return {
        ...TT,
        loadoutSlots: TT.loadoutSlots.map((TT => TT === oT ? zT : TT))
      }
    }

    function Fo(TT, oT) {
      return {
        ...TT,
        loadoutPerks: TT.loadoutPerks.map((TT => TT.loadoutPerkId === oT.loadoutPerkId ? oT : TT))
      }
    }

    function So(TT, oT) {
      return {
        ...TT,
        loadoutCoins: TT.loadoutCoins - oT.loadoutCostCoins,
        loadoutHeldParts: TT.loadoutHeldParts.map((TT => {
          const IT = oT.loadoutCostParts.find((oT => oT.loadoutPartCurrency === TT.loadoutHeldPartCurrency));
          return IT ? {
            ...TT,
            loadoutHeldPartAmount: TT.loadoutHeldPartAmount - IT.loadoutPartAmount
          } : TT
        }))
      }
    }

    function Do(TT, oT) {
      return {
        loadoutNoticeKey: TT,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: oT,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Lo = "containmentLoadoutView";
    class xo extends To {
      constructor(TT, oT, IT, iT) {
        super(TT, oT, IT, iT, "loadout", ko), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = TT => {
          this.slot = TT, this.selectedId = co(this.board, TT), this.emit()
        }
      }
      messageOpens(TT) {
        return TT.loadoutMessageOpens
      }
      messageNotice(TT) {
        return TT.loadoutNotice
      }
      openingSelection(TT) {
        return co(TT, this.slot)
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

    function co(TT, oT) {
      if ("loadoutPerks" === oT) {
        var IT;
        const oT = TT.loadoutPerks;
        return (null !== (IT = oT.find((TT => TT.loadoutPerkEquipped))) && void 0 !== IT ? IT : oT[0]).loadoutPerkId
      }
      return io(TT, oT).loadoutSlotEquippedId
    }
    const Ko = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Mo = IT(35839),
      ro = IT(1249);
    const Ao = {
        loadoutPrimary: `${uT}:loadoutSlotPrimary`,
        loadoutSecondary: `${uT}:loadoutSlotSecondary`,
        loadoutOffensive: `${uT}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${uT}:loadoutSlotSelfHelp`,
        loadoutArmour: `${uT}:loadoutSlotArmour`,
        loadoutPerks: `${uT}:loadoutSlotPerks`
      },
      go = {
        section: "right",
        PL: "bottom",
        act: "top"
      },
      ho = (0, iT.createContext)({
        step: null,
        targetRef: () => {}
      });

    function wo() {
      const {
        step: TT,
        targetRef: oT
      } = (0, iT.useContext)(ho);
      return (IT, iT) => (null === TT || void 0 === TT ? void 0 : TT.kind) === IT && TT.id === iT ? oT : void 0
    }

    function mo(TT, oT) {
      const IT = oT.loadoutTargetId;
      if ("loadoutPerks" === oT.loadoutTargetSection) {
        const oT = TT.loadoutPerks.find((TT => TT.loadoutPerkId === IT));
        return {
          name: oT.loadoutPerkName,
          owned: oT.loadoutPerkOwned,
          equipped: oT.loadoutPerkEquipped
        }
      }
      const iT = io(TT, oT.loadoutTargetSection),
        zT = iT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === IT));
      return {
        name: zT.loadoutOptionName,
        owned: zT.loadoutOptionOwnedTier > 0,
        equipped: iT.loadoutSlotEquippedId === IT
      }
    }

    function eo(TT, oT, IT, iT) {
      const [zT, kT] = TT(`${uT}:${oT}`, {
        [IT]: "\x01"
      }).split("\x01");
      return (0, RT.jsxs)(RT.Fragment, {
        children: [zT, (0, RT.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: iT
        }), kT]
      })
    }

    function Ro(TT) {
      let {
        view: oT,
        onDismiss: IT,
        children: zT
      } = TT;
      const {
        t: kT
      } = (0, DT.t)(), WT = oT.loadout, XT = oT.open ? WT.loadoutWalkthrough.map((TT => ({
        target: TT,
        info: mo(WT, TT)
      }))).find((TT => {
        let {
          info: oT
        } = TT;
        return !oT.equipped
      })) : void 0;
      let BT = null,
        FT = null;
      if (void 0 !== XT) {
        const {
          target: TT,
          info: IT
        } = XT;
        oT.slot !== TT.loadoutTargetSection ? (BT = {
          kind: "section",
          id: TT.loadoutTargetSection
        }, FT = eo(kT, "loadoutWalkthroughSection", "section", kT(Ao[TT.loadoutTargetSection]))) : oT.selectedId !== TT.loadoutTargetId ? (BT = {
          kind: "PL",
          id: TT.loadoutTargetId
        }, FT = eo(kT, "loadoutWalkthroughPick", "name", IT.name)) : (BT = {
          kind: "act",
          id: TT.loadoutTargetId
        }, FT = eo(kT, IT.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", IT.name))
      }
      const ST = null === BT ? null : function(TT) {
          return `${TT.kind}:${TT.id}`
        }(BT),
        [LT, xT] = (0, iT.useState)(null),
        cT = (0, iT.useCallback)((TT => {
          xT((oT => null !== TT ? {
            key: ST,
            node: TT
          } : (null === oT || void 0 === oT ? void 0 : oT.key) === ST ? null : oT))
        }), [ST]),
        KT = null !== ST && (null === LT || void 0 === LT ? void 0 : LT.key) === ST ? LT.node : null;
      return (0, RT.jsxs)(ho.Provider, {
        value: {
          step: BT,
          targetRef: cT
        },
        children: [zT, null !== BT && null !== KT && (0, RT.jsx)(uo, {
          target: KT,
          placement: go[BT.kind],
          onDismiss: IT,
          children: FT
        }, ST)]
      })
    }

    function uo(TT) {
      let {
        target: oT,
        placement: IT,
        onDismiss: zT,
        children: kT
      } = TT;
      const {
        t: WT
      } = (0, DT.t)(), XT = (0, iT.useRef)(oT);
      return XT.current = oT, (0, ro.s)("popup", XT, zT), (0, RT.jsxs)(Mo.c, {
        target: oT,
        placement: IT,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, RT.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, RT.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Ko,
            alt: "",
            draggable: !1
          }), (0, RT.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: WT(`${uT}:operatorName`)
          }), (0, RT.jsx)(cT.j, {
            onClick: zT,
            ariaLabel: WT(`${uT}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, RT.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: kT
        })]
      })
    }
    const vo = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Eo(TT) {
      let {
        cost: oT,
        loadout: IT
      } = TT;
      const {
        t: iT
      } = (0, DT.t)();
      return oT.loadoutCostCoins <= 0 && 0 === oT.loadoutCostParts.length ? (0, RT.jsx)("span", {
        className: "LoadoutCost",
        children: iT(`${uT}:loadoutFree`)
      }) : (0, RT.jsxs)("span", {
        className: "LoadoutCost",
        children: [oT.loadoutCostCoins > 0 && (0, RT.jsx)(jT, {
          itemName: vT,
          amount: oT.loadoutCostCoins,
          kS: IT.loadoutCoins
        }), oT.loadoutCostParts.map((TT => {
          const oT = Io(IT, TT.loadoutPartCurrency);
          return (0, RT.jsx)(jT, {
            itemName: oT.loadoutHeldPartItem,
            amount: TT.loadoutPartAmount,
            kS: oT.loadoutHeldPartAmount
          }, TT.loadoutPartCurrency)
        }))]
      })
    }
    const fo = {
      loadoutStatFireRate: `${uT}:loadoutUnitPerMinute`,
      loadoutStatReload: `${uT}:loadoutUnitSeconds`,
      loadoutStatResupply: `${uT}:loadoutUnitSeconds`
    };

    function Co(TT) {
      return "loadoutStatPotency" === TT.loadoutStatKind ? (0, VT.U)(TT.loadoutStatValue) : String(TT.loadoutStatValue)
    }

    function jo(TT) {
      var oT;
      let {
        option: IT
      } = TT;
      const {
        t: iT
      } = (0, DT.t)(), zT = IT.loadoutOptionTiers, kT = null === (oT = zT[0]) || void 0 === oT ? void 0 : oT.loadoutTierStats.map((TT => TT.loadoutStatKind));
      if (!kT || 0 === kT.length) return null;
      const WT = IT.loadoutOptionOwnedTier,
        XT = (TT, oT) => {
          var IT;
          return null === (IT = zT[TT]) || void 0 === IT ? void 0 : IT.loadoutTierStats.find((TT => TT.loadoutStatKind === oT))
        };
      return (0, RT.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, RT.jsx)("thead", {
          children: (0, RT.jsxs)("tr", {
            children: [(0, RT.jsx)("th", {}), zT.map(((TT, oT) => (0, RT.jsx)("th", {
              className: FT()({
                Current: oT + 1 === WT,
                Next: oT === WT
              }),
              children: iT(`${uT}:loadoutTier`, {
                tier: (0, VT.U)(oT + 1)
              })
            }, oT)))]
          })
        }), (0, RT.jsx)("tbody", {
          children: kT.map((TT => {
            const oT = fo[TT];
            return (0, RT.jsxs)("tr", {
              children: [(0, RT.jsxs)("th", {
                scope: "row",
                children: [iT(`${uT}:${TT}`), oT && (0, RT.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: iT(oT)
                })]
              }), zT.map(((oT, IT) => {
                const iT = XT(IT, TT),
                  zT = IT > 0 ? XT(IT - 1, TT) : void 0,
                  kT = iT && zT ? iT.loadoutStatValue - zT.loadoutStatValue : 0,
                  BT = vo.has(TT) ? kT < 0 : kT > 0,
                  ST = IT === WT;
                return (0, RT.jsxs)("td", {
                  className: FT()({
                    Current: IT + 1 === WT,
                    Next: ST,
                    Gain: BT,
                    Owned: IT < WT
                  }),
                  children: [ST && BT && (0, RT.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: kT < 0 ? "\u25bc" : "\u25b2"
                  }), iT ? Co(iT) : "-"]
                }, IT)
              }))]
            }, TT)
          }))
        })]
      })
    }

    function Jo(TT) {
      let {
        view: oT,
        controller: IT,
        slot: iT,
        option: zT
      } = TT;
      const {
        t: kT
      } = (0, DT.t)(), WT = oT.loadout, XT = zT.loadoutOptionOwnedTier, BT = zT.loadoutOptionTiers.length, FT = iT.loadoutSlotEquippedId === zT.loadoutOptionId, ST = XT < BT ? zT.loadoutOptionTiers[XT].loadoutTierCost : null, LT = null !== ST && oo(WT, ST), xT = zT.loadoutOptionId, KT = wo();
      return (0, RT.jsxs)(RT.Fragment, {
        children: [(0, RT.jsx)(ao, {
          icon: zT.loadoutOptionIcon,
          name: zT.loadoutOptionName,
          status: 0 === XT ? kT(`${uT}:loadoutLocked`) : BT > 1 ? kT(`${uT}:loadoutTier`, {
            tier: (0, VT.U)(XT)
          }) : null,
          locked: 0 === XT,
          equipped: FT
        }), (0, RT.jsx)("p", {
          className: "BoardDescription",
          children: zT.loadoutOptionDescription
        }), (0, RT.jsx)(jo, {
          option: zT
        }), (0, RT.jsxs)("div", {
          ref: KT("act", xT),
          className: "BoardActions",
          children: [null !== ST && (0, RT.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, RT.jsx)(Eo, {
              cost: ST,
              loadout: WT
            }), (0, RT.jsx)(cT.m, {
              disabled: !LT || oT.pending,
              onClick: () => {
                IT.act(0 === XT ? "loadoutUnlock" : "loadoutUpgrade", xT)
              },
              children: 0 === XT ? kT(`${uT}:loadoutUnlock`) : kT(`${uT}:loadoutUpgrade`, {
                tier: (0, VT.U)(XT + 1)
              })
            })]
          }), null === ST && BT > 1 && (0, RT.jsx)("span", {
            className: "BoardHint",
            children: kT(`${uT}:loadoutMaxed`)
          }), XT > 0 && !FT && (0, RT.jsx)(cT.e, {
            disabled: oT.pending,
            onClick: () => {
              IT.act("loadoutEquip", xT)
            },
            children: kT(`${uT}:loadoutEquip`)
          })]
        })]
      })
    }

    function Uo(TT) {
      let {
        view: oT,
        controller: IT,
        perk: iT
      } = TT;
      const {
        t: zT
      } = (0, DT.t)(), kT = oT.loadout, WT = zo(kT), XT = iT.loadoutPerkId, BT = wo();
      return (0, RT.jsxs)(RT.Fragment, {
        children: [(0, RT.jsx)(ao, {
          icon: iT.loadoutPerkIcon,
          name: iT.loadoutPerkName,
          status: iT.loadoutPerkOwned ? null : zT(`${uT}:loadoutLocked`),
          locked: !iT.loadoutPerkOwned,
          equipped: iT.loadoutPerkEquipped
        }), (0, RT.jsx)("p", {
          className: "BoardDescription",
          children: iT.loadoutPerkDescription
        }), (0, RT.jsxs)("div", {
          ref: BT("act", XT),
          className: "BoardActions",
          children: [!iT.loadoutPerkOwned && (0, RT.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, RT.jsx)(Eo, {
              cost: iT.loadoutPerkCost,
              loadout: kT
            }), (0, RT.jsx)(cT.m, {
              disabled: !oo(kT, iT.loadoutPerkCost) || oT.pending,
              onClick: () => {
                IT.act("loadoutUnlock", XT)
              },
              children: zT(`${uT}:loadoutUnlock`)
            })]
          }), iT.loadoutPerkOwned && !iT.loadoutPerkEquipped && (0, RT.jsx)(cT.e, {
            disabled: WT || oT.pending,
            onClick: () => {
              IT.act("loadoutEquip", XT)
            },
            children: zT(`${uT}:loadoutEquip`)
          }), iT.loadoutPerkOwned && !iT.loadoutPerkEquipped && WT && (0, RT.jsx)("span", {
            className: "BoardHint",
            children: zT(`${uT}:loadoutSocketsFullHint`)
          }), iT.loadoutPerkEquipped && (0, RT.jsx)(cT.J, {
            disabled: oT.pending,
            onClick: () => {
              IT.act("loadoutUnequip", XT)
            },
            children: zT(`${uT}:loadoutUnequip`)
          })]
        })]
      })
    }

    function ao(TT) {
      let {
        icon: oT,
        name: IT,
        status: iT,
        locked: zT,
        equipped: kT
      } = TT;
      const {
        t: WT
      } = (0, DT.t)();
      return (0, RT.jsxs)(YT, {
        icon: (0, RT.jsx)(fT, {
          itemName: oT
        }),
        name: IT,
        children: [null !== iT && (0, RT.jsx)("span", {
          className: FT()("LoadoutStatusText", {
            Locked: zT
          }),
          children: iT
        }), kT && (0, RT.jsx)("span", {
          className: "BoardBadge",
          children: WT(`${uT}:loadoutEquippedBadge`)
        })]
      })
    }

    function Yo(TT) {
      let {
        view: oT,
        controller: IT
      } = TT;
      const iT = oT.loadout;
      if ("loadoutPerks" === oT.slot) {
        const TT = iT.loadoutPerks.find((TT => TT.loadoutPerkId === oT.selectedId));
        return (0, RT.jsx)("section", {
          className: "BoardDetail",
          children: TT && (0, RT.jsx)(Uo, {
            view: oT,
            controller: IT,
            perk: TT
          })
        })
      }
      const zT = io(iT, oT.slot),
        kT = zT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === oT.selectedId));
      return (0, RT.jsx)("section", {
        className: "BoardDetail",
        children: kT && (0, RT.jsx)(Jo, {
          view: oT,
          controller: IT,
          slot: zT,
          option: kT
        })
      })
    }

    function Qo(TT) {
      let {
        owned: oT,
        total: IT
      } = TT;
      return IT <= 1 ? null : (0, RT.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: IT
        }, ((TT, IT) => (0, RT.jsx)("span", {
          className: FT()("LoadoutPip", {
            Filled: IT < oT
          })
        }, IT)))
      })
    }

    function Oo(TT) {
      let {
        view: oT,
        controller: IT
      } = TT;
      const {
        t: iT
      } = (0, DT.t)(), zT = oT.loadout, kT = wo();
      return (0, RT.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": iT(`${uT}:loadoutKit`),
        children: [zT.loadoutSlots.map((TT => {
          const zT = TT.loadoutSlotOptions.find((oT => oT.loadoutOptionId === TT.loadoutSlotEquippedId));
          return (0, RT.jsxs)("button", {
            ref: kT("section", TT.loadoutSlotKind),
            type: "button",
            className: FT()("LoadoutKitSlot", {
              Selected: oT.slot === TT.loadoutSlotKind
            }),
            onClick: () => {
              IT.selectSlot(TT.loadoutSlotKind)
            },
            children: [(0, RT.jsx)("span", {
              className: "LoadoutKitIcon",
              children: zT && (0, RT.jsx)(fT, {
                itemName: zT.loadoutOptionIcon
              })
            }), (0, RT.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, RT.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, RT.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: iT(Ao[TT.loadoutSlotKind])
                }), zT && (0, RT.jsx)(Qo, {
                  owned: zT.loadoutOptionOwnedTier,
                  total: zT.loadoutOptionTiers.length
                })]
              }), (0, RT.jsx)("span", {
                className: "LoadoutKitName",
                children: null === zT || void 0 === zT ? void 0 : zT.loadoutOptionName
              })]
            })]
          }, TT.loadoutSlotKind)
        })), (0, RT.jsx)(Ho, {
          view: oT,
          controller: IT
        })]
      })
    }

    function Ho(TT) {
      let {
        view: oT,
        controller: IT
      } = TT;
      const {
        t: iT
      } = (0, DT.t)(), zT = oT.loadout, kT = zT.loadoutPerks.filter((TT => TT.loadoutPerkEquipped)), WT = wo();
      return (0, RT.jsxs)("button", {
        ref: WT("section", "loadoutPerks"),
        type: "button",
        className: FT()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === oT.slot
        }),
        onClick: () => {
          IT.selectSlot("loadoutPerks")
        },
        children: [(0, RT.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, RT.jsx)("span", {
            className: "LoadoutKitLabel",
            children: iT(Ao.loadoutPerks)
          }), (0, RT.jsx)("span", {
            className: "LoadoutPerkCount",
            children: iT(`${uT}:loadoutPerkCount`, {
              equipped: String(kT.length),
              max: String(zT.loadoutMaxPerks)
            })
          })]
        }), (0, RT.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: zT.loadoutMaxPerks
          }, ((TT, oT) => {
            const IT = kT[oT];
            return (0, RT.jsxs)("span", {
              className: FT()("LoadoutSocket", {
                Filled: IT,
                Empty: !IT
              }),
              children: [(0, RT.jsx)("span", {
                className: "LoadoutSocketWell",
                children: IT && (0, RT.jsx)(fT, {
                  itemName: IT.loadoutPerkIcon
                })
              }), (0, RT.jsx)("span", {
                className: "LoadoutSocketName",
                children: IT ? IT.loadoutPerkName : iT(`${uT}:loadoutPerkSocketEmpty`)
              })]
            }, oT)
          }))
        })]
      })
    }

    function no(TT) {
      let {
        icon: oT,
        name: IT,
        selected: iT,
        equipped: zT,
        locked: kT,
        ownedTier: WT,
        tiers: XT,
        buttonRef: BT,
        onSelect: FT
      } = TT;
      const {
        t: ST
      } = (0, DT.t)();
      return (0, RT.jsxs)(aT, {
        icon: (0, RT.jsx)(fT, {
          itemName: oT
        }),
        name: IT,
        selected: iT,
        locked: kT,
        buttonRef: BT,
        onSelect: FT,
        children: [zT && (0, RT.jsx)("span", {
          className: "BoardBadge",
          children: ST(`${uT}:loadoutEquippedBadge`)
        }), kT && (0, RT.jsx)("span", {
          className: "BoardBadge Muted",
          children: ST(`${uT}:loadoutLocked`)
        }), !kT && (0, RT.jsx)(Qo, {
          owned: WT,
          total: XT
        })]
      })
    }

    function qo(TT) {
      let {
        view: oT,
        controller: IT
      } = TT;
      const iT = oT.loadout,
        zT = wo();
      if ("loadoutPerks" === oT.slot) return (0, RT.jsx)("div", {
        className: "BoardTiles",
        children: iT.loadoutPerks.map((TT => (0, RT.jsx)(no, {
          icon: TT.loadoutPerkIcon,
          name: TT.loadoutPerkName,
          selected: oT.selectedId === TT.loadoutPerkId,
          equipped: TT.loadoutPerkEquipped,
          locked: !TT.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: zT("PL", TT.loadoutPerkId),
          onSelect: () => {
            IT.select(TT.loadoutPerkId)
          }
        }, TT.loadoutPerkId)))
      });
      const kT = io(iT, oT.slot);
      return (0, RT.jsx)("div", {
        className: "BoardTiles",
        children: kT.loadoutSlotOptions.map((TT => (0, RT.jsx)(no, {
          icon: TT.loadoutOptionIcon,
          name: TT.loadoutOptionName,
          selected: oT.selectedId === TT.loadoutOptionId,
          equipped: kT.loadoutSlotEquippedId === TT.loadoutOptionId,
          locked: 0 === TT.loadoutOptionOwnedTier,
          ownedTier: TT.loadoutOptionOwnedTier,
          tiers: TT.loadoutOptionTiers.length,
          buttonRef: zT("PL", TT.loadoutOptionId),
          onSelect: () => {
            IT.select(TT.loadoutOptionId)
          }
        }, TT.loadoutOptionId)))
      })
    }

    function Zo(TT) {
      let {
        loadout: oT
      } = TT;
      return (0, RT.jsx)(QT, {
        coins: oT.loadoutCoins,
        children: oT.loadoutHeldParts.filter((TT => TT.loadoutHeldPartAmount > 0)).map((TT => (0, RT.jsx)(jT, {
          itemName: TT.loadoutHeldPartItem,
          amount: TT.loadoutHeldPartAmount
        }, TT.loadoutHeldPartCurrency)))
      })
    }

    function so(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, ST.i)(Lo, oT.getSnapshot()),
        {
          t: iT
        } = (0, DT.t)();
      if (null === IT.loadout) return null;
      const zT = IT.notice;
      return (0, RT.jsx)(Ro, {
        view: IT,
        onDismiss: oT.dismiss,
        children: (0, RT.jsxs)(ET, {
          open: IT.open,
          onDismiss: oT.dismiss,
          title: iT(`${uT}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, RT.jsx)(Zo, {
            loadout: IT.loadout
          }),
          statusRefused: null === zT || void 0 === zT ? void 0 : zT.loadoutNoticeRefused,
          status: (0, RT.jsxs)(RT.Fragment, {
            children: [(0, RT.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: iT(`${uT}:loadoutRadioBadge`)
            }), null !== zT && iT(`${uT}:${zT.loadoutNoticeKey}`, {
              name: zT.loadoutNoticeName,
              tier: (0, VT.U)(zT.loadoutNoticeTier),
              max: String(IT.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, RT.jsx)(Oo, {
            view: IT,
            controller: oT
          }), (0, RT.jsx)(qo, {
            view: IT,
            controller: oT
          }), (0, RT.jsx)(Yo, {
            view: IT,
            controller: oT
          })]
        })
      })
    }

    function to(TT, oT, IT) {
      const iT = TT.locatorEntries.find((TT => TT.locatorEntryId === IT));
      if (!iT) return null;
      const zT = iT.locatorEntryName;
      if ("locatorDisarm" === oT) return iT.locatorEntryArmed ? {
        board: Go(TT, null),
        notice: po("locatorNoticeDisarmed", zT)
      } : null;
      if ("locatorArm" === oT) return iT.locatorEntryOwned && !iT.locatorEntryArmed ? {
        board: Go(TT, IT),
        notice: po("locatorNoticeArmed", zT)
      } : null;
      if (iT.locatorEntryOwned || TT.locatorCoins < iT.locatorEntryPrice) return null;
      const kT = Go({
        ...TT,
        locatorCoins: TT.locatorCoins - iT.locatorEntryPrice
      }, IT);
      return {
        board: {
          ...kT,
          locatorEntries: kT.locatorEntries.map((TT => TT.locatorEntryId === IT ? {
            ...TT,
            locatorEntryOwned: !0
          } : TT))
        },
        notice: po("locatorNoticeBought", zT)
      }
    }

    function Go(TT, oT) {
      return {
        ...TT,
        locatorEntries: TT.locatorEntries.map((TT => {
          const IT = TT.locatorEntryId === oT;
          return TT.locatorEntryArmed === IT ? TT : {
            ...TT,
            locatorEntryArmed: IT
          }
        }))
      }
    }

    function po(TT, oT) {
      return {
        locatorNoticeKey: TT,
        locatorNoticeRefused: !1,
        locatorNoticeName: oT
      }
    }
    const bo = "containmentLocatorView";
    class yo extends To {
      constructor(TT, oT, IT, iT) {
        super(TT, oT, IT, iT, "locator", to), this.snapshot = this.buildSnapshot()
      }
      messageOpens(TT) {
        return TT.locatorMessageOpens
      }
      messageNotice(TT) {
        return TT.locatorNotice
      }
      openingSelection(TT) {
        var oT;
        const IT = TT.locatorEntries;
        return (null !== (oT = IT.find((TT => TT.locatorEntryArmed))) && void 0 !== oT ? oT : IT[0]).locatorEntryId
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
    const No = {
        locatorContained: `${uT}:locatorFlavourContained`,
        locatorEncountered: `${uT}:locatorFlavourEncountered`,
        locatorUnseen: `${uT}:locatorFlavourUnseen`
      },
      Po = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${uT}:locatorAttunedNormal`,
        codexHardOnly: `${uT}:locatorAttunedHard`
      };

    function Vo() {
      return (0, RT.jsx)(RT.Fragment, {
        children: Array.from({
          length: 5
        }, ((TT, oT) => (0, RT.jsx)("span", {
          className: "LocatorFly",
          children: (0, RT.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, oT)))
      })
    }

    function TI(TT) {
      let {
        entry: oT
      } = TT;
      const {
        t: IT
      } = (0, DT.t)();
      return oT.locatorEntryArmed ? (0, RT.jsx)("span", {
        className: "BoardBadge Armed",
        children: IT(`${uT}:locatorArmedBadge`)
      }) : oT.locatorEntryOwned ? (0, RT.jsx)("span", {
        className: "BoardBadge",
        children: IT(`${uT}:locatorOwnedBadge`)
      }) : null
    }

    function oI(TT) {
      let {
        entry: oT,
        coins: IT,
        inTile: iT = !1
      } = TT;
      return (0, RT.jsx)(jT, {
        itemName: vT,
        amount: oT.locatorEntryPrice,
        kS: IT,
        inTile: iT
      })
    }

    function II(TT) {
      let {
        view: oT,
        controller: IT,
        entry: iT
      } = TT;
      const {
        t: zT
      } = (0, DT.t)(), kT = iT.locatorEntryId, WT = oT.locators.locatorEntries.find((TT => TT.locatorEntryArmed && TT !== iT));
      return (0, RT.jsxs)("div", {
        className: "BoardActions",
        children: [iT.locatorEntryArmed && (0, RT.jsx)(cT.J, {
          disabled: oT.pending,
          onClick: () => {
            IT.act("locatorDisarm", kT)
          },
          children: zT(`${uT}:locatorDisarm`)
        }), iT.locatorEntryOwned && !iT.locatorEntryArmed && (0, RT.jsx)(cT.e, {
          disabled: oT.pending,
          onClick: () => {
            IT.act("locatorArm", kT)
          },
          children: zT(`${uT}:locatorArm`)
        }), !iT.locatorEntryOwned && (0, RT.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, RT.jsx)(oI, {
            entry: iT,
            coins: oT.locators.locatorCoins
          }), (0, RT.jsx)(cT.m, {
            disabled: oT.locators.locatorCoins < iT.locatorEntryPrice || oT.pending,
            onClick: () => {
              IT.act("locatorBuy", kT)
            },
            children: zT(`${uT}:locatorBuy`)
          })]
        }), WT && !iT.locatorEntryArmed && (0, RT.jsx)("span", {
          className: "BoardHint",
          children: zT(`${uT}:locatorReplacesHint`, {
            name: WT.locatorEntryName
          })
        })]
      })
    }

    function iI(TT) {
      let {
        entry: oT
      } = TT;
      return "locatorUnseen" === oT.locatorEntryStanding ? (0, RT.jsx)(fT, {
        itemName: "Compass"
      }) : (0, RT.jsx)(CT, {
        anomalyId: oT.locatorEntryId,
        caught: "locatorContained" === oT.locatorEntryStanding
      })
    }

    function zI(TT) {
      let {
        view: oT,
        controller: IT,
        entry: iT
      } = TT;
      const {
        t: zT
      } = (0, DT.t)(), kT = Po[iT.locatorEntryDifficulty];
      return (0, RT.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, RT.jsxs)("div", {
          className: FT()("LocatorLabel", {
            Armed: iT.locatorEntryArmed
          }),
          children: [(0, RT.jsx)(YT, {
            icon: (0, RT.jsx)(iI, {
              entry: iT
            }),
            name: zT(`${uT}:locatorName`, {
              name: iT.locatorEntryName
            }),
            children: (0, RT.jsx)(TI, {
              entry: iT
            })
          }), (0, RT.jsx)("p", {
            className: "BoardDescription",
            children: zT(iT.locatorEntryArmed ? `${uT}:locatorFlavourArmed` : No[iT.locatorEntryStanding])
          }), null !== kT && (0, RT.jsx)("p", {
            className: "LocatorAttuned",
            children: zT(kT)
          }), (0, RT.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: zT(`${uT}:locatorUsage`)
          })]
        }), (0, RT.jsx)(II, {
          view: oT,
          controller: IT,
          entry: iT
        })]
      })
    }

    function kI(TT) {
      let {
        controller: oT
      } = TT;
      const IT = (0, ST.i)(bo, oT.getSnapshot()),
        {
          t: iT
        } = (0, DT.t)(),
        zT = IT.locators;
      if (null === zT) return null;
      const kT = zT.locatorEntries.find((TT => TT.locatorEntryId === IT.selectedId)),
        WT = IT.notice;
      return (0, RT.jsxs)(ET, {
        open: IT.open,
        onDismiss: oT.dismiss,
        title: iT(`${uT}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, RT.jsx)(Vo, {}),
        headerExtra: (0, RT.jsx)(QT, {
          coins: zT.locatorCoins
        }),
        statusRefused: null === WT || void 0 === WT ? void 0 : WT.locatorNoticeRefused,
        status: (0, RT.jsxs)(RT.Fragment, {
          children: [(0, RT.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: iT(`${uT}:locatorKeeperName`)
          }), null !== WT && iT(`${uT}:${WT.locatorNoticeKey}`, {
            name: WT.locatorNoticeName
          })]
        }),
        children: [(0, RT.jsx)("div", {
          className: "BoardTiles",
          children: zT.locatorEntries.map((TT => (0, RT.jsxs)(aT, {
            icon: (0, RT.jsx)(iI, {
              entry: TT
            }),
            name: TT.locatorEntryName,
            selected: TT === kT,
            locked: !1,
            className: FT()("LocatorTag", {
              Armed: TT.locatorEntryArmed
            }),
            onSelect: () => {
              oT.select(TT.locatorEntryId)
            },
            children: [(0, RT.jsx)(TI, {
              entry: TT
            }), !TT.locatorEntryOwned && (0, RT.jsx)(oI, {
              entry: TT,
              coins: zT.locatorCoins,
              inTile: !0
            })]
          }, TT.locatorEntryId)))
        }), (0, RT.jsx)(zI, {
          view: IT,
          controller: oT,
          entry: kT
        })]
      })
    }

    function WI(TT) {
      let {
        loadout: oT,
        codex: IT,
        locator: iT
      } = TT;
      return (0, RT.jsxs)(RT.Fragment, {
        children: [(0, RT.jsx)(so, {
          controller: oT
        }), (0, RT.jsx)(dT, {
          controller: IT
        }), (0, RT.jsx)(kI, {
          controller: iT
        })]
      })
    }
    var XI = IT(37532);
    class BI {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = TT, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new XI.e({
          spacingMs: 0,
          now: oT
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(TT, oT) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, oT(), this.notify()
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
    var FI = IT(37516);
    const SI = new Map([
      ["npc_general", Ko],
      ["npc_tentacle_guy", FI]
    ]);

    function DI(TT) {
      const oT = SI.get(TT);
      if (void 0 === oT) return null;
      const IT = document.createElement("img");
      return IT.src = oT, IT.alt = "", IT.draggable = !1, IT.style.imageRendering = "pixelated", IT
    }
    const LI = function() {
      let TT, oT = !1,
        IT = null,
        BT = null;
      const FT = [],
        ST = TT => {
          for (const oT of FT) oT !== TT && oT.close();
          (0, XT.o)()
        },
        DT = TT => {
          TT && (0, XT.h)()
        },
        LT = new BI((oT => {
          TT.sendCommand(oT)
        })),
        xT = new xo((TT => {
          WT.h.XM(Lo, TT, !0)
        }), ST, DT, LT),
        cT = new nT((TT => {
          WT.h.XM(HT, TT, !0)
        }), ST, DT),
        KT = new yo((TT => {
          WT.h.XM(bo, TT, !0)
        }), ST, DT, LT);
      FT.push(xT, cT, KT);
      return {
        onCreate: oT => {
          TT = oT, IT = (0, XT.u)(null, {
            content: (0, iT.createElement)(WI, {
              loadout: xT,
              codex: cT,
              locator: KT
            }),
            onClose: () => {
              for (const TT of FT) TT.close()
            }
          }), BT = (0, kT.h)(DI)
        },
        onReceivedMessageFromServer: (TT, oT) => {
          "containmentLoadout" === TT ? xT.Jc(oT) : "containmentLoadoutClose" === TT ? xT.isOpen() && (xT.close(), (0, XT.e)()) : "containmentCodex" === TT ? cT.Jc(oT) : "containmentLocator" === TT && KT.Jc(oT)
        },
        dD: () => {
          oT || zT.c.get("loadingOverlayVisible") || (oT = !0, TT.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var TT, oT;
          null === (TT = IT) || void 0 === TT || TT(), IT = null, null === (oT = BT) || void 0 === oT || oT(), BT = null;
          for (const IT of FT) IT.dispose();
          LT.dispose()
        }
      }
    }
  },
  35842: (TT, oT, IT) => {
    IT.d(oT, {
      D: () => uT,
      G: () => YT,
      K: () => QT,
      N: () => OT,
      Q: () => aT,
      S: () => HT,
      b: () => BT,
      e: () => fT,
      i: () => XT,
      m: () => UT,
      n: () => vT,
      r: () => mT,
      v: () => JT,
      z: () => jT
    });
    var iT = IT(26);
    const zT = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      kT = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      WT = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      XT = kT.filter((TT => "docsButton" !== TT)),
      BT = WT.filter((TT => "aiHelperButton" !== TT)),
      FT = "codeEditorTutorials",
      ST = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      DT = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let LT = null,
      xT = null;
    const cT = new Set,
      KT = new Set;
    let MT = null;
    const rT = new Set,
      AT = new Set;

    function gT() {
      AT.forEach((TT => {
        TT()
      }))
    }

    function hT() {
      if (!LT) {
        const TT = iT.e.getItem(FT);
        LT = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof TT && null !== TT ? TT : {}
        }
      }
      return LT
    }

    function wT(TT) {
      const oT = hT();
      oT[TT] || (LT = {
        ...oT,
        [TT]: !0
      }, iT.e.setItem(FT, LT))
    }

    function mT(TT) {
      return "docsOverview" === TT ? kT : "aiHelperOverview" === TT ? WT : xT ? zT[xT] : []
    }

    function eT(TT) {
      return ("worldCodeButton" !== TT || !hT().worldCodeIntroShown) && !rT.has(TT)
    }

    function RT(TT) {
      var oT;
      return (null === (oT = MT) || void 0 === oT ? void 0 : oT.name) === TT ? MT.stepsDone : cT
    }

    function uT(TT, oT) {
      if (! function(TT) {
          return MT ? MT.name === TT : "welcome" === TT
        }(TT) || !eT(oT) || RT(TT).has(oT)) return !1;
      if (MT) return !0;
      const IT = ST[oT];
      return IT ? !hT()[IT] || KT.has(oT) : !hT()[DT[TT]]
    }

    function vT(TT) {
      var oT;
      return null !== (oT = mT(TT).find((oT => uT(TT, oT)))) && void 0 !== oT ? oT : null
    }

    function ET(TT) {
      var oT;
      wT(DT[TT]), (null === (oT = MT) || void 0 === oT ? void 0 : oT.name) === TT && (MT = null)
    }

    function fT(TT) {
      const oT = (MT ? [MT.name] : ["welcome", "docsOverview"]).find((oT => vT(oT) === TT));
      if (!oT) return;
      RT(oT).add(TT);
      const IT = ST[TT];
      IT && (wT(IT), MT || KT.add(TT)), null === vT(oT) && ET(oT), gT()
    }

    function CT(TT, oT) {
      const IT = mT(TT),
        iT = RT(TT);
      for (let zT = IT.indexOf(oT) - 1; zT >= 0; zT--)
        if (iT.has(IT[zT]) && eT(IT[zT])) return IT[zT];
      return null
    }

    function jT(TT, oT) {
      return null !== CT(TT, oT)
    }

    function JT(TT, oT) {
      const IT = CT(TT, oT);
      IT && (RT(TT).delete(IT), gT())
    }

    function UT(TT) {
      ET(TT), "welcome" === TT && mT("welcome").forEach((TT => {
        const oT = ST[TT];
        oT && wT(oT)
      })), gT()
    }

    function aT(TT) {
      MT = {
        name: TT,
        stepsDone: new Set
      }, gT()
    }

    function YT() {
      (MT || 0 !== cT.size || 0 !== KT.size) && (MT = null, cT.clear(), KT.clear(), gT())
    }

    function QT(TT, oT) {
      const IT = oT ? TT : xT === TT ? null : xT;
      IT !== xT && (xT = IT, gT())
    }

    function OT(TT, oT) {
      rT.has(TT) === oT && (oT ? rT.delete(TT) : rT.add(TT), gT())
    }

    function HT(TT) {
      return AT.add(TT), () => {
        AT.delete(TT)
      }
    }
  },
  38248: (TT, oT, IT) => {
    var iT = {
      "./breach-zero-uncaught.webp": 38257,
      "./breach-zero.webp": 38263,
      "./brood-father-uncaught.webp": 38272,
      "./brood-father.webp": 38277,
      "./carousel-uncaught.webp": 38283,
      "./carousel.webp": 38286,
      "./deadlock-uncaught.webp": 38288,
      "./deadlock.webp": 38290,
      "./frost-revenant-uncaught.webp": 38294,
      "./frost-revenant.webp": 38297,
      "./hollow-choir-uncaught.webp": 38300,
      "./hollow-choir.webp": 38306,
      "./magma-warden-uncaught.webp": 38310,
      "./magma-warden.webp": 38316,
      "./patient-zero-uncaught.webp": 38321,
      "./patient-zero.webp": 38323,
      "./siege-engine-uncaught.webp": 38325,
      "./siege-engine.webp": 38329,
      "./warp-stalker-uncaught.webp": 38331,
      "./warp-stalker.webp": 38334
    };

    function zT(TT) {
      var oT = kT(TT);
      return IT(oT)
    }

    function kT(TT) {
      if (!IT.o(iT, TT)) {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }
      return iT[TT]
    }
    zT.keys = function() {
      return Object.keys(iT)
    }, zT.resolve = kT, TT.exports = zT, zT.id = 38248
  },
  38257: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38263: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38272: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38277: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38283: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38286: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38288: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38290: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38294: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38297: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38300: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38306: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38310: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38316: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38321: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38323: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38325: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38329: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38331: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38334: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37516: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);