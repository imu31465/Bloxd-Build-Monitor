export const id = 14;
export const ids = [14];
export const modules = {
  36841: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => XD,
      e: () => ED,
      h: () => QD,
      i: () => ID
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(58),
      rD = wD(79),
      LD = wD(1369),
      cD = wD(1447),
      gD = wD(1366),
      RD = wD(1282),
      AD = wD(1200),
      UD = wD(36845),
      fD = wD(1096);

    function ID(DD) {
      const [zD, wD] = (0, KD.useState)((() => (0, UD.m)(DD)));
      return (0, KD.useEffect)((() => (wD((0, UD.m)(DD)), (0, UD.K)((() => {
        wD((0, UD.m)(DD))
      })))), [DD]), zD
    }

    function BD(DD, zD) {
      "function" === typeof DD ? DD(zD) : DD && (DD.current = zD)
    }

    function GD(DD) {
      let {
        tutorial: zD,
        step: wD,
        enabled: pD = !0
      } = DD;
      const sD = ID(zD);
      return pD && sD === wD
    }

    function hD(DD, zD) {
      const wD = (0, UD.n)(DD),
        pD = wD.indexOf(zD);
      return !wD.slice(pD + 1).some((zD => (0, UD.v)(DD, zD)))
    }

    function nD(DD, zD, wD, pD) {
      let {
        tutorial: sD,
        step: KD,
        waitForClick: rD = !1,
        onPrevious: LD
      } = DD;
      const cD = zD && (0, UD.t)(sD, KD),
        gD = zD && !hD(sD, KD),
        AD = rD ? pD : wD;
      let fD = null;
      cD ? fD = () => {
        null === LD || void 0 === LD || LD(), (0, UD.p)(sD, KD)
      } : gD && (fD = () => {
        (0, UD.j)(sD)
      }), (0, RD.u)("popup", null !== AD && void 0 !== AD ? AD : wD, fD, zD && null !== AD, null, cD ? void 0 : "controller:menusSkipTutorial")
    }

    function MD(DD) {
      let {
        tutorial: zD,
        step: wD,
        text: pD,
        waitForClick: sD = !1,
        onPrevious: KD
      } = DD;
      const {
        t: rD
      } = (0, AD.E)(), LD = hD(zD, wD);
      return (0, fD.jsxs)(fD.Fragment, {
        children: [(0, fD.jsx)("div", {
          className: "TutorialStepText",
          children: pD
        }), (0, fD.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, UD.t)(zD, wD) && (0, fD.jsx)(cD.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === KD || void 0 === KD || KD(), (0, UD.p)(zD, wD)
            },
            children: rD("tutorial:back")
          }), !sD && (0, fD.jsx)(cD.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, UD.f)(wD)
            },
            padDefaultFocus: !0,
            children: rD(LD ? "tutorial:done" : "tutorial:next")
          }), !LD && (0, fD.jsx)(cD.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, UD.j)(zD)
            },
            children: rD("tutorial:skip")
          })]
        })]
      })
    }
    const OD = 6;

    function JD(DD) {
      let {
        rect: zD,
        margin: wD
      } = DD;
      const pD = Math.max(0, zD.top - wD),
        sD = zD.bottom + wD,
        KD = Math.max(0, zD.left - wD),
        rD = zD.right + wD;
      return (0, fD.jsxs)(fD.Fragment, {
        children: [(0, fD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: pD
          }
        }), (0, fD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: sD,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, fD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pD,
            left: 0,
            width: KD,
            height: sD - pD
          }
        }), (0, fD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pD,
            left: rD,
            right: 0,
            height: sD - pD
          }
        })]
      })
    }

    function ED(DD) {
      let {
        target: zD,
        placement: wD,
        boxRef: pD,
        className: cD,
        spotlightMargin: RD = OD,
        children: AD
      } = DD;
      const {
        getArrowProps: UD,
        getTooltipProps: ID,
        setTooltipRef: BD,
        setTriggerRef: GD
      } = (0, LD.d)({
        placement: wD,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, RD]
      });
      (0, KD.useLayoutEffect)((() => {
        GD(zD)
      }), [zD, GD]);
      const hD = function(DD, zD) {
        const [wD, pD] = (0, KD.useState)(null);
        return (0, KD.useEffect)((() => {
          if (!zD || !DD) return void pD(null);
          let wD = 0,
            sD = null;
          const KD = () => {
            const zD = DD.getBoundingClientRect();
            sD && zD.left === sD.left && zD.top === sD.top && zD.width === sD.width && zD.height === sD.height || (sD = zD, pD(zD)), wD = requestAnimationFrame(KD)
          };
          return KD(), () => {
            cancelAnimationFrame(wD)
          }
        }), [DD, zD]), wD
      }(zD, !0);
      (0, KD.useEffect)((() => {
        null === zD || void 0 === zD || zD.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [zD]);
      const nD = (0, KD.useCallback)((DD => {
        BD(DD), pD && (pD.current = DD)
      }), [BD, pD]);
      return (0, rD.createPortal)((0, fD.jsxs)(fD.Fragment, {
        children: [hD && (0, fD.jsx)(JD, {
          rect: hD,
          margin: RD
        }), (0, fD.jsxs)("div", {
          ref: nD,
          ...ID({
            className: sD()("tooltip-container SmallTextLight TutorialStep", cD)
          }),
          children: [AD, (0, fD.jsx)("div", {
            ...UD({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, gD.g)())
    }
    const QD = (0, KD.forwardRef)((function(DD, zD) {
      let {
        placement: wD = "right",
        children: pD,
        ...sD
      } = DD;
      const rD = GD(sD),
        LD = (0, KD.useRef)(null),
        cD = (0, KD.useRef)(null);
      nD(sD, rD, LD, cD);
      const [gD, RD] = (0, KD.useState)(null), AD = pD.ref, UD = (0, KD.useCallback)((DD => {
        cD.current = DD, RD(DD), BD(zD, DD), BD(AD, DD)
      }), [zD, AD]);
      return (0, fD.jsxs)(fD.Fragment, {
        children: [(0, KD.cloneElement)(pD, {
          ref: UD
        }), rD && (0, fD.jsx)(ED, {
          target: gD,
          placement: wD,
          boxRef: LD,
          children: (0, fD.jsx)(MD, {
            ...sD
          })
        })]
      })
    }));

    function XD(DD) {
      const zD = GD(DD),
        wD = (0, KD.useRef)(null);
      return nD(DD, zD, wD, null), zD ? (0, rD.createPortal)((0, fD.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, fD.jsx)("div", {
          ref: wD,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, fD.jsx)(MD, {
            ...DD
          })
        })
      }), (0, gD.g)()) : null
    }
  },
  38533: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    const pD = 4,
      sD = 12e3,
      KD = 1e3;
    class rD {
      constructor() {
        let {
          limit: DD = pD,
          windowMs: zD = sD,
          spacingMs: wD = KD,
          now: rD = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = DD, this.windowMs = zD, this.spacingMs = wD, this.now = rD
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const DD of this.priority) DD.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const DD = this.now();
        this.sent.push(DD), this.lastSentAt = DD, this.schedule(), this.notify()
      }
      addPriority(DD) {
        return this.priority.add(DD), () => {
          this.priority.delete(DD)
        }
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const DD of this.priority)
          if (DD.waiting()) return !0;
        return !1
      }
      prune() {
        const DD = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= DD;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const DD = this.now(),
          zD = this.lastSentAt + this.spacingMs,
          wD = Math.min(zD > DD ? zD : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        wD !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, wD - DD)))
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  38518: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    class pD {
      constructor(DD, zD, wD) {
        this.KG = DD, this.beforeOpen = zD, this.afterClose = wD, this.open = !1, this.MI = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.MI && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(DD) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(DD)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.MI = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.MI || (this.snapshot = this.buildSnapshot(), this.KG(this.snapshot))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  39262: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => Aw
    });
    var pD = wD(58);
    var sD = wD(20),
      KD = wD(1906),
      rD = wD(25),
      LD = wD(36580),
      cD = wD(1044),
      gD = wD.n(cD),
      RD = wD(1442),
      AD = wD(1200),
      UD = wD(4552),
      fD = wD(1348),
      ID = wD(1447),
      BD = wD(1915),
      GD = wD(1366),
      hD = wD(1895),
      nD = wD(1973),
      MD = wD(212);
    const OD = wD(39267),
      JD = Object.fromEntries(OD.keys().map((DD => [DD.replace(/^\.\/(.*)\.webp$/, "$1"), OD(DD)]))),
      ED = new Set;

    function QD(DD, zD) {
      const wD = zD ? DD : `${DD}-uncaught`,
        pD = (0, MD.d)(JD, wD);
      return void 0 !== pD || ED.has(wD) || (ED.add(wD), console.warn(`Containment Breach has no mugshot ${wD}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), pD
    }
    var XD = wD(1096);
    const VD = "containmentBreach",
      PD = "Gold Coin";

    function CD(DD) {
      let {
        open: zD,
        onDismiss: wD,
        title: pD,
        className: sD,
        decor: KD,
        headerExtra: rD,
        status: LD,
        statusRefused: cD = !1,
        children: RD
      } = DD;
      const AD = `${sD}Title`;
      return (0, XD.jsx)(UD.c, {
        show: zD,
        close: wD,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, XD.jsxs)("section", {
          className: gD()("ContainmentBoardPanel", sD),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": AD,
          children: [KD && (0, XD.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: KD
          }), (0, XD.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, XD.jsx)("h2", {
              id: AD,
              className: "VisuallyHidden",
              children: pD
            }), rD, (0, XD.jsx)(ID.k, {
              onClick: wD
            })]
          }), (0, XD.jsx)("div", {
            className: "BoardBody",
            children: RD
          }), void 0 !== LD && (0, XD.jsx)("footer", {
            className: gD()("BoardStatus", {
              Refused: cD
            }),
            children: LD
          })]
        })
      })
    }

    function xD(DD) {
      let {
        itemName: zD
      } = DD;
      return (0, XD.jsx)(BD.d, {
        itemName: zD,
        amount: 0
      })
    }

    function TD(DD) {
      let {
        anomalyId: zD,
        caught: wD
      } = DD;
      const sD = (0, pD.useRef)(null);
      return (0, fD.b)(sD, !wD), (0, XD.jsx)("span", {
        ref: sD,
        className: gD()("BoardMugshot", {
          Uncaught: !wD
        }),
        children: (0, XD.jsx)("img", {
          src: QD(zD, wD),
          alt: "",
          draggable: !1
        })
      })
    }

    function bD(DD) {
      let {
        itemName: zD,
        amount: wD,
        Qg: pD,
        inTile: sD = !1
      } = DD;
      return (0, XD.jsx)(GD.f, {
        delayShow: 200,
        hoverOnly: sD,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, XD.jsx)(dD, {
          itemName: zD,
          amount: wD,
          Qg: pD
        }),
        children: (0, XD.jsxs)("span", {
          className: gD()("BoardChip", {
            Short: void 0 !== pD && pD < wD
          }),
          children: [(0, XD.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, XD.jsx)(xD, {
              itemName: zD
            })
          }), wD.toLocaleString()]
        })
      })
    }
    const jD = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function dD(DD) {
      var zD;
      let {
        itemName: wD,
        amount: pD,
        Qg: sD
      } = DD;
      const {
        t: KD
      } = (0, AD.E)(), rD = (0, nD.g)("itemInfo", (DD => DD[wD])), {
        lore: LD,
        droppedBy: cD
      } = function(DD) {
        if ("string" !== typeof DD) return {
          lore: DD,
          droppedBy: null
        };
        const zD = jD.exec(DD);
        return null === zD ? {
          lore: DD,
          droppedBy: null
        } : {
          lore: "" === zD[1] ? void 0 : zD[1],
          droppedBy: zD[2]
        }
      }(null === rD || void 0 === rD ? void 0 : rD.description);
      return (0, XD.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, XD.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, XD.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, XD.jsx)(xD, {
              itemName: wD
            })
          }), (0, XD.jsx)(hD.e, {
            text: null !== (zD = null === rD || void 0 === rD ? void 0 : rD.displayName) && void 0 !== zD ? zD : wD,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== LD || null !== cD) && (0, XD.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== LD && (0, XD.jsx)(hD.e, {
            text: LD,
            className: "BoardChipTooltipDescription"
          }), null !== cD && (0, XD.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, XD.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: KD(`${VD}:chipDroppedBy`)
            }), cD]
          })]
        }), void 0 !== sD && (0, XD.jsxs)("div", {
          className: gD()("BoardChipTooltipHeld", {
            Short: sD < pD
          }),
          children: [(0, XD.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: KD(`${VD}:chipYouHave`)
          }), (0, XD.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, XD.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: sD.toLocaleString()
            }), ` / ${pD.toLocaleString()}`]
          }), (0, XD.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, XD.jsx)("span", {
              style: {
                width: (pD > 0 ? 100 * Math.min(1, sD / pD) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function SD(DD) {
      let {
        icon: zD,
        name: wD,
        selected: pD,
        locked: sD,
        className: KD,
        buttonRef: rD,
        onSelect: LD,
        children: cD
      } = DD;
      return (0, XD.jsxs)("button", {
        ref: rD,
        type: "button",
        className: gD()("BoardTile", KD, {
          Selected: pD,
          Locked: sD
        }),
        onClick: LD,
        children: [(0, XD.jsx)("span", {
          className: "BoardTileIcon",
          children: zD
        }), (0, XD.jsx)("span", {
          className: "BoardTileName",
          children: wD
        }), cD]
      })
    }

    function iD(DD) {
      let {
        icon: zD,
        name: wD,
        children: pD
      } = DD;
      return (0, XD.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, XD.jsx)("span", {
          className: "BoardDetailIcon",
          children: zD
        }), (0, XD.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, XD.jsx)("h3", {
            children: wD
          }), (0, XD.jsx)("span", {
            className: "BoardDetailStatus",
            children: pD
          })]
        })]
      })
    }

    function lD(DD) {
      let {
        coins: zD,
        children: wD
      } = DD;
      return (0, XD.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, XD.jsx)(bD, {
          itemName: PD,
          amount: zD
        }), wD]
      })
    }
    var WD = wD(38518);
    const ND = "containmentCodexView";
    class ZD extends WD.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = DD => {
          this.selectedId = DD, this.emit()
        }
      }
      QI(DD) {
        this.entries = DD.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const yD = {
        codexAnyDifficulty: `${VD}:codexNeedsAny`,
        codexNormalOnly: `${VD}:codexNeedsNormal`,
        codexHardOnly: `${VD}:codexNeedsHard`
      },
      kD = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      mD = {
        codexContained: `${VD}:codexContainedBadge`,
        codexEncountered: `${VD}:codexEncounteredBadge`,
        codexUnidentified: `${VD}:codexUnidentifiedBadge`
      },
      eD = ["94%", "81%", "88%", "46%", "72%"];

    function oD(DD) {
      let {
        entry: zD
      } = DD;
      const {
        t: wD
      } = (0, AD.E)();
      return (0, XD.jsx)("span", {
        className: gD()("BoardBadge", kD[zD.codexEntryState]),
        children: wD(mD[zD.codexEntryState])
      })
    }

    function aD(DD) {
      const {
        t: zD
      } = (0, AD.E)();
      return "codexUnidentified" === DD.codexEntryState ? zD(`${VD}:codexUnidentifiedName`) : DD.codexEntryName
    }

    function uD(DD) {
      let {
        entry: zD
      } = DD;
      return "codexUnidentified" === zD.codexEntryState ? (0, XD.jsx)(xD, {
        itemName: "Book"
      }) : (0, XD.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, XD.jsx)(TD, {
          anomalyId: zD.codexEntryId,
          caught: "codexContained" === zD.codexEntryState
        }), (0, XD.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function vD(DD) {
      let {
        entry: zD,
        selected: wD,
        onSelect: pD
      } = DD;
      const sD = "codexUnidentified" === zD.codexEntryState;
      return (0, XD.jsxs)(SD, {
        icon: (0, XD.jsx)(uD, {
          entry: zD
        }),
        name: aD(zD),
        selected: wD,
        locked: sD,
        className: gD()("CodexFolder", kD[zD.codexEntryState]),
        onSelect: () => {
          pD(zD.codexEntryId)
        },
        children: [!sD && (0, XD.jsx)(oD, {
          entry: zD
        }), sD && (0, XD.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function tD(DD) {
      let {
        count: zD
      } = DD;
      const wD = [];
      for (let pD = Math.min(zD, 25); pD > 0; pD -= 5) wD.push(Math.min(pD, 5));
      return (0, XD.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: wD.map(((DD, zD) => (0, XD.jsx)("span", {
          className: gD()("CodexTallyGroup", {
            Gate: 5 === DD
          }),
          children: Array.from({
            length: Math.min(DD, 4)
          }, ((DD, zD) => (0, XD.jsx)("span", {
            className: "CodexTallyMark"
          }, zD)))
        }, zD)))
      })
    }

    function FD(DD) {
      let {
        contained: zD,
        total: wD
      } = DD;
      const {
        t: pD
      } = (0, AD.E)();
      return (0, XD.jsxs)("div", {
        className: "CodexProgress",
        children: [pD(`${VD}:codexProgress`, {
          contained: String(zD),
          total: String(wD)
        }), (0, XD.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, XD.jsx)("span", {
            style: {
              width: zD / wD * 100 + "%"
            }
          })
        })]
      })
    }

    function YD(DD) {
      let {
        entry: zD,
        fileNumber: wD
      } = DD;
      const {
        t: pD
      } = (0, AD.E)(), sD = "codexContained" === zD.codexEntryState;
      return (0, XD.jsx)("section", {
        className: "BoardDetail",
        children: (0, XD.jsxs)("article", {
          className: gD()("CodexDossier", kD[zD.codexEntryState]),
          children: [(0, XD.jsx)("span", {
            className: "CodexFileNumber",
            children: pD(`${VD}:codexFileNumber`, {
              number: String(wD).padStart(3, "0")
            })
          }), (0, XD.jsx)(iD, {
            icon: (0, XD.jsx)(uD, {
              entry: zD
            }),
            name: aD(zD),
            children: (0, XD.jsx)(oD, {
              entry: zD
            })
          }), sD && (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsx)("p", {
              className: "BoardDescription",
              children: zD.codexEntryLore
            }), (0, XD.jsxs)("p", {
              className: "CodexTally",
              children: [pD(`${VD}:codexContainments`, {
                count: String(zD.codexEntryContainedCount)
              }), (0, XD.jsx)(tD, {
                count: zD.codexEntryContainedCount
              })]
            }), (0, XD.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: pD(`${VD}:codexContainedBadge`)
            })]
          }), !sD && (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsxs)("div", {
              className: "CodexRedaction",
              children: [eD.map((DD => (0, XD.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: DD
                }
              }, DD))), (0, XD.jsx)("p", {
                className: "CodexRedacted",
                children: pD(`${VD}:codexRedacted`)
              })]
            }), "" !== zD.codexEntryHint && (0, XD.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, XD.jsx)("h4", {
                children: pD(`${VD}:codexHintLabel`)
              }), (0, XD.jsx)("p", {
                children: zD.codexEntryHint
              })]
            }), (0, XD.jsx)("p", {
              className: "CodexClearance",
              children: pD(yD[zD.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function HD(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, RD.k)(ND, zD.getSnapshot()),
        {
          t: pD
        } = (0, AD.E)();
      if (0 === wD.entries.length) return null;
      const sD = wD.entries.find((DD => DD.codexEntryId === wD.selectedId)),
        KD = wD.entries.filter((DD => "codexContained" === DD.codexEntryState)).length,
        rD = wD.entries.map((DD => DD.codexEntryId)).sort().indexOf(sD.codexEntryId) + 1;
      return (0, XD.jsxs)(CD, {
        open: wD.open,
        onDismiss: zD.dismiss,
        title: pD(`${VD}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, XD.jsx)(FD, {
          contained: KD,
          total: wD.entries.length
        }),
        children: [(0, XD.jsx)("div", {
          className: "BoardTiles",
          children: wD.entries.map((DD => (0, XD.jsx)(vD, {
            entry: DD,
            selected: DD === sD,
            onSelect: zD.select
          }, DD.codexEntryId)))
        }), (0, XD.jsx)(YD, {
          entry: sD,
          fileNumber: rD
        })]
      })
    }
    var qD = wD(351);
    class Dz extends WD.c {
      constructor(DD, zD, wD, pD, sD, KD) {
        super(DD, zD, wD), this.pacer = pD, this.command = sD, this.predict = KD, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = DD => {
          this.selectedId = DD, this.emit()
        }, this.act = (DD, zD) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${DD} ${zD}`, this.rollBack)) return;
          const wD = this.predict(this.board, DD, zD);
          null !== wD && (this.board = wD.board, this.notice = wD.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = pD.subscribe((() => {
          this.emit()
        }))
      }
      QI(DD) {
        const zD = this.messageOpens(DD);
        if (zD && this.open) return this.board === this.confirmed && (this.board = DD), this.confirmed = DD, void this.emit();
        if (this.board = DD, this.confirmed = DD, this.pacer.onReply(), zD) return this.notice = null, this.selectedId = this.openingSelection(DD), void this.show();
        const wD = this.messageNotice(DD);
        null !== wD && (this.notice = wD), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function zz(DD, zD) {
      return DD.loadoutCoins >= zD.loadoutCostCoins && zD.loadoutCostParts.every((zD => function(DD, zD) {
        return wz(DD, zD).loadoutHeldPartAmount
      }(DD, zD.loadoutPartCurrency) >= zD.loadoutPartAmount))
    }

    function wz(DD, zD) {
      return DD.loadoutHeldParts.find((DD => DD.loadoutHeldPartCurrency === zD))
    }

    function pz(DD, zD) {
      return DD.loadoutSlots.find((DD => DD.loadoutSlotKind === zD))
    }

    function sz(DD) {
      return DD.loadoutPerks.filter((DD => DD.loadoutPerkEquipped)).length >= DD.loadoutMaxPerks
    }

    function Kz(DD, zD, wD) {
      for (const sD of DD.loadoutSlots) {
        const pD = sD.loadoutSlotOptions.find((DD => DD.loadoutOptionId === wD));
        if (pD) return "loadoutArmour" === sD.loadoutSlotKind ? Lz(DD, sD, pD, zD) : rz(DD, sD, pD, zD)
      }
      const pD = DD.loadoutPerks.find((DD => DD.loadoutPerkId === wD));
      return pD ? function(DD, zD, wD) {
        const pD = zD.loadoutPerkOwned,
          sD = zD.loadoutPerkEquipped,
          KD = zD.loadoutPerkName,
          rD = sz(DD);
        if ("loadoutUnlock" === wD) {
          if (pD || !zz(DD, zD.loadoutPerkCost)) return null;
          const wD = {
            ...zD,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !rD
          };
          return {
            board: gz(Rz(DD, zD.loadoutPerkCost), wD),
            notice: Az(rD ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", KD)
          }
        }
        if ("loadoutUpgrade" === wD || !pD || "loadoutEquip" === wD === sD || !sD && rD) return null;
        return {
          board: gz(DD, {
            ...zD,
            loadoutPerkEquipped: !sD
          }),
          notice: Az(sD ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", KD)
        }
      }(DD, pD, zD) : null
    }

    function rz(DD, zD, wD, pD) {
      const sD = wD.loadoutOptionOwnedTier,
        KD = wD.loadoutOptionName;
      if ("loadoutEquip" === pD) return 0 === sD ? null : {
        board: cz(DD, zD, wD.loadoutOptionId, null),
        notice: Az("loadoutNoticeEquipped", KD)
      };
      const rD = "loadoutUnlock" === pD;
      if (rD && 0 !== sD || "loadoutUpgrade" === pD && (0 === sD || sD >= wD.loadoutOptionTiers.length) || "loadoutUnequip" === pD) return null;
      const LD = wD.loadoutOptionTiers[sD].loadoutTierCost;
      if (!zz(DD, LD)) return null;
      const cD = {
          ...wD,
          loadoutOptionOwnedTier: sD + 1
        },
        gD = rD ? wD.loadoutOptionId : zD.loadoutSlotEquippedId;
      return {
        board: cz(Rz(DD, LD), zD, gD, cD),
        notice: rD ? Az("loadoutNoticeUnlocked", KD) : Az("loadoutNoticeUpgraded", KD, sD + 1)
      }
    }

    function Lz(DD, zD, wD, pD) {
      const sD = wD.loadoutOptionOwnedTier > 0,
        KD = wD.loadoutOptionName;
      if ("loadoutEquip" === pD && sD) return {
        board: cz(DD, zD, wD.loadoutOptionId, null),
        notice: Az("loadoutNoticeEquipped", KD)
      };
      const rD = wD.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== pD || sD || !zz(DD, rD) ? null : {
        board: cz(Rz(DD, rD), zD, wD.loadoutOptionId, {
          ...wD,
          loadoutOptionOwnedTier: 1
        }),
        notice: Az("loadoutNoticeUnlocked", KD)
      }
    }

    function cz(DD, zD, wD, pD) {
      const sD = {
        ...zD,
        loadoutSlotEquippedId: wD,
        loadoutSlotOptions: zD.loadoutSlotOptions.map((DD => null !== pD && DD.loadoutOptionId === pD.loadoutOptionId ? pD : DD))
      };
      return {
        ...DD,
        loadoutSlots: DD.loadoutSlots.map((DD => DD === zD ? sD : DD))
      }
    }

    function gz(DD, zD) {
      return {
        ...DD,
        loadoutPerks: DD.loadoutPerks.map((DD => DD.loadoutPerkId === zD.loadoutPerkId ? zD : DD))
      }
    }

    function Rz(DD, zD) {
      return {
        ...DD,
        loadoutCoins: DD.loadoutCoins - zD.loadoutCostCoins,
        loadoutHeldParts: DD.loadoutHeldParts.map((DD => {
          const wD = zD.loadoutCostParts.find((zD => zD.loadoutPartCurrency === DD.loadoutHeldPartCurrency));
          return wD ? {
            ...DD,
            loadoutHeldPartAmount: DD.loadoutHeldPartAmount - wD.loadoutPartAmount
          } : DD
        }))
      }
    }

    function Az(DD, zD) {
      return {
        loadoutNoticeKey: DD,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: zD,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Uz = "containmentLoadoutView";
    class fz extends Dz {
      constructor(DD, zD, wD, pD) {
        super(DD, zD, wD, pD, "loadout", Kz), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = DD => {
          this.slot = DD, this.selectedId = Iz(this.board, DD), this.emit()
        }
      }
      messageOpens(DD) {
        return DD.loadoutMessageOpens
      }
      messageNotice(DD) {
        return DD.loadoutNotice
      }
      openingSelection(DD) {
        return Iz(DD, this.slot)
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

    function Iz(DD, zD) {
      if ("loadoutPerks" === zD) {
        var wD;
        const zD = DD.loadoutPerks;
        return (null !== (wD = zD.find((DD => DD.loadoutPerkEquipped))) && void 0 !== wD ? wD : zD[0]).loadoutPerkId
      }
      return pz(DD, zD).loadoutSlotEquippedId
    }
    const Bz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Gz = wD(36841),
      hz = wD(1282);
    const nz = {
        loadoutPrimary: `${VD}:loadoutSlotPrimary`,
        loadoutSecondary: `${VD}:loadoutSlotSecondary`,
        loadoutOffensive: `${VD}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${VD}:loadoutSlotSelfHelp`,
        loadoutArmour: `${VD}:loadoutSlotArmour`,
        loadoutPerks: `${VD}:loadoutSlotPerks`
      },
      Mz = {
        section: "right",
        HU: "bottom",
        act: "top"
      },
      Oz = (0, pD.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Jz() {
      const {
        step: DD,
        targetRef: zD
      } = (0, pD.useContext)(Oz);
      return (wD, pD) => (null === DD || void 0 === DD ? void 0 : DD.kind) === wD && DD.id === pD ? zD : void 0
    }

    function Ez(DD, zD) {
      const wD = zD.loadoutTargetId;
      if ("loadoutPerks" === zD.loadoutTargetSection) {
        const zD = DD.loadoutPerks.find((DD => DD.loadoutPerkId === wD));
        return {
          name: zD.loadoutPerkName,
          owned: zD.loadoutPerkOwned,
          equipped: zD.loadoutPerkEquipped
        }
      }
      const pD = pz(DD, zD.loadoutTargetSection),
        sD = pD.loadoutSlotOptions.find((DD => DD.loadoutOptionId === wD));
      return {
        name: sD.loadoutOptionName,
        owned: sD.loadoutOptionOwnedTier > 0,
        equipped: pD.loadoutSlotEquippedId === wD
      }
    }

    function Qz(DD, zD, wD, pD) {
      const [sD, KD] = DD(`${VD}:${zD}`, {
        [wD]: "\x01"
      }).split("\x01");
      return (0, XD.jsxs)(XD.Fragment, {
        children: [sD, (0, XD.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: pD
        }), KD]
      })
    }

    function Xz(DD) {
      let {
        view: zD,
        onDismiss: wD,
        children: sD
      } = DD;
      const {
        t: KD
      } = (0, AD.E)(), rD = zD.loadout, LD = zD.open ? rD.loadoutWalkthrough.map((DD => ({
        target: DD,
        info: Ez(rD, DD)
      }))).find((DD => {
        let {
          info: zD
        } = DD;
        return !zD.equipped
      })) : void 0;
      let cD = null,
        gD = null;
      if (void 0 !== LD) {
        const {
          target: DD,
          info: wD
        } = LD;
        zD.slot !== DD.loadoutTargetSection ? (cD = {
          kind: "section",
          id: DD.loadoutTargetSection
        }, gD = Qz(KD, "loadoutWalkthroughSection", "section", KD(nz[DD.loadoutTargetSection]))) : zD.selectedId !== DD.loadoutTargetId ? (cD = {
          kind: "HU",
          id: DD.loadoutTargetId
        }, gD = Qz(KD, "loadoutWalkthroughPick", "name", wD.name)) : (cD = {
          kind: "act",
          id: DD.loadoutTargetId
        }, gD = Qz(KD, wD.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", wD.name))
      }
      const RD = null === cD ? null : function(DD) {
          return `${DD.kind}:${DD.id}`
        }(cD),
        [UD, fD] = (0, pD.useState)(null),
        ID = (0, pD.useCallback)((DD => {
          fD((zD => null !== DD ? {
            key: RD,
            node: DD
          } : (null === zD || void 0 === zD ? void 0 : zD.key) === RD ? null : zD))
        }), [RD]),
        BD = null !== RD && (null === UD || void 0 === UD ? void 0 : UD.key) === RD ? UD.node : null;
      return (0, XD.jsxs)(Oz.Provider, {
        value: {
          step: cD,
          targetRef: ID
        },
        children: [sD, null !== cD && null !== BD && (0, XD.jsx)(Vz, {
          target: BD,
          placement: Mz[cD.kind],
          onDismiss: wD,
          children: gD
        }, RD)]
      })
    }

    function Vz(DD) {
      let {
        target: zD,
        placement: wD,
        onDismiss: sD,
        children: KD
      } = DD;
      const {
        t: rD
      } = (0, AD.E)(), LD = (0, pD.useRef)(zD);
      return LD.current = zD, (0, hz.u)("popup", LD, sD), (0, XD.jsxs)(Gz.e, {
        target: zD,
        placement: wD,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, XD.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, XD.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Bz,
            alt: "",
            draggable: !1
          }), (0, XD.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: rD(`${VD}:operatorName`)
          }), (0, XD.jsx)(ID.k, {
            onClick: sD,
            ariaLabel: rD(`${VD}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, XD.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: KD
        })]
      })
    }
    const Pz = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Cz(DD) {
      let {
        cost: zD,
        loadout: wD
      } = DD;
      const {
        t: pD
      } = (0, AD.E)();
      return zD.loadoutCostCoins <= 0 && 0 === zD.loadoutCostParts.length ? (0, XD.jsx)("span", {
        className: "LoadoutCost",
        children: pD(`${VD}:loadoutFree`)
      }) : (0, XD.jsxs)("span", {
        className: "LoadoutCost",
        children: [zD.loadoutCostCoins > 0 && (0, XD.jsx)(bD, {
          itemName: PD,
          amount: zD.loadoutCostCoins,
          Qg: wD.loadoutCoins
        }), zD.loadoutCostParts.map((DD => {
          const zD = wz(wD, DD.loadoutPartCurrency);
          return (0, XD.jsx)(bD, {
            itemName: zD.loadoutHeldPartItem,
            amount: DD.loadoutPartAmount,
            Qg: zD.loadoutHeldPartAmount
          }, DD.loadoutPartCurrency)
        }))]
      })
    }
    const xz = {
      loadoutStatFireRate: `${VD}:loadoutUnitPerMinute`,
      loadoutStatReload: `${VD}:loadoutUnitSeconds`,
      loadoutStatResupply: `${VD}:loadoutUnitSeconds`
    };

    function Tz(DD) {
      return "loadoutStatPotency" === DD.loadoutStatKind ? (0, qD.R)(DD.loadoutStatValue) : String(DD.loadoutStatValue)
    }

    function bz(DD) {
      var zD;
      let {
        option: wD
      } = DD;
      const {
        t: pD
      } = (0, AD.E)(), sD = wD.loadoutOptionTiers, KD = null === (zD = sD[0]) || void 0 === zD ? void 0 : zD.loadoutTierStats.map((DD => DD.loadoutStatKind));
      if (!KD || 0 === KD.length) return null;
      const rD = wD.loadoutOptionOwnedTier,
        LD = (DD, zD) => {
          var wD;
          return null === (wD = sD[DD]) || void 0 === wD ? void 0 : wD.loadoutTierStats.find((DD => DD.loadoutStatKind === zD))
        };
      return (0, XD.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, XD.jsx)("thead", {
          children: (0, XD.jsxs)("tr", {
            children: [(0, XD.jsx)("th", {}), sD.map(((DD, zD) => (0, XD.jsx)("th", {
              className: gD()({
                Current: zD + 1 === rD,
                Next: zD === rD
              }),
              children: pD(`${VD}:loadoutTier`, {
                tier: (0, qD.R)(zD + 1)
              })
            }, zD)))]
          })
        }), (0, XD.jsx)("tbody", {
          children: KD.map((DD => {
            const zD = xz[DD];
            return (0, XD.jsxs)("tr", {
              children: [(0, XD.jsxs)("th", {
                scope: "row",
                children: [pD(`${VD}:${DD}`), zD && (0, XD.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: pD(zD)
                })]
              }), sD.map(((zD, wD) => {
                const pD = LD(wD, DD),
                  sD = wD > 0 ? LD(wD - 1, DD) : void 0,
                  KD = pD && sD ? pD.loadoutStatValue - sD.loadoutStatValue : 0,
                  cD = Pz.has(DD) ? KD < 0 : KD > 0,
                  RD = wD === rD;
                return (0, XD.jsxs)("td", {
                  className: gD()({
                    Current: wD + 1 === rD,
                    Next: RD,
                    Gain: cD,
                    Owned: wD < rD
                  }),
                  children: [RD && cD && (0, XD.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: KD < 0 ? "\u25bc" : "\u25b2"
                  }), pD ? Tz(pD) : "-"]
                }, wD)
              }))]
            }, DD)
          }))
        })]
      })
    }

    function jz(DD) {
      let {
        view: zD,
        controller: wD,
        slot: pD,
        option: sD
      } = DD;
      const {
        t: KD
      } = (0, AD.E)(), rD = zD.loadout, LD = sD.loadoutOptionOwnedTier, cD = sD.loadoutOptionTiers.length, gD = pD.loadoutSlotEquippedId === sD.loadoutOptionId, RD = LD < cD ? sD.loadoutOptionTiers[LD].loadoutTierCost : null, UD = null !== RD && zz(rD, RD), fD = sD.loadoutOptionId, BD = Jz();
      return (0, XD.jsxs)(XD.Fragment, {
        children: [(0, XD.jsx)(Sz, {
          icon: sD.loadoutOptionIcon,
          name: sD.loadoutOptionName,
          status: 0 === LD ? KD(`${VD}:loadoutLocked`) : cD > 1 ? KD(`${VD}:loadoutTier`, {
            tier: (0, qD.R)(LD)
          }) : null,
          locked: 0 === LD,
          equipped: gD
        }), (0, XD.jsx)("p", {
          className: "BoardDescription",
          children: sD.loadoutOptionDescription
        }), (0, XD.jsx)(bz, {
          option: sD
        }), (0, XD.jsxs)("div", {
          ref: BD("act", fD),
          className: "BoardActions",
          children: [null !== RD && (0, XD.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, XD.jsx)(Cz, {
              cost: RD,
              loadout: rD
            }), (0, XD.jsx)(ID.o, {
              disabled: !UD || zD.pending,
              onClick: () => {
                wD.act(0 === LD ? "loadoutUnlock" : "loadoutUpgrade", fD)
              },
              children: 0 === LD ? KD(`${VD}:loadoutUnlock`) : KD(`${VD}:loadoutUpgrade`, {
                tier: (0, qD.R)(LD + 1)
              })
            })]
          }), null === RD && cD > 1 && (0, XD.jsx)("span", {
            className: "BoardHint",
            children: KD(`${VD}:loadoutMaxed`)
          }), LD > 0 && !gD && (0, XD.jsx)(ID.f, {
            disabled: zD.pending,
            onClick: () => {
              wD.act("loadoutEquip", fD)
            },
            children: KD(`${VD}:loadoutEquip`)
          })]
        })]
      })
    }

    function dz(DD) {
      let {
        view: zD,
        controller: wD,
        perk: pD
      } = DD;
      const {
        t: sD
      } = (0, AD.E)(), KD = zD.loadout, rD = sz(KD), LD = pD.loadoutPerkId, cD = Jz();
      return (0, XD.jsxs)(XD.Fragment, {
        children: [(0, XD.jsx)(Sz, {
          icon: pD.loadoutPerkIcon,
          name: pD.loadoutPerkName,
          status: pD.loadoutPerkOwned ? null : sD(`${VD}:loadoutLocked`),
          locked: !pD.loadoutPerkOwned,
          equipped: pD.loadoutPerkEquipped
        }), (0, XD.jsx)("p", {
          className: "BoardDescription",
          children: pD.loadoutPerkDescription
        }), (0, XD.jsxs)("div", {
          ref: cD("act", LD),
          className: "BoardActions",
          children: [!pD.loadoutPerkOwned && (0, XD.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, XD.jsx)(Cz, {
              cost: pD.loadoutPerkCost,
              loadout: KD
            }), (0, XD.jsx)(ID.o, {
              disabled: !zz(KD, pD.loadoutPerkCost) || zD.pending,
              onClick: () => {
                wD.act("loadoutUnlock", LD)
              },
              children: sD(`${VD}:loadoutUnlock`)
            })]
          }), pD.loadoutPerkOwned && !pD.loadoutPerkEquipped && (0, XD.jsx)(ID.f, {
            disabled: rD || zD.pending,
            onClick: () => {
              wD.act("loadoutEquip", LD)
            },
            children: sD(`${VD}:loadoutEquip`)
          }), pD.loadoutPerkOwned && !pD.loadoutPerkEquipped && rD && (0, XD.jsx)("span", {
            className: "BoardHint",
            children: sD(`${VD}:loadoutSocketsFullHint`)
          }), pD.loadoutPerkEquipped && (0, XD.jsx)(ID.Y, {
            disabled: zD.pending,
            onClick: () => {
              wD.act("loadoutUnequip", LD)
            },
            children: sD(`${VD}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Sz(DD) {
      let {
        icon: zD,
        name: wD,
        status: pD,
        locked: sD,
        equipped: KD
      } = DD;
      const {
        t: rD
      } = (0, AD.E)();
      return (0, XD.jsxs)(iD, {
        icon: (0, XD.jsx)(xD, {
          itemName: zD
        }),
        name: wD,
        children: [null !== pD && (0, XD.jsx)("span", {
          className: gD()("LoadoutStatusText", {
            Locked: sD
          }),
          children: pD
        }), KD && (0, XD.jsx)("span", {
          className: "BoardBadge",
          children: rD(`${VD}:loadoutEquippedBadge`)
        })]
      })
    }

    function iz(DD) {
      let {
        view: zD,
        controller: wD
      } = DD;
      const pD = zD.loadout;
      if ("loadoutPerks" === zD.slot) {
        const DD = pD.loadoutPerks.find((DD => DD.loadoutPerkId === zD.selectedId));
        return (0, XD.jsx)("section", {
          className: "BoardDetail",
          children: DD && (0, XD.jsx)(dz, {
            view: zD,
            controller: wD,
            perk: DD
          })
        })
      }
      const sD = pz(pD, zD.slot),
        KD = sD.loadoutSlotOptions.find((DD => DD.loadoutOptionId === zD.selectedId));
      return (0, XD.jsx)("section", {
        className: "BoardDetail",
        children: KD && (0, XD.jsx)(jz, {
          view: zD,
          controller: wD,
          slot: sD,
          option: KD
        })
      })
    }

    function lz(DD) {
      let {
        owned: zD,
        total: wD
      } = DD;
      return wD <= 1 ? null : (0, XD.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: wD
        }, ((DD, wD) => (0, XD.jsx)("span", {
          className: gD()("LoadoutPip", {
            Filled: wD < zD
          })
        }, wD)))
      })
    }

    function Wz(DD) {
      let {
        view: zD,
        controller: wD
      } = DD;
      const {
        t: pD
      } = (0, AD.E)(), sD = zD.loadout, KD = Jz();
      return (0, XD.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": pD(`${VD}:loadoutKit`),
        children: [sD.loadoutSlots.map((DD => {
          const sD = DD.loadoutSlotOptions.find((zD => zD.loadoutOptionId === DD.loadoutSlotEquippedId));
          return (0, XD.jsxs)("button", {
            ref: KD("section", DD.loadoutSlotKind),
            type: "button",
            className: gD()("LoadoutKitSlot", {
              Selected: zD.slot === DD.loadoutSlotKind
            }),
            onClick: () => {
              wD.selectSlot(DD.loadoutSlotKind)
            },
            children: [(0, XD.jsx)("span", {
              className: "LoadoutKitIcon",
              children: sD && (0, XD.jsx)(xD, {
                itemName: sD.loadoutOptionIcon
              })
            }), (0, XD.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, XD.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, XD.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: pD(nz[DD.loadoutSlotKind])
                }), sD && (0, XD.jsx)(lz, {
                  owned: sD.loadoutOptionOwnedTier,
                  total: sD.loadoutOptionTiers.length
                })]
              }), (0, XD.jsx)("span", {
                className: "LoadoutKitName",
                children: null === sD || void 0 === sD ? void 0 : sD.loadoutOptionName
              })]
            })]
          }, DD.loadoutSlotKind)
        })), (0, XD.jsx)(Nz, {
          view: zD,
          controller: wD
        })]
      })
    }

    function Nz(DD) {
      let {
        view: zD,
        controller: wD
      } = DD;
      const {
        t: pD
      } = (0, AD.E)(), sD = zD.loadout, KD = sD.loadoutPerks.filter((DD => DD.loadoutPerkEquipped)), rD = Jz();
      return (0, XD.jsxs)("button", {
        ref: rD("section", "loadoutPerks"),
        type: "button",
        className: gD()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === zD.slot
        }),
        onClick: () => {
          wD.selectSlot("loadoutPerks")
        },
        children: [(0, XD.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, XD.jsx)("span", {
            className: "LoadoutKitLabel",
            children: pD(nz.loadoutPerks)
          }), (0, XD.jsx)("span", {
            className: "LoadoutPerkCount",
            children: pD(`${VD}:loadoutPerkCount`, {
              equipped: String(KD.length),
              max: String(sD.loadoutMaxPerks)
            })
          })]
        }), (0, XD.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: sD.loadoutMaxPerks
          }, ((DD, zD) => {
            const wD = KD[zD];
            return (0, XD.jsxs)("span", {
              className: gD()("LoadoutSocket", {
                Filled: wD,
                Empty: !wD
              }),
              children: [(0, XD.jsx)("span", {
                className: "LoadoutSocketWell",
                children: wD && (0, XD.jsx)(xD, {
                  itemName: wD.loadoutPerkIcon
                })
              }), (0, XD.jsx)("span", {
                className: "LoadoutSocketName",
                children: wD ? wD.loadoutPerkName : pD(`${VD}:loadoutPerkSocketEmpty`)
              })]
            }, zD)
          }))
        })]
      })
    }

    function Zz(DD) {
      let {
        icon: zD,
        name: wD,
        selected: pD,
        equipped: sD,
        locked: KD,
        ownedTier: rD,
        tiers: LD,
        buttonRef: cD,
        onSelect: gD
      } = DD;
      const {
        t: RD
      } = (0, AD.E)();
      return (0, XD.jsxs)(SD, {
        icon: (0, XD.jsx)(xD, {
          itemName: zD
        }),
        name: wD,
        selected: pD,
        locked: KD,
        buttonRef: cD,
        onSelect: gD,
        children: [sD && (0, XD.jsx)("span", {
          className: "BoardBadge",
          children: RD(`${VD}:loadoutEquippedBadge`)
        }), KD && (0, XD.jsx)("span", {
          className: "BoardBadge Muted",
          children: RD(`${VD}:loadoutLocked`)
        }), !KD && (0, XD.jsx)(lz, {
          owned: rD,
          total: LD
        })]
      })
    }

    function yz(DD) {
      let {
        view: zD,
        controller: wD
      } = DD;
      const pD = zD.loadout,
        sD = Jz();
      if ("loadoutPerks" === zD.slot) return (0, XD.jsx)("div", {
        className: "BoardTiles",
        children: pD.loadoutPerks.map((DD => (0, XD.jsx)(Zz, {
          icon: DD.loadoutPerkIcon,
          name: DD.loadoutPerkName,
          selected: zD.selectedId === DD.loadoutPerkId,
          equipped: DD.loadoutPerkEquipped,
          locked: !DD.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: sD("HU", DD.loadoutPerkId),
          onSelect: () => {
            wD.select(DD.loadoutPerkId)
          }
        }, DD.loadoutPerkId)))
      });
      const KD = pz(pD, zD.slot);
      return (0, XD.jsx)("div", {
        className: "BoardTiles",
        children: KD.loadoutSlotOptions.map((DD => (0, XD.jsx)(Zz, {
          icon: DD.loadoutOptionIcon,
          name: DD.loadoutOptionName,
          selected: zD.selectedId === DD.loadoutOptionId,
          equipped: KD.loadoutSlotEquippedId === DD.loadoutOptionId,
          locked: 0 === DD.loadoutOptionOwnedTier,
          ownedTier: DD.loadoutOptionOwnedTier,
          tiers: DD.loadoutOptionTiers.length,
          buttonRef: sD("HU", DD.loadoutOptionId),
          onSelect: () => {
            wD.select(DD.loadoutOptionId)
          }
        }, DD.loadoutOptionId)))
      })
    }

    function kz(DD) {
      let {
        loadout: zD
      } = DD;
      return (0, XD.jsx)(lD, {
        coins: zD.loadoutCoins,
        children: zD.loadoutHeldParts.filter((DD => DD.loadoutHeldPartAmount > 0)).map((DD => (0, XD.jsx)(bD, {
          itemName: DD.loadoutHeldPartItem,
          amount: DD.loadoutHeldPartAmount
        }, DD.loadoutHeldPartCurrency)))
      })
    }

    function mz(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, RD.k)(Uz, zD.getSnapshot()),
        {
          t: pD
        } = (0, AD.E)();
      if (null === wD.loadout) return null;
      const sD = wD.notice;
      return (0, XD.jsx)(Xz, {
        view: wD,
        onDismiss: zD.dismiss,
        children: (0, XD.jsxs)(CD, {
          open: wD.open,
          onDismiss: zD.dismiss,
          title: pD(`${VD}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, XD.jsx)(kz, {
            loadout: wD.loadout
          }),
          statusRefused: null === sD || void 0 === sD ? void 0 : sD.loadoutNoticeRefused,
          status: (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: pD(`${VD}:loadoutRadioBadge`)
            }), null !== sD && pD(`${VD}:${sD.loadoutNoticeKey}`, {
              name: sD.loadoutNoticeName,
              tier: (0, qD.R)(sD.loadoutNoticeTier),
              max: String(wD.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, XD.jsx)(Wz, {
            view: wD,
            controller: zD
          }), (0, XD.jsx)(yz, {
            view: wD,
            controller: zD
          }), (0, XD.jsx)(iz, {
            view: wD,
            controller: zD
          })]
        })
      })
    }

    function ez(DD, zD, wD) {
      const pD = DD.locatorEntries.find((DD => DD.locatorEntryId === wD));
      if (!pD) return null;
      const sD = pD.locatorEntryName;
      if ("locatorDisarm" === zD) return pD.locatorEntryArmed ? {
        board: oz(DD, null),
        notice: az("locatorNoticeDisarmed", sD)
      } : null;
      if ("locatorArm" === zD) return pD.locatorEntryOwned && !pD.locatorEntryArmed ? {
        board: oz(DD, wD),
        notice: az("locatorNoticeArmed", sD)
      } : null;
      if (pD.locatorEntryOwned || DD.locatorCoins < pD.locatorEntryPrice) return null;
      const KD = oz({
        ...DD,
        locatorCoins: DD.locatorCoins - pD.locatorEntryPrice
      }, wD);
      return {
        board: {
          ...KD,
          locatorEntries: KD.locatorEntries.map((DD => DD.locatorEntryId === wD ? {
            ...DD,
            locatorEntryOwned: !0
          } : DD))
        },
        notice: az("locatorNoticeBought", sD)
      }
    }

    function oz(DD, zD) {
      return {
        ...DD,
        locatorEntries: DD.locatorEntries.map((DD => {
          const wD = DD.locatorEntryId === zD;
          return DD.locatorEntryArmed === wD ? DD : {
            ...DD,
            locatorEntryArmed: wD
          }
        }))
      }
    }

    function az(DD, zD) {
      return {
        locatorNoticeKey: DD,
        locatorNoticeRefused: !1,
        locatorNoticeName: zD
      }
    }
    const uz = "containmentLocatorView";
    class vz extends Dz {
      constructor(DD, zD, wD, pD) {
        super(DD, zD, wD, pD, "locator", ez), this.snapshot = this.buildSnapshot()
      }
      messageOpens(DD) {
        return DD.locatorMessageOpens
      }
      messageNotice(DD) {
        return DD.locatorNotice
      }
      openingSelection(DD) {
        var zD;
        const wD = DD.locatorEntries;
        return (null !== (zD = wD.find((DD => DD.locatorEntryArmed))) && void 0 !== zD ? zD : wD[0]).locatorEntryId
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
    const tz = {
        locatorContained: `${VD}:locatorFlavourContained`,
        locatorEncountered: `${VD}:locatorFlavourEncountered`,
        locatorUnseen: `${VD}:locatorFlavourUnseen`
      },
      Fz = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${VD}:locatorAttunedNormal`,
        codexHardOnly: `${VD}:locatorAttunedHard`
      };

    function Yz() {
      return (0, XD.jsx)(XD.Fragment, {
        children: Array.from({
          length: 5
        }, ((DD, zD) => (0, XD.jsx)("span", {
          className: "LocatorFly",
          children: (0, XD.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, zD)))
      })
    }

    function Hz(DD) {
      let {
        entry: zD
      } = DD;
      const {
        t: wD
      } = (0, AD.E)();
      return zD.locatorEntryArmed ? (0, XD.jsx)("span", {
        className: "BoardBadge Armed",
        children: wD(`${VD}:locatorArmedBadge`)
      }) : zD.locatorEntryOwned ? (0, XD.jsx)("span", {
        className: "BoardBadge",
        children: wD(`${VD}:locatorOwnedBadge`)
      }) : null
    }

    function qz(DD) {
      let {
        entry: zD,
        coins: wD,
        inTile: pD = !1
      } = DD;
      return (0, XD.jsx)(bD, {
        itemName: PD,
        amount: zD.locatorEntryPrice,
        Qg: wD,
        inTile: pD
      })
    }

    function Dw(DD) {
      let {
        view: zD,
        controller: wD,
        entry: pD
      } = DD;
      const {
        t: sD
      } = (0, AD.E)(), KD = pD.locatorEntryId, rD = zD.locators.locatorEntries.find((DD => DD.locatorEntryArmed && DD !== pD));
      return (0, XD.jsxs)("div", {
        className: "BoardActions",
        children: [pD.locatorEntryArmed && (0, XD.jsx)(ID.Y, {
          disabled: zD.pending,
          onClick: () => {
            wD.act("locatorDisarm", KD)
          },
          children: sD(`${VD}:locatorDisarm`)
        }), pD.locatorEntryOwned && !pD.locatorEntryArmed && (0, XD.jsx)(ID.f, {
          disabled: zD.pending,
          onClick: () => {
            wD.act("locatorArm", KD)
          },
          children: sD(`${VD}:locatorArm`)
        }), !pD.locatorEntryOwned && (0, XD.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, XD.jsx)(qz, {
            entry: pD,
            coins: zD.locators.locatorCoins
          }), (0, XD.jsx)(ID.o, {
            disabled: zD.locators.locatorCoins < pD.locatorEntryPrice || zD.pending,
            onClick: () => {
              wD.act("locatorBuy", KD)
            },
            children: sD(`${VD}:locatorBuy`)
          })]
        }), rD && !pD.locatorEntryArmed && (0, XD.jsx)("span", {
          className: "BoardHint",
          children: sD(`${VD}:locatorReplacesHint`, {
            name: rD.locatorEntryName
          })
        })]
      })
    }

    function zw(DD) {
      let {
        entry: zD
      } = DD;
      return "locatorUnseen" === zD.locatorEntryStanding ? (0, XD.jsx)(xD, {
        itemName: "Compass"
      }) : (0, XD.jsx)(TD, {
        anomalyId: zD.locatorEntryId,
        caught: "locatorContained" === zD.locatorEntryStanding
      })
    }

    function ww(DD) {
      let {
        view: zD,
        controller: wD,
        entry: pD
      } = DD;
      const {
        t: sD
      } = (0, AD.E)(), KD = Fz[pD.locatorEntryDifficulty];
      return (0, XD.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, XD.jsxs)("div", {
          className: gD()("LocatorLabel", {
            Armed: pD.locatorEntryArmed
          }),
          children: [(0, XD.jsx)(iD, {
            icon: (0, XD.jsx)(zw, {
              entry: pD
            }),
            name: sD(`${VD}:locatorName`, {
              name: pD.locatorEntryName
            }),
            children: (0, XD.jsx)(Hz, {
              entry: pD
            })
          }), (0, XD.jsx)("p", {
            className: "BoardDescription",
            children: sD(pD.locatorEntryArmed ? `${VD}:locatorFlavourArmed` : tz[pD.locatorEntryStanding])
          }), null !== KD && (0, XD.jsx)("p", {
            className: "LocatorAttuned",
            children: sD(KD)
          }), (0, XD.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: sD(`${VD}:locatorUsage`)
          })]
        }), (0, XD.jsx)(Dw, {
          view: zD,
          controller: wD,
          entry: pD
        })]
      })
    }

    function pw(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, RD.k)(uz, zD.getSnapshot()),
        {
          t: pD
        } = (0, AD.E)(),
        sD = wD.locators;
      if (null === sD) return null;
      const KD = sD.locatorEntries.find((DD => DD.locatorEntryId === wD.selectedId)),
        rD = wD.notice;
      return (0, XD.jsxs)(CD, {
        open: wD.open,
        onDismiss: zD.dismiss,
        title: pD(`${VD}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, XD.jsx)(Yz, {}),
        headerExtra: (0, XD.jsx)(lD, {
          coins: sD.locatorCoins
        }),
        statusRefused: null === rD || void 0 === rD ? void 0 : rD.locatorNoticeRefused,
        status: (0, XD.jsxs)(XD.Fragment, {
          children: [(0, XD.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: pD(`${VD}:locatorKeeperName`)
          }), null !== rD && pD(`${VD}:${rD.locatorNoticeKey}`, {
            name: rD.locatorNoticeName
          })]
        }),
        children: [(0, XD.jsx)("div", {
          className: "BoardTiles",
          children: sD.locatorEntries.map((DD => (0, XD.jsxs)(SD, {
            icon: (0, XD.jsx)(zw, {
              entry: DD
            }),
            name: DD.locatorEntryName,
            selected: DD === KD,
            locked: !1,
            className: gD()("LocatorTag", {
              Armed: DD.locatorEntryArmed
            }),
            onSelect: () => {
              zD.select(DD.locatorEntryId)
            },
            children: [(0, XD.jsx)(Hz, {
              entry: DD
            }), !DD.locatorEntryOwned && (0, XD.jsx)(qz, {
              entry: DD,
              coins: sD.locatorCoins,
              inTile: !0
            })]
          }, DD.locatorEntryId)))
        }), (0, XD.jsx)(ww, {
          view: wD,
          controller: zD,
          entry: KD
        })]
      })
    }

    function sw(DD) {
      let {
        loadout: zD,
        codex: wD,
        locator: pD
      } = DD;
      return (0, XD.jsxs)(XD.Fragment, {
        children: [(0, XD.jsx)(mz, {
          controller: zD
        }), (0, XD.jsx)(HD, {
          controller: wD
        }), (0, XD.jsx)(pw, {
          controller: pD
        })]
      })
    }
    var Kw = wD(38533);
    class rw {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = DD, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Kw.d({
          spacingMs: 0,
          now: zD
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(DD, zD) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, zD(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(DD), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
    }
    var Lw = wD(38528);
    const gw = new Map([
      ["npc_general", Bz],
      ["npc_tentacle_guy", Lw]
    ]);

    function Rw(DD) {
      const zD = gw.get(DD);
      if (void 0 === zD) return null;
      const wD = document.createElement("img");
      return wD.src = zD, wD.alt = "", wD.draggable = !1, wD.style.imageRendering = "pixelated", wD
    }
    const Aw = function() {
      let DD, zD = !1,
        wD = null,
        cD = null;
      const gD = [],
        RD = DD => {
          for (const zD of gD) zD !== DD && zD.close();
          (0, LD.r)()
        },
        AD = DD => {
          DD && (0, LD.i)()
        },
        UD = new rw((zD => {
          DD.sendCommand(zD)
        })),
        fD = new fz((DD => {
          rD.l.KG(Uz, DD, !0)
        }), RD, AD, UD),
        ID = new ZD((DD => {
          rD.l.KG(ND, DD, !0)
        }), RD, AD),
        BD = new vz((DD => {
          rD.l.KG(uz, DD, !0)
        }), RD, AD, UD);
      gD.push(fD, ID, BD);
      return {
        onCreate: zD => {
          DD = zD, wD = (0, LD.w)(null, {
            content: (0, pD.createElement)(sw, {
              loadout: fD,
              codex: ID,
              locator: BD
            }),
            onClose: () => {
              for (const DD of gD) DD.close()
            }
          }), cD = (0, KD.h)(Rw)
        },
        onReceivedMessageFromServer: (DD, zD) => {
          "containmentLoadout" === DD ? fD.QI(zD) : "containmentLoadoutClose" === DD ? fD.isOpen() && (fD.close(), (0, LD.g)()) : "containmentCodex" === DD ? ID.QI(zD) : "containmentLocator" === DD && BD.QI(zD)
        },
        DU: () => {
          zD || sD.e.get("loadingOverlayVisible") || (zD = !0, DD.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var DD, zD;
          null === (DD = wD) || void 0 === DD || DD(), wD = null, null === (zD = cD) || void 0 === zD || zD(), cD = null;
          for (const wD of gD) wD.dispose();
          UD.dispose()
        }
      }
    }
  },
  36845: (DD, zD, wD) => {
    wD.d(zD, {
      C: () => WD,
      G: () => SD,
      K: () => ND,
      b: () => cD,
      f: () => xD,
      h: () => LD,
      j: () => dD,
      m: () => PD,
      n: () => ED,
      p: () => jD,
      t: () => bD,
      v: () => VD,
      w: () => iD,
      y: () => lD
    });
    var pD = wD(35);
    const sD = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      KD = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      rD = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      LD = KD.filter((DD => "docsButton" !== DD)),
      cD = rD.filter((DD => "aiHelperButton" !== DD)),
      gD = "codeEditorTutorials",
      RD = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      AD = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let UD = null,
      fD = null;
    const ID = new Set,
      BD = new Set;
    let GD = null;
    const hD = new Set,
      nD = new Set;

    function MD() {
      nD.forEach((DD => {
        DD()
      }))
    }

    function OD() {
      if (!UD) {
        const DD = pD.h.getItem(gD);
        UD = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof DD && null !== DD ? DD : {}
        }
      }
      return UD
    }

    function JD(DD) {
      const zD = OD();
      zD[DD] || (UD = {
        ...zD,
        [DD]: !0
      }, pD.h.setItem(gD, UD))
    }

    function ED(DD) {
      return "docsOverview" === DD ? KD : "aiHelperOverview" === DD ? rD : fD ? sD[fD] : []
    }

    function QD(DD) {
      return ("worldCodeButton" !== DD || !OD().worldCodeIntroShown) && !hD.has(DD)
    }

    function XD(DD) {
      var zD;
      return (null === (zD = GD) || void 0 === zD ? void 0 : zD.name) === DD ? GD.stepsDone : ID
    }

    function VD(DD, zD) {
      if (! function(DD) {
          return GD ? GD.name === DD : "welcome" === DD
        }(DD) || !QD(zD) || XD(DD).has(zD)) return !1;
      if (GD) return !0;
      const wD = RD[zD];
      return wD ? !OD()[wD] || BD.has(zD) : !OD()[AD[DD]]
    }

    function PD(DD) {
      var zD;
      return null !== (zD = ED(DD).find((zD => VD(DD, zD)))) && void 0 !== zD ? zD : null
    }

    function CD(DD) {
      var zD;
      JD(AD[DD]), (null === (zD = GD) || void 0 === zD ? void 0 : zD.name) === DD && (GD = null)
    }

    function xD(DD) {
      const zD = (GD ? [GD.name] : ["welcome", "docsOverview"]).find((zD => PD(zD) === DD));
      if (!zD) return;
      XD(zD).add(DD);
      const wD = RD[DD];
      wD && (JD(wD), GD || BD.add(DD)), null === PD(zD) && CD(zD), MD()
    }

    function TD(DD, zD) {
      const wD = ED(DD),
        pD = XD(DD);
      for (let sD = wD.indexOf(zD) - 1; sD >= 0; sD--)
        if (pD.has(wD[sD]) && QD(wD[sD])) return wD[sD];
      return null
    }

    function bD(DD, zD) {
      return null !== TD(DD, zD)
    }

    function jD(DD, zD) {
      const wD = TD(DD, zD);
      wD && (XD(DD).delete(wD), MD())
    }

    function dD(DD) {
      CD(DD), "welcome" === DD && ED("welcome").forEach((DD => {
        const zD = RD[DD];
        zD && JD(zD)
      })), MD()
    }

    function SD(DD) {
      GD = {
        name: DD,
        stepsDone: new Set
      }, MD()
    }

    function iD() {
      (GD || 0 !== ID.size || 0 !== BD.size) && (GD = null, ID.clear(), BD.clear(), MD())
    }

    function lD(DD, zD) {
      const wD = zD ? DD : fD === DD ? null : fD;
      wD !== fD && (fD = wD, MD())
    }

    function WD(DD, zD) {
      hD.has(DD) === zD && (zD ? hD.delete(DD) : hD.add(DD), MD())
    }

    function ND(DD) {
      return nD.add(DD), () => {
        nD.delete(DD)
      }
    }
  },
  39267: (DD, zD, wD) => {
    var pD = {
      "./breach-zero-uncaught.webp": 39275,
      "./breach-zero.webp": 39278,
      "./brood-father-uncaught.webp": 39283,
      "./brood-father.webp": 39288,
      "./carousel-uncaught.webp": 39294,
      "./carousel.webp": 39298,
      "./deadlock-uncaught.webp": 39304,
      "./deadlock.webp": 39312,
      "./frost-revenant-uncaught.webp": 39316,
      "./frost-revenant.webp": 39325,
      "./hollow-choir-uncaught.webp": 39331,
      "./hollow-choir.webp": 39333,
      "./magma-warden-uncaught.webp": 39337,
      "./magma-warden.webp": 39344,
      "./patient-zero-uncaught.webp": 39349,
      "./patient-zero.webp": 39353,
      "./siege-engine-uncaught.webp": 39355,
      "./siege-engine.webp": 39362,
      "./warp-stalker-uncaught.webp": 39371,
      "./warp-stalker.webp": 39374
    };

    function sD(DD) {
      var zD = KD(DD);
      return wD(zD)
    }

    function KD(DD) {
      if (!wD.o(pD, DD)) {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }
      return pD[DD]
    }
    sD.keys = function() {
      return Object.keys(pD)
    }, sD.resolve = KD, DD.exports = sD, sD.id = 39267
  },
  39275: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39278: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39283: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39288: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39294: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39298: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39304: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39312: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39316: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39325: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39331: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39333: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39337: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39344: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39349: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39353: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39355: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39362: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39371: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39374: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38528: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);