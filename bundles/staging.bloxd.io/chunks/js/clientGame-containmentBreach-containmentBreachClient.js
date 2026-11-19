export const id = 14;
export const ids = [14];
export const modules = {
  36235: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => PD,
      h: () => nD,
      l: () => OD,
      n: () => tD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(62),
      bD = cD(1365),
      QD = cD(1442),
      wD = cD(1356),
      SD = cD(1280),
      BD = cD(1192),
      yD = cD(36240),
      MD = cD(1093);

    function tD(DD) {
      const [CD, cD] = (0, iD.useState)((() => (0, yD.m)(DD)));
      return (0, iD.useEffect)((() => (cD((0, yD.m)(DD)), (0, yD.J)((() => {
        cD((0, yD.m)(DD))
      })))), [DD]), CD
    }

    function ZD(DD, CD) {
      "function" === typeof DD ? DD(CD) : DD && (DD.current = CD)
    }

    function oD(DD) {
      let {
        tutorial: CD,
        step: cD,
        enabled: ID = !0
      } = DD;
      const pD = tD(CD);
      return ID && pD === cD
    }

    function vD(DD, CD) {
      const cD = (0, yD.n)(DD),
        ID = cD.indexOf(CD);
      return !cD.slice(ID + 1).some((CD => (0, yD.u)(DD, CD)))
    }

    function ND(DD, CD, cD, ID) {
      let {
        tutorial: pD,
        step: iD,
        waitForClick: fD = !1,
        onPrevious: bD
      } = DD;
      const QD = CD && (0, yD.s)(pD, iD),
        wD = CD && !vD(pD, iD),
        BD = fD ? ID : cD;
      let MD = null;
      QD ? MD = () => {
        null === bD || void 0 === bD || bD(), (0, yD.o)(pD, iD)
      } : wD && (MD = () => {
        (0, yD.l)(pD)
      }), (0, SD.t)("popup", null !== BD && void 0 !== BD ? BD : cD, MD, CD && null !== BD, null, QD ? void 0 : "controller:menusSkipTutorial")
    }

    function gD(DD) {
      let {
        tutorial: CD,
        step: cD,
        text: ID,
        waitForClick: pD = !1,
        onPrevious: iD
      } = DD;
      const {
        t: fD
      } = (0, BD.F)(), bD = vD(CD, cD);
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)("div", {
          className: "TutorialStepText",
          children: ID
        }), (0, MD.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, yD.s)(CD, cD) && (0, MD.jsx)(QD.k, {
            className: "TutorialStepButton",
            onClick: () => {
              null === iD || void 0 === iD || iD(), (0, yD.o)(CD, cD)
            },
            children: fD("tutorial:back")
          }), !pD && (0, MD.jsx)(QD.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, yD.f)(cD)
            },
            padDefaultFocus: !0,
            children: fD(bD ? "tutorial:done" : "tutorial:next")
          }), !bD && (0, MD.jsx)(QD.k, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, yD.l)(CD)
            },
            children: fD("tutorial:skip")
          })]
        })]
      })
    }
    const XD = 6;

    function mD(DD) {
      let {
        rect: CD,
        margin: cD
      } = DD;
      const ID = Math.max(0, CD.top - cD),
        pD = CD.bottom + cD,
        iD = Math.max(0, CD.left - cD),
        fD = CD.right + cD;
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: ID
          }
        }), (0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pD,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: ID,
            left: 0,
            width: iD,
            height: pD - ID
          }
        }), (0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: ID,
            left: fD,
            right: 0,
            height: pD - ID
          }
        })]
      })
    }

    function nD(DD) {
      let {
        target: CD,
        placement: cD,
        boxRef: ID,
        className: QD,
        spotlightMargin: SD = XD,
        children: BD
      } = DD;
      const {
        getArrowProps: yD,
        getTooltipProps: tD,
        setTooltipRef: ZD,
        setTriggerRef: oD
      } = (0, bD.c)({
        placement: cD,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, SD]
      });
      (0, iD.useLayoutEffect)((() => {
        oD(CD)
      }), [CD, oD]);
      const vD = function(DD, CD) {
        const [cD, ID] = (0, iD.useState)(null);
        return (0, iD.useEffect)((() => {
          if (!CD || !DD) return void ID(null);
          let cD = 0,
            pD = null;
          const iD = () => {
            const CD = DD.getBoundingClientRect();
            pD && CD.left === pD.left && CD.top === pD.top && CD.width === pD.width && CD.height === pD.height || (pD = CD, ID(CD)), cD = requestAnimationFrame(iD)
          };
          return iD(), () => {
            cancelAnimationFrame(cD)
          }
        }), [DD, CD]), cD
      }(CD, !0);
      (0, iD.useEffect)((() => {
        null === CD || void 0 === CD || CD.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [CD]);
      const ND = (0, iD.useCallback)((DD => {
        ZD(DD), ID && (ID.current = DD)
      }), [ZD, ID]);
      return (0, fD.createPortal)((0, MD.jsxs)(MD.Fragment, {
        children: [vD && (0, MD.jsx)(mD, {
          rect: vD,
          margin: SD
        }), (0, MD.jsxs)("div", {
          ref: ND,
          ...tD({
            className: pD()("tooltip-container SmallTextLight TutorialStep", QD)
          }),
          children: [BD, (0, MD.jsx)("div", {
            ...yD({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, wD.g)())
    }
    const OD = (0, iD.forwardRef)((function(DD, CD) {
      let {
        placement: cD = "right",
        children: ID,
        ...pD
      } = DD;
      const fD = oD(pD),
        bD = (0, iD.useRef)(null),
        QD = (0, iD.useRef)(null);
      ND(pD, fD, bD, QD);
      const [wD, SD] = (0, iD.useState)(null), BD = ID.ref, yD = (0, iD.useCallback)((DD => {
        QD.current = DD, SD(DD), ZD(CD, DD), ZD(BD, DD)
      }), [CD, BD]);
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, iD.cloneElement)(ID, {
          ref: yD
        }), fD && (0, MD.jsx)(nD, {
          target: wD,
          placement: cD,
          boxRef: bD,
          children: (0, MD.jsx)(gD, {
            ...pD
          })
        })]
      })
    }));

    function PD(DD) {
      const CD = oD(DD),
        cD = (0, iD.useRef)(null);
      return ND(DD, CD, cD, null), CD ? (0, fD.createPortal)((0, MD.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, MD.jsx)("div", {
          ref: cD,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, MD.jsx)(gD, {
            ...DD
          })
        })
      }), (0, wD.g)()) : null
    }
  },
  37919: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    const ID = 4,
      pD = 12e3,
      iD = 1e3;
    class fD {
      constructor() {
        let {
          limit: DD = ID,
          windowMs: CD = pD,
          spacingMs: cD = iD,
          now: fD = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = DD, this.windowMs = CD, this.spacingMs = cD, this.now = fD
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
          CD = this.lastSentAt + this.spacingMs,
          cD = Math.min(CD > DD ? CD : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        cD !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, cD - DD)))
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  37899: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      constructor(DD, CD, cD) {
        this.Uo = DD, this.beforeOpen = CD, this.afterClose = cD, this.open = !1, this.Lt = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Lt && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.Lt = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Lt || (this.snapshot = this.buildSnapshot(), this.Uo(this.snapshot))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  38598: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => Sc
    });
    var ID = cD(53);
    var pD = cD(16),
      iD = cD(1886),
      fD = cD(20),
      bD = cD(35996),
      QD = cD(1049),
      wD = cD.n(QD),
      SD = cD(1440),
      BD = cD(1192),
      yD = cD(4325),
      MD = cD(1331),
      tD = cD(1442),
      ZD = cD(1893),
      oD = cD(1356),
      vD = cD(1872),
      ND = cD(1954),
      gD = cD(208);
    const XD = cD(38601),
      mD = Object.fromEntries(XD.keys().map((DD => [DD.replace(/^\.\/(.*)\.webp$/, "$1"), XD(DD)]))),
      nD = new Set;

    function OD(DD, CD) {
      const cD = CD ? DD : `${DD}-uncaught`,
        ID = (0, gD.c)(mD, cD);
      return void 0 !== ID || nD.has(cD) || (nD.add(cD), console.warn(`Containment Breach has no mugshot ${cD}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), ID
    }
    var PD = cD(1093);
    const HD = "containmentBreach",
      UD = "Gold Coin";

    function xD(DD) {
      let {
        open: CD,
        onDismiss: cD,
        title: ID,
        className: pD,
        decor: iD,
        headerExtra: fD,
        status: bD,
        statusRefused: QD = !1,
        children: SD
      } = DD;
      const BD = `${pD}Title`;
      return (0, PD.jsx)(yD.e, {
        show: CD,
        close: cD,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, PD.jsxs)("section", {
          className: wD()("ContainmentBoardPanel", pD),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": BD,
          children: [iD && (0, PD.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: iD
          }), (0, PD.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, PD.jsx)("h2", {
              id: BD,
              className: "VisuallyHidden",
              children: ID
            }), fD, (0, PD.jsx)(tD.l, {
              onClick: cD
            })]
          }), (0, PD.jsx)("div", {
            className: "BoardBody",
            children: SD
          }), void 0 !== bD && (0, PD.jsx)("footer", {
            className: wD()("BoardStatus", {
              Refused: QD
            }),
            children: bD
          })]
        })
      })
    }

    function qD(DD) {
      let {
        itemName: CD
      } = DD;
      return (0, PD.jsx)(ZD.d, {
        itemName: CD,
        amount: 0
      })
    }

    function JD(DD) {
      let {
        anomalyId: CD,
        caught: cD
      } = DD;
      const pD = (0, ID.useRef)(null);
      return (0, MD.b)(pD, !cD), (0, PD.jsx)("span", {
        ref: pD,
        className: wD()("BoardMugshot", {
          Uncaught: !cD
        }),
        children: (0, PD.jsx)("img", {
          src: OD(CD, cD),
          alt: "",
          draggable: !1
        })
      })
    }

    function KD(DD) {
      let {
        itemName: CD,
        amount: cD,
        Lb: ID,
        inTile: pD = !1
      } = DD;
      return (0, PD.jsx)(oD.f, {
        delayShow: 200,
        hoverOnly: pD,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, PD.jsx)(VD, {
          itemName: CD,
          amount: cD,
          Lb: ID
        }),
        children: (0, PD.jsxs)("span", {
          className: wD()("BoardChip", {
            Short: void 0 !== ID && ID < cD
          }),
          children: [(0, PD.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, PD.jsx)(qD, {
              itemName: CD
            })
          }), cD.toLocaleString()]
        })
      })
    }
    const aD = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function VD(DD) {
      var CD;
      let {
        itemName: cD,
        amount: ID,
        Lb: pD
      } = DD;
      const {
        t: iD
      } = (0, BD.F)(), fD = (0, ND.g)("itemInfo", (DD => DD[cD])), {
        lore: bD,
        droppedBy: QD
      } = function(DD) {
        if ("string" !== typeof DD) return {
          lore: DD,
          droppedBy: null
        };
        const CD = aD.exec(DD);
        return null === CD ? {
          lore: DD,
          droppedBy: null
        } : {
          lore: "" === CD[1] ? void 0 : CD[1],
          droppedBy: CD[2]
        }
      }(null === fD || void 0 === fD ? void 0 : fD.description);
      return (0, PD.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, PD.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, PD.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, PD.jsx)(qD, {
              itemName: cD
            })
          }), (0, PD.jsx)(vD.c, {
            text: null !== (CD = null === fD || void 0 === fD ? void 0 : fD.displayName) && void 0 !== CD ? CD : cD,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== bD || null !== QD) && (0, PD.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== bD && (0, PD.jsx)(vD.c, {
            text: bD,
            className: "BoardChipTooltipDescription"
          }), null !== QD && (0, PD.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, PD.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: iD(`${HD}:chipDroppedBy`)
            }), QD]
          })]
        }), void 0 !== pD && (0, PD.jsxs)("div", {
          className: wD()("BoardChipTooltipHeld", {
            Short: pD < ID
          }),
          children: [(0, PD.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: iD(`${HD}:chipYouHave`)
          }), (0, PD.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, PD.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: pD.toLocaleString()
            }), ` / ${ID.toLocaleString()}`]
          }), (0, PD.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, PD.jsx)("span", {
              style: {
                width: (ID > 0 ? 100 * Math.min(1, pD / ID) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function zD(DD) {
      let {
        icon: CD,
        name: cD,
        selected: ID,
        locked: pD,
        className: iD,
        buttonRef: fD,
        onSelect: bD,
        children: QD
      } = DD;
      return (0, PD.jsxs)("button", {
        ref: fD,
        type: "button",
        className: wD()("BoardTile", iD, {
          Selected: ID,
          Locked: pD
        }),
        onClick: bD,
        children: [(0, PD.jsx)("span", {
          className: "BoardTileIcon",
          children: CD
        }), (0, PD.jsx)("span", {
          className: "BoardTileName",
          children: cD
        }), QD]
      })
    }

    function jD(DD) {
      let {
        icon: CD,
        name: cD,
        children: ID
      } = DD;
      return (0, PD.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, PD.jsx)("span", {
          className: "BoardDetailIcon",
          children: CD
        }), (0, PD.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, PD.jsx)("h3", {
            children: cD
          }), (0, PD.jsx)("span", {
            className: "BoardDetailStatus",
            children: ID
          })]
        })]
      })
    }

    function lD(DD) {
      let {
        coins: CD,
        children: cD
      } = DD;
      return (0, PD.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, PD.jsx)(KD, {
          itemName: UD,
          amount: CD
        }), cD]
      })
    }
    var LD = cD(37899);
    const TD = "containmentCodexView";
    class GD extends LD.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = DD => {
          this.selectedId = DD, this.emit()
        }
      }
      kt(DD) {
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
    const RD = {
        codexAnyDifficulty: `${HD}:codexNeedsAny`,
        codexNormalOnly: `${HD}:codexNeedsNormal`,
        codexHardOnly: `${HD}:codexNeedsHard`
      },
      kD = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      dD = {
        codexContained: `${HD}:codexContainedBadge`,
        codexEncountered: `${HD}:codexEncounteredBadge`,
        codexUnidentified: `${HD}:codexUnidentifiedBadge`
      },
      YD = ["94%", "81%", "88%", "46%", "72%"];

    function WD(DD) {
      let {
        entry: CD
      } = DD;
      const {
        t: cD
      } = (0, BD.F)();
      return (0, PD.jsx)("span", {
        className: wD()("BoardBadge", kD[CD.codexEntryState]),
        children: cD(dD[CD.codexEntryState])
      })
    }

    function sD(DD) {
      const {
        t: CD
      } = (0, BD.F)();
      return "codexUnidentified" === DD.codexEntryState ? CD(`${HD}:codexUnidentifiedName`) : DD.codexEntryName
    }

    function ED(DD) {
      let {
        entry: CD
      } = DD;
      return "codexUnidentified" === CD.codexEntryState ? (0, PD.jsx)(qD, {
        itemName: "Book"
      }) : (0, PD.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, PD.jsx)(JD, {
          anomalyId: CD.codexEntryId,
          caught: "codexContained" === CD.codexEntryState
        }), (0, PD.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function eD(DD) {
      let {
        entry: CD,
        selected: cD,
        onSelect: ID
      } = DD;
      const pD = "codexUnidentified" === CD.codexEntryState;
      return (0, PD.jsxs)(zD, {
        icon: (0, PD.jsx)(ED, {
          entry: CD
        }),
        name: sD(CD),
        selected: cD,
        locked: pD,
        className: wD()("CodexFolder", kD[CD.codexEntryState]),
        onSelect: () => {
          ID(CD.codexEntryId)
        },
        children: [!pD && (0, PD.jsx)(WD, {
          entry: CD
        }), pD && (0, PD.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function uD(DD) {
      let {
        count: CD
      } = DD;
      const cD = [];
      for (let ID = Math.min(CD, 25); ID > 0; ID -= 5) cD.push(Math.min(ID, 5));
      return (0, PD.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: cD.map(((DD, CD) => (0, PD.jsx)("span", {
          className: wD()("CodexTallyGroup", {
            Gate: 5 === DD
          }),
          children: Array.from({
            length: Math.min(DD, 4)
          }, ((DD, CD) => (0, PD.jsx)("span", {
            className: "CodexTallyMark"
          }, CD)))
        }, CD)))
      })
    }

    function hD(DD) {
      let {
        contained: CD,
        total: cD
      } = DD;
      const {
        t: ID
      } = (0, BD.F)();
      return (0, PD.jsxs)("div", {
        className: "CodexProgress",
        children: [ID(`${HD}:codexProgress`, {
          contained: String(CD),
          total: String(cD)
        }), (0, PD.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, PD.jsx)("span", {
            style: {
              width: CD / cD * 100 + "%"
            }
          })
        })]
      })
    }

    function rD(DD) {
      let {
        entry: CD,
        fileNumber: cD
      } = DD;
      const {
        t: ID
      } = (0, BD.F)(), pD = "codexContained" === CD.codexEntryState;
      return (0, PD.jsx)("section", {
        className: "BoardDetail",
        children: (0, PD.jsxs)("article", {
          className: wD()("CodexDossier", kD[CD.codexEntryState]),
          children: [(0, PD.jsx)("span", {
            className: "CodexFileNumber",
            children: ID(`${HD}:codexFileNumber`, {
              number: String(cD).padStart(3, "0")
            })
          }), (0, PD.jsx)(jD, {
            icon: (0, PD.jsx)(ED, {
              entry: CD
            }),
            name: sD(CD),
            children: (0, PD.jsx)(WD, {
              entry: CD
            })
          }), pD && (0, PD.jsxs)(PD.Fragment, {
            children: [(0, PD.jsx)("p", {
              className: "BoardDescription",
              children: CD.codexEntryLore
            }), (0, PD.jsxs)("p", {
              className: "CodexTally",
              children: [ID(`${HD}:codexContainments`, {
                count: String(CD.codexEntryContainedCount)
              }), (0, PD.jsx)(uD, {
                count: CD.codexEntryContainedCount
              })]
            }), (0, PD.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: ID(`${HD}:codexContainedBadge`)
            })]
          }), !pD && (0, PD.jsxs)(PD.Fragment, {
            children: [(0, PD.jsxs)("div", {
              className: "CodexRedaction",
              children: [YD.map((DD => (0, PD.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: DD
                }
              }, DD))), (0, PD.jsx)("p", {
                className: "CodexRedacted",
                children: ID(`${HD}:codexRedacted`)
              })]
            }), "" !== CD.codexEntryHint && (0, PD.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, PD.jsx)("h4", {
                children: ID(`${HD}:codexHintLabel`)
              }), (0, PD.jsx)("p", {
                children: CD.codexEntryHint
              })]
            }), (0, PD.jsx)("p", {
              className: "CodexClearance",
              children: ID(RD[CD.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function AD(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, SD.g)(TD, CD.getSnapshot()),
        {
          t: ID
        } = (0, BD.F)();
      if (0 === cD.entries.length) return null;
      const pD = cD.entries.find((DD => DD.codexEntryId === cD.selectedId)),
        iD = cD.entries.filter((DD => "codexContained" === DD.codexEntryState)).length,
        fD = cD.entries.map((DD => DD.codexEntryId)).sort().indexOf(pD.codexEntryId) + 1;
      return (0, PD.jsxs)(xD, {
        open: cD.open,
        onDismiss: CD.dismiss,
        title: ID(`${HD}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, PD.jsx)(hD, {
          contained: iD,
          total: cD.entries.length
        }),
        children: [(0, PD.jsx)("div", {
          className: "BoardTiles",
          children: cD.entries.map((DD => (0, PD.jsx)(eD, {
            entry: DD,
            selected: DD === pD,
            onSelect: CD.select
          }, DD.codexEntryId)))
        }), (0, PD.jsx)(rD, {
          entry: pD,
          fileNumber: fD
        })]
      })
    }
    var FD = cD(326);
    class DC extends LD.d {
      constructor(DD, CD, cD, ID, pD, iD) {
        super(DD, CD, cD), this.pacer = ID, this.command = pD, this.predict = iD, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = DD => {
          this.selectedId = DD, this.emit()
        }, this.act = (DD, CD) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${DD} ${CD}`, this.rollBack)) return;
          const cD = this.predict(this.board, DD, CD);
          null !== cD && (this.board = cD.board, this.notice = cD.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = ID.subscribe((() => {
          this.emit()
        }))
      }
      kt(DD) {
        const CD = this.messageOpens(DD);
        if (CD && this.open) return this.board === this.confirmed && (this.board = DD), this.confirmed = DD, void this.emit();
        if (this.board = DD, this.confirmed = DD, this.pacer.onReply(), CD) return this.notice = null, this.selectedId = this.openingSelection(DD), void this.show();
        const cD = this.messageNotice(DD);
        null !== cD && (this.notice = cD), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function CC(DD, CD) {
      return DD.loadoutCoins >= CD.loadoutCostCoins && CD.loadoutCostParts.every((CD => function(DD, CD) {
        return cC(DD, CD).loadoutHeldPartAmount
      }(DD, CD.loadoutPartCurrency) >= CD.loadoutPartAmount))
    }

    function cC(DD, CD) {
      return DD.loadoutHeldParts.find((DD => DD.loadoutHeldPartCurrency === CD))
    }

    function IC(DD, CD) {
      return DD.loadoutSlots.find((DD => DD.loadoutSlotKind === CD))
    }

    function pC(DD) {
      return DD.loadoutPerks.filter((DD => DD.loadoutPerkEquipped)).length >= DD.loadoutMaxPerks
    }

    function iC(DD, CD, cD) {
      for (const pD of DD.loadoutSlots) {
        const ID = pD.loadoutSlotOptions.find((DD => DD.loadoutOptionId === cD));
        if (ID) return "loadoutArmour" === pD.loadoutSlotKind ? bC(DD, pD, ID, CD) : fC(DD, pD, ID, CD)
      }
      const ID = DD.loadoutPerks.find((DD => DD.loadoutPerkId === cD));
      return ID ? function(DD, CD, cD) {
        const ID = CD.loadoutPerkOwned,
          pD = CD.loadoutPerkEquipped,
          iD = CD.loadoutPerkName,
          fD = pC(DD);
        if ("loadoutUnlock" === cD) {
          if (ID || !CC(DD, CD.loadoutPerkCost)) return null;
          const cD = {
            ...CD,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !fD
          };
          return {
            board: wC(SC(DD, CD.loadoutPerkCost), cD),
            notice: BC(fD ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", iD)
          }
        }
        if ("loadoutUpgrade" === cD || !ID || "loadoutEquip" === cD === pD || !pD && fD) return null;
        return {
          board: wC(DD, {
            ...CD,
            loadoutPerkEquipped: !pD
          }),
          notice: BC(pD ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", iD)
        }
      }(DD, ID, CD) : null
    }

    function fC(DD, CD, cD, ID) {
      const pD = cD.loadoutOptionOwnedTier,
        iD = cD.loadoutOptionName;
      if ("loadoutEquip" === ID) return 0 === pD ? null : {
        board: QC(DD, CD, cD.loadoutOptionId, null),
        notice: BC("loadoutNoticeEquipped", iD)
      };
      const fD = "loadoutUnlock" === ID;
      if (fD && 0 !== pD || "loadoutUpgrade" === ID && (0 === pD || pD >= cD.loadoutOptionTiers.length) || "loadoutUnequip" === ID) return null;
      const bD = cD.loadoutOptionTiers[pD].loadoutTierCost;
      if (!CC(DD, bD)) return null;
      const QD = {
          ...cD,
          loadoutOptionOwnedTier: pD + 1
        },
        wD = fD ? cD.loadoutOptionId : CD.loadoutSlotEquippedId;
      return {
        board: QC(SC(DD, bD), CD, wD, QD),
        notice: fD ? BC("loadoutNoticeUnlocked", iD) : BC("loadoutNoticeUpgraded", iD, pD + 1)
      }
    }

    function bC(DD, CD, cD, ID) {
      const pD = cD.loadoutOptionOwnedTier > 0,
        iD = cD.loadoutOptionName;
      if ("loadoutEquip" === ID && pD) return {
        board: QC(DD, CD, cD.loadoutOptionId, null),
        notice: BC("loadoutNoticeEquipped", iD)
      };
      const fD = cD.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== ID || pD || !CC(DD, fD) ? null : {
        board: QC(SC(DD, fD), CD, cD.loadoutOptionId, {
          ...cD,
          loadoutOptionOwnedTier: 1
        }),
        notice: BC("loadoutNoticeUnlocked", iD)
      }
    }

    function QC(DD, CD, cD, ID) {
      const pD = {
        ...CD,
        loadoutSlotEquippedId: cD,
        loadoutSlotOptions: CD.loadoutSlotOptions.map((DD => null !== ID && DD.loadoutOptionId === ID.loadoutOptionId ? ID : DD))
      };
      return {
        ...DD,
        loadoutSlots: DD.loadoutSlots.map((DD => DD === CD ? pD : DD))
      }
    }

    function wC(DD, CD) {
      return {
        ...DD,
        loadoutPerks: DD.loadoutPerks.map((DD => DD.loadoutPerkId === CD.loadoutPerkId ? CD : DD))
      }
    }

    function SC(DD, CD) {
      return {
        ...DD,
        loadoutCoins: DD.loadoutCoins - CD.loadoutCostCoins,
        loadoutHeldParts: DD.loadoutHeldParts.map((DD => {
          const cD = CD.loadoutCostParts.find((CD => CD.loadoutPartCurrency === DD.loadoutHeldPartCurrency));
          return cD ? {
            ...DD,
            loadoutHeldPartAmount: DD.loadoutHeldPartAmount - cD.loadoutPartAmount
          } : DD
        }))
      }
    }

    function BC(DD, CD) {
      return {
        loadoutNoticeKey: DD,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: CD,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const yC = "containmentLoadoutView";
    class MC extends DC {
      constructor(DD, CD, cD, ID) {
        super(DD, CD, cD, ID, "loadout", iC), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = DD => {
          this.slot = DD, this.selectedId = tC(this.board, DD), this.emit()
        }
      }
      messageOpens(DD) {
        return DD.loadoutMessageOpens
      }
      messageNotice(DD) {
        return DD.loadoutNotice
      }
      openingSelection(DD) {
        return tC(DD, this.slot)
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

    function tC(DD, CD) {
      if ("loadoutPerks" === CD) {
        var cD;
        const CD = DD.loadoutPerks;
        return (null !== (cD = CD.find((DD => DD.loadoutPerkEquipped))) && void 0 !== cD ? cD : CD[0]).loadoutPerkId
      }
      return IC(DD, CD).loadoutSlotEquippedId
    }
    const ZC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var oC = cD(36235),
      vC = cD(1280);
    const NC = {
        loadoutPrimary: `${HD}:loadoutSlotPrimary`,
        loadoutSecondary: `${HD}:loadoutSlotSecondary`,
        loadoutOffensive: `${HD}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${HD}:loadoutSlotSelfHelp`,
        loadoutArmour: `${HD}:loadoutSlotArmour`,
        loadoutPerks: `${HD}:loadoutSlotPerks`
      },
      gC = {
        section: "right",
        MM: "bottom",
        act: "top"
      },
      XC = (0, ID.createContext)({
        step: null,
        targetRef: () => {}
      });

    function mC() {
      const {
        step: DD,
        targetRef: CD
      } = (0, ID.useContext)(XC);
      return (cD, ID) => (null === DD || void 0 === DD ? void 0 : DD.kind) === cD && DD.id === ID ? CD : void 0
    }

    function nC(DD, CD) {
      const cD = CD.loadoutTargetId;
      if ("loadoutPerks" === CD.loadoutTargetSection) {
        const CD = DD.loadoutPerks.find((DD => DD.loadoutPerkId === cD));
        return {
          name: CD.loadoutPerkName,
          owned: CD.loadoutPerkOwned,
          equipped: CD.loadoutPerkEquipped
        }
      }
      const ID = IC(DD, CD.loadoutTargetSection),
        pD = ID.loadoutSlotOptions.find((DD => DD.loadoutOptionId === cD));
      return {
        name: pD.loadoutOptionName,
        owned: pD.loadoutOptionOwnedTier > 0,
        equipped: ID.loadoutSlotEquippedId === cD
      }
    }

    function OC(DD, CD, cD, ID) {
      const [pD, iD] = DD(`${HD}:${CD}`, {
        [cD]: "\x01"
      }).split("\x01");
      return (0, PD.jsxs)(PD.Fragment, {
        children: [pD, (0, PD.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: ID
        }), iD]
      })
    }

    function PC(DD) {
      let {
        view: CD,
        onDismiss: cD,
        children: pD
      } = DD;
      const {
        t: iD
      } = (0, BD.F)(), fD = CD.loadout, bD = CD.open ? fD.loadoutWalkthrough.map((DD => ({
        target: DD,
        info: nC(fD, DD)
      }))).find((DD => {
        let {
          info: CD
        } = DD;
        return !CD.equipped
      })) : void 0;
      let QD = null,
        wD = null;
      if (void 0 !== bD) {
        const {
          target: DD,
          info: cD
        } = bD;
        CD.slot !== DD.loadoutTargetSection ? (QD = {
          kind: "section",
          id: DD.loadoutTargetSection
        }, wD = OC(iD, "loadoutWalkthroughSection", "section", iD(NC[DD.loadoutTargetSection]))) : CD.selectedId !== DD.loadoutTargetId ? (QD = {
          kind: "MM",
          id: DD.loadoutTargetId
        }, wD = OC(iD, "loadoutWalkthroughPick", "name", cD.name)) : (QD = {
          kind: "act",
          id: DD.loadoutTargetId
        }, wD = OC(iD, cD.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", cD.name))
      }
      const SD = null === QD ? null : function(DD) {
          return `${DD.kind}:${DD.id}`
        }(QD),
        [yD, MD] = (0, ID.useState)(null),
        tD = (0, ID.useCallback)((DD => {
          MD((CD => null !== DD ? {
            key: SD,
            node: DD
          } : (null === CD || void 0 === CD ? void 0 : CD.key) === SD ? null : CD))
        }), [SD]),
        ZD = null !== SD && (null === yD || void 0 === yD ? void 0 : yD.key) === SD ? yD.node : null;
      return (0, PD.jsxs)(XC.Provider, {
        value: {
          step: QD,
          targetRef: tD
        },
        children: [pD, null !== QD && null !== ZD && (0, PD.jsx)(HC, {
          target: ZD,
          placement: gC[QD.kind],
          onDismiss: cD,
          children: wD
        }, SD)]
      })
    }

    function HC(DD) {
      let {
        target: CD,
        placement: cD,
        onDismiss: pD,
        children: iD
      } = DD;
      const {
        t: fD
      } = (0, BD.F)(), bD = (0, ID.useRef)(CD);
      return bD.current = CD, (0, vC.t)("popup", bD, pD), (0, PD.jsxs)(oC.h, {
        target: CD,
        placement: cD,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, PD.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, PD.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: ZC,
            alt: "",
            draggable: !1
          }), (0, PD.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: fD(`${HD}:operatorName`)
          }), (0, PD.jsx)(tD.l, {
            onClick: pD,
            ariaLabel: fD(`${HD}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, PD.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: iD
        })]
      })
    }
    const UC = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function xC(DD) {
      let {
        cost: CD,
        loadout: cD
      } = DD;
      const {
        t: ID
      } = (0, BD.F)();
      return CD.loadoutCostCoins <= 0 && 0 === CD.loadoutCostParts.length ? (0, PD.jsx)("span", {
        className: "LoadoutCost",
        children: ID(`${HD}:loadoutFree`)
      }) : (0, PD.jsxs)("span", {
        className: "LoadoutCost",
        children: [CD.loadoutCostCoins > 0 && (0, PD.jsx)(KD, {
          itemName: UD,
          amount: CD.loadoutCostCoins,
          Lb: cD.loadoutCoins
        }), CD.loadoutCostParts.map((DD => {
          const CD = cC(cD, DD.loadoutPartCurrency);
          return (0, PD.jsx)(KD, {
            itemName: CD.loadoutHeldPartItem,
            amount: DD.loadoutPartAmount,
            Lb: CD.loadoutHeldPartAmount
          }, DD.loadoutPartCurrency)
        }))]
      })
    }
    const qC = {
      loadoutStatFireRate: `${HD}:loadoutUnitPerMinute`,
      loadoutStatReload: `${HD}:loadoutUnitSeconds`,
      loadoutStatResupply: `${HD}:loadoutUnitSeconds`
    };

    function JC(DD) {
      return "loadoutStatPotency" === DD.loadoutStatKind ? (0, FD.S)(DD.loadoutStatValue) : String(DD.loadoutStatValue)
    }

    function KC(DD) {
      var CD;
      let {
        option: cD
      } = DD;
      const {
        t: ID
      } = (0, BD.F)(), pD = cD.loadoutOptionTiers, iD = null === (CD = pD[0]) || void 0 === CD ? void 0 : CD.loadoutTierStats.map((DD => DD.loadoutStatKind));
      if (!iD || 0 === iD.length) return null;
      const fD = cD.loadoutOptionOwnedTier,
        bD = (DD, CD) => {
          var cD;
          return null === (cD = pD[DD]) || void 0 === cD ? void 0 : cD.loadoutTierStats.find((DD => DD.loadoutStatKind === CD))
        };
      return (0, PD.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, PD.jsx)("thead", {
          children: (0, PD.jsxs)("tr", {
            children: [(0, PD.jsx)("th", {}), pD.map(((DD, CD) => (0, PD.jsx)("th", {
              className: wD()({
                Current: CD + 1 === fD,
                Next: CD === fD
              }),
              children: ID(`${HD}:loadoutTier`, {
                tier: (0, FD.S)(CD + 1)
              })
            }, CD)))]
          })
        }), (0, PD.jsx)("tbody", {
          children: iD.map((DD => {
            const CD = qC[DD];
            return (0, PD.jsxs)("tr", {
              children: [(0, PD.jsxs)("th", {
                scope: "row",
                children: [ID(`${HD}:${DD}`), CD && (0, PD.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: ID(CD)
                })]
              }), pD.map(((CD, cD) => {
                const ID = bD(cD, DD),
                  pD = cD > 0 ? bD(cD - 1, DD) : void 0,
                  iD = ID && pD ? ID.loadoutStatValue - pD.loadoutStatValue : 0,
                  QD = UC.has(DD) ? iD < 0 : iD > 0,
                  SD = cD === fD;
                return (0, PD.jsxs)("td", {
                  className: wD()({
                    Current: cD + 1 === fD,
                    Next: SD,
                    Gain: QD,
                    Owned: cD < fD
                  }),
                  children: [SD && QD && (0, PD.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: iD < 0 ? "\u25bc" : "\u25b2"
                  }), ID ? JC(ID) : "-"]
                }, cD)
              }))]
            }, DD)
          }))
        })]
      })
    }

    function aC(DD) {
      let {
        view: CD,
        controller: cD,
        slot: ID,
        option: pD
      } = DD;
      const {
        t: iD
      } = (0, BD.F)(), fD = CD.loadout, bD = pD.loadoutOptionOwnedTier, QD = pD.loadoutOptionTiers.length, wD = ID.loadoutSlotEquippedId === pD.loadoutOptionId, SD = bD < QD ? pD.loadoutOptionTiers[bD].loadoutTierCost : null, yD = null !== SD && CC(fD, SD), MD = pD.loadoutOptionId, ZD = mC();
      return (0, PD.jsxs)(PD.Fragment, {
        children: [(0, PD.jsx)(zC, {
          icon: pD.loadoutOptionIcon,
          name: pD.loadoutOptionName,
          status: 0 === bD ? iD(`${HD}:loadoutLocked`) : QD > 1 ? iD(`${HD}:loadoutTier`, {
            tier: (0, FD.S)(bD)
          }) : null,
          locked: 0 === bD,
          equipped: wD
        }), (0, PD.jsx)("p", {
          className: "BoardDescription",
          children: pD.loadoutOptionDescription
        }), (0, PD.jsx)(KC, {
          option: pD
        }), (0, PD.jsxs)("div", {
          ref: ZD("act", MD),
          className: "BoardActions",
          children: [null !== SD && (0, PD.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, PD.jsx)(xC, {
              cost: SD,
              loadout: fD
            }), (0, PD.jsx)(tD.o, {
              disabled: !yD || CD.pending,
              onClick: () => {
                cD.act(0 === bD ? "loadoutUnlock" : "loadoutUpgrade", MD)
              },
              children: 0 === bD ? iD(`${HD}:loadoutUnlock`) : iD(`${HD}:loadoutUpgrade`, {
                tier: (0, FD.S)(bD + 1)
              })
            })]
          }), null === SD && QD > 1 && (0, PD.jsx)("span", {
            className: "BoardHint",
            children: iD(`${HD}:loadoutMaxed`)
          }), bD > 0 && !wD && (0, PD.jsx)(tD.i, {
            disabled: CD.pending,
            onClick: () => {
              cD.act("loadoutEquip", MD)
            },
            children: iD(`${HD}:loadoutEquip`)
          })]
        })]
      })
    }

    function VC(DD) {
      let {
        view: CD,
        controller: cD,
        perk: ID
      } = DD;
      const {
        t: pD
      } = (0, BD.F)(), iD = CD.loadout, fD = pC(iD), bD = ID.loadoutPerkId, QD = mC();
      return (0, PD.jsxs)(PD.Fragment, {
        children: [(0, PD.jsx)(zC, {
          icon: ID.loadoutPerkIcon,
          name: ID.loadoutPerkName,
          status: ID.loadoutPerkOwned ? null : pD(`${HD}:loadoutLocked`),
          locked: !ID.loadoutPerkOwned,
          equipped: ID.loadoutPerkEquipped
        }), (0, PD.jsx)("p", {
          className: "BoardDescription",
          children: ID.loadoutPerkDescription
        }), (0, PD.jsxs)("div", {
          ref: QD("act", bD),
          className: "BoardActions",
          children: [!ID.loadoutPerkOwned && (0, PD.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, PD.jsx)(xC, {
              cost: ID.loadoutPerkCost,
              loadout: iD
            }), (0, PD.jsx)(tD.o, {
              disabled: !CC(iD, ID.loadoutPerkCost) || CD.pending,
              onClick: () => {
                cD.act("loadoutUnlock", bD)
              },
              children: pD(`${HD}:loadoutUnlock`)
            })]
          }), ID.loadoutPerkOwned && !ID.loadoutPerkEquipped && (0, PD.jsx)(tD.i, {
            disabled: fD || CD.pending,
            onClick: () => {
              cD.act("loadoutEquip", bD)
            },
            children: pD(`${HD}:loadoutEquip`)
          }), ID.loadoutPerkOwned && !ID.loadoutPerkEquipped && fD && (0, PD.jsx)("span", {
            className: "BoardHint",
            children: pD(`${HD}:loadoutSocketsFullHint`)
          }), ID.loadoutPerkEquipped && (0, PD.jsx)(tD.P, {
            disabled: CD.pending,
            onClick: () => {
              cD.act("loadoutUnequip", bD)
            },
            children: pD(`${HD}:loadoutUnequip`)
          })]
        })]
      })
    }

    function zC(DD) {
      let {
        icon: CD,
        name: cD,
        status: ID,
        locked: pD,
        equipped: iD
      } = DD;
      const {
        t: fD
      } = (0, BD.F)();
      return (0, PD.jsxs)(jD, {
        icon: (0, PD.jsx)(qD, {
          itemName: CD
        }),
        name: cD,
        children: [null !== ID && (0, PD.jsx)("span", {
          className: wD()("LoadoutStatusText", {
            Locked: pD
          }),
          children: ID
        }), iD && (0, PD.jsx)("span", {
          className: "BoardBadge",
          children: fD(`${HD}:loadoutEquippedBadge`)
        })]
      })
    }

    function jC(DD) {
      let {
        view: CD,
        controller: cD
      } = DD;
      const ID = CD.loadout;
      if ("loadoutPerks" === CD.slot) {
        const DD = ID.loadoutPerks.find((DD => DD.loadoutPerkId === CD.selectedId));
        return (0, PD.jsx)("section", {
          className: "BoardDetail",
          children: DD && (0, PD.jsx)(VC, {
            view: CD,
            controller: cD,
            perk: DD
          })
        })
      }
      const pD = IC(ID, CD.slot),
        iD = pD.loadoutSlotOptions.find((DD => DD.loadoutOptionId === CD.selectedId));
      return (0, PD.jsx)("section", {
        className: "BoardDetail",
        children: iD && (0, PD.jsx)(aC, {
          view: CD,
          controller: cD,
          slot: pD,
          option: iD
        })
      })
    }

    function lC(DD) {
      let {
        owned: CD,
        total: cD
      } = DD;
      return cD <= 1 ? null : (0, PD.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: cD
        }, ((DD, cD) => (0, PD.jsx)("span", {
          className: wD()("LoadoutPip", {
            Filled: cD < CD
          })
        }, cD)))
      })
    }

    function LC(DD) {
      let {
        view: CD,
        controller: cD
      } = DD;
      const {
        t: ID
      } = (0, BD.F)(), pD = CD.loadout, iD = mC();
      return (0, PD.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": ID(`${HD}:loadoutKit`),
        children: [pD.loadoutSlots.map((DD => {
          const pD = DD.loadoutSlotOptions.find((CD => CD.loadoutOptionId === DD.loadoutSlotEquippedId));
          return (0, PD.jsxs)("button", {
            ref: iD("section", DD.loadoutSlotKind),
            type: "button",
            className: wD()("LoadoutKitSlot", {
              Selected: CD.slot === DD.loadoutSlotKind
            }),
            onClick: () => {
              cD.selectSlot(DD.loadoutSlotKind)
            },
            children: [(0, PD.jsx)("span", {
              className: "LoadoutKitIcon",
              children: pD && (0, PD.jsx)(qD, {
                itemName: pD.loadoutOptionIcon
              })
            }), (0, PD.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, PD.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, PD.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: ID(NC[DD.loadoutSlotKind])
                }), pD && (0, PD.jsx)(lC, {
                  owned: pD.loadoutOptionOwnedTier,
                  total: pD.loadoutOptionTiers.length
                })]
              }), (0, PD.jsx)("span", {
                className: "LoadoutKitName",
                children: null === pD || void 0 === pD ? void 0 : pD.loadoutOptionName
              })]
            })]
          }, DD.loadoutSlotKind)
        })), (0, PD.jsx)(TC, {
          view: CD,
          controller: cD
        })]
      })
    }

    function TC(DD) {
      let {
        view: CD,
        controller: cD
      } = DD;
      const {
        t: ID
      } = (0, BD.F)(), pD = CD.loadout, iD = pD.loadoutPerks.filter((DD => DD.loadoutPerkEquipped)), fD = mC();
      return (0, PD.jsxs)("button", {
        ref: fD("section", "loadoutPerks"),
        type: "button",
        className: wD()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === CD.slot
        }),
        onClick: () => {
          cD.selectSlot("loadoutPerks")
        },
        children: [(0, PD.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, PD.jsx)("span", {
            className: "LoadoutKitLabel",
            children: ID(NC.loadoutPerks)
          }), (0, PD.jsx)("span", {
            className: "LoadoutPerkCount",
            children: ID(`${HD}:loadoutPerkCount`, {
              equipped: String(iD.length),
              max: String(pD.loadoutMaxPerks)
            })
          })]
        }), (0, PD.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: pD.loadoutMaxPerks
          }, ((DD, CD) => {
            const cD = iD[CD];
            return (0, PD.jsxs)("span", {
              className: wD()("LoadoutSocket", {
                Filled: cD,
                Empty: !cD
              }),
              children: [(0, PD.jsx)("span", {
                className: "LoadoutSocketWell",
                children: cD && (0, PD.jsx)(qD, {
                  itemName: cD.loadoutPerkIcon
                })
              }), (0, PD.jsx)("span", {
                className: "LoadoutSocketName",
                children: cD ? cD.loadoutPerkName : ID(`${HD}:loadoutPerkSocketEmpty`)
              })]
            }, CD)
          }))
        })]
      })
    }

    function GC(DD) {
      let {
        icon: CD,
        name: cD,
        selected: ID,
        equipped: pD,
        locked: iD,
        ownedTier: fD,
        tiers: bD,
        buttonRef: QD,
        onSelect: wD
      } = DD;
      const {
        t: SD
      } = (0, BD.F)();
      return (0, PD.jsxs)(zD, {
        icon: (0, PD.jsx)(qD, {
          itemName: CD
        }),
        name: cD,
        selected: ID,
        locked: iD,
        buttonRef: QD,
        onSelect: wD,
        children: [pD && (0, PD.jsx)("span", {
          className: "BoardBadge",
          children: SD(`${HD}:loadoutEquippedBadge`)
        }), iD && (0, PD.jsx)("span", {
          className: "BoardBadge Muted",
          children: SD(`${HD}:loadoutLocked`)
        }), !iD && (0, PD.jsx)(lC, {
          owned: fD,
          total: bD
        })]
      })
    }

    function RC(DD) {
      let {
        view: CD,
        controller: cD
      } = DD;
      const ID = CD.loadout,
        pD = mC();
      if ("loadoutPerks" === CD.slot) return (0, PD.jsx)("div", {
        className: "BoardTiles",
        children: ID.loadoutPerks.map((DD => (0, PD.jsx)(GC, {
          icon: DD.loadoutPerkIcon,
          name: DD.loadoutPerkName,
          selected: CD.selectedId === DD.loadoutPerkId,
          equipped: DD.loadoutPerkEquipped,
          locked: !DD.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: pD("MM", DD.loadoutPerkId),
          onSelect: () => {
            cD.select(DD.loadoutPerkId)
          }
        }, DD.loadoutPerkId)))
      });
      const iD = IC(ID, CD.slot);
      return (0, PD.jsx)("div", {
        className: "BoardTiles",
        children: iD.loadoutSlotOptions.map((DD => (0, PD.jsx)(GC, {
          icon: DD.loadoutOptionIcon,
          name: DD.loadoutOptionName,
          selected: CD.selectedId === DD.loadoutOptionId,
          equipped: iD.loadoutSlotEquippedId === DD.loadoutOptionId,
          locked: 0 === DD.loadoutOptionOwnedTier,
          ownedTier: DD.loadoutOptionOwnedTier,
          tiers: DD.loadoutOptionTiers.length,
          buttonRef: pD("MM", DD.loadoutOptionId),
          onSelect: () => {
            cD.select(DD.loadoutOptionId)
          }
        }, DD.loadoutOptionId)))
      })
    }

    function kC(DD) {
      let {
        loadout: CD
      } = DD;
      return (0, PD.jsx)(lD, {
        coins: CD.loadoutCoins,
        children: CD.loadoutHeldParts.filter((DD => DD.loadoutHeldPartAmount > 0)).map((DD => (0, PD.jsx)(KD, {
          itemName: DD.loadoutHeldPartItem,
          amount: DD.loadoutHeldPartAmount
        }, DD.loadoutHeldPartCurrency)))
      })
    }

    function dC(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, SD.g)(yC, CD.getSnapshot()),
        {
          t: ID
        } = (0, BD.F)();
      if (null === cD.loadout) return null;
      const pD = cD.notice;
      return (0, PD.jsx)(PC, {
        view: cD,
        onDismiss: CD.dismiss,
        children: (0, PD.jsxs)(xD, {
          open: cD.open,
          onDismiss: CD.dismiss,
          title: ID(`${HD}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, PD.jsx)(kC, {
            loadout: cD.loadout
          }),
          statusRefused: null === pD || void 0 === pD ? void 0 : pD.loadoutNoticeRefused,
          status: (0, PD.jsxs)(PD.Fragment, {
            children: [(0, PD.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: ID(`${HD}:loadoutRadioBadge`)
            }), null !== pD && ID(`${HD}:${pD.loadoutNoticeKey}`, {
              name: pD.loadoutNoticeName,
              tier: (0, FD.S)(pD.loadoutNoticeTier),
              max: String(cD.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, PD.jsx)(LC, {
            view: cD,
            controller: CD
          }), (0, PD.jsx)(RC, {
            view: cD,
            controller: CD
          }), (0, PD.jsx)(jC, {
            view: cD,
            controller: CD
          })]
        })
      })
    }

    function YC(DD, CD, cD) {
      const ID = DD.locatorEntries.find((DD => DD.locatorEntryId === cD));
      if (!ID) return null;
      const pD = ID.locatorEntryName;
      if ("locatorDisarm" === CD) return ID.locatorEntryArmed ? {
        board: WC(DD, null),
        notice: sC("locatorNoticeDisarmed", pD)
      } : null;
      if ("locatorArm" === CD) return ID.locatorEntryOwned && !ID.locatorEntryArmed ? {
        board: WC(DD, cD),
        notice: sC("locatorNoticeArmed", pD)
      } : null;
      if (ID.locatorEntryOwned || DD.locatorCoins < ID.locatorEntryPrice) return null;
      const iD = WC({
        ...DD,
        locatorCoins: DD.locatorCoins - ID.locatorEntryPrice
      }, cD);
      return {
        board: {
          ...iD,
          locatorEntries: iD.locatorEntries.map((DD => DD.locatorEntryId === cD ? {
            ...DD,
            locatorEntryOwned: !0
          } : DD))
        },
        notice: sC("locatorNoticeBought", pD)
      }
    }

    function WC(DD, CD) {
      return {
        ...DD,
        locatorEntries: DD.locatorEntries.map((DD => {
          const cD = DD.locatorEntryId === CD;
          return DD.locatorEntryArmed === cD ? DD : {
            ...DD,
            locatorEntryArmed: cD
          }
        }))
      }
    }

    function sC(DD, CD) {
      return {
        locatorNoticeKey: DD,
        locatorNoticeRefused: !1,
        locatorNoticeName: CD
      }
    }
    const EC = "containmentLocatorView";
    class eC extends DC {
      constructor(DD, CD, cD, ID) {
        super(DD, CD, cD, ID, "locator", YC), this.snapshot = this.buildSnapshot()
      }
      messageOpens(DD) {
        return DD.locatorMessageOpens
      }
      messageNotice(DD) {
        return DD.locatorNotice
      }
      openingSelection(DD) {
        var CD;
        const cD = DD.locatorEntries;
        return (null !== (CD = cD.find((DD => DD.locatorEntryArmed))) && void 0 !== CD ? CD : cD[0]).locatorEntryId
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
    const uC = {
        locatorContained: `${HD}:locatorFlavourContained`,
        locatorEncountered: `${HD}:locatorFlavourEncountered`,
        locatorUnseen: `${HD}:locatorFlavourUnseen`
      },
      hC = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${HD}:locatorAttunedNormal`,
        codexHardOnly: `${HD}:locatorAttunedHard`
      };

    function rC() {
      return (0, PD.jsx)(PD.Fragment, {
        children: Array.from({
          length: 5
        }, ((DD, CD) => (0, PD.jsx)("span", {
          className: "LocatorFly",
          children: (0, PD.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, CD)))
      })
    }

    function AC(DD) {
      let {
        entry: CD
      } = DD;
      const {
        t: cD
      } = (0, BD.F)();
      return CD.locatorEntryArmed ? (0, PD.jsx)("span", {
        className: "BoardBadge Armed",
        children: cD(`${HD}:locatorArmedBadge`)
      }) : CD.locatorEntryOwned ? (0, PD.jsx)("span", {
        className: "BoardBadge",
        children: cD(`${HD}:locatorOwnedBadge`)
      }) : null
    }

    function FC(DD) {
      let {
        entry: CD,
        coins: cD,
        inTile: ID = !1
      } = DD;
      return (0, PD.jsx)(KD, {
        itemName: UD,
        amount: CD.locatorEntryPrice,
        Lb: cD,
        inTile: ID
      })
    }

    function Dc(DD) {
      let {
        view: CD,
        controller: cD,
        entry: ID
      } = DD;
      const {
        t: pD
      } = (0, BD.F)(), iD = ID.locatorEntryId, fD = CD.locators.locatorEntries.find((DD => DD.locatorEntryArmed && DD !== ID));
      return (0, PD.jsxs)("div", {
        className: "BoardActions",
        children: [ID.locatorEntryArmed && (0, PD.jsx)(tD.P, {
          disabled: CD.pending,
          onClick: () => {
            cD.act("locatorDisarm", iD)
          },
          children: pD(`${HD}:locatorDisarm`)
        }), ID.locatorEntryOwned && !ID.locatorEntryArmed && (0, PD.jsx)(tD.i, {
          disabled: CD.pending,
          onClick: () => {
            cD.act("locatorArm", iD)
          },
          children: pD(`${HD}:locatorArm`)
        }), !ID.locatorEntryOwned && (0, PD.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, PD.jsx)(FC, {
            entry: ID,
            coins: CD.locators.locatorCoins
          }), (0, PD.jsx)(tD.o, {
            disabled: CD.locators.locatorCoins < ID.locatorEntryPrice || CD.pending,
            onClick: () => {
              cD.act("locatorBuy", iD)
            },
            children: pD(`${HD}:locatorBuy`)
          })]
        }), fD && !ID.locatorEntryArmed && (0, PD.jsx)("span", {
          className: "BoardHint",
          children: pD(`${HD}:locatorReplacesHint`, {
            name: fD.locatorEntryName
          })
        })]
      })
    }

    function Cc(DD) {
      let {
        entry: CD
      } = DD;
      return "locatorUnseen" === CD.locatorEntryStanding ? (0, PD.jsx)(qD, {
        itemName: "Compass"
      }) : (0, PD.jsx)(JD, {
        anomalyId: CD.locatorEntryId,
        caught: "locatorContained" === CD.locatorEntryStanding
      })
    }

    function cc(DD) {
      let {
        view: CD,
        controller: cD,
        entry: ID
      } = DD;
      const {
        t: pD
      } = (0, BD.F)(), iD = hC[ID.locatorEntryDifficulty];
      return (0, PD.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, PD.jsxs)("div", {
          className: wD()("LocatorLabel", {
            Armed: ID.locatorEntryArmed
          }),
          children: [(0, PD.jsx)(jD, {
            icon: (0, PD.jsx)(Cc, {
              entry: ID
            }),
            name: pD(`${HD}:locatorName`, {
              name: ID.locatorEntryName
            }),
            children: (0, PD.jsx)(AC, {
              entry: ID
            })
          }), (0, PD.jsx)("p", {
            className: "BoardDescription",
            children: pD(ID.locatorEntryArmed ? `${HD}:locatorFlavourArmed` : uC[ID.locatorEntryStanding])
          }), null !== iD && (0, PD.jsx)("p", {
            className: "LocatorAttuned",
            children: pD(iD)
          }), (0, PD.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: pD(`${HD}:locatorUsage`)
          })]
        }), (0, PD.jsx)(Dc, {
          view: CD,
          controller: cD,
          entry: ID
        })]
      })
    }

    function Ic(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, SD.g)(EC, CD.getSnapshot()),
        {
          t: ID
        } = (0, BD.F)(),
        pD = cD.locators;
      if (null === pD) return null;
      const iD = pD.locatorEntries.find((DD => DD.locatorEntryId === cD.selectedId)),
        fD = cD.notice;
      return (0, PD.jsxs)(xD, {
        open: cD.open,
        onDismiss: CD.dismiss,
        title: ID(`${HD}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, PD.jsx)(rC, {}),
        headerExtra: (0, PD.jsx)(lD, {
          coins: pD.locatorCoins
        }),
        statusRefused: null === fD || void 0 === fD ? void 0 : fD.locatorNoticeRefused,
        status: (0, PD.jsxs)(PD.Fragment, {
          children: [(0, PD.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: ID(`${HD}:locatorKeeperName`)
          }), null !== fD && ID(`${HD}:${fD.locatorNoticeKey}`, {
            name: fD.locatorNoticeName
          })]
        }),
        children: [(0, PD.jsx)("div", {
          className: "BoardTiles",
          children: pD.locatorEntries.map((DD => (0, PD.jsxs)(zD, {
            icon: (0, PD.jsx)(Cc, {
              entry: DD
            }),
            name: DD.locatorEntryName,
            selected: DD === iD,
            locked: !1,
            className: wD()("LocatorTag", {
              Armed: DD.locatorEntryArmed
            }),
            onSelect: () => {
              CD.select(DD.locatorEntryId)
            },
            children: [(0, PD.jsx)(AC, {
              entry: DD
            }), !DD.locatorEntryOwned && (0, PD.jsx)(FC, {
              entry: DD,
              coins: pD.locatorCoins,
              inTile: !0
            })]
          }, DD.locatorEntryId)))
        }), (0, PD.jsx)(cc, {
          view: cD,
          controller: CD,
          entry: iD
        })]
      })
    }

    function pc(DD) {
      let {
        loadout: CD,
        codex: cD,
        locator: ID
      } = DD;
      return (0, PD.jsxs)(PD.Fragment, {
        children: [(0, PD.jsx)(dC, {
          controller: CD
        }), (0, PD.jsx)(AD, {
          controller: cD
        }), (0, PD.jsx)(Ic, {
          controller: ID
        })]
      })
    }
    var ic = cD(37919);
    class fc {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = DD, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new ic.d({
          spacingMs: 0,
          now: CD
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(DD, CD) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, CD(), this.notify()
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
    var bc = cD(37912);
    const Qc = new Map([
      ["npc_general", ZC],
      ["npc_tentacle_guy", bc]
    ]);

    function wc(DD) {
      const CD = Qc.get(DD);
      if (void 0 === CD) return null;
      const cD = document.createElement("img");
      return cD.src = CD, cD.alt = "", cD.draggable = !1, cD.style.imageRendering = "pixelated", cD
    }
    const Sc = function() {
      let DD, CD = !1,
        cD = null,
        QD = null;
      const wD = [],
        SD = DD => {
          for (const CD of wD) CD !== DD && CD.close();
          (0, bD.s)()
        },
        BD = DD => {
          DD && (0, bD.i)()
        },
        yD = new fc((CD => {
          DD.sendCommand(CD)
        })),
        MD = new MC((DD => {
          fD.i.Uo(yC, DD, !0)
        }), SD, BD, yD),
        tD = new GD((DD => {
          fD.i.Uo(TD, DD, !0)
        }), SD, BD),
        ZD = new eC((DD => {
          fD.i.Uo(EC, DD, !0)
        }), SD, BD, yD);
      wD.push(MD, tD, ZD);
      return {
        onCreate: CD => {
          DD = CD, cD = (0, bD.v)(null, {
            content: (0, ID.createElement)(pc, {
              loadout: MD,
              codex: tD,
              locator: ZD
            }),
            onClose: () => {
              for (const DD of wD) DD.close()
            }
          }), QD = (0, iD.e)(wc)
        },
        onReceivedMessageFromServer: (DD, CD) => {
          "containmentLoadout" === DD ? MD.kt(CD) : "containmentLoadoutClose" === DD ? MD.isOpen() && (MD.close(), (0, bD.e)()) : "containmentCodex" === DD ? tD.kt(CD) : "containmentLocator" === DD && ZD.kt(CD)
        },
        wy: () => {
          CD || pD.d.get("loadingOverlayVisible") || (CD = !0, DD.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var DD, CD;
          null === (DD = cD) || void 0 === DD || DD(), cD = null, null === (CD = QD) || void 0 === CD || CD(), QD = null;
          for (const cD of wD) cD.dispose();
          yD.dispose()
        }
      }
    }
  },
  36240: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => lD,
      D: () => LD,
      F: () => zD,
      J: () => TD,
      e: () => QD,
      f: () => qD,
      j: () => bD,
      l: () => VD,
      m: () => UD,
      n: () => nD,
      o: () => aD,
      s: () => KD,
      u: () => HD,
      y: () => jD
    });
    var ID = cD(36);
    const pD = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      iD = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      fD = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      bD = iD.filter((DD => "docsButton" !== DD)),
      QD = fD.filter((DD => "aiHelperButton" !== DD)),
      wD = "codeEditorTutorials",
      SD = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      BD = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let yD = null,
      MD = null;
    const tD = new Set,
      ZD = new Set;
    let oD = null;
    const vD = new Set,
      ND = new Set;

    function gD() {
      ND.forEach((DD => {
        DD()
      }))
    }

    function XD() {
      if (!yD) {
        const DD = ID.h.getItem(wD);
        yD = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof DD && null !== DD ? DD : {}
        }
      }
      return yD
    }

    function mD(DD) {
      const CD = XD();
      CD[DD] || (yD = {
        ...CD,
        [DD]: !0
      }, ID.h.setItem(wD, yD))
    }

    function nD(DD) {
      return "docsOverview" === DD ? iD : "aiHelperOverview" === DD ? fD : MD ? pD[MD] : []
    }

    function OD(DD) {
      return ("worldCodeButton" !== DD || !XD().worldCodeIntroShown) && !vD.has(DD)
    }

    function PD(DD) {
      var CD;
      return (null === (CD = oD) || void 0 === CD ? void 0 : CD.name) === DD ? oD.stepsDone : tD
    }

    function HD(DD, CD) {
      if (! function(DD) {
          return oD ? oD.name === DD : "welcome" === DD
        }(DD) || !OD(CD) || PD(DD).has(CD)) return !1;
      if (oD) return !0;
      const cD = SD[CD];
      return cD ? !XD()[cD] || ZD.has(CD) : !XD()[BD[DD]]
    }

    function UD(DD) {
      var CD;
      return null !== (CD = nD(DD).find((CD => HD(DD, CD)))) && void 0 !== CD ? CD : null
    }

    function xD(DD) {
      var CD;
      mD(BD[DD]), (null === (CD = oD) || void 0 === CD ? void 0 : CD.name) === DD && (oD = null)
    }

    function qD(DD) {
      const CD = (oD ? [oD.name] : ["welcome", "docsOverview"]).find((CD => UD(CD) === DD));
      if (!CD) return;
      PD(CD).add(DD);
      const cD = SD[DD];
      cD && (mD(cD), oD || ZD.add(DD)), null === UD(CD) && xD(CD), gD()
    }

    function JD(DD, CD) {
      const cD = nD(DD),
        ID = PD(DD);
      for (let pD = cD.indexOf(CD) - 1; pD >= 0; pD--)
        if (ID.has(cD[pD]) && OD(cD[pD])) return cD[pD];
      return null
    }

    function KD(DD, CD) {
      return null !== JD(DD, CD)
    }

    function aD(DD, CD) {
      const cD = JD(DD, CD);
      cD && (PD(DD).delete(cD), gD())
    }

    function VD(DD) {
      xD(DD), "welcome" === DD && nD("welcome").forEach((DD => {
        const CD = SD[DD];
        CD && mD(CD)
      })), gD()
    }

    function zD(DD) {
      oD = {
        name: DD,
        stepsDone: new Set
      }, gD()
    }

    function jD() {
      (oD || 0 !== tD.size || 0 !== ZD.size) && (oD = null, tD.clear(), ZD.clear(), gD())
    }

    function lD(DD, CD) {
      const cD = CD ? DD : MD === DD ? null : MD;
      cD !== MD && (MD = cD, gD())
    }

    function LD(DD, CD) {
      vD.has(DD) === CD && (CD ? vD.delete(DD) : vD.add(DD), gD())
    }

    function TD(DD) {
      return ND.add(DD), () => {
        ND.delete(DD)
      }
    }
  },
  38601: (DD, CD, cD) => {
    var ID = {
      "./breach-zero-uncaught.webp": 38604,
      "./breach-zero.webp": 38613,
      "./brood-father-uncaught.webp": 38621,
      "./brood-father.webp": 38626,
      "./carousel-uncaught.webp": 38633,
      "./carousel.webp": 38637,
      "./deadlock-uncaught.webp": 38639,
      "./deadlock.webp": 38641,
      "./frost-revenant-uncaught.webp": 38647,
      "./frost-revenant.webp": 38652,
      "./hollow-choir-uncaught.webp": 38659,
      "./hollow-choir.webp": 38668,
      "./magma-warden-uncaught.webp": 38672,
      "./magma-warden.webp": 38677,
      "./patient-zero-uncaught.webp": 38683,
      "./patient-zero.webp": 38690,
      "./siege-engine-uncaught.webp": 38695,
      "./siege-engine.webp": 38700,
      "./warp-stalker-uncaught.webp": 38708,
      "./warp-stalker.webp": 38712
    };

    function pD(DD) {
      var CD = iD(DD);
      return cD(CD)
    }

    function iD(DD) {
      if (!cD.o(ID, DD)) {
        var CD = new Error("Cannot find module '" + DD + "'");
        throw CD.code = "MODULE_NOT_FOUND", CD
      }
      return ID[DD]
    }
    pD.keys = function() {
      return Object.keys(ID)
    }, pD.resolve = iD, DD.exports = pD, pD.id = 38601
  },
  38604: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38613: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38621: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38626: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38633: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38637: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38639: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38641: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38647: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38652: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38659: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38668: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38672: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38677: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38683: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38690: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38695: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38700: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38708: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38712: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37912: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);