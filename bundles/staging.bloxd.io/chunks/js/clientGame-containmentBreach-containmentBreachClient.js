export const id = 14;
export const ids = [14];
export const modules = {
  36906: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => ZS,
      f: () => wS,
      j: () => hS,
      m: () => KS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(64),
      xS = gS(77),
      NS = gS(1449),
      qS = gS(1528),
      uS = gS(1444),
      IS = gS(1359),
      fS = gS(1281),
      kS = gS(36908),
      aS = gS(1181);

    function KS(SS) {
      const [HS, gS] = (0, XS.useState)((() => (0, kS.j)(SS)));
      return (0, XS.useEffect)((() => (gS((0, kS.j)(SS)), (0, kS.E)((() => {
        gS((0, kS.j)(SS))
      })))), [SS]), HS
    }

    function jS(SS, HS) {
      "function" === typeof SS ? SS(HS) : SS && (SS.current = HS)
    }

    function GS(SS) {
      let {
        tutorial: HS,
        step: gS,
        enabled: tS = !0
      } = SS;
      const bS = KS(HS);
      return tS && bS === gS
    }

    function CS(SS, HS) {
      const gS = (0, kS.m)(SS),
        tS = gS.indexOf(HS);
      return !gS.slice(tS + 1).some((HS => (0, kS.t)(SS, HS)))
    }

    function nS(SS, HS, gS, tS) {
      let {
        tutorial: bS,
        step: XS,
        waitForClick: xS = !1,
        onPrevious: NS
      } = SS;
      const qS = HS && (0, kS.p)(bS, XS),
        uS = HS && !CS(bS, XS),
        fS = xS ? tS : gS;
      let aS = null;
      qS ? aS = () => {
        null === NS || void 0 === NS || NS(), (0, kS.o)(bS, XS)
      } : uS && (aS = () => {
        (0, kS.i)(bS)
      }), (0, IS.s)("popup", null !== fS && void 0 !== fS ? fS : gS, aS, HS && null !== fS, null, qS ? void 0 : "controller:menusSkipTutorial")
    }

    function PS(SS) {
      let {
        tutorial: HS,
        step: gS,
        text: tS,
        waitForClick: bS = !1,
        onPrevious: XS
      } = SS;
      const {
        t: xS
      } = (0, fS.F)(), NS = CS(HS, gS);
      return (0, aS.jsxs)(aS.Fragment, {
        children: [(0, aS.jsx)("div", {
          className: "TutorialStepText",
          children: tS
        }), (0, aS.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, kS.p)(HS, gS) && (0, aS.jsx)(qS.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === XS || void 0 === XS || XS(), (0, kS.o)(HS, gS)
            },
            children: xS("tutorial:back")
          }), !bS && (0, aS.jsx)(qS.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, kS.e)(gS)
            },
            padDefaultFocus: !0,
            children: xS(NS ? "tutorial:done" : "tutorial:next")
          }), !NS && (0, aS.jsx)(qS.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, kS.i)(HS)
            },
            children: xS("tutorial:skip")
          })]
        })]
      })
    }
    const QS = 6;

    function DS(SS) {
      let {
        rect: HS,
        margin: gS
      } = SS;
      const tS = Math.max(0, HS.top - gS),
        bS = HS.bottom + gS,
        XS = Math.max(0, HS.left - gS),
        xS = HS.right + gS;
      return (0, aS.jsxs)(aS.Fragment, {
        children: [(0, aS.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: tS
          }
        }), (0, aS.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: bS,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, aS.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tS,
            left: 0,
            width: XS,
            height: bS - tS
          }
        }), (0, aS.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tS,
            left: xS,
            right: 0,
            height: bS - tS
          }
        })]
      })
    }

    function wS(SS) {
      let {
        target: HS,
        placement: gS,
        boxRef: tS,
        className: qS,
        spotlightMargin: IS = QS,
        children: fS
      } = SS;
      const {
        getArrowProps: kS,
        getTooltipProps: KS,
        setTooltipRef: jS,
        setTriggerRef: GS
      } = (0, NS.d)({
        placement: gS,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, IS]
      });
      (0, XS.useLayoutEffect)((() => {
        GS(HS)
      }), [HS, GS]);
      const CS = function(SS, HS) {
        const [gS, tS] = (0, XS.useState)(null);
        return (0, XS.useEffect)((() => {
          if (!HS || !SS) return void tS(null);
          let gS = 0,
            bS = null;
          const XS = () => {
            const HS = SS.getBoundingClientRect();
            bS && HS.left === bS.left && HS.top === bS.top && HS.width === bS.width && HS.height === bS.height || (bS = HS, tS(HS)), gS = requestAnimationFrame(XS)
          };
          return XS(), () => {
            cancelAnimationFrame(gS)
          }
        }), [SS, HS]), gS
      }(HS, !0);
      (0, XS.useEffect)((() => {
        null === HS || void 0 === HS || HS.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [HS]);
      const nS = (0, XS.useCallback)((SS => {
        jS(SS), tS && (tS.current = SS)
      }), [jS, tS]);
      return (0, xS.createPortal)((0, aS.jsxs)(aS.Fragment, {
        children: [CS && (0, aS.jsx)(DS, {
          rect: CS,
          margin: IS
        }), (0, aS.jsxs)("div", {
          ref: nS,
          ...KS({
            className: bS()("tooltip-container SmallTextLight TutorialStep", qS)
          }),
          children: [fS, (0, aS.jsx)("div", {
            ...kS({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, uS.i)())
    }
    const hS = (0, XS.forwardRef)((function(SS, HS) {
      let {
        placement: gS = "right",
        children: tS,
        ...bS
      } = SS;
      const xS = GS(bS),
        NS = (0, XS.useRef)(null),
        qS = (0, XS.useRef)(null);
      nS(bS, xS, NS, qS);
      const [uS, IS] = (0, XS.useState)(null), fS = tS.ref, kS = (0, XS.useCallback)((SS => {
        qS.current = SS, IS(SS), jS(HS, SS), jS(fS, SS)
      }), [HS, fS]);
      return (0, aS.jsxs)(aS.Fragment, {
        children: [(0, XS.cloneElement)(tS, {
          ref: kS
        }), xS && (0, aS.jsx)(wS, {
          target: uS,
          placement: gS,
          boxRef: NS,
          children: (0, aS.jsx)(PS, {
            ...bS
          })
        })]
      })
    }));

    function ZS(SS) {
      const HS = GS(SS),
        gS = (0, XS.useRef)(null);
      return nS(SS, HS, gS, null), HS ? (0, xS.createPortal)((0, aS.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, aS.jsx)("div", {
          ref: gS,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, aS.jsx)(PS, {
            ...SS
          })
        })
      }), (0, uS.i)()) : null
    }
  },
  38564: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    const tS = 4,
      bS = 12e3,
      XS = 1e3;
    class xS {
      constructor() {
        let {
          limit: SS = tS,
          windowMs: HS = bS,
          spacingMs: gS = XS,
          now: xS = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = SS, this.windowMs = HS, this.spacingMs = gS, this.now = xS
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const SS of this.priority) SS.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const SS = this.now();
        this.sent.push(SS), this.lastSentAt = SS, this.schedule(), this.notify()
      }
      addPriority(SS) {
        return this.priority.add(SS), () => {
          this.priority.delete(SS)
        }
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const SS of this.priority)
          if (SS.waiting()) return !0;
        return !1
      }
      prune() {
        const SS = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= SS;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const SS = this.now(),
          HS = this.lastSentAt + this.spacingMs,
          gS = Math.min(HS > SS ? HS : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        gS !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, gS - SS)))
      }
      notify() {
        for (const SS of this.listeners) SS()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  38549: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    class tS {
      constructor(SS, HS, gS) {
        this.cj = SS, this.beforeOpen = HS, this.afterClose = gS, this.open = !1, this.nK = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.nK && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(SS) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(SS)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.nK = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.nK || (this.snapshot = this.buildSnapshot(), this.cj(this.snapshot))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  39304: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => Ig
    });
    var tS = gS(64);
    var bS = gS(24),
      XS = gS(2046),
      xS = gS(31),
      NS = gS(36624),
      qS = gS(1121),
      uS = gS.n(qS),
      IS = gS(1522),
      fS = gS(1281),
      kS = gS(4662),
      aS = gS(1428),
      KS = gS(1528),
      jS = gS(2050),
      GS = gS(1444),
      CS = gS(2031),
      nS = gS(2100),
      PS = gS(215);
    const QS = gS(39307),
      DS = Object.fromEntries(QS.keys().map((SS => [SS.replace(/^\.\/(.*)\.webp$/, "$1"), QS(SS)]))),
      wS = new Set;

    function hS(SS, HS) {
      const gS = HS ? SS : `${SS}-uncaught`,
        tS = (0, PS.c)(DS, gS);
      return void 0 !== tS || wS.has(gS) || (wS.add(gS), console.warn(`Containment Breach has no mugshot ${gS}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), tS
    }
    var ZS = gS(1181);
    const JS = "containmentBreach",
      OS = "Gold Coin";

    function dS(SS) {
      let {
        open: HS,
        onDismiss: gS,
        title: tS,
        className: bS,
        decor: XS,
        headerExtra: xS,
        status: NS,
        statusRefused: qS = !1,
        children: IS
      } = SS;
      const fS = `${bS}Title`;
      return (0, ZS.jsx)(kS.c, {
        show: HS,
        close: gS,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, ZS.jsxs)("section", {
          className: uS()("ContainmentBoardPanel", bS),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": fS,
          children: [XS && (0, ZS.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: XS
          }), (0, ZS.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, ZS.jsx)("h2", {
              id: fS,
              className: "VisuallyHidden",
              children: tS
            }), xS, (0, ZS.jsx)(KS.l, {
              onClick: gS
            })]
          }), (0, ZS.jsx)("div", {
            className: "BoardBody",
            children: IS
          }), void 0 !== NS && (0, ZS.jsx)("footer", {
            className: uS()("BoardStatus", {
              Refused: qS
            }),
            children: NS
          })]
        })
      })
    }

    function cS(SS) {
      let {
        itemName: HS
      } = SS;
      return (0, ZS.jsx)(jS.e, {
        itemName: HS,
        amount: 0
      })
    }

    function vS(SS) {
      let {
        anomalyId: HS,
        caught: gS
      } = SS;
      const bS = (0, tS.useRef)(null);
      return (0, aS.b)(bS, !gS), (0, ZS.jsx)("span", {
        ref: bS,
        className: uS()("BoardMugshot", {
          Uncaught: !gS
        }),
        children: (0, ZS.jsx)("img", {
          src: hS(HS, gS),
          alt: "",
          draggable: !1
        })
      })
    }

    function ES(SS) {
      let {
        itemName: HS,
        amount: gS,
        Ku: tS,
        inTile: bS = !1
      } = SS;
      return (0, ZS.jsx)(GS.h, {
        delayShow: 200,
        hoverOnly: bS,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, ZS.jsx)(YS, {
          itemName: HS,
          amount: gS,
          Ku: tS
        }),
        children: (0, ZS.jsxs)("span", {
          className: uS()("BoardChip", {
            Short: void 0 !== tS && tS < gS
          }),
          children: [(0, ZS.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, ZS.jsx)(cS, {
              itemName: HS
            })
          }), gS.toLocaleString()]
        })
      })
    }
    const LS = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function YS(SS) {
      var HS;
      let {
        itemName: gS,
        amount: tS,
        Ku: bS
      } = SS;
      const {
        t: XS
      } = (0, fS.F)(), xS = (0, nS.g)("itemInfo", (SS => SS[gS])), {
        lore: NS,
        droppedBy: qS
      } = function(SS) {
        if ("string" !== typeof SS) return {
          lore: SS,
          droppedBy: null
        };
        const HS = LS.exec(SS);
        return null === HS ? {
          lore: SS,
          droppedBy: null
        } : {
          lore: "" === HS[1] ? void 0 : HS[1],
          droppedBy: HS[2]
        }
      }(null === xS || void 0 === xS ? void 0 : xS.description);
      return (0, ZS.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, ZS.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, ZS.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, ZS.jsx)(cS, {
              itemName: gS
            })
          }), (0, ZS.jsx)(CS.c, {
            text: null !== (HS = null === xS || void 0 === xS ? void 0 : xS.displayName) && void 0 !== HS ? HS : gS,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== NS || null !== qS) && (0, ZS.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== NS && (0, ZS.jsx)(CS.c, {
            text: NS,
            className: "BoardChipTooltipDescription"
          }), null !== qS && (0, ZS.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, ZS.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: XS(`${JS}:chipDroppedBy`)
            }), qS]
          })]
        }), void 0 !== bS && (0, ZS.jsxs)("div", {
          className: uS()("BoardChipTooltipHeld", {
            Short: bS < tS
          }),
          children: [(0, ZS.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: XS(`${JS}:chipYouHave`)
          }), (0, ZS.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, ZS.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: bS.toLocaleString()
            }), ` / ${tS.toLocaleString()}`]
          }), (0, ZS.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, ZS.jsx)("span", {
              style: {
                width: (tS > 0 ? 100 * Math.min(1, bS / tS) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function AS(SS) {
      let {
        icon: HS,
        name: gS,
        selected: tS,
        locked: bS,
        className: XS,
        buttonRef: xS,
        onSelect: NS,
        children: qS
      } = SS;
      return (0, ZS.jsxs)("button", {
        ref: xS,
        type: "button",
        className: uS()("BoardTile", XS, {
          Selected: tS,
          Locked: bS
        }),
        onClick: NS,
        children: [(0, ZS.jsx)("span", {
          className: "BoardTileIcon",
          children: HS
        }), (0, ZS.jsx)("span", {
          className: "BoardTileName",
          children: gS
        }), qS]
      })
    }

    function yS(SS) {
      let {
        icon: HS,
        name: gS,
        children: tS
      } = SS;
      return (0, ZS.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, ZS.jsx)("span", {
          className: "BoardDetailIcon",
          children: HS
        }), (0, ZS.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, ZS.jsx)("h3", {
            children: gS
          }), (0, ZS.jsx)("span", {
            className: "BoardDetailStatus",
            children: tS
          })]
        })]
      })
    }

    function VS(SS) {
      let {
        coins: HS,
        children: gS
      } = SS;
      return (0, ZS.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, ZS.jsx)(ES, {
          itemName: OS,
          amount: HS
        }), gS]
      })
    }
    var iS = gS(38549);
    const WS = "containmentCodexView";
    class zS extends iS.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = SS => {
          this.selectedId = SS, this.emit()
        }
      }
      wK(SS) {
        this.entries = SS.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const US = {
        codexAnyDifficulty: `${JS}:codexNeedsAny`,
        codexNormalOnly: `${JS}:codexNeedsNormal`,
        codexHardOnly: `${JS}:codexNeedsHard`
      },
      pS = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      sS = {
        codexContained: `${JS}:codexContainedBadge`,
        codexEncountered: `${JS}:codexEncounteredBadge`,
        codexUnidentified: `${JS}:codexUnidentifiedBadge`
      },
      BS = ["94%", "81%", "88%", "46%", "72%"];

    function MS(SS) {
      let {
        entry: HS
      } = SS;
      const {
        t: gS
      } = (0, fS.F)();
      return (0, ZS.jsx)("span", {
        className: uS()("BoardBadge", pS[HS.codexEntryState]),
        children: gS(sS[HS.codexEntryState])
      })
    }

    function FS(SS) {
      const {
        t: HS
      } = (0, fS.F)();
      return "codexUnidentified" === SS.codexEntryState ? HS(`${JS}:codexUnidentifiedName`) : SS.codexEntryName
    }

    function RS(SS) {
      let {
        entry: HS
      } = SS;
      return "codexUnidentified" === HS.codexEntryState ? (0, ZS.jsx)(cS, {
        itemName: "Book"
      }) : (0, ZS.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, ZS.jsx)(vS, {
          anomalyId: HS.codexEntryId,
          caught: "codexContained" === HS.codexEntryState
        }), (0, ZS.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function TS(SS) {
      let {
        entry: HS,
        selected: gS,
        onSelect: tS
      } = SS;
      const bS = "codexUnidentified" === HS.codexEntryState;
      return (0, ZS.jsxs)(AS, {
        icon: (0, ZS.jsx)(RS, {
          entry: HS
        }),
        name: FS(HS),
        selected: gS,
        locked: bS,
        className: uS()("CodexFolder", pS[HS.codexEntryState]),
        onSelect: () => {
          tS(HS.codexEntryId)
        },
        children: [!bS && (0, ZS.jsx)(MS, {
          entry: HS
        }), bS && (0, ZS.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function oS(SS) {
      let {
        count: HS
      } = SS;
      const gS = [];
      for (let tS = Math.min(HS, 25); tS > 0; tS -= 5) gS.push(Math.min(tS, 5));
      return (0, ZS.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: gS.map(((SS, HS) => (0, ZS.jsx)("span", {
          className: uS()("CodexTallyGroup", {
            Gate: 5 === SS
          }),
          children: Array.from({
            length: Math.min(SS, 4)
          }, ((SS, HS) => (0, ZS.jsx)("span", {
            className: "CodexTallyMark"
          }, HS)))
        }, HS)))
      })
    }

    function lS(SS) {
      let {
        contained: HS,
        total: gS
      } = SS;
      const {
        t: tS
      } = (0, fS.F)();
      return (0, ZS.jsxs)("div", {
        className: "CodexProgress",
        children: [tS(`${JS}:codexProgress`, {
          contained: String(HS),
          total: String(gS)
        }), (0, ZS.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, ZS.jsx)("span", {
            style: {
              width: HS / gS * 100 + "%"
            }
          })
        })]
      })
    }

    function mS(SS) {
      let {
        entry: HS,
        fileNumber: gS
      } = SS;
      const {
        t: tS
      } = (0, fS.F)(), bS = "codexContained" === HS.codexEntryState;
      return (0, ZS.jsx)("section", {
        className: "BoardDetail",
        children: (0, ZS.jsxs)("article", {
          className: uS()("CodexDossier", pS[HS.codexEntryState]),
          children: [(0, ZS.jsx)("span", {
            className: "CodexFileNumber",
            children: tS(`${JS}:codexFileNumber`, {
              number: String(gS).padStart(3, "0")
            })
          }), (0, ZS.jsx)(yS, {
            icon: (0, ZS.jsx)(RS, {
              entry: HS
            }),
            name: FS(HS),
            children: (0, ZS.jsx)(MS, {
              entry: HS
            })
          }), bS && (0, ZS.jsxs)(ZS.Fragment, {
            children: [(0, ZS.jsx)("p", {
              className: "BoardDescription",
              children: HS.codexEntryLore
            }), (0, ZS.jsxs)("p", {
              className: "CodexTally",
              children: [tS(`${JS}:codexContainments`, {
                count: String(HS.codexEntryContainedCount)
              }), (0, ZS.jsx)(oS, {
                count: HS.codexEntryContainedCount
              })]
            }), (0, ZS.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: tS(`${JS}:codexContainedBadge`)
            })]
          }), !bS && (0, ZS.jsxs)(ZS.Fragment, {
            children: [(0, ZS.jsxs)("div", {
              className: "CodexRedaction",
              children: [BS.map((SS => (0, ZS.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: SS
                }
              }, SS))), (0, ZS.jsx)("p", {
                className: "CodexRedacted",
                children: tS(`${JS}:codexRedacted`)
              })]
            }), "" !== HS.codexEntryHint && (0, ZS.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, ZS.jsx)("h4", {
                children: tS(`${JS}:codexHintLabel`)
              }), (0, ZS.jsx)("p", {
                children: HS.codexEntryHint
              })]
            }), (0, ZS.jsx)("p", {
              className: "CodexClearance",
              children: tS(US[HS.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function eS(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, IS.i)(WS, HS.getSnapshot()),
        {
          t: tS
        } = (0, fS.F)();
      if (0 === gS.entries.length) return null;
      const bS = gS.entries.find((SS => SS.codexEntryId === gS.selectedId)),
        XS = gS.entries.filter((SS => "codexContained" === SS.codexEntryState)).length,
        xS = gS.entries.map((SS => SS.codexEntryId)).sort().indexOf(bS.codexEntryId) + 1;
      return (0, ZS.jsxs)(dS, {
        open: gS.open,
        onDismiss: HS.dismiss,
        title: tS(`${JS}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, ZS.jsx)(lS, {
          contained: XS,
          total: gS.entries.length
        }),
        children: [(0, ZS.jsx)("div", {
          className: "BoardTiles",
          children: gS.entries.map((SS => (0, ZS.jsx)(TS, {
            entry: SS,
            selected: SS === bS,
            onSelect: HS.select
          }, SS.codexEntryId)))
        }), (0, ZS.jsx)(mS, {
          entry: bS,
          fileNumber: xS
        })]
      })
    }
    var rS = gS(387);
    class SH extends iS.e {
      constructor(SS, HS, gS, tS, bS, XS) {
        super(SS, HS, gS), this.pacer = tS, this.command = bS, this.predict = XS, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = SS => {
          this.selectedId = SS, this.emit()
        }, this.act = (SS, HS) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${SS} ${HS}`, this.rollBack)) return;
          const gS = this.predict(this.board, SS, HS);
          null !== gS && (this.board = gS.board, this.notice = gS.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = tS.subscribe((() => {
          this.emit()
        }))
      }
      wK(SS) {
        const HS = this.messageOpens(SS);
        if (HS && this.open) return this.board === this.confirmed && (this.board = SS), this.confirmed = SS, void this.emit();
        if (this.board = SS, this.confirmed = SS, this.pacer.onReply(), HS) return this.notice = null, this.selectedId = this.openingSelection(SS), void this.show();
        const gS = this.messageNotice(SS);
        null !== gS && (this.notice = gS), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function HH(SS, HS) {
      return SS.loadoutCoins >= HS.loadoutCostCoins && HS.loadoutCostParts.every((HS => function(SS, HS) {
        return gH(SS, HS).loadoutHeldPartAmount
      }(SS, HS.loadoutPartCurrency) >= HS.loadoutPartAmount))
    }

    function gH(SS, HS) {
      return SS.loadoutHeldParts.find((SS => SS.loadoutHeldPartCurrency === HS))
    }

    function tH(SS, HS) {
      return SS.loadoutSlots.find((SS => SS.loadoutSlotKind === HS))
    }

    function bH(SS) {
      return SS.loadoutPerks.filter((SS => SS.loadoutPerkEquipped)).length >= SS.loadoutMaxPerks
    }

    function XH(SS, HS, gS) {
      for (const bS of SS.loadoutSlots) {
        const tS = bS.loadoutSlotOptions.find((SS => SS.loadoutOptionId === gS));
        if (tS) return "loadoutArmour" === bS.loadoutSlotKind ? NH(SS, bS, tS, HS) : xH(SS, bS, tS, HS)
      }
      const tS = SS.loadoutPerks.find((SS => SS.loadoutPerkId === gS));
      return tS ? function(SS, HS, gS) {
        const tS = HS.loadoutPerkOwned,
          bS = HS.loadoutPerkEquipped,
          XS = HS.loadoutPerkName,
          xS = bH(SS);
        if ("loadoutUnlock" === gS) {
          if (tS || !HH(SS, HS.loadoutPerkCost)) return null;
          const gS = {
            ...HS,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !xS
          };
          return {
            board: uH(IH(SS, HS.loadoutPerkCost), gS),
            notice: fH(xS ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", XS)
          }
        }
        if ("loadoutUpgrade" === gS || !tS || "loadoutEquip" === gS === bS || !bS && xS) return null;
        return {
          board: uH(SS, {
            ...HS,
            loadoutPerkEquipped: !bS
          }),
          notice: fH(bS ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", XS)
        }
      }(SS, tS, HS) : null
    }

    function xH(SS, HS, gS, tS) {
      const bS = gS.loadoutOptionOwnedTier,
        XS = gS.loadoutOptionName;
      if ("loadoutEquip" === tS) return 0 === bS ? null : {
        board: qH(SS, HS, gS.loadoutOptionId, null),
        notice: fH("loadoutNoticeEquipped", XS)
      };
      const xS = "loadoutUnlock" === tS;
      if (xS && 0 !== bS || "loadoutUpgrade" === tS && (0 === bS || bS >= gS.loadoutOptionTiers.length) || "loadoutUnequip" === tS) return null;
      const NS = gS.loadoutOptionTiers[bS].loadoutTierCost;
      if (!HH(SS, NS)) return null;
      const qS = {
          ...gS,
          loadoutOptionOwnedTier: bS + 1
        },
        uS = xS ? gS.loadoutOptionId : HS.loadoutSlotEquippedId;
      return {
        board: qH(IH(SS, NS), HS, uS, qS),
        notice: xS ? fH("loadoutNoticeUnlocked", XS) : fH("loadoutNoticeUpgraded", XS, bS + 1)
      }
    }

    function NH(SS, HS, gS, tS) {
      const bS = gS.loadoutOptionOwnedTier > 0,
        XS = gS.loadoutOptionName;
      if ("loadoutEquip" === tS && bS) return {
        board: qH(SS, HS, gS.loadoutOptionId, null),
        notice: fH("loadoutNoticeEquipped", XS)
      };
      const xS = gS.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== tS || bS || !HH(SS, xS) ? null : {
        board: qH(IH(SS, xS), HS, gS.loadoutOptionId, {
          ...gS,
          loadoutOptionOwnedTier: 1
        }),
        notice: fH("loadoutNoticeUnlocked", XS)
      }
    }

    function qH(SS, HS, gS, tS) {
      const bS = {
        ...HS,
        loadoutSlotEquippedId: gS,
        loadoutSlotOptions: HS.loadoutSlotOptions.map((SS => null !== tS && SS.loadoutOptionId === tS.loadoutOptionId ? tS : SS))
      };
      return {
        ...SS,
        loadoutSlots: SS.loadoutSlots.map((SS => SS === HS ? bS : SS))
      }
    }

    function uH(SS, HS) {
      return {
        ...SS,
        loadoutPerks: SS.loadoutPerks.map((SS => SS.loadoutPerkId === HS.loadoutPerkId ? HS : SS))
      }
    }

    function IH(SS, HS) {
      return {
        ...SS,
        loadoutCoins: SS.loadoutCoins - HS.loadoutCostCoins,
        loadoutHeldParts: SS.loadoutHeldParts.map((SS => {
          const gS = HS.loadoutCostParts.find((HS => HS.loadoutPartCurrency === SS.loadoutHeldPartCurrency));
          return gS ? {
            ...SS,
            loadoutHeldPartAmount: SS.loadoutHeldPartAmount - gS.loadoutPartAmount
          } : SS
        }))
      }
    }

    function fH(SS, HS) {
      return {
        loadoutNoticeKey: SS,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: HS,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const kH = "containmentLoadoutView";
    class aH extends SH {
      constructor(SS, HS, gS, tS) {
        super(SS, HS, gS, tS, "loadout", XH), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = SS => {
          this.slot = SS, this.selectedId = KH(this.board, SS), this.emit()
        }
      }
      messageOpens(SS) {
        return SS.loadoutMessageOpens
      }
      messageNotice(SS) {
        return SS.loadoutNotice
      }
      openingSelection(SS) {
        return KH(SS, this.slot)
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

    function KH(SS, HS) {
      if ("loadoutPerks" === HS) {
        var gS;
        const HS = SS.loadoutPerks;
        return (null !== (gS = HS.find((SS => SS.loadoutPerkEquipped))) && void 0 !== gS ? gS : HS[0]).loadoutPerkId
      }
      return tH(SS, HS).loadoutSlotEquippedId
    }
    const jH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var GH = gS(36906),
      CH = gS(1359);
    const nH = {
        loadoutPrimary: `${JS}:loadoutSlotPrimary`,
        loadoutSecondary: `${JS}:loadoutSlotSecondary`,
        loadoutOffensive: `${JS}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${JS}:loadoutSlotSelfHelp`,
        loadoutArmour: `${JS}:loadoutSlotArmour`,
        loadoutPerks: `${JS}:loadoutSlotPerks`
      },
      PH = {
        section: "right",
        Sa: "bottom",
        act: "top"
      },
      QH = (0, tS.createContext)({
        step: null,
        targetRef: () => {}
      });

    function DH() {
      const {
        step: SS,
        targetRef: HS
      } = (0, tS.useContext)(QH);
      return (gS, tS) => (null === SS || void 0 === SS ? void 0 : SS.kind) === gS && SS.id === tS ? HS : void 0
    }

    function wH(SS, HS) {
      const gS = HS.loadoutTargetId;
      if ("loadoutPerks" === HS.loadoutTargetSection) {
        const HS = SS.loadoutPerks.find((SS => SS.loadoutPerkId === gS));
        return {
          name: HS.loadoutPerkName,
          owned: HS.loadoutPerkOwned,
          equipped: HS.loadoutPerkEquipped
        }
      }
      const tS = tH(SS, HS.loadoutTargetSection),
        bS = tS.loadoutSlotOptions.find((SS => SS.loadoutOptionId === gS));
      return {
        name: bS.loadoutOptionName,
        owned: bS.loadoutOptionOwnedTier > 0,
        equipped: tS.loadoutSlotEquippedId === gS
      }
    }

    function hH(SS, HS, gS, tS) {
      const [bS, XS] = SS(`${JS}:${HS}`, {
        [gS]: "\x01"
      }).split("\x01");
      return (0, ZS.jsxs)(ZS.Fragment, {
        children: [bS, (0, ZS.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: tS
        }), XS]
      })
    }

    function ZH(SS) {
      let {
        view: HS,
        onDismiss: gS,
        children: bS
      } = SS;
      const {
        t: XS
      } = (0, fS.F)(), xS = HS.loadout, NS = HS.open ? xS.loadoutWalkthrough.map((SS => ({
        target: SS,
        info: wH(xS, SS)
      }))).find((SS => {
        let {
          info: HS
        } = SS;
        return !HS.equipped
      })) : void 0;
      let qS = null,
        uS = null;
      if (void 0 !== NS) {
        const {
          target: SS,
          info: gS
        } = NS;
        HS.slot !== SS.loadoutTargetSection ? (qS = {
          kind: "section",
          id: SS.loadoutTargetSection
        }, uS = hH(XS, "loadoutWalkthroughSection", "section", XS(nH[SS.loadoutTargetSection]))) : HS.selectedId !== SS.loadoutTargetId ? (qS = {
          kind: "Sa",
          id: SS.loadoutTargetId
        }, uS = hH(XS, "loadoutWalkthroughPick", "name", gS.name)) : (qS = {
          kind: "act",
          id: SS.loadoutTargetId
        }, uS = hH(XS, gS.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", gS.name))
      }
      const IS = null === qS ? null : function(SS) {
          return `${SS.kind}:${SS.id}`
        }(qS),
        [kS, aS] = (0, tS.useState)(null),
        KS = (0, tS.useCallback)((SS => {
          aS((HS => null !== SS ? {
            key: IS,
            node: SS
          } : (null === HS || void 0 === HS ? void 0 : HS.key) === IS ? null : HS))
        }), [IS]),
        jS = null !== IS && (null === kS || void 0 === kS ? void 0 : kS.key) === IS ? kS.node : null;
      return (0, ZS.jsxs)(QH.Provider, {
        value: {
          step: qS,
          targetRef: KS
        },
        children: [bS, null !== qS && null !== jS && (0, ZS.jsx)(JH, {
          target: jS,
          placement: PH[qS.kind],
          onDismiss: gS,
          children: uS
        }, IS)]
      })
    }

    function JH(SS) {
      let {
        target: HS,
        placement: gS,
        onDismiss: bS,
        children: XS
      } = SS;
      const {
        t: xS
      } = (0, fS.F)(), NS = (0, tS.useRef)(HS);
      return NS.current = HS, (0, CH.s)("popup", NS, bS), (0, ZS.jsxs)(GH.f, {
        target: HS,
        placement: gS,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, ZS.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, ZS.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: jH,
            alt: "",
            draggable: !1
          }), (0, ZS.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: xS(`${JS}:operatorName`)
          }), (0, ZS.jsx)(KS.l, {
            onClick: bS,
            ariaLabel: xS(`${JS}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, ZS.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: XS
        })]
      })
    }
    const OH = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function dH(SS) {
      let {
        cost: HS,
        loadout: gS
      } = SS;
      const {
        t: tS
      } = (0, fS.F)();
      return HS.loadoutCostCoins <= 0 && 0 === HS.loadoutCostParts.length ? (0, ZS.jsx)("span", {
        className: "LoadoutCost",
        children: tS(`${JS}:loadoutFree`)
      }) : (0, ZS.jsxs)("span", {
        className: "LoadoutCost",
        children: [HS.loadoutCostCoins > 0 && (0, ZS.jsx)(ES, {
          itemName: OS,
          amount: HS.loadoutCostCoins,
          Ku: gS.loadoutCoins
        }), HS.loadoutCostParts.map((SS => {
          const HS = gH(gS, SS.loadoutPartCurrency);
          return (0, ZS.jsx)(ES, {
            itemName: HS.loadoutHeldPartItem,
            amount: SS.loadoutPartAmount,
            Ku: HS.loadoutHeldPartAmount
          }, SS.loadoutPartCurrency)
        }))]
      })
    }
    const cH = {
      loadoutStatFireRate: `${JS}:loadoutUnitPerMinute`,
      loadoutStatReload: `${JS}:loadoutUnitSeconds`,
      loadoutStatResupply: `${JS}:loadoutUnitSeconds`
    };

    function vH(SS) {
      return "loadoutStatPotency" === SS.loadoutStatKind ? (0, rS.J)(SS.loadoutStatValue) : String(SS.loadoutStatValue)
    }

    function EH(SS) {
      var HS;
      let {
        option: gS
      } = SS;
      const {
        t: tS
      } = (0, fS.F)(), bS = gS.loadoutOptionTiers, XS = null === (HS = bS[0]) || void 0 === HS ? void 0 : HS.loadoutTierStats.map((SS => SS.loadoutStatKind));
      if (!XS || 0 === XS.length) return null;
      const xS = gS.loadoutOptionOwnedTier,
        NS = (SS, HS) => {
          var gS;
          return null === (gS = bS[SS]) || void 0 === gS ? void 0 : gS.loadoutTierStats.find((SS => SS.loadoutStatKind === HS))
        };
      return (0, ZS.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, ZS.jsx)("thead", {
          children: (0, ZS.jsxs)("tr", {
            children: [(0, ZS.jsx)("th", {}), bS.map(((SS, HS) => (0, ZS.jsx)("th", {
              className: uS()({
                Current: HS + 1 === xS,
                Next: HS === xS
              }),
              children: tS(`${JS}:loadoutTier`, {
                tier: (0, rS.J)(HS + 1)
              })
            }, HS)))]
          })
        }), (0, ZS.jsx)("tbody", {
          children: XS.map((SS => {
            const HS = cH[SS];
            return (0, ZS.jsxs)("tr", {
              children: [(0, ZS.jsxs)("th", {
                scope: "row",
                children: [tS(`${JS}:${SS}`), HS && (0, ZS.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: tS(HS)
                })]
              }), bS.map(((HS, gS) => {
                const tS = NS(gS, SS),
                  bS = gS > 0 ? NS(gS - 1, SS) : void 0,
                  XS = tS && bS ? tS.loadoutStatValue - bS.loadoutStatValue : 0,
                  qS = OH.has(SS) ? XS < 0 : XS > 0,
                  IS = gS === xS;
                return (0, ZS.jsxs)("td", {
                  className: uS()({
                    Current: gS + 1 === xS,
                    Next: IS,
                    Gain: qS,
                    Owned: gS < xS
                  }),
                  children: [IS && qS && (0, ZS.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: XS < 0 ? "\u25bc" : "\u25b2"
                  }), tS ? vH(tS) : "-"]
                }, gS)
              }))]
            }, SS)
          }))
        })]
      })
    }

    function LH(SS) {
      let {
        view: HS,
        controller: gS,
        slot: tS,
        option: bS
      } = SS;
      const {
        t: XS
      } = (0, fS.F)(), xS = HS.loadout, NS = bS.loadoutOptionOwnedTier, qS = bS.loadoutOptionTiers.length, uS = tS.loadoutSlotEquippedId === bS.loadoutOptionId, IS = NS < qS ? bS.loadoutOptionTiers[NS].loadoutTierCost : null, kS = null !== IS && HH(xS, IS), aS = bS.loadoutOptionId, jS = DH();
      return (0, ZS.jsxs)(ZS.Fragment, {
        children: [(0, ZS.jsx)(AH, {
          icon: bS.loadoutOptionIcon,
          name: bS.loadoutOptionName,
          status: 0 === NS ? XS(`${JS}:loadoutLocked`) : qS > 1 ? XS(`${JS}:loadoutTier`, {
            tier: (0, rS.J)(NS)
          }) : null,
          locked: 0 === NS,
          equipped: uS
        }), (0, ZS.jsx)("p", {
          className: "BoardDescription",
          children: bS.loadoutOptionDescription
        }), (0, ZS.jsx)(EH, {
          option: bS
        }), (0, ZS.jsxs)("div", {
          ref: jS("act", aS),
          className: "BoardActions",
          children: [null !== IS && (0, ZS.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, ZS.jsx)(dH, {
              cost: IS,
              loadout: xS
            }), (0, ZS.jsx)(KS.p, {
              disabled: !kS || HS.pending,
              onClick: () => {
                gS.act(0 === NS ? "loadoutUnlock" : "loadoutUpgrade", aS)
              },
              children: 0 === NS ? XS(`${JS}:loadoutUnlock`) : XS(`${JS}:loadoutUpgrade`, {
                tier: (0, rS.J)(NS + 1)
              })
            })]
          }), null === IS && qS > 1 && (0, ZS.jsx)("span", {
            className: "BoardHint",
            children: XS(`${JS}:loadoutMaxed`)
          }), NS > 0 && !uS && (0, ZS.jsx)(KS.g, {
            disabled: HS.pending,
            onClick: () => {
              gS.act("loadoutEquip", aS)
            },
            children: XS(`${JS}:loadoutEquip`)
          })]
        })]
      })
    }

    function YH(SS) {
      let {
        view: HS,
        controller: gS,
        perk: tS
      } = SS;
      const {
        t: bS
      } = (0, fS.F)(), XS = HS.loadout, xS = bH(XS), NS = tS.loadoutPerkId, qS = DH();
      return (0, ZS.jsxs)(ZS.Fragment, {
        children: [(0, ZS.jsx)(AH, {
          icon: tS.loadoutPerkIcon,
          name: tS.loadoutPerkName,
          status: tS.loadoutPerkOwned ? null : bS(`${JS}:loadoutLocked`),
          locked: !tS.loadoutPerkOwned,
          equipped: tS.loadoutPerkEquipped
        }), (0, ZS.jsx)("p", {
          className: "BoardDescription",
          children: tS.loadoutPerkDescription
        }), (0, ZS.jsxs)("div", {
          ref: qS("act", NS),
          className: "BoardActions",
          children: [!tS.loadoutPerkOwned && (0, ZS.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, ZS.jsx)(dH, {
              cost: tS.loadoutPerkCost,
              loadout: XS
            }), (0, ZS.jsx)(KS.p, {
              disabled: !HH(XS, tS.loadoutPerkCost) || HS.pending,
              onClick: () => {
                gS.act("loadoutUnlock", NS)
              },
              children: bS(`${JS}:loadoutUnlock`)
            })]
          }), tS.loadoutPerkOwned && !tS.loadoutPerkEquipped && (0, ZS.jsx)(KS.g, {
            disabled: xS || HS.pending,
            onClick: () => {
              gS.act("loadoutEquip", NS)
            },
            children: bS(`${JS}:loadoutEquip`)
          }), tS.loadoutPerkOwned && !tS.loadoutPerkEquipped && xS && (0, ZS.jsx)("span", {
            className: "BoardHint",
            children: bS(`${JS}:loadoutSocketsFullHint`)
          }), tS.loadoutPerkEquipped && (0, ZS.jsx)(KS.P, {
            disabled: HS.pending,
            onClick: () => {
              gS.act("loadoutUnequip", NS)
            },
            children: bS(`${JS}:loadoutUnequip`)
          })]
        })]
      })
    }

    function AH(SS) {
      let {
        icon: HS,
        name: gS,
        status: tS,
        locked: bS,
        equipped: XS
      } = SS;
      const {
        t: xS
      } = (0, fS.F)();
      return (0, ZS.jsxs)(yS, {
        icon: (0, ZS.jsx)(cS, {
          itemName: HS
        }),
        name: gS,
        children: [null !== tS && (0, ZS.jsx)("span", {
          className: uS()("LoadoutStatusText", {
            Locked: bS
          }),
          children: tS
        }), XS && (0, ZS.jsx)("span", {
          className: "BoardBadge",
          children: xS(`${JS}:loadoutEquippedBadge`)
        })]
      })
    }

    function yH(SS) {
      let {
        view: HS,
        controller: gS
      } = SS;
      const tS = HS.loadout;
      if ("loadoutPerks" === HS.slot) {
        const SS = tS.loadoutPerks.find((SS => SS.loadoutPerkId === HS.selectedId));
        return (0, ZS.jsx)("section", {
          className: "BoardDetail",
          children: SS && (0, ZS.jsx)(YH, {
            view: HS,
            controller: gS,
            perk: SS
          })
        })
      }
      const bS = tH(tS, HS.slot),
        XS = bS.loadoutSlotOptions.find((SS => SS.loadoutOptionId === HS.selectedId));
      return (0, ZS.jsx)("section", {
        className: "BoardDetail",
        children: XS && (0, ZS.jsx)(LH, {
          view: HS,
          controller: gS,
          slot: bS,
          option: XS
        })
      })
    }

    function VH(SS) {
      let {
        owned: HS,
        total: gS
      } = SS;
      return gS <= 1 ? null : (0, ZS.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: gS
        }, ((SS, gS) => (0, ZS.jsx)("span", {
          className: uS()("LoadoutPip", {
            Filled: gS < HS
          })
        }, gS)))
      })
    }

    function iH(SS) {
      let {
        view: HS,
        controller: gS
      } = SS;
      const {
        t: tS
      } = (0, fS.F)(), bS = HS.loadout, XS = DH();
      return (0, ZS.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": tS(`${JS}:loadoutKit`),
        children: [bS.loadoutSlots.map((SS => {
          const bS = SS.loadoutSlotOptions.find((HS => HS.loadoutOptionId === SS.loadoutSlotEquippedId));
          return (0, ZS.jsxs)("button", {
            ref: XS("section", SS.loadoutSlotKind),
            type: "button",
            className: uS()("LoadoutKitSlot", {
              Selected: HS.slot === SS.loadoutSlotKind
            }),
            onClick: () => {
              gS.selectSlot(SS.loadoutSlotKind)
            },
            children: [(0, ZS.jsx)("span", {
              className: "LoadoutKitIcon",
              children: bS && (0, ZS.jsx)(cS, {
                itemName: bS.loadoutOptionIcon
              })
            }), (0, ZS.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, ZS.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, ZS.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: tS(nH[SS.loadoutSlotKind])
                }), bS && (0, ZS.jsx)(VH, {
                  owned: bS.loadoutOptionOwnedTier,
                  total: bS.loadoutOptionTiers.length
                })]
              }), (0, ZS.jsx)("span", {
                className: "LoadoutKitName",
                children: null === bS || void 0 === bS ? void 0 : bS.loadoutOptionName
              })]
            })]
          }, SS.loadoutSlotKind)
        })), (0, ZS.jsx)(WH, {
          view: HS,
          controller: gS
        })]
      })
    }

    function WH(SS) {
      let {
        view: HS,
        controller: gS
      } = SS;
      const {
        t: tS
      } = (0, fS.F)(), bS = HS.loadout, XS = bS.loadoutPerks.filter((SS => SS.loadoutPerkEquipped)), xS = DH();
      return (0, ZS.jsxs)("button", {
        ref: xS("section", "loadoutPerks"),
        type: "button",
        className: uS()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === HS.slot
        }),
        onClick: () => {
          gS.selectSlot("loadoutPerks")
        },
        children: [(0, ZS.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, ZS.jsx)("span", {
            className: "LoadoutKitLabel",
            children: tS(nH.loadoutPerks)
          }), (0, ZS.jsx)("span", {
            className: "LoadoutPerkCount",
            children: tS(`${JS}:loadoutPerkCount`, {
              equipped: String(XS.length),
              max: String(bS.loadoutMaxPerks)
            })
          })]
        }), (0, ZS.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: bS.loadoutMaxPerks
          }, ((SS, HS) => {
            const gS = XS[HS];
            return (0, ZS.jsxs)("span", {
              className: uS()("LoadoutSocket", {
                Filled: gS,
                Empty: !gS
              }),
              children: [(0, ZS.jsx)("span", {
                className: "LoadoutSocketWell",
                children: gS && (0, ZS.jsx)(cS, {
                  itemName: gS.loadoutPerkIcon
                })
              }), (0, ZS.jsx)("span", {
                className: "LoadoutSocketName",
                children: gS ? gS.loadoutPerkName : tS(`${JS}:loadoutPerkSocketEmpty`)
              })]
            }, HS)
          }))
        })]
      })
    }

    function zH(SS) {
      let {
        icon: HS,
        name: gS,
        selected: tS,
        equipped: bS,
        locked: XS,
        ownedTier: xS,
        tiers: NS,
        buttonRef: qS,
        onSelect: uS
      } = SS;
      const {
        t: IS
      } = (0, fS.F)();
      return (0, ZS.jsxs)(AS, {
        icon: (0, ZS.jsx)(cS, {
          itemName: HS
        }),
        name: gS,
        selected: tS,
        locked: XS,
        buttonRef: qS,
        onSelect: uS,
        children: [bS && (0, ZS.jsx)("span", {
          className: "BoardBadge",
          children: IS(`${JS}:loadoutEquippedBadge`)
        }), XS && (0, ZS.jsx)("span", {
          className: "BoardBadge Muted",
          children: IS(`${JS}:loadoutLocked`)
        }), !XS && (0, ZS.jsx)(VH, {
          owned: xS,
          total: NS
        })]
      })
    }

    function UH(SS) {
      let {
        view: HS,
        controller: gS
      } = SS;
      const tS = HS.loadout,
        bS = DH();
      if ("loadoutPerks" === HS.slot) return (0, ZS.jsx)("div", {
        className: "BoardTiles",
        children: tS.loadoutPerks.map((SS => (0, ZS.jsx)(zH, {
          icon: SS.loadoutPerkIcon,
          name: SS.loadoutPerkName,
          selected: HS.selectedId === SS.loadoutPerkId,
          equipped: SS.loadoutPerkEquipped,
          locked: !SS.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: bS("Sa", SS.loadoutPerkId),
          onSelect: () => {
            gS.select(SS.loadoutPerkId)
          }
        }, SS.loadoutPerkId)))
      });
      const XS = tH(tS, HS.slot);
      return (0, ZS.jsx)("div", {
        className: "BoardTiles",
        children: XS.loadoutSlotOptions.map((SS => (0, ZS.jsx)(zH, {
          icon: SS.loadoutOptionIcon,
          name: SS.loadoutOptionName,
          selected: HS.selectedId === SS.loadoutOptionId,
          equipped: XS.loadoutSlotEquippedId === SS.loadoutOptionId,
          locked: 0 === SS.loadoutOptionOwnedTier,
          ownedTier: SS.loadoutOptionOwnedTier,
          tiers: SS.loadoutOptionTiers.length,
          buttonRef: bS("Sa", SS.loadoutOptionId),
          onSelect: () => {
            gS.select(SS.loadoutOptionId)
          }
        }, SS.loadoutOptionId)))
      })
    }

    function pH(SS) {
      let {
        loadout: HS
      } = SS;
      return (0, ZS.jsx)(VS, {
        coins: HS.loadoutCoins,
        children: HS.loadoutHeldParts.filter((SS => SS.loadoutHeldPartAmount > 0)).map((SS => (0, ZS.jsx)(ES, {
          itemName: SS.loadoutHeldPartItem,
          amount: SS.loadoutHeldPartAmount
        }, SS.loadoutHeldPartCurrency)))
      })
    }

    function sH(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, IS.i)(kH, HS.getSnapshot()),
        {
          t: tS
        } = (0, fS.F)();
      if (null === gS.loadout) return null;
      const bS = gS.notice;
      return (0, ZS.jsx)(ZH, {
        view: gS,
        onDismiss: HS.dismiss,
        children: (0, ZS.jsxs)(dS, {
          open: gS.open,
          onDismiss: HS.dismiss,
          title: tS(`${JS}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, ZS.jsx)(pH, {
            loadout: gS.loadout
          }),
          statusRefused: null === bS || void 0 === bS ? void 0 : bS.loadoutNoticeRefused,
          status: (0, ZS.jsxs)(ZS.Fragment, {
            children: [(0, ZS.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: tS(`${JS}:loadoutRadioBadge`)
            }), null !== bS && tS(`${JS}:${bS.loadoutNoticeKey}`, {
              name: bS.loadoutNoticeName,
              tier: (0, rS.J)(bS.loadoutNoticeTier),
              max: String(gS.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, ZS.jsx)(iH, {
            view: gS,
            controller: HS
          }), (0, ZS.jsx)(UH, {
            view: gS,
            controller: HS
          }), (0, ZS.jsx)(yH, {
            view: gS,
            controller: HS
          })]
        })
      })
    }

    function BH(SS, HS, gS) {
      const tS = SS.locatorEntries.find((SS => SS.locatorEntryId === gS));
      if (!tS) return null;
      const bS = tS.locatorEntryName;
      if ("locatorDisarm" === HS) return tS.locatorEntryArmed ? {
        board: MH(SS, null),
        notice: FH("locatorNoticeDisarmed", bS)
      } : null;
      if ("locatorArm" === HS) return tS.locatorEntryOwned && !tS.locatorEntryArmed ? {
        board: MH(SS, gS),
        notice: FH("locatorNoticeArmed", bS)
      } : null;
      if (tS.locatorEntryOwned || SS.locatorCoins < tS.locatorEntryPrice) return null;
      const XS = MH({
        ...SS,
        locatorCoins: SS.locatorCoins - tS.locatorEntryPrice
      }, gS);
      return {
        board: {
          ...XS,
          locatorEntries: XS.locatorEntries.map((SS => SS.locatorEntryId === gS ? {
            ...SS,
            locatorEntryOwned: !0
          } : SS))
        },
        notice: FH("locatorNoticeBought", bS)
      }
    }

    function MH(SS, HS) {
      return {
        ...SS,
        locatorEntries: SS.locatorEntries.map((SS => {
          const gS = SS.locatorEntryId === HS;
          return SS.locatorEntryArmed === gS ? SS : {
            ...SS,
            locatorEntryArmed: gS
          }
        }))
      }
    }

    function FH(SS, HS) {
      return {
        locatorNoticeKey: SS,
        locatorNoticeRefused: !1,
        locatorNoticeName: HS
      }
    }
    const RH = "containmentLocatorView";
    class TH extends SH {
      constructor(SS, HS, gS, tS) {
        super(SS, HS, gS, tS, "locator", BH), this.snapshot = this.buildSnapshot()
      }
      messageOpens(SS) {
        return SS.locatorMessageOpens
      }
      messageNotice(SS) {
        return SS.locatorNotice
      }
      openingSelection(SS) {
        var HS;
        const gS = SS.locatorEntries;
        return (null !== (HS = gS.find((SS => SS.locatorEntryArmed))) && void 0 !== HS ? HS : gS[0]).locatorEntryId
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
    const oH = {
        locatorContained: `${JS}:locatorFlavourContained`,
        locatorEncountered: `${JS}:locatorFlavourEncountered`,
        locatorUnseen: `${JS}:locatorFlavourUnseen`
      },
      lH = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${JS}:locatorAttunedNormal`,
        codexHardOnly: `${JS}:locatorAttunedHard`
      };

    function mH() {
      return (0, ZS.jsx)(ZS.Fragment, {
        children: Array.from({
          length: 5
        }, ((SS, HS) => (0, ZS.jsx)("span", {
          className: "LocatorFly",
          children: (0, ZS.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, HS)))
      })
    }

    function eH(SS) {
      let {
        entry: HS
      } = SS;
      const {
        t: gS
      } = (0, fS.F)();
      return HS.locatorEntryArmed ? (0, ZS.jsx)("span", {
        className: "BoardBadge Armed",
        children: gS(`${JS}:locatorArmedBadge`)
      }) : HS.locatorEntryOwned ? (0, ZS.jsx)("span", {
        className: "BoardBadge",
        children: gS(`${JS}:locatorOwnedBadge`)
      }) : null
    }

    function rH(SS) {
      let {
        entry: HS,
        coins: gS,
        inTile: tS = !1
      } = SS;
      return (0, ZS.jsx)(ES, {
        itemName: OS,
        amount: HS.locatorEntryPrice,
        Ku: gS,
        inTile: tS
      })
    }

    function Sg(SS) {
      let {
        view: HS,
        controller: gS,
        entry: tS
      } = SS;
      const {
        t: bS
      } = (0, fS.F)(), XS = tS.locatorEntryId, xS = HS.locators.locatorEntries.find((SS => SS.locatorEntryArmed && SS !== tS));
      return (0, ZS.jsxs)("div", {
        className: "BoardActions",
        children: [tS.locatorEntryArmed && (0, ZS.jsx)(KS.P, {
          disabled: HS.pending,
          onClick: () => {
            gS.act("locatorDisarm", XS)
          },
          children: bS(`${JS}:locatorDisarm`)
        }), tS.locatorEntryOwned && !tS.locatorEntryArmed && (0, ZS.jsx)(KS.g, {
          disabled: HS.pending,
          onClick: () => {
            gS.act("locatorArm", XS)
          },
          children: bS(`${JS}:locatorArm`)
        }), !tS.locatorEntryOwned && (0, ZS.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, ZS.jsx)(rH, {
            entry: tS,
            coins: HS.locators.locatorCoins
          }), (0, ZS.jsx)(KS.p, {
            disabled: HS.locators.locatorCoins < tS.locatorEntryPrice || HS.pending,
            onClick: () => {
              gS.act("locatorBuy", XS)
            },
            children: bS(`${JS}:locatorBuy`)
          })]
        }), xS && !tS.locatorEntryArmed && (0, ZS.jsx)("span", {
          className: "BoardHint",
          children: bS(`${JS}:locatorReplacesHint`, {
            name: xS.locatorEntryName
          })
        })]
      })
    }

    function Hg(SS) {
      let {
        entry: HS
      } = SS;
      return "locatorUnseen" === HS.locatorEntryStanding ? (0, ZS.jsx)(cS, {
        itemName: "Compass"
      }) : (0, ZS.jsx)(vS, {
        anomalyId: HS.locatorEntryId,
        caught: "locatorContained" === HS.locatorEntryStanding
      })
    }

    function gg(SS) {
      let {
        view: HS,
        controller: gS,
        entry: tS
      } = SS;
      const {
        t: bS
      } = (0, fS.F)(), XS = lH[tS.locatorEntryDifficulty];
      return (0, ZS.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, ZS.jsxs)("div", {
          className: uS()("LocatorLabel", {
            Armed: tS.locatorEntryArmed
          }),
          children: [(0, ZS.jsx)(yS, {
            icon: (0, ZS.jsx)(Hg, {
              entry: tS
            }),
            name: bS(`${JS}:locatorName`, {
              name: tS.locatorEntryName
            }),
            children: (0, ZS.jsx)(eH, {
              entry: tS
            })
          }), (0, ZS.jsx)("p", {
            className: "BoardDescription",
            children: bS(tS.locatorEntryArmed ? `${JS}:locatorFlavourArmed` : oH[tS.locatorEntryStanding])
          }), null !== XS && (0, ZS.jsx)("p", {
            className: "LocatorAttuned",
            children: bS(XS)
          }), (0, ZS.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: bS(`${JS}:locatorUsage`)
          })]
        }), (0, ZS.jsx)(Sg, {
          view: HS,
          controller: gS,
          entry: tS
        })]
      })
    }

    function tg(SS) {
      let {
        controller: HS
      } = SS;
      const gS = (0, IS.i)(RH, HS.getSnapshot()),
        {
          t: tS
        } = (0, fS.F)(),
        bS = gS.locators;
      if (null === bS) return null;
      const XS = bS.locatorEntries.find((SS => SS.locatorEntryId === gS.selectedId)),
        xS = gS.notice;
      return (0, ZS.jsxs)(dS, {
        open: gS.open,
        onDismiss: HS.dismiss,
        title: tS(`${JS}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, ZS.jsx)(mH, {}),
        headerExtra: (0, ZS.jsx)(VS, {
          coins: bS.locatorCoins
        }),
        statusRefused: null === xS || void 0 === xS ? void 0 : xS.locatorNoticeRefused,
        status: (0, ZS.jsxs)(ZS.Fragment, {
          children: [(0, ZS.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: tS(`${JS}:locatorKeeperName`)
          }), null !== xS && tS(`${JS}:${xS.locatorNoticeKey}`, {
            name: xS.locatorNoticeName
          })]
        }),
        children: [(0, ZS.jsx)("div", {
          className: "BoardTiles",
          children: bS.locatorEntries.map((SS => (0, ZS.jsxs)(AS, {
            icon: (0, ZS.jsx)(Hg, {
              entry: SS
            }),
            name: SS.locatorEntryName,
            selected: SS === XS,
            locked: !1,
            className: uS()("LocatorTag", {
              Armed: SS.locatorEntryArmed
            }),
            onSelect: () => {
              HS.select(SS.locatorEntryId)
            },
            children: [(0, ZS.jsx)(eH, {
              entry: SS
            }), !SS.locatorEntryOwned && (0, ZS.jsx)(rH, {
              entry: SS,
              coins: bS.locatorCoins,
              inTile: !0
            })]
          }, SS.locatorEntryId)))
        }), (0, ZS.jsx)(gg, {
          view: gS,
          controller: HS,
          entry: XS
        })]
      })
    }

    function bg(SS) {
      let {
        loadout: HS,
        codex: gS,
        locator: tS
      } = SS;
      return (0, ZS.jsxs)(ZS.Fragment, {
        children: [(0, ZS.jsx)(sH, {
          controller: HS
        }), (0, ZS.jsx)(eS, {
          controller: gS
        }), (0, ZS.jsx)(tg, {
          controller: tS
        })]
      })
    }
    var Xg = gS(38564);
    class xg {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = SS, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Xg.b({
          spacingMs: 0,
          now: HS
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(SS, HS) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, HS(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(SS), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const SS of this.listeners) SS()
      }
    }
    var Ng = gS(38558);
    const qg = new Map([
      ["npc_general", jH],
      ["npc_tentacle_guy", Ng]
    ]);

    function ug(SS) {
      const HS = qg.get(SS);
      if (void 0 === HS) return null;
      const gS = document.createElement("img");
      return gS.src = HS, gS.alt = "", gS.draggable = !1, gS.style.imageRendering = "pixelated", gS
    }
    const Ig = function() {
      let SS, HS = !1,
        gS = null,
        qS = null;
      const uS = [],
        IS = SS => {
          for (const HS of uS) HS !== SS && HS.close();
          (0, NS.u)()
        },
        fS = SS => {
          SS && (0, NS.k)()
        },
        kS = new xg((HS => {
          SS.sendCommand(HS)
        })),
        aS = new aH((SS => {
          xS.k.cj(kH, SS, !0)
        }), IS, fS, kS),
        KS = new zS((SS => {
          xS.k.cj(WS, SS, !0)
        }), IS, fS),
        jS = new TH((SS => {
          xS.k.cj(RH, SS, !0)
        }), IS, fS, kS);
      uS.push(aS, KS, jS);
      return {
        onCreate: HS => {
          SS = HS, gS = (0, NS.y)(null, {
            content: (0, tS.createElement)(bg, {
              loadout: aS,
              codex: KS,
              locator: jS
            }),
            onClose: () => {
              for (const SS of uS) SS.close()
            }
          }), qS = (0, XS.g)(ug)
        },
        onReceivedMessageFromServer: (SS, HS) => {
          "containmentLoadout" === SS ? aS.wK(HS) : "containmentLoadoutClose" === SS ? aS.isOpen() && (aS.close(), (0, NS.h)()) : "containmentCodex" === SS ? KS.wK(HS) : "containmentLocator" === SS && jS.wK(HS)
        },
        mf: () => {
          HS || bS.b.get("loadingOverlayVisible") || (HS = !0, SS.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var SS, HS;
          null === (SS = gS) || void 0 === SS || SS(), gS = null, null === (HS = qS) || void 0 === HS || HS(), qS = null;
          for (const gS of uS) gS.dispose();
          kS.dispose()
        }
      }
    }
  },
  36908: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => iS,
      C: () => AS,
      E: () => WS,
      d: () => qS,
      e: () => cS,
      g: () => NS,
      i: () => YS,
      j: () => OS,
      m: () => wS,
      o: () => LS,
      p: () => ES,
      t: () => JS,
      v: () => yS,
      x: () => VS
    });
    var tS = gS(45);
    const bS = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      XS = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      xS = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      NS = XS.filter((SS => "docsButton" !== SS)),
      qS = xS.filter((SS => "aiHelperButton" !== SS)),
      uS = "codeEditorTutorials",
      IS = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      fS = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let kS = null,
      aS = null;
    const KS = new Set,
      jS = new Set;
    let GS = null;
    const CS = new Set,
      nS = new Set;

    function PS() {
      nS.forEach((SS => {
        SS()
      }))
    }

    function QS() {
      if (!kS) {
        const SS = tS.g.getItem(uS);
        kS = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof SS && null !== SS ? SS : {}
        }
      }
      return kS
    }

    function DS(SS) {
      const HS = QS();
      HS[SS] || (kS = {
        ...HS,
        [SS]: !0
      }, tS.g.setItem(uS, kS))
    }

    function wS(SS) {
      return "docsOverview" === SS ? XS : "aiHelperOverview" === SS ? xS : aS ? bS[aS] : []
    }

    function hS(SS) {
      return ("worldCodeButton" !== SS || !QS().worldCodeIntroShown) && !CS.has(SS)
    }

    function ZS(SS) {
      var HS;
      return (null === (HS = GS) || void 0 === HS ? void 0 : HS.name) === SS ? GS.stepsDone : KS
    }

    function JS(SS, HS) {
      if (! function(SS) {
          return GS ? GS.name === SS : "welcome" === SS
        }(SS) || !hS(HS) || ZS(SS).has(HS)) return !1;
      if (GS) return !0;
      const gS = IS[HS];
      return gS ? !QS()[gS] || jS.has(HS) : !QS()[fS[SS]]
    }

    function OS(SS) {
      var HS;
      return null !== (HS = wS(SS).find((HS => JS(SS, HS)))) && void 0 !== HS ? HS : null
    }

    function dS(SS) {
      var HS;
      DS(fS[SS]), (null === (HS = GS) || void 0 === HS ? void 0 : HS.name) === SS && (GS = null)
    }

    function cS(SS) {
      const HS = (GS ? [GS.name] : ["welcome", "docsOverview"]).find((HS => OS(HS) === SS));
      if (!HS) return;
      ZS(HS).add(SS);
      const gS = IS[SS];
      gS && (DS(gS), GS || jS.add(SS)), null === OS(HS) && dS(HS), PS()
    }

    function vS(SS, HS) {
      const gS = wS(SS),
        tS = ZS(SS);
      for (let bS = gS.indexOf(HS) - 1; bS >= 0; bS--)
        if (tS.has(gS[bS]) && hS(gS[bS])) return gS[bS];
      return null
    }

    function ES(SS, HS) {
      return null !== vS(SS, HS)
    }

    function LS(SS, HS) {
      const gS = vS(SS, HS);
      gS && (ZS(SS).delete(gS), PS())
    }

    function YS(SS) {
      dS(SS), "welcome" === SS && wS("welcome").forEach((SS => {
        const HS = IS[SS];
        HS && DS(HS)
      })), PS()
    }

    function AS(SS) {
      GS = {
        name: SS,
        stepsDone: new Set
      }, PS()
    }

    function yS() {
      (GS || 0 !== KS.size || 0 !== jS.size) && (GS = null, KS.clear(), jS.clear(), PS())
    }

    function VS(SS, HS) {
      const gS = HS ? SS : aS === SS ? null : aS;
      gS !== aS && (aS = gS, PS())
    }

    function iS(SS, HS) {
      CS.has(SS) === HS && (HS ? CS.delete(SS) : CS.add(SS), PS())
    }

    function WS(SS) {
      return nS.add(SS), () => {
        nS.delete(SS)
      }
    }
  },
  39307: (SS, HS, gS) => {
    var tS = {
      "./breach-zero-uncaught.webp": 39314,
      "./breach-zero.webp": 39321,
      "./brood-father-uncaught.webp": 39323,
      "./brood-father.webp": 39326,
      "./carousel-uncaught.webp": 39335,
      "./carousel.webp": 39340,
      "./deadlock-uncaught.webp": 39344,
      "./deadlock.webp": 39353,
      "./frost-revenant-uncaught.webp": 39357,
      "./frost-revenant.webp": 39366,
      "./hollow-choir-uncaught.webp": 39375,
      "./hollow-choir.webp": 39382,
      "./magma-warden-uncaught.webp": 39390,
      "./magma-warden.webp": 39394,
      "./patient-zero-uncaught.webp": 39400,
      "./patient-zero.webp": 39408,
      "./siege-engine-uncaught.webp": 39411,
      "./siege-engine.webp": 39420,
      "./warp-stalker-uncaught.webp": 39429,
      "./warp-stalker.webp": 39433
    };

    function bS(SS) {
      var HS = XS(SS);
      return gS(HS)
    }

    function XS(SS) {
      if (!gS.o(tS, SS)) {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }
      return tS[SS]
    }
    bS.keys = function() {
      return Object.keys(tS)
    }, bS.resolve = XS, SS.exports = bS, bS.id = 39307
  },
  39314: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39321: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39323: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39326: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39335: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39340: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39344: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39353: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39357: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39366: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39375: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39382: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39390: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39394: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39400: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39408: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39411: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39420: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39429: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39433: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38558: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);